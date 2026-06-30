const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../config/.env') });

const parseSdkAppId = (value, fallback) => {
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? num : fallback;
};

const sdkAppId = parseSdkAppId(process.env.SDK_APP_ID ?? process.env.SdkAppId, 0)
const domainIM  = process.env.DOMAIN_CLOUD_API_IM ?? process.env.DOMAIN ?? process.env.Domain ?? (sdkAppId < 1400000000 ? 'adminapisgp.im.qcloud.com' : 'console.tim.qq.com')
const domainTRTC = process.env.DOMAIN_CLOUD_API_TRTC ?? 'trtc.tencentcloudapi.com'
console.log(`sdkAppId: ${sdkAppId}, domainIM: ${domainIM}, domainTRTC: ${domainTRTC}`)
const Config = {
  SdkAppId: sdkAppId,
  SecretKey: process.env.SECRET_KEY ?? process.env.SDK_SECRET_KEY ?? process.env.SecretKey ?? '',
  Identifier: process.env.USER_ID ?? 'administrator',
  Protocol: 'https://',
  Domain: domainIM,
  DomainIM: domainIM,
  DomainTRTC: domainTRTC,
  Port: parseInt(process.env.PORT, 10) || 9000,
  // 客户服务端扩展入口，支持绝对路径或相对 packages/server 的路径
  CustomerExtensionPath: process.env.CUSTOMER_EXTENSION_PATH || '',
  // 存储 Provider 选择：'cos' | 'custom'（不配置则留空，禁用存储功能）
  StorageProvider: process.env.STORAGE_PROVIDER || '',
  // COS 配置（当 STORAGE_PROVIDER=cos 时使用）
  Cos: {
    SecretId: process.env.COS_SECRET_ID || '',
    SecretKey: process.env.COS_SECRET_KEY || '',
    Bucket: process.env.COS_BUCKET || '',
    Region: process.env.COS_REGION || '',
    CdnDomain: process.env.COS_CDN_DOMAIN || '',
    PathPrefix: process.env.COS_PATH_PREFIX || '',
  },
  // 自定义上传 Provider 配置（当 STORAGE_PROVIDER=custom 时使用）
  Custom: {
    UploadUrl: process.env.CUSTOM_UPLOAD_URL || '',
    AccessDomain: process.env.CUSTOM_ACCESS_DOMAIN || '',
    UploadField: process.env.CUSTOM_UPLOAD_FIELD || 'file',
    ResponseUrlField: process.env.CUSTOM_RESPONSE_URL_FIELD || 'data.url',
    AuthHeader: process.env.CUSTOM_AUTH_HEADER || '',
    PathPrefix: process.env.CUSTOM_PATH_PREFIX || '',
  },
  // 审核模式：'cloud'（腾讯云 IM 云端审核，默认）| 'custom'（用户自有审核）
  ModerationMode: process.env.MODERATION_MODE === 'custom' ? 'custom' : 'cloud',

  // 用户自有审核服务器配置（MODERATION_MODE=custom 时使用）
  CustomModeration: {
    BaseUrl: (process.env.CUSTOM_MODERATION_BASE_URL || '').replace(/\/+$/, ''),
    ApiKey: process.env.CUSTOM_MODERATION_API_KEY || '',
  },

  // 违规标签轮询刷新间隔（秒），默认 600（10 分钟）
  LiveViolationRefreshInterval: parseInt(process.env.LIVE_VIOLATION_REFRESH_INTERVAL, 10) || 600,

  // 腾讯云 API 3.0 凭证（用于调用 IM 审核等 API）
  // 默认回退到 COS 的密钥（通常同一主账号下密钥相同）
  TencentCloud: {
    SecretId: process.env.TENCENT_CLOUD_SECRET_ID || process.env.COS_SECRET_ID || '',
    SecretKey: process.env.TENCENT_CLOUD_SECRET_KEY || process.env.COS_SECRET_KEY || '',
  },
};

module.exports = { Config };
