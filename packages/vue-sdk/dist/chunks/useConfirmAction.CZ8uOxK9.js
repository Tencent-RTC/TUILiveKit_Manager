import { useState as x, useCallback as e } from "react";
import { u as y } from "./useAsyncAction.DlQYyzbJ.js";
function S(r) {
  const { confirm: n, onSuccess: o, ...i } = r, [l, t] = x(null), u = e((s) => {
    t(null), o?.(s);
  }, [o]), { loading: a, execute: c, reset: f } = y({
    ...i,
    onSuccess: u
  }), m = e(() => {
    t({
      visible: !0,
      title: n.title,
      content: n.content,
      confirmText: n.confirmText,
      danger: n.danger
    });
  }, [n]), C = e(() => {
    t(null);
  }, []), g = e(async () => {
    try {
      return await c();
    } finally {
      t(null);
    }
  }, [c]);
  return {
    loading: a,
    confirmDialog: l,
    requestConfirm: m,
    cancelConfirm: C,
    executeWithConfirm: g,
    reset: f
  };
}
export {
  S as u
};
