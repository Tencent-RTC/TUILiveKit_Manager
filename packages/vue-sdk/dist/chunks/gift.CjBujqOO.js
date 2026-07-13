import { useState as s, useRef as E, useEffect as M, useCallback as a } from "react";
import { G as j } from "./gift-state.7aqCu-D0.js";
function z() {
  const [g, i] = s([]), [o, f] = s([]), r = E(null);
  r.current || (r.current = new j({
    onStateChange: (e) => {
      i(e.giftList), f(e.giftCategoryList);
    }
  }));
  const t = r.current;
  M(() => () => {
    t.destroy();
  }, [t]);
  const c = a(
    async (e) => t.fetchGiftList(e),
    [t]
  ), u = a(
    async (e) => t.createGift(e),
    [t]
  ), y = a(
    async (e) => t.updateGift(e),
    [t]
  ), G = a(
    async (e) => t.deleteGift(e),
    [t]
  ), C = a(
    async (e) => t.createGiftCategory(e),
    [t]
  ), L = a(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), d = a(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), l = a(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), m = a(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), p = a(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), R = a(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), S = a(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), h = a(
    async (e, n) => t.getGiftCategoryLanguage(e, n),
    [t]
  ), b = a(
    async (e, n, w, x) => t.setGiftCategoryLanguage(e, n, w, x),
    [t]
  ), k = a(
    async (e, n) => t.deleteGiftCategoryLanguage(e, n),
    [t]
  );
  return {
    giftList: g,
    giftCategoryList: o,
    fetchGiftList: c,
    createGift: u,
    updateGift: y,
    deleteGift: G,
    createGiftCategory: C,
    updateGiftCategory: L,
    deleteGiftCategory: d,
    addGiftCategoryRelations: l,
    deleteGiftCategoryRelations: m,
    getGiftLanguage: p,
    setGiftLanguage: R,
    deleteGiftLanguage: S,
    getGiftCategoryLanguage: h,
    setGiftCategoryLanguage: b,
    deleteGiftCategoryLanguage: k
  };
}
export {
  z as u
};
