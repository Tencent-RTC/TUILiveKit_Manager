import { useState as u, useRef as O, useEffect as K, useCallback as n } from "react";
import { av as se, at as ie, m as ce, u as ue, bJ as le, bK as de, bs as fe, R as ge, Q as he } from "./main-layout.CIXEryLk.js";
import { c as V, n as me, h as s, j as q } from "./logger.S-YFOdFg.js";
import { aK as be, aL as ve, W as Me, aM as B, aw as F, S as we, aN as ye, ad as pe, aO as Le, ae as Se } from "./layout.BnSS-XVq.js";
import "tdesign-react";
const b = V("RiskControl");
function Ee(c) {
  const { liveId: t, pageSize: w } = c, [m, p] = u("cloud"), [L, v] = u(!1), [S, C] = u(0), [P, I] = u(!0), [T, R] = u([]), [A, U] = u(1), [_, D] = u(0), [o, i] = u(!1), [h, W] = u([]), [z, G] = u([]), [Q, d] = u(!1), [j, f] = u(null), M = O(!0);
  K(() => {
    M.current = !0, me("risk_control");
    const e = (r) => {
      const g = r === "cloud";
      (g ? F : B)({ pageSize: 1 }).then(() => {
        q(g ? "text_moderation" : "text_moderation_custom"), q(g ? "moderation" : "moderation_custom");
      }).catch(() => {
      });
    };
    return be().then((r) => {
      M.current && (p(r), e(r), r === "custom" && ve().then((g) => {
        M.current && I(g.Enabled);
      }).catch(() => {
      }));
    }), () => {
      M.current = !1;
    };
  }, []);
  const H = n(async () => {
    try {
      const e = await Me();
      return M.current && (v(e > 0), C(e)), e;
    } catch (e) {
      throw b.error("useRiskControlState", "fetchTextModerationUsage failed:", e), e;
    }
  }, []), J = n(async (e = {}) => {
    i(!0);
    try {
      let r;
      return m === "custom" ? r = await B({ pageSize: w, liveId: t, ...e }) : r = await F({ pageSize: w, liveId: t, ...e }), M.current && (R(r.list || []), U(e.pageNum || 1), D(r.total || 0)), r;
    } catch (r) {
      throw b.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      M.current && i(!1);
    }
  }, [w, t, m]), k = n(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await se(t);
      return W(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), x = n(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await ie(t);
      return G(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), X = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ce(t, e.memberAccounts, e.muteTime), await k(), s("risk_control", "mute", !0, t);
    } catch (r) {
      throw f(r), s("risk_control", "mute", !1, t), b.error("useRiskControlState", "muteMember failed:", r), r;
    } finally {
      d(!1);
    }
  }, [t, k]), Y = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ue(t, e.memberAccounts), await k(), s("risk_control", "unmute", !0, t);
    } catch (r) {
      throw f(r), s("risk_control", "unmute", !1, t), b.error("useRiskControlState", "unmuteMember failed:", r), r;
    } finally {
      d(!1);
    }
  }, [t, k]), Z = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await le(t, e.memberAccounts, e.duration, e.reason), await x(), s("risk_control", "ban", !0, t);
    } catch (r) {
      f(r), s("risk_control", "ban", !1, t);
    } finally {
      d(!1);
    }
  }, [t, x]), ee = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await de(t, e.memberAccounts), await x(), s("risk_control", "unban", !0, t);
    } catch (r) {
      f(r), s("risk_control", "unban", !1, t);
    } finally {
      d(!1);
    }
  }, [t, x]), te = n(async () => {
    if (!t) throw new Error("liveId is required");
    try {
      const e = await fe(t, "default", we.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, t), e;
    } catch (e) {
      throw s("risk_control", "violation_warning", !1, t), b.error("useRiskControlState", "sendViolationWarning failed:", e), e;
    }
  }, [t]), re = n(async (e) => {
    try {
      const r = e.items ?? (() => {
        const g = T;
        return e.ids.map((E) => {
          const $ = g.find((ae) => ae.id === E);
          return {
            id: E,
            content: $?.content ?? E,
            userId: $?.userId ?? ""
          };
        });
      })();
      if (m === "custom") {
        const g = await ye({ ids: e.ids, items: r, liveId: e.liveId ?? t });
        s("moderation", "approve", !0, String(g.success)), g.failed > 0 && b.warn("useRiskControlState", `部分放行失败: 成功 ${g.success}, 失败 ${g.failed}`);
      } else
        await pe({ ids: e.ids, items: r, liveId: e.liveId ?? t }), s("moderation", "approve", !0, String(e.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), b.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [t, T, m]), oe = n(async (e) => {
    try {
      const r = await Le(e);
      return M.current && I(r.Enabled), s("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw s("moderation", "toggle", !1), b.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), ne = n(async (e) => {
    try {
      await Se({ content: e.content, liveId: e.liveId ?? t }), s("moderation", "bypass", !0, String(e.content.length));
    } catch (r) {
      throw s("moderation", "bypass", !1), b.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [t]);
  return {
    moderationMode: m,
    textModerationAvailable: L,
    textModerationRemainUsage: S,
    customModerationToggleEnabled: P,
    updateCustomModerationToggleEnabled: oe,
    textModerationList: T,
    textModerationPageNum: A,
    textModerationTotal: _,
    textModerationLoading: o,
    fetchTextModerationUsage: H,
    fetchTextModerationList: J,
    approveTextModerationItems: re,
    bypassCorrectionKeyword: ne,
    muteMember: X,
    unmuteMember: Y,
    banMember: Z,
    unbanMember: ee,
    sendViolationWarning: te,
    mutedList: h,
    bannedList: z,
    memberLoading: Q,
    memberError: j,
    fetchMutedList: k,
    fetchBannedList: x
  };
}
V("LiveMonitor");
let l = null, Ce = !0, a = null;
const y = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
function Pe() {
  return a || (a = new he({
    pageSize: 8
  }), a.subscribe(() => {
    const c = a.getSnapshot();
    y.forEach((t) => t(c));
  }), a.subscribe(() => {
    if (l) {
      const c = a.getSnapshot();
      l.liveList = [...c.list];
    }
  }), a);
}
function Re(c) {
  return y.add(c), a && c(a.getSnapshot()), () => {
    y.delete(c);
  };
}
function Ae() {
  const [c, t] = u([]), [w, m] = u(!0), [p, L] = u(null), v = O(!0);
  l || (l = new ge({
    onStateChange: (o) => {
      N.forEach((i) => i(o));
    },
    getActive: () => Ce
  })), Pe(), K(() => {
    v.current = !0;
    const o = (h) => {
      v.current && (h.liveList !== void 0 && t(h.liveList), h.hasMore !== void 0 && m(h.hasMore), h.currentLive !== void 0 && L(h.currentLive));
    };
    N.add(o);
    const i = (h) => {
      v.current && t([...h.list]);
    };
    return y.add(i), a && i(a.getSnapshot()), () => {
      v.current = !1, N.delete(o), y.delete(i);
    };
  }, []);
  const S = n((o) => {
    l?.init(o);
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
  }, []), P = n(async (o) => {
    try {
      const i = await l.createLive(o);
      return s("live_crud", "create", !0, i.liveId), i;
    } catch (i) {
      throw s("live_crud", "create", !1), i;
    }
  }, []), I = n(async (o) => {
    try {
      await l.updateLive(o), s("live_crud", "update", !0, o.liveId);
    } catch (i) {
      throw s("live_crud", "update", !1, o.liveId), i;
    }
  }, []), T = n(async (o) => {
    try {
      await l.endLive(o), s("live_crud", "delete", !0, o);
    } catch (i) {
      throw s("live_crud", "delete", !1, o), i;
    }
  }, []), R = n(async (o) => l.fetchLiveDetail(o), []), A = n(async (o) => l.fetchLiveStats(o), []), U = n((o) => {
    l?.setCurrentLive(o);
  }, []), _ = n(async (o) => l.stopPlay(o), []);
  n(() => {
    l?.reset();
  }, []);
  const D = n(async (o) => l.startPlay(o), [_]);
  return {
    init: S,
    liveList: c,
    hasMore: w,
    currentLive: p,
    setCurrentLive: U,
    fetchLiveList: C,
    createLive: P,
    updateLive: I,
    endLive: T,
    fetchLiveDetail: R,
    fetchLiveStats: A,
    startPlay: D,
    stopPlay: _
  };
}
function Ue() {
  const [c, t] = u(
    () => a?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  K(() => (y.add(t), a && t(a.getSnapshot()), () => {
    y.delete(t);
  }), []);
  const w = n(() => a?.nextPage() ?? Promise.resolve(), []), m = n(() => a?.prevPage() ?? Promise.resolve(), []), p = n(() => a?.goToFirstPage() ?? Promise.resolve(), []), L = n(() => a?.refresh() ?? Promise.resolve(), []), v = n((C, P) => a?.goToPage(C, P) ?? Promise.resolve(), []), S = n(() => a?.getSnapshot() ?? {
    list: [],
    currentPage: 1,
    hasMoreData: !0,
    loading: !1,
    pageCursors: /* @__PURE__ */ new Map([[1, ""]])
  }, []);
  return {
    pageData: c.list,
    currentPage: c.currentPage,
    hasMore: c.hasMoreData,
    loading: c.loading,
    nextPage: w,
    prevPage: m,
    goToFirstPage: p,
    refreshCurrentPage: L,
    goToPage: v,
    getSnapshot: S
  };
}
export {
  Ue as a,
  Ee as b,
  Re as s,
  Ae as u
};
