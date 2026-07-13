import { ref as i, onUnmounted as I, onMounted as G, watch as ne } from "vue";
import { as as ae, au as ie, br as se, bJ as le, bI as ue, u as ce, m as de, R as ve, Q as fe, p as ge } from "./main-layout.DLWT3EVA.js";
import { c as j, n as me, j as O, h as n } from "./logger.D3BLOWQd.js";
import "./gift.DGa9OHLZ.js";
import { aM as V, aN as Me, aR as he, aH as Le, I as be, ah as we, aP as pe, ag as ye, aO as q, az as H, Y as Ce, aQ as Se } from "./layout.B11gjrzt.js";
import { s as Pe, t as ke } from "./utils.CkhUhDme.js";
import { C as Ie } from "./chat-state.DcgAjEAj.js";
const d = j("RiskControl");
function Ke(l) {
  const { liveId: o, pageSize: f } = l, g = i("cloud"), y = i(!1), C = i(0), b = i(!0), w = i([]), T = i(0), E = i(1), S = i(!1), r = i([]), u = i([]), m = i(!1), v = i(null);
  let h = !0;
  me("risk_control");
  const Y = () => {
    const e = g.value === "cloud";
    (e ? H : q)({ pageSize: 1 }).then(() => {
      O(e ? "text_moderation" : "text_moderation_custom"), O(e ? "moderation" : "moderation_custom");
    }).catch(() => {
    });
  };
  V().then((e) => {
    h && (g.value = e, Y(), e === "custom" && Me().then((t) => {
      h && (b.value = t.Enabled);
    }).catch(() => {
    }));
  }), I(() => {
    h = !1;
  });
  const X = async () => {
    try {
      const e = await Ce();
      return h && (y.value = e > 0, C.value = e), e;
    } catch (e) {
      throw d.error("useRiskControlState", "fetchTextModerationUsage failed:", e), e;
    }
  }, Z = async (e = {}) => {
    S.value = !0;
    try {
      let t;
      return g.value === "custom" ? t = await q({ pageSize: f, liveId: o, ...e }) : t = await H({ pageSize: f, liveId: o, ...e }), h && (w.value = t.list || [], T.value = t.total || 0, E.value = e.pageNum || 1), t;
    } catch (t) {
      throw d.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      h && (S.value = !1);
    }
  }, ee = async (e) => {
    try {
      let t = e.ids, P = e.items;
      if (!P) {
        const p = w.value, N = t.map((M) => {
          const L = p.find((R) => R.id === M);
          return {
            id: M,
            content: L?.content ?? M,
            userId: L?.userId ?? "",
            createdAtMs: L?.createdAtMs ?? 0
          };
        }).sort((M, L) => M.createdAtMs - L.createdAtMs);
        t = N.map((M) => M.id), P = N.map(({ id: M, content: L, userId: R }) => ({ id: M, content: L, userId: R }));
      }
      if (g.value === "custom") {
        const p = await pe({ ids: t, items: P, liveId: e.liveId ?? o });
        n("moderation", "approve", !0, String(p.success)), p.failed > 0 && d.warn("useRiskControlState", `部分放行失败: 成功 ${p.success}, 失败 ${p.failed}`);
      } else
        await ye({ ids: t, items: P, liveId: e.liveId ?? o }), n("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw n("moderation", "approve", !1), d.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, te = async (e) => {
    try {
      const t = await Se(e);
      return h && (b.value = t.Enabled), n("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw n("moderation", "toggle", !1), d.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, re = async (e) => {
    try {
      await we({ content: e.content, liveId: e.liveId ?? o }), n("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw n("moderation", "bypass", !1), d.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, oe = async (e) => {
    try {
      await V() === "custom" ? await he(e) : await Le(e), n("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw n("moderation", "delete", !1), d.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, x = async () => {
    if (!o) return [];
    try {
      const e = await ie(o);
      return r.value = e, e;
    } catch (e) {
      throw v.value = e, e;
    }
  }, A = async () => {
    if (!o) return [];
    try {
      const e = await ae(o);
      return u.value = e, e;
    } catch (e) {
      throw v.value = e, e;
    }
  };
  return {
    moderationMode: g,
    textModerationAvailable: y,
    textModerationRemainUsage: C,
    customModerationToggleEnabled: b,
    updateCustomModerationToggleEnabled: te,
    textModerationList: w,
    textModerationTotal: T,
    textModerationPageNum: E,
    textModerationLoading: S,
    fetchTextModerationUsage: X,
    fetchTextModerationList: Z,
    approveTextModerationItems: ee,
    bypassCorrectionKeyword: re,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await de(o, e.memberAccounts, e.muteTime), await x(), n("risk_control", "mute", !0, o);
      } catch (t) {
        throw v.value = t, n("risk_control", "mute", !1, o), d.error("useRiskControlState", "muteMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await ce(o, e.memberAccounts), await x(), n("risk_control", "unmute", !0, o);
      } catch (t) {
        throw v.value = t, n("risk_control", "unmute", !1, o), d.error("useRiskControlState", "unmuteMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await ue(o, e.memberAccounts, e.duration, e.reason), await A(), n("risk_control", "ban", !0, o);
      } catch (t) {
        throw v.value = t, n("risk_control", "ban", !1, o), d.error("useRiskControlState", "banMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      m.value = !0, v.value = null;
      try {
        await le(o, e.memberAccounts), await A(), n("risk_control", "unban", !0, o);
      } catch (t) {
        throw v.value = t, n("risk_control", "unban", !1, o), d.error("useRiskControlState", "unbanMember failed:", t), t;
      } finally {
        m.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await se(o, "default", be.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw n("risk_control", "violation_warning", !1, o), d.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    deleteModerationItems: oe,
    mutedList: r,
    bannedList: u,
    memberLoading: m,
    memberError: v,
    fetchMutedList: x,
    fetchBannedList: A
  };
}
const c = j("LiveMonitor"), We = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let a = null, _e = !0;
const F = i([]), K = i(!0), W = i(null), Te = i({}), Ee = i(null);
let s = null;
const _ = i([]), U = i(1), $ = i(!0), z = i(!1);
function D() {
  return s || (s = new fe({ pageSize: 8 }), s.subscribe(() => {
    const l = s.getSnapshot();
    _.value = l.list, U.value = l.currentPage, $.value = l.hasMoreData, z.value = l.loading, F.value = [...l.list];
  }), s);
}
let B = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const l = document.documentElement.lang;
  l !== B && (B = l, s && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), s.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function Be() {
  const l = () => {
    a || (a = new ve({
      onStateChange: (r) => {
        r.liveList !== void 0 && (F.value = r.liveList), r.hasMore !== void 0 && (K.value = r.hasMore), r.currentLive !== void 0 && (W.value = r.currentLive), r.loading !== void 0 && (Te.value = r.loading), r.error !== void 0 && (Ee.value = r.error);
      },
      getActive: () => _e
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return I(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), G(() => {
    if (l(), D(), s) {
      const u = s.getSnapshot();
      _.value = u.list, U.value = u.currentPage, $.value = u.hasMoreData, z.value = u.loading;
    }
    const r = ne(
      () => document.documentElement.lang,
      () => {
        c.info("useLiveMonitorState", "语言切换，重新获取直播列表"), s && s.goToFirstPage();
      }
    );
    I(() => r());
  }), a || l(), D(), {
    init: (r) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!a, configKeys: Object.keys(r) }), a || (c.warn("useLiveMonitorState", "core is null, initializing..."), l(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!a)), !a) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      a.init(r);
    },
    liveList: F,
    hasMore: K,
    currentLive: W,
    setCurrentLive: (r) => {
      a?.setCurrentLive(r);
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
      if (!a)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const u = await a.createLive(r);
        return n("live_crud", "create", !0, u.liveId), u;
      } catch (u) {
        throw n("live_crud", "create", !1), u;
      }
    },
    updateLive: async (r) => {
      if (!a) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await a.updateLive(r), n("live_crud", "update", !0, r.liveId);
      } catch (u) {
        throw n("live_crud", "update", !1, r.liveId), u;
      }
    },
    endLive: async (r) => {
      if (!a) {
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await a.endLive(r), n("live_crud", "delete", !0, r);
      } catch (u) {
        throw n("live_crud", "delete", !1, r), u;
      }
    },
    fetchLiveDetail: async (r) => a ? a.fetchLiveDetail(r) : (c.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (r) => a ? a.fetchLiveStats(r) : (c.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (r) => {
      if (!a) {
        c.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return a.startPlay(r);
    },
    stopPlay: async (r) => {
      if (!a) {
        c.warn("useLiveMonitorState", "stopPlay: core is null, skipping", r);
        return;
      }
      return a.stopPlay(r);
    }
  };
}
function Ge() {
  return D(), {
    pageData: _,
    currentPage: U,
    hasMore: $,
    loading: z,
    nextPage: () => s?.nextPage() ?? Promise.resolve(),
    prevPage: () => s?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => s?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => s?.refresh() ?? Promise.resolve(),
    goToPage: (b, w) => s?.goToPage(b, w) ?? Promise.resolve(),
    getSnapshot: () => s?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
let k = null;
const Q = i(!1), J = i(null);
function xe() {
  if (!k) {
    k = new Ie({});
    const { state$: l, destroy$: o } = k.observeState();
    ge(
      l,
      ke(o),
      Pe((f) => {
        Q.value = f.sending, J.value = f.error;
      })
    );
  }
  return k;
}
function je() {
  const l = xe();
  return G(() => {
    l.addActive();
  }), I(() => {
    l.removeActive();
  }), {
    sending: Q,
    error: J,
    sendAdminMessage: async (f, g) => l.sendAdminMessage(f, g)
  };
}
export {
  We as L,
  Be as a,
  Ge as b,
  Ke as c,
  je as u
};
