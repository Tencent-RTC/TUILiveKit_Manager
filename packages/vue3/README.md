# TUILiveKit Manager - Vue3 Frontend

Vue 3 + TypeScript + Vite frontend for the live streaming management system.

> For project overview, server configuration, and production deployment, see the [root README](../../README.md).

## Tech Stack

- **Framework**: Vue 3.5 + TypeScript 5.7
- **Build Tool**: Vite 6
- **UI Library**: TDesign Vue Next 1.13
- **State Management**: Vue Reactive Store
- **Routing**: Vue Router 4
- **Styling**: Tailwind CSS 3.4 + SASS
- **HTTP Client**: Axios
- **Icons**: Lucide Vue Next + TDesign Icons
- **TRTC SDK**: tuikit-atomicx-vue3
- **i18n**: Built-in i18n (Chinese / English)

## Project Structure

```
packages/vue3/
├── src/
│   ├── api/            # API layer
│   ├── assets/         # Static assets
│   ├── components/     # Shared components
│   │   ├── AnchorAvatar.vue       # Anchor avatar
│   │   ├── CreateRoomModal.vue    # Create room modal
│   │   ├── EditRoomModal.vue      # Edit room modal
│   │   ├── Header.vue             # Page header
│   │   ├── ImageUpload.vue        # Image upload
│   │   ├── LiveList.vue           # Live list
│   │   ├── MessageList.vue        # Message list
│   │   └── Pagination.vue         # Pagination
│   ├── i18n/           # Internationalization (zh-CN / en-US)
│   ├── layouts/        # Page layouts
│   ├── router/         # Route definitions
│   ├── store/          # State management
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── views/          # Page views
│   │   ├── live-monitor.vue       # Live monitoring
│   │   ├── room-list.vue          # Room management
│   │   ├── room-control.vue       # Room detail / control panel
│   │   ├── gift-config.vue        # Gift configuration
│   │   ├── gift-category.vue      # Gift categories
│   │   ├── login.vue              # Login page
│   │   └── config-required.vue    # Missing config prompt
│   ├── App.vue
│   └── main.ts
├── .env                # Environment variables (development)
├── .env.production     # Environment variables (production)
├── vite.config.ts      # Vite configuration
├── package.json
└── tsconfig.json
```

## Development

### Start Dev Server

From the **project root**:

```bash
pnpm run dev:vue
```

Default port is `2027` (access at `http://localhost:2027/vue/`).

### Environment Variables

Edit `.env` to configure the API base URL:

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

> The port must match the server port.

### Build for Production

```bash
pnpm run build:vue
```

Build output goes to `packages/vue3/dist/`.

## Shared Module

This package now reuses the SDK internal shared resources and no longer depends on a standalone `@live-manager/common` package. Historically, the shared frontend code included:

- API client & request wrappers
- TRTC streaming client
- Type definitions
- Utility functions
- Common styles

## Customization

All pages and components are in the `src/` directory. Key areas for customization:

- **Theming**: Adjust via TDesign and Tailwind CSS configuration
- **Layouts**: Modify files in `layouts/` and `views/`
- **Components**: Add or update shared components in `components/`
- **i18n**: Add translations in `i18n/` locale files
