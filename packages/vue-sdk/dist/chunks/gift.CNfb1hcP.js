import { ref as u, onUnmounted as y } from "vue";
import { p as l } from "./main-layout.C2kPbZH0.js";
import { s as d, t as L } from "./utils.DIDVD5Ke.js";
import { G as C } from "./gift-state.Bche--W1.js";
import "./layout.Cu9hOH0i.js";
let n = null, s = null, r = 0;
const o = u([]), f = u([]);
function p() {
  return n || (n = new C({}), r = 0), n;
}
function F() {
  const c = o, G = f, e = p();
  if (r++, !s) {
    const { state$: t, destroy$: a } = e.observeState(), g = l(
      t,
      L(a),
      d((i) => {
        o.value = i.giftList, f.value = i.giftCategoryList;
      })
    );
    s = () => g.dispose?.();
  }
  return o.value = e.getGiftList(), f.value = e.getGiftCategoryList(), y(() => {
    r = Math.max(0, r - 1), r === 0 && n && (n.destroy(), n = null, s?.(), s = null);
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
    setGiftCategoryLanguage: async (t, a, g, i) => e.setGiftCategoryLanguage(t, a, g, i),
    deleteGiftCategoryLanguage: async (t, a) => e.deleteGiftCategoryLanguage(t, a)
  };
}
export {
  F as u
};
