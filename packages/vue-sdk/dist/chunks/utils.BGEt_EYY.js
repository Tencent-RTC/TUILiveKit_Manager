import { j as s } from "./en-US.BGpvCrvn.js";
const n = "gift_categories_cache";
function a(t) {
  return t.map((i) => {
    const e = Array.isArray(i.giftIds) ? i.giftIds : Array.isArray(i.GiftIdList) ? i.GiftIdList : [];
    return {
      id: String(i.id || i.CategoryId || i.categoryId || ""),
      name: String(i.name || i.CategoryName || "未命名分类"),
      description: i.description ? String(i.description) : void 0,
      languageList: i.languageList || i.LanguageList || [],
      giftIds: e,
      giftCount: e.length,
      defaultName: i.defaultName ? String(i.defaultName) : void 0,
      defaultDescription: i.defaultDescription ? String(i.defaultDescription) : void 0
    };
  });
}
function d(t, i = sessionStorage) {
  if (t.length !== 0)
    try {
      i.setItem(n, JSON.stringify(t));
    } catch {
    }
}
function u(t = sessionStorage) {
  try {
    const i = t.getItem(n);
    return i ? (t.removeItem(n), a(JSON.parse(i))) : [];
  } catch {
    return [];
  }
}
function f(t) {
  return t.map((i) => {
    const e = s(i.languageList, "categoryName", "categoryDescription");
    return {
      ...i,
      name: e?.name || i.defaultName || i.name,
      description: e?.description || i.defaultDescription || i.description
    };
  });
}
export {
  n as G,
  u as a,
  a as b,
  d as c,
  f as r
};
