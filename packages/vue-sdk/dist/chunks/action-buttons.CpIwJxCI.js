const N = 50;
function g(n, e, r) {
  let s = n;
  return typeof e == "number" && (s = Math.max(s, e)), typeof r == "number" && (s = Math.min(s, r)), Math.ceil(s);
}
function b(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string" && n.endsWith("px")) {
    const e = Number.parseFloat(n);
    return Number.isFinite(e) ? e : null;
  }
  return null;
}
function T(n, e) {
  const r = Object.keys(n), s = Object.keys(e);
  return r.length !== s.length ? !1 : s.every((c) => n[c] === e[c]);
}
function x(n, e, r, s, c, o) {
  let t = r, i = n.slice(), a = s;
  for (let l = 0; l < 8 && i.length > 0; l++) {
    const d = [];
    let u = 0, h = !1;
    for (const f of i) {
      const p = e[f.key] ?? 0, y = a > 0 ? p / a * t : 0;
      {
        const m = f.minWidth ?? 0;
        if (y < m) {
          o[f.key] = g(m, f.minWidth, f.maxWidth), t -= m, h = !0;
          continue;
        }
      }
      d.push(f), u += p;
    }
    if (!h) {
      for (const f of d) {
        const p = e[f.key] ?? 0, m = u > 0 ? p / u * t : p;
        o[f.key] = g(m, f.minWidth, f.maxWidth);
      }
      return 0;
    }
    if (i = d, a = u, t <= 0) {
      for (const f of i)
        o[f.key] = g(f.minWidth ?? 0, f.minWidth, f.maxWidth);
      return 0;
    }
  }
  return t;
}
function k(n, e, r, s) {
  if (n.length === 0 || r === 0) return;
  const c = n.reduce((i, a) => i + (e[a.key] ?? 0), 0);
  if (c <= 0) return;
  let o = 0;
  const t = n.length - 1;
  n.forEach((i, a) => {
    const l = a === t ? r - o : Math.floor((e[i.key] ?? 0) / c * r);
    s[i.key] = (s[i.key] ?? 0) + l, o += l;
  });
}
function E(n, e, r, s) {
  const c = { ...e }, o = n.filter((l) => s(l) && l.flexible && e[l.key] !== void 0);
  if (o.length === 0 || r <= 0) return c;
  let t = 0;
  for (const l of n) {
    if (s(l) && l.flexible) continue;
    const d = b(l.width);
    d !== null ? t += d : s(l) && (t += e[l.key] ?? l.minWidth ?? 0);
  }
  const i = Math.max(0, r - t), a = o.reduce((l, d) => l + (e[d.key] ?? 0), 0);
  if (a === 0) return c;
  if (i >= a) {
    let l = 0;
    for (const u of o) {
      const h = g(e[u.key] ?? 0, u.minWidth, u.maxWidth);
      c[u.key] = h, l += h;
    }
    const d = i - l;
    if (d > 0) {
      const u = o.filter((f) => {
        const p = e[f.key] ?? 0, y = f.maxWidth ?? Number.POSITIVE_INFINITY;
        return p > y;
      }), h = u.length > 0 ? u : o;
      k(h, e, d, c);
    }
  } else
    x(o, e, i, a, "compress", c);
  return c;
}
function F(n, e, r) {
  if (!n.some(r) || Object.keys(e).length === 0) return null;
  let c = 0;
  for (const o of n)
    if (r(o)) {
      const t = e[o.key];
      c += typeof t == "number" ? t : o.minWidth ?? 0;
    } else {
      const t = b(o.width);
      t !== null && (c += t);
    }
  return c <= 0 ? null : { width: `${c}px`, minWidth: "100%" };
}
function S(n) {
  if (n.length === 0 || typeof document > "u") return [];
  const e = document.createElement("div");
  e.style.cssText = "position:absolute;left:-9999px;top:-9999px;visibility:hidden;pointer-events:none;";
  const r = [], s = [];
  for (const o of n) {
    const t = window.getComputedStyle(o), i = document.createElement("div");
    i.style.cssText = "position:static;width:max-content;min-width:0;max-width:none;height:auto;white-space:nowrap;display:inline-block;", i.style.font = t.font, i.style.fontFamily = t.fontFamily, i.style.fontSize = t.fontSize, i.style.fontWeight = t.fontWeight, i.style.lineHeight = t.lineHeight, o.childNodes.forEach((l) => i.appendChild(l.cloneNode(!0)));
    const a = document.createElement("div");
    a.style.cssText = "display:block;white-space:nowrap;", a.appendChild(i), e.appendChild(a), r.push(i), s.push({
      l: Number.parseFloat(t.paddingLeft) || 0,
      r: Number.parseFloat(t.paddingRight) || 0
    });
  }
  document.body.appendChild(e);
  const c = r.map((o, t) => o.getBoundingClientRect().width + s[t].l + s[t].r + 4);
  return document.body.removeChild(e), c;
}
export {
  N as D,
  E as a,
  T as b,
  F as c,
  g as d,
  S as m
};
