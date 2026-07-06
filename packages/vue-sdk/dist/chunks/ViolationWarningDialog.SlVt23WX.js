import { jsx as n } from "react/jsx-runtime";
import { useState as f, useEffect as _ } from "react";
import { useUIKit as T } from "@tencentcloud/uikit-base-component-react";
import "./logger.pnqt7v8K.js";
import { x as I, I as e, a3 as p, a5 as C } from "./layout.BInVXJga.js";
import { aD as S, bn as L } from "./main-layout.7dM7GuCv.js";
import { Dialog as R, Button as h } from "tdesign-react";
import { u as V, M as b } from "./useAsyncAction.DxNHBQrn.js";
function w({
  className: c = "anchor-avatar",
  name: o,
  src: i,
  title: l
}) {
  const { t: N } = T(), [s, r] = f(""), [t, A] = f(!1);
  _(() => {
    r(i || I), A(!1);
  }, [i]);
  const a = o ? N(e.AVATAR_ALT, { name: o }) : N(e.HOST_AVATAR);
  return !s || t ? /* @__PURE__ */ n("div", { className: c, title: l, "aria-label": a, children: S(o) }) : /* @__PURE__ */ n("div", { className: c, title: l, "aria-label": a, children: /* @__PURE__ */ n(
    "img",
    {
      src: s,
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
        if (s !== I) {
          r(I);
          return;
        }
        A(!0);
      }
    }
  ) });
}
const y = ({
  visible: c,
  liveId: o = "",
  liveName: i = "",
  onVisibleChange: l,
  onConfirm: N,
  onCancel: s
}) => {
  const { t: r } = T(), { loading: t, execute: A } = V({
    operationName: r(e.VIOLATION_WARNING),
    action: async () => {
      if (!o) throw new Error("liveId is required");
      const d = i || o;
      await L(o, {
        violationType: r(e.VIOLATION_TYPE_WARNING),
        violationContent: r(e.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: d }),
        handleSuggestion: r(e.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    errorMessage: r(e.SEND_FAILED),
    onSuccess: () => {
      N?.({ liveId: o, liveName: i }), a();
    },
    onError: (d) => {
      const { code: g, info: E } = p(d), O = C(g, E, d.message || r(e.SEND_FAILED));
      b.error(O);
    }
  }), a = () => {
    l(!1);
  }, m = () => {
    t || !o || A();
  }, u = () => {
    t || (s?.(), a());
  };
  return /* @__PURE__ */ n(
    R,
    {
      visible: c,
      header: r(e.VIOLATION_WARNING_SEND_CONFIRM),
      confirmBtn: /* @__PURE__ */ n(
        h,
        {
          shape: "round",
          loading: t,
          onClick: m,
          children: r(t ? e.SENDING : e.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ n(
        h,
        {
          variant: "outline",
          shape: "round",
          disabled: t,
          onClick: u,
          children: r(e.CANCEL)
        }
      ),
      onClose: u,
      children: /* @__PURE__ */ n("p", { children: r(e.VIOLATION_WARNING_CONFIRM_CONTENT) })
    }
  );
};
export {
  w as A,
  y as V
};
