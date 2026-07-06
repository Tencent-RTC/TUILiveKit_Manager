import { t as ct, c as y, h as A, r as b } from "./logger.DfjyL4S7.js";
import { aG as g, aH as d, L as E, aj as Ct, Z as o, b as vt, aK as U, aw as Et, aJ as At, J as bt, aC as _t, as as Dt, ai as Tt, al as Mt, f as V, q as j } from "./error-message.BVYzOzgW.js";
function Ye(s, t = 0) {
  const e = Number(s);
  return Number.isFinite(e) ? e : t;
}
function We(s, t = !1) {
  return typeof s == "boolean" ? s : typeof s == "number" ? s !== 0 : typeof s == "string" ? s === "true" || s === "1" : t;
}
function wt(s) {
  if (!s) return {};
  if (typeof s == "object" && !Array.isArray(s))
    return Object.fromEntries(
      Object.entries(s).map(([t, e]) => [t, String(e ?? "")])
    );
  if (typeof s != "string") return {};
  try {
    const t = JSON.parse(s);
    if (t && typeof t == "object" && !Array.isArray(t))
      return Object.fromEntries(
        Object.entries(t).map(([e, i]) => [e, String(i ?? "")])
      );
  } catch {
    return {};
  }
  return {};
}
function lt(s) {
  const t = s.RoomId || "", e = s.Owner_Account || "", i = s.OnlineCount || s.MemberCount || 0, r = {
    liveId: t,
    liveName: s.RoomName || "",
    coverUrl: s.CoverURL || "",
    anchor: {
      userId: e,
      nick: e,
      avatarUrl: ""
    },
    onlineCount: i,
    createdAt: s.CreateTime && s.CreateTime > 1e9 ? s.CreateTime : 0,
    category: (s.Category || []).map(String),
    // number[] → string[]
    activityStatus: s.ActivityStatus || 0,
    isMessageDisabled: !1,
    isLikeEnabled: !0,
    isPublicVisible: !0,
    stats: {
      liveId: t,
      viewCount: s.ViewCount ?? 0,
      onlineCount: i,
      likeCount: 0,
      giftCount: 0,
      giftAmount: 0,
      commentCount: 0,
      duration: 0
    }
  };
  if ("RoomType" in s) {
    const a = s;
    return {
      ...r,
      liveType: a.RoomType,
      isSeatEnabled: a.IsSeatEnabled,
      maxSeatCount: a.MaxSeatCount,
      maxMemberCount: a.MaxMemberCount,
      isMessageDisabled: a.IsMessageDisabled || !1,
      isLikeEnabled: a.IsLikeEnabled !== !1,
      // 默认 true
      isPublicVisible: a.IsPublicVisible !== !1,
      // 默认 true
      seatTemplate: a.SeatTemplate,
      customInfo: a.CustomInfo ? wt(a.CustomInfo) : {}
    };
  }
  return r;
}
async function Rt(s = {}) {
  const t = s.next || "0", e = s.count || 20, i = await g(d.fetchLiveList, {
    Next: t,
    Count: e,
    SortDirection: s.sortDirection
  });
  if (i.ErrorCode !== 0)
    throw new E(
      i.ErrorInfo || "",
      i.ErrorCode,
      i
    );
  return {
    list: (i.Response?.RoomList || []).map(
      (a) => lt(a)
    ),
    next: i.Response?.Next || ""
  };
}
async function _(s) {
  const [t, e] = await Promise.all([
    g(d.getRoomInfo, { RoomId: s }),
    g(d.getRoomMetadata, { RoomId: s, Keys: [] })
  ]);
  if (!t.Response?.RoomInfo) return null;
  const i = lt(t.Response.RoomInfo);
  if (e?.Response?.Metadata) {
    const r = { ...i.customInfo || {} };
    (e.Response.Metadata || []).forEach((a) => {
      r[a.Key] = a.Value;
    }), i.customInfo = r;
  }
  return i;
}
async function z(s) {
  return g(d.getLiveStatistic, { RoomId: s });
}
async function Ot(s) {
  return g(d.destroyRoom, { RoomId: s });
}
async function Pt(s) {
  const t = s.liveId || String(Date.now()), e = {
    RoomId: t,
    RoomType: "Live",
    SeatTemplate: s.seatTemplate || "VideoDynamicGrid9Seats",
    Owner_Account: s.anchorId,
    IsUnlimitedRoomEnabled: !0
  };
  if (s.useObsStreaming && (e.KeepOwnerOnSeat = !1), s.liveName && s.liveName.trim() && (e.RoomName = s.liveName), s.coverUrl && s.coverUrl.trim() && (e.CoverURL = s.coverUrl.trim()), s.maxSeatCount && (s.seatTemplate === "AudioSalon" || s.seatTemplate === "Karaoke") && (e.MaxSeatCount = Number(s.maxSeatCount)), await g(d.createLive, { RoomInfo: e }), s.customInfo && Object.keys(s.customInfo).length > 0) {
    const r = Object.entries(s.customInfo).map(([a, n]) => ({ Key: a, Value: n }));
    await g(d.setRoomMetadata, { RoomId: t, Metadata: r });
  }
  const i = await _(t);
  if (!i)
    throw new E("");
  return i;
}
async function Nt(s, t) {
  const e = [], i = { RoomId: s, IsUnlimitedRoomEnabled: !0 };
  if (t.liveName !== void 0 && (i.RoomName = t.liveName), t.coverUrl !== void 0 && (i.CoverURL = t.coverUrl), t.isMessageDisabled !== void 0 && (i.IsMessageDisabled = t.isMessageDisabled), e.push(g(d.updateLiveInfo, { RoomInfo: i })), t.customInfo && Object.keys(t.customInfo).length > 0) {
    const a = Object.entries(t.customInfo).map(([n, c]) => ({ Key: n, Value: c }));
    e.push(g(d.setRoomMetadata, { RoomId: s, Metadata: a }));
  }
  return t.deleteKeys && t.deleteKeys.length > 0 && e.push(g(d.delRoomMetadata, { RoomId: s, Keys: t.deleteKeys })), (await Promise.all(e))[0];
}
async function Ft(s, t, e = 600) {
  return g(d.muteMember, { RoomId: s, MemberList_Account: t, MuteTime: e });
}
async function Gt(s, t) {
  return g(d.muteMember, { RoomId: s, MemberList_Account: t, MuteTime: 0 });
}
async function Ut(s, t, e = 3600, i = "") {
  return g(d.banMember, { RoomId: s, MemberList_Account: t, Duration: e, Reason: i });
}
async function Vt(s, t) {
  return g(d.unbanMember, { RoomId: s, MemberList_Account: t });
}
async function ut(s, t = {}) {
  return g(d.getMutedMemberList, {
    RoomId: s,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function xt(s, t = {}) {
  return g(d.getBannedMemberList, {
    RoomId: s,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function kt(s) {
  return g(d.getRobot, { RoomId: s });
}
async function Bt(s) {
  return g(d.getSeatList, { RoomId: s });
}
async function $t(s, t, e = 0) {
  return g(d.pickUserOnSeat, { RoomId: s, Member_Account: t, Index: e });
}
async function Kt(s, t) {
  return g(d.addRobot, { RoomId: s, RobotList_Account: t });
}
async function Yt(s, t, e) {
  return g(d.importAccount, { UserID: s, Nick: t || "", FaceUrl: "" });
}
async function He(s, t = 50) {
  return Ct(`/chat/${s}/messages`, { limit: t });
}
async function je(s, t) {
  const e = ct().credentials?.userId || "admin";
  return g(d.sendTextMsg, {
    RoomId: s,
    Sender_Account: e,
    TextContent: t,
    MsgPriority: "Normal"
  });
}
async function Wt(s, t, e, i) {
  const r = i || ct().credentials?.userId || "admin";
  return g(d.sendCustomMsg, {
    RoomId: s,
    Sender_Account: r,
    BusinessId: t,
    Data: e
  });
}
async function Ht(s, t) {
  return g(d.updateLiveInfo, {
    RoomInfo: {
      RoomId: s,
      IsMessageDisabled: t,
      IsUnlimitedRoomEnabled: !0
    }
  });
}
async function ze(s, t, e) {
  return g(d.muteMember, {
    RoomId: s,
    MemberList_Account: [t],
    MuteTime: e || 60
  });
}
async function Xe(s, t) {
  return g(d.muteMember, {
    RoomId: s,
    MemberList_Account: [t],
    MuteTime: 0
  });
}
async function jt(s) {
  const [t, e] = await Promise.all([
    g(d.getRoomInfo, { RoomId: s }),
    ut(s)
  ]), i = t?.Response?.RoomInfo?.IsMessageDisabled ?? !1, a = (e.MutedAccountList || e.Response?.MutedAccountList || []).map((n) => n.Member_Account || "").filter(Boolean);
  return { isMutedAll: i, mutedUsers: a };
}
async function zt(s, t) {
  const e = (/* @__PURE__ */ new Date()).toISOString(), i = {
    version: "1.0",
    messageSource: "live_background",
    messageType: "violation_alert",
    content: {
      violationType: t.violationType,
      violationTime: t.violationTime || e,
      violationContent: t.violationContent,
      handleSuggestion: t.handleSuggestion
    }
  };
  return Wt(
    s,
    "violation_alert",
    // BusinessId：标识违规警告消息
    JSON.stringify(i)
    // Data：消息内容
  );
}
async function qe(s, t, e, i) {
  const r = {
    porn: o.VIOLATION_SUGGESTION_PORN,
    political: o.VIOLATION_SUGGESTION_POLITICAL,
    abuse: o.VIOLATION_SUGGESTION_ABUSE,
    advertising: o.VIOLATION_SUGGESTION_ADVERTISING,
    illegal: o.VIOLATION_SUGGESTION_ILLEGAL,
    sexy: o.VIOLATION_SUGGESTION_SEXY,
    violence: o.VIOLATION_SUGGESTION_VIOLENCE,
    default: o.VIOLATION_SUGGESTION_DEFAULT
  }, a = r[t] || r.default, n = i ? i(a) : a;
  return zt(s, {
    violationType: t,
    violationContent: e,
    handleSuggestion: n
  });
}
const L = y("PlayerRegistry");
class Xt {
  constructor(t = {}) {
    this.playerMap = /* @__PURE__ */ new Map(), this.playerFactory = null, this.stoppingSet = /* @__PURE__ */ new Set(), this.stoppingPromiseMap = /* @__PURE__ */ new Map(), this.playerFactory = t.playerFactory || null, this.debug = t.debug || !1;
  }
  /**
   * 设置播放器工厂
   */
  setPlayerFactory(t) {
    L.info("PlayerRegistry", "setPlayerFactory called", typeof t), this.playerFactory = t;
  }
  /**
   * 开始播放
   * @param liveId 直播 ID
   * @param container 视频容器元素
   * @param url 播放地址（可选，TRTC 不需要）
   */
  async startPlay(t) {
    const { liveId: e, container: i, url: r } = t;
    if (!e || !i)
      throw new Error("liveId and container are required");
    if (!this.playerFactory)
      throw L.error("PlayerRegistry", "playerFactory is not configured!"), new Error(
        "playerFactory is not configured. Please provide it in ServerConfig or call setPlayerFactory()."
      );
    this.debug && L.info("PlayerRegistry", "startPlay called", { liveId: e, containerId: i.id });
    try {
      if (this.stoppingSet.has(e)) {
        this.debug && L.info("PlayerRegistry", `Waiting for stopPlay to complete for ${e}`);
        const n = this.stoppingPromiseMap.get(e);
        n && await n;
      }
      this.playerMap.has(e) && await this.stopPlay(e);
      const a = this.playerFactory(e);
      this.playerMap.set(e, a), await a.play(i, r), this.debug && L.info("PlayerRegistry", `Started playing live ${e}`);
    } catch (a) {
      throw this.playerMap.has(e) && await this.stopPlay(e), a;
    }
  }
  /**
   * 停止播放
   * @param liveId 直播 ID
   */
  async stopPlay(t) {
    if (!t) return;
    if (this.stoppingSet.has(t)) {
      this.debug && L.warn("PlayerRegistry", `stopPlay already in progress for ${t}, skipping`);
      const i = this.stoppingPromiseMap.get(t);
      return i || void 0;
    }
    this.stoppingSet.add(t);
    const e = (async () => {
      try {
        const i = this.playerMap.get(t);
        i && (await i.stop(), await i.destroy(), this.playerMap.delete(t), this.debug && L.info("PlayerRegistry", `Stopped playing live ${t}`));
      } catch (i) {
        this.debug && L.warn("PlayerRegistry", `Error stopping live ${t}:`, i);
      } finally {
        this.stoppingSet.delete(t), this.stoppingPromiseMap.delete(t);
      }
    })();
    return this.stoppingPromiseMap.set(t, e), e;
  }
  /**
   * 获取播放器
   * @param liveId 直播 ID
   * @returns 播放器实例或 undefined
   */
  getPlayer(t) {
    return this.playerMap.get(t);
  }
  /**
   * 检查播放器是否存在
   * @param liveId 直播 ID
   * @returns 是否存在
   */
  hasPlayer(t) {
    return this.playerMap.has(t);
  }
  /**
   * 获取所有正在播放的 liveId 列表
   * @returns liveId 数组
   */
  getPlayingLiveIds() {
    return Array.from(this.playerMap.keys());
  }
  /**
   * 获取播放器数量
   * @returns 播放器数量
   */
  getPlayerCount() {
    return this.playerMap.size;
  }
  /**
   * 停止所有播放器
   */
  async stopAll() {
    const t = Array.from(this.playerMap.keys()).map(
      (e) => this.stopPlay(e)
    );
    await Promise.allSettled(t), this.debug && L.info("PlayerRegistry", "Stopped all players");
  }
  /**
   * 销毁注册表（清理所有资源）
   */
  async destroy() {
    await this.stopAll(), this.playerFactory = null, this.debug && L.info("PlayerRegistry", "Destroyed");
  }
  /**
   * 获取播放器状态快照（用于调试）
   */
  getSnapshot() {
    const t = {};
    return this.playerMap.forEach((e, i) => {
      const r = e.getPlayerInfo();
      t[i] = {
        state: r.state,
        liveId: r.liveId
      };
    }), t;
  }
}
const qt = y("UserProfileManager");
class Jt {
  constructor(t = {}) {
    this.userProfiles = {}, this.loading = {}, this.onStateChange = t.onStateChange, this.getActive = t.getActive;
  }
  /** 获取缓存的用户资料 */
  getProfiles() {
    return this.userProfiles;
  }
  /** 获取指定用户的资料 */
  getProfile(t) {
    return this.userProfiles[t];
  }
  /** 批量获取用户资料（带缓存） */
  async fetchProfiles(t) {
    if (!t || t.length === 0) return /* @__PURE__ */ new Map();
    const e = "profiles";
    this.setLoading(e, !0);
    try {
      const i = await vt(t);
      return this.userProfiles = { ...this.userProfiles, ...Object.fromEntries(i) }, this.setLoading(e, !1), i;
    } catch (i) {
      throw this.setLoading(e, !1), qt.error("UserProfileManager", "fetchProfiles failed:", i), i;
    }
  }
  /** 获取需要的用户ID（过滤已缓存的） */
  getMissingUserIds(t) {
    return t.filter((e) => !this.userProfiles[e]);
  }
  /** 重置状态 */
  reset() {
    this.userProfiles = {}, this.loading = {}, this.notifyStateChange({
      userProfiles: this.userProfiles,
      loading: this.loading
    });
  }
  /** 销毁 */
  destroy() {
    this.userProfiles = {}, this.loading = {}, this.onStateChange = void 0, this.getActive = void 0;
  }
  setLoading(t, e) {
    this.loading = { ...this.loading, [t]: e }, this.notifyStateChange({ loading: this.loading });
  }
  notifyStateChange(t) {
    (!this.getActive || this.getActive()) && this.onStateChange?.(t);
  }
}
const m = y("LiveMonitorCore");
class Je {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.loading = {}, this.error = null, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new Xt({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new Jt({
      onStateChange: (e) => {
        this.notifyStateChange({
          loading: e.loading
        });
      },
      getActive: this.getActive
    });
  }
  // ========= 状态 getter（供框架层读取） =========
  getLiveList() {
    return this.liveList;
  }
  getHasMore() {
    return this.hasMore;
  }
  getCurrentLive() {
    return this.currentLive;
  }
  getLoading() {
    return this.loading;
  }
  getError() {
    return this.error;
  }
  // ========= init =========
  init(t) {
    m.info("init", "init called", {
      hasPlayerFactory: !!t.playerFactory,
      baseURL: t.baseURL
    }), t.playerFactory ? (m.info("LiveMonitorCore", "Setting playerFactory"), this.playerRegistry.setPlayerFactory(t.playerFactory)) : m.warn("LiveMonitorCore", "No playerFactory provided!");
  }
  // ========= 直播列表操作 =========
  // 注意：分页逻辑已移到 PaginatedListController，此处不再管理 cursor
  // ========= 当前直播管理 =========
  setCurrentLive(t) {
    if (t === null) {
      this.currentLive = null, this.notifyStateChange({ currentLive: null });
      return;
    }
    const e = this.liveList.find((i) => i.liveId === t);
    e ? (this.currentLive = e, this.notifyStateChange({ currentLive: e }), this.fetchMuteStatus(t).catch(() => {
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), _(t).then((i) => {
      i && this.getActive?.() !== !1 && (this.currentLive = i, this.notifyStateChange({ currentLive: i }), this.fetchMuteStatus(t).catch(() => {
      }));
    }).catch(() => {
    }));
  }
  getCurrentLiveInfo() {
    return this.currentLive ? this.currentLive : null;
  }
  // ========= 直播详情 =========
  async fetchLiveDetail(t) {
    const e = t || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const i = "detail";
    this.setLoading(i, !0), this.setError(null);
    try {
      const [r, a] = await Promise.allSettled([
        _(e),
        z(e)
      ]);
      let n = null;
      if (r.status === "fulfilled")
        n = r.value;
      else
        throw r.reason;
      const c = a.status === "fulfilled" ? a.value?.Response : null;
      if (n && c && (n.stats = this.mergeStatisticData(n, c)), n && n.anchor?.userId)
        try {
          const l = `live_obs_${n.anchor.userId}`;
          n.streamInfo = await U(e, l) ?? void 0;
        } catch {
        }
      return n && (this.liveList.some((u) => u.liveId === n.liveId) ? this.liveList = this.liveList.map(
        (u) => u.liveId === n.liveId ? n : u
      ) : this.liveList = [n, ...this.liveList], this.currentLive = n), this.setLoading(i, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), n;
    } catch (r) {
      const a = r instanceof Error ? r : new Error(String(r));
      throw this.setError(a), this.setLoading(i, !1), m.error("LiveMonitorCore", "fetchLiveDetail failed:", a), a;
    }
  }
  // ========= 创建直播 =========
  async createLive(t) {
    const e = "create";
    this.setLoading(e, !0), this.setError(null);
    try {
      if (!t.anchorId)
        throw new Error("anchorId is required");
      const r = (await Pt(t)).liveId || t.liveId, a = r ? await _(r) : null;
      if (!a)
        throw new Error("创建直播成功，但获取详情失败");
      return this.liveList = [a, ...this.liveList], this.currentLive = a, this.setLoading(e, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), a;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setError(r), this.setLoading(e, !1), m.error("LiveMonitorCore", "createLive failed:", r), r;
    }
  }
  // ========= 更新直播 =========
  async updateLive(t) {
    const e = t.liveId || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as params.liveId, or call setCurrentLive(liveId) first");
    const i = "update";
    this.setLoading(i, !0), this.setError(null);
    try {
      await Nt(e, t);
      const { liveId: r, ...a } = t;
      this.currentLive && (this.currentLive = { ...this.currentLive, ...a, liveId: this.currentLive.liveId }), this.liveList = this.liveList.map(
        (n) => n.liveId === e ? { ...n, ...a, liveId: n.liveId } : n
      ), this.notifyStateChange({
        currentLive: this.currentLive,
        liveList: this.liveList
      }), this.setLoading(i, !1);
    } catch (r) {
      const a = r instanceof Error ? r : new Error(String(r));
      throw this.setError(a), this.setLoading(i, !1), m.error("LiveMonitorCore", "updateLive failed:", a), a;
    }
  }
  // ========= 结束直播 =========
  async endLive(t) {
    const e = t || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const i = "end";
    this.setLoading(i, !0), this.setError(null);
    try {
      await Ot(e), this.liveList = this.liveList.filter((r) => r.liveId !== e), this.currentLive && this.currentLive.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), this.setLoading(i, !1);
    } catch (r) {
      const a = r instanceof Error ? r : new Error(String(r));
      throw this.setError(a), this.setLoading(i, !1), m.error("LiveMonitorCore", "endLive failed:", a), a;
    }
  }
  /** 获取缓存的用户资料 */
  getUserProfile(t) {
    return this.userProfileManager.getProfile(t);
  }
  /**
   * 合并统计数据到 LiveStats（公共方法）
   * @param baseLive 基础直播信息
   * @param statisticData 统计数据
   * @returns 合并后的 LiveStats
   */
  mergeStatisticData(t, e) {
    return e ? {
      liveId: t.liveId,
      onlineCount: t.onlineCount ?? 0,
      viewCount: e.TotalViewers || t.stats?.viewCount || 0,
      likeCount: e.TotalLikesReceived || t.stats?.likeCount || 0,
      giftCount: e.TotalGiftsSent || t.stats?.giftCount || 0,
      giftAmount: e.TotalGiftCoins || t.stats?.giftAmount || 0,
      giftUserCount: e.TotalUniqueGiftSenders || t.stats?.giftUserCount,
      commentCount: e.TotalMsgCount || t.stats?.commentCount || 0,
      duration: t.stats?.duration || 0
    } : t.stats || {
      liveId: t.liveId,
      onlineCount: t.onlineCount ?? 0,
      viewCount: 0,
      likeCount: 0,
      giftCount: 0,
      giftAmount: 0,
      commentCount: 0,
      duration: 0
    };
  }
  // ========= 直播统计 =========
  async fetchLiveStats(t) {
    const e = t || this.currentLive?.liveId, i = t ? this.liveList.find((a) => a.liveId === t) || this.currentLive : this.currentLive;
    if (!e || !i)
      throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const r = "stats";
    this.setLoading(r, !0);
    try {
      const n = (await z(e))?.Response, c = n ? this.mergeStatisticData(i, n) : i.stats || {
        liveId: e,
        onlineCount: 0,
        viewCount: 0,
        likeCount: 0,
        giftCount: 0,
        giftAmount: 0,
        commentCount: 0,
        duration: 0
      };
      return this.currentLive && this.currentLive.liveId === e && (this.currentLive = { ...this.currentLive, stats: c }, this.notifyStateChange({ currentLive: this.currentLive })), this.liveList = this.liveList.map(
        (l) => l.liveId === e ? { ...l, stats: c } : l
      ), this.setLoading(r, !1), this.notifyStateChange({
        liveList: this.liveList
      }), c;
    } catch (a) {
      const n = a instanceof Error ? a : new Error(String(a));
      throw this.setError(n), this.setLoading(r, !1), m.error("LiveMonitorCore", "fetchLiveStats failed:", n), n;
    }
  }
  // ========= 播放控制 =========
  async startPlay(t) {
    const { liveId: e, containerId: i } = t;
    if (!e || !i) throw new Error("liveId and containerId are required");
    const r = document.getElementById(i);
    if (!r)
      throw new Error(`Container element with id "${i}" not found`);
    await this.playerRegistry.startPlay({ liveId: e, container: r });
  }
  async stopPlay(t) {
    await this.playerRegistry.stopPlay(t);
  }
  /**
   * 设置全员禁言（禁止评论）
   * @param liveId 直播间 ID
   * @param mute 是否禁言
   */
  async setAllMute(t, e) {
    if (t)
      try {
        await Ht(t, e), this.liveList = this.liveList.map((i) => i.liveId === t ? { ...i, isMuted: e } : i), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
      } catch (i) {
        const r = i instanceof Error ? i : new Error(String(i));
        throw this.setError(r), m.error("LiveMonitorCore", "setAllMute failed:", r), r;
      }
  }
  /**
   * 从服务器获取全员禁言状态
   * @param liveId 直播间 ID
   */
  async fetchMuteStatus(t) {
    if (t)
      try {
        const e = await jt(t);
        if (e && typeof e == "object") {
          const i = e.isMutedAll ?? !1;
          let r = !1;
          this.liveList = this.liveList.map((a) => a.liveId === t && a.isMuted !== i ? (r = !0, { ...a, isMuted: i }) : a), this.currentLive && this.currentLive.liveId === t && this.currentLive.isMuted !== i && (this.currentLive = { ...this.currentLive, isMuted: i }, r = !0), r && this.notifyStateChange({
            liveList: this.liveList,
            currentLive: this.currentLive
          });
        }
      } catch (e) {
        const i = e instanceof Error ? e : new Error(String(e));
        this.setError(i), m.error("LiveMonitorCore", "fetchMuteStatus failed:", i);
      }
  }
  // ========= 重置状态 =========
  reset() {
    this.liveList = [], this.hasMore = !0, this.currentLive = null, this.loading = {}, this.error = null, this.playerRegistry.stopAll().catch(() => {
    }), this.userProfileManager.reset(), this.notifyStateChange({
      liveList: this.liveList,
      hasMore: this.hasMore,
      currentLive: this.currentLive,
      loading: this.loading,
      error: this.error
      // 注意：不再通知 isMuted，因为已移到 MonitorLiveInfo 中
    });
  }
  // ========= 清理资源 =========
  destroy() {
    this.reset(), this.playerRegistry.destroy().catch(() => {
    }), this.userProfileManager.destroy(), this.onStateChange = void 0, this.getActive = void 0;
  }
  // ========= 私有辅助方法 =========
  setLoading(t, e) {
    this.loading = { ...this.loading, [t]: e }, this.notifyStateChange({ loading: this.loading });
  }
  setError(t) {
    this.error = t, this.notifyStateChange({ error: this.error });
  }
  notifyStateChange(t) {
    (!this.getActive || this.getActive()) && this.onStateChange?.(t);
  }
}
const I = y("PaginatedList");
function X() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
class Ze {
  constructor(t) {
    this.hasMore = !0, this.pageData = [], this.loading = !1, this.isLoading = !1, this.listeners = /* @__PURE__ */ new Set(), this.pageSize = t.pageSize ?? 8, this.pageCursors = t.initialPageCursors ?? X(), this.currentPage = t.initialPage ?? 1, this.fetchPageFn = t.fetchPage;
  }
  // -------- 订阅 / 状态 --------
  getSnapshot() {
    return {
      pageData: this.pageData,
      currentPage: this.currentPage,
      hasMore: this.hasMore,
      loading: this.loading,
      pageCursors: new Map(this.pageCursors)
    };
  }
  subscribe(t) {
    return this.listeners.add(t), () => {
      this.listeners.delete(t);
    };
  }
  notify() {
    const t = this.getSnapshot();
    I.info("PaginatedListController", "notify called, listeners:", this.listeners.size, ", snapshot:", { pageDataLength: t.pageData.length, loading: t.loading, currentPage: t.currentPage }), this.listeners.forEach((e) => e(t));
  }
  // -------- 防止并发 --------
  // isLoading 已在顶部声明，这里不再重复
  // -------- 核心翻页 --------
  /**
   * 回到首页
   */
  async goToFirstPage() {
    if (this.isLoading) {
      I.warn("PaginatedListController", "goToFirstPage: already loading, skipping");
      return;
    }
    this.pageCursors = X(), this.currentPage = 1, await this.loadPage();
  }
  /**
   * 上一页
   */
  async prevPage() {
    if (this.isLoading) {
      I.warn("PaginatedListController", "prevPage: already loading, skipping");
      return;
    }
    this.currentPage <= 1 || (this.currentPage -= 1, await this.loadPage());
  }
  /**
   * 下一页
   */
  async nextPage() {
    if (this.isLoading) {
      I.warn("PaginatedListController", "nextPage: already loading, skipping");
      return;
    }
    this.hasMore && (this.currentPage += 1, await this.loadPage());
  }
  /**
   * 刷新当前页
   */
  async refreshCurrentPage() {
    if (this.isLoading) {
      I.warn("PaginatedListController", "refreshCurrentPage: already loading, skipping");
      return;
    }
    await this.loadPage();
  }
  /**
   * 跳转到指定页（用于返回时恢复分页状态）
   * @param page 目标页码
   * @param pageCursors 分页游标 Map（从 sessionStorage 恢复）
   */
  async goToPage(t, e) {
    if (this.isLoading) {
      I.warn("PaginatedListController", "goToPage: already loading, skipping");
      return;
    }
    if (t < 1) {
      I.warn("PaginatedListController", "goToPage: invalid page", t);
      return;
    }
    this.pageCursors = new Map(e), this.currentPage = t, await this.loadPage();
  }
  // -------- 内部加载 --------
  async loadPage() {
    this.isLoading = !0, this.loading = !0, this.notify();
    try {
      const t = await this.fetchPageFn({
        page: this.currentPage,
        pageCursors: this.pageCursors,
        count: this.pageSize
      });
      this.pageData = t.list, this.pageCursors = t.pageCursors, this.hasMore = t.hasMoreData;
    } catch (t) {
      I.error("PaginatedListController", "loadPage failed:", t), this.pageData = [], this.hasMore = !1;
    } finally {
      this.isLoading = !1, this.loading = !1, this.notify();
    }
  }
  // -------- 清理 --------
  destroy() {
    this.pageData = [], this.pageCursors.clear(), this.listeners.clear();
  }
}
function Qe(s) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(s);
}
function ts(s) {
  return /\.svga(\?|$)/i.test(s);
}
function es(s) {
  return s instanceof File ? s.name.toLowerCase().endsWith(".svga") : !1;
}
function ss(s) {
  return s.type.startsWith("video/");
}
function x(s) {
  return new TextEncoder().encode(s).length;
}
function is(s) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => t(i.result), i.onerror = e, i.readAsDataURL(s);
  });
}
const Zt = y("ImagePreview");
class rs {
  constructor() {
    this.urls = /* @__PURE__ */ new Set();
  }
  /**
   * 创建 ObjectURL 并自动跟踪
   * @param blob - File 或 Blob 对象
   * @returns ObjectURL 字符串
   */
  create(t) {
    const e = URL.createObjectURL(t);
    return this.urls.add(e), e;
  }
  /**
   * 释放指定的 ObjectURL
   * @param url - 要释放的 URL
   */
  revoke(t) {
    this.urls.has(t) && (URL.revokeObjectURL(t), this.urls.delete(t));
  }
  /**
   * 释放所有跟踪的 ObjectURL
   */
  revokeAll() {
    this.urls.forEach((t) => {
      URL.revokeObjectURL(t);
    }), this.urls.clear();
  }
  /**
   * 获取当前跟踪的 URL 数量
   */
  get size() {
    return this.urls.size;
  }
}
function Qt(s) {
  return URL.createObjectURL(s);
}
function te(s) {
  try {
    URL.revokeObjectURL(s);
  } catch (t) {
    Zt.warn("general", "Failed to revoke ObjectURL:", s, t);
  }
}
function as(s, t) {
  return s && te(s), Qt(t);
}
y("DragDrop");
function ee(s) {
  const t = s.dataTransfer?.files;
  return t && t.length > 0 ? t[0] : null;
}
function ns(s) {
  return (t) => {
    t.preventDefault();
    const e = ee(t);
    e && s(e);
  };
}
function os(s) {
  s.preventDefault();
}
const T = {
  /** 直播列表分页大小 */
  liveList: 20,
  /** 审核列表分页大小 */
  moderation: 20,
  /** 成员列表分页大小 */
  memberList: 50,
  /** 禁言成员列表分页大小 */
  mutedList: 50,
  /** 封禁成员列表分页大小 */
  bannedList: 50,
  /** 礼物列表分页大小 */
  giftList: 30,
  /** 礼物分类列表分页大小 */
  giftCategoryList: 20,
  /** 直播监控列表分页大小 */
  liveMonitor: 8
};
function cs(s) {
  return T[s];
}
function ls(s, t) {
  return Math.max(1, Math.ceil(s / t));
}
function us(s, t) {
  return Math.max(1, Math.min(s, t));
}
function gs(s, t) {
  return (s - 1) * t;
}
function ds(s, t, e) {
  const i = (s - 1) * t + 1, r = Math.min(s * t, e);
  return { start: i, end: r };
}
const hs = {
  field: "createTime",
  direction: "descend"
}, se = T.liveList, k = "liveList_currentPage", B = "liveList_pageCursors", ie = 1024;
function R() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function re(s) {
  const { page: t, pageCursors: e, pageSize: i = se } = s, r = e.get(t) || "", { list: a, next: n } = await Rt({ next: r, count: i, sortDirection: "descend" }), c = a, l = new Map(e);
  return n && c.length > 0 && l.set(t + 1, n), {
    lives: c,
    currentPage: t,
    hasMoreData: !!n && c.length === i,
    pageCursors: l,
    response: { ErrorCode: 0, Response: { RoomList: a, Next: n } }
  };
}
function ae(s) {
  const { targetPage: t, currentPage: e, hasMoreData: i } = s;
  return !(t < 1 || t > e && !i);
}
function ne(s) {
  const { currentPage: t, hasMoreData: e, livesLength: i } = s;
  return !e && i <= 1 && t > 1 ? t - 1 : t;
}
function oe(s) {
  const t = s.storage || sessionStorage;
  try {
    t.setItem(k, String(s.currentPage)), t.setItem(B, JSON.stringify(Array.from(s.pageCursors.entries())));
  } catch {
  }
}
function ce(s = sessionStorage) {
  let t = 1, e = R();
  try {
    const i = s.getItem(k), r = s.getItem(B);
    if (s.removeItem(k), s.removeItem(B), i && r) {
      const a = Number(i);
      if (a > 0) {
        const n = JSON.parse(r);
        e = new Map(n), t = a;
      }
    }
  } catch {
    t = 1, e = R();
  }
  return { pageToLoad: t, pageCursors: e };
}
function le(s, t) {
  return x(s) > t;
}
async function ue(s) {
  return await _(s);
}
function fs(s) {
  return s ? new Date(s * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function Ls(s, t) {
  const { field: e, direction: i } = t, r = [...s], a = i === "ascend" ? 1 : -1;
  return r.sort((n, c) => {
    let l = 0;
    switch (e) {
      case "createTime":
        l = (n.createdAt || 0) - (c.createdAt || 0);
        break;
      case "viewerCount":
        l = (n.onlineCount || 0) - (c.onlineCount || 0);
        break;
      case "duration": {
        const u = n.endedAt ? n.endedAt - n.createdAt : Date.now() / 1e3 - n.createdAt, h = c.endedAt ? c.endedAt - c.createdAt : Date.now() / 1e3 - c.createdAt;
        l = u - h;
        break;
      }
      case "status": {
        const u = n.endedAt ? 1 : 0, h = c.endedAt ? 1 : 0;
        l = u - h;
        break;
      }
      default:
        l = 0;
    }
    return l * a;
  }), r;
}
function ms(s, t) {
  let e = s;
  return t.status && (t.status === "ongoing" ? e = e.filter((i) => !i.endedAt) : t.status === "ended" && (e = e.filter((i) => !!i.endedAt))), t.anchorId && (e = e.filter((i) => i.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (e = e.filter((i) => !i.category || i.category.length === 0 ? !1 : t.tags.some((r) => i.category.includes(r)))), t.customFilter && (e = e.filter(t.customFilter)), e;
}
class ys {
  constructor(t = {}) {
    this.cache = /* @__PURE__ */ new Map(), this.ttl = t.ttl || 300 * 1e3, this.maxPages = t.maxPages || 10;
  }
  /**
   * 设置缓存
   * @param page 页码
   * @param data 数据
   * @param hasMoreData 是否有更多数据
   */
  set(t, e, i) {
    if (this.cache.size >= this.maxPages) {
      const r = Array.from(this.cache.entries()).sort((a, n) => a[1].timestamp - n[1].timestamp)[0]?.[0];
      r !== void 0 && this.cache.delete(r);
    }
    this.cache.set(t, {
      data: e,
      timestamp: Date.now(),
      hasMoreData: i
    });
  }
  /**
   * 获取缓存
   * @param page 页码
   * @returns 缓存数据或 null（如果不存在或已过期）
   */
  get(t) {
    const e = this.cache.get(t);
    return e ? Date.now() - e.timestamp > this.ttl ? (this.cache.delete(t), null) : e : null;
  }
  /**
   * 清除指定页的缓存
   * @param page 页码（如果不传则清除所有）
   */
  clear(t) {
    t !== void 0 ? this.cache.delete(t) : this.cache.clear();
  }
  /**
   * 清除所有过期的缓存
   */
  clearExpired() {
    const t = Date.now();
    for (const [e, i] of this.cache.entries())
      t - i.timestamp > this.ttl && this.cache.delete(e);
  }
  /**
   * 获取缓存统计信息
   */
  getStats() {
    return {
      size: this.cache.size,
      pages: Array.from(this.cache.keys()).sort((t, e) => t - e)
    };
  }
  /**
   * 更新 TTL
   * @param ttlMs 新的 TTL（毫秒）
   */
  updateTtl(t) {
    this.ttl = t;
  }
  /**
   * 更新最大缓存页数
   * @param maxPages 新的最大页数
   */
  updateMaxPages(t) {
    for (this.maxPages = t; this.cache.size > t; ) {
      const e = Array.from(this.cache.entries()).sort((i, r) => i[1].timestamp - r[1].timestamp)[0]?.[0];
      e !== void 0 && this.cache.delete(e);
    }
  }
}
const ps = T.mutedList, Is = T.bannedList, ge = 600, de = 86400, gt = (s) => Array.isArray(s) ? s.filter((t) => !!t && typeof t == "object") : [], $ = (s, ...t) => {
  const e = t.map((i) => s[i]).find((i) => typeof i == "string" && i.length > 0);
  return typeof e == "string" ? e : "";
}, dt = (s, ...t) => {
  const e = t.map((r) => s[r]).find((r) => r != null), i = Number(e || 0);
  return Number.isFinite(i) ? i : 0;
}, P = (s) => s.memberAccounts || s.userIds || [];
async function Ss(s) {
  const t = await ut(s);
  return gt(t.Response?.MutedAccountList || t.MutedAccountList).map((i) => ({
    userId: $(i, "Member_Account", "userId", "UserID"),
    endTime: dt(i, "MutedUntil", "endTime")
  })).filter((i) => i.userId);
}
function Cs(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function vs(s) {
  const t = await xt(s);
  return gt(t.Response?.BannedAccountList || t.BannedAccountList).map((i) => ({
    userId: $(i, "Member_Account", "userId", "UserID"),
    endTime: dt(i, "BannedUntil", "endTime"),
    reason: $(i, "Reason", "reason") || void 0
  })).filter((i) => i.userId);
}
function Es(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function As(s) {
  const { liveId: t } = s, e = P(s), i = s.muteTime ?? s.duration ?? ge;
  await Ft(t, e, i);
}
async function bs(s) {
  const { liveId: t } = s, e = P(s);
  await Gt(t, e);
}
async function _s(s) {
  const { liveId: t, reason: e = "" } = s, i = P(s), r = s.banTime ?? s.duration ?? de;
  await Ut(t, i, r, e);
}
async function Ds(s) {
  const { liveId: t } = s, e = P(s);
  await Vt(t, e);
}
function ht(s) {
  return `${s}_robot`;
}
function Ts(s, t) {
  return s === ht(t);
}
function Ms(s, t) {
  const e = ht(t);
  return s.filter((i) => i !== e);
}
function ws(s) {
  const t = Math.floor(Date.now() / 1e3), e = s - t;
  if (e <= 0)
    return "已过期";
  const i = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
  return i > 0 ? `${i}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function Rs(s) {
  const t = Math.floor(Date.now() / 1e3);
  return s <= t;
}
const Os = (s, t = null) => {
  try {
    return JSON.parse(s);
  } catch (e) {
    return console.warn("Failed to parse JSON:", s, e), t;
  }
}, Ps = (s, t) => {
  let e = null;
  return (...i) => {
    e !== null && clearTimeout(e), e = window.setTimeout(() => {
      s(...i), e = null;
    }, t);
  };
}, Ns = (s, t = {}) => {
  const e = s;
  e?.requestFullscreen ? e?.requestFullscreen(t) : e?.mozRequestFullScreen ? e?.mozRequestFullScreen(t) : e?.webkitRequestFullScreen ? e?.webkitRequestFullScreen(t) : e?.msRequestFullscreen && e?.msRequestFullscreen(t);
}, Fs = () => {
  if (!document?.fullscreenElement && !document?.webkitFullscreenElement && !document?.mozFullScreenElement)
    return;
  const s = document;
  s?.exitFullscreen ? s?.exitFullscreen() : s?.msExitFullscreen ? s?.msExitFullscreen() : s?.mozCancelFullScreen ? s?.mozCancelFullScreen() : s?.webkitExitFullscreen && s?.webkitExitFullscreen();
}, W = async (s) => {
  if (navigator.clipboard?.writeText)
    return navigator.clipboard.writeText(s);
  const t = document.createElement("textarea");
  t.value = s, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function Gs(s) {
  return `live_obs_${s}`;
}
const K = [
  "avatarUrl",
  "AvatarUrl",
  "avatar",
  "Avatar",
  "userAvatar",
  "ownerAvatar",
  "hostAvatar",
  "liveOwnerAvatar",
  "liveOwnerAvatarUrl",
  "anchorAvatar",
  "anchorAvatarUrl",
  "portrait",
  "faceUrl",
  "faceURL"
], q = [
  "userName",
  "UserName",
  "nameCard",
  "name",
  "nickname",
  "nickName",
  "OwnerName",
  "ownerName",
  "Owner_Account",
  "ownerAccount",
  "anchorName",
  "anchorId",
  "userId",
  "UserId",
  "id"
], he = [
  ...K,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function O(s) {
  return !!s && typeof s == "object" && !Array.isArray(s);
}
function ft(s) {
  return typeof s == "string" ? s.trim() : "";
}
function D(s, t) {
  if (!s) return "";
  for (const e of t) {
    const i = ft(s[e]);
    if (i)
      return i;
  }
  return "";
}
function v(s) {
  if (O(s))
    return s;
  if (typeof s == "string")
    try {
      const t = JSON.parse(s);
      return O(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function Lt(s) {
  return [
    v(s.liveOwner),
    v(s.anchor),
    v(s.owner),
    v(s.host),
    v(s.userInfo),
    v(s.sender)
  ];
}
function Us(s) {
  const t = (s || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function Vs(s) {
  if (!O(s))
    return "";
  const t = D(s, K);
  if (t)
    return t;
  for (const i of Lt(s)) {
    const r = D(i, K);
    if (r)
      return r;
  }
  const e = v(
    s.CustomINFO ?? s.customInfo ?? s.customData ?? s.metadata
  );
  return D(e, he);
}
function xs(s, t = "") {
  if (typeof s == "string")
    return s.trim() || t;
  if (!O(s))
    return t;
  const e = D(s, q);
  if (e)
    return e;
  const i = ft(s.liveOwner);
  if (i)
    return i;
  for (const r of Lt(s)) {
    const a = D(r, q);
    if (a)
      return a;
  }
  return t;
}
const fe = "live_", ks = 43, Bs = 100, Le = "VideoDynamicGrid9Seats", me = 8, w = 9 / 16, mt = 16 / 9, S = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, ye = [
  { value: "VideoDynamicGrid9Seats", labelKey: o.DYNAMIC_GRID_LAYOUT, descKey: o.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: o.FLOATING_WINDOW_LAYOUT, descKey: o.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: o.FIXED_GRID_LAYOUT, descKey: o.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: o.FIXED_WINDOW_LAYOUT, descKey: o.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: o.LANDSCAPE_BROADCASTING, descKey: o.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function $s() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: Le,
    maxSeatCount: me
  };
}
function Ks() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function pe(s) {
  return `${fe}${s}`;
}
function Ie(s) {
  return s === "AudioSalon" || s === "Karaoke";
}
function Se(s) {
  return ye.find((t) => t.value === s);
}
function Ys(s) {
  return Se(s)?.orientation === "landscape" ? mt : w;
}
function Ws(s) {
  return !s.key.trim() && !!s.value.trim();
}
function Ce(s) {
  const t = {};
  for (const e of s) {
    const i = e.key.trim();
    i && (t[i] = e.value);
  }
  return t;
}
function Hs(s) {
  const t = {};
  let e = 0;
  for (const r of s) {
    const a = r.key.trim();
    if (!a) continue;
    const n = x(a);
    if (n > S.maxKeyBytes)
      return { type: "key-too-long", key: a, max: S.maxKeyBytes, current: n };
    const c = x(r.value);
    if (c > S.maxValueBytes)
      return { type: "value-too-long", key: a, max: S.maxValueBytes, current: c };
    e += c, t[a] = r.value;
  }
  const i = Object.keys(t).length;
  return i > S.maxCount ? { type: "max-count", max: S.maxCount, current: i } : e > S.maxTotalValueBytes ? { type: "total-value-too-long", max: S.maxTotalValueBytes, current: e } : null;
}
function js(s, t) {
  const e = new Set(Object.keys(t));
  return s.filter((i) => !e.has(i));
}
function zs(s) {
  const { formData: t, coverUrl: e, customInfos: i, useObsStreaming: r } = s, a = Ce(i), n = {
    liveId: pe(t.anchorId),
    anchorId: t.anchorId,
    liveName: t.liveName,
    seatTemplate: t.seatTemplate
  };
  return e && (n.coverUrl = e), Ie(t.seatTemplate) && (n.maxSeatCount = t.maxSeatCount), Object.keys(a).length > 0 && (n.customInfo = a), r && (n.useObsStreaming = !0), n;
}
function ve(s) {
  if (!s) return [];
  if (typeof s == "string")
    try {
      return ve(JSON.parse(s));
    } catch {
      return [];
    }
  return typeof s != "object" ? [] : Object.entries(s).map(([t, e]) => ({
    key: t,
    value: String(e)
  }));
}
function Xs(s) {
  return new Promise((t) => {
    if (!s) {
      t(w);
      return;
    }
    const e = new Image();
    e.crossOrigin = "anonymous", e.onload = () => {
      const i = e.naturalWidth / e.naturalHeight;
      t(i > 1 ? mt : w);
    }, e.onerror = () => t(w), e.src = s;
  });
}
const Ee = y("obs"), Ae = 70102;
function be(s) {
  return `live_obs_${s}`;
}
function _e(s) {
  const t = /* @__PURE__ */ new Set();
  return s?.forEach((e) => {
    e.Member_Account && t.add(e.Member_Account);
  }), t;
}
function De(s) {
  return s || null;
}
async function J(s, t) {
  const [e, i] = await Promise.all([
    kt(s).then((r) => r.Response?.RobotList_Account || []).catch(() => []),
    Bt(s).then((r) => _e(r.Response?.SeatList)).catch(() => /* @__PURE__ */ new Set())
  ]);
  return {
    hasRobot: e.includes(t),
    onSeat: i.has(t)
  };
}
async function qs(s) {
  const { liveId: t, anchorId: e, onStatusChange: i, messages: r = {} } = s, a = be(e), n = r.getStreamInfoFailed || "Get Stream Info Failed";
  let c = null, l = "";
  try {
    const { hasRobot: u, onSeat: h } = await J(t, a);
    let H = h;
    if (!u) {
      i?.("creating");
      const p = await Yt(a, `OBS Robot ${a}`);
      if (p.ErrorCode !== 0 && p.Error !== 0 && p.ErrorCode !== Ae)
        throw new E(p.ErrorInfo || "", p.ErrorCode);
      const N = await Kt(t, [a]);
      if (N.ErrorCode !== 0)
        throw new E(N.ErrorInfo || "", N.ErrorCode);
      H = (await J(t, a)).onSeat;
    }
    if (!H) {
      i?.("seating");
      const p = await $t(t, a);
      if (p.ErrorCode !== 0)
        throw new E(p.ErrorInfo || "", p.ErrorCode);
    }
    i?.("ready");
  } catch (u) {
    Ee.error("OBS setup failed", "", u);
    const h = (u instanceof Error ? u.message : "") || r.setupFailed || "OBS Setup Failed";
    return i?.("error"), {
      robotId: a,
      streamInfo: c,
      streamInfoError: l,
      setupError: h,
      status: "error",
      configuredSuccessfully: !1
    };
  }
  try {
    let u = await U(t, a);
    if (!u && Et() === 0) {
      const h = await At();
      h && (bt({ userId: h.userId, userSig: h.userSig, sdkAppId: h.sdkAppId }), u = await U(t, a));
    }
    c = De(u), c || (l = n);
  } catch (u) {
    l = (u instanceof Error ? u.message : "") || n;
  }
  return {
    robotId: a,
    streamInfo: c,
    streamInfoError: l,
    setupError: "",
    status: "ready",
    configuredSuccessfully: !0
  };
}
const yt = T.moderation, Te = 10;
async function Js(s) {
  const {
    liveId: t,
    pageNum: e,
    pageSize: i = yt,
    minutes: r = Te,
    violationOnly: a = !0
  } = s, n = await Dt({
    liveId: t,
    pageNum: e,
    pageSize: i,
    minutes: r,
    violationOnly: a
  }), c = await Tt(n.list), l = await Mt();
  return {
    list: c,
    total: Math.max(0, n.total - l),
    currentPage: e
  };
}
async function Zs(s) {
  await _t(s);
}
function Qs(s, t, e, i = yt) {
  const r = Math.max(0, t - e), a = Math.max(1, Math.ceil(r / i));
  return Math.min(s, a);
}
function ti(s, t) {
  return s.includes(t) ? s.filter((e) => e !== t) : [...s, t];
}
function ei(s, t) {
  if (t.length > 0 && t.every((i) => s.includes(i)))
    return s.filter((i) => !t.includes(i));
  {
    const i = new Set(s);
    return t.forEach((r) => i.add(r)), Array.from(i);
  }
}
function si(s, t) {
  return s.filter((e) => t.includes(e));
}
function ii(s, t) {
  return t.length === 0 ? !1 : t.every((e) => s.includes(e));
}
function ri(s) {
  const t = new Date(s), e = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0"), r = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0"), n = String(t.getSeconds()).padStart(2, "0");
  return `${e}-${i} ${r}:${a}:${n}`;
}
const f = {
  sc: { code: "zh-Hans", label: "Simplified Chinese" },
  tc: { code: "zh-Hant", label: "Traditional Chinese" },
  en: { code: "en", label: "English" }
}, Z = {
  "zh-Hans": "sc",
  "zh-Hant": "tc",
  en: "en"
}, ai = ["sc", "tc", "en"], ni = 20, oi = 20, ci = 20, li = 100, Q = 50, ui = 45;
function pt(s) {
  return new TextEncoder().encode(s).length;
}
function gi(s, t) {
  if (!s || t <= 0)
    return "";
  let e = "", i = 0;
  for (const r of s) {
    const a = pt(r);
    if (i + a > t)
      break;
    e += r, i += a;
  }
  return e;
}
function di(s) {
  if (!s) return "-";
  const t = typeof s == "number" ? s * 1e3 : parseInt(s) * 1e3, e = new Date(t), i = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), a = String(e.getDate()).padStart(2, "0"), n = String(e.getHours()).padStart(2, "0"), c = String(e.getMinutes()).padStart(2, "0"), l = String(e.getSeconds()).padStart(2, "0");
  return `${i}-${r}-${a} ${n}:${c}:${l}`;
}
function hi(s) {
  return f[s];
}
function It(s) {
  const t = Object.entries(f).find(([e, i]) => i.code === s);
  return t ? t[0] : void 0;
}
function fi(s) {
  const t = It(s);
  return t ? f[t].label : s;
}
function Li(s) {
  return typeof s == "string" ? s : typeof s == "number" ? String(s) : s.Language || s.language || "";
}
function St() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function Me(s, t) {
  return s?.find((e) => e.language === t);
}
function we(s) {
  const t = St(), e = [];
  if (!s || s.length === 0)
    return { config: t, langsToFetch: e };
  for (const i of s) {
    const r = i.language, a = It(r);
    a && (i.name || i.description ? t[a] = { name: i.name || "", description: i.description || "" } : e.push(a));
  }
  return { config: t, langsToFetch: e };
}
function Re(s, t) {
  const e = f[t].code, i = Me(s, e);
  return i && (i.name || i.description) ? {
    form: { name: i.name || "", description: i.description || "" },
    needsFetch: !1,
    langCode: e
  } : {
    form: { name: "", description: "" },
    needsFetch: !!i,
    langCode: e
  };
}
function Oe(s) {
  return s.trim().toLowerCase();
}
function tt(s, t) {
  return pt(s) > t;
}
function M(s, t) {
  const e = Oe(t);
  return e ? s.filter((i) => {
    const r = (i.id || "").toLowerCase(), a = (i.name || "").toLowerCase(), n = (i.description || "").toLowerCase(), c = (i.categories || []).join(",").toLowerCase();
    return r.includes(e) || a.includes(e) || n.includes(e) || c.includes(e);
  }) : s;
}
function et(s) {
  const t = s.categories.map((r) => {
    const a = V(r.languageList, "categoryName", "categoryDescription");
    return {
      ...r,
      name: a?.name || r.defaultName || r.name,
      description: a?.description || r.defaultDescription || r.description
    };
  }), e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    e.set(String(r.id), r.name);
  }), { gifts: s.gifts.map((r) => {
    const a = V(r.languageList, "name", "description"), n = (r.categoryIds || []).map((c) => e.get(String(c)) || c);
    return {
      ...r,
      name: a?.name || r.defaultName || r.name,
      description: a?.description || r.defaultDescription || r.description,
      categories: n
    };
  }), categories: t };
}
const Y = "gift_categories_cache";
function Pe(s) {
  return s.map((t) => {
    const e = Array.isArray(t.giftIds) ? t.giftIds : Array.isArray(t.GiftIdList) ? t.GiftIdList : [];
    return {
      id: String(t.id || t.CategoryId || t.categoryId || ""),
      name: String(t.name || t.CategoryName || "未命名分类"),
      description: t.description ? String(t.description) : void 0,
      languageList: t.languageList || t.LanguageList || [],
      giftIds: e,
      giftCount: e.length,
      defaultName: t.defaultName ? String(t.defaultName) : void 0,
      defaultDescription: t.defaultDescription ? String(t.defaultDescription) : void 0
    };
  });
}
function Ne(s, t = sessionStorage) {
  if (s.length !== 0)
    try {
      t.setItem(Y, JSON.stringify(s));
    } catch {
    }
}
function Fe(s = sessionStorage) {
  try {
    const t = s.getItem(Y);
    return t ? (s.removeItem(Y), Pe(JSON.parse(t))) : [];
  } catch {
    return [];
  }
}
function Ge(s) {
  return s.map((t) => {
    const e = V(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: e?.name || t.defaultName || t.name,
      description: e?.description || t.defaultDescription || t.description
    };
  });
}
const F = y("LiveList"), C = {
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
function mi(s) {
  const t = [
    { key: "liveId", i18nKey: o.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: C.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: o.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: C.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: o.COVER_IMAGE, className: "col-cover", width: C.COVER_WIDTH },
    { key: "anchor", i18nKey: o.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: C.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: o.CREATE_TIME, className: "live-list-col-time", width: C.CREATED_AT_WIDTH }
  ];
  return s.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: C.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: o.ACTIONS, className: "live-list-col-action", maxWidth: C.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function yi(s) {
  const { live: t, t: e, onEnter: i, onDetail: r, onEdit: a, onDelete: n } = s;
  return [
    { key: "enter", label: e(o.ENTER_LIVE), title: e(o.ENTER_LIVE), onClick: () => i(t.liveId) },
    { key: "detail", label: e(o.LIVE_DETAILS), title: e(o.LIVE_DETAILS), onClick: () => r(t) },
    { key: "edit", label: e(o.EDIT), title: e(o.EDIT), onClick: () => a(t) },
    { key: "delete", label: e(o.DISSOLVE), title: e(o.DISSOLVE), danger: !0, onClick: () => n(t) }
  ];
}
async function Ue(s, t, e) {
  const i = s.anchor?.userId || "";
  let r = null;
  try {
    r = await e(s.liveId);
  } catch {
  }
  const a = r?.streamInfo ?? null;
  return { snapshot: {
    visible: !0,
    live: s,
    robotId: i ? `live_obs_${i}` : "",
    streamInfo: a,
    robotStatus: a ? "ready" : "none",
    robotStatusText: t(a ? o.OBS_READY : o.OBS_SETUP_FAILED),
    actionLoading: ""
  } };
}
const st = {
  visible: !1,
  live: null,
  robotId: "",
  streamInfo: null,
  robotStatus: "checking",
  robotStatusText: "",
  actionLoading: ""
}, it = {
  visible: !1,
  title: "",
  content: "",
  liveId: ""
};
class pi {
  constructor(t) {
    this.opts = t, this.state = {
      lives: [],
      loading: !1,
      refreshing: !1,
      currentPage: 1,
      hasMoreData: !0,
      searchInput: "",
      obsModal: { ...st },
      confirmDialog: { ...it },
      isCreateModalVisible: !1,
      isEditModalVisible: !1,
      editingLive: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.pageCursors = R(), this.destroyed = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
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
    const t = ce();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await re({
        page: t,
        pageCursors: this.pageCursors
      });
      this.pageCursors = e.pageCursors, this.setState({
        lives: e.lives,
        currentPage: e.currentPage,
        hasMoreData: e.hasMoreData
      });
    } catch (e) {
      F.error("加载直播列表失败", "", e);
      const i = this.opts.t(o.LOAD_LIVE_LIST_FAILED);
      e instanceof E ? this.opts.toast.error(j(e.code ?? 0, e.message, i)) : this.opts.toast.error(i);
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
    ae({
      targetPage: t,
      currentPage: this.state.currentPage,
      hasMoreData: this.state.hasMoreData
    }) && (A("ui_action", "pagination", String(t)), this.loadPage(t));
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    this.setState({ searchInput: t });
  }
  isSearchInputTooLong() {
    return le(this.state.searchInput, ie);
  }
  async search() {
    const t = this.state.searchInput.trim();
    if (t) {
      if (this.isSearchInputTooLong()) {
        this.opts.toast.error(this.opts.t(o.INPUT_TOO_LONG));
        return;
      }
      this.setState({ loading: !0 });
      try {
        const e = await ue(t);
        e ? (this.setState({
          lives: [e],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.success(this.opts.t(o.SEARCH_SUCCESS)), b("live_search", "search", !0, t)) : (this.setState({
          lives: [],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.error(this.opts.t(o.LIVE_NOT_FOUND)), b("live_search", "search", !1, t));
      } catch (e) {
        if (F.error("搜索直播失败", "", e), b("live_search", "search", !1), e instanceof E)
          this.opts.toast.error(j(
            e.code ?? 0,
            e.message,
            this.opts.t(o.LIVE_NOT_FOUND)
          ));
        else {
          const i = e?.message || this.opts.t(o.NETWORK_ERROR);
          this.opts.toast.error(this.opts.t(o.SEARCH_FAILED, { error: i }));
        }
      } finally {
        this.setState({ loading: !1 });
      }
    }
  }
  async clearSearch() {
    this.pageCursors = R(), this.setState({
      searchInput: "",
      currentPage: 1,
      hasMoreData: !0
    }), await this.loadPage(1);
  }
  // -------- 进入直播 --------
  enterLive(t) {
    oe({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), A("ui_action", "enter_live", t), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await W(t);
    const i = e ?? this.opts.t(o.LIVE_ID);
    this.opts.toast.success(this.opts.t(o.COPY_LABEL_COPIED, { label: i }));
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
        robotStatusText: this.opts.t(o.LOADING),
        actionLoading: "stream"
      }
    });
    const { snapshot: e, toastError: i } = await Ue(t, this.opts.t, this.opts.fetchLiveDetail);
    this.state.obsModal.visible && this.state.obsModal.live?.liveId === t.liveId && this.setState({ obsModal: e }), i && this.opts.toast.error(i);
  }
  closeDetail() {
    this.setState({ obsModal: { ...st } });
  }
  // -------- 删除确认 --------
  requestDelete(t) {
    this.setState({
      confirmDialog: {
        visible: !0,
        title: this.opts.t(o.DISSOLVE_CONFIRMATION),
        content: this.opts.t(o.DISSOLVE_DESCRIPTION, {
          liveId: t.liveName || this.opts.t(o.UNNAMED_LIVE)
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
        await this.opts.endLive(t), this.opts.toast.success(this.opts.t(o.DISSOLVE_SUCCESS)), b("live_crud", "delete", !0, t);
        const e = ne({
          currentPage: this.state.currentPage,
          hasMoreData: this.state.hasMoreData,
          livesLength: this.state.lives.length
        });
        await this.loadPage(e);
      } catch (e) {
        F.error("解散直播失败", "", e), b("live_crud", "delete", !1, t), this.opts.toast.error(this.opts.t(o.DISSOLVE_FAILED));
      } finally {
        this.setState({ confirmDialog: { ...it } });
      }
  }
  // -------- 创建 / 编辑弹窗 --------
  openCreateModal() {
    this.setState({ isCreateModalVisible: !0 }), A("ui_action", "modal", "open", "create_live");
  }
  closeCreateModal() {
    this.setState({ isCreateModalVisible: !1 }), A("ui_action", "modal", "close", "create_live");
  }
  /** 创建成功后调用，关闭弹窗 + 刷新 */
  onLiveCreated() {
    this.setState({ isCreateModalVisible: !1 }), this.refresh();
  }
  openEditModal(t) {
    this.setState({ isEditModalVisible: !0, editingLive: t }), A("ui_action", "modal", "open", "edit_live");
  }
  closeEditModal() {
    this.setState({ isEditModalVisible: !1 }), A("ui_action", "modal", "close", "edit_live");
  }
  /** 编辑成功后调用，局部更新 lives，避免整页刷新 */
  onLiveEdited(t) {
    const e = this.state.editingLive;
    if (!e) {
      this.setState({ isEditModalVisible: !1 });
      return;
    }
    const i = this.state.lives.map(
      (r) => r.liveId === e.liveId ? { ...r, liveName: t.liveName, coverUrl: t.coverUrl } : r
    );
    this.setState({ isEditModalVisible: !1, lives: i });
  }
}
const Ve = y("GiftConfig"), xe = { name: "", description: "" };
class Ii {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      giftList: [],
      displayList: [],
      categoryList: [],
      searchInput: "",
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      langConfigVisible: !1,
      giftLangConfig: St(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...xe },
      categoryEditVisible: !1,
      editingCategoryGift: null,
      allCategories: [],
      giftCategoryIds: [],
      categorySelectVisible: !1,
      selectedCategoryId: "",
      categoryDeleteVisible: !1,
      deletingCategoryId: "",
      deleteDialogVisible: !1,
      deletingItem: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.destroyed = !1, this.fetching = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
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
  /**
   * 初始加载（防止 React StrictMode 等场景的重复请求）。
   */
  async init() {
    this.fetching || (this.fetching = !0, await this.fetchGiftList());
  }
  async fetchGiftList() {
    this.setState({ loading: !0 });
    try {
      const t = await this.opts.actions.fetchGiftList(), e = t.giftCategoryList || [], { gifts: i, categories: r } = et({
        gifts: t.giftList || [],
        categories: e
      });
      this.setState({
        giftList: i,
        displayList: M(i, this.state.searchInput),
        categoryList: r.length > 0 ? r : this.state.categoryList
      });
    } catch (t) {
      Ve.error("fetchGiftConfig", String(this.opts.t(o.GET_GIFT_LIST_FAILED)), t);
      const e = this.formatError(t, this.opts.t(o.GET_GIFT_LIST_FAILED));
      this.opts.toast.error(e);
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    if (this.state.giftList.length === 0) return;
    const { gifts: t, categories: e } = et({
      gifts: this.state.giftList,
      categories: this.state.categoryList
    });
    this.setState({
      giftList: t,
      categoryList: e,
      displayList: M(t, this.state.searchInput)
    });
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    const e = String(t ?? "");
    this.setState({ searchInput: e }), !tt(e, Q) && this.setState({ displayList: M(this.state.giftList, e) });
  }
  isSearchInputTooLong() {
    return tt(this.state.searchInput, Q);
  }
  /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
  search() {
    const t = this.state.searchInput.trim();
    if (!t) return;
    if (this.isSearchInputTooLong()) {
      this.opts.toast.error(this.opts.t(o.INPUT_TOO_LONG));
      return;
    }
    const e = M(this.state.giftList, this.state.searchInput);
    e.length > 0 ? (this.setState({ displayList: e }), this.opts.toast.success(this.opts.t("Found results", { count: e.length }))) : (this.setState({ displayList: [] }), this.opts.toast.error(this.opts.t("No gift found", { keyword: t })));
  }
  clearSearch() {
    this.setState({ searchInput: "", displayList: this.state.giftList });
  }
  // -------- 导航 / 复制 --------
  goToCategoryManagement() {
    Ne(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await W(String(t || "")), this.opts.toast.success(this.opts.t(o.COPY_LABEL_COPIED, { label: this.opts.t(o.GIFT_ID) }));
  }
  // -------- 新增 / 编辑弹窗（仅切换可见性，formData 由视图层管理） --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      dialogVisible: !0
    });
  }
  openEditDialog(t) {
    this.setState({
      isEdit: !0,
      editingId: t.id,
      dialogVisible: !0
    });
  }
  closeDialog() {
    this.setState({ dialogVisible: !1 });
  }
  /**
   * 提交礼物表单。视图层负责完成校验、上传解析后传入归一化 payload。
   * 成功后会自动关闭弹窗并刷新列表。
   * 失败抛出原始错误，视图层可在调用处捕获以保留 submitting 状态。
   */
  async submitGift(t) {
    try {
      this.state.isEdit ? await this.opts.actions.updateGift({
        giftId: this.state.editingId,
        name: t.name,
        iconUrl: t.iconUrl,
        price: t.price,
        animationUrl: t.animationUrl,
        level: t.level || void 0,
        description: t.description
      }) : await this.opts.actions.createGift({
        id: t.id || "",
        name: t.name,
        iconUrl: t.iconUrl,
        price: t.price,
        animationUrl: t.animationUrl,
        enabled: t.enabled,
        level: t.level || void 0,
        description: t.description,
        extensionInfo: t.extensionInfo?.trim() || void 0
      }), this.opts.toast.success(
        this.opts.t(this.state.isEdit ? o.GIFT_UPDATED_SUCCESSFULLY : o.GIFT_CREATED_SUCCESSFULLY)
      ), await this.fetchGiftList(), this.setState({ dialogVisible: !1 });
    } catch (e) {
      throw this.opts.toast.error(this.opts.t(o.OPERATION_FAILED, {
        error: this.extractErrorInfo(e)
      })), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openGiftLangConfigDialog(t) {
    const e = this.state.giftList.find((a) => a.id === t), { config: i, langsToFetch: r } = we(e?.languageList);
    if (this.setState({
      editingId: t,
      giftLangConfig: i,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const a = await Promise.allSettled(
          r.map(async (c) => {
            const l = await this.opts.actions.getGiftLanguage({
              giftId: t,
              language: f[c].code
            });
            return { langKey: c, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const n = { ...this.state.giftLangConfig };
        for (const c of a)
          if (c.status === "fulfilled") {
            const { langKey: l, result: u } = c.value;
            n[l] = { name: u.name || "", description: u.description || "" };
          }
        this.setState({ giftLangConfig: n });
      } catch {
      }
  }
  closeGiftLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    const i = this.state.giftList.find((n) => n.id === t), r = Re(i?.languageList, e);
    let a = r.form;
    if (r.needsFetch)
      try {
        const n = await this.opts.actions.getGiftLanguage({ giftId: t, language: r.langCode });
        a = { name: n.name || "", description: n.description || "" };
      } catch {
      }
    this.setState({
      editingGiftForLang: t,
      editingLang: e,
      langEditForm: a,
      langEditVisible: !0
    });
  }
  setLangEditForm(t) {
    this.setState({
      langEditForm: { ...this.state.langEditForm, ...t }
    });
  }
  closeLangEditDialog() {
    this.setState({ langEditVisible: !1 });
  }
  /**
   * 保存单语言编辑。校验逻辑（字节长度等）由视图层在调用前完成，
   * 控制器只负责调 API + toast + 刷新。
   */
  async saveLangEdit() {
    const { editingGiftForLang: t, editingLang: e, langEditForm: i, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        i.name && (await this.opts.actions.setGiftLanguage({
          giftId: t,
          language: f[e].code,
          name: i.name,
          description: i.description
        }), this.opts.toast.success(this.opts.t(o.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchGiftList(), r && this.state.editingLang === e && this.setState({
          giftLangConfig: {
            ...this.state.giftLangConfig,
            [e]: { ...i }
          }
        });
      } catch (a) {
        this.opts.toast.error(this.opts.t(o.OPERATION_FAILED, {
          error: this.extractErrorInfo(a)
        }));
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftLanguage({ giftId: t, language: f[e].code }), this.opts.toast.success(this.opts.t(o.LANGUAGE_CONFIG_CLEARED)), this.setState({
        giftLangConfig: {
          ...this.state.giftLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchGiftList();
    } catch (i) {
      this.opts.toast.error(this.opts.t(o.OPERATION_FAILED, {
        error: this.extractErrorInfo(i)
      }));
    }
  }
  // -------- 类别编辑弹窗 --------
  openCategoryEditDialog(t) {
    const e = this.state.categoryList.map((a) => ({
      id: String(a.id || ""),
      name: a.name || "",
      giftIds: (a.giftIds || []).map(String)
    })), i = (t.categoryIds || []).map(String);
    let r = i;
    i.length === 0 && e.length > 0 && (r = e.filter((a) => a.giftIds.includes(String(t.id))).map((a) => a.id)), this.setState({
      editingCategoryGift: t,
      allCategories: e,
      giftCategoryIds: r,
      categorySelectVisible: !1,
      selectedCategoryId: "",
      categoryEditVisible: !0
    });
  }
  closeCategoryEditDialog() {
    this.setState({ categoryEditVisible: !1 });
  }
  // 类别选择子弹窗 / 内联弹层
  openCategorySelectDialog() {
    this.setState({ categorySelectVisible: !0, selectedCategoryId: "" });
  }
  closeCategorySelectDialog() {
    this.setState({ categorySelectVisible: !1 });
  }
  setCategorySelectVisible(t) {
    this.setState({ categorySelectVisible: t });
  }
  setSelectedCategoryId(t) {
    this.setState({ selectedCategoryId: t });
  }
  /** 当前可添加的类别（计算属性，由视图层调用而非自动派生） */
  getAvailableCategories() {
    return this.state.allCategories.filter(
      (t) => !this.state.giftCategoryIds.includes(t.id)
    );
  }
  async confirmAddCategory() {
    const { editingCategoryGift: t, selectedCategoryId: e } = this.state;
    if (!(!t || !e))
      try {
        await this.opts.actions.addGiftCategoryRelations({
          giftId: t.id,
          categoryIds: [e]
        }), this.setState({
          giftCategoryIds: [...this.state.giftCategoryIds, e],
          categorySelectVisible: !1,
          selectedCategoryId: ""
        }), this.opts.toast.success(this.opts.t(o.CATEGORY_ADDED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(o.OPERATION_FAILED, {
          error: this.extractErrorInfo(i)
        }));
      }
  }
  // 类别移除确认
  requestRemoveCategory(t) {
    this.setState({ deletingCategoryId: t, categoryDeleteVisible: !0 });
  }
  cancelRemoveCategory() {
    this.setState({ categoryDeleteVisible: !1 });
  }
  async confirmRemoveCategory() {
    const { editingCategoryGift: t, deletingCategoryId: e } = this.state;
    if (!(!t || !e))
      try {
        await this.opts.actions.deleteGiftCategoryRelations({
          giftId: t.id,
          categoryIds: [e]
        }), this.setState({
          giftCategoryIds: this.state.giftCategoryIds.filter((i) => i !== e)
        }), this.opts.toast.success(this.opts.t(o.CATEGORY_REMOVED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(o.OPERATION_FAILED, {
          error: this.extractErrorInfo(i)
        }));
      } finally {
        this.setState({ categoryDeleteVisible: !1, deletingCategoryId: "" });
      }
  }
  /** 根据类别 ID 取本地化名称（视图层渲染用） */
  getCategoryName(t) {
    return this.state.allCategories.find((i) => String(i.id) === String(t))?.name || t;
  }
  // -------- 礼物删除确认 --------
  requestDelete(t) {
    this.setState({ deletingItem: t, deleteDialogVisible: !0 });
  }
  cancelDelete() {
    this.setState({ deleteDialogVisible: !1 });
  }
  async confirmDelete() {
    const t = this.state.deletingItem;
    if (t)
      try {
        await this.opts.actions.deleteGift(t.id), this.opts.toast.success(this.opts.t(o.GIFT_DELETED_SUCCESSFULLY)), await this.fetchGiftList();
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(o.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return e?.ErrorInfo || e?.message || this.opts.t(o.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const i = t;
    return i?.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i?.message ? `${e}: ${i.message}` : e;
  }
}
const ke = y("GiftCategory"), rt = {
  categoryId: "",
  name: "",
  description: ""
}, at = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, nt = { name: "", description: "" };
class Si {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      categoryList: [],
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      formData: { ...rt },
      langConfigVisible: !1,
      categoryLangConfig: ot(at),
      langEditVisible: !1,
      editingLang: null,
      editingCategoryForLang: "",
      langEditForm: { ...nt },
      deleteDialogVisible: !1,
      deletingItem: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.destroyed = !1, this.fetching = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
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
  /**
   * 初始加载（防止 React StrictMode 等场景的重复请求）。
   * 优先消费 sessionStorage 中由礼物管理页带过来的缓存。
   */
  async init() {
    this.fetching || (this.fetching = !0, await this.fetchCategoryList(!0));
  }
  /**
   * 获取类别列表。
   * @param useCache 是否优先使用 sessionStorage 缓存（仅首次进入页面有效）
   */
  async fetchCategoryList(t = !0) {
    if (t) {
      const e = Fe();
      if (e.length > 0) {
        this.setState({ categoryList: e });
        return;
      }
    }
    this.setState({ loading: !0 });
    try {
      const e = await this.opts.actions.fetchGiftList();
      this.setState({ categoryList: e.giftCategoryList || [] });
    } catch (e) {
      ke.error("fetchCategoryList", String(this.opts.t(o.GET_CATEGORY_LIST_FAILED)), e), this.opts.toast.error(this.formatError(e, this.opts.t(o.GET_CATEGORY_LIST_FAILED))), this.setState({ categoryList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    this.state.categoryList.length !== 0 && this.setState({ categoryList: Ge(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await W(String(t || "")), this.opts.toast.success(
      this.opts.t(o.COPY_LABEL_COPIED, { label: this.opts.t(o.CATEGORY_ID) })
    );
  }
  // -------- 新增 / 编辑弹窗 --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      formData: { ...rt },
      dialogVisible: !0
    });
  }
  openEditDialog(t) {
    this.setState({
      isEdit: !0,
      editingId: t.id,
      formData: {
        categoryId: t.id,
        name: t.name || "",
        description: t.description || ""
      },
      dialogVisible: !0
    });
  }
  closeDialog() {
    this.setState({ dialogVisible: !1 });
  }
  /** 视图层在 v-model / onChange 时调用，更新表单字段 */
  setFormData(t) {
    this.setState({ formData: { ...this.state.formData, ...t } });
  }
  /**
   * 提交类别表单。视图层负责字段非空 / 字节长度校验后传入归一化 payload。
   * 成功后会自动关闭弹窗并刷新列表。
   * 失败抛出原始错误，视图层可在调用处捕获以保留 submitting 状态。
   */
  async submitForm(t) {
    try {
      this.state.isEdit ? (await this.opts.actions.updateGiftCategory({
        categoryId: this.state.editingId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(o.CATEGORY_UPDATED_SUCCESSFULLY))) : (await this.opts.actions.createGiftCategory({
        categoryId: t.categoryId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(o.CATEGORY_CREATED_SUCCESSFULLY))), this.setState({ dialogVisible: !1 }), await this.fetchCategoryList(!1);
    } catch (e) {
      throw this.opts.toast.error(
        this.opts.t(o.OPERATION_FAILED, { error: this.extractErrorInfo(e) })
      ), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openLangConfigDialog(t) {
    const e = this.state.categoryList.find((a) => a.id === t), i = ot(at), r = [];
    if (e?.languageList && e.languageList.length > 0)
      for (const a of e.languageList) {
        const n = G(a);
        n.langKey && (n.name || n.description ? i[n.langKey] = { name: n.name, description: n.description } : r.push(n.langKey));
      }
    if (this.setState({
      editingId: t,
      categoryLangConfig: i,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const a = await Promise.allSettled(
          r.map(async (c) => {
            const l = await this.opts.actions.getGiftCategoryLanguage(
              t,
              f[c].code
            );
            return { langKey: c, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const n = { ...this.state.categoryLangConfig };
        for (const c of a)
          if (c.status === "fulfilled") {
            const { langKey: l, result: u } = c.value;
            n[l] = { name: u.name || "", description: u.description || "" };
          }
        this.setState({ categoryLangConfig: n });
      } catch {
      }
  }
  closeLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    const i = this.state.categoryList.find((c) => c.id === t), r = f[e].code, a = i?.languageList?.find((c) => G(c).langCode === r);
    let n = { ...nt };
    if (a) {
      const c = G(a);
      if (c.name || c.description)
        n = { name: c.name, description: c.description };
      else
        try {
          const l = await this.opts.actions.getGiftCategoryLanguage(t, r);
          n = { name: l.name || "", description: l.description || "" };
        } catch {
        }
    }
    this.setState({
      editingCategoryForLang: t,
      editingLang: e,
      langEditForm: n,
      langEditVisible: !0
    });
  }
  setLangEditForm(t) {
    this.setState({
      langEditForm: { ...this.state.langEditForm, ...t }
    });
  }
  closeLangEditDialog() {
    this.setState({ langEditVisible: !1 });
  }
  /**
   * 保存单语言编辑。校验逻辑（字节长度等）由视图层在调用前完成，
   * 控制器只负责调 API + toast + 刷新。
   */
  async saveLangEdit() {
    const { editingCategoryForLang: t, editingLang: e, langEditForm: i, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        i.name && (await this.opts.actions.setGiftCategoryLanguage(
          t,
          f[e].code,
          i.name,
          i.description
        ), this.opts.toast.success(this.opts.t(o.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchCategoryList(!1), r && this.state.editingId === t && this.state.editingLang === e && this.setState({
          categoryLangConfig: {
            ...this.state.categoryLangConfig,
            [e]: { ...i }
          }
        });
      } catch (a) {
        this.opts.toast.error(
          this.opts.t(o.OPERATION_FAILED, { error: this.extractErrorInfo(a) })
        );
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftCategoryLanguage(t, f[e].code), this.opts.toast.success(this.opts.t(o.LANGUAGE_CONFIG_CLEARED)), this.setState({
        categoryLangConfig: {
          ...this.state.categoryLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchCategoryList(!1);
    } catch (i) {
      this.opts.toast.error(
        this.opts.t(o.OPERATION_FAILED, { error: this.extractErrorInfo(i) })
      );
    }
  }
  // -------- 删除确认 --------
  requestDelete(t) {
    this.setState({ deletingItem: t, deleteDialogVisible: !0 });
  }
  cancelDelete() {
    this.setState({ deleteDialogVisible: !1 });
  }
  async confirmDelete() {
    const t = this.state.deletingItem;
    if (t)
      try {
        await this.opts.actions.deleteGiftCategory(t.id), this.opts.toast.success(this.opts.t(o.CATEGORY_DELETED_SUCCESSFULLY)), await this.fetchCategoryList(!1);
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(o.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return e?.ErrorInfo || e?.message || this.opts.t(o.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const i = t;
    return i?.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i?.message ? `${e}: ${i.message}` : e;
  }
}
function ot(s) {
  return {
    sc: { ...s.sc },
    tc: { ...s.tc },
    en: { ...s.en }
  };
}
function G(s) {
  if (typeof s == "string")
    return { langCode: s, langKey: Z[s], name: "", description: "" };
  const t = s.language || "";
  return {
    langCode: t,
    langKey: t ? Z[t] : void 0,
    name: s.categoryName || "",
    description: s.categoryDescription || ""
  };
}
export {
  Fe as $,
  ks as A,
  Is as B,
  S as C,
  de as D,
  pi as E,
  Je as F,
  Y as G,
  yt as H,
  ps as I,
  w as J,
  _s as K,
  mt as L,
  Te as M,
  zs as N,
  rs as O,
  T as P,
  pe as Q,
  yi as R,
  ye as S,
  Ue as T,
  Ne as U,
  gs as V,
  Qs as W,
  ds as X,
  ls as Y,
  ae as Z,
  Ce as _,
  me as a,
  is as a$,
  Pe as a0,
  W as a1,
  Ps as a2,
  $s as a3,
  Ks as a4,
  St as a5,
  ns as a6,
  R as a7,
  Qt as a8,
  ve as a9,
  mi as aA,
  ne as aB,
  He as aC,
  jt as aD,
  ut as aE,
  Gs as aF,
  cs as aG,
  Se as aH,
  ii as aI,
  Ie as aJ,
  Es as aK,
  Ws as aL,
  Rs as aM,
  tt as aN,
  le as aO,
  Cs as aP,
  Ts as aQ,
  es as aR,
  ts as aS,
  ss as aT,
  Qe as aU,
  Js as aV,
  As as aW,
  ze as aX,
  Oe as aY,
  wt as aZ,
  os as a_,
  Zs as aa,
  Xs as ab,
  Fs as ac,
  ee as ad,
  vs as ae,
  re as af,
  Ss as ag,
  M as ah,
  ms as ai,
  Ms as aj,
  si as ak,
  fs as al,
  ri as am,
  ws as an,
  di as ao,
  xt as ap,
  x as aq,
  Ys as ar,
  js as as,
  Us as at,
  we as au,
  Re as av,
  Li as aw,
  hi as ax,
  It as ay,
  fi as az,
  ge as b,
  Ge as b0,
  et as b1,
  as as b2,
  Vs as b3,
  xs as b4,
  ce as b5,
  te as b6,
  Os as b7,
  oe as b8,
  ue as b9,
  Wt as ba,
  je as bb,
  zt as bc,
  qe as bd,
  Ns as be,
  Ht as bf,
  qs as bg,
  Ls as bh,
  We as bi,
  Ye as bj,
  ei as bk,
  ti as bl,
  gi as bm,
  Ds as bn,
  bs as bo,
  Xe as bp,
  Hs as bq,
  us as br,
  Vt as bs,
  Ut as bt,
  Ze as bu,
  Le as c,
  hs as d,
  Ot as e,
  ci as f,
  _ as g,
  li as h,
  ni as i,
  oi as j,
  Q as k,
  Si as l,
  Ft as m,
  Ii as n,
  Z as o,
  ai as p,
  f as q,
  fe as r,
  B as s,
  se as t,
  Gt as u,
  k as v,
  ui as w,
  ie as x,
  Bs as y,
  ys as z
};
