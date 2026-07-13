import { jsx as t, jsxs as u, Fragment as ue } from "react/jsx-runtime";
import * as ze from "react";
import st, { useState as b, useRef as Q, useEffect as J, useCallback as A, isValidElement as tn, createElement as rn, Component as nn, useMemo as Le, forwardRef as an, useImperativeHandle as on, useLayoutEffect as fr, useSyncExternalStore as nr } from "react";
import { useUIKit as Ne, i18next as Ut } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as ar, RefreshIcon as ir, FullscreenIcon as kr, NotificationIcon as Pr, StopCircleIcon as Fr, UploadIcon as pr, CloseIcon as or, ImageIcon as sn, CutIcon as cn, ChevronDownIcon as Gr, ChevronRightIcon as sr, AddIcon as cr, FileCopyIcon as qe, DeleteIcon as ln, EditIcon as er, InfoCircleIcon as $e, LoginIcon as dn, CheckCircleIcon as kt, ChatOffIcon as Vr, UserCheckedIcon as un, UserBlockedIcon as Wr, MoreIcon as hn, CloseCircleIcon as mn, ChevronLeftIcon as fn, AdjustmentIcon as pn } from "tdesign-icons-react";
import { MessagePlugin as Mt, Dialog as Ee, Button as B, Input as ge, Select as lr, InputNumber as tr, Checkbox as gn, Card as zr, Tabs as Kt, Switch as vn, Tooltip as Fe, Loading as En, Textarea as Nn } from "tdesign-react";
import { s as Cn, ax as yn, av as _n, aG as G, H as Nt, aM as bn, bq as Br, br as Hr, b as In, W as Ln, aZ as Kr, a$ as Sn, Z as Tn, bL as An, be as gr, bJ as wn, bI as Rn, bH as Mn, bm as On, bd as Dn, am as xn, bl as Un, bg as kn, aI as Pn, Y as Fn, aj as vr, A as Ze, J as Ve, aH as Gn, aY as Vn, b1 as Wn, b4 as Pt, g as Ge, ah as zn, bs as Yr, t as dr, $ as Bn, ak as Er, V as Nr, as as Hn, bG as Kn, ac as Yn, aJ as $n, N as qn, aT as Xn, a1 as jn, aC as Zn, X as Yt, b7 as Jn, bk as Qn, aW as xt, a3 as ea, a8 as ta, R as Ot, a6 as ra, b0 as na, aL as et, i as aa, b9 as Cr, D as ia, a as Xe, n as Je, o as xe, l as Ue, m as gt, bt as oa, v as $r, w as We, aP as sa, u as qr, aF as ca, r as la, b6 as yr, p as _r, q as da, P as $t, d as vt, e as Oe, C as De, O as ua } from "./main-layout.CMyUtYPy.js";
import { c as ha, g as ma, s as ur, a as fa, D as pa, d as ga, e as va, m as Ea, b as Na, P as Ca } from "./gift-category.-203nZxV.js";
import { aT as ya, a3 as _a, b as ba, e as Ia, ap as La, aM as Sa, c as Ta, aL as Aa, b9 as wa, aY as a, b8 as Ra, b2 as qt, D as yt, b3 as hr, i as Ma, h as Oa, b5 as Da, aX as Se, ax as mr, aR as br, X as lt, aI as xa, W as Xr, aA as Ua, d as ka } from "./upload.HR7xdC-w.js";
import { c as Pa } from "./config.BhtXZwQl.js";
import { E as Ft } from "./error.HinSWumo.js";
import { useNavigate as _t, useParams as Fa } from "react-router-dom";
import { a as Ga } from "./moderation-store.DpCJ9ZU8.js";
import { useLiveListState as Va, useLoginState as jr, LiveListEvent as Ir, LiveView as Wa, useLiveAudienceState as za, BarrageList as Ba, LiveAudienceList as Ha } from "tuikit-atomicx-react";
import { c as Ka } from "./t.QkUmzvcB.js";
import { createPortal as Ya } from "react-dom";
function Zr() {
  const [n, r] = b([]), [e, i] = b([]), c = Q(null);
  c.current || (c.current = new Cn({
    onStateChange: (I) => {
      r(I.giftList), i(I.giftCategoryList);
    }
  }));
  const o = c.current;
  J(() => () => {
    o.destroy();
  }, [o]);
  const s = A(
    async (I) => o.fetchGiftList(I),
    [o]
  ), m = A(
    async (I) => o.createGift(I),
    [o]
  ), l = A(
    async (I) => o.updateGift(I),
    [o]
  ), d = A(
    async (I) => o.deleteGift(I),
    [o]
  ), f = A(
    async (I) => o.createGiftCategory(I),
    [o]
  ), p = A(
    async (I) => o.updateGiftCategory(I),
    [o]
  ), v = A(
    async (I) => o.deleteGiftCategory(I),
    [o]
  ), h = A(
    async (I) => o.addGiftCategoryRelations(I),
    [o]
  ), N = A(
    async (I) => o.deleteGiftCategoryRelations(I),
    [o]
  ), E = A(
    async (I) => o.getGiftLanguage(I),
    [o]
  ), g = A(
    async (I) => o.setGiftLanguage(I),
    [o]
  ), T = A(
    async (I) => o.deleteGiftLanguage(I),
    [o]
  ), C = A(
    async (I, w) => o.getGiftCategoryLanguage(I, w),
    [o]
  ), O = A(
    async (I, w, X, S) => o.setGiftCategoryLanguage(I, w, X, S),
    [o]
  ), D = A(
    async (I, w) => o.deleteGiftCategoryLanguage(I, w),
    [o]
  );
  return {
    giftList: n,
    giftCategoryList: e,
    fetchGiftList: s,
    createGift: m,
    updateGift: l,
    deleteGift: d,
    createGiftCategory: f,
    updateGiftCategory: p,
    deleteGiftCategory: v,
    addGiftCategoryRelations: h,
    deleteGiftCategoryRelations: N,
    getGiftLanguage: E,
    setGiftLanguage: g,
    deleteGiftLanguage: T,
    getGiftCategoryLanguage: C,
    setGiftCategoryLanguage: O,
    deleteGiftCategoryLanguage: D
  };
}
function Jr(n) {
  const { liveId: r, pageSize: e } = n, [i, c] = b(!1), [o, s] = b(0), [m, l] = b([]), [d, f] = b(1), [p, v] = b(0), [h, N] = b(!1), [E, g] = b([]), [T, C] = b([]), [O, D] = b(!1), [I, w] = b(null), X = Q(!0);
  J(() => (X.current = !0, () => {
    X.current = !1;
  }), []);
  const S = A(async () => {
    try {
      const y = await ya();
      return X.current && (c(y > 0), s(y)), y;
    } catch (y) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", y), y;
    }
  }, []), ee = A(async (y = {}) => {
    N(!0);
    try {
      const P = await _a({ pageSize: e, liveId: r, ...y });
      return X.current && (l(P.list || []), f(y.pageNum || 1), v(P.total || 0)), P;
    } catch (P) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", P), P;
    } finally {
      X.current && N(!1);
    }
  }, [e, r]), x = A(async (y) => {
    try {
      const P = y.items ?? (() => {
        const F = m;
        return y.ids.map((M) => {
          const U = F.find((z) => z.id === M);
          return {
            id: M,
            content: (U == null ? void 0 : U.content) ?? M,
            userId: (U == null ? void 0 : U.userId) ?? ""
          };
        });
      })();
      return await ba({ ids: y.ids, items: P, liveId: y.liveId ?? r });
    } catch (P) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", P), P;
    }
  }, [r, m]), W = A(async (y) => {
    try {
      return await Ia({ content: y.keywords.join(","), liveId: r });
    } catch (P) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", P), P;
    }
  }, [r]), q = A(async () => {
    if (!r) return [];
    D(!0), w(null);
    try {
      const y = await yn(r);
      return g(y), y;
    } catch (y) {
      throw w(y), y;
    } finally {
      D(!1);
    }
  }, [r]), $ = A(async () => {
    if (!r) return [];
    D(!0), w(null);
    try {
      const y = await _n(r);
      return C(y), y;
    } catch (y) {
      throw w(y), y;
    } finally {
      D(!1);
    }
  }, [r]), R = A(async (y) => {
    if (!r) throw new Error("liveId is required");
    D(!0), w(null);
    try {
      await La(r, y.memberAccounts, y.muteTime), await q();
    } catch (P) {
      throw w(P), console.error("[useRiskControlState] muteMember failed:", P), P;
    } finally {
      D(!1);
    }
  }, [r, q]), L = A(async (y) => {
    if (!r) throw new Error("liveId is required");
    D(!0), w(null);
    try {
      await Sa(r, y.memberAccounts), await q();
    } catch (P) {
      throw w(P), console.error("[useRiskControlState] unmuteMember failed:", P), P;
    } finally {
      D(!1);
    }
  }, [r, q]), _ = A(async (y) => {
    if (!r) throw new Error("liveId is required");
    D(!0), w(null);
    try {
      await Ta(r, y.memberAccounts, y.duration, y.reason), await $();
    } catch (P) {
      w(P);
    } finally {
      D(!1);
    }
  }, [r, $]), k = A(async (y) => {
    if (!r) throw new Error("liveId is required");
    D(!0), w(null);
    try {
      await Aa(r, y.memberAccounts), await $();
    } catch (P) {
      w(P);
    } finally {
      D(!1);
    }
  }, [r, $]), H = A(async () => {
    if (!r) throw new Error("liveId is required");
    try {
      return await wa(r, "default", "您的内容涉嫌违规");
    } catch (y) {
      throw console.error("[useRiskControlState] sendViolationWarning failed:", y), y;
    }
  }, [r]);
  return {
    textModerationAvailable: i,
    textModerationRemainUsage: o,
    textModerationList: m,
    textModerationPageNum: d,
    textModerationTotal: p,
    textModerationLoading: h,
    fetchTextModerationUsage: S,
    fetchTextModerationList: ee,
    approveTextModerationItems: x,
    bypassCorrectionKeyword: W,
    muteMember: R,
    unmuteMember: L,
    banMember: _,
    unbanMember: k,
    sendViolationWarning: H,
    mutedList: E,
    bannedList: T,
    memberLoading: O,
    memberError: I,
    fetchMutedList: q,
    fetchBannedList: $
  };
}
const Y = {
  success: (n) => Mt.success(n),
  error: (n) => Mt.error(n),
  warning: (n) => Mt.error(n),
  info: (n) => Mt.info(n)
}, Qr = ({
  visible: n,
  liveId: r = "",
  liveName: e = "",
  onVisibleChange: i,
  onConfirm: c,
  onCancel: o
}) => {
  const { t: s } = Ne(), [m, l] = b(!1), d = () => {
    l(!1), i(!1);
  }, f = async () => {
    if (!(m || !r)) {
      l(!0);
      try {
        await Ra(r, {
          violationType: "warning",
          violationContent: `直播间 "${e || r}" 收到违规警告，请立即整改`,
          handleSuggestion: "请遵守平台规则，删除违规内容"
        }), Y.success(s("Violation Warning Sent")), c == null || c({ liveId: r, liveName: e }), d();
      } catch (v) {
        console.error("发送违规警告失败:", v), Y.error(s("Send Failed")), l(!1);
      }
    }
  }, p = () => {
    m || (o == null || o(), d());
  };
  return /* @__PURE__ */ t(
    Ee,
    {
      visible: n,
      header: s("Violation Warning Send Confirm"),
      confirmBtn: /* @__PURE__ */ t(
        B,
        {
          theme: "warning",
          shape: "round",
          loading: m,
          onClick: f,
          children: s(m ? "Sending" : a.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ t(
        B,
        {
          variant: "outline",
          shape: "round",
          disabled: m,
          onClick: p,
          children: s(a.CANCEL)
        }
      ),
      onClose: p,
      children: /* @__PURE__ */ t("p", { children: s("Violation Warning Confirm Content") })
    }
  );
}, $a = ({
  searchInput: n,
  onSearchInputChange: r,
  onSearch: e,
  onClearSearch: i,
  onRefresh: c,
  refreshing: o
}) => {
  const { t: s } = Ne(), m = () => {
    if (G(n) > Nt) {
      Y.error(s(a.INPUT_TOO_LONG));
      return;
    }
    e();
  };
  return /* @__PURE__ */ u("div", { className: "monitor-header", children: [
    /* @__PURE__ */ t("div", { className: "monitor-title-section", children: /* @__PURE__ */ t("h2", { className: "monitor-title", children: s(a.LIVE_MONITOR) }) }),
    /* @__PURE__ */ u("div", { className: "monitor-header-actions", children: [
      /* @__PURE__ */ t(
        ge,
        {
          value: n,
          onChange: r,
          onEnter: m,
          clearable: !0,
          onClear: i,
          placeholder: s(a.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ t(ar, { size: 16 }),
          className: "monitor-search-input",
          status: G(n) > Nt ? "error" : "default",
          tips: G(n) > Nt ? s(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ t(
        B,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ t(ir, {}),
          loading: o,
          onClick: c,
          children: s(a.REFRESH)
        }
      )
    ] })
  ] });
}, qa = ({
  currentPage: n,
  hasMoreData: r,
  loading: e,
  onPrevPage: i,
  onNextPage: c,
  onGoToFirstPage: o
}) => {
  const { t: s } = Ne();
  return /* @__PURE__ */ u("div", { className: "live-monitor-pagination", children: [
    /* @__PURE__ */ t(
      B,
      {
        variant: "outline",
        size: "small",
        disabled: n <= 1 || e,
        onClick: o,
        children: s(a.FIRST_PAGE)
      }
    ),
    /* @__PURE__ */ t(
      B,
      {
        variant: "outline",
        size: "small",
        disabled: n <= 1 || e,
        onClick: i,
        children: s(a.PREVIOUS_PAGE)
      }
    ),
    /* @__PURE__ */ t("span", { className: "page-info", children: s("Page {{page}}", { page: n }) }),
    /* @__PURE__ */ t(
      B,
      {
        variant: "outline",
        size: "small",
        disabled: !r || e,
        onClick: c,
        children: s(a.NEXT_PAGE)
      }
    )
  ] });
};
function Gt({
  className: n = "anchor-avatar",
  name: r,
  src: e,
  title: i
}) {
  const { t: c } = Ne(), [o, s] = b(""), [m, l] = b(!1);
  J(() => {
    s(e || qt), l(!1);
  }, [e]);
  const d = r ? c("Avatar Alt", { name: r }) : c("Host Avatar");
  return !o || m ? /* @__PURE__ */ t("div", { className: n, title: i, "aria-label": d, children: bn(r) }) : /* @__PURE__ */ t("div", { className: n, title: i, "aria-label": d, children: /* @__PURE__ */ t(
    "img",
    {
      src: o,
      alt: d,
      style: {
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        display: "block",
        objectFit: "cover",
        borderRadius: "inherit"
      },
      onError: () => {
        if (o !== qt) {
          s(qt);
          return;
        }
        l(!0);
      }
    }
  ) });
}
class Xa extends nn {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(r) {
    console.error("[LiveManager Slot] render failed:", r);
  }
  render() {
    return this.state.hasError ? this.props.fallback ?? null : this.props.children;
  }
}
function ke({
  slot: n,
  props: r,
  fallback: e,
  className: i
}) {
  if (!n) return null;
  const c = tn(n) ? st.cloneElement(n, r) : rn(n, r);
  return /* @__PURE__ */ t(Xa, { fallback: e, children: i ? /* @__PURE__ */ t("div", { className: i, children: c }) : c });
}
const ja = ({
  item: n,
  hoveredCardId: r,
  hoveredTagId: e,
  isMuted: i,
  userProfile: c,
  displayTags: o,
  adaptiveResult: s,
  onMouseEnter: m,
  onMouseLeave: l,
  onClickDetails: d,
  onViolationWarning: f,
  onCloseLive: p,
  onTagHover: v
}) => {
  var ee, x, W, q, $;
  const { t: h } = Ne(), { startPlay: N, stopPlay: E } = ht(), g = (ee = yt().components) == null ? void 0 : ee.liveMonitor, T = ((x = n.avatarUrl) == null ? void 0 : x.trim()) || "", C = (c == null ? void 0 : c.avatarUrl) || ((W = n.anchor) == null ? void 0 : W.avatarUrl) || T || Br(n), O = (c == null ? void 0 : c.nick) || ((q = n.anchor) == null ? void 0 : q.nick) || Hr(n, h(a.UNKNOWN_HOST)), D = (($ = n.stats) == null ? void 0 : $.viewCount) ?? 0, I = Le(() => `live_monitor_view_${n.liveId}`, [n.liveId]), w = Q(""), X = Q(0), S = Q(null);
  return J(() => {
    const R = n.liveId;
    if (!R) return;
    const L = ++X.current;
    let _ = !1;
    return (async () => {
      for (; S.current; )
        try {
          await S.current;
        } catch {
        }
      try {
        await N({ liveId: R, containerId: I }), !_ && X.current === L && (w.current = R);
      } catch (H) {
        !_ && X.current === L && (H === Ft.LOGIN_TIMEOUT || H === Ft.USER_SIG_ILLEGAL) && (Ma(), Oa(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required");
      }
    })(), () => {
      _ = !0, X.current += 1;
      const H = w.current || R;
      w.current === H && (w.current = ""), S.current = E(H), S.current.catch(() => {
      });
    };
  }, [n.liveId, I, N, E]), /* @__PURE__ */ u(
    "div",
    {
      className: `live-card ${r === n.liveId ? "hovered" : ""}`,
      onMouseEnter: m,
      onMouseLeave: l,
      children: [
        /* @__PURE__ */ u("div", { id: n.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${n.backgroundUrl || n.coverUrl || hr})`
              }
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              id: I,
              className: "live-video-player"
            }
          ),
          /* @__PURE__ */ t(
            "div",
            {
              className: "live-id-badge",
              style: { maxWidth: s.idMaxWidth },
              children: /* @__PURE__ */ t("span", { title: n.liveId, children: `${h(a.LIVE_ID)}: ${n.liveId}` })
            }
          ),
          o.length > 0 && /* @__PURE__ */ u(
            "div",
            {
              className: "live-card-tags-overlay",
              style: { maxWidth: s.tagsMaxWidth },
              children: [
                o.slice(0, s.visibleCount).map((R) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ t("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ t("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  h(R)
                ] }, R)),
                s.showMore && /* @__PURE__ */ u(
                  "div",
                  {
                    className: "tag-more-wrapper",
                    onMouseLeave: () => v(null),
                    children: [
                      /* @__PURE__ */ t(
                        "span",
                        {
                          className: "live-card-tag-overlay live-card-tag-more",
                          onMouseEnter: () => v(n.liveId),
                          children: "..."
                        }
                      ),
                      e === n.liveId && /* @__PURE__ */ t(
                        "div",
                        {
                          className: "live-card-tag-dropdown",
                          onMouseEnter: () => v(n.liveId),
                          onClick: (R) => R.stopPropagation(),
                          children: o.slice(s.visibleCount).map((R) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ t("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ t("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                            ] }),
                            h(R)
                          ] }, R))
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
              onClick: (R) => {
                R.stopPropagation(), d();
              },
              children: /* @__PURE__ */ u("div", { className: "overlay-btn primary", children: [
                /* @__PURE__ */ t(kr, { size: 16 }),
                h(a.VIEW_DETAILS)
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ u("div", { className: "live-card-info", children: [
          /* @__PURE__ */ t("div", { className: "live-card-title", title: n.liveName || h(a.UNNAMED_LIVE), children: n.liveName || h(a.UNNAMED_LIVE) }),
          /* @__PURE__ */ u("div", { className: "live-card-meta", children: [
            /* @__PURE__ */ u("div", { className: "live-card-anchor", children: [
              /* @__PURE__ */ t(
                Gt,
                {
                  className: "anchor-avatar",
                  src: C,
                  name: O,
                  title: O
                }
              ),
              /* @__PURE__ */ t("span", { className: "anchor-name", title: O, children: O })
            ] }),
            /* @__PURE__ */ u("span", { className: "meta-viewer-count", title: String(D), children: [
              D,
              h(a.VIEWS)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u("div", { className: `live-card-actions ${r === n.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ t(
            B,
            {
              className: "action-btn warn",
              variant: "text",
              icon: /* @__PURE__ */ t(Pr, { size: 16 }),
              onClick: (R) => {
                R.stopPropagation(), f();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: h(a.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ t(ke, { slot: g == null ? void 0 : g.userActionExtraItems, props: { live: n } }),
          /* @__PURE__ */ t(
            B,
            {
              className: "action-btn close full",
              variant: "text",
              icon: /* @__PURE__ */ t(Fr, { size: 16 }),
              onClick: (R) => {
                R.stopPropagation(), p();
              },
              children: /* @__PURE__ */ t("span", { className: "button-text", children: h(a.FORCE_STOP) })
            }
          )
        ] })
      ]
    },
    n.liveId
  );
}, Za = () => {
  const n = ht(), { paginatedList: r } = n, [e, i] = b(r.currentPage), [c, o] = b(r.hasMore), [s, m] = b(r.loading), [l, d] = b(r.pageData);
  J(() => uo((C) => {
    i(C.currentPage), o(C.hasMore), m(C.loading), d([...C.pageData]);
  }), []);
  const f = l.length > 0, [p, v] = b(/* @__PURE__ */ new Map()), h = Q(0), N = Q(!1), E = Q(/* @__PURE__ */ new Map());
  E.current = Le(() => {
    const T = /* @__PURE__ */ new Map();
    return T.set(e, l), T;
  }, [e, l]);
  const g = Q([]);
  return g.current = l, {
    // —— 分页快照（响应式，来自 controller） ——
    currentPage: e,
    hasMoreData: c,
    loading: s,
    pageData: l,
    hasLiveData: f,
    // —— 用户资料缓存 ——
    userProfileMap: p,
    setUserProfileMap: v,
    // —— Refs（与分页解耦） ——
    pageVersionRef: h,
    isUnmountedRef: N,
    // —— 兼容老接口的只读 refs（仅当前页数据；不可 mutate） ——
    pageDataCacheRef: E,
    liveListRef: g,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: r
  };
}, Ja = 8, Qa = (n) => {
  const {
    paginatedList: r,
    isSearchMode: e,
    pageVersionRef: i,
    setIsSearchMode: c,
    setSearchInput: o,
    stopPlay: s,
    endLive: m,
    fetchLiveDetail: l,
    isUnmountedRef: d
  } = n, f = _t(), { t: p } = Ne(), [v, h] = b({ visible: !1, liveId: "", liveName: "", closing: !1 }), [N, E] = b({ visible: !1, liveId: "", liveName: "" }), [g, T] = b(!1), C = Q(!1), [O, D] = b(!1), I = A(($, R) => {
    h({ visible: !0, liveId: $, liveName: R, closing: !1 });
  }, []), w = A(($, R) => {
    E({ visible: !0, liveId: $, liveName: R });
  }, []), X = A(async () => {
    const { liveId: $ } = v;
    if ($) {
      h((R) => ({ ...R, closing: !0 }));
      try {
        await s($), await m($), h({ visible: !1, liveId: "", liveName: "", closing: !1 }), Y.success(p(a.LIVE_FORCIBLY_CLOSED));
        const R = !r.hasMore, L = r.pageData.length;
        i.current += 1, R && L <= 1 && r.currentPage > 1 ? await r.prevPage() : await r.refreshCurrentPage();
      } catch (R) {
        console.error("封禁房间失败:", R), h((L) => ({ ...L, closing: !1 }));
      }
    }
  }, [v, s, m, r, i, p]), S = A(() => {
    h({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), ee = A(($) => {
    try {
      sessionStorage.setItem("liveMonitor_currentPage", String(r.currentPage));
    } catch {
    }
    f(`/live-control/${$}`);
  }, [r, f]), x = A(async ($) => {
    const R = ($ ?? "").trim();
    if (!R || G(R) > Nt) {
      R && G(R) > Nt && Y.error(p(a.INPUT_TOO_LONG));
      return;
    }
    const L = R;
    T(!0);
    const _ = ++i.current;
    try {
      const k = await l(L);
      if (d.current || i.current !== _)
        return;
      if (!k) {
        Y.error(p(a.NO_SEARCH_RESULTS_FOR, { keyword: R })), await r.goToFirstPage();
        return;
      }
      if (c(!0), C.current = !0, d.current || i.current !== _) {
        await s(L);
        return;
      }
      Y.success(p(a.SEARCH_SUCCESS));
    } catch (k) {
      if (console.error("搜索直播间失败:", k), k === Ft.LOGIN_TIMEOUT || k === Ft.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required";
        return;
      }
      Y.error(p(a.NO_SEARCH_RESULTS_FOR, { keyword: R })), await r.goToFirstPage();
    } finally {
      d.current || T(!1);
    }
  }, [l, d, i, r, c, s, p]), W = A(async () => {
    o(""), c(!1), C.current = !1, i.current += 1, await r.goToFirstPage();
  }, [o, c, i, r]), q = A(async () => {
    if (!(O || r.loading)) {
      D(!0);
      try {
        e && (c(!1), C.current = !1, o("")), i.current += 1, await r.refreshCurrentPage();
      } catch ($) {
        console.error("刷新失败:", $);
        const R = ($ == null ? void 0 : $.ErrorInfo) || ($ == null ? void 0 : $.errorInfo) || "";
        Y.error(p(a.REFRESH_FAILED) + (R ? ` (${R})` : ""));
      } finally {
        d.current || D(!1);
      }
    }
  }, [O, r, e, c, o, i, p, d]);
  return {
    // 封禁相关
    closeConfirm: v,
    handleCloseLive: I,
    handleConfirmClose: X,
    handleCancelClose: S,
    // 违规警告相关
    violationConfirm: N,
    handleViolationWarning: w,
    setViolationConfirm: E,
    // 搜索相关
    searching: g,
    isSearchModeRef: C,
    handleSearch: x,
    handleClearSearch: W,
    // 刷新相关
    refreshing: O,
    handleRefresh: q,
    // 详情
    handleClickDetails: ee
  };
}, ei = 600 * 1e3, ti = (n) => {
  const { pageSize: r, isSearchModeRef: e, isUnmountedRef: i, pageVersionRef: c } = n, [o, s] = b(/* @__PURE__ */ new Map()), m = Q(null), l = Q(""), d = A(() => {
    m.current && (clearTimeout(m.current), m.current = null);
  }, []), f = A(() => {
    const E = /* @__PURE__ */ new Date(), g = new Date(E.getTime() - 3600 * 1e3), T = (C) => {
      const O = C.getFullYear(), D = String(C.getMonth() + 1).padStart(2, "0"), I = String(C.getDate()).padStart(2, "0"), w = String(C.getHours()).padStart(2, "0"), X = String(C.getMinutes()).padStart(2, "0"), S = String(C.getSeconds()).padStart(2, "0");
      return `${O}-${D}-${I} ${w}:${X}:${S}`;
    };
    return {
      startTime: T(g),
      endTime: T(E)
    };
  }, []), p = A(async (E, g, T) => {
    const C = Array.from(
      new Set(
        E.slice(0, r).map((D) => D.liveId).filter(Boolean)
      )
    );
    if (C.length === 0 || e.current) return;
    d();
    const O = `${T}:${g}:${C.join(",")}`;
    l.current = O;
    try {
      const { startTime: D, endTime: I } = f(), w = await Da(C, 10, D, I);
      if (i.current || c.current !== T || l.current !== O)
        return;
      s((X) => {
        const S = new Map(X);
        return C.forEach((ee) => {
          S.set(ee, w.get(ee) || []);
        }), S;
      });
    } catch (D) {
      console.warn("[LiveMonitor] 获取直播违规标签失败:", D);
    } finally {
      !i.current && c.current === T && l.current === O && !e.current && (m.current = setTimeout(() => {
        p(E, g, T);
      }, ei));
    }
  }, [r, e, i, c, d, f]), v = A(() => [], []), h = A((...E) => {
    const g = [];
    for (const T of E)
      for (const C of T || [])
        C && !g.includes(C) && g.push(C);
    return g;
  }, []), N = A((E) => h(
    v(),
    o.get(E.liveId)
  ), [h, v, o]);
  return {
    liveViolationLabelMap: o,
    loadLiveViolationLabelsForPage: p,
    clearLiveViolationRefreshTimer: d,
    getLiveDisplayTags: N
  };
};
function ri(n, r) {
  const e = Q(null), [, i] = b(0);
  e.current || (e.current = new In({
    containerSelector: ".live-monitor-grid",
    t: r
  }));
  const c = A(() => {
    i((d) => d + 1);
  }, []), o = A((d) => {
    const f = e.current, p = f.getResult(d);
    if (!p.visibleCount && !p.showMore && p.idMaxWidth === "calc(100% - 12px)") {
      const v = n(), h = v == null ? void 0 : v.find((N) => N.liveId === d);
      h && setTimeout(() => {
        f.compute(d, h), c();
      }, 0);
    }
    return p;
  }, [c, n]), s = A(() => {
    var d;
    (d = e.current) == null || d.observe(() => {
      c();
    });
  }, [c]), m = A(() => {
    var d;
    (d = e.current) == null || d.disconnect();
  }, []), l = A((d) => {
    var f;
    (f = e.current) == null || f.initForList(d), c();
  }, [c]);
  return J(() => () => {
    var d;
    (d = e.current) == null || d.disconnect(), e.current = null;
  }, []), {
    getAdaptiveResult: o,
    initResizeObserver: s,
    cleanupResizeObserver: m,
    initAdaptiveTags: l
  };
}
const To = () => {
  const { t: n } = Ne(), { init: r, stopPlay: e, endLive: i, fetchLiveDetail: c, currentLive: o } = ht(), {
    currentPage: s,
    hasMoreData: m,
    loading: l,
    hasLiveData: d,
    pageData: f,
    pageVersionRef: p,
    isUnmountedRef: v,
    paginatedList: h
  } = Za(), [N, E] = b(""), [g, T] = b(!1), C = Q(!1), [O, D] = b(null), [I, w] = b(null), {
    getAdaptiveResult: X,
    initResizeObserver: S,
    cleanupResizeObserver: ee,
    initAdaptiveTags: x
  } = ri(
    () => f.map((ae) => ({
      liveId: ae.liveId,
      tags: R(ae)
    })),
    n
  ), {
    liveViolationLabelMap: W,
    loadLiveViolationLabelsForPage: q,
    clearLiveViolationRefreshTimer: $,
    getLiveDisplayTags: R
  } = ti({
    pageSize: Ja,
    isSearchModeRef: C,
    isUnmountedRef: v,
    pageVersionRef: p
  }), L = (ae) => {
    E(String(ae));
  }, _ = A(async () => {
    await h.prevPage();
  }, [h]), k = A(async () => {
    await h.nextPage();
  }, [h]), H = A(async () => {
    await h.goToFirstPage();
  }, [h]);
  J(() => {
    if (l || f.length === 0) return;
    $();
    const ae = ++p.current;
    q(f, s, ae);
  }, [f, s, l, $, q, p]), J(() => (S(), () => {
    ee();
  }), [S, ee]);
  const {
    closeConfirm: y,
    handleCloseLive: P,
    handleConfirmClose: F,
    handleCancelClose: M,
    violationConfirm: U,
    handleViolationWarning: z,
    setViolationConfirm: te,
    handleSearch: oe,
    handleClearSearch: Z,
    refreshing: he,
    handleRefresh: _e,
    handleClickDetails: me
  } = Qa({
    paginatedList: h,
    isSearchMode: g,
    pageVersionRef: p,
    setIsSearchMode: T,
    setSearchInput: E,
    stopPlay: e,
    endLive: i,
    fetchLiveDetail: c,
    isUnmountedRef: v
  });
  return J(() => {
    Object.keys(W).length !== 0 && x(
      f.map((ae) => ({
        liveId: ae.liveId,
        tags: R(ae)
      }))
    );
  }, [W, f, R, x]), J(() => {
    (async () => {
      try {
        const V = await mr();
        if (V && V.sdkAppId !== 0) {
          console.log("[LiveMonitor] Initializing SDK with account:", V.userId), Pa({
            baseURL: "http://localhost:9000/api",
            authToken: V.userSig
          });
          const re = ha({
            sdkAppId: V.sdkAppId,
            userId: V.userId,
            userSig: V.userSig
          });
          r({
            baseURL: "http://localhost:9000/api",
            playerFactory: re
            // ✅ 传入播放器工厂
          }), console.log("[LiveMonitor] SDK initialized successfully with playerFactory");
        } else
          console.error("[LiveMonitor] No valid credentials found");
      } catch (V) {
        console.error("[LiveMonitor] SDK init error:", V);
      }
    })();
  }, []), J(() => {
    v.current = !1;
    try {
      const ae = sessionStorage.getItem("liveMonitor_currentPage");
      sessionStorage.removeItem("liveMonitor_currentPage"), ae && Number(ae) > 1 && console.warn("[LiveMonitor] 简化版不支持恢复历史页码，回到首页");
    } catch {
    }
    return h.goToFirstPage(), () => {
      v.current = !0, $();
    };
  }, []), /* @__PURE__ */ u("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ t(
      $a,
      {
        searchInput: N,
        onSearchInputChange: L,
        onSearch: () => oe(N),
        onClearSearch: Z,
        onRefresh: _e,
        refreshing: he
      }
    ),
    /* @__PURE__ */ t("div", { className: "live-monitor-grid", children: l ? /* @__PURE__ */ u("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ t("div", { className: "loading-spinner" }),
      /* @__PURE__ */ t("span", { children: n(a.LOADING) })
    ] }) : d ? f.map((ae) => {
      const V = R(ae);
      return /* @__PURE__ */ t(
        ja,
        {
          item: ae,
          hoveredCardId: O,
          hoveredTagId: I,
          isMuted: !!ae.isMuted,
          userProfile: ae.anchor,
          displayTags: V,
          adaptiveResult: X(ae.liveId),
          onMouseEnter: () => D(ae.liveId),
          onMouseLeave: () => D(null),
          onClickDetails: () => me(ae.liveId),
          onViolationWarning: () => z(ae.liveId, ae.liveName || n(a.UNNAMED_LIVE)),
          onCloseLive: () => P(ae.liveId, ae.liveName || n(a.UNNAMED_LIVE)),
          onTagHover: (re) => w(re)
        },
        `${s}:${ae.liveId}`
      );
    }) : /* @__PURE__ */ u("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ t("div", { className: "empty-icon", children: /* @__PURE__ */ t(kr, { size: 48 }) }),
      /* @__PURE__ */ t("p", { children: n(a.NO_LIVE_RIGHT_NOW) })
    ] }) }),
    /* @__PURE__ */ t(
      qa,
      {
        currentPage: s,
        hasMoreData: m,
        loading: l,
        onPrevPage: _,
        onNextPage: k,
        onGoToFirstPage: H
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: y.visible,
        header: n(a.CONFIRM_FORCE_STOP),
        onClose: M,
        width: Se.CONFIRM,
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: M, disabled: y.closing, children: n(a.CANCEL) }),
          /* @__PURE__ */ t(
            B,
            {
              shape: "round",
              theme: "primary",
              onClick: F,
              disabled: y.closing,
              children: y.closing ? n(a.CLOSING) : n(a.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ t("p", { children: n(a.FORCE_STOP_WARNING) })
      }
    ),
    /* @__PURE__ */ t(
      Qr,
      {
        visible: U.visible,
        liveId: U.liveId,
        liveName: U.liveName,
        onVisibleChange: (ae) => te((V) => ({ ...V, visible: ae }))
      }
    )
  ] });
};
var rr = function(n, r) {
  return rr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, i) {
    e.__proto__ = i;
  } || function(e, i) {
    for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
  }, rr(n, r);
};
function ni(n, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  rr(n, r);
  function e() {
    this.constructor = n;
  }
  n.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var Ie = function() {
  return Ie = Object.assign || function(r) {
    for (var e, i = 1, c = arguments.length; i < c; i++) {
      e = arguments[i];
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (r[o] = e[o]);
    }
    return r;
  }, Ie.apply(this, arguments);
};
var Xt, Lr;
function ai() {
  if (Lr) return Xt;
  Lr = 1;
  var n = !1, r, e, i, c, o, s, m, l, d, f, p, v, h, N, E;
  function g() {
    if (!n) {
      n = !0;
      var C = navigator.userAgent, O = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(C), D = /(Mac OS X)|(Windows)|(Linux)/.exec(C);
      if (v = /\b(iPhone|iP[ao]d)/.exec(C), h = /\b(iP[ao]d)/.exec(C), f = /Android/i.exec(C), N = /FBAN\/\w+;/i.exec(C), E = /Mobile/i.exec(C), p = !!/Win64/.exec(C), O) {
        r = O[1] ? parseFloat(O[1]) : O[5] ? parseFloat(O[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
        var I = /(?:Trident\/(\d+.\d+))/.exec(C);
        s = I ? parseFloat(I[1]) + 4 : r, e = O[2] ? parseFloat(O[2]) : NaN, i = O[3] ? parseFloat(O[3]) : NaN, c = O[4] ? parseFloat(O[4]) : NaN, c ? (O = /(?:Chrome\/(\d+\.\d+))/.exec(C), o = O && O[1] ? parseFloat(O[1]) : NaN) : o = NaN;
      } else
        r = e = i = o = c = NaN;
      if (D) {
        if (D[1]) {
          var w = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(C);
          m = w ? parseFloat(w[1].replace("_", ".")) : !0;
        } else
          m = !1;
        l = !!D[2], d = !!D[3];
      } else
        m = l = d = !1;
    }
  }
  var T = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return g() || r;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return g() || s > r;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return T.ie() && p;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return g() || e;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return g() || i;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return g() || c;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return T.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return g() || o;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return g() || l;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return g() || m;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return g() || d;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return g() || v;
    },
    mobile: function() {
      return g() || v || h || f || E;
    },
    nativeApp: function() {
      return g() || N;
    },
    android: function() {
      return g() || f;
    },
    ipad: function() {
      return g() || h;
    }
  };
  return Xt = T, Xt;
}
var jt, Sr;
function ii() {
  if (Sr) return jt;
  Sr = 1;
  var n = !!(typeof window < "u" && window.document && window.document.createElement), r = {
    canUseDOM: n,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: n && !!(window.addEventListener || window.attachEvent),
    canUseViewport: n && !!window.screen,
    isInWorker: !n
    // For now, this is true - might change in the future.
  };
  return jt = r, jt;
}
var Zt, Tr;
function oi() {
  if (Tr) return Zt;
  Tr = 1;
  var n = ii(), r;
  n.canUseDOM && (r = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  /**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @param {?boolean} capture Check if the capture phase is supported.
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   */
  function e(i, c) {
    if (!n.canUseDOM || c && !("addEventListener" in document))
      return !1;
    var o = "on" + i, s = o in document;
    if (!s) {
      var m = document.createElement("div");
      m.setAttribute(o, "return;"), s = typeof m[o] == "function";
    }
    return !s && r && i === "wheel" && (s = document.implementation.hasFeature("Events.wheel", "3.0")), s;
  }
  return Zt = e, Zt;
}
var Jt, Ar;
function si() {
  if (Ar) return Jt;
  Ar = 1;
  var n = ai(), r = oi(), e = 10, i = 40, c = 800;
  function o(s) {
    var m = 0, l = 0, d = 0, f = 0;
    return "detail" in s && (l = s.detail), "wheelDelta" in s && (l = -s.wheelDelta / 120), "wheelDeltaY" in s && (l = -s.wheelDeltaY / 120), "wheelDeltaX" in s && (m = -s.wheelDeltaX / 120), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (m = l, l = 0), d = m * e, f = l * e, "deltaY" in s && (f = s.deltaY), "deltaX" in s && (d = s.deltaX), (d || f) && s.deltaMode && (s.deltaMode == 1 ? (d *= i, f *= i) : (d *= c, f *= c)), d && !m && (m = d < 1 ? -1 : 1), f && !l && (l = f < 1 ? -1 : 1), {
      spinX: m,
      spinY: l,
      pixelX: d,
      pixelY: f
    };
  }
  return o.getEventType = function() {
    return n.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel";
  }, Jt = o, Jt;
}
var Qt, wr;
function ci() {
  return wr || (wr = 1, Qt = si()), Qt;
}
var li = ci();
const di = /* @__PURE__ */ ma(li);
function ui(n, r, e, i, c, o) {
  o === void 0 && (o = 0);
  var s = dt(n, r, o), m = s.width, l = s.height, d = Math.min(m, e), f = Math.min(l, i);
  return d > f * c ? {
    width: f * c,
    height: f
  } : {
    width: d,
    height: d / c
  };
}
function hi(n) {
  return n.width > n.height ? n.width / n.naturalWidth : n.height / n.naturalHeight;
}
function Et(n, r, e, i, c) {
  c === void 0 && (c = 0);
  var o = dt(r.width, r.height, c), s = o.width, m = o.height;
  return {
    x: Rr(n.x, s, e.width, i),
    y: Rr(n.y, m, e.height, i)
  };
}
function Rr(n, r, e, i) {
  var c = r * i / 2 - e / 2;
  return Wt(n, -c, c);
}
function Mr(n, r) {
  return Math.sqrt(Math.pow(n.y - r.y, 2) + Math.pow(n.x - r.x, 2));
}
function Or(n, r) {
  return Math.atan2(r.y - n.y, r.x - n.x) * 180 / Math.PI;
}
function mi(n, r, e, i, c, o, s) {
  o === void 0 && (o = 0), s === void 0 && (s = !0);
  var m = s ? fi : pi, l = dt(r.width, r.height, o), d = dt(r.naturalWidth, r.naturalHeight, o), f = {
    x: m(100, ((l.width - e.width / c) / 2 - n.x / c) / l.width * 100),
    y: m(100, ((l.height - e.height / c) / 2 - n.y / c) / l.height * 100),
    width: m(100, e.width / l.width * 100 / c),
    height: m(100, e.height / l.height * 100 / c)
  }, p = Math.round(m(d.width, f.width * d.width / 100)), v = Math.round(m(d.height, f.height * d.height / 100)), h = d.width >= d.height * i, N = h ? {
    width: Math.round(v * i),
    height: v
  } : {
    width: p,
    height: Math.round(p / i)
  }, E = Ie(Ie({}, N), {
    x: Math.round(m(d.width - N.width, f.x * d.width / 100)),
    y: Math.round(m(d.height - N.height, f.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: f,
    croppedAreaPixels: E
  };
}
function fi(n, r) {
  return Math.min(n, Math.max(0, r));
}
function pi(n, r) {
  return r;
}
function gi(n, r, e, i, c, o) {
  var s = dt(r.width, r.height, e), m = Wt(i.width / s.width * (100 / n.width), c, o), l = {
    x: m * s.width / 2 - i.width / 2 - s.width * m * (n.x / 100),
    y: m * s.height / 2 - i.height / 2 - s.height * m * (n.y / 100)
  };
  return {
    crop: l,
    zoom: m
  };
}
function vi(n, r, e) {
  var i = hi(r);
  return e.height > e.width ? e.height / (n.height * i) : e.width / (n.width * i);
}
function Ei(n, r, e, i, c, o) {
  e === void 0 && (e = 0);
  var s = dt(r.naturalWidth, r.naturalHeight, e), m = Wt(vi(n, r, i), c, o), l = i.height > i.width ? i.height / n.height : i.width / n.width, d = {
    x: ((s.width - n.width) / 2 - n.x) * l,
    y: ((s.height - n.height) / 2 - n.y) * l
  };
  return {
    crop: d,
    zoom: m
  };
}
function Dr(n, r) {
  return {
    x: (r.x + n.x) / 2,
    y: (r.y + n.y) / 2
  };
}
function Ni(n) {
  return n * Math.PI / 180;
}
function dt(n, r, e) {
  var i = Ni(e);
  return {
    width: Math.abs(Math.cos(i) * n) + Math.abs(Math.sin(i) * r),
    height: Math.abs(Math.sin(i) * n) + Math.abs(Math.cos(i) * r)
  };
}
function Wt(n, r, e) {
  return Math.min(Math.max(n, r), e);
}
function Dt() {
  for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r];
  return n.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var Ci = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, yi = 1, _i = 3, bi = 1, Ii = (
  /** @class */
  (function(n) {
    ni(r, n);
    function r() {
      var e = n !== null && n.apply(this, arguments) || this;
      return e.cropperRef = ze.createRef(), e.imageRef = ze.createRef(), e.videoRef = ze.createRef(), e.containerPosition = {
        x: 0,
        y: 0
      }, e.containerRef = null, e.styleRef = null, e.containerRect = null, e.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, e.dragStartPosition = {
        x: 0,
        y: 0
      }, e.dragStartCrop = {
        x: 0,
        y: 0
      }, e.gestureZoomStart = 0, e.gestureRotationStart = 0, e.isTouching = !1, e.lastPinchDistance = 0, e.lastPinchRotation = 0, e.rafDragTimeout = null, e.rafPinchTimeout = null, e.wheelTimer = null, e.currentDoc = typeof document < "u" ? document : null, e.currentWindow = typeof window < "u" ? window : null, e.resizeObserver = null, e.previousCropSize = null, e.isInitialized = !1, e.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, e.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !e.containerRef)) {
          var i = !0;
          e.resizeObserver = new window.ResizeObserver(function(c) {
            if (i) {
              i = !1;
              return;
            }
            e.computeSizes();
          }), e.resizeObserver.observe(e.containerRef);
        }
      }, e.preventZoomSafari = function(i) {
        return i.preventDefault();
      }, e.cleanEvents = function() {
        e.currentDoc && (e.currentDoc.removeEventListener("mousemove", e.onMouseMove), e.currentDoc.removeEventListener("mouseup", e.onDragStopped), e.currentDoc.removeEventListener("touchmove", e.onTouchMove), e.currentDoc.removeEventListener("touchend", e.onDragStopped), e.currentDoc.removeEventListener("gesturechange", e.onGestureChange), e.currentDoc.removeEventListener("gestureend", e.onGestureEnd), e.currentDoc.removeEventListener("scroll", e.onScroll));
      }, e.clearScrollEvent = function() {
        e.containerRef && e.containerRef.removeEventListener("wheel", e.onWheel), e.wheelTimer && clearTimeout(e.wheelTimer);
      }, e.onMediaLoad = function() {
        var i = e.computeSizes();
        i && (e.previousCropSize = i, e.emitCropData(), e.setInitialCrop(i), e.isInitialized = !0), e.props.onMediaLoaded && e.props.onMediaLoaded(e.mediaSize);
      }, e.setInitialCrop = function(i) {
        if (e.props.initialCroppedAreaPercentages) {
          var c = gi(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, i, e.props.minZoom, e.props.maxZoom), o = c.crop, s = c.zoom;
          e.props.onCropChange(o), e.props.onZoomChange && e.props.onZoomChange(s);
        } else if (e.props.initialCroppedAreaPixels) {
          var m = Ei(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, i, e.props.minZoom, e.props.maxZoom), o = m.crop, s = m.zoom;
          e.props.onCropChange(o), e.props.onZoomChange && e.props.onZoomChange(s);
        }
      }, e.computeSizes = function() {
        var i, c, o, s, m, l, d = e.imageRef.current || e.videoRef.current;
        if (d && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var f = e.containerRect.width / e.containerRect.height, p = ((i = e.imageRef.current) === null || i === void 0 ? void 0 : i.naturalWidth) || ((c = e.videoRef.current) === null || c === void 0 ? void 0 : c.videoWidth) || 0, v = ((o = e.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((s = e.videoRef.current) === null || s === void 0 ? void 0 : s.videoHeight) || 0, h = d.offsetWidth < p || d.offsetHeight < v, N = p / v, E = void 0;
          if (h)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                E = f > N ? {
                  width: e.containerRect.height * N,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / N
                };
                break;
              case "horizontal-cover":
                E = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / N
                };
                break;
              case "vertical-cover":
                E = {
                  width: e.containerRect.height * N,
                  height: e.containerRect.height
                };
                break;
            }
          else
            E = {
              width: d.offsetWidth,
              height: d.offsetHeight
            };
          e.mediaSize = Ie(Ie({}, E), {
            naturalWidth: p,
            naturalHeight: v
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var g = e.props.cropSize ? e.props.cropSize : ui(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((m = e.state.cropSize) === null || m === void 0 ? void 0 : m.height) !== g.height || ((l = e.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== g.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(g), e.setState({
            cropSize: g
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(g), g;
        }
      }, e.saveContainerPosition = function() {
        if (e.containerRef) {
          var i = e.containerRef.getBoundingClientRect();
          e.containerPosition = {
            x: i.left,
            y: i.top
          };
        }
      }, e.onMouseDown = function(i) {
        e.currentDoc && (i.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(r.getMousePoint(i)));
      }, e.onMouseMove = function(i) {
        return e.onDrag(r.getMousePoint(i));
      }, e.onScroll = function(i) {
        e.currentDoc && (i.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(i) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(i)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), i.touches.length === 2 ? e.onPinchStart(i) : i.touches.length === 1 && e.onDragStart(r.getTouchPoint(i.touches[0]))));
      }, e.onTouchMove = function(i) {
        i.preventDefault(), i.touches.length === 2 ? e.onPinchMove(i) : i.touches.length === 1 && e.onDrag(r.getTouchPoint(i.touches[0]));
      }, e.onGestureStart = function(i) {
        e.currentDoc && (i.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureChange = function(i) {
        if (i.preventDefault(), !e.isTouching) {
          var c = r.getMousePoint(i), o = e.gestureZoomStart - 1 + i.scale;
          if (e.setNewZoom(o, c, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var s = e.gestureRotationStart + i.rotation;
            e.props.onRotationChange(s);
          }
        }
      }, e.onGestureEnd = function(i) {
        e.cleanEvents();
      }, e.onDragStart = function(i) {
        var c, o, s = i.x, m = i.y;
        e.dragStartPosition = {
          x: s,
          y: m
        }, e.dragStartCrop = Ie({}, e.props.crop), (o = (c = e.props).onInteractionStart) === null || o === void 0 || o.call(c);
      }, e.onDrag = function(i) {
        var c = i.x, o = i.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(c === void 0 || o === void 0)) {
            var s = c - e.dragStartPosition.x, m = o - e.dragStartPosition.y, l = {
              x: e.dragStartCrop.x + s,
              y: e.dragStartCrop.y + m
            }, d = e.props.restrictPosition ? Et(l, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : l;
            e.props.onCropChange(d);
          }
        }));
      }, e.onDragStopped = function() {
        var i, c;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (c = (i = e.props).onInteractionEnd) === null || c === void 0 || c.call(i);
      }, e.onWheel = function(i) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(i))) {
          i.preventDefault();
          var c = r.getMousePoint(i), o = di(i).pixelY, s = e.props.zoom - o * e.props.zoomSpeed / 200;
          e.setNewZoom(s, c, {
            shouldUpdatePosition: !0
          }), e.state.hasWheelJustStarted || e.setState({
            hasWheelJustStarted: !0
          }, function() {
            var m, l;
            return (l = (m = e.props).onInteractionStart) === null || l === void 0 ? void 0 : l.call(m);
          }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
            return e.setState({
              hasWheelJustStarted: !1
            }, function() {
              var m, l;
              return (l = (m = e.props).onInteractionEnd) === null || l === void 0 ? void 0 : l.call(m);
            });
          }, 250);
        }
      }, e.getPointOnContainer = function(i, c) {
        var o = i.x, s = i.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (o - c.x),
          y: e.containerRect.height / 2 - (s - c.y)
        };
      }, e.getPointOnMedia = function(i) {
        var c = i.x, o = i.y, s = e.props, m = s.crop, l = s.zoom;
        return {
          x: (c + m.x) / l,
          y: (o + m.y) / l
        };
      }, e.setNewZoom = function(i, c, o) {
        var s = o === void 0 ? {} : o, m = s.shouldUpdatePosition, l = m === void 0 ? !0 : m;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var d = Wt(i, e.props.minZoom, e.props.maxZoom);
          if (l) {
            var f = e.getPointOnContainer(c, e.containerPosition), p = e.getPointOnMedia(f), v = {
              x: p.x * d - f.x,
              y: p.y * d - f.y
            }, h = e.props.restrictPosition ? Et(v, e.mediaSize, e.state.cropSize, d, e.props.rotation) : v;
            e.props.onCropChange(h);
          }
          e.props.onZoomChange(d);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var i = e.props.restrictPosition ? Et(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return mi(i, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var i = e.getCropData();
        if (i) {
          var c = i.croppedAreaPercentages, o = i.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(c, o), e.props.onCropAreaChange && e.props.onCropAreaChange(c, o);
        }
      }, e.emitCropAreaChange = function() {
        var i = e.getCropData();
        if (i) {
          var c = i.croppedAreaPercentages, o = i.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(c, o);
        }
      }, e.recomputeCropPosition = function() {
        var i, c;
        if (e.state.cropSize) {
          var o = e.props.crop;
          if (e.isInitialized && (!((i = e.previousCropSize) === null || i === void 0) && i.width) && (!((c = e.previousCropSize) === null || c === void 0) && c.height)) {
            var s = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (s) {
              var m = e.state.cropSize.width / e.previousCropSize.width, l = e.state.cropSize.height / e.previousCropSize.height;
              o = {
                x: e.props.crop.x * m,
                y: e.props.crop.y * l
              };
            }
          }
          var d = e.props.restrictPosition ? Et(o, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : o;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(d), e.emitCropData();
        }
      }, e.onKeyDown = function(i) {
        var c, o, s = e.props, m = s.crop, l = s.onCropChange, d = s.keyboardStep, f = s.zoom, p = s.rotation, v = d;
        if (e.state.cropSize) {
          i.shiftKey && (v *= 0.2);
          var h = Ie({}, m);
          switch (i.key) {
            case "ArrowUp":
              h.y -= v, i.preventDefault();
              break;
            case "ArrowDown":
              h.y += v, i.preventDefault();
              break;
            case "ArrowLeft":
              h.x -= v, i.preventDefault();
              break;
            case "ArrowRight":
              h.x += v, i.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (h = Et(h, e.mediaSize, e.state.cropSize, f, p)), i.repeat || (o = (c = e.props).onInteractionStart) === null || o === void 0 || o.call(c), l(h);
        }
      }, e.onKeyUp = function(i) {
        var c, o;
        switch (i.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            i.preventDefault();
            break;
          default:
            return;
        }
        e.emitCropData(), (o = (c = e.props).onInteractionEnd) === null || o === void 0 || o.call(c);
      }, e;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = Ci, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var e, i;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((i = this.styleRef.parentNode) === null || i === void 0 || i.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(e) {
      var i, c, o, s, m, l, d, f, p;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((i = e.cropSize) === null || i === void 0 ? void 0 : i.height) !== ((c = this.props.cropSize) === null || c === void 0 ? void 0 : c.height) || ((o = e.cropSize) === null || o === void 0 ? void 0 : o.width) !== ((s = this.props.cropSize) === null || s === void 0 ? void 0 : s.width) ? this.computeSizes() : (((m = e.crop) === null || m === void 0 ? void 0 : m.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((d = e.crop) === null || d === void 0 ? void 0 : d.y) !== ((f = this.props.crop) === null || f === void 0 ? void 0 : f.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((p = this.videoRef.current) === null || p === void 0 || p.load());
      var v = this.getObjectFit();
      v !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: v
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var e = this.props, i = e.cropSize, c = e.aspect;
      return i ? i.width / i.height : c;
    }, r.prototype.getObjectFit = function() {
      var e, i, c, o;
      if (this.props.objectFit === "cover") {
        var s = this.imageRef.current || this.videoRef.current;
        if (s && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var m = this.containerRect.width / this.containerRect.height, l = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, d = ((c = this.imageRef.current) === null || c === void 0 ? void 0 : c.naturalHeight) || ((o = this.videoRef.current) === null || o === void 0 ? void 0 : o.videoHeight) || 0, f = l / d;
          return f < m ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(e) {
      var i = r.getTouchPoint(e.touches[0]), c = r.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = Mr(i, c), this.lastPinchRotation = Or(i, c), this.onDragStart(Dr(i, c));
    }, r.prototype.onPinchMove = function(e) {
      var i = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var c = r.getTouchPoint(e.touches[0]), o = r.getTouchPoint(e.touches[1]), s = Dr(c, o);
        this.onDrag(s), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var m = Mr(c, o), l = i.props.zoom * (m / i.lastPinchDistance);
          i.setNewZoom(l, s, {
            shouldUpdatePosition: !1
          }), i.lastPinchDistance = m;
          var d = Or(c, o), f = i.props.rotation + (d - i.lastPinchRotation);
          i.props.onRotationChange && i.props.onRotationChange(f), i.lastPinchRotation = d;
        });
      }
    }, r.prototype.render = function() {
      var e = this, i, c = this.props, o = c.image, s = c.video, m = c.mediaProps, l = c.cropperProps, d = c.transform, f = c.crop, p = f.x, v = f.y, h = c.rotation, N = c.zoom, E = c.cropShape, g = c.showGrid, T = c.roundCropAreaPixels, C = c.style, O = C.containerStyle, D = C.cropAreaStyle, I = C.mediaStyle, w = c.classes, X = w.containerClassName, S = w.cropAreaClassName, ee = w.mediaClassName, x = (i = this.state.mediaObjectFit) !== null && i !== void 0 ? i : this.getObjectFit();
      return ze.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(q) {
          return e.containerRef = q;
        },
        "data-testid": "container",
        style: O,
        className: Dt("reactEasyCrop_Container", X)
      }, o ? ze.createElement("img", Ie({
        alt: "",
        className: Dt("reactEasyCrop_Image", x === "contain" && "reactEasyCrop_Contain", x === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", x === "vertical-cover" && "reactEasyCrop_Cover_Vertical", ee)
      }, m, {
        src: o,
        ref: this.imageRef,
        style: Ie(Ie({}, I), {
          transform: d || "translate(".concat(p, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(N, ")")
        }),
        onLoad: this.onMediaLoad
      })) : s && ze.createElement("video", Ie({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Dt("reactEasyCrop_Video", x === "contain" && "reactEasyCrop_Contain", x === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", x === "vertical-cover" && "reactEasyCrop_Cover_Vertical", ee)
      }, m, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Ie(Ie({}, I), {
          transform: d || "translate(".concat(p, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(N, ")")
        }),
        controls: !1
      }), (Array.isArray(s) ? s : [{
        src: s
      }]).map(function(W) {
        return ze.createElement("source", Ie({
          key: W.src
        }, W));
      })), this.state.cropSize && ze.createElement("div", Ie({
        ref: this.cropperRef,
        style: Ie(Ie({}, D), {
          width: T ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: T ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Dt("reactEasyCrop_CropArea", E === "round" && "reactEasyCrop_CropAreaRound", g && "reactEasyCrop_CropAreaGrid", S)
      }, l)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: _i,
      minZoom: yi,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0,
      keyboardStep: bi
    }, r.getMousePoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, r.getTouchPoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, r;
  })(ze.Component)
);
function Li() {
  const [n, r] = b(""), e = Q(null);
  e.current || (e.current = new Ln());
  const i = e.current, c = A((s) => {
    const m = i.setPreview(s);
    r(m);
  }, [i]), o = A(() => {
    i.clearPreview(), r("");
  }, [i]);
  return J(() => () => {
    i.cleanup();
  }, [i]), {
    /** Current preview URL (empty string if none) */
    previewUrl: n,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: c,
    /** Clear preview URL */
    clearPreview: o,
    /** Whether preview exists */
    hasPreview: !!n
  };
}
function Si(n = {}) {
  const { loop: r = 1, autoPlay: e = !0 } = n, i = Q(null), c = Q(null), o = Q(!1), s = A(() => {
    if (c.current) {
      try {
        c.current.stopAnimation(), c.current.clear();
      } catch (p) {
        console.warn("SVGA cleanup error:", p);
      }
      c.current = null, o.current = !1;
    }
  }, []), m = A(async (p) => {
    if (!i.current) {
      console.warn("SVGA container not mounted");
      return;
    }
    s();
    const v = i.current, h = new ur.Player(v);
    c.current = h;
    const N = Kr();
    if (!N) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((E, g) => {
        N.load(
          p,
          (T) => {
            try {
              h.loops = r, h.setVideoItem(T), e && (h.startAnimation(), o.current = !0), E();
            } catch (C) {
              g(C);
            }
          },
          (T) => {
            g(T);
          }
        );
      });
    } catch (E) {
      throw console.error("SVGA load error:", E), s(), E;
    }
  }, [r, e, s]), l = A(async (p) => {
    const v = URL.createObjectURL(p);
    try {
      await m(v);
    } finally {
      URL.revokeObjectURL(v);
    }
  }, [m]), d = A(() => {
    if (c.current)
      try {
        c.current.stopAnimation(), o.current = !1;
      } catch (p) {
        console.warn("SVGA stop error:", p);
      }
  }, []), f = A(() => {
    if (c.current)
      try {
        c.current.startAnimation(), o.current = !0;
      } catch (p) {
        console.warn("SVGA start error:", p);
      }
  }, []);
  return J(() => s, [s]), {
    /** Container ref (attach to div) */
    containerRef: i,
    /** Play SVGA from URL */
    playUrl: m,
    /** Play SVGA from File/Blob */
    playFile: l,
    /** Stop animation */
    stopAnimation: d,
    /** Start animation */
    startAnimation: f,
    /** Whether animation is playing */
    get isPlaying() {
      return o.current;
    }
  };
}
function Ti() {
  const { t: n } = Ne();
  return { t: Ka(n) };
}
Sn(ur.Parser);
const Vt = an(function({
  value: r = "",
  onChange: e,
  type: i = "cover",
  cropEnabled: c = !0,
  aspectRatio: o = 16 / 9,
  maxSize: s = 10,
  placeholder: m,
  showUrlInput: l = !0,
  previewWidth: d,
  previewHeight: f,
  uploadEnabled: p = !1,
  accept: v,
  acceptHint: h,
  maxBytes: N,
  className: E = "",
  deferUpload: g = !1,
  onFileReady: T,
  skipSvgaValidation: C = !1,
  onUrlErrorChange: O
}, D) {
  const { t: I } = Ne(), w = m || I(a.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), X = Q(null), [S, ee] = b(!1), [x, W] = b(0), [q, $] = b(!1), [R, L] = b(""), [_, k] = b(!p), [H, y] = b(r), [P, F] = b(!1), [M, U] = b(""), z = Q(null);
  z.current || (z.current = new Tn({
    setValidating: F,
    setError: U,
    onConfirm: e
  }, C)), z.current.updateCallbacks({
    setValidating: F,
    setError: U,
    onConfirm: e
  }), z.current.updateSkipSvgaValidation(C);
  const te = Q(null), { previewUrl: oe, setPreview: Z } = Li(), [he, _e] = b(!1), [me, ae] = b(!1), {
    containerRef: V,
    playUrl: re,
    stopAnimation: be
  } = Si({ loop: 1, autoPlay: !0 });
  on(D, () => ({
    get isUrlInputMode() {
      return _;
    },
    get isValidating() {
      return P;
    },
    get urlValidationError() {
      return M;
    },
    /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
    get hasUrlError() {
      return _ ? !!(M || N && H.trim() && G(H.trim()) > N) : !1;
    },
    get urlInputValue() {
      return H;
    },
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => {
      k(!0);
    },
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (j) => {
      U(j);
    },
    validateImageUrl: async (j, se) => {
      F(!0), U("");
      try {
        return await An(j, se, C), !0;
      } catch (Ce) {
        const Ye = Ce instanceof Error ? Ce : new Error(String(Ce));
        throw U(Ye.message || I("Image URL invalid")), Ye;
      } finally {
        F(!1);
      }
    },
    reset: () => {
      z.current.reset(), te.current = null, Z(null), _e(!1), ae(!1), y(r || ""), L(""), U(""), ee(!1), W(0), $(!1), p && k(!!r), T == null || T(null);
    },
    ensureUrlValidated: async () => _ ? await z.current.ensureUrlValidatedWithErrorCheck(
      H,
      r || "",
      !!M,
      N
    ) : null,
    uploadPendingFile: async () => {
      const j = te.current;
      if (!j) return null;
      ee(!0), W(0), $(!1);
      try {
        const se = await br(j, i, W);
        return te.current = null, L(se.provider || ""), $(!1), se.url;
      } catch (se) {
        throw $(!0), se;
      } finally {
        ee(!1), W(0);
      }
    }
  }), [i, _, P, M, H, oe, r, N, e, I]), J(() => {
    y(r), r && p && k(!0), g && (te.current = null, Z(null), ae(!1), T == null || T(null));
  }, [r]), J(() => {
    p && r ? k(!0) : p && k(!1);
  }, [p]), J(() => {
    if (!O) return;
    let j = !1;
    (_ || !p) && (M || N && H.trim() && G(H.trim()) > N) && (j = !0), O(j);
  }, [_, M, H, N, p, O]), J(() => {
    r && oe && Z(null);
  }, [r, oe, Z]), J(() => () => {
    var j;
    (j = z.current) == null || j.dispose();
  }, []), J(() => {
    !me || !oe || re(oe).catch((j) => {
      console.error("[ImageUpload] SVGA preview load error:", j);
    });
  }, [me, oe, re]);
  const Te = Q(null), fe = Q(null);
  J(() => {
    if (!r || !gr(r) || !(_ || !p) || !Te.current) {
      if (fe.current) {
        try {
          fe.current.stopAnimation(), fe.current.clear();
        } catch {
        }
        fe.current = null;
      }
      return;
    }
    if (fe.current) {
      try {
        fe.current.stopAnimation(), fe.current.clear();
      } catch {
      }
      fe.current = null;
    }
    const j = Te.current, se = new ur.Player(j);
    se.loops = 0, se.setContentMode("AspectFit"), fe.current = se;
    const Ce = Kr();
    if (Ce)
      return Ce.load(
        r,
        (Ye) => {
          se.setVideoItem(Ye), se.startAnimation();
        },
        (Ye) => {
          console.error("[ImageUpload] SVGA URL preview load error:", Ye);
        }
      ), () => {
        try {
          se.stopAnimation(), se.clear();
        } catch {
        }
        fe.current = null;
      };
  }, [r, _, p]);
  const [Ae, we] = b(!1), [ve, Pe] = b(""), [mt, bt] = b({ x: 0, y: 0 }), [It, Lt] = b(1), [St, Tt] = b(null), [At, Bt] = b(null), [He, wt] = b(!1), Ht = A((j, se) => {
    Tt(se);
  }, []), [Rt, ft] = b(!1), Ke = Q(null);
  J(() => () => {
    Ke.current && clearTimeout(Ke.current);
  }, []);
  const rt = A(async (j) => {
    const se = wn(j, v);
    if (!se.valid) {
      Y.error(se.errorHint);
      return;
    }
    if (!Rn(j, s)) {
      Y.error(I(a.FILE_SIZE_EXCEEDS_MB, { max: s }));
      return;
    }
    try {
      await Mn(j, v, C);
    } catch (Ce) {
      const Ye = Ce instanceof Error ? Ce : new Error(String(Ce));
      Y.error(Ye.message || I("File load failed"));
      return;
    }
    if (c) {
      Pe(""), Bt(j), bt({ x: 0, y: 0 }), Lt(1), Tt(null), wt(!0), ft(!1), we(!0);
      try {
        const Ce = await On(j);
        Pe(Ce);
      } catch {
        Y.error(I("Image load failed")), we(!1);
      } finally {
        wt(!1), Ke.current && clearTimeout(Ke.current), Ke.current = setTimeout(() => {
          ft(!0);
        }, 350);
      }
    } else
      await K(j);
  }, [v, s, I, C, c, g]), K = async (j) => {
    if (g) {
      te.current = j, Z(j);
      const se = j.type.startsWith("video/"), Ce = Dn(j);
      _e(se), ae(Ce), T == null || T(j);
      return;
    }
    ee(!0), W(0);
    try {
      const se = await br(j, i, W);
      e(se.url), L(se.provider || ""), Y.success(I("Upload Success"));
    } catch (se) {
      const Ce = se instanceof Error ? se : new Error(String(se));
      Y.error(I(a.UPLOAD_FAILED_WITH_ERROR, { error: Ce.message || I(a.NETWORK_ERROR) }));
    } finally {
      ee(!1), W(0);
    }
  }, ne = async () => {
    if (!(!St || !ve))
      try {
        const j = await Pn(ve, St);
        we(!1), await K(j);
      } catch {
        Y.error(I("Crop failed"));
      }
  }, ce = Un, ie = A(xn((j) => {
    rt(j);
  }), [rt]), Re = () => {
    z.current.handleUrlFocus();
  }, Me = () => {
    z.current.handleUrlBlur(
      H,
      N
    );
  }, ye = () => {
    z.current.handleUrlEnter(
      H,
      N
    );
  }, pt = (j) => {
    j == null || j.stopPropagation(), z.current.cancelValidation(), F(!1), U(""), e(""), y(""), L(""), ee(!1), W(0), $(!1), g && (te.current = null, Z(null), _e(!1), ae(!1), T == null || T(null));
  };
  return /* @__PURE__ */ u("div", { className: `image-upload-container ${E}`, children: [
    p && l && /* @__PURE__ */ u("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ t(
        B,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${_ ? "" : "active"}`,
          onClick: () => {
            z.current.cancelValidation(), F(!1), U(""), k(!1);
          },
          icon: /* @__PURE__ */ t(pr, { size: "12" }),
          children: I("Upload Image")
        }
      ),
      /* @__PURE__ */ t(
        B,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${_ ? "active" : ""}`,
          onClick: () => {
            z.current.cancelValidation(), F(!1), U(""), k(!0);
          },
          children: I(a.ENTER_URL)
        }
      )
    ] }),
    (_ || !p) && /* @__PURE__ */ t("div", { className: "image-upload-url-input", children: /* @__PURE__ */ t(
      ge,
      {
        value: H,
        onChange: (j) => {
          y(String(j)), U(""), z.current.cancelValidation(), F(!1);
        },
        onFocus: Re,
        onBlur: Me,
        onEnter: ye,
        placeholder: I(a.ENTER_IMAGE_URL),
        status: M ? "error" : void 0,
        suffix: N ? P ? /* @__PURE__ */ t("span", { className: "input-suffix-validating", children: I("Validating") }) : /* @__PURE__ */ u("span", { className: `input-suffix-count${G(H) > N ? " byte-overflow" : ""}`, children: [
          G(H),
          "/",
          N
        ] }) : void 0
      }
    ) }),
    M && (_ || !p) && /* @__PURE__ */ t("div", { className: "image-upload-url-error", children: M }),
    p && !_ && /* @__PURE__ */ u(ue, { children: [
      oe ? /* @__PURE__ */ u(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: d || "100%",
            height: f || 160
          },
          children: [
            S ? (
              // 正在上传时显示进度条覆盖层
              /* @__PURE__ */ u("div", { className: "image-upload-uploading-overlay", children: [
                /* @__PURE__ */ u("div", { className: "image-upload-progress-circle", children: [
                  /* @__PURE__ */ u("svg", { viewBox: "0 0 36 36", className: "progress-ring", children: [
                    /* @__PURE__ */ t(
                      "path",
                      {
                        className: "progress-ring-bg",
                        d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                      }
                    ),
                    /* @__PURE__ */ t(
                      "path",
                      {
                        className: "progress-ring-fill",
                        strokeDasharray: `${x}, 100`,
                        d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u("span", { className: "progress-percent", children: [
                    x,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ t("span", { className: "upload-status-text", children: I("Uploading") })
              ] })
            ) : /* @__PURE__ */ t(ue, { children: me ? /* @__PURE__ */ t("div", { ref: V, className: "svga-preview-container" }) : he ? /* @__PURE__ */ t("video", { src: oe, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ t("img", { src: oe, alt: "preview" }) }),
            !S && R && /* @__PURE__ */ t("span", { className: "image-upload-provider-badge", children: R.toUpperCase() }),
            !S && q ? /* @__PURE__ */ t("span", { className: "image-upload-provider-badge upload-failed-badge", children: I("Upload Failed") }) : !S && !R ? /* @__PURE__ */ t("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: I("Pending Upload") }) : null,
            !S && /* @__PURE__ */ u("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ t(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => {
                    var j;
                    return (j = X.current) == null ? void 0 : j.click();
                  },
                  title: I("Re-upload"),
                  children: /* @__PURE__ */ t(pr, {})
                }
              ),
              /* @__PURE__ */ t(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: pt,
                  title: I(a.DELETE),
                  children: /* @__PURE__ */ t(or, {})
                }
              )
            ] })
          ]
        }
      ) : (
        /* 上传区域 */
        /* @__PURE__ */ t(
          "div",
          {
            className: `image-upload-dropzone ${S ? "uploading" : ""}`,
            onClick: () => {
              var j;
              return !S && ((j = X.current) == null ? void 0 : j.click());
            },
            onDragOver: ce,
            onDrop: ie,
            style: { height: f || 120 },
            children: S ? /* @__PURE__ */ u("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t("div", { className: "progress-fill", style: { width: `${x}%` } }) }),
              /* @__PURE__ */ u("span", { className: "progress-text", children: [
                x,
                "%"
              ] })
            ] }) : /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ t(sn, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ t("span", { className: "upload-hint", children: w }),
              /* @__PURE__ */ t("span", { className: "upload-sub-hint", children: h || I(a.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: s }) })
            ] })
          }
        )
      ),
      /* @__PURE__ */ t(
        "input",
        {
          ref: X,
          type: "file",
          accept: v || "image/jpeg,image/png,image/gif,image/webp",
          style: { display: "none" },
          onChange: (j) => {
            var Ce;
            const se = (Ce = j.target.files) == null ? void 0 : Ce[0];
            se && rt(se), j.target.value = "";
          }
        }
      )
    ] }),
    r && (_ || !p) && /* @__PURE__ */ t(
      "div",
      {
        className: "image-upload-preview url-preview",
        style: {
          width: d || "100%",
          height: f || 120,
          marginTop: 8
        },
        children: gr(r) ? /* @__PURE__ */ t("div", { ref: Te, className: "svga-preview-container" }) : kn(r) ? /* @__PURE__ */ t("video", { src: r, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ t("img", { src: r, alt: "preview", onError: (j) => {
          j.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: Ae,
        header: I("Crop Image"),
        onClose: () => we(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => we(!1), children: I(a.CANCEL) }),
          /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: ne, disabled: He || !ve, icon: /* @__PURE__ */ t(cn, { size: "14" }), children: I(a.CONFIRM_CROP) })
        ] }),
        children: /* @__PURE__ */ t("div", { className: "image-crop-area", children: He || !Rt ? /* @__PURE__ */ u("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ t("div", { className: "loading-spinner" }),
          /* @__PURE__ */ t("span", { children: I("Image Loading") })
        ] }) : ve ? /* @__PURE__ */ t(
          Ii,
          {
            image: ve,
            crop: mt,
            zoom: It,
            aspect: o,
            onCropChange: bt,
            onZoomChange: Lt,
            onCropComplete: Ht
          }
        ) : null })
      }
    )
  ] });
});
function de({
  label: n,
  labelWidth: r = 100,
  requiredMark: e = !1,
  help: i,
  children: c,
  style: o,
  className: s
}) {
  return /* @__PURE__ */ u("div", { className: `form-field${s ? ` ${s}` : ""}`, style: o, children: [
    n !== void 0 && /* @__PURE__ */ t("div", { className: "form-field__label", style: { width: r, minWidth: r }, children: /* @__PURE__ */ u("label", { children: [
      e && /* @__PURE__ */ t("span", { className: "form-field__required", children: "*" }),
      n
    ] }) }),
    /* @__PURE__ */ u("div", { className: "form-field__content", children: [
      /* @__PURE__ */ t("div", { className: "form-field__controls", children: c }),
      i && /* @__PURE__ */ t("div", { className: "form-field__help", children: i })
    ] })
  ] });
}
function ut({ children: n, labelWidth: r, className: e, style: i }) {
  return /* @__PURE__ */ t("div", { className: `form-layout${e ? ` ${e}` : ""}`, style: i, children: r ? st.Children.map(n, (c) => st.isValidElement(c) && c.type === de ? st.cloneElement(c, { labelWidth: r }) : c) : n });
}
function Ai({ visible: n, onClose: r, onSuccess: e, uploadEnabled: i = !1, extraFieldsSlot: c, onCreate: o }) {
  var _e, me, ae;
  const { t: s } = Ne(), m = Fn.map((V) => ({
    value: V.value,
    label: s(V.labelKey)
  })), [l, d] = b(vr()), [f, p] = b([]), [v, h] = b(!1), [N, E] = b(!1), [g, T] = b(!1), [C, O] = b(""), [D, I] = b(""), [w, X] = b(!1), [S, ee] = b(""), [x, W] = b(""), [q, $] = b(null), [R, L] = b(""), _ = Q(null), [k, H] = b(!1), y = (V, re) => {
    V === "success" ? Y.success(re) : Y.error(re);
  }, P = async (V, re) => {
    try {
      await zn(V), y("success", s(a.COPY_LABEL_COPIED, { label: re }));
    } catch (be) {
      const Te = be instanceof Error ? be : new Error(String(be));
      y("error", s(a.COPY_FAILED_WITH_ERROR, { error: Te.message || s(a.NETWORK_ERROR) }));
    }
  }, F = () => {
    p([...f, { key: "", value: "" }]);
  }, M = (V, re, be) => {
    const Te = [...f];
    Te[V][re] = be, p(Te);
  }, U = (V) => {
    p(f.filter((re, be) => be !== V));
  }, z = () => {
    var V;
    d(vr()), p([]), h(!1), T(!1), O(""), I(""), X(!1), ee(""), W(""), $(null), L(""), H(!1), (V = _.current) == null || V.reset();
  }, te = () => {
    z(), r();
  }, oe = async () => {
    if (!l.anchorId.trim()) {
      y("error", s(a.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const V = G(l.anchorId);
    if (V > Ze) {
      y("error", s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES_CURRENT, { max: Ze, current: V }));
      return;
    }
    const re = G(l.liveName);
    if (re > Ve) {
      y("error", s(a.TITLE_CANNOT_EXCEED_100_BYTES_CURRENT, { current: re }));
      return;
    }
    if (f.some(Pt)) {
      y("error", s(a.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    E(!0), O(""), ee(""), W("");
    let be = "", Te = l.anchorId;
    try {
      let fe = "";
      try {
        fe = await Yr({
          handle: _.current,
          hasPendingFile: k,
          fallbackUrl: l.coverUrl,
          label: s(a.COVER_IMAGE)
        });
      } catch (ve) {
        y("error", ve instanceof dr ? ve.message : s(a.COVER_PROCESSING_FAILED)), E(!1);
        return;
      }
      const Ae = Bn({
        formData: l,
        coverUrl: fe,
        customInfos: f,
        useObsStreaming: w
      });
      be = Ae.liveId, Te = Ae.anchorId, await o(Ae), $(null), L("");
      let we = !w;
      if (w) {
        const ve = await xa({
          liveId: be,
          anchorId: Te,
          onStatusChange: ee,
          messages: {
            getStreamInfoFailed: s(a.GET_STREAM_INFO_FAILED),
            importAccountFailed: s(a.IMPORT_ACCOUNT_FAILED),
            addRobotFailed: s(a.ADD_ROBOT_FAILED),
            pickSeatFailed: s(a.PICK_SEAT_FAILED),
            setupFailed: s(a.OBS_SETUP_FAILED)
          }
        });
        $(ve.streamInfo), L(ve.streamInfoError), W(ve.setupError), we = ve.configuredSuccessfully;
      }
      T(!0), y("success", s(w && we ? a.LIVE_CREATED_SUCCESSFULLY_OBS : a.LIVE_CREATED_SUCCESSFULLY));
    } catch (fe) {
      const Ae = fe instanceof Error ? fe : new Error(String(fe));
      y("error", s(a.REQUEST_FAILED) + `: ${Ae.message || s(a.NETWORK_ERROR)}`);
    } finally {
      E(!1);
    }
  }, Z = () => {
    z(), e();
  }, he = w ? S === "" || S === "creating" || S === "seating" ? {
    text: s(S === "creating" ? a.LOADING : S === "seating" ? a.LOADING : a.LOADING),
    error: !1
  } : S === "error" ? {
    text: s(a.OBS_CONFIG_FAILED_WITH_ERROR, { error: x }),
    error: !0
  } : q ? {
    text: s(a.OBS_READY_COPY_INFO),
    error: !1
  } : R ? {
    text: s(a.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: R }),
    error: !0
  } : {
    text: s(a.OBS_READY),
    error: !1
  } : q ? {
    text: s(a.OBS_READY_COPY_INFO),
    error: !1
  } : R ? {
    text: s(a.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: R }),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ t(
    Ee,
    {
      visible: n,
      header: s(g ? a.CREATE_SUCCESS : a.CREATE_LIVE),
      onClose: te,
      width: Se.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: g ? /* @__PURE__ */ t(
        B,
        {
          shape: "round",
          theme: "primary",
          onClick: Z,
          disabled: w && (S === "" || S === "creating" || S === "seating"),
          children: s(w && S !== "ready" && S !== "error" ? a.LOADING : a.COMPLETE)
        }
      ) : /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: te, children: s(a.CANCEL) }),
        /* @__PURE__ */ t(
          B,
          {
            shape: "round",
            theme: "primary",
            onClick: oe,
            loading: N,
            disabled: N || !l.anchorId.trim() || ((_e = _.current) == null ? void 0 : _e.isValidating) || ((me = _.current) == null ? void 0 : me.hasUrlError),
            children: s(N ? a.CREATING : a.CREATE)
          }
        )
      ] }),
      children: g ? (
        /* 创建成功提示 */
        /* @__PURE__ */ u("div", { className: "create-success-content", children: [
          /* @__PURE__ */ u("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ t("div", { className: "create-success-icon", children: S === "error" ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ t("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ t("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : w && (S === "" || S === "creating" || S === "seating") ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ t("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ t("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ t("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ t("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ t("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ t("h3", { children: s(a.LIVE_CREATED_SUCCESSFULLY) }),
            he.text && /* @__PURE__ */ t("p", { className: `create-success-description${he.error ? " is-error" : ""}`, children: he.text })
          ] }),
          q && /* @__PURE__ */ u("div", { className: "create-success-section", children: [
            /* @__PURE__ */ t("div", { className: "create-success-section-title", children: s(a.STREAM_INFO) }),
            /* @__PURE__ */ u("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ t("span", { children: s(a.SERVER_URL) }),
                  /* @__PURE__ */ t(B, { variant: "text", size: "small", icon: /* @__PURE__ */ t(qe, { size: "14" }), onClick: () => P(q.serverUrl, s(a.SERVER_URL)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ t("code", { className: "stream-info-value", children: q.serverUrl })
              ] }),
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ t("span", { children: s(a.STREAM_KEY) }),
                  /* @__PURE__ */ t(B, { variant: "text", size: "small", icon: /* @__PURE__ */ t(qe, { size: 14 }), onClick: () => P(q.streamKey, s(a.STREAM_KEY)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ t("code", { className: "stream-info-value", children: q.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ u(ut, { className: "create-live-form", labelWidth: lt(100), children: [
          /* @__PURE__ */ t(de, { label: s(a.LIVE_HOST), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: l.anchorId,
                onChange: (V) => d((re) => ({ ...re, anchorId: String(V) })),
                placeholder: s(a.ENTER_ANCHOR_ID),
                status: G(l.anchorId) > Ze ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(l.anchorId) > Ze ? " byte-overflow" : ""}`, children: [
                  G(l.anchorId),
                  "/",
                  Ze
                ] })
              }
            ),
            G(l.anchorId) > Ze && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES, { max: Ze }) })
          ] }) }),
          /* @__PURE__ */ t(de, { label: s(a.LIVE_TITLE), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: l.liveName,
                onChange: (V) => d((re) => ({ ...re, liveName: String(V) })),
                placeholder: s(a.ENTER_LIVE_TITLE),
                status: G(l.liveName) > Ve ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(l.liveName) > Ve ? " byte-overflow" : ""}`, children: [
                  G(l.liveName),
                  "/",
                  Ve
                ] })
              }
            ),
            G(l.liveName) > Ve && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: s(a.TITLE_CANNOT_EXCEED_100_BYTES) })
          ] }) }),
          /* @__PURE__ */ t(de, { label: s(a.COVER_IMAGE), children: /* @__PURE__ */ t(
            Vt,
            {
              ref: _,
              value: l.coverUrl,
              onChange: (V) => {
                d((re) => ({ ...re, coverUrl: V })), H(!1);
              },
              type: "cover",
              uploadEnabled: i,
              cropEnabled: !0,
              aspectRatio: Gn(l.seatTemplate),
              placeholder: s(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: i,
              onFileReady: (V) => H(!!V)
            }
          ) }),
          /* @__PURE__ */ t(de, { label: s(a.LAYOUT_TEMPLATE), requiredMark: !0, help: s(((ae = Vn(l.seatTemplate)) == null ? void 0 : ae.descKey) || ""), children: /* @__PURE__ */ t(
            lr,
            {
              options: m,
              value: l.seatTemplate,
              onChange: (V) => d((re) => ({ ...re, seatTemplate: V })),
              style: { width: "100%" }
            }
          ) }),
          Wn(l.seatTemplate) && /* @__PURE__ */ t(de, { label: s(a.MAX_SEATS), help: s(a.MAX_SEATS_HELP), children: /* @__PURE__ */ t(
            tr,
            {
              value: l.maxSeatCount,
              onChange: (V) => d((re) => ({ ...re, maxSeatCount: Number(V) || 1 })),
              min: 1,
              max: 16,
              placeholder: s(a.ENTER_MAX_SEAT_COUNT),
              theme: "normal",
              allowInputOverLimit: !0,
              inputProps: {
                tips: l.maxSeatCount < 1 || l.maxSeatCount > 16 ? s(a.SEAT_COUNT_RANGE_1_16) : "",
                status: l.maxSeatCount < 1 || l.maxSeatCount > 16 ? "error" : "default"
              },
              style: { width: "100%" }
            }
          ) }),
          /* @__PURE__ */ t(ke, { slot: c, props: { mode: "create", formData: { ...l }, customInfos: [...f] } }),
          /* @__PURE__ */ t(de, { label: s(a.STREAMING_METHOD), help: s(a.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ t(
            gn,
            {
              checked: w,
              onChange: (V) => X(V),
              children: s(a.USE_OBS_STREAMING)
            }
          ) }),
          /* @__PURE__ */ u("div", { className: "custom-info-section", children: [
            /* @__PURE__ */ u(
              "div",
              {
                className: "custom-info-toggle",
                onClick: () => h(!v),
                children: [
                  v ? /* @__PURE__ */ t(Gr, { size: "16" }) : /* @__PURE__ */ t(sr, { size: "16" }),
                  /* @__PURE__ */ t("span", { children: s(a.CUSTOM_INFORMATION) }),
                  f.length > 0 && /* @__PURE__ */ t("span", { className: "custom-info-count", children: f.length })
                ]
              }
            ),
            v && /* @__PURE__ */ u("div", { className: "custom-info-container", children: [
              f.map((V, re) => {
                const be = G(V.key), Te = G(V.value), fe = be > Ge.maxKeyBytes, Ae = Te > Ge.maxValueBytes, we = Pt(V);
                return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ t("div", { className: "custom-input-wrap", children: /* @__PURE__ */ t(
                    ge,
                    {
                      value: V.key,
                      onChange: (ve) => M(re, "key", String(ve)),
                      placeholder: s(a.ENTER_KEY),
                      status: fe || we ? "error" : "default",
                      tips: fe ? s(a.KEY_EXCEEDS_BYTES, { key: V.key, max: Ge.maxKeyBytes }) : we ? s(a.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ t("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ t(
                    ge,
                    {
                      value: V.value,
                      onChange: (ve) => M(re, "value", String(ve)),
                      placeholder: s(a.ENTER_VALUE),
                      status: Ae ? "error" : "default",
                      tips: Ae ? s(a.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ t(
                    B,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => U(re),
                      title: s(a.DELETE),
                      icon: /* @__PURE__ */ t(or, { size: "14" })
                    }
                  )
                ] }, re);
              }),
              f.length < Ge.maxCount && /* @__PURE__ */ t(B, { variant: "text", className: "add-custom-info-btn", onClick: F, icon: /* @__PURE__ */ t(cr, { size: "14" }), theme: "primary", children: s(a.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
function en(n) {
  const { action: r, onSuccess: e, onError: i, successMessage: c, errorMessage: o } = n, [s, m] = b(!1), l = Q(r);
  l.current = r;
  const d = A(async (...p) => {
    if (s) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    m(!0);
    try {
      const v = await l.current(...p);
      return c && Y.success(c), e == null || e(v), v;
    } catch (v) {
      const h = v instanceof Error ? v : new Error(String(v)), N = o ? `${o}: ${h.message}` : h.message;
      Y.error(N), i == null || i(h);
      return;
    } finally {
      m(!1);
    }
  }, [s, c, o, e, i]), f = A(() => {
    m(!1);
  }, []);
  return { loading: s, execute: d, reset: f };
}
function wi({ visible: n, live: r, onClose: e, onSuccess: i, uploadEnabled: c = !1, extraFieldsSlot: o, onUpdate: s, onFetchDetail: m }) {
  var y, P;
  const { t: l } = Ne(), [d, f] = b(Er()), [p, v] = b([]), [h, N] = b(!1), E = Q([]), [g, T] = b(Nr), [C, O] = b(!1), [D, I] = b(""), [w, X] = b(""), { loading: S, execute: ee } = en({
    action: async (F) => {
      const M = (r == null ? void 0 : r.id) || (r == null ? void 0 : r.liveId) || "";
      return s(M, F);
    },
    successMessage: l(a.LIVE_INFO_UPDATED),
    errorMessage: l("Update failed"),
    onSuccess: () => {
      setTimeout(() => {
        i({
          liveName: d.liveName.trim(),
          coverUrl: d.coverUrl
        }), k();
      }, 500);
    }
  }), x = Q(null), [W, q] = b(!1);
  J(() => {
    r != null && r.coverUrl ? Hn(r.coverUrl).then(T) : T(Nr);
  }, [r == null ? void 0 : r.coverUrl]), J(() => {
    if (r && n) {
      f({
        liveName: r.liveName || "",
        coverUrl: r.coverUrl || ""
      });
      const F = r.id || r.liveId;
      O(!0), m(F).then((M) => {
        const U = M == null ? void 0 : M.customInfo;
        if (U && typeof U == "object") {
          const z = Object.entries(U).map(([te, oe]) => ({
            key: te,
            value: String(oe)
          }));
          v(z), N(z.length > 0), E.current = z.map((te) => te.key);
        } else
          v([]), N(!1), E.current = [];
      }).catch(() => {
        if (r.customInfo && typeof r.customInfo == "object") {
          const M = Object.entries(r.customInfo).map(([U, z]) => ({
            key: U,
            value: String(z)
          }));
          v(M), N(M.length > 0), E.current = M.map((U) => U.key);
        } else
          v([]), N(!1), E.current = [];
      }).finally(() => O(!1));
    }
  }, [r == null ? void 0 : r.id, n]);
  const $ = () => {
    if (p.length >= Ge.maxCount) {
      _("error", l("Custom info max count", { max: Ge.maxCount }));
      return;
    }
    v([...p, { key: "", value: "" }]);
  }, R = (F, M, U) => {
    const z = [...p];
    z[F][M] = U, v(z);
  }, L = (F) => {
    v(p.filter((M, U) => U !== F));
  }, _ = (F, M) => {
    Y.error(M);
  }, k = () => {
    var F;
    I(""), X(""), v([]), N(!1), E.current = [], q(!1), (F = x.current) == null || F.reset(), f(Er()), e();
  }, H = async () => {
    if (!r) return;
    if (!d.liveName.trim()) {
      _("error", l(a.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const F = G(d.liveName);
    if (F > Ve) {
      _("error", l("Title cannot exceed 100 bytes current", { current: F }));
      return;
    }
    if (p.some(Pt)) {
      _("error", l("Custom info key required"));
      return;
    }
    try {
      let M = "";
      try {
        M = await Yr({
          handle: x.current,
          hasPendingFile: W,
          fallbackUrl: d.coverUrl,
          label: l(a.COVER_IMAGE)
        });
      } catch (oe) {
        _("error", oe instanceof dr ? oe.message : l("Cover processing failed"));
        return;
      }
      const U = Kn(p);
      if (U) {
        U.type === "key-too-long" ? _("error", l("Key {key} exceeds {max} bytes", { key: U.key, max: U.max })) : U.type === "value-too-long" ? _("error", l("Key {key} value exceeds 2KB", { key: U.key })) : U.type === "max-count" ? _("error", l("Custom info max count", { max: U.max })) : _("error", l("Total value size exceeds 16KB"));
        return;
      }
      const z = Yn(p), te = $n(E.current, z);
      await ee({
        liveId: r.id || r.liveId,
        liveName: d.liveName.trim(),
        coverUrl: M || void 0,
        customInfo: Object.keys(z).length > 0 ? z : void 0,
        deleteKeys: te.length > 0 ? te : void 0
      });
    } catch (M) {
      console.error("[EditLiveModal] Update failed:", M);
    }
  };
  return !n || !r ? null : /* @__PURE__ */ t(
    Ee,
    {
      destroyOnClose: !0,
      visible: n,
      header: l(a.EDIT_LIVE),
      onClose: k,
      width: Se.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: k, children: l(a.CANCEL) }),
        /* @__PURE__ */ t(
          B,
          {
            shape: "round",
            theme: "primary",
            onClick: H,
            loading: S,
            disabled: S || !d.liveName.trim() || ((y = x.current) == null ? void 0 : y.isValidating) || ((P = x.current) == null ? void 0 : P.hasUrlError),
            children: l(S ? "Saving" : "Save")
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { className: "edit-live-form", labelWidth: lt(100), children: [
        /* @__PURE__ */ t(de, { label: l(a.LIVE_ID), children: /* @__PURE__ */ t(
          ge,
          {
            value: r.liveId || r.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ t(de, { label: l(a.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ t(
            ge,
            {
              value: d.liveName,
              onChange: (F) => f((M) => ({ ...M, liveName: String(F) })),
              placeholder: l(a.ENTER_LIVE_TITLE),
              status: G(d.liveName) > Ve ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(d.liveName) > Ve ? " byte-overflow" : ""}`, children: [
                G(d.liveName),
                "/",
                Ve
              ] })
            }
          ),
          G(d.liveName) > Ve && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: l(a.TITLE_CANNOT_EXCEED_100_BYTES) })
        ] }) }),
        /* @__PURE__ */ t(de, { label: l(a.COVER_IMAGE), children: /* @__PURE__ */ t(
          Vt,
          {
            ref: x,
            value: d.coverUrl,
            onChange: (F) => {
              f((M) => ({ ...M, coverUrl: F })), q(!1);
            },
            type: "cover",
            uploadEnabled: c,
            cropEnabled: !0,
            aspectRatio: g,
            placeholder: l(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: c,
            onFileReady: (F) => q(!!F)
          }
        ) }),
        /* @__PURE__ */ t(ke, { slot: o, props: { mode: "edit", live: r, formData: { ...d }, customInfos: [...p] } }),
        /* @__PURE__ */ u("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ u(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => N(!h),
              children: [
                h ? /* @__PURE__ */ t(Gr, { size: "16" }) : /* @__PURE__ */ t(sr, { size: "16" }),
                /* @__PURE__ */ t("span", { children: l(a.CUSTOM_INFORMATION) }),
                p.length > 0 && /* @__PURE__ */ t("span", { className: "custom-info-count", children: p.length })
              ]
            }
          ),
          h && /* @__PURE__ */ u("div", { className: "custom-info-container", children: [
            p.map((F, M) => {
              const U = G(F.key), z = G(F.value), te = U > Ge.maxKeyBytes, oe = z > Ge.maxValueBytes, Z = Pt(F);
              return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ t("div", { className: "custom-input-wrap", children: /* @__PURE__ */ t(
                  ge,
                  {
                    value: F.key,
                    onChange: (he) => R(M, "key", String(he)),
                    placeholder: l("Enter Key"),
                    status: te || Z ? "error" : "default",
                    tips: te ? l("Key exceeds byte limit", { max: Ge.maxKeyBytes }) : Z ? l("Custom info key required") : ""
                  }
                ) }),
                /* @__PURE__ */ t("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ t(
                  ge,
                  {
                    value: F.value,
                    onChange: (he) => R(M, "value", String(he)),
                    placeholder: l("Enter Value"),
                    status: oe ? "error" : "default",
                    tips: oe ? l("Value exceeds 2KB limit") : ""
                  }
                ) }),
                /* @__PURE__ */ t(
                  B,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => L(M),
                    title: l(a.DELETE),
                    icon: /* @__PURE__ */ t(or, { size: 14 })
                  }
                )
              ] }, M);
            }),
            p.length < Ge.maxCount && /* @__PURE__ */ t(B, { variant: "text", className: "add-custom-info-btn", onClick: $, icon: /* @__PURE__ */ t(cr, { size: 14 }), theme: "primary", children: l("Add") })
          ] })
        ] })
      ] })
    },
    `edit-live-${r == null ? void 0 : r.id}`
  );
}
function Ri(n) {
  const r = Q(n);
  r.current = n, J(() => {
    const e = () => r.current();
    e();
    const i = new MutationObserver((c) => {
      for (const o of c)
        if (o.type === "attributes" && o.attributeName === "lang") {
          e();
          break;
        }
    });
    return i.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), () => i.disconnect();
  }, []);
}
function Mi() {
  if (typeof document > "u") return 0;
  const n = document.createElement("div");
  n.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(n);
  const r = n.offsetWidth - n.clientWidth;
  return document.body.removeChild(n), r;
}
function Oi(n) {
  return typeof n == "number" ? `${n}px` : n;
}
function Di(n, r) {
  return n[r];
}
function zt({
  columns: n,
  data: r,
  rowKey: e,
  className: i = "",
  tableClassName: c = "",
  headerClassName: o = "",
  bodyClassName: s = "",
  rowClassName: m = "",
  loading: l = !1,
  loadingNode: d = null,
  emptyNode: f = null,
  bodyStyle: p,
  fitContent: v = !1,
  fitContentMaxRows: h = pa
}) {
  const N = Q(null), E = Q(null), g = Q(null), T = Q(null), C = Q(null), [O, D] = b({}), I = Q({}), [w, X] = b(0);
  Ri(() => X((L) => L + 1));
  const S = A((L) => L.fitContent || v && L.width === void 0, [v]), ee = Le(() => {
    const L = {};
    for (const _ of n) {
      let k;
      if (S(_)) {
        const H = O[_.key];
        k = H !== void 0 ? `${H}px` : typeof _.minWidth == "number" ? `${_.minWidth}px` : void 0;
      }
      k === void 0 && (k = Oi(_.width)), L[_.key] = { width: k };
    }
    return L;
  }, [n, O, S]), x = Le(() => {
    const L = {};
    for (const _ of n) {
      const k = { textAlign: _.align };
      _.ellipsis ? (k.whiteSpace = "nowrap", k.overflow = "hidden", k.textOverflow = "ellipsis") : S(_) && !_.flexible && (k.whiteSpace = "nowrap"), L[_.key] = k;
    }
    return L;
  }, [n, S]), W = Le(() => fa(n, O, S) ?? {}, [n, O, S]);
  fr(() => {
    const L = n.map((F, M) => ({ column: F, index: M })).filter(({ column: F }) => S(F));
    if (L.length === 0 || typeof document > "u") {
      I.current = {}, D((F) => Object.keys(F).length === 0 ? F : {});
      return;
    }
    let _ = 0;
    const k = () => {
      var he, _e;
      const F = ((he = g.current) == null ? void 0 : he.querySelectorAll("thead th")) || [], M = Array.from(((_e = C.current) == null ? void 0 : _e.querySelectorAll("tbody tr")) || []).slice(0, h), U = [], z = [];
      L.forEach(({ column: me, index: ae }) => {
        const V = F[ae];
        V && (U.push(V), z.push(me.key)), M.forEach((re) => {
          const be = re.children[ae];
          be && (U.push(be), z.push(me.key));
        });
      });
      const te = Ea(U), oe = {};
      te.forEach((me, ae) => {
        const V = z[ae];
        (oe[V] === void 0 || me > oe[V]) && (oe[V] = me);
      });
      const Z = {};
      for (const { column: me } of L)
        oe[me.key] !== void 0 && (Z[me.key] = Na(oe[me.key], me.minWidth, me.maxWidth));
      I.current = Z;
    }, H = () => {
      var z;
      const F = I.current;
      if (Object.keys(F).length === 0) {
        D((te) => Object.keys(te).length === 0 ? te : {});
        return;
      }
      const M = ((z = T.current) == null ? void 0 : z.clientWidth) ?? 0, U = ga(
        n,
        F,
        M,
        S
      );
      D((te) => va(te, U) ? te : U);
    }, y = () => {
      k(), H();
    };
    _ = window.requestAnimationFrame(y);
    const P = new ResizeObserver(() => {
      window.cancelAnimationFrame(_), _ = window.requestAnimationFrame(H);
    });
    return N.current && P.observe(N.current), () => {
      window.cancelAnimationFrame(_), P.disconnect();
    };
  }, [n, r, l, v, h, w, S]), fr(() => {
    var H;
    const L = N.current, _ = (H = C.current) == null ? void 0 : H.parentElement;
    if (!L || !_) return;
    const k = _.scrollHeight > _.clientHeight ? Mi() : 0;
    L.style.setProperty("--scrollbar-width", `${k}px`);
  }, [r]);
  const q = /* @__PURE__ */ t("colgroup", { children: n.map((L) => /* @__PURE__ */ t("col", { style: ee[L.key] }, L.key)) }), $ = (L, _) => typeof e == "function" ? e(L, _) : String(L[e]), R = (L, _) => typeof m == "function" ? m(L, _) : m;
  return J(() => {
    const L = E.current, _ = T.current;
    if (!L || !_) return;
    const k = () => {
      L && _ && (L.scrollLeft = _.scrollLeft);
    };
    return _.addEventListener("scroll", k), () => _.removeEventListener("scroll", k);
  }, []), /* @__PURE__ */ u("div", { ref: N, className: `fixed-header-table ${i}`.trim(), children: [
    /* @__PURE__ */ t("div", { ref: E, className: `fixed-header-table__header ${o}`.trim(), children: /* @__PURE__ */ u(
      "table",
      {
        ref: g,
        className: `fixed-header-table__table ${c}`.trim(),
        style: W,
        children: [
          q,
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ t("tr", { children: n.map((L) => /* @__PURE__ */ t("th", { className: L.className, style: x[L.key], children: L.headerRender ? L.headerRender() : L.title }, L.key)) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ t("div", { ref: T, className: `fixed-header-table__body ${s}`.trim(), style: p, children: l ? /* @__PURE__ */ t("div", { className: "fixed-header-table__loading", children: d }) : r.length === 0 ? /* @__PURE__ */ t("div", { className: "fixed-header-table__empty", children: f }) : /* @__PURE__ */ u(
      "table",
      {
        ref: C,
        className: `fixed-header-table__table ${c}`.trim(),
        style: W,
        children: [
          q,
          /* @__PURE__ */ t("tbody", { children: r.map((L, _) => /* @__PURE__ */ t("tr", { className: R(L, _), children: n.map((k) => /* @__PURE__ */ t("td", { className: k.className, style: x[k.key], children: k.render ? k.render(L, _) : Di(L, k.key) }, k.key)) }, $(L, _))) })
        ]
      }
    ) })
  ] });
}
function je({ actions: n, className: r = "" }) {
  return /* @__PURE__ */ t("div", { className: `list-action-buttons ${r}`.trim(), children: n.map((e) => /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      className: `list-action-button${e.danger ? " list-action-button--danger" : ""}`,
      title: e.title,
      disabled: e.disabled,
      onClick: e.onClick,
      children: [
        e.icon && /* @__PURE__ */ t("span", { className: "list-action-button__icon", children: e.icon }),
        /* @__PURE__ */ t("span", { className: "list-action-button__text", children: e.label }),
        e.suffixCaret && /* @__PURE__ */ t("span", { className: "list-action-button__caret", "aria-hidden": "true" })
      ]
    },
    e.key
  )) });
}
function Ao() {
  var X, S, ee, x, W, q, $, R;
  const n = _t(), { t: r } = Ne(), {
    createLive: e,
    updateLive: i,
    fetchLiveDetail: c,
    endLive: o
  } = ht(), s = (X = yt().components) == null ? void 0 : X.roomList, m = Q(null);
  m.current || (m.current = new qn({
    endLive: o,
    onEnterLive: (L) => n(`/live-control/${L}`),
    t: r,
    toast: Y
  }));
  const l = m.current, d = nr(l.subscribe, l.getState, l.getState);
  J(() => (l.init(), () => l.dispose()), []);
  const f = xi(), p = Le(() => Xn({ hasExtraColumn: !!(s != null && s.tableExtraColumns) }).map((_) => {
    switch (_.key) {
      case "liveId":
        return {
          ..._,
          title: r(a.LIVE_ID),
          render: (k) => /* @__PURE__ */ u("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ t("span", { className: "live-list-id-text", children: k.liveId }),
            /* @__PURE__ */ t(
              qe,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => l.copyText(k.liveId, r(a.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ..._,
          title: r(a.LIVE_TITLE),
          render: (k) => /* @__PURE__ */ t("span", { className: "live-list-text", children: k.liveName || "-" })
        };
      case "coverUrl":
        return {
          ..._,
          title: r(a.COVER_IMAGE),
          render: (k) => /* @__PURE__ */ t("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ t("img", { src: k.coverUrl || hr, alt: k.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ..._,
          title: r(a.ANCHOR_ID),
          render: (k) => {
            var H;
            return /* @__PURE__ */ t("span", { className: "live-list-text", children: ((H = k.anchor) == null ? void 0 : H.userId) || "-" });
          }
        };
      case "createdAt":
        return {
          ..._,
          title: r(a.CREATE_TIME),
          render: (k) => /* @__PURE__ */ t("span", { className: "live-list-text", children: Zn(k.createdAt) })
        };
      case "customer-extra":
        return {
          ..._,
          title: "",
          render: (k) => /* @__PURE__ */ t(ke, { slot: s == null ? void 0 : s.tableExtraColumns, props: { live: k } })
        };
      case "actions":
        return {
          ..._,
          title: r(a.ACTIONS),
          render: (k) => {
            const H = jn({
              live: k,
              t: r,
              icons: {
                enter: /* @__PURE__ */ t(dn, {}),
                detail: /* @__PURE__ */ t($e, {}),
                edit: /* @__PURE__ */ t(er, {}),
                delete: /* @__PURE__ */ t(ln, {})
              },
              onEnter: (y) => l.enterLive(y),
              onDetail: (y) => void l.showDetail(y),
              onEdit: (y) => l.openEditModal(y),
              onDelete: (y) => l.requestDelete(y)
            });
            return /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ t(je, { actions: H }),
              /* @__PURE__ */ t(ke, { slot: s == null ? void 0 : s.rowActions, props: { live: k } })
            ] });
          }
        };
      default:
        return { ..._, title: "" };
    }
  }), [r, s, l]), { lives: v, loading: h, refreshing: N, currentPage: E, hasMoreData: g, searchInput: T, obsModal: C, confirmDialog: O, isCreateModalVisible: D, isEditModalVisible: I, editingLive: w } = d;
  return /* @__PURE__ */ u("div", { className: "live-list-page", children: [
    /* @__PURE__ */ u("div", { className: "live-list-header", children: [
      /* @__PURE__ */ t("h1", { className: "live-list-title", children: r(a.LIVE_MANAGEMENT) }),
      /* @__PURE__ */ t(ke, { slot: s == null ? void 0 : s.beforeToolbar, props: { lives: v, loading: h } }),
      /* @__PURE__ */ u("div", { className: "header-actions", children: [
        /* @__PURE__ */ t(
          ge,
          {
            value: T,
            onChange: (L) => l.setSearchInput(String(L)),
            onEnter: () => {
              if (Jn(T, Yt)) {
                Y.error(r(a.INPUT_TOO_LONG));
                return;
              }
              l.search();
            },
            clearable: !0,
            onClear: () => void l.clearSearch(),
            placeholder: r(a.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ t(ar, { size: 16 }),
            style: { width: 220 },
            status: G(T) > Yt ? "error" : "default",
            tips: G(T) > Yt ? r(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ t(
          B,
          {
            shape: "round",
            variant: "outline",
            disabled: N || h,
            onClick: () => void l.refresh(),
            icon: /* @__PURE__ */ t(ir, { className: N ? "spinning" : "" }),
            children: r(a.REFRESH)
          }
        ),
        /* @__PURE__ */ t(
          B,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ t(cr, {}),
            onClick: () => l.openCreateModal(),
            children: r(a.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ t(ke, { slot: s == null ? void 0 : s.afterToolbar, props: { lives: v, loading: h } })
    ] }),
    /* @__PURE__ */ t(zr, { className: "live-list-card", children: /* @__PURE__ */ t(
      zt,
      {
        columns: p,
        data: v,
        rowKey: "liveId",
        loading: h,
        tableClassName: "live-list-table",
        bodyClassName: "live-list-content",
        rowClassName: "live-list-row",
        loadingNode: /* @__PURE__ */ u("div", { className: "live-list-loading-container", children: [
          /* @__PURE__ */ t("div", { className: "live-list-loading-spinner" }),
          /* @__PURE__ */ t("span", { className: "live-list-loading-text", children: r(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ t("div", { className: "live-list-empty-container", children: /* @__PURE__ */ t("span", { className: "live-list-empty-text", children: r(a.NO_LIVE_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ u("div", { className: "live-list-pagination", children: [
      /* @__PURE__ */ t(
        B,
        {
          variant: "outline",
          size: "small",
          disabled: E <= 1,
          onClick: () => l.goToPage(1),
          children: r(a.FIRST_PAGE)
        }
      ),
      /* @__PURE__ */ t(
        B,
        {
          variant: "outline",
          size: "small",
          disabled: E <= 1,
          onClick: () => l.goToPage(E - 1),
          children: r(a.PREVIOUS_PAGE)
        }
      ),
      /* @__PURE__ */ t("span", { className: "page-info", children: r(a.PAGE, { page: E }) }),
      /* @__PURE__ */ t(
        B,
        {
          variant: "outline",
          size: "small",
          disabled: !g,
          onClick: () => l.goToPage(E + 1),
          children: r(a.NEXT_PAGE)
        }
      )
    ] }),
    /* @__PURE__ */ t(
      Ai,
      {
        visible: D,
        onClose: () => l.closeCreateModal(),
        onSuccess: () => l.onLiveCreated(),
        onCreate: e,
        uploadEnabled: f
      }
    ),
    w && /* @__PURE__ */ t(
      wi,
      {
        visible: I,
        live: {
          id: w.liveId,
          liveName: w.liveName,
          coverUrl: w.coverUrl,
          customInfo: w.customInfo ? typeof w.customInfo == "string" ? (() => {
            try {
              return JSON.parse(w.customInfo);
            } catch {
              return;
            }
          })() : w.customInfo : void 0
        },
        onClose: () => l.closeEditModal(),
        onSuccess: (L) => l.onLiveEdited(L),
        onUpdate: (L, _) => i({ ..._, liveId: L }),
        onFetchDetail: c,
        uploadEnabled: f,
        extraFieldsSlot: s == null ? void 0 : s.roomFormExtraFields
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: O.visible,
        header: O.title,
        onClose: () => l.cancelDelete(),
        width: Se.CONFIRM,
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => l.cancelDelete(), children: r(a.CANCEL) }),
          /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: () => void l.confirmDelete(), children: r(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ t("p", { children: O.content })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: C.visible && !!C.live,
        header: r(a.LIVE_INFORMATION),
        onClose: () => l.closeDetail(),
        width: Se.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => l.closeDetail(), children: r(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "live-info-form", children: [
          /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ t("div", { className: "live-info-section-title", children: r(a.BASIC_INFORMATION) }),
            /* @__PURE__ */ u("div", { className: "live-info-card", children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ t("span", { className: "live-info-label", children: r(a.ANCHOR_ID) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ t("span", { className: "live-info-value", children: ((ee = (S = C.live) == null ? void 0 : S.anchor) == null ? void 0 : ee.userId) || "-" }),
                  ((W = (x = C.live) == null ? void 0 : x.anchor) == null ? void 0 : W.userId) && /* @__PURE__ */ t(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => C.live && void l.copyText(C.live.anchor.userId, r(a.LIVE_HOST)),
                      children: /* @__PURE__ */ t(qe, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ t("span", { className: "live-info-label", children: r(a.LIVE_ID) }),
                /* @__PURE__ */ t("div", { className: "live-info-value-area", children: /* @__PURE__ */ t("span", { className: "live-info-value", children: ((q = C.live) == null ? void 0 : q.liveId) || "-" }) })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ t("span", { className: "live-info-label", children: r(a.LIVE_TITLE) }),
                /* @__PURE__ */ t("div", { className: "live-info-value-area", children: /* @__PURE__ */ t("span", { className: "live-info-value", children: (($ = C.live) == null ? void 0 : $.liveName) || "-" }) })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ t("span", { className: "live-info-label", children: r(a.LIVE_COVER) }),
                /* @__PURE__ */ t("div", { className: "live-info-value-area", children: /* @__PURE__ */ t("span", { className: "live-info-value live-info-value-url", children: ((R = C.live) == null ? void 0 : R.coverUrl) || "-" }) })
              ] })
            ] })
          ] }),
          (C.streamInfo || C.actionLoading === "stream") && /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ t("div", { className: "live-info-section-title", children: r(a.STREAM_INFO) }),
            /* @__PURE__ */ t("div", { className: "live-info-card", children: C.streamInfo ? /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ t("span", { className: "live-info-label", children: r(a.SERVER_URL) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ t("span", { className: "live-info-value live-info-value-url", children: C.streamInfo.serverUrl }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => C.streamInfo && void l.copyText(C.streamInfo.serverUrl, r(a.SERVER_URL)),
                      children: /* @__PURE__ */ t(qe, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ t("span", { className: "live-info-label", children: r(a.STREAM_KEY) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ t("span", { className: "live-info-value live-info-value-url", children: C.streamInfo.streamKey }),
                  /* @__PURE__ */ t(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => C.streamInfo && void l.copyText(C.streamInfo.streamKey, r(a.STREAM_KEY)),
                      children: /* @__PURE__ */ t(qe, { size: 14 })
                    }
                  )
                ] })
              ] })
            ] }) : /* @__PURE__ */ t("div", { className: "live-info-row", children: /* @__PURE__ */ t("span", { className: "live-info-label", style: { width: "auto" }, children: r(a.GETTING_STREAM_INFO) }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function xi() {
  const [n, r] = b(!1);
  return J(() => {
    let e = !1;
    return Xr().then((i) => {
      e || r(i);
    }), () => {
      e = !0;
    };
  }, []), n;
}
function Be(n) {
  const { confirm: r, onSuccess: e, ...i } = n, [c, o] = b(null), s = A((h) => {
    o(null), e == null || e(h);
  }, [e]), { loading: m, execute: l, reset: d } = en({
    ...i,
    onSuccess: s
  }), f = A(() => {
    o({
      visible: !0,
      title: r.title,
      content: r.content,
      confirmText: r.confirmText,
      danger: r.danger
    });
  }, [r]), p = A(() => {
    o(null);
  }, []), v = A(async () => {
    try {
      return await l();
    } finally {
      o(null);
    }
  }, [l]);
  return {
    loading: m,
    confirmDialog: c,
    requestConfirm: f,
    cancelConfirm: p,
    executeWithConfirm: v,
    reset: d
  };
}
function Ui({
  liveId: n,
  onLiveEnded: r
}) {
  const { currentLive: e, setCurrentLive: i } = ht(), { joinLive: c, leaveLive: o, subscribeEvent: s, unsubscribeEvent: m } = Va(), { login: l, loginUserInfo: d } = jr(), [f, p] = b(!1), v = Q(""), h = Q(!1), N = Q(null), E = Q(r);
  J(() => {
    E.current = r;
  }, [r]);
  const g = (d == null ? void 0 : d.userId) || "", T = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  J(() => {
    if (T) {
      console.log("[useLiveControl] Mock mode, skipping TUILogin"), p(!0);
      return;
    }
    if (f) return;
    (async () => {
      var I;
      try {
        const w = await mr();
        if (!w || w.sdkAppId === 0) {
          console.error("[useLiveControl] No valid credentials");
          return;
        }
        await l({
          SDKAppID: w.sdkAppId,
          userID: w.userId,
          userSig: w.userSig
        }), console.log("[useLiveControl] TUILogin success"), p(!0);
      } catch (w) {
        (w == null ? void 0 : w.code) === 2025 || (I = w == null ? void 0 : w.message) != null && I.includes("重复登录") ? (console.log("[useLiveControl] Already logged in"), p(!0)) : console.error("[useLiveControl] TUILogin failed:", w);
      }
    })();
  }, [T, f, l]), J(() => {
    if (n)
      return console.log("[useLiveControl] Setting current live:", n), i(n), () => {
        console.log("[useLiveControl] Clearing current live"), i(null);
      };
  }, [n, i]);
  const C = A(async () => {
    if (!(!n || !e || !f)) {
      if (v.current === n) {
        console.log("[useLiveControl] Already joined live:", n);
        return;
      }
      try {
        if (console.log("[useLiveControl] Joining live:", n), await c({ liveId: n }), v.current = n, !h.current && s) {
          const D = () => {
            var I;
            console.log("[useLiveControl] Live ended event received"), (I = E.current) == null || I.call(E);
          };
          N.current = D, s(Ir.ON_LIVE_ENDED, D), h.current = !0;
        }
        console.log("[useLiveControl] Successfully joined live:", n);
      } catch (D) {
        console.error("[useLiveControl] Failed to join live:", D);
      }
    }
  }, [n, e, f, c, s]);
  J(() => {
    C();
  }, [C]), J(() => {
    v.current = "";
  }, [n]), J(() => () => {
    console.log("[useLiveControl] Component unmounting, cleaning up"), h.current && m && N.current && (m(Ir.ON_LIVE_ENDED, N.current), h.current = !1), v.current && o().catch((D) => {
      console.error("[useLiveControl] Failed to leave live on unmount:", D);
    });
  }, [o, m]);
  const O = A((D) => {
    console.log("[useLiveControl] Manually leaving live"), o().then(() => {
      v.current = "", D == null || D();
    }).catch((I) => {
      console.error("[useLiveControl] Failed to leave live:", I);
    });
  }, [o]);
  return {
    currentLive: e,
    tuiLoginReady: f,
    currentUserId: g,
    handleLeaveLive: O
  };
}
function ki({
  liveControlSlots: n,
  liveInfo: r,
  currentLive: e,
  liveAnchorAvatar: i,
  liveAnchorName: c,
  isVoiceLive: o,
  isMockMode: s,
  liveEndedOverlayVisible: m,
  onLeaveLive: l,
  t: d
}) {
  return /* @__PURE__ */ u("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ t(ke, { slot: n == null ? void 0 : n.beforeLiveInfo, props: { liveInfo: r } }),
    /* @__PURE__ */ u("div", { className: "live-header-external", children: [
      /* @__PURE__ */ t(
        Gt,
        {
          className: "anchor-avatar",
          src: i,
          name: c,
          title: c
        }
      ),
      /* @__PURE__ */ t("span", { className: "live-title-text", children: m ? d("Live Ended") : (e == null ? void 0 : e.liveName) || (r == null ? void 0 : r.liveName) || d(a.LOADING) })
    ] }),
    /* @__PURE__ */ u("div", { className: "video-stage", children: [
      r != null && r.coverUrl ? /* @__PURE__ */ t(
        "div",
        {
          className: "video-blur-bg",
          style: {
            backgroundImage: `url(${r.coverUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }
        }
      ) : /* @__PURE__ */ t("div", { className: "video-blur-bg-placeholder" }),
      /* @__PURE__ */ u(
        "div",
        {
          className: `player-container${o ? " player-container-voice" : ""}`,
          style: { position: "relative" },
          children: [
            s ? r != null && r.coverUrl ? /* @__PURE__ */ t("div", { className: "mock-cover-preview", children: /* @__PURE__ */ t("img", { src: r.coverUrl, alt: "cover", className: "mock-cover-img" }) }) : null : /* @__PURE__ */ t(Wa, {}),
            m && /* @__PURE__ */ t("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ u("div", { className: "live-state-overlay-content", children: [
              /* @__PURE__ */ t("div", { className: "live-state-overlay-title", children: d("Live Ended") }),
              /* @__PURE__ */ t(
                B,
                {
                  shape: "round",
                  variant: "outline",
                  className: "live-state-overlay-btn",
                  onClick: l,
                  children: d("Return to Live List")
                }
              )
            ] }) })
          ]
        }
      )
    ] })
  ] });
}
const Pi = 12 * 1024, Fi = (n) => new TextEncoder().encode(n).length, ct = { current: {} }, Gi = st.memo(
  ({ message: n, style: r }) => {
    var l, d;
    const e = n.sender.userId, i = e === ct.current.anchorUserId, c = n.sender.nameCard || n.sender.userName || e, o = n.messageType === 0 ? n.textContent : n.data || "", s = Qn(o);
    return /* @__PURE__ */ u(
      "div",
      {
        className: `message-item${i ? " host" : ""}`,
        style: r,
        onClick: (f) => {
          var p, v;
          (v = (p = ct.current).onMessageClick) == null || v.call(p, f, n);
        },
        children: [
          i && /* @__PURE__ */ t("span", { className: "message-badge", children: ((d = (l = ct.current).t) == null ? void 0 : d.call(l, a.HOST)) || a.HOST }),
          /* @__PURE__ */ u("span", { className: "message-username", children: [
            c,
            ": "
          ] }),
          /* @__PURE__ */ t("span", { className: "message-content", children: s.length > 0 ? s.map((f, p) => f.type === "text" ? /* @__PURE__ */ t("span", { className: "message-text", children: f.text }, `t${p}`) : /* @__PURE__ */ t(
            "img",
            {
              src: f.src,
              alt: f.key,
              className: "message-emoji",
              loading: "lazy",
              draggable: !1
            },
            `e${p}-${f.key}`
          )) : /* @__PURE__ */ t("span", { className: "message-text", children: o }) })
        ]
      }
    );
  },
  (n, r) => n.message.liveId === r.message.liveId && n.message.sequence === r.message.sequence && n.style === r.style
), Vi = ({ liveId: n, anchorUserId: r, onMuteUser: e, onBanUser: i, mutedList: c = [], bannedList: o = [] }) => {
  const { t: s } = Ne(), { loginUserInfo: m } = jr(), { audienceList: l, disableSendMessage: d } = za(), [f, p] = b(!1), [v, h] = b({ top: 0, left: 0 }), [N, E] = b(null), [g, T] = b(""), [C, O] = b(!1), D = Q(null), I = Q(null), w = r;
  ct.current.t = s;
  const X = (R) => l == null ? void 0 : l.find((L) => L.userId === R), S = (R) => {
    const L = X(R);
    if (L)
      return L.isMessageDisabled === !0;
    const _ = c.find((k) => k.userId === R);
    return _ ? _.endTime > Date.now() / 1e3 : !1;
  }, ee = (R) => {
    const L = o.find((_) => _.userId === R);
    return L ? L.endTime > Date.now() / 1e3 : !1;
  };
  J(() => {
    if (!f) return;
    const R = (L) => {
      setTimeout(() => {
        I.current && I.current.contains(L.target) || (p(!1), E(null));
      }, 100);
    };
    return document.addEventListener("mousedown", R), () => {
      document.removeEventListener("mousedown", R);
    };
  }, [f]);
  const x = A((R, L) => {
    if (R.stopPropagation(), console.log("[MessageList] handleMessageClick called", {
      messageSender: L.sender.userId,
      loginUserId: m == null ? void 0 : m.userId,
      anchorUserId: w
    }), L.sender.userId === (m == null ? void 0 : m.userId)) {
      console.log("[MessageList] Own message, no menu shown");
      return;
    }
    if (L.sender.userId === w) {
      console.log("[MessageList] Anchor message, no menu shown");
      return;
    }
    if (w && L.sender.userId === xt(w))
      return;
    const _ = R.target.closest(".message-item");
    if (!_) {
      console.log("[MessageList] message-item element not found");
      return;
    }
    const k = _.getBoundingClientRect(), H = k.bottom + 4, y = Math.min(k.left, window.innerWidth - 160);
    console.log("[MessageList] Showing dropdown menu", { top: H, left: y }), h({ top: H, left: Math.max(0, y) }), E(L), p(!0);
  }, [m, w]);
  J(() => {
    ct.current.anchorUserId = w, ct.current.onMessageClick = x;
  });
  const W = A(async (R) => {
    if (R == null || R.preventDefault(), C) return;
    const L = g.trim();
    if (!L) {
      Y.warning(s(a.MESSAGE_CONTENT_REQUIRED));
      return;
    }
    if (!n) {
      Y.error(s(a.LIVE_NOT_FOUND));
      return;
    }
    if (Fi(L) > Pi) {
      Y.error(s(a.MESSAGE_CONTENT_TOO_LONG, { max: "12KB" }));
      return;
    }
    O(!0);
    try {
      const _ = await Ua(n, L);
      if ((_ == null ? void 0 : _.ErrorCode) !== void 0 && _.ErrorCode !== 0)
        throw new Error(_.ErrorInfo || s(a.SEND_FAILED));
      if (_ != null && _.ActionStatus && _.ActionStatus !== "OK")
        throw new Error(_.ErrorInfo || s(a.SEND_FAILED));
      T(""), Y.success(s(a.MESSAGE_SENT));
    } catch (_) {
      const k = _, H = k.ErrorInfo || (k instanceof Error ? k.message : String(k)) || s(a.UNKNOWN_HOST);
      Y.error(s(a.SEND_FAILED_WITH_ERROR, { error: H }));
    } finally {
      O(!1);
    }
  }, [g, n, C, s]), q = () => {
    if (N && i) {
      const R = N.sender.userId;
      if (w && R !== xt(w)) {
        const L = N.sender.userName || N.sender.nameCard || N.sender.userId, _ = ee(R);
        i(R, L, _);
      }
    }
    p(!1), E(null);
  }, $ = async () => {
    if (!N) return;
    const R = N.sender.userId;
    if (w && R === xt(w)) {
      p(!1), E(null);
      return;
    }
    const L = N.sender.userName || N.sender.nameCard || N.sender.userId, _ = S(R);
    try {
      d ? (await d({ userId: R, isDisable: !_ }), console.log(_ ? "Unmute successful" : "Mute successful")) : e && e(R, L, _);
    } catch (k) {
      console.error("SDK mute failed, using fallback method:", k), e && e(R, L, _);
    }
    p(!1), E(null);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: "message-list-container",
      ref: D,
      children: [
        /* @__PURE__ */ t("div", { className: "message-list-scroll-area", children: /* @__PURE__ */ t(
          Ba,
          {
            Message: Gi,
            className: "barrage-list-wrapper"
          }
        ) }),
        /* @__PURE__ */ u("form", { className: "admin-message-composer", onSubmit: W, children: [
          /* @__PURE__ */ t(
            "input",
            {
              className: "admin-message-input",
              value: g,
              onChange: (R) => T(R.target.value),
              placeholder: s(a.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
              disabled: C || !n
            }
          ),
          /* @__PURE__ */ t(
            "button",
            {
              type: "submit",
              className: "admin-message-send-btn",
              disabled: C || !n || !g.trim(),
              children: s(C ? a.SENDING : a.SEND_MESSAGE)
            }
          )
        ] }),
        f && N && Ya(
          /* @__PURE__ */ u(
            "div",
            {
              ref: I,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: v.top,
                left: v.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ t("button", { className: "dropdown-item", onClick: $, children: S(N.sender.userId) ? /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ t(kt, { size: 14 }),
                  /* @__PURE__ */ t("span", { children: s(a.UNMUTE) })
                ] }) : /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ t(Vr, { size: 14 }),
                  /* @__PURE__ */ t("span", { children: s(a.MUTE) })
                ] }) }),
                /* @__PURE__ */ t("button", { className: "dropdown-item danger", onClick: q, children: ee(N.sender.userId) ? /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ t(un, { size: 14 }),
                  /* @__PURE__ */ t("span", { children: s(a.UNBAN) })
                ] }) : /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ t(Wr, { size: 14 }),
                  /* @__PURE__ */ t("span", { children: s(a.BAN) })
                ] }) })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}, Wi = st.memo(Vi);
function zi({
  liveId: n,
  activeTab: r,
  onActiveTabChange: e,
  isAllMuted: i,
  allMuteLoading: c,
  onAllMuteChange: o,
  currentUserId: s,
  anchorUserId: m,
  memberManagementHook: l,
  onOpenAudienceDropdown: d,
  onOpenMutedModal: f,
  onOpenBannedModal: p,
  t: v
}) {
  return /* @__PURE__ */ u("div", { className: "left-interaction-card", children: [
    /* @__PURE__ */ u("div", { className: "interaction-tabs-header", children: [
      /* @__PURE__ */ u(
        Kt,
        {
          value: r,
          onChange: (h) => e(h),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ t(Kt.TabPanel, { value: "chat", label: v(a.MESSAGE_LIST) }),
            /* @__PURE__ */ t(Kt.TabPanel, { value: "audience", label: v(a.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ t(
          vn,
          {
            value: i,
            disabled: c,
            onChange: (h) => o(!!h)
          }
        ),
        /* @__PURE__ */ t("span", { className: "all-mute-label", children: v(a.ALL_MEMBER_MUTE) })
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "interaction-body", children: [
      /* @__PURE__ */ u(
        "div",
        {
          className: "chat-stream-sidebar",
          style: {
            height: "100%",
            display: r === "chat" ? "flex" : "none",
            flexDirection: "column"
          },
          children: [
            i && /* @__PURE__ */ u("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ t("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ t("span", { children: v(a.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ t(
              Wi,
              {
                liveId: n,
                anchorUserId: m,
                mutedList: l.mutedList,
                bannedList: l.bannedList,
                onMuteUser: l.handleMuteAudience,
                onBanUser: l.handleBanAudience
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          className: "audience-tab-wrapper",
          style: { display: r === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ t("div", { className: "audience-list-area", children: /* @__PURE__ */ t(Ha, { height: "99%", children: ({ audience: h }) => {
              if (h.userId === s)
                return /* @__PURE__ */ t("span", { className: "audience-me-tag", children: v(a.ME) });
              const N = xt(m);
              return h.userRole === 0 || h.userId === N ? null : /* @__PURE__ */ u("div", { className: "audience-row-actions", children: [
                l.isUserMuted(h.userId) && /* @__PURE__ */ t("span", { className: "audience-muted-badge", children: v(a.MUTED) }),
                /* @__PURE__ */ t(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: v(a.MORE_ACTIONS),
                    onClick: (E) => {
                      E.stopPropagation(), d(
                        E,
                        h.userId,
                        h.userName || h.userId,
                        l.isUserMuted(h.userId)
                      );
                    },
                    children: /* @__PURE__ */ t(hn, { size: 18 })
                  }
                )
              ] });
            } }) }),
            /* @__PURE__ */ u("div", { className: "audience-bottom-actions", children: [
              /* @__PURE__ */ u("button", { className: "audience-bottom-btn", onClick: f, children: [
                v(a.MUTED_VIEWERS),
                " (",
                l.mutedList.length,
                ")"
              ] }),
              /* @__PURE__ */ u("button", { className: "audience-bottom-btn", onClick: p, children: [
                v(a.BANNED_VIEWERS),
                " (",
                l.bannedList.length,
                ")"
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
function Bi({
  liveControlSlots: n,
  liveInfo: r,
  liveId: e,
  activeTab: i,
  onActiveTabChange: c,
  isAllMuted: o,
  allMuteLoading: s,
  onAllMuteChange: m,
  memberManagementHook: l,
  onOpenAudienceDropdown: d,
  onOpenMutedModal: f,
  onOpenBannedModal: p,
  onLeaveLive: v,
  onLiveEnded: h,
  t: N
}) {
  var ee, x, W;
  const { currentLive: E, currentUserId: g, handleLeaveLive: T } = Ui({
    liveId: e,
    onLiveEnded: h
  }), C = Le(
    () => {
      var q;
      return ((q = E == null ? void 0 : E.liveOwner) == null ? void 0 : q.userId) || (r == null ? void 0 : r.anchor.id) || "";
    },
    [(ee = E == null ? void 0 : E.liveOwner) == null ? void 0 : ee.userId, r == null ? void 0 : r.anchor.id]
  ), O = Le(
    () => {
      var q;
      return (r == null ? void 0 : r.anchor.avatar) || ((q = E == null ? void 0 : E.liveOwner) == null ? void 0 : q.avatarUrl) || "";
    },
    [r == null ? void 0 : r.anchor.avatar, (x = E == null ? void 0 : E.liveOwner) == null ? void 0 : x.avatarUrl]
  ), D = Le(
    () => {
      var q;
      return (r == null ? void 0 : r.anchor.name) || ((q = E == null ? void 0 : E.liveOwner) == null ? void 0 : q.userName) || N("Unknown Anchor");
    },
    [r == null ? void 0 : r.anchor.name, (W = E == null ? void 0 : E.liveOwner) == null ? void 0 : W.userName, N]
  ), I = Le(
    () => (E == null ? void 0 : E.roomType) === "Voice",
    [E == null ? void 0 : E.roomType]
  ), w = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  return /* @__PURE__ */ u("div", { className: "left-content-area", children: [
    /* @__PURE__ */ t(
      ki,
      {
        liveControlSlots: n,
        liveInfo: r,
        currentLive: E,
        liveAnchorAvatar: O,
        liveAnchorName: D,
        isVoiceLive: I,
        isMockMode: w,
        liveEndedOverlayVisible: !E && !w,
        onLeaveLive: () => {
          T(v);
        },
        t: N
      }
    ),
    /* @__PURE__ */ t(
      zi,
      {
        liveId: e,
        activeTab: i,
        onActiveTabChange: c,
        isAllMuted: o,
        allMuteLoading: s,
        onAllMuteChange: m,
        currentUserId: g,
        anchorUserId: C,
        memberManagementHook: l,
        onOpenAudienceDropdown: d,
        onOpenMutedModal: f,
        onOpenBannedModal: p,
        t: N
      }
    )
  ] });
}
const Hi = (n, r, e) => {
  const i = Array.from({ length: r }, () => 0);
  return n.forEach((c, o) => {
    const s = o % r;
    i[s] = Math.max(i[s], c);
  }), i.reduce((c, o) => c + o, 0) + e * (r - 1);
}, Ki = (n) => {
  const r = Array.from(n.querySelectorAll(":scope > .stat-bar-item")), e = document.createElement("div");
  e.style.position = "absolute", e.style.left = "-99999px", e.style.top = "0", e.style.visibility = "hidden", e.style.pointerEvents = "none", e.style.width = "max-content", document.body.appendChild(e);
  const i = r.map((c) => {
    const o = c.cloneNode(!0);
    return o.style.width = "max-content", o.style.maxWidth = "none", e.appendChild(o), Math.ceil(o.getBoundingClientRect().width);
  });
  return e.remove(), i;
}, Yi = (n) => {
  if (n.clientWidth <= 0) return;
  const r = Ki(n);
  if (!r.length) return;
  const e = parseFloat(getComputedStyle(n).columnGap) || 0, i = n.clientWidth, c = [7, 4, 3, 2, 1].find((o) => Hi(r, o, e) <= i + 1) || 1;
  n.style.setProperty("--stats-columns", String(c));
}, $i = (n) => n >= 1e4 ? (n / 1e4).toFixed(1) + "w" : n.toLocaleString(), qi = (n, r) => {
  n < 0 && (n = 0);
  const e = Math.floor(n / 86400), i = Math.floor(n % 86400 / 3600), c = Math.floor(n % 3600 / 60), o = n % 60, s = `${i.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${o.toString().padStart(2, "0")}`;
  return e > 0 ? `${e}${r(a.DAYS)} ${s}` : s;
}, Xi = (n) => {
  const r = new Date(n), e = String(r.getMonth() + 1).padStart(2, "0"), i = String(r.getDate()).padStart(2, "0"), c = String(r.getHours()).padStart(2, "0"), o = String(r.getMinutes()).padStart(2, "0"), s = String(r.getSeconds()).padStart(2, "0");
  return `${e}-${i} ${c}:${o}:${s}`;
}, xr = (n) => ({
  normal: a.NORMAL,
  porn: a.PORN,
  sensitive: a.SENSITIVE,
  political: a.POLITICAL,
  advertising: a.ADVERTISING,
  abuse: a.ABUSE,
  illegal: a.ILLEGAL,
  composite: a.COMPOSITE,
  violence: a.VIOLENCE,
  sexy: a.SEXY,
  unknown: a.UNKNOWN
})[n] || a.UNKNOWN, tt = (n) => {
  const r = (n == null ? void 0 : n.ErrorCode) || (n == null ? void 0 : n.errorCode) || (n == null ? void 0 : n.code) || 0, e = (n == null ? void 0 : n.ErrorInfo) || (n == null ? void 0 : n.errorInfo) || "";
  return { code: r, info: e };
};
function ji({
  liveInfo: n,
  audienceCount: r,
  liveDuration: e,
  interactionRate: i,
  updateTimeText: c,
  t: o
}) {
  var m, l, d, f, p, v, h;
  const s = Q(null);
  return J(() => {
    const N = s.current;
    if (!N) return;
    let E = null;
    const g = () => {
      E !== null && cancelAnimationFrame(E), E = requestAnimationFrame(() => {
        E = null, Yi(N);
      });
    }, T = new ResizeObserver(g);
    T.observe(N);
    const C = new MutationObserver(g);
    return C.observe(N, { childList: !0, subtree: !0, characterData: !0 }), g(), () => {
      T.disconnect(), C.disconnect(), E !== null && cancelAnimationFrame(E);
    };
  }, []), /* @__PURE__ */ u("div", { className: "sidebar-stats-card", children: [
    /* @__PURE__ */ u("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ u("div", { className: "stats-header-left", children: [
        /* @__PURE__ */ t("h3", { children: o(a.LIVE_DATA_CONTROL) }),
        /* @__PURE__ */ u("span", { className: "live-status-tag", children: [
          /* @__PURE__ */ t("span", { className: "live-status-dot" }),
          o(a.LIVE_NOW),
          /* @__PURE__ */ t("span", { className: "live-duration-text", children: qi(e, o) })
        ] })
      ] }),
      /* @__PURE__ */ t("span", { className: "update-time", children: o(a.UPDATED_AT, { time: c }) })
    ] }),
    /* @__PURE__ */ u("div", { ref: s, className: "stats-bar-design", children: [
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.CURRENT_VIEWERS),
          /* @__PURE__ */ t(Fe, { content: o(a.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: $i((n == null ? void 0 : n.onlineCount) ?? r ?? 0) })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.COMMENT_COUNT),
          /* @__PURE__ */ t(Fe, { content: o(a.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: ((l = (m = n == null ? void 0 : n.stats) == null ? void 0 : m.commentCount) == null ? void 0 : l.toLocaleString()) ?? "0" })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.COMMENT_USERS),
          /* @__PURE__ */ t(Fe, { content: o(a.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: ((d = n == null ? void 0 : n.stats) == null ? void 0 : d.totalUniqueCommenters) ?? 0 })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.INTERACTION_RATE),
          /* @__PURE__ */ t(Fe, { content: o(a.INTERACTION_RATE_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: i })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.TOTAL_GIFT_AMOUNT),
          /* @__PURE__ */ t(Fe, { content: o(a.TOTAL_GIFT_AMOUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: ((p = (f = n == null ? void 0 : n.stats) == null ? void 0 : f.giftAmount) == null ? void 0 : p.toFixed(2)) ?? "0.00" })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.GIFT_COUNT),
          /* @__PURE__ */ t(Fe, { content: o(a.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: ((v = n == null ? void 0 : n.stats) == null ? void 0 : v.giftCount) ?? 0 })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.GIFT_SENDERS),
          /* @__PURE__ */ t(Fe, { content: o(a.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ t($e, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ t("div", { className: "stat-value", children: ((h = n == null ? void 0 : n.stats) == null ? void 0 : h.giftUserCount) ?? 0 })
      ] })
    ] })
  ] });
}
function Zi({
  moderationList: n,
  moderationLoading: r,
  moderationPage: e,
  moderationTotal: i,
  moderationTotalPages: c,
  moderationSelectedIds: o,
  isAllOnPageSelected: s,
  moderationAvailable: m,
  updateTimeText: l,
  onRefresh: d,
  onPageChange: f,
  onBulkApprove: p,
  onBulkDelete: v,
  onToggleSelectOne: h,
  onToggleSelectAll: N,
  onRelease: E,
  onDelete: g,
  onOpenDropdown: T,
  t: C
}) {
  return /* @__PURE__ */ u("div", { className: "moderation-card", children: [
    /* @__PURE__ */ u("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ u("div", { className: "moderation-header-left", children: [
        /* @__PURE__ */ t("h3", { children: C(a.CONTENT_MODERATION) }),
        /* @__PURE__ */ t(
          B,
          {
            theme: "primary",
            shape: "round",
            onClick: p,
            disabled: o.length === 0,
            icon: /* @__PURE__ */ t(kt, { style: { width: 14, height: 14 } }),
            children: C(a.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ t(
          B,
          {
            theme: "primary",
            shape: "round",
            onClick: v,
            disabled: o.length === 0,
            icon: /* @__PURE__ */ t(mn, { style: { width: 14, height: 14 } }),
            children: C(a.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ u("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ t("span", { className: "update-time", children: C(a.UPDATED_AT, { time: l }) }),
        /* @__PURE__ */ t(
          B,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ t(ir, {}),
            loading: r,
            onClick: d,
            children: C(a.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ t(
        zt,
        {
          columns: [
            {
              key: "check",
              width: 40,
              className: "col-check",
              headerRender: () => /* @__PURE__ */ t(
                "input",
                {
                  type: "checkbox",
                  checked: s,
                  onChange: N
                }
              ),
              render: (O) => /* @__PURE__ */ t(
                "input",
                {
                  type: "checkbox",
                  checked: o.includes(O.id),
                  onChange: () => h(O.id)
                }
              )
            },
            {
              key: "userId",
              title: C(a.USERID),
              width: 120,
              className: "col-user",
              render: (O) => /* @__PURE__ */ t("div", { className: "moderation-user-cell", children: /* @__PURE__ */ t("span", { className: "moderation-user-id", children: O.userId }) })
            },
            {
              key: "content",
              title: C(a.COMMENT_CONTENT),
              className: "col-content moderation-content-cell",
              render: (O) => /* @__PURE__ */ t("span", { title: O.content, children: O.content })
            },
            {
              key: "type",
              title: C(a.SENSITIVE_TYPE),
              width: 100,
              className: "col-type moderation-type-cell",
              render: (O) => {
                const D = O.type.split(/[,\s;|]+/).map((I) => I.trim()).filter(Boolean).map(
                  (I, w) => w > 0 ? " " + C(xr(I)) : C(xr(I))
                ).join("");
                return /* @__PURE__ */ t(Fe, { content: D, placement: "top", children: /* @__PURE__ */ t("span", { className: "moderation-type-text", title: "", children: D }) });
              }
            },
            {
              key: "createdAtMs",
              title: C(a.CREATED_AT),
              width: 120,
              className: "col-time moderation-time-cell",
              render: (O) => Xi(O.createdAtMs)
            },
            {
              key: "action",
              title: C(a.ACTION),
              fitContent: !0,
              minWidth: 120,
              maxWidth: 260,
              className: "col-action",
              render: (O) => /* @__PURE__ */ t(
                je,
                {
                  actions: [
                    {
                      key: "approve",
                      label: C(a.APPROVE),
                      onClick: () => E(O)
                    },
                    {
                      key: "delete",
                      label: C(a.DELETE),
                      danger: !0,
                      onClick: () => g(O)
                    },
                    {
                      key: "more",
                      label: C(a.MORE),
                      suffixCaret: !0,
                      onClick: (D) => T(D, O)
                    }
                  ]
                }
              )
            }
          ],
          data: n,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ t("div", { className: "moderation-empty", children: /* @__PURE__ */ t("span", { children: C(a.MODERATION_EMPTY) }) })
        }
      ),
      n.length > 0 && /* @__PURE__ */ u("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ t("span", { children: C(a.TOTAL_ITEMS, { count: i, total: i }) }),
        /* @__PURE__ */ u("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ t(
            "button",
            {
              className: "page-num page-nav",
              disabled: e <= 1,
              onClick: () => f(e - 1),
              "aria-label": C(a.PREVIOUS_PAGE),
              children: /* @__PURE__ */ t(fn, { style: { width: 14 } })
            }
          ),
          ea(e, c).map(
            (O, D) => O === "..." ? /* @__PURE__ */ t("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${D}`) : /* @__PURE__ */ t(
              "button",
              {
                className: `page-num ${O === e ? "active" : ""}`,
                onClick: () => f(O),
                children: O
              },
              O
            )
          ),
          /* @__PURE__ */ t(
            "button",
            {
              className: "page-num page-nav",
              disabled: e >= c,
              onClick: () => f(e + 1),
              "aria-label": C(a.NEXT_PAGE),
              children: /* @__PURE__ */ t(sr, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Ji({
  mutedModalVisible: n,
  bannedModalVisible: r,
  mutedList: e,
  bannedList: i,
  memberListLoading: c,
  getUserAvatar: o,
  getUserNameFromCache: s,
  onMutedModalClose: m,
  onBannedModalClose: l,
  onUnmuteFromList: d,
  onUnbanFromList: f,
  t: p
}) {
  return /* @__PURE__ */ u(ue, { children: [
    /* @__PURE__ */ t(
      Ee,
      {
        visible: n,
        header: p(a.MUTED_VIEWERS),
        onClose: m,
        width: Se.WIDE,
        footer: /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: m, children: p(a.CLOSE) }),
        children: /* @__PURE__ */ t("div", { className: "member-list-panel-modal", children: c ? /* @__PURE__ */ t("div", { className: "member-list-empty", children: p(a.LOADING) }) : e.length === 0 ? /* @__PURE__ */ t("div", { className: "member-list-empty", children: p(a.NO_MUTED_MEMBERS) }) : /* @__PURE__ */ u("table", { className: "member-list-table", children: [
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ u("tr", { children: [
            /* @__PURE__ */ t("th", { children: p(a.USER) }),
            /* @__PURE__ */ t("th", { children: p(a.UNMUTE_TIME) }),
            /* @__PURE__ */ t("th", { children: p(a.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ t("tbody", { children: e.map((v) => {
            const h = s(v.userId);
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ t("td", { className: "member-table-user", children: /* @__PURE__ */ u("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ t(
                  Gt,
                  {
                    className: "member-table-avatar",
                    src: o(v.userId),
                    name: h
                  }
                ),
                /* @__PURE__ */ t(Fe, { content: h, placement: "top", showArrow: !1, children: /* @__PURE__ */ t("span", { className: "member-table-user-name", children: h }) })
              ] }) }),
              /* @__PURE__ */ t("td", { className: "member-table-time", children: v.endTime > 0 ? new Date(v.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ t("td", { className: "member-table-action", children: /* @__PURE__ */ t(
                je,
                {
                  actions: [
                    {
                      key: "unmute",
                      label: p(a.UNMUTE),
                      onClick: () => d(v.userId)
                    }
                  ]
                }
              ) })
            ] }, v.userId);
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: r,
        header: p(a.BANNED_VIEWERS),
        onClose: l,
        width: Se.WIDE,
        footer: /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: l, children: p(a.CLOSE) }),
        children: /* @__PURE__ */ t("div", { className: "member-list-panel-modal", children: c ? /* @__PURE__ */ t("div", { className: "member-list-empty", children: p(a.LOADING) }) : i.length === 0 ? /* @__PURE__ */ t("div", { className: "member-list-empty", children: p(a.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ u("table", { className: "member-list-table", children: [
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ u("tr", { children: [
            /* @__PURE__ */ t("th", { children: p(a.USER) }),
            /* @__PURE__ */ t("th", { children: p(a.BAN_LIFT_TIME) }),
            /* @__PURE__ */ t("th", { children: p(a.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ t("tbody", { children: i.map((v) => {
            const h = s(v.userId);
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ t("td", { className: "member-table-user", children: /* @__PURE__ */ u("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ t(
                  Gt,
                  {
                    className: "member-table-avatar",
                    src: o(v.userId),
                    name: h
                  }
                ),
                /* @__PURE__ */ t(Fe, { content: h, placement: "top", showArrow: !1, children: /* @__PURE__ */ t("span", { className: "member-table-user-name", children: h }) })
              ] }) }),
              /* @__PURE__ */ t("td", { className: "member-table-time", children: v.endTime > 0 ? new Date(v.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ t("td", { className: "member-table-action", children: /* @__PURE__ */ t(
                je,
                {
                  actions: [
                    {
                      key: "unban",
                      label: p(a.UNBAN),
                      onClick: () => f(v.userId)
                    }
                  ]
                }
              ) })
            ] }, v.userId);
          }) })
        ] }) })
      }
    )
  ] });
}
function Qi(n, r) {
  const {
    fetchTextModerationList: e,
    approveTextModerationItems: i,
    bypassCorrectionKeyword: c
  } = Jr({ liveId: n || "", pageSize: Ot }), [o, s] = b([]), [m, l] = b(!1), [d, f] = b(1), [p, v] = b(0), [h, N] = b([]), [E, g] = b(null), [T, C] = b(null), O = Le(() => ta(p, Ot), [p]), D = A(
    async (y = 1) => {
      if (n) {
        l(!0);
        try {
          const P = Math.max(1, y), F = await e({
            pageNum: P,
            pageSize: Ot,
            minutes: 10,
            violationOnly: !0
          }), M = F.list || [];
          s(M), v(F.total || 0), f(P), N((U) => U.filter((z) => M.some((te) => te.id === z)));
        } catch (P) {
          console.error("[moderation] load failed:", P), Y.error(r(a.OPERATION_FAILED, { error: P.message || r(a.UNKNOWN_ERROR) }));
        } finally {
          l(!1);
        }
      }
    },
    [n, r, e]
  );
  J(() => {
    n && D(1);
  }, [n]);
  const I = A(async () => {
    await D(d), Y.success(r(a.REFRESHED));
  }, [D, d, r]), w = A(
    (y) => {
      y < 1 || y > O || y === d || D(y);
    },
    [D, d, O]
  ), X = A(
    async (y) => {
      N((F) => F.filter((M) => !y.includes(M)));
      const P = ra(
        d,
        p,
        y.length,
        Ot
      );
      await D(P);
    },
    [D, d, p]
  ), S = Be({
    action: async () => {
      if (!E || !n) throw new Error("liveId is required");
      await i({
        ids: [E.id],
        items: [{ id: E.id, content: E.content, userId: E.userId }],
        liveId: n
      });
    },
    confirm: {
      title: r(a.RELEASE_AND_RESEND),
      content: r(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      Y.success(r(a.RELEASE_AND_RESEND_SUCCESS)), E && await X([E.id]), g(null);
    },
    onError: (y) => {
      Y.error(r(a.OPERATION_FAILED, { error: y.message || r(a.UNKNOWN_ERROR) }));
    }
  }), ee = A((y) => {
    g(y), S.requestConfirm();
  }, [S]), x = Be({
    action: async () => {
      if (!T) throw new Error("No target item");
      await c({ keywords: [T.content] });
    },
    confirm: {
      title: r(a.BYPASS_CORRECTION),
      content: r(a.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      Y.success(r(a.BYPASS_CORRECTION_SUCCESS)), T && await X([T.id]), C(null);
    },
    onError: (y) => {
      Y.error(r(a.OPERATION_FAILED, { error: y.message || r(a.UNKNOWN_ERROR) }));
    }
  }), W = A((y) => {
    C(y), x.requestConfirm();
  }, [x]), q = Be({
    action: async () => {
      if (!n) throw new Error("liveId is required");
      const y = [...h], P = o.filter((F) => y.includes(F.id)).map((F) => ({ id: F.id, content: F.content, userId: F.userId }));
      await i({ ids: y, items: P, liveId: n });
    },
    confirm: {
      title: r(a.RELEASE_AND_RESEND),
      content: r(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      Y.success(r(a.RELEASE_AND_RESEND_SUCCESS));
      const y = [...h];
      await X(y);
    },
    onError: (y) => {
      Y.error(r(a.OPERATION_FAILED, { error: y.message || r(a.UNKNOWN_ERROR) }));
    }
  }), $ = A(() => {
    if (h.length === 0) {
      Y.warning(r(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    q.requestConfirm();
  }, [q, h]), R = A(
    async (y) => {
      try {
        await i({ ids: [y.id] }), Y.info(r(a.DELETED)), await X([y.id]);
      } catch (P) {
        console.error("[moderation] delete failed:", P), Y.error(r(a.OPERATION_FAILED, { error: P.message || r(a.UNKNOWN_ERROR) }));
      }
    },
    [X, r]
  ), L = A(async () => {
    if (h.length === 0) {
      Y.warning(r(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const y = [...h];
    try {
      await i({ ids: y }), Y.info(r(a.DELETED)), await X(y);
    } catch (P) {
      console.error("[moderation] bulk delete failed:", P), Y.error(r(a.OPERATION_FAILED, { error: P.message || r(a.UNKNOWN_ERROR) }));
    }
  }, [h, X, r]), _ = A((y) => {
    N((P) => P.includes(y) ? P.filter((F) => F !== y) : [...P, y]);
  }, []), k = A(() => {
    N((y) => {
      const P = o.map((F) => F.id);
      return y.length === P.length ? [] : P;
    });
  }, [o]), H = Le(() => {
    const y = o.map((P) => P.id);
    return na(h, y);
  }, [o, h]);
  return {
    moderationList: o,
    moderationLoading: m,
    moderationPage: d,
    moderationTotal: p,
    moderationTotalPages: O,
    moderationSelectedIds: h,
    isAllOnPageSelected: H,
    releaseConfirmDialog: S.confirmDialog,
    bypassConfirmDialog: x.confirmDialog,
    bulkApproveConfirmDialog: q.confirmDialog,
    handleRefreshModeration: I,
    goToModerationPage: w,
    handleRelease: ee,
    handleBypassCorrection: W,
    handleDeleteModeration: R,
    handleBulkApprove: $,
    handleBulkDelete: L,
    toggleSelectOne: _,
    toggleSelectAll: k
  };
}
function eo(n, r, e) {
  const {
    mutedList: i,
    bannedList: c,
    memberLoading: o,
    fetchMutedList: s,
    fetchBannedList: m,
    muteMember: l,
    unmuteMember: d,
    banMember: f,
    unbanMember: p
  } = Jr({ liveId: n || "", pageSize: 20 }), [v, h] = b([]), [N, E] = b([]), [g, T] = b(!1), [C, O] = b(null), [D, I] = b(null), [w, X] = b(null), [S, ee] = b(null);
  Le(() => {
    Array.isArray(i) && h(i);
  }, [i]), Le(() => {
    Array.isArray(c) && E(c);
  }, [c]);
  const x = (M, U) => {
    M === "success" ? Y.success(U) : Y.error(U);
  }, W = Be({
    action: async () => {
      if (!D) throw new Error("No target");
      await d({ memberAccounts: [D.userId] });
    },
    confirm: {
      title: r(a.CONFIRM_UNMUTE_USER),
      content: D ? r(a.UNMUTE_CONFIRM, { name: D.userName }) : ""
    },
    onSuccess: async () => {
      x("success", r(a.UNMUTED_SUCCESS, { name: (D == null ? void 0 : D.userName) || "" })), await y(), I(null);
    },
    onError: (M) => {
      const { code: U, info: z } = tt(M), te = U ? et(U, z) : M.message || r(a.UNKNOWN_HOST);
      x("error", r(a.OPERATION_FAILED, { error: te }));
    }
  }), q = Be({
    action: async () => {
      if (!C) throw new Error("No target");
      await l({ memberAccounts: [C.userId], muteTime: aa });
    },
    confirm: {
      title: r(a.CONFIRM_MUTE_USER),
      content: C ? r(a.MUTE_WARNING, { name: C.userName }) : ""
    },
    onSuccess: async () => {
      x("success", r(a.MUTED_SUCCESS, { name: (C == null ? void 0 : C.userName) || "" })), await y(), O(null);
    },
    onError: (M) => {
      const { code: U, info: z } = tt(M), te = U ? et(U, z) : M.message || r(a.UNKNOWN_HOST);
      x("error", r(a.MUTE_FAILED, { error: te }));
    }
  }), $ = A((M, U, z) => {
    n && (Cr(M, e) || (z ? (I({ userId: M, userName: U }), W.requestConfirm()) : (O({ userId: M, userName: U }), q.requestConfirm())));
  }, [n, e, W, q]), R = Be({
    action: async () => {
      if (!S) throw new Error("No target");
      await p({ memberAccounts: [S.userId] });
    },
    confirm: {
      title: r(a.CONFIRM_UNBAN_USER),
      content: S ? r(a.UNBAN_CONFIRM, { name: S.userName }) : ""
    },
    onSuccess: async () => {
      x("success", r(a.UNBANNED_SUCCESS, { name: (S == null ? void 0 : S.userName) || "" })), await P(), ee(null);
    },
    onError: (M) => {
      const { code: U, info: z } = tt(M), te = U ? et(U, z) : M.message || r(a.UNKNOWN_HOST);
      x("error", r(a.OPERATION_FAILED, { error: te }));
    }
  }), L = Be({
    action: async () => {
      if (!w) throw new Error("No target");
      await f({ memberAccounts: [w.userId], duration: ia });
    },
    confirm: {
      title: r(a.CONFIRM_BAN_USER),
      content: w ? r(a.BAN_WARNING, { name: w.userName }) : ""
    },
    onSuccess: async () => {
      x("success", r(a.BANNED_SUCCESS, { name: (w == null ? void 0 : w.userName) || "" })), await P(), X(null);
    },
    onError: (M) => {
      const { code: U, info: z } = tt(M), te = U ? et(U, z) : M.message || r(a.UNKNOWN_HOST);
      x("error", r(a.BAN_FAILED, { error: te }));
    }
  }), _ = A((M, U, z) => {
    n && (Cr(M, e) || (z ? (ee({ userId: M, userName: U }), R.requestConfirm()) : (X({ userId: M, userName: U }), L.requestConfirm())));
  }, [n, e, R, L]), k = A((M) => {
    n && (I({ userId: M, userName: M }), W.requestConfirm());
  }, [n, W]), H = A((M) => {
    n && (ee({ userId: M, userName: M }), R.requestConfirm());
  }, [n, R]), y = A(async () => {
    if (n) {
      T(!0);
      try {
        const M = await s();
        h(Array.isArray(M) ? M : []);
      } catch (M) {
        console.error("获取禁言列表失败:", M);
        const { code: U, info: z } = tt(M), te = U ? et(U, z) : M.message || r(a.UNKNOWN_HOST);
        x("error", r(a.FETCH_MUTED_LIST_FAILED, { error: te }));
      } finally {
        T(!1);
      }
    }
  }, [n, r, s]), P = A(async () => {
    if (n) {
      T(!0);
      try {
        const M = await m();
        E(Array.isArray(M) ? M : []);
      } catch (M) {
        console.error("获取封禁列表失败:", M);
        const { code: U, info: z } = tt(M), te = U ? et(U, z) : M.message || r(a.UNKNOWN_HOST);
        x("error", r(a.FETCH_BANNED_LIST_FAILED, { error: te }));
      } finally {
        T(!1);
      }
    }
  }, [n, r, m]), F = A((M) => v.some((U) => U.userId === M), [v]);
  return {
    mutedList: v,
    bannedList: N,
    memberListLoading: g,
    fetchMutedList: y,
    fetchBannedList: P,
    handleMuteAudience: $,
    handleBanAudience: _,
    handleUnmuteFromList: k,
    handleUnbanFromList: H,
    isUserMuted: F,
    muteConfirmDialog: q.confirmDialog,
    unmuteConfirmDialog: W.confirmDialog,
    banConfirmDialog: L.confirmDialog,
    unbanConfirmDialog: R.confirmDialog
  };
}
function to() {
  const [n, r] = b(""), [e, i] = b(""), c = A((o, s) => {
    o === "success" ? (r(s), setTimeout(() => r(""), 3e3)) : (i(s), setTimeout(() => i(""), 3e3));
  }, []);
  return {
    successMsg: n,
    errorMsg: e,
    showMessage: c
  };
}
function wo() {
  var Rt, ft, Ke, rt;
  const { liveId: n } = Fa();
  J(() => (console.log("[LiveControl] ✅ Component MOUNTED, liveId:", n), () => {
    console.log("[LiveControl] ❌ Component UNMOUNTED, liveId:", n);
  }), []);
  const r = _t(), e = yt(), i = (Rt = e.components) == null ? void 0 : Rt.roomControl;
  (ft = e.components) == null || ft.liveMonitor;
  const { t: c } = Ne(), {
    init: o,
    fetchLiveDetail: s,
    fetchLiveStats: m,
    endLive: l,
    updateLive: d
  } = ht(), [f, p] = b({}), v = A(async (K) => {
    if (!(!K || K.length === 0))
      try {
        const ne = await ka(K);
        p((ce) => ({ ...ce, ...Object.fromEntries(ne) }));
      } catch (ne) {
        console.error("[LiveControl] fetchUserProfiles failed:", ne);
      }
  }, []), h = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, [N, E] = b(h), [g, T] = b(null), [C, O] = b(!1), [D, I] = b("chat"), [w, X] = b(!0), { successMsg: S, errorMsg: ee, showMessage: x } = to(), [W, q] = b(null), [$, R] = b(!1), [L, _] = b(!1), k = Ga(), H = Be({
    action: async () => {
      if (!g) throw new Error("liveInfo is null");
      return l(g.id || g.liveId);
    },
    confirm: {
      title: a.CONFIRM_FORCE_STOP,
      content: a.FORCE_STOP_WARNING,
      confirmText: a.CONFIRM,
      danger: !0
    },
    successMessage: a.LIVE_FORCIBLY_CLOSED,
    errorMessage: a.FORCE_STOP_FAILED,
    onSuccess: () => {
      r(-1);
    }
  }), y = Be({
    action: async () => {
      if (!n) throw new Error("liveId is required");
      return d({ liveId: n, isMessageDisabled: !0 });
    },
    confirm: {
      title: "⚠️ " + a.ENABLE_ALL_MEMBER_MUTE,
      content: a.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT,
      confirmText: a.CONFIRM_ENABLE,
      danger: !1
    },
    successMessage: a.ALL_MEMBER_MUTE_ENABLED,
    errorMessage: a.MUTE_FAILED,
    onSuccess: () => {
      T((K) => K ? { ...K, isMessageDisabled: !0 } : null);
    }
  }), [P, F] = b({
    visible: !1,
    liveId: "",
    liveName: ""
  }), M = () => {
    F({
      visible: !0,
      liveId: n || "",
      liveName: (g == null ? void 0 : g.liveName) || ""
    });
  }, U = Q(null), z = Q(null), [te, oe] = b(null), [Z, he] = b(0), [_e, me] = b(null), ae = Le(
    () => {
      var K, ne;
      return ((K = g == null ? void 0 : g.anchor) == null ? void 0 : K.userId) || ((ne = g == null ? void 0 : g.anchor) == null ? void 0 : ne.id) || "";
    },
    [g]
  ), V = Qi(n, c), re = eo(n, c, ae);
  J(() => () => {
    n && (console.log("[LiveControl] Component unmounting, auto end live:", n), l(n).catch((K) => {
      console.error("[LiveControl] Failed to end live on unmount:", K);
    }));
  }, [n, l]);
  const be = A(async () => {
    var K, ne, ce;
    if (console.log("[LiveControl] fetchRoomInfo called, liveId:", n), !n) {
      console.log("[LiveControl] fetchRoomInfo skipped: no liveId");
      return;
    }
    try {
      console.log("[LiveControl] Fetching room detail...");
      const ie = await s(n);
      if (console.log("[LiveControl] Room response:", ie), ie) {
        const Re = (K = ie.anchor) == null ? void 0 : K.userId, Me = Hr(ie, Re || "-"), ye = Br(ie);
        if (ie.anchor ? oe({
          nick: ie.anchor.nick || Me,
          avatarUrl: ie.anchor.avatarUrl || ye
        }) : oe({
          nick: Me,
          avatarUrl: ye
        }), T({
          liveId: ie.liveId,
          id: ie.liveId,
          liveName: ie.liveName || c(a.UNNAMED_LIVE_SHORT),
          coverUrl: ie.coverUrl || hr,
          anchor: {
            userId: Re || "",
            nick: Me,
            avatarUrl: ye,
            id: Re,
            name: Me,
            avatar: ye
          },
          onlineCount: ie.onlineCount || 0,
          createdAt: ie.createdAt ?? 0,
          isMessageDisabled: ie.isMessageDisabled === !0,
          roomType: ie.roomType || "Live",
          isSeatEnabled: ie.isSeatEnabled || !1,
          maxSeatCount: ie.maxSeatCount || 9,
          maxMemberCount: ie.maxMemberCount || 1e3,
          category: ie.category || [],
          activityStatus: ie.activityStatus ?? 1,
          isPublicVisible: ie.isPublicVisible !== void 0 ? ie.isPublicVisible : !0,
          isLikeEnabled: ie.isLikeEnabled !== void 0 ? ie.isLikeEnabled : !0
        }), ie.createdAt) {
          const pt = ie.createdAt > 1e12 ? ie.createdAt : ie.createdAt * 1e3, j = Math.floor((Date.now() - pt) / 1e3);
          he(j > 0 ? j : 0);
        }
      } else
        x("error", c(a.GET_ERROR_MESSAGE));
    } catch (ie) {
      const { code: Re, info: Me } = tt(ie), ye = ie;
      if ((ne = ye == null ? void 0 : ye.message) != null && ne.includes("network") || (ce = ye == null ? void 0 : ye.message) != null && ce.includes("fetch"))
        x("error", c(a.NETWORK_ERROR));
      else {
        const pt = Re ? et(Re, Me) : (ye == null ? void 0 : ye.message) || c(a.NETWORK_ERROR);
        x("error", c(a.REQUEST_FAILED, { error: pt }));
      }
    } finally {
      X(!1);
    }
  }, [n, v, c, x, f]), Te = A(async () => {
    if (n)
      try {
        await m(n);
      } catch {
      }
  }, [n]), fe = Le(() => {
    var ce;
    const K = (g == null ? void 0 : g.onlineCount) || 0, ne = ((ce = g == null ? void 0 : g.stats) == null ? void 0 : ce.totalUniqueCommenters) ?? 0;
    return K <= 0 ? "0%" : (ne / K * 100).toFixed(1) + "%";
  }, [g == null ? void 0 : g.onlineCount, (Ke = g == null ? void 0 : g.stats) == null ? void 0 : Ke.totalUniqueCommenters]), [Ae, we] = b(() => {
    const K = /* @__PURE__ */ new Date();
    return `${String(K.getHours()).padStart(2, "0")}:${String(K.getMinutes()).padStart(2, "0")}`;
  });
  A(() => {
    const K = /* @__PURE__ */ new Date();
    we(`${String(K.getHours()).padStart(2, "0")}:${String(K.getMinutes()).padStart(2, "0")}`);
  }, []);
  const ve = 30, Pe = Q(null), mt = Q(!0);
  Q(!1);
  const bt = Q(!0);
  A(() => {
    O(!0);
  }, []);
  const It = A(() => {
    r(-1);
  }, [r]), Lt = (K) => {
    if (K !== (g == null ? void 0 : g.isMessageDisabled)) {
      if (K) {
        y.requestConfirm();
        return;
      }
      y.executeWithConfirm();
    }
  }, St = (K) => {
    const ne = f[K];
    if (ne != null && ne.avatarUrl)
      return ne.avatarUrl;
  }, Tt = (K) => {
    const ne = f[K];
    return ne != null && ne.nick ? ne.nick : K;
  }, At = A(() => {
    me(null);
  }, []), Bt = A((K, ne) => {
    K.preventDefault(), K.stopPropagation();
    const ce = K.currentTarget.getBoundingClientRect();
    me({
      item: ne,
      x: ce.right,
      y: ce.bottom + 4
    });
  }, []), He = A(() => {
    q(null);
  }, []), wt = (K, ne, ce, ie) => {
    K.stopPropagation();
    const Re = K.currentTarget.getBoundingClientRect();
    q({
      visible: !0,
      userId: ne,
      userName: ce,
      isMuted: ie,
      x: Re.right,
      y: Re.bottom + 4
    });
  };
  J(() => {
    var ce;
    const K = (ce = g == null ? void 0 : g.anchor) == null ? void 0 : ce.userId;
    if (!K) return;
    const ne = f[K];
    ne && oe({
      nick: ne.nick || "",
      avatarUrl: ne.avatarUrl || ""
    });
  }, [f, (rt = g == null ? void 0 : g.anchor) == null ? void 0 : rt.userId]), J(() => {
    const K = g == null ? void 0 : g.createdAt;
    if (!K || (g == null ? void 0 : g.activityStatus) === 2)
      return;
    const ne = () => {
      const ie = Math.floor((Date.now() - K) / 1e3);
      he(ie > 0 ? ie : 0);
    };
    ne();
    const ce = window.setInterval(ne, 1e3);
    return () => {
      window.clearInterval(ce);
    };
  }, [g == null ? void 0 : g.createdAt, g == null ? void 0 : g.activityStatus]), J(() => {
    if (!(W != null && W.visible) && !_e) return;
    const K = (ne) => {
      U.current && !U.current.contains(ne.target) && He(), z.current && !z.current.contains(ne.target) && At();
    };
    return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
  }, [W == null ? void 0 : W.visible, He, At, _e]), J(() => {
    D === "audience" && n && (re.fetchMutedList(), re.fetchBannedList());
  }, [D, n]), J(() => {
    if (D !== "audience") return;
    const K = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((Re) => {
        const Me = Re, ye = Me.textContent || "";
        Me.title !== ye && (Me.title = ye);
      });
    };
    K();
    const ne = document.querySelector(".audience-list-area");
    if (!ne) return;
    const ce = new MutationObserver(K);
    return ce.observe(ne, { childList: !0, subtree: !0 }), () => ce.disconnect();
  }, [D]), J(() => {
    h && E(!0);
  }, [h]), J(() => {
    !h && !N && (async () => {
      try {
        const ne = await mr();
        ne && ne.sdkAppId !== 0 ? (console.log("[LiveControl] Initializing SDK with account:", ne.userId), o({
          baseURL: "http://localhost:9000/api"
        }), E(!0), console.log("[LiveControl] SDK initialized successfully")) : console.error("[LiveControl] No valid credentials found");
      } catch (ne) {
        console.error("[LiveControl] SDK init error:", ne);
      }
    })();
  }, [h, N]), J(() => {
    O(!1);
  }, [n]), J(() => {
    if (console.log("[LiveControl] Main useEffect triggered:", { liveId: n, isMockMode: h, sdkReady: N }), mt.current = !0, bt.current = !0, n && (h || N))
      return console.log("[LiveControl] Condition met, calling fetchRoomInfo"), be(), Te(), re.fetchMutedList(), re.fetchBannedList(), () => {
        mt.current = !1;
      };
    console.log("[LiveControl] Condition NOT met, waiting...", { liveId: n, isMockMode: h, sdkReady: N });
  }, [n, N, h]), J(() => {
    if (!n || !N || ve === 0) {
      Pe.current && (clearInterval(Pe.current), Pe.current = null);
      return;
    }
    return Pe.current = window.setInterval(() => {
      mt.current && Te();
    }, ve * 1e3), () => {
      Pe.current && (clearInterval(Pe.current), Pe.current = null);
    };
  }, [n, N, ve]), te != null && te.nick || g != null && g.anchor.name || c(a.UNKNOWN_HOST), te != null && te.avatarUrl || g != null && g.anchor.avatar, Le(() => (n == null ? void 0 : n.startsWith("voice_")) || !1, [n]);
  const Ht = (g == null ? void 0 : g.isMessageDisabled) === !0;
  return w ? /* @__PURE__ */ t("div", { className: "loading-container", children: /* @__PURE__ */ t(En, { loading: !0, text: c(a.LOADING) }) }) : /* @__PURE__ */ u("div", { className: "live-control-container", children: [
    /* @__PURE__ */ u("div", { className: "toast-area", children: [
      S && /* @__PURE__ */ t("div", { className: "status-success", children: S }),
      ee && /* @__PURE__ */ t("div", { className: "status-error", children: ee })
    ] }),
    /* @__PURE__ */ u("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ u("div", { className: "nav-left", children: [
        /* @__PURE__ */ t(B, { shape: "circle", variant: "outline", className: "back-btn", onClick: It, title: c(a.BACK_TO_LIST), children: /* @__PURE__ */ t("svg", { viewBox: Xe.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Xe.strokeWidth, strokeLinecap: Xe.strokeLinecap, children: /* @__PURE__ */ t("path", { d: Xe.path }) }) }),
        /* @__PURE__ */ t("div", { className: "divider" }),
        /* @__PURE__ */ t("h1", { children: c(a.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ u("div", { className: "nav-right", children: [
        /* @__PURE__ */ t(
          B,
          {
            className: "action-btn warn",
            variant: "text",
            icon: /* @__PURE__ */ t(Pr, { size: 16 }),
            onClick: M,
            children: c(a.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ t(B, { variant: "text", theme: "danger", onClick: () => H.requestConfirm(), icon: /* @__PURE__ */ t(Fr, {}), children: c(a.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ u("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ t(
        Bi,
        {
          liveControlSlots: i,
          liveInfo: g,
          liveId: n || "",
          activeTab: D,
          onActiveTabChange: I,
          isAllMuted: Ht,
          allMuteLoading: y.loading,
          onAllMuteChange: Lt,
          memberManagementHook: re,
          onOpenAudienceDropdown: wt,
          onOpenMutedModal: () => {
            re.fetchMutedList(), R(!0);
          },
          onOpenBannedModal: () => {
            re.fetchBannedList(), _(!0);
          },
          onLeaveLive: It,
          t: c
        }
      ),
      /* @__PURE__ */ u("aside", { className: "right-sidebar", children: [
        /* @__PURE__ */ t(
          ji,
          {
            liveInfo: g,
            audienceCount: (g == null ? void 0 : g.onlineCount) || 0,
            liveDuration: Z,
            interactionRate: fe,
            updateTimeText: Ae,
            t: c
          }
        ),
        /* @__PURE__ */ t(ke, { slot: i == null ? void 0 : i.customControlPanel, props: { liveInfo: g } }),
        /* @__PURE__ */ t(
          Zi,
          {
            moderationList: V.moderationList,
            moderationLoading: V.moderationLoading,
            moderationPage: V.moderationPage,
            moderationTotal: V.moderationTotal,
            moderationTotalPages: V.moderationTotalPages,
            moderationSelectedIds: V.moderationSelectedIds,
            isAllOnPageSelected: V.isAllOnPageSelected,
            moderationAvailable: k,
            updateTimeText: Ae,
            onRefresh: V.handleRefreshModeration,
            onPageChange: V.goToModerationPage,
            onBulkApprove: V.handleBulkApprove,
            onBulkDelete: V.handleBulkDelete,
            onToggleSelectOne: V.toggleSelectOne,
            onToggleSelectAll: V.toggleSelectAll,
            onRelease: V.handleRelease,
            onDelete: V.handleDeleteModeration,
            onOpenDropdown: Bt,
            t: c
          }
        )
      ] })
    ] }),
    _e && /* @__PURE__ */ t(
      "div",
      {
        ref: z,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: _e.y,
          left: _e.x - 160
        },
        children: /* @__PURE__ */ u(
          "button",
          {
            className: "dropdown-item",
            onClick: () => {
              const K = _e.item;
              At(), V.handleBypassCorrection(K);
            },
            children: [
              /* @__PURE__ */ t(kt, { size: 14 }),
              c(a.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (W == null ? void 0 : W.visible) && /* @__PURE__ */ u(
      "div",
      {
        ref: U,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: W.y,
          left: W.x - 160
        },
        children: [
          /* @__PURE__ */ t("div", { className: "dropdown-header", children: W.userName }),
          /* @__PURE__ */ t("div", { className: "dropdown-divider" }),
          W.isMuted ? /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item",
              onClick: () => {
                re.handleMuteAudience(
                  W.userId,
                  W.userName,
                  !0
                ), He();
              },
              children: [
                /* @__PURE__ */ t(kt, { size: 14 }),
                c(a.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item",
              onClick: () => {
                re.handleMuteAudience(
                  W.userId,
                  W.userName,
                  !1
                ), He();
              },
              children: [
                /* @__PURE__ */ t(Vr, { size: 14 }),
                c(a.MUTE)
              ]
            }
          ),
          /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item danger",
              onClick: () => {
                re.handleBanAudience(
                  W.userId,
                  W.userName,
                  !1
                ), He();
              },
              children: [
                /* @__PURE__ */ t(Wr, { size: 14 }),
                c(a.BAN)
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ t(
      Ji,
      {
        mutedModalVisible: $,
        bannedModalVisible: L,
        mutedList: re.mutedList,
        bannedList: re.bannedList,
        memberListLoading: re.memberListLoading,
        getUserAvatar: St,
        getUserNameFromCache: Tt,
        onMutedModalClose: () => R(!1),
        onBannedModalClose: () => _(!1),
        onUnmuteFromList: re.handleUnmuteFromList,
        onUnbanFromList: re.handleUnbanFromList,
        t: c
      }
    ),
    (() => {
      const K = H.confirmDialog || y.confirmDialog;
      if (!K) return null;
      const ce = !!H.confirmDialog ? H : y;
      return /* @__PURE__ */ t(
        Ee,
        {
          visible: !0,
          header: K.title,
          onClose: () => ce.cancelConfirm(),
          width: Se.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ u(ue, { children: [
            /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => ce.cancelConfirm(), children: c(a.CANCEL) }),
            /* @__PURE__ */ t(
              B,
              {
                shape: "round",
                theme: K.danger ? "danger" : "primary",
                loading: ce.loading,
                onClick: () => ce.executeWithConfirm(),
                children: ce.loading ? c(a.LOADING) : K.confirmText
              }
            )
          ] }),
          children: /* @__PURE__ */ t("p", { children: K.content })
        }
      );
    })(),
    /* @__PURE__ */ t(
      Qr,
      {
        visible: P.visible,
        liveId: P.liveId,
        liveName: P.liveName,
        onVisibleChange: (K) => F((ne) => ({ ...ne, visible: K }))
      }
    )
  ] });
}
const Qe = 0, nt = 2147483647, at = 1, it = 99, Ur = {
  id: "",
  name: "",
  iconUrl: "",
  price: 0,
  animationUrl: "",
  level: "",
  description: "",
  extensionInfo: "",
  enabled: !0
};
function ro({
  visible: n,
  isEdit: r,
  editingId: e,
  formData: i,
  submitting: c,
  uploadEnabled: o,
  onFormDataChange: s,
  onSubmit: m,
  onClose: l
}) {
  var X, S, ee;
  const { t: d } = Ne();
  (X = yt().components) == null || X.giftConfig;
  const f = Q(null), p = Q(null), [v, h] = b(!1), [N, E] = b(!1), [g, T] = b(!1), [C, O] = b(!1), D = () => {
    var x, W;
    (x = f.current) == null || x.reset(), (W = p.current) == null || W.reset(), h(!1), E(!1);
  }, I = () => {
    D(), l();
  }, w = async () => {
    var $, R, L, _, k;
    if (!i.id.trim()) {
      Y.error(d(a.ENTER_GIFT_ID));
      return;
    }
    if (G(i.id) > Je) {
      Y.error(d(a.GIFT_ID_MAX_BYTES, { max: Je }));
      return;
    }
    if (!i.name.trim()) {
      Y.error(d(a.ENTER_GIFT_NAME));
      return;
    }
    if (G(i.name) > xe) {
      Y.error(d(a.GIFT_NAME_MAX_BYTES, { max: xe }));
      return;
    }
    if (i.description && G(i.description) > Ue) {
      Y.error(d(a.GIFT_DESC_MAX_BYTES, { max: Ue }));
      return;
    }
    const x = parseInt(i.level);
    if (i.level && !isNaN(x) && (x < at || x > it)) {
      Y.error(d(a.GIFT_LEVEL_RANGE, { min: at, max: it }));
      return;
    }
    if (i.price < Qe || i.price > nt) {
      Y.error(d(a.GIFT_PRICE_RANGE, { min: Qe, max: nt }));
      return;
    }
    const W = (($ = f.current) == null ? void 0 : $.isUrlInputMode) ?? !0, q = W && (((_ = (L = (R = f.current) == null ? void 0 : R.urlInputValue) == null ? void 0 : L.trim) == null ? void 0 : _.call(L)) || "");
    if (!v && !i.iconUrl.trim() && !q) {
      W && ((k = f.current) == null || k.setUrlError(d(a.ENTER_THUMBNAIL_URL))), Y.error(d(a.UPLOAD_THUMBNAIL_OR_ENTER_URL));
      return;
    }
    if (i.extensionInfo.trim()) {
      try {
        JSON.parse(i.extensionInfo.trim());
      } catch {
        Y.error(d(a.EXTENSION_INFO_JSON_FORMAT));
        return;
      }
      if (new TextEncoder().encode(i.extensionInfo.trim()).length > 100) {
        Y.error(d(a.EXTENSION_INFO_MAX_BYTES, { max: 100 }));
        return;
      }
    }
    try {
      let H, y;
      try {
        [H, y] = await oa([
          {
            handle: f.current,
            hasPendingFile: v,
            fallbackUrl: i.iconUrl,
            label: d(a.THUMBNAIL)
          },
          {
            handle: p.current,
            hasPendingFile: N,
            fallbackUrl: i.animationUrl,
            label: d(a.GIFT_MATERIAL)
          }
        ]);
      } catch (F) {
        Y.error(F instanceof dr ? F.message : d(a.OPERATION_FAILED, { error: F.message || d(a.UNKNOWN_HOST) }));
        return;
      }
      const P = {
        ...i,
        iconUrl: H,
        animationUrl: y
      };
      s(P), await m();
    } catch (H) {
      Y.error(d(a.OPERATION_FAILED, { error: H.ErrorInfo || H.message || d(a.UNKNOWN_HOST) }));
    }
  };
  return /* @__PURE__ */ t(
    Ee,
    {
      destroyOnClose: !0,
      visible: n,
      header: d(r ? a.EDIT_GIFT : a.CREATE_GIFT),
      onClose: I,
      width: Se.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: I, children: d(a.CANCEL) }),
        /* @__PURE__ */ t(
          B,
          {
            shape: "round",
            theme: "primary",
            onClick: w,
            disabled: c || !r && !i.id || !i.name.trim() || ((S = f.current) == null ? void 0 : S.isValidating) || ((ee = p.current) == null ? void 0 : ee.isValidating) || g || C,
            children: d(c ? r ? a.SAVING : a.CREATING : r ? a.SAVE : a.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        !r && /* @__PURE__ */ t(de, { label: d(a.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ t(
            ge,
            {
              value: i.id,
              onChange: (x) => s({ ...i, id: String(x) }),
              placeholder: d(a.ENTER_GIFT_ID),
              status: G(i.id) > Je ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.id) > Je ? " byte-overflow" : ""}`, children: [
                G(i.id),
                "/",
                Je
              ] })
            }
          ),
          G(i.id) > Je && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: d("Gift ID max bytes", { max: Je }) })
        ] }) }),
        /* @__PURE__ */ t(de, { label: d(a.GIFT_PRICE), requiredMark: !0, children: /* @__PURE__ */ t(
          tr,
          {
            value: i.price,
            onChange: (x) => s({ ...i, price: Number(x) || Qe }),
            min: Qe,
            max: nt,
            decimalPlaces: 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: i.price < Qe || i.price > nt ? d("Gift price range", { min: Qe, max: nt }) : "",
              status: i.price < Qe || i.price > nt ? "error" : "default"
            },
            style: { width: "100%" },
            placeholder: d(a.ENTER_GIFT_PRICE)
          }
        ) }),
        /* @__PURE__ */ t(de, { label: d(a.GIFT_LEVEL), children: /* @__PURE__ */ t(
          tr,
          {
            value: i.level ? parseInt(i.level) : void 0,
            onChange: (x) => {
              if (x == null) {
                s({ ...i, level: "" });
                return;
              }
              s({ ...i, level: String(x) });
            },
            min: at,
            max: it,
            allowInputOverLimit: !0,
            inputProps: {
              tips: (() => {
                const x = parseInt(i.level);
                return !isNaN(x) && (x < at || x > it) ? d("Gift level range", { min: at, max: it }) : "";
              })(),
              status: (() => {
                const x = parseInt(i.level);
                return !isNaN(x) && (x < at || x > it) ? "error" : "default";
              })()
            },
            style: { width: "100%" },
            placeholder: d(a.ENTER_GIFT_LEVEL)
          }
        ) }),
        /* @__PURE__ */ t(de, { label: d(a.THUMBNAIL), requiredMark: !0, children: /* @__PURE__ */ t(
          Vt,
          {
            ref: f,
            value: i.iconUrl,
            onChange: (x) => {
              s({ ...i, iconUrl: x }), h(!1);
            },
            type: "gift-icon",
            uploadEnabled: o,
            cropEnabled: !0,
            aspectRatio: 1,
            placeholder: d(a.CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
            previewWidth: 120,
            previewHeight: 120,
            maxSize: 5,
            maxBytes: 200,
            deferUpload: o,
            onFileReady: (x) => h(!!x),
            onUrlErrorChange: T
          }
        ) }),
        /* @__PURE__ */ t(de, { label: d(a.GIFT_MATERIAL), children: /* @__PURE__ */ t(
          Vt,
          {
            ref: p,
            value: i.animationUrl,
            onChange: (x) => {
              s({ ...i, animationUrl: x }), E(!1);
            },
            type: "gift-animation",
            uploadEnabled: o,
            cropEnabled: !1,
            placeholder: d(a.CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
            previewWidth: 120,
            previewHeight: 120,
            maxSize: 10,
            accept: "video/mp4,.svga",
            acceptHint: d("Support MP4/SVGA max 10MB"),
            maxBytes: 200,
            deferUpload: o,
            skipSvgaValidation: !0,
            onFileReady: (x) => E(!!x),
            onUrlErrorChange: O
          }
        ) }),
        /* @__PURE__ */ t(de, { label: d(a.GIFT_NAME), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ t(
            ge,
            {
              value: i.name,
              onChange: (x) => s({ ...i, name: String(x) }),
              placeholder: d(a.ENTER_GIFT_NAME),
              status: G(i.name) > xe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.name) > xe ? " byte-overflow" : ""}`, children: [
                G(i.name),
                "/",
                xe
              ] })
            }
          ),
          G(i.name) > xe && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: d("Gift name max bytes", { max: xe }) })
        ] }) }),
        /* @__PURE__ */ t(de, { label: d(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ t(
            ge,
            {
              value: i.description,
              onChange: (x) => s({ ...i, description: String(x) }),
              placeholder: d(a.ENTER_GIFT_DESCRIPTION),
              status: G(i.description) > Ue ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.description) > Ue ? " byte-overflow" : ""}`, children: [
                G(i.description),
                "/",
                Ue
              ] })
            }
          ),
          G(i.description) > Ue && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: d("Gift desc max bytes", { max: Ue }) })
        ] }) }),
        /* @__PURE__ */ t(de, { label: d(a.CUSTOM_EXTENSION_INFO), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ u("div", { className: "textarea-count-wrapper", children: [
            /* @__PURE__ */ t(
              Nn,
              {
                value: i.extensionInfo,
                onChange: (x) => s({ ...i, extensionInfo: String(x) }),
                placeholder: 'JSON 格式例如：{"key":"value"}',
                autosize: { minRows: 3 },
                status: G(i.extensionInfo) > gt ? "error" : "default"
              }
            ),
            /* @__PURE__ */ u("span", { className: `textarea-suffix-count${G(i.extensionInfo) > gt ? " byte-overflow" : ""}`, children: [
              G(i.extensionInfo),
              "/",
              gt
            ] })
          ] }),
          G(i.extensionInfo) > gt && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: d("Extension info max bytes", { max: gt }) })
        ] }) })
      ] })
    },
    `gift-edit-${e}`
  );
}
function no({
  visible: n,
  editingId: r,
  giftLangConfig: e,
  onClose: i,
  onEditLang: c,
  onClearLang: o
}) {
  const { t: s } = Ne();
  return /* @__PURE__ */ t(
    Ee,
    {
      visible: n,
      header: s(a.GIFT_MULTILINGUAL_CONFIG),
      onClose: i,
      width: Se.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: i, children: s(a.CLOSE) }),
      children: /* @__PURE__ */ u("div", { className: "gift-lang-config-container", children: [
        /* @__PURE__ */ u("div", { className: "gift-lang-config-info-banner", children: [
          /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ t("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
            /* @__PURE__ */ t("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
            /* @__PURE__ */ t("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
          ] }),
          /* @__PURE__ */ t("span", { children: s(a.MULTILINGUAL_CONFIG_TIP) })
        ] }),
        /* @__PURE__ */ u("table", { className: "gift-lang-config-table", children: [
          /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ u("tr", { children: [
            /* @__PURE__ */ t("th", { children: s(a.LANGUAGE_TYPE) }),
            /* @__PURE__ */ t("th", { children: s(a.GIFT_NAME) }),
            /* @__PURE__ */ t("th", { children: s(a.DESCRIPTION) }),
            /* @__PURE__ */ t("th", { children: s(a.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ t("tbody", { children: $r.map((m) => {
            const l = e[m], d = We[m];
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ t("td", { children: s(d.label) }),
              /* @__PURE__ */ t("td", { className: "gift-lang-table-cell-name", children: l.name || /* @__PURE__ */ t("span", { className: "gift-lang-table-empty", children: s(a.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ t("td", { className: "gift-lang-table-cell-desc", children: l.description || /* @__PURE__ */ t("span", { className: "gift-lang-table-empty", children: s(a.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ t("td", { children: /* @__PURE__ */ t(
                je,
                {
                  actions: [
                    {
                      key: "edit",
                      label: s(a.EDIT),
                      onClick: () => r && c(r, m)
                    },
                    {
                      key: "clear",
                      label: s(a.CLEAR),
                      danger: !0,
                      disabled: !l.name && !l.description,
                      onClick: () => r && o(r, m)
                    }
                  ]
                }
              ) })
            ] }, m);
          }) })
        ] })
      ] })
    }
  );
}
function ao({
  visible: n,
  editingGiftForLang: r,
  editingLang: e,
  langEditForm: i,
  onFormChange: c,
  onSave: o,
  onClose: s
}) {
  const { t: m } = Ne();
  return /* @__PURE__ */ t(
    Ee,
    {
      destroyOnClose: !0,
      visible: n && !!e,
      header: e ? m(a.EDIT_GIFT_LANGUAGE_INFO, { lang: m(We[e].label) }) : "",
      onClose: s,
      width: Se.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: s, children: m(a.CANCEL) }),
        /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: o, children: m("Save") })
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        /* @__PURE__ */ t(de, { label: m(a.GIFT_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ t(
            ge,
            {
              value: i.name,
              onChange: (l) => {
                c({ ...i, name: String(l) });
              },
              placeholder: e ? m("Enter language gift name", { lang: m(We[e].label) }) : "",
              status: G(i.name) > xe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.name) > xe ? " byte-overflow" : ""}`, children: [
                G(i.name),
                "/",
                xe
              ] })
            }
          ),
          G(i.name) > xe && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: m("Gift name max bytes", { max: xe }) })
        ] }) }),
        /* @__PURE__ */ t(de, { label: m(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ t(
            ge,
            {
              value: i.description,
              onChange: (l) => {
                c({ ...i, description: String(l) });
              },
              placeholder: e ? m("Enter language gift description", { lang: m(We[e].label) }) : "",
              status: G(i.description) > Ue ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.description) > Ue ? " byte-overflow" : ""}`, children: [
                G(i.description),
                "/",
                Ue
              ] })
            }
          ),
          G(i.description) > Ue && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: m("Gift desc max bytes", { max: Ue }) })
        ] }) })
      ] })
    },
    `lang-edit-${r}-${e}`
  );
}
const { Option: io } = lr;
function oo({
  visible: n,
  editingCategoryGift: r,
  giftCategoryIds: e,
  allCategories: i,
  availableCategories: c,
  selectedCategoryId: o,
  categoryAddPopVisible: s,
  categoryDeleteVisible: m,
  deletingCategoryId: l,
  onRemoveCategory: d,
  onAddCategoryConfirm: f,
  onSelectCategory: p,
  onToggleAddPop: v,
  onConfirmRemoveCategory: h,
  onClose: N,
  onCloseDeleteDialog: E
}) {
  const { t: g } = Ne();
  return /* @__PURE__ */ u(ue, { children: [
    /* @__PURE__ */ t(
      Ee,
      {
        visible: n && !!r,
        header: g(a.EDIT_GIFT_CATEGORY),
        onClose: N,
        width: Se.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: N, children: g(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "gift-category-edit-tags", children: [
          e.map((T) => {
            const C = i.find((D) => String(D.id) === String(T)), O = (C == null ? void 0 : C.name) || T;
            return /* @__PURE__ */ u("span", { className: "gift-category-edit-tag", children: [
              O,
              /* @__PURE__ */ t("button", { className: "gift-category-edit-tag-close", onClick: () => d(T), children: /* @__PURE__ */ t("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ t("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, T);
          }),
          /* @__PURE__ */ t("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ u(B, { variant: "text", theme: "primary", onClick: () => v(!s), children: [
            "+ ",
            g(a.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: s,
        header: g(a.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ t(B, { shape: "round", theme: "primary", disabled: !o, onClick: f, children: g(a.CONFIRM) }),
        children: /* @__PURE__ */ u("div", { className: "category-select-list", children: [
          /* @__PURE__ */ t(
            lr,
            {
              value: o,
              onChange: (T) => p(String(T)),
              placeholder: g(a.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: c.map((T) => /* @__PURE__ */ t(io, { value: T.id, label: T.name }, T.id))
            }
          ),
          c.length === 0 && /* @__PURE__ */ t("div", { className: "category-select-empty", children: g(a.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: m,
        header: g(a.CONFIRM_REMOVE_CATEGORY),
        onClose: E,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: E, children: g(a.CANCEL) }),
          /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: h, children: g(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ t("p", { children: g(a.REMOVE_CATEGORY_DESCRIPTION) })
      }
    )
  ] });
}
function so({
  visible: n,
  deletingItem: r,
  onConfirm: e,
  onClose: i
}) {
  const { t: c } = Ne();
  return /* @__PURE__ */ t(
    Ee,
    {
      visible: n && !!r,
      header: c(a.CONFIRM_DELETE_GIFT),
      onClose: i,
      width: Se.GIFT_DELETE,
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: i, children: c(a.CANCEL) }),
        /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: e, children: c(a.DELETE) })
      ] }),
      children: /* @__PURE__ */ t("p", { children: c(a.CANNOT_UNDO_AFTER_DELETE) })
    }
  );
}
function co() {
  var e;
  const { t: n } = Ti(), r = (e = yt().components) == null ? void 0 : e.giftConfig;
  return (i) => {
    const {
      onEdit: c,
      onDelete: o,
      onOpenCategoryEdit: s,
      onOpenLangEdit: m,
      onOpenGiftLangConfig: l
    } = i, d = [
      {
        key: "id",
        title: n(a.GIFT_ID),
        fitContent: !0,
        flexible: !0,
        // id / name / description / categories 一组 flexible 列，容器收窄时按 raw 权重等比
        // 压缩，让 description 等长内容能被压到内容宽度以下、触发 .col-desc 上的
        // word-break: break-all 折行（与 demo 行为一致）。
        //
        // 折行能力本身依赖两件事都成立：
        // 1) FixedHeaderTable 不能给 flexible 列内联 white-space: nowrap（会覆盖 class）；
        // 2) .col-id 在共享 CSS 里也写 word-break: break-all。
        // 任何一个缺失，id 列就会变成单行溢出而不是多行折行。
        minWidth: 64,
        maxWidth: 120,
        className: "col-id",
        render: (f) => /* @__PURE__ */ u("div", { className: "gift-id", children: [
          /* @__PURE__ */ t("span", { className: "gift-id-text", children: f.id || "-" }),
          /* @__PURE__ */ t(
            qe,
            {
              className: "copy-icon",
              size: 14,
              onClick: () => i.onCopyId(String(f.id || ""))
            }
          )
        ] })
      },
      {
        key: "iconUrl",
        title: n(a.THUMBNAIL),
        width: 100,
        className: "col-thumbnail",
        render: (f) => /* @__PURE__ */ t("div", { className: "gift-thumbnail", children: f.iconUrl ? /* @__PURE__ */ t("img", { src: f.iconUrl, alt: f.name || "gift" }) : /* @__PURE__ */ t("span", { children: "🎁" }) })
      },
      {
        key: "name",
        title: n(a.NAME),
        fitContent: !0,
        flexible: !0,
        minWidth: 80,
        maxWidth: 180,
        className: "col-name",
        render: (f) => /* @__PURE__ */ t("span", { className: "gift-name", children: f.name || "-" })
      },
      {
        key: "description",
        title: n(a.DESCRIPTION),
        fitContent: !0,
        flexible: !0,
        // minWidth 故意压低：让空/短内容时列宽随内容收缩，
        // 表头文字"Description"已经构成天然下界（≈95px）。
        // 之前 minWidth=200 会让"内容是 '-'"的行也被强行撑成 200px，
        // 既造成大量空白，又把总表宽顶超容器导致操作列被横向滚动条推出可视区。
        minWidth: 80,
        maxWidth: 400,
        className: "col-desc",
        render: (f) => /* @__PURE__ */ t("span", { children: f.description || "-" })
      },
      {
        key: "categories",
        title: n(a.CATEGORY),
        fitContent: !0,
        flexible: !0,
        minWidth: 80,
        maxWidth: 220,
        className: "col-category",
        render: (f) => {
          var p;
          return /* @__PURE__ */ u("div", { className: "gift-category-cell", onClick: () => s(f), children: [
            /* @__PURE__ */ t("span", { children: ((p = f.categories) == null ? void 0 : p.join(", ")) || "-" }),
            /* @__PURE__ */ t(er, { className: "gift-category-edit-icon", size: 14 })
          ] });
        }
      },
      {
        key: "languageList",
        title: n(a.MULTILINGUAL_CONFIG),
        width: 180,
        className: "gift-col-lang",
        render: (f) => /* @__PURE__ */ u("div", { className: "gift-lang-tags", children: [
          f.languageList && f.languageList.length > 0 ? f.languageList.map((p) => {
            const v = sa(p), h = qr[v], N = h ? We[h] : null;
            return /* @__PURE__ */ t(
              "span",
              {
                className: "gift-lang-tag",
                onClick: () => h && m(f.id, h),
                children: N ? n(N.label) : v
              },
              v
            );
          }) : /* @__PURE__ */ t("span", { className: "gift-lang-empty", children: "-" }),
          /* @__PURE__ */ t(
            er,
            {
              className: "gift-lang-edit-icon",
              size: 14,
              onClick: () => l(f.id)
            }
          )
        ] })
      },
      {
        key: "level",
        title: n(a.LEVEL),
        fitContent: !0,
        minWidth: 64,
        maxWidth: 96,
        className: "col-level",
        render: (f) => f.level || "-"
      },
      {
        key: "price",
        title: n(a.PRICE),
        fitContent: !0,
        minWidth: 64,
        maxWidth: 120,
        className: "col-price",
        render: (f) => /* @__PURE__ */ t("span", { className: "gift-price", children: f.price ?? 0 })
      },
      {
        key: "createdAt",
        title: n(a.CREATE_TIME),
        width: 180,
        className: "gift-col-time",
        render: (f) => /* @__PURE__ */ t("span", { className: "gift-create-time", children: ca(f.createdAt) })
      }
    ];
    return r != null && r.giftTableExtraColumns && d.push({
      key: "customer-extra",
      title: "",
      width: 160,
      className: "gift-col-customer-extra",
      render: (f) => /* @__PURE__ */ t(ke, { slot: r.giftTableExtraColumns, props: { gift: f } })
    }), d.push({
      key: "actions",
      title: n(a.ACTIONS),
      fitContent: !0,
      minWidth: 120,
      maxWidth: 320,
      className: "gift-col-action",
      render: (f) => /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ t(
          je,
          {
            actions: [
              {
                key: "edit",
                label: n(a.EDIT),
                onClick: () => c(f)
              },
              {
                key: "delete",
                label: n(a.DELETE),
                danger: !0,
                onClick: () => o(f)
              }
            ]
          }
        ),
        /* @__PURE__ */ t(ke, { slot: r == null ? void 0 : r.giftRowActions, props: { gift: f } })
      ] })
    }), d;
  };
}
function Ro() {
  const { t: n } = Ne(), r = Zr(), e = _t(), i = co(), c = Q(null);
  c.current || (c.current = new la({
    actions: r,
    t: n,
    toast: Y,
    onNavigateToCategoryManagement: () => e("/gift-category")
  }));
  const o = c.current, s = nr(o.subscribe, o.getState, o.getState);
  J(() => (o.init(), () => o.dispose()), []), J(() => {
    const Z = () => o.onLanguageChanged();
    return Ut.on("languageChanged", Z), () => {
      Ut.off("languageChanged", Z);
    };
  }, [o]);
  const [m, l] = b(!1), [d, f] = b(!1);
  J(() => {
    Xr().then(f);
  }, []);
  const [p, v] = b(Ur), [h, N] = b(!1), E = Q(null), {
    loading: g,
    displayList: T,
    searchInput: C,
    dialogVisible: O,
    isEdit: D,
    editingId: I,
    langConfigVisible: w,
    giftLangConfig: X,
    langEditVisible: S,
    editingLang: ee,
    editingGiftForLang: x,
    langEditForm: W,
    categoryEditVisible: q,
    editingCategoryGift: $,
    allCategories: R,
    giftCategoryIds: L,
    selectedCategoryId: _,
    categoryDeleteVisible: k,
    deletingCategoryId: H,
    deleteDialogVisible: y,
    deletingItem: P
  } = s, F = R.filter((Z) => !L.includes(Z.id)), M = () => {
    v(Ur), o.openCreateDialog();
  }, U = (Z) => {
    v({
      id: Z.id,
      name: Z.name,
      iconUrl: Z.iconUrl,
      price: Z.price,
      animationUrl: Z.animationUrl || "",
      level: Z.level || "",
      description: Z.description || "",
      extensionInfo: Z.extensionInfo || "",
      enabled: Z.enabled ?? !0
    }), o.openEditDialog(Z);
  }, z = async () => {
    l(!0);
    try {
      await o.submitGift({
        id: p.id,
        name: p.name,
        iconUrl: p.iconUrl,
        price: p.price,
        animationUrl: p.animationUrl,
        enabled: p.enabled,
        level: p.level || void 0,
        description: p.description,
        extensionInfo: p.extensionInfo
      });
    } catch {
    } finally {
      l(!1);
    }
  }, te = async () => {
    await o.confirmAddCategory(), N(!1);
  }, oe = i({
    onEdit: U,
    onDelete: (Z) => o.requestDelete(Z),
    onOpenCategoryEdit: (Z) => o.openCategoryEditDialog(Z),
    onOpenLangEdit: (Z, he) => void o.openLangEditDialog(Z, he),
    onOpenGiftLangConfig: (Z) => void o.openGiftLangConfigDialog(Z),
    onCopyId: (Z) => o.copyGiftId(Z)
  });
  return /* @__PURE__ */ u("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ t("h1", { className: "gift-config-title", children: n(a.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ u("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ t(
          ge,
          {
            value: C,
            onChange: (Z) => o.setSearchInput(String(Z ?? "")),
            onEnter: () => {
              if (o.isSearchInputTooLong()) {
                Y.error(n(a.INPUT_TOO_LONG));
                return;
              }
              o.search();
            },
            clearable: !0,
            onClear: () => o.clearSearch(),
            placeholder: n(a.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ t(ar, { size: 16 }),
            className: "gift-config-search-input",
            status: yr(C, _r) ? "error" : "default",
            tips: yr(C, _r) ? n(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: () => o.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ t(pn, {}), children: n(a.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ u(B, { shape: "round", onClick: M, theme: "primary", children: [
          "＋ ",
          n(a.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(zr, { className: "gift-list-card", ref: E, children: /* @__PURE__ */ t(
      zt,
      {
        columns: oe,
        data: T,
        rowKey: "id",
        loading: g,
        tableClassName: "gift-table",
        bodyClassName: "gift-list-content",
        rowClassName: "gift-row",
        loadingNode: /* @__PURE__ */ u("div", { className: "gift-loading-container", children: [
          /* @__PURE__ */ t("div", { className: "gift-loading-spinner" }),
          /* @__PURE__ */ t("span", { className: "gift-loading-text", children: n(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ t("div", { className: "gift-empty-container", children: /* @__PURE__ */ t("span", { className: "gift-empty-text", children: n(a.NO_GIFT_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ t(
      ro,
      {
        visible: O,
        isEdit: D,
        editingId: I,
        formData: p,
        submitting: m,
        uploadEnabled: d,
        onFormDataChange: v,
        onSubmit: z,
        onClose: () => o.closeDialog()
      }
    ),
    /* @__PURE__ */ t(
      no,
      {
        visible: w,
        editingId: I,
        giftLangConfig: X,
        onClose: () => o.closeGiftLangConfigDialog(),
        onEditLang: (Z, he) => void o.openLangEditDialog(Z, he),
        onClearLang: (Z, he) => void o.clearLang(Z, he)
      }
    ),
    /* @__PURE__ */ t(
      ao,
      {
        visible: S,
        editingGiftForLang: x,
        editingLang: ee,
        langEditForm: W,
        onFormChange: (Z) => o.setLangEditForm(Z),
        onSave: () => void o.saveLangEdit(),
        onClose: () => o.closeLangEditDialog()
      }
    ),
    /* @__PURE__ */ t(
      oo,
      {
        visible: q,
        editingCategoryGift: $,
        giftCategoryIds: L,
        allCategories: R,
        availableCategories: F,
        selectedCategoryId: _,
        categoryAddPopVisible: h,
        categoryDeleteVisible: k,
        deletingCategoryId: H,
        onRemoveCategory: (Z) => o.requestRemoveCategory(Z),
        onAddCategoryConfirm: te,
        onSelectCategory: (Z) => o.setSelectedCategoryId(Z),
        onToggleAddPop: N,
        onConfirmRemoveCategory: () => void o.confirmRemoveCategory(),
        onClose: () => o.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => o.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ t(
      so,
      {
        visible: y,
        deletingItem: P,
        onConfirm: () => void o.confirmDelete(),
        onClose: () => o.cancelDelete()
      }
    )
  ] });
}
function Mo() {
  const { t: n } = Ne(), r = _t(), e = Zr(), i = Q(null);
  i.current || (i.current = new da({
    actions: {
      fetchGiftList: e.fetchGiftList,
      createGiftCategory: e.createGiftCategory,
      updateGiftCategory: e.updateGiftCategory,
      deleteGiftCategory: e.deleteGiftCategory,
      getGiftCategoryLanguage: e.getGiftCategoryLanguage,
      setGiftCategoryLanguage: e.setGiftCategoryLanguage,
      deleteGiftCategoryLanguage: e.deleteGiftCategoryLanguage
    },
    t: n,
    toast: Y,
    onNavigateBack: () => r("/gift-config")
  }));
  const c = i.current, o = nr(c.subscribe, c.getState, c.getState);
  J(() => (c.init(), () => c.dispose()), []), J(() => {
    const h = () => c.onLanguageChanged();
    return Ut.on("languageChanged", h), () => {
      Ut.off("languageChanged", h);
    };
  }, [c]);
  const [s, m] = b(!1), l = Q(null), [d, f] = b(600);
  J(() => {
    const h = () => {
      if (!l.current) return;
      const E = window.innerHeight, g = l.current.closest(".gift-category-table-wrapper");
      if (!g) return;
      const T = g.getBoundingClientRect(), C = E - T.top - 60 - 24;
      f(Math.max(200, C));
    };
    h(), window.addEventListener("resize", h);
    const N = new ResizeObserver(h);
    return l.current && N.observe(l.current), () => {
      window.removeEventListener("resize", h), N.disconnect();
    };
  }, []);
  const p = async () => {
    const { categoryId: h, name: N, description: E } = o.formData;
    if (!h.trim()) {
      Y.error(n(a.ENTER_CATEGORY_ID));
      return;
    }
    if (!N.trim()) {
      Y.error(n(a.ENTER_CATEGORY_NAME));
      return;
    }
    m(!0);
    try {
      await c.submitForm({
        categoryId: h.trim(),
        name: N.trim(),
        description: E.trim()
      });
    } catch {
    } finally {
      m(!1);
    }
  }, v = async () => {
    const { langEditForm: h } = o;
    if (h.name && G(h.name) > Oe) {
      Y.error(n("Category name max bytes", { max: Oe }));
      return;
    }
    if (h.description && G(h.description) > De) {
      Y.error(n("Category desc max bytes", { max: De }));
      return;
    }
    await c.saveLangEdit();
  };
  return /* @__PURE__ */ u("div", { className: "gift-category-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-category-page-header", children: [
      /* @__PURE__ */ u("div", { className: "gift-category-title-section", children: [
        /* @__PURE__ */ t(
          B,
          {
            shape: "square",
            variant: "text",
            className: "back-btn",
            onClick: () => c.goBack(),
            icon: /* @__PURE__ */ t("svg", { viewBox: Xe.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Xe.strokeWidth, strokeLinecap: Xe.strokeLinecap, children: /* @__PURE__ */ t("path", { d: Xe.path }) })
          }
        ),
        /* @__PURE__ */ t("h1", { children: n("Category Management") })
      ] }),
      /* @__PURE__ */ t("div", { className: "gift-category-actions", children: /* @__PURE__ */ u("div", { className: `create-category-btn-wrapper${o.categoryList.length >= $t ? " disabled" : ""}`, children: [
        /* @__PURE__ */ u(
          B,
          {
            shape: "round",
            theme: "primary",
            onClick: () => c.openCreateDialog(),
            disabled: o.categoryList.length >= $t,
            children: [
              "＋ ",
              n("Add Category")
            ]
          }
        ),
        o.categoryList.length >= $t && /* @__PURE__ */ t("div", { className: "create-category-tooltip", children: n("Category limit reached") })
      ] }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "gift-category-table-wrapper", ref: l, children: /* @__PURE__ */ t(
      zt,
      {
        columns: [
          {
            key: "id",
            title: n("Category ID"),
            width: 120,
            className: "col-id",
            render: (h) => /* @__PURE__ */ u("div", { className: "gift-id", children: [
              /* @__PURE__ */ t("span", { className: "gift-id-text", children: h.id || "-" }),
              /* @__PURE__ */ t(
                qe,
                {
                  className: "copy-icon",
                  size: 14,
                  onClick: () => c.copyCategoryId(h.id)
                }
              )
            ] })
          },
          {
            key: "name",
            title: n("Category Name"),
            className: "col-name",
            render: (h) => /* @__PURE__ */ t("span", { className: "category-name", children: h.name || "-" })
          },
          {
            key: "description",
            title: n("Category Description"),
            className: "col-desc",
            render: (h) => /* @__PURE__ */ t("span", { className: "category-desc", children: h.description || "-" })
          },
          {
            key: "languageList",
            title: n(a.MULTILINGUAL_CONFIG),
            width: 200,
            className: "col-languages",
            render: (h) => /* @__PURE__ */ u("div", { className: "category-lang-tags", children: [
              h.languageList && h.languageList.length > 0 ? h.languageList.map((N) => {
                const E = typeof N == "string" ? N : N.language || "", g = qr[E], T = g ? We[g] : null;
                return /* @__PURE__ */ t(
                  "span",
                  {
                    className: "category-lang-tag",
                    onClick: () => h && g && c.openLangEditDialog(h.id, g),
                    children: T ? n(T.label) : E
                  },
                  E
                );
              }) : /* @__PURE__ */ t("span", { className: "category-lang-empty", children: "-" }),
              /* @__PURE__ */ t(
                "svg",
                {
                  className: "category-lang-edit-icon",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  onClick: () => h && c.openLangConfigDialog(h.id),
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ t("path", { d: "M10.5 3.5L12.5 5.5M2 14L2.5 11.5L11 3L13 5L4.5 13.5L2 14Z", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })
                }
              )
            ] })
          },
          {
            key: "giftCount",
            title: n("Number of Gifts"),
            width: 80,
            className: "col-count",
            render: (h) => /* @__PURE__ */ t("span", { className: "category-count", children: h.giftCount ?? 0 })
          },
          {
            key: "actions",
            title: n(a.ACTIONS),
            fitContent: !0,
            minWidth: 100,
            maxWidth: 220,
            className: "col-actions",
            render: (h) => /* @__PURE__ */ t(
              je,
              {
                actions: [
                  {
                    key: "edit",
                    label: n(a.EDIT),
                    onClick: () => h && c.openEditDialog(h)
                  },
                  {
                    key: "delete",
                    label: n(a.DELETE),
                    danger: !0,
                    onClick: () => h && c.requestDelete(h)
                  }
                ]
              }
            )
          }
        ],
        data: o.categoryList,
        rowKey: "id",
        loading: o.loading,
        tableClassName: "category-table",
        bodyClassName: "category-list-content",
        bodyStyle: { maxHeight: d },
        loadingNode: /* @__PURE__ */ u("div", { className: "category-loading-container", children: [
          /* @__PURE__ */ t("div", { className: "category-loading-spinner" }),
          /* @__PURE__ */ t("span", { className: "category-loading-text", children: n(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ t("div", { className: "category-empty-container", children: /* @__PURE__ */ t("span", { className: "category-empty-text", children: n("Create category first") }) })
      }
    ) }),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: o.dialogVisible,
        header: o.isEdit ? n(a.EDIT_CATEGORY) : n(a.CREATE_CATEGORY),
        onClose: () => c.closeDialog(),
        width: Se.CATEGORY_FORM,
        placement: "center",
        className: "category-dialog",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => c.closeDialog(), children: n(a.CANCEL) }),
          /* @__PURE__ */ t(
            B,
            {
              shape: "round",
              theme: "primary",
              onClick: p,
              disabled: s || !o.formData.categoryId.trim() || !o.formData.name.trim(),
              children: s ? n("Creating...") : o.isEdit ? n("Save") : n("Create")
            }
          )
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ t(de, { label: n("Category ID"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: o.formData.categoryId,
                onChange: (h) => c.setFormData({ categoryId: String(h) }),
                placeholder: n("Enter category ID"),
                disabled: o.isEdit,
                status: G(o.formData.categoryId) > vt ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.formData.categoryId) > vt ? " byte-overflow" : ""}`, children: [
                  G(o.formData.categoryId),
                  "/",
                  vt
                ] })
              }
            ),
            G(o.formData.categoryId) > vt && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: n("Category ID max bytes", { max: vt }) })
          ] }) }),
          /* @__PURE__ */ t(de, { label: n("Category Name"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: o.formData.name,
                onChange: (h) => c.setFormData({ name: String(h) }),
                placeholder: n("Enter category name"),
                status: G(o.formData.name) > Oe ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.formData.name) > Oe ? " byte-overflow" : ""}`, children: [
                  G(o.formData.name),
                  "/",
                  Oe
                ] })
              }
            ),
            G(o.formData.name) > Oe && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: n("Category name max bytes", { max: Oe }) })
          ] }) }),
          /* @__PURE__ */ t(de, { label: n(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: o.formData.description,
                onChange: (h) => c.setFormData({ description: String(h) }),
                placeholder: n("Enter category description"),
                status: G(o.formData.description) > De ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.formData.description) > De ? " byte-overflow" : ""}`, children: [
                  G(o.formData.description),
                  "/",
                  De
                ] })
              }
            ),
            G(o.formData.description) > De && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: n("Category desc max bytes", { max: De }) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: o.langConfigVisible,
        header: n(a.CATEGORY_MULTILINGUAL_CONFIG),
        onClose: () => c.closeLangConfigDialog(),
        width: Se.GIFT_LANG_CONFIG,
        placement: "center",
        className: "category-lang-config-dialog",
        footer: /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: () => c.closeLangConfigDialog(), children: n(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "category-lang-config-container", children: [
          /* @__PURE__ */ u("div", { className: "category-lang-config-info-banner", children: [
            /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
              /* @__PURE__ */ t("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
              /* @__PURE__ */ t("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
              /* @__PURE__ */ t("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
            ] }),
            /* @__PURE__ */ t("span", { children: n(a.CATEGORY_MULTILINGUAL_CONFIG_TIP) })
          ] }),
          /* @__PURE__ */ u("table", { className: "category-lang-config-table", children: [
            /* @__PURE__ */ t("thead", { children: /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ t("th", { children: n(a.LANGUAGE_TYPE) }),
              /* @__PURE__ */ t("th", { children: n(a.CATEGORY_NAME) }),
              /* @__PURE__ */ t("th", { children: n(a.CATEGORY_DESCRIPTION) }),
              /* @__PURE__ */ t("th", { children: n(a.ACTIONS) })
            ] }) }),
            /* @__PURE__ */ t("tbody", { children: $r.map((h) => {
              const N = o.categoryLangConfig[h], E = We[h];
              return /* @__PURE__ */ u("tr", { children: [
                /* @__PURE__ */ t("td", { children: n(E.label) }),
                /* @__PURE__ */ t("td", { className: "category-lang-table-cell-name", children: N.name || /* @__PURE__ */ t("span", { className: "category-lang-table-empty", children: n(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ t("td", { className: "category-lang-table-cell-desc", children: N.description || /* @__PURE__ */ t("span", { className: "category-lang-table-empty", children: n(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ t("td", { children: /* @__PURE__ */ t(
                  je,
                  {
                    actions: [
                      {
                        key: "edit",
                        label: n(a.EDIT),
                        onClick: () => o.editingId && c.openLangEditDialog(o.editingId, h)
                      },
                      {
                        key: "clear",
                        label: n(a.CLEAR),
                        danger: !0,
                        disabled: !N.name && !N.description,
                        onClick: () => o.editingId && c.clearLang(o.editingId, h)
                      }
                    ]
                  }
                ) })
              ] }, h);
            }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        destroyOnClose: !0,
        visible: o.langEditVisible && !!o.editingLang,
        header: o.editingLang ? n(a.EDIT_CATEGORY_LANGUAGE_INFO, { lang: n(We[o.editingLang].label) }) : "",
        onClose: () => c.closeLangEditDialog(),
        width: Se.GIFT_EDIT,
        placement: "center",
        className: "category-lang-edit-modal",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => c.closeLangEditDialog(), children: n(a.CANCEL) }),
          /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: v, children: n(a.SAVE) })
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ t(de, { label: n(a.CATEGORY_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: o.langEditForm.name,
                onChange: (h) => c.setLangEditForm({ name: String(h) }),
                placeholder: o.editingLang ? n(a.ENTER_LANGUAGE_CATEGORY_NAME, { lang: n(We[o.editingLang].label) }) : "",
                status: G(o.langEditForm.name) > Oe ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.langEditForm.name) > Oe ? " byte-overflow" : ""}`, children: [
                  G(o.langEditForm.name),
                  "/",
                  Oe
                ] })
              }
            ),
            G(o.langEditForm.name) > Oe && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: n(a.CATEGORY_NAME_MAX_BYTES, { max: Oe }) })
          ] }) }),
          /* @__PURE__ */ t(de, { label: n(a.CATEGORY_DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ t(
              ge,
              {
                value: o.langEditForm.description,
                onChange: (h) => c.setLangEditForm({ description: String(h) }),
                placeholder: o.editingLang ? n(a.ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: n(We[o.editingLang].label) }) : "",
                status: G(o.langEditForm.description) > De ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.langEditForm.description) > De ? " byte-overflow" : ""}`, children: [
                  G(o.langEditForm.description),
                  "/",
                  De
                ] })
              }
            ),
            G(o.langEditForm.description) > De && /* @__PURE__ */ t("div", { className: "form-field__error-tip", children: n(a.CATEGORY_DESC_MAX_BYTES, { max: De }) })
          ] }) })
        ] })
      },
      `cat-lang-edit-${o.editingCategoryForLang}-${o.editingLang ?? ""}`
    ),
    /* @__PURE__ */ t(
      Ee,
      {
        visible: o.deleteDialogVisible && !!o.deletingItem,
        header: n(a.CONFIRM_DELETE_CATEGORY),
        onClose: () => c.cancelDelete(),
        width: Se.GIFT_DELETE,
        placement: "center",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ t(B, { shape: "round", variant: "outline", onClick: () => c.cancelDelete(), children: n(a.CANCEL) }),
          /* @__PURE__ */ t(B, { shape: "round", theme: "primary", onClick: () => c.confirmDelete(), children: n(a.DELETE) })
        ] }),
        children: /* @__PURE__ */ t("p", { children: n(a.CANNOT_UNDO_AFTER_DELETE) })
      }
    )
  ] });
}
let pe = null, ot = !1, le = null;
const Ct = /* @__PURE__ */ new Set();
function lo() {
  return le || (le = new Ca({
    pageSize: 8,
    initialCursor: "0",
    fetchPage: async ({ cursor: n, count: r }) => {
      const e = pe;
      if (!e)
        return { list: [], nextCursor: "" };
      const i = await e.fetchLiveList({ action: "next", count: r }), c = e.getCursor();
      return { list: i, nextCursor: c };
    }
  }), le.subscribe((n) => {
    ot && Ct.forEach((r) => r(n));
  }), le);
}
function uo(n) {
  return Ct.add(n), le && n(le.getSnapshot()), () => {
    Ct.delete(n);
  };
}
function ht() {
  const [n, r] = b([]), [e, i] = b(!0), [c, o] = b(null), [s, m] = b(
    () => ({ pageData: [], currentPage: 1, hasMore: !0, loading: !1 })
  ), l = Q(!0);
  pe || (pe = new ua({
    onStateChange: (S) => {
      ot && (S.liveList !== void 0 && r(S.liveList), S.hasMore !== void 0 && i(S.hasMore), S.currentLive !== void 0 && o(S.currentLive));
    },
    getActive: () => ot
  })), lo(), J(() => (l.current = !0, ot = !0, Ct.add(m), le && m(le.getSnapshot()), () => {
    l.current = !1, ot = !1, Ct.delete(m), setTimeout(() => {
      ot || (pe == null || pe.destroy(), pe = null, le == null || le.destroy(), le = null);
    }, 100);
  }), []);
  const d = A((S) => {
    pe == null || pe.init(S);
  }, []), f = A(async (S) => pe.fetchLiveList(S), []), p = A(async (S) => pe.createLive(S), []), v = A(async (S) => pe.updateLive(S), []), h = A(async (S) => pe.endLive(S), []), N = A(async (S) => pe.fetchLiveDetail(S), []), E = A(async (S) => pe.fetchLiveStats(S), []), g = A((S) => {
    pe == null || pe.setCurrentLive(S);
  }, []), T = A(async (S) => pe.stopPlay(S), []), C = A(async (S) => pe.startPlay(S), [T]), O = A(() => pe.getCursor(), []), D = A(() => (le == null ? void 0 : le.nextPage()) ?? Promise.resolve(), []), I = A(() => (le == null ? void 0 : le.prevPage()) ?? Promise.resolve(), []), w = A(() => (le == null ? void 0 : le.goToFirstPage()) ?? Promise.resolve(), []), X = A(() => (le == null ? void 0 : le.refreshCurrentPage()) ?? Promise.resolve(), []);
  return {
    init: d,
    liveList: n,
    hasMore: e,
    currentLive: c,
    setCurrentLive: g,
    fetchLiveList: f,
    createLive: p,
    updateLive: v,
    endLive: h,
    fetchLiveDetail: N,
    fetchLiveStats: E,
    startPlay: C,
    stopPlay: T,
    getCursor: O,
    paginatedList: {
      pageData: s.pageData,
      currentPage: s.currentPage,
      hasMore: s.hasMore,
      loading: s.loading,
      nextPage: D,
      prevPage: I,
      goToFirstPage: w,
      refreshCurrentPage: X
    }
  };
}
export {
  Mo as G,
  wo as L,
  Y as M,
  Ro as a,
  Ao as b,
  To as c,
  ht as d,
  Li as e,
  Jr as f,
  Si as g,
  Ti as h,
  uo as s,
  Zr as u
};
