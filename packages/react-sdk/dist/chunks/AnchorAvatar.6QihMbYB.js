import { jsx as o } from "react/jsx-runtime";
import { Dialog as S, Button as h } from "tdesign-react";
import { useUIKit as p } from "@tencentcloud/uikit-base-component-react";
import { u as A } from "./useAsyncAction.3VDMHaQC.js";
import { Y as g, a8 as u } from "./en-US.DXdmRfHg.js";
import { a1 as b } from "./main-layout.Bx74vUBv.js";
import { c as x } from "./LiveMonitorCore.mCNav0QG.js";
import { useState as m, useEffect as v } from "react";
const B = ({
  visible: s,
  liveId: t = "",
  liveName: i = "",
  onVisibleChange: c,
  onConfirm: l,
  onCancel: e
}) => {
  const { t: n } = p(), { loading: r, execute: d } = A({
    action: async () => {
      if (!t) throw new Error("liveId is required");
      await x(t, {
        violationType: "warning",
        violationContent: `直播间 "${i || t}" 收到违规警告，请立即整改`,
        handleSuggestion: "请遵守平台规则，删除违规内容"
      });
    },
    successMessage: n("Violation Warning Sent"),
    errorMessage: n("Send Failed"),
    onSuccess: () => {
      l?.({ liveId: t, liveName: i }), a();
    }
  }), a = () => {
    c(!1);
  }, C = () => {
    r || !t || d();
  }, f = () => {
    r || (e?.(), a());
  };
  return /* @__PURE__ */ o(
    S,
    {
      visible: s,
      header: n("Violation Warning Send Confirm"),
      confirmBtn: /* @__PURE__ */ o(
        h,
        {
          shape: "round",
          loading: r,
          onClick: C,
          children: n(r ? "Sending" : g.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ o(
        h,
        {
          variant: "outline",
          shape: "round",
          disabled: r,
          onClick: f,
          children: n(g.CANCEL)
        }
      ),
      onClose: f,
      children: /* @__PURE__ */ o("p", { children: n("Violation Warning Confirm Content") })
    }
  );
};
function M({
  className: s = "anchor-avatar",
  name: t,
  src: i,
  title: c
}) {
  const { t: l } = p(), [e, n] = m(""), [r, d] = m(!1);
  v(() => {
    n(i || u), d(!1);
  }, [i]);
  const a = t ? l("Avatar Alt", { name: t }) : l("Host Avatar");
  return !e || r ? /* @__PURE__ */ o("div", { className: s, title: c, "aria-label": a, children: b(t) }) : /* @__PURE__ */ o("div", { className: s, title: c, "aria-label": a, children: /* @__PURE__ */ o(
    "img",
    {
      src: e,
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
        if (e !== u) {
          n(u);
          return;
        }
        d(!0);
      }
    }
  ) });
}
export {
  M as A,
  B as V
};
