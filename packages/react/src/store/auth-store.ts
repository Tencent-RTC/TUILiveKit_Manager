import { create } from 'zustand';
import {
  applyPatch,
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
    const prev = getSnapshot();
    const next = applyPatch(prev, patch);
    useAuthStore.getState().setAuthState(next);
  },
  reset: () => {
    useAuthStore.getState().resetAuthState();
  },
};

setAuthStoreAdapter(reactAuthStoreAdapter);
