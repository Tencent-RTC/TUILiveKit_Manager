import { jsxs as m, jsx as t, Fragment as Ve } from "react/jsx-runtime";
import { I as n, m as Fe, ay as Ne, aE as Ue, aC as xe, aB as ke, h as fe, d as ge, c as Ge, y as X, ao as Le, ac as $e, W as We, ad as ze } from "../../chunks/layout.QDR0rddX.js";
import { useMemo as pe, useRef as R, useEffect as x, useState as _, useCallback as f } from "react";
import { useNavigate as He } from "react-router-dom";
import { useUIKit as le } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as Ke, RefreshIcon as Be, FullscreenIcon as Se, NotificationIcon as qe, StopCircleIcon as Ye } from "tdesign-icons-react";
import { Input as je, Button as Z, Dialog as Me } from "tdesign-react";
import { useLiveMonitorState as Ie, usePaginatedList as Xe, subscribeToPagination as Je, useConfirmAction as Ze } from "../../react.js";
import { c as Qe } from "../../chunks/config.BhtXZwQl.js";
import { g as te, P as ne, bD as er, bE as rr, E as ce, s as Ce, p as tr, d as nr, t as ar, f as or, c6 as ir, bN as sr, bJ as cr, bF as lr, bG as dr } from "../../chunks/main-layout.BgP9Ncvl.js";
import { M as j } from "../../chunks/useAsyncAction.BQ2CRmHy.js";
import { c as ur } from "../../chunks/mock.Bnui3Fqh.js";
import { M as vr } from "../../chunks/MonitorPagination.BCAcIBjD.js";
import { A as hr } from "../../chunks/AnchorAvatar.BsgNCmDL.js";
import { S as gr } from "../../chunks/SlotRenderer.BP46Gx6z.js";
import { s as fr, V as pr, A as Ir } from "../../chunks/adaptive-tags-runtime.Nrz95dSj.js";
const mr = ({
  searchInput: e,
  onSearchInputChange: o,
  onSearch: u,
  onClearSearch: T,
  onRefresh: p,
  refreshing: I
}) => {
  const { t: l } = le(), y = () => {
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
        je,
        {
          value: e,
          onChange: o,
          onEnter: y,
          clearable: !0,
          onClear: T,
          placeholder: l(n.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ t(Ke, { size: 16 }),
          className: "monitor-search-input",
          status: te(e) > ne ? "error" : "default",
          tips: te(e) > ne ? l(n.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ t(
        Z,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ t(Be, {}),
          loading: I,
          onClick: p,
          children: l(n.REFRESH)
        }
      )
    ] })
  ] });
}, Nr = ({
  item: e,
  hoveredCardId: o,
  hoveredTagId: u,
  isMuted: T,
  userProfile: p,
  displayTags: I,
  adaptiveResult: l,
  onMouseEnter: y,
  onMouseLeave: k,
  onClickDetails: v,
  onViolationWarning: A,
  onCloseLive: a,
  onTagHover: N
}) => {
  const { t: s } = le(), { startPlay: d, stopPlay: L } = Ie(), S = Fe().components?.liveMonitor, G = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, K = e.avatarUrl?.trim() || "", F = p?.avatarUrl || e.anchor?.avatarUrl || K || er(e), b = p?.nick || e.anchor?.nick || rr(e, s(n.UNKNOWN_HOST)), B = e.stats?.viewCount ?? 0, $ = pe(() => `live_monitor_view_${e.liveId}`, [e.liveId]), q = R(""), D = R(0), E = R(null);
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
        if (await d({ liveId: i, containerId: $ }), M || D.current !== W) {
          L(i).catch((C) => {
            console.warn("[LiveCard] Failed to stop play during unmount:", C);
          });
          return;
        }
        q.current = i;
      } catch (C) {
        !M && D.current === W && (C === ce.LOGIN_TIMEOUT || C === ce.USER_SIG_ILLEGAL) && (xe(), ke(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required");
      }
    })(), () => {
      M = !0, D.current += 1;
      const C = q.current || i;
      q.current === C && (q.current = ""), E.current = L(C), E.current.catch(() => {
      });
    };
  }, [e.liveId, $, d, L]), /* @__PURE__ */ m(
    "div",
    {
      className: `live-card ${o === e.liveId ? "hovered" : ""}`,
      onMouseEnter: y,
      onMouseLeave: k,
      children: [
        /* @__PURE__ */ m("div", { id: e.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${G ? Ne : e.backgroundUrl || e.coverUrl || Ue})`
              }
            }
          ),
          G && e.coverUrl && /* @__PURE__ */ t(
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
              id: $,
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
                hr,
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
            Z,
            {
              className: "card-action",
              variant: "text",
              theme: "warning",
              icon: /* @__PURE__ */ t(qe, { size: 16 }),
              onClick: (i) => {
                i.stopPropagation(), A();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: s(n.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ t(gr, { slot: S?.userActionExtraItems, props: { live: e } }),
          /* @__PURE__ */ t(
            Z,
            {
              className: "card-action",
              variant: "text",
              theme: "danger",
              icon: /* @__PURE__ */ t(Ye, { size: 16 }),
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
}, se = fe("LiveMonitorData"), Lr = () => {
  const e = Ie(), o = Xe(), { t: u } = le(), { opSuccess: T, opFailed: p } = ge(u), [I, l] = _(o.currentPage), [y, k] = _(o.hasMore), [v, A] = _(o.loading), [a, N] = _(o.pageData);
  x(() => {
    const c = Je((h) => {
      l(h.currentPage), k(h.hasMoreData), A(h.loading), N([...h.list]);
    });
    return () => {
      c(), $.next();
    };
  }, []);
  const s = a.length > 0, [d, L] = _(/* @__PURE__ */ new Map()), S = R(!1), G = R(/* @__PURE__ */ new Map());
  G.current = pe(() => {
    const c = /* @__PURE__ */ new Map();
    return c.set(I, a), c;
  }, [I, a]);
  const K = R([]);
  K.current = a;
  const F = R(), b = R(d);
  b.current = d;
  const B = R();
  B.current || (B.current = Ce());
  const $ = B.current;
  F.current || (F.current = Ce(), tr(
    F.current,
    ir((c) => c.length > 0),
    fr((c) => or(Ge(c))),
    ar($),
    nr(
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
  const [q, D] = _(!1), [E, i] = _(!1), [W, M] = _(!1), [Q, C] = _(""), [de, Y] = _(null), z = R(!1), ee = R(0), ue = f(async (c, h, O) => {
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
        j.error(u(n.NO_SEARCH_RESULTS_FOR, { keyword: h })), C(""), M(!1), z.current = !1, Y(null), await o.goToFirstPage();
        return;
      }
      M(!0), z.current = !0, Y([V]), j.success(T(n.OP_SEARCH, n.LIVE));
    } catch (V) {
      if (se.error("搜索直播间失败", `(ErrorCode: ${X(V).code || "N/A"})`, V), V === ce.LOGIN_TIMEOUT || V === ce.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "#/config-required";
        return;
      }
      j.error(u(n.NO_SEARCH_RESULTS_FOR, { keyword: h })), C(""), M(!1), z.current = !1, Y(null), await o.goToFirstPage();
    } finally {
      S.current || D(!1);
    }
  }, [e, S, o, u]), he = f(async () => {
    if (o.loading) return;
    const c = z.current;
    if (C(""), M(!1), z.current = !1, Y(null), !!c)
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
    hasMoreData: y,
    loading: v,
    pageData: a,
    hasLiveData: s,
    // —— 用户资料缓存 ——
    userProfileMap: d,
    setUserProfileMap: L,
    // —— Refs（与分页解耦） ——
    isUnmountedRef: S,
    // —— 兼容老接口的只读 refs（仅当前页数据；不可 mutate） ——
    pageDataCacheRef: G,
    liveListRef: K,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: o,
    // —— 搜索相关 ——
    searching: q,
    isSearchMode: W,
    searchInput: Q,
    searchResults: de,
    isSearchModeRef: z,
    setSearchInput: C,
    setIsSearchMode: M,
    setSearchResults: Y,
    handleSearch: ve,
    handleClearSearch: he,
    // —— 刷新相关 ——
    refreshing: E,
    handleRefresh: ae,
    // —— 封禁后翻页 ——
    handleCloseLiveSuccess: ue
  };
}, Mr = 8, Cr = fe("ViolationLabels"), _r = (e) => {
  const { pageSize: o, isSearchModeRef: u, isUnmountedRef: T } = e, [p, I] = _(/* @__PURE__ */ new Map()), l = R(null);
  l.current || (l.current = new pr({
    pageSize: o,
    getTimeRange: () => {
      const a = /* @__PURE__ */ new Date(), N = new Date(a.getTime() - 600 * 1e3), s = (d) => {
        const L = d.getFullYear(), S = String(d.getMonth() + 1).padStart(2, "0"), G = String(d.getDate()).padStart(2, "0"), K = String(d.getHours()).padStart(2, "0"), F = String(d.getMinutes()).padStart(2, "0"), b = String(d.getSeconds()).padStart(2, "0");
        return `${L}-${S}-${G} ${K}:${F}:${b}`;
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
      Cr.warn("LiveMonitor", "获取直播违规标签失败:", a);
    }
  }), l.current.ensureStarted()), x(() => () => {
    l.current?.stop();
  }, []);
  const y = f(async (a, N, s) => {
    u.current || T.current || l.current?.feed(a);
  }, [u, T]), k = f(() => {
    l.current?.stop();
  }, []), v = f((...a) => {
    const N = [];
    for (const s of a)
      for (const d of s || [])
        d && !N.includes(d) && N.push(d);
    return N;
  }, []), A = f((a) => v(
    p.get(a.liveId)
  ), [v, p]);
  return {
    liveViolationLabelMap: p,
    loadLiveViolationLabelsForPage: y,
    clearLiveViolationRefreshTimer: k,
    getLiveDisplayTags: A
  };
};
function Sr(e, o) {
  const u = R(null), [, T] = _(0);
  u.current || (u.current = new Ir({
    containerSelector: ".live-monitor-grid",
    t: o
  }));
  const p = f(() => {
    T((v) => v + 1);
  }, []), I = f((v) => {
    const A = u.current, a = A.getResult(v);
    if (!a.visibleCount && !a.showMore && a.idMaxWidth === "calc(100% - 12px)") {
      const s = e()?.find((d) => d.liveId === v);
      s && setTimeout(() => {
        A.compute(v, s), p();
      }, 0);
    }
    return a;
  }, [p, e]), l = f(() => {
    u.current?.observe(() => {
      p();
    });
  }, [p]), y = f(() => {
    u.current?.disconnect();
  }, []), k = f((v) => {
    u.current?.initForList(v), p();
  }, [p]);
  return x(() => () => {
    u.current?.disconnect(), u.current = null;
  }, []), {
    getAdaptiveResult: I,
    initResizeObserver: l,
    cleanupResizeObserver: y,
    initAdaptiveTags: k
  };
}
const P = fe("LiveMonitor");
let H = null, re = null, _e = null;
const $r = () => {
  const { t: e } = le(), o = He(), { init: u, stopPlay: T, endLive: p } = Ie(), {
    currentPage: I,
    hasMoreData: l,
    loading: y,
    hasLiveData: k,
    pageData: v,
    isUnmountedRef: A,
    paginatedList: a,
    userProfileMap: N,
    // 搜索相关
    isSearchMode: s,
    searchInput: d,
    searchResults: L,
    isSearchModeRef: S,
    setSearchInput: G,
    handleSearch: K,
    handleClearSearch: F,
    // 刷新相关
    refreshing: b,
    handleRefresh: B,
    // 封禁后翻页
    handleCloseLiveSuccess: $
  } = Lr(), [q, D] = _(!1), [E, i] = _({ visible: !1, liveId: "", liveName: "", closing: !1 }), W = R({ liveId: "", liveName: "" }), { confirmDialog: M, requestConfirm: Q, cancelConfirm: C, executeWithConfirm: de, loading: Y } = Ze({
    operationName: e(n.SEND_VIOLATION_WARNING),
    action: async () => {
      const { liveId: r, liveName: g } = W.current;
      if (!r) throw new Error("liveId is required");
      const w = g || r;
      await sr(r, {
        violationType: e(n.VIOLATION_TYPE_WARNING),
        violationContent: e(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: w }),
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
  } = Sr(
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
  } = _r({
    pageSize: Mr,
    isSearchModeRef: S,
    isUnmountedRef: A
  }), Ee = (r) => {
    G(String(r));
  }, Te = f(async () => {
    if (!a.loading)
      try {
        await a.prevPage();
      } catch (r) {
        P.error("prevPage 失败", `(ErrorCode: ${X(r).code || "N/A"})`, r);
      }
  }, [a]), ye = f(async () => {
    if (!a.loading)
      try {
        await a.nextPage();
      } catch (r) {
        P.error("nextPage 失败", `(ErrorCode: ${X(r).code || "N/A"})`, r);
      }
  }, [a]), Re = f(async () => {
    if (!a.loading)
      try {
        await a.goToFirstPage();
      } catch (r) {
        P.error("goToFirstPage 失败", `(ErrorCode: ${X(r).code || "N/A"})`, r);
      }
  }, [a]);
  x(() => {
    y || v.length === 0 || U(v, I, 0);
  }, [v, I, y, U]), x(() => (ae(), () => {
    c();
  }), [ae, c]);
  const Oe = f((r, g) => {
    i({ visible: !0, liveId: r, liveName: g, closing: !1 });
  }, []), Pe = f(async () => {
    const { liveId: r } = E;
    if (r) {
      i((g) => ({ ...g, closing: !0 }));
      try {
        await T(r), await p(r), i({ visible: !1, liveId: "", liveName: "", closing: !1 }), j.success(ge(e).opSuccess(n.FORCE_STOP, n.LIVE)), await $(I, l, v.length);
      } catch (g) {
        P.error("封禁直播失败", `(ErrorCode: ${X(g).code || "N/A"})`, g), i((w) => ({ ...w, closing: !1 }));
      }
    }
  }, [E, T, p, $, I, l, v.length, e]), me = f(() => {
    i({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), Ae = f((r, g) => {
    W.current = { liveId: r, liveName: g }, Q();
  }, [Q]), we = f((r) => {
    try {
      const g = a.getSnapshot();
      cr({
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
        H || (H = await $e() ?? null, H && H.sdkAppId !== 0 && !We() && (ze({ userId: H.userId, userSig: H.userSig, sdkAppId: H.sdkAppId, configured: !0 }), P.info("LiveMonitor", "Admin account saved to auth-store:", H.userId))), (_e !== g || !re) && (_e = g, g === "admin" ? re = H : (re = await lr("audience") ?? null, P.info("LiveMonitor", "Room entry account created (not saved to auth-store):", re?.userId)));
        const w = re;
        if (w && w.sdkAppId !== 0) {
          P.info("LiveMonitor", "Initializing SDK with account:", w.userId), Qe({
            baseURL: "http://localhost:9000/api",
            authToken: w.userSig
          });
          const ie = typeof window.__MOCK_MODE__ < "u" && window.__MOCK_MODE__;
          u({
            baseURL: "http://localhost:9000/api",
            playerFactory: ie ? ur() : void 0
          }), P.info("LiveMonitor", "SDK initialized, mock mode:", ie);
          const J = dr();
          J.pageToLoad > 1 ? (P.info("LiveMonitor", "Restoring pagination state, page:", J.pageToLoad), await a.goToPage(J.pageToLoad, J.pageCursors), P.info("LiveMonitor", "Pagination state restored to page", J.pageToLoad)) : (await a.goToFirstPage(), P.info("LiveMonitor", "goToFirstPage done")), D(!0);
        } else
          P.error("LiveMonitor", "No valid credentials found"), D(!0);
      } catch (g) {
        P.error("LiveMonitor", "SDK init error:", g), D(!0);
      }
    })();
  }, []), x(() => (A.current = !1, () => {
    A.current = !0, V();
  }), []), /* @__PURE__ */ m("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ t(
      mr,
      {
        searchInput: d,
        onSearchInputChange: Ee,
        onSearch: () => K(d),
        onClearSearch: F,
        onRefresh: B,
        refreshing: b
      }
    ),
    /* @__PURE__ */ t("div", { className: "live-monitor-grid", children: y || !q ? /* @__PURE__ */ m("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ t("div", { className: "loading-spinner" }),
      /* @__PURE__ */ t("span", { children: e(n.LOADING) })
    ] }) : De ? be.map((r) => {
      const g = oe(r), w = r.anchor?.userId || "", ie = w && (N.get(w) || N.get(w.toLowerCase())) || r.anchor;
      return /* @__PURE__ */ t(
        Nr,
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
          onClickDetails: () => we(r.liveId),
          onViolationWarning: () => Ae(r.liveId, r.liveName || e(n.UNNAMED_LIVE)),
          onCloseLive: () => Oe(r.liveId, r.liveName || e(n.UNNAMED_LIVE)),
          onTagHover: (J) => ve(J)
        },
        `${I}:${r.liveId}`
      );
    }) : /* @__PURE__ */ m("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ t("div", { className: "empty-icon", children: /* @__PURE__ */ t(Se, { size: 48 }) }),
      /* @__PURE__ */ t("p", { children: e(n.NO_LIVE_RIGHT_NOW) })
    ] }) }),
    !s && /* @__PURE__ */ t(
      vr,
      {
        currentPage: I,
        hasMoreData: l,
        loading: y,
        onPrevPage: Te,
        onNextPage: ye,
        onGoToFirstPage: Re
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
          /* @__PURE__ */ t(Z, { shape: "round", variant: "outline", onClick: me, disabled: E.closing, children: e(n.CANCEL) }),
          /* @__PURE__ */ t(
            Z,
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
        confirmBtn: /* @__PURE__ */ t(Z, { shape: "round", loading: Y, onClick: () => de(), children: M.confirmText ?? e(n.CONFIRM) }),
        cancelBtn: /* @__PURE__ */ t(Z, { variant: "outline", shape: "round", disabled: Y, onClick: C, children: e(n.CANCEL) }),
        onClose: C,
        children: /* @__PURE__ */ t("p", { children: M.content })
      }
    )
  ] });
};
export {
  $r as default
};
