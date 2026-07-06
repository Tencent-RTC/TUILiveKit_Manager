import { ref as o, onUnmounted as R, onMounted as $ } from "vue";
import { at as j, av as Q, bs as J, bK as X, bJ as Y, u as Z, m as ee, R as te, Q as re, p as ne } from "./main-layout.CM11iefe.js";
import { c as z, r as s } from "./logger.pnqt7v8K.js";
import "./gift.D1x0weUw.js";
import { R as ae, ac as oe, ab as ie, au as se, U as le } from "./layout.CzmvDFr9.js";
import { s as ue, t as ce } from "./utils.C6Y5FhVw.js";
import { C as ve } from "./chat-state.meTtt18f.js";
const d = z("RiskControl");
function _e(l) {
  const { liveId: n, pageSize: f } = l, m = o(!1), b = o(0), L = o([]), h = o(0), M = o(1), w = o(!1), P = o([]), C = o([]), e = o(!1), i = o(null);
  let p = !0;
  R(() => {
    p = !1;
  });
  const O = async () => {
    try {
      const t = await le();
      return p && (m.value = t > 0, b.value = t), t;
    } catch (t) {
      throw d.error("useRiskControlState", "fetchTextModerationUsage failed:", t), t;
    }
  }, B = async (t = {}) => {
    w.value = !0;
    try {
      const r = await se({ pageSize: f, liveId: n, ...t });
      return p && (L.value = r.list || [], h.value = r.total || 0, M.value = t.pageNum || 1), r;
    } catch (r) {
      throw d.error("useRiskControlState", "fetchTextModerationList failed:", r), r;
    } finally {
      p && (w.value = !1);
    }
  }, G = async (t) => {
    try {
      let r = t.ids, _ = t.items;
      if (!_) {
        const W = L.value, U = r.map((v) => {
          const g = W.find((T) => T.id === v);
          return {
            id: v,
            content: g?.content ?? v,
            userId: g?.userId ?? "",
            createdAtMs: g?.createdAtMs ?? 0
          };
        }).sort((v, g) => v.createdAtMs - g.createdAtMs);
        r = U.map((v) => v.id), _ = U.map(({ id: v, content: g, userId: T }) => ({ id: v, content: g, userId: T }));
      }
      await ie({ ids: r, items: _, liveId: t.liveId ?? n }), s("moderation", "approve", !0, String(t.ids.length));
    } catch (r) {
      throw s("moderation", "approve", !1), d.error("useRiskControlState", "approveTextModerationItems failed:", r), r;
    }
  }, H = async (t) => {
    try {
      await oe({ content: t.content, liveId: t.liveId ?? n }), s("moderation", "bypass", !0, String(t.content.length));
    } catch (r) {
      throw s("moderation", "bypass", !1), d.error("useRiskControlState", "bypassCorrectionKeyword failed:", r), r;
    }
  }, k = async () => {
    if (!n) return [];
    try {
      const t = await Q(n);
      return P.value = t, t;
    } catch (t) {
      throw i.value = t, t;
    }
  }, I = async () => {
    if (!n) return [];
    try {
      const t = await j(n);
      return C.value = t, t;
    } catch (t) {
      throw i.value = t, t;
    }
  };
  return {
    textModerationAvailable: m,
    textModerationRemainUsage: b,
    textModerationList: L,
    textModerationTotal: h,
    textModerationPageNum: M,
    textModerationLoading: w,
    fetchTextModerationUsage: O,
    fetchTextModerationList: B,
    approveTextModerationItems: G,
    bypassCorrectionKeyword: H,
    muteMember: async (t) => {
      if (!n) throw new Error("liveId is required");
      e.value = !0, i.value = null;
      try {
        await ee(n, t.memberAccounts, t.muteTime), await k(), s("risk_control", "mute", !0, n);
      } catch (r) {
        throw i.value = r, s("risk_control", "mute", !1, n), d.error("useRiskControlState", "muteMember failed:", r), r;
      } finally {
        e.value = !1;
      }
    },
    unmuteMember: async (t) => {
      if (!n) throw new Error("liveId is required");
      e.value = !0, i.value = null;
      try {
        await Z(n, t.memberAccounts), await k(), s("risk_control", "unmute", !0, n);
      } catch (r) {
        throw i.value = r, s("risk_control", "unmute", !1, n), d.error("useRiskControlState", "unmuteMember failed:", r), r;
      } finally {
        e.value = !1;
      }
    },
    banMember: async (t) => {
      if (!n) throw new Error("liveId is required");
      e.value = !0, i.value = null;
      try {
        await Y(n, t.memberAccounts, t.duration, t.reason), await I(), s("risk_control", "ban", !0, n);
      } catch (r) {
        throw i.value = r, s("risk_control", "ban", !1, n), d.error("useRiskControlState", "banMember failed:", r), r;
      } finally {
        e.value = !1;
      }
    },
    unbanMember: async (t) => {
      if (!n) throw new Error("liveId is required");
      e.value = !0, i.value = null;
      try {
        await X(n, t.memberAccounts), await I(), s("risk_control", "unban", !0, n);
      } catch (r) {
        throw i.value = r, s("risk_control", "unban", !1, n), d.error("useRiskControlState", "unbanMember failed:", r), r;
      } finally {
        e.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!n) throw new Error("liveId is required");
      try {
        const t = await J(n, "default", ae.VIOLATION_SUGGESTION_DEFAULT);
        return s("risk_control", "violation_warning", !0, n), t;
      } catch (t) {
        throw s("risk_control", "violation_warning", !1, n), d.error("useRiskControlState", "sendViolationWarning failed:", t), t;
      }
    },
    mutedList: P,
    bannedList: C,
    memberLoading: e,
    memberError: i,
    fetchMutedList: k,
    fetchBannedList: I
  };
}
const c = z("LiveMonitor"), Te = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let a = null, de = !0;
const A = o([]), N = o(!0), V = o(null), fe = o({}), ge = o(null);
let u = null;
const S = o([]), E = o(1), F = o(!0), D = o(!1);
function x() {
  return u || (u = new re({ pageSize: 8 }), u.subscribe(() => {
    const l = u.getSnapshot();
    S.value = l.list, E.value = l.currentPage, F.value = l.hasMoreData, D.value = l.loading, A.value = [...l.list];
  }), u);
}
function Ae() {
  const l = () => {
    a || (a = new te({
      onStateChange: (e) => {
        e.liveList !== void 0 && (A.value = e.liveList), e.hasMore !== void 0 && (N.value = e.hasMore), e.currentLive !== void 0 && (V.value = e.currentLive), e.loading !== void 0 && (fe.value = e.loading), e.error !== void 0 && (ge.value = e.error);
      },
      getActive: () => de
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return R(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), $(() => {
    if (l(), x(), u) {
      const e = u.getSnapshot();
      S.value = e.list, E.value = e.currentPage, F.value = e.hasMoreData, D.value = e.loading;
    }
  }), a || l(), x(), {
    init: (e) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!a, configKeys: Object.keys(e) }), a || (c.warn("useLiveMonitorState", "core is null, initializing..."), l(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!a)), !a) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      a.init(e);
    },
    liveList: A,
    hasMore: N,
    currentLive: V,
    setCurrentLive: (e) => {
      a?.setCurrentLive(e);
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
      return S.value;
    },
    createLive: async (e) => {
      if (!a)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const i = await a.createLive(e);
        return s("live_crud", "create", !0, i.liveId), i;
      } catch (i) {
        throw s("live_crud", "create", !1), i;
      }
    },
    updateLive: async (e) => {
      if (!a) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await a.updateLive(e), s("live_crud", "update", !0, e.liveId);
      } catch (i) {
        throw s("live_crud", "update", !1, e.liveId), i;
      }
    },
    endLive: async (e) => {
      if (!a) {
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await a.endLive(e), s("live_crud", "delete", !0, e);
      } catch (i) {
        throw s("live_crud", "delete", !1, e), i;
      }
    },
    fetchLiveDetail: async (e) => a ? a.fetchLiveDetail(e) : (c.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (e) => a ? a.fetchLiveStats(e) : (c.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (e) => {
      if (!a) {
        c.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return a.startPlay(e);
    },
    stopPlay: async (e) => {
      if (!a) {
        c.warn("useLiveMonitorState", "stopPlay: core is null, skipping", e);
        return;
      }
      return a.stopPlay(e);
    }
  };
}
function xe() {
  return x(), {
    pageData: S,
    currentPage: E,
    hasMore: F,
    loading: D,
    nextPage: () => u?.nextPage() ?? Promise.resolve(),
    prevPage: () => u?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => u?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => u?.refresh() ?? Promise.resolve(),
    goToPage: (h, M) => u?.goToPage(h, M) ?? Promise.resolve(),
    getSnapshot: () => u?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
let y = null;
const K = o(!1), q = o(null);
function me() {
  if (!y) {
    y = new ve({});
    const { state$: l, destroy$: n } = y.observeState();
    ne(
      l,
      ce(n),
      ue((f) => {
        K.value = f.sending, q.value = f.error;
      })
    );
  }
  return y;
}
function Re() {
  const l = me();
  return $(() => {
    l.addActive();
  }), R(() => {
    l.removeActive();
  }), {
    sending: K,
    error: q,
    sendAdminMessage: async (f, m) => l.sendAdminMessage(f, m)
  };
}
export {
  Te as L,
  Ae as a,
  xe as b,
  _e as c,
  Re as u
};
