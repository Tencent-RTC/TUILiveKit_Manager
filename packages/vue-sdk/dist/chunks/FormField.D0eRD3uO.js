import { jsx as l, jsxs as m } from "react/jsx-runtime";
import d from "react";
function s({
  label: r,
  labelWidth: i = 100,
  requiredMark: n = !1,
  help: o,
  children: e,
  style: f,
  className: a
}) {
  return /* @__PURE__ */ m("div", { className: `form-field${a ? ` ${a}` : ""}`, style: f, children: [
    r !== void 0 && /* @__PURE__ */ l("div", { className: "form-field__label", style: { width: i, minWidth: i }, children: /* @__PURE__ */ m("label", { children: [
      n && /* @__PURE__ */ l("span", { className: "form-field__required", children: "*" }),
      r
    ] }) }),
    /* @__PURE__ */ m("div", { className: "form-field__content", children: [
      /* @__PURE__ */ l("div", { className: "form-field__controls", children: e }),
      o && /* @__PURE__ */ l("div", { className: "form-field__help", children: o })
    ] })
  ] });
}
function _({ children: r, labelWidth: i, className: n, style: o }) {
  return /* @__PURE__ */ l("div", { className: `form-layout${n ? ` ${n}` : ""}`, style: o, children: i ? d.Children.map(r, (e) => d.isValidElement(e) && e.type === s ? d.cloneElement(e, { labelWidth: i }) : e) : r });
}
export {
  _ as F,
  s as a
};
