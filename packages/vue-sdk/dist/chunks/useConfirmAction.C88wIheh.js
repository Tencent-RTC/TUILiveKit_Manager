import { ref as a } from "vue";
import { u as f } from "./useAsyncAction.D1RaZ7Fc.js";
function d(o) {
  const { confirm: e, onSuccess: c, ...r } = o, n = a(null), s = (t) => {
    n.value = null, c?.(t);
  }, { loading: i, execute: u, reset: l } = f({
    ...r,
    onSuccess: s
  });
  return {
    loading: i,
    confirmDialog: n,
    requestConfirm: () => {
      n.value = {
        visible: !0,
        title: e.title,
        content: e.content,
        confirmText: e.confirmText,
        danger: e.danger
      };
    },
    cancelConfirm: () => {
      n.value = null;
    },
    executeWithConfirm: async () => {
      try {
        return await u();
      } finally {
        n.value = null;
      }
    },
    reset: l
  };
}
export {
  d as u
};
