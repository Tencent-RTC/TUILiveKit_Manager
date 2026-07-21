import { h as B, aa as K, a8 as W, ba as Q, a7 as n, I as Y, a9 as Z, bj as J, an as ee } from "./chunks/shared-state.Bf8CkvaR.js";
import { a4 as Be, ab as Ke, ac as Ue } from "./chunks/shared-state.Bf8CkvaR.js";
import { ref as u, onUnmounted as T, onMounted as te, watch as re } from "vue";
import { bW as q, aS as O, bX as V, bY as oe, aB as ne, aD as ae, c1 as ie, bA as se, bC as le, b_ as ue, bZ as ce, u as de, m as fe, af as ve, b$ as ge, a8 as me, c0 as he, X as Me, W as be } from "./chunks/main-layout.OEkSp6vd.js";
import { a as Le } from "./chunks/useAsyncAction.DYLXidOr.js";
import { u as He } from "./chunks/useAsyncAction.DYLXidOr.js";
import { u as Xe, a as Qe } from "./chunks/useSvgaPlayer.CQQmaBMu.js";
import { useUIKit as we } from "@tencentcloud/uikit-base-component-vue3";
const d = B("RiskControl");
function De(l) {
  const { liveId: o, pageSize: M } = l, b = u(!1), f = u("cloud"), L = u(!0), g = u([]), h = u(0), y = u(1), C = u(!1), S = u([]), r = u([]);
  let a = !0;
  K("risk_control"), q().then(async (e) => {
    if (!a) return;
    f.value = e;
    const t = e === "cloud", p = t ? O : V;
    try {
      const v = await p({ pageSize: M, liveId: o });
      a && (b.value = !0, g.value = v.list || [], h.value = v.total || 0), W(t ? "text_moderation" : "text_moderation_custom"), W(t ? "moderation" : "moderation_custom");
    } catch {
      a && (b.value = !1);
    }
    e === "custom" && oe().then((v) => {
      a && (L.value = v.Enabled);
    }).catch(() => {
    });
  }), T(() => {
    a = !1;
  });
  const U = async (e = {}) => {
    C.value = !0;
    try {
      let t;
      return f.value === "custom" ? t = await V({ pageSize: M, liveId: o, ...e }) : t = await O({ pageSize: M, liveId: o, ...e }), a && (g.value = t.list || [], h.value = t.total || 0, y.value = e.pageNum || 1), t;
    } catch (t) {
      throw d.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      a && (C.value = !1);
    }
  }, G = async (e) => {
    try {
      let t = e.ids, p = e.items;
      if (!p) {
        const v = g.value, D = t.map((m) => {
          const w = v.find((I) => I.id === m);
          return {
            id: m,
            content: w?.content ?? m,
            userId: w?.userId ?? "",
            createdAtMs: w?.createdAtMs ?? 0
          };
        }).sort((m, w) => m.createdAtMs - w.createdAtMs);
        t = D.map((m) => m.id), p = D.map(({ id: m, content: w, userId: I }) => ({ id: m, content: w, userId: I }));
      }
      if (f.value === "custom") {
        const v = await ge({ ids: t, items: p, liveId: e.liveId ?? o });
        n("moderation", "approve", !0, String(v.success)), v.failed > 0 && d.warn("useRiskControlState", `部分放行失败: 成功 ${v.success}, 失败 ${v.failed}`);
      } else
        await me({ ids: t, items: p, liveId: e.liveId ?? o }), n("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw n("moderation", "approve", !1), d.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, H = async (e) => {
    try {
      const t = await he(e);
      return a && (L.value = t.Enabled), n("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw n("moderation", "toggle", !1), d.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, j = async (e) => {
    try {
      await ve({ content: e.content, liveId: e.liveId ?? o }), n("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw n("moderation", "bypass", !1), d.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, X = async (e) => {
    try {
      await q() === "custom" ? await ie(e) : await Q(e), n("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw n("moderation", "delete", !1), d.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, k = async () => {
    if (!o) return [];
    try {
      const e = await ae(o);
      return S.value = e, e;
    } catch (e) {
      throw d.error("useRiskControlState", "fetchMutedList failed:", e), e;
    }
  }, _ = async () => {
    if (!o) return [];
    try {
      const e = await ne(o);
      return r.value = e, e;
    } catch (e) {
      throw d.error("useRiskControlState", "fetchBannedList failed:", e), e;
    }
  };
  return {
    textModerationAvailable: b,
    moderationMode: f,
    customModerationToggleEnabled: L,
    updateCustomModerationToggleEnabled: H,
    textModerationList: g,
    textModerationTotal: h,
    textModerationPageNum: y,
    textModerationLoading: C,
    fetchTextModerationList: U,
    approveTextModerationItems: G,
    bypassCorrectionKeyword: j,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await fe(o, e.memberAccounts, e.muteTime), await k(), n("risk_control", "mute", !0, o);
      } catch (t) {
        throw n("risk_control", "mute", !1), d.error("useRiskControlState", "muteMember failed:", t), t;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await de(o, e.memberAccounts), await k(), n("risk_control", "unmute", !0, o);
      } catch (t) {
        throw n("risk_control", "unmute", !1), d.error("useRiskControlState", "unmuteMember failed:", t), t;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await ce(o, e.memberAccounts, e.duration, e.reason), await _(), n("risk_control", "ban", !0, o);
      } catch (t) {
        throw n("risk_control", "ban", !1), d.error("useRiskControlState", "banMember failed:", t), t;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await ue(o, e.memberAccounts), await _(), n("risk_control", "unban", !0, o);
      } catch (t) {
        throw n("risk_control", "unban", !1), d.error("useRiskControlState", "unbanMember failed:", t), t;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await le(o, "default", Y.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw n("risk_control", "violation_warning", !1), d.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    sendAdminMessage: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        const t = await se(o, e);
        return n("risk_control", "send_admin_message", !0, o), t;
      } catch (t) {
        throw n("risk_control", "send_admin_message", !1), d.error("useRiskControlState", "sendAdminMessage failed:", t), t;
      }
    },
    deleteModerationItems: X,
    mutedList: S,
    bannedList: r,
    fetchMutedList: k,
    fetchBannedList: _
  };
}
const c = B("LiveMonitor"), We = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let i = null, pe = !0;
const x = u([]), $ = u(!0), N = u(null), ye = u({}), Ce = u(null);
let s = null;
const P = u([]), A = u(1), R = u(!0), F = u(!1);
function E() {
  return s || (s = new be({ pageSize: 8 }), s.subscribe(() => {
    const l = s.getSnapshot();
    P.value = l.list, A.value = l.currentPage, R.value = l.hasMoreData, F.value = l.loading, x.value = [...l.list];
  }), s);
}
let z = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const l = document.documentElement.lang;
  l !== z && (z = l, s && (c.info("LiveMonitor", "语言切换（module observer），重新获取直播列表"), s.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function qe() {
  const l = () => {
    i || (i = new Me({
      onStateChange: (r) => {
        r.liveList !== void 0 && (x.value = r.liveList), r.hasMore !== void 0 && ($.value = r.hasMore), r.currentLive !== void 0 && (N.value = r.currentLive), r.loading !== void 0 && (ye.value = r.loading), r.error !== void 0 && (Ce.value = r.error);
      },
      getActive: () => pe
    }), c.info("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return T(() => {
    c.info("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), te(() => {
    if (l(), E(), s) {
      const a = s.getSnapshot();
      P.value = a.list, A.value = a.currentPage, R.value = a.hasMoreData, F.value = a.loading;
    }
    const r = re(
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
    hasMore: $,
    currentLive: N,
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
        return n("live_crud", "create", !0, a.liveId), K("create_live"), a;
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
        await i.endLive(r), n("live_crud", "delete", !0, r), Z("force_stop");
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
function Oe() {
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
function Ve() {
  const { t: l } = we();
  return { t: J(l) };
}
function $e(l) {
  const { confirm: o, onSuccess: M, ...b } = l, f = u(null), L = (a) => {
    f.value = null, M?.(a);
  }, { loading: g, execute: h, reset: y } = Le({
    ...b,
    onSuccess: L
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
ee("vue");
export {
  We as LiveListEvent,
  Be as measureAndReport,
  n as reportBusinessOp,
  Z as reportEvent,
  Ke as reportPageView,
  Ue as reportTime,
  Le as useAsyncAction,
  $e as useConfirmAction,
  He as useGiftState,
  qe as useLiveMonitorState,
  Oe as usePaginatedList,
  Xe as usePreviewUrl,
  De as useRiskControlState,
  Qe as useSvgaPlayer,
  Ve as useT
};
