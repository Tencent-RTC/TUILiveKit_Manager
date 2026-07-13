import { ref as o, onUnmounted as D, onMounted as V } from "vue";
import { an as j, ap as Q, bo as J, bF as X, bE as Y, u as Z, m as ee, O as te, bG as re, ao as ae, p as ne, a as oe, t as ie } from "./main-layout.DZAH01ts.js";
import { c as $, r as l } from "./logger.DRLw23-l.js";
import { I as se, n as le, l as ue, a6 as ce, aa as ve } from "./layout.5hoGLPKE.js";
import { C as de } from "./chat-state.BY7fZMmn.js";
const g = $("RiskControl");
function Ie(i) {
  const { liveId: r, pageSize: v } = i, L = o(!1), f = o(0), M = o([]), h = o(0), b = o(1), w = o(!1), C = o([]), S = o([]), e = o(!1), s = o(null);
  let p = !0;
  D(() => {
    p = !1;
  });
  const G = async () => {
    try {
      const t = await ve();
      return p && (L.value = t > 0, f.value = t), t;
    } catch (t) {
      throw g.error("useRiskControlState", "fetchTextModerationUsage failed:", t), t;
    }
  }, K = async (t = {}) => {
    w.value = !0;
    try {
      const a = await ce({ pageSize: v, liveId: r, ...t });
      return p && (M.value = a.list || [], h.value = a.total || 0, b.value = t.pageNum || 1), a;
    } catch (a) {
      throw g.error("useRiskControlState", "fetchTextModerationList failed:", a), a;
    } finally {
      p && (w.value = !1);
    }
  }, B = async (t) => {
    try {
      let a = t.ids, _ = t.items;
      if (!_) {
        const W = M.value, U = a.map((d) => {
          const m = W.find((T) => T.id === d);
          return {
            id: d,
            content: m?.content ?? d,
            userId: m?.userId ?? "",
            createdAtMs: m?.createdAtMs ?? 0
          };
        }).sort((d, m) => d.createdAtMs - m.createdAtMs);
        a = U.map((d) => d.id), _ = U.map(({ id: d, content: m, userId: T }) => ({ id: d, content: m, userId: T }));
      }
      await ue({ ids: a, items: _, liveId: t.liveId ?? r }), l("moderation", "approve", !0, String(t.ids.length));
    } catch (a) {
      throw l("moderation", "approve", !1), g.error("useRiskControlState", "approveTextModerationItems failed:", a), a;
    }
  }, H = async (t) => {
    try {
      await le({ content: t.content, liveId: t.liveId ?? r }), l("moderation", "bypass", !0, String(t.content.length));
    } catch (a) {
      throw l("moderation", "bypass", !1), g.error("useRiskControlState", "bypassCorrectionKeyword failed:", a), a;
    }
  }, k = async () => {
    if (!r) return [];
    try {
      const t = await Q(r);
      return C.value = t, t;
    } catch (t) {
      throw s.value = t, t;
    }
  }, I = async () => {
    if (!r) return [];
    try {
      const t = await j(r);
      return S.value = t, t;
    } catch (t) {
      throw s.value = t, t;
    }
  };
  return {
    textModerationAvailable: L,
    textModerationRemainUsage: f,
    textModerationList: M,
    textModerationTotal: h,
    textModerationPageNum: b,
    textModerationLoading: w,
    fetchTextModerationUsage: G,
    fetchTextModerationList: K,
    approveTextModerationItems: B,
    bypassCorrectionKeyword: H,
    muteMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, s.value = null;
      try {
        await ee(r, t.memberAccounts, t.muteTime), await k(), l("risk_control", "mute", !0, r);
      } catch (a) {
        throw s.value = a, l("risk_control", "mute", !1, r), g.error("useRiskControlState", "muteMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    unmuteMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, s.value = null;
      try {
        await Z(r, t.memberAccounts), await k(), l("risk_control", "unmute", !0, r);
      } catch (a) {
        throw s.value = a, l("risk_control", "unmute", !1, r), g.error("useRiskControlState", "unmuteMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    banMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, s.value = null;
      try {
        await Y(r, t.memberAccounts, t.duration, t.reason), await I(), l("risk_control", "ban", !0, r);
      } catch (a) {
        throw s.value = a, l("risk_control", "ban", !1, r), g.error("useRiskControlState", "banMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    unbanMember: async (t) => {
      if (!r) throw new Error("liveId is required");
      e.value = !0, s.value = null;
      try {
        await X(r, t.memberAccounts), await I(), l("risk_control", "unban", !0, r);
      } catch (a) {
        throw s.value = a, l("risk_control", "unban", !1, r), g.error("useRiskControlState", "unbanMember failed:", a), a;
      } finally {
        e.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!r) throw new Error("liveId is required");
      try {
        const t = await J(r, "default", se.VIOLATION_SUGGESTION_DEFAULT);
        return l("risk_control", "violation_warning", !0, r), t;
      } catch (t) {
        throw l("risk_control", "violation_warning", !1, r), g.error("useRiskControlState", "sendViolationWarning failed:", t), t;
      }
    },
    mutedList: C,
    bannedList: S,
    memberLoading: e,
    memberError: s,
    fetchMutedList: k,
    fetchBannedList: I
  };
}
const c = $("LiveMonitor"), _e = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let n = null, ge = !0;
const A = o([]), z = o(!0), N = o(null), fe = o({}), Le = o(null);
let u = null;
const P = o([]), E = o(1), F = o(!0), R = o(!1);
function x() {
  return u || (u = new re({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: i, pageCursors: r, count: v }) => {
      if (!n)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const f = await ae({
        page: i,
        pageCursors: r,
        pageSize: v
      });
      return {
        list: f.lives,
        pageCursors: f.pageCursors,
        hasMoreData: f.hasMoreData
      };
    }
  }), u.subscribe((i) => {
    P.value = i.pageData, E.value = i.currentPage, F.value = i.hasMore, R.value = i.loading, A.value = [...i.pageData];
  }), u);
}
function Te() {
  const i = () => {
    n || (n = new te({
      onStateChange: (e) => {
        e.liveList !== void 0 && (A.value = e.liveList), e.hasMore !== void 0 && (z.value = e.hasMore), e.currentLive !== void 0 && (N.value = e.currentLive), e.loading !== void 0 && (fe.value = e.loading), e.error !== void 0 && (Le.value = e.error);
      },
      getActive: () => ge
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return D(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), V(() => {
    if (i(), x(), u) {
      const e = u.getSnapshot();
      P.value = e.pageData, E.value = e.currentPage, F.value = e.hasMore, R.value = e.loading;
    }
  }), n || i(), x(), {
    init: (e) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!n, configKeys: Object.keys(e) }), n || (c.warn("useLiveMonitorState", "core is null, initializing..."), i(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!n)), !n) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      n.init(e);
    },
    liveList: A,
    hasMore: z,
    currentLive: N,
    setCurrentLive: (e) => {
      n?.setCurrentLive(e);
    },
    fetchLiveList: async (e) => {
      if (!u)
        return c.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
      switch (e?.action) {
        case "first":
          await u.goToFirstPage();
          break;
        case "prev":
          await u.prevPage();
          break;
        default:
          await u.nextPage();
          break;
      }
      return P.value;
    },
    createLive: async (e) => {
      if (!n)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const s = await n.createLive(e);
        return l("live_crud", "create", !0, s.liveId), s;
      } catch (s) {
        throw l("live_crud", "create", !1), s;
      }
    },
    updateLive: async (e) => {
      if (!n) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await n.updateLive(e), l("live_crud", "update", !0, e.liveId);
      } catch (s) {
        throw l("live_crud", "update", !1, e.liveId), s;
      }
    },
    endLive: async (e) => {
      if (!n) {
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await n.endLive(e), l("live_crud", "delete", !0, e);
      } catch (s) {
        throw l("live_crud", "delete", !1, e), s;
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
function Ae() {
  return x(), {
    pageData: P,
    currentPage: E,
    hasMore: F,
    loading: R,
    nextPage: () => u?.nextPage() ?? Promise.resolve(),
    prevPage: () => u?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => u?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => u?.refreshCurrentPage() ?? Promise.resolve(),
    goToPage: (h, b) => u?.goToPage(h, b) ?? Promise.resolve(),
    getSnapshot: () => u?.getSnapshot() ?? {
      pageData: [],
      currentPage: 1,
      hasMore: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
let y = null;
const O = o(!1), q = o(null);
function me() {
  if (!y) {
    y = new de({});
    const { state$: i, destroy$: r } = y.observeState();
    ne(
      i,
      ie(r),
      oe((v) => {
        O.value = v.sending, q.value = v.error;
      })
    );
  }
  return y;
}
function xe() {
  const i = me();
  return V(() => {
    i.addActive();
  }), D(() => {
    i.removeActive();
  }), {
    sending: O,
    error: q,
    sendAdminMessage: async (v, L) => i.sendAdminMessage(v, L)
  };
}
export {
  _e as L,
  Te as a,
  Ae as b,
  Ie as c,
  xe as u
};
