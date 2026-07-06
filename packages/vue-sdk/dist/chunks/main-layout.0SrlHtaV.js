import { t as ct, c as y, h as C, r as b } from "./logger.DfjyL4S7.js";
import { aw as d, ax as h, L as E, a9 as lt, P as o, b as Ct, aA as G, am as At, az as bt, B as Dt, as as _t, ai as Tt, a8 as Mt, ab as wt, f as x } from "./en-US.Cyn41QJd.js";
function ds(s, t = 0) {
  const e = Number(s);
  return Number.isFinite(e) ? e : t;
}
function hs(s, t = !1) {
  return typeof s == "boolean" ? s : typeof s == "number" ? s !== 0 : typeof s == "string" ? s === "true" || s === "1" : t;
}
function Rt(s) {
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
function ut(s) {
  const t = s.RoomId || "", e = s.Owner_Account || "", i = {
    liveId: t,
    liveName: s.RoomName || "",
    coverUrl: s.CoverURL || "",
    anchor: {
      userId: e,
      nick: e,
      avatarUrl: ""
    },
    onlineCount: 0,
    // 列表不返回实时在线人数，需要通过 getLiveStatistic 单独获取
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
      onlineCount: 0,
      likeCount: 0,
      giftCount: 0,
      giftAmount: 0,
      commentCount: 0,
      duration: 0
    }
  };
  if ("RoomType" in s) {
    const r = s;
    return {
      ...i,
      liveType: r.RoomType,
      isSeatEnabled: r.IsSeatEnabled,
      maxSeatCount: r.MaxSeatCount,
      maxMemberCount: r.MaxMemberCount,
      isMessageDisabled: r.IsMessageDisabled || !1,
      isLikeEnabled: r.IsLikeEnabled !== !1,
      // 默认 true
      isPublicVisible: r.IsPublicVisible !== !1,
      // 默认 true
      seatTemplate: r.SeatTemplate,
      customInfo: r.CustomInfo ? Rt(r.CustomInfo) : {}
    };
  }
  return i;
}
async function Pt(s = {}) {
  const t = s.next || "0", e = s.count || 20, i = await d(h.fetchLiveList, {
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
      (a) => ut(a)
    ),
    next: i.Response?.Next || ""
  };
}
async function D(s) {
  const [t, e] = await Promise.all([
    d(h.getRoomInfo, { RoomId: s }),
    d(h.getRoomMetadata, { RoomId: s, Keys: [] })
  ]);
  if (!t.Response?.RoomInfo) return null;
  const i = ut(t.Response.RoomInfo);
  if (e?.Response?.Metadata) {
    const r = { ...i.customInfo || {} };
    (e.Response.Metadata || []).forEach((a) => {
      r[a.Key] = a.Value;
    }), i.customInfo = r;
  }
  return i;
}
async function W(s) {
  return d(h.getLiveStatistic, { RoomId: s });
}
async function Ot(s) {
  return d(h.destroyRoom, { RoomId: s });
}
async function Nt(s) {
  const t = s.liveId || String(Date.now()), e = {
    RoomId: t,
    RoomType: "Live",
    SeatTemplate: s.seatTemplate || "VideoDynamicGrid9Seats",
    Owner_Account: s.anchorId,
    IsUnlimitedRoomEnabled: !0
  };
  if (s.useObsStreaming && (e.KeepOwnerOnSeat = !1), s.liveName && s.liveName.trim() && (e.RoomName = s.liveName), s.coverUrl && s.coverUrl.trim() && (e.CoverURL = s.coverUrl.trim()), s.maxSeatCount && (s.seatTemplate === "AudioSalon" || s.seatTemplate === "Karaoke") && (e.MaxSeatCount = Number(s.maxSeatCount)), await d(h.createLive, { RoomInfo: e }), s.customInfo && Object.keys(s.customInfo).length > 0) {
    const r = Object.entries(s.customInfo).map(([a, n]) => ({ Key: a, Value: n }));
    await d(h.setRoomMetadata, { RoomId: t, Metadata: r });
  }
  const i = await D(t);
  if (!i)
    throw new E("");
  return i;
}
async function Ft(s, t) {
  const e = [], i = { RoomId: s, IsUnlimitedRoomEnabled: !0 };
  if (t.liveName !== void 0 && (i.RoomName = t.liveName), t.coverUrl !== void 0 && (i.CoverURL = t.coverUrl), t.isMessageDisabled !== void 0 && (i.IsMessageDisabled = t.isMessageDisabled), e.push(d(h.updateLiveInfo, { RoomInfo: i })), t.customInfo && Object.keys(t.customInfo).length > 0) {
    const a = Object.entries(t.customInfo).map(([n, c]) => ({ Key: n, Value: c }));
    e.push(d(h.setRoomMetadata, { RoomId: s, Metadata: a }));
  }
  return t.deleteKeys && t.deleteKeys.length > 0 && e.push(d(h.delRoomMetadata, { RoomId: s, Keys: t.deleteKeys })), (await Promise.all(e))[0];
}
async function Ut(s, t, e = 600) {
  return d(h.muteMember, { RoomId: s, MemberList_Account: t, MuteTime: e });
}
async function Gt(s, t) {
  return d(h.muteMember, { RoomId: s, MemberList_Account: t, MuteTime: 0 });
}
async function xt(s, t, e = 3600, i = "") {
  return d(h.banMember, { RoomId: s, MemberList_Account: t, Duration: e, Reason: i });
}
async function Vt(s, t) {
  return d(h.unbanMember, { RoomId: s, MemberList_Account: t });
}
async function kt(s, t = {}) {
  return d(h.getMutedMemberList, {
    RoomId: s,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function Bt(s, t = {}) {
  return d(h.getBannedMemberList, {
    RoomId: s,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function Kt(s) {
  return d(h.getRobot, { RoomId: s });
}
async function $t(s) {
  return d(h.getSeatList, { RoomId: s });
}
async function qt(s, t, e = 0) {
  return d(h.pickUserOnSeat, { RoomId: s, Member_Account: t, Index: e });
}
async function Yt(s, t) {
  return d(h.addRobot, { RoomId: s, RobotList_Account: t });
}
async function Ht(s, t, e) {
  return d(h.importAccount, { UserID: s, Nick: t || "", FaceUrl: "" });
}
async function gs(s, t = 50) {
  return lt(`/chat/${s}/messages`, { limit: t });
}
async function fs(s, t) {
  const e = ct().credentials?.userId || "admin";
  return d(h.sendTextMsg, {
    RoomId: s,
    Sender_Account: e,
    TextContent: t,
    MsgPriority: "Normal"
  });
}
async function Wt(s, t, e, i) {
  const r = i || ct().credentials?.userId || "admin";
  return d(h.sendCustomMsg, {
    RoomId: s,
    Sender_Account: r,
    BusinessId: t,
    Data: e
  });
}
async function zt(s, t) {
  return d(h.updateLiveInfo, {
    RoomInfo: {
      RoomId: s,
      IsMessageDisabled: t,
      IsUnlimitedRoomEnabled: !0
    }
  });
}
async function ms(s, t, e) {
  return d(h.muteMember, {
    RoomId: s,
    MemberList_Account: [t],
    MuteTime: e || 60
  });
}
async function ps(s, t) {
  return d(h.muteMember, {
    RoomId: s,
    MemberList_Account: [t],
    MuteTime: 0
  });
}
async function jt(s) {
  return lt(`/chat/${s}/mute-status`);
}
async function Xt(s, t) {
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
async function ys(s, t, e, i) {
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
  return Xt(s, {
    violationType: t,
    violationContent: e,
    handleSuggestion: n
  });
}
const m = y("PlayerRegistry");
class Jt {
  constructor(t = {}) {
    this.playerMap = /* @__PURE__ */ new Map(), this.playerFactory = null, this.stoppingSet = /* @__PURE__ */ new Set(), this.stoppingPromiseMap = /* @__PURE__ */ new Map(), this.playerFactory = t.playerFactory || null, this.debug = t.debug || !1;
  }
  /**
   * 设置播放器工厂
   */
  setPlayerFactory(t) {
    m.info("PlayerRegistry", "setPlayerFactory called", typeof t), this.playerFactory = t;
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
      throw m.error("PlayerRegistry", "playerFactory is not configured!"), new Error(
        "playerFactory is not configured. Please provide it in ServerConfig or call setPlayerFactory()."
      );
    this.debug && m.info("PlayerRegistry", "startPlay called", { liveId: e, containerId: i.id });
    try {
      if (this.stoppingSet.has(e)) {
        this.debug && m.info("PlayerRegistry", `Waiting for stopPlay to complete for ${e}`);
        const n = this.stoppingPromiseMap.get(e);
        n && await n;
      }
      this.playerMap.has(e) && await this.stopPlay(e);
      const a = this.playerFactory(e);
      this.playerMap.set(e, a), await a.play(i, r), this.debug && m.info("PlayerRegistry", `Started playing live ${e}`);
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
      this.debug && m.warn("PlayerRegistry", `stopPlay already in progress for ${t}, skipping`);
      const i = this.stoppingPromiseMap.get(t);
      return i || void 0;
    }
    this.stoppingSet.add(t);
    const e = (async () => {
      try {
        const i = this.playerMap.get(t);
        i && (await i.stop(), await i.destroy(), this.playerMap.delete(t), this.debug && m.info("PlayerRegistry", `Stopped playing live ${t}`));
      } catch (i) {
        this.debug && m.warn("PlayerRegistry", `Error stopping live ${t}:`, i);
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
    await Promise.allSettled(t), this.debug && m.info("PlayerRegistry", "Stopped all players");
  }
  /**
   * 销毁注册表（清理所有资源）
   */
  async destroy() {
    await this.stopAll(), this.playerFactory = null, this.debug && m.info("PlayerRegistry", "Destroyed");
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
const Zt = y("UserProfileManager");
class Qt {
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
      const i = await Ct(t);
      return this.userProfiles = { ...this.userProfiles, ...Object.fromEntries(i) }, this.setLoading(e, !1), i;
    } catch (i) {
      throw this.setLoading(e, !1), Zt.error("UserProfileManager", "fetchProfiles failed:", i), i;
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
const p = y("LiveMonitorCore");
class Ls {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.loading = {}, this.error = null, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new Jt({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new Qt({
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
    p.info("init", "init called", {
      hasPlayerFactory: !!t.playerFactory,
      baseURL: t.baseURL
    }), t.playerFactory ? (p.info("LiveMonitorCore", "Setting playerFactory"), this.playerRegistry.setPlayerFactory(t.playerFactory)) : p.warn("LiveMonitorCore", "No playerFactory provided!");
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
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), D(t).then((i) => {
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
        D(e),
        W(e)
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
          n.streamInfo = await G(e, l) ?? void 0;
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
      throw this.setError(a), this.setLoading(i, !1), p.error("LiveMonitorCore", "fetchLiveDetail failed:", a), a;
    }
  }
  // ========= 创建直播 =========
  async createLive(t) {
    const e = "create";
    this.setLoading(e, !0), this.setError(null);
    try {
      if (!t.anchorId)
        throw new Error("anchorId is required");
      const r = (await Nt(t)).liveId || t.liveId, a = r ? await D(r) : null;
      if (!a)
        throw new Error("创建直播成功，但获取详情失败");
      return this.liveList = [a, ...this.liveList], this.currentLive = a, this.setLoading(e, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), a;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setError(r), this.setLoading(e, !1), p.error("LiveMonitorCore", "createLive failed:", r), r;
    }
  }
  // ========= 更新直播 =========
  async updateLive(t) {
    const e = t.liveId || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as params.liveId, or call setCurrentLive(liveId) first");
    const i = "update";
    this.setLoading(i, !0), this.setError(null);
    try {
      await Ft(e, t);
      const { liveId: r, ...a } = t;
      this.currentLive && (this.currentLive = { ...this.currentLive, ...a, liveId: this.currentLive.liveId }), this.liveList = this.liveList.map(
        (n) => n.liveId === e ? { ...n, ...a, liveId: n.liveId } : n
      ), this.notifyStateChange({
        currentLive: this.currentLive,
        liveList: this.liveList
      }), this.setLoading(i, !1);
    } catch (r) {
      const a = r instanceof Error ? r : new Error(String(r));
      throw this.setError(a), this.setLoading(i, !1), p.error("LiveMonitorCore", "updateLive failed:", a), a;
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
      throw this.setError(a), this.setLoading(i, !1), p.error("LiveMonitorCore", "endLive failed:", a), a;
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
      onlineCount: t.onlineCount || e.TotalViewers || 0,
      viewCount: e.TotalViewers || t.stats?.viewCount || 0,
      likeCount: e.TotalLikesReceived || t.stats?.likeCount || 0,
      giftCount: e.TotalGiftsSent || t.stats?.giftCount || 0,
      giftAmount: e.TotalGiftCoins || t.stats?.giftAmount || 0,
      giftUserCount: e.TotalUniqueGiftSenders || t.stats?.giftUserCount,
      commentCount: e.TotalMsgCount || t.stats?.commentCount || 0,
      duration: t.stats?.duration || 0
    } : t.stats || {
      liveId: t.liveId,
      onlineCount: t.onlineCount || 0,
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
      const n = (await W(e))?.Response, c = n ? this.mergeStatisticData(i, n) : i.stats || {
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
      throw this.setError(n), this.setLoading(r, !1), p.error("LiveMonitorCore", "fetchLiveStats failed:", n), n;
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
        await zt(t, e), this.liveList = this.liveList.map((i) => i.liveId === t ? { ...i, isMuted: e } : i), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
      } catch (i) {
        const r = i instanceof Error ? i : new Error(String(i));
        throw this.setError(r), p.error("LiveMonitorCore", "setAllMute failed:", r), r;
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
        this.setError(i), p.error("LiveMonitorCore", "fetchMuteStatus failed:", i);
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
const A = y("PaginatedList");
function z() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
class Is {
  constructor(t) {
    this.hasMore = !0, this.pageData = [], this.loading = !1, this.isLoading = !1, this.listeners = /* @__PURE__ */ new Set(), this.pageSize = t.pageSize ?? 8, this.pageCursors = t.initialPageCursors ?? z(), this.currentPage = t.initialPage ?? 1, this.fetchPageFn = t.fetchPage;
  }
  // -------- 订阅 / 状态 --------
  getSnapshot() {
    return {
      pageData: this.pageData,
      currentPage: this.currentPage,
      hasMore: this.hasMore,
      loading: this.loading
    };
  }
  subscribe(t) {
    return this.listeners.add(t), () => {
      this.listeners.delete(t);
    };
  }
  notify() {
    const t = this.getSnapshot();
    A.info("PaginatedListController", "notify called, listeners:", this.listeners.size, ", snapshot:", { pageDataLength: t.pageData.length, loading: t.loading, currentPage: t.currentPage }), this.listeners.forEach((e) => e(t));
  }
  // -------- 防止并发 --------
  // isLoading 已在顶部声明，这里不再重复
  // -------- 核心翻页 --------
  /**
   * 回到首页
   */
  async goToFirstPage() {
    if (this.isLoading) {
      A.warn("PaginatedListController", "goToFirstPage: already loading, skipping");
      return;
    }
    this.pageCursors = z(), this.currentPage = 1, await this.loadPage();
  }
  /**
   * 上一页
   */
  async prevPage() {
    if (this.isLoading) {
      A.warn("PaginatedListController", "prevPage: already loading, skipping");
      return;
    }
    this.currentPage <= 1 || (this.currentPage -= 1, await this.loadPage());
  }
  /**
   * 下一页
   */
  async nextPage() {
    if (this.isLoading) {
      A.warn("PaginatedListController", "nextPage: already loading, skipping");
      return;
    }
    this.hasMore && (this.currentPage += 1, await this.loadPage());
  }
  /**
   * 刷新当前页
   */
  async refreshCurrentPage() {
    if (this.isLoading) {
      A.warn("PaginatedListController", "refreshCurrentPage: already loading, skipping");
      return;
    }
    await this.loadPage();
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
      A.error("PaginatedListController", "loadPage failed:", t), this.pageData = [], this.hasMore = !1;
    } finally {
      this.isLoading = !1, this.loading = !1, this.notify();
    }
  }
  // -------- 清理 --------
  destroy() {
    this.pageData = [], this.pageCursors.clear(), this.listeners.clear();
  }
}
function Ss(s) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(s);
}
function vs(s) {
  return /\.svga(\?|$)/i.test(s);
}
function Es(s) {
  return s instanceof File ? s.name.toLowerCase().endsWith(".svga") : !1;
}
function Cs(s) {
  return s.type.startsWith("video/");
}
function V(s) {
  return new TextEncoder().encode(s).length;
}
function As(s) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => t(i.result), i.onerror = e, i.readAsDataURL(s);
  });
}
const te = y("ImagePreview");
class bs {
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
function ee(s) {
  return URL.createObjectURL(s);
}
function se(s) {
  try {
    URL.revokeObjectURL(s);
  } catch (t) {
    te.warn("general", "Failed to revoke ObjectURL:", s, t);
  }
}
function Ds(s, t) {
  return s && se(s), ee(t);
}
y("DragDrop");
function ie(s) {
  const t = s.dataTransfer?.files;
  return t && t.length > 0 ? t[0] : null;
}
function _s(s) {
  return (t) => {
    t.preventDefault();
    const e = ie(t);
    e && s(e);
  };
}
function Ts(s) {
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
function Ms(s) {
  return T[s];
}
function ws(s, t) {
  return Math.max(1, Math.ceil(s / t));
}
function Rs(s, t) {
  return Math.max(1, Math.min(s, t));
}
function Ps(s, t) {
  return (s - 1) * t;
}
function Os(s, t, e) {
  const i = (s - 1) * t + 1, r = Math.min(s * t, e);
  return { start: i, end: r };
}
const Ns = {
  field: "createTime",
  direction: "descend"
}, re = T.liveList, k = "liveList_currentPage", B = "liveList_pageCursors", ae = 1024;
function R() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function ne(s) {
  const { page: t, pageCursors: e, pageSize: i = re } = s, r = e.get(t) || "", { list: a, next: n } = await Pt({ next: r, count: i, sortDirection: "descend" }), c = a, l = new Map(e);
  return n && c.length > 0 && l.set(t + 1, n), {
    lives: c,
    currentPage: t,
    hasMoreData: !!n && c.length === i,
    pageCursors: l,
    response: { ErrorCode: 0, Response: { RoomList: a, Next: n } }
  };
}
function oe(s) {
  const { targetPage: t, currentPage: e, hasMoreData: i } = s;
  return !(t < 1 || t > e && !i);
}
function ce(s) {
  const { currentPage: t, hasMoreData: e, livesLength: i } = s;
  return !e && i <= 1 && t > 1 ? t - 1 : t;
}
function le(s) {
  const t = s.storage || sessionStorage;
  try {
    t.setItem(k, String(s.currentPage)), t.setItem(B, JSON.stringify(Array.from(s.pageCursors.entries())));
  } catch {
  }
}
function ue(s = sessionStorage) {
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
function de(s, t) {
  return V(s) > t;
}
async function he(s) {
  return await D(s);
}
function Fs(s) {
  return s ? new Date(s * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function Us(s, t) {
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
        const u = n.endedAt ? n.endedAt - n.createdAt : Date.now() / 1e3 - n.createdAt, g = c.endedAt ? c.endedAt - c.createdAt : Date.now() / 1e3 - c.createdAt;
        l = u - g;
        break;
      }
      case "status": {
        const u = n.endedAt ? 1 : 0, g = c.endedAt ? 1 : 0;
        l = u - g;
        break;
      }
      default:
        l = 0;
    }
    return l * a;
  }), r;
}
function Gs(s, t) {
  let e = s;
  return t.status && (t.status === "ongoing" ? e = e.filter((i) => !i.endedAt) : t.status === "ended" && (e = e.filter((i) => !!i.endedAt))), t.anchorId && (e = e.filter((i) => i.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (e = e.filter((i) => !i.category || i.category.length === 0 ? !1 : t.tags.some((r) => i.category.includes(r)))), t.customFilter && (e = e.filter(t.customFilter)), e;
}
class xs {
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
const Vs = T.mutedList, ks = T.bannedList, ge = 600, fe = 86400, dt = (s) => Array.isArray(s) ? s.filter((t) => !!t && typeof t == "object") : [], K = (s, ...t) => {
  const e = t.map((i) => s[i]).find((i) => typeof i == "string" && i.length > 0);
  return typeof e == "string" ? e : "";
}, ht = (s, ...t) => {
  const e = t.map((r) => s[r]).find((r) => r != null), i = Number(e || 0);
  return Number.isFinite(i) ? i : 0;
}, O = (s) => s.memberAccounts || s.userIds || [];
async function Bs(s) {
  const t = await kt(s);
  return dt(t.Response?.MutedAccountList || t.MutedAccountList).map((i) => ({
    userId: K(i, "Member_Account", "userId", "UserID"),
    endTime: ht(i, "MutedUntil", "endTime")
  })).filter((i) => i.userId);
}
function Ks(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function $s(s) {
  const t = await Bt(s);
  return dt(t.Response?.BannedAccountList || t.BannedAccountList).map((i) => ({
    userId: K(i, "Member_Account", "userId", "UserID"),
    endTime: ht(i, "BannedUntil", "endTime"),
    reason: K(i, "Reason", "reason") || void 0
  })).filter((i) => i.userId);
}
function qs(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function Ys(s) {
  const { liveId: t } = s, e = O(s), i = s.muteTime ?? s.duration ?? ge;
  await Ut(t, e, i);
}
async function Hs(s) {
  const { liveId: t } = s, e = O(s);
  await Gt(t, e);
}
async function Ws(s) {
  const { liveId: t, reason: e = "" } = s, i = O(s), r = s.banTime ?? s.duration ?? fe;
  await xt(t, i, r, e);
}
async function zs(s) {
  const { liveId: t } = s, e = O(s);
  await Vt(t, e);
}
function gt(s) {
  return `${s}_robot`;
}
function js(s, t) {
  return s === gt(t);
}
function Xs(s, t) {
  const e = gt(t);
  return s.filter((i) => i !== e);
}
function Js(s) {
  const t = Math.floor(Date.now() / 1e3), e = s - t;
  if (e <= 0)
    return "已过期";
  const i = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
  return i > 0 ? `${i}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function Zs(s) {
  const t = Math.floor(Date.now() / 1e3);
  return s <= t;
}
const Qs = (s, t = null) => {
  try {
    return JSON.parse(s);
  } catch (e) {
    return console.warn("Failed to parse JSON:", s, e), t;
  }
}, ti = (s, t) => {
  let e = null;
  return (...i) => {
    e !== null && clearTimeout(e), e = window.setTimeout(() => {
      s(...i), e = null;
    }, t);
  };
}, ei = (s, t = {}) => {
  const e = s;
  e?.requestFullscreen ? e?.requestFullscreen(t) : e?.mozRequestFullScreen ? e?.mozRequestFullScreen(t) : e?.webkitRequestFullScreen ? e?.webkitRequestFullScreen(t) : e?.msRequestFullscreen && e?.msRequestFullscreen(t);
}, si = () => {
  if (!document?.fullscreenElement && !document?.webkitFullscreenElement && !document?.mozFullScreenElement)
    return;
  const s = document;
  s?.exitFullscreen ? s?.exitFullscreen() : s?.msExitFullscreen ? s?.msExitFullscreen() : s?.mozCancelFullScreen ? s?.mozCancelFullScreen() : s?.webkitExitFullscreen && s?.webkitExitFullscreen();
}, Y = async (s) => {
  if (navigator.clipboard?.writeText)
    return navigator.clipboard.writeText(s);
  const t = document.createElement("textarea");
  t.value = s, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function ii(s) {
  return `live_obs_${s}`;
}
let ft = "zh-CN", mt = null;
function ri(s) {
  mt = s;
}
function me() {
  return mt?.() ?? ft;
}
function ai(s) {
  ft = s;
}
const pe = {
  0: "操作成功",
  [-1]: "暂未归类的通用错误",
  [-2]: "请求被限频，请稍后重试",
  [-3]: "重复操作",
  [-1e3]: "未找到 SDKAppID，请在控制台确认应用信息",
  [-1001]: "传入的参数不合法，请检查入参",
  [-1002]: "未登录，请先登录",
  [-1003]: "获取权限失败，当前未授权音/视频权限，请查看是否开启设备权限",
  [-1004]: "该功能需要开通额外的套餐，请在控制台按需开通"
}, ye = {
  0: "Operation successful",
  [-1]: "Unknown error",
  [-2]: "Request rate-limited, please try again later",
  [-3]: "Duplicate operation",
  [-1e3]: "SDKAppID not found, please check in the console",
  [-1001]: "Invalid parameter, please check the input",
  [-1002]: "Not logged in, please log in first",
  [-1003]: "Permission denied, please check device permissions",
  [-1004]: "This feature requires an additional package, please upgrade in the console"
}, Le = {
  [-1100]: "打开摄像头失败，请检查摄像头设备是否正常",
  [-1101]: "摄像头没有系统授权，请检查系统权限设置",
  [-1102]: "摄像头被占用，请检查是否有其他应用正在使用",
  [-1103]: "当前无摄像头设备，请插入摄像头后重试",
  [-1104]: "打开麦克风失败，请检查麦克风设备是否正常",
  [-1105]: "麦克风没有系统授权，请检查系统权限设置",
  [-1106]: "麦克风被占用，请检查是否有其他应用正在使用",
  [-1107]: "当前无麦克风设备，请插入麦克风后重试",
  [-1108]: "获取屏幕分享对象失败，请检查屏幕录制权限",
  [-1109]: "开启屏幕分享失败，请检查直播内是否有人正在屏幕分享"
}, Ie = {
  [-1100]: "Failed to start camera, please check your camera",
  [-1101]: "Camera not authorized, please check system permissions",
  [-1102]: "Camera is occupied by another app",
  [-1103]: "No camera device found, please connect one",
  [-1104]: "Failed to start microphone, please check your microphone",
  [-1105]: "Microphone not authorized, please check system permissions",
  [-1106]: "Microphone is occupied by another app",
  [-1107]: "No microphone device found, please connect one",
  [-1108]: "Failed to capture screen, please check recording permissions",
  [-1109]: "Failed to share screen, please check if someone else is sharing"
}, Se = {
  [-2101]: "需要进房后才可使用此功能",
  [-2102]: "房主不支持退房操作。会议直播可以先转让房主再退房，直播房主只能解散直播",
  [-2103]: "当前直播类型下不支持该操作",
  [-2105]: "创建直播 ID 非法，自定义 ID 必须为可打印 ASCII 字符（0x20-0x7e），最长 48 个字节",
  [-2107]: "直播名称非法，名称最长 30 字节，字符编码必须是 UTF-8",
  [-2108]: "当前用户已在别的直播内，请先退出当前直播"
}, ve = {
  [-2101]: "Please enter a room first",
  [-2102]: "Room owner cannot leave. Transfer ownership first for meeting rooms, or dismiss the room for live rooms",
  [-2103]: "This operation is not supported in the current live type",
  [-2105]: "Invalid live ID. Custom IDs must be printable ASCII (0x20-0x7e), max 48 bytes",
  [-2107]: "Invalid live name. Max 30 bytes, UTF-8 encoding required",
  [-2108]: "You are already in another live, please leave first"
}, Ee = {
  [-2200]: "未找到该用户"
}, Ce = {
  [-2200]: "User not found"
}, Ae = {
  [-2300]: "需要房主权限才能操作",
  [-2301]: "需要房主或管理员权限才能操作",
  [-2310]: "信令请求无权限",
  [-2311]: "信令请求 ID 无效或已经被处理过",
  [-2312]: "信令请求重复",
  [-2340]: "最大麦位超出套餐包数量限制",
  [-2344]: "麦位编号不存在",
  [-2360]: "当前麦位音频被锁定",
  [-2361]: "需要向房主或管理员申请后打开麦克风",
  [-2370]: "当前麦位视频被锁定，需要由房主解锁后才能打开摄像头",
  [-2371]: "需要向房主或管理员申请后打开摄像头",
  [-2372]: "当前麦位视频被锁定，需要由房主解锁后才能打开屏幕分享",
  [-2373]: "需要向房主或管理员申请后打开屏幕分享",
  [-2380]: "当前直播已开启全员禁言",
  [-2381]: "您已被禁言"
}, be = {
  [-2300]: "Room owner permission required",
  [-2301]: "Room owner or admin permission required",
  [-2310]: "No permission for signaling request",
  [-2311]: "Signaling request ID is invalid or already processed",
  [-2312]: "Duplicate signaling request",
  [-2340]: "Maximum seat count exceeds package limit",
  [-2344]: "Seat number not found",
  [-2360]: "Seat audio is locked",
  [-2361]: "Microphone access requires approval from the host or admin",
  [-2370]: "Seat video is locked, camera access requires the host to unlock",
  [-2371]: "Camera access requires approval from the host or admin",
  [-2372]: "Seat video is locked, screen sharing requires the host to unlock",
  [-2373]: "Screen sharing requires approval from the host or admin",
  [-2380]: "All-member mute is enabled in this live",
  [-2381]: "You have been muted"
}, De = {
  [-4001]: "当前直播不支持预加载"
}, _e = {
  [-4001]: "Live preloading is not supported"
}, Te = {
  60002: "HTTP 解析错误，请检查请求 URL 格式",
  60003: "请求 JSON 解析错误，请检查 JSON 格式",
  60004: "请求中账号或签名错误",
  60005: "请求中账号或签名错误",
  60006: "SDKAppID 失效，请核对 SDKAppID 有效性",
  60007: "接口调用频率超过限制，请降低请求频率",
  60008: "服务请求超时或 HTTP 请求格式错误，请检查并重试",
  60009: "请求资源错误，请检查请求 URL",
  60010: "请求需要 App 管理员权限",
  60011: "SDKAppID 请求频率超限，请降低请求频率",
  60012: "请求需要带 SDKAppID，请检查请求 URL",
  60013: "HTTP 响应包 JSON 解析错误",
  60014: "置换账号超时",
  60015: "请求包体账号类型错误，请确认账号为字符串格式",
  60016: "SDKAppID 被禁用",
  60017: "请求被禁用",
  60018: "请求过于频繁，请稍后重试",
  60019: "请求过于频繁，请稍后重试",
  60020: "专业版套餐包已到期并停用，请重新购买套餐包",
  60021: "RestAPI 调用来源 IP 非法"
}, Me = {
  60002: "HTTP parse error, please check the request URL format",
  60003: "JSON parse error, please check the JSON format",
  60004: "Account or signature error",
  60005: "Account or signature error",
  60006: "SDKAppID is invalid, please verify in the console",
  60007: "API rate limit exceeded, please reduce request frequency",
  60008: "Service timeout or HTTP format error, please try again",
  60009: "Resource error, please check the request URL",
  60010: "App admin permission required",
  60011: "SDKAppID rate limit exceeded, please reduce request frequency",
  60012: "SDKAppID required, please check the request URL",
  60013: "HTTP response JSON parse error",
  60014: "Account swap timeout",
  60015: "Account type error, please confirm the account is a string",
  60016: "SDKAppID is disabled",
  60017: "Request is disabled",
  60018: "Request too frequent, please try again later",
  60019: "Request too frequent, please try again later",
  60020: "Package has expired, please renew in the console",
  60021: "Source IP is not allowed"
}, we = {
  100001: "服务器内部错误，请重试",
  100002: "请求参数非法，请检查请求是否正确",
  100003: "直播 ID 已被使用，请选择其他直播 ID",
  100004: "直播不存在或已被解散",
  100005: "非直播成员",
  100006: "操作权限不足",
  100007: "无付费信息，请在控制台购买套餐包",
  100008: "直播成员已满",
  100009: "标签数量超上限",
  100010: "直播 ID 已被使用，操作者为主播，可以直接使用",
  100011: "直播 ID 已被 IM 占用，请换一个直播 ID 或先通过 IM 接口解散该群",
  100012: "操作频率超过限制，请稍后重试",
  100013: "超过付费上限，请检查套餐包限制",
  100015: "无效的直播类型",
  100016: "该成员已被封禁",
  100017: "该成员已被禁言",
  100018: "当前直播需要密码才能进入",
  100019: "进直播密码错误",
  100020: "管理员数量超过上限",
  100102: "信令请求冲突",
  100200: "麦位已锁定，请尝试其他麦位",
  100201: "当前麦位已经有人了",
  100202: "已处于排麦状态",
  100203: "已处于麦上状态",
  100204: "未在排麦列表中",
  100205: "麦位已满",
  100206: "未在麦上",
  100210: "已经有用户在麦位上",
  100211: "该直播不支持连麦",
  100251: "连麦列表为空",
  100400: "当前连线不存在或已结束",
  100401: "该直播已经在连线中",
  100402: "该直播存在待处理的连线请求",
  100403: "当前直播正与其他直播连线中",
  100404: "超过连线和 Battle 直播数量上限",
  100405: "短时间内连线过于频繁，请稍后再试",
  100411: "该场次 Battle 不存在或已结束",
  100412: "发起的 Battle 中没有有效的直播",
  100413: "短时间内频繁发起 Battle，请稍后再试",
  100414: "该直播已不在 Battle 中",
  100415: "该直播处于其他 Battle 场次中",
  100416: "该直播存在待处理的 Battle 请求",
  100419: "该直播处于 Battle 中",
  100420: "该 Battle 场次还未开始",
  100421: "该 Battle 场次已经结束",
  100500: "直播 Meta 数据中的 Key 数量超过上限",
  100501: "直播 Meta 数据中单个 Key 对应的值超过最大字节数限制",
  100502: "直播 Meta 数据中所有 Key 对应的值总和超过最大字节数限制",
  100503: "删除直播 Meta 数据时，被删除的 Key 没有一个存在",
  100504: "直播 Meta 数据中的 Key 大小超过最大字节数限制"
}, Re = {
  100001: "Internal server error, please try again",
  100002: "Invalid request parameters",
  100003: "Live ID is already in use, please choose another",
  100004: "Live not found or already dismissed",
  100005: "Not a live member",
  100006: "Insufficient permissions",
  100007: "No payment info, please purchase a package in the console",
  100008: "Live members are full",
  100009: "Tag count exceeds limit",
  100010: "Live ID already in use, but you are the owner",
  100011: "Live ID is occupied by IM, please choose another or dismiss the IM group first",
  100012: "Operation rate limit exceeded, please try again later",
  100013: "Payment limit exceeded, please check package limits",
  100015: "Invalid live type",
  100016: "This member has been banned",
  100017: "This member has been muted",
  100018: "Live password required",
  100019: "Incorrect live password",
  100020: "Admin count exceeds limit",
  100102: "Signaling request conflict",
  100200: "Seat is locked, please try another seat",
  100201: "Seat is already occupied",
  100202: "Already in the queue",
  100203: "Already on a seat",
  100204: "Not in the queue",
  100205: "Seats are full",
  100206: "Not on a seat",
  100210: "User is already on a seat",
  100211: "This live does not support co-hosting",
  100251: "Co-host list is empty",
  100400: "Connection not found or already ended",
  100401: "Live is already connected",
  100402: "Live has a pending connection request",
  100403: "Live is currently connected to another live",
  100404: "Connection and Battle limit exceeded",
  100405: "Connections too frequent, please try again later",
  100411: "Battle not found or already ended",
  100412: "No valid lives in this Battle",
  100413: "Battles too frequent, please try again later",
  100414: "Live is no longer in a Battle",
  100415: "Live is in another Battle",
  100416: "Live has a pending Battle request",
  100419: "Live is in a Battle",
  100420: "Battle has not started yet",
  100421: "Battle has ended",
  100500: "Live meta key count exceeds limit",
  100501: "Live meta value for a single key exceeds max byte limit",
  100502: "Live meta total value size exceeds max byte limit",
  100503: "None of the keys to delete exist in live meta",
  100504: "Live meta key size exceeds max byte limit"
}, Pe = {
  ...pe,
  ...Le,
  ...Se,
  ...Ee,
  ...Ae,
  ...De,
  ...Te,
  ...we
}, Oe = {
  ...ye,
  ...Ie,
  ...ve,
  ...Ce,
  ...be,
  ..._e,
  ...Me,
  ...Re
};
function j(s, t, e, i) {
  if (t)
    return t;
  const r = i ?? me(), a = r === "en-US" ? Oe : Pe, n = e ?? (r === "en-US" ? `Unknown error (code: ${s})` : `未知错误（错误码: ${s}）`);
  return a[s] ?? n;
}
function ni(s) {
  return s === 0;
}
function oi(s) {
  return s < 0;
}
function ci(s) {
  return s >= 6e4 && s < 7e4;
}
function li(s) {
  return s >= 1e5;
}
function ui(s) {
  return s === 0 ? "success" : s < 0 ? "client" : s >= 6e4 && s < 7e4 ? "rest_api" : s >= 1e5 ? "server" : "unknown";
}
function di(s) {
  const t = s;
  return {
    code: Number(t?.code ?? t?.ErrorCode ?? t?.errorCode ?? 0),
    info: String(t?.ErrorInfo ?? t?.errorInfo ?? t?.message ?? ""),
    original: t?.originalError ?? s
  };
}
const $ = [
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
], X = [
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
], Ne = [
  ...$,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function P(s) {
  return !!s && typeof s == "object" && !Array.isArray(s);
}
function pt(s) {
  return typeof s == "string" ? s.trim() : "";
}
function _(s, t) {
  if (!s) return "";
  for (const e of t) {
    const i = pt(s[e]);
    if (i)
      return i;
  }
  return "";
}
function v(s) {
  if (P(s))
    return s;
  if (typeof s == "string")
    try {
      const t = JSON.parse(s);
      return P(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function yt(s) {
  return [
    v(s.liveOwner),
    v(s.anchor),
    v(s.owner),
    v(s.host),
    v(s.userInfo),
    v(s.sender)
  ];
}
function hi(s) {
  const t = (s || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function gi(s) {
  if (!P(s))
    return "";
  const t = _(s, $);
  if (t)
    return t;
  for (const i of yt(s)) {
    const r = _(i, $);
    if (r)
      return r;
  }
  const e = v(
    s.CustomINFO ?? s.customInfo ?? s.customData ?? s.metadata
  );
  return _(e, Ne);
}
function fi(s, t = "") {
  if (typeof s == "string")
    return s.trim() || t;
  if (!P(s))
    return t;
  const e = _(s, X);
  if (e)
    return e;
  const i = pt(s.liveOwner);
  if (i)
    return i;
  for (const r of yt(s)) {
    const a = _(r, X);
    if (a)
      return a;
  }
  return t;
}
const Fe = "live_", mi = 43, pi = 100, Ue = "VideoDynamicGrid9Seats", Ge = 8, w = 9 / 16, Lt = 16 / 9, I = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, xe = [
  { value: "VideoDynamicGrid9Seats", labelKey: o.DYNAMIC_GRID_LAYOUT, descKey: o.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: o.FLOATING_WINDOW_LAYOUT, descKey: o.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: o.FIXED_GRID_LAYOUT, descKey: o.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: o.FIXED_WINDOW_LAYOUT, descKey: o.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: o.LANDSCAPE_BROADCASTING, descKey: o.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function yi() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: Ue,
    maxSeatCount: Ge
  };
}
function Li() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function Ve(s) {
  return `${Fe}${s}`;
}
function ke(s) {
  return s === "AudioSalon" || s === "Karaoke";
}
function Be(s) {
  return xe.find((t) => t.value === s);
}
function Ii(s) {
  return Be(s)?.orientation === "landscape" ? Lt : w;
}
function Si(s) {
  return !s.key.trim() && !!s.value.trim();
}
function Ke(s) {
  const t = {};
  for (const e of s) {
    const i = e.key.trim();
    i && (t[i] = e.value);
  }
  return t;
}
function vi(s) {
  const t = {};
  let e = 0;
  for (const r of s) {
    const a = r.key.trim();
    if (!a) continue;
    const n = V(a);
    if (n > I.maxKeyBytes)
      return { type: "key-too-long", key: a, max: I.maxKeyBytes, current: n };
    const c = V(r.value);
    if (c > I.maxValueBytes)
      return { type: "value-too-long", key: a, max: I.maxValueBytes, current: c };
    e += c, t[a] = r.value;
  }
  const i = Object.keys(t).length;
  return i > I.maxCount ? { type: "max-count", max: I.maxCount, current: i } : e > I.maxTotalValueBytes ? { type: "total-value-too-long", max: I.maxTotalValueBytes, current: e } : null;
}
function Ei(s, t) {
  const e = new Set(Object.keys(t));
  return s.filter((i) => !e.has(i));
}
function Ci(s) {
  const { formData: t, coverUrl: e, customInfos: i, useObsStreaming: r } = s, a = Ke(i), n = {
    liveId: Ve(t.anchorId),
    anchorId: t.anchorId,
    liveName: t.liveName,
    seatTemplate: t.seatTemplate
  };
  return e && (n.coverUrl = e), ke(t.seatTemplate) && (n.maxSeatCount = t.maxSeatCount), Object.keys(a).length > 0 && (n.customInfo = a), r && (n.useObsStreaming = !0), n;
}
function $e(s) {
  if (!s) return [];
  if (typeof s == "string")
    try {
      return $e(JSON.parse(s));
    } catch {
      return [];
    }
  return typeof s != "object" ? [] : Object.entries(s).map(([t, e]) => ({
    key: t,
    value: String(e)
  }));
}
function Ai(s) {
  return new Promise((t) => {
    if (!s) {
      t(w);
      return;
    }
    const e = new Image();
    e.crossOrigin = "anonymous", e.onload = () => {
      const i = e.naturalWidth / e.naturalHeight;
      t(i > 1 ? Lt : w);
    }, e.onerror = () => t(w), e.src = s;
  });
}
const qe = y("obs"), Ye = 70102;
function He(s) {
  return `live_obs_${s}`;
}
function We(s) {
  const t = /* @__PURE__ */ new Set();
  return s?.forEach((e) => {
    e.Member_Account && t.add(e.Member_Account);
  }), t;
}
function ze(s) {
  return s || null;
}
async function J(s, t) {
  const [e, i] = await Promise.all([
    Kt(s).then((r) => r.Response?.RobotList_Account || []).catch(() => []),
    $t(s).then((r) => We(r.Response?.SeatList)).catch(() => /* @__PURE__ */ new Set())
  ]);
  return {
    hasRobot: e.includes(t),
    onSeat: i.has(t)
  };
}
async function bi(s) {
  const { liveId: t, anchorId: e, onStatusChange: i, messages: r = {} } = s, a = He(e), n = r.getStreamInfoFailed || "Get Stream Info Failed";
  let c = null, l = "";
  try {
    const { hasRobot: u, onSeat: g } = await J(t, a);
    let H = g;
    if (!u) {
      i?.("creating");
      const L = await Ht(a, `OBS Robot ${a}`);
      if (L.ErrorCode !== 0 && L.Error !== 0 && L.ErrorCode !== Ye)
        throw new E(L.ErrorInfo || "", L.ErrorCode);
      const N = await Yt(t, [a]);
      if (N.ErrorCode !== 0)
        throw new E(N.ErrorInfo || "", N.ErrorCode);
      H = (await J(t, a)).onSeat;
    }
    if (!H) {
      i?.("seating");
      const L = await qt(t, a);
      if (L.ErrorCode !== 0)
        throw new E(L.ErrorInfo || "", L.ErrorCode);
    }
    i?.("ready");
  } catch (u) {
    qe.error("OBS setup failed", "", u);
    const g = (u instanceof Error ? u.message : "") || r.setupFailed || "OBS Setup Failed";
    return i?.("error"), {
      robotId: a,
      streamInfo: c,
      streamInfoError: l,
      setupError: g,
      status: "error",
      configuredSuccessfully: !1
    };
  }
  try {
    let u = await G(t, a);
    if (!u && At() === 0) {
      const g = await bt();
      g && (Dt({ userId: g.userId, userSig: g.userSig, sdkAppId: g.sdkAppId }), u = await G(t, a));
    }
    c = ze(u), c || (l = n);
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
const It = T.moderation, je = 10;
async function Di(s) {
  const {
    liveId: t,
    pageNum: e,
    pageSize: i = It,
    minutes: r = je,
    violationOnly: a = !0
  } = s, n = await Tt({
    liveId: t,
    pageNum: e,
    pageSize: i,
    minutes: r,
    violationOnly: a
  }), c = await Mt(n.list), l = await wt();
  return {
    list: c,
    total: Math.max(0, n.total - l),
    currentPage: e
  };
}
async function _i(s) {
  await _t(s);
}
function Ti(s, t, e, i = It) {
  const r = Math.max(0, t - e), a = Math.max(1, Math.ceil(r / i));
  return Math.min(s, a);
}
function Mi(s, t) {
  return s.includes(t) ? s.filter((e) => e !== t) : [...s, t];
}
function wi(s, t) {
  if (t.length > 0 && t.every((i) => s.includes(i)))
    return s.filter((i) => !t.includes(i));
  {
    const i = new Set(s);
    return t.forEach((r) => i.add(r)), Array.from(i);
  }
}
function Ri(s, t) {
  return s.filter((e) => t.includes(e));
}
function Pi(s, t) {
  return t.length === 0 ? !1 : t.every((e) => s.includes(e));
}
function Oi(s) {
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
}, Ni = ["sc", "tc", "en"], Fi = 20, Ui = 20, Gi = 20, xi = 100, Q = 50, Vi = 45;
function St(s) {
  return new TextEncoder().encode(s).length;
}
function ki(s, t) {
  if (!s || t <= 0)
    return "";
  let e = "", i = 0;
  for (const r of s) {
    const a = St(r);
    if (i + a > t)
      break;
    e += r, i += a;
  }
  return e;
}
function Bi(s) {
  if (!s) return "-";
  const t = typeof s == "number" ? s * 1e3 : parseInt(s) * 1e3, e = new Date(t), i = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), a = String(e.getDate()).padStart(2, "0"), n = String(e.getHours()).padStart(2, "0"), c = String(e.getMinutes()).padStart(2, "0"), l = String(e.getSeconds()).padStart(2, "0");
  return `${i}-${r}-${a} ${n}:${c}:${l}`;
}
function Ki(s) {
  return f[s];
}
function vt(s) {
  const t = Object.entries(f).find(([e, i]) => i.code === s);
  return t ? t[0] : void 0;
}
function $i(s) {
  const t = vt(s);
  return t ? f[t].label : s;
}
function qi(s) {
  return typeof s == "string" ? s : typeof s == "number" ? String(s) : s.Language || s.language || "";
}
function Et() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function Xe(s, t) {
  return s?.find((e) => e.language === t);
}
function Je(s) {
  const t = Et(), e = [];
  if (!s || s.length === 0)
    return { config: t, langsToFetch: e };
  for (const i of s) {
    const r = i.language, a = vt(r);
    a && (i.name || i.description ? t[a] = { name: i.name || "", description: i.description || "" } : e.push(a));
  }
  return { config: t, langsToFetch: e };
}
function Ze(s, t) {
  const e = f[t].code, i = Xe(s, e);
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
function Qe(s) {
  return s.trim().toLowerCase();
}
function tt(s, t) {
  return St(s) > t;
}
function M(s, t) {
  const e = Qe(t);
  return e ? s.filter((i) => {
    const r = (i.id || "").toLowerCase(), a = (i.name || "").toLowerCase(), n = (i.description || "").toLowerCase(), c = (i.categories || []).join(",").toLowerCase();
    return r.includes(e) || a.includes(e) || n.includes(e) || c.includes(e);
  }) : s;
}
function et(s) {
  const t = s.categories.map((r) => {
    const a = x(r.languageList, "categoryName", "categoryDescription");
    return {
      ...r,
      name: a?.name || r.defaultName || r.name,
      description: a?.description || r.defaultDescription || r.description
    };
  }), e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    e.set(String(r.id), r.name);
  }), { gifts: s.gifts.map((r) => {
    const a = x(r.languageList, "name", "description"), n = (r.categoryIds || []).map((c) => e.get(String(c)) || c);
    return {
      ...r,
      name: a?.name || r.defaultName || r.name,
      description: a?.description || r.defaultDescription || r.description,
      categories: n
    };
  }), categories: t };
}
const q = "gift_categories_cache";
function ts(s) {
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
function es(s, t = sessionStorage) {
  if (s.length !== 0)
    try {
      t.setItem(q, JSON.stringify(s));
    } catch {
    }
}
function ss(s = sessionStorage) {
  try {
    const t = s.getItem(q);
    return t ? (s.removeItem(q), ts(JSON.parse(t))) : [];
  } catch {
    return [];
  }
}
function is(s) {
  return s.map((t) => {
    const e = x(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: e?.name || t.defaultName || t.name,
      description: e?.description || t.defaultDescription || t.description
    };
  });
}
const F = y("LiveList"), S = {
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
function Yi(s) {
  const t = [
    { key: "liveId", i18nKey: o.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: S.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: o.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: S.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: o.COVER_IMAGE, className: "col-cover", width: S.COVER_WIDTH },
    { key: "anchor", i18nKey: o.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: S.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: o.CREATE_TIME, className: "live-list-col-time", width: S.CREATED_AT_WIDTH }
  ];
  return s.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: S.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: o.ACTIONS, className: "live-list-col-action", maxWidth: S.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function Hi(s) {
  const { live: t, t: e, onEnter: i, onDetail: r, onEdit: a, onDelete: n } = s;
  return [
    { key: "enter", label: e(o.ENTER_LIVE), title: e(o.ENTER_LIVE), onClick: () => i(t.liveId) },
    { key: "detail", label: e(o.LIVE_DETAILS), title: e(o.LIVE_DETAILS), onClick: () => r(t) },
    { key: "edit", label: e(o.EDIT), title: e(o.EDIT), onClick: () => a(t) },
    { key: "delete", label: e(o.DISSOLVE), title: e(o.DISSOLVE), danger: !0, onClick: () => n(t) }
  ];
}
async function rs(s, t, e) {
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
class Wi {
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
    const t = ue();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await ne({
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
    oe({
      targetPage: t,
      currentPage: this.state.currentPage,
      hasMoreData: this.state.hasMoreData
    }) && (C("ui_action", "pagination", String(t)), this.loadPage(t));
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    this.setState({ searchInput: t });
  }
  isSearchInputTooLong() {
    return de(this.state.searchInput, ae);
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
        const e = await he(t);
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
    le({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), C("ui_action", "enter_live", t), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await Y(t);
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
    const { snapshot: e, toastError: i } = await rs(t, this.opts.t, this.opts.fetchLiveDetail);
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
        const e = ce({
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
    this.setState({ isCreateModalVisible: !0 }), C("ui_action", "modal", "open", "create_live");
  }
  closeCreateModal() {
    this.setState({ isCreateModalVisible: !1 }), C("ui_action", "modal", "close", "create_live");
  }
  /** 创建成功后调用，关闭弹窗 + 刷新 */
  onLiveCreated() {
    this.setState({ isCreateModalVisible: !1 }), this.refresh();
  }
  openEditModal(t) {
    this.setState({ isEditModalVisible: !0, editingLive: t }), C("ui_action", "modal", "open", "edit_live");
  }
  closeEditModal() {
    this.setState({ isEditModalVisible: !1 }), C("ui_action", "modal", "close", "edit_live");
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
const as = y("GiftConfig"), ns = { name: "", description: "" };
class zi {
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
      giftLangConfig: Et(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...ns },
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
      as.error("fetchGiftConfig", String(this.opts.t(o.GET_GIFT_LIST_FAILED)), t);
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
    es(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await Y(String(t || "")), this.opts.toast.success(this.opts.t(o.COPY_LABEL_COPIED, { label: this.opts.t(o.GIFT_ID) }));
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
    const e = this.state.giftList.find((a) => a.id === t), { config: i, langsToFetch: r } = Je(e?.languageList);
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
    const i = this.state.giftList.find((n) => n.id === t), r = Ze(i?.languageList, e);
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
const os = y("GiftCategory"), rt = {
  categoryId: "",
  name: "",
  description: ""
}, at = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, nt = { name: "", description: "" };
class ji {
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
      const e = ss();
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
      os.error("fetchCategoryList", String(this.opts.t(o.GET_CATEGORY_LIST_FAILED)), e), this.opts.toast.error(this.formatError(e, this.opts.t(o.GET_CATEGORY_LIST_FAILED))), this.setState({ categoryList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    this.state.categoryList.length !== 0 && this.setState({ categoryList: is(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await Y(String(t || "")), this.opts.toast.success(
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
        const n = U(a);
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
    const i = this.state.categoryList.find((c) => c.id === t), r = f[e].code, a = i?.languageList?.find((c) => U(c).langCode === r);
    let n = { ...nt };
    if (a) {
      const c = U(a);
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
function U(s) {
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
  oe as $,
  mi as A,
  ks as B,
  I as C,
  fe as D,
  pi as E,
  xs as F,
  q as G,
  Wi as H,
  Ls as I,
  It as J,
  Vs as K,
  Lt as L,
  je as M,
  w as N,
  bs as O,
  T as P,
  Ws as Q,
  Ci as R,
  xe as S,
  Ve as T,
  Hi as U,
  rs as V,
  es as W,
  Ps as X,
  Ti as Y,
  Os as Z,
  ws as _,
  j as a,
  Cs as a$,
  Ke as a0,
  ss as a1,
  ts as a2,
  Y as a3,
  ti as a4,
  yi as a5,
  Li as a6,
  Et as a7,
  _s as a8,
  R as a9,
  qi as aA,
  Ki as aB,
  vt as aC,
  $i as aD,
  Yi as aE,
  ce as aF,
  gs as aG,
  jt as aH,
  kt as aI,
  ii as aJ,
  Ms as aK,
  Be as aL,
  Pi as aM,
  ke as aN,
  qs as aO,
  oi as aP,
  Si as aQ,
  Zs as aR,
  tt as aS,
  de as aT,
  Ks as aU,
  js as aV,
  ci as aW,
  li as aX,
  ni as aY,
  Es as aZ,
  vs as a_,
  ee as aa,
  $e as ab,
  _i as ac,
  Ai as ad,
  si as ae,
  ie as af,
  $s as ag,
  ne as ah,
  Bs as ai,
  M as aj,
  Gs as ak,
  Xs as al,
  Ri as am,
  Fs as an,
  Oi as ao,
  Js as ap,
  Bi as aq,
  Bt as ar,
  V as as,
  Ii as at,
  Ei as au,
  ui as av,
  me as aw,
  hi as ax,
  Je as ay,
  Ze as az,
  D as b,
  Ss as b0,
  Di as b1,
  Ys as b2,
  ms as b3,
  Qe as b4,
  Rt as b5,
  Ts as b6,
  As as b7,
  is as b8,
  et as b9,
  vi as bA,
  Rs as bB,
  Vt as bC,
  xt as bD,
  Is as bE,
  Ds as ba,
  gi as bb,
  fi as bc,
  ue as bd,
  se as be,
  Qs as bf,
  le as bg,
  he as bh,
  Wt as bi,
  fs as bj,
  Xt as bk,
  ys as bl,
  ai as bm,
  ri as bn,
  ei as bo,
  zt as bp,
  bi as bq,
  Us as br,
  hs as bs,
  ds as bt,
  wi as bu,
  Mi as bv,
  ki as bw,
  zs as bx,
  Hs as by,
  ps as bz,
  Ge as c,
  ge as d,
  Ot as e,
  Ue as f,
  di as g,
  Ns as h,
  Gi as i,
  xi as j,
  Fi as k,
  Ui as l,
  Ut as m,
  Q as n,
  ji as o,
  zi as p,
  Z as q,
  Ni as r,
  f as s,
  Fe as t,
  Gt as u,
  B as v,
  re as w,
  k as x,
  Vi as y,
  ae as z
};
