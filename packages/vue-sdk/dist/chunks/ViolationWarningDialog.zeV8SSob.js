import { jsx as o } from "react/jsx-runtime";
import { useState as I, useEffect as O } from "react";
import { useUIKit as T } from "@tencentcloud/uikit-base-component-react";
import "./logger.pnqt7v8K.js";
import { w as d, I as t } from "./layout.Cg64usQg.js";
import { aC as _, bn as p } from "./main-layout.BKiYd7Lp.js";
import { Dialog as C, Button as h } from "tdesign-react";
import { u as E } from "./useAsyncAction.BmoBWVx2.js";
function G({
  className: c = "anchor-avatar",
  name: e,
  src: i,
  title: l
}) {
  const { t: N } = T(), [s, r] = I(""), [n, A] = I(!1);
  O(() => {
    r(i || d), A(!1);
  }, [i]);
  const a = e ? N(t.AVATAR_ALT, { name: e }) : N(t.HOST_AVATAR);
  return !s || n ? /* @__PURE__ */ o("div", { className: c, title: l, "aria-label": a, children: _(e) }) : /* @__PURE__ */ o("div", { className: c, title: l, "aria-label": a, children: /* @__PURE__ */ o(
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
        if (s !== d) {
          r(d);
          return;
        }
        A(!0);
      }
    }
  ) });
}
const W = ({
  visible: c,
  liveId: e = "",
  liveName: i = "",
  onVisibleChange: l,
  onConfirm: N,
  onCancel: s
}) => {
  const { t: r } = T(), { loading: n, execute: A } = E({
    operationName: r(t.VIOLATION_WARNING),
    action: async () => {
      if (!e) throw new Error("liveId is required");
      const m = i || e;
      await p(e, {
        violationType: r(t.VIOLATION_TYPE_WARNING),
        violationContent: r(t.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: m }),
        handleSuggestion: r(t.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    errorMessage: r(t.SEND_FAILED),
    onSuccess: () => {
      N?.({ liveId: e, liveName: i }), a();
    }
  }), a = () => {
    l(!1);
  }, f = () => {
    n || !e || A();
  }, u = () => {
    n || (s?.(), a());
  };
  return /* @__PURE__ */ o(
    C,
    {
      visible: c,
      header: r(t.VIOLATION_WARNING_SEND_CONFIRM),
      confirmBtn: /* @__PURE__ */ o(
        h,
        {
          shape: "round",
          loading: n,
          onClick: f,
          children: r(n ? t.SENDING : t.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ o(
        h,
        {
          variant: "outline",
          shape: "round",
          disabled: n,
          onClick: u,
          children: r(t.CANCEL)
        }
      ),
      onClose: u,
      children: /* @__PURE__ */ o("p", { children: r(t.VIOLATION_WARNING_CONFIRM_CONTENT) })
    }
  );
};
export {
  G as A,
  W as V
};
