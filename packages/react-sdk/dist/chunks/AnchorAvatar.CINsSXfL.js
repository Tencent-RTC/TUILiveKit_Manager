import { jsx as e } from "react/jsx-runtime";
import { useState as h, useEffect as d } from "react";
import { useUIKit as m } from "@tencentcloud/uikit-base-component-react";
import { ao as o, I as u } from "./layout.C3iw4hOH.js";
import { c as b } from "./main-layout.DQ5q1GCZ.js";
function g({
  className: i = "anchor-avatar",
  name: r,
  src: l,
  title: c
}) {
  const { t: s } = m(), [t, n] = h(""), [A, f] = h(!1);
  d(() => {
    n(l || o), f(!1);
  }, [l]);
  const a = r ? s(u.AVATAR_ALT, { name: r }) : s(u.HOST_AVATAR);
  return !t || A ? /* @__PURE__ */ e("div", { className: i, title: c, "aria-label": a, children: b(r) }) : /* @__PURE__ */ e("div", { className: i, title: c, "aria-label": a, children: /* @__PURE__ */ e(
    "img",
    {
      src: t,
      alt: a,
      style: {
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        display: "block",
        objectFit: "cover",
        borderRadius: "inherit"
      },
      onError: () => {
        if (t !== o) {
          n(o);
          return;
        }
        f(!0);
      }
    }
  ) });
}
export {
  g as A
};
