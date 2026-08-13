import { a5 as ie, aS as ce, F as ue, t as le, aw as de, y as fe, bi as ge, c as V, a$ as W, aZ as F, aY as s, I as me, aW as he, a_ as pe, m as be, ak as ve, am as N, be as ye } from "./chunks/shared-state.BkuXD95c.js";
import { aR as ft, b0 as gt, b1 as mt, bf as ht } from "./chunks/shared-state.BkuXD95c.js";
import { useSyncExternalStore as z, useCallback as o, useState as g, useRef as K, useEffect as G, Component as Se } from "react";
import { c0 as q, aV as O, c1 as $, c2 as Me, aF as we, aD as Le, m as Ce, u as Pe, c3 as ke, c4 as xe, bI as Ie, bG as _e, c5 as Te, aa as Re, c6 as Ee, ah as Ae, c7 as Ue, Z as De, Y as Ge } from "./chunks/main-layout.CW0IWNsf.js";
import "tdesign-react";
import { a as Be, M as Fe } from "./chunks/useAsyncAction.jPDjgEh7.js";
import { u as bt } from "./chunks/useAsyncAction.jPDjgEh7.js";
import { s as Ne, g as qe, a as Oe, p as $e } from "./chunks/demo.Fxmf_Nac.js";
import { D as yt, G as St, r as Mt } from "./chunks/demo.Fxmf_Nac.js";
import { u as Lt, a as Ct, b as Pt } from "./chunks/useT.eNI-UoWa.js";
import { jsx as A, jsxs as Ve } from "react/jsx-runtime";
let j = ie();
function We(n) {
  return ge((e) => {
    j = e, n();
  });
}
function ze() {
  return j;
}
function rt() {
  const n = z(We, ze), e = n.mode === "server" || n.mode === "proxy" && !!n.credentials, l = o(async (m = {}) => ce(m), []), d = o(() => {
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
const p = V("RiskControl");
function ot(n) {
  const { liveId: e, pageSize: l } = n, [d, m] = g(!1), [c, h] = g("cloud"), [b, M] = g(!0), [v, k] = g([]), [x, I] = g(1), [_, C] = g(0), [U, E] = g(!1), [a, u] = g([]), [y, H] = g([]), S = K(!0);
  G(() => (S.current = !0, W("risk_control"), q().then(async (t) => {
    if (!S.current) return;
    h(t);
    const r = t === "cloud", w = r ? O : $;
    try {
      const L = await w({ pageSize: l, liveId: e });
      S.current && (m(!0), k(L.list || []), C(L.total || 0)), F(r ? "text_moderation" : "text_moderation_custom"), F(r ? "moderation" : "moderation_custom");
    } catch {
      S.current && m(!1);
    }
    t === "custom" && Me().then((L) => {
      S.current && M(L.Enabled);
    }).catch(() => {
    });
  }), () => {
    S.current = !1;
  }), []);
  const Y = o(async (t = {}) => {
    E(!0);
    try {
      let r;
      return c === "custom" ? r = await $({ pageSize: l, liveId: e, ...t }) : r = await O({ pageSize: l, liveId: e, ...t }), S.current && (k(r.list || []), I(t.pageNum || 1), C(r.total || 0)), r;
    } catch (r) {
      throw p.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      S.current && E(!1);
    }
  }, [l, e, c]), T = o(async () => {
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
      const t = await Le(e);
      return H(t), t;
    } catch (t) {
      throw p.error("useRiskControlState", "fetchBannedList failed:", t), t;
    }
  }, [e]), Z = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Ce(e, t.memberAccounts, t.muteTime), await T(), s("risk_control", "mute", !0, e);
    } catch (r) {
      throw s("risk_control", "mute", !1), p.error("useRiskControlState", "muteMember failed:", r), r;
    }
  }, [e, T]), Q = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await Pe(e, t.memberAccounts), await T(), s("risk_control", "unmute", !0, e);
    } catch (r) {
      throw s("risk_control", "unmute", !1), p.error("useRiskControlState", "unmuteMember failed:", r), r;
    }
  }, [e, T]), J = o(async (t) => {
    if (!e) throw new Error("liveId is required");
    try {
      await ke(e, t.memberAccounts, t.duration, t.reason), await R(), s("risk_control", "ban", !0, e);
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
      const r = await _e(e, t);
      return s("risk_control", "send_admin_message", !0, e), r;
    } catch (r) {
      throw s("risk_control", "send_admin_message", !1), p.error("useRiskControlState", "sendAdminMessage failed:", r), r;
    }
  }, [e]), re = o(async (t) => {
    try {
      const r = t.items ?? (() => {
        const w = v;
        return t.ids.map((L) => {
          const B = w.find((se) => se.id === L);
          return {
            id: L,
            content: B?.content ?? L,
            userId: B?.userId ?? ""
          };
        });
      })();
      if (c === "custom") {
        const w = await Te({ ids: t.ids, items: r, liveId: t.liveId ?? e });
        s("moderation", "approve", !0, String(w.success)), w.failed > 0 && p.warn("useRiskControlState", `部分放行失败: 成功 ${w.success}, 失败 ${w.failed}`);
      } else
        await Re({ ids: t.ids, items: r, liveId: t.liveId ?? e }), s("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), p.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [e, v, c]), oe = o(async (t) => {
    try {
      const r = await Ee(t);
      return S.current && M(r.Enabled), s("moderation", "toggle", !0), r.Enabled;
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
    textModerationTotal: _,
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
    fetchMutedList: T,
    fetchBannedList: R
  };
}
V("LiveMonitor");
let f = null, Ke = !0, i = null;
const P = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
function je() {
  return i || (i = new Ge({
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
  const [n, e] = g([]), [l, d] = g(!0), [m, c] = g(null), h = K(!0);
  f || (f = new De({
    onStateChange: (a) => {
      D.forEach((u) => u(a));
    },
    getActive: () => Ke
  })), je(), G(() => {
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
  }, []), M = o(async (a) => {
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
      return s("live_crud", "create", !0, u.liveId), W("create_live"), u;
    } catch (u) {
      throw s("live_crud", "create", !1), u;
    }
  }, []), k = o(async (a) => {
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
  }, []), I = o(async (a) => f.fetchLiveDetail(a), []), _ = o(async (a) => f.fetchLiveStats(a), []), C = o((a) => {
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
    setCurrentLive: C,
    fetchLiveList: M,
    createLive: v,
    updateLive: k,
    endLive: x,
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
  G(() => (P.add(e), i && e(i.getSnapshot()), () => {
    P.delete(e);
  }), []);
  const l = o(() => i?.nextPage() ?? Promise.resolve(), []), d = o(() => i?.prevPage() ?? Promise.resolve(), []), m = o(() => i?.goToFirstPage() ?? Promise.resolve(), []), c = o(() => i?.refresh() ?? Promise.resolve(), []), h = o((M, v) => i?.goToPage(M, v) ?? Promise.resolve(), []), b = o(() => i?.getSnapshot() ?? {
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
    getUploadConfig: $e,
    uploadResource: Oe
  };
}
function ct(n) {
  const { confirm: e, onSuccess: l, ...d } = n, [m, c] = g(null), h = o((C) => {
    c(null), l?.(C);
  }, [l]), b = o((C) => {
    c(null);
  }, []), { loading: M, execute: v, reset: k } = Be({
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
  }, []), _ = o(async () => v(), [v]);
  return {
    loading: M,
    confirmDialog: m,
    requestConfirm: x,
    cancelConfirm: I,
    executeWithConfirm: _,
    reset: k
  };
}
function He({ message: n, onRetry: e }) {
  return /* @__PURE__ */ Ve(
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
class ut extends Se {
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
    }), import("./chunks/shared-state.BkuXD95c.js").then((b) => b.bG).then(({ reportBusinessOp: b }) => {
      b("reactRenderError", "render", !1, d ? String(d) : void 0);
    }).catch(() => {
    });
    const h = N(d, m);
    h && Fe.error(h);
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
  yt as DEPLOY_DOC_URL,
  St as GITHUB_ISSUE_URL,
  Fe as Message,
  ft as measureAndReport,
  s as reportBusinessOp,
  pe as reportEvent,
  gt as reportPageView,
  mt as reportTime,
  Mt as resolveDemoTargetPath,
  ht as setReportSource,
  nt as subscribeToPagination,
  Be as useAsyncAction,
  rt as useAuthState,
  ct as useConfirmAction,
  bt as useGiftState,
  at as useLiveMonitorState,
  st as usePaginatedList,
  Lt as usePreviewUrl,
  ot as useRiskControlState,
  Ct as useSvgaPlayer,
  Pt as useT,
  it as useUploadState
};
