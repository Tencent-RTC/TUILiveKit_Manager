import { ref as u, onUnmounted as y } from "vue";
import { p as l, e as d, t as L, f as C } from "./main-layout.G3PkFHlB.js";
import "./layout.BFdpDTDu.js";
let n = null, s = null, i = 0;
const o = u([]), f = u([]);
function p() {
  return n || (n = new C({}), i = 0), n;
}
function B() {
  const c = o, G = f, e = p();
  if (i++, !s) {
    const { state$: t, destroy$: a } = e.observeState(), g = l(
      t,
      L(a),
      d((r) => {
        o.value = r.giftList, f.value = r.giftCategoryList;
      })
    );
    s = () => g.dispose?.();
  }
  return o.value = e.getGiftList(), f.value = e.getGiftCategoryList(), y(() => {
    i = Math.max(0, i - 1), i === 0 && n && (n.destroy(), n = null, s?.(), s = null);
  }), {
    giftList: c,
    giftCategoryList: G,
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
    setGiftCategoryLanguage: async (t, a, g, r) => e.setGiftCategoryLanguage(t, a, g, r),
    deleteGiftCategoryLanguage: async (t, a) => e.deleteGiftCategoryLanguage(t, a)
  };
}
export {
  B as u
};
