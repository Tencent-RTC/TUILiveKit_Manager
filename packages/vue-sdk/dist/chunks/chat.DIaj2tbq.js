import { ref as s, onUnmounted as I, onMounted as G, watch as re } from "vue";
import { f as O, c2 as oe, aI as ne, aK as ae, c7 as ie, bB as se, bN as le, c4 as ue, c3 as ce, u as de, m as ve, ah as fe, c5 as ge, aa as me, h as V, i as K, c6 as Me, Y as he, X as Le, p as be } from "./main-layout.BaegCxnU.js";
import { c as H, n as pe, j as q, h as n } from "./logger.DCFRj533.js";
import "./gift.BBstF5zg.js";
import { I as we } from "./layout.DppKPdLU.js";
import { d as ye } from "./index.DOa4Qd0X.js";
import { s as Ce, t as Se } from "./utils.BGTYS6E9.js";
import { C as Pe } from "./chat-state.DEy2P3zk.js";
const v = H("RiskControl");
function Be(u) {
  const { liveId: o, pageSize: f } = u, L = s(!1), m = s("cloud"), w = s(!0), b = s([]), y = s(0), _ = s(1), C = s(!1), T = s([]), r = s([]), a = s(!1), d = s(null);
  let M = !0;
  pe("risk_control"), ye().then((e) => {
    M && (L.value = e);
  });
  const X = () => {
    const e = m.value === "cloud";
    (e ? K : V)({ pageSize: 1 }).then(() => {
      q(e ? "text_moderation" : "text_moderation_custom"), q(e ? "moderation" : "moderation_custom");
    }).catch(() => {
    });
  };
  O().then((e) => {
    M && (m.value = e, X(), e === "custom" && oe().then((t) => {
      M && (w.value = t.Enabled);
    }).catch(() => {
    }));
  }), I(() => {
    M = !1;
  });
  const Y = async (e = {}) => {
    C.value = !0;
    try {
      let t;
      return m.value === "custom" ? t = await V({ pageSize: f, liveId: o, ...e }) : t = await K({ pageSize: f, liveId: o, ...e }), M && (b.value = t.list || [], y.value = t.total || 0, _.value = e.pageNum || 1), t;
    } catch (t) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      M && (C.value = !1);
    }
  }, J = async (e) => {
    try {
      let t = e.ids, S = e.items;
      if (!S) {
        const p = b.value, z = t.map((g) => {
          const h = p.find((x) => x.id === g);
          return {
            id: g,
            content: h?.content ?? g,
            userId: h?.userId ?? "",
            createdAtMs: h?.createdAtMs ?? 0
          };
        }).sort((g, h) => g.createdAtMs - h.createdAtMs);
        t = z.map((g) => g.id), S = z.map(({ id: g, content: h, userId: x }) => ({ id: g, content: h, userId: x }));
      }
      if (m.value === "custom") {
        const p = await ge({ ids: t, items: S, liveId: e.liveId ?? o });
        n("moderation", "approve", !0, String(p.success)), p.failed > 0 && v.warn("useRiskControlState", `部分放行失败: 成功 ${p.success}, 失败 ${p.failed}`);
      } else
        await me({ ids: t, items: S, liveId: e.liveId ?? o }), n("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw n("moderation", "approve", !1), v.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, Z = async (e) => {
    try {
      const t = await Me(e);
      return M && (w.value = t.Enabled), n("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw n("moderation", "toggle", !1), v.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, ee = async (e) => {
    try {
      await fe({ content: e.content, liveId: e.liveId ?? o }), n("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw n("moderation", "bypass", !1), v.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, te = async (e) => {
    try {
      await O() === "custom" ? await ie(e) : await se(e), n("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw n("moderation", "delete", !1), v.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, E = async () => {
    if (!o) return [];
    try {
      const e = await ae(o);
      return T.value = e, e;
    } catch (e) {
      throw d.value = e, e;
    }
  }, A = async () => {
    if (!o) return [];
    try {
      const e = await ne(o);
      return r.value = e, e;
    } catch (e) {
      throw d.value = e, e;
    }
  };
  return {
    textModerationAvailable: L,
    moderationMode: m,
    customModerationToggleEnabled: w,
    updateCustomModerationToggleEnabled: Z,
    textModerationList: b,
    textModerationTotal: y,
    textModerationPageNum: _,
    textModerationLoading: C,
    fetchTextModerationList: Y,
    approveTextModerationItems: J,
    bypassCorrectionKeyword: ee,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await ve(o, e.memberAccounts, e.muteTime), await E(), n("risk_control", "mute", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "mute", !1), v.error("useRiskControlState", "muteMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await de(o, e.memberAccounts), await E(), n("risk_control", "unmute", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "unmute", !1), v.error("useRiskControlState", "unmuteMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await ce(o, e.memberAccounts, e.duration, e.reason), await A(), n("risk_control", "ban", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "ban", !1), v.error("useRiskControlState", "banMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      a.value = !0, d.value = null;
      try {
        await ue(o, e.memberAccounts), await A(), n("risk_control", "unban", !0, o);
      } catch (t) {
        throw d.value = t, n("risk_control", "unban", !1), v.error("useRiskControlState", "unbanMember failed:", t), t;
      } finally {
        a.value = !1;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await le(o, "default", we.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw n("risk_control", "violation_warning", !1), v.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    deleteModerationItems: te,
    mutedList: T,
    bannedList: r,
    memberLoading: a,
    memberError: d,
    fetchMutedList: E,
    fetchBannedList: A
  };
}
const c = H("LiveMonitor"), Ue = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let i = null, Ie = !0;
const F = s([]), B = s(!0), U = s(null), ke = s({}), _e = s(null);
let l = null;
const k = s([]), D = s(1), $ = s(!0), N = s(!1);
function R() {
  return l || (l = new Le({ pageSize: 8 }), l.subscribe(() => {
    const u = l.getSnapshot();
    k.value = u.list, D.value = u.currentPage, $.value = u.hasMoreData, N.value = u.loading, F.value = [...u.list];
  }), l);
}
let W = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const u = document.documentElement.lang;
  u !== W && (W = u, l && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), l.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function We() {
  const u = () => {
    i || (i = new he({
      onStateChange: (r) => {
        r.liveList !== void 0 && (F.value = r.liveList), r.hasMore !== void 0 && (B.value = r.hasMore), r.currentLive !== void 0 && (U.value = r.currentLive), r.loading !== void 0 && (ke.value = r.loading), r.error !== void 0 && (_e.value = r.error);
      },
      getActive: () => Ie
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return I(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), G(() => {
    if (u(), R(), l) {
      const a = l.getSnapshot();
      k.value = a.list, D.value = a.currentPage, $.value = a.hasMoreData, N.value = a.loading;
    }
    const r = re(
      () => document.documentElement.lang,
      () => {
        c.info("useLiveMonitorState", "语言切换，重新获取直播列表"), l && l.goToFirstPage();
      }
    );
    I(() => r());
  }), i || u(), R(), {
    init: (r) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!i, configKeys: Object.keys(r) }), i || (c.warn("useLiveMonitorState", "core is null, initializing..."), u(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!i)), !i) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      i.init(r);
    },
    liveList: F,
    hasMore: B,
    currentLive: U,
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
      return k.value;
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
        await i.endLive(r), n("live_crud", "delete", !0, r);
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
function Ge() {
  return R(), {
    pageData: k,
    currentPage: D,
    hasMore: $,
    loading: N,
    nextPage: () => l?.nextPage() ?? Promise.resolve(),
    prevPage: () => l?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => l?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => l?.refresh() ?? Promise.resolve(),
    goToPage: (b, y) => l?.goToPage(b, y) ?? Promise.resolve(),
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
function Te() {
  if (!P) {
    P = new Pe({});
    const { state$: u, destroy$: o } = P.observeState();
    be(
      u,
      Se(o),
      Ce((f) => {
        j.value = f.sending, Q.value = f.error;
      })
    );
  }
  return P;
}
function He() {
  const u = Te();
  return G(() => {
    u.addActive();
  }), I(() => {
    u.removeActive();
  }), {
    sending: j,
    error: Q,
    sendAdminMessage: async (f, L) => u.sendAdminMessage(f, L)
  };
}
export {
  Ue as L,
  We as a,
  Ge as b,
  Be as c,
  He as u
};
