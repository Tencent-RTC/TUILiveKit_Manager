import { defineComponent as l, ref as a, onErrorCaptured as s, openBlock as c, createBlock as m, resolveDynamicComponent as p, normalizeProps as u, mergeProps as f, createCommentVNode as i } from "vue";
import { h as d } from "./layout.QDR0rddX.js";
const y = /* @__PURE__ */ l({
  __name: "SlotRenderer",
  props: {
    slotComponent: {
      type: [Object, Function, String],
      default: null
    },
    slotProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const t = d("SlotRenderer"), n = e, o = a(!1);
    return s((r) => n.slotComponent ? (t.error("LiveManager Slot", "render failed:", r), o.value = !0, !1) : !0), (r, C) => e.slotComponent && !o.value ? (c(), m(p(e.slotComponent), u(f({ key: 0 }, e.slotProps)), null, 16)) : i("", !0);
  }
});
export {
  y as _
};
