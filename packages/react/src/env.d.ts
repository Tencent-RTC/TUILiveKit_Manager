/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SDK_APP_ID: string;
  readonly VITE_SECRET_KEY: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_DEFAULT_COVER_URL?: string;
  readonly VITE_DEFAULT_AVATAR_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  const __MOCK_MODE__: boolean;
  var process: {
    env: {
      NODE_ENV: string;
      [key: string]: string | undefined;
    };
  };
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
    }
  }
}

export {};
