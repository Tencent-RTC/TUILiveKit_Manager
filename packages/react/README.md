# TUILiveKit Manager - React Frontend

React 18 + TypeScript + Vite frontend for the live streaming management system.

> For project overview, server configuration, and production deployment, see the [root README](../../README.md).

## Tech Stack

- **Framework**: React 18 + TypeScript 5.7
- **Build Tool**: Vite 6
- **UI Library**: TDesign React 1.12
- **State Management**: Zustand 5
- **Routing**: React Router DOM 7
- **Styling**: SASS + LESS
- **HTTP Client**: Axios
- **Icons**: Lucide React + TDesign Icons
- **TRTC SDK**: tuikit-atomicx-react
- **i18n**: Built-in i18n (Chinese / English)

## Project Structure

```
packages/react/
├── src/
│   ├── api/            # API layer
│   ├── assets/         # Static assets
│   ├── components/     # Shared components
│   │   ├── AnchorAvatar.tsx       # Anchor avatar
│   │   ├── CreateRoomModal.tsx    # Create room modal
│   │   ├── EditRoomModal.tsx      # Edit room modal
│   │   ├── ImageUpload.tsx        # Image upload
│   │   ├── MessageList.tsx        # Message list
│   │   ├── FormField.tsx          # Form field wrapper
│   │   └── Toast.tsx              # Toast notifications
│   ├── config/         # App configuration
│   ├── contexts/       # React Contexts
│   ├── hooks/          # Custom hooks
│   ├── i18n/           # Internationalization (zh-CN / en-US)
│   ├── layouts/        # Page layouts
│   ├── router/         # Route definitions & guards
│   ├── store/          # Zustand stores
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── views/          # Page views
│   │   ├── LiveMonitor.tsx        # Live monitoring
│   │   ├── LiveList.tsx           # Room management
│   │   ├── LiveControl.tsx        # Room detail / control panel
│   │   ├── GiftConfig.tsx         # Gift configuration
│   │   ├── GiftCategory.tsx       # Gift categories
│   │   ├── Login.tsx              # Login page
│   │   └── ConfigRequiredPage.tsx # Missing config prompt
│   ├── App.tsx
│   └── main.tsx
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
pnpm run dev:react
```

Default port is `2028` (access at `http://localhost:2028/react/`).

### Environment Variables

Edit `.env` to configure the API base URL:

```bash
VITE_API_BASE_URL=http://localhost:9000/api
```

> The port must match the server port.

### Build for Production

```bash
pnpm run build:react
```

Build output goes to `packages/react/dist/`.

## Shared Module

This package now reuses the SDK internal shared resources and no longer depends on a standalone `@live-manager/common` package. Historically, the shared frontend code included:

- API client & request wrappers
- TRTC streaming client
- Type definitions
- Utility functions
- Common styles

## Customization

All pages and components are in the `src/` directory. Key areas for customization:

- **Theming**: Adjust via TDesign theme tokens
- **Layouts**: Modify files in `layouts/` and `views/`
- **Components**: Add or update shared components in `components/`
- **i18n**: Add translations in `i18n/` locale files
