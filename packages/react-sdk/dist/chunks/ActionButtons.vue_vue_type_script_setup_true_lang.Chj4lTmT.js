import { defineComponent as X, ref as w, computed as B, onMounted as ne, nextTick as v, watch as U, onBeforeUnmount as se, openBlock as n, createElementBlock as o, normalizeClass as y, createElementVNode as u, normalizeStyle as k, Fragment as W, renderList as S, renderSlot as E, createTextVNode as I, toDisplayString as M, createBlock as oe, resolveDynamicComponent as re, createCommentVNode as P } from "vue";
import { D as ie, c as de, m as ce, d as ue, a as fe, b as ye } from "./action-buttons.ChAJrOyM.js";
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
  setup(s) {
    function A() {
      if (typeof document > "u") return 0;
      const e = document.createElement("div");
      e.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(e);
      const l = e.offsetWidth - e.clientWidth;
      return document.body.removeChild(e), l;
    }
    const a = s, f = w(null), h = w(null), i = w(null), d = w(null), $ = w(null), m = w({});
    let _ = {}, p = null, F = null, x = 0, N = null;
    const T = (e) => e.fitContent || a.fitContent && e.width === void 0, G = (e) => typeof e == "number" ? `${e}px` : e, J = (e) => {
      if (T(e)) {
        const l = m.value[e.key];
        if (l !== void 0) return `${l}px`;
        if (typeof e.minWidth == "number") return `${e.minWidth}px`;
      }
      return G(e.width);
    }, q = B(() => {
      const e = {};
      for (const l of a.columns) e[l.key] = { width: J(l) };
      return e;
    }), K = B(() => {
      const e = {};
      for (const l of a.columns) {
        const t = { textAlign: l.align };
        l.ellipsis ? (t.whiteSpace = "nowrap", t.overflow = "hidden", t.textOverflow = "ellipsis") : (t.whiteSpace = "normal", t.wordBreak = "break-all", t.overflowWrap = "anywhere"), e[l.key] = t;
      }
      return e;
    }), L = B(() => de(a.columns, m.value, T) ?? {}), Q = () => {
      const e = a.columns.map((r, C) => ({ column: r, index: C })).filter(({ column: r }) => T(r));
      if (e.length === 0 || typeof document > "u") {
        _ = {};
        return;
      }
      const l = i.value?.querySelectorAll("thead th") || [], t = Array.from($.value?.querySelectorAll("tbody tr") || []).slice(0, a.fitContentMaxRows), b = [], c = [];
      e.forEach(({ column: r, index: C }) => {
        const g = l[C];
        g && (b.push(g), c.push(r.key)), t.forEach((ae) => {
          const V = ae.children[C];
          V && (b.push(V), c.push(r.key));
        });
      });
      const le = ce(b), R = {};
      le.forEach((r, C) => {
        const g = c[C];
        (R[g] === void 0 || r > R[g]) && (R[g] = r);
      });
      const j = {};
      for (const { column: r } of e)
        R[r.key] !== void 0 && (j[r.key] = ue(
          R[r.key],
          r.minWidth
        ));
      _ = j;
    }, z = () => {
      const e = _;
      if (Object.keys(e).length === 0) {
        Object.keys(m.value).length > 0 && (m.value = {});
        return;
      }
      const l = d.value?.clientWidth ?? 0, t = fe(
        a.columns,
        e,
        l,
        T
      );
      ye(m.value, t) || (m.value = t);
    }, O = () => {
      Q(), z();
    }, Y = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        v(O);
      });
    }, Z = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        v(z);
      });
    }, D = () => {
      p && p.disconnect(), p = new ResizeObserver(Z), f.value && p.observe(f.value);
    }, ee = (e, l) => typeof a.rowKey == "function" ? a.rowKey(e, l) : e[a.rowKey] ?? l, te = (e, l) => typeof a.rowClassName == "function" ? a.rowClassName(e, l) : a.rowClassName, H = () => {
      const e = f.value, l = $.value?.parentElement;
      if (!e || !l) return;
      const t = l.scrollHeight > l.clientHeight ? A() : 0;
      e.style.setProperty("--scrollbar-width", `${t}px`);
    };
    return ne(() => {
      v(() => {
        O(), D(), H();
      }), F = new MutationObserver((e) => {
        for (const l of e)
          if (l.type === "attributes" && l.attributeName === "lang") {
            v(() => {
              m.value = {}, _ = {}, Y();
            });
            break;
          }
      }), F.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), v(() => {
        d.value && h.value && (N = () => {
          h.value && d.value && (h.value.scrollLeft = d.value.scrollLeft);
        }, d.value.addEventListener("scroll", N));
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
    ), se(() => {
      cancelAnimationFrame(x), p?.disconnect(), p = null, F?.disconnect(), F = null, d.value && N && (d.value.removeEventListener("scroll", N), N = null);
    }), (e, l) => (n(), o("div", {
      ref_key: "rootRef",
      ref: f,
      class: y(["fixed-header-table", s.className])
    }, [
      u("div", {
        ref_key: "headerRef",
        ref: h,
        class: y(["fixed-header-table__header", s.headerClassName])
      }, [
        u("table", {
          ref_key: "headerTableRef",
          ref: i,
          class: y(["fixed-header-table__table", s.tableClassName]),
          style: k(L.value)
        }, [
          u("colgroup", null, [
            (n(!0), o(W, null, S(s.columns, (t) => (n(), o("col", {
              key: t.key,
              style: k(q.value[t.key])
            }, null, 4))), 128))
          ]),
          u("thead", null, [
            u("tr", null, [
              (n(!0), o(W, null, S(s.columns, (t) => (n(), o("th", {
                key: t.key,
                style: k(K.value[t.key])
              }, [
                E(e.$slots, `header-${t.key}`, { column: t }, () => [
                  I(M(t.title), 1)
                ])
              ], 4))), 128))
            ])
          ])
        ], 6)
      ], 2),
      u("div", {
        ref_key: "bodyRef",
        ref: d,
        class: y(["fixed-header-table__body", s.bodyClassName]),
        style: k(s.bodyStyle)
      }, [
        s.loading ? (n(), o("div", he, [
          E(e.$slots, "loading")
        ])) : s.data.length === 0 ? (n(), o("div", me, [
          E(e.$slots, "empty")
        ])) : (n(), o("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: $,
          class: y(["fixed-header-table__table", s.tableClassName]),
          style: k(L.value)
        }, [
          u("colgroup", null, [
            (n(!0), o(W, null, S(s.columns, (t) => (n(), o("col", {
              key: t.key,
              style: k(q.value[t.key])
            }, null, 4))), 128))
          ]),
          u("tbody", null, [
            (n(!0), o(W, null, S(s.data, (t, b) => (n(), o("tr", {
              key: ee(t, b),
              class: y(te(t, b))
            }, [
              (n(!0), o(W, null, S(s.columns, (c) => (n(), o("td", {
                key: c.key,
                style: k(K.value[c.key])
              }, [
                E(e.$slots, `cell-${c.key}`, {
                  row: t,
                  column: c,
                  index: b
                }, () => [
                  I(M(t[c.key] ?? ""), 1)
                ])
              ], 4))), 128))
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
  setup(s) {
    const A = s, a = (f, h) => {
      A.disabled || f.disabled || f.onClick?.(h);
    };
    return (f, h) => (n(), o("div", {
      class: y(["list-action-buttons", s.className])
    }, [
      (n(!0), o(W, null, S(s.actions, (i) => (n(), o("button", {
        key: i.key,
        type: "button",
        class: y(["list-action-button", { "list-action-button--danger": i.danger }]),
        title: i.title,
        disabled: A.disabled || i.disabled,
        onClick: (d) => a(i, d)
      }, [
        i.icon ? (n(), oe(re(i.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : P("", !0),
        u("span", ve, M(i.label), 1),
        i.suffixCaret ? (n(), o("span", ke)) : P("", !0)
      ], 10, be))), 128))
    ], 2));
  }
});
export {
  ge as _,
  we as a
};
