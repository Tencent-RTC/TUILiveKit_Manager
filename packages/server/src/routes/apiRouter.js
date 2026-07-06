const { Router } = require('express');
const multer = require('multer');
const { getUserSig, getBasicInfo } = require('../config/basic-info-config.js');
const { Config } = require('../../config/index.js');
const { isUploadEnabled, getUploadConfig, generateKey, uploadFile } = require('../services/storage/index.js');
const { getProvider } = require('../services/providers');
const { asyncHandler } = require('../middleware/asyncHandler');
const { isServerConfigured } = require('../middleware/credentialProxy.js');
const logger = require('../utils/logger.js');
const tencentcloud = require('@tencent/tencentcloud-sdk-nodejs');
const IMClient = tencentcloud.im.v20190318.Client;
const TRTCClient = tencentcloud.trtc.v20190722.Client;

// multer 配置：内存存储，限制 10MB
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'video/mp4'];
    const allowedExtensions = ['.svga'];
    const fileExtension = '.' + (file.originalname.split('.').pop() || '').toLowerCase();
    if (allowedMimes.includes(file.mimetype) || allowedExtensions.includes(fileExtension)) {
      cb(null, true);
    } else {
      const error = new Error('仅支持 JPG/PNG/GIF/WebP/SVG/SVGA/MP4 格式的文件');
      logger.warn('UPLOAD_FILE_FILTER', error.message, { mimetype: file.mimetype, originalname: file.originalname });
      cb(error);
    }
  },
});

// Multer 错误处理中间件
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Multer 错误
    logger.error('UPLOAD_MULTER', err, { field: err.field, code: err.code });
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(400).json({ code: -1, message: '文件大小超过限制(最大10MB)' });
    } else {
      res.status(400).json({ code: -1, message: err.message });
    }
  } else if (err) {
    // 其他错误
    logger.error('UPLOAD_ERROR', err);
    res.status(400).json({ code: -1, message: err.message });
  } else {
    next();
  }
};

const apiRouter = Router();

// ========== 认证与配置 ==========

// 检查 server 端配置状态
apiRouter.get('/check_config', (req, res) => {
  const configured = isServerConfigured();
  const hasSdkAppId = Config.SdkAppId > 0;
  const hasSecretKey = !!Config.SecretKey;
  const hasIdentifier = !!Config.Identifier;
  res.json({
    code: 0,
    message: 'success',
    data: {
      configured,
      sdkAppId: hasSdkAppId ? Config.SdkAppId : 0,
      hasSdkAppId,
      hasSecretKey,
      hasIdentifier,
      identifier: hasIdentifier ? Config.Identifier : '',
      liveViolationRefreshInterval: Config.LiveViolationRefreshInterval,
      moderationMode: Config.ModerationMode,
    },
  });
});

// 登录
apiRouter.post('/login', (req, res) => {
  const authProvider = getProvider('auth');
  if (authProvider?.createLoginResponse) {
    const result = authProvider.createLoginResponse(req.body || {});
    logger.info('LOGIN', '使用 AuthProvider 登录', {
      provider: authProvider.name,
      success: result.code === 0,
    });
    res.json(result);
    return;
  }

  const hasSdkAppId = Config.SdkAppId > 0;
  const hasSecretKey = !!Config.SecretKey;
  const hasIdentifier = !!Config.Identifier;

  // 从请求体获取前端传来的凭证
  let { userId, userSig, sdkAppId, domain } = req.body;
  const hasFrontendSdkAppId = !!sdkAppId;
  const hasFrontendUserSig = !!userSig;

  logger.info('LOGIN', '收到登录请求', {
    serverConfigured: isServerConfigured(),
    hasSdkAppId,
    hasSecretKey,
    hasIdentifier,
    hasFrontendSdkAppId,
    hasFrontendUserSig,
    frontendSdkAppId: sdkAppId,
  });


  // server 已完整配置且前端未提供凭证：直接返回服务端凭证，无需密码
  // 若前端通过 loginWithSecret 传入了自主凭证（userId + userSig + sdkAppId），
  // 则走下面的 proxy 模式分支，不在此处拦截
  if (isServerConfigured() && !hasFrontendSdkAppId && !hasFrontendUserSig) {
    // 自动生成管理员 UserSig 返回给前端
    const sigInfo = getUserSig(Config.Identifier);
    logger.info('LOGIN', '✅ 服务端配置模式登录成功', {
      sdkAppId: Config.SdkAppId,
      userId: Config.Identifier,
    });
    res.json({
      code: 0,
      message: 'success',
      data: {
        token: 'auto_token_' + Date.now(),
        userId: Config.Identifier,
        userName: '超级管理员',
        sdkAppId: Config.SdkAppId,
        userSig: sigInfo ? sigInfo.UserSig : '',
        configured: true,
        domain: Config.Domain,
      }
    });
    return;
  }

  // server 未完整配置：凭证模式（需要前端提供凭证）
  // 服务端配置作为 fallback
  if (!sdkAppId && hasSdkAppId) sdkAppId = Config.SdkAppId;
  if (!userId && hasIdentifier) userId = Config.Identifier;
  // domain 留空则使用服务器配置的 Domain
  const usedDomain = domain || Config.Domain;

  if (!userId || !userSig || !sdkAppId) {
    const errorMsg = '请提供 UserId、UserSig 和 SdkAppId';
    logger.warn('LOGIN', errorMsg, { hasUserId: !!userId, hasUserSig: !!userSig, hasSdkAppId: !!sdkAppId });
    res.json({ code: -1, message: errorMsg });
    return;
  }

  logger.info('LOGIN', '✅ 前端凭证模式登录成功', {
    sdkAppId: Number(sdkAppId),
    userId,
  });
  res.json({
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
  });
});

// 生成 UserSig
apiRouter.post('/get_user_sig', (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    const errorMsg = 'userId is required';
    logger.warn('GET_USER_SIG', errorMsg, { body: req.body });
    res.json({ code: -1, message: errorMsg });
    return;
  }

  if (!isServerConfigured()) {
    const errorMsg = '服务端未配置 SecretKey，无法生成 UserSig';
    logger.warn('GET_USER_SIG', errorMsg, { userId });
    res.json({ code: -1, message: errorMsg });
    return;
  }

  const info = getUserSig(String(userId));
  if (!info || !info.UserSig) {
    const errorMsg = 'UserSig is undefined';
    logger.error('GET_USER_SIG', errorMsg, { userId, info });
    res.json({ code: -1, message: errorMsg });
    return;
  }
  res.json({
    code: 0,
    message: 'success',
    data: {
      sdkAppId: info.SdkAppId,
      userId: info.UserId,
      userSig: info.UserSig,
      userName: info.UserName,
    }
  });
});

// ========== 文件上传（COS） ==========

// 获取上传配置状态
apiRouter.get('/upload/config', (req, res) => {
  const config = getUploadConfig();
  res.json({ code: 0, message: 'success', data: config });
});

// 通用图片上传
apiRouter.post('/upload/image', upload.single('file'), asyncHandler(async (req, res) => {
  if (!isUploadEnabled()) {
    const errorMsg = '存储服务未配置，无法上传文件';
    logger.warn('UPLOAD_IMAGE', errorMsg);
    res.status(400).json({ code: -1, message: errorMsg });
    return;
  }
  if (!req.file) {
    const errorMsg = '请选择要上传的文件';
    logger.warn('UPLOAD_IMAGE', errorMsg, { body: req.body });
    res.status(400).json({ code: -1, message: errorMsg });
    return;
  }

  const type = req.body.type || 'cover';
  const key = generateKey(type, req.file.originalname);
  const result = await uploadFile(req.file.buffer, key, req.file.mimetype);

  res.json({
    code: 0,
    message: 'success',
    data: {
      url: result.url,
      key: result.key,
      size: req.file.size,
      mimetype: req.file.mimetype,
      provider: getUploadConfig().provider,
    },
  });
}, 'upload_image', 'local'));

// ========== 通用 TRTC API 代理 ==========
// 前端将 TRTC API 路径和 body 传过来，server 负责拼接凭证并转发
// 这样前端业务逻辑完全自主，server 仅做身份认证 + HTTP 中转

const axios = require('axios');

// 限频队列
const TRTC_REQUEST_INTERVAL = 1100;
let lastTrtcRequestTime = 0;
let trtcRequestQueue = Promise.resolve();

const TRTC_RATE_LIMIT_WHITELIST = new Set([
  'get_room_info',
  'get_room_list',
  'get_room_metadata',
  'get_gift_info_list',
  'portrait_get',        // 用户资料查询（只读），不需要限频
  'get_room_statistic',  // 房间统计（只读），不需要限频
]);

async function doTrtcRequest(url, data) {
  try {
    const response = await axios.post(url, data, {
      timeout: 15000,
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    // 记录详细的错误日志
    logger.error('TRTC_REQUEST', error, {
      url: url.substring(0, url.indexOf('?')), // 隐藏敏感参数
      requestData: data,
      responseStatus: error.response?.status,
      responseData: error.response?.data
    });

    if (error.response) {
      return error.response.data || { ErrorCode: -1, ErrorInfo: 'Request failed' };
    }
    return { ErrorCode: -1, ErrorInfo: 'Network error', originalError: error.message };
  }
}

/**
 * 获取凭证（复用函数）
 * 中间件已通过 req.credentials 决定了凭证来源：
 * - req.credentials 有值 → 使用前端透传凭证
 * - req.credentials 为 null → 使用服务端配置凭证
 */
function getCredentials(req) {
  // 中间件设置了前端凭证
  const proxied = req.credentials;
  if (proxied && proxied.sdkAppId && proxied.userId && proxied.userSig) {
    logger.info('GET_CREDS', '✅ 使用前端透传凭证', {
      source: 'frontend_proxy',
      sdkAppId: proxied.sdkAppId,
      userId: proxied.userId,
    });
    return { sdkAppId: proxied.sdkAppId, identifier: proxied.userId, userSig: proxied.userSig };
  }

  // 使用服务端配置
  if (isServerConfigured()) {
    const userInfo = getBasicInfo();
    if (userInfo && userInfo.UserSig) {
      logger.info('GET_CREDS', '✅ 使用服务端配置凭证', {
        source: 'server_config',
        sdkAppId: Config.SdkAppId,
        identifier: userInfo.UserId,
      });
      return { sdkAppId: Config.SdkAppId, identifier: userInfo.UserId, userSig: userInfo.UserSig };
    }
  }

  logger.warn('GET_CREDS', '❌ 无可用凭证', {
    serverConfigured: isServerConfigured(),
    hasProxiedCreds: !!proxied,
  });
  return null;
}

/**
 * 执行 TRTC API 代理请求（复用函数）
 * 包含限频控制和白名单处理
 */
// SSRF 防护：允许的域名白名单（支持通配符 *.im.qcloud.com 和 *.tim.qq.com）
const ALLOWED_DOMAIN_PATTERN = /^(adminapisgp\.im\.qcloud\.com|console\.tim\.qq\.com|[\w-]+\.im\.qcloud\.com|[\w-]+\.tim\.qq\.com)$/;

// SSRF 防护：阻止请求内网地址（元数据服务、私有 IP 等）
const BLOCKED_HOSTS = /^(127\.|10\.|172\.(1[6-9]|2\d|3[01])\.|192\.168\.|0\.|169\.254\.)/i;

async function executeTrtcProxy(creds, apiPath, body, domainOverride) {
  const domain = domainOverride || process.env.DOMAIN || (creds.sdkAppId < 1400000000 ? 'adminapisgp.im.qcloud.com' : 'console.tim.qq.com');

  // SSRF 校验：域名白名单
  if (!ALLOWED_DOMAIN_PATTERN.test(domain)) {
    logger.warn('TRTC_PROXY_SSRF', '拒绝请求：域名不在白名单中', { domain });
    return { ErrorCode: -1, ErrorInfo: 'Invalid domain' };
  }

  const random = Math.floor(Math.random() * 1000000000);
  const url = `https://${domain}/${apiPath}?sdkappid=${creds.sdkAppId}&identifier=${creds.identifier}&usersig=${creds.userSig}&random=${random}&contenttype=json`;

  logger.info('TRTC_PROXY', `🌐 请求云端 API: ${apiPath}`, {
    sdkAppId: creds.sdkAppId,
    identifier: creds.identifier,
    domain,
    apiPath,
    body: body || {},
  });

  // 判断是否走限频队列
  const apiName = apiPath.split('/').pop() || '';
  if (TRTC_RATE_LIMIT_WHITELIST.has(apiName)) {
    const result = await doTrtcRequest(url, body || {});
    logger.info('TRTC_PROXY', `📥 云端响应 (${apiPath})`, {
      sdkAppId: creds.sdkAppId,
      errorCode: result?.ErrorCode,
      errorInfo: result?.ErrorInfo,
      hasData: !!result,
    });
    return result;
  }

  // 非白名单走排队
  return new Promise((resolve, reject) => {
    trtcRequestQueue = trtcRequestQueue.then(async () => {
      const now = Date.now();
      const elapsed = now - lastTrtcRequestTime;
      if (elapsed < TRTC_REQUEST_INTERVAL) {
        await new Promise(r => setTimeout(r, TRTC_REQUEST_INTERVAL - elapsed));
      }
      try {
        const result = await doTrtcRequest(url, body || {});
        lastTrtcRequestTime = Date.now();
        logger.info('TRTC_PROXY', `📥 云端响应 (${apiPath})`, {
          sdkAppId: creds.sdkAppId,
          errorCode: result?.ErrorCode,
          errorInfo: result?.ErrorInfo,
          hasData: !!result,
        });
        resolve(result);
      } catch (error) {
        lastTrtcRequestTime = Date.now();
        reject(error);
      }
    });
  });
}

apiRouter.post(['/trtc_proxy', '/trtc_proxy/:method'], asyncHandler(async (req, res) => {
  const { apiPath, body: trtcBody, domain } = req.body;
  if (!apiPath) {
    const errorMsg = 'apiPath is required';
    logger.warn('TRTC_PROXY', errorMsg, { body: req.body });
    res.json({ ErrorCode: -1, ErrorInfo: errorMsg });
    return;
  }

  // URL 上拼接的 method 仅用于前端统计（Aegis / DevTools 按方法聚合）
  // 真正调用路径仍以 body.apiPath 为准；此处做一次一致性校验，便于排查
  const urlMethod = req.params?.method;
  const apiTail = apiPath.split('/').pop();
  if (urlMethod && apiTail && urlMethod !== apiTail) {
    logger.warn('TRTC_PROXY', 'URL method 与 apiPath 不一致', { urlMethod, apiTail, apiPath });
  }

  const creds = getCredentials(req);
  if (!creds) {
    const errorMsg = 'No credentials available';
    logger.warn('TRTC_PROXY', errorMsg, { apiPath });
    res.status(401).json({ ErrorCode: -1, ErrorInfo: errorMsg });
    return;
  }

  const result = await executeTrtcProxy(creds, apiPath, trtcBody, domain);
  res.json(result);
}, 'trtc_proxy'));

// ========== 兼容 tuikit-atomicx-react 的 API 路由 ==========
// 复用 trtc_proxy 的通用处理逻辑
// 2026-06-02: 已不再需要，Live Manager SDK 直接使用 trtc_proxy 调用 API
// 保留代码供后续确认无误后删除

// API 路径映射：前端路由名 -> TRTC API 路径
// const TUIKIT_API_MAP = {
//   'get_live_list': 'v4/live_engine_http_srv/get_room_list',
//   'destroy_room': 'v4/live_engine_http_srv/destroy_room',
//   'get_room_info': 'v4/live_engine_http_srv/get_room_info',
// };

// /**
//  * 通用的 tuikit 兼容路由处理器
//  */
// function createTuikitProxyHandler(routeName) {
//   return asyncHandler(async (req, res) => {
//     const creds = getCredentials(req);
//     if (!creds) {
//       const errorMsg = 'No credentials available';
//       logger.warn(`TUIKIT_PROXY_${routeName.toUpperCase()}`, errorMsg);
//       res.status(401).json({ ErrorCode: -1, ErrorInfo: errorMsg });
//       return;
//     }

//     const apiPath = TUIKIT_API_MAP[routeName];
//     const result = await executeTrtcProxy(creds, apiPath, req.body);
//     res.json(result);
//   }, routeName);
// }

// 注册三个兼容路由
// apiRouter.post('/get_live_list', createTuikitProxyHandler('get_live_list'));
// apiRouter.post('/destroy_room', createTuikitProxyHandler('destroy_room'));
// apiRouter.post('/get_room_info', createTuikitProxyHandler('get_room_info'));

// ========== 互动内容审核（腾讯云 IM 云端审核 API 3.0） ==========

/**
 * IM 审核 API 客户端
 *
 * IMClient 本身是无状态的 HTTP 调用封装，直接创建使用。
 * 凭证在运行时从 Config 读取，每次调用时创建新实例。
 */
// 支持通过环境变量 DOMAIN_CLOUD_API_IM 配置 IM API 域名（包括审核 API）
const IM_AUDIT_DEFAULT_ENDPOINT = process.env.DOMAIN_CLOUD_API_IM || 'im.tencentcloudapi.com';

function getImAuditClient(endpoint = IM_AUDIT_DEFAULT_ENDPOINT) {
  const secretId = Config.TencentCloud.SecretId;
  const secretKey = Config.TencentCloud.SecretKey;
  if (!secretId || !secretKey) {
    throw new Error('腾讯云 API 3.0 凭证未配置，请设置 TENCENT_CLOUD_SECRET_ID 和 TENCENT_CLOUD_SECRET_KEY');
  }
  
  const client = new IMClient({
    credential: {
      secretId,
      secretKey,
    },
    region: 'ap-guangzhou',
    endpoint,
    profile: { httpProfile: { reqTimeout: 30 } },
  });
  
  logger.info('IM_AUDIT_CLIENT', '已创建 IM 审核 API 客户端', { endpoint });
  return client;
}

/**
 * TRTC API 客户端
 *
 * TRTCClient 本身是无状态的 HTTP 调用封装，直接创建使用。
 * 凭证在运行时从 Config 读取，每次调用时创建新实例。
 */
// 支持通过环境变量 DOMAIN_CLOUD_API_TRTC 配置 TRTC API 域名
const TRTC_DEFAULT_ENDPOINT = process.env.DOMAIN_CLOUD_API_TRTC || 'trtc.tencentcloudapi.com';

function getTrtcClient(endpoint = TRTC_DEFAULT_ENDPOINT) {
  const secretId = Config.TencentCloud.SecretId;
  const secretKey = Config.TencentCloud.SecretKey;
  if (!secretId || !secretKey) {
    throw new Error('腾讯云 API 3.0 凭证未配置，请设置 TENCENT_CLOUD_SECRET_ID 和 TENCENT_CLOUD_SECRET_KEY');
  }

  const client = new TRTCClient({
    credential: {
      secretId,
      secretKey,
    },
    region: 'ap-guangzhou',
    endpoint,
    profile: { httpProfile: { reqTimeout: 30 } },
  });

  logger.info('TRTC_CLIENT', '已创建 TRTC API 客户端', { endpoint });
  return client;
}

/**
 * 包装 IMClient 请求，增加日志
 * @param {Object} client - IMClient 实例
 * @param {string} action - API Action 名称
 * @param {Object} params - 请求参数
 * @returns {Promise<Object>} 响应结果
 */
async function imClientRequest(client, action, params) {
  const startTime = Date.now();

  // 深度防御：验证 action 是否在白名单中
  if (!MODERATION_ACTION_WHITELIST.has(action)) {
    const errorMsg = `不允许的 action: ${action}`;
    logger.error('IM_CLIENT_REQUEST', `❌ ${errorMsg}`, {
      action,
      whitelist: Array.from(MODERATION_ACTION_WHITELIST),
    });
    throw new Error(errorMsg);
  }
  
  logger.info('IM_CLIENT_REQUEST', `🚀 开始请求 IM API: ${action}`, {
    action,
    paramKeys: Object.keys(params || {}),
    sdkAppId: params?.SdkAppId || 'unknown',
  });

  try {
    const response = await client.request(action, params);
    const duration = Date.now() - startTime;

    logger.info('IM_CLIENT_REQUEST', `✅ IM API 请求成功: ${action}`, {
      action,
      duration: `${duration}ms`,
      requestId: response?.RequestId || 'unknown',
      hasData: !!response?.Data,
      totalCount: response?.TotalCount,
    });

    return response;
  } catch (error) {
    const duration = Date.now() - startTime;

    logger.error('IM_CLIENT_REQUEST', `❌ IM API 请求失败: ${action}`, {
      action,
      duration: `${duration}ms`,
      errorCode: error?.code || error?.Code,
      errorMessage: error?.message || error?.Message || String(error),
      stack: error?.stack?.split('\n').slice(0, 3).join('\n'),
    });

    throw error;
  }
}

/**
 * 审核 Action 白名单 —— 允许调用以下云 SDK Action
 * 类似 trtc_proxy 的安全机制，防止任意 Action 被透传
 *
 * 包含两类：
 * 1. 前端通过 /moderation/proxy 直接调用的写操作（CloudAuditModify... / Add... / Destroy... 等）
 * 2. 服务端专用 REST 路由（/moderation/list）内部使用的查询 Action
 */
const MODERATION_ACTION_WHITELIST = new Set([
  'CreateContentModeration',           // 发起内容审核测试
  'AddAuditErrorCorrections',          // 添加纠错内容
  'DescribeCloudAuditRemainUsage',     // 获取云端审核可用量
  'DescribeCloudAuditRecordDetailV2',  // 查询云端审核记录（/moderation/list 服务端使用）
]);

const STRING_SDK_APP_ID_ACTIONS = new Set([
  'AddAuditErrorCorrections',
  'DestroyAuditErrorCorrections',
]);

function toSdkAppIdString(sdkAppId) {
  return String(sdkAppId || '').trim();
}

function toSdkAppIdUint64(sdkAppId) {
  const numeric = Number(sdkAppId);
  if (!Number.isFinite(numeric) || numeric <= 0) {
    throw new Error('SdkAppId 参数无效');
  }
  return numeric;
}

function toSdkAppIdValue(action, sdkAppId) {
  return STRING_SDK_APP_ID_ACTIONS.has(action)
    ? toSdkAppIdString(sdkAppId)
    : toSdkAppIdUint64(sdkAppId);
}

function buildModerationActionParams(action, sdkAppId, actionParams = {}) {
  return {
    ...actionParams,
    SdkAppId: toSdkAppIdValue(action, sdkAppId),
  };
}

/** 查询审核列表：服务端只注入 SdkAppId，其他参数由前端按腾讯云 API 入参透传 */
apiRouter.all('/moderation/list', asyncHandler(async (req, res) => {
  const sdkAppId = (req.credentials?.sdkAppId) || Config.SdkAppId;
  if (!sdkAppId) {
    res.status(400).json({ code: -1, message: '服务端未配置 SdkAppId' });
    return;
  }

  const action = 'DescribeCloudAuditRecordDetailV2';
  const params = {
    ...(req.method === 'GET' ? req.query : req.body),
    SdkAppId: toSdkAppIdValue(action, sdkAppId),
  };

  logger.info('MODERATION_LIST', '透传腾讯云审核列表请求', {
    sdkAppId,
    paramKeys: Object.keys(params),
  });

  const response = await imClientRequest(getImAuditClient(), action, params);

  // 透传腾讯云 IM API 原始响应
  res.json(response);
}, 'moderation_list', 'local'));

/** 添加纠错白名单：服务端只注入 SdkAppId，其他参数由前端按腾讯云 API 入参透传 */
apiRouter.post('/moderation/correction-whitelist', asyncHandler(async (req, res) => {
  const sdkAppId = (req.credentials?.sdkAppId) || Config.SdkAppId;
  if (!sdkAppId) {
    res.status(400).json({ code: -1, message: '服务端未配置 SdkAppId' });
    return;
  }

  const action = 'AddAuditErrorCorrections';
  const params = {
    ...req.body,
    SdkAppId: toSdkAppIdValue(action, sdkAppId),
  };

  logger.info('MODERATION_CORRECTION_WHITELIST', '透传纠错白名单请求', {
    sdkAppId,
    paramKeys: Object.keys(params),
  });

  const response = await imClientRequest(getImAuditClient(), action, params);

  res.json(response);
}, 'moderation_correction_whitelist', 'local'));

/**
 * ========== 审核统一代理路由 ==========
 *
 * 类似 trtc_proxy 的设计：
 * 前端传入 action + params，后端做 Action 白名单校验后统一代理到腾讯云 API 3.0
 *
 * POST /api/moderation/proxy
 * Body: { action: string, params: object }
 *
 * 优势：
 * - Client 单例复用，不再每次 new
 * - 统一错误处理和日志
 * - 新增 Action 只需更新白名单，无需加路由
 */
apiRouter.post('/moderation/proxy', asyncHandler(async (req, res) => {
  const { action, params: actionParams = {} } = req.body;

  // 1. 校验 action
  if (!action) {
    res.status(400).json({ code: -1, message: 'action 参数必填' });
    return;
  }
  if (!MODERATION_ACTION_WHITELIST.has(action)) {
    res.status(403).json({ code: -1, message: `不允许的 action: ${action}` });
    return;
  }

  // 2. 自动注入 SdkAppId
  const sdkAppId = Config.SdkAppId;
  if (!sdkAppId) {
    res.status(400).json({ code: -1, message: '服务端未配置 SdkAppId' });
    return;
  }

  let finalParams;
  try {
    finalParams = buildModerationActionParams(action, sdkAppId, actionParams);
  } catch (err) {
    res.status(400).json({ code: -1, message: err.message });
    return;
  }

  // 3. 复用单例 client 发起请求
  const endpoint = IM_AUDIT_DEFAULT_ENDPOINT;

  logger.info('MODERATION_PROXY', `代理审核请求: ${action}`, {
    sdkAppId,
    action,
    endpoint,
    paramKeys: Object.keys(actionParams),
  });

  const response = await imClientRequest(getImAuditClient(endpoint), action, finalParams);

  res.json(response);
}, 'moderation_proxy', 'local'));

// ========== TRTC 房间审核标签查询 ==========

/** 查询房间审核记录：服务端只注入 SdkAppId，其他参数由前端按腾讯云 API 入参透传 */
apiRouter.post('/moderation/room-labels', asyncHandler(async (req, res) => {
  const sdkAppId = Config.SdkAppId;

  if (!sdkAppId) {
    res.status(400).json({ code: -1, message: '服务端未配置 SdkAppId' });
    return;
  }

  const params = {
    ...req.body,
    SdkAppId: toSdkAppIdUint64(sdkAppId),
  };

  try {
    const client = getTrtcClient();
    const response = await client.QueryModerationRecord(params);

    logger.info('TRTC_QUERY_MODERATION_RECORD', '透传房间审核记录请求成功', {
      sdkAppId,
      paramKeys: Object.keys(params),
      hasRecords: !!response.Records,
      recordCount: response.Records ? response.Records.length : 0,
    });

    res.json(response);
  } catch (error) {
    logger.error('TRTC_QUERY_MODERATION_RECORD', '查询房间审核记录失败', {
      sdkAppId,
      error: error.message,
      stack: error.stack,
    });

    res.status(500).json({
      code: -1,
      requestId: '',
      message: error.message || '查询房间审核记录失败',
    });
  }
}, 'moderation_room_labels', 'local'));

// ========== 用户自有审核代理（MODERATION_MODE=custom） ==========

/**
 * 用户自有审核服务器 HTTP 客户端
 *
 * 封装了对用户自定义审核服务器的 HTTP 调用
 * 自动附加 API Key 认证头和统一错误处理
 */
function getCustomModerationClient() {
  const baseUrl = Config.CustomModeration.BaseUrl;
  const apiKey = Config.CustomModeration.ApiKey;

  const headers = { 'Content-Type': 'application/json' };
  if (apiKey) {
    headers['X-Api-Key'] = apiKey;
  }

  const axiosConfig = {
    headers,
    timeout: 10000,
    // 不因 HTTP 4xx/5xx 自动抛异常，由路由层自行处理业务错误
    validateStatus: () => true,
  };

  return {
    async get(path, params = {}) {
      const url = `${baseUrl}${path}`;
      logger.info('CUSTOM_MODERATION', `GET ${url}`);
      const response = await axios.get(url, { ...axiosConfig, params });
      return { status: response.status, data: response.data };
    },
    async post(path, body = {}) {
      const url = `${baseUrl}${path}`;
      logger.info('CUSTOM_MODERATION', `POST ${url}`, { bodyKeys: Object.keys(body) });
      const response = await axios.post(url, body, axiosConfig);
      return { status: response.status, data: response.data };
    },
  };
}

/**
 * 获取当前审核模式，供前端判断使用
 */
apiRouter.get('/moderation/mode', (req, res) => {
  res.json({
    mode: Config.ModerationMode,
  });
});

/**
 * 查询全员审核开关（代理到用户服务器）
 */
apiRouter.get('/moderation/custom/toggle', asyncHandler(async (req, res) => {
  if (Config.ModerationMode !== 'custom') {
    res.status(400).json({ code: -1, message: '当前不是自定义审核模式' });
    return;
  }
  try {
    const client = getCustomModerationClient();
    const { status, data } = await client.get('/moderation/toggle');
    res.status(status).json(data);
  } catch (error) {
    logger.error('CUSTOM_MOD_TOGGLE_GET', error.message);
    res.status(502).json({ code: -1, message: '用户审核服务器不可达: ' + error.message });
  }
}, 'custom_mod_toggle_get', 'local'));

/**
 * 设置全员审核开关（代理到用户服务器）
 */
apiRouter.post('/moderation/custom/toggle', asyncHandler(async (req, res) => {
  if (Config.ModerationMode !== 'custom') {
    res.status(400).json({ code: -1, message: '当前不是自定义审核模式' });
    return;
  }
  try {
    const client = getCustomModerationClient();
    const { status, data } = await client.post('/moderation/toggle', req.body);
    res.status(status).json(data);
  } catch (error) {
    logger.error('CUSTOM_MOD_TOGGLE_POST', error.message);
    res.status(502).json({ code: -1, message: '用户审核服务器不可达: ' + error.message });
  }
}, 'custom_mod_toggle_post', 'local'));

/**
 * 查询审核消息列表（代理到用户服务器）
 *
 * 自定义审核模式下，审核列表数据来自用户自有数据库
 * 请求和响应格式对齐腾讯云 DescribeCloudAuditRecordDetailV2
 */
apiRouter.post('/moderation/custom/list', asyncHandler(async (req, res) => {
  if (Config.ModerationMode !== 'custom') {
    res.status(400).json({ code: -1, message: '当前不是自定义审核模式' });
    return;
  }
  try {
    const client = getCustomModerationClient();
    const body = {
      SdkAppId: Config.SdkAppId,
      ...req.body,
    };
    const { status, data } = await client.post('/moderation/list', body);
    res.status(status).json(data);
  } catch (error) {
    logger.error('CUSTOM_MOD_LIST', error.message);
    res.status(502).json({ code: -1, message: '用户审核服务器不可达: ' + error.message });
  }
}, 'custom_mod_list', 'local'));

/**
 * 删除审核记录（代理到用户服务器）
 *
 * 用户自有审核模式下，删除操作直接操作用户数据库
 */
apiRouter.post('/moderation/custom/delete', asyncHandler(async (req, res) => {
  if (Config.ModerationMode !== 'custom') {
    res.status(400).json({ code: -1, message: '当前不是自定义审核模式' });
    return;
  }
  try {
    const client = getCustomModerationClient();
    const body = {
      SdkAppId: Config.SdkAppId,
      ...req.body,
    };
    const { status, data } = await client.post('/moderation/delete', body);
    res.status(status).json(data);
  } catch (error) {
    logger.error('CUSTOM_MOD_DELETE', error.message);
    res.status(502).json({ code: -1, message: '用户审核服务器不可达: ' + error.message });
  }
}, 'custom_mod_delete', 'local'));

// ========== 健康检查 ==========

apiRouter.get('/test', (_, res) => {
  res.json({ result: 'success' });
});

module.exports = { apiRouter };
