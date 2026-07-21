import { ref as p, onUnmounted as $ } from "vue";
import { p as I, d as U, t as H, H as N } from "./main-layout.BgP9Ncvl.js";
import { useUIKit as k } from "@tencentcloud/uikit-base-component-vue3";
import { h as D, d as K, y as P, A as j } from "./layout.QDR0rddX.js";
import { MessagePlugin as d } from "tdesign-vue-next";
let n = null, u = null, c = 0;
const L = p([]), C = p([]);
function q() {
  return n || (n = new N({}), c = 0), n;
}
function Q() {
  const l = L, y = C, e = q();
  if (c++, !u) {
    const { state$: t, destroy$: r } = e.observeState(), g = I(
      t,
      H(r),
      U((s) => {
        L.value = s.giftList, C.value = s.giftCategoryList;
      })
    );
    u = () => g.dispose?.();
  }
  return L.value = e.getGiftList(), C.value = e.getGiftCategoryList(), $(() => {
    c = Math.max(0, c - 1), c === 0 && n && (n.destroy(), n = null, u?.(), u = null);
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
    setGiftCategoryLanguage: async (t, r, g, s) => e.setGiftCategoryLanguage(t, r, g, s),
    deleteGiftCategoryLanguage: async (t, r) => e.deleteGiftCategoryLanguage(t, r)
  };
}
const x = D("AsyncAction");
function T(l) {
  const { action: y, operationName: e, toast: f, onSuccess: m, onError: v, errorMessage: A, showError: h, showSuccess: E } = l, { t: S } = k(), { opSuccess: b } = K(S), o = p(!1);
  let i = !1;
  return { loading: o, execute: async (...w) => {
    if (i) {
      x.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    i = !0, o.value = !0;
    try {
      const a = await y(...w);
      return m?.(a), E !== !1 && (f ? d.success(b(f.action, f.entity)) : e && d.success(e)), a;
    } catch (a) {
      const G = a instanceof Error ? a : new Error(String(a)), { code: t, info: r } = P(a), g = A || e || "";
      if (x.error("useAsyncAction", `${g} (ErrorCode: ${t || "N/A"})`, a), e && h !== !1) {
        const s = j(t, r, G.message || String(a));
        d.error(`【${e}】失败：${s}`);
      }
      v?.(G);
      return;
    } finally {
      i = !1, o.value = !1;
    }
  }, reset: () => {
    i = !1, o.value = !1;
  } };
}
export {
  T as a,
  Q as u
};
