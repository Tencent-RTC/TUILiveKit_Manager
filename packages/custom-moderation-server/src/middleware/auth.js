/**
 * API Key 认证中间件
 *
 * 如果配置了 API_KEY，校验请求 Header 中的 X-Api-Key
 * 未配置则跳过认证
 */

const API_KEY = process.env.API_KEY || '';

function authMiddleware(req, res, next) {
  // 未配置 API_KEY，跳过认证
  if (!API_KEY) {
    return next();
  }

  const providedKey = req.headers['x-api-key'] || '';

  if (providedKey !== API_KEY) {
    return res.status(401).json({
      ErrorCode: 401,
      ErrorInfo: 'Unauthorized: Invalid or missing X-Api-Key',
    });
  }

  next();
}

module.exports = { authMiddleware };
