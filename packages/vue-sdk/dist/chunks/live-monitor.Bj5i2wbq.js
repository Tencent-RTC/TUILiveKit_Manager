import { useState as l, useRef as O, useEffect as $, useCallback as n } from "react";
import { c0 as B, c1 as oe, c2 as V, aZ as z, aH as ne, aF as ae, m as se, u as ie, c3 as ce, c4 as ue, bL as le, c5 as de, a7 as fe, c6 as ge, ae as me, c7 as he, bz as be, V as ve, U as Me } from "./main-layout.mc55E2SN.js";
import { c as U, n as we, h as s, j as K } from "./logger.h-0kjLdM.js";
import { I as ye } from "./layout.BIfRE2CE.js";
import "tdesign-react";
const v = U("RiskControl");
function Te(i) {
  const { liveId: r, pageSize: M } = i, [h, L] = l("cloud"), [S, b] = l(!0), [w, C] = l([]), [P, E] = l(1), [R, A] = l(0), [D, T] = l(!1), [_, F] = l([]), [o, c] = l([]), [m, d] = l(!1), [W, f] = l(null), y = O(!0);
  $(() => {
    y.current = !0, we("risk_control");
    const e = (t) => {
      const g = t === "cloud";
      (g ? z : V)({ pageSize: 1 }).then(() => {
        K(g ? "text_moderation" : "text_moderation_custom"), K(g ? "moderation" : "moderation_custom");
      }).catch(() => {
      });
    };
    return B().then((t) => {
      y.current && (L(t), e(t), t === "custom" && oe().then((g) => {
        y.current && b(g.Enabled);
      }).catch(() => {
      }));
    }), () => {
      y.current = !1;
    };
  }, []);
  const G = n(async (e = {}) => {
    T(!0);
    try {
      let t;
      return h === "custom" ? t = await V({ pageSize: M, liveId: r, ...e }) : t = await z({ pageSize: M, liveId: r, ...e }), y.current && (C(t.list || []), E(e.pageNum || 1), A(t.total || 0)), t;
    } catch (t) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      y.current && T(!1);
    }
  }, [M, r, h]), k = n(async () => {
    if (!r) return [];
    d(!0), f(null);
    try {
      const e = await ne(r);
      return F(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [r]), I = n(async () => {
    if (!r) return [];
    d(!0), f(null);
    try {
      const e = await ae(r);
      return c(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [r]), H = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await se(r, e.memberAccounts, e.muteTime), await k(), s("risk_control", "mute", !0, r);
    } catch (t) {
      throw f(t), s("risk_control", "mute", !1), v.error("useRiskControlState", "muteMember failed:", t), t;
    } finally {
      d(!1);
    }
  }, [r, k]), j = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ie(r, e.memberAccounts), await k(), s("risk_control", "unmute", !0, r);
    } catch (t) {
      throw f(t), s("risk_control", "unmute", !1), v.error("useRiskControlState", "unmuteMember failed:", t), t;
    } finally {
      d(!1);
    }
  }, [r, k]), Q = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ce(r, e.memberAccounts, e.duration, e.reason), await I(), s("risk_control", "ban", !0, r);
    } catch (t) {
      f(t), s("risk_control", "ban", !1);
    } finally {
      d(!1);
    }
  }, [r, I]), Z = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ue(r, e.memberAccounts), await I(), s("risk_control", "unban", !0, r);
    } catch (t) {
      f(t), s("risk_control", "unban", !1);
    } finally {
      d(!1);
    }
  }, [r, I]), J = n(async () => {
    if (!r) throw new Error("liveId is required");
    try {
      const e = await le(r, "default", ye.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, r), e;
    } catch (e) {
      throw s("risk_control", "violation_warning", !1), v.error("useRiskControlState", "sendViolationWarning failed:", e), e;
    }
  }, [r]), X = n(async (e) => {
    try {
      const t = e.items ?? (() => {
        const g = w;
        return e.ids.map((x) => {
          const q = g.find((re) => re.id === x);
          return {
            id: x,
            content: q?.content ?? x,
            userId: q?.userId ?? ""
          };
        });
      })();
      if (h === "custom") {
        const g = await de({ ids: e.ids, items: t, liveId: e.liveId ?? r });
        s("moderation", "approve", !0, String(g.success)), g.failed > 0 && v.warn("useRiskControlState", `部分放行失败: 成功 ${g.success}, 失败 ${g.failed}`);
      } else
        await fe({ ids: e.ids, items: t, liveId: e.liveId ?? r }), s("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw s("moderation", "approve", !1), v.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, [r, w, h]), Y = n(async (e) => {
    try {
      const t = await ge(e);
      return y.current && b(t.Enabled), s("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw s("moderation", "toggle", !1), v.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, []), ee = n(async (e) => {
    try {
      await me({ content: e.content, liveId: e.liveId ?? r }), s("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw s("moderation", "bypass", !1), v.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, [r]), te = n(async (e) => {
    try {
      await B() === "custom" ? await he(e) : await be(e), s("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw s("moderation", "delete", !1), v.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, []);
  return {
    moderationMode: h,
    customModerationToggleEnabled: S,
    updateCustomModerationToggleEnabled: Y,
    textModerationList: w,
    textModerationPageNum: P,
    textModerationTotal: R,
    textModerationLoading: D,
    fetchTextModerationList: G,
    approveTextModerationItems: X,
    bypassCorrectionKeyword: ee,
    muteMember: H,
    unmuteMember: j,
    banMember: Q,
    unbanMember: Z,
    sendViolationWarning: J,
    deleteModerationItems: te,
    mutedList: _,
    bannedList: o,
    memberLoading: m,
    memberError: W,
    fetchMutedList: k,
    fetchBannedList: I
  };
}
U("LiveMonitor");
let u = null, pe = !0, a = null;
const p = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
function Le() {
  return a || (a = new Me({
    pageSize: 8
  }), a.subscribe(() => {
    const i = a.getSnapshot();
    p.forEach((r) => r(i));
  }), a.subscribe(() => {
    if (u) {
      const i = a.getSnapshot();
      u.liveList = [...i.list];
    }
  }), a);
}
function _e(i) {
  return p.add(i), a && i(a.getSnapshot()), () => {
    p.delete(i);
  };
}
function xe() {
  const [i, r] = l([]), [M, h] = l(!0), [L, S] = l(null), b = O(!0);
  u || (u = new ve({
    onStateChange: (o) => {
      N.forEach((c) => c(o));
    },
    getActive: () => pe
  })), Le(), $(() => {
    b.current = !0;
    const o = (m) => {
      b.current && (m.liveList !== void 0 && r(m.liveList), m.hasMore !== void 0 && h(m.hasMore), m.currentLive !== void 0 && S(m.currentLive));
    };
    N.add(o);
    const c = (m) => {
      b.current && r([...m.list]);
    };
    return p.add(c), a && c(a.getSnapshot()), () => {
      b.current = !1, N.delete(o), p.delete(c);
    };
  }, []);
  const w = n((o) => {
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
  }, []), P = n(async (o) => {
    try {
      const c = await u.createLive(o);
      return s("live_crud", "create", !0, c.liveId), c;
    } catch (c) {
      throw s("live_crud", "create", !1), c;
    }
  }, []), E = n(async (o) => {
    try {
      await u.updateLive(o), s("live_crud", "update", !0, o.liveId);
    } catch (c) {
      throw s("live_crud", "update", !1, o.liveId), c;
    }
  }, []), R = n(async (o) => {
    try {
      await u.endLive(o), s("live_crud", "delete", !0, o);
    } catch (c) {
      throw s("live_crud", "delete", !1), c;
    }
  }, []), A = n(async (o) => u.fetchLiveDetail(o), []), D = n(async (o) => u.fetchLiveStats(o), []), T = n((o) => {
    u?.setCurrentLive(o);
  }, []), _ = n(async (o) => u.stopPlay(o), []);
  n(() => {
    u?.reset();
  }, []);
  const F = n(async (o) => u.startPlay(o), [_]);
  return {
    init: w,
    liveList: i,
    hasMore: M,
    currentLive: L,
    setCurrentLive: T,
    fetchLiveList: C,
    createLive: P,
    updateLive: E,
    endLive: R,
    fetchLiveDetail: A,
    fetchLiveStats: D,
    startPlay: F,
    stopPlay: _
  };
}
function Ee() {
  const [i, r] = l(
    () => a?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  $(() => (p.add(r), a && r(a.getSnapshot()), () => {
    p.delete(r);
  }), []);
  const M = n(() => a?.nextPage() ?? Promise.resolve(), []), h = n(() => a?.prevPage() ?? Promise.resolve(), []), L = n(() => a?.goToFirstPage() ?? Promise.resolve(), []), S = n(() => a?.refresh() ?? Promise.resolve(), []), b = n((C, P) => a?.goToPage(C, P) ?? Promise.resolve(), []), w = n(() => a?.getSnapshot() ?? {
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
    nextPage: M,
    prevPage: h,
    goToFirstPage: L,
    refreshCurrentPage: S,
    goToPage: b,
    getSnapshot: w
  };
}
export {
  Ee as a,
  Te as b,
  _e as s,
  xe as u
};
