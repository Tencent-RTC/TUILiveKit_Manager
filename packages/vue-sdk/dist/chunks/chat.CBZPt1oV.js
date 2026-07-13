import { ref as i, onUnmounted as D, onMounted as H } from "vue";
import { as as ae, au as oe, br as ne, bJ as ie, bI as se, u as le, m as ue, R as ce, Q as de, p as ve } from "./main-layout.CAk7EHcz.js";
import { c as W, n as fe, j as V, h as o } from "./logger.BVGT9iyh.js";
import "./gift.DfiP9w1k.js";
import { aL as O, aM as ge, aQ as me, aG as Me, I as he, ag as Le, aO as be, af as we, aN as q, ay as G, Y as pe, aP as ye } from "./layout.DpmHfGro.js";
import { s as Ce, t as Se } from "./utils.D0VriO3c.js";
import { C as Pe } from "./chat-state.C2TxLs3S.js";
const c = W("RiskControl");
function qe(s) {
  const { liveId: a, pageSize: f } = s, g = i("cloud"), y = i(!1), C = i(0), b = i(!0), w = i([]), _ = i(0), T = i(1), S = i(!1), r = i([]), d = i([]), m = i(!1), v = i(null);
  let h = !0;
  fe("risk_control");
  const J = () => {
    const e = g.value === "cloud";
    (e ? G : q)({ pageSize: 1 }).then(() => {
      V(e ? "text_moderation" : "text_moderation_custom"), V(e ? "moderation" : "moderation_custom");
    }).catch(() => {
    });
  };
  O().then((e) => {
    h && (g.value = e, J(), e === "custom" && ge().then((t) => {
      h && (b.value = t.Enabled);
    }).catch(() => {
    }));
  }), D(() => {
    h = !1;
  });
  const Y = async () => {
    try {
      const e = await pe();
      return h && (y.value = e > 0, C.value = e), e;
    } catch (e) {
      throw c.error("useRiskControlState", "fetchTextModerationUsage failed:", e), e;
    }
  }, X = async (e = {}) => {
    S.value = !0;
    try {
      let t;
      return g.value === "custom" ? t = await q({ pageSize: f, liveId: a, ...e }) : t = await G({ pageSize: f, liveId: a, ...e }), h && (w.value = t.list || [], _.value = t.total || 0, T.value = e.pageNum || 1), t;
    } catch (t) {
      throw c.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      h && (S.value = !1);
    }
  }, Z = async (e) => {
    try {
      let t = e.ids, P = e.items;
      if (!P) {
        const p = w.value, z = t.map((M) => {
          const L = p.find((E) => E.id === M);
          return {
            id: M,
            content: L?.content ?? M,
            userId: L?.userId ?? "",
            createdAtMs: L?.createdAtMs ?? 0
          };
        }).sort((M, L) => M.createdAtMs - L.createdAtMs);
        t = z.map((M) => M.id), P = z.map(({ id: M, content: L, userId: E }) => ({ id: M, content: L, userId: E }));
      }
      if (g.value === "custom") {
        const p = await be({ ids: t, items: P, liveId: e.liveId ?? a });
        o("moderation", "approve", !0, String(p.success)), p.failed > 0 && c.warn("useRiskControlState", `部分放行失败: 成功 ${p.success}, 失败 ${p.failed}`);
      } else
        await we({ ids: t, items: P, liveId: e.liveId ?? a }), o("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw o("moderation", "approve", !1), c.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, ee = async (e) => {
    try {
      const t = await ye(e);
      return h && (b.value = t.Enabled), o("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw o("moderation", "toggle", !1), c.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, te = async (e) => {
    try {
      await Le({ content: e.content, liveId: e.liveId ?? a }), o("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw o("moderation", "bypass", !1), c.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, re = async (e) => {
    try {
      await O() === "custom" ? await me(e) : await Me(e), o("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw o("moderation", "delete", !1), c.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, x = async () => {
    if (!a) return [];
    try {
      const e = await oe(a);
      return r.value = e, e;
    } catch (e) {
      throw v.value = e, e;
    }
  }, A = async () => {
    if (!a) return [];
    try {
      const e = await ae(a);
      return d.value = e, e;
    } catch (e) {
      throw v.value = e, e;
    }
  };
  return {
    moderationMode: g,
    textModerationAvailable: y,
    textModerationRemainUsage: C,
    customModerationToggleEnabled: b,
    updateCustomModerationToggleEnabled: ee,
    textModerationList: w,
    textModerationTotal: _,
    textModerationPageNum: T,
    textModerationLoading: S,
    fetchTextModerationUsage: Y,
    fetchTextModerationList: X,
    approveTextModerationItems: Z,
    bypassCorrectionKeyword: te,
    muteMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await ue(a, e.memberAccounts, e.muteTime), await x(), o("risk_control", "mute", !0, a);
      } catch (t) {
        throw v.value = t, o("risk_control", "mute", !1, a), c.error("useRiskControlState", "muteMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await le(a, e.memberAccounts), await x(), o("risk_control", "unmute", !0, a);
      } catch (t) {
        throw v.value = t, o("risk_control", "unmute", !1, a), c.error("useRiskControlState", "unmuteMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    banMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await se(a, e.memberAccounts, e.duration, e.reason), await A(), o("risk_control", "ban", !0, a);
      } catch (t) {
        throw v.value = t, o("risk_control", "ban", !1, a), c.error("useRiskControlState", "banMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!a) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await ie(a, e.memberAccounts), await A(), o("risk_control", "unban", !0, a);
      } catch (t) {
        throw v.value = t, o("risk_control", "unban", !1, a), c.error("useRiskControlState", "unbanMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!a) throw new Error("liveId is required");
      try {
        const e = await ne(a, "default", he.VIOLATION_SUGGESTION_DEFAULT);
        return o("risk_control", "violation_warning", !0, a), e;
      } catch (e) {
        throw o("risk_control", "violation_warning", !1, a), c.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    deleteModerationItems: re,
    mutedList: r,
    bannedList: d,
    memberLoading: m,
    memberError: v,
    fetchMutedList: x,
    fetchBannedList: A
  };
}
const u = W("LiveMonitor"), Ge = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let n = null, ke = !0;
const R = i([]), K = i(!0), B = i(null), Ie = i({}), _e = i(null);
let l = null;
const I = i([]), U = i(1), $ = i(!0), N = i(!1);
function F() {
  return l || (l = new de({ pageSize: 8 }), l.subscribe(() => {
    const s = l.getSnapshot();
    I.value = s.list, U.value = s.currentPage, $.value = s.hasMoreData, N.value = s.loading, R.value = [...s.list];
  }), l);
}
function Ke() {
  const s = () => {
    n || (n = new ce({
      onStateChange: (r) => {
        r.liveList !== void 0 && (R.value = r.liveList), r.hasMore !== void 0 && (K.value = r.hasMore), r.currentLive !== void 0 && (B.value = r.currentLive), r.loading !== void 0 && (Ie.value = r.loading), r.error !== void 0 && (_e.value = r.error);
      },
      getActive: () => ke
    }), u.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return D(() => {
    u.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), H(() => {
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
    hasMore: K,
    currentLive: B,
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
        const d = await n.createLive(r);
        return o("live_crud", "create", !0, d.liveId), d;
      } catch (d) {
        throw o("live_crud", "create", !1), d;
      }
    },
    updateLive: async (r) => {
      if (!n) {
        u.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await n.updateLive(r), o("live_crud", "update", !0, r.liveId);
      } catch (d) {
        throw o("live_crud", "update", !1, r.liveId), d;
      }
    },
    endLive: async (r) => {
      if (!n) {
        u.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await n.endLive(r), o("live_crud", "delete", !0, r);
      } catch (d) {
        throw o("live_crud", "delete", !1, r), d;
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
function Be() {
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
const j = i(!1), Q = i(null);
function Te() {
  if (!k) {
    k = new Pe({});
    const { state$: s, destroy$: a } = k.observeState();
    ve(
      s,
      Se(a),
      Ce((f) => {
        j.value = f.sending, Q.value = f.error;
      })
    );
  }
  return k;
}
function He() {
  const s = Te();
  return H(() => {
    s.addActive();
  }), D(() => {
    s.removeActive();
  }), {
    sending: j,
    error: Q,
    sendAdminMessage: async (f, g) => s.sendAdminMessage(f, g)
  };
}
export {
  Ge as L,
  Ke as a,
  Be as b,
  qe as c,
  He as u
};
