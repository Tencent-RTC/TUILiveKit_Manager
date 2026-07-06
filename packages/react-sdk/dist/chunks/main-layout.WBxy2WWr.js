import { aa as g, ab as d, ac as St, N as W, z as Zt, ad as st, L as I, a4 as bt, a6 as wt, I as l, K as z } from "./en-US.CSjM9toh.js";
function ms(i, t = 0) {
  const e = Number(i);
  return Number.isFinite(e) ? e : t;
}
function ys(i, t = !1) {
  return typeof i == "boolean" ? i : typeof i == "number" ? i !== 0 : typeof i == "string" ? i === "true" || i === "1" : t;
}
function Qt(i) {
  if (!i) return {};
  if (typeof i == "object" && !Array.isArray(i))
    return Object.fromEntries(
      Object.entries(i).map(([t, e]) => [t, String(e ?? "")])
    );
  if (typeof i != "string") return {};
  try {
    const t = JSON.parse(i);
    if (t && typeof t == "object" && !Array.isArray(t))
      return Object.fromEntries(
        Object.entries(t).map(([e, s]) => [e, String(s ?? "")])
      );
  } catch {
    return {};
  }
  return {};
}
function Tt(i) {
  const t = i.RoomId || "", e = i.Owner_Account || "", s = {
    liveId: t,
    liveName: i.RoomName || "",
    coverUrl: i.CoverURL || "",
    anchor: {
      userId: e,
      nick: e,
      avatarUrl: ""
    },
    onlineCount: 0,
    // MemberCount 不在列表和详情返回中，需要从其他 API 获取
    createdAt: i.CreateTime || 0,
    category: (i.Category || []).map(String),
    // number[] → string[]
    activityStatus: i.ActivityStatus || 0,
    isMessageDisabled: !1,
    isLikeEnabled: !0,
    isPublicVisible: !0
  };
  if ("RoomType" in i) {
    const r = i;
    return {
      ...s,
      roomType: r.RoomType,
      isSeatEnabled: r.IsSeatEnabled,
      maxSeatCount: r.MaxSeatCount,
      maxMemberCount: r.MaxMemberCount,
      isMessageDisabled: r.IsMessageDisabled || !1,
      isLikeEnabled: r.IsLikeEnabled !== !1,
      // 默认 true
      isPublicVisible: r.IsPublicVisible !== !1,
      // 默认 true
      seatTemplate: r.SeatTemplate,
      customInfo: r.CustomInfo ? Qt(r.CustomInfo) : {}
    };
  }
  return s;
}
async function te(i = {}) {
  var n, o;
  const t = i.next || "0", e = i.count || 20, s = await g(d.fetchLiveList, {
    Next: t,
    Count: e,
    SortDirection: i.sortDirection
  });
  if (s.ErrorCode !== 0)
    throw new Error(`Get live list failed: ${s.ErrorInfo || "Unknown error"} (code: ${s.ErrorCode})`);
  return {
    list: (((n = s.Response) == null ? void 0 : n.RoomList) || []).map(
      (a) => Tt(a)
    ),
    next: ((o = s.Response) == null ? void 0 : o.Next) || ""
  };
}
async function M(i) {
  var r, n;
  const [t, e] = await Promise.all([
    g(d.getRoomInfo, { RoomId: i }),
    g(d.getRoomMetadata, { RoomId: i, Keys: [] })
  ]);
  if (!((r = t.Response) != null && r.RoomInfo)) return null;
  const s = Tt(t.Response.RoomInfo);
  if ((n = e == null ? void 0 : e.Response) != null && n.Metadata) {
    const o = { ...s.customInfo || {} };
    (e.Response.Metadata || []).forEach((a) => {
      o[a.Key] = a.Value;
    }), s.customInfo = o;
  }
  return s;
}
async function ct(i) {
  return g(d.getLiveStatistic, { RoomId: i });
}
async function ee(i) {
  return g(d.destroyRoom, { RoomId: i });
}
async function ie(i) {
  const t = i.liveId || String(Date.now()), e = {
    RoomId: t,
    RoomType: "Live",
    SeatTemplate: i.seatTemplate || "VideoDynamicGrid9Seats",
    Owner_Account: i.anchorId,
    IsUnlimitedRoomEnabled: !0
  };
  if (i.useObsStreaming && (e.KeepOwnerOnSeat = !1), i.liveName && i.liveName.trim() && (e.RoomName = i.liveName), i.coverUrl && i.coverUrl.trim() && (e.CoverURL = i.coverUrl.trim()), i.maxSeatCount && (i.seatTemplate === "AudioSalon" || i.seatTemplate === "Karaoke") && (e.MaxSeatCount = Number(i.maxSeatCount)), await g(d.createLive, { RoomInfo: e }), i.customInfo && Object.keys(i.customInfo).length > 0) {
    const r = Object.entries(i.customInfo).map(([n, o]) => ({ Key: n, Value: o }));
    await g(d.setRoomMetadata, { RoomId: t, Metadata: r });
  }
  const s = await M(t);
  if (!s)
    throw new Error("创建直播成功，但获取详情失败");
  return s;
}
async function se(i, t) {
  const e = [], s = { RoomId: i, IsUnlimitedRoomEnabled: !0 };
  if (t.liveName !== void 0 && (s.RoomName = t.liveName), t.coverUrl !== void 0 && (s.CoverURL = t.coverUrl), t.isMessageDisabled !== void 0 && (s.IsMessageDisabled = t.isMessageDisabled), e.push(g(d.updateLiveInfo, { RoomInfo: s })), t.customInfo && Object.keys(t.customInfo).length > 0) {
    const n = Object.entries(t.customInfo).map(([o, a]) => ({ Key: o, Value: a }));
    e.push(g(d.setRoomMetadata, { RoomId: i, Metadata: n }));
  }
  return t.deleteKeys && t.deleteKeys.length > 0 && e.push(g(d.delRoomMetadata, { RoomId: i, Keys: t.deleteKeys })), (await Promise.all(e))[0];
}
async function re(i, t, e = 600) {
  return g(d.muteMember, { RoomId: i, MemberList_Account: t, MuteTime: e });
}
async function ne(i, t) {
  return g(d.muteMember, { RoomId: i, MemberList_Account: t, MuteTime: 0 });
}
async function oe(i, t, e = 3600, s = "") {
  return g(d.banMember, { RoomId: i, MemberList_Account: t, Duration: e, Reason: s });
}
async function ae(i, t) {
  return g(d.unbanMember, { RoomId: i, MemberList_Account: t });
}
async function ce(i, t = {}) {
  return g(d.getMutedMemberList, {
    RoomId: i,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function le(i, t = {}) {
  return g(d.getBannedMemberList, {
    RoomId: i,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function ue(i) {
  return g(d.getRobot, { RoomId: i });
}
async function ge(i) {
  return g(d.getSeatList, { RoomId: i });
}
async function de(i, t, e = 0) {
  return g(d.pickUserOnSeat, { RoomId: i, Member_Account: t, Index: e });
}
async function fe(i, t) {
  return g(d.addRobot, { RoomId: i, RobotList_Account: t });
}
async function he(i, t, e) {
  return g(d.importAccount, { UserID: i, Nick: t || "", FaceUrl: "" });
}
async function ps(i, t = 50) {
  return W(`/chat/${i}/messages`, { limit: t });
}
async function Ls(i, t) {
  var s;
  const e = ((s = St().credentials) == null ? void 0 : s.userId) || "admin";
  return g(d.sendTextMsg, {
    RoomId: i,
    Sender_Account: e,
    TextContent: t,
    MsgPriority: "Normal"
  });
}
async function me(i, t, e, s) {
  var n;
  const r = s || ((n = St().credentials) == null ? void 0 : n.userId) || "admin";
  return g(d.sendCustomMsg, {
    RoomId: i,
    Sender_Account: r,
    BusinessId: t,
    Data: e
  });
}
async function ye(i, t) {
  return g(d.updateLiveInfo, {
    RoomInfo: {
      RoomId: i,
      IsMessageDisabled: t,
      IsUnlimitedRoomEnabled: !0
    }
  });
}
async function Is(i, t, e) {
  return g(d.muteMember, {
    RoomId: i,
    MemberList_Account: [t],
    MuteTime: e || 60
  });
}
async function Es(i, t) {
  return g(d.muteMember, {
    RoomId: i,
    MemberList_Account: [t],
    MuteTime: 0
  });
}
async function pe(i) {
  return W(`/chat/${i}/mute-status`);
}
async function Le(i, t) {
  const e = (/* @__PURE__ */ new Date()).toISOString(), s = {
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
  return me(
    i,
    "violation_alert",
    // BusinessId：标识违规警告消息
    JSON.stringify(s)
    // Data：消息内容
  );
}
async function vs(i, t, e) {
  const s = {
    porn: "请立即删除不当内容，多次违规将导致直播间封禁",
    political: "请勿讨论政治敏感话题，请遵守相关法律法规",
    abuse: "请文明用语，停止辱骂攻击行为",
    advertising: "请勿发布未经审核的广告内容",
    illegal: "请勿进行违法违规活动",
    sexy: "请保持直播间内容健康，避免低俗内容",
    violence: "请勿展示暴力血腥内容",
    default: "您的内容涉嫌违规，请立即整改"
  };
  return Le(i, {
    violationType: t,
    violationContent: e,
    handleSuggestion: s[t] || s.default
  });
}
class Ie {
  constructor(t = {}) {
    this.playerMap = /* @__PURE__ */ new Map(), this.playerFactory = null, this.stoppingSet = /* @__PURE__ */ new Set(), this.stoppingPromiseMap = /* @__PURE__ */ new Map(), this.playerFactory = t.playerFactory || null, this.debug = t.debug || !1;
  }
  /**
   * 设置播放器工厂
   */
  setPlayerFactory(t) {
    console.log("[PlayerRegistry] setPlayerFactory called", typeof t), this.playerFactory = t;
  }
  /**
   * 开始播放
   * @param liveId 直播 ID
   * @param container 视频容器元素
   * @param url 播放地址（可选，TRTC 不需要）
   */
  async startPlay(t) {
    const { liveId: e, container: s, url: r } = t;
    if (!e || !s)
      throw new Error("liveId and container are required");
    if (!this.playerFactory)
      throw console.error("[PlayerRegistry] playerFactory is not configured!"), new Error(
        "playerFactory is not configured. Please provide it in ServerConfig or call setPlayerFactory()."
      );
    this.debug && console.log("[PlayerRegistry] startPlay called", { liveId: e, containerId: s.id });
    try {
      if (this.stoppingSet.has(e)) {
        this.debug && console.log(`[PlayerRegistry] Waiting for stopPlay to complete for ${e}`);
        const o = this.stoppingPromiseMap.get(e);
        o && await o;
      }
      this.playerMap.has(e) && await this.stopPlay(e);
      const n = this.playerFactory(e);
      this.playerMap.set(e, n), await n.play(s, r), this.debug && console.log(`[PlayerRegistry] Started playing live ${e}`);
    } catch (n) {
      throw this.playerMap.has(e) && await this.stopPlay(e), n;
    }
  }
  /**
   * 停止播放
   * @param liveId 直播 ID
   */
  async stopPlay(t) {
    if (!t) return;
    if (this.stoppingSet.has(t)) {
      this.debug && console.warn(`[PlayerRegistry] stopPlay already in progress for ${t}, skipping`);
      const s = this.stoppingPromiseMap.get(t);
      return s || void 0;
    }
    this.stoppingSet.add(t);
    const e = (async () => {
      try {
        const s = this.playerMap.get(t);
        s && (await s.stop(), await s.destroy(), this.playerMap.delete(t), this.debug && console.log(`[PlayerRegistry] Stopped playing live ${t}`));
      } catch (s) {
        this.debug && console.warn(`[PlayerRegistry] Error stopping live ${t}:`, s);
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
    await Promise.allSettled(t), this.debug && console.log("[PlayerRegistry] Stopped all players");
  }
  /**
   * 销毁注册表（清理所有资源）
   */
  async destroy() {
    await this.stopAll(), this.playerFactory = null, this.debug && console.log("[PlayerRegistry] Destroyed");
  }
  /**
   * 获取播放器状态快照（用于调试）
   */
  getSnapshot() {
    const t = {};
    return this.playerMap.forEach((e, s) => {
      const r = e.getPlayerInfo();
      t[s] = {
        state: r.state,
        liveId: r.liveId
      };
    }), t;
  }
}
class Ee {
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
      const s = await Zt(t);
      return this.userProfiles = { ...this.userProfiles, ...Object.fromEntries(s) }, this.setLoading(e, !1), s;
    } catch (s) {
      throw this.setLoading(e, !1), console.error("[UserProfileManager] fetchProfiles failed:", s), s;
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
    var e;
    (!this.getActive || this.getActive()) && ((e = this.onStateChange) == null || e.call(this, t));
  }
}
class Cs {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.loading = {}, this.error = null, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new Ie({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new Ee({
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
    console.log("[LiveMonitorCore] init called", {
      hasPlayerFactory: !!t.playerFactory,
      baseURL: t.baseURL
    }), t.playerFactory ? (console.log("[LiveMonitorCore] Setting playerFactory"), this.playerRegistry.setPlayerFactory(t.playerFactory)) : console.warn("[LiveMonitorCore] No playerFactory provided!");
  }
  // ========= 直播列表操作 =========
  // 注意：分页逻辑已移到 PaginatedListController，此处不再管理 cursor
  // ========= 当前直播管理 =========
  setCurrentLive(t) {
    if (t === null) {
      this.currentLive = null, this.notifyStateChange({ currentLive: null });
      return;
    }
    const e = this.liveList.find((s) => s.liveId === t);
    e ? (this.currentLive = e, this.notifyStateChange({ currentLive: e }), this.fetchMuteStatus(t).catch(() => {
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), M(t).then((s) => {
      var r;
      s && ((r = this.getActive) == null ? void 0 : r.call(this)) !== !1 && (this.currentLive = s, this.notifyStateChange({ currentLive: s }), this.fetchMuteStatus(t).catch(() => {
      }));
    }).catch(() => {
    }));
  }
  getCurrentLiveInfo() {
    return this.currentLive ? this.currentLive : null;
  }
  // ========= 直播详情 =========
  async fetchLiveDetail(t) {
    var r, n;
    const e = t || ((r = this.currentLive) == null ? void 0 : r.liveId);
    if (!e) throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const s = "detail";
    this.setLoading(s, !0), this.setError(null);
    try {
      const [o, a, c] = await Promise.allSettled([
        M(e),
        ct(e),
        this.fetchPushInfo(e)
        // 内部调用，获取推流信息
      ]);
      let u = null;
      if (o.status === "fulfilled")
        u = o.value;
      else
        throw o.reason;
      const f = a.status === "fulfilled" ? (n = a.value) == null ? void 0 : n.Response : null;
      return u && c.status === "fulfilled" && c.value && (u.streamInfo = c.value), u && f && (u.stats = this.mergeStatisticData(u, f)), u && (this.liveList.some((h) => h.liveId === u.liveId) ? this.liveList = this.liveList.map(
        (h) => h.liveId === u.liveId ? u : h
      ) : this.liveList = [u, ...this.liveList], this.currentLive = u), this.setLoading(s, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), u;
    } catch (o) {
      const a = o instanceof Error ? o : new Error(String(o));
      throw this.setError(a), this.setLoading(s, !1), console.error("[LiveMonitorCore] fetchLiveDetail failed:", a), a;
    }
  }
  // ========= 推流信息（私有方法，在 fetchLiveDetail 内部调用） =========
  async fetchPushInfo(t) {
    try {
      return await st(t);
    } catch (e) {
      return console.error("[LiveMonitorCore] fetchPushInfo failed:", e), null;
    }
  }
  // ========= 创建直播 =========
  async createLive(t) {
    const e = "create";
    this.setLoading(e, !0), this.setError(null);
    try {
      if (!t.anchorId)
        throw new Error("anchorId is required");
      const r = (await ie(t)).liveId || t.liveId, n = r ? await M(r) : null;
      if (!n)
        throw new Error("创建直播成功，但获取详情失败");
      return this.liveList = [n, ...this.liveList], this.currentLive = n, this.setLoading(e, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), n;
    } catch (s) {
      const r = s instanceof Error ? s : new Error(String(s));
      throw this.setError(r), this.setLoading(e, !1), console.error("[LiveMonitorCore] createLive failed:", r), r;
    }
  }
  // ========= 更新直播 =========
  async updateLive(t) {
    var r;
    const e = t.liveId || ((r = this.currentLive) == null ? void 0 : r.liveId);
    if (!e) throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const s = "update";
    this.setLoading(s, !0), this.setError(null);
    try {
      await se(e, t), this.currentLive && (this.currentLive = { ...this.currentLive, ...t }, this.notifyStateChange({ currentLive: this.currentLive })), this.setLoading(s, !1);
    } catch (n) {
      const o = n instanceof Error ? n : new Error(String(n));
      throw this.setError(o), this.setLoading(s, !1), console.error("[LiveMonitorCore] updateLive failed:", o), o;
    }
  }
  // ========= 结束直播 =========
  async endLive(t) {
    var r;
    const e = t || ((r = this.currentLive) == null ? void 0 : r.liveId);
    if (!e) throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const s = "end";
    this.setLoading(s, !0), this.setError(null);
    try {
      await ee(e), this.liveList = this.liveList.filter((n) => n.liveId !== e), this.currentLive && this.currentLive.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), this.setLoading(s, !1);
    } catch (n) {
      const o = n instanceof Error ? n : new Error(String(n));
      throw this.setError(o), this.setLoading(s, !1), console.error("[LiveMonitorCore] endLive failed:", o), o;
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
    var r, n, o, a, c, u, f, p;
    return e ? {
      liveId: t.liveId,
      onlineCount: t.onlineCount || e.TotalViewers || 0,
      viewCount: e.TotalViewers || ((r = t.stats) == null ? void 0 : r.viewCount) || 0,
      likeCount: e.TotalLikesReceived || ((n = t.stats) == null ? void 0 : n.likeCount) || 0,
      giftCount: e.TotalGiftsSent || ((o = t.stats) == null ? void 0 : o.giftCount) || 0,
      giftAmount: e.TotalGiftCoins || ((a = t.stats) == null ? void 0 : a.giftAmount) || 0,
      giftUserCount: e.TotalUniqueGiftSenders || ((c = t.stats) == null ? void 0 : c.giftUserCount),
      commentCount: e.TotalMsgCount || ((u = t.stats) == null ? void 0 : u.commentCount) || 0,
      totalUniqueCommenters: e.TotalUniqueCommenters || ((f = t.stats) == null ? void 0 : f.totalUniqueCommenters),
      duration: ((p = t.stats) == null ? void 0 : p.duration) || 0
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
    var n;
    const e = t || ((n = this.currentLive) == null ? void 0 : n.liveId), s = t ? this.liveList.find((o) => o.liveId === t) || this.currentLive : this.currentLive;
    if (!e || !s)
      throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const r = "stats";
    this.setLoading(r, !0);
    try {
      const o = await ct(e), a = o == null ? void 0 : o.Response, c = a ? this.mergeStatisticData(s, a) : s.stats || {
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
        (u) => u.liveId === e ? { ...u, stats: c } : u
      ), this.setLoading(r, !1), this.notifyStateChange({
        liveList: this.liveList
      }), c;
    } catch (o) {
      throw this.setLoading(r, !1), console.error("[LiveMonitorCore] fetchLiveStats failed:", o), o;
    }
  }
  // ========= 播放控制 =========
  async startPlay(t) {
    const { liveId: e, containerId: s } = t;
    if (!e || !s) throw new Error("liveId and containerId are required");
    const r = document.getElementById(s);
    if (!r)
      throw new Error(`Container element with id "${s}" not found`);
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
        await ye(t, e), this.liveList = this.liveList.map((s) => s.liveId === t ? { ...s, isMuted: e } : s), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
      } catch (s) {
        throw console.error("[LiveMonitorCore] setAllMute failed:", s), s;
      }
  }
  /**
   * 从服务器获取全员禁言状态
   * @param liveId 直播间 ID
   */
  async fetchMuteStatus(t) {
    if (t)
      try {
        const e = await pe(t);
        if (e && typeof e == "object") {
          const s = e.isMutedAll ?? !1;
          let r = !1;
          this.liveList = this.liveList.map((n) => n.liveId === t && n.isMuted !== s ? (r = !0, { ...n, isMuted: s }) : n), this.currentLive && this.currentLive.liveId === t && this.currentLive.isMuted !== s && (this.currentLive = { ...this.currentLive, isMuted: s }, r = !0), r && this.notifyStateChange({
            liveList: this.liveList,
            currentLive: this.currentLive
          });
        }
      } catch (e) {
        console.error("[LiveMonitorCore] fetchMuteStatus failed:", e);
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
    var e;
    (!this.getActive || this.getActive()) && ((e = this.onStateChange) == null || e.call(this, t));
  }
}
function ve(i) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(i);
}
function Ce(i) {
  return /\.svga(\?|$)/i.test(i);
}
function Ss(i) {
  return i instanceof File ? i.name.toLowerCase().endsWith(".svga") : !1;
}
function bs(i) {
  return i.type.startsWith("video/");
}
function _(i) {
  return new TextEncoder().encode(i).length;
}
function ws(i) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => t(s.result), s.onerror = e, s.readAsDataURL(i);
  });
}
let U = null;
function _t() {
  if (!U)
    throw new Error("SVGAParser 未初始化，请先调用 initSvgaParser()");
  return U;
}
function Ts(i) {
  U || (U = new i());
}
function _s() {
  return U;
}
function Se(i, t = 15e3) {
  return new Promise((e, s) => {
    if (!i) {
      s(new Error("URL 不能为空"));
      return;
    }
    const r = _t();
    let n = null, o = !1;
    const a = () => {
      n && (clearTimeout(n), n = null);
    };
    n = setTimeout(() => {
      o || (o = !0, s(new Error("SVGA 资源加载超时，请检查 URL 是否可访问")));
    }, t), r.load(
      i,
      () => {
        o || (o = !0, a(), e(!0));
      },
      () => {
        o || (o = !0, a(), s(new Error("SVGA 资源加载失败，请检查 URL 是否正确")));
      }
    );
  });
}
function be(i, t = 15e3) {
  return new Promise((e, s) => {
    let r = null, n = !1;
    const o = () => {
      r && (clearTimeout(r), r = null);
    };
    r = setTimeout(() => {
      n || (n = !0, s(new Error("SVGA 文件解析超时")));
    }, t);
    const a = URL.createObjectURL(i);
    _t().load(
      a,
      () => {
        n || (n = !0, o(), URL.revokeObjectURL(a), e(!0));
      },
      () => {
        n || (n = !0, o(), URL.revokeObjectURL(a), s(new Error("SVGA 文件无效或已损坏")));
      }
    );
  });
}
function lt(i, t = 8e3, e = !1) {
  return new Promise((s, r) => {
    var c;
    if (!i) {
      r(new Error("URL 不能为空"));
      return;
    }
    if (ve(i)) {
      s(!0);
      return;
    }
    if (Ce(i)) {
      if (e) {
        s(!0);
        return;
      }
      Se(i, t > 8e3 ? t : 15e3).then(() => s(!0)).catch(r);
      return;
    }
    const n = document.createElement("img");
    let o = null;
    const a = () => {
      o && (clearTimeout(o), o = null), n.onload = null, n.onerror = null, n.src = "", n.parentNode && n.parentNode.removeChild(n);
    };
    n.onload = () => {
      a(), s(!0);
    }, n.onerror = () => {
      a(), r(new Error("图片加载失败，请检查 URL 是否正确"));
    }, o = setTimeout(() => {
      a(), r(new Error("图片加载超时，请检查 URL 是否可访问"));
    }, t), n.style.display = "none", (c = document.body) == null || c.appendChild(n), n.src = i;
  });
}
function we(i, t = 1e4) {
  return new Promise((e, s) => {
    var a;
    const r = document.createElement("img");
    let n = null;
    const o = () => {
      n && (clearTimeout(n), n = null), r.onload = null, r.onerror = null, r.src = "", r.parentNode && r.parentNode.removeChild(r);
    };
    r.onload = () => {
      o(), e(!0);
    }, r.onerror = () => {
      o(), s(new Error("图片加载失败，文件可能已损坏"));
    }, n = setTimeout(() => {
      o(), s(new Error("图片加载超时"));
    }, t), r.style.display = "none", (a = document.body) == null || a.appendChild(r), r.src = i;
  });
}
function Te(i, t = 15e3) {
  return new Promise((e, s) => {
    var a;
    const r = document.createElement("video");
    let n = null;
    const o = () => {
      n && (clearTimeout(n), n = null), r.onloadeddata = null, r.onerror = null, r.src = "", r.parentNode && r.parentNode.removeChild(r);
    };
    r.onloadeddata = () => {
      o(), e(!0);
    }, r.onerror = () => {
      o(), s(new Error("视频加载失败，文件可能已损坏"));
    }, n = setTimeout(() => {
      o(), s(new Error("视频加载超时"));
    }, t), r.style.display = "none", r.muted = !0, (a = document.body) == null || a.appendChild(r), r.src = i, r.load();
  });
}
function As(i, t) {
  const e = t ? t.split(",").map((c) => c.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"], s = e.filter((c) => !c.startsWith(".")), r = e.filter((c) => c.startsWith(".")).map((c) => c.toLowerCase()), n = e.some((c) => c.startsWith("video/")), o = "." + (i.name.split(".").pop() || "").toLowerCase();
  return s.includes(i.type) || n && i.type.startsWith("video/") || r.includes(o) ? { valid: !0 } : { valid: !1, errorHint: `只允许上传 ${e.map((u) => u === "image/svg+xml" ? "SVG" : u === "video/mp4" ? "MP4" : u.startsWith(".") ? u.slice(1).toUpperCase() : u.startsWith("image/") ? u.replace("image/", "").toUpperCase() : u).join("/")} 格式的文件` };
}
function Ms(i, t) {
  return i.size <= t * 1024 * 1024;
}
async function Rs(i, t, e = !1) {
  const r = (t ? t.split(",").map((c) => c.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"]).filter((c) => c.startsWith(".")).map((c) => c.toLowerCase()), n = "." + (i.name.split(".").pop() || "").toLowerCase(), o = n === ".svga", a = !o && r.includes(n) && !i.type.startsWith("image/") && !i.type.startsWith("video/");
  if (o)
    e || await be(i);
  else if (!a) {
    const c = URL.createObjectURL(i);
    try {
      i.type.startsWith("video/") ? await Te(c) : await we(c);
    } finally {
      URL.revokeObjectURL(c);
    }
  }
}
class Ds {
  constructor(t, e = !1) {
    this.cancelRef = null, this.validationPromise = null, this.resetFlag = !1, this.blurTimer = null, this.callbacks = t, this.skipSvgaValidation = e;
  }
  /** 更新回调（用于 React 中当回调闭包更新时） */
  updateCallbacks(t) {
    this.callbacks = t;
  }
  /** 更新 skipSvgaValidation */
  updateSkipSvgaValidation(t) {
    this.skipSvgaValidation = t;
  }
  /**
   * URL 确认验证（blur / enter 场景）
   *
   * 错误提示策略：
   * - 字节超限 → 通过 callbacks.setError 在输入框下方内联显示，不弹 Toast
   * - 验证失败 → 同上，通过 callbacks.setError 内联显示
   * - 验证成功 → callbacks.onConfirm 通知外部
   */
  async doUrlConfirm(t, e) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    const s = (typeof t == "string" ? t : String(t)).trim();
    if (s) {
      if (e && _(s) > e) {
        this.callbacks.setError(`URL 不能超过 ${e} 字节`);
        return;
      }
      let r = !1;
      this.cancelRef = () => {
        r = !0;
      }, this.callbacks.setValidating(!0), this.callbacks.setError("");
      const n = (async () => {
        try {
          if (await lt(s, 8e3, this.skipSvgaValidation), r) return;
          this.callbacks.onConfirm(s);
        } catch (o) {
          if (r) return;
          this.callbacks.setError((o instanceof Error ? o.message : "") || "图片 URL 无效");
        } finally {
          r || this.callbacks.setValidating(!1), this.cancelRef = null, this.validationPromise = null;
        }
      })();
      this.validationPromise = n, await n;
    } else
      this.callbacks.onConfirm("");
  }
  /** focus 触发：清除 resetFlag */
  handleUrlFocus() {
    this.resetFlag = !1;
  }
  /** blur 触发：延迟 150ms 执行 */
  handleUrlBlur(t, e) {
    this.blurTimer && clearTimeout(this.blurTimer), this.blurTimer = setTimeout(() => {
      if (this.blurTimer = null, this.resetFlag) {
        this.resetFlag = !1;
        return;
      }
      this.doUrlConfirm(t, e);
    }, 150);
  }
  /** Enter 触发：立即执行，不延迟 */
  handleUrlEnter(t, e) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.resetFlag = !1, this.doUrlConfirm(t, e);
  }
  /**
   * 确保 URL 输入已验证并返回最终 URL
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值（modelValue / value prop）
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidated(t, e, s) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const r = t.trim();
    if (!r) return "";
    if (s && _(r) > s)
      throw new Error(`URL 不能超过 ${s} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return r !== e ? await this._doValidateForSubmit(r) : r;
  }
  /**
   * 带错误状态检查的 ensureUrlValidated
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值
   * @param hasError 当前是否有验证错误
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidatedWithErrorCheck(t, e, s, r) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const n = t.trim();
    if (!n) return "";
    if (r && _(n) > r)
      throw new Error(`URL 不能超过 ${r} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return s || n !== e ? await this._doValidateForSubmit(n) : n;
  }
  /**
   * 提交场景下执行验证并返回结果
   *
   * 错误提示策略：
   * - 验证失败 → 调用 callbacks.setError 让输入框变红，同时 throw Error 给 Modal 层弹 Toast
   * - 验证成功 → callbacks.onConfirm 通知外部
   */
  async _doValidateForSubmit(t) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    let e = !1;
    this.cancelRef = () => {
      e = !0;
    }, this.callbacks.setValidating(!0), this.callbacks.setError("");
    try {
      return await lt(t, 8e3, this.skipSvgaValidation), e || (this.callbacks.onConfirm(t), this.callbacks.setValidating(!1)), t;
    } catch (s) {
      throw e || (this.callbacks.setValidating(!1), this.callbacks.setError((s instanceof Error ? s.message : "") || "图片 URL 无效")), s;
    } finally {
      this.cancelRef = null, this.validationPromise = null;
    }
  }
  /** 取消正在进行的验证 */
  cancelValidation() {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
  }
  /** 重置所有状态 */
  reset() {
    this.resetFlag = !0, this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.cancelRef && (this.cancelRef(), this.cancelRef = null), this.validationPromise = null, this.callbacks.setValidating(!1);
  }
  /** 清理资源（组件卸载时调用） */
  dispose() {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.cancelRef && (this.cancelRef(), this.cancelRef = null);
  }
}
function At(i, t = "image/jpeg", e = 0.92) {
  return new Promise((s, r) => {
    i.toBlob(
      (n) => {
        n ? s(n) : r(new Error("Canvas to Blob conversion failed"));
      },
      t,
      e
    );
  });
}
async function Us(i, t, e = "image/jpeg", s = 0.92) {
  const r = new Image();
  r.crossOrigin = "anonymous", await new Promise((a, c) => {
    r.onload = () => a(), r.onerror = c, r.src = i;
  });
  const n = document.createElement("canvas");
  n.width = t.width, n.height = t.height;
  const o = n.getContext("2d");
  if (!o)
    throw new Error("Failed to get canvas 2D context");
  return o.drawImage(
    r,
    t.x,
    t.y,
    t.width,
    t.height,
    0,
    0,
    t.width,
    t.height
  ), At(n, e, s);
}
async function Os(i, t = "image/jpeg", e = 0.92) {
  if (!i)
    throw new Error("Canvas is null or undefined");
  return At(i, t, e);
}
class Ns {
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
function _e(i) {
  return URL.createObjectURL(i);
}
function Mt(i) {
  try {
    URL.revokeObjectURL(i);
  } catch (t) {
    console.warn("Failed to revoke ObjectURL:", i, t);
  }
}
function Ae(i, t) {
  return i && Mt(i), _e(t);
}
function Me(i) {
  var e;
  const t = (e = i.dataTransfer) == null ? void 0 : e.files;
  return t && t.length > 0 ? t[0] : null;
}
function xs(i) {
  return (t) => {
    t.preventDefault();
    const e = Me(t);
    e && i(e);
  };
}
function Ps(i) {
  i.preventDefault();
}
const N = {
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
function Gs(i) {
  return N[i];
}
function Fs(i, t) {
  return Math.max(1, Math.ceil(i / t));
}
function Vs(i, t) {
  return Math.max(1, Math.min(i, t));
}
function js(i, t) {
  return (i - 1) * t;
}
function ks(i, t, e) {
  const s = (i - 1) * t + 1, r = Math.min(i * t, e);
  return { start: s, end: r };
}
const Bs = {
  field: "createTime",
  direction: "descend"
}, Re = N.liveList, q = "liveList_currentPage", X = "liveList_pageCursors", De = 1024;
class ut extends Error {
  constructor(t, e, s = "Load Live List Failed") {
    super(e || s), this.name = "LiveListApiError", this.errorCode = t, this.errorInfo = e;
  }
}
function V() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function Ue(i) {
  const { page: t, pageCursors: e, pageSize: s = Re } = i, r = e.get(t) || "", { list: n, next: o } = await te({ next: r, count: s, sortDirection: "descend" }), a = n, c = new Map(e);
  return o && a.length > 0 && c.set(t + 1, o), {
    lives: a,
    currentPage: t,
    hasMoreData: !!o && a.length === s,
    pageCursors: c,
    response: { ErrorCode: 0, Response: { RoomList: n, Next: o } }
  };
}
function Oe(i) {
  const { targetPage: t, currentPage: e, hasMoreData: s } = i;
  return !(t < 1 || t > e && !s);
}
function Ne(i) {
  const { currentPage: t, hasMoreData: e, livesLength: s } = i;
  return !e && s <= 1 && t > 1 ? t - 1 : t;
}
function xe(i) {
  const t = i.storage || sessionStorage;
  try {
    t.setItem(q, String(i.currentPage)), t.setItem(X, JSON.stringify(Array.from(i.pageCursors.entries())));
  } catch {
  }
}
function Pe(i = sessionStorage) {
  let t = 1, e = V();
  try {
    const s = i.getItem(q), r = i.getItem(X);
    if (i.removeItem(q), i.removeItem(X), s && r) {
      const n = Number(s);
      if (n > 0) {
        const o = JSON.parse(r);
        e = new Map(o), t = n;
      }
    }
  } catch {
    t = 1, e = V();
  }
  return { pageToLoad: t, pageCursors: e };
}
function Ge(i, t) {
  return _(i) > t;
}
async function Fe(i) {
  return await M(i);
}
function Ws(i) {
  return i ? new Date(i * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function $s(i, t) {
  const { field: e, direction: s } = t, r = [...i], n = s === "ascend" ? 1 : -1;
  return r.sort((o, a) => {
    let c = 0;
    switch (e) {
      case "createTime":
        c = (o.createdAt || 0) - (a.createdAt || 0);
        break;
      case "viewerCount":
        c = (o.onlineCount || 0) - (a.onlineCount || 0);
        break;
      case "duration": {
        const u = o.endedAt ? o.endedAt - o.createdAt : Date.now() / 1e3 - o.createdAt, f = a.endedAt ? a.endedAt - a.createdAt : Date.now() / 1e3 - a.createdAt;
        c = u - f;
        break;
      }
      case "status": {
        const u = o.endedAt ? 1 : 0, f = a.endedAt ? 1 : 0;
        c = u - f;
        break;
      }
      default:
        c = 0;
    }
    return c * n;
  }), r;
}
function Ks(i, t) {
  let e = i;
  return t.status && (t.status === "ongoing" ? e = e.filter((s) => !s.endedAt) : t.status === "ended" && (e = e.filter((s) => !!s.endedAt))), t.anchorId && (e = e.filter((s) => s.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (e = e.filter((s) => !s.category || s.category.length === 0 ? !1 : t.tags.some((r) => s.category.includes(r)))), t.customFilter && (e = e.filter(t.customFilter)), e;
}
class Ys {
  constructor(t = {}) {
    this.cache = /* @__PURE__ */ new Map(), this.ttl = t.ttl || 300 * 1e3, this.maxPages = t.maxPages || 10;
  }
  /**
   * 设置缓存
   * @param page 页码
   * @param data 数据
   * @param hasMoreData 是否有更多数据
   */
  set(t, e, s) {
    var r;
    if (this.cache.size >= this.maxPages) {
      const n = (r = Array.from(this.cache.entries()).sort((o, a) => o[1].timestamp - a[1].timestamp)[0]) == null ? void 0 : r[0];
      n !== void 0 && this.cache.delete(n);
    }
    this.cache.set(t, {
      data: e,
      timestamp: Date.now(),
      hasMoreData: s
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
    for (const [e, s] of this.cache.entries())
      t - s.timestamp > this.ttl && this.cache.delete(e);
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
    var e;
    for (this.maxPages = t; this.cache.size > t; ) {
      const s = (e = Array.from(this.cache.entries()).sort((r, n) => r[1].timestamp - n[1].timestamp)[0]) == null ? void 0 : e[0];
      s !== void 0 && this.cache.delete(s);
    }
  }
}
const Ve = () => "gift_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), je = (i, t, e) => {
  const s = i.Name || "", r = i.Desc || "", n = (i.LanguageList || []).map((a) => ({
    name: a.Name || "",
    description: a.Desc || "",
    language: a.Language || ""
  })), o = e.get(i.GiftId) || [];
  return {
    id: i.GiftId,
    name: s,
    iconUrl: i.IconUrl || "",
    price: i.Coins || 0,
    animationUrl: i.ResourceUrl || "",
    level: i.Level !== void 0 ? String(i.Level) : void 0,
    description: r,
    categoryIds: o,
    categories: t.get(i.GiftId) || [],
    createdAt: i.CreateTime !== void 0 ? String(i.CreateTime) : void 0,
    languageList: n
  };
}, ke = (i) => {
  const t = i.CategoryName || "", e = i.CategoryDesc || "", s = (i.LanguageList || []).map((n) => ({
    categoryName: n.CategoryName || "",
    categoryDescription: n.CategoryDesc || "",
    language: n.Language || ""
  })), r = i.GiftIdList || [];
  return {
    id: i.CategoryId,
    name: t,
    description: e,
    giftIds: r,
    giftCount: r.length,
    languageList: s
  };
};
function Be(i) {
  const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  return (i || []).forEach((s) => {
    const r = s.CategoryName || "";
    (s.GiftIdList || []).forEach((n) => {
      t.has(n) || (t.set(n, []), e.set(n, [])), r && t.get(n).push(r), e.get(n).push(s.CategoryId);
    });
  }), { giftToCategories: t, giftToCategoryIds: e };
}
async function We(i) {
  const t = await g(d.getGiftList, {});
  if (t && t.ErrorCode === 0 && t.Response) {
    const e = t.Response.GiftList || [], s = t.Response.CategoryList || [], { giftToCategories: r, giftToCategoryIds: n } = Be(s), o = e.map((c) => je(c, r, n)), a = s.map((c) => ke(c));
    return {
      gifts: o,
      total: t.Response.TotalCount || o.length,
      categories: a
    };
  }
  return { gifts: [], total: 0 };
}
async function $e(i) {
  const t = i.id || Ve();
  return await g(d.addGift, {
    Gift: {
      GiftId: t,
      Name: i.name || "",
      IconUrl: i.iconUrl || "",
      Coins: i.price || 0,
      ResourceUrl: i.animationUrl || "",
      Level: i.level ? parseInt(i.level) : 0,
      Desc: i.description || ""
    }
  }), t;
}
async function Ke(i) {
  await g(d.editGift, {
    Gift: {
      GiftId: i.giftId,
      Name: i.name || "",
      IconUrl: i.iconUrl || "",
      Coins: i.price || 0,
      ResourceUrl: i.animationUrl || "",
      Level: i.level ? parseInt(i.level) : 0,
      Desc: i.description || ""
    }
  });
}
async function Ye(i) {
  await g(d.delGift, { GiftId: i });
}
async function He(i, t) {
  var r;
  const e = await g(d.getGiftLanguage, { GiftId: i, Language: t }), s = (r = e == null ? void 0 : e.Response) == null ? void 0 : r.Language;
  return {
    name: (s == null ? void 0 : s.Name) || "",
    description: (s == null ? void 0 : s.Desc) || ""
  };
}
async function ze(i, t, e, s) {
  await g(d.setGiftLanguage, {
    GiftId: i,
    Language: t,
    Name: e,
    Desc: s || ""
  });
}
async function qe(i, t) {
  await g(d.delGiftLanguage, { GiftId: i, Language: t });
}
async function Xe(i) {
  await g(d.addGiftCategory, {
    Category: {
      CategoryId: i.categoryId,
      CategoryName: i.name || i.defaultName || "",
      CategoryDesc: i.description || i.defaultDesc || ""
    }
  });
}
async function Je(i) {
  await g(d.editGiftCategory, {
    Category: {
      CategoryId: i.categoryId,
      CategoryName: i.name || i.defaultName || "",
      CategoryDesc: i.description || i.defaultDesc || ""
    }
  });
}
async function Ze(i) {
  await g(d.delGiftCategory, { CategoryId: i });
}
async function Qe(i, t) {
  var r;
  const e = await g(d.getGiftCategoryLanguage, { CategoryId: i, Language: t }), s = (r = e == null ? void 0 : e.Response) == null ? void 0 : r.Language;
  return {
    name: (s == null ? void 0 : s.CategoryName) || "",
    description: (s == null ? void 0 : s.CategoryDesc) || ""
  };
}
async function ti(i, t, e, s) {
  await g(d.setGiftCategoryLanguage, {
    CategoryId: i,
    Language: t,
    CategoryName: e,
    CategoryDesc: s || ""
  });
}
async function ei(i, t) {
  await g(d.delGiftCategoryLanguage, { CategoryId: i, Language: t });
}
async function ii(i, t) {
  await g(d.addGiftCategoryRelations, { CategoryId: i, GiftIdList: t });
}
async function si(i, t) {
  await g(d.delGiftCategoryRelations, { CategoryId: i, GiftIdList: t });
}
class Hs {
  constructor(t = {}) {
    this.giftList = [], this.giftCategoryList = [], this.loading = {}, this.error = null, this.destroyed = !1, this.onStateChange = t.onStateChange;
  }
  // ========= 状态 getter（供框架层读取） =========
  getGiftList() {
    return this.giftList;
  }
  getGiftCategoryList() {
    return this.giftCategoryList;
  }
  getLoading() {
    return this.loading;
  }
  getError() {
    return this.error;
  }
  /** 获取完整状态快照 */
  getSnapshot() {
    return {
      giftList: this.giftList,
      giftCategoryList: this.giftCategoryList,
      loading: this.loading,
      error: this.error
    };
  }
  // ========= 销毁 =========
  destroy() {
    this.destroyed = !0, this.onStateChange = void 0;
  }
  isDestroyed() {
    return this.destroyed;
  }
  // ========= 状态更新辅助方法 =========
  setLoading(t, e) {
    this.loading = { ...this.loading, [t]: e }, this.notifyStateChange();
  }
  setError(t) {
    this.error = t, this.notifyStateChange();
  }
  notifyStateChange() {
    var t;
    this.isDestroyed() || (t = this.onStateChange) == null || t.call(this, this.getSnapshot());
  }
  // ========= 礼物列表操作 =========
  async fetchGiftList(t) {
    this.setLoading("giftList", !0), this.setError(null);
    try {
      const e = await We(t == null ? void 0 : t.language);
      return this.giftList = e.gifts || [], this.giftCategoryList = e.categories || [], this.setLoading("giftList", !1), this.notifyStateChange(), {
        giftList: e.gifts || [],
        giftCategoryList: e.categories || []
      };
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftList", !1), this.setError(s), s;
    }
  }
  async createGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      const e = await $e(t);
      return this.setLoading("giftAction", !1), e;
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(s), s;
    }
  }
  async updateGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await Ke(t), this.setLoading("giftAction", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(s), s;
    }
  }
  async deleteGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await Ye(t), this.giftList = this.giftList.filter((e) => e.id !== t), this.setLoading("giftAction", !1), this.notifyStateChange();
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(s), s;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await Xe(t), this.setLoading("categoryAction", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(s), s;
    }
  }
  async updateGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await Je(t), this.setLoading("categoryAction", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(s), s;
    }
  }
  async deleteGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await Ze(t), this.giftCategoryList = this.giftCategoryList.filter((e) => e.id !== t), this.setLoading("categoryAction", !1), this.notifyStateChange();
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(s), s;
    }
  }
  // ========= 礼物-分类关联操作 =========
  async addGiftCategoryRelations(t) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: e, categoryIds: s } = t;
      for (const r of s)
        await ii(r, [e]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftCategory", !1), this.setError(s), s;
    }
  }
  async deleteGiftCategoryRelations(t) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: e, categoryIds: s } = t;
      for (const r of s)
        await si(r, [e]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftCategory", !1), this.setError(s), s;
    }
  }
  // ========= 礼物多语言操作 =========
  async getGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      const e = await He(t.giftId, t.language);
      return this.setLoading("giftLanguage", !1), e;
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(s), s;
    }
  }
  async setGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await ze(t.giftId, t.language, t.name, t.description), this.setLoading("giftLanguage", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(s), s;
    }
  }
  async deleteGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await qe(t.giftId, t.language), this.setLoading("giftLanguage", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(s), s;
    }
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(t, e) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      const s = await Qe(t, e);
      return this.setLoading("giftCategoryLanguage", !1), s;
    } catch (s) {
      const r = s instanceof Error ? s : new Error(String(s));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
  async setGiftCategoryLanguage(t, e, s, r) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await ti(t, e, s, r), this.setLoading("giftCategoryLanguage", !1);
    } catch (n) {
      const o = n instanceof Error ? n : new Error(String(n));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(o), o;
    }
  }
  async deleteGiftCategoryLanguage(t, e) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await ei(t, e), this.setLoading("giftCategoryLanguage", !1);
    } catch (s) {
      const r = s instanceof Error ? s : new Error(String(s));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
}
const ri = 7, ni = 1440 * 60 * 1e3, oi = "live-manager-moderation-local-deletions", ai = 1, R = "deletedModerationItems";
let j = {
  ttlDays: ri
}, P = null;
function Rt(i) {
  if (!Number.isFinite(i) || i <= 0)
    throw new Error("moderation local deletion ttlDays must be greater than 0");
  return i;
}
function ci() {
  return typeof indexedDB > "u" ? null : indexedDB;
}
function li() {
  const i = ci();
  return i ? P || (P = new Promise((t, e) => {
    const s = i.open(oi, ai);
    s.onupgradeneeded = () => {
      var o;
      const r = s.result, n = r.objectStoreNames.contains(R) ? (o = s.transaction) == null ? void 0 : o.objectStore(R) : r.createObjectStore(R, { keyPath: "id" });
      n && !n.indexNames.contains("expiresAt") && n.createIndex("expiresAt", "expiresAt");
    }, s.onsuccess = () => t(s.result), s.onerror = () => e(s.error || new Error("open moderation local deletion database failed"));
  }), P) : Promise.resolve(null);
}
async function O(i, t) {
  const e = await li();
  if (e)
    return new Promise((s, r) => {
      const n = e.transaction(R, i), o = n.objectStore(R);
      let a;
      const c = t(o);
      c && (c.onsuccess = () => {
        a = c.result;
      }, c.onerror = () => r(c.error || new Error("moderation local deletion request failed"))), n.oncomplete = () => s(a), n.onerror = () => r(n.error || new Error("moderation local deletion transaction failed")), n.onabort = () => r(n.error || new Error("moderation local deletion transaction aborted"));
    });
}
function ui(i) {
  return Array.from(new Set(i.map((t) => String(t || "").trim()).filter(Boolean)));
}
function zs(i) {
  i.ttlDays !== void 0 && (j = { ...j, ttlDays: Rt(i.ttlDays) });
}
function qs() {
  return { ...j };
}
async function gi(i = Date.now()) {
  const e = (await O("readonly", (s) => s.getAll()) || []).filter((s) => s.expiresAt <= i).map((s) => s.id);
  e.length !== 0 && await O("readwrite", (s) => {
    e.forEach((r) => s.delete(r));
  });
}
async function Dt(i, t = {}) {
  const e = ui(i);
  if (e.length === 0) return;
  const s = Rt(t.ttlDays ?? j.ttlDays), r = Date.now(), n = r + s * ni;
  await gi(r), await O("readwrite", (o) => {
    e.forEach((a) => {
      o.put({ id: a, deletedAt: r, expiresAt: n });
    });
  });
}
async function Ut(i = Date.now()) {
  const t = await O("readonly", (r) => r.getAll()), e = [], s = /* @__PURE__ */ new Set();
  return (t || []).forEach((r) => {
    r.expiresAt <= i ? e.push(r.id) : s.add(r.id);
  }), e.length > 0 && await O("readwrite", (r) => {
    e.forEach((n) => r.delete(n));
  }), s;
}
async function di() {
  return (await Ut()).size;
}
async function fi(i) {
  const t = await Ut();
  return t.size === 0 ? i : i.filter((e) => !t.has(String(e.id || "")));
}
const hi = {
  Normal: "normal",
  normal: "normal",
  Porn: "porn",
  porn: "porn",
  Polity: "political",
  Political: "political",
  political: "political",
  Ad: "advertising",
  Advertising: "advertising",
  advertising: "advertising",
  Abuse: "abuse",
  abuse: "abuse",
  Illegal: "illegal",
  illegal: "illegal",
  Composite: "composite",
  composite: "composite",
  Terror: "violence",
  Violence: "violence",
  violence: "violence",
  Sexy: "sexy",
  sexy: "sexy"
}, k = 100;
function Ot(i) {
  const t = Array.from(new Set(i.map((e) => String(e || "").trim()).filter(Boolean)));
  if (t.length === 0)
    throw new I("ids 不能为空");
  if (t.length > k)
    throw new I(`ids 不能超过 ${k} 个`);
  return t;
}
function mi(i = 1, t = 20) {
  if (!Number.isInteger(i) || i < 1)
    throw new I("pageNum 必须大于等于 1");
  if (!Number.isInteger(t) || t < 1 || t > k)
    throw new I(`pageSize 必须在 1-${k} 之间`);
}
function yi() {
  return "1";
}
function pi(i) {
  const t = Number(i || Date.now());
  return !Number.isFinite(t) || t <= 0 ? Date.now() : t < 1e12 ? t * 1e3 : t;
}
function Li(i) {
  const t = pi(i.createTime);
  return {
    id: String(i.id),
    userId: String(i.userId),
    userName: i.userName ? String(i.userName) : void 0,
    userAvatar: i.userAvatar ? String(i.userAvatar) : void 0,
    content: String(i.content),
    type: hi[i.type] || String(i.type) || "unknown",
    createdAtMs: t
  };
}
async function Ii(i = {}) {
  const t = i.pageNum || 1, e = i.pageSize || 20;
  mi(t, e);
  const s = {
    pageNum: t,
    pageSize: e
  };
  i.liveId && (s.roomId = i.liveId), i.startTime !== void 0 && (s.startTime = i.startTime), i.endTime !== void 0 && (s.endTime = i.endTime), i.minutes !== void 0 && (s.minutes = i.minutes), i.label && (s.label = i.label), i.violationOnly && (s.violationOnly = String(i.violationOnly));
  const r = await W(
    "/moderation/list",
    s
  );
  if (!r || r.code !== 0)
    throw new I("getInteractionModerationList failed");
  const n = r.data || { list: [], total: 0, pageNum: t, pageSize: e }, a = (Array.isArray(n.list) ? n.list : []).map(Li);
  return {
    list: a,
    total: n.total || a.length,
    pageNum: n.pageNum || t,
    pageSize: n.pageSize || e
  };
}
function Ei(i) {
  const t = String(i);
  let e = 0;
  for (let r = 0; r < t.length; r++) {
    const n = t.charCodeAt(r);
    e = (e << 5) - e + n, e = e & e;
  }
  return Math.abs(e) % 4294967296;
}
async function Xs(i) {
  const t = Ot(i.ids), e = i.items || [];
  if (!i.liveId)
    throw new I("liveId 必填");
  await Promise.all(t.map(async (s, r) => {
    const n = e[r], o = String((n == null ? void 0 : n.userId) || ""), a = String((n == null ? void 0 : n.content) || "");
    if (!o || !a) {
      console.warn("[moderation] approveTextModerationItems: 跳过重发，缺少关键字段", {
        id: s,
        fromAccount: o || "(空)",
        hasContent: !!a
      });
      return;
    }
    await g(d.sendGroupMsg, {
      GroupId: i.liveId,
      From_Account: o,
      Random: Ei(s),
      // 使用内容 ID 作为 Random，避免重复
      MsgPriority: "Normal",
      // 指定 NoMsgCheck 防止重发消息再次被拦截
      SendMsgControl: ["NoMsgCheck"],
      MsgBody: [
        {
          MsgType: "TIMTextElem",
          MsgContent: {
            Text: a
          }
        }
      ]
    });
  })), await Dt(t);
}
async function Js(i) {
  const t = String(i.content || "").trim();
  if (!t)
    throw new I("Content 参数必填");
  await bt("/moderation/correction-whitelist", {
    content: t,
    auditType: yi(),
    status: "2"
  });
}
async function Zs(i) {
  if (Ot(i.ids), !Array.isArray(i.items) || i.items.length !== i.ids.length)
    throw new I("items 必须与 ids 一一对应");
}
async function vi() {
  var t;
  const i = await W("/moderation/usage");
  return !i || i.code !== 0 ? 0 : ((t = i.data) == null ? void 0 : t.remainUsage) ?? 0;
}
const Ci = {
  Normal: "normal",
  normal: "normal",
  Porn: "porn",
  porn: "porn",
  Political: "political",
  political: "political",
  Advertising: "advertising",
  advertising: "advertising",
  Abuse: "abuse",
  abuse: "abuse",
  Illegal: "illegal",
  illegal: "illegal",
  Composite: "composite",
  composite: "composite",
  Violence: "violence",
  violence: "violence",
  Sexy: "sexy",
  sexy: "sexy"
};
async function Qs(i, t, e, s) {
  var r;
  try {
    const n = { roomIds: i };
    e && (n.startTime = e), s && (n.endTime = s);
    const o = await bt("/moderation/room-labels", n);
    if (!o || o.code !== 0 || !((r = o.data) != null && r.labels))
      return /* @__PURE__ */ new Map();
    const a = /* @__PURE__ */ new Map();
    for (const c of o.data.labels) {
      const u = c.roomId;
      if (!u) continue;
      const f = Array.isArray(c.labels) ? c.labels.map((p) => Ci[p] || "unknown") : [];
      a.set(u, f);
    }
    return a;
  } catch (n) {
    return console.error("[moderation] getLiveViolationLabelsBatch failed", n), /* @__PURE__ */ new Map();
  }
}
const tr = N.mutedList, er = N.bannedList, Si = 600, bi = 86400, Nt = (i) => Array.isArray(i) ? i.filter((t) => !!t && typeof t == "object") : [], J = (i, ...t) => {
  const e = t.map((s) => i[s]).find((s) => typeof s == "string" && s.length > 0);
  return typeof e == "string" ? e : "";
}, xt = (i, ...t) => {
  const e = t.map((r) => i[r]).find((r) => r != null), s = Number(e || 0);
  return Number.isFinite(s) ? s : 0;
}, $ = (i) => i.memberAccounts || i.userIds || [];
async function ir(i) {
  var s;
  const t = await ce(i);
  return Nt(((s = t.Response) == null ? void 0 : s.MutedAccountList) || t.MutedAccountList).map((r) => ({
    userId: J(r, "Member_Account", "userId", "UserID"),
    endTime: xt(r, "MutedUntil", "endTime")
  })).filter((r) => r.userId);
}
function sr(i, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((s) => s.userId === i && s.endTime > e);
}
async function rr(i) {
  var s;
  const t = await le(i);
  return Nt(((s = t.Response) == null ? void 0 : s.BannedAccountList) || t.BannedAccountList).map((r) => ({
    userId: J(r, "Member_Account", "userId", "UserID"),
    endTime: xt(r, "BannedUntil", "endTime"),
    reason: J(r, "Reason", "reason") || void 0
  })).filter((r) => r.userId);
}
function nr(i, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((s) => s.userId === i && s.endTime > e);
}
async function or(i) {
  const { liveId: t } = i, e = $(i), s = i.muteTime ?? i.duration ?? Si;
  await re(t, e, s);
}
async function ar(i) {
  const { liveId: t } = i, e = $(i);
  await ne(t, e);
}
async function cr(i) {
  const { liveId: t, reason: e = "" } = i, s = $(i), r = i.banTime ?? i.duration ?? bi;
  await oe(t, s, r, e);
}
async function lr(i) {
  const { liveId: t } = i, e = $(i);
  await ae(t, e);
}
function Pt(i) {
  return `${i}_robot`;
}
function ur(i, t) {
  return i === Pt(t);
}
function gr(i, t) {
  const e = Pt(t);
  return i.filter((s) => s !== e);
}
function dr(i) {
  const t = Math.floor(Date.now() / 1e3), e = i - t;
  if (e <= 0)
    return "已过期";
  const s = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
  return s > 0 ? `${s}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function fr(i) {
  const t = Math.floor(Date.now() / 1e3);
  return i <= t;
}
const wi = {
  "[TUIEmoji_Expect]": "emoji_0@2x.png",
  "[TUIEmoji_Blink]": "emoji_1@2x.png",
  "[TUIEmoji_Guffaw]": "emoji_2@2x.png",
  "[TUIEmoji_KindSmile]": "emoji_3@2x.png",
  "[TUIEmoji_Haha]": "emoji_4@2x.png",
  "[TUIEmoji_Cheerful]": "emoji_5@2x.png",
  "[TUIEmoji_Smile]": "emoji_6@2x.png",
  "[TUIEmoji_Sorrow]": "emoji_7@2x.png",
  "[TUIEmoji_Speechless]": "emoji_8@2x.png",
  "[TUIEmoji_Amazed]": "emoji_9@2x.png",
  "[TUIEmoji_Complacent]": "emoji_10@2x.png",
  "[TUIEmoji_Lustful]": "emoji_11@2x.png",
  "[TUIEmoji_Stareyes]": "emoji_12@2x.png",
  "[TUIEmoji_Giggle]": "emoji_13@2x.png",
  "[TUIEmoji_Daemon]": "emoji_14@2x.png",
  "[TUIEmoji_Rage]": "emoji_15@2x.png",
  "[TUIEmoji_Yawn]": "emoji_16@2x.png",
  "[TUIEmoji_TearsLaugh]": "emoji_17@2x.png",
  "[TUIEmoji_Silly]": "emoji_18@2x.png",
  "[TUIEmoji_Wail]": "emoji_19@2x.png",
  "[TUIEmoji_Kiss]": "emoji_20@2x.png",
  "[TUIEmoji_Trapped]": "emoji_21@2x.png",
  "[TUIEmoji_Fear]": "emoji_22@2x.png",
  "[TUIEmoji_BareTeeth]": "emoji_23@2x.png",
  "[TUIEmoji_FlareUp]": "emoji_24@2x.png",
  "[TUIEmoji_Tact]": "emoji_25@2x.png",
  "[TUIEmoji_Shit]": "emoji_26@2x.png",
  "[TUIEmoji_ShutUp]": "emoji_27@2x.png",
  "[TUIEmoji_Sigh]": "emoji_28@2x.png",
  "[TUIEmoji_Hehe]": "emoji_29@2x.png",
  "[TUIEmoji_Silent]": "emoji_30@2x.png",
  "[TUIEmoji_Skull]": "emoji_31@2x.png",
  "[TUIEmoji_Mask]": "emoji_32@2x.png",
  "[TUIEmoji_Beer]": "emoji_33@2x.png",
  "[TUIEmoji_Cake]": "emoji_34@2x.png",
  "[TUIEmoji_RedPacket]": "emoji_35@2x.png",
  "[TUIEmoji_Bombs]": "emoji_36@2x.png",
  "[TUIEmoji_Ai]": "emoji_37@2x.png",
  "[TUIEmoji_Celebrate]": "emoji_38@2x.png",
  "[TUIEmoji_Bless]": "emoji_39@2x.png",
  "[TUIEmoji_Flower]": "emoji_40@2x.png",
  "[TUIEmoji_Watermelon]": "emoji_41@2x.png",
  "[TUIEmoji_Cow]": "emoji_42@2x.png",
  "[TUIEmoji_Fool]": "emoji_43@2x.png",
  "[TUIEmoji_Surprised]": "emoji_44@2x.png",
  "[TUIEmoji_Askance]": "emoji_45@2x.png",
  "[TUIEmoji_Monster]": "emoji_46@2x.png",
  "[TUIEmoji_Pig]": "emoji_47@2x.png",
  "[TUIEmoji_Coffee]": "emoji_48@2x.png",
  "[TUIEmoji_Ok]": "emoji_49@2x.png",
  "[TUIEmoji_Heart]": "emoji_50@2x.png",
  "[TUIEmoji_Sun]": "emoji_51@2x.png",
  "[TUIEmoji_Moon]": "emoji_52@2x.png",
  "[TUIEmoji_Star]": "emoji_53@2x.png",
  "[TUIEmoji_Rich]": "emoji_54@2x.png",
  "[TUIEmoji_Fortune]": "emoji_55@2x.png",
  "[TUIEmoji_857]": "emoji_56@2x.png",
  "[TUIEmoji_666]": "emoji_57@2x.png",
  "[TUIEmoji_Prohibit]": "emoji_58@2x.png",
  "[TUIEmoji_Convinced]": "emoji_59@2x.png",
  "[TUIEmoji_Knife]": "emoji_60@2x.png",
  "[TUIEmoji_Like]": "emoji_61@2x.png"
}, Ti = "https://web.sdk.qcloud.com/im/assets/emoji-plugin/", hr = (i) => {
  if (!i)
    return [];
  const t = [];
  let e = i;
  for (; e.length > 0; ) {
    const s = e.indexOf("["), r = e.indexOf("]");
    if (s === 0) {
      if (r === -1) {
        t.push({ type: "text", text: e });
        break;
      }
      const n = e.slice(0, r + 1), o = wi[n];
      if (o) {
        t.push({
          type: "emoji",
          key: n,
          src: `${Ti}${o}`
        }), e = e.slice(r + 1);
        continue;
      }
      t.push({ type: "text", text: n }), e = e.slice(r + 1);
      continue;
    }
    if (s === -1) {
      t.push({ type: "text", text: e });
      break;
    }
    t.push({ type: "text", text: e.slice(0, s) }), e = e.slice(s);
  }
  return t;
};
function mr(i, t) {
  const e = Math.max(1, t), s = Math.min(Math.max(1, i), e);
  if (e <= 7)
    return Array.from({ length: e }, (o, a) => a + 1);
  const r = [], n = (o) => {
    r[r.length - 1] !== o && r.push(o);
  };
  n(1), s > 4 && n("...");
  for (let o = Math.max(2, s - 2); o <= Math.min(e - 1, s + 2); o++)
    n(o);
  return s < e - 3 && n("..."), n(e), r;
}
class _i {
  constructor(t = {}) {
    this.config = {
      enableConsole: process.env.NODE_ENV !== "production",
      enableReport: process.env.NODE_ENV === "production",
      ...t
    };
  }
  /**
   * 调试日志
   */
  debug(t, e, s) {
    this.log("debug", t, e, s);
  }
  /**
   * 信息日志
   */
  info(t, e, s) {
    this.log("info", t, e, s);
  }
  /**
   * 警告日志
   */
  warn(t, e, s) {
    this.log("warn", t, e, s);
  }
  /**
   * 错误日志
   */
  error(t, e, s) {
    this.log("error", t, e, s), this.config.enableReport && s && this.reportError(t, e, s);
  }
  /**
   * 统一日志输出
   */
  log(t, e, s, r) {
    if (!this.config.enableConsole) return;
    const o = `${this.config.prefix ? `[${this.config.prefix}]` : ""}[${e}] ${s}`;
    switch (t) {
      case "debug":
        console.debug(o, r);
        break;
      case "info":
        console.info(o, r);
        break;
      case "warn":
        console.warn(o, r);
        break;
      case "error":
        console.error(o, r);
        break;
    }
  }
  /**
   * 上报错误到监控系统
   * 可以集成 Sentry、腾讯云监控等
   */
  reportError(t, e, s) {
  }
}
new _i({ prefix: "LiveKit" });
const yr = (i, t = null) => {
  try {
    return JSON.parse(i);
  } catch (e) {
    return console.warn("Failed to parse JSON:", i, e), t;
  }
}, pr = (i, t) => {
  let e = null;
  return (...s) => {
    e !== null && clearTimeout(e), e = window.setTimeout(() => {
      i(...s), e = null;
    }, t);
  };
}, Lr = (i, t = {}) => {
  const e = i;
  e != null && e.requestFullscreen ? e == null || e.requestFullscreen(t) : e != null && e.mozRequestFullScreen ? e == null || e.mozRequestFullScreen(t) : e != null && e.webkitRequestFullScreen ? e == null || e.webkitRequestFullScreen(t) : e != null && e.msRequestFullscreen && (e == null || e.msRequestFullscreen(t));
}, Ir = () => {
  if (!(document != null && document.fullscreenElement) && !(document != null && document.webkitFullscreenElement) && !(document != null && document.mozFullScreenElement))
    return;
  const i = document;
  i != null && i.exitFullscreen ? i == null || i.exitFullscreen() : i != null && i.msExitFullscreen ? i == null || i.msExitFullscreen() : i != null && i.mozCancelFullScreen ? i == null || i.mozCancelFullScreen() : i != null && i.webkitExitFullscreen && (i == null || i.webkitExitFullscreen());
}, rt = async (i) => {
  var e;
  if ((e = navigator.clipboard) != null && e.writeText)
    return navigator.clipboard.writeText(i);
  const t = document.createElement("textarea");
  t.value = i, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function Er(i) {
  return `live_obs_${i}`;
}
class Z extends Error {
  constructor(t, e, s) {
    const r = e === "url-validation" ? `${t}不可用` : `${t}上传失败`, n = s ?? {}, o = n.ErrorInfo || n.message || (e === "url-validation" ? "请检查 URL 是否正确" : "网络错误");
    super(`${r}: ${o}`), this.name = "ImageUploadResolveError", this.label = t, this.type = e, this.cause = s;
  }
}
async function Ai(i) {
  const { handle: t, hasPendingFile: e, fallbackUrl: s, label: r } = i;
  if ((t == null ? void 0 : t.isUrlInputMode) ?? !0)
    try {
      const o = await (t == null ? void 0 : t.ensureUrlValidated());
      return o ?? "";
    } catch (o) {
      throw new Z(r, "url-validation", o);
    }
  else if (e && t)
    try {
      return await t.uploadPendingFile() || "";
    } catch (o) {
      throw new Z(r, "upload", o);
    }
  else
    return s.trim();
}
async function vr(i) {
  return Promise.all(i.map(Ai));
}
function Cr(i, t = "图片") {
  if (i instanceof Z)
    return i.message;
  const e = i ?? {}, s = e.ErrorInfo || e.message || "未知错误";
  return `${t}处理失败: ${s}`;
}
const Mi = {
  0: "操作成功",
  [-1]: "暂未归类的通用错误",
  [-2]: "请求被限频，请稍后重试",
  [-3]: "重复操作",
  [-1e3]: "未找到 SDKAppID，请在控制台确认应用信息",
  [-1001]: "传入的参数不合法，请检查入参",
  [-1002]: "未登录，请先登录",
  [-1003]: "获取权限失败，当前未授权音/视频权限，请查看是否开启设备权限",
  [-1004]: "该功能需要开通额外的套餐，请在控制台按需开通"
}, Ri = {
  [-1100]: "打开摄像头失败，请检查摄像头设备是否正常",
  [-1101]: "摄像头没有系统授权，请检查系统权限设置",
  [-1102]: "摄像头被占用，请检查是否有其他应用正在使用",
  [-1103]: "当前无摄像头设备，请插入摄像头后重试",
  [-1104]: "打开麦克风失败，请检查麦克风设备是否正常",
  [-1105]: "麦克风没有系统授权，请检查系统权限设置",
  [-1106]: "麦克风被占用，请检查是否有其他应用正在使用",
  [-1107]: "当前无麦克风设备，请插入麦克风后重试",
  [-1108]: "获取屏幕分享对象失败，请检查屏幕录制权限",
  [-1109]: "开启屏幕分享失败，请检查房间内是否有人正在屏幕分享"
}, Di = {
  [-2101]: "需要进房后才可使用此功能",
  [-2102]: "房主不支持退房操作。会议房间可以先转让房主再退房，直播房间房主只能解散房间",
  [-2103]: "当前房间类型下不支持该操作",
  [-2105]: "创建房间 ID 非法，自定义 ID 必须为可打印 ASCII 字符（0x20-0x7e），最长 48 个字节",
  [-2107]: "房间名称非法，名称最长 30 字节，字符编码必须是 UTF-8",
  [-2108]: "当前用户已在别的房间内，请先退出当前房间"
}, Ui = {
  [-2200]: "未找到该用户"
}, Oi = {
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
  [-2380]: "当前房间已开启全员禁言",
  [-2381]: "您已被禁言"
}, Ni = {
  [-4001]: "当前房间不支持预加载"
}, xi = {
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
}, Pi = {
  100001: "服务器内部错误，请重试",
  100002: "请求参数非法，请检查请求是否正确",
  100003: "房间 ID 已被使用，请选择其他房间 ID",
  100004: "房间不存在或已被解散",
  100005: "非房间成员",
  100006: "操作权限不足",
  100007: "无付费信息，请在控制台购买套餐包",
  100008: "房间成员已满",
  100009: "标签数量超上限",
  100010: "房间 ID 已被使用，操作者为房主，可以直接使用",
  100011: "房间 ID 已被 IM 占用，请换一个房间 ID 或先通过 IM 接口解散该群",
  100012: "操作频率超过限制，请稍后重试",
  100013: "超过付费上限，请检查套餐包限制",
  100015: "无效的房间类型",
  100016: "该成员已被封禁",
  100017: "该成员已被禁言",
  100018: "当前房间需要密码才能进入",
  100019: "进房密码错误",
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
  100211: "该房间不支持连麦",
  100251: "连麦列表为空",
  100400: "当前连线不存在或已结束",
  100401: "该房间已经在连线中",
  100402: "该房间存在待处理的连线请求",
  100403: "当前房间正与其他房间连线中",
  100404: "超过连线和 Battle 房间数量上限",
  100405: "短时间内连线过于频繁，请稍后再试",
  100411: "该场次 Battle 不存在或已结束",
  100412: "发起的 Battle 中没有有效的房间",
  100413: "短时间内频繁发起 Battle，请稍后再试",
  100414: "该房间已不在 Battle 中",
  100415: "该房间处于其他 Battle 场次中",
  100416: "该房间存在待处理的 Battle 请求",
  100419: "该房间处于 Battle 中",
  100420: "该 Battle 场次还未开始",
  100421: "该 Battle 场次已经结束",
  100500: "房间 Meta 数据中的 Key 数量超过上限",
  100501: "房间 Meta 数据中单个 Key 对应的值超过最大字节数限制",
  100502: "房间 Meta 数据中所有 Key 对应的值总和超过最大字节数限制",
  100503: "删除房间 Meta 数据时，被删除的 Key 没有一个存在",
  100504: "房间 Meta 数据中的 Key 大小超过最大字节数限制"
}, Gi = {
  ...Mi,
  ...Ri,
  ...Di,
  ...Ui,
  ...Oi,
  ...Ni,
  ...xi,
  ...Pi
};
function gt(i, t, e) {
  return t || (Gi[i] ?? e ?? `未知错误（错误码: ${i}）`);
}
function Sr(i) {
  return i === 0;
}
function br(i) {
  return i < 0;
}
function wr(i) {
  return i >= 6e4 && i < 7e4;
}
function Tr(i) {
  return i >= 1e5;
}
function _r(i) {
  return i === 0 ? "success" : i < 0 ? "client" : i >= 6e4 && i < 7e4 ? "rest_api" : i >= 1e5 ? "server" : "unknown";
}
async function Fi() {
  return (await wt({
    method: "GET",
    url: "/upload/config"
  })).data;
}
async function Ar() {
  try {
    return !!(await Fi()).enabled;
  } catch {
    return !1;
  }
}
async function Mr(i, t = "cover", e) {
  const s = new FormData();
  s.append("file", i), s.append("type", t);
  const r = await wt({
    method: "POST",
    url: "/upload/image",
    data: s,
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 6e4,
    onUploadProgress: (n) => {
      if (e && n.total) {
        const o = Math.round(n.loaded * 100 / n.total);
        e(o);
      }
    }
  });
  if (r.code !== 0)
    throw new Error(r.message || "上传失败");
  return r.data;
}
const Q = [
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
], dt = [
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
], Vi = [
  ...Q,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function B(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function Gt(i) {
  return typeof i == "string" ? i.trim() : "";
}
function D(i, t) {
  if (!i) return "";
  for (const e of t) {
    const s = Gt(i[e]);
    if (s)
      return s;
  }
  return "";
}
function w(i) {
  if (B(i))
    return i;
  if (typeof i == "string")
    try {
      const t = JSON.parse(i);
      return B(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function Ft(i) {
  return [
    w(i.liveOwner),
    w(i.anchor),
    w(i.owner),
    w(i.host),
    w(i.userInfo),
    w(i.sender)
  ];
}
function Rr(i) {
  const t = (i || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function Dr(i) {
  if (!B(i))
    return "";
  const t = D(i, Q);
  if (t)
    return t;
  for (const s of Ft(i)) {
    const r = D(s, Q);
    if (r)
      return r;
  }
  const e = w(
    i.CustomINFO ?? i.customInfo ?? i.customData ?? i.metadata
  );
  return D(e, Vi);
}
function Ur(i, t = "") {
  if (typeof i == "string")
    return i.trim() || t;
  if (!B(i))
    return t;
  const e = D(i, dt);
  if (e)
    return e;
  const s = Gt(i.liveOwner);
  if (s)
    return s;
  for (const r of Ft(i)) {
    const n = D(r, dt);
    if (n)
      return n;
  }
  return t;
}
const ji = "live_", Or = 43, Nr = 100, ki = "VideoDynamicGrid9Seats", Bi = 8, F = 9 / 16, Vt = 16 / 9, v = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, Wi = [
  { value: "VideoDynamicGrid9Seats", labelKey: l.DYNAMIC_GRID_LAYOUT, descKey: l.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: l.FLOATING_WINDOW_LAYOUT, descKey: l.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: l.FIXED_GRID_LAYOUT, descKey: l.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: l.FIXED_WINDOW_LAYOUT, descKey: l.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: l.LANDSCAPE_BROADCASTING, descKey: l.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function xr() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: ki,
    maxSeatCount: Bi
  };
}
function Pr() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function $i(i) {
  return `${ji}${i}`;
}
function Ki(i) {
  return i === "AudioSalon" || i === "Karaoke";
}
function Yi(i) {
  return Wi.find((t) => t.value === i);
}
function Gr(i) {
  var t;
  return ((t = Yi(i)) == null ? void 0 : t.orientation) === "landscape" ? Vt : F;
}
function Fr(i) {
  return !i.key.trim() && !!i.value.trim();
}
function Hi(i) {
  const t = {};
  for (const e of i) {
    const s = e.key.trim();
    s && (t[s] = e.value);
  }
  return t;
}
function Vr(i) {
  const t = {};
  let e = 0;
  for (const r of i) {
    const n = r.key.trim();
    if (!n) continue;
    const o = _(n);
    if (o > v.maxKeyBytes)
      return { type: "key-too-long", key: n, max: v.maxKeyBytes, current: o };
    const a = _(r.value);
    if (a > v.maxValueBytes)
      return { type: "value-too-long", key: n, max: v.maxValueBytes, current: a };
    e += a, t[n] = r.value;
  }
  const s = Object.keys(t).length;
  return s > v.maxCount ? { type: "max-count", max: v.maxCount, current: s } : e > v.maxTotalValueBytes ? { type: "total-value-too-long", max: v.maxTotalValueBytes, current: e } : null;
}
function jr(i, t) {
  const e = new Set(Object.keys(t));
  return i.filter((s) => !e.has(s));
}
function kr(i) {
  const { formData: t, coverUrl: e, customInfos: s, useObsStreaming: r } = i, n = Hi(s), o = {
    liveId: $i(t.anchorId),
    anchorId: t.anchorId,
    title: t.liveName,
    seatTemplate: t.seatTemplate
  };
  return e && (o.coverUrl = e), Ki(t.seatTemplate) && (o.maxSeatCount = t.maxSeatCount), Object.keys(n).length > 0 && (o.customInfo = n), r && (o.useObsStreaming = !0), o;
}
function zi(i) {
  if (!i) return [];
  if (typeof i == "string")
    try {
      return zi(JSON.parse(i));
    } catch {
      return [];
    }
  return typeof i != "object" ? [] : Object.entries(i).map(([t, e]) => ({
    key: t,
    value: String(e)
  }));
}
function Br(i) {
  return new Promise((t) => {
    if (!i) {
      t(F);
      return;
    }
    const e = new Image();
    e.crossOrigin = "anonymous", e.onload = () => {
      const s = e.naturalWidth / e.naturalHeight;
      t(s > 1 ? Vt : F);
    }, e.onerror = () => t(F), e.src = i;
  });
}
const qi = 70102;
function jt(i) {
  return `live_obs_${i}`;
}
function Xi(i) {
  const t = /* @__PURE__ */ new Set();
  return i == null || i.forEach((e) => {
    e.Member_Account && t.add(e.Member_Account);
  }), t;
}
function kt(i) {
  return i || null;
}
async function tt(i, t) {
  const [e, s] = await Promise.all([
    ue(i).then((r) => {
      var n;
      return ((n = r.Response) == null ? void 0 : n.RobotList_Account) || [];
    }).catch(() => []),
    ge(i).then((r) => {
      var n;
      return Xi((n = r.Response) == null ? void 0 : n.SeatList);
    }).catch(() => /* @__PURE__ */ new Set())
  ]);
  return {
    hasRobot: e.includes(t),
    onSeat: s.has(t)
  };
}
async function Wr(i) {
  const { liveId: t, anchorId: e, onStatusChange: s, messages: r = {} } = i, n = jt(e), o = r.getStreamInfoFailed || "Get Stream Info Failed";
  let a = null, c = "";
  try {
    const u = await st(t, n);
    a = kt(u), a || (c = o);
  } catch (u) {
    c = (u instanceof Error ? u.message : "") || o;
  }
  try {
    const { hasRobot: u, onSeat: f } = await tt(t, n);
    let p = f;
    if (!u) {
      s == null || s("creating");
      const h = await he(n, `OBS Robot ${n}`);
      if (h.ErrorCode !== 0 && h.Error !== 0 && h.ErrorCode !== qi)
        throw new Error(h.ErrorInfo || r.importAccountFailed || "Import Account Failed");
      const A = await fe(t, [n]);
      if (A.ErrorCode !== 0)
        throw new Error(A.ErrorInfo || r.addRobotFailed || "Add Robot Failed");
      p = (await tt(t, n)).onSeat;
    }
    if (!p) {
      s == null || s("seating");
      const h = await de(t, n);
      if (h.ErrorCode !== 0)
        throw new Error(h.ErrorInfo || r.pickSeatFailed || "Pick Seat Failed");
    }
    return s == null || s("ready"), {
      robotId: n,
      streamInfo: a,
      streamInfoError: c,
      setupError: "",
      status: "ready",
      configuredSuccessfully: !0
    };
  } catch (u) {
    console.error("OBS setup failed:", u);
    const f = (u instanceof Error ? u.message : "") || r.setupFailed || "OBS Setup Failed";
    return s == null || s("error"), {
      robotId: n,
      streamInfo: a,
      streamInfoError: c,
      setupError: f,
      status: "error",
      configuredSuccessfully: !1
    };
  }
}
async function Ji(i) {
  const { liveId: t, anchorId: e, getStreamInfoFailedMessage: s = "Get Stream Info Failed" } = i, r = jt(e);
  try {
    const { hasRobot: n, onSeat: o } = await tt(t, r);
    if (!n || !o)
      return {
        robotId: r,
        hasRobot: n,
        onSeat: o,
        streamInfo: null,
        streamInfoError: "",
        status: "none",
        errorMessage: ""
      };
    try {
      const a = kt(await st(t, r));
      return {
        robotId: r,
        hasRobot: n,
        onSeat: o,
        streamInfo: a,
        streamInfoError: a ? "" : s,
        status: "ready",
        errorMessage: ""
      };
    } catch (a) {
      return {
        robotId: r,
        hasRobot: n,
        onSeat: o,
        streamInfo: null,
        streamInfoError: (a instanceof Error ? a.message : "") || s,
        status: "ready",
        errorMessage: ""
      };
    }
  } catch (n) {
    return {
      robotId: r,
      hasRobot: !1,
      onSeat: !1,
      streamInfo: null,
      streamInfoError: "",
      status: "error",
      errorMessage: (n instanceof Error ? n.message : "") || ""
    };
  }
}
const Bt = N.moderation, Zi = 10;
async function $r(i) {
  const {
    liveId: t,
    pageNum: e,
    pageSize: s = Bt,
    minutes: r = Zi,
    violationOnly: n = !0
  } = i, o = await Ii({
    liveId: t,
    pageNum: e,
    pageSize: s,
    minutes: r,
    violationOnly: n
  }), a = await fi(o.list), c = await di();
  return {
    list: a,
    total: Math.max(0, o.total - c),
    currentPage: e
  };
}
async function Kr(i) {
  await Dt(i);
}
function Yr(i, t, e, s = Bt) {
  const r = Math.max(0, t - e), n = Math.max(1, Math.ceil(r / s));
  return Math.min(i, n);
}
function Hr(i, t) {
  return i.includes(t) ? i.filter((e) => e !== t) : [...i, t];
}
function zr(i, t) {
  if (t.length > 0 && t.every((s) => i.includes(s)))
    return i.filter((s) => !t.includes(s));
  {
    const s = new Set(i);
    return t.forEach((r) => s.add(r)), Array.from(s);
  }
}
function qr(i, t) {
  return i.filter((e) => t.includes(e));
}
function Xr(i, t) {
  return t.length === 0 ? !1 : t.every((e) => i.includes(e));
}
function Jr(i) {
  return {
    normal: l.NORMAL,
    porn: l.PORN,
    sensitive: l.SENSITIVE,
    political: l.POLITICAL,
    advertising: l.ADVERTISING,
    abuse: l.ABUSE,
    illegal: l.ILLEGAL,
    composite: l.COMPOSITE,
    violence: l.VIOLENCE,
    sexy: l.SEXY,
    unknown: l.UNKNOWN
  }[i] || l.UNKNOWN;
}
function Zr(i) {
  const t = new Date(i), e = String(t.getMonth() + 1).padStart(2, "0"), s = String(t.getDate()).padStart(2, "0"), r = String(t.getHours()).padStart(2, "0"), n = String(t.getMinutes()).padStart(2, "0"), o = String(t.getSeconds()).padStart(2, "0");
  return `${e}-${s} ${r}:${n}:${o}`;
}
const et = /* @__PURE__ */ new Map();
function K(i, t) {
  if (typeof document > "u") return 0;
  const e = `${i}:${t}`, s = et.get(e);
  if (s !== void 0) return s;
  const r = document.createElement("span");
  r.className = i, i.includes("live-card-tag-overlay") && !i.includes("live-card-tag-more") ? r.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${t}` : r.textContent = t, r.style.visibility = "hidden", r.style.position = "absolute", r.style.left = "-9999px", r.style.top = "-9999px", r.style.pointerEvents = "none", document.body.appendChild(r);
  const n = r.getBoundingClientRect().width;
  return document.body.removeChild(r), et.set(e, n), n;
}
function Qi() {
  et.clear();
}
function Wt(i) {
  const t = i.roomIdText ?? i.liveIdText ?? "", {
    containerWidth: e,
    tagTexts: s,
    idLeftOffset: r = 6,
    tagsRightOffset: n = 8,
    tagGap: o = 6,
    safeGap: a = 12,
    minVisibleTags: c = 2,
    maxVisibleTags: u = 99
  } = i, p = K("live-id-badge", t), h = r + p, A = e - n, C = s.map(
    (m) => K("live-card-tag-overlay", m)
  ), x = K("live-card-tag-overlay live-card-tag-more", "...");
  let S = 0, E = 0;
  for (let m = 0; m < C.length; m++) {
    const y = C[m], nt = C.length - m - 1, qt = nt > 0 ? x : 0, ot = E > 0 ? o : 0, Xt = S + ot + y + (nt > 0 ? o + qt : 0), at = A - Xt, Jt = Math.max(60, at - r - a);
    if (p > Jt || at < h + a)
      break;
    S += ot + y, E++;
  }
  if (C.length - E > 0 && (S += o + x), s.length >= c && E < c) {
    let m = 0;
    for (let y = 0; y < c; y++)
      m += (y > 0 ? o : 0) + C[y];
    s.length > c && (m += o + x), E = c, S = m;
  }
  if (E > u) {
    E = u;
    let m = 0;
    for (let y = 0; y < u; y++)
      m += (y > 0 ? o : 0) + C[y];
    s.length > u && (m += o + x), S = m;
  }
  const Ht = A - S, zt = Math.max(
    60,
    Ht - r - a
  );
  return {
    visibleCount: E,
    showMore: s.length > E,
    idMaxWidth: `${Math.round(zt)}px`,
    tagsMaxWidth: `${Math.round(S)}px`
  };
}
function Qr(i, t, e, s, r) {
  return i.map((n) => {
    const o = t(n), a = e(n);
    return Wt({
      containerWidth: r,
      roomIdText: `${s("Room ID")}: ${o}`,
      tagTexts: a.map((c) => s(c))
    });
  });
}
class tn {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = t.containerSelector, this.t = t.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(t, e) {
    const s = this.cache.get(t);
    if (s) return s;
    const r = Wt({
      ...this.buildOptions(t, e.tags || [])
      // 允许调用方覆盖
    });
    return this.cache.set(t, r), r;
  }
  /** 获取缓存结果，无缓存时返回保守默认值 */
  getResult(t) {
    return this.cache.get(t) || {
      visibleCount: 0,
      showMore: !1,
      idMaxWidth: "calc(100% - 12px)",
      tagsMaxWidth: "0px"
    };
  }
  /** 清除缓存（窗口缩放或字体变化时调用） */
  clearCache() {
    this.cache.clear(), Qi();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(t) {
    this.onResize = t;
    const e = document.querySelector(this.containerSelector);
    e && (this.resizeObserver = new ResizeObserver((s) => {
      var r;
      for (const n of s)
        if (n.contentRect.width > 0) {
          this.clearCache(), (r = this.onResize) == null || r.call(this);
          break;
        }
    }), this.resizeObserver.observe(e));
  }
  /** 停止监听（外部在 onUnmounted/cleanup 中调用） */
  disconnect() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), this.resizeObserver = null, this.onResize = null;
  }
  /** 为列表批量初始化缓存 */
  initForList(t) {
    for (const e of t)
      this.cache.has(e.liveId) || this.compute(e.liveId, e);
  }
  /** 获取当前缓存（只读，用于框架响应式同步） */
  getCache() {
    return this.cache;
  }
  buildOptions(t, e) {
    return {
      containerWidth: this.getContainerWidth(),
      roomIdText: `${this.t("LIVE_ID")}: ${t}`,
      tagTexts: e.map((s) => this.t(s)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const t = document.querySelector(this.containerSelector);
    if (!t) return 300;
    const e = window.getComputedStyle(t), s = parseFloat(e.gap) || 8, r = e.gridTemplateColumns, n = r.match(/repeat\((\d+)/), o = n ? parseInt(n[1], 10) : r.split(" ").length || 1;
    return (t.clientWidth - s * (o - 1)) / o;
  }
}
const L = {
  sc: { code: "zh-Hans", label: "Simplified Chinese" },
  tc: { code: "zh-Hant", label: "Traditional Chinese" },
  en: { code: "en", label: "English" }
}, ft = {
  "zh-Hans": "sc",
  "zh-Hant": "tc",
  en: "en"
}, en = ["sc", "tc", "en"], sn = 20, rn = 20, nn = 20, on = 100, ht = 20, an = 45;
function $t(i) {
  return new TextEncoder().encode(i).length;
}
function cn(i, t) {
  if (!i || t <= 0)
    return "";
  let e = "", s = 0;
  for (const r of i) {
    const n = $t(r);
    if (s + n > t)
      break;
    e += r, s += n;
  }
  return e;
}
function ln(i) {
  if (!i) return "-";
  const t = typeof i == "number" ? i * 1e3 : parseInt(i) * 1e3, e = new Date(t), s = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), n = String(e.getDate()).padStart(2, "0"), o = String(e.getHours()).padStart(2, "0"), a = String(e.getMinutes()).padStart(2, "0"), c = String(e.getSeconds()).padStart(2, "0");
  return `${s}-${r}-${n} ${o}:${a}:${c}`;
}
function un(i) {
  return L[i];
}
function Kt(i) {
  const t = Object.entries(L).find(([e, s]) => s.code === i);
  return t ? t[0] : void 0;
}
function gn(i) {
  const t = Kt(i);
  return t ? L[t].label : i;
}
function dn(i) {
  return typeof i == "string" ? i : typeof i == "number" ? String(i) : i.Language || i.language || "";
}
function Yt() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function ts(i, t) {
  return i == null ? void 0 : i.find((e) => e.language === t);
}
function es(i) {
  const t = Yt(), e = [];
  if (!i || i.length === 0)
    return { config: t, langsToFetch: e };
  for (const s of i) {
    const r = s.language, n = Kt(r);
    n && (s.name || s.description ? t[n] = { name: s.name || "", description: s.description || "" } : e.push(n));
  }
  return { config: t, langsToFetch: e };
}
function is(i, t) {
  const e = L[t].code, s = ts(i, e);
  return s && (s.name || s.description) ? {
    form: { name: s.name || "", description: s.description || "" },
    needsFetch: !1,
    langCode: e
  } : {
    form: { name: "", description: "" },
    needsFetch: !!s,
    langCode: e
  };
}
function ss(i) {
  return i.trim().toLowerCase();
}
function mt(i, t) {
  return $t(i) > t;
}
function G(i, t) {
  const e = ss(t);
  return e ? i.filter((s) => {
    const r = (s.id || "").toLowerCase(), n = (s.name || "").toLowerCase(), o = (s.description || "").toLowerCase(), a = (s.categories || []).join(",").toLowerCase();
    return r.includes(e) || n.includes(e) || o.includes(e) || a.includes(e);
  }) : i;
}
function yt(i) {
  const t = i.categories.map((r) => {
    const n = z(r.languageList, "categoryName", "categoryDescription");
    return {
      ...r,
      name: (n == null ? void 0 : n.name) || r.defaultName || r.name,
      description: (n == null ? void 0 : n.description) || r.defaultDescription || r.description
    };
  }), e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    e.set(String(r.id), r.name);
  }), { gifts: i.gifts.map((r) => {
    const n = z(r.languageList, "name", "description"), o = (r.categoryIds || []).map((a) => e.get(String(a)) || a);
    return {
      ...r,
      name: (n == null ? void 0 : n.name) || r.defaultName || r.name,
      description: (n == null ? void 0 : n.description) || r.defaultDescription || r.description,
      categories: o
    };
  }), categories: t };
}
const fn = 10, hn = 20, mn = 20, yn = 60, it = "gift_categories_cache";
function rs(i) {
  return i.map((t) => {
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
function ns(i, t = sessionStorage) {
  if (i.length !== 0)
    try {
      t.setItem(it, JSON.stringify(i));
    } catch {
    }
}
function os(i = sessionStorage) {
  try {
    const t = i.getItem(it);
    return t ? (i.removeItem(it), rs(JSON.parse(t))) : [];
  } catch {
    return [];
  }
}
function as(i) {
  return i.map((t) => {
    const e = z(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: (e == null ? void 0 : e.name) || t.defaultName || t.name,
      description: (e == null ? void 0 : e.description) || t.defaultDescription || t.description
    };
  });
}
const cs = {
  moderationAvailable: !0,
  moderationRemainUsage: 0,
  loading: !1,
  error: null,
  lastUpdatedAt: 0
};
let T = { ...cs };
const ls = /* @__PURE__ */ new Set();
function Y(i) {
  const t = T;
  return T = { ...T, ...i }, ls.forEach((e) => e(T, t)), T;
}
function pn() {
  return T.moderationAvailable;
}
async function Ln() {
  Y({ loading: !0, error: null });
  try {
    const i = await vi(), t = i > 0;
    return Y({
      moderationAvailable: t,
      moderationRemainUsage: i,
      loading: !1,
      lastUpdatedAt: Date.now()
    }), t;
  } catch (i) {
    const t = i instanceof I ? i : I.from(i);
    return Y({
      moderationAvailable: !1,
      moderationRemainUsage: 0,
      loading: !1,
      error: t,
      lastUpdatedAt: Date.now()
    }), !1;
  }
}
const In = {
  viewBox: "0 0 24 24",
  path: "M11 6.5L5.5 12L11 17.5M6.75 12H19.75",
  strokeWidth: 2,
  strokeLinecap: "square"
}, En = {
  viewBox: "0 0 24 24",
  path: "M12 11V17M12 7V7.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
  strokeWidth: 2
}, vn = {
  viewBox: "0 0 24 24",
  path: "M6 9L12 15L18 9",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
class Cn {
  constructor() {
    this.currentUrl = "";
  }
  /**
   * Set preview from File/Blob (or null to clear)
   * Automatically revokes old URL if exists
   * 
   * @param file - File/Blob to create preview from, or null to clear
   * @returns Preview URL (empty string if null)
   */
  setPreview(t) {
    if (!t)
      return this.clearPreview(), "";
    const e = Ae(this.currentUrl || void 0, t);
    return this.currentUrl = e, e;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (Mt(this.currentUrl), this.currentUrl = "");
  }
  /**
   * Cleanup all resources
   * Should be called on component unmount
   */
  cleanup() {
    this.clearPreview();
  }
  /**
   * Get current preview URL
   * @returns Current URL (empty string if none)
   */
  getCurrentUrl() {
    return this.currentUrl;
  }
  /**
   * Check if preview exists
   */
  hasPreview() {
    return !!this.currentUrl;
  }
}
const b = {
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
function Sn(i) {
  const t = [
    { key: "liveId", i18nKey: l.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: b.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: l.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: b.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: l.COVER_IMAGE, className: "col-cover", width: b.COVER_WIDTH },
    { key: "anchor", i18nKey: l.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: b.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: l.CREATE_TIME, className: "live-list-col-time", width: b.CREATED_AT_WIDTH }
  ];
  return i.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: b.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: l.ACTIONS, className: "live-list-col-action", maxWidth: b.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function bn(i) {
  const { live: t, icons: e, t: s, onEnter: r, onDetail: n, onEdit: o, onDelete: a } = i;
  return [
    { key: "enter", label: s(l.ENTER_LIVE), title: s(l.ENTER_LIVE), icon: e.enter, onClick: () => r(t.liveId) },
    { key: "detail", label: s(l.LIVE_DETAILS), title: s(l.LIVE_DETAILS), icon: e.detail, onClick: () => n(t) },
    { key: "edit", label: s(l.EDIT), title: s(l.EDIT), icon: e.edit, onClick: () => o(t) },
    { key: "delete", label: s(l.DISSOLVE), title: s(l.DISSOLVE), icon: e.delete, danger: !0, onClick: () => a(t) }
  ];
}
async function us(i, t) {
  var n;
  const e = ((n = i.anchor) == null ? void 0 : n.userId) || "", s = await Ji({
    liveId: i.liveId,
    anchorId: e,
    getStreamInfoFailedMessage: t(l.GET_STREAM_INFO_FAILED)
  }), r = {
    visible: !0,
    live: i,
    robotId: s.robotId,
    streamInfo: null,
    robotStatus: "checking",
    robotStatusText: "",
    actionLoading: ""
  };
  return s.status === "ready" ? {
    snapshot: {
      ...r,
      robotStatus: "ready",
      robotStatusText: t(l.OBS_READY),
      streamInfo: s.streamInfo
    },
    toastError: s.streamInfoError || void 0
  } : s.status === "none" ? {
    snapshot: {
      ...r,
      robotStatus: "none",
      robotStatusText: t(l.OBS_SETUP_FAILED)
    }
  } : {
    snapshot: {
      ...r,
      robotStatus: "error",
      robotStatusText: t(l.REQUEST_FAILED, {
        error: s.errorMessage || t(l.NETWORK_ERROR)
      })
    }
  };
}
const pt = {
  visible: !1,
  live: null,
  robotId: "",
  streamInfo: null,
  robotStatus: "checking",
  robotStatusText: "",
  actionLoading: ""
}, Lt = {
  visible: !1,
  title: "",
  content: "",
  liveId: ""
};
class wn {
  constructor(t) {
    this.opts = t, this.state = {
      lives: [],
      loading: !1,
      refreshing: !1,
      currentPage: 1,
      hasMoreData: !0,
      searchInput: "",
      obsModal: { ...pt },
      confirmDialog: { ...Lt },
      isCreateModalVisible: !1,
      isEditModalVisible: !1,
      editingLive: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.pageCursors = V(), this.destroyed = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
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
    const t = Pe();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await Ue({
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
      const s = this.opts.t(l.LOAD_LIVE_LIST_FAILED);
      e instanceof ut ? this.opts.toast.error(gt(e.errorCode, e.errorInfo, s)) : this.opts.toast.error(s);
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
    Oe({
      targetPage: t,
      currentPage: this.state.currentPage,
      hasMoreData: this.state.hasMoreData
    }) && this.loadPage(t);
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    this.setState({ searchInput: t });
  }
  isSearchInputTooLong() {
    return Ge(this.state.searchInput, De);
  }
  async search() {
    const t = this.state.searchInput.trim();
    if (t) {
      if (this.isSearchInputTooLong()) {
        this.opts.toast.error(this.opts.t(l.INPUT_TOO_LONG));
        return;
      }
      this.setState({ loading: !0 });
      try {
        const e = await Fe(t);
        e ? (this.setState({
          lives: [e],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.success(this.opts.t(l.SEARCH_SUCCESS))) : (this.setState({
          lives: [],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.error(this.opts.t(l.LIVE_NOT_FOUND)));
      } catch (e) {
        if (console.error("搜索直播失败:", e), e instanceof ut)
          this.opts.toast.error(gt(
            e.errorCode,
            e.errorInfo,
            this.opts.t(l.LIVE_NOT_FOUND)
          ));
        else {
          const s = (e == null ? void 0 : e.message) || this.opts.t(l.NETWORK_ERROR);
          this.opts.toast.error(this.opts.t(l.SEARCH_FAILED, { error: s }));
        }
      } finally {
        this.setState({ loading: !1 });
      }
    }
  }
  async clearSearch() {
    this.pageCursors = V(), this.setState({
      searchInput: "",
      currentPage: 1,
      hasMoreData: !0
    }), await this.loadPage(1);
  }
  // -------- 进入直播 --------
  enterLive(t) {
    xe({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await rt(t);
    const s = e ?? this.opts.t(l.LIVE_ID);
    this.opts.toast.success(this.opts.t(l.COPY_LABEL_COPIED, { label: s }));
  }
  // -------- OBS 详情弹窗 --------
  async showDetail(t) {
    var r;
    this.setState({
      obsModal: {
        visible: !0,
        live: t,
        robotId: "",
        streamInfo: null,
        robotStatus: "checking",
        robotStatusText: this.opts.t(l.LOADING),
        actionLoading: "stream"
      }
    });
    const { snapshot: e, toastError: s } = await us(t, this.opts.t);
    this.state.obsModal.visible && ((r = this.state.obsModal.live) == null ? void 0 : r.liveId) === t.liveId && this.setState({ obsModal: e }), s && this.opts.toast.error(s);
  }
  closeDetail() {
    this.setState({ obsModal: { ...pt } });
  }
  // -------- 删除确认 --------
  requestDelete(t) {
    this.setState({
      confirmDialog: {
        visible: !0,
        title: this.opts.t(l.DISSOLVE_CONFIRMATION),
        content: this.opts.t(l.DISSOLVE_DESCRIPTION, {
          liveId: t.liveName || this.opts.t(l.UNNAMED_LIVE)
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
        await this.opts.endLive(t), this.opts.toast.success(this.opts.t(l.DISSOLVE_SUCCESS));
        const e = Ne({
          currentPage: this.state.currentPage,
          hasMoreData: this.state.hasMoreData,
          livesLength: this.state.lives.length
        });
        await this.loadPage(e);
      } catch (e) {
        console.error("解散直播失败:", e), this.opts.toast.error(this.opts.t(l.DISSOLVE_FAILED));
      } finally {
        this.setState({ confirmDialog: { ...Lt } });
      }
  }
  // -------- 创建 / 编辑弹窗 --------
  openCreateModal() {
    this.setState({ isCreateModalVisible: !0 });
  }
  closeCreateModal() {
    this.setState({ isCreateModalVisible: !1 });
  }
  /** 创建成功后调用，关闭弹窗 + 刷新 */
  onLiveCreated() {
    this.setState({ isCreateModalVisible: !1 }), this.refresh();
  }
  openEditModal(t) {
    this.setState({ isEditModalVisible: !0, editingLive: t });
  }
  closeEditModal() {
    this.setState({ isEditModalVisible: !1 });
  }
  /** 编辑成功后调用，局部更新 lives，避免整页刷新 */
  onLiveEdited(t) {
    const e = this.state.editingLive;
    if (!e) {
      this.setState({ isEditModalVisible: !1 });
      return;
    }
    const s = this.state.lives.map(
      (r) => r.liveId === e.liveId ? { ...r, liveName: t.liveName, coverUrl: t.coverUrl } : r
    );
    this.setState({ isEditModalVisible: !1, lives: s });
  }
}
const gs = { name: "", description: "" };
class Tn {
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
      giftLangConfig: Yt(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...gs },
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
      const t = await this.opts.actions.fetchGiftList(), e = t.giftCategoryList || [], { gifts: s, categories: r } = yt({
        gifts: t.giftList || [],
        categories: e
      });
      this.setState({
        giftList: s,
        displayList: G(s, this.state.searchInput),
        categoryList: r.length > 0 ? r : this.state.categoryList
      });
    } catch (t) {
      console.error(this.opts.t(l.GET_GIFT_LIST_FAILED), t);
      const e = this.formatError(t, this.opts.t(l.GET_GIFT_LIST_FAILED));
      this.opts.toast.error(e), this.setState({ giftList: [], displayList: [] });
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
    const { gifts: t, categories: e } = yt({
      gifts: this.state.giftList,
      categories: this.state.categoryList
    });
    this.setState({
      giftList: t,
      categoryList: e,
      displayList: G(t, this.state.searchInput)
    });
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    const e = String(t ?? "");
    this.setState({ searchInput: e }), !mt(e, ht) && this.setState({ displayList: G(this.state.giftList, e) });
  }
  isSearchInputTooLong() {
    return mt(this.state.searchInput, ht);
  }
  /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
  search() {
    const t = this.state.searchInput.trim();
    if (!t) return;
    if (this.isSearchInputTooLong()) {
      this.opts.toast.error(this.opts.t(l.INPUT_TOO_LONG));
      return;
    }
    const e = G(this.state.giftList, this.state.searchInput);
    e.length > 0 ? (this.setState({ displayList: e }), this.opts.toast.success(this.opts.t("Found results", { count: e.length }))) : (this.setState({ displayList: [] }), this.opts.toast.error(this.opts.t("No gift found", { keyword: t })));
  }
  clearSearch() {
    this.setState({ searchInput: "", displayList: this.state.giftList });
  }
  // -------- 导航 / 复制 --------
  goToCategoryManagement() {
    ns(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await rt(String(t || "")), this.opts.toast.success(this.opts.t(l.COPY_LABEL_COPIED, { label: this.opts.t(l.GIFT_ID) }));
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
    var e;
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
        extensionInfo: ((e = t.extensionInfo) == null ? void 0 : e.trim()) || void 0
      }), this.opts.toast.success(
        this.opts.t(this.state.isEdit ? l.GIFT_UPDATED_SUCCESSFULLY : l.GIFT_CREATED_SUCCESSFULLY)
      ), await this.fetchGiftList(), this.setState({ dialogVisible: !1 });
    } catch (s) {
      throw this.opts.toast.error(this.opts.t(l.OPERATION_FAILED, {
        error: this.extractErrorInfo(s)
      })), s;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openGiftLangConfigDialog(t) {
    const e = this.state.giftList.find((n) => n.id === t), { config: s, langsToFetch: r } = es(e == null ? void 0 : e.languageList);
    if (this.setState({
      editingId: t,
      giftLangConfig: s,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const n = await Promise.allSettled(
          r.map(async (a) => {
            const c = await this.opts.actions.getGiftLanguage({
              giftId: t,
              language: L[a].code
            });
            return { langKey: a, result: c };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const o = { ...this.state.giftLangConfig };
        for (const a of n)
          if (a.status === "fulfilled") {
            const { langKey: c, result: u } = a.value;
            o[c] = { name: u.name || "", description: u.description || "" };
          }
        this.setState({ giftLangConfig: o });
      } catch {
      }
  }
  closeGiftLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    const s = this.state.giftList.find((o) => o.id === t), r = is(s == null ? void 0 : s.languageList, e);
    let n = r.form;
    if (r.needsFetch)
      try {
        const o = await this.opts.actions.getGiftLanguage({ giftId: t, language: r.langCode });
        n = { name: o.name || "", description: o.description || "" };
      } catch {
      }
    this.setState({
      editingGiftForLang: t,
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
    const { editingGiftForLang: t, editingLang: e, langEditForm: s, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        s.name && (await this.opts.actions.setGiftLanguage({
          giftId: t,
          language: L[e].code,
          name: s.name,
          description: s.description
        }), this.opts.toast.success(this.opts.t(l.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchGiftList(), r && this.state.editingLang === e && this.setState({
          giftLangConfig: {
            ...this.state.giftLangConfig,
            [e]: { ...s }
          }
        });
      } catch (n) {
        this.opts.toast.error(this.opts.t(l.OPERATION_FAILED, {
          error: this.extractErrorInfo(n)
        }));
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftLanguage({ giftId: t, language: L[e].code }), this.opts.toast.success(this.opts.t(l.LANGUAGE_CONFIG_CLEARED)), this.setState({
        giftLangConfig: {
          ...this.state.giftLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchGiftList();
    } catch (s) {
      this.opts.toast.error(this.opts.t(l.OPERATION_FAILED, {
        error: this.extractErrorInfo(s)
      }));
    }
  }
  // -------- 类别编辑弹窗 --------
  openCategoryEditDialog(t) {
    const e = this.state.categoryList.map((n) => ({
      id: String(n.id || ""),
      name: n.name || "",
      giftIds: (n.giftIds || []).map(String)
    })), s = (t.categoryIds || []).map(String);
    let r = s;
    s.length === 0 && e.length > 0 && (r = e.filter((n) => n.giftIds.includes(String(t.id))).map((n) => n.id)), this.setState({
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
        }), this.opts.toast.success(this.opts.t(l.CATEGORY_ADDED)), await this.fetchGiftList();
      } catch (s) {
        this.opts.toast.error(this.opts.t(l.OPERATION_FAILED, {
          error: this.extractErrorInfo(s)
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
          giftCategoryIds: this.state.giftCategoryIds.filter((s) => s !== e)
        }), this.opts.toast.success(this.opts.t(l.CATEGORY_REMOVED)), await this.fetchGiftList();
      } catch (s) {
        this.opts.toast.error(this.opts.t(l.OPERATION_FAILED, {
          error: this.extractErrorInfo(s)
        }));
      } finally {
        this.setState({ categoryDeleteVisible: !1, deletingCategoryId: "" });
      }
  }
  /** 根据类别 ID 取本地化名称（视图层渲染用） */
  getCategoryName(t) {
    const e = this.state.allCategories.find((s) => String(s.id) === String(t));
    return (e == null ? void 0 : e.name) || t;
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
        await this.opts.actions.deleteGift(t.id), this.opts.toast.success(this.opts.t(l.GIFT_DELETED_SUCCESSFULLY)), await this.fetchGiftList();
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(l.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return (e == null ? void 0 : e.ErrorInfo) || (e == null ? void 0 : e.message) || this.opts.t(l.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const s = t;
    return s != null && s.ErrorInfo ? `${e}: ${s.ErrorInfo}` : s != null && s.message ? `${e}: ${s.message}` : e;
  }
}
const It = {
  categoryId: "",
  name: "",
  description: ""
}, Et = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, vt = { name: "", description: "" };
class _n {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      categoryList: [],
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      formData: { ...It },
      langConfigVisible: !1,
      categoryLangConfig: Ct(Et),
      langEditVisible: !1,
      editingLang: null,
      editingCategoryForLang: "",
      langEditForm: { ...vt },
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
      const e = os();
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
      console.error(this.opts.t(l.GET_CATEGORY_LIST_FAILED), e), this.opts.toast.error(this.formatError(e, this.opts.t(l.GET_CATEGORY_LIST_FAILED))), this.setState({ categoryList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    this.state.categoryList.length !== 0 && this.setState({ categoryList: as(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await rt(String(t || "")), this.opts.toast.success(
      this.opts.t(l.COPY_LABEL_COPIED, { label: this.opts.t(l.CATEGORY_ID) })
    );
  }
  // -------- 新增 / 编辑弹窗 --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      formData: { ...It },
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
      }), this.opts.toast.success(this.opts.t(l.CATEGORY_UPDATED_SUCCESSFULLY))) : (await this.opts.actions.createGiftCategory({
        categoryId: t.categoryId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(l.CATEGORY_CREATED_SUCCESSFULLY))), this.setState({ dialogVisible: !1 }), await this.fetchCategoryList(!1);
    } catch (e) {
      throw this.opts.toast.error(
        this.opts.t(l.OPERATION_FAILED, { error: this.extractErrorInfo(e) })
      ), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openLangConfigDialog(t) {
    const e = this.state.categoryList.find((n) => n.id === t), s = Ct(Et), r = [];
    if (e != null && e.languageList && e.languageList.length > 0)
      for (const n of e.languageList) {
        const o = H(n);
        o.langKey && (o.name || o.description ? s[o.langKey] = { name: o.name, description: o.description } : r.push(o.langKey));
      }
    if (this.setState({
      editingId: t,
      categoryLangConfig: s,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const n = await Promise.allSettled(
          r.map(async (a) => {
            const c = await this.opts.actions.getGiftCategoryLanguage(
              t,
              L[a].code
            );
            return { langKey: a, result: c };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const o = { ...this.state.categoryLangConfig };
        for (const a of n)
          if (a.status === "fulfilled") {
            const { langKey: c, result: u } = a.value;
            o[c] = { name: u.name || "", description: u.description || "" };
          }
        this.setState({ categoryLangConfig: o });
      } catch {
      }
  }
  closeLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    var a;
    const s = this.state.categoryList.find((c) => c.id === t), r = L[e].code, n = (a = s == null ? void 0 : s.languageList) == null ? void 0 : a.find((c) => H(c).langCode === r);
    let o = { ...vt };
    if (n) {
      const c = H(n);
      if (c.name || c.description)
        o = { name: c.name, description: c.description };
      else
        try {
          const u = await this.opts.actions.getGiftCategoryLanguage(t, r);
          o = { name: u.name || "", description: u.description || "" };
        } catch {
        }
    }
    this.setState({
      editingCategoryForLang: t,
      editingLang: e,
      langEditForm: o,
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
    const { editingCategoryForLang: t, editingLang: e, langEditForm: s, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        s.name && (await this.opts.actions.setGiftCategoryLanguage(
          t,
          L[e].code,
          s.name,
          s.description
        ), this.opts.toast.success(this.opts.t(l.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchCategoryList(!1), r && this.state.editingId === t && this.state.editingLang === e && this.setState({
          categoryLangConfig: {
            ...this.state.categoryLangConfig,
            [e]: { ...s }
          }
        });
      } catch (n) {
        this.opts.toast.error(
          this.opts.t(l.OPERATION_FAILED, { error: this.extractErrorInfo(n) })
        );
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftCategoryLanguage(t, L[e].code), this.opts.toast.success(this.opts.t(l.LANGUAGE_CONFIG_CLEARED)), this.setState({
        categoryLangConfig: {
          ...this.state.categoryLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchCategoryList(!1);
    } catch (s) {
      this.opts.toast.error(
        this.opts.t(l.OPERATION_FAILED, { error: this.extractErrorInfo(s) })
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
        await this.opts.actions.deleteGiftCategory(t.id), this.opts.toast.success(this.opts.t(l.CATEGORY_DELETED_SUCCESSFULLY)), await this.fetchCategoryList(!1);
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(l.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return (e == null ? void 0 : e.ErrorInfo) || (e == null ? void 0 : e.message) || this.opts.t(l.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const s = t;
    return s != null && s.ErrorInfo ? `${e}: ${s.ErrorInfo}` : s != null && s.message ? `${e}: ${s.message}` : e;
  }
}
function Ct(i) {
  return {
    sc: { ...i.sc },
    tc: { ...i.tc },
    en: { ...i.en }
  };
}
function H(i) {
  if (typeof i == "string")
    return { langCode: i, langKey: ft[i], name: "", description: "" };
  const t = i.language || "";
  return {
    langCode: t,
    langKey: t ? ft[t] : void 0,
    name: i.categoryName || "",
    description: i.categoryDescription || ""
  };
}
export {
  an as $,
  Or as A,
  er as B,
  yn as C,
  bi as D,
  Ti as E,
  L as F,
  it as G,
  ji as H,
  En as I,
  X as J,
  Re as K,
  Vt as L,
  q as M,
  De as N,
  Nr as O,
  ut as P,
  Ys as Q,
  wn as R,
  Cs as S,
  fn as T,
  Zi as U,
  Bt as V,
  tr as W,
  Ns as X,
  N as Y,
  F as Z,
  Cn as _,
  In as a,
  es as a$,
  Wi as a0,
  Ds as a1,
  Xs as a2,
  cr as a3,
  kr as a4,
  $i as a5,
  bn as a6,
  us as a7,
  mr as a8,
  Js as a9,
  Kr as aA,
  Br as aB,
  Ir as aC,
  Me as aD,
  rr as aE,
  Ue as aF,
  ir as aG,
  fi as aH,
  G as aI,
  Ks as aJ,
  gr as aK,
  qr as aL,
  Ws as aM,
  Zr as aN,
  dr as aO,
  ln as aP,
  di as aQ,
  Ut as aR,
  le as aS,
  _ as aT,
  Gr as aU,
  Us as aV,
  jr as aW,
  Ar as aX,
  _r as aY,
  gt as aZ,
  Rr as a_,
  ns as aa,
  js as ab,
  Yr as ac,
  ks as ad,
  Fs as ae,
  Oe as af,
  At as ag,
  gi as ah,
  Qi as ai,
  Hi as aj,
  Wt as ak,
  Qr as al,
  zs as am,
  os as an,
  rs as ao,
  rt as ap,
  pr as aq,
  xr as ar,
  Pr as as,
  Yt as at,
  xs as au,
  V as av,
  _e as aw,
  Os as ax,
  zi as ay,
  Zs as az,
  tn as b,
  me as b$,
  is as b0,
  Ii as b1,
  dn as b2,
  un as b3,
  Kt as b4,
  gn as b5,
  Sn as b6,
  Ne as b7,
  Qs as b8,
  ps as b9,
  Tr as bA,
  Sr as bB,
  Ss as bC,
  Ce as bD,
  bs as bE,
  ve as bF,
  $r as bG,
  or as bH,
  Is as bI,
  ss as bJ,
  Qt as bK,
  hr as bL,
  Ps as bM,
  ws as bN,
  Dt as bO,
  as as bP,
  yt as bQ,
  Ae as bR,
  Dr as bS,
  Ur as bT,
  Ai as bU,
  vr as bV,
  Pe as bW,
  Mt as bX,
  yr as bY,
  xe as bZ,
  Fe as b_,
  qs as ba,
  Jr as bb,
  vi as bc,
  pe as bd,
  ce as be,
  Ji as bf,
  Er as bg,
  Gs as bh,
  Yi as bi,
  _s as bj,
  Fi as bk,
  Cr as bl,
  Ln as bm,
  Ts as bn,
  Xr as bo,
  Ki as bp,
  nr as bq,
  br,
  Fr as bs,
  fr as bt,
  mt as bu,
  Ge as bv,
  pn as bw,
  sr as bx,
  ur as by,
  wr as bz,
  wi as c,
  Ls as c0,
  Le as c1,
  vs as c2,
  Lr as c3,
  ye as c4,
  Wr as c5,
  $s as c6,
  ys as c7,
  ms as c8,
  zr as c9,
  Hr as ca,
  cn as cb,
  lr as cc,
  ar as cd,
  Es as ce,
  Mr as cf,
  Vr as cg,
  Rs as ch,
  Ms as ci,
  As as cj,
  we as ck,
  lt as cl,
  Vs as cm,
  be as cn,
  Se as co,
  Te as cp,
  ae as cq,
  oe as cr,
  hn as d,
  ee as e,
  mn as f,
  M as g,
  vn as h,
  v as i,
  Bi as j,
  Si as k,
  ki as l,
  re as m,
  Bs as n,
  nn as o,
  on as p,
  sn as q,
  rn as r,
  ht as s,
  _n as t,
  ne as u,
  Tn as v,
  Hs as w,
  Z as x,
  ft as y,
  en as z
};
