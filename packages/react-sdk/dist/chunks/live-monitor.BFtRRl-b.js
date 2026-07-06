import { ref as C, onUnmounted as tt, defineComponent as Ie, resolveComponent as ie, openBlock as y, createElementBlock as w, createElementVNode as c, toDisplayString as v, unref as t, createVNode as g, withCtx as E, createTextVNode as B, computed as F, watch as Me, normalizeClass as be, onMounted as At, onBeforeUnmount as Ei, normalizeStyle as Ge, Fragment as ge, renderList as Ne, createCommentVNode as ce, createBlock as oe, withModifiers as gi, nextTick as Je, inject as Lo, renderSlot as ht, resolveDynamicComponent as ai, withDirectives as pi, vShow as Di, mergeProps as wn, createSlots as _a, onErrorCaptured as xo, normalizeProps as No, shallowRef as Oi, h as Zt, vModelText as ko, Teleport as Cn, reactive as Ui, isRef as Hn } from "vue";
import { useRouter as _i, useRoute as Do } from "vue-router";
import { SearchIcon as In, RefreshIcon as An, FullscreenIcon as wa, CloseIcon as Wi, SoundMuteIcon as Oo, SoundIcon as Uo, NotificationIcon as Ca, StopCircleIcon as Ia, UploadIcon as Yn, ImageIcon as $o, CutIcon as Po, ChevronDownIcon as $i, ChevronRightIcon as Aa, AddIcon as Mn, CopyIcon as Dt, DeleteIcon as Fo, EditIcon as Pi, InfoCircleIcon as Nt, LoginIcon as Vo, CheckCircleIcon as Hi, ChatOffIcon as Ma, UserCheckedIcon as Ta, UserBlockedIcon as Sa, MoreIcon as zo, CloseCircleIcon as Go, AdjustmentIcon as Bo } from "tdesign-icons-vue-next";
import { MessagePlugin as X, Tooltip as Ct } from "tdesign-vue-next";
import { useUIKit as ke, i18next as Fi } from "@tencentcloud/uikit-base-component-vue3";
import { s as Wo, av as Ho, ax as Yo, aG as J, H as bi, aM as jo, b as Xo, W as Ko, aZ as Ra, a$ as qo, Z as Zo, be as jn, bL as Qo, bl as Xn, bg as Jo, bJ as es, bI as ts, bH as is, bm as ns, ap as as, bd as os, bf as ss, au as ls, Y as rs, aj as Kn, aY as cs, aH as us, A as Wt, J as bt, g as Xe, b4 as ti, ah as La, bs as xa, t as Vi, $ as ds, ak as qn, V as Zn, as as hs, aq as Qn, bG as vs, ac as ms, aJ as fs, N as gs, aT as ps, b7 as Jn, aC as bs, a1 as ys, a as Ot, bk as Es, aW as xi, a3 as _s, br as ea, bq as ta, b9 as ia, aL as gt, i as ws, D as Cs, r as Is, b6 as na, p as aa, aF as As, aR as Na, aP as ii, aS as ka, n as Ht, o as Ze, l as Qe, m as hi, v as Da, w as Ut, bt as Ms, q as Ts, P as nn, d as vi, e as ot, C as st, O as Ss, aw as Rs } from "./main-layout.Dw3RNEcP.js";
import { c as Ls, s as dn, D as xs, a as Ns, m as ks, b as Ds, d as Os, e as Us, P as $s } from "./gift-category.qmtjx5qb.js";
import { b9 as Ps, aL as Fs, c as Vs, aM as zs, ap as Gs, e as Bs, b as Ws, a3 as Hs, aT as Ys, aY as r, b2 as an, b3 as Tn, b8 as js, b5 as Xs, i as Ks, h as qs, D as Yi, k as Zs, aR as oa, X as oi, aI as Qs, W as Oa, aA as Js, Q as Ua, ax as el, z as tl, E as il, au as sa } from "./upload.HR7xdC-w.js";
import { LiveView as nl, useLoginState as $a, useLiveAudienceState as Pa, LiveAudienceList as al, useLiveListState as ol } from "tuikit-atomicx-vue3";
import { BarrageList as sl } from "tuikit-atomicx-vue3/live";
import { a as ll } from "./moderation-store.DpCJ9ZU8.js";
let ni = null;
function rl() {
  return ni || (ni = new Wo({
    onStateChange: (e) => {
      zi && (zi.value = e.giftList), Gi && (Gi.value = e.giftCategoryList);
    }
  })), ni;
}
let zi = null, Gi = null;
function Fa() {
  const e = C([]), n = C([]);
  zi = e, Gi = n;
  const i = rl();
  return e.value = i.getGiftList(), n.value = i.getGiftCategoryList(), tt(() => {
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
    getGiftCategoryLanguage: async (G, q) => i.getGiftCategoryLanguage(G, q),
    setGiftCategoryLanguage: async (G, q, j, te) => i.setGiftCategoryLanguage(G, q, j, te),
    deleteGiftCategoryLanguage: async (G, q) => i.deleteGiftCategoryLanguage(G, q)
  };
}
function cl(e) {
  const { liveId: n, pageSize: i } = e, s = C(!1), o = C(0), a = C([]), l = C(0), d = C(1), u = C(!1), p = C([]), m = C([]), h = C(!1), f = C(null);
  let b = !0;
  tt(() => {
    b = !1;
  });
  const L = async () => {
    try {
      const W = await Ys();
      return b && (s.value = W > 0, o.value = W), W;
    } catch (W) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", W), W;
    }
  }, S = async (W = {}) => {
    u.value = !0;
    try {
      const k = await Hs({ pageSize: i, liveId: n, ...W });
      return b && (a.value = k.list || [], l.value = k.total || 0, d.value = W.pageNum || 1), k;
    } catch (k) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", k), k;
    } finally {
      b && (u.value = !1);
    }
  }, T = async (W) => {
    try {
      const k = W.items ?? (() => {
        const O = a.value;
        return W.ids.map((D) => {
          const R = O.find((M) => M.id === D);
          return {
            id: D,
            content: (R == null ? void 0 : R.content) ?? D,
            userId: (R == null ? void 0 : R.userId) ?? ""
          };
        });
      })();
      await Ws({ ids: W.ids, items: k, liveId: W.liveId ?? n });
    } catch (k) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", k), k;
    }
  }, ee = async (W) => {
    try {
      await Bs({ content: W.keywords.join(","), liveId: n });
    } catch (k) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", k), k;
    }
  }, G = async () => {
    if (!n) return [];
    try {
      const W = await Yo(n);
      return p.value = W, W;
    } catch (W) {
      throw f.value = W, W;
    }
  }, q = async () => {
    if (!n) return [];
    try {
      const W = await Ho(n);
      return m.value = W, W;
    } catch (W) {
      throw f.value = W, W;
    }
  };
  return {
    textModerationAvailable: s,
    textModerationRemainUsage: o,
    textModerationList: a,
    textModerationTotal: l,
    textModerationPageNum: d,
    textModerationLoading: u,
    fetchTextModerationUsage: L,
    fetchTextModerationList: S,
    approveTextModerationItems: T,
    bypassCorrectionKeyword: ee,
    muteMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, f.value = null;
      try {
        await Gs(n, W.memberAccounts, W.muteTime), await G();
      } catch (k) {
        throw f.value = k, console.error("[useRiskControlState] muteMember failed:", k), k;
      } finally {
        h.value = !1;
      }
    },
    unmuteMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, f.value = null;
      try {
        await zs(n, W.memberAccounts), await G();
      } catch (k) {
        throw f.value = k, console.error("[useRiskControlState] unmuteMember failed:", k), k;
      } finally {
        h.value = !1;
      }
    },
    banMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, f.value = null;
      try {
        await Vs(n, W.memberAccounts, W.duration, W.reason), await q();
      } catch (k) {
        throw f.value = k, console.error("[useRiskControlState] banMember failed:", k), k;
      } finally {
        h.value = !1;
      }
    },
    unbanMember: async (W) => {
      if (!n) throw new Error("liveId is required");
      h.value = !0, f.value = null;
      try {
        await Fs(n, W.memberAccounts), await q();
      } catch (k) {
        throw f.value = k, console.error("[useRiskControlState] unbanMember failed:", k), k;
      } finally {
        h.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!n) throw new Error("liveId is required");
      try {
        return await Ps(n, "default", "您的内容涉嫌违规");
      } catch (W) {
        throw console.error("[useRiskControlState] sendViolationWarning failed:", W), W;
      }
    },
    mutedList: p,
    bannedList: m,
    memberLoading: h,
    memberError: f,
    fetchMutedList: G,
    fetchBannedList: q
  };
}
const ul = { class: "monitor-header" }, dl = { class: "monitor-title-section" }, hl = { class: "monitor-title" }, vl = { class: "monitor-header-actions" }, ml = /* @__PURE__ */ Ie({
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
      const m = ie("t-input"), h = ie("t-button");
      return y(), w("div", ul, [
        c("div", dl, [
          c("h2", hl, v(t(s)(t(r).LIVE_MONITOR)), 1)
        ]),
        c("div", vl, [
          g(m, {
            "model-value": e.searchInput,
            placeholder: t(s)(t(r).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            status: t(J)(e.searchInput) > t(bi) ? "error" : "default",
            tips: t(J)(e.searchInput) > t(bi) ? t(s)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": o,
            onEnter: a,
            onClear: l
          }, {
            "suffix-icon": E(() => [
              g(t(In), {
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
              g(t(An))
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
}, fl = /* @__PURE__ */ ci(ml, [["__scopeId", "data-v-85dc322f"]]), gl = ["title", "aria-label"], pl = ["src", "alt"], bl = {
  key: 1,
  class: "avatar-fallback"
}, ji = /* @__PURE__ */ Ie({
  __name: "AnchorAvatar",
  props: {
    className: { default: "anchor-avatar" },
    name: { default: "" },
    src: { default: "" },
    title: { default: "" }
  },
  setup(e) {
    const n = e, i = C(""), s = C(!1), o = F(() => n.name ? `${n.name}头像` : "主播头像"), a = F(() => jo(n.name));
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
    return (d, u) => (y(), w("div", {
      class: be(e.className),
      title: e.title,
      "aria-label": o.value
    }, [
      i.value && !s.value ? (y(), w("img", {
        key: 0,
        src: i.value,
        alt: o.value,
        style: { width: "100%", height: "100%", "max-width": "100%", "max-height": "100%", display: "block", "object-fit": "cover", "border-radius": "inherit" },
        onError: l
      }, null, 40, pl)) : (y(), w("span", bl, v(a.value), 1))
    ], 10, gl));
  }
}), yl = ["id"], El = ["id"], _l = ["title"], wl = {
  key: 0,
  class: "tag-more-wrapper"
}, Cl = { class: "live-card-tag-dropdown" }, Il = { class: "overlay-btn primary" }, Al = { class: "live-card-info" }, Ml = ["title"], Tl = { class: "live-card-meta" }, Sl = { class: "live-card-anchor" }, Rl = ["title"], Ll = ["title"], xl = /* @__PURE__ */ Ie({
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
    const i = e, s = n, { t: o } = ke(), { startPlay: a, stopPlay: l } = Pt(), d = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, u = C(!1), p = C("");
    let m = 0;
    const h = F(() => i.isFullscreen && i.fullscreenLiveId === i.card.liveId), f = F(() => i.card.tags.slice(0, i.adaptiveResult.visibleCount)), b = F(() => i.card.tags.slice(i.adaptiveResult.visibleCount)), L = F(() => {
      var k;
      return ((k = i.card.stats) == null ? void 0 : k.viewCount) ?? 0;
    }), S = F(() => `live_monitor_view_${i.card.liveId}`), T = async () => {
      const k = i.card.liveId;
      if (console.log("[LiveCard] startCardPlay called", { liveId: k, isMockMode: d }), d || !k) {
        console.log("[LiveCard] Skipping play", { isMockMode: d, liveId: k });
        return;
      }
      const O = ++m;
      if (await Je(), O !== m) {
        console.log("[LiveCard] Version mismatch, aborting", { currentVersion: O, playVersion: m });
        return;
      }
      try {
        console.log("[LiveCard] Calling startPlay", { liveId: k, containerId: S.value }), await a({ liveId: k, containerId: S.value }), O === m && (p.value = k, console.log("[LiveCard] startPlay success", { liveId: k }));
      } catch (D) {
        console.error("[LiveCard] startPlay failed", { liveId: k, error: D }), O === m && s("playError", D, k);
      }
    }, ee = async (k = p.value || i.card.liveId) => {
      m += 1, !(d || !k) && (p.value === k && (p.value = ""), await l(k).catch(() => {
      }));
    };
    At(() => {
      T();
    }), Me(
      () => i.card.liveId,
      async (k, O) => {
        O && O !== k && await ee(O), T();
      }
    ), Ei(() => {
      ee();
    });
    const G = () => {
      u.value = !0, s("hover", i.card.liveId);
    }, q = () => {
      u.value = !1, s("hover", null);
    }, j = () => {
      console.log("[LiveCard] handleViewDetails called, liveId:", i.card.liveId), s("viewDetails", i.card.liveId);
    }, te = (k) => {
      console.log("[LiveCard] handleCardClick called");
      const O = k.target;
      !O.closest(".live-card-actions") && !O.closest(".fullscreen-close") && !O.closest(".fullscreen-mute") && (console.log("[LiveCard] emitting viewDetails from handleCardClick, liveId:", i.card.liveId), s("viewDetails", i.card.liveId));
    }, le = () => {
      s("violationWarning", i.card.liveId, i.card.liveName || o(r.UNNAMED_LIVE));
    }, de = () => {
      s("forceStop", i.card.liveId, i.card.liveName || o(r.UNNAMED_LIVE));
    }, ye = () => {
      s("toggleMute", i.card.liveId);
    }, W = () => {
      s("exitFullscreen");
    };
    return (k, O) => {
      const D = ie("t-button");
      return y(), w("div", {
        class: be(["live-card", { hovered: u.value }]),
        onMouseenter: G,
        onMouseleave: q,
        onClick: te
      }, [
        c("div", {
          id: e.card.liveId,
          class: "live-video-container"
        }, [
          c("div", {
            class: "live-video-bg",
            style: Ge({
              backgroundImage: `url(${e.card.backgroundUrl || e.card.coverUrl || t(Tn)})`
            })
          }, null, 4),
          c("div", {
            id: S.value,
            class: "live-video-player"
          }, null, 8, El),
          c("div", {
            class: "live-id-badge",
            style: Ge({ maxWidth: e.adaptiveResult.idMaxWidth })
          }, [
            c("span", {
              title: e.card.liveId
            }, v(`${t(o)(t(r).LIVE_ID)}: ${e.card.liveId}`), 9, _l)
          ], 4),
          e.card.tags && e.card.tags.length > 0 ? (y(), w("div", {
            key: 0,
            class: "live-card-tags-overlay",
            style: Ge({ maxWidth: e.adaptiveResult.tagsMaxWidth })
          }, [
            (y(!0), w(ge, null, Ne(f.value, (R) => (y(), w("span", {
              key: R,
              class: "live-card-tag-overlay"
            }, [
              O[0] || (O[0] = c("svg", {
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
              B(" " + v(t(o)(R)), 1)
            ]))), 128)),
            e.adaptiveResult.showMore ? (y(), w("div", wl, [
              O[2] || (O[2] = c("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              c("div", Cl, [
                (y(!0), w(ge, null, Ne(b.value, (R) => (y(), w("span", {
                  key: R,
                  class: "live-card-tag-overlay"
                }, [
                  O[1] || (O[1] = c("svg", {
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
                  B(" " + v(t(o)(R)), 1)
                ]))), 128))
              ])
            ])) : ce("", !0)
          ], 4)) : ce("", !0),
          c("div", {
            class: "live-video-overlay",
            onClick: j
          }, [
            c("div", Il, [
              g(t(wa)),
              B(" " + v(t(o)(t(r).VIEW_DETAILS)), 1)
            ])
          ]),
          h.value ? (y(), w(ge, { key: 1 }, [
            c("button", {
              class: "fullscreen-close",
              onClick: W
            }, [
              g(t(Wi))
            ]),
            c("button", {
              class: "fullscreen-mute",
              onClick: ye
            }, [
              e.isMuted ? (y(), oe(t(Oo), { key: 0 })) : (y(), oe(t(Uo), { key: 1 }))
            ])
          ], 64)) : ce("", !0)
        ], 8, yl),
        c("div", Al, [
          c("div", {
            class: "live-card-title",
            title: e.card.liveName || t(o)(t(r).UNNAMED_LIVE)
          }, v(e.card.liveName || t(o)(t(r).UNNAMED_LIVE)), 9, Ml),
          c("div", Tl, [
            c("div", Sl, [
              g(ji, {
                "class-name": "anchor-avatar",
                src: e.anchorAvatar,
                name: e.anchorName,
                title: e.anchorName
              }, null, 8, ["src", "name", "title"]),
              c("span", {
                class: "anchor-name",
                title: e.anchorName
              }, v(e.anchorName), 9, Rl)
            ]),
            c("span", {
              class: "meta-viewer-count",
              title: String(L.value)
            }, v(`${L.value}${t(o)(t(r).VIEWS)}`), 9, Ll)
          ])
        ]),
        c("div", {
          class: be(["live-card-actions", { show: u.value }])
        }, [
          g(D, {
            class: "action-btn warn",
            variant: "text",
            onClick: gi(le, ["stop"])
          }, {
            icon: E(() => [
              g(t(Ca))
            ]),
            default: E(() => [
              c("span", null, v(t(o)(t(r).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          g(D, {
            class: "action-btn close full",
            variant: "text",
            onClick: gi(de, ["stop"])
          }, {
            icon: E(() => [
              g(t(Ia))
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
}), Nl = { class: "live-monitor-pagination" }, kl = { class: "page-info" }, Dl = /* @__PURE__ */ Ie({
  __name: "MonitorPagination",
  props: {
    currentPage: {},
    hasMoreData: { type: Boolean },
    loading: { type: Boolean }
  },
  emits: ["goToFirstPage", "prevPage", "nextPage"],
  setup(e, { emit: n }) {
    const i = e, s = n, { t: o } = ke(), a = F(() => o(r.PAGE, { page: i.currentPage })), l = () => s("goToFirstPage"), d = () => s("prevPage"), u = () => s("nextPage");
    return (p, m) => {
      const h = ie("t-button");
      return y(), w("div", Nl, [
        g(h, {
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
        g(h, {
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
        c("span", kl, v(a.value), 1),
        g(h, {
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
}), Va = /* @__PURE__ */ Ie({
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
          await js(i.liveId, {
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
    return (p, m) => {
      const h = ie("t-dialog");
      return y(), oe(h, {
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
function Ol(e, n) {
  const i = C(/* @__PURE__ */ new Map()), s = new Xo({
    containerSelector: ".live-monitor-grid",
    t: n
  }), o = () => {
    i.value = new Map(s.getCache());
  }, a = (m) => {
    const h = s.getResult(m);
    return s.cache.has(m) || Je(() => {
      const f = e(), b = f == null ? void 0 : f.find((L) => L.liveId === m);
      b && b.tags && (s.compute(m, { liveId: m, tags: b.tags }), o());
    }), h;
  };
  return {
    adaptiveTagMap: i,
    getAdaptiveResult: a,
    getVisibleTags: (m, h) => {
      const f = a(h);
      return m.slice(0, f.visibleCount);
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
const Ul = 600 * 1e3;
function $l(e, n) {
  const { t: i } = ke(), { stopPlay: s } = n, o = C(!1), a = C(!1), l = C(!1), d = C(!1), u = C(""), p = C(/* @__PURE__ */ new Map());
  let m = null, h = "";
  const f = C(/* @__PURE__ */ new Set()), b = C(!1), L = () => {
    m && (clearTimeout(m), m = null);
  }, S = (...M) => {
    const U = [];
    for (const N of M)
      for (const x of N || [])
        x && !U.includes(x) && U.push(x);
    return U;
  }, T = (M) => String(M.liveId || M.id || M.RoomId || ""), ee = () => {
    const M = /* @__PURE__ */ new Date(), U = new Date(M.getTime() - 3600 * 1e3), N = (x) => {
      const A = x.getFullYear(), ae = String(x.getMonth() + 1).padStart(2, "0"), ue = String(x.getDate()).padStart(2, "0"), he = String(x.getHours()).padStart(2, "0"), Ae = String(x.getMinutes()).padStart(2, "0"), $ = String(x.getSeconds()).padStart(2, "0");
      return `${A}-${ae}-${ue} ${he}:${Ae}:${$}`;
    };
    return {
      startTime: N(U),
      endTime: N(M)
    };
  }, G = async (M, U) => {
    const N = Array.from(new Set(M.slice(0, 8).map((x) => x.liveId).filter(Boolean)));
    if (!(N.length === 0 || d.value)) {
      L(), h = U;
      try {
        const { startTime: x, endTime: A } = ee(), ae = await Xs(N, 10, x, A);
        if (b.value || h !== U) return;
        const ue = new Map(p.value);
        N.forEach((he) => {
          ue.set(he, ae.get(he) || []);
        }), p.value = ue;
      } catch (x) {
        console.warn("[LiveMonitor] 获取直播间违规标签失败:", x);
      } finally {
        !b.value && h === U && !d.value && (m = setTimeout(() => {
          G(M, U);
        }, Ul));
      }
    }
  };
  Me(
    () => [...e.pageData.value || []].map((M) => [M.liveId, M.liveName, M.activityStatus].join(":")).join("|"),
    (M, U) => {
      if (!M || b.value || d.value) return;
      const N = e.pageData.value || [];
      if (N.length === 0) return;
      const x = `${e.currentPage.value}:${M}`;
      G(N, x);
    }
  ), Me(
    () => {
      var M;
      return [e.loading.value, (M = e.pageData.value) == null ? void 0 : M.length];
    },
    ([M, U]) => {
      M || (o.value = (U || 0) > 0);
    },
    { immediate: !0 }
  );
  const q = async (M, U, N) => {
    !U && N <= 1 && M > 1 ? await e.prevPage() : await e.refreshCurrentPage();
  }, j = async () => {
    const M = Array.from(f.value);
    f.value.clear(), M.length > 0 && await Promise.all(
      M.map(
        (U) => s(U).catch((N) => {
          console.error("停止直播预览失败:", U, N);
        })
      )
    );
  }, te = async () => {
    await j(), await e.prevPage();
    const M = e.pageData.value || [];
    f.value = new Set(M.map((U) => U.liveId));
  }, le = async () => {
    await j(), await e.nextPage();
    const M = e.pageData.value || [];
    f.value = new Set(M.map((U) => U.liveId));
  }, de = async () => {
    await j(), await e.goToFirstPage();
    const M = e.pageData.value || [];
    f.value = new Set(M.map((U) => U.liveId));
  }, ye = async (M) => {
    var x;
    const U = String(M ?? u.value).trim();
    if (!U) return;
    if (J(U) > bi) {
      X.error(i(r.INPUT_TOO_LONG));
      return;
    }
    u.value !== U && (u.value = U);
    const N = U;
    L(), a.value = !0;
    try {
      const { fetchLiveDetail: A } = Pt(), ae = await A(N);
      if (b.value) return;
      if (!ae) {
        X.error(i("No search results for", { keyword: U })), await W();
        return;
      }
      d.value = !0;
      const ue = ae.liveId;
      if (f.value.add(ue), b.value) {
        await s(ue);
        return;
      }
      X.success(r.SEARCH_SUCCESS);
    } catch (A) {
      console.error("搜索直播间失败:", A);
      const ae = A;
      if (A === 2025 || A === 70005 || typeof ae != "number" && ((x = ae.message) != null && x.includes("USER_SIG_ILLEGAL"))) {
        Ks(), qs(), localStorage.removeItem("tuiLiveMonitor-userInfo"), require("vue-router").useRouter().push("/config-required");
        return;
      }
      X.error(i("No search results for", { keyword: U })), await W();
    } finally {
      b.value || (a.value = !1);
    }
  }, W = async () => {
    u.value = "", d.value = !1, await j(), await e.goToFirstPage();
  }, k = async () => {
    if (!(l.value || e.loading.value)) {
      l.value = !0;
      try {
        d.value && (d.value = !1, u.value = ""), await j(), await e.refreshCurrentPage();
      } catch (M) {
        console.error("刷新失败:", M);
        const U = M, N = U.ErrorInfo || U.errorInfo || "";
        X.error(`${i(r.REFRESH_FAILED)}${N ? ` (${N})` : ""}`);
      } finally {
        b.value || (l.value = !1);
      }
    }
  }, O = C(e.currentPage.value), D = C(e.hasMore.value), R = C(e.loading.value);
  return Me(() => e.loading.value, (M) => {
    console.log("[useLiveMonitorData] loading changed:", M), R.value = M;
  }, { immediate: !0 }), Me(() => e.currentPage.value, (M) => {
    O.value = M;
  }, { immediate: !0 }), Me(() => e.hasMore.value, (M) => {
    D.value = M;
  }, { immediate: !0 }), tt(() => {
    b.value = !0, L(), j();
  }), {
    // 分页状态（响应式 computed）
    currentPage: O,
    hasMoreData: D,
    loading: R,
    // 业务状态
    hasLiveData: o,
    searching: a,
    refreshing: l,
    isSearchMode: d,
    searchInput: u,
    liveViolationLabelMap: p,
    playingLiveIds: f,
    isUnmounted: b,
    // 方法
    handlePrevPage: te,
    handleNextPage: le,
    handleGoToFirstPage: de,
    handleSearch: ye,
    handleClearSearch: W,
    handleRefresh: k,
    stopAllPlayingLives: j,
    handleCloseLiveSuccess: q,
    mergeTags: S,
    resolveLiveId: T
  };
}
const Pl = { class: "live-monitor-page" }, Fl = { class: "live-monitor-grid" }, Vl = {
  key: 0,
  class: "monitor-loading"
}, zl = {
  key: 1,
  class: "monitor-empty"
}, Gl = { class: "empty-icon" }, Bl = { style: { display: "none" } }, Wl = /* @__PURE__ */ Ie({
  __name: "live-monitor",
  setup(e) {
    var ct;
    const n = _i(), { t: i } = ke();
    (ct = Yi().components) == null || ct.liveMonitor;
    const { init: s, liveList: o, endLive: a, stopPlay: l, paginatedList: d } = Pt(), u = Lo("sdkReady", null), p = C(!1), m = C(""), h = C(null), f = C(0), b = C({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), L = C({
      visible: !1,
      liveId: "",
      liveName: ""
    }), {
      getAdaptiveResult: S,
      initResizeObserver: T,
      cleanupResizeObserver: ee,
      initAdaptiveTags: G
    } = Ol(() => he.value, i), {
      currentPage: q,
      hasMoreData: j,
      loading: te,
      hasLiveData: le,
      refreshing: de,
      searchInput: ye,
      liveViolationLabelMap: W,
      playingLiveIds: k,
      isUnmounted: O,
      handlePrevPage: D,
      handleNextPage: R,
      handleGoToFirstPage: M,
      handleSearch: U,
      handleClearSearch: N,
      handleRefresh: x,
      stopAllPlayingLives: A,
      handleCloseLiveSuccess: ae,
      mergeTags: ue
    } = $l(
      d,
      { stopPlay: l }
    ), he = F(() => (o.value || []).map((ve) => {
      const Oe = ve.tags || [], Te = ue(Oe, W.value.get(ve.liveId));
      return {
        ...ve,
        tags: Te
      };
    })), Ae = F(
      () => (o.value || []).map((H) => {
        var ve;
        return [
          H.liveId,
          H.liveName,
          H.coverUrl,
          H.onlineCount,
          (ve = H.stats) == null ? void 0 : ve.viewCount,
          H.popularity,
          H.activityStatus,
          H.createdAt
        ].join(":");
      }).join("|")
    );
    Me(Ae, () => {
      f.value += 1;
    });
    const $ = (H, ve) => {
      L.value = { visible: !0, liveId: H, liveName: ve };
    }, Q = (H, ve) => {
      b.value = { visible: !0, liveId: H, liveName: ve, closing: !1 };
    }, Se = async () => {
      const { liveId: H } = b.value;
      if (H) {
        b.value.closing = !0;
        try {
          await l(H), k.value.delete(H), await a(H), b.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, X.success(i(r.LIVE_FORCIBLY_CLOSED)), await ae(q, j, (o.value || []).length);
        } catch (ve) {
          console.error("封禁房间失败:", ve), b.value.closing = !1;
        }
      }
    }, Re = () => {
      b.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, $e = (H) => {
      console.log("handleClickDetails called with liveId:", H);
      try {
        sessionStorage.setItem("liveMonitor_currentPage", String(q));
      } catch {
      }
      console.log("Navigating to:", `/live-control/${H}`), n.push(`/live-control/${H}`);
    }, De = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, je = async () => {
      document.fullscreenElement ? p.value = !0 : (p.value = !1, m.value = "");
    }, Ke = () => (H) => ({
      id: `mock-player-${H}`,
      on: () => {
      },
      off: () => {
      },
      play: async (ve, Oe) => {
        await Je();
        const Te = document.getElementById(Oe);
        Te && (Te.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.78);font-size:14px;background:linear-gradient(135deg,rgba(15,52,96,.72),rgba(26,26,46,.72));">Mock Live</div>');
      },
      stop: async () => {
      },
      muteAudio: async () => {
      },
      destroy: async () => {
      },
      getPlayerInfo: () => ({ liveId: H, state: "PLAYING" })
    }), me = async () => {
      try {
        const H = await Zs();
        if (H && H.sdkAppId !== 0)
          try {
            const Oe = Ls({
              sdkAppId: H.sdkAppId,
              userId: H.userId,
              userSig: H.userSig
            });
            s({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: H.sdkAppId,
                userId: H.userId,
                password: H.userSig
              },
              playerFactory: Oe
            }), console.log("[LiveMonitor] Calling goToFirstPage, sdkReady:", u, ", sdkReady?.value:", u == null ? void 0 : u.value), !u || u.value ? (console.log("[LiveMonitor] Condition met, calling goToFirstPage..."), await d.goToFirstPage(), console.log("[LiveMonitor] goToFirstPage done")) : console.log("[LiveMonitor] Condition NOT met, skipping goToFirstPage");
          } catch (ve) {
            console.error("[LiveMonitor] SDK init error:", ve);
          }
        else
          console.warn("[LiveMonitor] createBasicAccount failed or sdkAppId is 0:", H);
      } catch (H) {
        console.error("[LiveMonitor] initSDK outer error:", H);
      }
    };
    return u && Me(() => u.value, (H) => {
      H && d.goToFirstPage();
    }), At(() => {
      document.addEventListener("fullscreenchange", je), T(), G(he.value || []), me();
    }), tt(() => {
      O.value = !0, document.removeEventListener("fullscreenchange", je), ee(), A();
    }), (H, ve) => {
      const Oe = ie("t-dialog");
      return y(), w("div", Pl, [
        g(fl, {
          "search-input": t(ye),
          refreshing: t(de),
          "onUpdate:searchInput": ve[0] || (ve[0] = (Te) => ye.value = Te),
          onSearch: t(U),
          onClearSearch: t(N),
          onRefresh: t(x)
        }, null, 8, ["search-input", "refreshing", "onSearch", "onClearSearch", "onRefresh"]),
        c("div", Fl, [
          t(te) ? (y(), w("div", Vl, [
            ve[4] || (ve[4] = c("div", { class: "loading-spinner" }, null, -1)),
            c("span", null, v(t(i)(t(r).LOADING)), 1)
          ])) : t(le) ? (y(), w(ge, { key: 2 }, [
            c("div", Bl, "debug: liveList.length=" + v((t(o) || []).length) + ", mergedMonitorList.length=" + v(he.value.length) + ", hasLiveData=" + v(t(le)), 1),
            (y(!0), w(ge, null, Ne(he.value, (Te) => {
              var mt, at;
              return y(), oe(xl, {
                key: `${f.value}:${Te.liveId}`,
                card: Te,
                "adaptive-result": t(S)(Te.liveId),
                "is-muted": Te.isMuted ?? !1,
                "is-fullscreen": p.value,
                "fullscreen-live-id": m.value,
                "anchor-avatar": ((mt = Te.anchor) == null ? void 0 : mt.avatarUrl) || "",
                "anchor-name": ((at = Te.anchor) == null ? void 0 : at.nick) || "",
                onViewDetails: $e,
                onViolationWarning: $,
                onForceStop: Q,
                onExitFullscreen: De,
                onHover: ve[1] || (ve[1] = (P) => h.value = P)
              }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]);
            }), 128))
          ], 64)) : (y(), w("div", zl, [
            c("div", Gl, [
              g(t(wa))
            ]),
            c("p", null, v(t(i)(t(r).NO_LIVE_RIGHT_NOW)), 1)
          ]))
        ]),
        g(Dl, {
          "current-page": t(q),
          "has-more-data": t(j),
          loading: t(te),
          onGoToFirstPage: t(M),
          onPrevPage: t(D),
          onNextPage: t(R)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"]),
        g(Oe, {
          visible: b.value.visible,
          "onUpdate:visible": ve[2] || (ve[2] = (Te) => b.value.visible = Te),
          header: t(i)(t(r).CONFIRM_FORCE_STOP),
          "confirm-btn": { content: b.value.closing ? t(i)(t(r).CLOSING) : t(i)(t(r).CONFIRM_BAN_LIVE), loading: b.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: t(i)(t(r).CANCEL), disabled: b.value.closing, shape: "round" },
          onConfirm: Se,
          onCancel: Re
        }, {
          default: E(() => [
            c("p", null, v(t(i)(t(r).FORCE_STOP_WARNING)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        g(Va, {
          visible: L.value.visible,
          "onUpdate:visible": ve[3] || (ve[3] = (Te) => L.value.visible = Te),
          "live-id": L.value.liveId,
          "live-name": L.value.liveName
        }, null, 8, ["visible", "live-id", "live-name"])
      ]);
    };
  }
}), fm = /* @__PURE__ */ ci(Wl, [["__scopeId", "data-v-fd2dba8f"]]);
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
function _e(e) {
  for (var n = 1; n < arguments.length; n++) {
    var i = arguments[n] != null ? arguments[n] : {};
    n % 2 ? la(Object(i), !0).forEach((function(s) {
      lt(e, s, i[s]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : la(Object(i)).forEach((function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(i, s));
    }));
  }
  return e;
}
function lt(e, n, i) {
  return n in e ? Object.defineProperty(e, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[n] = i, e;
}
function Hl(e, n) {
  if (e == null) return {};
  var i, s, o = (function(l, d) {
    if (l == null) return {};
    var u, p, m = {}, h = Object.keys(l);
    for (p = 0; p < h.length; p++) u = h[p], d.indexOf(u) >= 0 || (m[u] = l[u]);
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
var ra, Yl, Ii, Ve = (ra = function(e) {
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
}, ra(Ii = { path: Yl, exports: {}, require: function(e, n) {
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
function hn(e, n, i) {
  var s, o, a, l, d;
  function u() {
    var m = Date.now() - l;
    m < n && m >= 0 ? s = setTimeout(u, n - m) : (s = null, i || (d = e.apply(a, o), a = o = null));
  }
  n == null && (n = 100);
  var p = function() {
    a = this, o = arguments, l = Date.now();
    var m = i && !s;
    return s || (s = setTimeout(u, n)), m && (d = e.apply(a, o), a = o = null), d;
  };
  return p.clear = function() {
    s && (clearTimeout(s), s = null);
  }, p.flush = function() {
    s && (d = e.apply(a, o), a = o = null, clearTimeout(s), s = null);
  }, p;
}
hn.debounce = hn;
var vn = hn, re = function() {
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
function ze(e) {
  return e === void 0;
}
function Ni(e) {
  return typeof e == "object" && e !== null;
}
function mn(e, n, i) {
  var s = {};
  return Ni(e) ? (Object.keys(n).forEach((function(o) {
    ze(e[o]) ? s[o] = n[o] : Ni(n[o]) ? Ni(e[o]) ? s[o] = mn(e[o], n[o], i[o]) : s[o] = e[o] ? n[o] : i[o] : n[o] === !0 || n[o] === !1 ? s[o] = !!e[o] : s[o] = e[o];
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
}, jl = function(e, n) {
  n === void 0 && (n = {}), this.type = "resize", this.directions = e, this.params = n;
}, Sn = function(e) {
  this.type = "move", this.directions = e;
}, Xl = (function() {
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
})(), Rn = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
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
      this.$emit("drag", new Xl(e, s, { left: i[0].clientX, top: i[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
Rn.render = function(e, n, i, s, o, a) {
  return y(), oe("div", { ref: "draggable", class: i.classname, onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onMouseover: n[3] || (n[3] = function() {
    return a.onMouseOver && a.onMouseOver.apply(a, arguments);
  }), onMouseleave: n[4] || (n[4] = function() {
    return a.onMouseLeave && a.onMouseLeave.apply(a, arguments);
  }) }, [ht(e.$slots, "default")], 34);
};
var sn = vt("vue-handler-wrapper"), Ha = { name: "HandlerWrapper", components: { DraggableElement: Rn }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var n, i = za(this.horizontalPosition, this.verticalPosition);
    e = sn((lt(n = {}, i.classname, !0), lt(n, "disabled", this.disabled), n));
  } else e = sn({ disabled: this.disabled });
  return { root: e, draggable: sn("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ha.render = function(e, n, i, s, o, a) {
  var l = ie("DraggableElement");
  return y(), oe("div", { class: a.classes.root }, [g(l, { class: a.classes.draggable, onDrag: n[1] || (n[1] = function(d) {
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
var Kl = vt("vue-line-wrapper"), Ya = { name: "LineWrapper", components: { DraggableElement: Rn }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return Kl((lt(e = {}, this.position, !0), lt(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ya.render = function(e, n, i, s, o, a) {
  var l = ie("DraggableElement");
  return y(), oe(l, { class: a.classname, onDrag: n[1] || (n[1] = function(d) {
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
var yt = ["left", "right", "top", "bottom"], ql = ["left", "right"], Zl = ["top", "bottom"], Ql = ["left", "top"], Jl = ["fill-area", "fit-area", "stencil", "none"], da = { left: 0, top: 0, width: 0, height: 0 };
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
function Xi(e) {
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
function we(e) {
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
  var i = we(e), s = we(n);
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
  var i = yi(Ye(e, n), n);
  return i.left + i.right + i.top + i.bottom ? i.left + i.right > i.top + i.bottom ? Math.min((e.width + i.left + i.right) / e.width, li(e, n)) : Math.min((e.height + i.top + i.bottom) / e.height, li(e, n)) : 1;
}
function Ye(e, n, i) {
  i === void 0 && (i = !1);
  var s = ri(e, n);
  return et(e, i ? Xi(s) : s);
}
function fn(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function er(e, n) {
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
  return !!((n.correctRatio || we(n) >= i.minimum && we(n) <= i.maximum) && n.height <= o.maxHeight && n.width <= o.maxWidth && n.width && n.height && (s || n.height >= o.minHeight && n.width >= o.minWidth));
}
function ma(e, n) {
  return Math.pow(e.width - n.width, 2) + Math.pow(e.height - n.height, 2);
}
function It(e) {
  var n = e.width, i = e.height, s = e.sizeRestrictions, o = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, a = { width: Math.max(s.minWidth, Math.min(s.maxWidth, n)), height: Math.max(s.minHeight, Math.min(s.maxHeight, i)) };
  function l(p, m) {
    return m === void 0 && (m = !1), p.reduce((function(h, f) {
      return va({ size: f, aspectRatio: o, sizeRestrictions: s, ignoreMinimum: m }) && (!h || ma(f, { width: n, height: i }) < ma(h, { width: n, height: i })) ? f : h;
    }), null);
  }
  var d = [];
  o && [o.minimum, o.maximum].forEach((function(p) {
    p && d.push({ width: a.width, height: a.width / p, correctRatio: !0 }, { width: a.height * p, height: a.height, correctRatio: !0 });
  })), va({ size: a, aspectRatio: o, sizeRestrictions: s }) && d.push(a);
  var u = l(d) || l(d, !0);
  return u && { width: u.width, height: u.height };
}
function gn(e) {
  var n = e.event, i = e.coordinates, s = e.positionRestrictions, o = s === void 0 ? {} : s, a = et(i, n.directions);
  return et(a, ri(a, o));
}
function tr(e) {
  var n = e.coordinates, i = e.transform, s = e.imageSize, o = e.sizeRestrictions, a = e.positionRestrictions, l = e.aspectRatio, d = e.visibleArea, u = function(m, h) {
    return gn({ coordinates: m, positionRestrictions: a, event: new Sn({ left: h.left - m.left, top: h.top - m.top }) });
  }, p = re({}, n);
  return (Array.isArray(i) ? i : [i]).forEach((function(m) {
    var h = {};
    ze((h = typeof m == "function" ? m({ coordinates: p, imageSize: s, visibleArea: d }) : m).width) && ze(h.height) || (p = (function(f, b) {
      var L = re(re(re({}, f), It({ width: b.width, height: b.height, sizeRestrictions: o, aspectRatio: l })), { left: 0, top: 0 });
      return u(L, { left: f.left, top: f.top });
    })(p, re(re({}, p), h))), ze(h.left) && ze(h.top) || (p = u(p, re(re({}, p), h)));
  })), p;
}
function ir(e) {
  e.event;
  var n = e.getAreaRestrictions, i = e.boundaries, s = e.coordinates, o = e.visibleArea;
  e.aspectRatio;
  var a = e.stencilSize, l = e.sizeRestrictions, d = e.positionRestrictions;
  e.stencilReference;
  var u, p, m, h = re({}, s), f = re({}, o), b = re({}, a);
  u = we(b), p = we(h), m === void 0 && (m = 1e-3), (u === 0 || p === 0 ? Math.abs(p - u) < m : Math.abs(p / u) < 1 + m && Math.abs(p / u) > 1 - m) || (h = re(re({}, h), It({ sizeRestrictions: l, width: h.width, height: h.height, aspectRatio: { minimum: we(b), maximum: we(b) } })));
  var L = Ki(f = rt(f, h.width * i.width / (f.width * b.width)), n({ visibleArea: f, type: "resize" }));
  return L !== 1 && (f = rt(f, L), h = rt(h, L)), f = Ye(f = et(f, si(He(h), He(f))), n({ visibleArea: f, type: "move" })), { coordinates: h = Ye(h, qi(_t(f), d)), visibleArea: f };
}
function nr(e) {
  var n = e.event, i = e.getAreaRestrictions, s = e.boundaries, o = e.coordinates, a = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var l = e.positionRestrictions;
  e.stencilReference;
  var d = re({}, o), u = re({}, a);
  if (o && a && n.type !== "manipulateImage") {
    var p = { width: 0, height: 0 };
    u.width, s.width, we(s) > we(d) ? (p.height = 0.8 * s.height, p.width = p.height * we(d)) : (p.width = 0.8 * s.width, p.height = p.width * we(d));
    var m = Ki(u = rt(u, d.width * s.width / (u.width * p.width)), i({ visibleArea: u, type: "resize" }));
    u = rt(u, m), m !== 1 && (p.height /= m, p.width /= m), u = Ye(u = et(u, si(He(d), He(u))), i({ visibleArea: u, type: "move" })), d = Ye(d, qi(_t(u), l));
  }
  return { coordinates: d, visibleArea: u };
}
function ar(e) {
  var n = e.event, i = e.coordinates, s = e.visibleArea, o = e.getAreaRestrictions, a = re({}, s), l = re({}, i);
  if (n.type === "setCoordinates") {
    var d = Math.max(0, l.width - a.width), u = Math.max(0, l.height - a.height);
    d > u ? a = rt(a, Math.min(l.width / a.width, li(a, o({ visibleArea: a, type: "resize" })))) : u > d && (a = rt(a, Math.min(l.height / a.height, li(a, o({ visibleArea: a, type: "resize" }))))), a = Ye(a = et(a, Xi(ri(l, _t(a)))), o({ visibleArea: a, type: "move" }));
  }
  return { visibleArea: a, coordinates: l };
}
function or(e) {
  var n = e.imageSize, i = e.visibleArea, s = e.coordinates, o = i || n;
  return { left: (i ? i.left : 0) + o.width / 2 - s.width / 2, top: (i ? i.top : 0) + o.height / 2 - s.height / 2 };
}
function sr(e) {
  var n = e.imageSize, i = e.visibleArea, s = e.aspectRatio, o = e.sizeRestrictions, a = i || n, l = Math.min(s.maximum || 1 / 0, Math.max(s.minimum || 0, we(a))), d = a.width < a.height ? { width: 0.8 * a.width, height: 0.8 * a.width / l } : { height: 0.8 * a.height, width: 0.8 * a.height * l };
  return It(re(re({}, d), { aspectRatio: s, sizeRestrictions: o }));
}
function lr(e) {
  var n, i, s = e.imageSize, o = e.visibleArea, a = e.boundaries, l = e.aspectRatio, d = e.sizeRestrictions, u = e.stencilSize, p = o || s;
  return we(p) > we(a) ? i = (n = u.height * p.height / a.height) * we(u) : n = (i = u.width * p.width / a.width) / we(u), It({ width: i, height: n, aspectRatio: l, sizeRestrictions: d });
}
function rr(e) {
  var n = e.getAreaRestrictions, i = e.coordinates, s = e.imageSize, o = we(e.boundaries);
  if (i) {
    var a = { height: Math.max(i.height, s.height), width: Math.max(i.width, s.width) }, l = ja({ width: we(a) > o ? a.width : a.height * o, height: we(a) > o ? a.width / o : a.height }, fn(n())), d = { left: i.left + i.width / 2 - l.width / 2, top: i.top + i.height / 2 - l.height / 2, width: l.width, height: l.height }, u = yi(i, _t(re({ left: 0, top: 0 }, s))), p = {};
    return !u.left && !u.right && d.width <= s.width && (p.left = 0, p.right = s.width), !u.top && !u.bottom && d.height <= s.height && (p.top = 0, p.bottom = s.height), Ye(d, p);
  }
  var m = we(s);
  return l = { height: m > o ? s.height : s.width / o, width: m > o ? s.height * o : s.width }, { left: s.width / 2 - l.width / 2, top: s.height / 2 - l.height / 2, width: l.width, height: l.height };
}
function Mi(e, n) {
  return Ka(e, _t(n));
}
function cr(e) {
  var n = e.event, i = e.coordinates, s = e.visibleArea, o = e.sizeRestrictions, a = e.getAreaRestrictions, l = e.positionRestrictions, d = e.adjustStencil, u = n.scale, p = n.move, m = re({}, s), h = re({}, i), f = 1, b = 1, L = u.factor && Math.abs(u.factor - 1) > 1e-3;
  m = et(m, { left: p.left || 0, top: p.top || 0 });
  var S = { stencil: { minimum: Math.max(o.minWidth ? o.minWidth / h.width : 0, o.minHeight ? o.minHeight / h.height : 0), maximum: Math.min(o.maxWidth ? o.maxWidth / h.width : 1 / 0, o.maxHeight ? o.maxHeight / h.height : 1 / 0, li(h, l)) }, area: { maximum: li(m, a({ visibleArea: m, type: "resize" })) } };
  u.factor && L && (u.factor < 1 ? (b = Math.max(u.factor, S.stencil.minimum)) > 1 && (b = 1) : u.factor > 1 && (b = Math.min(u.factor, Math.min(S.area.maximum, S.stencil.maximum))) < 1 && (b = 1)), b && (m = rt(m, b, u.center));
  var T = i.left - s.left, ee = s.width + s.left - (i.width + i.left), G = i.top - s.top, q = s.height + s.top - (i.height + i.top);
  return m = Ye(m = et(m, ri(m, { left: l.left !== void 0 ? l.left - T * b : void 0, top: l.top !== void 0 ? l.top - G * b : void 0, bottom: l.bottom !== void 0 ? l.bottom + q * b : void 0, right: l.right !== void 0 ? l.right + ee * b : void 0 })), a({ visibleArea: m, type: "move" })), h.width = h.width * b, h.height = h.height * b, h.left = m.left + T * b, h.top = m.top + G * b, h = Ye(h, qi(_t(m), l)), u.factor && L && d && (u.factor > 1 ? f = Math.min(S.area.maximum, u.factor) / b : u.factor < 1 && (f = Math.max(h.height / m.height, h.width / m.width, u.factor / b)), f !== 1 && (m = et(m = Ye(m = rt(m, f, u.factor > 1 ? u.center : He(h)), a({ visibleArea: m, type: "move" })), Xi(ri(h, _t(m)))))), { coordinates: h, visibleArea: m };
}
function ur(e) {
  var n = e.aspectRatio, i = e.getAreaRestrictions, s = e.coordinates, o = e.visibleArea, a = e.sizeRestrictions, l = e.positionRestrictions, d = e.imageSize, u = e.previousImageSize, p = e.angle, m = re({}, s), h = re({}, o), f = kt(He(re({ left: 0, top: 0 }, u)), p);
  return (m = re(re({}, It({ sizeRestrictions: a, aspectRatio: n, width: m.width, height: m.height })), kt(He(m), p))).left -= f.left - d.width / 2 + m.width / 2, m.top -= f.top - d.height / 2 + m.height / 2, h = rt(h, Ki(h, i({ visibleArea: h, type: "resize" }))), { coordinates: m = Ye(m, l), visibleArea: h = Ye(h = et(h, si(He(m), He(s))), i({ visibleArea: h, type: "move" })) };
}
function dr(e) {
  var n = e.flip, i = e.previousFlip, s = e.rotate, o = e.getAreaRestrictions, a = e.coordinates, l = e.visibleArea, d = e.imageSize, u = re({}, a), p = re({}, l), m = i.horizontal !== n.horizontal, h = i.vertical !== n.vertical;
  if (m || h) {
    var f = kt({ left: d.width / 2, top: d.height / 2 }, -s), b = kt(He(u), -s), L = kt({ left: m ? f.left - (b.left - f.left) : b.left, top: h ? f.top - (b.top - f.top) : b.top }, s);
    u = et(u, si(L, He(u))), b = kt(He(p), -s), p = Ye(p = et(p, si(L = kt({ left: m ? f.left - (b.left - f.left) : b.left, top: h ? f.top - (b.top - f.top) : b.top }, s), He(p))), o({ visibleArea: p, type: "move" }));
  }
  return { coordinates: u, visibleArea: p };
}
function fa(e) {
  var n = e.directions, i = e.coordinates, s = e.positionRestrictions, o = s === void 0 ? {} : s, a = e.sizeRestrictions, l = e.preserveRatio, d = e.compensate, u = re({}, n), p = pt(i, u).width, m = pt(i, u).height;
  p < 0 && (u.left < 0 && u.right < 0 ? (u.left = -(i.width - a.minWidth) / (u.left / u.right), u.right = -(i.width - a.minWidth) / (u.right / u.left)) : u.left < 0 ? u.left = -(i.width - a.minWidth) : u.right < 0 && (u.right = -(i.width - a.minWidth))), m < 0 && (u.top < 0 && u.bottom < 0 ? (u.top = -(i.height - a.minHeight) / (u.top / u.bottom), u.bottom = -(i.height - a.minHeight) / (u.bottom / u.top)) : u.top < 0 ? u.top = -(i.height - a.minHeight) : u.bottom < 0 && (u.bottom = -(i.height - a.minHeight)));
  var h = yi(pt(i, u), o);
  d && (h.left && h.left > 0 && h.right === 0 ? (u.right += h.left, u.left -= h.left) : h.right && h.right > 0 && h.left === 0 && (u.left += h.right, u.right -= h.right), h.top && h.top > 0 && h.bottom === 0 ? (u.bottom += h.top, u.top -= h.top) : h.bottom && h.bottom > 0 && h.top === 0 && (u.top += h.bottom, u.bottom -= h.bottom), h = yi(pt(i, u), o));
  var f = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (yt.forEach((function(S) {
    var T = h[S];
    T && u[S] && (f[S] = Math.max(0, 1 - T / u[S]));
  })), l) {
    var b = Math.min.apply(null, yt.map((function(S) {
      return f[S];
    })));
    b !== 1 / 0 && yt.forEach((function(S) {
      u[S] *= b;
    }));
  } else yt.forEach((function(S) {
    f[S] !== 1 / 0 && (u[S] *= f[S]);
  }));
  if (p = pt(i, u).width, m = pt(i, u).height, u.right + u.left && (p > a.maxWidth ? f.width = (a.maxWidth - i.width) / (u.right + u.left) : p < a.minWidth && (f.width = (a.minWidth - i.width) / (u.right + u.left))), u.bottom + u.top && (m > a.maxHeight ? f.height = (a.maxHeight - i.height) / (u.bottom + u.top) : m < a.minHeight && (f.height = (a.minHeight - i.height) / (u.bottom + u.top))), l) {
    var L = Math.min(f.width, f.height);
    L !== 1 / 0 && yt.forEach((function(S) {
      u[S] *= L;
    }));
  } else f.width !== 1 / 0 && ql.forEach((function(S) {
    u[S] *= f.width;
  })), f.height !== 1 / 0 && Zl.forEach((function(S) {
    u[S] *= f.height;
  }));
  return u;
}
function Ti(e, n, i) {
  return n == 0 && i == 0 ? e / 2 : n == 0 ? 0 : i == 0 ? e : e * Math.abs(n / (n + i));
}
var hr = vt("vue-simple-handler"), vr = vt("vue-simple-handler-wrapper"), Ln = { name: "SimpleHandler", components: { HandlerWrapper: Ha }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, n = (lt(e = {}, this.horizontalPosition, !!this.horizontalPosition), lt(e, this.verticalPosition, !!this.verticalPosition), lt(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), lt(e, "hover", this.hover), e);
  return { default: Ve(hr(n), this.defaultClass, this.hover && this.hoverClass), wrapper: Ve(vr(n), this.wrapperClass) };
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
  var l = ie("HandlerWrapper");
  return y(), oe(l, { class: a.classes.wrapper, "vertical-position": i.verticalPosition, "horizontal-position": i.horizontalPosition, disabled: i.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: E((function() {
    return [g("div", { class: a.classes.default }, null, 2)];
  })), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var mr = vt("vue-simple-line"), fr = vt("vue-simple-line-wrapper"), xn = { name: "SimpleLine", components: { LineWrapper: Ya }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: Ve(mr(lt({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: Ve(fr(lt({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
xn.render = function(e, n, i, s, o, a) {
  var l = ie("LineWrapper");
  return y(), oe(l, { class: a.classes.wrapper, position: i.position, disabled: i.disabled, onDrag: a.onDrag, onDragEnd: a.onDragEnd, onEnter: a.onEnter, onLeave: a.onLeave }, { default: E((function() {
    return [g("div", { class: a.classes.root }, null, 2)];
  })), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var rn = vt("vue-bounding-box"), gr = ["east", "west", null], pr = ["south", "north", null], qa = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return Ln;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return xn;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return gr.forEach((function(n) {
    pr.forEach((function(i) {
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
        var l = o.horizontalDirection, d = o.verticalDirection, u = l === "east" ? i : l === "west" ? 0 : i / 2, p = d === "south" ? s : d === "north" ? 0 : s / 2;
        a.wrapperClass = rn("handler"), a.wrapperStyle = { transform: "translate(".concat(u, "px, ").concat(p, "px)") }, e.transitions && e.transitions.enabled && (a.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else a.wrapperClass = rn("handler", lt({}, o.classname, !0));
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
  n === "west" ? d.left -= a : n === "east" && (d.right += a), i === "north" ? d.top -= l : i === "south" && (d.bottom += l), !i && n ? s = "width" : i && !n && (s = "height"), this.resizable && this.$emit("resize", new jl(d, { allowedDirections: { left: n === "west" || !n, right: n === "east" || !n, bottom: i === "south" || !i, top: i === "north" || !i }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: s }));
} }, emits: ["resize", "resize-end"] };
qa.render = function(e, n, i, s, o, a) {
  return y(), oe("div", { ref: "box", class: a.classes.root, style: a.style }, [ht(e.$slots, "default"), g("div", null, [(y(!0), oe(ge, null, Ne(a.lineNodes, (function(l) {
    return y(), oe(ai(l.component), { key: l.name, "default-class": l.class, "hover-class": l.hoverClass, "wrapper-class": l.wrapperClass, position: l.name, disabled: l.disabled, onDrag: function(d) {
      return a.onHandlerDrag(d, l.horizontalDirection, l.verticalDirection);
    }, onDragEnd: n[1] || (n[1] = function(d) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  })), 128))]), (y(!0), oe(ge, null, Ne(a.handlerNodes, (function(l) {
    return y(), oe("div", { key: l.name, style: l.wrapperStyle, class: l.wrapperClass }, [(y(), oe(ai(l.component), { "default-class": l.class, "hover-class": l.hoverClass, "wrapper-class": l.wrapperClass, "horizontal-position": l.horizontalDirection, "vertical-position": l.verticalDirection, disabled: l.disabled, onDrag: function(d) {
      return a.onHandlerDrag(d, l.horizontalDirection, l.verticalDirection);
    }, onDragEnd: n[2] || (n[2] = function(d) {
      return a.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  })), 128))], 6);
};
var br = vt("vue-draggable-area"), Za = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: br() };
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
    this.touches.length === 1 && i.length === 1 && this.$emit("move", new Sn({ left: i[0].clientX - (o + this.anchor.x), top: i[0].clientY - (a + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
Za.render = function(e, n, i, s, o, a) {
  return y(), oe("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }) }, [ht(e.$slots, "default")], 544);
};
function cn(e) {
  var n, i;
  return { rotate: e.rotate || 0, flip: { horizontal: ((n = e == null ? void 0 : e.flip) === null || n === void 0 ? void 0 : n.horizontal) || !1, vertical: ((i = e == null ? void 0 : e.flip) === null || i === void 0 ? void 0 : i.vertical) || !1 } };
}
function yr(e) {
  return new Promise((function(n, i) {
    try {
      if (e) if (/^data:/i.test(e)) n((function(u) {
        u = u.replace(/^data:([^;]+);base64,/gim, "");
        for (var p = atob(u), m = p.length, h = new ArrayBuffer(m), f = new Uint8Array(h), b = 0; b < m; b++) f[b] = p.charCodeAt(b);
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
function Er(e) {
  try {
    var n, i = new DataView(e), s = void 0, o = void 0, a = void 0, l = void 0;
    if (i.getUint8(0) === 255 && i.getUint8(1) === 216) for (var d = i.byteLength, u = 2; u + 1 < d; ) {
      if (i.getUint8(u) === 255 && i.getUint8(u + 1) === 225) {
        a = u;
        break;
      }
      u++;
    }
    if (a && (s = a + 10, (function(b, L, S) {
      var T, ee = "";
      for (T = L, S += L; T < S; T++) ee += String.fromCharCode(b.getUint8(T));
      return ee;
    })(i, a + 4, 4) === "Exif")) {
      var p = i.getUint16(s);
      if (((o = p === 18761) || p === 19789) && i.getUint16(s + 2, o) === 42) {
        var m = i.getUint32(s + 4, o);
        m >= 8 && (l = s + m);
      }
    }
    if (l) {
      for (var h = i.getUint16(l, o), f = 0; f < h; f++)
        if (u = l + 12 * f + 2, i.getUint16(u, o) === 274) {
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
  this.transforming = !1, this.debouncedProcessEnd = vn(this.processEnd), this.touches = [];
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
  return y(), oe("div", { ref: "container", onTouchstart: n[1] || (n[1] = function() {
    return a.onTouchStart && a.onTouchStart.apply(a, arguments);
  }), onMousedown: n[2] || (n[2] = function() {
    return a.onMouseDown && a.onMouseDown.apply(a, arguments);
  }), onWheel: n[3] || (n[3] = function() {
    return a.onWheel && a.onWheel.apply(a, arguments);
  }) }, [ht(e.$slots, "default")], 544);
};
var pn = { components: { TransformableImage: Ja }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
pn.render = function(e, n, i, s, o, a) {
  var l = ie("transformable-image");
  return y(), oe(l, { "touch-move": i.touchMove, "touch-resize": i.touchResize, "mouse-move": i.mouseMove, "wheel-resize": i.wheelResize, onMove: n[1] || (n[1] = function(d) {
    return e.$emit("move", d);
  }), onResize: n[2] || (n[2] = function(d) {
    return e.$emit("resize", d);
  }) }, { default: E((function() {
    return [ht(e.$slots, "default")];
  })), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var Si = vt("vue-preview"), eo = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
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
    var e = this.coordinates.width / this.size.width, n = _e(_e({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), i = this.imageSize.width, s = this.imageSize.height, o = Xa({ width: i, height: s }, n.rotate), a = { width: "".concat(i, "px"), height: "".concat(s, "px"), left: "0px", top: "0px" }, l = { rotate: { left: (i - o.width) * n.scaleX / 2, top: (s - o.height) * n.scaleY / 2 }, scale: { left: (1 - n.scaleX) * i / 2, top: (1 - n.scaleY) * s / 2 } };
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
  return y(), oe("div", { ref: "root", class: a.classes.root, style: a.style }, [g("div", { ref: "wrapper", class: a.classes.wrapper, style: a.wrapperStyle }, [pi(g("img", { ref: "image", src: i.image && i.image.src, class: a.classes.image, style: a.imageStyle }, null, 14, ["src"]), [[Di, i.image && i.image.src]])], 6)], 6);
};
var to = { components: { Preview: eo }, inheritAttrs: !1 };
to.render = function(e, n, i, s, o, a) {
  var l = ie("preview");
  return y(), oe(l, wn(e.$attrs, { fill: !0 }), null, 16);
};
var un = vt("vue-rectangle-stencil"), Nn = { name: "RectangleStencil", components: { StencilPreview: to, BoundingBox: qa, DraggableArea: Za }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return Ln;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return xn;
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
Nn.render = function(e, n, i, s, o, a) {
  var l = ie("stencil-preview"), d = ie("draggable-area"), u = ie("bounding-box");
  return y(), oe("div", { class: a.classes.stencil, style: a.style }, [g(u, { width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, transitions: i.transitions, class: a.classes.boundingBox, handlers: i.handlers, "handlers-component": i.handlersComponent, "handlers-classes": i.handlersClasses, "handlers-wrappers-classes": i.handlersWrappersClasses, lines: i.lines, "lines-component": i.linesComponent, "lines-classes": i.linesClasses, "lines-wrappers-classes": i.linesWrappersClasses, resizable: i.resizable, onResize: a.onResize, onResizeEnd: a.onResizeEnd }, { default: E((function() {
    return [g(d, { movable: i.movable, onMove: a.onMove, onMoveEnd: a.onMoveEnd }, { default: E((function() {
      return [g(l, { image: i.image, coordinates: i.coordinates, width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, class: a.classes.preview, transitions: i.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    })), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  })), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var _r = ["transitions"], wt = vt("vue-advanced-cropper"), io = { name: "Cropper", components: { BackgroundWrapper: pn }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return Nn;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return pn;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return Jl.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var n = e.event, i = e.coordinates, s = e.aspectRatio, o = e.positionRestrictions, a = e.sizeRestrictions, l = re(re({}, i), { right: i.left + i.width, bottom: i.top + i.height }), d = n.params || {}, u = re({}, n.directions), p = d.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  a.widthFrozen && (u.left = 0, u.right = 0), a.heightFrozen && (u.top = 0, u.bottom = 0), yt.forEach((function(j) {
    p[j] || (u[j] = 0);
  }));
  var m = pt(l, u = fa({ coordinates: l, directions: u, sizeRestrictions: a, positionRestrictions: o })).width, h = pt(l, u).height, f = d.preserveRatio ? we(l) : ln(m / h, s);
  if (f) {
    var b = d.respectDirection;
    if (b || (b = l.width >= l.height || f === 1 ? "width" : "height"), b === "width") {
      var L = m / f - l.height;
      if (p.top && p.bottom) {
        var S = u.top, T = u.bottom;
        u.bottom = Ti(L, T, S), u.top = Ti(L, S, T);
      } else p.bottom ? u.bottom = L : p.top ? u.top = L : p.right ? u.right = 0 : p.left && (u.left = 0);
    } else if (b === "height") {
      var ee = l.width - h * f;
      if (p.left && p.right) {
        var G = u.left, q = u.right;
        u.left = -Ti(ee, G, q), u.right = -Ti(ee, q, G);
      } else p.left ? u.left = -ee : p.right ? u.right = -ee : p.top ? u.top = 0 : p.bottom && (u.bottom = 0);
    }
    u = fa({ directions: u, coordinates: l, sizeRestrictions: a, positionRestrictions: o, preserveRatio: !0, compensate: d.compensate });
  }
  return m = pt(l, u).width, h = pt(l, u).height, (f = d.preserveRatio ? we(l) : ln(m / h, s)) && Math.abs(f - m / h) > 1e-3 && yt.forEach((function(j) {
    p[j] || (u[j] = 0);
  })), gn({ event: new Sn({ left: -u.left, top: -u.top }), coordinates: { width: i.width + u.right + u.left, height: i.height + u.top + u.bottom, left: i.left, top: i.top }, positionRestrictions: o });
} }, moveAlgorithm: { type: Function, default: gn }, initStretcher: { type: Function, default: function(e) {
  var n = e.stretcher, i = e.imageSize, s = we(i);
  n.style.width = i.width + "px", n.style.height = n.clientWidth / s + "px", n.style.width = n.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.coordinates, s = e.aspectRatio, o = e.sizeRestrictions, a = e.positionRestrictions, l = re(re({}, i), It({ width: i.width, height: i.height, aspectRatio: s, sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minHeight: Math.min(n.height, o.minHeight), minWidth: Math.min(n.width, o.minWidth) } }));
  return l = Ye(l = et(l, si(He(i), He(l))), qi(_t(n), a));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.boundaries, s = e.getAreaRestrictions, o = e.coordinates, a = re({}, n);
  a.height = a.width / we(i), a.top += (n.height - a.height) / 2, (o.height - a.height > 0 || o.width - a.width > 0) && (a = rt(a, Math.max(o.height / a.height, o.width / a.width)));
  var l = Xi(ri(o, _t(a = rt(a, Ki(a, s({ visibleArea: a, type: "resize" }))))));
  return a.width < o.width && (l.left = 0), a.height < o.height && (l.top = 0), a = Ye(a = et(a, l), s({ visibleArea: a, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.visibleArea, i = e.boundaries, s = e.imageSize, o = e.imageRestriction, a = e.type, l = {};
  return o === "fill-area" ? l = { left: 0, top: 0, right: s.width, bottom: s.height } : o === "fit-area" && (we(i) > we(s) ? (l = { top: 0, bottom: s.height }, n && a === "move" && (n.width > s.width ? (l.left = -(n.width - s.width) / 2, l.right = s.width - l.left) : (l.left = 0, l.right = s.width))) : (l = { left: 0, right: s.width }, n && a === "move" && (n.height > s.height ? (l.top = -(n.height - s.height) / 2, l.bottom = s.height - l.top) : (l.top = 0, l.bottom = s.height)))), l;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var n = e.imageSize, i = {};
  return e.imageRestriction !== "none" && (i = { left: 0, top: 0, right: n.width, bottom: n.height }), i;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: _e({}, da) };
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
  var e = mn(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: mn(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
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
      var p = fn(o), m = ja(l, p);
      return p.width < 1 / 0 && (!u.maxWidth || u.maxWidth > m.width) && (u.maxWidth = Math.min(u.maxWidth, m.width)), p.height < 1 / 0 && (!u.maxHeight || u.maxHeight > m.height) && (u.maxHeight = Math.min(u.maxHeight, m.height)), u.minWidth > u.maxWidth && (u.minWidth = u.maxWidth, u.widthFrozen = !0), u.minHeight > u.maxHeight && (u.minHeight = u.maxHeight, u.heightFrozen = !0), u;
    })({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var n = this.getStencilSize(), i = fn(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
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
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, n = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, i = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, s = _e(_e({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), o = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-n.left - i.left - this.imageTransforms.translateX, "px, ").concat(-n.top - i.top - this.imageTransforms.translateY, "px)") + Qa(s) };
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
  this.debouncedUpdate = vn(this.update, this.debounce), this.debouncedDisableTransitions = vn(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var e = this.initialized ? this.prepareResult(_e({}, this.coordinates)) : this.defaultCoordinates(), n = { rotate: this.imageTransforms.rotate % 360, flip: _e({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var i = this;
    return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? _e({}, this.visibleArea) : null, imageTransforms: n, get canvas() {
      return i.canvas ? i.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? _e({}, this.visibleArea) : null, canvas: void 0, imageTransforms: n };
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
  })(_e(_e({}, this.getPublicProperties()), {}, { positionRestrictions: Mi(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, n, i, s) {
  var o = this.autoZoomAlgorithm;
  o || (o = this.stencilSize ? ir : this.autoZoom ? nr : ar);
  var a = o({ event: { type: e, params: s }, visibleArea: n, coordinates: i, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return _e(_e({}, a), {}, { changed: !ha(a.visibleArea, n) || !ha(a.coordinates, i) });
}, runAutoZoom: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transitions, s = i !== void 0 && i, o = Hl(n, _r), a = this.processAutoZoom(e, this.visibleArea, this.coordinates, o), l = a.visibleArea, d = a.coordinates, u = a.changed;
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
      return Ql.forEach((function(d) {
        l.directions[d] *= o;
      })), l;
    }
    return i;
  })(_e(_e({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, n = this.$refs.image, i = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? (function(d, u, p) {
      var m = p.rotate, h = p.flip, f = { width: u.naturalWidth, height: u.naturalHeight }, b = Xa(f, m), L = d.getContext("2d");
      d.height = b.height, d.width = b.width, L.save();
      var S = kt(He(re({ left: 0, top: 0 }, f)), m);
      return L.translate(-(S.left - b.width / 2), -(S.top - b.height / 2)), L.rotate(m * Math.PI / 180), L.translate(h.horizontal ? f.width : 0, h.vertical ? f.height : 0), L.scale(h.horizontal ? -1 : 1, h.vertical ? -1 : 1), L.drawImage(u, 0, 0, f.width, f.height), L.restore(), d;
    })(this.$refs.sourceCanvas, n, this.imageTransforms) : n, s = _e({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), o = function(d) {
      return d.find((function(u) {
        return p = u, !Number.isNaN(parseFloat(p)) && isFinite(p);
        var p;
      }));
    }, a = It({ sizeRestrictions: { minWidth: o([s.width, s.minWidth]) || 0, minHeight: o([s.height, s.minHeight]) || 0, maxWidth: o([s.width, s.maxWidth]) || 1 / 0, maxHeight: o([s.height, s.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (s.maxArea && a.width * a.height > s.maxArea) {
      var l = Math.sqrt(s.maxArea / (a.width * a.height));
      a = { width: Math.round(l * a.width), height: Math.round(l * a.height) };
    }
    return (function(d, u, p, m, h) {
      d.width = m ? m.width : p.width, d.height = m ? m.height : p.height;
      var f = d.getContext("2d");
      f.clearRect(0, 0, d.width, d.height), h && (h.imageSmoothingEnabled && (f.imageSmoothingEnabled = h.imageSmoothingEnabled), h.imageSmoothingQuality && (f.imageSmoothingQuality = h.imageSmoothingQuality), h.fillColor && (f.fillStyle = h.fillColor, f.fillRect(0, 0, d.width, d.height), f.save()));
      var b = p.left < 0 ? -p.left : 0, L = p.top < 0 ? -p.top : 0;
      f.drawImage(u, p.left + b, p.top + L, p.width, p.height, b * (d.width / p.width), L * (d.height / p.height), d.width, d.height);
    })(e, i, this.coordinates, a, s), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.visibleArea && n ? er(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, s = this.visibleArea && n ? Mi(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return tr({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i, positionRestrictions: s, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var n = this.defaultSize;
    n || (n = this.stencilSize ? lr : sr);
    var i = this.sizeRestrictions;
    i.minWidth, i.minHeight, i.maxWidth, i.maxHeight;
    var s = Qt(n) ? n({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : n, o = this.defaultPosition || or, a = [s, function(l) {
      var d = l.coordinates;
      return _e({}, Qt(o) ? o({ coordinates: d, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
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
      var a = o.cropper, l = o.imageSize, d = a.clientHeight, u = a.clientWidth, p = d, m = l.width * d / l.height;
      return m > u && (m = u, p = l.height * u / l.width), { width: m, height: p };
    })(s) : e.boundaries = (function(o) {
      var a = o.cropper;
      return { width: a.clientWidth, height: a.clientHeight };
    })(s), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  }));
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = _e(_e({}, this.defaultImageTransforms), {}, { flip: _e({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then((function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var n, i, s, o, a, l, d = e.defaultVisibleArea || rr;
    e.visibleArea = Qt(d) ? d({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (n = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, i = n.visibleArea, s = n.boundaries, o = n.getAreaRestrictions, a = re({}, i), l = we(s), a.width / a.height !== l && (a.height = a.width / l), Ye(a, o({ visibleArea: a, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
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
        yr(e).then((function(a) {
          var l = Er(a);
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
  })(o), this.defaultImageTransforms = _e(_e({}, this.appliedImageTransforms), {}, { flip: _e({}, this.appliedImageTransforms.flip) }), this.$nextTick((function() {
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
    n.coordinates = n.moveAlgorithm(_e(_e({}, n.getPublicProperties()), {}, { positionRestrictions: Mi(n.positionRestrictions, n.visibleArea), coordinates: n.coordinates, event: n.normalizeEvent(e) })), n.onChange();
  }));
}, onResize: function(e) {
  var n = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender((function() {
    var i = n.sizeRestrictions, s = Math.min(n.coordinates.width, n.coordinates.height, 20 * n.coefficient);
    n.coordinates = n.resizeAlgorithm(_e(_e({}, n.getPublicProperties()), {}, { positionRestrictions: Mi(n.positionRestrictions, n.visibleArea), sizeRestrictions: { maxWidth: Math.min(i.maxWidth, n.visibleArea.width), maxHeight: Math.min(i.maxHeight, n.visibleArea.height), minWidth: Math.max(i.minWidth, s), minHeight: Math.max(i.minHeight, s) }, event: n.normalizeEvent(e) })), n.onChange(), n.ticking = !1;
  }));
}, onManipulateImage: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i = n.transitions, s = i !== void 0 && i, o = n.normalize, a = o === void 0 || o;
    s && this.enableTransitions();
    var l = cr(_e(_e({}, this.getPublicProperties()), {}, { event: a ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), d = l.visibleArea, u = l.coordinates;
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
    var u = this.getStencilSize(), p = u ? we(u) : null;
    ze(n) && (n = ua(p) ? p : void 0), ze(i) && (i = ua(p) ? p : void 0);
  }
  return { minimum: n, maximum: i };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, n = e.boundaries, i = e.stencilSize, s = e.aspectRatio, ln(we(o = Qt(i) ? i({ boundaries: n, aspectRatio: s }) : i), s) && (o = It({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: o.width, height: o.height, aspectRatio: { minimum: s.minimum, maximum: s.maximum } })), (o.width > n.width || o.height > n.height) && (o = It({ sizeRestrictions: { maxWidth: n.width, maxHeight: n.height, minWidth: 0, minHeight: 0 }, width: o.width, height: o.height, aspectRatio: { minimum: we(o), maximum: we(o) } })), o;
  var e, n, i, s, o;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return _e({}, da);
}, flip: function(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = i.transitions, o = s === void 0 || s;
  if (!this.transitionsActive) {
    o && this.enableTransitions();
    var a = _e({}, this.imageTransforms.flip), l = dr({ flip: { horizontal: e ? !a.horizontal : a.horizontal, vertical: n ? !a.vertical : a.vertical }, previousFlip: a, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), d = l.visibleArea, u = l.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), n && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = d, this.coordinates = u, this.onChange(), o && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.transitions, s = i === void 0 || i;
  if (!this.transitionsActive) {
    s && this.enableTransitions();
    var o = _e({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var a = ur({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: o, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), l = a.visibleArea, d = a.coordinates, u = this.processAutoZoom("rotateImage", l, d);
    l = u.visibleArea, d = u.coordinates, this.visibleArea = l, this.coordinates = d, this.onChange(), s && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, wr = { key: 0, ref: "canvas", style: { display: "none" } }, Cr = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
io.render = function(e, n, i, s, o, a) {
  return y(), oe("div", { ref: "cropper", class: a.classes.cropper }, [g("div", { ref: "stretcher", class: a.classes.stretcher }, null, 2), g("div", { class: a.classes.boundaries, style: a.boundariesStyle }, [(y(), oe(ai(i.backgroundWrapperComponent), { class: a.classes.cropperWrapper, "wheel-resize": a.settings.resizeImage.wheel, "touch-resize": a.settings.resizeImage.touch, "touch-move": a.settings.moveImage.touch, "mouse-move": a.settings.moveImage.mouse, onMove: a.onManipulateImage, onResize: a.onManipulateImage }, { default: E((function() {
    return [g("div", { class: a.classes.background, style: a.boundariesStyle }, null, 6), g("div", { class: a.classes.imageWrapper }, [g("img", { ref: "image", crossorigin: o.imageAttributes.crossOrigin, src: o.imageAttributes.src, class: a.classes.image, style: a.imageStyle, onMousedown: n[1] || (n[1] = gi((function() {
    }), ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), g("div", { class: a.classes.foreground, style: a.boundariesStyle }, null, 6), pi((y(), oe(ai(i.stencilComponent), wn({ ref: "stencil", image: a.image, coordinates: o.coordinates, "stencil-coordinates": a.stencilCoordinates, transitions: a.transitionsOptions }, i.stencilProps, { onResize: a.onResize, onResizeEnd: a.onResizeEnd, onMove: a.onMove, onMoveEnd: a.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[Di, o.imageLoaded]]), i.canvas ? (y(), oe("canvas", wr, null, 512)) : ce("", !0), i.canvas ? (y(), oe("canvas", Cr, null, 512)) : ce("", !0)];
  })), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
function Ir() {
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
function Ar(e = {}) {
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
    const f = s.value, b = new dn.Player(f);
    a = b;
    const L = Ra();
    if (!L) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((S, T) => {
        L.load(
          h,
          (ee) => {
            try {
              b.loops = n, b.setVideoItem(ee), i && (b.startAnimation(), o.value = !0), S();
            } catch (G) {
              T(G);
            }
          },
          (ee) => {
            T(ee);
          }
        );
      });
    } catch (S) {
      throw console.error("SVGA load error:", S), l(), S;
    }
  }
  async function u(h) {
    const f = URL.createObjectURL(h);
    try {
      await d(f);
    } finally {
      URL.revokeObjectURL(f);
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
  function m() {
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
    startAnimation: m,
    /** Whether animation is playing */
    isPlaying: o
  };
}
function kn(e) {
  const { action: n, onSuccess: i, onError: s, successMessage: o, errorMessage: a } = e, l = C(!1);
  let d = !1;
  return { loading: l, execute: async (...m) => {
    if (d) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    d = !0, l.value = !0;
    try {
      const h = await n(...m);
      return o && X.success(o), i == null || i(h), h;
    } catch (h) {
      const f = h instanceof Error ? h : new Error(String(h)), b = a ? `${a}: ${f.message}` : f.message;
      X.error(b), s == null || s(f);
      return;
    } finally {
      d = !1, l.value = !1;
    }
  }, reset: () => {
    d = !1, l.value = !1;
  } };
}
function pa(e) {
  const { confirm: n, onSuccess: i, ...s } = e, o = C(null), a = (f) => {
    o.value = null, i == null || i(f);
  }, { loading: l, execute: d, reset: u } = kn({
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
const Mr = { class: "image-upload-container" }, Tr = {
  key: 0,
  class: "image-upload-mode-switch"
}, Sr = {
  key: 1,
  class: "image-upload-url-input"
}, Rr = {
  key: 0,
  class: "input-suffix-validating"
}, Lr = {
  key: 2,
  class: "image-upload-url-error"
}, xr = {
  key: 0,
  class: "image-upload-uploading-overlay"
}, Nr = { class: "image-upload-progress-circle" }, kr = {
  viewBox: "0 0 36 36",
  class: "progress-ring"
}, Dr = ["stroke-dasharray"], Or = { class: "progress-percent" }, Ur = { class: "upload-status-text" }, $r = ["src"], Pr = ["src"], Fr = {
  key: 2,
  class: "image-upload-provider-badge"
}, Vr = {
  key: 3,
  class: "image-upload-provider-badge upload-failed-badge"
}, zr = {
  key: 4,
  class: "image-upload-provider-badge",
  style: { background: "#ff9800" }
}, Gr = {
  key: 5,
  class: "image-upload-preview-actions"
}, Br = ["title"], Wr = ["title"], Hr = {
  key: 0,
  class: "image-upload-progress"
}, Yr = { class: "progress-bar" }, jr = { class: "progress-text" }, Xr = { class: "upload-hint" }, Kr = { class: "upload-sub-hint" }, qr = ["accept"], Zr = ["src"], Qr = ["src"], Jr = { class: "image-crop-body" }, ec = {
  key: 0,
  class: "image-crop-loading"
}, tc = { class: "image-crop-footer" }, ic = { class: "btn-content" }, nc = /* @__PURE__ */ Ie({
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
    qo(dn.Parser);
    const o = e, a = i, l = F(() => o.placeholder || s(r.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE)), d = F(() => o.acceptHint || s("Supports JPG/PNG/GIF/WebP max {max}MB", { max: o.maxSize })), u = C(null), p = C(null), m = C(!1), h = C(0), f = C(!1), b = C(""), L = C(!o.uploadEnabled), S = C(o.modelValue), T = C(null), { previewUrl: ee, setPreview: G } = Ir(), q = C(!1), j = C(!1), {
      containerRef: te,
      playUrl: le
    } = Ar({ loop: 1, autoPlay: !0 }), de = C(null);
    let ye = null;
    function W() {
      if (ye) {
        try {
          ye.stopAnimation(), ye.clear();
        } catch {
        }
        ye = null;
      }
    }
    function k(P) {
      le(P).catch((se) => {
        console.error("[ImageUpload] SVGA preview load error:", se);
      });
    }
    function O(P) {
      W(), Je(() => {
        if (!de.value) return;
        const se = new dn.Player(de.value);
        se.loops = 0, se.setContentMode("AspectFit"), ye = se;
        const Ce = Ra();
        Ce && Ce.load(
          P,
          (Be) => {
            se.setVideoItem(Be), se.startAnimation();
          },
          (Be) => {
            console.error("[ImageUpload] SVGA URL preview load error:", Be);
          }
        );
      });
    }
    const D = C(!1), R = C(""), M = C(1), U = C(1), N = C(!1), x = C(null), A = C({ width: 300, height: 300 });
    function ae() {
      if (!x.value) return;
      const P = x.value.clientWidth, se = x.value.clientHeight || 320, Ce = P / se, Be = o.aspectRatio || 16 / 9;
      let ft, it;
      Be > Ce ? (ft = Math.min(P, 500), it = ft / Be) : (it = Math.min(se, 320), ft = it * Be), A.value = { width: Math.round(ft), height: Math.round(it) };
    }
    Me(D, async (P) => {
      P && (await Je(), setTimeout(ae, 100));
    }), Me(() => o.aspectRatio, () => {
      D.value && ae();
    }), At(() => {
      window.addEventListener("resize", ae);
    });
    const ue = C(!1), he = C(""), Ae = new Zo({
      setValidating: (P) => {
        ue.value = P;
      },
      setError: (P) => {
        he.value = P;
      },
      onConfirm: (P) => {
        a("update:modelValue", P);
      }
    }, o.skipSvgaValidation);
    Me(() => o.skipSvgaValidation, (P) => {
      Ae.updateSkipSvgaValidation(!!P);
    });
    const $ = F(() => J(S.value));
    Me(() => o.modelValue, (P) => {
      S.value = P, he.value = "", P && o.uploadEnabled && (L.value = !0), o.deferUpload && (T.value = null, G(null), q.value = !1, j.value = !1, a("fileReady", null));
    }), Me(() => o.uploadEnabled, (P) => {
      P && !o.modelValue && (L.value = !1);
    }), Me(
      [() => o.modelValue, L, () => o.uploadEnabled],
      ([P, se, Ce]) => {
        P && (se || !Ce) && jn(P) ? O(P) : W();
      },
      { flush: "post" }
    ), tt(() => {
      Ae.dispose(), W(), window.removeEventListener("resize", ae);
    });
    function Q() {
      var P;
      (P = u.value) == null || P.click();
    }
    function Se(P) {
      var Ce;
      const se = (Ce = P.target.files) == null ? void 0 : Ce[0];
      se && Re(se), P.target.value = "";
    }
    async function Re(P) {
      const se = es(P, o.accept);
      if (!se.valid) {
        X.error(se.errorHint);
        return;
      }
      if (!ts(P, o.maxSize)) {
        X.error(s("File size exceeds {max}MB", { max: o.maxSize }));
        return;
      }
      try {
        await is(P, o.accept, o.skipSvgaValidation);
      } catch (Ce) {
        const Be = Ce instanceof Error ? Ce : new Error(String(Ce));
        X.error(Be.message || s(r.FILE_LOAD_FAILED));
        return;
      }
      if (o.cropEnabled) {
        M.value = 1, U.value = 1, R.value = "", N.value = !0, D.value = !0;
        try {
          const Ce = await ns(P);
          R.value = Ce;
        } catch {
          X.error(s(r.IMAGE_LOAD_FAILED)), D.value = !1;
        } finally {
          N.value = !1;
        }
      } else
        await je(P);
    }
    async function $e() {
      if (!(!R.value || !p.value))
        try {
          const { canvas: P } = p.value.getResult(), se = await as(P, "image/jpeg", 0.92);
          D.value = !1, await je(se);
        } catch {
          X.error(s(r.CROP_FAILED));
        }
    }
    function De() {
      D.value = !1, R.value = "";
    }
    async function je(P) {
      if (o.deferUpload) {
        T.value = P, G(P);
        const se = os(P), Ce = ss(P);
        q.value = Ce, j.value = se, a("fileReady", P), se && k(previewUrl);
        return;
      }
      m.value = !0, h.value = 0;
      try {
        const se = await oa(P, o.type, (Ce) => {
          h.value = Ce;
        });
        a("update:modelValue", se.url), b.value = se.provider || "", X.success(s(r.UPLOAD_SUCCESS));
      } catch (se) {
        const Ce = se instanceof Error ? se : new Error(String(se));
        X.error(`${s("Upload Failed With Error", { error: Ce.message || s(r.NETWORK_ERROR) })}`);
      } finally {
        m.value = !1, h.value = 0;
      }
    }
    function Ke(P) {
      P.preventDefault();
      const se = ls(P);
      se && Re(se);
    }
    function me() {
      Ae.cancelValidation(), ue.value = !1, he.value = "", L.value = !1;
    }
    function ct() {
      Ae.cancelValidation(), ue.value = !1, he.value = "", L.value = !0;
    }
    function H() {
      Ae.handleUrlFocus();
    }
    function ve(P) {
      P && typeof P == "object" && "target" in P && P.preventDefault(), Ae.handleUrlBlur(
        S.value,
        o.maxBytes
      );
    }
    function Oe(P) {
      typeof P == "string" && (S.value = P, he.value = "", Ae.cancelValidation(), ue.value = !1);
    }
    function Te(P) {
      P && typeof P == "object" && "target" in P && P.preventDefault(), Ae.handleUrlEnter(
        S.value,
        o.maxBytes
      );
    }
    function mt(P) {
      P == null || P.stopPropagation(), Ae.cancelValidation(), ue.value = !1, he.value = "", a("update:modelValue", ""), S.value = "", b.value = "", m.value = !1, h.value = 0, f.value = !1, W(), o.deferUpload && (T.value = null, G(null), q.value = !1, j.value = !1, a("fileReady", null));
    }
    function at(P) {
      P.target.style.display = "none";
    }
    return n({
      /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
      get isUrlInputMode() {
        return L.value;
      },
      /** 当前是否正在验证 URL */
      get isValidating() {
        return ue.value;
      },
      /** URL 验证错误信息 */
      get urlValidationError() {
        return he.value;
      },
      /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
      get hasUrlError() {
        return L.value ? !!(he.value || o.maxBytes && S.value.trim() && $.value > o.maxBytes) : !1;
      },
      /** 当前 URL 输入框中的值（用于提交时校验实际输入） */
      get urlInputValue() {
        return S.value;
      },
      /** 验证图片 URL 是否可访问 */
      validateImageUrl: Qo,
      /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
      setUrlError(P) {
        he.value = P;
      },
      /** 切换到 URL 输入模式 */
      switchToUrlMode: ct,
      /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
      reset() {
        Ae.reset(), T.value = null, G(null), q.value = !1, j.value = !1, W(), S.value = o.modelValue || "", b.value = "", he.value = "", m.value = !1, h.value = 0, f.value = !1, o.uploadEnabled && (L.value = !!o.modelValue), a("fileReady", null);
      },
      /**
       * 确保 URL 输入已验证并返回最终 URL。
       * - 如果当前不在 URL 输入模式，返回 null
       * - 如果正在验证，等待验证完成
       * - 如果输入框中有未 blur 确认的 URL，主动触发验证
       * - 验证成功返回 URL，验证失败抛出错误
       */
      async ensureUrlValidated() {
        return L.value ? await Ae.ensureUrlValidatedWithErrorCheck(
          S.value,
          o.modelValue || "",
          !!he.value,
          o.maxBytes
        ) : null;
      },
      async uploadPendingFile() {
        const P = T.value;
        if (!P) return null;
        m.value = !0, h.value = 0, f.value = !1;
        try {
          const se = await oa(P, o.type, (Ce) => {
            h.value = Ce;
          });
          return T.value = null, b.value = se.provider || "", f.value = !1, se.url;
        } catch (se) {
          throw f.value = !0, se;
        } finally {
          m.value = !1, h.value = 0;
        }
      }
    }), (P, se) => {
      const Ce = ie("t-input"), Be = ie("t-button"), ft = ie("t-dialog");
      return y(), w("div", Mr, [
        e.uploadEnabled && e.showUrlInput ? (y(), w("div", Tr, [
          c("button", {
            class: be(["mode-switch-btn", { active: !L.value }]),
            onClick: me
          }, [
            g(t(Yn)),
            B(" " + v(t(s)(t(r).UPLOAD_IMAGE)), 1)
          ], 2),
          c("button", {
            class: be(["mode-switch-btn", { active: L.value }]),
            onClick: ct
          }, v(t(s)(t(r).ENTER_URL)), 3)
        ])) : ce("", !0),
        L.value || !e.uploadEnabled ? (y(), w("div", Sr, [
          g(Ce, {
            "model-value": S.value,
            "onUpdate:modelValue": Oe,
            onFocus: H,
            onBlur: ve,
            onEnter: Te,
            placeholder: t(s)(t(r).ENTER_IMAGE_URL),
            status: he.value ? "error" : "default"
          }, _a({ _: 2 }, [
            e.maxBytes ? {
              name: "suffix",
              fn: E(() => [
                ue.value ? (y(), w("span", Rr, v(t(s)(t(r).VALIDATING)), 1)) : (y(), w("span", {
                  key: 1,
                  class: be(["input-suffix-count", { "byte-overflow": $.value > e.maxBytes }])
                }, v($.value) + "/" + v(e.maxBytes), 3))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["model-value", "placeholder", "status"])
        ])) : ce("", !0),
        he.value && (L.value || !e.uploadEnabled) ? (y(), w("div", Lr, v(he.value), 1)) : ce("", !0),
        e.uploadEnabled && !L.value ? (y(), w(ge, { key: 3 }, [
          t(ee) ? (y(), w("div", {
            key: 0,
            class: "image-upload-preview",
            style: Ge({
              width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
              height: `${e.previewHeight || 160}px`
            })
          }, [
            m.value ? (y(), w("div", xr, [
              c("div", Nr, [
                (y(), w("svg", kr, [
                  se[3] || (se[3] = c("path", {
                    class: "progress-ring-bg",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, -1)),
                  c("path", {
                    class: "progress-ring-fill",
                    "stroke-dasharray": `${h.value}, 100`,
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, 8, Dr)
                ])),
                c("span", Or, v(h.value) + "%", 1)
              ]),
              c("span", Ur, v(t(s)(t(r).UPLOADING)), 1)
            ])) : (y(), w(ge, { key: 1 }, [
              j.value ? (y(), w("div", {
                key: 0,
                ref_key: "svgaPreviewRef",
                ref: te,
                class: "svga-preview-container"
              }, null, 512)) : q.value ? (y(), w("video", {
                key: 1,
                src: t(ee),
                muted: "",
                loop: "",
                autoplay: "",
                playsinline: ""
              }, null, 8, $r)) : (y(), w("img", {
                key: 2,
                src: t(ee),
                alt: "preview"
              }, null, 8, Pr))
            ], 64)),
            !m.value && b.value ? (y(), w("span", Fr, v(b.value.toUpperCase()), 1)) : ce("", !0),
            !m.value && f.value ? (y(), w("span", Vr, v(t(s)(t(r).UPLOAD_FAILED)), 1)) : !m.value && !b.value ? (y(), w("span", zr, v(t(s)(t(r).PENDING_UPLOAD)), 1)) : ce("", !0),
            m.value ? ce("", !0) : (y(), w("div", Gr, [
              c("button", {
                class: "preview-action-btn",
                onClick: Q,
                title: t(s)(t(r).RE_UPLOAD)
              }, [
                g(t(Yn))
              ], 8, Br),
              c("button", {
                class: "preview-action-btn",
                onClick: mt,
                title: t(s)(t(r).DELETE)
              }, [
                g(t(Wi))
              ], 8, Wr)
            ]))
          ], 4)) : (y(), w("div", {
            key: 1,
            class: be(["image-upload-dropzone", { uploading: m.value }]),
            onClick: se[0] || (se[0] = (it) => !m.value && Q()),
            onDragover: se[1] || (se[1] = //@ts-ignore
            (...it) => t(Xn) && t(Xn)(...it)),
            onDrop: Ke,
            style: Ge({ height: `${e.previewHeight || 160}px` })
          }, [
            m.value ? (y(), w("div", Hr, [
              c("div", Yr, [
                c("div", {
                  class: "progress-fill",
                  style: Ge({ width: `${h.value}%` })
                }, null, 4)
              ]),
              c("span", jr, v(h.value) + "%", 1)
            ])) : (y(), w(ge, { key: 1 }, [
              g(t($o), {
                size: "32",
                "stroke-width": 1.2
              }),
              c("span", Xr, v(l.value), 1),
              c("span", Kr, v(d.value), 1)
            ], 64))
          ], 38)),
          c("input", {
            ref_key: "fileInputRef",
            ref: u,
            type: "file",
            accept: e.accept || "image/jpeg,image/png,image/gif,image/webp",
            style: { display: "none" },
            onChange: Se
          }, null, 40, qr)
        ], 64)) : ce("", !0),
        e.modelValue && (L.value || !e.uploadEnabled) ? (y(), w("div", {
          key: 4,
          class: "image-upload-preview url-preview",
          style: Ge({
            width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
            height: `${e.previewHeight || 120}px`,
            marginTop: "8px"
          })
        }, [
          t(jn)(e.modelValue) ? (y(), w("div", {
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
          }, null, 8, Zr)) : (y(), w("img", {
            key: 2,
            src: e.modelValue,
            alt: "preview",
            onError: at
          }, null, 40, Qr))
        ], 4)) : ce("", !0),
        g(ft, {
          visible: D.value,
          "onUpdate:visible": se[2] || (se[2] = (it) => D.value = it),
          header: t(s)(t(r).CROP_IMAGE),
          width: 600,
          footer: !1,
          class: "image-crop-modal",
          onClose: De
        }, {
          default: E(() => [
            c("div", Jr, [
              c("div", {
                ref_key: "cropAreaRef",
                ref: x,
                class: "image-crop-area"
              }, [
                N.value ? (y(), w("div", ec, [
                  se[4] || (se[4] = c("div", { class: "loading-spinner" }, null, -1)),
                  c("span", null, v(t(s)(t(r).IMAGE_LOADING)), 1)
                ])) : R.value ? (y(), oe(t(io), {
                  key: 1,
                  ref_key: "cropperRef",
                  ref: p,
                  src: R.value,
                  style: { width: "100%", height: "100%" },
                  "resize-image": {
                    adjustStencil: !1
                  },
                  "stencil-component": t(Nn),
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
                  zoom: U.value
                }, null, 8, ["src", "stencil-component", "stencil-props", "stencil-size", "zoom"])) : ce("", !0)
              ], 512)
            ]),
            c("div", tc, [
              g(Be, {
                variant: "outline",
                shape: "round",
                onClick: De
              }, {
                default: E(() => [
                  B(v(t(s)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              g(Be, {
                theme: "primary",
                shape: "round",
                disabled: N.value || !R.value,
                onClick: $e,
                class: "crop-confirm-btn"
              }, {
                default: E(() => [
                  c("span", ic, [
                    g(t(Po)),
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
}), Bi = /* @__PURE__ */ ci(nc, [["__scopeId", "data-v-8b84b2f0"]]), ac = { class: "custom-info-section" }, oc = {
  key: 2,
  class: "custom-info-count"
}, sc = {
  key: 0,
  class: "custom-info-container"
}, lc = { class: "custom-input-wrap" }, rc = { class: "custom-input-wrap custom-value-wrap" }, cc = {
  key: 1,
  class: "create-success-content"
}, uc = { class: "create-success-summary" }, dc = {
  key: 0,
  class: "create-success-section"
}, hc = { class: "create-success-section-title" }, vc = { class: "stream-info-items" }, mc = { class: "stream-info-item" }, fc = { class: "stream-info-label" }, gc = { class: "stream-info-value" }, pc = { class: "stream-info-item" }, bc = { class: "stream-info-label" }, yc = { class: "stream-info-value" }, Ec = { class: "dialog-footer" }, _c = /* @__PURE__ */ Ie({
  __name: "CreateLiveModal",
  props: {
    visible: { type: Boolean },
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: { default: void 0 }
  },
  emits: ["update:visible", "success"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), s = e, { extraFieldsSlot: o } = s, { createLive: a } = Pt(), l = n, d = F({
      get: () => s.visible,
      set: ($) => l("update:visible", $)
    }), u = rs.map(($) => ({
      value: $.value,
      label: i($.labelKey)
    })), p = ($) => J($), m = ($) => J($), h = ($) => {
      f.value.maxSeatCount = Number($) || 1;
    }, f = C(Kn()), b = C([]), L = C(!1), S = C(!1), T = C(!1), ee = C(""), G = C(""), q = C(null), j = C(""), te = C(null), le = C(!1), { loading: de, execute: ye } = kn({
      action: async () => {
        let $ = "";
        try {
          $ = await xa({
            handle: te.value,
            hasPendingFile: le.value,
            fallbackUrl: f.value.coverUrl,
            label: i(r.COVER_IMAGE)
          });
        } catch (De) {
          const je = De instanceof Vi ? De.message : `${i(r.COVER_PROCESSING_FAILED)}: ${De instanceof Error ? De.message : String(De) || i(r.UNKNOWN_ERROR)}`;
          X.error(je);
          return;
        }
        const Q = ds({
          formData: f.value,
          coverUrl: $,
          customInfos: b.value,
          useObsStreaming: T.value
        }), Se = Q.liveId, Re = Q.anchorId;
        await a(Q), q.value = null, j.value = "";
        let $e = !T.value;
        if (T.value) {
          const De = await Qs({
            liveId: Se,
            anchorId: Re,
            onStatusChange: (je) => {
              ee.value = je;
            },
            messages: {
              getStreamInfoFailed: i(r.FAILED_TO_GET_STREAM_INFO),
              importAccountFailed: i(r.FAILED_TO_IMPORT_ACCOUNT),
              addRobotFailed: i(r.FAILED_TO_ADD_ROBOT),
              pickSeatFailed: i(r.FAILED_TO_PICK_SEAT),
              setupFailed: i(r.OBS_SETUP_FAILED)
            }
          });
          q.value = De.streamInfo, j.value = De.streamInfoError, G.value = De.setupError, $e = De.configuredSuccessfully;
        }
        S.value = !0, X.success(T.value && $e ? i(r.LIVE_CREATED_SUCCESSFULLY_OBS) : i(r.LIVE_CREATED_SUCCESSFULLY));
      },
      errorMessage: i(r.REQUEST_FAILED)
    }), W = F(() => J(f.value.anchorId)), k = F(() => J(f.value.liveName));
    F(() => b.value.filter(($) => $.key.trim()).length);
    const O = F(() => {
      var $;
      return i((($ = cs(f.value.seatTemplate)) == null ? void 0 : $.descKey) || "");
    }), D = F(() => us(f.value.seatTemplate)), R = F(() => T.value ? ee.value === "error" ? `OBS 配置失败：${G.value}` : q.value ? "OBS 已配置完成，可直接复制下方推流信息。" : j.value ? `OBS 已配置完成，但推流信息生成失败：${j.value}` : "OBS 已配置完成。" : ""), M = F(() => ee.value === "error" || !!j.value), U = ($) => {
      le.value = !!$;
    }, N = async ($, Q) => {
      try {
        await La($), X.success(i("Copy Label Copied", { label: Q }));
      } catch (Se) {
        const Re = Se, $e = Re.ErrorInfo || (Re instanceof Error ? Re.message : String(Re)) || i(r.UNKNOWN_ERROR);
        X.error(i("Copy Failed With Error", { error: $e }));
      }
    }, x = () => {
      if (b.value.length >= Xe.maxCount) {
        X.error(i("Custom info max count exceeded", { max: Xe.maxCount }));
        return;
      }
      b.value.push({ key: "", value: "" });
    }, A = ($) => {
      b.value.splice($, 1);
    }, ae = () => {
      var $;
      f.value = Kn(), b.value = [], L.value = !1, S.value = !1, T.value = !1, ee.value = "", G.value = "", q.value = null, j.value = "", le.value = !1, ($ = te.value) == null || $.reset();
    }, ue = () => {
      ae(), l("update:visible", !1);
    }, he = async () => {
      if (!f.value.anchorId.trim()) {
        X.error(i(r.PLEASE_ENTER_ANCHOR_ID));
        return;
      }
      if (W.value > Wt) {
        X.error(i("Anchor ID cannot exceed bytes current", { max: Wt, current: W.value }));
        return;
      }
      if (k.value > bt) {
        X.error(i("Title cannot exceed 100 bytes current", { current: k.value }));
        return;
      }
      if (b.value.some(ti)) {
        X.error(i(r.CUSTOM_INFO_KEY_REQUIRED));
        return;
      }
      ee.value = "", await ye();
    }, Ae = () => {
      ae(), l("success"), l("update:visible", !1);
    };
    return ($, Q) => {
      const Se = ie("t-input"), Re = ie("t-form-item"), $e = ie("t-select"), De = ie("t-input-number"), je = ie("t-checkbox"), Ke = ie("t-button"), me = ie("t-form"), ct = ie("t-dialog");
      return y(), oe(ct, {
        visible: d.value,
        "onUpdate:visible": Q[8] || (Q[8] = (H) => d.value = H),
        header: S.value ? t(i)(t(r).CREATE_SUCCESS) : t(i)(t(r).CREATE_LIVE),
        width: 560,
        placement: "center",
        class: "create-live-modal",
        onClose: ue
      }, {
        footer: E(() => {
          var H, ve;
          return [
            c("div", Ec, [
              S.value ? (y(), oe(Ke, {
                key: 1,
                theme: "primary",
                shape: "round",
                onClick: Ae
              }, {
                default: E(() => [
                  B(v(t(i)(t(r).COMPLETE)), 1)
                ]),
                _: 1
              })) : (y(), w(ge, { key: 0 }, [
                g(Ke, {
                  variant: "outline",
                  shape: "round",
                  onClick: ue
                }, {
                  default: E(() => [
                    B(v(t(i)(t(r).CANCEL)), 1)
                  ]),
                  _: 1
                }),
                g(Ke, {
                  theme: "primary",
                  shape: "round",
                  loading: t(de),
                  disabled: t(de) || !f.value.anchorId.trim() || ((H = te.value) == null ? void 0 : H.isValidating) || ((ve = te.value) == null ? void 0 : ve.hasUrlError),
                  onClick: he
                }, {
                  default: E(() => [
                    B(v(t(de) ? t(i)(t(r).CREATING) : t(i)(t(r).CREATE)), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "disabled"])
              ], 64))
            ])
          ];
        }),
        default: E(() => [
          S.value ? (y(), w("div", cc, [
            c("div", uc, [
              Q[9] || (Q[9] = c("div", { class: "create-success-icon" }, [
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
              R.value ? (y(), w("p", {
                key: 0,
                class: be(["create-success-description", { "is-error": M.value }])
              }, v(R.value), 3)) : ce("", !0)
            ]),
            q.value ? (y(), w("div", dc, [
              c("div", hc, v(t(i)(t(r).STREAM_INFO)), 1),
              c("div", vc, [
                c("div", mc, [
                  c("div", fc, [
                    c("span", null, v(t(i)(t(r).SERVER_URL)), 1),
                    c("button", {
                      class: "action-link",
                      onClick: Q[6] || (Q[6] = (H) => N(q.value.serverUrl, t(i)(t(r).SERVER_URL)))
                    }, [
                      g(t(Dt)),
                      B(" " + v(t(i)(t(r).COPY)), 1)
                    ])
                  ]),
                  c("code", gc, v(q.value.serverUrl), 1)
                ]),
                c("div", pc, [
                  c("div", bc, [
                    c("span", null, v(t(i)(t(r).STREAM_KEY)), 1),
                    c("button", {
                      class: "action-link",
                      onClick: Q[7] || (Q[7] = (H) => N(q.value.streamKey, t(i)(t(r).STREAM_KEY)))
                    }, [
                      g(t(Dt)),
                      B(" " + v(t(i)(t(r).COPY)), 1)
                    ])
                  ]),
                  c("code", yc, v(q.value.streamKey), 1)
                ])
              ])
            ])) : ce("", !0)
          ])) : (y(), oe(me, {
            key: 0,
            class: "create-live-form",
            "label-width": t(oi)(100),
            colon: !1
          }, {
            default: E(() => [
              g(Re, {
                label: t(i)(t(r).LIVE_HOST),
                "required-mark": !0
              }, {
                default: E(() => [
                  g(Se, {
                    modelValue: f.value.anchorId,
                    "onUpdate:modelValue": Q[0] || (Q[0] = (H) => f.value.anchorId = H),
                    placeholder: t(i)(t(r).ENTER_ANCHOR_ID),
                    status: W.value > t(Wt) ? "error" : "default",
                    tips: W.value > t(Wt) ? t(i)("Anchor ID cannot exceed bytes", { max: t(Wt) }) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: be(["input-suffix-count", { "byte-overflow": W.value > t(Wt) }])
                      }, v(W.value) + "/" + v(t(Wt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(Re, {
                label: t(i)(t(r).LIVE_TITLE)
              }, {
                default: E(() => [
                  g(Se, {
                    modelValue: f.value.liveName,
                    "onUpdate:modelValue": Q[1] || (Q[1] = (H) => f.value.liveName = H),
                    placeholder: t(i)(t(r).ENTER_LIVE_TITLE),
                    status: k.value > t(bt) ? "error" : "default",
                    tips: k.value > t(bt) ? t(i)(t(r).TITLE_CANNOT_EXCEED_100_BYTES) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: be(["input-suffix-count", { "byte-overflow": k.value > t(bt) }])
                      }, v(k.value) + "/" + v(t(bt)), 3)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "status", "tips"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(Re, {
                label: t(i)(t(r).COVER_IMAGE)
              }, {
                default: E(() => [
                  g(Bi, {
                    ref_key: "coverUploadRef",
                    ref: te,
                    modelValue: f.value.coverUrl,
                    "onUpdate:modelValue": Q[2] || (Q[2] = (H) => f.value.coverUrl = H),
                    type: "cover",
                    "upload-enabled": e.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": D.value,
                    placeholder: t(i)(t(r).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": e.uploadEnabled,
                    onFileReady: U
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(Re, {
                label: t(i)(t(r).LAYOUT_TEMPLATE),
                "required-mark": !0,
                help: O.value
              }, {
                default: E(() => [
                  g($e, {
                    modelValue: f.value.seatTemplate,
                    "onUpdate:modelValue": Q[3] || (Q[3] = (H) => f.value.seatTemplate = H),
                    options: t(u),
                    style: { width: "100%" }
                  }, null, 8, ["modelValue", "options"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              f.value.seatTemplate === "AudioSalon" || f.value.seatTemplate === "Karaoke" ? (y(), oe(Re, {
                key: 0,
                label: t(i)(t(r).MAX_SEATS),
                help: t(i)(t(r).MAX_SEATS_HELP)
              }, {
                default: E(() => [
                  g(De, {
                    "model-value": f.value.maxSeatCount,
                    "onUpdate:modelValue": h,
                    min: 1,
                    max: 16,
                    status: f.value.maxSeatCount < 1 || f.value.maxSeatCount > 16 ? "error" : "default",
                    tips: f.value.maxSeatCount < 1 || f.value.maxSeatCount > 16 ? t(i)(t(r).SEAT_COUNT_RANGE_1_16) : "",
                    placeholder: t(i)(t(r).ENTER_MAX_SEAT_COUNT),
                    theme: "normal",
                    style: { width: "100%" }
                  }, null, 8, ["model-value", "status", "tips", "placeholder"])
                ]),
                _: 1
              }, 8, ["label", "help"])) : ce("", !0),
              g(Re, {
                label: t(i)(t(r).STREAMING_METHOD),
                help: t(i)(t(r).OBS_STREAMING_INFO_WILL_BE_DISPLAYED)
              }, {
                default: E(() => [
                  g(je, {
                    modelValue: T.value,
                    "onUpdate:modelValue": Q[4] || (Q[4] = (H) => T.value = H)
                  }, {
                    default: E(() => [
                      B(v(t(i)(t(r).USE_OBS_STREAMING)), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }, 8, ["label", "help"]),
              c("div", ac, [
                c("div", {
                  class: "custom-info-toggle",
                  onClick: Q[5] || (Q[5] = (H) => L.value = !L.value)
                }, [
                  L.value ? (y(), oe(t($i), {
                    key: 0,
                    size: "16"
                  })) : (y(), oe(t(Aa), {
                    key: 1,
                    size: "16"
                  })),
                  c("span", null, v(t(i)(t(r).CUSTOM_INFORMATION)), 1),
                  b.value.length > 0 ? (y(), w("span", oc, v(b.value.length), 1)) : ce("", !0)
                ]),
                L.value ? (y(), w("div", sc, [
                  (y(!0), w(ge, null, Ne(b.value, (H, ve) => (y(), w("div", {
                    key: ve,
                    class: "custom-info-row"
                  }, [
                    c("div", lc, [
                      g(Se, {
                        modelValue: H.key,
                        "onUpdate:modelValue": (Oe) => H.key = Oe,
                        placeholder: t(i)(t(r).ENTER_KEY),
                        status: p(H.key) > t(Xe).maxKeyBytes || t(ti)(H) ? "error" : "default",
                        tips: p(H.key) > t(Xe).maxKeyBytes ? t(i)("Key exceeds byte limit", { max: t(Xe).maxKeyBytes }) : t(ti)(H) ? t(i)(t(r).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    c("div", rc, [
                      g(Se, {
                        modelValue: H.value,
                        "onUpdate:modelValue": (Oe) => H.value = Oe,
                        placeholder: t(i)(t(r).ENTER_VALUE),
                        status: m(H.value) > t(Xe).maxValueBytes ? "error" : "default",
                        tips: m(H.value) > t(Xe).maxValueBytes ? t(i)(t(r).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    g(Ke, {
                      variant: "text",
                      shape: "circle",
                      onClick: (Oe) => A(ve)
                    }, {
                      default: E(() => [
                        g(t(Wi))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  b.value.length < t(Xe).maxCount ? (y(), oe(Ke, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: x,
                    theme: "primary"
                  }, {
                    icon: E(() => [
                      g(t(Mn))
                    ]),
                    default: E(() => [
                      B(" " + v(t(i)(t(r).ADD)), 1)
                    ]),
                    _: 1
                  })) : ce("", !0)
                ])) : ce("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"]))
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), wc = /* @__PURE__ */ ci(_c, [["__scopeId", "data-v-a06528b4"]]), Et = /* @__PURE__ */ Ie({
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
    return xo((s) => n.slotComponent ? (console.error("[LiveManager Slot] render failed:", s), i.value = !0, !1) : !0), (s, o) => e.slotComponent && !i.value ? (y(), oe(ai(e.slotComponent), No(wn({ key: 0 }, e.slotProps)), null, 16)) : ce("", !0);
  }
}), Cc = { class: "custom-info-section" }, Ic = {
  key: 2,
  class: "custom-info-count"
}, Ac = {
  key: 0,
  class: "custom-info-container"
}, Mc = { class: "custom-input-wrap" }, Tc = { class: "custom-input-wrap custom-value-wrap" }, Sc = { class: "dialog-footer" }, Rc = /* @__PURE__ */ Ie({
  __name: "EditLiveModal",
  props: {
    visible: { type: Boolean },
    room: {},
    uploadEnabled: { type: Boolean, default: !1 },
    extraFieldsSlot: {}
  },
  emits: ["update:visible", "success"],
  setup(e, { emit: n }) {
    const { t: i } = ke(), { fetchLiveDetail: s, updateLive: o } = Pt(), a = e, l = F(() => a.room ? "RoomId" in a.room && a.room.RoomId ? a.room.RoomId : "id" in a.room && a.room.id ? a.room.id : "" : ""), d = n, u = F({
      get: () => a.visible,
      set: (k) => d("update:visible", k)
    }), p = (k) => J(k), m = (k) => J(k), h = C(qn()), f = C([]), b = C(!1), L = C([]), S = C(Zn), T = C(null), ee = C(!1), { loading: G, execute: q } = kn({
      action: async (k) => {
        var D, R;
        const O = ((D = a.room) == null ? void 0 : D.RoomId) || ((R = a.room) == null ? void 0 : R.id) || "";
        return o({
          liveId: O,
          ...k
        });
      },
      successMessage: i(r.LIVE_INFO_UPDATED),
      errorMessage: i("Update failed"),
      onSuccess: () => {
        d("success", {
          liveName: h.value.liveName.trim(),
          coverUrl: h.value.coverUrl
        }), ye();
      }
    }), j = (k) => {
      ee.value = !!k;
    }, te = F(() => J(h.value.liveName));
    F(() => f.value.filter((k) => k.key.trim()).length), Me([() => {
      var k, O;
      return ((k = a.room) == null ? void 0 : k.RoomId) || ((O = a.room) == null ? void 0 : O.id);
    }, () => a.visible], async ([k, O]) => {
      const D = a.room;
      if (D && O) {
        const R = "RoomName" in D ? D.RoomName : D.liveName || "", M = "CoverURL" in D ? D.CoverURL : D.coverUrl || "", U = "RoomId" in D ? D.RoomId : D.id;
        h.value = {
          liveName: R || "",
          coverUrl: M || ""
        }, M ? S.value = await hs(M) : S.value = Zn;
        try {
          const N = await s(U), x = Qn(N == null ? void 0 : N.customInfo);
          f.value = x, b.value = x.length > 0, L.value = x.map((A) => A.key);
        } catch {
          const N = "CustomInfo" in D ? D.CustomInfo : D.customInfo, x = Qn(N);
          f.value = x, b.value = x.length > 0, L.value = x.map((A) => A.key);
        }
      }
    }, { immediate: !0 });
    const le = () => {
      if (f.value.length >= Xe.maxCount) {
        X.error(i("Custom info max count exceeded", { max: Xe.maxCount }));
        return;
      }
      f.value.push({ key: "", value: "" });
    }, de = (k) => {
      f.value.splice(k, 1);
    }, ye = () => {
      var k;
      f.value = [], b.value = !1, L.value = [], ee.value = !1, (k = T.value) == null || k.reset(), h.value = qn(), d("update:visible", !1);
    }, W = async () => {
      if (a.room) {
        if (!h.value.liveName.trim()) {
          X.error(i(r.PLEASE_ENTER_LIVE_TITLE));
          return;
        }
        if (te.value > bt) {
          X.error(i("Title cannot exceed 100 bytes current", { current: te.value }));
          return;
        }
        if (f.value.some(ti)) {
          X.error(i(r.CUSTOM_INFO_KEY_REQUIRED));
          return;
        }
        try {
          let k = "";
          try {
            k = await xa({
              handle: T.value,
              hasPendingFile: ee.value,
              fallbackUrl: h.value.coverUrl,
              label: i(r.COVER_IMAGE)
            });
          } catch (M) {
            const U = M instanceof Vi ? M.message : `${i(r.COVER_PROCESSING_FAILED)}: ${M instanceof Error ? M.message : String(M) || i(r.UNKNOWN_ERROR)}`;
            X.error(U);
            return;
          }
          const O = vs(f.value);
          if (O) {
            O.type === "key-too-long" ? X.error(i("Key {key} exceeds {max} bytes", { key: O.key, max: O.max })) : O.type === "value-too-long" ? X.error(i("Key {key} value exceeds 2KB", { key: O.key })) : O.type === "max-count" ? X.error(i("Custom info max count", { max: O.max })) : X.error(i(r.TOTAL_VALUE_SIZE_EXCEEDS_16KB));
            return;
          }
          const D = ms(f.value), R = fs(L.value, D);
          await q({
            roomName: h.value.liveName.trim(),
            coverUrl: k || void 0,
            customInfo: Object.keys(D).length > 0 ? D : void 0,
            deleteKeys: R.length > 0 ? R : void 0
          });
        } catch (k) {
          console.error("[EditLiveModal] Update failed:", k);
        }
      }
    };
    return (k, O) => {
      const D = ie("t-input"), R = ie("t-form-item"), M = ie("t-button"), U = ie("t-form"), N = ie("t-dialog");
      return y(), oe(N, {
        visible: u.value,
        "onUpdate:visible": O[3] || (O[3] = (x) => u.value = x),
        header: t(i)(t(r).EDIT_LIVE),
        width: 560,
        placement: "center",
        class: "edit-live-modal",
        onClose: ye
      }, {
        footer: E(() => {
          var x, A;
          return [
            c("div", Sc, [
              g(M, {
                variant: "outline",
                shape: "round",
                onClick: ye
              }, {
                default: E(() => [
                  B(v(t(i)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              g(M, {
                theme: "primary",
                shape: "round",
                loading: t(G),
                disabled: t(G) || !h.value.liveName.trim() || ((x = T.value) == null ? void 0 : x.isValidating) || ((A = T.value) == null ? void 0 : A.hasUrlError),
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
          g(U, {
            class: "edit-live-form",
            "label-width": t(oi)(100),
            colon: !1
          }, {
            default: E(() => [
              g(R, {
                label: t(i)(t(r).LIVE_ID)
              }, {
                default: E(() => [
                  g(D, {
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
                  g(D, {
                    modelValue: h.value.liveName,
                    "onUpdate:modelValue": O[0] || (O[0] = (x) => h.value.liveName = x),
                    placeholder: t(i)(t(r).ENTER_LIVE_TITLE),
                    status: te.value > t(bt) ? "error" : "default",
                    tips: te.value > t(bt) ? t(i)(t(r).TITLE_CANNOT_EXCEED_100_BYTES) : ""
                  }, {
                    suffix: E(() => [
                      c("span", {
                        class: be(["input-suffix-count", { "byte-overflow": te.value > t(bt) }])
                      }, v(te.value) + "/" + v(t(bt)), 3)
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
                  g(Bi, {
                    ref_key: "coverUploadRef",
                    ref: T,
                    modelValue: h.value.coverUrl,
                    "onUpdate:modelValue": O[1] || (O[1] = (x) => h.value.coverUrl = x),
                    type: "cover",
                    "upload-enabled": e.uploadEnabled,
                    "crop-enabled": !0,
                    "aspect-ratio": S.value,
                    placeholder: t(i)(t(r).CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
                    "preview-height": 140,
                    "max-bytes": 200,
                    "defer-upload": e.uploadEnabled,
                    onFileReady: j
                  }, null, 8, ["modelValue", "upload-enabled", "aspect-ratio", "placeholder", "defer-upload"])
                ]),
                _: 1
              }, 8, ["label"]),
              g(Et, {
                "slot-component": e.extraFieldsSlot,
                "slot-props": { mode: "edit", room: e.room, formData: { ...h.value }, customInfos: [...f.value] }
              }, null, 8, ["slot-component", "slot-props"]),
              c("div", Cc, [
                c("div", {
                  class: "custom-info-toggle",
                  onClick: O[2] || (O[2] = (x) => b.value = !b.value)
                }, [
                  b.value ? (y(), oe(t($i), {
                    key: 0,
                    size: "16"
                  })) : (y(), oe(t(Aa), {
                    key: 1,
                    size: "16"
                  })),
                  c("span", null, v(t(i)(t(r).CUSTOM_INFORMATION)), 1),
                  f.value.length > 0 ? (y(), w("span", Ic, v(f.value.length), 1)) : ce("", !0)
                ]),
                b.value ? (y(), w("div", Ac, [
                  (y(!0), w(ge, null, Ne(f.value, (x, A) => (y(), w("div", {
                    key: A,
                    class: "custom-info-row"
                  }, [
                    c("div", Mc, [
                      g(D, {
                        modelValue: x.key,
                        "onUpdate:modelValue": (ae) => x.key = ae,
                        placeholder: t(i)(t(r).ENTER_KEY),
                        status: p(x.key) > t(Xe).maxKeyBytes || t(ti)(x) ? "error" : "default",
                        tips: p(x.key) > t(Xe).maxKeyBytes ? t(i)("Key exceeds byte limit", { max: t(Xe).maxKeyBytes }) : t(ti)(x) ? t(i)(t(r).CUSTOM_INFO_KEY_REQUIRED) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    c("div", Tc, [
                      g(D, {
                        modelValue: x.value,
                        "onUpdate:modelValue": (ae) => x.value = ae,
                        placeholder: t(i)(t(r).ENTER_VALUE),
                        status: m(x.value) > t(Xe).maxValueBytes ? "error" : "default",
                        tips: m(x.value) > t(Xe).maxValueBytes ? t(i)(t(r).VALUE_EXCEEDS_2KB_LIMIT) : ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "status", "tips"])
                    ]),
                    g(M, {
                      variant: "text",
                      shape: "circle",
                      onClick: (ae) => de(A)
                    }, {
                      default: E(() => [
                        g(t(Wi))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]))), 128)),
                  f.value.length < t(Xe).maxCount ? (y(), oe(M, {
                    key: 0,
                    style: { width: "80px" },
                    variant: "text",
                    shape: "round",
                    onClick: le,
                    theme: "primary"
                  }, {
                    icon: E(() => [
                      g(t(Mn))
                    ]),
                    default: E(() => [
                      B(" " + v(t(i)(t(r).ADD)), 1)
                    ]),
                    _: 1
                  })) : ce("", !0)
                ])) : ce("", !0)
              ])
            ]),
            _: 1
          }, 8, ["label-width"])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Lc = /* @__PURE__ */ ci(Rc, [["__scopeId", "data-v-0a1ae480"]]), xc = {
  key: 0,
  class: "fixed-header-table__loading"
}, Nc = {
  key: 1,
  class: "fixed-header-table__empty"
}, Zi = /* @__PURE__ */ Ie({
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
    fitContentMaxRows: { type: Number, default: xs }
  },
  setup(e) {
    function n() {
      if (typeof document > "u") return 0;
      const R = document.createElement("div");
      R.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(R);
      const M = R.offsetWidth - R.clientWidth;
      return document.body.removeChild(R), M;
    }
    const i = e, s = C(null), o = C(null), a = C(null), l = C(null), d = C(null), u = C({});
    let p = {}, m = null, h = null, f = 0, b = null;
    const L = (R) => R.fitContent || i.fitContent && R.width === void 0, S = (R) => typeof R == "number" ? `${R}px` : R, T = (R) => {
      if (L(R)) {
        const M = u.value[R.key];
        if (M !== void 0) return `${M}px`;
        if (typeof R.minWidth == "number") return `${R.minWidth}px`;
      }
      return S(R.width);
    }, ee = F(() => {
      const R = {};
      for (const M of i.columns) R[M.key] = { width: T(M) };
      return R;
    }), G = F(() => {
      const R = {};
      for (const M of i.columns) {
        const U = { textAlign: M.align };
        M.ellipsis ? (U.whiteSpace = "nowrap", U.overflow = "hidden", U.textOverflow = "ellipsis") : L(M) && !M.flexible && (U.whiteSpace = "nowrap"), R[M.key] = U;
      }
      return R;
    }), q = F(() => Ns(i.columns, u.value, L) ?? {}), j = () => {
      var he, Ae;
      const R = i.columns.map(($, Q) => ({ column: $, index: Q })).filter(({ column: $ }) => L($));
      if (R.length === 0 || typeof document > "u") {
        p = {};
        return;
      }
      const M = ((he = a.value) == null ? void 0 : he.querySelectorAll("thead th")) || [], U = Array.from(((Ae = d.value) == null ? void 0 : Ae.querySelectorAll("tbody tr")) || []).slice(0, i.fitContentMaxRows), N = [], x = [];
      R.forEach(({ column: $, index: Q }) => {
        const Se = M[Q];
        Se && (N.push(Se), x.push($.key)), U.forEach((Re) => {
          const $e = Re.children[Q];
          $e && (N.push($e), x.push($.key));
        });
      });
      const A = ks(N), ae = {};
      A.forEach(($, Q) => {
        const Se = x[Q];
        (ae[Se] === void 0 || $ > ae[Se]) && (ae[Se] = $);
      });
      const ue = {};
      for (const { column: $ } of R)
        ae[$.key] !== void 0 && (ue[$.key] = Ds(
          ae[$.key],
          $.minWidth,
          $.maxWidth
        ));
      p = ue;
    }, te = () => {
      var N;
      const R = p;
      if (Object.keys(R).length === 0) {
        Object.keys(u.value).length > 0 && (u.value = {});
        return;
      }
      const M = ((N = l.value) == null ? void 0 : N.clientWidth) ?? 0, U = Os(
        i.columns,
        R,
        M,
        L
      );
      Us(u.value, U) || (u.value = U);
    }, le = () => {
      j(), te();
    }, de = () => {
      cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        Je(le);
      });
    }, ye = () => {
      cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        Je(te);
      });
    }, W = () => {
      m && m.disconnect(), m = new ResizeObserver(ye), s.value && m.observe(s.value);
    }, k = (R, M) => typeof i.rowKey == "function" ? i.rowKey(R, M) : R[i.rowKey] ?? M, O = (R, M) => typeof i.rowClassName == "function" ? i.rowClassName(R, M) : i.rowClassName, D = () => {
      var N;
      const R = s.value, M = (N = d.value) == null ? void 0 : N.parentElement;
      if (!R || !M) return;
      const U = M.scrollHeight > M.clientHeight ? n() : 0;
      R.style.setProperty("--scrollbar-width", `${U}px`);
    };
    return At(() => {
      Je(() => {
        le(), W(), D();
      }), h = new MutationObserver((R) => {
        for (const M of R)
          if (M.type === "attributes" && M.attributeName === "lang") {
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
    }), Me(() => i.data, () => {
      Je(D);
    }), Me(
      () => [i.columns, i.data, i.loading, i.fitContent, i.fitContentMaxRows],
      () => {
        Je(() => {
          le(), W();
        });
      },
      { deep: !0 }
    ), Ei(() => {
      cancelAnimationFrame(f), m == null || m.disconnect(), m = null, h == null || h.disconnect(), h = null, l.value && b && (l.value.removeEventListener("scroll", b), b = null);
    }), (R, M) => (y(), w("div", {
      ref_key: "rootRef",
      ref: s,
      class: be(["fixed-header-table", e.className])
    }, [
      c("div", {
        ref_key: "headerRef",
        ref: o,
        class: be(["fixed-header-table__header", e.headerClassName])
      }, [
        c("table", {
          ref_key: "headerTableRef",
          ref: a,
          class: be(["fixed-header-table__table", e.tableClassName]),
          style: Ge(q.value)
        }, [
          c("colgroup", null, [
            (y(!0), w(ge, null, Ne(e.columns, (U) => (y(), w("col", {
              key: U.key,
              style: Ge(ee.value[U.key])
            }, null, 4))), 128))
          ]),
          c("thead", null, [
            c("tr", null, [
              (y(!0), w(ge, null, Ne(e.columns, (U) => (y(), w("th", {
                key: U.key,
                class: be(U.className),
                style: Ge(G.value[U.key])
              }, [
                ht(R.$slots, `header-${U.key}`, { column: U }, () => [
                  B(v(U.title), 1)
                ])
              ], 6))), 128))
            ])
          ])
        ], 6)
      ], 2),
      c("div", {
        ref_key: "bodyRef",
        ref: l,
        class: be(["fixed-header-table__body", e.bodyClassName]),
        style: Ge(e.bodyStyle)
      }, [
        e.loading ? (y(), w("div", xc, [
          ht(R.$slots, "loading")
        ])) : e.data.length === 0 ? (y(), w("div", Nc, [
          ht(R.$slots, "empty")
        ])) : (y(), w("table", {
          key: 2,
          ref_key: "bodyTableRef",
          ref: d,
          class: be(["fixed-header-table__table", e.tableClassName]),
          style: Ge(q.value)
        }, [
          c("colgroup", null, [
            (y(!0), w(ge, null, Ne(e.columns, (U) => (y(), w("col", {
              key: U.key,
              style: Ge(ee.value[U.key])
            }, null, 4))), 128))
          ]),
          c("tbody", null, [
            (y(!0), w(ge, null, Ne(e.data, (U, N) => (y(), w("tr", {
              key: k(U, N),
              class: be(O(U, N))
            }, [
              (y(!0), w(ge, null, Ne(e.columns, (x) => (y(), w("td", {
                key: x.key,
                class: be(x.className),
                style: Ge(G.value[x.key])
              }, [
                ht(R.$slots, `cell-${x.key}`, {
                  row: U,
                  column: x,
                  index: N
                }, () => [
                  B(v(U[x.key] ?? ""), 1)
                ])
              ], 6))), 128))
            ], 2))), 128))
          ])
        ], 6))
      ], 6)
    ], 2));
  }
}), kc = ["title", "disabled", "onClick"], Dc = { class: "list-action-button__text" }, Oc = {
  key: 1,
  class: "list-action-button__caret",
  "aria-hidden": "true"
}, $t = /* @__PURE__ */ Ie({
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
      class: be(["list-action-buttons", e.className])
    }, [
      (y(!0), w(ge, null, Ne(e.actions, (o) => (y(), w("button", {
        key: o.key,
        type: "button",
        class: be(["list-action-button", { "list-action-button--danger": o.danger }]),
        title: o.title,
        disabled: o.disabled,
        onClick: (a) => n(o, a)
      }, [
        o.icon ? (y(), oe(ai(o.icon), {
          key: 0,
          class: "list-action-button__icon"
        })) : ce("", !0),
        c("span", Dc, v(o.label), 1),
        o.suffixCaret ? (y(), w("span", Oc)) : ce("", !0)
      ], 10, kc))), 128))
    ], 2));
  }
}), Uc = { class: "live-list-page" }, $c = { class: "live-list-header" }, Pc = { class: "live-list-title" }, Fc = { class: "header-actions" }, Vc = { class: "live-list-id-cell" }, zc = { class: "live-list-id-text" }, Gc = ["title"], Bc = { class: "live-list-cover-cell" }, Wc = ["src", "alt"], Hc = { class: "live-list-text" }, Yc = { class: "live-list-text" }, jc = { class: "live-list-loading-container" }, Xc = { class: "live-list-loading-text" }, Kc = { class: "live-list-empty-container" }, qc = { class: "live-list-empty-text" }, Zc = { class: "live-list-pagination" }, Qc = { class: "page-info" }, Jc = { class: "live-info-form" }, eu = { class: "live-info-section" }, tu = { class: "live-info-section-title" }, iu = { class: "live-info-card" }, nu = { class: "live-info-row" }, au = { class: "live-info-label" }, ou = { class: "live-info-value-area" }, su = { class: "live-info-value" }, lu = { class: "live-info-row" }, ru = { class: "live-info-label" }, cu = { class: "live-info-value-area" }, uu = { class: "live-info-value" }, du = { class: "live-info-row" }, hu = { class: "live-info-label" }, vu = { class: "live-info-value-area" }, mu = { class: "live-info-value" }, fu = { class: "live-info-row" }, gu = { class: "live-info-label" }, pu = { class: "live-info-value-area" }, bu = { class: "live-info-value live-info-value-url" }, yu = {
  key: 0,
  class: "live-info-section"
}, Eu = { class: "live-info-section-title" }, _u = { class: "live-info-card" }, wu = { class: "live-info-row" }, Cu = { class: "live-info-label" }, Iu = { class: "live-info-value-area" }, Au = { class: "live-info-value live-info-value-url" }, Mu = { class: "live-info-row" }, Tu = { class: "live-info-label" }, Su = { class: "live-info-value-area" }, Ru = { class: "live-info-value live-info-value-url" }, Lu = {
  key: 1,
  class: "live-info-row"
}, xu = {
  class: "live-info-label",
  style: { width: "auto" }
}, Nu = { class: "dialog-footer" }, gm = /* @__PURE__ */ Ie({
  __name: "live-list",
  setup(e) {
    var h;
    const { t: n } = ke(), i = _i(), { endLive: s } = Pt(), o = (h = Yi().components) == null ? void 0 : h.roomList, a = new gs({
      endLive: s,
      onEnterLive: (f) => {
        i.push({ path: `/live-control/${f}` });
      },
      t: n,
      toast: {
        success: (f) => X.success(f),
        error: (f) => X.error(f)
      }
    }), l = Oi(a.getState()), d = a.subscribe(() => {
      l.value = a.getState();
    }), u = Oi(!1);
    At(async () => {
      u.value = await Oa(), await a.init();
    }), Ei(() => {
      d(), a.dispose();
    });
    const p = F(() => ps({ hasExtraColumn: !!(o != null && o.tableExtraColumns) }).map((b) => ({
      ...b,
      title: b.i18nKey ? n(b.i18nKey) : ""
    }))), m = (f) => ys({
      live: f,
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
    return (f, b) => {
      var G, q, j;
      const L = ie("t-input"), S = ie("t-button"), T = ie("t-card"), ee = ie("t-dialog");
      return y(), w("div", Uc, [
        c("div", $c, [
          c("h1", Pc, v(t(n)(t(r).LIVE_LIST)), 1),
          g(Et, {
            "slot-component": (G = t(o)) == null ? void 0 : G.beforeToolbar,
            "slot-props": { lives: l.value.lives, loading: l.value.loading }
          }, null, 8, ["slot-component", "slot-props"]),
          c("div", Fc, [
            g(L, {
              "model-value": l.value.searchInput,
              placeholder: t(n)(t(r).ENTER_LIVE_ID_TO_SEARCH),
              class: "gift-search-input",
              style: { width: "220px" },
              clearable: "",
              status: t(Jn)(l.value.searchInput, t(bi)) ? "error" : "default",
              tips: t(Jn)(l.value.searchInput, t(bi)) ? t(n)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
              "onUpdate:modelValue": b[1] || (b[1] = (te) => t(a).setSearchInput(String(te ?? ""))),
              onEnter: b[2] || (b[2] = () => t(a).search()),
              onClear: b[3] || (b[3] = () => t(a).clearSearch())
            }, {
              suffixIcon: E(() => [
                g(t(In), {
                  style: { cursor: "pointer" },
                  onClick: b[0] || (b[0] = () => t(a).search())
                })
              ]),
              _: 1
            }, 8, ["model-value", "placeholder", "status", "tips"]),
            g(S, {
              variant: "outline",
              shape: "round",
              disabled: l.value.refreshing || l.value.loading,
              onClick: b[4] || (b[4] = () => t(a).refresh())
            }, {
              icon: E(() => [
                g(t(An), {
                  class: be({ spinning: l.value.refreshing })
                }, null, 8, ["class"])
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["disabled"]),
            g(S, {
              theme: "primary",
              shape: "round",
              onClick: b[5] || (b[5] = () => t(a).openCreateModal())
            }, {
              icon: E(() => [
                g(t(Mn))
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).CREATE_LIVE)), 1)
              ]),
              _: 1
            })
          ]),
          g(Et, {
            "slot-component": (q = t(o)) == null ? void 0 : q.afterToolbar,
            "slot-props": { lives: l.value.lives, loading: l.value.loading }
          }, null, 8, ["slot-component", "slot-props"])
        ]),
        g(T, { class: "live-list-card" }, {
          default: E(() => {
            var te;
            return [
              g(Zi, {
                columns: p.value,
                data: l.value.lives,
                "row-key": "liveId",
                loading: l.value.loading,
                "table-class-name": "live-list-table",
                "body-class-name": "live-list-content",
                "row-class-name": "live-list-row"
              }, _a({
                "cell-liveId": E(({ row: le }) => [
                  c("div", Vc, [
                    c("span", zc, v(le.liveId), 1),
                    g(t(Dt), {
                      class: "copy-icon",
                      onClick: (de) => t(a).copyText(le.liveId, t(n)(t(r).LIVE_ID))
                    }, null, 8, ["onClick"])
                  ])
                ]),
                "cell-liveName": E(({ row: le }) => [
                  c("span", {
                    class: "live-list-text",
                    title: le.liveName || "-"
                  }, v(le.liveName || "-"), 9, Gc)
                ]),
                "cell-coverUrl": E(({ row: le }) => [
                  c("div", Bc, [
                    c("img", {
                      src: le.coverUrl || t(Tn),
                      alt: le.liveName,
                      class: "live-list-cover-image"
                    }, null, 8, Wc)
                  ])
                ]),
                "cell-anchor": E(({ row: le }) => {
                  var de;
                  return [
                    c("span", Hc, v(((de = le.anchor) == null ? void 0 : de.userId) || "-"), 1)
                  ];
                }),
                "cell-createdAt": E(({ row: le }) => [
                  c("span", Yc, v(t(bs)(le.createdAt)), 1)
                ]),
                "cell-actions": E(({ row: le }) => {
                  var de;
                  return [
                    g($t, {
                      actions: m(le)
                    }, null, 8, ["actions"]),
                    g(Et, {
                      "slot-component": (de = t(o)) == null ? void 0 : de.rowActions,
                      "slot-props": { live: le }
                    }, null, 8, ["slot-component", "slot-props"])
                  ];
                }),
                loading: E(() => [
                  c("div", jc, [
                    b[20] || (b[20] = c("div", { class: "live-list-loading-spinner" }, null, -1)),
                    c("span", Xc, v(t(n)(t(r).LOADING)), 1)
                  ])
                ]),
                empty: E(() => [
                  c("div", Kc, [
                    c("span", qc, v(t(n)(t(r).NO_LIVE_DATA)), 1)
                  ])
                ]),
                _: 2
              }, [
                Ne(p.value, (le) => ({
                  name: `header-${le.key}`,
                  fn: E(() => [
                    B(v(le.title), 1)
                  ])
                })),
                (te = t(o)) != null && te.tableExtraColumns ? {
                  name: "cell-customer-extra",
                  fn: E(({ row: le }) => [
                    g(Et, {
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
        c("div", Zc, [
          g(S, {
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
          g(S, {
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
          c("span", Qc, v(t(n)(t(r).PAGE, { page: l.value.currentPage })), 1),
          g(S, {
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
        g(wc, {
          visible: l.value.isCreateModalVisible,
          "upload-enabled": u.value,
          "onUpdate:visible": b[9] || (b[9] = (te) => te ? t(a).openCreateModal() : t(a).closeCreateModal()),
          onSuccess: b[10] || (b[10] = () => t(a).onLiveCreated())
        }, null, 8, ["visible", "upload-enabled"]),
        g(Lc, {
          visible: l.value.isEditModalVisible,
          room: l.value.editingLive,
          "upload-enabled": u.value,
          "extra-fields-slot": (j = t(o)) == null ? void 0 : j.roomFormExtraFields,
          "onUpdate:visible": b[11] || (b[11] = (te) => {
            te || t(a).closeEditModal();
          }),
          onSuccess: b[12] || (b[12] = (te) => t(a).onLiveEdited(te))
        }, null, 8, ["visible", "room", "upload-enabled", "extra-fields-slot"]),
        g(ee, {
          visible: l.value.confirmDialog.visible,
          header: l.value.confirmDialog.title,
          "confirm-btn": { content: t(n)(t(r).CONFIRM), theme: "primary", shape: "round" },
          "cancel-btn": { shape: "round" },
          "onUpdate:visible": b[13] || (b[13] = (te) => {
            te || t(a).cancelDelete();
          }),
          onConfirm: b[14] || (b[14] = () => t(a).confirmDelete())
        }, {
          default: E(() => [
            c("p", null, v(l.value.confirmDialog.content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        g(ee, {
          visible: l.value.obsModal.visible && !!l.value.obsModal.live,
          header: t(n)(t(r).LIVE_INFORMATION),
          width: 560,
          class: "live-info-modal",
          "onUpdate:visible": b[19] || (b[19] = (te) => {
            te || t(a).closeDetail();
          })
        }, {
          footer: E(() => [
            c("div", Nu, [
              g(S, {
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
            var te, le, de, ye, W, k, O;
            return [
              c("div", Jc, [
                c("div", eu, [
                  c("div", tu, v(t(n)(t(r).BASIC_INFORMATION)), 1),
                  c("div", iu, [
                    c("div", nu, [
                      c("span", au, v(t(n)(t(r).ANCHOR_ID)), 1),
                      c("div", ou, [
                        c("span", su, v(((le = (te = l.value.obsModal.live) == null ? void 0 : te.anchor) == null ? void 0 : le.userId) || "-"), 1),
                        (ye = (de = l.value.obsModal.live) == null ? void 0 : de.anchor) != null && ye.userId ? (y(), w("button", {
                          key: 0,
                          class: "live-info-copy-btn",
                          onClick: b[15] || (b[15] = (D) => t(a).copyText(l.value.obsModal.live.anchor.userId, t(n)(t(r).LIVE_HOST)))
                        }, [
                          g(t(Dt))
                        ])) : ce("", !0)
                      ])
                    ]),
                    c("div", lu, [
                      c("span", ru, v(t(n)(t(r).LIVE_ID)), 1),
                      c("div", cu, [
                        c("span", uu, v(((W = l.value.obsModal.live) == null ? void 0 : W.liveId) || "-"), 1)
                      ])
                    ]),
                    c("div", du, [
                      c("span", hu, v(t(n)(t(r).LIVE_TITLE)), 1),
                      c("div", vu, [
                        c("span", mu, v(((k = l.value.obsModal.live) == null ? void 0 : k.liveName) || "-"), 1)
                      ])
                    ]),
                    c("div", fu, [
                      c("span", gu, v(t(n)(t(r).LIVE_COVER)), 1),
                      c("div", pu, [
                        c("span", bu, v(((O = l.value.obsModal.live) == null ? void 0 : O.coverUrl) || "-"), 1)
                      ])
                    ])
                  ])
                ]),
                l.value.obsModal.streamInfo || l.value.obsModal.actionLoading === "stream" ? (y(), w("div", yu, [
                  c("div", Eu, v(t(n)(t(r).PUSH_STREAM_INFO)), 1),
                  c("div", _u, [
                    l.value.obsModal.streamInfo ? (y(), w(ge, { key: 0 }, [
                      c("div", wu, [
                        c("span", Cu, v(t(n)(t(r).SERVER_URL)), 1),
                        c("div", Iu, [
                          c("span", Au, v(l.value.obsModal.streamInfo.serverUrl), 1),
                          c("button", {
                            class: "live-info-copy-btn",
                            onClick: b[16] || (b[16] = (D) => t(a).copyText(l.value.obsModal.streamInfo.serverUrl, t(n)(t(r).SERVER_URL)))
                          }, [
                            g(t(Dt))
                          ])
                        ])
                      ]),
                      c("div", Mu, [
                        c("span", Tu, v(t(n)(t(r).STREAM_KEY)), 1),
                        c("div", Su, [
                          c("span", Ru, v(l.value.obsModal.streamInfo.streamKey), 1),
                          c("button", {
                            class: "live-info-copy-btn",
                            onClick: b[17] || (b[17] = (D) => t(a).copyText(l.value.obsModal.streamInfo.streamKey, t(n)(t(r).STREAM_KEY)))
                          }, [
                            g(t(Dt))
                          ])
                        ])
                      ])
                    ], 64)) : (y(), w("div", Lu, [
                      c("span", xu, v(t(n)(t(r).GETTING_STREAM_INFO)), 1)
                    ]))
                  ])
                ])) : ce("", !0)
              ])
            ];
          }),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
}), ku = { class: "toast-area" }, Du = {
  key: 0,
  class: "status-success"
}, Ou = {
  key: 1,
  class: "status-error"
}, Uu = /* @__PURE__ */ Ie({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(e) {
    return (n, i) => (y(), w("div", ku, [
      e.successMsg ? (y(), w("div", Du, v(e.successMsg), 1)) : ce("", !0),
      e.errorMsg ? (y(), w("div", Ou, v(e.errorMsg), 1)) : ce("", !0)
    ]));
  }
}), $u = { class: "live-control-navbar" }, Pu = { class: "nav-left" }, Fu = ["viewBox", "stroke-width", "stroke-linecap"], Vu = ["d"], zu = { class: "nav-right" }, Gu = /* @__PURE__ */ Ie({
  __name: "NavBar",
  props: {
    handleLeaveLive: { type: Function },
    handleViolationWarning: { type: Function },
    handleForceStopLive: { type: Function }
  },
  setup(e) {
    const { t: n } = ke();
    return (i, s) => {
      const o = ie("t-button");
      return y(), w("header", $u, [
        c("div", Pu, [
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
                }, null, 8, Vu)
              ], 8, Fu))
            ]),
            _: 1
          }, 8, ["onClick", "title"]),
          s[0] || (s[0] = c("div", { class: "divider" }, null, -1)),
          c("h1", null, v(t(n)(t(r).LIVE_DETAILS)), 1)
        ]),
        c("div", zu, [
          g(o, {
            class: "action-btn warn",
            variant: "text",
            onClick: e.handleViolationWarning
          }, {
            icon: E(() => [
              g(t(Ca))
            ]),
            default: E(() => [
              B(" " + v(t(n)(t(r).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }, 8, ["onClick"]),
          g(o, {
            variant: "text",
            theme: "danger",
            onClick: e.handleForceStopLive
          }, {
            icon: E(() => [
              g(t(Ia))
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
}), Bu = { class: "video-monitor-area" }, Wu = { class: "live-header-external" }, Hu = { class: "live-title-text" }, Yu = { class: "video-stage" }, ju = {
  key: 1,
  class: "video-blur-bg-placeholder"
}, Xu = { class: "player-container" }, Ku = {
  key: 0,
  class: "mock-cover-preview"
}, qu = ["src"], Zu = {
  key: 2,
  class: "live-state-overlay live-state-overlay--ended"
}, Qu = { class: "live-state-overlay-content" }, Ju = { class: "live-state-overlay-title" }, ed = /* @__PURE__ */ Ie({
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
      return y(), w("section", Bu, [
        g(Et, {
          "slot-component": (o = e.liveControlSlots) == null ? void 0 : o.beforeLiveInfo,
          "slot-props": { liveInfo: e.liveInfo }
        }, null, 8, ["slot-component", "slot-props"]),
        c("div", Wu, [
          g(ji, {
            "class-name": "anchor-avatar",
            src: e.liveAnchorAvatar,
            name: e.liveAnchorName,
            title: e.liveAnchorName
          }, null, 8, ["src", "name", "title"]),
          c("span", Hu, v(e.liveEndedOverlayVisible ? t(n)(t(r).LIVE_ENDED) : ((a = e.currentLive) == null ? void 0 : a.liveName) || ((l = e.liveInfo) == null ? void 0 : l.liveName) || t(n)(t(r).LOADING)), 1)
        ]),
        c("div", Yu, [
          (d = e.liveInfo) != null && d.coverUrl ? (y(), w("div", {
            key: 0,
            class: "video-blur-bg",
            style: Ge({ backgroundImage: `url(${e.liveInfo.coverUrl})` })
          }, null, 4)) : (y(), w("div", ju)),
          c("div", Xu, [
            e.isMockMode ? (y(), w(ge, { key: 0 }, [
              (u = e.liveInfo) != null && u.coverUrl ? (y(), w("div", Ku, [
                c("img", {
                  src: e.liveInfo.coverUrl,
                  alt: "cover",
                  class: "mock-cover-img"
                }, null, 8, qu)
              ])) : ce("", !0)
            ], 64)) : e.sdkReady ? (y(), oe(t(nl), { key: 1 })) : ce("", !0),
            e.liveEndedOverlayVisible ? (y(), w("div", Zu, [
              c("div", Qu, [
                c("div", Ju, v(t(n)(t(r).LIVE_ENDED)), 1),
                c("button", {
                  class: "live-state-overlay-btn",
                  onClick: s[0] || (s[0] = //@ts-ignore
                  (...p) => e.handleLeaveLive && e.handleLeaveLive(...p))
                }, v(t(n)(t(r).RETURN_TO_LIVE_LIST)), 1)
              ])
            ])) : ce("", !0)
          ])
        ])
      ]);
    };
  }
}), td = { class: "message-list-scroll-area barrage-list-wrapper" }, id = ["placeholder", "disabled"], nd = ["disabled"], ad = 12 * 1024, od = /* @__PURE__ */ Ie({
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
    const { t: n } = ke(), i = e, { loginUserInfo: s } = $a(), { currentLive: o } = Pt(), { audienceList: a, disableSendMessage: l } = Pa(), d = F(() => i.currentLive || o.value), u = (O) => new TextEncoder().encode(O).length, p = C(!1), m = C({ top: 0, left: 0 }), h = C(null), f = C(""), b = C(!1), L = C(null), S = C(null), T = C(null), ee = F(() => b.value || !i.liveId || !f.value.trim()), G = (O) => a.value.find((D) => D.userId === O), q = (O) => {
      const D = G(O);
      if (D)
        return D.isMessageDisabled === !0;
      const R = i.mutedList.find((M) => M.userId === O);
      return R ? R.endTime > Date.now() / 1e3 : !1;
    }, j = (O) => {
      const D = i.bannedList.find((R) => R.userId === O);
      return D ? D.endTime > Date.now() / 1e3 : !1;
    }, te = (O, D) => {
      var x, A, ae, ue, he;
      if (O.preventDefault(), O.stopPropagation(), D.sender.userId === ((x = s.value) == null ? void 0 : x.userId) || D.sender.userId === ((ae = (A = d.value) == null ? void 0 : A.liveOwner) == null ? void 0 : ae.userId) || D.sender.userId === xi(((he = (ue = d.value) == null ? void 0 : ue.liveOwner) == null ? void 0 : he.userId) || ""))
        return;
      const R = O.target.closest(".message-item");
      if (!R) return;
      const M = R.getBoundingClientRect(), U = M.bottom + 4, N = Math.min(
        M.left,
        window.innerWidth - 150
      );
      m.value = { top: U, left: Math.max(0, N) }, h.value = D, p.value = !0;
    }, le = () => {
      var O, D;
      if (h.value && i.onBanUser) {
        const R = h.value.sender.userId;
        if (R !== xi(((D = (O = d.value) == null ? void 0 : O.liveOwner) == null ? void 0 : D.userId) || "")) {
          const M = h.value.sender.userName || h.value.sender.nameCard || h.value.sender.userId, U = j(R);
          i.onBanUser(R, M, U);
        }
      }
      p.value = !1, h.value = null;
    }, de = async () => {
      var M, U;
      if (!h.value) return;
      const O = h.value.sender.userId;
      if (O === xi(((U = (M = d.value) == null ? void 0 : M.liveOwner) == null ? void 0 : U.userId) || "")) {
        p.value = !1, h.value = null;
        return;
      }
      const D = h.value.sender.userName || h.value.sender.nameCard || h.value.sender.userId, R = q(O);
      try {
        await l({ userId: O, isDisable: !R }), console.log(R ? "解除禁言成功" : "禁言成功");
      } catch (N) {
        console.error("SDK 禁言失败，使用备用方法:", N), i.onMuteUser && i.onMuteUser(O, D, R);
      }
      p.value = !1, h.value = null;
    }, ye = async () => {
      if (b.value) return;
      const O = f.value.trim();
      if (!O) {
        X.warning(n(r.MESSAGE_CONTENT_REQUIRED));
        return;
      }
      if (!i.liveId) {
        X.error(n(r.LIVE_NOT_FOUND));
        return;
      }
      if (u(O) > ad) {
        X.error(n("Message Content Too Long", { max: "12KB" }));
        return;
      }
      b.value = !0;
      try {
        const D = await Js(i.liveId, O);
        if ((D == null ? void 0 : D.ErrorCode) !== void 0 && D.ErrorCode !== 0)
          throw new Error(D.ErrorInfo || n(r.SEND_FAILED));
        if (D != null && D.ActionStatus && D.ActionStatus !== "OK")
          throw new Error(D.ErrorInfo || n(r.SEND_FAILED));
        f.value = "", X.success(n(r.MESSAGE_SENT));
      } catch (D) {
        const R = (D == null ? void 0 : D.ErrorInfo) || (D == null ? void 0 : D.message) || n(r.UNKNOWN_HOST);
        X.error(n("Send Failed With Error", { error: R }));
      } finally {
        b.value = !1;
      }
    }, W = Ie({
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
      setup(O) {
        var x, A;
        const D = O.message.sender.nameCard || O.message.sender.userName || O.message.sender.userId, R = O.message.sender.userId === ((A = (x = d.value) == null ? void 0 : x.liveOwner) == null ? void 0 : A.userId), M = O.message.messageType === 0 ? O.message.textContent : O.message.data || "", U = Es(M), N = () => U.map((ae, ue) => ae.type === "emoji" ? Zt("img", {
          key: ue,
          class: "message-emoji",
          src: ae.src,
          alt: ae.key
        }) : Zt("span", { key: ue, class: "message-text" }, ae.text));
        return () => Zt("div", {
          class: ["message-item", R ? "host" : ""],
          style: O.style,
          onContextMenu: (ae) => te(ae, O.message)
        }, [
          // 主播标识
          R ? Zt("span", { class: "message-badge" }, n(r.HOST)) : null,
          // 昵称
          Zt("span", { class: "message-username", onClick: (ae) => te(ae, O.message) }, `${D}: `),
          // 消息内容
          Zt("span", { class: "message-content" }, N())
        ]);
      }
    }), k = (O) => {
      S.value && S.value.contains(O.target) || (p.value = !1, h.value = null);
    };
    return Me(p, (O) => {
      O ? document.addEventListener("mousedown", k) : document.removeEventListener("mousedown", k);
    }), tt(() => {
      document.removeEventListener("mousedown", k);
    }), (O, D) => (y(), w("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: L
    }, [
      c("div", td, [
        g(t(sl), {
          ref_key: "barrageListRef",
          ref: T,
          Message: t(W)
        }, null, 8, ["Message"])
      ]),
      c("form", {
        class: "admin-message-composer",
        onSubmit: gi(ye, ["prevent"])
      }, [
        pi(c("input", {
          "onUpdate:modelValue": D[0] || (D[0] = (R) => f.value = R),
          class: "admin-message-input",
          placeholder: t(n)(t(r).ENTER_MESSAGE_TO_SEND_AS_ADMIN),
          disabled: b.value || !i.liveId
        }, null, 8, id), [
          [ko, f.value]
        ]),
        c("button", {
          type: "submit",
          class: "admin-message-send-btn",
          disabled: ee.value
        }, v(b.value ? t(n)(t(r).SENDING) : t(n)(t(r).SEND_MESSAGE)), 9, nd)
      ], 32),
      (y(), oe(Cn, { to: "body" }, [
        p.value && h.value ? (y(), w("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: S,
          class: "user-action-dropdown",
          style: Ge({
            position: "fixed",
            top: `${m.value.top}px`,
            left: `${m.value.left}px`
          })
        }, [
          c("button", {
            class: "dropdown-item",
            onClick: de
          }, [
            q(h.value.sender.userId) ? (y(), oe(t(Hi), { key: 0 })) : (y(), oe(t(Ma), { key: 1 })),
            c("span", null, v(q(h.value.sender.userId) ? t(n)(t(r).UNMUTE) : t(n)(t(r).MUTE)), 1)
          ]),
          c("button", {
            class: "dropdown-item danger",
            onClick: le
          }, [
            j(h.value.sender.userId) ? (y(), oe(t(Ta), { key: 0 })) : (y(), oe(t(Sa), { key: 1 })),
            c("span", null, v(j(h.value.sender.userId) ? t(n)(t(r).UNBAN) : t(n)(t(r).BAN)), 1)
          ])
        ], 4)) : ce("", !0)
      ]))
    ], 512));
  }
}), sd = { class: "left-interaction-card" }, ld = { class: "interaction-tabs-header" }, rd = { class: "all-mute-control-row" }, cd = { class: "all-mute-label" }, ud = { class: "interaction-body" }, dd = { class: "chat-stream-sidebar" }, hd = {
  key: 0,
  class: "all-mute-banner"
}, vd = { class: "audience-tab-wrapper" }, md = { class: "audience-list-area" }, fd = {
  key: 0,
  class: "audience-me-tag"
}, gd = {
  key: 1,
  class: "audience-row-actions"
}, pd = {
  key: 0,
  class: "audience-muted-badge"
}, bd = ["title", "onClick"], yd = { class: "audience-bottom-actions" }, Ed = /* @__PURE__ */ Ie({
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
    const { t: i } = ke(), s = e, o = n, a = F({
      get: () => s.activeTab,
      set: (l) => o("update:activeTab", l)
    });
    return (l, d) => {
      const u = ie("t-tab-panel"), p = ie("t-tabs"), m = ie("t-switch");
      return y(), w("div", sd, [
        c("div", ld, [
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
          c("div", rd, [
            g(m, {
              value: e.isAllMuted,
              disabled: e.allMuteLoading,
              onChange: e.handleAllMuteSwitchChange
            }, null, 8, ["value", "disabled", "onChange"]),
            c("span", cd, v(t(i)(t(r).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        c("div", ud, [
          pi(c("div", dd, [
            e.isAllMuted ? (y(), w("div", hd, [
              d[3] || (d[3] = c("span", { class: "all-mute-banner-icon" }, "!", -1)),
              c("span", null, v(t(i)(t(r).ALL_MEMBER_MUTE_ENABLED_BANNER)), 1)
            ])) : ce("", !0),
            g(od, {
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
          pi(c("div", vd, [
            c("div", md, [
              g(t(al), { height: "99%" }, {
                "audience-mark": E(({ audience: h }) => [
                  h.userId === e.currentUserId ? (y(), w("span", fd, v(t(i)(t(r).ME)), 1)) : h.userRole !== 0 && h.userId !== t(xi)(e.anchorUserId) ? (y(), w("div", gd, [
                    e.isUserMuted(h.userId) ? (y(), w("span", pd, v(t(i)(t(r).MUTED)), 1)) : ce("", !0),
                    c("button", {
                      class: "audience-more-btn",
                      title: t(i)(t(r).MORE_ACTIONS),
                      onClick: gi((f) => e.handleOpenAudienceDropdown(f, h.userId, h.userName || h.userId, e.isUserMuted(h.userId)), ["stop"])
                    }, [
                      g(t(zo))
                    ], 8, bd)
                  ])) : ce("", !0)
                ]),
                _: 1
              })
            ]),
            c("div", yd, [
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
}), _d = { class: "left-content-area" }, wd = /* @__PURE__ */ Ie({
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
    const i = e, s = n, { login: o, loginUserInfo: a } = $a(), { joinLive: l, leaveLive: d, subscribeEvent: u, unsubscribeEvent: p, LiveListEvent: m } = ol(), h = C(!1), f = C(""), b = C(!1), L = C(""), S = F(
      () => {
        var q;
        return i.currentUserId || L.value || Ua() || ((q = a.value) == null ? void 0 : q.userId) || "";
      }
    ), T = () => {
      s("live-ended");
    }, ee = async () => {
      var q;
      if (i.isMockMode) {
        h.value = !0;
        return;
      }
      if (!h.value)
        try {
          const j = await el();
          if (!j || j.sdkAppId === 0 || !j.userId || !j.userSig) return;
          L.value = j.userId, await o({ sdkAppId: j.sdkAppId, userId: j.userId, userSig: j.userSig }), h.value = !0;
        } catch (j) {
          if ((j == null ? void 0 : j.code) === 2025 || (q = j == null ? void 0 : j.message) != null && q.includes("重复登录")) {
            h.value = !0;
            return;
          }
          console.error("[LiveControlLeftPanel] TUIKit login failed:", j);
        }
    }, G = async () => {
      if (!(!i.liveId || !i.currentLive || !h.value || f.value === i.liveId))
        try {
          await l({ liveId: i.liveId }), f.value = i.liveId, !b.value && u && (m != null && m.onLiveEnded) && (u(m.onLiveEnded, T), b.value = !0), s("joined-live");
        } catch (q) {
          console.error("[LiveControlLeftPanel] joinLive failed:", q);
        }
    };
    return Me(
      () => [i.liveId, i.currentLive, S.value],
      async () => {
        !i.liveId || !i.currentLive || (await ee(), await G());
      },
      { immediate: !0 }
    ), Me(
      () => i.liveId,
      () => {
        f.value = "";
      }
    ), tt(() => {
      var q, j;
      b.value && p && (m != null && m.onLiveEnded) && (p(m.onLiveEnded, T), b.value = !1), f.value && ((j = d == null ? void 0 : (q = d()).catch) == null || j.call(q, (te) => {
        console.error("[LiveControlLeftPanel] leaveLive on unmount failed:", te);
      }));
    }), (q, j) => (y(), w("div", _d, [
      g(ed, {
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
      g(Ed, {
        "live-id": e.liveId,
        "active-tab": e.activeTab,
        "is-all-muted": e.isAllMuted,
        "all-mute-loading": e.allMuteLoading,
        "muted-list": e.mutedList,
        "banned-list": e.bannedList,
        "current-user-id": S.value,
        "anchor-user-id": e.anchorUserId,
        "current-live": e.currentLive,
        "handle-all-mute-switch-change": e.handleAllMuteSwitchChange,
        "handle-mute-audience": e.handleMuteAudience,
        "handle-ban-audience": e.handleBanAudience,
        "open-muted-modal": e.openMutedModal,
        "open-banned-modal": e.openBannedModal,
        "is-user-muted": e.isUserMuted,
        "handle-open-audience-dropdown": e.handleOpenAudienceDropdown,
        "onUpdate:activeTab": j[0] || (j[0] = (te) => s("update:activeTab", te))
      }, null, 8, ["live-id", "active-tab", "is-all-muted", "all-mute-loading", "muted-list", "banned-list", "current-user-id", "anchor-user-id", "current-live", "handle-all-mute-switch-change", "handle-mute-audience", "handle-ban-audience", "open-muted-modal", "open-banned-modal", "is-user-muted", "handle-open-audience-dropdown"])
    ]));
  }
}), Cd = { class: "sidebar-stats-card" }, Id = { class: "stats-card-header" }, Ad = { class: "stats-header-left" }, Md = { class: "live-status-tag" }, Td = { class: "live-duration-text" }, Sd = { class: "update-time" }, Rd = { class: "stat-bar-item" }, Ld = { class: "stat-label" }, xd = { class: "stat-value" }, Nd = { class: "stat-bar-item" }, kd = { class: "stat-label" }, Dd = { class: "stat-value" }, Od = { class: "stat-bar-item" }, Ud = { class: "stat-label" }, $d = { class: "stat-value" }, Pd = { class: "stat-bar-item" }, Fd = { class: "stat-label" }, Vd = { class: "stat-value" }, zd = { class: "stat-bar-item" }, Gd = { class: "stat-label" }, Bd = { class: "stat-value" }, Wd = { class: "stat-bar-item" }, Hd = { class: "stat-label" }, Yd = { class: "stat-value" }, jd = { class: "stat-bar-item" }, Xd = { class: "stat-label" }, Kd = { class: "stat-value" }, qd = /* @__PURE__ */ Ie({
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
    const l = (m, h, f) => {
      const b = Array.from({ length: h }, () => 0);
      return m.forEach((L, S) => {
        const T = S % h;
        b[T] = Math.max(b[T], L);
      }), b.reduce((L, S) => L + S, 0) + f * (h - 1);
    }, d = (m) => {
      const h = Array.from(m.querySelectorAll(":scope > .stat-bar-item")), f = document.createElement("div");
      f.style.position = "absolute", f.style.left = "-99999px", f.style.top = "0", f.style.visibility = "hidden", f.style.pointerEvents = "none", f.style.width = "max-content", document.body.appendChild(f);
      const b = h.map((L) => {
        const S = L.cloneNode(!0);
        return S.style.width = "max-content", S.style.maxWidth = "none", f.appendChild(S), Math.ceil(S.getBoundingClientRect().width);
      });
      return f.remove(), b;
    }, u = () => {
      const m = i.value;
      if (!m || m.clientWidth <= 0) return;
      const h = d(m);
      if (!h.length) return;
      const f = parseFloat(getComputedStyle(m).columnGap) || 0, b = m.clientWidth, L = [7, 4, 3, 2, 1].find((S) => l(h, S, f) <= b + 1) || 1;
      m.style.setProperty("--stats-columns", String(L));
    }, p = () => {
      a !== null && cancelAnimationFrame(a), a = requestAnimationFrame(() => {
        a = null, u();
      });
    };
    return At(() => {
      Je(() => {
        const m = i.value;
        m && (s = new ResizeObserver(p), s.observe(m), o = new MutationObserver(p), o.observe(m, { childList: !0, subtree: !0, characterData: !0 }), p());
      });
    }), tt(() => {
      s == null || s.disconnect(), o == null || o.disconnect(), a !== null && (cancelAnimationFrame(a), a = null);
    }), (m, h) => (y(), w("div", Cd, [
      c("div", Id, [
        c("div", Ad, [
          c("h3", null, v(t(n)(t(r).LIVE_DATA_CONTROL)), 1),
          c("span", Md, [
            h[0] || (h[0] = c("span", { class: "live-status-dot" }, null, -1)),
            B(" " + v(t(n)(t(r).LIVE_NOW)) + " ", 1),
            c("span", Td, v(e.formatDuration(e.liveDuration)), 1)
          ])
        ]),
        c("span", Sd, v(t(n)(t(r).UPDATED_AT, { time: e.updateTimeText })), 1)
      ]),
      c("div", {
        ref_key: "statsBarRef",
        ref: i,
        class: "stats-bar-design"
      }, [
        c("div", Rd, [
          c("div", Ld, [
            B(v(t(n)(t(r).CURRENT_VIEWERS)) + " ", 1),
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
          c("div", xd, v(e.formatNumber(e.stats.onlineCount)), 1)
        ]),
        c("div", Nd, [
          c("div", kd, [
            B(v(t(n)(t(r).COMMENT_COUNT)) + " ", 1),
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
          c("div", Dd, v(e.stats.totalMsgCount.toLocaleString()), 1)
        ]),
        c("div", Od, [
          c("div", Ud, [
            B(v(t(n)(t(r).COMMENT_USERS)) + " ", 1),
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
          c("div", $d, v(e.stats.totalUniqueCommenters || 0), 1)
        ]),
        c("div", Pd, [
          c("div", Fd, [
            B(v(t(n)(t(r).INTERACTION_RATE)) + " ", 1),
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
          c("div", Vd, v(e.interactionRate), 1)
        ]),
        c("div", zd, [
          c("div", Gd, [
            B(v(t(n)(t(r).TOTAL_GIFT_AMOUNT)) + " ", 1),
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
          c("div", Bd, v(e.stats.totalGiftCoins.toFixed(2)), 1)
        ]),
        c("div", Wd, [
          c("div", Hd, [
            B(v(t(n)(t(r).GIFT_COUNT)) + " ", 1),
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
          c("div", Yd, v(e.stats.totalGiftsSent), 1)
        ]),
        c("div", jd, [
          c("div", Xd, [
            B(v(t(n)(t(r).GIFT_SENDERS)) + " ", 1),
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
          c("div", Kd, v(e.stats.totalUniqueGiftSenders), 1)
        ])
      ], 512)
    ]));
  }
}), Zd = { class: "moderation-card" }, Qd = { class: "moderation-card-header" }, Jd = { class: "moderation-header-left" }, eh = { class: "moderation-toolbar" }, th = { class: "update-time" }, ih = { class: "moderation-table-wrapper" }, nh = ["checked"], ah = ["checked", "onChange"], oh = { class: "moderation-user-cell" }, sh = { class: "moderation-user-id" }, lh = ["title"], rh = { class: "moderation-type-text" }, ch = { key: 0 }, uh = { class: "moderation-empty" }, dh = {
  key: 0,
  class: "moderation-pagination"
}, hh = { class: "pagination-pages" }, vh = ["disabled"], mh = {
  key: 0,
  class: "page-ellipsis"
}, fh = ["onClick"], gh = ["disabled"], ph = /* @__PURE__ */ Ie({
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
      const o = ie("t-button"), a = ie("t-tooltip");
      return y(), w("div", Zd, [
        c("div", Qd, [
          c("div", Jd, [
            c("h3", null, v(t(n)(t(r).CONTENT_MODERATION)), 1),
            g(o, {
              theme: "primary",
              shape: "round",
              onClick: e.handleBulkApprove,
              disabled: e.moderationSelectedIds.length === 0
            }, {
              icon: E(() => [
                g(t(Hi), { style: { width: "14px", height: "14px" } })
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).BULK_APPROVE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"]),
            e.handleBulkDelete ? (y(), oe(o, {
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
                B(" " + v(t(n)(t(r).BULK_DELETE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"])) : ce("", !0)
          ]),
          c("div", eh, [
            c("span", th, v(t(n)(t(r).UPDATED_AT, { time: e.updateTimeText })), 1),
            g(o, {
              theme: "primary",
              variant: "outline",
              shape: "round",
              loading: e.moderationLoading,
              onClick: e.handleRefreshModeration
            }, {
              icon: E(() => [
                g(t(An))
              ]),
              default: E(() => [
                B(" " + v(t(n)(t(r).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["loading", "onClick"])
          ])
        ]),
        c("div", ih, [
          g(Zi, {
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
              }, null, 40, nh)
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
              }, null, 40, ah)
            ]),
            "cell-userId": E(({ row: l }) => [
              c("div", oh, [
                c("span", sh, v(l.userId), 1)
              ])
            ]),
            "cell-content": E(({ row: l }) => [
              c("span", {
                title: l.content
              }, v(l.content), 9, lh)
            ]),
            "cell-type": E(({ row: l }) => [
              g(a, {
                content: l.type.split(/[,\\s;|]+/).map((d) => String(d).trim()).filter(Boolean).map((d, u) => u > 0 ? " " + t(n)(e.moderationTypeKey(d)) : t(n)(e.moderationTypeKey(d))).join(""),
                placement: "top"
              }, {
                default: E(() => [
                  c("span", rh, [
                    (y(!0), w(ge, null, Ne(l.type.split(/[,\\s;|]+/).map((d) => String(d).trim()).filter(Boolean), (d, u) => (y(), w(ge, { key: u }, [
                      u > 0 ? (y(), w("span", ch)) : ce("", !0),
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
              g($t, {
                actions: e.getModerationActions(l)
              }, null, 8, ["actions"])
            ]),
            empty: E(() => [
              c("div", uh, [
                c("span", null, v(t(n)(t(r).MODERATION_EMPTY)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data"]),
          e.moderationList.length > 0 ? (y(), w("div", dh, [
            c("span", null, v(t(n)(t(r).TOTAL_ITEMS, { count: e.moderationTotal, total: e.moderationTotal })), 1),
            c("div", hh, [
              c("button", {
                class: "page-num page-nav",
                disabled: e.moderationPage <= 1,
                "aria-label": "prev page",
                onClick: s[1] || (s[1] = (l) => e.goToModerationPage(e.moderationPage - 1))
              }, [
                g(t($i), { style: { transform: "rotate(90deg)", width: "14px" } })
              ], 8, vh),
              (y(!0), w(ge, null, Ne(e.moderationPageNumbers, (l, d) => (y(), w(ge, {
                key: l === "..." ? `ellipsis-${d}` : l
              }, [
                l === "..." ? (y(), w("span", mh, "...")) : (y(), w("button", {
                  key: 1,
                  class: be(["page-num", { active: l === e.moderationPage }]),
                  onClick: (u) => e.goToModerationPage(l)
                }, v(l), 11, fh))
              ], 64))), 128)),
              c("button", {
                class: "page-num page-nav",
                disabled: e.moderationPage >= e.moderationTotalPages,
                "aria-label": "next page",
                onClick: s[2] || (s[2] = (l) => e.goToModerationPage(e.moderationPage + 1))
              }, [
                g(t($i), { style: { transform: "rotate(-90deg)", width: "14px" } })
              ], 8, gh)
            ])
          ])) : ce("", !0)
        ])
      ]);
    };
  }
}), bh = { class: "member-list-panel-modal" }, yh = {
  key: 0,
  class: "member-list-empty"
}, Eh = {
  key: 1,
  class: "member-list-empty"
}, _h = {
  key: 2,
  class: "member-list-table"
}, wh = { class: "member-table-user" }, Ch = { class: "member-table-user-cell" }, Ih = { class: "member-table-user-name" }, Ah = { class: "member-table-time" }, Mh = { class: "member-table-action" }, Th = /* @__PURE__ */ Ie({
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
    const { t: i } = ke(), s = e, o = n, a = F({
      get: () => s.visible,
      set: (l) => o("update:visible", l)
    });
    return (l, d) => {
      const u = ie("t-dialog");
      return y(), oe(u, {
        visible: a.value,
        "onUpdate:visible": d[0] || (d[0] = (p) => a.value = p),
        header: t(i)(t(r).MUTED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: E(() => [
          c("div", bh, [
            e.memberListLoading ? (y(), w("div", yh, v(t(i)(t(r).LOADING)), 1)) : e.mutedList.length === 0 ? (y(), w("div", Eh, v(t(i)(t(r).NO_MUTED_MEMBERS)), 1)) : (y(), w("table", _h, [
              c("thead", null, [
                c("tr", null, [
                  c("th", null, v(t(i)(t(r).USER)), 1),
                  c("th", null, v(t(i)(t(r).UNMUTE_TIME)), 1),
                  c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                ])
              ]),
              c("tbody", null, [
                (y(!0), w(ge, null, Ne(e.mutedList, (p) => (y(), w("tr", {
                  key: p.userId
                }, [
                  c("td", wh, [
                    c("div", Ch, [
                      g(ji, {
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
                          c("span", Ih, v(e.getUserNameFromCache(p.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  c("td", Ah, v(p.endTime > 0 ? new Date(p.endTime * 1e3).toLocaleString() : "-"), 1),
                  c("td", Mh, [
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
}), Sh = { class: "member-list-panel-modal" }, Rh = {
  key: 0,
  class: "member-list-empty"
}, Lh = {
  key: 1,
  class: "member-list-empty"
}, xh = {
  key: 2,
  class: "member-list-table"
}, Nh = { class: "member-table-user" }, kh = { class: "member-table-user-cell" }, Dh = { class: "member-table-user-name" }, Oh = { class: "member-table-time" }, Uh = { class: "member-table-action" }, $h = /* @__PURE__ */ Ie({
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
    const { t: i } = ke(), s = e, o = n, a = F({
      get: () => s.visible,
      set: (l) => o("update:visible", l)
    });
    return (l, d) => {
      const u = ie("t-dialog");
      return y(), oe(u, {
        visible: a.value,
        "onUpdate:visible": d[0] || (d[0] = (p) => a.value = p),
        header: t(i)(t(r).BANNED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: E(() => [
          c("div", Sh, [
            e.memberListLoading ? (y(), w("div", Rh, v(t(i)(t(r).LOADING)), 1)) : e.bannedList.length === 0 ? (y(), w("div", Lh, v(t(i)(t(r).NO_BANNED_MEMBERS)), 1)) : (y(), w("table", xh, [
              c("thead", null, [
                c("tr", null, [
                  c("th", null, v(t(i)(t(r).USER)), 1),
                  c("th", null, v(t(i)(t(r).BAN_LIFT_TIME)), 1),
                  c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                ])
              ]),
              c("tbody", null, [
                (y(!0), w(ge, null, Ne(e.bannedList, (p) => (y(), w("tr", {
                  key: p.userId
                }, [
                  c("td", Nh, [
                    c("div", kh, [
                      g(ji, {
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
                          c("span", Dh, v(e.getUserNameFromCache(p.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  c("td", Oh, v(p.endTime > 0 ? new Date(p.endTime * 1e3).toLocaleString() : "-"), 1),
                  c("td", Uh, [
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
}), Ph = /* @__PURE__ */ Ie({
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
    const { t: i } = ke(), s = e, o = n, a = F({
      get: () => s.visible,
      set: (u) => o("update:visible", u)
    }), l = () => {
      s.onConfirm();
    }, d = () => {
      s.onClose(), o("update:visible", !1);
    };
    return (u, p) => {
      const m = ie("t-dialog");
      return y(), oe(m, {
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
}), Fh = /* @__PURE__ */ Ie({
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
    Me(
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
    return (u, p) => (y(), oe(Cn, { to: "body" }, [
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
          g(t(Hi)),
          B(" " + v(t(i)(t(r).BYPASS_CORRECTION)), 1)
        ])
      ], 4)) : ce("", !0)
    ]));
  }
}), Vh = { class: "dropdown-header" }, zh = /* @__PURE__ */ Ie({
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
    Me(
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
    return (p, m) => (y(), oe(Cn, { to: "body" }, [
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
        c("div", Vh, v(e.userName), 1),
        m[0] || (m[0] = c("div", { class: "dropdown-divider" }, null, -1)),
        e.isMuted ? (y(), w("button", {
          key: 0,
          class: "dropdown-item",
          onClick: d
        }, [
          g(t(Hi)),
          B(" " + v(t(i)(t(r).UNMUTE)), 1)
        ])) : (y(), w("button", {
          key: 1,
          class: "dropdown-item",
          onClick: d
        }, [
          g(t(Ma)),
          B(" " + v(t(i)(t(r).MUTE)), 1)
        ])),
        c("button", {
          class: "dropdown-item danger",
          onClick: u
        }, [
          e.isBanned ? (y(), oe(t(Ta), { key: 0 })) : (y(), oe(t(Sa), { key: 1 })),
          B(" " + v(e.isBanned ? t(i)(t(r).UNBAN) : t(i)(t(r).BAN)), 1)
        ])
      ], 4)) : ce("", !0)
    ]));
  }
});
function Gh() {
  const e = C({
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
    showConfirmDialog: (S) => {
      e.value = {
        ...S,
        visible: !0
      };
    },
    hideConfirmDialog: () => {
      e.value.visible = !1;
    },
    showModerationDropdown: (S, T, ee, G) => {
      n.visible = !0, n.x = S, n.y = T, n.itemId = ee, n.content = G;
    },
    hideModerationDropdown: () => {
      n.visible = !1;
    },
    showAudienceDropdown: (S, T, ee, G) => {
      i.visible = !0, i.x = S, i.y = T, i.userId = ee, i.userName = G;
    },
    hideAudienceDropdown: () => {
      i.visible = !1;
    },
    showSuccess: (S) => {
      a.value = S, setTimeout(() => {
        a.value = "";
      }, 3e3);
    },
    showError: (S) => {
      l.value = S, setTimeout(() => {
        l.value = "";
      }, 3e3);
    }
  };
}
const Bh = { class: "live-control-container" }, Wh = { class: "live-control-viewport" }, Hh = { class: "right-sidebar" }, Ri = 20, Yh = /* @__PURE__ */ Ie({
  __name: "live-control",
  setup(e) {
    var Wn;
    const n = Do(), i = _i(), s = F(() => n.params.liveId), o = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, { t: a } = ke(), { currentLive: l, fetchLiveDetail: d, fetchLiveStats: u, endLive: p, updateLive: m } = Pt(), { audienceList: h, audienceCount: f } = Pa(), b = (Wn = Yi().components) == null ? void 0 : Wn.roomControl, {
      mutedList: L,
      bannedList: S,
      memberLoading: T,
      muteMember: ee,
      unmuteMember: G,
      banMember: q,
      unbanMember: j,
      fetchMutedList: te,
      fetchBannedList: le,
      textModerationList: de,
      textModerationTotal: ye,
      textModerationPageNum: W,
      textModerationLoading: k,
      fetchTextModerationList: O,
      approveTextModerationItems: D,
      bypassCorrectionKeyword: R
    } = cl({
      liveId: s.value,
      pageSize: Ri
    }), M = async (_, I = 600) => {
      await ee({ memberAccounts: [_], muteTime: I });
    }, U = async (_) => {
      await G({ memberAccounts: [_] });
    }, N = async (_, I = 3600, z = "") => {
      await q({ memberAccounts: [_], duration: I, reason: z });
    }, x = async (_) => {
      await j({ memberAccounts: [_] });
    }, {
      successMsg: A,
      errorMsg: ae,
      mutedModalVisible: ue,
      bannedModalVisible: he
    } = Gh(), Ae = F(() => Ua() || ""), $ = C(!0), Q = C(null), Se = C(!1), Re = C("chat"), $e = C(0), De = C(null), je = C(/* @__PURE__ */ new Map()), Ke = C(null), me = Ui({
      onlineCount: 0,
      totalViewers: 0,
      totalMsgCount: 0,
      totalLikesReceived: 0,
      totalGiftsSent: 0,
      totalGiftCoins: 0,
      totalUniqueGiftSenders: 0,
      totalUniqueCommenters: 0
    }), ct = F(() => me.onlineCount <= 0 ? "0%" : (me.totalUniqueCommenters / me.onlineCount * 100).toFixed(1) + "%"), H = C(""), ve = () => {
      const _ = /* @__PURE__ */ new Date(), I = String(_.getHours()).padStart(2, "0"), z = String(_.getMinutes()).padStart(2, "0");
      H.value = `${I}:${z}`;
    };
    ve(), Me(
      l,
      (_) => {
        var I, z, Y, Z, fe, Ee, Fe;
        _ && (me.totalViewers = ((I = _.stats) == null ? void 0 : I.viewCount) || me.totalViewers, me.totalMsgCount = ((z = _.stats) == null ? void 0 : z.commentCount) || me.totalMsgCount, me.totalLikesReceived = ((Y = _.stats) == null ? void 0 : Y.likeCount) || me.totalLikesReceived, me.totalGiftsSent = ((Z = _.stats) == null ? void 0 : Z.giftCount) || me.totalGiftsSent, me.totalGiftCoins = ((fe = _.stats) == null ? void 0 : fe.giftAmount) || me.totalGiftCoins, me.totalUniqueGiftSenders = ((Ee = _.stats) == null ? void 0 : Ee.giftUserCount) || me.totalUniqueGiftSenders, me.totalUniqueCommenters = ((Fe = _.stats) == null ? void 0 : Fe.totalUniqueCommenters) || me.totalUniqueCommenters, _.onlineCount && (me.onlineCount = _.onlineCount), ve());
      },
      { immediate: !0 }
    );
    const Oe = C([]), Te = C(1), mt = k, at = C(0), P = C([]), se = F(
      () => Math.max(1, Math.ceil(at.value / Ri))
    ), Ce = F(
      () => _s(Te.value, se.value)
    ), Be = F(() => Oe.value.length === 0 ? !1 : Oe.value.every((_) => P.value.includes(_.id))), ft = [
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
    }), Ft = async (_ = 1) => {
      var I;
      if (!mt.value && s.value)
        try {
          const z = Math.max(1, _), Y = (I = l.value) == null ? void 0 : I.createdAt, Z = Y ? Number(Y) * 1e3 : Date.now() - 3600 * 1e3, fe = Date.now() - 720 * 60 * 60 * 1e3 + 60 * 1e3, Ee = Math.max(Z, fe);
          await O({
            liveId: s.value,
            pageNum: z,
            pageSize: Ri,
            startTime: Ee,
            violationOnly: !0
          });
          const Fe = await tl(de.value), Ci = await il();
          Oe.value = Fe.map(it), at.value = Math.max(0, ye.value - Ci), Te.value = z, P.value = P.value.filter(
            (So) => Fe.some((Ro) => Ro.id === So)
          );
        } catch (z) {
          console.error("[moderation] load failed:", z), X.error(a(r.OPERATION_FAILED));
        }
    }, Qi = async () => {
      await Ft(Te.value), X.success(a(r.REFRESHED));
    }, wi = (_) => {
      _ !== "..." && (_ < 1 || _ > se.value || _ === Te.value || Ft(_));
    }, Mt = async (_) => {
      P.value = P.value.filter(
        (Z) => !_.includes(Z)
      );
      const I = Math.max(0, at.value - _.length), z = Math.max(1, Math.ceil(I / Ri)), Y = Math.min(Te.value, z);
      await Ft(Y);
    }, V = (_) => {
      const I = P.value.indexOf(_);
      I >= 0 ? P.value.splice(I, 1) : P.value.push(_);
    }, ne = () => {
      const _ = Oe.value.map((z) => z.id);
      if (_.length > 0 && _.every((z) => P.value.includes(z)))
        P.value = P.value.filter((z) => !_.includes(z));
      else {
        const z = new Set(P.value);
        _.forEach((Y) => z.add(Y)), P.value = Array.from(z);
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
      const I = new Date(_), z = String(I.getMonth() + 1).padStart(2, "0"), Y = String(I.getDate()).padStart(2, "0"), Z = String(I.getHours()).padStart(2, "0"), fe = String(I.getMinutes()).padStart(2, "0"), Ee = String(I.getSeconds()).padStart(2, "0");
      return `${z}-${Y} ${Z}:${fe}:${Ee}`;
    }, Tt = (_) => {
      confirmDialogTitle.value = a(r.RELEASE_AND_RESEND), confirmDialogContent.value = a(r.RELEASE_AND_RESEND_DESCRIPTION), confirmAction.value = async () => {
        try {
          await D({
            ids: [_.id],
            items: [{ id: _.id, content: _.content, userId: _.userId }],
            liveId: s.value
          }), Pe("success", a(r.RELEASE_AND_RESEND_SUCCESS)), await Mt([_.id]);
        } catch (I) {
          console.error("[moderation] release failed:", I), X.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, Ue = C(null), St = () => {
      Ue.value = null;
    }, jt = (_, I) => {
      _.stopPropagation();
      const z = _.currentTarget.getBoundingClientRect();
      Ue.value = {
        item: I,
        x: z.right,
        y: z.bottom + 4
      };
    }, Vt = async (_) => {
      try {
        await sa([_.id]), X.info(a(r.DELETED)), await Mt([_.id]);
      } catch (I) {
        console.error("[moderation] delete failed:", I), X.error(a(r.OPERATION_FAILED));
      }
    }, qe = (_) => {
      confirmDialogTitle.value = a(r.BYPASS_CORRECTION), confirmDialogContent.value = a(r.BYPASS_CORRECTION_DESCRIPTION), confirmAction.value = async () => {
        try {
          await R({
            content: _.content,
            liveId: s.value
          }), Pe("success", a(r.BYPASS_CORRECTION_SUCCESS)), await Mt([_.id]);
        } catch (I) {
          console.error("[moderation] bypass correction keyword failed:", I), X.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, zt = () => {
      if (!Ue.value) return;
      const { item: _ } = Ue.value;
      St(), qe(_);
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
        onClick: (I) => jt(I, _)
      }
    ], K = () => {
      if (P.value.length === 0) {
        X.warning(a(r.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      confirmDialogTitle.value = a(r.RELEASE_AND_RESEND), confirmDialogContent.value = a(r.RELEASE_AND_RESEND_DESCRIPTION), confirmAction.value = async () => {
        const _ = [...P.value], I = Oe.value.filter((z) => _.includes(z.id)).map((z) => ({ id: z.id, content: z.content, userId: z.userId }));
        try {
          await D({ ids: _, items: I, liveId: s.value }), Pe("success", a(r.RELEASE_AND_RESEND_SUCCESS)), await Mt(_);
        } catch (z) {
          console.error("[moderation] bulk release failed:", z), X.error(a(r.OPERATION_FAILED));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0;
    }, pe = async () => {
      if (P.value.length === 0) {
        X.warning(a(r.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const _ = [...P.value];
      try {
        await sa(_), X.info(a(r.DELETED)), await Mt(_);
      } catch (I) {
        console.error("[moderation] bulk delete failed:", I), X.error(a(r.OPERATION_FAILED));
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
    ), F(() => [
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
    }), Dn = () => {
      var _, I;
      Rt.value = {
        visible: !0,
        liveId: s.value || "",
        liveName: ((_ = Q.value) == null ? void 0 : _.liveName) || ((I = l.value) == null ? void 0 : I.liveName) || ""
      };
    }, no = C(ll()), Gt = pa({
      action: async () => {
        if (!Q.value) throw new Error("liveInfo is null");
        return endLive(Q.value.id || Q.value.liveId);
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
        Q.value && (Q.value = { ...Q.value, isMessageDisabled: !0 });
      }
    }), Bt = F(() => Gt.confirmDialog.value ? Gt.confirmDialog.value : Lt.confirmDialog.value ? Lt.confirmDialog.value : null), ao = () => {
      Gt.confirmDialog.value ? Gt.executeWithConfirm() : Lt.confirmDialog.value && Lt.executeWithConfirm();
    }, oo = () => {
      Gt.confirmDialog.value ? Gt.cancelConfirm() : Lt.confirmDialog.value && Lt.cancelConfirm();
    };
    let Kt = null, qt = null;
    const en = F(
      () => {
        var _, I, z;
        return ((I = (_ = l.value) == null ? void 0 : _.liveOwner) == null ? void 0 : I.userId) || ((z = Q.value) == null ? void 0 : z.anchor.id) || "";
      }
    ), so = F(
      () => {
        var _, I, z;
        return ((_ = Ke.value) == null ? void 0 : _.nick) || ea(
          (I = l.value) == null ? void 0 : I.liveOwner,
          ((z = Q.value) == null ? void 0 : z.anchor.name) || a(r.UNKNOWN_HOST)
        );
      }
    ), lo = F(
      () => {
        var _, I, z;
        return ((_ = Ke.value) == null ? void 0 : _.avatarUrl) || ta((I = l.value) == null ? void 0 : I.liveOwner) || ((z = Q.value) == null ? void 0 : z.anchor.avatar);
      }
    ), On = F(() => {
      var _;
      return ((_ = Q.value) == null ? void 0 : _.isMessageDisabled) === !0;
    }), ro = F(() => Lt.loading.value), Un = (_) => {
      const I = h.value.find((Y) => Y.userId === _);
      if (I != null && I.avatarUrl)
        return I.avatarUrl;
      const z = je.value.get(_);
      if (z != null && z.avatarUrl)
        return z.avatarUrl;
    }, $n = (_) => {
      const I = h.value.find((Y) => Y.userId === _);
      if (I != null && I.userName)
        return I.userName;
      const z = je.value.get(_);
      return z != null && z.nick ? z.nick : _;
    }, Pe = (_, I) => {
      _ === "success" ? (A.value = I, setTimeout(() => A.value = "", 3e3)) : (ae.value = I, setTimeout(() => ae.value = "", 3e3));
    }, xt = (_) => {
      const I = _, z = I.ErrorCode || I.errorCode || I.code || 0, Y = I.ErrorInfo || I.errorInfo || "";
      return { code: z, info: Y };
    }, co = (_) => _ >= 1e4 ? (_ / 1e4).toFixed(1) + "w" : _.toLocaleString(), uo = (_) => {
      _ < 0 && (_ = 0);
      const I = Math.floor(_ / 86400), z = Math.floor(_ % 86400 / 3600), Y = Math.floor(_ % 3600 / 60), Z = _ % 60, fe = `${z.toString().padStart(2, "0")}:${Y.toString().padStart(2, "0")}:${Z.toString().padStart(2, "0")}`;
      return I > 0 ? `${I}${a(r.DAYS)} ${fe}` : fe;
    }, Pn = () => {
      i.back();
    }, ho = () => {
      Gt.requestConfirm();
    }, vo = async (_) => {
      if (Q.value)
        try {
          await m({
            liveId: Q.value.id,
            isMessageDisabled: _
          }), Q.value = { ...Q.value, isMessageDisabled: _ }, X.success(a(_ ? r.ALL_MEMBER_MUTE_ENABLED : r.ALL_MEMBER_MUTE_DISABLED));
        } catch (I) {
          const { code: z, info: Y } = xt(I), Z = I instanceof Error ? I : new Error(String(I)), fe = z ? gt(z, Y) : Z.message || a(r.UNKNOWN_HOST);
          X.error(a(r.OPERATION_FAILED, { error: fe }));
        }
    }, mo = (_) => {
      const I = !!_;
      if (I !== On.value) {
        if (I) {
          Lt.requestConfirm();
          return;
        }
        vo(!1);
      }
    }, Fn = (_, I, z) => {
      s.value && (ia(_, en.value) || (z ? (confirmDialogTitle.value = a(r.CONFIRM_UNMUTE_USER), confirmDialogContent.value = a("Unmute Confirm", { name: I }), confirmAction.value = async () => {
        try {
          await U(_), Pe("success", a("Unmuted Success", { name: I })), ui();
        } catch (Y) {
          const { code: Z, info: fe } = xt(Y), Ee = Y instanceof Error ? Y : new Error(String(Y)), Fe = Z ? gt(Z, fe) : Ee.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }) : (confirmDialogTitle.value = a(r.CONFIRM_MUTE_USER), confirmDialogContent.value = a("Mute Warning", { name: I }), confirmAction.value = async () => {
        try {
          await M(_, ws), Pe("success", a("Muted Success", { name: I })), ui();
        } catch (Y) {
          const { code: Z, info: fe } = xt(Y), Ee = Y instanceof Error ? Y : new Error(String(Y)), Fe = Z ? gt(Z, fe) : Ee.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Mute Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }), confirmDialogVisible.value = !0));
    }, Vn = (_, I, z) => {
      s.value && (ia(_, en.value) || (z ? (confirmDialogTitle.value = a(r.CONFIRM_UNBAN_USER), confirmDialogContent.value = a("Unban Confirm", { name: I }), confirmAction.value = async () => {
        try {
          await x(_), Pe("success", a("Unbanned Success", { name: I })), di();
        } catch (Y) {
          const { code: Z, info: fe } = xt(Y), Ee = Y instanceof Error ? Y : new Error(String(Y)), Fe = Z ? gt(Z, fe) : Ee.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }) : (confirmDialogTitle.value = a(r.CONFIRM_BAN_USER), confirmDialogContent.value = a("Ban Warning", { name: I }), confirmAction.value = async () => {
        try {
          await N(_, Cs), Pe("success", a("Banned Success", { name: I })), di();
        } catch (Y) {
          const { code: Z, info: fe } = xt(Y), Ee = Y instanceof Error ? Y : new Error(String(Y)), Fe = Z ? gt(Z, fe) : Ee.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Ban Failed", { error: Fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }), confirmDialogVisible.value = !0));
    }, ui = async () => {
      if (s.value) {
        T.value = !0;
        try {
          await te();
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
      ui(), ue.value = !0;
    }, go = () => {
      di(), he.value = !0;
    }, po = (_) => Array.isArray(L.value) && L.value.some((I) => I.userId === _), zn = (_) => Array.isArray(S.value) && S.value.some((I) => I.userId === _), bo = (_) => {
      s.value && (confirmDialogTitle.value = a(r.UNMUTE), confirmDialogContent.value = a("Unmute Confirm", { name: _ }), confirmAction.value = async () => {
        try {
          await U(_), Pe("success", a("Unmuted Success", { name: _ })), ui();
        } catch (I) {
          const { code: z, info: Y } = xt(I), Z = I instanceof Error ? I : new Error(String(I)), fe = z ? gt(z, Y) : Z.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: fe }));
        } finally {
          confirmDialogVisible.value = !1;
        }
      }, confirmDialogVisible.value = !0);
    }, yo = (_) => {
      s.value && (confirmDialogTitle.value = a(r.UNBAN), confirmDialogContent.value = a("Unban Confirm", { name: _ }), confirmAction.value = async () => {
        try {
          await x(_), Pe("success", a("Unbanned Success", { name: _ })), di();
        } catch (I) {
          const { code: z, info: Y } = xt(I), Z = I instanceof Error ? I : new Error(String(I)), fe = z ? gt(z, Y) : Z.message || a(r.UNKNOWN_HOST);
          Pe("error", a("Operation Failed", { error: fe }));
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
    ], dt = C(null), wo = (_, I, z, Y) => {
      _.stopPropagation();
      const Z = _.currentTarget.getBoundingClientRect();
      dt.value = {
        userId: I,
        userName: z,
        isMuted: Y,
        x: Z.right,
        y: Z.bottom + 4
      };
    }, tn = () => {
      dt.value = null;
    }, Co = () => {
      if (!dt.value) return;
      const { userId: _, userName: I, isMuted: z } = dt.value;
      Fn(_, I, z), tn();
    }, Io = () => {
      if (!dt.value) return;
      const { userId: _, userName: I } = dt.value;
      Vn(_, I, zn(_)), tn();
    }, Ao = async () => {
      var _, I, z;
      if (s.value)
        try {
          const Y = await d(s.value), Z = ((_ = Y == null ? void 0 : Y.Response) == null ? void 0 : _.RoomInfo) || (Y != null && Y.RoomId || Y != null && Y.liveId ? Y : null);
          if (Z) {
            const fe = ea(Z, Z.Owner_Account || "-"), Ee = ta(Z);
            Z.anchor ? Ke.value = {
              nick: Z.anchor.nick || fe,
              avatarUrl: Z.anchor.avatarUrl || Ee
            } : Ke.value = {
              nick: fe,
              avatarUrl: Ee
            }, Q.value = {
              id: Z.RoomId,
              title: Z.RoomName || a(r.UNNAMED_LIVE_SHORT),
              coverUrl: Z.CoverURL || Tn,
              anchor: {
                id: Z.Owner_Account,
                name: fe,
                avatar: Ee
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
          } else if (Y != null && Y.ErrorCode && Y.ErrorCode !== 0) {
            Y.ErrorCode === 100004 && (Se.value = !0);
            const fe = Y.ErrorInfo || "";
            Pe("error", gt(Y.ErrorCode, fe));
          } else
            Pe("error", gt(Y.ErrorCode, Y.ErrorInfo, a(r.GET_ERROR_MESSAGE)));
        } catch (Y) {
          const { code: Z, info: fe } = xt(Y), Ee = Y instanceof Error ? Y : new Error(String(Y));
          if ((I = Ee.message) != null && I.includes("network") || (z = Ee.message) != null && z.includes("fetch"))
            Pe("error", a(r.NETWORK_ERROR));
          else {
            const Fe = Z ? gt(Z, fe) : Ee.message || a(r.NETWORK_ERROR);
            Pe("error", a("Request Failed", { error: Fe }));
          }
        } finally {
          $.value = !1;
        }
    }, Gn = async () => {
      if (!(!s.value || !l.value))
        try {
          const _ = await u();
          if (_.ErrorCode === 0 && _.Response) {
            const I = _.Response;
            me.totalViewers = I.TotalViewers || 0, me.totalMsgCount = I.TotalMsgCount || 0, me.totalLikesReceived = I.TotalLikesReceived || 0, me.totalGiftsSent = I.TotalGiftsSent || 0, me.totalGiftCoins = I.TotalGiftCoins || 0, me.totalUniqueGiftSenders = I.TotalUniqueGiftSenders || 0, me.totalUniqueCommenters = I.TotalUniqueCommenters || 0, ve();
          }
        } catch (_) {
          const I = _ instanceof Error ? _ : new Error(String(_));
          console.error("获取统计数据失败:", I.message);
        }
    }, Mo = () => {
      Kt && (clearInterval(Kt), Kt = null), Se.value = !0;
    }, Bn = () => {
      s.value && (ui(), di());
    }, To = () => {
      Bn();
    };
    Me(
      s,
      (_) => {
        _ && d(_);
      },
      { immediate: !0 }
    ), s.value && (Ao(), Gn(), Ft(1)), s.value && (Kt = window.setInterval(() => {
      if (De.value) {
        const _ = Math.floor((Date.now() - De.value) / 1e3);
        $e.value = _ > 0 ? _ : 0;
      }
    }, 1e3)), Me(Xt, (_) => {
      qt && (clearInterval(qt), qt = null), _ > 0 && s.value && (qt = window.setInterval(Gn, _ * 1e3));
    }), Me(f, (_) => {
      me.onlineCount = _;
    });
    let nt = null;
    return Me(Re, (_) => {
      if (_ === "audience" && s.value) {
        Bn();
        const I = () => {
          document.querySelectorAll(".viewer-name").forEach((Y) => {
            const Z = Y, fe = Z.textContent || "";
            Z.title !== fe && (Z.title = fe);
          });
        };
        setTimeout(() => {
          I();
          const z = document.querySelector(".audience-list-area");
          z && (nt == null || nt.disconnect(), nt = new MutationObserver(I), nt.observe(z, { childList: !0, subtree: !0 }));
        }, 100);
      } else
        nt == null || nt.disconnect(), nt = null;
    }), tt(() => {
      s.value && (console.log("[LiveControl] Component unmounting, auto end live:", s.value), p(s.value).catch((_) => {
        console.error("[LiveControl] Failed to end live on unmount:", _);
      })), Kt && clearInterval(Kt), qt && clearInterval(qt), nt == null || nt.disconnect(), nt = null;
    }), (_, I) => {
      var z, Y, Z, fe;
      return y(), w("div", Bh, [
        g(t(Uu), {
          "success-msg": t(A),
          "error-msg": t(ae)
        }, null, 8, ["success-msg", "error-msg"]),
        g(t(Gu), {
          "handle-leave-live": Pn,
          "handle-violation-warning": Dn,
          "handle-force-stop-live": ho
        }),
        c("main", Wh, [
          g(t(wd), {
            "live-info": Q.value,
            "live-anchor-avatar": lo.value,
            "live-anchor-name": so.value,
            "live-ended-overlay-visible": Se.value,
            "current-live": t(l),
            "is-mock-mode": t(o),
            "live-control-slots": t(b),
            "live-id": s.value,
            "active-tab": Re.value,
            "onUpdate:activeTab": I[0] || (I[0] = (Ee) => Re.value = Ee),
            "is-all-muted": On.value,
            "all-mute-loading": ro.value,
            "muted-list": t(L),
            "banned-list": t(S),
            "current-user-id": Ae.value,
            "anchor-user-id": en.value,
            "handle-leave-live": Pn,
            "handle-all-mute-switch-change": mo,
            "handle-mute-audience": Fn,
            "handle-ban-audience": Vn,
            "open-muted-modal": fo,
            "open-banned-modal": go,
            "is-user-muted": po,
            "handle-open-audience-dropdown": wo,
            onJoinedLive: To,
            onLiveEnded: Mo
          }, null, 8, ["live-info", "live-anchor-avatar", "live-anchor-name", "live-ended-overlay-visible", "current-live", "is-mock-mode", "live-control-slots", "live-id", "active-tab", "is-all-muted", "all-mute-loading", "muted-list", "banned-list", "current-user-id", "anchor-user-id"]),
          c("aside", Hh, [
            g(t(qd), {
              stats: me,
              "live-duration": $e.value,
              "update-time-text": H.value,
              "interaction-rate": ct.value,
              "format-number": co,
              "format-duration": uo
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            g(Et, {
              "slot-component": (z = t(b)) == null ? void 0 : z.customControlPanel,
              "slot-props": { liveInfo: Q.value, stats: me }
            }, null, 8, ["slot-component", "slot-props"]),
            g(t(ph), {
              "moderation-list": Oe.value,
              "moderation-loading": t(mt),
              "moderation-page": Te.value,
              "moderation-total": at.value,
              "moderation-total-pages": se.value,
              "moderation-page-numbers": Ce.value,
              "moderation-selected-ids": P.value,
              "moderation-columns": ft,
              "is-all-on-page-selected": Be.value,
              "moderation-available": no.value,
              "update-time-text": H.value,
              "handle-bulk-approve": K,
              "handle-bulk-delete": pe,
              "handle-refresh-moderation": Qi,
              "toggle-select-one": V,
              "toggle-select-all": ne,
              "go-to-moderation-page": wi,
              "get-moderation-actions": Ji,
              "moderation-type-key": We,
              "format-moderation-time": ut
            }, null, 8, ["moderation-list", "moderation-loading", "moderation-page", "moderation-total", "moderation-total-pages", "moderation-page-numbers", "moderation-selected-ids", "is-all-on-page-selected", "moderation-available", "update-time-text"])
          ])
        ]),
        g(t(Th), {
          visible: t(ue),
          "onUpdate:visible": I[1] || (I[1] = (Ee) => Hn(ue) ? ue.value = Ee : null),
          "muted-list": t(L),
          "member-list-loading": t(T),
          "get-user-avatar": Un,
          "get-user-name-from-cache": $n,
          "get-muted-member-actions": Eo
        }, null, 8, ["visible", "muted-list", "member-list-loading"]),
        g(t($h), {
          visible: t(he),
          "onUpdate:visible": I[2] || (I[2] = (Ee) => Hn(he) ? he.value = Ee : null),
          "banned-list": t(S),
          "member-list-loading": t(T),
          "get-user-avatar": Un,
          "get-user-name-from-cache": $n,
          "get-banned-member-actions": _o
        }, null, 8, ["visible", "banned-list", "member-list-loading"]),
        Bt.value ? (y(), oe(t(Ph), {
          key: 0,
          visible: Bt.value.visible,
          "onUpdate:visible": I[3] || (I[3] = (Ee) => Bt.value.visible = Ee),
          title: Bt.value.title,
          content: Bt.value.content,
          "confirm-text": Bt.value.confirmText,
          danger: Bt.value.danger,
          "on-confirm": ao,
          "on-close": oo
        }, null, 8, ["visible", "title", "content", "confirm-text", "danger"])) : ce("", !0),
        g(t(Fh), {
          visible: !!Ue.value,
          position: Ue.value || { x: 0, y: 0 },
          onRelease: zt,
          onClose: St
        }, null, 8, ["visible", "position"]),
        g(t(zh), {
          visible: !!dt.value,
          "user-name": ((Y = dt.value) == null ? void 0 : Y.userName) || "",
          "is-muted": ((Z = dt.value) == null ? void 0 : Z.isMuted) || !1,
          "is-banned": zn(((fe = dt.value) == null ? void 0 : fe.userId) || ""),
          position: dt.value || { x: 0, y: 0 },
          onMute: Co,
          onBan: Io,
          onClose: tn
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"]),
        g(Va, {
          visible: Rt.value.visible,
          "onUpdate:visible": I[4] || (I[4] = (Ee) => Rt.value.visible = Ee),
          "live-id": Rt.value.liveId,
          "live-name": Rt.value.liveName
        }, null, 8, ["visible", "live-id", "live-name"])
      ]);
    };
  }
}), pm = /* @__PURE__ */ ci(Yh, [["__scopeId", "data-v-4b574841"]]), jh = { class: "gift-config-container" }, Xh = { class: "gift-config-page-header" }, Kh = { class: "gift-config-title" }, qh = { class: "gift-config-actions" }, Zh = { class: "gift-search-input" }, Qh = { class: "gift-id" }, Jh = { class: "gift-id-text" }, ev = { class: "gift-thumbnail" }, tv = ["src", "alt"], iv = { key: 1 }, nv = ["onClick"], av = { class: "gift-lang-tags" }, ov = ["onClick"], sv = {
  key: 1,
  class: "gift-lang-empty"
}, lv = { class: "gift-loading-container" }, rv = { class: "gift-loading-text" }, cv = { class: "gift-empty-container" }, uv = { class: "gift-empty-text" }, dv = { class: "textarea-count-wrapper" }, hv = {
  key: 0,
  class: "form-field__error-tip"
}, vv = { class: "gift-lang-config-container" }, mv = { class: "gift-lang-config-info-banner" }, fv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, gv = { class: "gift-lang-config-table" }, pv = { class: "gift-lang-table-cell-name" }, bv = {
  key: 1,
  class: "gift-lang-table-empty"
}, yv = { class: "gift-lang-table-cell-desc" }, Ev = {
  key: 1,
  class: "gift-lang-table-empty"
}, _v = { class: "gift-category-edit-tags" }, wv = ["onClick"], Cv = { class: "gift-category-add-wrapper" }, Iv = { class: "category-select-list" }, Av = {
  key: 0,
  class: "category-select-empty"
}, Mv = { class: "category-select-footer" }, mi = 0, Li = 2147483647, Jt = 1, ei = 99, bm = /* @__PURE__ */ Ie({
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
        success: (V) => X.success(V),
        error: (V) => X.error(V)
      },
      onNavigateToCategoryManagement: () => n.push("/gift-category")
    }), d = Oi(l.getState()), u = l.subscribe(() => {
      d.value = l.getState();
    }), p = F(() => d.value.loading), m = F(() => d.value.displayList), h = F(() => d.value.searchInput), f = F(() => d.value.isEdit), b = F(() => d.value.editingId);
    F(() => d.value.giftList), F(() => d.value.categoryList);
    const L = F(() => d.value.giftLangConfig), S = F(() => d.value.editingLang);
    F(() => d.value.editingGiftForLang);
    const T = F(() => d.value.langEditForm);
    F(() => d.value.editingCategoryGift);
    const ee = F(() => d.value.allCategories), G = F(() => d.value.giftCategoryIds);
    F(() => d.value.deletingCategoryId), F(() => d.value.deletingItem);
    const q = F({
      get: () => d.value.dialogVisible,
      set: (V) => {
        V || l.closeDialog();
      }
    }), j = F({
      get: () => d.value.langConfigVisible,
      set: (V) => {
        V || l.closeGiftLangConfigDialog();
      }
    }), te = F({
      get: () => d.value.langEditVisible,
      set: (V) => {
        V || l.closeLangEditDialog();
      }
    }), le = F({
      get: () => d.value.categoryEditVisible,
      set: (V) => {
        V || l.closeCategoryEditDialog();
      }
    }), de = F({
      get: () => d.value.categorySelectVisible,
      set: (V) => l.setCategorySelectVisible(V)
    }), ye = F({
      get: () => d.value.categoryDeleteVisible,
      set: (V) => {
        V || l.cancelRemoveCategory();
      }
    }), W = F({
      get: () => d.value.deleteDialogVisible,
      set: (V) => {
        V || l.cancelDelete();
      }
    }), k = F({
      get: () => d.value.selectedCategoryId,
      set: (V) => l.setSelectedCategoryId(V)
    }), O = F(
      () => ee.value.filter((V) => !G.value.includes(V.id))
    ), D = C(!1), R = C(!1), M = C(null), U = C(null), N = C(!1), x = C(!1), A = Ui({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), ae = (V) => {
      A.price = Number(V) || mi;
    }, ue = (V) => {
      if (V === "" || V === null || V === void 0) {
        A.levelNum = void 0;
        return;
      }
      A.levelNum = Number(V);
    }, he = (V) => {
      l.setLangEditForm({ name: String(V ?? "") });
    }, Ae = (V) => {
      l.setLangEditForm({ description: String(V ?? "") });
    }, $ = (V) => {
      l.setSearchInput(String(V ?? ""));
    }, Q = () => l.search(), Se = () => l.clearSearch(), Re = (V) => {
      l.copyGiftId(V);
    }, $e = () => l.goToCategoryManagement(), De = (V) => [
      {
        key: "edit",
        label: o(r.EDIT),
        onClick: () => H(V)
      },
      {
        key: "delete",
        label: o(r.DELETE),
        danger: !0,
        onClick: () => Ft(V)
      }
    ], je = (V) => [
      {
        key: "edit",
        label: o(r.EDIT),
        onClick: () => b.value && at(b.value, V)
      },
      {
        key: "clear",
        label: o(r.CLEAR),
        danger: !0,
        disabled: !L.value[V].name && !L.value[V].description,
        onClick: () => b.value && l.clearLang(b.value, V)
      }
    ], Ke = (V) => l.getCategoryName(V), me = (V) => {
      var ne, We;
      (ne = M.value) == null || ne.reset(), (We = U.value) == null || We.reset(), l.closeDialog();
    }, ct = () => {
      var V, ne;
      ve(), (V = M.value) == null || V.reset(), (ne = U.value) == null || ne.reset(), l.openCreateDialog();
    }, H = async (V) => {
      var ne, We;
      (ne = M.value) == null || ne.reset(), (We = U.value) == null || We.reset(), A.id = V.id, A.name = V.name, A.iconUrl = V.iconUrl, A.price = V.price, A.animationUrl = V.animationUrl || "", A.levelNum = V.level ? parseInt(V.level) : void 0, A.description = V.description || "", A.extensionInfo = V.extensionInfo || "", A.enabled = V.enabled ?? !0, l.openEditDialog(V), await Je(), V.iconUrl && M.value && M.value.switchToUrlMode(), V.animationUrl && U.value && U.value.switchToUrlMode();
    }, ve = () => {
      A.id = "", A.name = "", A.iconUrl = "", A.price = 0, A.animationUrl = "", A.levelNum = void 0, A.description = "", A.extensionInfo = "", A.enabled = !0, N.value = !1, x.value = !1;
    }, Oe = async () => {
      var We, ut, Tt, Ue, St;
      if (!A.id.trim() && !f.value) {
        X.error(o(r.ENTER_GIFT_ID));
        return;
      }
      if (J(A.id) > Ht) {
        X.error(o("Gift ID max bytes", { max: Ht }));
        return;
      }
      if (!A.name.trim()) {
        X.error(o(r.ENTER_GIFT_NAME));
        return;
      }
      if (J(A.name) > Ze) {
        X.error(o("Gift name max bytes", { max: Ze }));
        return;
      }
      const V = ((We = M.value) == null ? void 0 : We.isUrlInputMode) ?? !0, ne = V && (((Ue = (Tt = (ut = M.value) == null ? void 0 : ut.urlInputValue) == null ? void 0 : Tt.trim) == null ? void 0 : Ue.call(Tt)) || "");
      if (!N.value && !A.iconUrl.trim() && !ne) {
        V && ((St = M.value) == null || St.setUrlError(o(r.ENTER_THUMBNAIL_URL))), X.error(o(r.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (A.description && J(A.description) > Qe) {
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
        if (J(A.extensionInfo.trim()) > 100) {
          X.error(o("Extension info max bytes", { max: 100 }));
          return;
        }
      }
      D.value = !0;
      try {
        let jt, Vt;
        try {
          [jt, Vt] = await Ms([
            {
              handle: M.value,
              hasPendingFile: N.value,
              fallbackUrl: A.iconUrl,
              label: o(r.THUMBNAIL)
            },
            {
              handle: U.value,
              hasPendingFile: x.value,
              fallbackUrl: A.animationUrl,
              label: o(r.GIFT_MATERIAL)
            }
          ]);
        } catch (qe) {
          const zt = qe instanceof Vi || qe instanceof Error ? qe : new Error(String(qe));
          X.error(zt instanceof Vi ? zt.message : o("Operation Failed", { error: zt.message || o(r.UNKNOWN_HOST) })), D.value = !1;
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
        D.value = !1;
      }
    }, Te = (V) => {
      l.openGiftLangConfigDialog(V);
    }, mt = () => l.closeGiftLangConfigDialog(), at = (V, ne) => {
      ne && l.openLangEditDialog(V, ne);
    }, P = async () => {
      const V = T.value;
      if (V.name && J(V.name) > Ze) {
        X.error(o("Gift name max bytes", { max: Ze }));
        return;
      }
      if (V.description && J(V.description) > Qe) {
        X.error(o("Gift desc max bytes", { max: Qe }));
        return;
      }
      await l.saveLangEdit();
    }, se = (V) => {
      l.openCategoryEditDialog(V);
    }, Ce = (V) => {
      l.requestRemoveCategory(V);
    }, Be = () => {
      l.confirmRemoveCategory();
    }, ft = () => l.openCategorySelectDialog(), it = () => {
      l.confirmAddCategory();
    }, Ft = (V) => l.requestDelete(V), Qi = () => void l.confirmDelete(), wi = () => l.onLanguageChanged();
    return At(async () => {
      R.value = await Oa(), Fi.on("languageChanged", wi), await l.init();
    }), Ei(() => {
      Fi.off("languageChanged", wi), u(), l.dispose();
    }), (V, ne) => {
      const We = ie("t-input"), ut = ie("t-button"), Tt = ie("t-card"), Ue = ie("t-form-item"), St = ie("t-input-number"), jt = ie("t-textarea"), Vt = ie("t-form"), qe = ie("t-dialog"), zt = ie("t-option"), Ji = ie("t-select");
      return y(), w("div", jh, [
        c("div", Xh, [
          c("h1", Kh, v(t(o)(t(r).GIFT_MANAGEMENT)), 1),
          c("div", qh, [
            c("div", Zh, [
              g(We, {
                "model-value": h.value,
                placeholder: t(o)(t(r).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: t(na)(h.value, t(aa)) ? "error" : "default",
                tips: t(na)(h.value, t(aa)) ? t(o)(t(r).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": $,
                onEnter: Q,
                onClear: Se
              }, {
                suffixIcon: E(() => [
                  g(t(In), {
                    class: "search-icon",
                    onClick: Q
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            g(ut, {
              variant: "outline",
              shape: "round",
              onClick: $e,
              theme: "primary"
            }, {
              icon: E(() => [
                g(t(Bo))
              ]),
              default: E(() => [
                B(" " + v(t(o)(t(r).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            g(ut, {
              theme: "primary",
              shape: "round",
              onClick: ct
            }, {
              default: E(() => [
                B(" ＋ " + v(t(o)(t(r).ADD_GIFT)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        g(Tt, { class: "gift-list-card" }, {
          default: E(() => [
            g(Zi, {
              columns: s,
              data: m.value,
              "row-key": "id",
              loading: p.value,
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
              "cell-id": E(({ row: K }) => [
                c("div", Qh, [
                  c("span", Jh, v(K.id || "-"), 1),
                  g(t(Dt), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (pe) => Re(K.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": E(({ row: K }) => [
                c("div", ev, [
                  K.iconUrl ? (y(), w("img", {
                    key: 0,
                    src: K.iconUrl,
                    alt: K.name
                  }, null, 8, tv)) : (y(), w("span", iv, "🎁"))
                ])
              ]),
              "cell-name": E(({ row: K }) => [
                c("span", null, v(K.name || "-"), 1)
              ]),
              "cell-description": E(({ row: K }) => [
                c("span", null, v(K.description || "-"), 1)
              ]),
              "cell-categories": E(({ row: K }) => {
                var pe;
                return [
                  c("div", {
                    class: "gift-category-cell",
                    onClick: (Xt) => se(K)
                  }, [
                    c("span", null, v(((pe = K.categories) == null ? void 0 : pe.join(", ")) || "-"), 1),
                    g(t(Pi), {
                      class: "gift-category-edit-icon",
                      size: "14"
                    })
                  ], 8, nv)
                ];
              }),
              "cell-languageList": E(({ row: K }) => [
                c("div", av, [
                  K.languageList && K.languageList.length > 0 ? (y(!0), w(ge, { key: 0 }, Ne(K.languageList, (pe) => (y(), w("span", {
                    key: t(ii)(pe),
                    class: "gift-lang-tag",
                    onClick: (Xt) => at(K.id, t(Na)(t(ii)(pe)))
                  }, v(t(o)(t(ka)(t(ii)(pe)))), 9, ov))), 128)) : (y(), w("span", sv, "-")),
                  g(t(Pi), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (pe) => Te(K.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-level": E(({ row: K }) => [
                B(v(K.level || "-"), 1)
              ]),
              "cell-price": E(({ row: K }) => [
                B(v(K.price ?? 0), 1)
              ]),
              "cell-createdAt": E(({ row: K }) => [
                B(v(t(As)(K.createdAt)), 1)
              ]),
              "cell-customer-extra": E(({ row: K }) => {
                var pe;
                return [
                  g(Et, {
                    "slot-component": (pe = t(i)) == null ? void 0 : pe.giftTableExtraColumns,
                    "slot-props": { gift: K }
                  }, null, 8, ["slot-component", "slot-props"])
                ];
              }),
              "cell-actions": E(({ row: K }) => {
                var pe;
                return [
                  g($t, {
                    actions: De(K)
                  }, null, 8, ["actions"]),
                  g(Et, {
                    "slot-component": (pe = t(i)) == null ? void 0 : pe.giftRowActions,
                    "slot-props": { gift: K }
                  }, null, 8, ["slot-component", "slot-props"])
                ];
              }),
              loading: E(() => [
                c("div", lv, [
                  ne[18] || (ne[18] = c("div", { class: "gift-loading-spinner" }, null, -1)),
                  c("span", rv, v(t(o)(t(r).LOADING)), 1)
                ])
              ]),
              empty: E(() => [
                c("div", cv, [
                  c("span", uv, v(t(o)(t(r).NO_GIFT_DATA)), 1)
                ])
              ]),
              _: 1
            }, 8, ["data", "loading"])
          ]),
          _: 1
        }),
        g(qe, {
          visible: q.value,
          "onUpdate:visible": ne[9] || (ne[9] = (K) => q.value = K),
          header: f.value ? t(o)(t(r).EDIT_GIFT) : t(o)(t(r).CREATE_GIFT),
          width: "600px",
          placement: "center",
          class: "gift-modal",
          "on-close": () => me()
        }, {
          footer: E(() => {
            var K, pe, Xt, Rt;
            return [
              g(ut, {
                variant: "outline",
                shape: "round",
                onClick: ne[0] || (ne[0] = (Dn) => me())
              }, {
                default: E(() => [
                  B(v(t(o)(t(r).CANCEL)), 1)
                ]),
                _: 1
              }),
              g(ut, {
                theme: "primary",
                shape: "round",
                disabled: D.value || !f.value && !A.id || !A.name.trim() || ((K = M.value) == null ? void 0 : K.isValidating) || ((pe = U.value) == null ? void 0 : pe.isValidating) || ((Xt = M.value) == null ? void 0 : Xt.hasUrlError) || ((Rt = U.value) == null ? void 0 : Rt.hasUrlError),
                loading: D.value,
                onClick: Oe
              }, {
                default: E(() => [
                  B(v(D.value ? f.value ? t(o)(t(r).SAVING) : t(o)(t(r).CREATING) : f.value ? t(o)(t(r).SAVE) : t(o)(t(r).CREATE)), 1)
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
                  f.value ? ce("", !0) : (y(), oe(Ue, {
                    key: 0,
                    label: t(o)(t(r).GIFT_ID),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(We, {
                        modelValue: A.id,
                        "onUpdate:modelValue": ne[1] || (ne[1] = (pe) => A.id = pe),
                        placeholder: t(o)(t(r).ENTER_GIFT_ID),
                        status: t(J)(A.id) > t(Ht) ? "error" : "default",
                        tips: t(J)(A.id) > t(Ht) ? t(o)("Gift ID max bytes", { max: t(Ht) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: be(["input-suffix-count", { "byte-overflow": t(J)(A.id) > t(Ht) }])
                          }, v(t(J)(A.id)) + "/" + v(t(Ht)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"])),
                  g(Ue, {
                    label: t(o)(t(r).GIFT_PRICE),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(St, {
                        "model-value": A.price,
                        min: mi,
                        max: Li,
                        "decimal-places": 0,
                        status: A.price < mi || A.price > Li ? "error" : "default",
                        tips: A.price < mi || A.price > Li ? t(o)("Gift price range", { min: mi, max: Li }) : "",
                        style: { width: "100%" },
                        placeholder: t(o)(t(r).ENTER_GIFT_PRICE),
                        "onUpdate:modelValue": ae
                      }, null, 8, ["model-value", "status", "tips", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Ue, {
                    label: t(o)(t(r).GIFT_LEVEL)
                  }, {
                    default: E(() => [
                      g(St, {
                        "model-value": A.levelNum,
                        min: A.levelNum != null ? Jt : void 0,
                        max: A.levelNum != null ? ei : void 0,
                        status: (A.levelNum ?? 0) > 0 && ((A.levelNum ?? 0) < Jt || (A.levelNum ?? 0) > ei) ? "error" : "default",
                        tips: (A.levelNum ?? 0) > 0 && ((A.levelNum ?? 0) < Jt || (A.levelNum ?? 0) > ei) ? t(o)("Gift level range", { min: Jt, max: ei }) : "",
                        style: { width: "100%" },
                        placeholder: t(o)(t(r).ENTER_GIFT_LEVEL),
                        "onUpdate:modelValue": ue
                      }, null, 8, ["model-value", "min", "max", "status", "tips", "placeholder"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Ue, {
                    label: t(o)(t(r).THUMBNAIL),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(Bi, {
                        ref_key: "iconUploadRef",
                        ref: M,
                        modelValue: A.iconUrl,
                        "onUpdate:modelValue": ne[2] || (ne[2] = (pe) => A.iconUrl = pe),
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
                        onFileReady: ne[3] || (ne[3] = (pe) => N.value = !!pe)
                      }, null, 8, ["modelValue", "upload-enabled", "placeholder", "defer-upload"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Ue, {
                    label: t(o)(t(r).GIFT_MATERIAL)
                  }, {
                    default: E(() => [
                      g(Bi, {
                        ref_key: "animUploadRef",
                        ref: U,
                        modelValue: A.animationUrl,
                        "onUpdate:modelValue": ne[4] || (ne[4] = (pe) => A.animationUrl = pe),
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
                        onFileReady: ne[5] || (ne[5] = (pe) => x.value = !!pe)
                      }, null, 8, ["modelValue", "upload-enabled", "placeholder", "accept-hint", "defer-upload"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Ue, {
                    label: t(o)(t(r).GIFT_NAME),
                    "required-mark": ""
                  }, {
                    default: E(() => [
                      g(We, {
                        modelValue: A.name,
                        "onUpdate:modelValue": ne[6] || (ne[6] = (pe) => A.name = pe),
                        placeholder: t(o)(t(r).ENTER_GIFT_NAME),
                        status: t(J)(A.name) > t(Ze) ? "error" : "default",
                        tips: t(J)(A.name) > t(Ze) ? t(o)("Gift name max bytes", { max: t(Ze) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: be(["input-suffix-count", { "byte-overflow": t(J)(A.name) > t(Ze) }])
                          }, v(t(J)(A.name)) + "/" + v(t(Ze)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Ue, {
                    label: t(o)(t(r).DESCRIPTION)
                  }, {
                    default: E(() => [
                      g(We, {
                        modelValue: A.description,
                        "onUpdate:modelValue": ne[7] || (ne[7] = (pe) => A.description = pe),
                        placeholder: t(o)(t(r).ENTER_GIFT_DESCRIPTION),
                        status: t(J)(A.description) > t(Qe) ? "error" : "default",
                        tips: t(J)(A.description) > t(Qe) ? t(o)("Gift desc max bytes", { max: t(Qe) }) : ""
                      }, {
                        suffix: E(() => [
                          c("span", {
                            class: be(["input-suffix-count", { "byte-overflow": t(J)(A.description) > t(Qe) }])
                          }, v(t(J)(A.description)) + "/" + v(t(Qe)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"])
                    ]),
                    _: 1
                  }, 8, ["label"]),
                  g(Et, {
                    "slot-component": (K = t(i)) == null ? void 0 : K.giftFormExtraFields,
                    "slot-props": { mode: f.value ? "edit" : "create", formData: { ...A } }
                  }, null, 8, ["slot-component", "slot-props"]),
                  g(Ue, {
                    label: t(o)(t(r).CUSTOM_EXTENSION_INFO)
                  }, {
                    default: E(() => [
                      c("div", dv, [
                        g(jt, {
                          modelValue: A.extensionInfo,
                          "onUpdate:modelValue": ne[8] || (ne[8] = (pe) => A.extensionInfo = pe),
                          placeholder: t(o)(t(r).EXTENSION_INFO_JSON_FORMAT),
                          autosize: { minRows: 3 },
                          status: t(J)(A.extensionInfo) > t(hi) ? "error" : "default"
                        }, null, 8, ["modelValue", "placeholder", "status"]),
                        c("span", {
                          class: be(["textarea-suffix-count", { "byte-overflow": t(J)(A.extensionInfo) > t(hi) }])
                        }, v(t(J)(A.extensionInfo)) + "/" + v(t(hi)), 3)
                      ]),
                      t(J)(A.extensionInfo) > t(hi) ? (y(), w("div", hv, v(t(o)("Extension info max bytes", { max: t(hi) })), 1)) : ce("", !0)
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
          visible: j.value,
          "onUpdate:visible": ne[10] || (ne[10] = (K) => j.value = K),
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
            c("div", vv, [
              c("div", mv, [
                (y(), w("svg", fv, [...ne[19] || (ne[19] = [
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
              c("table", gv, [
                c("thead", null, [
                  c("tr", null, [
                    c("th", null, v(t(o)(t(r).LANGUAGE_TYPE)), 1),
                    c("th", null, v(t(o)(t(r).GIFT_NAME)), 1),
                    c("th", null, v(t(o)(t(r).DESCRIPTION)), 1),
                    c("th", null, v(t(o)(t(r).ACTIONS)), 1)
                  ])
                ]),
                c("tbody", null, [
                  (y(!0), w(ge, null, Ne(t(Da), (K) => (y(), w("tr", { key: K }, [
                    c("td", null, v(t(o)(t(Ut)[K].label)), 1),
                    c("td", pv, [
                      L.value[K].name ? (y(), w(ge, { key: 0 }, [
                        B(v(L.value[K].name), 1)
                      ], 64)) : (y(), w("span", bv, v(t(o)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", yv, [
                      L.value[K].description ? (y(), w(ge, { key: 0 }, [
                        B(v(L.value[K].description), 1)
                      ], 64)) : (y(), w("span", Ev, v(t(o)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", null, [
                      g($t, {
                        actions: je(K)
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
          visible: te.value,
          "onUpdate:visible": ne[11] || (ne[11] = (K) => te.value = K),
          header: S.value ? t(o)(t(r).EDIT_GIFT_LANGUAGE_INFO, { lang: t(o)(t(Ut)[S.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: t(o)(t(r).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: P
        }, {
          default: E(() => [
            g(Vt, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": t(oi)(110),
              colon: !1
            }, {
              default: E(() => [
                g(Ue, {
                  label: t(o)(t(r).GIFT_NAME)
                }, {
                  default: E(() => [
                    g(We, {
                      "model-value": T.value.name,
                      placeholder: S.value ? t(o)(t(r).ENTER_LANGUAGE_GIFT_NAME, { lang: t(o)(t(Ut)[S.value].label) }) : "",
                      status: t(J)(T.value.name) > t(Ze) ? "error" : "default",
                      tips: t(J)(T.value.name) > t(Ze) ? t(o)(t(r).GIFT_NAME_MAX_BYTES, { max: t(Ze) }) : "",
                      "onUpdate:modelValue": he
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(T.value.name) > t(Ze) }])
                        }, v(t(J)(T.value.name)) + "/" + v(t(Ze)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(Ue, {
                  label: t(o)(t(r).DESCRIPTION)
                }, {
                  default: E(() => [
                    g(We, {
                      "model-value": T.value.description,
                      placeholder: S.value ? t(o)(t(r).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: t(o)(t(Ut)[S.value].label) }) : "",
                      status: t(J)(T.value.description) > t(Qe) ? "error" : "default",
                      tips: t(J)(T.value.description) > t(Qe) ? t(o)(t(r).GIFT_DESC_MAX_BYTES, { max: t(Qe) }) : "",
                      "onUpdate:modelValue": Ae
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(T.value.description) > t(Qe) }])
                        }, v(t(J)(T.value.description)) + "/" + v(t(Qe)), 3)
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
          visible: le.value,
          "onUpdate:visible": ne[12] || (ne[12] = (K) => le.value = K),
          header: t(o)(t(r).EDIT_GIFT_CATEGORY),
          width: "420px",
          placement: "center",
          class: "gift-category-edit-modal",
          "confirm-btn": { content: t(o)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          onConfirm: ne[13] || (ne[13] = (K) => le.value = !1)
        }, {
          default: E(() => [
            c("div", _v, [
              G.value.length > 0 ? (y(!0), w(ge, { key: 0 }, Ne(G.value, (K) => (y(), w("span", {
                key: K,
                class: "gift-category-edit-tag"
              }, [
                B(v(Ke(K)) + " ", 1),
                c("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (pe) => Ce(K)
                }, [...ne[20] || (ne[20] = [
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
                ])], 8, wv)
              ]))), 128)) : ce("", !0),
              c("div", Cv, [
                g(ut, {
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
        g(qe, {
          visible: W.value,
          "onUpdate:visible": ne[14] || (ne[14] = (K) => W.value = K),
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
        g(qe, {
          visible: ye.value,
          "onUpdate:visible": ne[15] || (ne[15] = (K) => ye.value = K),
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
          "onUpdate:visible": ne[17] || (ne[17] = (K) => de.value = K),
          header: t(o)(t(r).SELECT_CATEGORY),
          width: "360px",
          placement: "center",
          footer: !1,
          "on-close": () => de.value = !1
        }, {
          default: E(() => [
            c("div", Iv, [
              g(Ji, {
                modelValue: k.value,
                "onUpdate:modelValue": ne[16] || (ne[16] = (K) => k.value = K),
                placeholder: t(o)(t(r).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: E(() => [
                  (y(!0), w(ge, null, Ne(O.value, (K) => (y(), oe(zt, {
                    key: K.id,
                    value: K.id,
                    label: K.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              O.value.length === 0 ? (y(), w("div", Av, v(t(o)(t(r).NO_AVAILABLE_CATEGORIES)), 1)) : ce("", !0)
            ]),
            c("div", Mv, [
              g(ut, {
                theme: "primary",
                shape: "round",
                disabled: !k.value,
                onClick: it
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
}), Tv = { class: "gift-category-container" }, Sv = { class: "gift-category-page-header" }, Rv = { class: "gift-category-title-section" }, Lv = ["viewBox", "stroke-width", "stroke-linecap"], xv = ["d"], Nv = { class: "gift-category-actions" }, kv = {
  key: 0,
  class: "create-category-tooltip"
}, Dv = { class: "gift-category-table-wrapper" }, Ov = { class: "gift-id" }, Uv = { class: "gift-id-text" }, $v = { class: "category-name" }, Pv = { class: "category-desc" }, Fv = { class: "category-lang-tags" }, Vv = ["onClick"], zv = {
  key: 1,
  class: "category-lang-empty"
}, Gv = { class: "category-count" }, Bv = { class: "category-loading-container" }, Wv = { class: "category-loading-text" }, Hv = { class: "category-empty-container" }, Yv = { class: "category-empty-text" }, jv = { class: "category-lang-config-container" }, Xv = { class: "category-lang-config-info-banner" }, Kv = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, qv = { class: "category-lang-config-table" }, Zv = { class: "category-lang-table-cell-name" }, Qv = {
  key: 1,
  class: "category-lang-table-empty"
}, Jv = { class: "category-lang-table-cell-desc" }, em = {
  key: 1,
  class: "category-lang-table-empty"
}, ym = /* @__PURE__ */ Ie({
  __name: "gift-category",
  setup(e) {
    const n = _i(), { t: i } = ke(), s = Fa(), o = new Ts({
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
    }), a = Oi(o.getState()), l = o.subscribe(() => {
      a.value = o.getState();
    }), d = F(() => a.value.loading), u = F(() => a.value.categoryList), p = F(() => a.value.isEdit), m = F(() => a.value.formData), h = F(() => a.value.categoryLangConfig), f = F(() => a.value.editingLang), b = F(() => a.value.langEditForm), L = F({
      get: () => a.value.dialogVisible,
      set: (N) => {
        N || o.closeDialog();
      }
    }), S = F({
      get: () => a.value.langConfigVisible,
      set: (N) => {
        N || o.closeLangConfigDialog();
      }
    }), T = F({
      get: () => a.value.langEditVisible,
      set: (N) => {
        N || o.closeLangEditDialog();
      }
    }), ee = F({
      get: () => a.value.deleteDialogVisible,
      set: (N) => {
        N || o.cancelDelete();
      }
    }), G = F({
      get: () => a.value.formData.categoryId,
      set: (N) => o.setFormData({ categoryId: N })
    }), q = F({
      get: () => a.value.formData.name,
      set: (N) => o.setFormData({ name: N })
    }), j = F({
      get: () => a.value.formData.description,
      set: (N) => o.setFormData({ description: N })
    }), te = F({
      get: () => a.value.langEditForm.name,
      set: (N) => o.setLangEditForm({ name: N })
    }), le = F({
      get: () => a.value.langEditForm.description,
      set: (N) => o.setLangEditForm({ description: N })
    }), de = C(!1), ye = [
      { key: "id", width: 120, className: "col-id" },
      { key: "name", className: "col-name" },
      { key: "description", className: "col-desc" },
      { key: "languageList", width: 200, className: "col-languages" },
      { key: "giftCount", width: 80, className: "col-count" },
      { key: "actions", fitContent: !0, minWidth: 100, maxWidth: 220, className: "col-actions" }
    ], W = (N) => {
      La(String(N || "")), X.success(i("Copy Label Copied", { label: i(r.CATEGORY_ID) }));
    }, k = (N, x) => {
      const A = ii(x), ae = Na(A);
      ae && o.openLangEditDialog(N, ae);
    }, O = (N) => [
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
    ], D = (N) => [
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
    }, M = async () => {
      const N = a.value.langEditForm;
      if (N.name && J(N.name) > ot) {
        X.error(i("Category name max bytes", { max: ot }));
        return;
      }
      if (N.description && J(N.description) > st) {
        X.error(i("Category desc max bytes", { max: st }));
        return;
      }
      await o.saveLangEdit();
    }, U = () => o.onLanguageChanged();
    return At(() => {
      o.init(), Fi.on("languageChanged", U);
    }), Ei(() => {
      Fi.off("languageChanged", U), l(), o.dispose();
    }), (N, x) => {
      const A = ie("t-button"), ae = ie("t-input"), ue = ie("t-form-item"), he = ie("t-form"), Ae = ie("t-dialog");
      return y(), w("div", Tv, [
        c("div", Sv, [
          c("div", Rv, [
            g(A, {
              variant: "outline",
              shape: "circle",
              class: "back-btn",
              onClick: x[0] || (x[0] = ($) => t(o).goBack()),
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
                  }, null, 8, xv)
                ], 8, Lv))
              ]),
              _: 1
            }, 8, ["title"]),
            c("h1", null, v(t(i)(t(r).CATEGORY_MANAGEMENT)), 1)
          ]),
          c("div", Nv, [
            c("div", {
              class: be(["create-category-btn-wrapper", { disabled: u.value.length >= t(nn) }])
            }, [
              g(A, {
                theme: "primary",
                shape: "round",
                disabled: u.value.length >= t(nn),
                onClick: x[1] || (x[1] = ($) => t(o).openCreateDialog())
              }, {
                default: E(() => [
                  B(" ＋ " + v(t(i)(t(r).ADD_CATEGORY)), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              u.value.length >= t(nn) ? (y(), w("div", kv, v(t(i)(t(r).CATEGORY_LIMIT_REACHED)), 1)) : ce("", !0)
            ], 2)
          ])
        ]),
        c("div", Dv, [
          g(Zi, {
            columns: ye,
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
              c("div", Ov, [
                c("span", Uv, v($.id || "-"), 1),
                g(t(Dt), {
                  class: "copy-icon",
                  size: "14",
                  onClick: (Q) => W($.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-name": E(({ row: $ }) => [
              c("span", $v, v($.name || "-"), 1)
            ]),
            "cell-description": E(({ row: $ }) => [
              c("span", Pv, v($.description || "-"), 1)
            ]),
            "cell-languageList": E(({ row: $ }) => [
              c("div", Fv, [
                $.languageList && $.languageList.length > 0 ? (y(!0), w(ge, { key: 0 }, Ne($.languageList, (Q) => (y(), w("span", {
                  key: t(ii)(Q),
                  class: "category-lang-tag",
                  onClick: (Se) => k($.id, Q)
                }, v(t(i)(t(ka)(t(ii)(Q)))), 9, Vv))), 128)) : (y(), w("span", zv, "-")),
                g(t(Pi), {
                  class: "category-lang-edit-icon",
                  size: "14",
                  onClick: (Q) => t(o).openLangConfigDialog($.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-giftCount": E(({ row: $ }) => [
              c("span", Gv, v($.giftCount ?? 0), 1)
            ]),
            "cell-actions": E(({ row: $ }) => [
              g($t, {
                actions: O($)
              }, null, 8, ["actions"])
            ]),
            loading: E(() => [
              c("div", Bv, [
                x[13] || (x[13] = c("div", { class: "category-loading-spinner" }, null, -1)),
                c("span", Wv, v(t(i)(t(r).LOADING)), 1)
              ])
            ]),
            empty: E(() => [
              c("div", Hv, [
                c("span", Yv, v(t(i)(t(r).CREATE_CATEGORY_FIRST)), 1)
              ])
            ]),
            _: 1
          }, 8, ["data", "loading"])
        ]),
        g(Ae, {
          visible: L.value,
          "onUpdate:visible": x[5] || (x[5] = ($) => L.value = $),
          header: p.value ? t(i)(t(r).EDIT_CATEGORY) : t(i)(t(r).CREATE_CATEGORY),
          width: "500px",
          placement: "center",
          class: "gift-modal",
          "confirm-btn": {
            content: de.value ? t(i)(t(r).CREATING) : p.value ? t(i)(t(r).SAVE) : t(i)(t(r).CREATE),
            disabled: de.value || !m.value.categoryId.trim() || !m.value.name.trim(),
            loading: de.value,
            shape: "round"
          },
          "cancel-btn": { shape: "round" },
          "on-confirm": R
        }, {
          default: E(() => [
            g(he, {
              class: "gift-modal-body",
              "label-width": t(oi)(100),
              colon: !1
            }, {
              default: E(() => [
                g(ue, {
                  label: t(i)(t(r).CATEGORY_ID),
                  "required-mark": !0
                }, {
                  default: E(() => [
                    g(ae, {
                      modelValue: G.value,
                      "onUpdate:modelValue": x[2] || (x[2] = ($) => G.value = $),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_ID),
                      disabled: p.value,
                      status: t(J)(m.value.categoryId) > t(vi) ? "error" : "default",
                      tips: t(J)(m.value.categoryId) > t(vi) ? t(i)("Category ID max bytes", { max: t(vi) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(m.value.categoryId) > t(vi) }])
                        }, v(t(J)(m.value.categoryId)) + "/" + v(t(vi)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "disabled", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(ue, {
                  label: t(i)(t(r).CATEGORY_NAME),
                  "required-mark": !0
                }, {
                  default: E(() => [
                    g(ae, {
                      modelValue: q.value,
                      "onUpdate:modelValue": x[3] || (x[3] = ($) => q.value = $),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_NAME),
                      status: t(J)(m.value.name) > t(ot) ? "error" : "default",
                      tips: t(J)(m.value.name) > t(ot) ? t(i)("Category name max bytes", { max: t(ot) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(m.value.name) > t(ot) }])
                        }, v(t(J)(m.value.name)) + "/" + v(t(ot)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(ue, {
                  label: t(i)(t(r).DESCRIPTION)
                }, {
                  default: E(() => [
                    g(ae, {
                      modelValue: j.value,
                      "onUpdate:modelValue": x[4] || (x[4] = ($) => j.value = $),
                      placeholder: t(i)(t(r).ENTER_CATEGORY_DESCRIPTION),
                      status: t(J)(m.value.description) > t(st) ? "error" : "default",
                      tips: t(J)(m.value.description) > t(st) ? t(i)("Category desc max bytes", { max: t(st) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(m.value.description) > t(st) }])
                        }, v(t(J)(m.value.description)) + "/" + v(t(st)), 3)
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
        g(Ae, {
          visible: S.value,
          "onUpdate:visible": x[6] || (x[6] = ($) => S.value = $),
          header: t(i)(t(r).CATEGORY_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: t(i)(t(r).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": () => t(o).closeLangConfigDialog(),
          onConfirm: x[7] || (x[7] = ($) => t(o).closeLangConfigDialog())
        }, {
          default: E(() => [
            c("div", jv, [
              c("div", Xv, [
                (y(), w("svg", Kv, [...x[14] || (x[14] = [
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
              c("table", qv, [
                c("thead", null, [
                  c("tr", null, [
                    c("th", null, v(t(i)(t(r).LANGUAGE_TYPE)), 1),
                    c("th", null, v(t(i)(t(r).CATEGORY_NAME)), 1),
                    c("th", null, v(t(i)(t(r).CATEGORY_DESCRIPTION)), 1),
                    c("th", null, v(t(i)(t(r).ACTIONS)), 1)
                  ])
                ]),
                c("tbody", null, [
                  (y(!0), w(ge, null, Ne(t(Da), ($) => (y(), w("tr", { key: $ }, [
                    c("td", null, v(t(i)(t(Ut)[$].label)), 1),
                    c("td", Zv, [
                      h.value[$].name ? (y(), w(ge, { key: 0 }, [
                        B(v(h.value[$].name), 1)
                      ], 64)) : (y(), w("span", Qv, v(t(i)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", Jv, [
                      h.value[$].description ? (y(), w(ge, { key: 0 }, [
                        B(v(h.value[$].description), 1)
                      ], 64)) : (y(), w("span", em, v(t(i)(t(r).NOT_CONFIGURED)), 1))
                    ]),
                    c("td", null, [
                      g($t, {
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
        g(Ae, {
          visible: T.value,
          "onUpdate:visible": x[10] || (x[10] = ($) => T.value = $),
          header: f.value ? t(i)(t(r).EDIT_CATEGORY_LANGUAGE_INFO, { lang: t(i)(t(Ut)[f.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: t(i)(t(r).SAVE), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: M
        }, {
          default: E(() => [
            g(he, {
              class: "gift-modal-body",
              "label-width": t(oi)(100),
              colon: !1
            }, {
              default: E(() => [
                g(ue, {
                  label: t(i)(t(r).CATEGORY_NAME)
                }, {
                  default: E(() => [
                    g(ae, {
                      modelValue: te.value,
                      "onUpdate:modelValue": x[8] || (x[8] = ($) => te.value = $),
                      placeholder: f.value ? t(i)(t(r).ENTER_LANGUAGE_CATEGORY_NAME, { lang: t(i)(t(Ut)[f.value].label) }) : "",
                      status: t(J)(b.value.name) > t(ot) ? "error" : "default",
                      tips: t(J)(b.value.name) > t(ot) ? t(i)(t(r).CATEGORY_NAME_MAX_BYTES, { max: t(ot) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(b.value.name) > t(ot) }])
                        }, v(t(J)(b.value.name)) + "/" + v(t(ot)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                g(ue, {
                  label: t(i)(t(r).CATEGORY_DESCRIPTION)
                }, {
                  default: E(() => [
                    g(ae, {
                      modelValue: le.value,
                      "onUpdate:modelValue": x[9] || (x[9] = ($) => le.value = $),
                      placeholder: f.value ? t(i)(t(r).ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: t(i)(t(Ut)[f.value].label) }) : "",
                      status: t(J)(b.value.description) > t(st) ? "error" : "default",
                      tips: t(J)(b.value.description) > t(st) ? t(i)(t(r).CATEGORY_DESC_MAX_BYTES, { max: t(st) }) : ""
                    }, {
                      suffix: E(() => [
                        c("span", {
                          class: be(["input-suffix-count", { "byte-overflow": t(J)(b.value.description) > t(st) }])
                        }, v(t(J)(b.value.description)) + "/" + v(t(st)), 3)
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
        g(Ae, {
          visible: ee.value,
          "onUpdate:visible": x[11] || (x[11] = ($) => ee.value = $),
          header: t(i)(t(r).CONFIRM_DELETE_CATEGORY),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: t(i)(t(r).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: x[12] || (x[12] = ($) => t(o).confirmDelete())
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
let Le = null, tm = !0;
const bn = C([]), ba = C(!0), ya = C(null), im = C({}), nm = C(null);
let xe = null;
const ki = C([]), yn = C(1), En = C(!0), _n = C(!1);
function Ea() {
  return xe || (xe = new $s({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: e, pageCursors: n, count: i }) => {
      if (!Le)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const o = await Rs({
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
    ki.value = e.pageData, yn.value = e.currentPage, En.value = e.hasMore, _n.value = e.loading, bn.value = [...e.pageData];
  }), xe);
}
function Pt() {
  const e = () => {
    Le || (Le = new Ss({
      onStateChange: (T) => {
        T.liveList !== void 0 && (bn.value = T.liveList), T.hasMore !== void 0 && (ba.value = T.hasMore), T.currentLive !== void 0 && (ya.value = T.currentLive), T.loading !== void 0 && (im.value = T.loading), T.error !== void 0 && (nm.value = T.error);
      },
      getActive: () => tm
    }), console.log("[useLiveMonitorState] Core initialized (singleton)"));
  };
  return tt(() => {
    console.log("[useLiveMonitorState] Component unmounted, core kept for other consumers");
  }), At(() => {
    if (e(), Ea(), xe) {
      const T = xe.getSnapshot();
      ki.value = T.pageData, yn.value = T.currentPage, En.value = T.hasMore, _n.value = T.loading;
    }
  }), Le || e(), Ea(), {
    init: (T) => {
      if (console.log("[useLiveMonitorState] init called", { hasCore: !!Le, configKeys: Object.keys(T) }), Le || (console.warn("[useLiveMonitorState] core is null, initializing..."), e(), console.log("[useLiveMonitorState] after initCore, hasCore:", !!Le)), !Le) {
        console.error("[useLiveMonitorState] core is still null after initCore! Cannot initialize.");
        return;
      }
      Le.init(T), xe == null || xe.goToFirstPage().catch((ee) => {
        console.error("[useLiveMonitorState] Failed to load first page:", ee);
      });
    },
    liveList: bn,
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
      currentPage: yn,
      hasMore: En,
      loading: _n,
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
  Ir as g,
  cl as h,
  Ar as i,
  fm as l,
  kn as u
};
