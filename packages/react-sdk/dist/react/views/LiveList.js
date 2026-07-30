import { jsx as r, jsxs as n, Fragment as ce } from "react/jsx-runtime";
import { useState as E, useRef as de, useEffect as ue, useSyncExternalStore as Ge, useMemo as Xe } from "react";
import { useNavigate as ze } from "react-router-dom";
import { Dialog as he, Input as H, Tooltip as We, Select as $e, InputNumber as je, Checkbox as qe, Button as g, Card as Qe } from "tdesign-react";
import { useUIKit as ge, i18next as fe } from "@tencentcloud/uikit-base-component-react";
import { HelpCircleIcon as Je, ChevronDownIcon as xe, ChevronRightIcon as De, CloseIcon as Ue, AddIcon as me, FileCopyIcon as re, SearchIcon as Ze, RefreshIcon as er } from "tdesign-icons-react";
import { c as Ve, u as rr, I as e, D as Ee, g as we, ak as ar, m as tr, am as sr, a as nr, S as ir } from "../../chunks/shared-state.LwLSW33A.js";
import { a6 as or, as as ye, k as Q, g as I, U as y, aR as lr, b4 as Ae, b9 as cr, C as P, bc as pe, aP as dr, aq as mr, b7 as ur, ac as vr, bM as fr, at as Re, a3 as Me, aA as hr, bX as Er, am as pr, aS as Ir, X as Nr, af as _r, aK as Cr, T as Ce, bf as gr } from "../../chunks/main-layout.BxLEuh4E.js";
import { g as Tr } from "../../chunks/PreviewUrlController.ChqehaBQ.js";
import { g as Sr } from "../../chunks/columns.D75h9FA-.js";
import { M as Lr } from "../../chunks/MonitorPagination.CVTIDjui.js";
import { a as Te, M as ve } from "../../chunks/useAsyncAction.DDER13aa.js";
import { I as Fe } from "../../chunks/ImageUpload.CKFWFOOB.js";
import { S as ae } from "../../chunks/SlotRenderer.BMGbSEqN.js";
import { F as ke, a as Y } from "../../chunks/FormField.D0eRD3uO.js";
import { r as Pe, I as Be } from "../../chunks/image-upload-resolve.CM9TaFWN.js";
import { A as Or, F as yr } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { useLiveMonitorState as Ar } from "../../react.js";
const Rr = Ve("CreateLive");
function Mr({ visible: V, onClose: s, onSuccess: G, uploadEnabled: X = !1, extraFieldsSlot: W, onCreate: te }) {
  const { t: a, language: $ } = ge(), { opSuccess: t, opFailed: u } = rr(a), w = dr($), T = or.map((i) => ({
    value: i.value,
    label: a(i.labelKey)
  })), [o, x] = E(ye()), [N, A] = E([]), [B, F] = E(!1), [j, K] = E(!1), [se, D] = E(""), [p, q] = E(""), [S, J] = E(!1), [l, C] = E(""), [_, f] = E(""), [U, L] = E(null), [Z, R] = E(""), [ee, ne] = E(!1), d = de(null), [m, v] = E(!1), h = (i, c) => {
    i === "success" ? ve.success(c) : ve.error(c);
  }, O = async (i, c) => {
    try {
      await mr(i), h("success", t(e.COPY, c));
    } catch (b) {
      Rr.error("handleCopy", `复制失败 (ErrorCode: ${ar(b).code || "N/A"})`, b);
      const z = b instanceof Error ? b : new Error(String(b));
      h("error", u(e.COPY, null, z.message || a(e.NETWORK_ERROR)));
    }
  }, M = () => {
    A([...N, { key: "", value: "" }]);
  }, ie = (i, c, b) => {
    const z = [...N];
    z[i][c] = b, A(z);
  }, oe = (i) => {
    A(N.filter((c, b) => b !== i));
  }, Se = () => {
    x(ye()), A([]), F(!1), K(!1), D(""), q(""), J(!1), C(""), f(""), L(null), R(""), v(!1), ne(!1), d.current?.reset();
  }, Le = () => {
    Se(), s();
  }, { loading: Ie, execute: Ke } = Te({
    operationName: a(e.CREATE_LIVE),
    showSuccess: !1,
    action: async () => {
      let i = "";
      try {
        i = await Pe({
          handle: d.current,
          hasPendingFile: m,
          fallbackUrl: o.coverUrl,
          label: a(e.COVER_IMAGE)
        });
      } catch (k) {
        throw k instanceof Be ? new Error(k.message) : new Error(a(e.COVER_PROCESSING_FAILED));
      }
      const c = vr({
        formData: o,
        coverUrl: i,
        customInfos: N,
        useObsStreaming: S
      }), b = c.liveId, z = c.anchorId;
      await te(c), L(null), R("");
      let le = !S;
      if (S) {
        const k = await fr({
          liveId: b,
          anchorId: z,
          onStatusChange: C,
          messages: {
            getStreamInfoFailed: u(e.OP_GET_STREAM_INFO),
            importAccountFailed: u(e.OP_IMPORT, e.LIVE),
            addRobotFailed: u(e.OP_ADD, e.LIVE),
            pickSeatFailed: u(e.OP_PICK, e.LIVE),
            setupFailed: u(e.OP_OBS_SETUP_ACT, e.LIVE)
          }
        });
        L(k.streamInfo), R(k.streamInfoError), f(k.setupError), le = k.configuredSuccessfully;
      }
      return { obsConfiguredSuccessfully: le };
    },
    onSuccess: () => {
      K(!0);
    },
    onError: (i) => {
      ur(i) && ne(!0);
    }
  }), Ye = async () => {
    if (!o.anchorId.trim()) {
      h("error", a(e.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const i = I(o.anchorId);
    if (i > Q) {
      h("error", a(e.MAX_BYTES_WITH_CURRENT, { field: a(e.ANCHOR_ID), max: Q, current: i }));
      return;
    }
    const c = I(o.liveName);
    if (c > y) {
      h("error", a(e.MAX_BYTES_WITH_CURRENT, { field: a(e.LIVE_TITLE), max: y, current: c }));
      return;
    }
    if (N.some(pe)) {
      h("error", a(e.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    D(""), C(""), f(""), await Ke();
  }, He = () => {
    Se(), G();
  }, Ne = S ? l === "" || l === "creating" || l === "seating" ? {
    text: a(l === "creating" ? e.LOADING : l === "seating" ? e.LOADING : e.LOADING),
    error: !1
  } : l === "error" ? {
    text: u(e.OP_OBS_SETUP_ACT, e.LIVE, _),
    error: !0
  } : U ? {
    text: a(e.OBS_READY_COPY_INFO),
    error: !1
  } : Z ? {
    text: u(e.OP_GET_STREAM, e.LIVE, Z),
    error: !0
  } : {
    text: t(e.OP_READY, "OBS"),
    error: !1
  } : U ? {
    text: a(e.OBS_READY_COPY_INFO),
    error: !1
  } : Z ? {
    text: u(e.OP_GET_STREAM, e.LIVE, Z),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ r(
    he,
    {
      visible: V,
      header: j ? t(e.CREATE, e.LIVE) : a(e.CREATE_LIVE),
      onClose: Le,
      width: Ee.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: j ? /* @__PURE__ */ r(
        g,
        {
          shape: "round",
          theme: "primary",
          onClick: He,
          disabled: S && (l === "" || l === "creating" || l === "seating"),
          children: a(S && l !== "ready" && l !== "error" ? e.LOADING : e.COMPLETE)
        }
      ) : /* @__PURE__ */ n(ce, { children: [
        /* @__PURE__ */ r(g, { shape: "round", variant: "outline", onClick: Le, children: a(e.CANCEL) }),
        /* @__PURE__ */ r(
          g,
          {
            shape: "round",
            theme: "primary",
            onClick: Ye,
            loading: Ie,
            disabled: Ie || !o.anchorId.trim() || d.current?.isValidating || d.current?.hasUrlError,
            children: a(Ie ? e.CREATING : e.CREATE)
          }
        )
      ] }),
      children: j ? (
        /* 创建成功提示 */
        /* @__PURE__ */ n("div", { className: "create-success-content", children: [
          /* @__PURE__ */ n("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ r("div", { className: "create-success-icon", children: l === "error" ? /* @__PURE__ */ n("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ r("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : S && (l === "" || l === "creating" || l === "seating") ? /* @__PURE__ */ n("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ r("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ n("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ r("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ r("h3", { children: a(e.OP_SUCCESS, { entity: a(e.LIVE), action: a(e.LABEL_CREATED) }) }),
            Ne.text && /* @__PURE__ */ r("p", { className: `create-success-description${Ne.error ? " is-error" : ""}`, children: Ne.text })
          ] }),
          U && /* @__PURE__ */ n("div", { className: "create-success-section", children: [
            /* @__PURE__ */ r("div", { className: "create-success-section-title", children: a(e.STREAM_INFO) }),
            /* @__PURE__ */ n("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ n("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ n("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ r("span", { children: a(e.SERVER_URL) }),
                  /* @__PURE__ */ r(g, { variant: "text", size: "small", icon: /* @__PURE__ */ r(re, { size: "14" }), onClick: () => O(U.serverUrl, a(e.SERVER_URL)), children: a(e.COPY) })
                ] }),
                /* @__PURE__ */ r("code", { className: "stream-info-value", children: U.serverUrl })
              ] }),
              /* @__PURE__ */ n("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ n("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ r("span", { children: a(e.STREAM_KEY) }),
                  /* @__PURE__ */ r(g, { variant: "text", size: "small", icon: /* @__PURE__ */ r(re, { size: 14 }), onClick: () => O(U.streamKey, a(e.STREAM_KEY)), children: a(e.COPY) })
                ] }),
                /* @__PURE__ */ r("code", { className: "stream-info-value", children: U.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ n(ke, { className: "create-live-form", labelWidth: we(100), children: [
          /* @__PURE__ */ r(Y, { label: /* @__PURE__ */ n("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
            a(e.LIVE_HOST),
            /* @__PURE__ */ r(We, { placement: "top", content: /* @__PURE__ */ n("span", { children: [
              a(e.ANCHOR_ID_HELP_TEXT),
              /* @__PURE__ */ r("a", { href: w, target: "_blank", rel: "noopener noreferrer", style: { color: "#6ea1ff", textDecoration: "underline" }, children: a(e.VIEW_DETAILS) })
            ] }), children: /* @__PURE__ */ r(Je, { size: "14px", style: { marginLeft: "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } }) })
          ] }), requiredMark: !0, children: /* @__PURE__ */ n("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ r(
              H,
              {
                value: o.anchorId,
                onChange: (i) => {
                  x((c) => ({ ...c, anchorId: String(i) })), ne(!1);
                },
                placeholder: a(e.ENTER_ANCHOR_ID),
                status: ee || I(o.anchorId) > Q ? "error" : "default",
                suffix: /* @__PURE__ */ n("span", { className: `input-suffix-count${I(o.anchorId) > Q ? " byte-overflow" : ""}`, children: [
                  I(o.anchorId),
                  "/",
                  Q
                ] })
              }
            ),
            ee ? /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: [
              a(e.ANCHOR_ID_NOT_FOUND_TIP),
              /* @__PURE__ */ r("a", { href: w, target: "_blank", rel: "noopener noreferrer", style: { color: "#1C66E5" }, children: a(e.VIEW_DETAILS) })
            ] }) : I(o.anchorId) > Q && /* @__PURE__ */ r("div", { className: "form-field__error-tip", children: a(e.MAX_BYTES, { field: a(e.ANCHOR_ID), max: Q }) })
          ] }) }),
          /* @__PURE__ */ r(Y, { label: a(e.LIVE_TITLE), children: /* @__PURE__ */ n("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ r(
              H,
              {
                value: o.liveName,
                onChange: (i) => x((c) => ({ ...c, liveName: String(i) })),
                placeholder: a(e.ENTER_LIVE_TITLE),
                status: I(o.liveName) > y ? "error" : "default",
                suffix: /* @__PURE__ */ n("span", { className: `input-suffix-count${I(o.liveName) > y ? " byte-overflow" : ""}`, children: [
                  I(o.liveName),
                  "/",
                  y
                ] })
              }
            ),
            I(o.liveName) > y && /* @__PURE__ */ r("div", { className: "form-field__error-tip", children: a(e.MAX_BYTES, { field: a(e.LIVE_TITLE), max: y }) })
          ] }) }),
          /* @__PURE__ */ r(Y, { label: a(e.COVER_IMAGE), children: /* @__PURE__ */ r(
            Fe,
            {
              ref: d,
              value: o.coverUrl,
              onChange: (i) => {
                x((c) => ({ ...c, coverUrl: i })), v(!1);
              },
              type: "cover",
              uploadEnabled: X,
              cropEnabled: !0,
              aspectRatio: lr(o.seatTemplate),
              placeholder: a(e.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: X,
              onFileReady: (i) => v(!!i)
            }
          ) }),
          /* @__PURE__ */ r(Y, { label: a(e.LAYOUT_TEMPLATE), requiredMark: !0, help: (() => {
            const i = a(Ae(o.seatTemplate)?.descKey || "");
            return Ae(o.seatTemplate)?.orientation === "landscape" ? `${i}，${a(e.LANDSCAPE_BROADCASTING_HINT)}` : i;
          })(), children: /* @__PURE__ */ r(
            $e,
            {
              options: T,
              value: o.seatTemplate,
              onChange: (i) => x((c) => ({ ...c, seatTemplate: i })),
              style: { width: "100%" }
            }
          ) }),
          cr(o.seatTemplate) && /* @__PURE__ */ r(Y, { label: a(e.MAX_SEATS), help: a(e.MAX_SEATS_HELP), children: /* @__PURE__ */ r(
            je,
            {
              value: o.maxSeatCount,
              onChange: (i) => x((c) => ({ ...c, maxSeatCount: Number(i) || 1 })),
              min: 1,
              max: 16,
              placeholder: a(e.ENTER_MAX_SEAT_COUNT),
              theme: "normal",
              allowInputOverLimit: !0,
              inputProps: {
                tips: o.maxSeatCount < 1 || o.maxSeatCount > 16 ? a(e.SEAT_COUNT_RANGE_1_16) : "",
                status: o.maxSeatCount < 1 || o.maxSeatCount > 16 ? "error" : "default"
              },
              style: { width: "100%" }
            }
          ) }),
          /* @__PURE__ */ r(ae, { slot: W, props: { mode: "create", formData: { ...o }, customInfos: [...N] } }),
          /* @__PURE__ */ r(Y, { label: a(e.STREAMING_METHOD), help: a(e.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ r(
            qe,
            {
              checked: S,
              onChange: (i) => J(i),
              children: a(e.USE_OBS_STREAMING)
            }
          ) }),
          /* @__PURE__ */ n("div", { className: "custom-info-section", children: [
            /* @__PURE__ */ n(
              "div",
              {
                className: "custom-info-toggle",
                onClick: () => F(!B),
                children: [
                  B ? /* @__PURE__ */ r(xe, { size: "16" }) : /* @__PURE__ */ r(De, { size: "16" }),
                  /* @__PURE__ */ r("span", { children: a(e.CUSTOM_INFORMATION) }),
                  N.length > 0 && /* @__PURE__ */ r("span", { className: "custom-info-count", children: N.length })
                ]
              }
            ),
            B && /* @__PURE__ */ n("div", { className: "custom-info-container", children: [
              N.map((i, c) => {
                const b = I(i.key), z = I(i.value), le = b > P.maxKeyBytes, k = z > P.maxValueBytes, Oe = pe(i);
                return /* @__PURE__ */ n("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ r("div", { className: "custom-input-wrap", children: /* @__PURE__ */ r(
                    H,
                    {
                      value: i.key,
                      onChange: (_e) => ie(c, "key", String(_e)),
                      placeholder: a(e.ENTER_KEY),
                      status: le || Oe ? "error" : "default",
                      tips: le ? a(e.MAX_BYTES, { field: `Key ${i.key}`, max: P.maxKeyBytes }) : Oe ? a(e.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ r("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ r(
                    H,
                    {
                      value: i.value,
                      onChange: (_e) => ie(c, "value", String(_e)),
                      placeholder: a(e.ENTER_VALUE),
                      status: k ? "error" : "default",
                      tips: k ? a(e.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ r(
                    g,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => oe(c),
                      title: a(e.DELETE),
                      icon: /* @__PURE__ */ r(Ue, { size: "14" })
                    }
                  )
                ] }, c);
              }),
              N.length < P.maxCount && /* @__PURE__ */ r(g, { variant: "text", className: "add-custom-info-btn", onClick: M, icon: /* @__PURE__ */ r(me, { size: "14" }), theme: "primary", children: a(e.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
const be = Ve("EditLive");
function br({ visible: V, live: s, onClose: G, onSuccess: X, uploadEnabled: W = !1, extraFieldsSlot: te, onUpdate: a, onFetchDetail: $ }) {
  const { t } = ge(), [u, w] = E(Re()), [T, o] = E([]), [x, N] = E(!1), A = de([]), [B, F] = E(Me), [j, K] = E(!1), [se, D] = E(""), [p, q] = E(""), { loading: S, execute: J } = Te({
    toast: { action: e.EDIT, entity: e.LIVE },
    action: async (d) => {
      const m = s?.id || s?.liveId || "";
      return a(m, d);
    },
    onSuccess: () => {
      setTimeout(() => {
        X({
          liveName: u.liveName.trim(),
          coverUrl: f.current || u.coverUrl
        }), ee();
      }, 500);
    }
  }), l = de(null), [C, _] = E(!1), f = de("");
  ue(() => {
    s?.coverUrl ? hr(s.coverUrl).then(F) : F(Me);
  }, [s?.coverUrl]), ue(() => {
    if (s && V) {
      w({
        liveName: s.liveName || "",
        coverUrl: s.coverUrl || ""
      });
      const d = s.id || s.liveId;
      K(!0), $(d).then((m) => {
        const v = m?.customInfo;
        if (v && typeof v == "object") {
          const h = Object.entries(v).map(([O, M]) => ({
            key: O,
            value: String(M)
          }));
          o(h), N(h.length > 0), A.current = h.map((O) => O.key);
        } else
          o([]), N(!1), A.current = [];
      }).catch((m) => {
        if (m instanceof tr && D(sr(m.code ?? 0, "", t(e.LIVE_NOT_FOUND))), s.customInfo && typeof s.customInfo == "object") {
          const v = Object.entries(s.customInfo).map(([h, O]) => ({
            key: h,
            value: String(O)
          }));
          o(v), N(v.length > 0), A.current = v.map((h) => h.key);
        } else
          o([]), N(!1), A.current = [];
      }).finally(() => K(!1));
    }
  }, [s?.id, V]);
  const U = () => {
    if (T.length >= P.maxCount) {
      R("error", t(e.CUSTOM_INFO_MAX_COUNT, { max: P.maxCount }));
      return;
    }
    o([...T, { key: "", value: "" }]);
  }, L = (d, m, v) => {
    const h = [...T];
    h[d][m] = v, o(h);
  }, Z = (d) => {
    o(T.filter((m, v) => v !== d));
  }, R = (d, m) => {
    ve.error(m);
  }, ee = () => {
    D(""), q(""), o([]), N(!1), A.current = [], _(!1), f.current = "", l.current?.reset(), w(Re()), G();
  }, ne = async () => {
    if (!s) return;
    if (!u.liveName.trim()) {
      R("error", t(e.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const d = I(u.liveName);
    if (d > y) {
      R("error", t(e.MAX_BYTES_WITH_CURRENT, { field: t(e.LIVE_TITLE), max: y, current: d }));
      return;
    }
    if (T.some(pe)) {
      R("error", t(e.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    try {
      let m = "";
      try {
        m = await Pe({
          handle: l.current,
          hasPendingFile: C,
          fallbackUrl: u.coverUrl,
          label: t(e.COVER_IMAGE)
        }), f.current = m || u.coverUrl;
      } catch (M) {
        be.error("EditLive", `Cover processing failed: ${M instanceof Error ? M.message : String(M)}`, M), R("error", M instanceof Be ? M.message : t(e.COVER_PROCESSING_FAILED));
        return;
      }
      const v = Er(T);
      if (v) {
        v.type === "key-too-long" ? R("error", t(e.MAX_BYTES, { field: `Key ${v.key}`, max: v.max })) : v.type === "value-too-long" ? R("error", t(e.KEY_VALUE_EXCEEDS_2KB, { key: v.key })) : v.type === "max-count" ? R("error", t(e.CUSTOM_INFO_MAX_COUNT, { max: v.max })) : R("error", t(e.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
        return;
      }
      const h = pr(T), O = Ir(A.current, h);
      await J({
        liveId: s.id || s.liveId,
        liveName: u.liveName.trim(),
        coverUrl: m || void 0,
        customInfo: Object.keys(h).length > 0 ? h : void 0,
        deleteKeys: O.length > 0 ? O : void 0
      });
    } catch (m) {
      be.error("EditLiveModal", "Update failed:", m);
    }
  };
  return !V || !s ? null : /* @__PURE__ */ r(
    he,
    {
      destroyOnClose: !0,
      visible: V,
      header: t(e.EDIT_LIVE),
      onClose: ee,
      width: Ee.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ n(ce, { children: [
        /* @__PURE__ */ r(g, { shape: "round", variant: "outline", onClick: ee, children: t(e.CANCEL) }),
        /* @__PURE__ */ r(
          g,
          {
            shape: "round",
            theme: "primary",
            onClick: ne,
            loading: S,
            disabled: S || !u.liveName.trim() || l.current?.isValidating || l.current?.hasUrlError,
            children: t(S ? e.SAVING : e.SAVE)
          }
        )
      ] }),
      children: /* @__PURE__ */ n(ke, { className: "edit-live-form", labelWidth: we(100), children: [
        se && /* @__PURE__ */ n("div", { className: "edit-live-error", children: [
          /* @__PURE__ */ r("span", { className: "edit-live-error-icon", children: "!" }),
          /* @__PURE__ */ r("span", { children: se })
        ] }),
        /* @__PURE__ */ r(Y, { label: t(e.LIVE_ID), children: /* @__PURE__ */ r(
          H,
          {
            value: s.liveId || s.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ r(Y, { label: t(e.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ n("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ r(
            H,
            {
              value: u.liveName,
              onChange: (d) => w((m) => ({ ...m, liveName: String(d) })),
              placeholder: t(e.ENTER_LIVE_TITLE),
              status: I(u.liveName) > y ? "error" : "default",
              suffix: /* @__PURE__ */ n("span", { className: `input-suffix-count${I(u.liveName) > y ? " byte-overflow" : ""}`, children: [
                I(u.liveName),
                "/",
                y
              ] })
            }
          ),
          I(u.liveName) > y && /* @__PURE__ */ r("div", { className: "form-field__error-tip", children: t(e.MAX_BYTES, { field: t(e.LIVE_TITLE), max: y }) })
        ] }) }),
        /* @__PURE__ */ r(Y, { label: t(e.COVER_IMAGE), children: /* @__PURE__ */ r(
          Fe,
          {
            ref: l,
            value: u.coverUrl,
            onChange: (d) => {
              w((m) => ({ ...m, coverUrl: d })), _(!1);
            },
            type: "cover",
            uploadEnabled: W,
            cropEnabled: !0,
            aspectRatio: B,
            placeholder: t(e.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: W,
            onFileReady: (d) => _(!!d)
          }
        ) }),
        /* @__PURE__ */ r(ae, { slot: te, props: { mode: "edit", live: s, formData: { ...u }, customInfos: [...T] } }),
        /* @__PURE__ */ n("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ n(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => N(!x),
              children: [
                x ? /* @__PURE__ */ r(xe, { size: "16" }) : /* @__PURE__ */ r(De, { size: "16" }),
                /* @__PURE__ */ r("span", { children: t(e.CUSTOM_INFORMATION) }),
                T.length > 0 && /* @__PURE__ */ r("span", { className: "custom-info-count", children: T.length })
              ]
            }
          ),
          x && /* @__PURE__ */ n("div", { className: "custom-info-container", children: [
            T.map((d, m) => {
              const v = I(d.key), h = I(d.value), O = v > P.maxKeyBytes, M = h > P.maxValueBytes, ie = pe(d);
              return /* @__PURE__ */ n("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ r("div", { className: "custom-input-wrap", children: /* @__PURE__ */ r(
                  H,
                  {
                    value: d.key,
                    onChange: (oe) => L(m, "key", String(oe)),
                    placeholder: t(e.ENTER_KEY),
                    status: O || ie ? "error" : "default",
                    tips: O ? t(e.MAX_BYTES, { field: "Key", max: P.maxKeyBytes }) : ie ? t(e.CUSTOM_INFO_KEY_REQUIRED) : ""
                  }
                ) }),
                /* @__PURE__ */ r("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ r(
                  H,
                  {
                    value: d.value,
                    onChange: (oe) => L(m, "value", String(oe)),
                    placeholder: t(e.ENTER_VALUE),
                    status: M ? "error" : "default",
                    tips: M ? t(e.VALUE_EXCEEDS_2KB_LIMIT) : ""
                  }
                ) }),
                /* @__PURE__ */ r(
                  g,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => Z(m),
                    title: t(e.DELETE),
                    icon: /* @__PURE__ */ r(Ue, { size: 14 })
                  }
                )
              ] }, m);
            }),
            T.length < P.maxCount && /* @__PURE__ */ r(g, { variant: "text", className: "add-custom-info-btn", onClick: U, icon: /* @__PURE__ */ r(me, { size: 14 }), theme: "primary", children: t(e.ADD) })
          ] })
        ] })
      ] })
    },
    `edit-live-${s?.id}`
  );
}
function Qr() {
  const V = ze(), { t: s } = ge(), {
    createLive: G,
    updateLive: X,
    fetchLiveDetail: W,
    endLive: te
  } = Ar(), a = nr().components?.liveList, $ = de(null);
  $.current || ($.current = new Nr({
    endLive: te,
    onEnterLive: (C) => V(`/live-control/${C}`, { state: { from: "live-list" } }),
    t: s,
    toast: ve,
    fetchLiveDetail: W
  }));
  const t = $.current, u = Ge(t.subscribe, t.getState, t.getState), { loading: w, execute: T } = Te({
    toast: { action: e.DISSOLVE, entity: e.LIVE },
    operationName: s(e.DISSOLVE),
    action: async () => {
      await t.confirmDelete();
    }
  });
  ue(() => (t.init(), () => t.dispose()), []);
  const o = xr(), [x, N] = E(0);
  ue(() => {
    if (!fe || typeof fe.on != "function") return;
    const C = () => N((_) => _ + 1);
    return fe.on("languageChanged", C), () => {
      fe.off("languageChanged", C);
    };
  }, []);
  const A = Xe(() => Sr({ hasExtraColumn: !!a?.tableExtraColumns }).map((_) => {
    switch (_.key) {
      case "liveId":
        return {
          ..._,
          title: s(e.LIVE_ID),
          render: (f) => /* @__PURE__ */ n("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ r("span", { className: "live-list-id-text", children: f.liveId }),
            /* @__PURE__ */ r(
              re,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => t.copyText(f.liveId, s(e.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ..._,
          title: s(e.LIVE_TITLE),
          render: (f) => f.liveName || "-"
        };
      case "coverUrl":
        return {
          ..._,
          title: s(e.COVER_IMAGE),
          render: (f) => /* @__PURE__ */ r("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ r("img", { src: f.coverUrl || ir, alt: f.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ..._,
          title: s(e.ANCHOR_ID),
          render: (f) => /* @__PURE__ */ r("span", { className: "live-list-text", children: f.anchor?.userId || "-" })
        };
      case "createdAt":
        return {
          ..._,
          title: s(e.CREATE_TIME),
          render: (f) => /* @__PURE__ */ r("span", { className: "live-list-text", children: Cr(f.createdAt) })
        };
      case "customer-extra":
        return {
          ..._,
          title: "",
          render: (f) => /* @__PURE__ */ r(ae, { slot: a?.tableExtraColumns, props: { live: f } })
        };
      case "actions":
        return {
          ..._,
          title: s(e.ACTIONS),
          render: (f) => {
            const U = _r({
              live: f,
              t: s,
              onEnter: (L) => t.enterLive(L),
              onDetail: (L) => {
                t.showDetail(L);
              },
              onEdit: (L) => t.openEditModal(L),
              onDelete: (L) => t.requestDelete(L)
            });
            return /* @__PURE__ */ n(ce, { children: [
              /* @__PURE__ */ r(Or, { actions: U }),
              /* @__PURE__ */ r(ae, { slot: a?.rowActions, props: { live: f } })
            ] });
          }
        };
      default:
        return { ..._, title: "" };
    }
  }), [s, a, t, x]), { lives: B, loading: F, refreshing: j, currentPage: K, hasMoreData: se, searchInput: D, obsModal: p, confirmDialog: q, isCreateModalVisible: S, isEditModalVisible: J, editingLive: l } = u;
  return /* @__PURE__ */ n("div", { className: "live-list-page", children: [
    /* @__PURE__ */ n("div", { className: "live-list-header", children: [
      /* @__PURE__ */ r("h1", { className: "live-list-title", children: s(e.LIVE_LIST) }),
      /* @__PURE__ */ r(ae, { slot: a?.beforeToolbar, props: { lives: B, loading: F } }),
      /* @__PURE__ */ n("div", { className: "header-actions", children: [
        /* @__PURE__ */ r(
          H,
          {
            value: D,
            onChange: (C) => t.setSearchInput(String(C)),
            onEnter: () => {
              if (gr(D, Ce)) {
                ve.error(s(e.INPUT_TOO_LONG));
                return;
              }
              t.search();
            },
            clearable: !0,
            onClear: () => {
              t.clearSearch();
            },
            placeholder: s(e.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ r(Ze, { size: 16 }),
            style: { width: 220 },
            status: I(D) > Ce ? "error" : "default",
            tips: I(D) > Ce ? s(e.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ r(
          g,
          {
            shape: "round",
            variant: "outline",
            disabled: j || F,
            onClick: () => {
              t.refresh();
            },
            icon: /* @__PURE__ */ r(er, { className: j ? "spinning" : "" }),
            children: s(e.REFRESH)
          }
        ),
        /* @__PURE__ */ r(
          g,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ r(me, {}),
            onClick: () => t.openCreateModal(),
            children: s(e.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ r(ae, { slot: a?.afterToolbar, props: { lives: B, loading: F } })
    ] }),
    /* @__PURE__ */ r(Qe, { className: "live-list-card", children: /* @__PURE__ */ r(
      yr,
      {
        columns: A,
        data: B,
        rowKey: "liveId",
        loading: F,
        tableClassName: "live-list-table",
        bodyClassName: "live-list-content",
        rowClassName: "live-list-row",
        loadingNode: /* @__PURE__ */ n("div", { className: "live-list-loading-container", children: [
          /* @__PURE__ */ r("div", { className: "live-list-loading-spinner" }),
          /* @__PURE__ */ r("span", { className: "live-list-loading-text", children: s(e.LOADING) })
        ] }),
        emptyNode: D ? /* @__PURE__ */ r("div", { className: "live-list-empty-container", children: /* @__PURE__ */ r("span", { className: "live-list-empty-text", children: s(e.NO_SEARCH_RESULTS_FOR, { keyword: D }) }) }) : /* @__PURE__ */ n("div", { className: "live-list-empty-container", children: [
          /* @__PURE__ */ r("div", { className: "empty-guide-icon", children: /* @__PURE__ */ r(me, { size: "40px" }) }),
          /* @__PURE__ */ r("p", { className: "empty-guide-title", children: s(e.EMPTY_LIVE_LIST_TITLE) }),
          /* @__PURE__ */ r("p", { className: "empty-guide-desc", children: s(e.EMPTY_LIVE_LIST_DESC) }),
          /* @__PURE__ */ r("div", { className: "empty-guide-actions", children: /* @__PURE__ */ r(g, { theme: "primary", shape: "round", className: "empty-guide-cta", icon: /* @__PURE__ */ r(me, {}), onClick: () => t.openCreateModal(), children: s(e.CREATE_LIVE) }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ r(
      Lr,
      {
        currentPage: K,
        hasMoreData: se,
        loading: !1,
        onGoToFirstPage: () => t.goToPage(1),
        onPrevPage: () => t.goToPage(K - 1),
        onNextPage: () => t.goToPage(K + 1)
      }
    ),
    /* @__PURE__ */ r(
      Mr,
      {
        visible: S,
        onClose: () => t.closeCreateModal(),
        onSuccess: () => t.onLiveCreated(),
        onCreate: G,
        uploadEnabled: o
      }
    ),
    l && /* @__PURE__ */ r(
      br,
      {
        visible: J,
        live: {
          id: l.liveId,
          liveName: l.liveName,
          coverUrl: l.coverUrl,
          customInfo: l.customInfo ? typeof l.customInfo == "string" ? (() => {
            try {
              return JSON.parse(l.customInfo);
            } catch {
              return;
            }
          })() : l.customInfo : void 0
        },
        onClose: () => t.closeEditModal(),
        onSuccess: (C) => t.onLiveEdited(C),
        onUpdate: (C, _) => X({ ..._, liveId: C }),
        onFetchDetail: W,
        uploadEnabled: o,
        extraFieldsSlot: a?.liveFormExtraFields
      }
    ),
    /* @__PURE__ */ r(
      he,
      {
        visible: q.visible,
        header: q.title,
        onClose: () => t.cancelDelete(),
        width: Ee.CONFIRM,
        footer: /* @__PURE__ */ n(ce, { children: [
          /* @__PURE__ */ r(g, { shape: "round", variant: "outline", disabled: w, onClick: () => t.cancelDelete(), children: s(e.CANCEL) }),
          /* @__PURE__ */ r(g, { shape: "round", theme: "primary", loading: w, onClick: () => T(), children: s(e.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ r("p", { children: q.content })
      }
    ),
    /* @__PURE__ */ r(
      he,
      {
        visible: p.visible && !!p.live,
        header: s(e.LIVE_INFORMATION),
        onClose: () => t.closeDetail(),
        width: Ee.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ r(g, { shape: "round", variant: "outline", onClick: () => t.closeDetail(), children: s(e.CLOSE) }),
        children: /* @__PURE__ */ n("div", { className: "live-info-form", children: [
          p.errorMessage && /* @__PURE__ */ n("div", { className: "live-info-error", children: [
            /* @__PURE__ */ r("span", { className: "live-info-error-icon", children: "!" }),
            /* @__PURE__ */ r("span", { children: p.errorMessage })
          ] }),
          /* @__PURE__ */ n("div", { className: "live-info-section", children: [
            /* @__PURE__ */ r("div", { className: "live-info-section-title", children: s(e.BASIC_INFORMATION) }),
            /* @__PURE__ */ n("div", { className: "live-info-card", children: [
              /* @__PURE__ */ n("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.ANCHOR_ID) }),
                /* @__PURE__ */ n("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ r("span", { className: "live-info-value", children: p.live?.anchor?.userId || "-" }),
                  p.live?.anchor?.userId && /* @__PURE__ */ r(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => p.live && void t.copyText(p.live.anchor.userId, s(e.LIVE_HOST)),
                      children: /* @__PURE__ */ r(re, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.LIVE_ID) }),
                /* @__PURE__ */ r("div", { className: "live-info-value-area", children: /* @__PURE__ */ r("span", { className: "live-info-value", children: p.live?.liveId || "-" }) })
              ] }),
              /* @__PURE__ */ n("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.LIVE_TITLE) }),
                /* @__PURE__ */ r("div", { className: "live-info-value-area", children: /* @__PURE__ */ r("span", { className: "live-info-value", children: p.live?.liveName || "-" }) })
              ] }),
              /* @__PURE__ */ n("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.LIVE_COVER) }),
                /* @__PURE__ */ r("div", { className: "live-info-value-area", children: /* @__PURE__ */ r("span", { className: "live-info-value live-info-value-url", children: p.live?.coverUrl || "-" }) })
              ] })
            ] })
          ] }),
          (p.streamInfo || p.actionLoading === "stream") && /* @__PURE__ */ n("div", { className: "live-info-section", children: [
            /* @__PURE__ */ r("div", { className: "live-info-section-title", children: s(e.STREAM_INFO) }),
            /* @__PURE__ */ r("div", { className: "live-info-card", children: p.streamInfo ? /* @__PURE__ */ n(ce, { children: [
              /* @__PURE__ */ n("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.SERVER_URL) }),
                /* @__PURE__ */ n("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ r("span", { className: "live-info-value live-info-value-url", children: p.streamInfo.serverUrl }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => p.streamInfo && void t.copyText(p.streamInfo.serverUrl, s(e.SERVER_URL)),
                      children: /* @__PURE__ */ r(re, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ n("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.STREAM_KEY) }),
                /* @__PURE__ */ n("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ r("span", { className: "live-info-value live-info-value-url", children: p.streamInfo.streamKey }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => p.streamInfo && void t.copyText(p.streamInfo.streamKey, s(e.STREAM_KEY)),
                      children: /* @__PURE__ */ r(re, { size: 14 })
                    }
                  )
                ] })
              ] })
            ] }) : /* @__PURE__ */ r("div", { className: "live-info-row", children: /* @__PURE__ */ r("span", { className: "live-info-label", style: { width: "auto" }, children: s(e.GETTING_STREAM_INFO) }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function xr() {
  const [V, s] = E(!1);
  return ue(() => {
    let G = !1;
    return Tr().then((X) => {
      G || s(X);
    }), () => {
      G = !0;
    };
  }, []), V;
}
export {
  Qr as default
};
