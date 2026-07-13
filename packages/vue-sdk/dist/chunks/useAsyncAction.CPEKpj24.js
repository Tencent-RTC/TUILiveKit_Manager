import { useRef as U, useState as b, useEffect as x, useCallback as r } from "react";
import { f as O, p as P, t as j, e as z } from "./main-layout.G3PkFHlB.js";
import { q as B, s as F } from "./layout.BFdpDTDu.js";
import { c as H } from "./logger.rNWqpx5t.js";
import { MessagePlugin as S } from "tdesign-react";
let o = null, y = 0, v = null;
const A = /* @__PURE__ */ new Set();
let g = { giftList: [], giftCategoryList: [] };
function J() {
  if (!o) {
    o = new O({});
    const { state$: n, destroy$: t } = o.observeState(), a = P(
      n,
      j(t),
      z((i) => {
        g = i, A.forEach((c) => c());
      })
    );
    v = () => a.dispose?.(), y = 0;
  }
  return o;
}
function X() {
  const n = U(J());
  y++;
  const t = n.current, [a, i] = b(g.giftList), [c, G] = b(
    g.giftCategoryList
  );
  x(() => {
    const e = () => {
      i(g.giftList), G(g.giftCategoryList);
    };
    return A.add(e), () => {
      A.delete(e);
    };
  }, []), x(() => () => {
    y = Math.max(0, y - 1), y === 0 && o && (o.destroy(), o = null, v?.(), v = null, A.clear(), g = { giftList: [], giftCategoryList: [], loading: {}, error: null });
  }, []);
  const d = r(
    async (e) => t.fetchGiftList(e),
    [t]
  ), L = r(
    async (e) => t.createGift(e),
    [t]
  ), f = r(
    async (e) => t.updateGift(e),
    [t]
  ), u = r(
    async (e) => t.deleteGift(e),
    [t]
  ), C = r(
    async (e) => t.createGiftCategory(e),
    [t]
  ), w = r(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), E = r(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), h = r(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), s = r(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), p = r(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), m = r(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), M = r(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), R = r(
    async (e, l) => t.getGiftCategoryLanguage(e, l),
    [t]
  ), $ = r(
    async (e, l, D, I) => t.setGiftCategoryLanguage(e, l, D, I),
    [t]
  ), q = r(
    async (e, l) => t.deleteGiftCategoryLanguage(e, l),
    [t]
  );
  return {
    giftList: a,
    giftCategoryList: c,
    fetchGiftList: d,
    createGift: L,
    updateGift: f,
    deleteGift: u,
    createGiftCategory: C,
    updateGiftCategory: w,
    deleteGiftCategory: E,
    addGiftCategoryRelations: h,
    deleteGiftCategoryRelations: s,
    getGiftLanguage: p,
    setGiftLanguage: m,
    deleteGiftLanguage: M,
    getGiftCategoryLanguage: R,
    setGiftCategoryLanguage: $,
    deleteGiftCategoryLanguage: q
  };
}
const k = {
  success: (n) => S.success(n),
  error: (n) => S.error(n),
  warning: (n) => S.warning(n),
  info: (n) => S.info(n)
}, N = H("AsyncAction");
function Y(n) {
  const { action: t, operationName: a, onSuccess: i, onError: c, errorMessage: G, showError: d, showSuccess: L } = n, [f, u] = b(!1), C = U(t);
  C.current = t;
  const w = r(async (...h) => {
    if (f) {
      N.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    u(!0);
    try {
      const s = await C.current(...h);
      return i?.(s), a && L && k.success(`【${a}】成功`), s;
    } catch (s) {
      const p = s instanceof Error ? s : new Error(String(s)), { code: m, info: M } = B(s), R = G || a || "";
      if (N.error("useAsyncAction", `${R} (ErrorCode: ${m || "N/A"})`, s), a && d !== !1) {
        const $ = F(m, M, p.message || String(s));
        k.error(`【${a}】失败：${$}`);
      }
      c?.(p);
      return;
    } finally {
      u(!1);
    }
  }, [f, G, i, c, a, d, L]), E = r(() => {
    u(!1);
  }, []);
  return { loading: f, execute: w, reset: E };
}
export {
  k as M,
  Y as a,
  X as u
};
