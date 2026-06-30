const express = require('express');
const logger = require('../utils/logger.js');
const { registerProvider } = require('../services/providers');
const { setStorageProvider } = require('../services/storage');

const CUSTOMER_API_PREFIX = '/api/customer';

function assertHandler(fn, label) {
  if (typeof fn !== 'function') {
    throw new Error(`${label} must be a function`);
  }
}

function normalizeRouteEntry(entry) {
  if (typeof entry === 'function') {
    return { path: '/', router: entry };
  }
  if (!entry || typeof entry !== 'object') {
    throw new Error('customer route entry must be a router function or { path, router }');
  }
  const routePath = entry.path || '/';
  if (typeof routePath !== 'string' || !routePath.startsWith('/') || routePath.includes('..')) {
    throw new Error(`invalid customer route path: ${routePath}`);
  }
  assertHandler(entry.router, `customer route ${routePath}`);
  return { path: routePath, router: entry.router };
}

function registerCustomerProviders(extension) {
  const providers = extension?.providers || {};
  if (providers.authProvider) registerProvider('auth', providers.authProvider);
  if (providers.userProfileProvider) registerProvider('userProfile', providers.userProfileProvider);
  if (providers.roomMetadataProvider) registerProvider('roomMetadata', providers.roomMetadataProvider);
  if (providers.moderationProvider) registerProvider('moderation', providers.moderationProvider);
  if (providers.analyticsProvider) registerProvider('analytics', providers.analyticsProvider);
  if (providers.storageProvider) {
    setStorageProvider(providers.storageProvider);
    registerProvider('storage', providers.storageProvider);
  }
}

function createCustomerRouter(extension) {
  const router = express.Router();

  for (const middleware of extension?.middlewares || []) {
    assertHandler(middleware, 'customer middleware');
    router.use(middleware);
  }

  for (const route of extension?.routes || []) {
    const normalized = normalizeRouteEntry(route);
    router.use(normalized.path, normalized.router);
  }

  return router;
}

function applyServerCustomerExtension(app, extension) {
  if (!extension) return;
  registerCustomerProviders(extension);

  const hasRoutes = Array.isArray(extension.routes) && extension.routes.length > 0;
  const hasMiddlewares = Array.isArray(extension.middlewares) && extension.middlewares.length > 0;
  if (!hasRoutes && !hasMiddlewares) {
    logger.info('CUSTOMER_EXTENSION', '客户服务端插件未声明 routes/middlewares，仅注册 providers');
    return;
  }

  const router = createCustomerRouter(extension);
  app.use(CUSTOMER_API_PREFIX, router);
  logger.info('CUSTOMER_EXTENSION', `客户 API 已挂载到 ${CUSTOMER_API_PREFIX}`);
}

module.exports = {
  CUSTOMER_API_PREFIX,
  applyServerCustomerExtension,
  registerCustomerProviders,
  createCustomerRouter,
};
