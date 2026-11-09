import { defineComponent as Ce, computed as k, ref as S, watch as we, resolveComponent as D, openBlock as v, createElementBlock as f, Fragment as W, createVNode as n, unref as e, withCtx as r, createBlock as B, createElementVNode as t, normalizeClass as ue, toDisplayString as i, createTextVNode as I, createCommentVNode as O, renderList as he, shallowRef as Oe, onMounted as Ze, onBeforeUnmount as Je, createSlots as el } from "vue";
import { useRouter as ll } from "vue-router";
import { HelpCircleIcon as ye, ChevronDownIcon as Fe, ChevronRightIcon as $e, CloseIcon as Be, AddIcon as _e, CopyIcon as de, SearchIcon as tl, RefreshIcon as ol } from "tdesign-icons-vue-next";
import { Tooltip as ge, MessagePlugin as L } from "tdesign-vue-next";
import { useUIKit as be } from "@tencentcloud/uikit-base-component-vue3";
import { as as Ve, g as oe, aP as al, bc as J, b4 as sl, aR as il, k as te, U as M, a6 as nl, C as V, b7 as rl, ac as ul, bM as dl, aq as cl, at as De, a3 as Ne, aA as vl, ay as ke, bX as pl, am as ml, aS as _l, X as fl, bf as Ue, T as Me, aK as El, af as hl } from "../../chunks/main-layout.8WX-Nzxd.js";
import { a as Te } from "../../chunks/useAsyncAction.DOxAQMNT.js";
import { c as Pe, v as Il, I as l, g as Ke, b0 as yl, m as gl, ao as Cl, a as bl, V as Tl } from "../../chunks/shared-state.DVNvfj7e.js";
import { g as xl } from "../../chunks/PreviewUrlController.Bh9ZwVwJ.js";
import { g as Sl } from "../../chunks/columns.UbGqhdSU.js";
import { useLiveMonitorState as xe } from "../../vue.js";
import { _ as Ll } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.uejNiff_.js";
import { r as He, I as Ye } from "../../chunks/image-upload-resolve.CUCSpady.js";
import { I as Xe } from "../../chunks/ImageUpload.BBIqXO2l.js";
import { _ as Ge } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as me } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.C69u4If7.js";
import { _ as Rl, a as Al } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
const Ol = { style: { display: "inline-flex", "align-items": "center" } }, Vl = ["href"], Dl = {
  key: 0,
  class: "form-field__error-tip"
}, Nl = ["href"], kl = { style: { display: "inline-flex", "align-items": "center" } }, Ul = {
  href: "https://cloud.tencent.com/document/product/647/123012#159bb20a-d83d-4fde-a37b-1ff99632ee2c",
  target: "_blank",
  rel: "noopener noreferrer",
  style: { color: "#6ea1ff", "text-decoration": "underline" }
}, Ml = { class: "seat-template-group" }, wl = ["title", "onClick"], Fl = {
  class: "seat-template-icon",
  viewBox: "0 0 72 48",
  xmlns: "http://www.w3.org/2000/svg"
}, $l = { class: "seat-template-label" }, Bl = { class: "custom-info-section" }, Pl = {
  key: 2,
  class: "custom-info-count"
}, Kl = {
  key: 0,
  class: "custom-info-container"
}, Hl = { class: "custom-input-wrap" }, Yl = { class: "custom-input-wrap custom-value-wrap" }, Xl = {
  key: 1,
  class: "create-success-content"
}, Gl = { class: "create-success-summary" }, Wl = {
  key: 0,
  class: "create-success-section"
}, zl = { class: "create-success-section-title" }, ql = { class: "stream-info-items" }, Ql = { class: "stream-info-item" }, jl = { class: "stream-info-label" }, Zl = { class: "stream-info-value" }, Jl = { class: "stream-info-item" }, et = { class: "stream-info-label" }, lt = { class: "stream-info-value" }, tt = { class: "dialog-footer" }, ot = { style: { "font-size": "14px", "line-height": "22px", color: "rgba(0,0,0,0.6)" } }, at = ["href"], st = /* @__PURE__ */ Ce({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup($, { emit: _ }) {
    const ee = Pe("CreateLive"), { t: o, language: ae } = be(), { opSuccess: w, opFailed: u } = Il(o), d = $, { extraFieldsSlot: se } = d, { createLive: ie } = xe(), P = _, j = k({
      get: () => d.visible,
      set: (h) => P("update:visible", h)
    }), R = (h) => oe(h), A = (h) => oe(h), s = (h) => {
      m.value.maxSeatCount = Number(h) || 1;
    }, m = S(Ve()), y = S([]), K = S(!1), U = S(!1), c = S(!1), z = S(""), ce = S(""), H = S(null), F = S(""), le = S(null), ve = S(!1), Y = S(!1), { loading: pe, execute: g } = Te({
      operationName: o(l.CREATE_LIVE),
      showSuccess: !1,
      action: async () => {
        let h = "";
        try {
          h = await He({
            handle: le.value,
            hasPendingFile: ve.value,
            fallbackUrl: m.value.coverUrl,
            label: o(l.COVER_IMAGE)
          });
        } catch (x) {
          ee.error("CreateLive", `Cover processing failed: ${x instanceof Error ? x.message : String(x)}`, x);
          const Z = x instanceof Ye ? x.message : `${o(l.COVER_PROCESSING_FAILED)}: ${x instanceof Error ? x.message : String(x) || o(l.UNKNOWN_ERROR)}`;
          L.error(Z);
          return;
        }
        if (y.value.some(J)) {
          L.error(o(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        const a = ul({
          formData: m.value,
          coverUrl: h,
          customInfos: y.value,
          useObsStreaming: c.value
        }), Q = a.liveId, G = a.anchorId;
        if (await ie(a), H.value = null, F.value = "", c.value, c.value) {
          const x = await dl({
            liveId: Q,
            anchorId: G,
            onStatusChange: (Z) => {
              z.value = Z;
            },
            messages: {
              getStreamInfoFailed: u(l.OP_GET_STREAM_INFO),
              importAccountFailed: u(l.OP_IMPORT, l.LIVE),
              addRobotFailed: u(l.OP_ADD, l.LIVE),
              pickSeatFailed: u(l.OP_PICK, l.LIVE),
              setupFailed: u(l.OP_OBS_SETUP_ACT, l.LIVE)
            }
          });
          H.value = x.streamInfo, F.value = x.streamInfoError, ce.value = x.setupError, x.configuredSuccessfully;
        }
        U.value = !0;
      },
      onError: (h) => {
        rl(h) && (Y.value = !0);
      }
    }), E = k(() => oe(m.value.anchorId)), b = k(() => al(ae.value)), N = k(() => oe(m.value.liveName));
    k(() => y.value.filter((h) => h.key.trim()).length);
    const T = k(() => y.value.some(J));
    we(() => m.value.anchorId, () => {
      Y.value && (Y.value = !1);
    });
    const X = k(() => {
      const h = sl(m.value.seatTemplate), a = o(h?.descKey || "");
      return h?.orientation === "landscape" ? `${a}，${o(l.LANDSCAPE_BROADCASTING_HINT)}` : a;
    }), q = k(() => il(m.value.seatTemplate)), C = k(() => c.value ? z.value === "error" ? `OBS 配置失败：${ce.value}` : H.value ? "OBS 已配置完成，可直接复制下方推流信息。" : F.value ? `OBS 已配置完成，但推流信息生成失败：${F.value}` : "OBS 已配置完成。" : ""), fe = k(() => z.value === "error" || !!F.value), ne = (h) => {
      ve.value = !!h;
    }, Se = async (h, a, Q) => {
      try {
        await cl(h), Q && yl(Q, "customer"), L.success(w(l.COPY, a));
      } catch (G) {
        const x = G, Z = x.ErrorInfo || (x instanceof Error ? x.message : String(x)) || o(l.UNKNOWN_ERROR);
        ee.error("CreateLive", `Copy failed: ${Z}`, G), L.error(u(l.COPY, null, Z));
      }
    }, We = () => {
      if (y.value.length >= V.maxCount) {
        L.error(o(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: V.maxCount }));
        return;
      }
      y.value.push({ key: "", value: "" });
    }, ze = (h) => {
      y.value.splice(h, 1);
    }, Le = () => {
      m.value = Ve(), y.value = [], K.value = !1, U.value = !1, c.value = !1, z.value = "", ce.value = "", H.value = null, F.value = "", ve.value = !1, Y.value = !1, le.value?.reset();
    }, Re = () => {
      Le(), P("update:visible", !1);
    }, qe = async () => {
      if (!m.value.anchorId.trim()) {
        L.error(o(l.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (E.value > te) {
        L.error(o(l.MAX_BYTES_WITH_CURRENT, { field: o(l.ANCHOR_ID), max: te, current: E.value }));
        return;
      }
      if (N.value > M) {
        L.error(o(l.MAX_BYTES_WITH_CURRENT, { field: o(l.LIVE_TITLE), max: M, current: N.value }));
        return;
      }
      if (y.value.some(J)) {
        L.error(o(l.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      z.value = "", await g();
    }, Qe = () => {
      Le(), P("success"), P("update:visible", !1);
    };
    return (h, a) => {
      const Q = D("t-input"), G = D("t-form-item"), x = D("t-input-number"), Z = D("t-checkbox"), re = D("t-button"), je = D("t-form"), Ae = D("t-dialog");
      return v(), f(W, null, [
        n(Ae, {
          visible: j.value,
          "onUpdate:visible": a[7] || (a[7] = (p) => j.value = p),
          header: U.value ? e(w)(e(l).CREATE, e(l).LIVE) : e(o)(e(l).CREATE_LIVE),
          width: e(ae)?.startsWith("en") ? 680 : 620,
          placement: "center",
          class: "create-live-modal",
          onClose: Re
        }, {
          footer: r(() => [
            t("div", tt, [
              U.value ? (v(), B(re, {
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
                n(re, {
                  variant: "outline",
                  shape: "round",
                  onClick: Re
                }, {
                  default: r(() => [
                    I(i(e(o)(e(l).CANCEL)), 1)
                  ]),
                  _: 1
                }),
                n(re, {
                  theme: "primary",
                  shape: "round",
                  loading: e(pe),
                  disabled: e(pe) || !m.value.anchorId.trim() || le.value?.isValidating || le.value?.hasUrlError || T.value,
                  onClick: qe
                }, {
                  default: r(() => [
                    I(i(e(pe) ? e(o)(e(l).CREATING) : e(o)(e(l).CREATE)), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64))
            ])
          ]),
          default: r(() => [
            U.value ? (v(), f("div", Xl, [
              t("div", Gl, [
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
                  class: ue(["create-success-description", { "is-error": fe.value }])
                }, i(C.value), 3)) : O("", !0)
              ]),
              H.value ? (v(), f("div", Wl, [
                t("div", zl, i(e(o)(e(l).STREAM_INFO)), 1),
                t("div", ql, [
                  t("div", Ql, [
                    t("div", jl, [
                      t("span", null, i(e(o)(e(l).SERVER_URL)), 1),
                      t("button", {
                        class: "action-link",
                        onClick: a[5] || (a[5] = (p) => Se(H.value.serverUrl, e(o)(e(l).SERVER_URL), "obs_server_url"))
                      }, [
                        n(e(de)),
                        I(" " + i(e(o)(e(l).COPY)), 1)
                      ])
                    ]),
                    t("code", Zl, i(H.value.serverUrl), 1)
                  ]),
                  t("div", Jl, [
                    t("div", et, [
                      t("span", null, i(e(o)(e(l).STREAM_KEY)), 1),
                      t("button", {
                        class: "action-link",
                        onClick: a[6] || (a[6] = (p) => Se(H.value.streamKey, e(o)(e(l).STREAM_KEY), "obs_stream_key"))
                      }, [
                        n(e(de)),
                        I(" " + i(e(o)(e(l).COPY)), 1)
                      ])
                    ]),
                    t("code", lt, i(H.value.streamKey), 1)
                  ])
                ])
              ])) : O("", !0)
            ])) : (v(), B(je, {
              key: 0,
              class: "create-live-form",
              "label-width": e(Ke)(100),
              colon: !1
            }, {
              default: r(() => [
                n(G, { "required-mark": !0 }, {
                  label: r(() => [
                    t("span", Ol, [
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
                            }, i(e(o)(e(l).VIEW_DETAILS)), 9, Vl)
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
                      status: Y.value || E.value > e(te) ? "error" : "default",
                      tips: !Y.value && E.value > e(te) ? e(o)(e(l).MAX_BYTES, { field: e(o)(e(l).ANCHOR_ID), max: e(te) }) : ""
                    }, {
                      suffix: r(() => [
                        t("span", {
                          class: ue(["input-suffix-count", { "byte-overflow": E.value > e(te) }])
                        }, i(E.value) + "/" + i(e(te)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"]),
                    Y.value ? (v(), f("div", Dl, [
                      I(i(e(o)(e(l).ANCHOR_ID_NOT_FOUND_TIP)) + " ", 1),
                      t("a", {
                        href: b.value,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: { color: "#1C66E5" }
                      }, i(e(o)(e(l).VIEW_DETAILS)), 9, Nl)
                    ])) : O("", !0)
                  ]),
                  _: 1
                }),
                n(G, {
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
                          class: ue(["input-suffix-count", { "byte-overflow": N.value > e(M) }])
                        }, i(N.value) + "/" + i(e(M)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                n(G, null, {
                  label: r(() => [
                    t("span", kl, [
                      I(i(e(o)(e(l).COVER_IMAGE)) + " ", 1),
                      $.uploadEnabled ? O("", !0) : (v(), B(e(ge), {
                        key: 0,
                        placement: "top"
                      }, {
                        content: r(() => [
                          t("span", null, [
                            I(i(e(o)(e(l).UPLOAD_NOT_CONFIGURED_HINT)) + " ", 1),
                            t("a", Ul, i(e(o)(e(l).VIEW_DETAILS)), 1)
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
                      ref: le,
                      modelValue: m.value.coverUrl,
                      "onUpdate:modelValue": a[2] || (a[2] = (p) => m.value.coverUrl = p),
                      type: "cover",
                      "upload-enabled": $.uploadEnabled,
                      "crop-enabled": !0,
                      "aspect-ratio": q.value,
                      placeholder: e(o)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                      "preview-height": 140,
                      "max-bytes": 200,
                      "defer-upload": $.uploadEnabled,
                      onFileReady: ne
                    }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                  ]),
                  _: 1
                }),
                n(G, {
                  label: e(o)(e(l).LAYOUT_TEMPLATE),
                  "required-mark": !0,
                  help: X.value
                }, {
                  default: r(() => [
                    t("div", Ml, [
                      (v(!0), f(W, null, he(e(nl), (p) => (v(), f("button", {
                        key: p.value,
                        type: "button",
                        class: ue(["seat-template-btn", { "seat-template-btn--selected": m.value.seatTemplate === p.value, "seat-template-btn--landscape": p.value === "VideoLandscape4Seat" }]),
                        title: e(o)(p.descKey),
                        onClick: (Ie) => m.value.seatTemplate = p.value
                      }, [
                        (v(), f("svg", Fl, [
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
                        t("span", $l, i(e(o)(p.labelKey)), 1)
                      ], 10, wl))), 128))
                    ])
                  ]),
                  _: 1
                }, 8, ["label", "help"]),
                m.value.seatTemplate === "AudioSalon" || m.value.seatTemplate === "Karaoke" ? (v(), B(G, {
                  key: 0,
                  label: e(o)(e(l).MAX_SEATS),
                  help: e(o)(e(l).MAX_SEATS_HELP)
                }, {
                  default: r(() => [
                    n(x, {
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
                n(G, {
                  label: e(o)(e(l).STREAMING_METHOD),
                  help: e(o)(e(l).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
                }, {
                  default: r(() => [
                    n(Z, {
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
                t("div", Bl, [
                  t("div", {
                    class: "custom-info-toggle",
                    onClick: a[4] || (a[4] = (p) => K.value = !K.value)
                  }, [
                    K.value ? (v(), B(e(Fe), {
                      key: 0,
                      size: "16"
                    })) : (v(), B(e($e), {
                      key: 1,
                      size: "16"
                    })),
                    t("span", null, i(e(o)(e(l).CUSTOM_INFORMATION)), 1),
                    y.value.length > 0 ? (v(), f("span", Pl, i(y.value.length), 1)) : O("", !0)
                  ]),
                  K.value ? (v(), f("div", Kl, [
                    (v(!0), f(W, null, he(y.value, (p, Ie) => (v(), f("div", {
                      key: Ie,
                      class: "custom-info-row"
                    }, [
                      t("div", Hl, [
                        n(Q, {
                          modelValue: p.key,
                          "onUpdate:modelValue": (Ee) => p.key = Ee,
                          placeholder: e(o)(e(l).ENTER_KEY),
                          status: R(p.key) > e(V).maxKeyBytes || e(J)(p) ? "error" : "default",
                          tips: R(p.key) > e(V).maxKeyBytes ? e(o)(e(l).MAX_BYTES, { field: "Key", max: e(V).maxKeyBytes }) : e(J)(p) ? e(o)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                      ]),
                      t("div", Yl, [
                        n(Q, {
                          modelValue: p.value,
                          "onUpdate:modelValue": (Ee) => p.value = Ee,
                          placeholder: e(o)(e(l).ENTER_VALUE),
                          status: A(p.value) > e(V).maxValueBytes ? "error" : "default",
                          tips: A(p.value) > e(V).maxValueBytes ? e(o)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                      ]),
                      n(re, {
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
                    y.value.length < e(V).maxCount ? (v(), B(re, {
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
            n(re, {
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
            t("div", ot, [
              I(i(e(o)(e(l).ANCHOR_ID_NOT_FOUND_DESC)) + " ", 1),
              t("a", {
                href: b.value,
                target: "_blank",
                rel: "noopener noreferrer",
                style: { color: "#1C66E5" }
              }, i(e(o)(e(l).HERE)), 9, at)
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ], 64);
    };
  }
}), it = /* @__PURE__ */ Ge(st, [["__scopeId", "data-v-d11cf6f7"]]), nt = {
  key: 0,
  class: "edit-live-error"
}, rt = { style: { display: "inline-flex", "align-items": "center" } }, ut = {
  href: "https://cloud.tencent.com/document/product/647/123012#159bb20a-d83d-4fde-a37b-1ff99632ee2c",
  target: "_blank",
  rel: "noopener noreferrer",
  style: { color: "#6ea1ff", "text-decoration": "underline" }
}, dt = { class: "custom-info-section" }, ct = {
  key: 2,
  class: "custom-info-count"
}, vt = {
  key: 0,
  class: "custom-info-container"
}, pt = { class: "custom-input-wrap" }, mt = { class: "custom-input-wrap custom-value-wrap" }, _t = { class: "dialog-footer" }, ft = /* @__PURE__ */ Ce({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    live: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup($, { emit: _ }) {
    const ee = Pe("EditLive"), { t: o } = be(), { fetchLiveDetail: ae, updateLive: w } = xe(), u = $, d = k(() => u.live?.liveId || u.live?.id || ""), se = _, ie = k({
      get: () => u.visible,
      set: (g) => se("update:visible", g)
    }), P = (g) => oe(g), j = (g) => oe(g), R = S(De()), A = S(""), s = S([]), m = S(!1), y = S([]), K = S(Ne), U = S(null), c = S(!1), { loading: z, execute: ce } = Te({
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
        se("success", {
          liveName: R.value.liveName.trim(),
          coverUrl: R.value.coverUrl
        }), Y();
      }
    }), H = (g) => {
      c.value = !!g;
    }, F = k(() => oe(R.value.liveName));
    k(() => s.value.filter((g) => g.key.trim()).length), we([() => u.live?.liveId || u.live?.id, () => u.visible], async ([g, E]) => {
      const b = u.live;
      if (b && E) {
        R.value = {
          liveName: b.liveName || "",
          coverUrl: b.coverUrl || ""
        }, b.coverUrl ? K.value = await vl(b.coverUrl) : K.value = Ne;
        const N = b.liveId || b.id || "";
        try {
          const T = await ae(N), X = ke(T?.customInfo);
          s.value = X, m.value = X.length > 0, y.value = X.map((q) => q.key);
        } catch (T) {
          T instanceof gl && (A.value = Cl(T.code ?? 0, "", o(l.LIVE_NOT_FOUND)));
          const X = b.customInfo, q = ke(X);
          s.value = q, m.value = q.length > 0, y.value = q.map((C) => C.key);
        }
      }
    }, { immediate: !0 });
    const le = () => {
      if (s.value.length >= V.maxCount) {
        L.error(o(l.CUSTOM_INFO_MAX_COUNT_EXCEEDED, { max: V.maxCount }));
        return;
      }
      s.value.push({ key: "", value: "" });
    }, ve = (g) => {
      s.value.splice(g, 1);
    }, Y = () => {
      A.value = "", s.value = [], m.value = !1, y.value = [], c.value = !1, U.value?.reset(), R.value = De(), se("update:visible", !1);
    }, pe = async () => {
      if (u.live) {
        if (!R.value.liveName.trim()) {
          L.error(o(l.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (F.value > M) {
          L.error(o(l.MAX_BYTES_WITH_CURRENT, { field: o(l.LIVE_TITLE), max: M, current: F.value }));
          return;
        }
        if (s.value.some(J)) {
          L.error(o(l.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let g = "";
          try {
            g = await He({
              handle: U.value,
              hasPendingFile: c.value,
              fallbackUrl: R.value.coverUrl,
              label: o(l.COVER_IMAGE)
            });
          } catch (T) {
            ee.error("EditLive", `Cover processing failed: ${T instanceof Error ? T.message : String(T)}`, T);
            const X = T instanceof Ye ? T.message : `${o(l.COVER_PROCESSING_FAILED)}: ${T instanceof Error ? T.message : String(T) || o(l.UNKNOWN_ERROR)}`;
            L.error(X);
            return;
          }
          const E = pl(s.value);
          if (E) {
            E.type === "key-too-long" ? L.error(o(l.MAX_BYTES, { field: `Key ${E.key}`, max: E.max })) : E.type === "value-too-long" ? L.error(o(l.KEY_VALUE_EXCEEDS_2KB, { key: E.key })) : E.type === "max-count" ? L.error(o(l.CUSTOM_INFO_MAX_COUNT, { max: E.max })) : L.error(o(l.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const b = ml(s.value), N = _l(y.value, b);
          await ce({
            liveName: R.value.liveName.trim(),
            coverUrl: g || void 0,
            customInfo: Object.keys(b).length > 0 ? b : void 0,
            deleteKeys: N.length > 0 ? N : void 0
          });
        } catch (g) {
          ee.error("EditLiveModal", "Update failed:", g);
        }
      }
    };
    return (g, E) => {
      const b = D("t-input"), N = D("t-form-item"), T = D("t-button"), X = D("t-form"), q = D("t-dialog");
      return v(), B(q, {
        visible: ie.value,
        "onUpdate:visible": E[3] || (E[3] = (C) => ie.value = C),
        header: e(o)(e(l).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: Y
      }, {
        footer: r(() => [
          t("div", _t, [
            n(T, {
              variant: "outline",
              shape: "round",
              onClick: Y
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
              disabled: e(z) || !R.value.liveName.trim() || U.value?.isValidating || U.value?.hasUrlError,
              onClick: pe
            }, {
              default: r(() => [
                I(i(e(z) ? e(o)(e(l).SAVING) : e(o)(e(l).SAVE)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        default: r(() => [
          n(X, {
            class: "edit-live-form",
            "label-width": e(Ke)(100),
            colon: !1
          }, {
            default: r(() => [
              A.value ? (v(), f("div", nt, [
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
                    modelValue: R.value.liveName,
                    "onUpdate:modelValue": E[0] || (E[0] = (C) => R.value.liveName = C),
                    placeholder: e(o)(e(l).ENTER_LIVE_TITLE),
                    status: F.value > e(M) ? "error" : "default",
                    tips: F.value > e(M) ? e(o)(e(l).MAX_BYTES, { field: e(o)(e(l).LIVE_TITLE), max: e(M) }) : ""
                  }, {
                    suffix: r(() => [
                      t("span", {
                        class: ue(["input-suffix-count", { "byte-overflow": F.value > e(M) }])
                      }, i(F.value) + "/" + i(e(M)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              n(N, null, {
                label: r(() => [
                  t("span", rt, [
                    I(i(e(o)(e(l).COVER_IMAGE)) + " ", 1),
                    $.uploadEnabled ? O("", !0) : (v(), B(e(ge), {
                      key: 0,
                      placement: "top"
                    }, {
                      content: r(() => [
                        t("span", null, [
                          I(i(e(o)(e(l).UPLOAD_NOT_CONFIGURED_HINT)) + " ", 1),
                          t("a", ut, i(e(o)(e(l).VIEW_DETAILS)), 1)
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
                    modelValue: R.value.coverUrl,
                    "onUpdate:modelValue": E[1] || (E[1] = (C) => R.value.coverUrl = C),
                    type: "cover",
                    "upload-enabled": $.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": K.value,
                    placeholder: e(o)(e(l).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": $.uploadEnabled,
                    onFileReady: H
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }),
              n(me, {
                "slot-component": $.extraFieldsSlot,
                "slot-props": { mode: "edit", live: $.live, formData: { ...R.value }, customInfos: [...s.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              t("div", dt, [
                t("div", {
                  class: "custom-info-toggle",
                  onClick: E[2] || (E[2] = (C) => m.value = !m.value)
                }, [
                  m.value ? (v(), B(e(Fe), {
                    key: 0,
                    size: "16"
                  })) : (v(), B(e($e), {
                    key: 1,
                    size: "16"
                  })),
                  t("span", null, i(e(o)(e(l).CUSTOM_INFORMATION)), 1),
                  s.value.length > 0 ? (v(), f("span", ct, i(s.value.length), 1)) : O("", !0)
                ]),
                m.value ? (v(), f("div", vt, [
                  (v(!0), f(W, null, he(s.value, (C, fe) => (v(), f("div", {
                    key: fe,
                    class: "custom-info-row"
                  }, [
                    t("div", pt, [
                      n(b, {
                        modelValue: C.key,
                        "onUpdate:modelValue": (ne) => C.key = ne,
                        placeholder: e(o)(e(l).ENTER_KEY),
                        status: P(C.key) > e(V).maxKeyBytes || e(J)(C) ? "error" : "default",
                        tips: P(C.key) > e(V).maxKeyBytes ? e(o)(e(l).MAX_BYTES, { field: "Key", max: e(V).maxKeyBytes }) : e(J)(C) ? e(o)(e(l).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    t("div", mt, [
                      n(b, {
                        modelValue: C.value,
                        "onUpdate:modelValue": (ne) => C.value = ne,
                        placeholder: e(o)(e(l).ENTER_VALUE),
                        status: j(C.value) > e(V).maxValueBytes ? "error" : "default",
                        tips: j(C.value) > e(V).maxValueBytes ? e(o)(e(l).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    n(T, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ne) => ve(fe)
                    }, {
                      default: r(() => [
                        n(e(Be))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  s.value.length < e(V).maxCount ? (v(), B(T, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: le,
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
}), Et = /* @__PURE__ */ Ge(ft, [["__scopeId", "data-v-2491c474"]]), ht = { class: "live-list-page" }, It = { class: "live-list-header" }, yt = { class: "live-list-title" }, gt = { class: "header-actions" }, Ct = { class: "live-list-id-cell" }, bt = { class: "live-list-id-text" }, Tt = { class: "live-list-cover-cell" }, xt = ["src", "alt"], St = { class: "live-list-text" }, Lt = { class: "live-list-text" }, Rt = { class: "live-list-loading-container" }, At = { class: "live-list-loading-text" }, Ot = {
  key: 0,
  class: "live-list-empty-container"
}, Vt = { class: "live-list-empty-text" }, Dt = {
  key: 1,
  class: "live-list-empty-container"
}, Nt = { class: "empty-guide-icon" }, kt = { class: "empty-guide-title" }, Ut = { class: "empty-guide-desc" }, Mt = { class: "empty-guide-actions" }, wt = { class: "live-info-form" }, Ft = {
  key: 0,
  class: "live-info-error"
}, $t = { class: "live-info-section" }, Bt = { class: "live-info-section-title" }, Pt = { class: "live-info-card" }, Kt = { class: "live-info-row" }, Ht = { class: "live-info-label" }, Yt = { class: "live-info-value-area" }, Xt = { class: "live-info-value" }, Gt = { class: "live-info-row" }, Wt = { class: "live-info-label" }, zt = { class: "live-info-value-area" }, qt = { class: "live-info-value" }, Qt = { class: "live-info-row" }, jt = { class: "live-info-label" }, Zt = { class: "live-info-value-area" }, Jt = { class: "live-info-value" }, eo = { class: "live-info-row" }, lo = { class: "live-info-label" }, to = { class: "live-info-value-area" }, oo = { class: "live-info-value live-info-value-url" }, ao = {
  key: 1,
  class: "live-info-section"
}, so = { class: "live-info-section-title" }, io = { class: "live-info-card" }, no = { class: "live-info-row" }, ro = { class: "live-info-label" }, uo = { class: "live-info-value-area" }, co = { class: "live-info-value live-info-value-url" }, vo = { class: "live-info-row" }, po = { class: "live-info-label" }, mo = { class: "live-info-value-area" }, _o = { class: "live-info-value live-info-value-url" }, fo = {
  key: 1,
  class: "live-info-row"
}, Eo = {
  class: "live-info-label",
  style: { width: "auto" }
}, ho = { class: "dialog-footer" }, Mo = /* @__PURE__ */ Ce({
  __name: "live-list",
  setup($) {
    const { t: _ } = be(), ee = ll(), { endLive: o, fetchLiveDetail: ae } = xe(), w = bl().components?.liveList, u = new fl({
      endLive: o,
      onEnterLive: (A) => {
        ee.push({ path: `/live-control/${A}`, query: { from: "live-list" } });
      },
      t: _,
      toast: {
        success: (A) => L.success(A),
        error: (A) => L.error(A)
      },
      fetchLiveDetail: ae
    }), d = Oe(u.getState()), se = u.subscribe(() => {
      d.value = u.getState();
    }), { execute: ie } = Te({
      toast: { action: l.DISSOLVE, entity: l.LIVE },
      operationName: _(l.DISSOLVE),
      action: async () => {
        await u.confirmDelete();
      }
    }), P = Oe(!1);
    Ze(async () => {
      P.value = await xl(), await u.init();
    }), Je(() => {
      se(), u.dispose();
    });
    const j = k(() => Sl({ hasExtraColumn: !!w?.tableExtraColumns }).map((s) => ({
      ...s,
      title: s.i18nKey ? _(s.i18nKey) : ""
    }))), R = (A) => hl({
      live: A,
      t: _,
      onEnter: (s) => u.enterLive(s),
      onDetail: (s) => u.showDetail(s),
      onEdit: (s) => u.openEditModal(s),
      onDelete: (s) => u.requestDelete(s)
    });
    return (A, s) => {
      const m = D("t-input"), y = D("t-button"), K = D("t-card"), U = D("t-dialog");
      return v(), f("div", ht, [
        t("div", It, [
          t("h1", yt, i(e(_)(e(l).LIVE_LIST)), 1),
          n(me, {
            "slot-component": e(w)?.beforeToolbar,
            "slot-props": { lives: d.value.lives, loading: d.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          t("div", gt, [
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
                  class: ue({ spinning: d.value.refreshing })
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
        n(K, { class: "live-list-card" }, {
          default: r(() => [
            n(Rl, {
              columns: j.value,
              data: d.value.lives,
              "row-key": "liveId",
              loading: d.value.loading,
              "table-class-name": "live-list-table",
              "body-class-name": "live-list-content",
              "row-class-name": "live-list-row"
            }, el({
              "cell-liveId": r(({ row: c }) => [
                t("div", Ct, [
                  t("span", bt, i(c.liveId), 1),
                  n(e(de), {
                    class: "copy-icon",
                    onClick: (z) => e(u).copyText(c.liveId, e(_)(e(l).LIVE_ID), "live_id")
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-liveName": r(({ row: c }) => [
                I(i(c.liveName || "-"), 1)
              ]),
              "cell-coverUrl": r(({ row: c }) => [
                t("div", Tt, [
                  t("img", {
                    src: c.coverUrl || e(Tl),
                    alt: c.liveName,
                    class: "live-list-cover-image"
                  }, null, 8, xt)
                ])
              ]),
              "cell-anchor": r(({ row: c }) => [
                t("span", St, i(c.anchor?.userId || "-"), 1)
              ]),
              "cell-createdAt": r(({ row: c }) => [
                t("span", Lt, i(e(El)(c.createdAt)), 1)
              ]),
              "cell-actions": r(({ row: c }) => [
                n(Al, {
                  actions: R(c)
                }, null, 8, ["actions"]),
                n(me, {
                  "slot-component": e(w)?.rowActions,
                  "slot-props": { live: c }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: r(() => [
                t("div", Rt, [
                  s[20] || (s[20] = t("div", { class: "live-list-loading-spinner" }, null, -1)),
                  t("span", At, i(e(_)(e(l).LOADING)), 1)
                ])
              ]),
              empty: r(() => [
                d.value.searchInput ? (v(), f("div", Ot, [
                  t("span", Vt, i(e(_)(e(l).NO_SEARCH_RESULTS_FOR, { keyword: d.value.searchInput })), 1)
                ])) : (v(), f("div", Dt, [
                  t("div", Nt, [
                    n(e(_e), { size: "40px" })
                  ]),
                  t("p", kt, i(e(_)(e(l).EMPTY_LIVE_LIST_TITLE)), 1),
                  t("p", Ut, i(e(_)(e(l).EMPTY_LIVE_LIST_DESC)), 1),
                  t("div", Mt, [
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
        n(Ll, {
          "current-page": d.value.currentPage,
          "has-more-data": d.value.hasMoreData,
          loading: !1,
          onGoToFirstPage: s[7] || (s[7] = () => e(u).goToPage(1)),
          onPrevPage: s[8] || (s[8] = () => e(u).goToPage(d.value.currentPage - 1)),
          onNextPage: s[9] || (s[9] = () => e(u).goToPage(d.value.currentPage + 1))
        }, null, 8, ["current-page", "has-more-data"]),
        n(it, {
          visible: d.value.isCreateModalVisible,
          "upload-enabled": P.value,
          "onUpdate:visible": s[10] || (s[10] = (c) => c ? e(u).openCreateModal() : e(u).closeCreateModal()),
          onSuccess: s[11] || (s[11] = () => e(u).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        n(Et, {
          visible: d.value.isEditModalVisible,
          live: d.value.editingLive,
          "upload-enabled": P.value,
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
          onConfirm: e(ie)
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
            t("div", ho, [
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
            t("div", wt, [
              d.value.obsModal.errorMessage ? (v(), f("div", Ft, [
                s[21] || (s[21] = t("span", { class: "live-info-error-icon" }, "!", -1)),
                t("span", null, i(d.value.obsModal.errorMessage), 1)
              ])) : O("", !0),
              t("div", $t, [
                t("div", Bt, i(e(_)(e(l).BASIC_INFORMATION)), 1),
                t("div", Pt, [
                  t("div", Kt, [
                    t("span", Ht, i(e(_)(e(l).ANCHOR_ID)), 1),
                    t("div", Yt, [
                      t("span", Xt, i(d.value.obsModal.live?.anchor?.userId || "-"), 1),
                      d.value.obsModal.live?.anchor?.userId ? (v(), f("button", {
                        key: 0,
                        class: "live-info-copy-btn",
                        onClick: s[15] || (s[15] = (c) => e(u).copyText(d.value.obsModal.live.anchor.userId, e(_)(e(l).LIVE_HOST), "anchor_id"))
                      }, [
                        n(e(de))
                      ])) : O("", !0)
                    ])
                  ]),
                  t("div", Gt, [
                    t("span", Wt, i(e(_)(e(l).LIVE_ID)), 1),
                    t("div", zt, [
                      t("span", qt, i(d.value.obsModal.live?.liveId || "-"), 1)
                    ])
                  ]),
                  t("div", Qt, [
                    t("span", jt, i(e(_)(e(l).LIVE_TITLE)), 1),
                    t("div", Zt, [
                      t("span", Jt, i(d.value.obsModal.live?.liveName || "-"), 1)
                    ])
                  ]),
                  t("div", eo, [
                    t("span", lo, i(e(_)(e(l).LIVE_COVER)), 1),
                    t("div", to, [
                      t("span", oo, i(d.value.obsModal.live?.coverUrl || "-"), 1)
                    ])
                  ])
                ])
              ]),
              d.value.obsModal.streamInfo || d.value.obsModal.actionLoading === "stream" ? (v(), f("div", ao, [
                t("div", so, i(e(_)(e(l).PUSH_STREAM_INFO)), 1),
                t("div", io, [
                  d.value.obsModal.streamInfo ? (v(), f(W, { key: 0 }, [
                    t("div", no, [
                      t("span", ro, i(e(_)(e(l).SERVER_URL)), 1),
                      t("div", uo, [
                        t("span", co, i(d.value.obsModal.streamInfo.serverUrl), 1),
                        t("button", {
                          class: "live-info-copy-btn",
                          onClick: s[16] || (s[16] = (c) => e(u).copyText(d.value.obsModal.streamInfo.serverUrl, e(_)(e(l).SERVER_URL), "obs_server_url"))
                        }, [
                          n(e(de))
                        ])
                      ])
                    ]),
                    t("div", vo, [
                      t("span", po, i(e(_)(e(l).STREAM_KEY)), 1),
                      t("div", mo, [
                        t("span", _o, i(d.value.obsModal.streamInfo.streamKey), 1),
                        t("button", {
                          class: "live-info-copy-btn",
                          onClick: s[17] || (s[17] = (c) => e(u).copyText(d.value.obsModal.streamInfo.streamKey, e(_)(e(l).STREAM_KEY), "obs_stream_key"))
                        }, [
                          n(e(de))
                        ])
                      ])
                    ])
                  ], 64)) : (v(), f("div", fo, [
                    t("span", Eo, i(e(_)(e(l).GETTING_STREAM_INFO)), 1)
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
  Mo as default
};
