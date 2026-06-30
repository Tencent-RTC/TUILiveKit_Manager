/**
 * 凭证透传中间件
 * 当 server 端未配置 SecretKey/SdkAppId 时，从请求 header 中提取前端透传的凭证
 */
const { Config } = require('../../config/index.js');
const logger = require('../utils/logger.js');

/**
 * 判断 server 端是否已完整配置（有 SecretKey 且有 SdkAppId）
 */
function isServerConfigured() {
  return !!(Config.SecretKey && Config.SdkAppId > 0);
}

/**
 * 从请求 header 中提取前端透传的凭证信息
 */
function extractCredentials(req) {
  return {
    sdkAppId: Number(req.headers['x-sdk-app-id'] || 0),
    userId: req.headers['x-user-id'] || '',
    userSig: req.headers['x-user-sig'] || '',
  };
}

/**
 * 凭证透传中间件
 * - 前端通过登录页显式选择 proxy 模式（请求头携带完整凭证）：以用户透传凭证为准
 * - 前端未透传凭证：若 server 端已配置则使用服务端凭证
 *
 * 注意：proxy 模式的核心目的是让用户用自己的 SdkAppId/SecretKey。
 * 因此只要前端显式传入了完整凭证，就应当优先使用它，
 * 即使 server 端也配置了 SecretKey/SdkAppId（常见于开发环境）
 * —— 否则用户在登录页输入的凭证会被服务端默默忽略，"proxy 模式"形同虚设。
 */
function credentialProxy(req, res, next) {
  // 先检查前端是否透传了凭证
  const creds = extractCredentials(req);
  const hasFrontendCreds = creds.sdkAppId > 0 && creds.userId && creds.userSig;

  // 前端显式选择 proxy 模式：优先使用用户透传的凭证
  if (hasFrontendCreds) {
    logger.info('CREDENTIAL', `[${req.method} ${req.path}] 使用前端透传凭证（proxy 模式）`, {
      sdkAppId: creds.sdkAppId,
      userId: creds.userId,
    });
    req.credentials = creds;
    return next();
  }

  // 前端未透传凭证：若服务端已配置则使用服务端凭证
  if (isServerConfigured()) {
    logger.info('CREDENTIAL', `[${req.method} ${req.path}] 使用服务端配置凭证`, {
      sdkAppId: Config.SdkAppId,
      identifier: Config.Identifier,
      note: '前端未传凭证，使用服务端配置',
    });
    req.credentials = null;
    return next();
  }

  // 对于 check_config 和 login 接口不要求凭证
  const skipPaths = ['/api/check_config', '/api/login'];
  if (skipPaths.includes(req.path)) {
    req.credentials = null;
    logger.info('CREDENTIAL', `[${req.method} ${req.path}] 跳过凭证检查（登录/配置接口）`);
    return next();
  }

  // 其他接口需要凭证但都没有
  logger.warn('CREDENTIAL', `[${req.method} ${req.path}] 无可用凭证，拒绝请求`, {
    sdkAppId: creds.sdkAppId,
    userId: creds.userId || '(空)',
    hasUserSig: !!creds.userSig,
  });
  return res.status(401).json({
    code: -1,
    message: '服务端未配置凭证，请先登录并提供 SdkAppId、UserId 和 UserSig',
  });
}

module.exports = { credentialProxy, isServerConfigured, extractCredentials };
