import { useState as u, useRef as K, useEffect as $, useCallback as a } from "react";
import { au as ce, as as ue, m as le, u as de, bI as fe, bJ as ge, br as me, R as he, Q as be } from "./main-layout.DLWT3EVA.js";
import { c as V, n as Me, h as s, j as B } from "./logger.D3BLOWQd.js";
import { aM as F, aN as ve, Y as we, aO as O, az as z, I as ye, aP as pe, ag as Le, aQ as Se, ah as Ce, aR as Pe, aH as Te } from "./layout.B11gjrzt.js";
import "tdesign-react";
const h = V("RiskControl");
function De(c) {
  const { liveId: t, pageSize: w } = c, [b, p] = u("cloud"), [L, M] = u(!1), [S, C] = u(0), [P, x] = u(!0), [T, E] = u([]), [A, D] = u(1), [_, U] = u(0), [o, i] = u(!1), [m, Q] = u([]), [W, G] = u([]), [H, d] = u(!1), [j, f] = u(null), v = K(!0);
  $(() => {
    v.current = !0, Me("risk_control");
    const e = (r) => {
      const g = r === "cloud";
      (g ? z : O)({ pageSize: 1 }).then(() => {
        B(g ? "text_moderation" : "text_moderation_custom"), B(g ? "moderation" : "moderation_custom");
      }).catch(() => {
      });
    };
    return F().then((r) => {
      v.current && (p(r), e(r), r === "custom" && ve().then((g) => {
        v.current && x(g.Enabled);
      }).catch(() => {
      }));
    }), () => {
      v.current = !1;
    };
  }, []);
  const J = a(async () => {
    try {
      const e = await we();
      return v.current && (M(e > 0), C(e)), e;
    } catch (e) {
      throw h.error("useRiskControlState", "fetchTextModerationUsage failed:", e), e;
    }
  }, []), Y = a(async (e = {}) => {
    i(!0);
    try {
      let r;
      return b === "custom" ? r = await O({ pageSize: w, liveId: t, ...e }) : r = await z({ pageSize: w, liveId: t, ...e }), v.current && (E(r.list || []), D(e.pageNum || 1), U(r.total || 0)), r;
    } catch (r) {
      throw h.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      v.current && i(!1);
    }
  }, [w, t, b]), k = a(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await ce(t);
      return Q(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), I = a(async () => {
    if (!t) return [];
    d(!0), f(null);
    try {
      const e = await ue(t);
      return G(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [t]), X = a(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await le(t, e.memberAccounts, e.muteTime), await k(), s("risk_control", "mute", !0, t);
    } catch (r) {
      throw f(r), s("risk_control", "mute", !1, t), h.error("useRiskControlState", "muteMember failed:", r), r;
    } finally {
      d(!1);
    }
  }, [t, k]), Z = a(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await de(t, e.memberAccounts), await k(), s("risk_control", "unmute", !0, t);
    } catch (r) {
      throw f(r), s("risk_control", "unmute", !1, t), h.error("useRiskControlState", "unmuteMember failed:", r), r;
    } finally {
      d(!1);
    }
  }, [t, k]), ee = a(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await fe(t, e.memberAccounts, e.duration, e.reason), await I(), s("risk_control", "ban", !0, t);
    } catch (r) {
      f(r), s("risk_control", "ban", !1, t);
    } finally {
      d(!1);
    }
  }, [t, I]), te = a(async (e) => {
    if (!t) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ge(t, e.memberAccounts), await I(), s("risk_control", "unban", !0, t);
    } catch (r) {
      f(r), s("risk_control", "unban", !1, t);
    } finally {
      d(!1);
    }
  }, [t, I]), re = a(async () => {
    if (!t) throw new Error("liveId is required");
    try {
      const e = await me(t, "default", ye.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, t), e;
    } catch (e) {
      throw s("risk_control", "violation_warning", !1, t), h.error("useRiskControlState", "sendViolationWarning failed:", e), e;
    }
  }, [t]), oe = a(async (e) => {
    try {
      const r = e.items ?? (() => {
        const g = T;
        return e.ids.map((R) => {
          const q = g.find((ie) => ie.id === R);
          return {
            id: R,
            content: q?.content ?? R,
            userId: q?.userId ?? ""
          };
        });
      })();
      if (b === "custom") {
        const g = await pe({ ids: e.ids, items: r, liveId: e.liveId ?? t });
        s("moderation", "approve", !0, String(g.success)), g.failed > 0 && h.warn("useRiskControlState", `部分放行失败: 成功 ${g.success}, 失败 ${g.failed}`);
      } else
        await Le({ ids: e.ids, items: r, liveId: e.liveId ?? t }), s("moderation", "approve", !0, String(e.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), h.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, [t, T, b]), ae = a(async (e) => {
    try {
      const r = await Se(e);
      return v.current && x(r.Enabled), s("moderation", "toggle", !0), r.Enabled;
    } catch (r) {
      throw s("moderation", "toggle", !1), h.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", r), r;
    }
  }, []), ne = a(async (e) => {
    try {
      await Ce({ content: e.content, liveId: e.liveId ?? t }), s("moderation", "bypass", !0, String(e.content.length));
    } catch (r) {
      throw s("moderation", "bypass", !1), h.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, [t]), se = a(async (e) => {
    try {
      await F() === "custom" ? await Pe(e) : await Te(e), s("moderation", "delete", !0, String(e.length));
    } catch (r) {
      throw s("moderation", "delete", !1), h.error("useRiskControlState", "deleteModerationItems failed:", r), r;
    }
  }, []);
  return {
    moderationMode: b,
    textModerationAvailable: L,
    textModerationRemainUsage: S,
    customModerationToggleEnabled: P,
    updateCustomModerationToggleEnabled: ae,
    textModerationList: T,
    textModerationPageNum: A,
    textModerationTotal: _,
    textModerationLoading: o,
    fetchTextModerationUsage: J,
    fetchTextModerationList: Y,
    approveTextModerationItems: oe,
    bypassCorrectionKeyword: ne,
    muteMember: X,
    unmuteMember: Z,
    banMember: ee,
    unbanMember: te,
    sendViolationWarning: re,
    deleteModerationItems: se,
    mutedList: m,
    bannedList: W,
    memberLoading: H,
    memberError: j,
    fetchMutedList: k,
    fetchBannedList: I
  };
}
V("LiveMonitor");
let l = null, ke = !0, n = null;
const y = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
function Ie() {
  return n || (n = new be({
    pageSize: 8
  }), n.subscribe(() => {
    const c = n.getSnapshot();
    y.forEach((t) => t(c));
  }), n.subscribe(() => {
    if (l) {
      const c = n.getSnapshot();
      l.liveList = [...c.list];
    }
  }), n);
}
function Ue(c) {
  return y.add(c), n && c(n.getSnapshot()), () => {
    y.delete(c);
  };
}
function Ne() {
  const [c, t] = u([]), [w, b] = u(!0), [p, L] = u(null), M = K(!0);
  l || (l = new he({
    onStateChange: (o) => {
      N.forEach((i) => i(o));
    },
    getActive: () => ke
  })), Ie(), $(() => {
    M.current = !0;
    const o = (m) => {
      M.current && (m.liveList !== void 0 && t(m.liveList), m.hasMore !== void 0 && b(m.hasMore), m.currentLive !== void 0 && L(m.currentLive));
    };
    N.add(o);
    const i = (m) => {
      M.current && t([...m.list]);
    };
    return y.add(i), n && i(n.getSnapshot()), () => {
      M.current = !1, N.delete(o), y.delete(i);
    };
  }, []);
  const S = a((o) => {
    l?.init(o);
  }, []), C = a(async (o) => {
    if (!n) return [];
    switch (o?.action) {
      case "first":
        await n.goToFirstPage();
        break;
      case "prev":
        await n.prevPage();
        break;
      default:
        await n.nextPage();
        break;
    }
    return n.getSnapshot().list;
  }, []), P = a(async (o) => {
    try {
      const i = await l.createLive(o);
      return s("live_crud", "create", !0, i.liveId), i;
    } catch (i) {
      throw s("live_crud", "create", !1), i;
    }
  }, []), x = a(async (o) => {
    try {
      await l.updateLive(o), s("live_crud", "update", !0, o.liveId);
    } catch (i) {
      throw s("live_crud", "update", !1, o.liveId), i;
    }
  }, []), T = a(async (o) => {
    try {
      await l.endLive(o), s("live_crud", "delete", !0, o);
    } catch (i) {
      throw s("live_crud", "delete", !1, o), i;
    }
  }, []), E = a(async (o) => l.fetchLiveDetail(o), []), A = a(async (o) => l.fetchLiveStats(o), []), D = a((o) => {
    l?.setCurrentLive(o);
  }, []), _ = a(async (o) => l.stopPlay(o), []);
  a(() => {
    l?.reset();
  }, []);
  const U = a(async (o) => l.startPlay(o), [_]);
  return {
    init: S,
    liveList: c,
    hasMore: w,
    currentLive: p,
    setCurrentLive: D,
    fetchLiveList: C,
    createLive: P,
    updateLive: x,
    endLive: T,
    fetchLiveDetail: E,
    fetchLiveStats: A,
    startPlay: U,
    stopPlay: _
  };
}
function $e() {
  const [c, t] = u(
    () => n?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  $(() => (y.add(t), n && t(n.getSnapshot()), () => {
    y.delete(t);
  }), []);
  const w = a(() => n?.nextPage() ?? Promise.resolve(), []), b = a(() => n?.prevPage() ?? Promise.resolve(), []), p = a(() => n?.goToFirstPage() ?? Promise.resolve(), []), L = a(() => n?.refresh() ?? Promise.resolve(), []), M = a((C, P) => n?.goToPage(C, P) ?? Promise.resolve(), []), S = a(() => n?.getSnapshot() ?? {
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
    prevPage: b,
    goToFirstPage: p,
    refreshCurrentPage: L,
    goToPage: M,
    getSnapshot: S
  };
}
export {
  $e as a,
  De as b,
  Ue as s,
  Ne as u
};
