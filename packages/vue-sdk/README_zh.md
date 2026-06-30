# tuikit-live-manager-sdk-vue

> **English Documentation**: [English](./README.md)

TUILiveKit Manager 的 Vue 3 核心组件包，提供直播监控、直播间管理、礼物配置、内容审核与风控等完整的直播运营管理能力。

本包以**闭源交付**模式发布——仅包含编译后的产物和类型声明（`.js` / `.d.ts` / `.css`），不包含核心业务源码。

---

## 目录

- [安装](#安装)
- [Peer 依赖](#peer-依赖)
- [快速开始](#快速开始)
- [核心 API](#核心-api)
- [页面组件](#页面组件)
- [定制开发](#定制开发)
- [相关文档](#相关文档)

---

## 安装

```bash
npm install tuikit-live-manager-sdk-vue
# 或
pnpm add tuikit-live-manager-sdk-vue
```

## Peer 依赖

请确保已安装以下 peer 依赖：

```json
{
  "vue": ">=3.0.0",
  "vue-router": ">=4.0.0",
  "tdesign-vue-next": ">=1.13.1",
  "tdesign-icons-vue-next": ">=0.3.6",
  "tuikit-atomicx-vue3": ">=6.2.5",
  "@tencentcloud/uikit-base-component-vue3": ">=1.4.0",
  "livekit-manager-customization": ">=1.0.0",
  "axios": ">=1.0.0"
}
```

```bash
pnpm add vue vue-router tdesign-vue-next tdesign-icons-vue-next tuikit-atomicx-vue3 @tencentcloud/uikit-base-component-vue3 axios livekit-manager-customization
```

---

## 快速开始

### 1. 配置 SDK

创建入口文件 `live-manager.ts`：

```ts
import { configureLiveManager } from 'tuikit-live-manager-sdk-vue';
import axios from 'axios';

const config = configureLiveManager({
  SDKAppID: 1400000001,
  serverUrl: 'http://localhost:9000/api',
  language: 'zh-CN',
});

export default config;
```

### 2. 挂载模块

```ts
import { createApp } from 'vue';
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

// 卸载
// instance.unmount();
```

### 3. 直接使用组件

```vue
<script setup>
import { LiveList } from 'tuikit-live-manager-sdk-vue';
</script>

<template>
  <LiveList />
</template>
```

或全局注册：

```ts
import { createApp } from 'vue';
import { LiveMonitor, LiveList, LiveControl, GiftConfig, GiftCategory } from 'tuikit-live-manager-sdk-vue';

const app = createApp(App);
app.component('LiveMonitor', LiveMonitor);
app.component('LiveList', LiveList);
app.mount('#app');
```

---

## 核心 API

### `configureLiveManager(config)`

配置 SDK 全局参数：

```ts
interface LiveManagerConfig {
  SDKAppID: number;                     // TRTC SDKAppID
  secretKey?: string;                   // TRTC SecretKey
  serverUrl: string;                    // API 服务端地址
  language?: 'zh-CN' | 'en-US';         // 界面语言
  authToken?: string;                   // 认证 Token
  getAuthToken?: () => string | Promise<string>;
  debug?: boolean;                      // 开启调试模式
  onUnauthorized?: () => void;          // 401 回调
}
```

### `mountLiveManager(options)`

将指定模块挂载到容器：

```ts
interface LiveManagerMountOptions {
  container: HTMLElement | string;
  module: 'room-list' | 'live-monitor' | 'room-control' | 'gift-config' | 'risk-control';
  framework?: 'vue';
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

预加载模块代码以加速后续挂载：

```ts
await preloadLiveManager({
  framework: 'vue',
  module: 'live-monitor',
});
```

---

## 页面组件

| 组件 | 模块标识 | 说明 |
|------|---------|------|
| `LiveMonitor` | `live-monitor` | 多路同屏监播、低延迟播放 |
| `LiveList` | `room-list` | 直播间列表、创建/编辑/关闭房间 |
| `LiveControl` | `room-control` | 直播间详情、数据统计、用户管理 |
| `GiftConfig` | `gift-config` | 礼物增删改、分类管理 |
| `GiftCategory` | `gift-config` | 礼物分类管理 |

> 按需懒加载：`import { LiveList } from 'tuikit-live-manager-sdk-vue/views/LiveList'`

---

## 定制开发

### 品牌与菜单配置

创建 `customer.config.ts`：

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

### 组件插槽

在页面关键位置注入自定义组件：

| 插槽标识 | Props | 说明 |
|---------|-------|------|
| `liveList.tableExtraColumns` | `{ live: LiveInfo }` | 表格额外列 |
| `liveList.rowActions` | `{ live: LiveInfo }` | 行操作按钮 |
| `liveMonitor.userActionExtraItems` | `{ live: LiveInfo }` | 用户操作额外项 |
| `liveControl.customControlPanel` | `{ liveInfo, stats }` | 自定义控制面板 |
| `giftConfig.giftTableExtraColumns` | `{ gift }` | 礼物表格额外列 |
| `giftConfig.giftRowActions` | `{ gift }` | 礼物行操作按钮 |
| `layout.headerRight` | — | 头部右侧区域 |
| `layout.sidebarBottom` | — | 侧边栏底部区域 |

```ts
export default defineCustomerExtension({
  version: '1',
  components: {
    layout: {
      headerRight: { render: () => 'v2.0' }, // Vue 渲染函数或组件
    },
    liveList: {
      tableExtraColumns: { render: ({ live }) => live.customInfo?.tag },
    },
  },
});
```

---

## 相关文档

- [TUILiveKit Manager — 完整文档](https://github.com/Tencent-RTC/TUILiveKit_Manager)
- [准备工作（Web Vue3）](https://cloud.tencent.com/document/product/647/123049)
- [开通 TUILiveKit 服务](https://cloud.tencent.com/document/product/647/105439)
- [TUILiveKit 管理员账号管理](https://cloud.tencent.com/document/product/647/117216)
