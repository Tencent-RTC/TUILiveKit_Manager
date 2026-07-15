import { g as $, a7 as Q, a5 as O, a4 as n, I as Z, a6 as J, aj as X } from "./chunks/layout.Br-W54NR.js";
import { a1 as Ke, a8 as Be, a9 as Ge } from "./chunks/layout.Br-W54NR.js";
import { ref as u, onUnmounted as T, onMounted as Y, watch as ee } from "vue";
import { c7 as V, aZ as q, c8 as z, c9 as te, aF as re, aH as oe, ce as ne, bz as ae, bM as ie, bO as se, cb as le, ca as ue, u as ce, m as de, ae as fe, cc as ve, a7 as ge, cd as me, V as he, U as Me } from "./chunks/main-layout.1w0vpJq1.js";
import { a as Le } from "./chunks/useAsyncAction.E1F28vKl.js";
import { u as je } from "./chunks/useAsyncAction.E1F28vKl.js";
import { u as Ze, a as Je } from "./chunks/useSvgaPlayer.BNISTnSu.js";
import { useUIKit as we } from "@tencentcloud/uikit-base-component-vue3";
import { c as be } from "./chunks/t.QkUmzvcB.js";
const d = $("RiskControl");
function Oe(l) {
  const { liveId: o, pageSize: M } = l, L = u(!1), f = u("cloud"), w = u(!0), g = u([]), h = u(0), y = u(1), C = u(!1), S = u([]), r = u([]);
  let a = !0;
  Q("risk_control"), V().then(async (e) => {
    if (!a) return;
    f.value = e;
    const t = e === "cloud", p = t ? q : z;
    try {
      const v = await p({ pageSize: M, liveId: o });
      a && (L.value = !0, g.value = v.list || [], h.value = v.total || 0), O(t ? "text_moderation" : "text_moderation_custom"), O(t ? "moderation" : "moderation_custom");
    } catch {
      a && (L.value = !1);
    }
    e === "custom" && te().then((v) => {
      a && (w.value = v.Enabled);
    }).catch(() => {
    });
  }), T(() => {
    a = !1;
  });
  const K = async (e = {}) => {
    C.value = !0;
    try {
      let t;
      return f.value === "custom" ? t = await z({ pageSize: M, liveId: o, ...e }) : t = await q({ pageSize: M, liveId: o, ...e }), a && (g.value = t.list || [], h.value = t.total || 0, y.value = e.pageNum || 1), t;
    } catch (t) {
      throw d.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      a && (C.value = !1);
    }
  }, B = async (e) => {
    try {
      let t = e.ids, p = e.items;
      if (!p) {
        const v = g.value, D = t.map((m) => {
          const b = v.find((I) => I.id === m);
          return {
            id: m,
            content: b?.content ?? m,
            userId: b?.userId ?? "",
            createdAtMs: b?.createdAtMs ?? 0
          };
        }).sort((m, b) => m.createdAtMs - b.createdAtMs);
        t = D.map((m) => m.id), p = D.map(({ id: m, content: b, userId: I }) => ({ id: m, content: b, userId: I }));
      }
      if (f.value === "custom") {
        const v = await ve({ ids: t, items: p, liveId: e.liveId ?? o });
        n("moderation", "approve", !0, String(v.success)), v.failed > 0 && d.warn("useRiskControlState", `部分放行失败: 成功 ${v.success}, 失败 ${v.failed}`);
      } else
        await ge({ ids: t, items: p, liveId: e.liveId ?? o }), n("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw n("moderation", "approve", !1), d.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, G = async (e) => {
    try {
      const t = await me(e);
      return a && (w.value = t.Enabled), n("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw n("moderation", "toggle", !1), d.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, H = async (e) => {
    try {
      await fe({ content: e.content, liveId: e.liveId ?? o }), n("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw n("moderation", "bypass", !1), d.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, j = async (e) => {
    try {
      await V() === "custom" ? await ne(e) : await ae(e), n("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw n("moderation", "delete", !1), d.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, k = async () => {
    if (!o) return [];
    try {
      const e = await oe(o);
      return S.value = e, e;
    } catch (e) {
      throw d.error("useRiskControlState", "fetchMutedList failed:", e), e;
    }
  }, _ = async () => {
    if (!o) return [];
    try {
      const e = await re(o);
      return r.value = e, e;
    } catch (e) {
      throw d.error("useRiskControlState", "fetchBannedList failed:", e), e;
    }
  };
  return {
    textModerationAvailable: L,
    moderationMode: f,
    customModerationToggleEnabled: w,
    updateCustomModerationToggleEnabled: G,
    textModerationList: g,
    textModerationTotal: h,
    textModerationPageNum: y,
    textModerationLoading: C,
    fetchTextModerationList: K,
    approveTextModerationItems: B,
    bypassCorrectionKeyword: H,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await de(o, e.memberAccounts, e.muteTime), await k(), n("risk_control", "mute", !0, o);
      } catch (t) {
        throw n("risk_control", "mute", !1), d.error("useRiskControlState", "muteMember failed:", t), t;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await ce(o, e.memberAccounts), await k(), n("risk_control", "unmute", !0, o);
      } catch (t) {
        throw n("risk_control", "unmute", !1), d.error("useRiskControlState", "unmuteMember failed:", t), t;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await ue(o, e.memberAccounts, e.duration, e.reason), await _(), n("risk_control", "ban", !0, o);
      } catch (t) {
        throw n("risk_control", "ban", !1), d.error("useRiskControlState", "banMember failed:", t), t;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await le(o, e.memberAccounts), await _(), n("risk_control", "unban", !0, o);
      } catch (t) {
        throw n("risk_control", "unban", !1), d.error("useRiskControlState", "unbanMember failed:", t), t;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await se(o, "default", Z.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw n("risk_control", "violation_warning", !1), d.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    sendAdminMessage: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        const t = await ie(o, e);
        return n("risk_control", "send_admin_message", !0, o), t;
      } catch (t) {
        throw n("risk_control", "send_admin_message", !1), d.error("useRiskControlState", "sendAdminMessage failed:", t), t;
      }
    },
    deleteModerationItems: j,
    mutedList: S,
    bannedList: r,
    fetchMutedList: k,
    fetchBannedList: _
  };
}
const c = $("LiveMonitor"), Ve = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let i = null, pe = !0;
const x = u([]), N = u(!0), U = u(null), ye = u({}), Ce = u(null);
let s = null;
const P = u([]), A = u(1), R = u(!0), F = u(!1);
function E() {
  return s || (s = new Me({ pageSize: 8 }), s.subscribe(() => {
    const l = s.getSnapshot();
    P.value = l.list, A.value = l.currentPage, R.value = l.hasMoreData, F.value = l.loading, x.value = [...l.list];
  }), s);
}
let W = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const l = document.documentElement.lang;
  l !== W && (W = l, s && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), s.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function qe() {
  const l = () => {
    i || (i = new he({
      onStateChange: (r) => {
        r.liveList !== void 0 && (x.value = r.liveList), r.hasMore !== void 0 && (N.value = r.hasMore), r.currentLive !== void 0 && (U.value = r.currentLive), r.loading !== void 0 && (ye.value = r.loading), r.error !== void 0 && (Ce.value = r.error);
      },
      getActive: () => pe
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return T(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), Y(() => {
    if (l(), E(), s) {
      const a = s.getSnapshot();
      P.value = a.list, A.value = a.currentPage, R.value = a.hasMoreData, F.value = a.loading;
    }
    const r = ee(
      () => document.documentElement.lang,
      () => {
        c.info("useLiveMonitorState", "语言切换，重新获取直播列表"), s && s.goToFirstPage();
      }
    );
    T(() => r());
  }), i || l(), E(), {
    init: (r) => {
      if (c.info("useLiveMonitorState", "init called", { hasCore: !!i, configKeys: Object.keys(r) }), i || (c.warn("useLiveMonitorState", "core is null, initializing..."), l(), c.info("useLiveMonitorState", "after initCore, hasCore:", !!i)), !i) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      i.init(r);
    },
    liveList: x,
    hasMore: N,
    currentLive: U,
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
      return P.value;
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
        await i.endLive(r), n("live_crud", "delete", !0, r), J("force_stop");
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
function ze() {
  return E(), {
    pageData: P,
    currentPage: A,
    hasMore: R,
    loading: F,
    nextPage: () => s?.nextPage() ?? Promise.resolve(),
    prevPage: () => s?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => s?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => s?.refresh() ?? Promise.resolve(),
    goToPage: (g, h) => s?.goToPage(g, h) ?? Promise.resolve(),
    getSnapshot: () => s?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
function Ne() {
  const { t: l } = we();
  return { t: be(l) };
}
function Ue(l) {
  const { confirm: o, onSuccess: M, ...L } = l, f = u(null), w = (a) => {
    f.value = null, M?.(a);
  }, { loading: g, execute: h, reset: y } = Le({
    ...L,
    onSuccess: w
  });
  return {
    loading: g,
    confirmDialog: f,
    requestConfirm: () => {
      f.value = {
        visible: !0,
        title: o.title,
        content: o.content,
        confirmText: o.confirmText
      };
    },
    cancelConfirm: () => {
      f.value = null;
    },
    executeWithConfirm: async () => {
      try {
        return await h();
      } finally {
        f.value = null;
      }
    },
    reset: y
  };
}
X("vue");
export {
  Ve as LiveListEvent,
  Ke as measureAndReport,
  n as reportBusinessOp,
  J as reportEvent,
  Be as reportPageView,
  Ge as reportTime,
  Le as useAsyncAction,
  Ue as useConfirmAction,
  je as useGiftState,
  qe as useLiveMonitorState,
  ze as usePaginatedList,
  Ze as usePreviewUrl,
  Oe as useRiskControlState,
  Je as useSvgaPlayer,
  Ne as useT
};
