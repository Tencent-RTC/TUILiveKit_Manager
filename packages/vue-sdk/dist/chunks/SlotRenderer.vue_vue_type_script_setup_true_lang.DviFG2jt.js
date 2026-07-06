import { defineComponent as n, ref as l, onErrorCaptured as s, openBlock as a, createBlock as c, resolveDynamicComponent as u, normalizeProps as m, mergeProps as p, createCommentVNode as f } from "vue";
const C = /* @__PURE__ */ n({
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
    const r = e, o = l(!1);
    return s((t) => r.slotComponent ? (console.error("[LiveManager Slot] render failed:", t), o.value = !0, !1) : !0), (t, i) => e.slotComponent && !o.value ? (a(), c(u(e.slotComponent), m(p({ key: 0 }, e.slotProps)), null, 16)) : f("", !0);
  }
});
export {
  C as _
};
