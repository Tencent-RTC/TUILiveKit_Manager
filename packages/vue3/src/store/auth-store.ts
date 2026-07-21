/**
 * Vue 业务 App 侧的 AuthStoreAdapter
 *
 * 把 SDK 的 auth state 桥接到 Vue 的 reactive 系统，
 * 让组件可以通过 useAuthStore() 响应式订阅登录态。
 */
import { reactive, readonly } from 'vue';
import {
  applyPatch,
  getDefaultAuthState,
  setAuthStoreAdapter,
  type AuthState,
  type AuthStoreAdapter,
} from 'tuikit-live-manager-sdk-vue';

const state = reactive<AuthState>({
  ...getDefaultAuthState(),
});

function cloneState(src: AuthState): AuthState {
  return {
    ...src,
    credentials: src.credentials ? { ...src.credentials } : null,
  };
}

function assignState(next: AuthState): void {
  Object.assign(state, next, {
    credentials: next.credentials ? { ...next.credentials } : null,
  });
}

export function useAuthStore() {
  return readonly(state);
}

export const vueAuthStoreAdapter: AuthStoreAdapter = {
  getState: () => cloneState(state),
  setState: (patch) => {
    assignState(applyPatch(state as AuthState, patch));
  },
  reset: () => {
    assignState(getDefaultAuthState());
  },
};

setAuthStoreAdapter(vueAuthStoreAdapter);
