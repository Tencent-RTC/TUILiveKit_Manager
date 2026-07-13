import { ref as m, onUnmounted as w } from "vue";
import { p as I, d as U, t as H, H as N } from "./main-layout.QTEHh38b.js";
import { useUIKit as k } from "@tencentcloud/uikit-base-component-vue3";
import { c as D } from "./logger.rNWqpx5t.js";
import { a as K, r as P, t as j } from "./layout.C1lzYH2h.js";
import { MessagePlugin as L } from "tdesign-vue-next";
let n = null, u = null, g = 0;
const C = m([]), p = m([]);
function q() {
  return n || (n = new N({}), g = 0), n;
}
function T() {
  const l = C, y = p, e = q();
  if (g++, !u) {
    const { state$: t, destroy$: r } = e.observeState(), i = I(
      t,
      H(r),
      U((f) => {
        C.value = f.giftList, p.value = f.giftCategoryList;
      })
    );
    u = () => i.dispose?.();
  }
  return C.value = e.getGiftList(), p.value = e.getGiftCategoryList(), w(() => {
    g = Math.max(0, g - 1), g === 0 && n && (n.destroy(), n = null, u?.(), u = null);
  }), {
    giftList: l,
    giftCategoryList: y,
    fetchGiftList: async (t) => e.fetchGiftList(t),
    createGift: async (t) => e.createGift(t),
    updateGift: async (t) => e.updateGift(t),
    deleteGift: async (t) => e.deleteGift(t),
    createGiftCategory: async (t) => e.createGiftCategory(t),
    updateGiftCategory: async (t) => e.updateGiftCategory(t),
    deleteGiftCategory: async (t) => e.deleteGiftCategory(t),
    addGiftCategoryRelations: async (t) => e.addGiftCategoryRelations(t),
    deleteGiftCategoryRelations: async (t) => e.deleteGiftCategoryRelations(t),
    getGiftLanguage: async (t) => e.getGiftLanguage(t),
    setGiftLanguage: async (t) => e.setGiftLanguage(t),
    deleteGiftLanguage: async (t) => e.deleteGiftLanguage(t),
    getGiftCategoryLanguage: async (t, r) => e.getGiftCategoryLanguage(t, r),
    setGiftCategoryLanguage: async (t, r, i, f) => e.setGiftCategoryLanguage(t, r, i, f),
    deleteGiftCategoryLanguage: async (t, r) => e.deleteGiftCategoryLanguage(t, r)
  };
}
const M = D("AsyncAction");
function V(l) {
  const { action: y, operationName: e, toast: c, onSuccess: v, onError: A, errorMessage: E, showError: h } = l, { t: S } = k(), { opSuccess: b } = K(S), s = m(!1);
  let o = !1;
  return { loading: s, execute: async (...x) => {
    if (o) {
      M.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    o = !0, s.value = !0;
    try {
      const a = await y(...x);
      return v?.(a), c ? L.success(b(c.action, c.entity)) : e && L.success(e), a;
    } catch (a) {
      const G = a instanceof Error ? a : new Error(String(a)), { code: d, info: t } = P(a), r = E || e || "";
      if (M.error("useAsyncAction", `${r} (ErrorCode: ${d || "N/A"})`, a), e && h !== !1) {
        const i = j(d, t, G.message || String(a));
        L.error(`【${e}】失败：${i}`);
      }
      A?.(G);
      return;
    } finally {
      o = !1, s.value = !1;
    }
  }, reset: () => {
    o = !1, s.value = !1;
  } };
}
export {
  V as a,
  T as u
};
