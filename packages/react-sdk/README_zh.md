## 概述

本文档将帮助您使用 **TUILiveKit Manager React SDK** 快速构建直播运营管理后台。

本包以**闭源交付**模式发布，仅包含编译后的产物和类型声明（`.js` / `.d.ts` / `.css`），不包含核心业务源码。

## 架构概览

TUILiveKit Manager React SDK 提供了两种开发模式，适用于不同场景：
<div style="background:#f7f8fa;border-radius:10px;padding:20px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:680px;margin:16px 0;">
  <div style="text-align:center;font-size:15px;font-weight:700;color:#0052d9;padding:10px 0;border-bottom:2px solid #e0e6ed;margin-bottom:14px;">您的管理后台</div>
  <div style="background:#fff3e0;border-radius:8px;border:2px solid #ffcc02;padding:12px 16px;margin-bottom:4px;">
    <div style="font-size:13px;font-weight:600;color:#e65100;margin-bottom:4px;">Demo 工程（可直接运行）</div>
    <div style="font-size:12px;color:#888;">开箱即用的完整管理后台，基于下方组件和 Hooks 构建</div>
  </div>
  <div style="text-align:center;font-size:14px;color:#bbb;line-height:1.2;margin:0;">↓ 基于 ↓</div>
  <div style="background:#edf4ff;border-radius:8px;border:2px solid #b3d4ff;padding:12px 16px;margin-bottom:4px;">
    <div style="font-size:13px;font-weight:600;color:#0052d9;margin-bottom:8px;">含 UI 开发（预制页面）</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveMonitor</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveList</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">LiveControl</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">GiftConfig</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">GiftCategory</span>
      <span style="background:#f0f6ff;padding:4px 10px;border-radius:4px;font-size:12px;">RiskControl</span>
    </div>
  </div>
  <div style="text-align:center;font-size:14px;color:#bbb;line-height:1.2;margin:0;">↓ 内部调用 ↓</div>
  <div style="display:flex;gap:8px;margin-bottom:4px;">
    <div style="flex:1;background:#f0f2f5;border-radius:8px;border:2px solid #ccd5e0;padding:12px 16px;">
      <div style="font-size:13px;font-weight:600;color:#555;margin-bottom:8px;">无 UI 开发（核心 Hooks）</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useLiveMonitorState</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useGiftState</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useRiskControlState</span>
      </div>
    </div>
    <div style="flex:1;background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;">
      <div style="font-size:13px;font-weight:600;color:#333;margin-bottom:8px;">音视频 &amp; IM 渲染</div>
      <div style="display:flex;flex-wrap:wrap;gap:4px;">
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">LiveView</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">BarrageList</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useLiveListState</span>
        <span style="background:#e8f5e9;padding:3px 8px;border-radius:4px;font-size:11px;color:#2e7d32;">useLoginState</span>
      </div>
      <div style="font-size:11px;color:#888;margin-top:6px;">… 等 tuikit-atomicx-react 能力</div>
    </div>
  </div>
  <div style="background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:10px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;">配置 &amp; 定制：</span>
    <span style="background:#f3f3f3;padding:3px 8px;border-radius:4px;font-size:11px;margin:0 2px;">configureLiveManager</span>
  </div>
</div>

| 模式 | 说明 | 适用场景 |
|------|------|---------|
| **含 UI 开发** | 直接使用预置页面组件，开箱即用 | 快速集成、标准化运营后台 |
| **无 UI 开发** | 使用三大核心 State Hooks + tuikit-atomicx-react + tuikit-core 自行搭建 UI | 深度定制、嵌入现有系统、非标准交互 |

两种模式可以混合使用，共享同一套配置和定制能力。

## 准备工作

### 步骤1：开通服务

请参见 [开通 TUILiveKit 服务](https://cloud.tencent.com/document/product/647/105439) 获取 SDK 使用权限。

### 步骤2：安装依赖

在您的 React 项目中安装本 SDK。使用 pnpm 安装时，Peer 依赖将自动一并安装：

```bash
pnpm add tuikit-live-manager-sdk-react
```

## 含 UI 开发：使用预置页面组件

最快的方式是直接挂载预置组件，几分钟即可拥有完整的管理后台。

### 配置 SDK

创建 `live-manager.ts` 配置入口：

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-react';

const config = configureLiveManager({
  brand: {
    app: {
      title: '直播间管理系统',
    },
  },
  menus: {
    liveMonitor: { enabled: true },
    roomList: { enabled: true },
    giftConfig: { enabled: true },
  },
});

export default config;
```

### 方式一：直接使用组件

适用于已将 SDK 作为依赖引入的 React 项目：

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

### 预置页面组件

| 组件 | 模块标识 | 功能说明 |
|------|---------|---------|
| `LiveMonitor` | `live-monitor` | 多路同屏监播，低延迟播放 |
| `LiveList` | `room-list` | 直播间列表，支持创建/编辑/关闭 |
| `LiveControl` | `room-control` | 直播间详情、数据统计、用户管理 |
| `GiftConfig` | `gift-config` | 礼物增删改、分类管理 |
| `GiftCategory` | `gift-config` | 礼物分类管理 |
| `RiskControl` | `risk-control` | 内容审核与风险管控 |

> 按需懒加载：`import { LiveList } from 'tuikit-live-manager-sdk-react/views/LiveList'`

## 无 UI 开发：使用核心 State Hooks

当您需要完全自定义 UI、或需要将管理功能嵌入到现有系统中时，使用以下组合自行搭建：

```text
您的自定义 UI（React 组件）
    │
    ├── SDK 三大核心 Hooks        ← 数据与操作层
    │   ├── useLiveMonitorState()   直播监控
    │   ├── useGiftState()           礼物管理
    │   └── useRiskControlState()    风控管理
    │
    ├── tuikit-atomicx-react      ← 音视频 & IM 渲染层
    │   ├── LiveView               直播视频画面渲染
    │   ├── BarrageList / BarrageInput  弹幕列表与输入
    │   ├── useLiveListState       加入/离开直播
    │   ├── useLiveAudienceState   观众列表
    │   ├── useLoginState          登录认证
    │   └── useLivePlayerState     播放器控制
    │
    └── tuikit-core 底层能力      ← 认证、HTTP、RUM、工具等
```

> **关键区别**：SDK 的 State Hooks 负责**管理后台数据操作**（列出直播间、配置礼物、审核内容等），`tuikit-atomicx-react` 负责**音视频与 IM 渲染**（推拉流画面、弹幕消息、观众列表等）。完整的无 UI 开发需要同时使用两者。

### useLiveMonitorState()

直播监控核心 Hook，单例模式。管理直播间列表、创建/编辑/结束直播、推拉流操作。

```ts
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-react';

const {
  init,            // 初始化 SDK 配置（baseURL 等）
  liveList,        // 直播列表 MonitorLiveInfo[]
  hasMore,         // 是否还有更多数据
  currentLive,     // 当前选中的直播
  setCurrentLive,  // 设置当前直播间（传入 liveId）
  fetchLiveList,   // 获取直播列表（支持分页）
  createLive,      // 创建直播 → Promise<MonitorLiveInfo>
  updateLive,      // 更新当前直播间信息
  endLive,         // 结束直播（支持指定 liveId 或使用 currentLive）
  fetchLiveDetail,  // 获取直播间详情（含推流信息）
  fetchLiveStats,   // 获取直播间统计
  startPlay,        // 开始播放（liveId + containerId）
  stopPlay,         // 停止播放
} = useLiveMonitorState();
```

> **提示**：调用 `init({ baseURL })` 后再进行其他操作。这是一个单例 Hook，多组件共享同一实例。

**示例：自定义直播间列表**

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
      }}>创建直播间</button>
      <ul>
        {liveList.map(live => (
          <li key={live.liveId} onClick={() => setCurrentLive(live.liveId)}>
            {live.liveName} — {live.onlineCount} 人
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### useGiftState()

礼物管理核心 Hook，单例模式。管理礼物的 CRUD 操作、分类管理和多语言配置。

```ts
import { useGiftState } from 'tuikit-live-manager-sdk-react';

const {
  giftList,                  // 礼物列表 GiftItem[]
  giftCategoryList,          // 分类列表 GiftCategoryItem[]
  fetchGiftList,             // 获取礼物列表（同时返回分类）
  createGift,                // 创建礼物 → Promise<string>
  updateGift,                // 更新礼物
  deleteGift,                // 删除礼物（传入 giftId）
  createGiftCategory,        // 创建礼物分类
  updateGiftCategory,        // 更新礼物分类
  deleteGiftCategory,        // 删除礼物分类
  addGiftCategoryRelations,  // 添加礼物-分类关联
  deleteGiftCategoryRelations, // 移除礼物-分类关联
  fetchGiftLanguages,        // 获取多语言信息
  setGiftLanguages,          // 设置多语言信息
} = useGiftState();
```

### useRiskControlState(options)

风控管理核心 Hook。管理内容审核、成员管控和聊天管理。**必须传入 `liveId`。**

```ts
import { useRiskControlState } from 'tuikit-live-manager-sdk-react';

const {
  // 审核管理
  textModerationAvailable,        // 审核能力是否可用
  moderationMode,                 // 审核模式：cloud | custom
  textModerationList,             // 文本审核记录列表
  textModerationTotal,            // 审核记录总数
  textModerationLoading,          // 审核列表加载状态
  fetchTextModerationList,        // 获取审核列表（支持分页参数）
  approveTextModerationItems,     // 批量放行审核记录
  bypassCorrectionKeyword,        // 绕过纠错关键词（仅 cloud 模式）

  // 成员管理
  muteMember,                     // 禁言成员
  unmuteMember,                   // 取消禁言
  banMember,                      // 封禁成员
  unbanMember,                    // 取消封禁
  mutedList,                      // 禁言列表
  bannedList,                     // 封禁列表

  // 聊天管理
  sendViolationWarning,           // 发送违规警告
  sendAdminMessage,               // 发送管理员消息
} = useRiskControlState({ liveId: 'xxx', pageSize: 20 });
```

**示例：自定义风控面板**

```tsx
import { useRiskControlState } from 'tuikit-live-manager-sdk-react';
import { useEffect } from 'react';

function CustomRiskPanel({ liveId }: { liveId: string }) {
  const { textModerationList, fetchTextModerationList, approveTextModerationItems, muteMember } =
    useRiskControlState({ liveId, pageSize: 20 });

  useEffect(() => { fetchTextModerationList(); }, []);

  return (
    <div>
      {textModerationList.map(item => (
        <div key={item.id}>
          <span>{item.content}</span>
          <button onClick={() => approveTextModerationItems({ ids: [item.id] })}>放行</button>
          <button onClick={() => muteMember({ memberAccounts: [item.userId], muteTime: 300 })}>禁言5分钟</button>
        </div>
      ))}
    </div>
  );
}
```

### tuikit-atomicx-react 渲染能力

完整的无 UI 开发需要配合 `tuikit-atomicx-react` 提供的音视频与 IM 渲染能力：

| 类别 | 导入 | 说明 |
|------|------|------|
| 视频播放 | `LiveView` (from `tuikit-atomicx-react`) | 直播视频画面渲染组件 |
| 弹幕消息 | `BarrageList`, `BarrageInput` (from `tuikit-atomicx-react`) | 弹幕列表展示与输入框 |
| 观众列表 | `LiveAudienceList`, `useLiveAudienceState` (from `tuikit-atomicx-react`) | 观众列表组件与状态 |
| 直播操作 | `useLiveListState`, `LiveListEvent` (from `tuikit-atomicx-react`) | 加入/离开直播、事件订阅 |
| 登录认证 | `useLoginState` (from `tuikit-atomicx-react`) | 登录及用户信息获取 |
| 播放器控制 | `useLivePlayerState` (from `tuikit-atomicx-react`) | 控制栏显隐、播放器设置 |

## 定制开发

### 品牌与菜单配置

两种开发模式都支持通过 `CustomerExtensionV1` 配置定制品牌和菜单：

```ts
import type { CustomerExtensionV1 } from 'tuikit-live-manager-sdk-react';

export default {
  brand: {
    app: {
      title: '我的直播间管理系统',
      logo: '/assets/my-logo.png',
    },
  },
  menus: {
    liveMonitor: { enabled: true, label: '直播监控' },
    roomList: { enabled: true, label: '直播间管理' },
    giftConfig: { enabled: true, label: '礼物配置' },
  },
} satisfies CustomerExtensionV1;
```

### 组件插槽（含 UI 模式）

在关键位置注入自定义组件，不修改 SDK 源码即可扩展预置页面：

| 插槽标识 | Props | 说明 |
|---------|-------|------|
| `liveList.tableExtraColumns` | `{ live: MonitorLiveInfo }` | 直播间表格额外列 |
| `liveList.rowActions` | `{ live: MonitorLiveInfo }` | 直播间行操作按钮 |
| `liveMonitor.userActionExtraItems` | `{ live: MonitorLiveInfo }` | 用户操作额外项 |
| `liveControl.customControlPanel` | `{ liveInfo, stats }` | 自定义控制面板 |
| `giftConfig.giftTableExtraColumns` | `{ gift }` | 礼物表格额外列 |
| `giftConfig.giftRowActions` | `{ gift }` | 礼物行操作按钮 |
| `layout.headerRight` | — | 头部右侧区域 |
| `layout.sidebarBottom` | — | 侧边栏底部区域 |

```ts
export default {
    components: {
    layout: { headerRight: () => <span>v2.0</span> },
    liveList: {
      tableExtraColumns: ({ live }) => <span>{live.customInfo?.tag}</span>,
    },
  },
} satisfies CustomerExtensionV1;
```

## API 参考

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

## 常见问题

### 含 UI 和无 UI 开发可以混用吗？

可以。例如在自定义页面中使用 `useLiveMonitorState()` 管理数据，同时在另一个页面中直接挂载 `<GiftConfig />` 组件。两种模式共享同一个 SDK 实例。

### 如何自定义页面标题和 Logo？

在 `configureLiveManager` 的 `brand.app` 中设置 `title` 和 `logo`。

### 支持哪些语言？

支持 `zh-CN`（简体中文）和 `en-US`（英文），通过 `runtime.language` 设置。

### 如何在已有 React Router 项目中集成？

直接以组件方式使用（如 `<LiveList />`），SDK 内部的路由独立运行，不会与宿主项目冲突。

## 相关文档

- [TUILiveKit Manager — 完整文档](https://github.com/Tencent-RTC/TUILiveKit_Manager)
- [准备工作（Web）](https://cloud.tencent.com/document/product/647/123049)
- [开通 TUILiveKit 服务](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit 管理员账号管理](https://cloud.tencent.com/document/product/647/117216)
