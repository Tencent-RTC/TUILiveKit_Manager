import { useRef as N, useState as x, useEffect as I, useCallback as s } from "react";
import { M as K, p as O, t as P, d as j } from "./main-layout.Dt5HcQRZ.js";
import { useUIKit as q } from "@tencentcloud/uikit-base-component-react";
import { c as z, u as B, ak as F, am as J } from "./shared-state.CsnQDWhV.js";
import { MessagePlugin as S } from "tdesign-react";
let c = null, y = 0, k = null;
const A = /* @__PURE__ */ new Set();
let f = { giftList: [], giftCategoryList: [] };
function Q() {
  if (!c) {
    c = new K({});
    const { state$: n, destroy$: t } = c.observeState(), a = O(
      n,
      P(t),
      j((o) => {
        f = o, A.forEach((g) => g());
      })
    );
    k = () => a.dispose?.(), y = 0;
  }
  return c;
}
function Z() {
  const n = N(Q());
  y++;
  const t = n.current, [a, o] = x(f.giftList), [g, G] = x(
    f.giftCategoryList
  );
  I(() => {
    const e = () => {
      o(f.giftList), G(f.giftCategoryList);
    };
    return A.add(e), () => {
      A.delete(e);
    };
  }, []), I(() => () => {
    y = Math.max(0, y - 1), y === 0 && c && (c.destroy(), c = null, k?.(), k = null, A.clear(), f = { giftList: [], giftCategoryList: [], loading: {}, error: null });
  }, []);
  const d = s(
    async (e) => t.fetchGiftList(e),
    [t]
  ), L = s(
    async (e) => t.createGift(e),
    [t]
  ), w = s(
    async (e) => t.updateGift(e),
    [t]
  ), E = s(
    async (e) => t.deleteGift(e),
    [t]
  ), M = s(
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
  ), h = s(
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
    async (e, i, D, H) => t.setGiftCategoryLanguage(e, i, D, H),
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
    updateGift: w,
    deleteGift: E,
    createGiftCategory: M,
    updateGiftCategory: u,
    deleteGiftCategory: l,
    addGiftCategoryRelations: C,
    deleteGiftCategoryRelations: h,
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
}, U = z("AsyncAction");
function _(n) {
  const { action: t, operationName: a, toast: o, onSuccess: g, onError: G, errorMessage: d, showError: L, showSuccess: w } = n, { t: E } = q(), { opSuccess: M } = B(E), [u, l] = x(!1), C = N(t);
  C.current = t;
  const h = s(async (...b) => {
    if (u) {
      U.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    l(!0);
    try {
      const r = await C.current(...b);
      return g?.(r), w !== !1 && (o ? v.success(M(o.action, o.entity)) : a && v.success(a)), r;
    } catch (r) {
      const p = r instanceof Error ? r : new Error(String(r)), { code: m, info: $ } = F(r), e = d || a || "";
      if (U.error("useAsyncAction", `${e} (ErrorCode: ${m || "N/A"})`, r), a && L !== !1) {
        const i = J(m, $, p.message || String(r));
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
  return { loading: u, execute: h, reset: R };
}
export {
  v as M,
  _ as a,
  Z as u
};
