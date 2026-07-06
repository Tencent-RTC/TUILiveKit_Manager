import { ref as C, onUnmounted as tt, defineComponent as Te, resolveComponent as ee, openBlock as y, createElementBlock as w, createElementVNode as c, toDisplayString as v, unref as t, createVNode as g, withCtx as E, createTextVNode as W, computed as P, watch as Le, normalizeClass as we, onMounted as At, onBeforeUnmount as Ei, normalizeStyle as Ge, Fragment as Ee, renderList as Ne, createCommentVNode as ue, createBlock as ne, withModifiers as gi, nextTick as Je, inject as Lo, renderSlot as ht, resolveDynamicComponent as ai, withDirectives as pi, vShow as ki, mergeProps as _n, createSlots as Ea, onErrorCaptured as xo, normalizeProps as No, shallowRef as Di, h as Zt, vModelText as ko, Teleport as wn, reactive as Oi, isRef as Bn } from "vue";
import { useRouter as _i, useRoute as Do } from "vue-router";
import { SearchIcon as Cn, RefreshIcon as In, FullscreenIcon as _a, CloseIcon as Bi, SoundMuteIcon as Oo, SoundIcon as Uo, NotificationIcon as wa, StopCircleIcon as Ca, UploadIcon as Wn, ImageIcon as $o, CutIcon as Fo, ChevronDownIcon as Ui, ChevronRightIcon as Ia, AddIcon as An, CopyIcon as Dt, DeleteIcon as Po, EditIcon as $i, InfoCircleIcon as Nt, LoginIcon as Vo, CheckCircleIcon as Wi, ChatOffIcon as Aa, UserCheckedIcon as Ma, UserBlockedIcon as Sa, MoreIcon as zo, CloseCircleIcon as Go, AdjustmentIcon as Bo } from "tdesign-icons-vue-next";
import { MessagePlugin as X, Tooltip as Ct } from "tdesign-vue-next";
import { useUIKit as ke, i18next as Fi } from "@tencentcloud/uikit-base-component-vue3";
import { s as Wo, av as Ho, ax as Yo, aG as Q, H as bi, aM as jo, b as Xo, W as Ko, aZ as Ta, a$ as qo, Z as Zo, be as Hn, bL as Qo, bl as Yn, bg as Jo, bJ as es, bI as ts, bH as is, bm as ns, ap as as, bd as os, bf as ss, au as ls, Y as rs, aj as jn, aY as cs, aH as us, A as Wt, J as bt, g as Ke, b4 as ti, ah as Ra, bs as La, t as Pi, $ as ds, ak as Xn, V as Kn, as as hs, aq as qn, bG as vs, ac as ms, aJ as fs, N as gs, aT as ps, b7 as Zn, aC as bs, a1 as ys, a as Ot, bk as Es, aW as xi, a3 as _s, br as Qn, bq as Jn, b9 as ea, aL as gt, i as ws, D as Cs, r as Is, b6 as ta, p as ia, aF as As, aR as xa, aP as ii, aS as Na, n as Ht, o as Ze, l as Qe, m as hi, v as ka, w as Ut, bt as Ms, q as Ss, P as tn, d as vi, e as ot, C as st, O as Ts } from "./main-layout.CMyUtYPy.js";
import { c as Rs, s as un, D as Ls, a as xs, m as Ns, b as ks, d as Ds, e as Os, P as Us } from "./gift-category.-203nZxV.js";
import { b9 as $s, aL as Fs, c as Ps, aM as Vs, ap as zs, e as Gs, b as Bs, a3 as Ws, aT as Hs, aY as r, b2 as nn, b3 as Mn, b8 as Ys, b5 as js, i as Xs, h as Ks, D as Hi, k as qs, aR as na, X as oi, aI as Zs, W as Da, aA as Qs, Q as Oa, ax as Js, z as el, E as tl, au as aa } from "./upload.HR7xdC-w.js";
import { LiveView as il, useLoginState as Ua, useLiveAudienceState as $a, LiveAudienceList as nl, useLiveListState as al } from "tuikit-atomicx-vue3";
import { BarrageList as ol } from "tuikit-atomicx-vue3/live";
import { a as sl } from "./moderation-store.DpCJ9ZU8.js";
let ni = null;
function ll() {
  return ni || (ni = new Wo({
    onStateChange: (e) => {
      Vi && (Vi.value = e.giftList), zi && (zi.value = e.giftCategoryList);
    }
  })), ni;
}
let Vi = null, zi = null;
function Fa() {
  const e = C([]), n = C([]);
  Vi = e, zi = n;
  const i = ll();
  return e.value = i.getGiftList(), n.value = i.getGiftCategoryList(), tt(() => {
    ni && (ni.destroy(), ni = null, Vi = null, zi = null);
  }), {
    giftList: e,
    giftCategoryList: n,
    fetchGiftList: async (V) => i.fetchGiftList(V),
    createGift: async (V) => i.createGift(V),
    updateGift: async (V) => i.updateGift(V),
    deleteGift: async (V) => i.deleteGift(V),
    createGiftCategory: async (V) => i.createGiftCategory(V),
    updateGiftCategory: async (V) => i.updateGiftCategory(V),
    deleteGiftCategory: async (V) => i.deleteGiftCategory(V),
    addGiftCategoryRelations: async (V) => i.addGiftCategoryRelations(V),
    deleteGiftCategoryRelations: async (V) => i.deleteGiftCategoryRelations(V),
    getGiftLanguage: async (V) => i.getGiftLanguage(V),
    setGiftLanguage: async (V) => i.setGiftLanguage(V),
    deleteGiftLanguage: async (V) => i.deleteGiftLanguage(V),
    getGiftCategoryLanguage: async (V, Z) => i.getGiftCategoryLanguage(V, Z),
    setGiftCategoryLanguage: async (V, Z, Y, J) => i.setGiftCategoryLanguage(V, Z, Y, J),
    deleteGiftCategoryLanguage: async (V, Z) => i.deleteGiftCategoryLanguage(V, Z)
  };
}
function rl(e) {
  const { liveId: n, pageSize: i } = e, s = C(!1), o = C(0), a = C([]), l = C(0), d = C(1), u = C(!1), p = C([]), f = C([]), h = C(!1), m = C(null);
  let b = !0;
  tt(() => {
    b = !1;
  });
  const T = async () => {
    try {
      const H = await Hs();
      return b && (s.value = H > 0, o.value = H), H;
    } catch (H) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", H), H;
    }
  }, M = async (H = {}) => {
    u.value = !0;
    try {
      const D = await Ws({ pageSize: i, liveId: n, ...H });
      return b && (a.value = D.list || [], l.value = D.total || 0, d.value = H.pageNum || 1), D;
    } catch (D) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", D), D;
    } finally {
      b && (u.value = !1);
    }
  }, B = async (H) => {
    try {
      const D = H.items ?? (() => {
        const k = a.value;
        return H.ids.map((x) => {
          const R = k.find((S) => S.id === x);
          return {
            id: x,
            content: (R == null ? void 0 : R.content) ?? x,
            userId: (R == null ? void 0 : R.userId) ?? ""
          };
        });
      })();
      await Bs({ ids: H.ids, items: D, liveId: H.liveId ?? n });
    } catch (D) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", D), D;
    }
  }, $ = async (H) => {
    try {
      await Gs({ content: H.keywords.join(","), liveId: n });
    } catch (D) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", D), D;
    }
  }, V = async () => {
    if (!n) return [];
    try {
      const H = await Yo(n);
      return p.value = H, H;
    } catch (H) {
      throw m.value = H, H;
    }
  }, Z = async () => {
    if (!n) return [];
    try {
      const H = await Ho(n);
      return f.value = H, H;
    } catch (H) {
      throw m.value = H, H;
    }
  };
  return {
    textModerationAvailable: s,
    textModerationRemainUsage: o,
    textModerationList: a,
    textModerationTotal: l,
    textModerationPageNum: d,
    textModerationLoading: u,
    fetchTextModerationUsage: T,
    fetchTextModerationList: M,
    approveTextModerationItems: B,
    bypassCorrectionKeyword: $,
    muteMember: async (H) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, m.value = null;
      try {
        await zs(n, H.memberAccounts, H.muteTime), await V();
      } catch (D) {
        throw m.value = D, console.error("[useRiskControlState] muteMember failed:", D), D;
      } finally {
        h.value = !1;
      }
    },
    unmuteMember: async (H) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, m.value = null;
      try {
        await Vs(n, H.memberAccounts), await V();
      } catch (D) {
        throw m.value = D, console.error("[useRiskControlState] unmuteMember failed:", D), D;
      } finally {
        h.value = !1;
      }
    },
    banMember: async (H) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, m.value = null;
      try {
        await Ps(n, H.memberAccounts, H.duration, H.reason), await Z();
      } catch (D) {
        throw m.value = D, console.error("[useRiskControlState] banMember failed:", D), D;
      } finally {
        h.value = !1;
      }
    },
    unbanMember: async (H) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, m.value = null;
      try {
        await Fs(n, H.memberAccounts), await Z();
      } catch (D) {
        throw m.value = D, console.error("[useRiskControlState] unbanMember failed:", D), D;
      } finally {
        h.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!n) throw new Error("liveId is required");
      try {
        return await $s(n, "default", "您的内容涉嫌违规");
      } catch (H) {
        throw console.error("[useRiskControlState] sendViolationWarning failed:", H), H;
      }
    },
    mutedList: p,
    bannedList: f,
    memberLoading: h,
    memberError: m,
    fetchMutedList: V,
    fetchBannedList: Z
  };
}
const cl = { class: "monitor-header" }, ul = { class: "monitor-title-section" }, dl = { class: "monitor-title" }, hl = { class: "monitor-header-actions" }, vl = /* @__PURE__ */ Te({
  __name: "MonitorHeader",
  props: {
    searchInput: {},
    refreshing: { type: Boolean }
  },
  emits: ["update:searchInput", "search", "clearSearch", "refresh"],
  setup(e, { emit: n }) {
    const i = n, { t: s } = ke(), o = (u) => {
      i("update:searchInput", String(u ?? ""));
    }, a = () => {
      i("search");
    }, l = () => {
      i("clearSearch");
    }, d = () => {
      i("refresh");
    };
    return (u, p) => {
      const f = ee("t-input"), h = ee("t-button");
      return y(), w("div", cl, [
        c("div", ul, [
          c("h2", dl, v(t(s)(t(r).LIVE_MONITOR)), 1)
        ]),
        c("div", hl, [
          g(f, {
            "model-value": e.searchInput,
            placeholder: t(s)(t(r).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            status: t(Q)(e.searchInput) > t(bi) ? "error" : "default",
            tips: t(Q)(e.searchInput) > t(bi) ? t(s)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": o,
            onEnter: a,
            onClear: l
          }, {
            "suffix-icon": E(() => [
              g(t(Cn), {
                style: { cursor: "pointer" },
                onClick: p[0] || (p[0] = () => a())
              })
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "status", "tips"]),
          g(h, {
            theme: "primary",
            variant: "outline",
            shape: "round",
            loading: e.refreshing,
            onClick: d
          }, {
            icon: E(() => [
              g(t(In))
            ]),
            default: E(() => [
              W(" " + v(t(s)(t(r).REFRESH)), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), ci = (e, n) => {
  const i = e.__vccOpts || e;
  for (const [s, o] of n)
    i[s] = o;
  return i;
}, ml = /* @__PURE__ */ ci(vl, [["__scopeId", "data-v-85dc322f"]]), fl = ["title", "aria-label"], gl = ["src", "alt"], pl = {
  key: 1,
  class: "avatar-fallback"
}, Yi = /* @__PURE__ */ Te({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(e) {
    const n = e, i = C(""), s = C(!1), o = P(() => n.name ? `${n.name}头像` : "主播头像"), a = P(() => jo(n.name));
    Le(() => n.src, (d) => {
      i.value = d || nn, s.value = !1;
    }, { immediate: !0 });
    const l = () => {
      if (i.value !== nn) {
        i.value = nn;
        return;
      }
      s.value = !0;
    };
    return (d, u) => (y(), w("div", {
      class: we(e.className),
      title: e.title,
      "aria-label": o.value
    }, [
      i.value && !s.value ? (y(), w("img", {
        key: 0,
        src: i.value,
        alt: o.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: l
      }, null, 40, gl)) : (y(), w("span", pl, v(a.value), 1))
    ], 10, fl));
  }
}), bl = ["id"], yl = ["id"], El = ["title"], _l = {
  key: 0,
  class: "tag-more-wrapper"
}, wl = { class: "live-card-tag-dropdown" }, Cl = { class: "overlay-btn primary" }, Il = { class: "live-card-info" }, Al = ["title"], Ml = { class: "live-card-meta" }, Sl = { class: "live-card-anchor" }, Tl = ["title"], Rl = ["title"], Ll = /* @__PURE__ */ Te({
  __name: "LiveCard",
  props: {
    card: {},
    adaptiveResult: {},
    isMuted: { type: Boolean, default: !1 },
    isFullscreen: { type: Boolean },
    fullscreenLiveId: {},
    anchorAvatar: {},
    anchorName: {}
  },
  emits: ["viewDetails", "violationWarning", "forceStop", "toggleMute", "exitFullscreen", "hover", "playError"],
  setup(e, { emit: n }) {
    const i = e, s = n, { t: o } = ke(), { startPlay: a, stopPlay: l } = Ft(), d = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, u = C(!1), p = C("");
    let f = 0;
    const h = P(() => i.isFullscreen && i.fullscreenLiveId === i.card.liveId), m = P(() => i.card.tags.slice(0, i.adaptiveResult.visibleCount)), b = P(() => i.card.tags.slice(i.adaptiveResult.visibleCount)), T = P(() => {
      var D;
      return ((D = i.card.stats) == null ? void 0 : D.viewCount) ?? 0;
    }), M = P(() => `live_monitor_view_${i.card.liveId}`), B = async () => {
      const D = i.card.liveId;
      if (console.log("[LiveCard] startCardPlay called", { liveId: D, isMockMode: d }), d || !D) {
        console.log("[LiveCard] Skipping play", { isMockMode: d, liveId: D });
        return;
      }
      const k = ++f;
      if (await Je(), k !== f) {
        console.log("[LiveCard] Version mismatch, aborting", { currentVersion: k, playVersion: f });
        return;
      }
      try {
        console.log("[LiveCard] Calling startPlay", { liveId: D, containerId: M.value }), await a({ liveId: D, containerId: M.value }), k === f && (p.value = D, console.log("[LiveCard] startPlay success", { liveId: D }));
      } catch (x) {
        console.error("[LiveCard] startPlay failed", { liveId: D, error: x }), k === f && s("playError", x, D);
      }
    }, $ = async (D = p.value || i.card.liveId) => {
      f += 1, !(d || !D) && (p.value === D && (p.value = ""), await l(D).catch(() => {
      }));
    };
    At(() => {
      B();
    }), Le(
      () => i.card.liveId,
      async (D, k) => {
        k && k !== D && await $(k), B();
      }
    ), Ei(() => {
      $();
    });
    const V = () => {
      u.value = !0, s("hover", i.card.liveId);
    }, Z = () => {
      u.value = !1, s("hover", null);
    }, Y = () => {
      console.log("[LiveCard] handleViewDetails called, liveId:", i.card.liveId), s("viewDetails", i.card.liveId);
    }, J = (D) => {
      console.log("[LiveCard] handleCardClick called");
      const k = D.target;
      !k.closest(".live-card-actions") && !k.closest(".fullscreen-close") && !k.closest(".fullscreen-mute") && (console.log("[LiveCard] emitting viewDetails from handleCardClick, liveId:", i.card.liveId), s("viewDetails", i.card.liveId));
    }, oe = () => {
      s("violationWarning", i.card.liveId, i.card.liveName || o(r.UNNAMED_LIVE));
    }, de = () => {
      s("forceStop", i.card.liveId, i.card.liveName || o(r.UNNAMED_LIVE));
    }, fe = () => {
      s("toggleMute", i.card.liveId);
    }, H = () => {
      s("exitFullscreen");
    };
    return (D, k) => {
      const x = ee("t-button");
      return y(), w("div", {
        class: we(["live-card", { hovered: u.value }]),
        onMouseenter: V,
        onMouseleave: Z,
        onClick: J
      }, [
        c("div", {
          id: e.card.liveId,
          class: "live-video-container"
        }, [
          c("div", {
            class: "live-video-bg",
            style: Ge({
              backgroundImage: `url(${e.card.backgroundUrl || e.card.coverUrl || t(Mn)})`
            })
          }, null, 4),
          c("div", {
            id: M.value,
            class: "live-video-player"
          }, null, 8, yl),
          c("div", {
            class: "live-id-badge",
            style: Ge({ maxWidth: e.adaptiveResult.idMaxWidth })
          }, [
            c("span", {
              title: e.card.liveId
            }, v(`${t(o)(t(r).LIVE_ID)}: ${e.card.liveId}`), 9, El)
          ], 4),
          e.card.tags && e.card.tags.length > 0 ? (y(), w("div", {
            key: 0,
            class: "live-card-tags-overlay",
            style: Ge({ maxWidth: e.adaptiveResult.tagsMaxWidth })
          }, [
            (y(!0), w(Ee, null, Ne(m.value, (R) => (y(), w("span", {
              key: R,
              class: "live-card-tag-overlay"
            }, [
              k[0] || (k[0] = c("svg", {
                class: "shield-icon",
                viewBox: "0 0 24 24",
                width: "14",
                height: "14"
              }, [
                c("path", {
                  d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                  fill: "white",
                  stroke: "white",
                  "stroke-width": "0.5"
                }),
                c("text", {
                  x: "12",
                  y: "16",
                  "text-anchor": "middle",
                  fill: "#f59e0b",
                  "font-size": "12",
                  "font-weight": "bold"
                }, "!")
              ], -1)),
              W(" " + v(t(o)(R)), 1)
            ]))), 128)),
            e.adaptiveResult.showMore ? (y(), w("div", _l, [
              k[2] || (k[2] = c("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              c("div", wl, [
                (y(!0), w(Ee, null, Ne(b.value, (R) => (y(), w("span", {
                  key: R,
                  class: "live-card-tag-overlay"
                }, [
                  k[1] || (k[1] = c("svg", {
                    class: "shield-icon",
                    viewBox: "0 0 24 24",
                    width: "14",
                    height: "14"
                  }, [
                    c("path", {
                      d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                      fill: "white",
                      stroke: "white",
                      "stroke-width": "0.5"
                    }),
                    c("text", {
                      x: "12",
                      y: "16",
                      "text-anchor": "middle",
                      fill: "#f59e0b",
                      "font-size": "12",
                      "font-weight": "bold"
                    }, "!")
                  ], -1)),
                  W(" " + v(t(o)(R)), 1)
                ]))), 128))
              ])
            ])) : ue("", !0)
          ], 4)) : ue("", !0),
          c("div", {
            class: "live-video-overlay",
            onClick: Y
          }, [
            c("div", Cl, [
              g(t(_a)),
              W(" " + v(t(o)(t(r).VIEW_DETAILS)), 1)
            ])
          ]),
          h.value ? (y(), w(Ee, { key: 1 }, [
            c("button", {
              class: "fullscreen-close",
              onClick: H
            }, [
              g(t(Bi))
            ]),
            c("button", {
              class: "fullscreen-mute",
              onClick: fe
            }, [
              e.isMuted ? (y(), ne(t(Oo), { key: 0 })) : (y(), ne(t(Uo), { key: 1 }))
            ])
          ], 64)) : ue("", !0)
        ], 8, bl),
        c("div", Il, [
          c("div", {
            class: "live-card-title",
            title: e.card.liveName || t(o)(t(r).UNNAMED_LIVE)
          }, v(e.card.liveName || t(o)(t(r).UNNAMED_LIVE)), 9, Al),
          c("div", Ml, [
            c("div", Sl, [
              g(Yi, {
                "class-name": "anchor-avatar",
                src: e.anchorAvatar,
                name: e.anchorName,
                title: e.anchorName
              }, null, 8, ["src", "name", "title"]),
              c("span", {
                class: "anchor-name",
                title: e.anchorName
              }, v(e.anchorName), 9, Tl)
            ]),
            c("span", {
              class: "meta-viewer-count",
              title: String(T.value)
            }, v(`${T.value}${t(o)(t(r).VIEWS)}`), 9, Rl)
          ])
        ]),
        c("div", {
          class: we(["live-card-actions", { show: u.value }])
        }, [
          g(x, {
            class: "action-btn warn",
            variant: "text",
            onClick: gi(oe, ["stop"])
          }, {
            icon: E(() => [
              g(t(wa))
            ]),
            default: E(() => [
              c("span", null, v(t(o)(t(r).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          g(x, {
            class: "action-btn close full",
            variant: "text",
            onClick: gi(de, ["stop"])
          }, {
            icon: E(() => [
              g(t(Ca))
            ]),
            default: E(() => [
              c("span", null, v(t(o)(t(r).FORCE_STOP)), 1)
            ]),
            _: 1
          })
        ], 2)
      ], 34);
    };
  }
}), xl = { class: "live-monitor-pagination" }, Nl = { class: "page-info" }, kl = /* @__PURE__ */ Te({
  __name: "MonitorPagination",
  props: {
    currentPage: {},
    hasMoreData: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["goToFirstPage", "prevPage", "nextPage"],
  setup(e, { emit: n }) {
    const i = e, s = n, { t: o } = ke(), a = P(() => o(r.PAGE, { page: i.currentPage })), l = () => s("goToFirstPage"), d = () => s("prevPage"), u = () => s("nextPage");
    return (p, f) => {
      const h = ee("t-button");
      return y(), w("div", xl, [
        g(h, {
          variant: "outline",
          size: "small",
          disabled: e.currentPage <= 1 || e.loading,
          onClick: l
        }, {
          default: E(() => [
            W(v(t(o)(t(r).FIRST_PAGE)), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        g(h, {
          variant: "outline",
          size: "small",
          disabled: e.currentPage <= 1 || e.loading,
          onClick: d
        }, {
          default: E(() => [
            W(v(t(o)(t(r).PREVIOUS_PAGE)), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        c("span", Nl, v(a.value), 1),
        g(h, {
          variant: "outline",
          size: "small",
          disabled: !e.hasMoreData || e.loading,
          onClick: u
        }, {
          default: E(() => [
            W(v(t(o)(t(r).NEXT_PAGE)), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
}), Pa = /* @__PURE__ */ Te({
  __name: "ViolationWarningDialog",
  props: {
    visible: { type: Boolean },
    liveId: { default: "" },
    liveName: { default: "" }
  },
  emits: ["update:visible", "confirm", "cancel"],
  setup(e, { emit: n }) {
    const i = e, s = n, { t: o } = ke(), a = C(!1), l = () => {
      a.value = !1, s("update:visible", !1);
    }, d = async () => {
      if (!(a.value || !i.liveId)) {
        a.value = !0;
        try {
          await Ys(i.liveId, {
            violationType: "warning",
            violationContent: `直播间 "${i.liveName || i.liveId}" 收到违规警告，请立即整改`,
            handleSuggestion: "请遵守平台规则，删除违规内容"
          }), X.success(o(r.VIOLATION_WARNING_SENT)), s("confirm", { liveId: i.liveId, liveName: i.liveName }), l();
        } catch (p) {
          console.error("发送违规警告失败:", p), X.error(o(r.SEND_FAILED)), a.value = !1;
        }
      }
    }, u = () => {
      a.value || (s("cancel"), l());
    };
    return (p, f) => {
      const h = ee("t-dialog");
      return y(), ne(h, {
        visible: e.visible,
        header: t(o)(t(r).VIOLATION_WARNING_SEND_CONFIRM),
        "confirm-btn": {
          content: a.value ? t(o)(t(r).SENDING) : t(o)(t(r).CONFIRM),
          loading: a.value,
          theme: "warning",
          shape: "round"
        },
        "cancel-btn": {
          content: t(o)(t(r).CANCEL),
          disabled: a.value,
          shape: "round"
        },
        onConfirm: d,
        onCancel: u,
        onClose: u
      }, {
        default: E(() => [
          c("p", null, v(t(o)(t(r).VIOLATION_WARNING_CONFIRM_CONTENT)), 1)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
});
function Dl(e, n) {
  const i = C(/* @__PURE__ */ new Map()), s = new Xo({
    containerSelector: ".live-monitor-grid",
    t: n
  }), o = () => {
    i.value = new Map(s.getCache());
  }, a = (f) => {
    const h = s.getResult(f);
    return s.cache.has(f) || Je(() => {
      const m = e(), b = m == null ? void 0 : m.find((T) => T.liveId === f);
      b && b.tags && (s.compute(f, { liveId: f, tags: b.tags }), o());
    }), h;
  };
  return {
    adaptiveTagMap: i,
    getAdaptiveResult: a,
    getVisibleTags: (f, h) => {
      const m = a(h);
      return f.slice(0, m.visibleCount);
    },
    initResizeObserver: () => {
      s.observe(() => {
        o();
      });
    },
    cleanupResizeObserver: () => {
      s.disconnect();
    },
    initAdaptiveTags: (f) => {
      s.initForList(
        f.map((h) => ({
          liveId: String(h.liveId ?? ""),
          tags: Array.isArray(h.tags) ? h.tags : []
        }))
      ), o();
    }
  };
}
const Ol = 600 * 1e3;
function Ul(e, n) {
  const { t: i } = ke(), { stopPlay: s } = n, o = C(!1), a = C(!1), l = C(!1), d = C(!1), u = C(""), p = C(/* @__PURE__ */ new Map());
  let f = null, h = "";
  const m = C(/* @__PURE__ */ new Set()), b = C(!1), T = () => {
    f && (clearTimeout(f), f = null);
  }, M = (...S) => {
    const O = [];
    for (const N of S)
      for (const L of N || [])
        L && !O.includes(L) && O.push(L);
    return O;
  }, B = (S) => String(S.liveId || S.id || S.RoomId || ""), $ = () => {
    const S = /* @__PURE__ */ new Date(), O = new Date(S.getTime() - 3600 * 1e3), N = (L) => {
      const A = L.getFullYear(), ie = String(L.getMonth() + 1).padStart(2, "0"), he = String(L.getDate()).padStart(2, "0"), ve = String(L.getHours()).padStart(2, "0"), ae = String(L.getMinutes()).padStart(2, "0"), U = String(L.getSeconds()).padStart(2, "0");
      return `${A}-${ie}-${he} ${ve}:${ae}:${U}`;
    };
    return {
      startTime: N(O),
      endTime: N(S)
    };
  }, V = async (S, O) => {
    const N = Array.from(new Set(S.slice(0, 8).map((L) => L.liveId).filter(Boolean)));
    if (!(N.length === 0 || d.value)) {
      T(), h = O;
      try {
        const { startTime: L, endTime: A } = $(), ie = await js(N, 10, L, A);
        if (b.value || h !== O) return;
        const he = new Map(p.value);
        N.forEach((ve) => {
          he.set(ve, ie.get(ve) || []);
        }), p.value = he;
      } catch (L) {
        console.warn("[LiveMonitor] 获取直播间违规标签失败:", L);
      } finally {
        !b.value && h === O && !d.value && (f = setTimeout(() => {
          V(S, O);
        }, Ol));
      }
    }
  };
  Le(
    () => [...e.pageData.value || []].map((S) => [S.liveId, S.liveName, S.activityStatus].join(":")).join("|"),
    (S, O) => {
      if (!S || b.value || d.value) return;
      const N = e.pageData.value || [];
      if (N.length === 0) return;
      const L = `${e.currentPage.value}:${S}`;
      V(N, L);
    }
  ), Le(
    () => {
      var S;
      return [e.loading.value, (S = e.pageData.value) == null ? void 0 : S.length];
    },
    ([S, O]) => {
      S || (o.value = (O || 0) > 0);
    },
    { immediate: !0 }
  );
  const Z = async (S, O, N) => {
    !O && N <= 1 && S > 1 ? await e.prevPage() : await e.refreshCurrentPage();
  }, Y = async () => {
    const S = Array.from(m.value);
    m.value.clear(), S.length > 0 && await Promise.all(
      S.map(
        (O) => s(O).catch((N) => {
          console.error("停止直播预览失败:", O, N);
        })
      )
    );
  }, J = async () => {
    await Y(), await e.prevPage();
    const S = e.pageData.value || [];
    m.value = new Set(S.map((O) => O.liveId));
  }, oe = async () => {
    await Y(), await e.nextPage();
    const S = e.pageData.value || [];
    m.value = new Set(S.map((O) => O.liveId));
  }, de = async () => {
    await Y(), await e.goToFirstPage();
    const S = e.pageData.value || [];
    m.value = new Set(S.map((O) => O.liveId));
  }, fe = async (S) => {
    var L;
    const O = String(S ?? u.value).trim();
    if (!O) return;
    if (Q(O) > bi) {
      X.error(i(r.INPUT_TOO_LONG));
      return;
    }
    u.value !== O && (u.value = O);
    const N = O;
    T(), a.value = !0;
    try {
      const { fetchLiveDetail: A } = Ft(), ie = await A(N);
      if (b.value) return;
      if (!ie) {
        X.error(i("No search results for", { keyword: O })), await H();
        return;
      }
      d.value = !0;
      const he = ie.liveId;
      if (m.value.add(he), b.value) {
        await s(he);
        return;
      }
      X.success(r.SEARCH_SUCCESS);
    } catch (A) {
      console.error("搜索直播间失败:", A);
      const ie = A;
      if (A === 2025 || A === 70005 || typeof ie != "number" && ((L = ie.message) != null && L.includes("USER_SIG_ILLEGAL"))) {
        Xs(), Ks(), localStorage.removeItem("tuiLiveMonitor-userInfo"), require("vue-router").useRouter().push("/config-required");
        return;
      }
      X.error(i("No search results for", { keyword: O })), await H();
    } finally {
      b.value || (a.value = !1);
    }
  }, H = async () => {
    u.value = "", d.value = !1, await Y(), await e.goToFirstPage();
  }, D = async () => {
    if (!(l.value || e.loading.value)) {
      l.value = !0;
      try {
        d.value && (d.value = !1, u.value = ""), await Y(), await e.refreshCurrentPage();
      } catch (S) {
        console.error("刷新失败:", S);
        const O = S, N = O.ErrorInfo || O.errorInfo || "";
        X.error(`${i(r.REFRESH_FAILED)}${N ? ` (${N})` : ""}`);
      } finally {
        b.value || (l.value = !1);
      }
    }
  }, k = P(() => e.currentPage.value), x = P(() => e.hasMore.value), R = P(() => e.loading.value);
  return tt(() => {
    b.value = !0, T(), Y();
  }), {
    // 分页状态（响应式 computed）
    currentPage: k,
    hasMoreData: x,
    loading: R,
    // 业务状态
    hasLiveData: o,
    searching: a,
    refreshing: l,
    isSearchMode: d,
    searchInput: u,
    liveViolationLabelMap: p,
    playingLiveIds: m,
    isUnmounted: b,
    // 方法
    handlePrevPage: J,
    handleNextPage: oe,
    handleGoToFirstPage: de,
    handleSearch: fe,
    handleClearSearch: H,
    handleRefresh: D,
    stopAllPlayingLives: Y,
    handleCloseLiveSuccess: Z,
    mergeTags: M,
    resolveLiveId: B
  };
}
const $l = { class: "live-monitor-page" }, Fl = { class: "live-monitor-grid" }, Pl = {
  key: 0,
  class: "monitor-loading"
}, Vl = {
  key: 1,
  class: "monitor-empty"
}, zl = { class: "empty-icon" }, Gl = /* @__PURE__ */ Te({
  __name: "live-monitor",
  setup(e) {
    var ge;
    const n = _i(), { t: i } = ke();
    (ge = Hi().components) == null || ge.liveMonitor;
    const { init: s, liveList: o, endLive: a, stopPlay: l, paginatedList: d } = Ft(), u = Lo("sdkReady", null), p = C(!1), f = C(""), h = C(null), m = C(0), b = C({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), T = C({
      visible: !1,
      liveId: "",
      liveName: ""
    }), {
      getAdaptiveResult: M,
      initResizeObserver: B,
      cleanupResizeObserver: $,
      initAdaptiveTags: V
    } = Dl(() => ve.value, i), {
      currentPage: Z,
      hasMoreData: Y,
      loading: J,
      hasLiveData: oe,
      refreshing: de,
      searchInput: fe,
      liveViolationLabelMap: H,
      playingLiveIds: D,
      isUnmounted: k,
      handlePrevPage: x,
      handleNextPage: R,
      handleGoToFirstPage: S,
      handleSearch: O,
      handleClearSearch: N,
      handleRefresh: L,
      stopAllPlayingLives: A,
      handleCloseLiveSuccess: ie,
      mergeTags: he
    } = Ul(
      d,
      { stopPlay: l }
    ), ve = P(() => (o.value || []).map((me) => {
      const Ve = me.tags || [], Re = he(Ve, H.value.get(me.liveId));
      return {
        ...me,
        tags: Re
      };
    })), ae = P(
      () => (o.value || []).map((le) => {
        var me;
        return [
          le.liveId,
          le.liveName,
          le.coverUrl,
          le.onlineCount,
          (me = le.stats) == null ? void 0 : me.viewCount,
          le.popularity,
          le.activityStatus,
          le.createdAt
        ].join(":");
      }).join("|")
    );
    Le(ae, () => {
      m.value += 1;
    });
    const U = (le, me) => {
      T.value = { visible: !0, liveId: le, liveName: me };
    }, ce = (le, me) => {
      b.value = { visible: !0, liveId: le, liveName: me, closing: !1 };
    }, _e = async () => {
      const { liveId: le } = b.value;
      if (le) {
        b.value.closing = !0;
        try {
          await l(le), D.value.delete(le), await a(le), b.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, X.success(i(r.LIVE_FORCIBLY_CLOSED)), await ie(Z, Y, (o.value || []).length);
        } catch (me) {
          console.error("封禁房间失败:", me), b.value.closing = !1;
        }
      }
    }, Oe = () => {
      b.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, xe = (le) => {
      console.log("handleClickDetails called with liveId:", le);
      try {
        sessionStorage.setItem("liveMonitor_currentPage", String(Z));
      } catch {
      }
      console.log("Navigating to:", `/live-control/${le}`), n.push(`/live-control/${le}`);
    }, je = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, Xe = async () => {
      document.fullscreenElement ? p.value = !0 : (p.value = !1, f.value = "");
    }, ct = () => (le) => ({
      id: `mock-player-${le}`,
      on: () => {
      },
      off: () => {
      },
      play: async (me, Ve) => {
        await Je();
        const Re = document.getElementById(Ve);
        Re && (Re.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.78);font-size:14px;background:linear-gradient(135deg,rgba(15,52,96,.72),rgba(26,26,46,.72));">Mock Live</div>');
      },
      stop: async () => {
      },
      muteAudio: async () => {
      },
      destroy: async () => {
      },
      getPlayerInfo: () => ({ liveId: le, state: "PLAYING" })
    }), pe = async () => {
      try {
        const le = await qs();
        if (le && le.sdkAppId !== 0)
          try {
            const Ve = Rs({
              sdkAppId: le.sdkAppId,
              userId: le.userId,
              userSig: le.userSig
            });
            s({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: le.sdkAppId,
                userId: le.userId,
                password: le.userSig
              },
              playerFactory: Ve
            }), (!u || u.value) && await d.goToFirstPage();
          } catch (me) {
            console.error("[LiveMonitor] SDK init error:", me);
          }
        else
          console.warn("[LiveMonitor] createBasicAccount failed or sdkAppId is 0:", le);
      } catch (le) {
        console.error("[LiveMonitor] initSDK outer error:", le);
      }
    };
    return u && Le(() => u.value, (le) => {
      le && d.goToFirstPage();
    }), At(() => {
      document.addEventListener("fullscreenchange", Xe), B(), V(ve.value || []), pe();
    }), tt(() => {
      k.value = !0, document.removeEventListener("fullscreenchange", Xe), $(), A();
    }), (le, me) => {
      const Ve = ee("t-dialog");
      return y(), w("div", $l, [
        g(ml, {
          "search-input": t(fe),
          refreshing: t(de),
          "onUpdate:searchInput": me[0] || (me[0] = (Re) => fe.value = Re),
          onSearch: t(O),
          onClearSearch: t(N),
          onRefresh: t(L)
        }, null, 8, ["search-input", "refreshing", "onSearch", "onClearSearch", "onRefresh"]),
        c("div", Fl, [
          t(J) ? (y(), w("div", Pl, [
            me[4] || (me[4] = c("div", { class: "loading-spinner" }, null, -1)),
            c("span", null, v(t(i)(t(r).LOADING)), 1)
          ])) : t(oe) ? (y(!0), w(Ee, { key: 2 }, Ne(ve.value, (Re) => {
            var mt, at;
            return y(), ne(Ll, {
              key: `${m.value}:${Re.liveId}`,
              card: Re,
              "adaptive-result": t(M)(Re.liveId),
              "is-muted": Re.isMuted ?? !1,
              "is-fullscreen": p.value,
              "fullscreen-live-id": f.value,
              "anchor-avatar": ((mt = Re.anchor) == null ? void 0 : mt.avatarUrl) || "",
              "anchor-name": ((at = Re.anchor) == null ? void 0 : at.nick) || "",
              onViewDetails: xe,
              onViolationWarning: U,
              onForceStop: ce,
              onExitFullscreen: je,
              onHover: me[1] || (me[1] = (F) => h.value = F)
            }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]);
          }), 128)) : (y(), w("div", Vl, [
            c("div", zl, [
              g(t(_a))
            ]),
            c("p", null, v(t(i)(t(r).NO_LIVE_RIGHT_NOW)), 1)
          ]))
        ]),
        g(kl, {
          "current-page": t(Z),
          "has-more-data": t(Y),
          loading: t(J),
          onGoToFirstPage: t(S),
          onPrevPage: t(x),
          onNextPage: t(R)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"]),
        g(Ve, {
          visible: b.value.visible,
          "onUpdate:visible": me[2] || (me[2] = (Re) => b.value.visible = Re),
          header: t(i)(t(r).CONFIRM_FORCE_STOP),
          "confirm-btn": { content: b.value.closing ? t(i)(t(r).CLOSING) : t(i)(t(r).CONFIRM_BAN_LIVE), loading: b.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: t(i)(t(r).CANCEL), disabled: b.value.closing, shape: "round" },
          onConfirm: _e,
          onCancel: Oe
        }, {
          default: E(() => [
            c("p", null, v(t(i)(t(r).FORCE_STOP_WARNING)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        g(Pa, {
          visible: T.value.visible,
          "onUpdate:visible": me[3] || (me[3] = (Re) => T.value.visible = Re),
          "live-id": T.value.liveId,
          "live-name": T.value.liveName
        }, null, 8, ["visible", "live-id", "live-name"])
      ]);
    };
  }
}), vm = /* @__PURE__ */ ci(Gl, [["__scopeId", "data-v-b18dc1d7"]]);
function oa(e, n) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    n && (s = s.filter((function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    }))), i.push.apply(i, s);
  }
  return i;
}
function Ie(e) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? oa(Object(i), !0).forEach((function(s) {
      lt(e, s, i[s]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : oa(Object(i)).forEach((function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s));
    }));
  }
  return e;
}
function lt(e, n, i) {
  return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e;
}
function Bl(e, n) {
  if (e == null) return {};
  var i, s, o = (function(l, d) {
    if (l == null) return {};
    var u, p, f = {}, h = Object.keys(l);
    for (p = 0; p < h.length; p++) u = h[p], d.indexOf(u) >= 0 || (f[u] = l[u]);
    return f;
  })(e, n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++) i = a[s], n.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
  }
  return o;
}
function Yt(e) {
  return (function(n) {
    if (Array.isArray(n)) return an(n);
  })(e) || (function(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  })(e) || (function(n, i) {
    if (n) {
      if (typeof n == "string") return an(n, i);
      var s = Object.prototype.toString.call(n).slice(8, -1);
      if (s === "Object" && n.constructor && (s = n.constructor.name), s === "Map" || s === "Set") return Array.from(n);
      if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return an(n, i);
    }
  })(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function an(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var i = 0, s = new Array(n); i < n; i++) s[i] = e[i];
  return s;
}
var sa, Wl, Ii, Pe = (sa = function(e) {
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  (function() {
    var n = {}.hasOwnProperty;
    function i() {
      for (var s = [], o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        if (a) {
          var l = typeof a;
          if (l === "string" || l === "number") s.push(a);
          else if (Array.isArray(a)) {
            if (a.length) {
              var d = i.apply(null, a);
              d && s.push(d);
            }
          } else if (l === "object") if (a.toString === Object.prototype.toString) for (var u in a) n.call(a, u) && a[u] && s.push(u);
          else s.push(a.toString());
        }
      }
      return s.join(" ");
    }
    e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
  })();
}, sa(Ii = { path: Wl, exports: {}, require: function(e, n) {
  return (function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  })(n == null && Ii.path);
} }, Ii.exports), Ii.exports), vt = function(e) {
  return function(n, i) {
    if (!n) return e;
    var s;
    typeof n == "string" ? s = n : i = n;
    var o = e;
    return s && (o += "__" + s), o + (i ? Object.keys(i).reduce((function(a, l) {
      var d = i[l];
      return d && (a += " " + (typeof d == "boolean" ? o + "--" + l : o + "--" + l + "_" + d)), a;
    }), "") : "");
  };
};
function dn(e, n, i) {
  var s, o, a, l, d;
  function u() {
    var f = Date.now() - l;
    f < n && f >= 0 ? s = setTimeout(u, n - f) : (s = null, i || (d = e.apply(a, o), a = o = null));
  }
  n == null && (n = 100);
  var p = function() {
    a = this, o = arguments, l = Date.now();
    var f = i && !s;
    return s || (s = setTimeout(u, n)), f && (d = e.apply(a, o), a = o = null), d;
  };
  return p.clear = function() {
    s && (clearTimeout(s), s = null);
  }, p.flush = function() {
    s && (d = e.apply(a, o), a = o = null, clearTimeout(s), s = null);
  }, p;
}
dn.debounce = dn;
var hn = dn, re = function() {
  return re = Object.assign || function(e) {
    for (var n, i = 1, s = arguments.length; i < s; i++) for (var o in n = arguments[i]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    return e;
  }, re.apply(this, arguments);
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Va(e, n) {
  var i, s;
  return e && n ? (i = "" + e + n[0].toUpperCase() + n.slice(1), s = e + "-" + n) : (i = e || n, s = e || n), { name: i, classname: s };
}
function za(e) {
  return /^blob:/.test(e);
}
function la(e) {
  return za(e) || (function(n) {
    return /^data:/.test(n);
  })(e);
}
function Qt(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function ze(e) {
  return e === void 0;
}
function Ni(e) {
  return typeof e == "object" && e !== null;
}
function vn(e, n, i) {
  var s = {};
  return Ni(e) ? (Object.keys(n).forEach((function(o) {
    ze(e[o]) ? s[o] = n[o] : Ni(n[o]) ? Ni(e[o]) ? s[o] = vn(e[o], n[o], i[o]) : s[o] = e[o] ? n[o] : i[o] : n[o] === !0 || n[o] === !1 ? s[o] = !!e[o] : s[o] = e[o];
  })), s) : e ? n : i;
}
function Ai(e) {
  var n = Number(e);
  return Number.isNaN(n) ? e : n;
}
function ra(e) {
  return typeof (e == "number" || /* @__PURE__ */ (function(n) {
    return typeof n == "object" && n !== null;
  })(e) && toString.call(e) == "[object Number]") && !Ga(e);
}
function Ga(e) {
  return e != e;
}
function Ba(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
var fi = function(e, n) {
  e === void 0 && (e = {}), n === void 0 && (n = {}), this.type = "manipulateImage", this.move = e, this.scale = n;
}, Hl = function(e, n) {
  n === void 0 && (n = {}), this.type = "resize", this.directions = e, this.params = n;
}, Sn = function(e) {
  this.type = "move", this.directions = e;
}, Yl = (function() {
  function e(n, i, s, o, a) {
    this.type = "drag", this.nativeEvent = n, this.position = s, this.previousPosition = o, this.element = i, this.anchor = a;
  }
  return e.prototype.shift = function() {
    var n = this, i = n.element, s = n.anchor, o = n.position;
    if (i) {
      var a = i.getBoundingClientRect(), l = a.left, d = a.top;
      return { left: o.left - l - s.left, top: o.top - d - s.top };
    }
    return { left: 0, top: 0 };
  }, e;
})(), Tn = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  if (!this.$refs.draggable) throw new Error('You should add ref "draggable" to your root element to use draggable mixin');
  this.touches = [], this.hovered = !1;
}, methods: { onMouseOver: function() {
  this.hovered || (this.hovered = !0, this.$emit("enter"));
}, onMouseLeave: function() {
  this.hovered && !this.touches.length && (this.hovered = !1, this.$emit("leave"));
}, onTouchStart: function(e) {
  e.cancelable && !this.disabled && e.touches.length === 1 && (this.touches = Yt(e.touches), this.hovered || (this.$emit("enter"), this.hovered = !0), e.touches.length && this.initAnchor(this.touches.reduce((function(n, i) {
    return { clientX: n.clientX + i.clientX / e.touches.length, clientY: n.clientY + i.clientY / e.touches.length };
  }), { clientX: 0, clientY: 0 })), e.preventDefault && e.preventDefault(), e.stopPropagation());
}, onTouchEnd: function() {
  this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length && (this.processMove(e, e.touches), e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation());
}, onMouseDown: function(e) {
  if (!this.disabled) {
    var n = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [n], this.initAnchor(n), e.stopPropagation();
  }
}, onMouseMove: function(e) {
  this.touches.length && (this.processMove(e, [{ fake: !0, clientX: e.clientX, clientY: e.clientY }]), e.preventDefault && e.preventDefault());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(e) {
  var n = this.$refs.draggable.getBoundingClientRect(), i = n.left, s = n.right, o = n.bottom, a = n.top;
  this.anchor = { left: e.clientX - i, top: e.clientY - a, bottom: o - e.clientY, right: s - e.clientX };
}, processMove: function(e, n) {
  var i = Yt(n);
  if (this.touches.length) {
    if (this.touches.length === 1 && i.length === 1) {
      var s = this.$refs.draggable;
      this.$emit("drag", new Yl(e, s, { left: i[0].clientX, top: i[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
Tn.render = function(e, n, i, s, o, a) {
  return y(), ne("div", { ref: "draggable", class: i.classname, onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onMouseover: n[3] || (n[3] = function() {
    return a.onMouseOver && a.onMouseOver.apply(a, arguments);
  }), onMouseleave: n[4] || (n[4] = function() {
    return a.onMouseLeave && a.onMouseLeave.apply(a, arguments);
  }) }, [ht(e.$slots, "default")], 34);
};
var on = vt("vue-handler-wrapper"), Wa = { name: "HandlerWrapper", components: { DraggableElement: Tn }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var n, i = Va(this.horizontalPosition, this.verticalPosition);
    e = on((lt(n = {}, i.classname, !0), lt(n, "disabled", this.disabled), n));
  } else e = on({ disabled: this.disabled });
  return { root: e, draggable: on("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Wa.render = function(e, n, i, s, o, a) {
  var l = ee("DraggableElement");
  return y(), ne("div", { class: a.classes.root }, [g(l, { class: a.classes.draggable, onDrag: n[1] || (n[1] = function(d) {
    return e.$emit("drag", d);
  }), onDragEnd: n[2] || (n[2] = function(d) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(d) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(d) {
    return e.$emit("enter");
  }) }, { default: E((function() {
    return [ht(e.$slots, "default")];
  })), _: 3 }, 8, ["class"])], 2);
};
var jl = vt("vue-line-wrapper"), Ha = { name: "LineWrapper", components: { DraggableElement: Tn }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return jl((lt(e = {}, this.position, !0), lt(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ha.render = function(e, n, i, s, o, a) {
  var l = ee("DraggableElement");
  return y(), ne(l, { class: a.classname, onDrag: n[1] || (n[1] = function(d) {
    return e.$emit("drag", d);
  }), onDragEnd: n[2] || (n[2] = function(d) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(d) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(d) {
    return e.$emit("enter");
  }) }, { default: E((function() {
    return [ht(e.$slots, "default")];
  })), _: 3 }, 8, ["class"]);
};
var yt = ["left", "right", "top", "bottom"], Xl = ["left", "right"], Kl = ["top", "bottom"], ql = ["left", "top"], Zl = ["fill-area", "fit-area", "stencil", "none"], ca = { left: 0, top: 0, width: 0, height: 0 };
function ua(e, n, i) {
  return !(i = i || ["width", "height", "left", "top"]).some((function(s) {
    return e[s] !== n[s];
  }));
}
function _t(e) {
  return { left: e.left, top: e.top, right: e.left + e.width, bottom: e.top + e.height };
}
function si(e, n) {
  return { left: e.left - n.left, top: e.top - n.top };
}
function He(e) {
  return { left: e.left + e.width / 2, top: e.top + e.height / 2 };
}
function yi(e, n) {
  var i = { left: 0, top: 0, right: 0, bottom: 0 };
  return yt.forEach((function(s) {
    var o = n[s], a = _t(e)[s];
    i[s] = o !== void 0 && a !== void 0 ? s === "left" || s === "top" ? Math.max(0, o - a) : Math.max(0, a - o) : 0;
  })), i;
}
function pt(e, n) {
  return { left: e.left - n.left, top: e.top - n.top, width: e.width + n.left + n.right, height: e.height + n.top + n.bottom };
}
function ji(e) {
  return { left: -e.left, top: -e.top };
}
function et(e, n) {
  return re(re({}, e), { left: e.left + n.left, top: e.top + n.top });
}
function rt(e, n, i, s) {
  if (n !== 1) {
    if (i) {
      var o = He(e);
      return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2 + (i.left - o.left) * (1 - n), top: e.top + e.height * (1 - n) / 2 + (i.top - o.top) * (1 - n) };
    }
    return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2, top: e.top + e.height * (1 - n) / 2 };
  }
  return e;
}
function Ae(e) {
  return e.width / e.height;
}
function li(e, n) {
  return Math.min(n.right !== void 0 && n.left !== void 0 ? (n.right - n.left) / e.width : 1 / 0, n.bottom !== void 0 && n.top !== void 0 ? (n.bottom - n.top) / e.height : 1 / 0);
}
function ri(e, n) {
  var i = { left: 0, top: 0 }, s = yi(e, n);
  return s.left && s.left > 0 ? i.left = s.left : s.right && s.right > 0 && (i.left = -s.right), s.top && s.top > 0 ? i.top = s.top : s.bottom && s.bottom > 0 && (i.top = -s.bottom), i;
}
function sn(e, n) {
  var i;
  return n.minimum && e < n.minimum ? i = n.minimum : n.maximum && e > n.maximum && (i = n.maximum), i;
}
function Ya(e, n) {
  var i = Ae(e), s = Ae(n);
  return n.width < 1 / 0 && n.height < 1 / 0 ? i > s ? { width: n.width, height: n.width / i } : { width: n.height * i, height: n.height } : n.width < 1 / 0 ? { width: n.width, height: n.width / i } : n.height < 1 / 0 ? { width: n.height * i, height: n.height } : e;
}
function ja(e, n) {
  var i = n * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(i)) + Math.abs(e.height * Math.sin(i)), height: Math.abs(e.width * Math.sin(i)) + Math.abs(e.height * Math.cos(i)) };
}
function kt(e, n) {
  var i = n * Math.PI / 180;
  return { left: e.left * Math.cos(i) - e.top * Math.sin(i), top: e.left * Math.sin(i) + e.top * Math.cos(i) };
}
function Xi(e, n) {
  var i = yi(Ye(e, n), n);
  return i.left + i.right + i.top + i.bottom ? i.left + i.right > i.top + i.bottom ? Math.min((e.width + i.left + i.right) / e.width, li(e, n)) : Math.min((e.height + i.top + i.bottom) / e.height, li(e, n)) : 1;
}
function Ye(e, n, i) {
  i === void 0 && (i = !1);
  var s = ri(e, n);
  return et(e, i ? ji(s) : s);
}
function mn(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function Ql(e, n) {
  return re(re({}, e), { minWidth: Math.min(n.width, e.minWidth), minHeight: Math.min(n.height, e.minHeight), maxWidth: Math.min(n.width, e.maxWidth), maxHeight: Math.min(n.height, e.maxHeight) });
}
function Xa(e, n, i) {
  i === void 0 && (i = !0);
  var s = {};
  return yt.forEach((function(o) {
    var a = e[o], l = n[o];
    a !== void 0 && l !== void 0 ? s[o] = o === "left" || o === "top" ? i ? Math.max(a, l) : Math.min(a, l) : i ? Math.min(a, l) : Math.max(a, l) : l !== void 0 ? s[o] = l : a !== void 0 && (s[o] = a);
  })), s;
}
function Ki(e, n) {
  return Xa(e, n, !0);
}
function da(e) {
  var n = e.size, i = e.aspectRatio, s = e.ignoreMinimum, o = e.sizeRestrictions;
  return !!((n.correctRatio || Ae(n) >= i.minimum && Ae(n) <= i.maximum) && n.height <= o.maxHeight && n.width <= o.maxWidth && n.width && n.height && (s || n.height >= o.minHeight && n.width >= o.minWidth));
}
function ha(e, n) {
  return Math.pow(e.width - n.width, 2) + Math.pow(e.height - n.height, 2);
}
function It(e) {
  var n = e.width, i = e.height, s = e.sizeRestrictions, o = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, a = { width: Math.max(s.minWidth, Math.min(s.maxWidth, n)), height: Math.max(s.minHeight, Math.min(s.maxHeight, i)) };
  function l(p, f) {
    return f === void 0 && (f = !1), p.reduce((function(h, m) {
      return da({ size: m, aspectRatio: o, sizeRestrictions: s, ignoreMinimum: f }) && (!h || ha(m, { width: n, height: i }) < ha(h, { width: n, height: i })) ? m : h;
    }), null);
  }
  var d = [];
  o && [o.minimum, o.maximum].forEach((function(p) {
    p && d.push({ width: a.width, height: a.width / p, correctRatio: !0 }, { width: a.height * p, height: a.height, correctRatio: !0 });
  })), da({ size: a, aspectRatio: o, sizeRestrictions: s }) && d.push(a);
  var u = l(d) || l(d, !0);
  return u && { width: u.width, height: u.height };
}
function fn(e) {
  var n = e.event, i = e.coordinates, s = e.positionRestrictions, o = s === void 0 ? {} : s, a = et(i, n.directions);
  return et(a, ri(a, o));
}
function Jl(e) {
  var n = e.coordinates, i = e.transform, s = e.imageSize, o = e.sizeRestrictions, a = e.positionRestrictions, l = e.aspectRatio, d = e.visibleArea, u = function(f, h) {
    return fn({ coordinates: f, positionRestrictions: a, event: new Sn({ left: h.left - f.left, top: h.top - f.top }) });
  }, p = re({}, n);
  return (Array.isArray(i) ? i : [i]).forEach((function(f) {
    var h = {};
    ze((h = typeof f == "function" ? f({ coordinates: p, imageSize: s, visibleArea: d }) : f).width) && ze(h.height) || (p = (function(m, b) {
      var T = re(re(re({}, m), It({ width: b.width, height: b.height, sizeRestrictions: o, aspectRatio: l })), { left: 0, top: 0 });
      return u(T, { left: m.left, top: m.top });
    })(p, re(re({}, p), h))), ze(h.left) && ze(h.top) || (p = u(p, re(re({}, p), h)));
  })), p;
}
function er(e) {
  e.event;
  var n = e.getAreaRestrictions, i = e.boundaries, s = e.coordinates, o = e.visibleArea;
  e.aspectRatio;
  var a = e.stencilSize, l = e.sizeRestrictions, d = e.positionRestrictions;
  e.stencilReference;
  var u, p, f, h = re({}, s), m = re({}, o), b = re({}, a);
  u = Ae(b), p = Ae(h), f === void 0 && (f = 1e-3), (u === 0 || p === 0 ? Math.abs(p - u) < f : Math.abs(p / u) < 1 + f && Math.abs(p / u) > 1 - f) || (h = re(re({}, h), It({ sizeRestrictions: l, width: h.width, height: h.height, aspectRatio: { minimum: Ae(b), maximum: Ae(b) } })));
  var T = Xi(m = rt(m, h.width * i.width / (m.width * b.width)), n({ visibleArea: m, type: "resize" }));
  return T !== 1 && (m = rt(m, T), h = rt(h, T)), m = Ye(m = et(m, si(He(h), He(m))), n({ visibleArea: m, type: "move" })), { coordinates: h = Ye(h, Ki(_t(m), d)), visibleArea: m };
}
function tr(e) {
  var n = e.event, i = e.getAreaRestrictions, s = e.boundaries, o = e.coordinates, a = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var l = e.positionRestrictions;
  e.stencilReference;
  var d = re({}, o), u = re({}, a);
  if (o && a && n.type !== "manipulateImage") {
    var p = { width: 0, height: 0 };
    u.width, s.width, Ae(s) > Ae(d) ? (p.height = 0.8 * s.height, p.width = p.height * Ae(d)) : (p.width = 0.8 * s.width, p.height = p.width * Ae(d));
    var f = Xi(u = rt(u, d.width * s.width / (u.width * p.width)), i({ visibleArea: u, type: "resize" }));
    u = rt(u, f), f !== 1 && (p.height /= f, p.width /= f), u = Ye(u = et(u, si(He(d), He(u))), i({ visibleArea: u, type: "move" })), d = Ye(d, Ki(_t(u), l));
  }
  return { coordinates: d, visibleArea: u };
}
function ir(e) {
  var n = e.event, i = e.coordinates, s = e.visibleArea, o = e.getAreaRestrictions, a = re({}, s), l = re({}, i);
  if (n.type === "setCoordinates") {
    var d = Math.max(0, l.width - a.width), u = Math.max(0, l.height - a.height);
    d > u ? a = rt(a, Math.min(l.width / a.width, li(a, o({ visibleArea: a, type: "resize" })))) : u > d && (a = rt(a, Math.min(l.height / a.height, li(a, o({ visibleArea: a, type: "resize" }))))), a = Ye(a = et(a, ji(ri(l, _t(a)))), o({ visibleArea: a, type: "move" }));
  }
  return { visibleArea: a, coordinates: l };
}
function nr(e) {
  var n = e.imageSize, i = e.visibleArea, s = e.coordinates, o = i || n;
  return { left: (i ? i.left : 0) + o.width / 2 - s.width / 2, top: (i ? i.top : 0) + o.height / 2 - s.height / 2 };
}
function ar(e) {
  var n = e.imageSize, i = e.visibleArea, s = e.aspectRatio, o = e.sizeRestrictions, a = i || n, l = Math.min(s.maximum || 1 / 0, Math.max(s.minimum || 0, Ae(a))), d = a.width < a.height ? { width: 0.8 * a.width, height: 0.8 * a.width / l } : { height: 0.8 * a.height, width: 0.8 * a.height * l };
  return It(re(re({}, d), { aspectRatio: s, sizeRestrictions: o }));
}
function or(e) {
  var n, i, s = e.imageSize, o = e.visibleArea, a = e.boundaries, l = e.aspectRatio, d = e.sizeRestrictions, u = e.stencilSize, p = o || s;
  return Ae(p) > Ae(a) ? i = (n = u.height * p.height / a.height) * Ae(u) : n = (i = u.width * p.width / a.width) / Ae(u), It({ width: i, height: n, aspectRatio: l, sizeRestrictions: d });
}
function sr(e) {
  var n = e.getAreaRestrictions, i = e.coordinates, s = e.imageSize, o = Ae(e.boundaries);
  if (i) {
    var a = { height: Math.max(i.height, s.height), width: Math.max(i.width, s.width) }, l = Ya({ width: Ae(a) > o ? a.width : a.height * o, height: Ae(a) > o ? a.width / o : a.height }, mn(n())), d = { left: i.left + i.width / 2 - l.width / 2, top: i.top + i.height / 2 - l.height / 2, width: l.width, height: l.height }, u = yi(i, _t(re({ left: 0, top: 0 }, s))), p = {};
    return !u.left && !u.right && d.width <= s.width && (p.left = 0, p.right = s.width), !u.top && !u.bottom && d.height <= s.height && (p.top = 0, p.bottom = s.height), Ye(d, p);
  }
  var f = Ae(s);
  return l = { height: f > o ? s.height : s.width / o, width: f > o ? s.height * o : s.width }, { left: s.width / 2 - l.width / 2, top: s.height / 2 - l.height / 2, width: l.width, height: l.height };
}
function Mi(e, n) {
  return Xa(e, _t(n));
}
function lr(e) {
  var n = e.event, i = e.coordinates, s = e.visibleArea, o = e.sizeRestrictions, a = e.getAreaRestrictions, l = e.positionRestrictions, d = e.adjustStencil, u = n.scale, p = n.move, f = re({}, s), h = re({}, i), m = 1, b = 1, T = u.factor && Math.abs(u.factor - 1) > 1e-3;
  f = et(f, { left: p.left || 0, top: p.top || 0 });
  var M = { stencil: { minimum: Math.max(o.minWidth ? o.minWidth / h.width : 0, o.minHeight ? o.minHeight / h.height : 0), maximum: Math.min(o.maxWidth ? o.maxWidth / h.width : 1 / 0, o.maxHeight ? o.maxHeight / h.height : 1 / 0, li(h, l)) }, area: { maximum: li(f, a({ visibleArea: f, type: "resize" })) } };
  u.factor && T && (u.factor < 1 ? (b = Math.max(u.factor, M.stencil.minimum)) > 1 && (b = 1) : u.factor > 1 && (b = Math.min(u.factor, Math.min(M.area.maximum, M.stencil.maximum))) < 1 && (b = 1)), b && (f = rt(f, b, u.center));
  var B = i.left - s.left, $ = s.width + s.left - (i.width + i.left), V = i.top - s.top, Z = s.height + s.top - (i.height + i.top);
  return f = Ye(f = et(f, ri(f, { left: l.left !== void 0 ? l.left - B * b : void 0, top: l.top !== void 0 ? l.top - V * b : void 0, bottom: l.bottom !== void 0 ? l.bottom + Z * b : void 0, right: l.right !== void 0 ? l.right + $ * b : void 0 })), a({ visibleArea: f, type: "move" })), h.width = h.width * b, h.height = h.height * b, h.left = f.left + B * b, h.top = f.top + V * b, h = Ye(h, Ki(_t(f), l)), u.factor && T && d && (u.factor > 1 ? m = Math.min(M.area.maximum, u.factor) / b : u.factor < 1 && (m = Math.max(h.height / f.height, h.width / f.width, u.factor / b)), m !== 1 && (f = et(f = Ye(f = rt(f, m, u.factor > 1 ? u.center : He(h)), a({ visibleArea: f, type: "move" })), ji(ri(h, _t(f)))))), { coordinates: h, visibleArea: f };
}
function rr(e) {
  var n = e.aspectRatio, i = e.getAreaRestrictions, s = e.coordinates, o = e.visibleArea, a = e.sizeRestrictions, l = e.positionRestrictions, d = e.imageSize, u = e.previousImageSize, p = e.angle, f = re({}, s), h = re({}, o), m = kt(He(re({ left: 0, top: 0 }, u)), p);
  return (f = re(re({}, It({ sizeRestrictions: a, aspectRatio: n, width: f.width, height: f.height })), kt(He(f), p))).left -= m.left - d.width / 2 + f.width / 2, f.top -= m.top - d.height / 2 + f.height / 2, h = rt(h, Xi(h, i({ visibleArea: h, type: "resize" }))), { coordinates: f = Ye(f, l), visibleArea: h = Ye(h = et(h, si(He(f), He(s))), i({ visibleArea: h, type: "move" })) };
}
function cr(e) {
  var n = e.flip, i = e.previousFlip, s = e.rotate, o = e.getAreaRestrictions, a = e.coordinates, l = e.visibleArea, d = e.imageSize, u = re({}, a), p = re({}, l), f = i.horizontal !== n.horizontal, h = i.vertical !== n.vertical;
  if (f || h) {
    var m = kt({ left: d.width / 2, top: d.height / 2 }, -s), b = kt(He(u), -s), T = kt({ left: f ? m.left - (b.left - m.left) : b.left, top: h ? m.top - (b.top - m.top) : b.top }, s);
    u = et(u, si(T, He(u))), b = kt(He(p), -s), p = Ye(p = et(p, si(T = kt({ left: f ? m.left - (b.left - m.left) : b.left, top: h ? m.top - (b.top - m.top) : b.top }, s), He(p))), o({ visibleArea: p, type: "move" }));
  }
  return { coordinates: u, visibleArea: p };
}
function va(e) {
  var n = e.directions, i = e.coordinates, s = e.positionRestrictions, o = s === void 0 ? {} : s, a = e.sizeRestrictions, l = e.preserveRatio, d = e.compensate, u = re({}, n), p = pt(i, u).width, f = pt(i, u).height;
  p < 0 && (u.left < 0 && u.right < 0 ? (u.left = -(i.width - a.minWidth) / (u.left / u.right), u.right = -(i.width - a.minWidth) / (u.right / u.left)) : u.left < 0 ? u.left = -(i.width - a.minWidth) : u.right < 0 && (u.right = -(i.width - a.minWidth))), f < 0 && (u.top < 0 && u.bottom < 0 ? (u.top = -(i.height - a.minHeight) / (u.top / u.bottom), u.bottom = -(i.height - a.minHeight) / (u.bottom / u.top)) : u.top < 0 ? u.top = -(i.height - a.minHeight) : u.bottom < 0 && (u.bottom = -(i.height - a.minHeight)));
  var h = yi(pt(i, u), o);
  d && (h.left && h.left > 0 && h.right === 0 ? (u.right += h.left, u.left -= h.left) : h.right && h.right > 0 && h.left === 0 && (u.left += h.right, u.right -= h.right), h.top && h.top > 0 && h.bottom === 0 ? (u.bottom += h.top, u.top -= h.top) : h.bottom && h.bottom > 0 && h.top === 0 && (u.top += h.bottom, u.bottom -= h.bottom), h = yi(pt(i, u), o));
  var m = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (yt.forEach((function(M) {
    var B = h[M];
    B && u[M] && (m[M] = Math.max(0, 1 - B / u[M]));
  })), l) {
    var b = Math.min.apply(null, yt.map((function(M) {
      return m[M];
    })));
    b !== 1 / 0 && yt.forEach((function(M) {
      u[M] *= b;
    }));
  } else yt.forEach((function(M) {
    m[M] !== 1 / 0 && (u[M] *= m[M]);
  }));
  if (p = pt(i, u).width, f = pt(i, u).height, u.right + u.left && (p > a.maxWidth ? m.width = (a.maxWidth - i.width) / (u.right + u.left) : p < a.minWidth && (m.width = (a.minWidth - i.width) / (u.right + u.left))), u.bottom + u.top && (f > a.maxHeight ? m.height = (a.maxHeight - i.height) / (u.bottom + u.top) : f < a.minHeight && (m.height = (a.minHeight - i.height) / (u.bottom + u.top))), l) {
    var T = Math.min(m.width, m.height);
    T !== 1 / 0 && yt.forEach((function(M) {
      u[M] *= T;
    }));
  } else m.width !== 1 / 0 && Xl.forEach((function(M) {
    u[M] *= m.width;
  })), m.height !== 1 / 0 && Kl.forEach((function(M) {
    u[M] *= m.height;
  }));
  return u;
}
function Si(e, n, i) {
  return n == 0 && i == 0 ? e / 2 : n == 0 ? 0 : i == 0 ? e : e * Math.abs(n / (n + i));
}
var ur = vt("vue-simple-handler"), dr = vt("vue-simple-handler-wrapper"), Rn = { name: "SimpleHandler", components: { HandlerWrapper: Wa }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, n = (lt(e = {}, this.horizontalPosition, !!this.horizontalPosition), lt(e, this.verticalPosition, !!this.verticalPosition), lt(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), lt(e, "hover", this.hover), e);
  return { default: Pe(ur(n), this.defaultClass, this.hover && this.hoverClass), wrapper: Pe(dr(n), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
Rn.render = function(e, n, i, s, o, a) {
  var l = ee("HandlerWrapper");
  return y(), ne(l, { class: a.classes.wrapper, "vertical-position": i.verticalPosition, "horizontal-position": i.horizontalPosition, disabled: i.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: E((function() {
    return [g("div", { class: a.classes.default }, null, 2)];
  })), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var hr = vt("vue-simple-line"), vr = vt("vue-simple-line-wrapper"), Ln = { name: "SimpleLine", components: { LineWrapper: Ha }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: Pe(hr(lt({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: Pe(vr(lt({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
Ln.render = function(e, n, i, s, o, a) {
  var l = ee("LineWrapper");
  return y(), ne(l, { class: a.classes.wrapper, position: i.position, disabled: i.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: E((function() {
    return [g("div", { class: a.classes.root }, null, 2)];
  })), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var ln = vt("vue-bounding-box"), mr = ["east", "west", null], fr = ["south", "north", null], Ka = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return Rn;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return Ln;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return mr.forEach((function(n) {
    fr.forEach((function(i) {
      if (n !== i) {
        var s = Va(n, i), o = s.name, a = s.classname;
        e.push({ name: o, classname: a, verticalDirection: i, horizontalDirection: n });
      }
    }));
  })), { points: e };
}, computed: { style: function() {
  var e = {};
  return this.width && this.height && (e.width = "".concat(this.width, "px"), e.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), e;
}, classes: function() {
  var e = this.handlersClasses, n = this.handlersWrappersClasses, i = this.linesClasses, s = this.linesWrappersClasses;
  return { root: ln(), handlers: e, handlersWrappers: n, lines: i, linesWrappers: s };
}, lineNodes: function() {
  var e = this, n = [];
  return this.points.forEach((function(i) {
    i.horizontalDirection && i.verticalDirection || !e.lines[i.name] || n.push({ name: i.name, component: e.linesComponent, class: Pe(e.classes.lines.default, e.classes.lines[i.name], !e.resizable && e.classes.lines.disabled), wrapperClass: Pe(e.classes.linesWrappers.default, e.classes.linesWrappers[i.name], !e.resizable && e.classes.linesWrappers.disabled), hoverClass: e.classes.lines.hover, verticalDirection: i.verticalDirection, horizontalDirection: i.horizontalDirection, disabled: !e.resizable });
  })), n;
}, handlerNodes: function() {
  var e = this, n = [], i = this.width, s = this.height;
  return this.points.forEach((function(o) {
    if (e.handlers[o.name]) {
      var a = { name: o.name, component: e.handlersComponent, class: Pe(e.classes.handlers.default, e.classes.handlers[o.name]), wrapperClass: Pe(e.classes.handlersWrappers.default, e.classes.handlersWrappers[o.name]), hoverClass: e.classes.handlers.hover, verticalDirection: o.verticalDirection, horizontalDirection: o.horizontalDirection, disabled: !e.resizable };
      if (i && s) {
        var l = o.horizontalDirection, d = o.verticalDirection, u = l === "east" ? i : l === "west" ? 0 : i / 2, p = d === "south" ? s : d === "north" ? 0 : s / 2;
        a.wrapperClass = ln("handler"), a.wrapperStyle = { transform: "translate(".concat(u, "px, ").concat(p, "px)") }, e.transitions && e.transitions.enabled && (a.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else a.wrapperClass = ln("handler", lt({}, o.classname, !0));
      n.push(a);
    }
  })), n;
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [];
}, methods: { onEnd: function() {
  this.$emit("resize-end");
}, onHandlerDrag: function(e, n, i) {
  var s, o = e.shift(), a = o.left, l = o.top, d = { left: 0, right: 0, top: 0, bottom: 0 };
  n === "west" ? d.left -= a : n === "east" && (d.right += a), i === "north" ? d.top -= l : i === "south" && (d.bottom += l), !i && n ? s = "width" : i && !n && (s = "height"), this.resizable && this.$emit("resize", new Hl(d, { allowedDirections: { left: n === "west" || !n, right: n === "east" || !n, bottom: i === "south" || !i, top: i === "north" || !i }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: s }));
} }, emits: ["resize", "resize-end"] };
Ka.render = function(e, n, i, s, o, a) {
  return y(), ne("div", { ref: "box", class: a.classes.root, style: a.style }, [ht(e.$slots, "default"), g("div", null, [(y(!0), ne(Ee, null, Ne(a.lineNodes, (function(l) {
    return y(), ne(ai(l.component), { key: l.name, "default-class": l.class, "hover-class": l.hoverClass, "wrapper-class": l.wrapperClass, position: l.name, disabled: l.disabled, onDrag: function(d) {
      return a.onHandlerDrag(d, l.horizontalDirection, l.verticalDirection);
    }, onDragEnd: n[1] || (n[1] = function(d) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  })), 128))]), (y(!0), ne(Ee, null, Ne(a.handlerNodes, (function(l) {
    return y(), ne("div", { key: l.name, style: l.wrapperStyle, class: l.wrapperClass }, [(y(), ne(ai(l.component), { "default-class": l.class, "hover-class": l.hoverClass, "wrapper-class": l.wrapperClass, "horizontal-position": l.horizontalDirection, "vertical-position": l.verticalDirection, disabled: l.disabled, onDrag: function(d) {
      return a.onHandlerDrag(d, l.horizontalDirection, l.verticalDirection);
    }, onDragEnd: n[2] || (n[2] = function(d) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  })), 128))], 6);
};
var gr = vt("vue-draggable-area"), qa = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: gr() };
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [], this.touchStarted = !1;
}, methods: { onTouchStart: function(e) {
  if (e.cancelable) {
    var n = this.movable && e.touches.length === 1;
    n && (this.touches = Yt(e.touches)), (this.touchStarted || n) && (e.preventDefault(), e.stopPropagation());
  }
}, onTouchEnd: function() {
  this.touchStarted = !1, this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(e, e.touches), e.preventDefault(), e.stopPropagation()) : Ba({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: e.touches[0].clientX, y: e.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), this.touchStarted = !0));
}, onMouseDown: function(e) {
  if (this.movable && e.button === 0) {
    var n = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [n], this.initAnchor(n), e.stopPropagation();
  }
}, onMouseMove: function(e) {
  this.touches.length && (this.processMove(e, [{ fake: !0, clientX: e.clientX, clientY: e.clientY }]), e.preventDefault && e.cancelable && e.preventDefault(), e.stopPropagation());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(e) {
  var n = this.$refs.container.getBoundingClientRect(), i = n.left, s = n.top;
  this.anchor = { x: e.clientX - i, y: e.clientY - s };
}, processMove: function(e, n) {
  var i = Yt(n);
  if (this.touches.length) {
    var s = this.$refs.container.getBoundingClientRect(), o = s.left, a = s.top;
    this.touches.length === 1 && i.length === 1 && this.$emit("move", new Sn({ left: i[0].clientX - (o + this.anchor.x), top: i[0].clientY - (a + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
qa.render = function(e, n, i, s, o, a) {
  return y(), ne("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }) }, [ht(e.$slots, "default")], 544);
};
function rn(e) {
  var n, i;
  return { rotate: e.rotate || 0, flip: { horizontal: ((n = e == null ? void 0 : e.flip) === null || n === void 0 ? void 0 : n.horizontal) || !1, vertical: ((i = e == null ? void 0 : e.flip) === null || i === void 0 ? void 0 : i.vertical) || !1 } };
}
function pr(e) {
  return new Promise((function(n, i) {
    try {
      if (e) if (/^data:/i.test(e)) n((function(u) {
        u = u.replace(/^data:([^;]+);base64,/gim, "");
        for (var p = atob(u), f = p.length, h = new ArrayBuffer(f), m = new Uint8Array(h), b = 0; b < f; b++) m[b] = p.charCodeAt(b);
        return h;
      })(e));
      else if (/^blob:/i.test(e)) {
        var s = new FileReader();
        s.onload = function(u) {
          n(u.target.result);
        }, a = e, l = function(u) {
          s.readAsArrayBuffer(u);
        }, (d = new XMLHttpRequest()).open("GET", a, !0), d.responseType = "blob", d.onload = function() {
          this.status != 200 && this.status !== 0 || l(this.response);
        }, d.send();
      } else {
        var o = new XMLHttpRequest();
        o.onreadystatechange = function() {
          o.readyState === 4 && (o.status === 200 || o.status === 0 ? n(o.response) : i("Warning: could not load an image to parse its orientation"), o = null);
        }, o.onprogress = function() {
          o.getResponseHeader("content-type") !== "image/jpeg" && o.abort();
        }, o.withCredentials = !1, o.open("GET", e, !0), o.responseType = "arraybuffer", o.send(null);
      }
      else i("Error: the image is empty");
    } catch (u) {
      i(u);
    }
    var a, l, d;
  }));
}
function Za(e) {
  var n = e.rotate, i = e.flip, s = e.scaleX, o = e.scaleY, a = "";
  return a += " rotate(" + n + "deg) ", a += " scaleX(" + s * (i.horizontal ? -1 : 1) + ") ", a += " scaleY(" + o * (i.vertical ? -1 : 1) + ") ";
}
function br(e) {
  try {
    var n, i = new DataView(e), s = void 0, o = void 0, a = void 0, l = void 0;
    if (i.getUint8(0) === 255 && i.getUint8(1) === 216) for (var d = i.byteLength, u = 2; u + 1 < d; ) {
      if (i.getUint8(u) === 255 && i.getUint8(u + 1) === 225) {
        a = u;
        break;
      }
      u++;
    }
    if (a && (s = a + 10, (function(b, T, M) {
      var B, $ = "";
      for (B = T, M += T; B < M; B++) $ += String.fromCharCode(b.getUint8(B));
      return $;
    })(i, a + 4, 4) === "Exif")) {
      var p = i.getUint16(s);
      if (((o = p === 18761) || p === 19789) && i.getUint16(s + 2, o) === 42) {
        var f = i.getUint32(s + 4, o);
        f >= 8 && (l = s + f);
      }
    }
    if (l) {
      for (var h = i.getUint16(l, o), m = 0; m < h; m++)
        if (u = l + 12 * m + 2, i.getUint16(u, o) === 274) {
          u += 8, n = i.getUint16(u, o), i.setUint16(u, 1, o);
          break;
        }
    }
    return n;
  } catch {
    return null;
  }
}
function ma(e, n) {
  var i = n.getBoundingClientRect(), s = i.left, o = i.top, a = { left: 0, top: 0 }, l = 0;
  return e.forEach((function(d) {
    a.left += (d.clientX - s) / e.length, a.top += (d.clientY - o) / e.length;
  })), e.forEach((function(d) {
    l += Ba({ x: a.left, y: a.top }, { x: d.clientX - s, y: d.clientY - o });
  })), { centerMass: a, spread: l, count: e.length };
}
var Qa = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = hn(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, n) {
  if (this.touches.length) {
    if (this.touches.length === 1 && n.length === 1) this.$emit("move", new fi({ left: this.touches[0].clientX - n[0].clientX, top: this.touches[0].clientY - n[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var i = ma(n, this.$refs.container), s = this.oldGeometricProperties;
      s.count === i.count && s.count > 1 && this.$emit("resize", new fi({ left: s.centerMass.left - i.centerMass.left, top: s.centerMass.top - i.centerMass.top }, { factor: s.spread / i.spread, center: i.centerMass })), this.oldGeometricProperties = i;
    }
    this.touches = n;
  }
}, processEnd: function() {
  this.transforming && (this.transforming = !1, this.$emit("transform-end"));
}, processStart: function() {
  this.transforming = !0, this.debouncedProcessEnd.clear();
}, processEvent: function(e) {
  return this.eventsFilter ? this.eventsFilter(e, this.transforming) !== !1 : (e.preventDefault(), e.stopPropagation(), !0);
}, onTouchStart: function(e) {
  if (e.cancelable && (this.touchMove || this.touchResize && e.touches.length > 1) && this.processEvent(e)) {
    var n = this.$refs.container, i = n.getBoundingClientRect(), s = i.left, o = i.top, a = i.bottom, l = i.right;
    this.touches = Yt(e.touches).filter((function(d) {
      return d.clientX > s && d.clientX < l && d.clientY > o && d.clientY < a;
    })), this.oldGeometricProperties = ma(this.touches, n);
  }
}, onTouchEnd: function(e) {
  e.touches.length === 0 && (this.touches = [], this.processEnd());
}, onTouchMove: function(e) {
  var n = this;
  if (this.touches.length) {
    var i = Yt(e.touches).filter((function(s) {
      return !s.identifier || n.touches.find((function(o) {
        return o.identifier === s.identifier;
      }));
    }));
    this.processEvent(e) && (this.processMove(e, i), this.processStart());
  }
}, onMouseDown: function(e) {
  if (this.mouseMove && "buttons" in e && e.buttons === 1 && this.processEvent(e)) {
    var n = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [n], this.processStart();
  }
}, onMouseMove: function(e) {
  this.touches.length && this.processEvent(e) && this.processMove(e, [{ clientX: e.clientX, clientY: e.clientY }]);
}, onMouseUp: function() {
  this.touches = [], this.processEnd();
}, onWheel: function(e) {
  if (this.wheelResize && this.processEvent(e)) {
    var n = this.$refs.container.getBoundingClientRect(), i = n.left, s = n.top, o = 1 + this.wheelResize.ratio * (l = e.deltaY || e.detail || e.wheelDelta, (d = +l) == 0 || Ga(d) ? d : d > 0 ? 1 : -1), a = { left: e.clientX - i, top: e.clientY - s };
    this.$emit("resize", new fi({}, { factor: o, center: a })), this.touches.length || this.debouncedProcessEnd();
  }
  var l, d;
} }, emits: ["resize", "move", "transform-end"] };
Qa.render = function(e, n, i, s, o, a) {
  return y(), ne("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onWheel: n[3] || (n[3] = function() {
    return a.onWheel && a.onWheel.apply(a, arguments);
  }) }, [ht(e.$slots, "default")], 544);
};
var gn = { components: { TransformableImage: Qa }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
gn.render = function(e, n, i, s, o, a) {
  var l = ee("transformable-image");
  return y(), ne(l, { "touch-move": i.touchMove, "touch-resize": i.touchResize, "mouse-move": i.mouseMove, "wheel-resize": i.wheelResize, onMove: n[1] || (n[1] = function(d) {
    return e.$emit("move", d);
  }), onResize: n[2] || (n[2] = function(d) {
    return e.$emit("resize", d);
  }) }, { default: E((function() {
    return [ht(e.$slots, "default")];
  })), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var Ti = vt("vue-preview"), Ja = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: Ti({ fill: this.fill }), wrapper: Ti("wrapper"), imageWrapper: Ti("image-wrapper"), image: Pe(Ti("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, n = Ie(Ie({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), i = this.imageSize.width, s = this.imageSize.height, o = ja({ width: i, height: s }, n.rotate), a = { width: "".concat(i, "px"), height: "".concat(s, "px"), left: "0px", top: "0px" }, l = { rotate: { left: (i - o.width) * n.scaleX / 2, top: (s - o.height) * n.scaleY / 2 }, scale: { left: (1 - n.scaleX) * i / 2, top: (1 - n.scaleY) * s / 2 } };
    return a.transform = `translate(
				`.concat(-this.coordinates.left / e - l.rotate.left - l.scale.left, "px,").concat(-this.coordinates.top / e - l.rotate.top - l.scale.top, "px) ") + Za(n), this.transitions && this.transitions.enabled && (a.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), a;
  }
  return {};
}, size: function() {
  return { width: this.width || this.calculatedSize.width, height: this.height || this.calculatedSize.height };
}, imageSize: function() {
  return { width: this.image.width || this.calculatedImageSize.width, height: this.image.height || this.calculatedImageSize.height };
} }, watch: { image: function(e) {
  (e.width || e.height) && this.onChangeImage();
} }, mounted: function() {
  var e = this;
  this.onChangeImage(), this.$refs.image.addEventListener("load", (function() {
    e.refreshImage();
  })), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh);
}, methods: { refreshImage: function() {
  var e = this.$refs.image;
  this.calculatedImageSize.height = e.naturalHeight, this.calculatedImageSize.width = e.naturalWidth;
}, refresh: function() {
  var e = this.$refs.root;
  this.width || (this.calculatedSize.width = e.clientWidth), this.height || (this.calculatedSize.height = e.clientHeight);
}, onChangeImage: function() {
  var e = this.$refs.image;
  e && e.complete && this.refreshImage(), this.refresh();
} } };
Ja.render = function(e, n, i, s, o, a) {
  return y(), ne("div", { ref: "root", class: a.classes.root, style: a.style }, [g("div", { ref: "wrapper", class: a.classes.wrapper, style: a.wrapperStyle }, [pi(g("img", { ref: "image", src: i.image && i.image.src, class: a.classes.image, style: a.imageStyle }, null, 14, ["src"]), [[ki, i.image && i.image.src]])], 6)], 6);
};
var eo = { components: { Preview: Ja }, inheritAttrs: !1 };
eo.render = function(e, n, i, s, o, a) {
  var l = ee("preview");
  return y(), ne(l, _n(e.$attrs, { fill: !0 }), null, 16);
};
var cn = vt("vue-rectangle-stencil"), xn = { name: "RectangleStencil", components: { StencilPreview: eo, BoundingBox: Ka, DraggableArea: qa }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return Rn;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return Ln;
} }, aspectRatio: { type: [Number, String] }, minAspectRatio: { type: [Number, String] }, maxAspectRatio: { type: [Number, String] }, movable: { type: Boolean, default: !0 }, resizable: { type: Boolean, default: !0 }, transitions: { type: Object }, movingClass: { type: String }, resizingClass: { type: String }, previewClass: { type: String }, boundingBoxClass: { type: String }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} } }, data: function() {
  return { moving: !1, resizing: !1 };
}, computed: { classes: function() {
  return { stencil: Pe(cn({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: Pe(cn("preview"), this.previewClass), boundingBox: Pe(cn("bounding-box"), this.boundingBoxClass) };
}, style: function() {
  var e = this.stencilCoordinates, n = e.height, i = e.width, s = e.left, o = e.top, a = { width: "".concat(i, "px"), height: "".concat(n, "px"), transform: "translate(".concat(s, "px, ").concat(o, "px)") };
  return this.transitions && this.transitions.enabled && (a.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), a;
} }, methods: { onMove: function(e) {
  this.$emit("move", e), this.moving = !0;
}, onMoveEnd: function() {
  this.$emit("move-end"), this.moving = !1;
}, onResize: function(e) {
  this.$emit("resize", e), this.resizing = !0;
}, onResizeEnd: function() {
  this.$emit("resize-end"), this.resizing = !1;
}, aspectRatios: function() {
  return { minimum: this.aspectRatio || this.minAspectRatio, maximum: this.aspectRatio || this.maxAspectRatio };
} }, emits: ["resize", "resize-end", "move", "move-end"] };
xn.render = function(e, n, i, s, o, a) {
  var l = ee("stencil-preview"), d = ee("draggable-area"), u = ee("bounding-box");
  return y(), ne("div", { class: a.classes.stencil, style: a.style }, [g(u, { width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, transitions: i.transitions, class: a.classes.boundingBox, handlers: i.handlers, "handlers-component": i.handlersComponent, "handlers-classes": i.handlersClasses, "handlers-wrappers-classes": i.handlersWrappersClasses, lines: i.lines, "lines-component": i.linesComponent, "lines-classes": i.linesClasses, "lines-wrappers-classes": i.linesWrappersClasses, resizable: i.resizable, onResize: a.onResize, onResizeEnd: a.onResizeEnd }, { default: E((function() {
    return [g(d, { movable: i.movable, onMove: a.onMove, onMoveEnd: a.onMoveEnd }, { default: E((function() {
      return [g(l, { image: i.image, coordinates: i.coordinates, width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, class: a.classes.preview, transitions: i.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    })), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  })), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var yr = ["transitions"], wt = vt("vue-advanced-cropper"), to = { name: "Cropper", components: { BackgroundWrapper: gn }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return xn;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return gn;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return Zl.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var n = e.event, i = e.coordinates, s = e.aspectRatio, o = e.positionRestrictions, a = e.sizeRestrictions, l = re(re({}, i), { right: i.left + i.width, bottom: i.top + i.height }), d = n.params || {}, u = re({}, n.directions), p = d.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  a.widthFrozen && (u.left = 0, u.right = 0), a.heightFrozen && (u.top = 0, u.bottom = 0), yt.forEach((function(Y) {
    p[Y] || (u[Y] = 0);
  }));
  var f = pt(l, u = va({ coordinates: l, directions: u, sizeRestrictions: a, positionRestrictions: o })).width, h = pt(l, u).height, m = d.preserveRatio ? Ae(l) : sn(f / h, s);
  if (m) {
    var b = d.respectDirection;
    if (b || (b = l.width >= l.height || m === 1 ? "width" : "height"), b === "width") {
      var T = f / m - l.height;
      if (p.top && p.bottom) {
        var M = u.top, B = u.bottom;
        u.bottom = Si(T, B, M), u.top = Si(T, M, B);
      } else p.bottom ? u.bottom = T : p.top ? u.top = T : p.right ? u.right = 0 : p.left && (u.left = 0);
    } else if (b === "height") {
      var $ = l.width - h * m;
      if (p.left && p.right) {
        var V = u.left, Z = u.right;
        u.left = -Si($, V, Z), u.right = -Si($, Z, V);
      } else p.left ? u.left = -$ : p.right ? u.right = -$ : p.top ? u.top = 0 : p.bottom && (u.bottom = 0);
    }
    u = va({ directions: u, coordinates: l, sizeRestrictions: a, positionRestrictions: o, preserveRatio: !0, compensate: d.compensate });
  }
  return f = pt(l, u).width, h = pt(l, u).height, (m = d.preserveRatio ? Ae(l) : sn(f / h, s)) && Math.abs(m - f / h) > 1e-3 && yt.forEach((function(Y) {
    p[Y] || (u[Y] = 0);
  })), fn({ event: new Sn({ left: -u.left, top: -u.top }), coordinates: { width: i.width + u.right + u.left, height: i.height + u.top + u.bottom, left: i.left, top: i.top }, positionRestrictions: o });
} }, moveAlgorithm: { type: Function, default: fn }, initStretcher: { type: Function, default: function(e) {
  var n = e.stretcher, i = e.imageSize, s = Ae(i);
  n.style.width = i.width + "px", n.style.height = n.clientWidth / s + "px", n.style.width = n.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.coordinates, s = e.aspectRatio, o = e.sizeRestrictions, a = e.positionRestrictions, l = re(re({}, i), It({ width: i.width, height: i.height, aspectRatio: s, sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minHeight: Math.min(n.height, o.minHeight), minWidth: Math.min(n.width, o.minWidth) } }));
  return l = Ye(l = et(l, si(He(i), He(l))), Ki(_t(n), a));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.boundaries, s = e.getAreaRestrictions, o = e.coordinates, a = re({}, n);
  a.height = a.width / Ae(i), a.top += (n.height - a.height) / 2, (o.height - a.height > 0 || o.width - a.width > 0) && (a = rt(a, Math.max(o.height / a.height, o.width / a.width)));
  var l = ji(ri(o, _t(a = rt(a, Xi(a, s({ visibleArea: a, type: "resize" }))))));
  return a.width < o.width && (l.left = 0), a.height < o.height && (l.top = 0), a = Ye(a = et(a, l), s({ visibleArea: a, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.boundaries, s = e.imageSize, o = e.imageRestriction, a = e.type, l = {};
  return o === "fill-area" ? l = { left: 0, top: 0, right: s.width, bottom: s.height } : o === "fit-area" && (Ae(i) > Ae(s) ? (l = { top: 0, bottom: s.height }, n && a === "move" && (n.width > s.width ? (l.left = -(n.width - s.width) / 2, l.right = s.width - l.left) : (l.left = 0, l.right = s.width))) : (l = { left: 0, right: s.width }, n && a === "move" && (n.height > s.height ? (l.top = -(n.height - s.height) / 2, l.bottom = s.height - l.top) : (l.top = 0, l.bottom = s.height)))), l;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.imageSize, i = {};
  return e.imageRestriction !== "none" && (i = { left: 0, top: 0, right: n.width, bottom: n.height }), i;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: Ie({}, ca) };
}, computed: { image: function() {
  return { src: this.imageAttributes.src, width: this.imageAttributes.width, height: this.imageAttributes.height, transforms: this.imageTransforms };
}, imageTransforms: function() {
  return { rotate: this.appliedImageTransforms.rotate, flip: { horizontal: this.appliedImageTransforms.flip.horizontal, vertical: this.appliedImageTransforms.flip.vertical }, translateX: this.visibleArea ? this.visibleArea.left / this.coefficient : 0, translateY: this.visibleArea ? this.visibleArea.top / this.coefficient : 0, scaleX: 1 / this.coefficient, scaleY: 1 / this.coefficient };
}, imageSize: function() {
  var e = (function(n) {
    return n * Math.PI / 180;
  })(this.imageTransforms.rotate);
  return { width: Math.abs(this.imageAttributes.width * Math.cos(e)) + Math.abs(this.imageAttributes.height * Math.sin(e)), height: Math.abs(this.imageAttributes.width * Math.sin(e)) + Math.abs(this.imageAttributes.height * Math.cos(e)) };
}, initialized: function() {
  return !!(this.visibleArea && this.imageLoaded);
}, settings: function() {
  var e = vn(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: vn(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: ze(this.minWidth) ? 0 : Ai(this.minWidth), minHeight: ze(this.minHeight) ? 0 : Ai(this.minHeight), maxWidth: ze(this.maxWidth) ? 1 / 0 : Ai(this.maxWidth), maxHeight: ze(this.maxHeight) ? 1 / 0 : Ai(this.maxHeight) });
    if (e = (function(s) {
      var o = s.areaRestrictions, a = s.sizeRestrictions, l = s.boundaries, d = s.positionRestrictions, u = re(re({}, a), { minWidth: a.minWidth !== void 0 ? a.minWidth : 0, minHeight: a.minHeight !== void 0 ? a.minHeight : 0, maxWidth: a.maxWidth !== void 0 ? a.maxWidth : 1 / 0, maxHeight: a.maxHeight !== void 0 ? a.maxHeight : 1 / 0 });
      d.left !== void 0 && d.right !== void 0 && (u.maxWidth = Math.min(u.maxWidth, d.right - d.left)), d.bottom !== void 0 && d.top !== void 0 && (u.maxHeight = Math.min(u.maxHeight, d.bottom - d.top));
      var p = mn(o), f = Ya(l, p);
      return p.width < 1 / 0 && (!u.maxWidth || u.maxWidth > f.width) && (u.maxWidth = Math.min(u.maxWidth, f.width)), p.height < 1 / 0 && (!u.maxHeight || u.maxHeight > f.height) && (u.maxHeight = Math.min(u.maxHeight, f.height)), u.minWidth > u.maxWidth && (u.minWidth = u.maxWidth, u.widthFrozen = !0), u.minHeight > u.maxHeight && (u.minHeight = u.maxHeight, u.heightFrozen = !0), u;
    })({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var n = this.getStencilSize(), i = mn(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      e.maxWidth = Math.min(e.maxWidth, i.width * n.width / this.boundaries.width), e.maxHeight = Math.min(e.maxHeight, i.height * n.height / this.boundaries.height), e.maxWidth < e.minWidth && (e.minWidth = e.maxWidth), e.maxHeight < e.minHeight && (e.minHeight = e.maxHeight);
    }
    return e;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: wt(), image: Pe(wt("image"), this.imageClass), stencil: wt("stencil"), boundaries: Pe(wt("boundaries"), this.boundariesClass), stretcher: Pe(wt("stretcher")), background: Pe(wt("background"), this.backgroundClass), foreground: Pe(wt("foreground"), this.foregroundClass), imageWrapper: Pe(wt("image-wrapper")), cropperWrapper: Pe(wt("cropper-wrapper")) };
}, stencilCoordinates: function() {
  if (this.initialized) {
    var e = this.coordinates, n = e.width, i = e.height, s = e.left, o = e.top;
    return { width: n / this.coefficient, height: i / this.coefficient, left: (s - this.visibleArea.left) / this.coefficient, top: (o - this.visibleArea.top) / this.coefficient };
  }
  return this.defaultCoordinates();
}, boundariesStyle: function() {
  var e = { width: this.boundaries.width ? "".concat(Math.round(this.boundaries.width), "px") : "auto", height: this.boundaries.height ? "".concat(Math.round(this.boundaries.height), "px") : "auto", transition: "opacity ".concat(this.transitionTime, "ms"), pointerEvents: this.imageLoaded ? "all" : "none" };
  return this.imageLoaded || (e.opacity = "0"), e;
}, imageStyle: function() {
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, n = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, i = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, s = Ie(Ie({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), o = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-n.left - i.left - this.imageTransforms.translateX, "px, ").concat(-n.top - i.top - this.imageTransforms.translateY, "px)") + Za(s) };
  return this.transitionsOptions.enabled && (o.transition = "".concat(this.transitionsOptions.time, "ms ").concat(this.transitionsOptions.timingFunction)), o;
} }, watch: { src: function() {
  this.onChangeImage();
}, stencilComponent: function() {
  var e = this;
  this.$nextTick((function() {
    e.resetCoordinates(), e.runAutoZoom("setCoordinates"), e.onChange();
  }));
}, minWidth: function() {
  this.onPropsChange();
}, maxWidth: function() {
  this.onPropsChange();
}, minHeight: function() {
  this.onPropsChange();
}, maxHeight: function() {
  this.onPropsChange();
}, imageRestriction: function() {
  this.reset();
}, stencilProps: function(e, n) {
  ["aspectRatio", "minAspectRatio", "maxAspectRatio"].find((function(i) {
    return e[i] !== n[i];
  })) && this.$nextTick(this.onPropsChange);
} }, created: function() {
  this.debouncedUpdate = hn(this.update, this.debounce), this.debouncedDisableTransitions = hn(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var e = this.initialized ? this.prepareResult(Ie({}, this.coordinates)) : this.defaultCoordinates(), n = { rotate: this.imageTransforms.rotate % 360, flip: Ie({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var i = this;
    return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Ie({}, this.visibleArea) : null, imageTransforms: n, get canvas() {
      return i.canvas ? i.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Ie({}, this.visibleArea) : null, canvas: void 0, imageTransforms: n };
}, zoom: function(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.transitions, o = s === void 0 || s;
  this.onManipulateImage(new fi({}, { factor: 1 / e, center: n }), { normalize: !1, transitions: o });
}, move: function(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.transitions, o = s === void 0 || s;
  this.onManipulateImage(new fi({ left: e || 0, top: n || 0 }), { normalize: !1, transitions: o });
}, setCoordinates: function(e) {
  var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = i.autoZoom, o = s === void 0 || s, a = i.transitions, l = a === void 0 || a;
  this.$nextTick((function() {
    n.imageLoaded ? (n.transitionsActive || (l && n.enableTransitions(), n.coordinates = n.applyTransform(e), o && n.runAutoZoom("setCoordinates"), l && n.debouncedDisableTransitions()), n.onChange()) : n.delayedTransforms = e;
  }));
}, refresh: function() {
  var e = this, n = this.$refs.image;
  if (this.src && n) return this.initialized ? this.updateVisibleArea().then((function() {
    e.onChange();
  })) : this.resetVisibleArea().then((function() {
    e.onChange();
  }));
}, reset: function() {
  var e = this;
  return this.resetVisibleArea().then((function() {
    e.onChange(!1);
  }));
}, awaitRender: function(e) {
  var n = this;
  this.awaiting || (this.awaiting = !0, this.$nextTick((function() {
    e(), n.awaiting = !1;
  })));
}, prepareResult: function(e) {
  return this.roundResult ? (function(n) {
    var i = n.coordinates, s = n.sizeRestrictions, o = n.positionRestrictions, a = { width: Math.round(i.width), height: Math.round(i.height), left: Math.round(i.left), top: Math.round(i.top) };
    return a.width > s.maxWidth ? a.width = Math.floor(i.width) : a.width < s.minWidth && (a.width = Math.ceil(i.width)), a.height > s.maxHeight ? a.height = Math.floor(i.height) : a.height < s.minHeight && (a.height = Math.ceil(i.height)), Ye(a, o);
  })(Ie(Ie({}, this.getPublicProperties()), {}, { positionRestrictions: Mi(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, n, i, s) {
  var o = this.autoZoomAlgorithm;
  o || (o = this.stencilSize ? er : this.autoZoom ? tr : ir);
  var a = o({ event: { type: e, params: s }, visibleArea: n, coordinates: i, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return Ie(Ie({}, a), {}, { changed: !ua(a.visibleArea, n) || !ua(a.coordinates, i) });
}, runAutoZoom: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transitions, s = i !== void 0 && i, o = Bl(n, yr), a = this.processAutoZoom(e, this.visibleArea, this.coordinates, o), l = a.visibleArea, d = a.coordinates, u = a.changed;
  s && u && this.enableTransitions(), this.visibleArea = l, this.coordinates = d, s && u && this.debouncedDisableTransitions();
}, normalizeEvent: function(e) {
  return (function(n) {
    var i = n.event, s = n.visibleArea, o = n.coefficient;
    if (i.type === "manipulateImage") return re(re({}, i), { move: { left: i.move && i.move.left ? o * i.move.left : 0, top: i.move && i.move.top ? o * i.move.top : 0 }, scale: { factor: i.scale && i.scale.factor ? i.scale.factor : 1, center: i.scale && i.scale.center ? { left: i.scale.center.left * o + s.left, top: i.scale.center.top * o + s.top } : null } });
    if (i.type === "resize") {
      var a = re(re({}, i), { directions: re({}, i.directions) });
      return yt.forEach((function(d) {
        a.directions[d] *= o;
      })), a;
    }
    if (i.type === "move") {
      var l = re(re({}, i), { directions: re({}, i.directions) });
      return ql.forEach((function(d) {
        l.directions[d] *= o;
      })), l;
    }
    return i;
  })(Ie(Ie({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, n = this.$refs.image, i = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? (function(d, u, p) {
      var f = p.rotate, h = p.flip, m = { width: u.naturalWidth, height: u.naturalHeight }, b = ja(m, f), T = d.getContext("2d");
      d.height = b.height, d.width = b.width, T.save();
      var M = kt(He(re({ left: 0, top: 0 }, m)), f);
      return T.translate(-(M.left - b.width / 2), -(M.top - b.height / 2)), T.rotate(f * Math.PI / 180), T.translate(h.horizontal ? m.width : 0, h.vertical ? m.height : 0), T.scale(h.horizontal ? -1 : 1, h.vertical ? -1 : 1), T.drawImage(u, 0, 0, m.width, m.height), T.restore(), d;
    })(this.$refs.sourceCanvas, n, this.imageTransforms) : n, s = Ie({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), o = function(d) {
      return d.find((function(u) {
        return p = u, !Number.isNaN(parseFloat(p)) && isFinite(p);
        var p;
      }));
    }, a = It({ sizeRestrictions: { minWidth: o([s.width, s.minWidth]) || 0, minHeight: o([s.height, s.minHeight]) || 0, maxWidth: o([s.width, s.maxWidth]) || 1 / 0, maxHeight: o([s.height, s.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (s.maxArea && a.width * a.height > s.maxArea) {
      var l = Math.sqrt(s.maxArea / (a.width * a.height));
      a = { width: Math.round(l * a.width), height: Math.round(l * a.height) };
    }
    return (function(d, u, p, f, h) {
      d.width = f ? f.width : p.width, d.height = f ? f.height : p.height;
      var m = d.getContext("2d");
      m.clearRect(0, 0, d.width, d.height), h && (h.imageSmoothingEnabled && (m.imageSmoothingEnabled = h.imageSmoothingEnabled), h.imageSmoothingQuality && (m.imageSmoothingQuality = h.imageSmoothingQuality), h.fillColor && (m.fillStyle = h.fillColor, m.fillRect(0, 0, d.width, d.height), m.save()));
      var b = p.left < 0 ? -p.left : 0, T = p.top < 0 ? -p.top : 0;
      m.drawImage(u, p.left + b, p.top + T, p.width, p.height, b * (d.width / p.width), T * (d.height / p.height), d.width, d.height);
    })(e, i, this.coordinates, a, s), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.visibleArea && n ? Ql(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, s = this.visibleArea && n ? Mi(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return Jl({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i, positionRestrictions: s, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var n = this.defaultSize;
    n || (n = this.stencilSize ? or : ar);
    var i = this.sizeRestrictions;
    i.minWidth, i.minHeight, i.maxWidth, i.maxHeight;
    var s = Qt(n) ? n({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : n, o = this.defaultPosition || nr, a = [s, function(l) {
      var d = l.coordinates;
      return Ie({}, Qt(o) ? o({ coordinates: d, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
    }];
    this.delayedTransforms && a.push.apply(a, Yt(Array.isArray(this.delayedTransforms) ? this.delayedTransforms : [this.delayedTransforms])), this.coordinates = this.applyTransform(a, !0), this.delayedTransforms = null;
  }
}, clearImage: function() {
  var e = this;
  this.imageLoaded = !1, setTimeout((function() {
    var n = e.$refs.stretcher;
    n && (n.style.height = "auto", n.style.width = "auto"), e.coordinates = e.defaultCoordinates(), e.boundaries = { width: 0, height: 0 };
  }), this.transitionTime);
}, enableTransitions: function() {
  this.transitions && (this.transitionsActive = !0);
}, disableTransitions: function() {
  this.transitionsActive = !1;
}, updateBoundaries: function() {
  var e = this, n = this.$refs.stretcher, i = this.$refs.cropper;
  return this.initStretcher({ cropper: i, stretcher: n, imageSize: this.imageSize }), this.$nextTick().then((function() {
    var s = { cropper: i, imageSize: e.imageSize };
    if (Qt(e.defaultBoundaries) ? e.boundaries = e.defaultBoundaries(s) : e.defaultBoundaries === "fit" ? e.boundaries = (function(o) {
      var a = o.cropper, l = o.imageSize, d = a.clientHeight, u = a.clientWidth, p = d, f = l.width * d / l.height;
      return f > u && (f = u, p = l.height * u / l.width), { width: f, height: p };
    })(s) : e.boundaries = (function(o) {
      var a = o.cropper;
      return { width: a.clientWidth, height: a.clientHeight };
    })(s), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  }));
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = Ie(Ie({}, this.defaultImageTransforms), {}, { flip: Ie({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then((function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var n, i, s, o, a, l, d = e.defaultVisibleArea || sr;
    e.visibleArea = Qt(d) ? d({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (n = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, i = n.visibleArea, s = n.boundaries, o = n.getAreaRestrictions, a = re({}, i), l = Ae(s), a.width / a.height !== l && (a.height = a.width / l), Ye(a, o({ visibleArea: a, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
  })).catch((function() {
    e.visibleArea = null;
  }));
}, updateVisibleArea: function() {
  var e = this;
  return this.updateBoundaries().then((function() {
    e.visibleArea = e.fitVisibleArea({ imageSize: e.imageSize, boundaries: e.boundaries, visibleArea: e.visibleArea, coordinates: e.coordinates, getAreaRestrictions: e.getAreaRestrictions }), e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("updateVisibleArea");
  })).catch((function() {
    e.visibleArea = null;
  }));
}, onChange: function() {
  var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  e && this.debounce ? this.debouncedUpdate() : this.update();
}, onChangeImage: function() {
  var e, n = this;
  if (this.imageLoaded = !1, this.delayedTransforms = null, this.src) {
    if ((function(o) {
      if (la(o)) return !1;
      var a = window.location, l = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(o) || [], d = { protocol: l[1] || "", host: l[2] || "", port: l[3] || "" }, u = function(p) {
        return p.port || ((p.protocol || a.protocol) === "http" ? 80 : 433);
      };
      return !(!d.protocol && !d.host && !d.port || d.protocol && d.protocol == a.protocol && d.host && d.host == a.host && d.host && u(d) == u(a));
    })(this.src)) {
      var i = ze(this.crossOrigin) ? this.canvas : this.crossOrigin;
      i === !0 && (i = "anonymous"), this.imageAttributes.crossOrigin = i || null;
    }
    if (this.checkOrientation) {
      var s = (e = this.src, new Promise((function(o) {
        pr(e).then((function(a) {
          var l = br(a);
          o(a ? { source: e, arrayBuffer: a, orientation: l } : { source: e, arrayBuffer: null, orientation: null });
        })).catch((function(a) {
          console.warn(a), o({ source: e, arrayBuffer: null, orientation: null });
        }));
      })));
      setTimeout((function() {
        s.then(n.onParseImage);
      }), this.transitionTime);
    } else setTimeout((function() {
      n.onParseImage({ source: n.src });
    }), this.transitionTime);
  } else this.clearImage();
}, onFailLoadImage: function() {
  this.imageAttributes.src && (this.clearImage(), this.$emit("error"));
}, onSuccessLoadImage: function() {
  var e = this, n = this.$refs.image;
  n && !this.imageLoaded && (this.imageAttributes.height = n.naturalHeight, this.imageAttributes.width = n.naturalWidth, this.imageLoaded = !0, this.resetVisibleArea().then((function() {
    e.$emit("ready"), e.onChange(!1);
  })));
}, onParseImage: function(e) {
  var n = this, i = e.source, s = e.arrayBuffer, o = e.orientation;
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, s && o && o > 1 ? za(i) || !la(i) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([s])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = (function(a) {
    for (var l = [], d = new Uint8Array(a); d.length > 0; ) {
      var u = d.subarray(0, 8192);
      l.push(String.fromCharCode.apply(null, Array.from ? Array.from(u) : u.slice())), d = d.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(l.join(""));
  })(s) : this.imageAttributes.src = i, Qt(this.defaultTransforms) ? this.appliedImageTransforms = rn(this.defaultTransforms()) : Ni(this.defaultTransforms) ? this.appliedImageTransforms = rn(this.defaultTransforms) : this.appliedImageTransforms = (function(a) {
    var l = rn({});
    if (a) switch (a) {
      case 2:
        l.flip.horizontal = !0;
        break;
      case 3:
        l.rotate = -180;
        break;
      case 4:
        l.flip.vertical = !0;
        break;
      case 5:
        l.rotate = 90, l.flip.vertical = !0;
        break;
      case 6:
        l.rotate = 90;
        break;
      case 7:
        l.rotate = 90, l.flip.horizontal = !0;
        break;
      case 8:
        l.rotate = -90;
    }
    return l;
  })(o), this.defaultImageTransforms = Ie(Ie({}, this.appliedImageTransforms), {}, { flip: Ie({}, this.appliedImageTransforms.flip) }), this.$nextTick((function() {
    var a = n.$refs.image;
    a && a.complete && ((function(l) {
      return !!l.naturalWidth;
    })(a) ? n.onSuccessLoadImage() : n.onFailLoadImage());
  }));
}, onResizeEnd: function() {
  this.runAutoZoom("resize", { transitions: !0 });
}, onMoveEnd: function() {
  this.runAutoZoom("move", { transitions: !0 });
}, onMove: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.awaitRender((function() {
    n.coordinates = n.moveAlgorithm(Ie(Ie({}, n.getPublicProperties()), {}, { positionRestrictions: Mi(n.positionRestrictions, n.visibleArea), coordinates: n.coordinates, event: n.normalizeEvent(e) })), n.onChange();
  }));
}, onResize: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender((function() {
    var i = n.sizeRestrictions, s = Math.min(n.coordinates.width, n.coordinates.height, 20 * n.coefficient);
    n.coordinates = n.resizeAlgorithm(Ie(Ie({}, n.getPublicProperties()), {}, { positionRestrictions: Mi(n.positionRestrictions, n.visibleArea), sizeRestrictions: { maxWidth: Math.min(i.maxWidth, n.visibleArea.width), maxHeight: Math.min(i.maxHeight, n.visibleArea.height), minWidth: Math.max(i.minWidth, s), minHeight: Math.max(i.minHeight, s) }, event: n.normalizeEvent(e) })), n.onChange(), n.ticking = !1;
  }));
}, onManipulateImage: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i = n.transitions, s = i !== void 0 && i, o = n.normalize, a = o === void 0 || o;
    s && this.enableTransitions();
    var l = lr(Ie(Ie({}, this.getPublicProperties()), {}, { event: a ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), d = l.visibleArea, u = l.coordinates;
    this.visibleArea = d, this.coordinates = u, this.runAutoZoom("manipulateImage"), this.onChange(), s && this.debouncedDisableTransitions();
  }
}, onPropsChange: function() {
  this.coordinates = this.applyTransform(this.coordinates, !0), this.onChange(!1);
}, getAreaRestrictions: function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.visibleArea, i = e.type, s = i === void 0 ? "move" : i;
  return this.areaRestrictionsAlgorithm({ boundaries: this.boundaries, imageSize: this.imageSize, imageRestriction: this.imageRestriction, visibleArea: n, type: s });
}, getAspectRatio: function(e) {
  var n, i, s = this.stencilProps, o = s.aspectRatio, a = s.minAspectRatio, l = s.maxAspectRatio;
  if (this.$refs.stencil && this.$refs.stencil.aspectRatios) {
    var d = this.$refs.stencil.aspectRatios();
    n = d.minimum, i = d.maximum;
  }
  if (ze(n) && (n = ze(o) ? a : o), ze(i) && (i = ze(o) ? l : o), !e && (ze(n) || ze(i))) {
    var u = this.getStencilSize(), p = u ? Ae(u) : null;
    ze(n) && (n = ra(p) ? p : void 0), ze(i) && (i = ra(p) ? p : void 0);
  }
  return { minimum: n, maximum: i };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, n = e.boundaries, i = e.stencilSize, s = e.aspectRatio, sn(Ae(o = Qt(i) ? i({ boundaries: n, aspectRatio: s }) : i), s) && (o = It({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: o.width, height: o.height, aspectRatio: { minimum: s.minimum, maximum: s.maximum } })), (o.width > n.width || o.height > n.height) && (o = It({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: o.width, height: o.height, aspectRatio: { minimum: Ae(o), maximum: Ae(o) } })), o;
  var e, n, i, s, o;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return Ie({}, ca);
}, flip: function(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.transitions, o = s === void 0 || s;
  if (!this.transitionsActive) {
    o && this.enableTransitions();
    var a = Ie({}, this.imageTransforms.flip), l = cr({ flip: { horizontal: e ? !a.horizontal : a.horizontal, vertical: n ? !a.vertical : a.vertical }, previousFlip: a, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), d = l.visibleArea, u = l.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), n && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = d, this.coordinates = u, this.onChange(), o && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transitions, s = i === void 0 || i;
  if (!this.transitionsActive) {
    s && this.enableTransitions();
    var o = Ie({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var a = rr({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: o, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), l = a.visibleArea, d = a.coordinates, u = this.processAutoZoom("rotateImage", l, d);
    l = u.visibleArea, d = u.coordinates, this.visibleArea = l, this.coordinates = d, this.onChange(), s && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, Er = { key: 0, ref: "canvas", style: { display: "none" } }, _r = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
to.render = function(e, n, i, s, o, a) {
  return y(), ne("div", { ref: "cropper", class: a.classes.cropper }, [g("div", { ref: "stretcher", class: a.classes.stretcher }, null, 2), g("div", { class: a.classes.boundaries, style: a.boundariesStyle }, [(y(), ne(ai(i.backgroundWrapperComponent), { class: a.classes.cropperWrapper, "wheel-resize": a.settings.resizeImage.wheel, "touch-resize": a.settings.resizeImage.touch, "touch-move": a.settings.moveImage.touch, "mouse-move": a.settings.moveImage.mouse, onMove: a.onManipulateImage, onResize: a.onManipulateImage }, { default: E((function() {
    return [g("div", { class: a.classes.background, style: a.boundariesStyle }, null, 6), g("div", { class: a.classes.imageWrapper }, [g("img", { ref: "image", crossorigin: o.imageAttributes.crossOrigin, src: o.imageAttributes.src, class: a.classes.image, style: a.imageStyle, onMousedown: n[1] || (n[1] = gi((function() {
    }), ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), g("div", { class: a.classes.foreground, style: a.boundariesStyle }, null, 6), pi((y(), ne(ai(i.stencilComponent), _n({ ref: "stencil", image: a.image, coordinates: o.coordinates, "stencil-coordinates": a.stencilCoordinates, transitions: a.transitionsOptions }, i.stencilProps, { onResize: a.onResize, onResizeEnd: a.onResizeEnd, onMove: a.onMove, onMoveEnd: a.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[ki, o.imageLoaded]]), i.canvas ? (y(), ne("canvas", Er, null, 512)) : ue("", !0), i.canvas ? (y(), ne("canvas", _r, null, 512)) : ue("", !0)];
  })), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
function wr() {
  const e = C(""), n = new Ko();
  function i(o) {
    const a = n.setPreview(o);
    e.value = a;
  }
  function s() {
    n.clearPreview(), e.value = "";
  }
  return tt(() => {
    n.cleanup();
  }), {
    /** Current preview URL (empty string if none) */
    previewUrl: e,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: i,
    /** Clear preview URL */
    clearPreview: s,
    /** Whether preview exists */
    get hasPreview() {
      return !!e.value;
    }
  };
}
function Cr(e = {}) {
  const { loop: n = 1, autoPlay: i = !0 } = e, s = C(null), o = C(!1);
  let a = null;
  function l() {
    if (a) {
      try {
        a.stopAnimation(), a.clear();
      } catch (h) {
        console.warn("SVGA cleanup error:", h);
      }
      a = null, o.value = !1;
    }
  }
  async function d(h) {
    if (!s.value) {
      console.warn("SVGA container not mounted");
      return;
    }
    l();
    const m = s.value, b = new un.Player(m);
    a = b;
    const T = Ta();
    if (!T) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((M, B) => {
        T.load(
          h,
          ($) => {
            try {
              b.loops = n, b.setVideoItem($), i && (b.startAnimation(), o.value = !0), M();
            } catch (V) {
              B(V);
            }
          },
          ($) => {
            B($);
          }
        );
      });
    } catch (M) {
      throw console.error("SVGA load error:", M), l(), M;
    }
  }
  async function u(h) {
    const m = URL.createObjectURL(h);
    try {
      await d(m);
    } finally {
      URL.revokeObjectURL(m);
    }
  }
  function p() {
    if (a)
      try {
        a.stopAnimation(), o.value = !1;
      } catch (h) {
        console.warn("SVGA stop error:", h);
      }
  }
  function f() {
    if (a)
      try {
        a.startAnimation(), o.value = !0;
      } catch (h) {
        console.warn("SVGA start error:", h);
      }
  }
  return tt(() => {
    l();
  }), {
    /** Container ref (attach to div) */
    containerRef: s,
    /** Play SVGA from URL */
    playUrl: d,
    /** Play SVGA from File/Blob */
    playFile: u,
    /** Stop animation */
    stopAnimation: p,
    /** Start animation */
    startAnimation: f,
    /** Whether animation is playing */
    isPlaying: o
  };
}
const Ir = { class: "image-upload-container" }, Ar = {
  key: 0,
  class: "image-upload-mode-switch"
}, Mr = {
  key: 1,
  class: "image-upload-url-input"
}, Sr = {
  key: 0,
  class: "input-suffix-validating"
}, Tr = {
  key: 2,
  class: "image-upload-url-error"
}, Rr = {
  key: 0,
  class: "image-upload-uploading-overlay"
}, Lr = { class: "image-upload-progress-circle" }, xr = {
  viewBox: "0 0 36 36",
  class: "progress-ring"
}, Nr = ["stroke-dasharray"], kr = { class: "progress-percent" }, Dr = { class: "upload-status-text" }, Or = ["src"], Ur = ["src"], $r = {
  key: 2,
  class: "image-upload-provider-badge"
}, Fr = {
  key: 3,
  class: "image-upload-provider-badge upload-failed-badge"
}, Pr = {
  key: 4,
  class: "image-upload-provider-badge",
  style: { background: "#ff9800" }
}, Vr = {
  key: 5,
  class: "image-upload-preview-actions"
}, zr = ["title"], Gr = ["title"], Br = {
  key: 0,
  class: "image-upload-progress"
}, Wr = { class: "progress-bar" }, Hr = { class: "progress-text" }, Yr = { class: "upload-hint" }, jr = { class: "upload-sub-hint" }, Xr = ["accept"], Kr = ["src"], qr = ["src"], Zr = { class: "image-crop-body" }, Qr = {
  key: 0,
  class: "image-crop-loading"
}, Jr = { class: "image-crop-footer" }, ec = { class: "btn-content" }, tc = /* @__PURE__ */ Te({
  __name: "ImageUpload",
  props: {
    modelValue: { default: "" },
    type: { default: "cover" },
    cropEnabled: { type: Boolean, default: !0 },
    aspectRatio: { default: 16 / 9 },
    maxSize: { default: 10 },
    placeholder: { default: "" },
    showUrlInput: { type: Boolean, default: !0 },
    previewWidth: {},
    previewHeight: { default: 160 },
    uploadEnabled: { type: Boolean, default: !1 },
    accept: {},
    acceptHint: {},
    maxBytes: {},
    className: {},
    deferUpload: { type: Boolean, default: !1 },
    skipSvgaValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "fileReady"],
  setup(e, { expose: n, emit: i }) {
    const { t: s } = ke();
    qo(un.Parser);
    const o = e, a = i, l = P(() => o.placeholder || s(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE)), d = P(() => o.acceptHint || s("Supports JPG/PNG/GIF/WebP max {max}MB", { max: o.maxSize })), u = C(null), p = C(null), f = C(!1), h = C(0), m = C(!1), b = C(""), T = C(!o.uploadEnabled), M = C(o.modelValue), B = C(null), { previewUrl: $, setPreview: V } = wr(), Z = C(!1), Y = C(!1), {
      containerRef: J,
      playUrl: oe
    } = Cr({ loop: 1, autoPlay: !0 }), de = C(null);
    let fe = null;
    function H() {
      if (fe) {
        try {
          fe.stopAnimation(), fe.clear();
        } catch {
        }
        fe = null;
      }
    }
    function D(F) {
      oe(F).catch((se) => {
        console.error("[ImageUpload] SVGA preview load error:", se);
      });
    }
    function k(F) {
      H(), Je(() => {
        if (!de.value) return;
        const se = new un.Player(de.value);
        se.loops = 0, se.setContentMode("AspectFit"), fe = se;
        const Me = Ta();
        Me && Me.load(
          F,
          (Be) => {
            se.setVideoItem(Be), se.startAnimation();
          },
          (Be) => {
            console.error("[ImageUpload] SVGA URL preview load error:", Be);
          }
        );
      });
    }
    const x = C(!1), R = C(""), S = C(1), O = C(1), N = C(!1), L = C(null), A = C({ width: 300, height: 300 });
    function ie() {
      if (!L.value) return;
      const F = L.value.clientWidth, se = L.value.clientHeight || 320, Me = F / se, Be = o.aspectRatio || 16 / 9;
      let ft, it;
      Be > Me ? (ft = Math.min(F, 500), it = ft / Be) : (it = Math.min(se, 320), ft = it * Be), A.value = { width: Math.round(ft), height: Math.round(it) };
    }
    Le(x, async (F) => {
      F && (await Je(), setTimeout(ie, 100));
    }), Le(() => o.aspectRatio, () => {
      x.value && ie();
    }), At(() => {
      window.addEventListener("resize", ie);
    });
    const he = C(!1), ve = C(""), ae = new Zo({
      setValidating: (F) => {
        he.value = F;
      },
      setError: (F) => {
        ve.value = F;
      },
      onConfirm: (F) => {
        a("update:modelValue", F);
      }
    }, o.skipSvgaValidation);
    Le(() => o.skipSvgaValidation, (F) => {
      ae.updateSkipSvgaValidation(!!F);
    });
    const U = P(() => Q(M.value));
    Le(() => o.modelValue, (F) => {
      M.value = F, ve.value = "", F && o.uploadEnabled && (T.value = !0), o.deferUpload && (B.value = null, V(null), Z.value = !1, Y.value = !1, a("fileReady", null));
    }), Le(() => o.uploadEnabled, (F) => {
      F && !o.modelValue && (T.value = !1);
    }), Le(
      [() => o.modelValue, T, () => o.uploadEnabled],
      ([F, se, Me]) => {
        F && (se || !Me) && Hn(F) ? k(F) : H();
      },
      { flush: "post" }
    ), tt(() => {
      ae.dispose(), H(), window.removeEventListener("resize", ie);
    });
    function ce() {
      var F;
      (F = u.value) == null || F.click();
    }
    function _e(F) {
      var Me;
      const se = (Me = F.target.files) == null ? void 0 : Me[0];
      se && Oe(se), F.target.value = "";
    }
    async function Oe(F) {
      const se = es(F, o.accept);
      if (!se.valid) {
        X.error(se.errorHint);
        return;
      }
      if (!ts(F, o.maxSize)) {
        X.error(s("File size exceeds {max}MB", { max: o.maxSize }));
        return;
      }
      try {
        await is(F, o.accept, o.skipSvgaValidation);
      } catch (Me) {
        const Be = Me instanceof Error ? Me : new Error(String(Me));
        X.error(Be.message || s(r.FILE_LOAD_FAILED));
        return;
      }
      if (o.cropEnabled) {
        S.value = 1, O.value = 1, R.value = "", N.value = !0, x.value = !0;
        try {
          const Me = await ns(F);
          R.value = Me;
        } catch {
          X.error(s(r.IMAGE_LOAD_FAILED)), x.value = !1;
        } finally {
          N.value = !1;
        }
      } else
        await Xe(F);
    }
    async function xe() {
      if (!(!R.value || !p.value))
        try {
          const { canvas: F } = p.value.getResult(), se = await as(F, "image/jpeg", 0.92);
          x.value = !1, await Xe(se);
        } catch {
          X.error(s(r.CROP_FAILED));
        }
    }
    function je() {
      x.value = !1, R.value = "";
    }
    async function Xe(F) {
      if (o.deferUpload) {
        B.value = F, V(F);
        const se = os(F), Me = ss(F);
        Z.value = Me, Y.value = se, a("fileReady", F), se && D(previewUrl);
        return;
      }
      f.value = !0, h.value = 0;
      try {
        const se = await na(F, o.type, (Me) => {
          h.value = Me;
        });
        a("update:modelValue", se.url), b.value = se.provider || "", X.success(s(r.UPLOAD_SUCCESS));
      } catch (se) {
        const Me = se instanceof Error ? se : new Error(String(se));
        X.error(`${s("Upload Failed With Error", { error: Me.message || s(r.NETWORK_ERROR) })}`);
      } finally {
        f.value = !1, h.value = 0;
      }
    }
    function ct(F) {
      F.preventDefault();
      const se = ls(F);
      se && Oe(se);
    }
    function pe() {
      ae.cancelValidation(), he.value = !1, ve.value = "", T.value = !1;
    }
    function ge() {
      ae.cancelValidation(), he.value = !1, ve.value = "", T.value = !0;
    }
    function le() {
      ae.handleUrlFocus();
    }
    function me(F) {
      F && typeof F == "object" && "target" in F && F.preventDefault(), ae.handleUrlBlur(
        M.value,
        o.maxBytes
      );
    }
    function Ve(F) {
      typeof F == "string" && (M.value = F, ve.value = "", ae.cancelValidation(), he.value = !1);
    }
    function Re(F) {
      F && typeof F == "object" && "target" in F && F.preventDefault(), ae.handleUrlEnter(
        M.value,
        o.maxBytes
      );
    }
    function mt(F) {
      F == null || F.stopPropagation(), ae.cancelValidation(), he.value = !1, ve.value = "", a("update:modelValue", ""), M.value = "", b.value = "", f.value = !1, h.value = 0, m.value = !1, H(), o.deferUpload && (B.value = null, V(null), Z.value = !1, Y.value = !1, a("fileReady", null));
    }
    function at(F) {
      F.target.style.display = "none";
    }
    return n({
      /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
      get isUrlInputMode() {
        return T.value;
      },
      /** 当前是否正在验证 URL */
      get isValidating() {
        return he.value;
      },
      /** URL 验证错误信息 */
      get urlValidationError() {
        return ve.value;
      },
      /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
      get hasUrlError() {
        return T.value ? !!(ve.value || o.maxBytes && M.value.trim() && U.value > o.maxBytes) : !1;
      },
      /** 当前 URL 输入框中的值（用于提交时校验实际输入） */
      get urlInputValue() {
        return M.value;
      },
      /** 验证图片 URL 是否可访问 */
      validateImageUrl: Qo,
      /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
      setUrlError(F) {
        ve.value = F;
      },
      /** 切换到 URL 输入模式 */
      switchToUrlMode: ge,
      /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
      reset() {
        ae.reset(), B.value = null, V(null), Z.value = !1, Y.value = !1, H(), M.value = o.modelValue || "", b.value = "", ve.value = "", f.value = !1, h.value = 0, m.value = !1, o.uploadEnabled && (T.value = !!o.modelValue), a("fileReady", null);
      },
      /**
       * 确保 URL 输入已验证并返回最终 URL。
       * - 如果当前不在 URL 输入模式，返回 null
       * - 如果正在验证，等待验证完成
       * - 如果输入框中有未 blur 确认的 URL，主动触发验证
       * - 验证成功返回 URL，验证失败抛出错误
       */
      async ensureUrlValidated() {
        return T.value ? await ae.ensureUrlValidatedWithErrorCheck(
          M.value,
          o.modelValue || "",
          !!ve.value,
          o.maxBytes
        ) : null;
      },
      async uploadPendingFile() {
        const F = B.value;
        if (!F) return null;
        f.value = !0, h.value = 0, m.value = !1;
        try {
          const se = await na(F, o.type, (Me) => {
            h.value = Me;
          });
          return B.value = null, b.value = se.provider || "", m.value = !1, se.url;
        } catch (se) {
          throw m.value = !0, se;
        } finally {
          f.value = !1, h.value = 0;
        }
      }
    }), (F, se) => {
      const Me = ee("t-input"), Be = ee("t-button"), ft = ee("t-dialog");
      return y(), w("div", Ir, [
        e.uploadEnabled && e.showUrlInput ? (y(), w("div", Ar, [
          c("button", {
            class: we(["mode-switch-btn", { active: !T.value }]),
            onClick: pe
          }, [
            g(t(Wn)),
            W(" " + v(t(s)(t(r).UPLOAD_IMAGE)), 1)
          ], 2),
          c("button", {
            class: we(["mode-switch-btn", { active: T.value }]),
            onClick: ge
          }, v(t(s)(t(r).ENTER_URL)), 3)
        ])) : ue("", !0),
        T.value || !e.uploadEnabled ? (y(), w("div", Mr, [
          g(Me, {
            "model-value": M.value,
            "onUpdate:modelValue": Ve,
            onFocus: le,
            onBlur: me,
            onEnter: Re,
            placeholder: t(s)(t(r).ENTER_IMAGE_URL),
            status: ve.value ? "error" : "default"
          }, Ea({ _: 2 }, [
            e.maxBytes ? {
              name: "suffix",
              fn: E(() => [
                he.value ? (y(), w("span", Sr, v(t(s)(t(r).VALIDATING)), 1)) : (y(), w("span", {
                  key: 1,
                  class: we(["input-suffix-count", { "byte-overflow": U.value > e.maxBytes }])
                }, v(U.value) + "/" + v(e.maxBytes), 3))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["model-value", "placeholder", "status"])
        ])) : ue("", !0),
        ve.value && (T.value || !e.uploadEnabled) ? (y(), w("div", Tr, v(ve.value), 1)) : ue("", !0),
        e.uploadEnabled && !T.value ? (y(), w(Ee, { key: 3 }, [
          t($) ? (y(), w("div", {
            key: 0,
            class: "image-upload-preview",
            style: Ge({
              width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
              height: `${e.previewHeight || 160}px`
            })
          }, [
            f.value ? (y(), w("div", Rr, [
              c("div", Lr, [
                (y(), w("svg", xr, [
                  se[3] || (se[3] = c("path", {
                    class: "progress-ring-bg",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, -1)),
                  c("path", {
                    class: "progress-ring-fill",
                    "stroke-dasharray": `${h.value}, 100`,
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, 8, Nr)
                ])),
                c("span", kr, v(h.value) + "%", 1)
              ]),
              c("span", Dr, v(t(s)(t(r).UPLOADING)), 1)
            ])) : (y(), w(Ee, { key: 1 }, [
              Y.value ? (y(), w("div", {
                key: 0,
                ref_key: "svgaPreviewRef",
                ref: J,
                class: "svga-preview-container"
              }, null, 512)) : Z.value ? (y(), w("video", {
                key: 1,
                src: t($),
                muted: "",
                loop: "",
                autoplay: "",
                playsinline: ""
              }, null, 8, Or)) : (y(), w("img", {
                key: 2,
                src: t($),
                alt: "preview"
              }, null, 8, Ur))
            ], 64)),
            !f.value && b.value ? (y(), w("span", $r, v(b.value.toUpperCase()), 1)) : ue("", !0),
            !f.value && m.value ? (y(), w("span", Fr, v(t(s)(t(r).UPLOAD_FAILED)), 1)) : !f.value && !b.value ? (y(), w("span", Pr, v(t(s)(t(r).PENDING_UPLOAD)), 1)) : ue("", !0),
            f.value ? ue("", !0) : (y(), w("div", Vr, [
              c("button", {
                class: "preview-action-btn",
                onClick: ce,
                title: t(s)(t(r).RE_UPLOAD)
              }, [
                g(t(Wn))
              ], 8, zr),
              c("button", {
                class: "preview-action-btn",
                onClick: mt,
                title: t(s)(t(r).DELETE)
              }, [
                g(t(Bi))
              ], 8, Gr)
            ]))
          ], 4)) : (y(), w("div", {
            key: 1,
            class: we(["image-upload-dropzone", { uploading: f.value }]),
            onClick: se[0] || (se[0] = (it) => !f.value && ce()),
            onDragover: se[1] || (se[1] = //@ts-ignore
            (...it) => t(Yn) && t(Yn)(...it)),
            onDrop: ct,
            style: Ge({ height: `${e.previewHeight || 160}px` })
          }, [
            f.value ? (y(), w("div", Br, [
              c("div", Wr, [
                c("div", {
                  class: "progress-fill",
                  style: Ge({ width: `${h.value}%` })
                }, null, 4)
              ]),
              c("span", Hr, v(h.value) + "%", 1)
            ])) : (y(), w(Ee, { key: 1 }, [
              g(t($o), {
                size: "32",
                "stroke-width": 1.2
              }),
              c("span", Yr, v(l.value), 1),
              c("span", jr, v(d.value), 1)
            ], 64))
          ], 38)),
          c("input", {
            ref_key: "fileInputRef",
            ref: u,
            type: "file",
            accept: e.accept || "image/jpeg,image/png,image/gif,image/webp",
            style: { display: "none" },
            onChange: _e
          }, null, 40, Xr)
        ], 64)) : ue("", !0),
        e.modelValue && (T.value || !e.uploadEnabled) ? (y(), w("div", {
          key: 4,
          class: "image-upload-preview url-preview",
          style: Ge({
            width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
            height: `${e.previewHeight || 120}px`,
            marginTop: "8px"
          })
        }, [
          t(Hn)(e.modelValue) ? (y(), w("div", {
            key: 0,
            ref_key: "svgaUrlPreviewRef",
            ref: de,
            class: "svga-preview-container"
          }, null, 512)) : t(Jo)(e.modelValue) ? (y(), w("video", {
            key: 1,
            src: e.modelValue,
            muted: "",
            loop: "",
            autoplay: "",
            playsinline: ""
          }, null, 8, Kr)) : (y(), w("img", {
            key: 2,
            src: e.modelValue,
            alt: "preview",
            onError: at
          }, null, 40, qr))
        ], 4)) : ue("", !0),
        g(ft, {
          visible: x.value,
          "onUpdate:visible": se[2] || (se[2] = (it) => x.value = it),
          header: t(s)(t(r).CROP_IMAGE),
          width: 600,
          footer: !1,
          class: "image-crop-modal",
          onClose: je
        }, {
          default: E(() => [
            c("div", Zr, [
              c("div", {
                ref_key: "cropAreaRef",
                ref: L,
                class: "image-crop-area"
              }, [
                N.value ? (y(), w("div", Qr, [
                  se[4] || (se[4] = c("div", { class: "loading-spinner" }, null, -1)),
                  c("span", null, v(t(s)(t(r).IMAGE_LOADING)), 1)
                ])) : R.value ? (y(), ne(t(to), {
                  key: 1,
                  ref_key: "cropperRef",
                  ref: p,
                  src: R.value,
                  style: { width: "100%", height: "100%" },
                  "resize-image": {
                    adjustStencil: !1
                  },
                  "stencil-component": t(xn),
                  "stencil-props": {
                    aspectRatio: o.aspectRatio,
                    movable: !1,
                    resizable: !1,
                    handlers: {},
                    lines: {
                      north: !0,
                      west: !0,
                      south: !0,
                      east: !0
                    }
                  },
                  "stencil-size": A.value,
                  "image-restriction": "stencil",
                  "min-zoom": 0.5,
                  "max-zoom": 3,
                  zoom: O.value
                }, null, 8, ["src", "stencil-component", "stencil-props", "stencil-size", "zoom"])) : ue("", !0)
              ], 512)
            ]),
            c("div", Jr, [
              g(Be, {
                variant: "outline",
                shape: "round",
                onClick: je
              }, {
                default: E(() => [
                  W(v(t(s)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              g(Be, {
                theme: "primary",
                shape: "round",
                disabled: N.value || !R.value,
                onClick: xe,
                class: "crop-confirm-btn"
              }, {
                default: E(() => [
                  c("span", ec, [
                    g(t(Fo)),
                    c("span", null, v(t(s)(t(r).CONFIRM_CROP)), 1)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
}), Gi = /* @__PURE__ */ ci(tc, [["__scopeId", "data-v-8b84b2f0"]]), ic = { class: "custom-info-section" }, nc = {
  key: 2,
  class: "custom-info-count"
}, ac = {
  key: 0,
  class: "custom-info-container"
}, oc = { class: "custom-input-wrap" }, sc = { class: "custom-input-wrap custom-value-wrap" }, lc = {
  key: 1,
  class: "create-success-content"
}, rc = { class: "create-success-summary" }, cc = {
  key: 0,
  class: "create-success-section"
}, uc = { class: "create-success-section-title" }, dc = { class: "stream-info-items" }, hc = { class: "stream-info-item" }, vc = { class: "stream-info-label" }, mc = { class: "stream-info-value" }, fc = { class: "stream-info-item" }, gc = { class: "stream-info-label" }, pc = { class: "stream-info-value" }, bc = { class: "dialog-footer" }, yc = /* @__PURE__ */ Te({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, { extraFieldsSlot: o } = s, { createLive: a } = Ft(), l = n, d = P({
      get: () => s.visible,
      set: (ae) => l("update:visible", ae)
    }), u = rs.map((ae) => ({
      value: ae.value,
      label: i(ae.labelKey)
    })), p = (ae) => Q(ae), f = (ae) => Q(ae), h = (ae) => {
      m.value.maxSeatCount = Number(ae) || 1;
    }, m = C(jn()), b = C([]), T = C(!1), M = C(!1), B = C(!1), $ = C(!1), V = C(""), Z = C(""), Y = C(null), J = C(""), oe = C(null), de = C(!1), fe = P(() => Q(m.value.anchorId)), H = P(() => Q(m.value.liveName));
    P(() => b.value.filter((ae) => ae.key.trim()).length);
    const D = P(() => {
      var ae;
      return i(((ae = cs(m.value.seatTemplate)) == null ? void 0 : ae.descKey) || "");
    }), k = P(() => us(m.value.seatTemplate)), x = P(() => $.value ? V.value === "error" ? `OBS 配置失败：${Z.value}` : Y.value ? "OBS 已配置完成，可直接复制下方推流信息。" : J.value ? `OBS 已配置完成，但推流信息生成失败：${J.value}` : "OBS 已配置完成。" : ""), R = P(() => V.value === "error" || !!J.value), S = (ae) => {
      de.value = !!ae;
    }, O = async (ae, U) => {
      try {
        await Ra(ae), X.success(i("Copy Label Copied", { label: U }));
      } catch (ce) {
        const _e = ce, Oe = _e.ErrorInfo || (_e instanceof Error ? _e.message : String(_e)) || i(r.UNKNOWN_ERROR);
        X.error(i("Copy Failed With Error", { error: Oe }));
      }
    }, N = () => {
      if (b.value.length >= Ke.maxCount) {
        X.error(i("Custom info max count exceeded", { max: Ke.maxCount }));
        return;
      }
      b.value.push({ key: "", value: "" });
    }, L = (ae) => {
      b.value.splice(ae, 1);
    }, A = () => {
      var ae;
      m.value = jn(), b.value = [], T.value = !1, B.value = !1, $.value = !1, V.value = "", Z.value = "", Y.value = null, J.value = "", de.value = !1, (ae = oe.value) == null || ae.reset();
    }, ie = () => {
      A(), l("update:visible", !1);
    }, he = async () => {
      if (!m.value.anchorId.trim()) {
        X.error(i(r.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (fe.value > Wt) {
        X.error(i("Anchor ID cannot exceed bytes current", { max: Wt, current: fe.value }));
        return;
      }
      if (H.value > bt) {
        X.error(i("Title cannot exceed 100 bytes current", { current: H.value }));
        return;
      }
      if (b.value.some(ti)) {
        X.error(i(r.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      M.value = !0, V.value = "";
      let ae = "", U = m.value.anchorId;
      try {
        let ce = "";
        try {
          ce = await La({
            handle: oe.value,
            hasPendingFile: de.value,
            fallbackUrl: m.value.coverUrl,
            label: i(r.COVER_IMAGE)
          });
        } catch (xe) {
          const je = xe instanceof Pi ? xe.message : `${i(r.COVER_PROCESSING_FAILED)}: ${xe instanceof Error ? xe.message : String(xe) || i(r.UNKNOWN_ERROR)}`;
          X.error(je), M.value = !1;
          return;
        }
        const _e = ds({
          formData: m.value,
          coverUrl: ce,
          customInfos: b.value,
          useObsStreaming: $.value
        });
        ae = _e.liveId, U = _e.anchorId, await a(_e), Y.value = null, J.value = "";
        let Oe = !$.value;
        if ($.value) {
          const xe = await Zs({
            liveId: ae,
            anchorId: U,
            onStatusChange: (je) => {
              V.value = je;
            },
            messages: {
              getStreamInfoFailed: i(r.FAILED_TO_GET_STREAM_INFO),
              importAccountFailed: i(r.FAILED_TO_IMPORT_ACCOUNT),
              addRobotFailed: i(r.FAILED_TO_ADD_ROBOT),
              pickSeatFailed: i(r.FAILED_TO_PICK_SEAT),
              setupFailed: i(r.OBS_SETUP_FAILED)
            }
          });
          Y.value = xe.streamInfo, J.value = xe.streamInfoError, Z.value = xe.setupError, Oe = xe.configuredSuccessfully;
        }
        B.value = !0, X.success($.value && Oe ? i(r.LIVE_CREATED_SUCCESSFULLY_OBS) : i(r.LIVE_CREATED_SUCCESSFULLY));
      } catch (ce) {
        const _e = ce instanceof Error ? ce : new Error(String(ce));
        X.error(`${i(r.REQUEST_FAILED)}: ${_e.message || i(r.NETWORK_ERROR)}`);
      } finally {
        M.value = !1;
      }
    }, ve = () => {
      A(), l("success"), l("update:visible", !1);
    };
    return (ae, U) => {
      const ce = ee("t-input"), _e = ee("t-form-item"), Oe = ee("t-select"), xe = ee("t-input-number"), je = ee("t-checkbox"), Xe = ee("t-button"), ct = ee("t-form"), pe = ee("t-dialog");
      return y(), ne(pe, {
        visible: d.value,
        "onUpdate:visible": U[8] || (U[8] = (ge) => d.value = ge),
        header: B.value ? t(i)(t(r).CREATE_SUCCESS) : t(i)(t(r).CREATE_LIVE),
        width: 560,
        placement: "center",
        class: "create-live-modal",
        onClose: ie
      }, {
        footer: E(() => {
          var ge, le;
          return [
            c("div", bc, [
              B.value ? (y(), ne(Xe, {
                key: 1,
                theme: "primary",
                shape: "round",
                onClick: ve
              }, {
                default: E(() => [
                  W(v(t(i)(t(r).COMPLETE)), 1)
                ]),
                _: 1
              })) : (y(), w(Ee, { key: 0 }, [
                g(Xe, {
                  variant: "outline",
                  shape: "round",
                  onClick: ie
                }, {
                  default: E(() => [
                    W(v(t(i)(t(r).CANCEL)), 1)
                  ]),
                  _: 1
                }),
                g(Xe, {
                  theme: "primary",
                  shape: "round",
                  loading: M.value,
                  disabled: M.value || !m.value.anchorId.trim() || ((ge = oe.value) == null ? void 0 : ge.isValidating) || ((le = oe.value) == null ? void 0 : le.hasUrlError),
                  onClick: he
                }, {
                  default: E(() => [
                    W(v(M.value ? t(i)(t(r).CREATING) : t(i)(t(r).CREATE)), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64))
            ])
          ];
        }),
        default: E(() => [
          B.value ? (y(), w("div", lc, [
            c("div", rc, [
              U[9] || (U[9] = c("div", { class: "create-success-icon" }, [
                c("svg", {
                  width: "48",
                  height: "48",
                  viewBox: "0 0 48 48",
                  fill: "none"
                }, [
                  c("circle", {
                    cx: "24",
                    cy: "24",
                    r: "24",
                    fill: "#E8F5E9"
                  }),
                  c("path", {
                    d: "M14 24L21 31L34 18",
                    stroke: "#07C160",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ])
              ], -1)),
              c("h3", null, v(t(i)(t(r).LIVE_CREATED_SUCCESSFULLY)), 1),
              x.value ? (y(), w("p", {
                key: 0,
                class: we(["create-success-description", { "is-error": R.value }])
              }, v(x.value), 3)) : ue("", !0)
            ]),
            Y.value ? (y(), w("div", cc, [
              c("div", uc, v(t(i)(t(r).STREAM_INFO)), 1),
              c("div", dc, [
                c("div", hc, [
                  c("div", vc, [
                    c("span", null, v(t(i)(t(r).SERVER_URL)), 1),
                    c("button", {
                      class: "action-link",
                      onClick: U[6] || (U[6] = (ge) => O(Y.value.serverUrl, t(i)(t(r).SERVER_URL)))
                    }, [
                      g(t(Dt)),
                      W(" " + v(t(i)(t(r).COPY)), 1)
                    ])
                  ]),
                  c("code", mc, v(Y.value.serverUrl), 1)
                ]),
                c("div", fc, [
                  c("div", gc, [
                    c("span", null, v(t(i)(t(r).STREAM_KEY)), 1),
                    c("button", {
                      class: "action-link",
                      onClick: U[7] || (U[7] = (ge) => O(Y.value.streamKey, t(i)(t(r).STREAM_KEY)))
                    }, [
                      g(t(Dt)),
                      W(" " + v(t(i)(t(r).COPY)), 1)
                    ])
                  ]),
                  c("code", pc, v(Y.value.streamKey), 1)
                ])
              ])
            ])) : ue("", !0)
          ])) : (y(), ne(ct, {
            key: 0,
            class: "create-live-form",
            "label-width": t(oi)(100),
            colon: !1
          }, {
            default: E(() => [
              g(_e, {
                label: t(i)(t(r).LIVE_HOST),
                "required-mark": !0
              }, {
                default: E(() => [
                  g(ce, {
                    modelValue: m.value.anchorId,
                    "onUpdate:modelValue": U[0] || (U[0] = (ge) => m.value.anchorId = ge),
                    placeholder: t(i)(t(r).ENTER_ANCHOR_ID),
                    status: fe.value > t(Wt) ? "error" : "default",
                    tips: fe.value > t(Wt) ? t(i)("Anchor ID cannot exceed bytes", { max: t(Wt) }) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: we(["input-suffix-count", { "byte-overflow": fe.value > t(Wt) }])
                      }, v(fe.value) + "/" + v(t(Wt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(_e, {
                label: t(i)(t(r).LIVE_TITLE)
              }, {
                default: E(() => [
                  g(ce, {
                    modelValue: m.value.liveName,
                    "onUpdate:modelValue": U[1] || (U[1] = (ge) => m.value.liveName = ge),
                    placeholder: t(i)(t(r).ENTER_LIVE_TITLE),
                    status: H.value > t(bt) ? "error" : "default",
                    tips: H.value > t(bt) ? t(i)(t(r).TITLE_CANNOT_EXCEED_100_BYTES) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: we(["input-suffix-count", { "byte-overflow": H.value > t(bt) }])
                      }, v(H.value) + "/" + v(t(bt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(_e, {
                label: t(i)(t(r).COVER_IMAGE)
              }, {
                default: E(() => [
                  g(Gi, {
                    ref_key: "coverUploadRef",
                    ref: oe,
                    modelValue: m.value.coverUrl,
                    "onUpdate:modelValue": U[2] || (U[2] = (ge) => m.value.coverUrl = ge),
                    type: "cover",
                    "upload-enabled": e.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": k.value,
                    placeholder: t(i)(t(r).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": e.uploadEnabled,
                    onFileReady: S
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(_e, {
                label: t(i)(t(r).LAYOUT_TEMPLATE),
                "required-mark": !0,
                help: D.value
              }, {
                default: E(() => [
                  g(Oe, {
                    modelValue: m.value.seatTemplate,
                    "onUpdate:modelValue": U[3] || (U[3] = (ge) => m.value.seatTemplate = ge),
                    options: t(u),
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              m.value.seatTemplate === "AudioSalon" || m.value.seatTemplate === "Karaoke" ? (y(), ne(_e, {
                key: 0,
                label: t(i)(t(r).MAX_SEATS),
                help: t(i)(t(r).MAX_SEATS_HELP)
              }, {
                default: E(() => [
                  g(xe, {
                    "model-value": m.value.maxSeatCount,
                    "onUpdate:modelValue": h,
                    min: 1,
                    max: 16,
                    status: m.value.maxSeatCount < 1 || m.value.maxSeatCount > 16 ? "error" : "default",
                    tips: m.value.maxSeatCount < 1 || m.value.maxSeatCount > 16 ? t(i)(t(r).SEAT_COUNT_RANGE_1_16) : "",
                    placeholder: t(i)(t(r).ENTER_MAX_SEAT_COUNT),
                    theme: "normal",
                    style: { width: "100%" }
                  }, null, 8, ["model-value", "status", "tips", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "help"])) : ue("", !0),
              g(_e, {
                label: t(i)(t(r).STREAMING_METHOD),
                help: t(i)(t(r).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
              }, {
                default: E(() => [
                  g(je, {
                    modelValue: $.value,
                    "onUpdate:modelValue": U[4] || (U[4] = (ge) => $.value = ge)
                  }, {
                    default: E(() => [
                      W(v(t(i)(t(r).USE_OBS_STREAMING)), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              c("div", ic, [
                c("div", {
                  class: "custom-info-toggle",
                  onClick: U[5] || (U[5] = (ge) => T.value = !T.value)
                }, [
                  T.value ? (y(), ne(t(Ui), {
                    key: 0,
                    size: "16"
                  })) : (y(), ne(t(Ia), {
                    key: 1,
                    size: "16"
                  })),
                  c("span", null, v(t(i)(t(r).CUSTOM_INFORMATION)), 1),
                  b.value.length > 0 ? (y(), w("span", nc, v(b.value.length), 1)) : ue("", !0)
                ]),
                T.value ? (y(), w("div", ac, [
                  (y(!0), w(Ee, null, Ne(b.value, (ge, le) => (y(), w("div", {
                    key: le,
                    class: "custom-info-row"
                  }, [
                    c("div", oc, [
                      g(ce, {
                        modelValue: ge.key,
                        "onUpdate:modelValue": (me) => ge.key = me,
                        placeholder: t(i)(t(r).ENTER_KEY),
                        status: p(ge.key) > t(Ke).maxKeyBytes || t(ti)(ge) ? "error" : "default",
                        tips: p(ge.key) > t(Ke).maxKeyBytes ? t(i)("Key exceeds byte limit", { max: t(Ke).maxKeyBytes }) : t(ti)(ge) ? t(i)(t(r).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    c("div", sc, [
                      g(ce, {
                        modelValue: ge.value,
                        "onUpdate:modelValue": (me) => ge.value = me,
                        placeholder: t(i)(t(r).ENTER_VALUE),
                        status: f(ge.value) > t(Ke).maxValueBytes ? "error" : "default",
                        tips: f(ge.value) > t(Ke).maxValueBytes ? t(i)(t(r).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    g(Xe, {
                      variant: "text",
                      shape: "circle",
                      onClick: (me) => L(le)
                    }, {
                      default: E(() => [
                        g(t(Bi))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  b.value.length < t(Ke).maxCount ? (y(), ne(Xe, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: N,
                    theme: "primary"
                  }, {
                    icon: E(() => [
                      g(t(An))
                    ]),
                    default: E(() => [
                      W(" " + v(t(i)(t(r).ADD)), 1)
                    ]),
                    _: 1
                  })) : ue("", !0)
                ])) : ue("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"]))
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Ec = /* @__PURE__ */ ci(yc, [["__scopeId", "data-v-0795ae94"]]);
function io(e) {
  const { action: n, onSuccess: i, onError: s, successMessage: o, errorMessage: a } = e, l = C(!1);
  let d = !1;
  return { loading: l, execute: async (...f) => {
    if (d) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    d = !0, l.value = !0;
    try {
      const h = await n(...f);
      return o && X.success(o), i == null || i(h), h;
    } catch (h) {
      const m = h instanceof Error ? h : new Error(String(h)), b = a ? `${a}: ${m.message}` : m.message;
      X.error(b), s == null || s(m);
      return;
    } finally {
      d = !1, l.value = !1;
    }
  }, reset: () => {
    d = !1, l.value = !1;
  } };
}
const Et = /* @__PURE__ */ Te({
  __name: "SlotRenderer",
  props: {
    slotComponent: {
      type: [Object, Function, String],
      default: null
    },
    slotProps: {
      type: Object,
      default: () => ({})
    }
  },
  setup(e) {
    const n = e, i = C(!1);
    return xo((s) => n.slotComponent ? (console.error("[LiveManager Slot] render failed:", s), i.value = !0, !1) : !0), (s, o) => e.slotComponent && !i.value ? (y(), ne(ai(e.slotComponent), No(_n({ key: 0 }, e.slotProps)), null, 16)) : ue("", !0);
  }
}), _c = { class: "custom-info-section" }, wc = {
  key: 2,
  class: "custom-info-count"
}, Cc = {
  key: 0,
  class: "custom-info-container"
}, Ic = { class: "custom-input-wrap" }, Ac = { class: "custom-input-wrap custom-value-wrap" }, Mc = { class: "dialog-footer" }, Sc = /* @__PURE__ */ Te({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    room: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), { fetchLiveDetail: s, updateLive: o } = Ft(), a = e, l = P(() => a.room ? "RoomId" in a.room && a.room.RoomId ? a.room.RoomId : "id" in a.room && a.room.id ? a.room.id : "" : ""), d = n, u = P({
      get: () => a.visible,
      set: (D) => d("update:visible", D)
    }), p = (D) => Q(D), f = (D) => Q(D), h = C(Xn()), m = C([]), b = C(!1), T = C([]), M = C(Kn), B = C(null), $ = C(!1), { loading: V, execute: Z } = io({
      action: async (D) => {
        var x, R;
        const k = ((x = a.room) == null ? void 0 : x.RoomId) || ((R = a.room) == null ? void 0 : R.id) || "";
        return o({
          liveId: k,
          ...D
        });
      },
      successMessage: i(r.LIVE_INFO_UPDATED),
      errorMessage: i("Update failed"),
      onSuccess: () => {
        d("success", {
          liveName: h.value.liveName.trim(),
          coverUrl: h.value.coverUrl
        }), fe();
      }
    }), Y = (D) => {
      $.value = !!D;
    }, J = P(() => Q(h.value.liveName));
    P(() => m.value.filter((D) => D.key.trim()).length), Le([() => {
      var D, k;
      return ((D = a.room) == null ? void 0 : D.RoomId) || ((k = a.room) == null ? void 0 : k.id);
    }, () => a.visible], async ([D, k]) => {
      const x = a.room;
      if (x && k) {
        const R = "RoomName" in x ? x.RoomName : x.liveName || "", S = "CoverURL" in x ? x.CoverURL : x.coverUrl || "", O = "RoomId" in x ? x.RoomId : x.id;
        h.value = {
          liveName: R || "",
          coverUrl: S || ""
        }, S ? M.value = await hs(S) : M.value = Kn;
        try {
          const N = await s(O), L = qn(N == null ? void 0 : N.customInfo);
          m.value = L, b.value = L.length > 0, T.value = L.map((A) => A.key);
        } catch {
          const N = "CustomInfo" in x ? x.CustomInfo : x.customInfo, L = qn(N);
          m.value = L, b.value = L.length > 0, T.value = L.map((A) => A.key);
        }
      }
    }, { immediate: !0 });
    const oe = () => {
      if (m.value.length >= Ke.maxCount) {
        X.error(i("Custom info max count exceeded", { max: Ke.maxCount }));
        return;
      }
      m.value.push({ key: "", value: "" });
    }, de = (D) => {
      m.value.splice(D, 1);
    }, fe = () => {
      var D;
      m.value = [], b.value = !1, T.value = [], $.value = !1, (D = B.value) == null || D.reset(), h.value = Xn(), d("update:visible", !1);
    }, H = async () => {
      if (a.room) {
        if (!h.value.liveName.trim()) {
          X.error(i(r.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (J.value > bt) {
          X.error(i("Title cannot exceed 100 bytes current", { current: J.value }));
          return;
        }
        if (m.value.some(ti)) {
          X.error(i(r.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let D = "";
          try {
            D = await La({
              handle: B.value,
              hasPendingFile: $.value,
              fallbackUrl: h.value.coverUrl,
              label: i(r.COVER_IMAGE)
            });
          } catch (S) {
            const O = S instanceof Pi ? S.message : `${i(r.COVER_PROCESSING_FAILED)}: ${S instanceof Error ? S.message : String(S) || i(r.UNKNOWN_ERROR)}`;
            X.error(O);
            return;
          }
          const k = vs(m.value);
          if (k) {
            k.type === "key-too-long" ? X.error(i("Key {key} exceeds {max} bytes", { key: k.key, max: k.max })) : k.type === "value-too-long" ? X.error(i("Key {key} value exceeds 2KB", { key: k.key })) : k.type === "max-count" ? X.error(i("Custom info max count", { max: k.max })) : X.error(i(r.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const x = ms(m.value), R = fs(T.value, x);
          await Z({
            roomName: h.value.liveName.trim(),
            coverUrl: D || void 0,
            customInfo: Object.keys(x).length > 0 ? x : void 0,
            deleteKeys: R.length > 0 ? R : void 0
          });
        } catch (D) {
          console.error("[EditLiveModal] Update failed:", D);
        }
      }
    };
    return (D, k) => {
      const x = ee("t-input"), R = ee("t-form-item"), S = ee("t-button"), O = ee("t-form"), N = ee("t-dialog");
      return y(), ne(N, {
        visible: u.value,
        "onUpdate:visible": k[3] || (k[3] = (L) => u.value = L),
        header: t(i)(t(r).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: fe
      }, {
        footer: E(() => {
          var L, A;
          return [
            c("div", Mc, [
              g(S, {
                variant: "outline",
                shape: "round",
                onClick: fe
              }, {
                default: E(() => [
                  W(v(t(i)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              g(S, {
                theme: "primary",
                shape: "round",
                loading: t(V),
                disabled: t(V) || !h.value.liveName.trim() || ((L = B.value) == null ? void 0 : L.isValidating) || ((A = B.value) == null ? void 0 : A.hasUrlError),
                onClick: H
              }, {
                default: E(() => [
                  W(v(t(V) ? t(i)(t(r).SAVING) : t(i)(t(r).SAVE)), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])
          ];
        }),
        default: E(() => [
          g(O, {
            class: "edit-live-form",
            "label-width": t(oi)(100),
            colon: !1
          }, {
            default: E(() => [
              g(R, {
                label: t(i)(t(r).LIVE_ID)
              }, {
                default: E(() => [
                  g(x, {
                    value: l.value,
                    disabled: "",
                    readonly: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(R, {
                label: t(i)(t(r).LIVE_TITLE),
                "required-mark": !0
              }, {
                default: E(() => [
                  g(x, {
                    modelValue: h.value.liveName,
                    "onUpdate:modelValue": k[0] || (k[0] = (L) => h.value.liveName = L),
                    placeholder: t(i)(t(r).ENTER_LIVE_TITLE),
                    status: J.value > t(bt) ? "error" : "default",
                    tips: J.value > t(bt) ? t(i)(t(r).TITLE_CANNOT_EXCEED_100_BYTES) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: we(["input-suffix-count", { "byte-overflow": J.value > t(bt) }])
                      }, v(J.value) + "/" + v(t(bt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(R, {
                label: t(i)(t(r).COVER_IMAGE)
              }, {
                default: E(() => [
                  g(Gi, {
                    ref_key: "coverUploadRef",
                    ref: B,
                    modelValue: h.value.coverUrl,
                    "onUpdate:modelValue": k[1] || (k[1] = (L) => h.value.coverUrl = L),
                    type: "cover",
                    "upload-enabled": e.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": M.value,
                    placeholder: t(i)(t(r).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": e.uploadEnabled,
                    onFileReady: Y
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(Et, {
                "slot-component": e.extraFieldsSlot,
                "slot-props": { mode: "edit", room: e.room, formData: { ...h.value }, customInfos: [...m.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              c("div", _c, [
                c("div", {
                  class: "custom-info-toggle",
                  onClick: k[2] || (k[2] = (L) => b.value = !b.value)
                }, [
                  b.value ? (y(), ne(t(Ui), {
                    key: 0,
                    size: "16"
                  })) : (y(), ne(t(Ia), {
                    key: 1,
                    size: "16"
                  })),
                  c("span", null, v(t(i)(t(r).CUSTOM_INFORMATION)), 1),
                  m.value.length > 0 ? (y(), w("span", wc, v(m.value.length), 1)) : ue("", !0)
                ]),
                b.value ? (y(), w("div", Cc, [
                  (y(!0), w(Ee, null, Ne(m.value, (L, A) => (y(), w("div", {
                    key: A,
                    class: "custom-info-row"
                  }, [
                    c("div", Ic, [
                      g(x, {
                        modelValue: L.key,
                        "onUpdate:modelValue": (ie) => L.key = ie,
                        placeholder: t(i)(t(r).ENTER_KEY),
                        status: p(L.key) > t(Ke).maxKeyBytes || t(ti)(L) ? "error" : "default",
                        tips: p(L.key) > t(Ke).maxKeyBytes ? t(i)("Key exceeds byte limit", { max: t(Ke).maxKeyBytes }) : t(ti)(L) ? t(i)(t(r).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    c("div", Ac, [
                      g(x, {
                        modelValue: L.value,
                        "onUpdate:modelValue": (ie) => L.value = ie,
                        placeholder: t(i)(t(r).ENTER_VALUE),
                        status: f(L.value) > t(Ke).maxValueBytes ? "error" : "default",
                        tips: f(L.value) > t(Ke).maxValueBytes ? t(i)(t(r).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    g(S, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ie) => de(A)
                    }, {
                      default: E(() => [
                        g(t(Bi))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  m.value.length < t(Ke).maxCount ? (y(), ne(S, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: oe,
                    theme: "primary"
                  }, {
                    icon: E(() => [
                      g(t(An))
                    ]),
                    default: E(() => [
                      W(" " + v(t(i)(t(r).ADD)), 1)
                    ]),
                    _: 1
                  })) : ue("", !0)
                ])) : ue("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Tc = /* @__PURE__ */ ci(Sc, [["__scopeId", "data-v-0a1ae480"]]), Rc = {
  key: 0,
  class: "fixed-header-table__loading"
}, Lc = {
  key: 1,
  class: "fixed-header-table__empty"
}, qi = /* @__PURE__ */ Te({
  __name: "FixedHeaderTable",
  props: {
    columns: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      default: () => []
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    className: { type: String, default: "" },
    tableClassName: { type: String, default: "" },
    headerClassName: { type: String, default: "" },
    bodyClassName: { type: String, default: "" },
    rowClassName: {
      type: [String, Function],
      default: ""
    },
    loading: { type: Boolean, default: !1 },
    bodyStyle: {
      type: Object,
      default: void 0
    },
    /** 开启后，所有未设置 width 的列都会按内容自动计算宽度 */
    fitContent: { type: Boolean, default: !1 },
    /** 自动计算宽度时最多测量多少行，避免大列表产生性能问题 */
    fitContentMaxRows: { type: Number, default: Ls }
  },
  setup(e) {
    function n() {
      if (typeof document > "u") return 0;
      const R = document.createElement("div");
      R.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(R);
      const S = R.offsetWidth - R.clientWidth;
      return document.body.removeChild(R), S;
    }
    const i = e, s = C(null), o = C(null), a = C(null), l = C(null), d = C(null), u = C({});
    let p = {}, f = null, h = null, m = 0, b = null;
    const T = (R) => R.fitContent || i.fitContent && R.width === void 0, M = (R) => typeof R == "number" ? `${R}px` : R, B = (R) => {
      if (T(R)) {
        const S = u.value[R.key];
        if (S !== void 0) return `${S}px`;
        if (typeof R.minWidth == "number") return `${R.minWidth}px`;
      }
      return M(R.width);
    }, $ = P(() => {
      const R = {};
      for (const S of i.columns) R[S.key] = { width: B(S) };
      return R;
    }), V = P(() => {
      const R = {};
      for (const S of i.columns) {
        const O = { textAlign: S.align };
        S.ellipsis ? (O.whiteSpace = "nowrap", O.overflow = "hidden", O.textOverflow = "ellipsis") : T(S) && !S.flexible && (O.whiteSpace = "nowrap"), R[S.key] = O;
      }
      return R;
    }), Z = P(() => xs(i.columns, u.value, T) ?? {}), Y = () => {
      var ve, ae;
      const R = i.columns.map((U, ce) => ({ column: U, index: ce })).filter(({ column: U }) => T(U));
      if (R.length === 0 || typeof document > "u") {
        p = {};
        return;
      }
      const S = ((ve = a.value) == null ? void 0 : ve.querySelectorAll("thead th")) || [], O = Array.from(((ae = d.value) == null ? void 0 : ae.querySelectorAll("tbody tr")) || []).slice(0, i.fitContentMaxRows), N = [], L = [];
      R.forEach(({ column: U, index: ce }) => {
        const _e = S[ce];
        _e && (N.push(_e), L.push(U.key)), O.forEach((Oe) => {
          const xe = Oe.children[ce];
          xe && (N.push(xe), L.push(U.key));
        });
      });
      const A = Ns(N), ie = {};
      A.forEach((U, ce) => {
        const _e = L[ce];
        (ie[_e] === void 0 || U > ie[_e]) && (ie[_e] = U);
      });
      const he = {};
      for (const { column: U } of R)
        ie[U.key] !== void 0 && (he[U.key] = ks(
          ie[U.key],
          U.minWidth,
          U.maxWidth
        ));
      p = he;
    }, J = () => {
      var N;
      const R = p;
      if (Object.keys(R).length === 0) {
        Object.keys(u.value).length > 0 && (u.value = {});
        return;
      }
      const S = ((N = l.value) == null ? void 0 : N.clientWidth) ?? 0, O = Ds(
        i.columns,
        R,
        S,
        T
      );
      Os(u.value, O) || (u.value = O);
    }, oe = () => {
      Y(), J();
    }, de = () => {
      cancelAnimationFrame(m), m = requestAnimationFrame(() => {
        Je(oe);
      });
    }, fe = () => {
      cancelAnimationFrame(m), m = requestAnimationFrame(() => {
        Je(J);
      });
    }, H = () => {
      f && f.disconnect(), f = new ResizeObserver(fe), s.value && f.observe(s.value);
    }, D = (R, S) => typeof i.rowKey == "function" ? i.rowKey(R, S) : R[i.rowKey] ?? S, k = (R, S) => typeof i.rowClassName == "function" ? i.rowClassName(R, S) : i.rowClassName, x = () => {
      var N;
      const R = s.value, S = (N = d.value) == null ? void 0 : N.parentElement;
      if (!R || !S) return;
      const O = S.scrollHeight > S.clientHeight ? n() : 0;
      R.style.setProperty("--scrollbar-width", `${O}px`);
    };
    return At(() => {
      Je(() => {
        oe(), H(), x();
      }), h = new MutationObserver((R) => {
        for (const S of R)
          if (S.type === "attributes" && S.attributeName === "lang") {
            Je(() => {
              u.value = {}, p = {}, de();
            });
            break;
          }
      }), h.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), Je(() => {
        l.value && o.value && (b = () => {
          o.value && l.value && (o.value.scrollLeft = l.value.scrollLeft);
        }, l.value.addEventListener("scroll", b));
      });
    }), Le(() => i.data, () => {
      Je(x);
    }), Le(
      () => [i.columns, i.data, i.loading, i.fitContent, i.fitContentMaxRows],
      () => {
        Je(() => {
          oe(), H();
        });
      },
      { deep: !0 }
    ), Ei(() => {
      cancelAnimationFrame(m), f == null || f.disconnect(), f = null, h == null || h.disconnect(), h = null, l.value && b && (l.value.removeEventListener("scroll", b), b = null);
    }), (R, S) => (y(), w("div", {
      ref_key: "rootRef",
      ref: s,
      class: we(["fixed-header-table", e.className])
    }, [
      c("div", {
        ref_key: "headerRef",
        ref: o,
        class: we(["fixed-header-table__header", e.headerClassName])
      }, [
        c("table", {
          ref_key: "headerTableRef",
          ref: a,
          class: we(["fixed-header-table__table", e.tableClassName]),
          style: Ge(Z.value)
        }, [
          c("colgroup", null, [
            (y(!0), w(Ee, null, Ne(e.columns, (O) => (y(), w("col", {
              key: O.key,
              style: Ge($.value[O.key])
            }, null, 4))), 128))
          ]),
          c("thead", null, [
            c("tr", null, [
              (y(!0), w(Ee, null, Ne(e.columns, (O) => (y(), w("th", {
                key: O.key,
                class: we(O.className),
                style: Ge(V.value[O.key])
              }, [
                ht(R.$slots, `header-${O.key}`, { column: O }, () => [
                  W(v(O.title), 1)
                ])
              ], 6))), 128))
            ])
          ])
        ], 6)
      ], 2),
      c("div", {
        ref_key: "bodyRef",
        ref: l,
        class: we(["fixed-header-table__body", e.bodyClassName]),
        style: Ge(e.bodyStyle)
      }, [
        e.loading ? (y(), w("div", Rc, [
          ht(R.$slots, "loading")
        ])) : e.data.length === 0 ? (y(), w("div", Lc, [
          ht(R.$slots, "empty")
        ])) : (y(), w("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: d,
          class: we(["fixed-header-table__table", e.tableClassName]),
          style: Ge(Z.value)
        }, [
          c("colgroup", null, [
            (y(!0), w(Ee, null, Ne(e.columns, (O) => (y(), w("col", {
              key: O.key,
              style: Ge($.value[O.key])
            }, null, 4))), 128))
          ]),
          c("tbody", null, [
            (y(!0), w(Ee, null, Ne(e.data, (O, N) => (y(), w("tr", {
              key: D(O, N),
              class: we(k(O, N))
            }, [
              (y(!0), w(Ee, null, Ne(e.columns, (L) => (y(), w("td", {
                key: L.key,
                class: we(L.className),
                style: Ge(V.value[L.key])
              }, [
                ht(R.$slots, `cell-${L.key}`, {
                  row: O,
                  column: L,
                  index: N
                }, () => [
                  W(v(O[L.key] ?? ""), 1)
                ])
              ], 6))), 128))
            ], 2))), 128))
          ])
        ], 6))
      ], 6)
    ], 2));
  }
}), xc = ["title", "disabled", "onClick"], Nc = { class: "list-action-button__text" }, kc = {
  key: 1,
  class: "list-action-button__caret",
  "aria-hidden": "true"
}, $t = /* @__PURE__ */ Te({
  __name: "ActionButtons",
  props: {
    actions: {
      type: Array,
      required: !0
    },
    className: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = (i, s) => {
      var o;
      i.disabled || (o = i.onClick) == null || o.call(i, s);
    };
    return (i, s) => (y(), w("div", {
      class: we(["list-action-buttons", e.className])
    }, [
      (y(!0), w(Ee, null, Ne(e.actions, (o) => (y(), w("button", {
        key: o.key,
        type: "button",
        class: we(["list-action-button", { "list-action-button--danger": o.danger }]),
        title: o.title,
        disabled: o.disabled,
        onClick: (a) => n(o, a)
      }, [
        o.icon ? (y(), ne(ai(o.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : ue("", !0),
        c("span", Nc, v(o.label), 1),
        o.suffixCaret ? (y(), w("span", kc)) : ue("", !0)
      ], 10, xc))), 128))
    ], 2));
  }
}), Dc = { class: "live-list-page" }, Oc = { class: "live-list-header" }, Uc = { class: "live-list-title" }, $c = { class: "header-actions" }, Fc = { class: "live-list-id-cell" }, Pc = { class: "live-list-id-text" }, Vc = ["title"], zc = { class: "live-list-cover-cell" }, Gc = ["src", "alt"], Bc = { class: "live-list-text" }, Wc = { class: "live-list-text" }, Hc = { class: "live-list-loading-container" }, Yc = { class: "live-list-loading-text" }, jc = { class: "live-list-empty-container" }, Xc = { class: "live-list-empty-text" }, Kc = { class: "live-list-pagination" }, qc = { class: "page-info" }, Zc = { class: "live-info-form" }, Qc = { class: "live-info-section" }, Jc = { class: "live-info-section-title" }, eu = { class: "live-info-card" }, tu = { class: "live-info-row" }, iu = { class: "live-info-label" }, nu = { class: "live-info-value-area" }, au = { class: "live-info-value" }, ou = { class: "live-info-row" }, su = { class: "live-info-label" }, lu = { class: "live-info-value-area" }, ru = { class: "live-info-value" }, cu = { class: "live-info-row" }, uu = { class: "live-info-label" }, du = { class: "live-info-value-area" }, hu = { class: "live-info-value" }, vu = { class: "live-info-row" }, mu = { class: "live-info-label" }, fu = { class: "live-info-value-area" }, gu = { class: "live-info-value live-info-value-url" }, pu = {
  key: 0,
  class: "live-info-section"
}, bu = { class: "live-info-section-title" }, yu = { class: "live-info-card" }, Eu = { class: "live-info-row" }, _u = { class: "live-info-label" }, wu = { class: "live-info-value-area" }, Cu = { class: "live-info-value live-info-value-url" }, Iu = { class: "live-info-row" }, Au = { class: "live-info-label" }, Mu = { class: "live-info-value-area" }, Su = { class: "live-info-value live-info-value-url" }, Tu = {
  key: 1,
  class: "live-info-row"
}, Ru = {
  class: "live-info-label",
  style: { width: "auto" }
}, Lu = { class: "dialog-footer" }, mm = /* @__PURE__ */ Te({
  __name: "live-list",
  setup(e) {
    var h;
    const { t: n } = ke(), i = _i(), { endLive: s } = Ft(), o = (h = Hi().components) == null ? void 0 : h.roomList, a = new gs({
      endLive: s,
      onEnterLive: (m) => {
        i.push({ path: `/live-control/${m}` });
      },
      t: n,
      toast: {
        success: (m) => X.success(m),
        error: (m) => X.error(m)
      }
    }), l = Di(a.getState()), d = a.subscribe(() => {
      l.value = a.getState();
    }), u = Di(!1);
    At(async () => {
      u.value = await Da(), await a.init();
    }), Ei(() => {
      d(), a.dispose();
    });
    const p = P(() => ps({ hasExtraColumn: !!(o != null && o.tableExtraColumns) }).map((b) => ({
      ...b,
      title: b.i18nKey ? n(b.i18nKey) : ""
    }))), f = (m) => ys({
      live: m,
      t: n,
      icons: {
        enter: Vo,
        detail: Nt,
        edit: $i,
        delete: Po
      },
      onEnter: (b) => a.enterLive(b),
      onDetail: (b) => a.showDetail(b),
      onEdit: (b) => a.openEditModal(b),
      onDelete: (b) => a.requestDelete(b)
    });
    return (m, b) => {
      var V, Z, Y;
      const T = ee("t-input"), M = ee("t-button"), B = ee("t-card"), $ = ee("t-dialog");
      return y(), w("div", Dc, [
        c("div", Oc, [
          c("h1", Uc, v(t(n)(t(r).LIVE_LIST)), 1),
          g(Et, {
            "slot-component": (V = t(o)) == null ? void 0 : V.beforeToolbar,
            "slot-props": { lives: l.value.lives, loading: l.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          c("div", $c, [
            g(T, {
              "model-value": l.value.searchInput,
              placeholder: t(n)(t(r).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: t(Zn)(l.value.searchInput, t(bi)) ? "error" : "default",
              tips: t(Zn)(l.value.searchInput, t(bi)) ? t(n)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": b[1] || (b[1] = (J) => t(a).setSearchInput(String(J ?? ""))),
              onEnter: b[2] || (b[2] = () => t(a).search()),
              onClear: b[3] || (b[3] = () => t(a).clearSearch())
            }, {
              suffixIcon: E(() => [
                g(t(Cn), {
                  style: { cursor: "pointer" },
                  onClick: b[0] || (b[0] = () => t(a).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            g(M, {
              variant: "outline",
              shape: "round",
              disabled: l.value.refreshing || l.value.loading,
              onClick: b[4] || (b[4] = () => t(a).refresh())
            }, {
              icon: E(() => [
                g(t(In), {
                  class: we({ spinning: l.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: E(() => [
                W(" " + v(t(n)(t(r).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            g(M, {
              theme: "primary",
              shape: "round",
              onClick: b[5] || (b[5] = () => t(a).openCreateModal())
            }, {
              icon: E(() => [
                g(t(An))
              ]),
              default: E(() => [
                W(" " + v(t(n)(t(r).CREATE_LIVE)), 1)
              ]),
              _: 1
            })
          ]),
          g(Et, {
            "slot-component": (Z = t(o)) == null ? void 0 : Z.afterToolbar,
            "slot-props": { lives: l.value.lives, loading: l.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        g(B, { class: "live-list-card" }, {
          default: E(() => {
            var J;
            return [
              g(qi, {
                columns: p.value,
                data: l.value.lives,
                "row-key": "liveId",
                loading: l.value.loading,
                "table-class-name": "live-list-table",
                "body-class-name": "live-list-content",
                "row-class-name": "live-list-row"
              }, Ea({
                "cell-liveId": E(({ row: oe }) => [
                  c("div", Fc, [
                    c("span", Pc, v(oe.liveId), 1),
                    g(t(Dt), {
                      class: "copy-icon",
                      onClick: (de) => t(a).copyText(oe.liveId, t(n)(t(r).LIVE_ID))
                    }, null, 8, ["onClick"])
                  ])
                ]),
                "cell-liveName": E(({ row: oe }) => [
                  c("span", {
                    class: "live-list-text",
                    title: oe.liveName || "-"
                  }, v(oe.liveName || "-"), 9, Vc)
                ]),
                "cell-coverUrl": E(({ row: oe }) => [
                  c("div", zc, [
                    c("img", {
                      src: oe.coverUrl || t(Mn),
                      alt: oe.liveName,
                      class: "live-list-cover-image"
                    }, null, 8, Gc)
                  ])
                ]),
                "cell-anchor": E(({ row: oe }) => {
                  var de;
                  return [
                    c("span", Bc, v(((de = oe.anchor) == null ? void 0 : de.userId) || "-"), 1)
                  ];
                }),
                "cell-createdAt": E(({ row: oe }) => [
                  c("span", Wc, v(t(bs)(oe.createdAt)), 1)
                ]),
                "cell-actions": E(({ row: oe }) => {
                  var de;
                  return [
                    g($t, {
                      actions: f(oe)
                    }, null, 8, ["actions"]),
                    g(Et, {
                      "slot-component": (de = t(o)) == null ? void 0 : de.rowActions,
                      "slot-props": { live: oe }
                    }, null, 8, ["slot-component", "slot-props"])
                  ];
                }),
                loading: E(() => [
                  c("div", Hc, [
                    b[20] || (b[20] = c("div", { class: "live-list-loading-spinner" }, null, -1)),
                    c("span", Yc, v(t(n)(t(r).LOADING)), 1)
                  ])
                ]),
                empty: E(() => [
                  c("div", jc, [
                    c("span", Xc, v(t(n)(t(r).NO_LIVE_DATA)), 1)
                  ])
                ]),
                _: 2
              }, [
                Ne(p.value, (oe) => ({
                  name: `header-${oe.key}`,
                  fn: E(() => [
                    W(v(oe.title), 1)
                  ])
                })),
                (J = t(o)) != null && J.tableExtraColumns ? {
                  name: "cell-customer-extra",
                  fn: E(({ row: oe }) => [
                    g(Et, {
                      "slot-component": t(o).tableExtraColumns,
                      "slot-props": { live: oe }
                    }, null, 8, ["slot-component", "slot-props"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["columns", "data", "loading"])
            ];
          }),
          _: 1
        }),
        c("div", Kc, [
          g(M, {
            variant: "outline",
            size: "small",
            disabled: l.value.currentPage <= 1,
            onClick: b[6] || (b[6] = () => t(a).goToPage(1))
          }, {
            default: E(() => [
              W(v(t(n)(t(r).FIRST_PAGE)), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          g(M, {
            variant: "outline",
            size: "small",
            disabled: l.value.currentPage <= 1,
            onClick: b[7] || (b[7] = () => t(a).goToPage(l.value.currentPage - 1))
          }, {
            default: E(() => [
              W(v(t(n)(t(r).PREVIOUS_PAGE)), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          c("span", qc, v(t(n)(t(r).PAGE, { page: l.value.currentPage })), 1),
          g(M, {
            variant: "outline",
            size: "small",
            disabled: !l.value.hasMoreData,
            onClick: b[8] || (b[8] = () => t(a).goToPage(l.value.currentPage + 1))
          }, {
            default: E(() => [
              W(v(t(n)(t(r).NEXT_PAGE)), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        g(Ec, {
          visible: l.value.isCreateModalVisible,
          "upload-enabled": u.value,
          "onUpdate:visible": b[9] || (b[9] = (J) => J ? t(a).openCreateModal() : t(a).closeCreateModal()),
          onSuccess: b[10] || (b[10] = () => t(a).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        g(Tc, {
          visible: l.value.isEditModalVisible,
          room: l.value.editingLive,
          "upload-enabled": u.value,
          "extra-fields-slot": (Y = t(o)) == null ? void 0 : Y.roomFormExtraFields,
          "onUpdate:visible": b[11] || (b[11] = (J) => {
            J || t(a).closeEditModal();
          }),
          onSuccess: b[12] || (b[12] = (J) => t(a).onLiveEdited(J))
        }, null, 8, ["visible", "room", "upload-enabled", "extra-fields-slot"]),
        g($, {
          visible: l.value.confirmDialog.visible,
          header: l.value.confirmDialog.title,
          "confirm-btn": { content: t(n)(t(r).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": b[13] || (b[13] = (J) => {
            J || t(a).cancelDelete();
          }),
          onConfirm: b[14] || (b[14] = () => t(a).confirmDelete())
        }, {
          default: E(() => [
            c("p", null, v(l.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g($, {
          visible: l.value.obsModal.visible && !!l.value.obsModal.live,
          header: t(n)(t(r).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": b[19] || (b[19] = (J) => {
            J || t(a).closeDetail();
          })
        }, {
          footer: E(() => [
            c("div", Lu, [
              g(M, {
                variant: "outline",
                shape: "round",
                onClick: b[18] || (b[18] = () => t(a).closeDetail())
              }, {
                default: E(() => [
                  W(v(t(n)(t(r).CLOSE)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: E(() => {
            var J, oe, de, fe, H, D, k;
            return [
              c("div", Zc, [
                c("div", Qc, [
                  c("div", Jc, v(t(n)(t(r).BASIC_INFORMATION)), 1),
                  c("div", eu, [
                    c("div", tu, [
                      c("span", iu, v(t(n)(t(r).ANCHOR_ID)), 1),
                      c("div", nu, [
                        c("span", au, v(((oe = (J = l.value.obsModal.live) == null ? void 0 : J.anchor) == null ? void 0 : oe.userId) || "-"), 1),
                        (fe = (de = l.value.obsModal.live) == null ? void 0 : de.anchor) != null && fe.userId ? (y(), w("button", {
                          key: 0,
                          class: "live-info-copy-btn",
                          onClick: b[15] || (b[15] = (x) => t(a).copyText(l.value.obsModal.live.anchor.userId, t(n)(t(r).LIVE_HOST)))
                        }, [
                          g(t(Dt))
                        ])) : ue("", !0)
                      ])
                    ]),
                    c("div", ou, [
                      c("span", su, v(t(n)(t(r).LIVE_ID)), 1),
                      c("div", lu, [
                        c("span", ru, v(((H = l.value.obsModal.live) == null ? void 0 : H.liveId) || "-"), 1)
                      ])
                    ]),
                    c("div", cu, [
                      c("span", uu, v(t(n)(t(r).LIVE_TITLE)), 1),
                      c("div", du, [
                        c("span", hu, v(((D = l.value.obsModal.live) == null ? void 0 : D.liveName) || "-"), 1)
                      ])
                    ]),
                    c("div", vu, [
                      c("span", mu, v(t(n)(t(r).LIVE_COVER)), 1),
                      c("div", fu, [
                        c("span", gu, v(((k = l.value.obsModal.live) == null ? void 0 : k.coverUrl) || "-"), 1)
                      ])
                    ])
                  ])
                ]),
                l.value.obsModal.streamInfo || l.value.obsModal.actionLoading === "stream" ? (y(), w("div", pu, [
                  c("div", bu, v(t(n)(t(r).PUSH_STREAM_INFO)), 1),
                  c("div", yu, [
                    l.value.obsModal.streamInfo ? (y(), w(Ee, { key: 0 }, [
                      c("div", Eu, [
                        c("span", _u, v(t(n)(t(r).SERVER_URL)), 1),
                        c("div", wu, [
                          c("span", Cu, v(l.value.obsModal.streamInfo.serverUrl), 1),
                          c("button", {
                            class: "live-info-copy-btn",
                            onClick: b[16] || (b[16] = (x) => t(a).copyText(l.value.obsModal.streamInfo.serverUrl, t(n)(t(r).SERVER_URL)))
                          }, [
                            g(t(Dt))
                          ])
                        ])
                      ]),
                      c("div", Iu, [
                        c("span", Au, v(t(n)(t(r).STREAM_KEY)), 1),
                        c("div", Mu, [
                          c("span", Su, v(l.value.obsModal.streamInfo.streamKey), 1),
                          c("button", {
                            class: "live-info-copy-btn",
                            onClick: b[17] || (b[17] = (x) => t(a).copyText(l.value.obsModal.streamInfo.streamKey, t(n)(t(r).STREAM_KEY)))
                          }, [
                            g(t(Dt))
                          ])
                        ])
                      ])
                    ], 64)) : (y(), w("div", Tu, [
                      c("span", Ru, v(t(n)(t(r).GETTING_STREAM_INFO)), 1)
                    ]))
                  ])
                ])) : ue("", !0)
              ])
            ];
          }),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
}), xu = { class: "toast-area" }, Nu = {
  key: 0,
  class: "status-success"
}, ku = {
  key: 1,
  class: "status-error"
}, Du = /* @__PURE__ */ Te({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(e) {
    return (n, i) => (y(), w("div", xu, [
      e.successMsg ? (y(), w("div", Nu, v(e.successMsg), 1)) : ue("", !0),
      e.errorMsg ? (y(), w("div", ku, v(e.errorMsg), 1)) : ue("", !0)
    ]));
  }
}), Ou = { class: "live-control-navbar" }, Uu = { class: "nav-left" }, $u = ["viewBox", "stroke-width", "stroke-linecap"], Fu = ["d"], Pu = { class: "nav-right" }, Vu = /* @__PURE__ */ Te({
  __name: "NavBar",
  props: {
    handleLeaveLive: { type: Function },
    handleViolationWarning: { type: Function },
    handleForceStopLive: { type: Function }
  },
  setup(e) {
    const { t: n } = ke();
    return (i, s) => {
      const o = ee("t-button");
      return y(), w("header", Ou, [
        c("div", Uu, [
          g(o, {
            variant: "outline",
            shape: "circle",
            class: "back-btn",
            onClick: e.handleLeaveLive,
            title: t(n)(t(r).BACK_TO_LIST)
          }, {
            icon: E(() => [
              (y(), w("svg", {
                viewBox: t(Ot).viewBox,
                width: "1em",
                height: "1em",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": t(Ot).strokeWidth,
                "stroke-linecap": t(Ot).strokeLinecap
              }, [
                c("path", {
                  d: t(Ot).path
                }, null, 8, Fu)
              ], 8, $u))
            ]),
            _: 1
          }, 8, ["onClick", "title"]),
          s[0] || (s[0] = c("div", { class: "divider" }, null, -1)),
          c("h1", null, v(t(n)(t(r).LIVE_DETAILS)), 1)
        ]),
        c("div", Pu, [
          g(o, {
            class: "action-btn warn",
            variant: "text",
            onClick: e.handleViolationWarning
          }, {
            icon: E(() => [
              g(t(wa))
            ]),
            default: E(() => [
              W(" " + v(t(n)(t(r).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          g(o, {
            variant: "text",
            theme: "danger",
            onClick: e.handleForceStopLive
          }, {
            icon: E(() => [
              g(t(Ca))
            ]),
            default: E(() => [
              W(" " + v(t(n)(t(r).FORCE_STOP)), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]);
    };
  }
}), zu = { class: "video-monitor-area" }, Gu = { class: "live-header-external" }, Bu = { class: "live-title-text" }, Wu = { class: "video-stage" }, Hu = {
  key: 1,
  class: "video-blur-bg-placeholder"
}, Yu = { class: "player-container" }, ju = {
  key: 0,
  class: "mock-cover-preview"
}, Xu = ["src"], Ku = {
  key: 2,
  class: "live-state-overlay live-state-overlay--ended"
}, qu = { class: "live-state-overlay-content" }, Zu = { class: "live-state-overlay-title" }, Qu = /* @__PURE__ */ Te({
  __name: "VideoMonitor",
  props: {
    liveInfo: {},
    liveAnchorAvatar: {},
    liveAnchorName: {},
    liveEndedOverlayVisible: { type: Boolean },
    currentLive: {},
    sdkReady: { type: Boolean },
    isMockMode: { type: Boolean },
    liveControlSlots: {},
    handleLeaveLive: { type: Function }
  },
  setup(e) {
    const { t: n } = ke();
    return (i, s) => {
      var o, a, l, d, u;
      return y(), w("section", zu, [
        g(Et, {
          "slot-component": (o = e.liveControlSlots) == null ? void 0 : o.beforeLiveInfo,
          "slot-props": { liveInfo: e.liveInfo }
        }, null, 8, ["slot-component", "slot-props"]),
        c("div", Gu, [
          g(Yi, {
            "class-name": "anchor-avatar",
            src: e.liveAnchorAvatar,
            name: e.liveAnchorName,
            title: e.liveAnchorName
          }, null, 8, ["src", "name", "title"]),
          c("span", Bu, v(e.liveEndedOverlayVisible ? t(n)(t(r).LIVE_ENDED) : ((a = e.currentLive) == null ? void 0 : a.liveName) || ((l = e.liveInfo) == null ? void 0 : l.liveName) || t(n)(t(r).LOADING)), 1)
        ]),
        c("div", Wu, [
          (d = e.liveInfo) != null && d.coverUrl ? (y(), w("div", {
            key: 0,
            class: "video-blur-bg",
            style: Ge({ backgroundImage: `url(${e.liveInfo.coverUrl})` })
          }, null, 4)) : (y(), w("div", Hu)),
          c("div", Yu, [
            e.isMockMode ? (y(), w(Ee, { key: 0 }, [
              (u = e.liveInfo) != null && u.coverUrl ? (y(), w("div", ju, [
                c("img", {
                  src: e.liveInfo.coverUrl,
                  alt: "cover",
                  class: "mock-cover-img"
                }, null, 8, Xu)
              ])) : ue("", !0)
            ], 64)) : e.sdkReady ? (y(), ne(t(il), { key: 1 })) : ue("", !0),
            e.liveEndedOverlayVisible ? (y(), w("div", Ku, [
              c("div", qu, [
                c("div", Zu, v(t(n)(t(r).LIVE_ENDED)), 1),
                c("button", {
                  class: "live-state-overlay-btn",
                  onClick: s[0] || (s[0] = //@ts-ignore
                  (...p) => e.handleLeaveLive && e.handleLeaveLive(...p))
                }, v(t(n)(t(r).RETURN_TO_LIVE_LIST)), 1)
              ])
            ])) : ue("", !0)
          ])
        ])
      ]);
    };
  }
}), Ju = { class: "message-list-scroll-area" }, ed = ["placeholder", "disabled"], td = ["disabled"], id = 12 * 1024, nd = /* @__PURE__ */ Te({
  __name: "MessageList",
  props: {
    liveId: { default: "" },
    onMuteUser: {},
    onBanUser: {},
    mutedList: { default: () => [] },
    bannedList: { default: () => [] },
    currentLive: {}
  },
  setup(e) {
    const { t: n } = ke(), i = e, { loginUserInfo: s } = Ua(), { currentLive: o } = Ft(), { audienceList: a, disableSendMessage: l } = $a(), d = P(() => i.currentLive || o.value), u = (k) => new TextEncoder().encode(k).length, p = C(!1), f = C({ top: 0, left: 0 }), h = C(null), m = C(""), b = C(!1), T = C(null), M = C(null), B = C(null), $ = P(() => b.value || !i.liveId || !m.value.trim()), V = (k) => a.value.find((x) => x.userId === k), Z = (k) => {
      const x = V(k);
      if (x)
        return x.isMessageDisabled === !0;
      const R = i.mutedList.find((S) => S.userId === k);
      return R ? R.endTime > Date.now() / 1e3 : !1;
    }, Y = (k) => {
      const x = i.bannedList.find((R) => R.userId === k);
      return x ? x.endTime > Date.now() / 1e3 : !1;
    }, J = (k, x) => {
      var L, A, ie, he, ve;
      if (k.preventDefault(), k.stopPropagation(), x.sender.userId === ((L = s.value) == null ? void 0 : L.userId) || x.sender.userId === ((ie = (A = d.value) == null ? void 0 : A.liveOwner) == null ? void 0 : ie.userId) || x.sender.userId === xi(((ve = (he = d.value) == null ? void 0 : he.liveOwner) == null ? void 0 : ve.userId) || ""))
        return;
      const R = k.target.closest(".message-item");
      if (!R) return;
      const S = R.getBoundingClientRect(), O = S.bottom + 4, N = Math.min(
        S.left,
        window.innerWidth - 150
      );
      f.value = { top: O, left: Math.max(0, N) }, h.value = x, p.value = !0;
    }, oe = () => {
      var k, x;
      if (h.value && i.onBanUser) {
        const R = h.value.sender.userId;
        if (R !== xi(((x = (k = d.value) == null ? void 0 : k.liveOwner) == null ? void 0 : x.userId) || "")) {
          const S = h.value.sender.userName || h.value.sender.nameCard || h.value.sender.userId, O = Y(R);
          i.onBanUser(R, S, O);
        }
      }
      p.value = !1, h.value = null;
    }, de = async () => {
      var S, O;
      if (!h.value) return;
      const k = h.value.sender.userId;
      if (k === xi(((O = (S = d.value) == null ? void 0 : S.liveOwner) == null ? void 0 : O.userId) || "")) {
        p.value = !1, h.value = null;
        return;
      }
      const x = h.value.sender.userName || h.value.sender.nameCard || h.value.sender.userId, R = Z(k);
      try {
        await l({ userId: k, isDisable: !R }), console.log(R ? "解除禁言成功" : "禁言成功");
      } catch (N) {
        console.error("SDK 禁言失败，使用备用方法:", N), i.onMuteUser && i.onMuteUser(k, x, R);
      }
      p.value = !1, h.value = null;
    }, fe = async () => {
      if (b.value) return;
      const k = m.value.trim();
      if (!k) {
        X.warning(n(r.MESSAGE_CONTENT_REQUIRED));
        return;
      }
      if (!i.liveId) {
        X.error(n(r.LIVE_NOT_FOUND));
        return;
      }
      if (u(k) > id) {
        X.error(n("Message Content Too Long", { max: "12KB" }));
        return;
      }
      b.value = !0;
      try {
        const x = await Qs(i.liveId, k);
        if ((x == null ? void 0 : x.ErrorCode) !== void 0 && x.ErrorCode !== 0)
          throw new Error(x.ErrorInfo || n(r.SEND_FAILED));
        if (x != null && x.ActionStatus && x.ActionStatus !== "OK")
          throw new Error(x.ErrorInfo || n(r.SEND_FAILED));
        m.value = "", X.success(n(r.MESSAGE_SENT));
      } catch (x) {
        const R = (x == null ? void 0 : x.ErrorInfo) || (x == null ? void 0 : x.message) || n(r.UNKNOWN_HOST);
        X.error(n("Send Failed With Error", { error: R }));
      } finally {
        b.value = !1;
      }
    }, H = Te({
      props: {
        message: {
          type: Object,
          required: !0
        },
        isLastInChunk: {
          type: Boolean,
          default: !0
        },
        style: {
          type: Object,
          default: () => ({})
        }
      },
      setup(k) {
        var L, A;
        const x = k.message.sender.nameCard || k.message.sender.userName || k.message.sender.userId, R = k.message.sender.userId === ((A = (L = d.value) == null ? void 0 : L.liveOwner) == null ? void 0 : A.userId), S = k.message.messageType === 0 ? k.message.textContent : k.message.data || "", O = Es(S), N = () => O.map((ie, he) => ie.type === "emoji" ? Zt("img", {
          key: he,
          class: "message-emoji",
          src: ie.src,
          alt: ie.key
        }) : Zt("span", { key: he, class: "message-text" }, ie.text));
        return () => Zt("div", {
          class: ["message-item", R ? "host" : ""],
          style: k.style,
          onContextMenu: (ie) => J(ie, k.message)
        }, [
          // 主播标识
          R ? Zt("span", { class: "message-badge" }, n(r.HOST)) : null,
          // 昵称
          Zt("span", { class: "message-username", onClick: (ie) => J(ie, k.message) }, `${x}: `),
          // 消息内容
          Zt("span", { class: "message-content" }, N())
        ]);
      }
    }), D = (k) => {
      M.value && M.value.contains(k.target) || (p.value = !1, h.value = null);
    };
    return Le(p, (k) => {
      k ? document.addEventListener("mousedown", D) : document.removeEventListener("mousedown", D);
    }), tt(() => {
      document.removeEventListener("mousedown", D);
    }), (k, x) => (y(), w("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: T
    }, [
      c("div", Ju, [
        g(t(ol), {
          ref_key: "barrageListRef",
          ref: B,
          Message: t(H),
          class: "barrage-list-wrapper"
        }, null, 8, ["Message"])
      ]),
      c("form", {
        class: "admin-message-composer",
        onSubmit: gi(fe, ["prevent"])
      }, [
        pi(c("input", {
          "onUpdate:modelValue": x[0] || (x[0] = (R) => m.value = R),
          class: "admin-message-input",
          placeholder: t(n)(t(r).ENTER_MESSAGE_TO_SEND_AS_ADMIN),
          disabled: b.value || !i.liveId
        }, null, 8, ed), [
          [ko, m.value]
        ]),
        c("button", {
          type: "submit",
          class: "admin-message-send-btn",
          disabled: $.value
        }, v(b.value ? t(n)(t(r).SENDING) : t(n)(t(r).SEND_MESSAGE)), 9, td)
      ], 32),
      (y(), ne(wn, { to: "body" }, [
        p.value && h.value ? (y(), w("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: M,
          class: "user-action-dropdown",
          style: Ge({
            position: "fixed",
            top: `${f.value.top}px`,
            left: `${f.value.left}px`
          })
        }, [
          c("button", {
            class: "dropdown-item",
            onClick: de
          }, [
            Z(h.value.sender.userId) ? (y(), ne(t(Wi), { key: 0 })) : (y(), ne(t(Aa), { key: 1 })),
            c("span", null, v(Z(h.value.sender.userId) ? t(n)(t(r).UNMUTE) : t(n)(t(r).MUTE)), 1)
          ]),
          c("button", {
            class: "dropdown-item danger",
            onClick: oe
          }, [
            Y(h.value.sender.userId) ? (y(), ne(t(Ma), { key: 0 })) : (y(), ne(t(Sa), { key: 1 })),
            c("span", null, v(Y(h.value.sender.userId) ? t(n)(t(r).UNBAN) : t(n)(t(r).BAN)), 1)
          ])
        ], 4)) : ue("", !0)
      ]))
    ], 512));
  }
}), ad = { class: "left-interaction-card" }, od = { class: "interaction-tabs-header" }, sd = { class: "all-mute-control-row" }, ld = { class: "all-mute-label" }, rd = { class: "interaction-body" }, cd = { class: "chat-stream-sidebar" }, ud = {
  key: 0,
  class: "all-mute-banner"
}, dd = { class: "audience-tab-wrapper" }, hd = { class: "audience-list-area" }, vd = {
  key: 0,
  class: "audience-me-tag"
}, md = {
  key: 1,
  class: "audience-row-actions"
}, fd = {
  key: 0,
  class: "audience-muted-badge"
}, gd = ["title", "onClick"], pd = { class: "audience-bottom-actions" }, bd = /* @__PURE__ */ Te({
  __name: "InteractionPanel",
  props: {
    liveId: {},
    activeTab: {},
    isAllMuted: { type: Boolean },
    allMuteLoading: { type: Boolean },
    mutedList: {},
    bannedList: {},
    currentUserId: {},
    anchorUserId: {},
    currentLive: {},
    handleAllMuteSwitchChange: { type: Function },
    handleMuteAudience: { type: Function },
    handleBanAudience: { type: Function },
    openMutedModal: { type: Function },
    openBannedModal: { type: Function },
    isUserMuted: { type: Function },
    handleOpenAudienceDropdown: { type: Function }
  },
  emits: ["update:activeTab"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, o = n, a = P({
      get: () => s.activeTab,
      set: (l) => o("update:activeTab", l)
    });
    return (l, d) => {
      const u = ee("t-tab-panel"), p = ee("t-tabs"), f = ee("t-switch");
      return y(), w("div", ad, [
        c("div", od, [
          g(p, {
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
            class: "interaction-tabs"
          }, {
            default: E(() => [
              g(u, {
                value: "chat",
                label: t(i)(t(r).MESSAGE_LIST)
              }, null, 8, ["label"]),
              g(u, {
                value: "audience",
                label: t(i)(t(r).AUDIENCE_LIST)
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          c("div", sd, [
            g(f, {
              value: e.isAllMuted,
              disabled: e.allMuteLoading,
              onChange: e.handleAllMuteSwitchChange
            }, null, 8, ["value", "disabled", "onChange"]),
            c("span", ld, v(t(i)(t(r).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        c("div", rd, [
          pi(c("div", cd, [
            e.isAllMuted ? (y(), w("div", ud, [
              d[3] || (d[3] = c("span", { class: "all-mute-banner-icon" }, "!", -1)),
              c("span", null, v(t(i)(t(r).ALL_MEMBER_MUTE_ENABLED_BANNER)), 1)
            ])) : ue("", !0),
            g(nd, {
              "live-id": e.liveId,
              "muted-list": e.mutedList,
              "banned-list": e.bannedList,
              "current-live": e.currentLive,
              "on-mute-user": e.handleMuteAudience,
              "on-ban-user": e.handleBanAudience
            }, null, 8, ["live-id", "muted-list", "banned-list", "current-live", "on-mute-user", "on-ban-user"])
          ], 512), [
            [ki, e.activeTab === "chat"]
          ]),
          pi(c("div", dd, [
            c("div", hd, [
              g(t(nl), { height: "99%" }, {
                "audience-mark": E(({ audience: h }) => [
                  h.userId === e.currentUserId ? (y(), w("span", vd, v(t(i)(t(r).ME)), 1)) : h.userRole !== 0 && h.userId !== t(xi)(e.anchorUserId) ? (y(), w("div", md, [
                    e.isUserMuted(h.userId) ? (y(), w("span", fd, v(t(i)(t(r).MUTED)), 1)) : ue("", !0),
                    c("button", {
                      class: "audience-more-btn",
                      title: t(i)(t(r).MORE_ACTIONS),
                      onClick: gi((m) => e.handleOpenAudienceDropdown(m, h.userId, h.userName || h.userId, e.isUserMuted(h.userId)), ["stop"])
                    }, [
                      g(t(zo))
                    ], 8, gd)
                  ])) : ue("", !0)
                ]),
                _: 1
              })
            ]),
            c("div", pd, [
              c("button", {
                class: "audience-bottom-btn",
                onClick: d[1] || (d[1] = //@ts-ignore
                (...h) => e.openMutedModal && e.openMutedModal(...h))
              }, v(t(i)(t(r).MUTED_VIEWERS)) + " (" + v(e.mutedList.length) + ") ", 1),
              c("button", {
                class: "audience-bottom-btn",
                onClick: d[2] || (d[2] = //@ts-ignore
                (...h) => e.openBannedModal && e.openBannedModal(...h))
              }, v(t(i)(t(r).BANNED_VIEWERS)) + " (" + v(e.bannedList.length) + ") ", 1)
            ])
          ], 512), [
            [ki, e.activeTab === "audience"]
          ])
        ])
      ]);
    };
  }
}), yd = { class: "left-content-area" }, Ed = /* @__PURE__ */ Te({
  __name: "LiveControlLeftPanel",
  props: {
    liveInfo: {},
    liveAnchorAvatar: {},
    liveAnchorName: {},
    liveEndedOverlayVisible: { type: Boolean },
    currentLive: {},
    isMockMode: { type: Boolean },
    liveControlSlots: {},
    liveId: {},
    activeTab: {},
    isAllMuted: { type: Boolean },
    allMuteLoading: { type: Boolean },
    mutedList: {},
    bannedList: {},
    currentUserId: {},
    anchorUserId: {},
    handleLeaveLive: { type: Function },
    handleAllMuteSwitchChange: { type: Function },
    handleMuteAudience: { type: Function },
    handleBanAudience: { type: Function },
    openMutedModal: { type: Function },
    openBannedModal: { type: Function },
    isUserMuted: { type: Function },
    handleOpenAudienceDropdown: { type: Function }
  },
  emits: ["update:activeTab", "joined-live", "live-ended"],
  setup(e, { emit: n }) {
    const i = e, s = n, { login: o, loginUserInfo: a } = Ua(), { joinLive: l, leaveLive: d, subscribeEvent: u, unsubscribeEvent: p, LiveListEvent: f } = al(), h = C(!1), m = C(""), b = C(!1), T = C(""), M = P(
      () => {
        var Z;
        return i.currentUserId || T.value || Oa() || ((Z = a.value) == null ? void 0 : Z.userId) || "";
      }
    ), B = () => {
      s("live-ended");
    }, $ = async () => {
      var Z;
      if (i.isMockMode) {
        h.value = !0;
        return;
      }
      if (!h.value)
        try {
          const Y = await Js();
          if (!Y || Y.sdkAppId === 0 || !Y.userId || !Y.userSig) return;
          T.value = Y.userId, await o({ sdkAppId: Y.sdkAppId, userId: Y.userId, userSig: Y.userSig }), h.value = !0;
        } catch (Y) {
          if ((Y == null ? void 0 : Y.code) === 2025 || (Z = Y == null ? void 0 : Y.message) != null && Z.includes("重复登录")) {
            h.value = !0;
            return;
          }
          console.error("[LiveControlLeftPanel] TUIKit login failed:", Y);
        }
    }, V = async () => {
      if (!(!i.liveId || !i.currentLive || !h.value || m.value === i.liveId))
        try {
          await l({ liveId: i.liveId }), m.value = i.liveId, !b.value && u && (f != null && f.onLiveEnded) && (u(f.onLiveEnded, B), b.value = !0), s("joined-live");
        } catch (Z) {
          console.error("[LiveControlLeftPanel] joinLive failed:", Z);
        }
    };
    return Le(
      () => [i.liveId, i.currentLive, M.value],
      async () => {
        !i.liveId || !i.currentLive || (await $(), await V());
      },
      { immediate: !0 }
    ), Le(
      () => i.liveId,
      () => {
        m.value = "";
      }
    ), tt(() => {
      var Z, Y;
      b.value && p && (f != null && f.onLiveEnded) && (p(f.onLiveEnded, B), b.value = !1), m.value && ((Y = d == null ? void 0 : (Z = d()).catch) == null || Y.call(Z, (J) => {
        console.error("[LiveControlLeftPanel] leaveLive on unmount failed:", J);
      }));
    }), (Z, Y) => (y(), w("div", yd, [
      g(Qu, {
        "live-info": e.liveInfo,
        "live-anchor-avatar": e.liveAnchorAvatar,
        "live-anchor-name": e.liveAnchorName,
        "live-ended-overlay-visible": e.liveEndedOverlayVisible,
        "current-live": e.currentLive,
        "sdk-ready": h.value,
        "is-mock-mode": e.isMockMode,
        "live-control-slots": e.liveControlSlots,
        "handle-leave-live": e.handleLeaveLive
      }, null, 8, ["live-info", "live-anchor-avatar", "live-anchor-name", "live-ended-overlay-visible", "current-live", "sdk-ready", "is-mock-mode", "live-control-slots", "handle-leave-live"]),
      g(bd, {
        "live-id": e.liveId,
        "active-tab": e.activeTab,
        "is-all-muted": e.isAllMuted,
        "all-mute-loading": e.allMuteLoading,
        "muted-list": e.mutedList,
        "banned-list": e.bannedList,
        "current-user-id": M.value,
        "anchor-user-id": e.anchorUserId,
        "current-live": e.currentLive,
        "handle-all-mute-switch-change": e.handleAllMuteSwitchChange,
        "handle-mute-audience": e.handleMuteAudience,
        "handle-ban-audience": e.handleBanAudience,
        "open-muted-modal": e.openMutedModal,
        "open-banned-modal": e.openBannedModal,
        "is-user-muted": e.isUserMuted,
        "handle-open-audience-dropdown": e.handleOpenAudienceDropdown,
        "onUpdate:activeTab": Y[0] || (Y[0] = (J) => s("update:activeTab", J))
      }, null, 8, ["live-id", "active-tab", "is-all-muted", "all-mute-loading", "muted-list", "banned-list", "current-user-id", "anchor-user-id", "current-live", "handle-all-mute-switch-change", "handle-mute-audience", "handle-ban-audience", "open-muted-modal", "open-banned-modal", "is-user-muted", "handle-open-audience-dropdown"])
    ]));
  }
}), _d = { class: "sidebar-stats-card" }, wd = { class: "stats-card-header" }, Cd = { class: "stats-header-left" }, Id = { class: "live-status-tag" }, Ad = { class: "live-duration-text" }, Md = { class: "update-time" }, Sd = { class: "stat-bar-item" }, Td = { class: "stat-label" }, Rd = { class: "stat-value" }, Ld = { class: "stat-bar-item" }, xd = { class: "stat-label" }, Nd = { class: "stat-value" }, kd = { class: "stat-bar-item" }, Dd = { class: "stat-label" }, Od = { class: "stat-value" }, Ud = { class: "stat-bar-item" }, $d = { class: "stat-label" }, Fd = { class: "stat-value" }, Pd = { class: "stat-bar-item" }, Vd = { class: "stat-label" }, zd = { class: "stat-value" }, Gd = { class: "stat-bar-item" }, Bd = { class: "stat-label" }, Wd = { class: "stat-value" }, Hd = { class: "stat-bar-item" }, Yd = { class: "stat-label" }, jd = { class: "stat-value" }, Xd = /* @__PURE__ */ Te({
  __name: "StatsCard",
  props: {
    stats: {},
    liveDuration: {},
    updateTimeText: {},
    interactionRate: {},
    formatNumber: { type: Function },
    formatDuration: { type: Function }
  },
  setup(e) {
    const { t: n } = ke(), i = C(null);
    let s = null, o = null, a = null;
    const l = (f, h, m) => {
      const b = Array.from({ length: h }, () => 0);
      return f.forEach((T, M) => {
        const B = M % h;
        b[B] = Math.max(b[B], T);
      }), b.reduce((T, M) => T + M, 0) + m * (h - 1);
    }, d = (f) => {
      const h = Array.from(f.querySelectorAll(":scope > .stat-bar-item")), m = document.createElement("div");
      m.style.position = "absolute", m.style.left = "-99999px", m.style.top = "0", m.style.visibility = "hidden", m.style.pointerEvents = "none", m.style.width = "max-content", document.body.appendChild(m);
      const b = h.map((T) => {
        const M = T.cloneNode(!0);
        return M.style.width = "max-content", M.style.maxWidth = "none", m.appendChild(M), Math.ceil(M.getBoundingClientRect().width);
      });
      return m.remove(), b;
    }, u = () => {
      const f = i.value;
      if (!f || f.clientWidth <= 0) return;
      const h = d(f);
      if (!h.length) return;
      const m = parseFloat(getComputedStyle(f).columnGap) || 0, b = f.clientWidth, T = [7, 4, 3, 2, 1].find((M) => l(h, M, m) <= b + 1) || 1;
      f.style.setProperty("--stats-columns", String(T));
    }, p = () => {
      a !== null && cancelAnimationFrame(a), a = requestAnimationFrame(() => {
        a = null, u();
      });
    };
    return At(() => {
      Je(() => {
        const f = i.value;
        f && (s = new ResizeObserver(p), s.observe(f), o = new MutationObserver(p), o.observe(f, { childList: !0, subtree: !0, characterData: !0 }), p());
      });
    }), tt(() => {
      s == null || s.disconnect(), o == null || o.disconnect(), a !== null && (cancelAnimationFrame(a), a = null);
    }), (f, h) => (y(), w("div", _d, [
      c("div", wd, [
        c("div", Cd, [
          c("h3", null, v(t(n)(t(r).LIVE_DATA_CONTROL)), 1),
          c("span", Id, [
            h[0] || (h[0] = c("span", { class: "live-status-dot" }, null, -1)),
            W(" " + v(t(n)(t(r).LIVE_NOW)) + " ", 1),
            c("span", Ad, v(e.formatDuration(e.liveDuration)), 1)
          ])
        ]),
        c("span", Md, v(t(n)(t(r).UPDATED_AT, { time: e.updateTimeText })), 1)
      ]),
      c("div", {
        ref_key: "statsBarRef",
        ref: i,
        class: "stats-bar-design"
      }, [
        c("div", Sd, [
          c("div", Td, [
            W(v(t(n)(t(r).CURRENT_VIEWERS)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).CURRENT_VIEWERS_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Rd, v(e.formatNumber(e.stats.onlineCount)), 1)
        ]),
        c("div", Ld, [
          c("div", xd, [
            W(v(t(n)(t(r).COMMENT_COUNT)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).COMMENT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Nd, v(e.stats.totalMsgCount.toLocaleString()), 1)
        ]),
        c("div", kd, [
          c("div", Dd, [
            W(v(t(n)(t(r).COMMENT_USERS)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).COMMENT_USERS_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Od, v(e.stats.totalUniqueCommenters || 0), 1)
        ]),
        c("div", Ud, [
          c("div", $d, [
            W(v(t(n)(t(r).INTERACTION_RATE)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).INTERACTION_RATE_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Fd, v(e.interactionRate), 1)
        ]),
        c("div", Pd, [
          c("div", Vd, [
            W(v(t(n)(t(r).TOTAL_GIFT_AMOUNT)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).TOTAL_GIFT_AMOUNT_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", zd, v(e.stats.totalGiftCoins.toFixed(2)), 1)
        ]),
        c("div", Gd, [
          c("div", Bd, [
            W(v(t(n)(t(r).GIFT_COUNT)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).GIFT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Wd, v(e.stats.totalGiftsSent), 1)
        ]),
        c("div", Hd, [
          c("div", Yd, [
            W(v(t(n)(t(r).GIFT_SENDERS)) + " ", 1),
            g(t(Ct), {
              content: t(n)(t(r).GIFT_SENDERS_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                g(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", jd, v(e.stats.totalUniqueGiftSenders), 1)
        ])
      ], 512)
    ]));
  }
}), Kd = { class: "moderation-card" }, qd = { class: "moderation-card-header" }, Zd = { class: "moderation-header-left" }, Qd = { class: "moderation-toolbar" }, Jd = { class: "update-time" }, eh = { class: "moderation-table-wrapper" }, th = ["checked"], ih = ["checked", "onChange"], nh = { class: "moderation-user-cell" }, ah = { class: "moderation-user-id" }, oh = ["title"], sh = { class: "moderation-type-text" }, lh = { key: 0 }, rh = { class: "moderation-empty" }, ch = {
  key: 0,
  class: "moderation-pagination"
}, uh = { class: "pagination-pages" }, dh = ["disabled"], hh = {
  key: 0,
  class: "page-ellipsis"
}, vh = ["onClick"], mh = ["disabled"], fh = /* @__PURE__ */ Te({
  __name: "ModerationCard",
  props: {
    moderationList: {},
    moderationLoading: { type: Boolean },
    moderationPage: {},
    moderationTotal: {},
    moderationTotalPages: {},
    moderationPageNumbers: {},
    moderationSelectedIds: {},
    moderationColumns: {},
    isAllOnPageSelected: { type: Boolean },
    moderationAvailable: { type: Boolean },
    updateTimeText: {},
    handleBulkApprove: { type: Function },
    handleBulkDelete: { type: Function },
    handleRefreshModeration: { type: Function },
    toggleSelectOne: { type: Function },
    toggleSelectAll: { type: Function },
    goToModerationPage: { type: Function },
    getModerationActions: { type: Function },
    moderationTypeKey: { type: Function },
    formatModerationTime: { type: Function }
  },
  setup(e) {
    const { t: n } = ke();
    return (i, s) => {
      const o = ee("t-button"), a = ee("t-tooltip");
      return y(), w("div", Kd, [
        c("div", qd, [
          c("div", Zd, [
            c("h3", null, v(t(n)(t(r).CONTENT_MODERATION)), 1),
            g(o, {
              theme: "primary",
              shape: "round",
              onClick: e.handleBulkApprove,
              disabled: e.moderationSelectedIds.length === 0
            }, {
              icon: E(() => [
                g(t(Wi), { style: { width: "14px", height: "14px" } })
              ]),
              default: E(() => [
                W(" " + v(t(n)(t(r).BULK_APPROVE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"]),
            e.handleBulkDelete ? (y(), ne(o, {
              key: 0,
              theme: "primary",
              shape: "round",
              onClick: e.handleBulkDelete,
              disabled: e.moderationSelectedIds.length === 0
            }, {
              icon: E(() => [
                g(t(Go), { style: { width: "14px", height: "14px" } })
              ]),
              default: E(() => [
                W(" " + v(t(n)(t(r).BULK_DELETE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"])) : ue("", !0)
          ]),
          c("div", Qd, [
            c("span", Jd, v(t(n)(t(r).UPDATED_AT, { time: e.updateTimeText })), 1),
            g(o, {
              theme: "primary",
              variant: "outline",
              shape: "round",
              loading: e.moderationLoading,
              onClick: e.handleRefreshModeration
            }, {
              icon: E(() => [
                g(t(In))
              ]),
              default: E(() => [
                W(" " + v(t(n)(t(r).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["loading", "onClick"])
          ])
        ]),
        c("div", eh, [
          g(qi, {
            columns: e.moderationColumns,
            data: e.moderationList,
            "row-key": "id",
            "table-class-name": "moderation-table",
            "header-class-name": "moderation-header-fixed",
            "body-class-name": "moderation-table-scroll"
          }, {
            "header-check": E(() => [
              c("input", {
                type: "checkbox",
                checked: e.isAllOnPageSelected,
                onChange: s[0] || (s[0] = //@ts-ignore
                (...l) => e.toggleSelectAll && e.toggleSelectAll(...l))
              }, null, 40, th)
            ]),
            "header-userId": E(() => [
              W(v(t(n)(t(r).USERID)), 1)
            ]),
            "header-content": E(() => [
              W(v(t(n)(t(r).COMMENT_CONTENT)), 1)
            ]),
            "header-type": E(() => [
              W(v(t(n)(t(r).SENSITIVE_TYPE)), 1)
            ]),
            "header-createdAtMs": E(() => [
              W(v(t(n)(t(r).CREATED_AT)), 1)
            ]),
            "header-action": E(() => [
              W(v(t(n)(t(r).ACTION)), 1)
            ]),
            "cell-check": E(({ row: l }) => [
              c("input", {
                type: "checkbox",
                checked: e.moderationSelectedIds.includes(l.id),
                onChange: (d) => e.toggleSelectOne(l.id)
              }, null, 40, ih)
            ]),
            "cell-userId": E(({ row: l }) => [
              c("div", nh, [
                c("span", ah, v(l.userId), 1)
              ])
            ]),
            "cell-content": E(({ row: l }) => [
              c("span", {
                title: l.content
              }, v(l.content), 9, oh)
            ]),
            "cell-type": E(({ row: l }) => [
              g(a, {
                content: l.type.split(/[,\\s;|]+/).map((d) => String(d).trim()).filter(Boolean).map((d, u) => u > 0 ? " " + t(n)(e.moderationTypeKey(d)) : t(n)(e.moderationTypeKey(d))).join(""),
                placement: "top"
              }, {
                default: E(() => [
                  c("span", sh, [
                    (y(!0), w(Ee, null, Ne(l.type.split(/[,\\s;|]+/).map((d) => String(d).trim()).filter(Boolean), (d, u) => (y(), w(Ee, { key: u }, [
                      u > 0 ? (y(), w("span", lh)) : ue("", !0),
                      W(v(t(n)(e.moderationTypeKey(d))), 1)
                    ], 64))), 128))
                  ])
                ]),
                _: 2
              }, 1032, ["content"])
            ]),
            "cell-createdAtMs": E(({ row: l }) => [
              W(v(e.formatModerationTime(l.createdAtMs)), 1)
            ]),
            "cell-action": E(({ row: l }) => [
              g($t, {
                actions: e.getModerationActions(l)
              }, null, 8, ["actions"])
            ]),
            empty: E(() => [
              c("div", rh, [
                c("span", null, v(t(n)(t(r).MODERATION_EMPTY)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data"]),
          e.moderationList.length > 0 ? (y(), w("div", ch, [
            c("span", null, v(t(n)(t(r).TOTAL_ITEMS, { count: e.moderationTotal, total: e.moderationTotal })), 1),
            c("div", uh, [
              c("button", {
                class: "page-num page-nav",
                disabled: e.moderationPage <= 1,
                "aria-label": "prev page",
                onClick: s[1] || (s[1] = (l) => e.goToModerationPage(e.moderationPage - 1))
              }, [
                g(t(Ui), { style: { transform: "rotate(90deg)", width: "14px" } })
              ], 8, dh),
              (y(!0), w(Ee, null, Ne(e.moderationPageNumbers, (l, d) => (y(), w(Ee, {
                key: l === "..." ? `ellipsis-${d}` : l
              }, [
                l === "..." ? (y(), w("span", hh, "...")) : (y(), w("button", {
                  key: 1,
                  class: we(["page-num", { active: l === e.moderationPage }]),
                  onClick: (u) => e.goToModerationPage(l)
                }, v(l), 11, vh))
              ], 64))), 128)),
              c("button", {
                class: "page-num page-nav",
                disabled: e.moderationPage >= e.moderationTotalPages,
                "aria-label": "next page",
                onClick: s[2] || (s[2] = (l) => e.goToModerationPage(e.moderationPage + 1))
              }, [
                g(t(Ui), { style: { transform: "rotate(-90deg)", width: "14px" } })
              ], 8, mh)
            ])
          ])) : ue("", !0)
        ])
      ]);
    };
  }
}), gh = { class: "member-list-panel-modal" }, ph = {
  key: 0,
  class: "member-list-empty"
}, bh = {
  key: 1,
  class: "member-list-empty"
}, yh = {
  key: 2,
  class: "member-list-table"
}, Eh = { class: "member-table-user" }, _h = { class: "member-table-user-cell" }, wh = { class: "member-table-user-name" }, Ch = { class: "member-table-time" }, Ih = { class: "member-table-action" }, Ah = /* @__PURE__ */ Te({
  __name: "MutedModal",
  props: {
    visible: { type: Boolean },
    mutedList: {},
    memberListLoading: { type: Boolean },
    getUserAvatar: { type: Function },
    getUserNameFromCache: { type: Function },
    getMutedMemberActions: { type: Function }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, o = n, a = P({
      get: () => s.visible,
      set: (l) => o("update:visible", l)
    });
    return (l, d) => {
      const u = ee("t-dialog");
      return y(), ne(u, {
        visible: a.value,
        "onUpdate:visible": d[0] || (d[0] = (p) => a.value = p),
        header: t(i)(t(r).MUTED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: E(() => [
          c("div", gh, [
            e.memberListLoading ? (y(), w("div", ph, v(t(i)(t(r).LOADING)), 1)) : e.mutedList.length === 0 ? (y(), w("div", bh, v(t(i)(t(r).NO_MUTED_MEMBERS)), 1)) : (y(), w("table", yh, [
              c("thead", null, [
                c("tr", null, [
                  c("th", null, v(t(i)(t(r).USER)), 1),
                  c("th", null, v(t(i)(t(r).UNMUTE_TIME)), 1),
                  c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                ])
              ]),
              c("tbody", null, [
                (y(!0), w(Ee, null, Ne(e.mutedList, (p) => (y(), w("tr", {
                  key: p.userId
                }, [
                  c("td", Eh, [
                    c("div", _h, [
                      g(Yi, {
                        "class-name": "member-table-avatar",
                        src: e.getUserAvatar(p.userId),
                        name: e.getUserNameFromCache(p.userId)
                      }, null, 8, ["src", "name"]),
                      g(t(Ct), {
                        content: e.getUserNameFromCache(p.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: E(() => [
                          c("span", wh, v(e.getUserNameFromCache(p.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  c("td", Ch, v(p.endTime > 0 ? new Date(p.endTime * 1e3).toLocaleString() : "-"), 1),
                  c("td", Ih, [
                    g($t, {
                      actions: e.getMutedMemberActions(p.userId)
                    }, null, 8, ["actions"])
                  ])
                ]))), 128))
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Mh = { class: "member-list-panel-modal" }, Sh = {
  key: 0,
  class: "member-list-empty"
}, Th = {
  key: 1,
  class: "member-list-empty"
}, Rh = {
  key: 2,
  class: "member-list-table"
}, Lh = { class: "member-table-user" }, xh = { class: "member-table-user-cell" }, Nh = { class: "member-table-user-name" }, kh = { class: "member-table-time" }, Dh = { class: "member-table-action" }, Oh = /* @__PURE__ */ Te({
  __name: "BannedModal",
  props: {
    visible: { type: Boolean },
    bannedList: {},
    memberListLoading: { type: Boolean },
    getUserAvatar: { type: Function },
    getUserNameFromCache: { type: Function },
    getBannedMemberActions: { type: Function }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, o = n, a = P({
      get: () => s.visible,
      set: (l) => o("update:visible", l)
    });
    return (l, d) => {
      const u = ee("t-dialog");
      return y(), ne(u, {
        visible: a.value,
        "onUpdate:visible": d[0] || (d[0] = (p) => a.value = p),
        header: t(i)(t(r).BANNED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: E(() => [
          c("div", Mh, [
            e.memberListLoading ? (y(), w("div", Sh, v(t(i)(t(r).LOADING)), 1)) : e.bannedList.length === 0 ? (y(), w("div", Th, v(t(i)(t(r).NO_BANNED_MEMBERS)), 1)) : (y(), w("table", Rh, [
              c("thead", null, [
                c("tr", null, [
                  c("th", null, v(t(i)(t(r).USER)), 1),
                  c("th", null, v(t(i)(t(r).BAN_LIFT_TIME)), 1),
                  c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                ])
              ]),
              c("tbody", null, [
                (y(!0), w(Ee, null, Ne(e.bannedList, (p) => (y(), w("tr", {
                  key: p.userId
                }, [
                  c("td", Lh, [
                    c("div", xh, [
                      g(Yi, {
                        "class-name": "member-table-avatar",
                        src: e.getUserAvatar(p.userId),
                        name: e.getUserNameFromCache(p.userId)
                      }, null, 8, ["src", "name"]),
                      g(t(Ct), {
                        content: e.getUserNameFromCache(p.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: E(() => [
                          c("span", Nh, v(e.getUserNameFromCache(p.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  c("td", kh, v(p.endTime > 0 ? new Date(p.endTime * 1e3).toLocaleString() : "-"), 1),
                  c("td", Dh, [
                    g($t, {
                      actions: e.getBannedMemberActions(p.userId)
                    }, null, 8, ["actions"])
                  ])
                ]))), 128))
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Uh = /* @__PURE__ */ Te({
  __name: "ConfirmDialog",
  props: {
    visible: { type: Boolean },
    title: {},
    content: {},
    confirmText: {},
    onConfirm: { type: Function },
    onClose: { type: Function }
  },
  emits: ["update:visible"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, o = n, a = P({
      get: () => s.visible,
      set: (u) => o("update:visible", u)
    }), l = () => {
      s.onConfirm();
    }, d = () => {
      s.onClose(), o("update:visible", !1);
    };
    return (u, p) => {
      const f = ee("t-dialog");
      return y(), ne(f, {
        visible: a.value,
        "onUpdate:visible": p[0] || (p[0] = (h) => a.value = h),
        header: e.title,
        "confirm-btn": { content: e.confirmText || t(i)(t(r).CONFIRM), theme: "primary", shape: "round" },
        "cancel-btn": { content: t(i)(t(r).CANCEL), shape: "round" },
        onConfirm: l,
        onClose: d,
        onCancel: d
      }, {
        default: E(() => [
          c("p", null, v(e.content), 1)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
}), $h = /* @__PURE__ */ Te({
  __name: "ModerationDropdown",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["release", "close"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = C(null), o = e, a = n, l = (u) => {
      s.value && !s.value.contains(u.target) && a("close");
    };
    Le(
      () => o.visible,
      (u) => {
        u ? document.addEventListener("mousedown", l) : document.removeEventListener("mousedown", l);
      }
    ), tt(() => {
      document.removeEventListener("mousedown", l);
    });
    const d = () => {
      a("release"), a("close");
    };
    return (u, p) => (y(), ne(wn, { to: "body" }, [
      e.visible ? (y(), w("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: "user-action-dropdown moderation-action-dropdown",
        style: Ge({
          position: "fixed",
          top: e.position.y + "px",
          left: e.position.x - 160 + "px"
        })
      }, [
        c("button", {
          class: "dropdown-item",
          onClick: d
        }, [
          g(t(Wi)),
          W(" " + v(t(i)(t(r).BYPASS_CORRECTION)), 1)
        ])
      ], 4)) : ue("", !0)
    ]));
  }
}), Fh = { class: "dropdown-header" }, Ph = /* @__PURE__ */ Te({
  __name: "AudienceDropdown",
  props: {
    visible: { type: Boolean },
    userName: {},
    isMuted: { type: Boolean },
    isBanned: { type: Boolean },
    position: {}
  },
  emits: ["mute", "ban", "close"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = C(null), o = e, a = n, l = (p) => {
      s.value && !s.value.contains(p.target) && a("close");
    };
    Le(
      () => o.visible,
      (p) => {
        p ? document.addEventListener("mousedown", l) : document.removeEventListener("mousedown", l);
      }
    ), tt(() => {
      document.removeEventListener("mousedown", l);
    });
    const d = () => {
      a("mute"), a("close");
    }, u = () => {
      a("ban"), a("close");
    };
    return (p, f) => (y(), ne(wn, { to: "body" }, [
      e.visible ? (y(), w("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: "user-action-dropdown",
        style: Ge({
          position: "fixed",
          top: e.position.y + "px",
          left: e.position.x - 160 + "px"
        })
      }, [
        c("div", Fh, v(e.userName), 1),
        f[0] || (f[0] = c("div", { class: "dropdown-divider" }, null, -1)),
        e.isMuted ? (y(), w("button", {
          key: 0,
          class: "dropdown-item",
          onClick: d
        }, [
          g(t(Wi)),
          W(" " + v(t(i)(t(r).UNMUTE)), 1)
        ])) : (y(), w("button", {
          key: 1,
          class: "dropdown-item",
          onClick: d
        }, [
          g(t(Aa)),
          W(" " + v(t(i)(t(r).MUTE)), 1)
        ])),
        c("button", {
          class: "dropdown-item danger",
          onClick: u
        }, [
          e.isBanned ? (y(), ne(t(Ma), { key: 0 })) : (y(), ne(t(Sa), { key: 1 })),
          W(" " + v(e.isBanned ? t(i)(t(r).UNBAN) : t(i)(t(r).BAN)), 1)
        ])
      ], 4)) : ue("", !0)
    ]));
  }
});
function Vh() {
  const e = C({
    visible: !1,
    title: "",
    content: ""
  }), n = Oi({
    visible: !1,
    x: 0,
    y: 0
  }), i = Oi({
    visible: !1,
    x: 0,
    y: 0
  }), s = C(!1), o = C(!1), a = C(""), l = C("");
  return {
    // 状态
    confirmDialog: e,
    moderationDropdown: n,
    audienceDropdown: i,
    mutedModalVisible: s,
    bannedModalVisible: o,
    successMsg: a,
    errorMsg: l,
    // 方法
    showConfirmDialog: (M) => {
      e.value = {
        ...M,
        visible: !0
      };
    },
    hideConfirmDialog: () => {
      e.value.visible = !1;
    },
    showModerationDropdown: (M, B, $, V) => {
      n.visible = !0, n.x = M, n.y = B, n.itemId = $, n.content = V;
    },
    hideModerationDropdown: () => {
      n.visible = !1;
    },
    showAudienceDropdown: (M, B, $, V) => {
      i.visible = !0, i.x = M, i.y = B, i.userId = $, i.userName = V;
    },
    hideAudienceDropdown: () => {
      i.visible = !1;
    },
    showSuccess: (M) => {
      a.value = M, setTimeout(() => {
        a.value = "";
      }, 3e3);
    },
    showError: (M) => {
      l.value = M, setTimeout(() => {
        l.value = "";
      }, 3e3);
    }
  };
}
function fa(e) {
  const { confirm: n, onSuccess: i, ...s } = e, o = C(null), a = (m) => {
    o.value = null, i == null || i(m);
  }, { loading: l, execute: d, reset: u } = io({
    ...s,
    onSuccess: a
  });
  return {
    loading: l,
    confirmDialog: o,
    requestConfirm: () => {
      o.value = {
        visible: !0,
        title: n.title,
        content: n.content,
        confirmText: n.confirmText,
        danger: n.danger
      };
    },
    cancelConfirm: () => {
      o.value = null;
    },
    executeWithConfirm: async () => {
      try {
        return await d();
      } finally {
        o.value = null;
      }
    },
    reset: u
  };
}
const zh = { class: "live-control-container" }, Gh = { class: "live-control-viewport" }, Bh = { class: "right-sidebar" }, Ri = 20, Wh = /* @__PURE__ */ Te({
  __name: "live-control",
  setup(e) {
    var Gn;
    const n = Do(), i = _i(), s = P(() => n.params.liveId), o = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, { t: a } = ke(), { currentLive: l, fetchLiveDetail: d, fetchLiveStats: u, endLive: p, updateLive: f } = Ft(), { audienceList: h, audienceCount: m } = $a(), b = (Gn = Hi().components) == null ? void 0 : Gn.roomControl, {
      mutedList: T,
      bannedList: M,
      memberLoading: B,
      muteMember: $,
      unmuteMember: V,
      banMember: Z,
      unbanMember: Y,
      fetchMutedList: J,
      fetchBannedList: oe,
      textModerationList: de,
      textModerationTotal: fe,
      textModerationPageNum: H,
      textModerationLoading: D,
      fetchTextModerationList: k,
      approveTextModerationItems: x,
      bypassCorrectionKeyword: R
    } = rl({
      liveId: s.value,
      pageSize: Ri
    }), S = async (_, I = 600) => {
      await $({ memberAccounts: [_], muteTime: I });
    }, O = async (_) => {
      await V({ memberAccounts: [_] });
    }, N = async (_, I = 3600, G = "") => {
      await Z({ memberAccounts: [_], duration: I, reason: G });
    }, L = async (_) => {
      await Y({ memberAccounts: [_] });
    }, {
      successMsg: A,
      errorMsg: ie,
      mutedModalVisible: he,
      bannedModalVisible: ve
    } = Vh(), ae = P(() => Oa() || ""), U = C(!0), ce = C(null), _e = C(!1), Oe = C("chat"), xe = C(0), je = C(null), Xe = C(/* @__PURE__ */ new Map()), ct = C(null), pe = Oi({
      onlineCount: 0,
      totalViewers: 0,
      totalMsgCount: 0,
      totalLikesReceived: 0,
      totalGiftsSent: 0,
      totalGiftCoins: 0,
      totalUniqueGiftSenders: 0,
      totalUniqueCommenters: 0
    }), ge = P(() => pe.onlineCount <= 0 ? "0%" : (pe.totalUniqueCommenters / pe.onlineCount * 100).toFixed(1) + "%"), le = C(""), me = () => {
      const _ = /* @__PURE__ */ new Date(), I = String(_.getHours()).padStart(2, "0"), G = String(_.getMinutes()).padStart(2, "0");
      le.value = `${I}:${G}`;
    };
    me(), Le(
      l,
      (_) => {
        var I, G, j, q, be, Ce, $e;
        _ && (pe.totalViewers = ((I = _.stats) == null ? void 0 : I.viewCount) || pe.totalViewers, pe.totalMsgCount = ((G = _.stats) == null ? void 0 : G.commentCount) || pe.totalMsgCount, pe.totalLikesReceived = ((j = _.stats) == null ? void 0 : j.likeCount) || pe.totalLikesReceived, pe.totalGiftsSent = ((q = _.stats) == null ? void 0 : q.giftCount) || pe.totalGiftsSent, pe.totalGiftCoins = ((be = _.stats) == null ? void 0 : be.giftAmount) || pe.totalGiftCoins, pe.totalUniqueGiftSenders = ((Ce = _.stats) == null ? void 0 : Ce.giftUserCount) || pe.totalUniqueGiftSenders, pe.totalUniqueCommenters = (($e = _.stats) == null ? void 0 : $e.totalUniqueCommenters) || pe.totalUniqueCommenters, _.onlineCount && (pe.onlineCount = _.onlineCount), me());
      },
      { immediate: !0 }
    );
    const Ve = C([]), Re = C(1), mt = D, at = C(0), F = C([]), se = P(
      () => Math.max(1, Math.ceil(at.value / Ri))
    ), Me = P(
      () => _s(Re.value, se.value)
    ), Be = P(() => Ve.value.length === 0 ? !1 : Ve.value.every((_) => F.value.includes(_.id))), ft = [
      { key: "check", width: 40, className: "col-check" },
      { key: "userId", width: 120, className: "col-user" },
      { key: "content", className: "col-content moderation-content-cell" },
      { key: "type", width: 100, className: "col-type moderation-type-cell" },
      { key: "createdAtMs", width: 120, className: "col-time moderation-time-cell" },
      { key: "action", fitContent: !0, minWidth: 120, maxWidth: 260, className: "col-action" }
    ], it = (_) => ({
      id: _.id,
      userId: _.userId,
      content: _.content,
      type: _.type,
      createdAtMs: _.createdAtMs
    }), Pt = async (_ = 1) => {
      var I;
      if (!mt.value && s.value)
        try {
          const G = Math.max(1, _), j = (I = l.value) == null ? void 0 : I.createdAt, q = j ? Number(j) * 1e3 : Date.now() - 3600 * 1e3, be = Date.now() - 720 * 60 * 60 * 1e3 + 60 * 1e3, Ce = Math.max(q, be);
          await k({
            liveId: s.value,
            pageNum: G,
            pageSize: Ri,
            startTime: Ce,
            violationOnly: !0
          });
          const $e = await el(de.value), Ci = await tl();
          Ve.value = $e.map(it), at.value = Math.max(0, fe.value - Ci), Re.value = G, F.value = F.value.filter(
            (To) => $e.some((Ro) => Ro.id === To)
          );
        } catch (G) {
          console.error("[moderation] load failed:", G), X.error(a(r.OPERATION_FAILED));
        }
    }, Zi = async () => {
      await Pt(Re.value), X.success(a(r.REFRESHED));
    }, wi = (_) => {
      _ !== "..." && (_ < 1 || _ > se.value || _ === Re.value || Pt(_));
    }, Mt = async (_) => {
      F.value = F.value.filter(
        (q) => !_.includes(q)
      );
      const I = Math.max(0, at.value - _.length), G = Math.max(1, Math.ceil(I / Ri)), j = Math.min(Re.value, G);
      await Pt(j);
    }, z = (_) => {
      const I = F.value.indexOf(_);
      I >= 0 ? F.value.splice(I, 1) : F.value.push(_);
    }, te = () => {
      const _ = Ve.value.map((G) => G.id);
      if (_.length > 0 && _.every((G) => F.value.includes(G)))
        F.value = F.value.filter((G) => !_.includes(G));
      else {
        const G = new Set(F.value);
        _.forEach((j) => G.add(j)), F.value = Array.from(G);
      }
    }, We = (_) => ({
      normal: "Normal",
      porn: "Porn",
      sensitive: "Sensitive",
      political: "Political",
      advertising: "Advertising",
      abuse: "Abuse",
      illegal: "Illegal",
      composite: "Composite",
      violence: "Violence",
      sexy: "Sexy",
      unknown: "Unknown"
    })[_] || "Unknown", ut = (_) => {
      const I = new Date(_), G = String(I.getMonth() + 1).padStart(2, "0"), j = String(I.getDate()).padStart(2, "0"), q = String(I.getHours()).padStart(2, "0"), be = String(I.getMinutes()).padStart(2, "0"), Ce = String(I.getSeconds()).padStart(2, "0");
      return `${G}-${j} ${q}:${be}:${Ce}`;
    }, St = (_) => {
      confirmDialogTitle.value = a(r.RELEASE_AND_RESEND), confirmDialogContent.value = a(r.RELEASE_AND_RESEND_DESCRIPTION), confirmAction.value = async () => {
        try {
          await x({
            ids: [_.id],
            items: [{ id: _.id, content: _.content, userId: _.userId }],
            liveId: s.value
          }), Ue("success", a(r.RELEASE_AND_RESEND_SUCCESS)), await Mt([_.id]);
        } catch (I) {
          console.error("[moderation] release failed:", I), X.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, De = C(null), Tt = () => {
      De.value = null;
    }, jt = (_, I) => {
      _.stopPropagation();
      const G = _.currentTarget.getBoundingClientRect();
      De.value = {
        item: I,
        x: G.right,
        y: G.bottom + 4
      };
    }, Vt = async (_) => {
      try {
        await aa([_.id]), X.info(a(r.DELETED)), await Mt([_.id]);
      } catch (I) {
        console.error("[moderation] delete failed:", I), X.error(a(r.OPERATION_FAILED));
      }
    }, qe = (_) => {
      confirmDialogTitle.value = a(r.BYPASS_CORRECTION), confirmDialogContent.value = a(r.BYPASS_CORRECTION_DESCRIPTION), confirmAction.value = async () => {
        try {
          await R({
            content: _.content,
            liveId: s.value
          }), Ue("success", a(r.BYPASS_CORRECTION_SUCCESS)), await Mt([_.id]);
        } catch (I) {
          console.error("[moderation] bypass correction keyword failed:", I), X.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, zt = () => {
      if (!De.value) return;
      const { item: _ } = De.value;
      Tt(), qe(_);
    }, Qi = (_) => [
      {
        key: "approve",
        label: a(r.APPROVE),
        onClick: () => St(_)
      },
      {
        key: "delete",
        label: a(r.DELETE),
        danger: !0,
        onClick: () => Vt(_)
      },
      {
        key: "more",
        label: a(r.MORE),
        suffixCaret: !0,
        onClick: (I) => jt(I, _)
      }
    ], K = () => {
      if (F.value.length === 0) {
        X.warning(a(r.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      confirmDialogTitle.value = a(r.RELEASE_AND_RESEND), confirmDialogContent.value = a(r.RELEASE_AND_RESEND_DESCRIPTION), confirmAction.value = async () => {
        const _ = [...F.value], I = Ve.value.filter((G) => _.includes(G.id)).map((G) => ({ id: G.id, content: G.content, userId: G.userId }));
        try {
          await x({ ids: _, items: I, liveId: s.value }), Ue("success", a(r.RELEASE_AND_RESEND_SUCCESS)), await Mt(_);
        } catch (G) {
          console.error("[moderation] bulk release failed:", G), X.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, ye = async () => {
      if (F.value.length === 0) {
        X.warning(a(r.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const _ = [...F.value];
      try {
        await aa(_), X.info(a(r.DELETED)), await Mt(_);
      } catch (I) {
        console.error("[moderation] bulk delete failed:", I), X.error(a(r.OPERATION_FAILED));
      }
    };
    Le(
      [s, () => {
        var _;
        return (_ = l.value) == null ? void 0 : _.createdAt;
      }],
      ([_]) => {
        _ && Pt(1);
      },
      { immediate: !0 }
    ), P(() => [
      { label: a(r.REFRESH_OFF), value: 0 },
      { label: a(r.TEN_SECONDS), value: 10 },
      { label: a(r.THIRTY_SECONDS), value: 30 },
      { label: a(r.ONE_MINUTE), value: 60 },
      { label: a(r.FIVE_MINUTES), value: 300 }
    ]);
    const Xt = C(30), Rt = C({
      visible: !1,
      liveId: "",
      liveName: ""
    }), Nn = () => {
      var _, I;
      Rt.value = {
        visible: !0,
        liveId: s.value || "",
        liveName: ((_ = ce.value) == null ? void 0 : _.liveName) || ((I = l.value) == null ? void 0 : I.liveName) || ""
      };
    }, no = C(sl()), Gt = fa({
      action: async () => {
        if (!ce.value) throw new Error("liveInfo is null");
        return endLive(ce.value.id || ce.value.liveId);
      },
      confirm: {
        title: r.CONFIRM_FORCE_STOP,
        content: r.FORCE_STOP_WARNING,
        confirmText: r.CONFIRM,
        danger: !0
      },
      successMessage: r.LIVE_FORCIBLY_CLOSED,
      errorMessage: r.FORCE_STOP_FAILED,
      onSuccess: () => {
        i.back();
      }
    }), Lt = fa({
      action: async () => {
        if (!s.value) throw new Error("liveId is required");
        return f({
          liveId: s.value,
          isMessageDisabled: !0
        });
      },
      confirm: {
        title: "⚠️ " + r.ENABLE_ALL_MEMBER_MUTE,
        content: r.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT,
        confirmText: r.CONFIRM_ENABLE,
        danger: !1
      },
      successMessage: r.ALL_MEMBER_MUTE_ENABLED,
      errorMessage: r.MUTE_FAILED,
      onSuccess: () => {
        ce.value && (ce.value = { ...ce.value, isMessageDisabled: !0 });
      }
    }), Bt = P(() => Gt.confirmDialog.value ? Gt.confirmDialog.value : Lt.confirmDialog.value ? Lt.confirmDialog.value : null), ao = () => {
      Gt.confirmDialog.value ? Gt.executeWithConfirm() : Lt.confirmDialog.value && Lt.executeWithConfirm();
    }, oo = () => {
      Gt.confirmDialog.value ? Gt.cancelConfirm() : Lt.confirmDialog.value && Lt.cancelConfirm();
    };
    let Kt = null, qt = null;
    const Ji = P(
      () => {
        var _, I, G;
        return ((I = (_ = l.value) == null ? void 0 : _.liveOwner) == null ? void 0 : I.userId) || ((G = ce.value) == null ? void 0 : G.anchor.id) || "";
      }
    ), so = P(
      () => {
        var _, I, G;
        return ((_ = ct.value) == null ? void 0 : _.nick) || Qn(
          (I = l.value) == null ? void 0 : I.liveOwner,
          ((G = ce.value) == null ? void 0 : G.anchor.name) || a(r.UNKNOWN_HOST)
        );
      }
    ), lo = P(
      () => {
        var _, I, G;
        return ((_ = ct.value) == null ? void 0 : _.avatarUrl) || Jn((I = l.value) == null ? void 0 : I.liveOwner) || ((G = ce.value) == null ? void 0 : G.anchor.avatar);
      }
    ), kn = P(() => {
      var _;
      return ((_ = ce.value) == null ? void 0 : _.isMessageDisabled) === !0;
    }), ro = P(() => Lt.loading.value), Dn = (_) => {
      const I = h.value.find((j) => j.userId === _);
      if (I != null && I.avatarUrl)
        return I.avatarUrl;
      const G = Xe.value.get(_);
      if (G != null && G.avatarUrl)
        return G.avatarUrl;
    }, On = (_) => {
      const I = h.value.find((j) => j.userId === _);
      if (I != null && I.userName)
        return I.userName;
      const G = Xe.value.get(_);
      return G != null && G.nick ? G.nick : _;
    }, Ue = (_, I) => {
      _ === "success" ? (A.value = I, setTimeout(() => A.value = "", 3e3)) : (ie.value = I, setTimeout(() => ie.value = "", 3e3));
    }, xt = (_) => {
      const I = _, G = I.ErrorCode || I.errorCode || I.code || 0, j = I.ErrorInfo || I.errorInfo || "";
      return { code: G, info: j };
    }, co = (_) => _ >= 1e4 ? (_ / 1e4).toFixed(1) + "w" : _.toLocaleString(), uo = (_) => {
      _ < 0 && (_ = 0);
      const I = Math.floor(_ / 86400), G = Math.floor(_ % 86400 / 3600), j = Math.floor(_ % 3600 / 60), q = _ % 60, be = `${G.toString().padStart(2, "0")}:${j.toString().padStart(2, "0")}:${q.toString().padStart(2, "0")}`;
      return I > 0 ? `${I}${a(r.DAYS)} ${be}` : be;
    }, Un = () => {
      i.back();
    }, ho = () => {
      Gt.requestConfirm();
    }, vo = async (_) => {
      if (ce.value)
        try {
          await f({
            liveId: ce.value.id,
            isMessageDisabled: _
          }), ce.value = { ...ce.value, isMessageDisabled: _ }, X.success(a(_ ? r.ALL_MEMBER_MUTE_ENABLED : r.ALL_MEMBER_MUTE_DISABLED));
        } catch (I) {
          const { code: G, info: j } = xt(I), q = I instanceof Error ? I : new Error(String(I)), be = G ? gt(G, j) : q.message || a(r.UNKNOWN_HOST);
          X.error(a(r.OPERATION_FAILED, { error: be }));
        }
    }, mo = (_) => {
      const I = !!_;
      if (I !== kn.value) {
        if (I) {
          Lt.requestConfirm();
          return;
        }
        vo(!1);
      }
    }, $n = (_, I, G) => {
      s.value && (ea(_, Ji.value) || (G ? (confirmDialogTitle.value = a(r.CONFIRM_UNMUTE_USER), confirmDialogContent.value = a("Unmute Confirm", { name: I }), confirmAction.value = async () => {
        try {
          await O(_), Ue("success", a("Unmuted Success", { name: I })), ui();
        } catch (j) {
          const { code: q, info: be } = xt(j), Ce = j instanceof Error ? j : new Error(String(j)), $e = q ? gt(q, be) : Ce.message || a(r.UNKNOWN_HOST);
          Ue("error", a("Operation Failed", { error: $e }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }) : (confirmDialogTitle.value = a(r.CONFIRM_MUTE_USER), confirmDialogContent.value = a("Mute Warning", { name: I }), confirmAction.value = async () => {
        try {
          await S(_, ws), Ue("success", a("Muted Success", { name: I })), ui();
        } catch (j) {
          const { code: q, info: be } = xt(j), Ce = j instanceof Error ? j : new Error(String(j)), $e = q ? gt(q, be) : Ce.message || a(r.UNKNOWN_HOST);
          Ue("error", a("Mute Failed", { error: $e }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }), confirmDialogVisible.value = !0));
    }, Fn = (_, I, G) => {
      s.value && (ea(_, Ji.value) || (G ? (confirmDialogTitle.value = a(r.CONFIRM_UNBAN_USER), confirmDialogContent.value = a("Unban Confirm", { name: I }), confirmAction.value = async () => {
        try {
          await L(_), Ue("success", a("Unbanned Success", { name: I })), di();
        } catch (j) {
          const { code: q, info: be } = xt(j), Ce = j instanceof Error ? j : new Error(String(j)), $e = q ? gt(q, be) : Ce.message || a(r.UNKNOWN_HOST);
          Ue("error", a("Operation Failed", { error: $e }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }) : (confirmDialogTitle.value = a(r.CONFIRM_BAN_USER), confirmDialogContent.value = a("Ban Warning", { name: I }), confirmAction.value = async () => {
        try {
          await N(_, Cs), Ue("success", a("Banned Success", { name: I })), di();
        } catch (j) {
          const { code: q, info: be } = xt(j), Ce = j instanceof Error ? j : new Error(String(j)), $e = q ? gt(q, be) : Ce.message || a(r.UNKNOWN_HOST);
          Ue("error", a("Ban Failed", { error: $e }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }), confirmDialogVisible.value = !0));
    }, ui = async () => {
      if (s.value) {
        B.value = !0;
        try {
          await J();
        } catch (_) {
          console.error("获取禁言列表失败:", _);
        } finally {
          B.value = !1;
        }
      }
    }, di = async () => {
      if (s.value) {
        B.value = !0;
        try {
          await oe();
        } catch (_) {
          console.error("获取封禁列表失败:", _);
        } finally {
          B.value = !1;
        }
      }
    }, fo = () => {
      ui(), he.value = !0;
    }, go = () => {
      di(), ve.value = !0;
    }, po = (_) => Array.isArray(T.value) && T.value.some((I) => I.userId === _), Pn = (_) => Array.isArray(M.value) && M.value.some((I) => I.userId === _), bo = (_) => {
      s.value && (confirmDialogTitle.value = a(r.UNMUTE), confirmDialogContent.value = a("Unmute Confirm", { name: _ }), confirmAction.value = async () => {
        try {
          await O(_), Ue("success", a("Unmuted Success", { name: _ })), ui();
        } catch (I) {
          const { code: G, info: j } = xt(I), q = I instanceof Error ? I : new Error(String(I)), be = G ? gt(G, j) : q.message || a(r.UNKNOWN_HOST);
          Ue("error", a("Operation Failed", { error: be }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0);
    }, yo = (_) => {
      s.value && (confirmDialogTitle.value = a(r.UNBAN), confirmDialogContent.value = a("Unban Confirm", { name: _ }), confirmAction.value = async () => {
        try {
          await L(_), Ue("success", a("Unbanned Success", { name: _ })), di();
        } catch (I) {
          const { code: G, info: j } = xt(I), q = I instanceof Error ? I : new Error(String(I)), be = G ? gt(G, j) : q.message || a(r.UNKNOWN_HOST);
          Ue("error", a("Operation Failed", { error: be }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0);
    }, Eo = (_) => [
      {
        key: "unmute",
        label: a(r.UNMUTE),
        onClick: () => bo(_)
      }
    ], _o = (_) => [
      {
        key: "unban",
        label: a(r.UNBAN),
        onClick: () => yo(_)
      }
    ], dt = C(null), wo = (_, I, G, j) => {
      _.stopPropagation();
      const q = _.currentTarget.getBoundingClientRect();
      dt.value = {
        userId: I,
        userName: G,
        isMuted: j,
        x: q.right,
        y: q.bottom + 4
      };
    }, en = () => {
      dt.value = null;
    }, Co = () => {
      if (!dt.value) return;
      const { userId: _, userName: I, isMuted: G } = dt.value;
      $n(_, I, G), en();
    }, Io = () => {
      if (!dt.value) return;
      const { userId: _, userName: I } = dt.value;
      Fn(_, I, Pn(_)), en();
    }, Ao = async () => {
      var _, I, G;
      if (s.value)
        try {
          const j = await d(s.value), q = ((_ = j == null ? void 0 : j.Response) == null ? void 0 : _.RoomInfo) || (j != null && j.RoomId || j != null && j.liveId ? j : null);
          if (q) {
            const be = Qn(q, q.Owner_Account || "-"), Ce = Jn(q);
            q.anchor ? ct.value = {
              nick: q.anchor.nick || be,
              avatarUrl: q.anchor.avatarUrl || Ce
            } : ct.value = {
              nick: be,
              avatarUrl: Ce
            }, ce.value = {
              id: q.RoomId,
              title: q.RoomName || a(r.UNNAMED_LIVE_SHORT),
              coverUrl: q.CoverURL || Mn,
              anchor: {
                id: q.Owner_Account,
                name: be,
                avatar: Ce
              },
              onlineCount: 0,
              createdAt: q.CreateTime * 1e3,
              isMessageDisabled: q.IsMessageDisabled === !0,
              roomType: q.RoomType || "Live",
              isSeatEnabled: q.IsSeatEnabled || !1,
              takeSeatMode: q.TakeSeatMode || "FreeToTake",
              maxSeatCount: q.MaxSeatCount || 9,
              maxMemberCount: q.MaxMemberCount || 1e3,
              category: q.Tags || [],
              activityStatus: q.ActivityStatus || 1,
              isPublicVisible: q.IsPublicVisibled !== void 0 ? q.IsPublicVisibled : !0,
              notice: q.Notice || "",
              isLikeEnabled: q.IsThumbsEnabled !== void 0 ? q.IsThumbsEnabled : !0
            };
            const $e = q.CreateTime ? q.CreateTime * 1e3 : null;
            if (je.value = $e, $e) {
              const Ci = Math.floor((Date.now() - $e) / 1e3);
              xe.value = Ci > 0 ? Ci : 0;
            }
          } else if (j != null && j.ErrorCode && j.ErrorCode !== 0) {
            j.ErrorCode === 100004 && (_e.value = !0);
            const be = j.ErrorInfo || "";
            Ue("error", gt(j.ErrorCode, be));
          } else
            Ue("error", gt(j.ErrorCode, j.ErrorInfo, a(r.GET_ERROR_MESSAGE)));
        } catch (j) {
          const { code: q, info: be } = xt(j), Ce = j instanceof Error ? j : new Error(String(j));
          if ((I = Ce.message) != null && I.includes("network") || (G = Ce.message) != null && G.includes("fetch"))
            Ue("error", a(r.NETWORK_ERROR));
          else {
            const $e = q ? gt(q, be) : Ce.message || a(r.NETWORK_ERROR);
            Ue("error", a("Request Failed", { error: $e }));
          }
        } finally {
          U.value = !1;
        }
    }, Vn = async () => {
      if (!(!s.value || !l.value))
        try {
          const _ = await u();
          if (_.ErrorCode === 0 && _.Response) {
            const I = _.Response;
            pe.totalViewers = I.TotalViewers || 0, pe.totalMsgCount = I.TotalMsgCount || 0, pe.totalLikesReceived = I.TotalLikesReceived || 0, pe.totalGiftsSent = I.TotalGiftsSent || 0, pe.totalGiftCoins = I.TotalGiftCoins || 0, pe.totalUniqueGiftSenders = I.TotalUniqueGiftSenders || 0, pe.totalUniqueCommenters = I.TotalUniqueCommenters || 0, me();
          }
        } catch (_) {
          const I = _ instanceof Error ? _ : new Error(String(_));
          console.error("获取统计数据失败:", I.message);
        }
    }, Mo = () => {
      Kt && (clearInterval(Kt), Kt = null), _e.value = !0;
    }, zn = () => {
      s.value && (ui(), di());
    }, So = () => {
      zn();
    };
    Le(
      s,
      (_) => {
        _ && getCurrentLive(_);
      },
      { immediate: !0 }
    ), s.value && (Ao(), Vn(), Pt(1)), s.value && (Kt = window.setInterval(() => {
      if (je.value) {
        const _ = Math.floor((Date.now() - je.value) / 1e3);
        xe.value = _ > 0 ? _ : 0;
      }
    }, 1e3)), Le(Xt, (_) => {
      qt && (clearInterval(qt), qt = null), _ > 0 && s.value && (qt = window.setInterval(Vn, _ * 1e3));
    }), Le(m, (_) => {
      pe.onlineCount = _;
    });
    let nt = null;
    return Le(Oe, (_) => {
      if (_ === "audience" && s.value) {
        zn();
        const I = () => {
          document.querySelectorAll(".viewer-name").forEach((j) => {
            const q = j, be = q.textContent || "";
            q.title !== be && (q.title = be);
          });
        };
        setTimeout(() => {
          I();
          const G = document.querySelector(".audience-list-area");
          G && (nt == null || nt.disconnect(), nt = new MutationObserver(I), nt.observe(G, { childList: !0, subtree: !0 }));
        }, 100);
      } else
        nt == null || nt.disconnect(), nt = null;
    }), tt(() => {
      s.value && (console.log("[LiveControl] Component unmounting, auto end live:", s.value), p(s.value).catch((_) => {
        console.error("[LiveControl] Failed to end live on unmount:", _);
      })), Kt && clearInterval(Kt), qt && clearInterval(qt), nt == null || nt.disconnect(), nt = null;
    }), (_, I) => {
      var G, j, q, be;
      return y(), w("div", zh, [
        g(t(Du), {
          "success-msg": t(A),
          "error-msg": t(ie)
        }, null, 8, ["success-msg", "error-msg"]),
        g(t(Vu), {
          "handle-leave-live": Un,
          "handle-violation-warning": Nn,
          "handle-force-stop-live": ho
        }),
        c("main", Gh, [
          g(t(Ed), {
            "live-info": ce.value,
            "live-anchor-avatar": lo.value,
            "live-anchor-name": so.value,
            "live-ended-overlay-visible": _e.value,
            "current-live": t(l),
            "is-mock-mode": t(o),
            "live-control-slots": t(b),
            "live-id": s.value,
            "active-tab": Oe.value,
            "onUpdate:activeTab": I[0] || (I[0] = (Ce) => Oe.value = Ce),
            "is-all-muted": kn.value,
            "all-mute-loading": ro.value,
            "muted-list": t(T),
            "banned-list": t(M),
            "current-user-id": ae.value,
            "anchor-user-id": Ji.value,
            "handle-leave-live": Un,
            "handle-all-mute-switch-change": mo,
            "handle-mute-audience": $n,
            "handle-ban-audience": Fn,
            "open-muted-modal": fo,
            "open-banned-modal": go,
            "is-user-muted": po,
            "handle-open-audience-dropdown": wo,
            onJoinedLive: So,
            onLiveEnded: Mo
          }, null, 8, ["live-info", "live-anchor-avatar", "live-anchor-name", "live-ended-overlay-visible", "current-live", "is-mock-mode", "live-control-slots", "live-id", "active-tab", "is-all-muted", "all-mute-loading", "muted-list", "banned-list", "current-user-id", "anchor-user-id"]),
          c("aside", Bh, [
            g(t(Xd), {
              stats: pe,
              "live-duration": xe.value,
              "update-time-text": le.value,
              "interaction-rate": ge.value,
              "format-number": co,
              "format-duration": uo
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            g(Et, {
              "slot-component": (G = t(b)) == null ? void 0 : G.customControlPanel,
              "slot-props": { liveInfo: ce.value, stats: pe }
            }, null, 8, ["slot-component", "slot-props"]),
            g(t(fh), {
              "moderation-list": Ve.value,
              "moderation-loading": t(mt),
              "moderation-page": Re.value,
              "moderation-total": at.value,
              "moderation-total-pages": se.value,
              "moderation-page-numbers": Me.value,
              "moderation-selected-ids": F.value,
              "moderation-columns": ft,
              "is-all-on-page-selected": Be.value,
              "moderation-available": no.value,
              "update-time-text": le.value,
              "handle-bulk-approve": K,
              "handle-bulk-delete": ye,
              "handle-refresh-moderation": Zi,
              "toggle-select-one": z,
              "toggle-select-all": te,
              "go-to-moderation-page": wi,
              "get-moderation-actions": Qi,
              "moderation-type-key": We,
              "format-moderation-time": ut
            }, null, 8, ["moderation-list", "moderation-loading", "moderation-page", "moderation-total", "moderation-total-pages", "moderation-page-numbers", "moderation-selected-ids", "is-all-on-page-selected", "moderation-available", "update-time-text"])
          ])
        ]),
        g(t(Ah), {
          visible: t(he),
          "onUpdate:visible": I[1] || (I[1] = (Ce) => Bn(he) ? he.value = Ce : null),
          "muted-list": t(T),
          "member-list-loading": t(B),
          "get-user-avatar": Dn,
          "get-user-name-from-cache": On,
          "get-muted-member-actions": Eo
        }, null, 8, ["visible", "muted-list", "member-list-loading"]),
        g(t(Oh), {
          visible: t(ve),
          "onUpdate:visible": I[2] || (I[2] = (Ce) => Bn(ve) ? ve.value = Ce : null),
          "banned-list": t(M),
          "member-list-loading": t(B),
          "get-user-avatar": Dn,
          "get-user-name-from-cache": On,
          "get-banned-member-actions": _o
        }, null, 8, ["visible", "banned-list", "member-list-loading"]),
        Bt.value ? (y(), ne(t(Uh), {
          key: 0,
          visible: Bt.value.visible,
          "onUpdate:visible": I[3] || (I[3] = (Ce) => Bt.value.visible = Ce),
          title: Bt.value.title,
          content: Bt.value.content,
          "confirm-text": Bt.value.confirmText,
          danger: Bt.value.danger,
          "on-confirm": ao,
          "on-close": oo
        }, null, 8, ["visible", "title", "content", "confirm-text", "danger"])) : ue("", !0),
        g(t($h), {
          visible: !!De.value,
          position: De.value || { x: 0, y: 0 },
          onRelease: zt,
          onClose: Tt
        }, null, 8, ["visible", "position"]),
        g(t(Ph), {
          visible: !!dt.value,
          "user-name": ((j = dt.value) == null ? void 0 : j.userName) || "",
          "is-muted": ((q = dt.value) == null ? void 0 : q.isMuted) || !1,
          "is-banned": Pn(((be = dt.value) == null ? void 0 : be.userId) || ""),
          position: dt.value || { x: 0, y: 0 },
          onMute: Co,
          onBan: Io,
          onClose: en
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"]),
        g(Pa, {
          visible: Rt.value.visible,
          "onUpdate:visible": I[4] || (I[4] = (Ce) => Rt.value.visible = Ce),
          "live-id": Rt.value.liveId,
          "live-name": Rt.value.liveName
        }, null, 8, ["visible", "live-id", "live-name"])
      ]);
    };
  }
}), fm = /* @__PURE__ */ ci(Wh, [["__scopeId", "data-v-9a0414f7"]]), Hh = { class: "gift-config-container" }, Yh = { class: "gift-config-page-header" }, jh = { class: "gift-config-title" }, Xh = { class: "gift-config-actions" }, Kh = { class: "gift-search-input" }, qh = { class: "gift-id" }, Zh = { class: "gift-id-text" }, Qh = { class: "gift-thumbnail" }, Jh = ["src", "alt"], ev = { key: 1 }, tv = ["onClick"], iv = { class: "gift-lang-tags" }, nv = ["onClick"], av = {
  key: 1,
  class: "gift-lang-empty"
}, ov = { class: "gift-loading-container" }, sv = { class: "gift-loading-text" }, lv = { class: "gift-empty-container" }, rv = { class: "gift-empty-text" }, cv = { class: "textarea-count-wrapper" }, uv = {
  key: 0,
  class: "form-field__error-tip"
}, dv = { class: "gift-lang-config-container" }, hv = { class: "gift-lang-config-info-banner" }, vv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, mv = { class: "gift-lang-config-table" }, fv = { class: "gift-lang-table-cell-name" }, gv = {
  key: 1,
  class: "gift-lang-table-empty"
}, pv = { class: "gift-lang-table-cell-desc" }, bv = {
  key: 1,
  class: "gift-lang-table-empty"
}, yv = { class: "gift-category-edit-tags" }, Ev = ["onClick"], _v = { class: "gift-category-add-wrapper" }, wv = { class: "category-select-list" }, Cv = {
  key: 0,
  class: "category-select-empty"
}, Iv = { class: "category-select-footer" }, mi = 0, Li = 2147483647, Jt = 1, ei = 99, gm = /* @__PURE__ */ Te({
  __name: "gift-config",
  setup(e) {
    var Mt;
    const n = _i(), i = (Mt = Hi().components) == null ? void 0 : Mt.giftConfig, s = [
      // id / name / description / categories 一组 flexible 列，容器收窄时按 raw 权重等比
      // 压缩，让 description 等长内容能被压到内容宽度以下、触发 .col-desc 上的
      // word-break: break-all 折行（与 demo 行为一致）。
      //
      // 折行能力本身依赖两件事都成立：
      // 1) FixedHeaderTable 不能给 flexible 列内联 white-space: nowrap（会覆盖 class）；
      // 2) .col-id 在共享 CSS 里也写 word-break: break-all。
      // 任何一个缺失，id 列就会变成单行溢出而不是多行折行。
      { key: "id", fitContent: !0, flexible: !0, minWidth: 64, maxWidth: 120, className: "col-id" },
      { key: "iconUrl", width: 100, className: "col-thumbnail" },
      { key: "name", fitContent: !0, flexible: !0, minWidth: 80, maxWidth: 180, className: "col-name" },
      // description.minWidth 压低到 80：让空/短内容随内容收缩；
      // 表头文字本身（≈95px）作为天然下界，避免之前 minWidth=200 把空行撑出大量空白
      // 并导致总表宽超容器，操作列被横向滚动条推出可视区。
      { key: "description", fitContent: !0, flexible: !0, minWidth: 80, maxWidth: 400, className: "col-desc" },
      { key: "categories", fitContent: !0, flexible: !0, minWidth: 80, maxWidth: 220, className: "col-category" },
      { key: "languageList", width: 180, className: "gift-col-lang" },
      { key: "level", fitContent: !0, minWidth: 64, maxWidth: 96, className: "col-level" },
      { key: "price", fitContent: !0, minWidth: 64, maxWidth: 120, className: "col-price" },
      { key: "createdAt", width: 180, className: "gift-col-time" },
      ...i != null && i.giftTableExtraColumns ? [{ key: "customer-extra", width: 160, className: "gift-col-customer-extra" }] : [],
      { key: "actions", fitContent: !0, minWidth: 120, maxWidth: 320, className: "gift-col-action" }
    ], { t: o } = ke(), a = Fa(), l = new Is({
      actions: {
        fetchGiftList: a.fetchGiftList,
        createGift: a.createGift,
        updateGift: a.updateGift,
        deleteGift: a.deleteGift,
        getGiftLanguage: a.getGiftLanguage,
        setGiftLanguage: a.setGiftLanguage,
        deleteGiftLanguage: a.deleteGiftLanguage,
        addGiftCategoryRelations: a.addGiftCategoryRelations,
        deleteGiftCategoryRelations: a.deleteGiftCategoryRelations
      },
      t: o,
      toast: {
        success: (z) => X.success(z),
        error: (z) => X.error(z)
      },
      onNavigateToCategoryManagement: () => n.push("/gift-category")
    }), d = Di(l.getState()), u = l.subscribe(() => {
      d.value = l.getState();
    }), p = P(() => d.value.loading), f = P(() => d.value.displayList), h = P(() => d.value.searchInput), m = P(() => d.value.isEdit), b = P(() => d.value.editingId);
    P(() => d.value.giftList), P(() => d.value.categoryList);
    const T = P(() => d.value.giftLangConfig), M = P(() => d.value.editingLang);
    P(() => d.value.editingGiftForLang);
    const B = P(() => d.value.langEditForm);
    P(() => d.value.editingCategoryGift);
    const $ = P(() => d.value.allCategories), V = P(() => d.value.giftCategoryIds);
    P(() => d.value.deletingCategoryId), P(() => d.value.deletingItem);
    const Z = P({
      get: () => d.value.dialogVisible,
      set: (z) => {
        z || l.closeDialog();
      }
    }), Y = P({
      get: () => d.value.langConfigVisible,
      set: (z) => {
        z || l.closeGiftLangConfigDialog();
      }
    }), J = P({
      get: () => d.value.langEditVisible,
      set: (z) => {
        z || l.closeLangEditDialog();
      }
    }), oe = P({
      get: () => d.value.categoryEditVisible,
      set: (z) => {
        z || l.closeCategoryEditDialog();
      }
    }), de = P({
      get: () => d.value.categorySelectVisible,
      set: (z) => l.setCategorySelectVisible(z)
    }), fe = P({
      get: () => d.value.categoryDeleteVisible,
      set: (z) => {
        z || l.cancelRemoveCategory();
      }
    }), H = P({
      get: () => d.value.deleteDialogVisible,
      set: (z) => {
        z || l.cancelDelete();
      }
    }), D = P({
      get: () => d.value.selectedCategoryId,
      set: (z) => l.setSelectedCategoryId(z)
    }), k = P(
      () => $.value.filter((z) => !V.value.includes(z.id))
    ), x = C(!1), R = C(!1), S = C(null), O = C(null), N = C(!1), L = C(!1), A = Oi({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), ie = (z) => {
      A.price = Number(z) || mi;
    }, he = (z) => {
      if (z === "" || z === null || z === void 0) {
        A.levelNum = void 0;
        return;
      }
      A.levelNum = Number(z);
    }, ve = (z) => {
      l.setLangEditForm({ name: String(z ?? "") });
    }, ae = (z) => {
      l.setLangEditForm({ description: String(z ?? "") });
    }, U = (z) => {
      l.setSearchInput(String(z ?? ""));
    }, ce = () => l.search(), _e = () => l.clearSearch(), Oe = (z) => {
      l.copyGiftId(z);
    }, xe = () => l.goToCategoryManagement(), je = (z) => [
      {
        key: "edit",
        label: o(r.EDIT),
        onClick: () => le(z)
      },
      {
        key: "delete",
        label: o(r.DELETE),
        danger: !0,
        onClick: () => Pt(z)
      }
    ], Xe = (z) => [
      {
        key: "edit",
        label: o(r.EDIT),
        onClick: () => b.value && at(b.value, z)
      },
      {
        key: "clear",
        label: o(r.CLEAR),
        danger: !0,
        disabled: !T.value[z].name && !T.value[z].description,
        onClick: () => b.value && l.clearLang(b.value, z)
      }
    ], ct = (z) => l.getCategoryName(z), pe = (z) => {
      var te, We;
      (te = S.value) == null || te.reset(), (We = O.value) == null || We.reset(), l.closeDialog();
    }, ge = () => {
      var z, te;
      me(), (z = S.value) == null || z.reset(), (te = O.value) == null || te.reset(), l.openCreateDialog();
    }, le = async (z) => {
      var te, We;
      (te = S.value) == null || te.reset(), (We = O.value) == null || We.reset(), A.id = z.id, A.name = z.name, A.iconUrl = z.iconUrl, A.price = z.price, A.animationUrl = z.animationUrl || "", A.levelNum = z.level ? parseInt(z.level) : void 0, A.description = z.description || "", A.extensionInfo = z.extensionInfo || "", A.enabled = z.enabled ?? !0, l.openEditDialog(z), await Je(), z.iconUrl && S.value && S.value.switchToUrlMode(), z.animationUrl && O.value && O.value.switchToUrlMode();
    }, me = () => {
      A.id = "", A.name = "", A.iconUrl = "", A.price = 0, A.animationUrl = "", A.levelNum = void 0, A.description = "", A.extensionInfo = "", A.enabled = !0, N.value = !1, L.value = !1;
    }, Ve = async () => {
      var We, ut, St, De, Tt;
      if (!A.id.trim() && !m.value) {
        X.error(o(r.ENTER_GIFT_ID));
        return;
      }
      if (Q(A.id) > Ht) {
        X.error(o("Gift ID max bytes", { max: Ht }));
        return;
      }
      if (!A.name.trim()) {
        X.error(o(r.ENTER_GIFT_NAME));
        return;
      }
      if (Q(A.name) > Ze) {
        X.error(o("Gift name max bytes", { max: Ze }));
        return;
      }
      const z = ((We = S.value) == null ? void 0 : We.isUrlInputMode) ?? !0, te = z && (((De = (St = (ut = S.value) == null ? void 0 : ut.urlInputValue) == null ? void 0 : St.trim) == null ? void 0 : De.call(St)) || "");
      if (!N.value && !A.iconUrl.trim() && !te) {
        z && ((Tt = S.value) == null || Tt.setUrlError(o(r.ENTER_THUMBNAIL_URL))), X.error(o(r.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (A.description && Q(A.description) > Qe) {
        X.error(o("Gift desc max bytes", { max: Qe }));
        return;
      }
      if (A.levelNum !== void 0 && (A.levelNum < Jt || A.levelNum > ei)) {
        X.error(o("Gift level range", { min: Jt, max: ei }));
        return;
      }
      if (A.extensionInfo.trim()) {
        try {
          JSON.parse(A.extensionInfo.trim());
        } catch {
          X.error(o(r.EXTENSION_INFO_JSON_FORMAT));
          return;
        }
        if (Q(A.extensionInfo.trim()) > 100) {
          X.error(o("Extension info max bytes", { max: 100 }));
          return;
        }
      }
      x.value = !0;
      try {
        let jt, Vt;
        try {
          [jt, Vt] = await Ms([
            {
              handle: S.value,
              hasPendingFile: N.value,
              fallbackUrl: A.iconUrl,
              label: o(r.THUMBNAIL)
            },
            {
              handle: O.value,
              hasPendingFile: L.value,
              fallbackUrl: A.animationUrl,
              label: o(r.GIFT_MATERIAL)
            }
          ]);
        } catch (qe) {
          const zt = qe instanceof Pi || qe instanceof Error ? qe : new Error(String(qe));
          X.error(zt instanceof Pi ? zt.message : o("Operation Failed", { error: zt.message || o(r.UNKNOWN_HOST) })), x.value = !1;
          return;
        }
        await l.submitGift({
          id: A.id,
          name: A.name,
          iconUrl: jt,
          price: A.price,
          animationUrl: Vt,
          enabled: A.enabled,
          level: A.levelNum != null ? String(A.levelNum) : void 0,
          description: A.description,
          extensionInfo: A.extensionInfo
        });
      } catch {
      } finally {
        x.value = !1;
      }
    }, Re = (z) => {
      l.openGiftLangConfigDialog(z);
    }, mt = () => l.closeGiftLangConfigDialog(), at = (z, te) => {
      te && l.openLangEditDialog(z, te);
    }, F = async () => {
      const z = B.value;
      if (z.name && Q(z.name) > Ze) {
        X.error(o("Gift name max bytes", { max: Ze }));
        return;
      }
      if (z.description && Q(z.description) > Qe) {
        X.error(o("Gift desc max bytes", { max: Qe }));
        return;
      }
      await l.saveLangEdit();
    }, se = (z) => {
      l.openCategoryEditDialog(z);
    }, Me = (z) => {
      l.requestRemoveCategory(z);
    }, Be = () => {
      l.confirmRemoveCategory();
    }, ft = () => l.openCategorySelectDialog(), it = () => {
      l.confirmAddCategory();
    }, Pt = (z) => l.requestDelete(z), Zi = () => void l.confirmDelete(), wi = () => l.onLanguageChanged();
    return At(async () => {
      R.value = await Da(), Fi.on("languageChanged", wi), await l.init();
    }), Ei(() => {
      Fi.off("languageChanged", wi), u(), l.dispose();
    }), (z, te) => {
      const We = ee("t-input"), ut = ee("t-button"), St = ee("t-card"), De = ee("t-form-item"), Tt = ee("t-input-number"), jt = ee("t-textarea"), Vt = ee("t-form"), qe = ee("t-dialog"), zt = ee("t-option"), Qi = ee("t-select");
      return y(), w("div", Hh, [
        c("div", Yh, [
          c("h1", jh, v(t(o)(t(r).GIFT_MANAGEMENT)), 1),
          c("div", Xh, [
            c("div", Kh, [
              g(We, {
                "model-value": h.value,
                placeholder: t(o)(t(r).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: t(ta)(h.value, t(ia)) ? "error" : "default",
                tips: t(ta)(h.value, t(ia)) ? t(o)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": U,
                onEnter: ce,
                onClear: _e
              }, {
                suffixIcon: E(() => [
                  g(t(Cn), {
                    class: "search-icon",
                    onClick: ce
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            g(ut, {
              variant: "outline",
              shape: "round",
              onClick: xe,
              theme: "primary"
            }, {
              icon: E(() => [
                g(t(Bo))
              ]),
              default: E(() => [
                W(" " + v(t(o)(t(r).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            g(ut, {
              theme: "primary",
              shape: "round",
              onClick: ge
            }, {
              default: E(() => [
                W(" ＋ " + v(t(o)(t(r).ADD_GIFT)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        g(St, { class: "gift-list-card" }, {
          default: E(() => [
            g(qi, {
              columns: s,
              data: f.value,
              "row-key": "id",
              loading: p.value,
              "table-class-name": "gift-table",
              "body-class-name": "gift-list-content",
              "row-class-name": "gift-row"
            }, {
              "header-id": E(() => [
                W(v(t(o)(t(r).GIFT_ID)), 1)
              ]),
              "header-iconUrl": E(() => [
                W(v(t(o)(t(r).THUMBNAIL)), 1)
              ]),
              "header-name": E(() => [
                W(v(t(o)(t(r).NAME)), 1)
              ]),
              "header-description": E(() => [
                W(v(t(o)(t(r).DESCRIPTION)), 1)
              ]),
              "header-categories": E(() => [
                W(v(t(o)(t(r).CATEGORY)), 1)
              ]),
              "header-languageList": E(() => [
                W(v(t(o)(t(r).MULTILINGUAL_CONFIG)), 1)
              ]),
              "header-level": E(() => [
                W(v(t(o)(t(r).LEVEL)), 1)
              ]),
              "header-price": E(() => [
                W(v(t(o)(t(r).PRICE)), 1)
              ]),
              "header-createdAt": E(() => [
                W(v(t(o)(t(r).CREATE_TIME)), 1)
              ]),
              "header-actions": E(() => [
                W(v(t(o)(t(r).ACTIONS)), 1)
              ]),
              "cell-id": E(({ row: K }) => [
                c("div", qh, [
                  c("span", Zh, v(K.id || "-"), 1),
                  g(t(Dt), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (ye) => Oe(K.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": E(({ row: K }) => [
                c("div", Qh, [
                  K.iconUrl ? (y(), w("img", {
                    key: 0,
                    src: K.iconUrl,
                    alt: K.name
                  }, null, 8, Jh)) : (y(), w("span", ev, "🎁"))
                ])
              ]),
              "cell-name": E(({ row: K }) => [
                c("span", null, v(K.name || "-"), 1)
              ]),
              "cell-description": E(({ row: K }) => [
                c("span", null, v(K.description || "-"), 1)
              ]),
              "cell-categories": E(({ row: K }) => {
                var ye;
                return [
                  c("div", {
                    class: "gift-category-cell",
                    onClick: (Xt) => se(K)
                  }, [
                    c("span", null, v(((ye = K.categories) == null ? void 0 : ye.join(", ")) || "-"), 1),
                    g(t($i), {
                      class: "gift-category-edit-icon",
                      size: "14"
                    })
                  ], 8, tv)
                ];
              }),
              "cell-languageList": E(({ row: K }) => [
                c("div", iv, [
                  K.languageList && K.languageList.length > 0 ? (y(!0), w(Ee, { key: 0 }, Ne(K.languageList, (ye) => (y(), w("span", {
                    key: t(ii)(ye),
                    class: "gift-lang-tag",
                    onClick: (Xt) => at(K.id, t(xa)(t(ii)(ye)))
                  }, v(t(o)(t(Na)(t(ii)(ye)))), 9, nv))), 128)) : (y(), w("span", av, "-")),
                  g(t($i), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (ye) => Re(K.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-level": E(({ row: K }) => [
                W(v(K.level || "-"), 1)
              ]),
              "cell-price": E(({ row: K }) => [
                W(v(K.price ?? 0), 1)
              ]),
              "cell-createdAt": E(({ row: K }) => [
                W(v(t(As)(K.createdAt)), 1)
              ]),
              "cell-customer-extra": E(({ row: K }) => {
                var ye;
                return [
                  g(Et, {
                    "slot-component": (ye = t(i)) == null ? void 0 : ye.giftTableExtraColumns,
                    "slot-props": { gift: K }
                  }, null, 8, ["slot-component", "slot-props"])
                ];
              }),
              "cell-actions": E(({ row: K }) => {
                var ye;
                return [
                  g($t, {
                    actions: je(K)
                  }, null, 8, ["actions"]),
                  g(Et, {
                    "slot-component": (ye = t(i)) == null ? void 0 : ye.giftRowActions,
                    "slot-props": { gift: K }
                  }, null, 8, ["slot-component", "slot-props"])
                ];
              }),
              loading: E(() => [
                c("div", ov, [
                  te[18] || (te[18] = c("div", { class: "gift-loading-spinner" }, null, -1)),
                  c("span", sv, v(t(o)(t(r).LOADING)), 1)
                ])
              ]),
              empty: E(() => [
                c("div", lv, [
                  c("span", rv, v(t(o)(t(r).NO_GIFT_DATA)), 1)
                ])
              ]),
              _: 1
            }, 8, ["data", "loading"])
          ]),
          _: 1
        }),
        g(qe, {
          visible: Z.value,
          "onUpdate:visible": te[9] || (te[9] = (K) => Z.value = K),
          header: m.value ? t(o)(t(r).EDIT_GIFT) : t(o)(t(r).CREATE_GIFT),
          width: "600px",
          placement: "center",
          class: "gift-modal",
          "on-close": () => pe()
        }, {
          footer: E(() => {
            var K, ye, Xt, Rt;
            return [
              g(ut, {
                variant: "outline",
                shape: "round",
                onClick: te[0] || (te[0] = (Nn) => pe())
              }, {
                default: E(() => [
                  W(v(t(o)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              g(ut, {
                theme: "primary",
                shape: "round",
                disabled: x.value || !m.value && !A.id || !A.name.trim() || ((K = S.value) == null ? void 0 : K.isValidating) || ((ye = O.value) == null ? void 0 : ye.isValidating) || ((Xt = S.value) == null ? void 0 : Xt.hasUrlError) || ((Rt = O.value) == null ? void 0 : Rt.hasUrlError),
                loading: x.value,
                onClick: Ve
              }, {
                default: E(() => [
                  W(v(x.value ? m.value ? t(o)(t(r).SAVING) : t(o)(t(r).CREATING) : m.value ? t(o)(t(r).SAVE) : t(o)(t(r).CREATE)), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ];
          }),
          default: E(() => [
            g(Vt, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": t(oi)(110),
              colon: !1
            }, {
              default: E(() => {
                var K;
                return [
                  m.value ? ue("", !0) : (y(), ne(De, {
                    key: 0,
                    label: t(o)(t(r).GIFT_ID),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(We, {
                        modelValue: A.id,
                        "onUpdate:modelValue": te[1] || (te[1] = (ye) => A.id = ye),
                        placeholder: t(o)(t(r).ENTER_GIFT_ID),
                        status: t(Q)(A.id) > t(Ht) ? "error" : "default",
                        tips: t(Q)(A.id) > t(Ht) ? t(o)("Gift ID max bytes", { max: t(Ht) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: we(["input-suffix-count", { "byte-overflow": t(Q)(A.id) > t(Ht) }])
                          }, v(t(Q)(A.id)) + "/" + v(t(Ht)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"])),
                  g(De, {
                    label: t(o)(t(r).GIFT_PRICE),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(Tt, {
                        "model-value": A.price,
                        min: mi,
                        max: Li,
                        "decimal-places": 0,
                        status: A.price < mi || A.price > Li ? "error" : "default",
                        tips: A.price < mi || A.price > Li ? t(o)("Gift price range", { min: mi, max: Li }) : "",
                        style: { width: "100%" },
                        placeholder: t(o)(t(r).ENTER_GIFT_PRICE),
                        "onUpdate:modelValue": ie
                      }, null, 8, ["model-value", "status", "tips", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(De, {
                    label: t(o)(t(r).GIFT_LEVEL)
                  }, {
                    default: E(() => [
                      g(Tt, {
                        "model-value": A.levelNum,
                        min: A.levelNum != null ? Jt : void 0,
                        max: A.levelNum != null ? ei : void 0,
                        status: (A.levelNum ?? 0) > 0 && ((A.levelNum ?? 0) < Jt || (A.levelNum ?? 0) > ei) ? "error" : "default",
                        tips: (A.levelNum ?? 0) > 0 && ((A.levelNum ?? 0) < Jt || (A.levelNum ?? 0) > ei) ? t(o)("Gift level range", { min: Jt, max: ei }) : "",
                        style: { width: "100%" },
                        placeholder: t(o)(t(r).ENTER_GIFT_LEVEL),
                        "onUpdate:modelValue": he
                      }, null, 8, ["model-value", "min", "max", "status", "tips", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(De, {
                    label: t(o)(t(r).THUMBNAIL),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(Gi, {
                        ref_key: "iconUploadRef",
                        ref: S,
                        modelValue: A.iconUrl,
                        "onUpdate:modelValue": te[2] || (te[2] = (ye) => A.iconUrl = ye),
                        type: "gift-icon",
                        "upload-enabled": R.value,
                        "crop-enabled": !0,
                        "aspect-ratio": 1,
                        placeholder: t(o)(t(r).CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
                        "preview-width": 120,
                        "preview-height": 120,
                        "max-size": 5,
                        "max-bytes": 200,
                        "defer-upload": R.value,
                        onFileReady: te[3] || (te[3] = (ye) => N.value = !!ye)
                      }, null, 8, ["modelValue", "upload-enabled", "placeholder", "defer-upload"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(De, {
                    label: t(o)(t(r).GIFT_MATERIAL)
                  }, {
                    default: E(() => [
                      g(Gi, {
                        ref_key: "animUploadRef",
                        ref: O,
                        modelValue: A.animationUrl,
                        "onUpdate:modelValue": te[4] || (te[4] = (ye) => A.animationUrl = ye),
                        type: "gift-animation",
                        "upload-enabled": R.value,
                        "crop-enabled": !1,
                        placeholder: t(o)(t(r).CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
                        "preview-width": 120,
                        "preview-height": 120,
                        "max-size": 10,
                        accept: "video/mp4,.svga",
                        "accept-hint": t(o)(t(r).SUPPORT_MP4_SVGA_MAX_10MB),
                        "max-bytes": 200,
                        "defer-upload": R.value,
                        "skip-svga-validation": !0,
                        onFileReady: te[5] || (te[5] = (ye) => L.value = !!ye)
                      }, null, 8, ["modelValue", "upload-enabled", "placeholder", "accept-hint", "defer-upload"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(De, {
                    label: t(o)(t(r).GIFT_NAME),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(We, {
                        modelValue: A.name,
                        "onUpdate:modelValue": te[6] || (te[6] = (ye) => A.name = ye),
                        placeholder: t(o)(t(r).ENTER_GIFT_NAME),
                        status: t(Q)(A.name) > t(Ze) ? "error" : "default",
                        tips: t(Q)(A.name) > t(Ze) ? t(o)("Gift name max bytes", { max: t(Ze) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: we(["input-suffix-count", { "byte-overflow": t(Q)(A.name) > t(Ze) }])
                          }, v(t(Q)(A.name)) + "/" + v(t(Ze)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(De, {
                    label: t(o)(t(r).DESCRIPTION)
                  }, {
                    default: E(() => [
                      g(We, {
                        modelValue: A.description,
                        "onUpdate:modelValue": te[7] || (te[7] = (ye) => A.description = ye),
                        placeholder: t(o)(t(r).ENTER_GIFT_DESCRIPTION),
                        status: t(Q)(A.description) > t(Qe) ? "error" : "default",
                        tips: t(Q)(A.description) > t(Qe) ? t(o)("Gift desc max bytes", { max: t(Qe) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: we(["input-suffix-count", { "byte-overflow": t(Q)(A.description) > t(Qe) }])
                          }, v(t(Q)(A.description)) + "/" + v(t(Qe)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Et, {
                    "slot-component": (K = t(i)) == null ? void 0 : K.giftFormExtraFields,
                    "slot-props": { mode: m.value ? "edit" : "create", formData: { ...A } }
                  }, null, 8, ["slot-component", "slot-props"]),
                  g(De, {
                    label: t(o)(t(r).CUSTOM_EXTENSION_INFO)
                  }, {
                    default: E(() => [
                      c("div", cv, [
                        g(jt, {
                          modelValue: A.extensionInfo,
                          "onUpdate:modelValue": te[8] || (te[8] = (ye) => A.extensionInfo = ye),
                          placeholder: t(o)(t(r).EXTENSION_INFO_JSON_FORMAT),
                          autosize: { minRows: 3 },
                          status: t(Q)(A.extensionInfo) > t(hi) ? "error" : "default"
                        }, null, 8, ["modelValue", "placeholder", "status"]),
                        c("span", {
                          class: we(["textarea-suffix-count", { "byte-overflow": t(Q)(A.extensionInfo) > t(hi) }])
                        }, v(t(Q)(A.extensionInfo)) + "/" + v(t(hi)), 3)
                      ]),
                      t(Q)(A.extensionInfo) > t(hi) ? (y(), w("div", uv, v(t(o)("Extension info max bytes", { max: t(hi) })), 1)) : ue("", !0)
                    ]),
                    _: 1
                  }, 8, ["label"])
                ];
              }),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "on-close"]),
        g(qe, {
          visible: Y.value,
          "onUpdate:visible": te[10] || (te[10] = (K) => Y.value = K),
          header: t(o)(t(r).GIFT_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: t(o)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": mt,
          onConfirm: mt
        }, {
          default: E(() => [
            c("div", dv, [
              c("div", hv, [
                (y(), w("svg", vv, [...te[19] || (te[19] = [
                  c("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5"
                  }, null, -1),
                  c("path", {
                    d: "M8 7V11",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }, null, -1),
                  c("circle", {
                    cx: "8",
                    cy: "5",
                    r: "0.75",
                    fill: "#1C66E5"
                  }, null, -1)
                ])])),
                c("span", null, v(t(o)(t(r).MULTILINGUAL_CONFIG_TIP)), 1)
              ]),
              c("table", mv, [
                c("thead", null, [
                  c("tr", null, [
                    c("th", null, v(t(o)(t(r).LANGUAGE_TYPE)), 1),
                    c("th", null, v(t(o)(t(r).GIFT_NAME)), 1),
                    c("th", null, v(t(o)(t(r).DESCRIPTION)), 1),
                    c("th", null, v(t(o)(t(r).ACTIONS)), 1)
                  ])
                ]),
                c("tbody", null, [
                  (y(!0), w(Ee, null, Ne(t(ka), (K) => (y(), w("tr", { key: K }, [
                    c("td", null, v(t(o)(t(Ut)[K].label)), 1),
                    c("td", fv, [
                      T.value[K].name ? (y(), w(Ee, { key: 0 }, [
                        W(v(T.value[K].name), 1)
                      ], 64)) : (y(), w("span", gv, v(t(o)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", pv, [
                      T.value[K].description ? (y(), w(Ee, { key: 0 }, [
                        W(v(T.value[K].description), 1)
                      ], 64)) : (y(), w("span", bv, v(t(o)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", null, [
                      g($t, {
                        actions: Xe(K)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(qe, {
          visible: J.value,
          "onUpdate:visible": te[11] || (te[11] = (K) => J.value = K),
          header: M.value ? t(o)(t(r).EDIT_GIFT_LANGUAGE_INFO, { lang: t(o)(t(Ut)[M.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: t(o)(t(r).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: F
        }, {
          default: E(() => [
            g(Vt, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": t(oi)(110),
              colon: !1
            }, {
              default: E(() => [
                g(De, {
                  label: t(o)(t(r).GIFT_NAME)
                }, {
                  default: E(() => [
                    g(We, {
                      "model-value": B.value.name,
                      placeholder: M.value ? t(o)(t(r).ENTER_LANGUAGE_GIFT_NAME, { lang: t(o)(t(Ut)[M.value].label) }) : "",
                      status: t(Q)(B.value.name) > t(Ze) ? "error" : "default",
                      tips: t(Q)(B.value.name) > t(Ze) ? t(o)(t(r).GIFT_NAME_MAX_BYTES, { max: t(Ze) }) : "",
                      "onUpdate:modelValue": ve
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(B.value.name) > t(Ze) }])
                        }, v(t(Q)(B.value.name)) + "/" + v(t(Ze)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(De, {
                  label: t(o)(t(r).DESCRIPTION)
                }, {
                  default: E(() => [
                    g(We, {
                      "model-value": B.value.description,
                      placeholder: M.value ? t(o)(t(r).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: t(o)(t(Ut)[M.value].label) }) : "",
                      status: t(Q)(B.value.description) > t(Qe) ? "error" : "default",
                      tips: t(Q)(B.value.description) > t(Qe) ? t(o)(t(r).GIFT_DESC_MAX_BYTES, { max: t(Qe) }) : "",
                      "onUpdate:modelValue": ae
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(B.value.description) > t(Qe) }])
                        }, v(t(Q)(B.value.description)) + "/" + v(t(Qe)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(qe, {
          visible: oe.value,
          "onUpdate:visible": te[12] || (te[12] = (K) => oe.value = K),
          header: t(o)(t(r).EDIT_GIFT_CATEGORY),
          width: "420px",
          placement: "center",
          class: "gift-category-edit-modal",
          "confirm-btn": { content: t(o)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          onConfirm: te[13] || (te[13] = (K) => oe.value = !1)
        }, {
          default: E(() => [
            c("div", yv, [
              V.value.length > 0 ? (y(!0), w(Ee, { key: 0 }, Ne(V.value, (K) => (y(), w("span", {
                key: K,
                class: "gift-category-edit-tag"
              }, [
                W(v(ct(K)) + " ", 1),
                c("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (ye) => Me(K)
                }, [...te[20] || (te[20] = [
                  c("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none"
                  }, [
                    c("path", {
                      d: "M9 3L3 9M3 3L9 9",
                      stroke: "currentColor",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ], -1)
                ])], 8, Ev)
              ]))), 128)) : ue("", !0),
              c("div", _v, [
                g(ut, {
                  size: "small",
                  variant: "text",
                  theme: "primary",
                  onClick: ft
                }, {
                  default: E(() => [
                    W(" + " + v(t(o)(t(r).ADD)), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(qe, {
          visible: H.value,
          "onUpdate:visible": te[14] || (te[14] = (K) => H.value = K),
          header: t(o)(t(r).CONFIRM_DELETE_GIFT),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(o)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: Zi
        }, {
          default: E(() => [
            c("p", null, v(t(o)(t(r).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(qe, {
          visible: fe.value,
          "onUpdate:visible": te[15] || (te[15] = (K) => fe.value = K),
          header: t(o)(t(r).CONFIRM_REMOVE_CATEGORY),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(o)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: Be
        }, {
          default: E(() => [
            c("p", null, v(t(o)(t(r).REMOVE_CATEGORY_DESCRIPTION)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(qe, {
          visible: de.value,
          "onUpdate:visible": te[17] || (te[17] = (K) => de.value = K),
          header: t(o)(t(r).SELECT_CATEGORY),
          width: "360px",
          placement: "center",
          footer: !1,
          "on-close": () => de.value = !1
        }, {
          default: E(() => [
            c("div", wv, [
              g(Qi, {
                modelValue: D.value,
                "onUpdate:modelValue": te[16] || (te[16] = (K) => D.value = K),
                placeholder: t(o)(t(r).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: E(() => [
                  (y(!0), w(Ee, null, Ne(k.value, (K) => (y(), ne(zt, {
                    key: K.id,
                    value: K.id,
                    label: K.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              k.value.length === 0 ? (y(), w("div", Cv, v(t(o)(t(r).NO_AVAILABLE_CATEGORIES)), 1)) : ue("", !0)
            ]),
            c("div", Iv, [
              g(ut, {
                theme: "primary",
                shape: "round",
                disabled: !D.value,
                onClick: it
              }, {
                default: E(() => [
                  W(v(t(o)(t(r).CONFIRM)), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "on-close"])
      ]);
    };
  }
}), Av = { class: "gift-category-container" }, Mv = { class: "gift-category-page-header" }, Sv = { class: "gift-category-title-section" }, Tv = ["viewBox", "stroke-width", "stroke-linecap"], Rv = ["d"], Lv = { class: "gift-category-actions" }, xv = {
  key: 0,
  class: "create-category-tooltip"
}, Nv = { class: "gift-category-table-wrapper" }, kv = { class: "gift-id" }, Dv = { class: "gift-id-text" }, Ov = { class: "category-name" }, Uv = { class: "category-desc" }, $v = { class: "category-lang-tags" }, Fv = ["onClick"], Pv = {
  key: 1,
  class: "category-lang-empty"
}, Vv = { class: "category-count" }, zv = { class: "category-loading-container" }, Gv = { class: "category-loading-text" }, Bv = { class: "category-empty-container" }, Wv = { class: "category-empty-text" }, Hv = { class: "category-lang-config-container" }, Yv = { class: "category-lang-config-info-banner" }, jv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, Xv = { class: "category-lang-config-table" }, Kv = { class: "category-lang-table-cell-name" }, qv = {
  key: 1,
  class: "category-lang-table-empty"
}, Zv = { class: "category-lang-table-cell-desc" }, Qv = {
  key: 1,
  class: "category-lang-table-empty"
}, pm = /* @__PURE__ */ Te({
  __name: "gift-category",
  setup(e) {
    const n = _i(), { t: i } = ke(), s = Fa(), o = new Ss({
      actions: {
        fetchGiftList: s.fetchGiftList,
        createGiftCategory: s.createGiftCategory,
        updateGiftCategory: s.updateGiftCategory,
        deleteGiftCategory: s.deleteGiftCategory,
        getGiftCategoryLanguage: s.getGiftCategoryLanguage,
        setGiftCategoryLanguage: s.setGiftCategoryLanguage,
        deleteGiftCategoryLanguage: s.deleteGiftCategoryLanguage
      },
      t: i,
      toast: {
        success: (N) => X.success(N),
        error: (N) => X.error(N)
      },
      onNavigateBack: () => n.push("/gift-config")
    }), a = Di(o.getState()), l = o.subscribe(() => {
      a.value = o.getState();
    }), d = P(() => a.value.loading), u = P(() => a.value.categoryList), p = P(() => a.value.isEdit), f = P(() => a.value.formData), h = P(() => a.value.categoryLangConfig), m = P(() => a.value.editingLang), b = P(() => a.value.langEditForm), T = P({
      get: () => a.value.dialogVisible,
      set: (N) => {
        N || o.closeDialog();
      }
    }), M = P({
      get: () => a.value.langConfigVisible,
      set: (N) => {
        N || o.closeLangConfigDialog();
      }
    }), B = P({
      get: () => a.value.langEditVisible,
      set: (N) => {
        N || o.closeLangEditDialog();
      }
    }), $ = P({
      get: () => a.value.deleteDialogVisible,
      set: (N) => {
        N || o.cancelDelete();
      }
    }), V = P({
      get: () => a.value.formData.categoryId,
      set: (N) => o.setFormData({ categoryId: N })
    }), Z = P({
      get: () => a.value.formData.name,
      set: (N) => o.setFormData({ name: N })
    }), Y = P({
      get: () => a.value.formData.description,
      set: (N) => o.setFormData({ description: N })
    }), J = P({
      get: () => a.value.langEditForm.name,
      set: (N) => o.setLangEditForm({ name: N })
    }), oe = P({
      get: () => a.value.langEditForm.description,
      set: (N) => o.setLangEditForm({ description: N })
    }), de = C(!1), fe = [
      { key: "id", width: 120, className: "col-id" },
      { key: "name", className: "col-name" },
      { key: "description", className: "col-desc" },
      { key: "languageList", width: 200, className: "col-languages" },
      { key: "giftCount", width: 80, className: "col-count" },
      { key: "actions", fitContent: !0, minWidth: 100, maxWidth: 220, className: "col-actions" }
    ], H = (N) => {
      Ra(String(N || "")), X.success(i("Copy Label Copied", { label: i(r.CATEGORY_ID) }));
    }, D = (N, L) => {
      const A = ii(L), ie = xa(A);
      ie && o.openLangEditDialog(N, ie);
    }, k = (N) => [
      {
        key: "edit",
        label: i(r.EDIT),
        onClick: () => o.openEditDialog(N)
      },
      {
        key: "delete",
        label: i(r.DELETE),
        danger: !0,
        onClick: () => o.requestDelete(N)
      }
    ], x = (N) => [
      {
        key: "edit",
        label: i(r.EDIT),
        onClick: () => a.value.editingId && o.openLangEditDialog(a.value.editingId, N)
      },
      {
        key: "clear",
        label: i(r.CLEAR),
        danger: !0,
        disabled: !a.value.categoryLangConfig[N].name && !a.value.categoryLangConfig[N].description,
        onClick: () => a.value.editingId && o.clearLang(a.value.editingId, N)
      }
    ], R = async () => {
      const N = a.value.formData;
      if (!N.categoryId.trim()) {
        X.error(i(r.ENTER_CATEGORY_ID));
        return;
      }
      if (!N.name.trim()) {
        X.error(i(r.ENTER_CATEGORY_NAME));
        return;
      }
      de.value = !0;
      try {
        await o.submitForm({
          categoryId: N.categoryId.trim(),
          name: N.name.trim(),
          description: N.description.trim()
        });
      } catch {
      } finally {
        de.value = !1;
      }
    }, S = async () => {
      const N = a.value.langEditForm;
      if (N.name && Q(N.name) > ot) {
        X.error(i("Category name max bytes", { max: ot }));
        return;
      }
      if (N.description && Q(N.description) > st) {
        X.error(i("Category desc max bytes", { max: st }));
        return;
      }
      await o.saveLangEdit();
    }, O = () => o.onLanguageChanged();
    return At(() => {
      o.init(), Fi.on("languageChanged", O);
    }), Ei(() => {
      Fi.off("languageChanged", O), l(), o.dispose();
    }), (N, L) => {
      const A = ee("t-button"), ie = ee("t-input"), he = ee("t-form-item"), ve = ee("t-form"), ae = ee("t-dialog");
      return y(), w("div", Av, [
        c("div", Mv, [
          c("div", Sv, [
            g(A, {
              variant: "outline",
              shape: "circle",
              class: "back-btn",
              onClick: L[0] || (L[0] = (U) => t(o).goBack()),
              title: t(i)(t(r).BACK_TO_LIST)
            }, {
              icon: E(() => [
                (y(), w("svg", {
                  viewBox: t(Ot).viewBox,
                  width: "1em",
                  height: "1em",
                  fill: "none",
                  stroke: "currentColor",
                  "stroke-width": t(Ot).strokeWidth,
                  "stroke-linecap": t(Ot).strokeLinecap
                }, [
                  c("path", {
                    d: t(Ot).path
                  }, null, 8, Rv)
                ], 8, Tv))
              ]),
              _: 1
            }, 8, ["title"]),
            c("h1", null, v(t(i)(t(r).CATEGORY_MANAGEMENT)), 1)
          ]),
          c("div", Lv, [
            c("div", {
              class: we(["create-category-btn-wrapper", { disabled: u.value.length >= t(tn) }])
            }, [
              g(A, {
                theme: "primary",
                shape: "round",
                disabled: u.value.length >= t(tn),
                onClick: L[1] || (L[1] = (U) => t(o).openCreateDialog())
              }, {
                default: E(() => [
                  W(" ＋ " + v(t(i)(t(r).ADD_CATEGORY)), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              u.value.length >= t(tn) ? (y(), w("div", xv, v(t(i)(t(r).CATEGORY_LIMIT_REACHED)), 1)) : ue("", !0)
            ], 2)
          ])
        ]),
        c("div", Nv, [
          g(qi, {
            columns: fe,
            data: u.value,
            "row-key": "id",
            loading: d.value,
            "table-class-name": "category-table",
            "body-class-name": "category-list-content"
          }, {
            "header-id": E(() => [
              W(v(t(i)(t(r).CATEGORY_ID)), 1)
            ]),
            "header-name": E(() => [
              W(v(t(i)(t(r).CATEGORY_NAME)), 1)
            ]),
            "header-description": E(() => [
              W(v(t(i)(t(r).CATEGORY_DESCRIPTION)), 1)
            ]),
            "header-languageList": E(() => [
              W(v(t(i)(t(r).MULTILINGUAL_CONFIG)), 1)
            ]),
            "header-giftCount": E(() => [
              W(v(t(i)(t(r).NUMBER_OF_GIFTS)), 1)
            ]),
            "header-actions": E(() => [
              W(v(t(i)(t(r).ACTIONS)), 1)
            ]),
            "cell-id": E(({ row: U }) => [
              c("div", kv, [
                c("span", Dv, v(U.id || "-"), 1),
                g(t(Dt), {
                  class: "copy-icon",
                  size: "14",
                  onClick: (ce) => H(U.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-name": E(({ row: U }) => [
              c("span", Ov, v(U.name || "-"), 1)
            ]),
            "cell-description": E(({ row: U }) => [
              c("span", Uv, v(U.description || "-"), 1)
            ]),
            "cell-languageList": E(({ row: U }) => [
              c("div", $v, [
                U.languageList && U.languageList.length > 0 ? (y(!0), w(Ee, { key: 0 }, Ne(U.languageList, (ce) => (y(), w("span", {
                  key: t(ii)(ce),
                  class: "category-lang-tag",
                  onClick: (_e) => D(U.id, ce)
                }, v(t(i)(t(Na)(t(ii)(ce)))), 9, Fv))), 128)) : (y(), w("span", Pv, "-")),
                g(t($i), {
                  class: "category-lang-edit-icon",
                  size: "14",
                  onClick: (ce) => t(o).openLangConfigDialog(U.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-giftCount": E(({ row: U }) => [
              c("span", Vv, v(U.giftCount ?? 0), 1)
            ]),
            "cell-actions": E(({ row: U }) => [
              g($t, {
                actions: k(U)
              }, null, 8, ["actions"])
            ]),
            loading: E(() => [
              c("div", zv, [
                L[13] || (L[13] = c("div", { class: "category-loading-spinner" }, null, -1)),
                c("span", Gv, v(t(i)(t(r).LOADING)), 1)
              ])
            ]),
            empty: E(() => [
              c("div", Bv, [
                c("span", Wv, v(t(i)(t(r).CREATE_CATEGORY_FIRST)), 1)
              ])
            ]),
            _: 1
          }, 8, ["data", "loading"])
        ]),
        g(ae, {
          visible: T.value,
          "onUpdate:visible": L[5] || (L[5] = (U) => T.value = U),
          header: p.value ? t(i)(t(r).EDIT_CATEGORY) : t(i)(t(r).CREATE_CATEGORY),
          width: "500px",
          placement: "center",
          class: "gift-modal",
          "confirm-btn": {
            content: de.value ? t(i)(t(r).CREATING) : p.value ? t(i)(t(r).SAVE) : t(i)(t(r).CREATE),
            disabled: de.value || !f.value.categoryId.trim() || !f.value.name.trim(),
            loading: de.value,
            shape: "round"
          },
          "cancel-btn": { shape: "round" },
          "on-confirm": R
        }, {
          default: E(() => [
            g(ve, {
              class: "gift-modal-body",
              "label-width": t(oi)(100),
              colon: !1
            }, {
              default: E(() => [
                g(he, {
                  label: t(i)(t(r).CATEGORY_ID),
                  "required-mark": !0
                }, {
                  default: E(() => [
                    g(ie, {
                      modelValue: V.value,
                      "onUpdate:modelValue": L[2] || (L[2] = (U) => V.value = U),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_ID),
                      disabled: p.value,
                      status: t(Q)(f.value.categoryId) > t(vi) ? "error" : "default",
                      tips: t(Q)(f.value.categoryId) > t(vi) ? t(i)("Category ID max bytes", { max: t(vi) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(f.value.categoryId) > t(vi) }])
                        }, v(t(Q)(f.value.categoryId)) + "/" + v(t(vi)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "disabled", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(he, {
                  label: t(i)(t(r).CATEGORY_NAME),
                  "required-mark": !0
                }, {
                  default: E(() => [
                    g(ie, {
                      modelValue: Z.value,
                      "onUpdate:modelValue": L[3] || (L[3] = (U) => Z.value = U),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_NAME),
                      status: t(Q)(f.value.name) > t(ot) ? "error" : "default",
                      tips: t(Q)(f.value.name) > t(ot) ? t(i)("Category name max bytes", { max: t(ot) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(f.value.name) > t(ot) }])
                        }, v(t(Q)(f.value.name)) + "/" + v(t(ot)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(he, {
                  label: t(i)(t(r).DESCRIPTION)
                }, {
                  default: E(() => [
                    g(ie, {
                      modelValue: Y.value,
                      "onUpdate:modelValue": L[4] || (L[4] = (U) => Y.value = U),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_DESCRIPTION),
                      status: t(Q)(f.value.description) > t(st) ? "error" : "default",
                      tips: t(Q)(f.value.description) > t(st) ? t(i)("Category desc max bytes", { max: t(st) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(f.value.description) > t(st) }])
                        }, v(t(Q)(f.value.description)) + "/" + v(t(st)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(ae, {
          visible: M.value,
          "onUpdate:visible": L[6] || (L[6] = (U) => M.value = U),
          header: t(i)(t(r).CATEGORY_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: t(i)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": () => t(o).closeLangConfigDialog(),
          onConfirm: L[7] || (L[7] = (U) => t(o).closeLangConfigDialog())
        }, {
          default: E(() => [
            c("div", Hv, [
              c("div", Yv, [
                (y(), w("svg", jv, [...L[14] || (L[14] = [
                  c("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5"
                  }, null, -1),
                  c("path", {
                    d: "M8 7V11",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }, null, -1),
                  c("circle", {
                    cx: "8",
                    cy: "5",
                    r: "0.75",
                    fill: "#1C66E5"
                  }, null, -1)
                ])])),
                c("span", null, v(t(i)(t(r).CATEGORY_MULTILINGUAL_CONFIG_TIP)), 1)
              ]),
              c("table", Xv, [
                c("thead", null, [
                  c("tr", null, [
                    c("th", null, v(t(i)(t(r).LANGUAGE_TYPE)), 1),
                    c("th", null, v(t(i)(t(r).CATEGORY_NAME)), 1),
                    c("th", null, v(t(i)(t(r).CATEGORY_DESCRIPTION)), 1),
                    c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                  ])
                ]),
                c("tbody", null, [
                  (y(!0), w(Ee, null, Ne(t(ka), (U) => (y(), w("tr", { key: U }, [
                    c("td", null, v(t(i)(t(Ut)[U].label)), 1),
                    c("td", Kv, [
                      h.value[U].name ? (y(), w(Ee, { key: 0 }, [
                        W(v(h.value[U].name), 1)
                      ], 64)) : (y(), w("span", qv, v(t(i)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", Zv, [
                      h.value[U].description ? (y(), w(Ee, { key: 0 }, [
                        W(v(h.value[U].description), 1)
                      ], 64)) : (y(), w("span", Qv, v(t(i)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", null, [
                      g($t, {
                        actions: x(U)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "on-close"]),
        g(ae, {
          visible: B.value,
          "onUpdate:visible": L[10] || (L[10] = (U) => B.value = U),
          header: m.value ? t(i)(t(r).EDIT_CATEGORY_LANGUAGE_INFO, { lang: t(i)(t(Ut)[m.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: t(i)(t(r).SAVE), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: S
        }, {
          default: E(() => [
            g(ve, {
              class: "gift-modal-body",
              "label-width": t(oi)(100),
              colon: !1
            }, {
              default: E(() => [
                g(he, {
                  label: t(i)(t(r).CATEGORY_NAME)
                }, {
                  default: E(() => [
                    g(ie, {
                      modelValue: J.value,
                      "onUpdate:modelValue": L[8] || (L[8] = (U) => J.value = U),
                      placeholder: m.value ? t(i)(t(r).ENTER_LANGUAGE_CATEGORY_NAME, { lang: t(i)(t(Ut)[m.value].label) }) : "",
                      status: t(Q)(b.value.name) > t(ot) ? "error" : "default",
                      tips: t(Q)(b.value.name) > t(ot) ? t(i)(t(r).CATEGORY_NAME_MAX_BYTES, { max: t(ot) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(b.value.name) > t(ot) }])
                        }, v(t(Q)(b.value.name)) + "/" + v(t(ot)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(he, {
                  label: t(i)(t(r).CATEGORY_DESCRIPTION)
                }, {
                  default: E(() => [
                    g(ie, {
                      modelValue: oe.value,
                      "onUpdate:modelValue": L[9] || (L[9] = (U) => oe.value = U),
                      placeholder: m.value ? t(i)(t(r).ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: t(i)(t(Ut)[m.value].label) }) : "",
                      status: t(Q)(b.value.description) > t(st) ? "error" : "default",
                      tips: t(Q)(b.value.description) > t(st) ? t(i)(t(r).CATEGORY_DESC_MAX_BYTES, { max: t(st) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: we(["input-suffix-count", { "byte-overflow": t(Q)(b.value.description) > t(st) }])
                        }, v(t(Q)(b.value.description)) + "/" + v(t(st)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(ae, {
          visible: $.value,
          "onUpdate:visible": L[11] || (L[11] = (U) => $.value = U),
          header: t(i)(t(r).CONFIRM_DELETE_CATEGORY),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(i)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: L[12] || (L[12] = (U) => t(o).confirmDelete())
        }, {
          default: E(() => [
            c("p", null, v(t(i)(t(r).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"])
      ]);
    };
  }
}), bm = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let Se = null, Jv = !0;
const ga = C([]), pa = C(!0), ba = C(null), em = C({}), tm = C(null);
let Fe = null;
const pn = C([]), bn = C(1), yn = C(!0), En = C(!1);
function ya() {
  return Fe || (Fe = new Us({
    pageSize: 8,
    initialCursor: "0",
    fetchPage: async ({ cursor: e, count: n }) => {
      const i = Se;
      if (!i)
        return { list: [], nextCursor: "" };
      const s = await i.fetchLiveList({ action: "next", count: n }), o = i.getCursor();
      return { list: s, nextCursor: o };
    }
  }), Fe.subscribe((e) => {
    pn.value = e.pageData, bn.value = e.currentPage, yn.value = e.hasMore, En.value = e.loading;
  }), Fe);
}
function Ft() {
  const e = () => {
    Se || (Se = new Ts({
      onStateChange: ($) => {
        $.liveList !== void 0 && (ga.value = $.liveList), $.hasMore !== void 0 && (pa.value = $.hasMore), $.currentLive !== void 0 && (ba.value = $.currentLive), $.loading !== void 0 && (em.value = $.loading), $.error !== void 0 && (tm.value = $.error);
      },
      getActive: () => Jv
    }), console.log("[useLiveMonitorState] Core initialized (singleton)"));
  };
  return tt(() => {
    console.log("[useLiveMonitorState] Component unmounted, core kept for other consumers");
  }), At(() => {
    if (e(), ya(), Fe) {
      const $ = Fe.getSnapshot();
      pn.value = $.pageData, bn.value = $.currentPage, yn.value = $.hasMore, En.value = $.loading;
    }
  }), Se || e(), ya(), {
    init: ($) => {
      if (console.log("[useLiveMonitorState] init called", { hasCore: !!Se, configKeys: Object.keys($) }), Se || (console.warn("[useLiveMonitorState] core is null, initializing..."), e(), console.log("[useLiveMonitorState] after initCore, hasCore:", !!Se)), !Se) {
        console.error("[useLiveMonitorState] core is still null after initCore! Cannot initialize.");
        return;
      }
      Se.init($);
    },
    liveList: ga,
    hasMore: pa,
    currentLive: ba,
    setCurrentLive: ($) => {
      Se == null || Se.setCurrentLive($);
    },
    fetchLiveList: async ($) => Se ? Se.fetchLiveList($) : (console.warn("[useLiveMonitorState] fetchLiveList: core is null, returning empty list"), []),
    createLive: async ($) => {
      if (!Se)
        throw console.warn("[useLiveMonitorState] createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      return Se.createLive($);
    },
    updateLive: async ($) => {
      if (!Se) {
        console.warn("[useLiveMonitorState] updateLive: core is null, skipping");
        return;
      }
      return Se.updateLive($);
    },
    endLive: async ($) => {
      if (!Se) {
        console.warn("[useLiveMonitorState] endLive: core is null, skipping");
        return;
      }
      return Se.endLive($);
    },
    fetchLiveDetail: async ($) => Se ? Se.fetchLiveDetail($) : (console.warn("[useLiveMonitorState] fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async ($) => Se ? Se.fetchLiveStats($) : (console.warn("[useLiveMonitorState] fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async ($) => {
      if (!Se) {
        console.warn("[useLiveMonitorState] startPlay: core is null, skipping");
        return;
      }
      return Se.startPlay($);
    },
    stopPlay: async ($) => {
      if (!Se) {
        console.warn("[useLiveMonitorState] stopPlay: core is null, skipping", $);
        return;
      }
      return Se.stopPlay($);
    },
    getCursor: () => Se ? Se.getCursor() : (console.warn("[useLiveMonitorState] getCursor: core is null, returning empty string"), "0"),
    paginatedList: {
      pageData: pn,
      currentPage: bn,
      hasMore: yn,
      loading: En,
      nextPage: () => (Fe == null ? void 0 : Fe.nextPage()) ?? Promise.resolve(),
      prevPage: () => (Fe == null ? void 0 : Fe.prevPage()) ?? Promise.resolve(),
      goToFirstPage: () => (Fe == null ? void 0 : Fe.goToFirstPage()) ?? Promise.resolve(),
      refreshCurrentPage: () => (Fe == null ? void 0 : Fe.refreshCurrentPage()) ?? Promise.resolve()
    }
  };
}
export {
  bm as L,
  pm as _,
  gm as a,
  fm as b,
  mm as c,
  Ft as d,
  wr as e,
  rl as f,
  Cr as g,
  vm as l,
  Fa as u
};
