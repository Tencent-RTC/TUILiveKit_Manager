import { ref as o, onUnmounted as G } from "vue";
import { G as c } from "./gift-state.HnCzeWbQ.js";
let n = null;
function y() {
  return n || (n = new c({
    onStateChange: (a) => {
      i && (i.value = a.giftList), r && (r.value = a.giftCategoryList);
    }
  })), n;
}
let i = null, r = null;
function k() {
  const a = o([]), f = o([]);
  i = a, r = f;
  const e = y();
  return a.value = e.getGiftList(), f.value = e.getGiftCategoryList(), G(() => {
    n && (n.destroy(), n = null, i = null, r = null);
  }), {
    giftList: a,
    giftCategoryList: f,
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
    getGiftCategoryLanguage: async (t, g) => e.getGiftCategoryLanguage(t, g),
    setGiftCategoryLanguage: async (t, g, s, u) => e.setGiftCategoryLanguage(t, g, s, u),
    deleteGiftCategoryLanguage: async (t, g) => e.deleteGiftCategoryLanguage(t, g)
  };
}
export {
  k as u
};
