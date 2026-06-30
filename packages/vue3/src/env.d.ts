/// <reference types="vite/client" />

declare var process: {
  env: {
    NODE_ENV: string;
    [key: string]: string | undefined;
  };
};

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module 'tuikit-live-manager-sdk-vue/views/*' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, unknown>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_PAGE_TITLE: string;
  readonly VITE_LOGO_URL: string;
  readonly VITE_PRIMARY_COLOR: string;
  readonly VITE_DEFAULT_AVATAR_URL: string;
  readonly VITE_DEFAULT_COVER_URL: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_PUBLIC_PATH: string;
  readonly VITE_SDK_APP_ID: string;
  readonly VITE_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
