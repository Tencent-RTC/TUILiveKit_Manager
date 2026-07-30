import { a5 as re, t as oe, aw as ne, y as ae, bi as ie, F as se, aS as ue, c as j, a$ as Y, aZ as N, aW as le, aY as n, I as ce, a_ as de, bw as fe, be as ve } from "./chunks/shared-state.LwLSW33A.js";
import { aR as ct, b0 as dt, b1 as ft, bf as vt } from "./chunks/shared-state.LwLSW33A.js";
import { ref as l, computed as S, onUnmounted as A, onMounted as ge, watch as me } from "vue";
import { c0 as V, aV as q, c1 as O, c2 as pe, aD as he, aF as be, c7 as Me, bG as Le, bI as we, c4 as Se, c3 as ye, u as Ce, m as Pe, ah as ke, c5 as Ie, aa as _e, c6 as Te, Z as xe, Y as Ae } from "./chunks/main-layout.BxLEuh4E.js";
import { a as Ee } from "./chunks/useAsyncAction.Btr7ihji.js";
import { u as mt } from "./chunks/useAsyncAction.Btr7ihji.js";
import { g as Z, a as Re, p as Fe, s as Ue } from "./chunks/demo.DEOn6ZLp.js";
import { r as ht } from "./chunks/demo.DEOn6ZLp.js";
import { u as Mt, a as Lt } from "./chunks/useSvgaPlayer.DV00KYFV.js";
import { useUIKit as De } from "@tencentcloud/uikit-base-component-vue3";
const w = l(re());
let W = !1;
function $e() {
  W || (W = !0, ie((a) => {
    w.value = a;
  }));
}
function et() {
  $e();
  const a = S(() => {
    const f = w.value;
    return f.mode === "server" ? !0 : f.mode === "proxy" && !!f.credentials;
  }), o = S(() => w.value.userId || ""), p = S(() => w.value.userName || ""), h = S(() => w.value.sdkAppId || 0), d = S(() => w.value.mode);
  return {
    authState: w,
    isLoggedIn: a,
    currentUserId: o,
    currentUserName: p,
    sdkAppId: h,
    authMode: d,
    checkServerConfig: ae,
    login: async (f = {}) => ue(f),
    logout: () => {
      se();
    },
    getUserProfilePortrait: ne,
    batchGetUserProfilePortrait: oe
  };
}
const v = j("RiskControl");
function tt(a) {
  const { liveId: o, pageSize: p } = a, h = l(!1), d = l("cloud"), M = l(!0), m = l([]), f = l(0), C = l(1), P = l(!1), k = l([]), r = l([]);
  let i = !0;
  Y("risk_control"), V().then(async (e) => {
    if (!i) return;
    d.value = e;
    const t = e === "cloud", y = t ? q : O;
    try {
      const g = await y({ pageSize: p, liveId: o });
      i && (h.value = !0, m.value = g.list || [], f.value = g.total || 0), N(t ? "text_moderation" : "text_moderation_custom"), N(t ? "moderation" : "moderation_custom");
    } catch {
      i && (h.value = !1);
    }
    e === "custom" && pe().then((g) => {
      i && (M.value = g.Enabled);
    }).catch(() => {
    });
  }), A(() => {
    i = !1;
  });
  const Q = async (e = {}) => {
    P.value = !0;
    try {
      let t;
      return d.value === "custom" ? t = await O({ pageSize: p, liveId: o, ...e }) : t = await q({ pageSize: p, liveId: o, ...e }), i && (m.value = t.list || [], f.value = t.total || 0, C.value = e.pageNum || 1), t;
    } catch (t) {
      throw v.error("useRiskControlState", "fetchTextModerationList failed:", t), t;
    } finally {
      i && (P.value = !1);
    }
  }, J = async (e) => {
    try {
      let t = e.ids, y = e.items;
      if (!y) {
        const g = m.value, G = t.map((b) => {
          const L = g.find((x) => x.id === b);
          return {
            id: b,
            content: L?.content ?? b,
            userId: L?.userId ?? "",
            createdAtMs: L?.createdAtMs ?? 0
          };
        }).sort((b, L) => b.createdAtMs - L.createdAtMs);
        t = G.map((b) => b.id), y = G.map(({ id: b, content: L, userId: x }) => ({ id: b, content: L, userId: x }));
      }
      if (d.value === "custom") {
        const g = await Ie({ ids: t, items: y, liveId: e.liveId ?? o });
        n("moderation", "approve", !0, String(g.success)), g.failed > 0 && v.warn("useRiskControlState", `部分放行失败: 成功 ${g.success}, 失败 ${g.failed}`);
      } else
        await _e({ ids: t, items: y, liveId: e.liveId ?? o }), n("moderation", "approve", !0, String(e.ids.length));
    } catch (t) {
      throw n("moderation", "approve", !1), v.error("useRiskControlState", "approveTextModerationItems failed:", t), t;
    }
  }, X = async (e) => {
    try {
      const t = await Te(e);
      return i && (M.value = t.Enabled), n("moderation", "toggle", !0), t.Enabled;
    } catch (t) {
      throw n("moderation", "toggle", !1), v.error("useRiskControlState", "updateCustomModerationToggleEnabled failed:", t), t;
    }
  }, ee = async (e) => {
    try {
      await ke({ content: e.content, liveId: e.liveId ?? o }), n("moderation", "bypass", !0, String(e.content.length));
    } catch (t) {
      throw n("moderation", "bypass", !1), v.error("useRiskControlState", "bypassCorrectionKeyword failed:", t), t;
    }
  }, te = async (e) => {
    try {
      await V() === "custom" ? await Me(e) : await le(e), n("moderation", "delete", !0, String(e.length));
    } catch (t) {
      throw n("moderation", "delete", !1), v.error("useRiskControlState", "deleteModerationItems failed:", t), t;
    }
  }, _ = async () => {
    if (!o) return [];
    try {
      const e = await be(o);
      return k.value = e, e;
    } catch (e) {
      throw v.error("useRiskControlState", "fetchMutedList failed:", e), e;
    }
  }, T = async () => {
    if (!o) return [];
    try {
      const e = await he(o);
      return r.value = e, e;
    } catch (e) {
      throw v.error("useRiskControlState", "fetchBannedList failed:", e), e;
    }
  };
  return {
    textModerationAvailable: h,
    moderationMode: d,
    customModerationToggleEnabled: M,
    updateCustomModerationToggleEnabled: X,
    textModerationList: m,
    textModerationTotal: f,
    textModerationPageNum: C,
    textModerationLoading: P,
    fetchTextModerationList: Q,
    approveTextModerationItems: J,
    bypassCorrectionKeyword: ee,
    muteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await Pe(o, e.memberAccounts, e.muteTime), await _(), n("risk_control", "mute", !0, o);
      } catch (t) {
        throw n("risk_control", "mute", !1), v.error("useRiskControlState", "muteMember failed:", t), t;
      }
    },
    unmuteMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await Ce(o, e.memberAccounts), await _(), n("risk_control", "unmute", !0, o);
      } catch (t) {
        throw n("risk_control", "unmute", !1), v.error("useRiskControlState", "unmuteMember failed:", t), t;
      }
    },
    banMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await ye(o, e.memberAccounts, e.duration, e.reason), await T(), n("risk_control", "ban", !0, o);
      } catch (t) {
        throw n("risk_control", "ban", !1), v.error("useRiskControlState", "banMember failed:", t), t;
      }
    },
    unbanMember: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        await Se(o, e.memberAccounts), await T(), n("risk_control", "unban", !0, o);
      } catch (t) {
        throw n("risk_control", "unban", !1), v.error("useRiskControlState", "unbanMember failed:", t), t;
      }
    },
    sendViolationWarning: async () => {
      if (!o) throw new Error("liveId is required");
      try {
        const e = await we(o, "default", ce.VIOLATION_SUGGESTION_DEFAULT);
        return n("risk_control", "violation_warning", !0, o), e;
      } catch (e) {
        throw n("risk_control", "violation_warning", !1), v.error("useRiskControlState", "sendViolationWarning failed:", e), e;
      }
    },
    sendAdminMessage: async (e) => {
      if (!o) throw new Error("liveId is required");
      try {
        const t = await Le(o, e);
        return n("risk_control", "send_admin_message", !0, o), t;
      } catch (t) {
        throw n("risk_control", "send_admin_message", !1), v.error("useRiskControlState", "sendAdminMessage failed:", t), t;
      }
    },
    deleteModerationItems: te,
    mutedList: k,
    bannedList: r,
    fetchMutedList: _,
    fetchBannedList: T
  };
}
const c = j("LiveMonitor"), rt = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let s = null, Ge = !0;
const E = l([]), z = l(!0), K = l(null), Ne = l({}), Ve = l(null);
let u = null;
const I = l([]), U = l(1), D = l(!0), $ = l(!1);
function R() {
  return u || (u = new Ae({ pageSize: 8 }), u.subscribe(() => {
    const a = u.getSnapshot();
    I.value = a.list, U.value = a.currentPage, D.value = a.hasMoreData, $.value = a.loading, E.value = [...a.list];
  }), u);
}
let B = typeof document < "u" ? document.documentElement.lang : "";
typeof MutationObserver < "u" && new MutationObserver(() => {
  const a = document.documentElement.lang;
  a !== B && (B = a, u && (c.debug("LiveMonitor", "语言切换（module observer），重新获取直播列表"), u.goToFirstPage()));
}).observe(document.documentElement, { attributes: !0, attributeFilter: ["lang"] });
function ot() {
  const a = () => {
    s || (s = new xe({
      onStateChange: (r) => {
        r.liveList !== void 0 && (E.value = r.liveList), r.hasMore !== void 0 && (z.value = r.hasMore), r.currentLive !== void 0 && (K.value = r.currentLive), r.loading !== void 0 && (Ne.value = r.loading), r.error !== void 0 && (Ve.value = r.error);
      },
      getActive: () => Ge
    }), c.debug("useLiveMonitorState", "Core initialized (singleton)"));
  };
  return A(() => {
    c.debug("useLiveMonitorState", "Component unmounted, core kept for other consumers");
  }), ge(() => {
    if (a(), R(), u) {
      const i = u.getSnapshot();
      I.value = i.list, U.value = i.currentPage, D.value = i.hasMoreData, $.value = i.loading;
    }
    const r = me(
      () => document.documentElement.lang,
      () => {
        c.debug("useLiveMonitorState", "语言切换，重新获取直播列表"), u && u.goToFirstPage();
      }
    );
    A(() => r());
  }), s || a(), R(), {
    init: (r) => {
      if (c.debug("useLiveMonitorState", "init called", { hasCore: !!s, configKeys: Object.keys(r) }), s || (c.warn("useLiveMonitorState", "core is null, initializing..."), a(), c.debug("useLiveMonitorState", "after initCore, hasCore:", !!s)), !s) {
        c.error("useLiveMonitorState", "core is still null after initCore! Cannot initialize.");
        return;
      }
      s.init(r);
    },
    liveList: E,
    hasMore: z,
    currentLive: K,
    setCurrentLive: (r) => {
      s?.setCurrentLive(r);
    },
    fetchLiveList: async (r) => {
      if (!u)
        return c.warn("useLiveMonitorState", "fetchLiveList: controller is null, returning empty list"), [];
      switch (r?.action) {
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
      return I.value;
    },
    createLive: async (r) => {
      if (!s)
        throw c.warn("useLiveMonitorState", "createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const i = await s.createLive(r);
        return n("live_crud", "create", !0, i.liveId), Y("create_live"), i;
      } catch (i) {
        throw n("live_crud", "create", !1), i;
      }
    },
    updateLive: async (r) => {
      if (!s) {
        c.warn("useLiveMonitorState", "updateLive: core is null, skipping");
        return;
      }
      try {
        await s.updateLive(r), n("live_crud", "update", !0, r.liveId);
      } catch (i) {
        throw n("live_crud", "update", !1, r.liveId), i;
      }
    },
    endLive: async (r) => {
      if (!s) {
        c.warn("useLiveMonitorState", "endLive: core is null, skipping");
        return;
      }
      try {
        await s.endLive(r), n("live_crud", "delete", !0, r), de("force_stop");
      } catch (i) {
        throw n("live_crud", "delete", !1), i;
      }
    },
    fetchLiveDetail: async (r) => s ? s.fetchLiveDetail(r) : (c.warn("useLiveMonitorState", "fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (r) => s ? s.fetchLiveStats(r) : (c.warn("useLiveMonitorState", "fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (r) => {
      if (!s) {
        c.warn("useLiveMonitorState", "startPlay: core is null, skipping");
        return;
      }
      return s.startPlay(r);
    },
    stopPlay: async (r) => {
      if (!s) {
        c.warn("useLiveMonitorState", "stopPlay: core is null, skipping", r);
        return;
      }
      return s.stopPlay(r);
    }
  };
}
function nt() {
  return R(), {
    pageData: I,
    currentPage: U,
    hasMore: D,
    loading: $,
    nextPage: () => u?.nextPage() ?? Promise.resolve(),
    prevPage: () => u?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => u?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => u?.refresh() ?? Promise.resolve(),
    goToPage: (m, f) => u?.goToPage(m, f) ?? Promise.resolve(),
    getSnapshot: () => u?.getSnapshot() ?? {
      list: [],
      currentPage: 1,
      hasMoreData: !0,
      loading: !1,
      pageCursors: /* @__PURE__ */ new Map([[1, ""]])
    }
  };
}
const F = l(Z());
let H = !1;
function qe() {
  H || (H = !0, Ue(() => {
    F.value = Z();
  }));
}
function at() {
  qe();
  const a = S(() => F.value.uploading), o = S(() => F.value.uploadProgress);
  return {
    uploading: a,
    uploadProgress: o,
    getUploadConfig: Fe,
    uploadResource: Re
  };
}
function it() {
  const { t: a } = De();
  return { t: fe(a) };
}
function st(a) {
  const { confirm: o, onSuccess: p, ...h } = a, d = l(null), M = (i) => {
    d.value = null, p?.(i);
  }, { loading: m, execute: f, reset: C } = Ee({
    ...h,
    onSuccess: M
  });
  return {
    loading: m,
    confirmDialog: d,
    requestConfirm: () => {
      d.value = {
        visible: !0,
        title: o.title,
        content: o.content,
        confirmText: o.confirmText
      };
    },
    cancelConfirm: () => {
      d.value = null;
    },
    executeWithConfirm: async () => {
      try {
        return await f();
      } finally {
        d.value = null;
      }
    },
    reset: C
  };
}
ve("vue");
export {
  rt as LiveListEvent,
  ct as measureAndReport,
  n as reportBusinessOp,
  de as reportEvent,
  dt as reportPageView,
  ft as reportTime,
  ht as resolveDemoTargetPath,
  vt as setReportSource,
  Ee as useAsyncAction,
  et as useAuthState,
  st as useConfirmAction,
  mt as useGiftState,
  ot as useLiveMonitorState,
  nt as usePaginatedList,
  Mt as usePreviewUrl,
  tt as useRiskControlState,
  Lt as useSvgaPlayer,
  it as useT,
  at as useUploadState
};
