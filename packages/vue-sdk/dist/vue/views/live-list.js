import { defineComponent as Ee, computed as U, ref as S, resolveComponent as A, openBlock as m, createBlock as $, unref as e, withCtx as n, createVNode as s, createElementVNode as o, normalizeClass as ve, toDisplayString as i, createCommentVNode as D, createTextVNode as N, createElementBlock as L, Fragment as pe, renderList as Ie, watch as He, shallowRef as ge, onMounted as We, onBeforeUnmount as Qe, createSlots as qe } from "vue";
import { useRouter as ze } from "vue-router";
import { ChevronDownIcon as Ne, ChevronRightIcon as Ve, CloseIcon as Me, AddIcon as he, CopyIcon as ne, SearchIcon as je, RefreshIcon as Ze } from "tdesign-icons-vue-next";
import { MessagePlugin as T } from "tdesign-vue-next";
import { useUIKit as Ce } from "@tencentcloud/uikit-base-component-vue3";
import { a3 as Je, au as Se, g as se, bh as J, ba as el, aV as ll, A as oe, Q as M, C as O, a9 as tl, bP as al, as as ol, av as Le, a0 as Re, aC as sl, aA as Ae, b_ as il, an as nl, aW as rl, T as ul, bk as Oe, P as Ue, aN as dl, ac as cl } from "../../chunks/main-layout.BqLTYqar.js";
import { c as xe } from "../../chunks/logger.DCFRj533.js";
import { I as l, t as ke, L as vl, s as ml, g as _l, a9 as pl } from "../../chunks/layout.DppKPdLU.js";
import { r as De, I as we, b as fl } from "../../chunks/upload.Ne4Xd5tE.js";
import { g as El } from "../../chunks/columns.DtUarMJr.js";
import { a as be } from "../../chunks/chat.BW03hVL7.js";
import "../../chunks/gift.C2r8tUnB.js";
import { u as Be } from "../../chunks/useAsyncAction.UFjlzk-_.js";
import { _ as Il } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.C8oA5l7A.js";
import { I as Fe } from "../../chunks/ImageUpload.JuZWHEq7.js";
import { _ as $e } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as ce } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.iwDk4NW9.js";
import { _ as hl, a as Cl } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
const bl = { class: "custom-info-section" }, Tl = {
  key: 2,
  class: "custom-info-count"
}, yl = {
  key: 0,
  class: "custom-info-container"
}, gl = { class: "custom-input-wrap" }, Sl = { class: "custom-input-wrap custom-value-wrap" }, Ll = {
  key: 1,
  class: "create-success-content"
}, Rl = { class: "create-success-summary" }, Al = {
  key: 0,
  class: "create-success-section"
}, Ol = { class: "create-success-section-title" }, Ul = { class: "stream-info-items" }, Nl = { class: "stream-info-item" }, Vl = { class: "stream-info-label" }, Ml = { class: "stream-info-value" }, xl = { class: "stream-info-item" }, kl = { class: "stream-info-label" }, Dl = { class: "stream-info-value" }, wl = { class: "dialog-footer" }, Bl = /* @__PURE__ */ Ee({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(K, { emit: v }) {
    const ee = xe("CreateLive"), { t } = Ce(), ie = K, { extraFieldsSlot: P } = ie, { createLive: d } = be(), r = v, W = U({
      get: () => ie.visible,
      set: (E) => r("update:visible", E)
    }), Q = U(() => Je.map((E) => ({
      value: E.value,
      label: t(E.labelKey)
    }))), q = (E) => se(E), le = (E) => se(E), p = (E) => {
      a.value.maxSeatCount = Number(E) || 1;
    }, a = S(Se()), c = S([]), R = S(!1), w = S(!1), V = S(!1), u = S(""), z = S(""), x = S(null), j = S(""), te = S(null), Y = S(!1), { loading: re, execute: fe } = Be({
      operationName: t(l.CREATE_LIVE),
      showSuccess: !1,
      action: async () => {
        let E = "";
        try {
          E = await De({
            handle: te.value,
            hasPendingFile: Y.value,
            fallbackUrl: a.value.coverUrl,
            label: t(l.COVER_IMAGE)
          });
        } catch (g) {
          ee.error("CreateLive", `Cover processing failed: ${g instanceof Error ? g.message : String(g)}`, g);
          const ue = g instanceof we ? g.message : `${t(l.COVER_PROCESSING_FAILED)}: ${g instanceof Error ? g.message : String(g) || t(l.UNKNOWN_ERROR)}`;
          T.error(ue);
          return;
        }
        if (c.value.some(J)) {
          T.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        const _ = tl({
          formData: a.value,
          coverUrl: E,
          customInfos: c.value,
          useObsStreaming: V.value
        }), H = _.liveId, k = _.anchorId;
        if (await d(_), x.value = null, j.value = "", V.value, V.value) {
          const g = await al({
            liveId: H,
            anchorId: k,
            onStatusChange: (ue) => {
              u.value = ue;
            },
            messages: {
              getStreamInfoFailed: t(l.FAILED_TO_GET_STREAM_INFO),
              importAccountFailed: t(l.FAILED_TO_IMPORT_ACCOUNT),
              addRobotFailed: t(l.FAILED_TO_ADD_ROBOT),
              pickSeatFailed: t(l.FAILED_TO_PICK_SEAT),
              setupFailed: t(l.OBS_SETUP_FAILED)
            }
          });
          x.value = g.streamInfo, j.value = g.streamInfoError, z.value = g.setupError, g.configuredSuccessfully;
        }
        w.value = !0;
      }
    }), X = U(() => se(a.value.anchorId)), Z = U(() => se(a.value.liveName));
    U(() => c.value.filter((E) => E.key.trim()).length);
    const h = U(() => c.value.some(J)), f = U(() => {
      const E = el(a.value.seatTemplate), _ = t(E?.descKey || "");
      return E?.orientation === "landscape" ? `${_}，${t(l.LANDSCAPE_BROADCASTING_HINT)}` : _;
    }), y = U(() => ll(a.value.seatTemplate)), B = U(() => V.value ? u.value === "error" ? `OBS 配置失败：${z.value}` : x.value ? "OBS 已配置完成，可直接复制下方推流信息。" : j.value ? `OBS 已配置完成，但推流信息生成失败：${j.value}` : "OBS 已配置完成。" : ""), C = U(() => u.value === "error" || !!j.value), F = (E) => {
      Y.value = !!E;
    }, G = async (E, _) => {
      try {
        await ol(E), T.success(t(l.COPY_LABEL_COPIED, { label: _ }));
      } catch (H) {
        const k = H, g = k.ErrorInfo || (k instanceof Error ? k.message : String(k)) || t(l.UNKNOWN_ERROR);
        ee.error("CreateLive", `Copy failed: ${g}`, H), T.error(t(l.COPY_FAILED_WITH_ERROR, { error: g }));
      }
    }, b = () => {
      if (c.value.length >= O.maxCount) {
        T.error(t(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: O.maxCount }));
        return;
      }
      c.value.push({ key: "", value: "" });
    }, me = (E) => {
      c.value.splice(E, 1);
    }, ae = () => {
      a.value = Se(), c.value = [], R.value = !1, w.value = !1, V.value = !1, u.value = "", z.value = "", x.value = null, j.value = "", Y.value = !1, te.value?.reset();
    }, Te = () => {
      ae(), r("update:visible", !1);
    }, Ke = async () => {
      if (!a.value.anchorId.trim()) {
        T.error(t(l.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (X.value > oe) {
        T.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.ANCHOR_ID), max: oe, current: X.value }));
        return;
      }
      if (Z.value > M) {
        T.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.LIVE_TITLE), max: M, current: Z.value }));
        return;
      }
      if (c.value.some(J)) {
        T.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      u.value = "", await fe();
    }, Pe = () => {
      ae(), r("success"), r("update:visible", !1);
    };
    return (E, _) => {
      const H = A("t-input"), k = A("t-form-item"), g = A("t-select"), ue = A("t-input-number"), Ye = A("t-checkbox"), de = A("t-button"), Xe = A("t-form"), Ge = A("t-dialog");
      return m(), $(Ge, {
        visible: W.value,
        "onUpdate:visible": _[8] || (_[8] = (I) => W.value = I),
        header: w.value ? e(t)(e(l).CREATE_SUCCESS) : e(t)(e(l).CREATE_LIVE),
        width: 560,
        placement: "center",
        class: "create-live-modal",
        onClose: Te
      }, {
        footer: n(() => [
          o("div", wl, [
            w.value ? (m(), $(de, {
              key: 1,
              theme: "primary",
              shape: "round",
              onClick: Pe
            }, {
              default: n(() => [
                N(i(e(t)(e(l).COMPLETE)), 1)
              ]),
              _: 1
            })) : (m(), L(pe, { key: 0 }, [
              s(de, {
                variant: "outline",
                shape: "round",
                onClick: Te
              }, {
                default: n(() => [
                  N(i(e(t)(e(l).CANCEL)), 1)
                ]),
                _: 1
              }),
              s(de, {
                theme: "primary",
                shape: "round",
                loading: e(re),
                disabled: e(re) || !a.value.anchorId.trim() || te.value?.isValidating || te.value?.hasUrlError || h.value,
                onClick: Ke
              }, {
                default: n(() => [
                  N(i(e(re) ? e(t)(e(l).CREATING) : e(t)(e(l).CREATE)), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ], 64))
          ])
        ]),
        default: n(() => [
          w.value ? (m(), L("div", Ll, [
            o("div", Rl, [
              _[9] || (_[9] = o("div", { class: "create-success-icon" }, [
                o("svg", {
                  width: "48",
                  height: "48",
                  viewBox: "0 0 48 48",
                  fill: "none"
                }, [
                  o("circle", {
                    cx: "24",
                    cy: "24",
                    r: "24",
                    fill: "#E8F5E9"
                  }),
                  o("path", {
                    d: "M14 24L21 31L34 18",
                    stroke: "#07C160",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])
              ], -1)),
              o("h3", null, i(e(t)(e(l).ENTITY_ACTION_SUCCESS, { entity: e(t)(e(l).LIVE), action: e(t)(e(l).LABEL_CREATED) })), 1),
              B.value ? (m(), L("p", {
                key: 0,
                class: ve(["create-success-description", { "is-error": C.value }])
              }, i(B.value), 3)) : D("", !0)
            ]),
            x.value ? (m(), L("div", Al, [
              o("div", Ol, i(e(t)(e(l).STREAM_INFO)), 1),
              o("div", Ul, [
                o("div", Nl, [
                  o("div", Vl, [
                    o("span", null, i(e(t)(e(l).SERVER_URL)), 1),
                    o("button", {
                      class: "action-link",
                      onClick: _[6] || (_[6] = (I) => G(x.value.serverUrl, e(t)(e(l).SERVER_URL)))
                    }, [
                      s(e(ne)),
                      N(" " + i(e(t)(e(l).COPY)), 1)
                    ])
                  ]),
                  o("code", Ml, i(x.value.serverUrl), 1)
                ]),
                o("div", xl, [
                  o("div", kl, [
                    o("span", null, i(e(t)(e(l).STREAM_KEY)), 1),
                    o("button", {
                      class: "action-link",
                      onClick: _[7] || (_[7] = (I) => G(x.value.streamKey, e(t)(e(l).STREAM_KEY)))
                    }, [
                      s(e(ne)),
                      N(" " + i(e(t)(e(l).COPY)), 1)
                    ])
                  ]),
                  o("code", Dl, i(x.value.streamKey), 1)
                ])
              ])
            ])) : D("", !0)
          ])) : (m(), $(Xe, {
            key: 0,
            class: "create-live-form",
            "label-width": e(ke)(100),
            colon: !1
          }, {
            default: n(() => [
              s(k, {
                label: e(t)(e(l).LIVE_HOST),
                "required-mark": !0
              }, {
                default: n(() => [
                  s(H, {
                    modelValue: a.value.anchorId,
                    "onUpdate:modelValue": _[0] || (_[0] = (I) => a.value.anchorId = I),
                    placeholder: e(t)(e(l).ENTER_ANCHOR_ID),
                    status: X.value > e(oe) ? "error" : "default",
                    tips: X.value > e(oe) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).ANCHOR_ID), max: e(oe) }) : ""
                  }, {
                    suffix: n(() => [
                      o("span", {
                        class: ve(["input-suffix-count", { "byte-overflow": X.value > e(oe) }])
                      }, i(X.value) + "/" + i(e(oe)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(k, {
                label: e(t)(e(l).LIVE_TITLE)
              }, {
                default: n(() => [
                  s(H, {
                    modelValue: a.value.liveName,
                    "onUpdate:modelValue": _[1] || (_[1] = (I) => a.value.liveName = I),
                    placeholder: e(t)(e(l).ENTER_LIVE_TITLE),
                    status: Z.value > e(M) ? "error" : "default",
                    tips: Z.value > e(M) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).LIVE_TITLE), max: e(M) }) : ""
                  }, {
                    suffix: n(() => [
                      o("span", {
                        class: ve(["input-suffix-count", { "byte-overflow": Z.value > e(M) }])
                      }, i(Z.value) + "/" + i(e(M)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(k, {
                label: e(t)(e(l).COVER_IMAGE)
              }, {
                default: n(() => [
                  s(Fe, {
                    ref_key: "coverUploadRef",
                    ref: te,
                    modelValue: a.value.coverUrl,
                    "onUpdate:modelValue": _[2] || (_[2] = (I) => a.value.coverUrl = I),
                    type: "cover",
                    "upload-enabled": K.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": y.value,
                    placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": K.uploadEnabled,
                    onFileReady: F
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(k, {
                label: e(t)(e(l).LAYOUT_TEMPLATE),
                "required-mark": !0,
                help: f.value
              }, {
                default: n(() => [
                  s(g, {
                    modelValue: a.value.seatTemplate,
                    "onUpdate:modelValue": _[3] || (_[3] = (I) => a.value.seatTemplate = I),
                    options: Q.value,
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              a.value.seatTemplate === "AudioSalon" || a.value.seatTemplate === "Karaoke" ? (m(), $(k, {
                key: 0,
                label: e(t)(e(l).MAX_SEATS),
                help: e(t)(e(l).MAX_SEATS_HELP)
              }, {
                default: n(() => [
                  s(ue, {
                    "model-value": a.value.maxSeatCount,
                    "onUpdate:modelValue": p,
                    min: 1,
                    max: 16,
                    status: a.value.maxSeatCount < 1 || a.value.maxSeatCount > 16 ? "error" : "default",
                    tips: a.value.maxSeatCount < 1 || a.value.maxSeatCount > 16 ? e(t)(e(l).SEAT_COUNT_RANGE_1_16) : "",
                    placeholder: e(t)(e(l).ENTER_MAX_SEAT_COUNT),
                    theme: "normal",
                    style: { width: "100%" }
                  }, null, 8, ["model-value", "status", "tips", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "help"])) : D("", !0),
              s(k, {
                label: e(t)(e(l).STREAMING_METHOD),
                help: e(t)(e(l).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
              }, {
                default: n(() => [
                  s(Ye, {
                    modelValue: V.value,
                    "onUpdate:modelValue": _[4] || (_[4] = (I) => V.value = I)
                  }, {
                    default: n(() => [
                      N(i(e(t)(e(l).USE_OBS_STREAMING)), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              o("div", bl, [
                o("div", {
                  class: "custom-info-toggle",
                  onClick: _[5] || (_[5] = (I) => R.value = !R.value)
                }, [
                  R.value ? (m(), $(e(Ne), {
                    key: 0,
                    size: "16"
                  })) : (m(), $(e(Ve), {
                    key: 1,
                    size: "16"
                  })),
                  o("span", null, i(e(t)(e(l).CUSTOM_INFORMATION)), 1),
                  c.value.length > 0 ? (m(), L("span", Tl, i(c.value.length), 1)) : D("", !0)
                ]),
                R.value ? (m(), L("div", yl, [
                  (m(!0), L(pe, null, Ie(c.value, (I, ye) => (m(), L("div", {
                    key: ye,
                    class: "custom-info-row"
                  }, [
                    o("div", gl, [
                      s(H, {
                        modelValue: I.key,
                        "onUpdate:modelValue": (_e) => I.key = _e,
                        placeholder: e(t)(e(l).ENTER_KEY),
                        status: q(I.key) > e(O).maxKeyBytes || e(J)(I) ? "error" : "default",
                        tips: q(I.key) > e(O).maxKeyBytes ? e(t)(e(l).MAX_BYTES, { field: "Key", max: e(O).maxKeyBytes }) : e(J)(I) ? e(t)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    o("div", Sl, [
                      s(H, {
                        modelValue: I.value,
                        "onUpdate:modelValue": (_e) => I.value = _e,
                        placeholder: e(t)(e(l).ENTER_VALUE),
                        status: le(I.value) > e(O).maxValueBytes ? "error" : "default",
                        tips: le(I.value) > e(O).maxValueBytes ? e(t)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    s(de, {
                      variant: "text",
                      shape: "circle",
                      onClick: (_e) => me(ye)
                    }, {
                      default: n(() => [
                        s(e(Me))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  c.value.length < e(O).maxCount ? (m(), $(de, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: b,
                    theme: "primary"
                  }, {
                    icon: n(() => [
                      s(e(he))
                    ]),
                    default: n(() => [
                      N(" " + i(e(t)(e(l).ADD)), 1)
                    ]),
                    _: 1
                  })) : D("", !0)
                ])) : D("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"]))
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Fl = /* @__PURE__ */ $e(Bl, [["__scopeId", "data-v-6c6c5d78"]]), $l = {
  key: 0,
  class: "edit-live-error"
}, Kl = { class: "custom-info-section" }, Pl = {
  key: 2,
  class: "custom-info-count"
}, Yl = {
  key: 0,
  class: "custom-info-container"
}, Xl = { class: "custom-input-wrap" }, Gl = { class: "custom-input-wrap custom-value-wrap" }, Hl = { class: "dialog-footer" }, Wl = /* @__PURE__ */ Ee({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    live: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(K, { emit: v }) {
    const ee = xe("EditLive"), { t } = Ce(), { fetchLiveDetail: ie, updateLive: P } = be(), d = K, r = U(() => d.live?.liveId || d.live?.id || ""), W = v, Q = U({
      get: () => d.visible,
      set: (h) => W("update:visible", h)
    }), q = (h) => se(h), le = (h) => se(h), p = S(Le()), a = S(""), c = S([]), R = S(!1), w = S([]), V = S(Re), u = S(null), z = S(!1), { loading: x, execute: j } = Be({
      operationName: t(l.EDIT_LIVE),
      action: async (h) => {
        const f = d.live?.liveId || d.live?.id || "";
        return P({
          liveId: f,
          ...h
        });
      },
      showSuccess: !0,
      onSuccess: () => {
        W("success", {
          liveName: p.value.liveName.trim(),
          coverUrl: p.value.coverUrl
        }), X();
      }
    }), te = (h) => {
      z.value = !!h;
    }, Y = U(() => se(p.value.liveName));
    U(() => c.value.filter((h) => h.key.trim()).length), He([() => d.live?.liveId || d.live?.id, () => d.visible], async ([h, f]) => {
      const y = d.live;
      if (y && f) {
        p.value = {
          liveName: y.liveName || "",
          coverUrl: y.coverUrl || ""
        }, y.coverUrl ? V.value = await sl(y.coverUrl) : V.value = Re;
        const B = y.liveId || y.id || "";
        try {
          const C = await ie(B), F = Ae(C?.customInfo);
          c.value = F, R.value = F.length > 0, w.value = F.map((G) => G.key);
        } catch (C) {
          C instanceof vl && (a.value = ml(C.code ?? 0, "", t(l.LIVE_NOT_FOUND)));
          const F = y.customInfo, G = Ae(F);
          c.value = G, R.value = G.length > 0, w.value = G.map((b) => b.key);
        }
      }
    }, { immediate: !0 });
    const re = () => {
      if (c.value.length >= O.maxCount) {
        T.error(t(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: O.maxCount }));
        return;
      }
      c.value.push({ key: "", value: "" });
    }, fe = (h) => {
      c.value.splice(h, 1);
    }, X = () => {
      a.value = "", c.value = [], R.value = !1, w.value = [], z.value = !1, u.value?.reset(), p.value = Le(), W("update:visible", !1);
    }, Z = async () => {
      if (d.live) {
        if (!p.value.liveName.trim()) {
          T.error(t(l.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (Y.value > M) {
          T.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.LIVE_TITLE), max: M, current: Y.value }));
          return;
        }
        if (c.value.some(J)) {
          T.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let h = "";
          try {
            h = await De({
              handle: u.value,
              hasPendingFile: z.value,
              fallbackUrl: p.value.coverUrl,
              label: t(l.COVER_IMAGE)
            });
          } catch (C) {
            ee.error("EditLive", `Cover processing failed: ${C instanceof Error ? C.message : String(C)}`, C);
            const F = C instanceof we ? C.message : `${t(l.COVER_PROCESSING_FAILED)}: ${C instanceof Error ? C.message : String(C) || t(l.UNKNOWN_ERROR)}`;
            T.error(F);
            return;
          }
          const f = il(c.value);
          if (f) {
            f.type === "key-too-long" ? T.error(t(l.MAX_BYTES, { field: `Key ${f.key}`, max: f.max })) : f.type === "value-too-long" ? T.error(t(l.KEY_VALUE_EXCEEDS_2KB, { key: f.key })) : f.type === "max-count" ? T.error(t(l.CUSTOM_INFO_MAX_COUNT, { max: f.max })) : T.error(t(l.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const y = nl(c.value), B = rl(w.value, y);
          await j({
            liveName: p.value.liveName.trim(),
            coverUrl: h || void 0,
            customInfo: Object.keys(y).length > 0 ? y : void 0,
            deleteKeys: B.length > 0 ? B : void 0
          });
        } catch (h) {
          ee.error("EditLiveModal", "Update failed:", h);
        }
      }
    };
    return (h, f) => {
      const y = A("t-input"), B = A("t-form-item"), C = A("t-button"), F = A("t-form"), G = A("t-dialog");
      return m(), $(G, {
        visible: Q.value,
        "onUpdate:visible": f[3] || (f[3] = (b) => Q.value = b),
        header: e(t)(e(l).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: X
      }, {
        footer: n(() => [
          o("div", Hl, [
            s(C, {
              variant: "outline",
              shape: "round",
              onClick: X
            }, {
              default: n(() => [
                N(i(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            s(C, {
              theme: "primary",
              shape: "round",
              loading: e(x),
              disabled: e(x) || !p.value.liveName.trim() || u.value?.isValidating || u.value?.hasUrlError,
              onClick: Z
            }, {
              default: n(() => [
                N(i(e(x) ? e(t)(e(l).SAVING) : e(t)(e(l).SAVE)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        default: n(() => [
          s(F, {
            class: "edit-live-form",
            "label-width": e(ke)(100),
            colon: !1
          }, {
            default: n(() => [
              a.value ? (m(), L("div", $l, [
                f[4] || (f[4] = o("span", { class: "edit-live-error-icon" }, "!", -1)),
                o("span", null, i(a.value), 1)
              ])) : D("", !0),
              s(B, {
                label: e(t)(e(l).LIVE_ID)
              }, {
                default: n(() => [
                  s(y, {
                    value: r.value,
                    disabled: "",
                    readonly: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(B, {
                label: e(t)(e(l).LIVE_TITLE),
                "required-mark": !0
              }, {
                default: n(() => [
                  s(y, {
                    modelValue: p.value.liveName,
                    "onUpdate:modelValue": f[0] || (f[0] = (b) => p.value.liveName = b),
                    placeholder: e(t)(e(l).ENTER_LIVE_TITLE),
                    status: Y.value > e(M) ? "error" : "default",
                    tips: Y.value > e(M) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).LIVE_TITLE), max: e(M) }) : ""
                  }, {
                    suffix: n(() => [
                      o("span", {
                        class: ve(["input-suffix-count", { "byte-overflow": Y.value > e(M) }])
                      }, i(Y.value) + "/" + i(e(M)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(B, {
                label: e(t)(e(l).COVER_IMAGE)
              }, {
                default: n(() => [
                  s(Fe, {
                    ref_key: "coverUploadRef",
                    ref: u,
                    modelValue: p.value.coverUrl,
                    "onUpdate:modelValue": f[1] || (f[1] = (b) => p.value.coverUrl = b),
                    type: "cover",
                    "upload-enabled": K.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": V.value,
                    placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": K.uploadEnabled,
                    onFileReady: te
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(ce, {
                "slot-component": K.extraFieldsSlot,
                "slot-props": { mode: "edit", live: K.live, formData: { ...p.value }, customInfos: [...c.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              o("div", Kl, [
                o("div", {
                  class: "custom-info-toggle",
                  onClick: f[2] || (f[2] = (b) => R.value = !R.value)
                }, [
                  R.value ? (m(), $(e(Ne), {
                    key: 0,
                    size: "16"
                  })) : (m(), $(e(Ve), {
                    key: 1,
                    size: "16"
                  })),
                  o("span", null, i(e(t)(e(l).CUSTOM_INFORMATION)), 1),
                  c.value.length > 0 ? (m(), L("span", Pl, i(c.value.length), 1)) : D("", !0)
                ]),
                R.value ? (m(), L("div", Yl, [
                  (m(!0), L(pe, null, Ie(c.value, (b, me) => (m(), L("div", {
                    key: me,
                    class: "custom-info-row"
                  }, [
                    o("div", Xl, [
                      s(y, {
                        modelValue: b.key,
                        "onUpdate:modelValue": (ae) => b.key = ae,
                        placeholder: e(t)(e(l).ENTER_KEY),
                        status: q(b.key) > e(O).maxKeyBytes || e(J)(b) ? "error" : "default",
                        tips: q(b.key) > e(O).maxKeyBytes ? e(t)(e(l).MAX_BYTES, { field: "Key", max: e(O).maxKeyBytes }) : e(J)(b) ? e(t)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    o("div", Gl, [
                      s(y, {
                        modelValue: b.value,
                        "onUpdate:modelValue": (ae) => b.value = ae,
                        placeholder: e(t)(e(l).ENTER_VALUE),
                        status: le(b.value) > e(O).maxValueBytes ? "error" : "default",
                        tips: le(b.value) > e(O).maxValueBytes ? e(t)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    s(C, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ae) => fe(me)
                    }, {
                      default: n(() => [
                        s(e(Me))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  c.value.length < e(O).maxCount ? (m(), $(C, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: re,
                    theme: "primary"
                  }, {
                    icon: n(() => [
                      s(e(he))
                    ]),
                    default: n(() => [
                      N(" " + i(e(t)(e(l).ADD)), 1)
                    ]),
                    _: 1
                  })) : D("", !0)
                ])) : D("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Ql = /* @__PURE__ */ $e(Wl, [["__scopeId", "data-v-fe4aaacc"]]), ql = { class: "live-list-page" }, zl = { class: "live-list-header" }, jl = { class: "live-list-title" }, Zl = { class: "header-actions" }, Jl = { class: "live-list-id-cell" }, et = { class: "live-list-id-text" }, lt = { class: "live-list-cover-cell" }, tt = ["src", "alt"], at = { class: "live-list-text" }, ot = { class: "live-list-text" }, st = { class: "live-list-loading-container" }, it = { class: "live-list-loading-text" }, nt = { class: "live-list-empty-container" }, rt = { class: "live-list-empty-text" }, ut = { class: "live-info-form" }, dt = {
  key: 0,
  class: "live-info-error"
}, ct = { class: "live-info-section" }, vt = { class: "live-info-section-title" }, mt = { class: "live-info-card" }, _t = { class: "live-info-row" }, pt = { class: "live-info-label" }, ft = { class: "live-info-value-area" }, Et = { class: "live-info-value" }, It = { class: "live-info-row" }, ht = { class: "live-info-label" }, Ct = { class: "live-info-value-area" }, bt = { class: "live-info-value" }, Tt = { class: "live-info-row" }, yt = { class: "live-info-label" }, gt = { class: "live-info-value-area" }, St = { class: "live-info-value" }, Lt = { class: "live-info-row" }, Rt = { class: "live-info-label" }, At = { class: "live-info-value-area" }, Ot = { class: "live-info-value live-info-value-url" }, Ut = {
  key: 1,
  class: "live-info-section"
}, Nt = { class: "live-info-section-title" }, Vt = { class: "live-info-card" }, Mt = { class: "live-info-row" }, xt = { class: "live-info-label" }, kt = { class: "live-info-value-area" }, Dt = { class: "live-info-value live-info-value-url" }, wt = { class: "live-info-row" }, Bt = { class: "live-info-label" }, Ft = { class: "live-info-value-area" }, $t = { class: "live-info-value live-info-value-url" }, Kt = {
  key: 1,
  class: "live-info-row"
}, Pt = {
  class: "live-info-label",
  style: { width: "auto" }
}, Yt = { class: "dialog-footer" }, ra = /* @__PURE__ */ Ee({
  __name: "live-list",
  setup(K) {
    const { t: v } = Ce(), ee = ze(), { endLive: t, fetchLiveDetail: ie } = be(), P = _l().components?.liveList, d = new ul({
      endLive: t,
      onEnterLive: (p) => {
        ee.push({ path: `/live-control/${p}`, query: { from: "live-list" } });
      },
      t: v,
      toast: {
        success: (p) => T.success(p),
        error: (p) => T.error(p)
      },
      fetchLiveDetail: ie
    }), r = ge(d.getState()), W = d.subscribe(() => {
      r.value = d.getState();
    }), Q = ge(!1);
    We(async () => {
      Q.value = await fl(), await d.init();
    }), Qe(() => {
      W(), d.dispose();
    });
    const q = U(() => El({ hasExtraColumn: !!P?.tableExtraColumns }).map((a) => ({
      ...a,
      title: a.i18nKey ? v(a.i18nKey) : ""
    }))), le = (p) => cl({
      live: p,
      t: v,
      onEnter: (a) => d.enterLive(a),
      onDetail: (a) => d.showDetail(a),
      onEdit: (a) => d.openEditModal(a),
      onDelete: (a) => d.requestDelete(a)
    });
    return (p, a) => {
      const c = A("t-input"), R = A("t-button"), w = A("t-card"), V = A("t-dialog");
      return m(), L("div", ql, [
        o("div", zl, [
          o("h1", jl, i(e(v)(e(l).LIVE_LIST)), 1),
          s(ce, {
            "slot-component": e(P)?.beforeToolbar,
            "slot-props": { lives: r.value.lives, loading: r.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          o("div", Zl, [
            s(c, {
              "model-value": r.value.searchInput,
              placeholder: e(v)(e(l).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: e(Oe)(r.value.searchInput, e(Ue)) ? "error" : "default",
              tips: e(Oe)(r.value.searchInput, e(Ue)) ? e(v)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": a[1] || (a[1] = (u) => e(d).setSearchInput(String(u ?? ""))),
              onEnter: a[2] || (a[2] = () => e(d).search()),
              onClear: a[3] || (a[3] = () => e(d).clearSearch())
            }, {
              suffixIcon: n(() => [
                s(e(je), {
                  style: { cursor: "pointer" },
                  onClick: a[0] || (a[0] = () => e(d).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            s(R, {
              variant: "outline",
              shape: "round",
              disabled: r.value.refreshing || r.value.loading,
              onClick: a[4] || (a[4] = () => e(d).refresh())
            }, {
              icon: n(() => [
                s(e(Ze), {
                  class: ve({ spinning: r.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: n(() => [
                N(" " + i(e(v)(e(l).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            s(R, {
              theme: "primary",
              shape: "round",
              onClick: a[5] || (a[5] = () => e(d).openCreateModal())
            }, {
              icon: n(() => [
                s(e(he))
              ]),
              default: n(() => [
                N(" " + i(e(v)(e(l).CREATE_LIVE)), 1)
              ]),
              _: 1
            })
          ]),
          s(ce, {
            "slot-component": e(P)?.afterToolbar,
            "slot-props": { lives: r.value.lives, loading: r.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        s(w, { class: "live-list-card" }, {
          default: n(() => [
            s(hl, {
              columns: q.value,
              data: r.value.lives,
              "row-key": "liveId",
              loading: r.value.loading,
              "table-class-name": "live-list-table",
              "body-class-name": "live-list-content",
              "row-class-name": "live-list-row"
            }, qe({
              "cell-liveId": n(({ row: u }) => [
                o("div", Jl, [
                  o("span", et, i(u.liveId), 1),
                  s(e(ne), {
                    class: "copy-icon",
                    onClick: (z) => e(d).copyText(u.liveId, e(v)(e(l).LIVE_ID))
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-liveName": n(({ row: u }) => [
                N(i(u.liveName || "-"), 1)
              ]),
              "cell-coverUrl": n(({ row: u }) => [
                o("div", lt, [
                  o("img", {
                    src: u.coverUrl || e(pl),
                    alt: u.liveName,
                    class: "live-list-cover-image"
                  }, null, 8, tt)
                ])
              ]),
              "cell-anchor": n(({ row: u }) => [
                o("span", at, i(u.anchor?.userId || "-"), 1)
              ]),
              "cell-createdAt": n(({ row: u }) => [
                o("span", ot, i(e(dl)(u.createdAt)), 1)
              ]),
              "cell-actions": n(({ row: u }) => [
                s(Cl, {
                  actions: le(u)
                }, null, 8, ["actions"]),
                s(ce, {
                  "slot-component": e(P)?.rowActions,
                  "slot-props": { live: u }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: n(() => [
                o("div", st, [
                  a[20] || (a[20] = o("div", { class: "live-list-loading-spinner" }, null, -1)),
                  o("span", it, i(e(v)(e(l).LOADING)), 1)
                ])
              ]),
              empty: n(() => [
                o("div", nt, [
                  o("span", rt, i(e(v)(e(l).NO_LIVE_DATA)), 1)
                ])
              ]),
              _: 2
            }, [
              Ie(q.value, (u) => ({
                name: `header-${u.key}`,
                fn: n(() => [
                  N(i(u.title), 1)
                ])
              })),
              e(P)?.tableExtraColumns ? {
                name: "cell-customer-extra",
                fn: n(({ row: u }) => [
                  s(ce, {
                    "slot-component": e(P).tableExtraColumns,
                    "slot-props": { live: u }
                  }, null, 8, ["slot-component", "slot-props"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["columns", "data", "loading"])
          ]),
          _: 1
        }),
        s(Il, {
          "current-page": r.value.currentPage,
          "has-more-data": r.value.hasMoreData,
          loading: !1,
          onGoToFirstPage: a[6] || (a[6] = () => e(d).goToPage(1)),
          onPrevPage: a[7] || (a[7] = () => e(d).goToPage(r.value.currentPage - 1)),
          onNextPage: a[8] || (a[8] = () => e(d).goToPage(r.value.currentPage + 1))
        }, null, 8, ["current-page", "has-more-data"]),
        s(Fl, {
          visible: r.value.isCreateModalVisible,
          "upload-enabled": Q.value,
          "onUpdate:visible": a[9] || (a[9] = (u) => u ? e(d).openCreateModal() : e(d).closeCreateModal()),
          onSuccess: a[10] || (a[10] = () => e(d).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        s(Ql, {
          visible: r.value.isEditModalVisible,
          live: r.value.editingLive,
          "upload-enabled": Q.value,
          "extra-fields-slot": e(P)?.roomFormExtraFields,
          "onUpdate:visible": a[11] || (a[11] = (u) => {
            u || e(d).closeEditModal();
          }),
          onSuccess: a[12] || (a[12] = (u) => e(d).onLiveEdited(u))
        }, null, 8, ["visible", "live", "upload-enabled", "extra-fields-slot"]),
        s(V, {
          visible: r.value.confirmDialog.visible,
          header: r.value.confirmDialog.title,
          "confirm-btn": { content: e(v)(e(l).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": a[13] || (a[13] = (u) => {
            u || e(d).cancelDelete();
          }),
          onConfirm: a[14] || (a[14] = () => e(d).confirmDelete())
        }, {
          default: n(() => [
            o("p", null, i(r.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        s(V, {
          visible: r.value.obsModal.visible && !!r.value.obsModal.live,
          header: e(v)(e(l).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": a[19] || (a[19] = (u) => {
            u || e(d).closeDetail();
          })
        }, {
          footer: n(() => [
            o("div", Yt, [
              s(R, {
                variant: "outline",
                shape: "round",
                onClick: a[18] || (a[18] = () => e(d).closeDetail())
              }, {
                default: n(() => [
                  N(i(e(v)(e(l).CLOSE)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: n(() => [
            o("div", ut, [
              r.value.obsModal.errorMessage ? (m(), L("div", dt, [
                a[21] || (a[21] = o("span", { class: "live-info-error-icon" }, "!", -1)),
                o("span", null, i(r.value.obsModal.errorMessage), 1)
              ])) : D("", !0),
              o("div", ct, [
                o("div", vt, i(e(v)(e(l).BASIC_INFORMATION)), 1),
                o("div", mt, [
                  o("div", _t, [
                    o("span", pt, i(e(v)(e(l).ANCHOR_ID)), 1),
                    o("div", ft, [
                      o("span", Et, i(r.value.obsModal.live?.anchor?.userId || "-"), 1),
                      r.value.obsModal.live?.anchor?.userId ? (m(), L("button", {
                        key: 0,
                        class: "live-info-copy-btn",
                        onClick: a[15] || (a[15] = (u) => e(d).copyText(r.value.obsModal.live.anchor.userId, e(v)(e(l).LIVE_HOST)))
                      }, [
                        s(e(ne))
                      ])) : D("", !0)
                    ])
                  ]),
                  o("div", It, [
                    o("span", ht, i(e(v)(e(l).LIVE_ID)), 1),
                    o("div", Ct, [
                      o("span", bt, i(r.value.obsModal.live?.liveId || "-"), 1)
                    ])
                  ]),
                  o("div", Tt, [
                    o("span", yt, i(e(v)(e(l).LIVE_TITLE)), 1),
                    o("div", gt, [
                      o("span", St, i(r.value.obsModal.live?.liveName || "-"), 1)
                    ])
                  ]),
                  o("div", Lt, [
                    o("span", Rt, i(e(v)(e(l).LIVE_COVER)), 1),
                    o("div", At, [
                      o("span", Ot, i(r.value.obsModal.live?.coverUrl || "-"), 1)
                    ])
                  ])
                ])
              ]),
              r.value.obsModal.streamInfo || r.value.obsModal.actionLoading === "stream" ? (m(), L("div", Ut, [
                o("div", Nt, i(e(v)(e(l).PUSH_STREAM_INFO)), 1),
                o("div", Vt, [
                  r.value.obsModal.streamInfo ? (m(), L(pe, { key: 0 }, [
                    o("div", Mt, [
                      o("span", xt, i(e(v)(e(l).SERVER_URL)), 1),
                      o("div", kt, [
                        o("span", Dt, i(r.value.obsModal.streamInfo.serverUrl), 1),
                        o("button", {
                          class: "live-info-copy-btn",
                          onClick: a[16] || (a[16] = (u) => e(d).copyText(r.value.obsModal.streamInfo.serverUrl, e(v)(e(l).SERVER_URL)))
                        }, [
                          s(e(ne))
                        ])
                      ])
                    ]),
                    o("div", wt, [
                      o("span", Bt, i(e(v)(e(l).STREAM_KEY)), 1),
                      o("div", Ft, [
                        o("span", $t, i(r.value.obsModal.streamInfo.streamKey), 1),
                        o("button", {
                          class: "live-info-copy-btn",
                          onClick: a[17] || (a[17] = (u) => e(d).copyText(r.value.obsModal.streamInfo.streamKey, e(v)(e(l).STREAM_KEY)))
                        }, [
                          s(e(ne))
                        ])
                      ])
                    ])
                  ], 64)) : (m(), L("div", Kt, [
                    o("span", Pt, i(e(v)(e(l).GETTING_STREAM_INFO)), 1)
                  ]))
                ])
              ])) : D("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
});
export {
  ra as default
};
