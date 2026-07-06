import { jsx as i, jsxs as _ } from "react/jsx-runtime";
import { useRef as h, useState as H, useCallback as re, useMemo as C, useLayoutEffect as I, useEffect as V } from "react";
import { c as ne, D as se, b as ie, d as le, m as ce, a as oe } from "./action-buttons.CvtTFRpa.js";
function ae(r) {
  const l = h(r);
  l.current = r, V(() => {
    const s = () => l.current();
    s();
    const p = new MutationObserver((v) => {
      for (const k of v)
        if (k.type === "attributes" && k.attributeName === "lang") {
          s();
          break;
        }
    });
    return p.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), () => p.disconnect();
  }, []);
}
function de() {
  if (typeof document > "u") return 0;
  const r = document.createElement("div");
  r.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(r);
  const l = r.offsetWidth - r.clientWidth;
  return document.body.removeChild(r), l;
}
function he(r) {
  return typeof r == "number" ? `${r}px` : r;
}
function fe(r, l) {
  return r[l];
}
function me({
  columns: r,
  data: l,
  rowKey: s,
  className: p = "",
  tableClassName: v = "",
  headerClassName: k = "",
  bodyClassName: z = "",
  rowClassName: w = "",
  loading: F = !1,
  loadingNode: G = null,
  emptyNode: P = null,
  bodyStyle: U,
  fitContent: N = !1,
  fitContentMaxRows: $ = se
}) {
  const x = h(null), O = h(null), T = h(null), R = h(null), A = h(null), [g, E] = H({}), S = h({}), [X, J] = H(0);
  ae(() => J((e) => e + 1));
  const a = re((e) => e.fitContent || N && e.width === void 0, [N]), K = C(() => {
    const e = {};
    for (const t of r) {
      let n;
      if (a(t)) {
        const b = g[t.key];
        n = b !== void 0 ? `${b}px` : typeof t.minWidth == "number" ? `${t.minWidth}px` : void 0;
      }
      n === void 0 && (n = he(t.width)), e[t.key] = { width: n };
    }
    return e;
  }, [r, g, a]), L = C(() => {
    const e = {};
    for (const t of r) {
      const n = { textAlign: t.align };
      t.ellipsis ? (n.whiteSpace = "nowrap", n.overflow = "hidden", n.textOverflow = "ellipsis") : a(t) && !t.flexible && (n.whiteSpace = "nowrap"), e[t.key] = n;
    }
    return e;
  }, [r, a]), j = C(() => ne(r, g, a) ?? {}, [r, g, a]);
  I(() => {
    const e = r.map((c, y) => ({ column: c, index: y })).filter(({ column: c }) => a(c));
    if (e.length === 0 || typeof document > "u") {
      S.current = {}, E((c) => Object.keys(c).length === 0 ? c : {});
      return;
    }
    let t = 0;
    const n = () => {
      const c = T.current?.querySelectorAll("thead th") || [], y = Array.from(A.current?.querySelectorAll("tbody tr") || []).slice(0, $), f = [], d = [];
      e.forEach(({ column: o, index: W }) => {
        const u = c[W];
        u && (f.push(u), d.push(o.key)), y.forEach((te) => {
          const D = te.children[W];
          D && (f.push(D), d.push(o.key));
        });
      });
      const ee = ce(f), m = {};
      ee.forEach((o, W) => {
        const u = d[W];
        (m[u] === void 0 || o > m[u]) && (m[u] = o);
      });
      const B = {};
      for (const { column: o } of e)
        m[o.key] !== void 0 && (B[o.key] = oe(m[o.key], o.minWidth, o.maxWidth));
      S.current = B;
    }, b = () => {
      const c = S.current;
      if (Object.keys(c).length === 0) {
        E((d) => Object.keys(d).length === 0 ? d : {});
        return;
      }
      const y = R.current?.clientWidth ?? 0, f = ie(
        r,
        c,
        y,
        a
      );
      E((d) => le(d, f) ? d : f);
    }, Z = () => {
      n(), b();
    };
    t = window.requestAnimationFrame(Z);
    const M = new ResizeObserver(() => {
      window.cancelAnimationFrame(t), t = window.requestAnimationFrame(b);
    });
    return x.current && M.observe(x.current), () => {
      window.cancelAnimationFrame(t), M.disconnect();
    };
  }, [r, l, F, N, $, X, a]), I(() => {
    const e = x.current, t = A.current?.parentElement;
    if (!e || !t) return;
    const n = t.scrollHeight > t.clientHeight ? de() : 0;
    e.style.setProperty("--scrollbar-width", `${n}px`);
  }, [l]);
  const q = /* @__PURE__ */ i("colgroup", { children: r.map((e) => /* @__PURE__ */ i("col", { style: K[e.key] }, e.key)) }), Q = (e, t) => typeof s == "function" ? s(e, t) : String(e[s]), Y = (e, t) => typeof w == "function" ? w(e, t) : w;
  return V(() => {
    const e = O.current, t = R.current;
    if (!e || !t) return;
    const n = () => {
      e && t && (e.scrollLeft = t.scrollLeft);
    };
    return t.addEventListener("scroll", n), () => t.removeEventListener("scroll", n);
  }, []), /* @__PURE__ */ _("div", { ref: x, className: `fixed-header-table ${p}`.trim(), children: [
    /* @__PURE__ */ i("div", { ref: O, className: `fixed-header-table__header ${k}`.trim(), children: /* @__PURE__ */ _(
      "table",
      {
        ref: T,
        className: `fixed-header-table__table ${v}`.trim(),
        style: j,
        children: [
          q,
          /* @__PURE__ */ i("thead", { children: /* @__PURE__ */ i("tr", { children: r.map((e) => /* @__PURE__ */ i("th", { className: e.className, style: L[e.key], children: e.headerRender ? e.headerRender() : e.title }, e.key)) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ i("div", { ref: R, className: `fixed-header-table__body ${z}`.trim(), style: U, children: F ? /* @__PURE__ */ i("div", { className: "fixed-header-table__loading", children: G }) : l.length === 0 ? /* @__PURE__ */ i("div", { className: "fixed-header-table__empty", children: P }) : /* @__PURE__ */ _(
      "table",
      {
        ref: A,
        className: `fixed-header-table__table ${v}`.trim(),
        style: j,
        children: [
          q,
          /* @__PURE__ */ i("tbody", { children: l.map((e, t) => /* @__PURE__ */ i("tr", { className: Y(e, t), children: r.map((n) => /* @__PURE__ */ i("td", { className: n.className, style: L[n.key], children: n.render ? n.render(e, t) : fe(e, n.key) }, n.key)) }, Q(e, t))) })
        ]
      }
    ) })
  ] });
}
function pe({ actions: r, className: l = "" }) {
  return /* @__PURE__ */ i("div", { className: `list-action-buttons ${l}`.trim(), children: r.map((s) => /* @__PURE__ */ _(
    "button",
    {
      type: "button",
      className: `list-action-button${s.danger ? " list-action-button--danger" : ""}`,
      title: s.title,
      disabled: s.disabled,
      onClick: s.onClick,
      children: [
        s.icon && /* @__PURE__ */ i("span", { className: "list-action-button__icon", children: s.icon }),
        /* @__PURE__ */ i("span", { className: "list-action-button__text", children: s.label }),
        s.suffixCaret && /* @__PURE__ */ i("span", { className: "list-action-button__caret", "aria-hidden": "true" })
      ]
    },
    s.key
  )) });
}
export {
  pe as A,
  me as F
};
