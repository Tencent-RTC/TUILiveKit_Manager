import type { ComponentType, LazyExoticComponent } from 'react';
import { defineCustomerExtension } from 'tuikit-live-manager-sdk-react';

export type ReactRouteComponent = ComponentType<Record<string, never>> | LazyExoticComponent<ComponentType<any>>;

const customerExtension = defineCustomerExtension<ReactRouteComponent>({
  version: '1',
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

export default customerExtension;
