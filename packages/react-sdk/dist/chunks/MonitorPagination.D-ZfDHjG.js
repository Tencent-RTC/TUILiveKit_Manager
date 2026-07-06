import { jsxs as x, jsx as o } from "react/jsx-runtime";
import "./logger.D3BLOWQd.js";
import { I } from "./layout.Cu9hOH0i.js";
import "./main-layout.C2kPbZH0.js";
import { useUIKit as f } from "@tencentcloud/uikit-base-component-react";
import { Button as t } from "tdesign-react";
import { PageFirstIcon as b, ChevronLeftIcon as h, ChevronRightIcon as C } from "tdesign-icons-react";
const a = { size: 20 }, D = ({
  currentPage: n,
  hasMoreData: c,
  loading: s,
  onPrevPage: m,
  onNextPage: p,
  onGoToFirstPage: l
}) => {
  const { t: d } = f(), i = n <= 1 || s, r = !c || s, e = { ...a, color: i ? "#999" : "#000" }, v = { ...a, color: r ? "#999" : "#000" };
  return /* @__PURE__ */ x("div", { className: "live-monitor-pagination", children: [
    /* @__PURE__ */ o(
      t,
      {
        variant: "text",
        icon: /* @__PURE__ */ o(b, { ...e }),
        disabled: i,
        onClick: l
      }
    ),
    /* @__PURE__ */ o(
      t,
      {
        variant: "text",
        icon: /* @__PURE__ */ o(h, { ...e }),
        disabled: i,
        onClick: m
      }
    ),
    /* @__PURE__ */ o("span", { className: "page-info", children: d(I.PAGE, { page: n }) }),
    /* @__PURE__ */ o(
      t,
      {
        variant: "text",
        icon: /* @__PURE__ */ o(C, { ...v }),
        disabled: r,
        onClick: p
      }
    )
  ] });
};
export {
  D as M
};
