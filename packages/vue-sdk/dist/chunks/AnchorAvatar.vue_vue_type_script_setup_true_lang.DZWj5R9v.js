import { defineComponent as h, resolveComponent as A, openBlock as u, createBlock as C, unref as a, withCtx as g, createElementVNode as E, toDisplayString as p, ref as f, computed as _, watch as T, createElementBlock as d, normalizeClass as O } from "vue";
import { useUIKit as k } from "@tencentcloud/uikit-base-component-vue3";
import { u as x } from "./useAsyncAction.7PfPeQds.js";
import "./logger.pnqt7v8K.js";
import { I as n, w as m } from "./layout.Cg64usQg.js";
import { bn as S, aC as w } from "./main-layout.BKiYd7Lp.js";
const U = /* @__PURE__ */ h({
  __name: "ViolationWarningDialog",
  props: {
    visible: { type: Boolean },
    liveId: { default: "" },
    liveName: { default: "" }
  },
  emits: ["update:visible", "confirm", "cancel"],
  setup(o, { emit: r }) {
    const e = o, l = r, { t } = k(), s = () => {
      l("update:visible", !1);
    }, { loading: i, execute: c } = x({
      action: async () => {
        if (!e.liveId) throw new Error("liveId is required");
        const I = e.liveName || e.liveId;
        await S(e.liveId, {
          violationType: t(n.VIOLATION_TYPE_WARNING),
          violationContent: t(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: I }),
          handleSuggestion: t(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      errorMessage: t(n.SEND_FAILED),
      onSuccess: () => {
        l("confirm", { liveId: e.liveId, liveName: e.liveName }), s();
      }
    }), v = () => {
      i.value || !e.liveId || c();
    }, N = () => {
      i.value || (l("cancel"), s());
    };
    return (I, R) => {
      const b = A("t-dialog");
      return u(), C(b, {
        visible: o.visible,
        header: a(t)(a(n).VIOLATION_WARNING_SEND_CONFIRM),
        "confirm-btn": {
          content: a(i) ? a(t)(a(n).SENDING) : a(t)(a(n).CONFIRM),
          loading: a(i),
          shape: "round"
        },
        "cancel-btn": {
          content: a(t)(a(n).CANCEL),
          disabled: a(i),
          shape: "round"
        },
        onConfirm: v,
        onCancel: N,
        onClose: N
      }, {
        default: g(() => [
          E("p", null, p(a(t)(a(n).VIOLATION_WARNING_CONFIRM_CONTENT)), 1)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
}), y = ["title", "aria-label"], L = ["src", "alt"], G = {
  key: 1,
  class: "avatar-fallback"
}, P = /* @__PURE__ */ h({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(o) {
    const r = o, e = f(""), l = f(!1), t = _(() => r.name ? `${r.name}头像` : "主播头像"), s = _(() => w(r.name));
    T(() => r.src, (c) => {
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
      class: O(o.className),
      title: o.title,
      "aria-label": t.value
    }, [
      e.value && !l.value ? (u(), d("img", {
        key: 0,
        src: e.value,
        alt: t.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: i
      }, null, 40, L)) : (u(), d("span", G, p(s.value), 1))
    ], 10, y));
  }
});
export {
  P as _,
  U as a
};
