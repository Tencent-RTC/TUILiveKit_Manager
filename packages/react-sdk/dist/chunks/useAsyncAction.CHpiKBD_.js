import { ref as i, onUnmounted as E, onMounted as _ } from "vue";
import { L as k } from "./LiveMonitorCore.CegVg34F.js";
import { r as s } from "./en-US.BT81VsgK.js";
import { P as x } from "./PaginatedListController.CMoH1c8B.js";
import { Q as A } from "./main-layout.qKCc3UXK.js";
import { MessagePlugin as w } from "tdesign-vue-next";
const V = {
  LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED"
};
let t = null, T = !0;
const d = i([]), C = i(!0), S = i(null), z = i({}), F = i(null);
let r = null;
const L = i([]), p = i(1), h = i(!0), M = i(!1);
function P() {
  return r || (r = new x({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: o, pageCursors: l, count: c }) => {
      if (!t)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const a = await A({
        page: o,
        pageCursors: l,
        pageSize: c
      });
      return {
        list: a.lives,
        pageCursors: a.pageCursors,
        hasMoreData: a.hasMoreData
      };
    }
  }), r.subscribe((o) => {
    L.value = o.pageData, p.value = o.currentPage, h.value = o.hasMore, M.value = o.loading, d.value = [...o.pageData];
  }), r);
}
function $() {
  const o = () => {
    t || (t = new k({
      onStateChange: (e) => {
        e.liveList !== void 0 && (d.value = e.liveList), e.hasMore !== void 0 && (C.value = e.hasMore), e.currentLive !== void 0 && (S.value = e.currentLive), e.loading !== void 0 && (z.value = e.loading), e.error !== void 0 && (F.value = e.error);
      },
      getActive: () => T
    }), console.log("[useLiveMonitorState] Core initialized (singleton)"));
  };
  return E(() => {
    console.log("[useLiveMonitorState] Component unmounted, core kept for other consumers");
  }), _(() => {
    if (o(), P(), r) {
      const e = r.getSnapshot();
      L.value = e.pageData, p.value = e.currentPage, h.value = e.hasMore, M.value = e.loading;
    }
  }), t || o(), P(), {
    init: (e) => {
      if (console.log("[useLiveMonitorState] init called", { hasCore: !!t, configKeys: Object.keys(e) }), t || (console.warn("[useLiveMonitorState] core is null, initializing..."), o(), console.log("[useLiveMonitorState] after initCore, hasCore:", !!t)), !t) {
        console.error("[useLiveMonitorState] core is still null after initCore! Cannot initialize.");
        return;
      }
      t.init(e), r?.goToFirstPage().catch((n) => {
        console.error("[useLiveMonitorState] Failed to load first page:", n);
      });
    },
    liveList: d,
    hasMore: C,
    currentLive: S,
    setCurrentLive: (e) => {
      t?.setCurrentLive(e);
    },
    fetchLiveList: async (e) => {
      if (!r)
        return console.warn("[useLiveMonitorState] fetchLiveList: controller is null, returning empty list"), [];
      switch (e?.action) {
        case "first":
          await r.goToFirstPage();
          break;
        case "prev":
          await r.prevPage();
          break;
        default:
          await r.nextPage();
          break;
      }
      return L.value;
    },
    createLive: async (e) => {
      if (!t)
        throw console.warn("[useLiveMonitorState] createLive: core is null, cannot create"), new Error("LiveMonitorCore not initialized");
      try {
        const n = await t.createLive(e);
        return s("live_crud", "create", !0, n.liveId), n;
      } catch (n) {
        throw s("live_crud", "create", !1), n;
      }
    },
    updateLive: async (e) => {
      if (!t) {
        console.warn("[useLiveMonitorState] updateLive: core is null, skipping");
        return;
      }
      try {
        await t.updateLive(e), s("live_crud", "update", !0, e.liveId);
      } catch (n) {
        throw s("live_crud", "update", !1, e.liveId), n;
      }
    },
    endLive: async (e) => {
      if (!t) {
        console.warn("[useLiveMonitorState] endLive: core is null, skipping");
        return;
      }
      try {
        await t.endLive(e), s("live_crud", "delete", !0, e);
      } catch (n) {
        throw s("live_crud", "delete", !1, e), n;
      }
    },
    fetchLiveDetail: async (e) => t ? t.fetchLiveDetail(e) : (console.warn("[useLiveMonitorState] fetchLiveDetail: core is null, returning null"), null),
    fetchLiveStats: async (e) => t ? t.fetchLiveStats(e) : (console.warn("[useLiveMonitorState] fetchLiveStats: core is null, returning empty object"), {}),
    startPlay: async (e) => {
      if (!t) {
        console.warn("[useLiveMonitorState] startPlay: core is null, skipping");
        return;
      }
      return t.startPlay(e);
    },
    stopPlay: async (e) => {
      if (!t) {
        console.warn("[useLiveMonitorState] stopPlay: core is null, skipping", e);
        return;
      }
      return t.stopPlay(e);
    }
  };
}
function B() {
  return P(), {
    pageData: L,
    currentPage: p,
    hasMore: h,
    loading: M,
    nextPage: () => r?.nextPage() ?? Promise.resolve(),
    prevPage: () => r?.prevPage() ?? Promise.resolve(),
    goToFirstPage: () => r?.goToFirstPage() ?? Promise.resolve(),
    refreshCurrentPage: () => r?.refreshCurrentPage() ?? Promise.resolve()
  };
}
function K(o) {
  const { action: l, onSuccess: c, onError: g, successMessage: a, errorMessage: f } = o, u = i(!1);
  let v = !1;
  return { loading: u, execute: async (...y) => {
    if (v) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    v = !0, u.value = !0;
    try {
      const e = await l(...y);
      return a && w.success(a), c?.(e), e;
    } catch (e) {
      const n = e instanceof Error ? e : new Error(String(e)), D = f ? `${f}: ${n.message}` : n.message;
      w.error(D), g?.(n);
      return;
    } finally {
      v = !1, u.value = !1;
    }
  }, reset: () => {
    v = !1, u.value = !1;
  } };
}
export {
  V as L,
  $ as a,
  B as b,
  K as u
};
