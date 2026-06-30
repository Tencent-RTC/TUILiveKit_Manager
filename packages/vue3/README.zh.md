# TUILiveKit Manager - Vue3 前端

Vue 3 + TypeScript + Vite 实现的直播管理前端项目。

> 项目整体介绍、服务端配置、生产部署等请参阅 [根目录 README](../../README_zh.md)。

## 技术栈

- **框架**：Vue 3.5 + TypeScript 5.7
- **构建工具**：Vite 6
- **UI 组件库**：TDesign Vue Next 1.13
- **状态管理**：Vue Reactive Store
- **路由**：Vue Router 4
- **样式**：Tailwind CSS 3.4 + SASS
- **HTTP 请求**：Axios
- **图标**：Lucide Vue Next + TDesign Icons
- **TRTC SDK**：tuikit-atomicx-vue3
- **国际化**：i18n（中文 / English）

## 项目结构

```
packages/vue3/
├── src/
│   ├── api/            # API 接口封装
│   ├── assets/         # 静态资源
│   ├── components/     # 通用组件
│   │   ├── AnchorAvatar.vue       # 主播头像
│   │   ├── CreateRoomModal.vue    # 创建房间弹窗
│   │   ├── EditRoomModal.vue      # 编辑房间弹窗
│   │   ├── Header.vue             # 页头
│   │   ├── ImageUpload.vue        # 图片上传
│   │   ├── LiveList.vue           # 直播列表
│   │   ├── MessageList.vue        # 消息列表
│   │   └── Pagination.vue         # 分页
│   ├── i18n/           # 国际化（zh-CN / en-US）
│   ├── layouts/        # 页面布局
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   ├── types/          # TypeScript 类型定义
│   ├── utils/          # 工具函数
│   ├── views/          # 页面视图
│   │   ├── live-monitor.vue       # 直播监控
│   │   ├── room-list.vue          # 直播间管理
│   │   ├── room-control.vue       # 直播间详情/控制台
│   │   ├── gift-config.vue        # 礼物配置
│   │   ├── gift-category.vue      # 礼物分类
│   │   ├── login.vue              # 登录页
│   │   └── config-required.vue    # 配置缺失提示
│   ├── App.vue
│   └── main.ts
├── .env                # 环境变量（开发）
├── .env.production     # 环境变量（生产）
├── vite.config.ts      # Vite 配置
├── package.json
└── tsconfig.json
```

## 开发

### 启动开发服务

在**项目根目录**下运行：

```bash
pnpm run dev:vue
```

默认端口为 `2027`（即访问 `http://localhost:2027/vue/`）。

### 环境变量

编辑 `.env` 文件配置 API 地址：

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

> 端口号需与服务端启动端口一致。

### 构建生产版本

```bash
pnpm run build:vue
```

构建产物输出到 `packages/vue3/dist/` 目录。

## 共享模块

本项目直接复用 SDK 内部共享资源，不再依赖独立 `@live-manager/common` 包。历史上由 common 提供的 Vue3 和 React 前端共用能力包括：

- API 客户端与接口封装
- TRTC 推拉流客户端
- 类型定义
- 通用工具函数
- 公共样式

## 自定义开发

页面和组件均在 `src/` 目录下，可根据需要修改样式、布局和功能。主要自定义点：

- **主题**：通过 TDesign 和 Tailwind 配置调整主题色
- **页面布局**：修改 `layouts/` 和各 `views/` 文件
- **组件**：在 `components/` 中新增或修改通用组件
- **国际化**：在 `i18n/zh-CN/` 和 `i18n/en-US/` 中添加翻译
