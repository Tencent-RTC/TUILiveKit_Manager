import { jsx as e, jsxs as u, Fragment as ue } from "react/jsx-runtime";
import * as Ge from "react";
import st, { useState as _, useRef as ee, useEffect as J, useCallback as A, isValidElement as rn, createElement as nn, Component as an, useMemo as _e, forwardRef as on, useImperativeHandle as sn, useLayoutEffect as mr, useSyncExternalStore as tr } from "react";
import { useUIKit as ve, i18next as Dt } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as rr, RefreshIcon as nr, FullscreenIcon as Ur, NotificationIcon as kr, StopCircleIcon as Pr, UploadIcon as pr, CloseIcon as ar, ImageIcon as cn, CutIcon as ln, ChevronDownIcon as Fr, ChevronRightIcon as ir, AddIcon as or, FileCopyIcon as He, DeleteIcon as dn, EditIcon as Jt, InfoCircleIcon as Be, LoginIcon as un, CheckCircleIcon as xt, ChatOffIcon as Gr, UserCheckedIcon as hn, UserBlockedIcon as Vr, MoreIcon as mn, CloseCircleIcon as pn, ChevronLeftIcon as fn, AdjustmentIcon as gn } from "tdesign-icons-react";
import { MessagePlugin as At, Dialog as ge, Button as Y, Input as fe, Select as sr, InputNumber as Qt, Checkbox as vn, Card as Wr, Tabs as Bt, Switch as En, Tooltip as xe, Loading as Nn, Textarea as Cn } from "tdesign-react";
import { c as yn } from "./config.BhtXZwQl.js";
import { I as a, A as Ht, g as yt, B as cr, y as _n, x as bn, v as zr, D as be, k as lr, T as lt } from "./en-US.CemIGStX.js";
import { w as In, bc as Ln, b1 as Sn, a2 as Tn, a9 as wn, aG as An, aE as Rn, m as Mn, u as On, cp as Dn, co as xn, c0 as Un, b$ as kn, aT as W, N as Nt, a_ as Pn, bQ as Br, bR as Hr, b8 as Fn, b as Gn, _ as Vn, bj as Kr, bm as Wn, a1 as zn, cd as fr, cj as Bn, bB as gr, ch as Hn, cg as Kn, cf as Yn, bL as $n, bA as qn, au as Xn, bK as jn, bD as Zn, aV as Jn, a0 as Qn, ar as vr, A as je, O as ke, aU as ea, bi as ta, bo as ra, br as Ut, i as Ue, ap as na, bS as Yr, x as dr, a4 as aa, c3 as ia, as as Er, Z as Nr, aB as oa, ce as sa, aj as ca, aW as la, R as da, b6 as ua, a6 as ha, aM as ma, $ as Kt, bu as pa, aX as $r, bJ as fa, bg as Ot, b_ as ga, a8 as va, ae as Ea, V as Rt, ac as Na, bn as Ca, aZ as tt, k as ya, bw as Cr, D as _a, a as Ke, q as Ze, r as Me, o as Oe, p as gt, bT as ba, z as qr, F as Pe, b2 as Ia, y as Xr, aP as La, v as Sa, bt as yr, s as _r, t as Ta, T as Yt, d as vt, f as Ae, C as Re, S as wa, aF as Aa } from "./main-layout.CUewak6S.js";
import { c as Ra, g as Ma, s as ur, a as Oa, D as Da, d as xa, e as Ua, m as ka, b as Pa, i as Fa, P as Ga } from "./gift-category.DaeXtH9F.js";
import { E as kt } from "./error.HinSWumo.js";
import { useNavigate as _t, useParams as Va } from "react-router-dom";
import { useLiveListState as Wa, useLoginState as jr, LiveListEvent as br, LiveView as za, useLiveAudienceState as Ba, BarrageList as Ha, LiveAudienceList as Ka } from "tuikit-atomicx-react";
import { c as Ya } from "./t.QkUmzvcB.js";
import { createPortal as $a } from "react-dom";
function Zr() {
  const [r, n] = _([]), [t, i] = _([]), c = ee(null);
  c.current || (c.current = new In({
    onStateChange: (C) => {
      n(C.giftList), i(C.giftCategoryList);
    }
  }));
  const o = c.current;
  J(() => () => {
    o.destroy();
  }, [o]);
  const s = A(
    async (C) => o.fetchGiftList(C),
    [o]
  ), p = A(
    async (C) => o.createGift(C),
    [o]
  ), l = A(
    async (C) => o.updateGift(C),
    [o]
  ), d = A(
    async (C) => o.deleteGift(C),
    [o]
  ), f = A(
    async (C) => o.createGiftCategory(C),
    [o]
  ), g = A(
    async (C) => o.updateGiftCategory(C),
    [o]
  ), v = A(
    async (C) => o.deleteGiftCategory(C),
    [o]
  ), h = A(
    async (C) => o.addGiftCategoryRelations(C),
    [o]
  ), N = A(
    async (C) => o.deleteGiftCategoryRelations(C),
    [o]
  ), m = A(
    async (C) => o.getGiftLanguage(C),
    [o]
  ), T = A(
    async (C) => o.setGiftLanguage(C),
    [o]
  ), w = A(
    async (C) => o.deleteGiftLanguage(C),
    [o]
  ), E = A(
    async (C, I) => o.getGiftCategoryLanguage(C, I),
    [o]
  ), S = A(
    async (C, I, P, B) => o.setGiftCategoryLanguage(C, I, P, B),
    [o]
  ), R = A(
    async (C, I) => o.deleteGiftCategoryLanguage(C, I),
    [o]
  );
  return {
    giftList: r,
    giftCategoryList: t,
    fetchGiftList: s,
    createGift: p,
    updateGift: l,
    deleteGift: d,
    createGiftCategory: f,
    updateGiftCategory: g,
    deleteGiftCategory: v,
    addGiftCategoryRelations: h,
    deleteGiftCategoryRelations: N,
    getGiftLanguage: m,
    setGiftLanguage: T,
    deleteGiftLanguage: w,
    getGiftCategoryLanguage: E,
    setGiftCategoryLanguage: S,
    deleteGiftCategoryLanguage: R
  };
}
function Jr(r) {
  const { liveId: n, pageSize: t } = r, [i, c] = _(!1), [o, s] = _(0), [p, l] = _([]), [d, f] = _(1), [g, v] = _(0), [h, N] = _(!1), [m, T] = _([]), [w, E] = _([]), [S, R] = _(!1), [C, I] = _(null), P = ee(!0);
  J(() => (P.current = !0, () => {
    P.current = !1;
  }), []);
  const B = A(async () => {
    try {
      const b = await Ln();
      return P.current && (c(b > 0), s(b)), b;
    } catch (b) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", b), b;
    }
  }, []), H = A(async (b = {}) => {
    N(!0);
    try {
      const G = await Sn({ pageSize: t, liveId: n, ...b });
      return P.current && (l(G.list || []), f(b.pageNum || 1), v(G.total || 0)), G;
    } catch (G) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", G), G;
    } finally {
      P.current && N(!1);
    }
  }, [t, n]), D = A(async (b) => {
    try {
      const G = b.items ?? (() => {
        const V = p;
        return b.ids.map((O) => {
          const U = V.find((K) => K.id === O);
          return {
            id: O,
            content: (U == null ? void 0 : U.content) ?? O,
            userId: (U == null ? void 0 : U.userId) ?? ""
          };
        });
      })();
      return await Tn({ ids: b.ids, items: G, liveId: b.liveId ?? n });
    } catch (G) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", G), G;
    }
  }, [n, p]), Z = A(async (b) => {
    try {
      return await wn({ content: b.keywords.join(","), liveId: n });
    } catch (G) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", G), G;
    }
  }, [n]), j = A(async () => {
    if (!n) return [];
    R(!0), I(null);
    try {
      const b = await An(n);
      return T(b), b;
    } catch (b) {
      throw I(b), b;
    } finally {
      R(!1);
    }
  }, [n]), X = A(async () => {
    if (!n) return [];
    R(!0), I(null);
    try {
      const b = await Rn(n);
      return E(b), b;
    } catch (b) {
      throw I(b), b;
    } finally {
      R(!1);
    }
  }, [n]), M = A(async (b) => {
    if (!n) throw new Error("liveId is required");
    R(!0), I(null);
    try {
      await Mn(n, b.memberAccounts, b.muteTime), await j();
    } catch (G) {
      throw I(G), console.error("[useRiskControlState] muteMember failed:", G), G;
    } finally {
      R(!1);
    }
  }, [n, j]), L = A(async (b) => {
    if (!n) throw new Error("liveId is required");
    R(!0), I(null);
    try {
      await On(n, b.memberAccounts), await j();
    } catch (G) {
      throw I(G), console.error("[useRiskControlState] unmuteMember failed:", G), G;
    } finally {
      R(!1);
    }
  }, [n, j]), y = A(async (b) => {
    if (!n) throw new Error("liveId is required");
    R(!0), I(null);
    try {
      await Dn(n, b.memberAccounts, b.duration, b.reason), await X();
    } catch (G) {
      I(G);
    } finally {
      R(!1);
    }
  }, [n, X]), x = A(async (b) => {
    if (!n) throw new Error("liveId is required");
    R(!0), I(null);
    try {
      await xn(n, b.memberAccounts), await X();
    } catch (G) {
      I(G);
    } finally {
      R(!1);
    }
  }, [n, X]), $ = A(async () => {
    if (!n) throw new Error("liveId is required");
    try {
      return await Un(n, "default", "您的内容涉嫌违规");
    } catch (b) {
      throw console.error("[useRiskControlState] sendViolationWarning failed:", b), b;
    }
  }, [n]);
  return {
    textModerationAvailable: i,
    textModerationRemainUsage: o,
    textModerationList: p,
    textModerationPageNum: d,
    textModerationTotal: g,
    textModerationLoading: h,
    fetchTextModerationUsage: B,
    fetchTextModerationList: H,
    approveTextModerationItems: D,
    bypassCorrectionKeyword: Z,
    muteMember: M,
    unmuteMember: L,
    banMember: y,
    unbanMember: x,
    sendViolationWarning: $,
    mutedList: m,
    bannedList: w,
    memberLoading: S,
    memberError: C,
    fetchMutedList: j,
    fetchBannedList: X
  };
}
const q = {
  success: (r) => At.success(r),
  error: (r) => At.error(r),
  warning: (r) => At.error(r),
  info: (r) => At.info(r)
}, Qr = ({
  visible: r,
  liveId: n = "",
  liveName: t = "",
  onVisibleChange: i,
  onConfirm: c,
  onCancel: o
}) => {
  const { t: s } = ve(), [p, l] = _(!1), d = () => {
    l(!1), i(!1);
  }, f = async () => {
    if (!(p || !n)) {
      l(!0);
      try {
        await kn(n, {
          violationType: "warning",
          violationContent: `直播间 "${t || n}" 收到违规警告，请立即整改`,
          handleSuggestion: "请遵守平台规则，删除违规内容"
        }), q.success(s("Violation Warning Sent")), c == null || c({ liveId: n, liveName: t }), d();
      } catch (v) {
        console.error("发送违规警告失败:", v), q.error(s("Send Failed")), l(!1);
      }
    }
  }, g = () => {
    p || (o == null || o(), d());
  };
  return /* @__PURE__ */ e(
    ge,
    {
      visible: r,
      header: s("Violation Warning Send Confirm"),
      confirmBtn: /* @__PURE__ */ e(
        Y,
        {
          shape: "round",
          loading: p,
          onClick: f,
          children: s(p ? "Sending" : a.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ e(
        Y,
        {
          variant: "outline",
          shape: "round",
          disabled: p,
          onClick: g,
          children: s(a.CANCEL)
        }
      ),
      onClose: g,
      children: /* @__PURE__ */ e("p", { children: s("Violation Warning Confirm Content") })
    }
  );
}, qa = ({
  searchInput: r,
  onSearchInputChange: n,
  onSearch: t,
  onClearSearch: i,
  onRefresh: c,
  refreshing: o
}) => {
  const { t: s } = ve(), p = () => {
    if (W(r) > Nt) {
      q.error(s(a.INPUT_TOO_LONG));
      return;
    }
    t();
  };
  return /* @__PURE__ */ u("div", { className: "monitor-header", children: [
    /* @__PURE__ */ e("div", { className: "monitor-title-section", children: /* @__PURE__ */ e("h2", { className: "monitor-title", children: s(a.LIVE_MONITOR) }) }),
    /* @__PURE__ */ u("div", { className: "monitor-header-actions", children: [
      /* @__PURE__ */ e(
        fe,
        {
          value: r,
          onChange: n,
          onEnter: p,
          clearable: !0,
          onClear: i,
          placeholder: s(a.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ e(rr, { size: 16 }),
          className: "monitor-search-input",
          status: W(r) > Nt ? "error" : "default",
          tips: W(r) > Nt ? s(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ e(
        Y,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ e(nr, {}),
          loading: o,
          onClick: c,
          children: s(a.REFRESH)
        }
      )
    ] })
  ] });
}, Xa = ({
  currentPage: r,
  hasMoreData: n,
  loading: t,
  onPrevPage: i,
  onNextPage: c,
  onGoToFirstPage: o
}) => {
  const { t: s } = ve();
  return /* @__PURE__ */ u("div", { className: "live-monitor-pagination", children: [
    /* @__PURE__ */ e(
      Y,
      {
        variant: "outline",
        size: "small",
        disabled: r <= 1 || t,
        onClick: o,
        children: s(a.FIRST_PAGE)
      }
    ),
    /* @__PURE__ */ e(
      Y,
      {
        variant: "outline",
        size: "small",
        disabled: r <= 1 || t,
        onClick: i,
        children: s(a.PREVIOUS_PAGE)
      }
    ),
    /* @__PURE__ */ e("span", { className: "page-info", children: s("Page {{page}}", { page: r }) }),
    /* @__PURE__ */ e(
      Y,
      {
        variant: "outline",
        size: "small",
        disabled: !n || t,
        onClick: c,
        children: s(a.NEXT_PAGE)
      }
    )
  ] });
};
function Pt({
  className: r = "anchor-avatar",
  name: n,
  src: t,
  title: i
}) {
  const { t: c } = ve(), [o, s] = _(""), [p, l] = _(!1);
  J(() => {
    s(t || Ht), l(!1);
  }, [t]);
  const d = n ? c("Avatar Alt", { name: n }) : c("Host Avatar");
  return !o || p ? /* @__PURE__ */ e("div", { className: r, title: i, "aria-label": d, children: Pn(n) }) : /* @__PURE__ */ e("div", { className: r, title: i, "aria-label": d, children: /* @__PURE__ */ e(
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
        if (o !== Ht) {
          s(Ht);
          return;
        }
        l(!0);
      }
    }
  ) });
}
class ja extends an {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(n) {
    console.error("[LiveManager Slot] render failed:", n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ?? null : this.props.children;
  }
}
function De({
  slot: r,
  props: n,
  fallback: t,
  className: i
}) {
  if (!r) return null;
  const c = rn(r) ? st.cloneElement(r, n) : nn(r, n);
  return /* @__PURE__ */ e(ja, { fallback: t, children: i ? /* @__PURE__ */ e("div", { className: i, children: c }) : c });
}
const Za = ({
  item: r,
  hoveredCardId: n,
  hoveredTagId: t,
  isMuted: i,
  userProfile: c,
  displayTags: o,
  adaptiveResult: s,
  onMouseEnter: p,
  onMouseLeave: l,
  onClickDetails: d,
  onViolationWarning: f,
  onCloseLive: g,
  onTagHover: v
}) => {
  var H, D, Z, j, X;
  const { t: h } = ve(), { startPlay: N, stopPlay: m } = mt(), T = (H = yt().components) == null ? void 0 : H.liveMonitor, w = ((D = r.avatarUrl) == null ? void 0 : D.trim()) || "", E = (c == null ? void 0 : c.avatarUrl) || ((Z = r.anchor) == null ? void 0 : Z.avatarUrl) || w || Br(r), S = (c == null ? void 0 : c.nick) || ((j = r.anchor) == null ? void 0 : j.nick) || Hr(r, h(a.UNKNOWN_HOST)), R = ((X = r.stats) == null ? void 0 : X.viewCount) ?? 0, C = _e(() => `live_monitor_view_${r.liveId}`, [r.liveId]), I = ee(""), P = ee(0), B = ee(null);
  return J(() => {
    const M = r.liveId;
    if (!M) return;
    const L = ++P.current;
    let y = !1;
    return (async () => {
      for (; B.current; )
        try {
          await B.current;
        } catch {
        }
      try {
        await N({ liveId: M, containerId: C }), !y && P.current === L && (I.current = M);
      } catch ($) {
        !y && P.current === L && ($ === kt.LOGIN_TIMEOUT || $ === kt.USER_SIG_ILLEGAL) && (_n(), bn(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required");
      }
    })(), () => {
      y = !0, P.current += 1;
      const $ = I.current || M;
      I.current === $ && (I.current = ""), B.current = m($), B.current.catch(() => {
      });
    };
  }, [r.liveId, C, N, m]), /* @__PURE__ */ u(
    "div",
    {
      className: `live-card ${n === r.liveId ? "hovered" : ""}`,
      onMouseEnter: p,
      onMouseLeave: l,
      children: [
        /* @__PURE__ */ u("div", { id: r.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${r.backgroundUrl || r.coverUrl || cr})`
              }
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              id: C,
              className: "live-video-player"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "live-id-badge",
              style: { maxWidth: s.idMaxWidth },
              children: /* @__PURE__ */ e("span", { title: r.liveId, children: `${h(a.LIVE_ID)}: ${r.liveId}` })
            }
          ),
          o.length > 0 && /* @__PURE__ */ u(
            "div",
            {
              className: "live-card-tags-overlay",
              style: { maxWidth: s.tagsMaxWidth },
              children: [
                o.slice(0, s.visibleCount).map((M) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ e("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ e("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  h(M)
                ] }, M)),
                s.showMore && /* @__PURE__ */ u(
                  "div",
                  {
                    className: "tag-more-wrapper",
                    onMouseLeave: () => v(null),
                    children: [
                      /* @__PURE__ */ e(
                        "span",
                        {
                          className: "live-card-tag-overlay live-card-tag-more",
                          onMouseEnter: () => v(r.liveId),
                          children: "..."
                        }
                      ),
                      t === r.liveId && /* @__PURE__ */ e(
                        "div",
                        {
                          className: "live-card-tag-dropdown",
                          onMouseEnter: () => v(r.liveId),
                          onClick: (M) => M.stopPropagation(),
                          children: o.slice(s.visibleCount).map((M) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ e("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ e("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                            ] }),
                            h(M)
                          ] }, M))
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "live-video-overlay",
              onClick: (M) => {
                M.stopPropagation(), d();
              },
              children: /* @__PURE__ */ u("div", { className: "overlay-btn primary", children: [
                /* @__PURE__ */ e(Ur, { size: 16 }),
                h(a.VIEW_DETAILS)
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ u("div", { className: "live-card-info", children: [
          /* @__PURE__ */ e("div", { className: "live-card-title", title: r.liveName || h(a.UNNAMED_LIVE), children: r.liveName || h(a.UNNAMED_LIVE) }),
          /* @__PURE__ */ u("div", { className: "live-card-meta", children: [
            /* @__PURE__ */ u("div", { className: "live-card-anchor", children: [
              /* @__PURE__ */ e(
                Pt,
                {
                  className: "anchor-avatar",
                  src: E,
                  name: S,
                  title: S
                }
              ),
              /* @__PURE__ */ e("span", { className: "anchor-name", title: S, children: S })
            ] }),
            /* @__PURE__ */ u("span", { className: "meta-viewer-count", title: String(R), children: [
              R,
              h(a.VIEWS)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u("div", { className: `live-card-actions ${n === r.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ e(
            Y,
            {
              className: "action-btn warn",
              variant: "text",
              icon: /* @__PURE__ */ e(kr, { size: 16 }),
              onClick: (M) => {
                M.stopPropagation(), f();
              },
              children: /* @__PURE__ */ e("span", { className: "button-text", children: h(a.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ e(De, { slot: T == null ? void 0 : T.userActionExtraItems, props: { live: r } }),
          /* @__PURE__ */ e(
            Y,
            {
              className: "action-btn close full",
              variant: "text",
              icon: /* @__PURE__ */ e(Pr, { size: 16 }),
              onClick: (M) => {
                M.stopPropagation(), g();
              },
              children: /* @__PURE__ */ e("span", { className: "button-text", children: h(a.FORCE_STOP) })
            }
          )
        ] })
      ]
    },
    r.liveId
  );
}, Ja = () => {
  const r = mt(), { paginatedList: n } = r, [t, i] = _(n.currentPage), [c, o] = _(n.hasMore), [s, p] = _(n.loading), [l, d] = _(n.pageData);
  J(() => ho((E) => {
    i(E.currentPage), o(E.hasMore), p(E.loading), d([...E.pageData]);
  }), []);
  const f = l.length > 0, [g, v] = _(/* @__PURE__ */ new Map()), h = ee(0), N = ee(!1), m = ee(/* @__PURE__ */ new Map());
  m.current = _e(() => {
    const w = /* @__PURE__ */ new Map();
    return w.set(t, l), w;
  }, [t, l]);
  const T = ee([]);
  return T.current = l, J(() => {
    if (l.length === 0) return;
    const w = l.map((S) => {
      var R, C;
      return ((R = S.anchor) == null ? void 0 : R.userId) || ((C = S.anchor) == null ? void 0 : C.id) || "";
    }).filter(Boolean);
    if (w.length === 0) return;
    const E = w.filter((S) => !g.has(S));
    E.length !== 0 && zr(E).then((S) => {
      N.current || v((R) => {
        const C = new Map(R);
        return S.forEach((I, P) => {
          C.set(P, I);
        }), C;
      });
    }).catch((S) => {
      console.error("[useLiveMonitorData] Failed to fetch user profiles:", S);
    });
  }, [l, g, N]), {
    // —— 分页快照（响应式，来自 controller） ——
    currentPage: t,
    hasMoreData: c,
    loading: s,
    pageData: l,
    hasLiveData: f,
    // —— 用户资料缓存 ——
    userProfileMap: g,
    setUserProfileMap: v,
    // —— Refs（与分页解耦） ——
    pageVersionRef: h,
    isUnmountedRef: N,
    // —— 兼容老接口的只读 refs（仅当前页数据；不可 mutate） ——
    pageDataCacheRef: m,
    liveListRef: T,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: n
  };
}, Qa = 8, ei = (r) => {
  const {
    paginatedList: n,
    isSearchMode: t,
    pageVersionRef: i,
    setIsSearchMode: c,
    setSearchInput: o,
    stopPlay: s,
    endLive: p,
    fetchLiveDetail: l,
    isUnmountedRef: d
  } = r, f = _t(), { t: g } = ve(), [v, h] = _({ visible: !1, liveId: "", liveName: "", closing: !1 }), [N, m] = _({ visible: !1, liveId: "", liveName: "" }), [T, w] = _(!1), E = ee(!1), [S, R] = _(!1), C = A((X, M) => {
    h({ visible: !0, liveId: X, liveName: M, closing: !1 });
  }, []), I = A((X, M) => {
    m({ visible: !0, liveId: X, liveName: M });
  }, []), P = A(async () => {
    const { liveId: X } = v;
    if (X) {
      h((M) => ({ ...M, closing: !0 }));
      try {
        await s(X), await p(X), h({ visible: !1, liveId: "", liveName: "", closing: !1 }), q.success(g(a.LIVE_FORCIBLY_CLOSED));
        const M = !n.hasMore, L = n.pageData.length;
        i.current += 1, M && L <= 1 && n.currentPage > 1 ? await n.prevPage() : await n.refreshCurrentPage();
      } catch (M) {
        console.error("封禁房间失败:", M), h((L) => ({ ...L, closing: !1 }));
      }
    }
  }, [v, s, p, n, i, g]), B = A(() => {
    h({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), H = A((X) => {
    try {
      sessionStorage.setItem("liveMonitor_currentPage", String(n.currentPage));
    } catch {
    }
    f(`/live-control/${X}`);
  }, [n, f]), D = A(async (X) => {
    const M = (X ?? "").trim();
    if (!M || W(M) > Nt) {
      M && W(M) > Nt && q.error(g(a.INPUT_TOO_LONG));
      return;
    }
    const L = M;
    w(!0);
    const y = ++i.current;
    try {
      const x = await l(L);
      if (d.current || i.current !== y)
        return;
      if (!x) {
        q.error(g(a.NO_SEARCH_RESULTS_FOR, { keyword: M })), await n.goToFirstPage();
        return;
      }
      if (c(!0), E.current = !0, d.current || i.current !== y) {
        await s(L);
        return;
      }
      q.success(g(a.SEARCH_SUCCESS));
    } catch (x) {
      if (console.error("搜索直播间失败:", x), x === kt.LOGIN_TIMEOUT || x === kt.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required";
        return;
      }
      q.error(g(a.NO_SEARCH_RESULTS_FOR, { keyword: M })), await n.goToFirstPage();
    } finally {
      d.current || w(!1);
    }
  }, [l, d, i, n, c, s, g]), Z = A(async () => {
    o(""), c(!1), E.current = !1, i.current += 1, await n.goToFirstPage();
  }, [o, c, i, n]), j = A(async () => {
    if (!(S || n.loading)) {
      R(!0);
      try {
        t && (c(!1), E.current = !1, o("")), i.current += 1, await n.refreshCurrentPage();
      } catch (X) {
        console.error("刷新失败:", X);
        const M = (X == null ? void 0 : X.ErrorInfo) || (X == null ? void 0 : X.errorInfo) || "";
        q.error(g(a.REFRESH_FAILED) + (M ? ` (${M})` : ""));
      } finally {
        d.current || R(!1);
      }
    }
  }, [S, n, t, c, o, i, g, d]);
  return {
    // 封禁相关
    closeConfirm: v,
    handleCloseLive: C,
    handleConfirmClose: P,
    handleCancelClose: B,
    // 违规警告相关
    violationConfirm: N,
    handleViolationWarning: I,
    setViolationConfirm: m,
    // 搜索相关
    searching: T,
    isSearchModeRef: E,
    handleSearch: D,
    handleClearSearch: Z,
    // 刷新相关
    refreshing: S,
    handleRefresh: j,
    // 详情
    handleClickDetails: H
  };
}, ti = 600 * 1e3, ri = (r) => {
  const { pageSize: n, isSearchModeRef: t, isUnmountedRef: i, pageVersionRef: c } = r, [o, s] = _(/* @__PURE__ */ new Map()), p = ee(null), l = ee(""), d = A(() => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, []), f = A(() => {
    const m = /* @__PURE__ */ new Date(), T = new Date(m.getTime() - 3600 * 1e3), w = (E) => {
      const S = E.getFullYear(), R = String(E.getMonth() + 1).padStart(2, "0"), C = String(E.getDate()).padStart(2, "0"), I = String(E.getHours()).padStart(2, "0"), P = String(E.getMinutes()).padStart(2, "0"), B = String(E.getSeconds()).padStart(2, "0");
      return `${S}-${R}-${C} ${I}:${P}:${B}`;
    };
    return {
      startTime: w(T),
      endTime: w(m)
    };
  }, []), g = A(async (m, T, w) => {
    const E = Array.from(
      new Set(
        m.slice(0, n).map((R) => R.liveId).filter(Boolean)
      )
    );
    if (E.length === 0 || t.current) return;
    d();
    const S = `${w}:${T}:${E.join(",")}`;
    l.current = S;
    try {
      const { startTime: R, endTime: C } = f(), I = await Fn(E, 10, R, C);
      if (i.current || c.current !== w || l.current !== S)
        return;
      s((P) => {
        const B = new Map(P);
        return E.forEach((H) => {
          B.set(H, I.get(H) || []);
        }), B;
      });
    } catch (R) {
      console.warn("[LiveMonitor] 获取直播违规标签失败:", R);
    } finally {
      !i.current && c.current === w && l.current === S && !t.current && (p.current = setTimeout(() => {
        g(m, T, w);
      }, ti));
    }
  }, [n, t, i, c, d, f]), v = A(() => [], []), h = A((...m) => {
    const T = [];
    for (const w of m)
      for (const E of w || [])
        E && !T.includes(E) && T.push(E);
    return T;
  }, []), N = A((m) => h(
    v(),
    o.get(m.liveId)
  ), [h, v, o]);
  return {
    liveViolationLabelMap: o,
    loadLiveViolationLabelsForPage: g,
    clearLiveViolationRefreshTimer: d,
    getLiveDisplayTags: N
  };
};
function ni(r, n) {
  const t = ee(null), [, i] = _(0);
  t.current || (t.current = new Gn({
    containerSelector: ".live-monitor-grid",
    t: n
  }));
  const c = A(() => {
    i((d) => d + 1);
  }, []), o = A((d) => {
    const f = t.current, g = f.getResult(d);
    if (!g.visibleCount && !g.showMore && g.idMaxWidth === "calc(100% - 12px)") {
      const v = r(), h = v == null ? void 0 : v.find((N) => N.liveId === d);
      h && setTimeout(() => {
        f.compute(d, h), c();
      }, 0);
    }
    return g;
  }, [c, r]), s = A(() => {
    var d;
    (d = t.current) == null || d.observe(() => {
      c();
    });
  }, [c]), p = A(() => {
    var d;
    (d = t.current) == null || d.disconnect();
  }, []), l = A((d) => {
    var f;
    (f = t.current) == null || f.initForList(d), c();
  }, [c]);
  return J(() => () => {
    var d;
    (d = t.current) == null || d.disconnect(), t.current = null;
  }, []), {
    getAdaptiveResult: o,
    initResizeObserver: s,
    cleanupResizeObserver: p,
    initAdaptiveTags: l
  };
}
const To = () => {
  const { t: r } = ve(), { init: n, stopPlay: t, endLive: i, fetchLiveDetail: c, currentLive: o } = mt(), {
    currentPage: s,
    hasMoreData: p,
    loading: l,
    hasLiveData: d,
    pageData: f,
    pageVersionRef: g,
    isUnmountedRef: v,
    paginatedList: h,
    userProfileMap: N
  } = Ja(), [m, T] = _(""), [w, E] = _(!1), S = ee(!1), [R, C] = _(null), [I, P] = _(null), {
    getAdaptiveResult: B,
    initResizeObserver: H,
    cleanupResizeObserver: D,
    initAdaptiveTags: Z
  } = ni(
    () => f.map((F) => ({
      liveId: F.liveId,
      tags: L(F)
    })),
    r
  ), {
    liveViolationLabelMap: j,
    loadLiveViolationLabelsForPage: X,
    clearLiveViolationRefreshTimer: M,
    getLiveDisplayTags: L
  } = ri({
    pageSize: Qa,
    isSearchModeRef: S,
    isUnmountedRef: v,
    pageVersionRef: g
  }), y = (F) => {
    T(String(F));
  }, x = A(async () => {
    await h.prevPage();
  }, [h]), $ = A(async () => {
    await h.nextPage();
  }, [h]), b = A(async () => {
    await h.goToFirstPage();
  }, [h]);
  J(() => {
    if (l || f.length === 0) return;
    M();
    const F = ++g.current;
    X(f, s, F);
  }, [f, s, l, M, X, g]), J(() => (H(), () => {
    D();
  }), [H, D]);
  const {
    closeConfirm: G,
    handleCloseLive: V,
    handleConfirmClose: O,
    handleCancelClose: U,
    violationConfirm: K,
    handleViolationWarning: ne,
    setViolationConfirm: z,
    handleSearch: le,
    handleClearSearch: Ce,
    refreshing: Se,
    handleRefresh: ae,
    handleClickDetails: se
  } = ei({
    paginatedList: h,
    isSearchMode: w,
    pageVersionRef: g,
    setIsSearchMode: E,
    setSearchInput: T,
    stopPlay: t,
    endLive: i,
    fetchLiveDetail: c,
    isUnmountedRef: v
  });
  return J(() => {
    Object.keys(j).length !== 0 && Z(
      f.map((F) => ({
        liveId: F.liveId,
        tags: L(F)
      }))
    );
  }, [j, f, L, Z]), J(() => {
    (async () => {
      try {
        const te = await lr();
        if (te && te.sdkAppId !== 0) {
          console.log("[LiveMonitor] Initializing SDK with account:", te.userId), yn({
            baseURL: "http://localhost:9000/api",
            authToken: te.userSig
          });
          const he = Ra({
            sdkAppId: te.sdkAppId,
            userId: te.userId,
            userSig: te.userSig
          });
          n({
            baseURL: "http://localhost:9000/api",
            playerFactory: he
            // ✅ 传入播放器工厂
          }), console.log("[LiveMonitor] SDK initialized successfully with playerFactory");
        } else
          console.error("[LiveMonitor] No valid credentials found");
      } catch (te) {
        console.error("[LiveMonitor] SDK init error:", te);
      }
    })();
  }, []), J(() => {
    v.current = !1;
    try {
      const F = sessionStorage.getItem("liveMonitor_currentPage");
      sessionStorage.removeItem("liveMonitor_currentPage"), F && Number(F) > 1 && console.warn("[LiveMonitor] 简化版不支持恢复历史页码，回到首页");
    } catch {
    }
    return h.goToFirstPage(), () => {
      v.current = !0, M();
    };
  }, []), /* @__PURE__ */ u("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ e(
      qa,
      {
        searchInput: m,
        onSearchInputChange: y,
        onSearch: () => le(m),
        onClearSearch: Ce,
        onRefresh: ae,
        refreshing: Se
      }
    ),
    /* @__PURE__ */ e("div", { className: "live-monitor-grid", children: l ? /* @__PURE__ */ u("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ e("div", { className: "loading-spinner" }),
      /* @__PURE__ */ e("span", { children: r(a.LOADING) })
    ] }) : d ? f.map((F) => {
      var me;
      const te = L(F), he = ((me = F.anchor) == null ? void 0 : me.userId) || "", Ie = he && (N.get(he) || N.get(he.toLowerCase())) || F.anchor;
      return /* @__PURE__ */ e(
        Za,
        {
          item: F,
          hoveredCardId: R,
          hoveredTagId: I,
          isMuted: !!F.isMuted,
          userProfile: Ie,
          displayTags: te,
          adaptiveResult: B(F.liveId),
          onMouseEnter: () => C(F.liveId),
          onMouseLeave: () => C(null),
          onClickDetails: () => se(F.liveId),
          onViolationWarning: () => ne(F.liveId, F.liveName || r(a.UNNAMED_LIVE)),
          onCloseLive: () => V(F.liveId, F.liveName || r(a.UNNAMED_LIVE)),
          onTagHover: (Le) => P(Le)
        },
        `${s}:${F.liveId}`
      );
    }) : /* @__PURE__ */ u("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ e("div", { className: "empty-icon", children: /* @__PURE__ */ e(Ur, { size: 48 }) }),
      /* @__PURE__ */ e("p", { children: r(a.NO_LIVE_RIGHT_NOW) })
    ] }) }),
    /* @__PURE__ */ e(
      Xa,
      {
        currentPage: s,
        hasMoreData: p,
        loading: l,
        onPrevPage: x,
        onNextPage: $,
        onGoToFirstPage: b
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: G.visible,
        header: r(a.CONFIRM_FORCE_STOP),
        onClose: U,
        width: be.CONFIRM,
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: U, disabled: G.closing, children: r(a.CANCEL) }),
          /* @__PURE__ */ e(
            Y,
            {
              shape: "round",
              theme: "primary",
              onClick: O,
              disabled: G.closing,
              children: G.closing ? r(a.CLOSING) : r(a.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { children: r(a.FORCE_STOP_WARNING) })
      }
    ),
    /* @__PURE__ */ e(
      Qr,
      {
        visible: K.visible,
        liveId: K.liveId,
        liveName: K.liveName,
        onVisibleChange: (F) => z((te) => ({ ...te, visible: F }))
      }
    )
  ] });
};
var er = function(r, n) {
  return er = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (t[c] = i[c]);
  }, er(r, n);
};
function ai(r, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
  er(r, n);
  function t() {
    this.constructor = r;
  }
  r.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
}
var Ne = function() {
  return Ne = Object.assign || function(n) {
    for (var t, i = 1, c = arguments.length; i < c; i++) {
      t = arguments[i];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
    }
    return n;
  }, Ne.apply(this, arguments);
};
var $t, Ir;
function ii() {
  if (Ir) return $t;
  Ir = 1;
  var r = !1, n, t, i, c, o, s, p, l, d, f, g, v, h, N, m;
  function T() {
    if (!r) {
      r = !0;
      var E = navigator.userAgent, S = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(E), R = /(Mac OS X)|(Windows)|(Linux)/.exec(E);
      if (v = /\b(iPhone|iP[ao]d)/.exec(E), h = /\b(iP[ao]d)/.exec(E), f = /Android/i.exec(E), N = /FBAN\/\w+;/i.exec(E), m = /Mobile/i.exec(E), g = !!/Win64/.exec(E), S) {
        n = S[1] ? parseFloat(S[1]) : S[5] ? parseFloat(S[5]) : NaN, n && document && document.documentMode && (n = document.documentMode);
        var C = /(?:Trident\/(\d+.\d+))/.exec(E);
        s = C ? parseFloat(C[1]) + 4 : n, t = S[2] ? parseFloat(S[2]) : NaN, i = S[3] ? parseFloat(S[3]) : NaN, c = S[4] ? parseFloat(S[4]) : NaN, c ? (S = /(?:Chrome\/(\d+\.\d+))/.exec(E), o = S && S[1] ? parseFloat(S[1]) : NaN) : o = NaN;
      } else
        n = t = i = o = c = NaN;
      if (R) {
        if (R[1]) {
          var I = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(E);
          p = I ? parseFloat(I[1].replace("_", ".")) : !0;
        } else
          p = !1;
        l = !!R[2], d = !!R[3];
      } else
        p = l = d = !1;
    }
  }
  var w = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return T() || n;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return T() || s > n;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return w.ie() && g;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return T() || t;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return T() || i;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return T() || c;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return w.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return T() || o;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return T() || l;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return T() || p;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return T() || d;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return T() || v;
    },
    mobile: function() {
      return T() || v || h || f || m;
    },
    nativeApp: function() {
      return T() || N;
    },
    android: function() {
      return T() || f;
    },
    ipad: function() {
      return T() || h;
    }
  };
  return $t = w, $t;
}
var qt, Lr;
function oi() {
  if (Lr) return qt;
  Lr = 1;
  var r = !!(typeof window < "u" && window.document && window.document.createElement), n = {
    canUseDOM: r,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: r && !!(window.addEventListener || window.attachEvent),
    canUseViewport: r && !!window.screen,
    isInWorker: !r
    // For now, this is true - might change in the future.
  };
  return qt = n, qt;
}
var Xt, Sr;
function si() {
  if (Sr) return Xt;
  Sr = 1;
  var r = oi(), n;
  r.canUseDOM && (n = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
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
  function t(i, c) {
    if (!r.canUseDOM || c && !("addEventListener" in document))
      return !1;
    var o = "on" + i, s = o in document;
    if (!s) {
      var p = document.createElement("div");
      p.setAttribute(o, "return;"), s = typeof p[o] == "function";
    }
    return !s && n && i === "wheel" && (s = document.implementation.hasFeature("Events.wheel", "3.0")), s;
  }
  return Xt = t, Xt;
}
var jt, Tr;
function ci() {
  if (Tr) return jt;
  Tr = 1;
  var r = ii(), n = si(), t = 10, i = 40, c = 800;
  function o(s) {
    var p = 0, l = 0, d = 0, f = 0;
    return "detail" in s && (l = s.detail), "wheelDelta" in s && (l = -s.wheelDelta / 120), "wheelDeltaY" in s && (l = -s.wheelDeltaY / 120), "wheelDeltaX" in s && (p = -s.wheelDeltaX / 120), "axis" in s && s.axis === s.HORIZONTAL_AXIS && (p = l, l = 0), d = p * t, f = l * t, "deltaY" in s && (f = s.deltaY), "deltaX" in s && (d = s.deltaX), (d || f) && s.deltaMode && (s.deltaMode == 1 ? (d *= i, f *= i) : (d *= c, f *= c)), d && !p && (p = d < 1 ? -1 : 1), f && !l && (l = f < 1 ? -1 : 1), {
      spinX: p,
      spinY: l,
      pixelX: d,
      pixelY: f
    };
  }
  return o.getEventType = function() {
    return r.firefox() ? "DOMMouseScroll" : n("wheel") ? "wheel" : "mousewheel";
  }, jt = o, jt;
}
var Zt, wr;
function li() {
  return wr || (wr = 1, Zt = ci()), Zt;
}
var di = li();
const ui = /* @__PURE__ */ Ma(di);
function hi(r, n, t, i, c, o) {
  o === void 0 && (o = 0);
  var s = dt(r, n, o), p = s.width, l = s.height, d = Math.min(p, t), f = Math.min(l, i);
  return d > f * c ? {
    width: f * c,
    height: f
  } : {
    width: d,
    height: d / c
  };
}
function mi(r) {
  return r.width > r.height ? r.width / r.naturalWidth : r.height / r.naturalHeight;
}
function Et(r, n, t, i, c) {
  c === void 0 && (c = 0);
  var o = dt(n.width, n.height, c), s = o.width, p = o.height;
  return {
    x: Ar(r.x, s, t.width, i),
    y: Ar(r.y, p, t.height, i)
  };
}
function Ar(r, n, t, i) {
  var c = n * i / 2 - t / 2;
  return Gt(r, -c, c);
}
function Rr(r, n) {
  return Math.sqrt(Math.pow(r.y - n.y, 2) + Math.pow(r.x - n.x, 2));
}
function Mr(r, n) {
  return Math.atan2(n.y - r.y, n.x - r.x) * 180 / Math.PI;
}
function pi(r, n, t, i, c, o, s) {
  o === void 0 && (o = 0), s === void 0 && (s = !0);
  var p = s ? fi : gi, l = dt(n.width, n.height, o), d = dt(n.naturalWidth, n.naturalHeight, o), f = {
    x: p(100, ((l.width - t.width / c) / 2 - r.x / c) / l.width * 100),
    y: p(100, ((l.height - t.height / c) / 2 - r.y / c) / l.height * 100),
    width: p(100, t.width / l.width * 100 / c),
    height: p(100, t.height / l.height * 100 / c)
  }, g = Math.round(p(d.width, f.width * d.width / 100)), v = Math.round(p(d.height, f.height * d.height / 100)), h = d.width >= d.height * i, N = h ? {
    width: Math.round(v * i),
    height: v
  } : {
    width: g,
    height: Math.round(g / i)
  }, m = Ne(Ne({}, N), {
    x: Math.round(p(d.width - N.width, f.x * d.width / 100)),
    y: Math.round(p(d.height - N.height, f.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: f,
    croppedAreaPixels: m
  };
}
function fi(r, n) {
  return Math.min(r, Math.max(0, n));
}
function gi(r, n) {
  return n;
}
function vi(r, n, t, i, c, o) {
  var s = dt(n.width, n.height, t), p = Gt(i.width / s.width * (100 / r.width), c, o), l = {
    x: p * s.width / 2 - i.width / 2 - s.width * p * (r.x / 100),
    y: p * s.height / 2 - i.height / 2 - s.height * p * (r.y / 100)
  };
  return {
    crop: l,
    zoom: p
  };
}
function Ei(r, n, t) {
  var i = mi(n);
  return t.height > t.width ? t.height / (r.height * i) : t.width / (r.width * i);
}
function Ni(r, n, t, i, c, o) {
  t === void 0 && (t = 0);
  var s = dt(n.naturalWidth, n.naturalHeight, t), p = Gt(Ei(r, n, i), c, o), l = i.height > i.width ? i.height / r.height : i.width / r.width, d = {
    x: ((s.width - r.width) / 2 - r.x) * l,
    y: ((s.height - r.height) / 2 - r.y) * l
  };
  return {
    crop: d,
    zoom: p
  };
}
function Or(r, n) {
  return {
    x: (n.x + r.x) / 2,
    y: (n.y + r.y) / 2
  };
}
function Ci(r) {
  return r * Math.PI / 180;
}
function dt(r, n, t) {
  var i = Ci(t);
  return {
    width: Math.abs(Math.cos(i) * r) + Math.abs(Math.sin(i) * n),
    height: Math.abs(Math.sin(i) * r) + Math.abs(Math.cos(i) * n)
  };
}
function Gt(r, n, t) {
  return Math.min(Math.max(r, n), t);
}
function Mt() {
  for (var r = [], n = 0; n < arguments.length; n++)
    r[n] = arguments[n];
  return r.filter(function(t) {
    return typeof t == "string" && t.length > 0;
  }).join(" ").trim();
}
var yi = `.reactEasyCrop_Container {
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
`, _i = 1, bi = 3, Ii = 1, Li = (
  /** @class */
  (function(r) {
    ai(n, r);
    function n() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.cropperRef = Ge.createRef(), t.imageRef = Ge.createRef(), t.videoRef = Ge.createRef(), t.containerPosition = {
        x: 0,
        y: 0
      }, t.containerRef = null, t.styleRef = null, t.containerRect = null, t.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, t.dragStartPosition = {
        x: 0,
        y: 0
      }, t.dragStartCrop = {
        x: 0,
        y: 0
      }, t.gestureZoomStart = 0, t.gestureRotationStart = 0, t.isTouching = !1, t.lastPinchDistance = 0, t.lastPinchRotation = 0, t.rafDragTimeout = null, t.rafPinchTimeout = null, t.wheelTimer = null, t.currentDoc = typeof document < "u" ? document : null, t.currentWindow = typeof window < "u" ? window : null, t.resizeObserver = null, t.previousCropSize = null, t.isInitialized = !1, t.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, t.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !t.containerRef)) {
          var i = !0;
          t.resizeObserver = new window.ResizeObserver(function(c) {
            if (i) {
              i = !1;
              return;
            }
            t.computeSizes();
          }), t.resizeObserver.observe(t.containerRef);
        }
      }, t.preventZoomSafari = function(i) {
        return i.preventDefault();
      }, t.cleanEvents = function() {
        t.currentDoc && (t.currentDoc.removeEventListener("mousemove", t.onMouseMove), t.currentDoc.removeEventListener("mouseup", t.onDragStopped), t.currentDoc.removeEventListener("touchmove", t.onTouchMove), t.currentDoc.removeEventListener("touchend", t.onDragStopped), t.currentDoc.removeEventListener("gesturechange", t.onGestureChange), t.currentDoc.removeEventListener("gestureend", t.onGestureEnd), t.currentDoc.removeEventListener("scroll", t.onScroll));
      }, t.clearScrollEvent = function() {
        t.containerRef && t.containerRef.removeEventListener("wheel", t.onWheel), t.wheelTimer && clearTimeout(t.wheelTimer);
      }, t.onMediaLoad = function() {
        var i = t.computeSizes();
        i && (t.previousCropSize = i, t.emitCropData(), t.setInitialCrop(i), t.isInitialized = !0), t.props.onMediaLoaded && t.props.onMediaLoaded(t.mediaSize);
      }, t.setInitialCrop = function(i) {
        if (t.props.initialCroppedAreaPercentages) {
          var c = vi(t.props.initialCroppedAreaPercentages, t.mediaSize, t.props.rotation, i, t.props.minZoom, t.props.maxZoom), o = c.crop, s = c.zoom;
          t.props.onCropChange(o), t.props.onZoomChange && t.props.onZoomChange(s);
        } else if (t.props.initialCroppedAreaPixels) {
          var p = Ni(t.props.initialCroppedAreaPixels, t.mediaSize, t.props.rotation, i, t.props.minZoom, t.props.maxZoom), o = p.crop, s = p.zoom;
          t.props.onCropChange(o), t.props.onZoomChange && t.props.onZoomChange(s);
        }
      }, t.computeSizes = function() {
        var i, c, o, s, p, l, d = t.imageRef.current || t.videoRef.current;
        if (d && t.containerRef) {
          t.containerRect = t.containerRef.getBoundingClientRect(), t.saveContainerPosition();
          var f = t.containerRect.width / t.containerRect.height, g = ((i = t.imageRef.current) === null || i === void 0 ? void 0 : i.naturalWidth) || ((c = t.videoRef.current) === null || c === void 0 ? void 0 : c.videoWidth) || 0, v = ((o = t.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((s = t.videoRef.current) === null || s === void 0 ? void 0 : s.videoHeight) || 0, h = d.offsetWidth < g || d.offsetHeight < v, N = g / v, m = void 0;
          if (h)
            switch (t.state.mediaObjectFit) {
              default:
              case "contain":
                m = f > N ? {
                  width: t.containerRect.height * N,
                  height: t.containerRect.height
                } : {
                  width: t.containerRect.width,
                  height: t.containerRect.width / N
                };
                break;
              case "horizontal-cover":
                m = {
                  width: t.containerRect.width,
                  height: t.containerRect.width / N
                };
                break;
              case "vertical-cover":
                m = {
                  width: t.containerRect.height * N,
                  height: t.containerRect.height
                };
                break;
            }
          else
            m = {
              width: d.offsetWidth,
              height: d.offsetHeight
            };
          t.mediaSize = Ne(Ne({}, m), {
            naturalWidth: g,
            naturalHeight: v
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var T = t.props.cropSize ? t.props.cropSize : hi(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((p = t.state.cropSize) === null || p === void 0 ? void 0 : p.height) !== T.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== T.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(T), t.setState({
            cropSize: T
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(T), T;
        }
      }, t.saveContainerPosition = function() {
        if (t.containerRef) {
          var i = t.containerRef.getBoundingClientRect();
          t.containerPosition = {
            x: i.left,
            y: i.top
          };
        }
      }, t.onMouseDown = function(i) {
        t.currentDoc && (i.preventDefault(), t.currentDoc.addEventListener("mousemove", t.onMouseMove), t.currentDoc.addEventListener("mouseup", t.onDragStopped), t.saveContainerPosition(), t.onDragStart(n.getMousePoint(i)));
      }, t.onMouseMove = function(i) {
        return t.onDrag(n.getMousePoint(i));
      }, t.onScroll = function(i) {
        t.currentDoc && (i.preventDefault(), t.saveContainerPosition());
      }, t.onTouchStart = function(i) {
        t.currentDoc && (t.isTouching = !0, !(t.props.onTouchRequest && !t.props.onTouchRequest(i)) && (t.currentDoc.addEventListener("touchmove", t.onTouchMove, {
          passive: !1
        }), t.currentDoc.addEventListener("touchend", t.onDragStopped), t.saveContainerPosition(), i.touches.length === 2 ? t.onPinchStart(i) : i.touches.length === 1 && t.onDragStart(n.getTouchPoint(i.touches[0]))));
      }, t.onTouchMove = function(i) {
        i.preventDefault(), i.touches.length === 2 ? t.onPinchMove(i) : i.touches.length === 1 && t.onDrag(n.getTouchPoint(i.touches[0]));
      }, t.onGestureStart = function(i) {
        t.currentDoc && (i.preventDefault(), t.currentDoc.addEventListener("gesturechange", t.onGestureChange), t.currentDoc.addEventListener("gestureend", t.onGestureEnd), t.gestureZoomStart = t.props.zoom, t.gestureRotationStart = t.props.rotation);
      }, t.onGestureChange = function(i) {
        if (i.preventDefault(), !t.isTouching) {
          var c = n.getMousePoint(i), o = t.gestureZoomStart - 1 + i.scale;
          if (t.setNewZoom(o, c, {
            shouldUpdatePosition: !0
          }), t.props.onRotationChange) {
            var s = t.gestureRotationStart + i.rotation;
            t.props.onRotationChange(s);
          }
        }
      }, t.onGestureEnd = function(i) {
        t.cleanEvents();
      }, t.onDragStart = function(i) {
        var c, o, s = i.x, p = i.y;
        t.dragStartPosition = {
          x: s,
          y: p
        }, t.dragStartCrop = Ne({}, t.props.crop), (o = (c = t.props).onInteractionStart) === null || o === void 0 || o.call(c);
      }, t.onDrag = function(i) {
        var c = i.x, o = i.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(c === void 0 || o === void 0)) {
            var s = c - t.dragStartPosition.x, p = o - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + s,
              y: t.dragStartCrop.y + p
            }, d = t.props.restrictPosition ? Et(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(d);
          }
        }));
      }, t.onDragStopped = function() {
        var i, c;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (c = (i = t.props).onInteractionEnd) === null || c === void 0 || c.call(i);
      }, t.onWheel = function(i) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(i))) {
          i.preventDefault();
          var c = n.getMousePoint(i), o = ui(i).pixelY, s = t.props.zoom - o * t.props.zoomSpeed / 200;
          t.setNewZoom(s, c, {
            shouldUpdatePosition: !0
          }), t.state.hasWheelJustStarted || t.setState({
            hasWheelJustStarted: !0
          }, function() {
            var p, l;
            return (l = (p = t.props).onInteractionStart) === null || l === void 0 ? void 0 : l.call(p);
          }), t.wheelTimer && clearTimeout(t.wheelTimer), t.wheelTimer = t.currentWindow.setTimeout(function() {
            return t.setState({
              hasWheelJustStarted: !1
            }, function() {
              var p, l;
              return (l = (p = t.props).onInteractionEnd) === null || l === void 0 ? void 0 : l.call(p);
            });
          }, 250);
        }
      }, t.getPointOnContainer = function(i, c) {
        var o = i.x, s = i.y;
        if (!t.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: t.containerRect.width / 2 - (o - c.x),
          y: t.containerRect.height / 2 - (s - c.y)
        };
      }, t.getPointOnMedia = function(i) {
        var c = i.x, o = i.y, s = t.props, p = s.crop, l = s.zoom;
        return {
          x: (c + p.x) / l,
          y: (o + p.y) / l
        };
      }, t.setNewZoom = function(i, c, o) {
        var s = o === void 0 ? {} : o, p = s.shouldUpdatePosition, l = p === void 0 ? !0 : p;
        if (!(!t.state.cropSize || !t.props.onZoomChange)) {
          var d = Gt(i, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var f = t.getPointOnContainer(c, t.containerPosition), g = t.getPointOnMedia(f), v = {
              x: g.x * d - f.x,
              y: g.y * d - f.y
            }, h = t.props.restrictPosition ? Et(v, t.mediaSize, t.state.cropSize, d, t.props.rotation) : v;
            t.props.onCropChange(h);
          }
          t.props.onZoomChange(d);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var i = t.props.restrictPosition ? Et(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
        return pi(i, t.mediaSize, t.state.cropSize, t.getAspect(), t.props.zoom, t.props.rotation, t.props.restrictPosition);
      }, t.emitCropData = function() {
        var i = t.getCropData();
        if (i) {
          var c = i.croppedAreaPercentages, o = i.croppedAreaPixels;
          t.props.onCropComplete && t.props.onCropComplete(c, o), t.props.onCropAreaChange && t.props.onCropAreaChange(c, o);
        }
      }, t.emitCropAreaChange = function() {
        var i = t.getCropData();
        if (i) {
          var c = i.croppedAreaPercentages, o = i.croppedAreaPixels;
          t.props.onCropAreaChange && t.props.onCropAreaChange(c, o);
        }
      }, t.recomputeCropPosition = function() {
        var i, c;
        if (t.state.cropSize) {
          var o = t.props.crop;
          if (t.isInitialized && (!((i = t.previousCropSize) === null || i === void 0) && i.width) && (!((c = t.previousCropSize) === null || c === void 0) && c.height)) {
            var s = Math.abs(t.previousCropSize.width - t.state.cropSize.width) > 1e-6 || Math.abs(t.previousCropSize.height - t.state.cropSize.height) > 1e-6;
            if (s) {
              var p = t.state.cropSize.width / t.previousCropSize.width, l = t.state.cropSize.height / t.previousCropSize.height;
              o = {
                x: t.props.crop.x * p,
                y: t.props.crop.y * l
              };
            }
          }
          var d = t.props.restrictPosition ? Et(o, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : o;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(d), t.emitCropData();
        }
      }, t.onKeyDown = function(i) {
        var c, o, s = t.props, p = s.crop, l = s.onCropChange, d = s.keyboardStep, f = s.zoom, g = s.rotation, v = d;
        if (t.state.cropSize) {
          i.shiftKey && (v *= 0.2);
          var h = Ne({}, p);
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
          t.props.restrictPosition && (h = Et(h, t.mediaSize, t.state.cropSize, f, g)), i.repeat || (o = (c = t.props).onInteractionStart) === null || o === void 0 || o.call(c), l(h);
        }
      }, t.onKeyUp = function(i) {
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
        t.emitCropData(), (o = (c = t.props).onInteractionEnd) === null || o === void 0 || o.call(c);
      }, t;
    }
    return n.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = yi, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, n.prototype.componentWillUnmount = function() {
      var t, i;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((i = this.styleRef.parentNode) === null || i === void 0 || i.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, n.prototype.componentDidUpdate = function(t) {
      var i, c, o, s, p, l, d, f, g;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((i = t.cropSize) === null || i === void 0 ? void 0 : i.height) !== ((c = this.props.cropSize) === null || c === void 0 ? void 0 : c.height) || ((o = t.cropSize) === null || o === void 0 ? void 0 : o.width) !== ((s = this.props.cropSize) === null || s === void 0 ? void 0 : s.width) ? this.computeSizes() : (((p = t.crop) === null || p === void 0 ? void 0 : p.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((d = t.crop) === null || d === void 0 ? void 0 : d.y) !== ((f = this.props.crop) === null || f === void 0 ? void 0 : f.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((g = this.videoRef.current) === null || g === void 0 || g.load());
      var v = this.getObjectFit();
      v !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: v
      }, this.computeSizes);
    }, n.prototype.getAspect = function() {
      var t = this.props, i = t.cropSize, c = t.aspect;
      return i ? i.width / i.height : c;
    }, n.prototype.getObjectFit = function() {
      var t, i, c, o;
      if (this.props.objectFit === "cover") {
        var s = this.imageRef.current || this.videoRef.current;
        if (s && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var p = this.containerRect.width / this.containerRect.height, l = ((t = this.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoWidth) || 0, d = ((c = this.imageRef.current) === null || c === void 0 ? void 0 : c.naturalHeight) || ((o = this.videoRef.current) === null || o === void 0 ? void 0 : o.videoHeight) || 0, f = l / d;
          return f < p ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, n.prototype.onPinchStart = function(t) {
      var i = n.getTouchPoint(t.touches[0]), c = n.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = Rr(i, c), this.lastPinchRotation = Mr(i, c), this.onDragStart(Or(i, c));
    }, n.prototype.onPinchMove = function(t) {
      var i = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var c = n.getTouchPoint(t.touches[0]), o = n.getTouchPoint(t.touches[1]), s = Or(c, o);
        this.onDrag(s), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var p = Rr(c, o), l = i.props.zoom * (p / i.lastPinchDistance);
          i.setNewZoom(l, s, {
            shouldUpdatePosition: !1
          }), i.lastPinchDistance = p;
          var d = Mr(c, o), f = i.props.rotation + (d - i.lastPinchRotation);
          i.props.onRotationChange && i.props.onRotationChange(f), i.lastPinchRotation = d;
        });
      }
    }, n.prototype.render = function() {
      var t = this, i, c = this.props, o = c.image, s = c.video, p = c.mediaProps, l = c.cropperProps, d = c.transform, f = c.crop, g = f.x, v = f.y, h = c.rotation, N = c.zoom, m = c.cropShape, T = c.showGrid, w = c.roundCropAreaPixels, E = c.style, S = E.containerStyle, R = E.cropAreaStyle, C = E.mediaStyle, I = c.classes, P = I.containerClassName, B = I.cropAreaClassName, H = I.mediaClassName, D = (i = this.state.mediaObjectFit) !== null && i !== void 0 ? i : this.getObjectFit();
      return Ge.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(j) {
          return t.containerRef = j;
        },
        "data-testid": "container",
        style: S,
        className: Mt("reactEasyCrop_Container", P)
      }, o ? Ge.createElement("img", Ne({
        alt: "",
        className: Mt("reactEasyCrop_Image", D === "contain" && "reactEasyCrop_Contain", D === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", D === "vertical-cover" && "reactEasyCrop_Cover_Vertical", H)
      }, p, {
        src: o,
        ref: this.imageRef,
        style: Ne(Ne({}, C), {
          transform: d || "translate(".concat(g, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(N, ")")
        }),
        onLoad: this.onMediaLoad
      })) : s && Ge.createElement("video", Ne({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Mt("reactEasyCrop_Video", D === "contain" && "reactEasyCrop_Contain", D === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", D === "vertical-cover" && "reactEasyCrop_Cover_Vertical", H)
      }, p, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: Ne(Ne({}, C), {
          transform: d || "translate(".concat(g, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(N, ")")
        }),
        controls: !1
      }), (Array.isArray(s) ? s : [{
        src: s
      }]).map(function(Z) {
        return Ge.createElement("source", Ne({
          key: Z.src
        }, Z));
      })), this.state.cropSize && Ge.createElement("div", Ne({
        ref: this.cropperRef,
        style: Ne(Ne({}, R), {
          width: w ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: w ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Mt("reactEasyCrop_CropArea", m === "round" && "reactEasyCrop_CropAreaRound", T && "reactEasyCrop_CropAreaGrid", B)
      }, l)));
    }, n.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: bi,
      minZoom: _i,
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
      keyboardStep: Ii
    }, n.getMousePoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, n.getTouchPoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, n;
  })(Ge.Component)
);
function Si() {
  const [r, n] = _(""), t = ee(null);
  t.current || (t.current = new Vn());
  const i = t.current, c = A((s) => {
    const p = i.setPreview(s);
    n(p);
  }, [i]), o = A(() => {
    i.clearPreview(), n("");
  }, [i]);
  return J(() => () => {
    i.cleanup();
  }, [i]), {
    /** Current preview URL (empty string if none) */
    previewUrl: r,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: c,
    /** Clear preview URL */
    clearPreview: o,
    /** Whether preview exists */
    hasPreview: !!r
  };
}
function Ti(r = {}) {
  const { loop: n = 1, autoPlay: t = !0 } = r, i = ee(null), c = ee(null), o = ee(!1), s = A(() => {
    if (c.current) {
      try {
        c.current.stopAnimation(), c.current.clear();
      } catch (g) {
        console.warn("SVGA cleanup error:", g);
      }
      c.current = null, o.current = !1;
    }
  }, []), p = A(async (g) => {
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
      await new Promise((m, T) => {
        N.load(
          g,
          (w) => {
            try {
              h.loops = n, h.setVideoItem(w), t && (h.startAnimation(), o.current = !0), m();
            } catch (E) {
              T(E);
            }
          },
          (w) => {
            T(w);
          }
        );
      });
    } catch (m) {
      throw console.error("SVGA load error:", m), s(), m;
    }
  }, [n, t, s]), l = A(async (g) => {
    const v = URL.createObjectURL(g);
    try {
      await p(v);
    } finally {
      URL.revokeObjectURL(v);
    }
  }, [p]), d = A(() => {
    if (c.current)
      try {
        c.current.stopAnimation(), o.current = !1;
      } catch (g) {
        console.warn("SVGA stop error:", g);
      }
  }, []), f = A(() => {
    if (c.current)
      try {
        c.current.startAnimation(), o.current = !0;
      } catch (g) {
        console.warn("SVGA start error:", g);
      }
  }, []);
  return J(() => s, [s]), {
    /** Container ref (attach to div) */
    containerRef: i,
    /** Play SVGA from URL */
    playUrl: p,
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
function wi() {
  const { t: r } = ve();
  return { t: Ya(r) };
}
function ht(r) {
  const { action: n, onSuccess: t, onError: i, successMessage: c, errorMessage: o } = r, [s, p] = _(!1), l = ee(n);
  l.current = n;
  const d = A(async (...g) => {
    if (s) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    p(!0);
    try {
      const v = await l.current(...g);
      return c && q.success(c), t == null || t(v), v;
    } catch (v) {
      const h = v instanceof Error ? v : new Error(String(v)), N = o ? `${o}: ${h.message}` : h.message;
      q.error(N), i == null || i(h);
      return;
    } finally {
      p(!1);
    }
  }, [s, c, o, t, i]), f = A(() => {
    p(!1);
  }, []);
  return { loading: s, execute: d, reset: f };
}
function Ve(r) {
  const { confirm: n, onSuccess: t, ...i } = r, [c, o] = _(null), s = A((h) => {
    o(null), t == null || t(h);
  }, [t]), { loading: p, execute: l, reset: d } = ht({
    ...i,
    onSuccess: s
  }), f = A(() => {
    o({
      visible: !0,
      title: n.title,
      content: n.content,
      confirmText: n.confirmText,
      danger: n.danger
    });
  }, [n]), g = A(() => {
    o(null);
  }, []), v = A(async () => {
    try {
      return await l();
    } finally {
      o(null);
    }
  }, [l]);
  return {
    loading: p,
    confirmDialog: c,
    requestConfirm: f,
    cancelConfirm: g,
    executeWithConfirm: v,
    reset: d
  };
}
Wn(ur.Parser);
const Ft = on(function({
  value: n = "",
  onChange: t,
  type: i = "cover",
  cropEnabled: c = !0,
  aspectRatio: o = 16 / 9,
  maxSize: s = 10,
  placeholder: p,
  showUrlInput: l = !0,
  previewWidth: d,
  previewHeight: f,
  uploadEnabled: g = !1,
  accept: v,
  acceptHint: h,
  maxBytes: N,
  className: m = "",
  deferUpload: T = !1,
  onFileReady: w,
  skipSvgaValidation: E = !1,
  onUrlErrorChange: S
}, R) {
  const { t: C } = ve(), I = p || C(a.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), P = ee(null), [B, H] = _(!1), [D, Z] = _(0), [j, X] = _(!1), [M, L] = _(""), [y, x] = _(!g), [$, b] = _(n), [G, V] = _(!1), [O, U] = _(""), K = ee(null);
  K.current || (K.current = new zn({
    setValidating: V,
    setError: U,
    onConfirm: t
  }, E)), K.current.updateCallbacks({
    setValidating: V,
    setError: U,
    onConfirm: t
  }), K.current.updateSkipSvgaValidation(E);
  const ne = ee(null), { previewUrl: z, setPreview: le } = Si(), [Ce, Se] = _(!1), [ae, se] = _(!1), {
    containerRef: F,
    playUrl: te,
    stopAnimation: he
  } = Ti({ loop: 1, autoPlay: !0 });
  sn(R, () => ({
    get isUrlInputMode() {
      return y;
    },
    get isValidating() {
      return G;
    },
    get urlValidationError() {
      return O;
    },
    /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
    get hasUrlError() {
      return y ? !!(O || N && $.trim() && W($.trim()) > N) : !1;
    },
    get urlInputValue() {
      return $;
    },
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => {
      x(!0);
    },
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (Q) => {
      U(Q);
    },
    validateImageUrl: async (Q, oe) => {
      V(!0), U("");
      try {
        return await Bn(Q, oe, E), !0;
      } catch (Ee) {
        const ze = Ee instanceof Error ? Ee : new Error(String(Ee));
        throw U(ze.message || C("Image URL invalid")), ze;
      } finally {
        V(!1);
      }
    },
    reset: () => {
      K.current.reset(), ne.current = null, le(null), Se(!1), se(!1), b(n || ""), L(""), U(""), H(!1), Z(0), X(!1), g && x(!!n), w == null || w(null);
    },
    ensureUrlValidated: async () => y ? await K.current.ensureUrlValidatedWithErrorCheck(
      $,
      n || "",
      !!O,
      N
    ) : null,
    uploadPendingFile: async () => {
      const Q = ne.current;
      if (!Q) return null;
      H(!0), Z(0), X(!1);
      try {
        const oe = await fr(Q, i, Z);
        return ne.current = null, L(oe.provider || ""), X(!1), oe.url;
      } catch (oe) {
        throw X(!0), oe;
      } finally {
        H(!1), Z(0);
      }
    }
  }), [i, y, G, O, $, z, n, N, t, C]), J(() => {
    b(n), n && g && x(!0), T && (ne.current = null, le(null), se(!1), w == null || w(null));
  }, [n]), J(() => {
    g && n ? x(!0) : g && x(!1);
  }, [g]), J(() => {
    if (!S) return;
    let Q = !1;
    (y || !g) && (O || N && $.trim() && W($.trim()) > N) && (Q = !0), S(Q);
  }, [y, O, $, N, g, S]), J(() => {
    n && z && le(null);
  }, [n, z, le]), J(() => () => {
    var Q;
    (Q = K.current) == null || Q.dispose();
  }, []), J(() => {
    !ae || !z || te(z).catch((Q) => {
      console.error("[ImageUpload] SVGA preview load error:", Q);
    });
  }, [ae, z, te]);
  const Ie = ee(null), me = ee(null);
  J(() => {
    if (!n || !gr(n) || !(y || !g) || !Ie.current) {
      if (me.current) {
        try {
          me.current.stopAnimation(), me.current.clear();
        } catch {
        }
        me.current = null;
      }
      return;
    }
    if (me.current) {
      try {
        me.current.stopAnimation(), me.current.clear();
      } catch {
      }
      me.current = null;
    }
    const Q = Ie.current, oe = new ur.Player(Q);
    oe.loops = 0, oe.setContentMode("AspectFit"), me.current = oe;
    const Ee = Kr();
    if (Ee)
      return Ee.load(
        n,
        (ze) => {
          oe.setVideoItem(ze), oe.startAnimation();
        },
        (ze) => {
          console.error("[ImageUpload] SVGA URL preview load error:", ze);
        }
      ), () => {
        try {
          oe.stopAnimation(), oe.clear();
        } catch {
        }
        me.current = null;
      };
  }, [n, y, g]);
  const [Le, Te] = _(!1), [ye, Qe] = _(""), [Wt, pt] = _({ x: 0, y: 0 }), [zt, bt] = _(1), [It, et] = _(null), [hr, $e] = _(null), [Lt, St] = _(!1), Tt = A((Q, oe) => {
    et(oe);
  }, []), [wt, ft] = _(!1), We = ee(null);
  J(() => () => {
    We.current && clearTimeout(We.current);
  }, []);
  const k = A(async (Q) => {
    const oe = Hn(Q, v);
    if (!oe.valid) {
      q.error(oe.errorHint);
      return;
    }
    if (!Kn(Q, s)) {
      q.error(C(a.FILE_SIZE_EXCEEDS_MB, { max: s }));
      return;
    }
    try {
      await Yn(Q, v, E);
    } catch (Ee) {
      const ze = Ee instanceof Error ? Ee : new Error(String(Ee));
      q.error(ze.message || C("File load failed"));
      return;
    }
    if (c) {
      Qe(""), $e(Q), pt({ x: 0, y: 0 }), bt(1), et(null), St(!0), ft(!1), Te(!0);
      try {
        const Ee = await $n(Q);
        Qe(Ee);
      } catch {
        q.error(C("Image load failed")), Te(!1);
      } finally {
        St(!1), We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          ft(!0);
        }, 350);
      }
    } else
      await re(Q);
  }, [v, s, C, E, c, T]), re = async (Q) => {
    if (T) {
      ne.current = Q, le(Q);
      const oe = Q.type.startsWith("video/"), Ee = qn(Q);
      Se(oe), se(Ee), w == null || w(Q);
      return;
    }
    H(!0), Z(0);
    try {
      const oe = await fr(Q, i, Z);
      t(oe.url), L(oe.provider || ""), q.success(C("Upload Success"));
    } catch (oe) {
      const Ee = oe instanceof Error ? oe : new Error(String(oe));
      q.error(C(a.UPLOAD_FAILED_WITH_ERROR, { error: Ee.message || C(a.NETWORK_ERROR) }));
    } finally {
      H(!1), Z(0);
    }
  }, ce = async () => {
    if (!(!It || !ye))
      try {
        const Q = await Jn(ye, It);
        Te(!1), await re(Q);
      } catch {
        q.error(C("Crop failed"));
      }
  }, we = jn, Fe = A(Xn((Q) => {
    k(Q);
  }), [k]), qe = () => {
    K.current.handleUrlFocus();
  }, Xe = () => {
    K.current.handleUrlBlur(
      $,
      N
    );
  }, en = () => {
    K.current.handleUrlEnter(
      $,
      N
    );
  }, tn = (Q) => {
    Q == null || Q.stopPropagation(), K.current.cancelValidation(), V(!1), U(""), t(""), b(""), L(""), H(!1), Z(0), X(!1), T && (ne.current = null, le(null), Se(!1), se(!1), w == null || w(null));
  };
  return /* @__PURE__ */ u("div", { className: `image-upload-container ${m}`, children: [
    g && l && /* @__PURE__ */ u("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ e(
        Y,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${y ? "" : "active"}`,
          onClick: () => {
            K.current.cancelValidation(), V(!1), U(""), x(!1);
          },
          icon: /* @__PURE__ */ e(pr, { size: "12" }),
          children: C("Upload Image")
        }
      ),
      /* @__PURE__ */ e(
        Y,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${y ? "active" : ""}`,
          onClick: () => {
            K.current.cancelValidation(), V(!1), U(""), x(!0);
          },
          children: C(a.ENTER_URL)
        }
      )
    ] }),
    (y || !g) && /* @__PURE__ */ e("div", { className: "image-upload-url-input", children: /* @__PURE__ */ e(
      fe,
      {
        value: $,
        onChange: (Q) => {
          b(String(Q)), U(""), K.current.cancelValidation(), V(!1);
        },
        onFocus: qe,
        onBlur: Xe,
        onEnter: en,
        placeholder: C(a.ENTER_IMAGE_URL),
        status: O ? "error" : void 0,
        suffix: N ? G ? /* @__PURE__ */ e("span", { className: "input-suffix-validating", children: C("Validating") }) : /* @__PURE__ */ u("span", { className: `input-suffix-count${W($) > N ? " byte-overflow" : ""}`, children: [
          W($),
          "/",
          N
        ] }) : void 0
      }
    ) }),
    O && (y || !g) && /* @__PURE__ */ e("div", { className: "image-upload-url-error", children: O }),
    g && !y && /* @__PURE__ */ u(ue, { children: [
      z ? /* @__PURE__ */ u(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: d || "100%",
            height: f || 160
          },
          children: [
            B ? (
              // 正在上传时显示进度条覆盖层
              /* @__PURE__ */ u("div", { className: "image-upload-uploading-overlay", children: [
                /* @__PURE__ */ u("div", { className: "image-upload-progress-circle", children: [
                  /* @__PURE__ */ u("svg", { viewBox: "0 0 36 36", className: "progress-ring", children: [
                    /* @__PURE__ */ e(
                      "path",
                      {
                        className: "progress-ring-bg",
                        d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                      }
                    ),
                    /* @__PURE__ */ e(
                      "path",
                      {
                        className: "progress-ring-fill",
                        strokeDasharray: `${D}, 100`,
                        d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                      }
                    )
                  ] }),
                  /* @__PURE__ */ u("span", { className: "progress-percent", children: [
                    D,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ e("span", { className: "upload-status-text", children: C("Uploading") })
              ] })
            ) : /* @__PURE__ */ e(ue, { children: ae ? /* @__PURE__ */ e("div", { ref: F, className: "svga-preview-container" }) : Ce ? /* @__PURE__ */ e("video", { src: z, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ e("img", { src: z, alt: "preview" }) }),
            !B && M && /* @__PURE__ */ e("span", { className: "image-upload-provider-badge", children: M.toUpperCase() }),
            !B && j ? /* @__PURE__ */ e("span", { className: "image-upload-provider-badge upload-failed-badge", children: C("Upload Failed") }) : !B && !M ? /* @__PURE__ */ e("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: C("Pending Upload") }) : null,
            !B && /* @__PURE__ */ u("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => {
                    var Q;
                    return (Q = P.current) == null ? void 0 : Q.click();
                  },
                  title: C("Re-upload"),
                  children: /* @__PURE__ */ e(pr, {})
                }
              ),
              /* @__PURE__ */ e(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: tn,
                  title: C(a.DELETE),
                  children: /* @__PURE__ */ e(ar, {})
                }
              )
            ] })
          ]
        }
      ) : (
        /* 上传区域 */
        /* @__PURE__ */ e(
          "div",
          {
            className: `image-upload-dropzone ${B ? "uploading" : ""}`,
            onClick: () => {
              var Q;
              return !B && ((Q = P.current) == null ? void 0 : Q.click());
            },
            onDragOver: we,
            onDrop: Fe,
            style: { height: f || 120 },
            children: B ? /* @__PURE__ */ u("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ e("div", { className: "progress-bar", children: /* @__PURE__ */ e("div", { className: "progress-fill", style: { width: `${D}%` } }) }),
              /* @__PURE__ */ u("span", { className: "progress-text", children: [
                D,
                "%"
              ] })
            ] }) : /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ e(cn, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ e("span", { className: "upload-hint", children: I }),
              /* @__PURE__ */ e("span", { className: "upload-sub-hint", children: h || C(a.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: s }) })
            ] })
          }
        )
      ),
      /* @__PURE__ */ e(
        "input",
        {
          ref: P,
          type: "file",
          accept: v || "image/jpeg,image/png,image/gif,image/webp",
          style: { display: "none" },
          onChange: (Q) => {
            var Ee;
            const oe = (Ee = Q.target.files) == null ? void 0 : Ee[0];
            oe && k(oe), Q.target.value = "";
          }
        }
      )
    ] }),
    n && (y || !g) && /* @__PURE__ */ e(
      "div",
      {
        className: "image-upload-preview url-preview",
        style: {
          width: d || "100%",
          height: f || 120,
          marginTop: 8
        },
        children: gr(n) ? /* @__PURE__ */ e("div", { ref: Ie, className: "svga-preview-container" }) : Zn(n) ? /* @__PURE__ */ e("video", { src: n, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ e("img", { src: n, alt: "preview", onError: (Q) => {
          Q.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: Le,
        header: C("Crop Image"),
        onClose: () => Te(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => Te(!1), children: C(a.CANCEL) }),
          /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: ce, disabled: Lt || !ye, icon: /* @__PURE__ */ e(ln, { size: "14" }), children: C(a.CONFIRM_CROP) })
        ] }),
        children: /* @__PURE__ */ e("div", { className: "image-crop-area", children: Lt || !wt ? /* @__PURE__ */ u("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ e("div", { className: "loading-spinner" }),
          /* @__PURE__ */ e("span", { children: C("Image Loading") })
        ] }) : ye ? /* @__PURE__ */ e(
          Li,
          {
            image: ye,
            crop: Wt,
            zoom: zt,
            aspect: o,
            onCropChange: pt,
            onZoomChange: bt,
            onCropComplete: Tt
          }
        ) : null })
      }
    )
  ] });
});
function de({
  label: r,
  labelWidth: n = 100,
  requiredMark: t = !1,
  help: i,
  children: c,
  style: o,
  className: s
}) {
  return /* @__PURE__ */ u("div", { className: `form-field${s ? ` ${s}` : ""}`, style: o, children: [
    r !== void 0 && /* @__PURE__ */ e("div", { className: "form-field__label", style: { width: n, minWidth: n }, children: /* @__PURE__ */ u("label", { children: [
      t && /* @__PURE__ */ e("span", { className: "form-field__required", children: "*" }),
      r
    ] }) }),
    /* @__PURE__ */ u("div", { className: "form-field__content", children: [
      /* @__PURE__ */ e("div", { className: "form-field__controls", children: c }),
      i && /* @__PURE__ */ e("div", { className: "form-field__help", children: i })
    ] })
  ] });
}
function ut({ children: r, labelWidth: n, className: t, style: i }) {
  return /* @__PURE__ */ e("div", { className: `form-layout${t ? ` ${t}` : ""}`, style: i, children: n ? st.Children.map(r, (c) => st.isValidElement(c) && c.type === de ? st.cloneElement(c, { labelWidth: n }) : c) : r });
}
function Ai({ visible: r, onClose: n, onSuccess: t, uploadEnabled: i = !1, extraFieldsSlot: c, onCreate: o }) {
  var Se, ae, se;
  const { t: s } = ve(), p = Qn.map((F) => ({
    value: F.value,
    label: s(F.labelKey)
  })), [l, d] = _(vr()), [f, g] = _([]), [v, h] = _(!1), [N, m] = _(!1), [T, w] = _(""), [E, S] = _(""), [R, C] = _(!1), [I, P] = _(""), [B, H] = _(""), [D, Z] = _(null), [j, X] = _(""), M = ee(null), [L, y] = _(!1), x = (F, te) => {
    F === "success" ? q.success(te) : q.error(te);
  }, $ = async (F, te) => {
    try {
      await na(F), x("success", s(a.COPY_LABEL_COPIED, { label: te }));
    } catch (he) {
      const Ie = he instanceof Error ? he : new Error(String(he));
      x("error", s(a.COPY_FAILED, { error: Ie.message || s(a.NETWORK_ERROR) }));
    }
  }, b = () => {
    g([...f, { key: "", value: "" }]);
  }, G = (F, te, he) => {
    const Ie = [...f];
    Ie[F][te] = he, g(Ie);
  }, V = (F) => {
    g(f.filter((te, he) => he !== F));
  }, O = () => {
    var F;
    d(vr()), g([]), h(!1), m(!1), w(""), S(""), C(!1), P(""), H(""), Z(null), X(""), y(!1), (F = M.current) == null || F.reset();
  }, U = () => {
    O(), n();
  }, { loading: K, execute: ne } = ht({
    action: async () => {
      let F = "";
      try {
        F = await Yr({
          handle: M.current,
          hasPendingFile: L,
          fallbackUrl: l.coverUrl,
          label: s(a.COVER_IMAGE)
        });
      } catch (Le) {
        throw Le instanceof dr ? new Error(Le.message) : new Error(s(a.COVER_PROCESSING_FAILED));
      }
      const te = aa({
        formData: l,
        coverUrl: F,
        customInfos: f,
        useObsStreaming: R
      }), he = te.liveId, Ie = te.anchorId;
      await o(te), Z(null), X("");
      let me = !R;
      if (R) {
        const Le = await ia({
          liveId: he,
          anchorId: Ie,
          onStatusChange: P,
          messages: {
            getStreamInfoFailed: s(a.GET_STREAM_INFO_FAILED),
            importAccountFailed: s(a.IMPORT_ACCOUNT_FAILED),
            addRobotFailed: s(a.ADD_ROBOT_FAILED),
            pickSeatFailed: s(a.PICK_SEAT_FAILED),
            setupFailed: s(a.OBS_SETUP_FAILED)
          }
        });
        Z(Le.streamInfo), X(Le.streamInfoError), H(Le.setupError), me = Le.configuredSuccessfully;
      }
      return { obsConfiguredSuccessfully: me };
    },
    errorMessage: s(a.REQUEST_FAILED),
    onSuccess: (F) => {
      m(!0), x(
        "success",
        R && (F != null && F.obsConfiguredSuccessfully) ? s(a.LIVE_CREATED_SUCCESSFULLY_OBS) : s(a.LIVE_CREATED_SUCCESSFULLY)
      );
    }
  }), z = async () => {
    if (!l.anchorId.trim()) {
      x("error", s(a.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const F = W(l.anchorId);
    if (F > je) {
      x("error", s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES_CURRENT, { max: je, current: F }));
      return;
    }
    const te = W(l.liveName);
    if (te > ke) {
      x("error", s(a.TITLE_CANNOT_EXCEED_100_BYTES_CURRENT, { current: te }));
      return;
    }
    if (f.some(Ut)) {
      x("error", s(a.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    w(""), P(""), H(""), await ne();
  }, le = () => {
    O(), t();
  }, Ce = R ? I === "" || I === "creating" || I === "seating" ? {
    text: s(I === "creating" ? a.LOADING : I === "seating" ? a.LOADING : a.LOADING),
    error: !1
  } : I === "error" ? {
    text: s(a.OBS_CONFIG_FAILED_WITH_ERROR, { error: B }),
    error: !0
  } : D ? {
    text: s(a.OBS_READY_COPY_INFO),
    error: !1
  } : j ? {
    text: s(a.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: j }),
    error: !0
  } : {
    text: s(a.OBS_READY),
    error: !1
  } : D ? {
    text: s(a.OBS_READY_COPY_INFO),
    error: !1
  } : j ? {
    text: s(a.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: j }),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ e(
    ge,
    {
      visible: r,
      header: s(N ? a.CREATE_SUCCESS : a.CREATE_LIVE),
      onClose: U,
      width: be.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: N ? /* @__PURE__ */ e(
        Y,
        {
          shape: "round",
          theme: "primary",
          onClick: le,
          disabled: R && (I === "" || I === "creating" || I === "seating"),
          children: s(R && I !== "ready" && I !== "error" ? a.LOADING : a.COMPLETE)
        }
      ) : /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: U, children: s(a.CANCEL) }),
        /* @__PURE__ */ e(
          Y,
          {
            shape: "round",
            theme: "primary",
            onClick: z,
            loading: K,
            disabled: K || !l.anchorId.trim() || ((Se = M.current) == null ? void 0 : Se.isValidating) || ((ae = M.current) == null ? void 0 : ae.hasUrlError),
            children: s(K ? a.CREATING : a.CREATE)
          }
        )
      ] }),
      children: N ? (
        /* 创建成功提示 */
        /* @__PURE__ */ u("div", { className: "create-success-content", children: [
          /* @__PURE__ */ u("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ e("div", { className: "create-success-icon", children: I === "error" ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ e("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : R && (I === "" || I === "creating" || I === "seating") ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ e("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ e("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ e("h3", { children: s(a.LIVE_CREATED_SUCCESSFULLY) }),
            Ce.text && /* @__PURE__ */ e("p", { className: `create-success-description${Ce.error ? " is-error" : ""}`, children: Ce.text })
          ] }),
          D && /* @__PURE__ */ u("div", { className: "create-success-section", children: [
            /* @__PURE__ */ e("div", { className: "create-success-section-title", children: s(a.STREAM_INFO) }),
            /* @__PURE__ */ u("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: s(a.SERVER_URL) }),
                  /* @__PURE__ */ e(Y, { variant: "text", size: "small", icon: /* @__PURE__ */ e(He, { size: "14" }), onClick: () => $(D.serverUrl, s(a.SERVER_URL)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: D.serverUrl })
              ] }),
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: s(a.STREAM_KEY) }),
                  /* @__PURE__ */ e(Y, { variant: "text", size: "small", icon: /* @__PURE__ */ e(He, { size: 14 }), onClick: () => $(D.streamKey, s(a.STREAM_KEY)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: D.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ u(ut, { className: "create-live-form", labelWidth: lt(100), children: [
          /* @__PURE__ */ e(de, { label: s(a.LIVE_HOST), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: l.anchorId,
                onChange: (F) => d((te) => ({ ...te, anchorId: String(F) })),
                placeholder: s(a.ENTER_ANCHOR_ID),
                status: W(l.anchorId) > je ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(l.anchorId) > je ? " byte-overflow" : ""}`, children: [
                  W(l.anchorId),
                  "/",
                  je
                ] })
              }
            ),
            W(l.anchorId) > je && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES, { max: je }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: s(a.LIVE_TITLE), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: l.liveName,
                onChange: (F) => d((te) => ({ ...te, liveName: String(F) })),
                placeholder: s(a.ENTER_LIVE_TITLE),
                status: W(l.liveName) > ke ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(l.liveName) > ke ? " byte-overflow" : ""}`, children: [
                  W(l.liveName),
                  "/",
                  ke
                ] })
              }
            ),
            W(l.liveName) > ke && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: s(a.TITLE_CANNOT_EXCEED_100_BYTES) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: s(a.COVER_IMAGE), children: /* @__PURE__ */ e(
            Ft,
            {
              ref: M,
              value: l.coverUrl,
              onChange: (F) => {
                d((te) => ({ ...te, coverUrl: F })), y(!1);
              },
              type: "cover",
              uploadEnabled: i,
              cropEnabled: !0,
              aspectRatio: ea(l.seatTemplate),
              placeholder: s(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: i,
              onFileReady: (F) => y(!!F)
            }
          ) }),
          /* @__PURE__ */ e(de, { label: s(a.LAYOUT_TEMPLATE), requiredMark: !0, help: s(((se = ta(l.seatTemplate)) == null ? void 0 : se.descKey) || ""), children: /* @__PURE__ */ e(
            sr,
            {
              options: p,
              value: l.seatTemplate,
              onChange: (F) => d((te) => ({ ...te, seatTemplate: F })),
              style: { width: "100%" }
            }
          ) }),
          ra(l.seatTemplate) && /* @__PURE__ */ e(de, { label: s(a.MAX_SEATS), help: s(a.MAX_SEATS_HELP), children: /* @__PURE__ */ e(
            Qt,
            {
              value: l.maxSeatCount,
              onChange: (F) => d((te) => ({ ...te, maxSeatCount: Number(F) || 1 })),
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
          /* @__PURE__ */ e(De, { slot: c, props: { mode: "create", formData: { ...l }, customInfos: [...f] } }),
          /* @__PURE__ */ e(de, { label: s(a.STREAMING_METHOD), help: s(a.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ e(
            vn,
            {
              checked: R,
              onChange: (F) => C(F),
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
                  v ? /* @__PURE__ */ e(Fr, { size: "16" }) : /* @__PURE__ */ e(ir, { size: "16" }),
                  /* @__PURE__ */ e("span", { children: s(a.CUSTOM_INFORMATION) }),
                  f.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: f.length })
                ]
              }
            ),
            v && /* @__PURE__ */ u("div", { className: "custom-info-container", children: [
              f.map((F, te) => {
                const he = W(F.key), Ie = W(F.value), me = he > Ue.maxKeyBytes, Le = Ie > Ue.maxValueBytes, Te = Ut(F);
                return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                    fe,
                    {
                      value: F.key,
                      onChange: (ye) => G(te, "key", String(ye)),
                      placeholder: s(a.ENTER_KEY),
                      status: me || Te ? "error" : "default",
                      tips: me ? s(a.KEY_EXCEEDS_BYTES, { key: F.key, max: Ue.maxKeyBytes }) : Te ? s(a.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                    fe,
                    {
                      value: F.value,
                      onChange: (ye) => G(te, "value", String(ye)),
                      placeholder: s(a.ENTER_VALUE),
                      status: Le ? "error" : "default",
                      tips: Le ? s(a.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e(
                    Y,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => V(te),
                      title: s(a.DELETE),
                      icon: /* @__PURE__ */ e(ar, { size: "14" })
                    }
                  )
                ] }, te);
              }),
              f.length < Ue.maxCount && /* @__PURE__ */ e(Y, { variant: "text", className: "add-custom-info-btn", onClick: b, icon: /* @__PURE__ */ e(or, { size: "14" }), theme: "primary", children: s(a.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
function Ri({ visible: r, live: n, onClose: t, onSuccess: i, uploadEnabled: c = !1, extraFieldsSlot: o, onUpdate: s, onFetchDetail: p }) {
  var b, G;
  const { t: l } = ve(), [d, f] = _(Er()), [g, v] = _([]), [h, N] = _(!1), m = ee([]), [T, w] = _(Nr), [E, S] = _(!1), [R, C] = _(""), [I, P] = _(""), { loading: B, execute: H } = ht({
    action: async (V) => {
      const O = (n == null ? void 0 : n.id) || (n == null ? void 0 : n.liveId) || "";
      return s(O, V);
    },
    successMessage: l(a.LIVE_INFO_UPDATED),
    errorMessage: l("Update failed"),
    onSuccess: () => {
      setTimeout(() => {
        i({
          liveName: d.liveName.trim(),
          coverUrl: d.coverUrl
        }), x();
      }, 500);
    }
  }), D = ee(null), [Z, j] = _(!1);
  J(() => {
    n != null && n.coverUrl ? oa(n.coverUrl).then(w) : w(Nr);
  }, [n == null ? void 0 : n.coverUrl]), J(() => {
    if (n && r) {
      f({
        liveName: n.liveName || "",
        coverUrl: n.coverUrl || ""
      });
      const V = n.id || n.liveId;
      S(!0), p(V).then((O) => {
        const U = O == null ? void 0 : O.customInfo;
        if (U && typeof U == "object") {
          const K = Object.entries(U).map(([ne, z]) => ({
            key: ne,
            value: String(z)
          }));
          v(K), N(K.length > 0), m.current = K.map((ne) => ne.key);
        } else
          v([]), N(!1), m.current = [];
      }).catch(() => {
        if (n.customInfo && typeof n.customInfo == "object") {
          const O = Object.entries(n.customInfo).map(([U, K]) => ({
            key: U,
            value: String(K)
          }));
          v(O), N(O.length > 0), m.current = O.map((U) => U.key);
        } else
          v([]), N(!1), m.current = [];
      }).finally(() => S(!1));
    }
  }, [n == null ? void 0 : n.id, r]);
  const X = () => {
    if (g.length >= Ue.maxCount) {
      y("error", l("Custom info max count", { max: Ue.maxCount }));
      return;
    }
    v([...g, { key: "", value: "" }]);
  }, M = (V, O, U) => {
    const K = [...g];
    K[V][O] = U, v(K);
  }, L = (V) => {
    v(g.filter((O, U) => U !== V));
  }, y = (V, O) => {
    q.error(O);
  }, x = () => {
    var V;
    C(""), P(""), v([]), N(!1), m.current = [], j(!1), (V = D.current) == null || V.reset(), f(Er()), t();
  }, $ = async () => {
    if (!n) return;
    if (!d.liveName.trim()) {
      y("error", l(a.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const V = W(d.liveName);
    if (V > ke) {
      y("error", l("Title cannot exceed 100 bytes current", { current: V }));
      return;
    }
    if (g.some(Ut)) {
      y("error", l("Custom info key required"));
      return;
    }
    try {
      let O = "";
      try {
        O = await Yr({
          handle: D.current,
          hasPendingFile: Z,
          fallbackUrl: d.coverUrl,
          label: l(a.COVER_IMAGE)
        });
      } catch (z) {
        y("error", z instanceof dr ? z.message : l("Cover processing failed"));
        return;
      }
      const U = sa(g);
      if (U) {
        U.type === "key-too-long" ? y("error", l("Key {key} exceeds {max} bytes", { key: U.key, max: U.max })) : U.type === "value-too-long" ? y("error", l("Key {key} value exceeds 2KB", { key: U.key })) : U.type === "max-count" ? y("error", l("Custom info max count", { max: U.max })) : y("error", l("Total value size exceeds 16KB"));
        return;
      }
      const K = ca(g), ne = la(m.current, K);
      await H({
        liveId: n.id || n.liveId,
        liveName: d.liveName.trim(),
        coverUrl: O || void 0,
        customInfo: Object.keys(K).length > 0 ? K : void 0,
        deleteKeys: ne.length > 0 ? ne : void 0
      });
    } catch (O) {
      console.error("[EditLiveModal] Update failed:", O);
    }
  };
  return !r || !n ? null : /* @__PURE__ */ e(
    ge,
    {
      destroyOnClose: !0,
      visible: r,
      header: l(a.EDIT_LIVE),
      onClose: x,
      width: be.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: x, children: l(a.CANCEL) }),
        /* @__PURE__ */ e(
          Y,
          {
            shape: "round",
            theme: "primary",
            onClick: $,
            loading: B,
            disabled: B || !d.liveName.trim() || ((b = D.current) == null ? void 0 : b.isValidating) || ((G = D.current) == null ? void 0 : G.hasUrlError),
            children: l(B ? "Saving" : "Save")
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { className: "edit-live-form", labelWidth: lt(100), children: [
        /* @__PURE__ */ e(de, { label: l(a.LIVE_ID), children: /* @__PURE__ */ e(
          fe,
          {
            value: n.liveId || n.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ e(de, { label: l(a.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: d.liveName,
              onChange: (V) => f((O) => ({ ...O, liveName: String(V) })),
              placeholder: l(a.ENTER_LIVE_TITLE),
              status: W(d.liveName) > ke ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(d.liveName) > ke ? " byte-overflow" : ""}`, children: [
                W(d.liveName),
                "/",
                ke
              ] })
            }
          ),
          W(d.liveName) > ke && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: l(a.TITLE_CANNOT_EXCEED_100_BYTES) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: l(a.COVER_IMAGE), children: /* @__PURE__ */ e(
          Ft,
          {
            ref: D,
            value: d.coverUrl,
            onChange: (V) => {
              f((O) => ({ ...O, coverUrl: V })), j(!1);
            },
            type: "cover",
            uploadEnabled: c,
            cropEnabled: !0,
            aspectRatio: T,
            placeholder: l(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: c,
            onFileReady: (V) => j(!!V)
          }
        ) }),
        /* @__PURE__ */ e(De, { slot: o, props: { mode: "edit", live: n, formData: { ...d }, customInfos: [...g] } }),
        /* @__PURE__ */ u("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ u(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => N(!h),
              children: [
                h ? /* @__PURE__ */ e(Fr, { size: "16" }) : /* @__PURE__ */ e(ir, { size: "16" }),
                /* @__PURE__ */ e("span", { children: l(a.CUSTOM_INFORMATION) }),
                g.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: g.length })
              ]
            }
          ),
          h && /* @__PURE__ */ u("div", { className: "custom-info-container", children: [
            g.map((V, O) => {
              const U = W(V.key), K = W(V.value), ne = U > Ue.maxKeyBytes, z = K > Ue.maxValueBytes, le = Ut(V);
              return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                  fe,
                  {
                    value: V.key,
                    onChange: (Ce) => M(O, "key", String(Ce)),
                    placeholder: l("Enter Key"),
                    status: ne || le ? "error" : "default",
                    tips: ne ? l("Key exceeds byte limit", { max: Ue.maxKeyBytes }) : le ? l("Custom info key required") : ""
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                  fe,
                  {
                    value: V.value,
                    onChange: (Ce) => M(O, "value", String(Ce)),
                    placeholder: l("Enter Value"),
                    status: z ? "error" : "default",
                    tips: z ? l("Value exceeds 2KB limit") : ""
                  }
                ) }),
                /* @__PURE__ */ e(
                  Y,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => L(O),
                    title: l(a.DELETE),
                    icon: /* @__PURE__ */ e(ar, { size: 14 })
                  }
                )
              ] }, O);
            }),
            g.length < Ue.maxCount && /* @__PURE__ */ e(Y, { variant: "text", className: "add-custom-info-btn", onClick: X, icon: /* @__PURE__ */ e(or, { size: 14 }), theme: "primary", children: l("Add") })
          ] })
        ] })
      ] })
    },
    `edit-live-${n == null ? void 0 : n.id}`
  );
}
function Mi(r) {
  const n = ee(r);
  n.current = r, J(() => {
    const t = () => n.current();
    t();
    const i = new MutationObserver((c) => {
      for (const o of c)
        if (o.type === "attributes" && o.attributeName === "lang") {
          t();
          break;
        }
    });
    return i.observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] }), () => i.disconnect();
  }, []);
}
function Oi() {
  if (typeof document > "u") return 0;
  const r = document.createElement("div");
  r.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(r);
  const n = r.offsetWidth - r.clientWidth;
  return document.body.removeChild(r), n;
}
function Di(r) {
  return typeof r == "number" ? `${r}px` : r;
}
function xi(r, n) {
  return r[n];
}
function Vt({
  columns: r,
  data: n,
  rowKey: t,
  className: i = "",
  tableClassName: c = "",
  headerClassName: o = "",
  bodyClassName: s = "",
  rowClassName: p = "",
  loading: l = !1,
  loadingNode: d = null,
  emptyNode: f = null,
  bodyStyle: g,
  fitContent: v = !1,
  fitContentMaxRows: h = Da
}) {
  const N = ee(null), m = ee(null), T = ee(null), w = ee(null), E = ee(null), [S, R] = _({}), C = ee({}), [I, P] = _(0);
  Mi(() => P((L) => L + 1));
  const B = A((L) => L.fitContent || v && L.width === void 0, [v]), H = _e(() => {
    const L = {};
    for (const y of r) {
      let x;
      if (B(y)) {
        const $ = S[y.key];
        x = $ !== void 0 ? `${$}px` : typeof y.minWidth == "number" ? `${y.minWidth}px` : void 0;
      }
      x === void 0 && (x = Di(y.width)), L[y.key] = { width: x };
    }
    return L;
  }, [r, S, B]), D = _e(() => {
    const L = {};
    for (const y of r) {
      const x = { textAlign: y.align };
      y.ellipsis ? (x.whiteSpace = "nowrap", x.overflow = "hidden", x.textOverflow = "ellipsis") : B(y) && !y.flexible && (x.whiteSpace = "nowrap"), L[y.key] = x;
    }
    return L;
  }, [r, B]), Z = _e(() => Oa(r, S, B) ?? {}, [r, S, B]);
  mr(() => {
    const L = r.map((V, O) => ({ column: V, index: O })).filter(({ column: V }) => B(V));
    if (L.length === 0 || typeof document > "u") {
      C.current = {}, R((V) => Object.keys(V).length === 0 ? V : {});
      return;
    }
    let y = 0;
    const x = () => {
      var Ce, Se;
      const V = ((Ce = T.current) == null ? void 0 : Ce.querySelectorAll("thead th")) || [], O = Array.from(((Se = E.current) == null ? void 0 : Se.querySelectorAll("tbody tr")) || []).slice(0, h), U = [], K = [];
      L.forEach(({ column: ae, index: se }) => {
        const F = V[se];
        F && (U.push(F), K.push(ae.key)), O.forEach((te) => {
          const he = te.children[se];
          he && (U.push(he), K.push(ae.key));
        });
      });
      const ne = ka(U), z = {};
      ne.forEach((ae, se) => {
        const F = K[se];
        (z[F] === void 0 || ae > z[F]) && (z[F] = ae);
      });
      const le = {};
      for (const { column: ae } of L)
        z[ae.key] !== void 0 && (le[ae.key] = Pa(z[ae.key], ae.minWidth, ae.maxWidth));
      C.current = le;
    }, $ = () => {
      var K;
      const V = C.current;
      if (Object.keys(V).length === 0) {
        R((ne) => Object.keys(ne).length === 0 ? ne : {});
        return;
      }
      const O = ((K = w.current) == null ? void 0 : K.clientWidth) ?? 0, U = xa(
        r,
        V,
        O,
        B
      );
      R((ne) => Ua(ne, U) ? ne : U);
    }, b = () => {
      x(), $();
    };
    y = window.requestAnimationFrame(b);
    const G = new ResizeObserver(() => {
      window.cancelAnimationFrame(y), y = window.requestAnimationFrame($);
    });
    return N.current && G.observe(N.current), () => {
      window.cancelAnimationFrame(y), G.disconnect();
    };
  }, [r, n, l, v, h, I, B]), mr(() => {
    var $;
    const L = N.current, y = ($ = E.current) == null ? void 0 : $.parentElement;
    if (!L || !y) return;
    const x = y.scrollHeight > y.clientHeight ? Oi() : 0;
    L.style.setProperty("--scrollbar-width", `${x}px`);
  }, [n]);
  const j = /* @__PURE__ */ e("colgroup", { children: r.map((L) => /* @__PURE__ */ e("col", { style: H[L.key] }, L.key)) }), X = (L, y) => typeof t == "function" ? t(L, y) : String(L[t]), M = (L, y) => typeof p == "function" ? p(L, y) : p;
  return J(() => {
    const L = m.current, y = w.current;
    if (!L || !y) return;
    const x = () => {
      L && y && (L.scrollLeft = y.scrollLeft);
    };
    return y.addEventListener("scroll", x), () => y.removeEventListener("scroll", x);
  }, []), /* @__PURE__ */ u("div", { ref: N, className: `fixed-header-table ${i}`.trim(), children: [
    /* @__PURE__ */ e("div", { ref: m, className: `fixed-header-table__header ${o}`.trim(), children: /* @__PURE__ */ u(
      "table",
      {
        ref: T,
        className: `fixed-header-table__table ${c}`.trim(),
        style: Z,
        children: [
          j,
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: r.map((L) => /* @__PURE__ */ e("th", { className: L.className, style: D[L.key], children: L.headerRender ? L.headerRender() : L.title }, L.key)) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ e("div", { ref: w, className: `fixed-header-table__body ${s}`.trim(), style: g, children: l ? /* @__PURE__ */ e("div", { className: "fixed-header-table__loading", children: d }) : n.length === 0 ? /* @__PURE__ */ e("div", { className: "fixed-header-table__empty", children: f }) : /* @__PURE__ */ u(
      "table",
      {
        ref: E,
        className: `fixed-header-table__table ${c}`.trim(),
        style: Z,
        children: [
          j,
          /* @__PURE__ */ e("tbody", { children: n.map((L, y) => /* @__PURE__ */ e("tr", { className: M(L, y), children: r.map((x) => /* @__PURE__ */ e("td", { className: x.className, style: D[x.key], children: x.render ? x.render(L, y) : xi(L, x.key) }, x.key)) }, X(L, y))) })
        ]
      }
    ) })
  ] });
}
function Ye({ actions: r, className: n = "" }) {
  return /* @__PURE__ */ e("div", { className: `list-action-buttons ${n}`.trim(), children: r.map((t) => /* @__PURE__ */ u(
    "button",
    {
      type: "button",
      className: `list-action-button${t.danger ? " list-action-button--danger" : ""}`,
      title: t.title,
      disabled: t.disabled,
      onClick: t.onClick,
      children: [
        t.icon && /* @__PURE__ */ e("span", { className: "list-action-button__icon", children: t.icon }),
        /* @__PURE__ */ e("span", { className: "list-action-button__text", children: t.label }),
        t.suffixCaret && /* @__PURE__ */ e("span", { className: "list-action-button__caret", "aria-hidden": "true" })
      ]
    },
    t.key
  )) });
}
function wo() {
  var P, B, H, D, Z, j, X, M;
  const r = _t(), { t: n } = ve(), {
    createLive: t,
    updateLive: i,
    fetchLiveDetail: c,
    endLive: o
  } = mt(), s = (P = yt().components) == null ? void 0 : P.roomList, p = ee(null);
  p.current || (p.current = new da({
    endLive: o,
    onEnterLive: (L) => r(`/live-control/${L}`),
    t: n,
    toast: q
  }));
  const l = p.current, d = tr(l.subscribe, l.getState, l.getState);
  J(() => (l.init(), () => l.dispose()), []);
  const f = Ui(), g = _e(() => ua({ hasExtraColumn: !!(s != null && s.tableExtraColumns) }).map((y) => {
    switch (y.key) {
      case "liveId":
        return {
          ...y,
          title: n(a.LIVE_ID),
          render: (x) => /* @__PURE__ */ u("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ e("span", { className: "live-list-id-text", children: x.liveId }),
            /* @__PURE__ */ e(
              He,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => l.copyText(x.liveId, n(a.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ...y,
          title: n(a.LIVE_TITLE),
          render: (x) => /* @__PURE__ */ e("span", { className: "live-list-text", children: x.liveName || "-" })
        };
      case "coverUrl":
        return {
          ...y,
          title: n(a.COVER_IMAGE),
          render: (x) => /* @__PURE__ */ e("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ e("img", { src: x.coverUrl || cr, alt: x.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ...y,
          title: n(a.ANCHOR_ID),
          render: (x) => {
            var $;
            return /* @__PURE__ */ e("span", { className: "live-list-text", children: (($ = x.anchor) == null ? void 0 : $.userId) || "-" });
          }
        };
      case "createdAt":
        return {
          ...y,
          title: n(a.CREATE_TIME),
          render: (x) => /* @__PURE__ */ e("span", { className: "live-list-text", children: ma(x.createdAt) })
        };
      case "customer-extra":
        return {
          ...y,
          title: "",
          render: (x) => /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.tableExtraColumns, props: { live: x } })
        };
      case "actions":
        return {
          ...y,
          title: n(a.ACTIONS),
          render: (x) => {
            const $ = ha({
              live: x,
              t: n,
              icons: {
                enter: /* @__PURE__ */ e(un, {}),
                detail: /* @__PURE__ */ e(Be, {}),
                edit: /* @__PURE__ */ e(Jt, {}),
                delete: /* @__PURE__ */ e(dn, {})
              },
              onEnter: (b) => l.enterLive(b),
              onDetail: (b) => void l.showDetail(b),
              onEdit: (b) => l.openEditModal(b),
              onDelete: (b) => l.requestDelete(b)
            });
            return /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ e(Ye, { actions: $ }),
              /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.rowActions, props: { live: x } })
            ] });
          }
        };
      default:
        return { ...y, title: "" };
    }
  }), [n, s, l]), { lives: v, loading: h, refreshing: N, currentPage: m, hasMoreData: T, searchInput: w, obsModal: E, confirmDialog: S, isCreateModalVisible: R, isEditModalVisible: C, editingLive: I } = d;
  return /* @__PURE__ */ u("div", { className: "live-list-page", children: [
    /* @__PURE__ */ u("div", { className: "live-list-header", children: [
      /* @__PURE__ */ e("h1", { className: "live-list-title", children: n(a.LIVE_MANAGEMENT) }),
      /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.beforeToolbar, props: { lives: v, loading: h } }),
      /* @__PURE__ */ u("div", { className: "header-actions", children: [
        /* @__PURE__ */ e(
          fe,
          {
            value: w,
            onChange: (L) => l.setSearchInput(String(L)),
            onEnter: () => {
              if (pa(w, Kt)) {
                q.error(n(a.INPUT_TOO_LONG));
                return;
              }
              l.search();
            },
            clearable: !0,
            onClear: () => void l.clearSearch(),
            placeholder: n(a.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ e(rr, { size: 16 }),
            style: { width: 220 },
            status: W(w) > Kt ? "error" : "default",
            tips: W(w) > Kt ? n(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(
          Y,
          {
            shape: "round",
            variant: "outline",
            disabled: N || h,
            onClick: () => void l.refresh(),
            icon: /* @__PURE__ */ e(nr, { className: N ? "spinning" : "" }),
            children: n(a.REFRESH)
          }
        ),
        /* @__PURE__ */ e(
          Y,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ e(or, {}),
            onClick: () => l.openCreateModal(),
            children: n(a.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.afterToolbar, props: { lives: v, loading: h } })
    ] }),
    /* @__PURE__ */ e(Wr, { className: "live-list-card", children: /* @__PURE__ */ e(
      Vt,
      {
        columns: g,
        data: v,
        rowKey: "liveId",
        loading: h,
        tableClassName: "live-list-table",
        bodyClassName: "live-list-content",
        rowClassName: "live-list-row",
        loadingNode: /* @__PURE__ */ u("div", { className: "live-list-loading-container", children: [
          /* @__PURE__ */ e("div", { className: "live-list-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "live-list-loading-text", children: n(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "live-list-empty-container", children: /* @__PURE__ */ e("span", { className: "live-list-empty-text", children: n(a.NO_LIVE_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ u("div", { className: "live-list-pagination", children: [
      /* @__PURE__ */ e(
        Y,
        {
          variant: "outline",
          size: "small",
          disabled: m <= 1,
          onClick: () => l.goToPage(1),
          children: n(a.FIRST_PAGE)
        }
      ),
      /* @__PURE__ */ e(
        Y,
        {
          variant: "outline",
          size: "small",
          disabled: m <= 1,
          onClick: () => l.goToPage(m - 1),
          children: n(a.PREVIOUS_PAGE)
        }
      ),
      /* @__PURE__ */ e("span", { className: "page-info", children: n(a.PAGE, { page: m }) }),
      /* @__PURE__ */ e(
        Y,
        {
          variant: "outline",
          size: "small",
          disabled: !T,
          onClick: () => l.goToPage(m + 1),
          children: n(a.NEXT_PAGE)
        }
      )
    ] }),
    /* @__PURE__ */ e(
      Ai,
      {
        visible: R,
        onClose: () => l.closeCreateModal(),
        onSuccess: () => l.onLiveCreated(),
        onCreate: t,
        uploadEnabled: f
      }
    ),
    I && /* @__PURE__ */ e(
      Ri,
      {
        visible: C,
        live: {
          id: I.liveId,
          liveName: I.liveName,
          coverUrl: I.coverUrl,
          customInfo: I.customInfo ? typeof I.customInfo == "string" ? (() => {
            try {
              return JSON.parse(I.customInfo);
            } catch {
              return;
            }
          })() : I.customInfo : void 0
        },
        onClose: () => l.closeEditModal(),
        onSuccess: (L) => l.onLiveEdited(L),
        onUpdate: (L, y) => i({ ...y, liveId: L }),
        onFetchDetail: c,
        uploadEnabled: f,
        extraFieldsSlot: s == null ? void 0 : s.roomFormExtraFields
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: S.visible,
        header: S.title,
        onClose: () => l.cancelDelete(),
        width: be.CONFIRM,
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => l.cancelDelete(), children: n(a.CANCEL) }),
          /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: () => void l.confirmDelete(), children: n(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: S.content })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: E.visible && !!E.live,
        header: n(a.LIVE_INFORMATION),
        onClose: () => l.closeDetail(),
        width: be.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => l.closeDetail(), children: n(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "live-info-form", children: [
          /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: n(a.BASIC_INFORMATION) }),
            /* @__PURE__ */ u("div", { className: "live-info-card", children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.ANCHOR_ID) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value", children: ((H = (B = E.live) == null ? void 0 : B.anchor) == null ? void 0 : H.userId) || "-" }),
                  ((Z = (D = E.live) == null ? void 0 : D.anchor) == null ? void 0 : Z.userId) && /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => E.live && void l.copyText(E.live.anchor.userId, n(a.LIVE_HOST)),
                      children: /* @__PURE__ */ e(He, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.LIVE_ID) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: ((j = E.live) == null ? void 0 : j.liveId) || "-" }) })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.LIVE_TITLE) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: ((X = E.live) == null ? void 0 : X.liveName) || "-" }) })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.LIVE_COVER) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: ((M = E.live) == null ? void 0 : M.coverUrl) || "-" }) })
              ] })
            ] })
          ] }),
          (E.streamInfo || E.actionLoading === "stream") && /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: n(a.STREAM_INFO) }),
            /* @__PURE__ */ e("div", { className: "live-info-card", children: E.streamInfo ? /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.SERVER_URL) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: E.streamInfo.serverUrl }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => E.streamInfo && void l.copyText(E.streamInfo.serverUrl, n(a.SERVER_URL)),
                      children: /* @__PURE__ */ e(He, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.STREAM_KEY) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: E.streamInfo.streamKey }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => E.streamInfo && void l.copyText(E.streamInfo.streamKey, n(a.STREAM_KEY)),
                      children: /* @__PURE__ */ e(He, { size: 14 })
                    }
                  )
                ] })
              ] })
            ] }) : /* @__PURE__ */ e("div", { className: "live-info-row", children: /* @__PURE__ */ e("span", { className: "live-info-label", style: { width: "auto" }, children: n(a.GETTING_STREAM_INFO) }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function Ui() {
  const [r, n] = _(!1);
  return J(() => {
    let t = !1;
    return $r().then((i) => {
      t || n(i);
    }), () => {
      t = !0;
    };
  }, []), r;
}
function ki() {
  const [r, n] = _(""), [t, i] = _(""), c = A((o, s) => {
    o === "success" ? (n(s), setTimeout(() => n(""), 3e3)) : (i(s), setTimeout(() => i(""), 3e3));
  }, []);
  return {
    successMsg: r,
    errorMsg: t,
    showMessage: c
  };
}
function Pi({
  liveId: r,
  onLiveEnded: n
}) {
  const { currentLive: t, setCurrentLive: i } = mt(), { joinLive: c, leaveLive: o, subscribeEvent: s, unsubscribeEvent: p } = Wa(), { login: l, loginUserInfo: d } = jr(), [f, g] = _(!1), v = ee(""), h = ee(!1), N = ee(null), m = ee(n);
  J(() => {
    m.current = n;
  }, [n]);
  const T = (d == null ? void 0 : d.userId) || "", w = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  J(() => {
    if (w) {
      console.log("[useLiveControl] Mock mode, skipping TUILogin"), g(!0);
      return;
    }
    if (f) return;
    (async () => {
      var C;
      try {
        const I = await lr();
        if (!I || I.sdkAppId === 0) {
          console.error("[useLiveControl] No valid credentials");
          return;
        }
        await l({
          SDKAppID: I.sdkAppId,
          userID: I.userId,
          userSig: I.userSig
        }), console.log("[useLiveControl] TUILogin success"), g(!0);
      } catch (I) {
        (I == null ? void 0 : I.code) === 2025 || (C = I == null ? void 0 : I.message) != null && C.includes("重复登录") ? (console.log("[useLiveControl] Already logged in"), g(!0)) : console.error("[useLiveControl] TUILogin failed:", I);
      }
    })();
  }, [w, f, l]), J(() => {
    if (r)
      return console.log("[useLiveControl] Setting current live:", r), i(r), () => {
        console.log("[useLiveControl] Clearing current live"), i(null);
      };
  }, [r, i]);
  const E = A(async () => {
    if (!(!r || !t || !f)) {
      if (v.current === r) {
        console.log("[useLiveControl] Already joined live:", r);
        return;
      }
      try {
        if (console.log("[useLiveControl] Joining live:", r), await c({ liveId: r }), v.current = r, !h.current && s) {
          const R = () => {
            var C;
            console.log("[useLiveControl] Live ended event received"), (C = m.current) == null || C.call(m);
          };
          N.current = R, s(br.ON_LIVE_ENDED, R), h.current = !0;
        }
        console.log("[useLiveControl] Successfully joined live:", r);
      } catch (R) {
        console.error("[useLiveControl] Failed to join live:", R);
      }
    }
  }, [r, t, f, c, s]);
  J(() => {
    E();
  }, [E]), J(() => {
    v.current = "";
  }, [r]), J(() => () => {
    console.log("[useLiveControl] Component unmounting, cleaning up"), h.current && p && N.current && (p(br.ON_LIVE_ENDED, N.current), h.current = !1), v.current && o().catch((R) => {
      console.error("[useLiveControl] Failed to leave live on unmount:", R);
    });
  }, [o, p]);
  const S = A((R) => {
    console.log("[useLiveControl] Manually leaving live"), o().then(() => {
      v.current = "", R == null || R();
    }).catch((C) => {
      console.error("[useLiveControl] Failed to leave live:", C);
    });
  }, [o]);
  return {
    currentLive: t,
    tuiLoginReady: f,
    currentUserId: T,
    handleLeaveLive: S
  };
}
function Fi({
  liveControlSlots: r,
  liveInfo: n,
  currentLive: t,
  liveAnchorAvatar: i,
  liveAnchorName: c,
  isVoiceLive: o,
  isMockMode: s,
  liveEndedOverlayVisible: p,
  onLeaveLive: l,
  t: d
}) {
  return /* @__PURE__ */ u("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ e(De, { slot: r == null ? void 0 : r.beforeLiveInfo, props: { liveInfo: n } }),
    /* @__PURE__ */ u("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        Pt,
        {
          className: "anchor-avatar",
          src: i,
          name: c,
          title: c
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: p ? d("Live Ended") : (t == null ? void 0 : t.liveName) || (n == null ? void 0 : n.liveName) || d(a.LOADING) })
    ] }),
    /* @__PURE__ */ u("div", { className: "video-stage", children: [
      n != null && n.coverUrl ? /* @__PURE__ */ e(
        "div",
        {
          className: "video-blur-bg",
          style: {
            backgroundImage: `url(${n.coverUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }
        }
      ) : /* @__PURE__ */ e("div", { className: "video-blur-bg-placeholder" }),
      /* @__PURE__ */ u(
        "div",
        {
          className: `player-container${o ? " player-container-voice" : ""}`,
          style: { position: "relative" },
          children: [
            s ? n != null && n.coverUrl ? /* @__PURE__ */ e("div", { className: "mock-cover-preview", children: /* @__PURE__ */ e("img", { src: n.coverUrl, alt: "cover", className: "mock-cover-img" }) }) : null : /* @__PURE__ */ e(za, {}),
            p && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ u("div", { className: "live-state-overlay-content", children: [
              /* @__PURE__ */ e("div", { className: "live-state-overlay-title", children: d("Live Ended") }),
              /* @__PURE__ */ e(
                Y,
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
const Gi = 12 * 1024, Vi = (r) => new TextEncoder().encode(r).length, ct = { current: {} }, Wi = st.memo(
  ({ message: r, style: n }) => {
    var l, d;
    const t = r.sender.userId, i = t === ct.current.anchorUserId, c = r.sender.nameCard || r.sender.userName || t, o = r.messageType === 0 ? r.textContent : r.data || "", s = fa(o);
    return /* @__PURE__ */ u(
      "div",
      {
        className: `message-item${i ? " host" : ""}`,
        style: n,
        onClick: (f) => {
          var g, v;
          (v = (g = ct.current).onMessageClick) == null || v.call(g, f, r);
        },
        children: [
          i && /* @__PURE__ */ e("span", { className: "message-badge", children: ((d = (l = ct.current).t) == null ? void 0 : d.call(l, a.HOST)) || a.HOST }),
          /* @__PURE__ */ u("span", { className: "message-username", children: [
            c,
            ": "
          ] }),
          /* @__PURE__ */ e("span", { className: "message-content", children: s.length > 0 ? s.map((f, g) => f.type === "text" ? /* @__PURE__ */ e("span", { className: "message-text", children: f.text }, `t${g}`) : /* @__PURE__ */ e(
            "img",
            {
              src: f.src,
              alt: f.key,
              className: "message-emoji",
              loading: "lazy",
              draggable: !1
            },
            `e${g}-${f.key}`
          )) : /* @__PURE__ */ e("span", { className: "message-text", children: o }) })
        ]
      }
    );
  },
  (r, n) => r.message.liveId === n.message.liveId && r.message.sequence === n.message.sequence && r.style === n.style
), zi = ({ liveId: r, anchorUserId: n, onMuteUser: t, onBanUser: i, mutedList: c = [], bannedList: o = [] }) => {
  const { t: s } = ve(), { loginUserInfo: p } = jr(), { audienceList: l, disableSendMessage: d } = Ba(), [f, g] = _(!1), [v, h] = _({ top: 0, left: 0 }), [N, m] = _(null), [T, w] = _(""), [E, S] = _(!1), R = ee(null), C = ee(null), I = n;
  ct.current.t = s;
  const P = (M) => l == null ? void 0 : l.find((L) => L.userId === M), B = (M) => {
    const L = P(M);
    if (L)
      return L.isMessageDisabled === !0;
    const y = c.find((x) => x.userId === M);
    return y ? y.endTime > Date.now() / 1e3 : !1;
  }, H = (M) => {
    const L = o.find((y) => y.userId === M);
    return L ? L.endTime > Date.now() / 1e3 : !1;
  };
  J(() => {
    if (!f) return;
    const M = (L) => {
      setTimeout(() => {
        C.current && C.current.contains(L.target) || (g(!1), m(null));
      }, 100);
    };
    return document.addEventListener("mousedown", M), () => {
      document.removeEventListener("mousedown", M);
    };
  }, [f]);
  const D = A((M, L) => {
    if (M.stopPropagation(), console.log("[MessageList] handleMessageClick called", {
      messageSender: L.sender.userId,
      loginUserId: p == null ? void 0 : p.userId,
      anchorUserId: I
    }), L.sender.userId === (p == null ? void 0 : p.userId)) {
      console.log("[MessageList] Own message, no menu shown");
      return;
    }
    if (L.sender.userId === I) {
      console.log("[MessageList] Anchor message, no menu shown");
      return;
    }
    if (I && L.sender.userId === Ot(I))
      return;
    const y = M.target.closest(".message-item");
    if (!y) {
      console.log("[MessageList] message-item element not found");
      return;
    }
    const x = y.getBoundingClientRect(), $ = x.bottom + 4, b = Math.min(x.left, window.innerWidth - 160);
    console.log("[MessageList] Showing dropdown menu", { top: $, left: b }), h({ top: $, left: Math.max(0, b) }), m(L), g(!0);
  }, [p, I]);
  J(() => {
    ct.current.anchorUserId = I, ct.current.onMessageClick = D;
  });
  const Z = A(async (M) => {
    if (M == null || M.preventDefault(), E) return;
    const L = T.trim();
    if (!L) {
      q.warning(s(a.MESSAGE_CONTENT_REQUIRED));
      return;
    }
    if (!r) {
      q.error(s(a.LIVE_NOT_FOUND));
      return;
    }
    if (Vi(L) > Gi) {
      q.error(s(a.MESSAGE_CONTENT_TOO_LONG, { max: "12KB" }));
      return;
    }
    S(!0);
    try {
      const y = await ga(r, L);
      if ((y == null ? void 0 : y.ErrorCode) !== void 0 && y.ErrorCode !== 0)
        throw new Error(y.ErrorInfo || s(a.SEND_FAILED));
      if (y != null && y.ActionStatus && y.ActionStatus !== "OK")
        throw new Error(y.ErrorInfo || s(a.SEND_FAILED));
      w(""), q.success(s(a.MESSAGE_SENT));
    } catch (y) {
      const x = y, $ = x.ErrorInfo || (x instanceof Error ? x.message : String(x)) || s(a.UNKNOWN_HOST);
      q.error(s(a.SEND_FAILED_WITH_ERROR, { error: $ }));
    } finally {
      S(!1);
    }
  }, [T, r, E, s]), j = () => {
    if (N && i) {
      const M = N.sender.userId;
      if (I && M !== Ot(I)) {
        const L = N.sender.userName || N.sender.nameCard || N.sender.userId, y = H(M);
        i(M, L, y);
      }
    }
    g(!1), m(null);
  }, X = async () => {
    if (!N) return;
    const M = N.sender.userId;
    if (I && M === Ot(I)) {
      g(!1), m(null);
      return;
    }
    const L = N.sender.userName || N.sender.nameCard || N.sender.userId, y = B(M);
    try {
      d ? (await d({ userId: M, isDisable: !y }), console.log(y ? "Unmute successful" : "Mute successful")) : t && t(M, L, y);
    } catch (x) {
      console.error("SDK mute failed, using fallback method:", x), t && t(M, L, y);
    }
    g(!1), m(null);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: "message-list-container",
      ref: R,
      children: [
        /* @__PURE__ */ e("div", { className: "message-list-scroll-area barrage-list-wrapper", children: /* @__PURE__ */ e(
          Ha,
          {
            Message: Wi
          }
        ) }),
        /* @__PURE__ */ u("form", { className: "admin-message-composer", onSubmit: Z, children: [
          /* @__PURE__ */ e(
            "input",
            {
              className: "admin-message-input",
              value: T,
              onChange: (M) => w(M.target.value),
              placeholder: s(a.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
              disabled: E || !r
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "submit",
              className: "admin-message-send-btn",
              disabled: E || !r || !T.trim(),
              children: s(E ? a.SENDING : a.SEND_MESSAGE)
            }
          )
        ] }),
        f && N && $a(
          /* @__PURE__ */ u(
            "div",
            {
              ref: C,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: v.top,
                left: v.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: X, children: B(N.sender.userId) ? /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(xt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.UNMUTE) })
                ] }) : /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(Gr, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: j, children: H(N.sender.userId) ? /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(hn, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.UNBAN) })
                ] }) : /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(Vr, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.BAN) })
                ] }) })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}, Bi = st.memo(zi);
function Hi({
  liveId: r,
  activeTab: n,
  onActiveTabChange: t,
  isAllMuted: i,
  allMuteLoading: c,
  onAllMuteChange: o,
  currentUserId: s,
  anchorUserId: p,
  memberManagementHook: l,
  onOpenAudienceDropdown: d,
  onOpenMutedModal: f,
  onOpenBannedModal: g,
  t: v
}) {
  return /* @__PURE__ */ u("div", { className: "left-interaction-card", children: [
    /* @__PURE__ */ u("div", { className: "interaction-tabs-header", children: [
      /* @__PURE__ */ u(
        Bt,
        {
          value: n,
          onChange: (h) => t(h),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(Bt.TabPanel, { value: "chat", label: v(a.MESSAGE_LIST) }),
            /* @__PURE__ */ e(Bt.TabPanel, { value: "audience", label: v(a.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          En,
          {
            value: i,
            disabled: c,
            onChange: (h) => o(!!h)
          }
        ),
        /* @__PURE__ */ e("span", { className: "all-mute-label", children: v(a.ALL_MEMBER_MUTE) })
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "interaction-body", children: [
      /* @__PURE__ */ u(
        "div",
        {
          className: "chat-stream-sidebar",
          style: {
            height: "100%",
            display: n === "chat" ? "flex" : "none",
            flexDirection: "column"
          },
          children: [
            i && /* @__PURE__ */ u("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ e("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ e("span", { children: v(a.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ e(
              Bi,
              {
                liveId: r,
                anchorUserId: p,
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
          style: { display: n === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(Ka, { height: "99%", children: ({ audience: h }) => {
              if (h.userId === s)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: v(a.ME) });
              const N = Ot(p);
              return h.userRole === 0 || h.userId === N ? null : /* @__PURE__ */ u("div", { className: "audience-row-actions", children: [
                l.isUserMuted(h.userId) && /* @__PURE__ */ e("span", { className: "audience-muted-badge", children: v(a.MUTED) }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: v(a.MORE_ACTIONS),
                    onClick: (m) => {
                      m.stopPropagation(), d(
                        m,
                        h.userId,
                        h.userName || h.userId,
                        l.isUserMuted(h.userId)
                      );
                    },
                    children: /* @__PURE__ */ e(mn, { size: 18 })
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
              /* @__PURE__ */ u("button", { className: "audience-bottom-btn", onClick: g, children: [
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
function Ki({
  liveControlSlots: r,
  liveInfo: n,
  liveId: t,
  activeTab: i,
  onActiveTabChange: c,
  isAllMuted: o,
  allMuteLoading: s,
  onAllMuteChange: p,
  memberManagementHook: l,
  onOpenAudienceDropdown: d,
  onOpenMutedModal: f,
  onOpenBannedModal: g,
  onLeaveLive: v,
  onLiveEnded: h,
  t: N
}) {
  var H, D, Z;
  const { currentLive: m, currentUserId: T, handleLeaveLive: w } = Pi({
    liveId: t,
    onLiveEnded: h
  }), E = _e(
    () => {
      var j;
      return ((j = m == null ? void 0 : m.liveOwner) == null ? void 0 : j.userId) || (n == null ? void 0 : n.anchor.id) || "";
    },
    [(H = m == null ? void 0 : m.liveOwner) == null ? void 0 : H.userId, n == null ? void 0 : n.anchor.id]
  ), S = _e(
    () => {
      var j;
      return (n == null ? void 0 : n.anchor.avatar) || ((j = m == null ? void 0 : m.liveOwner) == null ? void 0 : j.avatarUrl) || "";
    },
    [n == null ? void 0 : n.anchor.avatar, (D = m == null ? void 0 : m.liveOwner) == null ? void 0 : D.avatarUrl]
  ), R = _e(
    () => {
      var j;
      return (n == null ? void 0 : n.anchor.name) || ((j = m == null ? void 0 : m.liveOwner) == null ? void 0 : j.userName) || N("Unknown Anchor");
    },
    [n == null ? void 0 : n.anchor.name, (Z = m == null ? void 0 : m.liveOwner) == null ? void 0 : Z.userName, N]
  ), C = _e(
    () => (m == null ? void 0 : m.roomType) === "Voice",
    [m == null ? void 0 : m.roomType]
  ), I = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  return /* @__PURE__ */ u("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      Fi,
      {
        liveControlSlots: r,
        liveInfo: n,
        currentLive: m,
        liveAnchorAvatar: S,
        liveAnchorName: R,
        isVoiceLive: C,
        isMockMode: I,
        liveEndedOverlayVisible: !m && !I,
        onLeaveLive: () => {
          w(v);
        },
        t: N
      }
    ),
    /* @__PURE__ */ e(
      Hi,
      {
        liveId: t,
        activeTab: i,
        onActiveTabChange: c,
        isAllMuted: o,
        allMuteLoading: s,
        onAllMuteChange: p,
        currentUserId: T,
        anchorUserId: E,
        memberManagementHook: l,
        onOpenAudienceDropdown: d,
        onOpenMutedModal: f,
        onOpenBannedModal: g,
        t: N
      }
    )
  ] });
}
const Yi = (r, n, t) => {
  const i = Array.from({ length: n }, () => 0);
  return r.forEach((c, o) => {
    const s = o % n;
    i[s] = Math.max(i[s], c);
  }), i.reduce((c, o) => c + o, 0) + t * (n - 1);
}, $i = (r) => {
  const n = Array.from(r.querySelectorAll(":scope > .stat-bar-item")), t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-99999px", t.style.top = "0", t.style.visibility = "hidden", t.style.pointerEvents = "none", t.style.width = "max-content", document.body.appendChild(t);
  const i = n.map((c) => {
    const o = c.cloneNode(!0);
    return o.style.width = "max-content", o.style.maxWidth = "none", t.appendChild(o), Math.ceil(o.getBoundingClientRect().width);
  });
  return t.remove(), i;
}, qi = (r) => {
  if (r.clientWidth <= 0) return;
  const n = $i(r);
  if (!n.length) return;
  const t = parseFloat(getComputedStyle(r).columnGap) || 0, i = r.clientWidth, c = [7, 4, 3, 2, 1].find((o) => Yi(n, o, t) <= i + 1) || 1;
  r.style.setProperty("--stats-columns", String(c));
}, Xi = (r) => r >= 1e4 ? (r / 1e4).toFixed(1) + "w" : r.toLocaleString(), ji = (r, n) => {
  r < 0 && (r = 0);
  const t = Math.floor(r / 86400), i = Math.floor(r % 86400 / 3600), c = Math.floor(r % 3600 / 60), o = r % 60, s = `${i.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${o.toString().padStart(2, "0")}`;
  return t > 0 ? `${t}${n(a.DAYS)} ${s}` : s;
}, Zi = (r) => {
  const n = new Date(r), t = String(n.getMonth() + 1).padStart(2, "0"), i = String(n.getDate()).padStart(2, "0"), c = String(n.getHours()).padStart(2, "0"), o = String(n.getMinutes()).padStart(2, "0"), s = String(n.getSeconds()).padStart(2, "0");
  return `${t}-${i} ${c}:${o}:${s}`;
}, Dr = (r) => ({
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
})[r] || a.UNKNOWN, rt = (r) => {
  const n = (r == null ? void 0 : r.ErrorCode) || (r == null ? void 0 : r.errorCode) || (r == null ? void 0 : r.code) || 0, t = (r == null ? void 0 : r.ErrorInfo) || (r == null ? void 0 : r.errorInfo) || "";
  return { code: n, info: t };
};
function Ji({
  liveInfo: r,
  audienceCount: n,
  liveDuration: t,
  interactionRate: i,
  updateTimeText: c,
  t: o
}) {
  var p, l, d, f, g, v, h;
  const s = ee(null);
  return J(() => {
    const N = s.current;
    if (!N) return;
    let m = null;
    const T = () => {
      m !== null && cancelAnimationFrame(m), m = requestAnimationFrame(() => {
        m = null, qi(N);
      });
    }, w = new ResizeObserver(T);
    w.observe(N);
    const E = new MutationObserver(T);
    return E.observe(N, { childList: !0, subtree: !0, characterData: !0 }), T(), () => {
      w.disconnect(), E.disconnect(), m !== null && cancelAnimationFrame(m);
    };
  }, []), /* @__PURE__ */ u("div", { className: "sidebar-stats-card", children: [
    /* @__PURE__ */ u("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ u("div", { className: "stats-header-left", children: [
        /* @__PURE__ */ e("h3", { children: o(a.LIVE_DATA_CONTROL) }),
        /* @__PURE__ */ u("span", { className: "live-status-tag", children: [
          /* @__PURE__ */ e("span", { className: "live-status-dot" }),
          o(a.LIVE_NOW),
          /* @__PURE__ */ e("span", { className: "live-duration-text", children: ji(t, o) })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: "update-time", children: o(a.UPDATED_AT, { time: c }) })
    ] }),
    /* @__PURE__ */ u("div", { ref: s, className: "stats-bar-design", children: [
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.CURRENT_VIEWERS),
          /* @__PURE__ */ e(xe, { content: o(a.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: Xi((r == null ? void 0 : r.onlineCount) ?? n ?? 0) })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.COMMENT_COUNT),
          /* @__PURE__ */ e(xe, { content: o(a.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((l = (p = r == null ? void 0 : r.stats) == null ? void 0 : p.commentCount) == null ? void 0 : l.toLocaleString()) ?? "0" })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.COMMENT_USERS),
          /* @__PURE__ */ e(xe, { content: o(a.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((d = r == null ? void 0 : r.stats) == null ? void 0 : d.totalUniqueCommenters) ?? 0 })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.INTERACTION_RATE),
          /* @__PURE__ */ e(xe, { content: o(a.INTERACTION_RATE_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: i })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.TOTAL_GIFT_AMOUNT),
          /* @__PURE__ */ e(xe, { content: o(a.TOTAL_GIFT_AMOUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((g = (f = r == null ? void 0 : r.stats) == null ? void 0 : f.giftAmount) == null ? void 0 : g.toFixed(2)) ?? "0.00" })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.GIFT_COUNT),
          /* @__PURE__ */ e(xe, { content: o(a.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((v = r == null ? void 0 : r.stats) == null ? void 0 : v.giftCount) ?? 0 })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.GIFT_SENDERS),
          /* @__PURE__ */ e(xe, { content: o(a.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((h = r == null ? void 0 : r.stats) == null ? void 0 : h.giftUserCount) ?? 0 })
      ] })
    ] })
  ] });
}
function Qi({
  moderationList: r,
  moderationLoading: n,
  moderationPage: t,
  moderationTotal: i,
  moderationTotalPages: c,
  moderationSelectedIds: o,
  isAllOnPageSelected: s,
  moderationAvailable: p,
  updateTimeText: l,
  onRefresh: d,
  onPageChange: f,
  onBulkApprove: g,
  onBulkDelete: v,
  onToggleSelectOne: h,
  onToggleSelectAll: N,
  onRelease: m,
  onDelete: T,
  onOpenDropdown: w,
  t: E
}) {
  return /* @__PURE__ */ u("div", { className: "moderation-card", children: [
    /* @__PURE__ */ u("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ u("div", { className: "moderation-header-left", children: [
        /* @__PURE__ */ e("h3", { children: E(a.CONTENT_MODERATION) }),
        /* @__PURE__ */ e(
          Y,
          {
            theme: "primary",
            shape: "round",
            onClick: g,
            disabled: o.length === 0,
            icon: /* @__PURE__ */ e(xt, { style: { width: 14, height: 14 } }),
            children: E(a.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          Y,
          {
            theme: "primary",
            shape: "round",
            onClick: v,
            disabled: o.length === 0,
            icon: /* @__PURE__ */ e(pn, { style: { width: 14, height: 14 } }),
            children: E(a.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ u("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: E(a.UPDATED_AT, { time: l }) }),
        /* @__PURE__ */ e(
          Y,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(nr, {}),
            loading: n,
            onClick: d,
            children: E(a.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ e(
        Vt,
        {
          columns: [
            {
              key: "check",
              width: 40,
              className: "col-check",
              headerRender: () => /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: s,
                  onChange: N
                }
              ),
              render: (S) => /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: o.includes(S.id),
                  onChange: () => h(S.id)
                }
              )
            },
            {
              key: "userId",
              title: E(a.USERID),
              width: 120,
              className: "col-user",
              render: (S) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: S.userId }) })
            },
            {
              key: "content",
              title: E(a.COMMENT_CONTENT),
              className: "col-content moderation-content-cell",
              render: (S) => /* @__PURE__ */ e("span", { title: S.content, children: S.content })
            },
            {
              key: "type",
              title: E(a.SENSITIVE_TYPE),
              width: 100,
              className: "col-type moderation-type-cell",
              render: (S) => {
                const R = S.type.split(/[,\s;|]+/).map((C) => C.trim()).filter(Boolean).map(
                  (C, I) => I > 0 ? " " + E(Dr(C)) : E(Dr(C))
                ).join("");
                return /* @__PURE__ */ e(xe, { content: R, placement: "top", children: /* @__PURE__ */ e("span", { className: "moderation-type-text", title: "", children: R }) });
              }
            },
            {
              key: "createdAtMs",
              title: E(a.CREATED_AT),
              width: 120,
              className: "col-time moderation-time-cell",
              render: (S) => Zi(S.createdAtMs)
            },
            {
              key: "action",
              title: E(a.ACTION),
              fitContent: !0,
              minWidth: 120,
              maxWidth: 260,
              className: "col-action",
              render: (S) => /* @__PURE__ */ e(
                Ye,
                {
                  actions: [
                    {
                      key: "approve",
                      label: E(a.APPROVE),
                      onClick: () => m(S)
                    },
                    {
                      key: "delete",
                      label: E(a.DELETE),
                      danger: !0,
                      onClick: () => T(S)
                    },
                    {
                      key: "more",
                      label: E(a.MORE),
                      suffixCaret: !0,
                      onClick: (R) => w(R, S)
                    }
                  ]
                }
              )
            }
          ],
          data: r,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: E(a.MODERATION_EMPTY) }) })
        }
      ),
      r.length > 0 && /* @__PURE__ */ u("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: E(a.TOTAL_ITEMS, { count: i, total: i }) }),
        /* @__PURE__ */ u("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: t <= 1,
              onClick: () => f(t - 1),
              "aria-label": E(a.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(fn, { style: { width: 14 } })
            }
          ),
          va(t, c).map(
            (S, R) => S === "..." ? /* @__PURE__ */ e("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${R}`) : /* @__PURE__ */ e(
              "button",
              {
                className: `page-num ${S === t ? "active" : ""}`,
                onClick: () => f(S),
                children: S
              },
              S
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: t >= c,
              onClick: () => f(t + 1),
              "aria-label": E(a.NEXT_PAGE),
              children: /* @__PURE__ */ e(ir, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function eo({
  mutedModalVisible: r,
  bannedModalVisible: n,
  mutedList: t,
  bannedList: i,
  memberListLoading: c,
  getUserAvatar: o,
  getUserNameFromCache: s,
  onMutedModalClose: p,
  onBannedModalClose: l,
  onUnmuteFromList: d,
  onUnbanFromList: f,
  t: g
}) {
  return /* @__PURE__ */ u(ue, { children: [
    /* @__PURE__ */ e(
      ge,
      {
        visible: r,
        header: g(a.MUTED_VIEWERS),
        onClose: p,
        width: be.WIDE,
        footer: /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: p, children: g(a.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: c ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(a.LOADING) }) : t.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(a.NO_MUTED_MEMBERS) }) : /* @__PURE__ */ u("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ u("tr", { children: [
            /* @__PURE__ */ e("th", { children: g(a.USER) }),
            /* @__PURE__ */ e("th", { children: g(a.UNMUTE_TIME) }),
            /* @__PURE__ */ e("th", { children: g(a.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: t.map((v) => {
            const h = s(v.userId);
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ u("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  Pt,
                  {
                    className: "member-table-avatar",
                    src: o(v.userId),
                    name: h
                  }
                ),
                /* @__PURE__ */ e(xe, { content: h, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: h }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: v.endTime > 0 ? new Date(v.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: /* @__PURE__ */ e(
                Ye,
                {
                  actions: [
                    {
                      key: "unmute",
                      label: g(a.UNMUTE),
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
    /* @__PURE__ */ e(
      ge,
      {
        visible: n,
        header: g(a.BANNED_VIEWERS),
        onClose: l,
        width: be.WIDE,
        footer: /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: l, children: g(a.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: c ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(a.LOADING) }) : i.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(a.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ u("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ u("tr", { children: [
            /* @__PURE__ */ e("th", { children: g(a.USER) }),
            /* @__PURE__ */ e("th", { children: g(a.BAN_LIFT_TIME) }),
            /* @__PURE__ */ e("th", { children: g(a.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: i.map((v) => {
            const h = s(v.userId);
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ u("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  Pt,
                  {
                    className: "member-table-avatar",
                    src: o(v.userId),
                    name: h
                  }
                ),
                /* @__PURE__ */ e(xe, { content: h, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: h }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: v.endTime > 0 ? new Date(v.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: /* @__PURE__ */ e(
                Ye,
                {
                  actions: [
                    {
                      key: "unban",
                      label: g(a.UNBAN),
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
function to(r, n) {
  const {
    fetchTextModerationList: t,
    approveTextModerationItems: i,
    bypassCorrectionKeyword: c
  } = Jr({ liveId: r || "", pageSize: Rt }), [o, s] = _([]), [p, l] = _(!1), [d, f] = _(1), [g, v] = _(0), [h, N] = _([]), [m, T] = _(null), [w, E] = _(null), S = _e(() => Ea(g, Rt), [g]), R = A(
    async (b = 1) => {
      if (r) {
        l(!0);
        try {
          const G = Math.max(1, b), V = await t({
            pageNum: G,
            pageSize: Rt,
            minutes: 10,
            violationOnly: !0
          }), O = V.list || [];
          s(O), v(V.total || 0), f(G), N((U) => U.filter((K) => O.some((ne) => ne.id === K)));
        } catch (G) {
          console.error("[moderation] load failed:", G), q.error(n(a.OPERATION_FAILED, { error: G.message || n(a.UNKNOWN_ERROR) }));
        } finally {
          l(!1);
        }
      }
    },
    [r, n, t]
  );
  J(() => {
    r && R(1);
  }, [r]);
  const C = A(async () => {
    await R(d), q.success(n(a.REFRESHED));
  }, [R, d, n]), I = A(
    (b) => {
      b < 1 || b > S || b === d || R(b);
    },
    [R, d, S]
  ), P = A(
    async (b) => {
      N((V) => V.filter((O) => !b.includes(O)));
      const G = Na(
        d,
        g,
        b.length,
        Rt
      );
      await R(G);
    },
    [R, d, g]
  ), B = Ve({
    action: async () => {
      if (!m || !r) throw new Error("liveId is required");
      await i({
        ids: [m.id],
        items: [{ id: m.id, content: m.content, userId: m.userId }],
        liveId: r
      });
    },
    confirm: {
      title: n(a.RELEASE_AND_RESEND),
      content: n(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      q.success(n(a.RELEASE_AND_RESEND_SUCCESS)), m && await P([m.id]), T(null);
    },
    onError: (b) => {
      q.error(n(a.OPERATION_FAILED, { error: b.message || n(a.UNKNOWN_ERROR) }));
    }
  }), H = A((b) => {
    T(b), B.requestConfirm();
  }, [B]), D = Ve({
    action: async () => {
      if (!w) throw new Error("No target item");
      await c({ keywords: [w.content] });
    },
    confirm: {
      title: n(a.BYPASS_CORRECTION),
      content: n(a.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      q.success(n(a.BYPASS_CORRECTION_SUCCESS)), w && await P([w.id]), E(null);
    },
    onError: (b) => {
      q.error(n(a.OPERATION_FAILED, { error: b.message || n(a.UNKNOWN_ERROR) }));
    }
  }), Z = A((b) => {
    E(b), D.requestConfirm();
  }, [D]), j = Ve({
    action: async () => {
      if (!r) throw new Error("liveId is required");
      const b = [...h], G = o.filter((V) => b.includes(V.id)).map((V) => ({ id: V.id, content: V.content, userId: V.userId }));
      await i({ ids: b, items: G, liveId: r });
    },
    confirm: {
      title: n(a.RELEASE_AND_RESEND),
      content: n(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      q.success(n(a.RELEASE_AND_RESEND_SUCCESS));
      const b = [...h];
      await P(b);
    },
    onError: (b) => {
      q.error(n(a.OPERATION_FAILED, { error: b.message || n(a.UNKNOWN_ERROR) }));
    }
  }), X = A(() => {
    if (h.length === 0) {
      q.warning(n(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    j.requestConfirm();
  }, [j, h]), M = A(
    async (b) => {
      try {
        await i({ ids: [b.id] }), q.info(n(a.DELETED)), await P([b.id]);
      } catch (G) {
        console.error("[moderation] delete failed:", G), q.error(n(a.OPERATION_FAILED, { error: G.message || n(a.UNKNOWN_ERROR) }));
      }
    },
    [P, n]
  ), L = A(async () => {
    if (h.length === 0) {
      q.warning(n(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const b = [...h];
    try {
      await i({ ids: b }), q.info(n(a.DELETED)), await P(b);
    } catch (G) {
      console.error("[moderation] bulk delete failed:", G), q.error(n(a.OPERATION_FAILED, { error: G.message || n(a.UNKNOWN_ERROR) }));
    }
  }, [h, P, n]), y = A((b) => {
    N((G) => G.includes(b) ? G.filter((V) => V !== b) : [...G, b]);
  }, []), x = A(() => {
    N((b) => {
      const G = o.map((V) => V.id);
      return b.length === G.length ? [] : G;
    });
  }, [o]), $ = _e(() => {
    const b = o.map((G) => G.id);
    return Ca(h, b);
  }, [o, h]);
  return {
    moderationList: o,
    moderationLoading: p,
    moderationPage: d,
    moderationTotal: g,
    moderationTotalPages: S,
    moderationSelectedIds: h,
    isAllOnPageSelected: $,
    releaseConfirmDialog: B.confirmDialog,
    bypassConfirmDialog: D.confirmDialog,
    bulkApproveConfirmDialog: j.confirmDialog,
    handleRefreshModeration: C,
    goToModerationPage: I,
    handleRelease: H,
    handleBypassCorrection: Z,
    handleDeleteModeration: M,
    handleBulkApprove: X,
    handleBulkDelete: L,
    toggleSelectOne: y,
    toggleSelectAll: x
  };
}
function ro(r, n, t) {
  const {
    mutedList: i,
    bannedList: c,
    memberLoading: o,
    fetchMutedList: s,
    fetchBannedList: p,
    muteMember: l,
    unmuteMember: d,
    banMember: f,
    unbanMember: g
  } = Jr({ liveId: r || "", pageSize: 20 }), [v, h] = _([]), [N, m] = _([]), [T, w] = _(!1), [E, S] = _(null), [R, C] = _(null), [I, P] = _(null), [B, H] = _(null);
  _e(() => {
    Array.isArray(i) && h(i);
  }, [i]), _e(() => {
    Array.isArray(c) && m(c);
  }, [c]);
  const D = (O, U) => {
    O === "success" ? q.success(U) : q.error(U);
  }, Z = Ve({
    action: async () => {
      if (!R) throw new Error("No target");
      await d({ memberAccounts: [R.userId] });
    },
    confirm: {
      title: n(a.CONFIRM_UNMUTE_USER),
      content: R ? n(a.UNMUTE_CONFIRM, { name: R.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.UNMUTED_SUCCESS, { name: (R == null ? void 0 : R.userName) || "" })), await b(), C(null);
    },
    onError: (O) => {
      const { code: U, info: K } = rt(O), ne = U ? tt(U, K) : O.message || n(a.UNKNOWN_HOST);
      D("error", n(a.OPERATION_FAILED, { error: ne }));
    }
  }), j = Ve({
    action: async () => {
      if (!E) throw new Error("No target");
      await l({ memberAccounts: [E.userId], muteTime: ya });
    },
    confirm: {
      title: n(a.CONFIRM_MUTE_USER),
      content: E ? n(a.MUTE_WARNING, { name: E.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.MUTED_SUCCESS, { name: (E == null ? void 0 : E.userName) || "" })), await b(), S(null);
    },
    onError: (O) => {
      const { code: U, info: K } = rt(O), ne = U ? tt(U, K) : O.message || n(a.UNKNOWN_HOST);
      D("error", n(a.MUTE_FAILED, { error: ne }));
    }
  }), X = A((O, U, K) => {
    r && (Cr(O, t) || (K ? (C({ userId: O, userName: U }), Z.requestConfirm()) : (S({ userId: O, userName: U }), j.requestConfirm())));
  }, [r, t, Z, j]), M = Ve({
    action: async () => {
      if (!B) throw new Error("No target");
      await g({ memberAccounts: [B.userId] });
    },
    confirm: {
      title: n(a.CONFIRM_UNBAN_USER),
      content: B ? n(a.UNBAN_CONFIRM, { name: B.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.UNBANNED_SUCCESS, { name: (B == null ? void 0 : B.userName) || "" })), await G(), H(null);
    },
    onError: (O) => {
      const { code: U, info: K } = rt(O), ne = U ? tt(U, K) : O.message || n(a.UNKNOWN_HOST);
      D("error", n(a.OPERATION_FAILED, { error: ne }));
    }
  }), L = Ve({
    action: async () => {
      if (!I) throw new Error("No target");
      await f({ memberAccounts: [I.userId], duration: _a });
    },
    confirm: {
      title: n(a.CONFIRM_BAN_USER),
      content: I ? n(a.BAN_WARNING, { name: I.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.BANNED_SUCCESS, { name: (I == null ? void 0 : I.userName) || "" })), await G(), P(null);
    },
    onError: (O) => {
      const { code: U, info: K } = rt(O), ne = U ? tt(U, K) : O.message || n(a.UNKNOWN_HOST);
      D("error", n(a.BAN_FAILED, { error: ne }));
    }
  }), y = A((O, U, K) => {
    r && (Cr(O, t) || (K ? (H({ userId: O, userName: U }), M.requestConfirm()) : (P({ userId: O, userName: U }), L.requestConfirm())));
  }, [r, t, M, L]), x = A((O) => {
    r && (C({ userId: O, userName: O }), Z.requestConfirm());
  }, [r, Z]), $ = A((O) => {
    r && (H({ userId: O, userName: O }), M.requestConfirm());
  }, [r, M]), b = A(async () => {
    if (r) {
      w(!0);
      try {
        const O = await s();
        h(Array.isArray(O) ? O : []);
      } catch (O) {
        console.error("获取禁言列表失败:", O);
        const { code: U, info: K } = rt(O), ne = U ? tt(U, K) : O.message || n(a.UNKNOWN_HOST);
        D("error", n(a.FETCH_MUTED_LIST_FAILED, { error: ne }));
      } finally {
        w(!1);
      }
    }
  }, [r, n, s]), G = A(async () => {
    if (r) {
      w(!0);
      try {
        const O = await p();
        m(Array.isArray(O) ? O : []);
      } catch (O) {
        console.error("获取封禁列表失败:", O);
        const { code: U, info: K } = rt(O), ne = U ? tt(U, K) : O.message || n(a.UNKNOWN_HOST);
        D("error", n(a.FETCH_BANNED_LIST_FAILED, { error: ne }));
      } finally {
        w(!1);
      }
    }
  }, [r, n, p]), V = A((O) => v.some((U) => U.userId === O), [v]);
  return {
    mutedList: v,
    bannedList: N,
    memberListLoading: T,
    fetchMutedList: b,
    fetchBannedList: G,
    handleMuteAudience: X,
    handleBanAudience: y,
    handleUnmuteFromList: x,
    handleUnbanFromList: $,
    isUserMuted: V,
    muteConfirmDialog: j.confirmDialog,
    unmuteConfirmDialog: Z.confirmDialog,
    banConfirmDialog: L.confirmDialog,
    unbanConfirmDialog: M.confirmDialog
  };
}
function Ao() {
  var Tt, wt, ft, We;
  const { liveId: r } = Va();
  J(() => (console.log("[LiveControl] ✅ Component MOUNTED, liveId:", r), () => {
    console.log("[LiveControl] ❌ Component UNMOUNTED, liveId:", r);
  }), []);
  const n = _t(), t = yt(), i = (Tt = t.components) == null ? void 0 : Tt.roomControl;
  (wt = t.components) == null || wt.liveMonitor;
  const { t: c } = ve(), {
    init: o,
    fetchLiveDetail: s,
    fetchLiveStats: p,
    endLive: l,
    updateLive: d
  } = mt(), [f, g] = _({});
  A(async (k) => {
    if (!(!k || k.length === 0))
      try {
        const re = await zr(k);
        g((ce) => ({ ...ce, ...Object.fromEntries(re) }));
      } catch (re) {
        console.error("[LiveControl] fetchUserProfiles failed:", re);
      }
  }, []);
  const v = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, [h, N] = _(v), [m, T] = _(null), [w, E] = _(!1), [S, R] = _("chat"), [C, I] = _(!0), { successMsg: P, errorMsg: B } = ki(), [H, D] = _(null), [Z, j] = _(!1), [X, M] = _(!1), L = Fa(), y = Ve({
    action: async () => {
      if (!m) throw new Error("liveInfo is null");
      return l(m.id || m.liveId);
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
      n(-1);
    }
  }), x = Ve({
    action: async () => {
      if (!r) throw new Error("liveId is required");
      return d({ liveId: r, isMessageDisabled: !0 });
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
      T((k) => k ? { ...k, isMessageDisabled: !0 } : null);
    }
  }), [$, b] = _({
    visible: !1,
    liveId: "",
    liveName: ""
  }), G = () => {
    b({
      visible: !0,
      liveId: r || "",
      liveName: (m == null ? void 0 : m.liveName) || ""
    });
  }, V = ee(null), O = ee(null), [U, K] = _(null), [ne, z] = _(0), [le, Ce] = _(null), Se = _e(
    () => {
      var k, re;
      return ((k = m == null ? void 0 : m.anchor) == null ? void 0 : k.userId) || ((re = m == null ? void 0 : m.anchor) == null ? void 0 : re.id) || "";
    },
    [m]
  ), ae = to(r, c), se = ro(r, c, Se);
  J(() => () => {
    r && (console.log("[LiveControl] Component unmounting, auto end live:", r), l(r).catch((k) => {
      console.error("[LiveControl] Failed to end live on unmount:", k);
    }));
  }, [r, l]);
  const F = ht({
    action: async () => r ? await s(r) : null,
    successMessage: "",
    errorMessage: c(a.GET_ERROR_MESSAGE),
    onSuccess: (k) => {
      var Fe;
      if (!k) return;
      const re = (Fe = k.anchor) == null ? void 0 : Fe.userId, ce = Hr(k, re || "-"), we = Br(k);
      if (k.anchor ? K({
        nick: k.anchor.nick || ce,
        avatarUrl: k.anchor.avatarUrl || we
      }) : K({
        nick: ce,
        avatarUrl: we
      }), T({
        liveId: k.liveId,
        id: k.liveId,
        liveName: k.liveName || c(a.UNNAMED_LIVE_SHORT),
        coverUrl: k.coverUrl || cr,
        anchor: {
          userId: re || "",
          nick: ce,
          avatarUrl: we,
          id: re,
          name: ce,
          avatar: we
        },
        onlineCount: k.onlineCount || 0,
        createdAt: k.createdAt ?? 0,
        isMessageDisabled: k.isMessageDisabled === !0,
        roomType: k.roomType || "Live",
        isSeatEnabled: k.isSeatEnabled || !1,
        maxSeatCount: k.maxSeatCount || 9,
        maxMemberCount: k.maxMemberCount || 1e3,
        category: k.category || [],
        activityStatus: k.activityStatus ?? 1,
        isPublicVisible: k.isPublicVisible !== void 0 ? k.isPublicVisible : !0,
        isLikeEnabled: k.isLikeEnabled !== void 0 ? k.isLikeEnabled : !0
      }), k.createdAt) {
        const qe = k.createdAt > 1e12 ? k.createdAt : k.createdAt * 1e3, Xe = Math.floor((Date.now() - qe) / 1e3);
        z(Xe > 0 ? Xe : 0);
      }
    }
  }), te = A(async () => {
    await F.execute();
  }, [F.execute]), he = A(async () => {
    if (r)
      try {
        await p(r);
      } catch {
      }
  }, [r]), Ie = _e(() => {
    var ce;
    const k = (m == null ? void 0 : m.onlineCount) || 0, re = ((ce = m == null ? void 0 : m.stats) == null ? void 0 : ce.totalUniqueCommenters) ?? 0;
    return k <= 0 ? "0%" : (re / k * 100).toFixed(1) + "%";
  }, [m == null ? void 0 : m.onlineCount, (ft = m == null ? void 0 : m.stats) == null ? void 0 : ft.totalUniqueCommenters]), [me, Le] = _(() => {
    const k = /* @__PURE__ */ new Date();
    return `${String(k.getHours()).padStart(2, "0")}:${String(k.getMinutes()).padStart(2, "0")}`;
  });
  A(() => {
    const k = /* @__PURE__ */ new Date();
    Le(`${String(k.getHours()).padStart(2, "0")}:${String(k.getMinutes()).padStart(2, "0")}`);
  }, []);
  const Te = 30, ye = ee(null), Qe = ee(!0);
  ee(!1);
  const Wt = ee(!0);
  A(() => {
    E(!0);
  }, []);
  const pt = A(() => {
    n(-1);
  }, [n]), zt = (k) => {
    if (k !== (m == null ? void 0 : m.isMessageDisabled)) {
      if (k) {
        x.requestConfirm();
        return;
      }
      x.executeWithConfirm();
    }
  }, bt = (k) => {
    const re = f[k];
    if (re != null && re.avatarUrl)
      return re.avatarUrl;
  }, It = (k) => {
    const re = f[k];
    return re != null && re.nick ? re.nick : k;
  }, et = A(() => {
    Ce(null);
  }, []), hr = A((k, re) => {
    k.preventDefault(), k.stopPropagation();
    const ce = k.currentTarget.getBoundingClientRect();
    Ce({
      item: re,
      x: ce.right,
      y: ce.bottom + 4
    });
  }, []), $e = A(() => {
    D(null);
  }, []), Lt = (k, re, ce, we) => {
    k.stopPropagation();
    const Fe = k.currentTarget.getBoundingClientRect();
    D({
      visible: !0,
      userId: re,
      userName: ce,
      isMuted: we,
      x: Fe.right,
      y: Fe.bottom + 4
    });
  };
  J(() => {
    var ce;
    const k = (ce = m == null ? void 0 : m.anchor) == null ? void 0 : ce.userId;
    if (!k) return;
    const re = f[k];
    re && K({
      nick: re.nick || "",
      avatarUrl: re.avatarUrl || ""
    });
  }, [f, (We = m == null ? void 0 : m.anchor) == null ? void 0 : We.userId]), J(() => {
    const k = m == null ? void 0 : m.createdAt;
    if (!k || (m == null ? void 0 : m.activityStatus) === 2)
      return;
    const re = () => {
      const we = Math.floor((Date.now() - k) / 1e3);
      z(we > 0 ? we : 0);
    };
    re();
    const ce = window.setInterval(re, 1e3);
    return () => {
      window.clearInterval(ce);
    };
  }, [m == null ? void 0 : m.createdAt, m == null ? void 0 : m.activityStatus]), J(() => {
    if (!(H != null && H.visible) && !le) return;
    const k = (re) => {
      V.current && !V.current.contains(re.target) && $e(), O.current && !O.current.contains(re.target) && et();
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [H == null ? void 0 : H.visible, $e, et, le]), J(() => {
    S === "audience" && r && (se.fetchMutedList(), se.fetchBannedList());
  }, [S, r]), J(() => {
    if (S !== "audience") return;
    const k = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((Fe) => {
        const qe = Fe, Xe = qe.textContent || "";
        qe.title !== Xe && (qe.title = Xe);
      });
    };
    k();
    const re = document.querySelector(".audience-list-area");
    if (!re) return;
    const ce = new MutationObserver(k);
    return ce.observe(re, { childList: !0, subtree: !0 }), () => ce.disconnect();
  }, [S]), J(() => {
    v && N(!0);
  }, [v]), J(() => {
    !v && !h && (async () => {
      try {
        const re = await lr();
        re && re.sdkAppId !== 0 ? (console.log("[LiveControl] Initializing SDK with account:", re.userId), o({
          baseURL: "http://localhost:9000/api"
        }), N(!0), console.log("[LiveControl] SDK initialized successfully")) : console.error("[LiveControl] No valid credentials found");
      } catch (re) {
        console.error("[LiveControl] SDK init error:", re);
      }
    })();
  }, [v, h]), J(() => {
    E(!1);
  }, [r]), J(() => {
    if (console.log("[LiveControl] Main useEffect triggered:", { liveId: r, isMockMode: v, sdkReady: h }), Qe.current = !0, Wt.current = !0, r && (v || h))
      return console.log("[LiveControl] Condition met, calling fetchRoomInfo"), te(), he(), se.fetchMutedList(), se.fetchBannedList(), () => {
        Qe.current = !1;
      };
    console.log("[LiveControl] Condition NOT met, waiting...", { liveId: r, isMockMode: v, sdkReady: h });
  }, [r, h, v]), J(() => {
    if (!r || !h || Te === 0) {
      ye.current && (clearInterval(ye.current), ye.current = null);
      return;
    }
    return ye.current = window.setInterval(() => {
      Qe.current && he();
    }, Te * 1e3), () => {
      ye.current && (clearInterval(ye.current), ye.current = null);
    };
  }, [r, h, Te]), U != null && U.nick || m != null && m.anchor.name || c(a.UNKNOWN_HOST), U != null && U.avatarUrl || m != null && m.anchor.avatar, _e(() => (r == null ? void 0 : r.startsWith("voice_")) || !1, [r]);
  const St = (m == null ? void 0 : m.isMessageDisabled) === !0;
  return C ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(Nn, { loading: !0, text: c(a.LOADING) }) }) : /* @__PURE__ */ u("div", { className: "live-control-container", children: [
    /* @__PURE__ */ u("div", { className: "toast-area", children: [
      P && /* @__PURE__ */ e("div", { className: "status-success", children: P }),
      B && /* @__PURE__ */ e("div", { className: "status-error", children: B })
    ] }),
    /* @__PURE__ */ u("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ u("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(Y, { shape: "circle", variant: "outline", className: "back-btn", onClick: pt, title: c(a.BACK_TO_LIST), children: /* @__PURE__ */ e("svg", { viewBox: Ke.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Ke.strokeWidth, strokeLinecap: Ke.strokeLinecap, children: /* @__PURE__ */ e("path", { d: Ke.path }) }) }),
        /* @__PURE__ */ e("div", { className: "divider" }),
        /* @__PURE__ */ e("h1", { children: c(a.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ u("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          Y,
          {
            className: "action-btn warn",
            variant: "text",
            icon: /* @__PURE__ */ e(kr, { size: 16 }),
            onClick: G,
            children: c(a.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(Y, { variant: "text", theme: "danger", onClick: () => y.requestConfirm(), icon: /* @__PURE__ */ e(Pr, {}), children: c(a.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ u("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Ki,
        {
          liveControlSlots: i,
          liveInfo: m,
          liveId: r || "",
          activeTab: S,
          onActiveTabChange: R,
          isAllMuted: St,
          allMuteLoading: x.loading,
          onAllMuteChange: zt,
          memberManagementHook: se,
          onOpenAudienceDropdown: Lt,
          onOpenMutedModal: () => {
            se.fetchMutedList(), j(!0);
          },
          onOpenBannedModal: () => {
            se.fetchBannedList(), M(!0);
          },
          onLeaveLive: pt,
          t: c
        }
      ),
      /* @__PURE__ */ u("aside", { className: "right-sidebar", children: [
        /* @__PURE__ */ e(
          Ji,
          {
            liveInfo: m,
            audienceCount: (m == null ? void 0 : m.onlineCount) || 0,
            liveDuration: ne,
            interactionRate: Ie,
            updateTimeText: me,
            t: c
          }
        ),
        /* @__PURE__ */ e(De, { slot: i == null ? void 0 : i.customControlPanel, props: { liveInfo: m } }),
        /* @__PURE__ */ e(
          Qi,
          {
            moderationList: ae.moderationList,
            moderationLoading: ae.moderationLoading,
            moderationPage: ae.moderationPage,
            moderationTotal: ae.moderationTotal,
            moderationTotalPages: ae.moderationTotalPages,
            moderationSelectedIds: ae.moderationSelectedIds,
            isAllOnPageSelected: ae.isAllOnPageSelected,
            moderationAvailable: L,
            updateTimeText: me,
            onRefresh: ae.handleRefreshModeration,
            onPageChange: ae.goToModerationPage,
            onBulkApprove: ae.handleBulkApprove,
            onBulkDelete: ae.handleBulkDelete,
            onToggleSelectOne: ae.toggleSelectOne,
            onToggleSelectAll: ae.toggleSelectAll,
            onRelease: ae.handleRelease,
            onDelete: ae.handleDeleteModeration,
            onOpenDropdown: hr,
            t: c
          }
        )
      ] })
    ] }),
    le && /* @__PURE__ */ e(
      "div",
      {
        ref: O,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: le.y,
          left: le.x - 160
        },
        children: /* @__PURE__ */ u(
          "button",
          {
            className: "dropdown-item",
            onClick: () => {
              const k = le.item;
              et(), ae.handleBypassCorrection(k);
            },
            children: [
              /* @__PURE__ */ e(xt, { size: 14 }),
              c(a.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (H == null ? void 0 : H.visible) && /* @__PURE__ */ u(
      "div",
      {
        ref: V,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: H.y,
          left: H.x - 160
        },
        children: [
          /* @__PURE__ */ e("div", { className: "dropdown-header", children: H.userName }),
          /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
          H.isMuted ? /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item",
              onClick: () => {
                se.handleMuteAudience(
                  H.userId,
                  H.userName,
                  !0
                ), $e();
              },
              children: [
                /* @__PURE__ */ e(xt, { size: 14 }),
                c(a.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item",
              onClick: () => {
                se.handleMuteAudience(
                  H.userId,
                  H.userName,
                  !1
                ), $e();
              },
              children: [
                /* @__PURE__ */ e(Gr, { size: 14 }),
                c(a.MUTE)
              ]
            }
          ),
          /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item danger",
              onClick: () => {
                se.handleBanAudience(
                  H.userId,
                  H.userName,
                  !1
                ), $e();
              },
              children: [
                /* @__PURE__ */ e(Vr, { size: 14 }),
                c(a.BAN)
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ e(
      eo,
      {
        mutedModalVisible: Z,
        bannedModalVisible: X,
        mutedList: se.mutedList,
        bannedList: se.bannedList,
        memberListLoading: se.memberListLoading,
        getUserAvatar: bt,
        getUserNameFromCache: It,
        onMutedModalClose: () => j(!1),
        onBannedModalClose: () => M(!1),
        onUnmuteFromList: se.handleUnmuteFromList,
        onUnbanFromList: se.handleUnbanFromList,
        t: c
      }
    ),
    (() => {
      const k = y.confirmDialog || x.confirmDialog;
      if (!k) return null;
      const ce = !!y.confirmDialog ? y : x;
      return /* @__PURE__ */ e(
        ge,
        {
          visible: !0,
          header: k.title,
          onClose: () => ce.cancelConfirm(),
          width: be.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ u(ue, { children: [
            /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => ce.cancelConfirm(), children: c(a.CANCEL) }),
            /* @__PURE__ */ e(
              Y,
              {
                shape: "round",
                theme: k.danger ? "danger" : "primary",
                loading: ce.loading,
                onClick: () => ce.executeWithConfirm(),
                children: ce.loading ? c(a.LOADING) : k.confirmText
              }
            )
          ] }),
          children: /* @__PURE__ */ e("p", { children: k.content })
        }
      );
    })(),
    /* @__PURE__ */ e(
      Qr,
      {
        visible: $.visible,
        liveId: $.liveId,
        liveName: $.liveName,
        onVisibleChange: (k) => b((re) => ({ ...re, visible: k }))
      }
    )
  ] });
}
const Je = 0, nt = 2147483647, at = 1, it = 99, xr = {
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
function no({
  visible: r,
  isEdit: n,
  editingId: t,
  formData: i,
  submitting: c,
  uploadEnabled: o,
  onFormDataChange: s,
  onSubmit: p,
  onClose: l
}) {
  var P, B, H;
  const { t: d } = ve();
  (P = yt().components) == null || P.giftConfig;
  const f = ee(null), g = ee(null), [v, h] = _(!1), [N, m] = _(!1), [T, w] = _(!1), [E, S] = _(!1), R = () => {
    var D, Z;
    (D = f.current) == null || D.reset(), (Z = g.current) == null || Z.reset(), h(!1), m(!1);
  }, C = () => {
    R(), l();
  }, I = async () => {
    var X, M, L, y, x;
    if (!i.id.trim()) {
      q.error(d(a.ENTER_GIFT_ID));
      return;
    }
    if (W(i.id) > Ze) {
      q.error(d(a.GIFT_ID_MAX_BYTES, { max: Ze }));
      return;
    }
    if (!i.name.trim()) {
      q.error(d(a.ENTER_GIFT_NAME));
      return;
    }
    if (W(i.name) > Me) {
      q.error(d(a.GIFT_NAME_MAX_BYTES, { max: Me }));
      return;
    }
    if (i.description && W(i.description) > Oe) {
      q.error(d(a.GIFT_DESC_MAX_BYTES, { max: Oe }));
      return;
    }
    const D = parseInt(i.level);
    if (i.level && !isNaN(D) && (D < at || D > it)) {
      q.error(d(a.GIFT_LEVEL_RANGE, { min: at, max: it }));
      return;
    }
    if (i.price < Je || i.price > nt) {
      q.error(d(a.GIFT_PRICE_RANGE, { min: Je, max: nt }));
      return;
    }
    const Z = ((X = f.current) == null ? void 0 : X.isUrlInputMode) ?? !0, j = Z && (((y = (L = (M = f.current) == null ? void 0 : M.urlInputValue) == null ? void 0 : L.trim) == null ? void 0 : y.call(L)) || "");
    if (!v && !i.iconUrl.trim() && !j) {
      Z && ((x = f.current) == null || x.setUrlError(d(a.ENTER_THUMBNAIL_URL))), q.error(d(a.UPLOAD_THUMBNAIL_OR_ENTER_URL));
      return;
    }
    if (i.extensionInfo.trim()) {
      try {
        JSON.parse(i.extensionInfo.trim());
      } catch {
        q.error(d(a.EXTENSION_INFO_JSON_FORMAT));
        return;
      }
      if (new TextEncoder().encode(i.extensionInfo.trim()).length > 100) {
        q.error(d(a.EXTENSION_INFO_MAX_BYTES, { max: 100 }));
        return;
      }
    }
    try {
      let $, b;
      try {
        [$, b] = await ba([
          {
            handle: f.current,
            hasPendingFile: v,
            fallbackUrl: i.iconUrl,
            label: d(a.THUMBNAIL)
          },
          {
            handle: g.current,
            hasPendingFile: N,
            fallbackUrl: i.animationUrl,
            label: d(a.GIFT_MATERIAL)
          }
        ]);
      } catch (V) {
        q.error(V instanceof dr ? V.message : d(a.OPERATION_FAILED, { error: V.message || d(a.UNKNOWN_HOST) }));
        return;
      }
      const G = {
        ...i,
        iconUrl: $,
        animationUrl: b
      };
      s(G), await p();
    } catch ($) {
      q.error(d(a.OPERATION_FAILED, { error: $.ErrorInfo || $.message || d(a.UNKNOWN_HOST) }));
    }
  };
  return /* @__PURE__ */ e(
    ge,
    {
      destroyOnClose: !0,
      visible: r,
      header: d(n ? a.EDIT_GIFT : a.CREATE_GIFT),
      onClose: C,
      width: be.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: C, children: d(a.CANCEL) }),
        /* @__PURE__ */ e(
          Y,
          {
            shape: "round",
            theme: "primary",
            onClick: I,
            disabled: c || !n && !i.id || !i.name.trim() || ((B = f.current) == null ? void 0 : B.isValidating) || ((H = g.current) == null ? void 0 : H.isValidating) || T || E,
            children: d(c ? n ? a.SAVING : a.CREATING : n ? a.SAVE : a.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        !n && /* @__PURE__ */ e(de, { label: d(a.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.id,
              onChange: (D) => s({ ...i, id: String(D) }),
              placeholder: d(a.ENTER_GIFT_ID),
              status: W(i.id) > Ze ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(i.id) > Ze ? " byte-overflow" : ""}`, children: [
                W(i.id),
                "/",
                Ze
              ] })
            }
          ),
          W(i.id) > Ze && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift ID max bytes", { max: Ze }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: d(a.GIFT_PRICE), requiredMark: !0, children: /* @__PURE__ */ e(
          Qt,
          {
            value: i.price,
            onChange: (D) => s({ ...i, price: Number(D) || Je }),
            min: Je,
            max: nt,
            decimalPlaces: 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: i.price < Je || i.price > nt ? d("Gift price range", { min: Je, max: nt }) : "",
              status: i.price < Je || i.price > nt ? "error" : "default"
            },
            style: { width: "100%" },
            placeholder: d(a.ENTER_GIFT_PRICE)
          }
        ) }),
        /* @__PURE__ */ e(de, { label: d(a.GIFT_LEVEL), children: /* @__PURE__ */ e(
          Qt,
          {
            value: i.level ? parseInt(i.level) : void 0,
            onChange: (D) => {
              if (D == null) {
                s({ ...i, level: "" });
                return;
              }
              s({ ...i, level: String(D) });
            },
            min: at,
            max: it,
            allowInputOverLimit: !0,
            inputProps: {
              tips: (() => {
                const D = parseInt(i.level);
                return !isNaN(D) && (D < at || D > it) ? d("Gift level range", { min: at, max: it }) : "";
              })(),
              status: (() => {
                const D = parseInt(i.level);
                return !isNaN(D) && (D < at || D > it) ? "error" : "default";
              })()
            },
            style: { width: "100%" },
            placeholder: d(a.ENTER_GIFT_LEVEL)
          }
        ) }),
        /* @__PURE__ */ e(de, { label: d(a.THUMBNAIL), requiredMark: !0, children: /* @__PURE__ */ e(
          Ft,
          {
            ref: f,
            value: i.iconUrl,
            onChange: (D) => {
              s({ ...i, iconUrl: D }), h(!1);
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
            onFileReady: (D) => h(!!D),
            onUrlErrorChange: w
          }
        ) }),
        /* @__PURE__ */ e(de, { label: d(a.GIFT_MATERIAL), children: /* @__PURE__ */ e(
          Ft,
          {
            ref: g,
            value: i.animationUrl,
            onChange: (D) => {
              s({ ...i, animationUrl: D }), m(!1);
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
            onFileReady: (D) => m(!!D),
            onUrlErrorChange: S
          }
        ) }),
        /* @__PURE__ */ e(de, { label: d(a.GIFT_NAME), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.name,
              onChange: (D) => s({ ...i, name: String(D) }),
              placeholder: d(a.ENTER_GIFT_NAME),
              status: W(i.name) > Me ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(i.name) > Me ? " byte-overflow" : ""}`, children: [
                W(i.name),
                "/",
                Me
              ] })
            }
          ),
          W(i.name) > Me && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift name max bytes", { max: Me }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: d(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.description,
              onChange: (D) => s({ ...i, description: String(D) }),
              placeholder: d(a.ENTER_GIFT_DESCRIPTION),
              status: W(i.description) > Oe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(i.description) > Oe ? " byte-overflow" : ""}`, children: [
                W(i.description),
                "/",
                Oe
              ] })
            }
          ),
          W(i.description) > Oe && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift desc max bytes", { max: Oe }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: d(a.CUSTOM_EXTENSION_INFO), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ u("div", { className: "textarea-count-wrapper", children: [
            /* @__PURE__ */ e(
              Cn,
              {
                value: i.extensionInfo,
                onChange: (D) => s({ ...i, extensionInfo: String(D) }),
                placeholder: 'JSON 格式例如：{"key":"value"}',
                autosize: { minRows: 3 },
                status: W(i.extensionInfo) > gt ? "error" : "default"
              }
            ),
            /* @__PURE__ */ u("span", { className: `textarea-suffix-count${W(i.extensionInfo) > gt ? " byte-overflow" : ""}`, children: [
              W(i.extensionInfo),
              "/",
              gt
            ] })
          ] }),
          W(i.extensionInfo) > gt && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Extension info max bytes", { max: gt }) })
        ] }) })
      ] })
    },
    `gift-edit-${t}`
  );
}
function ao({
  visible: r,
  editingId: n,
  giftLangConfig: t,
  onClose: i,
  onEditLang: c,
  onClearLang: o
}) {
  const { t: s } = ve();
  return /* @__PURE__ */ e(
    ge,
    {
      visible: r,
      header: s(a.GIFT_MULTILINGUAL_CONFIG),
      onClose: i,
      width: be.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: i, children: s(a.CLOSE) }),
      children: /* @__PURE__ */ u("div", { className: "gift-lang-config-container", children: [
        /* @__PURE__ */ u("div", { className: "gift-lang-config-info-banner", children: [
          /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
            /* @__PURE__ */ e("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
            /* @__PURE__ */ e("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
          ] }),
          /* @__PURE__ */ e("span", { children: s(a.MULTILINGUAL_CONFIG_TIP) })
        ] }),
        /* @__PURE__ */ u("table", { className: "gift-lang-config-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ u("tr", { children: [
            /* @__PURE__ */ e("th", { children: s(a.LANGUAGE_TYPE) }),
            /* @__PURE__ */ e("th", { children: s(a.GIFT_NAME) }),
            /* @__PURE__ */ e("th", { children: s(a.DESCRIPTION) }),
            /* @__PURE__ */ e("th", { children: s(a.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: qr.map((p) => {
            const l = t[p], d = Pe[p];
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ e("td", { children: s(d.label) }),
              /* @__PURE__ */ e("td", { className: "gift-lang-table-cell-name", children: l.name || /* @__PURE__ */ e("span", { className: "gift-lang-table-empty", children: s(a.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ e("td", { className: "gift-lang-table-cell-desc", children: l.description || /* @__PURE__ */ e("span", { className: "gift-lang-table-empty", children: s(a.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(
                Ye,
                {
                  actions: [
                    {
                      key: "edit",
                      label: s(a.EDIT),
                      onClick: () => n && c(n, p)
                    },
                    {
                      key: "clear",
                      label: s(a.CLEAR),
                      danger: !0,
                      disabled: !l.name && !l.description,
                      onClick: () => n && o(n, p)
                    }
                  ]
                }
              ) })
            ] }, p);
          }) })
        ] })
      ] })
    }
  );
}
function io({
  visible: r,
  editingGiftForLang: n,
  editingLang: t,
  langEditForm: i,
  onFormChange: c,
  onSave: o,
  onClose: s
}) {
  const { t: p } = ve();
  return /* @__PURE__ */ e(
    ge,
    {
      destroyOnClose: !0,
      visible: r && !!t,
      header: t ? p(a.EDIT_GIFT_LANGUAGE_INFO, { lang: p(Pe[t].label) }) : "",
      onClose: s,
      width: be.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: s, children: p(a.CANCEL) }),
        /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: o, children: p("Save") })
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        /* @__PURE__ */ e(de, { label: p(a.GIFT_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.name,
              onChange: (l) => {
                c({ ...i, name: String(l) });
              },
              placeholder: t ? p("Enter language gift name", { lang: p(Pe[t].label) }) : "",
              status: W(i.name) > Me ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(i.name) > Me ? " byte-overflow" : ""}`, children: [
                W(i.name),
                "/",
                Me
              ] })
            }
          ),
          W(i.name) > Me && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: p("Gift name max bytes", { max: Me }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: p(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.description,
              onChange: (l) => {
                c({ ...i, description: String(l) });
              },
              placeholder: t ? p("Enter language gift description", { lang: p(Pe[t].label) }) : "",
              status: W(i.description) > Oe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(i.description) > Oe ? " byte-overflow" : ""}`, children: [
                W(i.description),
                "/",
                Oe
              ] })
            }
          ),
          W(i.description) > Oe && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: p("Gift desc max bytes", { max: Oe }) })
        ] }) })
      ] })
    },
    `lang-edit-${n}-${t}`
  );
}
const { Option: oo } = sr;
function so({
  visible: r,
  editingCategoryGift: n,
  giftCategoryIds: t,
  allCategories: i,
  availableCategories: c,
  selectedCategoryId: o,
  categoryAddPopVisible: s,
  categoryDeleteVisible: p,
  deletingCategoryId: l,
  onRemoveCategory: d,
  onAddCategoryConfirm: f,
  onSelectCategory: g,
  onToggleAddPop: v,
  onConfirmRemoveCategory: h,
  onClose: N,
  onCloseDeleteDialog: m
}) {
  const { t: T } = ve();
  return /* @__PURE__ */ u(ue, { children: [
    /* @__PURE__ */ e(
      ge,
      {
        visible: r && !!n,
        header: T(a.EDIT_GIFT_CATEGORY),
        onClose: N,
        width: be.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: N, children: T(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "gift-category-edit-tags", children: [
          t.map((w) => {
            const E = i.find((R) => String(R.id) === String(w)), S = (E == null ? void 0 : E.name) || w;
            return /* @__PURE__ */ u("span", { className: "gift-category-edit-tag", children: [
              S,
              /* @__PURE__ */ e("button", { className: "gift-category-edit-tag-close", onClick: () => d(w), children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, w);
          }),
          /* @__PURE__ */ e("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ u(Y, { variant: "text", theme: "primary", onClick: () => v(!s), children: [
            "+ ",
            T(a.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: s,
        header: T(a.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", disabled: !o, onClick: f, children: T(a.CONFIRM) }),
        children: /* @__PURE__ */ u("div", { className: "category-select-list", children: [
          /* @__PURE__ */ e(
            sr,
            {
              value: o,
              onChange: (w) => g(String(w)),
              placeholder: T(a.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: c.map((w) => /* @__PURE__ */ e(oo, { value: w.id, label: w.name }, w.id))
            }
          ),
          c.length === 0 && /* @__PURE__ */ e("div", { className: "category-select-empty", children: T(a.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: p,
        header: T(a.CONFIRM_REMOVE_CATEGORY),
        onClose: m,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: m, children: T(a.CANCEL) }),
          /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: h, children: T(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: T(a.REMOVE_CATEGORY_DESCRIPTION) })
      }
    )
  ] });
}
function co({
  visible: r,
  deletingItem: n,
  onConfirm: t,
  onClose: i
}) {
  const { t: c } = ve();
  return /* @__PURE__ */ e(
    ge,
    {
      visible: r && !!n,
      header: c(a.CONFIRM_DELETE_GIFT),
      onClose: i,
      width: be.GIFT_DELETE,
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: i, children: c(a.CANCEL) }),
        /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: t, children: c(a.DELETE) })
      ] }),
      children: /* @__PURE__ */ e("p", { children: c(a.CANNOT_UNDO_AFTER_DELETE) })
    }
  );
}
function lo() {
  var t;
  const { t: r } = wi(), n = (t = yt().components) == null ? void 0 : t.giftConfig;
  return (i) => {
    const {
      onEdit: c,
      onDelete: o,
      onOpenCategoryEdit: s,
      onOpenLangEdit: p,
      onOpenGiftLangConfig: l
    } = i, d = [
      {
        key: "id",
        title: r(a.GIFT_ID),
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
          /* @__PURE__ */ e("span", { className: "gift-id-text", children: f.id || "-" }),
          /* @__PURE__ */ e(
            He,
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
        title: r(a.THUMBNAIL),
        width: 100,
        className: "col-thumbnail",
        render: (f) => /* @__PURE__ */ e("div", { className: "gift-thumbnail", children: f.iconUrl ? /* @__PURE__ */ e("img", { src: f.iconUrl, alt: f.name || "gift" }) : /* @__PURE__ */ e("span", { children: "🎁" }) })
      },
      {
        key: "name",
        title: r(a.NAME),
        fitContent: !0,
        flexible: !0,
        minWidth: 80,
        maxWidth: 180,
        className: "col-name",
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-name", children: f.name || "-" })
      },
      {
        key: "description",
        title: r(a.DESCRIPTION),
        fitContent: !0,
        flexible: !0,
        // minWidth 故意压低：让空/短内容时列宽随内容收缩，
        // 表头文字"Description"已经构成天然下界（≈95px）。
        // 之前 minWidth=200 会让"内容是 '-'"的行也被强行撑成 200px，
        // 既造成大量空白，又把总表宽顶超容器导致操作列被横向滚动条推出可视区。
        minWidth: 80,
        maxWidth: 400,
        className: "col-desc",
        render: (f) => /* @__PURE__ */ e("span", { children: f.description || "-" })
      },
      {
        key: "categories",
        title: r(a.CATEGORY),
        fitContent: !0,
        flexible: !0,
        minWidth: 80,
        maxWidth: 220,
        className: "col-category",
        render: (f) => {
          var g;
          return /* @__PURE__ */ u("div", { className: "gift-category-cell", onClick: () => s(f), children: [
            /* @__PURE__ */ e("span", { children: ((g = f.categories) == null ? void 0 : g.join(", ")) || "-" }),
            /* @__PURE__ */ e(Jt, { className: "gift-category-edit-icon", size: 14 })
          ] });
        }
      },
      {
        key: "languageList",
        title: r(a.MULTILINGUAL_CONFIG),
        width: 180,
        className: "gift-col-lang",
        render: (f) => /* @__PURE__ */ u("div", { className: "gift-lang-tags", children: [
          f.languageList && f.languageList.length > 0 ? f.languageList.map((g) => {
            const v = Ia(g), h = Xr[v], N = h ? Pe[h] : null;
            return /* @__PURE__ */ e(
              "span",
              {
                className: "gift-lang-tag",
                onClick: () => h && p(f.id, h),
                children: N ? r(N.label) : v
              },
              v
            );
          }) : /* @__PURE__ */ e("span", { className: "gift-lang-empty", children: "-" }),
          /* @__PURE__ */ e(
            Jt,
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
        title: r(a.LEVEL),
        fitContent: !0,
        minWidth: 64,
        maxWidth: 96,
        className: "col-level",
        render: (f) => f.level || "-"
      },
      {
        key: "price",
        title: r(a.PRICE),
        fitContent: !0,
        minWidth: 64,
        maxWidth: 120,
        className: "col-price",
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-price", children: f.price ?? 0 })
      },
      {
        key: "createdAt",
        title: r(a.CREATE_TIME),
        width: 180,
        className: "gift-col-time",
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-create-time", children: La(f.createdAt) })
      }
    ];
    return n != null && n.giftTableExtraColumns && d.push({
      key: "customer-extra",
      title: "",
      width: 160,
      className: "gift-col-customer-extra",
      render: (f) => /* @__PURE__ */ e(De, { slot: n.giftTableExtraColumns, props: { gift: f } })
    }), d.push({
      key: "actions",
      title: r(a.ACTIONS),
      fitContent: !0,
      minWidth: 120,
      maxWidth: 320,
      className: "gift-col-action",
      render: (f) => /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(
          Ye,
          {
            actions: [
              {
                key: "edit",
                label: r(a.EDIT),
                onClick: () => c(f)
              },
              {
                key: "delete",
                label: r(a.DELETE),
                danger: !0,
                onClick: () => o(f)
              }
            ]
          }
        ),
        /* @__PURE__ */ e(De, { slot: n == null ? void 0 : n.giftRowActions, props: { gift: f } })
      ] })
    }), d;
  };
}
function Ro() {
  const { t: r } = ve(), n = Zr(), t = _t(), i = lo(), c = ee(null);
  c.current || (c.current = new Sa({
    actions: n,
    t: r,
    toast: q,
    onNavigateToCategoryManagement: () => t("/gift-category")
  }));
  const o = c.current, s = tr(o.subscribe, o.getState, o.getState);
  J(() => (o.init(), () => o.dispose()), []), J(() => {
    const z = () => o.onLanguageChanged();
    return Dt.on("languageChanged", z), () => {
      Dt.off("languageChanged", z);
    };
  }, [o]);
  const { loading: p, execute: l } = ht({
    action: async (z) => {
      await o.submitGift({
        id: z.id,
        name: z.name,
        iconUrl: z.iconUrl,
        price: z.price,
        animationUrl: z.animationUrl,
        enabled: z.enabled,
        level: z.level || void 0,
        description: z.description,
        extensionInfo: z.extensionInfo
      });
    },
    errorMessage: r(a.OPERATION_FAILED)
  }), [d, f] = _(!1);
  J(() => {
    $r().then(f);
  }, []);
  const [g, v] = _(xr), [h, N] = _(!1), m = ee(null), {
    loading: T,
    displayList: w,
    searchInput: E,
    dialogVisible: S,
    isEdit: R,
    editingId: C,
    langConfigVisible: I,
    giftLangConfig: P,
    langEditVisible: B,
    editingLang: H,
    editingGiftForLang: D,
    langEditForm: Z,
    categoryEditVisible: j,
    editingCategoryGift: X,
    allCategories: M,
    giftCategoryIds: L,
    selectedCategoryId: y,
    categoryDeleteVisible: x,
    deletingCategoryId: $,
    deleteDialogVisible: b,
    deletingItem: G
  } = s, V = M.filter((z) => !L.includes(z.id)), O = () => {
    v(xr), o.openCreateDialog();
  }, U = (z) => {
    v({
      id: z.id,
      name: z.name,
      iconUrl: z.iconUrl,
      price: z.price,
      animationUrl: z.animationUrl || "",
      level: z.level || "",
      description: z.description || "",
      extensionInfo: z.extensionInfo || "",
      enabled: z.enabled ?? !0
    }), o.openEditDialog(z);
  }, K = async () => {
    await o.confirmAddCategory(), N(!1);
  }, ne = i({
    onEdit: U,
    onDelete: (z) => o.requestDelete(z),
    onOpenCategoryEdit: (z) => o.openCategoryEditDialog(z),
    onOpenLangEdit: (z, le) => void o.openLangEditDialog(z, le),
    onOpenGiftLangConfig: (z) => void o.openGiftLangConfigDialog(z),
    onCopyId: (z) => o.copyGiftId(z)
  });
  return /* @__PURE__ */ u("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ e("h1", { className: "gift-config-title", children: r(a.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ u("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ e(
          fe,
          {
            value: E,
            onChange: (z) => o.setSearchInput(String(z ?? "")),
            onEnter: () => {
              if (o.isSearchInputTooLong()) {
                q.error(r(a.INPUT_TOO_LONG));
                return;
              }
              o.search();
            },
            clearable: !0,
            onClear: () => o.clearSearch(),
            placeholder: r(a.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ e(rr, { size: 16 }),
            className: "gift-config-search-input",
            status: yr(E, _r) ? "error" : "default",
            tips: yr(E, _r) ? r(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: () => o.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ e(gn, {}), children: r(a.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ u(Y, { shape: "round", onClick: O, theme: "primary", children: [
          "＋ ",
          r(a.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(Wr, { className: "gift-list-card", ref: m, children: /* @__PURE__ */ e(
      Vt,
      {
        columns: ne,
        data: w,
        rowKey: "id",
        loading: T,
        tableClassName: "gift-table",
        bodyClassName: "gift-list-content",
        rowClassName: "gift-row",
        loadingNode: /* @__PURE__ */ u("div", { className: "gift-loading-container", children: [
          /* @__PURE__ */ e("div", { className: "gift-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "gift-loading-text", children: r(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "gift-empty-container", children: /* @__PURE__ */ e("span", { className: "gift-empty-text", children: r(a.NO_GIFT_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ e(
      no,
      {
        visible: S,
        isEdit: R,
        editingId: C,
        formData: g,
        submitting: p,
        uploadEnabled: d,
        onFormDataChange: v,
        onSubmit: () => l(g),
        onClose: () => o.closeDialog()
      }
    ),
    /* @__PURE__ */ e(
      ao,
      {
        visible: I,
        editingId: C,
        giftLangConfig: P,
        onClose: () => o.closeGiftLangConfigDialog(),
        onEditLang: (z, le) => void o.openLangEditDialog(z, le),
        onClearLang: (z, le) => void o.clearLang(z, le)
      }
    ),
    /* @__PURE__ */ e(
      io,
      {
        visible: B,
        editingGiftForLang: D,
        editingLang: H,
        langEditForm: Z,
        onFormChange: (z) => o.setLangEditForm(z),
        onSave: () => void o.saveLangEdit(),
        onClose: () => o.closeLangEditDialog()
      }
    ),
    /* @__PURE__ */ e(
      so,
      {
        visible: j,
        editingCategoryGift: X,
        giftCategoryIds: L,
        allCategories: M,
        availableCategories: V,
        selectedCategoryId: y,
        categoryAddPopVisible: h,
        categoryDeleteVisible: x,
        deletingCategoryId: $,
        onRemoveCategory: (z) => o.requestRemoveCategory(z),
        onAddCategoryConfirm: K,
        onSelectCategory: (z) => o.setSelectedCategoryId(z),
        onToggleAddPop: N,
        onConfirmRemoveCategory: () => void o.confirmRemoveCategory(),
        onClose: () => o.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => o.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ e(
      co,
      {
        visible: b,
        deletingItem: G,
        onConfirm: () => void o.confirmDelete(),
        onClose: () => o.cancelDelete()
      }
    )
  ] });
}
function Mo() {
  const { t: r } = ve(), n = _t(), t = Zr(), i = ee(null);
  i.current || (i.current = new Ta({
    actions: {
      fetchGiftList: t.fetchGiftList,
      createGiftCategory: t.createGiftCategory,
      updateGiftCategory: t.updateGiftCategory,
      deleteGiftCategory: t.deleteGiftCategory,
      getGiftCategoryLanguage: t.getGiftCategoryLanguage,
      setGiftCategoryLanguage: t.setGiftCategoryLanguage,
      deleteGiftCategoryLanguage: t.deleteGiftCategoryLanguage
    },
    t: r,
    toast: q,
    onNavigateBack: () => n("/gift-config")
  }));
  const c = i.current, o = tr(c.subscribe, c.getState, c.getState);
  J(() => (c.init(), () => c.dispose()), []), J(() => {
    const h = () => c.onLanguageChanged();
    return Dt.on("languageChanged", h), () => {
      Dt.off("languageChanged", h);
    };
  }, [c]);
  const { loading: s, execute: p } = ht({
    action: async (h) => {
      await c.submitForm({
        categoryId: h.categoryId.trim(),
        name: h.name.trim(),
        description: h.description.trim()
      });
    },
    errorMessage: r(a.OPERATION_FAILED)
  }), l = ee(null), [d, f] = _(600);
  J(() => {
    const h = () => {
      if (!l.current) return;
      const m = window.innerHeight, T = l.current.closest(".gift-category-table-wrapper");
      if (!T) return;
      const w = T.getBoundingClientRect(), E = m - w.top - 60 - 24;
      f(Math.max(200, E));
    };
    h(), window.addEventListener("resize", h);
    const N = new ResizeObserver(h);
    return l.current && N.observe(l.current), () => {
      window.removeEventListener("resize", h), N.disconnect();
    };
  }, []);
  const g = async () => {
    const { categoryId: h, name: N, description: m } = o.formData;
    if (!h.trim()) {
      q.error(r(a.ENTER_CATEGORY_ID));
      return;
    }
    if (!N.trim()) {
      q.error(r(a.ENTER_CATEGORY_NAME));
      return;
    }
    await p({
      categoryId: h.trim(),
      name: N.trim(),
      description: m.trim()
    });
  }, v = async () => {
    const { langEditForm: h } = o;
    if (h.name && W(h.name) > Ae) {
      q.error(r("Category name max bytes", { max: Ae }));
      return;
    }
    if (h.description && W(h.description) > Re) {
      q.error(r("Category desc max bytes", { max: Re }));
      return;
    }
    await c.saveLangEdit();
  };
  return /* @__PURE__ */ u("div", { className: "gift-category-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-category-page-header", children: [
      /* @__PURE__ */ u("div", { className: "gift-category-title-section", children: [
        /* @__PURE__ */ e(
          Y,
          {
            shape: "square",
            variant: "text",
            className: "back-btn",
            onClick: () => c.goBack(),
            icon: /* @__PURE__ */ e("svg", { viewBox: Ke.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Ke.strokeWidth, strokeLinecap: Ke.strokeLinecap, children: /* @__PURE__ */ e("path", { d: Ke.path }) })
          }
        ),
        /* @__PURE__ */ e("h1", { children: r("Category Management") })
      ] }),
      /* @__PURE__ */ e("div", { className: "gift-category-actions", children: /* @__PURE__ */ u("div", { className: `create-category-btn-wrapper${o.categoryList.length >= Yt ? " disabled" : ""}`, children: [
        /* @__PURE__ */ u(
          Y,
          {
            shape: "round",
            theme: "primary",
            onClick: () => c.openCreateDialog(),
            disabled: o.categoryList.length >= Yt,
            children: [
              "＋ ",
              r("Add Category")
            ]
          }
        ),
        o.categoryList.length >= Yt && /* @__PURE__ */ e("div", { className: "create-category-tooltip", children: r("Category limit reached") })
      ] }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "gift-category-table-wrapper", ref: l, children: /* @__PURE__ */ e(
      Vt,
      {
        columns: [
          {
            key: "id",
            title: r("Category ID"),
            width: 120,
            className: "col-id",
            render: (h) => /* @__PURE__ */ u("div", { className: "gift-id", children: [
              /* @__PURE__ */ e("span", { className: "gift-id-text", children: h.id || "-" }),
              /* @__PURE__ */ e(
                He,
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
            title: r("Category Name"),
            className: "col-name",
            render: (h) => /* @__PURE__ */ e("span", { className: "category-name", children: h.name || "-" })
          },
          {
            key: "description",
            title: r("Category Description"),
            className: "col-desc",
            render: (h) => /* @__PURE__ */ e("span", { className: "category-desc", children: h.description || "-" })
          },
          {
            key: "languageList",
            title: r(a.MULTILINGUAL_CONFIG),
            width: 200,
            className: "col-languages",
            render: (h) => /* @__PURE__ */ u("div", { className: "category-lang-tags", children: [
              h.languageList && h.languageList.length > 0 ? h.languageList.map((N) => {
                const m = typeof N == "string" ? N : N.language || "", T = Xr[m], w = T ? Pe[T] : null;
                return /* @__PURE__ */ e(
                  "span",
                  {
                    className: "category-lang-tag",
                    onClick: () => h && T && c.openLangEditDialog(h.id, T),
                    children: w ? r(w.label) : m
                  },
                  m
                );
              }) : /* @__PURE__ */ e("span", { className: "category-lang-empty", children: "-" }),
              /* @__PURE__ */ e(
                "svg",
                {
                  className: "category-lang-edit-icon",
                  width: "14",
                  height: "14",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  onClick: () => h && c.openLangConfigDialog(h.id),
                  style: { cursor: "pointer" },
                  children: /* @__PURE__ */ e("path", { d: "M10.5 3.5L12.5 5.5M2 14L2.5 11.5L11 3L13 5L4.5 13.5L2 14Z", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })
                }
              )
            ] })
          },
          {
            key: "giftCount",
            title: r("Number of Gifts"),
            width: 80,
            className: "col-count",
            render: (h) => /* @__PURE__ */ e("span", { className: "category-count", children: h.giftCount ?? 0 })
          },
          {
            key: "actions",
            title: r(a.ACTIONS),
            fitContent: !0,
            minWidth: 100,
            maxWidth: 220,
            className: "col-actions",
            render: (h) => /* @__PURE__ */ e(
              Ye,
              {
                actions: [
                  {
                    key: "edit",
                    label: r(a.EDIT),
                    onClick: () => h && c.openEditDialog(h)
                  },
                  {
                    key: "delete",
                    label: r(a.DELETE),
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
          /* @__PURE__ */ e("div", { className: "category-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "category-loading-text", children: r(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "category-empty-container", children: /* @__PURE__ */ e("span", { className: "category-empty-text", children: r("Create category first") }) })
      }
    ) }),
    /* @__PURE__ */ e(
      ge,
      {
        visible: o.dialogVisible,
        header: o.isEdit ? r(a.EDIT_CATEGORY) : r(a.CREATE_CATEGORY),
        onClose: () => c.closeDialog(),
        width: be.CATEGORY_FORM,
        placement: "center",
        className: "category-dialog",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => c.closeDialog(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(
            Y,
            {
              shape: "round",
              theme: "primary",
              onClick: g,
              disabled: s || !o.formData.categoryId.trim() || !o.formData.name.trim(),
              children: s ? r("Creating...") : o.isEdit ? r("Save") : r("Create")
            }
          )
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ e(de, { label: r("Category ID"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.formData.categoryId,
                onChange: (h) => c.setFormData({ categoryId: String(h) }),
                placeholder: r("Enter category ID"),
                disabled: o.isEdit,
                status: W(o.formData.categoryId) > vt ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(o.formData.categoryId) > vt ? " byte-overflow" : ""}`, children: [
                  W(o.formData.categoryId),
                  "/",
                  vt
                ] })
              }
            ),
            W(o.formData.categoryId) > vt && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r("Category ID max bytes", { max: vt }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: r("Category Name"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.formData.name,
                onChange: (h) => c.setFormData({ name: String(h) }),
                placeholder: r("Enter category name"),
                status: W(o.formData.name) > Ae ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(o.formData.name) > Ae ? " byte-overflow" : ""}`, children: [
                  W(o.formData.name),
                  "/",
                  Ae
                ] })
              }
            ),
            W(o.formData.name) > Ae && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r("Category name max bytes", { max: Ae }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: r(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.formData.description,
                onChange: (h) => c.setFormData({ description: String(h) }),
                placeholder: r("Enter category description"),
                status: W(o.formData.description) > Re ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(o.formData.description) > Re ? " byte-overflow" : ""}`, children: [
                  W(o.formData.description),
                  "/",
                  Re
                ] })
              }
            ),
            W(o.formData.description) > Re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r("Category desc max bytes", { max: Re }) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: o.langConfigVisible,
        header: r(a.CATEGORY_MULTILINGUAL_CONFIG),
        onClose: () => c.closeLangConfigDialog(),
        width: be.GIFT_LANG_CONFIG,
        placement: "center",
        className: "category-lang-config-dialog",
        footer: /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: () => c.closeLangConfigDialog(), children: r(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "category-lang-config-container", children: [
          /* @__PURE__ */ u("div", { className: "category-lang-config-info-banner", children: [
            /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
              /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
              /* @__PURE__ */ e("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
              /* @__PURE__ */ e("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
            ] }),
            /* @__PURE__ */ e("span", { children: r(a.CATEGORY_MULTILINGUAL_CONFIG_TIP) })
          ] }),
          /* @__PURE__ */ u("table", { className: "category-lang-config-table", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ e("th", { children: r(a.LANGUAGE_TYPE) }),
              /* @__PURE__ */ e("th", { children: r(a.CATEGORY_NAME) }),
              /* @__PURE__ */ e("th", { children: r(a.CATEGORY_DESCRIPTION) }),
              /* @__PURE__ */ e("th", { children: r(a.ACTIONS) })
            ] }) }),
            /* @__PURE__ */ e("tbody", { children: qr.map((h) => {
              const N = o.categoryLangConfig[h], m = Pe[h];
              return /* @__PURE__ */ u("tr", { children: [
                /* @__PURE__ */ e("td", { children: r(m.label) }),
                /* @__PURE__ */ e("td", { className: "category-lang-table-cell-name", children: N.name || /* @__PURE__ */ e("span", { className: "category-lang-table-empty", children: r(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ e("td", { className: "category-lang-table-cell-desc", children: N.description || /* @__PURE__ */ e("span", { className: "category-lang-table-empty", children: r(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(
                  Ye,
                  {
                    actions: [
                      {
                        key: "edit",
                        label: r(a.EDIT),
                        onClick: () => o.editingId && c.openLangEditDialog(o.editingId, h)
                      },
                      {
                        key: "clear",
                        label: r(a.CLEAR),
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
    /* @__PURE__ */ e(
      ge,
      {
        destroyOnClose: !0,
        visible: o.langEditVisible && !!o.editingLang,
        header: o.editingLang ? r(a.EDIT_CATEGORY_LANGUAGE_INFO, { lang: r(Pe[o.editingLang].label) }) : "",
        onClose: () => c.closeLangEditDialog(),
        width: be.GIFT_EDIT,
        placement: "center",
        className: "category-lang-edit-modal",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => c.closeLangEditDialog(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: v, children: r(a.SAVE) })
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ e(de, { label: r(a.CATEGORY_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.langEditForm.name,
                onChange: (h) => c.setLangEditForm({ name: String(h) }),
                placeholder: o.editingLang ? r(a.ENTER_LANGUAGE_CATEGORY_NAME, { lang: r(Pe[o.editingLang].label) }) : "",
                status: W(o.langEditForm.name) > Ae ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(o.langEditForm.name) > Ae ? " byte-overflow" : ""}`, children: [
                  W(o.langEditForm.name),
                  "/",
                  Ae
                ] })
              }
            ),
            W(o.langEditForm.name) > Ae && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r(a.CATEGORY_NAME_MAX_BYTES, { max: Ae }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: r(a.CATEGORY_DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.langEditForm.description,
                onChange: (h) => c.setLangEditForm({ description: String(h) }),
                placeholder: o.editingLang ? r(a.ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: r(Pe[o.editingLang].label) }) : "",
                status: W(o.langEditForm.description) > Re ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${W(o.langEditForm.description) > Re ? " byte-overflow" : ""}`, children: [
                  W(o.langEditForm.description),
                  "/",
                  Re
                ] })
              }
            ),
            W(o.langEditForm.description) > Re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r(a.CATEGORY_DESC_MAX_BYTES, { max: Re }) })
          ] }) })
        ] })
      },
      `cat-lang-edit-${o.editingCategoryForLang}-${o.editingLang ?? ""}`
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: o.deleteDialogVisible && !!o.deletingItem,
        header: r(a.CONFIRM_DELETE_CATEGORY),
        onClose: () => c.cancelDelete(),
        width: be.GIFT_DELETE,
        placement: "center",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(Y, { shape: "round", variant: "outline", onClick: () => c.cancelDelete(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(Y, { shape: "round", theme: "primary", onClick: () => c.confirmDelete(), children: r(a.DELETE) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: r(a.CANNOT_UNDO_AFTER_DELETE) })
      }
    )
  ] });
}
let pe = null, ot = !1, ie = null;
const Ct = /* @__PURE__ */ new Set();
function uo() {
  return ie || (ie = new Ga({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: r, pageCursors: n, count: t }) => {
      if (!pe)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const c = await Aa({
        page: r,
        pageCursors: n,
        pageSize: t
      });
      return {
        list: c.lives,
        pageCursors: c.pageCursors,
        hasMoreData: c.hasMoreData
      };
    }
  }), ie.subscribe((r) => {
    ot && Ct.forEach((n) => n(r));
  }), ie.subscribe((r) => {
    pe && (pe.liveList = [...r.pageData]);
  }), ie);
}
function ho(r) {
  return Ct.add(r), ie && r(ie.getSnapshot()), () => {
    Ct.delete(r);
  };
}
function mt() {
  const [r, n] = _([]), [t, i] = _(!0), [c, o] = _(null), [s, p] = _(
    () => ({ pageData: [], currentPage: 1, hasMore: !0, loading: !1 })
  ), l = ee(!0);
  pe || (pe = new wa({
    onStateChange: (P) => {
      ot && (P.liveList !== void 0 && n(P.liveList), P.hasMore !== void 0 && i(P.hasMore), P.currentLive !== void 0 && o(P.currentLive));
    },
    getActive: () => ot
  })), uo(), J(() => (l.current = !0, ot = !0, Ct.add(p), ie && p(ie.getSnapshot()), () => {
    l.current = !1, ot = !1, Ct.delete(p), setTimeout(() => {
      ot || (pe == null || pe.destroy(), pe = null, ie == null || ie.destroy(), ie = null);
    }, 100);
  }), []);
  const d = A((P) => {
    pe == null || pe.init(P), ie == null || ie.goToFirstPage().catch((B) => {
      console.error("[useLiveMonitorState] Failed to load first page:", B);
    });
  }, []), f = A(async (P) => {
    if (!ie) return [];
    switch (P == null ? void 0 : P.action) {
      case "first":
        await ie.goToFirstPage();
        break;
      case "prev":
        await ie.prevPage();
        break;
      case "next":
      default:
        await ie.nextPage();
        break;
    }
    return s.pageData;
  }, []), g = A(async (P) => pe.createLive(P), []), v = A(async (P) => pe.updateLive(P), []), h = A(async (P) => pe.endLive(P), []), N = A(async (P) => pe.fetchLiveDetail(P), []), m = A(async (P) => pe.fetchLiveStats(P), []), T = A((P) => {
    pe == null || pe.setCurrentLive(P);
  }, []), w = A(async (P) => pe.stopPlay(P), []), E = A(async (P) => pe.startPlay(P), [w]), S = A(() => (ie == null ? void 0 : ie.nextPage()) ?? Promise.resolve(), []), R = A(() => (ie == null ? void 0 : ie.prevPage()) ?? Promise.resolve(), []), C = A(() => (ie == null ? void 0 : ie.goToFirstPage()) ?? Promise.resolve(), []), I = A(() => (ie == null ? void 0 : ie.refreshCurrentPage()) ?? Promise.resolve(), []);
  return {
    init: d,
    liveList: r,
    hasMore: t,
    currentLive: c,
    setCurrentLive: T,
    fetchLiveList: f,
    createLive: g,
    updateLive: v,
    endLive: h,
    fetchLiveDetail: N,
    fetchLiveStats: m,
    startPlay: E,
    stopPlay: w,
    paginatedList: {
      pageData: s.pageData,
      currentPage: s.currentPage,
      hasMore: s.hasMore,
      loading: s.loading,
      nextPage: S,
      prevPage: R,
      goToFirstPage: C,
      refreshCurrentPage: I
    }
  };
}
export {
  Mo as G,
  Ao as L,
  q as M,
  Ro as a,
  wo as b,
  To as c,
  Ve as d,
  Zr as e,
  mt as f,
  Si as g,
  Jr as h,
  Ti as i,
  wi as j,
  ho as s,
  ht as u
};
