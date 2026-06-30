# TUILiveKit Manager

> **中文文档**: [中文版](./README_zh.md)

Live Streaming Management System (React + Vue 3), providing comprehensive live streaming operations management capabilities including live monitoring, room management, gift configuration, content audit, and risk control.

This project adopts an **"Open-Source Demo Shell + Closed-Source Component Package"** delivery model. Core business components are delivered as closed-source npm packages (`tuikit-live-manager-sdk-react` / `tuikit-live-manager-sdk-vue`), with only the open-source Demo shell code (routing, layout, menus, configuration) exposed — preventing customers from modifying core source code and breaking upgrade paths. Subsequent upgrades only require replacing the SDK packages as a whole.

---

## Table of Contents

- [Features](#features)
- [Feature Showcase](#feature-showcase)
- [Architecture](#architecture)
- [Quick Start](#quick-start)
- [Custom Development](#custom-development)
- [Production Deployment](#production-deployment)
- [Upgrade Guide](#upgrade-guide)
- [Related Documentation](#related-documentation)

---

## Features

- **Live Monitoring**: Multi-screen monitoring, low-latency playback, room search, forced stream termination.
- **Room Details**: Real-time playback, data statistics, user management (mute/ban), full-room mute, violation warnings.
- **Room Management**: Room list, create/edit/close rooms, OBS streaming configuration, room tag management.
- **Gift Configuration**: Gift CRUD, category management, multi-language support.

> **Note for Overseas Users:**
>
> TRTC services are automatically activated for overseas regions — no separate approval or application is required. Simply configure your SDKAppID and SecretKey to get started.

## Feature Showcase

### Live Monitoring

![](https://qcloudimg.tencent-cloud.cn/image/document/a5bac22e2062c85cda794121dde06d42.png)

### Room Management

![](https://qcloudimg.tencent-cloud.cn/image/document/ec450edbcc29aec0f461332a8ba01857.png)

### Room Details

![](https://qcloudimg.tencent-cloud.cn/image/document/9c0c6e9dc5f89d46a7cccc4f92d41876.png)

### Gift Management

![](https://qcloudimg.tencent-cloud.cn/image/document/1e3e324b280e3df05b11e8d2aeab4c51.png)

---

## Architecture

This project uses the **"Open-Source Demo Shell + Closed-Source Component Package"** delivery model:

```
TUILiveKit_Manager/          ← GitHub open-source repo (customer's local clone)
├── packages/
│   ├── react/               ← Open Source: React Demo Shell (modifiable)
│   ├── vue3/                ← Open Source: Vue3 Demo Shell (modifiable)
│   ├── react-sdk/           ← Closed Source: tuikit-live-manager-sdk-react core package
│   ├── vue-sdk/             ← Closed Source: tuikit-live-manager-sdk-vue core package
│   ├── customization/       ← Open Source: Extension protocol package (modifiable)
│   └── server/              ← Open Source: Server-side code (modifiable)
├── delivery-manifest.json   ← Delivery manifest with package versions & public exports
└── README.md
```

---

## Quick Start

### Step 1: Environment Setup & Service Activation

Before getting started, please refer to [Getting Started (Web Vue3)](https://cloud.tencent.com/document/product/647/123049) for environment requirements and service activation.

> **Note:**
>
> For overseas users, TRTC services are automatically activated — no additional approval steps are needed.

### Step 2: Download Project

Download the latest release from GitHub Releases, or clone via git:

```bash
git clone https://github.com/Tencent-RTC/TUILiveKit_Manager
cd TUILiveKit_Manager
pnpm install
```

> **Note:**
>
> The GitHub repository's `packages/react-sdk` and `packages/vue-sdk` directories contain only compiled output and type declarations (`.js` / `.d.ts` / `.css`), not core business source code. All instructions in this guide operate on the delivered distribution code.

### Step 3: Configure Server

Edit `packages/server/config/.env`:

```bash
SDK_APP_ID=1400000001           # Replace with your SDKAppID
SECRET_KEY=xxxxxxx              # Replace with your SecretKey
USER_ID=administrator           # Replace with your admin userID
```

> **Note:**
>
> - For how to obtain SDK_APP_ID and SECRET_KEY, see [Activate Services](https://cloud.tencent.com/document/product/647/105439).
> - For how to obtain USER_ID, see [Admin Account Management](https://cloud.tencent.com/document/product/647/117216).

Start the server:

```bash
pnpm run start:server
```

> Default port is 9000. For full configuration details (content moderation, custom port, etc.), see [Server Documentation](./packages/server/README.md#configuration).

### Step 4: Configure Image Upload (Optional)

The system requires image upload for gift thumbnails, materials, and room covers. **If not configured, the frontend will automatically degrade to manual URL input mode.**

The server supports three storage providers: Tencent Cloud COS (default), custom HTTP upload, and extending to other services (S3, OSS, etc.).

> For detailed storage configuration, see [Server Documentation — Image Upload](./packages/server/README.md#image-upload).

### Step 5: Configure Frontend

Choose your frontend framework and edit the corresponding `.env` file:

**Vue 3:**

Edit `packages/vue3/.env`:

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

**React:**

Edit `packages/react/.env`:

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

> **Note:**
>
> The port in `VITE_API_BASE_URL` must match the server port configured in Step 3.

### Step 6: Start Frontend

```bash
# Vue 3
pnpm run dev:vue

# React
pnpm run dev:react
```

---

## Custom Development

The Demo shell code (`packages/react`, `packages/vue3`) is fully open-source. You may modify routing, layouts, menus, page shells, and extend business capabilities through:

- **Customer Config**: Customize page title, logo, branding via `customer.config.ts`.
- **SDK Entry**: Configure SDK parameters (e.g., `SDKAppID`, `serverUrl`) via `configureLiveManager()` in `live-manager.ts`.
- **Component Slots**: Inject custom components at key page positions via `defineCustomerExtension`'s `components` field, receiving context Props automatically.
- **Server Extensions**: Extend storage, authentication, and other capabilities via the Provider mechanism in `packages/server`. See [Server Documentation — Extending the Server](./packages/server/README.md#extending-the-server).

> **Framework-specific code examples and API details** are available in each SDK package's README:
> - [tuikit-live-manager-sdk-react — Customization Guide](./packages/react-sdk/README.md#customization)
> - [tuikit-live-manager-sdk-vue — Customization Guide](./packages/vue-sdk/README.md#customization)

---

## Production Deployment

> **Note:**
>
> - If you have your own server, choose Option 1: Self-hosted deployment for more flexibility and easier integration with your existing system.
> - If you want a quick trial or demo, choose Option 2: Cloud Functions + COS/EdgeOne Pages for faster setup without purchasing or configuring servers.

### Option 1: Self-hosted Deployment

- **Server**: After modifying the configuration, deploy `packages/server` to your server and run `node src/index.js` to start.
- **Frontend**: After modifying `VITE_API_BASE_URL`, run `pnpm run build:vue` (Vue 3) or `pnpm run build:react` (React) at the project root. Deploy the build output to a static server such as Nginx, or place it in the server's `public` directory to share the port. In the latter case, set `VITE_API_BASE_URL=/api` and the frontend will use relative paths for API requests.

### Option 2: Cloud Functions + COS / EdgeOne Pages

- **Server**: Upload the `packages/server` directory to Tencent [Cloud Functions](https://cloud.tencent.com/document/product/583) (Web Functions, Node.js 18.15).
- **Frontend**: Create `.env.production` with the cloud function URL, then run `pnpm run build:vue` (Vue 3) or `pnpm run build:react` (React) at the root. Upload the build output to [COS](https://cloud.tencent.com/document/product/436/38484) or [EdgeOne Pages](https://cloud.tencent.com/document/product/1552/87601).

  ```bash
  VITE_API_BASE_URL=https://your-scf-url.com/api
  ```

  > **Note:**
  >
  > Replace `your-scf-url.com` with your actual domain and port.

---

## Upgrade Guide

Since the SDK packages use a closed-source delivery model, follow these steps to upgrade:

1. Download the latest `TUILiveKit_Manager` from the GitHub Releases page.
2. Replace the entire `packages/react-sdk` and `packages/vue-sdk` directories in your project.
3. Compare against `delivery-manifest.json` to confirm version numbers and public exports have no breaking changes.
4. If there are breaking changes, refer to the Release Notes and update the corresponding calls in the Demo shell.
5. Run `pnpm install` again and rebuild.

> **Note:**
>
> Do not directly modify files in `packages/react-sdk` or `packages/vue-sdk`, as changes will be lost during upgrades.

---

## Related Documentation

- [Getting Started (Web Vue3)](https://cloud.tencent.com/document/product/647/123049)
- [Activate TUILiveKit Services](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit Admin Account Management](https://cloud.tencent.com/document/product/647/117216)
- [Cloud Functions Quick Start](https://cloud.tencent.com/document/product/583/54786)
- [COS (Object Storage) Quick Start](https://cloud.tencent.com/document/product/436/38484)
- [EdgeOne Pages](https://cloud.tencent.com/document/product/1552/87601)
- [tuikit-live-manager-sdk-react Package Documentation](./packages/react-sdk/README.md)
- [tuikit-live-manager-sdk-vue Package Documentation](./packages/vue-sdk/README.md)
- [Server Documentation](./packages/server/README.md)
