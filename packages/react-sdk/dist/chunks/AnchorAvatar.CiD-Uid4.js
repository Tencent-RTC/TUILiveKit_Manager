import { jsx as e } from "react/jsx-runtime";
import { useState as h, useEffect as d } from "react";
import { useUIKit as m } from "@tencentcloud/uikit-base-component-react";
import { as as i, I as u } from "./shared-state.Bf8CkvaR.js";
import { c as b } from "./main-layout.OEkSp6vd.js";
function g({
  className: o = "anchor-avatar",
  name: r,
  src: l,
  title: c
}) {
  const { t: s } = m(), [t, n] = h(""), [A, f] = h(!1);
  d(() => {
    n(l || i), f(!1);
  }, [l]);
  const a = r ? s(u.AVATAR_ALT, { name: r }) : s(u.HOST_AVATAR);
  return !t || A ? /* @__PURE__ */ e("div", { className: o, title: c, "aria-label": a, children: b(r) }) : /* @__PURE__ */ e("div", { className: o, title: c, "aria-label": a, children: /* @__PURE__ */ e(
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
  g as A
};
