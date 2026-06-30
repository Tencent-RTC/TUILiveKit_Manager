const AuthProvider = require('./AuthProvider');
const { Config } = require('../../../config/index.js');
const { getUserSig, getBasicInfo } = require('../../config/basic-info-config.js');

class DefaultAuthProvider extends AuthProvider {
  constructor() {
    super('default-auth');
  }

  isServerConfigured() {
    return !!(Config.SecretKey && Config.SdkAppId > 0);
  }

  extractCredentials(req) {
    return {
      sdkAppId: Number(req.headers['x-sdk-app-id'] || 0),
      userId: req.headers['x-user-id'] || '',
      userSig: req.headers['x-user-sig'] || '',
    };
  }

  shouldSkipAuth(req) {
    return ['/api/check_config', '/api/login'].includes(req.path);
  }

  getRequestCredentials(req) {
    const proxied = req.credentials;
    if (proxied && proxied.sdkAppId && proxied.userId && proxied.userSig) {
      return {
        sdkAppId: proxied.sdkAppId,
        identifier: proxied.userId,
        userSig: proxied.userSig,
      };
    }
    return this.getServerCredentials();
  }

  getServerCredentials() {
    if (!this.isServerConfigured()) return null;
    const userInfo = getBasicInfo();
    if (!userInfo?.UserSig) return null;
    return {
      sdkAppId: Config.SdkAppId,
      identifier: userInfo.UserId,
      userSig: userInfo.UserSig,
    };
  }

  createLoginResponse(params = {}) {
    let { userId, userSig, sdkAppId, domain } = params;

    // 前端自主凭证模式：用户在登录页输入了 sdkAppId + secretKey，
    // 前端已本地计算 userSig 并传入，此时应走 proxy 模式，不使用服务端凭证
    const hasProxyCredentials = !!(userId && userSig && sdkAppId);

    if (!hasProxyCredentials && this.isServerConfigured()) {
      const sigInfo = getUserSig(Config.Identifier);
      return {
        code: 0,
        message: 'success',
        data: {
          token: `auto_token_${Date.now()}`,
          userId: Config.Identifier,
          userName: '超级管理员',
          sdkAppId: Config.SdkAppId,
          userSig: sigInfo ? sigInfo.UserSig : '',
          configured: true,
          domain: Config.Domain,
        },
      };
    }

    if (!sdkAppId && Config.SdkAppId > 0) sdkAppId = Config.SdkAppId;
    if (!userId && Config.Identifier) userId = Config.Identifier;
    const usedDomain = domain || Config.Domain;

    if (!userId || !userSig || !sdkAppId) {
      return { code: -1, message: '请提供 UserId、UserSig 和 SdkAppId' };
    }

    return {
      code: 0,
      message: 'success',
      data: {
        token: `proxy_${Date.now()}`,
        userId,
        userName: userId,
        sdkAppId: Number(sdkAppId),
        userSig,
        configured: false,
        domain: usedDomain,
      },
    };
  }
}

module.exports = DefaultAuthProvider;
