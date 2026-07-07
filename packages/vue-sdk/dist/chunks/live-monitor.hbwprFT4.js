import { useState as l, useRef as U, useEffect as $, useCallback as n } from "react";
import { c0 as B, aZ as V, c1 as K, c2 as ae, aH as se, aF as ie, m as ce, u as le, c3 as ue, c4 as de, bL as fe, c5 as ge, a7 as me, c6 as he, ae as be, c7 as ve, bz as Me, V as we, U as ye } from "./main-layout.DNtgEqmy.js";
import { c as z, n as pe, j as O, h as s, k as Le } from "./logger.CjN8f6V1.js";
import { I as Se } from "./layout.CpAnx6QV.js";
import "tdesign-react";
const b = z("RiskControl");
function Ee(i) {
  const { liveId: t, pageSize: v } = i, [P, S] = l(!1), [m, M] = l("cloud"), [k, C] = l(!0), [p, _] = l([]), [A, D] = l(1), [F, x] = l(0), [E, R] = l(!1), [o, c] = l([]), [g, W] = l([]), [G, d] = l(!1), [H, f] = l(null), h = U(!0);
  $(() => (h.current = !0, pe("risk_control"), B().then(async (e) => {
    if (!h.current) return;
    M(e);
    const r = e === "cloud", w = r ? V : K;
    try {
      const y = await w({ pageSize: v, liveId: t });
      h.current && (S(!0), _(y.list || []), x(y.total || 0)), O(r ? "text_moderation" : "text_moderation_custom"), O(r ? "moderation" : "moderation_custom");
    } catch {
      h.current && S(!1);
    }
    e === "custom" && ae().then((y) => {
      h.current && C(y.Enabled);
    }).catch(() => {
    });
  }), () => {
    h.current = !1;
  }), []);
  const j = n(async (e = {}) => {
    R(!0);
    try {
      let r;
      return m === "custom" ? r = await K({ pageSize: v, liveId: t, ...e }) : r = await V({ pageSize: v, liveId: t, ...e }), h.current && (_(r.list || []), D(e.pageNum || 1), x(r.total || 0)), r;
    } catch (r) {
      throw b.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      h.current && R(!1);
    }
  }, [v, t, m]), I = n(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await se(t);
      return c(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), T = n(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await ie(t);
      return W(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), Q = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ce(t, e.memberAccounts, e.muteTime), await I(), s("risk_control", "mute", !0, t);
    } catch (r) {
      throw f(r), s("risk_control", "mute", !1), b.error("useRiskControlState", "muteMember failed:", r), r;
    } finally {
      d(!1);
    }
  }, [t, I]), Z = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await le(t, e.memberAccounts), await I(), s("risk_control", "unmute", !0, t);
    } catch (r) {
      throw f(r), s("risk_control", "unmute", !1), b.error("useRiskControlState", "unmuteMember failed:", r), r;
    } finally {
      d(!1);
    }
  }, [t, I]), J = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ue(t, e.memberAccounts, e.duration, e.reason), await T(), s("risk_control", "ban", !0, t);
    } catch (r) {
      f(r), s("risk_control", "ban", !1);
    } finally {
      d(!1);
    }
  }, [t, T]), X = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await de(t, e.memberAccounts), await T(), s("risk_control", "unban", !0, t);
    } catch (r) {
      f(r), s("risk_control", "unban", !1);
    } finally {
      d(!1);
    }
  }, [t, T]), Y = n(async () => {
    if (!t) throw new Error("liveId is required");
    try {
      const e = await fe(t, "default", Se.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, t), e;
    } catch (e) {
      throw s("risk_control", "violation_warning", !1), b.error("useRiskControlState", "sendViolationWarning failed:", e), e;
    }
  }, [t]), ee = n(async (e) => {
    try {
      const r = e.items ?? (() => {
        const w = p;
        return e.ids.map((y) => {
          const q = w.find((ne) => ne.id === y);
          return {
            id: y,
            content: q?.content ?? y,
            userId: q?.userId ?? ""
          };
        });
      })();
      if (m === "custom") {
        const w = await ge({ ids: e.ids, items: r, liveId: e.liveId ?? t });
        s("moderation", "approve", !0, String(w.success)), w.failed > 0 && b.warn("useRiskControlState", `部分放行失败: 成功 ${w.success}, 失败 ${w.failed}`);
      } else
        await me({ ids: e.ids, items: r, liveId: e.liveId ?? t }), s("moderation", "approve", !0, String(e.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), b.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [t, p, m]), te = n(async (e) => {
    try {
      const r = await he(e);
      return h.current && C(r.Enabled), s("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw s("moderation", "toggle", !1), b.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), re = n(async (e) => {
    try {
      await be({ content: e.content, liveId: e.liveId ?? t }), s("moderation", "bypass", !0, String(e.content.length));
    } catch (r) {
      throw s("moderation", "bypass", !1), b.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [t]), oe = n(async (e) => {
    try {
      await B() === "custom" ? await ve(e) : await Me(e), s("moderation", "delete", !0, String(e.length));
    } catch (r) {
      throw s("moderation", "delete", !1), b.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    textModerationAvailable: P,
    moderationMode: m,
    customModerationToggleEnabled: k,
    updateCustomModerationToggleEnabled: te,
    textModerationList: p,
    textModerationPageNum: A,
    textModerationTotal: F,
    textModerationLoading: E,
    fetchTextModerationList: j,
    approveTextModerationItems: ee,
    bypassCorrectionKeyword: re,
    muteMember: Q,
    unmuteMember: Z,
    banMember: J,
    unbanMember: X,
    sendViolationWarning: Y,
    deleteModerationItems: oe,
    mutedList: o,
    bannedList: g,
    memberLoading: G,
    memberError: H,
    fetchMutedList: I,
    fetchBannedList: T
  };
}
z("LiveMonitor");
let u = null, Ce = !0, a = null;
const L = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
function Pe() {
  return a || (a = new ye({
    pageSize: 8
  }), a.subscribe(() => {
    const i = a.getSnapshot();
    L.forEach((t) => t(i));
  }), a.subscribe(() => {
    if (u) {
      const i = a.getSnapshot();
      u.liveList = [...i.list];
    }
  }), a);
}
function Re(i) {
  return L.add(i), a && i(a.getSnapshot()), () => {
    L.delete(i);
  };
}
function Ae() {
  const [i, t] = l([]), [v, P] = l(!0), [S, m] = l(null), M = U(!0);
  u || (u = new we({
    onStateChange: (o) => {
      N.forEach((c) => c(o));
    },
    getActive: () => Ce
  })), Pe(), $(() => {
    M.current = !0;
    const o = (g) => {
      M.current && (g.liveList !== void 0 && t(g.liveList), g.hasMore !== void 0 && P(g.hasMore), g.currentLive !== void 0 && m(g.currentLive));
    };
    N.add(o);
    const c = (g) => {
      M.current && t([...g.list]);
    };
    return L.add(c), a && c(a.getSnapshot()), () => {
      M.current = !1, N.delete(o), L.delete(c);
    };
  }, []);
  const k = n((o) => {
    u?.init(o);
  }, []), C = n(async (o) => {
    if (!a) return [];
    switch (o?.action) {
      case "first":
        await a.goToFirstPage();
        break;
      case "prev":
        await a.prevPage();
        break;
      default:
        await a.nextPage();
        break;
    }
    return a.getSnapshot().list;
  }, []), p = n(async (o) => {
    try {
      const c = await u.createLive(o);
      return s("live_crud", "create", !0, c.liveId), c;
    } catch (c) {
      throw s("live_crud", "create", !1), c;
    }
  }, []), _ = n(async (o) => {
    try {
      await u.updateLive(o), s("live_crud", "update", !0, o.liveId);
    } catch (c) {
      throw s("live_crud", "update", !1, o.liveId), c;
    }
  }, []), A = n(async (o) => {
    try {
      await u.endLive(o), s("live_crud", "delete", !0, o), Le("force_stop");
    } catch (c) {
      throw s("live_crud", "delete", !1), c;
    }
  }, []), D = n(async (o) => u.fetchLiveDetail(o), []), F = n(async (o) => u.fetchLiveStats(o), []), x = n((o) => {
    u?.setCurrentLive(o);
  }, []), E = n(async (o) => u.stopPlay(o), []);
  n(() => {
    u?.reset();
  }, []);
  const R = n(async (o) => u.startPlay(o), [E]);
  return {
    init: k,
    liveList: i,
    hasMore: v,
    currentLive: S,
    setCurrentLive: x,
    fetchLiveList: C,
    createLive: p,
    updateLive: _,
    endLive: A,
    fetchLiveDetail: D,
    fetchLiveStats: F,
    startPlay: R,
    stopPlay: E
  };
}
function De() {
  const [i, t] = l(
    () => a?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  $(() => (L.add(t), a && t(a.getSnapshot()), () => {
    L.delete(t);
  }), []);
  const v = n(() => a?.nextPage() ?? Promise.resolve(), []), P = n(() => a?.prevPage() ?? Promise.resolve(), []), S = n(() => a?.goToFirstPage() ?? Promise.resolve(), []), m = n(() => a?.refresh() ?? Promise.resolve(), []), M = n((C, p) => a?.goToPage(C, p) ?? Promise.resolve(), []), k = n(() => a?.getSnapshot() ?? {
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
    nextPage: v,
    prevPage: P,
    goToFirstPage: S,
    refreshCurrentPage: m,
    goToPage: M,
    getSnapshot: k
  };
}
export {
  De as a,
  Ee as b,
  Re as s,
  Ae as u
};
