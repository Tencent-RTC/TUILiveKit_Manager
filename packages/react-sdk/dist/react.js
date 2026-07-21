import { h as U, aa as V, a8 as W, a7 as a, I as ae, ba as se, a9 as ie, L as ce, z as ue, B as $, an as le } from "./chunks/shared-state.Bf8CkvaR.js";
import { a4 as He, ab as Xe, ac as Qe } from "./chunks/shared-state.Bf8CkvaR.js";
import { useState as d, useRef as K, useEffect as q, useCallback as o, Component as de } from "react";
import { bW as N, aS as z, bX as O, bY as fe, aD as ge, aB as me, m as he, u as pe, bZ as be, b_ as ve, bC as ye, bA as Me, b$ as we, a8 as Se, c0 as Le, af as Ce, c1 as ke, X as xe, W as Pe } from "./chunks/main-layout.OEkSp6vd.js";
import "tdesign-react";
import { a as Ie, M as _e } from "./chunks/useAsyncAction.R1AlIQqh.js";
import { u as Ze } from "./chunks/useAsyncAction.R1AlIQqh.js";
import { u as et, a as tt, b as rt } from "./chunks/useT.CDh8p6A1.js";
import { jsx as D, jsxs as Te } from "react/jsx-runtime";
const h = U("RiskControl");
function Ne(i) {
  const { liveId: e, pageSize: f } = i, [m, p] = d(!1), [c, g] = d("cloud"), [b, w] = d(!0), [v, x] = d([]), [P, I] = d(1), [_, C] = d(0), [R, A] = d(!1), [n, u] = d([]), [y, j] = d([]), M = K(!0);
  q(() => (M.current = !0, V("risk_control"), N().then(async (t) => {
    if (!M.current) return;
    g(t);
    const r = t === "cloud", S = r ? z : O;
    try {
      const L = await S({ pageSize: f, liveId: e });
      M.current && (p(!0), x(L.list || []), C(L.total || 0)), W(r ? "text_moderation" : "text_moderation_custom"), W(r ? "moderation" : "moderation_custom");
    } catch {
      M.current && p(!1);
    }
    t === "custom" && fe().then((L) => {
      M.current && w(L.Enabled);
    }).catch(() => {
    });
  }), () => {
    M.current = !1;
  }), []);
  const G = o(async (t = {}) => {
    A(!0);
    try {
      let r;
      return c === "custom" ? r = await O({ pageSize: f, liveId: e, ...t }) : r = await z({ pageSize: f, liveId: e, ...t }), M.current && (x(r.list || []), I(t.pageNum || 1), C(r.total || 0)), r;
    } catch (r) {
      throw h.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      M.current && A(!1);
    }
  }, [f, e, c]), T = o(async () => {
    if (!e) return [];
    try {
      const t = await ge(e);
      return u(t), t;
    } catch (t) {
      throw h.error("useRiskControlState", "fetchMutedList failed:", t), t;
    }
  }, [e]), E = o(async () => {
    if (!e) return [];
    try {
      const t = await me(e);
      return j(t), t;
    } catch (t) {
      throw h.error("useRiskControlState", "fetchBannedList failed:", t), t;
    }
  }, [e]), H = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await he(e, t.memberAccounts, t.muteTime), await T(), a("risk_control", "mute", !0, e);
    } catch (r) {
      throw a("risk_control", "mute", !1), h.error("useRiskControlState", "muteMember failed:", r), r;
    }
  }, [e, T]), X = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await pe(e, t.memberAccounts), await T(), a("risk_control", "unmute", !0, e);
    } catch (r) {
      throw a("risk_control", "unmute", !1), h.error("useRiskControlState", "unmuteMember failed:", r), r;
    }
  }, [e, T]), Q = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await be(e, t.memberAccounts, t.duration, t.reason), await E(), a("risk_control", "ban", !0, e);
    } catch {
      a("risk_control", "ban", !1);
    }
  }, [e, E]), Y = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await ve(e, t.memberAccounts), await E(), a("risk_control", "unban", !0, e);
    } catch {
      a("risk_control", "unban", !1);
    }
  }, [e, E]), Z = o(async () => {
    if (!e) throw new Error("liveId is required");
    try {
      const t = await ye(e, "default", ae.VIOLATION_SUGGESTION_DEFAULT);
      return a("risk_control", "violation_warning", !0, e), t;
    } catch (t) {
      throw a("risk_control", "violation_warning", !1), h.error("useRiskControlState", "sendViolationWarning failed:", t), t;
    }
  }, [e]), J = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      const r = await Me(e, t);
      return a("risk_control", "send_admin_message", !0, e), r;
    } catch (r) {
      throw a("risk_control", "send_admin_message", !1), h.error("useRiskControlState", "sendAdminMessage failed:", r), r;
    }
  }, [e]), ee = o(async (t) => {
    try {
      const r = t.items ?? (() => {
        const S = v;
        return t.ids.map((L) => {
          const F = S.find((ne) => ne.id === L);
          return {
            id: L,
            content: F?.content ?? L,
            userId: F?.userId ?? ""
          };
        });
      })();
      if (c === "custom") {
        const S = await we({ ids: t.ids, items: r, liveId: t.liveId ?? e });
        a("moderation", "approve", !0, String(S.success)), S.failed > 0 && h.warn("useRiskControlState", `部分放行失败: 成功 ${S.success}, 失败 ${S.failed}`);
      } else
        await Se({ ids: t.ids, items: r, liveId: t.liveId ?? e }), a("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw a("moderation", "approve", !1), h.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [e, v, c]), te = o(async (t) => {
    try {
      const r = await Le(t);
      return M.current && w(r.Enabled), a("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw a("moderation", "toggle", !1), h.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), re = o(async (t) => {
    try {
      await Ce({ content: t.content, liveId: t.liveId ?? e }), a("moderation", "bypass", !0, String(t.content.length));
    } catch (r) {
      throw a("moderation", "bypass", !1), h.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [e]), oe = o(async (t) => {
    try {
      await N() === "custom" ? await ke(t) : await se(t), a("moderation", "delete", !0, String(t.length));
    } catch (r) {
      throw a("moderation", "delete", !1), h.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    textModerationAvailable: m,
    moderationMode: c,
    customModerationToggleEnabled: b,
    updateCustomModerationToggleEnabled: te,
    textModerationList: v,
    textModerationPageNum: P,
    textModerationTotal: _,
    textModerationLoading: R,
    fetchTextModerationList: G,
    approveTextModerationItems: ee,
    bypassCorrectionKeyword: re,
    muteMember: H,
    unmuteMember: X,
    banMember: Q,
    unbanMember: Y,
    sendViolationWarning: Z,
    sendAdminMessage: J,
    deleteModerationItems: oe,
    mutedList: n,
    bannedList: y,
    fetchMutedList: T,
    fetchBannedList: E
  };
}
U("LiveMonitor");
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
function ze(i) {
  return k.add(i), s && i(s.getSnapshot()), () => {
    k.delete(i);
  };
}
function Oe() {
  const [i, e] = d([]), [f, m] = d(!0), [p, c] = d(null), g = K(!0);
  l || (l = new xe({
    onStateChange: (n) => {
      B.forEach((u) => u(n));
    },
    getActive: () => Ee
  })), Re(), q(() => {
    g.current = !0;
    const n = (y) => {
      g.current && (y.liveList !== void 0 && e(y.liveList), y.hasMore !== void 0 && m(y.hasMore), y.currentLive !== void 0 && c(y.currentLive));
    };
    B.add(n);
    const u = (y) => {
      g.current && e([...y.list]);
    };
    return k.add(u), s && u(s.getSnapshot()), () => {
      g.current = !1, B.delete(n), k.delete(u);
    };
  }, []);
  const b = o((n) => {
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
  }, []), v = o(async (n) => {
    try {
      const u = await l.createLive(n);
      return a("live_crud", "create", !0, u.liveId), V("create_live"), u;
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
      await l.endLive(n), a("live_crud", "delete", !0, n), ie("force_stop");
    } catch (u) {
      throw a("live_crud", "delete", !1), u;
    }
  }, []), I = o(async (n) => l.fetchLiveDetail(n), []), _ = o(async (n) => l.fetchLiveStats(n), []), C = o((n) => {
    l?.setCurrentLive(n);
  }, []), R = o(async (n) => l.stopPlay(n), []);
  o(() => {
    l?.reset();
  }, []);
  const A = o(async (n) => l.startPlay(n), [R]);
  return {
    init: b,
    liveList: i,
    hasMore: f,
    currentLive: p,
    setCurrentLive: C,
    fetchLiveList: w,
    createLive: v,
    updateLive: x,
    endLive: P,
    fetchLiveDetail: I,
    fetchLiveStats: _,
    startPlay: A,
    stopPlay: R
  };
}
function Ue() {
  const [i, e] = d(
    () => s?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  q(() => (k.add(e), s && e(s.getSnapshot()), () => {
    k.delete(e);
  }), []);
  const f = o(() => s?.nextPage() ?? Promise.resolve(), []), m = o(() => s?.prevPage() ?? Promise.resolve(), []), p = o(() => s?.goToFirstPage() ?? Promise.resolve(), []), c = o(() => s?.refresh() ?? Promise.resolve(), []), g = o((w, v) => s?.goToPage(w, v) ?? Promise.resolve(), []), b = o(() => s?.getSnapshot() ?? {
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
    getSnapshot: b
  };
}
function Ve(i) {
  const { confirm: e, onSuccess: f, ...m } = i, [p, c] = d(null), g = o((C) => {
    c(null), f?.(C);
  }, [f]), b = o((C) => {
    c(null);
  }, []), { loading: w, execute: v, reset: x } = Ie({
    ...m,
    onSuccess: g,
    onError: b
  }), P = o(() => {
    c({
      visible: !0,
      title: e.title,
      content: e.content,
      confirmText: e.confirmText
    });
  }, [e]), I = o(() => {
    c(null);
  }, []), _ = o(async () => v(), [v]);
  return {
    loading: w,
    confirmDialog: p,
    requestConfirm: P,
    cancelConfirm: I,
    executeWithConfirm: _,
    reset: x
  };
}
function Ae({ message: i, onRetry: e }) {
  return /* @__PURE__ */ Te(
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
class Ke extends de {
  constructor() {
    super(...arguments), this.state = { error: null }, this.handleRetry = () => {
      this.setState({ error: null });
    };
  }
  static getDerivedStateFromError(e) {
    return { error: ce.from(e) };
  }
  componentDidCatch(e, f) {
    const { code: m, info: p, original: c } = ue(e);
    console.error("[AppErrorBoundary] Render error:", {
      code: m,
      msg: p,
      componentStack: f.componentStack,
      original: c
    }), import("./chunks/shared-state.Bf8CkvaR.js").then((b) => b.bu).then(({ reportBusinessOp: b }) => {
      b("reactRenderError", "render", !1, m ? String(m) : void 0);
    }).catch(() => {
    });
    const g = $(m, p);
    g && _e.error(g);
  }
  render() {
    return this.state.error ? this.props.fallback ? this.props.fallback(this.state.error, this.handleRetry) : /* @__PURE__ */ D(
      Ae,
      {
        message: $(
          this.state.error.code ?? 0,
          this.state.error.message
        ),
        onRetry: this.handleRetry
      }
    ) : this.props.children;
  }
}
le("react");
export {
  Ke as AppErrorBoundary,
  _e as Message,
  He as measureAndReport,
  a as reportBusinessOp,
  ie as reportEvent,
  Xe as reportPageView,
  Qe as reportTime,
  ze as subscribeToPagination,
  Ie as useAsyncAction,
  Ve as useConfirmAction,
  Ze as useGiftState,
  Oe as useLiveMonitorState,
  Ue as usePaginatedList,
  et as usePreviewUrl,
  Ne as useRiskControlState,
  tt as useSvgaPlayer,
  rt as useT
};
