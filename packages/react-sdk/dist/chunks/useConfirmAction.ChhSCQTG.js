import { useState as g, useEffect as b, useCallback as o } from "react";
import { p as A, t as y, a as h } from "./main-layout.BKiYd7Lp.js";
import "./layout.Cg64usQg.js";
import "./logger.pnqt7v8K.js";
import { C as v } from "./chat-state.BQk4Xriv.js";
import { u as x } from "./useAsyncAction.BmoBWVx2.js";
let u = null;
function l() {
  return u || (u = new v({})), u;
}
function q() {
  const [r, t] = g(
    () => l().getSnapshot()
  );
  b(() => {
    const e = l();
    e.addActive();
    const { state$: s, destroy$: n } = e.observeState(), c = A(
      s,
      y(n),
      h((i) => {
        t(i);
      })
    );
    return () => {
      c.dispose?.(), e.removeActive();
    };
  }, []);
  const a = o(
    (e, s) => l().sendAdminMessage(e, s),
    []
  );
  return {
    sending: r.sending,
    error: r.error,
    sendAdminMessage: a
  };
}
function E(r) {
  const { confirm: t, onSuccess: a, ...e } = r, [s, n] = g(null), c = o((f) => {
    n(null), a?.(f);
  }, [a]), { loading: i, execute: m, reset: d } = x({
    ...e,
    onSuccess: c
  }), p = o(() => {
    n({
      visible: !0,
      title: t.title,
      content: t.content,
      confirmText: t.confirmText,
      danger: t.danger
    });
  }, [t]), C = o(() => {
    n(null);
  }, []), S = o(async () => {
    try {
      return await m();
    } finally {
      n(null);
    }
  }, [m]);
  return {
    loading: i,
    confirmDialog: s,
    requestConfirm: p,
    cancelConfirm: C,
    executeWithConfirm: S,
    reset: d
  };
}
export {
  E as a,
  q as u
};
