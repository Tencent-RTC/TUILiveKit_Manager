import { jsx as r, jsxs as i, Fragment as le } from "react/jsx-runtime";
import { useState as E, useRef as ce, useEffect as de, useSyncExternalStore as Be, useMemo as Ke } from "react";
import { useNavigate as Ye } from "react-router-dom";
import { Dialog as fe, Input as G, Select as Ge, InputNumber as He, Checkbox as Xe, Button as L, Card as ze } from "tdesign-react";
import { useUIKit as _e, i18next as ve } from "@tencentcloud/uikit-base-component-react";
import { ChevronDownIcon as Re, ChevronRightIcon as Me, CloseIcon as be, AddIcon as Ce, FileCopyIcon as ae, SearchIcon as We, RefreshIcon as $e } from "tdesign-icons-react";
import { g as xe, c as je, I as e, an as he, A as De, x as qe, L as Qe, z as Je, l as Ze, aD as er } from "../../chunks/layout.Br-W54NR.js";
import { a3 as rr, au as Le, A as ee, g as N, Q as y, aV as ar, ba as Se, be as tr, C as F, bh as Ee, as as sr, a9 as ir, bS as nr, av as Oe, a0 as Ae, aC as or, c1 as lr, an as cr, aW as dr, T as mr, ac as ur, aN as vr, P as Ne, bk as fr } from "../../chunks/main-layout.1w0vpJq1.js";
import { r as Ue, I as Ve, b as hr } from "../../chunks/upload.C-_mha0d.js";
import { g as Er } from "../../chunks/columns.CB_IFrzG.js";
import { M as Ir } from "../../chunks/MonitorPagination.DJ-uhGYM.js";
import { a as ge, M as me } from "../../chunks/useAsyncAction.CJQgktvN.js";
import { I as we } from "../../chunks/ImageUpload.B_lPyswd.js";
import { S as te } from "../../chunks/SlotRenderer.CuSOZ-rh.js";
import { F as Fe, a as Y } from "../../chunks/FormField.D0eRD3uO.js";
import { A as pr, F as Nr } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { useLiveMonitorState as _r } from "../../react.js";
const Cr = xe("CreateLive");
function gr({ visible: D, onClose: s, onSuccess: H, uploadEnabled: X = !1, extraFieldsSlot: q, onCreate: se }) {
  const { t } = _e(), { opSuccess: k, opFailed: a } = je(t), _ = rr.map((n) => ({
    value: n.value,
    label: t(n.labelKey)
  })), [o, I] = E(Le()), [h, U] = E([]), [M, b] = E(!1), [P, V] = E(!1), [ue, B] = E(""), [ie, K] = E(""), [l, z] = E(!1), [p, Q] = E(""), [T, g] = E(""), [u, f] = E(null), [W, S] = E(""), J = ce(null), [x, Z] = E(!1), $ = (n, c) => {
    n === "success" ? me.success(c) : me.error(c);
  }, m = async (n, c) => {
    try {
      await sr(n), $("success", k(e.COPY, c));
    } catch (R) {
      Cr.error("handleCopy", `复制失败 (ErrorCode: ${qe(R).code || "N/A"})`, R);
      const j = R instanceof Error ? R : new Error(String(R));
      $("error", a(e.COPY, null, j.message || t(e.NETWORK_ERROR)));
    }
  }, d = () => {
    U([...h, { key: "", value: "" }]);
  }, v = (n, c, R) => {
    const j = [...h];
    j[n][c] = R, U(j);
  }, C = (n) => {
    U(h.filter((c, R) => R !== n));
  }, O = () => {
    I(Le()), U([]), b(!1), V(!1), B(""), K(""), z(!1), Q(""), g(""), f(null), S(""), Z(!1), J.current?.reset();
  }, A = () => {
    O(), s();
  }, { loading: re, execute: ne } = ge({
    operationName: t(e.CREATE_LIVE),
    action: async () => {
      let n = "";
      try {
        n = await Ue({
          handle: J.current,
          hasPendingFile: x,
          fallbackUrl: o.coverUrl,
          label: t(e.COVER_IMAGE)
        });
      } catch (w) {
        throw w instanceof Ve ? new Error(w.message) : new Error(t(e.COVER_PROCESSING_FAILED));
      }
      const c = ir({
        formData: o,
        coverUrl: n,
        customInfos: h,
        useObsStreaming: l
      }), R = c.liveId, j = c.anchorId;
      await se(c), f(null), S("");
      let oe = !l;
      if (l) {
        const w = await nr({
          liveId: R,
          anchorId: j,
          onStatusChange: Q,
          messages: {
            getStreamInfoFailed: a(e.OP_GET_STREAM_INFO),
            importAccountFailed: a(e.OP_IMPORT, e.LIVE),
            addRobotFailed: a(e.OP_ADD, e.LIVE),
            pickSeatFailed: a(e.OP_PICK, e.LIVE),
            setupFailed: a(e.OP_OBS_SETUP_ACT, e.LIVE)
          }
        });
        f(w.streamInfo), S(w.streamInfoError), g(w.setupError), oe = w.configuredSuccessfully;
      }
      return { obsConfiguredSuccessfully: oe };
    },
    onSuccess: () => {
      V(!0);
    }
  }), ke = async () => {
    if (!o.anchorId.trim()) {
      $("error", t(e.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const n = N(o.anchorId);
    if (n > ee) {
      $("error", t(e.MAX_BYTES_WITH_CURRENT, { field: t(e.ANCHOR_ID), max: ee, current: n }));
      return;
    }
    const c = N(o.liveName);
    if (c > y) {
      $("error", t(e.MAX_BYTES_WITH_CURRENT, { field: t(e.LIVE_TITLE), max: y, current: c }));
      return;
    }
    if (h.some(Ee)) {
      $("error", t(e.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    B(""), Q(""), g(""), await ne();
  }, Pe = () => {
    O(), H();
  }, Ie = l ? p === "" || p === "creating" || p === "seating" ? {
    text: t(p === "creating" ? e.LOADING : p === "seating" ? e.LOADING : e.LOADING),
    error: !1
  } : p === "error" ? {
    text: a(e.OP_OBS_SETUP_ACT, e.LIVE, T),
    error: !0
  } : u ? {
    text: t(e.OBS_READY_COPY_INFO),
    error: !1
  } : W ? {
    text: a(e.OP_GET_STREAM, e.LIVE, W),
    error: !0
  } : {
    text: k(e.OP_READY, "OBS"),
    error: !1
  } : u ? {
    text: t(e.OBS_READY_COPY_INFO),
    error: !1
  } : W ? {
    text: a(e.OP_GET_STREAM, e.LIVE, W),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ r(
    fe,
    {
      visible: D,
      header: P ? k(e.CREATE, e.LIVE) : t(e.CREATE_LIVE),
      onClose: A,
      width: he.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: P ? /* @__PURE__ */ r(
        L,
        {
          shape: "round",
          theme: "primary",
          onClick: Pe,
          disabled: l && (p === "" || p === "creating" || p === "seating"),
          children: t(l && p !== "ready" && p !== "error" ? e.LOADING : e.COMPLETE)
        }
      ) : /* @__PURE__ */ i(le, { children: [
        /* @__PURE__ */ r(L, { shape: "round", variant: "outline", onClick: A, children: t(e.CANCEL) }),
        /* @__PURE__ */ r(
          L,
          {
            shape: "round",
            theme: "primary",
            onClick: ke,
            loading: re,
            disabled: re || !o.anchorId.trim() || J.current?.isValidating || J.current?.hasUrlError,
            children: t(re ? e.CREATING : e.CREATE)
          }
        )
      ] }),
      children: P ? (
        /* 创建成功提示 */
        /* @__PURE__ */ i("div", { className: "create-success-content", children: [
          /* @__PURE__ */ i("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ r("div", { className: "create-success-icon", children: p === "error" ? /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ r("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : l && (p === "" || p === "creating" || p === "seating") ? /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ r("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ i("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ r("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ r("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ r("h3", { children: t(e.OP_SUCCESS, { entity: t(e.LIVE), action: t(e.LABEL_CREATED) }) }),
            Ie.text && /* @__PURE__ */ r("p", { className: `create-success-description${Ie.error ? " is-error" : ""}`, children: Ie.text })
          ] }),
          u && /* @__PURE__ */ i("div", { className: "create-success-section", children: [
            /* @__PURE__ */ r("div", { className: "create-success-section-title", children: t(e.STREAM_INFO) }),
            /* @__PURE__ */ i("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ i("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ i("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ r("span", { children: t(e.SERVER_URL) }),
                  /* @__PURE__ */ r(L, { variant: "text", size: "small", icon: /* @__PURE__ */ r(ae, { size: "14" }), onClick: () => m(u.serverUrl, t(e.SERVER_URL)), children: t(e.COPY) })
                ] }),
                /* @__PURE__ */ r("code", { className: "stream-info-value", children: u.serverUrl })
              ] }),
              /* @__PURE__ */ i("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ i("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ r("span", { children: t(e.STREAM_KEY) }),
                  /* @__PURE__ */ r(L, { variant: "text", size: "small", icon: /* @__PURE__ */ r(ae, { size: 14 }), onClick: () => m(u.streamKey, t(e.STREAM_KEY)), children: t(e.COPY) })
                ] }),
                /* @__PURE__ */ r("code", { className: "stream-info-value", children: u.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ i(Fe, { className: "create-live-form", labelWidth: De(100), children: [
          /* @__PURE__ */ r(Y, { label: t(e.LIVE_HOST), requiredMark: !0, children: /* @__PURE__ */ i("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ r(
              G,
              {
                value: o.anchorId,
                onChange: (n) => I((c) => ({ ...c, anchorId: String(n) })),
                placeholder: t(e.ENTER_ANCHOR_ID),
                status: N(o.anchorId) > ee ? "error" : "default",
                suffix: /* @__PURE__ */ i("span", { className: `input-suffix-count${N(o.anchorId) > ee ? " byte-overflow" : ""}`, children: [
                  N(o.anchorId),
                  "/",
                  ee
                ] })
              }
            ),
            N(o.anchorId) > ee && /* @__PURE__ */ r("div", { className: "form-field__error-tip", children: t(e.MAX_BYTES, { field: t(e.ANCHOR_ID), max: ee }) })
          ] }) }),
          /* @__PURE__ */ r(Y, { label: t(e.LIVE_TITLE), children: /* @__PURE__ */ i("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ r(
              G,
              {
                value: o.liveName,
                onChange: (n) => I((c) => ({ ...c, liveName: String(n) })),
                placeholder: t(e.ENTER_LIVE_TITLE),
                status: N(o.liveName) > y ? "error" : "default",
                suffix: /* @__PURE__ */ i("span", { className: `input-suffix-count${N(o.liveName) > y ? " byte-overflow" : ""}`, children: [
                  N(o.liveName),
                  "/",
                  y
                ] })
              }
            ),
            N(o.liveName) > y && /* @__PURE__ */ r("div", { className: "form-field__error-tip", children: t(e.MAX_BYTES, { field: t(e.LIVE_TITLE), max: y }) })
          ] }) }),
          /* @__PURE__ */ r(Y, { label: t(e.COVER_IMAGE), children: /* @__PURE__ */ r(
            we,
            {
              ref: J,
              value: o.coverUrl,
              onChange: (n) => {
                I((c) => ({ ...c, coverUrl: n })), Z(!1);
              },
              type: "cover",
              uploadEnabled: X,
              cropEnabled: !0,
              aspectRatio: ar(o.seatTemplate),
              placeholder: t(e.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: X,
              onFileReady: (n) => Z(!!n)
            }
          ) }),
          /* @__PURE__ */ r(Y, { label: t(e.LAYOUT_TEMPLATE), requiredMark: !0, help: (() => {
            const n = t(Se(o.seatTemplate)?.descKey || "");
            return Se(o.seatTemplate)?.orientation === "landscape" ? `${n}，${t(e.LANDSCAPE_BROADCASTING_HINT)}` : n;
          })(), children: /* @__PURE__ */ r(
            Ge,
            {
              options: _,
              value: o.seatTemplate,
              onChange: (n) => I((c) => ({ ...c, seatTemplate: n })),
              style: { width: "100%" }
            }
          ) }),
          tr(o.seatTemplate) && /* @__PURE__ */ r(Y, { label: t(e.MAX_SEATS), help: t(e.MAX_SEATS_HELP), children: /* @__PURE__ */ r(
            He,
            {
              value: o.maxSeatCount,
              onChange: (n) => I((c) => ({ ...c, maxSeatCount: Number(n) || 1 })),
              min: 1,
              max: 16,
              placeholder: t(e.ENTER_MAX_SEAT_COUNT),
              theme: "normal",
              allowInputOverLimit: !0,
              inputProps: {
                tips: o.maxSeatCount < 1 || o.maxSeatCount > 16 ? t(e.SEAT_COUNT_RANGE_1_16) : "",
                status: o.maxSeatCount < 1 || o.maxSeatCount > 16 ? "error" : "default"
              },
              style: { width: "100%" }
            }
          ) }),
          /* @__PURE__ */ r(te, { slot: q, props: { mode: "create", formData: { ...o }, customInfos: [...h] } }),
          /* @__PURE__ */ r(Y, { label: t(e.STREAMING_METHOD), help: t(e.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ r(
            Xe,
            {
              checked: l,
              onChange: (n) => z(n),
              children: t(e.USE_OBS_STREAMING)
            }
          ) }),
          /* @__PURE__ */ i("div", { className: "custom-info-section", children: [
            /* @__PURE__ */ i(
              "div",
              {
                className: "custom-info-toggle",
                onClick: () => b(!M),
                children: [
                  M ? /* @__PURE__ */ r(Re, { size: "16" }) : /* @__PURE__ */ r(Me, { size: "16" }),
                  /* @__PURE__ */ r("span", { children: t(e.CUSTOM_INFORMATION) }),
                  h.length > 0 && /* @__PURE__ */ r("span", { className: "custom-info-count", children: h.length })
                ]
              }
            ),
            M && /* @__PURE__ */ i("div", { className: "custom-info-container", children: [
              h.map((n, c) => {
                const R = N(n.key), j = N(n.value), oe = R > F.maxKeyBytes, w = j > F.maxValueBytes, Te = Ee(n);
                return /* @__PURE__ */ i("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ r("div", { className: "custom-input-wrap", children: /* @__PURE__ */ r(
                    G,
                    {
                      value: n.key,
                      onChange: (pe) => v(c, "key", String(pe)),
                      placeholder: t(e.ENTER_KEY),
                      status: oe || Te ? "error" : "default",
                      tips: oe ? t(e.MAX_BYTES, { field: `Key ${n.key}`, max: F.maxKeyBytes }) : Te ? t(e.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ r("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ r(
                    G,
                    {
                      value: n.value,
                      onChange: (pe) => v(c, "value", String(pe)),
                      placeholder: t(e.ENTER_VALUE),
                      status: w ? "error" : "default",
                      tips: w ? t(e.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ r(
                    L,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => C(c),
                      title: t(e.DELETE),
                      icon: /* @__PURE__ */ r(be, { size: "14" })
                    }
                  )
                ] }, c);
              }),
              h.length < F.maxCount && /* @__PURE__ */ r(L, { variant: "text", className: "add-custom-info-btn", onClick: d, icon: /* @__PURE__ */ r(Ce, { size: "14" }), theme: "primary", children: t(e.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
const ye = xe("EditLive");
function Tr({ visible: D, live: s, onClose: H, onSuccess: X, uploadEnabled: q = !1, extraFieldsSlot: se, onUpdate: t, onFetchDetail: k }) {
  const { t: a } = _e(), [_, o] = E(Oe()), [I, h] = E([]), [U, M] = E(!1), b = ce([]), [P, V] = E(Ae), [ue, B] = E(!1), [ie, K] = E(""), [l, z] = E(""), { loading: p, execute: Q } = ge({
    toast: { action: e.EDIT, entity: e.LIVE },
    action: async (m) => {
      const d = s?.id || s?.liveId || "";
      return t(d, m);
    },
    onSuccess: () => {
      setTimeout(() => {
        X({
          liveName: _.liveName.trim(),
          coverUrl: f.current || _.coverUrl
        }), Z();
      }, 500);
    }
  }), T = ce(null), [g, u] = E(!1), f = ce("");
  de(() => {
    s?.coverUrl ? or(s.coverUrl).then(V) : V(Ae);
  }, [s?.coverUrl]), de(() => {
    if (s && D) {
      o({
        liveName: s.liveName || "",
        coverUrl: s.coverUrl || ""
      });
      const m = s.id || s.liveId;
      B(!0), k(m).then((d) => {
        const v = d?.customInfo;
        if (v && typeof v == "object") {
          const C = Object.entries(v).map(([O, A]) => ({
            key: O,
            value: String(A)
          }));
          h(C), M(C.length > 0), b.current = C.map((O) => O.key);
        } else
          h([]), M(!1), b.current = [];
      }).catch((d) => {
        if (d instanceof Qe && K(Je(d.code ?? 0, "", a(e.LIVE_NOT_FOUND))), s.customInfo && typeof s.customInfo == "object") {
          const v = Object.entries(s.customInfo).map(([C, O]) => ({
            key: C,
            value: String(O)
          }));
          h(v), M(v.length > 0), b.current = v.map((C) => C.key);
        } else
          h([]), M(!1), b.current = [];
      }).finally(() => B(!1));
    }
  }, [s?.id, D]);
  const W = () => {
    if (I.length >= F.maxCount) {
      x("error", a(e.CUSTOM_INFO_MAX_COUNT, { max: F.maxCount }));
      return;
    }
    h([...I, { key: "", value: "" }]);
  }, S = (m, d, v) => {
    const C = [...I];
    C[m][d] = v, h(C);
  }, J = (m) => {
    h(I.filter((d, v) => v !== m));
  }, x = (m, d) => {
    me.error(d);
  }, Z = () => {
    K(""), z(""), h([]), M(!1), b.current = [], u(!1), f.current = "", T.current?.reset(), o(Oe()), H();
  }, $ = async () => {
    if (!s) return;
    if (!_.liveName.trim()) {
      x("error", a(e.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const m = N(_.liveName);
    if (m > y) {
      x("error", a(e.MAX_BYTES_WITH_CURRENT, { field: a(e.LIVE_TITLE), max: y, current: m }));
      return;
    }
    if (I.some(Ee)) {
      x("error", a(e.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    try {
      let d = "";
      try {
        d = await Ue({
          handle: T.current,
          hasPendingFile: g,
          fallbackUrl: _.coverUrl,
          label: a(e.COVER_IMAGE)
        }), f.current = d || _.coverUrl;
      } catch (A) {
        ye.error("EditLive", `Cover processing failed: ${A instanceof Error ? A.message : String(A)}`, A), x("error", A instanceof Ve ? A.message : a(e.COVER_PROCESSING_FAILED));
        return;
      }
      const v = lr(I);
      if (v) {
        v.type === "key-too-long" ? x("error", a(e.MAX_BYTES, { field: `Key ${v.key}`, max: v.max })) : v.type === "value-too-long" ? x("error", a(e.KEY_VALUE_EXCEEDS_2KB, { key: v.key })) : v.type === "max-count" ? x("error", a(e.CUSTOM_INFO_MAX_COUNT, { max: v.max })) : x("error", a(e.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
        return;
      }
      const C = cr(I), O = dr(b.current, C);
      await Q({
        liveId: s.id || s.liveId,
        liveName: _.liveName.trim(),
        coverUrl: d || void 0,
        customInfo: Object.keys(C).length > 0 ? C : void 0,
        deleteKeys: O.length > 0 ? O : void 0
      });
    } catch (d) {
      ye.error("EditLiveModal", "Update failed:", d);
    }
  };
  return !D || !s ? null : /* @__PURE__ */ r(
    fe,
    {
      destroyOnClose: !0,
      visible: D,
      header: a(e.EDIT_LIVE),
      onClose: Z,
      width: he.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ i(le, { children: [
        /* @__PURE__ */ r(L, { shape: "round", variant: "outline", onClick: Z, children: a(e.CANCEL) }),
        /* @__PURE__ */ r(
          L,
          {
            shape: "round",
            theme: "primary",
            onClick: $,
            loading: p,
            disabled: p || !_.liveName.trim() || T.current?.isValidating || T.current?.hasUrlError,
            children: a(p ? e.SAVING : e.SAVE)
          }
        )
      ] }),
      children: /* @__PURE__ */ i(Fe, { className: "edit-live-form", labelWidth: De(100), children: [
        ie && /* @__PURE__ */ i("div", { className: "edit-live-error", children: [
          /* @__PURE__ */ r("span", { className: "edit-live-error-icon", children: "!" }),
          /* @__PURE__ */ r("span", { children: ie })
        ] }),
        /* @__PURE__ */ r(Y, { label: a(e.LIVE_ID), children: /* @__PURE__ */ r(
          G,
          {
            value: s.liveId || s.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ r(Y, { label: a(e.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ i("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ r(
            G,
            {
              value: _.liveName,
              onChange: (m) => o((d) => ({ ...d, liveName: String(m) })),
              placeholder: a(e.ENTER_LIVE_TITLE),
              status: N(_.liveName) > y ? "error" : "default",
              suffix: /* @__PURE__ */ i("span", { className: `input-suffix-count${N(_.liveName) > y ? " byte-overflow" : ""}`, children: [
                N(_.liveName),
                "/",
                y
              ] })
            }
          ),
          N(_.liveName) > y && /* @__PURE__ */ r("div", { className: "form-field__error-tip", children: a(e.MAX_BYTES, { field: a(e.LIVE_TITLE), max: y }) })
        ] }) }),
        /* @__PURE__ */ r(Y, { label: a(e.COVER_IMAGE), children: /* @__PURE__ */ r(
          we,
          {
            ref: T,
            value: _.coverUrl,
            onChange: (m) => {
              o((d) => ({ ...d, coverUrl: m })), u(!1);
            },
            type: "cover",
            uploadEnabled: q,
            cropEnabled: !0,
            aspectRatio: P,
            placeholder: a(e.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: q,
            onFileReady: (m) => u(!!m)
          }
        ) }),
        /* @__PURE__ */ r(te, { slot: se, props: { mode: "edit", live: s, formData: { ..._ }, customInfos: [...I] } }),
        /* @__PURE__ */ i("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ i(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => M(!U),
              children: [
                U ? /* @__PURE__ */ r(Re, { size: "16" }) : /* @__PURE__ */ r(Me, { size: "16" }),
                /* @__PURE__ */ r("span", { children: a(e.CUSTOM_INFORMATION) }),
                I.length > 0 && /* @__PURE__ */ r("span", { className: "custom-info-count", children: I.length })
              ]
            }
          ),
          U && /* @__PURE__ */ i("div", { className: "custom-info-container", children: [
            I.map((m, d) => {
              const v = N(m.key), C = N(m.value), O = v > F.maxKeyBytes, A = C > F.maxValueBytes, re = Ee(m);
              return /* @__PURE__ */ i("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ r("div", { className: "custom-input-wrap", children: /* @__PURE__ */ r(
                  G,
                  {
                    value: m.key,
                    onChange: (ne) => S(d, "key", String(ne)),
                    placeholder: a(e.ENTER_KEY),
                    status: O || re ? "error" : "default",
                    tips: O ? a(e.MAX_BYTES, { field: "Key", max: F.maxKeyBytes }) : re ? a(e.CUSTOM_INFO_KEY_REQUIRED) : ""
                  }
                ) }),
                /* @__PURE__ */ r("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ r(
                  G,
                  {
                    value: m.value,
                    onChange: (ne) => S(d, "value", String(ne)),
                    placeholder: a(e.ENTER_VALUE),
                    status: A ? "error" : "default",
                    tips: A ? a(e.VALUE_EXCEEDS_2KB_LIMIT) : ""
                  }
                ) }),
                /* @__PURE__ */ r(
                  L,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => J(d),
                    title: a(e.DELETE),
                    icon: /* @__PURE__ */ r(be, { size: 14 })
                  }
                )
              ] }, d);
            }),
            I.length < F.maxCount && /* @__PURE__ */ r(L, { variant: "text", className: "add-custom-info-btn", onClick: W, icon: /* @__PURE__ */ r(Ce, { size: 14 }), theme: "primary", children: a(e.ADD) })
          ] })
        ] })
      ] })
    },
    `edit-live-${s?.id}`
  );
}
function Yr() {
  const D = Ye(), { t: s } = _e(), {
    createLive: H,
    updateLive: X,
    fetchLiveDetail: q,
    endLive: se
  } = _r(), t = Ze().components?.liveList, k = ce(null);
  k.current || (k.current = new mr({
    endLive: se,
    onEnterLive: (g) => D(`/live-control/${g}`, { state: { from: "live-list" } }),
    t: s,
    toast: me,
    fetchLiveDetail: q
  }));
  const a = k.current, _ = Be(a.subscribe, a.getState, a.getState), { loading: o, execute: I } = ge({
    toast: { action: e.DISSOLVE, entity: e.LIVE },
    operationName: s(e.DISSOLVE),
    action: async () => {
      await a.confirmDelete();
    }
  });
  de(() => (a.init(), () => a.dispose()), []);
  const h = Lr(), [U, M] = E(0);
  de(() => {
    if (!ve || typeof ve.on != "function") return;
    const g = () => M((u) => u + 1);
    return ve.on("languageChanged", g), () => {
      ve.off("languageChanged", g);
    };
  }, []);
  const b = Ke(() => Er({ hasExtraColumn: !!t?.tableExtraColumns }).map((u) => {
    switch (u.key) {
      case "liveId":
        return {
          ...u,
          title: s(e.LIVE_ID),
          render: (f) => /* @__PURE__ */ i("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ r("span", { className: "live-list-id-text", children: f.liveId }),
            /* @__PURE__ */ r(
              ae,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => a.copyText(f.liveId, s(e.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ...u,
          title: s(e.LIVE_TITLE),
          render: (f) => f.liveName || "-"
        };
      case "coverUrl":
        return {
          ...u,
          title: s(e.COVER_IMAGE),
          render: (f) => /* @__PURE__ */ r("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ r("img", { src: f.coverUrl || er, alt: f.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ...u,
          title: s(e.ANCHOR_ID),
          render: (f) => /* @__PURE__ */ r("span", { className: "live-list-text", children: f.anchor?.userId || "-" })
        };
      case "createdAt":
        return {
          ...u,
          title: s(e.CREATE_TIME),
          render: (f) => /* @__PURE__ */ r("span", { className: "live-list-text", children: vr(f.createdAt) })
        };
      case "customer-extra":
        return {
          ...u,
          title: "",
          render: (f) => /* @__PURE__ */ r(te, { slot: t?.tableExtraColumns, props: { live: f } })
        };
      case "actions":
        return {
          ...u,
          title: s(e.ACTIONS),
          render: (f) => {
            const W = ur({
              live: f,
              t: s,
              onEnter: (S) => a.enterLive(S),
              onDetail: (S) => {
                a.showDetail(S);
              },
              onEdit: (S) => a.openEditModal(S),
              onDelete: (S) => a.requestDelete(S)
            });
            return /* @__PURE__ */ i(le, { children: [
              /* @__PURE__ */ r(pr, { actions: W }),
              /* @__PURE__ */ r(te, { slot: t?.rowActions, props: { live: f } })
            ] });
          }
        };
      default:
        return { ...u, title: "" };
    }
  }), [s, t, a, U]), { lives: P, loading: V, refreshing: ue, currentPage: B, hasMoreData: ie, searchInput: K, obsModal: l, confirmDialog: z, isCreateModalVisible: p, isEditModalVisible: Q, editingLive: T } = _;
  return /* @__PURE__ */ i("div", { className: "live-list-page", children: [
    /* @__PURE__ */ i("div", { className: "live-list-header", children: [
      /* @__PURE__ */ r("h1", { className: "live-list-title", children: s(e.LIVE_LIST) }),
      /* @__PURE__ */ r(te, { slot: t?.beforeToolbar, props: { lives: P, loading: V } }),
      /* @__PURE__ */ i("div", { className: "header-actions", children: [
        /* @__PURE__ */ r(
          G,
          {
            value: K,
            onChange: (g) => a.setSearchInput(String(g)),
            onEnter: () => {
              if (fr(K, Ne)) {
                me.error(s(e.INPUT_TOO_LONG));
                return;
              }
              a.search();
            },
            clearable: !0,
            onClear: () => {
              a.clearSearch();
            },
            placeholder: s(e.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ r(We, { size: 16 }),
            style: { width: 220 },
            status: N(K) > Ne ? "error" : "default",
            tips: N(K) > Ne ? s(e.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ r(
          L,
          {
            shape: "round",
            variant: "outline",
            disabled: ue || V,
            onClick: () => {
              a.refresh();
            },
            icon: /* @__PURE__ */ r($e, { className: ue ? "spinning" : "" }),
            children: s(e.REFRESH)
          }
        ),
        /* @__PURE__ */ r(
          L,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ r(Ce, {}),
            onClick: () => a.openCreateModal(),
            children: s(e.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ r(te, { slot: t?.afterToolbar, props: { lives: P, loading: V } })
    ] }),
    /* @__PURE__ */ r(ze, { className: "live-list-card", children: /* @__PURE__ */ r(
      Nr,
      {
        columns: b,
        data: P,
        rowKey: "liveId",
        loading: V,
        tableClassName: "live-list-table",
        bodyClassName: "live-list-content",
        rowClassName: "live-list-row",
        loadingNode: /* @__PURE__ */ i("div", { className: "live-list-loading-container", children: [
          /* @__PURE__ */ r("div", { className: "live-list-loading-spinner" }),
          /* @__PURE__ */ r("span", { className: "live-list-loading-text", children: s(e.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ r("div", { className: "live-list-empty-container", children: /* @__PURE__ */ r("span", { className: "live-list-empty-text", children: s(e.NO_LIVE_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ r(
      Ir,
      {
        currentPage: B,
        hasMoreData: ie,
        loading: !1,
        onGoToFirstPage: () => a.goToPage(1),
        onPrevPage: () => a.goToPage(B - 1),
        onNextPage: () => a.goToPage(B + 1)
      }
    ),
    /* @__PURE__ */ r(
      gr,
      {
        visible: p,
        onClose: () => a.closeCreateModal(),
        onSuccess: () => a.onLiveCreated(),
        onCreate: H,
        uploadEnabled: h
      }
    ),
    T && /* @__PURE__ */ r(
      Tr,
      {
        visible: Q,
        live: {
          id: T.liveId,
          liveName: T.liveName,
          coverUrl: T.coverUrl,
          customInfo: T.customInfo ? typeof T.customInfo == "string" ? (() => {
            try {
              return JSON.parse(T.customInfo);
            } catch {
              return;
            }
          })() : T.customInfo : void 0
        },
        onClose: () => a.closeEditModal(),
        onSuccess: (g) => a.onLiveEdited(g),
        onUpdate: (g, u) => X({ ...u, liveId: g }),
        onFetchDetail: q,
        uploadEnabled: h,
        extraFieldsSlot: t?.liveFormExtraFields
      }
    ),
    /* @__PURE__ */ r(
      fe,
      {
        visible: z.visible,
        header: z.title,
        onClose: () => a.cancelDelete(),
        width: he.CONFIRM,
        footer: /* @__PURE__ */ i(le, { children: [
          /* @__PURE__ */ r(L, { shape: "round", variant: "outline", disabled: o, onClick: () => a.cancelDelete(), children: s(e.CANCEL) }),
          /* @__PURE__ */ r(L, { shape: "round", theme: "primary", loading: o, onClick: () => I(), children: s(e.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ r("p", { children: z.content })
      }
    ),
    /* @__PURE__ */ r(
      fe,
      {
        visible: l.visible && !!l.live,
        header: s(e.LIVE_INFORMATION),
        onClose: () => a.closeDetail(),
        width: he.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ r(L, { shape: "round", variant: "outline", onClick: () => a.closeDetail(), children: s(e.CLOSE) }),
        children: /* @__PURE__ */ i("div", { className: "live-info-form", children: [
          l.errorMessage && /* @__PURE__ */ i("div", { className: "live-info-error", children: [
            /* @__PURE__ */ r("span", { className: "live-info-error-icon", children: "!" }),
            /* @__PURE__ */ r("span", { children: l.errorMessage })
          ] }),
          /* @__PURE__ */ i("div", { className: "live-info-section", children: [
            /* @__PURE__ */ r("div", { className: "live-info-section-title", children: s(e.BASIC_INFORMATION) }),
            /* @__PURE__ */ i("div", { className: "live-info-card", children: [
              /* @__PURE__ */ i("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.ANCHOR_ID) }),
                /* @__PURE__ */ i("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ r("span", { className: "live-info-value", children: l.live?.anchor?.userId || "-" }),
                  l.live?.anchor?.userId && /* @__PURE__ */ r(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => l.live && void a.copyText(l.live.anchor.userId, s(e.LIVE_HOST)),
                      children: /* @__PURE__ */ r(ae, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.LIVE_ID) }),
                /* @__PURE__ */ r("div", { className: "live-info-value-area", children: /* @__PURE__ */ r("span", { className: "live-info-value", children: l.live?.liveId || "-" }) })
              ] }),
              /* @__PURE__ */ i("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.LIVE_TITLE) }),
                /* @__PURE__ */ r("div", { className: "live-info-value-area", children: /* @__PURE__ */ r("span", { className: "live-info-value", children: l.live?.liveName || "-" }) })
              ] }),
              /* @__PURE__ */ i("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.LIVE_COVER) }),
                /* @__PURE__ */ r("div", { className: "live-info-value-area", children: /* @__PURE__ */ r("span", { className: "live-info-value live-info-value-url", children: l.live?.coverUrl || "-" }) })
              ] })
            ] })
          ] }),
          (l.streamInfo || l.actionLoading === "stream") && /* @__PURE__ */ i("div", { className: "live-info-section", children: [
            /* @__PURE__ */ r("div", { className: "live-info-section-title", children: s(e.STREAM_INFO) }),
            /* @__PURE__ */ r("div", { className: "live-info-card", children: l.streamInfo ? /* @__PURE__ */ i(le, { children: [
              /* @__PURE__ */ i("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.SERVER_URL) }),
                /* @__PURE__ */ i("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ r("span", { className: "live-info-value live-info-value-url", children: l.streamInfo.serverUrl }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => l.streamInfo && void a.copyText(l.streamInfo.serverUrl, s(e.SERVER_URL)),
                      children: /* @__PURE__ */ r(ae, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ i("div", { className: "live-info-row", children: [
                /* @__PURE__ */ r("span", { className: "live-info-label", children: s(e.STREAM_KEY) }),
                /* @__PURE__ */ i("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ r("span", { className: "live-info-value live-info-value-url", children: l.streamInfo.streamKey }),
                  /* @__PURE__ */ r(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => l.streamInfo && void a.copyText(l.streamInfo.streamKey, s(e.STREAM_KEY)),
                      children: /* @__PURE__ */ r(ae, { size: 14 })
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
function Lr() {
  const [D, s] = E(!1);
  return de(() => {
    let H = !1;
    return hr().then((X) => {
      H || s(X);
    }), () => {
      H = !0;
    };
  }, []), D;
}
export {
  Yr as default
};
