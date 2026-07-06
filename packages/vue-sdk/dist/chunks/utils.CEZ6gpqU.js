import { f as c } from "./constants.BKgq3oBR.js";
import { j as u } from "./en-US.DXdmRfHg.js";
function d(e) {
  return new TextEncoder().encode(e).length;
}
function y(e, r) {
  if (!e || r <= 0)
    return "";
  let n = "", o = 0;
  for (const t of e) {
    const i = d(t);
    if (o + i > r)
      break;
    n += t, o += i;
  }
  return n;
}
function S(e) {
  if (!e) return "-";
  const r = typeof e == "number" ? e * 1e3 : parseInt(e) * 1e3, n = new Date(r), o = n.getFullYear(), t = String(n.getMonth() + 1).padStart(2, "0"), i = String(n.getDate()).padStart(2, "0"), s = String(n.getHours()).padStart(2, "0"), a = String(n.getMinutes()).padStart(2, "0"), g = String(n.getSeconds()).padStart(2, "0");
  return `${o}-${t}-${i} ${s}:${a}:${g}`;
}
function w(e) {
  return c[e];
}
function f(e) {
  const r = Object.entries(c).find(([n, o]) => o.code === e);
  return r ? r[0] : void 0;
}
function C(e) {
  const r = f(e);
  return r ? c[r].label : e;
}
function G(e) {
  return typeof e == "string" ? e : typeof e == "number" ? String(e) : e.Language || e.language || "";
}
function m() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function p(e, r) {
  return e?.find((n) => n.language === r);
}
function b(e) {
  const r = m(), n = [];
  if (!e || e.length === 0)
    return { config: r, langsToFetch: n };
  for (const o of e) {
    const t = o.language, i = f(t);
    i && (o.name || o.description ? r[i] = { name: o.name || "", description: o.description || "" } : n.push(i));
  }
  return { config: r, langsToFetch: n };
}
function B(e, r) {
  const n = c[r].code, o = p(e, n);
  return o && (o.name || o.description) ? {
    form: { name: o.name || "", description: o.description || "" },
    needsFetch: !1,
    langCode: n
  } : {
    form: { name: "", description: "" },
    needsFetch: !!o,
    langCode: n
  };
}
function l(e) {
  return e.trim().toLowerCase();
}
function F(e, r) {
  return d(e) > r;
}
function I(e, r) {
  const n = l(r);
  return n ? e.filter((o) => {
    const t = (o.id || "").toLowerCase(), i = (o.name || "").toLowerCase(), s = (o.description || "").toLowerCase(), a = (o.categories || []).join(",").toLowerCase();
    return t.includes(n) || i.includes(n) || s.includes(n) || a.includes(n);
  }) : e;
}
function D(e) {
  const r = e.categories.map((t) => {
    const i = u(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: i?.name || t.defaultName || t.name,
      description: i?.description || t.defaultDescription || t.description
    };
  }), n = /* @__PURE__ */ new Map();
  return r.forEach((t) => {
    n.set(String(t.id), t.name);
  }), { gifts: e.gifts.map((t) => {
    const i = u(t.languageList, "name", "description"), s = (t.categoryIds || []).map((a) => n.get(String(a)) || a);
    return {
      ...t,
      name: i?.name || t.defaultName || t.name,
      description: i?.description || t.defaultDescription || t.description,
      categories: s
    };
  }), categories: r };
}
export {
  S as a,
  B as b,
  m as c,
  G as d,
  w as e,
  I as f,
  b as g,
  f as h,
  C as i,
  F as j,
  l as n,
  D as r,
  y as t
};
