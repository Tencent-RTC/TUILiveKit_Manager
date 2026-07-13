import { k as u } from "./en-US.BT81VsgK.js";
const c = {
  sc: { code: "zh-Hans", label: "Simplified Chinese" },
  tc: { code: "zh-Hant", label: "Traditional Chinese" },
  en: { code: "en", label: "English" }
}, _ = {
  "zh-Hans": "sc",
  "zh-Hant": "tc",
  en: "en"
}, C = ["sc", "tc", "en"], I = 20, G = 20, T = 20, E = 100, A = 50, N = 45;
function f(n) {
  return new TextEncoder().encode(n).length;
}
function B(n, e) {
  if (!n || e <= 0)
    return "";
  let t = "", s = 0;
  for (const i of n) {
    const r = f(i);
    if (s + r > e)
      break;
    t += i, s += r;
  }
  return t;
}
function D(n) {
  if (!n) return "-";
  const e = typeof n == "number" ? n * 1e3 : parseInt(n) * 1e3, t = new Date(e), s = t.getFullYear(), i = String(t.getMonth() + 1).padStart(2, "0"), r = String(t.getDate()).padStart(2, "0"), o = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0"), m = String(t.getSeconds()).padStart(2, "0");
  return `${s}-${i}-${r} ${o}:${a}:${m}`;
}
function F(n) {
  return c[n];
}
function g(n) {
  const e = Object.entries(c).find(([t, s]) => s.code === n);
  return e ? e[0] : void 0;
}
function M(n) {
  const e = g(n);
  return e ? c[e].label : n;
}
function w(n) {
  return typeof n == "string" ? n : typeof n == "number" ? String(n) : n.Language || n.language || "";
}
function l() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function p(n, e) {
  return n?.find((t) => t.language === e);
}
function b(n) {
  const e = l(), t = [];
  if (!n || n.length === 0)
    return { config: e, langsToFetch: t };
  for (const s of n) {
    const i = s.language, r = g(i);
    r && (s.name || s.description ? e[r] = { name: s.name || "", description: s.description || "" } : t.push(r));
  }
  return { config: e, langsToFetch: t };
}
function y(n, e) {
  const t = c[e].code, s = p(n, t);
  return s && (s.name || s.description) ? {
    form: { name: s.name || "", description: s.description || "" },
    needsFetch: !1,
    langCode: t
  } : {
    form: { name: "", description: "" },
    needsFetch: !!s,
    langCode: t
  };
}
function L(n) {
  return n.trim().toLowerCase();
}
function Y(n, e) {
  return f(n) > e;
}
function z(n, e) {
  const t = L(e);
  return t ? n.filter((s) => {
    const i = (s.id || "").toLowerCase(), r = (s.name || "").toLowerCase(), o = (s.description || "").toLowerCase(), a = (s.categories || []).join(",").toLowerCase();
    return i.includes(t) || r.includes(t) || o.includes(t) || a.includes(t);
  }) : n;
}
function O(n) {
  const e = n.categories.map((i) => {
    const r = u(i.languageList, "categoryName", "categoryDescription");
    return {
      ...i,
      name: r?.name || i.defaultName || i.name,
      description: r?.description || i.defaultDescription || i.description
    };
  }), t = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    t.set(String(i.id), i.name);
  }), { gifts: n.gifts.map((i) => {
    const r = u(i.languageList, "name", "description"), o = (i.categoryIds || []).map((a) => t.get(String(a)) || a);
    return {
      ...i,
      name: r?.name || i.defaultName || i.name,
      description: r?.description || i.defaultDescription || i.description,
      categories: o
    };
  }), categories: e };
}
const d = "gift_categories_cache";
function S(n) {
  return n.map((e) => {
    const t = Array.isArray(e.giftIds) ? e.giftIds : Array.isArray(e.GiftIdList) ? e.GiftIdList : [];
    return {
      id: String(e.id || e.CategoryId || e.categoryId || ""),
      name: String(e.name || e.CategoryName || "未命名分类"),
      description: e.description ? String(e.description) : void 0,
      languageList: e.languageList || e.LanguageList || [],
      giftIds: t,
      giftCount: t.length,
      defaultName: e.defaultName ? String(e.defaultName) : void 0,
      defaultDescription: e.defaultDescription ? String(e.defaultDescription) : void 0
    };
  });
}
function H(n, e = sessionStorage) {
  if (n.length !== 0)
    try {
      e.setItem(d, JSON.stringify(n));
    } catch {
    }
}
function K(n = sessionStorage) {
  try {
    const e = n.getItem(d);
    return e ? (n.removeItem(d), S(JSON.parse(e))) : [];
  } catch {
    return [];
  }
}
function v(n) {
  return n.map((e) => {
    const t = u(e.languageList, "categoryName", "categoryDescription");
    return {
      ...e,
      name: t?.name || e.defaultName || e.name,
      description: t?.description || e.defaultDescription || e.description
    };
  });
}
export {
  A as G,
  c as L,
  N as R,
  H as a,
  y as b,
  l as c,
  d,
  T as e,
  z as f,
  b as g,
  E as h,
  Y as i,
  I as j,
  G as k,
  _ as l,
  C as m,
  K as n,
  S as o,
  D as p,
  w as q,
  O as r,
  F as s,
  g as t,
  M as u,
  L as v,
  v as w,
  B as x
};
