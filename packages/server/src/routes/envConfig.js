const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const { spawn } = require('child_process');
const logger = require('../utils/logger.js');

const router = express.Router();
const envFilePath = path.resolve(__dirname, '../../config/.env');
const LOG_FILE = '/data/livekit/server.log';

// 掩码字段列表（GET 时返回掩码，PUT 时传空则保留原值）
const SECRET_FIELDS = ['SECRET_KEY', 'SDK_SECRET_KEY', 'SecretKey', 'COS_SECRET_KEY', 'CUSTOM_AUTH_HEADER', 'CUSTOM_MODERATION_API_KEY'];
// 只读字段（GET 返回，PUT 时忽略）
const READONLY_FIELDS = ['PATH', 'HOME', 'USER', 'SHELL', 'PWD'];
// 系统变量前缀，写入 .env 时跳过
const SYSTEM_PREFIXES = [
  'KUBERNETES_', 'DEVCLOUD_', 'NODE_', 'npm_', 'SHLVL', 'TERM', 'DOCKER_',
  'TST_HACK_', 'DATA_MOUNT_', 'WORKSPACE', 'CONFIG_PROVIDER',
  'ANY_USERNAME', 'ANY_DEBUG_ENV', 'ANY_ENVID', 'ANY_LOGIN_USER',
  'HOSTNAME', 'OLDPWD', 'HOST_IP', 'CLUSTER'
];

// 加载当前 .env 文件内容
function loadEnvFile() {
  try {
    dotenv.config({ path: envFilePath, override: false });
    return { ...process.env };
  } catch (err) {
    return {};
  }
}

// 序列化回 .env 格式
function serializeEnv(envObj) {
  const lines = [];
  for (const [key, value] of Object.entries(envObj)) {
    if (READONLY_FIELDS.includes(key)) continue;
    // 跳过系统 / Kubernetes / DevCloud 变量，避免污染 .env
    if (SYSTEM_PREFIXES.some(p => key.startsWith(p))) continue;
    const val = value != null ? String(value) : '';
    // 特殊字符转义
    const escaped = val.includes(' ') || val.includes('"') || val.includes("'")
      ? `"${val.replace(/"/g, '\\"')}"`
      : val;
    lines.push(`${key}=${escaped}`);
  }
  return lines.join('\n') + '\n';
}

// GET /api/env/config - 读取当前配置（脱敏）
router.get('/config', (req, res) => {
  const env = loadEnvFile();
  const result = {};
  for (const [key, value] of Object.entries(env)) {
    if (value == null || value === '') continue;
    if (SECRET_FIELDS.includes(key)) {
      // 掩码：只显示末 4 位
      result[key] = value.length > 4 ? '****' + value.slice(-4) : '****';
    } else if (key.startsWith('npm_') || key.startsWith('NODE_')) {
      // 忽略 Node 运行时变量
      continue;
    } else {
      result[key] = value;
    }
  }
  res.json({ code: 0, data: result });
});

// PUT /api/env/config - 更新配置
router.put('/config', (req, res) => {
  const updates = req.body;
  if (!updates || typeof updates !== 'object') {
    return res.status(400).json({ code: -1, message: 'Invalid request body' });
  }

  // 先读取现有配置
  const currentEnv = loadEnvFile();

  // 应用更新（SECRET 字段传空则保留原值）
  for (const [key, value] of Object.entries(updates)) {
    if (READONLY_FIELDS.includes(key)) continue;
    if (SECRET_FIELDS.includes(key) && (value === '' || value == null)) {
      // 保留原值，不做修改
      continue;
    }
    currentEnv[key] = value;
  }

  // 写回文件
  const content = serializeEnv(currentEnv);
  fs.writeFileSync(envFilePath, content, 'utf8');

  res.json({ code: 0, message: 'Config updated' });
});

// GET /api/env/logs - 读取服务器日志
router.get('/logs', (req, res) => {
  const lines = parseInt(req.query.lines, 10) || 200;
  try {
    if (fs.existsSync(LOG_FILE)) {
      const content = fs.readFileSync(LOG_FILE, 'utf8');
      const allLines = content.split('\n');
      const lastLines = allLines.slice(-lines);
      res.json({ code: 0, data: { lines: lastLines, total: allLines.length } });
    } else {
      res.json({ code: 0, data: { lines: [], total: 0 } });
    }
  } catch (err) {
    res.status(500).json({ code: -1, message: err.message });
  }
});

// POST /api/env/logs - 清空日志
router.post('/logs', (req, res) => {
  try {
    if (fs.existsSync(LOG_FILE)) {
      fs.writeFileSync(LOG_FILE, '', 'utf8');
    }
    res.json({ code: 0, message: 'Logs cleared' });
  } catch (err) {
    res.status(500).json({ code: -1, message: err.message });
  }
});

// POST /api/env/restart - 重启服务
router.post('/restart', (req, res) => {
  logger.info('Server restart requested via API');
  res.json({ code: 0, message: 'Restarting...' });

  setTimeout(() => {
    // .env 已清理干净，只保留业务配置（无 K8s/DevCloud 系统变量）
    // dotenv.config({ override: false }) 不会覆盖已存在的变量
    // 所以删除会从 .env 重新读取的关键变量
    const newEnv = { ...process.env };
    delete newEnv.DOMAIN;
    delete newEnv.Domain;
    delete newEnv.SDK_APP_ID;
    delete newEnv.SdkAppId;
    delete newEnv.SECRET_KEY;
    delete newEnv.SDK_SECRET_KEY;
    delete newEnv.SecretKey;
    delete newEnv.USER_ID;
    delete newEnv.PORT;
    delete newEnv.STORAGE_PROVIDER;
    delete newEnv.COS_SECRET_ID;
    delete newEnv.COS_SECRET_KEY;
    delete newEnv.CUSTOM_AUTH_HEADER;
    delete newEnv.MODERATION_MODE;
    delete newEnv.CUSTOM_MODERATION_BASE_URL;
    delete newEnv.CUSTOM_MODERATION_API_KEY;
    // K8s/DevCloud 变量本就不在 newEnv 中（从 process.env 浅拷贝时未包含），子进程不会继承

    const child = spawn(process.argv[0], ['src/index.js'].concat(process.argv.slice(2)), {
      cwd: process.cwd(),
      env: newEnv,
      detached: true,
      stdio: 'ignore'
    });
    child.unref();
    process.exit(0);
  }, 500);
});

module.exports = router;