import { jsxs as f, jsx as r, Fragment as xe } from "react/jsx-runtime";
import { I as a, a as Ue, p as _e, S as ke, F as $e, E as Ge, c as me, u as fe, t as We, ak as j, aY as ge, A as He, a$ as ze, D as Ce, b5 as Ke, aH as Be, b6 as Ye, bx as qe } from "../../chunks/shared-state.BkuXD95c.js";
import { useMemo as Ie, useRef as S, useEffect as $, useState as M, useCallback as p } from "react";
import { useNavigate as Xe } from "react-router-dom";
import { useUIKit as de } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as je, RefreshIcon as Ze, FullscreenIcon as pe, NotificationIcon as Je, StopCircleIcon as Qe } from "tdesign-icons-react";
import { Input as er, Loading as rr, Button as X, Dialog as Me } from "tdesign-react";
import { useLiveMonitorState as Ne, usePaginatedList as tr, subscribeToPagination as ar, useConfirmAction as nr } from "../../react.js";
import { g as re, T as te, bx as or, by as ir, E as le, s as Ee, p as sr, d as cr, t as lr, f as dr, b$ as ur, bH as hr, bD as vr, bz as gr, bA as fr } from "../../chunks/main-layout.CW0IWNsf.js";
import { M as Q } from "../../chunks/useAsyncAction.jPDjgEh7.js";
import { c as pr } from "../../chunks/mock.Bnui3Fqh.js";
import { M as mr } from "../../chunks/MonitorPagination.CUUppR9F.js";
import { A as Ir } from "../../chunks/AnchorAvatar.CaDt8Gt2.js";
import { S as Nr } from "../../chunks/SlotRenderer.C6HRizAC.js";
import { s as Lr, V as _r } from "../../chunks/violation-labels-poller.BpwFYNRp.js";
const Cr = ({
  searchInput: e,
  onSearchInputChange: o,
  onSearch: c,
  onClearSearch: T,
  onRefresh: m,
  refreshing: I,
  searching: v = !1
}) => {
  const { t: N } = de(), V = () => {
    if (re(e) > te) {
      Q.error(N(a.INPUT_TOO_LONG));
      return;
    }
    c();
  };
  return /* @__PURE__ */ f("div", { className: "monitor-header", children: [
    /* @__PURE__ */ r("div", { className: "monitor-title-section", children: /* @__PURE__ */ r("h2", { className: "monitor-title", children: N(a.LIVE_MONITOR) }) }),
    /* @__PURE__ */ f("div", { className: "monitor-header-actions", children: [
      /* @__PURE__ */ r(
        er,
        {
          value: e,
          onChange: o,
          onEnter: V,
          clearable: !0,
          disabled: v,
          onClear: T,
          placeholder: N(a.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: v ? /* @__PURE__ */ r(rr, { size: "16px" }) : /* @__PURE__ */ r(je, { size: 16, style: { cursor: "pointer" }, onClick: () => c() }),
          className: "monitor-search-input",
          status: re(e) > te ? "error" : "default",
          tips: re(e) > te ? N(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ r(
        X,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ r(Ze, {}),
          loading: I,
          onClick: m,
          children: N(a.REFRESH)
        }
      )
    ] })
  ] });
}, Mr = ({
  item: e,
  hoveredCardId: o,
  hoveredTagId: c,
  isMuted: T,
  userProfile: m,
  displayTags: I,
  adaptiveResult: v,
  onMouseEnter: N,
  onMouseLeave: V,
  onClickDetails: h,
  onViolationWarning: O,
  onCloseLive: n,
  onTagHover: L
}) => {
  const { t: s } = de(), { startPlay: d, stopPlay: _ } = Ne(), E = Ue().components?.liveMonitor, G = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, K = e.avatarUrl?.trim() || "", x = m?.avatarUrl || e.anchor?.avatarUrl || K || or(e), F = m?.nick || e.anchor?.nick || ir(e, s(a.UNKNOWN_HOST)), B = e.stats?.viewCount ?? 0, Y = Ie(() => `live_monitor_view_${e.liveId}`, [e.liveId]), W = S(""), H = S(0), P = S(null);
  return $(() => {
    const i = e.liveId;
    if (!i) return;
    const w = ++H.current;
    let y = !1;
    return (async () => {
      for (; P.current; )
        try {
          await P.current;
        } catch {
        }
      try {
        if (await d({ liveId: i, containerId: Y }), y || H.current !== w) {
          _(i).catch((C) => {
            console.warn("[LiveCard] Failed to stop play during unmount:", C);
          });
          return;
        }
        W.current = i;
      } catch (C) {
        !y && H.current === w && (C === le.LOGIN_TIMEOUT || C === le.USER_SIG_ILLEGAL) && ($e(), Ge(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required");
      }
    })(), () => {
      y = !0, H.current += 1;
      const C = W.current || i;
      W.current === C && (W.current = ""), P.current = _(C), P.current.catch(() => {
      });
    };
  }, [e.liveId, Y, d, _]), /* @__PURE__ */ f(
    "div",
    {
      className: `live-card ${o === e.liveId ? "hovered" : ""}`,
      onMouseEnter: N,
      onMouseLeave: V,
      children: [
        /* @__PURE__ */ f("div", { id: e.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ r(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${G ? _e : e.backgroundUrl || e.coverUrl || ke})`
              }
            }
          ),
          G && e.coverUrl && /* @__PURE__ */ r(
            "img",
            {
              src: e.coverUrl,
              alt: e.liveName || "",
              className: "live-card-cover-image",
              onError: (i) => {
                i.target.src = _e;
              }
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              id: Y,
              className: "live-video-player"
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: "live-id-badge",
              style: { maxWidth: v.idMaxWidth },
              children: /* @__PURE__ */ r("span", { title: e.liveId, children: `${s(a.LIVE_ID)}: ${e.liveId}` })
            }
          ),
          I.length > 0 && /* @__PURE__ */ f(
            "div",
            {
              className: "live-card-tags-overlay",
              style: { maxWidth: v.tagsMaxWidth },
              children: [
                I.slice(0, v.visibleCount).map((i) => /* @__PURE__ */ f("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ f("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ r("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ r("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  s(i)
                ] }, i)),
                v.showMore && /* @__PURE__ */ f(
                  "div",
                  {
                    className: "tag-more-wrapper",
                    onMouseLeave: () => L(null),
                    children: [
                      /* @__PURE__ */ r(
                        "span",
                        {
                          className: "live-card-tag-overlay live-card-tag-more",
                          onMouseEnter: () => L(e.liveId),
                          children: "..."
                        }
                      ),
                      c === e.liveId && /* @__PURE__ */ r(
                        "div",
                        {
                          className: "live-card-tag-dropdown",
                          onMouseEnter: () => L(e.liveId),
                          onClick: (i) => i.stopPropagation(),
                          children: I.slice(v.visibleCount).map((i) => /* @__PURE__ */ f("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ f("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ r("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ r("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                            ] }),
                            s(i)
                          ] }, i))
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              className: "live-video-overlay",
              onClick: (i) => {
                i.stopPropagation(), h();
              },
              children: /* @__PURE__ */ f("div", { className: "overlay-btn primary", children: [
                /* @__PURE__ */ r(pe, { size: 16 }),
                s(a.VIEW_DETAILS)
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ f("div", { className: "live-card-info", children: [
          /* @__PURE__ */ r("div", { className: "live-card-title", title: e.liveName || s(a.UNNAMED_LIVE), children: e.liveName || s(a.UNNAMED_LIVE) }),
          /* @__PURE__ */ f("div", { className: "live-card-meta", children: [
            /* @__PURE__ */ f("div", { className: "live-card-anchor", children: [
              /* @__PURE__ */ r(
                Ir,
                {
                  className: "anchor-avatar",
                  src: x,
                  name: F,
                  title: F
                }
              ),
              /* @__PURE__ */ r("span", { className: "anchor-name", title: F, children: F })
            ] }),
            /* @__PURE__ */ f("span", { className: "meta-viewer-count", title: String(B), children: [
              B,
              s(a.VIEWS)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f("div", { className: `live-card-actions ${o === e.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ r(
            X,
            {
              className: "card-action",
              variant: "text",
              theme: "warning",
              icon: /* @__PURE__ */ r(Je, { size: 16 }),
              onClick: (i) => {
                i.stopPropagation(), O();
              },
              children: /* @__PURE__ */ r("span", { className: "button-text", children: s(a.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ r(Nr, { slot: E?.userActionExtraItems, props: { live: e } }),
          /* @__PURE__ */ r(
            X,
            {
              className: "card-action",
              variant: "text",
              theme: "danger",
              icon: /* @__PURE__ */ r(Qe, { size: 16 }),
              onClick: (i) => {
                i.stopPropagation(), n();
              },
              children: /* @__PURE__ */ r("span", { className: "button-text", children: s(a.FORCE_STOP) })
            }
          )
        ] })
      ]
    },
    e.liveId
  );
}, ce = me("LiveMonitorData"), Er = () => {
  const e = Ne(), o = tr(), { t: c } = de(), { opSuccess: T, opFailed: m } = fe(c), [I, v] = M(o.currentPage), [N, V] = M(o.hasMore), [h, O] = M(o.loading), [n, L] = M(o.pageData);
  $(() => {
    const l = ar((u) => {
      v(u.currentPage), V(u.hasMoreData), O(u.loading), L([...u.list]);
    });
    return () => {
      l(), Y.next();
    };
  }, []);
  const s = n.length > 0, [d, _] = M(/* @__PURE__ */ new Map()), E = S(!1), G = S(/* @__PURE__ */ new Map());
  G.current = Ie(() => {
    const l = /* @__PURE__ */ new Map();
    return l.set(I, n), l;
  }, [I, n]);
  const K = S([]);
  K.current = n;
  const x = S(), F = S(d);
  F.current = d;
  const B = S();
  B.current || (B.current = Ee());
  const Y = B.current;
  x.current || (x.current = Ee(), sr(
    x.current,
    ur((l) => l.length > 0),
    Lr((l) => dr(We(l))),
    lr(Y),
    cr(
      (l) => {
        _((u) => {
          const R = new Map(u);
          return l.forEach((k, b) => {
            R.set(b, k);
          }), R;
        });
      },
      (l) => {
        ce.error("useLiveMonitorData", "Fastrx profile fetch failed:", l);
      }
    )
  )), $(() => {
    if (n.length === 0) return;
    const l = n.map((R) => R.anchor?.userId || "").filter(Boolean);
    if (l.length === 0) return;
    const u = l.filter((R) => !F.current.has(R));
    u.length !== 0 && x.current?.next(u);
  }, [n, d, E]);
  const [W, H] = M(!1), [P, i] = M(!1), [w, y] = M(!1), [q, C] = M(""), [ae, Z] = M(null), U = S(!1), ne = S(0), oe = p(async (l, u, R) => {
    if (!o.loading)
      try {
        !u && R <= 1 && l > 1 ? await o.prevPage() : await o.refreshCurrentPage();
      } catch (k) {
        ce.error("closeLiveSuccess 翻页失败", `(ErrorCode: ${j(k).code || "N/A"})`, k);
      }
  }, [o]), ue = p(async (l) => {
    if (o.loading) return;
    const u = (l ?? "").trim();
    if (!u || re(u) > te) {
      u && re(u) > te && Q.error(c(a.INPUT_TOO_LONG));
      return;
    }
    const R = u;
    H(!0);
    const k = ++ne.current;
    try {
      const b = await e.fetchLiveDetail(R);
      if (E.current || ne.current !== k)
        return;
      if (!b) {
        ge("live_search", "search", !1, u), Q.error(`${c(a.NO_SEARCH_RESULTS_FOR, { keyword: u })}
${c(a.SEARCH_EXACT_ID_HINT)}`), C(""), y(!1), U.current = !1, Z(null), await o.goToFirstPage();
        return;
      }
      y(!0), U.current = !0, Z([b]), ge("live_search", "search", !0, u);
    } catch (b) {
      if (ce.error("搜索直播间失败", `(ErrorCode: ${j(b).code || "N/A"})`, b), b === le.LOGIN_TIMEOUT || b === le.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required";
        return;
      }
      ge("live_search", "search", !1), Q.error(`${c(a.NO_SEARCH_RESULTS_FOR, { keyword: u })}
${c(a.SEARCH_EXACT_ID_HINT)}`), C(""), y(!1), U.current = !1, Z(null), await o.goToFirstPage();
    } finally {
      E.current || H(!1);
    }
  }, [e, E, o, c]), he = p(async () => {
    if (o.loading) return;
    const l = U.current;
    if (C(""), y(!1), U.current = !1, Z(null), !!l)
      try {
        await o.goToFirstPage();
      } catch {
      }
  }, [o]), ve = p(async () => {
    if (!(P || o.loading)) {
      i(!0);
      try {
        w && (y(!1), U.current = !1, C("")), await o.refreshCurrentPage(), Q.success(T(a.REFRESH));
      } catch (l) {
        ce.error("刷新失败", `(ErrorCode: ${j(l).code || "N/A"})`, l);
        const { info: u } = j(l);
        Q.error(m(a.REFRESH) + (u ? ` (${u})` : ""));
      } finally {
        E.current || i(!1);
      }
    }
  }, [P, o, w, c, E]);
  return {
    // —— 分页快照（响应式，来自 controller） ——
    currentPage: I,
    hasMoreData: N,
    loading: h,
    pageData: n,
    hasLiveData: s,
    // —— 用户资料缓存 ——
    userProfileMap: d,
    setUserProfileMap: _,
    // —— Refs（与分页解耦） ——
    isUnmountedRef: E,
    // —— 兼容老接口的只读 refs（仅当前页数据；不可 mutate） ——
    pageDataCacheRef: G,
    liveListRef: K,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: o,
    // —— 搜索相关 ——
    searching: W,
    isSearchMode: w,
    searchInput: q,
    searchResults: ae,
    isSearchModeRef: U,
    setSearchInput: C,
    setIsSearchMode: y,
    setSearchResults: Z,
    handleSearch: ue,
    handleClearSearch: he,
    // —— 刷新相关 ——
    refreshing: P,
    handleRefresh: ve,
    // —— 封禁后翻页 ——
    handleCloseLiveSuccess: oe
  };
}, Sr = 8, Tr = me("ViolationLabels"), yr = (e) => {
  const { pageSize: o, isSearchModeRef: c, isUnmountedRef: T } = e, [m, I] = M(/* @__PURE__ */ new Map()), v = S(null);
  v.current || (v.current = new _r({
    pageSize: o,
    getTimeRange: () => {
      const n = /* @__PURE__ */ new Date(), L = new Date(n.getTime() - 600 * 1e3), s = (d) => {
        const _ = d.getFullYear(), E = String(d.getMonth() + 1).padStart(2, "0"), G = String(d.getDate()).padStart(2, "0"), K = String(d.getHours()).padStart(2, "0"), x = String(d.getMinutes()).padStart(2, "0"), F = String(d.getSeconds()).padStart(2, "0");
        return `${_}-${E}-${G} ${K}:${x}:${F}`;
      };
      return { startTime: s(L), endTime: s(n) };
    },
    isSearchMode: () => c.current,
    isUnmounted: () => T.current,
    onUpdate: (n, L) => {
      I((s) => {
        const d = new Map(s);
        return L.forEach((_, E) => {
          d.set(E, _);
        }), d;
      });
    },
    onError: (n) => {
      Tr.warn("LiveMonitor", "获取直播违规标签失败:", n);
    }
  }), v.current.ensureStarted()), $(() => () => {
    v.current?.stop();
  }, []);
  const N = p(async (n, L, s) => {
    c.current || T.current || v.current?.feed(n);
  }, [c, T]), V = p(() => {
    v.current?.stop();
  }, []), h = p((...n) => {
    const L = [];
    for (const s of n)
      for (const d of s || [])
        d && !L.includes(d) && L.push(d);
    return L;
  }, []), O = p((n) => h(
    m.get(n.liveId)
  ), [h, m]);
  return {
    liveViolationLabelMap: m,
    loadLiveViolationLabelsForPage: N,
    clearLiveViolationRefreshTimer: V,
    getLiveDisplayTags: O
  };
};
function Rr(e, o) {
  const c = S(null), [, T] = M(0);
  c.current || (c.current = new He({
    containerSelector: ".live-monitor-grid",
    t: o
  }));
  const m = p(() => {
    T((h) => h + 1);
  }, []), I = p((h) => {
    const O = c.current, n = O.getResult(h);
    if (!n.visibleCount && !n.showMore && n.idMaxWidth === "calc(100% - 12px)") {
      const s = e()?.find((d) => d.liveId === h);
      s && setTimeout(() => {
        O.compute(h, s), m();
      }, 0);
    }
    return n;
  }, [m, e]), v = p(() => {
    c.current?.observe(() => {
      m();
    });
  }, [m]), N = p(() => {
    c.current?.disconnect();
  }, []), V = p((h) => {
    c.current?.initForList(h), m();
  }, [m]);
  return $(() => () => {
    c.current?.disconnect(), c.current = null;
  }, []), {
    getAdaptiveResult: I,
    initResizeObserver: v,
    cleanupResizeObserver: N,
    initAdaptiveTags: V
  };
}
const A = me("LiveMonitor");
let z = null, ee = null, Se = null;
const zr = () => {
  const { t: e } = de(), o = Xe(), { init: c, stopPlay: T, endLive: m } = Ne(), {
    currentPage: I,
    hasMoreData: v,
    loading: N,
    hasLiveData: V,
    pageData: h,
    isUnmountedRef: O,
    paginatedList: n,
    userProfileMap: L,
    // 搜索相关
    isSearchMode: s,
    searchInput: d,
    searchResults: _,
    isSearchModeRef: E,
    setSearchInput: G,
    handleSearch: K,
    handleClearSearch: x,
    searching: F,
    // 刷新相关
    refreshing: B,
    handleRefresh: Y,
    // 封禁后翻页
    handleCloseLiveSuccess: W
  } = Er(), [H, P] = M(!1), [i, w] = M({ visible: !1, liveId: "", liveName: "", closing: !1 }), y = S({ liveId: "", liveName: "" }), { confirmDialog: q, requestConfirm: C, cancelConfirm: ae, executeWithConfirm: Z, loading: U } = nr({
    operationName: e(a.SEND_VIOLATION_WARNING),
    action: async () => {
      const { liveId: t, liveName: g } = y.current;
      if (!t) throw new Error("liveId is required");
      const D = g || t;
      await hr(t, {
        violationType: e(a.VIOLATION_TYPE_WARNING),
        violationContent: e(a.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: D }),
        handleSuggestion: e(a.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: e(a.CONFIRM_ACTION_TITLE, { action: e(a.SEND_VIOLATION_WARNING) }),
      content: e(a.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: e(a.CONFIRM)
    },
    errorMessage: fe(e).opFailed(a.OP_SEND)
  }), [ne, oe] = M(null), [ue, he] = M(null), {
    getAdaptiveResult: ve,
    initResizeObserver: l,
    cleanupResizeObserver: u,
    initAdaptiveTags: R
  } = Rr(
    () => h.map((t) => ({
      liveId: t.liveId,
      tags: ie(t)
    })),
    e
  ), {
    liveViolationLabelMap: k,
    loadLiveViolationLabelsForPage: b,
    clearLiveViolationRefreshTimer: Te,
    getLiveDisplayTags: ie
  } = yr({
    pageSize: Sr,
    isSearchModeRef: E,
    isUnmountedRef: O
  }), ye = (t) => {
    G(String(t));
  }, Re = p(async () => {
    if (!n.loading)
      try {
        await n.prevPage();
      } catch (t) {
        A.error("prevPage 失败", `(ErrorCode: ${j(t).code || "N/A"})`, t);
      }
  }, [n]), Ae = p(async () => {
    if (!n.loading)
      try {
        await n.nextPage();
      } catch (t) {
        A.error("nextPage 失败", `(ErrorCode: ${j(t).code || "N/A"})`, t);
      }
  }, [n]), Oe = p(async () => {
    if (!n.loading)
      try {
        await n.goToFirstPage();
      } catch (t) {
        A.error("goToFirstPage 失败", `(ErrorCode: ${j(t).code || "N/A"})`, t);
      }
  }, [n]);
  $(() => {
    N || h.length === 0 || b(h, I, 0);
  }, [h, I, N, b]), $(() => (l(), () => {
    u();
  }), [l, u]);
  const Pe = p((t, g) => {
    w({ visible: !0, liveId: t, liveName: g, closing: !1 });
  }, []), we = p(async () => {
    const { liveId: t } = i;
    if (t) {
      w((g) => ({ ...g, closing: !0 }));
      try {
        await T(t), await m(t), w({ visible: !1, liveId: "", liveName: "", closing: !1 }), Q.success(fe(e).opSuccess(a.FORCE_STOP, a.LIVE)), await W(I, v, h.length);
      } catch (g) {
        A.error("封禁直播失败", `(ErrorCode: ${j(g).code || "N/A"})`, g), w((D) => ({ ...D, closing: !1 }));
      }
    }
  }, [i, T, m, W, I, v, h.length, e]), Le = p(() => {
    w({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), be = p((t, g) => {
    y.current = { liveId: t, liveName: g }, C();
  }, [C]), De = p((t) => {
    ze("live_detail");
    try {
      const g = n.getSnapshot();
      vr({
        currentPage: g.currentPage,
        pageCursors: g.pageCursors
      });
    } catch {
    }
    o(`/live-control/${t}`, { state: { from: "live-monitor" } });
  }, [n, o]), Ve = Ie(
    () => s && _ ? _ : h,
    [s, _, h]
  ), Fe = s ? _ && _.length > 0 : V;
  return $(() => {
    k.size !== 0 && R(
      h.map((t) => ({
        liveId: t.liveId,
        tags: ie(t)
      }))
    );
  }, [k, h, ie, R]), $(() => {
    (async () => {
      try {
        const g = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        z || (z = await Ke() ?? null, z && z.sdkAppId !== 0 && !Be() && (Ye({ userId: z.userId, userSig: z.userSig, sdkAppId: z.sdkAppId, configured: !0 }), A.debug("LiveMonitor", "Admin account saved to auth-store:", z.userId))), (Se !== g || !ee) && (Se = g, g === "admin" ? ee = z : (ee = await gr("audience") ?? null, A.debug("LiveMonitor", "Room entry account created (not saved to auth-store):", ee?.userId)));
        const D = ee;
        if (D && D.sdkAppId !== 0) {
          A.debug("LiveMonitor", "Initializing SDK with account:", D.userId), qe({
            baseURL: "http://localhost:9000/api",
            authToken: D.userSig
          });
          const se = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
          c({
            baseURL: "http://localhost:9000/api",
            playerFactory: se ? pr() : void 0
          }), A.debug("LiveMonitor", "SDK initialized, mock mode:", se);
          const J = fr();
          J.pageToLoad > 1 ? (A.debug("LiveMonitor", "Restoring pagination state, page:", J.pageToLoad), await n.goToPage(J.pageToLoad, J.pageCursors), A.debug("LiveMonitor", "Pagination state restored to page", J.pageToLoad)) : (await n.goToFirstPage(), A.debug("LiveMonitor", "goToFirstPage done")), P(!0);
        } else
          A.error("LiveMonitor", "No valid credentials found"), P(!0);
      } catch (g) {
        A.error("LiveMonitor", "SDK init error:", g), P(!0);
      }
    })();
  }, []), $(() => (O.current = !1, () => {
    O.current = !0, Te();
  }), []), /* @__PURE__ */ f("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ r(
      Cr,
      {
        searchInput: d,
        onSearchInputChange: ye,
        onSearch: () => K(d),
        onClearSearch: x,
        onRefresh: Y,
        refreshing: B,
        searching: F
      }
    ),
    /* @__PURE__ */ r("div", { className: "live-monitor-grid", children: N || !H ? /* @__PURE__ */ f("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ r("div", { className: "loading-spinner" }),
      /* @__PURE__ */ r("span", { children: e(a.LOADING) })
    ] }) : Fe ? Ve.map((t) => {
      const g = ie(t), D = t.anchor?.userId || "", se = D && (L.get(D) || L.get(D.toLowerCase())) || t.anchor;
      return /* @__PURE__ */ r(
        Mr,
        {
          item: t,
          hoveredCardId: ne,
          hoveredTagId: ue,
          isMuted: !!t.isMuted,
          userProfile: se,
          displayTags: g,
          adaptiveResult: ve(t.liveId),
          onMouseEnter: () => oe(t.liveId),
          onMouseLeave: () => oe(null),
          onClickDetails: () => De(t.liveId),
          onViolationWarning: () => be(t.liveId, t.liveName || e(a.UNNAMED_LIVE)),
          onCloseLive: () => Pe(t.liveId, t.liveName || e(a.UNNAMED_LIVE)),
          onTagHover: (J) => he(J)
        },
        `${I}:${t.liveId}`
      );
    }) : s ? /* @__PURE__ */ f("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ r("div", { className: "empty-icon", children: /* @__PURE__ */ r(pe, { size: 48 }) }),
      /* @__PURE__ */ r("p", { className: "empty-guide-title", children: e(a.NO_SEARCH_RESULTS_FOR, { keyword: d }) })
    ] }) : /* @__PURE__ */ f("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ r("div", { className: "empty-icon", children: /* @__PURE__ */ r(pe, { size: 48 }) }),
      /* @__PURE__ */ r("p", { className: "empty-guide-title", children: e(a.EMPTY_LIVE_MONITOR_TITLE) }),
      /* @__PURE__ */ r("p", { className: "empty-guide-desc", children: e(a.EMPTY_LIVE_MONITOR_DESC) }),
      /* @__PURE__ */ r("div", { className: "empty-guide-actions", children: /* @__PURE__ */ r(X, { theme: "primary", shape: "round", className: "empty-guide-cta", onClick: () => o("/live-list"), children: e(a.GO_CREATE_LIVE) }) })
    ] }) }),
    !s && /* @__PURE__ */ r(
      mr,
      {
        currentPage: I,
        hasMoreData: v,
        loading: N,
        onPrevPage: Re,
        onNextPage: Ae,
        onGoToFirstPage: Oe
      }
    ),
    /* @__PURE__ */ r(
      Me,
      {
        visible: i.visible,
        header: e(a.CONFIRM_ACTION_TITLE, { action: e(a.FORCE_STOP) }),
        onClose: Le,
        width: Ce.CONFIRM,
        footer: /* @__PURE__ */ f(xe, { children: [
          /* @__PURE__ */ r(X, { shape: "round", variant: "outline", onClick: Le, disabled: i.closing, children: e(a.CANCEL) }),
          /* @__PURE__ */ r(
            X,
            {
              shape: "round",
              theme: "primary",
              onClick: we,
              disabled: i.closing,
              children: i.closing ? e(a.CLOSING) : e(a.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ r("p", { children: e(a.FORCE_STOP_CONFIRM_CONTENT) })
      }
    ),
    q && /* @__PURE__ */ r(
      Me,
      {
        visible: q.visible,
        header: q.title,
        width: Ce.CONFIRM,
        confirmBtn: /* @__PURE__ */ r(X, { shape: "round", loading: U, onClick: () => Z(), children: q.confirmText ?? e(a.CONFIRM) }),
        cancelBtn: /* @__PURE__ */ r(X, { variant: "outline", shape: "round", disabled: U, onClick: ae, children: e(a.CANCEL) }),
        onClose: ae,
        children: /* @__PURE__ */ r("p", { children: q.content })
      }
    )
  ] });
};
export {
  zr as default
};
