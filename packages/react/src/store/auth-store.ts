import { create } from 'zustand';
import {
  getDefaultAuthState,
  setAuthStoreAdapter,
  type AuthState,
  type AuthStoreAdapter,
} from 'tuikit-live-manager-sdk-react';

type ReactAuthStore = AuthState & {
  setAuthState: (patch: Partial<AuthState>) => void;
  resetAuthState: () => void;
};

const initialState = getDefaultAuthState();

export const useAuthStore = create<ReactAuthStore>((set) => ({
  ...initialState,
  setAuthState: (patch) => set(patch),
  resetAuthState: () => set({ ...initialState }),
}));

function getSnapshot(): AuthState {
  const { setAuthState, resetAuthState, ...state } = useAuthStore.getState();
  return {
    ...state,
    credentials: state.credentials ? { ...state.credentials } : null,
  };
}

export const reactAuthStoreAdapter: AuthStoreAdapter = {
  getState: getSnapshot,
  setState: (patch) => {
    // 同步 credentials 到顶层字段（与 SDK applyPatch 行为一致）
    // 仅在 credentials 存在时才同步，避免 undefined 覆盖已有值
    const creds = patch.credentials;
    useAuthStore.getState().setAuthState(
      creds
        ? {
            ...patch,
            sdkAppId: creds.sdkAppId ?? 0,
            userId: creds.userId ?? '',
            userSig: creds.userSig ?? '',
          }
        : patch,
    );
  },
  reset: () => {
    useAuthStore.getState().resetAuthState();
  },
};

setAuthStoreAdapter(reactAuthStoreAdapter);
