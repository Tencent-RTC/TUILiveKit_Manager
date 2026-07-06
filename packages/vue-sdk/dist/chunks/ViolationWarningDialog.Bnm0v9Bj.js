import { jsx as o } from "react/jsx-runtime";
import { useState as I, useEffect as O } from "react";
import { useUIKit as f } from "@tencentcloud/uikit-base-component-react";
import "./logger.DRLw23-l.js";
import { v as d, I as r } from "./layout.C535EJPV.js";
import { aC as _, bn as E } from "./main-layout.Dtg_jOYA.js";
import { Dialog as g, Button as h } from "tdesign-react";
import { u as C } from "./useAsyncAction.C0qrahtw.js";
function G({
  className: c = "anchor-avatar",
  name: e,
  src: i,
  title: l
}) {
  const { t: N } = f(), [s, t] = I(""), [n, u] = I(!1);
  O(() => {
    t(i || d), u(!1);
  }, [i]);
  const a = e ? N("Avatar Alt", { name: e }) : N("Host Avatar");
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
          t(d);
          return;
        }
        u(!0);
      }
    }
  ) });
}
const V = ({
  visible: c,
  liveId: e = "",
  liveName: i = "",
  onVisibleChange: l,
  onConfirm: N,
  onCancel: s
}) => {
  const { t } = f(), { loading: n, execute: u } = C({
    action: async () => {
      if (!e) throw new Error("liveId is required");
      const m = i || e;
      await E(e, {
        violationType: t(r.VIOLATION_TYPE_WARNING),
        violationContent: t(r.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: m }),
        handleSuggestion: t(r.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    successMessage: t(r.VIOLATION_WARNING_SENT),
    errorMessage: t(r.SEND_FAILED),
    onSuccess: () => {
      N?.({ liveId: e, liveName: i }), a();
    }
  }), a = () => {
    l(!1);
  }, T = () => {
    n || !e || u();
  }, A = () => {
    n || (s?.(), a());
  };
  return /* @__PURE__ */ o(
    g,
    {
      visible: c,
      header: t(r.VIOLATION_WARNING_SEND_CONFIRM),
      confirmBtn: /* @__PURE__ */ o(
        h,
        {
          shape: "round",
          loading: n,
          onClick: T,
          children: t(n ? r.SENDING : r.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ o(
        h,
        {
          variant: "outline",
          shape: "round",
          disabled: n,
          onClick: A,
          children: t(r.CANCEL)
        }
      ),
      onClose: A,
      children: /* @__PURE__ */ o("p", { children: t(r.VIOLATION_WARNING_CONFIRM_CONTENT) })
    }
  );
};
export {
  G as A,
  V
};
