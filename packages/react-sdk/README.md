# tuikit-live-manager-sdk-react

> **中文文档**: [中文版](./README_zh.md)

React core component package for TUILiveKit Manager — helps you build a live streaming operations management dashboard quickly.

This package is delivered as a **closed-source distribution** — compiled output and type declarations (`.js` / `.d.ts` / `.css`) only, no core business source code.

## Architecture Overview

TUILiveKit Manager React SDK offers two development modes for different scenarios:
<div style="background:#f7f8fa;border-radius:10px;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:680px;margin:16px 0;">
  <div style="text-align:center;font-size:15px;font-weight:700;color:#0052d9;padding:10px 0;border-bottom:2px solid #e0e6ed;margin-bottom:16px;">Your Dashboard</div>
  <div style="display:flex;gap:12px;">
    <!-- With UI -->
    <div style="flex:1;background:#fff;border-radius:8px;border:2px solid #b3d4ff;overflow:hidden;">
      <div style="background:#edf4ff;padding:8px 12px;font-size:13px;font-weight:600;color:#0052d9;">With UI (Pre-built Pages)</div>
      <div style="padding:10px 14px;font-size:13px;color:#333;line-height:2;">
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">LiveMonitor</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">LiveList</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">LiveControl</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">GiftConfig</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">GiftCategory</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">RiskControl</div>
      </div>
    </div>
    <!-- Without UI -->
    <div style="flex:1;background:#fff;border-radius:8px;border:2px solid #ccd5e0;overflow:hidden;">
      <div style="background:#f0f2f5;padding:8px 12px;font-size:13px;font-weight:600;color:#555;">Without UI (Custom UI)</div>
      <div style="padding:10px 14px;font-size:13px;color:#333;line-height:2;">
        <div style="background:#f0f2f5;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #029cd4;">useLiveMonitorState</div>
        <div style="background:#f0f2f5;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #029cd4;">useGiftState</div>
        <div style="background:#f0f2f5;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #029cd4;">useRiskControlState</div>
        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed #d0d5dd;font-size:12px;color:#888;text-align:center;">+ tuikit-core utilities<br>(auth / API / tools)</div>
      </div>
    </div>
  </div>
  <!-- Dependency layer: tuikit-atomicx -->
  <div style="margin-top:12px;background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;margin-right:8px;">Video &amp; IM Rendering:</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">LiveView</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">BarrageList</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">useLiveListState</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">useLoginState</span>
    <span style="color:#888;margin-left:4px;">… from tuikit-atomicx-react</span>
  </div>
  <!-- Shared layer -->
  <div style="margin-top:8px;background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;margin-right:8px;">Config &amp; Customize:</span>
    <span style="background:#f3f3f3;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;">configureLiveManager</span>
  </div>
</div>

| Mode | Description | When to Use |
|------|-------------|-------------|
| **With UI** | Use pre-built page components, out of the box | Quick integration, standard dashboard |
| **Without UI** | Use three core State Hooks + tuikit-atomicx-react + tuikit-core to build your own UI | Deep customization, embedding, non-standard UX |

Both modes can be mixed, sharing the same configuration and customization capabilities.

---

## Prerequisites

### Step 1: Activate Service

See [Activate TUILiveKit Services](https://cloud.tencent.com/document/product/647/105439) to obtain SDK access.

### Step 2: Install Dependencies

Install the SDK in your React project. With pnpm, peer dependencies are auto-installed:

```bash
pnpm add tuikit-live-manager-sdk-react
```

---

## With UI: Using Pre-built Components

The fastest way — mount pre-built components and get a complete dashboard in minutes.

### Configure the SDK

Create `live-manager.ts`:

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-react';

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

Use in a React project that already has the SDK as a dependency:

```tsx
import { LiveMonitor, LiveList, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-react';
import { createRoot } from 'react-dom/client';

function App() {
  return <LiveList />;
}

createRoot(document.getElementById('root')!).render(<App />);
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

> Lazy load: `import { LiveList } from 'tuikit-live-manager-sdk-react/views/LiveList'`

---

## Without UI: Using Core State Hooks

When you need full UI control or need to embed management features into an existing system, build with this combination:

```text
Your Custom UI (React Components)
    │
    ├── SDK Three Core Hooks       ← Data & Operations Layer
    │   ├── useLiveMonitorState()   Live monitoring
    │   ├── useGiftState()           Gift management
    │   └── useRiskControlState()    Risk control
    │
    ├── tuikit-atomicx-react      ← Video & IM Rendering Layer
    │   ├── LiveView               Live video rendering
    │   ├── BarrageList / BarrageInput  Barrage display & input
    │   ├── useLiveListState       Join/leave live streams
    │   ├── useLiveAudienceState   Audience list management
    │   ├── useLoginState          Login authentication
    │   └── useLivePlayerState     Player control
    │
    └── tuikit-core utilities     ← Auth, HTTP, RUM, tools
```

> **Key difference**: SDK's State Hooks handle **dashboard data operations** (list rooms, configure gifts, moderate content), while `tuikit-atomicx-react` handles **video/audio & IM rendering** (streaming video, barrage messages, audience lists). Complete Without-UI development requires both.

### Architecture

### useLiveMonitorState()

Core Hook for live monitoring. Singleton pattern.

```ts
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-react';

const {
  init,            // Initialize SDK config (baseURL, etc.)
  liveList,        // Live list MonitorLiveInfo[]
  hasMore,         // Whether more pages exist
  currentLive,     // Currently selected live
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

> Call `init({ baseURL })` before other operations. This is a singleton Hook shared across components.

**Example: Custom live list**

```tsx
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-react';
import { useEffect, useState } from 'react';

function CustomLiveList() {
  const { init, liveList, fetchLiveList, createLive, setCurrentLive, fetchLiveDetail } = useLiveMonitorState();
  const [name, setName] = useState('');

  useEffect(() => {
    init({ baseURL: 'http://localhost:9000/api' });
    fetchLiveList();
  }, []);

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={async () => {
        const live = await createLive({ liveName: name, coverUrl: '' });
        setCurrentLive(live.liveId);
        await fetchLiveDetail();
      }}>Create Live</button>
      <ul>
        {liveList.map(l => (
          <li key={l.liveId} onClick={() => setCurrentLive(l.liveId)}>
            {l.liveName} — {l.onlineCount} viewers
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### useGiftState()

Core Hook for gift management. Singleton pattern.

```ts
import { useGiftState } from 'tuikit-live-manager-sdk-react';

const {
  giftList,                  // Gift list GiftItem[]
  giftCategoryList,          // Category list GiftCategoryItem[]
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

Core Hook for risk control. **Requires `liveId`.**

```ts
import { useRiskControlState } from 'tuikit-live-manager-sdk-react';

const {
  // Moderation
  textModerationAvailable,        // Whether moderation API is available
  moderationMode,                 // cloud | custom
  textModerationList,             // Text moderation items
  textModerationTotal,            // Total item count
  textModerationLoading,          // Loading state
  fetchTextModerationList,        // Fetch moderation list
  approveTextModerationItems,     // Batch approve items
  bypassCorrectionKeyword,        // Bypass correction keyword (cloud only)

  // Member management
  muteMember,                     // Mute a member
  unmuteMember,                   // Unmute a member
  banMember,                      // Ban a member
  unbanMember,                    // Unban a member
  mutedList,                      // Muted members list
  bannedList,                     // Banned members list

  // Chat management
  sendViolationWarning,           // Send violation warning
  sendAdminMessage,               // Send admin message
} = useRiskControlState({ liveId: 'xxx', pageSize: 20 });
```

### tuikit-atomicx-react Rendering

Complete Without-UI development requires `tuikit-atomicx-react` for video/audio & IM rendering:

| Category | Import | Description |
|------|------|------|
| Video Playback | `LiveView` (from `tuikit-atomicx-react`) | Live video rendering component |
| Barrage | `BarrageList`, `BarrageInput` (from `tuikit-atomicx-react`) | Barrage message display & input |
| Audience | `LiveAudienceList`, `useLiveAudienceState` (from `tuikit-atomicx-react`) | Audience list component & state |
| Live Ops | `useLiveListState`, `LiveListEvent` (from `tuikit-atomicx-react`) | Join/leave live, event subscriptions |
| Auth | `useLoginState` (from `tuikit-atomicx-react`) | Login & user info |
| Player | `useLivePlayerState` (from `tuikit-atomicx-react`) | Control bar visibility, player settings |

### tuikit-core Utilities

Available for use alongside the three core Hooks:

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
import type { CustomerExtensionV1 } from 'tuikit-live-manager-sdk-react';

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
- [Getting Started (Web React)](https://cloud.tencent.com/document/product/647/123049)
- [Activate TUILiveKit Services](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit Admin Account Management](https://cloud.tencent.com/document/product/647/117216)
