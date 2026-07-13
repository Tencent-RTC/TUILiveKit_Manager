import { defineComponent as h, computed as t, resolveComponent as x, openBlock as b, createElementBlock as f, createVNode as e, withCtx as r, unref as l, createElementVNode as C, toDisplayString as I } from "vue";
import { useUIKit as k } from "@tencentcloud/uikit-base-component-vue3";
import { PageFirstIcon as D, ChevronLeftIcon as N, ChevronRightIcon as B } from "tdesign-icons-vue-next";
import "./logger.BVGT9iyh.js";
import { I as F } from "./layout.DpmHfGro.js";
import "./main-layout.CAk7EHcz.js";
const T = { class: "live-monitor-pagination" }, y = { class: "page-info" }, L = /* @__PURE__ */ h({
  __name: "MonitorPagination",
  props: {
    currentPage: {},
    hasMoreData: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["goToFirstPage", "prevPage", "nextPage"],
  setup(p, { emit: d }) {
    const o = p, n = d, { t: g } = k(), a = t(() => o.currentPage <= 1 || o.loading), s = t(() => !o.hasMoreData || o.loading), c = t(() => a.value ? "#999" : "#000"), u = t(() => s.value ? "#999" : "#000"), m = t(() => g(F.PAGE, { page: o.currentPage })), v = () => n("goToFirstPage"), P = () => n("prevPage"), _ = () => n("nextPage");
    return (z, E) => {
      const i = x("t-button");
      return b(), f("div", T, [
        e(i, {
          variant: "text",
          disabled: a.value,
          onClick: v
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
        C("span", y, I(m.value), 1),
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
  L as _
};
