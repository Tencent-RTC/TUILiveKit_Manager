/**
 * Custom Moderation Demo Server
 *
 * 用户自定义文本审核 Demo 服务器
 *
 * 功能：
 * - 接收腾讯云 IM Group.CallbackBeforeSendMsg 回调
 * - SQLite 存储被拦截消息
 * - 提供 moderation API 供 LiveKit Manager 调用
 *
 * 启动：node ./src/index.js
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });

const express = require('express');
const db = require('./db');
const callbackRouter = require('./routes/callback');
const moderationRouter = require('./routes/moderation');
const config = require('./config');

const PORT = config.PORT;
const CALLBACK_PATH = config.CALLBACK_PATH;
const API_KEY = config.API_KEY;

const app = express();

// 注意：IM 回调请求体格式不是标准 JSON
// 腾讯云 IM 发的是 JSON 格式的 POST，使用 express.json() 解析
app.use(express.json());

// ==========================================
// IM 回调路由（不需要 API Key 认证）
// ==========================================
app.use(CALLBACK_PATH, callbackRouter);

// ==========================================
// 审核管理 API（需要 API Key 认证）
// ==========================================
app.use('/moderation', moderationRouter);

// ==========================================
// 健康检查
// ==========================================
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ==========================================
// 全局错误处理
// ==========================================
app.use((err, req, res, next) => {
  console.error('[ERROR]', err);
  res.status(500).json({
    ActionStatus: 'FAIL',
    ErrorCode: 500,
    ErrorInfo: err.message || 'Internal Server Error',
  });
});

// ==========================================
// 启动服务（先初始化 DB，再监听端口）
// ==========================================
(async () => {
  try {
    await db.initDb();
  } catch (err) {
    console.error('[FATAL] 数据库初始化失败:', err);
    process.exit(1);
  }

  app.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('  Custom Moderation Demo Server');
    console.log('='.repeat(60));
    console.log(`  HTTP Port       : ${PORT}`);
    console.log(`  IM Callback URL : http://localhost:${PORT}${CALLBACK_PATH}`);
    console.log(`  API Key         : ${API_KEY ? '已配置 (需要认证)' : '未配置 (跳过认证)'}`);
    console.log(`  Database        : ${config.DB_PATH}`);
    console.log('='.repeat(60));
    console.log('');
    console.log('  接口列表:');
    console.log(`    POST ${CALLBACK_PATH}             IM 回调接收`);
    console.log('    GET  /moderation/toggle   查询全员审核开关');
    console.log('    POST /moderation/toggle   设置全员审核开关');
    console.log('    POST /moderation/list     查询审核消息列表');
    console.log('    POST /moderation/delete   删除审核记录');
    console.log('    GET  /moderation/stats    审核统计信息');
    console.log('    GET  /health              健康检查');
    console.log('');
  });
})();
