const N = 50;
function y(n, t, a) {
  let o = n;
  return typeof t == "number" && (o = Math.max(o, t)), typeof a == "number" && (o = Math.min(o, a)), Math.ceil(o);
}
function g(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string" && n.endsWith("px")) {
    const t = Number.parseFloat(n);
    return Number.isFinite(t) ? t : null;
  }
  return null;
}
function T(n, t) {
  const a = Object.keys(n), o = Object.keys(t);
  return a.length !== o.length ? !1 : o.every((l) => n[l] === t[l]);
}
function x(n, t, a, o, l, s) {
  let e = a, c = n.slice(), f = o;
  for (let r = 0; r < 8 && c.length > 0; r++) {
    const d = [];
    let p = 0, b = !1;
    for (const i of c) {
      const h = t[i.key] ?? 0, m = f > 0 ? h / f * e : 0;
      if (l === "stretch") {
        const u = i.maxWidth ?? Number.POSITIVE_INFINITY;
        if (m > u) {
          s[i.key] = y(u, i.minWidth, i.maxWidth), e -= u, b = !0;
          continue;
        }
      } else {
        const u = i.minWidth ?? 0;
        if (m < u) {
          s[i.key] = y(u, i.minWidth, i.maxWidth), e -= u, b = !0;
          continue;
        }
      }
      d.push(i), p += h;
    }
    if (!b) {
      for (const i of d) {
        const h = t[i.key] ?? 0, m = p > 0 ? h / p * e : h, u = l === "stretch" ? Math.max(h, m) : m;
        s[i.key] = y(u, i.minWidth, i.maxWidth);
      }
      return 0;
    }
    if (c = d, f = p, l === "compress" && e <= 0) {
      for (const i of c)
        s[i.key] = y(i.minWidth ?? 0, i.minWidth, i.maxWidth);
      return 0;
    }
  }
  return e;
}
function k(n, t, a, o) {
  const l = { ...t }, s = n.filter((r) => o(r) && r.flexible && t[r.key] !== void 0);
  if (s.length === 0 || a <= 0) return l;
  let e = 0;
  for (const r of n) {
    if (o(r) && r.flexible) continue;
    const d = g(r.width);
    d !== null ? e += d : o(r) && (e += t[r.key] ?? r.minWidth ?? 0);
  }
  const c = Math.max(0, a - e), f = s.reduce((r, d) => r + (t[d.key] ?? 0), 0);
  return f === 0 || (c >= f ? x(s, t, c, f, "stretch", l) : x(s, t, c, f, "compress", l)), l;
}
function W(n, t, a) {
  if (!n.some(a) || Object.keys(t).length === 0) return null;
  let l = 0;
  for (const s of n)
    if (a(s)) {
      const e = t[s.key];
      l += typeof e == "number" ? e : s.minWidth ?? 0;
    } else {
      const e = g(s.width);
      e !== null && (l += e);
    }
  return l <= 0 ? null : { width: `${l}px`, minWidth: "100%" };
}
function F(n) {
  if (n.length === 0 || typeof document > "u") return [];
  const t = document.createElement("div");
  t.style.cssText = "position:absolute;left:-9999px;top:-9999px;visibility:hidden;pointer-events:none;";
  const a = [], o = [];
  for (const s of n) {
    const e = window.getComputedStyle(s), c = document.createElement("div");
    c.style.cssText = "position:static;width:max-content;min-width:0;max-width:none;height:auto;white-space:nowrap;display:inline-block;", c.style.font = e.font, c.style.fontFamily = e.fontFamily, c.style.fontSize = e.fontSize, c.style.fontWeight = e.fontWeight, c.style.lineHeight = e.lineHeight, s.childNodes.forEach((r) => c.appendChild(r.cloneNode(!0)));
    const f = document.createElement("div");
    f.style.cssText = "display:block;white-space:nowrap;", f.appendChild(c), t.appendChild(f), a.push(c), o.push({
      l: Number.parseFloat(e.paddingLeft) || 0,
      r: Number.parseFloat(e.paddingRight) || 0
    });
  }
  document.body.appendChild(t);
  const l = a.map((s, e) => s.getBoundingClientRect().width + o[e].l + o[e].r + 4);
  return document.body.removeChild(t), l;
}
export {
  N as D,
  k as a,
  T as b,
  W as c,
  y as d,
  F as m
};
