import { jsxs as m, jsx as t, Fragment as be } from "react/jsx-runtime";
import { useMemo as ve, useRef as R, useEffect as k, useState as M, useCallback as p } from "react";
import { useNavigate as Ve } from "react-router-dom";
import { useUIKit as ce } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as Fe, RefreshIcon as Ue, FullscreenIcon as Me, NotificationIcon as xe, StopCircleIcon as ke } from "tdesign-icons-react";
import { Input as $e, Button as X, Dialog as Ie } from "tdesign-react";
import { u as he, a as Ge, s as We } from "../../chunks/live-monitor.DzfKuVn6.js";
import { g as re, P as te, bC as ze, bD as He, E as se, s as me, p as Ke, f as Be, bK as qe, bH as Ye, bE as je, bF as Xe } from "../../chunks/main-layout.BqLTYqar.js";
import { I as n, g as Ze, a3 as Ne, a9 as Je, a7 as Qe, a6 as er, b as rr, q, W as Le, O as tr, E as nr, P as ar } from "../../chunks/layout.DppKPdLU.js";
import { c as ge } from "../../chunks/logger.DCFRj533.js";
import "../../chunks/useSvgaPlayer.xaOB2im4.js";
import { M as B } from "../../chunks/useAsyncAction.Ce9HnFRp.js";
import { u as or } from "../../chunks/useConfirmAction.CRsj8aPf.js";
import { c as ir } from "../../chunks/config.BhtXZwQl.js";
import { c as sr } from "../../chunks/mock.Bnui3Fqh.js";
import { M as cr } from "../../chunks/MonitorPagination.DFg391Ih.js";
import { A as lr } from "../../chunks/AnchorAvatar.DaGA8h42.js";
import { S as dr } from "../../chunks/SlotRenderer.vgqO2kMA.js";
import { s as ur, t as vr, f as hr } from "../../chunks/utils.Bs5D6gUq.js";
import { s as gr, V as fr, A as pr } from "../../chunks/adaptive-tags-runtime.Cka5EKuv.js";
const Ir = ({
  searchInput: e,
  onSearchInputChange: s,
  onSearch: d,
  onClearSearch: _,
  onRefresh: I,
  refreshing: N
}) => {
  const { t: v } = ce(), T = () => {
    if (re(e) > te) {
      B.error(v(n.INPUT_TOO_LONG));
      return;
    }
    d();
  };
  return /* @__PURE__ */ m("div", { className: "monitor-header", children: [
    /* @__PURE__ */ t("div", { className: "monitor-title-section", children: /* @__PURE__ */ t("h2", { className: "monitor-title", children: v(n.LIVE_MONITOR) }) }),
    /* @__PURE__ */ m("div", { className: "monitor-header-actions", children: [
      /* @__PURE__ */ t(
        $e,
        {
          value: e,
          onChange: s,
          onEnter: T,
          clearable: !0,
          onClear: _,
          placeholder: v(n.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ t(Fe, { size: 16 }),
          className: "monitor-search-input",
          status: re(e) > te ? "error" : "default",
          tips: re(e) > te ? v(n.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ t(
        X,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ t(Ue, {}),
          loading: N,
          onClick: I,
          children: v(n.REFRESH)
        }
      )
    ] })
  ] });
}, mr = ({
  item: e,
  hoveredCardId: s,
  hoveredTagId: d,
  isMuted: _,
  userProfile: I,
  displayTags: N,
  adaptiveResult: v,
  onMouseEnter: T,
  onMouseLeave: $,
  onClickDetails: i,
  onViolationWarning: w,
  onCloseLive: a,
  onTagHover: g
}) => {
  const { t: c } = ce(), { startPlay: l, stopPlay: L } = he(), F = Ze().components?.liveMonitor, D = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, K = e.avatarUrl?.trim() || "", G = I?.avatarUrl || e.anchor?.avatarUrl || K || ze(e), b = I?.nick || e.anchor?.nick || He(e, c(n.UNKNOWN_HOST)), Z = e.stats?.viewCount ?? 0, W = ve(() => `live_monitor_view_${e.liveId}`, [e.liveId]), U = R(""), V = R(0), S = R(null);
  return k(() => {
    const o = e.liveId;
    if (!o) return;
    const Y = ++V.current;
    let E = !1;
    return (async () => {
      for (; S.current; )
        try {
          await S.current;
        } catch {
        }
      try {
        if (await l({ liveId: o, containerId: W }), E || V.current !== Y) {
          L(o).catch((C) => {
            console.warn("[LiveCard] Failed to stop play during unmount:", C);
          });
          return;
        }
        U.current = o;
      } catch (C) {
        !E && V.current === Y && (C === se.LOGIN_TIMEOUT || C === se.USER_SIG_ILLEGAL) && (Qe(), er(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required");
      }
    })(), () => {
      E = !0, V.current += 1;
      const C = U.current || o;
      U.current === C && (U.current = ""), S.current = L(C), S.current.catch(() => {
      });
    };
  }, [e.liveId, W, l, L]), /* @__PURE__ */ m(
    "div",
    {
      className: `live-card ${s === e.liveId ? "hovered" : ""}`,
      onMouseEnter: T,
      onMouseLeave: $,
      children: [
        /* @__PURE__ */ m("div", { id: e.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${D ? Ne : e.backgroundUrl || e.coverUrl || Je})`
              }
            }
          ),
          D && e.coverUrl && /* @__PURE__ */ t(
            "img",
            {
              src: e.coverUrl,
              alt: e.liveName || "",
              className: "live-card-cover-image",
              onError: (o) => {
                o.target.src = Ne;
              }
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              id: W,
              className: "live-video-player"
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-id-badge",
              style: { maxWidth: v.idMaxWidth },
              children: /* @__PURE__ */ t("span", { title: e.liveId, children: `${c(n.LIVE_ID)}: ${e.liveId}` })
            }
          ),
          N.length > 0 && /* @__PURE__ */ m(
            "div",
            {
              className: "live-card-tags-overlay",
              style: { maxWidth: v.tagsMaxWidth },
              children: [
                N.slice(0, v.visibleCount).map((o) => /* @__PURE__ */ m("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ m("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ t("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ t("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  c(o)
                ] }, o)),
                v.showMore && /* @__PURE__ */ m(
                  "div",
                  {
                    className: "tag-more-wrapper",
                    onMouseLeave: () => g(null),
                    children: [
                      /* @__PURE__ */ t(
                        "span",
                        {
                          className: "live-card-tag-overlay live-card-tag-more",
                          onMouseEnter: () => g(e.liveId),
                          children: "..."
                        }
                      ),
                      d === e.liveId && /* @__PURE__ */ t(
                        "div",
                        {
                          className: "live-card-tag-dropdown",
                          onMouseEnter: () => g(e.liveId),
                          onClick: (o) => o.stopPropagation(),
                          children: N.slice(v.visibleCount).map((o) => /* @__PURE__ */ m("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ m("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ t("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ t("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                            ] }),
                            c(o)
                          ] }, o))
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-video-overlay",
              onClick: (o) => {
                o.stopPropagation(), i();
              },
              children: /* @__PURE__ */ m("div", { className: "overlay-btn primary", children: [
                /* @__PURE__ */ t(Me, { size: 16 }),
                c(n.VIEW_DETAILS)
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ m("div", { className: "live-card-info", children: [
          /* @__PURE__ */ t("div", { className: "live-card-title", title: e.liveName || c(n.UNNAMED_LIVE), children: e.liveName || c(n.UNNAMED_LIVE) }),
          /* @__PURE__ */ m("div", { className: "live-card-meta", children: [
            /* @__PURE__ */ m("div", { className: "live-card-anchor", children: [
              /* @__PURE__ */ t(
                lr,
                {
                  className: "anchor-avatar",
                  src: G,
                  name: b,
                  title: b
                }
              ),
              /* @__PURE__ */ t("span", { className: "anchor-name", title: b, children: b })
            ] }),
            /* @__PURE__ */ m("span", { className: "meta-viewer-count", title: String(Z), children: [
              Z,
              c(n.VIEWS)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m("div", { className: `live-card-actions ${s === e.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ t(
            X,
            {
              className: "card-action",
              variant: "text",
              theme: "warning",
              icon: /* @__PURE__ */ t(xe, { size: 16 }),
              onClick: (o) => {
                o.stopPropagation(), w();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: c(n.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ t(dr, { slot: F?.userActionExtraItems, props: { live: e } }),
          /* @__PURE__ */ t(
            X,
            {
              className: "card-action",
              variant: "text",
              theme: "danger",
              icon: /* @__PURE__ */ t(ke, { size: 16 }),
              onClick: (o) => {
                o.stopPropagation(), a();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: c(n.FORCE_STOP) })
            }
          )
        ] })
      ]
    },
    e.liveId
  );
}, ie = ge("LiveMonitorData"), Nr = () => {
  const e = he(), s = Ge(), { t: d } = ce(), [_, I] = M(s.currentPage), [N, v] = M(s.hasMore), [T, $] = M(s.loading), [i, w] = M(s.pageData);
  k(() => {
    const u = We((h) => {
      I(h.currentPage), v(h.hasMoreData), $(h.loading), w([...h.list]);
    });
    return () => {
      u(), b.next();
    };
  }, []);
  const a = i.length > 0, [g, c] = M(/* @__PURE__ */ new Map()), l = R(!1), L = R(/* @__PURE__ */ new Map());
  L.current = ve(() => {
    const u = /* @__PURE__ */ new Map();
    return u.set(_, i), u;
  }, [_, i]);
  const F = R([]);
  F.current = i;
  const D = R(), K = R(g);
  K.current = g;
  const G = R();
  G.current || (G.current = me());
  const b = G.current;
  D.current || (D.current = me(), Ke(
    D.current,
    hr((u) => u.length > 0),
    gr((u) => Be(rr(u))),
    vr(b),
    ur(
      (u) => {
        c((h) => {
          const y = new Map(h);
          return u.forEach((x, O) => {
            y.set(O, x);
          }), y;
        });
      },
      (u) => {
        ie.error("useLiveMonitorData", "Fastrx profile fetch failed:", u);
      }
    )
  )), k(() => {
    if (i.length === 0) return;
    const u = i.map((y) => y.anchor?.userId || "").filter(Boolean);
    if (u.length === 0) return;
    const h = u.filter((y) => !K.current.has(y));
    h.length !== 0 && D.current?.next(h);
  }, [i, g, l]);
  const [Z, W] = M(!1), [U, V] = M(!1), [S, o] = M(!1), [Y, E] = M(""), [J, C] = M(null), z = R(!1), Q = R(0), le = p(async (u, h, y) => {
    if (!s.loading)
      try {
        !h && y <= 1 && u > 1 ? await s.prevPage() : await s.refreshCurrentPage();
      } catch (x) {
        ie.error("closeLiveSuccess 翻页失败", `(ErrorCode: ${q(x).code || "N/A"})`, x);
      }
  }, [s]), ne = p(async (u) => {
    if (s.loading) return;
    const h = (u ?? "").trim();
    if (!h || re(h) > te) {
      h && re(h) > te && B.error(d(n.INPUT_TOO_LONG));
      return;
    }
    const y = h;
    W(!0);
    const x = ++Q.current;
    try {
      const O = await e.fetchLiveDetail(y);
      if (l.current || Q.current !== x)
        return;
      if (!O) {
        B.error(d(n.NO_SEARCH_RESULTS_FOR, { keyword: h })), E(""), o(!1), z.current = !1, C(null), await s.goToFirstPage();
        return;
      }
      o(!0), z.current = !0, C([O]), B.success(d(n.SEARCH_SUCCESS));
    } catch (O) {
      if (ie.error("搜索直播间失败", `(ErrorCode: ${q(O).code || "N/A"})`, O), O === se.LOGIN_TIMEOUT || O === se.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required";
        return;
      }
      B.error(d(n.NO_SEARCH_RESULTS_FOR, { keyword: h })), E(""), o(!1), z.current = !1, C(null), await s.goToFirstPage();
    } finally {
      l.current || W(!1);
    }
  }, [e, l, s, d]), de = p(async () => {
    if (s.loading) return;
    const u = z.current;
    if (E(""), o(!1), z.current = !1, C(null), !!u)
      try {
        await s.goToFirstPage();
      } catch {
      }
  }, [s]), ue = p(async () => {
    if (!(U || s.loading)) {
      V(!0);
      try {
        S && (o(!1), z.current = !1, E("")), await s.refreshCurrentPage(), B.success(d(n.REFRESHED));
      } catch (u) {
        ie.error("刷新失败", `(ErrorCode: ${q(u).code || "N/A"})`, u);
        const { info: h } = q(u);
        B.error(d(n.REFRESH_FAILED) + (h ? ` (${h})` : ""));
      } finally {
        l.current || V(!1);
      }
    }
  }, [U, s, S, d, l]);
  return {
    // —— 分页快照（响应式，来自 controller） ——
    currentPage: _,
    hasMoreData: N,
    loading: T,
    pageData: i,
    hasLiveData: a,
    // —— 用户资料缓存 ——
    userProfileMap: g,
    setUserProfileMap: c,
    // —— Refs（与分页解耦） ——
    isUnmountedRef: l,
    // —— 兼容老接口的只读 refs（仅当前页数据；不可 mutate） ——
    pageDataCacheRef: L,
    liveListRef: F,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: s,
    // —— 搜索相关 ——
    searching: Z,
    isSearchMode: S,
    searchInput: Y,
    searchResults: J,
    isSearchModeRef: z,
    setSearchInput: E,
    setIsSearchMode: o,
    setSearchResults: C,
    handleSearch: ne,
    handleClearSearch: de,
    // —— 刷新相关 ——
    refreshing: U,
    handleRefresh: ue,
    // —— 封禁后翻页 ——
    handleCloseLiveSuccess: le
  };
}, Lr = 8, Cr = ge("ViolationLabels"), Mr = (e) => {
  const { pageSize: s, isSearchModeRef: d, isUnmountedRef: _ } = e, [I, N] = M(/* @__PURE__ */ new Map()), v = R(null);
  v.current || (v.current = new fr({
    pageSize: s,
    getTimeRange: () => {
      const a = /* @__PURE__ */ new Date(), g = new Date(a.getTime() - 600 * 1e3), c = (l) => {
        const L = l.getFullYear(), F = String(l.getMonth() + 1).padStart(2, "0"), D = String(l.getDate()).padStart(2, "0"), K = String(l.getHours()).padStart(2, "0"), G = String(l.getMinutes()).padStart(2, "0"), b = String(l.getSeconds()).padStart(2, "0");
        return `${L}-${F}-${D} ${K}:${G}:${b}`;
      };
      return { startTime: c(g), endTime: c(a) };
    },
    isSearchMode: () => d.current,
    isUnmounted: () => _.current,
    onUpdate: (a, g) => {
      N((c) => {
        const l = new Map(c);
        return g.forEach((L, F) => {
          l.set(F, L);
        }), l;
      });
    },
    onError: (a) => {
      Cr.warn("LiveMonitor", "获取直播违规标签失败:", a);
    }
  }), v.current.ensureStarted()), k(() => () => {
    v.current?.stop();
  }, []);
  const T = p(async (a, g, c) => {
    d.current || _.current || v.current?.feed(a);
  }, [d, _]), $ = p(() => {
    v.current?.stop();
  }, []), i = p((...a) => {
    const g = [];
    for (const c of a)
      for (const l of c || [])
        l && !g.includes(l) && g.push(l);
    return g;
  }, []), w = p((a) => i(
    I.get(a.liveId)
  ), [i, I]);
  return {
    liveViolationLabelMap: I,
    loadLiveViolationLabelsForPage: T,
    clearLiveViolationRefreshTimer: $,
    getLiveDisplayTags: w
  };
};
function _r(e, s) {
  const d = R(null), [, _] = M(0);
  d.current || (d.current = new pr({
    containerSelector: ".live-monitor-grid",
    t: s
  }));
  const I = p(() => {
    _((i) => i + 1);
  }, []), N = p((i) => {
    const w = d.current, a = w.getResult(i);
    if (!a.visibleCount && !a.showMore && a.idMaxWidth === "calc(100% - 12px)") {
      const c = e()?.find((l) => l.liveId === i);
      c && setTimeout(() => {
        w.compute(i, c), I();
      }, 0);
    }
    return a;
  }, [I, e]), v = p(() => {
    d.current?.observe(() => {
      I();
    });
  }, [I]), T = p(() => {
    d.current?.disconnect();
  }, []), $ = p((i) => {
    d.current?.initForList(i), I();
  }, [I]);
  return k(() => () => {
    d.current?.disconnect(), d.current = null;
  }, []), {
    getAdaptiveResult: N,
    initResizeObserver: v,
    cleanupResizeObserver: T,
    initAdaptiveTags: $
  };
}
const A = ge("LiveMonitor");
let H = null, ee = null, Ce = null;
const Hr = () => {
  const { t: e } = ce(), s = Ve(), { init: d, stopPlay: _, endLive: I } = he(), {
    currentPage: N,
    hasMoreData: v,
    loading: T,
    hasLiveData: $,
    pageData: i,
    isUnmountedRef: w,
    paginatedList: a,
    userProfileMap: g,
    // 搜索相关
    isSearchMode: c,
    searchInput: l,
    searchResults: L,
    isSearchModeRef: F,
    setSearchInput: D,
    handleSearch: K,
    handleClearSearch: G,
    // 刷新相关
    refreshing: b,
    handleRefresh: Z,
    // 封禁后翻页
    handleCloseLiveSuccess: W
  } = Nr(), [U, V] = M(!1), [S, o] = M({ visible: !1, liveId: "", liveName: "", closing: !1 }), Y = R({ liveId: "", liveName: "" }), { confirmDialog: E, requestConfirm: J, cancelConfirm: C, executeWithConfirm: z, loading: Q } = or({
    operationName: e(n.SEND_VIOLATION_WARNING),
    action: async () => {
      const { liveId: r, liveName: f } = Y.current;
      if (!r) throw new Error("liveId is required");
      const P = f || r;
      await qe(r, {
        violationType: e(n.VIOLATION_TYPE_WARNING),
        violationContent: e(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: P }),
        handleSuggestion: e(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: e(n.CONFIRM_ACTION_TITLE, { action: e(n.SEND_VIOLATION_WARNING) }),
      content: e(n.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: e(n.CONFIRM)
    },
    errorMessage: e(n.SEND_FAILED),
    showSuccess: !0
  }), [le, ne] = M(null), [de, ue] = M(null), {
    getAdaptiveResult: u,
    initResizeObserver: h,
    cleanupResizeObserver: y,
    initAdaptiveTags: x
  } = _r(
    () => i.map((r) => ({
      liveId: r.liveId,
      tags: ae(r)
    })),
    e
  ), {
    liveViolationLabelMap: O,
    loadLiveViolationLabelsForPage: fe,
    clearLiveViolationRefreshTimer: _e,
    getLiveDisplayTags: ae
  } = Mr({
    pageSize: Lr,
    isSearchModeRef: F,
    isUnmountedRef: w
  }), Se = (r) => {
    D(String(r));
  }, Ee = p(async () => {
    if (!a.loading)
      try {
        await a.prevPage();
      } catch (r) {
        A.error("prevPage 失败", `(ErrorCode: ${q(r).code || "N/A"})`, r);
      }
  }, [a]), Te = p(async () => {
    if (!a.loading)
      try {
        await a.nextPage();
      } catch (r) {
        A.error("nextPage 失败", `(ErrorCode: ${q(r).code || "N/A"})`, r);
      }
  }, [a]), Re = p(async () => {
    if (!a.loading)
      try {
        await a.goToFirstPage();
      } catch (r) {
        A.error("goToFirstPage 失败", `(ErrorCode: ${q(r).code || "N/A"})`, r);
      }
  }, [a]);
  k(() => {
    T || i.length === 0 || fe(i, N, 0);
  }, [i, N, T, fe]), k(() => (h(), () => {
    y();
  }), [h, y]);
  const ye = p((r, f) => {
    o({ visible: !0, liveId: r, liveName: f, closing: !1 });
  }, []), Ae = p(async () => {
    const { liveId: r } = S;
    if (r) {
      o((f) => ({ ...f, closing: !0 }));
      try {
        await _(r), await I(r), o({ visible: !1, liveId: "", liveName: "", closing: !1 }), B.success(e(n.LIVE_FORCIBLY_CLOSED)), await W(N, v, i.length);
      } catch (f) {
        A.error("封禁直播失败", `(ErrorCode: ${q(f).code || "N/A"})`, f), o((P) => ({ ...P, closing: !1 }));
      }
    }
  }, [S, _, I, W, N, v, i.length, e]), pe = p(() => {
    o({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), we = p((r, f) => {
    Y.current = { liveId: r, liveName: f }, J();
  }, [J]), Oe = p((r) => {
    try {
      const f = a.getSnapshot();
      Ye({
        currentPage: f.currentPage,
        pageCursors: f.pageCursors
      });
    } catch {
    }
    s(`/live-control/${r}`, { state: { from: "live-monitor" } });
  }, [a, s]), Pe = ve(
    () => c && L ? L : i,
    [c, L, i]
  ), De = c ? L && L.length > 0 : $;
  return k(() => {
    O.size !== 0 && x(
      i.map((r) => ({
        liveId: r.liveId,
        tags: ae(r)
      }))
    );
  }, [O, i, ae, x]), k(() => {
    (async () => {
      try {
        const f = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        H || (H = await tr() ?? null, H && H.sdkAppId !== 0 && !nr() && (ar({ userId: H.userId, userSig: H.userSig, sdkAppId: H.sdkAppId, configured: !0 }), A.info("LiveMonitor", "Admin account saved to auth-store:", H.userId))), (Ce !== f || !ee) && (Ce = f, f === "admin" ? ee = H : (ee = await je("audience") ?? null, A.info("LiveMonitor", "Room entry account created (not saved to auth-store):", ee?.userId)));
        const P = ee;
        if (P && P.sdkAppId !== 0) {
          A.info("LiveMonitor", "Initializing SDK with account:", P.userId), ir({
            baseURL: "http://localhost:9000/api",
            authToken: P.userSig
          });
          const oe = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
          d({
            baseURL: "http://localhost:9000/api",
            playerFactory: oe ? sr() : void 0
          }), A.info("LiveMonitor", "SDK initialized, mock mode:", oe);
          const j = Xe();
          j.pageToLoad > 1 ? (A.info("LiveMonitor", "Restoring pagination state, page:", j.pageToLoad), await a.goToPage(j.pageToLoad, j.pageCursors), A.info("LiveMonitor", "Pagination state restored to page", j.pageToLoad)) : (await a.goToFirstPage(), A.info("LiveMonitor", "goToFirstPage done")), V(!0);
        } else
          A.error("LiveMonitor", "No valid credentials found"), V(!0);
      } catch (f) {
        A.error("LiveMonitor", "SDK init error:", f), V(!0);
      }
    })();
  }, []), k(() => (w.current = !1, () => {
    w.current = !0, _e();
  }), []), /* @__PURE__ */ m("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ t(
      Ir,
      {
        searchInput: l,
        onSearchInputChange: Se,
        onSearch: () => K(l),
        onClearSearch: G,
        onRefresh: Z,
        refreshing: b
      }
    ),
    /* @__PURE__ */ t("div", { className: "live-monitor-grid", children: T || !U ? /* @__PURE__ */ m("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ t("div", { className: "loading-spinner" }),
      /* @__PURE__ */ t("span", { children: e(n.LOADING) })
    ] }) : De ? Pe.map((r) => {
      const f = ae(r), P = r.anchor?.userId || "", oe = P && (g.get(P) || g.get(P.toLowerCase())) || r.anchor;
      return /* @__PURE__ */ t(
        mr,
        {
          item: r,
          hoveredCardId: le,
          hoveredTagId: de,
          isMuted: !!r.isMuted,
          userProfile: oe,
          displayTags: f,
          adaptiveResult: u(r.liveId),
          onMouseEnter: () => ne(r.liveId),
          onMouseLeave: () => ne(null),
          onClickDetails: () => Oe(r.liveId),
          onViolationWarning: () => we(r.liveId, r.liveName || e(n.UNNAMED_LIVE)),
          onCloseLive: () => ye(r.liveId, r.liveName || e(n.UNNAMED_LIVE)),
          onTagHover: (j) => ue(j)
        },
        `${N}:${r.liveId}`
      );
    }) : /* @__PURE__ */ m("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ t("div", { className: "empty-icon", children: /* @__PURE__ */ t(Me, { size: 48 }) }),
      /* @__PURE__ */ t("p", { children: e(n.NO_LIVE_RIGHT_NOW) })
    ] }) }),
    !c && /* @__PURE__ */ t(
      cr,
      {
        currentPage: N,
        hasMoreData: v,
        loading: T,
        onPrevPage: Ee,
        onNextPage: Te,
        onGoToFirstPage: Re
      }
    ),
    /* @__PURE__ */ t(
      Ie,
      {
        visible: S.visible,
        header: e(n.CONFIRM_ACTION_TITLE, { action: e(n.FORCE_STOP) }),
        onClose: pe,
        width: Le.CONFIRM,
        footer: /* @__PURE__ */ m(be, { children: [
          /* @__PURE__ */ t(X, { shape: "round", variant: "outline", onClick: pe, disabled: S.closing, children: e(n.CANCEL) }),
          /* @__PURE__ */ t(
            X,
            {
              shape: "round",
              theme: "primary",
              onClick: Ae,
              disabled: S.closing,
              children: S.closing ? e(n.CLOSING) : e(n.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ t("p", { children: e(n.FORCE_STOP_CONFIRM_CONTENT) })
      }
    ),
    E && /* @__PURE__ */ t(
      Ie,
      {
        visible: E.visible,
        header: E.title,
        width: Le.CONFIRM,
        confirmBtn: /* @__PURE__ */ t(X, { shape: "round", loading: Q, onClick: () => z(), children: E.confirmText ?? e(n.CONFIRM) }),
        cancelBtn: /* @__PURE__ */ t(X, { variant: "outline", shape: "round", disabled: Q, onClick: C, children: e(n.CANCEL) }),
        onClose: C,
        children: /* @__PURE__ */ t("p", { children: E.content })
      }
    )
  ] });
};
export {
  Hr as default
};
