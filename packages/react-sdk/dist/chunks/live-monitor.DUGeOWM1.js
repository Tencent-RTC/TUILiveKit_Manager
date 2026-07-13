import { useState as l, useRef as $, useEffect as F, useCallback as n } from "react";
import { ai as Y, ag as Z, m as ee, u as te, bD as re, bC as ae, bl as ne, I as oe, bE as se, ah as ie } from "./main-layout.0SrlHtaV.js";
import { c as q, r as s } from "./logger.DfjyL4S7.js";
import { al as ce, ai as ue, P as le, _ as de, $ as fe } from "./en-US.Cyn41QJd.js";
import "tdesign-react";
const b = q("RiskControl");
function Le(i) {
  const { liveId: e, pageSize: v } = i, [M, h] = l(!1), [y, w] = l(0), [L, T] = l([]), [x, I] = l(1), [_, R] = l(0), [D, C] = l(!1), [k, E] = l([]), [r, c] = l([]), [g, d] = l(!1), [B, f] = l(null), p = $(!0);
  F(() => (p.current = !0, () => {
    p.current = !1;
  }), []);
  const K = n(async () => {
    try {
      const t = await ce();
      return p.current && (h(t > 0), w(t)), t;
    } catch (t) {
      throw b.error("useRiskControlState", "fetchTextModerationUsage failed:", t), t;
    }
  }, []), O = n(async (t = {}) => {
    C(!0);
    try {
      const a = await ue({ pageSize: v, liveId: e, ...t });
      return p.current && (T(a.list || []), I(t.pageNum || 1), R(a.total || 0)), a;
    } catch (a) {
      throw b.error("useRiskControlState", "fetchTextModerationList failed:", a), a;
    } finally {
      p.current && C(!1);
    }
  }, [v, e]), S = n(async () => {
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
  }, [e]), P = n(async () => {
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
  }, [e]), V = n(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ee(e, t.memberAccounts, t.muteTime), await S(), s("risk_control", "mute", !0, e);
    } catch (a) {
      throw f(a), s("risk_control", "mute", !1, e), b.error("useRiskControlState", "muteMember failed:", a), a;
    } finally {
      d(!1);
    }
  }, [e, S]), z = n(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await te(e, t.memberAccounts), await S(), s("risk_control", "unmute", !0, e);
    } catch (a) {
      throw f(a), s("risk_control", "unmute", !1, e), b.error("useRiskControlState", "unmuteMember failed:", a), a;
    } finally {
      d(!1);
    }
  }, [e, S]), W = n(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await re(e, t.memberAccounts, t.duration, t.reason), await P(), s("risk_control", "ban", !0, e);
    } catch (a) {
      f(a), s("risk_control", "ban", !1, e);
    } finally {
      d(!1);
    }
  }, [e, P]), G = n(async (t) => {
    if (!e) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ae(e, t.memberAccounts), await P(), s("risk_control", "unban", !0, e);
    } catch (a) {
      f(a), s("risk_control", "unban", !1, e);
    } finally {
      d(!1);
    }
  }, [e, P]), H = n(async () => {
    if (!e) throw new Error("liveId is required");
    try {
      const t = await ne(e, "default", le.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, e), t;
    } catch (t) {
      throw s("risk_control", "violation_warning", !1, e), b.error("useRiskControlState", "sendViolationWarning failed:", t), t;
    }
  }, [e]), Q = n(async (t) => {
    try {
      const a = t.items ?? (() => {
        const J = L;
        return t.ids.map((A) => {
          const N = J.find((X) => X.id === A);
          return {
            id: A,
            content: N?.content ?? A,
            userId: N?.userId ?? ""
          };
        });
      })();
      await de({ ids: t.ids, items: a, liveId: t.liveId ?? e }), s("moderation", "approve", !0, String(t.ids.length));
    } catch (a) {
      throw s("moderation", "approve", !1), b.error("useRiskControlState", "approveTextModerationItems failed:", a), a;
    }
  }, [e, L]), j = n(async (t) => {
    try {
      await fe({ content: t.content, liveId: t.liveId ?? e }), s("moderation", "bypass", !0, String(t.content.length));
    } catch (a) {
      throw s("moderation", "bypass", !1), b.error("useRiskControlState", "bypassCorrectionKeyword failed:", a), a;
    }
  }, [e]);
  return {
    textModerationAvailable: M,
    textModerationRemainUsage: y,
    textModerationList: L,
    textModerationPageNum: x,
    textModerationTotal: _,
    textModerationLoading: D,
    fetchTextModerationUsage: K,
    fetchTextModerationList: O,
    approveTextModerationItems: Q,
    bypassCorrectionKeyword: j,
    muteMember: V,
    unmuteMember: z,
    banMember: W,
    unbanMember: G,
    sendViolationWarning: H,
    mutedList: k,
    bannedList: r,
    memberLoading: g,
    memberError: B,
    fetchMutedList: S,
    fetchBannedList: P
  };
}
const ge = q("LiveMonitor");
let u = null, he = !0, o = null;
const m = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
function ve() {
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
    m.forEach((e) => e(i));
  }), o.subscribe((i) => {
    u && (u.liveList = [...i.pageData]);
  }), o);
}
function pe(i) {
  return m.add(i), o && i(o.getSnapshot()), () => {
    m.delete(i);
  };
}
function Se() {
  const [i, e] = l([]), [v, M] = l(!0), [h, y] = l(null), w = $(!0);
  u || (u = new oe({
    onStateChange: (r) => {
      U.forEach((c) => c(r));
    },
    getActive: () => he
  })), ve(), F(() => {
    w.current = !0;
    const r = (g) => {
      w.current && (g.liveList !== void 0 && e(g.liveList), g.hasMore !== void 0 && M(g.hasMore), g.currentLive !== void 0 && y(g.currentLive));
    };
    U.add(r);
    const c = (g) => {
      w.current && e([...g.pageData]);
    };
    return m.add(c), o && c(o.getSnapshot()), () => {
      w.current = !1, U.delete(r), m.delete(c);
    };
  }, []);
  const L = n((r) => {
    u?.init(r), o?.goToFirstPage().catch((c) => {
      ge.error("useLiveMonitorState", "Failed to load first page:", c);
    });
  }, []), T = n(async (r) => {
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
  }, []), x = n(async (r) => {
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
  }, []), R = n(async (r) => u.fetchLiveDetail(r), []), D = n(async (r) => u.fetchLiveStats(r), []), C = n((r) => {
    u?.setCurrentLive(r);
  }, []), k = n(async (r) => u.stopPlay(r), []);
  n(() => {
    u?.reset();
  }, []);
  const E = n(async (r) => u.startPlay(r), [k]);
  return {
    init: L,
    liveList: i,
    hasMore: v,
    currentLive: h,
    setCurrentLive: C,
    fetchLiveList: T,
    createLive: x,
    updateLive: I,
    endLive: _,
    fetchLiveDetail: R,
    fetchLiveStats: D,
    startPlay: E,
    stopPlay: k
  };
}
function Pe() {
  const [i, e] = l(
    () => o?.getSnapshot() ?? { pageData: [], currentPage: 1, hasMore: !0, loading: !1 }
  );
  F(() => (m.add(e), o && e(o.getSnapshot()), () => {
    m.delete(e);
  }), []);
  const v = n(() => o?.nextPage() ?? Promise.resolve(), []), M = n(() => o?.prevPage() ?? Promise.resolve(), []), h = n(() => o?.goToFirstPage() ?? Promise.resolve(), []), y = n(() => o?.refreshCurrentPage() ?? Promise.resolve(), []);
  return {
    pageData: i.pageData,
    currentPage: i.currentPage,
    hasMore: i.hasMore,
    loading: i.loading,
    nextPage: v,
    prevPage: M,
    goToFirstPage: h,
    refreshCurrentPage: y
  };
}
export {
  Pe as a,
  Le as b,
  pe as s,
  Se as u
};
