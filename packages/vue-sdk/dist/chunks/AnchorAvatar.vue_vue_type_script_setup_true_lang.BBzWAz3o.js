import { defineComponent as f, ref as n, computed as u, watch as v, openBlock as r, createElementBlock as s, normalizeClass as h, toDisplayString as p } from "vue";
import "./logger.pnqt7v8K.js";
import { T as c } from "./layout.xMYH3d3a.js";
import { c as b } from "./main-layout.Bwa83IG1.js";
const k = ["title", "aria-label"], _ = ["src", "alt"], g = {
  key: 1,
  class: "avatar-fallback"
}, I = /* @__PURE__ */ f({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(t) {
    const e = t, a = n(""), l = n(!1), o = u(() => e.name ? `${e.name}头像` : "主播头像"), m = u(() => b(e.name));
    v(() => e.src, (i) => {
      a.value = i || c, l.value = !1;
    }, { immediate: !0 });
    const d = () => {
      if (a.value !== c) {
        a.value = c;
        return;
      }
      l.value = !0;
    };
    return (i, x) => (r(), s("div", {
      class: h(t.className),
      title: t.title,
      "aria-label": o.value
    }, [
      a.value && !l.value ? (r(), s("img", {
        key: 0,
        src: a.value,
        alt: o.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: d
      }, null, 40, _)) : (r(), s("span", g, p(m.value), 1))
    ], 10, k));
  }
});
export {
  I as _
};
