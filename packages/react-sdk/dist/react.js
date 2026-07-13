import { c as j, n as ce, j as U, h as a, k as le, u as ue } from "./chunks/logger.rNWqpx5t.js";
import { m as Ye, o as et, p as tt } from "./chunks/logger.rNWqpx5t.js";
import { useState as u, useRef as K, useEffect as N, useCallback as o, Component as de } from "react";
import { c7 as V, aZ as $, c8 as z, c9 as fe, aH as me, aF as ge, m as he, u as pe, ca as be, cb as ve, bO as ye, bM as Me, cc as we, a7 as Le, cd as Se, ae as Ce, ce as ke, bz as xe, V as Pe, U as Ie } from "./chunks/main-layout.QTEHh38b.js";
import { I as Te, L as _e, r as Ee, t as W } from "./chunks/layout.C1lzYH2h.js";
import "tdesign-react";
import { a as Re, M as Ae } from "./chunks/useAsyncAction.BxAgRz5E.js";
import { u as ot } from "./chunks/useAsyncAction.BxAgRz5E.js";
import { u as at, a as st, b as it } from "./chunks/useT.C_9voV_t.js";
import { jsx as q, jsxs as De } from "react/jsx-runtime";
const w = j("RiskControl");
function je(i) {
  const { liveId: e, pageSize: f } = i, [g, b] = u(!1), [c, m] = u("cloud"), [v, S] = u(!0), [y, I] = u([]), [T, _] = u(1), [E, x] = u(0), [D, F] = u(!1), [n, l] = u([]), [M, G] = u([]), [H, h] = u(!1), [Q, p] = u(null), L = K(!0);
  N(() => (L.current = !0, ce("risk_control"), V().then(async (t) => {
    if (!L.current) return;
    m(t);
    const r = t === "cloud", C = r ? $ : z;
    try {
      const k = await C({ pageSize: f, liveId: e });
      L.current && (b(!0), I(k.list || []), x(k.total || 0)), U(r ? "text_moderation" : "text_moderation_custom"), U(r ? "moderation" : "moderation_custom");
    } catch {
      L.current && b(!1);
    }
    t === "custom" && fe().then((k) => {
      L.current && S(k.Enabled);
    }).catch(() => {
    });
  }), () => {
    L.current = !1;
  }), []);
  const Z = o(async (t = {}) => {
    F(!0);
    try {
      let r;
      return c === "custom" ? r = await z({ pageSize: f, liveId: e, ...t }) : r = await $({ pageSize: f, liveId: e, ...t }), L.current && (I(r.list || []), _(t.pageNum || 1), x(r.total || 0)), r;
    } catch (r) {
      throw w.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      L.current && F(!1);
    }
  }, [f, e, c]), R = o(async () => {
    if (!e) return [];
    h(!0), p(null);
    try {
      const t = await me(e);
      return l(t), t;
    } catch (t) {
      throw p(t), t;
    } finally {
      h(!1);
    }
  }, [e]), A = o(async () => {
    if (!e) return [];
    h(!0), p(null);
    try {
      const t = await ge(e);
      return G(t), t;
    } catch (t) {
      throw p(t), t;
    } finally {
      h(!1);
    }
  }, [e]), J = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    h(!0), p(null);
    try {
      await he(e, t.memberAccounts, t.muteTime), await R(), a("risk_control", "mute", !0, e);
    } catch (r) {
      throw p(r), a("risk_control", "mute", !1), w.error("useRiskControlState", "muteMember failed:", r), r;
    } finally {
      h(!1);
    }
  }, [e, R]), X = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    h(!0), p(null);
    try {
      await pe(e, t.memberAccounts), await R(), a("risk_control", "unmute", !0, e);
    } catch (r) {
      throw p(r), a("risk_control", "unmute", !1), w.error("useRiskControlState", "unmuteMember failed:", r), r;
    } finally {
      h(!1);
    }
  }, [e, R]), Y = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    h(!0), p(null);
    try {
      await be(e, t.memberAccounts, t.duration, t.reason), await A(), a("risk_control", "ban", !0, e);
    } catch (r) {
      p(r), a("risk_control", "ban", !1);
    } finally {
      h(!1);
    }
  }, [e, A]), ee = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    h(!0), p(null);
    try {
      await ve(e, t.memberAccounts), await A(), a("risk_control", "unban", !0, e);
    } catch (r) {
      p(r), a("risk_control", "unban", !1);
    } finally {
      h(!1);
    }
  }, [e, A]), te = o(async () => {
    if (!e) throw new Error("liveId is required");
    try {
      const t = await ye(e, "default", Te.VIOLATION_SUGGESTION_DEFAULT);
      return a("risk_control", "violation_warning", !0, e), t;
    } catch (t) {
      throw a("risk_control", "violation_warning", !1), w.error("useRiskControlState", "sendViolationWarning failed:", t), t;
    }
  }, [e]), re = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      const r = await Me(e, t);
      return a("risk_control", "send_admin_message", !0, e), r;
    } catch (r) {
      throw a("risk_control", "send_admin_message", !1), w.error("useRiskControlState", "sendAdminMessage failed:", r), r;
    }
  }, [e]), oe = o(async (t) => {
    try {
      const r = t.items ?? (() => {
        const C = y;
        return t.ids.map((k) => {
          const O = C.find((ie) => ie.id === k);
          return {
            id: k,
            content: O?.content ?? k,
            userId: O?.userId ?? ""
          };
        });
      })();
      if (c === "custom") {
        const C = await we({ ids: t.ids, items: r, liveId: t.liveId ?? e });
        a("moderation", "approve", !0, String(C.success)), C.failed > 0 && w.warn("useRiskControlState", `部分放行失败: 成功 ${C.success}, 失败 ${C.failed}`);
      } else
        await Le({ ids: t.ids, items: r, liveId: t.liveId ?? e }), a("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw a("moderation", "approve", !1), w.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [e, y, c]), ne = o(async (t) => {
    try {
      const r = await Se(t);
      return L.current && S(r.Enabled), a("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw a("moderation", "toggle", !1), w.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), ae = o(async (t) => {
    try {
      await Ce({ content: t.content, liveId: t.liveId ?? e }), a("moderation", "bypass", !0, String(t.content.length));
    } catch (r) {
      throw a("moderation", "bypass", !1), w.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [e]), se = o(async (t) => {
    try {
      await V() === "custom" ? await ke(t) : await xe(t), a("moderation", "delete", !0, String(t.length));
    } catch (r) {
      throw a("moderation", "delete", !1), w.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    textModerationAvailable: g,
    moderationMode: c,
    customModerationToggleEnabled: v,
    updateCustomModerationToggleEnabled: ne,
    textModerationList: y,
    textModerationPageNum: T,
    textModerationTotal: E,
    textModerationLoading: D,
    fetchTextModerationList: Z,
    approveTextModerationItems: oe,
    bypassCorrectionKeyword: ae,
    muteMember: J,
    unmuteMember: X,
    banMember: Y,
    unbanMember: ee,
    sendViolationWarning: te,
    sendAdminMessage: re,
    deleteModerationItems: se,
    mutedList: n,
    bannedList: M,
    memberLoading: H,
    memberError: Q,
    fetchMutedList: R,
    fetchBannedList: A
  };
}
j("LiveMonitor");
let d = null, Fe = !0, s = null;
const P = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set();
function qe() {
  return s || (s = new Ie({
    pageSize: 8
  }), s.subscribe(() => {
    const i = s.getSnapshot();
    P.forEach((e) => e(i));
  }), s.subscribe(() => {
    if (d) {
      const i = s.getSnapshot();
      d.liveList = [...i.list];
    }
  }), s);
}
function Ke(i) {
  return P.add(i), s && i(s.getSnapshot()), () => {
    P.delete(i);
  };
}
function Ge() {
  const [i, e] = u([]), [f, g] = u(!0), [b, c] = u(null), m = K(!0);
  d || (d = new Pe({
    onStateChange: (n) => {
      B.forEach((l) => l(n));
    },
    getActive: () => Fe
  })), qe(), N(() => {
    m.current = !0;
    const n = (M) => {
      m.current && (M.liveList !== void 0 && e(M.liveList), M.hasMore !== void 0 && g(M.hasMore), M.currentLive !== void 0 && c(M.currentLive));
    };
    B.add(n);
    const l = (M) => {
      m.current && e([...M.list]);
    };
    return P.add(l), s && l(s.getSnapshot()), () => {
      m.current = !1, B.delete(n), P.delete(l);
    };
  }, []);
  const v = o((n) => {
    d?.init(n);
  }, []), S = o(async (n) => {
    if (!s) return [];
    switch (n?.action) {
      case "first":
        await s.goToFirstPage();
        break;
      case "prev":
        await s.prevPage();
        break;
      default:
        await s.nextPage();
        break;
    }
    return s.getSnapshot().list;
  }, []), y = o(async (n) => {
    try {
      const l = await d.createLive(n);
      return a("live_crud", "create", !0, l.liveId), l;
    } catch (l) {
      throw a("live_crud", "create", !1), l;
    }
  }, []), I = o(async (n) => {
    try {
      await d.updateLive(n), a("live_crud", "update", !0, n.liveId);
    } catch (l) {
      throw a("live_crud", "update", !1, n.liveId), l;
    }
  }, []), T = o(async (n) => {
    try {
      await d.endLive(n), a("live_crud", "delete", !0, n), le("force_stop");
    } catch (l) {
      throw a("live_crud", "delete", !1), l;
    }
  }, []), _ = o(async (n) => d.fetchLiveDetail(n), []), E = o(async (n) => d.fetchLiveStats(n), []), x = o((n) => {
    d?.setCurrentLive(n);
  }, []), D = o(async (n) => d.stopPlay(n), []);
  o(() => {
    d?.reset();
  }, []);
  const F = o(async (n) => d.startPlay(n), [D]);
  return {
    init: v,
    liveList: i,
    hasMore: f,
    currentLive: b,
    setCurrentLive: x,
    fetchLiveList: S,
    createLive: y,
    updateLive: I,
    endLive: T,
    fetchLiveDetail: _,
    fetchLiveStats: E,
    startPlay: F,
    stopPlay: D
  };
}
function He() {
  const [i, e] = u(
    () => s?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  N(() => (P.add(e), s && e(s.getSnapshot()), () => {
    P.delete(e);
  }), []);
  const f = o(() => s?.nextPage() ?? Promise.resolve(), []), g = o(() => s?.prevPage() ?? Promise.resolve(), []), b = o(() => s?.goToFirstPage() ?? Promise.resolve(), []), c = o(() => s?.refresh() ?? Promise.resolve(), []), m = o((S, y) => s?.goToPage(S, y) ?? Promise.resolve(), []), v = o(() => s?.getSnapshot() ?? {
    list: [],
    currentPage: 1,
    hasMoreData: !0,
    loading: !1,
    pageCursors: /* @__PURE__ */ new Map([[1, ""]])
  }, []);
  return {
    pageData: i.list,
    currentPage: i.currentPage,
    hasMore: i.hasMoreData,
    loading: i.loading,
    nextPage: f,
    prevPage: g,
    goToFirstPage: b,
    refreshCurrentPage: c,
    goToPage: m,
    getSnapshot: v
  };
}
function Qe(i) {
  const { confirm: e, onSuccess: f, ...g } = i, [b, c] = u(null), m = o((x) => {
    c(null), f?.(x);
  }, [f]), v = o((x) => {
    c(null);
  }, []), { loading: S, execute: y, reset: I } = Re({
    ...g,
    onSuccess: m,
    onError: v
  }), T = o(() => {
    c({
      visible: !0,
      title: e.title,
      content: e.content,
      confirmText: e.confirmText
    });
  }, [e]), _ = o(() => {
    c(null);
  }, []), E = o(async () => y(), [y]);
  return {
    loading: S,
    confirmDialog: b,
    requestConfirm: T,
    cancelConfirm: _,
    executeWithConfirm: E,
    reset: I
  };
}
function Be({ message: i, onRetry: e }) {
  return /* @__PURE__ */ De(
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
        /* @__PURE__ */ q("div", { style: { fontSize: 48, opacity: 0.3 }, children: "⚠" }),
        /* @__PURE__ */ q("div", { style: { fontSize: 16, color: "#666", textAlign: "center", maxWidth: 400 }, children: i }),
        /* @__PURE__ */ q(
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
class Ze extends de {
  constructor() {
    super(...arguments), this.state = { error: null }, this.handleRetry = () => {
      this.setState({ error: null });
    };
  }
  static getDerivedStateFromError(e) {
    return { error: _e.from(e) };
  }
  componentDidCatch(e, f) {
    const { code: g, info: b, original: c } = Ee(e);
    console.error("[AppErrorBoundary] Render error:", {
      code: g,
      msg: b,
      componentStack: f.componentStack,
      original: c
    }), import("./chunks/logger.rNWqpx5t.js").then((v) => v.D).then(({ reportBusinessOp: v }) => {
      v("reactRenderError", "render", !1, g ? String(g) : void 0);
    }).catch(() => {
    });
    const m = W(g, b);
    m && Ae.error(m);
  }
  render() {
    return this.state.error ? this.props.fallback ? this.props.fallback(this.state.error, this.handleRetry) : /* @__PURE__ */ q(
      Be,
      {
        message: W(
          this.state.error.code ?? 0,
          this.state.error.message
        ),
        onRetry: this.handleRetry
      }
    ) : this.props.children;
  }
}
ue("react");
export {
  Ze as AppErrorBoundary,
  Ae as Message,
  Ye as measureAndReport,
  a as reportBusinessOp,
  le as reportEvent,
  et as reportPageView,
  tt as reportTime,
  Ke as subscribeToPagination,
  Re as useAsyncAction,
  Qe as useConfirmAction,
  ot as useGiftState,
  Ge as useLiveMonitorState,
  He as usePaginatedList,
  at as usePreviewUrl,
  je as useRiskControlState,
  st as useSvgaPlayer,
  it as useT
};
