import { defineComponent as X, ref as w, computed as B, onMounted as se, nextTick as v, watch as U, onBeforeUnmount as ne, openBlock as s, createElementBlock as o, normalizeClass as u, createElementVNode as f, normalizeStyle as k, Fragment as W, renderList as x, renderSlot as E, createTextVNode as I, toDisplayString as M, createBlock as oe, resolveDynamicComponent as re, createCommentVNode as P } from "vue";
import { D as ie, c as de, m as ce, d as ue, a as fe, b as ye } from "./action-buttons.CpIwJxCI.js";
const he = {
  key: 0,
  class: "fixed-header-table__loading"
}, me = {
  key: 1,
  class: "fixed-header-table__empty"
}, ge = /* @__PURE__ */ X({
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
    fitContentMaxRows: { type: Number, default: ie }
  },
  setup(n) {
    function _() {
      if (typeof document > "u") return 0;
      const e = document.createElement("div");
      e.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(e);
      const t = e.offsetWidth - e.clientWidth;
      return document.body.removeChild(e), t;
    }
    const a = n, y = w(null), h = w(null), i = w(null), d = w(null), $ = w(null), m = w({});
    let F = {}, p = null, T = null, N = 0, S = null;
    const R = (e) => e.fitContent || a.fitContent && e.width === void 0, G = (e) => typeof e == "number" ? `${e}px` : e, J = (e) => {
      if (R(e)) {
        const t = m.value[e.key];
        if (t !== void 0) return `${t}px`;
        if (typeof e.minWidth == "number") return `${e.minWidth}px`;
      }
      return G(e.width);
    }, q = B(() => {
      const e = {};
      for (const t of a.columns) e[t.key] = { width: J(t) };
      return e;
    }), K = B(() => {
      const e = {};
      for (const t of a.columns) {
        const l = { textAlign: t.align };
        t.ellipsis ? (l.whiteSpace = "nowrap", l.overflow = "hidden", l.textOverflow = "ellipsis") : R(t) && !t.flexible && (l.whiteSpace = "nowrap"), e[t.key] = l;
      }
      return e;
    }), L = B(() => de(a.columns, m.value, R) ?? {}), Q = () => {
      const e = a.columns.map((r, C) => ({ column: r, index: C })).filter(({ column: r }) => R(r));
      if (e.length === 0 || typeof document > "u") {
        F = {};
        return;
      }
      const t = i.value?.querySelectorAll("thead th") || [], l = Array.from($.value?.querySelectorAll("tbody tr") || []).slice(0, a.fitContentMaxRows), b = [], c = [];
      e.forEach(({ column: r, index: C }) => {
        const g = t[C];
        g && (b.push(g), c.push(r.key)), l.forEach((ae) => {
          const V = ae.children[C];
          V && (b.push(V), c.push(r.key));
        });
      });
      const le = ce(b), A = {};
      le.forEach((r, C) => {
        const g = c[C];
        (A[g] === void 0 || r > A[g]) && (A[g] = r);
      });
      const j = {};
      for (const { column: r } of e)
        A[r.key] !== void 0 && (j[r.key] = ue(
          A[r.key],
          r.minWidth,
          r.maxWidth
        ));
      F = j;
    }, z = () => {
      const e = F;
      if (Object.keys(e).length === 0) {
        Object.keys(m.value).length > 0 && (m.value = {});
        return;
      }
      const t = d.value?.clientWidth ?? 0, l = fe(
        a.columns,
        e,
        t,
        R
      );
      ye(m.value, l) || (m.value = l);
    }, O = () => {
      Q(), z();
    }, Y = () => {
      cancelAnimationFrame(N), N = requestAnimationFrame(() => {
        v(O);
      });
    }, Z = () => {
      cancelAnimationFrame(N), N = requestAnimationFrame(() => {
        v(z);
      });
    }, D = () => {
      p && p.disconnect(), p = new ResizeObserver(Z), y.value && p.observe(y.value);
    }, ee = (e, t) => typeof a.rowKey == "function" ? a.rowKey(e, t) : e[a.rowKey] ?? t, te = (e, t) => typeof a.rowClassName == "function" ? a.rowClassName(e, t) : a.rowClassName, H = () => {
      const e = y.value, t = $.value?.parentElement;
      if (!e || !t) return;
      const l = t.scrollHeight > t.clientHeight ? _() : 0;
      e.style.setProperty("--scrollbar-width", `${l}px`);
    };
    return se(() => {
      v(() => {
        O(), D(), H();
      }), T = new MutationObserver((e) => {
        for (const t of e)
          if (t.type === "attributes" && t.attributeName === "lang") {
            v(() => {
              m.value = {}, F = {}, Y();
            });
            break;
          }
      }), T.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), v(() => {
        d.value && h.value && (S = () => {
          h.value && d.value && (h.value.scrollLeft = d.value.scrollLeft);
        }, d.value.addEventListener("scroll", S));
      });
    }), U(() => a.data, () => {
      v(H);
    }), U(
      () => [a.columns, a.data, a.loading, a.fitContent, a.fitContentMaxRows],
      () => {
        v(() => {
          O(), D();
        });
      },
      { deep: !0 }
    ), ne(() => {
      cancelAnimationFrame(N), p?.disconnect(), p = null, T?.disconnect(), T = null, d.value && S && (d.value.removeEventListener("scroll", S), S = null);
    }), (e, t) => (s(), o("div", {
      ref_key: "rootRef",
      ref: y,
      class: u(["fixed-header-table", n.className])
    }, [
      f("div", {
        ref_key: "headerRef",
        ref: h,
        class: u(["fixed-header-table__header", n.headerClassName])
      }, [
        f("table", {
          ref_key: "headerTableRef",
          ref: i,
          class: u(["fixed-header-table__table", n.tableClassName]),
          style: k(L.value)
        }, [
          f("colgroup", null, [
            (s(!0), o(W, null, x(n.columns, (l) => (s(), o("col", {
              key: l.key,
              style: k(q.value[l.key])
            }, null, 4))), 128))
          ]),
          f("thead", null, [
            f("tr", null, [
              (s(!0), o(W, null, x(n.columns, (l) => (s(), o("th", {
                key: l.key,
                class: u(l.className),
                style: k(K.value[l.key])
              }, [
                E(e.$slots, `header-${l.key}`, { column: l }, () => [
                  I(M(l.title), 1)
                ])
              ], 6))), 128))
            ])
          ])
        ], 6)
      ], 2),
      f("div", {
        ref_key: "bodyRef",
        ref: d,
        class: u(["fixed-header-table__body", n.bodyClassName]),
        style: k(n.bodyStyle)
      }, [
        n.loading ? (s(), o("div", he, [
          E(e.$slots, "loading")
        ])) : n.data.length === 0 ? (s(), o("div", me, [
          E(e.$slots, "empty")
        ])) : (s(), o("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: $,
          class: u(["fixed-header-table__table", n.tableClassName]),
          style: k(L.value)
        }, [
          f("colgroup", null, [
            (s(!0), o(W, null, x(n.columns, (l) => (s(), o("col", {
              key: l.key,
              style: k(q.value[l.key])
            }, null, 4))), 128))
          ]),
          f("tbody", null, [
            (s(!0), o(W, null, x(n.data, (l, b) => (s(), o("tr", {
              key: ee(l, b),
              class: u(te(l, b))
            }, [
              (s(!0), o(W, null, x(n.columns, (c) => (s(), o("td", {
                key: c.key,
                class: u(c.className),
                style: k(K.value[c.key])
              }, [
                E(e.$slots, `cell-${c.key}`, {
                  row: l,
                  column: c,
                  index: b
                }, () => [
                  I(M(l[c.key] ?? ""), 1)
                ])
              ], 6))), 128))
            ], 2))), 128))
          ])
        ], 6))
      ], 6)
    ], 2));
  }
}), be = ["title", "disabled", "onClick"], ve = { class: "list-action-button__text" }, ke = {
  key: 1,
  class: "list-action-button__caret",
  "aria-hidden": "true"
}, we = /* @__PURE__ */ X({
  __name: "ActionButtons",
  props: {
    actions: {
      type: Array,
      required: !0
    },
    className: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const _ = n, a = (y, h) => {
      _.disabled || y.disabled || y.onClick?.(h);
    };
    return (y, h) => (s(), o("div", {
      class: u(["list-action-buttons", n.className])
    }, [
      (s(!0), o(W, null, x(n.actions, (i) => (s(), o("button", {
        key: i.key,
        type: "button",
        class: u(["list-action-button", { "list-action-button--danger": i.danger }]),
        title: i.title,
        disabled: _.disabled || i.disabled,
        onClick: (d) => a(i, d)
      }, [
        i.icon ? (s(), oe(re(i.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : P("", !0),
        f("span", ve, M(i.label), 1),
        i.suffixCaret ? (s(), o("span", ke)) : P("", !0)
      ], 10, be))), 128))
    ], 2));
  }
});
export {
  ge as _,
  we as a
};
