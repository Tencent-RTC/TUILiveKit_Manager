import { az as v, Y as s, a as d, r as I } from "./en-US.DXdmRfHg.js";
import { aC as A, aD as M, aE as y, aF as O, aG as R, I as L, ao as N, Q as V, n as p, E as P, ab as w, aq as F, ap as k, a2 as W, k as x } from "./main-layout.Bx74vUBv.js";
import { c as H } from "./index.B5lyUA6W.js";
import { a as m } from "./error-message.B5ukTZpY.js";
const U = 70102;
function T(o) {
  return `live_obs_${o}`;
}
function X(o) {
  const t = /* @__PURE__ */ new Set();
  return o?.forEach((e) => {
    e.Member_Account && t.add(e.Member_Account);
  }), t;
}
function C(o) {
  return o || null;
}
async function S(o, t) {
  const [e, a] = await Promise.all([
    O(o).then((r) => r.Response?.RobotList_Account || []).catch(() => []),
    R(o).then((r) => X(r.Response?.SeatList)).catch(() => /* @__PURE__ */ new Set())
  ]);
  return {
    hasRobot: e.includes(t),
    onSeat: a.has(t)
  };
}
async function z(o) {
  const { liveId: t, anchorId: e, onStatusChange: a, messages: r = {} } = o, i = T(e), c = r.getStreamInfoFailed || "Get Stream Info Failed";
  let n = null, f = "";
  try {
    const { hasRobot: l, onSeat: E } = await S(t, i);
    let g = E;
    if (!l) {
      a?.("creating");
      const h = await A(i, `OBS Robot ${i}`);
      if (h.ErrorCode !== 0 && h.Error !== 0 && h.ErrorCode !== U)
        throw new Error(h.ErrorInfo || r.importAccountFailed || "Import Account Failed");
      const _ = await M(t, [i]);
      if (_.ErrorCode !== 0)
        throw new Error(_.ErrorInfo || r.addRobotFailed || "Add Robot Failed");
      g = (await S(t, i)).onSeat;
    }
    if (!g) {
      a?.("seating");
      const h = await y(t, i);
      if (h.ErrorCode !== 0)
        throw new Error(h.ErrorInfo || r.pickSeatFailed || "Pick Seat Failed");
    }
    a?.("ready");
  } catch (l) {
    console.error("OBS setup failed:", l);
    const E = (l instanceof Error ? l.message : "") || r.setupFailed || "OBS Setup Failed";
    return a?.("error"), {
      robotId: i,
      streamInfo: n,
      streamInfoError: f,
      setupError: E,
      status: "error",
      configuredSuccessfully: !1
    };
  }
  try {
    const l = await v(t, i);
    n = C(l), n || (f = c);
  } catch (l) {
    f = (l instanceof Error ? l.message : "") || c;
  }
  return {
    robotId: i,
    streamInfo: n,
    streamInfoError: f,
    setupError: "",
    status: "ready",
    configuredSuccessfully: !0
  };
}
async function B(o) {
  const { liveId: t, anchorId: e, getStreamInfoFailedMessage: a = "Get Stream Info Failed" } = o, r = T(e);
  try {
    const { hasRobot: i, onSeat: c } = await S(t, r);
    if (!i || !c)
      return {
        robotId: r,
        hasRobot: i,
        onSeat: c,
        streamInfo: null,
        streamInfoError: "",
        status: "none",
        errorMessage: ""
      };
    try {
      const n = C(await v(t, r));
      return {
        robotId: r,
        hasRobot: i,
        onSeat: c,
        streamInfo: n,
        streamInfoError: n ? "" : a,
        status: "ready",
        errorMessage: ""
      };
    } catch (n) {
      return {
        robotId: r,
        hasRobot: i,
        onSeat: c,
        streamInfo: null,
        streamInfoError: (n instanceof Error ? n.message : "") || a,
        status: "ready",
        errorMessage: ""
      };
    }
  } catch (i) {
    return {
      robotId: r,
      hasRobot: !1,
      onSeat: !1,
      streamInfo: null,
      streamInfoError: "",
      status: "error",
      errorMessage: (i instanceof Error ? i.message : "") || ""
    };
  }
}
const u = {
  /** 直播 ID 列最大宽度 */
  LIVE_ID_MAX_WIDTH: 150,
  /** 主播 ID 列最大宽度 */
  ANCHOR_ID_MAX_WIDTH: 150,
  /** 直播标题列最大宽度 */
  LIVE_TITLE_MAX_WIDTH: 300,
  /** 封面图列固定宽度 */
  COVER_WIDTH: 150,
  /** 创建时间列固定宽度 */
  CREATED_AT_WIDTH: 200,
  /** 额外列固定宽度 */
  EXTRA_COLUMN_WIDTH: 160,
  /** 操作列最大宽度 */
  ACTIONS_MAX_WIDTH: 420
};
function j(o) {
  const t = [
    { key: "liveId", i18nKey: s.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: u.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: s.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: u.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: s.COVER_IMAGE, className: "col-cover", width: u.COVER_WIDTH },
    { key: "anchor", i18nKey: s.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: u.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: s.CREATE_TIME, className: "live-list-col-time", width: u.CREATED_AT_WIDTH }
  ];
  return o.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: u.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: s.ACTIONS, className: "live-list-col-action", maxWidth: u.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function J(o) {
  const { live: t, t: e, onEnter: a, onDetail: r, onEdit: i, onDelete: c } = o;
  return [
    { key: "enter", label: e(s.ENTER_LIVE), title: e(s.ENTER_LIVE), onClick: () => a(t.liveId) },
    { key: "detail", label: e(s.LIVE_DETAILS), title: e(s.LIVE_DETAILS), onClick: () => r(t) },
    { key: "edit", label: e(s.EDIT), title: e(s.EDIT), onClick: () => i(t) },
    { key: "delete", label: e(s.DISSOLVE), title: e(s.DISSOLVE), danger: !0, onClick: () => c(t) }
  ];
}
async function G(o, t) {
  const e = o.anchor?.userId || "", a = await B({
    liveId: o.liveId,
    anchorId: e,
    getStreamInfoFailedMessage: t(s.GET_STREAM_INFO_FAILED)
  }), r = {
    visible: !0,
    live: o,
    robotId: a.robotId,
    streamInfo: null,
    robotStatus: "checking",
    robotStatusText: "",
    actionLoading: ""
  };
  return a.status === "ready" ? {
    snapshot: {
      ...r,
      robotStatus: "ready",
      robotStatusText: t(s.OBS_READY),
      streamInfo: a.streamInfo
    },
    toastError: a.streamInfoError || void 0
  } : a.status === "none" ? {
    snapshot: {
      ...r,
      robotStatus: "none",
      robotStatusText: t(s.OBS_SETUP_FAILED)
    }
  } : {
    snapshot: {
      ...r,
      robotStatus: "error",
      robotStatusText: t(s.REQUEST_FAILED, {
        error: a.errorMessage || t(s.NETWORK_ERROR)
      })
    }
  };
}
const b = {
  visible: !1,
  live: null,
  robotId: "",
  streamInfo: null,
  robotStatus: "checking",
  robotStatusText: "",
  actionLoading: ""
}, D = {
  visible: !1,
  title: "",
  content: "",
  liveId: ""
};
class Z {
  constructor(t) {
    this.opts = t, this.state = {
      lives: [],
      loading: !1,
      refreshing: !1,
      currentPage: 1,
      hasMoreData: !0,
      searchInput: "",
      obsModal: { ...b },
      confirmDialog: { ...D },
      isCreateModalVisible: !1,
      isEditModalVisible: !1,
      editingLive: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.pageCursors = L(), this.destroyed = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
      this.listeners.delete(e);
    });
  }
  setState(t) {
    this.destroyed || (this.state = { ...this.state, ...t }, this.notify());
  }
  notify() {
    this.listeners.forEach((t) => t());
  }
  dispose() {
    this.destroyed = !0, this.listeners.clear();
  }
  // -------- 列表加载 --------
  async init() {
    const t = N();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await V({
        page: t,
        pageCursors: this.pageCursors
      });
      this.pageCursors = e.pageCursors, this.setState({
        lives: e.lives,
        currentPage: e.currentPage,
        hasMoreData: e.hasMoreData
      });
    } catch (e) {
      console.error("加载直播列表失败:", e);
      const a = this.opts.t(s.LOAD_LIVE_LIST_FAILED);
      e instanceof p ? this.opts.toast.error(m(e.errorCode, e.errorInfo, a)) : this.opts.toast.error(a);
    } finally {
      this.setState({ loading: !1 });
    }
  }
  async refresh() {
    this.setState({ refreshing: !0 });
    try {
      await this.loadPage(this.state.currentPage);
    } finally {
      this.setState({ refreshing: !1 });
    }
  }
  goToPage(t) {
    P({
      targetPage: t,
      currentPage: this.state.currentPage,
      hasMoreData: this.state.hasMoreData
    }) && (d("ui_action", "pagination", String(t)), this.loadPage(t));
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    this.setState({ searchInput: t });
  }
  isSearchInputTooLong() {
    return w(this.state.searchInput, x);
  }
  async search() {
    const t = this.state.searchInput.trim();
    if (t) {
      if (this.isSearchInputTooLong()) {
        this.opts.toast.error(this.opts.t(s.INPUT_TOO_LONG));
        return;
      }
      this.setState({ loading: !0 });
      try {
        const e = await F(t);
        e ? (this.setState({
          lives: [e],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.success(this.opts.t(s.SEARCH_SUCCESS)), I("live_search", "search", !0, t)) : (this.setState({
          lives: [],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.error(this.opts.t(s.LIVE_NOT_FOUND)), I("live_search", "search", !1, t));
      } catch (e) {
        if (console.error("搜索直播失败:", e), I("live_search", "search", !1), e instanceof p)
          this.opts.toast.error(m(
            e.errorCode,
            e.errorInfo,
            this.opts.t(s.LIVE_NOT_FOUND)
          ));
        else {
          const a = e?.message || this.opts.t(s.NETWORK_ERROR);
          this.opts.toast.error(this.opts.t(s.SEARCH_FAILED, { error: a }));
        }
      } finally {
        this.setState({ loading: !1 });
      }
    }
  }
  async clearSearch() {
    this.pageCursors = L(), this.setState({
      searchInput: "",
      currentPage: 1,
      hasMoreData: !0
    }), await this.loadPage(1);
  }
  // -------- 进入直播 --------
  enterLive(t) {
    k({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), d("ui_action", "enter_live", t), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await H(t);
    const a = e ?? this.opts.t(s.LIVE_ID);
    this.opts.toast.success(this.opts.t(s.COPY_LABEL_COPIED, { label: a }));
  }
  // -------- OBS 详情弹窗 --------
  async showDetail(t) {
    this.setState({
      obsModal: {
        visible: !0,
        live: t,
        robotId: "",
        streamInfo: null,
        robotStatus: "checking",
        robotStatusText: this.opts.t(s.LOADING),
        actionLoading: "stream"
      }
    });
    const { snapshot: e, toastError: a } = await G(t, this.opts.t);
    this.state.obsModal.visible && this.state.obsModal.live?.liveId === t.liveId && this.setState({ obsModal: e }), a && this.opts.toast.error(a);
  }
  closeDetail() {
    this.setState({ obsModal: { ...b } });
  }
  // -------- 删除确认 --------
  requestDelete(t) {
    this.setState({
      confirmDialog: {
        visible: !0,
        title: this.opts.t(s.DISSOLVE_CONFIRMATION),
        content: this.opts.t(s.DISSOLVE_DESCRIPTION, {
          liveId: t.liveName || this.opts.t(s.UNNAMED_LIVE)
        }),
        liveId: t.liveId
      }
    });
  }
  cancelDelete() {
    this.setState({ confirmDialog: { ...this.state.confirmDialog, visible: !1 } });
  }
  async confirmDelete() {
    const t = this.state.confirmDialog.liveId;
    if (t)
      try {
        await this.opts.endLive(t), this.opts.toast.success(this.opts.t(s.DISSOLVE_SUCCESS)), I("live_crud", "delete", !0, t);
        const e = W({
          currentPage: this.state.currentPage,
          hasMoreData: this.state.hasMoreData,
          livesLength: this.state.lives.length
        });
        await this.loadPage(e);
      } catch (e) {
        console.error("解散直播失败:", e), I("live_crud", "delete", !1, t), this.opts.toast.error(this.opts.t(s.DISSOLVE_FAILED));
      } finally {
        this.setState({ confirmDialog: { ...D } });
      }
  }
  // -------- 创建 / 编辑弹窗 --------
  openCreateModal() {
    this.setState({ isCreateModalVisible: !0 }), d("ui_action", "modal", "open", "create_live");
  }
  closeCreateModal() {
    this.setState({ isCreateModalVisible: !1 }), d("ui_action", "modal", "close", "create_live");
  }
  /** 创建成功后调用，关闭弹窗 + 刷新 */
  onLiveCreated() {
    this.setState({ isCreateModalVisible: !1 }), this.refresh();
  }
  openEditModal(t) {
    this.setState({ isEditModalVisible: !0, editingLive: t }), d("ui_action", "modal", "open", "edit_live");
  }
  closeEditModal() {
    this.setState({ isEditModalVisible: !1 }), d("ui_action", "modal", "close", "edit_live");
  }
  /** 编辑成功后调用，局部更新 lives，避免整页刷新 */
  onLiveEdited(t) {
    const e = this.state.editingLive;
    if (!e) {
      this.setState({ isEditModalVisible: !1 });
      return;
    }
    const a = this.state.lives.map(
      (r) => r.liveId === e.liveId ? { ...r, liveName: t.liveName, coverUrl: t.coverUrl } : r
    );
    this.setState({ isEditModalVisible: !1, lives: a });
  }
}
export {
  Z as L,
  G as a,
  J as b,
  B as c,
  j as g,
  z as s
};
