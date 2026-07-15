import { useRef as H, useState as v, useEffect as U, useCallback as n } from "react";
import { H as D, p as K, t as O, d as P } from "./main-layout.DQ5q1GCZ.js";
import { useUIKit as j } from "@tencentcloud/uikit-base-component-react";
import { g as q, c as B, x as F, z as J } from "./layout.C3iw4hOH.js";
import { MessagePlugin as S } from "tdesign-react";
let i = null, y = 0, I = null;
const A = /* @__PURE__ */ new Set();
let g = { giftList: [], giftCategoryList: [] };
function Q() {
  if (!i) {
    i = new D({});
    const { state$: r, destroy$: t } = i.observeState(), a = K(
      r,
      O(t),
      P((o) => {
        g = o, A.forEach((c) => c());
      })
    );
    I = () => a.dispose?.(), y = 0;
  }
  return i;
}
function Z() {
  const r = H(Q());
  y++;
  const t = r.current, [a, o] = v(g.giftList), [c, G] = v(
    g.giftCategoryList
  );
  U(() => {
    const e = () => {
      o(g.giftList), G(g.giftCategoryList);
    };
    return A.add(e), () => {
      A.delete(e);
    };
  }, []), U(() => () => {
    y = Math.max(0, y - 1), y === 0 && i && (i.destroy(), i = null, I?.(), I = null, A.clear(), g = { giftList: [], giftCategoryList: [], loading: {}, error: null });
  }, []);
  const d = n(
    async (e) => t.fetchGiftList(e),
    [t]
  ), L = n(
    async (e) => t.createGift(e),
    [t]
  ), E = n(
    async (e) => t.updateGift(e),
    [t]
  ), w = n(
    async (e) => t.deleteGift(e),
    [t]
  ), f = n(
    async (e) => t.createGiftCategory(e),
    [t]
  ), u = n(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), C = n(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), M = n(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), h = n(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), R = n(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), s = n(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), p = n(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), m = n(
    async (e, l) => t.getGiftCategoryLanguage(e, l),
    [t]
  ), b = n(
    async (e, l, N, z) => t.setGiftCategoryLanguage(e, l, N, z),
    [t]
  ), $ = n(
    async (e, l) => t.deleteGiftCategoryLanguage(e, l),
    [t]
  );
  return {
    giftList: a,
    giftCategoryList: c,
    fetchGiftList: d,
    createGift: L,
    updateGift: E,
    deleteGift: w,
    createGiftCategory: f,
    updateGiftCategory: u,
    deleteGiftCategory: C,
    addGiftCategoryRelations: M,
    deleteGiftCategoryRelations: h,
    getGiftLanguage: R,
    setGiftLanguage: s,
    deleteGiftLanguage: p,
    getGiftCategoryLanguage: m,
    setGiftCategoryLanguage: b,
    deleteGiftCategoryLanguage: $
  };
}
const x = {
  success: (r) => S.success(r),
  error: (r) => S.error(r),
  warning: (r) => S.warning(r),
  info: (r) => S.info(r)
}, k = q("AsyncAction");
function _(r) {
  const { action: t, operationName: a, toast: o, onSuccess: c, onError: G, errorMessage: d, showError: L } = r, { t: E } = j(), { opSuccess: w } = B(E), [f, u] = v(!1), C = H(t);
  C.current = t;
  const M = n(async (...R) => {
    if (f) {
      k.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    u(!0);
    try {
      const s = await C.current(...R);
      return c?.(s), o ? x.success(w(o.action, o.entity)) : a && x.success(a), s;
    } catch (s) {
      const p = s instanceof Error ? s : new Error(String(s)), { code: m, info: b } = F(s), $ = d || a || "";
      if (k.error("useAsyncAction", `${$} (ErrorCode: ${m || "N/A"})`, s), a && L !== !1) {
        const e = J(m, b, p.message || String(s));
        x.error(`【${a}】失败：${e}`);
      }
      G?.(p);
      return;
    } finally {
      u(!1);
    }
  }, [f, d, c, G, a, L]), h = n(() => {
    u(!1);
  }, []);
  return { loading: f, execute: M, reset: h };
}
export {
  x as M,
  _ as a,
  Z as u
};
