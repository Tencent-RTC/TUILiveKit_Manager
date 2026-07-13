import { jsx as e } from "react/jsx-runtime";
import { useState as h, useEffect as A } from "react";
import { useUIKit as d } from "@tencentcloud/uikit-base-component-react";
import "./logger.BVGT9iyh.js";
import { X as i, V as u } from "./layout.CDdU53J3.js";
import { c as b } from "./main-layout.D1Nd74n1.js";
function k({
  className: o = "anchor-avatar",
  name: r,
  src: l,
  title: c
}) {
  const { t: s } = d(), [t, n] = h(""), [m, f] = h(!1);
  A(() => {
    n(l || i), f(!1);
  }, [l]);
  const a = r ? s(u.AVATAR_ALT, { name: r }) : s(u.HOST_AVATAR);
  return !t || m ? /* @__PURE__ */ e("div", { className: o, title: c, "aria-label": a, children: b(r) }) : /* @__PURE__ */ e("div", { className: o, title: c, "aria-label": a, children: /* @__PURE__ */ e(
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
        if (t !== i) {
          n(i);
          return;
        }
        f(!0);
      }
    }
  ) });
}
export {
  k as A
};
