import { useState as i, useRef as P, useEffect as z, useCallback as n } from "react";
import { R as F, O as Q, m as Y, u as j, aB as H, aA as J } from "./main-layout.Bx74vUBv.js";
import { ao as X, al as Z, r as o, Y as ee, a1 as te, a2 as re } from "./en-US.DXdmRfHg.js";
import { d as ne } from "./LiveMonitorCore.mCNav0QG.js";
import { u as oe } from "./useAsyncAction.3VDMHaQC.js";
function ue(M) {
  const { liveId: t, pageSize: l } = M, [w, h] = i(!1), [c, g] = i(0), [u, b] = i([]), [x, k] = i(1), [C, T] = i(0), [y, I] = i(!1), [p, S] = i([]), [_, R] = i([]), [A, a] = i(!1), [E, s] = i(null), d = P(!0);
  z(() => (d.current = !0, () => {
    d.current = !1;
  }), []);
  const U = n(async () => {
    try {
      const e = await X();
      return d.current && (h(e > 0), g(e)), e;
    } catch (e) {
      throw console.error("[useRiskControlState] fetchTextModerationUsage failed:", e), e;
    }
  }, []), q = n(async (e = {}) => {
    I(!0);
    try {
      const r = await Z({ pageSize: l, liveId: t, ...e });
      return d.current && (b(r.list || []), k(e.pageNum || 1), T(r.total || 0)), r;
    } catch (r) {
      throw console.error("[useRiskControlState] fetchTextModerationList failed:", r), r;
    } finally {
      d.current && I(!1);
    }
  }, [l, t]), f = n(async () => {
    if (!t) return [];
    a(!0), s(null);
    try {
      const e = await F(t);
      return S(e), e;
    } catch (e) {
      throw s(e), e;
    } finally {
      a(!1);
    }
  }, [t]), m = n(async () => {
    if (!t) return [];
    a(!0), s(null);
    try {
      const e = await Q(t);
      return R(e), e;
    } catch (e) {
      throw s(e), e;
    } finally {
      a(!1);
    }
  }, [t]), B = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    a(!0), s(null);
    try {
      await Y(t, e.memberAccounts, e.muteTime), await f(), o("risk_control", "mute", !0, t);
    } catch (r) {
      throw s(r), o("risk_control", "mute", !1, t), console.error("[useRiskControlState] muteMember failed:", r), r;
    } finally {
      a(!1);
    }
  }, [t, f]), N = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    a(!0), s(null);
    try {
      await j(t, e.memberAccounts), await f(), o("risk_control", "unmute", !0, t);
    } catch (r) {
      throw s(r), o("risk_control", "unmute", !1, t), console.error("[useRiskControlState] unmuteMember failed:", r), r;
    } finally {
      a(!1);
    }
  }, [t, f]), O = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    a(!0), s(null);
    try {
      await H(t, e.memberAccounts, e.duration, e.reason), await m(), o("risk_control", "ban", !0, t);
    } catch (r) {
      s(r), o("risk_control", "ban", !1, t);
    } finally {
      a(!1);
    }
  }, [t, m]), K = n(async (e) => {
    if (!t) throw new Error("liveId is required");
    a(!0), s(null);
    try {
      await J(t, e.memberAccounts), await m(), o("risk_control", "unban", !0, t);
    } catch (r) {
      s(r), o("risk_control", "unban", !1, t);
    } finally {
      a(!1);
    }
  }, [t, m]), V = n(async () => {
    if (!t) throw new Error("liveId is required");
    try {
      const e = await ne(t, "default", ee.VIOLATION_SUGGESTION_DEFAULT);
      return o("risk_control", "violation_warning", !0, t), e;
    } catch (e) {
      throw o("risk_control", "violation_warning", !1, t), console.error("[useRiskControlState] sendViolationWarning failed:", e), e;
    }
  }, [t]), W = n(async (e) => {
    try {
      const r = e.items ?? (() => {
        const D = u;
        return e.ids.map((v) => {
          const L = D.find((G) => G.id === v);
          return {
            id: v,
            content: L?.content ?? v,
            userId: L?.userId ?? ""
          };
        });
      })();
      await te({ ids: e.ids, items: r, liveId: e.liveId ?? t }), o("moderation", "approve", !0, String(e.ids.length));
    } catch (r) {
      throw o("moderation", "approve", !1), console.error("[useRiskControlState] approveTextModerationItems failed:", r), r;
    }
  }, [t, u]), $ = n(async (e) => {
    try {
      await re({ content: e.content, liveId: e.liveId ?? t }), o("moderation", "bypass", !0, String(e.content.length));
    } catch (r) {
      throw o("moderation", "bypass", !1), console.error("[useRiskControlState] bypassCorrectionKeyword failed:", r), r;
    }
  }, [t]);
  return {
    textModerationAvailable: w,
    textModerationRemainUsage: c,
    textModerationList: u,
    textModerationPageNum: x,
    textModerationTotal: C,
    textModerationLoading: y,
    fetchTextModerationUsage: U,
    fetchTextModerationList: q,
    approveTextModerationItems: W,
    bypassCorrectionKeyword: $,
    muteMember: B,
    unmuteMember: N,
    banMember: O,
    unbanMember: K,
    sendViolationWarning: V,
    mutedList: p,
    bannedList: _,
    memberLoading: A,
    memberError: E,
    fetchMutedList: f,
    fetchBannedList: m
  };
}
function de(M) {
  const { confirm: t, onSuccess: l, ...w } = M, [h, c] = i(null), g = n((y) => {
    c(null), l?.(y);
  }, [l]), { loading: u, execute: b, reset: x } = oe({
    ...w,
    onSuccess: g
  }), k = n(() => {
    c({
      visible: !0,
      title: t.title,
      content: t.content,
      confirmText: t.confirmText,
      danger: t.danger
    });
  }, [t]), C = n(() => {
    c(null);
  }, []), T = n(async () => {
    try {
      return await b();
    } finally {
      c(null);
    }
  }, [b]);
  return {
    loading: u,
    confirmDialog: h,
    requestConfirm: k,
    cancelConfirm: C,
    executeWithConfirm: T,
    reset: x
  };
}
export {
  ue as a,
  de as u
};
