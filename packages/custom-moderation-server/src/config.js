/**
 * 服务配置中心
 *
 * 统一从环境变量读取配置，方便在不同环境 / 部署位置下自定义。
 * 推荐使用 config/.env 文件进行本地配置（index.js 已通过 dotenv 加载）。
 */

const path = require('path');
const fs = require('fs');

/**
 * 解析数据库文件地址
 * - 未配置时默认放在 data/moderation.db
 * - 支持绝对路径（方便将数据库放到挂载卷 / 其他磁盘）
 * - 支持相对路径（相对项目根目录解析）
 * 同时会自动创建数据库所在的父目录，避免自定义路径不存在时报错。
 * @returns {string}
 */
function resolveDbPath() {
  const raw = process.env.DB_PATH;
  let resolved;
  if (!raw) {
    resolved = path.resolve(__dirname, '../data/moderation.db');
  } else {
    resolved = path.isAbsolute(raw) ? raw : path.resolve(__dirname, '..', raw);
  }

  const dir = path.dirname(resolved);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return resolved;
}

module.exports = {
  PORT: parseInt(process.env.PORT, 10) || 9001,
  CALLBACK_PATH: process.env.CALLBACK_PATH || '/im-callback',
  API_KEY: process.env.API_KEY || '',
  DB_PATH: resolveDbPath(),
};
