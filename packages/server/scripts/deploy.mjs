import { cpSync, rmSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverDir = resolve(__dirname, '..');
const deployDir = resolve(serverDir, 'dist/deploy');

// 1. 清理旧部署目录
if (existsSync(deployDir)) {
  rmSync(deployDir, { recursive: true, force: true });
}

// 2. 复制源文件到部署目录
cpSync(resolve(serverDir, 'src'), resolve(deployDir, 'src'), { recursive: true });
cpSync(resolve(serverDir, 'config'), resolve(deployDir, 'config'), { recursive: true });
cpSync(resolve(serverDir, 'scf_bootstrap'), resolve(deployDir, 'scf_bootstrap'));
// file: 依赖需要源目录在场
cpSync(
  resolve(serverDir, 'tencentcloud-sdk-nodejs'),
  resolve(deployDir, 'tencentcloud-sdk-nodejs'),
  { recursive: true },
);

// 3. 生成仅含 production 依赖的 package.json
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

// 4. npm install 生成无软链接的扁平 node_modules
execSync('npm install --omit=dev --no-package-lock', { cwd: deployDir, stdio: 'inherit' });

// 5. 打包为 zip
const zipFile = resolve(serverDir, 'dist/scf-deploy.zip');
if (platform() === 'win32') {
  execSync(`powershell -Command "Compress-Archive -Path '${deployDir}\\*' -DestinationPath '${zipFile}'"`, { stdio: 'inherit' });
} else {
  execSync(`cd "${deployDir}" && zip -r "${zipFile}" .`, { stdio: 'inherit' });
}

console.log(`\n✅ 部署目录: ${deployDir}`);
console.log(`✅ 部署包:   ${zipFile}`);
