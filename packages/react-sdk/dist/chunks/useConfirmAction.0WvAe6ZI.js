import { ref as a, onUnmounted as T } from "vue";
import { Y as _, r as o, a2 as A, a1 as R, al as F, ao as E } from "./en-US.DXdmRfHg.js";
import { d as q } from "./LiveMonitorCore.mCNav0QG.js";
import { O as U, R as O, aA as W, aB as B, u as N, m as V } from "./main-layout.Bx74vUBv.js";
import { u as K } from "./useAsyncAction.PDifCTNb.js";
function X(v) {
  const { liveId: t, pageSize: b } = v, c = a(!1), i = a(0), l = a([]), d = a(0), m = a(1), u = a(!1), w = a([]), h = a([]), s = a(!1), n = a(null);
  let f = !0;
  T(() => {
    f = !1;
  });
  const C = async () => {
    try {
      const e = await E();
      return f && (c.value = e > 0, i.value = e), e;
    } catch (e) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", e), e;
    }
  }, I = async (e = {}) => {
    u.value = !0;
    try {
      const r = await F({ pageSize: b, liveId: t, ...e });
      return f && (l.value = r.list || [], d.value = r.total || 0, m.value = e.pageNum || 1), r;
    } catch (r) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", r), r;
    } finally {
      f && (u.value = !1);
    }
  }, p = async (e) => {
    try {
      const r = e.items ?? (() => {
        const S = l.value;
        return e.ids.map((g) => {
          const k = S.find((L) => L.id === g);
          return {
            id: g,
            content: k?.content ?? g,
            userId: k?.userId ?? ""
          };
        });
      })();
      await R({ ids: e.ids, items: r, liveId: e.liveId ?? t }), o("moderation", "approve", !0, String(e.ids.length));
    } catch (r) {
      throw o("moderation", "approve", !1), console.error("[useRiskControlState] approveTextModerationItems failed:", r), r;
    }
  }, x = async (e) => {
    try {
      await A({ content: e.content, liveId: e.liveId ?? t }), o("moderation", "bypass", !0, String(e.content.length));
    } catch (r) {
      throw o("moderation", "bypass", !1), console.error("[useRiskControlState] bypassCorrectionKeyword failed:", r), r;
    }
  }, y = async () => {
    if (!t) return [];
    try {
      const e = await O(t);
      return w.value = e, e;
    } catch (e) {
      throw n.value = e, e;
    }
  }, M = async () => {
    if (!t) return [];
    try {
      const e = await U(t);
      return h.value = e, e;
    } catch (e) {
      throw n.value = e, e;
    }
  };
  return {
    textModerationAvailable: c,
    textModerationRemainUsage: i,
    textModerationList: l,
    textModerationTotal: d,
    textModerationPageNum: m,
    textModerationLoading: u,
    fetchTextModerationUsage: C,
    fetchTextModerationList: I,
    approveTextModerationItems: p,
    bypassCorrectionKeyword: x,
    muteMember: async (e) => {
      if (!t) throw new Error("liveId is required");
      s.value = !0, n.value = null;
      try {
        await V(t, e.memberAccounts, e.muteTime), await y(), o("risk_control", "mute", !0, t);
      } catch (r) {
        throw n.value = r, o("risk_control", "mute", !1, t), console.error("[useRiskControlState] muteMember failed:", r), r;
      } finally {
        s.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!t) throw new Error("liveId is required");
      s.value = !0, n.value = null;
      try {
        await N(t, e.memberAccounts), await y(), o("risk_control", "unmute", !0, t);
      } catch (r) {
        throw n.value = r, o("risk_control", "unmute", !1, t), console.error("[useRiskControlState] unmuteMember failed:", r), r;
      } finally {
        s.value = !1;
      }
    },
    banMember: async (e) => {
      if (!t) throw new Error("liveId is required");
      s.value = !0, n.value = null;
      try {
        await B(t, e.memberAccounts, e.duration, e.reason), await M(), o("risk_control", "ban", !0, t);
      } catch (r) {
        throw n.value = r, o("risk_control", "ban", !1, t), console.error("[useRiskControlState] banMember failed:", r), r;
      } finally {
        s.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!t) throw new Error("liveId is required");
      s.value = !0, n.value = null;
      try {
        await W(t, e.memberAccounts), await M(), o("risk_control", "unban", !0, t);
      } catch (r) {
        throw n.value = r, o("risk_control", "unban", !1, t), console.error("[useRiskControlState] unbanMember failed:", r), r;
      } finally {
        s.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!t) throw new Error("liveId is required");
      try {
        const e = await q(t, "default", _.VIOLATION_SUGGESTION_DEFAULT);
        return o("risk_control", "violation_warning", !0, t), e;
      } catch (e) {
        throw o("risk_control", "violation_warning", !1, t), console.error("[useRiskControlState] sendViolationWarning failed:", e), e;
      }
    },
    mutedList: w,
    bannedList: h,
    memberLoading: s,
    memberError: n,
    fetchMutedList: y,
    fetchBannedList: M
  };
}
function Z(v) {
  const { confirm: t, onSuccess: b, ...c } = v, i = a(null), l = (n) => {
    i.value = null, b?.(n);
  }, { loading: d, execute: m, reset: u } = K({
    ...c,
    onSuccess: l
  });
  return {
    loading: d,
    confirmDialog: i,
    requestConfirm: () => {
      i.value = {
        visible: !0,
        title: t.title,
        content: t.content,
        confirmText: t.confirmText,
        danger: t.danger
      };
    },
    cancelConfirm: () => {
      i.value = null;
    },
    executeWithConfirm: async () => {
      try {
        return await m();
      } finally {
        i.value = null;
      }
    },
    reset: u
  };
}
export {
  X as a,
  Z as u
};
