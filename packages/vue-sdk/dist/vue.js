import { c as G, n as J, j as q, h as n, k as X, u as Y } from "./chunks/logger.rNWqpx5t.js";
import { m as Be, o as je, p as Qe } from "./chunks/logger.rNWqpx5t.js";
import { ref as l, onUnmounted as E, onMounted as ee, watch as te } from "vue";
import { c7 as z, aZ as N, c8 as U, c9 as re, aF as oe, aH as ne, ce as ae, bz as ie, bM as se, bO as le, cb as ue, ca as ce, u as de, m as ve, ae as fe, cc as me, a7 as ge, cd as he, V as Me, U as Le } from "./chunks/main-layout.QTEHh38b.js";
import { a as be } from "./chunks/useAsyncAction.TZaXlZ4q.js";
import { u as Je } from "./chunks/useAsyncAction.TZaXlZ4q.js";
import { I as we } from "./chunks/layout.C1lzYH2h.js";
import { u as Ye, a as et } from "./chunks/useSvgaPlayer.Bi13-47v.js";
import { useUIKit as pe } from "@tencentcloud/uikit-base-component-vue3";
import { c as ye } from "./chunks/t.QkUmzvcB.js";
const v = G("RiskControl");
function ze(u) {
  const { liveId: o, pageSize: b } = u, w = l(!1), d = l("cloud"), p = l(!0), g = l([]), M = l(0), S = l(1), P = l(!1), k = l([]), r = l([]), a = l(!1), f = l(null);
  let L = !0;
  J("risk_control"), z().then(async (t) => {
    if (!L) return;
    d.value = t;
    const e = t === "cloud", C = e ? N : U;
    try {
      const m = await C({ pageSize: b, liveId: o });
      L && (w.value = !0, g.value = m.list || [], M.value = m.total || 0), q(e ? "text_moderation" : "text_moderation_custom"), q(e ? "moderation" : "moderation_custom");
    } catch {
      L && (w.value = !1);
    }
    t === "custom" && re().then((m) => {
      L && (p.value = m.Enabled);
    }).catch(() => {
    });
  }), E(() => {
    L = !1;
  });
  const H = async (t = {}) => {
    P.value = !0;
    try {
      let e;
      return d.value === "custom" ? e = await U({ pageSize: b, liveId: o, ...t }) : e = await N({ pageSize: b, liveId: o, ...t }), L && (g.value = e.list || [], M.value = e.total || 0, S.value = t.pageNum || 1), e;
    } catch (e) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", e), e;
    } finally {
      L && (P.value = !1);
    }
  }, B = async (t) => {
    try {
      let e = t.ids, C = t.items;
      if (!C) {
        const m = g.value, V = e.map((h) => {
          const y = m.find((x) => x.id === h);
          return {
            id: h,
            content: y?.content ?? h,
            userId: y?.userId ?? "",
            createdAtMs: y?.createdAtMs ?? 0
          };
        }).sort((h, y) => h.createdAtMs - y.createdAtMs);
        e = V.map((h) => h.id), C = V.map(({ id: h, content: y, userId: x }) => ({ id: h, content: y, userId: x }));
      }
      if (d.value === "custom") {
        const m = await me({ ids: e, items: C, liveId: t.liveId ?? o });
        n("moderation", "approve", !0, String(m.success)), m.failed > 0 && v.warn("useRiskControlState", `部分放行失败: 成功 ${m.success}, 失败 ${m.failed}`);
      } else
        await ge({ ids: e, items: C, liveId: t.liveId ?? o }), n("moderation", "approve", !0, String(t.ids.length));
    } catch (e) {
      throw n("moderation", "approve", !1), v.error("useRiskControlState", "approveTextModerationItems failed:", e), e;
    }
  }, j = async (t) => {
    try {
      const e = await he(t);
      return L && (p.value = e.Enabled), n("moderation", "toggle", !0), e.Enabled;
    } catch (e) {
      throw n("moderation", "toggle", !1), v.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", e), e;
    }
  }, Q = async (t) => {
    try {
      await fe({ content: t.content, liveId: t.liveId ?? o }), n("moderation", "bypass", !0, String(t.content.length));
    } catch (e) {
      throw n("moderation", "bypass", !1), v.error("useRiskControlState", "bypassCorrectionKeyword failed:", e), e;
    }
  }, Z = async (t) => {
    try {
      await z() === "custom" ? await ae(t) : await ie(t), n("moderation", "delete", !0, String(t.length));
    } catch (e) {
      throw n("moderation", "delete", !1), v.error("useRiskControlState", "deleteModerationItems failed:", e), e;
    }
  }, I = async () => {
    if (!o) return [];
    try {
      const t = await ne(o);
      return k.value = t, t;
    } catch (t) {
      throw f.value = t, t;
    }
  }, T = async () => {
    if (!o) return [];
    try {
      const t = await oe(o);
      return r.value = t, t;
    } catch (t) {
      throw f.value = t, t;
    }
  };
  return {
    textModerationAvailable: w,
    moderationMode: d,
    customModerationToggleEnabled: p,
    updateCustomModerationToggleEnabled: j,
    textModerationList: g,
    textModerationTotal: M,
    textModerationPageNum: S,
    textModerationLoading: P,
    fetchTextModerationList: H,
    approveTextModerationItems: B,
    bypassCorrectionKeyword: Q,
    muteMember: async (t) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, f.value = null;
      try {
        await ve(o, t.memberAccounts, t.muteTime), await I(), n("risk_control", "mute", !0, o);
      } catch (e) {
        throw f.value = e, n("risk_control", "mute", !1), v.error("useRiskControlState", "muteMember failed:", e), e;
      } finally {
        a.value = !1;
      }
    },
    unmuteMember: async (t) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, f.value = null;
      try {
        await de(o, t.memberAccounts), await I(), n("risk_control", "unmute", !0, o);
      } catch (e) {
        throw f.value = e, n("risk_control", "unmute", !1), v.error("useRiskControlState", "unmuteMember failed:", e), e;
      } finally {
        a.value = !1;
      }
    },
    banMember: async (t) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, f.value = null;
      try {
        await ce(o, t.memberAccounts, t.duration, t.reason), await T(), n("risk_control", "ban", !0, o);
      } catch (e) {
        throw f.value = e, n("risk_control", "ban", !1), v.error("useRiskControlState", "banMember failed:", e), e;
      } finally {
        a.value = !1;
      }
    },
    unbanMember: async (t) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, f.value = null;
      try {
        await ue(o, t.memberAccounts), await T(), n("risk_control", "unban", !0, o);
      } catch (e) {
        throw f.value = e, n("risk_control", "unban", !1), v.error("useRiskControlState", "unbanMember failed:", e), e;
      } finally {
        a.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const t = await le(o, "default", we.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), t;
      } catch (t) {
        throw n("risk_control", "violation_warning", !1), v.error("useRiskControlState", "sendViolationWarning failed:", t), t;
      }
    },
    sendAdminMessage: async (t) => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await se(o, t);
        return n("risk_control", "send_admin_message", !0, o), e;
      } catch (e) {
        throw n("risk_control", "send_admin_message", !1), v.error("useRiskControlState", "sendAdminMessage failed:", e), e;
      }
    },
    deleteModerationItems: Z,
    mutedList: k,
    bannedList: r,
    memberLoading: a,
    memberError: f,
    fetchMutedList: I,
    fetchBannedList: T
  };
}
const c = G("LiveMonitor"), Ne = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let i = null, Ce = !0;
const A = l([]), W = l(!0), $ = l(null), Se = l({}), Pe = l(null);
let s = null;
const _ = l([]), R = l(1), D = l(!0), O = l(!1);
function F() {
  return s || (s = new Le({ pageSize: 8 }), s.subscribe(() => {
    const u = s.getSnapshot();
    _.value = u.list, R.value = u.currentPage, D.value = u.hasMoreData, O.value = u.loading, A.value = [...u.list];
  }), s);
}
let K = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const u = document.documentElement.lang;
  u !== K && (K = u, s && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), s.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function Ue() {
  const u = () => {
    i || (i = new Me({
      onStateChange: (r) => {
        r.liveList !== void 0 && (A.value = r.liveList), r.hasMore !== void 0 && (W.value = r.hasMore), r.currentLive !== void 0 && ($.value = r.currentLive), r.loading !== void 0 && (Se.value = r.loading), r.error !== void 0 && (Pe.value = r.error);
      },
      getActive: () => Ce
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return E(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), ee(() => {
    if (u(), F(), s) {
      const a = s.getSnapshot();
      _.value = a.list, R.value = a.currentPage, D.value = a.hasMoreData, O.value = a.loading;
    }
    const r = te(
      () => document.documentElement.lang,
      () => {
        c.info("useLiveMonitorState", "语言切换，重新获取直播列表"), s && s.goToFirstPage();
      }
    );
    E(() => r());
  }), i || u(), F(), {
    init: (r) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!i, configKeys: Object.keys(r) }), i || (c.warn("useLiveMonitorState", "core is null, initializing..."), u(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!i)), !i) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      i.init(r);
    },
    liveList: A,
    hasMore: W,
    currentLive: $,
    setCurrentLive: (r) => {
      i?.setCurrentLive(r);
    },
    fetchLiveList: async (r) => {
      if (!s)
        return c.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
      switch (r?.action) {
        case "first":
          await s.goToFirstPage();
          break;
        case "prev":
          await s.prevPage();
          break;
        default:
          await s.nextPage();
          break;
      }
      return _.value;
    },
    createLive: async (r) => {
      if (!i)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const a = await i.createLive(r);
        return n("live_crud", "create", !0, a.liveId), a;
      } catch (a) {
        throw n("live_crud", "create", !1), a;
      }
    },
    updateLive: async (r) => {
      if (!i) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await i.updateLive(r), n("live_crud", "update", !0, r.liveId);
      } catch (a) {
        throw n("live_crud", "update", !1, r.liveId), a;
      }
    },
    endLive: async (r) => {
      if (!i) {
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await i.endLive(r), n("live_crud", "delete", !0, r), X("force_stop");
      } catch (a) {
        throw n("live_crud", "delete", !1), a;
      }
    },
    fetchLiveDetail: async (r) => i ? i.fetchLiveDetail(r) : (c.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (r) => i ? i.fetchLiveStats(r) : (c.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (r) => {
      if (!i) {
        c.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return i.startPlay(r);
    },
    stopPlay: async (r) => {
      if (!i) {
        c.warn("useLiveMonitorState", "stopPlay: core is null, skipping", r);
        return;
      }
      return i.stopPlay(r);
    }
  };
}
function We() {
  return F(), {
    pageData: _,
    currentPage: R,
    hasMore: D,
    loading: O,
    nextPage: () => s?.nextPage() ?? Promise.resolve(),
    prevPage: () => s?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => s?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => s?.refresh() ?? Promise.resolve(),
    goToPage: (g, M) => s?.goToPage(g, M) ?? Promise.resolve(),
    getSnapshot: () => s?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
function $e() {
  const { t: u } = pe();
  return { t: ye(u) };
}
function Ke(u) {
  const { confirm: o, onSuccess: b, ...w } = u, d = l(null), p = (a) => {
    d.value = null, b?.(a);
  }, { loading: g, execute: M, reset: S } = be({
    ...w,
    onSuccess: p
  });
  return {
    loading: g,
    confirmDialog: d,
    requestConfirm: () => {
      d.value = {
        visible: !0,
        title: o.title,
        content: o.content,
        confirmText: o.confirmText
      };
    },
    cancelConfirm: () => {
      d.value = null;
    },
    executeWithConfirm: async () => {
      try {
        return await M();
      } finally {
        d.value = null;
      }
    },
    reset: S
  };
}
Y("vue");
export {
  Ne as LiveListEvent,
  Be as measureAndReport,
  n as reportBusinessOp,
  X as reportEvent,
  je as reportPageView,
  Qe as reportTime,
  be as useAsyncAction,
  Ke as useConfirmAction,
  Je as useGiftState,
  Ue as useLiveMonitorState,
  We as usePaginatedList,
  Ye as usePreviewUrl,
  ze as useRiskControlState,
  et as useSvgaPlayer,
  $e as useT
};
