const path = require('path');
const logger = require('../utils/logger.js');
const { Config } = require('../../config/index.js');

function normalizeModule(mod) {
  if (!mod) return null;
  return mod.default || mod;
}

function resolveExtensionPath(extensionPath) {
  if (!extensionPath) return '';
  return path.isAbsolute(extensionPath)
    ? extensionPath
    : path.resolve(__dirname, '../../', extensionPath);
}

function loadServerCustomerExtension() {
  const extensionPath = resolveExtensionPath(Config.CustomerExtensionPath);
  if (!extensionPath) {
    logger.info('CUSTOMER_EXTENSION', 'CUSTOMER_EXTENSION_PATH 未配置，跳过客户服务端插件加载');
    return null;
  }

  try {
    const loaded = normalizeModule(require(extensionPath));
    if (!loaded || typeof loaded !== 'object') {
      throw new Error('customer extension must export an object');
    }
    logger.info('CUSTOMER_EXTENSION', `客户服务端插件已加载: ${loaded.name || extensionPath}`);
    return loaded;
  } catch (error) {
    logger.error('CUSTOMER_EXTENSION', error, { extensionPath });
    throw error;
  }
}

module.exports = { loadServerCustomerExtension };
