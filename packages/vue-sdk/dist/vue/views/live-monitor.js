import { defineComponent as Ie, resolveComponent as ce, openBlock as C, createElementBlock as T, createElementVNode as u, toDisplayString as N, unref as e, createVNode as A, withCtx as $, createTextVNode as ie, ref as p, computed as P, onMounted as fe, watch as U, onBeforeUnmount as Ye, normalizeClass as we, normalizeStyle as ge, createCommentVNode as ee, Fragment as re, renderList as he, createBlock as se, withModifiers as Me, nextTick as Ce, onUnmounted as Ae, inject as Xe } from "vue";
import { useRouter as Re } from "vue-router";
import { SearchIcon as Je, RefreshIcon as Qe, FullscreenIcon as Pe, CloseIcon as Ze, SoundMuteIcon as ea, SoundIcon as aa, NotificationIcon as ta, StopCircleIcon as na } from "tdesign-icons-vue-next";
import { MessagePlugin as j } from "tdesign-vue-next";
import { useUIKit as _e } from "@tencentcloud/uikit-base-component-vue3";
import { a as ye, b as oa } from "../../chunks/chat.BW03hVL7.js";
import "../../chunks/gift.C2r8tUnB.js";
import { g as me, P as pe, s as Le, p as ra, f as sa, bC as la, bD as ia, bK as ca, bH as ua, bE as da, bF as va } from "../../chunks/main-layout.BqLTYqar.js";
import "../../chunks/useAsyncAction.UFjlzk-_.js";
import { I as i, a3 as Te, b as ga, q as B, a7 as fa, a6 as ha, g as ma, O as pa, E as Ia, P as Ca } from "../../chunks/layout.DppKPdLU.js";
import { u as _a } from "../../chunks/useConfirmAction.D59ibI7L.js";
import { c as Ne } from "../../chunks/logger.DCFRj533.js";
import { _ as be } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
import { _ as ya } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.BUqtwIhL.js";
import { _ as Na } from "../../chunks/MonitorPagination.vue_vue_type_script_setup_true_lang.C8oA5l7A.js";
import { A as Sa, s as Ea, V as wa } from "../../chunks/adaptive-tags-runtime.Cka5EKuv.js";
import { s as Ma, t as La, f as Ta } from "../../chunks/utils.Bs5D6gUq.js";
import { c as Aa } from "../../chunks/mock.Bnui3Fqh.js";
const Ra = { class: "monitor-header" }, Pa = { class: "monitor-title-section" }, ba = { class: "monitor-title" }, Oa = { class: "monitor-header-actions" }, Da = /* @__PURE__ */ Ie({
  __name: "MonitorHeader",
  props: {
    searchInput: {},
    refreshing: { type: Boolean }
  },
  emits: ["update:searchInput", "search", "clearSearch", "refresh"],
  setup(o, { emit: S }) {
    const g = S, { t: n } = _e(), _ = (m) => {
      g("update:searchInput", String(m ?? ""));
    }, f = () => {
      g("search");
    }, O = () => {
      g("clearSearch");
    }, R = () => {
      g("refresh");
    };
    return (m, I) => {
      const d = ce("t-input"), v = ce("t-button");
      return C(), T("div", Ra, [
        u("div", Pa, [
          u("h2", ba, N(e(n)(e(i).LIVE_MONITOR)), 1)
        ]),
        u("div", Oa, [
          A(d, {
            "model-value": o.searchInput,
            placeholder: e(n)(e(i).ENTER_LIVE_ID_TO_SEARCH),
            class: "monitor-search-input",
            clearable: "",
            status: e(me)(o.searchInput) > e(pe) ? "error" : "default",
            tips: e(me)(o.searchInput) > e(pe) ? e(n)(e(i).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
            "onUpdate:modelValue": _,
            onEnter: f,
            onClear: O
          }, {
            "suffix-icon": $(() => [
              A(e(Je), {
                style: { cursor: "pointer" },
                onClick: I[0] || (I[0] = () => f())
              })
            ]),
            _: 1
          }, 8, ["model-value", "placeholder", "status", "tips"]),
          A(v, {
            theme: "primary",
            variant: "outline",
            shape: "round",
            loading: o.refreshing,
            onClick: R
          }, {
            icon: $(() => [
              A(e(Qe))
            ]),
            default: $(() => [
              ie(" " + N(e(n)(e(i).REFRESH)), 1)
            ]),
            _: 1
          }, 8, ["loading"])
        ])
      ]);
    };
  }
}), ka = /* @__PURE__ */ be(Da, [["__scopeId", "data-v-85dc322f"]]), Fa = ["id"], Va = ["src", "alt"], xa = ["id"], $a = ["title"], Ua = {
  key: 0,
  class: "tag-more-wrapper"
}, Wa = { class: "live-card-tag-dropdown" }, Ga = { class: "overlay-btn primary" }, Ha = { class: "live-card-info" }, Ba = ["title"], za = { class: "live-card-meta" }, Ka = { class: "live-card-anchor" }, ja = ["title"], qa = ["title"], Ya = /* @__PURE__ */ Ie({
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
  setup(o, { emit: S }) {
    const g = Ne("LiveCard"), n = o, _ = S, { t: f } = _e(), { startPlay: O, stopPlay: R } = ye(), m = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, I = p(!1), d = p("");
    let v = 0;
    const L = P(() => n.isFullscreen && n.fullscreenLiveId === n.card.liveId), b = P(() => n.card.tags.slice(0, n.adaptiveResult.visibleCount)), h = P(() => n.card.tags.slice(n.adaptiveResult.visibleCount)), D = P(() => n.card.stats?.viewCount ?? 0), k = P(() => `live_monitor_view_${n.card.liveId}`), w = p(null), W = P(() => m ? Te : n.card.backgroundUrl || n.card.coverUrl || ""), F = P(() => {
      const a = W.value;
      return a ? { backgroundImage: `url(${a})` } : {};
    });
    function V() {
      const a = w.value, r = W.value;
      a && r && (a.style.backgroundImage = `url(${r})`);
    }
    fe(() => {
      V();
    }), U(W, () => {
      V();
    });
    const z = async () => {
      const a = n.card.liveId;
      if (g.info("LiveCard", "startCardPlay called", { liveId: a, isMockMode: m }), m || !a) {
        g.info("LiveCard", "Skipping play", { isMockMode: m, liveId: a });
        return;
      }
      const r = ++v;
      if (await Ce(), r !== v) {
        g.info("LiveCard", "Version mismatch, aborting", { currentVersion: r, playVersion: v });
        return;
      }
      try {
        g.info("LiveCard", "Calling startPlay", { liveId: a, containerId: k.value }), await O({ liveId: a, containerId: k.value }), r === v && (d.value = a, g.info("LiveCard", "startPlay success", { liveId: a }));
      } catch (l) {
        g.error("LiveCard", "startPlay failed", { liveId: a, error: l }), r === v && _("playError", l, a);
      }
    }, q = async (a = d.value || n.card.liveId) => {
      v += 1, !(m || !a) && (d.value === a && (d.value = ""), await R(a).catch(() => {
      }));
    };
    fe(() => {
      z();
    }), U(
      () => n.card.liveId,
      async (a, r) => {
        r && r !== a && await q(r), z();
      }
    ), Ye(() => {
      q();
    });
    const Y = () => {
      I.value = !0, _("hover", n.card.liveId);
    }, ae = () => {
      I.value = !1, _("hover", null);
    }, te = () => {
      g.info("LiveCard", "handleViewDetails called, liveId:", n.card.liveId), _("viewDetails", n.card.liveId);
    }, ne = (a) => {
      g.info("LiveCard", "handleCardClick called");
      const r = a.target;
      !r.closest(".live-card-actions") && !r.closest(".fullscreen-close") && !r.closest(".fullscreen-mute") && (g.info("LiveCard", "emitting viewDetails from handleCardClick, liveId:", n.card.liveId), _("viewDetails", n.card.liveId));
    }, X = () => {
      _("violationWarning", n.card.liveId, n.card.liveName || f(i.UNNAMED_LIVE));
    }, J = () => {
      _("forceStop", n.card.liveId, n.card.liveName || f(i.UNNAMED_LIVE));
    }, Q = () => {
      _("toggleMute", n.card.liveId);
    }, Z = () => {
      _("exitFullscreen");
    }, t = (a) => {
      const r = a.target;
      r.src = Te;
    };
    return (a, r) => {
      const l = ce("t-button");
      return C(), T("div", {
        class: we(["live-card", { hovered: I.value }]),
        onMouseenter: Y,
        onMouseleave: ae,
        onClick: ne
      }, [
        u("div", {
          id: o.card.liveId,
          class: "live-video-container"
        }, [
          u("div", {
            ref_key: "bgRef",
            ref: w,
            class: "live-video-bg",
            style: ge(F.value)
          }, null, 4),
          e(m) && o.card.coverUrl ? (C(), T("img", {
            key: 0,
            src: o.card.coverUrl,
            alt: o.card.liveName || "",
            class: "live-card-cover-image",
            onError: t
          }, null, 40, Va)) : ee("", !0),
          u("div", {
            id: k.value,
            class: "live-video-player"
          }, null, 8, xa),
          u("div", {
            class: "live-id-badge",
            style: ge({ maxWidth: o.adaptiveResult.idMaxWidth })
          }, [
            u("span", {
              title: o.card.liveId
            }, N(`${e(f)(e(i).LIVE_ID)}: ${o.card.liveId}`), 9, $a)
          ], 4),
          o.card.tags && o.card.tags.length > 0 ? (C(), T("div", {
            key: 1,
            class: "live-card-tags-overlay",
            style: ge({ maxWidth: o.adaptiveResult.tagsMaxWidth })
          }, [
            (C(!0), T(re, null, he(b.value, (E) => (C(), T("span", {
              key: E,
              class: "live-card-tag-overlay"
            }, [
              r[0] || (r[0] = u("svg", {
                class: "shield-icon",
                viewBox: "0 0 24 24",
                width: "14",
                height: "14"
              }, [
                u("path", {
                  d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                  fill: "white",
                  stroke: "white",
                  "stroke-width": "0.5"
                }),
                u("text", {
                  x: "12",
                  y: "16",
                  "text-anchor": "middle",
                  fill: "#f59e0b",
                  "font-size": "12",
                  "font-weight": "bold"
                }, "!")
              ], -1)),
              ie(" " + N(e(f)(E)), 1)
            ]))), 128)),
            o.adaptiveResult.showMore ? (C(), T("div", Ua, [
              r[2] || (r[2] = u("span", { class: "live-card-tag-overlay live-card-tag-more" }, "...", -1)),
              u("div", Wa, [
                (C(!0), T(re, null, he(h.value, (E) => (C(), T("span", {
                  key: E,
                  class: "live-card-tag-overlay"
                }, [
                  r[1] || (r[1] = u("svg", {
                    class: "shield-icon",
                    viewBox: "0 0 24 24",
                    width: "14",
                    height: "14"
                  }, [
                    u("path", {
                      d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z",
                      fill: "white",
                      stroke: "white",
                      "stroke-width": "0.5"
                    }),
                    u("text", {
                      x: "12",
                      y: "16",
                      "text-anchor": "middle",
                      fill: "#f59e0b",
                      "font-size": "12",
                      "font-weight": "bold"
                    }, "!")
                  ], -1)),
                  ie(" " + N(e(f)(E)), 1)
                ]))), 128))
              ])
            ])) : ee("", !0)
          ], 4)) : ee("", !0),
          u("div", {
            class: "live-video-overlay",
            onClick: te
          }, [
            u("div", Ga, [
              A(e(Pe)),
              ie(" " + N(e(f)(e(i).VIEW_DETAILS)), 1)
            ])
          ]),
          L.value ? (C(), T(re, { key: 2 }, [
            u("button", {
              class: "fullscreen-close",
              onClick: Z
            }, [
              A(e(Ze))
            ]),
            u("button", {
              class: "fullscreen-mute",
              onClick: Q
            }, [
              o.isMuted ? (C(), se(e(ea), { key: 0 })) : (C(), se(e(aa), { key: 1 }))
            ])
          ], 64)) : ee("", !0)
        ], 8, Fa),
        u("div", Ha, [
          u("div", {
            class: "live-card-title",
            title: o.card.liveName || e(f)(e(i).UNNAMED_LIVE)
          }, N(o.card.liveName || e(f)(e(i).UNNAMED_LIVE)), 9, Ba),
          u("div", za, [
            u("div", Ka, [
              A(ya, {
                "class-name": "anchor-avatar",
                src: o.anchorAvatar,
                name: o.anchorName,
                title: o.anchorName
              }, null, 8, ["src", "name", "title"]),
              u("span", {
                class: "anchor-name",
                title: o.anchorName
              }, N(o.anchorName), 9, ja)
            ]),
            u("span", {
              class: "meta-viewer-count",
              title: String(D.value)
            }, N(`${D.value}${e(f)(e(i).VIEWS)}`), 9, qa)
          ])
        ]),
        u("div", {
          class: we(["live-card-actions", { show: I.value }])
        }, [
          A(l, {
            class: "card-action",
            variant: "text",
            theme: "warning",
            onClick: Me(X, ["stop"])
          }, {
            icon: $(() => [
              A(e(ta))
            ]),
            default: $(() => [
              u("span", null, N(e(f)(e(i).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }),
          A(l, {
            class: "card-action",
            variant: "text",
            theme: "danger",
            onClick: Me(J, ["stop"])
          }, {
            icon: $(() => [
              A(e(na))
            ]),
            default: $(() => [
              u("span", null, N(e(f)(e(i).FORCE_STOP)), 1)
            ]),
            _: 1
          })
        ], 2)
      ], 34);
    };
  }
});
function Xa(o, S) {
  const g = p(/* @__PURE__ */ new Map()), n = new Sa({
    containerSelector: ".live-monitor-grid",
    t: S
  }), _ = () => {
    g.value = new Map(n.getCache());
  }, f = (d) => {
    const v = g.value.get(d);
    if (v) return v;
    const L = n.getResult(d);
    return n.cache.has(d) || Ce(() => {
      const h = o()?.find((D) => D.liveId === d);
      h && h.tags && (n.compute(d, { liveId: d, tags: h.tags }), _());
    }), L;
  };
  return {
    adaptiveTagMap: g,
    getAdaptiveResult: f,
    getVisibleTags: (d, v) => {
      const L = f(v);
      return d.slice(0, L.visibleCount);
    },
    initResizeObserver: () => {
      n.observe(() => {
        _();
      });
    },
    cleanupResizeObserver: () => {
      n.disconnect();
    },
    initAdaptiveTags: (d) => {
      n.initForList(
        d.map((v) => ({
          liveId: String(v.liveId ?? ""),
          tags: Array.isArray(v.tags) ? v.tags : []
        }))
      ), _();
    }
  };
}
const x = Ne("LiveMonitorData");
function Ja(o, S) {
  const { t: g, stopPlay: n } = S, _ = Re(), f = p(!1), O = p(!1), R = p(!1), m = p(!1), I = p(""), d = p(null), v = p(/* @__PURE__ */ new Map()), L = p(/* @__PURE__ */ new Map()), b = p(/* @__PURE__ */ new Set()), h = p(!1), D = Le(), k = Le();
  ra(
    D,
    Ta((t) => t.length > 0),
    Ea((t) => sa(ga(t))),
    La(k),
    Ma(
      (t) => {
        if (h.value) return;
        const a = new Map(L.value);
        t.forEach((r, l) => {
          a.set(l, r);
        }), L.value = a;
      },
      (t) => {
        x.error("useLiveMonitorData", `Fastrx profile fetch failed (ErrorCode: ${B(t).code || "N/A"}):`, t);
      }
    )
  ), U(
    () => o.pageData.value,
    (t) => {
      if (!t || t.length === 0) return;
      const a = t.map((l) => l.anchor?.userId || "").filter(Boolean);
      if (a.length === 0) return;
      const r = a.filter((l) => !L.value.has(l));
      r.length !== 0 && D.next(r);
    },
    { immediate: !0 }
  ), U(
    () => document.documentElement.lang,
    () => {
      L.value = /* @__PURE__ */ new Map();
      const t = o.pageData.value;
      if (t && t.length > 0) {
        const a = t.map((r) => r.anchor?.userId || "").filter(Boolean);
        a.length > 0 && D.next(a);
      }
    }
  );
  const w = (...t) => {
    const a = [];
    for (const r of t)
      for (const l of r || [])
        l && !a.includes(l) && a.push(l);
    return a;
  }, W = (t) => String(t.liveId || t.id || t.RoomId || ""), F = () => {
    const t = /* @__PURE__ */ new Date(), a = new Date(t.getTime() - 600 * 1e3), r = (l) => {
      const E = l.getFullYear(), K = String(l.getMonth() + 1).padStart(2, "0"), G = String(l.getDate()).padStart(2, "0"), ue = String(l.getHours()).padStart(2, "0"), de = String(l.getMinutes()).padStart(2, "0"), ve = String(l.getSeconds()).padStart(2, "0");
      return `${E}-${K}-${G} ${ue}:${de}:${ve}`;
    };
    return {
      startTime: r(a),
      endTime: r(t)
    };
  }, V = new wa({
    getTimeRange: F,
    isSearchMode: () => m.value,
    isUnmounted: () => h.value,
    onUpdate: (t, a) => {
      const r = new Map(v.value);
      t.forEach((l) => {
        r.set(l, a.get(l) || []);
      }), v.value = r;
    },
    onError: (t) => {
      x.warn("LiveMonitor", "获取直播间违规标签失败:", t);
    }
  });
  V.ensureStarted(), U(
    () => [...o.pageData.value || []].map((t) => [t.liveId, t.liveName, t.activityStatus].join(":")).join("|"),
    (t, a) => {
      if (!t || h.value || m.value) return;
      const r = o.pageData.value || [];
      r.length !== 0 && V.feed(r);
    }
  ), U(
    () => [o.loading.value, o.pageData.value?.length],
    ([t, a]) => {
      t || (f.value = (a || 0) > 0);
    },
    { immediate: !0 }
  );
  const z = async (t, a, r) => {
    if (!o.loading.value)
      try {
        !a && r <= 1 && t > 1 ? await o.prevPage() : await o.refreshCurrentPage();
      } catch (l) {
        x.error("closeLiveSuccess 翻页失败", `(ErrorCode: ${B(l).code || "N/A"})`, l);
      }
  }, q = async () => {
    if (!o.loading.value)
      try {
        await o.prevPage();
        const t = o.pageData.value || [];
        b.value = new Set(t.map((a) => a.liveId));
      } catch (t) {
        x.error("prevPage 失败", `(ErrorCode: ${B(t).code || "N/A"})`, t);
      }
  }, Y = async () => {
    if (!o.loading.value)
      try {
        await o.nextPage();
        const t = o.pageData.value || [];
        b.value = new Set(t.map((a) => a.liveId));
      } catch (t) {
        x.error("nextPage 失败", `(ErrorCode: ${B(t).code || "N/A"})`, t);
      }
  }, ae = async () => {
    if (!o.loading.value)
      try {
        await o.goToFirstPage();
        const t = o.pageData.value || [];
        b.value = new Set(t.map((a) => a.liveId));
      } catch (t) {
        x.error("goToFirstPage 失败", `(ErrorCode: ${B(t).code || "N/A"})`, t);
      }
  }, te = async (t) => {
    const a = String(t ?? I.value).trim();
    if (!a) return;
    if (me(a) > pe) {
      j.error(g(i.INPUT_TOO_LONG));
      return;
    }
    I.value !== a && (I.value = a);
    const r = a;
    V.stop(), O.value = !0;
    try {
      const { fetchLiveDetail: l } = ye(), E = await l(r);
      if (h.value) return;
      if (!E) {
        j.error(g(i.NO_SEARCH_RESULTS_FOR, { keyword: a })), I.value = "", d.value = null, await o.goToFirstPage();
        return;
      }
      m.value = !0, d.value = [E];
      const K = E.liveId;
      if (b.value.add(K), h.value) {
        await n(K);
        return;
      }
      j.success(g(i.SEARCH_SUCCESS));
    } catch (l) {
      x.error("搜索直播间失败", `(ErrorCode: ${B(l).code || "N/A"})`, l);
      const E = l;
      if (l === 2025 || l === 70005 || typeof E != "number" && E.message?.includes("USER_SIG_ILLEGAL")) {
        fa(), ha(), localStorage.removeItem("tuiLiveMonitor-userInfo"), _.push("/config-required");
        return;
      }
      j.error(g(i.NO_SEARCH_RESULTS_FOR, { keyword: a })), I.value = "", d.value = null, await o.goToFirstPage();
    } finally {
      h.value || (O.value = !1);
    }
  }, ne = async () => {
    if (o.loading.value) return;
    const t = m.value;
    if (I.value = "", m.value = !1, d.value = null, !!t)
      try {
        await o.goToFirstPage();
      } catch (a) {
        x.error("handleClearSearch 翻页失败", `(ErrorCode: ${B(a).code || "N/A"})`, a);
      }
  }, X = async () => {
    if (!o.loading.value) {
      R.value = !0;
      try {
        m.value && (m.value = !1, I.value = ""), await o.refreshCurrentPage(), j.success(g(i.REFRESHED));
      } catch (t) {
        x.error("刷新失败", `(ErrorCode: ${B(t).code || "N/A"})`, t);
        const a = t, r = a.ErrorInfo || a.errorInfo || "";
        j.error(`${g(i.REFRESH_FAILED)}${r ? ` (${r})` : ""}`);
      } finally {
        h.value || (R.value = !1);
      }
    }
  }, J = P(() => o.loading.value), Q = P(() => o.currentPage.value), Z = P(() => o.hasMore.value);
  return Ae(() => {
    h.value = !0, V.stop(), k.next();
  }), {
    // 分页状态（响应式 computed）
    currentPage: Q,
    hasMoreData: Z,
    loading: J,
    // 业务状态
    hasLiveData: f,
    searching: O,
    refreshing: R,
    isSearchMode: m,
    searchInput: I,
    searchResults: d,
    liveViolationLabelMap: v,
    userProfileMap: L,
    playingLiveIds: b,
    isUnmounted: h,
    // 方法
    handlePrevPage: q,
    handleNextPage: Y,
    handleGoToFirstPage: ae,
    handleSearch: te,
    handleClearSearch: ne,
    handleRefresh: X,
    handleCloseLiveSuccess: z,
    mergeTags: w,
    resolveLiveId: W
  };
}
const Qa = { class: "live-monitor-page" }, Za = { class: "live-monitor-grid" }, et = {
  key: 0,
  class: "monitor-loading"
}, at = {
  key: 1,
  class: "monitor-empty"
}, tt = { class: "empty-icon" }, nt = { style: { display: "none" } }, ot = /* @__PURE__ */ Ie({
  __name: "live-monitor",
  setup(o) {
    const S = Ne("LiveMonitor"), g = Re(), { t: n } = _e();
    ma().components?.liveMonitor;
    const _ = (s) => {
      const c = s.anchor?.userId || "";
      if (c && G.value) {
        const M = G.value.get(c) || G.value.get(c.toLowerCase());
        if (M?.avatarUrl)
          return M.avatarUrl;
      }
      return s.anchor?.avatarUrl || s.avatarUrl || la(s);
    }, f = (s) => {
      const c = s.anchor?.userId || "";
      if (c && G.value) {
        const M = G.value.get(c) || G.value.get(c.toLowerCase());
        if (M?.nick)
          return M.nick;
      }
      return s.anchor?.nick || ia(s, n(i.UNKNOWN_HOST));
    }, { init: O, liveList: R, endLive: m, stopPlay: I } = ye(), d = oa(), v = Xe("sdkReady", null), L = p(!1), b = p(""), h = p(!1), D = p(null), k = p(0), w = p({
      visible: !1,
      liveId: "",
      liveName: "",
      closing: !1
    }), W = p({ liveId: "", liveName: "" }), { confirmDialog: F, requestConfirm: V, cancelConfirm: z, executeWithConfirm: q, loading: Y } = _a({
      operationName: n(i.SEND_VIOLATION_WARNING),
      action: async () => {
        const { liveId: s, liveName: c } = W.value;
        if (!s) throw new Error("liveId is required");
        const M = c || s;
        await ca(s, {
          violationType: n(i.VIOLATION_TYPE_WARNING),
          violationContent: n(i.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: M }),
          handleSuggestion: n(i.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      confirm: {
        title: n(i.CONFIRM_ACTION_TITLE, { action: n(i.SEND_VIOLATION_WARNING) }),
        content: n(i.VIOLATION_WARNING_CONFIRM_CONTENT),
        confirmText: n(i.CONFIRM)
      },
      errorMessage: n(i.SEND_FAILED),
      showSuccess: !0
    }), {
      getAdaptiveResult: ae,
      initResizeObserver: te,
      cleanupResizeObserver: ne,
      initAdaptiveTags: X
    } = Xa(() => oe.value, n), {
      currentPage: J,
      hasMoreData: Q,
      loading: Z,
      hasLiveData: t,
      refreshing: a,
      isSearchMode: r,
      searchInput: l,
      searchResults: E,
      liveViolationLabelMap: K,
      userProfileMap: G,
      playingLiveIds: ue,
      isUnmounted: de,
      handlePrevPage: ve,
      handleNextPage: Oe,
      handleGoToFirstPage: De,
      handleSearch: ke,
      handleClearSearch: Fe,
      handleRefresh: Ve,
      handleCloseLiveSuccess: xe,
      mergeTags: $e
    } = Ja(
      d,
      { stopPlay: I, t: n }
    ), oe = P(() => (r.value && E.value ? E.value : R.value || []).map((c) => {
      const M = c.tags || [], y = $e(M, K.value.get(c.liveId));
      return {
        ...c,
        tags: y
      };
    }));
    U(
      () => K.value.size,
      (s) => {
        s !== 0 && Ce(() => {
          X(oe.value || []);
        });
      },
      { flush: "post" }
    );
    const Ue = P(
      () => (R.value || []).map((s) => [
        s.liveId,
        s.liveName,
        s.coverUrl,
        s.onlineCount,
        s.stats?.viewCount,
        s.popularity,
        s.activityStatus,
        s.createdAt
      ].join(":")).join("|")
    );
    U(Ue, () => {
      k.value += 1;
    });
    const We = (s, c) => {
      W.value = { liveId: s, liveName: c }, V();
    }, Ge = (s, c) => {
      w.value = { visible: !0, liveId: s, liveName: c, closing: !1 };
    }, He = async () => {
      const { liveId: s } = w.value;
      if (s) {
        w.value.closing = !0;
        try {
          await I(s), ue.value.delete(s), await m(s), w.value = { visible: !1, liveId: "", liveName: "", closing: !1 }, j.success(n(i.LIVE_FORCIBLY_CLOSED)), await xe(J, Q, (R.value || []).length);
        } catch (c) {
          S.error("封禁直播失败", "", c), w.value.closing = !1;
        }
      }
    }, Be = () => {
      w.value = { visible: !1, liveId: "", liveName: "", closing: !1 };
    }, ze = (s) => {
      S.info("general", "handleClickDetails called with liveId:", s);
      try {
        const c = d.getSnapshot();
        ua({
          currentPage: c.currentPage,
          pageCursors: c.pageCursors
        });
      } catch {
      }
      S.info("Navigating to", "", `/live-control/${s}`), g.push({ path: `/live-control/${s}`, query: { from: "live-monitor" } });
    }, Ke = () => {
      document.fullscreenElement && document.exitFullscreen();
    }, Se = async () => {
      document.fullscreenElement ? L.value = !0 : (L.value = !1, b.value = "");
    };
    let H = null, le = null, Ee = null;
    const je = async () => {
      try {
        const s = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        H || (H = await pa() ?? null, H && H.sdkAppId !== 0 && !Ia() && Ca({ userId: H.userId, userSig: H.userSig, sdkAppId: H.sdkAppId, configured: !0 })), (Ee !== s || !le) && (Ee = s, s === "admin" ? le = H : le = await da("audience") ?? null);
        const c = le;
        if (c && c.sdkAppId !== 0)
          try {
            const M = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
            if (O({
              baseURL: "http://localhost:9000/api",
              baseUrl: "http://localhost:9000/api",
              account: {
                sdkAppId: c.sdkAppId,
                userId: c.userId,
                password: c.userSig
              },
              playerFactory: M ? Aa() : void 0
            }), S.info("LiveMonitor", "Calling goToFirstPage, sdkReady:", v, ", sdkReady?.value:", v?.value), !v || v.value) {
              const y = va();
              y.pageToLoad > 1 ? (S.info("LiveMonitor", "Restoring pagination state, page:", y.pageToLoad), await d.goToPage(y.pageToLoad, y.pageCursors), S.info("LiveMonitor", "Pagination state restored to page", y.pageToLoad)) : await d.goToFirstPage(), h.value = !0;
            } else
              h.value = !0;
          } catch (M) {
            S.error("LiveMonitor", "initSDK inner error:", M), h.value = !0;
          }
        else
          S.warn("LiveMonitor", "account failed or sdkAppId is 0:", c), h.value = !0;
      } catch (s) {
        S.error("LiveMonitor", "initSDK outer error:", s), h.value = !0;
      }
    };
    return v && U(() => v.value, (s) => {
      s && d.goToFirstPage();
    }), fe(() => {
      document.addEventListener("fullscreenchange", Se), te(), X(oe.value || []), je();
    }), Ae(() => {
      de.value = !0, document.removeEventListener("fullscreenchange", Se), ne();
    }), (s, c) => {
      const M = ce("t-dialog");
      return C(), T("div", Qa, [
        A(ka, {
          "search-input": e(l),
          refreshing: e(a),
          "onUpdate:searchInput": c[0] || (c[0] = (y) => l.value = y),
          onSearch: e(ke),
          onClearSearch: e(Fe),
          onRefresh: e(Ve)
        }, null, 8, ["search-input", "refreshing", "onSearch", "onClearSearch", "onRefresh"]),
        u("div", Za, [
          e(Z) || !h.value ? (C(), T("div", et, [
            c[3] || (c[3] = u("div", { class: "loading-spinner" }, null, -1)),
            u("span", null, N(e(n)(e(i).LOADING)), 1)
          ])) : e(t) ? (C(), T(re, { key: 2 }, [
            u("div", nt, "debug: liveList.length=" + N((e(R) || []).length) + ", mergedMonitorList.length=" + N(oe.value.length) + ", hasLiveData=" + N(e(t)), 1),
            (C(!0), T(re, null, he(oe.value, (y) => (C(), se(Ya, {
              key: `${k.value}:${y.liveId}`,
              card: y,
              "adaptive-result": e(ae)(y.liveId),
              "is-muted": y.isMuted ?? !1,
              "is-fullscreen": L.value,
              "fullscreen-live-id": b.value,
              "anchor-avatar": _(y),
              "anchor-name": f(y),
              onViewDetails: ze,
              onViolationWarning: We,
              onForceStop: Ge,
              onExitFullscreen: Ke,
              onHover: c[1] || (c[1] = (qe) => D.value = qe)
            }, null, 8, ["card", "adaptive-result", "is-muted", "is-fullscreen", "fullscreen-live-id", "anchor-avatar", "anchor-name"]))), 128))
          ], 64)) : (C(), T("div", at, [
            u("div", tt, [
              A(e(Pe))
            ]),
            u("p", null, N(e(n)(e(i).NO_LIVE_RIGHT_NOW)), 1)
          ]))
        ]),
        e(r) ? ee("", !0) : (C(), se(Na, {
          key: 0,
          "current-page": e(J),
          "has-more-data": e(Q),
          loading: e(Z),
          onGoToFirstPage: e(De),
          onPrevPage: e(ve),
          onNextPage: e(Oe)
        }, null, 8, ["current-page", "has-more-data", "loading", "onGoToFirstPage", "onPrevPage", "onNextPage"])),
        A(M, {
          visible: w.value.visible,
          "onUpdate:visible": c[2] || (c[2] = (y) => w.value.visible = y),
          header: e(n)(e(i).CONFIRM_ACTION_TITLE, { action: e(n)(e(i).FORCE_STOP) }),
          "confirm-btn": { content: w.value.closing ? e(n)(e(i).CLOSING) : e(n)(e(i).CONFIRM_BAN_LIVE), loading: w.value.closing, theme: "primary", shape: "round" },
          "cancel-btn": { content: e(n)(e(i).CANCEL), disabled: w.value.closing, shape: "round" },
          onConfirm: He,
          onCancel: Be
        }, {
          default: $(() => [
            u("p", null, N(e(n)(e(i).FORCE_STOP_CONFIRM_CONTENT)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        e(F) ? (C(), se(M, {
          key: 1,
          visible: e(F).visible,
          header: e(F).title,
          "confirm-btn": {
            content: e(F).confirmText ?? e(n)(e(i).CONFIRM),
            loading: e(Y),
            shape: "round"
          },
          "cancel-btn": {
            content: e(n)(e(i).CANCEL),
            disabled: e(Y),
            shape: "round"
          },
          onConfirm: e(q),
          onCancel: e(z),
          onClose: e(z)
        }, {
          default: $(() => [
            u("p", null, N(e(F).content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn", "onConfirm", "onCancel", "onClose"])) : ee("", !0)
      ]);
    };
  }
}), St = /* @__PURE__ */ be(ot, [["__scopeId", "data-v-6d9dc432"]]);
export {
  St as default
};
