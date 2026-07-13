import { useState as d, useRef as _, useEffect as L, useCallback as n } from "react";
import { L as x } from "./LiveMonitorCore.mCNav0QG.js";
import { r as l } from "./en-US.DXdmRfHg.js";
import { P as F } from "./PaginatedListController.CMoH1c8B.js";
import { Q as k } from "./main-layout.Bx74vUBv.js";
import "tdesign-react";
let s = null, E = !0, t = null;
const u = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set();
function z() {
  return t || (t = new F({
    pageSize: 8,
    initialPage: 1,
    fetchPage: async ({ page: r, pageCursors: o, count: g }) => {
      if (!s)
        return { list: [], pageCursors: /* @__PURE__ */ new Map([[1, ""]]), hasMoreData: !1 };
      const c = await k({
        page: r,
        pageCursors: o,
        pageSize: g
      });
      return {
        list: c.lives,
        pageCursors: c.pageCursors,
        hasMoreData: c.hasMoreData
      };
    }
  }), t.subscribe((r) => {
    u.forEach((o) => o(r));
  }), t.subscribe((r) => {
    s && (s.liveList = [...r.pageData]);
  }), t);
}
function Q(r) {
  return u.add(r), t && r(t.getSnapshot()), () => {
    u.delete(r);
  };
}
function j() {
  const [r, o] = d([]), [g, v] = d(!0), [c, p] = d(null), f = _(!0);
  s || (s = new x({
    onStateChange: (e) => {
      h.forEach((a) => a(e));
    },
    getActive: () => E
  })), z(), L(() => {
    f.current = !0;
    const e = (i) => {
      f.current && (i.liveList !== void 0 && o(i.liveList), i.hasMore !== void 0 && v(i.hasMore), i.currentLive !== void 0 && p(i.currentLive));
    };
    h.add(e);
    const a = (i) => {
      f.current && o([...i.pageData]);
    };
    return u.add(a), t && a(t.getSnapshot()), () => {
      f.current = !1, h.delete(e), u.delete(a);
    };
  }, []);
  const S = n((e) => {
    s?.init(e), t?.goToFirstPage().catch((a) => {
      console.error("[useLiveMonitorState] Failed to load first page:", a);
    });
  }, []), b = n(async (e) => {
    if (!t) return [];
    switch (e?.action) {
      case "first":
        await t.goToFirstPage();
        break;
      case "prev":
        await t.prevPage();
        break;
      default:
        await t.nextPage();
        break;
    }
    return t.getSnapshot().pageData;
  }, []), y = n(async (e) => {
    try {
      const a = await s.createLive(e);
      return l("live_crud", "create", !0, a.liveId), a;
    } catch (a) {
      throw l("live_crud", "create", !1), a;
    }
  }, []), w = n(async (e) => {
    try {
      await s.updateLive(e), l("live_crud", "update", !0, e.liveId);
    } catch (a) {
      throw l("live_crud", "update", !1, e.liveId), a;
    }
  }, []), C = n(async (e) => {
    try {
      await s.endLive(e), l("live_crud", "delete", !0, e);
    } catch (a) {
      throw l("live_crud", "delete", !1, e), a;
    }
  }, []), m = n(async (e) => s.fetchLiveDetail(e), []), M = n(async (e) => s.fetchLiveStats(e), []), D = n((e) => {
    s?.setCurrentLive(e);
  }, []), P = n(async (e) => s.stopPlay(e), []), T = n(async (e) => s.startPlay(e), [P]);
  return {
    init: S,
    liveList: r,
    hasMore: g,
    currentLive: c,
    setCurrentLive: D,
    fetchLiveList: b,
    createLive: y,
    updateLive: w,
    endLive: C,
    fetchLiveDetail: m,
    fetchLiveStats: M,
    startPlay: T,
    stopPlay: P
  };
}
function q() {
  const [r, o] = d(
    () => t?.getSnapshot() ?? { pageData: [], currentPage: 1, hasMore: !0, loading: !1 }
  );
  L(() => (u.add(o), t && o(t.getSnapshot()), () => {
    u.delete(o);
  }), []);
  const g = n(() => t?.nextPage() ?? Promise.resolve(), []), v = n(() => t?.prevPage() ?? Promise.resolve(), []), c = n(() => t?.goToFirstPage() ?? Promise.resolve(), []), p = n(() => t?.refreshCurrentPage() ?? Promise.resolve(), []);
  return {
    pageData: r.pageData,
    currentPage: r.currentPage,
    hasMore: r.hasMore,
    loading: r.loading,
    nextPage: g,
    prevPage: v,
    goToFirstPage: c,
    refreshCurrentPage: p
  };
}
export {
  q as a,
  Q as s,
  j as u
};
