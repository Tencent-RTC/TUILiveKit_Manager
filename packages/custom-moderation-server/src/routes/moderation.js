/**
 * 审核管理 API 路由
 *
 * 提供三个核心接口供 LiveKit Manager 调用：
 * 1. GET  /moderation/toggle  — 查询全员审核开关
 * 2. POST /moderation/toggle  — 设置全员审核开关
 * 3. POST /moderation/list    — 查询审核消息列表
 * 4. POST /moderation/delete  — 删除审核记录
 */

const express = require('express');
const db = require('../db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// 所有接口都需要 API Key 认证（如果配置了的话）
router.use(authMiddleware);

/**
 * GET /moderation/toggle
 *
 * 查询全员审核开关状态
 *
 * 响应：
 * {
 *   "ActionStatus": "OK",
 *   "ErrorCode": 0,
 *   "Enabled": true
 * }
 */
router.get('/toggle', (req, res) => {
  const enabled = db.getToggleEnabled();
  console.log(`[API] GET /toggle => ${enabled}`);
  res.json({
    ActionStatus: 'OK',
    ErrorCode: 0,
    Enabled: enabled,
  });
});

/**
 * POST /moderation/toggle
 *
 * 更新全员审核开关状态
 *
 * 请求体：
 * {
 *   "Enabled": true | false
 * }
 *
 * 响应：
 * {
 *   "ActionStatus": "OK",
 *   "ErrorCode": 0,
 *   "Enabled": true
 * }
 */
router.post('/toggle', (req, res) => {
  const { Enabled } = req.body;

  if (typeof Enabled !== 'boolean') {
    return res.status(400).json({
      ActionStatus: 'FAIL',
      ErrorCode: 400,
      ErrorInfo: 'Enabled must be a boolean',
    });
  }

  db.setToggleEnabled(Enabled);
  console.log(`[API] POST /toggle => ${Enabled}`);
  res.json({
    ActionStatus: 'OK',
    ErrorCode: 0,
    Enabled: Enabled,
  });
});

/**
 * POST /moderation/list
 *
 * 查询审核消息列表
 *
 * 请求体：
 * {
 *   "Receiver": "liveRoomId",
 *   "PageNo": 1,
 *   "PageSize": 20
 * }
 *
 * 响应：
 * {
 *   "TotalCount": 100,
 *   "RequestId": "xxx",
 *   "Data": [
 *     {
 *       "ContentId": "msg_001",
 *       "From_Account": "user_123",
 *       "Content": "被拦截的消息内容",
 *       "Time": "2026-06-30 14:30:00.000"
 *     }
 *   ]
 * }
 */
router.post('/list', (req, res) => {
  const { Receiver: groupId, PageNo = 1, PageSize = 20 } = req.body;

  if (!groupId) {
    return res.status(400).json({
      TotalCount: 0,
      RequestId: '',
      Data: [],
      ErrorInfo: 'Receiver (live room ID) is required',
    });
  }

  const pageNo = Math.max(1, Math.floor(Number(PageNo)) || 1);
  const pageSize = Math.min(100, Math.max(1, Math.floor(Number(PageSize)) || 20));

  const result = db.listMessages(groupId, pageNo, pageSize);

  const data = result.data.map(row => ({
    ContentId: row.content_id,
    From_Account: row.from_account,
    Content: row.content,
    Time: row.created_at,
  }));

  console.log(`[API] POST /list groupId=${groupId}, page=${pageNo}, size=${pageSize} => total=${result.total}`);

  res.json({
    TotalCount: result.total,
    RequestId: `req_${Date.now()}`,
    Data: data,
  });
});

/**
 * POST /moderation/delete
 *
 * 删除审核记录
 *
 * 请求体：
 * {
 *   "ContentIds": ["msg_001", "msg_002"]
 * }
 *
 * 响应：
 * {
 *   "ActionStatus": "OK",
 *   "ErrorCode": 0,
 *   "DeletedCount": 2,
 *   "RequestId": "xxx"
 * }
 */
router.post('/delete', (req, res) => {
  const { ContentIds } = req.body;

  if (!Array.isArray(ContentIds) || ContentIds.length === 0) {
    return res.status(400).json({
      ActionStatus: 'FAIL',
      ErrorCode: 400,
      ErrorInfo: 'ContentIds must be a non-empty array',
    });
  }

  const deletedCount = db.deleteMessages(ContentIds);

  console.log(`[API] POST /delete count=${ContentIds.length} => deleted=${deletedCount}`);

  res.json({
    ActionStatus: 'OK',
    ErrorCode: 0,
    DeletedCount: deletedCount,
    RequestId: `req_${Date.now()}`,
  });
});

/**
 * GET /moderation/stats
 *
 * 查询审核统计（调试用）
 */
router.get('/stats', (req, res) => {
  const stats = db.getStats();
  const toggleEnabled = db.getToggleEnabled();
  res.json({
    toggleEnabled,
    ...stats,
  });
});

module.exports = router;
