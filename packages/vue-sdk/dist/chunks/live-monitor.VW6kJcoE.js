import { ref as s, onUnmounted as A, onMounted as K } from "vue";
import { ag as O, ai as B, bl as G, bC as H, bD as W, u as j, m as Q, I as J, bE as X, ah as Y } from "./main-layout.0SrlHtaV.js";
import { c as R, r as i } from "./logger.DfjyL4S7.js";
import { P as Z, $ as ee, _ as te, ai as re, al as ae } from "./en-US.Cyn41QJd.js";
const v = R("RiskControl");
function he(c) {
  const { liveId: r, pageSize: f } = c, g = s(!1), d = s(0), L = s([]), m = s(0), w = s(1), h = s(!1), y = s([]), p = s([]), e = s(!1), o = s(null);
  let b = !0;
  A(() => {
    b = !1;
  });
  const z = async () => {
    try {
      const t = await ae();
      return b && (g.value = t > 0, d.value = t), t;
    } catch (t) {
      throw v.error("useRiskControlState", "fetchTextModerationUsage failed:", t), t;
    }
  }, N = async (t = {}) => {
    h.value = !0;
    try {
      const a = await re({ pageSize: f, liveId: r, ...t });
      return b && (L.value = a.list || [], m.value = a.total || 0, w.value = t.pageNum || 1), a;
    } catch (a) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", a), a;
    } finally {
      b && (h.value = !1);
    }
  }, U = async (t) => {
    try {
      const a = t.items ?? (() => {
        const $ = L.value;
        return t.ids.map((S) => {
          const D = $.find((q) => q.id === S);
          return {
            id: S,
            content: D?.content ?? S,
            userId: D?.userId ?? ""
          };
        });
      })();
      await te({ ids: t.ids, items: a, liveId: t.liveId ?? r }), i("moderation", "approve", !0, String(t.ids.length));
    } catch (a) {
      throw i("moderation", "approve", !1), v.error("useRiskControlState", "approveTextModerationItems failed:", a), a;
    }
  }, V = async (t) => {
    try {
      await ee({ content: t.content, liveId: t.liveId ?? r }), i("moderation", "bypass", !0, String(t.content.length));
    } catch (a) {
      throw i("moderation", "bypass", !1), v.error("useRiskControlState", "bypassCorrectionKeyword failed:", a), a;
    }
  }, P = async () => {
    if (!r) return [];
    try {
      const t = await B(r);
      return y.value = t, t;
    } catch (t) {
      throw o.value = t, t;
    }
  }, C = async () => {
    if (!r) return [];
    try {
      const t = await O(r);
      return p.value = t, t;
    } catch (t) {
      throw o.value = t, t;
    }
  };
  return {
    textModerationAvailable: g,
    textModerationRemainUsage: d,
    textModerationList: L,
    textModerationTotal: m,
    textModerationPageNum: w,
    textModerationLoading: h,
    fetchTextModerationUsage: z,
    fetchTextModerationList: N,
    approveTextModerationItems: U,
    bypassCorrectionKeyword: V,
    muteMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, o.value = null;
      try {
        await Q(r, t.memberAccounts, t.muteTime), await P(), i("risk_control", "mute", !0, r);
      } catch (a) {
        throw o.value = a, i("risk_control", "mute", !1, r), v.error("useRiskControlState", "muteMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    unmuteMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, o.value = null;
      try {
        await j(r, t.memberAccounts), await P(), i("risk_control", "unmute", !0, r);
      } catch (a) {
        throw o.value = a, i("risk_control", "unmute", !1, r), v.error("useRiskControlState", "unmuteMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    banMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, o.value = null;
      try {
        await W(r, t.memberAccounts, t.duration, t.reason), await C(), i("risk_control", "ban", !0, r);
      } catch (a) {
        throw o.value = a, i("risk_control", "ban", !1, r), v.error("useRiskControlState", "banMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    unbanMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, o.value = null;
      try {
        await H(r, t.memberAccounts), await C(), i("risk_control", "unban", !0, r);
      } catch (a) {
        throw o.value = a, i("risk_control", "unban", !1, r), v.error("useRiskControlState", "unbanMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!r) throw new Error("liveId is required");
      try {
        const t = await G(r, "default", Z.VIOLATION_SUGGESTION_DEFAULT);
        return i("risk_control", "violation_warning", !0, r), t;
      } catch (t) {
        throw i("risk_control", "violation_warning", !1, r), v.error("useRiskControlState", "sendViolationWarning failed:", t), t;
      }
    },
    mutedList: y,
    bannedList: p,
    memberLoading: e,
    memberError: o,
    fetchMutedList: P,
    fetchBannedList: C
  };
}
const u = R("LiveMonitor"), be = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let n = null, ne = !0;
const k = s([]), E = s(!0), F = s(null), oe = s({}), ie = s(null);
let l = null;
const M = s([]), _ = s(1), x = s(!0), T = s(!1);
function I() {
  return l || (l = new X({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: c, pageCursors: r, count: f }) => {
      if (!n)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const d = await Y({
        page: c,
        pageCursors: r,
        pageSize: f
      });
      return {
        list: d.lives,
        pageCursors: d.pageCursors,
        hasMoreData: d.hasMoreData
      };
    }
  }), l.subscribe((c) => {
    M.value = c.pageData, _.value = c.currentPage, x.value = c.hasMore, T.value = c.loading, k.value = [...c.pageData];
  }), l);
}
function Me() {
  const c = () => {
    n || (n = new J({
      onStateChange: (e) => {
        e.liveList !== void 0 && (k.value = e.liveList), e.hasMore !== void 0 && (E.value = e.hasMore), e.currentLive !== void 0 && (F.value = e.currentLive), e.loading !== void 0 && (oe.value = e.loading), e.error !== void 0 && (ie.value = e.error);
      },
      getActive: () => ne
    }), u.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return A(() => {
    u.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), K(() => {
    if (c(), I(), l) {
      const e = l.getSnapshot();
      M.value = e.pageData, _.value = e.currentPage, x.value = e.hasMore, T.value = e.loading;
    }
  }), n || c(), I(), {
    init: (e) => {
      if (u.info("useLiveMonitorState", "init called", { hasCore: !!n, configKeys: Object.keys(e) }), n || (u.warn("useLiveMonitorState", "core is null, initializing..."), c(), u.info("useLiveMonitorState", "after initCore, hasCore:", !!n)), !n) {
        u.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      n.init(e), l?.goToFirstPage().catch((o) => {
        u.error("useLiveMonitorState", "Failed to load first page:", o);
      });
    },
    liveList: k,
    hasMore: E,
    currentLive: F,
    setCurrentLive: (e) => {
      n?.setCurrentLive(e);
    },
    fetchLiveList: async (e) => {
      if (!l)
        return u.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
      switch (e?.action) {
        case "first":
          await l.goToFirstPage();
          break;
        case "prev":
          await l.prevPage();
          break;
        default:
          await l.nextPage();
          break;
      }
      return M.value;
    },
    createLive: async (e) => {
      if (!n)
        throw u.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const o = await n.createLive(e);
        return i("live_crud", "create", !0, o.liveId), o;
      } catch (o) {
        throw i("live_crud", "create", !1), o;
      }
    },
    updateLive: async (e) => {
      if (!n) {
        u.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await n.updateLive(e), i("live_crud", "update", !0, e.liveId);
      } catch (o) {
        throw i("live_crud", "update", !1, e.liveId), o;
      }
    },
    endLive: async (e) => {
      if (!n) {
        u.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await n.endLive(e), i("live_crud", "delete", !0, e);
      } catch (o) {
        throw i("live_crud", "delete", !1, e), o;
      }
    },
    fetchLiveDetail: async (e) => n ? n.fetchLiveDetail(e) : (u.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (e) => n ? n.fetchLiveStats(e) : (u.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (e) => {
      if (!n) {
        u.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return n.startPlay(e);
    },
    stopPlay: async (e) => {
      if (!n) {
        u.warn("useLiveMonitorState", "stopPlay: core is null, skipping", e);
        return;
      }
      return n.stopPlay(e);
    }
  };
}
function me() {
  return I(), {
    pageData: M,
    currentPage: _,
    hasMore: x,
    loading: T,
    nextPage: () => l?.nextPage() ?? Promise.resolve(),
    prevPage: () => l?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => l?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => l?.refreshCurrentPage() ?? Promise.resolve()
  };
}
export {
  be as L,
  me as a,
  he as b,
  Me as u
};
