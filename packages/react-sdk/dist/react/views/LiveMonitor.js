import { jsxs as m, jsx as t, Fragment as Ve } from "react/jsx-runtime";
import { I as n, n as Fe, aC as Ne, aR as Ue, aM as xe, aL as ke, h as fe, d as ge, c as $e, z as X, at as Ge, aa as We, ar as Le, af as ze, Y as He, ag as Ke, bk as Be } from "../../chunks/shared-state.Bf8CkvaR.js";
import { useMemo as pe, useRef as y, useEffect as x, useState as _, useCallback as f } from "react";
import { useNavigate as Ye } from "react-router-dom";
import { useUIKit as le } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as qe, RefreshIcon as je, FullscreenIcon as Se, NotificationIcon as Xe, StopCircleIcon as Ze } from "tdesign-icons-react";
import { Input as Je, Button as J, Dialog as Me } from "tdesign-react";
import { useLiveMonitorState as Ie, usePaginatedList as Qe, subscribeToPagination as er, useConfirmAction as rr } from "../../react.js";
import { g as te, R as ne, bs as tr, bt as nr, E as ce, s as Ce, p as ar, e as or, t as ir, f as sr, bV as cr, bB as lr, bx as dr, bu as ur, bv as vr } from "../../chunks/main-layout.OEkSp6vd.js";
import { M as j } from "../../chunks/useAsyncAction.R1AlIQqh.js";
import { c as hr } from "../../chunks/mock.Bnui3Fqh.js";
import { M as gr } from "../../chunks/MonitorPagination.DA0Y5Aae.js";
import { A as fr } from "../../chunks/AnchorAvatar.CiD-Uid4.js";
import { S as pr } from "../../chunks/SlotRenderer.C2--beKA.js";
import { s as Ir, V as mr } from "../../chunks/violation-labels-poller.BLRVAuJB.js";
const Nr = ({
  searchInput: e,
  onSearchInputChange: o,
  onSearch: u,
  onClearSearch: T,
  onRefresh: p,
  refreshing: I
}) => {
  const { t: l } = le(), R = () => {
    if (te(e) > ne) {
      j.error(l(n.INPUT_TOO_LONG));
      return;
    }
    u();
  };
  return /* @__PURE__ */ m("div", { className: "monitor-header", children: [
    /* @__PURE__ */ t("div", { className: "monitor-title-section", children: /* @__PURE__ */ t("h2", { className: "monitor-title", children: l(n.LIVE_MONITOR) }) }),
    /* @__PURE__ */ m("div", { className: "monitor-header-actions", children: [
      /* @__PURE__ */ t(
        Je,
        {
          value: e,
          onChange: o,
          onEnter: R,
          clearable: !0,
          onClear: T,
          placeholder: l(n.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ t(qe, { size: 16 }),
          className: "monitor-search-input",
          status: te(e) > ne ? "error" : "default",
          tips: te(e) > ne ? l(n.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ t(
        J,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ t(je, {}),
          loading: I,
          onClick: p,
          children: l(n.REFRESH)
        }
      )
    ] })
  ] });
}, Lr = ({
  item: e,
  hoveredCardId: o,
  hoveredTagId: u,
  isMuted: T,
  userProfile: p,
  displayTags: I,
  adaptiveResult: l,
  onMouseEnter: R,
  onMouseLeave: k,
  onClickDetails: v,
  onViolationWarning: w,
  onCloseLive: a,
  onTagHover: N
}) => {
  const { t: s } = le(), { startPlay: d, stopPlay: L } = Ie(), S = Fe().components?.liveMonitor, $ = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, K = e.avatarUrl?.trim() || "", F = p?.avatarUrl || e.anchor?.avatarUrl || K || tr(e), b = p?.nick || e.anchor?.nick || nr(e, s(n.UNKNOWN_HOST)), B = e.stats?.viewCount ?? 0, G = pe(() => `live_monitor_view_${e.liveId}`, [e.liveId]), Y = y(""), D = y(0), E = y(null);
  return x(() => {
    const i = e.liveId;
    if (!i) return;
    const W = ++D.current;
    let M = !1;
    return (async () => {
      for (; E.current; )
        try {
          await E.current;
        } catch {
        }
      try {
        if (await d({ liveId: i, containerId: G }), M || D.current !== W) {
          L(i).catch((C) => {
            console.warn("[LiveCard] Failed to stop play during unmount:", C);
          });
          return;
        }
        Y.current = i;
      } catch (C) {
        !M && D.current === W && (C === ce.LOGIN_TIMEOUT || C === ce.USER_SIG_ILLEGAL) && (xe(), ke(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required");
      }
    })(), () => {
      M = !0, D.current += 1;
      const C = Y.current || i;
      Y.current === C && (Y.current = ""), E.current = L(C), E.current.catch(() => {
      });
    };
  }, [e.liveId, G, d, L]), /* @__PURE__ */ m(
    "div",
    {
      className: `live-card ${o === e.liveId ? "hovered" : ""}`,
      onMouseEnter: R,
      onMouseLeave: k,
      children: [
        /* @__PURE__ */ m("div", { id: e.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${$ ? Ne : e.backgroundUrl || e.coverUrl || Ue})`
              }
            }
          ),
          $ && e.coverUrl && /* @__PURE__ */ t(
            "img",
            {
              src: e.coverUrl,
              alt: e.liveName || "",
              className: "live-card-cover-image",
              onError: (i) => {
                i.target.src = Ne;
              }
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              id: G,
              className: "live-video-player"
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-id-badge",
              style: { maxWidth: l.idMaxWidth },
              children: /* @__PURE__ */ t("span", { title: e.liveId, children: `${s(n.LIVE_ID)}: ${e.liveId}` })
            }
          ),
          I.length > 0 && /* @__PURE__ */ m(
            "div",
            {
              className: "live-card-tags-overlay",
              style: { maxWidth: l.tagsMaxWidth },
              children: [
                I.slice(0, l.visibleCount).map((i) => /* @__PURE__ */ m("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ m("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ t("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ t("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  s(i)
                ] }, i)),
                l.showMore && /* @__PURE__ */ m(
                  "div",
                  {
                    className: "tag-more-wrapper",
                    onMouseLeave: () => N(null),
                    children: [
                      /* @__PURE__ */ t(
                        "span",
                        {
                          className: "live-card-tag-overlay live-card-tag-more",
                          onMouseEnter: () => N(e.liveId),
                          children: "..."
                        }
                      ),
                      u === e.liveId && /* @__PURE__ */ t(
                        "div",
                        {
                          className: "live-card-tag-dropdown",
                          onMouseEnter: () => N(e.liveId),
                          onClick: (i) => i.stopPropagation(),
                          children: I.slice(l.visibleCount).map((i) => /* @__PURE__ */ m("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ m("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ t("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ t("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
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
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-video-overlay",
              onClick: (i) => {
                i.stopPropagation(), v();
              },
              children: /* @__PURE__ */ m("div", { className: "overlay-btn primary", children: [
                /* @__PURE__ */ t(Se, { size: 16 }),
                s(n.VIEW_DETAILS)
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ m("div", { className: "live-card-info", children: [
          /* @__PURE__ */ t("div", { className: "live-card-title", title: e.liveName || s(n.UNNAMED_LIVE), children: e.liveName || s(n.UNNAMED_LIVE) }),
          /* @__PURE__ */ m("div", { className: "live-card-meta", children: [
            /* @__PURE__ */ m("div", { className: "live-card-anchor", children: [
              /* @__PURE__ */ t(
                fr,
                {
                  className: "anchor-avatar",
                  src: F,
                  name: b,
                  title: b
                }
              ),
              /* @__PURE__ */ t("span", { className: "anchor-name", title: b, children: b })
            ] }),
            /* @__PURE__ */ m("span", { className: "meta-viewer-count", title: String(B), children: [
              B,
              s(n.VIEWS)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m("div", { className: `live-card-actions ${o === e.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ t(
            J,
            {
              className: "card-action",
              variant: "text",
              theme: "warning",
              icon: /* @__PURE__ */ t(Xe, { size: 16 }),
              onClick: (i) => {
                i.stopPropagation(), w();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: s(n.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ t(pr, { slot: S?.userActionExtraItems, props: { live: e } }),
          /* @__PURE__ */ t(
            J,
            {
              className: "card-action",
              variant: "text",
              theme: "danger",
              icon: /* @__PURE__ */ t(Ze, { size: 16 }),
              onClick: (i) => {
                i.stopPropagation(), a();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: s(n.FORCE_STOP) })
            }
          )
        ] })
      ]
    },
    e.liveId
  );
}, se = fe("LiveMonitorData"), Mr = () => {
  const e = Ie(), o = Qe(), { t: u } = le(), { opSuccess: T, opFailed: p } = ge(u), [I, l] = _(o.currentPage), [R, k] = _(o.hasMore), [v, w] = _(o.loading), [a, N] = _(o.pageData);
  x(() => {
    const c = er((h) => {
      l(h.currentPage), k(h.hasMoreData), w(h.loading), N([...h.list]);
    });
    return () => {
      c(), G.next();
    };
  }, []);
  const s = a.length > 0, [d, L] = _(/* @__PURE__ */ new Map()), S = y(!1), $ = y(/* @__PURE__ */ new Map());
  $.current = pe(() => {
    const c = /* @__PURE__ */ new Map();
    return c.set(I, a), c;
  }, [I, a]);
  const K = y([]);
  K.current = a;
  const F = y(), b = y(d);
  b.current = d;
  const B = y();
  B.current || (B.current = Ce());
  const G = B.current;
  F.current || (F.current = Ce(), ar(
    F.current,
    cr((c) => c.length > 0),
    Ir((c) => sr($e(c))),
    ir(G),
    or(
      (c) => {
        L((h) => {
          const O = new Map(h);
          return c.forEach((U, V) => {
            O.set(V, U);
          }), O;
        });
      },
      (c) => {
        se.error("useLiveMonitorData", "Fastrx profile fetch failed:", c);
      }
    )
  )), x(() => {
    if (a.length === 0) return;
    const c = a.map((O) => O.anchor?.userId || "").filter(Boolean);
    if (c.length === 0) return;
    const h = c.filter((O) => !b.current.has(O));
    h.length !== 0 && F.current?.next(h);
  }, [a, d, S]);
  const [Y, D] = _(!1), [E, i] = _(!1), [W, M] = _(!1), [Q, C] = _(""), [de, q] = _(null), z = y(!1), ee = y(0), ue = f(async (c, h, O) => {
    if (!o.loading)
      try {
        !h && O <= 1 && c > 1 ? await o.prevPage() : await o.refreshCurrentPage();
      } catch (U) {
        se.error("closeLiveSuccess 翻页失败", `(ErrorCode: ${X(U).code || "N/A"})`, U);
      }
  }, [o]), ve = f(async (c) => {
    if (o.loading) return;
    const h = (c ?? "").trim();
    if (!h || te(h) > ne) {
      h && te(h) > ne && j.error(u(n.INPUT_TOO_LONG));
      return;
    }
    const O = h;
    D(!0);
    const U = ++ee.current;
    try {
      const V = await e.fetchLiveDetail(O);
      if (S.current || ee.current !== U)
        return;
      if (!V) {
        j.error(u(n.NO_SEARCH_RESULTS_FOR, { keyword: h })), C(""), M(!1), z.current = !1, q(null), await o.goToFirstPage();
        return;
      }
      M(!0), z.current = !0, q([V]), j.success(T(n.OP_SEARCH, n.LIVE));
    } catch (V) {
      if (se.error("搜索直播间失败", `(ErrorCode: ${X(V).code || "N/A"})`, V), V === ce.LOGIN_TIMEOUT || V === ce.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required";
        return;
      }
      j.error(u(n.NO_SEARCH_RESULTS_FOR, { keyword: h })), C(""), M(!1), z.current = !1, q(null), await o.goToFirstPage();
    } finally {
      S.current || D(!1);
    }
  }, [e, S, o, u]), he = f(async () => {
    if (o.loading) return;
    const c = z.current;
    if (C(""), M(!1), z.current = !1, q(null), !!c)
      try {
        await o.goToFirstPage();
      } catch {
      }
  }, [o]), ae = f(async () => {
    if (!(E || o.loading)) {
      i(!0);
      try {
        W && (M(!1), z.current = !1, C("")), await o.refreshCurrentPage(), j.success(T(n.REFRESH));
      } catch (c) {
        se.error("刷新失败", `(ErrorCode: ${X(c).code || "N/A"})`, c);
        const { info: h } = X(c);
        j.error(p(n.REFRESH) + (h ? ` (${h})` : ""));
      } finally {
        S.current || i(!1);
      }
    }
  }, [E, o, W, u, S]);
  return {
    // —— 分页快照（响应式，来自 controller） ——
    currentPage: I,
    hasMoreData: R,
    loading: v,
    pageData: a,
    hasLiveData: s,
    // —— 用户资料缓存 ——
    userProfileMap: d,
    setUserProfileMap: L,
    // —— Refs（与分页解耦） ——
    isUnmountedRef: S,
    // —— 兼容老接口的只读 refs（仅当前页数据；不可 mutate） ——
    pageDataCacheRef: $,
    liveListRef: K,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: o,
    // —— 搜索相关 ——
    searching: Y,
    isSearchMode: W,
    searchInput: Q,
    searchResults: de,
    isSearchModeRef: z,
    setSearchInput: C,
    setIsSearchMode: M,
    setSearchResults: q,
    handleSearch: ve,
    handleClearSearch: he,
    // —— 刷新相关 ——
    refreshing: E,
    handleRefresh: ae,
    // —— 封禁后翻页 ——
    handleCloseLiveSuccess: ue
  };
}, Cr = 8, _r = fe("ViolationLabels"), Sr = (e) => {
  const { pageSize: o, isSearchModeRef: u, isUnmountedRef: T } = e, [p, I] = _(/* @__PURE__ */ new Map()), l = y(null);
  l.current || (l.current = new mr({
    pageSize: o,
    getTimeRange: () => {
      const a = /* @__PURE__ */ new Date(), N = new Date(a.getTime() - 600 * 1e3), s = (d) => {
        const L = d.getFullYear(), S = String(d.getMonth() + 1).padStart(2, "0"), $ = String(d.getDate()).padStart(2, "0"), K = String(d.getHours()).padStart(2, "0"), F = String(d.getMinutes()).padStart(2, "0"), b = String(d.getSeconds()).padStart(2, "0");
        return `${L}-${S}-${$} ${K}:${F}:${b}`;
      };
      return { startTime: s(N), endTime: s(a) };
    },
    isSearchMode: () => u.current,
    isUnmounted: () => T.current,
    onUpdate: (a, N) => {
      I((s) => {
        const d = new Map(s);
        return N.forEach((L, S) => {
          d.set(S, L);
        }), d;
      });
    },
    onError: (a) => {
      _r.warn("LiveMonitor", "获取直播违规标签失败:", a);
    }
  }), l.current.ensureStarted()), x(() => () => {
    l.current?.stop();
  }, []);
  const R = f(async (a, N, s) => {
    u.current || T.current || l.current?.feed(a);
  }, [u, T]), k = f(() => {
    l.current?.stop();
  }, []), v = f((...a) => {
    const N = [];
    for (const s of a)
      for (const d of s || [])
        d && !N.includes(d) && N.push(d);
    return N;
  }, []), w = f((a) => v(
    p.get(a.liveId)
  ), [v, p]);
  return {
    liveViolationLabelMap: p,
    loadLiveViolationLabelsForPage: R,
    clearLiveViolationRefreshTimer: k,
    getLiveDisplayTags: w
  };
};
function Er(e, o) {
  const u = y(null), [, T] = _(0);
  u.current || (u.current = new Ge({
    containerSelector: ".live-monitor-grid",
    t: o
  }));
  const p = f(() => {
    T((v) => v + 1);
  }, []), I = f((v) => {
    const w = u.current, a = w.getResult(v);
    if (!a.visibleCount && !a.showMore && a.idMaxWidth === "calc(100% - 12px)") {
      const s = e()?.find((d) => d.liveId === v);
      s && setTimeout(() => {
        w.compute(v, s), p();
      }, 0);
    }
    return a;
  }, [p, e]), l = f(() => {
    u.current?.observe(() => {
      p();
    });
  }, [p]), R = f(() => {
    u.current?.disconnect();
  }, []), k = f((v) => {
    u.current?.initForList(v), p();
  }, [p]);
  return x(() => () => {
    u.current?.disconnect(), u.current = null;
  }, []), {
    getAdaptiveResult: I,
    initResizeObserver: l,
    cleanupResizeObserver: R,
    initAdaptiveTags: k
  };
}
const P = fe("LiveMonitor");
let H = null, re = null, _e = null;
const Gr = () => {
  const { t: e } = le(), o = Ye(), { init: u, stopPlay: T, endLive: p } = Ie(), {
    currentPage: I,
    hasMoreData: l,
    loading: R,
    hasLiveData: k,
    pageData: v,
    isUnmountedRef: w,
    paginatedList: a,
    userProfileMap: N,
    // 搜索相关
    isSearchMode: s,
    searchInput: d,
    searchResults: L,
    isSearchModeRef: S,
    setSearchInput: $,
    handleSearch: K,
    handleClearSearch: F,
    // 刷新相关
    refreshing: b,
    handleRefresh: B,
    // 封禁后翻页
    handleCloseLiveSuccess: G
  } = Mr(), [Y, D] = _(!1), [E, i] = _({ visible: !1, liveId: "", liveName: "", closing: !1 }), W = y({ liveId: "", liveName: "" }), { confirmDialog: M, requestConfirm: Q, cancelConfirm: C, executeWithConfirm: de, loading: q } = rr({
    operationName: e(n.SEND_VIOLATION_WARNING),
    action: async () => {
      const { liveId: r, liveName: g } = W.current;
      if (!r) throw new Error("liveId is required");
      const A = g || r;
      await lr(r, {
        violationType: e(n.VIOLATION_TYPE_WARNING),
        violationContent: e(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: A }),
        handleSuggestion: e(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: e(n.CONFIRM_ACTION_TITLE, { action: e(n.SEND_VIOLATION_WARNING) }),
      content: e(n.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: e(n.CONFIRM)
    },
    errorMessage: ge(e).opFailed(n.OP_SEND)
  }), [z, ee] = _(null), [ue, ve] = _(null), {
    getAdaptiveResult: he,
    initResizeObserver: ae,
    cleanupResizeObserver: c,
    initAdaptiveTags: h
  } = Er(
    () => v.map((r) => ({
      liveId: r.liveId,
      tags: oe(r)
    })),
    e
  ), {
    liveViolationLabelMap: O,
    loadLiveViolationLabelsForPage: U,
    clearLiveViolationRefreshTimer: V,
    getLiveDisplayTags: oe
  } = Sr({
    pageSize: Cr,
    isSearchModeRef: S,
    isUnmountedRef: w
  }), Ee = (r) => {
    $(String(r));
  }, Te = f(async () => {
    if (!a.loading)
      try {
        await a.prevPage();
      } catch (r) {
        P.error("prevPage 失败", `(ErrorCode: ${X(r).code || "N/A"})`, r);
      }
  }, [a]), Re = f(async () => {
    if (!a.loading)
      try {
        await a.nextPage();
      } catch (r) {
        P.error("nextPage 失败", `(ErrorCode: ${X(r).code || "N/A"})`, r);
      }
  }, [a]), ye = f(async () => {
    if (!a.loading)
      try {
        await a.goToFirstPage();
      } catch (r) {
        P.error("goToFirstPage 失败", `(ErrorCode: ${X(r).code || "N/A"})`, r);
      }
  }, [a]);
  x(() => {
    R || v.length === 0 || U(v, I, 0);
  }, [v, I, R, U]), x(() => (ae(), () => {
    c();
  }), [ae, c]);
  const Oe = f((r, g) => {
    i({ visible: !0, liveId: r, liveName: g, closing: !1 });
  }, []), Pe = f(async () => {
    const { liveId: r } = E;
    if (r) {
      i((g) => ({ ...g, closing: !0 }));
      try {
        await T(r), await p(r), i({ visible: !1, liveId: "", liveName: "", closing: !1 }), j.success(ge(e).opSuccess(n.FORCE_STOP, n.LIVE)), await G(I, l, v.length);
      } catch (g) {
        P.error("封禁直播失败", `(ErrorCode: ${X(g).code || "N/A"})`, g), i((A) => ({ ...A, closing: !1 }));
      }
    }
  }, [E, T, p, G, I, l, v.length, e]), me = f(() => {
    i({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), we = f((r, g) => {
    W.current = { liveId: r, liveName: g }, Q();
  }, [Q]), Ae = f((r) => {
    We("live_detail");
    try {
      const g = a.getSnapshot();
      dr({
        currentPage: g.currentPage,
        pageCursors: g.pageCursors
      });
    } catch {
    }
    o(`/live-control/${r}`, { state: { from: "live-monitor" } });
  }, [a, o]), be = pe(
    () => s && L ? L : v,
    [s, L, v]
  ), De = s ? L && L.length > 0 : k;
  return x(() => {
    O.size !== 0 && h(
      v.map((r) => ({
        liveId: r.liveId,
        tags: oe(r)
      }))
    );
  }, [O, v, oe, h]), x(() => {
    (async () => {
      try {
        const g = typeof window < "u" && window.__IDENTITY_MODE__ === "admin" ? "admin" : "audience";
        H || (H = await ze() ?? null, H && H.sdkAppId !== 0 && !He() && (Ke({ userId: H.userId, userSig: H.userSig, sdkAppId: H.sdkAppId, configured: !0 }), P.info("LiveMonitor", "Admin account saved to auth-store:", H.userId))), (_e !== g || !re) && (_e = g, g === "admin" ? re = H : (re = await ur("audience") ?? null, P.info("LiveMonitor", "Room entry account created (not saved to auth-store):", re?.userId)));
        const A = re;
        if (A && A.sdkAppId !== 0) {
          P.info("LiveMonitor", "Initializing SDK with account:", A.userId), Be({
            baseURL: "http://localhost:9000/api",
            authToken: A.userSig
          });
          const ie = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
          u({
            baseURL: "http://localhost:9000/api",
            playerFactory: ie ? hr() : void 0
          }), P.info("LiveMonitor", "SDK initialized, mock mode:", ie);
          const Z = vr();
          Z.pageToLoad > 1 ? (P.info("LiveMonitor", "Restoring pagination state, page:", Z.pageToLoad), await a.goToPage(Z.pageToLoad, Z.pageCursors), P.info("LiveMonitor", "Pagination state restored to page", Z.pageToLoad)) : (await a.goToFirstPage(), P.info("LiveMonitor", "goToFirstPage done")), D(!0);
        } else
          P.error("LiveMonitor", "No valid credentials found"), D(!0);
      } catch (g) {
        P.error("LiveMonitor", "SDK init error:", g), D(!0);
      }
    })();
  }, []), x(() => (w.current = !1, () => {
    w.current = !0, V();
  }), []), /* @__PURE__ */ m("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ t(
      Nr,
      {
        searchInput: d,
        onSearchInputChange: Ee,
        onSearch: () => K(d),
        onClearSearch: F,
        onRefresh: B,
        refreshing: b
      }
    ),
    /* @__PURE__ */ t("div", { className: "live-monitor-grid", children: R || !Y ? /* @__PURE__ */ m("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ t("div", { className: "loading-spinner" }),
      /* @__PURE__ */ t("span", { children: e(n.LOADING) })
    ] }) : De ? be.map((r) => {
      const g = oe(r), A = r.anchor?.userId || "", ie = A && (N.get(A) || N.get(A.toLowerCase())) || r.anchor;
      return /* @__PURE__ */ t(
        Lr,
        {
          item: r,
          hoveredCardId: z,
          hoveredTagId: ue,
          isMuted: !!r.isMuted,
          userProfile: ie,
          displayTags: g,
          adaptiveResult: he(r.liveId),
          onMouseEnter: () => ee(r.liveId),
          onMouseLeave: () => ee(null),
          onClickDetails: () => Ae(r.liveId),
          onViolationWarning: () => we(r.liveId, r.liveName || e(n.UNNAMED_LIVE)),
          onCloseLive: () => Oe(r.liveId, r.liveName || e(n.UNNAMED_LIVE)),
          onTagHover: (Z) => ve(Z)
        },
        `${I}:${r.liveId}`
      );
    }) : /* @__PURE__ */ m("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ t("div", { className: "empty-icon", children: /* @__PURE__ */ t(Se, { size: 48 }) }),
      /* @__PURE__ */ t("p", { children: e(n.NO_LIVE_RIGHT_NOW) })
    ] }) }),
    !s && /* @__PURE__ */ t(
      gr,
      {
        currentPage: I,
        hasMoreData: l,
        loading: R,
        onPrevPage: Te,
        onNextPage: Re,
        onGoToFirstPage: ye
      }
    ),
    /* @__PURE__ */ t(
      Me,
      {
        visible: E.visible,
        header: e(n.CONFIRM_ACTION_TITLE, { action: e(n.FORCE_STOP) }),
        onClose: me,
        width: Le.CONFIRM,
        footer: /* @__PURE__ */ m(Ve, { children: [
          /* @__PURE__ */ t(J, { shape: "round", variant: "outline", onClick: me, disabled: E.closing, children: e(n.CANCEL) }),
          /* @__PURE__ */ t(
            J,
            {
              shape: "round",
              theme: "primary",
              onClick: Pe,
              disabled: E.closing,
              children: E.closing ? e(n.CLOSING) : e(n.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ t("p", { children: e(n.FORCE_STOP_CONFIRM_CONTENT) })
      }
    ),
    M && /* @__PURE__ */ t(
      Me,
      {
        visible: M.visible,
        header: M.title,
        width: Le.CONFIRM,
        confirmBtn: /* @__PURE__ */ t(J, { shape: "round", loading: q, onClick: () => de(), children: M.confirmText ?? e(n.CONFIRM) }),
        cancelBtn: /* @__PURE__ */ t(J, { variant: "outline", shape: "round", disabled: q, onClick: C, children: e(n.CANCEL) }),
        onClose: C,
        children: /* @__PURE__ */ t("p", { children: M.content })
      }
    )
  ] });
};
export {
  Gr as default
};
