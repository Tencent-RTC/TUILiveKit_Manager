import { a7 as ie, aU as ce, G as ue, u as le, ay as de, z as fe, bm as ge, c as $, b2 as z, a$ as B, a_ as s, I as me, aY as he, b1 as pe, m as be, am as ve, ao as F, bi as Se } from "./chunks/shared-state.DVNvfj7e.js";
import { R as ft, r as gt, aT as mt, aZ as ht, b0 as pt, b3 as bt, b4 as vt, b5 as St, b8 as yt, bj as Mt } from "./chunks/shared-state.DVNvfj7e.js";
import { useSyncExternalStore as K, useCallback as o, useState as g, useRef as W, useEffect as N, Component as ye } from "react";
import { c0 as O, aV as V, c1 as q, c2 as Me, aF as we, aD as Ce, m as Le, u as Pe, c3 as ke, c4 as Re, bI as Ie, bG as _e, c5 as xe, aa as Te, c6 as Ee, ah as Ae, c7 as Ue, Z as De, Y as Ne } from "./chunks/main-layout.8WX-Nzxd.js";
import "tdesign-react";
import { a as Ge, M as Be } from "./chunks/useAsyncAction.Dscau7fG.js";
import { u as Ct } from "./chunks/useAsyncAction.Dscau7fG.js";
import { s as Fe, g as Oe, a as Ve, p as qe } from "./chunks/survey.DkhpX1wR.js";
import { D as Pt, G as kt, S as Rt, o as It, r as _t } from "./chunks/survey.DkhpX1wR.js";
import { u as Tt, a as Et, b as At } from "./chunks/useT.B0r5jZSU.js";
import { jsx as A, jsxs as $e } from "react/jsx-runtime";
let j = ie();
function ze(n) {
  return ge((e) => {
    j = e, n();
  });
}
function Ke() {
  return j;
}
function rt() {
  const n = K(ze, Ke), e = n.mode === "server" || n.mode === "proxy" && !!n.credentials, l = o(async (m = {}) => ce(m), []), d = o(() => {
    ue();
  }, []);
  return {
    authState: n,
    isLoggedIn: e,
    currentUserId: n.userId || "",
    currentUserName: n.userName || "",
    sdkAppId: n.sdkAppId || 0,
    authMode: n.mode,
    checkServerConfig: fe,
    login: l,
    logout: d,
    getUserProfilePortrait: de,
    batchGetUserProfilePortrait: le
  };
}
const p = $("RiskControl");
function ot(n) {
  const { liveId: e, pageSize: l } = n, [d, m] = g(!1), [c, h] = g("cloud"), [b, v] = g(!0), [S, k] = g([]), [R, I] = g(1), [_, L] = g(0), [U, E] = g(!1), [a, u] = g([]), [y, Y] = g([]), M = W(!0);
  N(() => (M.current = !0, z("risk_control"), O().then(async (t) => {
    if (!M.current) return;
    h(t);
    const r = t === "cloud", w = r ? V : q;
    try {
      const C = await w({ pageSize: l, liveId: e });
      M.current && (m(!0), k(C.list || []), L(C.total || 0)), B(r ? "text_moderation" : "text_moderation_custom"), B(r ? "moderation" : "moderation_custom");
    } catch {
      M.current && m(!1);
    }
    t === "custom" && Me().then((C) => {
      M.current && v(C.Enabled);
    }).catch(() => {
    });
  }), () => {
    M.current = !1;
  }), []);
  const H = o(async (t = {}) => {
    E(!0);
    try {
      let r;
      return c === "custom" ? r = await q({ pageSize: l, liveId: e, ...t }) : r = await V({ pageSize: l, liveId: e, ...t }), M.current && (k(r.list || []), I(t.pageNum || 1), L(r.total || 0)), r;
    } catch (r) {
      throw p.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      M.current && E(!1);
    }
  }, [l, e, c]), x = o(async () => {
    if (!e) return [];
    try {
      const t = await we(e);
      return u(t), t;
    } catch (t) {
      throw p.error("useRiskControlState", "fetchMutedList failed:", t), t;
    }
  }, [e]), T = o(async () => {
    if (!e) return [];
    try {
      const t = await Ce(e);
      return Y(t), t;
    } catch (t) {
      throw p.error("useRiskControlState", "fetchBannedList failed:", t), t;
    }
  }, [e]), Z = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Le(e, t.memberAccounts, t.muteTime), await x(), s("risk_control", "mute", !0, e);
    } catch (r) {
      throw s("risk_control", "mute", !1), p.error("useRiskControlState", "muteMember failed:", r), r;
    }
  }, [e, x]), Q = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Pe(e, t.memberAccounts), await x(), s("risk_control", "unmute", !0, e);
    } catch (r) {
      throw s("risk_control", "unmute", !1), p.error("useRiskControlState", "unmuteMember failed:", r), r;
    }
  }, [e, x]), J = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await ke(e, t.memberAccounts, t.duration, t.reason), await T(), s("risk_control", "ban", !0, e);
    } catch {
      s("risk_control", "ban", !1);
    }
  }, [e, T]), X = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Re(e, t.memberAccounts), await T(), s("risk_control", "unban", !0, e);
    } catch {
      s("risk_control", "unban", !1);
    }
  }, [e, T]), ee = o(async () => {
    if (!e) throw new Error("liveId is required");
    try {
      const t = await Ie(e, "default", me.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, e), t;
    } catch (t) {
      throw s("risk_control", "violation_warning", !1), p.error("useRiskControlState", "sendViolationWarning failed:", t), t;
    }
  }, [e]), te = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      const r = await _e(e, t);
      return s("risk_control", "send_admin_message", !0, e), r;
    } catch (r) {
      throw s("risk_control", "send_admin_message", !1), p.error("useRiskControlState", "sendAdminMessage failed:", r), r;
    }
  }, [e]), re = o(async (t) => {
    try {
      const r = t.items ?? (() => {
        const w = S;
        return t.ids.map((C) => {
          const G = w.find((se) => se.id === C);
          return {
            id: C,
            content: G?.content ?? C,
            userId: G?.userId ?? ""
          };
        });
      })();
      if (c === "custom") {
        const w = await xe({ ids: t.ids, items: r, liveId: t.liveId ?? e });
        s("moderation", "approve", !0, String(w.success)), w.failed > 0 && p.warn("useRiskControlState", `部分放行失败: 成功 ${w.success}, 失败 ${w.failed}`);
      } else
        await Te({ ids: t.ids, items: r, liveId: t.liveId ?? e }), s("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), p.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [e, S, c]), oe = o(async (t) => {
    try {
      const r = await Ee(t);
      return M.current && v(r.Enabled), s("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw s("moderation", "toggle", !1), p.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), ne = o(async (t) => {
    try {
      await Ae({ content: t.content, liveId: t.liveId ?? e }), s("moderation", "bypass", !0, String(t.content.length));
    } catch (r) {
      throw s("moderation", "bypass", !1), p.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [e]), ae = o(async (t) => {
    try {
      await O() === "custom" ? await Ue(t) : await he(t), s("moderation", "delete", !0, String(t.length));
    } catch (r) {
      throw s("moderation", "delete", !1), p.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    textModerationAvailable: d,
    moderationMode: c,
    customModerationToggleEnabled: b,
    updateCustomModerationToggleEnabled: oe,
    textModerationList: S,
    textModerationPageNum: R,
    textModerationTotal: _,
    textModerationLoading: U,
    fetchTextModerationList: H,
    approveTextModerationItems: re,
    bypassCorrectionKeyword: ne,
    muteMember: Z,
    unmuteMember: Q,
    banMember: J,
    unbanMember: X,
    sendViolationWarning: ee,
    sendAdminMessage: te,
    deleteModerationItems: ae,
    mutedList: a,
    bannedList: y,
    fetchMutedList: x,
    fetchBannedList: T
  };
}
$("LiveMonitor");
let f = null, We = !0, i = null;
const P = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
function je() {
  return i || (i = new Ne({
    pageSize: 8
  }), i.subscribe(() => {
    const n = i.getSnapshot();
    P.forEach((e) => e(n));
  }), i.subscribe(() => {
    if (f) {
      const n = i.getSnapshot();
      f.liveList = [...n.list];
    }
  }), i);
}
function nt(n) {
  return P.add(n), i && n(i.getSnapshot()), () => {
    P.delete(n);
  };
}
function at() {
  const [n, e] = g([]), [l, d] = g(!0), [m, c] = g(null), h = W(!0);
  f || (f = new De({
    onStateChange: (a) => {
      D.forEach((u) => u(a));
    },
    getActive: () => We
  })), je(), N(() => {
    h.current = !0;
    const a = (y) => {
      h.current && (y.liveList !== void 0 && e(y.liveList), y.hasMore !== void 0 && d(y.hasMore), y.currentLive !== void 0 && c(y.currentLive));
    };
    D.add(a);
    const u = (y) => {
      h.current && e([...y.list]);
    };
    return P.add(u), i && u(i.getSnapshot()), () => {
      h.current = !1, D.delete(a), P.delete(u);
    };
  }, []);
  const b = o((a) => {
    f?.init(a);
  }, []), v = o(async (a) => {
    if (!i) return [];
    switch (a?.action) {
      case "first":
        await i.goToFirstPage();
        break;
      case "prev":
        await i.prevPage();
        break;
      default:
        await i.nextPage();
        break;
    }
    return i.getSnapshot().list;
  }, []), S = o(async (a) => {
    try {
      const u = await f.createLive(a);
      return s("live_crud", "create", !0, u.liveId), z("create_live"), u;
    } catch (u) {
      throw s("live_crud", "create", !1), u;
    }
  }, []), k = o(async (a) => {
    try {
      await f.updateLive(a), s("live_crud", "update", !0, a.liveId);
    } catch (u) {
      throw s("live_crud", "update", !1, a.liveId), u;
    }
  }, []), R = o(async (a) => {
    try {
      await f.endLive(a), s("live_crud", "delete", !0, a), pe("force_stop");
    } catch (u) {
      throw s("live_crud", "delete", !1), u;
    }
  }, []), I = o(async (a) => f.fetchLiveDetail(a), []), _ = o(async (a) => f.fetchLiveStats(a), []), L = o((a) => {
    f?.setCurrentLive(a);
  }, []), U = o(async (a) => f.stopPlay(a), []);
  o(() => {
    f?.reset();
  }, []);
  const E = o(async (a) => f.startPlay(a), []);
  return {
    init: b,
    liveList: n,
    hasMore: l,
    currentLive: m,
    setCurrentLive: L,
    fetchLiveList: v,
    createLive: S,
    updateLive: k,
    endLive: R,
    fetchLiveDetail: I,
    fetchLiveStats: _,
    startPlay: E,
    stopPlay: U
  };
}
function st() {
  const [n, e] = g(
    () => i?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  N(() => (P.add(e), i && e(i.getSnapshot()), () => {
    P.delete(e);
  }), []);
  const l = o(() => i?.nextPage() ?? Promise.resolve(), []), d = o(() => i?.prevPage() ?? Promise.resolve(), []), m = o(() => i?.goToFirstPage() ?? Promise.resolve(), []), c = o(() => i?.refresh() ?? Promise.resolve(), []), h = o((v, S) => i?.goToPage(v, S) ?? Promise.resolve(), []), b = o(() => i?.getSnapshot() ?? {
    list: [],
    currentPage: 1,
    hasMoreData: !0,
    loading: !1,
    pageCursors: /* @__PURE__ */ new Map([[1, ""]])
  }, []);
  return {
    pageData: n.list,
    currentPage: n.currentPage,
    hasMore: n.hasMoreData,
    loading: n.loading,
    nextPage: l,
    prevPage: d,
    goToFirstPage: m,
    refreshCurrentPage: c,
    goToPage: h,
    getSnapshot: b
  };
}
function it() {
  const n = K(Fe, Oe);
  return {
    uploading: n.uploading,
    uploadProgress: n.uploadProgress,
    getUploadConfig: qe,
    uploadResource: Ve
  };
}
function ct(n) {
  const { confirm: e, onSuccess: l, ...d } = n, [m, c] = g(null), h = o((L) => {
    c(null), l?.(L);
  }, [l]), b = o((L) => {
    c(null);
  }, []), { loading: v, execute: S, reset: k } = Ge({
    ...d,
    onSuccess: h,
    onError: b
  }), R = o(() => {
    c({
      visible: !0,
      title: e.title,
      content: e.content,
      confirmText: e.confirmText
    });
  }, [e]), I = o(() => {
    c(null);
  }, []), _ = o(async () => S(), [S]);
  return {
    loading: v,
    confirmDialog: m,
    requestConfirm: R,
    cancelConfirm: I,
    executeWithConfirm: _,
    reset: k
  };
}
function Ye({ message: n, onRetry: e }) {
  return /* @__PURE__ */ $e(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 240,
        padding: 32,
        gap: 16
      },
      children: [
        /* @__PURE__ */ A("div", { style: { fontSize: 48, opacity: 0.3 }, children: "⚠" }),
        /* @__PURE__ */ A("div", { style: { fontSize: 16, color: "#666", textAlign: "center", maxWidth: 400 }, children: n }),
        /* @__PURE__ */ A(
          "button",
          {
            onClick: e,
            style: {
              padding: "8px 24px",
              borderRadius: 6,
              border: "1px solid #d9d9d9",
              background: "#fff",
              cursor: "pointer"
            },
            children: "Retry"
          }
        )
      ]
    }
  );
}
class ut extends ye {
  constructor() {
    super(...arguments), this.state = { error: null }, this.handleRetry = () => {
      this.setState({ error: null });
    };
  }
  static getDerivedStateFromError(e) {
    return { error: be.from(e) };
  }
  componentDidCatch(e, l) {
    const { code: d, info: m, original: c } = ve(e);
    console.error("[AppErrorBoundary] Render error:", {
      code: d,
      msg: m,
      componentStack: l.componentStack,
      original: c
    }), import("./chunks/shared-state.DVNvfj7e.js").then((b) => b.bK).then(({ reportBusinessOp: b, RUM_EVENT_NAME: v }) => {
      b(v.RENDER_ERROR, "render", !1, d ? String(d) : void 0);
    }).catch(() => {
    });
    const h = F(d, m);
    h && Be.error(h);
  }
  render() {
    return this.state.error ? this.props.fallback ? this.props.fallback(this.state.error, this.handleRetry) : /* @__PURE__ */ A(
      Ye,
      {
        message: F(
          this.state.error.code ?? 0,
          this.state.error.message
        ),
        onRetry: this.handleRetry
      }
    ) : this.props.children;
  }
}
Se("react");
export {
  ut as AppErrorBoundary,
  Pt as DEPLOY_DOC_URL,
  kt as GITHUB_ISSUE_URL,
  Be as Message,
  ft as RUM_EVENT_NAME,
  gt as RUM_RESULT,
  Rt as SURVEY_URL,
  mt as measureAndReport,
  It as openSurvey,
  ht as reportAppInit,
  s as reportBusinessOp,
  B as reportCapability,
  pt as reportConversionClick,
  pe as reportEvent,
  z as reportFeatureUse,
  bt as reportPageView,
  vt as reportSurveyRating,
  St as reportTime,
  yt as resetReportedCaches,
  _t as resolveDemoTargetPath,
  Mt as setReportSource,
  nt as subscribeToPagination,
  Ge as useAsyncAction,
  rt as useAuthState,
  ct as useConfirmAction,
  Ct as useGiftState,
  at as useLiveMonitorState,
  st as usePaginatedList,
  Tt as usePreviewUrl,
  ot as useRiskControlState,
  Et as useSvgaPlayer,
  At as useT,
  it as useUploadState
};
