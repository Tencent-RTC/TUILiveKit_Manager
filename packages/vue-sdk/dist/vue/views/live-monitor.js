import { defineComponent as Ce, resolveComponent as de, openBlock as _, createElementBlock as L, createElementVNode as i, toDisplayString as y, unref as a, createVNode as A, withCtx as U, createTextVNode as ue, ref as m, computed as O, onMounted as me, watch as W, onBeforeUnmount as Qe, normalizeClass as Te, normalizeStyle as he, createCommentVNode as ae, Fragment as le, renderList as pe, createBlock as ie, withModifiers as Pe, nextTick as ye, onUnmounted as Re, inject as Ze } from "vue";
import { useRouter as be } from "vue-router";
import { SearchIcon as ea, RefreshIcon as aa, FullscreenIcon as Oe, CloseIcon as ta, SoundMuteIcon as na, SoundIcon as oa, NotificationIcon as ra, StopCircleIcon as sa } from "tdesign-icons-vue-next";
import { MessagePlugin as q } from "tdesign-vue-next";
import { useUIKit as Ne } from "@tencentcloud/uikit-base-component-vue3";
import { useLiveMonitorState as Se, usePaginatedList as la, useConfirmAction as ia } from "../../vue.js";
import { I as s, h as we, aC as Le, at as ca, d as ke, c as ua, z as K, aM as da, aL as va, n as ga, aa as fa, af as ha, Y as ma, ag as pa } from "../../chunks/shared-state.Bf8CkvaR.js";
import { g as Ie, R as _e, s as Ae, p as Ia, e as _a, t as Ca, f as ya, bV as Na, bs as Sa, bt as wa, bB as Ea, bx as Ma, bu as Ta, bv as Pa } from "../../chunks/main-layout.OEkSp6vd.js";
import { _ as De } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as La } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.B4aLgOes.js";
import { _ as Aa } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.BGVSlg7G.js";
import { s as Ra, V as ba } from "../../chunks/violation-labels-poller.BLRVAuJB.js";
import { c as Oa } from "../../chunks/mock.Bnui3Fqh.js";
const ka = { class: "monitor-header" }, Da = { class: "monitor-title-section" }, Fa = { class: "monitor-title" }, Va = { class: "monitor-header-actions" }, xa = /* @__PURE__ */ Ce({
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
    }, G = () => {
      f("clearSearch");
    }, F = () => {
      f("refresh");
    };
    return (E, S) => {
      const g = de("t-input"), v = de("t-button");
      return _(), L("div", ka, [
        i("div", Da, [
          i("h2", Fa, y(a(t)(a(s).LIVE_MONITOR)), 1)
        ]),
        i("div", Va, [
          A(g, {
            "model-value": n.searchInput,
            placeholder: a(t)(a(s).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            status: a(Ie)(n.searchInput) > a(_e) ? "error" : "default",
            tips: a(Ie)(n.searchInput) > a(_e) ? a(t)(a(s).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": p,
            onEnter: h,
            onClear: G
          }, {
            "suffix-icon": U(() => [
              A(a(ea), {
                style: { cursor: "pointer" },
                onClick: S[0] || (S[0] = () => h())
              })
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "status", "tips"]),
          A(v, {
            theme: "primary",
            variant: "outline",
            shape: "round",
            loading: n.refreshing,
            onClick: F
          }, {
            icon: U(() => [
              A(a(aa))
            ]),
            default: U(() => [
              ue(" " + y(a(t)(a(s).REFRESH)), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), $a = /* @__PURE__ */ De(xa, [["__scopeId", "data-v-85dc322f"]]), Ua = ["id"], Wa = ["src", "alt"], Ga = ["id"], Ha = ["title"], Ba = {
  key: 0,
  class: "tag-more-wrapper"
}, za = { class: "live-card-tag-dropdown" }, Ka = { class: "overlay-btn primary" }, ja = { class: "live-card-info" }, Ya = ["title"], qa = { class: "live-card-meta" }, Xa = { class: "live-card-anchor" }, Ja = ["title"], Qa = ["title"], Za = /* @__PURE__ */ Ce({
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
    const f = we("LiveCard"), t = n, p = N, { t: h } = Ne(), { startPlay: G, stopPlay: F } = Se(), E = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, S = m(!1), g = m("");
    let v = 0;
    const w = O(() => t.isFullscreen && t.fullscreenLiveId === t.card.liveId), R = O(() => t.card.tags.slice(0, t.adaptiveResult.visibleCount)), T = O(() => t.card.tags.slice(t.adaptiveResult.visibleCount)), b = O(() => t.card.stats?.viewCount ?? 0), I = O(() => `live_monitor_view_${t.card.liveId}`), H = m(null), V = O(() => E ? Le : t.card.backgroundUrl || t.card.coverUrl || ""), P = O(() => {
      const d = V.value;
      return d ? { backgroundImage: `url(${d})` } : {};
    });
    function j() {
      const d = H.value, e = V.value;
      d && e && (d.style.backgroundImage = `url(${e})`);
    }
    me(() => {
      j();
    }), W(V, () => {
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
        f.info("startPlay", "Calling startPlay", { liveId: d, containerId: I.value }), await G({ liveId: d, containerId: I.value }), e === v && (g.value = d, f.info("startPlay", "startPlay success", { liveId: d }));
      } catch (o) {
        f.error("startPlay", "startPlay failed", { liveId: d, error: o }), e === v && p("playError", o, d);
      }
    }, x = async (d = g.value || t.card.liveId) => {
      v += 1, !(E || !d) && (g.value === d && (g.value = ""), await F(d).catch(() => {
      }));
    };
    me(() => {
      D();
    }), W(
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
      p("violationWarning", t.card.liveId, t.card.liveName || h(s.UNNAMED_LIVE));
    }, re = () => {
      p("forceStop", t.card.liveId, t.card.liveName || h(s.UNNAMED_LIVE));
    }, Q = () => {
      p("toggleMute", t.card.liveId);
    }, Z = () => {
      p("exitFullscreen");
    }, ee = (d) => {
      const e = d.target;
      e.src = Le;
    };
    return (d, e) => {
      const o = de("t-button");
      return _(), L("div", {
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
          a(E) && n.card.coverUrl ? (_(), L("img", {
            key: 0,
            src: n.card.coverUrl,
            alt: n.card.liveName || "",
            class: "live-card-cover-image",
            onError: ee
          }, null, 40, Wa)) : ae("", !0),
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
            }, y(`${a(h)(a(s).LIVE_ID)}: ${n.card.liveId}`), 9, Ha)
          ], 4),
          n.card.tags && n.card.tags.length > 0 ? (_(), L("div", {
            key: 1,
            class: "live-card-tags-overlay",
            style: he({ maxWidth: n.adaptiveResult.tagsMaxWidth })
          }, [
            (_(!0), L(le, null, pe(R.value, (u) => (_(), L("span", {
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
            n.adaptiveResult.showMore ? (_(), L("div", Ba, [
              e[2] || (e[2] = i("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              i("div", za, [
                (_(!0), L(le, null, pe(T.value, (u) => (_(), L("span", {
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
            i("div", Ka, [
              A(a(Oe)),
              ue(" " + y(a(h)(a(s).VIEW_DETAILS)), 1)
            ])
          ]),
          w.value ? (_(), L(le, { key: 2 }, [
            i("button", {
              class: "fullscreen-close",
              onClick: Z
            }, [
              A(a(ta))
            ]),
            i("button", {
              class: "fullscreen-mute",
              onClick: Q
            }, [
              n.isMuted ? (_(), ie(a(na), { key: 0 })) : (_(), ie(a(oa), { key: 1 }))
            ])
          ], 64)) : ae("", !0)
        ], 8, Ua),
        i("div", ja, [
          i("div", {
            class: "live-card-title",
            title: n.card.liveName || a(h)(a(s).UNNAMED_LIVE)
          }, y(n.card.liveName || a(h)(a(s).UNNAMED_LIVE)), 9, Ya),
          i("div", qa, [
            i("div", Xa, [
              A(La, {
                "class-name": "anchor-avatar",
                src: n.anchorAvatar,
                name: n.anchorName,
                title: n.anchorName
              }, null, 8, ["src", "name", "title"]),
              i("span", {
                class: "anchor-name",
                title: n.anchorName
              }, y(n.anchorName), 9, Ja)
            ]),
            i("span", {
              class: "meta-viewer-count",
              title: String(b.value)
            }, y(`${b.value}${a(h)(a(s).VIEWS)}`), 9, Qa)
          ])
        ]),
        i("div", {
          class: Te(["live-card-actions", { show: S.value }])
        }, [
          A(o, {
            class: "card-action",
            variant: "text",
            theme: "warning",
            onClick: Pe(oe, ["stop"])
          }, {
            icon: U(() => [
              A(a(ra))
            ]),
            default: U(() => [
              i("span", null, y(a(h)(a(s).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          A(o, {
            class: "card-action",
            variant: "text",
            theme: "danger",
            onClick: Pe(re, ["stop"])
          }, {
            icon: U(() => [
              A(a(sa))
            ]),
            default: U(() => [
              i("span", null, y(a(h)(a(s).FORCE_STOP)), 1)
            ]),
            _: 1
          })
        ], 2)
      ], 34);
    };
  }
});
function et(n, N) {
  const f = m(/* @__PURE__ */ new Map()), t = new ca({
    containerSelector: ".live-monitor-grid",
    t: N
  }), p = () => {
    f.value = new Map(t.getCache());
  }, h = (g) => {
    const v = f.value.get(g);
    if (v) return v;
    const w = t.getResult(g);
    return t.cache.has(g) || ye(() => {
      const T = n()?.find((b) => b.liveId === g);
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
function at(n, N) {
  const { t: f, stopPlay: t } = N, { opSuccess: p, opFailed: h } = ke(f), G = be(), F = m(!1), E = m(!1), S = m(!1), g = m(!1), v = m(""), w = m(null), R = m(/* @__PURE__ */ new Map()), T = m(/* @__PURE__ */ new Map()), b = m(/* @__PURE__ */ new Set()), I = m(!1), H = Ae(), V = Ae();
  Ia(
    H,
    Na((e) => e.length > 0),
    Ra((e) => ya(ua(e))),
    Ca(V),
    _a(
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
  ), W(
    () => n.pageData.value,
    (e) => {
      if (!e || e.length === 0) return;
      const o = e.map((c) => c.anchor?.userId || "").filter(Boolean);
      if (o.length === 0) return;
      const u = o.filter((c) => !T.value.has(c));
      u.length !== 0 && H.next(u);
    },
    { immediate: !0 }
  ), W(
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
      const k = c.getFullYear(), Y = String(c.getMonth() + 1).padStart(2, "0"), B = String(c.getDate()).padStart(2, "0"), ve = String(c.getHours()).padStart(2, "0"), ge = String(c.getMinutes()).padStart(2, "0"), fe = String(c.getSeconds()).padStart(2, "0");
      return `${k}-${Y}-${B} ${ve}:${ge}:${fe}`;
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
      const u = new Map(R.value);
      e.forEach((c) => {
        u.set(c, o.get(c) || []);
      }), R.value = u;
    },
    onError: (e) => {
      $.warn("LiveMonitor", "获取直播间违规标签失败:", e);
    }
  });
  x.ensureStarted(), W(
    () => [...n.pageData.value || []].map((e) => [e.liveId, e.liveName, e.activityStatus].join(":")).join("|"),
    (e, o) => {
      if (!e || I.value || g.value) return;
      const u = n.pageData.value || [];
      u.length !== 0 && x.feed(u);
    }
  ), W(
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
        b.value = new Set(e.map((o) => o.liveId));
      } catch (e) {
        $.error("prevPage 失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
      }
  }, J = async () => {
    if (!n.loading.value)
      try {
        await n.nextPage();
        const e = n.pageData.value || [];
        b.value = new Set(e.map((o) => o.liveId));
      } catch (e) {
        $.error("nextPage 失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
      }
  }, ne = async () => {
    if (!n.loading.value)
      try {
        await n.goToFirstPage();
        const e = n.pageData.value || [];
        b.value = new Set(e.map((o) => o.liveId));
      } catch (e) {
        $.error("goToFirstPage 失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
      }
  }, oe = async (e) => {
    const o = String(e ?? v.value).trim();
    if (!o) return;
    if (Ie(o) > _e) {
      q.error(f(s.INPUT_TOO_LONG));
      return;
    }
    v.value !== o && (v.value = o);
    const u = o;
    x.stop(), E.value = !0;
    try {
      const { fetchLiveDetail: c } = Se(), k = await c(u);
      if (I.value) return;
      if (!k) {
        q.error(f(s.NO_SEARCH_RESULTS_FOR, { keyword: o })), v.value = "", w.value = null, await n.goToFirstPage();
        return;
      }
      g.value = !0, w.value = [k];
      const Y = k.liveId;
      if (b.value.add(Y), I.value) {
        await t(Y);
        return;
      }
      q.success(p(s.OP_SEARCH, s.LIVE));
    } catch (c) {
      $.error("搜索直播间失败", `(ErrorCode: ${K(c).code || "N/A"})`, c);
      const k = c;
      if (c === 2025 || c === 70005 || typeof k != "number" && k.message?.includes("USER_SIG_ILLEGAL")) {
        da(), va(), localStorage.removeItem("tuiLiveMonitor-userInfo"), G.push("/config-required");
        return;
      }
      q.error(f(s.NO_SEARCH_RESULTS_FOR, { keyword: o })), v.value = "", w.value = null, await n.goToFirstPage();
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
        g.value && (g.value = !1, v.value = ""), await n.refreshCurrentPage(), q.success(p(s.REFRESH));
      } catch (e) {
        $.error("刷新失败", `(ErrorCode: ${K(e).code || "N/A"})`, e);
        const o = e, u = o.ErrorInfo || o.errorInfo || "";
        q.error(`${h(s.REFRESH)}${u ? ` (${u})` : ""}`);
      } finally {
        I.value || (S.value = !1);
      }
    }
  }, Z = O(() => n.loading.value), ee = O(() => n.currentPage.value), d = O(() => n.hasMore.value);
  return Re(() => {
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
    liveViolationLabelMap: R,
    userProfileMap: T,
    playingLiveIds: b,
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
const tt = { class: "live-monitor-page" }, nt = { class: "live-monitor-grid" }, ot = {
  key: 0,
  class: "monitor-loading"
}, rt = {
  key: 1,
  class: "monitor-empty"
}, st = { class: "empty-icon" }, lt = { style: { display: "none" } }, it = /* @__PURE__ */ Ce({
  __name: "live-monitor",
  setup(n) {
    const N = we("LiveMonitor"), f = be(), { t } = Ne(), { opSuccess: p, opFailed: h } = ke(t);
    ga().components?.liveMonitor;
    const G = (r) => {
      const l = r.anchor?.userId || "";
      if (l && B.value) {
        const M = B.value.get(l) || B.value.get(l.toLowerCase());
        if (M?.avatarUrl)
          return M.avatarUrl;
      }
      return r.anchor?.avatarUrl || r.avatarUrl || Sa(r);
    }, F = (r) => {
      const l = r.anchor?.userId || "";
      if (l && B.value) {
        const M = B.value.get(l) || B.value.get(l.toLowerCase());
        if (M?.nick)
          return M.nick;
      }
      return r.anchor?.nick || wa(r, t(s.UNKNOWN_HOST));
    }, { init: E, liveList: S, endLive: g, stopPlay: v } = Se(), w = la(), R = Ze("sdkReady", null), T = m(!1), b = m(""), I = m(!1), H = m(null), V = m(0), P = m({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), j = m({ liveId: "", liveName: "" }), { confirmDialog: D, requestConfirm: x, cancelConfirm: X, executeWithConfirm: te, loading: J } = ia({
      operationName: t(s.SEND_VIOLATION_WARNING),
      action: async () => {
        const { liveId: r, liveName: l } = j.value;
        if (!r) throw new Error("liveId is required");
        const M = l || r;
        await Ea(r, {
          violationType: t(s.VIOLATION_TYPE_WARNING),
          violationContent: t(s.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: M }),
          handleSuggestion: t(s.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      confirm: {
        title: t(s.CONFIRM_ACTION_TITLE, { action: t(s.SEND_VIOLATION_WARNING) }),
        content: t(s.VIOLATION_WARNING_CONFIRM_CONTENT),
        confirmText: t(s.CONFIRM)
      },
      errorMessage: h(s.OP_SEND),
      showSuccess: !0
    }), {
      getAdaptiveResult: ne,
      initResizeObserver: oe,
      cleanupResizeObserver: re,
      initAdaptiveTags: Q
    } = et(() => se.value, t), {
      currentPage: Z,
      hasMoreData: ee,
      loading: d,
      hasLiveData: e,
      refreshing: o,
      isSearchMode: u,
      searchInput: c,
      searchResults: k,
      liveViolationLabelMap: Y,
      userProfileMap: B,
      playingLiveIds: ve,
      isUnmounted: ge,
      handlePrevPage: fe,
      handleNextPage: Fe,
      handleGoToFirstPage: Ve,
      handleSearch: xe,
      handleClearSearch: $e,
      handleRefresh: Ue,
      handleCloseLiveSuccess: We,
      mergeTags: Ge
    } = at(
      w,
      { stopPlay: v, t }
    ), se = O(() => (u.value && k.value ? k.value : S.value || []).map((l) => {
      const M = l.tags || [], C = Ge(M, Y.value.get(l.liveId));
      return {
        ...l,
        tags: C
      };
    }));
    W(
      () => Y.value.size,
      (r) => {
        r !== 0 && ye(() => {
          Q(se.value || []);
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
    W(He, () => {
      V.value += 1;
    });
    const Be = (r, l) => {
      j.value = { liveId: r, liveName: l }, x();
    }, ze = (r, l) => {
      P.value = { visible: !0, liveId: r, liveName: l, closing: !1 };
    }, Ke = async () => {
      const { liveId: r } = P.value;
      if (r) {
        P.value.closing = !0;
        try {
          await v(r), ve.value.delete(r), await g(r), P.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, q.success(p(s.FORCE_STOP, s.LIVE)), await We(Z, ee, (S.value || []).length);
        } catch (l) {
          N.error("封禁直播失败", "", l), P.value.closing = !1;
        }
      }
    }, je = () => {
      P.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, Ye = (r) => {
      N.info("general", "handleClickDetails called with liveId:", r), fa("live_detail");
      try {
        const l = w.getSnapshot();
        Ma({
          currentPage: l.currentPage,
          pageCursors: l.pageCursors
        });
      } catch {
      }
      N.info("Navigating to", "", `/live-control/${r}`), f.push({ path: `/live-control/${r}`, query: { from: "live-monitor" } });
    }, qe = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, Ee = async () => {
      document.fullscreenElement ? T.value = !0 : (T.value = !1, b.value = "");
    };
    let z = null, ce = null, Me = null;
    const Xe = async () => {
      try {
        const r = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        z || (z = await ha() ?? null, z && z.sdkAppId !== 0 && !ma() && pa({ userId: z.userId, userSig: z.userSig, sdkAppId: z.sdkAppId, configured: !0 })), (Me !== r || !ce) && (Me = r, r === "admin" ? ce = z : ce = await Ta("audience") ?? null);
        const l = ce;
        if (l && l.sdkAppId !== 0)
          try {
            const M = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
            if (E({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: l.sdkAppId,
                userId: l.userId,
                password: l.userSig
              },
              playerFactory: M ? Oa() : void 0
            }), N.info("LiveMonitor", "Calling goToFirstPage, sdkReady:", R, ", sdkReady?.value:", R?.value), !R || R.value) {
              const C = Pa();
              C.pageToLoad > 1 ? (N.info("LiveMonitor", "Restoring pagination state, page:", C.pageToLoad), await w.goToPage(C.pageToLoad, C.pageCursors), N.info("LiveMonitor", "Pagination state restored to page", C.pageToLoad)) : await w.goToFirstPage(), I.value = !0;
            } else
              I.value = !0;
          } catch (M) {
            N.error("LiveMonitor", "initSDK inner error:", M), I.value = !0;
          }
        else
          N.warn("LiveMonitor", "account failed or sdkAppId is 0:", l), I.value = !0;
      } catch (r) {
        N.error("LiveMonitor", "initSDK outer error:", r), I.value = !0;
      }
    };
    return R && W(() => R.value, (r) => {
      r && w.goToFirstPage();
    }), me(() => {
      document.addEventListener("fullscreenchange", Ee), oe(), Q(se.value || []), Xe();
    }), Re(() => {
      ge.value = !0, document.removeEventListener("fullscreenchange", Ee), re();
    }), (r, l) => {
      const M = de("t-dialog");
      return _(), L("div", tt, [
        A($a, {
          "search-input": a(c),
          refreshing: a(o),
          "onUpdate:searchInput": l[0] || (l[0] = (C) => c.value = C),
          onSearch: a(xe),
          onClearSearch: a($e),
          onRefresh: a(Ue)
        }, null, 8, ["search-input", "refreshing", "onSearch", "onClearSearch", "onRefresh"]),
        i("div", nt, [
          a(d) || !I.value ? (_(), L("div", ot, [
            l[3] || (l[3] = i("div", { class: "loading-spinner" }, null, -1)),
            i("span", null, y(a(t)(a(s).LOADING)), 1)
          ])) : a(e) ? (_(), L(le, { key: 2 }, [
            i("div", lt, "debug: liveList.length=" + y((a(S) || []).length) + ", mergedMonitorList.length=" + y(se.value.length) + ", hasLiveData=" + y(a(e)), 1),
            (_(!0), L(le, null, pe(se.value, (C) => (_(), ie(Za, {
              key: `${V.value}:${C.liveId}`,
              card: C,
              "adaptive-result": a(ne)(C.liveId),
              "is-muted": C.isMuted ?? !1,
              "is-fullscreen": T.value,
              "fullscreen-live-id": b.value,
              "anchor-avatar": G(C),
              "anchor-name": F(C),
              onViewDetails: Ye,
              onViolationWarning: Be,
              onForceStop: ze,
              onExitFullscreen: qe,
              onHover: l[1] || (l[1] = (Je) => H.value = Je)
            }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]))), 128))
          ], 64)) : (_(), L("div", rt, [
            i("div", st, [
              A(a(Oe))
            ]),
            i("p", null, y(a(t)(a(s).NO_LIVE_RIGHT_NOW)), 1)
          ]))
        ]),
        a(u) ? ae("", !0) : (_(), ie(Aa, {
          key: 0,
          "current-page": a(Z),
          "has-more-data": a(ee),
          loading: a(d),
          onGoToFirstPage: a(Ve),
          onPrevPage: a(fe),
          onNextPage: a(Fe)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"])),
        A(M, {
          visible: P.value.visible,
          "onUpdate:visible": l[2] || (l[2] = (C) => P.value.visible = C),
          header: a(t)(a(s).CONFIRM_ACTION_TITLE, { action: a(t)(a(s).FORCE_STOP) }),
          "confirm-btn": { content: P.value.closing ? a(t)(a(s).CLOSING) : a(t)(a(s).CONFIRM_BAN_LIVE), loading: P.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: a(t)(a(s).CANCEL), disabled: P.value.closing, shape: "round" },
          onConfirm: Ke,
          onCancel: je
        }, {
          default: U(() => [
            i("p", null, y(a(t)(a(s).FORCE_STOP_CONFIRM_CONTENT)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        a(D) ? (_(), ie(M, {
          key: 1,
          visible: a(D).visible,
          header: a(D).title,
          "confirm-btn": {
            content: a(D).confirmText ?? a(t)(a(s).CONFIRM),
            loading: a(J),
            shape: "round"
          },
          "cancel-btn": {
            content: a(t)(a(s).CANCEL),
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
}), Nt = /* @__PURE__ */ De(it, [["__scopeId", "data-v-f5a73645"]]);
export {
  Nt as default
};
