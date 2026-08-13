import { jsx as e, jsxs as s, Fragment as B } from "react/jsx-runtime";
import { useState as v, useRef as ce, useEffect as me, useSyncExternalStore as Xe, useMemo as ze } from "react";
import { useNavigate as We } from "react-router-dom";
import { Dialog as ve, Input as Y, Tooltip as Ce, InputNumber as $e, Checkbox as je, Button as T, Card as qe } from "tdesign-react";
import { useUIKit as Le, i18next as fe } from "@tencentcloud/uikit-base-component-react";
import { HelpCircleIcon as ge, ChevronDownIcon as Me, ChevronRightIcon as Ue, CloseIcon as we, AddIcon as de, FileCopyIcon as se, SearchIcon as Qe, RefreshIcon as Je } from "tdesign-icons-react";
import { c as Ve, u as Ze, I as r, g as Fe, ak as er, m as rr, am as tr, D as Te, a as ar, S as sr } from "../../chunks/shared-state.2k2VlnY1.js";
import { as as Oe, k as re, g as p, U as R, aR as ir, a6 as lr, b4 as Re, b9 as nr, C as K, bc as Ee, aP as or, aq as cr, b7 as dr, ac as mr, bM as ur, at as xe, a3 as De, aA as hr, bX as fr, am as vr, aS as Er, X as pr, af as Ir, aK as Nr, T as _e, bf as _r } from "../../chunks/main-layout.B_9sQtkU.js";
import { g as Cr } from "../../chunks/PreviewUrlController.IUgppJ6z.js";
import { g as gr } from "../../chunks/columns.mIDOhVzi.js";
import { M as Tr } from "../../chunks/MonitorPagination.BW_ZY9KQ.js";
import { a as Se, M as ue } from "../../chunks/useAsyncAction.DMAyL8UQ.js";
import { I as ke } from "../../chunks/ImageUpload.BDp5MJff.js";
import { S as ie } from "../../chunks/SlotRenderer.BbG5_brN.js";
import { F as Pe, a as G } from "../../chunks/FormField.D0eRD3uO.js";
import { r as Be, I as Ke } from "../../chunks/image-upload-resolve.1-MNNtuJ.js";
import { A as Lr, F as Sr } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { useLiveMonitorState as yr } from "../../react.js";
const Ar = Ve("CreateLive");
function Or({ visible: V, onClose: i, onSuccess: X, uploadEnabled: H = !1, extraFieldsSlot: z, onCreate: le }) {
  const { t, language: W } = Le(), { opSuccess: a, opFailed: u } = Ze(t), F = or(W), [n, _] = v(Oe()), [L, x] = v([]), [b, $] = v(!1), [w, te] = v(!1), [q, Q] = v(""), [k, f] = v(""), [A, j] = v(!1), [I, C] = v(""), [S, E] = v(""), [m, J] = v(null), [y, ne] = v(""), [M, Z] = v(!1), ee = ce(null), [h, c] = v(!1), d = (l, o) => {
    l === "success" ? ue.success(o) : ue.error(o);
  }, N = async (l, o) => {
    try {
      await cr(l), d("success", a(r.COPY, o));
    } catch (g) {
      Ar.error("handleCopy", `复制失败 (ErrorCode: ${er(g).code || "N/A"})`, g);
      const U = g instanceof Error ? g : new Error(String(g));
      d("error", u(r.COPY, null, U.message || t(r.NETWORK_ERROR)));
    }
  }, D = () => {
    x([...L, { key: "", value: "" }]);
  }, O = (l, o, g) => {
    const U = [...L];
    U[l][o] = g, x(U);
  }, he = (l) => {
    x(L.filter((o, g) => g !== l));
  }, ae = () => {
    _(Oe()), x([]), $(!1), te(!1), Q(""), f(""), j(!1), C(""), E(""), J(null), ne(""), c(!1), Z(!1), ee.current?.reset();
  }, ye = () => {
    ae(), i();
  }, { loading: pe, execute: He } = Se({
    operationName: t(r.CREATE_LIVE),
    showSuccess: !1,
    action: async () => {
      let l = "";
      try {
        l = await Be({
          handle: ee.current,
          hasPendingFile: h,
          fallbackUrl: n.coverUrl,
          label: t(r.COVER_IMAGE)
        });
      } catch (P) {
        throw P instanceof Ke ? new Error(P.message) : new Error(t(r.COVER_PROCESSING_FAILED));
      }
      const o = mr({
        formData: n,
        coverUrl: l,
        customInfos: L,
        useObsStreaming: A
      }), g = o.liveId, U = o.anchorId;
      await le(o), J(null), ne("");
      let oe = !A;
      if (A) {
        const P = await ur({
          liveId: g,
          anchorId: U,
          onStatusChange: C,
          messages: {
            getStreamInfoFailed: u(r.OP_GET_STREAM_INFO),
            importAccountFailed: u(r.OP_IMPORT, r.LIVE),
            addRobotFailed: u(r.OP_ADD, r.LIVE),
            pickSeatFailed: u(r.OP_PICK, r.LIVE),
            setupFailed: u(r.OP_OBS_SETUP_ACT, r.LIVE)
          }
        });
        J(P.streamInfo), ne(P.streamInfoError), E(P.setupError), oe = P.configuredSuccessfully;
      }
      return { obsConfiguredSuccessfully: oe };
    },
    onSuccess: () => {
      te(!0);
    },
    onError: (l) => {
      dr(l) && Z(!0);
    }
  }), Ge = async () => {
    if (!n.anchorId.trim()) {
      d("error", t(r.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const l = p(n.anchorId);
    if (l > re) {
      d("error", t(r.MAX_BYTES_WITH_CURRENT, { field: t(r.ANCHOR_ID), max: re, current: l }));
      return;
    }
    const o = p(n.liveName);
    if (o > R) {
      d("error", t(r.MAX_BYTES_WITH_CURRENT, { field: t(r.LIVE_TITLE), max: R, current: o }));
      return;
    }
    if (L.some(Ee)) {
      d("error", t(r.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    Q(""), C(""), E(""), await He();
  }, Ye = () => {
    ae(), X();
  }, Ie = A ? I === "" || I === "creating" || I === "seating" ? {
    text: t(I === "creating" ? r.LOADING : I === "seating" ? r.LOADING : r.LOADING),
    error: !1
  } : I === "error" ? {
    text: u(r.OP_OBS_SETUP_ACT, r.LIVE, S),
    error: !0
  } : m ? {
    text: t(r.OBS_READY_COPY_INFO),
    error: !1
  } : y ? {
    text: u(r.OP_GET_STREAM, r.LIVE, y),
    error: !0
  } : {
    text: a(r.OP_READY, "OBS"),
    error: !1
  } : m ? {
    text: t(r.OBS_READY_COPY_INFO),
    error: !1
  } : y ? {
    text: u(r.OP_GET_STREAM, r.LIVE, y),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ e(
    ve,
    {
      visible: V,
      header: w ? a(r.CREATE, r.LIVE) : t(r.CREATE_LIVE),
      onClose: ye,
      width: W?.startsWith("en") ? 680 : 620,
      placement: "center",
      className: "create-live-modal",
      footer: w ? /* @__PURE__ */ e(
        T,
        {
          shape: "round",
          theme: "primary",
          onClick: Ye,
          disabled: A && (I === "" || I === "creating" || I === "seating"),
          children: t(A && I !== "ready" && I !== "error" ? r.LOADING : r.COMPLETE)
        }
      ) : /* @__PURE__ */ s(B, { children: [
        /* @__PURE__ */ e(T, { shape: "round", variant: "outline", onClick: ye, children: t(r.CANCEL) }),
        /* @__PURE__ */ e(
          T,
          {
            shape: "round",
            theme: "primary",
            onClick: Ge,
            loading: pe,
            disabled: pe || !n.anchorId.trim() || ee.current?.isValidating || ee.current?.hasUrlError,
            children: t(pe ? r.CREATING : r.CREATE)
          }
        )
      ] }),
      children: w ? (
        /* 创建成功提示 */
        /* @__PURE__ */ s("div", { className: "create-success-content", children: [
          /* @__PURE__ */ s("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ e("div", { className: "create-success-icon", children: I === "error" ? /* @__PURE__ */ s("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ e("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : A && (I === "" || I === "creating" || I === "seating") ? /* @__PURE__ */ s("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ e("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ s("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ e("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ e("h3", { children: t(r.OP_SUCCESS, { entity: t(r.LIVE), action: t(r.LABEL_CREATED) }) }),
            Ie.text && /* @__PURE__ */ e("p", { className: `create-success-description${Ie.error ? " is-error" : ""}`, children: Ie.text })
          ] }),
          m && /* @__PURE__ */ s("div", { className: "create-success-section", children: [
            /* @__PURE__ */ e("div", { className: "create-success-section-title", children: t(r.STREAM_INFO) }),
            /* @__PURE__ */ s("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ s("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ s("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: t(r.SERVER_URL) }),
                  /* @__PURE__ */ e(T, { variant: "text", size: "small", icon: /* @__PURE__ */ e(se, { size: "14" }), onClick: () => N(m.serverUrl, t(r.SERVER_URL)), children: t(r.COPY) })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: m.serverUrl })
              ] }),
              /* @__PURE__ */ s("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ s("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: t(r.STREAM_KEY) }),
                  /* @__PURE__ */ e(T, { variant: "text", size: "small", icon: /* @__PURE__ */ e(se, { size: 14 }), onClick: () => N(m.streamKey, t(r.STREAM_KEY)), children: t(r.COPY) })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: m.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ s(Pe, { className: "create-live-form", labelWidth: Fe(100), children: [
          /* @__PURE__ */ e(G, { label: /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
            t(r.LIVE_HOST),
            /* @__PURE__ */ e(Ce, { placement: "top", content: /* @__PURE__ */ s("span", { children: [
              t(r.ANCHOR_ID_HELP_TEXT),
              /* @__PURE__ */ e("a", { href: F, target: "_blank", rel: "noopener noreferrer", style: { color: "#6ea1ff", textDecoration: "underline" }, children: t(r.VIEW_DETAILS) })
            ] }), children: /* @__PURE__ */ e(ge, { size: "14px", style: { marginLeft: "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } }) })
          ] }), requiredMark: !0, children: /* @__PURE__ */ s("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              Y,
              {
                value: n.anchorId,
                onChange: (l) => {
                  _((o) => ({ ...o, anchorId: String(l) })), Z(!1);
                },
                placeholder: t(r.ENTER_ANCHOR_ID),
                status: M || p(n.anchorId) > re ? "error" : "default",
                suffix: /* @__PURE__ */ s("span", { className: `input-suffix-count${p(n.anchorId) > re ? " byte-overflow" : ""}`, children: [
                  p(n.anchorId),
                  "/",
                  re
                ] })
              }
            ),
            M ? /* @__PURE__ */ s("div", { className: "form-field__error-tip", children: [
              t(r.ANCHOR_ID_NOT_FOUND_TIP),
              /* @__PURE__ */ e("a", { href: F, target: "_blank", rel: "noopener noreferrer", style: { color: "#1C66E5" }, children: t(r.VIEW_DETAILS) })
            ] }) : p(n.anchorId) > re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: t(r.MAX_BYTES, { field: t(r.ANCHOR_ID), max: re }) })
          ] }) }),
          /* @__PURE__ */ e(G, { label: t(r.LIVE_TITLE), children: /* @__PURE__ */ s("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              Y,
              {
                value: n.liveName,
                onChange: (l) => _((o) => ({ ...o, liveName: String(l) })),
                placeholder: t(r.ENTER_LIVE_TITLE),
                status: p(n.liveName) > R ? "error" : "default",
                suffix: /* @__PURE__ */ s("span", { className: `input-suffix-count${p(n.liveName) > R ? " byte-overflow" : ""}`, children: [
                  p(n.liveName),
                  "/",
                  R
                ] })
              }
            ),
            p(n.liveName) > R && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: t(r.MAX_BYTES, { field: t(r.LIVE_TITLE), max: R }) })
          ] }) }),
          /* @__PURE__ */ e(G, { label: /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
            t(r.COVER_IMAGE),
            !H && /* @__PURE__ */ e(Ce, { placement: "top", content: /* @__PURE__ */ s("span", { children: [
              t(r.UPLOAD_NOT_CONFIGURED_HINT),
              /* @__PURE__ */ e("a", { href: "https://cloud.tencent.com/document/product/647/123831#159bb20a-d83d-4fde-a37b-1ff99632ee2c", target: "_blank", rel: "noopener noreferrer", style: { color: "#6ea1ff", textDecoration: "underline" }, children: t(r.VIEW_DETAILS) })
            ] }), children: /* @__PURE__ */ e(ge, { size: "14px", style: { marginLeft: "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } }) })
          ] }), children: /* @__PURE__ */ e(
            ke,
            {
              ref: ee,
              value: n.coverUrl,
              onChange: (l) => {
                _((o) => ({ ...o, coverUrl: l })), c(!1);
              },
              type: "cover",
              uploadEnabled: H,
              cropEnabled: !0,
              aspectRatio: ir(n.seatTemplate),
              placeholder: t(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: H,
              onFileReady: (l) => c(!!l)
            }
          ) }),
          /* @__PURE__ */ e(G, { label: t(r.LAYOUT_TEMPLATE), requiredMark: !0, help: (() => {
            const l = t(Re(n.seatTemplate)?.descKey || "");
            return Re(n.seatTemplate)?.orientation === "landscape" ? `${l}，${t(r.LANDSCAPE_BROADCASTING_HINT)}` : l;
          })(), children: /* @__PURE__ */ e("div", { className: "seat-template-group", children: lr.map((l) => /* @__PURE__ */ s(
            "button",
            {
              type: "button",
              className: `seat-template-btn${n.seatTemplate === l.value ? " seat-template-btn--selected" : ""}${l.value === "VideoLandscape4Seat" ? " seat-template-btn--landscape" : ""}`,
              title: t(l.descKey),
              onClick: () => _((o) => ({ ...o, seatTemplate: l.value })),
              children: [
                /* @__PURE__ */ s("svg", { className: "seat-template-icon", viewBox: "0 0 72 48", xmlns: "http://www.w3.org/2000/svg", children: [
                  l.value === "VideoDynamicGrid9Seats" && /* @__PURE__ */ s(B, { children: [
                    /* @__PURE__ */ e("rect", { x: "14", y: "4", width: "18", height: "18", rx: "2", fill: "#C8D6E5", opacity: "0.6" }),
                    /* @__PURE__ */ e("rect", { x: "40", y: "4", width: "18", height: "18", rx: "2", fill: "#C8D6E5", opacity: "0.6" }),
                    /* @__PURE__ */ e("rect", { x: "14", y: "24", width: "18", height: "18", rx: "2", fill: "#C8D6E5", opacity: "0.6" }),
                    /* @__PURE__ */ e("rect", { x: "40", y: "24", width: "18", height: "18", rx: "2", fill: "#C8D6E5", opacity: "0.6" })
                  ] }),
                  l.value === "VideoFixedGrid9Seats" && /* @__PURE__ */ e(B, { children: [
                    [15, 4],
                    [30, 4],
                    [45, 4],
                    [15, 17],
                    [30, 17],
                    [45, 17],
                    [15, 30],
                    [30, 30],
                    [45, 30]
                  ].map(([o, g], U) => /* @__PURE__ */ e("rect", { x: o, y: g, width: "12", height: "10", rx: "1.5", fill: "#C8D6E5", opacity: "0.6" }, U)) }),
                  l.value === "VideoDynamicFloat7Seats" && /* @__PURE__ */ s(B, { children: [
                    /* @__PURE__ */ e("rect", { x: "18", y: "2", width: "36", height: "44", rx: "3", fill: "#F5F7FA", stroke: "#DCE0E8", strokeWidth: "1" }),
                    /* @__PURE__ */ e("rect", { x: "28", y: "16", width: "16", height: "16", rx: "3", fill: "#C8D6E5", opacity: "0.7" })
                  ] }),
                  l.value === "VideoFixedFloat7Seats" && /* @__PURE__ */ s(B, { children: [
                    /* @__PURE__ */ e("rect", { x: "9", y: "2", width: "36", height: "44", rx: "3", fill: "#F5F7FA", stroke: "#DCE0E8", strokeWidth: "1" }),
                    [
                      [49, 3],
                      [49, 15],
                      [49, 27],
                      [49, 39]
                    ].map(([o, g], U) => /* @__PURE__ */ e("rect", { x: o, y: g, width: "14", height: "10", rx: "2", fill: "#C8D6E5", opacity: "0.6" }, U))
                  ] }),
                  l.value === "VideoLandscape4Seat" && /* @__PURE__ */ s(B, { children: [
                    /* @__PURE__ */ e("rect", { x: "2", y: "2", width: "68", height: "44", rx: "4", fill: "#F5F7FA", stroke: "#DCE0E8", strokeWidth: "1" }),
                    /* @__PURE__ */ e("rect", { x: "52", y: "4", width: "16", height: "12", rx: "2", fill: "#C8D6E5", opacity: "0.7" }),
                    /* @__PURE__ */ e("rect", { x: "5", y: "27", width: "9", height: "8", rx: "1.5", fill: "#C8D6E5", opacity: "0.6" }),
                    /* @__PURE__ */ e("rect", { x: "5", y: "36", width: "9", height: "8", rx: "1.5", fill: "#C8D6E5", opacity: "0.6" })
                  ] })
                ] }),
                /* @__PURE__ */ e("span", { className: "seat-template-label", children: t(l.labelKey) })
              ]
            },
            l.value
          )) }) }),
          nr(n.seatTemplate) && /* @__PURE__ */ e(G, { label: t(r.MAX_SEATS), help: t(r.MAX_SEATS_HELP), children: /* @__PURE__ */ e(
            $e,
            {
              value: n.maxSeatCount,
              onChange: (l) => _((o) => ({ ...o, maxSeatCount: Number(l) || 1 })),
              min: 1,
              max: 16,
              placeholder: t(r.ENTER_MAX_SEAT_COUNT),
              theme: "normal",
              allowInputOverLimit: !0,
              inputProps: {
                tips: n.maxSeatCount < 1 || n.maxSeatCount > 16 ? t(r.SEAT_COUNT_RANGE_1_16) : "",
                status: n.maxSeatCount < 1 || n.maxSeatCount > 16 ? "error" : "default"
              },
              style: { width: "100%" }
            }
          ) }),
          /* @__PURE__ */ e(ie, { slot: z, props: { mode: "create", formData: { ...n }, customInfos: [...L] } }),
          /* @__PURE__ */ e(G, { label: t(r.STREAMING_METHOD), help: t(r.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ e(
            je,
            {
              checked: A,
              onChange: (l) => j(l),
              children: t(r.USE_OBS_STREAMING)
            }
          ) }),
          /* @__PURE__ */ s("div", { className: "custom-info-section", children: [
            /* @__PURE__ */ s(
              "div",
              {
                className: "custom-info-toggle",
                onClick: () => $(!b),
                children: [
                  b ? /* @__PURE__ */ e(Me, { size: "16" }) : /* @__PURE__ */ e(Ue, { size: "16" }),
                  /* @__PURE__ */ e("span", { children: t(r.CUSTOM_INFORMATION) }),
                  L.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: L.length })
                ]
              }
            ),
            b && /* @__PURE__ */ s("div", { className: "custom-info-container", children: [
              L.map((l, o) => {
                const g = p(l.key), U = p(l.value), oe = g > K.maxKeyBytes, P = U > K.maxValueBytes, Ae = Ee(l);
                return /* @__PURE__ */ s("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                    Y,
                    {
                      value: l.key,
                      onChange: (Ne) => O(o, "key", String(Ne)),
                      placeholder: t(r.ENTER_KEY),
                      status: oe || Ae ? "error" : "default",
                      tips: oe ? t(r.MAX_BYTES, { field: `Key ${l.key}`, max: K.maxKeyBytes }) : Ae ? t(r.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                    Y,
                    {
                      value: l.value,
                      onChange: (Ne) => O(o, "value", String(Ne)),
                      placeholder: t(r.ENTER_VALUE),
                      status: P ? "error" : "default",
                      tips: P ? t(r.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e(
                    T,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => he(o),
                      title: t(r.DELETE),
                      icon: /* @__PURE__ */ e(we, { size: "14" })
                    }
                  )
                ] }, o);
              }),
              L.length < K.maxCount && /* @__PURE__ */ e(T, { variant: "text", className: "add-custom-info-btn", onClick: D, icon: /* @__PURE__ */ e(de, { size: "14" }), theme: "primary", children: t(r.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
const be = Ve("EditLive");
function Rr({ visible: V, live: i, onClose: X, onSuccess: H, uploadEnabled: z = !1, extraFieldsSlot: le, onUpdate: t, onFetchDetail: W }) {
  const { t: a } = Le(), [u, F] = v(xe()), [n, _] = v([]), [L, x] = v(!1), b = ce([]), [$, w] = v(De), [te, q] = v(!1), [Q, k] = v(""), [f, A] = v(""), { loading: j, execute: I } = Se({
    toast: { action: r.EDIT, entity: r.LIVE },
    action: async (h) => {
      const c = i?.id || i?.liveId || "";
      return t(c, h);
    },
    onSuccess: () => {
      setTimeout(() => {
        H({
          liveName: u.liveName.trim(),
          coverUrl: m.current || u.coverUrl
        }), Z();
      }, 500);
    }
  }), C = ce(null), [S, E] = v(!1), m = ce("");
  me(() => {
    i?.coverUrl ? hr(i.coverUrl).then(w) : w(De);
  }, [i?.coverUrl]), me(() => {
    if (i && V) {
      F({
        liveName: i.liveName || "",
        coverUrl: i.coverUrl || ""
      });
      const h = i.id || i.liveId;
      q(!0), W(h).then((c) => {
        const d = c?.customInfo;
        if (d && typeof d == "object") {
          const N = Object.entries(d).map(([D, O]) => ({
            key: D,
            value: String(O)
          }));
          _(N), x(N.length > 0), b.current = N.map((D) => D.key);
        } else
          _([]), x(!1), b.current = [];
      }).catch((c) => {
        if (c instanceof rr && k(tr(c.code ?? 0, "", a(r.LIVE_NOT_FOUND))), i.customInfo && typeof i.customInfo == "object") {
          const d = Object.entries(i.customInfo).map(([N, D]) => ({
            key: N,
            value: String(D)
          }));
          _(d), x(d.length > 0), b.current = d.map((N) => N.key);
        } else
          _([]), x(!1), b.current = [];
      }).finally(() => q(!1));
    }
  }, [i?.id, V]);
  const J = () => {
    if (n.length >= K.maxCount) {
      M("error", a(r.CUSTOM_INFO_MAX_COUNT, { max: K.maxCount }));
      return;
    }
    _([...n, { key: "", value: "" }]);
  }, y = (h, c, d) => {
    const N = [...n];
    N[h][c] = d, _(N);
  }, ne = (h) => {
    _(n.filter((c, d) => d !== h));
  }, M = (h, c) => {
    ue.error(c);
  }, Z = () => {
    k(""), A(""), _([]), x(!1), b.current = [], E(!1), m.current = "", C.current?.reset(), F(xe()), X();
  }, ee = async () => {
    if (!i) return;
    if (!u.liveName.trim()) {
      M("error", a(r.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const h = p(u.liveName);
    if (h > R) {
      M("error", a(r.MAX_BYTES_WITH_CURRENT, { field: a(r.LIVE_TITLE), max: R, current: h }));
      return;
    }
    if (n.some(Ee)) {
      M("error", a(r.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    try {
      let c = "";
      try {
        c = await Be({
          handle: C.current,
          hasPendingFile: S,
          fallbackUrl: u.coverUrl,
          label: a(r.COVER_IMAGE)
        }), m.current = c || u.coverUrl;
      } catch (O) {
        be.error("EditLive", `Cover processing failed: ${O instanceof Error ? O.message : String(O)}`, O), M("error", O instanceof Ke ? O.message : a(r.COVER_PROCESSING_FAILED));
        return;
      }
      const d = fr(n);
      if (d) {
        d.type === "key-too-long" ? M("error", a(r.MAX_BYTES, { field: `Key ${d.key}`, max: d.max })) : d.type === "value-too-long" ? M("error", a(r.KEY_VALUE_EXCEEDS_2KB, { key: d.key })) : d.type === "max-count" ? M("error", a(r.CUSTOM_INFO_MAX_COUNT, { max: d.max })) : M("error", a(r.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
        return;
      }
      const N = vr(n), D = Er(b.current, N);
      await I({
        liveId: i.id || i.liveId,
        liveName: u.liveName.trim(),
        coverUrl: c || void 0,
        customInfo: Object.keys(N).length > 0 ? N : void 0,
        deleteKeys: D.length > 0 ? D : void 0
      });
    } catch (c) {
      be.error("EditLiveModal", "Update failed:", c);
    }
  };
  return !V || !i ? null : /* @__PURE__ */ e(
    ve,
    {
      destroyOnClose: !0,
      visible: V,
      header: a(r.EDIT_LIVE),
      onClose: Z,
      width: Te.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ s(B, { children: [
        /* @__PURE__ */ e(T, { shape: "round", variant: "outline", onClick: Z, children: a(r.CANCEL) }),
        /* @__PURE__ */ e(
          T,
          {
            shape: "round",
            theme: "primary",
            onClick: ee,
            loading: j,
            disabled: j || !u.liveName.trim() || C.current?.isValidating || C.current?.hasUrlError,
            children: a(j ? r.SAVING : r.SAVE)
          }
        )
      ] }),
      children: /* @__PURE__ */ s(Pe, { className: "edit-live-form", labelWidth: Fe(100), children: [
        Q && /* @__PURE__ */ s("div", { className: "edit-live-error", children: [
          /* @__PURE__ */ e("span", { className: "edit-live-error-icon", children: "!" }),
          /* @__PURE__ */ e("span", { children: Q })
        ] }),
        /* @__PURE__ */ e(G, { label: a(r.LIVE_ID), children: /* @__PURE__ */ e(
          Y,
          {
            value: i.liveId || i.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ e(G, { label: a(r.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ s("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            Y,
            {
              value: u.liveName,
              onChange: (h) => F((c) => ({ ...c, liveName: String(h) })),
              placeholder: a(r.ENTER_LIVE_TITLE),
              status: p(u.liveName) > R ? "error" : "default",
              suffix: /* @__PURE__ */ s("span", { className: `input-suffix-count${p(u.liveName) > R ? " byte-overflow" : ""}`, children: [
                p(u.liveName),
                "/",
                R
              ] })
            }
          ),
          p(u.liveName) > R && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: a(r.MAX_BYTES, { field: a(r.LIVE_TITLE), max: R }) })
        ] }) }),
        /* @__PURE__ */ e(G, { label: /* @__PURE__ */ s("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
          a(r.COVER_IMAGE),
          !z && /* @__PURE__ */ e(Ce, { placement: "top", content: /* @__PURE__ */ s("span", { children: [
            a(r.UPLOAD_NOT_CONFIGURED_HINT),
            /* @__PURE__ */ e("a", { href: "https://cloud.tencent.com/document/product/647/123831#159bb20a-d83d-4fde-a37b-1ff99632ee2c", target: "_blank", rel: "noopener noreferrer", style: { color: "#6ea1ff", textDecoration: "underline" }, children: a(r.VIEW_DETAILS) })
          ] }), children: /* @__PURE__ */ e(ge, { size: "14px", style: { marginLeft: "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } }) })
        ] }), children: /* @__PURE__ */ e(
          ke,
          {
            ref: C,
            value: u.coverUrl,
            onChange: (h) => {
              F((c) => ({ ...c, coverUrl: h })), E(!1);
            },
            type: "cover",
            uploadEnabled: z,
            cropEnabled: !0,
            aspectRatio: $,
            placeholder: a(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: z,
            onFileReady: (h) => E(!!h)
          }
        ) }),
        /* @__PURE__ */ e(ie, { slot: le, props: { mode: "edit", live: i, formData: { ...u }, customInfos: [...n] } }),
        /* @__PURE__ */ s("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ s(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => x(!L),
              children: [
                L ? /* @__PURE__ */ e(Me, { size: "16" }) : /* @__PURE__ */ e(Ue, { size: "16" }),
                /* @__PURE__ */ e("span", { children: a(r.CUSTOM_INFORMATION) }),
                n.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: n.length })
              ]
            }
          ),
          L && /* @__PURE__ */ s("div", { className: "custom-info-container", children: [
            n.map((h, c) => {
              const d = p(h.key), N = p(h.value), D = d > K.maxKeyBytes, O = N > K.maxValueBytes, he = Ee(h);
              return /* @__PURE__ */ s("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                  Y,
                  {
                    value: h.key,
                    onChange: (ae) => y(c, "key", String(ae)),
                    placeholder: a(r.ENTER_KEY),
                    status: D || he ? "error" : "default",
                    tips: D ? a(r.MAX_BYTES, { field: "Key", max: K.maxKeyBytes }) : he ? a(r.CUSTOM_INFO_KEY_REQUIRED) : ""
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                  Y,
                  {
                    value: h.value,
                    onChange: (ae) => y(c, "value", String(ae)),
                    placeholder: a(r.ENTER_VALUE),
                    status: O ? "error" : "default",
                    tips: O ? a(r.VALUE_EXCEEDS_2KB_LIMIT) : ""
                  }
                ) }),
                /* @__PURE__ */ e(
                  T,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => ne(c),
                    title: a(r.DELETE),
                    icon: /* @__PURE__ */ e(we, { size: 14 })
                  }
                )
              ] }, c);
            }),
            n.length < K.maxCount && /* @__PURE__ */ e(T, { variant: "text", className: "add-custom-info-btn", onClick: J, icon: /* @__PURE__ */ e(de, { size: 14 }), theme: "primary", children: a(r.ADD) })
          ] })
        ] })
      ] })
    },
    `edit-live-${i?.id}`
  );
}
function jr() {
  const V = We(), { t: i } = Le(), {
    createLive: X,
    updateLive: H,
    fetchLiveDetail: z,
    endLive: le
  } = yr(), t = ar().components?.liveList, W = ce(null);
  W.current || (W.current = new pr({
    endLive: le,
    onEnterLive: (S) => V(`/live-control/${S}`, { state: { from: "live-list" } }),
    t: i,
    toast: ue,
    fetchLiveDetail: z
  }));
  const a = W.current, u = Xe(a.subscribe, a.getState, a.getState), { loading: F, execute: n } = Se({
    toast: { action: r.DISSOLVE, entity: r.LIVE },
    operationName: i(r.DISSOLVE),
    action: async () => {
      await a.confirmDelete();
    }
  });
  me(() => (a.init(), () => a.dispose()), []);
  const _ = xr(), [L, x] = v(0);
  me(() => {
    if (!fe || typeof fe.on != "function") return;
    const S = () => x((E) => E + 1);
    return fe.on("languageChanged", S), () => {
      fe.off("languageChanged", S);
    };
  }, []);
  const b = ze(() => gr({ hasExtraColumn: !!t?.tableExtraColumns }).map((E) => {
    switch (E.key) {
      case "liveId":
        return {
          ...E,
          title: i(r.LIVE_ID),
          render: (m) => /* @__PURE__ */ s("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ e("span", { className: "live-list-id-text", children: m.liveId }),
            /* @__PURE__ */ e(
              se,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => a.copyText(m.liveId, i(r.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ...E,
          title: i(r.LIVE_TITLE),
          render: (m) => m.liveName || "-"
        };
      case "coverUrl":
        return {
          ...E,
          title: i(r.COVER_IMAGE),
          render: (m) => /* @__PURE__ */ e("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ e("img", { src: m.coverUrl || sr, alt: m.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ...E,
          title: i(r.ANCHOR_ID),
          render: (m) => /* @__PURE__ */ e("span", { className: "live-list-text", children: m.anchor?.userId || "-" })
        };
      case "createdAt":
        return {
          ...E,
          title: i(r.CREATE_TIME),
          render: (m) => /* @__PURE__ */ e("span", { className: "live-list-text", children: Nr(m.createdAt) })
        };
      case "customer-extra":
        return {
          ...E,
          title: "",
          render: (m) => /* @__PURE__ */ e(ie, { slot: t?.tableExtraColumns, props: { live: m } })
        };
      case "actions":
        return {
          ...E,
          title: i(r.ACTIONS),
          render: (m) => {
            const J = Ir({
              live: m,
              t: i,
              onEnter: (y) => a.enterLive(y),
              onDetail: (y) => {
                a.showDetail(y);
              },
              onEdit: (y) => a.openEditModal(y),
              onDelete: (y) => a.requestDelete(y)
            });
            return /* @__PURE__ */ s(B, { children: [
              /* @__PURE__ */ e(Lr, { actions: J }),
              /* @__PURE__ */ e(ie, { slot: t?.rowActions, props: { live: m } })
            ] });
          }
        };
      default:
        return { ...E, title: "" };
    }
  }), [i, t, a, L]), { lives: $, loading: w, refreshing: te, currentPage: q, hasMoreData: Q, searchInput: k, obsModal: f, confirmDialog: A, isCreateModalVisible: j, isEditModalVisible: I, editingLive: C } = u;
  return /* @__PURE__ */ s("div", { className: "live-list-page", children: [
    /* @__PURE__ */ s("div", { className: "live-list-header", children: [
      /* @__PURE__ */ e("h1", { className: "live-list-title", children: i(r.LIVE_LIST) }),
      /* @__PURE__ */ e(ie, { slot: t?.beforeToolbar, props: { lives: $, loading: w } }),
      /* @__PURE__ */ s("div", { className: "header-actions", children: [
        /* @__PURE__ */ e(
          Y,
          {
            value: k,
            onChange: (S) => a.setSearchInput(String(S)),
            onEnter: () => {
              if (_r(k, _e)) {
                ue.error(i(r.INPUT_TOO_LONG));
                return;
              }
              a.search();
            },
            clearable: !0,
            onClear: () => {
              a.clearSearch();
            },
            placeholder: i(r.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ e(Qe, { size: 16 }),
            style: { width: 220 },
            status: p(k) > _e ? "error" : "default",
            tips: p(k) > _e ? i(r.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(
          T,
          {
            shape: "round",
            variant: "outline",
            disabled: te || w,
            onClick: () => {
              a.refresh();
            },
            icon: /* @__PURE__ */ e(Je, { className: te ? "spinning" : "" }),
            children: i(r.REFRESH)
          }
        ),
        /* @__PURE__ */ e(
          T,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ e(de, {}),
            onClick: () => a.openCreateModal(),
            children: i(r.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ e(ie, { slot: t?.afterToolbar, props: { lives: $, loading: w } })
    ] }),
    /* @__PURE__ */ e(qe, { className: "live-list-card", children: /* @__PURE__ */ e(
      Sr,
      {
        columns: b,
        data: $,
        rowKey: "liveId",
        loading: w,
        tableClassName: "live-list-table",
        bodyClassName: "live-list-content",
        rowClassName: "live-list-row",
        loadingNode: /* @__PURE__ */ s("div", { className: "live-list-loading-container", children: [
          /* @__PURE__ */ e("div", { className: "live-list-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "live-list-loading-text", children: i(r.LOADING) })
        ] }),
        emptyNode: k ? /* @__PURE__ */ e("div", { className: "live-list-empty-container", children: /* @__PURE__ */ e("span", { className: "live-list-empty-text", children: i(r.NO_SEARCH_RESULTS_FOR, { keyword: k }) }) }) : /* @__PURE__ */ s("div", { className: "live-list-empty-container", children: [
          /* @__PURE__ */ e("div", { className: "empty-guide-icon", children: /* @__PURE__ */ e(de, { size: "40px" }) }),
          /* @__PURE__ */ e("p", { className: "empty-guide-title", children: i(r.EMPTY_LIVE_LIST_TITLE) }),
          /* @__PURE__ */ e("p", { className: "empty-guide-desc", children: i(r.EMPTY_LIVE_LIST_DESC) }),
          /* @__PURE__ */ e("div", { className: "empty-guide-actions", children: /* @__PURE__ */ e(T, { theme: "primary", shape: "round", className: "empty-guide-cta", icon: /* @__PURE__ */ e(de, {}), onClick: () => a.openCreateModal(), children: i(r.CREATE_LIVE) }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ e(
      Tr,
      {
        currentPage: q,
        hasMoreData: Q,
        loading: !1,
        onGoToFirstPage: () => a.goToPage(1),
        onPrevPage: () => a.goToPage(q - 1),
        onNextPage: () => a.goToPage(q + 1)
      }
    ),
    /* @__PURE__ */ e(
      Or,
      {
        visible: j,
        onClose: () => a.closeCreateModal(),
        onSuccess: () => a.onLiveCreated(),
        onCreate: X,
        uploadEnabled: _
      }
    ),
    C && /* @__PURE__ */ e(
      Rr,
      {
        visible: I,
        live: {
          id: C.liveId,
          liveName: C.liveName,
          coverUrl: C.coverUrl,
          customInfo: C.customInfo ? typeof C.customInfo == "string" ? (() => {
            try {
              return JSON.parse(C.customInfo);
            } catch {
              return;
            }
          })() : C.customInfo : void 0
        },
        onClose: () => a.closeEditModal(),
        onSuccess: (S) => a.onLiveEdited(S),
        onUpdate: (S, E) => H({ ...E, liveId: S }),
        onFetchDetail: z,
        uploadEnabled: _,
        extraFieldsSlot: t?.liveFormExtraFields
      }
    ),
    /* @__PURE__ */ e(
      ve,
      {
        visible: A.visible,
        header: A.title,
        onClose: () => a.cancelDelete(),
        width: Te.CONFIRM,
        footer: /* @__PURE__ */ s(B, { children: [
          /* @__PURE__ */ e(T, { shape: "round", variant: "outline", disabled: F, onClick: () => a.cancelDelete(), children: i(r.CANCEL) }),
          /* @__PURE__ */ e(T, { shape: "round", theme: "primary", loading: F, onClick: () => n(), children: i(r.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: A.content })
      }
    ),
    /* @__PURE__ */ e(
      ve,
      {
        visible: f.visible && !!f.live,
        header: i(r.LIVE_INFORMATION),
        onClose: () => a.closeDetail(),
        width: Te.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ e(T, { shape: "round", variant: "outline", onClick: () => a.closeDetail(), children: i(r.CLOSE) }),
        children: /* @__PURE__ */ s("div", { className: "live-info-form", children: [
          f.errorMessage && /* @__PURE__ */ s("div", { className: "live-info-error", children: [
            /* @__PURE__ */ e("span", { className: "live-info-error-icon", children: "!" }),
            /* @__PURE__ */ e("span", { children: f.errorMessage })
          ] }),
          /* @__PURE__ */ s("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: i(r.BASIC_INFORMATION) }),
            /* @__PURE__ */ s("div", { className: "live-info-card", children: [
              /* @__PURE__ */ s("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: i(r.ANCHOR_ID) }),
                /* @__PURE__ */ s("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value", children: f.live?.anchor?.userId || "-" }),
                  f.live?.anchor?.userId && /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => f.live && void a.copyText(f.live.anchor.userId, i(r.LIVE_HOST)),
                      children: /* @__PURE__ */ e(se, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: i(r.LIVE_ID) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: f.live?.liveId || "-" }) })
              ] }),
              /* @__PURE__ */ s("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: i(r.LIVE_TITLE) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: f.live?.liveName || "-" }) })
              ] }),
              /* @__PURE__ */ s("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: i(r.LIVE_COVER) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: f.live?.coverUrl || "-" }) })
              ] })
            ] })
          ] }),
          (f.streamInfo || f.actionLoading === "stream") && /* @__PURE__ */ s("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: i(r.STREAM_INFO) }),
            /* @__PURE__ */ e("div", { className: "live-info-card", children: f.streamInfo ? /* @__PURE__ */ s(B, { children: [
              /* @__PURE__ */ s("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: i(r.SERVER_URL) }),
                /* @__PURE__ */ s("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: f.streamInfo.serverUrl }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => f.streamInfo && void a.copyText(f.streamInfo.serverUrl, i(r.SERVER_URL)),
                      children: /* @__PURE__ */ e(se, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ s("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: i(r.STREAM_KEY) }),
                /* @__PURE__ */ s("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: f.streamInfo.streamKey }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => f.streamInfo && void a.copyText(f.streamInfo.streamKey, i(r.STREAM_KEY)),
                      children: /* @__PURE__ */ e(se, { size: 14 })
                    }
                  )
                ] })
              ] })
            ] }) : /* @__PURE__ */ e("div", { className: "live-info-row", children: /* @__PURE__ */ e("span", { className: "live-info-label", style: { width: "auto" }, children: i(r.GETTING_STREAM_INFO) }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function xr() {
  const [V, i] = v(!1);
  return me(() => {
    let X = !1;
    return Cr().then((H) => {
      X || i(H);
    }), () => {
      X = !0;
    };
  }, []), V;
}
export {
  jr as default
};
