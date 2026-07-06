import { jsx as s, jsxs as W } from "react/jsx-runtime";
import { useRef as h, useState as H, useCallback as re, useMemo as C, useLayoutEffect as I, useEffect as V } from "react";
import { c as ne, D as se, a as ie, b as le, m as oe, d as ce } from "./action-buttons.ChAJrOyM.js";
function ae(r) {
  const l = h(r);
  l.current = r, V(() => {
    const a = () => l.current();
    a();
    const i = new MutationObserver((u) => {
      for (const k of u)
        if (k.type === "attributes" && k.attributeName === "lang") {
          a();
          break;
        }
    });
    return i.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), () => i.disconnect();
  }, []);
}
function de() {
  if (typeof document > "u") return 0;
  const r = document.createElement("div");
  r.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(r);
  const l = r.offsetWidth - r.clientWidth;
  return document.body.removeChild(r), l;
}
function fe(r) {
  return typeof r == "number" ? `${r}px` : r;
}
function he(r, l) {
  return r[l];
}
function me({
  columns: r,
  data: l,
  rowKey: a,
  className: i = "",
  tableClassName: u = "",
  headerClassName: k = "",
  bodyClassName: z = "",
  rowClassName: x = "",
  loading: $ = !1,
  loadingNode: G = null,
  emptyNode: K = null,
  bodyStyle: P,
  fitContent: R = !1,
  fitContentMaxRows: F = se
}) {
  const w = h(null), O = h(null), T = h(null), A = h(null), E = h(null), [_, N] = H({}), S = h({}), [U, X] = H(0);
  ae(() => X((e) => e + 1));
  const f = re((e) => e.fitContent || R && e.width === void 0, [R]), J = C(() => {
    const e = {};
    for (const t of r) {
      let n;
      if (f(t)) {
        const m = _[t.key];
        n = m !== void 0 ? `${m}px` : typeof t.minWidth == "number" ? `${t.minWidth}px` : void 0;
      }
      n === void 0 && (n = fe(t.width)), e[t.key] = { width: n };
    }
    return e;
  }, [r, _, f]), L = C(() => {
    const e = {};
    for (const t of r) {
      const n = { textAlign: t.align };
      t.ellipsis ? (n.whiteSpace = "nowrap", n.overflow = "hidden", n.textOverflow = "ellipsis") : (n.whiteSpace = "normal", n.wordBreak = "break-all", n.overflowWrap = "anywhere"), e[t.key] = n;
    }
    return e;
  }, [r]), j = C(() => ne(r, _, f) ?? {}, [r, _, f]);
  I(() => {
    const e = r.map((o, p) => ({ column: o, index: p })).filter(({ column: o }) => f(o));
    if (e.length === 0 || typeof document > "u") {
      S.current = {}, N((o) => Object.keys(o).length === 0 ? o : {});
      return;
    }
    let t = 0;
    const n = () => {
      const o = T.current?.querySelectorAll("thead th") || [], p = Array.from(E.current?.querySelectorAll("tbody tr") || []).slice(0, F), b = [], d = [];
      e.forEach(({ column: c, index: g }) => {
        const y = o[g];
        y && (b.push(y), d.push(c.key)), p.forEach((te) => {
          const D = te.children[g];
          D && (b.push(D), d.push(c.key));
        });
      });
      const ee = oe(b), v = {};
      ee.forEach((c, g) => {
        const y = d[g];
        (v[y] === void 0 || c > v[y]) && (v[y] = c);
      });
      const M = {};
      for (const { column: c } of e)
        v[c.key] !== void 0 && (M[c.key] = ce(v[c.key], c.minWidth));
      S.current = M;
    }, m = () => {
      const o = S.current;
      if (Object.keys(o).length === 0) {
        N((d) => Object.keys(d).length === 0 ? d : {});
        return;
      }
      const p = A.current?.clientWidth ?? 0, b = ie(
        r,
        o,
        p,
        f
      );
      N((d) => le(d, b) ? d : b);
    }, Z = () => {
      n(), m();
    };
    t = window.requestAnimationFrame(Z);
    const B = new ResizeObserver(() => {
      window.cancelAnimationFrame(t), t = window.requestAnimationFrame(m);
    });
    return w.current && B.observe(w.current), () => {
      window.cancelAnimationFrame(t), B.disconnect();
    };
  }, [r, l, $, R, F, U, f]), I(() => {
    const e = w.current, t = E.current?.parentElement;
    if (!e || !t) return;
    const n = t.scrollHeight > t.clientHeight ? de() : 0;
    e.style.setProperty("--scrollbar-width", `${n}px`);
  }, [l]);
  const q = /* @__PURE__ */ s("colgroup", { children: r.map((e) => /* @__PURE__ */ s("col", { style: J[e.key] }, e.key)) }), Q = (e, t) => {
    if (typeof a == "function") return a(e, t);
    const n = String(e[a]);
    return !n || n === "undefined" ? `row_${t}` : n;
  }, Y = (e, t) => typeof x == "function" ? x(e, t) : x;
  return V(() => {
    const e = O.current, t = A.current;
    if (!e || !t) return;
    const n = () => {
      e && t && (e.scrollLeft = t.scrollLeft);
    };
    return t.addEventListener("scroll", n), () => t.removeEventListener("scroll", n);
  }, []), /* @__PURE__ */ W("div", { ref: w, className: `fixed-header-table ${i}`.trim(), children: [
    /* @__PURE__ */ s("div", { ref: O, className: `fixed-header-table__header ${k}`.trim(), children: /* @__PURE__ */ W(
      "table",
      {
        ref: T,
        className: `fixed-header-table__table ${u}`.trim(),
        style: j,
        children: [
          q,
          /* @__PURE__ */ s("thead", { children: /* @__PURE__ */ s("tr", { children: r.map((e) => /* @__PURE__ */ s("th", { style: L[e.key], children: e.headerRender ? e.headerRender() : e.title }, e.key)) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ s("div", { ref: A, className: `fixed-header-table__body ${z}`.trim(), style: P, children: $ ? /* @__PURE__ */ s("div", { className: "fixed-header-table__loading", children: G }) : l.length === 0 ? /* @__PURE__ */ s("div", { className: "fixed-header-table__empty", children: K }) : /* @__PURE__ */ W(
      "table",
      {
        ref: E,
        className: `fixed-header-table__table ${u}`.trim(),
        style: j,
        children: [
          q,
          /* @__PURE__ */ s("tbody", { children: l.map((e, t) => /* @__PURE__ */ s("tr", { className: Y(e, t), children: r.map((n) => /* @__PURE__ */ s("td", { style: L[n.key], children: n.render ? n.render(e, t) : he(e, n.key) }, n.key)) }, Q(e, t))) })
        ]
      }
    ) })
  ] });
}
function pe({ actions: r, className: l = "", disabled: a = !1 }) {
  return /* @__PURE__ */ s("div", { className: `list-action-buttons ${l}`.trim(), children: r.map((i) => /* @__PURE__ */ W(
    "button",
    {
      type: "button",
      className: `list-action-button${i.danger ? " list-action-button--danger" : ""}`,
      title: i.title,
      disabled: a || i.disabled,
      onClick: (u) => {
        a || i.disabled || i.onClick?.(u);
      },
      children: [
        i.icon && /* @__PURE__ */ s("span", { className: "list-action-button__icon", children: i.icon }),
        /* @__PURE__ */ s("span", { className: "list-action-button__text", children: i.label }),
        i.suffixCaret && /* @__PURE__ */ s("span", { className: "list-action-button__caret", "aria-hidden": "true" })
      ]
    },
    i.key
  )) });
}
export {
  pe as A,
  me as F
};
