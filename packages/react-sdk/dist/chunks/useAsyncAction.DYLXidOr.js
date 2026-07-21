import { ref as p, onUnmounted as $ } from "vue";
import { p as I, e as U, t as N, J as k } from "./main-layout.OEkSp6vd.js";
import { useUIKit as z } from "@tencentcloud/uikit-base-component-vue3";
import { h as B, d as D, z as H, B as J } from "./shared-state.Bf8CkvaR.js";
import { MessagePlugin as d } from "tdesign-vue-next";
let n = null, u = null, c = 0;
const L = p([]), C = p([]);
function K() {
  return n || (n = new k({}), c = 0), n;
}
function Q() {
  const l = L, y = C, e = K();
  if (c++, !u) {
    const { state$: t, destroy$: r } = e.observeState(), g = I(
      t,
      N(r),
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
const x = B("AsyncAction");
function T(l) {
  const { action: y, operationName: e, toast: f, onSuccess: m, onError: v, errorMessage: h, showError: A, showSuccess: E } = l, { t: S } = z(), { opSuccess: b } = D(S), o = p(!1);
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
      const G = a instanceof Error ? a : new Error(String(a)), { code: t, info: r } = H(a), g = h || e || "";
      if (x.error("useAsyncAction", `${g} (ErrorCode: ${t || "N/A"})`, a), e && A !== !1) {
        const s = J(t, r, G.message || String(a));
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
