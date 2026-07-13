import { defineComponent as X, ref as g, computed as B, onMounted as ne, nextTick as b, watch as U, onBeforeUnmount as se, openBlock as n, createElementBlock as s, normalizeClass as d, createElementVNode as u, normalizeStyle as v, Fragment as w, renderList as W, renderSlot as T, createTextVNode as I, toDisplayString as M, createBlock as oe, resolveDynamicComponent as re, createCommentVNode as P } from "vue";
import { D as ie, c as ce, m as de, a as ue, b as fe, d as ye } from "./action-buttons.CvtTFRpa.js";
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
  setup(o) {
    function E() {
      if (typeof document > "u") return 0;
      const e = document.createElement("div");
      e.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(e);
      const t = e.offsetWidth - e.clientWidth;
      return document.body.removeChild(e), t;
    }
    const a = o, y = g(null), i = g(null), A = g(null), f = g(null), $ = g(null), h = g({});
    let _ = {}, k = null, F = null, x = 0, N = null;
    const S = (e) => e.fitContent || a.fitContent && e.width === void 0, G = (e) => typeof e == "number" ? `${e}px` : e, J = (e) => {
      if (S(e)) {
        const t = h.value[e.key];
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
        t.ellipsis ? (l.whiteSpace = "nowrap", l.overflow = "hidden", l.textOverflow = "ellipsis") : S(t) && !t.flexible && (l.whiteSpace = "nowrap"), e[t.key] = l;
      }
      return e;
    }), L = B(() => ce(a.columns, h.value, S) ?? {}), Q = () => {
      const e = a.columns.map((r, p) => ({ column: r, index: p })).filter(({ column: r }) => S(r));
      if (e.length === 0 || typeof document > "u") {
        _ = {};
        return;
      }
      const t = A.value?.querySelectorAll("thead th") || [], l = Array.from($.value?.querySelectorAll("tbody tr") || []).slice(0, a.fitContentMaxRows), m = [], c = [];
      e.forEach(({ column: r, index: p }) => {
        const C = t[p];
        C && (m.push(C), c.push(r.key)), l.forEach((ae) => {
          const V = ae.children[p];
          V && (m.push(V), c.push(r.key));
        });
      });
      const le = de(m), R = {};
      le.forEach((r, p) => {
        const C = c[p];
        (R[C] === void 0 || r > R[C]) && (R[C] = r);
      });
      const j = {};
      for (const { column: r } of e)
        R[r.key] !== void 0 && (j[r.key] = ue(
          R[r.key],
          r.minWidth,
          r.maxWidth
        ));
      _ = j;
    }, z = () => {
      const e = _;
      if (Object.keys(e).length === 0) {
        Object.keys(h.value).length > 0 && (h.value = {});
        return;
      }
      const t = f.value?.clientWidth ?? 0, l = fe(
        a.columns,
        e,
        t,
        S
      );
      ye(h.value, l) || (h.value = l);
    }, O = () => {
      Q(), z();
    }, Y = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        b(O);
      });
    }, Z = () => {
      cancelAnimationFrame(x), x = requestAnimationFrame(() => {
        b(z);
      });
    }, D = () => {
      k && k.disconnect(), k = new ResizeObserver(Z), y.value && k.observe(y.value);
    }, ee = (e, t) => typeof a.rowKey == "function" ? a.rowKey(e, t) : e[a.rowKey] ?? t, te = (e, t) => typeof a.rowClassName == "function" ? a.rowClassName(e, t) : a.rowClassName, H = () => {
      const e = y.value, t = $.value?.parentElement;
      if (!e || !t) return;
      const l = t.scrollHeight > t.clientHeight ? E() : 0;
      e.style.setProperty("--scrollbar-width", `${l}px`);
    };
    return ne(() => {
      b(() => {
        O(), D(), H();
      }), F = new MutationObserver((e) => {
        for (const t of e)
          if (t.type === "attributes" && t.attributeName === "lang") {
            b(() => {
              h.value = {}, _ = {}, Y();
            });
            break;
          }
      }), F.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), b(() => {
        f.value && i.value && (N = () => {
          i.value && f.value && (i.value.scrollLeft = f.value.scrollLeft);
        }, f.value.addEventListener("scroll", N));
      });
    }), U(() => a.data, () => {
      b(H);
    }), U(
      () => [a.columns, a.data, a.loading, a.fitContent, a.fitContentMaxRows],
      () => {
        b(() => {
          O(), D();
        });
      },
      { deep: !0 }
    ), se(() => {
      cancelAnimationFrame(x), k?.disconnect(), k = null, F?.disconnect(), F = null, f.value && N && (f.value.removeEventListener("scroll", N), N = null);
    }), (e, t) => (n(), s("div", {
      ref_key: "rootRef",
      ref: y,
      class: d(["fixed-header-table", o.className])
    }, [
      u("div", {
        ref_key: "headerRef",
        ref: i,
        class: d(["fixed-header-table__header", o.headerClassName])
      }, [
        u("table", {
          ref_key: "headerTableRef",
          ref: A,
          class: d(["fixed-header-table__table", o.tableClassName]),
          style: v(L.value)
        }, [
          u("colgroup", null, [
            (n(!0), s(w, null, W(o.columns, (l) => (n(), s("col", {
              key: l.key,
              style: v(q.value[l.key])
            }, null, 4))), 128))
          ]),
          u("thead", null, [
            u("tr", null, [
              (n(!0), s(w, null, W(o.columns, (l) => (n(), s("th", {
                key: l.key,
                class: d(l.className),
                style: v(K.value[l.key])
              }, [
                T(e.$slots, `header-${l.key}`, { column: l }, () => [
                  I(M(l.title), 1)
                ])
              ], 6))), 128))
            ])
          ])
        ], 6)
      ], 2),
      u("div", {
        ref_key: "bodyRef",
        ref: f,
        class: d(["fixed-header-table__body", o.bodyClassName]),
        style: v(o.bodyStyle)
      }, [
        o.loading ? (n(), s("div", he, [
          T(e.$slots, "loading")
        ])) : o.data.length === 0 ? (n(), s("div", me, [
          T(e.$slots, "empty")
        ])) : (n(), s("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: $,
          class: d(["fixed-header-table__table", o.tableClassName]),
          style: v(L.value)
        }, [
          u("colgroup", null, [
            (n(!0), s(w, null, W(o.columns, (l) => (n(), s("col", {
              key: l.key,
              style: v(q.value[l.key])
            }, null, 4))), 128))
          ]),
          u("tbody", null, [
            (n(!0), s(w, null, W(o.data, (l, m) => (n(), s("tr", {
              key: ee(l, m),
              class: d(te(l, m))
            }, [
              (n(!0), s(w, null, W(o.columns, (c) => (n(), s("td", {
                key: c.key,
                class: d(c.className),
                style: v(K.value[c.key])
              }, [
                T(e.$slots, `cell-${c.key}`, {
                  row: l,
                  column: c,
                  index: m
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
    }
  },
  setup(o) {
    const E = (a, y) => {
      a.disabled || a.onClick?.(y);
    };
    return (a, y) => (n(), s("div", {
      class: d(["list-action-buttons", o.className])
    }, [
      (n(!0), s(w, null, W(o.actions, (i) => (n(), s("button", {
        key: i.key,
        type: "button",
        class: d(["list-action-button", { "list-action-button--danger": i.danger }]),
        title: i.title,
        disabled: i.disabled,
        onClick: (A) => E(i, A)
      }, [
        i.icon ? (n(), oe(re(i.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : P("", !0),
        u("span", ve, M(i.label), 1),
        i.suffixCaret ? (n(), s("span", ke)) : P("", !0)
      ], 10, be))), 128))
    ], 2));
  }
});
export {
  ge as _,
  we as a
};
