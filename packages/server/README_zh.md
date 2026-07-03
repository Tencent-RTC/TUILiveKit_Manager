# TUILiveKit Manager — 服务端

> **English Documentation**: [English](./README.md)

TUILiveKit Manager 的后端服务，提供直播间管理、直播监控、礼物配置、内容审核、风控等 REST API 服务。

> 项目整体介绍、架构说明、前端配置等请参阅 [根目录 README](../../README_zh.md)。

---

## 目录

- [快速开始](#快速开始)
- [配置说明](#配置说明)
- [图片上传](#图片上传)
- [扩展服务端](#扩展服务端)
- [部署](#部署)

---

## 快速开始

```bash
cd packages/server
pnpm install
pnpm run start
```

默认端口为 `9000`，可通过 `.env` 中的 `PORT` 修改。

---

## 配置说明

编辑 `packages/server/config/.env`：

### 必填

```bash
SDK_APP_ID=1400000001           # 您的 TRTC SDKAppID
SECRET_KEY=xxxxxxx              # 您的 TRTC SecretKey
USER_ID=administrator           # 您的管理员 userID
```

> **如何获取：**
> - `SDK_APP_ID` 和 `SECRET_KEY`：参见 [开通服务](https://cloud.tencent.com/document/product/647/105439)。
> - `USER_ID`：参见 [管理员账号管理](https://cloud.tencent.com/document/product/647/117216)。

### 可选 — 腾讯云 API 密钥

内容审核、违规标签展示功能依赖此配置：

```bash
TENCENT_CLOUD_SECRET_ID=xxxx    # 腾讯云 SecretId
TENCENT_CLOUD_SECRET_KEY=xxxx   # 腾讯云 SecretKey
```

> 用于调用腾讯云 IM 审核 API（文本审核、纠错白名单）及 TRTC 审核标签查询 API。如果不配置，系统会自动回退使用 COS 的 SecretId/SecretKey。
>
> 参见 [腾讯云 API 密钥管理](https://console.cloud.tencent.com/cam/capi)。

### 可选 — 端口

```bash
PORT=9000  # 默认：9000
```

---

## 图片上传

系统的礼物缩略图、礼物素材、房间封面等功能依赖图片上传。**如果不配置，前端会自动降级为 URL 手动输入模式**，不影响其他功能使用。

在 `packages/server/config/.env` 中追加存储配置：

### 方式一：腾讯云 COS 对象存储（默认）

> 前往 [腾讯云 COS 控制台](https://console.cloud.tencent.com/cos) 创建存储桶并获取 API 密钥。

```bash
STORAGE_PROVIDER=cos

COS_SECRET_ID=your_secret_id        # 腾讯云 API SecretId
COS_SECRET_KEY=your_secret_key      # 腾讯云 API SecretKey
COS_BUCKET=your-bucket-1250000000   # COS 存储桶名称
COS_REGION=ap-guangzhou             # 存储桶所在地域
COS_CDN_DOMAIN=web.sdk.qcloud.com   # （可选）CDN 加速域名
COS_PATH_PREFIX=uploads             # （可选）存储路径前缀
```

### 方式二：自定义 HTTP 上传接口

适用于已有图片上传服务的场景，文件以 `multipart/form-data` 方式转发：

```bash
STORAGE_PROVIDER=custom

CUSTOM_UPLOAD_URL=https://your-api.com/upload     # 上传接口地址（必填）
CUSTOM_ACCESS_DOMAIN=https://cdn.your-api.com     # （可选）文件访问域名前缀
CUSTOM_UPLOAD_FIELD=file                          # （可选）上传文件字段名，默认 file
CUSTOM_RESPONSE_URL_FIELD=data.url                # （可选）响应中 URL 字段的 JSON 路径，默认 data.url
CUSTOM_AUTH_HEADER='Authorization: Bearer token'  # （可选）自定义认证请求头
CUSTOM_PATH_PREFIX=uploads                        # （可选）存储路径前缀
```

> 上传接口应返回 JSON 格式，示例：`{ "code": 0, "data": { "url": "https://cdn.example.com/xxx.png" } }`。

### 方式三：扩展其他存储服务

接入 AWS S3、阿里云 OSS 等：

1. 在 `packages/server/src/services/storage/` 下创建 `YourProvider.js`，继承 `StorageProvider` 基类。
2. 在 `packages/server/src/services/storage/index.js` 的 `PROVIDER_MAP` 中注册。
3. 在 `.env` 中设置 `STORAGE_PROVIDER=your_key` 并添加对应配置项。

---

## 扩展服务端

服务端采用 **Provider 模式**实现可扩展性，支持扩展存储、鉴权等能力。

### 示例：自定义存储 Provider

```js
// packages/server/src/services/storage/MyCustomStorage.js
import { StorageProvider } from './StorageProvider.js';

export class MyCustomStorage extends StorageProvider {
  async upload(file, options) {
    // 自定义上传逻辑
    return { url: 'https://my-cdn.com/xxx.png' };
  }

  async delete(key) {
    // 自定义删除逻辑
  }
}
```

在 `packages/server/src/services/storage/index.js` 中注册：

```js
import { MyCustomStorage } from './MyCustomStorage.js';

const PROVIDER_MAP = {
  cos: COSStorage,
  custom: CustomUpload,
  my_storage: MyCustomStorage,  // 新增
};
```

---

## 部署

### 自建部署

修改配置后将 `packages/server` 部署到服务器：

```bash
pnpm install
node src/index.js
```

确保防火墙允许访问配置的端口（默认 `9000`）。

### 云函数

在项目根目录运行 `npm run deploy:server` 生成 `dist/scf-deploy.zip` 部署包，上传至腾讯 [云函数](https://cloud.tencent.com/document/product/583)（Web 函数，Node.js 20.19），在云函数控制台设置环境变量。

### 与前端共用端口

将前端构建产物放到服务端的 `public/` 目录下，前端配置 `VITE_API_BASE_URL=/api`，即可共用同一端口提供 API 和静态文件服务。
