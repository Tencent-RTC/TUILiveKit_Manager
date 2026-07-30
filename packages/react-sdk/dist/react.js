import { a5 as ie, aS as ce, F as ue, t as le, aw as de, y as fe, bi as ge, c as W, a$ as O, aZ as G, aY as s, I as me, aW as he, a_ as pe, m as be, ak as ve, am as N, be as ye } from "./chunks/shared-state.LwLSW33A.js";
import { aR as ft, b0 as gt, b1 as mt, bf as ht } from "./chunks/shared-state.LwLSW33A.js";
import { useSyncExternalStore as z, useCallback as o, useState as g, useRef as K, useEffect as F, Component as Me } from "react";
import { c0 as q, aV as $, c1 as V, c2 as Se, aF as we, aD as Ce, m as Le, u as ke, c3 as Pe, c4 as xe, bI as Ie, bG as Te, c5 as _e, aa as Re, c6 as Ee, ah as Ae, c7 as Ue, Z as De, Y as Fe } from "./chunks/main-layout.BxLEuh4E.js";
import "tdesign-react";
import { a as Be, M as Ge } from "./chunks/useAsyncAction.DDER13aa.js";
import { u as bt } from "./chunks/useAsyncAction.DDER13aa.js";
import { s as Ne, g as qe, a as $e, p as Ve } from "./chunks/demo.DEOn6ZLp.js";
import { r as yt } from "./chunks/demo.DEOn6ZLp.js";
import { u as St, a as wt, b as Ct } from "./chunks/useT.BMh2aeYA.js";
import { jsx as A, jsxs as We } from "react/jsx-runtime";
let j = ie();
function Oe(n) {
  return ge((e) => {
    j = e, n();
  });
}
function ze() {
  return j;
}
function rt() {
  const n = z(Oe, ze), e = n.mode === "server" || n.mode === "proxy" && !!n.credentials, l = o(async (m = {}) => ce(m), []), d = o(() => {
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
const p = W("RiskControl");
function ot(n) {
  const { liveId: e, pageSize: l } = n, [d, m] = g(!1), [c, h] = g("cloud"), [b, S] = g(!0), [v, P] = g([]), [x, I] = g(1), [T, L] = g(0), [U, E] = g(!1), [a, u] = g([]), [y, H] = g([]), M = K(!0);
  F(() => (M.current = !0, O("risk_control"), q().then(async (t) => {
    if (!M.current) return;
    h(t);
    const r = t === "cloud", w = r ? $ : V;
    try {
      const C = await w({ pageSize: l, liveId: e });
      M.current && (m(!0), P(C.list || []), L(C.total || 0)), G(r ? "text_moderation" : "text_moderation_custom"), G(r ? "moderation" : "moderation_custom");
    } catch {
      M.current && m(!1);
    }
    t === "custom" && Se().then((C) => {
      M.current && S(C.Enabled);
    }).catch(() => {
    });
  }), () => {
    M.current = !1;
  }), []);
  const Y = o(async (t = {}) => {
    E(!0);
    try {
      let r;
      return c === "custom" ? r = await V({ pageSize: l, liveId: e, ...t }) : r = await $({ pageSize: l, liveId: e, ...t }), M.current && (P(r.list || []), I(t.pageNum || 1), L(r.total || 0)), r;
    } catch (r) {
      throw p.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      M.current && E(!1);
    }
  }, [l, e, c]), _ = o(async () => {
    if (!e) return [];
    try {
      const t = await we(e);
      return u(t), t;
    } catch (t) {
      throw p.error("useRiskControlState", "fetchMutedList failed:", t), t;
    }
  }, [e]), R = o(async () => {
    if (!e) return [];
    try {
      const t = await Ce(e);
      return H(t), t;
    } catch (t) {
      throw p.error("useRiskControlState", "fetchBannedList failed:", t), t;
    }
  }, [e]), Z = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Le(e, t.memberAccounts, t.muteTime), await _(), s("risk_control", "mute", !0, e);
    } catch (r) {
      throw s("risk_control", "mute", !1), p.error("useRiskControlState", "muteMember failed:", r), r;
    }
  }, [e, _]), Q = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await ke(e, t.memberAccounts), await _(), s("risk_control", "unmute", !0, e);
    } catch (r) {
      throw s("risk_control", "unmute", !1), p.error("useRiskControlState", "unmuteMember failed:", r), r;
    }
  }, [e, _]), J = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Pe(e, t.memberAccounts, t.duration, t.reason), await R(), s("risk_control", "ban", !0, e);
    } catch {
      s("risk_control", "ban", !1);
    }
  }, [e, R]), X = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await xe(e, t.memberAccounts), await R(), s("risk_control", "unban", !0, e);
    } catch {
      s("risk_control", "unban", !1);
    }
  }, [e, R]), ee = o(async () => {
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
      const r = await Te(e, t);
      return s("risk_control", "send_admin_message", !0, e), r;
    } catch (r) {
      throw s("risk_control", "send_admin_message", !1), p.error("useRiskControlState", "sendAdminMessage failed:", r), r;
    }
  }, [e]), re = o(async (t) => {
    try {
      const r = t.items ?? (() => {
        const w = v;
        return t.ids.map((C) => {
          const B = w.find((se) => se.id === C);
          return {
            id: C,
            content: B?.content ?? C,
            userId: B?.userId ?? ""
          };
        });
      })();
      if (c === "custom") {
        const w = await _e({ ids: t.ids, items: r, liveId: t.liveId ?? e });
        s("moderation", "approve", !0, String(w.success)), w.failed > 0 && p.warn("useRiskControlState", `部分放行失败: 成功 ${w.success}, 失败 ${w.failed}`);
      } else
        await Re({ ids: t.ids, items: r, liveId: t.liveId ?? e }), s("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), p.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [e, v, c]), oe = o(async (t) => {
    try {
      const r = await Ee(t);
      return M.current && S(r.Enabled), s("moderation", "toggle", !0), r.Enabled;
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
      await q() === "custom" ? await Ue(t) : await he(t), s("moderation", "delete", !0, String(t.length));
    } catch (r) {
      throw s("moderation", "delete", !1), p.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    textModerationAvailable: d,
    moderationMode: c,
    customModerationToggleEnabled: b,
    updateCustomModerationToggleEnabled: oe,
    textModerationList: v,
    textModerationPageNum: x,
    textModerationTotal: T,
    textModerationLoading: U,
    fetchTextModerationList: Y,
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
    fetchMutedList: _,
    fetchBannedList: R
  };
}
W("LiveMonitor");
let f = null, Ke = !0, i = null;
const k = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
function je() {
  return i || (i = new Fe({
    pageSize: 8
  }), i.subscribe(() => {
    const n = i.getSnapshot();
    k.forEach((e) => e(n));
  }), i.subscribe(() => {
    if (f) {
      const n = i.getSnapshot();
      f.liveList = [...n.list];
    }
  }), i);
}
function nt(n) {
  return k.add(n), i && n(i.getSnapshot()), () => {
    k.delete(n);
  };
}
function at() {
  const [n, e] = g([]), [l, d] = g(!0), [m, c] = g(null), h = K(!0);
  f || (f = new De({
    onStateChange: (a) => {
      D.forEach((u) => u(a));
    },
    getActive: () => Ke
  })), je(), F(() => {
    h.current = !0;
    const a = (y) => {
      h.current && (y.liveList !== void 0 && e(y.liveList), y.hasMore !== void 0 && d(y.hasMore), y.currentLive !== void 0 && c(y.currentLive));
    };
    D.add(a);
    const u = (y) => {
      h.current && e([...y.list]);
    };
    return k.add(u), i && u(i.getSnapshot()), () => {
      h.current = !1, D.delete(a), k.delete(u);
    };
  }, []);
  const b = o((a) => {
    f?.init(a);
  }, []), S = o(async (a) => {
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
  }, []), v = o(async (a) => {
    try {
      const u = await f.createLive(a);
      return s("live_crud", "create", !0, u.liveId), O("create_live"), u;
    } catch (u) {
      throw s("live_crud", "create", !1), u;
    }
  }, []), P = o(async (a) => {
    try {
      await f.updateLive(a), s("live_crud", "update", !0, a.liveId);
    } catch (u) {
      throw s("live_crud", "update", !1, a.liveId), u;
    }
  }, []), x = o(async (a) => {
    try {
      await f.endLive(a), s("live_crud", "delete", !0, a), pe("force_stop");
    } catch (u) {
      throw s("live_crud", "delete", !1), u;
    }
  }, []), I = o(async (a) => f.fetchLiveDetail(a), []), T = o(async (a) => f.fetchLiveStats(a), []), L = o((a) => {
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
    fetchLiveList: S,
    createLive: v,
    updateLive: P,
    endLive: x,
    fetchLiveDetail: I,
    fetchLiveStats: T,
    startPlay: E,
    stopPlay: U
  };
}
function st() {
  const [n, e] = g(
    () => i?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  F(() => (k.add(e), i && e(i.getSnapshot()), () => {
    k.delete(e);
  }), []);
  const l = o(() => i?.nextPage() ?? Promise.resolve(), []), d = o(() => i?.prevPage() ?? Promise.resolve(), []), m = o(() => i?.goToFirstPage() ?? Promise.resolve(), []), c = o(() => i?.refresh() ?? Promise.resolve(), []), h = o((S, v) => i?.goToPage(S, v) ?? Promise.resolve(), []), b = o(() => i?.getSnapshot() ?? {
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
  const n = z(Ne, qe);
  return {
    uploading: n.uploading,
    uploadProgress: n.uploadProgress,
    getUploadConfig: Ve,
    uploadResource: $e
  };
}
function ct(n) {
  const { confirm: e, onSuccess: l, ...d } = n, [m, c] = g(null), h = o((L) => {
    c(null), l?.(L);
  }, [l]), b = o((L) => {
    c(null);
  }, []), { loading: S, execute: v, reset: P } = Be({
    ...d,
    onSuccess: h,
    onError: b
  }), x = o(() => {
    c({
      visible: !0,
      title: e.title,
      content: e.content,
      confirmText: e.confirmText
    });
  }, [e]), I = o(() => {
    c(null);
  }, []), T = o(async () => v(), [v]);
  return {
    loading: S,
    confirmDialog: m,
    requestConfirm: x,
    cancelConfirm: I,
    executeWithConfirm: T,
    reset: P
  };
}
function He({ message: n, onRetry: e }) {
  return /* @__PURE__ */ We(
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
class ut extends Me {
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
    }), import("./chunks/shared-state.LwLSW33A.js").then((b) => b.bG).then(({ reportBusinessOp: b }) => {
      b("reactRenderError", "render", !1, d ? String(d) : void 0);
    }).catch(() => {
    });
    const h = N(d, m);
    h && Ge.error(h);
  }
  render() {
    return this.state.error ? this.props.fallback ? this.props.fallback(this.state.error, this.handleRetry) : /* @__PURE__ */ A(
      He,
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
ye("react");
export {
  ut as AppErrorBoundary,
  Ge as Message,
  ft as measureAndReport,
  s as reportBusinessOp,
  pe as reportEvent,
  gt as reportPageView,
  mt as reportTime,
  yt as resolveDemoTargetPath,
  ht as setReportSource,
  nt as subscribeToPagination,
  Be as useAsyncAction,
  rt as useAuthState,
  ct as useConfirmAction,
  bt as useGiftState,
  at as useLiveMonitorState,
  st as usePaginatedList,
  St as usePreviewUrl,
  ot as useRiskControlState,
  wt as useSvgaPlayer,
  Ct as useT,
  it as useUploadState
};
