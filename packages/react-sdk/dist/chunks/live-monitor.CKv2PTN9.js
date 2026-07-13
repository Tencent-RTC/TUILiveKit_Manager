import { ref as I, onUnmounted as nt, defineComponent as Te, resolveComponent as ae, openBlock as y, createElementBlock as C, createElementVNode as c, toDisplayString as v, unref as t, createVNode as f, withCtx as E, createTextVNode as B, computed as P, watch as Me, normalizeClass as ye, onMounted as At, onBeforeUnmount as Ei, normalizeStyle as Be, Fragment as pe, renderList as Ne, createCommentVNode as ue, createBlock as se, withModifiers as gi, nextTick as tt, inject as Lo, renderSlot as vt, resolveDynamicComponent as ai, withDirectives as pi, vShow as Di, mergeProps as In, createSlots as _a, onErrorCaptured as xo, normalizeProps as No, shallowRef as Oi, h as Zt, vModelText as ko, Teleport as An, reactive as Ui, isRef as jn } from "vue";
import { useRouter as _i, useRoute as Do } from "vue-router";
import { SearchIcon as Mn, RefreshIcon as Tn, FullscreenIcon as wa, CloseIcon as Wi, SoundMuteIcon as Oo, SoundIcon as Uo, NotificationIcon as Ca, StopCircleIcon as Ia, UploadIcon as Xn, ImageIcon as $o, CutIcon as Po, ChevronDownIcon as $i, ChevronRightIcon as Aa, AddIcon as Sn, CopyIcon as Dt, DeleteIcon as Fo, EditIcon as Pi, InfoCircleIcon as Nt, LoginIcon as Vo, CheckCircleIcon as Hi, ChatOffIcon as Ma, UserCheckedIcon as Ta, UserBlockedIcon as Sa, MoreIcon as zo, CloseCircleIcon as Go, AdjustmentIcon as Bo } from "tdesign-icons-vue-next";
import { MessagePlugin as Y, Tooltip as Ct } from "tdesign-vue-next";
import { useUIKit as ke, i18next as Fi } from "@tencentcloud/uikit-base-component-vue3";
import { w as Wo, aE as Ho, aG as Yo, c0 as jo, co as Xo, cp as Ko, u as qo, m as Zo, a9 as Qo, a2 as Jo, b1 as es, bc as ts, aT as te, N as bi, a_ as is, b$ as ns, b as as, b8 as os, bQ as dn, bR as hn, _ as ss, bj as Ra, bm as ls, a1 as rs, bB as Kn, cj as cs, cd as qn, bK as Zn, bD as us, ch as ds, cg as hs, cf as vs, bL as ms, ax as fs, bA as gs, bC as ps, aD as bs, a0 as ys, ar as Qn, bi as Es, aU as _s, A as Wt, O as bt, i as Ke, br as ti, ap as La, bS as xa, x as Vi, a4 as ws, c3 as Cs, as as Jn, Z as ea, aB as Is, ay as ta, ce as As, aj as Ms, aW as Ts, R as Ss, aX as Na, b6 as Rs, bu as ia, aM as Ls, a6 as xs, a as Ot, bJ as Ns, bg as xi, b_ as ks, a8 as Ds, aH as Os, aQ as Us, bM as na, bw as aa, aZ as gt, k as $s, D as Ps, v as Fs, bt as oa, s as sa, aP as Vs, b4 as ka, b2 as ii, b5 as Da, q as Ht, r as Je, o as et, p as hi, z as Oa, F as Ut, bT as zs, t as Gs, T as nn, d as vi, f as st, C as lt, S as Bs, aF as Ws } from "./main-layout.C189rq73.js";
import { c as Hs, s as vn, D as Ys, a as js, m as Xs, b as Ks, d as qs, e as Zs, i as Qs, P as Js } from "./gift-category.DaeXtH9F.js";
import { I as r, E as an, F as Rn, x as el, A as tl, z as il, g as Yi, ae as nl, V as oi, R as Ua, m as al } from "./en-US.CUtDSN-4.js";
import { LiveView as ol, useLoginState as $a, useLiveAudienceState as Pa, LiveAudienceList as sl, useLiveListState as ll } from "tuikit-atomicx-vue3";
import { BarrageList as rl } from "tuikit-atomicx-vue3/live";
let ni = null;
function cl() {
  return ni || (ni = new Wo({
    onStateChange: (e) => {
      zi && (zi.value = e.giftList), Gi && (Gi.value = e.giftCategoryList);
    }
  })), ni;
}
let zi = null, Gi = null;
function Fa() {
  const e = I([]), n = I([]);
  zi = e, Gi = n;
  const i = cl();
  return e.value = i.getGiftList(), n.value = i.getGiftCategoryList(), nt(() => {
    ni && (ni.destroy(), ni = null, zi = null, Gi = null);
  }), {
    giftList: e,
    giftCategoryList: n,
    fetchGiftList: async (G) => i.fetchGiftList(G),
    createGift: async (G) => i.createGift(G),
    updateGift: async (G) => i.updateGift(G),
    deleteGift: async (G) => i.deleteGift(G),
    createGiftCategory: async (G) => i.createGiftCategory(G),
    updateGiftCategory: async (G) => i.updateGiftCategory(G),
    deleteGiftCategory: async (G) => i.deleteGiftCategory(G),
    addGiftCategoryRelations: async (G) => i.addGiftCategoryRelations(G),
    deleteGiftCategoryRelations: async (G) => i.deleteGiftCategoryRelations(G),
    getGiftLanguage: async (G) => i.getGiftLanguage(G),
    setGiftLanguage: async (G) => i.setGiftLanguage(G),
    deleteGiftLanguage: async (G) => i.deleteGiftLanguage(G),
    getGiftCategoryLanguage: async (G, K) => i.getGiftCategoryLanguage(G, K),
    setGiftCategoryLanguage: async (G, K, q, Q) => i.setGiftCategoryLanguage(G, K, q, Q),
    deleteGiftCategoryLanguage: async (G, K) => i.deleteGiftCategoryLanguage(G, K)
  };
}
function ul(e) {
  const { liveId: n, pageSize: i } = e, s = I(!1), o = I(0), a = I([]), l = I(0), d = I(1), u = I(!1), g = I([]), m = I([]), h = I(!1), p = I(null);
  let b = !0;
  nt(() => {
    b = !1;
  });
  const R = async () => {
    try {
      const W = await ts();
      return b && (s.value = W > 0, o.value = W), W;
    } catch (W) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", W), W;
    }
  }, M = async (W = {}) => {
    u.value = !0;
    try {
      const O = await es({ pageSize: i, liveId: n, ...W });
      return b && (a.value = O.list || [], l.value = O.total || 0, d.value = W.pageNum || 1), O;
    } catch (O) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", O), O;
    } finally {
      b && (u.value = !1);
    }
  }, T = async (W) => {
    try {
      const O = W.items ?? (() => {
        const U = a.value;
        return W.ids.map((D) => {
          const L = U.find((F) => F.id === D);
          return {
            id: D,
            content: (L == null ? void 0 : L.content) ?? D,
            userId: (L == null ? void 0 : L.userId) ?? ""
          };
        });
      })();
      await Jo({ ids: W.ids, items: O, liveId: W.liveId ?? n });
    } catch (O) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", O), O;
    }
  }, ie = async (W) => {
    try {
      await Qo({ content: W.keywords.join(","), liveId: n });
    } catch (O) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", O), O;
    }
  }, G = async () => {
    if (!n) return [];
    try {
      const W = await Yo(n);
      return g.value = W, W;
    } catch (W) {
      throw p.value = W, W;
    }
  }, K = async () => {
    if (!n) return [];
    try {
      const W = await Ho(n);
      return m.value = W, W;
    } catch (W) {
      throw p.value = W, W;
    }
  };
  return {
    textModerationAvailable: s,
    textModerationRemainUsage: o,
    textModerationList: a,
    textModerationTotal: l,
    textModerationPageNum: d,
    textModerationLoading: u,
    fetchTextModerationUsage: R,
    fetchTextModerationList: M,
    approveTextModerationItems: T,
    bypassCorrectionKeyword: ie,
    muteMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, p.value = null;
      try {
        await Zo(n, W.memberAccounts, W.muteTime), await G();
      } catch (O) {
        throw p.value = O, console.error("[useRiskControlState] muteMember failed:", O), O;
      } finally {
        h.value = !1;
      }
    },
    unmuteMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, p.value = null;
      try {
        await qo(n, W.memberAccounts), await G();
      } catch (O) {
        throw p.value = O, console.error("[useRiskControlState] unmuteMember failed:", O), O;
      } finally {
        h.value = !1;
      }
    },
    banMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, p.value = null;
      try {
        await Ko(n, W.memberAccounts, W.duration, W.reason), await K();
      } catch (O) {
        throw p.value = O, console.error("[useRiskControlState] banMember failed:", O), O;
      } finally {
        h.value = !1;
      }
    },
    unbanMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, p.value = null;
      try {
        await Xo(n, W.memberAccounts), await K();
      } catch (O) {
        throw p.value = O, console.error("[useRiskControlState] unbanMember failed:", O), O;
      } finally {
        h.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!n) throw new Error("liveId is required");
      try {
        return await jo(n, "default", "您的内容涉嫌违规");
      } catch (W) {
        throw console.error("[useRiskControlState] sendViolationWarning failed:", W), W;
      }
    },
    mutedList: g,
    bannedList: m,
    memberLoading: h,
    memberError: p,
    fetchMutedList: G,
    fetchBannedList: K
  };
}
const dl = { class: "monitor-header" }, hl = { class: "monitor-title-section" }, vl = { class: "monitor-title" }, ml = { class: "monitor-header-actions" }, fl = /* @__PURE__ */ Te({
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
    return (u, g) => {
      const m = ae("t-input"), h = ae("t-button");
      return y(), C("div", dl, [
        c("div", hl, [
          c("h2", vl, v(t(s)(t(r).LIVE_MONITOR)), 1)
        ]),
        c("div", ml, [
          f(m, {
            "model-value": e.searchInput,
            placeholder: t(s)(t(r).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            status: t(te)(e.searchInput) > t(bi) ? "error" : "default",
            tips: t(te)(e.searchInput) > t(bi) ? t(s)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": o,
            onEnter: a,
            onClear: l
          }, {
            "suffix-icon": E(() => [
              f(t(Mn), {
                style: { cursor: "pointer" },
                onClick: g[0] || (g[0] = () => a())
              })
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "status", "tips"]),
          f(h, {
            theme: "primary",
            variant: "outline",
            shape: "round",
            loading: e.refreshing,
            onClick: d
          }, {
            icon: E(() => [
              f(t(Tn))
            ]),
            default: E(() => [
              B(" " + v(t(s)(t(r).REFRESH)), 1)
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
}, gl = /* @__PURE__ */ ci(fl, [["__scopeId", "data-v-85dc322f"]]), pl = ["title", "aria-label"], bl = ["src", "alt"], yl = {
  key: 1,
  class: "avatar-fallback"
}, ji = /* @__PURE__ */ Te({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(e) {
    const n = e, i = I(""), s = I(!1), o = P(() => n.name ? `${n.name}头像` : "主播头像"), a = P(() => is(n.name));
    Me(() => n.src, (d) => {
      i.value = d || an, s.value = !1;
    }, { immediate: !0 });
    const l = () => {
      if (i.value !== an) {
        i.value = an;
        return;
      }
      s.value = !0;
    };
    return (d, u) => (y(), C("div", {
      class: ye(e.className),
      title: e.title,
      "aria-label": o.value
    }, [
      i.value && !s.value ? (y(), C("img", {
        key: 0,
        src: i.value,
        alt: o.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: l
      }, null, 40, bl)) : (y(), C("span", yl, v(a.value), 1))
    ], 10, pl));
  }
}), El = ["id"], _l = ["id"], wl = ["title"], Cl = {
  key: 0,
  class: "tag-more-wrapper"
}, Il = { class: "live-card-tag-dropdown" }, Al = { class: "overlay-btn primary" }, Ml = { class: "live-card-info" }, Tl = ["title"], Sl = { class: "live-card-meta" }, Rl = { class: "live-card-anchor" }, Ll = ["title"], xl = ["title"], Nl = /* @__PURE__ */ Te({
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
    const i = e, s = n, { t: o } = ke(), { startPlay: a, stopPlay: l } = Pt(), d = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, u = I(!1), g = I("");
    let m = 0;
    const h = P(() => i.isFullscreen && i.fullscreenLiveId === i.card.liveId), p = P(() => i.card.tags.slice(0, i.adaptiveResult.visibleCount)), b = P(() => i.card.tags.slice(i.adaptiveResult.visibleCount)), R = P(() => {
      var O;
      return ((O = i.card.stats) == null ? void 0 : O.viewCount) ?? 0;
    }), M = P(() => `live_monitor_view_${i.card.liveId}`), T = async () => {
      const O = i.card.liveId;
      if (console.log("[LiveCard] startCardPlay called", { liveId: O, isMockMode: d }), d || !O) {
        console.log("[LiveCard] Skipping play", { isMockMode: d, liveId: O });
        return;
      }
      const U = ++m;
      if (await tt(), U !== m) {
        console.log("[LiveCard] Version mismatch, aborting", { currentVersion: U, playVersion: m });
        return;
      }
      try {
        console.log("[LiveCard] Calling startPlay", { liveId: O, containerId: M.value }), await a({ liveId: O, containerId: M.value }), U === m && (g.value = O, console.log("[LiveCard] startPlay success", { liveId: O }));
      } catch (D) {
        console.error("[LiveCard] startPlay failed", { liveId: O, error: D }), U === m && s("playError", D, O);
      }
    }, ie = async (O = g.value || i.card.liveId) => {
      m += 1, !(d || !O) && (g.value === O && (g.value = ""), await l(O).catch(() => {
      }));
    };
    At(() => {
      T();
    }), Me(
      () => i.card.liveId,
      async (O, U) => {
        U && U !== O && await ie(U), T();
      }
    ), Ei(() => {
      ie();
    });
    const G = () => {
      u.value = !0, s("hover", i.card.liveId);
    }, K = () => {
      u.value = !1, s("hover", null);
    }, q = () => {
      console.log("[LiveCard] handleViewDetails called, liveId:", i.card.liveId), s("viewDetails", i.card.liveId);
    }, Q = (O) => {
      console.log("[LiveCard] handleCardClick called");
      const U = O.target;
      !U.closest(".live-card-actions") && !U.closest(".fullscreen-close") && !U.closest(".fullscreen-mute") && (console.log("[LiveCard] emitting viewDetails from handleCardClick, liveId:", i.card.liveId), s("viewDetails", i.card.liveId));
    }, le = () => {
      s("violationWarning", i.card.liveId, i.card.liveName || o(r.UNNAMED_LIVE));
    }, he = () => {
      s("forceStop", i.card.liveId, i.card.liveName || o(r.UNNAMED_LIVE));
    }, Ee = () => {
      s("toggleMute", i.card.liveId);
    }, W = () => {
      s("exitFullscreen");
    };
    return (O, U) => {
      const D = ae("t-button");
      return y(), C("div", {
        class: ye(["live-card", { hovered: u.value }]),
        onMouseenter: G,
        onMouseleave: K,
        onClick: Q
      }, [
        c("div", {
          id: e.card.liveId,
          class: "live-video-container"
        }, [
          c("div", {
            class: "live-video-bg",
            style: Be({
              backgroundImage: `url(${e.card.backgroundUrl || e.card.coverUrl || t(Rn)})`
            })
          }, null, 4),
          c("div", {
            id: M.value,
            class: "live-video-player"
          }, null, 8, _l),
          c("div", {
            class: "live-id-badge",
            style: Be({ maxWidth: e.adaptiveResult.idMaxWidth })
          }, [
            c("span", {
              title: e.card.liveId
            }, v(`${t(o)(t(r).LIVE_ID)}: ${e.card.liveId}`), 9, wl)
          ], 4),
          e.card.tags && e.card.tags.length > 0 ? (y(), C("div", {
            key: 0,
            class: "live-card-tags-overlay",
            style: Be({ maxWidth: e.adaptiveResult.tagsMaxWidth })
          }, [
            (y(!0), C(pe, null, Ne(p.value, (L) => (y(), C("span", {
              key: L,
              class: "live-card-tag-overlay"
            }, [
              U[0] || (U[0] = c("svg", {
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
              B(" " + v(t(o)(L)), 1)
            ]))), 128)),
            e.adaptiveResult.showMore ? (y(), C("div", Cl, [
              U[2] || (U[2] = c("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              c("div", Il, [
                (y(!0), C(pe, null, Ne(b.value, (L) => (y(), C("span", {
                  key: L,
                  class: "live-card-tag-overlay"
                }, [
                  U[1] || (U[1] = c("svg", {
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
                  B(" " + v(t(o)(L)), 1)
                ]))), 128))
              ])
            ])) : ue("", !0)
          ], 4)) : ue("", !0),
          c("div", {
            class: "live-video-overlay",
            onClick: q
          }, [
            c("div", Al, [
              f(t(wa)),
              B(" " + v(t(o)(t(r).VIEW_DETAILS)), 1)
            ])
          ]),
          h.value ? (y(), C(pe, { key: 1 }, [
            c("button", {
              class: "fullscreen-close",
              onClick: W
            }, [
              f(t(Wi))
            ]),
            c("button", {
              class: "fullscreen-mute",
              onClick: Ee
            }, [
              e.isMuted ? (y(), se(t(Oo), { key: 0 })) : (y(), se(t(Uo), { key: 1 }))
            ])
          ], 64)) : ue("", !0)
        ], 8, El),
        c("div", Ml, [
          c("div", {
            class: "live-card-title",
            title: e.card.liveName || t(o)(t(r).UNNAMED_LIVE)
          }, v(e.card.liveName || t(o)(t(r).UNNAMED_LIVE)), 9, Tl),
          c("div", Sl, [
            c("div", Rl, [
              f(ji, {
                "class-name": "anchor-avatar",
                src: e.anchorAvatar,
                name: e.anchorName,
                title: e.anchorName
              }, null, 8, ["src", "name", "title"]),
              c("span", {
                class: "anchor-name",
                title: e.anchorName
              }, v(e.anchorName), 9, Ll)
            ]),
            c("span", {
              class: "meta-viewer-count",
              title: String(R.value)
            }, v(`${R.value}${t(o)(t(r).VIEWS)}`), 9, xl)
          ])
        ]),
        c("div", {
          class: ye(["live-card-actions", { show: u.value }])
        }, [
          f(D, {
            class: "action-btn warn",
            variant: "text",
            onClick: gi(le, ["stop"])
          }, {
            icon: E(() => [
              f(t(Ca))
            ]),
            default: E(() => [
              c("span", null, v(t(o)(t(r).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          f(D, {
            class: "action-btn close full",
            variant: "text",
            onClick: gi(he, ["stop"])
          }, {
            icon: E(() => [
              f(t(Ia))
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
}), kl = { class: "live-monitor-pagination" }, Dl = { class: "page-info" }, Ol = /* @__PURE__ */ Te({
  __name: "MonitorPagination",
  props: {
    currentPage: {},
    hasMoreData: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["goToFirstPage", "prevPage", "nextPage"],
  setup(e, { emit: n }) {
    const i = e, s = n, { t: o } = ke(), a = P(() => o(r.PAGE, { page: i.currentPage })), l = () => s("goToFirstPage"), d = () => s("prevPage"), u = () => s("nextPage");
    return (g, m) => {
      const h = ae("t-button");
      return y(), C("div", kl, [
        f(h, {
          variant: "outline",
          size: "small",
          disabled: e.currentPage <= 1 || e.loading,
          onClick: l
        }, {
          default: E(() => [
            B(v(t(o)(t(r).FIRST_PAGE)), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        f(h, {
          variant: "outline",
          size: "small",
          disabled: e.currentPage <= 1 || e.loading,
          onClick: d
        }, {
          default: E(() => [
            B(v(t(o)(t(r).PREVIOUS_PAGE)), 1)
          ]),
          _: 1
        }, 8, ["disabled"]),
        c("span", Dl, v(a.value), 1),
        f(h, {
          variant: "outline",
          size: "small",
          disabled: !e.hasMoreData || e.loading,
          onClick: u
        }, {
          default: E(() => [
            B(v(t(o)(t(r).NEXT_PAGE)), 1)
          ]),
          _: 1
        }, 8, ["disabled"])
      ]);
    };
  }
}), Va = /* @__PURE__ */ Te({
  __name: "ViolationWarningDialog",
  props: {
    visible: { type: Boolean },
    liveId: { default: "" },
    liveName: { default: "" }
  },
  emits: ["update:visible", "confirm", "cancel"],
  setup(e, { emit: n }) {
    const i = e, s = n, { t: o } = ke(), a = I(!1), l = () => {
      a.value = !1, s("update:visible", !1);
    }, d = async () => {
      if (!(a.value || !i.liveId)) {
        a.value = !0;
        try {
          await ns(i.liveId, {
            violationType: "warning",
            violationContent: `直播间 "${i.liveName || i.liveId}" 收到违规警告，请立即整改`,
            handleSuggestion: "请遵守平台规则，删除违规内容"
          }), Y.success(o(r.VIOLATION_WARNING_SENT)), s("confirm", { liveId: i.liveId, liveName: i.liveName }), l();
        } catch (g) {
          console.error("发送违规警告失败:", g), Y.error(o(r.SEND_FAILED)), a.value = !1;
        }
      }
    }, u = () => {
      a.value || (s("cancel"), l());
    };
    return (g, m) => {
      const h = ae("t-dialog");
      return y(), se(h, {
        visible: e.visible,
        header: t(o)(t(r).VIOLATION_WARNING_SEND_CONFIRM),
        "confirm-btn": {
          content: a.value ? t(o)(t(r).SENDING) : t(o)(t(r).CONFIRM),
          loading: a.value,
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
function Ul(e, n) {
  const i = I(/* @__PURE__ */ new Map()), s = new as({
    containerSelector: ".live-monitor-grid",
    t: n
  }), o = () => {
    i.value = new Map(s.getCache());
  }, a = (m) => {
    const h = s.getResult(m);
    return s.cache.has(m) || tt(() => {
      const p = e(), b = p == null ? void 0 : p.find((R) => R.liveId === m);
      b && b.tags && (s.compute(m, { liveId: m, tags: b.tags }), o());
    }), h;
  };
  return {
    adaptiveTagMap: i,
    getAdaptiveResult: a,
    getVisibleTags: (m, h) => {
      const p = a(h);
      return m.slice(0, p.visibleCount);
    },
    initResizeObserver: () => {
      s.observe(() => {
        o();
      });
    },
    cleanupResizeObserver: () => {
      s.disconnect();
    },
    initAdaptiveTags: (m) => {
      s.initForList(
        m.map((h) => ({
          liveId: String(h.liveId ?? ""),
          tags: Array.isArray(h.tags) ? h.tags : []
        }))
      ), o();
    }
  };
}
const $l = 600 * 1e3;
function Pl(e, n) {
  const { t: i } = ke(), { stopPlay: s } = n, o = I(!1), a = I(!1), l = I(!1), d = I(!1), u = I(""), g = I(/* @__PURE__ */ new Map());
  let m = null, h = "";
  const p = I(/* @__PURE__ */ new Map()), b = I(/* @__PURE__ */ new Set()), R = I(!1);
  Me(
    () => e.pageData.value,
    async (N) => {
      if (!N || N.length === 0) return;
      const S = N.map((w) => {
        var ee, ce;
        return ((ee = w.anchor) == null ? void 0 : ee.userId) || ((ce = w.anchor) == null ? void 0 : ce.id) || "";
      }).filter(Boolean);
      if (S.length === 0) return;
      const k = S.filter((w) => !p.value.has(w));
      if (k.length !== 0)
        try {
          const w = await el(k);
          if (R.value) return;
          const ee = new Map(p.value);
          w.forEach((ce, de) => {
            ee.set(de, ce);
          }), p.value = ee;
        } catch (w) {
          console.error("[useLiveMonitorData] Failed to fetch user profiles:", w);
        }
    },
    { immediate: !0 }
  );
  const M = () => {
    m && (clearTimeout(m), m = null);
  }, T = (...N) => {
    const S = [];
    for (const k of N)
      for (const w of k || [])
        w && !S.includes(w) && S.push(w);
    return S;
  }, ie = (N) => String(N.liveId || N.id || N.RoomId || ""), G = () => {
    const N = /* @__PURE__ */ new Date(), S = new Date(N.getTime() - 3600 * 1e3), k = (w) => {
      const ee = w.getFullYear(), ce = String(w.getMonth() + 1).padStart(2, "0"), de = String(w.getDate()).padStart(2, "0"), _e = String(w.getHours()).padStart(2, "0"), $ = String(w.getMinutes()).padStart(2, "0"), j = String(w.getSeconds()).padStart(2, "0");
      return `${ee}-${ce}-${de} ${_e}:${$}:${j}`;
    };
    return {
      startTime: k(S),
      endTime: k(N)
    };
  }, K = async (N, S) => {
    const k = Array.from(new Set(N.slice(0, 8).map((w) => w.liveId).filter(Boolean)));
    if (!(k.length === 0 || d.value)) {
      M(), h = S;
      try {
        const { startTime: w, endTime: ee } = G(), ce = await os(k, 10, w, ee);
        if (R.value || h !== S) return;
        const de = new Map(g.value);
        k.forEach((_e) => {
          de.set(_e, ce.get(_e) || []);
        }), g.value = de;
      } catch (w) {
        console.warn("[LiveMonitor] 获取直播间违规标签失败:", w);
      } finally {
        !R.value && h === S && !d.value && (m = setTimeout(() => {
          K(N, S);
        }, $l));
      }
    }
  };
  Me(
    () => [...e.pageData.value || []].map((N) => [N.liveId, N.liveName, N.activityStatus].join(":")).join("|"),
    (N, S) => {
      if (!N || R.value || d.value) return;
      const k = e.pageData.value || [];
      if (k.length === 0) return;
      const w = `${e.currentPage.value}:${N}`;
      K(k, w);
    }
  ), Me(
    () => {
      var N;
      return [e.loading.value, (N = e.pageData.value) == null ? void 0 : N.length];
    },
    ([N, S]) => {
      N || (o.value = (S || 0) > 0);
    },
    { immediate: !0 }
  );
  const q = async (N, S, k) => {
    !S && k <= 1 && N > 1 ? await e.prevPage() : await e.refreshCurrentPage();
  }, Q = async () => {
    const N = Array.from(b.value);
    b.value.clear(), N.length > 0 && await Promise.all(
      N.map(
        (S) => s(S).catch((k) => {
          console.error("停止直播预览失败:", S, k);
        })
      )
    );
  }, le = async () => {
    await Q(), await e.prevPage();
    const N = e.pageData.value || [];
    b.value = new Set(N.map((S) => S.liveId));
  }, he = async () => {
    await Q(), await e.nextPage();
    const N = e.pageData.value || [];
    b.value = new Set(N.map((S) => S.liveId));
  }, Ee = async () => {
    await Q(), await e.goToFirstPage();
    const N = e.pageData.value || [];
    b.value = new Set(N.map((S) => S.liveId));
  }, W = async (N) => {
    var w;
    const S = String(N ?? u.value).trim();
    if (!S) return;
    if (te(S) > bi) {
      Y.error(i(r.INPUT_TOO_LONG));
      return;
    }
    u.value !== S && (u.value = S);
    const k = S;
    M(), a.value = !0;
    try {
      const { fetchLiveDetail: ee } = Pt(), ce = await ee(k);
      if (R.value) return;
      if (!ce) {
        Y.error(i("No search results for", { keyword: S })), await O();
        return;
      }
      d.value = !0;
      const de = ce.liveId;
      if (b.value.add(de), R.value) {
        await s(de);
        return;
      }
      Y.success(r.SEARCH_SUCCESS);
    } catch (ee) {
      console.error("搜索直播间失败:", ee);
      const ce = ee;
      if (ee === 2025 || ee === 70005 || typeof ce != "number" && ((w = ce.message) != null && w.includes("USER_SIG_ILLEGAL"))) {
        tl(), il(), localStorage.removeItem("tuiLiveMonitor-userInfo"), require("vue-router").useRouter().push("/config-required");
        return;
      }
      Y.error(i("No search results for", { keyword: S })), await O();
    } finally {
      R.value || (a.value = !1);
    }
  }, O = async () => {
    u.value = "", d.value = !1, await Q(), await e.goToFirstPage();
  }, U = async () => {
    if (!(l.value || e.loading.value)) {
      l.value = !0;
      try {
        d.value && (d.value = !1, u.value = ""), await Q(), await e.refreshCurrentPage();
      } catch (N) {
        console.error("刷新失败:", N);
        const S = N, k = S.ErrorInfo || S.errorInfo || "";
        Y.error(`${i(r.REFRESH_FAILED)}${k ? ` (${k})` : ""}`);
      } finally {
        R.value || (l.value = !1);
      }
    }
  }, D = I(e.currentPage.value), L = I(e.hasMore.value), F = I(e.loading.value);
  return Me(() => e.loading.value, (N) => {
    console.log("[useLiveMonitorData] loading changed:", N), F.value = N;
  }, { immediate: !0 }), Me(() => e.currentPage.value, (N) => {
    D.value = N;
  }, { immediate: !0 }), Me(() => e.hasMore.value, (N) => {
    L.value = N;
  }, { immediate: !0 }), nt(() => {
    R.value = !0, M(), Q();
  }), {
    // 分页状态（响应式 computed）
    currentPage: D,
    hasMoreData: L,
    loading: F,
    // 业务状态
    hasLiveData: o,
    searching: a,
    refreshing: l,
    isSearchMode: d,
    searchInput: u,
    liveViolationLabelMap: g,
    userProfileMap: p,
    playingLiveIds: b,
    isUnmounted: R,
    // 方法
    handlePrevPage: le,
    handleNextPage: he,
    handleGoToFirstPage: Ee,
    handleSearch: W,
    handleClearSearch: O,
    handleRefresh: U,
    stopAllPlayingLives: Q,
    handleCloseLiveSuccess: q,
    mergeTags: T,
    resolveLiveId: ie
  };
}
const Fl = { class: "live-monitor-page" }, Vl = { class: "live-monitor-grid" }, zl = {
  key: 0,
  class: "monitor-loading"
}, Gl = {
  key: 1,
  class: "monitor-empty"
}, Bl = { class: "empty-icon" }, Wl = { style: { display: "none" } }, Hl = /* @__PURE__ */ Te({
  __name: "live-monitor",
  setup(e) {
    var ze;
    const n = _i(), { t: i } = ke();
    (ze = Yi().components) == null || ze.liveMonitor;
    const s = (ne) => {
      var Oe, x;
      const ve = ((Oe = ne.anchor) == null ? void 0 : Oe.userId) || "";
      if (ve && D.value) {
        const J = D.value.get(ve) || D.value.get(ve.toLowerCase());
        if (J != null && J.avatarUrl)
          return J.avatarUrl;
      }
      return ((x = ne.anchor) == null ? void 0 : x.avatarUrl) || ne.avatarUrl || dn(ne);
    }, o = (ne) => {
      var Oe, x;
      const ve = ((Oe = ne.anchor) == null ? void 0 : Oe.userId) || "";
      if (ve && D.value) {
        const J = D.value.get(ve) || D.value.get(ve.toLowerCase());
        if (J != null && J.nick)
          return J.nick;
      }
      return ((x = ne.anchor) == null ? void 0 : x.nick) || hn(ne, i(r.UNKNOWN_HOST));
    }, { init: a, liveList: l, endLive: d, stopPlay: u, paginatedList: g } = Pt(), m = Lo("sdkReady", null), h = I(!1), p = I(""), b = I(null), R = I(0), M = I({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), T = I({
      visible: !1,
      liveId: "",
      liveName: ""
    }), {
      getAdaptiveResult: ie,
      initResizeObserver: G,
      cleanupResizeObserver: K,
      initAdaptiveTags: q
    } = Ul(() => j.value, i), {
      currentPage: Q,
      hasMoreData: le,
      loading: he,
      hasLiveData: Ee,
      refreshing: W,
      searchInput: O,
      liveViolationLabelMap: U,
      userProfileMap: D,
      playingLiveIds: L,
      isUnmounted: F,
      handlePrevPage: N,
      handleNextPage: S,
      handleGoToFirstPage: k,
      handleSearch: w,
      handleClearSearch: ee,
      handleRefresh: ce,
      stopAllPlayingLives: de,
      handleCloseLiveSuccess: _e,
      mergeTags: $
    } = Pl(
      g,
      { stopPlay: u }
    ), j = P(() => (l.value || []).map((ve) => {
      const Oe = ve.tags || [], x = $(Oe, U.value.get(ve.liveId));
      return {
        ...ve,
        tags: x
      };
    })), Se = P(
      () => (l.value || []).map((ne) => {
        var ve;
        return [
          ne.liveId,
          ne.liveName,
          ne.coverUrl,
          ne.onlineCount,
          (ve = ne.stats) == null ? void 0 : ve.viewCount,
          ne.popularity,
          ne.activityStatus,
          ne.createdAt
        ].join(":");
      }).join("|")
    );
    Me(Se, () => {
      R.value += 1;
    });
    const Re = (ne, ve) => {
      T.value = { visible: !0, liveId: ne, liveName: ve };
    }, $e = (ne, ve) => {
      M.value = { visible: !0, liveId: ne, liveName: ve, closing: !1 };
    }, De = async () => {
      const { liveId: ne } = M.value;
      if (ne) {
        M.value.closing = !0;
        try {
          await u(ne), L.value.delete(ne), await d(ne), M.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, Y.success(i(r.LIVE_FORCIBLY_CLOSED)), await _e(Q, le, (l.value || []).length);
        } catch (ve) {
          console.error("封禁房间失败:", ve), M.value.closing = !1;
        }
      }
    }, qe = () => {
      M.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, Xe = (ne) => {
      console.log("handleClickDetails called with liveId:", ne);
      try {
        sessionStorage.setItem("liveMonitor_currentPage", String(Q));
      } catch {
      }
      console.log("Navigating to:", `/live-control/${ne}`), n.push(`/live-control/${ne}`);
    }, me = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, ut = async () => {
      document.fullscreenElement ? h.value = !0 : (h.value = !1, p.value = "");
    }, fe = () => (ne) => ({
      id: `mock-player-${ne}`,
      on: () => {
      },
      off: () => {
      },
      play: async (ve, Oe) => {
        await tt();
        const x = document.getElementById(Oe);
        x && (x.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.78);font-size:14px;background:linear-gradient(135deg,rgba(15,52,96,.72),rgba(26,26,46,.72));">Mock Live</div>');
      },
      stop: async () => {
      },
      muteAudio: async () => {
      },
      destroy: async () => {
      },
      getPlayerInfo: () => ({ liveId: ne, state: "PLAYING" })
    }), Ze = async () => {
      try {
        const ne = await nl();
        if (ne && ne.sdkAppId !== 0)
          try {
            const Oe = Hs({
              sdkAppId: ne.sdkAppId,
              userId: ne.userId,
              userSig: ne.userSig
            });
            a({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: ne.sdkAppId,
                userId: ne.userId,
                password: ne.userSig
              },
              playerFactory: Oe
            }), console.log("[LiveMonitor] Calling goToFirstPage, sdkReady:", m, ", sdkReady?.value:", m == null ? void 0 : m.value), !m || m.value ? (console.log("[LiveMonitor] Condition met, calling goToFirstPage..."), await g.goToFirstPage(), console.log("[LiveMonitor] goToFirstPage done")) : console.log("[LiveMonitor] Condition NOT met, skipping goToFirstPage");
          } catch (ve) {
            console.error("[LiveMonitor] SDK init error:", ve);
          }
        else
          console.warn("[LiveMonitor] createBasicAccount failed or sdkAppId is 0:", ne);
      } catch (ne) {
        console.error("[LiveMonitor] initSDK outer error:", ne);
      }
    };
    return m && Me(() => m.value, (ne) => {
      ne && g.goToFirstPage();
    }), At(() => {
      document.addEventListener("fullscreenchange", ut), G(), q(j.value || []), Ze();
    }), nt(() => {
      F.value = !0, document.removeEventListener("fullscreenchange", ut), K(), de();
    }), (ne, ve) => {
      const Oe = ae("t-dialog");
      return y(), C("div", Fl, [
        f(gl, {
          "search-input": t(O),
          refreshing: t(W),
          "onUpdate:searchInput": ve[0] || (ve[0] = (x) => O.value = x),
          onSearch: t(w),
          onClearSearch: t(ee),
          onRefresh: t(ce)
        }, null, 8, ["search-input", "refreshing", "onSearch", "onClearSearch", "onRefresh"]),
        c("div", Vl, [
          t(he) ? (y(), C("div", zl, [
            ve[4] || (ve[4] = c("div", { class: "loading-spinner" }, null, -1)),
            c("span", null, v(t(i)(t(r).LOADING)), 1)
          ])) : t(Ee) ? (y(), C(pe, { key: 2 }, [
            c("div", Wl, "debug: liveList.length=" + v((t(l) || []).length) + ", mergedMonitorList.length=" + v(j.value.length) + ", hasLiveData=" + v(t(Ee)), 1),
            (y(!0), C(pe, null, Ne(j.value, (x) => (y(), se(Nl, {
              key: `${R.value}:${x.liveId}`,
              card: x,
              "adaptive-result": t(ie)(x.liveId),
              "is-muted": x.isMuted ?? !1,
              "is-fullscreen": h.value,
              "fullscreen-live-id": p.value,
              "anchor-avatar": s(x),
              "anchor-name": o(x),
              onViewDetails: Xe,
              onViolationWarning: Re,
              onForceStop: $e,
              onExitFullscreen: me,
              onHover: ve[1] || (ve[1] = (J) => b.value = J)
            }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]))), 128))
          ], 64)) : (y(), C("div", Gl, [
            c("div", Bl, [
              f(t(wa))
            ]),
            c("p", null, v(t(i)(t(r).NO_LIVE_RIGHT_NOW)), 1)
          ]))
        ]),
        f(Ol, {
          "current-page": t(Q),
          "has-more-data": t(le),
          loading: t(he),
          onGoToFirstPage: t(k),
          onPrevPage: t(N),
          onNextPage: t(S)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"]),
        f(Oe, {
          visible: M.value.visible,
          "onUpdate:visible": ve[2] || (ve[2] = (x) => M.value.visible = x),
          header: t(i)(t(r).CONFIRM_FORCE_STOP),
          "confirm-btn": { content: M.value.closing ? t(i)(t(r).CLOSING) : t(i)(t(r).CONFIRM_BAN_LIVE), loading: M.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: t(i)(t(r).CANCEL), disabled: M.value.closing, shape: "round" },
          onConfirm: De,
          onCancel: qe
        }, {
          default: E(() => [
            c("p", null, v(t(i)(t(r).FORCE_STOP_WARNING)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        f(Va, {
          visible: T.value.visible,
          "onUpdate:visible": ve[3] || (ve[3] = (x) => T.value.visible = x),
          "live-id": T.value.liveId,
          "live-name": T.value.liveName
        }, null, 8, ["visible", "live-id", "live-name"])
      ]);
    };
  }
}), fm = /* @__PURE__ */ ci(Hl, [["__scopeId", "data-v-f25b38b6"]]);
function la(e, n) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    n && (s = s.filter((function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    }))), i.push.apply(i, s);
  }
  return i;
}
function Ce(e) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? la(Object(i), !0).forEach((function(s) {
      rt(e, s, i[s]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : la(Object(i)).forEach((function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s));
    }));
  }
  return e;
}
function rt(e, n, i) {
  return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e;
}
function Yl(e, n) {
  if (e == null) return {};
  var i, s, o = (function(l, d) {
    if (l == null) return {};
    var u, g, m = {}, h = Object.keys(l);
    for (g = 0; g < h.length; g++) u = h[g], d.indexOf(u) >= 0 || (m[u] = l[u]);
    return m;
  })(e, n);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (s = 0; s < a.length; s++) i = a[s], n.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (o[i] = e[i]);
  }
  return o;
}
function Yt(e) {
  return (function(n) {
    if (Array.isArray(n)) return on(n);
  })(e) || (function(n) {
    if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
  })(e) || (function(n, i) {
    if (n) {
      if (typeof n == "string") return on(n, i);
      var s = Object.prototype.toString.call(n).slice(8, -1);
      if (s === "Object" && n.constructor && (s = n.constructor.name), s === "Map" || s === "Set") return Array.from(n);
      if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)) return on(n, i);
    }
  })(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function on(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var i = 0, s = new Array(n); i < n; i++) s[i] = e[i];
  return s;
}
var ra, jl, Ii, Ve = (ra = function(e) {
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
}, ra(Ii = { path: jl, exports: {}, require: function(e, n) {
  return (function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  })(n == null && Ii.path);
} }, Ii.exports), Ii.exports), mt = function(e) {
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
function mn(e, n, i) {
  var s, o, a, l, d;
  function u() {
    var m = Date.now() - l;
    m < n && m >= 0 ? s = setTimeout(u, n - m) : (s = null, i || (d = e.apply(a, o), a = o = null));
  }
  n == null && (n = 100);
  var g = function() {
    a = this, o = arguments, l = Date.now();
    var m = i && !s;
    return s || (s = setTimeout(u, n)), m && (d = e.apply(a, o), a = o = null), d;
  };
  return g.clear = function() {
    s && (clearTimeout(s), s = null);
  }, g.flush = function() {
    s && (d = e.apply(a, o), a = o = null, clearTimeout(s), s = null);
  }, g;
}
mn.debounce = mn;
var fn = mn, re = function() {
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
function za(e, n) {
  var i, s;
  return e && n ? (i = "" + e + n[0].toUpperCase() + n.slice(1), s = e + "-" + n) : (i = e || n, s = e || n), { name: i, classname: s };
}
function Ga(e) {
  return /^blob:/.test(e);
}
function ca(e) {
  return Ga(e) || (function(n) {
    return /^data:/.test(n);
  })(e);
}
function Qt(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function Ge(e) {
  return e === void 0;
}
function Ni(e) {
  return typeof e == "object" && e !== null;
}
function gn(e, n, i) {
  var s = {};
  return Ni(e) ? (Object.keys(n).forEach((function(o) {
    Ge(e[o]) ? s[o] = n[o] : Ni(n[o]) ? Ni(e[o]) ? s[o] = gn(e[o], n[o], i[o]) : s[o] = e[o] ? n[o] : i[o] : n[o] === !0 || n[o] === !1 ? s[o] = !!e[o] : s[o] = e[o];
  })), s) : e ? n : i;
}
function Ai(e) {
  var n = Number(e);
  return Number.isNaN(n) ? e : n;
}
function ua(e) {
  return typeof (e == "number" || /* @__PURE__ */ (function(n) {
    return typeof n == "object" && n !== null;
  })(e) && toString.call(e) == "[object Number]") && !Ba(e);
}
function Ba(e) {
  return e != e;
}
function Wa(e, n) {
  return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
}
var fi = function(e, n) {
  e === void 0 && (e = {}), n === void 0 && (n = {}), this.type = "manipulateImage", this.move = e, this.scale = n;
}, Xl = function(e, n) {
  n === void 0 && (n = {}), this.type = "resize", this.directions = e, this.params = n;
}, Ln = function(e) {
  this.type = "move", this.directions = e;
}, Kl = (function() {
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
})(), xn = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
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
      this.$emit("drag", new Kl(e, s, { left: i[0].clientX, top: i[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
xn.render = function(e, n, i, s, o, a) {
  return y(), se("div", { ref: "draggable", class: i.classname, onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onMouseover: n[3] || (n[3] = function() {
    return a.onMouseOver && a.onMouseOver.apply(a, arguments);
  }), onMouseleave: n[4] || (n[4] = function() {
    return a.onMouseLeave && a.onMouseLeave.apply(a, arguments);
  }) }, [vt(e.$slots, "default")], 34);
};
var sn = mt("vue-handler-wrapper"), Ha = { name: "HandlerWrapper", components: { DraggableElement: xn }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var n, i = za(this.horizontalPosition, this.verticalPosition);
    e = sn((rt(n = {}, i.classname, !0), rt(n, "disabled", this.disabled), n));
  } else e = sn({ disabled: this.disabled });
  return { root: e, draggable: sn("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ha.render = function(e, n, i, s, o, a) {
  var l = ae("DraggableElement");
  return y(), se("div", { class: a.classes.root }, [f(l, { class: a.classes.draggable, onDrag: n[1] || (n[1] = function(d) {
    return e.$emit("drag", d);
  }), onDragEnd: n[2] || (n[2] = function(d) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(d) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(d) {
    return e.$emit("enter");
  }) }, { default: E((function() {
    return [vt(e.$slots, "default")];
  })), _: 3 }, 8, ["class"])], 2);
};
var ql = mt("vue-line-wrapper"), Ya = { name: "LineWrapper", components: { DraggableElement: xn }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return ql((rt(e = {}, this.position, !0), rt(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ya.render = function(e, n, i, s, o, a) {
  var l = ae("DraggableElement");
  return y(), se(l, { class: a.classname, onDrag: n[1] || (n[1] = function(d) {
    return e.$emit("drag", d);
  }), onDragEnd: n[2] || (n[2] = function(d) {
    return e.$emit("drag-end");
  }), onLeave: n[3] || (n[3] = function(d) {
    return e.$emit("leave");
  }), onEnter: n[4] || (n[4] = function(d) {
    return e.$emit("enter");
  }) }, { default: E((function() {
    return [vt(e.$slots, "default")];
  })), _: 3 }, 8, ["class"]);
};
var yt = ["left", "right", "top", "bottom"], Zl = ["left", "right"], Ql = ["top", "bottom"], Jl = ["left", "top"], er = ["fill-area", "fit-area", "stencil", "none"], da = { left: 0, top: 0, width: 0, height: 0 };
function ha(e, n, i) {
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
function Ye(e) {
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
function Xi(e) {
  return { left: -e.left, top: -e.top };
}
function it(e, n) {
  return re(re({}, e), { left: e.left + n.left, top: e.top + n.top });
}
function ct(e, n, i, s) {
  if (n !== 1) {
    if (i) {
      var o = Ye(e);
      return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2 + (i.left - o.left) * (1 - n), top: e.top + e.height * (1 - n) / 2 + (i.top - o.top) * (1 - n) };
    }
    return { width: e.width * n, height: e.height * n, left: e.left + e.width * (1 - n) / 2, top: e.top + e.height * (1 - n) / 2 };
  }
  return e;
}
function Ie(e) {
  return e.width / e.height;
}
function li(e, n) {
  return Math.min(n.right !== void 0 && n.left !== void 0 ? (n.right - n.left) / e.width : 1 / 0, n.bottom !== void 0 && n.top !== void 0 ? (n.bottom - n.top) / e.height : 1 / 0);
}
function ri(e, n) {
  var i = { left: 0, top: 0 }, s = yi(e, n);
  return s.left && s.left > 0 ? i.left = s.left : s.right && s.right > 0 && (i.left = -s.right), s.top && s.top > 0 ? i.top = s.top : s.bottom && s.bottom > 0 && (i.top = -s.bottom), i;
}
function ln(e, n) {
  var i;
  return n.minimum && e < n.minimum ? i = n.minimum : n.maximum && e > n.maximum && (i = n.maximum), i;
}
function ja(e, n) {
  var i = Ie(e), s = Ie(n);
  return n.width < 1 / 0 && n.height < 1 / 0 ? i > s ? { width: n.width, height: n.width / i } : { width: n.height * i, height: n.height } : n.width < 1 / 0 ? { width: n.width, height: n.width / i } : n.height < 1 / 0 ? { width: n.height * i, height: n.height } : e;
}
function Xa(e, n) {
  var i = n * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(i)) + Math.abs(e.height * Math.sin(i)), height: Math.abs(e.width * Math.sin(i)) + Math.abs(e.height * Math.cos(i)) };
}
function kt(e, n) {
  var i = n * Math.PI / 180;
  return { left: e.left * Math.cos(i) - e.top * Math.sin(i), top: e.left * Math.sin(i) + e.top * Math.cos(i) };
}
function Ki(e, n) {
  var i = yi(je(e, n), n);
  return i.left + i.right + i.top + i.bottom ? i.left + i.right > i.top + i.bottom ? Math.min((e.width + i.left + i.right) / e.width, li(e, n)) : Math.min((e.height + i.top + i.bottom) / e.height, li(e, n)) : 1;
}
function je(e, n, i) {
  i === void 0 && (i = !1);
  var s = ri(e, n);
  return it(e, i ? Xi(s) : s);
}
function pn(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function tr(e, n) {
  return re(re({}, e), { minWidth: Math.min(n.width, e.minWidth), minHeight: Math.min(n.height, e.minHeight), maxWidth: Math.min(n.width, e.maxWidth), maxHeight: Math.min(n.height, e.maxHeight) });
}
function Ka(e, n, i) {
  i === void 0 && (i = !0);
  var s = {};
  return yt.forEach((function(o) {
    var a = e[o], l = n[o];
    a !== void 0 && l !== void 0 ? s[o] = o === "left" || o === "top" ? i ? Math.max(a, l) : Math.min(a, l) : i ? Math.min(a, l) : Math.max(a, l) : l !== void 0 ? s[o] = l : a !== void 0 && (s[o] = a);
  })), s;
}
function qi(e, n) {
  return Ka(e, n, !0);
}
function va(e) {
  var n = e.size, i = e.aspectRatio, s = e.ignoreMinimum, o = e.sizeRestrictions;
  return !!((n.correctRatio || Ie(n) >= i.minimum && Ie(n) <= i.maximum) && n.height <= o.maxHeight && n.width <= o.maxWidth && n.width && n.height && (s || n.height >= o.minHeight && n.width >= o.minWidth));
}
function ma(e, n) {
  return Math.pow(e.width - n.width, 2) + Math.pow(e.height - n.height, 2);
}
function It(e) {
  var n = e.width, i = e.height, s = e.sizeRestrictions, o = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, a = { width: Math.max(s.minWidth, Math.min(s.maxWidth, n)), height: Math.max(s.minHeight, Math.min(s.maxHeight, i)) };
  function l(g, m) {
    return m === void 0 && (m = !1), g.reduce((function(h, p) {
      return va({ size: p, aspectRatio: o, sizeRestrictions: s, ignoreMinimum: m }) && (!h || ma(p, { width: n, height: i }) < ma(h, { width: n, height: i })) ? p : h;
    }), null);
  }
  var d = [];
  o && [o.minimum, o.maximum].forEach((function(g) {
    g && d.push({ width: a.width, height: a.width / g, correctRatio: !0 }, { width: a.height * g, height: a.height, correctRatio: !0 });
  })), va({ size: a, aspectRatio: o, sizeRestrictions: s }) && d.push(a);
  var u = l(d) || l(d, !0);
  return u && { width: u.width, height: u.height };
}
function bn(e) {
  var n = e.event, i = e.coordinates, s = e.positionRestrictions, o = s === void 0 ? {} : s, a = it(i, n.directions);
  return it(a, ri(a, o));
}
function ir(e) {
  var n = e.coordinates, i = e.transform, s = e.imageSize, o = e.sizeRestrictions, a = e.positionRestrictions, l = e.aspectRatio, d = e.visibleArea, u = function(m, h) {
    return bn({ coordinates: m, positionRestrictions: a, event: new Ln({ left: h.left - m.left, top: h.top - m.top }) });
  }, g = re({}, n);
  return (Array.isArray(i) ? i : [i]).forEach((function(m) {
    var h = {};
    Ge((h = typeof m == "function" ? m({ coordinates: g, imageSize: s, visibleArea: d }) : m).width) && Ge(h.height) || (g = (function(p, b) {
      var R = re(re(re({}, p), It({ width: b.width, height: b.height, sizeRestrictions: o, aspectRatio: l })), { left: 0, top: 0 });
      return u(R, { left: p.left, top: p.top });
    })(g, re(re({}, g), h))), Ge(h.left) && Ge(h.top) || (g = u(g, re(re({}, g), h)));
  })), g;
}
function nr(e) {
  e.event;
  var n = e.getAreaRestrictions, i = e.boundaries, s = e.coordinates, o = e.visibleArea;
  e.aspectRatio;
  var a = e.stencilSize, l = e.sizeRestrictions, d = e.positionRestrictions;
  e.stencilReference;
  var u, g, m, h = re({}, s), p = re({}, o), b = re({}, a);
  u = Ie(b), g = Ie(h), m === void 0 && (m = 1e-3), (u === 0 || g === 0 ? Math.abs(g - u) < m : Math.abs(g / u) < 1 + m && Math.abs(g / u) > 1 - m) || (h = re(re({}, h), It({ sizeRestrictions: l, width: h.width, height: h.height, aspectRatio: { minimum: Ie(b), maximum: Ie(b) } })));
  var R = Ki(p = ct(p, h.width * i.width / (p.width * b.width)), n({ visibleArea: p, type: "resize" }));
  return R !== 1 && (p = ct(p, R), h = ct(h, R)), p = je(p = it(p, si(Ye(h), Ye(p))), n({ visibleArea: p, type: "move" })), { coordinates: h = je(h, qi(_t(p), d)), visibleArea: p };
}
function ar(e) {
  var n = e.event, i = e.getAreaRestrictions, s = e.boundaries, o = e.coordinates, a = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var l = e.positionRestrictions;
  e.stencilReference;
  var d = re({}, o), u = re({}, a);
  if (o && a && n.type !== "manipulateImage") {
    var g = { width: 0, height: 0 };
    u.width, s.width, Ie(s) > Ie(d) ? (g.height = 0.8 * s.height, g.width = g.height * Ie(d)) : (g.width = 0.8 * s.width, g.height = g.width * Ie(d));
    var m = Ki(u = ct(u, d.width * s.width / (u.width * g.width)), i({ visibleArea: u, type: "resize" }));
    u = ct(u, m), m !== 1 && (g.height /= m, g.width /= m), u = je(u = it(u, si(Ye(d), Ye(u))), i({ visibleArea: u, type: "move" })), d = je(d, qi(_t(u), l));
  }
  return { coordinates: d, visibleArea: u };
}
function or(e) {
  var n = e.event, i = e.coordinates, s = e.visibleArea, o = e.getAreaRestrictions, a = re({}, s), l = re({}, i);
  if (n.type === "setCoordinates") {
    var d = Math.max(0, l.width - a.width), u = Math.max(0, l.height - a.height);
    d > u ? a = ct(a, Math.min(l.width / a.width, li(a, o({ visibleArea: a, type: "resize" })))) : u > d && (a = ct(a, Math.min(l.height / a.height, li(a, o({ visibleArea: a, type: "resize" }))))), a = je(a = it(a, Xi(ri(l, _t(a)))), o({ visibleArea: a, type: "move" }));
  }
  return { visibleArea: a, coordinates: l };
}
function sr(e) {
  var n = e.imageSize, i = e.visibleArea, s = e.coordinates, o = i || n;
  return { left: (i ? i.left : 0) + o.width / 2 - s.width / 2, top: (i ? i.top : 0) + o.height / 2 - s.height / 2 };
}
function lr(e) {
  var n = e.imageSize, i = e.visibleArea, s = e.aspectRatio, o = e.sizeRestrictions, a = i || n, l = Math.min(s.maximum || 1 / 0, Math.max(s.minimum || 0, Ie(a))), d = a.width < a.height ? { width: 0.8 * a.width, height: 0.8 * a.width / l } : { height: 0.8 * a.height, width: 0.8 * a.height * l };
  return It(re(re({}, d), { aspectRatio: s, sizeRestrictions: o }));
}
function rr(e) {
  var n, i, s = e.imageSize, o = e.visibleArea, a = e.boundaries, l = e.aspectRatio, d = e.sizeRestrictions, u = e.stencilSize, g = o || s;
  return Ie(g) > Ie(a) ? i = (n = u.height * g.height / a.height) * Ie(u) : n = (i = u.width * g.width / a.width) / Ie(u), It({ width: i, height: n, aspectRatio: l, sizeRestrictions: d });
}
function cr(e) {
  var n = e.getAreaRestrictions, i = e.coordinates, s = e.imageSize, o = Ie(e.boundaries);
  if (i) {
    var a = { height: Math.max(i.height, s.height), width: Math.max(i.width, s.width) }, l = ja({ width: Ie(a) > o ? a.width : a.height * o, height: Ie(a) > o ? a.width / o : a.height }, pn(n())), d = { left: i.left + i.width / 2 - l.width / 2, top: i.top + i.height / 2 - l.height / 2, width: l.width, height: l.height }, u = yi(i, _t(re({ left: 0, top: 0 }, s))), g = {};
    return !u.left && !u.right && d.width <= s.width && (g.left = 0, g.right = s.width), !u.top && !u.bottom && d.height <= s.height && (g.top = 0, g.bottom = s.height), je(d, g);
  }
  var m = Ie(s);
  return l = { height: m > o ? s.height : s.width / o, width: m > o ? s.height * o : s.width }, { left: s.width / 2 - l.width / 2, top: s.height / 2 - l.height / 2, width: l.width, height: l.height };
}
function Mi(e, n) {
  return Ka(e, _t(n));
}
function ur(e) {
  var n = e.event, i = e.coordinates, s = e.visibleArea, o = e.sizeRestrictions, a = e.getAreaRestrictions, l = e.positionRestrictions, d = e.adjustStencil, u = n.scale, g = n.move, m = re({}, s), h = re({}, i), p = 1, b = 1, R = u.factor && Math.abs(u.factor - 1) > 1e-3;
  m = it(m, { left: g.left || 0, top: g.top || 0 });
  var M = { stencil: { minimum: Math.max(o.minWidth ? o.minWidth / h.width : 0, o.minHeight ? o.minHeight / h.height : 0), maximum: Math.min(o.maxWidth ? o.maxWidth / h.width : 1 / 0, o.maxHeight ? o.maxHeight / h.height : 1 / 0, li(h, l)) }, area: { maximum: li(m, a({ visibleArea: m, type: "resize" })) } };
  u.factor && R && (u.factor < 1 ? (b = Math.max(u.factor, M.stencil.minimum)) > 1 && (b = 1) : u.factor > 1 && (b = Math.min(u.factor, Math.min(M.area.maximum, M.stencil.maximum))) < 1 && (b = 1)), b && (m = ct(m, b, u.center));
  var T = i.left - s.left, ie = s.width + s.left - (i.width + i.left), G = i.top - s.top, K = s.height + s.top - (i.height + i.top);
  return m = je(m = it(m, ri(m, { left: l.left !== void 0 ? l.left - T * b : void 0, top: l.top !== void 0 ? l.top - G * b : void 0, bottom: l.bottom !== void 0 ? l.bottom + K * b : void 0, right: l.right !== void 0 ? l.right + ie * b : void 0 })), a({ visibleArea: m, type: "move" })), h.width = h.width * b, h.height = h.height * b, h.left = m.left + T * b, h.top = m.top + G * b, h = je(h, qi(_t(m), l)), u.factor && R && d && (u.factor > 1 ? p = Math.min(M.area.maximum, u.factor) / b : u.factor < 1 && (p = Math.max(h.height / m.height, h.width / m.width, u.factor / b)), p !== 1 && (m = it(m = je(m = ct(m, p, u.factor > 1 ? u.center : Ye(h)), a({ visibleArea: m, type: "move" })), Xi(ri(h, _t(m)))))), { coordinates: h, visibleArea: m };
}
function dr(e) {
  var n = e.aspectRatio, i = e.getAreaRestrictions, s = e.coordinates, o = e.visibleArea, a = e.sizeRestrictions, l = e.positionRestrictions, d = e.imageSize, u = e.previousImageSize, g = e.angle, m = re({}, s), h = re({}, o), p = kt(Ye(re({ left: 0, top: 0 }, u)), g);
  return (m = re(re({}, It({ sizeRestrictions: a, aspectRatio: n, width: m.width, height: m.height })), kt(Ye(m), g))).left -= p.left - d.width / 2 + m.width / 2, m.top -= p.top - d.height / 2 + m.height / 2, h = ct(h, Ki(h, i({ visibleArea: h, type: "resize" }))), { coordinates: m = je(m, l), visibleArea: h = je(h = it(h, si(Ye(m), Ye(s))), i({ visibleArea: h, type: "move" })) };
}
function hr(e) {
  var n = e.flip, i = e.previousFlip, s = e.rotate, o = e.getAreaRestrictions, a = e.coordinates, l = e.visibleArea, d = e.imageSize, u = re({}, a), g = re({}, l), m = i.horizontal !== n.horizontal, h = i.vertical !== n.vertical;
  if (m || h) {
    var p = kt({ left: d.width / 2, top: d.height / 2 }, -s), b = kt(Ye(u), -s), R = kt({ left: m ? p.left - (b.left - p.left) : b.left, top: h ? p.top - (b.top - p.top) : b.top }, s);
    u = it(u, si(R, Ye(u))), b = kt(Ye(g), -s), g = je(g = it(g, si(R = kt({ left: m ? p.left - (b.left - p.left) : b.left, top: h ? p.top - (b.top - p.top) : b.top }, s), Ye(g))), o({ visibleArea: g, type: "move" }));
  }
  return { coordinates: u, visibleArea: g };
}
function fa(e) {
  var n = e.directions, i = e.coordinates, s = e.positionRestrictions, o = s === void 0 ? {} : s, a = e.sizeRestrictions, l = e.preserveRatio, d = e.compensate, u = re({}, n), g = pt(i, u).width, m = pt(i, u).height;
  g < 0 && (u.left < 0 && u.right < 0 ? (u.left = -(i.width - a.minWidth) / (u.left / u.right), u.right = -(i.width - a.minWidth) / (u.right / u.left)) : u.left < 0 ? u.left = -(i.width - a.minWidth) : u.right < 0 && (u.right = -(i.width - a.minWidth))), m < 0 && (u.top < 0 && u.bottom < 0 ? (u.top = -(i.height - a.minHeight) / (u.top / u.bottom), u.bottom = -(i.height - a.minHeight) / (u.bottom / u.top)) : u.top < 0 ? u.top = -(i.height - a.minHeight) : u.bottom < 0 && (u.bottom = -(i.height - a.minHeight)));
  var h = yi(pt(i, u), o);
  d && (h.left && h.left > 0 && h.right === 0 ? (u.right += h.left, u.left -= h.left) : h.right && h.right > 0 && h.left === 0 && (u.left += h.right, u.right -= h.right), h.top && h.top > 0 && h.bottom === 0 ? (u.bottom += h.top, u.top -= h.top) : h.bottom && h.bottom > 0 && h.top === 0 && (u.top += h.bottom, u.bottom -= h.bottom), h = yi(pt(i, u), o));
  var p = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (yt.forEach((function(M) {
    var T = h[M];
    T && u[M] && (p[M] = Math.max(0, 1 - T / u[M]));
  })), l) {
    var b = Math.min.apply(null, yt.map((function(M) {
      return p[M];
    })));
    b !== 1 / 0 && yt.forEach((function(M) {
      u[M] *= b;
    }));
  } else yt.forEach((function(M) {
    p[M] !== 1 / 0 && (u[M] *= p[M]);
  }));
  if (g = pt(i, u).width, m = pt(i, u).height, u.right + u.left && (g > a.maxWidth ? p.width = (a.maxWidth - i.width) / (u.right + u.left) : g < a.minWidth && (p.width = (a.minWidth - i.width) / (u.right + u.left))), u.bottom + u.top && (m > a.maxHeight ? p.height = (a.maxHeight - i.height) / (u.bottom + u.top) : m < a.minHeight && (p.height = (a.minHeight - i.height) / (u.bottom + u.top))), l) {
    var R = Math.min(p.width, p.height);
    R !== 1 / 0 && yt.forEach((function(M) {
      u[M] *= R;
    }));
  } else p.width !== 1 / 0 && Zl.forEach((function(M) {
    u[M] *= p.width;
  })), p.height !== 1 / 0 && Ql.forEach((function(M) {
    u[M] *= p.height;
  }));
  return u;
}
function Ti(e, n, i) {
  return n == 0 && i == 0 ? e / 2 : n == 0 ? 0 : i == 0 ? e : e * Math.abs(n / (n + i));
}
var vr = mt("vue-simple-handler"), mr = mt("vue-simple-handler-wrapper"), Nn = { name: "SimpleHandler", components: { HandlerWrapper: Ha }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, n = (rt(e = {}, this.horizontalPosition, !!this.horizontalPosition), rt(e, this.verticalPosition, !!this.verticalPosition), rt(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), rt(e, "hover", this.hover), e);
  return { default: Ve(vr(n), this.defaultClass, this.hover && this.hoverClass), wrapper: Ve(mr(n), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
Nn.render = function(e, n, i, s, o, a) {
  var l = ae("HandlerWrapper");
  return y(), se(l, { class: a.classes.wrapper, "vertical-position": i.verticalPosition, "horizontal-position": i.horizontalPosition, disabled: i.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: E((function() {
    return [f("div", { class: a.classes.default }, null, 2)];
  })), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var fr = mt("vue-simple-line"), gr = mt("vue-simple-line-wrapper"), kn = { name: "SimpleLine", components: { LineWrapper: Ya }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: Ve(fr(rt({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: Ve(gr(rt({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
kn.render = function(e, n, i, s, o, a) {
  var l = ae("LineWrapper");
  return y(), se(l, { class: a.classes.wrapper, position: i.position, disabled: i.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: E((function() {
    return [f("div", { class: a.classes.root }, null, 2)];
  })), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var rn = mt("vue-bounding-box"), pr = ["east", "west", null], br = ["south", "north", null], qa = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return Nn;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return kn;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return pr.forEach((function(n) {
    br.forEach((function(i) {
      if (n !== i) {
        var s = za(n, i), o = s.name, a = s.classname;
        e.push({ name: o, classname: a, verticalDirection: i, horizontalDirection: n });
      }
    }));
  })), { points: e };
}, computed: { style: function() {
  var e = {};
  return this.width && this.height && (e.width = "".concat(this.width, "px"), e.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), e;
}, classes: function() {
  var e = this.handlersClasses, n = this.handlersWrappersClasses, i = this.linesClasses, s = this.linesWrappersClasses;
  return { root: rn(), handlers: e, handlersWrappers: n, lines: i, linesWrappers: s };
}, lineNodes: function() {
  var e = this, n = [];
  return this.points.forEach((function(i) {
    i.horizontalDirection && i.verticalDirection || !e.lines[i.name] || n.push({ name: i.name, component: e.linesComponent, class: Ve(e.classes.lines.default, e.classes.lines[i.name], !e.resizable && e.classes.lines.disabled), wrapperClass: Ve(e.classes.linesWrappers.default, e.classes.linesWrappers[i.name], !e.resizable && e.classes.linesWrappers.disabled), hoverClass: e.classes.lines.hover, verticalDirection: i.verticalDirection, horizontalDirection: i.horizontalDirection, disabled: !e.resizable });
  })), n;
}, handlerNodes: function() {
  var e = this, n = [], i = this.width, s = this.height;
  return this.points.forEach((function(o) {
    if (e.handlers[o.name]) {
      var a = { name: o.name, component: e.handlersComponent, class: Ve(e.classes.handlers.default, e.classes.handlers[o.name]), wrapperClass: Ve(e.classes.handlersWrappers.default, e.classes.handlersWrappers[o.name]), hoverClass: e.classes.handlers.hover, verticalDirection: o.verticalDirection, horizontalDirection: o.horizontalDirection, disabled: !e.resizable };
      if (i && s) {
        var l = o.horizontalDirection, d = o.verticalDirection, u = l === "east" ? i : l === "west" ? 0 : i / 2, g = d === "south" ? s : d === "north" ? 0 : s / 2;
        a.wrapperClass = rn("handler"), a.wrapperStyle = { transform: "translate(".concat(u, "px, ").concat(g, "px)") }, e.transitions && e.transitions.enabled && (a.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else a.wrapperClass = rn("handler", rt({}, o.classname, !0));
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
  n === "west" ? d.left -= a : n === "east" && (d.right += a), i === "north" ? d.top -= l : i === "south" && (d.bottom += l), !i && n ? s = "width" : i && !n && (s = "height"), this.resizable && this.$emit("resize", new Xl(d, { allowedDirections: { left: n === "west" || !n, right: n === "east" || !n, bottom: i === "south" || !i, top: i === "north" || !i }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: s }));
} }, emits: ["resize", "resize-end"] };
qa.render = function(e, n, i, s, o, a) {
  return y(), se("div", { ref: "box", class: a.classes.root, style: a.style }, [vt(e.$slots, "default"), f("div", null, [(y(!0), se(pe, null, Ne(a.lineNodes, (function(l) {
    return y(), se(ai(l.component), { key: l.name, "default-class": l.class, "hover-class": l.hoverClass, "wrapper-class": l.wrapperClass, position: l.name, disabled: l.disabled, onDrag: function(d) {
      return a.onHandlerDrag(d, l.horizontalDirection, l.verticalDirection);
    }, onDragEnd: n[1] || (n[1] = function(d) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  })), 128))]), (y(!0), se(pe, null, Ne(a.handlerNodes, (function(l) {
    return y(), se("div", { key: l.name, style: l.wrapperStyle, class: l.wrapperClass }, [(y(), se(ai(l.component), { "default-class": l.class, "hover-class": l.hoverClass, "wrapper-class": l.wrapperClass, "horizontal-position": l.horizontalDirection, "vertical-position": l.verticalDirection, disabled: l.disabled, onDrag: function(d) {
      return a.onHandlerDrag(d, l.horizontalDirection, l.verticalDirection);
    }, onDragEnd: n[2] || (n[2] = function(d) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  })), 128))], 6);
};
var yr = mt("vue-draggable-area"), Za = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: yr() };
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
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(e, e.touches), e.preventDefault(), e.stopPropagation()) : Wa({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: e.touches[0].clientX, y: e.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), this.touchStarted = !0));
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
    this.touches.length === 1 && i.length === 1 && this.$emit("move", new Ln({ left: i[0].clientX - (o + this.anchor.x), top: i[0].clientY - (a + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
Za.render = function(e, n, i, s, o, a) {
  return y(), se("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }) }, [vt(e.$slots, "default")], 544);
};
function cn(e) {
  var n, i;
  return { rotate: e.rotate || 0, flip: { horizontal: ((n = e == null ? void 0 : e.flip) === null || n === void 0 ? void 0 : n.horizontal) || !1, vertical: ((i = e == null ? void 0 : e.flip) === null || i === void 0 ? void 0 : i.vertical) || !1 } };
}
function Er(e) {
  return new Promise((function(n, i) {
    try {
      if (e) if (/^data:/i.test(e)) n((function(u) {
        u = u.replace(/^data:([^;]+);base64,/gim, "");
        for (var g = atob(u), m = g.length, h = new ArrayBuffer(m), p = new Uint8Array(h), b = 0; b < m; b++) p[b] = g.charCodeAt(b);
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
function Qa(e) {
  var n = e.rotate, i = e.flip, s = e.scaleX, o = e.scaleY, a = "";
  return a += " rotate(" + n + "deg) ", a += " scaleX(" + s * (i.horizontal ? -1 : 1) + ") ", a += " scaleY(" + o * (i.vertical ? -1 : 1) + ") ";
}
function _r(e) {
  try {
    var n, i = new DataView(e), s = void 0, o = void 0, a = void 0, l = void 0;
    if (i.getUint8(0) === 255 && i.getUint8(1) === 216) for (var d = i.byteLength, u = 2; u + 1 < d; ) {
      if (i.getUint8(u) === 255 && i.getUint8(u + 1) === 225) {
        a = u;
        break;
      }
      u++;
    }
    if (a && (s = a + 10, (function(b, R, M) {
      var T, ie = "";
      for (T = R, M += R; T < M; T++) ie += String.fromCharCode(b.getUint8(T));
      return ie;
    })(i, a + 4, 4) === "Exif")) {
      var g = i.getUint16(s);
      if (((o = g === 18761) || g === 19789) && i.getUint16(s + 2, o) === 42) {
        var m = i.getUint32(s + 4, o);
        m >= 8 && (l = s + m);
      }
    }
    if (l) {
      for (var h = i.getUint16(l, o), p = 0; p < h; p++)
        if (u = l + 12 * p + 2, i.getUint16(u, o) === 274) {
          u += 8, n = i.getUint16(u, o), i.setUint16(u, 1, o);
          break;
        }
    }
    return n;
  } catch {
    return null;
  }
}
function ga(e, n) {
  var i = n.getBoundingClientRect(), s = i.left, o = i.top, a = { left: 0, top: 0 }, l = 0;
  return e.forEach((function(d) {
    a.left += (d.clientX - s) / e.length, a.top += (d.clientY - o) / e.length;
  })), e.forEach((function(d) {
    l += Wa({ x: a.left, y: a.top }, { x: d.clientX - s, y: d.clientY - o });
  })), { centerMass: a, spread: l, count: e.length };
}
var Ja = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = fn(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, n) {
  if (this.touches.length) {
    if (this.touches.length === 1 && n.length === 1) this.$emit("move", new fi({ left: this.touches[0].clientX - n[0].clientX, top: this.touches[0].clientY - n[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var i = ga(n, this.$refs.container), s = this.oldGeometricProperties;
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
    })), this.oldGeometricProperties = ga(this.touches, n);
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
    var n = this.$refs.container.getBoundingClientRect(), i = n.left, s = n.top, o = 1 + this.wheelResize.ratio * (l = e.deltaY || e.detail || e.wheelDelta, (d = +l) == 0 || Ba(d) ? d : d > 0 ? 1 : -1), a = { left: e.clientX - i, top: e.clientY - s };
    this.$emit("resize", new fi({}, { factor: o, center: a })), this.touches.length || this.debouncedProcessEnd();
  }
  var l, d;
} }, emits: ["resize", "move", "transform-end"] };
Ja.render = function(e, n, i, s, o, a) {
  return y(), se("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onWheel: n[3] || (n[3] = function() {
    return a.onWheel && a.onWheel.apply(a, arguments);
  }) }, [vt(e.$slots, "default")], 544);
};
var yn = { components: { TransformableImage: Ja }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
yn.render = function(e, n, i, s, o, a) {
  var l = ae("transformable-image");
  return y(), se(l, { "touch-move": i.touchMove, "touch-resize": i.touchResize, "mouse-move": i.mouseMove, "wheel-resize": i.wheelResize, onMove: n[1] || (n[1] = function(d) {
    return e.$emit("move", d);
  }), onResize: n[2] || (n[2] = function(d) {
    return e.$emit("resize", d);
  }) }, { default: E((function() {
    return [vt(e.$slots, "default")];
  })), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var Si = mt("vue-preview"), eo = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: Si({ fill: this.fill }), wrapper: Si("wrapper"), imageWrapper: Si("image-wrapper"), image: Ve(Si("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, n = Ce(Ce({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), i = this.imageSize.width, s = this.imageSize.height, o = Xa({ width: i, height: s }, n.rotate), a = { width: "".concat(i, "px"), height: "".concat(s, "px"), left: "0px", top: "0px" }, l = { rotate: { left: (i - o.width) * n.scaleX / 2, top: (s - o.height) * n.scaleY / 2 }, scale: { left: (1 - n.scaleX) * i / 2, top: (1 - n.scaleY) * s / 2 } };
    return a.transform = `translate(
				`.concat(-this.coordinates.left / e - l.rotate.left - l.scale.left, "px,").concat(-this.coordinates.top / e - l.rotate.top - l.scale.top, "px) ") + Qa(n), this.transitions && this.transitions.enabled && (a.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), a;
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
eo.render = function(e, n, i, s, o, a) {
  return y(), se("div", { ref: "root", class: a.classes.root, style: a.style }, [f("div", { ref: "wrapper", class: a.classes.wrapper, style: a.wrapperStyle }, [pi(f("img", { ref: "image", src: i.image && i.image.src, class: a.classes.image, style: a.imageStyle }, null, 14, ["src"]), [[Di, i.image && i.image.src]])], 6)], 6);
};
var to = { components: { Preview: eo }, inheritAttrs: !1 };
to.render = function(e, n, i, s, o, a) {
  var l = ae("preview");
  return y(), se(l, In(e.$attrs, { fill: !0 }), null, 16);
};
var un = mt("vue-rectangle-stencil"), Dn = { name: "RectangleStencil", components: { StencilPreview: to, BoundingBox: qa, DraggableArea: Za }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return Nn;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return kn;
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
  return { stencil: Ve(un({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: Ve(un("preview"), this.previewClass), boundingBox: Ve(un("bounding-box"), this.boundingBoxClass) };
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
Dn.render = function(e, n, i, s, o, a) {
  var l = ae("stencil-preview"), d = ae("draggable-area"), u = ae("bounding-box");
  return y(), se("div", { class: a.classes.stencil, style: a.style }, [f(u, { width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, transitions: i.transitions, class: a.classes.boundingBox, handlers: i.handlers, "handlers-component": i.handlersComponent, "handlers-classes": i.handlersClasses, "handlers-wrappers-classes": i.handlersWrappersClasses, lines: i.lines, "lines-component": i.linesComponent, "lines-classes": i.linesClasses, "lines-wrappers-classes": i.linesWrappersClasses, resizable: i.resizable, onResize: a.onResize, onResizeEnd: a.onResizeEnd }, { default: E((function() {
    return [f(d, { movable: i.movable, onMove: a.onMove, onMoveEnd: a.onMoveEnd }, { default: E((function() {
      return [f(l, { image: i.image, coordinates: i.coordinates, width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, class: a.classes.preview, transitions: i.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    })), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  })), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var wr = ["transitions"], wt = mt("vue-advanced-cropper"), io = { name: "Cropper", components: { BackgroundWrapper: yn }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return Dn;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return yn;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return er.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var n = e.event, i = e.coordinates, s = e.aspectRatio, o = e.positionRestrictions, a = e.sizeRestrictions, l = re(re({}, i), { right: i.left + i.width, bottom: i.top + i.height }), d = n.params || {}, u = re({}, n.directions), g = d.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  a.widthFrozen && (u.left = 0, u.right = 0), a.heightFrozen && (u.top = 0, u.bottom = 0), yt.forEach((function(q) {
    g[q] || (u[q] = 0);
  }));
  var m = pt(l, u = fa({ coordinates: l, directions: u, sizeRestrictions: a, positionRestrictions: o })).width, h = pt(l, u).height, p = d.preserveRatio ? Ie(l) : ln(m / h, s);
  if (p) {
    var b = d.respectDirection;
    if (b || (b = l.width >= l.height || p === 1 ? "width" : "height"), b === "width") {
      var R = m / p - l.height;
      if (g.top && g.bottom) {
        var M = u.top, T = u.bottom;
        u.bottom = Ti(R, T, M), u.top = Ti(R, M, T);
      } else g.bottom ? u.bottom = R : g.top ? u.top = R : g.right ? u.right = 0 : g.left && (u.left = 0);
    } else if (b === "height") {
      var ie = l.width - h * p;
      if (g.left && g.right) {
        var G = u.left, K = u.right;
        u.left = -Ti(ie, G, K), u.right = -Ti(ie, K, G);
      } else g.left ? u.left = -ie : g.right ? u.right = -ie : g.top ? u.top = 0 : g.bottom && (u.bottom = 0);
    }
    u = fa({ directions: u, coordinates: l, sizeRestrictions: a, positionRestrictions: o, preserveRatio: !0, compensate: d.compensate });
  }
  return m = pt(l, u).width, h = pt(l, u).height, (p = d.preserveRatio ? Ie(l) : ln(m / h, s)) && Math.abs(p - m / h) > 1e-3 && yt.forEach((function(q) {
    g[q] || (u[q] = 0);
  })), bn({ event: new Ln({ left: -u.left, top: -u.top }), coordinates: { width: i.width + u.right + u.left, height: i.height + u.top + u.bottom, left: i.left, top: i.top }, positionRestrictions: o });
} }, moveAlgorithm: { type: Function, default: bn }, initStretcher: { type: Function, default: function(e) {
  var n = e.stretcher, i = e.imageSize, s = Ie(i);
  n.style.width = i.width + "px", n.style.height = n.clientWidth / s + "px", n.style.width = n.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.coordinates, s = e.aspectRatio, o = e.sizeRestrictions, a = e.positionRestrictions, l = re(re({}, i), It({ width: i.width, height: i.height, aspectRatio: s, sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minHeight: Math.min(n.height, o.minHeight), minWidth: Math.min(n.width, o.minWidth) } }));
  return l = je(l = it(l, si(Ye(i), Ye(l))), qi(_t(n), a));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.boundaries, s = e.getAreaRestrictions, o = e.coordinates, a = re({}, n);
  a.height = a.width / Ie(i), a.top += (n.height - a.height) / 2, (o.height - a.height > 0 || o.width - a.width > 0) && (a = ct(a, Math.max(o.height / a.height, o.width / a.width)));
  var l = Xi(ri(o, _t(a = ct(a, Ki(a, s({ visibleArea: a, type: "resize" }))))));
  return a.width < o.width && (l.left = 0), a.height < o.height && (l.top = 0), a = je(a = it(a, l), s({ visibleArea: a, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.boundaries, s = e.imageSize, o = e.imageRestriction, a = e.type, l = {};
  return o === "fill-area" ? l = { left: 0, top: 0, right: s.width, bottom: s.height } : o === "fit-area" && (Ie(i) > Ie(s) ? (l = { top: 0, bottom: s.height }, n && a === "move" && (n.width > s.width ? (l.left = -(n.width - s.width) / 2, l.right = s.width - l.left) : (l.left = 0, l.right = s.width))) : (l = { left: 0, right: s.width }, n && a === "move" && (n.height > s.height ? (l.top = -(n.height - s.height) / 2, l.bottom = s.height - l.top) : (l.top = 0, l.bottom = s.height)))), l;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.imageSize, i = {};
  return e.imageRestriction !== "none" && (i = { left: 0, top: 0, right: n.width, bottom: n.height }), i;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: Ce({}, da) };
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
  var e = gn(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: gn(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: Ge(this.minWidth) ? 0 : Ai(this.minWidth), minHeight: Ge(this.minHeight) ? 0 : Ai(this.minHeight), maxWidth: Ge(this.maxWidth) ? 1 / 0 : Ai(this.maxWidth), maxHeight: Ge(this.maxHeight) ? 1 / 0 : Ai(this.maxHeight) });
    if (e = (function(s) {
      var o = s.areaRestrictions, a = s.sizeRestrictions, l = s.boundaries, d = s.positionRestrictions, u = re(re({}, a), { minWidth: a.minWidth !== void 0 ? a.minWidth : 0, minHeight: a.minHeight !== void 0 ? a.minHeight : 0, maxWidth: a.maxWidth !== void 0 ? a.maxWidth : 1 / 0, maxHeight: a.maxHeight !== void 0 ? a.maxHeight : 1 / 0 });
      d.left !== void 0 && d.right !== void 0 && (u.maxWidth = Math.min(u.maxWidth, d.right - d.left)), d.bottom !== void 0 && d.top !== void 0 && (u.maxHeight = Math.min(u.maxHeight, d.bottom - d.top));
      var g = pn(o), m = ja(l, g);
      return g.width < 1 / 0 && (!u.maxWidth || u.maxWidth > m.width) && (u.maxWidth = Math.min(u.maxWidth, m.width)), g.height < 1 / 0 && (!u.maxHeight || u.maxHeight > m.height) && (u.maxHeight = Math.min(u.maxHeight, m.height)), u.minWidth > u.maxWidth && (u.minWidth = u.maxWidth, u.widthFrozen = !0), u.minHeight > u.maxHeight && (u.minHeight = u.maxHeight, u.heightFrozen = !0), u;
    })({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var n = this.getStencilSize(), i = pn(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      e.maxWidth = Math.min(e.maxWidth, i.width * n.width / this.boundaries.width), e.maxHeight = Math.min(e.maxHeight, i.height * n.height / this.boundaries.height), e.maxWidth < e.minWidth && (e.minWidth = e.maxWidth), e.maxHeight < e.minHeight && (e.minHeight = e.maxHeight);
    }
    return e;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: wt(), image: Ve(wt("image"), this.imageClass), stencil: wt("stencil"), boundaries: Ve(wt("boundaries"), this.boundariesClass), stretcher: Ve(wt("stretcher")), background: Ve(wt("background"), this.backgroundClass), foreground: Ve(wt("foreground"), this.foregroundClass), imageWrapper: Ve(wt("image-wrapper")), cropperWrapper: Ve(wt("cropper-wrapper")) };
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
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, n = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, i = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, s = Ce(Ce({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), o = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-n.left - i.left - this.imageTransforms.translateX, "px, ").concat(-n.top - i.top - this.imageTransforms.translateY, "px)") + Qa(s) };
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
  this.debouncedUpdate = fn(this.update, this.debounce), this.debouncedDisableTransitions = fn(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var e = this.initialized ? this.prepareResult(Ce({}, this.coordinates)) : this.defaultCoordinates(), n = { rotate: this.imageTransforms.rotate % 360, flip: Ce({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var i = this;
    return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Ce({}, this.visibleArea) : null, imageTransforms: n, get canvas() {
      return i.canvas ? i.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? Ce({}, this.visibleArea) : null, canvas: void 0, imageTransforms: n };
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
    return a.width > s.maxWidth ? a.width = Math.floor(i.width) : a.width < s.minWidth && (a.width = Math.ceil(i.width)), a.height > s.maxHeight ? a.height = Math.floor(i.height) : a.height < s.minHeight && (a.height = Math.ceil(i.height)), je(a, o);
  })(Ce(Ce({}, this.getPublicProperties()), {}, { positionRestrictions: Mi(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, n, i, s) {
  var o = this.autoZoomAlgorithm;
  o || (o = this.stencilSize ? nr : this.autoZoom ? ar : or);
  var a = o({ event: { type: e, params: s }, visibleArea: n, coordinates: i, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return Ce(Ce({}, a), {}, { changed: !ha(a.visibleArea, n) || !ha(a.coordinates, i) });
}, runAutoZoom: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transitions, s = i !== void 0 && i, o = Yl(n, wr), a = this.processAutoZoom(e, this.visibleArea, this.coordinates, o), l = a.visibleArea, d = a.coordinates, u = a.changed;
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
      return Jl.forEach((function(d) {
        l.directions[d] *= o;
      })), l;
    }
    return i;
  })(Ce(Ce({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, n = this.$refs.image, i = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? (function(d, u, g) {
      var m = g.rotate, h = g.flip, p = { width: u.naturalWidth, height: u.naturalHeight }, b = Xa(p, m), R = d.getContext("2d");
      d.height = b.height, d.width = b.width, R.save();
      var M = kt(Ye(re({ left: 0, top: 0 }, p)), m);
      return R.translate(-(M.left - b.width / 2), -(M.top - b.height / 2)), R.rotate(m * Math.PI / 180), R.translate(h.horizontal ? p.width : 0, h.vertical ? p.height : 0), R.scale(h.horizontal ? -1 : 1, h.vertical ? -1 : 1), R.drawImage(u, 0, 0, p.width, p.height), R.restore(), d;
    })(this.$refs.sourceCanvas, n, this.imageTransforms) : n, s = Ce({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), o = function(d) {
      return d.find((function(u) {
        return g = u, !Number.isNaN(parseFloat(g)) && isFinite(g);
        var g;
      }));
    }, a = It({ sizeRestrictions: { minWidth: o([s.width, s.minWidth]) || 0, minHeight: o([s.height, s.minHeight]) || 0, maxWidth: o([s.width, s.maxWidth]) || 1 / 0, maxHeight: o([s.height, s.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (s.maxArea && a.width * a.height > s.maxArea) {
      var l = Math.sqrt(s.maxArea / (a.width * a.height));
      a = { width: Math.round(l * a.width), height: Math.round(l * a.height) };
    }
    return (function(d, u, g, m, h) {
      d.width = m ? m.width : g.width, d.height = m ? m.height : g.height;
      var p = d.getContext("2d");
      p.clearRect(0, 0, d.width, d.height), h && (h.imageSmoothingEnabled && (p.imageSmoothingEnabled = h.imageSmoothingEnabled), h.imageSmoothingQuality && (p.imageSmoothingQuality = h.imageSmoothingQuality), h.fillColor && (p.fillStyle = h.fillColor, p.fillRect(0, 0, d.width, d.height), p.save()));
      var b = g.left < 0 ? -g.left : 0, R = g.top < 0 ? -g.top : 0;
      p.drawImage(u, g.left + b, g.top + R, g.width, g.height, b * (d.width / g.width), R * (d.height / g.height), d.width, d.height);
    })(e, i, this.coordinates, a, s), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.visibleArea && n ? tr(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, s = this.visibleArea && n ? Mi(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return ir({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i, positionRestrictions: s, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var n = this.defaultSize;
    n || (n = this.stencilSize ? rr : lr);
    var i = this.sizeRestrictions;
    i.minWidth, i.minHeight, i.maxWidth, i.maxHeight;
    var s = Qt(n) ? n({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : n, o = this.defaultPosition || sr, a = [s, function(l) {
      var d = l.coordinates;
      return Ce({}, Qt(o) ? o({ coordinates: d, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
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
      var a = o.cropper, l = o.imageSize, d = a.clientHeight, u = a.clientWidth, g = d, m = l.width * d / l.height;
      return m > u && (m = u, g = l.height * u / l.width), { width: m, height: g };
    })(s) : e.boundaries = (function(o) {
      var a = o.cropper;
      return { width: a.clientWidth, height: a.clientHeight };
    })(s), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  }));
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = Ce(Ce({}, this.defaultImageTransforms), {}, { flip: Ce({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then((function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var n, i, s, o, a, l, d = e.defaultVisibleArea || cr;
    e.visibleArea = Qt(d) ? d({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (n = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, i = n.visibleArea, s = n.boundaries, o = n.getAreaRestrictions, a = re({}, i), l = Ie(s), a.width / a.height !== l && (a.height = a.width / l), je(a, o({ visibleArea: a, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
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
      if (ca(o)) return !1;
      var a = window.location, l = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(o) || [], d = { protocol: l[1] || "", host: l[2] || "", port: l[3] || "" }, u = function(g) {
        return g.port || ((g.protocol || a.protocol) === "http" ? 80 : 433);
      };
      return !(!d.protocol && !d.host && !d.port || d.protocol && d.protocol == a.protocol && d.host && d.host == a.host && d.host && u(d) == u(a));
    })(this.src)) {
      var i = Ge(this.crossOrigin) ? this.canvas : this.crossOrigin;
      i === !0 && (i = "anonymous"), this.imageAttributes.crossOrigin = i || null;
    }
    if (this.checkOrientation) {
      var s = (e = this.src, new Promise((function(o) {
        Er(e).then((function(a) {
          var l = _r(a);
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
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, s && o && o > 1 ? Ga(i) || !ca(i) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([s])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = (function(a) {
    for (var l = [], d = new Uint8Array(a); d.length > 0; ) {
      var u = d.subarray(0, 8192);
      l.push(String.fromCharCode.apply(null, Array.from ? Array.from(u) : u.slice())), d = d.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(l.join(""));
  })(s) : this.imageAttributes.src = i, Qt(this.defaultTransforms) ? this.appliedImageTransforms = cn(this.defaultTransforms()) : Ni(this.defaultTransforms) ? this.appliedImageTransforms = cn(this.defaultTransforms) : this.appliedImageTransforms = (function(a) {
    var l = cn({});
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
  })(o), this.defaultImageTransforms = Ce(Ce({}, this.appliedImageTransforms), {}, { flip: Ce({}, this.appliedImageTransforms.flip) }), this.$nextTick((function() {
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
    n.coordinates = n.moveAlgorithm(Ce(Ce({}, n.getPublicProperties()), {}, { positionRestrictions: Mi(n.positionRestrictions, n.visibleArea), coordinates: n.coordinates, event: n.normalizeEvent(e) })), n.onChange();
  }));
}, onResize: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender((function() {
    var i = n.sizeRestrictions, s = Math.min(n.coordinates.width, n.coordinates.height, 20 * n.coefficient);
    n.coordinates = n.resizeAlgorithm(Ce(Ce({}, n.getPublicProperties()), {}, { positionRestrictions: Mi(n.positionRestrictions, n.visibleArea), sizeRestrictions: { maxWidth: Math.min(i.maxWidth, n.visibleArea.width), maxHeight: Math.min(i.maxHeight, n.visibleArea.height), minWidth: Math.max(i.minWidth, s), minHeight: Math.max(i.minHeight, s) }, event: n.normalizeEvent(e) })), n.onChange(), n.ticking = !1;
  }));
}, onManipulateImage: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i = n.transitions, s = i !== void 0 && i, o = n.normalize, a = o === void 0 || o;
    s && this.enableTransitions();
    var l = ur(Ce(Ce({}, this.getPublicProperties()), {}, { event: a ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), d = l.visibleArea, u = l.coordinates;
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
  if (Ge(n) && (n = Ge(o) ? a : o), Ge(i) && (i = Ge(o) ? l : o), !e && (Ge(n) || Ge(i))) {
    var u = this.getStencilSize(), g = u ? Ie(u) : null;
    Ge(n) && (n = ua(g) ? g : void 0), Ge(i) && (i = ua(g) ? g : void 0);
  }
  return { minimum: n, maximum: i };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, n = e.boundaries, i = e.stencilSize, s = e.aspectRatio, ln(Ie(o = Qt(i) ? i({ boundaries: n, aspectRatio: s }) : i), s) && (o = It({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: o.width, height: o.height, aspectRatio: { minimum: s.minimum, maximum: s.maximum } })), (o.width > n.width || o.height > n.height) && (o = It({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: o.width, height: o.height, aspectRatio: { minimum: Ie(o), maximum: Ie(o) } })), o;
  var e, n, i, s, o;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return Ce({}, da);
}, flip: function(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.transitions, o = s === void 0 || s;
  if (!this.transitionsActive) {
    o && this.enableTransitions();
    var a = Ce({}, this.imageTransforms.flip), l = hr({ flip: { horizontal: e ? !a.horizontal : a.horizontal, vertical: n ? !a.vertical : a.vertical }, previousFlip: a, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), d = l.visibleArea, u = l.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), n && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = d, this.coordinates = u, this.onChange(), o && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transitions, s = i === void 0 || i;
  if (!this.transitionsActive) {
    s && this.enableTransitions();
    var o = Ce({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var a = dr({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: o, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), l = a.visibleArea, d = a.coordinates, u = this.processAutoZoom("rotateImage", l, d);
    l = u.visibleArea, d = u.coordinates, this.visibleArea = l, this.coordinates = d, this.onChange(), s && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, Cr = { key: 0, ref: "canvas", style: { display: "none" } }, Ir = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
io.render = function(e, n, i, s, o, a) {
  return y(), se("div", { ref: "cropper", class: a.classes.cropper }, [f("div", { ref: "stretcher", class: a.classes.stretcher }, null, 2), f("div", { class: a.classes.boundaries, style: a.boundariesStyle }, [(y(), se(ai(i.backgroundWrapperComponent), { class: a.classes.cropperWrapper, "wheel-resize": a.settings.resizeImage.wheel, "touch-resize": a.settings.resizeImage.touch, "touch-move": a.settings.moveImage.touch, "mouse-move": a.settings.moveImage.mouse, onMove: a.onManipulateImage, onResize: a.onManipulateImage }, { default: E((function() {
    return [f("div", { class: a.classes.background, style: a.boundariesStyle }, null, 6), f("div", { class: a.classes.imageWrapper }, [f("img", { ref: "image", crossorigin: o.imageAttributes.crossOrigin, src: o.imageAttributes.src, class: a.classes.image, style: a.imageStyle, onMousedown: n[1] || (n[1] = gi((function() {
    }), ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), f("div", { class: a.classes.foreground, style: a.boundariesStyle }, null, 6), pi((y(), se(ai(i.stencilComponent), In({ ref: "stencil", image: a.image, coordinates: o.coordinates, "stencil-coordinates": a.stencilCoordinates, transitions: a.transitionsOptions }, i.stencilProps, { onResize: a.onResize, onResizeEnd: a.onResizeEnd, onMove: a.onMove, onMoveEnd: a.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[Di, o.imageLoaded]]), i.canvas ? (y(), se("canvas", Cr, null, 512)) : ue("", !0), i.canvas ? (y(), se("canvas", Ir, null, 512)) : ue("", !0)];
  })), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
function Ar() {
  const e = I(""), n = new ss();
  function i(o) {
    const a = n.setPreview(o);
    e.value = a;
  }
  function s() {
    n.clearPreview(), e.value = "";
  }
  return nt(() => {
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
function Mr(e = {}) {
  const { loop: n = 1, autoPlay: i = !0 } = e, s = I(null), o = I(!1);
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
    const p = s.value, b = new vn.Player(p);
    a = b;
    const R = Ra();
    if (!R) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((M, T) => {
        R.load(
          h,
          (ie) => {
            try {
              b.loops = n, b.setVideoItem(ie), i && (b.startAnimation(), o.value = !0), M();
            } catch (G) {
              T(G);
            }
          },
          (ie) => {
            T(ie);
          }
        );
      });
    } catch (M) {
      throw console.error("SVGA load error:", M), l(), M;
    }
  }
  async function u(h) {
    const p = URL.createObjectURL(h);
    try {
      await d(p);
    } finally {
      URL.revokeObjectURL(p);
    }
  }
  function g() {
    if (a)
      try {
        a.stopAnimation(), o.value = !1;
      } catch (h) {
        console.warn("SVGA stop error:", h);
      }
  }
  function m() {
    if (a)
      try {
        a.startAnimation(), o.value = !0;
      } catch (h) {
        console.warn("SVGA start error:", h);
      }
  }
  return nt(() => {
    l();
  }), {
    /** Container ref (attach to div) */
    containerRef: s,
    /** Play SVGA from URL */
    playUrl: d,
    /** Play SVGA from File/Blob */
    playFile: u,
    /** Stop animation */
    stopAnimation: g,
    /** Start animation */
    startAnimation: m,
    /** Whether animation is playing */
    isPlaying: o
  };
}
function On(e) {
  const { action: n, onSuccess: i, onError: s, successMessage: o, errorMessage: a } = e, l = I(!1);
  let d = !1;
  return { loading: l, execute: async (...m) => {
    if (d) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    d = !0, l.value = !0;
    try {
      const h = await n(...m);
      return o && Y.success(o), i == null || i(h), h;
    } catch (h) {
      const p = h instanceof Error ? h : new Error(String(h)), b = a ? `${a}: ${p.message}` : p.message;
      Y.error(b), s == null || s(p);
      return;
    } finally {
      d = !1, l.value = !1;
    }
  }, reset: () => {
    d = !1, l.value = !1;
  } };
}
function pa(e) {
  const { confirm: n, onSuccess: i, ...s } = e, o = I(null), a = (p) => {
    o.value = null, i == null || i(p);
  }, { loading: l, execute: d, reset: u } = On({
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
const Tr = { class: "image-upload-container" }, Sr = {
  key: 0,
  class: "image-upload-mode-switch"
}, Rr = {
  key: 1,
  class: "image-upload-url-input"
}, Lr = {
  key: 0,
  class: "input-suffix-validating"
}, xr = {
  key: 2,
  class: "image-upload-url-error"
}, Nr = {
  key: 0,
  class: "image-upload-uploading-overlay"
}, kr = { class: "image-upload-progress-circle" }, Dr = {
  viewBox: "0 0 36 36",
  class: "progress-ring"
}, Or = ["stroke-dasharray"], Ur = { class: "progress-percent" }, $r = { class: "upload-status-text" }, Pr = ["src"], Fr = ["src"], Vr = {
  key: 2,
  class: "image-upload-provider-badge"
}, zr = {
  key: 3,
  class: "image-upload-provider-badge upload-failed-badge"
}, Gr = {
  key: 4,
  class: "image-upload-provider-badge",
  style: { background: "#ff9800" }
}, Br = {
  key: 5,
  class: "image-upload-preview-actions"
}, Wr = ["title"], Hr = ["title"], Yr = {
  key: 0,
  class: "image-upload-progress"
}, jr = { class: "progress-bar" }, Xr = { class: "progress-text" }, Kr = { class: "upload-hint" }, qr = { class: "upload-sub-hint" }, Zr = ["accept"], Qr = ["src"], Jr = ["src"], ec = { class: "image-crop-body" }, tc = {
  key: 0,
  class: "image-crop-loading"
}, ic = { class: "image-crop-footer" }, nc = { class: "btn-content" }, ac = /* @__PURE__ */ Te({
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
    ls(vn.Parser);
    const o = e, a = i, l = P(() => o.placeholder || s(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE)), d = P(() => o.acceptHint || s("Supports JPG/PNG/GIF/WebP max {max}MB", { max: o.maxSize })), u = I(null), g = I(null), m = I(!1), h = I(0), p = I(!1), b = I(""), R = I(!o.uploadEnabled), M = I(o.modelValue), T = I(null), { previewUrl: ie, setPreview: G } = Ar(), K = I(!1), q = I(!1), {
      containerRef: Q,
      playUrl: le
    } = Mr({ loop: 1, autoPlay: !0 }), he = I(null);
    let Ee = null;
    function W() {
      if (Ee) {
        try {
          Ee.stopAnimation(), Ee.clear();
        } catch {
        }
        Ee = null;
      }
    }
    function O(x) {
      le(x).catch((J) => {
        console.error("[ImageUpload] SVGA preview load error:", J);
      });
    }
    function U(x) {
      W(), tt(() => {
        if (!he.value) return;
        const J = new vn.Player(he.value);
        J.loops = 0, J.setContentMode("AspectFit"), Ee = J;
        const Ae = Ra();
        Ae && Ae.load(
          x,
          (We) => {
            J.setVideoItem(We), J.startAnimation();
          },
          (We) => {
            console.error("[ImageUpload] SVGA URL preview load error:", We);
          }
        );
      });
    }
    const D = I(!1), L = I(""), F = I(1), N = I(1), S = I(!1), k = I(null), w = I({ width: 300, height: 300 });
    function ee() {
      if (!k.value) return;
      const x = k.value.clientWidth, J = k.value.clientHeight || 320, Ae = x / J, We = o.aspectRatio || 16 / 9;
      let ft, at;
      We > Ae ? (ft = Math.min(x, 500), at = ft / We) : (at = Math.min(J, 320), ft = at * We), w.value = { width: Math.round(ft), height: Math.round(at) };
    }
    Me(D, async (x) => {
      x && (await tt(), setTimeout(ee, 100));
    }), Me(() => o.aspectRatio, () => {
      D.value && ee();
    }), At(() => {
      window.addEventListener("resize", ee);
    });
    const ce = I(!1), de = I(""), _e = new rs({
      setValidating: (x) => {
        ce.value = x;
      },
      setError: (x) => {
        de.value = x;
      },
      onConfirm: (x) => {
        a("update:modelValue", x);
      }
    }, o.skipSvgaValidation);
    Me(() => o.skipSvgaValidation, (x) => {
      _e.updateSkipSvgaValidation(!!x);
    });
    const $ = P(() => te(M.value));
    Me(() => o.modelValue, (x) => {
      M.value = x, de.value = "", x && o.uploadEnabled && (R.value = !0), o.deferUpload && (T.value = null, G(null), K.value = !1, q.value = !1, a("fileReady", null));
    }), Me(() => o.uploadEnabled, (x) => {
      x && !o.modelValue && (R.value = !1);
    }), Me(
      [() => o.modelValue, R, () => o.uploadEnabled],
      ([x, J, Ae]) => {
        x && (J || !Ae) && Kn(x) ? U(x) : W();
      },
      { flush: "post" }
    ), nt(() => {
      _e.dispose(), W(), window.removeEventListener("resize", ee);
    });
    function j() {
      var x;
      (x = u.value) == null || x.click();
    }
    function Se(x) {
      var Ae;
      const J = (Ae = x.target.files) == null ? void 0 : Ae[0];
      J && Re(J), x.target.value = "";
    }
    async function Re(x) {
      const J = ds(x, o.accept);
      if (!J.valid) {
        Y.error(J.errorHint);
        return;
      }
      if (!hs(x, o.maxSize)) {
        Y.error(s("File size exceeds {max}MB", { max: o.maxSize }));
        return;
      }
      try {
        await vs(x, o.accept, o.skipSvgaValidation);
      } catch (Ae) {
        const We = Ae instanceof Error ? Ae : new Error(String(Ae));
        Y.error(We.message || s(r.FILE_LOAD_FAILED));
        return;
      }
      if (o.cropEnabled) {
        F.value = 1, N.value = 1, L.value = "", S.value = !0, D.value = !0;
        try {
          const Ae = await ms(x);
          L.value = Ae;
        } catch {
          Y.error(s(r.IMAGE_LOAD_FAILED)), D.value = !1;
        } finally {
          S.value = !1;
        }
      } else
        await qe(x);
    }
    async function $e() {
      if (!(!L.value || !g.value))
        try {
          const { canvas: x } = g.value.getResult(), J = await fs(x, "image/jpeg", 0.92);
          D.value = !1, await qe(J);
        } catch {
          Y.error(s(r.CROP_FAILED));
        }
    }
    function De() {
      D.value = !1, L.value = "";
    }
    async function qe(x) {
      if (o.deferUpload) {
        T.value = x, G(x);
        const J = gs(x), Ae = ps(x);
        K.value = Ae, q.value = J, a("fileReady", x), J && O(previewUrl);
        return;
      }
      m.value = !0, h.value = 0;
      try {
        const J = await qn(x, o.type, (Ae) => {
          h.value = Ae;
        });
        a("update:modelValue", J.url), b.value = J.provider || "", Y.success(s(r.UPLOAD_SUCCESS));
      } catch (J) {
        const Ae = J instanceof Error ? J : new Error(String(J));
        Y.error(`${s("Upload Failed With Error", { error: Ae.message || s(r.NETWORK_ERROR) })}`);
      } finally {
        m.value = !1, h.value = 0;
      }
    }
    function Xe(x) {
      x.preventDefault();
      const J = bs(x);
      J && Re(J);
    }
    function me() {
      _e.cancelValidation(), ce.value = !1, de.value = "", R.value = !1;
    }
    function ut() {
      _e.cancelValidation(), ce.value = !1, de.value = "", R.value = !0;
    }
    function fe() {
      _e.handleUrlFocus();
    }
    function Ze(x) {
      x && typeof x == "object" && "target" in x && x.preventDefault(), _e.handleUrlBlur(
        M.value,
        o.maxBytes
      );
    }
    function ze(x) {
      typeof x == "string" && (M.value = x, de.value = "", _e.cancelValidation(), ce.value = !1);
    }
    function ne(x) {
      x && typeof x == "object" && "target" in x && x.preventDefault(), _e.handleUrlEnter(
        M.value,
        o.maxBytes
      );
    }
    function ve(x) {
      x == null || x.stopPropagation(), _e.cancelValidation(), ce.value = !1, de.value = "", a("update:modelValue", ""), M.value = "", b.value = "", m.value = !1, h.value = 0, p.value = !1, W(), o.deferUpload && (T.value = null, G(null), K.value = !1, q.value = !1, a("fileReady", null));
    }
    function Oe(x) {
      x.target.style.display = "none";
    }
    return n({
      /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
      get isUrlInputMode() {
        return R.value;
      },
      /** 当前是否正在验证 URL */
      get isValidating() {
        return ce.value;
      },
      /** URL 验证错误信息 */
      get urlValidationError() {
        return de.value;
      },
      /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
      get hasUrlError() {
        return R.value ? !!(de.value || o.maxBytes && M.value.trim() && $.value > o.maxBytes) : !1;
      },
      /** 当前 URL 输入框中的值（用于提交时校验实际输入） */
      get urlInputValue() {
        return M.value;
      },
      /** 验证图片 URL 是否可访问 */
      validateImageUrl: cs,
      /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
      setUrlError(x) {
        de.value = x;
      },
      /** 切换到 URL 输入模式 */
      switchToUrlMode: ut,
      /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
      reset() {
        _e.reset(), T.value = null, G(null), K.value = !1, q.value = !1, W(), M.value = o.modelValue || "", b.value = "", de.value = "", m.value = !1, h.value = 0, p.value = !1, o.uploadEnabled && (R.value = !!o.modelValue), a("fileReady", null);
      },
      /**
       * 确保 URL 输入已验证并返回最终 URL。
       * - 如果当前不在 URL 输入模式，返回 null
       * - 如果正在验证，等待验证完成
       * - 如果输入框中有未 blur 确认的 URL，主动触发验证
       * - 验证成功返回 URL，验证失败抛出错误
       */
      async ensureUrlValidated() {
        return R.value ? await _e.ensureUrlValidatedWithErrorCheck(
          M.value,
          o.modelValue || "",
          !!de.value,
          o.maxBytes
        ) : null;
      },
      async uploadPendingFile() {
        const x = T.value;
        if (!x) return null;
        m.value = !0, h.value = 0, p.value = !1;
        try {
          const J = await qn(x, o.type, (Ae) => {
            h.value = Ae;
          });
          return T.value = null, b.value = J.provider || "", p.value = !1, J.url;
        } catch (J) {
          throw p.value = !0, J;
        } finally {
          m.value = !1, h.value = 0;
        }
      }
    }), (x, J) => {
      const Ae = ae("t-input"), We = ae("t-button"), ft = ae("t-dialog");
      return y(), C("div", Tr, [
        e.uploadEnabled && e.showUrlInput ? (y(), C("div", Sr, [
          c("button", {
            class: ye(["mode-switch-btn", { active: !R.value }]),
            onClick: me
          }, [
            f(t(Xn)),
            B(" " + v(t(s)(t(r).UPLOAD_IMAGE)), 1)
          ], 2),
          c("button", {
            class: ye(["mode-switch-btn", { active: R.value }]),
            onClick: ut
          }, v(t(s)(t(r).ENTER_URL)), 3)
        ])) : ue("", !0),
        R.value || !e.uploadEnabled ? (y(), C("div", Rr, [
          f(Ae, {
            "model-value": M.value,
            "onUpdate:modelValue": ze,
            onFocus: fe,
            onBlur: Ze,
            onEnter: ne,
            placeholder: t(s)(t(r).ENTER_IMAGE_URL),
            status: de.value ? "error" : "default"
          }, _a({ _: 2 }, [
            e.maxBytes ? {
              name: "suffix",
              fn: E(() => [
                ce.value ? (y(), C("span", Lr, v(t(s)(t(r).VALIDATING)), 1)) : (y(), C("span", {
                  key: 1,
                  class: ye(["input-suffix-count", { "byte-overflow": $.value > e.maxBytes }])
                }, v($.value) + "/" + v(e.maxBytes), 3))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["model-value", "placeholder", "status"])
        ])) : ue("", !0),
        de.value && (R.value || !e.uploadEnabled) ? (y(), C("div", xr, v(de.value), 1)) : ue("", !0),
        e.uploadEnabled && !R.value ? (y(), C(pe, { key: 3 }, [
          t(ie) ? (y(), C("div", {
            key: 0,
            class: "image-upload-preview",
            style: Be({
              width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
              height: `${e.previewHeight || 160}px`
            })
          }, [
            m.value ? (y(), C("div", Nr, [
              c("div", kr, [
                (y(), C("svg", Dr, [
                  J[3] || (J[3] = c("path", {
                    class: "progress-ring-bg",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, -1)),
                  c("path", {
                    class: "progress-ring-fill",
                    "stroke-dasharray": `${h.value}, 100`,
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, 8, Or)
                ])),
                c("span", Ur, v(h.value) + "%", 1)
              ]),
              c("span", $r, v(t(s)(t(r).UPLOADING)), 1)
            ])) : (y(), C(pe, { key: 1 }, [
              q.value ? (y(), C("div", {
                key: 0,
                ref_key: "svgaPreviewRef",
                ref: Q,
                class: "svga-preview-container"
              }, null, 512)) : K.value ? (y(), C("video", {
                key: 1,
                src: t(ie),
                muted: "",
                loop: "",
                autoplay: "",
                playsinline: ""
              }, null, 8, Pr)) : (y(), C("img", {
                key: 2,
                src: t(ie),
                alt: "preview"
              }, null, 8, Fr))
            ], 64)),
            !m.value && b.value ? (y(), C("span", Vr, v(b.value.toUpperCase()), 1)) : ue("", !0),
            !m.value && p.value ? (y(), C("span", zr, v(t(s)(t(r).UPLOAD_FAILED)), 1)) : !m.value && !b.value ? (y(), C("span", Gr, v(t(s)(t(r).PENDING_UPLOAD)), 1)) : ue("", !0),
            m.value ? ue("", !0) : (y(), C("div", Br, [
              c("button", {
                class: "preview-action-btn",
                onClick: j,
                title: t(s)(t(r).RE_UPLOAD)
              }, [
                f(t(Xn))
              ], 8, Wr),
              c("button", {
                class: "preview-action-btn",
                onClick: ve,
                title: t(s)(t(r).DELETE)
              }, [
                f(t(Wi))
              ], 8, Hr)
            ]))
          ], 4)) : (y(), C("div", {
            key: 1,
            class: ye(["image-upload-dropzone", { uploading: m.value }]),
            onClick: J[0] || (J[0] = (at) => !m.value && j()),
            onDragover: J[1] || (J[1] = //@ts-ignore
            (...at) => t(Zn) && t(Zn)(...at)),
            onDrop: Xe,
            style: Be({ height: `${e.previewHeight || 160}px` })
          }, [
            m.value ? (y(), C("div", Yr, [
              c("div", jr, [
                c("div", {
                  class: "progress-fill",
                  style: Be({ width: `${h.value}%` })
                }, null, 4)
              ]),
              c("span", Xr, v(h.value) + "%", 1)
            ])) : (y(), C(pe, { key: 1 }, [
              f(t($o), {
                size: "32",
                "stroke-width": 1.2
              }),
              c("span", Kr, v(l.value), 1),
              c("span", qr, v(d.value), 1)
            ], 64))
          ], 38)),
          c("input", {
            ref_key: "fileInputRef",
            ref: u,
            type: "file",
            accept: e.accept || "image/jpeg,image/png,image/gif,image/webp",
            style: { display: "none" },
            onChange: Se
          }, null, 40, Zr)
        ], 64)) : ue("", !0),
        e.modelValue && (R.value || !e.uploadEnabled) ? (y(), C("div", {
          key: 4,
          class: "image-upload-preview url-preview",
          style: Be({
            width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
            height: `${e.previewHeight || 120}px`,
            marginTop: "8px"
          })
        }, [
          t(Kn)(e.modelValue) ? (y(), C("div", {
            key: 0,
            ref_key: "svgaUrlPreviewRef",
            ref: he,
            class: "svga-preview-container"
          }, null, 512)) : t(us)(e.modelValue) ? (y(), C("video", {
            key: 1,
            src: e.modelValue,
            muted: "",
            loop: "",
            autoplay: "",
            playsinline: ""
          }, null, 8, Qr)) : (y(), C("img", {
            key: 2,
            src: e.modelValue,
            alt: "preview",
            onError: Oe
          }, null, 40, Jr))
        ], 4)) : ue("", !0),
        f(ft, {
          visible: D.value,
          "onUpdate:visible": J[2] || (J[2] = (at) => D.value = at),
          header: t(s)(t(r).CROP_IMAGE),
          width: 600,
          footer: !1,
          class: "image-crop-modal",
          onClose: De
        }, {
          default: E(() => [
            c("div", ec, [
              c("div", {
                ref_key: "cropAreaRef",
                ref: k,
                class: "image-crop-area"
              }, [
                S.value ? (y(), C("div", tc, [
                  J[4] || (J[4] = c("div", { class: "loading-spinner" }, null, -1)),
                  c("span", null, v(t(s)(t(r).IMAGE_LOADING)), 1)
                ])) : L.value ? (y(), se(t(io), {
                  key: 1,
                  ref_key: "cropperRef",
                  ref: g,
                  src: L.value,
                  style: { width: "100%", height: "100%" },
                  "resize-image": {
                    adjustStencil: !1
                  },
                  "stencil-component": t(Dn),
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
                  "stencil-size": w.value,
                  "image-restriction": "stencil",
                  "min-zoom": 0.5,
                  "max-zoom": 3,
                  zoom: N.value
                }, null, 8, ["src", "stencil-component", "stencil-props", "stencil-size", "zoom"])) : ue("", !0)
              ], 512)
            ]),
            c("div", ic, [
              f(We, {
                variant: "outline",
                shape: "round",
                onClick: De
              }, {
                default: E(() => [
                  B(v(t(s)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              f(We, {
                theme: "primary",
                shape: "round",
                disabled: S.value || !L.value,
                onClick: $e,
                class: "crop-confirm-btn"
              }, {
                default: E(() => [
                  c("span", nc, [
                    f(t(Po)),
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
}), Bi = /* @__PURE__ */ ci(ac, [["__scopeId", "data-v-8b84b2f0"]]), oc = { class: "custom-info-section" }, sc = {
  key: 2,
  class: "custom-info-count"
}, lc = {
  key: 0,
  class: "custom-info-container"
}, rc = { class: "custom-input-wrap" }, cc = { class: "custom-input-wrap custom-value-wrap" }, uc = {
  key: 1,
  class: "create-success-content"
}, dc = { class: "create-success-summary" }, hc = {
  key: 0,
  class: "create-success-section"
}, vc = { class: "create-success-section-title" }, mc = { class: "stream-info-items" }, fc = { class: "stream-info-item" }, gc = { class: "stream-info-label" }, pc = { class: "stream-info-value" }, bc = { class: "stream-info-item" }, yc = { class: "stream-info-label" }, Ec = { class: "stream-info-value" }, _c = { class: "dialog-footer" }, wc = /* @__PURE__ */ Te({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, { extraFieldsSlot: o } = s, { createLive: a } = Pt(), l = n, d = P({
      get: () => s.visible,
      set: ($) => l("update:visible", $)
    }), u = ys.map(($) => ({
      value: $.value,
      label: i($.labelKey)
    })), g = ($) => te($), m = ($) => te($), h = ($) => {
      p.value.maxSeatCount = Number($) || 1;
    }, p = I(Qn()), b = I([]), R = I(!1), M = I(!1), T = I(!1), ie = I(""), G = I(""), K = I(null), q = I(""), Q = I(null), le = I(!1), { loading: he, execute: Ee } = On({
      action: async () => {
        let $ = "";
        try {
          $ = await xa({
            handle: Q.value,
            hasPendingFile: le.value,
            fallbackUrl: p.value.coverUrl,
            label: i(r.COVER_IMAGE)
          });
        } catch (De) {
          const qe = De instanceof Vi ? De.message : `${i(r.COVER_PROCESSING_FAILED)}: ${De instanceof Error ? De.message : String(De) || i(r.UNKNOWN_ERROR)}`;
          Y.error(qe);
          return;
        }
        const j = ws({
          formData: p.value,
          coverUrl: $,
          customInfos: b.value,
          useObsStreaming: T.value
        }), Se = j.liveId, Re = j.anchorId;
        await a(j), K.value = null, q.value = "";
        let $e = !T.value;
        if (T.value) {
          const De = await Cs({
            liveId: Se,
            anchorId: Re,
            onStatusChange: (qe) => {
              ie.value = qe;
            },
            messages: {
              getStreamInfoFailed: i(r.FAILED_TO_GET_STREAM_INFO),
              importAccountFailed: i(r.FAILED_TO_IMPORT_ACCOUNT),
              addRobotFailed: i(r.FAILED_TO_ADD_ROBOT),
              pickSeatFailed: i(r.FAILED_TO_PICK_SEAT),
              setupFailed: i(r.OBS_SETUP_FAILED)
            }
          });
          K.value = De.streamInfo, q.value = De.streamInfoError, G.value = De.setupError, $e = De.configuredSuccessfully;
        }
        M.value = !0, Y.success(T.value && $e ? i(r.LIVE_CREATED_SUCCESSFULLY_OBS) : i(r.LIVE_CREATED_SUCCESSFULLY));
      },
      errorMessage: i(r.REQUEST_FAILED)
    }), W = P(() => te(p.value.anchorId)), O = P(() => te(p.value.liveName));
    P(() => b.value.filter(($) => $.key.trim()).length);
    const U = P(() => {
      var $;
      return i((($ = Es(p.value.seatTemplate)) == null ? void 0 : $.descKey) || "");
    }), D = P(() => _s(p.value.seatTemplate)), L = P(() => T.value ? ie.value === "error" ? `OBS 配置失败：${G.value}` : K.value ? "OBS 已配置完成，可直接复制下方推流信息。" : q.value ? `OBS 已配置完成，但推流信息生成失败：${q.value}` : "OBS 已配置完成。" : ""), F = P(() => ie.value === "error" || !!q.value), N = ($) => {
      le.value = !!$;
    }, S = async ($, j) => {
      try {
        await La($), Y.success(i("Copy Label Copied", { label: j }));
      } catch (Se) {
        const Re = Se, $e = Re.ErrorInfo || (Re instanceof Error ? Re.message : String(Re)) || i(r.UNKNOWN_ERROR);
        Y.error(i("Copy Failed With Error", { error: $e }));
      }
    }, k = () => {
      if (b.value.length >= Ke.maxCount) {
        Y.error(i("Custom info max count exceeded", { max: Ke.maxCount }));
        return;
      }
      b.value.push({ key: "", value: "" });
    }, w = ($) => {
      b.value.splice($, 1);
    }, ee = () => {
      var $;
      p.value = Qn(), b.value = [], R.value = !1, M.value = !1, T.value = !1, ie.value = "", G.value = "", K.value = null, q.value = "", le.value = !1, ($ = Q.value) == null || $.reset();
    }, ce = () => {
      ee(), l("update:visible", !1);
    }, de = async () => {
      if (!p.value.anchorId.trim()) {
        Y.error(i(r.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (W.value > Wt) {
        Y.error(i("Anchor ID cannot exceed bytes current", { max: Wt, current: W.value }));
        return;
      }
      if (O.value > bt) {
        Y.error(i("Title cannot exceed 100 bytes current", { current: O.value }));
        return;
      }
      if (b.value.some(ti)) {
        Y.error(i(r.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      ie.value = "", await Ee();
    }, _e = () => {
      ee(), l("success"), l("update:visible", !1);
    };
    return ($, j) => {
      const Se = ae("t-input"), Re = ae("t-form-item"), $e = ae("t-select"), De = ae("t-input-number"), qe = ae("t-checkbox"), Xe = ae("t-button"), me = ae("t-form"), ut = ae("t-dialog");
      return y(), se(ut, {
        visible: d.value,
        "onUpdate:visible": j[8] || (j[8] = (fe) => d.value = fe),
        header: M.value ? t(i)(t(r).CREATE_SUCCESS) : t(i)(t(r).CREATE_LIVE),
        width: 560,
        placement: "center",
        class: "create-live-modal",
        onClose: ce
      }, {
        footer: E(() => {
          var fe, Ze;
          return [
            c("div", _c, [
              M.value ? (y(), se(Xe, {
                key: 1,
                theme: "primary",
                shape: "round",
                onClick: _e
              }, {
                default: E(() => [
                  B(v(t(i)(t(r).COMPLETE)), 1)
                ]),
                _: 1
              })) : (y(), C(pe, { key: 0 }, [
                f(Xe, {
                  variant: "outline",
                  shape: "round",
                  onClick: ce
                }, {
                  default: E(() => [
                    B(v(t(i)(t(r).CANCEL)), 1)
                  ]),
                  _: 1
                }),
                f(Xe, {
                  theme: "primary",
                  shape: "round",
                  loading: t(he),
                  disabled: t(he) || !p.value.anchorId.trim() || ((fe = Q.value) == null ? void 0 : fe.isValidating) || ((Ze = Q.value) == null ? void 0 : Ze.hasUrlError),
                  onClick: de
                }, {
                  default: E(() => [
                    B(v(t(he) ? t(i)(t(r).CREATING) : t(i)(t(r).CREATE)), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64))
            ])
          ];
        }),
        default: E(() => [
          M.value ? (y(), C("div", uc, [
            c("div", dc, [
              j[9] || (j[9] = c("div", { class: "create-success-icon" }, [
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
              L.value ? (y(), C("p", {
                key: 0,
                class: ye(["create-success-description", { "is-error": F.value }])
              }, v(L.value), 3)) : ue("", !0)
            ]),
            K.value ? (y(), C("div", hc, [
              c("div", vc, v(t(i)(t(r).STREAM_INFO)), 1),
              c("div", mc, [
                c("div", fc, [
                  c("div", gc, [
                    c("span", null, v(t(i)(t(r).SERVER_URL)), 1),
                    c("button", {
                      class: "action-link",
                      onClick: j[6] || (j[6] = (fe) => S(K.value.serverUrl, t(i)(t(r).SERVER_URL)))
                    }, [
                      f(t(Dt)),
                      B(" " + v(t(i)(t(r).COPY)), 1)
                    ])
                  ]),
                  c("code", pc, v(K.value.serverUrl), 1)
                ]),
                c("div", bc, [
                  c("div", yc, [
                    c("span", null, v(t(i)(t(r).STREAM_KEY)), 1),
                    c("button", {
                      class: "action-link",
                      onClick: j[7] || (j[7] = (fe) => S(K.value.streamKey, t(i)(t(r).STREAM_KEY)))
                    }, [
                      f(t(Dt)),
                      B(" " + v(t(i)(t(r).COPY)), 1)
                    ])
                  ]),
                  c("code", Ec, v(K.value.streamKey), 1)
                ])
              ])
            ])) : ue("", !0)
          ])) : (y(), se(me, {
            key: 0,
            class: "create-live-form",
            "label-width": t(oi)(100),
            colon: !1
          }, {
            default: E(() => [
              f(Re, {
                label: t(i)(t(r).LIVE_HOST),
                "required-mark": !0
              }, {
                default: E(() => [
                  f(Se, {
                    modelValue: p.value.anchorId,
                    "onUpdate:modelValue": j[0] || (j[0] = (fe) => p.value.anchorId = fe),
                    placeholder: t(i)(t(r).ENTER_ANCHOR_ID),
                    status: W.value > t(Wt) ? "error" : "default",
                    tips: W.value > t(Wt) ? t(i)("Anchor ID cannot exceed bytes", { max: t(Wt) }) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: ye(["input-suffix-count", { "byte-overflow": W.value > t(Wt) }])
                      }, v(W.value) + "/" + v(t(Wt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(Re, {
                label: t(i)(t(r).LIVE_TITLE)
              }, {
                default: E(() => [
                  f(Se, {
                    modelValue: p.value.liveName,
                    "onUpdate:modelValue": j[1] || (j[1] = (fe) => p.value.liveName = fe),
                    placeholder: t(i)(t(r).ENTER_LIVE_TITLE),
                    status: O.value > t(bt) ? "error" : "default",
                    tips: O.value > t(bt) ? t(i)(t(r).TITLE_CANNOT_EXCEED_100_BYTES) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: ye(["input-suffix-count", { "byte-overflow": O.value > t(bt) }])
                      }, v(O.value) + "/" + v(t(bt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(Re, {
                label: t(i)(t(r).COVER_IMAGE)
              }, {
                default: E(() => [
                  f(Bi, {
                    ref_key: "coverUploadRef",
                    ref: Q,
                    modelValue: p.value.coverUrl,
                    "onUpdate:modelValue": j[2] || (j[2] = (fe) => p.value.coverUrl = fe),
                    type: "cover",
                    "upload-enabled": e.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": D.value,
                    placeholder: t(i)(t(r).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": e.uploadEnabled,
                    onFileReady: N
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(Re, {
                label: t(i)(t(r).LAYOUT_TEMPLATE),
                "required-mark": !0,
                help: U.value
              }, {
                default: E(() => [
                  f($e, {
                    modelValue: p.value.seatTemplate,
                    "onUpdate:modelValue": j[3] || (j[3] = (fe) => p.value.seatTemplate = fe),
                    options: t(u),
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              p.value.seatTemplate === "AudioSalon" || p.value.seatTemplate === "Karaoke" ? (y(), se(Re, {
                key: 0,
                label: t(i)(t(r).MAX_SEATS),
                help: t(i)(t(r).MAX_SEATS_HELP)
              }, {
                default: E(() => [
                  f(De, {
                    "model-value": p.value.maxSeatCount,
                    "onUpdate:modelValue": h,
                    min: 1,
                    max: 16,
                    status: p.value.maxSeatCount < 1 || p.value.maxSeatCount > 16 ? "error" : "default",
                    tips: p.value.maxSeatCount < 1 || p.value.maxSeatCount > 16 ? t(i)(t(r).SEAT_COUNT_RANGE_1_16) : "",
                    placeholder: t(i)(t(r).ENTER_MAX_SEAT_COUNT),
                    theme: "normal",
                    style: { width: "100%" }
                  }, null, 8, ["model-value", "status", "tips", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "help"])) : ue("", !0),
              f(Re, {
                label: t(i)(t(r).STREAMING_METHOD),
                help: t(i)(t(r).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
              }, {
                default: E(() => [
                  f(qe, {
                    modelValue: T.value,
                    "onUpdate:modelValue": j[4] || (j[4] = (fe) => T.value = fe)
                  }, {
                    default: E(() => [
                      B(v(t(i)(t(r).USE_OBS_STREAMING)), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              c("div", oc, [
                c("div", {
                  class: "custom-info-toggle",
                  onClick: j[5] || (j[5] = (fe) => R.value = !R.value)
                }, [
                  R.value ? (y(), se(t($i), {
                    key: 0,
                    size: "16"
                  })) : (y(), se(t(Aa), {
                    key: 1,
                    size: "16"
                  })),
                  c("span", null, v(t(i)(t(r).CUSTOM_INFORMATION)), 1),
                  b.value.length > 0 ? (y(), C("span", sc, v(b.value.length), 1)) : ue("", !0)
                ]),
                R.value ? (y(), C("div", lc, [
                  (y(!0), C(pe, null, Ne(b.value, (fe, Ze) => (y(), C("div", {
                    key: Ze,
                    class: "custom-info-row"
                  }, [
                    c("div", rc, [
                      f(Se, {
                        modelValue: fe.key,
                        "onUpdate:modelValue": (ze) => fe.key = ze,
                        placeholder: t(i)(t(r).ENTER_KEY),
                        status: g(fe.key) > t(Ke).maxKeyBytes || t(ti)(fe) ? "error" : "default",
                        tips: g(fe.key) > t(Ke).maxKeyBytes ? t(i)("Key exceeds byte limit", { max: t(Ke).maxKeyBytes }) : t(ti)(fe) ? t(i)(t(r).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    c("div", cc, [
                      f(Se, {
                        modelValue: fe.value,
                        "onUpdate:modelValue": (ze) => fe.value = ze,
                        placeholder: t(i)(t(r).ENTER_VALUE),
                        status: m(fe.value) > t(Ke).maxValueBytes ? "error" : "default",
                        tips: m(fe.value) > t(Ke).maxValueBytes ? t(i)(t(r).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    f(Xe, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ze) => w(Ze)
                    }, {
                      default: E(() => [
                        f(t(Wi))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  b.value.length < t(Ke).maxCount ? (y(), se(Xe, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: k,
                    theme: "primary"
                  }, {
                    icon: E(() => [
                      f(t(Sn))
                    ]),
                    default: E(() => [
                      B(" " + v(t(i)(t(r).ADD)), 1)
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
}), Cc = /* @__PURE__ */ ci(wc, [["__scopeId", "data-v-a06528b4"]]), Et = /* @__PURE__ */ Te({
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
    const n = e, i = I(!1);
    return xo((s) => n.slotComponent ? (console.error("[LiveManager Slot] render failed:", s), i.value = !0, !1) : !0), (s, o) => e.slotComponent && !i.value ? (y(), se(ai(e.slotComponent), No(In({ key: 0 }, e.slotProps)), null, 16)) : ue("", !0);
  }
}), Ic = { class: "custom-info-section" }, Ac = {
  key: 2,
  class: "custom-info-count"
}, Mc = {
  key: 0,
  class: "custom-info-container"
}, Tc = { class: "custom-input-wrap" }, Sc = { class: "custom-input-wrap custom-value-wrap" }, Rc = { class: "dialog-footer" }, Lc = /* @__PURE__ */ Te({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    room: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), { fetchLiveDetail: s, updateLive: o } = Pt(), a = e, l = P(() => a.room ? "RoomId" in a.room && a.room.RoomId ? a.room.RoomId : "id" in a.room && a.room.id ? a.room.id : "" : ""), d = n, u = P({
      get: () => a.visible,
      set: (O) => d("update:visible", O)
    }), g = (O) => te(O), m = (O) => te(O), h = I(Jn()), p = I([]), b = I(!1), R = I([]), M = I(ea), T = I(null), ie = I(!1), { loading: G, execute: K } = On({
      action: async (O) => {
        var D, L;
        const U = ((D = a.room) == null ? void 0 : D.RoomId) || ((L = a.room) == null ? void 0 : L.id) || "";
        return o({
          liveId: U,
          ...O
        });
      },
      successMessage: i(r.LIVE_INFO_UPDATED),
      errorMessage: i("Update failed"),
      onSuccess: () => {
        d("success", {
          liveName: h.value.liveName.trim(),
          coverUrl: h.value.coverUrl
        }), Ee();
      }
    }), q = (O) => {
      ie.value = !!O;
    }, Q = P(() => te(h.value.liveName));
    P(() => p.value.filter((O) => O.key.trim()).length), Me([() => {
      var O, U;
      return ((O = a.room) == null ? void 0 : O.RoomId) || ((U = a.room) == null ? void 0 : U.id);
    }, () => a.visible], async ([O, U]) => {
      const D = a.room;
      if (D && U) {
        const L = "RoomName" in D ? D.RoomName : D.liveName || "", F = "CoverURL" in D ? D.CoverURL : D.coverUrl || "", N = "RoomId" in D ? D.RoomId : D.id;
        h.value = {
          liveName: L || "",
          coverUrl: F || ""
        }, F ? M.value = await Is(F) : M.value = ea;
        try {
          const S = await s(N), k = ta(S == null ? void 0 : S.customInfo);
          p.value = k, b.value = k.length > 0, R.value = k.map((w) => w.key);
        } catch {
          const S = "CustomInfo" in D ? D.CustomInfo : D.customInfo, k = ta(S);
          p.value = k, b.value = k.length > 0, R.value = k.map((w) => w.key);
        }
      }
    }, { immediate: !0 });
    const le = () => {
      if (p.value.length >= Ke.maxCount) {
        Y.error(i("Custom info max count exceeded", { max: Ke.maxCount }));
        return;
      }
      p.value.push({ key: "", value: "" });
    }, he = (O) => {
      p.value.splice(O, 1);
    }, Ee = () => {
      var O;
      p.value = [], b.value = !1, R.value = [], ie.value = !1, (O = T.value) == null || O.reset(), h.value = Jn(), d("update:visible", !1);
    }, W = async () => {
      if (a.room) {
        if (!h.value.liveName.trim()) {
          Y.error(i(r.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (Q.value > bt) {
          Y.error(i("Title cannot exceed 100 bytes current", { current: Q.value }));
          return;
        }
        if (p.value.some(ti)) {
          Y.error(i(r.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let O = "";
          try {
            O = await xa({
              handle: T.value,
              hasPendingFile: ie.value,
              fallbackUrl: h.value.coverUrl,
              label: i(r.COVER_IMAGE)
            });
          } catch (F) {
            const N = F instanceof Vi ? F.message : `${i(r.COVER_PROCESSING_FAILED)}: ${F instanceof Error ? F.message : String(F) || i(r.UNKNOWN_ERROR)}`;
            Y.error(N);
            return;
          }
          const U = As(p.value);
          if (U) {
            U.type === "key-too-long" ? Y.error(i("Key {key} exceeds {max} bytes", { key: U.key, max: U.max })) : U.type === "value-too-long" ? Y.error(i("Key {key} value exceeds 2KB", { key: U.key })) : U.type === "max-count" ? Y.error(i("Custom info max count", { max: U.max })) : Y.error(i(r.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const D = Ms(p.value), L = Ts(R.value, D);
          await K({
            roomName: h.value.liveName.trim(),
            coverUrl: O || void 0,
            customInfo: Object.keys(D).length > 0 ? D : void 0,
            deleteKeys: L.length > 0 ? L : void 0
          });
        } catch (O) {
          console.error("[EditLiveModal] Update failed:", O);
        }
      }
    };
    return (O, U) => {
      const D = ae("t-input"), L = ae("t-form-item"), F = ae("t-button"), N = ae("t-form"), S = ae("t-dialog");
      return y(), se(S, {
        visible: u.value,
        "onUpdate:visible": U[3] || (U[3] = (k) => u.value = k),
        header: t(i)(t(r).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: Ee
      }, {
        footer: E(() => {
          var k, w;
          return [
            c("div", Rc, [
              f(F, {
                variant: "outline",
                shape: "round",
                onClick: Ee
              }, {
                default: E(() => [
                  B(v(t(i)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              f(F, {
                theme: "primary",
                shape: "round",
                loading: t(G),
                disabled: t(G) || !h.value.liveName.trim() || ((k = T.value) == null ? void 0 : k.isValidating) || ((w = T.value) == null ? void 0 : w.hasUrlError),
                onClick: W
              }, {
                default: E(() => [
                  B(v(t(G) ? t(i)(t(r).SAVING) : t(i)(t(r).SAVE)), 1)
                ]),
                _: 1
              }, 8, ["loading", "disabled"])
            ])
          ];
        }),
        default: E(() => [
          f(N, {
            class: "edit-live-form",
            "label-width": t(oi)(100),
            colon: !1
          }, {
            default: E(() => [
              f(L, {
                label: t(i)(t(r).LIVE_ID)
              }, {
                default: E(() => [
                  f(D, {
                    value: l.value,
                    disabled: "",
                    readonly: ""
                  }, null, 8, ["value"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(L, {
                label: t(i)(t(r).LIVE_TITLE),
                "required-mark": !0
              }, {
                default: E(() => [
                  f(D, {
                    modelValue: h.value.liveName,
                    "onUpdate:modelValue": U[0] || (U[0] = (k) => h.value.liveName = k),
                    placeholder: t(i)(t(r).ENTER_LIVE_TITLE),
                    status: Q.value > t(bt) ? "error" : "default",
                    tips: Q.value > t(bt) ? t(i)(t(r).TITLE_CANNOT_EXCEED_100_BYTES) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: ye(["input-suffix-count", { "byte-overflow": Q.value > t(bt) }])
                      }, v(Q.value) + "/" + v(t(bt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(L, {
                label: t(i)(t(r).COVER_IMAGE)
              }, {
                default: E(() => [
                  f(Bi, {
                    ref_key: "coverUploadRef",
                    ref: T,
                    modelValue: h.value.coverUrl,
                    "onUpdate:modelValue": U[1] || (U[1] = (k) => h.value.coverUrl = k),
                    type: "cover",
                    "upload-enabled": e.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": M.value,
                    placeholder: t(i)(t(r).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": e.uploadEnabled,
                    onFileReady: q
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              f(Et, {
                "slot-component": e.extraFieldsSlot,
                "slot-props": { mode: "edit", room: e.room, formData: { ...h.value }, customInfos: [...p.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              c("div", Ic, [
                c("div", {
                  class: "custom-info-toggle",
                  onClick: U[2] || (U[2] = (k) => b.value = !b.value)
                }, [
                  b.value ? (y(), se(t($i), {
                    key: 0,
                    size: "16"
                  })) : (y(), se(t(Aa), {
                    key: 1,
                    size: "16"
                  })),
                  c("span", null, v(t(i)(t(r).CUSTOM_INFORMATION)), 1),
                  p.value.length > 0 ? (y(), C("span", Ac, v(p.value.length), 1)) : ue("", !0)
                ]),
                b.value ? (y(), C("div", Mc, [
                  (y(!0), C(pe, null, Ne(p.value, (k, w) => (y(), C("div", {
                    key: w,
                    class: "custom-info-row"
                  }, [
                    c("div", Tc, [
                      f(D, {
                        modelValue: k.key,
                        "onUpdate:modelValue": (ee) => k.key = ee,
                        placeholder: t(i)(t(r).ENTER_KEY),
                        status: g(k.key) > t(Ke).maxKeyBytes || t(ti)(k) ? "error" : "default",
                        tips: g(k.key) > t(Ke).maxKeyBytes ? t(i)("Key exceeds byte limit", { max: t(Ke).maxKeyBytes }) : t(ti)(k) ? t(i)(t(r).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    c("div", Sc, [
                      f(D, {
                        modelValue: k.value,
                        "onUpdate:modelValue": (ee) => k.value = ee,
                        placeholder: t(i)(t(r).ENTER_VALUE),
                        status: m(k.value) > t(Ke).maxValueBytes ? "error" : "default",
                        tips: m(k.value) > t(Ke).maxValueBytes ? t(i)(t(r).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    f(F, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ee) => he(w)
                    }, {
                      default: E(() => [
                        f(t(Wi))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  p.value.length < t(Ke).maxCount ? (y(), se(F, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: le,
                    theme: "primary"
                  }, {
                    icon: E(() => [
                      f(t(Sn))
                    ]),
                    default: E(() => [
                      B(" " + v(t(i)(t(r).ADD)), 1)
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
}), xc = /* @__PURE__ */ ci(Lc, [["__scopeId", "data-v-0a1ae480"]]), Nc = {
  key: 0,
  class: "fixed-header-table__loading"
}, kc = {
  key: 1,
  class: "fixed-header-table__empty"
}, Zi = /* @__PURE__ */ Te({
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
    fitContentMaxRows: { type: Number, default: Ys }
  },
  setup(e) {
    function n() {
      if (typeof document > "u") return 0;
      const L = document.createElement("div");
      L.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(L);
      const F = L.offsetWidth - L.clientWidth;
      return document.body.removeChild(L), F;
    }
    const i = e, s = I(null), o = I(null), a = I(null), l = I(null), d = I(null), u = I({});
    let g = {}, m = null, h = null, p = 0, b = null;
    const R = (L) => L.fitContent || i.fitContent && L.width === void 0, M = (L) => typeof L == "number" ? `${L}px` : L, T = (L) => {
      if (R(L)) {
        const F = u.value[L.key];
        if (F !== void 0) return `${F}px`;
        if (typeof L.minWidth == "number") return `${L.minWidth}px`;
      }
      return M(L.width);
    }, ie = P(() => {
      const L = {};
      for (const F of i.columns) L[F.key] = { width: T(F) };
      return L;
    }), G = P(() => {
      const L = {};
      for (const F of i.columns) {
        const N = { textAlign: F.align };
        F.ellipsis ? (N.whiteSpace = "nowrap", N.overflow = "hidden", N.textOverflow = "ellipsis") : R(F) && !F.flexible && (N.whiteSpace = "nowrap"), L[F.key] = N;
      }
      return L;
    }), K = P(() => js(i.columns, u.value, R) ?? {}), q = () => {
      var de, _e;
      const L = i.columns.map(($, j) => ({ column: $, index: j })).filter(({ column: $ }) => R($));
      if (L.length === 0 || typeof document > "u") {
        g = {};
        return;
      }
      const F = ((de = a.value) == null ? void 0 : de.querySelectorAll("thead th")) || [], N = Array.from(((_e = d.value) == null ? void 0 : _e.querySelectorAll("tbody tr")) || []).slice(0, i.fitContentMaxRows), S = [], k = [];
      L.forEach(({ column: $, index: j }) => {
        const Se = F[j];
        Se && (S.push(Se), k.push($.key)), N.forEach((Re) => {
          const $e = Re.children[j];
          $e && (S.push($e), k.push($.key));
        });
      });
      const w = Xs(S), ee = {};
      w.forEach(($, j) => {
        const Se = k[j];
        (ee[Se] === void 0 || $ > ee[Se]) && (ee[Se] = $);
      });
      const ce = {};
      for (const { column: $ } of L)
        ee[$.key] !== void 0 && (ce[$.key] = Ks(
          ee[$.key],
          $.minWidth,
          $.maxWidth
        ));
      g = ce;
    }, Q = () => {
      var S;
      const L = g;
      if (Object.keys(L).length === 0) {
        Object.keys(u.value).length > 0 && (u.value = {});
        return;
      }
      const F = ((S = l.value) == null ? void 0 : S.clientWidth) ?? 0, N = qs(
        i.columns,
        L,
        F,
        R
      );
      Zs(u.value, N) || (u.value = N);
    }, le = () => {
      q(), Q();
    }, he = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => {
        tt(le);
      });
    }, Ee = () => {
      cancelAnimationFrame(p), p = requestAnimationFrame(() => {
        tt(Q);
      });
    }, W = () => {
      m && m.disconnect(), m = new ResizeObserver(Ee), s.value && m.observe(s.value);
    }, O = (L, F) => typeof i.rowKey == "function" ? i.rowKey(L, F) : L[i.rowKey] ?? F, U = (L, F) => typeof i.rowClassName == "function" ? i.rowClassName(L, F) : i.rowClassName, D = () => {
      var S;
      const L = s.value, F = (S = d.value) == null ? void 0 : S.parentElement;
      if (!L || !F) return;
      const N = F.scrollHeight > F.clientHeight ? n() : 0;
      L.style.setProperty("--scrollbar-width", `${N}px`);
    };
    return At(() => {
      tt(() => {
        le(), W(), D();
      }), h = new MutationObserver((L) => {
        for (const F of L)
          if (F.type === "attributes" && F.attributeName === "lang") {
            tt(() => {
              u.value = {}, g = {}, he();
            });
            break;
          }
      }), h.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), tt(() => {
        l.value && o.value && (b = () => {
          o.value && l.value && (o.value.scrollLeft = l.value.scrollLeft);
        }, l.value.addEventListener("scroll", b));
      });
    }), Me(() => i.data, () => {
      tt(D);
    }), Me(
      () => [i.columns, i.data, i.loading, i.fitContent, i.fitContentMaxRows],
      () => {
        tt(() => {
          le(), W();
        });
      },
      { deep: !0 }
    ), Ei(() => {
      cancelAnimationFrame(p), m == null || m.disconnect(), m = null, h == null || h.disconnect(), h = null, l.value && b && (l.value.removeEventListener("scroll", b), b = null);
    }), (L, F) => (y(), C("div", {
      ref_key: "rootRef",
      ref: s,
      class: ye(["fixed-header-table", e.className])
    }, [
      c("div", {
        ref_key: "headerRef",
        ref: o,
        class: ye(["fixed-header-table__header", e.headerClassName])
      }, [
        c("table", {
          ref_key: "headerTableRef",
          ref: a,
          class: ye(["fixed-header-table__table", e.tableClassName]),
          style: Be(K.value)
        }, [
          c("colgroup", null, [
            (y(!0), C(pe, null, Ne(e.columns, (N) => (y(), C("col", {
              key: N.key,
              style: Be(ie.value[N.key])
            }, null, 4))), 128))
          ]),
          c("thead", null, [
            c("tr", null, [
              (y(!0), C(pe, null, Ne(e.columns, (N) => (y(), C("th", {
                key: N.key,
                class: ye(N.className),
                style: Be(G.value[N.key])
              }, [
                vt(L.$slots, `header-${N.key}`, { column: N }, () => [
                  B(v(N.title), 1)
                ])
              ], 6))), 128))
            ])
          ])
        ], 6)
      ], 2),
      c("div", {
        ref_key: "bodyRef",
        ref: l,
        class: ye(["fixed-header-table__body", e.bodyClassName]),
        style: Be(e.bodyStyle)
      }, [
        e.loading ? (y(), C("div", Nc, [
          vt(L.$slots, "loading")
        ])) : e.data.length === 0 ? (y(), C("div", kc, [
          vt(L.$slots, "empty")
        ])) : (y(), C("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: d,
          class: ye(["fixed-header-table__table", e.tableClassName]),
          style: Be(K.value)
        }, [
          c("colgroup", null, [
            (y(!0), C(pe, null, Ne(e.columns, (N) => (y(), C("col", {
              key: N.key,
              style: Be(ie.value[N.key])
            }, null, 4))), 128))
          ]),
          c("tbody", null, [
            (y(!0), C(pe, null, Ne(e.data, (N, S) => (y(), C("tr", {
              key: O(N, S),
              class: ye(U(N, S))
            }, [
              (y(!0), C(pe, null, Ne(e.columns, (k) => (y(), C("td", {
                key: k.key,
                class: ye(k.className),
                style: Be(G.value[k.key])
              }, [
                vt(L.$slots, `cell-${k.key}`, {
                  row: N,
                  column: k,
                  index: S
                }, () => [
                  B(v(N[k.key] ?? ""), 1)
                ])
              ], 6))), 128))
            ], 2))), 128))
          ])
        ], 6))
      ], 6)
    ], 2));
  }
}), Dc = ["title", "disabled", "onClick"], Oc = { class: "list-action-button__text" }, Uc = {
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
    return (i, s) => (y(), C("div", {
      class: ye(["list-action-buttons", e.className])
    }, [
      (y(!0), C(pe, null, Ne(e.actions, (o) => (y(), C("button", {
        key: o.key,
        type: "button",
        class: ye(["list-action-button", { "list-action-button--danger": o.danger }]),
        title: o.title,
        disabled: o.disabled,
        onClick: (a) => n(o, a)
      }, [
        o.icon ? (y(), se(ai(o.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : ue("", !0),
        c("span", Oc, v(o.label), 1),
        o.suffixCaret ? (y(), C("span", Uc)) : ue("", !0)
      ], 10, Dc))), 128))
    ], 2));
  }
}), $c = { class: "live-list-page" }, Pc = { class: "live-list-header" }, Fc = { class: "live-list-title" }, Vc = { class: "header-actions" }, zc = { class: "live-list-id-cell" }, Gc = { class: "live-list-id-text" }, Bc = ["title"], Wc = { class: "live-list-cover-cell" }, Hc = ["src", "alt"], Yc = { class: "live-list-text" }, jc = { class: "live-list-text" }, Xc = { class: "live-list-loading-container" }, Kc = { class: "live-list-loading-text" }, qc = { class: "live-list-empty-container" }, Zc = { class: "live-list-empty-text" }, Qc = { class: "live-list-pagination" }, Jc = { class: "page-info" }, eu = { class: "live-info-form" }, tu = { class: "live-info-section" }, iu = { class: "live-info-section-title" }, nu = { class: "live-info-card" }, au = { class: "live-info-row" }, ou = { class: "live-info-label" }, su = { class: "live-info-value-area" }, lu = { class: "live-info-value" }, ru = { class: "live-info-row" }, cu = { class: "live-info-label" }, uu = { class: "live-info-value-area" }, du = { class: "live-info-value" }, hu = { class: "live-info-row" }, vu = { class: "live-info-label" }, mu = { class: "live-info-value-area" }, fu = { class: "live-info-value" }, gu = { class: "live-info-row" }, pu = { class: "live-info-label" }, bu = { class: "live-info-value-area" }, yu = { class: "live-info-value live-info-value-url" }, Eu = {
  key: 0,
  class: "live-info-section"
}, _u = { class: "live-info-section-title" }, wu = { class: "live-info-card" }, Cu = { class: "live-info-row" }, Iu = { class: "live-info-label" }, Au = { class: "live-info-value-area" }, Mu = { class: "live-info-value live-info-value-url" }, Tu = { class: "live-info-row" }, Su = { class: "live-info-label" }, Ru = { class: "live-info-value-area" }, Lu = { class: "live-info-value live-info-value-url" }, xu = {
  key: 1,
  class: "live-info-row"
}, Nu = {
  class: "live-info-label",
  style: { width: "auto" }
}, ku = { class: "dialog-footer" }, gm = /* @__PURE__ */ Te({
  __name: "live-list",
  setup(e) {
    var h;
    const { t: n } = ke(), i = _i(), { endLive: s } = Pt(), o = (h = Yi().components) == null ? void 0 : h.roomList, a = new Ss({
      endLive: s,
      onEnterLive: (p) => {
        i.push({ path: `/live-control/${p}` });
      },
      t: n,
      toast: {
        success: (p) => Y.success(p),
        error: (p) => Y.error(p)
      }
    }), l = Oi(a.getState()), d = a.subscribe(() => {
      l.value = a.getState();
    }), u = Oi(!1);
    At(async () => {
      u.value = await Na(), await a.init();
    }), Ei(() => {
      d(), a.dispose();
    });
    const g = P(() => Rs({ hasExtraColumn: !!(o != null && o.tableExtraColumns) }).map((b) => ({
      ...b,
      title: b.i18nKey ? n(b.i18nKey) : ""
    }))), m = (p) => xs({
      live: p,
      t: n,
      icons: {
        enter: Vo,
        detail: Nt,
        edit: Pi,
        delete: Fo
      },
      onEnter: (b) => a.enterLive(b),
      onDetail: (b) => a.showDetail(b),
      onEdit: (b) => a.openEditModal(b),
      onDelete: (b) => a.requestDelete(b)
    });
    return (p, b) => {
      var G, K, q;
      const R = ae("t-input"), M = ae("t-button"), T = ae("t-card"), ie = ae("t-dialog");
      return y(), C("div", $c, [
        c("div", Pc, [
          c("h1", Fc, v(t(n)(t(r).LIVE_LIST)), 1),
          f(Et, {
            "slot-component": (G = t(o)) == null ? void 0 : G.beforeToolbar,
            "slot-props": { lives: l.value.lives, loading: l.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          c("div", Vc, [
            f(R, {
              "model-value": l.value.searchInput,
              placeholder: t(n)(t(r).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: t(ia)(l.value.searchInput, t(bi)) ? "error" : "default",
              tips: t(ia)(l.value.searchInput, t(bi)) ? t(n)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": b[1] || (b[1] = (Q) => t(a).setSearchInput(String(Q ?? ""))),
              onEnter: b[2] || (b[2] = () => t(a).search()),
              onClear: b[3] || (b[3] = () => t(a).clearSearch())
            }, {
              suffixIcon: E(() => [
                f(t(Mn), {
                  style: { cursor: "pointer" },
                  onClick: b[0] || (b[0] = () => t(a).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            f(M, {
              variant: "outline",
              shape: "round",
              disabled: l.value.refreshing || l.value.loading,
              onClick: b[4] || (b[4] = () => t(a).refresh())
            }, {
              icon: E(() => [
                f(t(Tn), {
                  class: ye({ spinning: l.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            f(M, {
              theme: "primary",
              shape: "round",
              onClick: b[5] || (b[5] = () => t(a).openCreateModal())
            }, {
              icon: E(() => [
                f(t(Sn))
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).CREATE_LIVE)), 1)
              ]),
              _: 1
            })
          ]),
          f(Et, {
            "slot-component": (K = t(o)) == null ? void 0 : K.afterToolbar,
            "slot-props": { lives: l.value.lives, loading: l.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        f(T, { class: "live-list-card" }, {
          default: E(() => {
            var Q;
            return [
              f(Zi, {
                columns: g.value,
                data: l.value.lives,
                "row-key": "liveId",
                loading: l.value.loading,
                "table-class-name": "live-list-table",
                "body-class-name": "live-list-content",
                "row-class-name": "live-list-row"
              }, _a({
                "cell-liveId": E(({ row: le }) => [
                  c("div", zc, [
                    c("span", Gc, v(le.liveId), 1),
                    f(t(Dt), {
                      class: "copy-icon",
                      onClick: (he) => t(a).copyText(le.liveId, t(n)(t(r).LIVE_ID))
                    }, null, 8, ["onClick"])
                  ])
                ]),
                "cell-liveName": E(({ row: le }) => [
                  c("span", {
                    class: "live-list-text",
                    title: le.liveName || "-"
                  }, v(le.liveName || "-"), 9, Bc)
                ]),
                "cell-coverUrl": E(({ row: le }) => [
                  c("div", Wc, [
                    c("img", {
                      src: le.coverUrl || t(Rn),
                      alt: le.liveName,
                      class: "live-list-cover-image"
                    }, null, 8, Hc)
                  ])
                ]),
                "cell-anchor": E(({ row: le }) => {
                  var he;
                  return [
                    c("span", Yc, v(((he = le.anchor) == null ? void 0 : he.userId) || "-"), 1)
                  ];
                }),
                "cell-createdAt": E(({ row: le }) => [
                  c("span", jc, v(t(Ls)(le.createdAt)), 1)
                ]),
                "cell-actions": E(({ row: le }) => {
                  var he;
                  return [
                    f($t, {
                      actions: m(le)
                    }, null, 8, ["actions"]),
                    f(Et, {
                      "slot-component": (he = t(o)) == null ? void 0 : he.rowActions,
                      "slot-props": { live: le }
                    }, null, 8, ["slot-component", "slot-props"])
                  ];
                }),
                loading: E(() => [
                  c("div", Xc, [
                    b[20] || (b[20] = c("div", { class: "live-list-loading-spinner" }, null, -1)),
                    c("span", Kc, v(t(n)(t(r).LOADING)), 1)
                  ])
                ]),
                empty: E(() => [
                  c("div", qc, [
                    c("span", Zc, v(t(n)(t(r).NO_LIVE_DATA)), 1)
                  ])
                ]),
                _: 2
              }, [
                Ne(g.value, (le) => ({
                  name: `header-${le.key}`,
                  fn: E(() => [
                    B(v(le.title), 1)
                  ])
                })),
                (Q = t(o)) != null && Q.tableExtraColumns ? {
                  name: "cell-customer-extra",
                  fn: E(({ row: le }) => [
                    f(Et, {
                      "slot-component": t(o).tableExtraColumns,
                      "slot-props": { live: le }
                    }, null, 8, ["slot-component", "slot-props"])
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["columns", "data", "loading"])
            ];
          }),
          _: 1
        }),
        c("div", Qc, [
          f(M, {
            variant: "outline",
            size: "small",
            disabled: l.value.currentPage <= 1,
            onClick: b[6] || (b[6] = () => t(a).goToPage(1))
          }, {
            default: E(() => [
              B(v(t(n)(t(r).FIRST_PAGE)), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          f(M, {
            variant: "outline",
            size: "small",
            disabled: l.value.currentPage <= 1,
            onClick: b[7] || (b[7] = () => t(a).goToPage(l.value.currentPage - 1))
          }, {
            default: E(() => [
              B(v(t(n)(t(r).PREVIOUS_PAGE)), 1)
            ]),
            _: 1
          }, 8, ["disabled"]),
          c("span", Jc, v(t(n)(t(r).PAGE, { page: l.value.currentPage })), 1),
          f(M, {
            variant: "outline",
            size: "small",
            disabled: !l.value.hasMoreData,
            onClick: b[8] || (b[8] = () => t(a).goToPage(l.value.currentPage + 1))
          }, {
            default: E(() => [
              B(v(t(n)(t(r).NEXT_PAGE)), 1)
            ]),
            _: 1
          }, 8, ["disabled"])
        ]),
        f(Cc, {
          visible: l.value.isCreateModalVisible,
          "upload-enabled": u.value,
          "onUpdate:visible": b[9] || (b[9] = (Q) => Q ? t(a).openCreateModal() : t(a).closeCreateModal()),
          onSuccess: b[10] || (b[10] = () => t(a).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        f(xc, {
          visible: l.value.isEditModalVisible,
          room: l.value.editingLive,
          "upload-enabled": u.value,
          "extra-fields-slot": (q = t(o)) == null ? void 0 : q.roomFormExtraFields,
          "onUpdate:visible": b[11] || (b[11] = (Q) => {
            Q || t(a).closeEditModal();
          }),
          onSuccess: b[12] || (b[12] = (Q) => t(a).onLiveEdited(Q))
        }, null, 8, ["visible", "room", "upload-enabled", "extra-fields-slot"]),
        f(ie, {
          visible: l.value.confirmDialog.visible,
          header: l.value.confirmDialog.title,
          "confirm-btn": { content: t(n)(t(r).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": b[13] || (b[13] = (Q) => {
            Q || t(a).cancelDelete();
          }),
          onConfirm: b[14] || (b[14] = () => t(a).confirmDelete())
        }, {
          default: E(() => [
            c("p", null, v(l.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        f(ie, {
          visible: l.value.obsModal.visible && !!l.value.obsModal.live,
          header: t(n)(t(r).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": b[19] || (b[19] = (Q) => {
            Q || t(a).closeDetail();
          })
        }, {
          footer: E(() => [
            c("div", ku, [
              f(M, {
                variant: "outline",
                shape: "round",
                onClick: b[18] || (b[18] = () => t(a).closeDetail())
              }, {
                default: E(() => [
                  B(v(t(n)(t(r).CLOSE)), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: E(() => {
            var Q, le, he, Ee, W, O, U;
            return [
              c("div", eu, [
                c("div", tu, [
                  c("div", iu, v(t(n)(t(r).BASIC_INFORMATION)), 1),
                  c("div", nu, [
                    c("div", au, [
                      c("span", ou, v(t(n)(t(r).ANCHOR_ID)), 1),
                      c("div", su, [
                        c("span", lu, v(((le = (Q = l.value.obsModal.live) == null ? void 0 : Q.anchor) == null ? void 0 : le.userId) || "-"), 1),
                        (Ee = (he = l.value.obsModal.live) == null ? void 0 : he.anchor) != null && Ee.userId ? (y(), C("button", {
                          key: 0,
                          class: "live-info-copy-btn",
                          onClick: b[15] || (b[15] = (D) => t(a).copyText(l.value.obsModal.live.anchor.userId, t(n)(t(r).LIVE_HOST)))
                        }, [
                          f(t(Dt))
                        ])) : ue("", !0)
                      ])
                    ]),
                    c("div", ru, [
                      c("span", cu, v(t(n)(t(r).LIVE_ID)), 1),
                      c("div", uu, [
                        c("span", du, v(((W = l.value.obsModal.live) == null ? void 0 : W.liveId) || "-"), 1)
                      ])
                    ]),
                    c("div", hu, [
                      c("span", vu, v(t(n)(t(r).LIVE_TITLE)), 1),
                      c("div", mu, [
                        c("span", fu, v(((O = l.value.obsModal.live) == null ? void 0 : O.liveName) || "-"), 1)
                      ])
                    ]),
                    c("div", gu, [
                      c("span", pu, v(t(n)(t(r).LIVE_COVER)), 1),
                      c("div", bu, [
                        c("span", yu, v(((U = l.value.obsModal.live) == null ? void 0 : U.coverUrl) || "-"), 1)
                      ])
                    ])
                  ])
                ]),
                l.value.obsModal.streamInfo || l.value.obsModal.actionLoading === "stream" ? (y(), C("div", Eu, [
                  c("div", _u, v(t(n)(t(r).PUSH_STREAM_INFO)), 1),
                  c("div", wu, [
                    l.value.obsModal.streamInfo ? (y(), C(pe, { key: 0 }, [
                      c("div", Cu, [
                        c("span", Iu, v(t(n)(t(r).SERVER_URL)), 1),
                        c("div", Au, [
                          c("span", Mu, v(l.value.obsModal.streamInfo.serverUrl), 1),
                          c("button", {
                            class: "live-info-copy-btn",
                            onClick: b[16] || (b[16] = (D) => t(a).copyText(l.value.obsModal.streamInfo.serverUrl, t(n)(t(r).SERVER_URL)))
                          }, [
                            f(t(Dt))
                          ])
                        ])
                      ]),
                      c("div", Tu, [
                        c("span", Su, v(t(n)(t(r).STREAM_KEY)), 1),
                        c("div", Ru, [
                          c("span", Lu, v(l.value.obsModal.streamInfo.streamKey), 1),
                          c("button", {
                            class: "live-info-copy-btn",
                            onClick: b[17] || (b[17] = (D) => t(a).copyText(l.value.obsModal.streamInfo.streamKey, t(n)(t(r).STREAM_KEY)))
                          }, [
                            f(t(Dt))
                          ])
                        ])
                      ])
                    ], 64)) : (y(), C("div", xu, [
                      c("span", Nu, v(t(n)(t(r).GETTING_STREAM_INFO)), 1)
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
}), Du = { class: "toast-area" }, Ou = {
  key: 0,
  class: "status-success"
}, Uu = {
  key: 1,
  class: "status-error"
}, $u = /* @__PURE__ */ Te({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(e) {
    return (n, i) => (y(), C("div", Du, [
      e.successMsg ? (y(), C("div", Ou, v(e.successMsg), 1)) : ue("", !0),
      e.errorMsg ? (y(), C("div", Uu, v(e.errorMsg), 1)) : ue("", !0)
    ]));
  }
}), Pu = { class: "live-control-navbar" }, Fu = { class: "nav-left" }, Vu = ["viewBox", "stroke-width", "stroke-linecap"], zu = ["d"], Gu = { class: "nav-right" }, Bu = /* @__PURE__ */ Te({
  __name: "NavBar",
  props: {
    handleLeaveLive: { type: Function },
    handleViolationWarning: { type: Function },
    handleForceStopLive: { type: Function }
  },
  setup(e) {
    const { t: n } = ke();
    return (i, s) => {
      const o = ae("t-button");
      return y(), C("header", Pu, [
        c("div", Fu, [
          f(o, {
            variant: "outline",
            shape: "circle",
            class: "back-btn",
            onClick: e.handleLeaveLive,
            title: t(n)(t(r).BACK_TO_LIST)
          }, {
            icon: E(() => [
              (y(), C("svg", {
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
                }, null, 8, zu)
              ], 8, Vu))
            ]),
            _: 1
          }, 8, ["onClick", "title"]),
          s[0] || (s[0] = c("div", { class: "divider" }, null, -1)),
          c("h1", null, v(t(n)(t(r).LIVE_DETAILS)), 1)
        ]),
        c("div", Gu, [
          f(o, {
            class: "action-btn warn",
            variant: "text",
            onClick: e.handleViolationWarning
          }, {
            icon: E(() => [
              f(t(Ca))
            ]),
            default: E(() => [
              B(" " + v(t(n)(t(r).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          f(o, {
            variant: "text",
            theme: "danger",
            onClick: e.handleForceStopLive
          }, {
            icon: E(() => [
              f(t(Ia))
            ]),
            default: E(() => [
              B(" " + v(t(n)(t(r).FORCE_STOP)), 1)
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ]);
    };
  }
}), Wu = { class: "video-monitor-area" }, Hu = { class: "live-header-external" }, Yu = { class: "live-title-text" }, ju = { class: "video-stage" }, Xu = {
  key: 1,
  class: "video-blur-bg-placeholder"
}, Ku = { class: "player-container" }, qu = {
  key: 0,
  class: "mock-cover-preview"
}, Zu = ["src"], Qu = {
  key: 2,
  class: "live-state-overlay live-state-overlay--ended"
}, Ju = { class: "live-state-overlay-content" }, ed = { class: "live-state-overlay-title" }, td = /* @__PURE__ */ Te({
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
      return y(), C("section", Wu, [
        f(Et, {
          "slot-component": (o = e.liveControlSlots) == null ? void 0 : o.beforeLiveInfo,
          "slot-props": { liveInfo: e.liveInfo }
        }, null, 8, ["slot-component", "slot-props"]),
        c("div", Hu, [
          f(ji, {
            "class-name": "anchor-avatar",
            src: e.liveAnchorAvatar,
            name: e.liveAnchorName,
            title: e.liveAnchorName
          }, null, 8, ["src", "name", "title"]),
          c("span", Yu, v(e.liveEndedOverlayVisible ? t(n)(t(r).LIVE_ENDED) : ((a = e.currentLive) == null ? void 0 : a.liveName) || ((l = e.liveInfo) == null ? void 0 : l.liveName) || t(n)(t(r).LOADING)), 1)
        ]),
        c("div", ju, [
          (d = e.liveInfo) != null && d.coverUrl ? (y(), C("div", {
            key: 0,
            class: "video-blur-bg",
            style: Be({ backgroundImage: `url(${e.liveInfo.coverUrl})` })
          }, null, 4)) : (y(), C("div", Xu)),
          c("div", Ku, [
            e.isMockMode ? (y(), C(pe, { key: 0 }, [
              (u = e.liveInfo) != null && u.coverUrl ? (y(), C("div", qu, [
                c("img", {
                  src: e.liveInfo.coverUrl,
                  alt: "cover",
                  class: "mock-cover-img"
                }, null, 8, Zu)
              ])) : ue("", !0)
            ], 64)) : e.sdkReady ? (y(), se(t(ol), { key: 1 })) : ue("", !0),
            e.liveEndedOverlayVisible ? (y(), C("div", Qu, [
              c("div", Ju, [
                c("div", ed, v(t(n)(t(r).LIVE_ENDED)), 1),
                c("button", {
                  class: "live-state-overlay-btn",
                  onClick: s[0] || (s[0] = //@ts-ignore
                  (...g) => e.handleLeaveLive && e.handleLeaveLive(...g))
                }, v(t(n)(t(r).RETURN_TO_LIVE_LIST)), 1)
              ])
            ])) : ue("", !0)
          ])
        ])
      ]);
    };
  }
}), id = { class: "message-list-scroll-area barrage-list-wrapper" }, nd = ["placeholder", "disabled"], ad = ["disabled"], od = 12 * 1024, sd = /* @__PURE__ */ Te({
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
    const { t: n } = ke(), i = e, { loginUserInfo: s } = $a(), { currentLive: o } = Pt(), { audienceList: a, disableSendMessage: l } = Pa(), d = P(() => i.currentLive || o.value), u = (U) => new TextEncoder().encode(U).length, g = I(!1), m = I({ top: 0, left: 0 }), h = I(null), p = I(""), b = I(!1), R = I(null), M = I(null), T = I(null), ie = P(() => b.value || !i.liveId || !p.value.trim()), G = (U) => a.value.find((D) => D.userId === U), K = (U) => {
      const D = G(U);
      if (D)
        return D.isMessageDisabled === !0;
      const L = i.mutedList.find((F) => F.userId === U);
      return L ? L.endTime > Date.now() / 1e3 : !1;
    }, q = (U) => {
      const D = i.bannedList.find((L) => L.userId === U);
      return D ? D.endTime > Date.now() / 1e3 : !1;
    }, Q = (U, D) => {
      var k, w, ee, ce, de;
      if (U.preventDefault(), U.stopPropagation(), D.sender.userId === ((k = s.value) == null ? void 0 : k.userId) || D.sender.userId === ((ee = (w = d.value) == null ? void 0 : w.liveOwner) == null ? void 0 : ee.userId) || D.sender.userId === xi(((de = (ce = d.value) == null ? void 0 : ce.liveOwner) == null ? void 0 : de.userId) || ""))
        return;
      const L = U.target.closest(".message-item");
      if (!L) return;
      const F = L.getBoundingClientRect(), N = F.bottom + 4, S = Math.min(
        F.left,
        window.innerWidth - 150
      );
      m.value = { top: N, left: Math.max(0, S) }, h.value = D, g.value = !0;
    }, le = () => {
      var U, D;
      if (h.value && i.onBanUser) {
        const L = h.value.sender.userId;
        if (L !== xi(((D = (U = d.value) == null ? void 0 : U.liveOwner) == null ? void 0 : D.userId) || "")) {
          const F = h.value.sender.userName || h.value.sender.nameCard || h.value.sender.userId, N = q(L);
          i.onBanUser(L, F, N);
        }
      }
      g.value = !1, h.value = null;
    }, he = async () => {
      var F, N;
      if (!h.value) return;
      const U = h.value.sender.userId;
      if (U === xi(((N = (F = d.value) == null ? void 0 : F.liveOwner) == null ? void 0 : N.userId) || "")) {
        g.value = !1, h.value = null;
        return;
      }
      const D = h.value.sender.userName || h.value.sender.nameCard || h.value.sender.userId, L = K(U);
      try {
        await l({ userId: U, isDisable: !L }), console.log(L ? "解除禁言成功" : "禁言成功");
      } catch (S) {
        console.error("SDK 禁言失败，使用备用方法:", S), i.onMuteUser && i.onMuteUser(U, D, L);
      }
      g.value = !1, h.value = null;
    }, Ee = async () => {
      if (b.value) return;
      const U = p.value.trim();
      if (!U) {
        Y.warning(n(r.MESSAGE_CONTENT_REQUIRED));
        return;
      }
      if (!i.liveId) {
        Y.error(n(r.LIVE_NOT_FOUND));
        return;
      }
      if (u(U) > od) {
        Y.error(n("Message Content Too Long", { max: "12KB" }));
        return;
      }
      b.value = !0;
      try {
        const D = await ks(i.liveId, U);
        if ((D == null ? void 0 : D.ErrorCode) !== void 0 && D.ErrorCode !== 0)
          throw new Error(D.ErrorInfo || n(r.SEND_FAILED));
        if (D != null && D.ActionStatus && D.ActionStatus !== "OK")
          throw new Error(D.ErrorInfo || n(r.SEND_FAILED));
        p.value = "", Y.success(n(r.MESSAGE_SENT));
      } catch (D) {
        const L = (D == null ? void 0 : D.ErrorInfo) || (D == null ? void 0 : D.message) || n(r.UNKNOWN_HOST);
        Y.error(n("Send Failed With Error", { error: L }));
      } finally {
        b.value = !1;
      }
    }, W = Te({
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
      setup(U) {
        var k, w;
        const D = U.message.sender.nameCard || U.message.sender.userName || U.message.sender.userId, L = U.message.sender.userId === ((w = (k = d.value) == null ? void 0 : k.liveOwner) == null ? void 0 : w.userId), F = U.message.messageType === 0 ? U.message.textContent : U.message.data || "", N = Ns(F), S = () => N.map((ee, ce) => ee.type === "emoji" ? Zt("img", {
          key: ce,
          class: "message-emoji",
          src: ee.src,
          alt: ee.key
        }) : Zt("span", { key: ce, class: "message-text" }, ee.text));
        return () => Zt("div", {
          class: ["message-item", L ? "host" : ""],
          style: U.style,
          onContextMenu: (ee) => Q(ee, U.message)
        }, [
          // 主播标识
          L ? Zt("span", { class: "message-badge" }, n(r.HOST)) : null,
          // 昵称
          Zt("span", { class: "message-username", onClick: (ee) => Q(ee, U.message) }, `${D}: `),
          // 消息内容
          Zt("span", { class: "message-content" }, S())
        ]);
      }
    }), O = (U) => {
      M.value && M.value.contains(U.target) || (g.value = !1, h.value = null);
    };
    return Me(g, (U) => {
      U ? document.addEventListener("mousedown", O) : document.removeEventListener("mousedown", O);
    }), nt(() => {
      document.removeEventListener("mousedown", O);
    }), (U, D) => (y(), C("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: R
    }, [
      c("div", id, [
        f(t(rl), {
          ref_key: "barrageListRef",
          ref: T,
          Message: t(W)
        }, null, 8, ["Message"])
      ]),
      c("form", {
        class: "admin-message-composer",
        onSubmit: gi(Ee, ["prevent"])
      }, [
        pi(c("input", {
          "onUpdate:modelValue": D[0] || (D[0] = (L) => p.value = L),
          class: "admin-message-input",
          placeholder: t(n)(t(r).ENTER_MESSAGE_TO_SEND_AS_ADMIN),
          disabled: b.value || !i.liveId
        }, null, 8, nd), [
          [ko, p.value]
        ]),
        c("button", {
          type: "submit",
          class: "admin-message-send-btn",
          disabled: ie.value
        }, v(b.value ? t(n)(t(r).SENDING) : t(n)(t(r).SEND_MESSAGE)), 9, ad)
      ], 32),
      (y(), se(An, { to: "body" }, [
        g.value && h.value ? (y(), C("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: M,
          class: "user-action-dropdown",
          style: Be({
            position: "fixed",
            top: `${m.value.top}px`,
            left: `${m.value.left}px`
          })
        }, [
          c("button", {
            class: "dropdown-item",
            onClick: he
          }, [
            K(h.value.sender.userId) ? (y(), se(t(Hi), { key: 0 })) : (y(), se(t(Ma), { key: 1 })),
            c("span", null, v(K(h.value.sender.userId) ? t(n)(t(r).UNMUTE) : t(n)(t(r).MUTE)), 1)
          ]),
          c("button", {
            class: "dropdown-item danger",
            onClick: le
          }, [
            q(h.value.sender.userId) ? (y(), se(t(Ta), { key: 0 })) : (y(), se(t(Sa), { key: 1 })),
            c("span", null, v(q(h.value.sender.userId) ? t(n)(t(r).UNBAN) : t(n)(t(r).BAN)), 1)
          ])
        ], 4)) : ue("", !0)
      ]))
    ], 512));
  }
}), ld = { class: "left-interaction-card" }, rd = { class: "interaction-tabs-header" }, cd = { class: "all-mute-control-row" }, ud = { class: "all-mute-label" }, dd = { class: "interaction-body" }, hd = { class: "chat-stream-sidebar" }, vd = {
  key: 0,
  class: "all-mute-banner"
}, md = { class: "audience-tab-wrapper" }, fd = { class: "audience-list-area" }, gd = {
  key: 0,
  class: "audience-me-tag"
}, pd = {
  key: 1,
  class: "audience-row-actions"
}, bd = {
  key: 0,
  class: "audience-muted-badge"
}, yd = ["title", "onClick"], Ed = { class: "audience-bottom-actions" }, _d = /* @__PURE__ */ Te({
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
      const u = ae("t-tab-panel"), g = ae("t-tabs"), m = ae("t-switch");
      return y(), C("div", ld, [
        c("div", rd, [
          f(g, {
            modelValue: a.value,
            "onUpdate:modelValue": d[0] || (d[0] = (h) => a.value = h),
            class: "interaction-tabs"
          }, {
            default: E(() => [
              f(u, {
                value: "chat",
                label: t(i)(t(r).MESSAGE_LIST)
              }, null, 8, ["label"]),
              f(u, {
                value: "audience",
                label: t(i)(t(r).AUDIENCE_LIST)
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          c("div", cd, [
            f(m, {
              value: e.isAllMuted,
              disabled: e.allMuteLoading,
              onChange: e.handleAllMuteSwitchChange
            }, null, 8, ["value", "disabled", "onChange"]),
            c("span", ud, v(t(i)(t(r).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        c("div", dd, [
          pi(c("div", hd, [
            e.isAllMuted ? (y(), C("div", vd, [
              d[3] || (d[3] = c("span", { class: "all-mute-banner-icon" }, "!", -1)),
              c("span", null, v(t(i)(t(r).ALL_MEMBER_MUTE_ENABLED_BANNER)), 1)
            ])) : ue("", !0),
            f(sd, {
              "live-id": e.liveId,
              "muted-list": e.mutedList,
              "banned-list": e.bannedList,
              "current-live": e.currentLive,
              "on-mute-user": e.handleMuteAudience,
              "on-ban-user": e.handleBanAudience
            }, null, 8, ["live-id", "muted-list", "banned-list", "current-live", "on-mute-user", "on-ban-user"])
          ], 512), [
            [Di, e.activeTab === "chat"]
          ]),
          pi(c("div", md, [
            c("div", fd, [
              f(t(sl), { height: "99%" }, {
                "audience-mark": E(({ audience: h }) => [
                  h.userId === e.currentUserId ? (y(), C("span", gd, v(t(i)(t(r).ME)), 1)) : h.userRole !== 0 && h.userId !== t(xi)(e.anchorUserId) ? (y(), C("div", pd, [
                    e.isUserMuted(h.userId) ? (y(), C("span", bd, v(t(i)(t(r).MUTED)), 1)) : ue("", !0),
                    c("button", {
                      class: "audience-more-btn",
                      title: t(i)(t(r).MORE_ACTIONS),
                      onClick: gi((p) => e.handleOpenAudienceDropdown(p, h.userId, h.userName || h.userId, e.isUserMuted(h.userId)), ["stop"])
                    }, [
                      f(t(zo))
                    ], 8, yd)
                  ])) : ue("", !0)
                ]),
                _: 1
              })
            ]),
            c("div", Ed, [
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
            [Di, e.activeTab === "audience"]
          ])
        ])
      ]);
    };
  }
}), wd = { class: "left-content-area" }, Cd = /* @__PURE__ */ Te({
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
    const i = e, s = n, { login: o, loginUserInfo: a } = $a(), { joinLive: l, leaveLive: d, subscribeEvent: u, unsubscribeEvent: g, LiveListEvent: m } = ll(), h = I(!1), p = I(""), b = I(!1), R = I(""), M = P(
      () => {
        var K;
        return i.currentUserId || R.value || Ua() || ((K = a.value) == null ? void 0 : K.userId) || "";
      }
    ), T = () => {
      s("live-ended");
    }, ie = async () => {
      var K;
      if (i.isMockMode) {
        h.value = !0;
        return;
      }
      if (!h.value)
        try {
          const q = await al();
          if (!q || q.sdkAppId === 0 || !q.userId || !q.userSig) return;
          R.value = q.userId, await o({ sdkAppId: q.sdkAppId, userId: q.userId, userSig: q.userSig }), h.value = !0;
        } catch (q) {
          if ((q == null ? void 0 : q.code) === 2025 || (K = q == null ? void 0 : q.message) != null && K.includes("重复登录")) {
            h.value = !0;
            return;
          }
          console.error("[LiveControlLeftPanel] TUIKit login failed:", q);
        }
    }, G = async () => {
      if (!(!i.liveId || !i.currentLive || !h.value || p.value === i.liveId))
        try {
          await l({ liveId: i.liveId }), p.value = i.liveId, !b.value && u && (m != null && m.onLiveEnded) && (u(m.onLiveEnded, T), b.value = !0), s("joined-live");
        } catch (K) {
          console.error("[LiveControlLeftPanel] joinLive failed:", K);
        }
    };
    return Me(
      () => [i.liveId, i.currentLive, M.value],
      async () => {
        !i.liveId || !i.currentLive || (await ie(), await G());
      },
      { immediate: !0 }
    ), Me(
      () => i.liveId,
      () => {
        p.value = "";
      }
    ), nt(() => {
      var K, q;
      b.value && g && (m != null && m.onLiveEnded) && (g(m.onLiveEnded, T), b.value = !1), p.value && ((q = d == null ? void 0 : (K = d()).catch) == null || q.call(K, (Q) => {
        console.error("[LiveControlLeftPanel] leaveLive on unmount failed:", Q);
      }));
    }), (K, q) => (y(), C("div", wd, [
      f(td, {
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
      f(_d, {
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
        "onUpdate:activeTab": q[0] || (q[0] = (Q) => s("update:activeTab", Q))
      }, null, 8, ["live-id", "active-tab", "is-all-muted", "all-mute-loading", "muted-list", "banned-list", "current-user-id", "anchor-user-id", "current-live", "handle-all-mute-switch-change", "handle-mute-audience", "handle-ban-audience", "open-muted-modal", "open-banned-modal", "is-user-muted", "handle-open-audience-dropdown"])
    ]));
  }
}), Id = { class: "sidebar-stats-card" }, Ad = { class: "stats-card-header" }, Md = { class: "stats-header-left" }, Td = { class: "live-status-tag" }, Sd = { class: "live-duration-text" }, Rd = { class: "update-time" }, Ld = { class: "stat-bar-item" }, xd = { class: "stat-label" }, Nd = { class: "stat-value" }, kd = { class: "stat-bar-item" }, Dd = { class: "stat-label" }, Od = { class: "stat-value" }, Ud = { class: "stat-bar-item" }, $d = { class: "stat-label" }, Pd = { class: "stat-value" }, Fd = { class: "stat-bar-item" }, Vd = { class: "stat-label" }, zd = { class: "stat-value" }, Gd = { class: "stat-bar-item" }, Bd = { class: "stat-label" }, Wd = { class: "stat-value" }, Hd = { class: "stat-bar-item" }, Yd = { class: "stat-label" }, jd = { class: "stat-value" }, Xd = { class: "stat-bar-item" }, Kd = { class: "stat-label" }, qd = { class: "stat-value" }, Zd = /* @__PURE__ */ Te({
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
    const { t: n } = ke(), i = I(null);
    let s = null, o = null, a = null;
    const l = (m, h, p) => {
      const b = Array.from({ length: h }, () => 0);
      return m.forEach((R, M) => {
        const T = M % h;
        b[T] = Math.max(b[T], R);
      }), b.reduce((R, M) => R + M, 0) + p * (h - 1);
    }, d = (m) => {
      const h = Array.from(m.querySelectorAll(":scope > .stat-bar-item")), p = document.createElement("div");
      p.style.position = "absolute", p.style.left = "-99999px", p.style.top = "0", p.style.visibility = "hidden", p.style.pointerEvents = "none", p.style.width = "max-content", document.body.appendChild(p);
      const b = h.map((R) => {
        const M = R.cloneNode(!0);
        return M.style.width = "max-content", M.style.maxWidth = "none", p.appendChild(M), Math.ceil(M.getBoundingClientRect().width);
      });
      return p.remove(), b;
    }, u = () => {
      const m = i.value;
      if (!m || m.clientWidth <= 0) return;
      const h = d(m);
      if (!h.length) return;
      const p = parseFloat(getComputedStyle(m).columnGap) || 0, b = m.clientWidth, R = [7, 4, 3, 2, 1].find((M) => l(h, M, p) <= b + 1) || 1;
      m.style.setProperty("--stats-columns", String(R));
    }, g = () => {
      a !== null && cancelAnimationFrame(a), a = requestAnimationFrame(() => {
        a = null, u();
      });
    };
    return At(() => {
      tt(() => {
        const m = i.value;
        m && (s = new ResizeObserver(g), s.observe(m), o = new MutationObserver(g), o.observe(m, { childList: !0, subtree: !0, characterData: !0 }), g());
      });
    }), nt(() => {
      s == null || s.disconnect(), o == null || o.disconnect(), a !== null && (cancelAnimationFrame(a), a = null);
    }), (m, h) => (y(), C("div", Id, [
      c("div", Ad, [
        c("div", Md, [
          c("h3", null, v(t(n)(t(r).LIVE_DATA_CONTROL)), 1),
          c("span", Td, [
            h[0] || (h[0] = c("span", { class: "live-status-dot" }, null, -1)),
            B(" " + v(t(n)(t(r).LIVE_NOW)) + " ", 1),
            c("span", Sd, v(e.formatDuration(e.liveDuration)), 1)
          ])
        ]),
        c("span", Rd, v(t(n)(t(r).UPDATED_AT, { time: e.updateTimeText })), 1)
      ]),
      c("div", {
        ref_key: "statsBarRef",
        ref: i,
        class: "stats-bar-design"
      }, [
        c("div", Ld, [
          c("div", xd, [
            B(v(t(n)(t(r).CURRENT_VIEWERS)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).CURRENT_VIEWERS_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Nd, v(e.formatNumber(e.stats.onlineCount)), 1)
        ]),
        c("div", kd, [
          c("div", Dd, [
            B(v(t(n)(t(r).COMMENT_COUNT)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).COMMENT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Od, v(e.stats.totalMsgCount.toLocaleString()), 1)
        ]),
        c("div", Ud, [
          c("div", $d, [
            B(v(t(n)(t(r).COMMENT_USERS)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).COMMENT_USERS_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Pd, v(e.stats.totalUniqueCommenters || 0), 1)
        ]),
        c("div", Fd, [
          c("div", Vd, [
            B(v(t(n)(t(r).INTERACTION_RATE)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).INTERACTION_RATE_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", zd, v(e.interactionRate), 1)
        ]),
        c("div", Gd, [
          c("div", Bd, [
            B(v(t(n)(t(r).TOTAL_GIFT_AMOUNT)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).TOTAL_GIFT_AMOUNT_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", Wd, v(e.stats.totalGiftCoins.toFixed(2)), 1)
        ]),
        c("div", Hd, [
          c("div", Yd, [
            B(v(t(n)(t(r).GIFT_COUNT)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).GIFT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", jd, v(e.stats.totalGiftsSent), 1)
        ]),
        c("div", Xd, [
          c("div", Kd, [
            B(v(t(n)(t(r).GIFT_SENDERS)) + " ", 1),
            f(t(Ct), {
              content: t(n)(t(r).GIFT_SENDERS_TOOLTIP),
              placement: "top"
            }, {
              default: E(() => [
                f(t(Nt), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          c("div", qd, v(e.stats.totalUniqueGiftSenders), 1)
        ])
      ], 512)
    ]));
  }
}), Qd = { class: "moderation-card" }, Jd = { class: "moderation-card-header" }, eh = { class: "moderation-header-left" }, th = { class: "moderation-toolbar" }, ih = { class: "update-time" }, nh = { class: "moderation-table-wrapper" }, ah = ["checked"], oh = ["checked", "onChange"], sh = { class: "moderation-user-cell" }, lh = { class: "moderation-user-id" }, rh = ["title"], ch = { class: "moderation-type-text" }, uh = { key: 0 }, dh = { class: "moderation-empty" }, hh = {
  key: 0,
  class: "moderation-pagination"
}, vh = { class: "pagination-pages" }, mh = ["disabled"], fh = {
  key: 0,
  class: "page-ellipsis"
}, gh = ["onClick"], ph = ["disabled"], bh = /* @__PURE__ */ Te({
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
      const o = ae("t-button"), a = ae("t-tooltip");
      return y(), C("div", Qd, [
        c("div", Jd, [
          c("div", eh, [
            c("h3", null, v(t(n)(t(r).CONTENT_MODERATION)), 1),
            f(o, {
              theme: "primary",
              shape: "round",
              onClick: e.handleBulkApprove,
              disabled: e.moderationSelectedIds.length === 0
            }, {
              icon: E(() => [
                f(t(Hi), { style: { width: "14px", height: "14px" } })
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).BULK_APPROVE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"]),
            e.handleBulkDelete ? (y(), se(o, {
              key: 0,
              theme: "primary",
              shape: "round",
              onClick: e.handleBulkDelete,
              disabled: e.moderationSelectedIds.length === 0
            }, {
              icon: E(() => [
                f(t(Go), { style: { width: "14px", height: "14px" } })
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).BULK_DELETE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"])) : ue("", !0)
          ]),
          c("div", th, [
            c("span", ih, v(t(n)(t(r).UPDATED_AT, { time: e.updateTimeText })), 1),
            f(o, {
              theme: "primary",
              variant: "outline",
              shape: "round",
              loading: e.moderationLoading,
              onClick: e.handleRefreshModeration
            }, {
              icon: E(() => [
                f(t(Tn))
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["loading", "onClick"])
          ])
        ]),
        c("div", nh, [
          f(Zi, {
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
              }, null, 40, ah)
            ]),
            "header-userId": E(() => [
              B(v(t(n)(t(r).USERID)), 1)
            ]),
            "header-content": E(() => [
              B(v(t(n)(t(r).COMMENT_CONTENT)), 1)
            ]),
            "header-type": E(() => [
              B(v(t(n)(t(r).SENSITIVE_TYPE)), 1)
            ]),
            "header-createdAtMs": E(() => [
              B(v(t(n)(t(r).CREATED_AT)), 1)
            ]),
            "header-action": E(() => [
              B(v(t(n)(t(r).ACTION)), 1)
            ]),
            "cell-check": E(({ row: l }) => [
              c("input", {
                type: "checkbox",
                checked: e.moderationSelectedIds.includes(l.id),
                onChange: (d) => e.toggleSelectOne(l.id)
              }, null, 40, oh)
            ]),
            "cell-userId": E(({ row: l }) => [
              c("div", sh, [
                c("span", lh, v(l.userId), 1)
              ])
            ]),
            "cell-content": E(({ row: l }) => [
              c("span", {
                title: l.content
              }, v(l.content), 9, rh)
            ]),
            "cell-type": E(({ row: l }) => [
              f(a, {
                content: l.type.split(/[,\\s;|]+/).map((d) => String(d).trim()).filter(Boolean).map((d, u) => u > 0 ? " " + t(n)(e.moderationTypeKey(d)) : t(n)(e.moderationTypeKey(d))).join(""),
                placement: "top"
              }, {
                default: E(() => [
                  c("span", ch, [
                    (y(!0), C(pe, null, Ne(l.type.split(/[,\\s;|]+/).map((d) => String(d).trim()).filter(Boolean), (d, u) => (y(), C(pe, { key: u }, [
                      u > 0 ? (y(), C("span", uh)) : ue("", !0),
                      B(v(t(n)(e.moderationTypeKey(d))), 1)
                    ], 64))), 128))
                  ])
                ]),
                _: 2
              }, 1032, ["content"])
            ]),
            "cell-createdAtMs": E(({ row: l }) => [
              B(v(e.formatModerationTime(l.createdAtMs)), 1)
            ]),
            "cell-action": E(({ row: l }) => [
              f($t, {
                actions: e.getModerationActions(l)
              }, null, 8, ["actions"])
            ]),
            empty: E(() => [
              c("div", dh, [
                c("span", null, v(t(n)(t(r).MODERATION_EMPTY)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data"]),
          e.moderationList.length > 0 ? (y(), C("div", hh, [
            c("span", null, v(t(n)(t(r).TOTAL_ITEMS, { count: e.moderationTotal, total: e.moderationTotal })), 1),
            c("div", vh, [
              c("button", {
                class: "page-num page-nav",
                disabled: e.moderationPage <= 1,
                "aria-label": "prev page",
                onClick: s[1] || (s[1] = (l) => e.goToModerationPage(e.moderationPage - 1))
              }, [
                f(t($i), { style: { transform: "rotate(90deg)", width: "14px" } })
              ], 8, mh),
              (y(!0), C(pe, null, Ne(e.moderationPageNumbers, (l, d) => (y(), C(pe, {
                key: l === "..." ? `ellipsis-${d}` : l
              }, [
                l === "..." ? (y(), C("span", fh, "...")) : (y(), C("button", {
                  key: 1,
                  class: ye(["page-num", { active: l === e.moderationPage }]),
                  onClick: (u) => e.goToModerationPage(l)
                }, v(l), 11, gh))
              ], 64))), 128)),
              c("button", {
                class: "page-num page-nav",
                disabled: e.moderationPage >= e.moderationTotalPages,
                "aria-label": "next page",
                onClick: s[2] || (s[2] = (l) => e.goToModerationPage(e.moderationPage + 1))
              }, [
                f(t($i), { style: { transform: "rotate(-90deg)", width: "14px" } })
              ], 8, ph)
            ])
          ])) : ue("", !0)
        ])
      ]);
    };
  }
}), yh = { class: "member-list-panel-modal" }, Eh = {
  key: 0,
  class: "member-list-empty"
}, _h = {
  key: 1,
  class: "member-list-empty"
}, wh = {
  key: 2,
  class: "member-list-table"
}, Ch = { class: "member-table-user" }, Ih = { class: "member-table-user-cell" }, Ah = { class: "member-table-user-name" }, Mh = { class: "member-table-time" }, Th = { class: "member-table-action" }, Sh = /* @__PURE__ */ Te({
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
      const u = ae("t-dialog");
      return y(), se(u, {
        visible: a.value,
        "onUpdate:visible": d[0] || (d[0] = (g) => a.value = g),
        header: t(i)(t(r).MUTED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: E(() => [
          c("div", yh, [
            e.memberListLoading ? (y(), C("div", Eh, v(t(i)(t(r).LOADING)), 1)) : e.mutedList.length === 0 ? (y(), C("div", _h, v(t(i)(t(r).NO_MUTED_MEMBERS)), 1)) : (y(), C("table", wh, [
              c("thead", null, [
                c("tr", null, [
                  c("th", null, v(t(i)(t(r).USER)), 1),
                  c("th", null, v(t(i)(t(r).UNMUTE_TIME)), 1),
                  c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                ])
              ]),
              c("tbody", null, [
                (y(!0), C(pe, null, Ne(e.mutedList, (g) => (y(), C("tr", {
                  key: g.userId
                }, [
                  c("td", Ch, [
                    c("div", Ih, [
                      f(ji, {
                        "class-name": "member-table-avatar",
                        src: e.getUserAvatar(g.userId),
                        name: e.getUserNameFromCache(g.userId)
                      }, null, 8, ["src", "name"]),
                      f(t(Ct), {
                        content: e.getUserNameFromCache(g.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: E(() => [
                          c("span", Ah, v(e.getUserNameFromCache(g.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  c("td", Mh, v(g.endTime > 0 ? new Date(g.endTime * 1e3).toLocaleString() : "-"), 1),
                  c("td", Th, [
                    f($t, {
                      actions: e.getMutedMemberActions(g.userId)
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
}), Rh = { class: "member-list-panel-modal" }, Lh = {
  key: 0,
  class: "member-list-empty"
}, xh = {
  key: 1,
  class: "member-list-empty"
}, Nh = {
  key: 2,
  class: "member-list-table"
}, kh = { class: "member-table-user" }, Dh = { class: "member-table-user-cell" }, Oh = { class: "member-table-user-name" }, Uh = { class: "member-table-time" }, $h = { class: "member-table-action" }, Ph = /* @__PURE__ */ Te({
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
      const u = ae("t-dialog");
      return y(), se(u, {
        visible: a.value,
        "onUpdate:visible": d[0] || (d[0] = (g) => a.value = g),
        header: t(i)(t(r).BANNED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: E(() => [
          c("div", Rh, [
            e.memberListLoading ? (y(), C("div", Lh, v(t(i)(t(r).LOADING)), 1)) : e.bannedList.length === 0 ? (y(), C("div", xh, v(t(i)(t(r).NO_BANNED_MEMBERS)), 1)) : (y(), C("table", Nh, [
              c("thead", null, [
                c("tr", null, [
                  c("th", null, v(t(i)(t(r).USER)), 1),
                  c("th", null, v(t(i)(t(r).BAN_LIFT_TIME)), 1),
                  c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                ])
              ]),
              c("tbody", null, [
                (y(!0), C(pe, null, Ne(e.bannedList, (g) => (y(), C("tr", {
                  key: g.userId
                }, [
                  c("td", kh, [
                    c("div", Dh, [
                      f(ji, {
                        "class-name": "member-table-avatar",
                        src: e.getUserAvatar(g.userId),
                        name: e.getUserNameFromCache(g.userId)
                      }, null, 8, ["src", "name"]),
                      f(t(Ct), {
                        content: e.getUserNameFromCache(g.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: E(() => [
                          c("span", Oh, v(e.getUserNameFromCache(g.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  c("td", Uh, v(g.endTime > 0 ? new Date(g.endTime * 1e3).toLocaleString() : "-"), 1),
                  c("td", $h, [
                    f($t, {
                      actions: e.getBannedMemberActions(g.userId)
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
}), Fh = /* @__PURE__ */ Te({
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
    return (u, g) => {
      const m = ae("t-dialog");
      return y(), se(m, {
        visible: a.value,
        "onUpdate:visible": g[0] || (g[0] = (h) => a.value = h),
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
}), Vh = /* @__PURE__ */ Te({
  __name: "ModerationDropdown",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["release", "close"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = I(null), o = e, a = n, l = (u) => {
      s.value && !s.value.contains(u.target) && a("close");
    };
    Me(
      () => o.visible,
      (u) => {
        u ? document.addEventListener("mousedown", l) : document.removeEventListener("mousedown", l);
      }
    ), nt(() => {
      document.removeEventListener("mousedown", l);
    });
    const d = () => {
      a("release"), a("close");
    };
    return (u, g) => (y(), se(An, { to: "body" }, [
      e.visible ? (y(), C("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: "user-action-dropdown moderation-action-dropdown",
        style: Be({
          position: "fixed",
          top: e.position.y + "px",
          left: e.position.x - 160 + "px"
        })
      }, [
        c("button", {
          class: "dropdown-item",
          onClick: d
        }, [
          f(t(Hi)),
          B(" " + v(t(i)(t(r).BYPASS_CORRECTION)), 1)
        ])
      ], 4)) : ue("", !0)
    ]));
  }
}), zh = { class: "dropdown-header" }, Gh = /* @__PURE__ */ Te({
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
    const { t: i } = ke(), s = I(null), o = e, a = n, l = (g) => {
      s.value && !s.value.contains(g.target) && a("close");
    };
    Me(
      () => o.visible,
      (g) => {
        g ? document.addEventListener("mousedown", l) : document.removeEventListener("mousedown", l);
      }
    ), nt(() => {
      document.removeEventListener("mousedown", l);
    });
    const d = () => {
      a("mute"), a("close");
    }, u = () => {
      a("ban"), a("close");
    };
    return (g, m) => (y(), se(An, { to: "body" }, [
      e.visible ? (y(), C("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: s,
        class: "user-action-dropdown",
        style: Be({
          position: "fixed",
          top: e.position.y + "px",
          left: e.position.x - 160 + "px"
        })
      }, [
        c("div", zh, v(e.userName), 1),
        m[0] || (m[0] = c("div", { class: "dropdown-divider" }, null, -1)),
        e.isMuted ? (y(), C("button", {
          key: 0,
          class: "dropdown-item",
          onClick: d
        }, [
          f(t(Hi)),
          B(" " + v(t(i)(t(r).UNMUTE)), 1)
        ])) : (y(), C("button", {
          key: 1,
          class: "dropdown-item",
          onClick: d
        }, [
          f(t(Ma)),
          B(" " + v(t(i)(t(r).MUTE)), 1)
        ])),
        c("button", {
          class: "dropdown-item danger",
          onClick: u
        }, [
          e.isBanned ? (y(), se(t(Ta), { key: 0 })) : (y(), se(t(Sa), { key: 1 })),
          B(" " + v(e.isBanned ? t(i)(t(r).UNBAN) : t(i)(t(r).BAN)), 1)
        ])
      ], 4)) : ue("", !0)
    ]));
  }
});
function Bh() {
  const e = I({
    visible: !1,
    title: "",
    content: ""
  }), n = Ui({
    visible: !1,
    x: 0,
    y: 0
  }), i = Ui({
    visible: !1,
    x: 0,
    y: 0
  }), s = I(!1), o = I(!1), a = I(""), l = I("");
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
    showModerationDropdown: (M, T, ie, G) => {
      n.visible = !0, n.x = M, n.y = T, n.itemId = ie, n.content = G;
    },
    hideModerationDropdown: () => {
      n.visible = !1;
    },
    showAudienceDropdown: (M, T, ie, G) => {
      i.visible = !0, i.x = M, i.y = T, i.userId = ie, i.userName = G;
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
const Wh = { class: "live-control-container" }, Hh = { class: "live-control-viewport" }, Yh = { class: "right-sidebar" }, Ri = 20, jh = /* @__PURE__ */ Te({
  __name: "live-control",
  setup(e) {
    var Yn;
    const n = Do(), i = _i(), s = P(() => n.params.liveId), o = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, { t: a } = ke(), { currentLive: l, fetchLiveDetail: d, fetchLiveStats: u, endLive: g, updateLive: m } = Pt(), { audienceList: h, audienceCount: p } = Pa(), b = (Yn = Yi().components) == null ? void 0 : Yn.roomControl, {
      mutedList: R,
      bannedList: M,
      memberLoading: T,
      muteMember: ie,
      unmuteMember: G,
      banMember: K,
      unbanMember: q,
      fetchMutedList: Q,
      fetchBannedList: le,
      textModerationList: he,
      textModerationTotal: Ee,
      textModerationPageNum: W,
      textModerationLoading: O,
      fetchTextModerationList: U,
      approveTextModerationItems: D,
      bypassCorrectionKeyword: L
    } = ul({
      liveId: s.value,
      pageSize: Ri
    }), F = async (_, A = 600) => {
      await ie({ memberAccounts: [_], muteTime: A });
    }, N = async (_) => {
      await G({ memberAccounts: [_] });
    }, S = async (_, A = 3600, z = "") => {
      await K({ memberAccounts: [_], duration: A, reason: z });
    }, k = async (_) => {
      await q({ memberAccounts: [_] });
    }, {
      successMsg: w,
      errorMsg: ee,
      mutedModalVisible: ce,
      bannedModalVisible: de
    } = Bh(), _e = P(() => Ua() || ""), $ = I(!0), j = I(null), Se = I(!1), Re = I("chat"), $e = I(0), De = I(null), qe = I(/* @__PURE__ */ new Map()), Xe = I(null), me = Ui({
      onlineCount: 0,
      totalViewers: 0,
      totalMsgCount: 0,
      totalLikesReceived: 0,
      totalGiftsSent: 0,
      totalGiftCoins: 0,
      totalUniqueGiftSenders: 0,
      totalUniqueCommenters: 0
    }), ut = P(() => me.onlineCount <= 0 ? "0%" : (me.totalUniqueCommenters / me.onlineCount * 100).toFixed(1) + "%"), fe = I(""), Ze = () => {
      const _ = /* @__PURE__ */ new Date(), A = String(_.getHours()).padStart(2, "0"), z = String(_.getMinutes()).padStart(2, "0");
      fe.value = `${A}:${z}`;
    };
    Ze(), Me(
      l,
      (_) => {
        var A, z, H, Z, ge, we, Fe;
        _ && (me.totalViewers = ((A = _.stats) == null ? void 0 : A.viewCount) || me.totalViewers, me.totalMsgCount = ((z = _.stats) == null ? void 0 : z.commentCount) || me.totalMsgCount, me.totalLikesReceived = ((H = _.stats) == null ? void 0 : H.likeCount) || me.totalLikesReceived, me.totalGiftsSent = ((Z = _.stats) == null ? void 0 : Z.giftCount) || me.totalGiftsSent, me.totalGiftCoins = ((ge = _.stats) == null ? void 0 : ge.giftAmount) || me.totalGiftCoins, me.totalUniqueGiftSenders = ((we = _.stats) == null ? void 0 : we.giftUserCount) || me.totalUniqueGiftSenders, me.totalUniqueCommenters = ((Fe = _.stats) == null ? void 0 : Fe.totalUniqueCommenters) || me.totalUniqueCommenters, _.onlineCount && (me.onlineCount = _.onlineCount), Ze());
      },
      { immediate: !0 }
    );
    const ze = I([]), ne = I(1), ve = O, Oe = I(0), x = I([]), J = P(
      () => Math.max(1, Math.ceil(Oe.value / Ri))
    ), Ae = P(
      () => Ds(ne.value, J.value)
    ), We = P(() => ze.value.length === 0 ? !1 : ze.value.every((_) => x.value.includes(_.id))), ft = [
      { key: "check", width: 40, className: "col-check" },
      { key: "userId", width: 120, className: "col-user" },
      { key: "content", className: "col-content moderation-content-cell" },
      { key: "type", width: 100, className: "col-type moderation-type-cell" },
      { key: "createdAtMs", width: 120, className: "col-time moderation-time-cell" },
      { key: "action", fitContent: !0, minWidth: 120, maxWidth: 260, className: "col-action" }
    ], at = (_) => ({
      id: _.id,
      userId: _.userId,
      content: _.content,
      type: _.type,
      createdAtMs: _.createdAtMs
    }), Ft = async (_ = 1) => {
      var A;
      if (!ve.value && s.value)
        try {
          const z = Math.max(1, _), H = (A = l.value) == null ? void 0 : A.createdAt, Z = H ? Number(H) * 1e3 : Date.now() - 3600 * 1e3, ge = Date.now() - 720 * 60 * 60 * 1e3 + 60 * 1e3, we = Math.max(Z, ge);
          await U({
            liveId: s.value,
            pageNum: z,
            pageSize: Ri,
            startTime: we,
            violationOnly: !0
          });
          const Fe = await Os(he.value), Ci = await Us();
          ze.value = Fe.map(at), Oe.value = Math.max(0, Ee.value - Ci), ne.value = z, x.value = x.value.filter(
            (So) => Fe.some((Ro) => Ro.id === So)
          );
        } catch (z) {
          console.error("[moderation] load failed:", z), Y.error(a(r.OPERATION_FAILED));
        }
    }, Qi = async () => {
      await Ft(ne.value), Y.success(a(r.REFRESHED));
    }, wi = (_) => {
      _ !== "..." && (_ < 1 || _ > J.value || _ === ne.value || Ft(_));
    }, Mt = async (_) => {
      x.value = x.value.filter(
        (Z) => !_.includes(Z)
      );
      const A = Math.max(0, Oe.value - _.length), z = Math.max(1, Math.ceil(A / Ri)), H = Math.min(ne.value, z);
      await Ft(H);
    }, V = (_) => {
      const A = x.value.indexOf(_);
      A >= 0 ? x.value.splice(A, 1) : x.value.push(_);
    }, oe = () => {
      const _ = ze.value.map((z) => z.id);
      if (_.length > 0 && _.every((z) => x.value.includes(z)))
        x.value = x.value.filter((z) => !_.includes(z));
      else {
        const z = new Set(x.value);
        _.forEach((H) => z.add(H)), x.value = Array.from(z);
      }
    }, He = (_) => ({
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
    })[_] || "Unknown", dt = (_) => {
      const A = new Date(_), z = String(A.getMonth() + 1).padStart(2, "0"), H = String(A.getDate()).padStart(2, "0"), Z = String(A.getHours()).padStart(2, "0"), ge = String(A.getMinutes()).padStart(2, "0"), we = String(A.getSeconds()).padStart(2, "0");
      return `${z}-${H} ${Z}:${ge}:${we}`;
    }, Tt = (_) => {
      confirmDialogTitle.value = a(r.RELEASE_AND_RESEND), confirmDialogContent.value = a(r.RELEASE_AND_RESEND_DESCRIPTION), confirmAction.value = async () => {
        try {
          await D({
            ids: [_.id],
            items: [{ id: _.id, content: _.content, userId: _.userId }],
            liveId: s.value
          }), Pe("success", a(r.RELEASE_AND_RESEND_SUCCESS)), await Mt([_.id]);
        } catch (A) {
          console.error("[moderation] release failed:", A), Y.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, Ue = I(null), St = () => {
      Ue.value = null;
    }, jt = (_, A) => {
      _.stopPropagation();
      const z = _.currentTarget.getBoundingClientRect();
      Ue.value = {
        item: A,
        x: z.right,
        y: z.bottom + 4
      };
    }, Vt = async (_) => {
      try {
        await na([_.id]), Y.info(a(r.DELETED)), await Mt([_.id]);
      } catch (A) {
        console.error("[moderation] delete failed:", A), Y.error(a(r.OPERATION_FAILED));
      }
    }, Qe = (_) => {
      confirmDialogTitle.value = a(r.BYPASS_CORRECTION), confirmDialogContent.value = a(r.BYPASS_CORRECTION_DESCRIPTION), confirmAction.value = async () => {
        try {
          await L({
            content: _.content,
            liveId: s.value
          }), Pe("success", a(r.BYPASS_CORRECTION_SUCCESS)), await Mt([_.id]);
        } catch (A) {
          console.error("[moderation] bypass correction keyword failed:", A), Y.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, zt = () => {
      if (!Ue.value) return;
      const { item: _ } = Ue.value;
      St(), Qe(_);
    }, Ji = (_) => [
      {
        key: "approve",
        label: a(r.APPROVE),
        onClick: () => Tt(_)
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
        onClick: (A) => jt(A, _)
      }
    ], X = () => {
      if (x.value.length === 0) {
        Y.warning(a(r.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      confirmDialogTitle.value = a(r.RELEASE_AND_RESEND), confirmDialogContent.value = a(r.RELEASE_AND_RESEND_DESCRIPTION), confirmAction.value = async () => {
        const _ = [...x.value], A = ze.value.filter((z) => _.includes(z.id)).map((z) => ({ id: z.id, content: z.content, userId: z.userId }));
        try {
          await D({ ids: _, items: A, liveId: s.value }), Pe("success", a(r.RELEASE_AND_RESEND_SUCCESS)), await Mt(_);
        } catch (z) {
          console.error("[moderation] bulk release failed:", z), Y.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, be = async () => {
      if (x.value.length === 0) {
        Y.warning(a(r.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const _ = [...x.value];
      try {
        await na(_), Y.info(a(r.DELETED)), await Mt(_);
      } catch (A) {
        console.error("[moderation] bulk delete failed:", A), Y.error(a(r.OPERATION_FAILED));
      }
    };
    Me(
      [s, () => {
        var _;
        return (_ = l.value) == null ? void 0 : _.createdAt;
      }],
      ([_]) => {
        _ && Ft(1);
      },
      { immediate: !0 }
    ), P(() => [
      { label: a(r.REFRESH_OFF), value: 0 },
      { label: a(r.TEN_SECONDS), value: 10 },
      { label: a(r.THIRTY_SECONDS), value: 30 },
      { label: a(r.ONE_MINUTE), value: 60 },
      { label: a(r.FIVE_MINUTES), value: 300 }
    ]);
    const Xt = I(30), Rt = I({
      visible: !1,
      liveId: "",
      liveName: ""
    }), Un = () => {
      var _, A;
      Rt.value = {
        visible: !0,
        liveId: s.value || "",
        liveName: ((_ = j.value) == null ? void 0 : _.liveName) || ((A = l.value) == null ? void 0 : A.liveName) || ""
      };
    }, no = I(Qs()), Gt = pa({
      action: async () => {
        if (!j.value) throw new Error("liveInfo is null");
        return endLive(j.value.id || j.value.liveId);
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
    }), Lt = pa({
      action: async () => {
        if (!s.value) throw new Error("liveId is required");
        return m({
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
        j.value && (j.value = { ...j.value, isMessageDisabled: !0 });
      }
    }), Bt = P(() => Gt.confirmDialog.value ? Gt.confirmDialog.value : Lt.confirmDialog.value ? Lt.confirmDialog.value : null), ao = () => {
      Gt.confirmDialog.value ? Gt.executeWithConfirm() : Lt.confirmDialog.value && Lt.executeWithConfirm();
    }, oo = () => {
      Gt.confirmDialog.value ? Gt.cancelConfirm() : Lt.confirmDialog.value && Lt.cancelConfirm();
    };
    let Kt = null, qt = null;
    const en = P(
      () => {
        var _, A, z;
        return ((A = (_ = l.value) == null ? void 0 : _.liveOwner) == null ? void 0 : A.userId) || ((z = j.value) == null ? void 0 : z.anchor.id) || "";
      }
    ), so = P(
      () => {
        var _, A, z;
        return ((_ = Xe.value) == null ? void 0 : _.nick) || hn(
          (A = l.value) == null ? void 0 : A.liveOwner,
          ((z = j.value) == null ? void 0 : z.anchor.name) || a(r.UNKNOWN_HOST)
        );
      }
    ), lo = P(
      () => {
        var _, A, z;
        return ((_ = Xe.value) == null ? void 0 : _.avatarUrl) || dn((A = l.value) == null ? void 0 : A.liveOwner) || ((z = j.value) == null ? void 0 : z.anchor.avatar);
      }
    ), $n = P(() => {
      var _;
      return ((_ = j.value) == null ? void 0 : _.isMessageDisabled) === !0;
    }), ro = P(() => Lt.loading.value), Pn = (_) => {
      const A = h.value.find((H) => H.userId === _);
      if (A != null && A.avatarUrl)
        return A.avatarUrl;
      const z = qe.value.get(_);
      if (z != null && z.avatarUrl)
        return z.avatarUrl;
    }, Fn = (_) => {
      const A = h.value.find((H) => H.userId === _);
      if (A != null && A.userName)
        return A.userName;
      const z = qe.value.get(_);
      return z != null && z.nick ? z.nick : _;
    }, Pe = (_, A) => {
      _ === "success" ? (w.value = A, setTimeout(() => w.value = "", 3e3)) : (ee.value = A, setTimeout(() => ee.value = "", 3e3));
    }, xt = (_) => {
      const A = _, z = A.ErrorCode || A.errorCode || A.code || 0, H = A.ErrorInfo || A.errorInfo || "";
      return { code: z, info: H };
    }, co = (_) => _ >= 1e4 ? (_ / 1e4).toFixed(1) + "w" : _.toLocaleString(), uo = (_) => {
      _ < 0 && (_ = 0);
      const A = Math.floor(_ / 86400), z = Math.floor(_ % 86400 / 3600), H = Math.floor(_ % 3600 / 60), Z = _ % 60, ge = `${z.toString().padStart(2, "0")}:${H.toString().padStart(2, "0")}:${Z.toString().padStart(2, "0")}`;
      return A > 0 ? `${A}${a(r.DAYS)} ${ge}` : ge;
    }, Vn = () => {
      i.back();
    }, ho = () => {
      Gt.requestConfirm();
    }, vo = async (_) => {
      if (j.value)
        try {
          await m({
            liveId: j.value.id,
            isMessageDisabled: _
          }), j.value = { ...j.value, isMessageDisabled: _ }, Y.success(a(_ ? r.ALL_MEMBER_MUTE_ENABLED : r.ALL_MEMBER_MUTE_DISABLED));
        } catch (A) {
          const { code: z, info: H } = xt(A), Z = A instanceof Error ? A : new Error(String(A)), ge = z ? gt(z, H) : Z.message || a(r.UNKNOWN_HOST);
          Y.error(a(r.OPERATION_FAILED, { error: ge }));
        }
    }, mo = (_) => {
      const A = !!_;
      if (A !== $n.value) {
        if (A) {
          Lt.requestConfirm();
          return;
        }
        vo(!1);
      }
    }, zn = (_, A, z) => {
      s.value && (aa(_, en.value) || (z ? (confirmDialogTitle.value = a(r.CONFIRM_UNMUTE_USER), confirmDialogContent.value = a("Unmute Confirm", { name: A }), confirmAction.value = async () => {
        try {
          await N(_), Pe("success", a("Unmuted Success", { name: A })), ui();
        } catch (H) {
          const { code: Z, info: ge } = xt(H), we = H instanceof Error ? H : new Error(String(H)), Fe = Z ? gt(Z, ge) : we.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }) : (confirmDialogTitle.value = a(r.CONFIRM_MUTE_USER), confirmDialogContent.value = a("Mute Warning", { name: A }), confirmAction.value = async () => {
        try {
          await F(_, $s), Pe("success", a("Muted Success", { name: A })), ui();
        } catch (H) {
          const { code: Z, info: ge } = xt(H), we = H instanceof Error ? H : new Error(String(H)), Fe = Z ? gt(Z, ge) : we.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Mute Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }), confirmDialogVisible.value = !0));
    }, Gn = (_, A, z) => {
      s.value && (aa(_, en.value) || (z ? (confirmDialogTitle.value = a(r.CONFIRM_UNBAN_USER), confirmDialogContent.value = a("Unban Confirm", { name: A }), confirmAction.value = async () => {
        try {
          await k(_), Pe("success", a("Unbanned Success", { name: A })), di();
        } catch (H) {
          const { code: Z, info: ge } = xt(H), we = H instanceof Error ? H : new Error(String(H)), Fe = Z ? gt(Z, ge) : we.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }) : (confirmDialogTitle.value = a(r.CONFIRM_BAN_USER), confirmDialogContent.value = a("Ban Warning", { name: A }), confirmAction.value = async () => {
        try {
          await S(_, Ps), Pe("success", a("Banned Success", { name: A })), di();
        } catch (H) {
          const { code: Z, info: ge } = xt(H), we = H instanceof Error ? H : new Error(String(H)), Fe = Z ? gt(Z, ge) : we.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Ban Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }), confirmDialogVisible.value = !0));
    }, ui = async () => {
      if (s.value) {
        T.value = !0;
        try {
          await Q();
        } catch (_) {
          console.error("获取禁言列表失败:", _);
        } finally {
          T.value = !1;
        }
      }
    }, di = async () => {
      if (s.value) {
        T.value = !0;
        try {
          await le();
        } catch (_) {
          console.error("获取封禁列表失败:", _);
        } finally {
          T.value = !1;
        }
      }
    }, fo = () => {
      ui(), ce.value = !0;
    }, go = () => {
      di(), de.value = !0;
    }, po = (_) => Array.isArray(R.value) && R.value.some((A) => A.userId === _), Bn = (_) => Array.isArray(M.value) && M.value.some((A) => A.userId === _), bo = (_) => {
      s.value && (confirmDialogTitle.value = a(r.UNMUTE), confirmDialogContent.value = a("Unmute Confirm", { name: _ }), confirmAction.value = async () => {
        try {
          await N(_), Pe("success", a("Unmuted Success", { name: _ })), ui();
        } catch (A) {
          const { code: z, info: H } = xt(A), Z = A instanceof Error ? A : new Error(String(A)), ge = z ? gt(z, H) : Z.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: ge }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0);
    }, yo = (_) => {
      s.value && (confirmDialogTitle.value = a(r.UNBAN), confirmDialogContent.value = a("Unban Confirm", { name: _ }), confirmAction.value = async () => {
        try {
          await k(_), Pe("success", a("Unbanned Success", { name: _ })), di();
        } catch (A) {
          const { code: z, info: H } = xt(A), Z = A instanceof Error ? A : new Error(String(A)), ge = z ? gt(z, H) : Z.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: ge }));
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
    ], ht = I(null), wo = (_, A, z, H) => {
      _.stopPropagation();
      const Z = _.currentTarget.getBoundingClientRect();
      ht.value = {
        userId: A,
        userName: z,
        isMuted: H,
        x: Z.right,
        y: Z.bottom + 4
      };
    }, tn = () => {
      ht.value = null;
    }, Co = () => {
      if (!ht.value) return;
      const { userId: _, userName: A, isMuted: z } = ht.value;
      zn(_, A, z), tn();
    }, Io = () => {
      if (!ht.value) return;
      const { userId: _, userName: A } = ht.value;
      Gn(_, A, Bn(_)), tn();
    }, Ao = async () => {
      var _, A, z;
      if (s.value)
        try {
          const H = await d(s.value), Z = ((_ = H == null ? void 0 : H.Response) == null ? void 0 : _.RoomInfo) || (H != null && H.RoomId || H != null && H.liveId ? H : null);
          if (Z) {
            const ge = hn(Z, Z.Owner_Account || "-"), we = dn(Z);
            Z.anchor ? Xe.value = {
              nick: Z.anchor.nick || ge,
              avatarUrl: Z.anchor.avatarUrl || we
            } : Xe.value = {
              nick: ge,
              avatarUrl: we
            }, j.value = {
              id: Z.RoomId,
              title: Z.RoomName || a(r.UNNAMED_LIVE_SHORT),
              coverUrl: Z.CoverURL || Rn,
              anchor: {
                id: Z.Owner_Account,
                name: ge,
                avatar: we
              },
              onlineCount: 0,
              createdAt: Z.CreateTime * 1e3,
              isMessageDisabled: Z.IsMessageDisabled === !0,
              roomType: Z.RoomType || "Live",
              isSeatEnabled: Z.IsSeatEnabled || !1,
              takeSeatMode: Z.TakeSeatMode || "FreeToTake",
              maxSeatCount: Z.MaxSeatCount || 9,
              maxMemberCount: Z.MaxMemberCount || 1e3,
              category: Z.Tags || [],
              activityStatus: Z.ActivityStatus || 1,
              isPublicVisible: Z.IsPublicVisibled !== void 0 ? Z.IsPublicVisibled : !0,
              notice: Z.Notice || "",
              isLikeEnabled: Z.IsThumbsEnabled !== void 0 ? Z.IsThumbsEnabled : !0
            };
            const Fe = Z.CreateTime ? Z.CreateTime * 1e3 : null;
            if (De.value = Fe, Fe) {
              const Ci = Math.floor((Date.now() - Fe) / 1e3);
              $e.value = Ci > 0 ? Ci : 0;
            }
          } else if (H != null && H.ErrorCode && H.ErrorCode !== 0) {
            H.ErrorCode === 100004 && (Se.value = !0);
            const ge = H.ErrorInfo || "";
            Pe("error", gt(H.ErrorCode, ge));
          } else
            Pe("error", gt(H.ErrorCode, H.ErrorInfo, a(r.GET_ERROR_MESSAGE)));
        } catch (H) {
          const { code: Z, info: ge } = xt(H), we = H instanceof Error ? H : new Error(String(H));
          if ((A = we.message) != null && A.includes("network") || (z = we.message) != null && z.includes("fetch"))
            Pe("error", a(r.NETWORK_ERROR));
          else {
            const Fe = Z ? gt(Z, ge) : we.message || a(r.NETWORK_ERROR);
            Pe("error", a("Request Failed", { error: Fe }));
          }
        } finally {
          $.value = !1;
        }
    }, Wn = async () => {
      if (!(!s.value || !l.value))
        try {
          const _ = await u();
          if (_.ErrorCode === 0 && _.Response) {
            const A = _.Response;
            me.totalViewers = A.TotalViewers || 0, me.totalMsgCount = A.TotalMsgCount || 0, me.totalLikesReceived = A.TotalLikesReceived || 0, me.totalGiftsSent = A.TotalGiftsSent || 0, me.totalGiftCoins = A.TotalGiftCoins || 0, me.totalUniqueGiftSenders = A.TotalUniqueGiftSenders || 0, me.totalUniqueCommenters = A.TotalUniqueCommenters || 0, Ze();
          }
        } catch (_) {
          const A = _ instanceof Error ? _ : new Error(String(_));
          console.error("获取统计数据失败:", A.message);
        }
    }, Mo = () => {
      Kt && (clearInterval(Kt), Kt = null), Se.value = !0;
    }, Hn = () => {
      s.value && (ui(), di());
    }, To = () => {
      Hn();
    };
    Me(
      s,
      (_) => {
        _ && d(_);
      },
      { immediate: !0 }
    ), s.value && (Ao(), Wn(), Ft(1)), s.value && (Kt = window.setInterval(() => {
      if (De.value) {
        const _ = Math.floor((Date.now() - De.value) / 1e3);
        $e.value = _ > 0 ? _ : 0;
      }
    }, 1e3)), Me(Xt, (_) => {
      qt && (clearInterval(qt), qt = null), _ > 0 && s.value && (qt = window.setInterval(Wn, _ * 1e3));
    }), Me(p, (_) => {
      me.onlineCount = _;
    });
    let ot = null;
    return Me(Re, (_) => {
      if (_ === "audience" && s.value) {
        Hn();
        const A = () => {
          document.querySelectorAll(".viewer-name").forEach((H) => {
            const Z = H, ge = Z.textContent || "";
            Z.title !== ge && (Z.title = ge);
          });
        };
        setTimeout(() => {
          A();
          const z = document.querySelector(".audience-list-area");
          z && (ot == null || ot.disconnect(), ot = new MutationObserver(A), ot.observe(z, { childList: !0, subtree: !0 }));
        }, 100);
      } else
        ot == null || ot.disconnect(), ot = null;
    }), nt(() => {
      s.value && (console.log("[LiveControl] Component unmounting, auto end live:", s.value), g(s.value).catch((_) => {
        console.error("[LiveControl] Failed to end live on unmount:", _);
      })), Kt && clearInterval(Kt), qt && clearInterval(qt), ot == null || ot.disconnect(), ot = null;
    }), (_, A) => {
      var z, H, Z, ge;
      return y(), C("div", Wh, [
        f(t($u), {
          "success-msg": t(w),
          "error-msg": t(ee)
        }, null, 8, ["success-msg", "error-msg"]),
        f(t(Bu), {
          "handle-leave-live": Vn,
          "handle-violation-warning": Un,
          "handle-force-stop-live": ho
        }),
        c("main", Hh, [
          f(t(Cd), {
            "live-info": j.value,
            "live-anchor-avatar": lo.value,
            "live-anchor-name": so.value,
            "live-ended-overlay-visible": Se.value,
            "current-live": t(l),
            "is-mock-mode": t(o),
            "live-control-slots": t(b),
            "live-id": s.value,
            "active-tab": Re.value,
            "onUpdate:activeTab": A[0] || (A[0] = (we) => Re.value = we),
            "is-all-muted": $n.value,
            "all-mute-loading": ro.value,
            "muted-list": t(R),
            "banned-list": t(M),
            "current-user-id": _e.value,
            "anchor-user-id": en.value,
            "handle-leave-live": Vn,
            "handle-all-mute-switch-change": mo,
            "handle-mute-audience": zn,
            "handle-ban-audience": Gn,
            "open-muted-modal": fo,
            "open-banned-modal": go,
            "is-user-muted": po,
            "handle-open-audience-dropdown": wo,
            onJoinedLive: To,
            onLiveEnded: Mo
          }, null, 8, ["live-info", "live-anchor-avatar", "live-anchor-name", "live-ended-overlay-visible", "current-live", "is-mock-mode", "live-control-slots", "live-id", "active-tab", "is-all-muted", "all-mute-loading", "muted-list", "banned-list", "current-user-id", "anchor-user-id"]),
          c("aside", Yh, [
            f(t(Zd), {
              stats: me,
              "live-duration": $e.value,
              "update-time-text": fe.value,
              "interaction-rate": ut.value,
              "format-number": co,
              "format-duration": uo
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            f(Et, {
              "slot-component": (z = t(b)) == null ? void 0 : z.customControlPanel,
              "slot-props": { liveInfo: j.value, stats: me }
            }, null, 8, ["slot-component", "slot-props"]),
            f(t(bh), {
              "moderation-list": ze.value,
              "moderation-loading": t(ve),
              "moderation-page": ne.value,
              "moderation-total": Oe.value,
              "moderation-total-pages": J.value,
              "moderation-page-numbers": Ae.value,
              "moderation-selected-ids": x.value,
              "moderation-columns": ft,
              "is-all-on-page-selected": We.value,
              "moderation-available": no.value,
              "update-time-text": fe.value,
              "handle-bulk-approve": X,
              "handle-bulk-delete": be,
              "handle-refresh-moderation": Qi,
              "toggle-select-one": V,
              "toggle-select-all": oe,
              "go-to-moderation-page": wi,
              "get-moderation-actions": Ji,
              "moderation-type-key": He,
              "format-moderation-time": dt
            }, null, 8, ["moderation-list", "moderation-loading", "moderation-page", "moderation-total", "moderation-total-pages", "moderation-page-numbers", "moderation-selected-ids", "is-all-on-page-selected", "moderation-available", "update-time-text"])
          ])
        ]),
        f(t(Sh), {
          visible: t(ce),
          "onUpdate:visible": A[1] || (A[1] = (we) => jn(ce) ? ce.value = we : null),
          "muted-list": t(R),
          "member-list-loading": t(T),
          "get-user-avatar": Pn,
          "get-user-name-from-cache": Fn,
          "get-muted-member-actions": Eo
        }, null, 8, ["visible", "muted-list", "member-list-loading"]),
        f(t(Ph), {
          visible: t(de),
          "onUpdate:visible": A[2] || (A[2] = (we) => jn(de) ? de.value = we : null),
          "banned-list": t(M),
          "member-list-loading": t(T),
          "get-user-avatar": Pn,
          "get-user-name-from-cache": Fn,
          "get-banned-member-actions": _o
        }, null, 8, ["visible", "banned-list", "member-list-loading"]),
        Bt.value ? (y(), se(t(Fh), {
          key: 0,
          visible: Bt.value.visible,
          "onUpdate:visible": A[3] || (A[3] = (we) => Bt.value.visible = we),
          title: Bt.value.title,
          content: Bt.value.content,
          "confirm-text": Bt.value.confirmText,
          danger: Bt.value.danger,
          "on-confirm": ao,
          "on-close": oo
        }, null, 8, ["visible", "title", "content", "confirm-text", "danger"])) : ue("", !0),
        f(t(Vh), {
          visible: !!Ue.value,
          position: Ue.value || { x: 0, y: 0 },
          onRelease: zt,
          onClose: St
        }, null, 8, ["visible", "position"]),
        f(t(Gh), {
          visible: !!ht.value,
          "user-name": ((H = ht.value) == null ? void 0 : H.userName) || "",
          "is-muted": ((Z = ht.value) == null ? void 0 : Z.isMuted) || !1,
          "is-banned": Bn(((ge = ht.value) == null ? void 0 : ge.userId) || ""),
          position: ht.value || { x: 0, y: 0 },
          onMute: Co,
          onBan: Io,
          onClose: tn
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"]),
        f(Va, {
          visible: Rt.value.visible,
          "onUpdate:visible": A[4] || (A[4] = (we) => Rt.value.visible = we),
          "live-id": Rt.value.liveId,
          "live-name": Rt.value.liveName
        }, null, 8, ["visible", "live-id", "live-name"])
      ]);
    };
  }
}), pm = /* @__PURE__ */ ci(jh, [["__scopeId", "data-v-9268d819"]]), Xh = { class: "gift-config-container" }, Kh = { class: "gift-config-page-header" }, qh = { class: "gift-config-title" }, Zh = { class: "gift-config-actions" }, Qh = { class: "gift-search-input" }, Jh = { class: "gift-id" }, ev = { class: "gift-id-text" }, tv = { class: "gift-thumbnail" }, iv = ["src", "alt"], nv = { key: 1 }, av = ["onClick"], ov = { class: "gift-lang-tags" }, sv = ["onClick"], lv = {
  key: 1,
  class: "gift-lang-empty"
}, rv = { class: "gift-loading-container" }, cv = { class: "gift-loading-text" }, uv = { class: "gift-empty-container" }, dv = { class: "gift-empty-text" }, hv = { class: "textarea-count-wrapper" }, vv = {
  key: 0,
  class: "form-field__error-tip"
}, mv = { class: "gift-lang-config-container" }, fv = { class: "gift-lang-config-info-banner" }, gv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, pv = { class: "gift-lang-config-table" }, bv = { class: "gift-lang-table-cell-name" }, yv = {
  key: 1,
  class: "gift-lang-table-empty"
}, Ev = { class: "gift-lang-table-cell-desc" }, _v = {
  key: 1,
  class: "gift-lang-table-empty"
}, wv = { class: "gift-category-edit-tags" }, Cv = ["onClick"], Iv = { class: "gift-category-add-wrapper" }, Av = { class: "category-select-list" }, Mv = {
  key: 0,
  class: "category-select-empty"
}, Tv = { class: "category-select-footer" }, mi = 0, Li = 2147483647, Jt = 1, ei = 99, bm = /* @__PURE__ */ Te({
  __name: "gift-config",
  setup(e) {
    var Mt;
    const n = _i(), i = (Mt = Yi().components) == null ? void 0 : Mt.giftConfig, s = [
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
    ], { t: o } = ke(), a = Fa(), l = new Fs({
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
        success: (V) => Y.success(V),
        error: (V) => Y.error(V)
      },
      onNavigateToCategoryManagement: () => n.push("/gift-category")
    }), d = Oi(l.getState()), u = l.subscribe(() => {
      d.value = l.getState();
    }), g = P(() => d.value.loading), m = P(() => d.value.displayList), h = P(() => d.value.searchInput), p = P(() => d.value.isEdit), b = P(() => d.value.editingId);
    P(() => d.value.giftList), P(() => d.value.categoryList);
    const R = P(() => d.value.giftLangConfig), M = P(() => d.value.editingLang);
    P(() => d.value.editingGiftForLang);
    const T = P(() => d.value.langEditForm);
    P(() => d.value.editingCategoryGift);
    const ie = P(() => d.value.allCategories), G = P(() => d.value.giftCategoryIds);
    P(() => d.value.deletingCategoryId), P(() => d.value.deletingItem);
    const K = P({
      get: () => d.value.dialogVisible,
      set: (V) => {
        V || l.closeDialog();
      }
    }), q = P({
      get: () => d.value.langConfigVisible,
      set: (V) => {
        V || l.closeGiftLangConfigDialog();
      }
    }), Q = P({
      get: () => d.value.langEditVisible,
      set: (V) => {
        V || l.closeLangEditDialog();
      }
    }), le = P({
      get: () => d.value.categoryEditVisible,
      set: (V) => {
        V || l.closeCategoryEditDialog();
      }
    }), he = P({
      get: () => d.value.categorySelectVisible,
      set: (V) => l.setCategorySelectVisible(V)
    }), Ee = P({
      get: () => d.value.categoryDeleteVisible,
      set: (V) => {
        V || l.cancelRemoveCategory();
      }
    }), W = P({
      get: () => d.value.deleteDialogVisible,
      set: (V) => {
        V || l.cancelDelete();
      }
    }), O = P({
      get: () => d.value.selectedCategoryId,
      set: (V) => l.setSelectedCategoryId(V)
    }), U = P(
      () => ie.value.filter((V) => !G.value.includes(V.id))
    ), D = I(!1), L = I(!1), F = I(null), N = I(null), S = I(!1), k = I(!1), w = Ui({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), ee = (V) => {
      w.price = Number(V) || mi;
    }, ce = (V) => {
      if (V === "" || V === null || V === void 0) {
        w.levelNum = void 0;
        return;
      }
      w.levelNum = Number(V);
    }, de = (V) => {
      l.setLangEditForm({ name: String(V ?? "") });
    }, _e = (V) => {
      l.setLangEditForm({ description: String(V ?? "") });
    }, $ = (V) => {
      l.setSearchInput(String(V ?? ""));
    }, j = () => l.search(), Se = () => l.clearSearch(), Re = (V) => {
      l.copyGiftId(V);
    }, $e = () => l.goToCategoryManagement(), De = (V) => [
      {
        key: "edit",
        label: o(r.EDIT),
        onClick: () => fe(V)
      },
      {
        key: "delete",
        label: o(r.DELETE),
        danger: !0,
        onClick: () => Ft(V)
      }
    ], qe = (V) => [
      {
        key: "edit",
        label: o(r.EDIT),
        onClick: () => b.value && Oe(b.value, V)
      },
      {
        key: "clear",
        label: o(r.CLEAR),
        danger: !0,
        disabled: !R.value[V].name && !R.value[V].description,
        onClick: () => b.value && l.clearLang(b.value, V)
      }
    ], Xe = (V) => l.getCategoryName(V), me = (V) => {
      var oe, He;
      (oe = F.value) == null || oe.reset(), (He = N.value) == null || He.reset(), l.closeDialog();
    }, ut = () => {
      var V, oe;
      Ze(), (V = F.value) == null || V.reset(), (oe = N.value) == null || oe.reset(), l.openCreateDialog();
    }, fe = async (V) => {
      var oe, He;
      (oe = F.value) == null || oe.reset(), (He = N.value) == null || He.reset(), w.id = V.id, w.name = V.name, w.iconUrl = V.iconUrl, w.price = V.price, w.animationUrl = V.animationUrl || "", w.levelNum = V.level ? parseInt(V.level) : void 0, w.description = V.description || "", w.extensionInfo = V.extensionInfo || "", w.enabled = V.enabled ?? !0, l.openEditDialog(V), await tt(), V.iconUrl && F.value && F.value.switchToUrlMode(), V.animationUrl && N.value && N.value.switchToUrlMode();
    }, Ze = () => {
      w.id = "", w.name = "", w.iconUrl = "", w.price = 0, w.animationUrl = "", w.levelNum = void 0, w.description = "", w.extensionInfo = "", w.enabled = !0, S.value = !1, k.value = !1;
    }, ze = async () => {
      var He, dt, Tt, Ue, St;
      if (!w.id.trim() && !p.value) {
        Y.error(o(r.ENTER_GIFT_ID));
        return;
      }
      if (te(w.id) > Ht) {
        Y.error(o("Gift ID max bytes", { max: Ht }));
        return;
      }
      if (!w.name.trim()) {
        Y.error(o(r.ENTER_GIFT_NAME));
        return;
      }
      if (te(w.name) > Je) {
        Y.error(o("Gift name max bytes", { max: Je }));
        return;
      }
      const V = ((He = F.value) == null ? void 0 : He.isUrlInputMode) ?? !0, oe = V && (((Ue = (Tt = (dt = F.value) == null ? void 0 : dt.urlInputValue) == null ? void 0 : Tt.trim) == null ? void 0 : Ue.call(Tt)) || "");
      if (!S.value && !w.iconUrl.trim() && !oe) {
        V && ((St = F.value) == null || St.setUrlError(o(r.ENTER_THUMBNAIL_URL))), Y.error(o(r.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (w.description && te(w.description) > et) {
        Y.error(o("Gift desc max bytes", { max: et }));
        return;
      }
      if (w.levelNum !== void 0 && (w.levelNum < Jt || w.levelNum > ei)) {
        Y.error(o("Gift level range", { min: Jt, max: ei }));
        return;
      }
      if (w.extensionInfo.trim()) {
        try {
          JSON.parse(w.extensionInfo.trim());
        } catch {
          Y.error(o(r.EXTENSION_INFO_JSON_FORMAT));
          return;
        }
        if (te(w.extensionInfo.trim()) > 100) {
          Y.error(o("Extension info max bytes", { max: 100 }));
          return;
        }
      }
      D.value = !0;
      try {
        let jt, Vt;
        try {
          [jt, Vt] = await zs([
            {
              handle: F.value,
              hasPendingFile: S.value,
              fallbackUrl: w.iconUrl,
              label: o(r.THUMBNAIL)
            },
            {
              handle: N.value,
              hasPendingFile: k.value,
              fallbackUrl: w.animationUrl,
              label: o(r.GIFT_MATERIAL)
            }
          ]);
        } catch (Qe) {
          const zt = Qe instanceof Vi || Qe instanceof Error ? Qe : new Error(String(Qe));
          Y.error(zt instanceof Vi ? zt.message : o("Operation Failed", { error: zt.message || o(r.UNKNOWN_HOST) })), D.value = !1;
          return;
        }
        await l.submitGift({
          id: w.id,
          name: w.name,
          iconUrl: jt,
          price: w.price,
          animationUrl: Vt,
          enabled: w.enabled,
          level: w.levelNum != null ? String(w.levelNum) : void 0,
          description: w.description,
          extensionInfo: w.extensionInfo
        });
      } catch {
      } finally {
        D.value = !1;
      }
    }, ne = (V) => {
      l.openGiftLangConfigDialog(V);
    }, ve = () => l.closeGiftLangConfigDialog(), Oe = (V, oe) => {
      oe && l.openLangEditDialog(V, oe);
    }, x = async () => {
      const V = T.value;
      if (V.name && te(V.name) > Je) {
        Y.error(o("Gift name max bytes", { max: Je }));
        return;
      }
      if (V.description && te(V.description) > et) {
        Y.error(o("Gift desc max bytes", { max: et }));
        return;
      }
      await l.saveLangEdit();
    }, J = (V) => {
      l.openCategoryEditDialog(V);
    }, Ae = (V) => {
      l.requestRemoveCategory(V);
    }, We = () => {
      l.confirmRemoveCategory();
    }, ft = () => l.openCategorySelectDialog(), at = () => {
      l.confirmAddCategory();
    }, Ft = (V) => l.requestDelete(V), Qi = () => void l.confirmDelete(), wi = () => l.onLanguageChanged();
    return At(async () => {
      L.value = await Na(), Fi.on("languageChanged", wi), await l.init();
    }), Ei(() => {
      Fi.off("languageChanged", wi), u(), l.dispose();
    }), (V, oe) => {
      const He = ae("t-input"), dt = ae("t-button"), Tt = ae("t-card"), Ue = ae("t-form-item"), St = ae("t-input-number"), jt = ae("t-textarea"), Vt = ae("t-form"), Qe = ae("t-dialog"), zt = ae("t-option"), Ji = ae("t-select");
      return y(), C("div", Xh, [
        c("div", Kh, [
          c("h1", qh, v(t(o)(t(r).GIFT_MANAGEMENT)), 1),
          c("div", Zh, [
            c("div", Qh, [
              f(He, {
                "model-value": h.value,
                placeholder: t(o)(t(r).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: t(oa)(h.value, t(sa)) ? "error" : "default",
                tips: t(oa)(h.value, t(sa)) ? t(o)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": $,
                onEnter: j,
                onClear: Se
              }, {
                suffixIcon: E(() => [
                  f(t(Mn), {
                    class: "search-icon",
                    onClick: j
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            f(dt, {
              variant: "outline",
              shape: "round",
              onClick: $e,
              theme: "primary"
            }, {
              icon: E(() => [
                f(t(Bo))
              ]),
              default: E(() => [
                B(" " + v(t(o)(t(r).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            f(dt, {
              theme: "primary",
              shape: "round",
              onClick: ut
            }, {
              default: E(() => [
                B(" ＋ " + v(t(o)(t(r).ADD_GIFT)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        f(Tt, { class: "gift-list-card" }, {
          default: E(() => [
            f(Zi, {
              columns: s,
              data: m.value,
              "row-key": "id",
              loading: g.value,
              "table-class-name": "gift-table",
              "body-class-name": "gift-list-content",
              "row-class-name": "gift-row"
            }, {
              "header-id": E(() => [
                B(v(t(o)(t(r).GIFT_ID)), 1)
              ]),
              "header-iconUrl": E(() => [
                B(v(t(o)(t(r).THUMBNAIL)), 1)
              ]),
              "header-name": E(() => [
                B(v(t(o)(t(r).NAME)), 1)
              ]),
              "header-description": E(() => [
                B(v(t(o)(t(r).DESCRIPTION)), 1)
              ]),
              "header-categories": E(() => [
                B(v(t(o)(t(r).CATEGORY)), 1)
              ]),
              "header-languageList": E(() => [
                B(v(t(o)(t(r).MULTILINGUAL_CONFIG)), 1)
              ]),
              "header-level": E(() => [
                B(v(t(o)(t(r).LEVEL)), 1)
              ]),
              "header-price": E(() => [
                B(v(t(o)(t(r).PRICE)), 1)
              ]),
              "header-createdAt": E(() => [
                B(v(t(o)(t(r).CREATE_TIME)), 1)
              ]),
              "header-actions": E(() => [
                B(v(t(o)(t(r).ACTIONS)), 1)
              ]),
              "cell-id": E(({ row: X }) => [
                c("div", Jh, [
                  c("span", ev, v(X.id || "-"), 1),
                  f(t(Dt), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (be) => Re(X.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": E(({ row: X }) => [
                c("div", tv, [
                  X.iconUrl ? (y(), C("img", {
                    key: 0,
                    src: X.iconUrl,
                    alt: X.name
                  }, null, 8, iv)) : (y(), C("span", nv, "🎁"))
                ])
              ]),
              "cell-name": E(({ row: X }) => [
                c("span", null, v(X.name || "-"), 1)
              ]),
              "cell-description": E(({ row: X }) => [
                c("span", null, v(X.description || "-"), 1)
              ]),
              "cell-categories": E(({ row: X }) => {
                var be;
                return [
                  c("div", {
                    class: "gift-category-cell",
                    onClick: (Xt) => J(X)
                  }, [
                    c("span", null, v(((be = X.categories) == null ? void 0 : be.join(", ")) || "-"), 1),
                    f(t(Pi), {
                      class: "gift-category-edit-icon",
                      size: "14"
                    })
                  ], 8, av)
                ];
              }),
              "cell-languageList": E(({ row: X }) => [
                c("div", ov, [
                  X.languageList && X.languageList.length > 0 ? (y(!0), C(pe, { key: 0 }, Ne(X.languageList, (be) => (y(), C("span", {
                    key: t(ii)(be),
                    class: "gift-lang-tag",
                    onClick: (Xt) => Oe(X.id, t(ka)(t(ii)(be)))
                  }, v(t(o)(t(Da)(t(ii)(be)))), 9, sv))), 128)) : (y(), C("span", lv, "-")),
                  f(t(Pi), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (be) => ne(X.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-level": E(({ row: X }) => [
                B(v(X.level || "-"), 1)
              ]),
              "cell-price": E(({ row: X }) => [
                B(v(X.price ?? 0), 1)
              ]),
              "cell-createdAt": E(({ row: X }) => [
                B(v(t(Vs)(X.createdAt)), 1)
              ]),
              "cell-customer-extra": E(({ row: X }) => {
                var be;
                return [
                  f(Et, {
                    "slot-component": (be = t(i)) == null ? void 0 : be.giftTableExtraColumns,
                    "slot-props": { gift: X }
                  }, null, 8, ["slot-component", "slot-props"])
                ];
              }),
              "cell-actions": E(({ row: X }) => {
                var be;
                return [
                  f($t, {
                    actions: De(X)
                  }, null, 8, ["actions"]),
                  f(Et, {
                    "slot-component": (be = t(i)) == null ? void 0 : be.giftRowActions,
                    "slot-props": { gift: X }
                  }, null, 8, ["slot-component", "slot-props"])
                ];
              }),
              loading: E(() => [
                c("div", rv, [
                  oe[18] || (oe[18] = c("div", { class: "gift-loading-spinner" }, null, -1)),
                  c("span", cv, v(t(o)(t(r).LOADING)), 1)
                ])
              ]),
              empty: E(() => [
                c("div", uv, [
                  c("span", dv, v(t(o)(t(r).NO_GIFT_DATA)), 1)
                ])
              ]),
              _: 1
            }, 8, ["data", "loading"])
          ]),
          _: 1
        }),
        f(Qe, {
          visible: K.value,
          "onUpdate:visible": oe[9] || (oe[9] = (X) => K.value = X),
          header: p.value ? t(o)(t(r).EDIT_GIFT) : t(o)(t(r).CREATE_GIFT),
          width: "600px",
          placement: "center",
          class: "gift-modal",
          "on-close": () => me()
        }, {
          footer: E(() => {
            var X, be, Xt, Rt;
            return [
              f(dt, {
                variant: "outline",
                shape: "round",
                onClick: oe[0] || (oe[0] = (Un) => me())
              }, {
                default: E(() => [
                  B(v(t(o)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              f(dt, {
                theme: "primary",
                shape: "round",
                disabled: D.value || !p.value && !w.id || !w.name.trim() || ((X = F.value) == null ? void 0 : X.isValidating) || ((be = N.value) == null ? void 0 : be.isValidating) || ((Xt = F.value) == null ? void 0 : Xt.hasUrlError) || ((Rt = N.value) == null ? void 0 : Rt.hasUrlError),
                loading: D.value,
                onClick: ze
              }, {
                default: E(() => [
                  B(v(D.value ? p.value ? t(o)(t(r).SAVING) : t(o)(t(r).CREATING) : p.value ? t(o)(t(r).SAVE) : t(o)(t(r).CREATE)), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ];
          }),
          default: E(() => [
            f(Vt, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": t(oi)(110),
              colon: !1
            }, {
              default: E(() => {
                var X;
                return [
                  p.value ? ue("", !0) : (y(), se(Ue, {
                    key: 0,
                    label: t(o)(t(r).GIFT_ID),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      f(He, {
                        modelValue: w.id,
                        "onUpdate:modelValue": oe[1] || (oe[1] = (be) => w.id = be),
                        placeholder: t(o)(t(r).ENTER_GIFT_ID),
                        status: t(te)(w.id) > t(Ht) ? "error" : "default",
                        tips: t(te)(w.id) > t(Ht) ? t(o)("Gift ID max bytes", { max: t(Ht) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: ye(["input-suffix-count", { "byte-overflow": t(te)(w.id) > t(Ht) }])
                          }, v(t(te)(w.id)) + "/" + v(t(Ht)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"])),
                  f(Ue, {
                    label: t(o)(t(r).GIFT_PRICE),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      f(St, {
                        "model-value": w.price,
                        min: mi,
                        max: Li,
                        "decimal-places": 0,
                        status: w.price < mi || w.price > Li ? "error" : "default",
                        tips: w.price < mi || w.price > Li ? t(o)("Gift price range", { min: mi, max: Li }) : "",
                        style: { width: "100%" },
                        placeholder: t(o)(t(r).ENTER_GIFT_PRICE),
                        "onUpdate:modelValue": ee
                      }, null, 8, ["model-value", "status", "tips", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  f(Ue, {
                    label: t(o)(t(r).GIFT_LEVEL)
                  }, {
                    default: E(() => [
                      f(St, {
                        "model-value": w.levelNum,
                        min: w.levelNum != null ? Jt : void 0,
                        max: w.levelNum != null ? ei : void 0,
                        status: (w.levelNum ?? 0) > 0 && ((w.levelNum ?? 0) < Jt || (w.levelNum ?? 0) > ei) ? "error" : "default",
                        tips: (w.levelNum ?? 0) > 0 && ((w.levelNum ?? 0) < Jt || (w.levelNum ?? 0) > ei) ? t(o)("Gift level range", { min: Jt, max: ei }) : "",
                        style: { width: "100%" },
                        placeholder: t(o)(t(r).ENTER_GIFT_LEVEL),
                        "onUpdate:modelValue": ce
                      }, null, 8, ["model-value", "min", "max", "status", "tips", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  f(Ue, {
                    label: t(o)(t(r).THUMBNAIL),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      f(Bi, {
                        ref_key: "iconUploadRef",
                        ref: F,
                        modelValue: w.iconUrl,
                        "onUpdate:modelValue": oe[2] || (oe[2] = (be) => w.iconUrl = be),
                        type: "gift-icon",
                        "upload-enabled": L.value,
                        "crop-enabled": !0,
                        "aspect-ratio": 1,
                        placeholder: t(o)(t(r).CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
                        "preview-width": 120,
                        "preview-height": 120,
                        "max-size": 5,
                        "max-bytes": 200,
                        "defer-upload": L.value,
                        onFileReady: oe[3] || (oe[3] = (be) => S.value = !!be)
                      }, null, 8, ["modelValue", "upload-enabled", "placeholder", "defer-upload"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  f(Ue, {
                    label: t(o)(t(r).GIFT_MATERIAL)
                  }, {
                    default: E(() => [
                      f(Bi, {
                        ref_key: "animUploadRef",
                        ref: N,
                        modelValue: w.animationUrl,
                        "onUpdate:modelValue": oe[4] || (oe[4] = (be) => w.animationUrl = be),
                        type: "gift-animation",
                        "upload-enabled": L.value,
                        "crop-enabled": !1,
                        placeholder: t(o)(t(r).CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
                        "preview-width": 120,
                        "preview-height": 120,
                        "max-size": 10,
                        accept: "video/mp4,.svga",
                        "accept-hint": t(o)(t(r).SUPPORT_MP4_SVGA_MAX_10MB),
                        "max-bytes": 200,
                        "defer-upload": L.value,
                        "skip-svga-validation": !0,
                        onFileReady: oe[5] || (oe[5] = (be) => k.value = !!be)
                      }, null, 8, ["modelValue", "upload-enabled", "placeholder", "accept-hint", "defer-upload"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  f(Ue, {
                    label: t(o)(t(r).GIFT_NAME),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      f(He, {
                        modelValue: w.name,
                        "onUpdate:modelValue": oe[6] || (oe[6] = (be) => w.name = be),
                        placeholder: t(o)(t(r).ENTER_GIFT_NAME),
                        status: t(te)(w.name) > t(Je) ? "error" : "default",
                        tips: t(te)(w.name) > t(Je) ? t(o)("Gift name max bytes", { max: t(Je) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: ye(["input-suffix-count", { "byte-overflow": t(te)(w.name) > t(Je) }])
                          }, v(t(te)(w.name)) + "/" + v(t(Je)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  f(Ue, {
                    label: t(o)(t(r).DESCRIPTION)
                  }, {
                    default: E(() => [
                      f(He, {
                        modelValue: w.description,
                        "onUpdate:modelValue": oe[7] || (oe[7] = (be) => w.description = be),
                        placeholder: t(o)(t(r).ENTER_GIFT_DESCRIPTION),
                        status: t(te)(w.description) > t(et) ? "error" : "default",
                        tips: t(te)(w.description) > t(et) ? t(o)("Gift desc max bytes", { max: t(et) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: ye(["input-suffix-count", { "byte-overflow": t(te)(w.description) > t(et) }])
                          }, v(t(te)(w.description)) + "/" + v(t(et)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  f(Et, {
                    "slot-component": (X = t(i)) == null ? void 0 : X.giftFormExtraFields,
                    "slot-props": { mode: p.value ? "edit" : "create", formData: { ...w } }
                  }, null, 8, ["slot-component", "slot-props"]),
                  f(Ue, {
                    label: t(o)(t(r).CUSTOM_EXTENSION_INFO)
                  }, {
                    default: E(() => [
                      c("div", hv, [
                        f(jt, {
                          modelValue: w.extensionInfo,
                          "onUpdate:modelValue": oe[8] || (oe[8] = (be) => w.extensionInfo = be),
                          placeholder: t(o)(t(r).EXTENSION_INFO_JSON_FORMAT),
                          autosize: { minRows: 3 },
                          status: t(te)(w.extensionInfo) > t(hi) ? "error" : "default"
                        }, null, 8, ["modelValue", "placeholder", "status"]),
                        c("span", {
                          class: ye(["textarea-suffix-count", { "byte-overflow": t(te)(w.extensionInfo) > t(hi) }])
                        }, v(t(te)(w.extensionInfo)) + "/" + v(t(hi)), 3)
                      ]),
                      t(te)(w.extensionInfo) > t(hi) ? (y(), C("div", vv, v(t(o)("Extension info max bytes", { max: t(hi) })), 1)) : ue("", !0)
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
        f(Qe, {
          visible: q.value,
          "onUpdate:visible": oe[10] || (oe[10] = (X) => q.value = X),
          header: t(o)(t(r).GIFT_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: t(o)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": ve,
          onConfirm: ve
        }, {
          default: E(() => [
            c("div", mv, [
              c("div", fv, [
                (y(), C("svg", gv, [...oe[19] || (oe[19] = [
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
              c("table", pv, [
                c("thead", null, [
                  c("tr", null, [
                    c("th", null, v(t(o)(t(r).LANGUAGE_TYPE)), 1),
                    c("th", null, v(t(o)(t(r).GIFT_NAME)), 1),
                    c("th", null, v(t(o)(t(r).DESCRIPTION)), 1),
                    c("th", null, v(t(o)(t(r).ACTIONS)), 1)
                  ])
                ]),
                c("tbody", null, [
                  (y(!0), C(pe, null, Ne(t(Oa), (X) => (y(), C("tr", { key: X }, [
                    c("td", null, v(t(o)(t(Ut)[X].label)), 1),
                    c("td", bv, [
                      R.value[X].name ? (y(), C(pe, { key: 0 }, [
                        B(v(R.value[X].name), 1)
                      ], 64)) : (y(), C("span", yv, v(t(o)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", Ev, [
                      R.value[X].description ? (y(), C(pe, { key: 0 }, [
                        B(v(R.value[X].description), 1)
                      ], 64)) : (y(), C("span", _v, v(t(o)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", null, [
                      f($t, {
                        actions: qe(X)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        f(Qe, {
          visible: Q.value,
          "onUpdate:visible": oe[11] || (oe[11] = (X) => Q.value = X),
          header: M.value ? t(o)(t(r).EDIT_GIFT_LANGUAGE_INFO, { lang: t(o)(t(Ut)[M.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: t(o)(t(r).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: x
        }, {
          default: E(() => [
            f(Vt, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": t(oi)(110),
              colon: !1
            }, {
              default: E(() => [
                f(Ue, {
                  label: t(o)(t(r).GIFT_NAME)
                }, {
                  default: E(() => [
                    f(He, {
                      "model-value": T.value.name,
                      placeholder: M.value ? t(o)(t(r).ENTER_LANGUAGE_GIFT_NAME, { lang: t(o)(t(Ut)[M.value].label) }) : "",
                      status: t(te)(T.value.name) > t(Je) ? "error" : "default",
                      tips: t(te)(T.value.name) > t(Je) ? t(o)(t(r).GIFT_NAME_MAX_BYTES, { max: t(Je) }) : "",
                      "onUpdate:modelValue": de
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(T.value.name) > t(Je) }])
                        }, v(t(te)(T.value.name)) + "/" + v(t(Je)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(Ue, {
                  label: t(o)(t(r).DESCRIPTION)
                }, {
                  default: E(() => [
                    f(He, {
                      "model-value": T.value.description,
                      placeholder: M.value ? t(o)(t(r).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: t(o)(t(Ut)[M.value].label) }) : "",
                      status: t(te)(T.value.description) > t(et) ? "error" : "default",
                      tips: t(te)(T.value.description) > t(et) ? t(o)(t(r).GIFT_DESC_MAX_BYTES, { max: t(et) }) : "",
                      "onUpdate:modelValue": _e
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(T.value.description) > t(et) }])
                        }, v(t(te)(T.value.description)) + "/" + v(t(et)), 3)
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
        f(Qe, {
          visible: le.value,
          "onUpdate:visible": oe[12] || (oe[12] = (X) => le.value = X),
          header: t(o)(t(r).EDIT_GIFT_CATEGORY),
          width: "420px",
          placement: "center",
          class: "gift-category-edit-modal",
          "confirm-btn": { content: t(o)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          onConfirm: oe[13] || (oe[13] = (X) => le.value = !1)
        }, {
          default: E(() => [
            c("div", wv, [
              G.value.length > 0 ? (y(!0), C(pe, { key: 0 }, Ne(G.value, (X) => (y(), C("span", {
                key: X,
                class: "gift-category-edit-tag"
              }, [
                B(v(Xe(X)) + " ", 1),
                c("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (be) => Ae(X)
                }, [...oe[20] || (oe[20] = [
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
                ])], 8, Cv)
              ]))), 128)) : ue("", !0),
              c("div", Iv, [
                f(dt, {
                  size: "small",
                  variant: "text",
                  theme: "primary",
                  onClick: ft
                }, {
                  default: E(() => [
                    B(" + " + v(t(o)(t(r).ADD)), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        f(Qe, {
          visible: W.value,
          "onUpdate:visible": oe[14] || (oe[14] = (X) => W.value = X),
          header: t(o)(t(r).CONFIRM_DELETE_GIFT),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(o)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: Qi
        }, {
          default: E(() => [
            c("p", null, v(t(o)(t(r).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        f(Qe, {
          visible: Ee.value,
          "onUpdate:visible": oe[15] || (oe[15] = (X) => Ee.value = X),
          header: t(o)(t(r).CONFIRM_REMOVE_CATEGORY),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(o)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: We
        }, {
          default: E(() => [
            c("p", null, v(t(o)(t(r).REMOVE_CATEGORY_DESCRIPTION)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        f(Qe, {
          visible: he.value,
          "onUpdate:visible": oe[17] || (oe[17] = (X) => he.value = X),
          header: t(o)(t(r).SELECT_CATEGORY),
          width: "360px",
          placement: "center",
          footer: !1,
          "on-close": () => he.value = !1
        }, {
          default: E(() => [
            c("div", Av, [
              f(Ji, {
                modelValue: O.value,
                "onUpdate:modelValue": oe[16] || (oe[16] = (X) => O.value = X),
                placeholder: t(o)(t(r).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: E(() => [
                  (y(!0), C(pe, null, Ne(U.value, (X) => (y(), se(zt, {
                    key: X.id,
                    value: X.id,
                    label: X.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              U.value.length === 0 ? (y(), C("div", Mv, v(t(o)(t(r).NO_AVAILABLE_CATEGORIES)), 1)) : ue("", !0)
            ]),
            c("div", Tv, [
              f(dt, {
                theme: "primary",
                shape: "round",
                disabled: !O.value,
                onClick: at
              }, {
                default: E(() => [
                  B(v(t(o)(t(r).CONFIRM)), 1)
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
}), Sv = { class: "gift-category-container" }, Rv = { class: "gift-category-page-header" }, Lv = { class: "gift-category-title-section" }, xv = ["viewBox", "stroke-width", "stroke-linecap"], Nv = ["d"], kv = { class: "gift-category-actions" }, Dv = {
  key: 0,
  class: "create-category-tooltip"
}, Ov = { class: "gift-category-table-wrapper" }, Uv = { class: "gift-id" }, $v = { class: "gift-id-text" }, Pv = { class: "category-name" }, Fv = { class: "category-desc" }, Vv = { class: "category-lang-tags" }, zv = ["onClick"], Gv = {
  key: 1,
  class: "category-lang-empty"
}, Bv = { class: "category-count" }, Wv = { class: "category-loading-container" }, Hv = { class: "category-loading-text" }, Yv = { class: "category-empty-container" }, jv = { class: "category-empty-text" }, Xv = { class: "category-lang-config-container" }, Kv = { class: "category-lang-config-info-banner" }, qv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, Zv = { class: "category-lang-config-table" }, Qv = { class: "category-lang-table-cell-name" }, Jv = {
  key: 1,
  class: "category-lang-table-empty"
}, em = { class: "category-lang-table-cell-desc" }, tm = {
  key: 1,
  class: "category-lang-table-empty"
}, ym = /* @__PURE__ */ Te({
  __name: "gift-category",
  setup(e) {
    const n = _i(), { t: i } = ke(), s = Fa(), o = new Gs({
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
        success: (S) => Y.success(S),
        error: (S) => Y.error(S)
      },
      onNavigateBack: () => n.push("/gift-config")
    }), a = Oi(o.getState()), l = o.subscribe(() => {
      a.value = o.getState();
    }), d = P(() => a.value.loading), u = P(() => a.value.categoryList), g = P(() => a.value.isEdit), m = P(() => a.value.formData), h = P(() => a.value.categoryLangConfig), p = P(() => a.value.editingLang), b = P(() => a.value.langEditForm), R = P({
      get: () => a.value.dialogVisible,
      set: (S) => {
        S || o.closeDialog();
      }
    }), M = P({
      get: () => a.value.langConfigVisible,
      set: (S) => {
        S || o.closeLangConfigDialog();
      }
    }), T = P({
      get: () => a.value.langEditVisible,
      set: (S) => {
        S || o.closeLangEditDialog();
      }
    }), ie = P({
      get: () => a.value.deleteDialogVisible,
      set: (S) => {
        S || o.cancelDelete();
      }
    }), G = P({
      get: () => a.value.formData.categoryId,
      set: (S) => o.setFormData({ categoryId: S })
    }), K = P({
      get: () => a.value.formData.name,
      set: (S) => o.setFormData({ name: S })
    }), q = P({
      get: () => a.value.formData.description,
      set: (S) => o.setFormData({ description: S })
    }), Q = P({
      get: () => a.value.langEditForm.name,
      set: (S) => o.setLangEditForm({ name: S })
    }), le = P({
      get: () => a.value.langEditForm.description,
      set: (S) => o.setLangEditForm({ description: S })
    }), he = I(!1), Ee = [
      { key: "id", width: 120, className: "col-id" },
      { key: "name", className: "col-name" },
      { key: "description", className: "col-desc" },
      { key: "languageList", width: 200, className: "col-languages" },
      { key: "giftCount", width: 80, className: "col-count" },
      { key: "actions", fitContent: !0, minWidth: 100, maxWidth: 220, className: "col-actions" }
    ], W = (S) => {
      La(String(S || "")), Y.success(i("Copy Label Copied", { label: i(r.CATEGORY_ID) }));
    }, O = (S, k) => {
      const w = ii(k), ee = ka(w);
      ee && o.openLangEditDialog(S, ee);
    }, U = (S) => [
      {
        key: "edit",
        label: i(r.EDIT),
        onClick: () => o.openEditDialog(S)
      },
      {
        key: "delete",
        label: i(r.DELETE),
        danger: !0,
        onClick: () => o.requestDelete(S)
      }
    ], D = (S) => [
      {
        key: "edit",
        label: i(r.EDIT),
        onClick: () => a.value.editingId && o.openLangEditDialog(a.value.editingId, S)
      },
      {
        key: "clear",
        label: i(r.CLEAR),
        danger: !0,
        disabled: !a.value.categoryLangConfig[S].name && !a.value.categoryLangConfig[S].description,
        onClick: () => a.value.editingId && o.clearLang(a.value.editingId, S)
      }
    ], L = async () => {
      const S = a.value.formData;
      if (!S.categoryId.trim()) {
        Y.error(i(r.ENTER_CATEGORY_ID));
        return;
      }
      if (!S.name.trim()) {
        Y.error(i(r.ENTER_CATEGORY_NAME));
        return;
      }
      he.value = !0;
      try {
        await o.submitForm({
          categoryId: S.categoryId.trim(),
          name: S.name.trim(),
          description: S.description.trim()
        });
      } catch {
      } finally {
        he.value = !1;
      }
    }, F = async () => {
      const S = a.value.langEditForm;
      if (S.name && te(S.name) > st) {
        Y.error(i("Category name max bytes", { max: st }));
        return;
      }
      if (S.description && te(S.description) > lt) {
        Y.error(i("Category desc max bytes", { max: lt }));
        return;
      }
      await o.saveLangEdit();
    }, N = () => o.onLanguageChanged();
    return At(() => {
      o.init(), Fi.on("languageChanged", N);
    }), Ei(() => {
      Fi.off("languageChanged", N), l(), o.dispose();
    }), (S, k) => {
      const w = ae("t-button"), ee = ae("t-input"), ce = ae("t-form-item"), de = ae("t-form"), _e = ae("t-dialog");
      return y(), C("div", Sv, [
        c("div", Rv, [
          c("div", Lv, [
            f(w, {
              variant: "outline",
              shape: "circle",
              class: "back-btn",
              onClick: k[0] || (k[0] = ($) => t(o).goBack()),
              title: t(i)(t(r).BACK_TO_LIST)
            }, {
              icon: E(() => [
                (y(), C("svg", {
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
                  }, null, 8, Nv)
                ], 8, xv))
              ]),
              _: 1
            }, 8, ["title"]),
            c("h1", null, v(t(i)(t(r).CATEGORY_MANAGEMENT)), 1)
          ]),
          c("div", kv, [
            c("div", {
              class: ye(["create-category-btn-wrapper", { disabled: u.value.length >= t(nn) }])
            }, [
              f(w, {
                theme: "primary",
                shape: "round",
                disabled: u.value.length >= t(nn),
                onClick: k[1] || (k[1] = ($) => t(o).openCreateDialog())
              }, {
                default: E(() => [
                  B(" ＋ " + v(t(i)(t(r).ADD_CATEGORY)), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              u.value.length >= t(nn) ? (y(), C("div", Dv, v(t(i)(t(r).CATEGORY_LIMIT_REACHED)), 1)) : ue("", !0)
            ], 2)
          ])
        ]),
        c("div", Ov, [
          f(Zi, {
            columns: Ee,
            data: u.value,
            "row-key": "id",
            loading: d.value,
            "table-class-name": "category-table",
            "body-class-name": "category-list-content"
          }, {
            "header-id": E(() => [
              B(v(t(i)(t(r).CATEGORY_ID)), 1)
            ]),
            "header-name": E(() => [
              B(v(t(i)(t(r).CATEGORY_NAME)), 1)
            ]),
            "header-description": E(() => [
              B(v(t(i)(t(r).CATEGORY_DESCRIPTION)), 1)
            ]),
            "header-languageList": E(() => [
              B(v(t(i)(t(r).MULTILINGUAL_CONFIG)), 1)
            ]),
            "header-giftCount": E(() => [
              B(v(t(i)(t(r).NUMBER_OF_GIFTS)), 1)
            ]),
            "header-actions": E(() => [
              B(v(t(i)(t(r).ACTIONS)), 1)
            ]),
            "cell-id": E(({ row: $ }) => [
              c("div", Uv, [
                c("span", $v, v($.id || "-"), 1),
                f(t(Dt), {
                  class: "copy-icon",
                  size: "14",
                  onClick: (j) => W($.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-name": E(({ row: $ }) => [
              c("span", Pv, v($.name || "-"), 1)
            ]),
            "cell-description": E(({ row: $ }) => [
              c("span", Fv, v($.description || "-"), 1)
            ]),
            "cell-languageList": E(({ row: $ }) => [
              c("div", Vv, [
                $.languageList && $.languageList.length > 0 ? (y(!0), C(pe, { key: 0 }, Ne($.languageList, (j) => (y(), C("span", {
                  key: t(ii)(j),
                  class: "category-lang-tag",
                  onClick: (Se) => O($.id, j)
                }, v(t(i)(t(Da)(t(ii)(j)))), 9, zv))), 128)) : (y(), C("span", Gv, "-")),
                f(t(Pi), {
                  class: "category-lang-edit-icon",
                  size: "14",
                  onClick: (j) => t(o).openLangConfigDialog($.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-giftCount": E(({ row: $ }) => [
              c("span", Bv, v($.giftCount ?? 0), 1)
            ]),
            "cell-actions": E(({ row: $ }) => [
              f($t, {
                actions: U($)
              }, null, 8, ["actions"])
            ]),
            loading: E(() => [
              c("div", Wv, [
                k[13] || (k[13] = c("div", { class: "category-loading-spinner" }, null, -1)),
                c("span", Hv, v(t(i)(t(r).LOADING)), 1)
              ])
            ]),
            empty: E(() => [
              c("div", Yv, [
                c("span", jv, v(t(i)(t(r).CREATE_CATEGORY_FIRST)), 1)
              ])
            ]),
            _: 1
          }, 8, ["data", "loading"])
        ]),
        f(_e, {
          visible: R.value,
          "onUpdate:visible": k[5] || (k[5] = ($) => R.value = $),
          header: g.value ? t(i)(t(r).EDIT_CATEGORY) : t(i)(t(r).CREATE_CATEGORY),
          width: "500px",
          placement: "center",
          class: "gift-modal",
          "confirm-btn": {
            content: he.value ? t(i)(t(r).CREATING) : g.value ? t(i)(t(r).SAVE) : t(i)(t(r).CREATE),
            disabled: he.value || !m.value.categoryId.trim() || !m.value.name.trim(),
            loading: he.value,
            shape: "round"
          },
          "cancel-btn": { shape: "round" },
          "on-confirm": L
        }, {
          default: E(() => [
            f(de, {
              class: "gift-modal-body",
              "label-width": t(oi)(100),
              colon: !1
            }, {
              default: E(() => [
                f(ce, {
                  label: t(i)(t(r).CATEGORY_ID),
                  "required-mark": !0
                }, {
                  default: E(() => [
                    f(ee, {
                      modelValue: G.value,
                      "onUpdate:modelValue": k[2] || (k[2] = ($) => G.value = $),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_ID),
                      disabled: g.value,
                      status: t(te)(m.value.categoryId) > t(vi) ? "error" : "default",
                      tips: t(te)(m.value.categoryId) > t(vi) ? t(i)("Category ID max bytes", { max: t(vi) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(m.value.categoryId) > t(vi) }])
                        }, v(t(te)(m.value.categoryId)) + "/" + v(t(vi)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "disabled", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(ce, {
                  label: t(i)(t(r).CATEGORY_NAME),
                  "required-mark": !0
                }, {
                  default: E(() => [
                    f(ee, {
                      modelValue: K.value,
                      "onUpdate:modelValue": k[3] || (k[3] = ($) => K.value = $),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_NAME),
                      status: t(te)(m.value.name) > t(st) ? "error" : "default",
                      tips: t(te)(m.value.name) > t(st) ? t(i)("Category name max bytes", { max: t(st) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(m.value.name) > t(st) }])
                        }, v(t(te)(m.value.name)) + "/" + v(t(st)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(ce, {
                  label: t(i)(t(r).DESCRIPTION)
                }, {
                  default: E(() => [
                    f(ee, {
                      modelValue: q.value,
                      "onUpdate:modelValue": k[4] || (k[4] = ($) => q.value = $),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_DESCRIPTION),
                      status: t(te)(m.value.description) > t(lt) ? "error" : "default",
                      tips: t(te)(m.value.description) > t(lt) ? t(i)("Category desc max bytes", { max: t(lt) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(m.value.description) > t(lt) }])
                        }, v(t(te)(m.value.description)) + "/" + v(t(lt)), 3)
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
        f(_e, {
          visible: M.value,
          "onUpdate:visible": k[6] || (k[6] = ($) => M.value = $),
          header: t(i)(t(r).CATEGORY_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: t(i)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": () => t(o).closeLangConfigDialog(),
          onConfirm: k[7] || (k[7] = ($) => t(o).closeLangConfigDialog())
        }, {
          default: E(() => [
            c("div", Xv, [
              c("div", Kv, [
                (y(), C("svg", qv, [...k[14] || (k[14] = [
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
              c("table", Zv, [
                c("thead", null, [
                  c("tr", null, [
                    c("th", null, v(t(i)(t(r).LANGUAGE_TYPE)), 1),
                    c("th", null, v(t(i)(t(r).CATEGORY_NAME)), 1),
                    c("th", null, v(t(i)(t(r).CATEGORY_DESCRIPTION)), 1),
                    c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                  ])
                ]),
                c("tbody", null, [
                  (y(!0), C(pe, null, Ne(t(Oa), ($) => (y(), C("tr", { key: $ }, [
                    c("td", null, v(t(i)(t(Ut)[$].label)), 1),
                    c("td", Qv, [
                      h.value[$].name ? (y(), C(pe, { key: 0 }, [
                        B(v(h.value[$].name), 1)
                      ], 64)) : (y(), C("span", Jv, v(t(i)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", em, [
                      h.value[$].description ? (y(), C(pe, { key: 0 }, [
                        B(v(h.value[$].description), 1)
                      ], 64)) : (y(), C("span", tm, v(t(i)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", null, [
                      f($t, {
                        actions: D($)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "on-close"]),
        f(_e, {
          visible: T.value,
          "onUpdate:visible": k[10] || (k[10] = ($) => T.value = $),
          header: p.value ? t(i)(t(r).EDIT_CATEGORY_LANGUAGE_INFO, { lang: t(i)(t(Ut)[p.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: t(i)(t(r).SAVE), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: F
        }, {
          default: E(() => [
            f(de, {
              class: "gift-modal-body",
              "label-width": t(oi)(100),
              colon: !1
            }, {
              default: E(() => [
                f(ce, {
                  label: t(i)(t(r).CATEGORY_NAME)
                }, {
                  default: E(() => [
                    f(ee, {
                      modelValue: Q.value,
                      "onUpdate:modelValue": k[8] || (k[8] = ($) => Q.value = $),
                      placeholder: p.value ? t(i)(t(r).ENTER_LANGUAGE_CATEGORY_NAME, { lang: t(i)(t(Ut)[p.value].label) }) : "",
                      status: t(te)(b.value.name) > t(st) ? "error" : "default",
                      tips: t(te)(b.value.name) > t(st) ? t(i)(t(r).CATEGORY_NAME_MAX_BYTES, { max: t(st) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(b.value.name) > t(st) }])
                        }, v(t(te)(b.value.name)) + "/" + v(t(st)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                f(ce, {
                  label: t(i)(t(r).CATEGORY_DESCRIPTION)
                }, {
                  default: E(() => [
                    f(ee, {
                      modelValue: le.value,
                      "onUpdate:modelValue": k[9] || (k[9] = ($) => le.value = $),
                      placeholder: p.value ? t(i)(t(r).ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: t(i)(t(Ut)[p.value].label) }) : "",
                      status: t(te)(b.value.description) > t(lt) ? "error" : "default",
                      tips: t(te)(b.value.description) > t(lt) ? t(i)(t(r).CATEGORY_DESC_MAX_BYTES, { max: t(lt) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: ye(["input-suffix-count", { "byte-overflow": t(te)(b.value.description) > t(lt) }])
                        }, v(t(te)(b.value.description)) + "/" + v(t(lt)), 3)
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
        f(_e, {
          visible: ie.value,
          "onUpdate:visible": k[11] || (k[11] = ($) => ie.value = $),
          header: t(i)(t(r).CONFIRM_DELETE_CATEGORY),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(i)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: k[12] || (k[12] = ($) => t(o).confirmDelete())
        }, {
          default: E(() => [
            c("p", null, v(t(i)(t(r).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"])
      ]);
    };
  }
}), Em = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let Le = null, im = !0;
const En = I([]), ba = I(!0), ya = I(null), nm = I({}), am = I(null);
let xe = null;
const ki = I([]), _n = I(1), wn = I(!0), Cn = I(!1);
function Ea() {
  return xe || (xe = new Js({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: e, pageCursors: n, count: i }) => {
      if (!Le)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const o = await Ws({
        page: e,
        pageCursors: n,
        pageSize: i
      });
      return {
        list: o.lives,
        pageCursors: o.pageCursors,
        hasMoreData: o.hasMoreData
      };
    }
  }), xe.subscribe((e) => {
    ki.value = e.pageData, _n.value = e.currentPage, wn.value = e.hasMore, Cn.value = e.loading, En.value = [...e.pageData];
  }), xe);
}
function Pt() {
  const e = () => {
    Le || (Le = new Bs({
      onStateChange: (T) => {
        T.liveList !== void 0 && (En.value = T.liveList), T.hasMore !== void 0 && (ba.value = T.hasMore), T.currentLive !== void 0 && (ya.value = T.currentLive), T.loading !== void 0 && (nm.value = T.loading), T.error !== void 0 && (am.value = T.error);
      },
      getActive: () => im
    }), console.log("[useLiveMonitorState] Core initialized (singleton)"));
  };
  return nt(() => {
    console.log("[useLiveMonitorState] Component unmounted, core kept for other consumers");
  }), At(() => {
    if (e(), Ea(), xe) {
      const T = xe.getSnapshot();
      ki.value = T.pageData, _n.value = T.currentPage, wn.value = T.hasMore, Cn.value = T.loading;
    }
  }), Le || e(), Ea(), {
    init: (T) => {
      if (console.log("[useLiveMonitorState] init called", { hasCore: !!Le, configKeys: Object.keys(T) }), Le || (console.warn("[useLiveMonitorState] core is null, initializing..."), e(), console.log("[useLiveMonitorState] after initCore, hasCore:", !!Le)), !Le) {
        console.error("[useLiveMonitorState] core is still null after initCore! Cannot initialize.");
        return;
      }
      Le.init(T), xe == null || xe.goToFirstPage().catch((ie) => {
        console.error("[useLiveMonitorState] Failed to load first page:", ie);
      });
    },
    liveList: En,
    hasMore: ba,
    currentLive: ya,
    setCurrentLive: (T) => {
      Le == null || Le.setCurrentLive(T);
    },
    fetchLiveList: async (T) => {
      if (!xe)
        return console.warn("[useLiveMonitorState] fetchLiveList: controller is null, returning empty list"), [];
      switch (T == null ? void 0 : T.action) {
        case "first":
          await xe.goToFirstPage();
          break;
        case "prev":
          await xe.prevPage();
          break;
        case "next":
        default:
          await xe.nextPage();
          break;
      }
      return ki.value;
    },
    createLive: async (T) => {
      if (!Le)
        throw console.warn("[useLiveMonitorState] createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      return Le.createLive(T);
    },
    updateLive: async (T) => {
      if (!Le) {
        console.warn("[useLiveMonitorState] updateLive: core is null, skipping");
        return;
      }
      return Le.updateLive(T);
    },
    endLive: async (T) => {
      if (!Le) {
        console.warn("[useLiveMonitorState] endLive: core is null, skipping");
        return;
      }
      return Le.endLive(T);
    },
    fetchLiveDetail: async (T) => Le ? Le.fetchLiveDetail(T) : (console.warn("[useLiveMonitorState] fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (T) => Le ? Le.fetchLiveStats(T) : (console.warn("[useLiveMonitorState] fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (T) => {
      if (!Le) {
        console.warn("[useLiveMonitorState] startPlay: core is null, skipping");
        return;
      }
      return Le.startPlay(T);
    },
    stopPlay: async (T) => {
      if (!Le) {
        console.warn("[useLiveMonitorState] stopPlay: core is null, skipping", T);
        return;
      }
      return Le.stopPlay(T);
    },
    paginatedList: {
      pageData: ki,
      currentPage: _n,
      hasMore: wn,
      loading: Cn,
      nextPage: () => (xe == null ? void 0 : xe.nextPage()) ?? Promise.resolve(),
      prevPage: () => (xe == null ? void 0 : xe.prevPage()) ?? Promise.resolve(),
      goToFirstPage: () => (xe == null ? void 0 : xe.goToFirstPage()) ?? Promise.resolve(),
      refreshCurrentPage: () => (xe == null ? void 0 : xe.refreshCurrentPage()) ?? Promise.resolve()
    }
  };
}
export {
  Em as L,
  ym as _,
  bm as a,
  pm as b,
  gm as c,
  pa as d,
  Fa as e,
  Pt as f,
  Ar as g,
  ul as h,
  Mr as i,
  fm as l,
  On as u
};
