import { jsx as o } from "react/jsx-runtime";
import i, { isValidElement as l, createElement as s, Component as c } from "react";
import { c as d } from "./logger.DfjyL4S7.js";
const u = d("SlotRenderer");
class m extends c {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    u.error("LiveManager Slot", "render failed:", e);
  }
  render() {
    return this.state.hasError ? this.props.fallback ?? null : this.props.children;
  }
}
function E({
  slot: r,
  props: e,
  fallback: a,
  className: t
}) {
  if (!r) return null;
  const n = l(r) ? i.cloneElement(r, e) : s(r, e);
  return /* @__PURE__ */ o(m, { fallback: a, children: t ? /* @__PURE__ */ o("div", { className: t, children: n }) : n });
}
export {
  E as S
};
