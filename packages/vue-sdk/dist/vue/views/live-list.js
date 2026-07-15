import { defineComponent as Ee, computed as M, ref as L, resolveComponent as V, openBlock as _, createBlock as P, unref as e, withCtx as n, createVNode as s, createElementVNode as a, normalizeClass as me, toDisplayString as i, createCommentVNode as B, createTextVNode as N, createElementBlock as R, Fragment as pe, renderList as Ie, watch as ze, shallowRef as Le, onMounted as Qe, onBeforeUnmount as qe, createSlots as je } from "vue";
import { useRouter as Ze } from "vue-router";
import { ChevronDownIcon as Ne, ChevronRightIcon as xe, CloseIcon as ke, AddIcon as he, CopyIcon as ie, SearchIcon as Je, RefreshIcon as el } from "tdesign-icons-vue-next";
import { MessagePlugin as y } from "tdesign-vue-next";
import { useUIKit as be } from "@tencentcloud/uikit-base-component-vue3";
import { a3 as ll, au as Re, g as oe, bh as q, ba as tl, aV as al, A as ae, Q as k, C as U, a9 as ol, bS as sl, as as il, av as Ae, a0 as Ve, aC as nl, aA as Oe, c1 as rl, an as ul, aW as dl, T as cl, bk as Ue, P as Me, aN as vl, ac as ml } from "../../chunks/main-layout.1w0vpJq1.js";
import { a as Ce } from "../../chunks/useAsyncAction.E1F28vKl.js";
import { g as De, c as _l, I as l, A as we, L as pl, z as fl, l as El, aD as Il } from "../../chunks/layout.Br-W54NR.js";
import { r as Be, I as $e, b as hl } from "../../chunks/upload.C-_mha0d.js";
import { g as bl } from "../../chunks/columns.CB_IFrzG.js";
import { useLiveMonitorState as ye } from "../../vue.js";
import { _ as Cl } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.BIKMBYf9.js";
import { I as Fe } from "../../chunks/ImageUpload.BxAXq2fo.js";
import { _ as Ke } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as ve } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.B6xJ0SA2.js";
import { _ as yl, a as gl } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
const Tl = { class: "custom-info-section" }, Sl = {
  key: 2,
  class: "custom-info-count"
}, Ll = {
  key: 0,
  class: "custom-info-container"
}, Rl = { class: "custom-input-wrap" }, Al = { class: "custom-input-wrap custom-value-wrap" }, Vl = {
  key: 1,
  class: "create-success-content"
}, Ol = { class: "create-success-summary" }, Ul = {
  key: 0,
  class: "create-success-section"
}, Ml = { class: "create-success-section-title" }, Nl = { class: "stream-info-items" }, xl = { class: "stream-info-item" }, kl = { class: "stream-info-label" }, Dl = { class: "stream-info-value" }, wl = { class: "stream-info-item" }, Bl = { class: "stream-info-label" }, $l = { class: "stream-info-value" }, Fl = { class: "dialog-footer" }, Kl = /* @__PURE__ */ Ee({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(Y, { emit: v }) {
    const j = De("CreateLive"), { t } = be(), { opSuccess: Z, opFailed: O } = _l(t), u = Y, { extraFieldsSlot: d } = u, { createLive: J } = ye(), H = v, W = M({
      get: () => u.visible,
      set: (E) => H("update:visible", E)
    }), ee = M(() => ll.map((E) => ({
      value: E.value,
      label: t(E.labelKey)
    }))), g = (E) => oe(E), A = (E) => oe(E), o = (E) => {
      c.value.maxSeatCount = Number(E) || 1;
    }, c = L(Re()), h = L([]), F = L(!1), x = L(!1), r = L(!1), X = L(""), ne = L(""), K = L(null), D = L(""), le = L(null), re = L(!1), { loading: te, execute: fe } = Ce({
      toast: { action: l.CREATE, entity: l.LIVE },
      action: async () => {
        let E = "";
        try {
          E = await Be({
            handle: le.value,
            hasPendingFile: re.value,
            fallbackUrl: c.value.coverUrl,
            label: t(l.COVER_IMAGE)
          });
        } catch (S) {
          j.error("CreateLive", `Cover processing failed: ${S instanceof Error ? S.message : String(S)}`, S);
          const de = S instanceof $e ? S.message : `${t(l.COVER_PROCESSING_FAILED)}: ${S instanceof Error ? S.message : String(S) || t(l.UNKNOWN_ERROR)}`;
          y.error(de);
          return;
        }
        if (h.value.some(q)) {
          y.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        const p = ol({
          formData: c.value,
          coverUrl: E,
          customInfos: h.value,
          useObsStreaming: r.value
        }), Q = p.liveId, w = p.anchorId;
        if (await J(p), K.value = null, D.value = "", r.value, r.value) {
          const S = await sl({
            liveId: Q,
            anchorId: w,
            onStatusChange: (de) => {
              X.value = de;
            },
            messages: {
              getStreamInfoFailed: O(l.OP_GET_STREAM_INFO),
              importAccountFailed: O(l.OP_IMPORT, l.LIVE),
              addRobotFailed: O(l.OP_ADD, l.LIVE),
              pickSeatFailed: O(l.OP_PICK, l.LIVE),
              setupFailed: O(l.OP_OBS_SETUP_ACT, l.LIVE)
            }
          });
          K.value = S.streamInfo, D.value = S.streamInfoError, ne.value = S.setupError, S.configuredSuccessfully;
        }
        x.value = !0;
      }
    }), f = M(() => oe(c.value.anchorId)), m = M(() => oe(c.value.liveName));
    M(() => h.value.filter((E) => E.key.trim()).length);
    const T = M(() => h.value.some(q)), G = M(() => {
      const E = tl(c.value.seatTemplate), p = t(E?.descKey || "");
      return E?.orientation === "landscape" ? `${p}，${t(l.LANDSCAPE_BROADCASTING_HINT)}` : p;
    }), b = M(() => al(c.value.seatTemplate)), $ = M(() => r.value ? X.value === "error" ? `OBS 配置失败：${ne.value}` : K.value ? "OBS 已配置完成，可直接复制下方推流信息。" : D.value ? `OBS 已配置完成，但推流信息生成失败：${D.value}` : "OBS 已配置完成。" : ""), z = M(() => X.value === "error" || !!D.value), C = (E) => {
      re.value = !!E;
    }, ue = async (E, p) => {
      try {
        await il(E), y.success(Z(l.COPY, p));
      } catch (Q) {
        const w = Q, S = w.ErrorInfo || (w instanceof Error ? w.message : String(w)) || t(l.UNKNOWN_ERROR);
        j.error("CreateLive", `Copy failed: ${S}`, Q), y.error(O(l.COPY, null, S));
      }
    }, se = () => {
      if (h.value.length >= U.maxCount) {
        y.error(t(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: U.maxCount }));
        return;
      }
      h.value.push({ key: "", value: "" });
    }, Pe = (E) => {
      h.value.splice(E, 1);
    }, ge = () => {
      c.value = Re(), h.value = [], F.value = !1, x.value = !1, r.value = !1, X.value = "", ne.value = "", K.value = null, D.value = "", re.value = !1, le.value?.reset();
    }, Te = () => {
      ge(), H("update:visible", !1);
    }, Ye = async () => {
      if (!c.value.anchorId.trim()) {
        y.error(t(l.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (f.value > ae) {
        y.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.ANCHOR_ID), max: ae, current: f.value }));
        return;
      }
      if (m.value > k) {
        y.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.LIVE_TITLE), max: k, current: m.value }));
        return;
      }
      if (h.value.some(q)) {
        y.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      X.value = "", await fe();
    }, Xe = () => {
      ge(), H("success"), H("update:visible", !1);
    };
    return (E, p) => {
      const Q = V("t-input"), w = V("t-form-item"), S = V("t-select"), de = V("t-input-number"), Ge = V("t-checkbox"), ce = V("t-button"), He = V("t-form"), We = V("t-dialog");
      return _(), P(We, {
        visible: W.value,
        "onUpdate:visible": p[8] || (p[8] = (I) => W.value = I),
        header: x.value ? e(Z)(e(l).CREATE, e(l).LIVE) : e(t)(e(l).CREATE_LIVE),
        width: 560,
        placement: "center",
        class: "create-live-modal",
        onClose: Te
      }, {
        footer: n(() => [
          a("div", Fl, [
            x.value ? (_(), P(ce, {
              key: 1,
              theme: "primary",
              shape: "round",
              onClick: Xe
            }, {
              default: n(() => [
                N(i(e(t)(e(l).COMPLETE)), 1)
              ]),
              _: 1
            })) : (_(), R(pe, { key: 0 }, [
              s(ce, {
                variant: "outline",
                shape: "round",
                onClick: Te
              }, {
                default: n(() => [
                  N(i(e(t)(e(l).CANCEL)), 1)
                ]),
                _: 1
              }),
              s(ce, {
                theme: "primary",
                shape: "round",
                loading: e(te),
                disabled: e(te) || !c.value.anchorId.trim() || le.value?.isValidating || le.value?.hasUrlError || T.value,
                onClick: Ye
              }, {
                default: n(() => [
                  N(i(e(te) ? e(t)(e(l).CREATING) : e(t)(e(l).CREATE)), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ], 64))
          ])
        ]),
        default: n(() => [
          x.value ? (_(), R("div", Vl, [
            a("div", Ol, [
              p[9] || (p[9] = a("div", { class: "create-success-icon" }, [
                a("svg", {
                  width: "48",
                  height: "48",
                  viewBox: "0 0 48 48",
                  fill: "none"
                }, [
                  a("circle", {
                    cx: "24",
                    cy: "24",
                    r: "24",
                    fill: "#E8F5E9"
                  }),
                  a("path", {
                    d: "M14 24L21 31L34 18",
                    stroke: "#07C160",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])
              ], -1)),
              a("h3", null, i(e(Z)(e(l).LABEL_CREATED, e(l).LIVE)), 1),
              $.value ? (_(), R("p", {
                key: 0,
                class: me(["create-success-description", { "is-error": z.value }])
              }, i($.value), 3)) : B("", !0)
            ]),
            K.value ? (_(), R("div", Ul, [
              a("div", Ml, i(e(t)(e(l).STREAM_INFO)), 1),
              a("div", Nl, [
                a("div", xl, [
                  a("div", kl, [
                    a("span", null, i(e(t)(e(l).SERVER_URL)), 1),
                    a("button", {
                      class: "action-link",
                      onClick: p[6] || (p[6] = (I) => ue(K.value.serverUrl, e(t)(e(l).SERVER_URL)))
                    }, [
                      s(e(ie)),
                      N(" " + i(e(t)(e(l).COPY)), 1)
                    ])
                  ]),
                  a("code", Dl, i(K.value.serverUrl), 1)
                ]),
                a("div", wl, [
                  a("div", Bl, [
                    a("span", null, i(e(t)(e(l).STREAM_KEY)), 1),
                    a("button", {
                      class: "action-link",
                      onClick: p[7] || (p[7] = (I) => ue(K.value.streamKey, e(t)(e(l).STREAM_KEY)))
                    }, [
                      s(e(ie)),
                      N(" " + i(e(t)(e(l).COPY)), 1)
                    ])
                  ]),
                  a("code", $l, i(K.value.streamKey), 1)
                ])
              ])
            ])) : B("", !0)
          ])) : (_(), P(He, {
            key: 0,
            class: "create-live-form",
            "label-width": e(we)(100),
            colon: !1
          }, {
            default: n(() => [
              s(w, {
                label: e(t)(e(l).LIVE_HOST),
                "required-mark": !0
              }, {
                default: n(() => [
                  s(Q, {
                    modelValue: c.value.anchorId,
                    "onUpdate:modelValue": p[0] || (p[0] = (I) => c.value.anchorId = I),
                    placeholder: e(t)(e(l).ENTER_ANCHOR_ID),
                    status: f.value > e(ae) ? "error" : "default",
                    tips: f.value > e(ae) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).ANCHOR_ID), max: e(ae) }) : ""
                  }, {
                    suffix: n(() => [
                      a("span", {
                        class: me(["input-suffix-count", { "byte-overflow": f.value > e(ae) }])
                      }, i(f.value) + "/" + i(e(ae)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(w, {
                label: e(t)(e(l).LIVE_TITLE)
              }, {
                default: n(() => [
                  s(Q, {
                    modelValue: c.value.liveName,
                    "onUpdate:modelValue": p[1] || (p[1] = (I) => c.value.liveName = I),
                    placeholder: e(t)(e(l).ENTER_LIVE_TITLE),
                    status: m.value > e(k) ? "error" : "default",
                    tips: m.value > e(k) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).LIVE_TITLE), max: e(k) }) : ""
                  }, {
                    suffix: n(() => [
                      a("span", {
                        class: me(["input-suffix-count", { "byte-overflow": m.value > e(k) }])
                      }, i(m.value) + "/" + i(e(k)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(w, {
                label: e(t)(e(l).COVER_IMAGE)
              }, {
                default: n(() => [
                  s(Fe, {
                    ref_key: "coverUploadRef",
                    ref: le,
                    modelValue: c.value.coverUrl,
                    "onUpdate:modelValue": p[2] || (p[2] = (I) => c.value.coverUrl = I),
                    type: "cover",
                    "upload-enabled": Y.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": b.value,
                    placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": Y.uploadEnabled,
                    onFileReady: C
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(w, {
                label: e(t)(e(l).LAYOUT_TEMPLATE),
                "required-mark": !0,
                help: G.value
              }, {
                default: n(() => [
                  s(S, {
                    modelValue: c.value.seatTemplate,
                    "onUpdate:modelValue": p[3] || (p[3] = (I) => c.value.seatTemplate = I),
                    options: ee.value,
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              c.value.seatTemplate === "AudioSalon" || c.value.seatTemplate === "Karaoke" ? (_(), P(w, {
                key: 0,
                label: e(t)(e(l).MAX_SEATS),
                help: e(t)(e(l).MAX_SEATS_HELP)
              }, {
                default: n(() => [
                  s(de, {
                    "model-value": c.value.maxSeatCount,
                    "onUpdate:modelValue": o,
                    min: 1,
                    max: 16,
                    status: c.value.maxSeatCount < 1 || c.value.maxSeatCount > 16 ? "error" : "default",
                    tips: c.value.maxSeatCount < 1 || c.value.maxSeatCount > 16 ? e(t)(e(l).SEAT_COUNT_RANGE_1_16) : "",
                    placeholder: e(t)(e(l).ENTER_MAX_SEAT_COUNT),
                    theme: "normal",
                    style: { width: "100%" }
                  }, null, 8, ["model-value", "status", "tips", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "help"])) : B("", !0),
              s(w, {
                label: e(t)(e(l).STREAMING_METHOD),
                help: e(t)(e(l).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
              }, {
                default: n(() => [
                  s(Ge, {
                    modelValue: r.value,
                    "onUpdate:modelValue": p[4] || (p[4] = (I) => r.value = I)
                  }, {
                    default: n(() => [
                      N(i(e(t)(e(l).USE_OBS_STREAMING)), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              a("div", Tl, [
                a("div", {
                  class: "custom-info-toggle",
                  onClick: p[5] || (p[5] = (I) => F.value = !F.value)
                }, [
                  F.value ? (_(), P(e(Ne), {
                    key: 0,
                    size: "16"
                  })) : (_(), P(e(xe), {
                    key: 1,
                    size: "16"
                  })),
                  a("span", null, i(e(t)(e(l).CUSTOM_INFORMATION)), 1),
                  h.value.length > 0 ? (_(), R("span", Sl, i(h.value.length), 1)) : B("", !0)
                ]),
                F.value ? (_(), R("div", Ll, [
                  (_(!0), R(pe, null, Ie(h.value, (I, Se) => (_(), R("div", {
                    key: Se,
                    class: "custom-info-row"
                  }, [
                    a("div", Rl, [
                      s(Q, {
                        modelValue: I.key,
                        "onUpdate:modelValue": (_e) => I.key = _e,
                        placeholder: e(t)(e(l).ENTER_KEY),
                        status: g(I.key) > e(U).maxKeyBytes || e(q)(I) ? "error" : "default",
                        tips: g(I.key) > e(U).maxKeyBytes ? e(t)(e(l).MAX_BYTES, { field: "Key", max: e(U).maxKeyBytes }) : e(q)(I) ? e(t)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    a("div", Al, [
                      s(Q, {
                        modelValue: I.value,
                        "onUpdate:modelValue": (_e) => I.value = _e,
                        placeholder: e(t)(e(l).ENTER_VALUE),
                        status: A(I.value) > e(U).maxValueBytes ? "error" : "default",
                        tips: A(I.value) > e(U).maxValueBytes ? e(t)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    s(ce, {
                      variant: "text",
                      shape: "circle",
                      onClick: (_e) => Pe(Se)
                    }, {
                      default: n(() => [
                        s(e(ke))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  h.value.length < e(U).maxCount ? (_(), P(ce, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: se,
                    theme: "primary"
                  }, {
                    icon: n(() => [
                      s(e(he))
                    ]),
                    default: n(() => [
                      N(" " + i(e(t)(e(l).ADD)), 1)
                    ]),
                    _: 1
                  })) : B("", !0)
                ])) : B("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"]))
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Pl = /* @__PURE__ */ Ke(Kl, [["__scopeId", "data-v-4e3af3ce"]]), Yl = {
  key: 0,
  class: "edit-live-error"
}, Xl = { class: "custom-info-section" }, Gl = {
  key: 2,
  class: "custom-info-count"
}, Hl = {
  key: 0,
  class: "custom-info-container"
}, Wl = { class: "custom-input-wrap" }, zl = { class: "custom-input-wrap custom-value-wrap" }, Ql = { class: "dialog-footer" }, ql = /* @__PURE__ */ Ee({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    live: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(Y, { emit: v }) {
    const j = De("EditLive"), { t } = be(), { fetchLiveDetail: Z, updateLive: O } = ye(), u = Y, d = M(() => u.live?.liveId || u.live?.id || ""), J = v, H = M({
      get: () => u.visible,
      set: (f) => J("update:visible", f)
    }), W = (f) => oe(f), ee = (f) => oe(f), g = L(Ae()), A = L(""), o = L([]), c = L(!1), h = L([]), F = L(Ve), x = L(null), r = L(!1), { loading: X, execute: ne } = Ce({
      toast: { action: l.EDIT, entity: l.LIVE },
      action: async (f) => {
        const m = u.live?.liveId || u.live?.id || "";
        return O({
          liveId: m,
          ...f
        });
      },
      onSuccess: () => {
        J("success", {
          liveName: g.value.liveName.trim(),
          coverUrl: g.value.coverUrl
        }), te();
      }
    }), K = (f) => {
      r.value = !!f;
    }, D = M(() => oe(g.value.liveName));
    M(() => o.value.filter((f) => f.key.trim()).length), ze([() => u.live?.liveId || u.live?.id, () => u.visible], async ([f, m]) => {
      const T = u.live;
      if (T && m) {
        g.value = {
          liveName: T.liveName || "",
          coverUrl: T.coverUrl || ""
        }, T.coverUrl ? F.value = await nl(T.coverUrl) : F.value = Ve;
        const G = T.liveId || T.id || "";
        try {
          const b = await Z(G), $ = Oe(b?.customInfo);
          o.value = $, c.value = $.length > 0, h.value = $.map((z) => z.key);
        } catch (b) {
          b instanceof pl && (A.value = fl(b.code ?? 0, "", t(l.LIVE_NOT_FOUND)));
          const $ = T.customInfo, z = Oe($);
          o.value = z, c.value = z.length > 0, h.value = z.map((C) => C.key);
        }
      }
    }, { immediate: !0 });
    const le = () => {
      if (o.value.length >= U.maxCount) {
        y.error(t(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: U.maxCount }));
        return;
      }
      o.value.push({ key: "", value: "" });
    }, re = (f) => {
      o.value.splice(f, 1);
    }, te = () => {
      A.value = "", o.value = [], c.value = !1, h.value = [], r.value = !1, x.value?.reset(), g.value = Ae(), J("update:visible", !1);
    }, fe = async () => {
      if (u.live) {
        if (!g.value.liveName.trim()) {
          y.error(t(l.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (D.value > k) {
          y.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.LIVE_TITLE), max: k, current: D.value }));
          return;
        }
        if (o.value.some(q)) {
          y.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let f = "";
          try {
            f = await Be({
              handle: x.value,
              hasPendingFile: r.value,
              fallbackUrl: g.value.coverUrl,
              label: t(l.COVER_IMAGE)
            });
          } catch (b) {
            j.error("EditLive", `Cover processing failed: ${b instanceof Error ? b.message : String(b)}`, b);
            const $ = b instanceof $e ? b.message : `${t(l.COVER_PROCESSING_FAILED)}: ${b instanceof Error ? b.message : String(b) || t(l.UNKNOWN_ERROR)}`;
            y.error($);
            return;
          }
          const m = rl(o.value);
          if (m) {
            m.type === "key-too-long" ? y.error(t(l.MAX_BYTES, { field: `Key ${m.key}`, max: m.max })) : m.type === "value-too-long" ? y.error(t(l.KEY_VALUE_EXCEEDS_2KB, { key: m.key })) : m.type === "max-count" ? y.error(t(l.CUSTOM_INFO_MAX_COUNT, { max: m.max })) : y.error(t(l.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const T = ul(o.value), G = dl(h.value, T);
          await ne({
            liveName: g.value.liveName.trim(),
            coverUrl: f || void 0,
            customInfo: Object.keys(T).length > 0 ? T : void 0,
            deleteKeys: G.length > 0 ? G : void 0
          });
        } catch (f) {
          j.error("EditLiveModal", "Update failed:", f);
        }
      }
    };
    return (f, m) => {
      const T = V("t-input"), G = V("t-form-item"), b = V("t-button"), $ = V("t-form"), z = V("t-dialog");
      return _(), P(z, {
        visible: H.value,
        "onUpdate:visible": m[3] || (m[3] = (C) => H.value = C),
        header: e(t)(e(l).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: te
      }, {
        footer: n(() => [
          a("div", Ql, [
            s(b, {
              variant: "outline",
              shape: "round",
              onClick: te
            }, {
              default: n(() => [
                N(i(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            s(b, {
              theme: "primary",
              shape: "round",
              loading: e(X),
              disabled: e(X) || !g.value.liveName.trim() || x.value?.isValidating || x.value?.hasUrlError,
              onClick: fe
            }, {
              default: n(() => [
                N(i(e(X) ? e(t)(e(l).SAVING) : e(t)(e(l).SAVE)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        default: n(() => [
          s($, {
            class: "edit-live-form",
            "label-width": e(we)(100),
            colon: !1
          }, {
            default: n(() => [
              A.value ? (_(), R("div", Yl, [
                m[4] || (m[4] = a("span", { class: "edit-live-error-icon" }, "!", -1)),
                a("span", null, i(A.value), 1)
              ])) : B("", !0),
              s(G, {
                label: e(t)(e(l).LIVE_ID)
              }, {
                default: n(() => [
                  s(T, {
                    value: d.value,
                    disabled: "",
                    readonly: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(G, {
                label: e(t)(e(l).LIVE_TITLE),
                "required-mark": !0
              }, {
                default: n(() => [
                  s(T, {
                    modelValue: g.value.liveName,
                    "onUpdate:modelValue": m[0] || (m[0] = (C) => g.value.liveName = C),
                    placeholder: e(t)(e(l).ENTER_LIVE_TITLE),
                    status: D.value > e(k) ? "error" : "default",
                    tips: D.value > e(k) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).LIVE_TITLE), max: e(k) }) : ""
                  }, {
                    suffix: n(() => [
                      a("span", {
                        class: me(["input-suffix-count", { "byte-overflow": D.value > e(k) }])
                      }, i(D.value) + "/" + i(e(k)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(G, {
                label: e(t)(e(l).COVER_IMAGE)
              }, {
                default: n(() => [
                  s(Fe, {
                    ref_key: "coverUploadRef",
                    ref: x,
                    modelValue: g.value.coverUrl,
                    "onUpdate:modelValue": m[1] || (m[1] = (C) => g.value.coverUrl = C),
                    type: "cover",
                    "upload-enabled": Y.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": F.value,
                    placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": Y.uploadEnabled,
                    onFileReady: K
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              s(ve, {
                "slot-component": Y.extraFieldsSlot,
                "slot-props": { mode: "edit", live: Y.live, formData: { ...g.value }, customInfos: [...o.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              a("div", Xl, [
                a("div", {
                  class: "custom-info-toggle",
                  onClick: m[2] || (m[2] = (C) => c.value = !c.value)
                }, [
                  c.value ? (_(), P(e(Ne), {
                    key: 0,
                    size: "16"
                  })) : (_(), P(e(xe), {
                    key: 1,
                    size: "16"
                  })),
                  a("span", null, i(e(t)(e(l).CUSTOM_INFORMATION)), 1),
                  o.value.length > 0 ? (_(), R("span", Gl, i(o.value.length), 1)) : B("", !0)
                ]),
                c.value ? (_(), R("div", Hl, [
                  (_(!0), R(pe, null, Ie(o.value, (C, ue) => (_(), R("div", {
                    key: ue,
                    class: "custom-info-row"
                  }, [
                    a("div", Wl, [
                      s(T, {
                        modelValue: C.key,
                        "onUpdate:modelValue": (se) => C.key = se,
                        placeholder: e(t)(e(l).ENTER_KEY),
                        status: W(C.key) > e(U).maxKeyBytes || e(q)(C) ? "error" : "default",
                        tips: W(C.key) > e(U).maxKeyBytes ? e(t)(e(l).MAX_BYTES, { field: "Key", max: e(U).maxKeyBytes }) : e(q)(C) ? e(t)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    a("div", zl, [
                      s(T, {
                        modelValue: C.value,
                        "onUpdate:modelValue": (se) => C.value = se,
                        placeholder: e(t)(e(l).ENTER_VALUE),
                        status: ee(C.value) > e(U).maxValueBytes ? "error" : "default",
                        tips: ee(C.value) > e(U).maxValueBytes ? e(t)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    s(b, {
                      variant: "text",
                      shape: "circle",
                      onClick: (se) => re(ue)
                    }, {
                      default: n(() => [
                        s(e(ke))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  o.value.length < e(U).maxCount ? (_(), P(b, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: le,
                    theme: "primary"
                  }, {
                    icon: n(() => [
                      s(e(he))
                    ]),
                    default: n(() => [
                      N(" " + i(e(t)(e(l).ADD)), 1)
                    ]),
                    _: 1
                  })) : B("", !0)
                ])) : B("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), jl = /* @__PURE__ */ Ke(ql, [["__scopeId", "data-v-5c6350d0"]]), Zl = { class: "live-list-page" }, Jl = { class: "live-list-header" }, et = { class: "live-list-title" }, lt = { class: "header-actions" }, tt = { class: "live-list-id-cell" }, at = { class: "live-list-id-text" }, ot = { class: "live-list-cover-cell" }, st = ["src", "alt"], it = { class: "live-list-text" }, nt = { class: "live-list-text" }, rt = { class: "live-list-loading-container" }, ut = { class: "live-list-loading-text" }, dt = { class: "live-list-empty-container" }, ct = { class: "live-list-empty-text" }, vt = { class: "live-info-form" }, mt = {
  key: 0,
  class: "live-info-error"
}, _t = { class: "live-info-section" }, pt = { class: "live-info-section-title" }, ft = { class: "live-info-card" }, Et = { class: "live-info-row" }, It = { class: "live-info-label" }, ht = { class: "live-info-value-area" }, bt = { class: "live-info-value" }, Ct = { class: "live-info-row" }, yt = { class: "live-info-label" }, gt = { class: "live-info-value-area" }, Tt = { class: "live-info-value" }, St = { class: "live-info-row" }, Lt = { class: "live-info-label" }, Rt = { class: "live-info-value-area" }, At = { class: "live-info-value" }, Vt = { class: "live-info-row" }, Ot = { class: "live-info-label" }, Ut = { class: "live-info-value-area" }, Mt = { class: "live-info-value live-info-value-url" }, Nt = {
  key: 1,
  class: "live-info-section"
}, xt = { class: "live-info-section-title" }, kt = { class: "live-info-card" }, Dt = { class: "live-info-row" }, wt = { class: "live-info-label" }, Bt = { class: "live-info-value-area" }, $t = { class: "live-info-value live-info-value-url" }, Ft = { class: "live-info-row" }, Kt = { class: "live-info-label" }, Pt = { class: "live-info-value-area" }, Yt = { class: "live-info-value live-info-value-url" }, Xt = {
  key: 1,
  class: "live-info-row"
}, Gt = {
  class: "live-info-label",
  style: { width: "auto" }
}, Ht = { class: "dialog-footer" }, ua = /* @__PURE__ */ Ee({
  __name: "live-list",
  setup(Y) {
    const { t: v } = be(), j = Ze(), { endLive: t, fetchLiveDetail: Z } = ye(), O = El().components?.liveList, u = new cl({
      endLive: t,
      onEnterLive: (A) => {
        j.push({ path: `/live-control/${A}`, query: { from: "live-list" } });
      },
      t: v,
      toast: {
        success: (A) => y.success(A),
        error: (A) => y.error(A)
      },
      fetchLiveDetail: Z
    }), d = Le(u.getState()), J = u.subscribe(() => {
      d.value = u.getState();
    }), { execute: H } = Ce({
      toast: { action: l.DISSOLVE, entity: l.LIVE },
      operationName: v(l.DISSOLVE),
      action: async () => {
        await u.confirmDelete();
      }
    }), W = Le(!1);
    Qe(async () => {
      W.value = await hl(), await u.init();
    }), qe(() => {
      J(), u.dispose();
    });
    const ee = M(() => bl({ hasExtraColumn: !!O?.tableExtraColumns }).map((o) => ({
      ...o,
      title: o.i18nKey ? v(o.i18nKey) : ""
    }))), g = (A) => ml({
      live: A,
      t: v,
      onEnter: (o) => u.enterLive(o),
      onDetail: (o) => u.showDetail(o),
      onEdit: (o) => u.openEditModal(o),
      onDelete: (o) => u.requestDelete(o)
    });
    return (A, o) => {
      const c = V("t-input"), h = V("t-button"), F = V("t-card"), x = V("t-dialog");
      return _(), R("div", Zl, [
        a("div", Jl, [
          a("h1", et, i(e(v)(e(l).LIVE_LIST)), 1),
          s(ve, {
            "slot-component": e(O)?.beforeToolbar,
            "slot-props": { lives: d.value.lives, loading: d.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          a("div", lt, [
            s(c, {
              "model-value": d.value.searchInput,
              placeholder: e(v)(e(l).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: e(Ue)(d.value.searchInput, e(Me)) ? "error" : "default",
              tips: e(Ue)(d.value.searchInput, e(Me)) ? e(v)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": o[1] || (o[1] = (r) => e(u).setSearchInput(String(r ?? ""))),
              onEnter: o[2] || (o[2] = () => e(u).search()),
              onClear: o[3] || (o[3] = () => e(u).clearSearch())
            }, {
              suffixIcon: n(() => [
                s(e(Je), {
                  style: { cursor: "pointer" },
                  onClick: o[0] || (o[0] = () => e(u).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            s(h, {
              variant: "outline",
              shape: "round",
              disabled: d.value.refreshing || d.value.loading,
              onClick: o[4] || (o[4] = () => e(u).refresh())
            }, {
              icon: n(() => [
                s(e(el), {
                  class: me({ spinning: d.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: n(() => [
                N(" " + i(e(v)(e(l).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            s(h, {
              theme: "primary",
              shape: "round",
              onClick: o[5] || (o[5] = () => e(u).openCreateModal())
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
          s(ve, {
            "slot-component": e(O)?.afterToolbar,
            "slot-props": { lives: d.value.lives, loading: d.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        s(F, { class: "live-list-card" }, {
          default: n(() => [
            s(yl, {
              columns: ee.value,
              data: d.value.lives,
              "row-key": "liveId",
              loading: d.value.loading,
              "table-class-name": "live-list-table",
              "body-class-name": "live-list-content",
              "row-class-name": "live-list-row"
            }, je({
              "cell-liveId": n(({ row: r }) => [
                a("div", tt, [
                  a("span", at, i(r.liveId), 1),
                  s(e(ie), {
                    class: "copy-icon",
                    onClick: (X) => e(u).copyText(r.liveId, e(v)(e(l).LIVE_ID))
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-liveName": n(({ row: r }) => [
                N(i(r.liveName || "-"), 1)
              ]),
              "cell-coverUrl": n(({ row: r }) => [
                a("div", ot, [
                  a("img", {
                    src: r.coverUrl || e(Il),
                    alt: r.liveName,
                    class: "live-list-cover-image"
                  }, null, 8, st)
                ])
              ]),
              "cell-anchor": n(({ row: r }) => [
                a("span", it, i(r.anchor?.userId || "-"), 1)
              ]),
              "cell-createdAt": n(({ row: r }) => [
                a("span", nt, i(e(vl)(r.createdAt)), 1)
              ]),
              "cell-actions": n(({ row: r }) => [
                s(gl, {
                  actions: g(r)
                }, null, 8, ["actions"]),
                s(ve, {
                  "slot-component": e(O)?.rowActions,
                  "slot-props": { live: r }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: n(() => [
                a("div", rt, [
                  o[19] || (o[19] = a("div", { class: "live-list-loading-spinner" }, null, -1)),
                  a("span", ut, i(e(v)(e(l).LOADING)), 1)
                ])
              ]),
              empty: n(() => [
                a("div", dt, [
                  a("span", ct, i(e(v)(e(l).NO_LIVE_DATA)), 1)
                ])
              ]),
              _: 2
            }, [
              Ie(ee.value, (r) => ({
                name: `header-${r.key}`,
                fn: n(() => [
                  N(i(r.title), 1)
                ])
              })),
              e(O)?.tableExtraColumns ? {
                name: "cell-customer-extra",
                fn: n(({ row: r }) => [
                  s(ve, {
                    "slot-component": e(O).tableExtraColumns,
                    "slot-props": { live: r }
                  }, null, 8, ["slot-component", "slot-props"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["columns", "data", "loading"])
          ]),
          _: 1
        }),
        s(Cl, {
          "current-page": d.value.currentPage,
          "has-more-data": d.value.hasMoreData,
          loading: !1,
          onGoToFirstPage: o[6] || (o[6] = () => e(u).goToPage(1)),
          onPrevPage: o[7] || (o[7] = () => e(u).goToPage(d.value.currentPage - 1)),
          onNextPage: o[8] || (o[8] = () => e(u).goToPage(d.value.currentPage + 1))
        }, null, 8, ["current-page", "has-more-data"]),
        s(Pl, {
          visible: d.value.isCreateModalVisible,
          "upload-enabled": W.value,
          "onUpdate:visible": o[9] || (o[9] = (r) => r ? e(u).openCreateModal() : e(u).closeCreateModal()),
          onSuccess: o[10] || (o[10] = () => e(u).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        s(jl, {
          visible: d.value.isEditModalVisible,
          live: d.value.editingLive,
          "upload-enabled": W.value,
          "extra-fields-slot": e(O)?.roomFormExtraFields,
          "onUpdate:visible": o[11] || (o[11] = (r) => {
            r || e(u).closeEditModal();
          }),
          onSuccess: o[12] || (o[12] = (r) => e(u).onLiveEdited(r))
        }, null, 8, ["visible", "live", "upload-enabled", "extra-fields-slot"]),
        s(x, {
          visible: d.value.confirmDialog.visible,
          header: d.value.confirmDialog.title,
          "confirm-btn": { content: e(v)(e(l).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": o[13] || (o[13] = (r) => {
            r || e(u).cancelDelete();
          }),
          onConfirm: e(H)
        }, {
          default: n(() => [
            a("p", null, i(d.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "onConfirm"]),
        s(x, {
          visible: d.value.obsModal.visible && !!d.value.obsModal.live,
          header: e(v)(e(l).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": o[18] || (o[18] = (r) => {
            r || e(u).closeDetail();
          })
        }, {
          footer: n(() => [
            a("div", Ht, [
              s(h, {
                variant: "outline",
                shape: "round",
                onClick: o[17] || (o[17] = () => e(u).closeDetail())
              }, {
                default: n(() => [
                  N(i(e(v)(e(l).CLOSE)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: n(() => [
            a("div", vt, [
              d.value.obsModal.errorMessage ? (_(), R("div", mt, [
                o[20] || (o[20] = a("span", { class: "live-info-error-icon" }, "!", -1)),
                a("span", null, i(d.value.obsModal.errorMessage), 1)
              ])) : B("", !0),
              a("div", _t, [
                a("div", pt, i(e(v)(e(l).BASIC_INFORMATION)), 1),
                a("div", ft, [
                  a("div", Et, [
                    a("span", It, i(e(v)(e(l).ANCHOR_ID)), 1),
                    a("div", ht, [
                      a("span", bt, i(d.value.obsModal.live?.anchor?.userId || "-"), 1),
                      d.value.obsModal.live?.anchor?.userId ? (_(), R("button", {
                        key: 0,
                        class: "live-info-copy-btn",
                        onClick: o[14] || (o[14] = (r) => e(u).copyText(d.value.obsModal.live.anchor.userId, e(v)(e(l).LIVE_HOST)))
                      }, [
                        s(e(ie))
                      ])) : B("", !0)
                    ])
                  ]),
                  a("div", Ct, [
                    a("span", yt, i(e(v)(e(l).LIVE_ID)), 1),
                    a("div", gt, [
                      a("span", Tt, i(d.value.obsModal.live?.liveId || "-"), 1)
                    ])
                  ]),
                  a("div", St, [
                    a("span", Lt, i(e(v)(e(l).LIVE_TITLE)), 1),
                    a("div", Rt, [
                      a("span", At, i(d.value.obsModal.live?.liveName || "-"), 1)
                    ])
                  ]),
                  a("div", Vt, [
                    a("span", Ot, i(e(v)(e(l).LIVE_COVER)), 1),
                    a("div", Ut, [
                      a("span", Mt, i(d.value.obsModal.live?.coverUrl || "-"), 1)
                    ])
                  ])
                ])
              ]),
              d.value.obsModal.streamInfo || d.value.obsModal.actionLoading === "stream" ? (_(), R("div", Nt, [
                a("div", xt, i(e(v)(e(l).PUSH_STREAM_INFO)), 1),
                a("div", kt, [
                  d.value.obsModal.streamInfo ? (_(), R(pe, { key: 0 }, [
                    a("div", Dt, [
                      a("span", wt, i(e(v)(e(l).SERVER_URL)), 1),
                      a("div", Bt, [
                        a("span", $t, i(d.value.obsModal.streamInfo.serverUrl), 1),
                        a("button", {
                          class: "live-info-copy-btn",
                          onClick: o[15] || (o[15] = (r) => e(u).copyText(d.value.obsModal.streamInfo.serverUrl, e(v)(e(l).SERVER_URL)))
                        }, [
                          s(e(ie))
                        ])
                      ])
                    ]),
                    a("div", Ft, [
                      a("span", Kt, i(e(v)(e(l).STREAM_KEY)), 1),
                      a("div", Pt, [
                        a("span", Yt, i(d.value.obsModal.streamInfo.streamKey), 1),
                        a("button", {
                          class: "live-info-copy-btn",
                          onClick: o[16] || (o[16] = (r) => e(u).copyText(d.value.obsModal.streamInfo.streamKey, e(v)(e(l).STREAM_KEY)))
                        }, [
                          s(e(ie))
                        ])
                      ])
                    ])
                  ], 64)) : (_(), R("div", Xt, [
                    a("span", Gt, i(e(v)(e(l).GETTING_STREAM_INFO)), 1)
                  ]))
                ])
              ])) : B("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
});
export {
  ua as default
};
