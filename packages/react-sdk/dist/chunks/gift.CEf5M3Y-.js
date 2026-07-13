import { ref as u, onUnmounted as c } from "vue";
import { p as G, a as y, t as l } from "./main-layout.Dtg_jOYA.js";
import { G as d } from "./gift-state.DZGJW0wx.js";
import "./layout.C535EJPV.js";
let n = null, g = null, r = 0;
function C() {
  return n || (n = new d({}), r = 0), n;
}
function A() {
  const s = u([]), o = u([]), e = C();
  if (r++, !g) {
    const { state$: t, destroy$: a } = e.observeState(), f = G(
      t,
      l(a),
      y((i) => {
        s.value = i.giftList, o.value = i.giftCategoryList;
      })
    );
    g = () => f.dispose?.();
  }
  return s.value = e.getGiftList(), o.value = e.getGiftCategoryList(), c(() => {
    r = Math.max(0, r - 1), r === 0 && n && (n.destroy(), n = null, g?.(), g = null);
  }), {
    giftList: s,
    giftCategoryList: o,
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
    getGiftCategoryLanguage: async (t, a) => e.getGiftCategoryLanguage(t, a),
    setGiftCategoryLanguage: async (t, a, f, i) => e.setGiftCategoryLanguage(t, a, f, i),
    deleteGiftCategoryLanguage: async (t, a) => e.deleteGiftCategoryLanguage(t, a)
  };
}
export {
  A as u
};
