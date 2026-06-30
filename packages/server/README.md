# TUILiveKit Manager — Server

> **中文文档**: [中文版](./README_zh.md)

Backend server for TUILiveKit Manager, providing REST API services including room management, live monitoring, gift configuration, content moderation, and risk control.

> For project overview, architecture, and frontend setup, see the [root README](../../README.md).

---

## Table of Contents

- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Image Upload](#image-upload)
- [Extending the Server](#extending-the-server)
- [Deployment](#deployment)

---

## Quick Start

```bash
cd packages/server
pnpm install
pnpm run start
```

Default port is `9000`. You can change it by setting `PORT` in `.env`.

---

## Configuration

Edit `packages/server/config/.env`:

### Required

```bash
SDK_APP_ID=1400000001           # Your TRTC SDKAppID
SECRET_KEY=xxxxxxx              # Your TRTC SecretKey
USER_ID=administrator           # Your admin userID
```

> **How to obtain:**
> - `SDK_APP_ID` and `SECRET_KEY`: See [Activate Services](https://cloud.tencent.com/document/product/647/105439).
> - `USER_ID`: See [Admin Account Management](https://cloud.tencent.com/document/product/647/117216).

### Optional — Tencent Cloud API Keys

Required for content moderation and violation label features:

```bash
TENCENT_CLOUD_SECRET_ID=xxxx    # Tencent Cloud SecretId
TENCENT_CLOUD_SECRET_KEY=xxxx   # Tencent Cloud SecretKey
```

> These keys are used for IM moderation API (text audit, correction whitelist) and TRTC audit label query. If not set, the system falls back to COS credentials.
>
> See [Tencent Cloud API Key Management](https://console.cloud.tencent.com/cam/capi).

### Optional — Port

```bash
PORT=9000  # Default: 9000
```

---

## Image Upload

The system requires image upload for gift thumbnails, materials, and room covers. **If not configured, the frontend automatically degrades to manual URL input mode**, which does not affect other features.

Add storage configuration to `packages/server/config/.env`:

### Option 1: Tencent Cloud COS (Default)

> Go to [Tencent Cloud COS Console](https://console.cloud.tencent.com/cos) to create a bucket and obtain API keys.

```bash
STORAGE_PROVIDER=cos

COS_SECRET_ID=your_secret_id        # Tencent Cloud API SecretId
COS_SECRET_KEY=your_secret_key      # Tencent Cloud API SecretKey
COS_BUCKET=your-bucket-1250000000   # COS bucket name
COS_REGION=ap-guangzhou             # Bucket region
COS_CDN_DOMAIN=web.sdk.qcloud.com   # (Optional) CDN acceleration domain
COS_PATH_PREFIX=uploads             # (Optional) Storage path prefix
```

### Option 2: Custom HTTP Upload

Suitable when you already have an upload service. Files are forwarded via `multipart/form-data`:

```bash
STORAGE_PROVIDER=custom

CUSTOM_UPLOAD_URL=https://your-api.com/upload     # Upload endpoint (required)
CUSTOM_ACCESS_DOMAIN=https://cdn.your-api.com     # (Optional) File access domain prefix
CUSTOM_UPLOAD_FIELD=file                          # (Optional) Upload field name, default: file
CUSTOM_RESPONSE_URL_FIELD=data.url                # (Optional) JSON path for URL in response, default: data.url
CUSTOM_AUTH_HEADER='Authorization: Bearer token'  # (Optional) Custom auth header
CUSTOM_PATH_PREFIX=uploads                        # (Optional) Storage path prefix
```

> The upload endpoint should return JSON, e.g.: `{ "code": 0, "data": { "url": "https://cdn.example.com/xxx.png" } }`.

### Option 3: Extend Other Storage Services

To integrate AWS S3, Alibaba Cloud OSS, etc.:

1. Create `YourProvider.js` in `packages/server/src/services/storage/`, extending the `StorageProvider` base class.
2. Register it in `PROVIDER_MAP` in `packages/server/src/services/storage/index.js`.
3. Set `STORAGE_PROVIDER=your_key` in `.env` and add the corresponding configuration.

---

## Extending the Server

The server uses a **Provider pattern** for extensibility. You can extend storage, authentication, and other capabilities.

### Example: Custom Storage Provider

```js
// packages/server/src/services/storage/MyCustomStorage.js
import { StorageProvider } from './StorageProvider.js';

export class MyCustomStorage extends StorageProvider {
  async upload(file, options) {
    // Custom upload logic
    return { url: 'https://my-cdn.com/xxx.png' };
  }

  async delete(key) {
    // Custom delete logic
  }
}
```

Register it in `packages/server/src/services/storage/index.js`:

```js
import { MyCustomStorage } from './MyCustomStorage.js';

const PROVIDER_MAP = {
  cos: COSStorage,
  custom: CustomUpload,
  my_storage: MyCustomStorage,  // New provider
};
```

---

## Deployment

### Self-hosted

After modifying the configuration, deploy `packages/server` to your server:

```bash
node src/index.js
```

Make sure the firewall allows access to the configured port (default `9000`).

### Cloud Functions

Upload `packages/server` to Tencent [Cloud Functions](https://cloud.tencent.com/document/product/583) (Web Functions, Node.js 18.15). Set the environment variables in the cloud function console.

### Sharing Port with Frontend

Place the frontend build output into the server's `public/` directory, then set `VITE_API_BASE_URL=/api` on the frontend side. Both the API and static files will be served on the same port.
