import { defineComponent as Ce, resolveComponent as de, openBlock as _, createElementBlock as A, createElementVNode as i, toDisplayString as y, unref as a, createVNode as L, withCtx as U, createTextVNode as ue, ref as m, computed as O, onMounted as me, watch as G, onBeforeUnmount as Qe, normalizeClass as Te, normalizeStyle as he, createCommentVNode as ae, Fragment as se, renderList as pe, createBlock as ie, withModifiers as Pe, nextTick as ye, onUnmounted as be, inject as Ze } from "vue";
import { useRouter as Re } from "vue-router";
import { SearchIcon as ea, RefreshIcon as aa, FullscreenIcon as Oe, CloseIcon as ta, SoundMuteIcon as na, SoundIcon as oa, NotificationIcon as ra, StopCircleIcon as la } from "tdesign-icons-vue-next";
import { MessagePlugin as Y } from "tdesign-vue-next";
import { useUIKit as Ne } from "@tencentcloud/uikit-base-component-vue3";
import { useLiveMonitorState as Se, usePaginatedList as sa, useConfirmAction as ia } from "../../vue.js";
import { c as we } from "../../chunks/logger.rNWqpx5t.js";
import { I as l, a7 as Ae, a as ke, b as ca, r as K, ab as ua, aa as da, h as va, S as ga, H as fa, U as ha } from "../../chunks/layout.C1lzYH2h.js";
import { g as Ie, P as _e, s as Le, p as ma, d as pa, t as Ia, f as _a, c6 as Ca, bD as ya, bE as Na, bN as Sa, bJ as wa, bF as Ea, bG as Ma } from "../../chunks/main-layout.QTEHh38b.js";
import { _ as De } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as Ta } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.DnJBxwMs.js";
import { _ as Pa } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.DRNYBffU.js";
import { A as Aa, s as La, V as ba } from "../../chunks/adaptive-tags-runtime.BIBVwV0n.js";
import { c as Ra } from "../../chunks/mock.Bnui3Fqh.js";
const Oa = { class: "monitor-header" }, ka = { class: "monitor-title-section" }, Da = { class: "monitor-title" }, Fa = { class: "monitor-header-actions" }, Va = /* @__PURE__ */ Ce({
  __name: "MonitorHeader",
  props: {
    searchInput: {},
    refreshing: { type: Boolean }
  },
  emits: ["update:searchInput", "search", "clearSearch", "refresh"],
  setup(n, { emit: N }) {
    const f = N, { t } = Ne(), p = (E) => {
      f("update:searchInput", String(E ?? ""));
    }, h = () => {
      f("search");
    }, W = () => {
      f("clearSearch");
    }, F = () => {
      f("refresh");
    };
    return (E, S) => {
      const g = de("t-input"), v = de("t-button");
      return _(), A("div", Oa, [
        i("div", ka, [
          i("h2", Da, y(a(t)(a(l).LIVE_MONITOR)), 1)
        ]),
        i("div", Fa, [
          L(g, {
            "model-value": n.searchInput,
            placeholder: a(t)(a(l).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            status: a(Ie)(n.searchInput) > a(_e) ? "error" : "default",
            tips: a(Ie)(n.searchInput) > a(_e) ? a(t)(a(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": p,
            onEnter: h,
            onClear: W
          }, {
            "suffix-icon": U(() => [
              L(a(ea), {
                style: { cursor: "pointer" },
                onClick: S[0] || (S[0] = () => h())
              })
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "status", "tips"]),
          L(v, {
            theme: "primary",
            variant: "outline",
            shape: "round",
            loading: n.refreshing,
            onClick: F
          }, {
            icon: U(() => [
              L(a(aa))
            ]),
            default: U(() => [
              ue(" " + y(a(t)(a(l).REFRESH)), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), xa = /* @__PURE__ */ De(Va, [["__scopeId", "data-v-85dc322f"]]), $a = ["id"], Ua = ["src", "alt"], Ga = ["id"], Wa = ["title"], Ha = {
  key: 0,
  class: "tag-more-wrapper"
}, Ba = { class: "live-card-tag-dropdown" }, za = { class: "overlay-btn primary" }, Ka = { class: "live-card-info" }, ja = ["title"], qa = { class: "live-card-meta" }, Ya = { class: "live-card-anchor" }, Xa = ["title"], Ja = ["title"], Qa = /* @__PURE__ */ Ce({
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
  setup(n, { emit: N }) {
    const f = we("LiveCard"), t = n, p = N, { t: h } = Ne(), { startPlay: W, stopPlay: F } = Se(), E = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, S = m(!1), g = m("");
    let v = 0;
    const w = O(() => t.isFullscreen && t.fullscreenLiveId === t.card.liveId), b = O(() => t.card.tags.slice(0, t.adaptiveResult.visibleCount)), T = O(() => t.card.tags.slice(t.adaptiveResult.visibleCount)), R = O(() => t.card.stats?.viewCount ?? 0), I = O(() => `live_monitor_view_${t.card.liveId}`), H = m(null), V = O(() => E ? Ae : t.card.backgroundUrl || t.card.coverUrl || ""), P = O(() => {
      const d = V.value;
      return d ? { backgroundImage: `url(${d})` } : {};
    });
    function j() {
      const d = H.value, e = V.value;
      d && e && (d.style.backgroundImage = `url(${e})`);
    }
    me(() => {
      j();
    }), G(V, () => {
      j();
    });
    const D = async () => {
      const d = t.card.liveId;
      if (f.info("startPlay", "startCardPlay called", { liveId: d, isMockMode: E }), E || !d) {
        f.info("startPlay", "Skipping play", { isMockMode: E, liveId: d });
        return;
      }
      const e = ++v;
      if (await ye(), e !== v) {
        f.info("startPlay", "Version mismatch, aborting", { currentVersion: e, playVersion: v });
        return;
      }
      try {
        f.info("startPlay", "Calling startPlay", { liveId: d, containerId: I.value }), await W({ liveId: d, containerId: I.value }), e === v && (g.value = d, f.info("startPlay", "startPlay success", { liveId: d }));
      } catch (o) {
        f.error("startPlay", "startPlay failed", { liveId: d, error: o }), e === v && p("playError", o, d);
      }
    }, x = async (d = g.value || t.card.liveId) => {
      v += 1, !(E || !d) && (g.value === d && (g.value = ""), await F(d).catch(() => {
      }));
    };
    me(() => {
      D();
    }), G(
      () => t.card.liveId,
      async (d, e) => {
        e && e !== d && await x(e), D();
      }
    ), Qe(() => {
      x();
    });
    const X = () => {
      S.value = !0, p("hover", t.card.liveId);
    }, te = () => {
      S.value = !1, p("hover", null);
    }, J = () => {
      f.info("viewDetails", "handleViewDetails called, liveId:", t.card.liveId), p("viewDetails", t.card.liveId);
    }, ne = (d) => {
      f.info("cardClick", "handleCardClick called");
      const e = d.target;
      !e.closest(".live-card-actions") && !e.closest(".fullscreen-close") && !e.closest(".fullscreen-mute") && (f.info("cardClick", "emitting viewDetails from handleCardClick, liveId:", t.card.liveId), p("viewDetails", t.card.liveId));
    }, oe = () => {
      p("violationWarning", t.card.liveId, t.card.liveName || h(l.UNNAMED_LIVE));
    }, re = () => {
      p("forceStop", t.card.liveId, t.card.liveName || h(l.UNNAMED_LIVE));
    }, Q = () => {
      p("toggleMute", t.card.liveId);
    }, Z = () => {
      p("exitFullscreen");
    }, ee = (d) => {
      const e = d.target;
      e.src = Ae;
    };
    return (d, e) => {
      const o = de("t-button");
      return _(), A("div", {
        class: Te(["live-card", { hovered: S.value }]),
        onMouseenter: X,
        onMouseleave: te,
        onClick: ne
      }, [
        i("div", {
          id: n.card.liveId,
          class: "live-video-container"
        }, [
          i("div", {
            ref_key: "bgRef",
            ref: H,
            class: "live-video-bg",
            style: he(P.value)
          }, null, 4),
          a(E) && n.card.coverUrl ? (_(), A("img", {
            key: 0,
            src: n.card.coverUrl,
            alt: n.card.liveName || "",
            class: "live-card-cover-image",
            onError: ee
          }, null, 40, Ua)) : ae("", !0),
          i("div", {
            id: I.value,
            class: "live-video-player"
          }, null, 8, Ga),
          i("div", {
            class: "live-id-badge",
            style: he({ maxWidth: n.adaptiveResult.idMaxWidth })
          }, [
            i("span", {
              title: n.card.liveId
            }, y(`${a(h)(a(l).LIVE_ID)}: ${n.card.liveId}`), 9, Wa)
          ], 4),
          n.card.tags && n.card.tags.length > 0 ? (_(), A("div", {
            key: 1,
            class: "live-card-tags-overlay",
            style: he({ maxWidth: n.adaptiveResult.tagsMaxWidth })
          }, [
            (_(!0), A(se, null, pe(b.value, (u) => (_(), A("span", {
              key: u,
              class: "live-card-tag-overlay"
            }, [
              e[0] || (e[0] = i("svg", {
                class: "shield-icon",
                viewBox: "0 0 24 24",
                width: "14",
                height: "14"
              }, [
                i("path", {
                  d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                  fill: "white",
                  stroke: "white",
                  "stroke-width": "0.5"
                }),
                i("text", {
                  x: "12",
                  y: "16",
                  "text-anchor": "middle",
                  fill: "#f59e0b",
                  "font-size": "12",
                  "font-weight": "bold"
                }, "!")
              ], -1)),
              ue(" " + y(a(h)(u)), 1)
            ]))), 128)),
            n.adaptiveResult.showMore ? (_(), A("div", Ha, [
              e[2] || (e[2] = i("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              i("div", Ba, [
                (_(!0), A(se, null, pe(T.value, (u) => (_(), A("span", {
                  key: u,
                  class: "live-card-tag-overlay"
                }, [
                  e[1] || (e[1] = i("svg", {
                    class: "shield-icon",
                    viewBox: "0 0 24 24",
                    width: "14",
                    height: "14"
                  }, [
                    i("path", {
                      d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                      fill: "white",
                      stroke: "white",
                      "stroke-width": "0.5"
                    }),
                    i("text", {
                      x: "12",
                      y: "16",
                      "text-anchor": "middle",
                      fill: "#f59e0b",
                      "font-size": "12",
                      "font-weight": "bold"
                    }, "!")
                  ], -1)),
                  ue(" " + y(a(h)(u)), 1)
                ]))), 128))
              ])
            ])) : ae("", !0)
          ], 4)) : ae("", !0),
          i("div", {
            class: "live-video-overlay",
            onClick: J
          }, [
            i("div", za, [
              L(a(Oe)),
              ue(" " + y(a(h)(a(l).VIEW_DETAILS)), 1)
            ])
          ]),
          w.value ? (_(), A(se, { key: 2 }, [
            i("button", {
              class: "fullscreen-close",
              onClick: Z
            }, [
              L(a(ta))
            ]),
            i("button", {
              class: "fullscreen-mute",
              onClick: Q
            }, [
              n.isMuted ? (_(), ie(a(na), { key: 0 })) : (_(), ie(a(oa), { key: 1 }))
            ])
          ], 64)) : ae("", !0)
        ], 8, $a),
        i("div", Ka, [
          i("div", {
            class: "live-card-title",
            title: n.card.liveName || a(h)(a(l).UNNAMED_LIVE)
          }, y(n.card.liveName || a(h)(a(l).UNNAMED_LIVE)), 9, ja),
          i("div", qa, [
            i("div", Ya, [
              L(Ta, {
                "class-name": "anchor-avatar",
                src: n.anchorAvatar,
                name: n.anchorName,
                title: n.anchorName
              }, null, 8, ["src", "name", "title"]),
              i("span", {
                class: "anchor-name",
                title: n.anchorName
              }, y(n.anchorName), 9, Xa)
            ]),
            i("span", {
              class: "meta-viewer-count",
              title: String(R.value)
            }, y(`${R.value}${a(h)(a(l).VIEWS)}`), 9, Ja)
          ])
        ]),
        i("div", {
          class: Te(["live-card-actions", { show: S.value }])
        }, [
          L(o, {
            class: "card-action",
            variant: "text",
            theme: "warning",
            onClick: Pe(oe, ["stop"])
          }, {
            icon: U(() => [
              L(a(ra))
            ]),
            default: U(() => [
              i("span", null, y(a(h)(a(l).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          L(o, {
            class: "card-action",
            variant: "text",
            theme: "danger",
            onClick: Pe(re, ["stop"])
          }, {
            icon: U(() => [
              L(a(la))
            ]),
            default: U(() => [
              i("span", null, y(a(h)(a(l).FORCE_STOP)), 1)
            ]),
            _: 1
          })
        ], 2)
      ], 34);
    };
  }
});
function Za(n, N) {
  const f = m(/* @__PURE__ */ new Map()), t = new Aa({
    containerSelector: ".live-monitor-grid",
    t: N
  }), p = () => {
    f.value = new Map(t.getCache());
  }, h = (g) => {
    const v = f.value.get(g);
    if (v) return v;
    const w = t.getResult(g);
    return t.cache.has(g) || ye(() => {
      const T = n()?.find((R) => R.liveId === g);
      T && T.tags && (t.compute(g, { liveId: g, tags: T.tags }), p());
    }), w;
  };
  return {
    adaptiveTagMap: f,
    getAdaptiveResult: h,
    getVisibleTags: (g, v) => {
      const w = h(v);
      return g.slice(0, w.visibleCount);
    },
    initResizeObserver: () => {
      t.observe(() => {
        p();
      });
    },
    cleanupResizeObserver: () => {
      t.disconnect();
    },
    initAdaptiveTags: (g) => {
      t.initForList(
        g.map((v) => ({
          liveId: String(v.liveId ?? ""),
          tags: Array.isArray(v.tags) ? v.tags : []
        }))
      ), p();
    }
  };
}
const $ = we("LiveMonitorData");
function et(n, N) {
  const { t: f, stopPlay: t } = N, { opSuccess: p, opFailed: h } = ke(f), W = Re(), F = m(!1), E = m(!1), S = m(!1), g = m(!1), v = m(""), w = m(null), b = m(/* @__PURE__ */ new Map()), T = m(/* @__PURE__ */ new Map()), R = m(/* @__PURE__ */ new Set()), I = m(!1), H = Le(), V = Le();
  ma(
    H,
    Ca((e) => e.length > 0),
    La((e) => _a(ca(e))),
    Ia(V),
    pa(
      (e) => {
        if (I.value) return;
        const o = new Map(T.value);
        e.forEach((u, c) => {
          o.set(c, u);
        }), T.value = o;
      },
      (e) => {
        $.error("useLiveMonitorData", `Fastrx profile fetch failed (ErrorCode: ${K(e).code || "N/A"}):`, e);
      }
    )
  ), G(
    () => n.pageData.value,
    (e) => {
      if (!e || e.length === 0) return;
      const o = e.map((c) => c.anchor?.userId || "").filter(Boolean);
      if (o.length === 0) return;
      const u = o.filter((c) => !T.value.has(c));
      u.length !== 0 && H.next(u);
    },
    { immediate: !0 }
  ), G(
    () => document.documentElement.lang,
    () => {
      T.value = /* @__PURE__ */ new Map();
      const e = n.pageData.value;
      if (e && e.length > 0) {
        const o = e.map((u) => u.anchor?.userId || "").filter(Boolean);
        o.length > 0 && H.next(o);
      }
    }
  );
  const P = (...e) => {
    const o = [];
    for (const u of e)
      for (const c of u || [])
        c && !o.includes(c) && o.push(c);
    return o;
  }, j = (e) => String(e.liveId || e.id || e.RoomId || ""), D = () => {
    const e = /* @__PURE__ */ new Date(), o = new Date(e.getTime() - 600 * 1e3), u = (c) => {
      const k = c.getFullYear(), q = String(c.getMonth() + 1).padStart(2, "0"), B = String(c.getDate()).padStart(2, "0"), ve = String(c.getHours()).padStart(2, "0"), ge = String(c.getMinutes()).padStart(2, "0"), fe = String(c.getSeconds()).padStart(2, "0");
      return `${k}-${q}-${B} ${ve}:${ge}:${fe}`;
    };
    return {
      startTime: u(o),
      endTime: u(e)
    };
  }, x = new ba({
    getTimeRange: D,
    isSearchMode: () => g.value,
    isUnmounted: () => I.value,
    onUpdate: (e, o) => {
      const u = new Map(b.value);
      e.forEach((c) => {
        u.set(c, o.get(c) || []);
      }), b.value = u;
    },
    onError: (e) => {
      $.warn("LiveMonitor", "获取直播间违规标签失败:", e);
    }
  });
  x.ensureStarted(), G(
    () => [...n.pageData.value || []].map((e) => [e.liveId, e.liveName, e.activityStatus].join(":")).join("|"),
    (e, o) => {
      if (!e || I.value || g.value) return;
      const u = n.pageData.value || [];
      u.length !== 0 && x.feed(u);
    }
  ), G(
    () => [n.loading.value, n.pageData.value?.length],
    ([e, o]) => {
      e || (F.value = (o || 0) > 0);
    },
    { immediate: !0 }
  );
  const X = async (e, o, u) => {
    if (!n.loading.value)
      try {
        !o && u <= 1 && e > 1 ? await n.prevPage() : await n.refreshCurrentPage();
      } catch (c) {
        $.error("closeLiveSuccess 翻页失败", `(ErrorCode: ${K(c).code || "N/A"})`, c);
      }
  }, te = async () => {
    if (!n.loading.value)
      try {
        await n.prevPage();
        const e = n.pageData.value || [];
        R.value = new Set(e.map((o) => o.liveId));
      } catch (e) {
        $.error("prevPage 失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
      }
  }, J = async () => {
    if (!n.loading.value)
      try {
        await n.nextPage();
        const e = n.pageData.value || [];
        R.value = new Set(e.map((o) => o.liveId));
      } catch (e) {
        $.error("nextPage 失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
      }
  }, ne = async () => {
    if (!n.loading.value)
      try {
        await n.goToFirstPage();
        const e = n.pageData.value || [];
        R.value = new Set(e.map((o) => o.liveId));
      } catch (e) {
        $.error("goToFirstPage 失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
      }
  }, oe = async (e) => {
    const o = String(e ?? v.value).trim();
    if (!o) return;
    if (Ie(o) > _e) {
      Y.error(f(l.INPUT_TOO_LONG));
      return;
    }
    v.value !== o && (v.value = o);
    const u = o;
    x.stop(), E.value = !0;
    try {
      const { fetchLiveDetail: c } = Se(), k = await c(u);
      if (I.value) return;
      if (!k) {
        Y.error(f(l.NO_SEARCH_RESULTS_FOR, { keyword: o })), v.value = "", w.value = null, await n.goToFirstPage();
        return;
      }
      g.value = !0, w.value = [k];
      const q = k.liveId;
      if (R.value.add(q), I.value) {
        await t(q);
        return;
      }
      Y.success(p(l.OP_SEARCH, l.LIVE));
    } catch (c) {
      $.error("搜索直播间失败", `(ErrorCode: ${K(c).code || "N/A"})`, c);
      const k = c;
      if (c === 2025 || c === 70005 || typeof k != "number" && k.message?.includes("USER_SIG_ILLEGAL")) {
        ua(), da(), localStorage.removeItem("tuiLiveMonitor-userInfo"), W.push("/config-required");
        return;
      }
      Y.error(f(l.NO_SEARCH_RESULTS_FOR, { keyword: o })), v.value = "", w.value = null, await n.goToFirstPage();
    } finally {
      I.value || (E.value = !1);
    }
  }, re = async () => {
    if (n.loading.value) return;
    const e = g.value;
    if (v.value = "", g.value = !1, w.value = null, !!e)
      try {
        await n.goToFirstPage();
      } catch (o) {
        $.error("handleClearSearch 翻页失败", `(ErrorCode: ${K(o).code || "N/A"})`, o);
      }
  }, Q = async () => {
    if (!n.loading.value) {
      S.value = !0;
      try {
        g.value && (g.value = !1, v.value = ""), await n.refreshCurrentPage(), Y.success(p(l.REFRESH));
      } catch (e) {
        $.error("刷新失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
        const o = e, u = o.ErrorInfo || o.errorInfo || "";
        Y.error(`${h(l.REFRESH)}${u ? ` (${u})` : ""}`);
      } finally {
        I.value || (S.value = !1);
      }
    }
  }, Z = O(() => n.loading.value), ee = O(() => n.currentPage.value), d = O(() => n.hasMore.value);
  return be(() => {
    I.value = !0, x.stop(), V.next();
  }), {
    // 分页状态（响应式 computed）
    currentPage: ee,
    hasMoreData: d,
    loading: Z,
    // 业务状态
    hasLiveData: F,
    searching: E,
    refreshing: S,
    isSearchMode: g,
    searchInput: v,
    searchResults: w,
    liveViolationLabelMap: b,
    userProfileMap: T,
    playingLiveIds: R,
    isUnmounted: I,
    // 方法
    handlePrevPage: te,
    handleNextPage: J,
    handleGoToFirstPage: ne,
    handleSearch: oe,
    handleClearSearch: re,
    handleRefresh: Q,
    handleCloseLiveSuccess: X,
    mergeTags: P,
    resolveLiveId: j
  };
}
const at = { class: "live-monitor-page" }, tt = { class: "live-monitor-grid" }, nt = {
  key: 0,
  class: "monitor-loading"
}, ot = {
  key: 1,
  class: "monitor-empty"
}, rt = { class: "empty-icon" }, lt = { style: { display: "none" } }, st = /* @__PURE__ */ Ce({
  __name: "live-monitor",
  setup(n) {
    const N = we("LiveMonitor"), f = Re(), { t } = Ne(), { opSuccess: p, opFailed: h } = ke(t);
    va().components?.liveMonitor;
    const W = (r) => {
      const s = r.anchor?.userId || "";
      if (s && B.value) {
        const M = B.value.get(s) || B.value.get(s.toLowerCase());
        if (M?.avatarUrl)
          return M.avatarUrl;
      }
      return r.anchor?.avatarUrl || r.avatarUrl || ya(r);
    }, F = (r) => {
      const s = r.anchor?.userId || "";
      if (s && B.value) {
        const M = B.value.get(s) || B.value.get(s.toLowerCase());
        if (M?.nick)
          return M.nick;
      }
      return r.anchor?.nick || Na(r, t(l.UNKNOWN_HOST));
    }, { init: E, liveList: S, endLive: g, stopPlay: v } = Se(), w = sa(), b = Ze("sdkReady", null), T = m(!1), R = m(""), I = m(!1), H = m(null), V = m(0), P = m({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), j = m({ liveId: "", liveName: "" }), { confirmDialog: D, requestConfirm: x, cancelConfirm: X, executeWithConfirm: te, loading: J } = ia({
      operationName: t(l.SEND_VIOLATION_WARNING),
      action: async () => {
        const { liveId: r, liveName: s } = j.value;
        if (!r) throw new Error("liveId is required");
        const M = s || r;
        await Sa(r, {
          violationType: t(l.VIOLATION_TYPE_WARNING),
          violationContent: t(l.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: M }),
          handleSuggestion: t(l.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      confirm: {
        title: t(l.CONFIRM_ACTION_TITLE, { action: t(l.SEND_VIOLATION_WARNING) }),
        content: t(l.VIOLATION_WARNING_CONFIRM_CONTENT),
        confirmText: t(l.CONFIRM)
      },
      errorMessage: h(l.OP_SEND),
      showSuccess: !0
    }), {
      getAdaptiveResult: ne,
      initResizeObserver: oe,
      cleanupResizeObserver: re,
      initAdaptiveTags: Q
    } = Za(() => le.value, t), {
      currentPage: Z,
      hasMoreData: ee,
      loading: d,
      hasLiveData: e,
      refreshing: o,
      isSearchMode: u,
      searchInput: c,
      searchResults: k,
      liveViolationLabelMap: q,
      userProfileMap: B,
      playingLiveIds: ve,
      isUnmounted: ge,
      handlePrevPage: fe,
      handleNextPage: Fe,
      handleGoToFirstPage: Ve,
      handleSearch: xe,
      handleClearSearch: $e,
      handleRefresh: Ue,
      handleCloseLiveSuccess: Ge,
      mergeTags: We
    } = et(
      w,
      { stopPlay: v, t }
    ), le = O(() => (u.value && k.value ? k.value : S.value || []).map((s) => {
      const M = s.tags || [], C = We(M, q.value.get(s.liveId));
      return {
        ...s,
        tags: C
      };
    }));
    G(
      () => q.value.size,
      (r) => {
        r !== 0 && ye(() => {
          Q(le.value || []);
        });
      },
      { flush: "post" }
    );
    const He = O(
      () => (S.value || []).map((r) => [
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
    G(He, () => {
      V.value += 1;
    });
    const Be = (r, s) => {
      j.value = { liveId: r, liveName: s }, x();
    }, ze = (r, s) => {
      P.value = { visible: !0, liveId: r, liveName: s, closing: !1 };
    }, Ke = async () => {
      const { liveId: r } = P.value;
      if (r) {
        P.value.closing = !0;
        try {
          await v(r), ve.value.delete(r), await g(r), P.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, Y.success(p(l.FORCE_STOP, l.LIVE)), await Ge(Z, ee, (S.value || []).length);
        } catch (s) {
          N.error("封禁直播失败", "", s), P.value.closing = !1;
        }
      }
    }, je = () => {
      P.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, qe = (r) => {
      N.info("general", "handleClickDetails called with liveId:", r);
      try {
        const s = w.getSnapshot();
        wa({
          currentPage: s.currentPage,
          pageCursors: s.pageCursors
        });
      } catch {
      }
      N.info("Navigating to", "", `/live-control/${r}`), f.push({ path: `/live-control/${r}`, query: { from: "live-monitor" } });
    }, Ye = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, Ee = async () => {
      document.fullscreenElement ? T.value = !0 : (T.value = !1, R.value = "");
    };
    let z = null, ce = null, Me = null;
    const Xe = async () => {
      try {
        const r = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        z || (z = await ga() ?? null, z && z.sdkAppId !== 0 && !fa() && ha({ userId: z.userId, userSig: z.userSig, sdkAppId: z.sdkAppId, configured: !0 })), (Me !== r || !ce) && (Me = r, r === "admin" ? ce = z : ce = await Ea("audience") ?? null);
        const s = ce;
        if (s && s.sdkAppId !== 0)
          try {
            const M = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
            if (E({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: s.sdkAppId,
                userId: s.userId,
                password: s.userSig
              },
              playerFactory: M ? Ra() : void 0
            }), N.info("LiveMonitor", "Calling goToFirstPage, sdkReady:", b, ", sdkReady?.value:", b?.value), !b || b.value) {
              const C = Ma();
              C.pageToLoad > 1 ? (N.info("LiveMonitor", "Restoring pagination state, page:", C.pageToLoad), await w.goToPage(C.pageToLoad, C.pageCursors), N.info("LiveMonitor", "Pagination state restored to page", C.pageToLoad)) : await w.goToFirstPage(), I.value = !0;
            } else
              I.value = !0;
          } catch (M) {
            N.error("LiveMonitor", "initSDK inner error:", M), I.value = !0;
          }
        else
          N.warn("LiveMonitor", "account failed or sdkAppId is 0:", s), I.value = !0;
      } catch (r) {
        N.error("LiveMonitor", "initSDK outer error:", r), I.value = !0;
      }
    };
    return b && G(() => b.value, (r) => {
      r && w.goToFirstPage();
    }), me(() => {
      document.addEventListener("fullscreenchange", Ee), oe(), Q(le.value || []), Xe();
    }), be(() => {
      ge.value = !0, document.removeEventListener("fullscreenchange", Ee), re();
    }), (r, s) => {
      const M = de("t-dialog");
      return _(), A("div", at, [
        L(xa, {
          "search-input": a(c),
          refreshing: a(o),
          "onUpdate:searchInput": s[0] || (s[0] = (C) => c.value = C),
          onSearch: a(xe),
          onClearSearch: a($e),
          onRefresh: a(Ue)
        }, null, 8, ["search-input", "refreshing", "onSearch", "onClearSearch", "onRefresh"]),
        i("div", tt, [
          a(d) || !I.value ? (_(), A("div", nt, [
            s[3] || (s[3] = i("div", { class: "loading-spinner" }, null, -1)),
            i("span", null, y(a(t)(a(l).LOADING)), 1)
          ])) : a(e) ? (_(), A(se, { key: 2 }, [
            i("div", lt, "debug: liveList.length=" + y((a(S) || []).length) + ", mergedMonitorList.length=" + y(le.value.length) + ", hasLiveData=" + y(a(e)), 1),
            (_(!0), A(se, null, pe(le.value, (C) => (_(), ie(Qa, {
              key: `${V.value}:${C.liveId}`,
              card: C,
              "adaptive-result": a(ne)(C.liveId),
              "is-muted": C.isMuted ?? !1,
              "is-fullscreen": T.value,
              "fullscreen-live-id": R.value,
              "anchor-avatar": W(C),
              "anchor-name": F(C),
              onViewDetails: qe,
              onViolationWarning: Be,
              onForceStop: ze,
              onExitFullscreen: Ye,
              onHover: s[1] || (s[1] = (Je) => H.value = Je)
            }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]))), 128))
          ], 64)) : (_(), A("div", ot, [
            i("div", rt, [
              L(a(Oe))
            ]),
            i("p", null, y(a(t)(a(l).NO_LIVE_RIGHT_NOW)), 1)
          ]))
        ]),
        a(u) ? ae("", !0) : (_(), ie(Pa, {
          key: 0,
          "current-page": a(Z),
          "has-more-data": a(ee),
          loading: a(d),
          onGoToFirstPage: a(Ve),
          onPrevPage: a(fe),
          onNextPage: a(Fe)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"])),
        L(M, {
          visible: P.value.visible,
          "onUpdate:visible": s[2] || (s[2] = (C) => P.value.visible = C),
          header: a(t)(a(l).CONFIRM_ACTION_TITLE, { action: a(t)(a(l).FORCE_STOP) }),
          "confirm-btn": { content: P.value.closing ? a(t)(a(l).CLOSING) : a(t)(a(l).CONFIRM_BAN_LIVE), loading: P.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: a(t)(a(l).CANCEL), disabled: P.value.closing, shape: "round" },
          onConfirm: Ke,
          onCancel: je
        }, {
          default: U(() => [
            i("p", null, y(a(t)(a(l).FORCE_STOP_CONFIRM_CONTENT)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        a(D) ? (_(), ie(M, {
          key: 1,
          visible: a(D).visible,
          header: a(D).title,
          "confirm-btn": {
            content: a(D).confirmText ?? a(t)(a(l).CONFIRM),
            loading: a(J),
            shape: "round"
          },
          "cancel-btn": {
            content: a(t)(a(l).CANCEL),
            disabled: a(J),
            shape: "round"
          },
          onConfirm: a(te),
          onCancel: a(X),
          onClose: a(X)
        }, {
          default: U(() => [
            i("p", null, y(a(D).content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn", "onConfirm", "onCancel", "onClose"])) : ae("", !0)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ De(st, [["__scopeId", "data-v-fcf109bd"]]);
export {
  Nt as default
};
