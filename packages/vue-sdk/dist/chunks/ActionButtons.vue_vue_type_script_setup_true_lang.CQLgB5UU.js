import { defineComponent as J, ref as E, computed as K, onMounted as ie, nextTick as W, watch as G, onBeforeUnmount as ae, openBlock as h, createElementBlock as b, normalizeClass as C, createElementVNode as w, normalizeStyle as R, Fragment as A, renderList as O, renderSlot as B, createTextVNode as X, toDisplayString as L, createBlock as re, resolveDynamicComponent as ce, createCommentVNode as Y } from "vue";
const de = 4, ue = 50;
function M(t, o, n) {
  let i = t;
  return typeof o == "number" && (i = Math.max(i, o)), typeof n == "number" && (i = Math.min(i, n)), Math.ceil(i);
}
function Q(t) {
  if (typeof t == "number") return t;
  if (typeof t == "string" && t.endsWith("px")) {
    const o = Number.parseFloat(t);
    return Number.isFinite(o) ? o : null;
  }
  return null;
}
function fe(t, o) {
  const n = Object.keys(t), i = Object.keys(o);
  return n.length !== i.length ? !1 : i.every((s) => t[s] === o[s]);
}
function ye(t, o, n, i, s, c) {
  let l = n, d = t.slice(), y = i;
  for (let u = 0; u < 8 && d.length > 0; u++) {
    const m = [];
    let p = 0, k = !1;
    for (const f of d) {
      const g = o[f.key] ?? 0, F = y > 0 ? g / y * l : 0;
      {
        const N = f.minWidth ?? 0;
        if (F < N) {
          c[f.key] = M(N, f.minWidth, f.maxWidth), l -= N, k = !0;
          continue;
        }
      }
      m.push(f), p += g;
    }
    if (!k) {
      for (const f of m) {
        const g = o[f.key] ?? 0, N = p > 0 ? g / p * l : g;
        c[f.key] = M(N, f.minWidth, f.maxWidth);
      }
      return 0;
    }
    if (d = m, y = p, l <= 0) {
      for (const f of d)
        c[f.key] = M(f.minWidth ?? 0, f.minWidth, f.maxWidth);
      return 0;
    }
  }
  return l;
}
function he(t, o, n, i) {
  if (t.length === 0 || n === 0) return;
  const s = t.reduce((d, y) => d + (o[y.key] ?? 0), 0);
  if (s <= 0) return;
  let c = 0;
  const l = t.length - 1;
  t.forEach((d, y) => {
    const u = y === l ? n - c : Math.floor((o[d.key] ?? 0) / s * n);
    i[d.key] = (i[d.key] ?? 0) + u, c += u;
  });
}
function me(t, o, n, i) {
  const s = { ...o }, c = t.filter((u) => i(u) && u.flexible && o[u.key] !== void 0);
  if (c.length === 0 || n <= 0) return s;
  let l = 0;
  for (const u of t) {
    if (i(u) && u.flexible) continue;
    const m = Q(u.width);
    m !== null ? l += m : i(u) && (l += o[u.key] ?? u.minWidth ?? 0);
  }
  const d = Math.max(0, n - l), y = c.reduce((u, m) => u + (o[m.key] ?? 0), 0);
  if (y === 0) return s;
  if (d >= y) {
    let u = 0;
    for (const p of c) {
      const k = M(o[p.key] ?? 0, p.minWidth, p.maxWidth);
      s[p.key] = k, u += k;
    }
    const m = d - u;
    if (m > 0) {
      const p = c.filter((f) => {
        const g = o[f.key] ?? 0, F = f.maxWidth ?? Number.POSITIVE_INFINITY;
        return g > F;
      }), k = p.length > 0 ? p : c;
      he(k, o, m, s);
    }
  } else
    ye(c, o, d, y, "compress", s);
  return s;
}
function be(t, o, n) {
  if (!t.some(n) || Object.keys(o).length === 0) return null;
  let s = 0;
  for (const c of t)
    if (n(c)) {
      const l = o[c.key];
      s += typeof l == "number" ? l : c.minWidth ?? 0;
    } else {
      const l = Q(c.width);
      l !== null && (s += l);
    }
  return s <= 0 ? null : { width: `${s}px`, minWidth: "100%" };
}
function pe(t) {
  if (t.length === 0 || typeof document > "u") return [];
  const o = document.createElement("div");
  o.style.cssText = "position:absolute;left:-9999px;top:-9999px;visibility:hidden;pointer-events:none;";
  const n = [], i = [];
  for (const c of t) {
    const l = window.getComputedStyle(c), d = document.createElement("div");
    d.style.cssText = "position:static;width:max-content;min-width:0;max-width:none;height:auto;white-space:nowrap;display:inline-block;", d.style.font = l.font, d.style.fontFamily = l.fontFamily, d.style.fontSize = l.fontSize, d.style.fontWeight = l.fontWeight, d.style.lineHeight = l.lineHeight, c.childNodes.forEach((u) => d.appendChild(u.cloneNode(!0)));
    const y = document.createElement("div");
    y.style.cssText = "display:block;white-space:nowrap;", y.appendChild(d), o.appendChild(y), n.push(d), i.push({
      l: Number.parseFloat(l.paddingLeft) || 0,
      r: Number.parseFloat(l.paddingRight) || 0
    });
  }
  document.body.appendChild(o);
  const s = n.map((c, l) => c.getBoundingClientRect().width + i[l].l + i[l].r + de);
  return document.body.removeChild(o), s;
}
const ve = {
  key: 0,
  class: "fixed-header-table__loading"
}, ke = {
  key: 1,
  class: "fixed-header-table__empty"
}, Ne = /* @__PURE__ */ J({
  __name: "FixedHeaderTable",
  props: {
    columns: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    className: { type: String, default: "" },
    tableClassName: { type: String, default: "" },
    headerClassName: { type: String, default: "" },
    bodyClassName: { type: String, default: "" },
    rowClassName: {
      type: [String, Function],
      default: ""
    },
    loading: { type: Boolean, default: !1 },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    /** 开启后，所有未设置 width 的列都会按内容自动计算宽度 */
    fitContent: { type: Boolean, default: !1 },
    /** 自动计算宽度时最多测量多少行，避免大列表产生性能问题 */
    fitContentMaxRows: { type: Number, default: ue }
  },
  setup(t) {
    function o() {
      if (typeof document > "u") return 0;
      const e = document.createElement("div");
      e.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(e);
      const a = e.offsetWidth - e.clientWidth;
      return document.body.removeChild(e), a;
    }
    const n = t, i = E(null), s = E(null), c = E(null), l = E(null), d = E(null), y = E({});
    let u = {}, m = null, p = null, k = 0, f = null;
    const g = (e) => e.fitContent || n.fitContent && e.width === void 0, F = (e) => typeof e == "number" ? `${e}px` : e, N = (e) => {
      if (g(e)) {
        const a = y.value[e.key];
        if (a !== void 0) return `${a}px`;
        if (typeof e.minWidth == "number") return `${e.minWidth}px`;
      }
      return F(e.width);
    }, q = K(() => {
      const e = {};
      for (const a of n.columns) e[a.key] = { width: N(a) };
      return e;
    }), z = K(() => {
      const e = {};
      for (const a of n.columns) {
        const r = { textAlign: a.align };
        a.ellipsis ? (r.whiteSpace = "nowrap", r.overflow = "hidden", r.textOverflow = "ellipsis") : g(a) && !a.flexible && (r.whiteSpace = "nowrap"), e[a.key] = r;
      }
      return e;
    }), j = K(() => be(n.columns, y.value, g) ?? {}), Z = () => {
      const e = n.columns.map((v, T) => ({ column: v, index: T })).filter(({ column: v }) => g(v));
      if (e.length === 0 || typeof document > "u") {
        u = {};
        return;
      }
      const a = c.value?.querySelectorAll("thead th") || [], r = Array.from(d.value?.querySelectorAll("tbody tr") || []).slice(0, n.fitContentMaxRows), S = [], x = [];
      e.forEach(({ column: v, index: T }) => {
        const _ = a[T];
        _ && (S.push(_), x.push(v.key)), r.forEach((se) => {
          const U = se.children[T];
          U && (S.push(U), x.push(v.key));
        });
      });
      const oe = pe(S), $ = {};
      oe.forEach((v, T) => {
        const _ = x[T];
        ($[_] === void 0 || v > $[_]) && ($[_] = v);
      });
      const V = {};
      for (const { column: v } of e)
        $[v.key] !== void 0 && (V[v.key] = M(
          $[v.key],
          v.minWidth,
          v.maxWidth
        ));
      u = V;
    }, H = () => {
      const e = u;
      if (Object.keys(e).length === 0) {
        Object.keys(y.value).length > 0 && (y.value = {});
        return;
      }
      const a = l.value?.clientWidth ?? 0, r = me(
        n.columns,
        e,
        a,
        g
      );
      fe(y.value, r) || (y.value = r);
    }, I = () => {
      Z(), H();
    }, ee = () => {
      cancelAnimationFrame(k), k = requestAnimationFrame(() => {
        W(I);
      });
    }, te = () => {
      cancelAnimationFrame(k), k = requestAnimationFrame(() => {
        W(H);
      });
    }, D = () => {
      m && m.disconnect(), m = new ResizeObserver(te), i.value && m.observe(i.value);
    }, ne = (e, a) => typeof n.rowKey == "function" ? n.rowKey(e, a) : e[n.rowKey] ?? a, le = (e, a) => typeof n.rowClassName == "function" ? n.rowClassName(e, a) : n.rowClassName, P = () => {
      const e = i.value, a = d.value?.parentElement;
      if (!e || !a) return;
      const r = a.scrollHeight > a.clientHeight ? o() : 0;
      e.style.setProperty("--scrollbar-width", `${r}px`);
    };
    return ie(() => {
      W(() => {
        I(), D(), P();
      }), p = new MutationObserver((e) => {
        for (const a of e)
          if (a.type === "attributes" && a.attributeName === "lang") {
            W(() => {
              y.value = {}, u = {}, ee();
            });
            break;
          }
      }), p.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), W(() => {
        l.value && s.value && (f = () => {
          s.value && l.value && (s.value.scrollLeft = l.value.scrollLeft);
        }, l.value.addEventListener("scroll", f));
      });
    }), G(() => n.data, () => {
      W(P);
    }), G(
      () => [n.columns, n.data, n.loading, n.fitContent, n.fitContentMaxRows],
      () => {
        W(() => {
          I(), D();
        });
      },
      { deep: !0 }
    ), ae(() => {
      cancelAnimationFrame(k), m?.disconnect(), m = null, p?.disconnect(), p = null, l.value && f && (l.value.removeEventListener("scroll", f), f = null);
    }), (e, a) => (h(), b("div", {
      ref_key: "rootRef",
      ref: i,
      class: C(["fixed-header-table", t.className])
    }, [
      w("div", {
        ref_key: "headerRef",
        ref: s,
        class: C(["fixed-header-table__header", t.headerClassName])
      }, [
        w("table", {
          ref_key: "headerTableRef",
          ref: c,
          class: C(["fixed-header-table__table", t.tableClassName]),
          style: R(j.value)
        }, [
          w("colgroup", null, [
            (h(!0), b(A, null, O(t.columns, (r) => (h(), b("col", {
              key: r.key,
              style: R(q.value[r.key])
            }, null, 4))), 128))
          ]),
          w("thead", null, [
            w("tr", null, [
              (h(!0), b(A, null, O(t.columns, (r) => (h(), b("th", {
                key: r.key,
                class: C(r.className),
                style: R(z.value[r.key])
              }, [
                B(e.$slots, `header-${r.key}`, { column: r }, () => [
                  X(L(r.title), 1)
                ])
              ], 6))), 128))
            ])
          ])
        ], 6)
      ], 2),
      w("div", {
        ref_key: "bodyRef",
        ref: l,
        class: C(["fixed-header-table__body", t.bodyClassName]),
        style: R(t.bodyStyle)
      }, [
        t.loading ? (h(), b("div", ve, [
          B(e.$slots, "loading")
        ])) : t.data.length === 0 ? (h(), b("div", ke, [
          B(e.$slots, "empty")
        ])) : (h(), b("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: d,
          class: C(["fixed-header-table__table", t.tableClassName]),
          style: R(j.value)
        }, [
          w("colgroup", null, [
            (h(!0), b(A, null, O(t.columns, (r) => (h(), b("col", {
              key: r.key,
              style: R(q.value[r.key])
            }, null, 4))), 128))
          ]),
          w("tbody", null, [
            (h(!0), b(A, null, O(t.data, (r, S) => (h(), b("tr", {
              key: ne(r, S),
              class: C(le(r, S))
            }, [
              (h(!0), b(A, null, O(t.columns, (x) => (h(), b("td", {
                key: x.key,
                class: C(x.className),
                style: R(z.value[x.key])
              }, [
                B(e.$slots, `cell-${x.key}`, {
                  row: r,
                  column: x,
                  index: S
                }, () => [
                  X(L(r[x.key] ?? ""), 1)
                ])
              ], 6))), 128))
            ], 2))), 128))
          ])
        ], 6))
      ], 6)
    ], 2));
  }
}), ge = ["title", "disabled", "onClick"], xe = { class: "list-action-button__text" }, Ce = {
  key: 1,
  class: "list-action-button__caret",
  "aria-hidden": "true"
}, Se = /* @__PURE__ */ J({
  __name: "ActionButtons",
  props: {
    actions: {
      type: Array,
      required: !0
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const o = (n, i) => {
      n.disabled || n.onClick?.(i);
    };
    return (n, i) => (h(), b("div", {
      class: C(["list-action-buttons", t.className])
    }, [
      (h(!0), b(A, null, O(t.actions, (s) => (h(), b("button", {
        key: s.key,
        type: "button",
        class: C(["list-action-button", { "list-action-button--danger": s.danger }]),
        title: s.title,
        disabled: s.disabled,
        onClick: (c) => o(s, c)
      }, [
        s.icon ? (h(), re(ce(s.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : Y("", !0),
        w("span", xe, L(s.label), 1),
        s.suffixCaret ? (h(), b("span", Ce)) : Y("", !0)
      ], 10, ge))), 128))
    ], 2));
  }
});
export {
  Ne as _,
  Se as a
};
