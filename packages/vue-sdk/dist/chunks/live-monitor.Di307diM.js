import { useState as l, useRef as B, useEffect as q, useCallback as a } from "react";
import { aq as Y, ao as Z, m as ee, u as te, bE as re, bF as ae, bo as ne, O as oe, bG as se, ap as ie } from "./main-layout.7dM7GuCv.js";
import { c as F, r as s } from "./logger.pnqt7v8K.js";
import { ac as ce, a8 as ue, I as le, m as de, o as fe } from "./layout.BInVXJga.js";
import "tdesign-react";
const M = F("RiskControl");
function pe(i) {
  const { liveId: e, pageSize: v } = i, [p, h] = l(!1), [y, b] = l(0), [m, L] = l([]), [P, I] = l(1), [_, R] = l(0), [D, T] = l(!1), [x, E] = l([]), [r, c] = l([]), [g, d] = l(!1), [O, f] = l(null), S = B(!0);
  q(() => (S.current = !0, () => {
    S.current = !1;
  }), []);
  const K = a(async () => {
    try {
      const t = await ce();
      return S.current && (h(t > 0), b(t)), t;
    } catch (t) {
      throw M.error("useRiskControlState", "fetchTextModerationUsage failed:", t), t;
    }
  }, []), V = a(async (t = {}) => {
    T(!0);
    try {
      const n = await ue({ pageSize: v, liveId: e, ...t });
      return S.current && (L(n.list || []), I(t.pageNum || 1), R(n.total || 0)), n;
    } catch (n) {
      throw M.error("useRiskControlState", "fetchTextModerationList failed:", n), n;
    } finally {
      S.current && T(!1);
    }
  }, [v, e]), C = a(async () => {
    if (!e) return [];
    d(!0), f(null);
    try {
      const t = await Y(e);
      return E(t), t;
    } catch (t) {
      throw f(t), t;
    } finally {
      d(!1);
    }
  }, [e]), k = a(async () => {
    if (!e) return [];
    d(!0), f(null);
    try {
      const t = await Z(e);
      return c(t), t;
    } catch (t) {
      throw f(t), t;
    } finally {
      d(!1);
    }
  }, [e]), $ = a(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ee(e, t.memberAccounts, t.muteTime), await C(), s("risk_control", "mute", !0, e);
    } catch (n) {
      throw f(n), s("risk_control", "mute", !1, e), M.error("useRiskControlState", "muteMember failed:", n), n;
    } finally {
      d(!1);
    }
  }, [e, C]), z = a(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await te(e, t.memberAccounts), await C(), s("risk_control", "unmute", !0, e);
    } catch (n) {
      throw f(n), s("risk_control", "unmute", !1, e), M.error("useRiskControlState", "unmuteMember failed:", n), n;
    } finally {
      d(!1);
    }
  }, [e, C]), G = a(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await re(e, t.memberAccounts, t.duration, t.reason), await k(), s("risk_control", "ban", !0, e);
    } catch (n) {
      f(n), s("risk_control", "ban", !1, e);
    } finally {
      d(!1);
    }
  }, [e, k]), W = a(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ae(e, t.memberAccounts), await k(), s("risk_control", "unban", !0, e);
    } catch (n) {
      f(n), s("risk_control", "unban", !1, e);
    } finally {
      d(!1);
    }
  }, [e, k]), H = a(async () => {
    if (!e) throw new Error("liveId is required");
    try {
      const t = await ne(e, "default", le.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, e), t;
    } catch (t) {
      throw s("risk_control", "violation_warning", !1, e), M.error("useRiskControlState", "sendViolationWarning failed:", t), t;
    }
  }, [e]), Q = a(async (t) => {
    try {
      const n = t.items ?? (() => {
        const J = m;
        return t.ids.map((A) => {
          const N = J.find((X) => X.id === A);
          return {
            id: A,
            content: N?.content ?? A,
            userId: N?.userId ?? ""
          };
        });
      })();
      await de({ ids: t.ids, items: n, liveId: t.liveId ?? e }), s("moderation", "approve", !0, String(t.ids.length));
    } catch (n) {
      throw s("moderation", "approve", !1), M.error("useRiskControlState", "approveTextModerationItems failed:", n), n;
    }
  }, [e, m]), j = a(async (t) => {
    try {
      await fe({ content: t.content, liveId: t.liveId ?? e }), s("moderation", "bypass", !0, String(t.content.length));
    } catch (n) {
      throw s("moderation", "bypass", !1), M.error("useRiskControlState", "bypassCorrectionKeyword failed:", n), n;
    }
  }, [e]);
  return {
    textModerationAvailable: p,
    textModerationRemainUsage: y,
    textModerationList: m,
    textModerationPageNum: P,
    textModerationTotal: _,
    textModerationLoading: D,
    fetchTextModerationUsage: K,
    fetchTextModerationList: V,
    approveTextModerationItems: Q,
    bypassCorrectionKeyword: j,
    muteMember: $,
    unmuteMember: z,
    banMember: G,
    unbanMember: W,
    sendViolationWarning: H,
    mutedList: x,
    bannedList: r,
    memberLoading: g,
    memberError: O,
    fetchMutedList: C,
    fetchBannedList: k
  };
}
F("LiveMonitor");
let u = null, ge = !0, o = null;
const w = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
function he() {
  return o || (o = new se({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: i, pageCursors: e, count: v }) => {
      if (!u)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const h = await ie({
        page: i,
        pageCursors: e,
        pageSize: v
      });
      return {
        list: h.lives,
        pageCursors: h.pageCursors,
        hasMoreData: h.hasMoreData
      };
    }
  }), o.subscribe((i) => {
    w.forEach((e) => e(i));
  }), o.subscribe((i) => {
    u && (u.liveList = [...i.pageData]);
  }), o);
}
function ye(i) {
  return w.add(i), o && i(o.getSnapshot()), () => {
    w.delete(i);
  };
}
function Le() {
  const [i, e] = l([]), [v, p] = l(!0), [h, y] = l(null), b = B(!0);
  u || (u = new oe({
    onStateChange: (r) => {
      U.forEach((c) => c(r));
    },
    getActive: () => ge
  })), he(), q(() => {
    b.current = !0;
    const r = (g) => {
      b.current && (g.liveList !== void 0 && e(g.liveList), g.hasMore !== void 0 && p(g.hasMore), g.currentLive !== void 0 && y(g.currentLive));
    };
    U.add(r);
    const c = (g) => {
      b.current && e([...g.pageData]);
    };
    return w.add(c), o && c(o.getSnapshot()), () => {
      b.current = !1, U.delete(r), w.delete(c);
    };
  }, []);
  const m = a((r) => {
    u?.init(r);
  }, []), L = a(async (r) => {
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
    return o.getSnapshot().pageData;
  }, []), P = a(async (r) => {
    try {
      const c = await u.createLive(r);
      return s("live_crud", "create", !0, c.liveId), c;
    } catch (c) {
      throw s("live_crud", "create", !1), c;
    }
  }, []), I = a(async (r) => {
    try {
      await u.updateLive(r), s("live_crud", "update", !0, r.liveId);
    } catch (c) {
      throw s("live_crud", "update", !1, r.liveId), c;
    }
  }, []), _ = a(async (r) => {
    try {
      await u.endLive(r), s("live_crud", "delete", !0, r);
    } catch (c) {
      throw s("live_crud", "delete", !1, r), c;
    }
  }, []), R = a(async (r) => u.fetchLiveDetail(r), []), D = a(async (r) => u.fetchLiveStats(r), []), T = a((r) => {
    u?.setCurrentLive(r);
  }, []), x = a(async (r) => u.stopPlay(r), []);
  a(() => {
    u?.reset();
  }, []);
  const E = a(async (r) => u.startPlay(r), [x]);
  return {
    init: m,
    liveList: i,
    hasMore: v,
    currentLive: h,
    setCurrentLive: T,
    fetchLiveList: L,
    createLive: P,
    updateLive: I,
    endLive: _,
    fetchLiveDetail: R,
    fetchLiveStats: D,
    startPlay: E,
    stopPlay: x
  };
}
function Pe() {
  const [i, e] = l(
    () => o?.getSnapshot() ?? { pageData: [], currentPage: 1, hasMore: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  q(() => (w.add(e), o && e(o.getSnapshot()), () => {
    w.delete(e);
  }), []);
  const v = a(() => o?.nextPage() ?? Promise.resolve(), []), p = a(() => o?.prevPage() ?? Promise.resolve(), []), h = a(() => o?.goToFirstPage() ?? Promise.resolve(), []), y = a(() => o?.refreshCurrentPage() ?? Promise.resolve(), []), b = a((L, P) => o?.goToPage(L, P) ?? Promise.resolve(), []), m = a(() => o?.getSnapshot() ?? {
    pageData: [],
    currentPage: 1,
    hasMore: !0,
    loading: !1,
    pageCursors: /* @__PURE__ */ new Map([[1, ""]])
  }, []);
  return {
    pageData: i.pageData,
    currentPage: i.currentPage,
    hasMore: i.hasMore,
    loading: i.loading,
    nextPage: v,
    prevPage: p,
    goToFirstPage: h,
    refreshCurrentPage: y,
    goToPage: b,
    getSnapshot: m
  };
}
export {
  Pe as a,
  pe as b,
  ye as s,
  Le as u
};
