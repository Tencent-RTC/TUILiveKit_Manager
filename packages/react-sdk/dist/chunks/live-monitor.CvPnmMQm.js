import { useState as l, useRef as z, useEffect as $, useCallback as n } from "react";
import { f as F, c2 as ae, h as K, i as O, aK as se, aI as ie, m as ce, u as le, c3 as ue, c4 as de, bN as fe, c5 as ge, aa as me, c6 as he, ah as be, c7 as ve, bB as Me, Y as we, X as ye } from "./main-layout.BaegCxnU.js";
import { c as U, n as pe, h as s, j as V } from "./logger.DCFRj533.js";
import { I as Le } from "./layout.DppKPdLU.js";
import { d as Se } from "./index.DOa4Qd0X.js";
import "tdesign-react";
const b = U("RiskControl");
function Re(i) {
  const { liveId: r, pageSize: w } = i, [S, C] = l(!1), [h, v] = l("cloud"), [P, L] = l(!0), [y, E] = l([]), [R, A] = l(1), [D, N] = l(0), [T, _] = l(!1), [o, c] = l([]), [m, W] = l([]), [G, d] = l(!1), [j, f] = l(null), M = z(!0);
  $(() => {
    M.current = !0, pe("risk_control"), Se().then((t) => {
      M.current && C(t);
    });
    const e = (t) => {
      const g = t === "cloud";
      (g ? O : K)({ pageSize: 1 }).then(() => {
        V(g ? "text_moderation" : "text_moderation_custom"), V(g ? "moderation" : "moderation_custom");
      }).catch(() => {
      });
    };
    return F().then((t) => {
      M.current && (v(t), e(t), t === "custom" && ae().then((g) => {
        M.current && L(g.Enabled);
      }).catch(() => {
      }));
    }), () => {
      M.current = !1;
    };
  }, []);
  const H = n(async (e = {}) => {
    _(!0);
    try {
      let t;
      return h === "custom" ? t = await K({ pageSize: w, liveId: r, ...e }) : t = await O({ pageSize: w, liveId: r, ...e }), M.current && (E(t.list || []), A(e.pageNum || 1), N(t.total || 0)), t;
    } catch (t) {
      throw b.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      M.current && _(!1);
    }
  }, [w, r, h]), I = n(async () => {
    if (!r) return [];
    d(!0), f(null);
    try {
      const e = await se(r);
      return c(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [r]), k = n(async () => {
    if (!r) return [];
    d(!0), f(null);
    try {
      const e = await ie(r);
      return W(e), e;
    } catch (e) {
      throw f(e), e;
    } finally {
      d(!1);
    }
  }, [r]), Q = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ce(r, e.memberAccounts, e.muteTime), await I(), s("risk_control", "mute", !0, r);
    } catch (t) {
      throw f(t), s("risk_control", "mute", !1), b.error("useRiskControlState", "muteMember failed:", t), t;
    } finally {
      d(!1);
    }
  }, [r, I]), X = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await le(r, e.memberAccounts), await I(), s("risk_control", "unmute", !0, r);
    } catch (t) {
      throw f(t), s("risk_control", "unmute", !1), b.error("useRiskControlState", "unmuteMember failed:", t), t;
    } finally {
      d(!1);
    }
  }, [r, I]), Y = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await ue(r, e.memberAccounts, e.duration, e.reason), await k(), s("risk_control", "ban", !0, r);
    } catch (t) {
      f(t), s("risk_control", "ban", !1);
    } finally {
      d(!1);
    }
  }, [r, k]), J = n(async (e) => {
    if (!r) throw new Error("liveId is required");
    d(!0), f(null);
    try {
      await de(r, e.memberAccounts), await k(), s("risk_control", "unban", !0, r);
    } catch (t) {
      f(t), s("risk_control", "unban", !1);
    } finally {
      d(!1);
    }
  }, [r, k]), Z = n(async () => {
    if (!r) throw new Error("liveId is required");
    try {
      const e = await fe(r, "default", Le.VIOLATION_SUGGESTION_DEFAULT);
      return s("risk_control", "violation_warning", !0, r), e;
    } catch (e) {
      throw s("risk_control", "violation_warning", !1), b.error("useRiskControlState", "sendViolationWarning failed:", e), e;
    }
  }, [r]), ee = n(async (e) => {
    try {
      const t = e.items ?? (() => {
        const g = y;
        return e.ids.map((x) => {
          const q = g.find((ne) => ne.id === x);
          return {
            id: x,
            content: q?.content ?? x,
            userId: q?.userId ?? ""
          };
        });
      })();
      if (h === "custom") {
        const g = await ge({ ids: e.ids, items: t, liveId: e.liveId ?? r });
        s("moderation", "approve", !0, String(g.success)), g.failed > 0 && b.warn("useRiskControlState", `部分放行失败: 成功 ${g.success}, 失败 ${g.failed}`);
      } else
        await me({ ids: e.ids, items: t, liveId: e.liveId ?? r }), s("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw s("moderation", "approve", !1), b.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, [r, y, h]), te = n(async (e) => {
    try {
      const t = await he(e);
      return M.current && L(t.Enabled), s("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw s("moderation", "toggle", !1), b.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, []), re = n(async (e) => {
    try {
      await be({ content: e.content, liveId: e.liveId ?? r }), s("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw s("moderation", "bypass", !1), b.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, [r]), oe = n(async (e) => {
    try {
      await F() === "custom" ? await ve(e) : await Me(e), s("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw s("moderation", "delete", !1), b.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, []);
  return {
    textModerationAvailable: S,
    moderationMode: h,
    customModerationToggleEnabled: P,
    updateCustomModerationToggleEnabled: te,
    textModerationList: y,
    textModerationPageNum: R,
    textModerationTotal: D,
    textModerationLoading: T,
    fetchTextModerationList: H,
    approveTextModerationItems: ee,
    bypassCorrectionKeyword: re,
    muteMember: Q,
    unmuteMember: X,
    banMember: Y,
    unbanMember: J,
    sendViolationWarning: Z,
    deleteModerationItems: oe,
    mutedList: o,
    bannedList: m,
    memberLoading: G,
    memberError: j,
    fetchMutedList: I,
    fetchBannedList: k
  };
}
U("LiveMonitor");
let u = null, Ce = !0, a = null;
const p = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set();
function Pe() {
  return a || (a = new ye({
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
function Ae(i) {
  return p.add(i), a && i(a.getSnapshot()), () => {
    p.delete(i);
  };
}
function De() {
  const [i, r] = l([]), [w, S] = l(!0), [C, h] = l(null), v = z(!0);
  u || (u = new we({
    onStateChange: (o) => {
      B.forEach((c) => c(o));
    },
    getActive: () => Ce
  })), Pe(), $(() => {
    v.current = !0;
    const o = (m) => {
      v.current && (m.liveList !== void 0 && r(m.liveList), m.hasMore !== void 0 && S(m.hasMore), m.currentLive !== void 0 && h(m.currentLive));
    };
    B.add(o);
    const c = (m) => {
      v.current && r([...m.list]);
    };
    return p.add(c), a && c(a.getSnapshot()), () => {
      v.current = !1, B.delete(o), p.delete(c);
    };
  }, []);
  const P = n((o) => {
    u?.init(o);
  }, []), L = n(async (o) => {
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
  }, []), y = n(async (o) => {
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
  }, []), A = n(async (o) => u.fetchLiveDetail(o), []), D = n(async (o) => u.fetchLiveStats(o), []), N = n((o) => {
    u?.setCurrentLive(o);
  }, []), T = n(async (o) => u.stopPlay(o), []);
  n(() => {
    u?.reset();
  }, []);
  const _ = n(async (o) => u.startPlay(o), [T]);
  return {
    init: P,
    liveList: i,
    hasMore: w,
    currentLive: C,
    setCurrentLive: N,
    fetchLiveList: L,
    createLive: y,
    updateLive: E,
    endLive: R,
    fetchLiveDetail: A,
    fetchLiveStats: D,
    startPlay: _,
    stopPlay: T
  };
}
function Ne() {
  const [i, r] = l(
    () => a?.getSnapshot() ?? { list: [], currentPage: 1, hasMoreData: !0, loading: !1, pageCursors: /* @__PURE__ */ new Map([[1, ""]]) }
  );
  $(() => (p.add(r), a && r(a.getSnapshot()), () => {
    p.delete(r);
  }), []);
  const w = n(() => a?.nextPage() ?? Promise.resolve(), []), S = n(() => a?.prevPage() ?? Promise.resolve(), []), C = n(() => a?.goToFirstPage() ?? Promise.resolve(), []), h = n(() => a?.refresh() ?? Promise.resolve(), []), v = n((L, y) => a?.goToPage(L, y) ?? Promise.resolve(), []), P = n(() => a?.getSnapshot() ?? {
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
    prevPage: S,
    goToFirstPage: C,
    refreshCurrentPage: h,
    goToPage: v,
    getSnapshot: P
  };
}
export {
  Ne as a,
  Re as b,
  Ae as s,
  De as u
};
