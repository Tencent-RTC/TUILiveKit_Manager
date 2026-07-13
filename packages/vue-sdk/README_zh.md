# tuikit-live-manager-sdk-vue

本文档将帮助您使用 **TUILiveKit Manager Vue SDK** 快速构建直播运营管理后台。

本包以**闭源交付**模式发布，仅包含编译后的产物和类型声明（`.js` / `.d.ts` / `.css`），不包含核心业务源码。

## 架构概览

TUILiveKit Manager Vue SDK 提供了两种开发模式，适用于不同场景：
<div style="background:#f7f8fa;border-radius:10px;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:680px;margin:16px 0;">
  <div style="text-align:center;font-size:15px;font-weight:700;color:#0052d9;padding:10px 0;border-bottom:2px solid #e0e6ed;margin-bottom:16px;">您的管理后台</div>
  <div style="display:flex;gap:12px;">
    <!-- 含 UI 列 -->
    <div style="flex:1;background:#fff;border-radius:8px;border:2px solid #b3d4ff;overflow:hidden;">
      <div style="background:#edf4ff;padding:8px 12px;font-size:13px;font-weight:600;color:#0052d9;">含 UI 开发（预制页面）</div>
      <div style="padding:10px 14px;font-size:13px;color:#333;line-height:2;">
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">LiveMonitor</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">LiveList</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">LiveControl</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">GiftConfig</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">GiftCategory</div>
        <div style="background:#f0f6ff;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #0052d9;">RiskControl</div>
      </div>
    </div>
    <!-- 无 UI 列 -->
    <div style="flex:1;background:#fff;border-radius:8px;border:2px solid #ccd5e0;overflow:hidden;">
      <div style="background:#f0f2f5;padding:8px 12px;font-size:13px;font-weight:600;color:#555;">无 UI 开发（自定义 UI）</div>
      <div style="padding:10px 14px;font-size:13px;color:#333;line-height:2;">
        <div style="background:#f0f2f5;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #029cd4;">useLiveMonitorState</div>
        <div style="background:#f0f2f5;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #029cd4;">useGiftState</div>
        <div style="background:#f0f2f5;border-radius:4px;padding:6px 10px;margin:4px 0;border-left:3px solid #029cd4;">useRiskControlState</div>
      </div>
    </div>
  </div>
  <!-- 依赖层：tuikit-atomicx -->
  <div style="margin-top:12px;background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;margin-right:8px;">音视频 &amp; IM 渲染：</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">LiveView</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">BarrageList</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">useLiveListState</span>
    <span style="background:#e8f5e9;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;color:#2e7d32;">useLoginState</span>
    <span style="color:#888;margin-left:4px;">… 等 tuikit-atomicx-vue3 能力</span>
  </div>
  <!-- 共享层 -->
  <div style="margin-top:8px;background:#fff;border-radius:8px;border:1px solid #e0e6ed;padding:12px 16px;text-align:center;font-size:12px;color:#666;">
    <span style="font-weight:600;color:#333;margin-right:8px;">配置 &amp; 定制：</span>
    <span style="background:#f3f3f3;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;">configureLiveManager</span>
    <span style="background:#f3f3f3;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;">mountLiveManager</span>
    <span style="background:#f3f3f3;padding:4px 10px;border-radius:4px;margin:0 4px;font-weight:500;">defineCustomerExtension</span>
  </div>
</div>
| 模式 | 说明 | 适用场景 |
|------|------|---------|
| **含 UI 开发** | 直接使用预置页面组件，开箱即用 | 快速集成、标准化运营后台 |
| **无 UI 开发** | 使用三大核心 Composables + tuikit-atomicx-vue3 + tuikit-core 自行搭建 UI | 深度定制、嵌入现有系统、非标准交互 |

两种模式可以混合使用，共享同一套配置和定制能力。

---

## 准备工作

### 步骤1：开通服务

请参见 [开通 TUILiveKit 服务](https://cloud.tencent.com/document/product/647/105439) 获取 SDK 使用权限。

### 步骤2：安装依赖

在您的 Vue 3 项目中安装本 SDK 及其必需的 Peer 依赖：

| 依赖 | 最低版本 | 说明 |
|------|---------|------|
| `vue` | >=3.0.0 | Vue 3 框架 |
| `vue-router` | >=4.0.0 | Vue 路由 |
| `tdesign-vue-next` | >=1.13.1 | 腾讯 TDesign 组件库 |
| `tdesign-icons-vue-next` | >=0.3.6 | TDesign 图标库 |
| `tuikit-atomicx-vue3` | >=6.2.5 | TUILiveKit 基础组件 |
| `@tencentcloud/uikit-base-component-vue3` | >=1.4.0 | 基础 UI 组件 |
| `axios` | >=1.0.0 | HTTP 请求库 |

```bash
pnpm add tuikit-live-manager-sdk-vue
pnpm add vue vue-router tdesign-vue-next tdesign-icons-vue-next tuikit-atomicx-vue3 @tencentcloud/uikit-base-component-vue3 axios
```

---

## 含 UI 开发：使用预置页面组件

最快的方式是直接挂载预置组件，几分钟即可拥有完整的管理后台。

### 配置 SDK

创建 `live-manager.ts` 配置入口：

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-vue';

const config = configureLiveManager({
  version: '1',
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

### 方式一：mountLiveManager 独立挂载

适用于将管理后台作为独立模块嵌入到已有页面：

```ts
import { mountLiveManager } from 'tuikit-live-manager-sdk-vue';

// 挂载直播监控模块
const instance = await mountLiveManager({
  container: '#app',
  module: 'live-monitor',
  framework: 'vue',
  runtime: {
    apiBaseUrl: 'http://localhost:9000/api',
    language: 'zh-CN',
  },
});

// 卸载：instance.unmount();
```

### 方式二：直接使用组件

适用于已将 SDK 作为依赖引入的 Vue 项目：

```vue
<script setup>
import { LiveList } from 'tuikit-live-manager-sdk-vue';
</script>

<template>
  <LiveList />
</template>
```

全局注册：

```ts
import { createApp } from 'vue';
import { LiveMonitor, LiveList, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-vue';

const app = createApp(App);
app.component('LiveMonitor', LiveMonitor);
app.component('LiveList', LiveList);
app.mount('#app');
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

> 按需懒加载：`import { LiveList } from 'tuikit-live-manager-sdk-vue/views/LiveList'`

---

## 无 UI 开发：使用核心 Composables

当您需要完全自定义 UI、或需要将管理功能嵌入到现有系统中时，使用以下组合自行搭建：

```text
您的自定义 UI（Vue 组件）
    │
    ├── SDK 三大核心 Composables  ← 数据与操作层
    │   ├── useLiveMonitorState()   直播监控
    │   ├── useGiftState()           礼物管理
    │   └── useRiskControlState()    风控管理
    │
    ├── tuikit-atomicx-vue3       ← 音视频 & IM 渲染层
    │   ├── LiveView               直播视频画面渲染
    │   ├── BarrageList / BarrageInput  弹幕列表与输入
    │   ├── useLiveListState       加入/离开直播
    │   ├── useLiveAudienceState   观众列表
    │   ├── useLoginState          登录认证
    │   └── useLivePlayerState     播放器控制
    │
    └── tuikit-core 底层能力      ← 认证、HTTP、RUM、工具等
```

> **关键区别**：SDK 的 Composables 负责**管理后台数据操作**（列出直播间、配置礼物、审核内容等），`tuikit-atomicx-vue3` 负责**音视频与 IM 渲染**（推拉流画面、弹幕消息、观众列表等）。完整的无 UI 开发需要同时使用两者。

> **Vue 提示**：所有状态返回值均为 `Ref` 类型，可直接在模板中使用。

### useLiveMonitorState()

直播监控核心 Composable，单例模式。管理直播间列表、创建/编辑/结束直播、推拉流操作。

```ts
import { useLiveMonitorState } from 'tuikit-live-manager-sdk-vue';

const {
  init,            // 初始化 SDK 配置（baseURL 等）
  liveList,        // 直播列表 Ref<MonitorLiveInfo[]>
  hasMore,         // 是否还有更多数据 Ref<boolean>
  currentLive,     // 当前选中的直播 Ref<MonitorLiveInfo | null>
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

**示例：自定义直播间列表**

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
    <button @click="handleCreate">创建直播间</button>
    <ul>
      <li v-for="live in liveList" :key="live.liveId" @click="setCurrentLive(live.liveId)">
        {{ live.liveName }} — {{ live.onlineCount }} 人
      </li>
    </ul>
  </div>
</template>
```

### useGiftState()

礼物管理核心 Composable，单例模式。管理礼物的 CRUD 操作、分类管理和多语言配置。

```ts
import { useGiftState } from 'tuikit-live-manager-sdk-vue';

const {
  giftList,                  // 礼物列表 Ref<GiftItem[]>
  giftCategoryList,          // 分类列表 Ref<GiftCategoryItem[]>
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

风控管理核心 Composable。管理内容审核、成员管控和聊天管理。**必须传入 `liveId`。**

```ts
import { useRiskControlState } from 'tuikit-live-manager-sdk-vue';

const {
  // 审核管理
  textModerationAvailable,        // 审核能力是否可用 Ref<boolean>
  moderationMode,                 // 审核模式：cloud | custom Ref<ModerationMode>
  textModerationList,             // 文本审核记录列表 Ref<TextModerationItem[]>
  textModerationTotal,            // 审核记录总数 Ref<number>
  textModerationLoading,          // 审核列表加载状态 Ref<boolean>
  fetchTextModerationList,        // 获取审核列表（支持分页参数）
  approveTextModerationItems,     // 批量放行审核记录
  bypassCorrectionKeyword,        // 绕过纠错关键词（仅 cloud 模式）

  // 成员管理
  muteMember,                     // 禁言成员
  unmuteMember,                   // 取消禁言
  banMember,                      // 封禁成员
  unbanMember,                    // 取消封禁
  mutedList,                      // 禁言列表 Ref<MutedMember[]>
  bannedList,                     // 封禁列表 Ref<BannedMember[]>
  memberLoading,                  // 成员操作加载状态 Ref<boolean>
  memberError,                    // 成员操作错误 Ref<Error | null>

  // 聊天管理
  sendViolationWarning,           // 发送违规警告
  sendAdminMessage,               // 发送管理员消息
} = useRiskControlState({ liveId: 'xxx', pageSize: 20 });
```

**示例：自定义风控面板**

```vue
<script setup>
import { useRiskControlState } from 'tuikit-live-manager-sdk-vue';
import { onMounted } from 'vue';

const props = defineProps<{ liveId: string }>();

const { textModerationList, fetchTextModerationList, approveTextModerationItems, muteMember } =
  useRiskControlState({ liveId: props.liveId, pageSize: 20 });

onMounted(() => { fetchTextModerationList(); });
</script>

<template>
  <div v-for="item in textModerationList" :key="item.id">
    <span>{{ item.content }}</span>
    <button @click="approveTextModerationItems({ ids: [item.id] })">放行</button>
    <button @click="muteMember({ memberAccounts: [item.userId], muteTime: 300 })">禁言5分钟</button>
  </div>
</template>
```

### tuikit-atomicx-vue3 渲染能力

完整的无 UI 开发需要配合 `tuikit-atomicx-vue3` 提供的音视频与 IM 渲染能力：

| 类别 | 导入 | 说明 |
|------|------|------|
| 视频播放 | `LiveView` (from `tuikit-atomicx-vue3`) | 直播视频画面渲染组件 |
| 弹幕消息 | `BarrageList`, `BarrageInput` (from `tuikit-atomicx-vue3`) | 弹幕列表展示与输入框 |
| 观众列表 | `LiveAudienceList`, `useLiveAudienceState` (from `tuikit-atomicx-vue3`) | 观众列表组件与状态 |
| 直播操作 | `useLiveListState`, `LiveListEvent` (from `tuikit-atomicx-vue3`) | 加入/离开直播、事件订阅 |
| 登录认证 | `useLoginState` (from `tuikit-atomicx-vue3`) | 登录及用户信息获取 |
| 播放器控制 | `useLivePlayerState` (from `tuikit-atomicx-vue3`) | 控制栏显隐、播放器设置 |

### tuikit-core 底层能力

SDK 还导出了 tuikit-core 中的底层能力供无 UI 开发使用：

| 类别 | 导出 |
|------|------|
| 认证 | `login`, `isLoggedIn`, `getCurrentUserId`, `getUserProfilePortrait`, `batchGetUserProfilePortrait` |
| HTTP | `initHttpClient`, `request`, `get`, `post`, `put`, `del` |
| 工具 | `createLogger`, `safelyParse`, `copyText`, `parseTextWithEmoji`, 图片上传工具等 |
| 错误 | `LiveManagerError`, `getErrorMessage`, `isClientError`, `isServerError` |
| RUM | `reportEvent`, `reportTime`, `reportBusinessOp`, `reportPageView` |

---

## 定制开发

### 品牌与菜单配置

两种开发模式都支持通过 `defineCustomerExtension` 定制品牌和菜单：

```ts
import { defineCustomerExtension } from 'tuikit-live-manager-sdk-vue';

export default defineCustomerExtension({
  version: '1',
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
});
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
export default defineCustomerExtension({
  version: '1',
  components: {
    layout: { headerRight: { render: () => 'v2.0' } },
    liveList: {
      tableExtraColumns: { render: ({ live }) => live.customInfo?.tag },
    },
  },
});
```

---

## API 参考

### `configureLiveManager(extension?)`

```ts
interface CustomerExtensionV1<TComponent = unknown> {
  version: '1';
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

### `mountLiveManager(options)`

```ts
interface LiveManagerMountOptions {
  container: HTMLElement | string;
  module: 'room-list' | 'live-monitor' | 'room-control' | 'gift-config' | 'risk-control';
  framework?: 'react' | 'vue';
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
```

### `preloadLiveManager(options?)`

```ts
await preloadLiveManager({ framework: 'vue', module: 'live-monitor' });
```

---

## 常见问题

### 含 UI 和无 UI 开发可以混用吗？

可以。例如在自定义页面中使用 `useLiveMonitorState()` 管理数据，同时在另一个页面中直接挂载 `<GiftConfig />` 组件。两种模式共享同一个 SDK 实例。

### 如何自定义页面标题和 Logo？

在 `configureLiveManager` 或 `defineCustomerExtension` 的 `brand.app` 中设置 `title` 和 `logo`。

### 支持哪些语言？

支持 `zh-CN`（简体中文）和 `en-US`（英文），通过 `runtime.language` 设置。

### 如何在已有 Vue Router 项目中集成？

直接以组件方式使用（如 `<LiveList />`），SDK 内部的路由独立运行，不会与宿主项目冲突。

## 相关文档

- [TUILiveKit Manager — 完整文档](https://github.com/Tencent-RTC/TUILiveKit_Manager)
- [准备工作（Web Vue3）](https://cloud.tencent.com/document/product/647/123049)
- [开通 TUILiveKit 服务](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit 管理员账号管理](https://cloud.tencent.com/document/product/647/117216)
