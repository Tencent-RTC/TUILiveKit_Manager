import { jsx as e, jsxs as o, Fragment as ie } from "react/jsx-runtime";
import { useState as E, useRef as ne, useEffect as le, useSyncExternalStore as ke, useMemo as Be } from "react";
import { useNavigate as Pe } from "react-router-dom";
import { Dialog as ve, Input as K, Select as Ke, InputNumber as Ye, Checkbox as Ge, Button as g, Card as He } from "tdesign-react";
import { useUIKit as _e, i18next as ue } from "@tencentcloud/uikit-base-component-react";
import { ChevronDownIcon as ye, ChevronRightIcon as Me, CloseIcon as be, AddIcon as Ce, FileCopyIcon as ee, SearchIcon as Xe, RefreshIcon as We } from "tdesign-icons-react";
import { c as De } from "../../chunks/logger.DCFRj533.js";
import { I as r, W as fe, t as xe, q as ze, L as $e, s as je, g as qe, a9 as Qe } from "../../chunks/layout.DppKPdLU.js";
import { a3 as Je, au as Se, A as Q, g as I, Q as A, aV as Ze, ba as Le, be as er, C as V, bh as he, as as rr, a9 as ar, bP as tr, av as Ae, a0 as Oe, aC as sr, b_ as or, an as ir, aW as nr, T as lr, ac as cr, aN as dr, P as Ne, bk as mr } from "../../chunks/main-layout.BqLTYqar.js";
import { r as Ue, I as Fe, b as ur } from "../../chunks/upload.Ne4Xd5tE.js";
import { g as vr } from "../../chunks/columns.DtUarMJr.js";
import { M as fr } from "../../chunks/MonitorPagination.DFg391Ih.js";
import { u as Te, M as ce } from "../../chunks/useAsyncAction.Ce9HnFRp.js";
import { I as we } from "../../chunks/ImageUpload.CsxRQ1hR.js";
import { S as re } from "../../chunks/SlotRenderer.vgqO2kMA.js";
import { F as Ve, a as P } from "../../chunks/FormField.D0eRD3uO.js";
import { A as hr, F as Er } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { u as Ir } from "../../chunks/live-monitor.DzfKuVn6.js";
import "../../chunks/useSvgaPlayer.xaOB2im4.js";
const pr = De("CreateLive");
function Nr({ visible: x, onClose: s, onSuccess: Y, uploadEnabled: G = !1, extraFieldsSlot: z, onCreate: ae }) {
  const { t } = _e(), $ = Je.map((i) => ({
    value: i.value,
    label: t(i.labelKey)
  })), [a, u] = E(Se()), [_, p] = E([]), [S, H] = E(!1), [M, D] = E(!1), [J, U] = E(""), [de, X] = E(""), [O, F] = E(!1), [n, k] = E(""), [j, q] = E(""), [f, C] = E(null), [h, v] = E(""), B = ne(null), [b, te] = E(!1), T = (i, l) => {
    i === "success" ? ce.success(l) : ce.error(l);
  }, Z = async (i, l) => {
    try {
      await rr(i), T("success", t(r.COPY_LABEL_COPIED, { label: l }));
    } catch (y) {
      pr.error("handleCopy", `复制失败 (ErrorCode: ${ze(y).code || "N/A"})`, y);
      const W = y instanceof Error ? y : new Error(String(y));
      T("error", t(r.COPY_FAILED, { error: W.message || t(r.NETWORK_ERROR) }));
    }
  }, Ee = () => {
    p([..._, { key: "", value: "" }]);
  }, d = (i, l, y) => {
    const W = [..._];
    W[i][l] = y, p(W);
  }, c = (i) => {
    p(_.filter((l, y) => y !== i));
  }, m = () => {
    u(Se()), p([]), H(!1), D(!1), U(""), X(""), F(!1), k(""), q(""), C(null), v(""), te(!1), B.current?.reset();
  }, N = () => {
    m(), s();
  }, { loading: L, execute: R } = Te({
    operationName: t(r.CREATE_LIVE),
    showSuccess: !1,
    action: async () => {
      let i = "";
      try {
        i = await Ue({
          handle: B.current,
          hasPendingFile: b,
          fallbackUrl: a.coverUrl,
          label: t(r.COVER_IMAGE)
        });
      } catch (w) {
        throw w instanceof Fe ? new Error(w.message) : new Error(t(r.COVER_PROCESSING_FAILED));
      }
      const l = ar({
        formData: a,
        coverUrl: i,
        customInfos: _,
        useObsStreaming: O
      }), y = l.liveId, W = l.anchorId;
      await ae(l), C(null), v("");
      let oe = !O;
      if (O) {
        const w = await tr({
          liveId: y,
          anchorId: W,
          onStatusChange: k,
          messages: {
            getStreamInfoFailed: t(r.GET_STREAM_INFO_FAILED),
            importAccountFailed: t(r.IMPORT_ACCOUNT_FAILED),
            addRobotFailed: t(r.ADD_ROBOT_FAILED),
            pickSeatFailed: t(r.PICK_SEAT_FAILED),
            setupFailed: t(r.OBS_SETUP_FAILED)
          }
        });
        C(w.streamInfo), v(w.streamInfoError), q(w.setupError), oe = w.configuredSuccessfully;
      }
      return { obsConfiguredSuccessfully: oe };
    },
    onSuccess: () => {
      D(!0);
    }
  }), me = async () => {
    if (!a.anchorId.trim()) {
      T("error", t(r.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const i = I(a.anchorId);
    if (i > Q) {
      T("error", t(r.MAX_BYTES_WITH_CURRENT, { field: t(r.ANCHOR_ID), max: Q, current: i }));
      return;
    }
    const l = I(a.liveName);
    if (l > A) {
      T("error", t(r.MAX_BYTES_WITH_CURRENT, { field: t(r.LIVE_TITLE), max: A, current: l }));
      return;
    }
    if (_.some(he)) {
      T("error", t(r.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    U(""), k(""), q(""), await R();
  }, se = () => {
    m(), Y();
  }, Ie = O ? n === "" || n === "creating" || n === "seating" ? {
    text: t(n === "creating" ? r.LOADING : n === "seating" ? r.LOADING : r.LOADING),
    error: !1
  } : n === "error" ? {
    text: t(r.OBS_CONFIG_FAILED_WITH_ERROR, { error: j }),
    error: !0
  } : f ? {
    text: t(r.OBS_READY_COPY_INFO),
    error: !1
  } : h ? {
    text: t(r.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: h }),
    error: !0
  } : {
    text: t(r.OBS_READY),
    error: !1
  } : f ? {
    text: t(r.OBS_READY_COPY_INFO),
    error: !1
  } : h ? {
    text: t(r.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: h }),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ e(
    ve,
    {
      visible: x,
      header: t(M ? r.CREATE_SUCCESS : r.CREATE_LIVE),
      onClose: N,
      width: fe.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: M ? /* @__PURE__ */ e(
        g,
        {
          shape: "round",
          theme: "primary",
          onClick: se,
          disabled: O && (n === "" || n === "creating" || n === "seating"),
          children: t(O && n !== "ready" && n !== "error" ? r.LOADING : r.COMPLETE)
        }
      ) : /* @__PURE__ */ o(ie, { children: [
        /* @__PURE__ */ e(g, { shape: "round", variant: "outline", onClick: N, children: t(r.CANCEL) }),
        /* @__PURE__ */ e(
          g,
          {
            shape: "round",
            theme: "primary",
            onClick: me,
            loading: L,
            disabled: L || !a.anchorId.trim() || B.current?.isValidating || B.current?.hasUrlError,
            children: t(L ? r.CREATING : r.CREATE)
          }
        )
      ] }),
      children: M ? (
        /* 创建成功提示 */
        /* @__PURE__ */ o("div", { className: "create-success-content", children: [
          /* @__PURE__ */ o("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ e("div", { className: "create-success-icon", children: n === "error" ? /* @__PURE__ */ o("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ e("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : O && (n === "" || n === "creating" || n === "seating") ? /* @__PURE__ */ o("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ e("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ o("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ e("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ e("h3", { children: t(r.ENTITY_ACTION_SUCCESS, { entity: t(r.LIVE), action: t(r.LABEL_CREATED) }) }),
            Ie.text && /* @__PURE__ */ e("p", { className: `create-success-description${Ie.error ? " is-error" : ""}`, children: Ie.text })
          ] }),
          f && /* @__PURE__ */ o("div", { className: "create-success-section", children: [
            /* @__PURE__ */ e("div", { className: "create-success-section-title", children: t(r.STREAM_INFO) }),
            /* @__PURE__ */ o("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ o("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ o("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: t(r.SERVER_URL) }),
                  /* @__PURE__ */ e(g, { variant: "text", size: "small", icon: /* @__PURE__ */ e(ee, { size: "14" }), onClick: () => Z(f.serverUrl, t(r.SERVER_URL)), children: t(r.COPY) })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: f.serverUrl })
              ] }),
              /* @__PURE__ */ o("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ o("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: t(r.STREAM_KEY) }),
                  /* @__PURE__ */ e(g, { variant: "text", size: "small", icon: /* @__PURE__ */ e(ee, { size: 14 }), onClick: () => Z(f.streamKey, t(r.STREAM_KEY)), children: t(r.COPY) })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: f.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ o(Ve, { className: "create-live-form", labelWidth: xe(100), children: [
          /* @__PURE__ */ e(P, { label: t(r.LIVE_HOST), requiredMark: !0, children: /* @__PURE__ */ o("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              K,
              {
                value: a.anchorId,
                onChange: (i) => u((l) => ({ ...l, anchorId: String(i) })),
                placeholder: t(r.ENTER_ANCHOR_ID),
                status: I(a.anchorId) > Q ? "error" : "default",
                suffix: /* @__PURE__ */ o("span", { className: `input-suffix-count${I(a.anchorId) > Q ? " byte-overflow" : ""}`, children: [
                  I(a.anchorId),
                  "/",
                  Q
                ] })
              }
            ),
            I(a.anchorId) > Q && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: t(r.MAX_BYTES, { field: t(r.ANCHOR_ID), max: Q }) })
          ] }) }),
          /* @__PURE__ */ e(P, { label: t(r.LIVE_TITLE), children: /* @__PURE__ */ o("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              K,
              {
                value: a.liveName,
                onChange: (i) => u((l) => ({ ...l, liveName: String(i) })),
                placeholder: t(r.ENTER_LIVE_TITLE),
                status: I(a.liveName) > A ? "error" : "default",
                suffix: /* @__PURE__ */ o("span", { className: `input-suffix-count${I(a.liveName) > A ? " byte-overflow" : ""}`, children: [
                  I(a.liveName),
                  "/",
                  A
                ] })
              }
            ),
            I(a.liveName) > A && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: t(r.MAX_BYTES, { field: t(r.LIVE_TITLE), max: A }) })
          ] }) }),
          /* @__PURE__ */ e(P, { label: t(r.COVER_IMAGE), children: /* @__PURE__ */ e(
            we,
            {
              ref: B,
              value: a.coverUrl,
              onChange: (i) => {
                u((l) => ({ ...l, coverUrl: i })), te(!1);
              },
              type: "cover",
              uploadEnabled: G,
              cropEnabled: !0,
              aspectRatio: Ze(a.seatTemplate),
              placeholder: t(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: G,
              onFileReady: (i) => te(!!i)
            }
          ) }),
          /* @__PURE__ */ e(P, { label: t(r.LAYOUT_TEMPLATE), requiredMark: !0, help: (() => {
            const i = t(Le(a.seatTemplate)?.descKey || "");
            return Le(a.seatTemplate)?.orientation === "landscape" ? `${i}，${t(r.LANDSCAPE_BROADCASTING_HINT)}` : i;
          })(), children: /* @__PURE__ */ e(
            Ke,
            {
              options: $,
              value: a.seatTemplate,
              onChange: (i) => u((l) => ({ ...l, seatTemplate: i })),
              style: { width: "100%" }
            }
          ) }),
          er(a.seatTemplate) && /* @__PURE__ */ e(P, { label: t(r.MAX_SEATS), help: t(r.MAX_SEATS_HELP), children: /* @__PURE__ */ e(
            Ye,
            {
              value: a.maxSeatCount,
              onChange: (i) => u((l) => ({ ...l, maxSeatCount: Number(i) || 1 })),
              min: 1,
              max: 16,
              placeholder: t(r.ENTER_MAX_SEAT_COUNT),
              theme: "normal",
              allowInputOverLimit: !0,
              inputProps: {
                tips: a.maxSeatCount < 1 || a.maxSeatCount > 16 ? t(r.SEAT_COUNT_RANGE_1_16) : "",
                status: a.maxSeatCount < 1 || a.maxSeatCount > 16 ? "error" : "default"
              },
              style: { width: "100%" }
            }
          ) }),
          /* @__PURE__ */ e(re, { slot: z, props: { mode: "create", formData: { ...a }, customInfos: [..._] } }),
          /* @__PURE__ */ e(P, { label: t(r.STREAMING_METHOD), help: t(r.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ e(
            Ge,
            {
              checked: O,
              onChange: (i) => F(i),
              children: t(r.USE_OBS_STREAMING)
            }
          ) }),
          /* @__PURE__ */ o("div", { className: "custom-info-section", children: [
            /* @__PURE__ */ o(
              "div",
              {
                className: "custom-info-toggle",
                onClick: () => H(!S),
                children: [
                  S ? /* @__PURE__ */ e(ye, { size: "16" }) : /* @__PURE__ */ e(Me, { size: "16" }),
                  /* @__PURE__ */ e("span", { children: t(r.CUSTOM_INFORMATION) }),
                  _.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: _.length })
                ]
              }
            ),
            S && /* @__PURE__ */ o("div", { className: "custom-info-container", children: [
              _.map((i, l) => {
                const y = I(i.key), W = I(i.value), oe = y > V.maxKeyBytes, w = W > V.maxValueBytes, ge = he(i);
                return /* @__PURE__ */ o("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                    K,
                    {
                      value: i.key,
                      onChange: (pe) => d(l, "key", String(pe)),
                      placeholder: t(r.ENTER_KEY),
                      status: oe || ge ? "error" : "default",
                      tips: oe ? t(r.MAX_BYTES, { field: `Key ${i.key}`, max: V.maxKeyBytes }) : ge ? t(r.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                    K,
                    {
                      value: i.value,
                      onChange: (pe) => d(l, "value", String(pe)),
                      placeholder: t(r.ENTER_VALUE),
                      status: w ? "error" : "default",
                      tips: w ? t(r.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e(
                    g,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => c(l),
                      title: t(r.DELETE),
                      icon: /* @__PURE__ */ e(be, { size: "14" })
                    }
                  )
                ] }, l);
              }),
              _.length < V.maxCount && /* @__PURE__ */ e(g, { variant: "text", className: "add-custom-info-btn", onClick: Ee, icon: /* @__PURE__ */ e(Ce, { size: "14" }), theme: "primary", children: t(r.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
const Re = De("EditLive");
function _r({ visible: x, live: s, onClose: Y, onSuccess: G, uploadEnabled: z = !1, extraFieldsSlot: ae, onUpdate: t, onFetchDetail: $ }) {
  const { t: a } = _e(), [u, _] = E(Ae()), [p, S] = E([]), [H, M] = E(!1), D = ne([]), [J, U] = E(Oe), [de, X] = E(!1), [O, F] = E(""), [n, k] = E(""), { loading: j, execute: q } = Te({
    operationName: a(r.EDIT_LIVE),
    action: async (d) => {
      const c = s?.id || s?.liveId || "";
      return t(c, d);
    },
    showSuccess: !0,
    onSuccess: () => {
      setTimeout(() => {
        G({
          liveName: u.liveName.trim(),
          coverUrl: v.current || u.coverUrl
        }), Z();
      }, 500);
    }
  }), f = ne(null), [C, h] = E(!1), v = ne("");
  le(() => {
    s?.coverUrl ? sr(s.coverUrl).then(U) : U(Oe);
  }, [s?.coverUrl]), le(() => {
    if (s && x) {
      _({
        liveName: s.liveName || "",
        coverUrl: s.coverUrl || ""
      });
      const d = s.id || s.liveId;
      X(!0), $(d).then((c) => {
        const m = c?.customInfo;
        if (m && typeof m == "object") {
          const N = Object.entries(m).map(([L, R]) => ({
            key: L,
            value: String(R)
          }));
          S(N), M(N.length > 0), D.current = N.map((L) => L.key);
        } else
          S([]), M(!1), D.current = [];
      }).catch((c) => {
        if (c instanceof $e && F(je(c.code ?? 0, "", a(r.LIVE_NOT_FOUND))), s.customInfo && typeof s.customInfo == "object") {
          const m = Object.entries(s.customInfo).map(([N, L]) => ({
            key: N,
            value: String(L)
          }));
          S(m), M(m.length > 0), D.current = m.map((N) => N.key);
        } else
          S([]), M(!1), D.current = [];
      }).finally(() => X(!1));
    }
  }, [s?.id, x]);
  const B = () => {
    if (p.length >= V.maxCount) {
      T("error", a(r.CUSTOM_INFO_MAX_COUNT, { max: V.maxCount }));
      return;
    }
    S([...p, { key: "", value: "" }]);
  }, b = (d, c, m) => {
    const N = [...p];
    N[d][c] = m, S(N);
  }, te = (d) => {
    S(p.filter((c, m) => m !== d));
  }, T = (d, c) => {
    ce.error(c);
  }, Z = () => {
    F(""), k(""), S([]), M(!1), D.current = [], h(!1), v.current = "", f.current?.reset(), _(Ae()), Y();
  }, Ee = async () => {
    if (!s) return;
    if (!u.liveName.trim()) {
      T("error", a(r.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const d = I(u.liveName);
    if (d > A) {
      T("error", a(r.MAX_BYTES_WITH_CURRENT, { field: a(r.LIVE_TITLE), max: A, current: d }));
      return;
    }
    if (p.some(he)) {
      T("error", a(r.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    try {
      let c = "";
      try {
        c = await Ue({
          handle: f.current,
          hasPendingFile: C,
          fallbackUrl: u.coverUrl,
          label: a(r.COVER_IMAGE)
        }), v.current = c || u.coverUrl;
      } catch (R) {
        Re.error("EditLive", `Cover processing failed: ${R instanceof Error ? R.message : String(R)}`, R), T("error", R instanceof Fe ? R.message : a(r.COVER_PROCESSING_FAILED));
        return;
      }
      const m = or(p);
      if (m) {
        m.type === "key-too-long" ? T("error", a(r.MAX_BYTES, { field: `Key ${m.key}`, max: m.max })) : m.type === "value-too-long" ? T("error", a(r.KEY_VALUE_EXCEEDS_2KB, { key: m.key })) : m.type === "max-count" ? T("error", a(r.CUSTOM_INFO_MAX_COUNT, { max: m.max })) : T("error", a(r.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
        return;
      }
      const N = ir(p), L = nr(D.current, N);
      await q({
        liveId: s.id || s.liveId,
        liveName: u.liveName.trim(),
        coverUrl: c || void 0,
        customInfo: Object.keys(N).length > 0 ? N : void 0,
        deleteKeys: L.length > 0 ? L : void 0
      });
    } catch (c) {
      Re.error("EditLiveModal", "Update failed:", c);
    }
  };
  return !x || !s ? null : /* @__PURE__ */ e(
    ve,
    {
      destroyOnClose: !0,
      visible: x,
      header: a(r.EDIT_LIVE),
      onClose: Z,
      width: fe.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ o(ie, { children: [
        /* @__PURE__ */ e(g, { shape: "round", variant: "outline", onClick: Z, children: a(r.CANCEL) }),
        /* @__PURE__ */ e(
          g,
          {
            shape: "round",
            theme: "primary",
            onClick: Ee,
            loading: j,
            disabled: j || !u.liveName.trim() || f.current?.isValidating || f.current?.hasUrlError,
            children: a(j ? r.SAVING : r.SAVE)
          }
        )
      ] }),
      children: /* @__PURE__ */ o(Ve, { className: "edit-live-form", labelWidth: xe(100), children: [
        O && /* @__PURE__ */ o("div", { className: "edit-live-error", children: [
          /* @__PURE__ */ e("span", { className: "edit-live-error-icon", children: "!" }),
          /* @__PURE__ */ e("span", { children: O })
        ] }),
        /* @__PURE__ */ e(P, { label: a(r.LIVE_ID), children: /* @__PURE__ */ e(
          K,
          {
            value: s.liveId || s.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ e(P, { label: a(r.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ o("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            K,
            {
              value: u.liveName,
              onChange: (d) => _((c) => ({ ...c, liveName: String(d) })),
              placeholder: a(r.ENTER_LIVE_TITLE),
              status: I(u.liveName) > A ? "error" : "default",
              suffix: /* @__PURE__ */ o("span", { className: `input-suffix-count${I(u.liveName) > A ? " byte-overflow" : ""}`, children: [
                I(u.liveName),
                "/",
                A
              ] })
            }
          ),
          I(u.liveName) > A && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: a(r.MAX_BYTES, { field: a(r.LIVE_TITLE), max: A }) })
        ] }) }),
        /* @__PURE__ */ e(P, { label: a(r.COVER_IMAGE), children: /* @__PURE__ */ e(
          we,
          {
            ref: f,
            value: u.coverUrl,
            onChange: (d) => {
              _((c) => ({ ...c, coverUrl: d })), h(!1);
            },
            type: "cover",
            uploadEnabled: z,
            cropEnabled: !0,
            aspectRatio: J,
            placeholder: a(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: z,
            onFileReady: (d) => h(!!d)
          }
        ) }),
        /* @__PURE__ */ e(re, { slot: ae, props: { mode: "edit", live: s, formData: { ...u }, customInfos: [...p] } }),
        /* @__PURE__ */ o("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ o(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => M(!H),
              children: [
                H ? /* @__PURE__ */ e(ye, { size: "16" }) : /* @__PURE__ */ e(Me, { size: "16" }),
                /* @__PURE__ */ e("span", { children: a(r.CUSTOM_INFORMATION) }),
                p.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: p.length })
              ]
            }
          ),
          H && /* @__PURE__ */ o("div", { className: "custom-info-container", children: [
            p.map((d, c) => {
              const m = I(d.key), N = I(d.value), L = m > V.maxKeyBytes, R = N > V.maxValueBytes, me = he(d);
              return /* @__PURE__ */ o("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                  K,
                  {
                    value: d.key,
                    onChange: (se) => b(c, "key", String(se)),
                    placeholder: a(r.ENTER_KEY),
                    status: L || me ? "error" : "default",
                    tips: L ? a(r.MAX_BYTES, { field: "Key", max: V.maxKeyBytes }) : me ? a(r.CUSTOM_INFO_KEY_REQUIRED) : ""
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                  K,
                  {
                    value: d.value,
                    onChange: (se) => b(c, "value", String(se)),
                    placeholder: a(r.ENTER_VALUE),
                    status: R ? "error" : "default",
                    tips: R ? a(r.VALUE_EXCEEDS_2KB_LIMIT) : ""
                  }
                ) }),
                /* @__PURE__ */ e(
                  g,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => te(c),
                    title: a(r.DELETE),
                    icon: /* @__PURE__ */ e(be, { size: 14 })
                  }
                )
              ] }, c);
            }),
            p.length < V.maxCount && /* @__PURE__ */ e(g, { variant: "text", className: "add-custom-info-btn", onClick: B, icon: /* @__PURE__ */ e(Ce, { size: 14 }), theme: "primary", children: a(r.ADD) })
          ] })
        ] })
      ] })
    },
    `edit-live-${s?.id}`
  );
}
function Kr() {
  const x = Pe(), { t: s } = _e(), {
    createLive: Y,
    updateLive: G,
    fetchLiveDetail: z,
    endLive: ae
  } = Ir(), t = qe().components?.liveList, $ = ne(null);
  $.current || ($.current = new lr({
    endLive: ae,
    onEnterLive: (C) => x(`/live-control/${C}`, { state: { from: "live-list" } }),
    t: s,
    toast: ce,
    fetchLiveDetail: z
  }));
  const a = $.current, u = ke(a.subscribe, a.getState, a.getState), { loading: _, execute: p } = Te({
    operationName: s(r.DISSOLVE),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await a.confirmDelete();
    }
  });
  le(() => (a.init(), () => a.dispose()), []);
  const S = Cr(), [H, M] = E(0);
  le(() => {
    if (!ue || typeof ue.on != "function") return;
    const C = () => M((h) => h + 1);
    return ue.on("languageChanged", C), () => {
      ue.off("languageChanged", C);
    };
  }, []);
  const D = Be(() => vr({ hasExtraColumn: !!t?.tableExtraColumns }).map((h) => {
    switch (h.key) {
      case "liveId":
        return {
          ...h,
          title: s(r.LIVE_ID),
          render: (v) => /* @__PURE__ */ o("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ e("span", { className: "live-list-id-text", children: v.liveId }),
            /* @__PURE__ */ e(
              ee,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => a.copyText(v.liveId, s(r.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ...h,
          title: s(r.LIVE_TITLE),
          render: (v) => v.liveName || "-"
        };
      case "coverUrl":
        return {
          ...h,
          title: s(r.COVER_IMAGE),
          render: (v) => /* @__PURE__ */ e("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ e("img", { src: v.coverUrl || Qe, alt: v.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ...h,
          title: s(r.ANCHOR_ID),
          render: (v) => /* @__PURE__ */ e("span", { className: "live-list-text", children: v.anchor?.userId || "-" })
        };
      case "createdAt":
        return {
          ...h,
          title: s(r.CREATE_TIME),
          render: (v) => /* @__PURE__ */ e("span", { className: "live-list-text", children: dr(v.createdAt) })
        };
      case "customer-extra":
        return {
          ...h,
          title: "",
          render: (v) => /* @__PURE__ */ e(re, { slot: t?.tableExtraColumns, props: { live: v } })
        };
      case "actions":
        return {
          ...h,
          title: s(r.ACTIONS),
          render: (v) => {
            const B = cr({
              live: v,
              t: s,
              onEnter: (b) => a.enterLive(b),
              onDetail: (b) => {
                a.showDetail(b);
              },
              onEdit: (b) => a.openEditModal(b),
              onDelete: (b) => a.requestDelete(b)
            });
            return /* @__PURE__ */ o(ie, { children: [
              /* @__PURE__ */ e(hr, { actions: B }),
              /* @__PURE__ */ e(re, { slot: t?.rowActions, props: { live: v } })
            ] });
          }
        };
      default:
        return { ...h, title: "" };
    }
  }), [s, t, a, H]), { lives: J, loading: U, refreshing: de, currentPage: X, hasMoreData: O, searchInput: F, obsModal: n, confirmDialog: k, isCreateModalVisible: j, isEditModalVisible: q, editingLive: f } = u;
  return /* @__PURE__ */ o("div", { className: "live-list-page", children: [
    /* @__PURE__ */ o("div", { className: "live-list-header", children: [
      /* @__PURE__ */ e("h1", { className: "live-list-title", children: s(r.LIVE_LIST) }),
      /* @__PURE__ */ e(re, { slot: t?.beforeToolbar, props: { lives: J, loading: U } }),
      /* @__PURE__ */ o("div", { className: "header-actions", children: [
        /* @__PURE__ */ e(
          K,
          {
            value: F,
            onChange: (C) => a.setSearchInput(String(C)),
            onEnter: () => {
              if (mr(F, Ne)) {
                ce.error(s(r.INPUT_TOO_LONG));
                return;
              }
              a.search();
            },
            clearable: !0,
            onClear: () => {
              a.clearSearch();
            },
            placeholder: s(r.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ e(Xe, { size: 16 }),
            style: { width: 220 },
            status: I(F) > Ne ? "error" : "default",
            tips: I(F) > Ne ? s(r.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(
          g,
          {
            shape: "round",
            variant: "outline",
            disabled: de || U,
            onClick: () => {
              a.refresh();
            },
            icon: /* @__PURE__ */ e(We, { className: de ? "spinning" : "" }),
            children: s(r.REFRESH)
          }
        ),
        /* @__PURE__ */ e(
          g,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ e(Ce, {}),
            onClick: () => a.openCreateModal(),
            children: s(r.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ e(re, { slot: t?.afterToolbar, props: { lives: J, loading: U } })
    ] }),
    /* @__PURE__ */ e(He, { className: "live-list-card", children: /* @__PURE__ */ e(
      Er,
      {
        columns: D,
        data: J,
        rowKey: "liveId",
        loading: U,
        tableClassName: "live-list-table",
        bodyClassName: "live-list-content",
        rowClassName: "live-list-row",
        loadingNode: /* @__PURE__ */ o("div", { className: "live-list-loading-container", children: [
          /* @__PURE__ */ e("div", { className: "live-list-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "live-list-loading-text", children: s(r.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "live-list-empty-container", children: /* @__PURE__ */ e("span", { className: "live-list-empty-text", children: s(r.NO_LIVE_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ e(
      fr,
      {
        currentPage: X,
        hasMoreData: O,
        loading: !1,
        onGoToFirstPage: () => a.goToPage(1),
        onPrevPage: () => a.goToPage(X - 1),
        onNextPage: () => a.goToPage(X + 1)
      }
    ),
    /* @__PURE__ */ e(
      Nr,
      {
        visible: j,
        onClose: () => a.closeCreateModal(),
        onSuccess: () => a.onLiveCreated(),
        onCreate: Y,
        uploadEnabled: S
      }
    ),
    f && /* @__PURE__ */ e(
      _r,
      {
        visible: q,
        live: {
          id: f.liveId,
          liveName: f.liveName,
          coverUrl: f.coverUrl,
          customInfo: f.customInfo ? typeof f.customInfo == "string" ? (() => {
            try {
              return JSON.parse(f.customInfo);
            } catch {
              return;
            }
          })() : f.customInfo : void 0
        },
        onClose: () => a.closeEditModal(),
        onSuccess: (C) => a.onLiveEdited(C),
        onUpdate: (C, h) => G({ ...h, liveId: C }),
        onFetchDetail: z,
        uploadEnabled: S,
        extraFieldsSlot: t?.liveFormExtraFields
      }
    ),
    /* @__PURE__ */ e(
      ve,
      {
        visible: k.visible,
        header: k.title,
        onClose: () => a.cancelDelete(),
        width: fe.CONFIRM,
        footer: /* @__PURE__ */ o(ie, { children: [
          /* @__PURE__ */ e(g, { shape: "round", variant: "outline", disabled: _, onClick: () => a.cancelDelete(), children: s(r.CANCEL) }),
          /* @__PURE__ */ e(g, { shape: "round", theme: "primary", loading: _, onClick: () => p(), children: s(r.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: k.content })
      }
    ),
    /* @__PURE__ */ e(
      ve,
      {
        visible: n.visible && !!n.live,
        header: s(r.LIVE_INFORMATION),
        onClose: () => a.closeDetail(),
        width: fe.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ e(g, { shape: "round", variant: "outline", onClick: () => a.closeDetail(), children: s(r.CLOSE) }),
        children: /* @__PURE__ */ o("div", { className: "live-info-form", children: [
          n.errorMessage && /* @__PURE__ */ o("div", { className: "live-info-error", children: [
            /* @__PURE__ */ e("span", { className: "live-info-error-icon", children: "!" }),
            /* @__PURE__ */ e("span", { children: n.errorMessage })
          ] }),
          /* @__PURE__ */ o("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: s(r.BASIC_INFORMATION) }),
            /* @__PURE__ */ o("div", { className: "live-info-card", children: [
              /* @__PURE__ */ o("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: s(r.ANCHOR_ID) }),
                /* @__PURE__ */ o("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value", children: n.live?.anchor?.userId || "-" }),
                  n.live?.anchor?.userId && /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => n.live && void a.copyText(n.live.anchor.userId, s(r.LIVE_HOST)),
                      children: /* @__PURE__ */ e(ee, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: s(r.LIVE_ID) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: n.live?.liveId || "-" }) })
              ] }),
              /* @__PURE__ */ o("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: s(r.LIVE_TITLE) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: n.live?.liveName || "-" }) })
              ] }),
              /* @__PURE__ */ o("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: s(r.LIVE_COVER) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: n.live?.coverUrl || "-" }) })
              ] })
            ] })
          ] }),
          (n.streamInfo || n.actionLoading === "stream") && /* @__PURE__ */ o("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: s(r.STREAM_INFO) }),
            /* @__PURE__ */ e("div", { className: "live-info-card", children: n.streamInfo ? /* @__PURE__ */ o(ie, { children: [
              /* @__PURE__ */ o("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: s(r.SERVER_URL) }),
                /* @__PURE__ */ o("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: n.streamInfo.serverUrl }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => n.streamInfo && void a.copyText(n.streamInfo.serverUrl, s(r.SERVER_URL)),
                      children: /* @__PURE__ */ e(ee, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ o("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: s(r.STREAM_KEY) }),
                /* @__PURE__ */ o("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: n.streamInfo.streamKey }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => n.streamInfo && void a.copyText(n.streamInfo.streamKey, s(r.STREAM_KEY)),
                      children: /* @__PURE__ */ e(ee, { size: 14 })
                    }
                  )
                ] })
              ] })
            ] }) : /* @__PURE__ */ e("div", { className: "live-info-row", children: /* @__PURE__ */ e("span", { className: "live-info-label", style: { width: "auto" }, children: s(r.GETTING_STREAM_INFO) }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function Cr() {
  const [x, s] = E(!1);
  return le(() => {
    let Y = !1;
    return ur().then((G) => {
      Y || s(G);
    }), () => {
      Y = !0;
    };
  }, []), x;
}
export {
  Kr as default
};
