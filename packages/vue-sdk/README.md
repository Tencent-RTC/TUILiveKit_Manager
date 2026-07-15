# tuikit-live-manager-sdk-vue

> **中文文档**: [中文版](./README_zh.md)

Vue 3 core component package for TUILiveKit Manager — helps you build a live streaming operations management dashboard quickly.

This package is delivered as a **closed-source distribution** — compiled output and type declarations (`.js` / `.d.ts` / `.css`) only, no core business source code.

## Architecture Overview

TUILiveKit Manager Vue SDK offers two development modes and a ready-to-run demo project for different scenarios:

<div style="background:#f7f8fa;border-radius:10px;padding:20px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:680px;margin:16px 0;">
  <div style="text-align:center;font-size:15px;font-weight:700;color:#0052d9;padding:10px 0;border-bottom:2px solid #e0e6ed;margin-bottom:14px;">Your Dashboard</div>
  <!-- Demo project -->
  <div style="background:#fff3e0;border-radius:8px;border:2px solid #ffcc02;padding:12px 16px;margin-bottom:4px;">
    <div style="font-size:13px;font-weight:600;color:#e65100;margin-bottom:4px;">Demo Project (Ready to Run)</div>
    <div style="font-size:12px;color:#888;">Out-of-the-box complete dashboard, built on the components &amp; Hooks below</div>
  </div>
  <div style="text-align:center;font-size:14px;color:#bbb;line-height:1.2;margin:0;">↓ Built on ↓</div>
  <!-- With UI + Without UI two columns -->
  <div style="display:flex;gap:8px;margin-bottom:4px;">
    <div style="flex:2;background:#edf4ff;border-radius:8px;border:2px solid #b3d4ff;padding:12px 16px;">
      <div style="font-size:13px;font-weight:600;color:#0052d9;margin-bottom:8px;">With UI (Pre-built Pages)</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;">
        <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveMonitor</span>
        <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveList</span>
        <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveControl</span>
        <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">GiftConfig</span>
        <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">GiftCategory</span>
      </div>
    </div>
    <div style="flex:1;background:#fff;border-radius:8px;border:2px solid #ccd5e0;padding:12px 16px;">
      <div style="font-size:13px;font-weight:600;color:#555;margin-bottom:8px;">Without UI (Custom UI)</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        <span style="background:#f0f2f5;padding:4px 8px;border-radius:4px;font-size:11px;">useLiveMonitorState</span>
        <span style="background:#f0f2f5;padding:4px 8px;border-radius:4px;font-size:11px;">useGiftState</span>
        <span style="background:#f0f2f5;padding:4px 8px;border-radius:4px;font-size:11px;">useRiskControlState</span>
      </div>
    </div>
  </div>
  <!-- Underlying layer -->
  <div style="background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;margin-right:8px;">Underlying:</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">tuikit-atomicx-vue3</span>
    <span style="color:#888;margin:0 4px;">(LiveView / BarrageList / useLiveListState …)</span>
    <span style="background:#f3f3f3;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;">tuikit-core</span>
    <span style="color:#888;margin:0 4px;">(configureLiveManager)</span>
  </div>
</div>

| Mode | Description | When to Use |
|------|-------------|-------------|
| **With UI** | Use pre-built page components, out of the box | Quick integration, standard dashboard |
| **Without UI** | Use three core Composables + tuikit-atomicx-vue3 + tuikit-core to build your own UI | Deep customization, embedding, non-standard UX |

Both modes can be mixed, sharing the same configuration and customization capabilities.

---

## Prerequisites

### Step 1: Activate Service

See [Activate TUILiveKit Services](https://cloud.tencent.com/document/product/647/105439) to obtain SDK access.

### Step 2: Install Dependencies

Install the SDK in your Vue 3 project. With pnpm, peer dependencies are auto-installed:

```bash
pnpm add tuikit-live-manager-sdk-vue
```

---

## With UI: Using Pre-built Components

The fastest way — mount pre-built components and get a complete dashboard in minutes.

### Configure the SDK

Create `live-manager.ts`:

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-vue';

const config = configureLiveManager({
  brand: { app: { title: 'Live Manager' } },
  menus: {
    liveMonitor: { enabled: true },
    roomList: { enabled: true },
    giftConfig: { enabled: true },
  },
});

export default config;
```

### Option A: Direct Component Usage

Use in a Vue project that already has the SDK as a dependency:

```vue
<script setup>
import { LiveList } from 'tuikit-live-manager-sdk-vue';
</script>

<template>
  <LiveList />
</template>
```

Global registration:

```ts
import { createApp } from 'vue';
import { LiveMonitor, LiveList, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-vue';

const app = createApp(App);
app.component('LiveMonitor', LiveMonitor);
app.component('LiveList', LiveList);
app.mount('#app');
```

### Pre-built Page Components

| Component | Module Key | Description |
|-----------|------------|-------------|
| `LiveMonitor` | `live-monitor` | Multi-screen live monitoring, low-latency playback |
| `LiveList` | `room-list` | Room list, create/edit/close rooms |
| `LiveControl` | `room-control` | Room details, statistics, user management |
| `GiftConfig` | `gift-config` | Gift CRUD, category management |
| `GiftCategory` | `gift-config` | Gift category management |
| `RiskControl` | `risk-control` | Content moderation and risk management |

> Lazy load: `import { LiveList } from 'tuikit-live-manager-sdk-vue/views/LiveList'`

### Preset Page Configuration Examples

The following examples demonstrate how to build a complete dashboard with Vue Router and all preset pages:

**1. Project Structure**

```text
src/
  live-manager.ts       # SDK configuration entry
  router.ts             # Route definitions
  App.vue               # Root component (with layout)
  main.ts               # App entry point
```

**2. SDK Configuration `live-manager.ts`**

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-vue';
import type { CustomerExtensionV1 } from 'tuikit-live-manager-sdk-vue';

const customerExtension = {
  brand: {
    appName: 'My Live Manager',
    pageTitle: 'Live Management',
    logoUrl: '/logo.svg',
  },
  menus: {
    roomList: { enabled: true, label: 'Room Management' },
    liveMonitor: { enabled: true, label: 'Live Monitor' },
    giftConfig: { enabled: true, label: 'Gift Config' },
    riskControl: { enabled: true, label: 'Risk Control' },
  },
} satisfies CustomerExtensionV1;

export default configureLiveManager(customerExtension);
```

**3. Route Definitions `router.ts`**

```ts
import { createRouter, createWebHistory } from 'vue-router';
import { LiveList, LiveMonitor, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-vue';

const routes = [
  { path: '/', redirect: '/live-list' },
  { path: '/live-list', name: 'LiveList', component: LiveList },
  { path: '/live-monitor', name: 'LiveMonitor', component: LiveMonitor },
  {
    path: '/live-control/:liveId',
    name: 'LiveControl',
    component: LiveControl,
    props: true,
  },
  { path: '/gift-config', name: 'GiftConfig', component: GiftConfig },
  { path: '/gift-category', name: 'GiftCategory', component: GiftCategory },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```

**4. Root Component `App.vue`**

```vue
<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div id="live-manager-app">
    <RouterView />
  </div>
</template>

<style>
#live-manager-app {
  width: 100%;
  min-height: 100vh;
  background: var(--bg-color, #f5f6f8);
}
</style>
```

**5. App Entry `main.ts`**

```ts
import { createApp } from 'vue';
import { initHttpClient } from 'tuikit-live-manager-sdk-vue';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import './live-manager'; // Automatically triggers configureLiveManager

// Initialize HTTP client
const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
});
initHttpClient(httpClient);

const app = createApp(App);
app.use(TDesign);
app.use(router);
app.mount('#app');
```

---

## Without UI: Using Core Composables

When you need full UI control or need to embed management features into an existing system, build with this combination:

```text
Your Custom UI (Vue Components)
    │
    ├── SDK Three Core Composables  ← Data & Operations Layer
    │   ├── useLiveMonitorState()   Live monitoring
    │   ├── useGiftState()           Gift management
    │   └── useRiskControlState()    Risk control
    │
    ├── tuikit-atomicx-vue3       ← Video & IM Rendering Layer
    │   ├── LiveView               Live video rendering
    │   ├── BarrageList / BarrageInput  Barrage display & input
    │   ├── useLiveListState       Join/leave live streams
    │   ├── useLiveAudienceState   Audience list management
    │   ├── useLoginState          Login authentication
    │   └── useLivePlayerState     Player control
    │
    └── tuikit-core utilities     ← Auth, HTTP, RUM, tools
```

> **Key difference**: SDK's Composables handle **dashboard data operations** (list rooms, configure gifts, moderate content), while `tuikit-atomicx-vue3` handles **video/audio & IM rendering** (streaming video, barrage messages, audience lists). Complete Without-UI development requires both.

> **Vue Tip**: All state return values are `Ref` types, directly usable in templates.

### useLiveMonitorState()

Core Composable for live monitoring. Singleton pattern.

```ts
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-vue';

const {
  init,            // Initialize SDK config (baseURL, etc.)
  liveList,        // Live list Ref<MonitorLiveInfo[]>
  hasMore,         // Whether more pages exist Ref<boolean>
  currentLive,     // Currently selected live Ref<MonitorLiveInfo | null>
  setCurrentLive,  // Set current live by liveId
  fetchLiveList,   // Fetch live list (with pagination)
  createLive,      // Create a live → Promise<MonitorLiveInfo>
  updateLive,      // Update current live info
  endLive,         // End a live (optional liveId or uses currentLive)
  fetchLiveDetail,  // Fetch live detail (including stream info)
  fetchLiveStats,   // Fetch live statistics
  startPlay,        // Start playback (liveId + containerId)
  stopPlay,         // Stop playback
} = useLiveMonitorState();
```

**Example: Custom live list**

```vue
<script setup>
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-vue';
import { onMounted, ref } from 'vue';

const { init, liveList, fetchLiveList, createLive, setCurrentLive, fetchLiveDetail } = useLiveMonitorState();
const name = ref('');

onMounted(() => {
  init({ baseURL: 'http://localhost:9000/api' });
  fetchLiveList();
});

const handleCreate = async () => {
  const live = await createLive({ liveName: name.value, coverUrl: '' });
  setCurrentLive(live.liveId);
  await fetchLiveDetail();
};
</script>

<template>
  <div>
    <input v-model="name" />
    <button @click="handleCreate">Create Live</button>
    <ul>
      <li v-for="l in liveList" :key="l.liveId" @click="setCurrentLive(l.liveId)">
        {{ l.liveName }} — {{ l.onlineCount }} viewers
      </li>
    </ul>
  </div>
</template>
```

### useGiftState()

Core Composable for gift management. Singleton pattern.

```ts
import { useGiftState } from 'tuikit-live-manager-sdk-vue';

const {
  giftList,                  // Gift list Ref<GiftItem[]>
  giftCategoryList,          // Category list Ref<GiftCategoryItem[]>
  fetchGiftList,             // Fetch gift list (also returns categories)
  createGift,                // Create a gift → Promise<string>
  updateGift,                // Update a gift
  deleteGift,                // Delete a gift (by giftId)
  createGiftCategory,        // Create a gift category
  updateGiftCategory,        // Update a gift category
  deleteGiftCategory,        // Delete a gift category
  addGiftCategoryRelations,  // Add gift-category relations
  deleteGiftCategoryRelations, // Remove gift-category relations
  fetchGiftLanguages,        // Fetch multi-language info
  setGiftLanguages,          // Set multi-language info
} = useGiftState();
```

### useRiskControlState(options)

Core Composable for risk control. **Requires `liveId`.**

```ts
import { useRiskControlState } from 'tuikit-live-manager-sdk-vue';

const {
  // Moderation
  textModerationAvailable,        // Ref<boolean>
  moderationMode,                 // Ref<'cloud' | 'custom'>
  textModerationList,             // Ref<TextModerationItem[]>
  textModerationTotal,            // Ref<number>
  textModerationLoading,          // Ref<boolean>
  fetchTextModerationList,        // Fetch moderation list
  approveTextModerationItems,     // Batch approve items
  bypassCorrectionKeyword,        // Bypass correction (cloud only)

  // Member management
  muteMember,                     // Mute a member
  unmuteMember,                   // Unmute a member
  banMember,                      // Ban a member
  unbanMember,                    // Unban a member
  mutedList,                      // Ref<MutedMember[]>
  bannedList,                     // Ref<BannedMember[]>

  // Chat management
  sendViolationWarning,           // Send violation warning
  sendAdminMessage,               // Send admin message
} = useRiskControlState({ liveId: 'xxx', pageSize: 20 });
```

### tuikit-atomicx-vue3 Rendering

Complete Without-UI development requires `tuikit-atomicx-vue3` for video/audio & IM rendering:

| Category | Import | Description |
|------|------|------|
| Video Playback | `LiveView` (from `tuikit-atomicx-vue3`) | Live video rendering component |
| Barrage | `BarrageList`, `BarrageInput` (from `tuikit-atomicx-vue3`) | Barrage message display & input |
| Audience | `LiveAudienceList`, `useLiveAudienceState` (from `tuikit-atomicx-vue3`) | Audience list component & state |
| Live Ops | `useLiveListState`, `LiveListEvent` (from `tuikit-atomicx-vue3`) | Join/leave live, event subscriptions |
| Auth | `useLoginState` (from `tuikit-atomicx-vue3`) | Login & user info |
| Player | `useLivePlayerState` (from `tuikit-atomicx-vue3`) | Control bar visibility, player settings |

### tuikit-core Utilities

Available for use alongside the three core Composables:

| Category | Exports |
|------|------|
| Auth | `login`, `isLoggedIn`, `getCurrentUserId`, `getUserProfilePortrait`, `batchGetUserProfilePortrait` |
| HTTP | `initHttpClient`, `request`, `get`, `post`, `put`, `del` |
| Tools | `createLogger`, `safelyParse`, `copyText`, `parseTextWithEmoji`, image upload utilities |
| Errors | `LiveManagerError`, `getErrorMessage`, `isClientError`, `isServerError` |
| RUM | `reportEvent`, `reportTime`, `reportBusinessOp`, `reportPageView` |

---

## Customization

### Branding & Menus

Both modes support customization via `CustomerExtensionV1` config:

```ts
import type { CustomerExtensionV1 } from 'tuikit-live-manager-sdk-vue';

export default {
  brand: { app: { title: 'My Live Manager', logo: '/assets/my-logo.png' } },
  menus: {
    liveMonitor: { enabled: true, label: 'Live Monitor' },
    roomList: { enabled: true, label: 'Room Management' },
    giftConfig: { enabled: true, label: 'Gift Configuration' },
  },
} satisfies CustomerExtensionV1;
```

### Component Slots (With-UI Mode)

Inject custom components at key positions in pre-built pages:

| Slot Key | Props | Description |
|----------|-------|-------------|
| `liveList.tableExtraColumns` | `{ live: MonitorLiveInfo }` | Extra table column |
| `liveList.rowActions` | `{ live: MonitorLiveInfo }` | Row action button |
| `liveMonitor.userActionExtraItems` | `{ live: MonitorLiveInfo }` | Extra user action |
| `liveControl.customControlPanel` | `{ liveInfo, stats }` | Custom control panel |
| `giftConfig.giftTableExtraColumns` | `{ gift }` | Extra gift table column |
| `giftConfig.giftRowActions` | `{ gift }` | Gift row action button |
| `layout.headerRight` | — | Header right area |
| `layout.sidebarBottom` | — | Sidebar bottom area |

```ts
export default {
    components: {
    layout: { headerRight: { render: () => 'v2.0' } },
    liveList: {
      tableExtraColumns: { render: ({ live }) => live.customInfo?.tag },
    },
  },
} satisfies CustomerExtensionV1;
```

---

## API Reference

### `configureLiveManager(extension?)`

```ts
interface CustomerExtensionV1<TComponent = unknown> {
  version?: '1';
  brand?: BrandConfig;
  menus?: MenuExtension;
  routes?: RouteExtension<TComponent>;
  components?: ComponentSlots<TComponent>;
  features?: FeatureFlags;
  runtime?: RuntimeConfig;
}

function configureLiveManager<TComponent = unknown>(
  extension?: CustomerExtensionV1<TComponent>,
): LiveManagerAppConfig<TComponent>
```

---

## FAQ

### Can I mix With-UI and Without-UI modes?

Yes. For example, use `useLiveMonitorState()` for a custom page while mounting `<GiftConfig />` directly in another page. Both modes share the same SDK instance.

### How do I customize the title and logo?

Set `title` and `logo` in `configureLiveManager`'s `brand.app`.

### What languages are supported?

`zh-CN` (Simplified Chinese) and `en-US` (English). Set via `runtime.language`.

## Related Documentation

- [TUILiveKit Manager — Full Documentation](https://github.com/Tencent-RTC/TUILiveKit_Manager)
- [Getting Started (Web Vue3)](https://cloud.tencent.com/document/product/647/123049)
- [Activate TUILiveKit Services](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit Admin Account Management](https://cloud.tencent.com/document/product/647/117216)
