import { useRef as H, useState as x, useEffect as U, useCallback as r } from "react";
import { H as K, p as O, t as P, d as j } from "./main-layout.DjCTrpgR.js";
import { useUIKit as q } from "@tencentcloud/uikit-base-component-react";
import { c as z } from "./logger.rNWqpx5t.js";
import { a as B, r as F, t as J } from "./layout.LLpP3S0z.js";
import { MessagePlugin as S } from "tdesign-react";
let i = null, y = 0, I = null;
const A = /* @__PURE__ */ new Set();
let g = { giftList: [], giftCategoryList: [] };
function Q() {
  if (!i) {
    i = new K({});
    const { state$: n, destroy$: t } = i.observeState(), a = O(
      n,
      P(t),
      j((o) => {
        g = o, A.forEach((c) => c());
      })
    );
    I = () => a.dispose?.(), y = 0;
  }
  return i;
}
function _() {
  const n = H(Q());
  y++;
  const t = n.current, [a, o] = x(g.giftList), [c, G] = x(
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
  const d = r(
    async (e) => t.fetchGiftList(e),
    [t]
  ), L = r(
    async (e) => t.createGift(e),
    [t]
  ), E = r(
    async (e) => t.updateGift(e),
    [t]
  ), w = r(
    async (e) => t.deleteGift(e),
    [t]
  ), f = r(
    async (e) => t.createGiftCategory(e),
    [t]
  ), u = r(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), C = r(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), M = r(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), h = r(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), R = r(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), s = r(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), p = r(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), m = r(
    async (e, l) => t.getGiftCategoryLanguage(e, l),
    [t]
  ), b = r(
    async (e, l, N, D) => t.setGiftCategoryLanguage(e, l, N, D),
    [t]
  ), $ = r(
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
const v = {
  success: (n) => S.success(n),
  error: (n) => S.error(n),
  warning: (n) => S.warning(n),
  info: (n) => S.info(n)
}, k = z("AsyncAction");
function tt(n) {
  const { action: t, operationName: a, toast: o, onSuccess: c, onError: G, errorMessage: d, showError: L } = n, { t: E } = q(), { opSuccess: w } = B(E), [f, u] = x(!1), C = H(t);
  C.current = t;
  const M = r(async (...R) => {
    if (f) {
      k.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    u(!0);
    try {
      const s = await C.current(...R);
      return c?.(s), o ? v.success(w(o.action, o.entity)) : a && v.success(a), s;
    } catch (s) {
      const p = s instanceof Error ? s : new Error(String(s)), { code: m, info: b } = F(s), $ = d || a || "";
      if (k.error("useAsyncAction", `${$} (ErrorCode: ${m || "N/A"})`, s), a && L !== !1) {
        const e = J(m, b, p.message || String(s));
        v.error(`【${a}】失败：${e}`);
      }
      G?.(p);
      return;
    } finally {
      u(!1);
    }
  }, [f, d, c, G, a, L]), h = r(() => {
    u(!1);
  }, []);
  return { loading: f, execute: M, reset: h };
}
export {
  v as M,
  tt as a,
  _ as u
};
