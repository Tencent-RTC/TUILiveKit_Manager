import { configureLiveManager, initHttpClient } from 'tuikit-live-manager-sdk-react';
import type { ComponentType, LazyExoticComponent } from 'react';
import axios from 'axios';

export const liveManagerConfig = configureLiveManager<
  ComponentType<Record<string, never>> | LazyExoticComponent<ComponentType<any>>
>({
  brand: {
    appName: import.meta.env.VITE_APP_NAME,
    pageTitle: import.meta.env.VITE_PAGE_TITLE,
    logoUrl: import.meta.env.VITE_LOGO_URL,
    primaryColor: import.meta.env.VITE_PRIMARY_COLOR,
    defaultAvatarUrl: import.meta.env.VITE_DEFAULT_AVATAR_URL,
    defaultCoverUrl: import.meta.env.VITE_DEFAULT_COVER_URL,
  },
  menus: {},
  routes: {},
  components: {},
  features: {},
  runtime: {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  },
});

// 初始化 HTTP 客户端（真实环境）
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
});

initHttpClient(axiosInstance);
