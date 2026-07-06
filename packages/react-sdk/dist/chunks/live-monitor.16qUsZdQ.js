import { jsx as e, jsxs as u, Fragment as he } from "react/jsx-runtime";
import * as Ge from "react";
import st, { useState as _, useRef as te, useEffect as ee, useCallback as S, isValidElement as tn, createElement as rn, Component as nn, useMemo as _e, forwardRef as an, useImperativeHandle as on, useLayoutEffect as mr, useSyncExternalStore as er } from "react";
import { useUIKit as ve, i18next as Ot } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as tr, RefreshIcon as rr, FullscreenIcon as Ur, NotificationIcon as kr, StopCircleIcon as Pr, UploadIcon as pr, CloseIcon as nr, ImageIcon as sn, CutIcon as cn, ChevronDownIcon as Fr, ChevronRightIcon as ar, AddIcon as ir, FileCopyIcon as He, DeleteIcon as ln, EditIcon as Zt, InfoCircleIcon as Be, LoginIcon as dn, CheckCircleIcon as Dt, ChatOffIcon as Gr, UserCheckedIcon as un, UserBlockedIcon as Vr, MoreIcon as hn, CloseCircleIcon as mn, ChevronLeftIcon as pn, AdjustmentIcon as fn } from "tdesign-icons-react";
import { MessagePlugin as At, Dialog as ge, Button as H, Input as fe, Select as or, InputNumber as Jt, Checkbox as gn, Card as Wr, Tabs as zt, Switch as vn, Tooltip as xe, Loading as En, Textarea as Nn } from "tdesign-react";
import { s as Cn, ax as yn, av as _n, aG as V, H as Et, aM as bn, bq as zr, br as Br, b as In, W as Ln, aZ as Hr, a$ as Sn, Z as Tn, bL as An, be as fr, bJ as wn, bI as Rn, bH as Mn, bm as On, bd as Dn, am as xn, bl as Un, bg as kn, aI as Pn, Y as Fn, aj as gr, A as je, J as ke, aH as Gn, aY as Vn, b1 as Wn, b4 as xt, g as Ue, ah as zn, bs as Yr, t as sr, $ as Bn, ak as vr, V as Er, as as Hn, bG as Yn, ac as Kn, aJ as $n, N as qn, aT as Xn, a1 as jn, aC as Zn, X as Bt, b7 as Jn, bk as Qn, aW as Mt, a3 as ea, a8 as ta, R as wt, a6 as ra, b0 as na, aL as tt, i as aa, b9 as Nr, D as ia, a as Ye, n as Ze, o as Me, l as Oe, m as ft, bt as oa, v as Kr, w as Pe, aP as sa, u as $r, aF as ca, r as la, b6 as Cr, p as yr, q as da, P as Ht, d as gt, e as we, C as Re, O as ua, aw as ha } from "./main-layout.Dw3RNEcP.js";
import { c as ma, g as pa, s as cr, a as fa, D as ga, d as va, e as Ea, m as Na, b as Ca, P as ya } from "./gift-category.zxl1tGwe.js";
import { aT as _a, a3 as ba, b as Ia, e as La, ap as Sa, aM as Ta, c as Aa, aL as wa, b9 as Ra, aY as a, b8 as Ma, b2 as Yt, D as Ct, b3 as lr, i as Oa, h as Da, b5 as xa, aX as be, ax as dr, aR as _r, X as lt, aI as Ua, W as qr, aA as ka, d as Pa } from "./upload.HR7xdC-w.js";
import { c as Fa } from "./config.BhtXZwQl.js";
import { E as Ut } from "./error.HinSWumo.js";
import { useNavigate as yt, useParams as Ga } from "react-router-dom";
import { a as Va } from "./moderation-store.DpCJ9ZU8.js";
import { useLiveListState as Wa, useLoginState as Xr, LiveListEvent as br, LiveView as za, useLiveAudienceState as Ba, BarrageList as Ha, LiveAudienceList as Ya } from "tuikit-atomicx-react";
import { c as Ka } from "./t.QkUmzvcB.js";
import { createPortal as $a } from "react-dom";
function jr() {
  const [n, r] = _([]), [t, i] = _([]), c = te(null);
  c.current || (c.current = new Cn({
    onStateChange: (b) => {
      r(b.giftList), i(b.giftCategoryList);
    }
  }));
  const o = c.current;
  ee(() => () => {
    o.destroy();
  }, [o]);
  const s = S(
    async (b) => o.fetchGiftList(b),
    [o]
  ), p = S(
    async (b) => o.createGift(b),
    [o]
  ), l = S(
    async (b) => o.updateGift(b),
    [o]
  ), d = S(
    async (b) => o.deleteGift(b),
    [o]
  ), f = S(
    async (b) => o.createGiftCategory(b),
    [o]
  ), g = S(
    async (b) => o.updateGiftCategory(b),
    [o]
  ), v = S(
    async (b) => o.deleteGiftCategory(b),
    [o]
  ), h = S(
    async (b) => o.addGiftCategoryRelations(b),
    [o]
  ), N = S(
    async (b) => o.deleteGiftCategoryRelations(b),
    [o]
  ), m = S(
    async (b) => o.getGiftLanguage(b),
    [o]
  ), L = S(
    async (b) => o.setGiftLanguage(b),
    [o]
  ), T = S(
    async (b) => o.deleteGiftLanguage(b),
    [o]
  ), E = S(
    async (b, A) => o.getGiftCategoryLanguage(b, A),
    [o]
  ), M = S(
    async (b, A, P, F) => o.setGiftCategoryLanguage(b, A, P, F),
    [o]
  ), O = S(
    async (b, A) => o.deleteGiftCategoryLanguage(b, A),
    [o]
  );
  return {
    giftList: n,
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
    setGiftLanguage: L,
    deleteGiftLanguage: T,
    getGiftCategoryLanguage: E,
    setGiftCategoryLanguage: M,
    deleteGiftCategoryLanguage: O
  };
}
function Zr(n) {
  const { liveId: r, pageSize: t } = n, [i, c] = _(!1), [o, s] = _(0), [p, l] = _([]), [d, f] = _(1), [g, v] = _(0), [h, N] = _(!1), [m, L] = _([]), [T, E] = _([]), [M, O] = _(!1), [b, A] = _(null), P = te(!0);
  ee(() => (P.current = !0, () => {
    P.current = !1;
  }), []);
  const F = S(async () => {
    try {
      const y = await _a();
      return P.current && (c(y > 0), s(y)), y;
    } catch (y) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", y), y;
    }
  }, []), z = S(async (y = {}) => {
    N(!0);
    try {
      const W = await ba({ pageSize: t, liveId: r, ...y });
      return P.current && (l(W.list || []), f(y.pageNum || 1), v(W.total || 0)), W;
    } catch (W) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", W), W;
    } finally {
      P.current && N(!1);
    }
  }, [t, r]), D = S(async (y) => {
    try {
      const W = y.items ?? (() => {
        const G = p;
        return y.ids.map((R) => {
          const U = G.find((B) => B.id === R);
          return {
            id: R,
            content: (U == null ? void 0 : U.content) ?? R,
            userId: (U == null ? void 0 : U.userId) ?? ""
          };
        });
      })();
      return await Ia({ ids: y.ids, items: W, liveId: y.liveId ?? r });
    } catch (W) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", W), W;
    }
  }, [r, p]), Z = S(async (y) => {
    try {
      return await La({ content: y.keywords.join(","), liveId: r });
    } catch (W) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", W), W;
    }
  }, [r]), X = S(async () => {
    if (!r) return [];
    O(!0), A(null);
    try {
      const y = await yn(r);
      return L(y), y;
    } catch (y) {
      throw A(y), y;
    } finally {
      O(!1);
    }
  }, [r]), q = S(async () => {
    if (!r) return [];
    O(!0), A(null);
    try {
      const y = await _n(r);
      return E(y), y;
    } catch (y) {
      throw A(y), y;
    } finally {
      O(!1);
    }
  }, [r]), w = S(async (y) => {
    if (!r) throw new Error("liveId is required");
    O(!0), A(null);
    try {
      await Sa(r, y.memberAccounts, y.muteTime), await X();
    } catch (W) {
      throw A(W), console.error("[useRiskControlState] muteMember failed:", W), W;
    } finally {
      O(!1);
    }
  }, [r, X]), I = S(async (y) => {
    if (!r) throw new Error("liveId is required");
    O(!0), A(null);
    try {
      await Ta(r, y.memberAccounts), await X();
    } catch (W) {
      throw A(W), console.error("[useRiskControlState] unmuteMember failed:", W), W;
    } finally {
      O(!1);
    }
  }, [r, X]), C = S(async (y) => {
    if (!r) throw new Error("liveId is required");
    O(!0), A(null);
    try {
      await Aa(r, y.memberAccounts, y.duration, y.reason), await q();
    } catch (W) {
      A(W);
    } finally {
      O(!1);
    }
  }, [r, q]), x = S(async (y) => {
    if (!r) throw new Error("liveId is required");
    O(!0), A(null);
    try {
      await wa(r, y.memberAccounts), await q();
    } catch (W) {
      A(W);
    } finally {
      O(!1);
    }
  }, [r, q]), Y = S(async () => {
    if (!r) throw new Error("liveId is required");
    try {
      return await Ra(r, "default", "您的内容涉嫌违规");
    } catch (y) {
      throw console.error("[useRiskControlState] sendViolationWarning failed:", y), y;
    }
  }, [r]);
  return {
    textModerationAvailable: i,
    textModerationRemainUsage: o,
    textModerationList: p,
    textModerationPageNum: d,
    textModerationTotal: g,
    textModerationLoading: h,
    fetchTextModerationUsage: F,
    fetchTextModerationList: z,
    approveTextModerationItems: D,
    bypassCorrectionKeyword: Z,
    muteMember: w,
    unmuteMember: I,
    banMember: C,
    unbanMember: x,
    sendViolationWarning: Y,
    mutedList: m,
    bannedList: T,
    memberLoading: M,
    memberError: b,
    fetchMutedList: X,
    fetchBannedList: q
  };
}
const $ = {
  success: (n) => At.success(n),
  error: (n) => At.error(n),
  warning: (n) => At.error(n),
  info: (n) => At.info(n)
}, Jr = ({
  visible: n,
  liveId: r = "",
  liveName: t = "",
  onVisibleChange: i,
  onConfirm: c,
  onCancel: o
}) => {
  const { t: s } = ve(), [p, l] = _(!1), d = () => {
    l(!1), i(!1);
  }, f = async () => {
    if (!(p || !r)) {
      l(!0);
      try {
        await Ma(r, {
          violationType: "warning",
          violationContent: `直播间 "${t || r}" 收到违规警告，请立即整改`,
          handleSuggestion: "请遵守平台规则，删除违规内容"
        }), $.success(s("Violation Warning Sent")), c == null || c({ liveId: r, liveName: t }), d();
      } catch (v) {
        console.error("发送违规警告失败:", v), $.error(s("Send Failed")), l(!1);
      }
    }
  }, g = () => {
    p || (o == null || o(), d());
  };
  return /* @__PURE__ */ e(
    ge,
    {
      visible: n,
      header: s("Violation Warning Send Confirm"),
      confirmBtn: /* @__PURE__ */ e(
        H,
        {
          theme: "warning",
          shape: "round",
          loading: p,
          onClick: f,
          children: s(p ? "Sending" : a.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ e(
        H,
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
  searchInput: n,
  onSearchInputChange: r,
  onSearch: t,
  onClearSearch: i,
  onRefresh: c,
  refreshing: o
}) => {
  const { t: s } = ve(), p = () => {
    if (V(n) > Et) {
      $.error(s(a.INPUT_TOO_LONG));
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
          value: n,
          onChange: r,
          onEnter: p,
          clearable: !0,
          onClear: i,
          placeholder: s(a.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ e(tr, { size: 16 }),
          className: "monitor-search-input",
          status: V(n) > Et ? "error" : "default",
          tips: V(n) > Et ? s(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ e(
        H,
        {
          theme: "primary",
          variant: "outline",
          shape: "round",
          icon: /* @__PURE__ */ e(rr, {}),
          loading: o,
          onClick: c,
          children: s(a.REFRESH)
        }
      )
    ] })
  ] });
}, Xa = ({
  currentPage: n,
  hasMoreData: r,
  loading: t,
  onPrevPage: i,
  onNextPage: c,
  onGoToFirstPage: o
}) => {
  const { t: s } = ve();
  return /* @__PURE__ */ u("div", { className: "live-monitor-pagination", children: [
    /* @__PURE__ */ e(
      H,
      {
        variant: "outline",
        size: "small",
        disabled: n <= 1 || t,
        onClick: o,
        children: s(a.FIRST_PAGE)
      }
    ),
    /* @__PURE__ */ e(
      H,
      {
        variant: "outline",
        size: "small",
        disabled: n <= 1 || t,
        onClick: i,
        children: s(a.PREVIOUS_PAGE)
      }
    ),
    /* @__PURE__ */ e("span", { className: "page-info", children: s("Page {{page}}", { page: n }) }),
    /* @__PURE__ */ e(
      H,
      {
        variant: "outline",
        size: "small",
        disabled: !r || t,
        onClick: c,
        children: s(a.NEXT_PAGE)
      }
    )
  ] });
};
function kt({
  className: n = "anchor-avatar",
  name: r,
  src: t,
  title: i
}) {
  const { t: c } = ve(), [o, s] = _(""), [p, l] = _(!1);
  ee(() => {
    s(t || Yt), l(!1);
  }, [t]);
  const d = r ? c("Avatar Alt", { name: r }) : c("Host Avatar");
  return !o || p ? /* @__PURE__ */ e("div", { className: n, title: i, "aria-label": d, children: bn(r) }) : /* @__PURE__ */ e("div", { className: n, title: i, "aria-label": d, children: /* @__PURE__ */ e(
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
        if (o !== Yt) {
          s(Yt);
          return;
        }
        l(!0);
      }
    }
  ) });
}
class ja extends nn {
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
function De({
  slot: n,
  props: r,
  fallback: t,
  className: i
}) {
  if (!n) return null;
  const c = tn(n) ? st.cloneElement(n, r) : rn(n, r);
  return /* @__PURE__ */ e(ja, { fallback: t, children: i ? /* @__PURE__ */ e("div", { className: i, children: c }) : c });
}
const Za = ({
  item: n,
  hoveredCardId: r,
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
  var z, D, Z, X, q;
  const { t: h } = ve(), { startPlay: N, stopPlay: m } = ht(), L = (z = Ct().components) == null ? void 0 : z.liveMonitor, T = ((D = n.avatarUrl) == null ? void 0 : D.trim()) || "", E = (c == null ? void 0 : c.avatarUrl) || ((Z = n.anchor) == null ? void 0 : Z.avatarUrl) || T || zr(n), M = (c == null ? void 0 : c.nick) || ((X = n.anchor) == null ? void 0 : X.nick) || Br(n, h(a.UNKNOWN_HOST)), O = ((q = n.stats) == null ? void 0 : q.viewCount) ?? 0, b = _e(() => `live_monitor_view_${n.liveId}`, [n.liveId]), A = te(""), P = te(0), F = te(null);
  return ee(() => {
    const w = n.liveId;
    if (!w) return;
    const I = ++P.current;
    let C = !1;
    return (async () => {
      for (; F.current; )
        try {
          await F.current;
        } catch {
        }
      try {
        await N({ liveId: w, containerId: b }), !C && P.current === I && (A.current = w);
      } catch (Y) {
        !C && P.current === I && (Y === Ut.LOGIN_TIMEOUT || Y === Ut.USER_SIG_ILLEGAL) && (Oa(), Da(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required");
      }
    })(), () => {
      C = !0, P.current += 1;
      const Y = A.current || w;
      A.current === Y && (A.current = ""), F.current = m(Y), F.current.catch(() => {
      });
    };
  }, [n.liveId, b, N, m]), /* @__PURE__ */ u(
    "div",
    {
      className: `live-card ${r === n.liveId ? "hovered" : ""}`,
      onMouseEnter: p,
      onMouseLeave: l,
      children: [
        /* @__PURE__ */ u("div", { id: n.liveId, className: "live-video-container", children: [
          /* @__PURE__ */ e(
            "div",
            {
              className: "live-video-bg",
              style: {
                backgroundImage: `url(${n.backgroundUrl || n.coverUrl || lr})`
              }
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              id: b,
              className: "live-video-player"
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              className: "live-id-badge",
              style: { maxWidth: s.idMaxWidth },
              children: /* @__PURE__ */ e("span", { title: n.liveId, children: `${h(a.LIVE_ID)}: ${n.liveId}` })
            }
          ),
          o.length > 0 && /* @__PURE__ */ u(
            "div",
            {
              className: "live-card-tags-overlay",
              style: { maxWidth: s.tagsMaxWidth },
              children: [
                o.slice(0, s.visibleCount).map((w) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ e("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ e("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  h(w)
                ] }, w)),
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
                          onMouseEnter: () => v(n.liveId),
                          children: "..."
                        }
                      ),
                      t === n.liveId && /* @__PURE__ */ e(
                        "div",
                        {
                          className: "live-card-tag-dropdown",
                          onMouseEnter: () => v(n.liveId),
                          onClick: (w) => w.stopPropagation(),
                          children: o.slice(s.visibleCount).map((w) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ e("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ e("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                            ] }),
                            h(w)
                          ] }, w))
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
              onClick: (w) => {
                w.stopPropagation(), d();
              },
              children: /* @__PURE__ */ u("div", { className: "overlay-btn primary", children: [
                /* @__PURE__ */ e(Ur, { size: 16 }),
                h(a.VIEW_DETAILS)
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ u("div", { className: "live-card-info", children: [
          /* @__PURE__ */ e("div", { className: "live-card-title", title: n.liveName || h(a.UNNAMED_LIVE), children: n.liveName || h(a.UNNAMED_LIVE) }),
          /* @__PURE__ */ u("div", { className: "live-card-meta", children: [
            /* @__PURE__ */ u("div", { className: "live-card-anchor", children: [
              /* @__PURE__ */ e(
                kt,
                {
                  className: "anchor-avatar",
                  src: E,
                  name: M,
                  title: M
                }
              ),
              /* @__PURE__ */ e("span", { className: "anchor-name", title: M, children: M })
            ] }),
            /* @__PURE__ */ u("span", { className: "meta-viewer-count", title: String(O), children: [
              O,
              h(a.VIEWS)
            ] })
          ] })
        ] }),
        /* @__PURE__ */ u("div", { className: `live-card-actions ${r === n.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ e(
            H,
            {
              className: "action-btn warn",
              variant: "text",
              icon: /* @__PURE__ */ e(kr, { size: 16 }),
              onClick: (w) => {
                w.stopPropagation(), f();
              },
              children: /* @__PURE__ */ e("span", { className: "button-text", children: h(a.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ e(De, { slot: L == null ? void 0 : L.userActionExtraItems, props: { live: n } }),
          /* @__PURE__ */ e(
            H,
            {
              className: "action-btn close full",
              variant: "text",
              icon: /* @__PURE__ */ e(Pr, { size: 16 }),
              onClick: (w) => {
                w.stopPropagation(), g();
              },
              children: /* @__PURE__ */ e("span", { className: "button-text", children: h(a.FORCE_STOP) })
            }
          )
        ] })
      ]
    },
    n.liveId
  );
}, Ja = () => {
  const n = ht(), { paginatedList: r } = n, [t, i] = _(r.currentPage), [c, o] = _(r.hasMore), [s, p] = _(r.loading), [l, d] = _(r.pageData);
  ee(() => ho((E) => {
    i(E.currentPage), o(E.hasMore), p(E.loading), d([...E.pageData]);
  }), []);
  const f = l.length > 0, [g, v] = _(/* @__PURE__ */ new Map()), h = te(0), N = te(!1), m = te(/* @__PURE__ */ new Map());
  m.current = _e(() => {
    const T = /* @__PURE__ */ new Map();
    return T.set(t, l), T;
  }, [t, l]);
  const L = te([]);
  return L.current = l, {
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
    liveListRef: L,
    // —— 分页操作（来自 SDK 对外状态入口） ——
    paginatedList: r
  };
}, Qa = 8, ei = (n) => {
  const {
    paginatedList: r,
    isSearchMode: t,
    pageVersionRef: i,
    setIsSearchMode: c,
    setSearchInput: o,
    stopPlay: s,
    endLive: p,
    fetchLiveDetail: l,
    isUnmountedRef: d
  } = n, f = yt(), { t: g } = ve(), [v, h] = _({ visible: !1, liveId: "", liveName: "", closing: !1 }), [N, m] = _({ visible: !1, liveId: "", liveName: "" }), [L, T] = _(!1), E = te(!1), [M, O] = _(!1), b = S((q, w) => {
    h({ visible: !0, liveId: q, liveName: w, closing: !1 });
  }, []), A = S((q, w) => {
    m({ visible: !0, liveId: q, liveName: w });
  }, []), P = S(async () => {
    const { liveId: q } = v;
    if (q) {
      h((w) => ({ ...w, closing: !0 }));
      try {
        await s(q), await p(q), h({ visible: !1, liveId: "", liveName: "", closing: !1 }), $.success(g(a.LIVE_FORCIBLY_CLOSED));
        const w = !r.hasMore, I = r.pageData.length;
        i.current += 1, w && I <= 1 && r.currentPage > 1 ? await r.prevPage() : await r.refreshCurrentPage();
      } catch (w) {
        console.error("封禁房间失败:", w), h((I) => ({ ...I, closing: !1 }));
      }
    }
  }, [v, s, p, r, i, g]), F = S(() => {
    h({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), z = S((q) => {
    try {
      sessionStorage.setItem("liveMonitor_currentPage", String(r.currentPage));
    } catch {
    }
    f(`/live-control/${q}`);
  }, [r, f]), D = S(async (q) => {
    const w = (q ?? "").trim();
    if (!w || V(w) > Et) {
      w && V(w) > Et && $.error(g(a.INPUT_TOO_LONG));
      return;
    }
    const I = w;
    T(!0);
    const C = ++i.current;
    try {
      const x = await l(I);
      if (d.current || i.current !== C)
        return;
      if (!x) {
        $.error(g(a.NO_SEARCH_RESULTS_FOR, { keyword: w })), await r.goToFirstPage();
        return;
      }
      if (c(!0), E.current = !0, d.current || i.current !== C) {
        await s(I);
        return;
      }
      $.success(g(a.SEARCH_SUCCESS));
    } catch (x) {
      if (console.error("搜索直播间失败:", x), x === Ut.LOGIN_TIMEOUT || x === Ut.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required";
        return;
      }
      $.error(g(a.NO_SEARCH_RESULTS_FOR, { keyword: w })), await r.goToFirstPage();
    } finally {
      d.current || T(!1);
    }
  }, [l, d, i, r, c, s, g]), Z = S(async () => {
    o(""), c(!1), E.current = !1, i.current += 1, await r.goToFirstPage();
  }, [o, c, i, r]), X = S(async () => {
    if (!(M || r.loading)) {
      O(!0);
      try {
        t && (c(!1), E.current = !1, o("")), i.current += 1, await r.refreshCurrentPage();
      } catch (q) {
        console.error("刷新失败:", q);
        const w = (q == null ? void 0 : q.ErrorInfo) || (q == null ? void 0 : q.errorInfo) || "";
        $.error(g(a.REFRESH_FAILED) + (w ? ` (${w})` : ""));
      } finally {
        d.current || O(!1);
      }
    }
  }, [M, r, t, c, o, i, g, d]);
  return {
    // 封禁相关
    closeConfirm: v,
    handleCloseLive: b,
    handleConfirmClose: P,
    handleCancelClose: F,
    // 违规警告相关
    violationConfirm: N,
    handleViolationWarning: A,
    setViolationConfirm: m,
    // 搜索相关
    searching: L,
    isSearchModeRef: E,
    handleSearch: D,
    handleClearSearch: Z,
    // 刷新相关
    refreshing: M,
    handleRefresh: X,
    // 详情
    handleClickDetails: z
  };
}, ti = 600 * 1e3, ri = (n) => {
  const { pageSize: r, isSearchModeRef: t, isUnmountedRef: i, pageVersionRef: c } = n, [o, s] = _(/* @__PURE__ */ new Map()), p = te(null), l = te(""), d = S(() => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, []), f = S(() => {
    const m = /* @__PURE__ */ new Date(), L = new Date(m.getTime() - 3600 * 1e3), T = (E) => {
      const M = E.getFullYear(), O = String(E.getMonth() + 1).padStart(2, "0"), b = String(E.getDate()).padStart(2, "0"), A = String(E.getHours()).padStart(2, "0"), P = String(E.getMinutes()).padStart(2, "0"), F = String(E.getSeconds()).padStart(2, "0");
      return `${M}-${O}-${b} ${A}:${P}:${F}`;
    };
    return {
      startTime: T(L),
      endTime: T(m)
    };
  }, []), g = S(async (m, L, T) => {
    const E = Array.from(
      new Set(
        m.slice(0, r).map((O) => O.liveId).filter(Boolean)
      )
    );
    if (E.length === 0 || t.current) return;
    d();
    const M = `${T}:${L}:${E.join(",")}`;
    l.current = M;
    try {
      const { startTime: O, endTime: b } = f(), A = await xa(E, 10, O, b);
      if (i.current || c.current !== T || l.current !== M)
        return;
      s((P) => {
        const F = new Map(P);
        return E.forEach((z) => {
          F.set(z, A.get(z) || []);
        }), F;
      });
    } catch (O) {
      console.warn("[LiveMonitor] 获取直播违规标签失败:", O);
    } finally {
      !i.current && c.current === T && l.current === M && !t.current && (p.current = setTimeout(() => {
        g(m, L, T);
      }, ti));
    }
  }, [r, t, i, c, d, f]), v = S(() => [], []), h = S((...m) => {
    const L = [];
    for (const T of m)
      for (const E of T || [])
        E && !L.includes(E) && L.push(E);
    return L;
  }, []), N = S((m) => h(
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
function ni(n, r) {
  const t = te(null), [, i] = _(0);
  t.current || (t.current = new In({
    containerSelector: ".live-monitor-grid",
    t: r
  }));
  const c = S(() => {
    i((d) => d + 1);
  }, []), o = S((d) => {
    const f = t.current, g = f.getResult(d);
    if (!g.visibleCount && !g.showMore && g.idMaxWidth === "calc(100% - 12px)") {
      const v = n(), h = v == null ? void 0 : v.find((N) => N.liveId === d);
      h && setTimeout(() => {
        f.compute(d, h), c();
      }, 0);
    }
    return g;
  }, [c, n]), s = S(() => {
    var d;
    (d = t.current) == null || d.observe(() => {
      c();
    });
  }, [c]), p = S(() => {
    var d;
    (d = t.current) == null || d.disconnect();
  }, []), l = S((d) => {
    var f;
    (f = t.current) == null || f.initForList(d), c();
  }, [c]);
  return ee(() => () => {
    var d;
    (d = t.current) == null || d.disconnect(), t.current = null;
  }, []), {
    getAdaptiveResult: o,
    initResizeObserver: s,
    cleanupResizeObserver: p,
    initAdaptiveTags: l
  };
}
const Ao = () => {
  const { t: n } = ve(), { init: r, stopPlay: t, endLive: i, fetchLiveDetail: c, currentLive: o } = ht(), {
    currentPage: s,
    hasMoreData: p,
    loading: l,
    hasLiveData: d,
    pageData: f,
    pageVersionRef: g,
    isUnmountedRef: v,
    paginatedList: h
  } = Ja(), [N, m] = _(""), [L, T] = _(!1), E = te(!1), [M, O] = _(null), [b, A] = _(null), {
    getAdaptiveResult: P,
    initResizeObserver: F,
    cleanupResizeObserver: z,
    initAdaptiveTags: D
  } = ni(
    () => f.map((J) => ({
      liveId: J.liveId,
      tags: w(J)
    })),
    n
  ), {
    liveViolationLabelMap: Z,
    loadLiveViolationLabelsForPage: X,
    clearLiveViolationRefreshTimer: q,
    getLiveDisplayTags: w
  } = ri({
    pageSize: Qa,
    isSearchModeRef: E,
    isUnmountedRef: v,
    pageVersionRef: g
  }), I = (J) => {
    m(String(J));
  }, C = S(async () => {
    await h.prevPage();
  }, [h]), x = S(async () => {
    await h.nextPage();
  }, [h]), Y = S(async () => {
    await h.goToFirstPage();
  }, [h]);
  ee(() => {
    if (l || f.length === 0) return;
    q();
    const J = ++g.current;
    X(f, s, J);
  }, [f, s, l, q, X, g]), ee(() => (F(), () => {
    z();
  }), [F, z]);
  const {
    closeConfirm: y,
    handleCloseLive: W,
    handleConfirmClose: G,
    handleCancelClose: R,
    violationConfirm: U,
    handleViolationWarning: B,
    setViolationConfirm: ne,
    handleSearch: oe,
    handleClearSearch: j,
    refreshing: me,
    handleRefresh: Se,
    handleClickDetails: ae
  } = ei({
    paginatedList: h,
    isSearchMode: L,
    pageVersionRef: g,
    setIsSearchMode: T,
    setSearchInput: m,
    stopPlay: t,
    endLive: i,
    fetchLiveDetail: c,
    isUnmountedRef: v
  });
  return ee(() => {
    Object.keys(Z).length !== 0 && D(
      f.map((J) => ({
        liveId: J.liveId,
        tags: w(J)
      }))
    );
  }, [Z, f, w, D]), ee(() => {
    (async () => {
      try {
        const K = await dr();
        if (K && K.sdkAppId !== 0) {
          console.log("[LiveMonitor] Initializing SDK with account:", K.userId), Fa({
            baseURL: "http://localhost:9000/api",
            authToken: K.userSig
          });
          const ie = ma({
            sdkAppId: K.sdkAppId,
            userId: K.userId,
            userSig: K.userSig
          });
          r({
            baseURL: "http://localhost:9000/api",
            playerFactory: ie
            // ✅ 传入播放器工厂
          }), console.log("[LiveMonitor] SDK initialized successfully with playerFactory");
        } else
          console.error("[LiveMonitor] No valid credentials found");
      } catch (K) {
        console.error("[LiveMonitor] SDK init error:", K);
      }
    })();
  }, []), ee(() => {
    v.current = !1;
    try {
      const J = sessionStorage.getItem("liveMonitor_currentPage");
      sessionStorage.removeItem("liveMonitor_currentPage"), J && Number(J) > 1 && console.warn("[LiveMonitor] 简化版不支持恢复历史页码，回到首页");
    } catch {
    }
    return h.goToFirstPage(), () => {
      v.current = !0, q();
    };
  }, []), /* @__PURE__ */ u("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ e(
      qa,
      {
        searchInput: N,
        onSearchInputChange: I,
        onSearch: () => oe(N),
        onClearSearch: j,
        onRefresh: Se,
        refreshing: me
      }
    ),
    /* @__PURE__ */ e("div", { className: "live-monitor-grid", children: l ? /* @__PURE__ */ u("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ e("div", { className: "loading-spinner" }),
      /* @__PURE__ */ e("span", { children: n(a.LOADING) })
    ] }) : d ? f.map((J) => {
      const K = w(J);
      return /* @__PURE__ */ e(
        Za,
        {
          item: J,
          hoveredCardId: M,
          hoveredTagId: b,
          isMuted: !!J.isMuted,
          userProfile: J.anchor,
          displayTags: K,
          adaptiveResult: P(J.liveId),
          onMouseEnter: () => O(J.liveId),
          onMouseLeave: () => O(null),
          onClickDetails: () => ae(J.liveId),
          onViolationWarning: () => B(J.liveId, J.liveName || n(a.UNNAMED_LIVE)),
          onCloseLive: () => W(J.liveId, J.liveName || n(a.UNNAMED_LIVE)),
          onTagHover: (ie) => A(ie)
        },
        `${s}:${J.liveId}`
      );
    }) : /* @__PURE__ */ u("div", { className: "monitor-empty", children: [
      /* @__PURE__ */ e("div", { className: "empty-icon", children: /* @__PURE__ */ e(Ur, { size: 48 }) }),
      /* @__PURE__ */ e("p", { children: n(a.NO_LIVE_RIGHT_NOW) })
    ] }) }),
    /* @__PURE__ */ e(
      Xa,
      {
        currentPage: s,
        hasMoreData: p,
        loading: l,
        onPrevPage: C,
        onNextPage: x,
        onGoToFirstPage: Y
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: y.visible,
        header: n(a.CONFIRM_FORCE_STOP),
        onClose: R,
        width: be.CONFIRM,
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: R, disabled: y.closing, children: n(a.CANCEL) }),
          /* @__PURE__ */ e(
            H,
            {
              shape: "round",
              theme: "primary",
              onClick: G,
              disabled: y.closing,
              children: y.closing ? n(a.CLOSING) : n(a.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { children: n(a.FORCE_STOP_WARNING) })
      }
    ),
    /* @__PURE__ */ e(
      Jr,
      {
        visible: U.visible,
        liveId: U.liveId,
        liveName: U.liveName,
        onVisibleChange: (J) => ne((K) => ({ ...K, visible: J }))
      }
    )
  ] });
};
var Qt = function(n, r) {
  return Qt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, i) {
    t.__proto__ = i;
  } || function(t, i) {
    for (var c in i) Object.prototype.hasOwnProperty.call(i, c) && (t[c] = i[c]);
  }, Qt(n, r);
};
function ai(n, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Qt(n, r);
  function t() {
    this.constructor = n;
  }
  n.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var ye = function() {
  return ye = Object.assign || function(r) {
    for (var t, i = 1, c = arguments.length; i < c; i++) {
      t = arguments[i];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
    }
    return r;
  }, ye.apply(this, arguments);
};
var Kt, Ir;
function ii() {
  if (Ir) return Kt;
  Ir = 1;
  var n = !1, r, t, i, c, o, s, p, l, d, f, g, v, h, N, m;
  function L() {
    if (!n) {
      n = !0;
      var E = navigator.userAgent, M = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(E), O = /(Mac OS X)|(Windows)|(Linux)/.exec(E);
      if (v = /\b(iPhone|iP[ao]d)/.exec(E), h = /\b(iP[ao]d)/.exec(E), f = /Android/i.exec(E), N = /FBAN\/\w+;/i.exec(E), m = /Mobile/i.exec(E), g = !!/Win64/.exec(E), M) {
        r = M[1] ? parseFloat(M[1]) : M[5] ? parseFloat(M[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
        var b = /(?:Trident\/(\d+.\d+))/.exec(E);
        s = b ? parseFloat(b[1]) + 4 : r, t = M[2] ? parseFloat(M[2]) : NaN, i = M[3] ? parseFloat(M[3]) : NaN, c = M[4] ? parseFloat(M[4]) : NaN, c ? (M = /(?:Chrome\/(\d+\.\d+))/.exec(E), o = M && M[1] ? parseFloat(M[1]) : NaN) : o = NaN;
      } else
        r = t = i = o = c = NaN;
      if (O) {
        if (O[1]) {
          var A = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(E);
          p = A ? parseFloat(A[1].replace("_", ".")) : !0;
        } else
          p = !1;
        l = !!O[2], d = !!O[3];
      } else
        p = l = d = !1;
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
      return L() || r;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return L() || s > r;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return T.ie() && g;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return L() || t;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return L() || i;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return L() || c;
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
      return L() || o;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return L() || l;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return L() || p;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return L() || d;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return L() || v;
    },
    mobile: function() {
      return L() || v || h || f || m;
    },
    nativeApp: function() {
      return L() || N;
    },
    android: function() {
      return L() || f;
    },
    ipad: function() {
      return L() || h;
    }
  };
  return Kt = T, Kt;
}
var $t, Lr;
function oi() {
  if (Lr) return $t;
  Lr = 1;
  var n = !!(typeof window < "u" && window.document && window.document.createElement), r = {
    canUseDOM: n,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: n && !!(window.addEventListener || window.attachEvent),
    canUseViewport: n && !!window.screen,
    isInWorker: !n
    // For now, this is true - might change in the future.
  };
  return $t = r, $t;
}
var qt, Sr;
function si() {
  if (Sr) return qt;
  Sr = 1;
  var n = oi(), r;
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
  function t(i, c) {
    if (!n.canUseDOM || c && !("addEventListener" in document))
      return !1;
    var o = "on" + i, s = o in document;
    if (!s) {
      var p = document.createElement("div");
      p.setAttribute(o, "return;"), s = typeof p[o] == "function";
    }
    return !s && r && i === "wheel" && (s = document.implementation.hasFeature("Events.wheel", "3.0")), s;
  }
  return qt = t, qt;
}
var Xt, Tr;
function ci() {
  if (Tr) return Xt;
  Tr = 1;
  var n = ii(), r = si(), t = 10, i = 40, c = 800;
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
    return n.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel";
  }, Xt = o, Xt;
}
var jt, Ar;
function li() {
  return Ar || (Ar = 1, jt = ci()), jt;
}
var di = li();
const ui = /* @__PURE__ */ pa(di);
function hi(n, r, t, i, c, o) {
  o === void 0 && (o = 0);
  var s = dt(n, r, o), p = s.width, l = s.height, d = Math.min(p, t), f = Math.min(l, i);
  return d > f * c ? {
    width: f * c,
    height: f
  } : {
    width: d,
    height: d / c
  };
}
function mi(n) {
  return n.width > n.height ? n.width / n.naturalWidth : n.height / n.naturalHeight;
}
function vt(n, r, t, i, c) {
  c === void 0 && (c = 0);
  var o = dt(r.width, r.height, c), s = o.width, p = o.height;
  return {
    x: wr(n.x, s, t.width, i),
    y: wr(n.y, p, t.height, i)
  };
}
function wr(n, r, t, i) {
  var c = r * i / 2 - t / 2;
  return Ft(n, -c, c);
}
function Rr(n, r) {
  return Math.sqrt(Math.pow(n.y - r.y, 2) + Math.pow(n.x - r.x, 2));
}
function Mr(n, r) {
  return Math.atan2(r.y - n.y, r.x - n.x) * 180 / Math.PI;
}
function pi(n, r, t, i, c, o, s) {
  o === void 0 && (o = 0), s === void 0 && (s = !0);
  var p = s ? fi : gi, l = dt(r.width, r.height, o), d = dt(r.naturalWidth, r.naturalHeight, o), f = {
    x: p(100, ((l.width - t.width / c) / 2 - n.x / c) / l.width * 100),
    y: p(100, ((l.height - t.height / c) / 2 - n.y / c) / l.height * 100),
    width: p(100, t.width / l.width * 100 / c),
    height: p(100, t.height / l.height * 100 / c)
  }, g = Math.round(p(d.width, f.width * d.width / 100)), v = Math.round(p(d.height, f.height * d.height / 100)), h = d.width >= d.height * i, N = h ? {
    width: Math.round(v * i),
    height: v
  } : {
    width: g,
    height: Math.round(g / i)
  }, m = ye(ye({}, N), {
    x: Math.round(p(d.width - N.width, f.x * d.width / 100)),
    y: Math.round(p(d.height - N.height, f.y * d.height / 100))
  });
  return {
    croppedAreaPercentages: f,
    croppedAreaPixels: m
  };
}
function fi(n, r) {
  return Math.min(n, Math.max(0, r));
}
function gi(n, r) {
  return r;
}
function vi(n, r, t, i, c, o) {
  var s = dt(r.width, r.height, t), p = Ft(i.width / s.width * (100 / n.width), c, o), l = {
    x: p * s.width / 2 - i.width / 2 - s.width * p * (n.x / 100),
    y: p * s.height / 2 - i.height / 2 - s.height * p * (n.y / 100)
  };
  return {
    crop: l,
    zoom: p
  };
}
function Ei(n, r, t) {
  var i = mi(r);
  return t.height > t.width ? t.height / (n.height * i) : t.width / (n.width * i);
}
function Ni(n, r, t, i, c, o) {
  t === void 0 && (t = 0);
  var s = dt(r.naturalWidth, r.naturalHeight, t), p = Ft(Ei(n, r, i), c, o), l = i.height > i.width ? i.height / n.height : i.width / n.width, d = {
    x: ((s.width - n.width) / 2 - n.x) * l,
    y: ((s.height - n.height) / 2 - n.y) * l
  };
  return {
    crop: d,
    zoom: p
  };
}
function Or(n, r) {
  return {
    x: (r.x + n.x) / 2,
    y: (r.y + n.y) / 2
  };
}
function Ci(n) {
  return n * Math.PI / 180;
}
function dt(n, r, t) {
  var i = Ci(t);
  return {
    width: Math.abs(Math.cos(i) * n) + Math.abs(Math.sin(i) * r),
    height: Math.abs(Math.sin(i) * n) + Math.abs(Math.cos(i) * r)
  };
}
function Ft(n, r, t) {
  return Math.min(Math.max(n, r), t);
}
function Rt() {
  for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r];
  return n.filter(function(t) {
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
  (function(n) {
    ai(r, n);
    function r() {
      var t = n !== null && n.apply(this, arguments) || this;
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
          t.mediaSize = ye(ye({}, m), {
            naturalWidth: g,
            naturalHeight: v
          }), t.props.setMediaSize && t.props.setMediaSize(t.mediaSize);
          var L = t.props.cropSize ? t.props.cropSize : hi(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((p = t.state.cropSize) === null || p === void 0 ? void 0 : p.height) !== L.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== L.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(L), t.setState({
            cropSize: L
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(L), L;
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
        t.currentDoc && (i.preventDefault(), t.currentDoc.addEventListener("mousemove", t.onMouseMove), t.currentDoc.addEventListener("mouseup", t.onDragStopped), t.saveContainerPosition(), t.onDragStart(r.getMousePoint(i)));
      }, t.onMouseMove = function(i) {
        return t.onDrag(r.getMousePoint(i));
      }, t.onScroll = function(i) {
        t.currentDoc && (i.preventDefault(), t.saveContainerPosition());
      }, t.onTouchStart = function(i) {
        t.currentDoc && (t.isTouching = !0, !(t.props.onTouchRequest && !t.props.onTouchRequest(i)) && (t.currentDoc.addEventListener("touchmove", t.onTouchMove, {
          passive: !1
        }), t.currentDoc.addEventListener("touchend", t.onDragStopped), t.saveContainerPosition(), i.touches.length === 2 ? t.onPinchStart(i) : i.touches.length === 1 && t.onDragStart(r.getTouchPoint(i.touches[0]))));
      }, t.onTouchMove = function(i) {
        i.preventDefault(), i.touches.length === 2 ? t.onPinchMove(i) : i.touches.length === 1 && t.onDrag(r.getTouchPoint(i.touches[0]));
      }, t.onGestureStart = function(i) {
        t.currentDoc && (i.preventDefault(), t.currentDoc.addEventListener("gesturechange", t.onGestureChange), t.currentDoc.addEventListener("gestureend", t.onGestureEnd), t.gestureZoomStart = t.props.zoom, t.gestureRotationStart = t.props.rotation);
      }, t.onGestureChange = function(i) {
        if (i.preventDefault(), !t.isTouching) {
          var c = r.getMousePoint(i), o = t.gestureZoomStart - 1 + i.scale;
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
        }, t.dragStartCrop = ye({}, t.props.crop), (o = (c = t.props).onInteractionStart) === null || o === void 0 || o.call(c);
      }, t.onDrag = function(i) {
        var c = i.x, o = i.y;
        t.currentWindow && (t.rafDragTimeout && t.currentWindow.cancelAnimationFrame(t.rafDragTimeout), t.rafDragTimeout = t.currentWindow.requestAnimationFrame(function() {
          if (t.state.cropSize && !(c === void 0 || o === void 0)) {
            var s = c - t.dragStartPosition.x, p = o - t.dragStartPosition.y, l = {
              x: t.dragStartCrop.x + s,
              y: t.dragStartCrop.y + p
            }, d = t.props.restrictPosition ? vt(l, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : l;
            t.props.onCropChange(d);
          }
        }));
      }, t.onDragStopped = function() {
        var i, c;
        t.isTouching = !1, t.cleanEvents(), t.emitCropData(), (c = (i = t.props).onInteractionEnd) === null || c === void 0 || c.call(i);
      }, t.onWheel = function(i) {
        if (t.currentWindow && !(t.props.onWheelRequest && !t.props.onWheelRequest(i))) {
          i.preventDefault();
          var c = r.getMousePoint(i), o = ui(i).pixelY, s = t.props.zoom - o * t.props.zoomSpeed / 200;
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
          var d = Ft(i, t.props.minZoom, t.props.maxZoom);
          if (l) {
            var f = t.getPointOnContainer(c, t.containerPosition), g = t.getPointOnMedia(f), v = {
              x: g.x * d - f.x,
              y: g.y * d - f.y
            }, h = t.props.restrictPosition ? vt(v, t.mediaSize, t.state.cropSize, d, t.props.rotation) : v;
            t.props.onCropChange(h);
          }
          t.props.onZoomChange(d);
        }
      }, t.getCropData = function() {
        if (!t.state.cropSize)
          return null;
        var i = t.props.restrictPosition ? vt(t.props.crop, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : t.props.crop;
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
          var d = t.props.restrictPosition ? vt(o, t.mediaSize, t.state.cropSize, t.props.zoom, t.props.rotation) : o;
          t.previousCropSize = t.state.cropSize, t.props.onCropChange(d), t.emitCropData();
        }
      }, t.onKeyDown = function(i) {
        var c, o, s = t.props, p = s.crop, l = s.onCropChange, d = s.keyboardStep, f = s.zoom, g = s.rotation, v = d;
        if (t.state.cropSize) {
          i.shiftKey && (v *= 0.2);
          var h = ye({}, p);
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
          t.props.restrictPosition && (h = vt(h, t.mediaSize, t.state.cropSize, f, g)), i.repeat || (o = (c = t.props).onInteractionStart) === null || o === void 0 || o.call(c), l(h);
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
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = yi, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var t, i;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (t = this.resizeObserver) === null || t === void 0 || t.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((i = this.styleRef.parentNode) === null || i === void 0 || i.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(t) {
      var i, c, o, s, p, l, d, f, g;
      t.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : t.aspect !== this.props.aspect ? this.computeSizes() : t.objectFit !== this.props.objectFit ? this.computeSizes() : t.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((i = t.cropSize) === null || i === void 0 ? void 0 : i.height) !== ((c = this.props.cropSize) === null || c === void 0 ? void 0 : c.height) || ((o = t.cropSize) === null || o === void 0 ? void 0 : o.width) !== ((s = this.props.cropSize) === null || s === void 0 ? void 0 : s.width) ? this.computeSizes() : (((p = t.crop) === null || p === void 0 ? void 0 : p.x) !== ((l = this.props.crop) === null || l === void 0 ? void 0 : l.x) || ((d = t.crop) === null || d === void 0 ? void 0 : d.y) !== ((f = this.props.crop) === null || f === void 0 ? void 0 : f.y)) && this.emitCropAreaChange(), t.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), t.video !== this.props.video && ((g = this.videoRef.current) === null || g === void 0 || g.load());
      var v = this.getObjectFit();
      v !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: v
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var t = this.props, i = t.cropSize, c = t.aspect;
      return i ? i.width / i.height : c;
    }, r.prototype.getObjectFit = function() {
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
    }, r.prototype.onPinchStart = function(t) {
      var i = r.getTouchPoint(t.touches[0]), c = r.getTouchPoint(t.touches[1]);
      this.lastPinchDistance = Rr(i, c), this.lastPinchRotation = Mr(i, c), this.onDragStart(Or(i, c));
    }, r.prototype.onPinchMove = function(t) {
      var i = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var c = r.getTouchPoint(t.touches[0]), o = r.getTouchPoint(t.touches[1]), s = Or(c, o);
        this.onDrag(s), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var p = Rr(c, o), l = i.props.zoom * (p / i.lastPinchDistance);
          i.setNewZoom(l, s, {
            shouldUpdatePosition: !1
          }), i.lastPinchDistance = p;
          var d = Mr(c, o), f = i.props.rotation + (d - i.lastPinchRotation);
          i.props.onRotationChange && i.props.onRotationChange(f), i.lastPinchRotation = d;
        });
      }
    }, r.prototype.render = function() {
      var t = this, i, c = this.props, o = c.image, s = c.video, p = c.mediaProps, l = c.cropperProps, d = c.transform, f = c.crop, g = f.x, v = f.y, h = c.rotation, N = c.zoom, m = c.cropShape, L = c.showGrid, T = c.roundCropAreaPixels, E = c.style, M = E.containerStyle, O = E.cropAreaStyle, b = E.mediaStyle, A = c.classes, P = A.containerClassName, F = A.cropAreaClassName, z = A.mediaClassName, D = (i = this.state.mediaObjectFit) !== null && i !== void 0 ? i : this.getObjectFit();
      return Ge.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(X) {
          return t.containerRef = X;
        },
        "data-testid": "container",
        style: M,
        className: Rt("reactEasyCrop_Container", P)
      }, o ? Ge.createElement("img", ye({
        alt: "",
        className: Rt("reactEasyCrop_Image", D === "contain" && "reactEasyCrop_Contain", D === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", D === "vertical-cover" && "reactEasyCrop_Cover_Vertical", z)
      }, p, {
        src: o,
        ref: this.imageRef,
        style: ye(ye({}, b), {
          transform: d || "translate(".concat(g, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(N, ")")
        }),
        onLoad: this.onMediaLoad
      })) : s && Ge.createElement("video", ye({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: Rt("reactEasyCrop_Video", D === "contain" && "reactEasyCrop_Contain", D === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", D === "vertical-cover" && "reactEasyCrop_Cover_Vertical", z)
      }, p, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: ye(ye({}, b), {
          transform: d || "translate(".concat(g, "px, ").concat(v, "px) rotate(").concat(h, "deg) scale(").concat(N, ")")
        }),
        controls: !1
      }), (Array.isArray(s) ? s : [{
        src: s
      }]).map(function(Z) {
        return Ge.createElement("source", ye({
          key: Z.src
        }, Z));
      })), this.state.cropSize && Ge.createElement("div", ye({
        ref: this.cropperRef,
        style: ye(ye({}, O), {
          width: T ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: T ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Rt("reactEasyCrop_CropArea", m === "round" && "reactEasyCrop_CropAreaRound", L && "reactEasyCrop_CropAreaGrid", F)
      }, l)));
    }, r.defaultProps = {
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
    }, r.getMousePoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, r.getTouchPoint = function(t) {
      return {
        x: Number(t.clientX),
        y: Number(t.clientY)
      };
    }, r;
  })(Ge.Component)
);
function Si() {
  const [n, r] = _(""), t = te(null);
  t.current || (t.current = new Ln());
  const i = t.current, c = S((s) => {
    const p = i.setPreview(s);
    r(p);
  }, [i]), o = S(() => {
    i.clearPreview(), r("");
  }, [i]);
  return ee(() => () => {
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
function Ti(n = {}) {
  const { loop: r = 1, autoPlay: t = !0 } = n, i = te(null), c = te(null), o = te(!1), s = S(() => {
    if (c.current) {
      try {
        c.current.stopAnimation(), c.current.clear();
      } catch (g) {
        console.warn("SVGA cleanup error:", g);
      }
      c.current = null, o.current = !1;
    }
  }, []), p = S(async (g) => {
    if (!i.current) {
      console.warn("SVGA container not mounted");
      return;
    }
    s();
    const v = i.current, h = new cr.Player(v);
    c.current = h;
    const N = Hr();
    if (!N) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((m, L) => {
        N.load(
          g,
          (T) => {
            try {
              h.loops = r, h.setVideoItem(T), t && (h.startAnimation(), o.current = !0), m();
            } catch (E) {
              L(E);
            }
          },
          (T) => {
            L(T);
          }
        );
      });
    } catch (m) {
      throw console.error("SVGA load error:", m), s(), m;
    }
  }, [r, t, s]), l = S(async (g) => {
    const v = URL.createObjectURL(g);
    try {
      await p(v);
    } finally {
      URL.revokeObjectURL(v);
    }
  }, [p]), d = S(() => {
    if (c.current)
      try {
        c.current.stopAnimation(), o.current = !1;
      } catch (g) {
        console.warn("SVGA stop error:", g);
      }
  }, []), f = S(() => {
    if (c.current)
      try {
        c.current.startAnimation(), o.current = !0;
      } catch (g) {
        console.warn("SVGA start error:", g);
      }
  }, []);
  return ee(() => s, [s]), {
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
function Ai() {
  const { t: n } = ve();
  return { t: Ka(n) };
}
function ur(n) {
  const { action: r, onSuccess: t, onError: i, successMessage: c, errorMessage: o } = n, [s, p] = _(!1), l = te(r);
  l.current = r;
  const d = S(async (...g) => {
    if (s) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    p(!0);
    try {
      const v = await l.current(...g);
      return c && $.success(c), t == null || t(v), v;
    } catch (v) {
      const h = v instanceof Error ? v : new Error(String(v)), N = o ? `${o}: ${h.message}` : h.message;
      $.error(N), i == null || i(h);
      return;
    } finally {
      p(!1);
    }
  }, [s, c, o, t, i]), f = S(() => {
    p(!1);
  }, []);
  return { loading: s, execute: d, reset: f };
}
function Ve(n) {
  const { confirm: r, onSuccess: t, ...i } = n, [c, o] = _(null), s = S((h) => {
    o(null), t == null || t(h);
  }, [t]), { loading: p, execute: l, reset: d } = ur({
    ...i,
    onSuccess: s
  }), f = S(() => {
    o({
      visible: !0,
      title: r.title,
      content: r.content,
      confirmText: r.confirmText,
      danger: r.danger
    });
  }, [r]), g = S(() => {
    o(null);
  }, []), v = S(async () => {
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
Sn(cr.Parser);
const Pt = an(function({
  value: r = "",
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
  deferUpload: L = !1,
  onFileReady: T,
  skipSvgaValidation: E = !1,
  onUrlErrorChange: M
}, O) {
  const { t: b } = ve(), A = p || b(a.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), P = te(null), [F, z] = _(!1), [D, Z] = _(0), [X, q] = _(!1), [w, I] = _(""), [C, x] = _(!g), [Y, y] = _(r), [W, G] = _(!1), [R, U] = _(""), B = te(null);
  B.current || (B.current = new Tn({
    setValidating: G,
    setError: U,
    onConfirm: t
  }, E)), B.current.updateCallbacks({
    setValidating: G,
    setError: U,
    onConfirm: t
  }), B.current.updateSkipSvgaValidation(E);
  const ne = te(null), { previewUrl: oe, setPreview: j } = Si(), [me, Se] = _(!1), [ae, J] = _(!1), {
    containerRef: K,
    playUrl: ie,
    stopAnimation: Ce
  } = Ti({ loop: 1, autoPlay: !0 });
  on(O, () => ({
    get isUrlInputMode() {
      return C;
    },
    get isValidating() {
      return W;
    },
    get urlValidationError() {
      return R;
    },
    /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
    get hasUrlError() {
      return C ? !!(R || N && Y.trim() && V(Y.trim()) > N) : !1;
    },
    get urlInputValue() {
      return Y;
    },
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => {
      x(!0);
    },
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (Q) => {
      U(Q);
    },
    validateImageUrl: async (Q, se) => {
      G(!0), U("");
      try {
        return await An(Q, se, E), !0;
      } catch (Ee) {
        const ze = Ee instanceof Error ? Ee : new Error(String(Ee));
        throw U(ze.message || b("Image URL invalid")), ze;
      } finally {
        G(!1);
      }
    },
    reset: () => {
      B.current.reset(), ne.current = null, j(null), Se(!1), J(!1), y(r || ""), I(""), U(""), z(!1), Z(0), q(!1), g && x(!!r), T == null || T(null);
    },
    ensureUrlValidated: async () => C ? await B.current.ensureUrlValidatedWithErrorCheck(
      Y,
      r || "",
      !!R,
      N
    ) : null,
    uploadPendingFile: async () => {
      const Q = ne.current;
      if (!Q) return null;
      z(!0), Z(0), q(!1);
      try {
        const se = await _r(Q, i, Z);
        return ne.current = null, I(se.provider || ""), q(!1), se.url;
      } catch (se) {
        throw q(!0), se;
      } finally {
        z(!1), Z(0);
      }
    }
  }), [i, C, W, R, Y, oe, r, N, t, b]), ee(() => {
    y(r), r && g && x(!0), L && (ne.current = null, j(null), J(!1), T == null || T(null));
  }, [r]), ee(() => {
    g && r ? x(!0) : g && x(!1);
  }, [g]), ee(() => {
    if (!M) return;
    let Q = !1;
    (C || !g) && (R || N && Y.trim() && V(Y.trim()) > N) && (Q = !0), M(Q);
  }, [C, R, Y, N, g, M]), ee(() => {
    r && oe && j(null);
  }, [r, oe, j]), ee(() => () => {
    var Q;
    (Q = B.current) == null || Q.dispose();
  }, []), ee(() => {
    !ae || !oe || ie(oe).catch((Q) => {
      console.error("[ImageUpload] SVGA preview load error:", Q);
    });
  }, [ae, oe, ie]);
  const Ie = te(null), pe = te(null);
  ee(() => {
    if (!r || !fr(r) || !(C || !g) || !Ie.current) {
      if (pe.current) {
        try {
          pe.current.stopAnimation(), pe.current.clear();
        } catch {
        }
        pe.current = null;
      }
      return;
    }
    if (pe.current) {
      try {
        pe.current.stopAnimation(), pe.current.clear();
      } catch {
      }
      pe.current = null;
    }
    const Q = Ie.current, se = new cr.Player(Q);
    se.loops = 0, se.setContentMode("AspectFit"), pe.current = se;
    const Ee = Hr();
    if (Ee)
      return Ee.load(
        r,
        (ze) => {
          se.setVideoItem(ze), se.startAnimation();
        },
        (ze) => {
          console.error("[ImageUpload] SVGA URL preview load error:", ze);
        }
      ), () => {
        try {
          se.stopAnimation(), se.clear();
        } catch {
        }
        pe.current = null;
      };
  }, [r, C, g]);
  const [Te, Le] = _(!1), [de, Qe] = _(""), [Vt, mt] = _({ x: 0, y: 0 }), [Wt, _t] = _(1), [bt, et] = _(null), [hr, $e] = _(null), [It, Lt] = _(!1), St = S((Q, se) => {
    et(se);
  }, []), [Tt, pt] = _(!1), We = te(null);
  ee(() => () => {
    We.current && clearTimeout(We.current);
  }, []);
  const k = S(async (Q) => {
    const se = wn(Q, v);
    if (!se.valid) {
      $.error(se.errorHint);
      return;
    }
    if (!Rn(Q, s)) {
      $.error(b(a.FILE_SIZE_EXCEEDS_MB, { max: s }));
      return;
    }
    try {
      await Mn(Q, v, E);
    } catch (Ee) {
      const ze = Ee instanceof Error ? Ee : new Error(String(Ee));
      $.error(ze.message || b("File load failed"));
      return;
    }
    if (c) {
      Qe(""), $e(Q), mt({ x: 0, y: 0 }), _t(1), et(null), Lt(!0), pt(!1), Le(!0);
      try {
        const Ee = await On(Q);
        Qe(Ee);
      } catch {
        $.error(b("Image load failed")), Le(!1);
      } finally {
        Lt(!1), We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          pt(!0);
        }, 350);
      }
    } else
      await re(Q);
  }, [v, s, b, E, c, L]), re = async (Q) => {
    if (L) {
      ne.current = Q, j(Q);
      const se = Q.type.startsWith("video/"), Ee = Dn(Q);
      Se(se), J(Ee), T == null || T(Q);
      return;
    }
    z(!0), Z(0);
    try {
      const se = await _r(Q, i, Z);
      t(se.url), I(se.provider || ""), $.success(b("Upload Success"));
    } catch (se) {
      const Ee = se instanceof Error ? se : new Error(String(se));
      $.error(b(a.UPLOAD_FAILED_WITH_ERROR, { error: Ee.message || b(a.NETWORK_ERROR) }));
    } finally {
      z(!1), Z(0);
    }
  }, ce = async () => {
    if (!(!bt || !de))
      try {
        const Q = await Pn(de, bt);
        Le(!1), await re(Q);
      } catch {
        $.error(b("Crop failed"));
      }
  }, Ae = Un, Fe = S(xn((Q) => {
    k(Q);
  }), [k]), qe = () => {
    B.current.handleUrlFocus();
  }, Xe = () => {
    B.current.handleUrlBlur(
      Y,
      N
    );
  }, Qr = () => {
    B.current.handleUrlEnter(
      Y,
      N
    );
  }, en = (Q) => {
    Q == null || Q.stopPropagation(), B.current.cancelValidation(), G(!1), U(""), t(""), y(""), I(""), z(!1), Z(0), q(!1), L && (ne.current = null, j(null), Se(!1), J(!1), T == null || T(null));
  };
  return /* @__PURE__ */ u("div", { className: `image-upload-container ${m}`, children: [
    g && l && /* @__PURE__ */ u("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ e(
        H,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${C ? "" : "active"}`,
          onClick: () => {
            B.current.cancelValidation(), G(!1), U(""), x(!1);
          },
          icon: /* @__PURE__ */ e(pr, { size: "12" }),
          children: b("Upload Image")
        }
      ),
      /* @__PURE__ */ e(
        H,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${C ? "active" : ""}`,
          onClick: () => {
            B.current.cancelValidation(), G(!1), U(""), x(!0);
          },
          children: b(a.ENTER_URL)
        }
      )
    ] }),
    (C || !g) && /* @__PURE__ */ e("div", { className: "image-upload-url-input", children: /* @__PURE__ */ e(
      fe,
      {
        value: Y,
        onChange: (Q) => {
          y(String(Q)), U(""), B.current.cancelValidation(), G(!1);
        },
        onFocus: qe,
        onBlur: Xe,
        onEnter: Qr,
        placeholder: b(a.ENTER_IMAGE_URL),
        status: R ? "error" : void 0,
        suffix: N ? W ? /* @__PURE__ */ e("span", { className: "input-suffix-validating", children: b("Validating") }) : /* @__PURE__ */ u("span", { className: `input-suffix-count${V(Y) > N ? " byte-overflow" : ""}`, children: [
          V(Y),
          "/",
          N
        ] }) : void 0
      }
    ) }),
    R && (C || !g) && /* @__PURE__ */ e("div", { className: "image-upload-url-error", children: R }),
    g && !C && /* @__PURE__ */ u(he, { children: [
      oe ? /* @__PURE__ */ u(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: d || "100%",
            height: f || 160
          },
          children: [
            F ? (
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
                /* @__PURE__ */ e("span", { className: "upload-status-text", children: b("Uploading") })
              ] })
            ) : /* @__PURE__ */ e(he, { children: ae ? /* @__PURE__ */ e("div", { ref: K, className: "svga-preview-container" }) : me ? /* @__PURE__ */ e("video", { src: oe, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ e("img", { src: oe, alt: "preview" }) }),
            !F && w && /* @__PURE__ */ e("span", { className: "image-upload-provider-badge", children: w.toUpperCase() }),
            !F && X ? /* @__PURE__ */ e("span", { className: "image-upload-provider-badge upload-failed-badge", children: b("Upload Failed") }) : !F && !w ? /* @__PURE__ */ e("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: b("Pending Upload") }) : null,
            !F && /* @__PURE__ */ u("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => {
                    var Q;
                    return (Q = P.current) == null ? void 0 : Q.click();
                  },
                  title: b("Re-upload"),
                  children: /* @__PURE__ */ e(pr, {})
                }
              ),
              /* @__PURE__ */ e(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: en,
                  title: b(a.DELETE),
                  children: /* @__PURE__ */ e(nr, {})
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
            className: `image-upload-dropzone ${F ? "uploading" : ""}`,
            onClick: () => {
              var Q;
              return !F && ((Q = P.current) == null ? void 0 : Q.click());
            },
            onDragOver: Ae,
            onDrop: Fe,
            style: { height: f || 120 },
            children: F ? /* @__PURE__ */ u("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ e("div", { className: "progress-bar", children: /* @__PURE__ */ e("div", { className: "progress-fill", style: { width: `${D}%` } }) }),
              /* @__PURE__ */ u("span", { className: "progress-text", children: [
                D,
                "%"
              ] })
            ] }) : /* @__PURE__ */ u(he, { children: [
              /* @__PURE__ */ e(sn, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ e("span", { className: "upload-hint", children: A }),
              /* @__PURE__ */ e("span", { className: "upload-sub-hint", children: h || b(a.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: s }) })
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
            const se = (Ee = Q.target.files) == null ? void 0 : Ee[0];
            se && k(se), Q.target.value = "";
          }
        }
      )
    ] }),
    r && (C || !g) && /* @__PURE__ */ e(
      "div",
      {
        className: "image-upload-preview url-preview",
        style: {
          width: d || "100%",
          height: f || 120,
          marginTop: 8
        },
        children: fr(r) ? /* @__PURE__ */ e("div", { ref: Ie, className: "svga-preview-container" }) : kn(r) ? /* @__PURE__ */ e("video", { src: r, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ e("img", { src: r, alt: "preview", onError: (Q) => {
          Q.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: Te,
        header: b("Crop Image"),
        onClose: () => Le(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => Le(!1), children: b(a.CANCEL) }),
          /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: ce, disabled: It || !de, icon: /* @__PURE__ */ e(cn, { size: "14" }), children: b(a.CONFIRM_CROP) })
        ] }),
        children: /* @__PURE__ */ e("div", { className: "image-crop-area", children: It || !Tt ? /* @__PURE__ */ u("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ e("div", { className: "loading-spinner" }),
          /* @__PURE__ */ e("span", { children: b("Image Loading") })
        ] }) : de ? /* @__PURE__ */ e(
          Li,
          {
            image: de,
            crop: Vt,
            zoom: Wt,
            aspect: o,
            onCropChange: mt,
            onZoomChange: _t,
            onCropComplete: St
          }
        ) : null })
      }
    )
  ] });
});
function ue({
  label: n,
  labelWidth: r = 100,
  requiredMark: t = !1,
  help: i,
  children: c,
  style: o,
  className: s
}) {
  return /* @__PURE__ */ u("div", { className: `form-field${s ? ` ${s}` : ""}`, style: o, children: [
    n !== void 0 && /* @__PURE__ */ e("div", { className: "form-field__label", style: { width: r, minWidth: r }, children: /* @__PURE__ */ u("label", { children: [
      t && /* @__PURE__ */ e("span", { className: "form-field__required", children: "*" }),
      n
    ] }) }),
    /* @__PURE__ */ u("div", { className: "form-field__content", children: [
      /* @__PURE__ */ e("div", { className: "form-field__controls", children: c }),
      i && /* @__PURE__ */ e("div", { className: "form-field__help", children: i })
    ] })
  ] });
}
function ut({ children: n, labelWidth: r, className: t, style: i }) {
  return /* @__PURE__ */ e("div", { className: `form-layout${t ? ` ${t}` : ""}`, style: i, children: r ? st.Children.map(n, (c) => st.isValidElement(c) && c.type === ue ? st.cloneElement(c, { labelWidth: r }) : c) : n });
}
function wi({ visible: n, onClose: r, onSuccess: t, uploadEnabled: i = !1, extraFieldsSlot: c, onCreate: o }) {
  var Se, ae, J;
  const { t: s } = ve(), p = Fn.map((K) => ({
    value: K.value,
    label: s(K.labelKey)
  })), [l, d] = _(gr()), [f, g] = _([]), [v, h] = _(!1), [N, m] = _(!1), [L, T] = _(!1), [E, M] = _(""), [O, b] = _(""), [A, P] = _(!1), [F, z] = _(""), [D, Z] = _(""), [X, q] = _(null), [w, I] = _(""), C = te(null), [x, Y] = _(!1), y = (K, ie) => {
    K === "success" ? $.success(ie) : $.error(ie);
  }, W = async (K, ie) => {
    try {
      await zn(K), y("success", s(a.COPY_LABEL_COPIED, { label: ie }));
    } catch (Ce) {
      const Ie = Ce instanceof Error ? Ce : new Error(String(Ce));
      y("error", s(a.COPY_FAILED_WITH_ERROR, { error: Ie.message || s(a.NETWORK_ERROR) }));
    }
  }, G = () => {
    g([...f, { key: "", value: "" }]);
  }, R = (K, ie, Ce) => {
    const Ie = [...f];
    Ie[K][ie] = Ce, g(Ie);
  }, U = (K) => {
    g(f.filter((ie, Ce) => Ce !== K));
  }, B = () => {
    var K;
    d(gr()), g([]), h(!1), T(!1), M(""), b(""), P(!1), z(""), Z(""), q(null), I(""), Y(!1), (K = C.current) == null || K.reset();
  }, ne = () => {
    B(), r();
  }, oe = async () => {
    if (!l.anchorId.trim()) {
      y("error", s(a.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const K = V(l.anchorId);
    if (K > je) {
      y("error", s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES_CURRENT, { max: je, current: K }));
      return;
    }
    const ie = V(l.liveName);
    if (ie > ke) {
      y("error", s(a.TITLE_CANNOT_EXCEED_100_BYTES_CURRENT, { current: ie }));
      return;
    }
    if (f.some(xt)) {
      y("error", s(a.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    m(!0), M(""), z(""), Z("");
    let Ce = "", Ie = l.anchorId;
    try {
      let pe = "";
      try {
        pe = await Yr({
          handle: C.current,
          hasPendingFile: x,
          fallbackUrl: l.coverUrl,
          label: s(a.COVER_IMAGE)
        });
      } catch (de) {
        y("error", de instanceof sr ? de.message : s(a.COVER_PROCESSING_FAILED)), m(!1);
        return;
      }
      const Te = Bn({
        formData: l,
        coverUrl: pe,
        customInfos: f,
        useObsStreaming: A
      });
      Ce = Te.liveId, Ie = Te.anchorId, await o(Te), q(null), I("");
      let Le = !A;
      if (A) {
        const de = await Ua({
          liveId: Ce,
          anchorId: Ie,
          onStatusChange: z,
          messages: {
            getStreamInfoFailed: s(a.GET_STREAM_INFO_FAILED),
            importAccountFailed: s(a.IMPORT_ACCOUNT_FAILED),
            addRobotFailed: s(a.ADD_ROBOT_FAILED),
            pickSeatFailed: s(a.PICK_SEAT_FAILED),
            setupFailed: s(a.OBS_SETUP_FAILED)
          }
        });
        q(de.streamInfo), I(de.streamInfoError), Z(de.setupError), Le = de.configuredSuccessfully;
      }
      T(!0), y("success", s(A && Le ? a.LIVE_CREATED_SUCCESSFULLY_OBS : a.LIVE_CREATED_SUCCESSFULLY));
    } catch (pe) {
      const Te = pe instanceof Error ? pe : new Error(String(pe));
      y("error", s(a.REQUEST_FAILED) + `: ${Te.message || s(a.NETWORK_ERROR)}`);
    } finally {
      m(!1);
    }
  }, j = () => {
    B(), t();
  }, me = A ? F === "" || F === "creating" || F === "seating" ? {
    text: s(F === "creating" ? a.LOADING : F === "seating" ? a.LOADING : a.LOADING),
    error: !1
  } : F === "error" ? {
    text: s(a.OBS_CONFIG_FAILED_WITH_ERROR, { error: D }),
    error: !0
  } : X ? {
    text: s(a.OBS_READY_COPY_INFO),
    error: !1
  } : w ? {
    text: s(a.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: w }),
    error: !0
  } : {
    text: s(a.OBS_READY),
    error: !1
  } : X ? {
    text: s(a.OBS_READY_COPY_INFO),
    error: !1
  } : w ? {
    text: s(a.OBS_STREAM_INFO_FAILED_WITH_ERROR, { error: w }),
    error: !0
  } : {
    text: "",
    error: !1
  };
  return /* @__PURE__ */ e(
    ge,
    {
      visible: n,
      header: s(L ? a.CREATE_SUCCESS : a.CREATE_LIVE),
      onClose: ne,
      width: be.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: L ? /* @__PURE__ */ e(
        H,
        {
          shape: "round",
          theme: "primary",
          onClick: j,
          disabled: A && (F === "" || F === "creating" || F === "seating"),
          children: s(A && F !== "ready" && F !== "error" ? a.LOADING : a.COMPLETE)
        }
      ) : /* @__PURE__ */ u(he, { children: [
        /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: ne, children: s(a.CANCEL) }),
        /* @__PURE__ */ e(
          H,
          {
            shape: "round",
            theme: "primary",
            onClick: oe,
            loading: N,
            disabled: N || !l.anchorId.trim() || ((Se = C.current) == null ? void 0 : Se.isValidating) || ((ae = C.current) == null ? void 0 : ae.hasUrlError),
            children: s(N ? a.CREATING : a.CREATE)
          }
        )
      ] }),
      children: L ? (
        /* 创建成功提示 */
        /* @__PURE__ */ u("div", { className: "create-success-content", children: [
          /* @__PURE__ */ u("div", { className: "create-success-summary", children: [
            /* @__PURE__ */ e("div", { className: "create-success-icon", children: F === "error" ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#FFEBEE" }),
              /* @__PURE__ */ e("path", { d: "M16 16L32 32M32 16L16 32", stroke: "#F44336", strokeWidth: "3", strokeLinecap: "round" })
            ] }) : A && (F === "" || F === "creating" || F === "seating") ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E3F2FD" }),
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "8", stroke: "#2196F3", strokeWidth: "3", fill: "none" }),
              /* @__PURE__ */ e("path", { d: "M24 8V16M24 32V40M8 24H16M32 24H40", stroke: "#2196F3", strokeWidth: "2", strokeLinecap: "round" })
            ] }) : /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
              /* @__PURE__ */ e("circle", { cx: "24", cy: "24", r: "24", fill: "#E8F5E9" }),
              /* @__PURE__ */ e("path", { d: "M14 24L21 31L34 18", stroke: "#07C160", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ e("h3", { children: s(a.LIVE_CREATED_SUCCESSFULLY) }),
            me.text && /* @__PURE__ */ e("p", { className: `create-success-description${me.error ? " is-error" : ""}`, children: me.text })
          ] }),
          X && /* @__PURE__ */ u("div", { className: "create-success-section", children: [
            /* @__PURE__ */ e("div", { className: "create-success-section-title", children: s(a.STREAM_INFO) }),
            /* @__PURE__ */ u("div", { className: "stream-info-items", children: [
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: s(a.SERVER_URL) }),
                  /* @__PURE__ */ e(H, { variant: "text", size: "small", icon: /* @__PURE__ */ e(He, { size: "14" }), onClick: () => W(X.serverUrl, s(a.SERVER_URL)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: X.serverUrl })
              ] }),
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: s(a.STREAM_KEY) }),
                  /* @__PURE__ */ e(H, { variant: "text", size: "small", icon: /* @__PURE__ */ e(He, { size: 14 }), onClick: () => W(X.streamKey, s(a.STREAM_KEY)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: X.streamKey })
              ] })
            ] })
          ] })
        ] })
      ) : (
        /* 创建表单 */
        /* @__PURE__ */ u(ut, { className: "create-live-form", labelWidth: lt(100), children: [
          /* @__PURE__ */ e(ue, { label: s(a.LIVE_HOST), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: l.anchorId,
                onChange: (K) => d((ie) => ({ ...ie, anchorId: String(K) })),
                placeholder: s(a.ENTER_ANCHOR_ID),
                status: V(l.anchorId) > je ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(l.anchorId) > je ? " byte-overflow" : ""}`, children: [
                  V(l.anchorId),
                  "/",
                  je
                ] })
              }
            ),
            V(l.anchorId) > je && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES, { max: je }) })
          ] }) }),
          /* @__PURE__ */ e(ue, { label: s(a.LIVE_TITLE), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: l.liveName,
                onChange: (K) => d((ie) => ({ ...ie, liveName: String(K) })),
                placeholder: s(a.ENTER_LIVE_TITLE),
                status: V(l.liveName) > ke ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(l.liveName) > ke ? " byte-overflow" : ""}`, children: [
                  V(l.liveName),
                  "/",
                  ke
                ] })
              }
            ),
            V(l.liveName) > ke && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: s(a.TITLE_CANNOT_EXCEED_100_BYTES) })
          ] }) }),
          /* @__PURE__ */ e(ue, { label: s(a.COVER_IMAGE), children: /* @__PURE__ */ e(
            Pt,
            {
              ref: C,
              value: l.coverUrl,
              onChange: (K) => {
                d((ie) => ({ ...ie, coverUrl: K })), Y(!1);
              },
              type: "cover",
              uploadEnabled: i,
              cropEnabled: !0,
              aspectRatio: Gn(l.seatTemplate),
              placeholder: s(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: i,
              onFileReady: (K) => Y(!!K)
            }
          ) }),
          /* @__PURE__ */ e(ue, { label: s(a.LAYOUT_TEMPLATE), requiredMark: !0, help: s(((J = Vn(l.seatTemplate)) == null ? void 0 : J.descKey) || ""), children: /* @__PURE__ */ e(
            or,
            {
              options: p,
              value: l.seatTemplate,
              onChange: (K) => d((ie) => ({ ...ie, seatTemplate: K })),
              style: { width: "100%" }
            }
          ) }),
          Wn(l.seatTemplate) && /* @__PURE__ */ e(ue, { label: s(a.MAX_SEATS), help: s(a.MAX_SEATS_HELP), children: /* @__PURE__ */ e(
            Jt,
            {
              value: l.maxSeatCount,
              onChange: (K) => d((ie) => ({ ...ie, maxSeatCount: Number(K) || 1 })),
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
          /* @__PURE__ */ e(ue, { label: s(a.STREAMING_METHOD), help: s(a.OBS_STREAMING_INFO_WILL_BE_DISPLAYED), children: /* @__PURE__ */ e(
            gn,
            {
              checked: A,
              onChange: (K) => P(K),
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
                  v ? /* @__PURE__ */ e(Fr, { size: "16" }) : /* @__PURE__ */ e(ar, { size: "16" }),
                  /* @__PURE__ */ e("span", { children: s(a.CUSTOM_INFORMATION) }),
                  f.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: f.length })
                ]
              }
            ),
            v && /* @__PURE__ */ u("div", { className: "custom-info-container", children: [
              f.map((K, ie) => {
                const Ce = V(K.key), Ie = V(K.value), pe = Ce > Ue.maxKeyBytes, Te = Ie > Ue.maxValueBytes, Le = xt(K);
                return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                    fe,
                    {
                      value: K.key,
                      onChange: (de) => R(ie, "key", String(de)),
                      placeholder: s(a.ENTER_KEY),
                      status: pe || Le ? "error" : "default",
                      tips: pe ? s(a.KEY_EXCEEDS_BYTES, { key: K.key, max: Ue.maxKeyBytes }) : Le ? s(a.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                    fe,
                    {
                      value: K.value,
                      onChange: (de) => R(ie, "value", String(de)),
                      placeholder: s(a.ENTER_VALUE),
                      status: Te ? "error" : "default",
                      tips: Te ? s(a.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e(
                    H,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => U(ie),
                      title: s(a.DELETE),
                      icon: /* @__PURE__ */ e(nr, { size: "14" })
                    }
                  )
                ] }, ie);
              }),
              f.length < Ue.maxCount && /* @__PURE__ */ e(H, { variant: "text", className: "add-custom-info-btn", onClick: G, icon: /* @__PURE__ */ e(ir, { size: "14" }), theme: "primary", children: s(a.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
function Ri({ visible: n, live: r, onClose: t, onSuccess: i, uploadEnabled: c = !1, extraFieldsSlot: o, onUpdate: s, onFetchDetail: p }) {
  var y, W;
  const { t: l } = ve(), [d, f] = _(vr()), [g, v] = _([]), [h, N] = _(!1), m = te([]), [L, T] = _(Er), [E, M] = _(!1), [O, b] = _(""), [A, P] = _(""), { loading: F, execute: z } = ur({
    action: async (G) => {
      const R = (r == null ? void 0 : r.id) || (r == null ? void 0 : r.liveId) || "";
      return s(R, G);
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
  }), D = te(null), [Z, X] = _(!1);
  ee(() => {
    r != null && r.coverUrl ? Hn(r.coverUrl).then(T) : T(Er);
  }, [r == null ? void 0 : r.coverUrl]), ee(() => {
    if (r && n) {
      f({
        liveName: r.liveName || "",
        coverUrl: r.coverUrl || ""
      });
      const G = r.id || r.liveId;
      M(!0), p(G).then((R) => {
        const U = R == null ? void 0 : R.customInfo;
        if (U && typeof U == "object") {
          const B = Object.entries(U).map(([ne, oe]) => ({
            key: ne,
            value: String(oe)
          }));
          v(B), N(B.length > 0), m.current = B.map((ne) => ne.key);
        } else
          v([]), N(!1), m.current = [];
      }).catch(() => {
        if (r.customInfo && typeof r.customInfo == "object") {
          const R = Object.entries(r.customInfo).map(([U, B]) => ({
            key: U,
            value: String(B)
          }));
          v(R), N(R.length > 0), m.current = R.map((U) => U.key);
        } else
          v([]), N(!1), m.current = [];
      }).finally(() => M(!1));
    }
  }, [r == null ? void 0 : r.id, n]);
  const q = () => {
    if (g.length >= Ue.maxCount) {
      C("error", l("Custom info max count", { max: Ue.maxCount }));
      return;
    }
    v([...g, { key: "", value: "" }]);
  }, w = (G, R, U) => {
    const B = [...g];
    B[G][R] = U, v(B);
  }, I = (G) => {
    v(g.filter((R, U) => U !== G));
  }, C = (G, R) => {
    $.error(R);
  }, x = () => {
    var G;
    b(""), P(""), v([]), N(!1), m.current = [], X(!1), (G = D.current) == null || G.reset(), f(vr()), t();
  }, Y = async () => {
    if (!r) return;
    if (!d.liveName.trim()) {
      C("error", l(a.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const G = V(d.liveName);
    if (G > ke) {
      C("error", l("Title cannot exceed 100 bytes current", { current: G }));
      return;
    }
    if (g.some(xt)) {
      C("error", l("Custom info key required"));
      return;
    }
    try {
      let R = "";
      try {
        R = await Yr({
          handle: D.current,
          hasPendingFile: Z,
          fallbackUrl: d.coverUrl,
          label: l(a.COVER_IMAGE)
        });
      } catch (oe) {
        C("error", oe instanceof sr ? oe.message : l("Cover processing failed"));
        return;
      }
      const U = Yn(g);
      if (U) {
        U.type === "key-too-long" ? C("error", l("Key {key} exceeds {max} bytes", { key: U.key, max: U.max })) : U.type === "value-too-long" ? C("error", l("Key {key} value exceeds 2KB", { key: U.key })) : U.type === "max-count" ? C("error", l("Custom info max count", { max: U.max })) : C("error", l("Total value size exceeds 16KB"));
        return;
      }
      const B = Kn(g), ne = $n(m.current, B);
      await z({
        liveId: r.id || r.liveId,
        liveName: d.liveName.trim(),
        coverUrl: R || void 0,
        customInfo: Object.keys(B).length > 0 ? B : void 0,
        deleteKeys: ne.length > 0 ? ne : void 0
      });
    } catch (R) {
      console.error("[EditLiveModal] Update failed:", R);
    }
  };
  return !n || !r ? null : /* @__PURE__ */ e(
    ge,
    {
      destroyOnClose: !0,
      visible: n,
      header: l(a.EDIT_LIVE),
      onClose: x,
      width: be.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ u(he, { children: [
        /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: x, children: l(a.CANCEL) }),
        /* @__PURE__ */ e(
          H,
          {
            shape: "round",
            theme: "primary",
            onClick: Y,
            loading: F,
            disabled: F || !d.liveName.trim() || ((y = D.current) == null ? void 0 : y.isValidating) || ((W = D.current) == null ? void 0 : W.hasUrlError),
            children: l(F ? "Saving" : "Save")
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { className: "edit-live-form", labelWidth: lt(100), children: [
        /* @__PURE__ */ e(ue, { label: l(a.LIVE_ID), children: /* @__PURE__ */ e(
          fe,
          {
            value: r.liveId || r.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ e(ue, { label: l(a.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: d.liveName,
              onChange: (G) => f((R) => ({ ...R, liveName: String(G) })),
              placeholder: l(a.ENTER_LIVE_TITLE),
              status: V(d.liveName) > ke ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(d.liveName) > ke ? " byte-overflow" : ""}`, children: [
                V(d.liveName),
                "/",
                ke
              ] })
            }
          ),
          V(d.liveName) > ke && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: l(a.TITLE_CANNOT_EXCEED_100_BYTES) })
        ] }) }),
        /* @__PURE__ */ e(ue, { label: l(a.COVER_IMAGE), children: /* @__PURE__ */ e(
          Pt,
          {
            ref: D,
            value: d.coverUrl,
            onChange: (G) => {
              f((R) => ({ ...R, coverUrl: G })), X(!1);
            },
            type: "cover",
            uploadEnabled: c,
            cropEnabled: !0,
            aspectRatio: L,
            placeholder: l(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: c,
            onFileReady: (G) => X(!!G)
          }
        ) }),
        /* @__PURE__ */ e(De, { slot: o, props: { mode: "edit", live: r, formData: { ...d }, customInfos: [...g] } }),
        /* @__PURE__ */ u("div", { className: "custom-info-section", children: [
          /* @__PURE__ */ u(
            "div",
            {
              className: "custom-info-toggle",
              onClick: () => N(!h),
              children: [
                h ? /* @__PURE__ */ e(Fr, { size: "16" }) : /* @__PURE__ */ e(ar, { size: "16" }),
                /* @__PURE__ */ e("span", { children: l(a.CUSTOM_INFORMATION) }),
                g.length > 0 && /* @__PURE__ */ e("span", { className: "custom-info-count", children: g.length })
              ]
            }
          ),
          h && /* @__PURE__ */ u("div", { className: "custom-info-container", children: [
            g.map((G, R) => {
              const U = V(G.key), B = V(G.value), ne = U > Ue.maxKeyBytes, oe = B > Ue.maxValueBytes, j = xt(G);
              return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                  fe,
                  {
                    value: G.key,
                    onChange: (me) => w(R, "key", String(me)),
                    placeholder: l("Enter Key"),
                    status: ne || j ? "error" : "default",
                    tips: ne ? l("Key exceeds byte limit", { max: Ue.maxKeyBytes }) : j ? l("Custom info key required") : ""
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                  fe,
                  {
                    value: G.value,
                    onChange: (me) => w(R, "value", String(me)),
                    placeholder: l("Enter Value"),
                    status: oe ? "error" : "default",
                    tips: oe ? l("Value exceeds 2KB limit") : ""
                  }
                ) }),
                /* @__PURE__ */ e(
                  H,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => I(R),
                    title: l(a.DELETE),
                    icon: /* @__PURE__ */ e(nr, { size: 14 })
                  }
                )
              ] }, R);
            }),
            g.length < Ue.maxCount && /* @__PURE__ */ e(H, { variant: "text", className: "add-custom-info-btn", onClick: q, icon: /* @__PURE__ */ e(ir, { size: 14 }), theme: "primary", children: l("Add") })
          ] })
        ] })
      ] })
    },
    `edit-live-${r == null ? void 0 : r.id}`
  );
}
function Mi(n) {
  const r = te(n);
  r.current = n, ee(() => {
    const t = () => r.current();
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
  const n = document.createElement("div");
  n.style.cssText = "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll;visibility:hidden;", document.body.appendChild(n);
  const r = n.offsetWidth - n.clientWidth;
  return document.body.removeChild(n), r;
}
function Di(n) {
  return typeof n == "number" ? `${n}px` : n;
}
function xi(n, r) {
  return n[r];
}
function Gt({
  columns: n,
  data: r,
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
  fitContentMaxRows: h = ga
}) {
  const N = te(null), m = te(null), L = te(null), T = te(null), E = te(null), [M, O] = _({}), b = te({}), [A, P] = _(0);
  Mi(() => P((I) => I + 1));
  const F = S((I) => I.fitContent || v && I.width === void 0, [v]), z = _e(() => {
    const I = {};
    for (const C of n) {
      let x;
      if (F(C)) {
        const Y = M[C.key];
        x = Y !== void 0 ? `${Y}px` : typeof C.minWidth == "number" ? `${C.minWidth}px` : void 0;
      }
      x === void 0 && (x = Di(C.width)), I[C.key] = { width: x };
    }
    return I;
  }, [n, M, F]), D = _e(() => {
    const I = {};
    for (const C of n) {
      const x = { textAlign: C.align };
      C.ellipsis ? (x.whiteSpace = "nowrap", x.overflow = "hidden", x.textOverflow = "ellipsis") : F(C) && !C.flexible && (x.whiteSpace = "nowrap"), I[C.key] = x;
    }
    return I;
  }, [n, F]), Z = _e(() => fa(n, M, F) ?? {}, [n, M, F]);
  mr(() => {
    const I = n.map((G, R) => ({ column: G, index: R })).filter(({ column: G }) => F(G));
    if (I.length === 0 || typeof document > "u") {
      b.current = {}, O((G) => Object.keys(G).length === 0 ? G : {});
      return;
    }
    let C = 0;
    const x = () => {
      var me, Se;
      const G = ((me = L.current) == null ? void 0 : me.querySelectorAll("thead th")) || [], R = Array.from(((Se = E.current) == null ? void 0 : Se.querySelectorAll("tbody tr")) || []).slice(0, h), U = [], B = [];
      I.forEach(({ column: ae, index: J }) => {
        const K = G[J];
        K && (U.push(K), B.push(ae.key)), R.forEach((ie) => {
          const Ce = ie.children[J];
          Ce && (U.push(Ce), B.push(ae.key));
        });
      });
      const ne = Na(U), oe = {};
      ne.forEach((ae, J) => {
        const K = B[J];
        (oe[K] === void 0 || ae > oe[K]) && (oe[K] = ae);
      });
      const j = {};
      for (const { column: ae } of I)
        oe[ae.key] !== void 0 && (j[ae.key] = Ca(oe[ae.key], ae.minWidth, ae.maxWidth));
      b.current = j;
    }, Y = () => {
      var B;
      const G = b.current;
      if (Object.keys(G).length === 0) {
        O((ne) => Object.keys(ne).length === 0 ? ne : {});
        return;
      }
      const R = ((B = T.current) == null ? void 0 : B.clientWidth) ?? 0, U = va(
        n,
        G,
        R,
        F
      );
      O((ne) => Ea(ne, U) ? ne : U);
    }, y = () => {
      x(), Y();
    };
    C = window.requestAnimationFrame(y);
    const W = new ResizeObserver(() => {
      window.cancelAnimationFrame(C), C = window.requestAnimationFrame(Y);
    });
    return N.current && W.observe(N.current), () => {
      window.cancelAnimationFrame(C), W.disconnect();
    };
  }, [n, r, l, v, h, A, F]), mr(() => {
    var Y;
    const I = N.current, C = (Y = E.current) == null ? void 0 : Y.parentElement;
    if (!I || !C) return;
    const x = C.scrollHeight > C.clientHeight ? Oi() : 0;
    I.style.setProperty("--scrollbar-width", `${x}px`);
  }, [r]);
  const X = /* @__PURE__ */ e("colgroup", { children: n.map((I) => /* @__PURE__ */ e("col", { style: z[I.key] }, I.key)) }), q = (I, C) => typeof t == "function" ? t(I, C) : String(I[t]), w = (I, C) => typeof p == "function" ? p(I, C) : p;
  return ee(() => {
    const I = m.current, C = T.current;
    if (!I || !C) return;
    const x = () => {
      I && C && (I.scrollLeft = C.scrollLeft);
    };
    return C.addEventListener("scroll", x), () => C.removeEventListener("scroll", x);
  }, []), /* @__PURE__ */ u("div", { ref: N, className: `fixed-header-table ${i}`.trim(), children: [
    /* @__PURE__ */ e("div", { ref: m, className: `fixed-header-table__header ${o}`.trim(), children: /* @__PURE__ */ u(
      "table",
      {
        ref: L,
        className: `fixed-header-table__table ${c}`.trim(),
        style: Z,
        children: [
          X,
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((I) => /* @__PURE__ */ e("th", { className: I.className, style: D[I.key], children: I.headerRender ? I.headerRender() : I.title }, I.key)) }) })
        ]
      }
    ) }),
    /* @__PURE__ */ e("div", { ref: T, className: `fixed-header-table__body ${s}`.trim(), style: g, children: l ? /* @__PURE__ */ e("div", { className: "fixed-header-table__loading", children: d }) : r.length === 0 ? /* @__PURE__ */ e("div", { className: "fixed-header-table__empty", children: f }) : /* @__PURE__ */ u(
      "table",
      {
        ref: E,
        className: `fixed-header-table__table ${c}`.trim(),
        style: Z,
        children: [
          X,
          /* @__PURE__ */ e("tbody", { children: r.map((I, C) => /* @__PURE__ */ e("tr", { className: w(I, C), children: n.map((x) => /* @__PURE__ */ e("td", { className: x.className, style: D[x.key], children: x.render ? x.render(I, C) : xi(I, x.key) }, x.key)) }, q(I, C))) })
        ]
      }
    ) })
  ] });
}
function Ke({ actions: n, className: r = "" }) {
  return /* @__PURE__ */ e("div", { className: `list-action-buttons ${r}`.trim(), children: n.map((t) => /* @__PURE__ */ u(
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
  var P, F, z, D, Z, X, q, w;
  const n = yt(), { t: r } = ve(), {
    createLive: t,
    updateLive: i,
    fetchLiveDetail: c,
    endLive: o
  } = ht(), s = (P = Ct().components) == null ? void 0 : P.roomList, p = te(null);
  p.current || (p.current = new qn({
    endLive: o,
    onEnterLive: (I) => n(`/live-control/${I}`),
    t: r,
    toast: $
  }));
  const l = p.current, d = er(l.subscribe, l.getState, l.getState);
  ee(() => (l.init(), () => l.dispose()), []);
  const f = Ui(), g = _e(() => Xn({ hasExtraColumn: !!(s != null && s.tableExtraColumns) }).map((C) => {
    switch (C.key) {
      case "liveId":
        return {
          ...C,
          title: r(a.LIVE_ID),
          render: (x) => /* @__PURE__ */ u("div", { className: "live-list-id-cell", children: [
            /* @__PURE__ */ e("span", { className: "live-list-id-text", children: x.liveId }),
            /* @__PURE__ */ e(
              He,
              {
                size: 14,
                className: "copy-icon",
                onClick: () => l.copyText(x.liveId, r(a.LIVE_ID))
              }
            )
          ] })
        };
      case "liveName":
        return {
          ...C,
          title: r(a.LIVE_TITLE),
          render: (x) => /* @__PURE__ */ e("span", { className: "live-list-text", children: x.liveName || "-" })
        };
      case "coverUrl":
        return {
          ...C,
          title: r(a.COVER_IMAGE),
          render: (x) => /* @__PURE__ */ e("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ e("img", { src: x.coverUrl || lr, alt: x.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ...C,
          title: r(a.ANCHOR_ID),
          render: (x) => {
            var Y;
            return /* @__PURE__ */ e("span", { className: "live-list-text", children: ((Y = x.anchor) == null ? void 0 : Y.userId) || "-" });
          }
        };
      case "createdAt":
        return {
          ...C,
          title: r(a.CREATE_TIME),
          render: (x) => /* @__PURE__ */ e("span", { className: "live-list-text", children: Zn(x.createdAt) })
        };
      case "customer-extra":
        return {
          ...C,
          title: "",
          render: (x) => /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.tableExtraColumns, props: { live: x } })
        };
      case "actions":
        return {
          ...C,
          title: r(a.ACTIONS),
          render: (x) => {
            const Y = jn({
              live: x,
              t: r,
              icons: {
                enter: /* @__PURE__ */ e(dn, {}),
                detail: /* @__PURE__ */ e(Be, {}),
                edit: /* @__PURE__ */ e(Zt, {}),
                delete: /* @__PURE__ */ e(ln, {})
              },
              onEnter: (y) => l.enterLive(y),
              onDetail: (y) => void l.showDetail(y),
              onEdit: (y) => l.openEditModal(y),
              onDelete: (y) => l.requestDelete(y)
            });
            return /* @__PURE__ */ u(he, { children: [
              /* @__PURE__ */ e(Ke, { actions: Y }),
              /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.rowActions, props: { live: x } })
            ] });
          }
        };
      default:
        return { ...C, title: "" };
    }
  }), [r, s, l]), { lives: v, loading: h, refreshing: N, currentPage: m, hasMoreData: L, searchInput: T, obsModal: E, confirmDialog: M, isCreateModalVisible: O, isEditModalVisible: b, editingLive: A } = d;
  return /* @__PURE__ */ u("div", { className: "live-list-page", children: [
    /* @__PURE__ */ u("div", { className: "live-list-header", children: [
      /* @__PURE__ */ e("h1", { className: "live-list-title", children: r(a.LIVE_MANAGEMENT) }),
      /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.beforeToolbar, props: { lives: v, loading: h } }),
      /* @__PURE__ */ u("div", { className: "header-actions", children: [
        /* @__PURE__ */ e(
          fe,
          {
            value: T,
            onChange: (I) => l.setSearchInput(String(I)),
            onEnter: () => {
              if (Jn(T, Bt)) {
                $.error(r(a.INPUT_TOO_LONG));
                return;
              }
              l.search();
            },
            clearable: !0,
            onClear: () => void l.clearSearch(),
            placeholder: r(a.ENTER_LIVE_ID_TO_SEARCH),
            suffixIcon: /* @__PURE__ */ e(tr, { size: 16 }),
            style: { width: 220 },
            status: V(T) > Bt ? "error" : "default",
            tips: V(T) > Bt ? r(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(
          H,
          {
            shape: "round",
            variant: "outline",
            disabled: N || h,
            onClick: () => void l.refresh(),
            icon: /* @__PURE__ */ e(rr, { className: N ? "spinning" : "" }),
            children: r(a.REFRESH)
          }
        ),
        /* @__PURE__ */ e(
          H,
          {
            shape: "round",
            theme: "primary",
            icon: /* @__PURE__ */ e(ir, {}),
            onClick: () => l.openCreateModal(),
            children: r(a.CREATE_LIVE)
          }
        )
      ] }),
      /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.afterToolbar, props: { lives: v, loading: h } })
    ] }),
    /* @__PURE__ */ e(Wr, { className: "live-list-card", children: /* @__PURE__ */ e(
      Gt,
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
          /* @__PURE__ */ e("span", { className: "live-list-loading-text", children: r(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "live-list-empty-container", children: /* @__PURE__ */ e("span", { className: "live-list-empty-text", children: r(a.NO_LIVE_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ u("div", { className: "live-list-pagination", children: [
      /* @__PURE__ */ e(
        H,
        {
          variant: "outline",
          size: "small",
          disabled: m <= 1,
          onClick: () => l.goToPage(1),
          children: r(a.FIRST_PAGE)
        }
      ),
      /* @__PURE__ */ e(
        H,
        {
          variant: "outline",
          size: "small",
          disabled: m <= 1,
          onClick: () => l.goToPage(m - 1),
          children: r(a.PREVIOUS_PAGE)
        }
      ),
      /* @__PURE__ */ e("span", { className: "page-info", children: r(a.PAGE, { page: m }) }),
      /* @__PURE__ */ e(
        H,
        {
          variant: "outline",
          size: "small",
          disabled: !L,
          onClick: () => l.goToPage(m + 1),
          children: r(a.NEXT_PAGE)
        }
      )
    ] }),
    /* @__PURE__ */ e(
      wi,
      {
        visible: O,
        onClose: () => l.closeCreateModal(),
        onSuccess: () => l.onLiveCreated(),
        onCreate: t,
        uploadEnabled: f
      }
    ),
    A && /* @__PURE__ */ e(
      Ri,
      {
        visible: b,
        live: {
          id: A.liveId,
          liveName: A.liveName,
          coverUrl: A.coverUrl,
          customInfo: A.customInfo ? typeof A.customInfo == "string" ? (() => {
            try {
              return JSON.parse(A.customInfo);
            } catch {
              return;
            }
          })() : A.customInfo : void 0
        },
        onClose: () => l.closeEditModal(),
        onSuccess: (I) => l.onLiveEdited(I),
        onUpdate: (I, C) => i({ ...C, liveId: I }),
        onFetchDetail: c,
        uploadEnabled: f,
        extraFieldsSlot: s == null ? void 0 : s.roomFormExtraFields
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: M.visible,
        header: M.title,
        onClose: () => l.cancelDelete(),
        width: be.CONFIRM,
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => l.cancelDelete(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: () => void l.confirmDelete(), children: r(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: M.content })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: E.visible && !!E.live,
        header: r(a.LIVE_INFORMATION),
        onClose: () => l.closeDetail(),
        width: be.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => l.closeDetail(), children: r(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "live-info-form", children: [
          /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: r(a.BASIC_INFORMATION) }),
            /* @__PURE__ */ u("div", { className: "live-info-card", children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: r(a.ANCHOR_ID) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value", children: ((z = (F = E.live) == null ? void 0 : F.anchor) == null ? void 0 : z.userId) || "-" }),
                  ((Z = (D = E.live) == null ? void 0 : D.anchor) == null ? void 0 : Z.userId) && /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => E.live && void l.copyText(E.live.anchor.userId, r(a.LIVE_HOST)),
                      children: /* @__PURE__ */ e(He, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: r(a.LIVE_ID) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: ((X = E.live) == null ? void 0 : X.liveId) || "-" }) })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: r(a.LIVE_TITLE) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value", children: ((q = E.live) == null ? void 0 : q.liveName) || "-" }) })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: r(a.LIVE_COVER) }),
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: ((w = E.live) == null ? void 0 : w.coverUrl) || "-" }) })
              ] })
            ] })
          ] }),
          (E.streamInfo || E.actionLoading === "stream") && /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: r(a.STREAM_INFO) }),
            /* @__PURE__ */ e("div", { className: "live-info-card", children: E.streamInfo ? /* @__PURE__ */ u(he, { children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: r(a.SERVER_URL) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: E.streamInfo.serverUrl }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => E.streamInfo && void l.copyText(E.streamInfo.serverUrl, r(a.SERVER_URL)),
                      children: /* @__PURE__ */ e(He, { size: 14 })
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: r(a.STREAM_KEY) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: E.streamInfo.streamKey }),
                  /* @__PURE__ */ e(
                    "button",
                    {
                      className: "live-info-copy-btn",
                      onClick: () => E.streamInfo && void l.copyText(E.streamInfo.streamKey, r(a.STREAM_KEY)),
                      children: /* @__PURE__ */ e(He, { size: 14 })
                    }
                  )
                ] })
              ] })
            ] }) : /* @__PURE__ */ e("div", { className: "live-info-row", children: /* @__PURE__ */ e("span", { className: "live-info-label", style: { width: "auto" }, children: r(a.GETTING_STREAM_INFO) }) }) })
          ] })
        ] })
      }
    )
  ] });
}
function Ui() {
  const [n, r] = _(!1);
  return ee(() => {
    let t = !1;
    return qr().then((i) => {
      t || r(i);
    }), () => {
      t = !0;
    };
  }, []), n;
}
function ki() {
  const [n, r] = _(""), [t, i] = _(""), c = S((o, s) => {
    o === "success" ? (r(s), setTimeout(() => r(""), 3e3)) : (i(s), setTimeout(() => i(""), 3e3));
  }, []);
  return {
    successMsg: n,
    errorMsg: t,
    showMessage: c
  };
}
function Pi({
  liveId: n,
  onLiveEnded: r
}) {
  const { currentLive: t, setCurrentLive: i } = ht(), { joinLive: c, leaveLive: o, subscribeEvent: s, unsubscribeEvent: p } = Wa(), { login: l, loginUserInfo: d } = Xr(), [f, g] = _(!1), v = te(""), h = te(!1), N = te(null), m = te(r);
  ee(() => {
    m.current = r;
  }, [r]);
  const L = (d == null ? void 0 : d.userId) || "", T = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  ee(() => {
    if (T) {
      console.log("[useLiveControl] Mock mode, skipping TUILogin"), g(!0);
      return;
    }
    if (f) return;
    (async () => {
      var b;
      try {
        const A = await dr();
        if (!A || A.sdkAppId === 0) {
          console.error("[useLiveControl] No valid credentials");
          return;
        }
        await l({
          SDKAppID: A.sdkAppId,
          userID: A.userId,
          userSig: A.userSig
        }), console.log("[useLiveControl] TUILogin success"), g(!0);
      } catch (A) {
        (A == null ? void 0 : A.code) === 2025 || (b = A == null ? void 0 : A.message) != null && b.includes("重复登录") ? (console.log("[useLiveControl] Already logged in"), g(!0)) : console.error("[useLiveControl] TUILogin failed:", A);
      }
    })();
  }, [T, f, l]), ee(() => {
    if (n)
      return console.log("[useLiveControl] Setting current live:", n), i(n), () => {
        console.log("[useLiveControl] Clearing current live"), i(null);
      };
  }, [n, i]);
  const E = S(async () => {
    if (!(!n || !t || !f)) {
      if (v.current === n) {
        console.log("[useLiveControl] Already joined live:", n);
        return;
      }
      try {
        if (console.log("[useLiveControl] Joining live:", n), await c({ liveId: n }), v.current = n, !h.current && s) {
          const O = () => {
            var b;
            console.log("[useLiveControl] Live ended event received"), (b = m.current) == null || b.call(m);
          };
          N.current = O, s(br.ON_LIVE_ENDED, O), h.current = !0;
        }
        console.log("[useLiveControl] Successfully joined live:", n);
      } catch (O) {
        console.error("[useLiveControl] Failed to join live:", O);
      }
    }
  }, [n, t, f, c, s]);
  ee(() => {
    E();
  }, [E]), ee(() => {
    v.current = "";
  }, [n]), ee(() => () => {
    console.log("[useLiveControl] Component unmounting, cleaning up"), h.current && p && N.current && (p(br.ON_LIVE_ENDED, N.current), h.current = !1), v.current && o().catch((O) => {
      console.error("[useLiveControl] Failed to leave live on unmount:", O);
    });
  }, [o, p]);
  const M = S((O) => {
    console.log("[useLiveControl] Manually leaving live"), o().then(() => {
      v.current = "", O == null || O();
    }).catch((b) => {
      console.error("[useLiveControl] Failed to leave live:", b);
    });
  }, [o]);
  return {
    currentLive: t,
    tuiLoginReady: f,
    currentUserId: L,
    handleLeaveLive: M
  };
}
function Fi({
  liveControlSlots: n,
  liveInfo: r,
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
    /* @__PURE__ */ e(De, { slot: n == null ? void 0 : n.beforeLiveInfo, props: { liveInfo: r } }),
    /* @__PURE__ */ u("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        kt,
        {
          className: "anchor-avatar",
          src: i,
          name: c,
          title: c
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: p ? d("Live Ended") : (t == null ? void 0 : t.liveName) || (r == null ? void 0 : r.liveName) || d(a.LOADING) })
    ] }),
    /* @__PURE__ */ u("div", { className: "video-stage", children: [
      r != null && r.coverUrl ? /* @__PURE__ */ e(
        "div",
        {
          className: "video-blur-bg",
          style: {
            backgroundImage: `url(${r.coverUrl})`,
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
            s ? r != null && r.coverUrl ? /* @__PURE__ */ e("div", { className: "mock-cover-preview", children: /* @__PURE__ */ e("img", { src: r.coverUrl, alt: "cover", className: "mock-cover-img" }) }) : null : /* @__PURE__ */ e(za, {}),
            p && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ u("div", { className: "live-state-overlay-content", children: [
              /* @__PURE__ */ e("div", { className: "live-state-overlay-title", children: d("Live Ended") }),
              /* @__PURE__ */ e(
                H,
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
const Gi = 12 * 1024, Vi = (n) => new TextEncoder().encode(n).length, ct = { current: {} }, Wi = st.memo(
  ({ message: n, style: r }) => {
    var l, d;
    const t = n.sender.userId, i = t === ct.current.anchorUserId, c = n.sender.nameCard || n.sender.userName || t, o = n.messageType === 0 ? n.textContent : n.data || "", s = Qn(o);
    return /* @__PURE__ */ u(
      "div",
      {
        className: `message-item${i ? " host" : ""}`,
        style: r,
        onClick: (f) => {
          var g, v;
          (v = (g = ct.current).onMessageClick) == null || v.call(g, f, n);
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
  (n, r) => n.message.liveId === r.message.liveId && n.message.sequence === r.message.sequence && n.style === r.style
), zi = ({ liveId: n, anchorUserId: r, onMuteUser: t, onBanUser: i, mutedList: c = [], bannedList: o = [] }) => {
  const { t: s } = ve(), { loginUserInfo: p } = Xr(), { audienceList: l, disableSendMessage: d } = Ba(), [f, g] = _(!1), [v, h] = _({ top: 0, left: 0 }), [N, m] = _(null), [L, T] = _(""), [E, M] = _(!1), O = te(null), b = te(null), A = r;
  ct.current.t = s;
  const P = (w) => l == null ? void 0 : l.find((I) => I.userId === w), F = (w) => {
    const I = P(w);
    if (I)
      return I.isMessageDisabled === !0;
    const C = c.find((x) => x.userId === w);
    return C ? C.endTime > Date.now() / 1e3 : !1;
  }, z = (w) => {
    const I = o.find((C) => C.userId === w);
    return I ? I.endTime > Date.now() / 1e3 : !1;
  };
  ee(() => {
    if (!f) return;
    const w = (I) => {
      setTimeout(() => {
        b.current && b.current.contains(I.target) || (g(!1), m(null));
      }, 100);
    };
    return document.addEventListener("mousedown", w), () => {
      document.removeEventListener("mousedown", w);
    };
  }, [f]);
  const D = S((w, I) => {
    if (w.stopPropagation(), console.log("[MessageList] handleMessageClick called", {
      messageSender: I.sender.userId,
      loginUserId: p == null ? void 0 : p.userId,
      anchorUserId: A
    }), I.sender.userId === (p == null ? void 0 : p.userId)) {
      console.log("[MessageList] Own message, no menu shown");
      return;
    }
    if (I.sender.userId === A) {
      console.log("[MessageList] Anchor message, no menu shown");
      return;
    }
    if (A && I.sender.userId === Mt(A))
      return;
    const C = w.target.closest(".message-item");
    if (!C) {
      console.log("[MessageList] message-item element not found");
      return;
    }
    const x = C.getBoundingClientRect(), Y = x.bottom + 4, y = Math.min(x.left, window.innerWidth - 160);
    console.log("[MessageList] Showing dropdown menu", { top: Y, left: y }), h({ top: Y, left: Math.max(0, y) }), m(I), g(!0);
  }, [p, A]);
  ee(() => {
    ct.current.anchorUserId = A, ct.current.onMessageClick = D;
  });
  const Z = S(async (w) => {
    if (w == null || w.preventDefault(), E) return;
    const I = L.trim();
    if (!I) {
      $.warning(s(a.MESSAGE_CONTENT_REQUIRED));
      return;
    }
    if (!n) {
      $.error(s(a.LIVE_NOT_FOUND));
      return;
    }
    if (Vi(I) > Gi) {
      $.error(s(a.MESSAGE_CONTENT_TOO_LONG, { max: "12KB" }));
      return;
    }
    M(!0);
    try {
      const C = await ka(n, I);
      if ((C == null ? void 0 : C.ErrorCode) !== void 0 && C.ErrorCode !== 0)
        throw new Error(C.ErrorInfo || s(a.SEND_FAILED));
      if (C != null && C.ActionStatus && C.ActionStatus !== "OK")
        throw new Error(C.ErrorInfo || s(a.SEND_FAILED));
      T(""), $.success(s(a.MESSAGE_SENT));
    } catch (C) {
      const x = C, Y = x.ErrorInfo || (x instanceof Error ? x.message : String(x)) || s(a.UNKNOWN_HOST);
      $.error(s(a.SEND_FAILED_WITH_ERROR, { error: Y }));
    } finally {
      M(!1);
    }
  }, [L, n, E, s]), X = () => {
    if (N && i) {
      const w = N.sender.userId;
      if (A && w !== Mt(A)) {
        const I = N.sender.userName || N.sender.nameCard || N.sender.userId, C = z(w);
        i(w, I, C);
      }
    }
    g(!1), m(null);
  }, q = async () => {
    if (!N) return;
    const w = N.sender.userId;
    if (A && w === Mt(A)) {
      g(!1), m(null);
      return;
    }
    const I = N.sender.userName || N.sender.nameCard || N.sender.userId, C = F(w);
    try {
      d ? (await d({ userId: w, isDisable: !C }), console.log(C ? "Unmute successful" : "Mute successful")) : t && t(w, I, C);
    } catch (x) {
      console.error("SDK mute failed, using fallback method:", x), t && t(w, I, C);
    }
    g(!1), m(null);
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: "message-list-container",
      ref: O,
      children: [
        /* @__PURE__ */ e("div", { className: "message-list-scroll-area", children: /* @__PURE__ */ e(
          Ha,
          {
            Message: Wi,
            className: "barrage-list-wrapper"
          }
        ) }),
        /* @__PURE__ */ u("form", { className: "admin-message-composer", onSubmit: Z, children: [
          /* @__PURE__ */ e(
            "input",
            {
              className: "admin-message-input",
              value: L,
              onChange: (w) => T(w.target.value),
              placeholder: s(a.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
              disabled: E || !n
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "submit",
              className: "admin-message-send-btn",
              disabled: E || !n || !L.trim(),
              children: s(E ? a.SENDING : a.SEND_MESSAGE)
            }
          )
        ] }),
        f && N && $a(
          /* @__PURE__ */ u(
            "div",
            {
              ref: b,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: v.top,
                left: v.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: q, children: F(N.sender.userId) ? /* @__PURE__ */ u(he, { children: [
                  /* @__PURE__ */ e(Dt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.UNMUTE) })
                ] }) : /* @__PURE__ */ u(he, { children: [
                  /* @__PURE__ */ e(Gr, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: X, children: z(N.sender.userId) ? /* @__PURE__ */ u(he, { children: [
                  /* @__PURE__ */ e(un, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.UNBAN) })
                ] }) : /* @__PURE__ */ u(he, { children: [
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
  liveId: n,
  activeTab: r,
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
        zt,
        {
          value: r,
          onChange: (h) => t(h),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(zt.TabPanel, { value: "chat", label: v(a.MESSAGE_LIST) }),
            /* @__PURE__ */ e(zt.TabPanel, { value: "audience", label: v(a.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ u("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          vn,
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
            display: r === "chat" ? "flex" : "none",
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
                liveId: n,
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
          style: { display: r === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(Ya, { height: "99%", children: ({ audience: h }) => {
              if (h.userId === s)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: v(a.ME) });
              const N = Mt(p);
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
                    children: /* @__PURE__ */ e(hn, { size: 18 })
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
function Yi({
  liveControlSlots: n,
  liveInfo: r,
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
  var z, D, Z;
  const { currentLive: m, currentUserId: L, handleLeaveLive: T } = Pi({
    liveId: t,
    onLiveEnded: h
  }), E = _e(
    () => {
      var X;
      return ((X = m == null ? void 0 : m.liveOwner) == null ? void 0 : X.userId) || (r == null ? void 0 : r.anchor.id) || "";
    },
    [(z = m == null ? void 0 : m.liveOwner) == null ? void 0 : z.userId, r == null ? void 0 : r.anchor.id]
  ), M = _e(
    () => {
      var X;
      return (r == null ? void 0 : r.anchor.avatar) || ((X = m == null ? void 0 : m.liveOwner) == null ? void 0 : X.avatarUrl) || "";
    },
    [r == null ? void 0 : r.anchor.avatar, (D = m == null ? void 0 : m.liveOwner) == null ? void 0 : D.avatarUrl]
  ), O = _e(
    () => {
      var X;
      return (r == null ? void 0 : r.anchor.name) || ((X = m == null ? void 0 : m.liveOwner) == null ? void 0 : X.userName) || N("Unknown Anchor");
    },
    [r == null ? void 0 : r.anchor.name, (Z = m == null ? void 0 : m.liveOwner) == null ? void 0 : Z.userName, N]
  ), b = _e(
    () => (m == null ? void 0 : m.roomType) === "Voice",
    [m == null ? void 0 : m.roomType]
  ), A = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  return /* @__PURE__ */ u("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      Fi,
      {
        liveControlSlots: n,
        liveInfo: r,
        currentLive: m,
        liveAnchorAvatar: M,
        liveAnchorName: O,
        isVoiceLive: b,
        isMockMode: A,
        liveEndedOverlayVisible: !m && !A,
        onLeaveLive: () => {
          T(v);
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
        currentUserId: L,
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
const Ki = (n, r, t) => {
  const i = Array.from({ length: r }, () => 0);
  return n.forEach((c, o) => {
    const s = o % r;
    i[s] = Math.max(i[s], c);
  }), i.reduce((c, o) => c + o, 0) + t * (r - 1);
}, $i = (n) => {
  const r = Array.from(n.querySelectorAll(":scope > .stat-bar-item")), t = document.createElement("div");
  t.style.position = "absolute", t.style.left = "-99999px", t.style.top = "0", t.style.visibility = "hidden", t.style.pointerEvents = "none", t.style.width = "max-content", document.body.appendChild(t);
  const i = r.map((c) => {
    const o = c.cloneNode(!0);
    return o.style.width = "max-content", o.style.maxWidth = "none", t.appendChild(o), Math.ceil(o.getBoundingClientRect().width);
  });
  return t.remove(), i;
}, qi = (n) => {
  if (n.clientWidth <= 0) return;
  const r = $i(n);
  if (!r.length) return;
  const t = parseFloat(getComputedStyle(n).columnGap) || 0, i = n.clientWidth, c = [7, 4, 3, 2, 1].find((o) => Ki(r, o, t) <= i + 1) || 1;
  n.style.setProperty("--stats-columns", String(c));
}, Xi = (n) => n >= 1e4 ? (n / 1e4).toFixed(1) + "w" : n.toLocaleString(), ji = (n, r) => {
  n < 0 && (n = 0);
  const t = Math.floor(n / 86400), i = Math.floor(n % 86400 / 3600), c = Math.floor(n % 3600 / 60), o = n % 60, s = `${i.toString().padStart(2, "0")}:${c.toString().padStart(2, "0")}:${o.toString().padStart(2, "0")}`;
  return t > 0 ? `${t}${r(a.DAYS)} ${s}` : s;
}, Zi = (n) => {
  const r = new Date(n), t = String(r.getMonth() + 1).padStart(2, "0"), i = String(r.getDate()).padStart(2, "0"), c = String(r.getHours()).padStart(2, "0"), o = String(r.getMinutes()).padStart(2, "0"), s = String(r.getSeconds()).padStart(2, "0");
  return `${t}-${i} ${c}:${o}:${s}`;
}, Dr = (n) => ({
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
})[n] || a.UNKNOWN, rt = (n) => {
  const r = (n == null ? void 0 : n.ErrorCode) || (n == null ? void 0 : n.errorCode) || (n == null ? void 0 : n.code) || 0, t = (n == null ? void 0 : n.ErrorInfo) || (n == null ? void 0 : n.errorInfo) || "";
  return { code: r, info: t };
};
function Ji({
  liveInfo: n,
  audienceCount: r,
  liveDuration: t,
  interactionRate: i,
  updateTimeText: c,
  t: o
}) {
  var p, l, d, f, g, v, h;
  const s = te(null);
  return ee(() => {
    const N = s.current;
    if (!N) return;
    let m = null;
    const L = () => {
      m !== null && cancelAnimationFrame(m), m = requestAnimationFrame(() => {
        m = null, qi(N);
      });
    }, T = new ResizeObserver(L);
    T.observe(N);
    const E = new MutationObserver(L);
    return E.observe(N, { childList: !0, subtree: !0, characterData: !0 }), L(), () => {
      T.disconnect(), E.disconnect(), m !== null && cancelAnimationFrame(m);
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
        /* @__PURE__ */ e("div", { className: "stat-value", children: Xi((n == null ? void 0 : n.onlineCount) ?? r ?? 0) })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.COMMENT_COUNT),
          /* @__PURE__ */ e(xe, { content: o(a.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((l = (p = n == null ? void 0 : n.stats) == null ? void 0 : p.commentCount) == null ? void 0 : l.toLocaleString()) ?? "0" })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.COMMENT_USERS),
          /* @__PURE__ */ e(xe, { content: o(a.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((d = n == null ? void 0 : n.stats) == null ? void 0 : d.totalUniqueCommenters) ?? 0 })
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
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((g = (f = n == null ? void 0 : n.stats) == null ? void 0 : f.giftAmount) == null ? void 0 : g.toFixed(2)) ?? "0.00" })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.GIFT_COUNT),
          /* @__PURE__ */ e(xe, { content: o(a.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((v = n == null ? void 0 : n.stats) == null ? void 0 : v.giftCount) ?? 0 })
      ] }),
      /* @__PURE__ */ u("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ u("div", { className: "stat-label", children: [
          o(a.GIFT_SENDERS),
          /* @__PURE__ */ e(xe, { content: o(a.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(Be, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ((h = n == null ? void 0 : n.stats) == null ? void 0 : h.giftUserCount) ?? 0 })
      ] })
    ] })
  ] });
}
function Qi({
  moderationList: n,
  moderationLoading: r,
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
  onDelete: L,
  onOpenDropdown: T,
  t: E
}) {
  return /* @__PURE__ */ u("div", { className: "moderation-card", children: [
    /* @__PURE__ */ u("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ u("div", { className: "moderation-header-left", children: [
        /* @__PURE__ */ e("h3", { children: E(a.CONTENT_MODERATION) }),
        /* @__PURE__ */ e(
          H,
          {
            theme: "primary",
            shape: "round",
            onClick: g,
            disabled: o.length === 0,
            icon: /* @__PURE__ */ e(Dt, { style: { width: 14, height: 14 } }),
            children: E(a.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          H,
          {
            theme: "primary",
            shape: "round",
            onClick: v,
            disabled: o.length === 0,
            icon: /* @__PURE__ */ e(mn, { style: { width: 14, height: 14 } }),
            children: E(a.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ u("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: E(a.UPDATED_AT, { time: l }) }),
        /* @__PURE__ */ e(
          H,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(rr, {}),
            loading: r,
            onClick: d,
            children: E(a.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ e(
        Gt,
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
              render: (M) => /* @__PURE__ */ e(
                "input",
                {
                  type: "checkbox",
                  checked: o.includes(M.id),
                  onChange: () => h(M.id)
                }
              )
            },
            {
              key: "userId",
              title: E(a.USERID),
              width: 120,
              className: "col-user",
              render: (M) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: M.userId }) })
            },
            {
              key: "content",
              title: E(a.COMMENT_CONTENT),
              className: "col-content moderation-content-cell",
              render: (M) => /* @__PURE__ */ e("span", { title: M.content, children: M.content })
            },
            {
              key: "type",
              title: E(a.SENSITIVE_TYPE),
              width: 100,
              className: "col-type moderation-type-cell",
              render: (M) => {
                const O = M.type.split(/[,\s;|]+/).map((b) => b.trim()).filter(Boolean).map(
                  (b, A) => A > 0 ? " " + E(Dr(b)) : E(Dr(b))
                ).join("");
                return /* @__PURE__ */ e(xe, { content: O, placement: "top", children: /* @__PURE__ */ e("span", { className: "moderation-type-text", title: "", children: O }) });
              }
            },
            {
              key: "createdAtMs",
              title: E(a.CREATED_AT),
              width: 120,
              className: "col-time moderation-time-cell",
              render: (M) => Zi(M.createdAtMs)
            },
            {
              key: "action",
              title: E(a.ACTION),
              fitContent: !0,
              minWidth: 120,
              maxWidth: 260,
              className: "col-action",
              render: (M) => /* @__PURE__ */ e(
                Ke,
                {
                  actions: [
                    {
                      key: "approve",
                      label: E(a.APPROVE),
                      onClick: () => m(M)
                    },
                    {
                      key: "delete",
                      label: E(a.DELETE),
                      danger: !0,
                      onClick: () => L(M)
                    },
                    {
                      key: "more",
                      label: E(a.MORE),
                      suffixCaret: !0,
                      onClick: (O) => T(O, M)
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
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: E(a.MODERATION_EMPTY) }) })
        }
      ),
      n.length > 0 && /* @__PURE__ */ u("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: E(a.TOTAL_ITEMS, { count: i, total: i }) }),
        /* @__PURE__ */ u("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: t <= 1,
              onClick: () => f(t - 1),
              "aria-label": E(a.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(pn, { style: { width: 14 } })
            }
          ),
          ea(t, c).map(
            (M, O) => M === "..." ? /* @__PURE__ */ e("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${O}`) : /* @__PURE__ */ e(
              "button",
              {
                className: `page-num ${M === t ? "active" : ""}`,
                onClick: () => f(M),
                children: M
              },
              M
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: t >= c,
              onClick: () => f(t + 1),
              "aria-label": E(a.NEXT_PAGE),
              children: /* @__PURE__ */ e(ar, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function eo({
  mutedModalVisible: n,
  bannedModalVisible: r,
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
  return /* @__PURE__ */ u(he, { children: [
    /* @__PURE__ */ e(
      ge,
      {
        visible: n,
        header: g(a.MUTED_VIEWERS),
        onClose: p,
        width: be.WIDE,
        footer: /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: p, children: g(a.CLOSE) }),
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
                  kt,
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
                Ke,
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
        visible: r,
        header: g(a.BANNED_VIEWERS),
        onClose: l,
        width: be.WIDE,
        footer: /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: l, children: g(a.CLOSE) }),
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
                  kt,
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
                Ke,
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
function to(n, r) {
  const {
    fetchTextModerationList: t,
    approveTextModerationItems: i,
    bypassCorrectionKeyword: c
  } = Zr({ liveId: n || "", pageSize: wt }), [o, s] = _([]), [p, l] = _(!1), [d, f] = _(1), [g, v] = _(0), [h, N] = _([]), [m, L] = _(null), [T, E] = _(null), M = _e(() => ta(g, wt), [g]), O = S(
    async (y = 1) => {
      if (n) {
        l(!0);
        try {
          const W = Math.max(1, y), G = await t({
            pageNum: W,
            pageSize: wt,
            minutes: 10,
            violationOnly: !0
          }), R = G.list || [];
          s(R), v(G.total || 0), f(W), N((U) => U.filter((B) => R.some((ne) => ne.id === B)));
        } catch (W) {
          console.error("[moderation] load failed:", W), $.error(r(a.OPERATION_FAILED, { error: W.message || r(a.UNKNOWN_ERROR) }));
        } finally {
          l(!1);
        }
      }
    },
    [n, r, t]
  );
  ee(() => {
    n && O(1);
  }, [n]);
  const b = S(async () => {
    await O(d), $.success(r(a.REFRESHED));
  }, [O, d, r]), A = S(
    (y) => {
      y < 1 || y > M || y === d || O(y);
    },
    [O, d, M]
  ), P = S(
    async (y) => {
      N((G) => G.filter((R) => !y.includes(R)));
      const W = ra(
        d,
        g,
        y.length,
        wt
      );
      await O(W);
    },
    [O, d, g]
  ), F = Ve({
    action: async () => {
      if (!m || !n) throw new Error("liveId is required");
      await i({
        ids: [m.id],
        items: [{ id: m.id, content: m.content, userId: m.userId }],
        liveId: n
      });
    },
    confirm: {
      title: r(a.RELEASE_AND_RESEND),
      content: r(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      $.success(r(a.RELEASE_AND_RESEND_SUCCESS)), m && await P([m.id]), L(null);
    },
    onError: (y) => {
      $.error(r(a.OPERATION_FAILED, { error: y.message || r(a.UNKNOWN_ERROR) }));
    }
  }), z = S((y) => {
    L(y), F.requestConfirm();
  }, [F]), D = Ve({
    action: async () => {
      if (!T) throw new Error("No target item");
      await c({ keywords: [T.content] });
    },
    confirm: {
      title: r(a.BYPASS_CORRECTION),
      content: r(a.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      $.success(r(a.BYPASS_CORRECTION_SUCCESS)), T && await P([T.id]), E(null);
    },
    onError: (y) => {
      $.error(r(a.OPERATION_FAILED, { error: y.message || r(a.UNKNOWN_ERROR) }));
    }
  }), Z = S((y) => {
    E(y), D.requestConfirm();
  }, [D]), X = Ve({
    action: async () => {
      if (!n) throw new Error("liveId is required");
      const y = [...h], W = o.filter((G) => y.includes(G.id)).map((G) => ({ id: G.id, content: G.content, userId: G.userId }));
      await i({ ids: y, items: W, liveId: n });
    },
    confirm: {
      title: r(a.RELEASE_AND_RESEND),
      content: r(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      $.success(r(a.RELEASE_AND_RESEND_SUCCESS));
      const y = [...h];
      await P(y);
    },
    onError: (y) => {
      $.error(r(a.OPERATION_FAILED, { error: y.message || r(a.UNKNOWN_ERROR) }));
    }
  }), q = S(() => {
    if (h.length === 0) {
      $.warning(r(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    X.requestConfirm();
  }, [X, h]), w = S(
    async (y) => {
      try {
        await i({ ids: [y.id] }), $.info(r(a.DELETED)), await P([y.id]);
      } catch (W) {
        console.error("[moderation] delete failed:", W), $.error(r(a.OPERATION_FAILED, { error: W.message || r(a.UNKNOWN_ERROR) }));
      }
    },
    [P, r]
  ), I = S(async () => {
    if (h.length === 0) {
      $.warning(r(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const y = [...h];
    try {
      await i({ ids: y }), $.info(r(a.DELETED)), await P(y);
    } catch (W) {
      console.error("[moderation] bulk delete failed:", W), $.error(r(a.OPERATION_FAILED, { error: W.message || r(a.UNKNOWN_ERROR) }));
    }
  }, [h, P, r]), C = S((y) => {
    N((W) => W.includes(y) ? W.filter((G) => G !== y) : [...W, y]);
  }, []), x = S(() => {
    N((y) => {
      const W = o.map((G) => G.id);
      return y.length === W.length ? [] : W;
    });
  }, [o]), Y = _e(() => {
    const y = o.map((W) => W.id);
    return na(h, y);
  }, [o, h]);
  return {
    moderationList: o,
    moderationLoading: p,
    moderationPage: d,
    moderationTotal: g,
    moderationTotalPages: M,
    moderationSelectedIds: h,
    isAllOnPageSelected: Y,
    releaseConfirmDialog: F.confirmDialog,
    bypassConfirmDialog: D.confirmDialog,
    bulkApproveConfirmDialog: X.confirmDialog,
    handleRefreshModeration: b,
    goToModerationPage: A,
    handleRelease: z,
    handleBypassCorrection: Z,
    handleDeleteModeration: w,
    handleBulkApprove: q,
    handleBulkDelete: I,
    toggleSelectOne: C,
    toggleSelectAll: x
  };
}
function ro(n, r, t) {
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
  } = Zr({ liveId: n || "", pageSize: 20 }), [v, h] = _([]), [N, m] = _([]), [L, T] = _(!1), [E, M] = _(null), [O, b] = _(null), [A, P] = _(null), [F, z] = _(null);
  _e(() => {
    Array.isArray(i) && h(i);
  }, [i]), _e(() => {
    Array.isArray(c) && m(c);
  }, [c]);
  const D = (R, U) => {
    R === "success" ? $.success(U) : $.error(U);
  }, Z = Ve({
    action: async () => {
      if (!O) throw new Error("No target");
      await d({ memberAccounts: [O.userId] });
    },
    confirm: {
      title: r(a.CONFIRM_UNMUTE_USER),
      content: O ? r(a.UNMUTE_CONFIRM, { name: O.userName }) : ""
    },
    onSuccess: async () => {
      D("success", r(a.UNMUTED_SUCCESS, { name: (O == null ? void 0 : O.userName) || "" })), await y(), b(null);
    },
    onError: (R) => {
      const { code: U, info: B } = rt(R), ne = U ? tt(U, B) : R.message || r(a.UNKNOWN_HOST);
      D("error", r(a.OPERATION_FAILED, { error: ne }));
    }
  }), X = Ve({
    action: async () => {
      if (!E) throw new Error("No target");
      await l({ memberAccounts: [E.userId], muteTime: aa });
    },
    confirm: {
      title: r(a.CONFIRM_MUTE_USER),
      content: E ? r(a.MUTE_WARNING, { name: E.userName }) : ""
    },
    onSuccess: async () => {
      D("success", r(a.MUTED_SUCCESS, { name: (E == null ? void 0 : E.userName) || "" })), await y(), M(null);
    },
    onError: (R) => {
      const { code: U, info: B } = rt(R), ne = U ? tt(U, B) : R.message || r(a.UNKNOWN_HOST);
      D("error", r(a.MUTE_FAILED, { error: ne }));
    }
  }), q = S((R, U, B) => {
    n && (Nr(R, t) || (B ? (b({ userId: R, userName: U }), Z.requestConfirm()) : (M({ userId: R, userName: U }), X.requestConfirm())));
  }, [n, t, Z, X]), w = Ve({
    action: async () => {
      if (!F) throw new Error("No target");
      await g({ memberAccounts: [F.userId] });
    },
    confirm: {
      title: r(a.CONFIRM_UNBAN_USER),
      content: F ? r(a.UNBAN_CONFIRM, { name: F.userName }) : ""
    },
    onSuccess: async () => {
      D("success", r(a.UNBANNED_SUCCESS, { name: (F == null ? void 0 : F.userName) || "" })), await W(), z(null);
    },
    onError: (R) => {
      const { code: U, info: B } = rt(R), ne = U ? tt(U, B) : R.message || r(a.UNKNOWN_HOST);
      D("error", r(a.OPERATION_FAILED, { error: ne }));
    }
  }), I = Ve({
    action: async () => {
      if (!A) throw new Error("No target");
      await f({ memberAccounts: [A.userId], duration: ia });
    },
    confirm: {
      title: r(a.CONFIRM_BAN_USER),
      content: A ? r(a.BAN_WARNING, { name: A.userName }) : ""
    },
    onSuccess: async () => {
      D("success", r(a.BANNED_SUCCESS, { name: (A == null ? void 0 : A.userName) || "" })), await W(), P(null);
    },
    onError: (R) => {
      const { code: U, info: B } = rt(R), ne = U ? tt(U, B) : R.message || r(a.UNKNOWN_HOST);
      D("error", r(a.BAN_FAILED, { error: ne }));
    }
  }), C = S((R, U, B) => {
    n && (Nr(R, t) || (B ? (z({ userId: R, userName: U }), w.requestConfirm()) : (P({ userId: R, userName: U }), I.requestConfirm())));
  }, [n, t, w, I]), x = S((R) => {
    n && (b({ userId: R, userName: R }), Z.requestConfirm());
  }, [n, Z]), Y = S((R) => {
    n && (z({ userId: R, userName: R }), w.requestConfirm());
  }, [n, w]), y = S(async () => {
    if (n) {
      T(!0);
      try {
        const R = await s();
        h(Array.isArray(R) ? R : []);
      } catch (R) {
        console.error("获取禁言列表失败:", R);
        const { code: U, info: B } = rt(R), ne = U ? tt(U, B) : R.message || r(a.UNKNOWN_HOST);
        D("error", r(a.FETCH_MUTED_LIST_FAILED, { error: ne }));
      } finally {
        T(!1);
      }
    }
  }, [n, r, s]), W = S(async () => {
    if (n) {
      T(!0);
      try {
        const R = await p();
        m(Array.isArray(R) ? R : []);
      } catch (R) {
        console.error("获取封禁列表失败:", R);
        const { code: U, info: B } = rt(R), ne = U ? tt(U, B) : R.message || r(a.UNKNOWN_HOST);
        D("error", r(a.FETCH_BANNED_LIST_FAILED, { error: ne }));
      } finally {
        T(!1);
      }
    }
  }, [n, r, p]), G = S((R) => v.some((U) => U.userId === R), [v]);
  return {
    mutedList: v,
    bannedList: N,
    memberListLoading: L,
    fetchMutedList: y,
    fetchBannedList: W,
    handleMuteAudience: q,
    handleBanAudience: C,
    handleUnmuteFromList: x,
    handleUnbanFromList: Y,
    isUserMuted: G,
    muteConfirmDialog: X.confirmDialog,
    unmuteConfirmDialog: Z.confirmDialog,
    banConfirmDialog: I.confirmDialog,
    unbanConfirmDialog: w.confirmDialog
  };
}
function Ro() {
  var St, Tt, pt, We;
  const { liveId: n } = Ga();
  ee(() => (console.log("[LiveControl] ✅ Component MOUNTED, liveId:", n), () => {
    console.log("[LiveControl] ❌ Component UNMOUNTED, liveId:", n);
  }), []);
  const r = yt(), t = Ct(), i = (St = t.components) == null ? void 0 : St.roomControl;
  (Tt = t.components) == null || Tt.liveMonitor;
  const { t: c } = ve(), {
    init: o,
    fetchLiveDetail: s,
    fetchLiveStats: p,
    endLive: l,
    updateLive: d
  } = ht(), [f, g] = _({});
  S(async (k) => {
    if (!(!k || k.length === 0))
      try {
        const re = await Pa(k);
        g((ce) => ({ ...ce, ...Object.fromEntries(re) }));
      } catch (re) {
        console.error("[LiveControl] fetchUserProfiles failed:", re);
      }
  }, []);
  const v = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, [h, N] = _(v), [m, L] = _(null), [T, E] = _(!1), [M, O] = _("chat"), [b, A] = _(!0), { successMsg: P, errorMsg: F } = ki(), [z, D] = _(null), [Z, X] = _(!1), [q, w] = _(!1), I = Va(), C = Ve({
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
      r(-1);
    }
  }), x = Ve({
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
      L((k) => k ? { ...k, isMessageDisabled: !0 } : null);
    }
  }), [Y, y] = _({
    visible: !1,
    liveId: "",
    liveName: ""
  }), W = () => {
    y({
      visible: !0,
      liveId: n || "",
      liveName: (m == null ? void 0 : m.liveName) || ""
    });
  }, G = te(null), R = te(null), [U, B] = _(null), [ne, oe] = _(0), [j, me] = _(null), Se = _e(
    () => {
      var k, re;
      return ((k = m == null ? void 0 : m.anchor) == null ? void 0 : k.userId) || ((re = m == null ? void 0 : m.anchor) == null ? void 0 : re.id) || "";
    },
    [m]
  ), ae = to(n, c), J = ro(n, c, Se);
  ee(() => () => {
    n && (console.log("[LiveControl] Component unmounting, auto end live:", n), l(n).catch((k) => {
      console.error("[LiveControl] Failed to end live on unmount:", k);
    }));
  }, [n, l]);
  const K = ur({
    action: async () => n ? await s(n) : null,
    successMessage: "",
    errorMessage: c(a.GET_ERROR_MESSAGE),
    onSuccess: (k) => {
      var Fe;
      if (!k) return;
      const re = (Fe = k.anchor) == null ? void 0 : Fe.userId, ce = Br(k, re || "-"), Ae = zr(k);
      if (k.anchor ? B({
        nick: k.anchor.nick || ce,
        avatarUrl: k.anchor.avatarUrl || Ae
      }) : B({
        nick: ce,
        avatarUrl: Ae
      }), L({
        liveId: k.liveId,
        id: k.liveId,
        liveName: k.liveName || c(a.UNNAMED_LIVE_SHORT),
        coverUrl: k.coverUrl || lr,
        anchor: {
          userId: re || "",
          nick: ce,
          avatarUrl: Ae,
          id: re,
          name: ce,
          avatar: Ae
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
        oe(Xe > 0 ? Xe : 0);
      }
    }
  }), ie = S(async () => {
    await K.execute();
  }, [K.execute]), Ce = S(async () => {
    if (n)
      try {
        await p(n);
      } catch {
      }
  }, [n]), Ie = _e(() => {
    var ce;
    const k = (m == null ? void 0 : m.onlineCount) || 0, re = ((ce = m == null ? void 0 : m.stats) == null ? void 0 : ce.totalUniqueCommenters) ?? 0;
    return k <= 0 ? "0%" : (re / k * 100).toFixed(1) + "%";
  }, [m == null ? void 0 : m.onlineCount, (pt = m == null ? void 0 : m.stats) == null ? void 0 : pt.totalUniqueCommenters]), [pe, Te] = _(() => {
    const k = /* @__PURE__ */ new Date();
    return `${String(k.getHours()).padStart(2, "0")}:${String(k.getMinutes()).padStart(2, "0")}`;
  });
  S(() => {
    const k = /* @__PURE__ */ new Date();
    Te(`${String(k.getHours()).padStart(2, "0")}:${String(k.getMinutes()).padStart(2, "0")}`);
  }, []);
  const Le = 30, de = te(null), Qe = te(!0);
  te(!1);
  const Vt = te(!0);
  S(() => {
    E(!0);
  }, []);
  const mt = S(() => {
    r(-1);
  }, [r]), Wt = (k) => {
    if (k !== (m == null ? void 0 : m.isMessageDisabled)) {
      if (k) {
        x.requestConfirm();
        return;
      }
      x.executeWithConfirm();
    }
  }, _t = (k) => {
    const re = f[k];
    if (re != null && re.avatarUrl)
      return re.avatarUrl;
  }, bt = (k) => {
    const re = f[k];
    return re != null && re.nick ? re.nick : k;
  }, et = S(() => {
    me(null);
  }, []), hr = S((k, re) => {
    k.preventDefault(), k.stopPropagation();
    const ce = k.currentTarget.getBoundingClientRect();
    me({
      item: re,
      x: ce.right,
      y: ce.bottom + 4
    });
  }, []), $e = S(() => {
    D(null);
  }, []), It = (k, re, ce, Ae) => {
    k.stopPropagation();
    const Fe = k.currentTarget.getBoundingClientRect();
    D({
      visible: !0,
      userId: re,
      userName: ce,
      isMuted: Ae,
      x: Fe.right,
      y: Fe.bottom + 4
    });
  };
  ee(() => {
    var ce;
    const k = (ce = m == null ? void 0 : m.anchor) == null ? void 0 : ce.userId;
    if (!k) return;
    const re = f[k];
    re && B({
      nick: re.nick || "",
      avatarUrl: re.avatarUrl || ""
    });
  }, [f, (We = m == null ? void 0 : m.anchor) == null ? void 0 : We.userId]), ee(() => {
    const k = m == null ? void 0 : m.createdAt;
    if (!k || (m == null ? void 0 : m.activityStatus) === 2)
      return;
    const re = () => {
      const Ae = Math.floor((Date.now() - k) / 1e3);
      oe(Ae > 0 ? Ae : 0);
    };
    re();
    const ce = window.setInterval(re, 1e3);
    return () => {
      window.clearInterval(ce);
    };
  }, [m == null ? void 0 : m.createdAt, m == null ? void 0 : m.activityStatus]), ee(() => {
    if (!(z != null && z.visible) && !j) return;
    const k = (re) => {
      G.current && !G.current.contains(re.target) && $e(), R.current && !R.current.contains(re.target) && et();
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [z == null ? void 0 : z.visible, $e, et, j]), ee(() => {
    M === "audience" && n && (J.fetchMutedList(), J.fetchBannedList());
  }, [M, n]), ee(() => {
    if (M !== "audience") return;
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
  }, [M]), ee(() => {
    v && N(!0);
  }, [v]), ee(() => {
    !v && !h && (async () => {
      try {
        const re = await dr();
        re && re.sdkAppId !== 0 ? (console.log("[LiveControl] Initializing SDK with account:", re.userId), o({
          baseURL: "http://localhost:9000/api"
        }), N(!0), console.log("[LiveControl] SDK initialized successfully")) : console.error("[LiveControl] No valid credentials found");
      } catch (re) {
        console.error("[LiveControl] SDK init error:", re);
      }
    })();
  }, [v, h]), ee(() => {
    E(!1);
  }, [n]), ee(() => {
    if (console.log("[LiveControl] Main useEffect triggered:", { liveId: n, isMockMode: v, sdkReady: h }), Qe.current = !0, Vt.current = !0, n && (v || h))
      return console.log("[LiveControl] Condition met, calling fetchRoomInfo"), ie(), Ce(), J.fetchMutedList(), J.fetchBannedList(), () => {
        Qe.current = !1;
      };
    console.log("[LiveControl] Condition NOT met, waiting...", { liveId: n, isMockMode: v, sdkReady: h });
  }, [n, h, v]), ee(() => {
    if (!n || !h || Le === 0) {
      de.current && (clearInterval(de.current), de.current = null);
      return;
    }
    return de.current = window.setInterval(() => {
      Qe.current && Ce();
    }, Le * 1e3), () => {
      de.current && (clearInterval(de.current), de.current = null);
    };
  }, [n, h, Le]), U != null && U.nick || m != null && m.anchor.name || c(a.UNKNOWN_HOST), U != null && U.avatarUrl || m != null && m.anchor.avatar, _e(() => (n == null ? void 0 : n.startsWith("voice_")) || !1, [n]);
  const Lt = (m == null ? void 0 : m.isMessageDisabled) === !0;
  return b ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(En, { loading: !0, text: c(a.LOADING) }) }) : /* @__PURE__ */ u("div", { className: "live-control-container", children: [
    /* @__PURE__ */ u("div", { className: "toast-area", children: [
      P && /* @__PURE__ */ e("div", { className: "status-success", children: P }),
      F && /* @__PURE__ */ e("div", { className: "status-error", children: F })
    ] }),
    /* @__PURE__ */ u("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ u("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(H, { shape: "circle", variant: "outline", className: "back-btn", onClick: mt, title: c(a.BACK_TO_LIST), children: /* @__PURE__ */ e("svg", { viewBox: Ye.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Ye.strokeWidth, strokeLinecap: Ye.strokeLinecap, children: /* @__PURE__ */ e("path", { d: Ye.path }) }) }),
        /* @__PURE__ */ e("div", { className: "divider" }),
        /* @__PURE__ */ e("h1", { children: c(a.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ u("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          H,
          {
            className: "action-btn warn",
            variant: "text",
            icon: /* @__PURE__ */ e(kr, { size: 16 }),
            onClick: W,
            children: c(a.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(H, { variant: "text", theme: "danger", onClick: () => C.requestConfirm(), icon: /* @__PURE__ */ e(Pr, {}), children: c(a.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ u("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Yi,
        {
          liveControlSlots: i,
          liveInfo: m,
          liveId: n || "",
          activeTab: M,
          onActiveTabChange: O,
          isAllMuted: Lt,
          allMuteLoading: x.loading,
          onAllMuteChange: Wt,
          memberManagementHook: J,
          onOpenAudienceDropdown: It,
          onOpenMutedModal: () => {
            J.fetchMutedList(), X(!0);
          },
          onOpenBannedModal: () => {
            J.fetchBannedList(), w(!0);
          },
          onLeaveLive: mt,
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
            updateTimeText: pe,
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
            moderationAvailable: I,
            updateTimeText: pe,
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
    j && /* @__PURE__ */ e(
      "div",
      {
        ref: R,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: j.y,
          left: j.x - 160
        },
        children: /* @__PURE__ */ u(
          "button",
          {
            className: "dropdown-item",
            onClick: () => {
              const k = j.item;
              et(), ae.handleBypassCorrection(k);
            },
            children: [
              /* @__PURE__ */ e(Dt, { size: 14 }),
              c(a.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (z == null ? void 0 : z.visible) && /* @__PURE__ */ u(
      "div",
      {
        ref: G,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: z.y,
          left: z.x - 160
        },
        children: [
          /* @__PURE__ */ e("div", { className: "dropdown-header", children: z.userName }),
          /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
          z.isMuted ? /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item",
              onClick: () => {
                J.handleMuteAudience(
                  z.userId,
                  z.userName,
                  !0
                ), $e();
              },
              children: [
                /* @__PURE__ */ e(Dt, { size: 14 }),
                c(a.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ u(
            "button",
            {
              className: "dropdown-item",
              onClick: () => {
                J.handleMuteAudience(
                  z.userId,
                  z.userName,
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
                J.handleBanAudience(
                  z.userId,
                  z.userName,
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
        bannedModalVisible: q,
        mutedList: J.mutedList,
        bannedList: J.bannedList,
        memberListLoading: J.memberListLoading,
        getUserAvatar: _t,
        getUserNameFromCache: bt,
        onMutedModalClose: () => X(!1),
        onBannedModalClose: () => w(!1),
        onUnmuteFromList: J.handleUnmuteFromList,
        onUnbanFromList: J.handleUnbanFromList,
        t: c
      }
    ),
    (() => {
      const k = C.confirmDialog || x.confirmDialog;
      if (!k) return null;
      const ce = !!C.confirmDialog ? C : x;
      return /* @__PURE__ */ e(
        ge,
        {
          visible: !0,
          header: k.title,
          onClose: () => ce.cancelConfirm(),
          width: be.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ u(he, { children: [
            /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => ce.cancelConfirm(), children: c(a.CANCEL) }),
            /* @__PURE__ */ e(
              H,
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
      Jr,
      {
        visible: Y.visible,
        liveId: Y.liveId,
        liveName: Y.liveName,
        onVisibleChange: (k) => y((re) => ({ ...re, visible: k }))
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
  visible: n,
  isEdit: r,
  editingId: t,
  formData: i,
  submitting: c,
  uploadEnabled: o,
  onFormDataChange: s,
  onSubmit: p,
  onClose: l
}) {
  var P, F, z;
  const { t: d } = ve();
  (P = Ct().components) == null || P.giftConfig;
  const f = te(null), g = te(null), [v, h] = _(!1), [N, m] = _(!1), [L, T] = _(!1), [E, M] = _(!1), O = () => {
    var D, Z;
    (D = f.current) == null || D.reset(), (Z = g.current) == null || Z.reset(), h(!1), m(!1);
  }, b = () => {
    O(), l();
  }, A = async () => {
    var q, w, I, C, x;
    if (!i.id.trim()) {
      $.error(d(a.ENTER_GIFT_ID));
      return;
    }
    if (V(i.id) > Ze) {
      $.error(d(a.GIFT_ID_MAX_BYTES, { max: Ze }));
      return;
    }
    if (!i.name.trim()) {
      $.error(d(a.ENTER_GIFT_NAME));
      return;
    }
    if (V(i.name) > Me) {
      $.error(d(a.GIFT_NAME_MAX_BYTES, { max: Me }));
      return;
    }
    if (i.description && V(i.description) > Oe) {
      $.error(d(a.GIFT_DESC_MAX_BYTES, { max: Oe }));
      return;
    }
    const D = parseInt(i.level);
    if (i.level && !isNaN(D) && (D < at || D > it)) {
      $.error(d(a.GIFT_LEVEL_RANGE, { min: at, max: it }));
      return;
    }
    if (i.price < Je || i.price > nt) {
      $.error(d(a.GIFT_PRICE_RANGE, { min: Je, max: nt }));
      return;
    }
    const Z = ((q = f.current) == null ? void 0 : q.isUrlInputMode) ?? !0, X = Z && (((C = (I = (w = f.current) == null ? void 0 : w.urlInputValue) == null ? void 0 : I.trim) == null ? void 0 : C.call(I)) || "");
    if (!v && !i.iconUrl.trim() && !X) {
      Z && ((x = f.current) == null || x.setUrlError(d(a.ENTER_THUMBNAIL_URL))), $.error(d(a.UPLOAD_THUMBNAIL_OR_ENTER_URL));
      return;
    }
    if (i.extensionInfo.trim()) {
      try {
        JSON.parse(i.extensionInfo.trim());
      } catch {
        $.error(d(a.EXTENSION_INFO_JSON_FORMAT));
        return;
      }
      if (new TextEncoder().encode(i.extensionInfo.trim()).length > 100) {
        $.error(d(a.EXTENSION_INFO_MAX_BYTES, { max: 100 }));
        return;
      }
    }
    try {
      let Y, y;
      try {
        [Y, y] = await oa([
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
      } catch (G) {
        $.error(G instanceof sr ? G.message : d(a.OPERATION_FAILED, { error: G.message || d(a.UNKNOWN_HOST) }));
        return;
      }
      const W = {
        ...i,
        iconUrl: Y,
        animationUrl: y
      };
      s(W), await p();
    } catch (Y) {
      $.error(d(a.OPERATION_FAILED, { error: Y.ErrorInfo || Y.message || d(a.UNKNOWN_HOST) }));
    }
  };
  return /* @__PURE__ */ e(
    ge,
    {
      destroyOnClose: !0,
      visible: n,
      header: d(r ? a.EDIT_GIFT : a.CREATE_GIFT),
      onClose: b,
      width: be.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ u(he, { children: [
        /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: b, children: d(a.CANCEL) }),
        /* @__PURE__ */ e(
          H,
          {
            shape: "round",
            theme: "primary",
            onClick: A,
            disabled: c || !r && !i.id || !i.name.trim() || ((F = f.current) == null ? void 0 : F.isValidating) || ((z = g.current) == null ? void 0 : z.isValidating) || L || E,
            children: d(c ? r ? a.SAVING : a.CREATING : r ? a.SAVE : a.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        !r && /* @__PURE__ */ e(ue, { label: d(a.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.id,
              onChange: (D) => s({ ...i, id: String(D) }),
              placeholder: d(a.ENTER_GIFT_ID),
              status: V(i.id) > Ze ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(i.id) > Ze ? " byte-overflow" : ""}`, children: [
                V(i.id),
                "/",
                Ze
              ] })
            }
          ),
          V(i.id) > Ze && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift ID max bytes", { max: Ze }) })
        ] }) }),
        /* @__PURE__ */ e(ue, { label: d(a.GIFT_PRICE), requiredMark: !0, children: /* @__PURE__ */ e(
          Jt,
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
        /* @__PURE__ */ e(ue, { label: d(a.GIFT_LEVEL), children: /* @__PURE__ */ e(
          Jt,
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
        /* @__PURE__ */ e(ue, { label: d(a.THUMBNAIL), requiredMark: !0, children: /* @__PURE__ */ e(
          Pt,
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
            onUrlErrorChange: T
          }
        ) }),
        /* @__PURE__ */ e(ue, { label: d(a.GIFT_MATERIAL), children: /* @__PURE__ */ e(
          Pt,
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
            onUrlErrorChange: M
          }
        ) }),
        /* @__PURE__ */ e(ue, { label: d(a.GIFT_NAME), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.name,
              onChange: (D) => s({ ...i, name: String(D) }),
              placeholder: d(a.ENTER_GIFT_NAME),
              status: V(i.name) > Me ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(i.name) > Me ? " byte-overflow" : ""}`, children: [
                V(i.name),
                "/",
                Me
              ] })
            }
          ),
          V(i.name) > Me && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift name max bytes", { max: Me }) })
        ] }) }),
        /* @__PURE__ */ e(ue, { label: d(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.description,
              onChange: (D) => s({ ...i, description: String(D) }),
              placeholder: d(a.ENTER_GIFT_DESCRIPTION),
              status: V(i.description) > Oe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(i.description) > Oe ? " byte-overflow" : ""}`, children: [
                V(i.description),
                "/",
                Oe
              ] })
            }
          ),
          V(i.description) > Oe && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift desc max bytes", { max: Oe }) })
        ] }) }),
        /* @__PURE__ */ e(ue, { label: d(a.CUSTOM_EXTENSION_INFO), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ u("div", { className: "textarea-count-wrapper", children: [
            /* @__PURE__ */ e(
              Nn,
              {
                value: i.extensionInfo,
                onChange: (D) => s({ ...i, extensionInfo: String(D) }),
                placeholder: 'JSON 格式例如：{"key":"value"}',
                autosize: { minRows: 3 },
                status: V(i.extensionInfo) > ft ? "error" : "default"
              }
            ),
            /* @__PURE__ */ u("span", { className: `textarea-suffix-count${V(i.extensionInfo) > ft ? " byte-overflow" : ""}`, children: [
              V(i.extensionInfo),
              "/",
              ft
            ] })
          ] }),
          V(i.extensionInfo) > ft && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Extension info max bytes", { max: ft }) })
        ] }) })
      ] })
    },
    `gift-edit-${t}`
  );
}
function ao({
  visible: n,
  editingId: r,
  giftLangConfig: t,
  onClose: i,
  onEditLang: c,
  onClearLang: o
}) {
  const { t: s } = ve();
  return /* @__PURE__ */ e(
    ge,
    {
      visible: n,
      header: s(a.GIFT_MULTILINGUAL_CONFIG),
      onClose: i,
      width: be.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: i, children: s(a.CLOSE) }),
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
          /* @__PURE__ */ e("tbody", { children: Kr.map((p) => {
            const l = t[p], d = Pe[p];
            return /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ e("td", { children: s(d.label) }),
              /* @__PURE__ */ e("td", { className: "gift-lang-table-cell-name", children: l.name || /* @__PURE__ */ e("span", { className: "gift-lang-table-empty", children: s(a.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ e("td", { className: "gift-lang-table-cell-desc", children: l.description || /* @__PURE__ */ e("span", { className: "gift-lang-table-empty", children: s(a.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(
                Ke,
                {
                  actions: [
                    {
                      key: "edit",
                      label: s(a.EDIT),
                      onClick: () => r && c(r, p)
                    },
                    {
                      key: "clear",
                      label: s(a.CLEAR),
                      danger: !0,
                      disabled: !l.name && !l.description,
                      onClick: () => r && o(r, p)
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
  visible: n,
  editingGiftForLang: r,
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
      visible: n && !!t,
      header: t ? p(a.EDIT_GIFT_LANGUAGE_INFO, { lang: p(Pe[t].label) }) : "",
      onClose: s,
      width: be.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ u(he, { children: [
        /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: s, children: p(a.CANCEL) }),
        /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: o, children: p("Save") })
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        /* @__PURE__ */ e(ue, { label: p(a.GIFT_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.name,
              onChange: (l) => {
                c({ ...i, name: String(l) });
              },
              placeholder: t ? p("Enter language gift name", { lang: p(Pe[t].label) }) : "",
              status: V(i.name) > Me ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(i.name) > Me ? " byte-overflow" : ""}`, children: [
                V(i.name),
                "/",
                Me
              ] })
            }
          ),
          V(i.name) > Me && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: p("Gift name max bytes", { max: Me }) })
        ] }) }),
        /* @__PURE__ */ e(ue, { label: p(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            fe,
            {
              value: i.description,
              onChange: (l) => {
                c({ ...i, description: String(l) });
              },
              placeholder: t ? p("Enter language gift description", { lang: p(Pe[t].label) }) : "",
              status: V(i.description) > Oe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(i.description) > Oe ? " byte-overflow" : ""}`, children: [
                V(i.description),
                "/",
                Oe
              ] })
            }
          ),
          V(i.description) > Oe && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: p("Gift desc max bytes", { max: Oe }) })
        ] }) })
      ] })
    },
    `lang-edit-${r}-${t}`
  );
}
const { Option: oo } = or;
function so({
  visible: n,
  editingCategoryGift: r,
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
  const { t: L } = ve();
  return /* @__PURE__ */ u(he, { children: [
    /* @__PURE__ */ e(
      ge,
      {
        visible: n && !!r,
        header: L(a.EDIT_GIFT_CATEGORY),
        onClose: N,
        width: be.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: N, children: L(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "gift-category-edit-tags", children: [
          t.map((T) => {
            const E = i.find((O) => String(O.id) === String(T)), M = (E == null ? void 0 : E.name) || T;
            return /* @__PURE__ */ u("span", { className: "gift-category-edit-tag", children: [
              M,
              /* @__PURE__ */ e("button", { className: "gift-category-edit-tag-close", onClick: () => d(T), children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, T);
          }),
          /* @__PURE__ */ e("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ u(H, { variant: "text", theme: "primary", onClick: () => v(!s), children: [
            "+ ",
            L(a.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: s,
        header: L(a.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ e(H, { shape: "round", theme: "primary", disabled: !o, onClick: f, children: L(a.CONFIRM) }),
        children: /* @__PURE__ */ u("div", { className: "category-select-list", children: [
          /* @__PURE__ */ e(
            or,
            {
              value: o,
              onChange: (T) => g(String(T)),
              placeholder: L(a.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: c.map((T) => /* @__PURE__ */ e(oo, { value: T.id, label: T.name }, T.id))
            }
          ),
          c.length === 0 && /* @__PURE__ */ e("div", { className: "category-select-empty", children: L(a.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: p,
        header: L(a.CONFIRM_REMOVE_CATEGORY),
        onClose: m,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: m, children: L(a.CANCEL) }),
          /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: h, children: L(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: L(a.REMOVE_CATEGORY_DESCRIPTION) })
      }
    )
  ] });
}
function co({
  visible: n,
  deletingItem: r,
  onConfirm: t,
  onClose: i
}) {
  const { t: c } = ve();
  return /* @__PURE__ */ e(
    ge,
    {
      visible: n && !!r,
      header: c(a.CONFIRM_DELETE_GIFT),
      onClose: i,
      width: be.GIFT_DELETE,
      footer: /* @__PURE__ */ u(he, { children: [
        /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: i, children: c(a.CANCEL) }),
        /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: t, children: c(a.DELETE) })
      ] }),
      children: /* @__PURE__ */ e("p", { children: c(a.CANNOT_UNDO_AFTER_DELETE) })
    }
  );
}
function lo() {
  var t;
  const { t: n } = Ai(), r = (t = Ct().components) == null ? void 0 : t.giftConfig;
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
        title: n(a.THUMBNAIL),
        width: 100,
        className: "col-thumbnail",
        render: (f) => /* @__PURE__ */ e("div", { className: "gift-thumbnail", children: f.iconUrl ? /* @__PURE__ */ e("img", { src: f.iconUrl, alt: f.name || "gift" }) : /* @__PURE__ */ e("span", { children: "🎁" }) })
      },
      {
        key: "name",
        title: n(a.NAME),
        fitContent: !0,
        flexible: !0,
        minWidth: 80,
        maxWidth: 180,
        className: "col-name",
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-name", children: f.name || "-" })
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
        render: (f) => /* @__PURE__ */ e("span", { children: f.description || "-" })
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
          var g;
          return /* @__PURE__ */ u("div", { className: "gift-category-cell", onClick: () => s(f), children: [
            /* @__PURE__ */ e("span", { children: ((g = f.categories) == null ? void 0 : g.join(", ")) || "-" }),
            /* @__PURE__ */ e(Zt, { className: "gift-category-edit-icon", size: 14 })
          ] });
        }
      },
      {
        key: "languageList",
        title: n(a.MULTILINGUAL_CONFIG),
        width: 180,
        className: "gift-col-lang",
        render: (f) => /* @__PURE__ */ u("div", { className: "gift-lang-tags", children: [
          f.languageList && f.languageList.length > 0 ? f.languageList.map((g) => {
            const v = sa(g), h = $r[v], N = h ? Pe[h] : null;
            return /* @__PURE__ */ e(
              "span",
              {
                className: "gift-lang-tag",
                onClick: () => h && p(f.id, h),
                children: N ? n(N.label) : v
              },
              v
            );
          }) : /* @__PURE__ */ e("span", { className: "gift-lang-empty", children: "-" }),
          /* @__PURE__ */ e(
            Zt,
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
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-price", children: f.price ?? 0 })
      },
      {
        key: "createdAt",
        title: n(a.CREATE_TIME),
        width: 180,
        className: "gift-col-time",
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-create-time", children: ca(f.createdAt) })
      }
    ];
    return r != null && r.giftTableExtraColumns && d.push({
      key: "customer-extra",
      title: "",
      width: 160,
      className: "gift-col-customer-extra",
      render: (f) => /* @__PURE__ */ e(De, { slot: r.giftTableExtraColumns, props: { gift: f } })
    }), d.push({
      key: "actions",
      title: n(a.ACTIONS),
      fitContent: !0,
      minWidth: 120,
      maxWidth: 320,
      className: "gift-col-action",
      render: (f) => /* @__PURE__ */ u(he, { children: [
        /* @__PURE__ */ e(
          Ke,
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
        /* @__PURE__ */ e(De, { slot: r == null ? void 0 : r.giftRowActions, props: { gift: f } })
      ] })
    }), d;
  };
}
function Mo() {
  const { t: n } = ve(), r = jr(), t = yt(), i = lo(), c = te(null);
  c.current || (c.current = new la({
    actions: r,
    t: n,
    toast: $,
    onNavigateToCategoryManagement: () => t("/gift-category")
  }));
  const o = c.current, s = er(o.subscribe, o.getState, o.getState);
  ee(() => (o.init(), () => o.dispose()), []), ee(() => {
    const j = () => o.onLanguageChanged();
    return Ot.on("languageChanged", j), () => {
      Ot.off("languageChanged", j);
    };
  }, [o]);
  const [p, l] = _(!1), [d, f] = _(!1);
  ee(() => {
    qr().then(f);
  }, []);
  const [g, v] = _(xr), [h, N] = _(!1), m = te(null), {
    loading: L,
    displayList: T,
    searchInput: E,
    dialogVisible: M,
    isEdit: O,
    editingId: b,
    langConfigVisible: A,
    giftLangConfig: P,
    langEditVisible: F,
    editingLang: z,
    editingGiftForLang: D,
    langEditForm: Z,
    categoryEditVisible: X,
    editingCategoryGift: q,
    allCategories: w,
    giftCategoryIds: I,
    selectedCategoryId: C,
    categoryDeleteVisible: x,
    deletingCategoryId: Y,
    deleteDialogVisible: y,
    deletingItem: W
  } = s, G = w.filter((j) => !I.includes(j.id)), R = () => {
    v(xr), o.openCreateDialog();
  }, U = (j) => {
    v({
      id: j.id,
      name: j.name,
      iconUrl: j.iconUrl,
      price: j.price,
      animationUrl: j.animationUrl || "",
      level: j.level || "",
      description: j.description || "",
      extensionInfo: j.extensionInfo || "",
      enabled: j.enabled ?? !0
    }), o.openEditDialog(j);
  }, B = async () => {
    l(!0);
    try {
      await o.submitGift({
        id: g.id,
        name: g.name,
        iconUrl: g.iconUrl,
        price: g.price,
        animationUrl: g.animationUrl,
        enabled: g.enabled,
        level: g.level || void 0,
        description: g.description,
        extensionInfo: g.extensionInfo
      });
    } catch {
    } finally {
      l(!1);
    }
  }, ne = async () => {
    await o.confirmAddCategory(), N(!1);
  }, oe = i({
    onEdit: U,
    onDelete: (j) => o.requestDelete(j),
    onOpenCategoryEdit: (j) => o.openCategoryEditDialog(j),
    onOpenLangEdit: (j, me) => void o.openLangEditDialog(j, me),
    onOpenGiftLangConfig: (j) => void o.openGiftLangConfigDialog(j),
    onCopyId: (j) => o.copyGiftId(j)
  });
  return /* @__PURE__ */ u("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ e("h1", { className: "gift-config-title", children: n(a.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ u("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ e(
          fe,
          {
            value: E,
            onChange: (j) => o.setSearchInput(String(j ?? "")),
            onEnter: () => {
              if (o.isSearchInputTooLong()) {
                $.error(n(a.INPUT_TOO_LONG));
                return;
              }
              o.search();
            },
            clearable: !0,
            onClear: () => o.clearSearch(),
            placeholder: n(a.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ e(tr, { size: 16 }),
            className: "gift-config-search-input",
            status: Cr(E, yr) ? "error" : "default",
            tips: Cr(E, yr) ? n(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: () => o.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ e(fn, {}), children: n(a.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ u(H, { shape: "round", onClick: R, theme: "primary", children: [
          "＋ ",
          n(a.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e(Wr, { className: "gift-list-card", ref: m, children: /* @__PURE__ */ e(
      Gt,
      {
        columns: oe,
        data: T,
        rowKey: "id",
        loading: L,
        tableClassName: "gift-table",
        bodyClassName: "gift-list-content",
        rowClassName: "gift-row",
        loadingNode: /* @__PURE__ */ u("div", { className: "gift-loading-container", children: [
          /* @__PURE__ */ e("div", { className: "gift-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "gift-loading-text", children: n(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "gift-empty-container", children: /* @__PURE__ */ e("span", { className: "gift-empty-text", children: n(a.NO_GIFT_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ e(
      no,
      {
        visible: M,
        isEdit: O,
        editingId: b,
        formData: g,
        submitting: p,
        uploadEnabled: d,
        onFormDataChange: v,
        onSubmit: B,
        onClose: () => o.closeDialog()
      }
    ),
    /* @__PURE__ */ e(
      ao,
      {
        visible: A,
        editingId: b,
        giftLangConfig: P,
        onClose: () => o.closeGiftLangConfigDialog(),
        onEditLang: (j, me) => void o.openLangEditDialog(j, me),
        onClearLang: (j, me) => void o.clearLang(j, me)
      }
    ),
    /* @__PURE__ */ e(
      io,
      {
        visible: F,
        editingGiftForLang: D,
        editingLang: z,
        langEditForm: Z,
        onFormChange: (j) => o.setLangEditForm(j),
        onSave: () => void o.saveLangEdit(),
        onClose: () => o.closeLangEditDialog()
      }
    ),
    /* @__PURE__ */ e(
      so,
      {
        visible: X,
        editingCategoryGift: q,
        giftCategoryIds: I,
        allCategories: w,
        availableCategories: G,
        selectedCategoryId: C,
        categoryAddPopVisible: h,
        categoryDeleteVisible: x,
        deletingCategoryId: Y,
        onRemoveCategory: (j) => o.requestRemoveCategory(j),
        onAddCategoryConfirm: ne,
        onSelectCategory: (j) => o.setSelectedCategoryId(j),
        onToggleAddPop: N,
        onConfirmRemoveCategory: () => void o.confirmRemoveCategory(),
        onClose: () => o.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => o.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ e(
      co,
      {
        visible: y,
        deletingItem: W,
        onConfirm: () => void o.confirmDelete(),
        onClose: () => o.cancelDelete()
      }
    )
  ] });
}
function Oo() {
  const { t: n } = ve(), r = yt(), t = jr(), i = te(null);
  i.current || (i.current = new da({
    actions: {
      fetchGiftList: t.fetchGiftList,
      createGiftCategory: t.createGiftCategory,
      updateGiftCategory: t.updateGiftCategory,
      deleteGiftCategory: t.deleteGiftCategory,
      getGiftCategoryLanguage: t.getGiftCategoryLanguage,
      setGiftCategoryLanguage: t.setGiftCategoryLanguage,
      deleteGiftCategoryLanguage: t.deleteGiftCategoryLanguage
    },
    t: n,
    toast: $,
    onNavigateBack: () => r("/gift-config")
  }));
  const c = i.current, o = er(c.subscribe, c.getState, c.getState);
  ee(() => (c.init(), () => c.dispose()), []), ee(() => {
    const h = () => c.onLanguageChanged();
    return Ot.on("languageChanged", h), () => {
      Ot.off("languageChanged", h);
    };
  }, [c]);
  const [s, p] = _(!1), l = te(null), [d, f] = _(600);
  ee(() => {
    const h = () => {
      if (!l.current) return;
      const m = window.innerHeight, L = l.current.closest(".gift-category-table-wrapper");
      if (!L) return;
      const T = L.getBoundingClientRect(), E = m - T.top - 60 - 24;
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
      $.error(n(a.ENTER_CATEGORY_ID));
      return;
    }
    if (!N.trim()) {
      $.error(n(a.ENTER_CATEGORY_NAME));
      return;
    }
    p(!0);
    try {
      await c.submitForm({
        categoryId: h.trim(),
        name: N.trim(),
        description: m.trim()
      });
    } catch {
    } finally {
      p(!1);
    }
  }, v = async () => {
    const { langEditForm: h } = o;
    if (h.name && V(h.name) > we) {
      $.error(n("Category name max bytes", { max: we }));
      return;
    }
    if (h.description && V(h.description) > Re) {
      $.error(n("Category desc max bytes", { max: Re }));
      return;
    }
    await c.saveLangEdit();
  };
  return /* @__PURE__ */ u("div", { className: "gift-category-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-category-page-header", children: [
      /* @__PURE__ */ u("div", { className: "gift-category-title-section", children: [
        /* @__PURE__ */ e(
          H,
          {
            shape: "square",
            variant: "text",
            className: "back-btn",
            onClick: () => c.goBack(),
            icon: /* @__PURE__ */ e("svg", { viewBox: Ye.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Ye.strokeWidth, strokeLinecap: Ye.strokeLinecap, children: /* @__PURE__ */ e("path", { d: Ye.path }) })
          }
        ),
        /* @__PURE__ */ e("h1", { children: n("Category Management") })
      ] }),
      /* @__PURE__ */ e("div", { className: "gift-category-actions", children: /* @__PURE__ */ u("div", { className: `create-category-btn-wrapper${o.categoryList.length >= Ht ? " disabled" : ""}`, children: [
        /* @__PURE__ */ u(
          H,
          {
            shape: "round",
            theme: "primary",
            onClick: () => c.openCreateDialog(),
            disabled: o.categoryList.length >= Ht,
            children: [
              "＋ ",
              n("Add Category")
            ]
          }
        ),
        o.categoryList.length >= Ht && /* @__PURE__ */ e("div", { className: "create-category-tooltip", children: n("Category limit reached") })
      ] }) })
    ] }),
    /* @__PURE__ */ e("div", { className: "gift-category-table-wrapper", ref: l, children: /* @__PURE__ */ e(
      Gt,
      {
        columns: [
          {
            key: "id",
            title: n("Category ID"),
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
            title: n("Category Name"),
            className: "col-name",
            render: (h) => /* @__PURE__ */ e("span", { className: "category-name", children: h.name || "-" })
          },
          {
            key: "description",
            title: n("Category Description"),
            className: "col-desc",
            render: (h) => /* @__PURE__ */ e("span", { className: "category-desc", children: h.description || "-" })
          },
          {
            key: "languageList",
            title: n(a.MULTILINGUAL_CONFIG),
            width: 200,
            className: "col-languages",
            render: (h) => /* @__PURE__ */ u("div", { className: "category-lang-tags", children: [
              h.languageList && h.languageList.length > 0 ? h.languageList.map((N) => {
                const m = typeof N == "string" ? N : N.language || "", L = $r[m], T = L ? Pe[L] : null;
                return /* @__PURE__ */ e(
                  "span",
                  {
                    className: "category-lang-tag",
                    onClick: () => h && L && c.openLangEditDialog(h.id, L),
                    children: T ? n(T.label) : m
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
            title: n("Number of Gifts"),
            width: 80,
            className: "col-count",
            render: (h) => /* @__PURE__ */ e("span", { className: "category-count", children: h.giftCount ?? 0 })
          },
          {
            key: "actions",
            title: n(a.ACTIONS),
            fitContent: !0,
            minWidth: 100,
            maxWidth: 220,
            className: "col-actions",
            render: (h) => /* @__PURE__ */ e(
              Ke,
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
          /* @__PURE__ */ e("div", { className: "category-loading-spinner" }),
          /* @__PURE__ */ e("span", { className: "category-loading-text", children: n(a.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ e("div", { className: "category-empty-container", children: /* @__PURE__ */ e("span", { className: "category-empty-text", children: n("Create category first") }) })
      }
    ) }),
    /* @__PURE__ */ e(
      ge,
      {
        visible: o.dialogVisible,
        header: o.isEdit ? n(a.EDIT_CATEGORY) : n(a.CREATE_CATEGORY),
        onClose: () => c.closeDialog(),
        width: be.CATEGORY_FORM,
        placement: "center",
        className: "category-dialog",
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => c.closeDialog(), children: n(a.CANCEL) }),
          /* @__PURE__ */ e(
            H,
            {
              shape: "round",
              theme: "primary",
              onClick: g,
              disabled: s || !o.formData.categoryId.trim() || !o.formData.name.trim(),
              children: s ? n("Creating...") : o.isEdit ? n("Save") : n("Create")
            }
          )
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ e(ue, { label: n("Category ID"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.formData.categoryId,
                onChange: (h) => c.setFormData({ categoryId: String(h) }),
                placeholder: n("Enter category ID"),
                disabled: o.isEdit,
                status: V(o.formData.categoryId) > gt ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(o.formData.categoryId) > gt ? " byte-overflow" : ""}`, children: [
                  V(o.formData.categoryId),
                  "/",
                  gt
                ] })
              }
            ),
            V(o.formData.categoryId) > gt && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: n("Category ID max bytes", { max: gt }) })
          ] }) }),
          /* @__PURE__ */ e(ue, { label: n("Category Name"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.formData.name,
                onChange: (h) => c.setFormData({ name: String(h) }),
                placeholder: n("Enter category name"),
                status: V(o.formData.name) > we ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(o.formData.name) > we ? " byte-overflow" : ""}`, children: [
                  V(o.formData.name),
                  "/",
                  we
                ] })
              }
            ),
            V(o.formData.name) > we && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: n("Category name max bytes", { max: we }) })
          ] }) }),
          /* @__PURE__ */ e(ue, { label: n(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.formData.description,
                onChange: (h) => c.setFormData({ description: String(h) }),
                placeholder: n("Enter category description"),
                status: V(o.formData.description) > Re ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(o.formData.description) > Re ? " byte-overflow" : ""}`, children: [
                  V(o.formData.description),
                  "/",
                  Re
                ] })
              }
            ),
            V(o.formData.description) > Re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: n("Category desc max bytes", { max: Re }) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: o.langConfigVisible,
        header: n(a.CATEGORY_MULTILINGUAL_CONFIG),
        onClose: () => c.closeLangConfigDialog(),
        width: be.GIFT_LANG_CONFIG,
        placement: "center",
        className: "category-lang-config-dialog",
        footer: /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: () => c.closeLangConfigDialog(), children: n(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "category-lang-config-container", children: [
          /* @__PURE__ */ u("div", { className: "category-lang-config-info-banner", children: [
            /* @__PURE__ */ u("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
              /* @__PURE__ */ e("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
              /* @__PURE__ */ e("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
              /* @__PURE__ */ e("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
            ] }),
            /* @__PURE__ */ e("span", { children: n(a.CATEGORY_MULTILINGUAL_CONFIG_TIP) })
          ] }),
          /* @__PURE__ */ u("table", { className: "category-lang-config-table", children: [
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ u("tr", { children: [
              /* @__PURE__ */ e("th", { children: n(a.LANGUAGE_TYPE) }),
              /* @__PURE__ */ e("th", { children: n(a.CATEGORY_NAME) }),
              /* @__PURE__ */ e("th", { children: n(a.CATEGORY_DESCRIPTION) }),
              /* @__PURE__ */ e("th", { children: n(a.ACTIONS) })
            ] }) }),
            /* @__PURE__ */ e("tbody", { children: Kr.map((h) => {
              const N = o.categoryLangConfig[h], m = Pe[h];
              return /* @__PURE__ */ u("tr", { children: [
                /* @__PURE__ */ e("td", { children: n(m.label) }),
                /* @__PURE__ */ e("td", { className: "category-lang-table-cell-name", children: N.name || /* @__PURE__ */ e("span", { className: "category-lang-table-empty", children: n(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ e("td", { className: "category-lang-table-cell-desc", children: N.description || /* @__PURE__ */ e("span", { className: "category-lang-table-empty", children: n(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(
                  Ke,
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
    /* @__PURE__ */ e(
      ge,
      {
        destroyOnClose: !0,
        visible: o.langEditVisible && !!o.editingLang,
        header: o.editingLang ? n(a.EDIT_CATEGORY_LANGUAGE_INFO, { lang: n(Pe[o.editingLang].label) }) : "",
        onClose: () => c.closeLangEditDialog(),
        width: be.GIFT_EDIT,
        placement: "center",
        className: "category-lang-edit-modal",
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => c.closeLangEditDialog(), children: n(a.CANCEL) }),
          /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: v, children: n(a.SAVE) })
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ e(ue, { label: n(a.CATEGORY_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.langEditForm.name,
                onChange: (h) => c.setLangEditForm({ name: String(h) }),
                placeholder: o.editingLang ? n(a.ENTER_LANGUAGE_CATEGORY_NAME, { lang: n(Pe[o.editingLang].label) }) : "",
                status: V(o.langEditForm.name) > we ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(o.langEditForm.name) > we ? " byte-overflow" : ""}`, children: [
                  V(o.langEditForm.name),
                  "/",
                  we
                ] })
              }
            ),
            V(o.langEditForm.name) > we && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: n(a.CATEGORY_NAME_MAX_BYTES, { max: we }) })
          ] }) }),
          /* @__PURE__ */ e(ue, { label: n(a.CATEGORY_DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              fe,
              {
                value: o.langEditForm.description,
                onChange: (h) => c.setLangEditForm({ description: String(h) }),
                placeholder: o.editingLang ? n(a.ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: n(Pe[o.editingLang].label) }) : "",
                status: V(o.langEditForm.description) > Re ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${V(o.langEditForm.description) > Re ? " byte-overflow" : ""}`, children: [
                  V(o.langEditForm.description),
                  "/",
                  Re
                ] })
              }
            ),
            V(o.langEditForm.description) > Re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: n(a.CATEGORY_DESC_MAX_BYTES, { max: Re }) })
          ] }) })
        ] })
      },
      `cat-lang-edit-${o.editingCategoryForLang}-${o.editingLang ?? ""}`
    ),
    /* @__PURE__ */ e(
      ge,
      {
        visible: o.deleteDialogVisible && !!o.deletingItem,
        header: n(a.CONFIRM_DELETE_CATEGORY),
        onClose: () => c.cancelDelete(),
        width: be.GIFT_DELETE,
        placement: "center",
        footer: /* @__PURE__ */ u(he, { children: [
          /* @__PURE__ */ e(H, { shape: "round", variant: "outline", onClick: () => c.cancelDelete(), children: n(a.CANCEL) }),
          /* @__PURE__ */ e(H, { shape: "round", theme: "primary", onClick: () => c.confirmDelete(), children: n(a.DELETE) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: n(a.CANNOT_UNDO_AFTER_DELETE) })
      }
    )
  ] });
}
let Ne = null, ot = !1, le = null;
const Nt = /* @__PURE__ */ new Set();
function uo() {
  return le || (le = new ya({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: n, pageCursors: r, count: t }) => {
      if (!Ne)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const c = await ha({
        page: n,
        pageCursors: r,
        pageSize: t
      });
      return {
        list: c.lives,
        pageCursors: c.pageCursors,
        hasMoreData: c.hasMoreData
      };
    }
  }), le.subscribe((n) => {
    ot && Nt.forEach((r) => r(n));
  }), le);
}
function ho(n) {
  return Nt.add(n), le && n(le.getSnapshot()), () => {
    Nt.delete(n);
  };
}
function ht() {
  const [n, r] = _([]), [t, i] = _(!0), [c, o] = _(null), [s, p] = _(
    () => ({ pageData: [], currentPage: 1, hasMore: !0, loading: !1 })
  ), l = te(!0);
  Ne || (Ne = new ua({
    onStateChange: (P) => {
      ot && (P.liveList !== void 0 && r(P.liveList), P.hasMore !== void 0 && i(P.hasMore), P.currentLive !== void 0 && o(P.currentLive));
    },
    getActive: () => ot
  })), uo(), ee(() => (l.current = !0, ot = !0, Nt.add(p), le && p(le.getSnapshot()), () => {
    l.current = !1, ot = !1, Nt.delete(p), setTimeout(() => {
      ot || (Ne == null || Ne.destroy(), Ne = null, le == null || le.destroy(), le = null);
    }, 100);
  }), []);
  const d = S((P) => {
    Ne == null || Ne.init(P);
  }, []), f = S(async (P) => {
    if (!le) return [];
    switch (P == null ? void 0 : P.action) {
      case "first":
        await le.goToFirstPage();
        break;
      case "prev":
        await le.prevPage();
        break;
      case "next":
      default:
        await le.nextPage();
        break;
    }
    return s.pageData;
  }, []), g = S(async (P) => Ne.createLive(P), []), v = S(async (P) => Ne.updateLive(P), []), h = S(async (P) => Ne.endLive(P), []), N = S(async (P) => Ne.fetchLiveDetail(P), []), m = S(async (P) => Ne.fetchLiveStats(P), []), L = S((P) => {
    Ne == null || Ne.setCurrentLive(P);
  }, []), T = S(async (P) => Ne.stopPlay(P), []), E = S(async (P) => Ne.startPlay(P), [T]), M = S(() => (le == null ? void 0 : le.nextPage()) ?? Promise.resolve(), []), O = S(() => (le == null ? void 0 : le.prevPage()) ?? Promise.resolve(), []), b = S(() => (le == null ? void 0 : le.goToFirstPage()) ?? Promise.resolve(), []), A = S(() => (le == null ? void 0 : le.refreshCurrentPage()) ?? Promise.resolve(), []);
  return {
    init: d,
    liveList: n,
    hasMore: t,
    currentLive: c,
    setCurrentLive: L,
    fetchLiveList: f,
    createLive: g,
    updateLive: v,
    endLive: h,
    fetchLiveDetail: N,
    fetchLiveStats: m,
    startPlay: E,
    stopPlay: T,
    paginatedList: {
      pageData: s.pageData,
      currentPage: s.currentPage,
      hasMore: s.hasMore,
      loading: s.loading,
      nextPage: M,
      prevPage: O,
      goToFirstPage: b,
      refreshCurrentPage: A
    }
  };
}
export {
  Oo as G,
  Ro as L,
  $ as M,
  Mo as a,
  wo as b,
  Ao as c,
  Ve as d,
  jr as e,
  ht as f,
  Si as g,
  Zr as h,
  Ti as i,
  Ai as j,
  ho as s,
  ur as u
};
