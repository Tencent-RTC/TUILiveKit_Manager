import { ref as s, onUnmounted as A, onMounted as O } from "vue";
import { ae as $, ag as B, bd as G, bs as H, bt as W, u as j, m as Q, F as Z, bu as J, af as X } from "./main-layout.DNAtZmGx.js";
import { c as R, r as i } from "./logger.DfjyL4S7.js";
import { Z as Y, a9 as ee, a8 as te, as as re, av as ae } from "./error-message.BVYzOzgW.js";
const v = R("RiskControl");
function he(u) {
  const { liveId: r, pageSize: f } = u, g = s(!1), d = s(0), L = s([]), h = s(0), b = s(1), M = s(!1), y = s([]), p = s([]), e = s(!1), o = s(null);
  let m = !0;
  A(() => {
    m = !1;
  });
  const z = async () => {
    try {
      const t = await ae();
      return m && (g.value = t > 0, d.value = t), t;
    } catch (t) {
      throw v.error("useRiskControlState", "fetchTextModerationUsage failed:", t), t;
    }
  }, N = async (t = {}) => {
    M.value = !0;
    try {
      const a = await re({ pageSize: f, liveId: r, ...t });
      return m && (L.value = a.list || [], h.value = a.total || 0, b.value = t.pageNum || 1), a;
    } catch (a) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", a), a;
    } finally {
      m && (M.value = !1);
    }
  }, U = async (t) => {
    try {
      const a = t.items ?? (() => {
        const q = L.value;
        return t.ids.map((S) => {
          const D = q.find((K) => K.id === S);
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
      const t = await $(r);
      return p.value = t, t;
    } catch (t) {
      throw o.value = t, t;
    }
  };
  return {
    textModerationAvailable: g,
    textModerationRemainUsage: d,
    textModerationList: L,
    textModerationTotal: h,
    textModerationPageNum: b,
    textModerationLoading: M,
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
        const t = await G(r, "default", Y.VIOLATION_SUGGESTION_DEFAULT);
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
const c = R("LiveMonitor"), be = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let n = null, ne = !0;
const k = s([]), E = s(!0), F = s(null), oe = s({}), ie = s(null);
let l = null;
const w = s([]), _ = s(1), T = s(!0), x = s(!1);
function I() {
  return l || (l = new J({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: u, pageCursors: r, count: f }) => {
      if (!n)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const d = await X({
        page: u,
        pageCursors: r,
        pageSize: f
      });
      return {
        list: d.lives,
        pageCursors: d.pageCursors,
        hasMoreData: d.hasMoreData
      };
    }
  }), l.subscribe((u) => {
    w.value = u.pageData, _.value = u.currentPage, T.value = u.hasMore, x.value = u.loading, k.value = [...u.pageData];
  }), l);
}
function Me() {
  const u = () => {
    n || (n = new Z({
      onStateChange: (e) => {
        e.liveList !== void 0 && (k.value = e.liveList), e.hasMore !== void 0 && (E.value = e.hasMore), e.currentLive !== void 0 && (F.value = e.currentLive), e.loading !== void 0 && (oe.value = e.loading), e.error !== void 0 && (ie.value = e.error);
      },
      getActive: () => ne
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return A(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), O(() => {
    if (u(), I(), l) {
      const e = l.getSnapshot();
      w.value = e.pageData, _.value = e.currentPage, T.value = e.hasMore, x.value = e.loading;
    }
  }), n || u(), I(), {
    init: (e) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!n, configKeys: Object.keys(e) }), n || (c.warn("useLiveMonitorState", "core is null, initializing..."), u(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!n)), !n) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      n.init(e);
    },
    liveList: k,
    hasMore: E,
    currentLive: F,
    setCurrentLive: (e) => {
      n?.setCurrentLive(e);
    },
    fetchLiveList: async (e) => {
      if (!l)
        return c.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
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
      return w.value;
    },
    createLive: async (e) => {
      if (!n)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const o = await n.createLive(e);
        return i("live_crud", "create", !0, o.liveId), o;
      } catch (o) {
        throw i("live_crud", "create", !1), o;
      }
    },
    updateLive: async (e) => {
      if (!n) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
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
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await n.endLive(e), i("live_crud", "delete", !0, e);
      } catch (o) {
        throw i("live_crud", "delete", !1, e), o;
      }
    },
    fetchLiveDetail: async (e) => n ? n.fetchLiveDetail(e) : (c.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (e) => n ? n.fetchLiveStats(e) : (c.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (e) => {
      if (!n) {
        c.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return n.startPlay(e);
    },
    stopPlay: async (e) => {
      if (!n) {
        c.warn("useLiveMonitorState", "stopPlay: core is null, skipping", e);
        return;
      }
      return n.stopPlay(e);
    }
  };
}
function me() {
  return I(), {
    pageData: w,
    currentPage: _,
    hasMore: T,
    loading: x,
    nextPage: () => l?.nextPage() ?? Promise.resolve(),
    prevPage: () => l?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => l?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => l?.refreshCurrentPage() ?? Promise.resolve(),
    goToPage: (h, b) => l?.goToPage(h, b) ?? Promise.resolve(),
    getSnapshot: () => l?.getSnapshot() ?? {
      pageData: [],
      currentPage: 1,
      hasMore: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
export {
  be as L,
  me as a,
  he as b,
  Me as u
};
