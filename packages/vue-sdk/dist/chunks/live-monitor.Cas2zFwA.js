import { jsx as e, jsxs as u, Fragment as ue } from "react/jsx-runtime";
import * as Ge from "react";
import st, { useState as b, useRef as te, useEffect as ee, useCallback as T, isValidElement as tn, createElement as rn, Component as nn, useMemo as _e, forwardRef as an, useImperativeHandle as on, useLayoutEffect as mr, useSyncExternalStore as tr } from "react";
import { useUIKit as pe, i18next as Dt } from "@tencentcloud/uikit-base-component-react";
import { SearchIcon as rr, RefreshIcon as nr, FullscreenIcon as Ur, NotificationIcon as kr, StopCircleIcon as Pr, UploadIcon as pr, CloseIcon as ar, ImageIcon as sn, CutIcon as cn, ChevronDownIcon as Fr, ChevronRightIcon as ir, AddIcon as or, FileCopyIcon as He, DeleteIcon as ln, EditIcon as Jt, InfoCircleIcon as Be, LoginIcon as dn, CheckCircleIcon as xt, ChatOffIcon as Gr, UserCheckedIcon as un, UserBlockedIcon as Vr, MoreIcon as hn, CloseCircleIcon as mn, ChevronLeftIcon as pn, AdjustmentIcon as fn } from "tdesign-icons-react";
import { MessagePlugin as At, Dialog as me, Button as K, Input as he, Select as sr, InputNumber as Qt, Checkbox as gn, Card as Wr, Tabs as Bt, Switch as vn, Tooltip as xe, Loading as En, Textarea as Nn } from "tdesign-react";
import { s as Cn, ax as yn, av as _n, aG as G, H as Nt, aM as bn, bq as zr, br as Br, b as In, W as Ln, aZ as Hr, a$ as Sn, Z as Tn, bL as wn, be as fr, bJ as An, bI as Rn, bH as Mn, bm as On, bd as Dn, am as xn, bl as Un, bg as kn, aI as Pn, Y as Fn, aj as gr, A as je, J as ke, aH as Gn, aY as Vn, b1 as Wn, b4 as Ut, g as Ue, ah as zn, bs as Yr, t as cr, $ as Bn, ak as vr, V as Er, as as Hn, bG as Yn, ac as Kn, aJ as $n, N as qn, aT as Xn, a1 as jn, aC as Zn, X as Ht, b7 as Jn, bk as Qn, aW as Ot, a3 as ea, a8 as ta, R as Rt, a6 as ra, b0 as na, aL as tt, i as aa, b9 as Nr, D as ia, a as Ye, n as Ze, o as Me, l as Oe, m as gt, bt as oa, v as Kr, w as Pe, aP as sa, u as $r, aF as ca, r as la, b6 as Cr, p as yr, q as da, P as Yt, d as vt, e as Ae, C as Re, O as ua, aw as ha } from "./main-layout.Dw3RNEcP.js";
import { c as ma, g as pa, s as lr, a as fa, D as ga, d as va, e as Ea, m as Na, b as Ca, P as ya } from "./gift-category.zxl1tGwe.js";
import { aT as _a, a3 as ba, b as Ia, e as La, ap as Sa, aM as Ta, c as wa, aL as Aa, b9 as Ra, aY as a, b8 as Ma, b2 as Kt, D as yt, b3 as dr, i as Oa, h as Da, b5 as xa, aX as be, ax as ur, aR as _r, X as lt, aI as Ua, W as qr, aA as ka, d as Pa } from "./upload.HR7xdC-w.js";
import { c as Fa } from "./config.BhtXZwQl.js";
import { E as kt } from "./error.HinSWumo.js";
import { useNavigate as _t, useParams as Ga } from "react-router-dom";
import { a as Va } from "./moderation-store.DpCJ9ZU8.js";
import { useLiveListState as Wa, useLoginState as Xr, LiveListEvent as br, LiveView as za, useLiveAudienceState as Ba, BarrageList as Ha, LiveAudienceList as Ya } from "tuikit-atomicx-react";
import { c as Ka } from "./t.QkUmzvcB.js";
import { createPortal as $a } from "react-dom";
function jr() {
  const [r, n] = b([]), [t, i] = b([]), c = te(null);
  c.current || (c.current = new Cn({
    onStateChange: (y) => {
      n(y.giftList), i(y.giftCategoryList);
    }
  }));
  const o = c.current;
  ee(() => () => {
    o.destroy();
  }, [o]);
  const s = T(
    async (y) => o.fetchGiftList(y),
    [o]
  ), p = T(
    async (y) => o.createGift(y),
    [o]
  ), l = T(
    async (y) => o.updateGift(y),
    [o]
  ), d = T(
    async (y) => o.deleteGift(y),
    [o]
  ), f = T(
    async (y) => o.createGiftCategory(y),
    [o]
  ), g = T(
    async (y) => o.updateGiftCategory(y),
    [o]
  ), v = T(
    async (y) => o.deleteGiftCategory(y),
    [o]
  ), h = T(
    async (y) => o.addGiftCategoryRelations(y),
    [o]
  ), N = T(
    async (y) => o.deleteGiftCategoryRelations(y),
    [o]
  ), m = T(
    async (y) => o.getGiftLanguage(y),
    [o]
  ), S = T(
    async (y) => o.setGiftLanguage(y),
    [o]
  ), w = T(
    async (y) => o.deleteGiftLanguage(y),
    [o]
  ), E = T(
    async (y, I) => o.getGiftCategoryLanguage(y, I),
    [o]
  ), M = T(
    async (y, I, P, z) => o.setGiftCategoryLanguage(y, I, P, z),
    [o]
  ), O = T(
    async (y, I) => o.deleteGiftCategoryLanguage(y, I),
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
    setGiftLanguage: S,
    deleteGiftLanguage: w,
    getGiftCategoryLanguage: E,
    setGiftCategoryLanguage: M,
    deleteGiftCategoryLanguage: O
  };
}
function Zr(r) {
  const { liveId: n, pageSize: t } = r, [i, c] = b(!1), [o, s] = b(0), [p, l] = b([]), [d, f] = b(1), [g, v] = b(0), [h, N] = b(!1), [m, S] = b([]), [w, E] = b([]), [M, O] = b(!1), [y, I] = b(null), P = te(!0);
  ee(() => (P.current = !0, () => {
    P.current = !1;
  }), []);
  const z = T(async () => {
    try {
      const _ = await _a();
      return P.current && (c(_ > 0), s(_)), _;
    } catch (_) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", _), _;
    }
  }, []), H = T(async (_ = {}) => {
    N(!0);
    try {
      const W = await ba({ pageSize: t, liveId: n, ..._ });
      return P.current && (l(W.list || []), f(_.pageNum || 1), v(W.total || 0)), W;
    } catch (W) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", W), W;
    } finally {
      P.current && N(!1);
    }
  }, [t, n]), D = T(async (_) => {
    try {
      const W = _.items ?? (() => {
        const F = p;
        return _.ids.map((R) => {
          const U = F.find((Y) => Y.id === R);
          return {
            id: R,
            content: (U == null ? void 0 : U.content) ?? R,
            userId: (U == null ? void 0 : U.userId) ?? ""
          };
        });
      })();
      return await Ia({ ids: _.ids, items: W, liveId: _.liveId ?? n });
    } catch (W) {
      throw console.error("[useRiskControlState] approveTextModerationItems failed:", W), W;
    }
  }, [n, p]), Z = T(async (_) => {
    try {
      return await La({ content: _.keywords.join(","), liveId: n });
    } catch (W) {
      throw console.error("[useRiskControlState] bypassCorrectionKeyword failed:", W), W;
    }
  }, [n]), j = T(async () => {
    if (!n) return [];
    O(!0), I(null);
    try {
      const _ = await yn(n);
      return S(_), _;
    } catch (_) {
      throw I(_), _;
    } finally {
      O(!1);
    }
  }, [n]), X = T(async () => {
    if (!n) return [];
    O(!0), I(null);
    try {
      const _ = await _n(n);
      return E(_), _;
    } catch (_) {
      throw I(_), _;
    } finally {
      O(!1);
    }
  }, [n]), A = T(async (_) => {
    if (!n) throw new Error("liveId is required");
    O(!0), I(null);
    try {
      await Sa(n, _.memberAccounts, _.muteTime), await j();
    } catch (W) {
      throw I(W), console.error("[useRiskControlState] muteMember failed:", W), W;
    } finally {
      O(!1);
    }
  }, [n, j]), L = T(async (_) => {
    if (!n) throw new Error("liveId is required");
    O(!0), I(null);
    try {
      await Ta(n, _.memberAccounts), await j();
    } catch (W) {
      throw I(W), console.error("[useRiskControlState] unmuteMember failed:", W), W;
    } finally {
      O(!1);
    }
  }, [n, j]), C = T(async (_) => {
    if (!n) throw new Error("liveId is required");
    O(!0), I(null);
    try {
      await wa(n, _.memberAccounts, _.duration, _.reason), await X();
    } catch (W) {
      I(W);
    } finally {
      O(!1);
    }
  }, [n, X]), x = T(async (_) => {
    if (!n) throw new Error("liveId is required");
    O(!0), I(null);
    try {
      await Aa(n, _.memberAccounts), await X();
    } catch (W) {
      I(W);
    } finally {
      O(!1);
    }
  }, [n, X]), $ = T(async () => {
    if (!n) throw new Error("liveId is required");
    try {
      return await Ra(n, "default", "您的内容涉嫌违规");
    } catch (_) {
      throw console.error("[useRiskControlState] sendViolationWarning failed:", _), _;
    }
  }, [n]);
  return {
    textModerationAvailable: i,
    textModerationRemainUsage: o,
    textModerationList: p,
    textModerationPageNum: d,
    textModerationTotal: g,
    textModerationLoading: h,
    fetchTextModerationUsage: z,
    fetchTextModerationList: H,
    approveTextModerationItems: D,
    bypassCorrectionKeyword: Z,
    muteMember: A,
    unmuteMember: L,
    banMember: C,
    unbanMember: x,
    sendViolationWarning: $,
    mutedList: m,
    bannedList: w,
    memberLoading: M,
    memberError: y,
    fetchMutedList: j,
    fetchBannedList: X
  };
}
const q = {
  success: (r) => At.success(r),
  error: (r) => At.error(r),
  warning: (r) => At.error(r),
  info: (r) => At.info(r)
}, Jr = ({
  visible: r,
  liveId: n = "",
  liveName: t = "",
  onVisibleChange: i,
  onConfirm: c,
  onCancel: o
}) => {
  const { t: s } = pe(), [p, l] = b(!1), d = () => {
    l(!1), i(!1);
  }, f = async () => {
    if (!(p || !n)) {
      l(!0);
      try {
        await Ma(n, {
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
    me,
    {
      visible: r,
      header: s("Violation Warning Send Confirm"),
      confirmBtn: /* @__PURE__ */ e(
        K,
        {
          theme: "warning",
          shape: "round",
          loading: p,
          onClick: f,
          children: s(p ? "Sending" : a.CONFIRM)
        }
      ),
      cancelBtn: /* @__PURE__ */ e(
        K,
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
  const { t: s } = pe(), p = () => {
    if (G(r) > Nt) {
      q.error(s(a.INPUT_TOO_LONG));
      return;
    }
    t();
  };
  return /* @__PURE__ */ u("div", { className: "monitor-header", children: [
    /* @__PURE__ */ e("div", { className: "monitor-title-section", children: /* @__PURE__ */ e("h2", { className: "monitor-title", children: s(a.LIVE_MONITOR) }) }),
    /* @__PURE__ */ u("div", { className: "monitor-header-actions", children: [
      /* @__PURE__ */ e(
        he,
        {
          value: r,
          onChange: n,
          onEnter: p,
          clearable: !0,
          onClear: i,
          placeholder: s(a.ENTER_LIVE_ID_TO_SEARCH),
          suffixIcon: /* @__PURE__ */ e(rr, { size: 16 }),
          className: "monitor-search-input",
          status: G(r) > Nt ? "error" : "default",
          tips: G(r) > Nt ? s(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
        }
      ),
      /* @__PURE__ */ e(
        K,
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
  const { t: s } = pe();
  return /* @__PURE__ */ u("div", { className: "live-monitor-pagination", children: [
    /* @__PURE__ */ e(
      K,
      {
        variant: "outline",
        size: "small",
        disabled: r <= 1 || t,
        onClick: o,
        children: s(a.FIRST_PAGE)
      }
    ),
    /* @__PURE__ */ e(
      K,
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
      K,
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
  const { t: c } = pe(), [o, s] = b(""), [p, l] = b(!1);
  ee(() => {
    s(t || Kt), l(!1);
  }, [t]);
  const d = n ? c("Avatar Alt", { name: n }) : c("Host Avatar");
  return !o || p ? /* @__PURE__ */ e("div", { className: r, title: i, "aria-label": d, children: bn(n) }) : /* @__PURE__ */ e("div", { className: r, title: i, "aria-label": d, children: /* @__PURE__ */ e(
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
        if (o !== Kt) {
          s(Kt);
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
  const c = tn(r) ? st.cloneElement(r, n) : rn(r, n);
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
  const { t: h } = pe(), { startPlay: N, stopPlay: m } = mt(), S = (H = yt().components) == null ? void 0 : H.liveMonitor, w = ((D = r.avatarUrl) == null ? void 0 : D.trim()) || "", E = (c == null ? void 0 : c.avatarUrl) || ((Z = r.anchor) == null ? void 0 : Z.avatarUrl) || w || zr(r), M = (c == null ? void 0 : c.nick) || ((j = r.anchor) == null ? void 0 : j.nick) || Br(r, h(a.UNKNOWN_HOST)), O = ((X = r.stats) == null ? void 0 : X.viewCount) ?? 0, y = _e(() => `live_monitor_view_${r.liveId}`, [r.liveId]), I = te(""), P = te(0), z = te(null);
  return ee(() => {
    const A = r.liveId;
    if (!A) return;
    const L = ++P.current;
    let C = !1;
    return (async () => {
      for (; z.current; )
        try {
          await z.current;
        } catch {
        }
      try {
        await N({ liveId: A, containerId: y }), !C && P.current === L && (I.current = A);
      } catch ($) {
        !C && P.current === L && ($ === kt.LOGIN_TIMEOUT || $ === kt.USER_SIG_ILLEGAL) && (Oa(), Da(), localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required");
      }
    })(), () => {
      C = !0, P.current += 1;
      const $ = I.current || A;
      I.current === $ && (I.current = ""), z.current = m($), z.current.catch(() => {
      });
    };
  }, [r.liveId, y, N, m]), /* @__PURE__ */ u(
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
                backgroundImage: `url(${r.backgroundUrl || r.coverUrl || dr})`
              }
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              id: y,
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
                o.slice(0, s.visibleCount).map((A) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                  /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                    /* @__PURE__ */ e("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                    /* @__PURE__ */ e("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                  ] }),
                  h(A)
                ] }, A)),
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
                          onClick: (A) => A.stopPropagation(),
                          children: o.slice(s.visibleCount).map((A) => /* @__PURE__ */ u("span", { className: "live-card-tag-overlay", children: [
                            /* @__PURE__ */ u("svg", { className: "shield-icon", viewBox: "0 0 24 24", width: "14", height: "14", children: [
                              /* @__PURE__ */ e("path", { d: "M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z", fill: "white", stroke: "white", strokeWidth: "0.5" }),
                              /* @__PURE__ */ e("text", { x: "12", y: "16", textAnchor: "middle", fill: "#f59e0b", fontSize: "12", fontWeight: "bold", children: "!" })
                            ] }),
                            h(A)
                          ] }, A))
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
              onClick: (A) => {
                A.stopPropagation(), d();
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
        /* @__PURE__ */ u("div", { className: `live-card-actions ${n === r.liveId ? "show" : ""}`, children: [
          /* @__PURE__ */ e(
            K,
            {
              className: "action-btn warn",
              variant: "text",
              icon: /* @__PURE__ */ e(kr, { size: 16 }),
              onClick: (A) => {
                A.stopPropagation(), f();
              },
              children: /* @__PURE__ */ e("span", { className: "button-text", children: h(a.VIOLATION_WARNING) })
            }
          ),
          /* @__PURE__ */ e(De, { slot: S == null ? void 0 : S.userActionExtraItems, props: { live: r } }),
          /* @__PURE__ */ e(
            K,
            {
              className: "action-btn close full",
              variant: "text",
              icon: /* @__PURE__ */ e(Pr, { size: 16 }),
              onClick: (A) => {
                A.stopPropagation(), g();
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
  const r = mt(), { paginatedList: n } = r, [t, i] = b(n.currentPage), [c, o] = b(n.hasMore), [s, p] = b(n.loading), [l, d] = b(n.pageData);
  ee(() => ho((E) => {
    i(E.currentPage), o(E.hasMore), p(E.loading), d([...E.pageData]);
  }), []);
  const f = l.length > 0, [g, v] = b(/* @__PURE__ */ new Map()), h = te(0), N = te(!1), m = te(/* @__PURE__ */ new Map());
  m.current = _e(() => {
    const w = /* @__PURE__ */ new Map();
    return w.set(t, l), w;
  }, [t, l]);
  const S = te([]);
  return S.current = l, {
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
    liveListRef: S,
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
  } = r, f = _t(), { t: g } = pe(), [v, h] = b({ visible: !1, liveId: "", liveName: "", closing: !1 }), [N, m] = b({ visible: !1, liveId: "", liveName: "" }), [S, w] = b(!1), E = te(!1), [M, O] = b(!1), y = T((X, A) => {
    h({ visible: !0, liveId: X, liveName: A, closing: !1 });
  }, []), I = T((X, A) => {
    m({ visible: !0, liveId: X, liveName: A });
  }, []), P = T(async () => {
    const { liveId: X } = v;
    if (X) {
      h((A) => ({ ...A, closing: !0 }));
      try {
        await s(X), await p(X), h({ visible: !1, liveId: "", liveName: "", closing: !1 }), q.success(g(a.LIVE_FORCIBLY_CLOSED));
        const A = !n.hasMore, L = n.pageData.length;
        i.current += 1, A && L <= 1 && n.currentPage > 1 ? await n.prevPage() : await n.refreshCurrentPage();
      } catch (A) {
        console.error("封禁房间失败:", A), h((L) => ({ ...L, closing: !1 }));
      }
    }
  }, [v, s, p, n, i, g]), z = T(() => {
    h({ visible: !1, liveId: "", liveName: "", closing: !1 });
  }, []), H = T((X) => {
    try {
      sessionStorage.setItem("liveMonitor_currentPage", String(n.currentPage));
    } catch {
    }
    f(`/live-control/${X}`);
  }, [n, f]), D = T(async (X) => {
    const A = (X ?? "").trim();
    if (!A || G(A) > Nt) {
      A && G(A) > Nt && q.error(g(a.INPUT_TOO_LONG));
      return;
    }
    const L = A;
    w(!0);
    const C = ++i.current;
    try {
      const x = await l(L);
      if (d.current || i.current !== C)
        return;
      if (!x) {
        q.error(g(a.NO_SEARCH_RESULTS_FOR, { keyword: A })), await n.goToFirstPage();
        return;
      }
      if (c(!0), E.current = !0, d.current || i.current !== C) {
        await s(L);
        return;
      }
      q.success(g(a.SEARCH_SUCCESS));
    } catch (x) {
      if (console.error("搜索直播间失败:", x), x === kt.LOGIN_TIMEOUT || x === kt.USER_SIG_ILLEGAL) {
        localStorage.removeItem("tuiLiveMonitor-userInfo"), window.location.href = "/#/config-required";
        return;
      }
      q.error(g(a.NO_SEARCH_RESULTS_FOR, { keyword: A })), await n.goToFirstPage();
    } finally {
      d.current || w(!1);
    }
  }, [l, d, i, n, c, s, g]), Z = T(async () => {
    o(""), c(!1), E.current = !1, i.current += 1, await n.goToFirstPage();
  }, [o, c, i, n]), j = T(async () => {
    if (!(M || n.loading)) {
      O(!0);
      try {
        t && (c(!1), E.current = !1, o("")), i.current += 1, await n.refreshCurrentPage();
      } catch (X) {
        console.error("刷新失败:", X);
        const A = (X == null ? void 0 : X.ErrorInfo) || (X == null ? void 0 : X.errorInfo) || "";
        q.error(g(a.REFRESH_FAILED) + (A ? ` (${A})` : ""));
      } finally {
        d.current || O(!1);
      }
    }
  }, [M, n, t, c, o, i, g, d]);
  return {
    // 封禁相关
    closeConfirm: v,
    handleCloseLive: y,
    handleConfirmClose: P,
    handleCancelClose: z,
    // 违规警告相关
    violationConfirm: N,
    handleViolationWarning: I,
    setViolationConfirm: m,
    // 搜索相关
    searching: S,
    isSearchModeRef: E,
    handleSearch: D,
    handleClearSearch: Z,
    // 刷新相关
    refreshing: M,
    handleRefresh: j,
    // 详情
    handleClickDetails: H
  };
}, ti = 600 * 1e3, ri = (r) => {
  const { pageSize: n, isSearchModeRef: t, isUnmountedRef: i, pageVersionRef: c } = r, [o, s] = b(/* @__PURE__ */ new Map()), p = te(null), l = te(""), d = T(() => {
    p.current && (clearTimeout(p.current), p.current = null);
  }, []), f = T(() => {
    const m = /* @__PURE__ */ new Date(), S = new Date(m.getTime() - 3600 * 1e3), w = (E) => {
      const M = E.getFullYear(), O = String(E.getMonth() + 1).padStart(2, "0"), y = String(E.getDate()).padStart(2, "0"), I = String(E.getHours()).padStart(2, "0"), P = String(E.getMinutes()).padStart(2, "0"), z = String(E.getSeconds()).padStart(2, "0");
      return `${M}-${O}-${y} ${I}:${P}:${z}`;
    };
    return {
      startTime: w(S),
      endTime: w(m)
    };
  }, []), g = T(async (m, S, w) => {
    const E = Array.from(
      new Set(
        m.slice(0, n).map((O) => O.liveId).filter(Boolean)
      )
    );
    if (E.length === 0 || t.current) return;
    d();
    const M = `${w}:${S}:${E.join(",")}`;
    l.current = M;
    try {
      const { startTime: O, endTime: y } = f(), I = await xa(E, 10, O, y);
      if (i.current || c.current !== w || l.current !== M)
        return;
      s((P) => {
        const z = new Map(P);
        return E.forEach((H) => {
          z.set(H, I.get(H) || []);
        }), z;
      });
    } catch (O) {
      console.warn("[LiveMonitor] 获取直播违规标签失败:", O);
    } finally {
      !i.current && c.current === w && l.current === M && !t.current && (p.current = setTimeout(() => {
        g(m, S, w);
      }, ti));
    }
  }, [n, t, i, c, d, f]), v = T(() => [], []), h = T((...m) => {
    const S = [];
    for (const w of m)
      for (const E of w || [])
        E && !S.includes(E) && S.push(E);
    return S;
  }, []), N = T((m) => h(
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
  const t = te(null), [, i] = b(0);
  t.current || (t.current = new In({
    containerSelector: ".live-monitor-grid",
    t: n
  }));
  const c = T(() => {
    i((d) => d + 1);
  }, []), o = T((d) => {
    const f = t.current, g = f.getResult(d);
    if (!g.visibleCount && !g.showMore && g.idMaxWidth === "calc(100% - 12px)") {
      const v = r(), h = v == null ? void 0 : v.find((N) => N.liveId === d);
      h && setTimeout(() => {
        f.compute(d, h), c();
      }, 0);
    }
    return g;
  }, [c, r]), s = T(() => {
    var d;
    (d = t.current) == null || d.observe(() => {
      c();
    });
  }, [c]), p = T(() => {
    var d;
    (d = t.current) == null || d.disconnect();
  }, []), l = T((d) => {
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
const wo = () => {
  const { t: r } = pe(), { init: n, stopPlay: t, endLive: i, fetchLiveDetail: c, currentLive: o } = mt(), {
    currentPage: s,
    hasMoreData: p,
    loading: l,
    hasLiveData: d,
    pageData: f,
    pageVersionRef: g,
    isUnmountedRef: v,
    paginatedList: h
  } = Ja(), [N, m] = b(""), [S, w] = b(!1), E = te(!1), [M, O] = b(null), [y, I] = b(null), {
    getAdaptiveResult: P,
    initResizeObserver: z,
    cleanupResizeObserver: H,
    initAdaptiveTags: D
  } = ni(
    () => f.map((J) => ({
      liveId: J.liveId,
      tags: A(J)
    })),
    r
  ), {
    liveViolationLabelMap: Z,
    loadLiveViolationLabelsForPage: j,
    clearLiveViolationRefreshTimer: X,
    getLiveDisplayTags: A
  } = ri({
    pageSize: Qa,
    isSearchModeRef: E,
    isUnmountedRef: v,
    pageVersionRef: g
  }), L = (J) => {
    m(String(J));
  }, C = T(async () => {
    await h.prevPage();
  }, [h]), x = T(async () => {
    await h.nextPage();
  }, [h]), $ = T(async () => {
    await h.goToFirstPage();
  }, [h]);
  ee(() => {
    if (l || f.length === 0) return;
    X();
    const J = ++g.current;
    j(f, s, J);
  }, [f, s, l, X, j, g]), ee(() => (z(), () => {
    H();
  }), [z, H]);
  const {
    closeConfirm: _,
    handleCloseLive: W,
    handleConfirmClose: F,
    handleCancelClose: R,
    violationConfirm: U,
    handleViolationWarning: Y,
    setViolationConfirm: ne,
    handleSearch: V,
    handleClearSearch: le,
    refreshing: Ce,
    handleRefresh: Se,
    handleClickDetails: ie
  } = ei({
    paginatedList: h,
    isSearchMode: S,
    pageVersionRef: g,
    setIsSearchMode: w,
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
        tags: A(J)
      }))
    );
  }, [Z, f, A, D]), ee(() => {
    (async () => {
      try {
        const B = await ur();
        if (B && B.sdkAppId !== 0) {
          console.log("[LiveMonitor] Initializing SDK with account:", B.userId), Fa({
            baseURL: "http://localhost:9000/api",
            authToken: B.userSig
          });
          const ae = ma({
            sdkAppId: B.sdkAppId,
            userId: B.userId,
            userSig: B.userSig
          });
          n({
            baseURL: "http://localhost:9000/api",
            playerFactory: ae
            // ✅ 传入播放器工厂
          }), console.log("[LiveMonitor] SDK initialized successfully with playerFactory");
        } else
          console.error("[LiveMonitor] No valid credentials found");
      } catch (B) {
        console.error("[LiveMonitor] SDK init error:", B);
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
      v.current = !0, X();
    };
  }, []), /* @__PURE__ */ u("div", { className: "live-monitor-page", children: [
    /* @__PURE__ */ e(
      qa,
      {
        searchInput: N,
        onSearchInputChange: L,
        onSearch: () => V(N),
        onClearSearch: le,
        onRefresh: Se,
        refreshing: Ce
      }
    ),
    /* @__PURE__ */ e("div", { className: "live-monitor-grid", children: l ? /* @__PURE__ */ u("div", { className: "monitor-loading", children: [
      /* @__PURE__ */ e("div", { className: "loading-spinner" }),
      /* @__PURE__ */ e("span", { children: r(a.LOADING) })
    ] }) : d ? f.map((J) => {
      const B = A(J);
      return /* @__PURE__ */ e(
        Za,
        {
          item: J,
          hoveredCardId: M,
          hoveredTagId: y,
          isMuted: !!J.isMuted,
          userProfile: J.anchor,
          displayTags: B,
          adaptiveResult: P(J.liveId),
          onMouseEnter: () => O(J.liveId),
          onMouseLeave: () => O(null),
          onClickDetails: () => ie(J.liveId),
          onViolationWarning: () => Y(J.liveId, J.liveName || r(a.UNNAMED_LIVE)),
          onCloseLive: () => W(J.liveId, J.liveName || r(a.UNNAMED_LIVE)),
          onTagHover: (ae) => I(ae)
        },
        `${s}:${J.liveId}`
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
        onPrevPage: C,
        onNextPage: x,
        onGoToFirstPage: $
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: _.visible,
        header: r(a.CONFIRM_FORCE_STOP),
        onClose: R,
        width: be.CONFIRM,
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: R, disabled: _.closing, children: r(a.CANCEL) }),
          /* @__PURE__ */ e(
            K,
            {
              shape: "round",
              theme: "primary",
              onClick: F,
              disabled: _.closing,
              children: _.closing ? r(a.CLOSING) : r(a.CONFIRM_BAN_LIVE)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { children: r(a.FORCE_STOP_WARNING) })
      }
    ),
    /* @__PURE__ */ e(
      Jr,
      {
        visible: U.visible,
        liveId: U.liveId,
        liveName: U.liveName,
        onVisibleChange: (J) => ne((B) => ({ ...B, visible: J }))
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
  function S() {
    if (!r) {
      r = !0;
      var E = navigator.userAgent, M = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(E), O = /(Mac OS X)|(Windows)|(Linux)/.exec(E);
      if (v = /\b(iPhone|iP[ao]d)/.exec(E), h = /\b(iP[ao]d)/.exec(E), f = /Android/i.exec(E), N = /FBAN\/\w+;/i.exec(E), m = /Mobile/i.exec(E), g = !!/Win64/.exec(E), M) {
        n = M[1] ? parseFloat(M[1]) : M[5] ? parseFloat(M[5]) : NaN, n && document && document.documentMode && (n = document.documentMode);
        var y = /(?:Trident\/(\d+.\d+))/.exec(E);
        s = y ? parseFloat(y[1]) + 4 : n, t = M[2] ? parseFloat(M[2]) : NaN, i = M[3] ? parseFloat(M[3]) : NaN, c = M[4] ? parseFloat(M[4]) : NaN, c ? (M = /(?:Chrome\/(\d+\.\d+))/.exec(E), o = M && M[1] ? parseFloat(M[1]) : NaN) : o = NaN;
      } else
        n = t = i = o = c = NaN;
      if (O) {
        if (O[1]) {
          var I = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(E);
          p = I ? parseFloat(I[1].replace("_", ".")) : !0;
        } else
          p = !1;
        l = !!O[2], d = !!O[3];
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
      return S() || n;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return S() || s > n;
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
      return S() || t;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return S() || i;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return S() || c;
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
      return S() || o;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return S() || l;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return S() || p;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return S() || d;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return S() || v;
    },
    mobile: function() {
      return S() || v || h || f || m;
    },
    nativeApp: function() {
      return S() || N;
    },
    android: function() {
      return S() || f;
    },
    ipad: function() {
      return S() || h;
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
const ui = /* @__PURE__ */ pa(di);
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
          var S = t.props.cropSize ? t.props.cropSize : hi(t.mediaSize.width, t.mediaSize.height, t.containerRect.width, t.containerRect.height, t.props.aspect, t.props.rotation);
          return (((p = t.state.cropSize) === null || p === void 0 ? void 0 : p.height) !== S.height || ((l = t.state.cropSize) === null || l === void 0 ? void 0 : l.width) !== S.width) && t.props.onCropSizeChange && t.props.onCropSizeChange(S), t.setState({
            cropSize: S
          }, t.recomputeCropPosition), t.props.setCropSize && t.props.setCropSize(S), S;
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
      var t = this, i, c = this.props, o = c.image, s = c.video, p = c.mediaProps, l = c.cropperProps, d = c.transform, f = c.crop, g = f.x, v = f.y, h = c.rotation, N = c.zoom, m = c.cropShape, S = c.showGrid, w = c.roundCropAreaPixels, E = c.style, M = E.containerStyle, O = E.cropAreaStyle, y = E.mediaStyle, I = c.classes, P = I.containerClassName, z = I.cropAreaClassName, H = I.mediaClassName, D = (i = this.state.mediaObjectFit) !== null && i !== void 0 ? i : this.getObjectFit();
      return Ge.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(j) {
          return t.containerRef = j;
        },
        "data-testid": "container",
        style: M,
        className: Mt("reactEasyCrop_Container", P)
      }, o ? Ge.createElement("img", Ne({
        alt: "",
        className: Mt("reactEasyCrop_Image", D === "contain" && "reactEasyCrop_Contain", D === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", D === "vertical-cover" && "reactEasyCrop_Cover_Vertical", H)
      }, p, {
        src: o,
        ref: this.imageRef,
        style: Ne(Ne({}, y), {
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
        style: Ne(Ne({}, y), {
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
        style: Ne(Ne({}, O), {
          width: w ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: w ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: Mt("reactEasyCrop_CropArea", m === "round" && "reactEasyCrop_CropAreaRound", S && "reactEasyCrop_CropAreaGrid", z)
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
  const [r, n] = b(""), t = te(null);
  t.current || (t.current = new Ln());
  const i = t.current, c = T((s) => {
    const p = i.setPreview(s);
    n(p);
  }, [i]), o = T(() => {
    i.clearPreview(), n("");
  }, [i]);
  return ee(() => () => {
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
  const { loop: n = 1, autoPlay: t = !0 } = r, i = te(null), c = te(null), o = te(!1), s = T(() => {
    if (c.current) {
      try {
        c.current.stopAnimation(), c.current.clear();
      } catch (g) {
        console.warn("SVGA cleanup error:", g);
      }
      c.current = null, o.current = !1;
    }
  }, []), p = T(async (g) => {
    if (!i.current) {
      console.warn("SVGA container not mounted");
      return;
    }
    s();
    const v = i.current, h = new lr.Player(v);
    c.current = h;
    const N = Hr();
    if (!N) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((m, S) => {
        N.load(
          g,
          (w) => {
            try {
              h.loops = n, h.setVideoItem(w), t && (h.startAnimation(), o.current = !0), m();
            } catch (E) {
              S(E);
            }
          },
          (w) => {
            S(w);
          }
        );
      });
    } catch (m) {
      throw console.error("SVGA load error:", m), s(), m;
    }
  }, [n, t, s]), l = T(async (g) => {
    const v = URL.createObjectURL(g);
    try {
      await p(v);
    } finally {
      URL.revokeObjectURL(v);
    }
  }, [p]), d = T(() => {
    if (c.current)
      try {
        c.current.stopAnimation(), o.current = !1;
      } catch (g) {
        console.warn("SVGA stop error:", g);
      }
  }, []), f = T(() => {
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
function wi() {
  const { t: r } = pe();
  return { t: Ka(r) };
}
function ht(r) {
  const { action: n, onSuccess: t, onError: i, successMessage: c, errorMessage: o } = r, [s, p] = b(!1), l = te(n);
  l.current = n;
  const d = T(async (...g) => {
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
  }, [s, c, o, t, i]), f = T(() => {
    p(!1);
  }, []);
  return { loading: s, execute: d, reset: f };
}
function Ve(r) {
  const { confirm: n, onSuccess: t, ...i } = r, [c, o] = b(null), s = T((h) => {
    o(null), t == null || t(h);
  }, [t]), { loading: p, execute: l, reset: d } = ht({
    ...i,
    onSuccess: s
  }), f = T(() => {
    o({
      visible: !0,
      title: n.title,
      content: n.content,
      confirmText: n.confirmText,
      danger: n.danger
    });
  }, [n]), g = T(() => {
    o(null);
  }, []), v = T(async () => {
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
Sn(lr.Parser);
const Ft = an(function({
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
  deferUpload: S = !1,
  onFileReady: w,
  skipSvgaValidation: E = !1,
  onUrlErrorChange: M
}, O) {
  const { t: y } = pe(), I = p || y(a.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), P = te(null), [z, H] = b(!1), [D, Z] = b(0), [j, X] = b(!1), [A, L] = b(""), [C, x] = b(!g), [$, _] = b(n), [W, F] = b(!1), [R, U] = b(""), Y = te(null);
  Y.current || (Y.current = new Tn({
    setValidating: F,
    setError: U,
    onConfirm: t
  }, E)), Y.current.updateCallbacks({
    setValidating: F,
    setError: U,
    onConfirm: t
  }), Y.current.updateSkipSvgaValidation(E);
  const ne = te(null), { previewUrl: V, setPreview: le } = Si(), [Ce, Se] = b(!1), [ie, J] = b(!1), {
    containerRef: B,
    playUrl: ae,
    stopAnimation: Ee
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
      return C ? !!(R || N && $.trim() && G($.trim()) > N) : !1;
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
    validateImageUrl: async (Q, se) => {
      F(!0), U("");
      try {
        return await wn(Q, se, E), !0;
      } catch (fe) {
        const ze = fe instanceof Error ? fe : new Error(String(fe));
        throw U(ze.message || y("Image URL invalid")), ze;
      } finally {
        F(!1);
      }
    },
    reset: () => {
      Y.current.reset(), ne.current = null, le(null), Se(!1), J(!1), _(n || ""), L(""), U(""), H(!1), Z(0), X(!1), g && x(!!n), w == null || w(null);
    },
    ensureUrlValidated: async () => C ? await Y.current.ensureUrlValidatedWithErrorCheck(
      $,
      n || "",
      !!R,
      N
    ) : null,
    uploadPendingFile: async () => {
      const Q = ne.current;
      if (!Q) return null;
      H(!0), Z(0), X(!1);
      try {
        const se = await _r(Q, i, Z);
        return ne.current = null, L(se.provider || ""), X(!1), se.url;
      } catch (se) {
        throw X(!0), se;
      } finally {
        H(!1), Z(0);
      }
    }
  }), [i, C, W, R, $, V, n, N, t, y]), ee(() => {
    _(n), n && g && x(!0), S && (ne.current = null, le(null), J(!1), w == null || w(null));
  }, [n]), ee(() => {
    g && n ? x(!0) : g && x(!1);
  }, [g]), ee(() => {
    if (!M) return;
    let Q = !1;
    (C || !g) && (R || N && $.trim() && G($.trim()) > N) && (Q = !0), M(Q);
  }, [C, R, $, N, g, M]), ee(() => {
    n && V && le(null);
  }, [n, V, le]), ee(() => () => {
    var Q;
    (Q = Y.current) == null || Q.dispose();
  }, []), ee(() => {
    !ie || !V || ae(V).catch((Q) => {
      console.error("[ImageUpload] SVGA preview load error:", Q);
    });
  }, [ie, V, ae]);
  const Ie = te(null), ve = te(null);
  ee(() => {
    if (!n || !fr(n) || !(C || !g) || !Ie.current) {
      if (ve.current) {
        try {
          ve.current.stopAnimation(), ve.current.clear();
        } catch {
        }
        ve.current = null;
      }
      return;
    }
    if (ve.current) {
      try {
        ve.current.stopAnimation(), ve.current.clear();
      } catch {
      }
      ve.current = null;
    }
    const Q = Ie.current, se = new lr.Player(Q);
    se.loops = 0, se.setContentMode("AspectFit"), ve.current = se;
    const fe = Hr();
    if (fe)
      return fe.load(
        n,
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
        ve.current = null;
      };
  }, [n, C, g]);
  const [Le, Te] = b(!1), [ye, Qe] = b(""), [Wt, pt] = b({ x: 0, y: 0 }), [zt, bt] = b(1), [It, et] = b(null), [hr, $e] = b(null), [Lt, St] = b(!1), Tt = T((Q, se) => {
    et(se);
  }, []), [wt, ft] = b(!1), We = te(null);
  ee(() => () => {
    We.current && clearTimeout(We.current);
  }, []);
  const k = T(async (Q) => {
    const se = An(Q, v);
    if (!se.valid) {
      q.error(se.errorHint);
      return;
    }
    if (!Rn(Q, s)) {
      q.error(y(a.FILE_SIZE_EXCEEDS_MB, { max: s }));
      return;
    }
    try {
      await Mn(Q, v, E);
    } catch (fe) {
      const ze = fe instanceof Error ? fe : new Error(String(fe));
      q.error(ze.message || y("File load failed"));
      return;
    }
    if (c) {
      Qe(""), $e(Q), pt({ x: 0, y: 0 }), bt(1), et(null), St(!0), ft(!1), Te(!0);
      try {
        const fe = await On(Q);
        Qe(fe);
      } catch {
        q.error(y("Image load failed")), Te(!1);
      } finally {
        St(!1), We.current && clearTimeout(We.current), We.current = setTimeout(() => {
          ft(!0);
        }, 350);
      }
    } else
      await re(Q);
  }, [v, s, y, E, c, S]), re = async (Q) => {
    if (S) {
      ne.current = Q, le(Q);
      const se = Q.type.startsWith("video/"), fe = Dn(Q);
      Se(se), J(fe), w == null || w(Q);
      return;
    }
    H(!0), Z(0);
    try {
      const se = await _r(Q, i, Z);
      t(se.url), L(se.provider || ""), q.success(y("Upload Success"));
    } catch (se) {
      const fe = se instanceof Error ? se : new Error(String(se));
      q.error(y(a.UPLOAD_FAILED_WITH_ERROR, { error: fe.message || y(a.NETWORK_ERROR) }));
    } finally {
      H(!1), Z(0);
    }
  }, ce = async () => {
    if (!(!It || !ye))
      try {
        const Q = await Pn(ye, It);
        Te(!1), await re(Q);
      } catch {
        q.error(y("Crop failed"));
      }
  }, we = Un, Fe = T(xn((Q) => {
    k(Q);
  }), [k]), qe = () => {
    Y.current.handleUrlFocus();
  }, Xe = () => {
    Y.current.handleUrlBlur(
      $,
      N
    );
  }, Qr = () => {
    Y.current.handleUrlEnter(
      $,
      N
    );
  }, en = (Q) => {
    Q == null || Q.stopPropagation(), Y.current.cancelValidation(), F(!1), U(""), t(""), _(""), L(""), H(!1), Z(0), X(!1), S && (ne.current = null, le(null), Se(!1), J(!1), w == null || w(null));
  };
  return /* @__PURE__ */ u("div", { className: `image-upload-container ${m}`, children: [
    g && l && /* @__PURE__ */ u("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ e(
        K,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${C ? "" : "active"}`,
          onClick: () => {
            Y.current.cancelValidation(), F(!1), U(""), x(!1);
          },
          icon: /* @__PURE__ */ e(pr, { size: "12" }),
          children: y("Upload Image")
        }
      ),
      /* @__PURE__ */ e(
        K,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${C ? "active" : ""}`,
          onClick: () => {
            Y.current.cancelValidation(), F(!1), U(""), x(!0);
          },
          children: y(a.ENTER_URL)
        }
      )
    ] }),
    (C || !g) && /* @__PURE__ */ e("div", { className: "image-upload-url-input", children: /* @__PURE__ */ e(
      he,
      {
        value: $,
        onChange: (Q) => {
          _(String(Q)), U(""), Y.current.cancelValidation(), F(!1);
        },
        onFocus: qe,
        onBlur: Xe,
        onEnter: Qr,
        placeholder: y(a.ENTER_IMAGE_URL),
        status: R ? "error" : void 0,
        suffix: N ? W ? /* @__PURE__ */ e("span", { className: "input-suffix-validating", children: y("Validating") }) : /* @__PURE__ */ u("span", { className: `input-suffix-count${G($) > N ? " byte-overflow" : ""}`, children: [
          G($),
          "/",
          N
        ] }) : void 0
      }
    ) }),
    R && (C || !g) && /* @__PURE__ */ e("div", { className: "image-upload-url-error", children: R }),
    g && !C && /* @__PURE__ */ u(ue, { children: [
      V ? /* @__PURE__ */ u(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: d || "100%",
            height: f || 160
          },
          children: [
            z ? (
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
                /* @__PURE__ */ e("span", { className: "upload-status-text", children: y("Uploading") })
              ] })
            ) : /* @__PURE__ */ e(ue, { children: ie ? /* @__PURE__ */ e("div", { ref: B, className: "svga-preview-container" }) : Ce ? /* @__PURE__ */ e("video", { src: V, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ e("img", { src: V, alt: "preview" }) }),
            !z && A && /* @__PURE__ */ e("span", { className: "image-upload-provider-badge", children: A.toUpperCase() }),
            !z && j ? /* @__PURE__ */ e("span", { className: "image-upload-provider-badge upload-failed-badge", children: y("Upload Failed") }) : !z && !A ? /* @__PURE__ */ e("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: y("Pending Upload") }) : null,
            !z && /* @__PURE__ */ u("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ e(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => {
                    var Q;
                    return (Q = P.current) == null ? void 0 : Q.click();
                  },
                  title: y("Re-upload"),
                  children: /* @__PURE__ */ e(pr, {})
                }
              ),
              /* @__PURE__ */ e(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: en,
                  title: y(a.DELETE),
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
            className: `image-upload-dropzone ${z ? "uploading" : ""}`,
            onClick: () => {
              var Q;
              return !z && ((Q = P.current) == null ? void 0 : Q.click());
            },
            onDragOver: we,
            onDrop: Fe,
            style: { height: f || 120 },
            children: z ? /* @__PURE__ */ u("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ e("div", { className: "progress-bar", children: /* @__PURE__ */ e("div", { className: "progress-fill", style: { width: `${D}%` } }) }),
              /* @__PURE__ */ u("span", { className: "progress-text", children: [
                D,
                "%"
              ] })
            ] }) : /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ e(sn, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ e("span", { className: "upload-hint", children: I }),
              /* @__PURE__ */ e("span", { className: "upload-sub-hint", children: h || y(a.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: s }) })
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
            var fe;
            const se = (fe = Q.target.files) == null ? void 0 : fe[0];
            se && k(se), Q.target.value = "";
          }
        }
      )
    ] }),
    n && (C || !g) && /* @__PURE__ */ e(
      "div",
      {
        className: "image-upload-preview url-preview",
        style: {
          width: d || "100%",
          height: f || 120,
          marginTop: 8
        },
        children: fr(n) ? /* @__PURE__ */ e("div", { ref: Ie, className: "svga-preview-container" }) : kn(n) ? /* @__PURE__ */ e("video", { src: n, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ e("img", { src: n, alt: "preview", onError: (Q) => {
          Q.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: Le,
        header: y("Crop Image"),
        onClose: () => Te(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => Te(!1), children: y(a.CANCEL) }),
          /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: ce, disabled: Lt || !ye, icon: /* @__PURE__ */ e(cn, { size: "14" }), children: y(a.CONFIRM_CROP) })
        ] }),
        children: /* @__PURE__ */ e("div", { className: "image-crop-area", children: Lt || !wt ? /* @__PURE__ */ u("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ e("div", { className: "loading-spinner" }),
          /* @__PURE__ */ e("span", { children: y("Image Loading") })
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
  var Se, ie, J;
  const { t: s } = pe(), p = Fn.map((B) => ({
    value: B.value,
    label: s(B.labelKey)
  })), [l, d] = b(gr()), [f, g] = b([]), [v, h] = b(!1), [N, m] = b(!1), [S, w] = b(""), [E, M] = b(""), [O, y] = b(!1), [I, P] = b(""), [z, H] = b(""), [D, Z] = b(null), [j, X] = b(""), A = te(null), [L, C] = b(!1), x = (B, ae) => {
    B === "success" ? q.success(ae) : q.error(ae);
  }, $ = async (B, ae) => {
    try {
      await zn(B), x("success", s(a.COPY_LABEL_COPIED, { label: ae }));
    } catch (Ee) {
      const Ie = Ee instanceof Error ? Ee : new Error(String(Ee));
      x("error", s(a.COPY_FAILED, { error: Ie.message || s(a.NETWORK_ERROR) }));
    }
  }, _ = () => {
    g([...f, { key: "", value: "" }]);
  }, W = (B, ae, Ee) => {
    const Ie = [...f];
    Ie[B][ae] = Ee, g(Ie);
  }, F = (B) => {
    g(f.filter((ae, Ee) => Ee !== B));
  }, R = () => {
    var B;
    d(gr()), g([]), h(!1), m(!1), w(""), M(""), y(!1), P(""), H(""), Z(null), X(""), C(!1), (B = A.current) == null || B.reset();
  }, U = () => {
    R(), n();
  }, { loading: Y, execute: ne } = ht({
    action: async () => {
      let B = "";
      try {
        B = await Yr({
          handle: A.current,
          hasPendingFile: L,
          fallbackUrl: l.coverUrl,
          label: s(a.COVER_IMAGE)
        });
      } catch (Le) {
        throw Le instanceof cr ? new Error(Le.message) : new Error(s(a.COVER_PROCESSING_FAILED));
      }
      const ae = Bn({
        formData: l,
        coverUrl: B,
        customInfos: f,
        useObsStreaming: O
      }), Ee = ae.liveId, Ie = ae.anchorId;
      await o(ae), Z(null), X("");
      let ve = !O;
      if (O) {
        const Le = await Ua({
          liveId: Ee,
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
        Z(Le.streamInfo), X(Le.streamInfoError), H(Le.setupError), ve = Le.configuredSuccessfully;
      }
      return { obsConfiguredSuccessfully: ve };
    },
    errorMessage: s(a.REQUEST_FAILED),
    onSuccess: (B) => {
      m(!0), x(
        "success",
        O && (B != null && B.obsConfiguredSuccessfully) ? s(a.LIVE_CREATED_SUCCESSFULLY_OBS) : s(a.LIVE_CREATED_SUCCESSFULLY)
      );
    }
  }), V = async () => {
    if (!l.anchorId.trim()) {
      x("error", s(a.PLEASE_ENTER_ANCHOR_ID));
      return;
    }
    const B = G(l.anchorId);
    if (B > je) {
      x("error", s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES_CURRENT, { max: je, current: B }));
      return;
    }
    const ae = G(l.liveName);
    if (ae > ke) {
      x("error", s(a.TITLE_CANNOT_EXCEED_100_BYTES_CURRENT, { current: ae }));
      return;
    }
    if (f.some(Ut)) {
      x("error", s(a.CUSTOM_INFO_KEY_REQUIRED));
      return;
    }
    w(""), P(""), H(""), await ne();
  }, le = () => {
    R(), t();
  }, Ce = O ? I === "" || I === "creating" || I === "seating" ? {
    text: s(I === "creating" ? a.LOADING : I === "seating" ? a.LOADING : a.LOADING),
    error: !1
  } : I === "error" ? {
    text: s(a.OBS_CONFIG_FAILED_WITH_ERROR, { error: z }),
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
    me,
    {
      visible: r,
      header: s(N ? a.CREATE_SUCCESS : a.CREATE_LIVE),
      onClose: U,
      width: be.FORM,
      placement: "center",
      className: "create-live-modal",
      footer: N ? /* @__PURE__ */ e(
        K,
        {
          shape: "round",
          theme: "primary",
          onClick: le,
          disabled: O && (I === "" || I === "creating" || I === "seating"),
          children: s(O && I !== "ready" && I !== "error" ? a.LOADING : a.COMPLETE)
        }
      ) : /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: U, children: s(a.CANCEL) }),
        /* @__PURE__ */ e(
          K,
          {
            shape: "round",
            theme: "primary",
            onClick: V,
            loading: Y,
            disabled: Y || !l.anchorId.trim() || ((Se = A.current) == null ? void 0 : Se.isValidating) || ((ie = A.current) == null ? void 0 : ie.hasUrlError),
            children: s(Y ? a.CREATING : a.CREATE)
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
            ] }) : O && (I === "" || I === "creating" || I === "seating") ? /* @__PURE__ */ u("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
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
                  /* @__PURE__ */ e(K, { variant: "text", size: "small", icon: /* @__PURE__ */ e(He, { size: "14" }), onClick: () => $(D.serverUrl, s(a.SERVER_URL)), children: s("Copy") })
                ] }),
                /* @__PURE__ */ e("code", { className: "stream-info-value", children: D.serverUrl })
              ] }),
              /* @__PURE__ */ u("div", { className: "stream-info-item", children: [
                /* @__PURE__ */ u("div", { className: "stream-info-label", children: [
                  /* @__PURE__ */ e("span", { children: s(a.STREAM_KEY) }),
                  /* @__PURE__ */ e(K, { variant: "text", size: "small", icon: /* @__PURE__ */ e(He, { size: 14 }), onClick: () => $(D.streamKey, s(a.STREAM_KEY)), children: s("Copy") })
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
              he,
              {
                value: l.anchorId,
                onChange: (B) => d((ae) => ({ ...ae, anchorId: String(B) })),
                placeholder: s(a.ENTER_ANCHOR_ID),
                status: G(l.anchorId) > je ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(l.anchorId) > je ? " byte-overflow" : ""}`, children: [
                  G(l.anchorId),
                  "/",
                  je
                ] })
              }
            ),
            G(l.anchorId) > je && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: s(a.ANCHOR_ID_CANNOT_EXCEED_BYTES, { max: je }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: s(a.LIVE_TITLE), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              he,
              {
                value: l.liveName,
                onChange: (B) => d((ae) => ({ ...ae, liveName: String(B) })),
                placeholder: s(a.ENTER_LIVE_TITLE),
                status: G(l.liveName) > ke ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(l.liveName) > ke ? " byte-overflow" : ""}`, children: [
                  G(l.liveName),
                  "/",
                  ke
                ] })
              }
            ),
            G(l.liveName) > ke && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: s(a.TITLE_CANNOT_EXCEED_100_BYTES) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: s(a.COVER_IMAGE), children: /* @__PURE__ */ e(
            Ft,
            {
              ref: A,
              value: l.coverUrl,
              onChange: (B) => {
                d((ae) => ({ ...ae, coverUrl: B })), C(!1);
              },
              type: "cover",
              uploadEnabled: i,
              cropEnabled: !0,
              aspectRatio: Gn(l.seatTemplate),
              placeholder: s(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
              previewHeight: 140,
              maxBytes: 200,
              deferUpload: i,
              onFileReady: (B) => C(!!B)
            }
          ) }),
          /* @__PURE__ */ e(de, { label: s(a.LAYOUT_TEMPLATE), requiredMark: !0, help: s(((J = Vn(l.seatTemplate)) == null ? void 0 : J.descKey) || ""), children: /* @__PURE__ */ e(
            sr,
            {
              options: p,
              value: l.seatTemplate,
              onChange: (B) => d((ae) => ({ ...ae, seatTemplate: B })),
              style: { width: "100%" }
            }
          ) }),
          Wn(l.seatTemplate) && /* @__PURE__ */ e(de, { label: s(a.MAX_SEATS), help: s(a.MAX_SEATS_HELP), children: /* @__PURE__ */ e(
            Qt,
            {
              value: l.maxSeatCount,
              onChange: (B) => d((ae) => ({ ...ae, maxSeatCount: Number(B) || 1 })),
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
            gn,
            {
              checked: O,
              onChange: (B) => y(B),
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
              f.map((B, ae) => {
                const Ee = G(B.key), Ie = G(B.value), ve = Ee > Ue.maxKeyBytes, Le = Ie > Ue.maxValueBytes, Te = Ut(B);
                return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                    he,
                    {
                      value: B.key,
                      onChange: (ye) => W(ae, "key", String(ye)),
                      placeholder: s(a.ENTER_KEY),
                      status: ve || Te ? "error" : "default",
                      tips: ve ? s(a.KEY_EXCEEDS_BYTES, { key: B.key, max: Ue.maxKeyBytes }) : Te ? s(a.CUSTOM_INFO_KEY_REQUIRED) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                    he,
                    {
                      value: B.value,
                      onChange: (ye) => W(ae, "value", String(ye)),
                      placeholder: s(a.ENTER_VALUE),
                      status: Le ? "error" : "default",
                      tips: Le ? s(a.VALUE_EXCEEDS_2KB_LIMIT) : ""
                    }
                  ) }),
                  /* @__PURE__ */ e(
                    K,
                    {
                      shape: "square",
                      variant: "text",
                      className: "remove-custom-info-btn",
                      onClick: () => F(ae),
                      title: s(a.DELETE),
                      icon: /* @__PURE__ */ e(ar, { size: "14" })
                    }
                  )
                ] }, ae);
              }),
              f.length < Ue.maxCount && /* @__PURE__ */ e(K, { variant: "text", className: "add-custom-info-btn", onClick: _, icon: /* @__PURE__ */ e(or, { size: "14" }), theme: "primary", children: s(a.ADD) })
            ] })
          ] })
        ] })
      )
    }
  );
}
function Ri({ visible: r, live: n, onClose: t, onSuccess: i, uploadEnabled: c = !1, extraFieldsSlot: o, onUpdate: s, onFetchDetail: p }) {
  var _, W;
  const { t: l } = pe(), [d, f] = b(vr()), [g, v] = b([]), [h, N] = b(!1), m = te([]), [S, w] = b(Er), [E, M] = b(!1), [O, y] = b(""), [I, P] = b(""), { loading: z, execute: H } = ht({
    action: async (F) => {
      const R = (n == null ? void 0 : n.id) || (n == null ? void 0 : n.liveId) || "";
      return s(R, F);
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
  }), D = te(null), [Z, j] = b(!1);
  ee(() => {
    n != null && n.coverUrl ? Hn(n.coverUrl).then(w) : w(Er);
  }, [n == null ? void 0 : n.coverUrl]), ee(() => {
    if (n && r) {
      f({
        liveName: n.liveName || "",
        coverUrl: n.coverUrl || ""
      });
      const F = n.id || n.liveId;
      M(!0), p(F).then((R) => {
        const U = R == null ? void 0 : R.customInfo;
        if (U && typeof U == "object") {
          const Y = Object.entries(U).map(([ne, V]) => ({
            key: ne,
            value: String(V)
          }));
          v(Y), N(Y.length > 0), m.current = Y.map((ne) => ne.key);
        } else
          v([]), N(!1), m.current = [];
      }).catch(() => {
        if (n.customInfo && typeof n.customInfo == "object") {
          const R = Object.entries(n.customInfo).map(([U, Y]) => ({
            key: U,
            value: String(Y)
          }));
          v(R), N(R.length > 0), m.current = R.map((U) => U.key);
        } else
          v([]), N(!1), m.current = [];
      }).finally(() => M(!1));
    }
  }, [n == null ? void 0 : n.id, r]);
  const X = () => {
    if (g.length >= Ue.maxCount) {
      C("error", l("Custom info max count", { max: Ue.maxCount }));
      return;
    }
    v([...g, { key: "", value: "" }]);
  }, A = (F, R, U) => {
    const Y = [...g];
    Y[F][R] = U, v(Y);
  }, L = (F) => {
    v(g.filter((R, U) => U !== F));
  }, C = (F, R) => {
    q.error(R);
  }, x = () => {
    var F;
    y(""), P(""), v([]), N(!1), m.current = [], j(!1), (F = D.current) == null || F.reset(), f(vr()), t();
  }, $ = async () => {
    if (!n) return;
    if (!d.liveName.trim()) {
      C("error", l(a.PLEASE_ENTER_LIVE_TITLE));
      return;
    }
    const F = G(d.liveName);
    if (F > ke) {
      C("error", l("Title cannot exceed 100 bytes current", { current: F }));
      return;
    }
    if (g.some(Ut)) {
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
      } catch (V) {
        C("error", V instanceof cr ? V.message : l("Cover processing failed"));
        return;
      }
      const U = Yn(g);
      if (U) {
        U.type === "key-too-long" ? C("error", l("Key {key} exceeds {max} bytes", { key: U.key, max: U.max })) : U.type === "value-too-long" ? C("error", l("Key {key} value exceeds 2KB", { key: U.key })) : U.type === "max-count" ? C("error", l("Custom info max count", { max: U.max })) : C("error", l("Total value size exceeds 16KB"));
        return;
      }
      const Y = Kn(g), ne = $n(m.current, Y);
      await H({
        liveId: n.id || n.liveId,
        liveName: d.liveName.trim(),
        coverUrl: R || void 0,
        customInfo: Object.keys(Y).length > 0 ? Y : void 0,
        deleteKeys: ne.length > 0 ? ne : void 0
      });
    } catch (R) {
      console.error("[EditLiveModal] Update failed:", R);
    }
  };
  return !r || !n ? null : /* @__PURE__ */ e(
    me,
    {
      destroyOnClose: !0,
      visible: r,
      header: l(a.EDIT_LIVE),
      onClose: x,
      width: be.FORM,
      placement: "center",
      className: "edit-live-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: x, children: l(a.CANCEL) }),
        /* @__PURE__ */ e(
          K,
          {
            shape: "round",
            theme: "primary",
            onClick: $,
            loading: z,
            disabled: z || !d.liveName.trim() || ((_ = D.current) == null ? void 0 : _.isValidating) || ((W = D.current) == null ? void 0 : W.hasUrlError),
            children: l(z ? "Saving" : "Save")
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { className: "edit-live-form", labelWidth: lt(100), children: [
        /* @__PURE__ */ e(de, { label: l(a.LIVE_ID), children: /* @__PURE__ */ e(
          he,
          {
            value: n.liveId || n.id,
            disabled: !0,
            readonly: !0
          }
        ) }),
        /* @__PURE__ */ e(de, { label: l(a.LIVE_TITLE), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            he,
            {
              value: d.liveName,
              onChange: (F) => f((R) => ({ ...R, liveName: String(F) })),
              placeholder: l(a.ENTER_LIVE_TITLE),
              status: G(d.liveName) > ke ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(d.liveName) > ke ? " byte-overflow" : ""}`, children: [
                G(d.liveName),
                "/",
                ke
              ] })
            }
          ),
          G(d.liveName) > ke && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: l(a.TITLE_CANNOT_EXCEED_100_BYTES) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: l(a.COVER_IMAGE), children: /* @__PURE__ */ e(
          Ft,
          {
            ref: D,
            value: d.coverUrl,
            onChange: (F) => {
              f((R) => ({ ...R, coverUrl: F })), j(!1);
            },
            type: "cover",
            uploadEnabled: c,
            cropEnabled: !0,
            aspectRatio: S,
            placeholder: l(a.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE),
            previewHeight: 140,
            maxBytes: 200,
            deferUpload: c,
            onFileReady: (F) => j(!!F)
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
            g.map((F, R) => {
              const U = G(F.key), Y = G(F.value), ne = U > Ue.maxKeyBytes, V = Y > Ue.maxValueBytes, le = Ut(F);
              return /* @__PURE__ */ u("div", { className: "custom-info-row", children: [
                /* @__PURE__ */ e("div", { className: "custom-input-wrap", children: /* @__PURE__ */ e(
                  he,
                  {
                    value: F.key,
                    onChange: (Ce) => A(R, "key", String(Ce)),
                    placeholder: l("Enter Key"),
                    status: ne || le ? "error" : "default",
                    tips: ne ? l("Key exceeds byte limit", { max: Ue.maxKeyBytes }) : le ? l("Custom info key required") : ""
                  }
                ) }),
                /* @__PURE__ */ e("div", { className: "custom-input-wrap custom-value-wrap", children: /* @__PURE__ */ e(
                  he,
                  {
                    value: F.value,
                    onChange: (Ce) => A(R, "value", String(Ce)),
                    placeholder: l("Enter Value"),
                    status: V ? "error" : "default",
                    tips: V ? l("Value exceeds 2KB limit") : ""
                  }
                ) }),
                /* @__PURE__ */ e(
                  K,
                  {
                    shape: "square",
                    variant: "text",
                    className: "remove-custom-info-btn",
                    onClick: () => L(R),
                    title: l(a.DELETE),
                    icon: /* @__PURE__ */ e(ar, { size: 14 })
                  }
                )
              ] }, R);
            }),
            g.length < Ue.maxCount && /* @__PURE__ */ e(K, { variant: "text", className: "add-custom-info-btn", onClick: X, icon: /* @__PURE__ */ e(or, { size: 14 }), theme: "primary", children: l("Add") })
          ] })
        ] })
      ] })
    },
    `edit-live-${n == null ? void 0 : n.id}`
  );
}
function Mi(r) {
  const n = te(r);
  n.current = r, ee(() => {
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
  fitContentMaxRows: h = ga
}) {
  const N = te(null), m = te(null), S = te(null), w = te(null), E = te(null), [M, O] = b({}), y = te({}), [I, P] = b(0);
  Mi(() => P((L) => L + 1));
  const z = T((L) => L.fitContent || v && L.width === void 0, [v]), H = _e(() => {
    const L = {};
    for (const C of r) {
      let x;
      if (z(C)) {
        const $ = M[C.key];
        x = $ !== void 0 ? `${$}px` : typeof C.minWidth == "number" ? `${C.minWidth}px` : void 0;
      }
      x === void 0 && (x = Di(C.width)), L[C.key] = { width: x };
    }
    return L;
  }, [r, M, z]), D = _e(() => {
    const L = {};
    for (const C of r) {
      const x = { textAlign: C.align };
      C.ellipsis ? (x.whiteSpace = "nowrap", x.overflow = "hidden", x.textOverflow = "ellipsis") : z(C) && !C.flexible && (x.whiteSpace = "nowrap"), L[C.key] = x;
    }
    return L;
  }, [r, z]), Z = _e(() => fa(r, M, z) ?? {}, [r, M, z]);
  mr(() => {
    const L = r.map((F, R) => ({ column: F, index: R })).filter(({ column: F }) => z(F));
    if (L.length === 0 || typeof document > "u") {
      y.current = {}, O((F) => Object.keys(F).length === 0 ? F : {});
      return;
    }
    let C = 0;
    const x = () => {
      var Ce, Se;
      const F = ((Ce = S.current) == null ? void 0 : Ce.querySelectorAll("thead th")) || [], R = Array.from(((Se = E.current) == null ? void 0 : Se.querySelectorAll("tbody tr")) || []).slice(0, h), U = [], Y = [];
      L.forEach(({ column: ie, index: J }) => {
        const B = F[J];
        B && (U.push(B), Y.push(ie.key)), R.forEach((ae) => {
          const Ee = ae.children[J];
          Ee && (U.push(Ee), Y.push(ie.key));
        });
      });
      const ne = Na(U), V = {};
      ne.forEach((ie, J) => {
        const B = Y[J];
        (V[B] === void 0 || ie > V[B]) && (V[B] = ie);
      });
      const le = {};
      for (const { column: ie } of L)
        V[ie.key] !== void 0 && (le[ie.key] = Ca(V[ie.key], ie.minWidth, ie.maxWidth));
      y.current = le;
    }, $ = () => {
      var Y;
      const F = y.current;
      if (Object.keys(F).length === 0) {
        O((ne) => Object.keys(ne).length === 0 ? ne : {});
        return;
      }
      const R = ((Y = w.current) == null ? void 0 : Y.clientWidth) ?? 0, U = va(
        r,
        F,
        R,
        z
      );
      O((ne) => Ea(ne, U) ? ne : U);
    }, _ = () => {
      x(), $();
    };
    C = window.requestAnimationFrame(_);
    const W = new ResizeObserver(() => {
      window.cancelAnimationFrame(C), C = window.requestAnimationFrame($);
    });
    return N.current && W.observe(N.current), () => {
      window.cancelAnimationFrame(C), W.disconnect();
    };
  }, [r, n, l, v, h, I, z]), mr(() => {
    var $;
    const L = N.current, C = ($ = E.current) == null ? void 0 : $.parentElement;
    if (!L || !C) return;
    const x = C.scrollHeight > C.clientHeight ? Oi() : 0;
    L.style.setProperty("--scrollbar-width", `${x}px`);
  }, [n]);
  const j = /* @__PURE__ */ e("colgroup", { children: r.map((L) => /* @__PURE__ */ e("col", { style: H[L.key] }, L.key)) }), X = (L, C) => typeof t == "function" ? t(L, C) : String(L[t]), A = (L, C) => typeof p == "function" ? p(L, C) : p;
  return ee(() => {
    const L = m.current, C = w.current;
    if (!L || !C) return;
    const x = () => {
      L && C && (L.scrollLeft = C.scrollLeft);
    };
    return C.addEventListener("scroll", x), () => C.removeEventListener("scroll", x);
  }, []), /* @__PURE__ */ u("div", { ref: N, className: `fixed-header-table ${i}`.trim(), children: [
    /* @__PURE__ */ e("div", { ref: m, className: `fixed-header-table__header ${o}`.trim(), children: /* @__PURE__ */ u(
      "table",
      {
        ref: S,
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
          /* @__PURE__ */ e("tbody", { children: n.map((L, C) => /* @__PURE__ */ e("tr", { className: A(L, C), children: r.map((x) => /* @__PURE__ */ e("td", { className: x.className, style: D[x.key], children: x.render ? x.render(L, C) : xi(L, x.key) }, x.key)) }, X(L, C))) })
        ]
      }
    ) })
  ] });
}
function Ke({ actions: r, className: n = "" }) {
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
function Ao() {
  var P, z, H, D, Z, j, X, A;
  const r = _t(), { t: n } = pe(), {
    createLive: t,
    updateLive: i,
    fetchLiveDetail: c,
    endLive: o
  } = mt(), s = (P = yt().components) == null ? void 0 : P.roomList, p = te(null);
  p.current || (p.current = new qn({
    endLive: o,
    onEnterLive: (L) => r(`/live-control/${L}`),
    t: n,
    toast: q
  }));
  const l = p.current, d = tr(l.subscribe, l.getState, l.getState);
  ee(() => (l.init(), () => l.dispose()), []);
  const f = Ui(), g = _e(() => Xn({ hasExtraColumn: !!(s != null && s.tableExtraColumns) }).map((C) => {
    switch (C.key) {
      case "liveId":
        return {
          ...C,
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
          ...C,
          title: n(a.LIVE_TITLE),
          render: (x) => /* @__PURE__ */ e("span", { className: "live-list-text", children: x.liveName || "-" })
        };
      case "coverUrl":
        return {
          ...C,
          title: n(a.COVER_IMAGE),
          render: (x) => /* @__PURE__ */ e("div", { className: "live-list-cover-cell", children: /* @__PURE__ */ e("img", { src: x.coverUrl || dr, alt: x.liveName, className: "live-list-cover-image" }) })
        };
      case "anchor":
        return {
          ...C,
          title: n(a.ANCHOR_ID),
          render: (x) => {
            var $;
            return /* @__PURE__ */ e("span", { className: "live-list-text", children: (($ = x.anchor) == null ? void 0 : $.userId) || "-" });
          }
        };
      case "createdAt":
        return {
          ...C,
          title: n(a.CREATE_TIME),
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
          title: n(a.ACTIONS),
          render: (x) => {
            const $ = jn({
              live: x,
              t: n,
              icons: {
                enter: /* @__PURE__ */ e(dn, {}),
                detail: /* @__PURE__ */ e(Be, {}),
                edit: /* @__PURE__ */ e(Jt, {}),
                delete: /* @__PURE__ */ e(ln, {})
              },
              onEnter: (_) => l.enterLive(_),
              onDetail: (_) => void l.showDetail(_),
              onEdit: (_) => l.openEditModal(_),
              onDelete: (_) => l.requestDelete(_)
            });
            return /* @__PURE__ */ u(ue, { children: [
              /* @__PURE__ */ e(Ke, { actions: $ }),
              /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.rowActions, props: { live: x } })
            ] });
          }
        };
      default:
        return { ...C, title: "" };
    }
  }), [n, s, l]), { lives: v, loading: h, refreshing: N, currentPage: m, hasMoreData: S, searchInput: w, obsModal: E, confirmDialog: M, isCreateModalVisible: O, isEditModalVisible: y, editingLive: I } = d;
  return /* @__PURE__ */ u("div", { className: "live-list-page", children: [
    /* @__PURE__ */ u("div", { className: "live-list-header", children: [
      /* @__PURE__ */ e("h1", { className: "live-list-title", children: n(a.LIVE_MANAGEMENT) }),
      /* @__PURE__ */ e(De, { slot: s == null ? void 0 : s.beforeToolbar, props: { lives: v, loading: h } }),
      /* @__PURE__ */ u("div", { className: "header-actions", children: [
        /* @__PURE__ */ e(
          he,
          {
            value: w,
            onChange: (L) => l.setSearchInput(String(L)),
            onEnter: () => {
              if (Jn(w, Ht)) {
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
            status: G(w) > Ht ? "error" : "default",
            tips: G(w) > Ht ? n(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(
          K,
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
          K,
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
        K,
        {
          variant: "outline",
          size: "small",
          disabled: m <= 1,
          onClick: () => l.goToPage(1),
          children: n(a.FIRST_PAGE)
        }
      ),
      /* @__PURE__ */ e(
        K,
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
        K,
        {
          variant: "outline",
          size: "small",
          disabled: !S,
          onClick: () => l.goToPage(m + 1),
          children: n(a.NEXT_PAGE)
        }
      )
    ] }),
    /* @__PURE__ */ e(
      Ai,
      {
        visible: O,
        onClose: () => l.closeCreateModal(),
        onSuccess: () => l.onLiveCreated(),
        onCreate: t,
        uploadEnabled: f
      }
    ),
    I && /* @__PURE__ */ e(
      Ri,
      {
        visible: y,
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
        onUpdate: (L, C) => i({ ...C, liveId: L }),
        onFetchDetail: c,
        uploadEnabled: f,
        extraFieldsSlot: s == null ? void 0 : s.roomFormExtraFields
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: M.visible,
        header: M.title,
        onClose: () => l.cancelDelete(),
        width: be.CONFIRM,
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => l.cancelDelete(), children: n(a.CANCEL) }),
          /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: () => void l.confirmDelete(), children: n(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: M.content })
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: E.visible && !!E.live,
        header: n(a.LIVE_INFORMATION),
        onClose: () => l.closeDetail(),
        width: be.INFO,
        className: "live-info-modal",
        footer: /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => l.closeDetail(), children: n(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "live-info-form", children: [
          /* @__PURE__ */ u("div", { className: "live-info-section", children: [
            /* @__PURE__ */ e("div", { className: "live-info-section-title", children: n(a.BASIC_INFORMATION) }),
            /* @__PURE__ */ u("div", { className: "live-info-card", children: [
              /* @__PURE__ */ u("div", { className: "live-info-row", children: [
                /* @__PURE__ */ e("span", { className: "live-info-label", children: n(a.ANCHOR_ID) }),
                /* @__PURE__ */ u("div", { className: "live-info-value-area", children: [
                  /* @__PURE__ */ e("span", { className: "live-info-value", children: ((H = (z = E.live) == null ? void 0 : z.anchor) == null ? void 0 : H.userId) || "-" }),
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
                /* @__PURE__ */ e("div", { className: "live-info-value-area", children: /* @__PURE__ */ e("span", { className: "live-info-value live-info-value-url", children: ((A = E.live) == null ? void 0 : A.coverUrl) || "-" }) })
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
  const [r, n] = b(!1);
  return ee(() => {
    let t = !1;
    return qr().then((i) => {
      t || n(i);
    }), () => {
      t = !0;
    };
  }, []), r;
}
function ki() {
  const [r, n] = b(""), [t, i] = b(""), c = T((o, s) => {
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
  const { currentLive: t, setCurrentLive: i } = mt(), { joinLive: c, leaveLive: o, subscribeEvent: s, unsubscribeEvent: p } = Wa(), { login: l, loginUserInfo: d } = Xr(), [f, g] = b(!1), v = te(""), h = te(!1), N = te(null), m = te(n);
  ee(() => {
    m.current = n;
  }, [n]);
  const S = (d == null ? void 0 : d.userId) || "", w = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__;
  ee(() => {
    if (w) {
      console.log("[useLiveControl] Mock mode, skipping TUILogin"), g(!0);
      return;
    }
    if (f) return;
    (async () => {
      var y;
      try {
        const I = await ur();
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
        (I == null ? void 0 : I.code) === 2025 || (y = I == null ? void 0 : I.message) != null && y.includes("重复登录") ? (console.log("[useLiveControl] Already logged in"), g(!0)) : console.error("[useLiveControl] TUILogin failed:", I);
      }
    })();
  }, [w, f, l]), ee(() => {
    if (r)
      return console.log("[useLiveControl] Setting current live:", r), i(r), () => {
        console.log("[useLiveControl] Clearing current live"), i(null);
      };
  }, [r, i]);
  const E = T(async () => {
    if (!(!r || !t || !f)) {
      if (v.current === r) {
        console.log("[useLiveControl] Already joined live:", r);
        return;
      }
      try {
        if (console.log("[useLiveControl] Joining live:", r), await c({ liveId: r }), v.current = r, !h.current && s) {
          const O = () => {
            var y;
            console.log("[useLiveControl] Live ended event received"), (y = m.current) == null || y.call(m);
          };
          N.current = O, s(br.ON_LIVE_ENDED, O), h.current = !0;
        }
        console.log("[useLiveControl] Successfully joined live:", r);
      } catch (O) {
        console.error("[useLiveControl] Failed to join live:", O);
      }
    }
  }, [r, t, f, c, s]);
  ee(() => {
    E();
  }, [E]), ee(() => {
    v.current = "";
  }, [r]), ee(() => () => {
    console.log("[useLiveControl] Component unmounting, cleaning up"), h.current && p && N.current && (p(br.ON_LIVE_ENDED, N.current), h.current = !1), v.current && o().catch((O) => {
      console.error("[useLiveControl] Failed to leave live on unmount:", O);
    });
  }, [o, p]);
  const M = T((O) => {
    console.log("[useLiveControl] Manually leaving live"), o().then(() => {
      v.current = "", O == null || O();
    }).catch((y) => {
      console.error("[useLiveControl] Failed to leave live:", y);
    });
  }, [o]);
  return {
    currentLive: t,
    tuiLoginReady: f,
    currentUserId: S,
    handleLeaveLive: M
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
                K,
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
    const t = r.sender.userId, i = t === ct.current.anchorUserId, c = r.sender.nameCard || r.sender.userName || t, o = r.messageType === 0 ? r.textContent : r.data || "", s = Qn(o);
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
  const { t: s } = pe(), { loginUserInfo: p } = Xr(), { audienceList: l, disableSendMessage: d } = Ba(), [f, g] = b(!1), [v, h] = b({ top: 0, left: 0 }), [N, m] = b(null), [S, w] = b(""), [E, M] = b(!1), O = te(null), y = te(null), I = n;
  ct.current.t = s;
  const P = (A) => l == null ? void 0 : l.find((L) => L.userId === A), z = (A) => {
    const L = P(A);
    if (L)
      return L.isMessageDisabled === !0;
    const C = c.find((x) => x.userId === A);
    return C ? C.endTime > Date.now() / 1e3 : !1;
  }, H = (A) => {
    const L = o.find((C) => C.userId === A);
    return L ? L.endTime > Date.now() / 1e3 : !1;
  };
  ee(() => {
    if (!f) return;
    const A = (L) => {
      setTimeout(() => {
        y.current && y.current.contains(L.target) || (g(!1), m(null));
      }, 100);
    };
    return document.addEventListener("mousedown", A), () => {
      document.removeEventListener("mousedown", A);
    };
  }, [f]);
  const D = T((A, L) => {
    if (A.stopPropagation(), console.log("[MessageList] handleMessageClick called", {
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
    const C = A.target.closest(".message-item");
    if (!C) {
      console.log("[MessageList] message-item element not found");
      return;
    }
    const x = C.getBoundingClientRect(), $ = x.bottom + 4, _ = Math.min(x.left, window.innerWidth - 160);
    console.log("[MessageList] Showing dropdown menu", { top: $, left: _ }), h({ top: $, left: Math.max(0, _) }), m(L), g(!0);
  }, [p, I]);
  ee(() => {
    ct.current.anchorUserId = I, ct.current.onMessageClick = D;
  });
  const Z = T(async (A) => {
    if (A == null || A.preventDefault(), E) return;
    const L = S.trim();
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
    M(!0);
    try {
      const C = await ka(r, L);
      if ((C == null ? void 0 : C.ErrorCode) !== void 0 && C.ErrorCode !== 0)
        throw new Error(C.ErrorInfo || s(a.SEND_FAILED));
      if (C != null && C.ActionStatus && C.ActionStatus !== "OK")
        throw new Error(C.ErrorInfo || s(a.SEND_FAILED));
      w(""), q.success(s(a.MESSAGE_SENT));
    } catch (C) {
      const x = C, $ = x.ErrorInfo || (x instanceof Error ? x.message : String(x)) || s(a.UNKNOWN_HOST);
      q.error(s(a.SEND_FAILED_WITH_ERROR, { error: $ }));
    } finally {
      M(!1);
    }
  }, [S, r, E, s]), j = () => {
    if (N && i) {
      const A = N.sender.userId;
      if (I && A !== Ot(I)) {
        const L = N.sender.userName || N.sender.nameCard || N.sender.userId, C = H(A);
        i(A, L, C);
      }
    }
    g(!1), m(null);
  }, X = async () => {
    if (!N) return;
    const A = N.sender.userId;
    if (I && A === Ot(I)) {
      g(!1), m(null);
      return;
    }
    const L = N.sender.userName || N.sender.nameCard || N.sender.userId, C = z(A);
    try {
      d ? (await d({ userId: A, isDisable: !C }), console.log(C ? "Unmute successful" : "Mute successful")) : t && t(A, L, C);
    } catch (x) {
      console.error("SDK mute failed, using fallback method:", x), t && t(A, L, C);
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
              value: S,
              onChange: (A) => w(A.target.value),
              placeholder: s(a.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
              disabled: E || !r
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              type: "submit",
              className: "admin-message-send-btn",
              disabled: E || !r || !S.trim(),
              children: s(E ? a.SENDING : a.SEND_MESSAGE)
            }
          )
        ] }),
        f && N && $a(
          /* @__PURE__ */ u(
            "div",
            {
              ref: y,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: v.top,
                left: v.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: X, children: z(N.sender.userId) ? /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(xt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.UNMUTE) })
                ] }) : /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(Gr, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: s(a.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: j, children: H(N.sender.userId) ? /* @__PURE__ */ u(ue, { children: [
                  /* @__PURE__ */ e(un, { size: 14 }),
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
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(Ya, { height: "99%", children: ({ audience: h }) => {
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
  const { currentLive: m, currentUserId: S, handleLeaveLive: w } = Pi({
    liveId: t,
    onLiveEnded: h
  }), E = _e(
    () => {
      var j;
      return ((j = m == null ? void 0 : m.liveOwner) == null ? void 0 : j.userId) || (n == null ? void 0 : n.anchor.id) || "";
    },
    [(H = m == null ? void 0 : m.liveOwner) == null ? void 0 : H.userId, n == null ? void 0 : n.anchor.id]
  ), M = _e(
    () => {
      var j;
      return (n == null ? void 0 : n.anchor.avatar) || ((j = m == null ? void 0 : m.liveOwner) == null ? void 0 : j.avatarUrl) || "";
    },
    [n == null ? void 0 : n.anchor.avatar, (D = m == null ? void 0 : m.liveOwner) == null ? void 0 : D.avatarUrl]
  ), O = _e(
    () => {
      var j;
      return (n == null ? void 0 : n.anchor.name) || ((j = m == null ? void 0 : m.liveOwner) == null ? void 0 : j.userName) || N("Unknown Anchor");
    },
    [n == null ? void 0 : n.anchor.name, (Z = m == null ? void 0 : m.liveOwner) == null ? void 0 : Z.userName, N]
  ), y = _e(
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
        liveAnchorAvatar: M,
        liveAnchorName: O,
        isVoiceLive: y,
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
        currentUserId: S,
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
const Ki = (r, n, t) => {
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
  const t = parseFloat(getComputedStyle(r).columnGap) || 0, i = r.clientWidth, c = [7, 4, 3, 2, 1].find((o) => Ki(n, o, t) <= i + 1) || 1;
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
  const s = te(null);
  return ee(() => {
    const N = s.current;
    if (!N) return;
    let m = null;
    const S = () => {
      m !== null && cancelAnimationFrame(m), m = requestAnimationFrame(() => {
        m = null, qi(N);
      });
    }, w = new ResizeObserver(S);
    w.observe(N);
    const E = new MutationObserver(S);
    return E.observe(N, { childList: !0, subtree: !0, characterData: !0 }), S(), () => {
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
  onDelete: S,
  onOpenDropdown: w,
  t: E
}) {
  return /* @__PURE__ */ u("div", { className: "moderation-card", children: [
    /* @__PURE__ */ u("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ u("div", { className: "moderation-header-left", children: [
        /* @__PURE__ */ e("h3", { children: E(a.CONTENT_MODERATION) }),
        /* @__PURE__ */ e(
          K,
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
          K,
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
          K,
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
                const O = M.type.split(/[,\s;|]+/).map((y) => y.trim()).filter(Boolean).map(
                  (y, I) => I > 0 ? " " + E(Dr(y)) : E(Dr(y))
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
                      onClick: () => S(M)
                    },
                    {
                      key: "more",
                      label: E(a.MORE),
                      suffixCaret: !0,
                      onClick: (O) => w(O, M)
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
      me,
      {
        visible: r,
        header: g(a.MUTED_VIEWERS),
        onClose: p,
        width: be.WIDE,
        footer: /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: p, children: g(a.CLOSE) }),
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
      me,
      {
        visible: n,
        header: g(a.BANNED_VIEWERS),
        onClose: l,
        width: be.WIDE,
        footer: /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: l, children: g(a.CLOSE) }),
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
function to(r, n) {
  const {
    fetchTextModerationList: t,
    approveTextModerationItems: i,
    bypassCorrectionKeyword: c
  } = Zr({ liveId: r || "", pageSize: Rt }), [o, s] = b([]), [p, l] = b(!1), [d, f] = b(1), [g, v] = b(0), [h, N] = b([]), [m, S] = b(null), [w, E] = b(null), M = _e(() => ta(g, Rt), [g]), O = T(
    async (_ = 1) => {
      if (r) {
        l(!0);
        try {
          const W = Math.max(1, _), F = await t({
            pageNum: W,
            pageSize: Rt,
            minutes: 10,
            violationOnly: !0
          }), R = F.list || [];
          s(R), v(F.total || 0), f(W), N((U) => U.filter((Y) => R.some((ne) => ne.id === Y)));
        } catch (W) {
          console.error("[moderation] load failed:", W), q.error(n(a.OPERATION_FAILED, { error: W.message || n(a.UNKNOWN_ERROR) }));
        } finally {
          l(!1);
        }
      }
    },
    [r, n, t]
  );
  ee(() => {
    r && O(1);
  }, [r]);
  const y = T(async () => {
    await O(d), q.success(n(a.REFRESHED));
  }, [O, d, n]), I = T(
    (_) => {
      _ < 1 || _ > M || _ === d || O(_);
    },
    [O, d, M]
  ), P = T(
    async (_) => {
      N((F) => F.filter((R) => !_.includes(R)));
      const W = ra(
        d,
        g,
        _.length,
        Rt
      );
      await O(W);
    },
    [O, d, g]
  ), z = Ve({
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
      q.success(n(a.RELEASE_AND_RESEND_SUCCESS)), m && await P([m.id]), S(null);
    },
    onError: (_) => {
      q.error(n(a.OPERATION_FAILED, { error: _.message || n(a.UNKNOWN_ERROR) }));
    }
  }), H = T((_) => {
    S(_), z.requestConfirm();
  }, [z]), D = Ve({
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
    onError: (_) => {
      q.error(n(a.OPERATION_FAILED, { error: _.message || n(a.UNKNOWN_ERROR) }));
    }
  }), Z = T((_) => {
    E(_), D.requestConfirm();
  }, [D]), j = Ve({
    action: async () => {
      if (!r) throw new Error("liveId is required");
      const _ = [...h], W = o.filter((F) => _.includes(F.id)).map((F) => ({ id: F.id, content: F.content, userId: F.userId }));
      await i({ ids: _, items: W, liveId: r });
    },
    confirm: {
      title: n(a.RELEASE_AND_RESEND),
      content: n(a.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      q.success(n(a.RELEASE_AND_RESEND_SUCCESS));
      const _ = [...h];
      await P(_);
    },
    onError: (_) => {
      q.error(n(a.OPERATION_FAILED, { error: _.message || n(a.UNKNOWN_ERROR) }));
    }
  }), X = T(() => {
    if (h.length === 0) {
      q.warning(n(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    j.requestConfirm();
  }, [j, h]), A = T(
    async (_) => {
      try {
        await i({ ids: [_.id] }), q.info(n(a.DELETED)), await P([_.id]);
      } catch (W) {
        console.error("[moderation] delete failed:", W), q.error(n(a.OPERATION_FAILED, { error: W.message || n(a.UNKNOWN_ERROR) }));
      }
    },
    [P, n]
  ), L = T(async () => {
    if (h.length === 0) {
      q.warning(n(a.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const _ = [...h];
    try {
      await i({ ids: _ }), q.info(n(a.DELETED)), await P(_);
    } catch (W) {
      console.error("[moderation] bulk delete failed:", W), q.error(n(a.OPERATION_FAILED, { error: W.message || n(a.UNKNOWN_ERROR) }));
    }
  }, [h, P, n]), C = T((_) => {
    N((W) => W.includes(_) ? W.filter((F) => F !== _) : [...W, _]);
  }, []), x = T(() => {
    N((_) => {
      const W = o.map((F) => F.id);
      return _.length === W.length ? [] : W;
    });
  }, [o]), $ = _e(() => {
    const _ = o.map((W) => W.id);
    return na(h, _);
  }, [o, h]);
  return {
    moderationList: o,
    moderationLoading: p,
    moderationPage: d,
    moderationTotal: g,
    moderationTotalPages: M,
    moderationSelectedIds: h,
    isAllOnPageSelected: $,
    releaseConfirmDialog: z.confirmDialog,
    bypassConfirmDialog: D.confirmDialog,
    bulkApproveConfirmDialog: j.confirmDialog,
    handleRefreshModeration: y,
    goToModerationPage: I,
    handleRelease: H,
    handleBypassCorrection: Z,
    handleDeleteModeration: A,
    handleBulkApprove: X,
    handleBulkDelete: L,
    toggleSelectOne: C,
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
  } = Zr({ liveId: r || "", pageSize: 20 }), [v, h] = b([]), [N, m] = b([]), [S, w] = b(!1), [E, M] = b(null), [O, y] = b(null), [I, P] = b(null), [z, H] = b(null);
  _e(() => {
    Array.isArray(i) && h(i);
  }, [i]), _e(() => {
    Array.isArray(c) && m(c);
  }, [c]);
  const D = (R, U) => {
    R === "success" ? q.success(U) : q.error(U);
  }, Z = Ve({
    action: async () => {
      if (!O) throw new Error("No target");
      await d({ memberAccounts: [O.userId] });
    },
    confirm: {
      title: n(a.CONFIRM_UNMUTE_USER),
      content: O ? n(a.UNMUTE_CONFIRM, { name: O.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.UNMUTED_SUCCESS, { name: (O == null ? void 0 : O.userName) || "" })), await _(), y(null);
    },
    onError: (R) => {
      const { code: U, info: Y } = rt(R), ne = U ? tt(U, Y) : R.message || n(a.UNKNOWN_HOST);
      D("error", n(a.OPERATION_FAILED, { error: ne }));
    }
  }), j = Ve({
    action: async () => {
      if (!E) throw new Error("No target");
      await l({ memberAccounts: [E.userId], muteTime: aa });
    },
    confirm: {
      title: n(a.CONFIRM_MUTE_USER),
      content: E ? n(a.MUTE_WARNING, { name: E.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.MUTED_SUCCESS, { name: (E == null ? void 0 : E.userName) || "" })), await _(), M(null);
    },
    onError: (R) => {
      const { code: U, info: Y } = rt(R), ne = U ? tt(U, Y) : R.message || n(a.UNKNOWN_HOST);
      D("error", n(a.MUTE_FAILED, { error: ne }));
    }
  }), X = T((R, U, Y) => {
    r && (Nr(R, t) || (Y ? (y({ userId: R, userName: U }), Z.requestConfirm()) : (M({ userId: R, userName: U }), j.requestConfirm())));
  }, [r, t, Z, j]), A = Ve({
    action: async () => {
      if (!z) throw new Error("No target");
      await g({ memberAccounts: [z.userId] });
    },
    confirm: {
      title: n(a.CONFIRM_UNBAN_USER),
      content: z ? n(a.UNBAN_CONFIRM, { name: z.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.UNBANNED_SUCCESS, { name: (z == null ? void 0 : z.userName) || "" })), await W(), H(null);
    },
    onError: (R) => {
      const { code: U, info: Y } = rt(R), ne = U ? tt(U, Y) : R.message || n(a.UNKNOWN_HOST);
      D("error", n(a.OPERATION_FAILED, { error: ne }));
    }
  }), L = Ve({
    action: async () => {
      if (!I) throw new Error("No target");
      await f({ memberAccounts: [I.userId], duration: ia });
    },
    confirm: {
      title: n(a.CONFIRM_BAN_USER),
      content: I ? n(a.BAN_WARNING, { name: I.userName }) : ""
    },
    onSuccess: async () => {
      D("success", n(a.BANNED_SUCCESS, { name: (I == null ? void 0 : I.userName) || "" })), await W(), P(null);
    },
    onError: (R) => {
      const { code: U, info: Y } = rt(R), ne = U ? tt(U, Y) : R.message || n(a.UNKNOWN_HOST);
      D("error", n(a.BAN_FAILED, { error: ne }));
    }
  }), C = T((R, U, Y) => {
    r && (Nr(R, t) || (Y ? (H({ userId: R, userName: U }), A.requestConfirm()) : (P({ userId: R, userName: U }), L.requestConfirm())));
  }, [r, t, A, L]), x = T((R) => {
    r && (y({ userId: R, userName: R }), Z.requestConfirm());
  }, [r, Z]), $ = T((R) => {
    r && (H({ userId: R, userName: R }), A.requestConfirm());
  }, [r, A]), _ = T(async () => {
    if (r) {
      w(!0);
      try {
        const R = await s();
        h(Array.isArray(R) ? R : []);
      } catch (R) {
        console.error("获取禁言列表失败:", R);
        const { code: U, info: Y } = rt(R), ne = U ? tt(U, Y) : R.message || n(a.UNKNOWN_HOST);
        D("error", n(a.FETCH_MUTED_LIST_FAILED, { error: ne }));
      } finally {
        w(!1);
      }
    }
  }, [r, n, s]), W = T(async () => {
    if (r) {
      w(!0);
      try {
        const R = await p();
        m(Array.isArray(R) ? R : []);
      } catch (R) {
        console.error("获取封禁列表失败:", R);
        const { code: U, info: Y } = rt(R), ne = U ? tt(U, Y) : R.message || n(a.UNKNOWN_HOST);
        D("error", n(a.FETCH_BANNED_LIST_FAILED, { error: ne }));
      } finally {
        w(!1);
      }
    }
  }, [r, n, p]), F = T((R) => v.some((U) => U.userId === R), [v]);
  return {
    mutedList: v,
    bannedList: N,
    memberListLoading: S,
    fetchMutedList: _,
    fetchBannedList: W,
    handleMuteAudience: X,
    handleBanAudience: C,
    handleUnmuteFromList: x,
    handleUnbanFromList: $,
    isUserMuted: F,
    muteConfirmDialog: j.confirmDialog,
    unmuteConfirmDialog: Z.confirmDialog,
    banConfirmDialog: L.confirmDialog,
    unbanConfirmDialog: A.confirmDialog
  };
}
function Ro() {
  var Tt, wt, ft, We;
  const { liveId: r } = Ga();
  ee(() => (console.log("[LiveControl] ✅ Component MOUNTED, liveId:", r), () => {
    console.log("[LiveControl] ❌ Component UNMOUNTED, liveId:", r);
  }), []);
  const n = _t(), t = yt(), i = (Tt = t.components) == null ? void 0 : Tt.roomControl;
  (wt = t.components) == null || wt.liveMonitor;
  const { t: c } = pe(), {
    init: o,
    fetchLiveDetail: s,
    fetchLiveStats: p,
    endLive: l,
    updateLive: d
  } = mt(), [f, g] = b({});
  T(async (k) => {
    if (!(!k || k.length === 0))
      try {
        const re = await Pa(k);
        g((ce) => ({ ...ce, ...Object.fromEntries(re) }));
      } catch (re) {
        console.error("[LiveControl] fetchUserProfiles failed:", re);
      }
  }, []);
  const v = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__, [h, N] = b(v), [m, S] = b(null), [w, E] = b(!1), [M, O] = b("chat"), [y, I] = b(!0), { successMsg: P, errorMsg: z } = ki(), [H, D] = b(null), [Z, j] = b(!1), [X, A] = b(!1), L = Va(), C = Ve({
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
      S((k) => k ? { ...k, isMessageDisabled: !0 } : null);
    }
  }), [$, _] = b({
    visible: !1,
    liveId: "",
    liveName: ""
  }), W = () => {
    _({
      visible: !0,
      liveId: r || "",
      liveName: (m == null ? void 0 : m.liveName) || ""
    });
  }, F = te(null), R = te(null), [U, Y] = b(null), [ne, V] = b(0), [le, Ce] = b(null), Se = _e(
    () => {
      var k, re;
      return ((k = m == null ? void 0 : m.anchor) == null ? void 0 : k.userId) || ((re = m == null ? void 0 : m.anchor) == null ? void 0 : re.id) || "";
    },
    [m]
  ), ie = to(r, c), J = ro(r, c, Se);
  ee(() => () => {
    r && (console.log("[LiveControl] Component unmounting, auto end live:", r), l(r).catch((k) => {
      console.error("[LiveControl] Failed to end live on unmount:", k);
    }));
  }, [r, l]);
  const B = ht({
    action: async () => r ? await s(r) : null,
    successMessage: "",
    errorMessage: c(a.GET_ERROR_MESSAGE),
    onSuccess: (k) => {
      var Fe;
      if (!k) return;
      const re = (Fe = k.anchor) == null ? void 0 : Fe.userId, ce = Br(k, re || "-"), we = zr(k);
      if (k.anchor ? Y({
        nick: k.anchor.nick || ce,
        avatarUrl: k.anchor.avatarUrl || we
      }) : Y({
        nick: ce,
        avatarUrl: we
      }), S({
        liveId: k.liveId,
        id: k.liveId,
        liveName: k.liveName || c(a.UNNAMED_LIVE_SHORT),
        coverUrl: k.coverUrl || dr,
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
        V(Xe > 0 ? Xe : 0);
      }
    }
  }), ae = T(async () => {
    await B.execute();
  }, [B.execute]), Ee = T(async () => {
    if (r)
      try {
        await p(r);
      } catch {
      }
  }, [r]), Ie = _e(() => {
    var ce;
    const k = (m == null ? void 0 : m.onlineCount) || 0, re = ((ce = m == null ? void 0 : m.stats) == null ? void 0 : ce.totalUniqueCommenters) ?? 0;
    return k <= 0 ? "0%" : (re / k * 100).toFixed(1) + "%";
  }, [m == null ? void 0 : m.onlineCount, (ft = m == null ? void 0 : m.stats) == null ? void 0 : ft.totalUniqueCommenters]), [ve, Le] = b(() => {
    const k = /* @__PURE__ */ new Date();
    return `${String(k.getHours()).padStart(2, "0")}:${String(k.getMinutes()).padStart(2, "0")}`;
  });
  T(() => {
    const k = /* @__PURE__ */ new Date();
    Le(`${String(k.getHours()).padStart(2, "0")}:${String(k.getMinutes()).padStart(2, "0")}`);
  }, []);
  const Te = 30, ye = te(null), Qe = te(!0);
  te(!1);
  const Wt = te(!0);
  T(() => {
    E(!0);
  }, []);
  const pt = T(() => {
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
  }, et = T(() => {
    Ce(null);
  }, []), hr = T((k, re) => {
    k.preventDefault(), k.stopPropagation();
    const ce = k.currentTarget.getBoundingClientRect();
    Ce({
      item: re,
      x: ce.right,
      y: ce.bottom + 4
    });
  }, []), $e = T(() => {
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
  ee(() => {
    var ce;
    const k = (ce = m == null ? void 0 : m.anchor) == null ? void 0 : ce.userId;
    if (!k) return;
    const re = f[k];
    re && Y({
      nick: re.nick || "",
      avatarUrl: re.avatarUrl || ""
    });
  }, [f, (We = m == null ? void 0 : m.anchor) == null ? void 0 : We.userId]), ee(() => {
    const k = m == null ? void 0 : m.createdAt;
    if (!k || (m == null ? void 0 : m.activityStatus) === 2)
      return;
    const re = () => {
      const we = Math.floor((Date.now() - k) / 1e3);
      V(we > 0 ? we : 0);
    };
    re();
    const ce = window.setInterval(re, 1e3);
    return () => {
      window.clearInterval(ce);
    };
  }, [m == null ? void 0 : m.createdAt, m == null ? void 0 : m.activityStatus]), ee(() => {
    if (!(H != null && H.visible) && !le) return;
    const k = (re) => {
      F.current && !F.current.contains(re.target) && $e(), R.current && !R.current.contains(re.target) && et();
    };
    return document.addEventListener("mousedown", k), () => document.removeEventListener("mousedown", k);
  }, [H == null ? void 0 : H.visible, $e, et, le]), ee(() => {
    M === "audience" && r && (J.fetchMutedList(), J.fetchBannedList());
  }, [M, r]), ee(() => {
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
        const re = await ur();
        re && re.sdkAppId !== 0 ? (console.log("[LiveControl] Initializing SDK with account:", re.userId), o({
          baseURL: "http://localhost:9000/api"
        }), N(!0), console.log("[LiveControl] SDK initialized successfully")) : console.error("[LiveControl] No valid credentials found");
      } catch (re) {
        console.error("[LiveControl] SDK init error:", re);
      }
    })();
  }, [v, h]), ee(() => {
    E(!1);
  }, [r]), ee(() => {
    if (console.log("[LiveControl] Main useEffect triggered:", { liveId: r, isMockMode: v, sdkReady: h }), Qe.current = !0, Wt.current = !0, r && (v || h))
      return console.log("[LiveControl] Condition met, calling fetchRoomInfo"), ae(), Ee(), J.fetchMutedList(), J.fetchBannedList(), () => {
        Qe.current = !1;
      };
    console.log("[LiveControl] Condition NOT met, waiting...", { liveId: r, isMockMode: v, sdkReady: h });
  }, [r, h, v]), ee(() => {
    if (!r || !h || Te === 0) {
      ye.current && (clearInterval(ye.current), ye.current = null);
      return;
    }
    return ye.current = window.setInterval(() => {
      Qe.current && Ee();
    }, Te * 1e3), () => {
      ye.current && (clearInterval(ye.current), ye.current = null);
    };
  }, [r, h, Te]), U != null && U.nick || m != null && m.anchor.name || c(a.UNKNOWN_HOST), U != null && U.avatarUrl || m != null && m.anchor.avatar, _e(() => (r == null ? void 0 : r.startsWith("voice_")) || !1, [r]);
  const St = (m == null ? void 0 : m.isMessageDisabled) === !0;
  return y ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(En, { loading: !0, text: c(a.LOADING) }) }) : /* @__PURE__ */ u("div", { className: "live-control-container", children: [
    /* @__PURE__ */ u("div", { className: "toast-area", children: [
      P && /* @__PURE__ */ e("div", { className: "status-success", children: P }),
      z && /* @__PURE__ */ e("div", { className: "status-error", children: z })
    ] }),
    /* @__PURE__ */ u("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ u("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(K, { shape: "circle", variant: "outline", className: "back-btn", onClick: pt, title: c(a.BACK_TO_LIST), children: /* @__PURE__ */ e("svg", { viewBox: Ye.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Ye.strokeWidth, strokeLinecap: Ye.strokeLinecap, children: /* @__PURE__ */ e("path", { d: Ye.path }) }) }),
        /* @__PURE__ */ e("div", { className: "divider" }),
        /* @__PURE__ */ e("h1", { children: c(a.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ u("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          K,
          {
            className: "action-btn warn",
            variant: "text",
            icon: /* @__PURE__ */ e(kr, { size: 16 }),
            onClick: W,
            children: c(a.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(K, { variant: "text", theme: "danger", onClick: () => C.requestConfirm(), icon: /* @__PURE__ */ e(Pr, {}), children: c(a.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ u("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Yi,
        {
          liveControlSlots: i,
          liveInfo: m,
          liveId: r || "",
          activeTab: M,
          onActiveTabChange: O,
          isAllMuted: St,
          allMuteLoading: x.loading,
          onAllMuteChange: zt,
          memberManagementHook: J,
          onOpenAudienceDropdown: Lt,
          onOpenMutedModal: () => {
            J.fetchMutedList(), j(!0);
          },
          onOpenBannedModal: () => {
            J.fetchBannedList(), A(!0);
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
            updateTimeText: ve,
            t: c
          }
        ),
        /* @__PURE__ */ e(De, { slot: i == null ? void 0 : i.customControlPanel, props: { liveInfo: m } }),
        /* @__PURE__ */ e(
          Qi,
          {
            moderationList: ie.moderationList,
            moderationLoading: ie.moderationLoading,
            moderationPage: ie.moderationPage,
            moderationTotal: ie.moderationTotal,
            moderationTotalPages: ie.moderationTotalPages,
            moderationSelectedIds: ie.moderationSelectedIds,
            isAllOnPageSelected: ie.isAllOnPageSelected,
            moderationAvailable: L,
            updateTimeText: ve,
            onRefresh: ie.handleRefreshModeration,
            onPageChange: ie.goToModerationPage,
            onBulkApprove: ie.handleBulkApprove,
            onBulkDelete: ie.handleBulkDelete,
            onToggleSelectOne: ie.toggleSelectOne,
            onToggleSelectAll: ie.toggleSelectAll,
            onRelease: ie.handleRelease,
            onDelete: ie.handleDeleteModeration,
            onOpenDropdown: hr,
            t: c
          }
        )
      ] })
    ] }),
    le && /* @__PURE__ */ e(
      "div",
      {
        ref: R,
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
              et(), ie.handleBypassCorrection(k);
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
        ref: F,
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
                J.handleMuteAudience(
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
                J.handleMuteAudience(
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
                J.handleBanAudience(
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
        mutedList: J.mutedList,
        bannedList: J.bannedList,
        memberListLoading: J.memberListLoading,
        getUserAvatar: bt,
        getUserNameFromCache: It,
        onMutedModalClose: () => j(!1),
        onBannedModalClose: () => A(!1),
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
        me,
        {
          visible: !0,
          header: k.title,
          onClose: () => ce.cancelConfirm(),
          width: be.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ u(ue, { children: [
            /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => ce.cancelConfirm(), children: c(a.CANCEL) }),
            /* @__PURE__ */ e(
              K,
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
        visible: $.visible,
        liveId: $.liveId,
        liveName: $.liveName,
        onVisibleChange: (k) => _((re) => ({ ...re, visible: k }))
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
  var P, z, H;
  const { t: d } = pe();
  (P = yt().components) == null || P.giftConfig;
  const f = te(null), g = te(null), [v, h] = b(!1), [N, m] = b(!1), [S, w] = b(!1), [E, M] = b(!1), O = () => {
    var D, Z;
    (D = f.current) == null || D.reset(), (Z = g.current) == null || Z.reset(), h(!1), m(!1);
  }, y = () => {
    O(), l();
  }, I = async () => {
    var X, A, L, C, x;
    if (!i.id.trim()) {
      q.error(d(a.ENTER_GIFT_ID));
      return;
    }
    if (G(i.id) > Ze) {
      q.error(d(a.GIFT_ID_MAX_BYTES, { max: Ze }));
      return;
    }
    if (!i.name.trim()) {
      q.error(d(a.ENTER_GIFT_NAME));
      return;
    }
    if (G(i.name) > Me) {
      q.error(d(a.GIFT_NAME_MAX_BYTES, { max: Me }));
      return;
    }
    if (i.description && G(i.description) > Oe) {
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
    const Z = ((X = f.current) == null ? void 0 : X.isUrlInputMode) ?? !0, j = Z && (((C = (L = (A = f.current) == null ? void 0 : A.urlInputValue) == null ? void 0 : L.trim) == null ? void 0 : C.call(L)) || "");
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
      let $, _;
      try {
        [$, _] = await oa([
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
      } catch (F) {
        q.error(F instanceof cr ? F.message : d(a.OPERATION_FAILED, { error: F.message || d(a.UNKNOWN_HOST) }));
        return;
      }
      const W = {
        ...i,
        iconUrl: $,
        animationUrl: _
      };
      s(W), await p();
    } catch ($) {
      q.error(d(a.OPERATION_FAILED, { error: $.ErrorInfo || $.message || d(a.UNKNOWN_HOST) }));
    }
  };
  return /* @__PURE__ */ e(
    me,
    {
      destroyOnClose: !0,
      visible: r,
      header: d(n ? a.EDIT_GIFT : a.CREATE_GIFT),
      onClose: y,
      width: be.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: y, children: d(a.CANCEL) }),
        /* @__PURE__ */ e(
          K,
          {
            shape: "round",
            theme: "primary",
            onClick: I,
            disabled: c || !n && !i.id || !i.name.trim() || ((z = f.current) == null ? void 0 : z.isValidating) || ((H = g.current) == null ? void 0 : H.isValidating) || S || E,
            children: d(c ? n ? a.SAVING : a.CREATING : n ? a.SAVE : a.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        !n && /* @__PURE__ */ e(de, { label: d(a.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            he,
            {
              value: i.id,
              onChange: (D) => s({ ...i, id: String(D) }),
              placeholder: d(a.ENTER_GIFT_ID),
              status: G(i.id) > Ze ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.id) > Ze ? " byte-overflow" : ""}`, children: [
                G(i.id),
                "/",
                Ze
              ] })
            }
          ),
          G(i.id) > Ze && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift ID max bytes", { max: Ze }) })
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
            onUrlErrorChange: M
          }
        ) }),
        /* @__PURE__ */ e(de, { label: d(a.GIFT_NAME), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            he,
            {
              value: i.name,
              onChange: (D) => s({ ...i, name: String(D) }),
              placeholder: d(a.ENTER_GIFT_NAME),
              status: G(i.name) > Me ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.name) > Me ? " byte-overflow" : ""}`, children: [
                G(i.name),
                "/",
                Me
              ] })
            }
          ),
          G(i.name) > Me && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift name max bytes", { max: Me }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: d(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            he,
            {
              value: i.description,
              onChange: (D) => s({ ...i, description: String(D) }),
              placeholder: d(a.ENTER_GIFT_DESCRIPTION),
              status: G(i.description) > Oe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.description) > Oe ? " byte-overflow" : ""}`, children: [
                G(i.description),
                "/",
                Oe
              ] })
            }
          ),
          G(i.description) > Oe && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Gift desc max bytes", { max: Oe }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: d(a.CUSTOM_EXTENSION_INFO), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ u("div", { className: "textarea-count-wrapper", children: [
            /* @__PURE__ */ e(
              Nn,
              {
                value: i.extensionInfo,
                onChange: (D) => s({ ...i, extensionInfo: String(D) }),
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
          G(i.extensionInfo) > gt && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: d("Extension info max bytes", { max: gt }) })
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
  const { t: s } = pe();
  return /* @__PURE__ */ e(
    me,
    {
      visible: r,
      header: s(a.GIFT_MULTILINGUAL_CONFIG),
      onClose: i,
      width: be.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: i, children: s(a.CLOSE) }),
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
  const { t: p } = pe();
  return /* @__PURE__ */ e(
    me,
    {
      destroyOnClose: !0,
      visible: r && !!t,
      header: t ? p(a.EDIT_GIFT_LANGUAGE_INFO, { lang: p(Pe[t].label) }) : "",
      onClose: s,
      width: be.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: s, children: p(a.CANCEL) }),
        /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: o, children: p("Save") })
      ] }),
      children: /* @__PURE__ */ u(ut, { labelWidth: lt(110), children: [
        /* @__PURE__ */ e(de, { label: p(a.GIFT_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            he,
            {
              value: i.name,
              onChange: (l) => {
                c({ ...i, name: String(l) });
              },
              placeholder: t ? p("Enter language gift name", { lang: p(Pe[t].label) }) : "",
              status: G(i.name) > Me ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.name) > Me ? " byte-overflow" : ""}`, children: [
                G(i.name),
                "/",
                Me
              ] })
            }
          ),
          G(i.name) > Me && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: p("Gift name max bytes", { max: Me }) })
        ] }) }),
        /* @__PURE__ */ e(de, { label: p(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ e(
            he,
            {
              value: i.description,
              onChange: (l) => {
                c({ ...i, description: String(l) });
              },
              placeholder: t ? p("Enter language gift description", { lang: p(Pe[t].label) }) : "",
              status: G(i.description) > Oe ? "error" : "default",
              suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(i.description) > Oe ? " byte-overflow" : ""}`, children: [
                G(i.description),
                "/",
                Oe
              ] })
            }
          ),
          G(i.description) > Oe && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: p("Gift desc max bytes", { max: Oe }) })
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
  const { t: S } = pe();
  return /* @__PURE__ */ u(ue, { children: [
    /* @__PURE__ */ e(
      me,
      {
        visible: r && !!n,
        header: S(a.EDIT_GIFT_CATEGORY),
        onClose: N,
        width: be.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: N, children: S(a.CLOSE) }),
        children: /* @__PURE__ */ u("div", { className: "gift-category-edit-tags", children: [
          t.map((w) => {
            const E = i.find((O) => String(O.id) === String(w)), M = (E == null ? void 0 : E.name) || w;
            return /* @__PURE__ */ u("span", { className: "gift-category-edit-tag", children: [
              M,
              /* @__PURE__ */ e("button", { className: "gift-category-edit-tag-close", onClick: () => d(w), children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ e("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, w);
          }),
          /* @__PURE__ */ e("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ u(K, { variant: "text", theme: "primary", onClick: () => v(!s), children: [
            "+ ",
            S(a.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: s,
        header: S(a.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ e(K, { shape: "round", theme: "primary", disabled: !o, onClick: f, children: S(a.CONFIRM) }),
        children: /* @__PURE__ */ u("div", { className: "category-select-list", children: [
          /* @__PURE__ */ e(
            sr,
            {
              value: o,
              onChange: (w) => g(String(w)),
              placeholder: S(a.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: c.map((w) => /* @__PURE__ */ e(oo, { value: w.id, label: w.name }, w.id))
            }
          ),
          c.length === 0 && /* @__PURE__ */ e("div", { className: "category-select-empty", children: S(a.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: p,
        header: S(a.CONFIRM_REMOVE_CATEGORY),
        onClose: m,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: m, children: S(a.CANCEL) }),
          /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: h, children: S(a.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: S(a.REMOVE_CATEGORY_DESCRIPTION) })
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
  const { t: c } = pe();
  return /* @__PURE__ */ e(
    me,
    {
      visible: r && !!n,
      header: c(a.CONFIRM_DELETE_GIFT),
      onClose: i,
      width: be.GIFT_DELETE,
      footer: /* @__PURE__ */ u(ue, { children: [
        /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: i, children: c(a.CANCEL) }),
        /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: t, children: c(a.DELETE) })
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
            const v = sa(g), h = $r[v], N = h ? Pe[h] : null;
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
        render: (f) => /* @__PURE__ */ e("span", { className: "gift-create-time", children: ca(f.createdAt) })
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
          Ke,
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
function Mo() {
  const { t: r } = pe(), n = jr(), t = _t(), i = lo(), c = te(null);
  c.current || (c.current = new la({
    actions: n,
    t: r,
    toast: q,
    onNavigateToCategoryManagement: () => t("/gift-category")
  }));
  const o = c.current, s = tr(o.subscribe, o.getState, o.getState);
  ee(() => (o.init(), () => o.dispose()), []), ee(() => {
    const V = () => o.onLanguageChanged();
    return Dt.on("languageChanged", V), () => {
      Dt.off("languageChanged", V);
    };
  }, [o]);
  const { loading: p, execute: l } = ht({
    action: async (V) => {
      await o.submitGift({
        id: V.id,
        name: V.name,
        iconUrl: V.iconUrl,
        price: V.price,
        animationUrl: V.animationUrl,
        enabled: V.enabled,
        level: V.level || void 0,
        description: V.description,
        extensionInfo: V.extensionInfo
      });
    },
    errorMessage: r(a.OPERATION_FAILED)
  }), [d, f] = b(!1);
  ee(() => {
    qr().then(f);
  }, []);
  const [g, v] = b(xr), [h, N] = b(!1), m = te(null), {
    loading: S,
    displayList: w,
    searchInput: E,
    dialogVisible: M,
    isEdit: O,
    editingId: y,
    langConfigVisible: I,
    giftLangConfig: P,
    langEditVisible: z,
    editingLang: H,
    editingGiftForLang: D,
    langEditForm: Z,
    categoryEditVisible: j,
    editingCategoryGift: X,
    allCategories: A,
    giftCategoryIds: L,
    selectedCategoryId: C,
    categoryDeleteVisible: x,
    deletingCategoryId: $,
    deleteDialogVisible: _,
    deletingItem: W
  } = s, F = A.filter((V) => !L.includes(V.id)), R = () => {
    v(xr), o.openCreateDialog();
  }, U = (V) => {
    v({
      id: V.id,
      name: V.name,
      iconUrl: V.iconUrl,
      price: V.price,
      animationUrl: V.animationUrl || "",
      level: V.level || "",
      description: V.description || "",
      extensionInfo: V.extensionInfo || "",
      enabled: V.enabled ?? !0
    }), o.openEditDialog(V);
  }, Y = async () => {
    await o.confirmAddCategory(), N(!1);
  }, ne = i({
    onEdit: U,
    onDelete: (V) => o.requestDelete(V),
    onOpenCategoryEdit: (V) => o.openCategoryEditDialog(V),
    onOpenLangEdit: (V, le) => void o.openLangEditDialog(V, le),
    onOpenGiftLangConfig: (V) => void o.openGiftLangConfigDialog(V),
    onCopyId: (V) => o.copyGiftId(V)
  });
  return /* @__PURE__ */ u("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ e("h1", { className: "gift-config-title", children: r(a.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ u("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ e(
          he,
          {
            value: E,
            onChange: (V) => o.setSearchInput(String(V ?? "")),
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
            status: Cr(E, yr) ? "error" : "default",
            tips: Cr(E, yr) ? r(a.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: () => o.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ e(fn, {}), children: r(a.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ u(K, { shape: "round", onClick: R, theme: "primary", children: [
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
        loading: S,
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
        visible: M,
        isEdit: O,
        editingId: y,
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
        editingId: y,
        giftLangConfig: P,
        onClose: () => o.closeGiftLangConfigDialog(),
        onEditLang: (V, le) => void o.openLangEditDialog(V, le),
        onClearLang: (V, le) => void o.clearLang(V, le)
      }
    ),
    /* @__PURE__ */ e(
      io,
      {
        visible: z,
        editingGiftForLang: D,
        editingLang: H,
        langEditForm: Z,
        onFormChange: (V) => o.setLangEditForm(V),
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
        allCategories: A,
        availableCategories: F,
        selectedCategoryId: C,
        categoryAddPopVisible: h,
        categoryDeleteVisible: x,
        deletingCategoryId: $,
        onRemoveCategory: (V) => o.requestRemoveCategory(V),
        onAddCategoryConfirm: Y,
        onSelectCategory: (V) => o.setSelectedCategoryId(V),
        onToggleAddPop: N,
        onConfirmRemoveCategory: () => void o.confirmRemoveCategory(),
        onClose: () => o.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => o.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ e(
      co,
      {
        visible: _,
        deletingItem: W,
        onConfirm: () => void o.confirmDelete(),
        onClose: () => o.cancelDelete()
      }
    )
  ] });
}
function Oo() {
  const { t: r } = pe(), n = _t(), t = jr(), i = te(null);
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
    t: r,
    toast: q,
    onNavigateBack: () => n("/gift-config")
  }));
  const c = i.current, o = tr(c.subscribe, c.getState, c.getState);
  ee(() => (c.init(), () => c.dispose()), []), ee(() => {
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
  }), l = te(null), [d, f] = b(600);
  ee(() => {
    const h = () => {
      if (!l.current) return;
      const m = window.innerHeight, S = l.current.closest(".gift-category-table-wrapper");
      if (!S) return;
      const w = S.getBoundingClientRect(), E = m - w.top - 60 - 24;
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
    if (h.name && G(h.name) > Ae) {
      q.error(r("Category name max bytes", { max: Ae }));
      return;
    }
    if (h.description && G(h.description) > Re) {
      q.error(r("Category desc max bytes", { max: Re }));
      return;
    }
    await c.saveLangEdit();
  };
  return /* @__PURE__ */ u("div", { className: "gift-category-container", children: [
    /* @__PURE__ */ u("div", { className: "gift-category-page-header", children: [
      /* @__PURE__ */ u("div", { className: "gift-category-title-section", children: [
        /* @__PURE__ */ e(
          K,
          {
            shape: "square",
            variant: "text",
            className: "back-btn",
            onClick: () => c.goBack(),
            icon: /* @__PURE__ */ e("svg", { viewBox: Ye.viewBox, width: "1em", height: "1em", fill: "none", stroke: "currentColor", strokeWidth: Ye.strokeWidth, strokeLinecap: Ye.strokeLinecap, children: /* @__PURE__ */ e("path", { d: Ye.path }) })
          }
        ),
        /* @__PURE__ */ e("h1", { children: r("Category Management") })
      ] }),
      /* @__PURE__ */ e("div", { className: "gift-category-actions", children: /* @__PURE__ */ u("div", { className: `create-category-btn-wrapper${o.categoryList.length >= Yt ? " disabled" : ""}`, children: [
        /* @__PURE__ */ u(
          K,
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
                const m = typeof N == "string" ? N : N.language || "", S = $r[m], w = S ? Pe[S] : null;
                return /* @__PURE__ */ e(
                  "span",
                  {
                    className: "category-lang-tag",
                    onClick: () => h && S && c.openLangEditDialog(h.id, S),
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
              Ke,
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
      me,
      {
        visible: o.dialogVisible,
        header: o.isEdit ? r(a.EDIT_CATEGORY) : r(a.CREATE_CATEGORY),
        onClose: () => c.closeDialog(),
        width: be.CATEGORY_FORM,
        placement: "center",
        className: "category-dialog",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => c.closeDialog(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(
            K,
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
              he,
              {
                value: o.formData.categoryId,
                onChange: (h) => c.setFormData({ categoryId: String(h) }),
                placeholder: r("Enter category ID"),
                disabled: o.isEdit,
                status: G(o.formData.categoryId) > vt ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.formData.categoryId) > vt ? " byte-overflow" : ""}`, children: [
                  G(o.formData.categoryId),
                  "/",
                  vt
                ] })
              }
            ),
            G(o.formData.categoryId) > vt && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r("Category ID max bytes", { max: vt }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: r("Category Name"), requiredMark: !0, children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              he,
              {
                value: o.formData.name,
                onChange: (h) => c.setFormData({ name: String(h) }),
                placeholder: r("Enter category name"),
                status: G(o.formData.name) > Ae ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.formData.name) > Ae ? " byte-overflow" : ""}`, children: [
                  G(o.formData.name),
                  "/",
                  Ae
                ] })
              }
            ),
            G(o.formData.name) > Ae && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r("Category name max bytes", { max: Ae }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: r(a.DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              he,
              {
                value: o.formData.description,
                onChange: (h) => c.setFormData({ description: String(h) }),
                placeholder: r("Enter category description"),
                status: G(o.formData.description) > Re ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.formData.description) > Re ? " byte-overflow" : ""}`, children: [
                  G(o.formData.description),
                  "/",
                  Re
                ] })
              }
            ),
            G(o.formData.description) > Re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r("Category desc max bytes", { max: Re }) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: o.langConfigVisible,
        header: r(a.CATEGORY_MULTILINGUAL_CONFIG),
        onClose: () => c.closeLangConfigDialog(),
        width: be.GIFT_LANG_CONFIG,
        placement: "center",
        className: "category-lang-config-dialog",
        footer: /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: () => c.closeLangConfigDialog(), children: r(a.CLOSE) }),
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
            /* @__PURE__ */ e("tbody", { children: Kr.map((h) => {
              const N = o.categoryLangConfig[h], m = Pe[h];
              return /* @__PURE__ */ u("tr", { children: [
                /* @__PURE__ */ e("td", { children: r(m.label) }),
                /* @__PURE__ */ e("td", { className: "category-lang-table-cell-name", children: N.name || /* @__PURE__ */ e("span", { className: "category-lang-table-empty", children: r(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ e("td", { className: "category-lang-table-cell-desc", children: N.description || /* @__PURE__ */ e("span", { className: "category-lang-table-empty", children: r(a.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ e("td", { children: /* @__PURE__ */ e(
                  Ke,
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
      me,
      {
        destroyOnClose: !0,
        visible: o.langEditVisible && !!o.editingLang,
        header: o.editingLang ? r(a.EDIT_CATEGORY_LANGUAGE_INFO, { lang: r(Pe[o.editingLang].label) }) : "",
        onClose: () => c.closeLangEditDialog(),
        width: be.GIFT_EDIT,
        placement: "center",
        className: "category-lang-edit-modal",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => c.closeLangEditDialog(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: v, children: r(a.SAVE) })
        ] }),
        children: /* @__PURE__ */ u(ut, { labelWidth: lt(100), children: [
          /* @__PURE__ */ e(de, { label: r(a.CATEGORY_NAME), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              he,
              {
                value: o.langEditForm.name,
                onChange: (h) => c.setLangEditForm({ name: String(h) }),
                placeholder: o.editingLang ? r(a.ENTER_LANGUAGE_CATEGORY_NAME, { lang: r(Pe[o.editingLang].label) }) : "",
                status: G(o.langEditForm.name) > Ae ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.langEditForm.name) > Ae ? " byte-overflow" : ""}`, children: [
                  G(o.langEditForm.name),
                  "/",
                  Ae
                ] })
              }
            ),
            G(o.langEditForm.name) > Ae && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r(a.CATEGORY_NAME_MAX_BYTES, { max: Ae }) })
          ] }) }),
          /* @__PURE__ */ e(de, { label: r(a.CATEGORY_DESCRIPTION), children: /* @__PURE__ */ u("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ e(
              he,
              {
                value: o.langEditForm.description,
                onChange: (h) => c.setLangEditForm({ description: String(h) }),
                placeholder: o.editingLang ? r(a.ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: r(Pe[o.editingLang].label) }) : "",
                status: G(o.langEditForm.description) > Re ? "error" : "default",
                suffix: /* @__PURE__ */ u("span", { className: `input-suffix-count${G(o.langEditForm.description) > Re ? " byte-overflow" : ""}`, children: [
                  G(o.langEditForm.description),
                  "/",
                  Re
                ] })
              }
            ),
            G(o.langEditForm.description) > Re && /* @__PURE__ */ e("div", { className: "form-field__error-tip", children: r(a.CATEGORY_DESC_MAX_BYTES, { max: Re }) })
          ] }) })
        ] })
      },
      `cat-lang-edit-${o.editingCategoryForLang}-${o.editingLang ?? ""}`
    ),
    /* @__PURE__ */ e(
      me,
      {
        visible: o.deleteDialogVisible && !!o.deletingItem,
        header: r(a.CONFIRM_DELETE_CATEGORY),
        onClose: () => c.cancelDelete(),
        width: be.GIFT_DELETE,
        placement: "center",
        footer: /* @__PURE__ */ u(ue, { children: [
          /* @__PURE__ */ e(K, { shape: "round", variant: "outline", onClick: () => c.cancelDelete(), children: r(a.CANCEL) }),
          /* @__PURE__ */ e(K, { shape: "round", theme: "primary", onClick: () => c.confirmDelete(), children: r(a.DELETE) })
        ] }),
        children: /* @__PURE__ */ e("p", { children: r(a.CANNOT_UNDO_AFTER_DELETE) })
      }
    )
  ] });
}
let ge = null, ot = !1, oe = null;
const Ct = /* @__PURE__ */ new Set();
function uo() {
  return oe || (oe = new ya({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: r, pageCursors: n, count: t }) => {
      if (!ge)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const c = await ha({
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
  }), oe.subscribe((r) => {
    ot && Ct.forEach((n) => n(r));
  }), oe);
}
function ho(r) {
  return Ct.add(r), oe && r(oe.getSnapshot()), () => {
    Ct.delete(r);
  };
}
function mt() {
  const [r, n] = b([]), [t, i] = b(!0), [c, o] = b(null), [s, p] = b(
    () => ({ pageData: [], currentPage: 1, hasMore: !0, loading: !1 })
  ), l = te(!0);
  ge || (ge = new ua({
    onStateChange: (P) => {
      ot && (P.liveList !== void 0 && n(P.liveList), P.hasMore !== void 0 && i(P.hasMore), P.currentLive !== void 0 && o(P.currentLive));
    },
    getActive: () => ot
  })), uo(), ee(() => (l.current = !0, ot = !0, Ct.add(p), oe && p(oe.getSnapshot()), () => {
    l.current = !1, ot = !1, Ct.delete(p), setTimeout(() => {
      ot || (ge == null || ge.destroy(), ge = null, oe == null || oe.destroy(), oe = null);
    }, 100);
  }), []);
  const d = T((P) => {
    ge == null || ge.init(P), oe == null || oe.goToFirstPage().catch((z) => {
      console.error("[useLiveMonitorState] Failed to load first page:", z);
    });
  }, []), f = T(async (P) => {
    if (!oe) return [];
    switch (P == null ? void 0 : P.action) {
      case "first":
        await oe.goToFirstPage();
        break;
      case "prev":
        await oe.prevPage();
        break;
      case "next":
      default:
        await oe.nextPage();
        break;
    }
    return s.pageData;
  }, []), g = T(async (P) => ge.createLive(P), []), v = T(async (P) => ge.updateLive(P), []), h = T(async (P) => ge.endLive(P), []), N = T(async (P) => ge.fetchLiveDetail(P), []), m = T(async (P) => ge.fetchLiveStats(P), []), S = T((P) => {
    ge == null || ge.setCurrentLive(P);
  }, []), w = T(async (P) => ge.stopPlay(P), []), E = T(async (P) => ge.startPlay(P), [w]), M = T(() => (oe == null ? void 0 : oe.nextPage()) ?? Promise.resolve(), []), O = T(() => (oe == null ? void 0 : oe.prevPage()) ?? Promise.resolve(), []), y = T(() => (oe == null ? void 0 : oe.goToFirstPage()) ?? Promise.resolve(), []), I = T(() => (oe == null ? void 0 : oe.refreshCurrentPage()) ?? Promise.resolve(), []);
  return {
    init: d,
    liveList: r,
    hasMore: t,
    currentLive: c,
    setCurrentLive: S,
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
      nextPage: M,
      prevPage: O,
      goToFirstPage: y,
      refreshCurrentPage: I
    }
  };
}
export {
  Oo as G,
  Ro as L,
  q as M,
  Mo as a,
  Ao as b,
  wo as c,
  Ve as d,
  jr as e,
  mt as f,
  Si as g,
  Zr as h,
  Ti as i,
  wi as j,
  ho as s,
  ht as u
};
