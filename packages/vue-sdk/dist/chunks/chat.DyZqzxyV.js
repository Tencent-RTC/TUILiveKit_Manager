import { ref as s, onUnmounted as k, onMounted as B, watch as te } from "vue";
import { c0 as N, aZ as O, c1 as U, c2 as re, aF as oe, aH as ne, c7 as ae, bz as ie, bL as se, c4 as le, c3 as ue, u as ce, m as de, ae as ve, c5 as fe, a7 as ge, c6 as me, V as Me, U as Le, p as he } from "./main-layout.DNtgEqmy.js";
import { c as G, n as be, j as q, h as n, k as we } from "./logger.CjN8f6V1.js";
import "./gift.gDHGwpCF.js";
import { I as pe } from "./layout.CpAnx6QV.js";
import { s as ye, t as Ce } from "./utils.BKfUtY2V.js";
import { C as Se } from "./chat-state.tsOhbeDy.js";
const f = G("RiskControl");
function Ue(u) {
  const { liveId: o, pageSize: g } = u, L = s(!1), w = s("cloud"), C = s(!0), h = s([]), p = s(0), _ = s(1), S = s(!1), T = s([]), r = s([]), a = s(!1), d = s(null);
  let M = !0;
  be("risk_control"), N().then(async (e) => {
    if (!M) return;
    w.value = e;
    const t = e === "cloud", y = t ? O : U;
    try {
      const v = await y({ pageSize: g, liveId: o });
      M && (L.value = !0, h.value = v.list || [], p.value = v.total || 0), q(t ? "text_moderation" : "text_moderation_custom"), q(t ? "moderation" : "moderation_custom");
    } catch {
      M && (L.value = !1);
    }
    e === "custom" && re().then((v) => {
      M && (C.value = v.Enabled);
    }).catch(() => {
    });
  }), k(() => {
    M = !1;
  });
  const Z = async (e = {}) => {
    S.value = !0;
    try {
      let t;
      return w.value === "custom" ? t = await U({ pageSize: g, liveId: o, ...e }) : t = await O({ pageSize: g, liveId: o, ...e }), M && (h.value = t.list || [], p.value = t.total || 0, _.value = e.pageNum || 1), t;
    } catch (t) {
      throw f.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      M && (S.value = !1);
    }
  }, J = async (e) => {
    try {
      let t = e.ids, y = e.items;
      if (!y) {
        const v = h.value, z = t.map((m) => {
          const b = v.find((x) => x.id === m);
          return {
            id: m,
            content: b?.content ?? m,
            userId: b?.userId ?? "",
            createdAtMs: b?.createdAtMs ?? 0
          };
        }).sort((m, b) => m.createdAtMs - b.createdAtMs);
        t = z.map((m) => m.id), y = z.map(({ id: m, content: b, userId: x }) => ({ id: m, content: b, userId: x }));
      }
      if (w.value === "custom") {
        const v = await fe({ ids: t, items: y, liveId: e.liveId ?? o });
        n("moderation", "approve", !0, String(v.success)), v.failed > 0 && f.warn("useRiskControlState", `部分放行失败: 成功 ${v.success}, 失败 ${v.failed}`);
      } else
        await ge({ ids: t, items: y, liveId: e.liveId ?? o }), n("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw n("moderation", "approve", !1), f.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, X = async (e) => {
    try {
      const t = await me(e);
      return M && (C.value = t.Enabled), n("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw n("moderation", "toggle", !1), f.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, Y = async (e) => {
    try {
      await ve({ content: e.content, liveId: e.liveId ?? o }), n("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw n("moderation", "bypass", !1), f.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, ee = async (e) => {
    try {
      await N() === "custom" ? await ae(e) : await ie(e), n("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw n("moderation", "delete", !1), f.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, E = async () => {
    if (!o) return [];
    try {
      const e = await ne(o);
      return T.value = e, e;
    } catch (e) {
      throw d.value = e, e;
    }
  }, A = async () => {
    if (!o) return [];
    try {
      const e = await oe(o);
      return r.value = e, e;
    } catch (e) {
      throw d.value = e, e;
    }
  };
  return {
    textModerationAvailable: L,
    moderationMode: w,
    customModerationToggleEnabled: C,
    updateCustomModerationToggleEnabled: X,
    textModerationList: h,
    textModerationTotal: p,
    textModerationPageNum: _,
    textModerationLoading: S,
    fetchTextModerationList: Z,
    approveTextModerationItems: J,
    bypassCorrectionKeyword: Y,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await de(o, e.memberAccounts, e.muteTime), await E(), n("risk_control", "mute", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "mute", !1), f.error("useRiskControlState", "muteMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await ce(o, e.memberAccounts), await E(), n("risk_control", "unmute", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "unmute", !1), f.error("useRiskControlState", "unmuteMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await ue(o, e.memberAccounts, e.duration, e.reason), await A(), n("risk_control", "ban", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "ban", !1), f.error("useRiskControlState", "banMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await le(o, e.memberAccounts), await A(), n("risk_control", "unban", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "unban", !1), f.error("useRiskControlState", "unbanMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await se(o, "default", pe.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw n("risk_control", "violation_warning", !1), f.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    deleteModerationItems: ee,
    mutedList: T,
    bannedList: r,
    memberLoading: a,
    memberError: d,
    fetchMutedList: E,
    fetchBannedList: A
  };
}
const c = G("LiveMonitor"), qe = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let i = null, Pe = !0;
const F = s([]), H = s(!0), K = s(null), ke = s({}), Ie = s(null);
let l = null;
const I = s([]), D = s(1), $ = s(!0), V = s(!1);
function R() {
  return l || (l = new Le({ pageSize: 8 }), l.subscribe(() => {
    const u = l.getSnapshot();
    I.value = u.list, D.value = u.currentPage, $.value = u.hasMoreData, V.value = u.loading, F.value = [...u.list];
  }), l);
}
let W = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const u = document.documentElement.lang;
  u !== W && (W = u, l && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), l.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function He() {
  const u = () => {
    i || (i = new Me({
      onStateChange: (r) => {
        r.liveList !== void 0 && (F.value = r.liveList), r.hasMore !== void 0 && (H.value = r.hasMore), r.currentLive !== void 0 && (K.value = r.currentLive), r.loading !== void 0 && (ke.value = r.loading), r.error !== void 0 && (Ie.value = r.error);
      },
      getActive: () => Pe
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return k(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), B(() => {
    if (u(), R(), l) {
      const a = l.getSnapshot();
      I.value = a.list, D.value = a.currentPage, $.value = a.hasMoreData, V.value = a.loading;
    }
    const r = te(
      () => document.documentElement.lang,
      () => {
        c.info("useLiveMonitorState", "语言切换，重新获取直播列表"), l && l.goToFirstPage();
      }
    );
    k(() => r());
  }), i || u(), R(), {
    init: (r) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!i, configKeys: Object.keys(r) }), i || (c.warn("useLiveMonitorState", "core is null, initializing..."), u(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!i)), !i) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      i.init(r);
    },
    liveList: F,
    hasMore: H,
    currentLive: K,
    setCurrentLive: (r) => {
      i?.setCurrentLive(r);
    },
    fetchLiveList: async (r) => {
      if (!l)
        return c.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
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
        await i.endLive(r), n("live_crud", "delete", !0, r), we("force_stop");
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
function Ke() {
  return R(), {
    pageData: I,
    currentPage: D,
    hasMore: $,
    loading: V,
    nextPage: () => l?.nextPage() ?? Promise.resolve(),
    prevPage: () => l?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => l?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => l?.refresh() ?? Promise.resolve(),
    goToPage: (h, p) => l?.goToPage(h, p) ?? Promise.resolve(),
    getSnapshot: () => l?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
let P = null;
const j = s(!1), Q = s(null);
function _e() {
  if (!P) {
    P = new Se({});
    const { state$: u, destroy$: o } = P.observeState();
    he(
      u,
      Ce(o),
      ye((g) => {
        j.value = g.sending, Q.value = g.error;
      })
    );
  }
  return P;
}
function We() {
  const u = _e();
  return B(() => {
    u.addActive();
  }), k(() => {
    u.removeActive();
  }), {
    sending: j,
    error: Q,
    sendAdminMessage: async (g, L) => u.sendAdminMessage(g, L)
  };
}
export {
  qe as L,
  He as a,
  Ke as b,
  Ue as c,
  We as u
};
