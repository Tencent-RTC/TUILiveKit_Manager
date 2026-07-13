import { ref as i, onUnmounted as D, onMounted as B } from "vue";
import { at as te, av as re, bs as ae, bK as ne, bJ as oe, u as ie, m as se, R as le, Q as ue, p as ce } from "./main-layout.CIXEryLk.js";
import { c as G, n as de, j as K, h as o } from "./logger.S-YFOdFg.js";
import "./gift.B14wqitP.js";
import { aK as ve, aL as ge, S as fe, ae as me, aN as he, ad as Me, aM as V, aw as O, W as Le, aO as be } from "./layout.BnSS-XVq.js";
import { s as we, t as pe } from "./utils.StpHZqNO.js";
import { C as ye } from "./chat-state.DzHidbC4.js";
const v = G("RiskControl");
function ze(s) {
  const { liveId: a, pageSize: g } = s, f = i("cloud"), y = i(!1), C = i(0), b = i(!0), w = i([]), _ = i(0), T = i(1), S = i(!1), r = i([]), c = i([]), m = i(!1), d = i(null);
  let M = !0;
  de("risk_control");
  const Q = () => {
    const e = f.value === "cloud";
    (e ? O : V)({ pageSize: 1 }).then(() => {
      K(e ? "text_moderation" : "text_moderation_custom"), K(e ? "moderation" : "moderation_custom");
    }).catch(() => {
    });
  };
  ve().then((e) => {
    M && (f.value = e, Q(), e === "custom" && ge().then((t) => {
      M && (b.value = t.Enabled);
    }).catch(() => {
    }));
  }), D(() => {
    M = !1;
  });
  const J = async () => {
    try {
      const e = await Le();
      return M && (y.value = e > 0, C.value = e), e;
    } catch (e) {
      throw v.error("useRiskControlState", "fetchTextModerationUsage failed:", e), e;
    }
  }, X = async (e = {}) => {
    S.value = !0;
    try {
      let t;
      return f.value === "custom" ? t = await V({ pageSize: g, liveId: a, ...e }) : t = await O({ pageSize: g, liveId: a, ...e }), M && (w.value = t.list || [], _.value = t.total || 0, T.value = e.pageNum || 1), t;
    } catch (t) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      M && (S.value = !1);
    }
  }, Y = async (e) => {
    try {
      let t = e.ids, P = e.items;
      if (!P) {
        const p = w.value, z = t.map((h) => {
          const L = p.find((E) => E.id === h);
          return {
            id: h,
            content: L?.content ?? h,
            userId: L?.userId ?? "",
            createdAtMs: L?.createdAtMs ?? 0
          };
        }).sort((h, L) => h.createdAtMs - L.createdAtMs);
        t = z.map((h) => h.id), P = z.map(({ id: h, content: L, userId: E }) => ({ id: h, content: L, userId: E }));
      }
      if (f.value === "custom") {
        const p = await he({ ids: t, items: P, liveId: e.liveId ?? a });
        o("moderation", "approve", !0, String(p.success)), p.failed > 0 && v.warn("useRiskControlState", `部分放行失败: 成功 ${p.success}, 失败 ${p.failed}`);
      } else
        await Me({ ids: t, items: P, liveId: e.liveId ?? a }), o("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw o("moderation", "approve", !1), v.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, Z = async (e) => {
    try {
      const t = await be(e);
      return M && (b.value = t.Enabled), o("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw o("moderation", "toggle", !1), v.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, ee = async (e) => {
    try {
      await me({ content: e.content, liveId: e.liveId ?? a }), o("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw o("moderation", "bypass", !1), v.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, x = async () => {
    if (!a) return [];
    try {
      const e = await re(a);
      return r.value = e, e;
    } catch (e) {
      throw d.value = e, e;
    }
  }, A = async () => {
    if (!a) return [];
    try {
      const e = await te(a);
      return c.value = e, e;
    } catch (e) {
      throw d.value = e, e;
    }
  };
  return {
    moderationMode: f,
    textModerationAvailable: y,
    textModerationRemainUsage: C,
    customModerationToggleEnabled: b,
    updateCustomModerationToggleEnabled: Z,
    textModerationList: w,
    textModerationTotal: _,
    textModerationPageNum: T,
    textModerationLoading: S,
    fetchTextModerationUsage: J,
    fetchTextModerationList: X,
    approveTextModerationItems: Y,
    bypassCorrectionKeyword: ee,
    muteMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, d.value = null;
      try {
        await se(a, e.memberAccounts, e.muteTime), await x(), o("risk_control", "mute", !0, a);
      } catch (t) {
        throw d.value = t, o("risk_control", "mute", !1, a), v.error("useRiskControlState", "muteMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, d.value = null;
      try {
        await ie(a, e.memberAccounts), await x(), o("risk_control", "unmute", !0, a);
      } catch (t) {
        throw d.value = t, o("risk_control", "unmute", !1, a), v.error("useRiskControlState", "unmuteMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    banMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, d.value = null;
      try {
        await oe(a, e.memberAccounts, e.duration, e.reason), await A(), o("risk_control", "ban", !0, a);
      } catch (t) {
        throw d.value = t, o("risk_control", "ban", !1, a), v.error("useRiskControlState", "banMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, d.value = null;
      try {
        await ne(a, e.memberAccounts), await A(), o("risk_control", "unban", !0, a);
      } catch (t) {
        throw d.value = t, o("risk_control", "unban", !1, a), v.error("useRiskControlState", "unbanMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!a) throw new Error("liveId is required");
      try {
        const e = await ae(a, "default", fe.VIOLATION_SUGGESTION_DEFAULT);
        return o("risk_control", "violation_warning", !0, a), e;
      } catch (e) {
        throw o("risk_control", "violation_warning", !1, a), v.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    mutedList: r,
    bannedList: c,
    memberLoading: m,
    memberError: d,
    fetchMutedList: x,
    fetchBannedList: A
  };
}
const u = G("LiveMonitor"), Ke = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let n = null, Ce = !0;
const R = i([]), q = i(!0), W = i(null), Se = i({}), Pe = i(null);
let l = null;
const I = i([]), U = i(1), $ = i(!0), N = i(!1);
function F() {
  return l || (l = new ue({ pageSize: 8 }), l.subscribe(() => {
    const s = l.getSnapshot();
    I.value = s.list, U.value = s.currentPage, $.value = s.hasMoreData, N.value = s.loading, R.value = [...s.list];
  }), l);
}
function Ve() {
  const s = () => {
    n || (n = new le({
      onStateChange: (r) => {
        r.liveList !== void 0 && (R.value = r.liveList), r.hasMore !== void 0 && (q.value = r.hasMore), r.currentLive !== void 0 && (W.value = r.currentLive), r.loading !== void 0 && (Se.value = r.loading), r.error !== void 0 && (Pe.value = r.error);
      },
      getActive: () => Ce
    }), u.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return D(() => {
    u.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), B(() => {
    if (s(), F(), l) {
      const r = l.getSnapshot();
      I.value = r.list, U.value = r.currentPage, $.value = r.hasMoreData, N.value = r.loading;
    }
  }), n || s(), F(), {
    init: (r) => {
      if (u.info("useLiveMonitorState", "init called", { hasCore: !!n, configKeys: Object.keys(r) }), n || (u.warn("useLiveMonitorState", "core is null, initializing..."), s(), u.info("useLiveMonitorState", "after initCore, hasCore:", !!n)), !n) {
        u.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      n.init(r);
    },
    liveList: R,
    hasMore: q,
    currentLive: W,
    setCurrentLive: (r) => {
      n?.setCurrentLive(r);
    },
    fetchLiveList: async (r) => {
      if (!l)
        return u.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
      switch (r?.action) {
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
      return I.value;
    },
    createLive: async (r) => {
      if (!n)
        throw u.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const c = await n.createLive(r);
        return o("live_crud", "create", !0, c.liveId), c;
      } catch (c) {
        throw o("live_crud", "create", !1), c;
      }
    },
    updateLive: async (r) => {
      if (!n) {
        u.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await n.updateLive(r), o("live_crud", "update", !0, r.liveId);
      } catch (c) {
        throw o("live_crud", "update", !1, r.liveId), c;
      }
    },
    endLive: async (r) => {
      if (!n) {
        u.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await n.endLive(r), o("live_crud", "delete", !0, r);
      } catch (c) {
        throw o("live_crud", "delete", !1, r), c;
      }
    },
    fetchLiveDetail: async (r) => n ? n.fetchLiveDetail(r) : (u.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (r) => n ? n.fetchLiveStats(r) : (u.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (r) => {
      if (!n) {
        u.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return n.startPlay(r);
    },
    stopPlay: async (r) => {
      if (!n) {
        u.warn("useLiveMonitorState", "stopPlay: core is null, skipping", r);
        return;
      }
      return n.stopPlay(r);
    }
  };
}
function Oe() {
  return F(), {
    pageData: I,
    currentPage: U,
    hasMore: $,
    loading: N,
    nextPage: () => l?.nextPage() ?? Promise.resolve(),
    prevPage: () => l?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => l?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => l?.refresh() ?? Promise.resolve(),
    goToPage: (b, w) => l?.goToPage(b, w) ?? Promise.resolve(),
    getSnapshot: () => l?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
let k = null;
const H = i(!1), j = i(null);
function ke() {
  if (!k) {
    k = new ye({});
    const { state$: s, destroy$: a } = k.observeState();
    ce(
      s,
      pe(a),
      we((g) => {
        H.value = g.sending, j.value = g.error;
      })
    );
  }
  return k;
}
function qe() {
  const s = ke();
  return B(() => {
    s.addActive();
  }), D(() => {
    s.removeActive();
  }), {
    sending: H,
    error: j,
    sendAdminMessage: async (g, f) => s.sendAdminMessage(g, f)
  };
}
export {
  Ke as L,
  Ve as a,
  Oe as b,
  ze as c,
  qe as u
};
