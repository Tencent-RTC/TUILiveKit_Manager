import { defineComponent as h, computed as t, resolveComponent as x, openBlock as b, createElementBlock as f, createVNode as e, withCtx as r, unref as l, createElementVNode as C, toDisplayString as I } from "vue";
import { useUIKit as k } from "@tencentcloud/uikit-base-component-vue3";
import { PageFirstIcon as D, ChevronLeftIcon as N, ChevronRightIcon as B } from "tdesign-icons-vue-next";
import { I as F } from "./shared-state.Bf8CkvaR.js";
import "./main-layout.OEkSp6vd.js";
const T = { class: "live-monitor-pagination" }, y = { class: "page-info" }, K = /* @__PURE__ */ h({
  __name: "MonitorPagination",
  props: {
    currentPage: {},
    hasMoreData: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["goToFirstPage", "prevPage", "nextPage"],
  setup(d, { emit: p }) {
    const o = d, n = p, { t: g } = k(), a = t(() => o.currentPage <= 1 || o.loading), s = t(() => !o.hasMoreData || o.loading), c = t(() => a.value ? "#999" : "#000"), u = t(() => s.value ? "#999" : "#000"), v = t(() => g(F.PAGE, { page: o.currentPage })), m = () => n("goToFirstPage"), P = () => n("prevPage"), _ = () => n("nextPage");
    return (z, E) => {
      const i = x("t-button");
      return b(), f("div", T, [
        e(i, {
          variant: "text",
          disabled: a.value,
          onClick: m
        }, {
          icon: r(() => [
            e(l(D), {
              size: 20,
              color: c.value
            }, null, 8, ["color"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        e(i, {
          variant: "text",
          disabled: a.value,
          onClick: P
        }, {
          icon: r(() => [
            e(l(N), {
              size: 20,
              color: c.value
            }, null, 8, ["color"])
          ]),
          _: 1
        }, 8, ["disabled"]),
        C("span", y, I(v.value), 1),
        e(i, {
          variant: "text",
          disabled: s.value,
          onClick: _
        }, {
          icon: r(() => [
            e(l(B), {
              size: 20,
              color: u.value
            }, null, 8, ["color"])
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
});
export {
  K as _
};
