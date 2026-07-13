import { jsx as n } from "react/jsx-runtime";
import { Dialog as O, Button as I } from "tdesign-react";
import { useUIKit as f } from "@tencentcloud/uikit-base-component-react";
import { u as _ } from "./useAsyncAction.DlQYyzbJ.js";
import "./logger.DfjyL4S7.js";
import { Z as r, af as d } from "./error-message.BVYzOzgW.js";
import { bc as E, at as g } from "./main-layout.DNAtZmGx.js";
import { useState as h, useEffect as p } from "react";
const G = ({
  visible: c,
  liveId: e = "",
  liveName: i = "",
  onVisibleChange: l,
  onConfirm: N,
  onCancel: s
}) => {
  const { t } = f(), { loading: o, execute: u } = _({
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
    o || !e || u();
  }, A = () => {
    o || (s?.(), a());
  };
  return /* @__PURE__ */ n(
    O,
    {
      visible: c,
      header: t(r.VIOLATION_WARNING_SEND_CONFIRM),
      confirmBtn: /* @__PURE__ */ n(
        I,
        {
          shape: "round",
          loading: o,
          onClick: T,
          children: t(o ? r.SENDING : r.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ n(
        I,
        {
          variant: "outline",
          shape: "round",
          disabled: o,
          onClick: A,
          children: t(r.CANCEL)
        }
      ),
      onClose: A,
      children: /* @__PURE__ */ n("p", { children: t(r.VIOLATION_WARNING_CONFIRM_CONTENT) })
    }
  );
};
function V({
  className: c = "anchor-avatar",
  name: e,
  src: i,
  title: l
}) {
  const { t: N } = f(), [s, t] = h(""), [o, u] = h(!1);
  p(() => {
    t(i || d), u(!1);
  }, [i]);
  const a = e ? N("Avatar Alt", { name: e }) : N("Host Avatar");
  return !s || o ? /* @__PURE__ */ n("div", { className: c, title: l, "aria-label": a, children: g(e) }) : /* @__PURE__ */ n("div", { className: c, title: l, "aria-label": a, children: /* @__PURE__ */ n(
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
export {
  V as A,
  G as V
};
