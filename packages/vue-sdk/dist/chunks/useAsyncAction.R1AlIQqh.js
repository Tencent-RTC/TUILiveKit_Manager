import { useRef as N, useState as x, useEffect as U, useCallback as s } from "react";
import { J as D, p as H, t as J, e as K } from "./main-layout.OEkSp6vd.js";
import { useUIKit as O } from "@tencentcloud/uikit-base-component-react";
import { h as P, d as j, z as q, B as F } from "./shared-state.Bf8CkvaR.js";
import { MessagePlugin as S } from "tdesign-react";
let c = null, y = 0, I = null;
const A = /* @__PURE__ */ new Set();
let f = { giftList: [], giftCategoryList: [] };
function Q() {
  if (!c) {
    c = new D({});
    const { state$: n, destroy$: t } = c.observeState(), a = H(
      n,
      J(t),
      K((o) => {
        f = o, A.forEach((g) => g());
      })
    );
    I = () => a.dispose?.(), y = 0;
  }
  return c;
}
function Z() {
  const n = N(Q());
  y++;
  const t = n.current, [a, o] = x(f.giftList), [g, G] = x(
    f.giftCategoryList
  );
  U(() => {
    const e = () => {
      o(f.giftList), G(f.giftCategoryList);
    };
    return A.add(e), () => {
      A.delete(e);
    };
  }, []), U(() => () => {
    y = Math.max(0, y - 1), y === 0 && c && (c.destroy(), c = null, I?.(), I = null, A.clear(), f = { giftList: [], giftCategoryList: [], loading: {}, error: null });
  }, []);
  const d = s(
    async (e) => t.fetchGiftList(e),
    [t]
  ), L = s(
    async (e) => t.createGift(e),
    [t]
  ), h = s(
    async (e) => t.updateGift(e),
    [t]
  ), w = s(
    async (e) => t.deleteGift(e),
    [t]
  ), E = s(
    async (e) => t.createGiftCategory(e),
    [t]
  ), u = s(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), l = s(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), C = s(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), M = s(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), R = s(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), b = s(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), r = s(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), p = s(
    async (e, i) => t.getGiftCategoryLanguage(e, i),
    [t]
  ), m = s(
    async (e, i, z, B) => t.setGiftCategoryLanguage(e, i, z, B),
    [t]
  ), $ = s(
    async (e, i) => t.deleteGiftCategoryLanguage(e, i),
    [t]
  );
  return {
    giftList: a,
    giftCategoryList: g,
    fetchGiftList: d,
    createGift: L,
    updateGift: h,
    deleteGift: w,
    createGiftCategory: E,
    updateGiftCategory: u,
    deleteGiftCategory: l,
    addGiftCategoryRelations: C,
    deleteGiftCategoryRelations: M,
    getGiftLanguage: R,
    setGiftLanguage: b,
    deleteGiftLanguage: r,
    getGiftCategoryLanguage: p,
    setGiftCategoryLanguage: m,
    deleteGiftCategoryLanguage: $
  };
}
const v = {
  success: (n) => S.success(n),
  error: (n) => S.error(n),
  warning: (n) => S.warning(n),
  info: (n) => S.info(n)
}, k = P("AsyncAction");
function _(n) {
  const { action: t, operationName: a, toast: o, onSuccess: g, onError: G, errorMessage: d, showError: L, showSuccess: h } = n, { t: w } = O(), { opSuccess: E } = j(w), [u, l] = x(!1), C = N(t);
  C.current = t;
  const M = s(async (...b) => {
    if (u) {
      k.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    l(!0);
    try {
      const r = await C.current(...b);
      return g?.(r), h !== !1 && (o ? v.success(E(o.action, o.entity)) : a && v.success(a)), r;
    } catch (r) {
      const p = r instanceof Error ? r : new Error(String(r)), { code: m, info: $ } = q(r), e = d || a || "";
      if (k.error("useAsyncAction", `${e} (ErrorCode: ${m || "N/A"})`, r), a && L !== !1) {
        const i = F(m, $, p.message || String(r));
        v.error(`【${a}】失败：${i}`);
      }
      G?.(p);
      return;
    } finally {
      l(!1);
    }
  }, [u, d, g, G, a, L]), R = s(() => {
    l(!1);
  }, []);
  return { loading: u, execute: M, reset: R };
}
export {
  v as M,
  _ as a,
  Z as u
};
