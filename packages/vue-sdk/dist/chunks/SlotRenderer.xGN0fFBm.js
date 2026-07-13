import { jsx as o } from "react/jsx-runtime";
import i, { isValidElement as l, createElement as s, Component as c } from "react";
class d extends c {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    console.error("[LiveManager Slot] render failed:", e);
  }
  render() {
    return this.state.hasError ? this.props.fallback ?? null : this.props.children;
  }
}
function m({
  slot: r,
  props: e,
  fallback: a,
  className: t
}) {
  if (!r) return null;
  const n = l(r) ? i.cloneElement(r, e) : s(r, e);
  return /* @__PURE__ */ o(d, { fallback: a, children: t ? /* @__PURE__ */ o("div", { className: t, children: n }) : n });
}
export {
  m as S
};
