# TUILiveKit Manager

> **English Documentation**: [English](./README.md)

直播间管理系统（React + Vue 3 双框架），提供直播监控、直播间管理、礼物配置、直播间控制台、内容审核与风控等完整的直播运营管理能力。

本项目采用**"开源 Demo 外壳 + 闭源组件包"**交付模式。核心业务组件以 npm 闭源包（`tuikit-live-manager-sdk-react` / `tuikit-live-manager-sdk-vue`）形式交付，仅开源 Demo 外壳代码（路由、布局、菜单、配置），防止客户因改动核心源码而无法升级。后续升级只需整体替换 SDK 包即可。

---

## 目录

- [功能介绍](#功能介绍)
- [功能展示](#功能展示)
- [架构说明](#架构说明)
- [快速接入](#快速接入)
- [二次开发](#二次开发)
- [生产部署](#生产部署)
- [升级指南](#升级指南)
- [相关文档](#相关文档)

---

## 功能介绍

- **直播监控**：多路同屏监播、低延迟播放、房间搜索、强制关播、违规标签展示。
- **直播间详情**：实时播放、数据统计、用户管理（禁言/封禁）、全员禁言、发送违规警告。
- **直播间管理**：直播间列表、创建/编辑/解散房间、OBS 推流配置、直播间标签管理。
- **礼物配置**：礼物增删改、分类管理、多语言配置。
- **内容审核**：文本审核记录查看、批量放行、纠错白名单。

## 功能展示

### 直播监控

![](https://qcloudimg.tencent-cloud.cn/image/document/a5bac22e2062c85cda794121dde06d42.png)

### 直播间管理

![](https://qcloudimg.tencent-cloud.cn/image/document/ec450edbcc29aec0f461332a8ba01857.png)

### 直播间详情

![](https://qcloudimg.tencent-cloud.cn/image/document/9c0c6e9dc5f89d46a7cccc4f92d41876.png)

### 礼物管理

![](https://qcloudimg.tencent-cloud.cn/image/document/1e3e324b280e3df05b11e8d2aeab4c51.png)

### 内容审核

展示文本审核记录列表，支持查看违规消息详情、批量放行、将误判关键词加入纠错白名单。

### 违规标签展示

直播监控页面中，直播间卡片会展示该直播间的违规标签（如涉黄、涉政、广告等），帮助运营人员快速识别违规直播间。该能力依赖腾讯云 [AI 内容理解服务](https://cloud.tencent.com/document/product/647/132331)，需先在控制台开通后才能使用。

---

## 架构说明

本项目采用**"开源 Demo 外壳 + 闭源组件包"**的交付模式：

```
TUILiveKit_Manager/          ← GitHub 开源仓库（客户 clone 到的代码）
├── packages/
│   ├── react/               ← 开源：React Demo 外壳（可修改）
│   ├── vue3/                ← 开源：Vue3 Demo 外壳（可修改）
│   ├── react-sdk/           ← 闭源：tuikit-live-manager-sdk-react 核心组件包
│   ├── vue-sdk/             ← 闭源：tuikit-live-manager-sdk-vue 核心组件包
│   ├── customization/       ← 开源：扩展协议包（可修改）
│   └── server/              ← 开源：服务端代码（可修改）
├── delivery-manifest.json   ← 交付清单，记录各包版本与公开入口
└── README.md
```

---

## 快速接入

### 步骤 1：环境配置及开通服务

在进行快速接入之前，您需要参考 [准备工作（Web Vue3）](https://cloud.tencent.com/document/product/647/123049)，满足相关环境配置及开通对应服务。

> **说明：**
>
> 如需使用**内容审核**及**违规标签展示**功能，请额外开通 [AI 内容理解服务（国内）](https://cloud.tencent.com/document/product/647/132331)，购买 AI 内容理解套餐包后即可使用。

### 步骤 2：下载项目

从 GitHub Release 页面下载最新发布包，或通过 git clone：

```bash
git clone https://github.com/Tencent-RTC/TUILiveKit_Manager
cd TUILiveKit_Manager
pnpm install
```

> **注意：**
>
> GitHub 仓库中 `packages/react-sdk` 和 `packages/vue-sdk` 仅包含编译后的产物和类型声明（`.js` / `.d.ts` / `.css`），不包含核心业务源码。本指南所有操作均基于仓库中的交付代码进行。

### 步骤 3：配置服务端

编辑 `packages/server/config/.env`：

```bash
SDK_APP_ID=1400000001           # 请替换您的 SDKAppID
SECRET_KEY=xxxxxxx              # 请替换您的 SecretKey
USER_ID=administrator           # 请替换您的管理员 userID
```

> **如何获取：**
> - `SDK_APP_ID` 和 `SECRET_KEY`：参见 [开通服务](https://cloud.tencent.com/document/product/647/105439)。
> - `USER_ID`：参见 [管理员账号管理](https://cloud.tencent.com/document/product/647/117216)。

启动服务：

```bash
pnpm run start:server
```

> 默认端口为 9000。完整配置说明（内容审核、自定义端口等）请参阅 [服务端文档](./packages/server/README.md#配置说明)。

### 步骤 4：配置图片上传（可选）

系统的礼物缩略图、礼物素材、房间封面等功能依赖图片上传。**如果不配置，前端会自动降级为 URL 手动输入模式**。

服务端支持三种存储方式：腾讯云 COS（默认）、自定义 HTTP 上传接口、扩展其他存储服务（S3、OSS 等）。

> 详细的存储配置请参阅 [服务端文档 — 图片上传](./packages/server/README.md#图片上传)。

### 步骤 5：配置前端

选择您的框架，编辑对应的 `.env` 文件：

**Vue 3：**

编辑 `packages/vue3/.env`：

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

**React：**

编辑 `packages/react/.env`：

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

> **注意：**
>
> VITE_API_BASE_URL 中的端口号要和之前配置 server 启动的端口一致。

### 步骤 6：启动前端

```bash
# Vue 3
pnpm run dev:vue

# React
pnpm run dev:react
```

---

## 二次开发

Demo 外壳代码（`packages/react`、`packages/vue3`）完全开源，您可以修改路由、布局、菜单、页面壳等，并通过以下方式扩展业务能力：

- **客户配置**：通过 `customer.config.ts` 自定义页面标题、Logo、品牌信息等。
- **SDK 入口**：通过 `live-manager.ts` 中的 `configureLiveManager()` 配置 SDK 参数（如 `SDKAppID`、`serverUrl` 等）。
- **组件插槽**：通过 `defineCustomerExtension` 的 `components` 字段，在页面关键位置注入自定义组件，并接收上下文 Props。
- **服务端扩展**：通过 `packages/server` 中的 Provider 机制扩展存储、鉴权等能力。详见 [服务端文档 — 扩展服务端](./packages/server/README.md#扩展服务端)。

> **具体框架代码示例和 API 详情**请参阅各 SDK 包的 README：
> - [tuikit-live-manager-sdk-react — 定制开发指南](./packages/react-sdk/README_zh.md#定制开发)
> - [tuikit-live-manager-sdk-vue — 定制开发指南](./packages/vue-sdk/README_zh.md#定制开发)

---

## 生产部署

> **说明：**
>
> - 如果您已经有自己的服务器，可以选择方式一：自建部署，可以更加灵活的进行定制和集成到您已有的系统中。
> - 如果您想快速试用或者演示，可以选择方式二：云函数 + COS/EdgeOne Pages，省去自己购买和配置服务器更加快捷方便。

### 方式一：自建部署

- **服务端**：修改配置后将 `packages/server` 部署到您的服务器，运行 `node src/index.js` 启动服务器。
- **前端**：修改 `VITE_API_BASE_URL` 后在根目录下 `pnpm run build:vue`（Vue 3）或 `pnpm run build:react`（React），将构建产物部署到静态资源服务器如 Nginx，也可以把构建产物放到之前服务器的 `public` 目录下，可以和服务器共用端口，此时可以配置 `VITE_API_BASE_URL=/api`，前端使用相对路径请求 api 接口。

### 方式二：云函数 + COS / EdgeOne Pages

- **服务端**：将 `packages/server` 目录上传至腾讯 [云函数](https://cloud.tencent.com/document/product/583)（Web 函数，Node.js 18.15）。
- **前端**：创建 `.env.production` 设置云函数请求地址后，在根目录下 `pnpm run build:vue`（Vue 3）或 `pnpm run build:react`（React），将构建产物上传至 [COS](https://cloud.tencent.com/document/product/436/38484) 或 [EdgeOne Pages](https://cloud.tencent.com/document/product/1552/87601)。

  ```bash
  VITE_API_BASE_URL=https://your-scf-url.com/api
  ```

  > **注意：**
  >
  > your-scf-url.com 要替换成实际的域名和端口。

---

## 升级指南

由于 SDK 包采用闭源交付模式，升级步骤如下：

1. 从 GitHub Release 页面下载最新版 `TUILiveKit_Manager`。
2. 整体替换项目中的 `packages/react-sdk` 和 `packages/vue-sdk` 目录。
3. 对比 `delivery-manifest.json` 确认版本号和公开入口无 Breaking Change。
4. 如有 Breaking Change，参考 Release Notes 修改 Demo 外壳中对应的调用方式。
5. 重新 `pnpm install` 并构建。

> **注意：**
>
> 不要直接修改 `packages/react-sdk` 或 `packages/vue-sdk` 中的文件，否则升级时改动会丢失。

---

## 相关文档

- [准备工作（Web Vue3）](https://cloud.tencent.com/document/product/647/123049)
- [开通 TUILiveKit 服务](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit 管理员账号管理](https://cloud.tencent.com/document/product/647/117216)
- [开通内容理解服务（国内）](https://cloud.tencent.com/document/product/647/132331)
- [云函数新手指引](https://cloud.tencent.com/document/product/583/54786)
- [COS（对象存储）快速入门](https://cloud.tencent.com/document/product/436/38484)
- [EdgeOne（边缘安全加速平台）Pages](https://cloud.tencent.com/document/product/1552/87601)
- [tuikit-live-manager-sdk-react 包文档](./packages/react-sdk/README.md)
- [tuikit-live-manager-sdk-vue 包文档](./packages/vue-sdk/README.md)
- [服务端文档](./packages/server/README.md)
