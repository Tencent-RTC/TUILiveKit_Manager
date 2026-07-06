import { useState as x, useCallback as o } from "react";
import { u as p } from "./useAsyncAction.BiKq09Fb.js";
function y(s) {
  const { confirm: n, onSuccess: t, ...i } = s, [u, e] = x(null), l = o((c) => {
    e(null), t?.(c);
  }, [t]), a = o((c) => {
    e(null);
  }, []), { loading: m, execute: r, reset: f } = p({
    ...i,
    onSuccess: l,
    onError: a
  }), C = o(() => {
    e({
      visible: !0,
      title: n.title,
      content: n.content,
      confirmText: n.confirmText,
      danger: n.danger
    });
  }, [n]), d = o(() => {
    e(null);
  }, []), g = o(async () => r(), [r]);
  return {
    loading: m,
    confirmDialog: u,
    requestConfirm: C,
    cancelConfirm: d,
    executeWithConfirm: g,
    reset: f
  };
}
export {
  y as u
};
