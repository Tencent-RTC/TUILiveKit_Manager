import { defineComponent as p, resolveComponent as E, openBlock as m, createBlock as g, unref as t, withCtx as A, createElementVNode as C, toDisplayString as h, ref as f, computed as _, watch as T, createElementBlock as u, normalizeClass as O } from "vue";
import { useUIKit as x } from "@tencentcloud/uikit-base-component-vue3";
import { MessagePlugin as S } from "tdesign-vue-next";
import { u as k } from "./useAsyncAction.Bpo66Dzi.js";
import "./logger.pnqt7v8K.js";
import { v as y, I as n, x as d } from "./layout.BInVXJga.js";
import { bn as D, aD as G } from "./main-layout.7dM7GuCv.js";
const j = /* @__PURE__ */ p({
  __name: "ViolationWarningDialog",
  props: {
    visible: { type: Boolean },
    liveId: { default: "" },
    liveName: { default: "" }
  },
  emits: ["update:visible", "confirm", "cancel"],
  setup(i, { emit: r }) {
    const a = i, l = r, { t: e } = x(), s = () => {
      l("update:visible", !1);
    }, { loading: o, execute: c } = k({
      operationName: e(n.SENDING),
      action: async () => {
        if (!a.liveId) throw new Error("liveId is required");
        const I = a.liveName || a.liveId;
        await D(a.liveId, {
          violationType: e(n.VIOLATION_TYPE_WARNING),
          violationContent: e(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: I }),
          handleSuggestion: e(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      errorMessage: e(n.SEND_FAILED),
      onSuccess: () => {
        l("confirm", { liveId: a.liveId, liveName: a.liveName }), s();
      },
      onError: y(e, S.error)
    }), v = () => {
      o.value || !a.liveId || c();
    }, N = () => {
      o.value || (l("cancel"), s());
    };
    return (I, V) => {
      const b = E("t-dialog");
      return m(), g(b, {
        visible: i.visible,
        header: t(e)(t(n).VIOLATION_WARNING_SEND_CONFIRM),
        "confirm-btn": {
          content: t(o) ? t(e)(t(n).SENDING) : t(e)(t(n).CONFIRM),
          loading: t(o),
          shape: "round"
        },
        "cancel-btn": {
          content: t(e)(t(n).CANCEL),
          disabled: t(o),
          shape: "round"
        },
        onConfirm: v,
        onCancel: N,
        onClose: N
      }, {
        default: A(() => [
          C("p", null, h(t(e)(t(n).VIOLATION_WARNING_CONFIRM_CONTENT)), 1)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
}), L = ["title", "aria-label"], w = ["src", "alt"], R = {
  key: 1,
  class: "avatar-fallback"
}, q = /* @__PURE__ */ p({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(i) {
    const r = i, a = f(""), l = f(!1), e = _(() => r.name ? `${r.name}头像` : "主播头像"), s = _(() => G(r.name));
    T(() => r.src, (c) => {
      a.value = c || d, l.value = !1;
    }, { immediate: !0 });
    const o = () => {
      if (a.value !== d) {
        a.value = d;
        return;
      }
      l.value = !0;
    };
    return (c, v) => (m(), u("div", {
      class: O(i.className),
      title: i.title,
      "aria-label": e.value
    }, [
      a.value && !l.value ? (m(), u("img", {
        key: 0,
        src: a.value,
        alt: e.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: o
      }, null, 40, w)) : (m(), u("span", R, h(s.value), 1))
    ], 10, L));
  }
});
export {
  q as _,
  j as a
};
