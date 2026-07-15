/**
 * RUM API 代理路由
 * 
 * 将前端的 RUM 数据查询请求代理到腾讯云 RUM API (DescribeDataEventUrlV2)
 * 使用服务端配置的 TencentCloud SecretId/SecretKey 进行 TC3-HMAC-SHA256 签名
 * 
 * 接口文档: https://cloud.tencent.com/document/api/1464/129026
 */

const { Router } = require('express');
const crypto = require('crypto');
const https = require('https');
const { Config } = require('../../config/index.js');
const { asyncHandler } = require('../middleware/asyncHandler');
const logger = require('../utils/logger.js');

const rumApiRouter = Router();

/**
 * TC3-HMAC-SHA256 签名实现
 * 参考: https://cloud.tencent.com/document/api/1464/59462
 */
function sha256(message, secretKey = null) {
  if (secretKey) {
    return crypto.createHmac('sha256', secretKey).update(message).digest();
  }
  return crypto.createHash('sha256').update(message).digest();
}

function genSignature(secretId, secretKey, host, serviceName, action, region, payload, timestamp, dateStr) {
  // 1. 拼接规范请求串
  const httpRequestMethod = 'POST';
  const canonicalUri = '/';
  const canonicalQueryString = '';
  const contentType = 'application/json; charset=utf-8';
  const canonicalHeaders = `content-type:${contentType}\nhost:${host}\nx-tc-action:${action.toLowerCase()}\n`;
  const signedHeaders = 'content-type;host;x-tc-action';
  const hashedRequestPayload = sha256(payload).toString('hex');
  const canonicalRequest = [
    httpRequestMethod,
    canonicalUri,
    canonicalQueryString,
    canonicalHeaders,
    signedHeaders,
    hashedRequestPayload,
  ].join('\n');

  // 2. 拼接待签名字符串
  const algorithm = 'TC3-HMAC-SHA256';
  const credentialScope = `${dateStr}/${serviceName}/tc3_request`;
  const hashedCanonicalRequest = sha256(canonicalRequest).toString('hex');
  const stringToSign = [
    algorithm,
    String(timestamp),
    credentialScope,
    hashedCanonicalRequest,
  ].join('\n');

  // 3. 计算签名
  const kDate = sha256(dateStr, `TC3${secretKey}`);
  const kService = sha256(serviceName, kDate);
  const kSigning = sha256('tc3_request', kService);
  const signature = sha256(stringToSign, kSigning).toString('hex');

  // 4. 拼接 Authorization
  return `${algorithm} Credential=${secretId}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
}

/**
 * 调用腾讯云 RUM API
 */
function callRumApi(params) {
  return new Promise((resolve, reject) => {
    const secretId = Config.TencentCloud.SecretId;
    const secretKey = Config.TencentCloud.SecretKey;

    if (!secretId || !secretKey) {
      reject(new Error('腾讯云 API 3.0 凭证未配置，请设置 TENCENT_CLOUD_SECRET_ID 和 TENCENT_CLOUD_SECRET_KEY'));
      return;
    }

    const host = 'rum.tencentcloudapi.com';
    const serviceName = 'rum';
    const action = 'DescribeDataEventUrlV2';
    const version = '2021-06-22';
    const region = 'ap-guangzhou';
    const timestamp = Math.floor(Date.now() / 1000);
    const dateOnly = new Date(timestamp * 1000).toISOString().slice(0, 10);

    const payload = JSON.stringify(params);

    const authorization = genSignature(
      secretId, secretKey, host, serviceName, action, region,
      payload, timestamp, dateOnly
    );

    const headers = {
      'Content-Type': 'application/json; charset=utf-8',
      'Host': host,
      'X-TC-Action': action,
      'X-TC-Version': version,
      'X-TC-Timestamp': String(timestamp),
      'X-TC-Region': region,
      'Authorization': authorization,
    };

    const options = {
      hostname: host,
      port: 443,
      path: '/',
      method: 'POST',
      headers,
      timeout: 30000,
    };

    let settled = false;

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        if (settled) return;
        settled = true;
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (e) {
          reject(new Error(`解析 RUM API 响应失败: ${e.message}`));
        }
      });
    });

    req.on('error', (e) => {
      if (settled) return;
      settled = true;
      // 错误日志中对敏感字段做掩码处理
      const safeParams = { ...params };
      if (safeParams.ExtThird) safeParams.ExtThird = '***';
      logger.error('RUM_API_CALL', e, { action, params: safeParams });
      reject(e);
    });

    req.on('timeout', () => {
      if (settled) return;
      settled = true;
      req.destroy();
      reject(new Error('RUM API 请求超时'));
    });

    req.write(payload);
    req.end();
  });
}

/**
 * 解析 RUM API 响应中的 Result 字段（腾讯云返回为 JSON 字符串）
 */
function parseRumResult(response) {
  if (response?.Result && typeof response.Result === 'string') {
    try {
      return JSON.parse(response.Result);
    } catch {
      return response.Result;
    }
  }
  return response?.Result || null;
}

// POST /api/rum/events
rumApiRouter.post('/events', asyncHandler(async (req, res) => {
  const { StartTime, EndTime, Type, ID, ...extraParams } = req.body;

  // 参数校验
  if (!StartTime || !EndTime) {
    res.status(400).json({ code: -1, message: 'StartTime 和 EndTime 为必填参数' });
    return;
  }
  if (!Type) {
    res.status(400).json({ code: -1, message: 'Type 为必填参数' });
    return;
  }
  if (!ID) {
    res.status(400).json({ code: -1, message: 'ID (项目ID) 为必填参数' });
    return;
  }

  const params = {
    ID: Number(ID),
    Type,
    StartTime: Number(StartTime),
    EndTime: Number(EndTime),
    ...extraParams,
  };

  logger.info('RUM_EVENTS_QUERY', '查询 RUM 自定义事件', {
    ID: params.ID,
    Type: params.Type,
    StartTime: params.StartTime,
    EndTime: params.EndTime,
    extraKeys: Object.keys(extraParams),
  });

  try {
    const result = await callRumApi(params);

    // 解析 Result 字段（RUM API 返回 Result 为 JSON 字符串）
    const response = result?.Response;
    const parsedResult = parseRumResult(response);

    // 调试日志：打印前 3 条结果示例
    if (parsedResult?.results?.length) {
      logger.info('RUM_EVENTS_RESPONSE', `返回 ${parsedResult.results.length} 条结果`, {
        sample: parsedResult.results.slice(0, 3),
      });
    } else {
      // 空结果也记录，方便排查数据缺失问题
      logger.info('RUM_EVENTS_RESPONSE_EMPTY', 'RUM API 返回空结果', {
        hasError: !!response?.Error,
        errorCode: response?.Error?.Code,
        errorMessage: response?.Error?.Message,
        hasResult: !!response?.Result,
      });
    }

    res.json({
      code: 0,
      message: 'success',
      data: {
        result: parsedResult || response?.Result || null,
        requestId: response?.RequestId || null,
        error: response?.Error || null,
      },
    });
  } catch (error) {
    const safeParams = { ...params };
    if (safeParams.ExtThird) safeParams.ExtThird = '***';
    logger.error('RUM_EVENTS_QUERY', error, { params: safeParams });
    res.status(500).json({
      code: -1,
      message: error.message || 'RUM API 调用失败',
    });
  }
}, 'rum_events', 'local'));

// GET /api/rum/debug/events/:sdkAppId — 调试端点：按 SDKAppID 查询所有自定义事件
rumApiRouter.get('/debug/events/:sdkAppId', asyncHandler(async (req, res) => {
  const { sdkAppId } = req.params;
  const { start, end, id, type = 'ext3' } = req.query;

  if (!sdkAppId) {
    res.status(400).json({ code: -1, message: 'sdkAppId 为必填参数' });
    return;
  }

  // 默认查最近 30 天
  const now = Math.floor(Date.now() / 1000);
  const StartTime = start ? Number(start) : now - 30 * 86400;
  const EndTime = end ? Number(end) : now;
  const projectId = Number(id) || 131800;

  const params = {
    ID: projectId,
    Type: type,
    StartTime,
    EndTime,
    ExtThird: sdkAppId,
  };

  logger.info('RUM_DEBUG_EVENTS', `调试查询 SDKAppID=${sdkAppId}`, {
    params: { ...params, ExtThird: '***' },
  });

  try {
    const result = await callRumApi(params);
    const response = result?.Response;
    const parsedResult = parseRumResult(response);

    // 提取 event names（从 series tags 中）
    const events = [];
    if (parsedResult?.results?.length) {
      for (const r of parsedResult.results) {
        if (r.series) {
          for (const s of r.series) {
            events.push({
              tags: s.tags || {},
              total: s.values?.reduce((sum, v) => sum + (v[1] || 0), 0) || 0,
            });
          }
        }
      }
    }

    res.json({
      code: 0,
      message: 'success',
      data: {
        sdkAppId,
        timeRange: { start: StartTime, end: EndTime },
        events,
        raw: parsedResult,
        requestId: response?.RequestId || null,
        error: response?.Error || null,
      },
    });
  } catch (error) {
    logger.error('RUM_DEBUG_EVENTS', error, { sdkAppId });
    res.status(500).json({
      code: -1,
      message: error.message || 'RUM API 调用失败',
    });
  }
}, 'rum_debug', 'local'));

module.exports = { rumApiRouter };
