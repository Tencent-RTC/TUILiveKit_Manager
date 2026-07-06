/**
 * SQLite 数据库模块（sql.js 实现）
 *
 * sql.js 是纯 JavaScript/WASM SQLite，无需原生编译，跨平台通用。
 * 数据库操作在内存中进行，写操作后自动保存到磁盘。
 *
 * 单表设计：moderation_messages
 * 存储被拦截的直播间消息，支持按直播间查询、分页、删除
 */

const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const DB_PATH = config.DB_PATH;

/** @type {import('sql.js').Database | null} */
let db = null;

/** @type {import('sql.js').SqlJsStatic | null} */
let SQL = null;

// ==========================================
// 初始化（异步，需在启动时调用）
// ==========================================

/**
 * 初始化数据库（必须在服务启动前调用）
 */
async function initDb() {
  if (db) return;

  SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const fileBuffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(fileBuffer);
    console.log(`[DB] 从文件加载数据库: ${DB_PATH}`);
  } else {
    db = new SQL.Database();
    console.log(`[DB] 创建新数据库`);
  }

  db.run('PRAGMA foreign_keys = ON');
  initTables();
  saveDb();
  console.log(`[DB] SQLite 数据库已就绪`);
}

// ==========================================
// 持久化
// ==========================================

/** 将内存数据库写入磁盘 */
function saveDb() {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, buffer);
}

/** 抛出未初始化异常 */
function guard() {
  if (!db) throw new Error('Database not initialized. Call initDb() first.');
}

// ==========================================
// 建表
// ==========================================

function initTables() {
  guard();

  db.run(`
    CREATE TABLE IF NOT EXISTS moderation_messages (
      content_id   TEXT PRIMARY KEY,
      group_id     TEXT NOT NULL,
      from_account TEXT NOT NULL,
      content      TEXT NOT NULL,
      msg_type     TEXT DEFAULT 'TIMTextElem',
      msg_body     TEXT,
      created_at   TEXT NOT NULL DEFAULT (datetime('now', 'localtime')),
      status       TEXT DEFAULT 'pending'
    );
  `);

  db.run(`CREATE INDEX IF NOT EXISTS idx_group_id ON moderation_messages(group_id);`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_status ON moderation_messages(status);`);
  db.run(`CREATE INDEX IF NOT EXISTS idx_created_at ON moderation_messages(created_at);`);

  db.run(`
    CREATE TABLE IF NOT EXISTS moderation_config (
      key   TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);

  // 确保默认 toggle = true
  const stmt = db.prepare('SELECT value FROM moderation_config WHERE key = ?');
  stmt.bind(['toggle_enabled']);
  const exists = stmt.step();
  stmt.free();

  if (!exists) {
    db.run('INSERT INTO moderation_config (key, value) VALUES (?, ?)', ['toggle_enabled', 'true']);
  }
}

// ==========================================
// 查询辅助
// ==========================================

/**
 * 查询单行
 * @param {string} sql
 * @param {any[]} params
 * @returns {object | null}
 */
function getRow(sql, params = []) {
  guard();
  const stmt = db.prepare(sql);
  stmt.bind(params);
  let row = null;
  if (stmt.step()) {
    row = stmt.getAsObject();
  }
  stmt.free();
  return row;
}

/**
 * 查询多行
 * @param {string} sql
 * @param {any[]} params
 * @returns {object[]}
 */
function getRows(sql, params = []) {
  guard();
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

// ==========================================
// 业务 API（与 better-sqlite3 版本签名兼容）
// ==========================================

/**
 * 获取全员审核开关状态
 * @returns {boolean}
 */
function getToggleEnabled() {
  const row = getRow('SELECT value FROM moderation_config WHERE key = ?', ['toggle_enabled']);
  return row ? row.value === 'true' : true;
}

/**
 * 设置全员审核开关状态
 * @param {boolean} enabled
 */
function setToggleEnabled(enabled) {
  guard();
  db.run('INSERT OR REPLACE INTO moderation_config (key, value) VALUES (?, ?)', [
    'toggle_enabled',
    String(enabled),
  ]);
  saveDb();
}

/**
 * 插入一条被拦截消息
 * @param {object} msg
 */
function insertMessage(msg) {
  guard();
  db.run(
    `INSERT OR IGNORE INTO moderation_messages
       (content_id, group_id, from_account, content, msg_type, msg_body)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      msg.content_id,
      msg.group_id,
      msg.from_account,
      msg.content,
      msg.msg_type || 'TIMTextElem',
      msg.msg_body || null,
    ]
  );
  saveDb();
}

/**
 * 查询审核消息列表（分页）
 * @param {string} groupId
 * @param {number} pageNo
 * @param {number} pageSize
 * @returns {{ data: object[], total: number }}
 */
function listMessages(groupId, pageNo = 1, pageSize = 20) {
  const countRow = getRow(
    `SELECT COUNT(*) as total FROM moderation_messages
     WHERE group_id = ? AND status = 'pending'`,
    [groupId]
  );

  const total = countRow ? countRow.total : 0;
  const offset = (pageNo - 1) * pageSize;

  const rows = getRows(
    `SELECT content_id, group_id, from_account, content, msg_type, created_at
     FROM moderation_messages
     WHERE group_id = ? AND status = 'pending'
     ORDER BY created_at DESC
     LIMIT ? OFFSET ?`,
    [groupId, pageSize, offset]
  );

  return { total, data: rows };
}

/**
 * 删除审核记录
 * @param {string[]} contentIds
 * @returns {number} 删除条数
 */
function deleteMessages(contentIds) {
  if (!contentIds || contentIds.length === 0) return 0;
  guard();

  const placeholders = contentIds.map(() => '?').join(',');
  db.run(`DELETE FROM moderation_messages WHERE content_id IN (${placeholders})`, contentIds);

  // sql.js 的 run 不返回 changes，通过查询受影响行数
  const countRow = getRow('SELECT changes() as cnt');
  const deleted = countRow ? countRow.cnt : 0;
  saveDb();
  return deleted;
}

/**
 * 获取数据库统计信息
 * @returns {{ totalPending: number, totalAll: number }}
 */
function getStats() {
  const pendingRow = getRow(
    "SELECT COUNT(*) as count FROM moderation_messages WHERE status = 'pending'"
  );
  const allRow = getRow('SELECT COUNT(*) as count FROM moderation_messages');

  return {
    totalPending: pendingRow ? pendingRow.count : 0,
    totalAll: allRow ? allRow.count : 0,
  };
}

/**
 * 清理所有审核记录
 * @returns {number}
 */
function cleanAll() {
  guard();
  db.run('DELETE FROM moderation_messages');
  const countRow = getRow('SELECT changes() as cnt');
  const deleted = countRow ? countRow.cnt : 0;
  saveDb();
  return deleted;
}

/**
 * 关闭数据库连接
 */
function close() {
  if (db) {
    saveDb();
    db.close();
    db = null;
    SQL = null;
    console.log('[DB] SQLite 数据库已关闭');
  }
}

module.exports = {
  initDb,
  getToggleEnabled,
  setToggleEnabled,
  insertMessage,
  listMessages,
  deleteMessages,
  getStats,
  cleanAll,
  close,
};
