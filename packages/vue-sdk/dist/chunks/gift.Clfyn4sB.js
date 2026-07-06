import { useRef as D, useState as y, useEffect as G, useCallback as n } from "react";
import { p as O } from "./main-layout.C2kPbZH0.js";
import { t as j, s as q } from "./utils.DIDVD5Ke.js";
import { G as z } from "./gift-state.Bche--W1.js";
import "./layout.Cu9hOH0i.js";
let a = null, i = 0, l = null;
const o = /* @__PURE__ */ new Set();
let s = { giftList: [], giftCategoryList: [] };
function B() {
  if (!a) {
    a = new z({});
    const { state$: g, destroy$: t } = a.observeState(), f = O(
      g,
      j(t),
      q((c) => {
        s = c, o.forEach((u) => u());
      })
    );
    l = () => f.dispose?.(), i = 0;
  }
  return a;
}
function N() {
  const g = D(B());
  i++;
  const t = g.current, [f, c] = y(s.giftList), [u, L] = y(
    s.giftCategoryList
  );
  G(() => {
    const e = () => {
      c(s.giftList), L(s.giftCategoryList);
    };
    return o.add(e), () => {
      o.delete(e);
    };
  }, []), G(() => () => {
    i = Math.max(0, i - 1), i === 0 && a && (a.destroy(), a = null, l?.(), l = null, o.clear(), s = { giftList: [], giftCategoryList: [], loading: {}, error: null });
  }, []);
  const d = n(
    async (e) => t.fetchGiftList(e),
    [t]
  ), C = n(
    async (e) => t.createGift(e),
    [t]
  ), p = n(
    async (e) => t.updateGift(e),
    [t]
  ), m = n(
    async (e) => t.deleteGift(e),
    [t]
  ), S = n(
    async (e) => t.createGiftCategory(e),
    [t]
  ), R = n(
    async (e) => t.updateGiftCategory(e),
    [t]
  ), b = n(
    async (e) => t.deleteGiftCategory(e),
    [t]
  ), h = n(
    async (e) => t.addGiftCategoryRelations(e),
    [t]
  ), M = n(
    async (e) => t.deleteGiftCategoryRelations(e),
    [t]
  ), k = n(
    async (e) => t.getGiftLanguage(e),
    [t]
  ), v = n(
    async (e) => t.setGiftLanguage(e),
    [t]
  ), w = n(
    async (e) => t.deleteGiftLanguage(e),
    [t]
  ), x = n(
    async (e, r) => t.getGiftCategoryLanguage(e, r),
    [t]
  ), E = n(
    async (e, r, $, A) => t.setGiftCategoryLanguage(e, r, $, A),
    [t]
  ), U = n(
    async (e, r) => t.deleteGiftCategoryLanguage(e, r),
    [t]
  );
  return {
    giftList: f,
    giftCategoryList: u,
    fetchGiftList: d,
    createGift: C,
    updateGift: p,
    deleteGift: m,
    createGiftCategory: S,
    updateGiftCategory: R,
    deleteGiftCategory: b,
    addGiftCategoryRelations: h,
    deleteGiftCategoryRelations: M,
    getGiftLanguage: k,
    setGiftLanguage: v,
    deleteGiftLanguage: w,
    getGiftCategoryLanguage: x,
    setGiftCategoryLanguage: E,
    deleteGiftCategoryLanguage: U
  };
}
export {
  N as u
};
