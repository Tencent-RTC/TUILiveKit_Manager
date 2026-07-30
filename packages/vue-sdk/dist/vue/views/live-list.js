import { defineComponent as Ie, computed as U, ref as T, watch as xe, resolveComponent as V, openBlock as m, createElementBlock as C, Fragment as me, createVNode as n, unref as e, withCtx as i, createBlock as X, createElementVNode as o, normalizeClass as pe, toDisplayString as s, createTextVNode as g, createCommentVNode as x, renderList as he, shallowRef as Ae, onMounted as Ze, onBeforeUnmount as Je, createSlots as el } from "vue";
import { useRouter as ll } from "vue-router";
import { HelpCircleIcon as tl, ChevronDownIcon as De, ChevronRightIcon as we, CloseIcon as $e, AddIcon as fe, CopyIcon as re, SearchIcon as ol, RefreshIcon as al } from "tdesign-icons-vue-next";
import { Tooltip as sl, MessagePlugin as S } from "tdesign-vue-next";
import { useUIKit as be } from "@tencentcloud/uikit-base-component-vue3";
import { a6 as nl, as as Oe, g as oe, aP as il, bc as j, b4 as rl, aR as ul, k as te, U as D, C as M, b7 as dl, ac as cl, bM as vl, aq as _l, at as Ve, a3 as Ne, aA as ml, ay as Ue, bX as pl, am as fl, aS as El, X as Il, bf as Me, T as ke, aK as hl, af as bl } from "../../chunks/main-layout.BxLEuh4E.js";
import { a as Ce } from "../../chunks/useAsyncAction.Btr7ihji.js";
import { c as Fe, u as Cl, I as l, g as Be, m as yl, am as gl, a as Tl, S as Sl } from "../../chunks/shared-state.LwLSW33A.js";
import { g as Ll } from "../../chunks/PreviewUrlController.ChqehaBQ.js";
import { g as Rl } from "../../chunks/columns.D75h9FA-.js";
import { useLiveMonitorState as ye } from "../../vue.js";
import { _ as Al } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.DFDpp_mH.js";
import { r as Ke, I as Pe } from "../../chunks/image-upload-resolve.CM9TaFWN.js";
import { I as Ye } from "../../chunks/ImageUpload.DUXRho-X.js";
import { _ as He } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as _e } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.CTZnYVPd.js";
import { _ as Ol, a as Vl } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
const Nl = { style: { display: "inline-flex", "align-items": "center" } }, Ul = ["href"], Ml = {
  key: 0,
  class: "form-field__error-tip"
}, kl = ["href"], xl = { class: "custom-info-section" }, Dl = {
  key: 2,
  class: "custom-info-count"
}, wl = {
  key: 0,
  class: "custom-info-container"
}, $l = { class: "custom-input-wrap" }, Fl = { class: "custom-input-wrap custom-value-wrap" }, Bl = {
  key: 1,
  class: "create-success-content"
}, Kl = { class: "create-success-summary" }, Pl = {
  key: 0,
  class: "create-success-section"
}, Yl = { class: "create-success-section-title" }, Hl = { class: "stream-info-items" }, Xl = { class: "stream-info-item" }, Gl = { class: "stream-info-label" }, Wl = { class: "stream-info-value" }, zl = { class: "stream-info-item" }, ql = { class: "stream-info-label" }, Ql = { class: "stream-info-value" }, jl = { class: "dialog-footer" }, Zl = { style: { "font-size": "14px", "line-height": "22px", color: "rgba(0,0,0,0.6)" } }, Jl = ["href"], et = /* @__PURE__ */ Ie({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(H, { emit: v }) {
    const Z = Fe("CreateLive"), { t, language: ue } = be(), { opSuccess: w, opFailed: r } = Cl(t), u = H, { extraFieldsSlot: ae } = u, { createLive: se } = ye(), K = v, q = U({
      get: () => u.visible,
      set: (p) => K("update:visible", p)
    }), A = U(() => nl.map((p) => ({
      value: p.value,
      label: t(p.labelKey)
    }))), O = (p) => oe(p), a = (p) => oe(p), P = (p) => {
      c.value.maxSeatCount = Number(p) || 1;
    }, c = T(Oe()), L = T([]), k = T(!1), d = T(!1), F = T(!1), J = T(""), de = T(""), N = T(null), Q = T(""), ee = T(null), le = T(!1), G = T(!1), { loading: h, execute: I } = Ce({
      operationName: t(l.CREATE_LIVE),
      showSuccess: !1,
      action: async () => {
        let p = "";
        try {
          p = await Ke({
            handle: ee.value,
            hasPendingFile: le.value,
            fallbackUrl: c.value.coverUrl,
            label: t(l.COVER_IMAGE)
          });
        } catch (R) {
          Z.error("CreateLive", `Cover processing failed: ${R instanceof Error ? R.message : String(R)}`, R);
          const ve = R instanceof Pe ? R.message : `${t(l.COVER_PROCESSING_FAILED)}: ${R instanceof Error ? R.message : String(R) || t(l.UNKNOWN_ERROR)}`;
          S.error(ve);
          return;
        }
        if (L.value.some(j)) {
          S.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        const _ = cl({
          formData: c.value,
          coverUrl: p,
          customInfos: L.value,
          useObsStreaming: F.value
        }), z = _.liveId, $ = _.anchorId;
        if (await se(_), N.value = null, Q.value = "", F.value, F.value) {
          const R = await vl({
            liveId: z,
            anchorId: $,
            onStatusChange: (ve) => {
              J.value = ve;
            },
            messages: {
              getStreamInfoFailed: r(l.OP_GET_STREAM_INFO),
              importAccountFailed: r(l.OP_IMPORT, l.LIVE),
              addRobotFailed: r(l.OP_ADD, l.LIVE),
              pickSeatFailed: r(l.OP_PICK, l.LIVE),
              setupFailed: r(l.OP_OBS_SETUP_ACT, l.LIVE)
            }
          });
          N.value = R.streamInfo, Q.value = R.streamInfoError, de.value = R.setupError, R.configuredSuccessfully;
        }
        d.value = !0;
      },
      onError: (p) => {
        dl(p) && (G.value = !0);
      }
    }), b = U(() => oe(c.value.anchorId)), B = U(() => il(ue.value)), E = U(() => oe(c.value.liveName));
    U(() => L.value.filter((p) => p.key.trim()).length);
    const Y = U(() => L.value.some(j));
    xe(() => c.value.anchorId, () => {
      G.value && (G.value = !1);
    });
    const W = U(() => {
      const p = rl(c.value.seatTemplate), _ = t(p?.descKey || "");
      return p?.orientation === "landscape" ? `${_}，${t(l.LANDSCAPE_BROADCASTING_HINT)}` : _;
    }), y = U(() => ul(c.value.seatTemplate)), ce = U(() => F.value ? J.value === "error" ? `OBS 配置失败：${de.value}` : N.value ? "OBS 已配置完成，可直接复制下方推流信息。" : Q.value ? `OBS 已配置完成，但推流信息生成失败：${Q.value}` : "OBS 已配置完成。" : ""), ne = U(() => J.value === "error" || !!Q.value), Xe = (p) => {
      le.value = !!p;
    }, ge = async (p, _) => {
      try {
        await _l(p), S.success(w(l.COPY, _));
      } catch (z) {
        const $ = z, R = $.ErrorInfo || ($ instanceof Error ? $.message : String($)) || t(l.UNKNOWN_ERROR);
        Z.error("CreateLive", `Copy failed: ${R}`, z), S.error(r(l.COPY, null, R));
      }
    }, Ge = () => {
      if (L.value.length >= M.maxCount) {
        S.error(t(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: M.maxCount }));
        return;
      }
      L.value.push({ key: "", value: "" });
    }, We = (p) => {
      L.value.splice(p, 1);
    }, Te = () => {
      c.value = Oe(), L.value = [], k.value = !1, d.value = !1, F.value = !1, J.value = "", de.value = "", N.value = null, Q.value = "", le.value = !1, G.value = !1, ee.value?.reset();
    }, Se = () => {
      Te(), K("update:visible", !1);
    }, ze = async () => {
      if (!c.value.anchorId.trim()) {
        S.error(t(l.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (b.value > te) {
        S.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.ANCHOR_ID), max: te, current: b.value }));
        return;
      }
      if (E.value > D) {
        S.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.LIVE_TITLE), max: D, current: E.value }));
        return;
      }
      if (L.value.some(j)) {
        S.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      J.value = "", await I();
    }, qe = () => {
      Te(), K("success"), K("update:visible", !1);
    };
    return (p, _) => {
      const z = V("t-input"), $ = V("t-form-item"), R = V("t-select"), ve = V("t-input-number"), Qe = V("t-checkbox"), ie = V("t-button"), je = V("t-form"), Le = V("t-dialog");
      return m(), C(me, null, [
        n(Le, {
          visible: q.value,
          "onUpdate:visible": _[8] || (_[8] = (f) => q.value = f),
          header: d.value ? e(w)(e(l).CREATE, e(l).LIVE) : e(t)(e(l).CREATE_LIVE),
          width: 560,
          placement: "center",
          class: "create-live-modal",
          onClose: Se
        }, {
          footer: i(() => [
            o("div", jl, [
              d.value ? (m(), X(ie, {
                key: 1,
                theme: "primary",
                shape: "round",
                onClick: qe
              }, {
                default: i(() => [
                  g(s(e(t)(e(l).COMPLETE)), 1)
                ]),
                _: 1
              })) : (m(), C(me, { key: 0 }, [
                n(ie, {
                  variant: "outline",
                  shape: "round",
                  onClick: Se
                }, {
                  default: i(() => [
                    g(s(e(t)(e(l).CANCEL)), 1)
                  ]),
                  _: 1
                }),
                n(ie, {
                  theme: "primary",
                  shape: "round",
                  loading: e(h),
                  disabled: e(h) || !c.value.anchorId.trim() || ee.value?.isValidating || ee.value?.hasUrlError || Y.value,
                  onClick: ze
                }, {
                  default: i(() => [
                    g(s(e(h) ? e(t)(e(l).CREATING) : e(t)(e(l).CREATE)), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64))
            ])
          ]),
          default: i(() => [
            d.value ? (m(), C("div", Bl, [
              o("div", Kl, [
                _[11] || (_[11] = o("div", { class: "create-success-icon" }, [
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
                o("h3", null, s(e(w)(e(l).LABEL_CREATED, e(l).LIVE)), 1),
                ce.value ? (m(), C("p", {
                  key: 0,
                  class: pe(["create-success-description", { "is-error": ne.value }])
                }, s(ce.value), 3)) : x("", !0)
              ]),
              N.value ? (m(), C("div", Pl, [
                o("div", Yl, s(e(t)(e(l).STREAM_INFO)), 1),
                o("div", Hl, [
                  o("div", Xl, [
                    o("div", Gl, [
                      o("span", null, s(e(t)(e(l).SERVER_URL)), 1),
                      o("button", {
                        class: "action-link",
                        onClick: _[6] || (_[6] = (f) => ge(N.value.serverUrl, e(t)(e(l).SERVER_URL)))
                      }, [
                        n(e(re)),
                        g(" " + s(e(t)(e(l).COPY)), 1)
                      ])
                    ]),
                    o("code", Wl, s(N.value.serverUrl), 1)
                  ]),
                  o("div", zl, [
                    o("div", ql, [
                      o("span", null, s(e(t)(e(l).STREAM_KEY)), 1),
                      o("button", {
                        class: "action-link",
                        onClick: _[7] || (_[7] = (f) => ge(N.value.streamKey, e(t)(e(l).STREAM_KEY)))
                      }, [
                        n(e(re)),
                        g(" " + s(e(t)(e(l).COPY)), 1)
                      ])
                    ]),
                    o("code", Ql, s(N.value.streamKey), 1)
                  ])
                ])
              ])) : x("", !0)
            ])) : (m(), X(je, {
              key: 0,
              class: "create-live-form",
              "label-width": e(Be)(100),
              colon: !1
            }, {
              default: i(() => [
                n($, { "required-mark": !0 }, {
                  label: i(() => [
                    o("span", Nl, [
                      g(s(e(t)(e(l).LIVE_HOST)) + " ", 1),
                      n(e(sl), { placement: "top" }, {
                        content: i(() => [
                          o("span", null, [
                            g(s(e(t)(e(l).ANCHOR_ID_HELP_TEXT)) + " ", 1),
                            o("a", {
                              href: B.value,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              style: { color: "#6ea1ff", "text-decoration": "underline" }
                            }, s(e(t)(e(l).VIEW_DETAILS)), 9, Ul)
                          ])
                        ]),
                        default: i(() => [
                          n(e(tl), { style: { "margin-left": "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: i(() => [
                    n(z, {
                      modelValue: c.value.anchorId,
                      "onUpdate:modelValue": _[0] || (_[0] = (f) => c.value.anchorId = f),
                      placeholder: e(t)(e(l).ENTER_ANCHOR_ID),
                      status: G.value || b.value > e(te) ? "error" : "default",
                      tips: !G.value && b.value > e(te) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).ANCHOR_ID), max: e(te) }) : ""
                    }, {
                      suffix: i(() => [
                        o("span", {
                          class: pe(["input-suffix-count", { "byte-overflow": b.value > e(te) }])
                        }, s(b.value) + "/" + s(e(te)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"]),
                    G.value ? (m(), C("div", Ml, [
                      g(s(e(t)(e(l).ANCHOR_ID_NOT_FOUND_TIP)) + " ", 1),
                      o("a", {
                        href: B.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: "#1C66E5" }
                      }, s(e(t)(e(l).VIEW_DETAILS)), 9, kl)
                    ])) : x("", !0)
                  ]),
                  _: 1
                }),
                n($, {
                  label: e(t)(e(l).LIVE_TITLE)
                }, {
                  default: i(() => [
                    n(z, {
                      modelValue: c.value.liveName,
                      "onUpdate:modelValue": _[1] || (_[1] = (f) => c.value.liveName = f),
                      placeholder: e(t)(e(l).ENTER_LIVE_TITLE),
                      status: E.value > e(D) ? "error" : "default",
                      tips: E.value > e(D) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).LIVE_TITLE), max: e(D) }) : ""
                    }, {
                      suffix: i(() => [
                        o("span", {
                          class: pe(["input-suffix-count", { "byte-overflow": E.value > e(D) }])
                        }, s(E.value) + "/" + s(e(D)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                n($, {
                  label: e(t)(e(l).COVER_IMAGE)
                }, {
                  default: i(() => [
                    n(Ye, {
                      ref_key: "coverUploadRef",
                      ref: ee,
                      modelValue: c.value.coverUrl,
                      "onUpdate:modelValue": _[2] || (_[2] = (f) => c.value.coverUrl = f),
                      type: "cover",
                      "upload-enabled": H.uploadEnabled,
                      "crop-enabled": !0,
                      "aspect-ratio": y.value,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                      "preview-height": 140,
                      "max-bytes": 200,
                      "defer-upload": H.uploadEnabled,
                      onFileReady: Xe
                    }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                n($, {
                  label: e(t)(e(l).LAYOUT_TEMPLATE),
                  "required-mark": !0,
                  help: W.value
                }, {
                  default: i(() => [
                    n(R, {
                      modelValue: c.value.seatTemplate,
                      "onUpdate:modelValue": _[3] || (_[3] = (f) => c.value.seatTemplate = f),
                      options: A.value,
                      style: { width: "100%" }
                    }, null, 8, ["modelValue", "options"])
                  ]),
                  _: 1
                }, 8, ["label", "help"]),
                c.value.seatTemplate === "AudioSalon" || c.value.seatTemplate === "Karaoke" ? (m(), X($, {
                  key: 0,
                  label: e(t)(e(l).MAX_SEATS),
                  help: e(t)(e(l).MAX_SEATS_HELP)
                }, {
                  default: i(() => [
                    n(ve, {
                      "model-value": c.value.maxSeatCount,
                      "onUpdate:modelValue": P,
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
                }, 8, ["label", "help"])) : x("", !0),
                n($, {
                  label: e(t)(e(l).STREAMING_METHOD),
                  help: e(t)(e(l).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
                }, {
                  default: i(() => [
                    n(Qe, {
                      modelValue: F.value,
                      "onUpdate:modelValue": _[4] || (_[4] = (f) => F.value = f)
                    }, {
                      default: i(() => [
                        g(s(e(t)(e(l).USE_OBS_STREAMING)), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label", "help"]),
                o("div", xl, [
                  o("div", {
                    class: "custom-info-toggle",
                    onClick: _[5] || (_[5] = (f) => k.value = !k.value)
                  }, [
                    k.value ? (m(), X(e(De), {
                      key: 0,
                      size: "16"
                    })) : (m(), X(e(we), {
                      key: 1,
                      size: "16"
                    })),
                    o("span", null, s(e(t)(e(l).CUSTOM_INFORMATION)), 1),
                    L.value.length > 0 ? (m(), C("span", Dl, s(L.value.length), 1)) : x("", !0)
                  ]),
                  k.value ? (m(), C("div", wl, [
                    (m(!0), C(me, null, he(L.value, (f, Re) => (m(), C("div", {
                      key: Re,
                      class: "custom-info-row"
                    }, [
                      o("div", $l, [
                        n(z, {
                          modelValue: f.key,
                          "onUpdate:modelValue": (Ee) => f.key = Ee,
                          placeholder: e(t)(e(l).ENTER_KEY),
                          status: O(f.key) > e(M).maxKeyBytes || e(j)(f) ? "error" : "default",
                          tips: O(f.key) > e(M).maxKeyBytes ? e(t)(e(l).MAX_BYTES, { field: "Key", max: e(M).maxKeyBytes }) : e(j)(f) ? e(t)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                      ]),
                      o("div", Fl, [
                        n(z, {
                          modelValue: f.value,
                          "onUpdate:modelValue": (Ee) => f.value = Ee,
                          placeholder: e(t)(e(l).ENTER_VALUE),
                          status: a(f.value) > e(M).maxValueBytes ? "error" : "default",
                          tips: a(f.value) > e(M).maxValueBytes ? e(t)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                      ]),
                      n(ie, {
                        variant: "text",
                        shape: "circle",
                        onClick: (Ee) => We(Re)
                      }, {
                        default: i(() => [
                          n(e($e))
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]))), 128)),
                    L.value.length < e(M).maxCount ? (m(), X(ie, {
                      key: 0,
                      style: { width: "80px" },
                      variant: "text",
                      shape: "round",
                      onClick: Ge,
                      theme: "primary"
                    }, {
                      icon: i(() => [
                        n(e(fe))
                      ]),
                      default: i(() => [
                        g(" " + s(e(t)(e(l).ADD)), 1)
                      ]),
                      _: 1
                    })) : x("", !0)
                  ])) : x("", !0)
                ])
              ]),
              _: 1
            }, 8, ["label-width"]))
          ]),
          _: 1
        }, 8, ["visible", "header"]),
        n(Le, {
          visible: p.showAnchorIdErrorDialog,
          "onUpdate:visible": _[10] || (_[10] = (f) => p.showAnchorIdErrorDialog = f),
          header: e(t)(e(l).ANCHOR_ID_NOT_FOUND),
          width: 420,
          placement: "center",
          class: "anchor-id-error-dialog"
        }, {
          footer: i(() => [
            n(ie, {
              theme: "primary",
              shape: "round",
              onClick: _[9] || (_[9] = (f) => p.showAnchorIdErrorDialog = !1)
            }, {
              default: i(() => [
                g(s(e(t)(e(l).CLOSE)), 1)
              ]),
              _: 1
            })
          ]),
          default: i(() => [
            o("div", Zl, [
              g(s(e(t)(e(l).ANCHOR_ID_NOT_FOUND_DESC)) + " ", 1),
              o("a", {
                href: B.value,
                target: "_blank",
                rel: "noopener noreferrer",
                style: { color: "#1C66E5" }
              }, s(e(t)(e(l).HERE)), 9, Jl)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ], 64);
    };
  }
}), lt = /* @__PURE__ */ He(et, [["__scopeId", "data-v-fd442bc6"]]), tt = {
  key: 0,
  class: "edit-live-error"
}, ot = { class: "custom-info-section" }, at = {
  key: 2,
  class: "custom-info-count"
}, st = {
  key: 0,
  class: "custom-info-container"
}, nt = { class: "custom-input-wrap" }, it = { class: "custom-input-wrap custom-value-wrap" }, rt = { class: "dialog-footer" }, ut = /* @__PURE__ */ Ie({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    live: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(H, { emit: v }) {
    const Z = Fe("EditLive"), { t } = be(), { fetchLiveDetail: ue, updateLive: w } = ye(), r = H, u = U(() => r.live?.liveId || r.live?.id || ""), ae = v, se = U({
      get: () => r.visible,
      set: (h) => ae("update:visible", h)
    }), K = (h) => oe(h), q = (h) => oe(h), A = T(Ve()), O = T(""), a = T([]), P = T(!1), c = T([]), L = T(Ne), k = T(null), d = T(!1), { loading: F, execute: J } = Ce({
      toast: { action: l.EDIT, entity: l.LIVE },
      action: async (h) => {
        const I = r.live?.liveId || r.live?.id || "";
        return w({
          liveId: I,
          ...h
        });
      },
      showSuccess: !0,
      onSuccess: () => {
        ae("success", {
          liveName: A.value.liveName.trim(),
          coverUrl: A.value.coverUrl
        }), le();
      }
    }), de = (h) => {
      d.value = !!h;
    }, N = U(() => oe(A.value.liveName));
    U(() => a.value.filter((h) => h.key.trim()).length), xe([() => r.live?.liveId || r.live?.id, () => r.visible], async ([h, I]) => {
      const b = r.live;
      if (b && I) {
        A.value = {
          liveName: b.liveName || "",
          coverUrl: b.coverUrl || ""
        }, b.coverUrl ? L.value = await ml(b.coverUrl) : L.value = Ne;
        const B = b.liveId || b.id || "";
        try {
          const E = await ue(B), Y = Ue(E?.customInfo);
          a.value = Y, P.value = Y.length > 0, c.value = Y.map((W) => W.key);
        } catch (E) {
          E instanceof yl && (O.value = gl(E.code ?? 0, "", t(l.LIVE_NOT_FOUND)));
          const Y = b.customInfo, W = Ue(Y);
          a.value = W, P.value = W.length > 0, c.value = W.map((y) => y.key);
        }
      }
    }, { immediate: !0 });
    const Q = () => {
      if (a.value.length >= M.maxCount) {
        S.error(t(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: M.maxCount }));
        return;
      }
      a.value.push({ key: "", value: "" });
    }, ee = (h) => {
      a.value.splice(h, 1);
    }, le = () => {
      O.value = "", a.value = [], P.value = !1, c.value = [], d.value = !1, k.value?.reset(), A.value = Ve(), ae("update:visible", !1);
    }, G = async () => {
      if (r.live) {
        if (!A.value.liveName.trim()) {
          S.error(t(l.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (N.value > D) {
          S.error(t(l.MAX_BYTES_WITH_CURRENT, { field: t(l.LIVE_TITLE), max: D, current: N.value }));
          return;
        }
        if (a.value.some(j)) {
          S.error(t(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let h = "";
          try {
            h = await Ke({
              handle: k.value,
              hasPendingFile: d.value,
              fallbackUrl: A.value.coverUrl,
              label: t(l.COVER_IMAGE)
            });
          } catch (E) {
            Z.error("EditLive", `Cover processing failed: ${E instanceof Error ? E.message : String(E)}`, E);
            const Y = E instanceof Pe ? E.message : `${t(l.COVER_PROCESSING_FAILED)}: ${E instanceof Error ? E.message : String(E) || t(l.UNKNOWN_ERROR)}`;
            S.error(Y);
            return;
          }
          const I = pl(a.value);
          if (I) {
            I.type === "key-too-long" ? S.error(t(l.MAX_BYTES, { field: `Key ${I.key}`, max: I.max })) : I.type === "value-too-long" ? S.error(t(l.KEY_VALUE_EXCEEDS_2KB, { key: I.key })) : I.type === "max-count" ? S.error(t(l.CUSTOM_INFO_MAX_COUNT, { max: I.max })) : S.error(t(l.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const b = fl(a.value), B = El(c.value, b);
          await J({
            liveName: A.value.liveName.trim(),
            coverUrl: h || void 0,
            customInfo: Object.keys(b).length > 0 ? b : void 0,
            deleteKeys: B.length > 0 ? B : void 0
          });
        } catch (h) {
          Z.error("EditLiveModal", "Update failed:", h);
        }
      }
    };
    return (h, I) => {
      const b = V("t-input"), B = V("t-form-item"), E = V("t-button"), Y = V("t-form"), W = V("t-dialog");
      return m(), X(W, {
        visible: se.value,
        "onUpdate:visible": I[3] || (I[3] = (y) => se.value = y),
        header: e(t)(e(l).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: le
      }, {
        footer: i(() => [
          o("div", rt, [
            n(E, {
              variant: "outline",
              shape: "round",
              onClick: le
            }, {
              default: i(() => [
                g(s(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            n(E, {
              theme: "primary",
              shape: "round",
              loading: e(F),
              disabled: e(F) || !A.value.liveName.trim() || k.value?.isValidating || k.value?.hasUrlError,
              onClick: G
            }, {
              default: i(() => [
                g(s(e(F) ? e(t)(e(l).SAVING) : e(t)(e(l).SAVE)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        default: i(() => [
          n(Y, {
            class: "edit-live-form",
            "label-width": e(Be)(100),
            colon: !1
          }, {
            default: i(() => [
              O.value ? (m(), C("div", tt, [
                I[4] || (I[4] = o("span", { class: "edit-live-error-icon" }, "!", -1)),
                o("span", null, s(O.value), 1)
              ])) : x("", !0),
              n(B, {
                label: e(t)(e(l).LIVE_ID)
              }, {
                default: i(() => [
                  n(b, {
                    value: u.value,
                    disabled: "",
                    readonly: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(B, {
                label: e(t)(e(l).LIVE_TITLE),
                "required-mark": !0
              }, {
                default: i(() => [
                  n(b, {
                    modelValue: A.value.liveName,
                    "onUpdate:modelValue": I[0] || (I[0] = (y) => A.value.liveName = y),
                    placeholder: e(t)(e(l).ENTER_LIVE_TITLE),
                    status: N.value > e(D) ? "error" : "default",
                    tips: N.value > e(D) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).LIVE_TITLE), max: e(D) }) : ""
                  }, {
                    suffix: i(() => [
                      o("span", {
                        class: pe(["input-suffix-count", { "byte-overflow": N.value > e(D) }])
                      }, s(N.value) + "/" + s(e(D)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(B, {
                label: e(t)(e(l).COVER_IMAGE)
              }, {
                default: i(() => [
                  n(Ye, {
                    ref_key: "coverUploadRef",
                    ref: k,
                    modelValue: A.value.coverUrl,
                    "onUpdate:modelValue": I[1] || (I[1] = (y) => A.value.coverUrl = y),
                    type: "cover",
                    "upload-enabled": H.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": L.value,
                    placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": H.uploadEnabled,
                    onFileReady: de
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(_e, {
                "slot-component": H.extraFieldsSlot,
                "slot-props": { mode: "edit", live: H.live, formData: { ...A.value }, customInfos: [...a.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              o("div", ot, [
                o("div", {
                  class: "custom-info-toggle",
                  onClick: I[2] || (I[2] = (y) => P.value = !P.value)
                }, [
                  P.value ? (m(), X(e(De), {
                    key: 0,
                    size: "16"
                  })) : (m(), X(e(we), {
                    key: 1,
                    size: "16"
                  })),
                  o("span", null, s(e(t)(e(l).CUSTOM_INFORMATION)), 1),
                  a.value.length > 0 ? (m(), C("span", at, s(a.value.length), 1)) : x("", !0)
                ]),
                P.value ? (m(), C("div", st, [
                  (m(!0), C(me, null, he(a.value, (y, ce) => (m(), C("div", {
                    key: ce,
                    class: "custom-info-row"
                  }, [
                    o("div", nt, [
                      n(b, {
                        modelValue: y.key,
                        "onUpdate:modelValue": (ne) => y.key = ne,
                        placeholder: e(t)(e(l).ENTER_KEY),
                        status: K(y.key) > e(M).maxKeyBytes || e(j)(y) ? "error" : "default",
                        tips: K(y.key) > e(M).maxKeyBytes ? e(t)(e(l).MAX_BYTES, { field: "Key", max: e(M).maxKeyBytes }) : e(j)(y) ? e(t)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    o("div", it, [
                      n(b, {
                        modelValue: y.value,
                        "onUpdate:modelValue": (ne) => y.value = ne,
                        placeholder: e(t)(e(l).ENTER_VALUE),
                        status: q(y.value) > e(M).maxValueBytes ? "error" : "default",
                        tips: q(y.value) > e(M).maxValueBytes ? e(t)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    n(E, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ne) => ee(ce)
                    }, {
                      default: i(() => [
                        n(e($e))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  a.value.length < e(M).maxCount ? (m(), X(E, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: Q,
                    theme: "primary"
                  }, {
                    icon: i(() => [
                      n(e(fe))
                    ]),
                    default: i(() => [
                      g(" " + s(e(t)(e(l).ADD)), 1)
                    ]),
                    _: 1
                  })) : x("", !0)
                ])) : x("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), dt = /* @__PURE__ */ He(ut, [["__scopeId", "data-v-5c6350d0"]]), ct = { class: "live-list-page" }, vt = { class: "live-list-header" }, _t = { class: "live-list-title" }, mt = { class: "header-actions" }, pt = { class: "live-list-id-cell" }, ft = { class: "live-list-id-text" }, Et = { class: "live-list-cover-cell" }, It = ["src", "alt"], ht = { class: "live-list-text" }, bt = { class: "live-list-text" }, Ct = { class: "live-list-loading-container" }, yt = { class: "live-list-loading-text" }, gt = {
  key: 0,
  class: "live-list-empty-container"
}, Tt = { class: "live-list-empty-text" }, St = {
  key: 1,
  class: "live-list-empty-container"
}, Lt = { class: "empty-guide-icon" }, Rt = { class: "empty-guide-title" }, At = { class: "empty-guide-desc" }, Ot = { class: "empty-guide-actions" }, Vt = { class: "live-info-form" }, Nt = {
  key: 0,
  class: "live-info-error"
}, Ut = { class: "live-info-section" }, Mt = { class: "live-info-section-title" }, kt = { class: "live-info-card" }, xt = { class: "live-info-row" }, Dt = { class: "live-info-label" }, wt = { class: "live-info-value-area" }, $t = { class: "live-info-value" }, Ft = { class: "live-info-row" }, Bt = { class: "live-info-label" }, Kt = { class: "live-info-value-area" }, Pt = { class: "live-info-value" }, Yt = { class: "live-info-row" }, Ht = { class: "live-info-label" }, Xt = { class: "live-info-value-area" }, Gt = { class: "live-info-value" }, Wt = { class: "live-info-row" }, zt = { class: "live-info-label" }, qt = { class: "live-info-value-area" }, Qt = { class: "live-info-value live-info-value-url" }, jt = {
  key: 1,
  class: "live-info-section"
}, Zt = { class: "live-info-section-title" }, Jt = { class: "live-info-card" }, eo = { class: "live-info-row" }, lo = { class: "live-info-label" }, to = { class: "live-info-value-area" }, oo = { class: "live-info-value live-info-value-url" }, ao = { class: "live-info-row" }, so = { class: "live-info-label" }, no = { class: "live-info-value-area" }, io = { class: "live-info-value live-info-value-url" }, ro = {
  key: 1,
  class: "live-info-row"
}, uo = {
  class: "live-info-label",
  style: { width: "auto" }
}, co = { class: "dialog-footer" }, Oo = /* @__PURE__ */ Ie({
  __name: "live-list",
  setup(H) {
    const { t: v } = be(), Z = ll(), { endLive: t, fetchLiveDetail: ue } = ye(), w = Tl().components?.liveList, r = new Il({
      endLive: t,
      onEnterLive: (O) => {
        Z.push({ path: `/live-control/${O}`, query: { from: "live-list" } });
      },
      t: v,
      toast: {
        success: (O) => S.success(O),
        error: (O) => S.error(O)
      },
      fetchLiveDetail: ue
    }), u = Ae(r.getState()), ae = r.subscribe(() => {
      u.value = r.getState();
    }), { execute: se } = Ce({
      toast: { action: l.DISSOLVE, entity: l.LIVE },
      operationName: v(l.DISSOLVE),
      action: async () => {
        await r.confirmDelete();
      }
    }), K = Ae(!1);
    Ze(async () => {
      K.value = await Ll(), await r.init();
    }), Je(() => {
      ae(), r.dispose();
    });
    const q = U(() => Rl({ hasExtraColumn: !!w?.tableExtraColumns }).map((a) => ({
      ...a,
      title: a.i18nKey ? v(a.i18nKey) : ""
    }))), A = (O) => bl({
      live: O,
      t: v,
      onEnter: (a) => r.enterLive(a),
      onDetail: (a) => r.showDetail(a),
      onEdit: (a) => r.openEditModal(a),
      onDelete: (a) => r.requestDelete(a)
    });
    return (O, a) => {
      const P = V("t-input"), c = V("t-button"), L = V("t-card"), k = V("t-dialog");
      return m(), C("div", ct, [
        o("div", vt, [
          o("h1", _t, s(e(v)(e(l).LIVE_LIST)), 1),
          n(_e, {
            "slot-component": e(w)?.beforeToolbar,
            "slot-props": { lives: u.value.lives, loading: u.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          o("div", mt, [
            n(P, {
              "model-value": u.value.searchInput,
              placeholder: e(v)(e(l).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: e(Me)(u.value.searchInput, e(ke)) ? "error" : "default",
              tips: e(Me)(u.value.searchInput, e(ke)) ? e(v)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": a[1] || (a[1] = (d) => e(r).setSearchInput(String(d ?? ""))),
              onEnter: a[2] || (a[2] = () => e(r).search()),
              onClear: a[3] || (a[3] = () => e(r).clearSearch())
            }, {
              suffixIcon: i(() => [
                n(e(ol), {
                  style: { cursor: "pointer" },
                  onClick: a[0] || (a[0] = () => e(r).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            n(c, {
              variant: "outline",
              shape: "round",
              disabled: u.value.refreshing || u.value.loading,
              onClick: a[4] || (a[4] = () => e(r).refresh())
            }, {
              icon: i(() => [
                n(e(al), {
                  class: pe({ spinning: u.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: i(() => [
                g(" " + s(e(v)(e(l).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            n(c, {
              theme: "primary",
              shape: "round",
              onClick: a[5] || (a[5] = () => e(r).openCreateModal())
            }, {
              icon: i(() => [
                n(e(fe))
              ]),
              default: i(() => [
                g(" " + s(e(v)(e(l).CREATE_LIVE)), 1)
              ]),
              _: 1
            })
          ]),
          n(_e, {
            "slot-component": e(w)?.afterToolbar,
            "slot-props": { lives: u.value.lives, loading: u.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        n(L, { class: "live-list-card" }, {
          default: i(() => [
            n(Ol, {
              columns: q.value,
              data: u.value.lives,
              "row-key": "liveId",
              loading: u.value.loading,
              "table-class-name": "live-list-table",
              "body-class-name": "live-list-content",
              "row-class-name": "live-list-row"
            }, el({
              "cell-liveId": i(({ row: d }) => [
                o("div", pt, [
                  o("span", ft, s(d.liveId), 1),
                  n(e(re), {
                    class: "copy-icon",
                    onClick: (F) => e(r).copyText(d.liveId, e(v)(e(l).LIVE_ID))
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-liveName": i(({ row: d }) => [
                g(s(d.liveName || "-"), 1)
              ]),
              "cell-coverUrl": i(({ row: d }) => [
                o("div", Et, [
                  o("img", {
                    src: d.coverUrl || e(Sl),
                    alt: d.liveName,
                    class: "live-list-cover-image"
                  }, null, 8, It)
                ])
              ]),
              "cell-anchor": i(({ row: d }) => [
                o("span", ht, s(d.anchor?.userId || "-"), 1)
              ]),
              "cell-createdAt": i(({ row: d }) => [
                o("span", bt, s(e(hl)(d.createdAt)), 1)
              ]),
              "cell-actions": i(({ row: d }) => [
                n(Vl, {
                  actions: A(d)
                }, null, 8, ["actions"]),
                n(_e, {
                  "slot-component": e(w)?.rowActions,
                  "slot-props": { live: d }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: i(() => [
                o("div", Ct, [
                  a[20] || (a[20] = o("div", { class: "live-list-loading-spinner" }, null, -1)),
                  o("span", yt, s(e(v)(e(l).LOADING)), 1)
                ])
              ]),
              empty: i(() => [
                u.value.searchInput ? (m(), C("div", gt, [
                  o("span", Tt, s(e(v)(e(l).NO_SEARCH_RESULTS_FOR, { keyword: u.value.searchInput })), 1)
                ])) : (m(), C("div", St, [
                  o("div", Lt, [
                    n(e(fe), { size: "40px" })
                  ]),
                  o("p", Rt, s(e(v)(e(l).EMPTY_LIVE_LIST_TITLE)), 1),
                  o("p", At, s(e(v)(e(l).EMPTY_LIVE_LIST_DESC)), 1),
                  o("div", Ot, [
                    n(c, {
                      theme: "primary",
                      shape: "round",
                      class: "empty-guide-cta",
                      onClick: a[6] || (a[6] = () => e(r).openCreateModal())
                    }, {
                      icon: i(() => [
                        n(e(fe))
                      ]),
                      default: i(() => [
                        g(" " + s(e(v)(e(l).CREATE_LIVE)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]))
              ]),
              _: 2
            }, [
              he(q.value, (d) => ({
                name: `header-${d.key}`,
                fn: i(() => [
                  g(s(d.title), 1)
                ])
              })),
              e(w)?.tableExtraColumns ? {
                name: "cell-customer-extra",
                fn: i(({ row: d }) => [
                  n(_e, {
                    "slot-component": e(w).tableExtraColumns,
                    "slot-props": { live: d }
                  }, null, 8, ["slot-component", "slot-props"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["columns", "data", "loading"])
          ]),
          _: 1
        }),
        n(Al, {
          "current-page": u.value.currentPage,
          "has-more-data": u.value.hasMoreData,
          loading: !1,
          onGoToFirstPage: a[7] || (a[7] = () => e(r).goToPage(1)),
          onPrevPage: a[8] || (a[8] = () => e(r).goToPage(u.value.currentPage - 1)),
          onNextPage: a[9] || (a[9] = () => e(r).goToPage(u.value.currentPage + 1))
        }, null, 8, ["current-page", "has-more-data"]),
        n(lt, {
          visible: u.value.isCreateModalVisible,
          "upload-enabled": K.value,
          "onUpdate:visible": a[10] || (a[10] = (d) => d ? e(r).openCreateModal() : e(r).closeCreateModal()),
          onSuccess: a[11] || (a[11] = () => e(r).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        n(dt, {
          visible: u.value.isEditModalVisible,
          live: u.value.editingLive,
          "upload-enabled": K.value,
          "extra-fields-slot": e(w)?.roomFormExtraFields,
          "onUpdate:visible": a[12] || (a[12] = (d) => {
            d || e(r).closeEditModal();
          }),
          onSuccess: a[13] || (a[13] = (d) => e(r).onLiveEdited(d))
        }, null, 8, ["visible", "live", "upload-enabled", "extra-fields-slot"]),
        n(k, {
          visible: u.value.confirmDialog.visible,
          header: u.value.confirmDialog.title,
          "confirm-btn": { content: e(v)(e(l).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": a[14] || (a[14] = (d) => {
            d || e(r).cancelDelete();
          }),
          onConfirm: e(se)
        }, {
          default: i(() => [
            o("p", null, s(u.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "onConfirm"]),
        n(k, {
          visible: u.value.obsModal.visible && !!u.value.obsModal.live,
          header: e(v)(e(l).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": a[19] || (a[19] = (d) => {
            d || e(r).closeDetail();
          })
        }, {
          footer: i(() => [
            o("div", co, [
              n(c, {
                variant: "outline",
                shape: "round",
                onClick: a[18] || (a[18] = () => e(r).closeDetail())
              }, {
                default: i(() => [
                  g(s(e(v)(e(l).CLOSE)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: i(() => [
            o("div", Vt, [
              u.value.obsModal.errorMessage ? (m(), C("div", Nt, [
                a[21] || (a[21] = o("span", { class: "live-info-error-icon" }, "!", -1)),
                o("span", null, s(u.value.obsModal.errorMessage), 1)
              ])) : x("", !0),
              o("div", Ut, [
                o("div", Mt, s(e(v)(e(l).BASIC_INFORMATION)), 1),
                o("div", kt, [
                  o("div", xt, [
                    o("span", Dt, s(e(v)(e(l).ANCHOR_ID)), 1),
                    o("div", wt, [
                      o("span", $t, s(u.value.obsModal.live?.anchor?.userId || "-"), 1),
                      u.value.obsModal.live?.anchor?.userId ? (m(), C("button", {
                        key: 0,
                        class: "live-info-copy-btn",
                        onClick: a[15] || (a[15] = (d) => e(r).copyText(u.value.obsModal.live.anchor.userId, e(v)(e(l).LIVE_HOST)))
                      }, [
                        n(e(re))
                      ])) : x("", !0)
                    ])
                  ]),
                  o("div", Ft, [
                    o("span", Bt, s(e(v)(e(l).LIVE_ID)), 1),
                    o("div", Kt, [
                      o("span", Pt, s(u.value.obsModal.live?.liveId || "-"), 1)
                    ])
                  ]),
                  o("div", Yt, [
                    o("span", Ht, s(e(v)(e(l).LIVE_TITLE)), 1),
                    o("div", Xt, [
                      o("span", Gt, s(u.value.obsModal.live?.liveName || "-"), 1)
                    ])
                  ]),
                  o("div", Wt, [
                    o("span", zt, s(e(v)(e(l).LIVE_COVER)), 1),
                    o("div", qt, [
                      o("span", Qt, s(u.value.obsModal.live?.coverUrl || "-"), 1)
                    ])
                  ])
                ])
              ]),
              u.value.obsModal.streamInfo || u.value.obsModal.actionLoading === "stream" ? (m(), C("div", jt, [
                o("div", Zt, s(e(v)(e(l).PUSH_STREAM_INFO)), 1),
                o("div", Jt, [
                  u.value.obsModal.streamInfo ? (m(), C(me, { key: 0 }, [
                    o("div", eo, [
                      o("span", lo, s(e(v)(e(l).SERVER_URL)), 1),
                      o("div", to, [
                        o("span", oo, s(u.value.obsModal.streamInfo.serverUrl), 1),
                        o("button", {
                          class: "live-info-copy-btn",
                          onClick: a[16] || (a[16] = (d) => e(r).copyText(u.value.obsModal.streamInfo.serverUrl, e(v)(e(l).SERVER_URL)))
                        }, [
                          n(e(re))
                        ])
                      ])
                    ]),
                    o("div", ao, [
                      o("span", so, s(e(v)(e(l).STREAM_KEY)), 1),
                      o("div", no, [
                        o("span", io, s(u.value.obsModal.streamInfo.streamKey), 1),
                        o("button", {
                          class: "live-info-copy-btn",
                          onClick: a[17] || (a[17] = (d) => e(r).copyText(u.value.obsModal.streamInfo.streamKey, e(v)(e(l).STREAM_KEY)))
                        }, [
                          n(e(re))
                        ])
                      ])
                    ])
                  ], 64)) : (m(), C("div", ro, [
                    o("span", uo, s(e(v)(e(l).GETTING_STREAM_INFO)), 1)
                  ]))
                ])
              ])) : x("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
});
export {
  Oo as default
};
