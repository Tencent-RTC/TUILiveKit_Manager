import { g as $, a7 as ne, a5 as z, a4 as a, I as ae, a6 as se, L as ie, x as ce, z as N, aj as ue } from "./chunks/layout.Br-W54NR.js";
import { a1 as He, a8 as Qe, a9 as Ze } from "./chunks/layout.Br-W54NR.js";
import { useState as d, useRef as W, useEffect as F, useCallback as o, Component as le } from "react";
import { c7 as O, aZ as U, c8 as V, c9 as de, aH as fe, aF as ge, m as me, u as he, ca as pe, cb as ve, bO as be, bM as Me, cc as ye, a7 as we, cd as Se, ae as Le, ce as Ce, bz as ke, V as xe, U as Pe } from "./chunks/main-layout.1w0vpJq1.js";
import "tdesign-react";
import { a as Ie, M as Te } from "./chunks/useAsyncAction.CJQgktvN.js";
import { u as Xe } from "./chunks/useAsyncAction.CJQgktvN.js";
import { u as et, a as tt, b as rt } from "./chunks/useT.CoE745-e.js";
import { jsx as D, jsxs as _e } from "react/jsx-runtime";
const h = $("RiskControl");
function Oe(i) {
  const { liveId: e, pageSize: f } = i, [m, p] = d(!1), [c, g] = d("cloud"), [v, w] = d(!0), [b, x] = d([]), [P, I] = d(1), [T, C] = d(0), [R, A] = d(!1), [n, u] = d([]), [M, j] = d([]), y = W(!0);
  F(() => (y.current = !0, ne("risk_control"), O().then(async (t) => {
    if (!y.current) return;
    g(t);
    const r = t === "cloud", S = r ? U : V;
    try {
      const L = await S({ pageSize: f, liveId: e });
      y.current && (p(!0), x(L.list || []), C(L.total || 0)), z(r ? "text_moderation" : "text_moderation_custom"), z(r ? "moderation" : "moderation_custom");
    } catch {
      y.current && p(!1);
    }
    t === "custom" && de().then((L) => {
      y.current && w(L.Enabled);
    }).catch(() => {
    });
  }), () => {
    y.current = !1;
  }), []);
  const K = o(async (t = {}) => {
    A(!0);
    try {
      let r;
      return c === "custom" ? r = await V({ pageSize: f, liveId: e, ...t }) : r = await U({ pageSize: f, liveId: e, ...t }), y.current && (x(r.list || []), I(t.pageNum || 1), C(r.total || 0)), r;
    } catch (r) {
      throw h.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      y.current && A(!1);
    }
  }, [f, e, c]), _ = o(async () => {
    if (!e) return [];
    try {
      const t = await fe(e);
      return u(t), t;
    } catch (t) {
      throw h.error("useRiskControlState", "fetchMutedList failed:", t), t;
    }
  }, [e]), E = o(async () => {
    if (!e) return [];
    try {
      const t = await ge(e);
      return j(t), t;
    } catch (t) {
      throw h.error("useRiskControlState", "fetchBannedList failed:", t), t;
    }
  }, [e]), G = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await me(e, t.memberAccounts, t.muteTime), await _(), a("risk_control", "mute", !0, e);
    } catch (r) {
      throw a("risk_control", "mute", !1), h.error("useRiskControlState", "muteMember failed:", r), r;
    }
  }, [e, _]), H = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await he(e, t.memberAccounts), await _(), a("risk_control", "unmute", !0, e);
    } catch (r) {
      throw a("risk_control", "unmute", !1), h.error("useRiskControlState", "unmuteMember failed:", r), r;
    }
  }, [e, _]), Q = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await pe(e, t.memberAccounts, t.duration, t.reason), await E(), a("risk_control", "ban", !0, e);
    } catch {
      a("risk_control", "ban", !1);
    }
  }, [e, E]), Z = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await ve(e, t.memberAccounts), await E(), a("risk_control", "unban", !0, e);
    } catch {
      a("risk_control", "unban", !1);
    }
  }, [e, E]), J = o(async () => {
    if (!e) throw new Error("liveId is required");
    try {
      const t = await be(e, "default", ae.VIOLATION_SUGGESTION_DEFAULT);
      return a("risk_control", "violation_warning", !0, e), t;
    } catch (t) {
      throw a("risk_control", "violation_warning", !1), h.error("useRiskControlState", "sendViolationWarning failed:", t), t;
    }
  }, [e]), X = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      const r = await Me(e, t);
      return a("risk_control", "send_admin_message", !0, e), r;
    } catch (r) {
      throw a("risk_control", "send_admin_message", !1), h.error("useRiskControlState", "sendAdminMessage failed:", r), r;
    }
  }, [e]), Y = o(async (t) => {
    try {
      const r = t.items ?? (() => {
        const S = b;
        return t.ids.map((L) => {
          const q = S.find((oe) => oe.id === L);
          return {
            id: L,
            content: q?.content ?? L,
            userId: q?.userId ?? ""
          };
        });
      })();
      if (c === "custom") {
        const S = await ye({ ids: t.ids, items: r, liveId: t.liveId ?? e });
        a("moderation", "approve", !0, String(S.success)), S.failed > 0 && h.warn("useRiskControlState", `部分放行失败: 成功 ${S.success}, 失败 ${S.failed}`);
      } else
        await we({ ids: t.ids, items: r, liveId: t.liveId ?? e }), a("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw a("moderation", "approve", !1), h.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [e, b, c]), ee = o(async (t) => {
    try {
      const r = await Se(t);
      return y.current && w(r.Enabled), a("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw a("moderation", "toggle", !1), h.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), te = o(async (t) => {
    try {
      await Le({ content: t.content, liveId: t.liveId ?? e }), a("moderation", "bypass", !0, String(t.content.length));
    } catch (r) {
      throw a("moderation", "bypass", !1), h.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [e]), re = o(async (t) => {
    try {
      await O() === "custom" ? await Ce(t) : await ke(t), a("moderation", "delete", !0, String(t.length));
    } catch (r) {
      throw a("moderation", "delete", !1), h.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    textModerationAvailable: m,
    moderationMode: c,
    customModerationToggleEnabled: v,
    updateCustomModerationToggleEnabled: ee,
    textModerationList: b,
    textModerationPageNum: P,
    textModerationTotal: T,
    textModerationLoading: R,
    fetchTextModerationList: K,
    approveTextModerationItems: Y,
    bypassCorrectionKeyword: te,
    muteMember: G,
    unmuteMember: H,
    banMember: Q,
    unbanMember: Z,
    sendViolationWarning: J,
    sendAdminMessage: X,
    deleteModerationItems: re,
    mutedList: n,
    bannedList: M,
    fetchMutedList: _,
    fetchBannedList: E
  };
}
$("LiveMonitor");
let l = null, Ee = !0, s = null;
const k = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set();
function Re() {
  return s || (s = new Pe({
    pageSize: 8
  }), s.subscribe(() => {
    const i = s.getSnapshot();
    k.forEach((e) => e(i));
  }), s.subscribe(() => {
    if (l) {
      const i = s.getSnapshot();
      l.liveList = [...i.list];
    }
  }), s);
}
function Ue(i) {
  return k.add(i), s && i(s.getSnapshot()), () => {
    k.delete(i);
  };
}
function Ve() {
  const [i, e] = d([]), [f, m] = d(!0), [p, c] = d(null), g = W(!0);
  l || (l = new xe({
    onStateChange: (n) => {
      B.forEach((u) => u(n));
    },
    getActive: () => Ee
  })), Re(), F(() => {
    g.current = !0;
    const n = (M) => {
      g.current && (M.liveList !== void 0 && e(M.liveList), M.hasMore !== void 0 && m(M.hasMore), M.currentLive !== void 0 && c(M.currentLive));
    };
    B.add(n);
    const u = (M) => {
      g.current && e([...M.list]);
    };
    return k.add(u), s && u(s.getSnapshot()), () => {
      g.current = !1, B.delete(n), k.delete(u);
    };
  }, []);
  const v = o((n) => {
    l?.init(n);
  }, []), w = o(async (n) => {
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
  }, []), b = o(async (n) => {
    try {
      const u = await l.createLive(n);
      return a("live_crud", "create", !0, u.liveId), u;
    } catch (u) {
      throw a("live_crud", "create", !1), u;
    }
  }, []), x = o(async (n) => {
    try {
      await l.updateLive(n), a("live_crud", "update", !0, n.liveId);
    } catch (u) {
      throw a("live_crud", "update", !1, n.liveId), u;
    }
  }, []), P = o(async (n) => {
    try {
      await l.endLive(n), a("live_crud", "delete", !0, n), se("force_stop");
    } catch (u) {
      throw a("live_crud", "delete", !1), u;
    }
  }, []), I = o(async (n) => l.fetchLiveDetail(n), []), T = o(async (n) => l.fetchLiveStats(n), []), C = o((n) => {
    l?.setCurrentLive(n);
  }, []), R = o(async (n) => l.stopPlay(n), []);
  o(() => {
    l?.reset();
  }, []);
  const A = o(async (n) => l.startPlay(n), [R]);
  return {
    init: v,
    liveList: i,
    hasMore: f,
    currentLive: p,
    setCurrentLive: C,
    fetchLiveList: w,
    createLive: b,
    updateLive: x,
    endLive: P,
    fetchLiveDetail: I,
    fetchLiveStats: T,
    startPlay: A,
    stopPlay: R
  };
}
function $e() {
  const [i, e] = d(
    () => s?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  F(() => (k.add(e), s && e(s.getSnapshot()), () => {
    k.delete(e);
  }), []);
  const f = o(() => s?.nextPage() ?? Promise.resolve(), []), m = o(() => s?.prevPage() ?? Promise.resolve(), []), p = o(() => s?.goToFirstPage() ?? Promise.resolve(), []), c = o(() => s?.refresh() ?? Promise.resolve(), []), g = o((w, b) => s?.goToPage(w, b) ?? Promise.resolve(), []), v = o(() => s?.getSnapshot() ?? {
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
    prevPage: m,
    goToFirstPage: p,
    refreshCurrentPage: c,
    goToPage: g,
    getSnapshot: v
  };
}
function We(i) {
  const { confirm: e, onSuccess: f, ...m } = i, [p, c] = d(null), g = o((C) => {
    c(null), f?.(C);
  }, [f]), v = o((C) => {
    c(null);
  }, []), { loading: w, execute: b, reset: x } = Ie({
    ...m,
    onSuccess: g,
    onError: v
  }), P = o(() => {
    c({
      visible: !0,
      title: e.title,
      content: e.content,
      confirmText: e.confirmText
    });
  }, [e]), I = o(() => {
    c(null);
  }, []), T = o(async () => b(), [b]);
  return {
    loading: w,
    confirmDialog: p,
    requestConfirm: P,
    cancelConfirm: I,
    executeWithConfirm: T,
    reset: x
  };
}
function Ae({ message: i, onRetry: e }) {
  return /* @__PURE__ */ _e(
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
        /* @__PURE__ */ D("div", { style: { fontSize: 48, opacity: 0.3 }, children: "⚠" }),
        /* @__PURE__ */ D("div", { style: { fontSize: 16, color: "#666", textAlign: "center", maxWidth: 400 }, children: i }),
        /* @__PURE__ */ D(
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
class je extends le {
  constructor() {
    super(...arguments), this.state = { error: null }, this.handleRetry = () => {
      this.setState({ error: null });
    };
  }
  static getDerivedStateFromError(e) {
    return { error: ie.from(e) };
  }
  componentDidCatch(e, f) {
    const { code: m, info: p, original: c } = ce(e);
    console.error("[AppErrorBoundary] Render error:", {
      code: m,
      msg: p,
      componentStack: f.componentStack,
      original: c
    }), import("./chunks/layout.Br-W54NR.js").then((v) => v.b2).then(({ reportBusinessOp: v }) => {
      v("reactRenderError", "render", !1, m ? String(m) : void 0);
    }).catch(() => {
    });
    const g = N(m, p);
    g && Te.error(g);
  }
  render() {
    return this.state.error ? this.props.fallback ? this.props.fallback(this.state.error, this.handleRetry) : /* @__PURE__ */ D(
      Ae,
      {
        message: N(
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
  je as AppErrorBoundary,
  Te as Message,
  He as measureAndReport,
  a as reportBusinessOp,
  se as reportEvent,
  Qe as reportPageView,
  Ze as reportTime,
  Ue as subscribeToPagination,
  Ie as useAsyncAction,
  We as useConfirmAction,
  Xe as useGiftState,
  Ve as useLiveMonitorState,
  $e as usePaginatedList,
  et as usePreviewUrl,
  Oe as useRiskControlState,
  tt as useSvgaPlayer,
  rt as useT
};
