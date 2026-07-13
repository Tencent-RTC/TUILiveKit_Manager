import { useState as l, useRef as B, useEffect as N, useCallback as n } from "react";
import { av as Y, at as Z, m as ee, u as te, bJ as re, bK as ne, bs as ae, R as oe, Q as se } from "./main-layout.BhZeSioG.js";
import { c as K, r as s } from "./logger.pnqt7v8K.js";
import { U as ie, au as ce, R as ue, ab as le, ac as de } from "./layout.CKYQEGpU.js";
import "tdesign-react";
const b = K("RiskControl");
function ye(i) {
  const { liveId: t, pageSize: w } = i, [y, M] = l(!1), [L, h] = l(0), [v, p] = l([]), [S, I] = l(1), [_, R] = l(0), [E, T] = l(!1), [x, A] = l([]), [r, c] = l([]), [g, d] = l(!1), [F, f] = l(null), P = B(!0);
  N(() => (P.current = !0, () => {
    P.current = !1;
  }), []);
  const O = n(async () => {
    try {
      const e = await ie();
      return P.current && (M(e > 0), h(e)), e;
    } catch (e) {
      throw b.error("useRiskControlState", "fetchTextModerationUsage failed:", e), e;
    }
  }, []), V = n(async (e = {}) => {
    T(!0);
    try {
      const a = await ce({ pageSize: w, liveId: t, ...e });
      return P.current && (p(a.list || []), I(e.pageNum || 1), R(a.total || 0)), a;
    } catch (a) {
      throw b.error("useRiskControlState", "fetchTextModerationList failed:", a), a;
    } finally {
      P.current && T(!1);
    }
  }, [w, t]), k = n(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await Y(t);
      return A(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), C = n(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await Z(t);
      return c(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), $ = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ee(t, e.memberAccounts, e.muteTime), await k(), s("risk_control", "mute", !0, t);
    } catch (a) {
      throw f(a), s("risk_control", "mute", !1, t), b.error("useRiskControlState", "muteMember failed:", a), a;
    } finally {
      d(!1);
    }
  }, [t, k]), W = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await te(t, e.memberAccounts), await k(), s("risk_control", "unmute", !0, t);
    } catch (a) {
      throw f(a), s("risk_control", "unmute", !1, t), b.error("useRiskControlState", "unmuteMember failed:", a), a;
    } finally {
      d(!1);
    }
  }, [t, k]), z = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await re(t, e.memberAccounts, e.duration, e.reason), await C(), s("risk_control", "ban", !0, t);
    } catch (a) {
      f(a), s("risk_control", "ban", !1, t);
    } finally {
      d(!1);
    }
  }, [t, C]), G = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ne(t, e.memberAccounts), await C(), s("risk_control", "unban", !0, t);
    } catch (a) {
      f(a), s("risk_control", "unban", !1, t);
    } finally {
      d(!1);
    }
  }, [t, C]), Q = n(async () => {
    if (!t) throw new Error("liveId is required");
    try {
      const e = await ae(t, "default", ue.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, t), e;
    } catch (e) {
      throw s("risk_control", "violation_warning", !1, t), b.error("useRiskControlState", "sendViolationWarning failed:", e), e;
    }
  }, [t]), H = n(async (e) => {
    try {
      const a = e.items ?? (() => {
        const j = v;
        return e.ids.map((U) => {
          const q = j.find((X) => X.id === U);
          return {
            id: U,
            content: q?.content ?? U,
            userId: q?.userId ?? ""
          };
        });
      })();
      await le({ ids: e.ids, items: a, liveId: e.liveId ?? t }), s("moderation", "approve", !0, String(e.ids.length));
    } catch (a) {
      throw s("moderation", "approve", !1), b.error("useRiskControlState", "approveTextModerationItems failed:", a), a;
    }
  }, [t, v]), J = n(async (e) => {
    try {
      await de({ content: e.content, liveId: e.liveId ?? t }), s("moderation", "bypass", !0, String(e.content.length));
    } catch (a) {
      throw s("moderation", "bypass", !1), b.error("useRiskControlState", "bypassCorrectionKeyword failed:", a), a;
    }
  }, [t]);
  return {
    textModerationAvailable: y,
    textModerationRemainUsage: L,
    textModerationList: v,
    textModerationPageNum: S,
    textModerationTotal: _,
    textModerationLoading: E,
    fetchTextModerationUsage: O,
    fetchTextModerationList: V,
    approveTextModerationItems: H,
    bypassCorrectionKeyword: J,
    muteMember: $,
    unmuteMember: W,
    banMember: z,
    unbanMember: G,
    sendViolationWarning: Q,
    mutedList: x,
    bannedList: r,
    memberLoading: g,
    memberError: F,
    fetchMutedList: k,
    fetchBannedList: C
  };
}
K("LiveMonitor");
let u = null, fe = !0, o = null;
const m = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set();
function ge() {
  return o || (o = new se({
    pageSize: 8
  }), o.subscribe(() => {
    const i = o.getSnapshot();
    m.forEach((t) => t(i));
  }), o.subscribe(() => {
    if (u) {
      const i = o.getSnapshot();
      u.liveList = [...i.list];
    }
  }), o);
}
function Me(i) {
  return m.add(i), o && i(o.getSnapshot()), () => {
    m.delete(i);
  };
}
function Le() {
  const [i, t] = l([]), [w, y] = l(!0), [M, L] = l(null), h = B(!0);
  u || (u = new oe({
    onStateChange: (r) => {
      D.forEach((c) => c(r));
    },
    getActive: () => fe
  })), ge(), N(() => {
    h.current = !0;
    const r = (g) => {
      h.current && (g.liveList !== void 0 && t(g.liveList), g.hasMore !== void 0 && y(g.hasMore), g.currentLive !== void 0 && L(g.currentLive));
    };
    D.add(r);
    const c = (g) => {
      h.current && t([...g.list]);
    };
    return m.add(c), o && c(o.getSnapshot()), () => {
      h.current = !1, D.delete(r), m.delete(c);
    };
  }, []);
  const v = n((r) => {
    u?.init(r);
  }, []), p = n(async (r) => {
    if (!o) return [];
    switch (r?.action) {
      case "first":
        await o.goToFirstPage();
        break;
      case "prev":
        await o.prevPage();
        break;
      default:
        await o.nextPage();
        break;
    }
    return o.getSnapshot().list;
  }, []), S = n(async (r) => {
    try {
      const c = await u.createLive(r);
      return s("live_crud", "create", !0, c.liveId), c;
    } catch (c) {
      throw s("live_crud", "create", !1), c;
    }
  }, []), I = n(async (r) => {
    try {
      await u.updateLive(r), s("live_crud", "update", !0, r.liveId);
    } catch (c) {
      throw s("live_crud", "update", !1, r.liveId), c;
    }
  }, []), _ = n(async (r) => {
    try {
      await u.endLive(r), s("live_crud", "delete", !0, r);
    } catch (c) {
      throw s("live_crud", "delete", !1, r), c;
    }
  }, []), R = n(async (r) => u.fetchLiveDetail(r), []), E = n(async (r) => u.fetchLiveStats(r), []), T = n((r) => {
    u?.setCurrentLive(r);
  }, []), x = n(async (r) => u.stopPlay(r), []);
  n(() => {
    u?.reset();
  }, []);
  const A = n(async (r) => u.startPlay(r), [x]);
  return {
    init: v,
    liveList: i,
    hasMore: w,
    currentLive: M,
    setCurrentLive: T,
    fetchLiveList: p,
    createLive: S,
    updateLive: I,
    endLive: _,
    fetchLiveDetail: R,
    fetchLiveStats: E,
    startPlay: A,
    stopPlay: x
  };
}
function pe() {
  const [i, t] = l(
    () => o?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  N(() => (m.add(t), o && t(o.getSnapshot()), () => {
    m.delete(t);
  }), []);
  const w = n(() => o?.nextPage() ?? Promise.resolve(), []), y = n(() => o?.prevPage() ?? Promise.resolve(), []), M = n(() => o?.goToFirstPage() ?? Promise.resolve(), []), L = n(() => o?.refresh() ?? Promise.resolve(), []), h = n((p, S) => o?.goToPage(p, S) ?? Promise.resolve(), []), v = n(() => o?.getSnapshot() ?? {
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
    nextPage: w,
    prevPage: y,
    goToFirstPage: M,
    refreshCurrentPage: L,
    goToPage: h,
    getSnapshot: v
  };
}
export {
  pe as a,
  ye as b,
  Me as s,
  Le as u
};
