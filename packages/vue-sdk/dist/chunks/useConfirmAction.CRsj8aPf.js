import { useState as S, useCallback as n } from "react";
import { u as d } from "./useAsyncAction.Ce9HnFRp.js";
function y(s) {
  const { confirm: o, onSuccess: e, ...i } = s, [u, t] = S(null), l = n((r) => {
    t(null), e?.(r);
  }, [e]), a = n((r) => {
    t(null);
  }, []), { loading: m, execute: c, reset: f } = d({
    ...i,
    onSuccess: l,
    onError: a
  }), C = n(() => {
    t({
      visible: !0,
      title: o.title,
      content: o.content,
      confirmText: o.confirmText
    });
  }, [o]), x = n(() => {
    t(null);
  }, []), p = n(async () => c(), [c]);
  return {
    loading: m,
    confirmDialog: u,
    requestConfirm: C,
    cancelConfirm: x,
    executeWithConfirm: p,
    reset: f
  };
}
export {
  y as u
};
