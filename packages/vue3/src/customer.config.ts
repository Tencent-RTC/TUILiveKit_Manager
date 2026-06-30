import type { Component } from 'vue';
import { defineCustomerExtension } from 'tuikit-live-manager-sdk-vue';

export type VueRouteComponent = Component;

const customerExtension = defineCustomerExtension<VueRouteComponent>({
  version: '1',
  brand: {
    appName: import.meta.env.VITE_APP_NAME,
    pageTitle: import.meta.env.VITE_PAGE_TITLE,
    logoUrl: import.meta.env.VITE_LOGO_URL,
    primaryColor: import.meta.env.VITE_PRIMARY_COLOR,
    defaultAvatarUrl: import.meta.env.VITE_DEFAULT_AVATAR_URL,
    defaultCoverUrl: import.meta.env.VITE_DEFAULT_COVER_URL,
  },
  // menus: {} 会导致菜单为空，使用默认菜单
  menus: {
    hidden: [],
    rename: {},
    order: [],
    extraMenus: [],
  },
  routes: {},
  components: {},
  features: {},
  runtime: {
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
  },
});

export default customerExtension;
