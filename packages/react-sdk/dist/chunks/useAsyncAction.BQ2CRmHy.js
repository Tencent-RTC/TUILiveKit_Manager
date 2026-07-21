import { useRef as H, useState as x, useEffect as U, useCallback as s } from "react";
import { H as K, p as O, t as P, d as j } from "./main-layout.BgP9Ncvl.js";
import { useUIKit as q } from "@tencentcloud/uikit-base-component-react";
import { h as z, d as B, y as F, A as J } from "./layout.QDR0rddX.js";
import { MessagePlugin as S } from "tdesign-react";
let c = null, y = 0, I = null;
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
    I = () => a.dispose?.(), y = 0;
  }
  return c;
}
function Z() {
  const n = H(Q());
  y++;
  const t = n.current, [a, o] = x(f.giftList), [g, d] = x(
    f.giftCategoryList
  );
  U(() => {
    const e = () => {
      o(f.giftList), d(f.giftCategoryList);
    };
    return A.add(e), () => {
      A.delete(e);
    };
  }, []), U(() => () => {
    y = Math.max(0, y - 1), y === 0 && c && (c.destroy(), c = null, I?.(), I = null, A.clear(), f = { giftList: [], giftCategoryList: [], loading: {}, error: null });
  }, []);
  const G = s(
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
    async (e, i, N, D) => t.setGiftCategoryLanguage(e, i, N, D),
    [t]
  ), $ = s(
    async (e, i) => t.deleteGiftCategoryLanguage(e, i),
    [t]
  );
  return {
    giftList: a,
    giftCategoryList: g,
    fetchGiftList: G,
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
}, k = z("AsyncAction");
function _(n) {
  const { action: t, operationName: a, toast: o, onSuccess: g, onError: d, errorMessage: G, showError: L, showSuccess: h } = n, { t: w } = q(), { opSuccess: E } = B(w), [u, l] = x(!1), C = H(t);
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
      const p = r instanceof Error ? r : new Error(String(r)), { code: m, info: $ } = F(r), e = G || a || "";
      if (k.error("useAsyncAction", `${e} (ErrorCode: ${m || "N/A"})`, r), a && L !== !1) {
        const i = J(m, $, p.message || String(r));
        v.error(`【${a}】失败：${i}`);
      }
      d?.(p);
      return;
    } finally {
      l(!1);
    }
  }, [u, G, g, d, a, L]), R = s(() => {
    l(!1);
  }, []);
  return { loading: u, execute: M, reset: R };
}
export {
  v as M,
  _ as a,
  Z as u
};
