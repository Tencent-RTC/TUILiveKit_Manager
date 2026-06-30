const express = require('express');
const path = require('path');
const fs = require('fs');
const { apiRouter, envConfigRouter } = require('./routes/index.js');
const { rumApiRouter } = require('./routes/rumApiRouter.js');
const processCors = require('./middleware/processCors.js');
const { credentialProxy } = require('./middleware/credentialProxy.js');
const { requestContextMiddleware } = require('./middleware/requestContext.js');
const { loadServerCustomerExtension } = require('./customer/loadCustomerExtension.js');
const { applyServerCustomerExtension } = require('./customer/applyCustomerExtension.js');
const { Config } = require('../config/index.js');
const logger = require('./utils/logger.js');

const app = express();
const customerExtension = loadServerCustomerExtension();

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));
app.use(processCors);
app.use(credentialProxy);
app.use(requestContextMiddleware);
applyServerCustomerExtension(app, customerExtension);
app.use('/api', apiRouter);
app.use('/api/env', envConfigRouter);
app.use('/api/rum', rumApiRouter);

// 全局错误处理中间件
app.use((err, req, res, next) => {
  logger.error('GLOBAL_ERROR', err, {
    method: req.method,
    path: req.path,
    body: req.body,
    query: req.query
  });
  res.status(err.status || 500).json({
    code: -1,
    message: err.message || 'Internal Server Error'
  });
});

// Serve frontend static files (for production deployment)
const publicPath = path.resolve(__dirname, '../public');

/**
 * serveSPA: serve SPA index.html with runtime config injected.
 *
 * Runtime config (injected via <script> before </head>):
 *   - window.__IDENTITY_MODE__ : 'admin' | 'audience' (from env IDENTITY_MODE)
 */
function serveSPA(spaDir) {
  const htmlPath = path.join(spaDir, 'index.html');
  const cache = { html: null, mtime: 0 };
  const identityMode = process.env.IDENTITY_MODE === 'admin' ? 'admin' : 'audience';

  const runtimeConfigScript = identityMode === 'audience'
    ? '\n    <script>window.__IDENTITY_MODE__="audience"</script>'
    : '';

  return (req, res, next) => {
    try {
      const stat = fs.statSync(htmlPath);
      if (!cache.html || stat.mtimeMs !== cache.mtime) {
        let html = fs.readFileSync(htmlPath, 'utf-8');
        if (runtimeConfigScript) {
          html = html.replace('</head>', `${runtimeConfigScript}\n  </head>`);
        }
        cache.html = html;
        cache.mtime = stat.mtimeMs;
      }
      res.type('html').send(cache.html);
    } catch (err) {
      if (err && typeof err === 'object' && 'code' in err && err.code === 'ENOENT') {
        next();
      } else {
        next(err || new Error('Failed to serve SPA'));
      }
    }
  };
}

/**
 * setupSPA: 为 SPA 注册静态文件服务 + index.html（注入 runtime config）
 * hash 路由模式下无需 SPA fallback，所有路由走 # 后的 hash 片段
 * 需要同时处理带尾斜杠和不带尾斜杠的路径，防止用户直接访问 /vue 时 404
 */
function setupSPA(mount, spaDir) {
  const mountPath = mount.endsWith('/') ? mount.slice(0, -1) : mount;
  // 1. 静态资源（index: false 防止 express.static 劫持根路由）
  app.use(mount, express.static(spaDir, { index: false }));
  // 2. 根路径 HTML（注入 runtime config script），同时匹配 /vue 和 /vue/
  app.get(mountPath, serveSPA(spaDir));
  app.get(`${mountPath}/`, serveSPA(spaDir));
}

setupSPA('/vue', path.join(publicPath, 'vue'));
setupSPA('/react', path.join(publicPath, 'react'));
setupSPA('/tools', path.join(publicPath, 'tools'));
setupSPA('/demo', path.join(publicPath, 'demo'));
setupSPA('/mock-vue', path.join(publicPath, 'mock-vue'));
setupSPA('/mock-react', path.join(publicPath, 'mock-react'));

// 独立页面：环境变量配置（纯 HTML+JS）
app.get('/env-config', (req, res) => {
  res.sendFile(path.join(publicPath, 'env-config.html'));
});

app.get('/', (req, res) => {
  res.redirect('/vue/');
});

app.listen(Config.Port, err => {
  if (!!err) {
    console.error(err);
  } else {
    console.log('Express server started on port: ' + Config.Port.toString());
  }
});
