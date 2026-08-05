import { defineComponent as Ne, resolveComponent as de, openBlock as p, createElementBlock as w, createElementVNode as l, toDisplayString as m, unref as e, createVNode as M, withCtx as $, createTextVNode as ie, ref as I, computed as O, onMounted as Ie, watch as G, onBeforeUnmount as aa, normalizeClass as Pe, normalizeStyle as pe, createCommentVNode as te, Fragment as ce, renderList as _e, createBlock as ue, withModifiers as Re, nextTick as Se, onUnmounted as ke, inject as ta } from "vue";
import { useRouter as De } from "vue-router";
import { SearchIcon as na, RefreshIcon as oa, FullscreenIcon as ye, CloseIcon as ra, SoundMuteIcon as sa, SoundIcon as la, NotificationIcon as ia, StopCircleIcon as ca } from "tdesign-icons-vue-next";
import { MessagePlugin as ae } from "tdesign-vue-next";
import { useUIKit as we } from "@tencentcloud/uikit-base-component-vue3";
import { useLiveMonitorState as Me, usePaginatedList as ua, useConfirmAction as da } from "../../vue.js";
import { I as s, c as Te, p as Le, A as va, u as Fe, t as ga, ak as j, aY as me, F as ha, E as fa, a as pa, a$ as ma, b5 as Ia, aH as _a, b6 as ya } from "../../chunks/shared-state.CsnQDWhV.js";
import { g as Ce, T as Ee, s as Oe, p as Ca, d as Ea, t as Na, f as Sa, b$ as wa, bx as Ma, by as Ta, bH as ba, bD as Aa, bz as Pa, bA as Ra } from "../../chunks/main-layout.Dt5HcQRZ.js";
import { _ as $e } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as La } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.B17SM1-g.js";
import { _ as Oa } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.BkpQ2ANo.js";
import { s as ka, V as Da } from "../../chunks/violation-labels-poller.CpqJAOLK.js";
import { c as Fa } from "../../chunks/mock.Bnui3Fqh.js";
const $a = { class: "monitor-header" }, Va = { class: "monitor-title-section" }, xa = { class: "monitor-title" }, Ua = { class: "monitor-header-actions" }, Ha = /* @__PURE__ */ Ne({
  __name: "MonitorHeader",
  props: {
    searchInput: {},
    refreshing: { type: Boolean },
    searching: { type: Boolean, default: !1 }
  },
  emits: ["update:searchInput", "search", "clearSearch", "refresh"],
  setup(n, { emit: C }) {
    const g = C, { t } = we(), y = (S) => {
      g("update:searchInput", String(S ?? ""));
    }, f = () => {
      g("search");
    }, W = () => {
      g("clearSearch");
    }, V = () => {
      g("refresh");
    };
    return (S, E) => {
      const h = de("t-input"), v = de("t-button");
      return p(), w("div", $a, [
        l("div", Va, [
          l("h2", xa, m(e(t)(e(s).LIVE_MONITOR)), 1)
        ]),
        l("div", Ua, [
          M(h, {
            "model-value": n.searchInput,
            placeholder: e(t)(e(s).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            loading: n.searching,
            disabled: n.searching,
            status: e(Ce)(n.searchInput) > e(Ee) ? "error" : "default",
            tips: e(Ce)(n.searchInput) > e(Ee) ? e(t)(e(s).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": y,
            onEnter: f,
            onClear: W
          }, {
            "suffix-icon": $(() => [
              M(e(na), {
                style: { cursor: "pointer" },
                onClick: E[0] || (E[0] = () => f())
              })
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "loading", "disabled", "status", "tips"]),
          M(v, {
            theme: "primary",
            variant: "outline",
            shape: "round",
            loading: n.refreshing,
            onClick: V
          }, {
            icon: $(() => [
              M(e(oa))
            ]),
            default: $(() => [
              ie(" " + m(e(t)(e(s).REFRESH)), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), Ga = /* @__PURE__ */ $e(Ha, [["__scopeId", "data-v-289bb020"]]), Wa = ["id"], Ba = ["src", "alt"], za = ["id"], Ka = ["title"], Ya = {
  key: 0,
  class: "tag-more-wrapper"
}, ja = { class: "live-card-tag-dropdown" }, qa = { class: "overlay-btn primary" }, Xa = { class: "live-card-info" }, Ja = ["title"], Qa = { class: "live-card-meta" }, Za = { class: "live-card-anchor" }, et = ["title"], at = ["title"], tt = /* @__PURE__ */ Ne({
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
  setup(n, { emit: C }) {
    const g = Te("LiveCard"), t = n, y = C, { t: f } = we(), { startPlay: W, stopPlay: V } = Me(), S = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, E = I(!1), h = I("");
    let v = 0;
    const N = O(() => t.isFullscreen && t.fullscreenLiveId === t.card.liveId), P = O(() => t.card.tags.slice(0, t.adaptiveResult.visibleCount)), T = O(() => t.card.tags.slice(t.adaptiveResult.visibleCount)), R = O(() => t.card.stats?.viewCount ?? 0), _ = O(() => `live_monitor_view_${t.card.liveId}`), B = I(null), x = O(() => S ? Le : t.card.backgroundUrl || t.card.coverUrl || ""), b = O(() => {
      const d = x.value;
      return d ? { backgroundImage: `url(${d})` } : {};
    });
    function q() {
      const d = B.value, a = x.value;
      d && a && (d.style.backgroundImage = `url(${a})`);
    }
    Ie(() => {
      q();
    }), G(x, () => {
      q();
    });
    const k = async () => {
      const d = t.card.liveId;
      if (g.debug("startPlay", "startCardPlay called", { liveId: d, isMockMode: S }), S || !d) {
        g.debug("startPlay", "Skipping play", { isMockMode: S, liveId: d });
        return;
      }
      const a = ++v;
      if (await Se(), a !== v) {
        g.debug("startPlay", "Version mismatch, aborting", { currentVersion: a, playVersion: v });
        return;
      }
      try {
        g.debug("startPlay", "Calling startPlay", { liveId: d, containerId: _.value }), await W({ liveId: d, containerId: _.value }), a === v && (h.value = d, g.debug("startPlay", "startPlay success", { liveId: d }));
      } catch (o) {
        g.error("startPlay", "startPlay failed", { liveId: d, error: o }), a === v && y("playError", o, d);
      }
    }, U = async (d = h.value || t.card.liveId) => {
      v += 1, !(S || !d) && (h.value === d && (h.value = ""), await V(d).catch(() => {
      }));
    };
    Ie(() => {
      k();
    }), G(
      () => t.card.liveId,
      async (d, a) => {
        a && a !== d && await U(a), k();
      }
    ), aa(() => {
      U();
    });
    const X = () => {
      E.value = !0, y("hover", t.card.liveId);
    }, ne = () => {
      E.value = !1, y("hover", null);
    }, J = () => {
      g.debug("viewDetails", "handleViewDetails called, liveId:", t.card.liveId), y("viewDetails", t.card.liveId);
    }, oe = (d) => {
      g.debug("cardClick", "handleCardClick called");
      const a = d.target;
      !a.closest(".live-card-actions") && !a.closest(".fullscreen-close") && !a.closest(".fullscreen-mute") && (g.debug("cardClick", "emitting viewDetails from handleCardClick, liveId:", t.card.liveId), y("viewDetails", t.card.liveId));
    }, re = () => {
      y("violationWarning", t.card.liveId, t.card.liveName || f(s.UNNAMED_LIVE));
    }, se = () => {
      y("forceStop", t.card.liveId, t.card.liveName || f(s.UNNAMED_LIVE));
    }, Q = () => {
      y("toggleMute", t.card.liveId);
    }, Z = () => {
      y("exitFullscreen");
    }, ee = (d) => {
      const a = d.target;
      a.src = Le;
    };
    return (d, a) => {
      const o = de("t-button");
      return p(), w("div", {
        class: Pe(["live-card", { hovered: E.value }]),
        onMouseenter: X,
        onMouseleave: ne,
        onClick: oe
      }, [
        l("div", {
          id: n.card.liveId,
          class: "live-video-container"
        }, [
          l("div", {
            ref_key: "bgRef",
            ref: B,
            class: "live-video-bg",
            style: pe(b.value)
          }, null, 4),
          e(S) && n.card.coverUrl ? (p(), w("img", {
            key: 0,
            src: n.card.coverUrl,
            alt: n.card.liveName || "",
            class: "live-card-cover-image",
            onError: ee
          }, null, 40, Ba)) : te("", !0),
          l("div", {
            id: _.value,
            class: "live-video-player"
          }, null, 8, za),
          l("div", {
            class: "live-id-badge",
            style: pe({ maxWidth: n.adaptiveResult.idMaxWidth })
          }, [
            l("span", {
              title: n.card.liveId
            }, m(`${e(f)(e(s).LIVE_ID)}: ${n.card.liveId}`), 9, Ka)
          ], 4),
          n.card.tags && n.card.tags.length > 0 ? (p(), w("div", {
            key: 1,
            class: "live-card-tags-overlay",
            style: pe({ maxWidth: n.adaptiveResult.tagsMaxWidth })
          }, [
            (p(!0), w(ce, null, _e(P.value, (u) => (p(), w("span", {
              key: u,
              class: "live-card-tag-overlay"
            }, [
              a[0] || (a[0] = l("svg", {
                class: "shield-icon",
                viewBox: "0 0 24 24",
                width: "14",
                height: "14"
              }, [
                l("path", {
                  d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                  fill: "white",
                  stroke: "white",
                  "stroke-width": "0.5"
                }),
                l("text", {
                  x: "12",
                  y: "16",
                  "text-anchor": "middle",
                  fill: "#f59e0b",
                  "font-size": "12",
                  "font-weight": "bold"
                }, "!")
              ], -1)),
              ie(" " + m(e(f)(u)), 1)
            ]))), 128)),
            n.adaptiveResult.showMore ? (p(), w("div", Ya, [
              a[2] || (a[2] = l("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              l("div", ja, [
                (p(!0), w(ce, null, _e(T.value, (u) => (p(), w("span", {
                  key: u,
                  class: "live-card-tag-overlay"
                }, [
                  a[1] || (a[1] = l("svg", {
                    class: "shield-icon",
                    viewBox: "0 0 24 24",
                    width: "14",
                    height: "14"
                  }, [
                    l("path", {
                      d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                      fill: "white",
                      stroke: "white",
                      "stroke-width": "0.5"
                    }),
                    l("text", {
                      x: "12",
                      y: "16",
                      "text-anchor": "middle",
                      fill: "#f59e0b",
                      "font-size": "12",
                      "font-weight": "bold"
                    }, "!")
                  ], -1)),
                  ie(" " + m(e(f)(u)), 1)
                ]))), 128))
              ])
            ])) : te("", !0)
          ], 4)) : te("", !0),
          l("div", {
            class: "live-video-overlay",
            onClick: J
          }, [
            l("div", qa, [
              M(e(ye)),
              ie(" " + m(e(f)(e(s).VIEW_DETAILS)), 1)
            ])
          ]),
          N.value ? (p(), w(ce, { key: 2 }, [
            l("button", {
              class: "fullscreen-close",
              onClick: Z
            }, [
              M(e(ra))
            ]),
            l("button", {
              class: "fullscreen-mute",
              onClick: Q
            }, [
              n.isMuted ? (p(), ue(e(sa), { key: 0 })) : (p(), ue(e(la), { key: 1 }))
            ])
          ], 64)) : te("", !0)
        ], 8, Wa),
        l("div", Xa, [
          l("div", {
            class: "live-card-title",
            title: n.card.liveName || e(f)(e(s).UNNAMED_LIVE)
          }, m(n.card.liveName || e(f)(e(s).UNNAMED_LIVE)), 9, Ja),
          l("div", Qa, [
            l("div", Za, [
              M(La, {
                "class-name": "anchor-avatar",
                src: n.anchorAvatar,
                name: n.anchorName,
                title: n.anchorName
              }, null, 8, ["src", "name", "title"]),
              l("span", {
                class: "anchor-name",
                title: n.anchorName
              }, m(n.anchorName), 9, et)
            ]),
            l("span", {
              class: "meta-viewer-count",
              title: String(R.value)
            }, m(`${R.value}${e(f)(e(s).VIEWS)}`), 9, at)
          ])
        ]),
        l("div", {
          class: Pe(["live-card-actions", { show: E.value }])
        }, [
          M(o, {
            class: "card-action",
            variant: "text",
            theme: "warning",
            onClick: Re(re, ["stop"])
          }, {
            icon: $(() => [
              M(e(ia))
            ]),
            default: $(() => [
              l("span", null, m(e(f)(e(s).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          M(o, {
            class: "card-action",
            variant: "text",
            theme: "danger",
            onClick: Re(se, ["stop"])
          }, {
            icon: $(() => [
              M(e(ca))
            ]),
            default: $(() => [
              l("span", null, m(e(f)(e(s).FORCE_STOP)), 1)
            ]),
            _: 1
          })
        ], 2)
      ], 34);
    };
  }
});
function nt(n, C) {
  const g = I(/* @__PURE__ */ new Map()), t = new va({
    containerSelector: ".live-monitor-grid",
    t: C
  }), y = () => {
    g.value = new Map(t.getCache());
  }, f = (h) => {
    const v = g.value.get(h);
    if (v) return v;
    const N = t.getResult(h);
    return t.cache.has(h) || Se(() => {
      const T = n()?.find((R) => R.liveId === h);
      T && T.tags && (t.compute(h, { liveId: h, tags: T.tags }), y());
    }), N;
  };
  return {
    adaptiveTagMap: g,
    getAdaptiveResult: f,
    getVisibleTags: (h, v) => {
      const N = f(v);
      return h.slice(0, N.visibleCount);
    },
    initResizeObserver: () => {
      t.observe(() => {
        y();
      });
    },
    cleanupResizeObserver: () => {
      t.disconnect();
    },
    initAdaptiveTags: (h) => {
      t.initForList(
        h.map((v) => ({
          liveId: String(v.liveId ?? ""),
          tags: Array.isArray(v.tags) ? v.tags : []
        }))
      ), y();
    }
  };
}
const H = Te("LiveMonitorData");
function ot(n, C) {
  const { t: g, stopPlay: t } = C, { opSuccess: y, opFailed: f } = Fe(g), W = De(), V = I(!1), S = I(!1), E = I(!1), h = I(!1), v = I(""), N = I(null), P = I(/* @__PURE__ */ new Map()), T = I(/* @__PURE__ */ new Map()), R = I(/* @__PURE__ */ new Set()), _ = I(!1), B = Oe(), x = Oe();
  Ca(
    B,
    wa((a) => a.length > 0),
    ka((a) => Sa(ga(a))),
    Na(x),
    Ea(
      (a) => {
        if (_.value) return;
        const o = new Map(T.value);
        a.forEach((u, c) => {
          o.set(c, u);
        }), T.value = o;
      },
      (a) => {
        H.error("useLiveMonitorData", `Fastrx profile fetch failed (ErrorCode: ${j(a).code || "N/A"}):`, a);
      }
    )
  ), G(
    () => n.pageData.value,
    (a) => {
      if (!a || a.length === 0) return;
      const o = a.map((c) => c.anchor?.userId || "").filter(Boolean);
      if (o.length === 0) return;
      const u = o.filter((c) => !T.value.has(c));
      u.length !== 0 && B.next(u);
    },
    { immediate: !0 }
  ), G(
    () => document.documentElement.lang,
    () => {
      T.value = /* @__PURE__ */ new Map();
      const a = n.pageData.value;
      if (a && a.length > 0) {
        const o = a.map((u) => u.anchor?.userId || "").filter(Boolean);
        o.length > 0 && B.next(o);
      }
    }
  );
  const b = (...a) => {
    const o = [];
    for (const u of a)
      for (const c of u || [])
        c && !o.includes(c) && o.push(c);
    return o;
  }, q = (a) => String(a.liveId || a.id || a.RoomId || ""), k = () => {
    const a = /* @__PURE__ */ new Date(), o = new Date(a.getTime() - 600 * 1e3), u = (c) => {
      const L = c.getFullYear(), z = String(c.getMonth() + 1).padStart(2, "0"), ve = String(c.getDate()).padStart(2, "0"), K = String(c.getHours()).padStart(2, "0"), he = String(c.getMinutes()).padStart(2, "0"), fe = String(c.getSeconds()).padStart(2, "0");
      return `${L}-${z}-${ve} ${K}:${he}:${fe}`;
    };
    return {
      startTime: u(o),
      endTime: u(a)
    };
  }, U = new Da({
    getTimeRange: k,
    isSearchMode: () => h.value,
    isUnmounted: () => _.value,
    onUpdate: (a, o) => {
      const u = new Map(P.value);
      a.forEach((c) => {
        u.set(c, o.get(c) || []);
      }), P.value = u;
    },
    onError: (a) => {
      H.warn("LiveMonitor", "获取直播间违规标签失败:", a);
    }
  });
  U.ensureStarted(), G(
    () => [...n.pageData.value || []].map((a) => [a.liveId, a.liveName, a.activityStatus].join(":")).join("|"),
    (a, o) => {
      if (!a || _.value || h.value) return;
      const u = n.pageData.value || [];
      u.length !== 0 && U.feed(u);
    }
  ), G(
    () => [n.loading.value, n.pageData.value?.length],
    ([a, o]) => {
      a || (V.value = (o || 0) > 0);
    },
    { immediate: !0 }
  );
  const X = async (a, o, u) => {
    if (!n.loading.value)
      try {
        !o && u <= 1 && a > 1 ? await n.prevPage() : await n.refreshCurrentPage();
      } catch (c) {
        H.error("closeLiveSuccess 翻页失败", `(ErrorCode: ${j(c).code || "N/A"})`, c);
      }
  }, ne = async () => {
    if (!n.loading.value)
      try {
        await n.prevPage();
        const a = n.pageData.value || [];
        R.value = new Set(a.map((o) => o.liveId));
      } catch (a) {
        H.error("prevPage 失败", `(ErrorCode: ${j(a).code || "N/A"})`, a);
      }
  }, J = async () => {
    if (!n.loading.value)
      try {
        await n.nextPage();
        const a = n.pageData.value || [];
        R.value = new Set(a.map((o) => o.liveId));
      } catch (a) {
        H.error("nextPage 失败", `(ErrorCode: ${j(a).code || "N/A"})`, a);
      }
  }, oe = async () => {
    if (!n.loading.value)
      try {
        await n.goToFirstPage();
        const a = n.pageData.value || [];
        R.value = new Set(a.map((o) => o.liveId));
      } catch (a) {
        H.error("goToFirstPage 失败", `(ErrorCode: ${j(a).code || "N/A"})`, a);
      }
  }, re = async (a) => {
    const o = String(a ?? v.value).trim();
    if (!o) return;
    if (Ce(o) > Ee) {
      ae.error(g(s.INPUT_TOO_LONG));
      return;
    }
    v.value !== o && (v.value = o);
    const u = o;
    U.stop(), S.value = !0;
    try {
      const { fetchLiveDetail: c } = Me(), L = await c(u);
      if (_.value) return;
      if (!L) {
        me("live_search", "search", !1, o), ae.error(`${g(s.NO_SEARCH_RESULTS_FOR, { keyword: o })}
${g(s.SEARCH_EXACT_ID_HINT)}`), v.value = "", N.value = null, await n.goToFirstPage();
        return;
      }
      h.value = !0, N.value = [L];
      const z = L.liveId;
      if (R.value.add(z), _.value) {
        await t(z);
        return;
      }
      me("live_search", "search", !0, o);
    } catch (c) {
      H.error("搜索直播间失败", `(ErrorCode: ${j(c).code || "N/A"})`, c);
      const L = c;
      if (c === 2025 || c === 70005 || typeof L != "number" && L.message?.includes("USER_SIG_ILLEGAL")) {
        ha(), fa(), localStorage.removeItem("tuiLiveMonitor-userInfo"), W.push("/config-required");
        return;
      }
      me("live_search", "search", !1), ae.error(`${g(s.NO_SEARCH_RESULTS_FOR, { keyword: o })}
${g(s.SEARCH_EXACT_ID_HINT)}`), v.value = "", N.value = null, await n.goToFirstPage();
    } finally {
      _.value || (S.value = !1);
    }
  }, se = async () => {
    if (n.loading.value) return;
    const a = h.value;
    if (v.value = "", h.value = !1, N.value = null, !!a)
      try {
        await n.goToFirstPage();
      } catch (o) {
        H.error("handleClearSearch 翻页失败", `(ErrorCode: ${j(o).code || "N/A"})`, o);
      }
  }, Q = async () => {
    if (!n.loading.value) {
      E.value = !0;
      try {
        h.value && (h.value = !1, v.value = ""), await n.refreshCurrentPage(), ae.success(y(s.REFRESH));
      } catch (a) {
        H.error("刷新失败", `(ErrorCode: ${j(a).code || "N/A"})`, a);
        const o = a, u = o.ErrorInfo || o.errorInfo || "";
        ae.error(`${f(s.REFRESH)}${u ? ` (${u})` : ""}`);
      } finally {
        _.value || (E.value = !1);
      }
    }
  }, Z = O(() => n.loading.value), ee = O(() => n.currentPage.value), d = O(() => n.hasMore.value);
  return ke(() => {
    _.value = !0, U.stop(), x.next();
  }), {
    // 分页状态（响应式 computed）
    currentPage: ee,
    hasMoreData: d,
    loading: Z,
    // 业务状态
    hasLiveData: V,
    searching: S,
    refreshing: E,
    isSearchMode: h,
    searchInput: v,
    searchResults: N,
    liveViolationLabelMap: P,
    userProfileMap: T,
    playingLiveIds: R,
    isUnmounted: _,
    // 方法
    handlePrevPage: ne,
    handleNextPage: J,
    handleGoToFirstPage: oe,
    handleSearch: re,
    handleClearSearch: se,
    handleRefresh: Q,
    handleCloseLiveSuccess: X,
    mergeTags: b,
    resolveLiveId: q
  };
}
const rt = { class: "live-monitor-page" }, st = { class: "live-monitor-grid" }, lt = {
  key: 0,
  class: "monitor-loading"
}, it = {
  key: 1,
  class: "monitor-empty"
}, ct = { class: "empty-icon" }, ut = { class: "empty-guide-title" }, dt = {
  key: 2,
  class: "monitor-empty"
}, vt = { class: "empty-icon" }, gt = { class: "empty-guide-title" }, ht = { class: "empty-guide-desc" }, ft = { class: "empty-guide-actions" }, pt = { style: { display: "none" } }, mt = /* @__PURE__ */ Ne({
  __name: "live-monitor",
  setup(n) {
    const C = Te("LiveMonitor"), g = De(), { t } = we(), { opSuccess: y, opFailed: f } = Fe(t);
    pa().components?.liveMonitor;
    const W = (r) => {
      const i = r.anchor?.userId || "";
      if (i && K.value) {
        const A = K.value.get(i) || K.value.get(i.toLowerCase());
        if (A?.avatarUrl)
          return A.avatarUrl;
      }
      return r.anchor?.avatarUrl || r.avatarUrl || Ma(r);
    }, V = (r) => {
      const i = r.anchor?.userId || "";
      if (i && K.value) {
        const A = K.value.get(i) || K.value.get(i.toLowerCase());
        if (A?.nick)
          return A.nick;
      }
      return r.anchor?.nick || Ta(r, t(s.UNKNOWN_HOST));
    }, { init: S, liveList: E, endLive: h, stopPlay: v } = Me(), N = ua(), P = ta("sdkReady", null), T = I(!1), R = I(""), _ = I(!1), B = I(null), x = I(0), b = I({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), q = I({ liveId: "", liveName: "" }), { confirmDialog: k, requestConfirm: U, cancelConfirm: X, executeWithConfirm: ne, loading: J } = da({
      operationName: t(s.SEND_VIOLATION_WARNING),
      action: async () => {
        const { liveId: r, liveName: i } = q.value;
        if (!r) throw new Error("liveId is required");
        const A = i || r;
        await ba(r, {
          violationType: t(s.VIOLATION_TYPE_WARNING),
          violationContent: t(s.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: A }),
          handleSuggestion: t(s.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      confirm: {
        title: t(s.CONFIRM_ACTION_TITLE, { action: t(s.SEND_VIOLATION_WARNING) }),
        content: t(s.VIOLATION_WARNING_CONFIRM_CONTENT),
        confirmText: t(s.CONFIRM)
      },
      errorMessage: f(s.OP_SEND),
      showSuccess: !0
    }), {
      getAdaptiveResult: oe,
      initResizeObserver: re,
      cleanupResizeObserver: se,
      initAdaptiveTags: Q
    } = nt(() => le.value, t), {
      currentPage: Z,
      hasMoreData: ee,
      loading: d,
      hasLiveData: a,
      searching: o,
      refreshing: u,
      isSearchMode: c,
      searchInput: L,
      searchResults: z,
      liveViolationLabelMap: ve,
      userProfileMap: K,
      playingLiveIds: he,
      isUnmounted: fe,
      handlePrevPage: Ve,
      handleNextPage: xe,
      handleGoToFirstPage: Ue,
      handleSearch: He,
      handleClearSearch: Ge,
      handleRefresh: We,
      handleCloseLiveSuccess: Be,
      mergeTags: ze
    } = ot(
      N,
      { stopPlay: v, t }
    ), le = O(() => (c.value && z.value ? z.value : E.value || []).map((i) => {
      const A = i.tags || [], D = ze(A, ve.value.get(i.liveId));
      return {
        ...i,
        tags: D
      };
    }));
    G(
      () => ve.value.size,
      (r) => {
        r !== 0 && Se(() => {
          Q(le.value || []);
        });
      },
      { flush: "post" }
    );
    const Ke = O(
      () => (E.value || []).map((r) => [
        r.liveId,
        r.liveName,
        r.coverUrl,
        r.onlineCount,
        r.stats?.viewCount,
        r.popularity,
        r.activityStatus,
        r.createdAt
      ].join(":")).join("|")
    );
    G(Ke, () => {
      x.value += 1;
    });
    const Ye = (r, i) => {
      q.value = { liveId: r, liveName: i }, U();
    }, je = (r, i) => {
      b.value = { visible: !0, liveId: r, liveName: i, closing: !1 };
    }, qe = async () => {
      const { liveId: r } = b.value;
      if (r) {
        b.value.closing = !0;
        try {
          await v(r), he.value.delete(r), await h(r), b.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, ae.success(y(s.FORCE_STOP, s.LIVE)), await Be(Z, ee, (E.value || []).length);
        } catch (i) {
          C.error("封禁直播失败", "", i), b.value.closing = !1;
        }
      }
    }, Xe = () => {
      b.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, Je = (r) => {
      C.debug("general", "handleClickDetails called with liveId:", r), ma("live_detail");
      try {
        const i = N.getSnapshot();
        Aa({
          currentPage: i.currentPage,
          pageCursors: i.pageCursors
        });
      } catch {
      }
      C.debug("Navigating to", "", `/live-control/${r}`), g.push({ path: `/live-control/${r}`, query: { from: "live-monitor" } });
    }, Qe = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, be = async () => {
      document.fullscreenElement ? T.value = !0 : (T.value = !1, R.value = "");
    };
    let Y = null, ge = null, Ae = null;
    const Ze = async () => {
      try {
        const r = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        Y || (Y = await Ia() ?? null, Y && Y.sdkAppId !== 0 && !_a() && ya({ userId: Y.userId, userSig: Y.userSig, sdkAppId: Y.sdkAppId, configured: !0 })), (Ae !== r || !ge) && (Ae = r, r === "admin" ? ge = Y : ge = await Pa("audience") ?? null);
        const i = ge;
        if (i && i.sdkAppId !== 0)
          try {
            const A = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
            if (S({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: i.sdkAppId,
                userId: i.userId,
                password: i.userSig
              },
              playerFactory: A ? Fa() : void 0
            }), C.debug("LiveMonitor", "Calling goToFirstPage, sdkReady:", P, ", sdkReady?.value:", P?.value), !P || P.value) {
              const D = Ra();
              D.pageToLoad > 1 ? (C.debug("LiveMonitor", "Restoring pagination state, page:", D.pageToLoad), await N.goToPage(D.pageToLoad, D.pageCursors), C.debug("LiveMonitor", "Pagination state restored to page", D.pageToLoad)) : await N.goToFirstPage(), _.value = !0;
            } else
              _.value = !0;
          } catch (A) {
            C.error("LiveMonitor", "initSDK inner error:", A), _.value = !0;
          }
        else
          C.warn("LiveMonitor", "account failed or sdkAppId is 0:", i), _.value = !0;
      } catch (r) {
        C.error("LiveMonitor", "initSDK outer error:", r), _.value = !0;
      }
    };
    return P && G(() => P.value, (r) => {
      r && N.goToFirstPage();
    }), Ie(() => {
      document.addEventListener("fullscreenchange", be), re(), Q(le.value || []), Ze();
    }), ke(() => {
      fe.value = !0, document.removeEventListener("fullscreenchange", be), se();
    }), (r, i) => {
      const A = de("t-button"), D = de("t-dialog");
      return p(), w("div", rt, [
        M(Ga, {
          "search-input": e(L),
          refreshing: e(u),
          searching: e(o),
          "onUpdate:searchInput": i[0] || (i[0] = (F) => L.value = F),
          onSearch: e(He),
          onClearSearch: e(Ge),
          onRefresh: e(We)
        }, null, 8, ["search-input", "refreshing", "searching", "onSearch", "onClearSearch", "onRefresh"]),
        l("div", st, [
          e(d) || !_.value ? (p(), w("div", lt, [
            i[4] || (i[4] = l("div", { class: "loading-spinner" }, null, -1)),
            l("span", null, m(e(t)(e(s).LOADING)), 1)
          ])) : e(c) && !e(z).length ? (p(), w("div", it, [
            l("div", ct, [
              M(e(ye), { size: "48px" })
            ]),
            l("p", ut, m(e(t)(e(s).NO_SEARCH_RESULTS_FOR, { keyword: e(L) })), 1)
          ])) : e(a) ? (p(), w(ce, { key: 3 }, [
            l("div", pt, "debug: liveList.length=" + m((e(E) || []).length) + ", mergedMonitorList.length=" + m(le.value.length) + ", hasLiveData=" + m(e(a)), 1),
            (p(!0), w(ce, null, _e(le.value, (F) => (p(), ue(tt, {
              key: `${x.value}:${F.liveId}`,
              card: F,
              "adaptive-result": e(oe)(F.liveId),
              "is-muted": F.isMuted ?? !1,
              "is-fullscreen": T.value,
              "fullscreen-live-id": R.value,
              "anchor-avatar": W(F),
              "anchor-name": V(F),
              onViewDetails: Je,
              onViolationWarning: Ye,
              onForceStop: je,
              onExitFullscreen: Qe,
              onHover: i[2] || (i[2] = (ea) => B.value = ea)
            }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]))), 128))
          ], 64)) : (p(), w("div", dt, [
            l("div", vt, [
              M(e(ye), { size: "48px" })
            ]),
            l("p", gt, m(e(t)(e(s).EMPTY_LIVE_MONITOR_TITLE)), 1),
            l("p", ht, m(e(t)(e(s).EMPTY_LIVE_MONITOR_DESC)), 1),
            l("div", ft, [
              M(A, {
                theme: "primary",
                shape: "round",
                class: "empty-guide-cta",
                onClick: i[1] || (i[1] = () => e(g).push("/live-list"))
              }, {
                default: $(() => [
                  ie(m(e(t)(e(s).GO_CREATE_LIVE)), 1)
                ]),
                _: 1
              })
            ])
          ]))
        ]),
        e(c) ? te("", !0) : (p(), ue(Oa, {
          key: 0,
          "current-page": e(Z),
          "has-more-data": e(ee),
          loading: e(d),
          onGoToFirstPage: e(Ue),
          onPrevPage: e(Ve),
          onNextPage: e(xe)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"])),
        M(D, {
          visible: b.value.visible,
          "onUpdate:visible": i[3] || (i[3] = (F) => b.value.visible = F),
          header: e(t)(e(s).CONFIRM_ACTION_TITLE, { action: e(t)(e(s).FORCE_STOP) }),
          "confirm-btn": { content: b.value.closing ? e(t)(e(s).CLOSING) : e(t)(e(s).CONFIRM_BAN_LIVE), loading: b.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: e(t)(e(s).CANCEL), disabled: b.value.closing, shape: "round" },
          onConfirm: qe,
          onCancel: Xe
        }, {
          default: $(() => [
            l("p", null, m(e(t)(e(s).FORCE_STOP_CONFIRM_CONTENT)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        e(k) ? (p(), ue(D, {
          key: 1,
          visible: e(k).visible,
          header: e(k).title,
          "confirm-btn": {
            content: e(k).confirmText ?? e(t)(e(s).CONFIRM),
            loading: e(J),
            shape: "round"
          },
          "cancel-btn": {
            content: e(t)(e(s).CANCEL),
            disabled: e(J),
            shape: "round"
          },
          onConfirm: e(ne),
          onCancel: e(X),
          onClose: e(X)
        }, {
          default: $(() => [
            l("p", null, m(e(k).content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn", "onConfirm", "onCancel", "onClose"])) : te("", !0)
      ]);
    };
  }
}), Rt = /* @__PURE__ */ $e(mt, [["__scopeId", "data-v-b8ed8a1a"]]);
export {
  Rt as default
};
