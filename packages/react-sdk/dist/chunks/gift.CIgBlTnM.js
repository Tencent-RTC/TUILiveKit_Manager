import { useState as o, useRef as x, useEffect as g, useCallback as a } from "react";
import { p as E, t as M, a as U } from "./main-layout.Dtg_jOYA.js";
import { G as j } from "./gift-state.DZGJW0wx.js";
import "./layout.C535EJPV.js";
function D() {
  const [c, f] = o([]), [u, y] = o([]), s = x(null);
  s.current || (s.current = new j({}));
  const t = s.current;
  g(() => {
    const { state$: e, destroy$: n } = t.observeState(), i = E(
      e,
      M(n),
      U((r) => {
        f(r.giftList), y(r.giftCategoryList);
      })
    );
    return () => {
      i.dispose?.();
    };
  }, [t]), g(() => () => {
    t.destroy();
  }, [t]);
  const G = a(
    async (e) => t.fetchGiftList(e),
    [t]
  ), d = a(
    async (e) => t.createGift(e),
    [t]
  ), C = a(
    async (e) => t.updateGift(e),
    [t]
  ), L = a(
    async (e) => t.deleteGift(e),
    [t]
  ), l = a(
    async (e) => t.createGiftCategory(e),
    [t]
  ), p = a(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), m = a(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), R = a(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), b = a(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), S = a(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), k = a(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), $ = a(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), h = a(
    async (e, n) => t.getGiftCategoryLanguage(e, n),
    [t]
  ), v = a(
    async (e, n, i, r) => t.setGiftCategoryLanguage(e, n, i, r),
    [t]
  ), w = a(
    async (e, n) => t.deleteGiftCategoryLanguage(e, n),
    [t]
  );
  return {
    giftList: c,
    giftCategoryList: u,
    fetchGiftList: G,
    createGift: d,
    updateGift: C,
    deleteGift: L,
    createGiftCategory: l,
    updateGiftCategory: p,
    deleteGiftCategory: m,
    addGiftCategoryRelations: R,
    deleteGiftCategoryRelations: b,
    getGiftLanguage: S,
    setGiftLanguage: k,
    deleteGiftLanguage: $,
    getGiftCategoryLanguage: h,
    setGiftCategoryLanguage: v,
    deleteGiftCategoryLanguage: w
  };
}
export {
  D as u
};
