import { defineComponent as Ce, computed as k, ref as x, watch as we, resolveComponent as D, openBlock as v, createElementBlock as f, Fragment as W, createVNode as n, unref as e, withCtx as r, createBlock as P, createElementVNode as t, normalizeClass as re, toDisplayString as i, createTextVNode as I, createCommentVNode as O, renderList as he, shallowRef as Oe, onMounted as Ze, onBeforeUnmount as Je, createSlots as el } from "vue";
import { useRouter as ll } from "vue-router";
import { HelpCircleIcon as ye, ChevronDownIcon as Fe, ChevronRightIcon as $e, CloseIcon as Be, AddIcon as _e, CopyIcon as ue, SearchIcon as tl, RefreshIcon as ol } from "tdesign-icons-vue-next";
import { Tooltip as ge, MessagePlugin as S } from "tdesign-vue-next";
import { useUIKit as be } from "@tencentcloud/uikit-base-component-vue3";
import { as as Ve, g as te, aP as al, bc as Z, b4 as sl, aR as il, k as le, U as M, a6 as nl, C as V, b7 as rl, ac as ul, bM as dl, aq as cl, at as De, a3 as Ne, aA as vl, ay as ke, bX as pl, am as ml, aS as _l, X as fl, bf as Ue, T as Me, aK as El, af as hl } from "../../chunks/main-layout.Dt5HcQRZ.js";
import { a as Te } from "../../chunks/useAsyncAction.B32IGkkC.js";
import { c as Pe, u as Il, I as l, g as Ke, m as yl, am as gl, a as Cl, S as bl } from "../../chunks/shared-state.CsnQDWhV.js";
import { g as Tl } from "../../chunks/PreviewUrlController.DT5-ZoYh.js";
import { g as xl } from "../../chunks/columns.BMaQrQj6.js";
import { useLiveMonitorState as xe } from "../../vue.js";
import { _ as Sl } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.BkpQ2ANo.js";
import { r as He, I as Ye } from "../../chunks/image-upload-resolve.OmVEPf3w.js";
import { I as Xe } from "../../chunks/ImageUpload.Eo0DZ7YF.js";
import { _ as Ge } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as me } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.CfI37jOH.js";
import { _ as Ll, a as Rl } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
const Al = { style: { display: "inline-flex", "align-items": "center" } }, Ol = ["href"], Vl = {
  key: 0,
  class: "form-field__error-tip"
}, Dl = ["href"], Nl = { style: { display: "inline-flex", "align-items": "center" } }, kl = {
  href: "https://cloud.tencent.com/document/product/647/123012#159bb20a-d83d-4fde-a37b-1ff99632ee2c",
  target: "_blank",
  rel: "noopener noreferrer",
  style: { color: "#6ea1ff", "text-decoration": "underline" }
}, Ul = { class: "seat-template-group" }, Ml = ["title", "onClick"], wl = {
  class: "seat-template-icon",
  viewBox: "0 0 72 48",
  xmlns: "http://www.w3.org/2000/svg"
}, Fl = { class: "seat-template-label" }, $l = { class: "custom-info-section" }, Bl = {
  key: 2,
  class: "custom-info-count"
}, Pl = {
  key: 0,
  class: "custom-info-container"
}, Kl = { class: "custom-input-wrap" }, Hl = { class: "custom-input-wrap custom-value-wrap" }, Yl = {
  key: 1,
  class: "create-success-content"
}, Xl = { class: "create-success-summary" }, Gl = {
  key: 0,
  class: "create-success-section"
}, Wl = { class: "create-success-section-title" }, zl = { class: "stream-info-items" }, ql = { class: "stream-info-item" }, Ql = { class: "stream-info-label" }, jl = { class: "stream-info-value" }, Zl = { class: "stream-info-item" }, Jl = { class: "stream-info-label" }, et = { class: "stream-info-value" }, lt = { class: "dialog-footer" }, tt = { style: { "font-size": "14px", "line-height": "22px", color: "rgba(0,0,0,0.6)" } }, ot = ["href"], at = /* @__PURE__ */ Ce({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(B, { emit: _ }) {
    const J = Pe("CreateLive"), { t: o, language: oe } = be(), { opSuccess: w, opFailed: u } = Il(o), d = B, { extraFieldsSlot: ae } = d, { createLive: se } = xe(), K = _, j = k({
      get: () => d.visible,
      set: (h) => K("update:visible", h)
    }), L = (h) => te(h), A = (h) => te(h), s = (h) => {
      m.value.maxSeatCount = Number(h) || 1;
    }, m = x(Ve()), y = x([]), H = x(!1), U = x(!1), c = x(!1), z = x(""), de = x(""), Y = x(null), F = x(""), ee = x(null), ce = x(!1), X = x(!1), { loading: ve, execute: g } = Te({
      operationName: o(l.CREATE_LIVE),
      showSuccess: !1,
      action: async () => {
        let h = "";
        try {
          h = await He({
            handle: ee.value,
            hasPendingFile: ce.value,
            fallbackUrl: m.value.coverUrl,
            label: o(l.COVER_IMAGE)
          });
        } catch (R) {
          J.error("CreateLive", `Cover processing failed: ${R instanceof Error ? R.message : String(R)}`, R);
          const pe = R instanceof Ye ? R.message : `${o(l.COVER_PROCESSING_FAILED)}: ${R instanceof Error ? R.message : String(R) || o(l.UNKNOWN_ERROR)}`;
          S.error(pe);
          return;
        }
        if (y.value.some(Z)) {
          S.error(o(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        const a = ul({
          formData: m.value,
          coverUrl: h,
          customInfos: y.value,
          useObsStreaming: c.value
        }), Q = a.liveId, $ = a.anchorId;
        if (await se(a), Y.value = null, F.value = "", c.value, c.value) {
          const R = await dl({
            liveId: Q,
            anchorId: $,
            onStatusChange: (pe) => {
              z.value = pe;
            },
            messages: {
              getStreamInfoFailed: u(l.OP_GET_STREAM_INFO),
              importAccountFailed: u(l.OP_IMPORT, l.LIVE),
              addRobotFailed: u(l.OP_ADD, l.LIVE),
              pickSeatFailed: u(l.OP_PICK, l.LIVE),
              setupFailed: u(l.OP_OBS_SETUP_ACT, l.LIVE)
            }
          });
          Y.value = R.streamInfo, F.value = R.streamInfoError, de.value = R.setupError, R.configuredSuccessfully;
        }
        U.value = !0;
      },
      onError: (h) => {
        rl(h) && (X.value = !0);
      }
    }), E = k(() => te(m.value.anchorId)), b = k(() => al(oe.value)), N = k(() => te(m.value.liveName));
    k(() => y.value.filter((h) => h.key.trim()).length);
    const T = k(() => y.value.some(Z));
    we(() => m.value.anchorId, () => {
      X.value && (X.value = !1);
    });
    const G = k(() => {
      const h = sl(m.value.seatTemplate), a = o(h?.descKey || "");
      return h?.orientation === "landscape" ? `${a}，${o(l.LANDSCAPE_BROADCASTING_HINT)}` : a;
    }), q = k(() => il(m.value.seatTemplate)), C = k(() => c.value ? z.value === "error" ? `OBS 配置失败：${de.value}` : Y.value ? "OBS 已配置完成，可直接复制下方推流信息。" : F.value ? `OBS 已配置完成，但推流信息生成失败：${F.value}` : "OBS 已配置完成。" : ""), fe = k(() => z.value === "error" || !!F.value), ie = (h) => {
      ce.value = !!h;
    }, Se = async (h, a) => {
      try {
        await cl(h), S.success(w(l.COPY, a));
      } catch (Q) {
        const $ = Q, R = $.ErrorInfo || ($ instanceof Error ? $.message : String($)) || o(l.UNKNOWN_ERROR);
        J.error("CreateLive", `Copy failed: ${R}`, Q), S.error(u(l.COPY, null, R));
      }
    }, We = () => {
      if (y.value.length >= V.maxCount) {
        S.error(o(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: V.maxCount }));
        return;
      }
      y.value.push({ key: "", value: "" });
    }, ze = (h) => {
      y.value.splice(h, 1);
    }, Le = () => {
      m.value = Ve(), y.value = [], H.value = !1, U.value = !1, c.value = !1, z.value = "", de.value = "", Y.value = null, F.value = "", ce.value = !1, X.value = !1, ee.value?.reset();
    }, Re = () => {
      Le(), K("update:visible", !1);
    }, qe = async () => {
      if (!m.value.anchorId.trim()) {
        S.error(o(l.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (E.value > le) {
        S.error(o(l.MAX_BYTES_WITH_CURRENT, { field: o(l.ANCHOR_ID), max: le, current: E.value }));
        return;
      }
      if (N.value > M) {
        S.error(o(l.MAX_BYTES_WITH_CURRENT, { field: o(l.LIVE_TITLE), max: M, current: N.value }));
        return;
      }
      if (y.value.some(Z)) {
        S.error(o(l.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      z.value = "", await g();
    }, Qe = () => {
      Le(), K("success"), K("update:visible", !1);
    };
    return (h, a) => {
      const Q = D("t-input"), $ = D("t-form-item"), R = D("t-input-number"), pe = D("t-checkbox"), ne = D("t-button"), je = D("t-form"), Ae = D("t-dialog");
      return v(), f(W, null, [
        n(Ae, {
          visible: j.value,
          "onUpdate:visible": a[7] || (a[7] = (p) => j.value = p),
          header: U.value ? e(w)(e(l).CREATE, e(l).LIVE) : e(o)(e(l).CREATE_LIVE),
          width: e(oe)?.startsWith("en") ? 680 : 620,
          placement: "center",
          class: "create-live-modal",
          onClose: Re
        }, {
          footer: r(() => [
            t("div", lt, [
              U.value ? (v(), P(ne, {
                key: 1,
                theme: "primary",
                shape: "round",
                onClick: Qe
              }, {
                default: r(() => [
                  I(i(e(o)(e(l).COMPLETE)), 1)
                ]),
                _: 1
              })) : (v(), f(W, { key: 0 }, [
                n(ne, {
                  variant: "outline",
                  shape: "round",
                  onClick: Re
                }, {
                  default: r(() => [
                    I(i(e(o)(e(l).CANCEL)), 1)
                  ]),
                  _: 1
                }),
                n(ne, {
                  theme: "primary",
                  shape: "round",
                  loading: e(ve),
                  disabled: e(ve) || !m.value.anchorId.trim() || ee.value?.isValidating || ee.value?.hasUrlError || T.value,
                  onClick: qe
                }, {
                  default: r(() => [
                    I(i(e(ve) ? e(o)(e(l).CREATING) : e(o)(e(l).CREATE)), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64))
            ])
          ]),
          default: r(() => [
            U.value ? (v(), f("div", Yl, [
              t("div", Xl, [
                a[34] || (a[34] = t("div", { class: "create-success-icon" }, [
                  t("svg", {
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48",
                    fill: "none"
                  }, [
                    t("circle", {
                      cx: "24",
                      cy: "24",
                      r: "24",
                      fill: "#E8F5E9"
                    }),
                    t("path", {
                      d: "M14 24L21 31L34 18",
                      stroke: "#07C160",
                      "stroke-width": "3",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ])
                ], -1)),
                t("h3", null, i(e(w)(e(l).LABEL_CREATED, e(l).LIVE)), 1),
                C.value ? (v(), f("p", {
                  key: 0,
                  class: re(["create-success-description", { "is-error": fe.value }])
                }, i(C.value), 3)) : O("", !0)
              ]),
              Y.value ? (v(), f("div", Gl, [
                t("div", Wl, i(e(o)(e(l).STREAM_INFO)), 1),
                t("div", zl, [
                  t("div", ql, [
                    t("div", Ql, [
                      t("span", null, i(e(o)(e(l).SERVER_URL)), 1),
                      t("button", {
                        class: "action-link",
                        onClick: a[5] || (a[5] = (p) => Se(Y.value.serverUrl, e(o)(e(l).SERVER_URL)))
                      }, [
                        n(e(ue)),
                        I(" " + i(e(o)(e(l).COPY)), 1)
                      ])
                    ]),
                    t("code", jl, i(Y.value.serverUrl), 1)
                  ]),
                  t("div", Zl, [
                    t("div", Jl, [
                      t("span", null, i(e(o)(e(l).STREAM_KEY)), 1),
                      t("button", {
                        class: "action-link",
                        onClick: a[6] || (a[6] = (p) => Se(Y.value.streamKey, e(o)(e(l).STREAM_KEY)))
                      }, [
                        n(e(ue)),
                        I(" " + i(e(o)(e(l).COPY)), 1)
                      ])
                    ]),
                    t("code", et, i(Y.value.streamKey), 1)
                  ])
                ])
              ])) : O("", !0)
            ])) : (v(), P(je, {
              key: 0,
              class: "create-live-form",
              "label-width": e(Ke)(100),
              colon: !1
            }, {
              default: r(() => [
                n($, { "required-mark": !0 }, {
                  label: r(() => [
                    t("span", Al, [
                      I(i(e(o)(e(l).LIVE_HOST)) + " ", 1),
                      n(e(ge), { placement: "top" }, {
                        content: r(() => [
                          t("span", null, [
                            I(i(e(o)(e(l).ANCHOR_ID_HELP_TEXT)) + " ", 1),
                            t("a", {
                              href: b.value,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              style: { color: "#6ea1ff", "text-decoration": "underline" }
                            }, i(e(o)(e(l).VIEW_DETAILS)), 9, Ol)
                          ])
                        ]),
                        default: r(() => [
                          n(e(ye), { style: { "margin-left": "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  default: r(() => [
                    n(Q, {
                      modelValue: m.value.anchorId,
                      "onUpdate:modelValue": a[0] || (a[0] = (p) => m.value.anchorId = p),
                      placeholder: e(o)(e(l).ENTER_ANCHOR_ID),
                      status: X.value || E.value > e(le) ? "error" : "default",
                      tips: !X.value && E.value > e(le) ? e(o)(e(l).MAX_BYTES, { field: e(o)(e(l).ANCHOR_ID), max: e(le) }) : ""
                    }, {
                      suffix: r(() => [
                        t("span", {
                          class: re(["input-suffix-count", { "byte-overflow": E.value > e(le) }])
                        }, i(E.value) + "/" + i(e(le)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"]),
                    X.value ? (v(), f("div", Vl, [
                      I(i(e(o)(e(l).ANCHOR_ID_NOT_FOUND_TIP)) + " ", 1),
                      t("a", {
                        href: b.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: "#1C66E5" }
                      }, i(e(o)(e(l).VIEW_DETAILS)), 9, Dl)
                    ])) : O("", !0)
                  ]),
                  _: 1
                }),
                n($, {
                  label: e(o)(e(l).LIVE_TITLE)
                }, {
                  default: r(() => [
                    n(Q, {
                      modelValue: m.value.liveName,
                      "onUpdate:modelValue": a[1] || (a[1] = (p) => m.value.liveName = p),
                      placeholder: e(o)(e(l).ENTER_LIVE_TITLE),
                      status: N.value > e(M) ? "error" : "default",
                      tips: N.value > e(M) ? e(o)(e(l).MAX_BYTES, { field: e(o)(e(l).LIVE_TITLE), max: e(M) }) : ""
                    }, {
                      suffix: r(() => [
                        t("span", {
                          class: re(["input-suffix-count", { "byte-overflow": N.value > e(M) }])
                        }, i(N.value) + "/" + i(e(M)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                n($, null, {
                  label: r(() => [
                    t("span", Nl, [
                      I(i(e(o)(e(l).COVER_IMAGE)) + " ", 1),
                      B.uploadEnabled ? O("", !0) : (v(), P(e(ge), {
                        key: 0,
                        placement: "top"
                      }, {
                        content: r(() => [
                          t("span", null, [
                            I(i(e(o)(e(l).UPLOAD_NOT_CONFIGURED_HINT)) + " ", 1),
                            t("a", kl, i(e(o)(e(l).VIEW_DETAILS)), 1)
                          ])
                        ]),
                        default: r(() => [
                          n(e(ye), {
                            size: "14px",
                            style: { "margin-left": "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" }
                          })
                        ]),
                        _: 1
                      }))
                    ])
                  ]),
                  default: r(() => [
                    n(Xe, {
                      ref_key: "coverUploadRef",
                      ref: ee,
                      modelValue: m.value.coverUrl,
                      "onUpdate:modelValue": a[2] || (a[2] = (p) => m.value.coverUrl = p),
                      type: "cover",
                      "upload-enabled": B.uploadEnabled,
                      "crop-enabled": !0,
                      "aspect-ratio": q.value,
                      placeholder: e(o)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                      "preview-height": 140,
                      "max-bytes": 200,
                      "defer-upload": B.uploadEnabled,
                      onFileReady: ie
                    }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                  ]),
                  _: 1
                }),
                n($, {
                  label: e(o)(e(l).LAYOUT_TEMPLATE),
                  "required-mark": !0,
                  help: G.value
                }, {
                  default: r(() => [
                    t("div", Ul, [
                      (v(!0), f(W, null, he(e(nl), (p) => (v(), f("button", {
                        key: p.value,
                        type: "button",
                        class: re(["seat-template-btn", { "seat-template-btn--selected": m.value.seatTemplate === p.value, "seat-template-btn--landscape": p.value === "VideoLandscape4Seat" }]),
                        title: e(o)(p.descKey),
                        onClick: (Ie) => m.value.seatTemplate = p.value
                      }, [
                        (v(), f("svg", wl, [
                          p.value === "VideoDynamicGrid9Seats" ? (v(), f(W, { key: 0 }, [
                            a[10] || (a[10] = t("rect", {
                              x: "14",
                              y: "4",
                              width: "18",
                              height: "18",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[11] || (a[11] = t("rect", {
                              x: "40",
                              y: "4",
                              width: "18",
                              height: "18",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[12] || (a[12] = t("rect", {
                              x: "14",
                              y: "24",
                              width: "18",
                              height: "18",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[13] || (a[13] = t("rect", {
                              x: "40",
                              y: "24",
                              width: "18",
                              height: "18",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1))
                          ], 64)) : p.value === "VideoFixedGrid9Seats" ? (v(), f(W, { key: 1 }, [
                            a[14] || (a[14] = t("rect", {
                              x: "15",
                              y: "4",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[15] || (a[15] = t("rect", {
                              x: "30",
                              y: "4",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[16] || (a[16] = t("rect", {
                              x: "45",
                              y: "4",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[17] || (a[17] = t("rect", {
                              x: "15",
                              y: "17",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[18] || (a[18] = t("rect", {
                              x: "30",
                              y: "17",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[19] || (a[19] = t("rect", {
                              x: "45",
                              y: "17",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[20] || (a[20] = t("rect", {
                              x: "15",
                              y: "30",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[21] || (a[21] = t("rect", {
                              x: "30",
                              y: "30",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[22] || (a[22] = t("rect", {
                              x: "45",
                              y: "30",
                              width: "12",
                              height: "10",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1))
                          ], 64)) : p.value === "VideoDynamicFloat7Seats" ? (v(), f(W, { key: 2 }, [
                            a[23] || (a[23] = t("rect", {
                              x: "18",
                              y: "2",
                              width: "36",
                              height: "44",
                              rx: "3",
                              fill: "#F5F7FA",
                              stroke: "#DCE0E8",
                              "stroke-width": "1"
                            }, null, -1)),
                            a[24] || (a[24] = t("rect", {
                              x: "28",
                              y: "16",
                              width: "16",
                              height: "16",
                              rx: "3",
                              fill: "#C8D6E5",
                              opacity: "0.7"
                            }, null, -1))
                          ], 64)) : p.value === "VideoFixedFloat7Seats" ? (v(), f(W, { key: 3 }, [
                            a[25] || (a[25] = t("rect", {
                              x: "9",
                              y: "2",
                              width: "36",
                              height: "44",
                              rx: "3",
                              fill: "#F5F7FA",
                              stroke: "#DCE0E8",
                              "stroke-width": "1"
                            }, null, -1)),
                            a[26] || (a[26] = t("rect", {
                              x: "49",
                              y: "3",
                              width: "14",
                              height: "10",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[27] || (a[27] = t("rect", {
                              x: "49",
                              y: "15",
                              width: "14",
                              height: "10",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[28] || (a[28] = t("rect", {
                              x: "49",
                              y: "27",
                              width: "14",
                              height: "10",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[29] || (a[29] = t("rect", {
                              x: "49",
                              y: "39",
                              width: "14",
                              height: "10",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1))
                          ], 64)) : p.value === "VideoLandscape4Seat" ? (v(), f(W, { key: 4 }, [
                            a[30] || (a[30] = t("rect", {
                              x: "2",
                              y: "2",
                              width: "68",
                              height: "44",
                              rx: "4",
                              fill: "#F5F7FA",
                              stroke: "#DCE0E8",
                              "stroke-width": "1"
                            }, null, -1)),
                            a[31] || (a[31] = t("rect", {
                              x: "52",
                              y: "4",
                              width: "16",
                              height: "12",
                              rx: "2",
                              fill: "#C8D6E5",
                              opacity: "0.7"
                            }, null, -1)),
                            a[32] || (a[32] = t("rect", {
                              x: "5",
                              y: "27",
                              width: "9",
                              height: "8",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1)),
                            a[33] || (a[33] = t("rect", {
                              x: "5",
                              y: "36",
                              width: "9",
                              height: "8",
                              rx: "1.5",
                              fill: "#C8D6E5",
                              opacity: "0.6"
                            }, null, -1))
                          ], 64)) : O("", !0)
                        ])),
                        t("span", Fl, i(e(o)(p.labelKey)), 1)
                      ], 10, Ml))), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["label", "help"]),
                m.value.seatTemplate === "AudioSalon" || m.value.seatTemplate === "Karaoke" ? (v(), P($, {
                  key: 0,
                  label: e(o)(e(l).MAX_SEATS),
                  help: e(o)(e(l).MAX_SEATS_HELP)
                }, {
                  default: r(() => [
                    n(R, {
                      "model-value": m.value.maxSeatCount,
                      "onUpdate:modelValue": s,
                      min: 1,
                      max: 16,
                      status: m.value.maxSeatCount < 1 || m.value.maxSeatCount > 16 ? "error" : "default",
                      tips: m.value.maxSeatCount < 1 || m.value.maxSeatCount > 16 ? e(o)(e(l).SEAT_COUNT_RANGE_1_16) : "",
                      placeholder: e(o)(e(l).ENTER_MAX_SEAT_COUNT),
                      theme: "normal",
                      style: { width: "100%" }
                    }, null, 8, ["model-value", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label", "help"])) : O("", !0),
                n($, {
                  label: e(o)(e(l).STREAMING_METHOD),
                  help: e(o)(e(l).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
                }, {
                  default: r(() => [
                    n(pe, {
                      modelValue: c.value,
                      "onUpdate:modelValue": a[3] || (a[3] = (p) => c.value = p)
                    }, {
                      default: r(() => [
                        I(i(e(o)(e(l).USE_OBS_STREAMING)), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }, 8, ["label", "help"]),
                t("div", $l, [
                  t("div", {
                    class: "custom-info-toggle",
                    onClick: a[4] || (a[4] = (p) => H.value = !H.value)
                  }, [
                    H.value ? (v(), P(e(Fe), {
                      key: 0,
                      size: "16"
                    })) : (v(), P(e($e), {
                      key: 1,
                      size: "16"
                    })),
                    t("span", null, i(e(o)(e(l).CUSTOM_INFORMATION)), 1),
                    y.value.length > 0 ? (v(), f("span", Bl, i(y.value.length), 1)) : O("", !0)
                  ]),
                  H.value ? (v(), f("div", Pl, [
                    (v(!0), f(W, null, he(y.value, (p, Ie) => (v(), f("div", {
                      key: Ie,
                      class: "custom-info-row"
                    }, [
                      t("div", Kl, [
                        n(Q, {
                          modelValue: p.key,
                          "onUpdate:modelValue": (Ee) => p.key = Ee,
                          placeholder: e(o)(e(l).ENTER_KEY),
                          status: L(p.key) > e(V).maxKeyBytes || e(Z)(p) ? "error" : "default",
                          tips: L(p.key) > e(V).maxKeyBytes ? e(o)(e(l).MAX_BYTES, { field: "Key", max: e(V).maxKeyBytes }) : e(Z)(p) ? e(o)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                      ]),
                      t("div", Hl, [
                        n(Q, {
                          modelValue: p.value,
                          "onUpdate:modelValue": (Ee) => p.value = Ee,
                          placeholder: e(o)(e(l).ENTER_VALUE),
                          status: A(p.value) > e(V).maxValueBytes ? "error" : "default",
                          tips: A(p.value) > e(V).maxValueBytes ? e(o)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                      ]),
                      n(ne, {
                        variant: "text",
                        shape: "circle",
                        onClick: (Ee) => ze(Ie)
                      }, {
                        default: r(() => [
                          n(e(Be))
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]))), 128)),
                    y.value.length < e(V).maxCount ? (v(), P(ne, {
                      key: 0,
                      style: { width: "80px" },
                      variant: "text",
                      shape: "round",
                      onClick: We,
                      theme: "primary"
                    }, {
                      icon: r(() => [
                        n(e(_e))
                      ]),
                      default: r(() => [
                        I(" " + i(e(o)(e(l).ADD)), 1)
                      ]),
                      _: 1
                    })) : O("", !0)
                  ])) : O("", !0)
                ])
              ]),
              _: 1
            }, 8, ["label-width"]))
          ]),
          _: 1
        }, 8, ["visible", "header", "width"]),
        n(Ae, {
          visible: h.showAnchorIdErrorDialog,
          "onUpdate:visible": a[9] || (a[9] = (p) => h.showAnchorIdErrorDialog = p),
          header: e(o)(e(l).ANCHOR_ID_NOT_FOUND),
          width: 420,
          placement: "center",
          class: "anchor-id-error-dialog"
        }, {
          footer: r(() => [
            n(ne, {
              theme: "primary",
              shape: "round",
              onClick: a[8] || (a[8] = (p) => h.showAnchorIdErrorDialog = !1)
            }, {
              default: r(() => [
                I(i(e(o)(e(l).CLOSE)), 1)
              ]),
              _: 1
            })
          ]),
          default: r(() => [
            t("div", tt, [
              I(i(e(o)(e(l).ANCHOR_ID_NOT_FOUND_DESC)) + " ", 1),
              t("a", {
                href: b.value,
                target: "_blank",
                rel: "noopener noreferrer",
                style: { color: "#1C66E5" }
              }, i(e(o)(e(l).HERE)), 9, ot)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ], 64);
    };
  }
}), st = /* @__PURE__ */ Ge(at, [["__scopeId", "data-v-134d4927"]]), it = {
  key: 0,
  class: "edit-live-error"
}, nt = { style: { display: "inline-flex", "align-items": "center" } }, rt = {
  href: "https://cloud.tencent.com/document/product/647/123012#159bb20a-d83d-4fde-a37b-1ff99632ee2c",
  target: "_blank",
  rel: "noopener noreferrer",
  style: { color: "#6ea1ff", "text-decoration": "underline" }
}, ut = { class: "custom-info-section" }, dt = {
  key: 2,
  class: "custom-info-count"
}, ct = {
  key: 0,
  class: "custom-info-container"
}, vt = { class: "custom-input-wrap" }, pt = { class: "custom-input-wrap custom-value-wrap" }, mt = { class: "dialog-footer" }, _t = /* @__PURE__ */ Ce({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    live: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(B, { emit: _ }) {
    const J = Pe("EditLive"), { t: o } = be(), { fetchLiveDetail: oe, updateLive: w } = xe(), u = B, d = k(() => u.live?.liveId || u.live?.id || ""), ae = _, se = k({
      get: () => u.visible,
      set: (g) => ae("update:visible", g)
    }), K = (g) => te(g), j = (g) => te(g), L = x(De()), A = x(""), s = x([]), m = x(!1), y = x([]), H = x(Ne), U = x(null), c = x(!1), { loading: z, execute: de } = Te({
      toast: { action: l.EDIT, entity: l.LIVE },
      action: async (g) => {
        const E = u.live?.liveId || u.live?.id || "";
        return w({
          liveId: E,
          ...g
        });
      },
      showSuccess: !0,
      onSuccess: () => {
        ae("success", {
          liveName: L.value.liveName.trim(),
          coverUrl: L.value.coverUrl
        }), X();
      }
    }), Y = (g) => {
      c.value = !!g;
    }, F = k(() => te(L.value.liveName));
    k(() => s.value.filter((g) => g.key.trim()).length), we([() => u.live?.liveId || u.live?.id, () => u.visible], async ([g, E]) => {
      const b = u.live;
      if (b && E) {
        L.value = {
          liveName: b.liveName || "",
          coverUrl: b.coverUrl || ""
        }, b.coverUrl ? H.value = await vl(b.coverUrl) : H.value = Ne;
        const N = b.liveId || b.id || "";
        try {
          const T = await oe(N), G = ke(T?.customInfo);
          s.value = G, m.value = G.length > 0, y.value = G.map((q) => q.key);
        } catch (T) {
          T instanceof yl && (A.value = gl(T.code ?? 0, "", o(l.LIVE_NOT_FOUND)));
          const G = b.customInfo, q = ke(G);
          s.value = q, m.value = q.length > 0, y.value = q.map((C) => C.key);
        }
      }
    }, { immediate: !0 });
    const ee = () => {
      if (s.value.length >= V.maxCount) {
        S.error(o(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: V.maxCount }));
        return;
      }
      s.value.push({ key: "", value: "" });
    }, ce = (g) => {
      s.value.splice(g, 1);
    }, X = () => {
      A.value = "", s.value = [], m.value = !1, y.value = [], c.value = !1, U.value?.reset(), L.value = De(), ae("update:visible", !1);
    }, ve = async () => {
      if (u.live) {
        if (!L.value.liveName.trim()) {
          S.error(o(l.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (F.value > M) {
          S.error(o(l.MAX_BYTES_WITH_CURRENT, { field: o(l.LIVE_TITLE), max: M, current: F.value }));
          return;
        }
        if (s.value.some(Z)) {
          S.error(o(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let g = "";
          try {
            g = await He({
              handle: U.value,
              hasPendingFile: c.value,
              fallbackUrl: L.value.coverUrl,
              label: o(l.COVER_IMAGE)
            });
          } catch (T) {
            J.error("EditLive", `Cover processing failed: ${T instanceof Error ? T.message : String(T)}`, T);
            const G = T instanceof Ye ? T.message : `${o(l.COVER_PROCESSING_FAILED)}: ${T instanceof Error ? T.message : String(T) || o(l.UNKNOWN_ERROR)}`;
            S.error(G);
            return;
          }
          const E = pl(s.value);
          if (E) {
            E.type === "key-too-long" ? S.error(o(l.MAX_BYTES, { field: `Key ${E.key}`, max: E.max })) : E.type === "value-too-long" ? S.error(o(l.KEY_VALUE_EXCEEDS_2KB, { key: E.key })) : E.type === "max-count" ? S.error(o(l.CUSTOM_INFO_MAX_COUNT, { max: E.max })) : S.error(o(l.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const b = ml(s.value), N = _l(y.value, b);
          await de({
            liveName: L.value.liveName.trim(),
            coverUrl: g || void 0,
            customInfo: Object.keys(b).length > 0 ? b : void 0,
            deleteKeys: N.length > 0 ? N : void 0
          });
        } catch (g) {
          J.error("EditLiveModal", "Update failed:", g);
        }
      }
    };
    return (g, E) => {
      const b = D("t-input"), N = D("t-form-item"), T = D("t-button"), G = D("t-form"), q = D("t-dialog");
      return v(), P(q, {
        visible: se.value,
        "onUpdate:visible": E[3] || (E[3] = (C) => se.value = C),
        header: e(o)(e(l).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: X
      }, {
        footer: r(() => [
          t("div", mt, [
            n(T, {
              variant: "outline",
              shape: "round",
              onClick: X
            }, {
              default: r(() => [
                I(i(e(o)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            n(T, {
              theme: "primary",
              shape: "round",
              loading: e(z),
              disabled: e(z) || !L.value.liveName.trim() || U.value?.isValidating || U.value?.hasUrlError,
              onClick: ve
            }, {
              default: r(() => [
                I(i(e(z) ? e(o)(e(l).SAVING) : e(o)(e(l).SAVE)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        default: r(() => [
          n(G, {
            class: "edit-live-form",
            "label-width": e(Ke)(100),
            colon: !1
          }, {
            default: r(() => [
              A.value ? (v(), f("div", it, [
                E[4] || (E[4] = t("span", { class: "edit-live-error-icon" }, "!", -1)),
                t("span", null, i(A.value), 1)
              ])) : O("", !0),
              n(N, {
                label: e(o)(e(l).LIVE_ID)
              }, {
                default: r(() => [
                  n(b, {
                    value: d.value,
                    disabled: "",
                    readonly: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(N, {
                label: e(o)(e(l).LIVE_TITLE),
                "required-mark": !0
              }, {
                default: r(() => [
                  n(b, {
                    modelValue: L.value.liveName,
                    "onUpdate:modelValue": E[0] || (E[0] = (C) => L.value.liveName = C),
                    placeholder: e(o)(e(l).ENTER_LIVE_TITLE),
                    status: F.value > e(M) ? "error" : "default",
                    tips: F.value > e(M) ? e(o)(e(l).MAX_BYTES, { field: e(o)(e(l).LIVE_TITLE), max: e(M) }) : ""
                  }, {
                    suffix: r(() => [
                      t("span", {
                        class: re(["input-suffix-count", { "byte-overflow": F.value > e(M) }])
                      }, i(F.value) + "/" + i(e(M)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(N, null, {
                label: r(() => [
                  t("span", nt, [
                    I(i(e(o)(e(l).COVER_IMAGE)) + " ", 1),
                    B.uploadEnabled ? O("", !0) : (v(), P(e(ge), {
                      key: 0,
                      placement: "top"
                    }, {
                      content: r(() => [
                        t("span", null, [
                          I(i(e(o)(e(l).UPLOAD_NOT_CONFIGURED_HINT)) + " ", 1),
                          t("a", rt, i(e(o)(e(l).VIEW_DETAILS)), 1)
                        ])
                      ]),
                      default: r(() => [
                        n(e(ye), {
                          size: "14px",
                          style: { "margin-left": "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" }
                        })
                      ]),
                      _: 1
                    }))
                  ])
                ]),
                default: r(() => [
                  n(Xe, {
                    ref_key: "coverUploadRef",
                    ref: U,
                    modelValue: L.value.coverUrl,
                    "onUpdate:modelValue": E[1] || (E[1] = (C) => L.value.coverUrl = C),
                    type: "cover",
                    "upload-enabled": B.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": H.value,
                    placeholder: e(o)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": B.uploadEnabled,
                    onFileReady: Y
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }),
              n(me, {
                "slot-component": B.extraFieldsSlot,
                "slot-props": { mode: "edit", live: B.live, formData: { ...L.value }, customInfos: [...s.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              t("div", ut, [
                t("div", {
                  class: "custom-info-toggle",
                  onClick: E[2] || (E[2] = (C) => m.value = !m.value)
                }, [
                  m.value ? (v(), P(e(Fe), {
                    key: 0,
                    size: "16"
                  })) : (v(), P(e($e), {
                    key: 1,
                    size: "16"
                  })),
                  t("span", null, i(e(o)(e(l).CUSTOM_INFORMATION)), 1),
                  s.value.length > 0 ? (v(), f("span", dt, i(s.value.length), 1)) : O("", !0)
                ]),
                m.value ? (v(), f("div", ct, [
                  (v(!0), f(W, null, he(s.value, (C, fe) => (v(), f("div", {
                    key: fe,
                    class: "custom-info-row"
                  }, [
                    t("div", vt, [
                      n(b, {
                        modelValue: C.key,
                        "onUpdate:modelValue": (ie) => C.key = ie,
                        placeholder: e(o)(e(l).ENTER_KEY),
                        status: K(C.key) > e(V).maxKeyBytes || e(Z)(C) ? "error" : "default",
                        tips: K(C.key) > e(V).maxKeyBytes ? e(o)(e(l).MAX_BYTES, { field: "Key", max: e(V).maxKeyBytes }) : e(Z)(C) ? e(o)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    t("div", pt, [
                      n(b, {
                        modelValue: C.value,
                        "onUpdate:modelValue": (ie) => C.value = ie,
                        placeholder: e(o)(e(l).ENTER_VALUE),
                        status: j(C.value) > e(V).maxValueBytes ? "error" : "default",
                        tips: j(C.value) > e(V).maxValueBytes ? e(o)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    n(T, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ie) => ce(fe)
                    }, {
                      default: r(() => [
                        n(e(Be))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  s.value.length < e(V).maxCount ? (v(), P(T, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: ee,
                    theme: "primary"
                  }, {
                    icon: r(() => [
                      n(e(_e))
                    ]),
                    default: r(() => [
                      I(" " + i(e(o)(e(l).ADD)), 1)
                    ]),
                    _: 1
                  })) : O("", !0)
                ])) : O("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), ft = /* @__PURE__ */ Ge(_t, [["__scopeId", "data-v-2491c474"]]), Et = { class: "live-list-page" }, ht = { class: "live-list-header" }, It = { class: "live-list-title" }, yt = { class: "header-actions" }, gt = { class: "live-list-id-cell" }, Ct = { class: "live-list-id-text" }, bt = { class: "live-list-cover-cell" }, Tt = ["src", "alt"], xt = { class: "live-list-text" }, St = { class: "live-list-text" }, Lt = { class: "live-list-loading-container" }, Rt = { class: "live-list-loading-text" }, At = {
  key: 0,
  class: "live-list-empty-container"
}, Ot = { class: "live-list-empty-text" }, Vt = {
  key: 1,
  class: "live-list-empty-container"
}, Dt = { class: "empty-guide-icon" }, Nt = { class: "empty-guide-title" }, kt = { class: "empty-guide-desc" }, Ut = { class: "empty-guide-actions" }, Mt = { class: "live-info-form" }, wt = {
  key: 0,
  class: "live-info-error"
}, Ft = { class: "live-info-section" }, $t = { class: "live-info-section-title" }, Bt = { class: "live-info-card" }, Pt = { class: "live-info-row" }, Kt = { class: "live-info-label" }, Ht = { class: "live-info-value-area" }, Yt = { class: "live-info-value" }, Xt = { class: "live-info-row" }, Gt = { class: "live-info-label" }, Wt = { class: "live-info-value-area" }, zt = { class: "live-info-value" }, qt = { class: "live-info-row" }, Qt = { class: "live-info-label" }, jt = { class: "live-info-value-area" }, Zt = { class: "live-info-value" }, Jt = { class: "live-info-row" }, eo = { class: "live-info-label" }, lo = { class: "live-info-value-area" }, to = { class: "live-info-value live-info-value-url" }, oo = {
  key: 1,
  class: "live-info-section"
}, ao = { class: "live-info-section-title" }, so = { class: "live-info-card" }, io = { class: "live-info-row" }, no = { class: "live-info-label" }, ro = { class: "live-info-value-area" }, uo = { class: "live-info-value live-info-value-url" }, co = { class: "live-info-row" }, vo = { class: "live-info-label" }, po = { class: "live-info-value-area" }, mo = { class: "live-info-value live-info-value-url" }, _o = {
  key: 1,
  class: "live-info-row"
}, fo = {
  class: "live-info-label",
  style: { width: "auto" }
}, Eo = { class: "dialog-footer" }, Uo = /* @__PURE__ */ Ce({
  __name: "live-list",
  setup(B) {
    const { t: _ } = be(), J = ll(), { endLive: o, fetchLiveDetail: oe } = xe(), w = Cl().components?.liveList, u = new fl({
      endLive: o,
      onEnterLive: (A) => {
        J.push({ path: `/live-control/${A}`, query: { from: "live-list" } });
      },
      t: _,
      toast: {
        success: (A) => S.success(A),
        error: (A) => S.error(A)
      },
      fetchLiveDetail: oe
    }), d = Oe(u.getState()), ae = u.subscribe(() => {
      d.value = u.getState();
    }), { execute: se } = Te({
      toast: { action: l.DISSOLVE, entity: l.LIVE },
      operationName: _(l.DISSOLVE),
      action: async () => {
        await u.confirmDelete();
      }
    }), K = Oe(!1);
    Ze(async () => {
      K.value = await Tl(), await u.init();
    }), Je(() => {
      ae(), u.dispose();
    });
    const j = k(() => xl({ hasExtraColumn: !!w?.tableExtraColumns }).map((s) => ({
      ...s,
      title: s.i18nKey ? _(s.i18nKey) : ""
    }))), L = (A) => hl({
      live: A,
      t: _,
      onEnter: (s) => u.enterLive(s),
      onDetail: (s) => u.showDetail(s),
      onEdit: (s) => u.openEditModal(s),
      onDelete: (s) => u.requestDelete(s)
    });
    return (A, s) => {
      const m = D("t-input"), y = D("t-button"), H = D("t-card"), U = D("t-dialog");
      return v(), f("div", Et, [
        t("div", ht, [
          t("h1", It, i(e(_)(e(l).LIVE_LIST)), 1),
          n(me, {
            "slot-component": e(w)?.beforeToolbar,
            "slot-props": { lives: d.value.lives, loading: d.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          t("div", yt, [
            n(m, {
              "model-value": d.value.searchInput,
              placeholder: e(_)(e(l).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: e(Ue)(d.value.searchInput, e(Me)) ? "error" : "default",
              tips: e(Ue)(d.value.searchInput, e(Me)) ? e(_)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": s[1] || (s[1] = (c) => e(u).setSearchInput(String(c ?? ""))),
              onEnter: s[2] || (s[2] = () => e(u).search()),
              onClear: s[3] || (s[3] = () => e(u).clearSearch())
            }, {
              suffixIcon: r(() => [
                n(e(tl), {
                  style: { cursor: "pointer" },
                  onClick: s[0] || (s[0] = () => e(u).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            n(y, {
              variant: "outline",
              shape: "round",
              disabled: d.value.refreshing || d.value.loading,
              onClick: s[4] || (s[4] = () => e(u).refresh())
            }, {
              icon: r(() => [
                n(e(ol), {
                  class: re({ spinning: d.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: r(() => [
                I(" " + i(e(_)(e(l).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            n(y, {
              theme: "primary",
              shape: "round",
              onClick: s[5] || (s[5] = () => e(u).openCreateModal())
            }, {
              icon: r(() => [
                n(e(_e))
              ]),
              default: r(() => [
                I(" " + i(e(_)(e(l).CREATE_LIVE)), 1)
              ]),
              _: 1
            })
          ]),
          n(me, {
            "slot-component": e(w)?.afterToolbar,
            "slot-props": { lives: d.value.lives, loading: d.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        n(H, { class: "live-list-card" }, {
          default: r(() => [
            n(Ll, {
              columns: j.value,
              data: d.value.lives,
              "row-key": "liveId",
              loading: d.value.loading,
              "table-class-name": "live-list-table",
              "body-class-name": "live-list-content",
              "row-class-name": "live-list-row"
            }, el({
              "cell-liveId": r(({ row: c }) => [
                t("div", gt, [
                  t("span", Ct, i(c.liveId), 1),
                  n(e(ue), {
                    class: "copy-icon",
                    onClick: (z) => e(u).copyText(c.liveId, e(_)(e(l).LIVE_ID))
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-liveName": r(({ row: c }) => [
                I(i(c.liveName || "-"), 1)
              ]),
              "cell-coverUrl": r(({ row: c }) => [
                t("div", bt, [
                  t("img", {
                    src: c.coverUrl || e(bl),
                    alt: c.liveName,
                    class: "live-list-cover-image"
                  }, null, 8, Tt)
                ])
              ]),
              "cell-anchor": r(({ row: c }) => [
                t("span", xt, i(c.anchor?.userId || "-"), 1)
              ]),
              "cell-createdAt": r(({ row: c }) => [
                t("span", St, i(e(El)(c.createdAt)), 1)
              ]),
              "cell-actions": r(({ row: c }) => [
                n(Rl, {
                  actions: L(c)
                }, null, 8, ["actions"]),
                n(me, {
                  "slot-component": e(w)?.rowActions,
                  "slot-props": { live: c }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: r(() => [
                t("div", Lt, [
                  s[20] || (s[20] = t("div", { class: "live-list-loading-spinner" }, null, -1)),
                  t("span", Rt, i(e(_)(e(l).LOADING)), 1)
                ])
              ]),
              empty: r(() => [
                d.value.searchInput ? (v(), f("div", At, [
                  t("span", Ot, i(e(_)(e(l).NO_SEARCH_RESULTS_FOR, { keyword: d.value.searchInput })), 1)
                ])) : (v(), f("div", Vt, [
                  t("div", Dt, [
                    n(e(_e), { size: "40px" })
                  ]),
                  t("p", Nt, i(e(_)(e(l).EMPTY_LIVE_LIST_TITLE)), 1),
                  t("p", kt, i(e(_)(e(l).EMPTY_LIVE_LIST_DESC)), 1),
                  t("div", Ut, [
                    n(y, {
                      theme: "primary",
                      shape: "round",
                      class: "empty-guide-cta",
                      onClick: s[6] || (s[6] = () => e(u).openCreateModal())
                    }, {
                      icon: r(() => [
                        n(e(_e))
                      ]),
                      default: r(() => [
                        I(" " + i(e(_)(e(l).CREATE_LIVE)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]))
              ]),
              _: 2
            }, [
              he(j.value, (c) => ({
                name: `header-${c.key}`,
                fn: r(() => [
                  I(i(c.title), 1)
                ])
              })),
              e(w)?.tableExtraColumns ? {
                name: "cell-customer-extra",
                fn: r(({ row: c }) => [
                  n(me, {
                    "slot-component": e(w).tableExtraColumns,
                    "slot-props": { live: c }
                  }, null, 8, ["slot-component", "slot-props"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["columns", "data", "loading"])
          ]),
          _: 1
        }),
        n(Sl, {
          "current-page": d.value.currentPage,
          "has-more-data": d.value.hasMoreData,
          loading: !1,
          onGoToFirstPage: s[7] || (s[7] = () => e(u).goToPage(1)),
          onPrevPage: s[8] || (s[8] = () => e(u).goToPage(d.value.currentPage - 1)),
          onNextPage: s[9] || (s[9] = () => e(u).goToPage(d.value.currentPage + 1))
        }, null, 8, ["current-page", "has-more-data"]),
        n(st, {
          visible: d.value.isCreateModalVisible,
          "upload-enabled": K.value,
          "onUpdate:visible": s[10] || (s[10] = (c) => c ? e(u).openCreateModal() : e(u).closeCreateModal()),
          onSuccess: s[11] || (s[11] = () => e(u).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        n(ft, {
          visible: d.value.isEditModalVisible,
          live: d.value.editingLive,
          "upload-enabled": K.value,
          "extra-fields-slot": e(w)?.roomFormExtraFields,
          "onUpdate:visible": s[12] || (s[12] = (c) => {
            c || e(u).closeEditModal();
          }),
          onSuccess: s[13] || (s[13] = (c) => e(u).onLiveEdited(c))
        }, null, 8, ["visible", "live", "upload-enabled", "extra-fields-slot"]),
        n(U, {
          visible: d.value.confirmDialog.visible,
          header: d.value.confirmDialog.title,
          "confirm-btn": { content: e(_)(e(l).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": s[14] || (s[14] = (c) => {
            c || e(u).cancelDelete();
          }),
          onConfirm: e(se)
        }, {
          default: r(() => [
            t("p", null, i(d.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "onConfirm"]),
        n(U, {
          visible: d.value.obsModal.visible && !!d.value.obsModal.live,
          header: e(_)(e(l).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": s[19] || (s[19] = (c) => {
            c || e(u).closeDetail();
          })
        }, {
          footer: r(() => [
            t("div", Eo, [
              n(y, {
                variant: "outline",
                shape: "round",
                onClick: s[18] || (s[18] = () => e(u).closeDetail())
              }, {
                default: r(() => [
                  I(i(e(_)(e(l).CLOSE)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: r(() => [
            t("div", Mt, [
              d.value.obsModal.errorMessage ? (v(), f("div", wt, [
                s[21] || (s[21] = t("span", { class: "live-info-error-icon" }, "!", -1)),
                t("span", null, i(d.value.obsModal.errorMessage), 1)
              ])) : O("", !0),
              t("div", Ft, [
                t("div", $t, i(e(_)(e(l).BASIC_INFORMATION)), 1),
                t("div", Bt, [
                  t("div", Pt, [
                    t("span", Kt, i(e(_)(e(l).ANCHOR_ID)), 1),
                    t("div", Ht, [
                      t("span", Yt, i(d.value.obsModal.live?.anchor?.userId || "-"), 1),
                      d.value.obsModal.live?.anchor?.userId ? (v(), f("button", {
                        key: 0,
                        class: "live-info-copy-btn",
                        onClick: s[15] || (s[15] = (c) => e(u).copyText(d.value.obsModal.live.anchor.userId, e(_)(e(l).LIVE_HOST)))
                      }, [
                        n(e(ue))
                      ])) : O("", !0)
                    ])
                  ]),
                  t("div", Xt, [
                    t("span", Gt, i(e(_)(e(l).LIVE_ID)), 1),
                    t("div", Wt, [
                      t("span", zt, i(d.value.obsModal.live?.liveId || "-"), 1)
                    ])
                  ]),
                  t("div", qt, [
                    t("span", Qt, i(e(_)(e(l).LIVE_TITLE)), 1),
                    t("div", jt, [
                      t("span", Zt, i(d.value.obsModal.live?.liveName || "-"), 1)
                    ])
                  ]),
                  t("div", Jt, [
                    t("span", eo, i(e(_)(e(l).LIVE_COVER)), 1),
                    t("div", lo, [
                      t("span", to, i(d.value.obsModal.live?.coverUrl || "-"), 1)
                    ])
                  ])
                ])
              ]),
              d.value.obsModal.streamInfo || d.value.obsModal.actionLoading === "stream" ? (v(), f("div", oo, [
                t("div", ao, i(e(_)(e(l).PUSH_STREAM_INFO)), 1),
                t("div", so, [
                  d.value.obsModal.streamInfo ? (v(), f(W, { key: 0 }, [
                    t("div", io, [
                      t("span", no, i(e(_)(e(l).SERVER_URL)), 1),
                      t("div", ro, [
                        t("span", uo, i(d.value.obsModal.streamInfo.serverUrl), 1),
                        t("button", {
                          class: "live-info-copy-btn",
                          onClick: s[16] || (s[16] = (c) => e(u).copyText(d.value.obsModal.streamInfo.serverUrl, e(_)(e(l).SERVER_URL)))
                        }, [
                          n(e(ue))
                        ])
                      ])
                    ]),
                    t("div", co, [
                      t("span", vo, i(e(_)(e(l).STREAM_KEY)), 1),
                      t("div", po, [
                        t("span", mo, i(d.value.obsModal.streamInfo.streamKey), 1),
                        t("button", {
                          class: "live-info-copy-btn",
                          onClick: s[17] || (s[17] = (c) => e(u).copyText(d.value.obsModal.streamInfo.streamKey, e(_)(e(l).STREAM_KEY)))
                        }, [
                          n(e(ue))
                        ])
                      ])
                    ])
                  ], 64)) : (v(), f("div", _o, [
                    t("span", fo, i(e(_)(e(l).GETTING_STREAM_INFO)), 1)
                  ]))
                ])
              ])) : O("", !0)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
});
export {
  Uo as default
};
