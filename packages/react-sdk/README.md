# tuikit-live-manager-sdk-react

> **中文文档**: [中文版](./README_zh.md)

React core component package for TUILiveKit Manager — provides a complete live streaming operations management system including live monitoring, room management, gift configuration, content audit, and risk control.

This package is delivered as a **closed-source distribution** — it contains compiled output and type declarations (`.js` / `.d.ts` / `.css`), not core business source code.

---

## Table of Contents

- [Installation](#installation)
- [Peer Dependencies](#peer-dependencies)
- [Quick Start](#quick-start)
- [Core APIs](#core-apis)
- [Page Components](#page-components)
- [Customization](#customization)
- [Related Documentation](#related-documentation)

---

## Installation

```bash
npm install tuikit-live-manager-sdk-react
# or
pnpm add tuikit-live-manager-sdk-react
```

## Peer Dependencies

Make sure the following peer dependencies are installed:

```json
{
  "react": ">=18.0.0",
  "react-dom": ">=18.0.0",
  "react-router-dom": ">=7.0.0",
  "tdesign-react": ">=1.12.0",
  "tdesign-icons-react": ">=0.5.0",
  "tuikit-atomicx-react": ">=6.1.2-beta.1",
  "@tencentcloud/uikit-base-component-react": ">=1.4.0",
  "livekit-manager-customization": ">=1.0.0",
  "axios": ">=1.0.0"
}
```

```bash
pnpm add react react-dom react-router-dom tdesign-react tdesign-icons-react tuikit-atomicx-react @tencentcloud/uikit-base-component-react axios livekit-manager-customization
```

---

## Quick Start

### 1. Configure the SDK

Create a `live-manager.ts` entry file:

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-react';
import axios from 'axios';

const config = configureLiveManager({
  SDKAppID: 1400000001,
  serverUrl: 'http://localhost:9000/api',
  language: 'zh-CN',
});

export default config;
```

### 2. Mount a Module

```tsx
import { createRoot } from 'react-dom/client';
import { mountLiveManager } from 'tuikit-live-manager-sdk-react';

const container = document.getElementById('app');

// Mount the live monitoring module
const instance = await mountLiveManager({
  container: container!,
  module: 'live-monitor',
  framework: 'react',
  runtime: {
    apiBaseUrl: 'http://localhost:9000/api',
    language: 'zh-CN',
  },
});

// Unmount when done
// instance.unmount();
```

### 3. Direct Component Usage

```tsx
import { LiveMonitor, LiveList, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>
      <LiveList />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
```

---

## Core APIs

### `configureLiveManager(config)`

Configure SDK global parameters:

```ts
interface LiveManagerConfig {
  SDKAppID: number;                     // TRTC SDKAppID
  secretKey?: string;                   // TRTC SecretKey
  serverUrl: string;                    // API server base URL
  language?: 'zh-CN' | 'en-US';         // UI language
  authToken?: string;                   // Auth token
  getAuthToken?: () => string | Promise<string>;
  debug?: boolean;                      // Enable debug mode
  onUnauthorized?: () => void;          // 401 callback
}
```

### `mountLiveManager(options)`

Mount a specific module into a container:

```ts
interface LiveManagerMountOptions {
  container: HTMLElement | string;
  module: 'room-list' | 'live-monitor' | 'room-control' | 'gift-config' | 'risk-control';
  framework?: 'react';
  runtime?: {
    apiBaseUrl?: string;
    authToken?: string;
    getAuthToken?: () => string | Promise<string>;
    language?: 'zh-CN' | 'en-US';
    routerMode?: 'hash' | 'memory';
    popupContainer?: HTMLElement | string;
  };
  extension?: unknown;
  props?: Record<string, unknown>;
}

interface MountedLiveManager {
  unmount: () => void;
  update?: (props: Record<string, unknown>) => void;
}
```

### `preloadLiveManager(options?)`

Preload module code for faster subsequent mounting:

```ts
await preloadLiveManager({
  framework: 'react',
  module: 'live-monitor',
});
```

---

## Page Components

| Component | Module Key | Description |
|-----------|------------|-------------|
| `LiveMonitor` | `live-monitor` | Multi-screen live monitoring, low-latency playback |
| `LiveList` | `room-list` | Room list, create/edit/close rooms |
| `LiveControl` | `room-control` | Room details, data statistics, user management |
| `GiftConfig` | `gift-config` | Gift CRUD, category management |
| `GiftCategory` | `gift-config` | Gift category management |

> Use `import { LiveList } from 'tuikit-live-manager-sdk-react/views/LiveList'` for lazy-loading.

---

## Customization

### Branding & Menu Configuration

Create a `customer.config.ts`:

```ts
import { defineCustomerExtension } from 'tuikit-live-manager-sdk-react';

export default defineCustomerExtension({
  version: '1',
  brand: {
    app: {
      title: 'My Live Manager',
      logo: '/assets/my-logo.png',
    },
  },
  menus: {
    liveMonitor: { enabled: true, label: 'Live Monitor' },
    roomList: { enabled: true, label: 'Room Management' },
    giftConfig: { enabled: true, label: 'Gift Configuration' },
  },
});
```

### Component Slots

Inject custom React components at key page positions:

| Slot Key | Props | Description |
|----------|-------|-------------|
| `liveList.tableExtraColumns` | `{ live: LiveInfo }` | Extra table column |
| `liveList.rowActions` | `{ live: LiveInfo }` | Row action button |
| `liveMonitor.userActionExtraItems` | `{ live: LiveInfo }` | Extra user action |
| `liveControl.customControlPanel` | `{ liveInfo, stats }` | Custom control panel |
| `giftConfig.giftTableExtraColumns` | `{ gift }` | Extra gift table column |
| `giftConfig.giftRowActions` | `{ gift }` | Gift row action button |
| `layout.headerRight` | — | Header right area |
| `layout.sidebarBottom` | — | Sidebar bottom area |

```ts
export default defineCustomerExtension({
  version: '1',
  components: {
    layout: {
      headerRight: () => <span>v2.0</span>,
    },
    liveList: {
      tableExtraColumns: ({ live }) => <span>{live.customInfo?.tag}</span>,
      rowActions: ({ live }) => (
        <button onClick={() => navigator.clipboard.writeText(`/room/${live.liveId}`)}>
          Copy Link
        </button>
      ),
    },
  },
});
```

---

## Related Documentation

- [TUILiveKit Manager — Full Documentation](https://github.com/Tencent-RTC/TUILiveKit_Manager)
- [Getting Started (Web React)](https://cloud.tencent.com/document/product/647/123049)
- [Activate TUILiveKit Services](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit Admin Account Management](https://cloud.tencent.com/document/product/647/117216)
