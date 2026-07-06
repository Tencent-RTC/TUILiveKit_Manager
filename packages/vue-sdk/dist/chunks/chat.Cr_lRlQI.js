import { ref as u, onUnmounted as P, onMounted as W, watch as te } from "vue";
import { c0 as V, c1 as re, aF as oe, aH as ne, c7 as ae, bz as ie, bL as se, c4 as le, c3 as ue, u as ce, m as de, ae as ve, c5 as fe, a7 as ge, c2 as N, aZ as O, c6 as me, V as Me, U as he, p as Le } from "./main-layout.mc55E2SN.js";
import { c as B, n as be, j as U, h as a } from "./logger.h-0kjLdM.js";
import "./gift.DWldp-QG.js";
import { I as pe } from "./layout.BIfRE2CE.js";
import { s as we, t as ye } from "./utils.UUWrENpa.js";
import { C as Ce } from "./chat-state.DpE2oTdk.js";
const d = B("RiskControl");
function Oe(l) {
  const { liveId: o, pageSize: v } = l, f = u("cloud"), L = u(!0), b = u([]), p = u(0), w = u(1), y = u(!1), I = u([]), _ = u([]), r = u(!1), n = u(null);
  let M = !0;
  be("risk_control");
  const Q = () => {
    const e = f.value === "cloud";
    (e ? O : N)({ pageSize: 1 }).then(() => {
      U(e ? "text_moderation" : "text_moderation_custom"), U(e ? "moderation" : "moderation_custom");
    }).catch(() => {
    });
  };
  V().then((e) => {
    M && (f.value = e, Q(), e === "custom" && re().then((t) => {
      M && (L.value = t.Enabled);
    }).catch(() => {
    }));
  }), P(() => {
    M = !1;
  });
  const Z = async (e = {}) => {
    y.value = !0;
    try {
      let t;
      return f.value === "custom" ? t = await N({ pageSize: v, liveId: o, ...e }) : t = await O({ pageSize: v, liveId: o, ...e }), M && (b.value = t.list || [], p.value = t.total || 0, w.value = e.pageNum || 1), t;
    } catch (t) {
      throw d.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      M && (y.value = !1);
    }
  }, J = async (e) => {
    try {
      let t = e.ids, C = e.items;
      if (!C) {
        const h = b.value, z = t.map((g) => {
          const m = h.find((A) => A.id === g);
          return {
            id: g,
            content: m?.content ?? g,
            userId: m?.userId ?? "",
            createdAtMs: m?.createdAtMs ?? 0
          };
        }).sort((g, m) => g.createdAtMs - m.createdAtMs);
        t = z.map((g) => g.id), C = z.map(({ id: g, content: m, userId: A }) => ({ id: g, content: m, userId: A }));
      }
      if (f.value === "custom") {
        const h = await fe({ ids: t, items: C, liveId: e.liveId ?? o });
        a("moderation", "approve", !0, String(h.success)), h.failed > 0 && d.warn("useRiskControlState", `部分放行失败: 成功 ${h.success}, 失败 ${h.failed}`);
      } else
        await ge({ ids: t, items: C, liveId: e.liveId ?? o }), a("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw a("moderation", "approve", !1), d.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, X = async (e) => {
    try {
      const t = await me(e);
      return M && (L.value = t.Enabled), a("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw a("moderation", "toggle", !1), d.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, Y = async (e) => {
    try {
      await ve({ content: e.content, liveId: e.liveId ?? o }), a("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw a("moderation", "bypass", !1), d.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, ee = async (e) => {
    try {
      await V() === "custom" ? await ae(e) : await ie(e), a("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw a("moderation", "delete", !1), d.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, T = async () => {
    if (!o) return [];
    try {
      const e = await ne(o);
      return I.value = e, e;
    } catch (e) {
      throw n.value = e, e;
    }
  }, E = async () => {
    if (!o) return [];
    try {
      const e = await oe(o);
      return _.value = e, e;
    } catch (e) {
      throw n.value = e, e;
    }
  };
  return {
    moderationMode: f,
    customModerationToggleEnabled: L,
    updateCustomModerationToggleEnabled: X,
    textModerationList: b,
    textModerationTotal: p,
    textModerationPageNum: w,
    textModerationLoading: y,
    fetchTextModerationList: Z,
    approveTextModerationItems: J,
    bypassCorrectionKeyword: Y,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      r.value = !0, n.value = null;
      try {
        await de(o, e.memberAccounts, e.muteTime), await T(), a("risk_control", "mute", !0, o);
      } catch (t) {
        throw n.value = t, a("risk_control", "mute", !1), d.error("useRiskControlState", "muteMember failed:", t), t;
      } finally {
        r.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      r.value = !0, n.value = null;
      try {
        await ce(o, e.memberAccounts), await T(), a("risk_control", "unmute", !0, o);
      } catch (t) {
        throw n.value = t, a("risk_control", "unmute", !1), d.error("useRiskControlState", "unmuteMember failed:", t), t;
      } finally {
        r.value = !1;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      r.value = !0, n.value = null;
      try {
        await ue(o, e.memberAccounts, e.duration, e.reason), await E(), a("risk_control", "ban", !0, o);
      } catch (t) {
        throw n.value = t, a("risk_control", "ban", !1), d.error("useRiskControlState", "banMember failed:", t), t;
      } finally {
        r.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      r.value = !0, n.value = null;
      try {
        await le(o, e.memberAccounts), await E(), a("risk_control", "unban", !0, o);
      } catch (t) {
        throw n.value = t, a("risk_control", "unban", !1), d.error("useRiskControlState", "unbanMember failed:", t), t;
      } finally {
        r.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await se(o, "default", pe.VIOLATION_SUGGESTION_DEFAULT);
        return a("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw a("risk_control", "violation_warning", !1), d.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    deleteModerationItems: ee,
    mutedList: I,
    bannedList: _,
    memberLoading: r,
    memberError: n,
    fetchMutedList: T,
    fetchBannedList: E
  };
}
const c = B("LiveMonitor"), Ue = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let i = null, Se = !0;
const x = u([]), q = u(!0), H = u(null), Pe = u({}), ke = u(null);
let s = null;
const k = u([]), R = u(1), D = u(!0), $ = u(!1);
function F() {
  return s || (s = new he({ pageSize: 8 }), s.subscribe(() => {
    const l = s.getSnapshot();
    k.value = l.list, R.value = l.currentPage, D.value = l.hasMoreData, $.value = l.loading, x.value = [...l.list];
  }), s);
}
let K = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const l = document.documentElement.lang;
  l !== K && (K = l, s && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), s.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function qe() {
  const l = () => {
    i || (i = new Me({
      onStateChange: (r) => {
        r.liveList !== void 0 && (x.value = r.liveList), r.hasMore !== void 0 && (q.value = r.hasMore), r.currentLive !== void 0 && (H.value = r.currentLive), r.loading !== void 0 && (Pe.value = r.loading), r.error !== void 0 && (ke.value = r.error);
      },
      getActive: () => Se
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return P(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), W(() => {
    if (l(), F(), s) {
      const n = s.getSnapshot();
      k.value = n.list, R.value = n.currentPage, D.value = n.hasMoreData, $.value = n.loading;
    }
    const r = te(
      () => document.documentElement.lang,
      () => {
        c.info("useLiveMonitorState", "语言切换，重新获取直播列表"), s && s.goToFirstPage();
      }
    );
    P(() => r());
  }), i || l(), F(), {
    init: (r) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!i, configKeys: Object.keys(r) }), i || (c.warn("useLiveMonitorState", "core is null, initializing..."), l(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!i)), !i) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      i.init(r);
    },
    liveList: x,
    hasMore: q,
    currentLive: H,
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
      return k.value;
    },
    createLive: async (r) => {
      if (!i)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const n = await i.createLive(r);
        return a("live_crud", "create", !0, n.liveId), n;
      } catch (n) {
        throw a("live_crud", "create", !1), n;
      }
    },
    updateLive: async (r) => {
      if (!i) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await i.updateLive(r), a("live_crud", "update", !0, r.liveId);
      } catch (n) {
        throw a("live_crud", "update", !1, r.liveId), n;
      }
    },
    endLive: async (r) => {
      if (!i) {
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await i.endLive(r), a("live_crud", "delete", !0, r);
      } catch (n) {
        throw a("live_crud", "delete", !1), n;
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
function He() {
  return F(), {
    pageData: k,
    currentPage: R,
    hasMore: D,
    loading: $,
    nextPage: () => s?.nextPage() ?? Promise.resolve(),
    prevPage: () => s?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => s?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => s?.refresh() ?? Promise.resolve(),
    goToPage: (p, w) => s?.goToPage(p, w) ?? Promise.resolve(),
    getSnapshot: () => s?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
let S = null;
const G = u(!1), j = u(null);
function Ie() {
  if (!S) {
    S = new Ce({});
    const { state$: l, destroy$: o } = S.observeState();
    Le(
      l,
      ye(o),
      we((v) => {
        G.value = v.sending, j.value = v.error;
      })
    );
  }
  return S;
}
function Ke() {
  const l = Ie();
  return W(() => {
    l.addActive();
  }), P(() => {
    l.removeActive();
  }), {
    sending: G,
    error: j,
    sendAdminMessage: async (v, f) => l.sendAdminMessage(v, f)
  };
}
export {
  Ue as L,
  qe as a,
  He as b,
  Oe as c,
  Ke as u
};
