#!/usr/bin/env node
/**
 * 打包 server 用于腾讯云 SCF 上传。
 *
 * 与 scripts/deploy.mjs 的区别：本脚本会在打包前生成 SCF 专用的 config/.env，
 * 让 SCF 解压后无需在控制台逐项配环境变量即可运行问卷功能。
 *
 * 流程：
 *   1. 生成 config/.env（内置默认 + 用户密钥源合并）
 *   2. 复制 src / scf_bootstrap / tencentcloud-sdk-nodejs / config
 *   3. 生成 production package.json 并 npm install
 *   4. 打包为 dist/scf-deploy.zip
 *
 * 用法：
 *   node scripts/pack-scf.mjs
 *   node scripts/pack-scf.mjs --env-file=config/.env.scf
 *
 * 密钥源：
 *   - 默认读取 config/.env.scf（已被 .gitignore 忽略，不会随仓库发布）
 *   - 也可用 --env-file 指定其它文件
 *   - 内容为 KEY=VALUE 行（# 开头为注释），会合并进生成的 .env（用户值覆盖默认值）
 */

import { cpSync, rmSync, existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverDir = resolve(__dirname, '..');
const deployDir = resolve(serverDir, 'dist/deploy');

// ---------- 1. 解析命令行参数 ----------
const args = process.argv.slice(2);
let envFilePath = resolve(serverDir, 'config/.env.scf');
for (const arg of args) {
  if (arg.startsWith('--env-file=')) {
    envFilePath = resolve(serverDir, arg.split('=')[1]);
  }
}

// ---------- 2. 生成 SCF 专用 .env ----------
// 内置默认（非敏感）
// 说明：SURVEY_STORAGE_DIR 非空即启用问卷数据源（本地文件，SCF 挂载 CFS）。
const DEFAULT_ENV = {
  PORT: '9000',
  SURVEY_STORAGE_DIR: '/mnt',
  // SURVEY_READ_TOKEN 属于敏感配置，请勿在此硬编码。
  // 如需设置，写入 config/.env.scf（或用 --env-file 指定），会合并进生成的 .env。
};

// 从密钥源解析 KEY=VALUE（用户值覆盖默认值）
function parseEnvFile(filePath) {
  const map = {};
  if (!existsSync(filePath)) return map;
  const content = readFileSync(filePath, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq <= 0) continue;
    const key = line.slice(0, eq).trim();
    const value = line.slice(eq + 1).trim();
    if (key) map[key] = value;
  }
  return map;
}

const merged = { ...DEFAULT_ENV, ...parseEnvFile(envFilePath) };
const secretLoaded = existsSync(envFilePath);

const envLines = [
  '# SCF 部署配置（由 scripts/pack-scf.mjs 自动生成）',
  ...Object.entries(merged).map(([k, v]) => `${k}=${v}`),
  '',
];
const envContent = envLines.join('\n');

// ---------- 3. 清理旧部署目录 ----------
if (existsSync(deployDir)) {
  rmSync(deployDir, { recursive: true, force: true });
}
mkdirSync(resolve(deployDir, 'config'), { recursive: true });

// ---------- 4. 复制源文件 ----------
cpSync(resolve(serverDir, 'src'), resolve(deployDir, 'src'), { recursive: true });
cpSync(resolve(serverDir, 'scf_bootstrap'), resolve(deployDir, 'scf_bootstrap'));
cpSync(resolve(serverDir, 'config/index.js'), resolve(deployDir, 'config/index.js'));
writeFileSync(resolve(deployDir, 'config/.env'), envContent, 'utf8');
cpSync(
  resolve(serverDir, 'tencentcloud-sdk-nodejs'),
  resolve(deployDir, 'tencentcloud-sdk-nodejs'),
  { recursive: true },
);

// ---------- 5. 生成 production package.json ----------
const pkg = JSON.parse(readFileSync(resolve(serverDir, 'package.json'), 'utf8'));
writeFileSync(
  resolve(deployDir, 'package.json'),
  JSON.stringify({
    name: pkg.name,
    version: pkg.version,
    scripts: { start: pkg.scripts?.start ?? 'node ./src/index.js' },
    dependencies: pkg.dependencies ?? {},
  }, null, 2),
);

// ---------- 6. npm install ----------
execSync('npm install --omit=dev --no-package-lock', { cwd: deployDir, stdio: 'inherit' });

// ---------- 7. 打包 zip ----------
const zipFile = resolve(serverDir, 'dist/scf-deploy.zip');
if (platform() === 'win32') {
  execSync(`powershell -Command "Compress-Archive -Path '${deployDir}\\*' -DestinationPath '${zipFile}'"`, { stdio: 'inherit' });
} else {
  execSync(`cd "${deployDir}" && zip -r "${zipFile}" .`, { stdio: 'inherit' });
}

// ---------- 8. 输出摘要 ----------
console.log('\n==============================================');
console.log('SCF 部署包已生成');
console.log('==============================================');
console.log(`部署包:   ${zipFile}`);
console.log(`部署目录: ${deployDir}`);
console.log('');
console.log('已写入 .env 的配置项:');
for (const [k, v] of Object.entries(merged)) {
  const isSecret = /SECRET|KEY|TOKEN/i.test(k) && v;
  console.log(`  ${k}=${isSecret ? '***' : v}`);
}
console.log('');
console.log(secretLoaded
  ? `密钥源:   ${envFilePath}（已合并）`
  : `未找到密钥源 ${envFilePath}，敏感项（COS/云API）未配置，上传/云API能力不可用（不影响问卷）`);
console.log('');
console.log('上传 SCF 后还需在控制台完成:');
console.log('  1. 挂载 CFS 到 /mnt（问卷留言持久化目录）');
console.log('  2. 如需上传/云API，在 SCF 环境变量补齐 COS / TENCENT_CLOUD 密钥');
console.log('==============================================\n');
