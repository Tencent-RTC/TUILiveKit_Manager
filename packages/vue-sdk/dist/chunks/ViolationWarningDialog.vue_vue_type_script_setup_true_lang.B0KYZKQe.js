import { defineComponent as h, ref as f, computed as _, watch as b, openBlock as u, createElementBlock as d, normalizeClass as T, toDisplayString as p, resolveComponent as g, createBlock as E, unref as t, withCtx as O, createElementVNode as C } from "vue";
import { a9 as m, I as n } from "./en-US.BT81VsgK.js";
import { a1 as S } from "./main-layout.qKCc3UXK.js";
import { useUIKit as k } from "@tencentcloud/uikit-base-component-vue3";
import { u as x } from "./useAsyncAction.CHpiKBD_.js";
import { c as L } from "./LiveMonitorCore.CegVg34F.js";
const y = ["title", "aria-label"], G = ["src", "alt"], R = {
  key: 1,
  class: "avatar-fallback"
}, U = /* @__PURE__ */ h({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(o) {
    const s = o, e = f(""), l = f(!1), a = _(() => s.name ? `${s.name}头像` : "主播头像"), r = _(() => S(s.name));
    b(() => s.src, (c) => {
      e.value = c || m, l.value = !1;
    }, { immediate: !0 });
    const i = () => {
      if (e.value !== m) {
        e.value = m;
        return;
      }
      l.value = !0;
    };
    return (c, v) => (u(), d("div", {
      class: T(o.className),
      title: o.title,
      "aria-label": a.value
    }, [
      e.value && !l.value ? (u(), d("img", {
        key: 0,
        src: e.value,
        alt: a.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: i
      }, null, 40, G)) : (u(), d("span", R, p(r.value), 1))
    ], 10, y));
  }
}), P = /* @__PURE__ */ h({
  __name: "ViolationWarningDialog",
  props: {
    visible: { type: Boolean },
    liveId: { default: "" },
    liveName: { default: "" }
  },
  emits: ["update:visible", "confirm", "cancel"],
  setup(o, { emit: s }) {
    const e = o, l = s, { t: a } = k(), r = () => {
      l("update:visible", !1);
    }, { loading: i, execute: c } = x({
      action: async () => {
        if (!e.liveId) throw new Error("liveId is required");
        const I = e.liveName || e.liveId;
        await L(e.liveId, {
          violationType: a(n.VIOLATION_TYPE_WARNING),
          violationContent: a(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: I }),
          handleSuggestion: a(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      successMessage: a(n.VIOLATION_WARNING_SENT),
      errorMessage: a(n.SEND_FAILED),
      onSuccess: () => {
        l("confirm", { liveId: e.liveId, liveName: e.liveName }), r();
      }
    }), v = () => {
      i.value || !e.liveId || c();
    }, N = () => {
      i.value || (l("cancel"), r());
    };
    return (I, V) => {
      const A = g("t-dialog");
      return u(), E(A, {
        visible: o.visible,
        header: t(a)(t(n).VIOLATION_WARNING_SEND_CONFIRM),
        "confirm-btn": {
          content: t(i) ? t(a)(t(n).SENDING) : t(a)(t(n).CONFIRM),
          loading: t(i),
          shape: "round"
        },
        "cancel-btn": {
          content: t(a)(t(n).CANCEL),
          disabled: t(i),
          shape: "round"
        },
        onConfirm: v,
        onCancel: N,
        onClose: N
      }, {
        default: O(() => [
          C("p", null, p(t(a)(t(n).VIOLATION_WARNING_CONFIRM_CONTENT)), 1)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
});
export {
  U as _,
  P as a
};
