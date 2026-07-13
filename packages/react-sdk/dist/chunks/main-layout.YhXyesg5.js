import { am as g, an as d, ao as ht, $ as mt, Q as jt, ap as X, aj as yt, J as c, ai as Vt, a9 as kt, _ as Bt, a1 as Wt, f as j } from "./en-US.DVkRUkOo.js";
function ji(i, t = 0) {
  const e = Number(i);
  return Number.isFinite(e) ? e : t;
}
function Vi(i, t = !1) {
  return typeof i == "boolean" ? i : typeof i == "number" ? i !== 0 : typeof i == "string" ? i === "true" || i === "1" : t;
}
function $t(i) {
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
function pt(i) {
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
      customInfo: r.CustomInfo ? $t(r.CustomInfo) : {}
    };
  }
  return s;
}
async function Kt(i = {}) {
  var n, a;
  const t = i.next || "0", e = i.count || 20, s = await g(d.fetchLiveList, {
    Next: t,
    Count: e,
    SortDirection: i.sortDirection
  });
  if (s.ErrorCode !== 0)
    throw new Error(`Get live list failed: ${s.ErrorInfo || "Unknown error"} (code: ${s.ErrorCode})`);
  return {
    list: (((n = s.Response) == null ? void 0 : n.RoomList) || []).map(
      (o) => pt(o)
    ),
    next: ((a = s.Response) == null ? void 0 : a.Next) || ""
  };
}
async function w(i) {
  var r, n;
  const [t, e] = await Promise.all([
    g(d.getRoomInfo, { RoomId: i }),
    g(d.getRoomMetadata, { RoomId: i, Keys: [] })
  ]);
  if (!((r = t.Response) != null && r.RoomInfo)) return null;
  const s = pt(t.Response.RoomInfo);
  if ((n = e == null ? void 0 : e.Response) != null && n.Metadata) {
    const a = { ...s.customInfo || {} };
    (e.Response.Metadata || []).forEach((o) => {
      a[o.Key] = o.Value;
    }), s.customInfo = a;
  }
  return s;
}
async function Q(i) {
  return g(d.getLiveStatistic, { RoomId: i });
}
async function Yt(i) {
  return g(d.destroyRoom, { RoomId: i });
}
async function Ht(i) {
  const t = i.liveId || String(Date.now()), e = {
    RoomId: t,
    RoomType: "Live",
    SeatTemplate: i.seatTemplate || "VideoDynamicGrid9Seats",
    Owner_Account: i.anchorId,
    IsUnlimitedRoomEnabled: !0
  };
  if (i.useObsStreaming && (e.KeepOwnerOnSeat = !1), i.liveName && i.liveName.trim() && (e.RoomName = i.liveName), i.coverUrl && i.coverUrl.trim() && (e.CoverURL = i.coverUrl.trim()), i.maxSeatCount && (i.seatTemplate === "AudioSalon" || i.seatTemplate === "Karaoke") && (e.MaxSeatCount = Number(i.maxSeatCount)), await g(d.createLive, { RoomInfo: e }), i.customInfo && Object.keys(i.customInfo).length > 0) {
    const r = Object.entries(i.customInfo).map(([n, a]) => ({ Key: n, Value: a }));
    await g(d.setRoomMetadata, { RoomId: t, Metadata: r });
  }
  const s = await w(t);
  if (!s)
    throw new Error("创建直播成功，但获取详情失败");
  return s;
}
async function Xt(i, t) {
  const e = [], s = { RoomId: i, IsUnlimitedRoomEnabled: !0 };
  if (t.liveName !== void 0 && (s.RoomName = t.liveName), t.coverUrl !== void 0 && (s.CoverURL = t.coverUrl), t.isMessageDisabled !== void 0 && (s.IsMessageDisabled = t.isMessageDisabled), e.push(g(d.updateLiveInfo, { RoomInfo: s })), t.customInfo && Object.keys(t.customInfo).length > 0) {
    const n = Object.entries(t.customInfo).map(([a, o]) => ({ Key: a, Value: o }));
    e.push(g(d.setRoomMetadata, { RoomId: i, Metadata: n }));
  }
  return t.deleteKeys && t.deleteKeys.length > 0 && e.push(g(d.delRoomMetadata, { RoomId: i, Keys: t.deleteKeys })), (await Promise.all(e))[0];
}
async function qt(i, t, e = 600) {
  return g(d.muteMember, { RoomId: i, MemberList_Account: t, MuteTime: e });
}
async function zt(i, t) {
  return g(d.muteMember, { RoomId: i, MemberList_Account: t, MuteTime: 0 });
}
async function Jt(i, t, e = 3600, s = "") {
  return g(d.banMember, { RoomId: i, MemberList_Account: t, Duration: e, Reason: s });
}
async function Zt(i, t) {
  return g(d.unbanMember, { RoomId: i, MemberList_Account: t });
}
async function Qt(i, t = {}) {
  return g(d.getMutedMemberList, {
    RoomId: i,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function te(i, t = {}) {
  return g(d.getBannedMemberList, {
    RoomId: i,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function ee(i) {
  return g(d.getRobot, { RoomId: i });
}
async function ie(i) {
  return g(d.getSeatList, { RoomId: i });
}
async function se(i, t, e = 0) {
  return g(d.pickUserOnSeat, { RoomId: i, Member_Account: t, Index: e });
}
async function re(i, t) {
  return g(d.addRobot, { RoomId: i, RobotList_Account: t });
}
async function ne(i, t, e) {
  return g(d.importAccount, { UserID: i, Nick: t || "", FaceUrl: "" });
}
async function ki(i, t = 50) {
  return mt(`/chat/${i}/messages`, { limit: t });
}
async function Bi(i, t) {
  var s;
  const e = ((s = ht().credentials) == null ? void 0 : s.userId) || "admin";
  return g(d.sendTextMsg, {
    RoomId: i,
    Sender_Account: e,
    TextContent: t,
    MsgPriority: "Normal"
  });
}
async function ae(i, t, e, s) {
  var n;
  const r = s || ((n = ht().credentials) == null ? void 0 : n.userId) || "admin";
  return g(d.sendCustomMsg, {
    RoomId: i,
    Sender_Account: r,
    BusinessId: t,
    Data: e
  });
}
async function oe(i, t) {
  return g(d.updateLiveInfo, {
    RoomInfo: {
      RoomId: i,
      IsMessageDisabled: t,
      IsUnlimitedRoomEnabled: !0
    }
  });
}
async function Wi(i, t, e) {
  return g(d.muteMember, {
    RoomId: i,
    MemberList_Account: [t],
    MuteTime: e || 60
  });
}
async function $i(i, t) {
  return g(d.muteMember, {
    RoomId: i,
    MemberList_Account: [t],
    MuteTime: 0
  });
}
async function ce(i) {
  return mt(`/chat/${i}/mute-status`);
}
async function le(i, t) {
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
  return ae(
    i,
    "violation_alert",
    // BusinessId：标识违规警告消息
    JSON.stringify(s)
    // Data：消息内容
  );
}
async function Ki(i, t, e) {
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
  return le(i, {
    violationType: t,
    violationContent: e,
    handleSuggestion: s[t] || s.default
  });
}
class ue {
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
        const a = this.stoppingPromiseMap.get(e);
        a && await a;
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
class ge {
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
      const s = await jt(t);
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
class Yi {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.loading = {}, this.error = null, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new ue({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new ge({
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
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), w(t).then((s) => {
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
      const [a, o, l] = await Promise.allSettled([
        w(e),
        Q(e),
        this.fetchPushInfo(e)
        // 内部调用，获取推流信息
      ]);
      let u = null;
      if (a.status === "fulfilled")
        u = a.value;
      else
        throw a.reason;
      const f = o.status === "fulfilled" ? (n = o.value) == null ? void 0 : n.Response : null;
      return u && l.status === "fulfilled" && l.value && (u.streamInfo = l.value), u && f && (u.stats = this.mergeStatisticData(u, f)), u && (this.liveList.some((h) => h.liveId === u.liveId) ? this.liveList = this.liveList.map(
        (h) => h.liveId === u.liveId ? u : h
      ) : this.liveList = [u, ...this.liveList], this.currentLive = u), this.setLoading(s, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), u;
    } catch (a) {
      const o = a instanceof Error ? a : new Error(String(a));
      throw this.setError(o), this.setLoading(s, !1), console.error("[LiveMonitorCore] fetchLiveDetail failed:", o), o;
    }
  }
  // ========= 推流信息（私有方法，在 fetchLiveDetail 内部调用） =========
  async fetchPushInfo(t) {
    try {
      return await X(t);
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
      const r = (await Ht(t)).liveId || t.liveId, n = r ? await w(r) : null;
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
      await Xt(e, t), this.currentLive && (this.currentLive = { ...this.currentLive, ...t }, this.notifyStateChange({ currentLive: this.currentLive })), this.setLoading(s, !1);
    } catch (n) {
      const a = n instanceof Error ? n : new Error(String(n));
      throw this.setError(a), this.setLoading(s, !1), console.error("[LiveMonitorCore] updateLive failed:", a), a;
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
      await Yt(e), this.liveList = this.liveList.filter((n) => n.liveId !== e), this.currentLive && this.currentLive.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), this.setLoading(s, !1);
    } catch (n) {
      const a = n instanceof Error ? n : new Error(String(n));
      throw this.setError(a), this.setLoading(s, !1), console.error("[LiveMonitorCore] endLive failed:", a), a;
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
    var r, n, a, o, l, u, f, L;
    return e ? {
      liveId: t.liveId,
      onlineCount: t.onlineCount || e.TotalViewers || 0,
      viewCount: e.TotalViewers || ((r = t.stats) == null ? void 0 : r.viewCount) || 0,
      likeCount: e.TotalLikesReceived || ((n = t.stats) == null ? void 0 : n.likeCount) || 0,
      giftCount: e.TotalGiftsSent || ((a = t.stats) == null ? void 0 : a.giftCount) || 0,
      giftAmount: e.TotalGiftCoins || ((o = t.stats) == null ? void 0 : o.giftAmount) || 0,
      giftUserCount: e.TotalUniqueGiftSenders || ((l = t.stats) == null ? void 0 : l.giftUserCount),
      commentCount: e.TotalMsgCount || ((u = t.stats) == null ? void 0 : u.commentCount) || 0,
      totalUniqueCommenters: e.TotalUniqueCommenters || ((f = t.stats) == null ? void 0 : f.totalUniqueCommenters),
      duration: ((L = t.stats) == null ? void 0 : L.duration) || 0
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
    const e = t || ((n = this.currentLive) == null ? void 0 : n.liveId), s = t ? this.liveList.find((a) => a.liveId === t) || this.currentLive : this.currentLive;
    if (!e || !s)
      throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const r = "stats";
    this.setLoading(r, !0);
    try {
      const a = await Q(e), o = a == null ? void 0 : a.Response, l = o ? this.mergeStatisticData(s, o) : s.stats || {
        liveId: e,
        onlineCount: 0,
        viewCount: 0,
        likeCount: 0,
        giftCount: 0,
        giftAmount: 0,
        commentCount: 0,
        duration: 0
      };
      return this.currentLive && this.currentLive.liveId === e && (this.currentLive = { ...this.currentLive, stats: l }, this.notifyStateChange({ currentLive: this.currentLive })), this.liveList = this.liveList.map(
        (u) => u.liveId === e ? { ...u, stats: l } : u
      ), this.setLoading(r, !1), this.notifyStateChange({
        liveList: this.liveList
      }), l;
    } catch (a) {
      throw this.setLoading(r, !1), console.error("[LiveMonitorCore] fetchLiveStats failed:", a), a;
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
        await oe(t, e), this.liveList = this.liveList.map((s) => s.liveId === t ? { ...s, isMuted: e } : s), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
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
        const e = await ce(t);
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
function de(i) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(i);
}
function fe(i) {
  return /\.svga(\?|$)/i.test(i);
}
function Hi(i) {
  return i instanceof File ? i.name.toLowerCase().endsWith(".svga") : !1;
}
function Xi(i) {
  return i.type.startsWith("video/");
}
function T(i) {
  return new TextEncoder().encode(i).length;
}
function qi(i) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => t(s.result), s.onerror = e, s.readAsDataURL(i);
  });
}
let M = null;
function Lt() {
  if (!M)
    throw new Error("SVGAParser 未初始化，请先调用 initSvgaParser()");
  return M;
}
function zi(i) {
  M || (M = new i());
}
function Ji() {
  return M;
}
function he(i, t = 15e3) {
  return new Promise((e, s) => {
    if (!i) {
      s(new Error("URL 不能为空"));
      return;
    }
    const r = Lt();
    let n = null, a = !1;
    const o = () => {
      n && (clearTimeout(n), n = null);
    };
    n = setTimeout(() => {
      a || (a = !0, s(new Error("SVGA 资源加载超时，请检查 URL 是否可访问")));
    }, t), r.load(
      i,
      () => {
        a || (a = !0, o(), e(!0));
      },
      () => {
        a || (a = !0, o(), s(new Error("SVGA 资源加载失败，请检查 URL 是否正确")));
      }
    );
  });
}
function me(i, t = 15e3) {
  return new Promise((e, s) => {
    let r = null, n = !1;
    const a = () => {
      r && (clearTimeout(r), r = null);
    };
    r = setTimeout(() => {
      n || (n = !0, s(new Error("SVGA 文件解析超时")));
    }, t);
    const o = URL.createObjectURL(i);
    Lt().load(
      o,
      () => {
        n || (n = !0, a(), URL.revokeObjectURL(o), e(!0));
      },
      () => {
        n || (n = !0, a(), URL.revokeObjectURL(o), s(new Error("SVGA 文件无效或已损坏")));
      }
    );
  });
}
function tt(i, t = 8e3, e = !1) {
  return new Promise((s, r) => {
    var l;
    if (!i) {
      r(new Error("URL 不能为空"));
      return;
    }
    if (de(i)) {
      s(!0);
      return;
    }
    if (fe(i)) {
      if (e) {
        s(!0);
        return;
      }
      he(i, t > 8e3 ? t : 15e3).then(() => s(!0)).catch(r);
      return;
    }
    const n = document.createElement("img");
    let a = null;
    const o = () => {
      a && (clearTimeout(a), a = null), n.onload = null, n.onerror = null, n.src = "", n.parentNode && n.parentNode.removeChild(n);
    };
    n.onload = () => {
      o(), s(!0);
    }, n.onerror = () => {
      o(), r(new Error("图片加载失败，请检查 URL 是否正确"));
    }, a = setTimeout(() => {
      o(), r(new Error("图片加载超时，请检查 URL 是否可访问"));
    }, t), n.style.display = "none", (l = document.body) == null || l.appendChild(n), n.src = i;
  });
}
function ye(i, t = 1e4) {
  return new Promise((e, s) => {
    var o;
    const r = document.createElement("img");
    let n = null;
    const a = () => {
      n && (clearTimeout(n), n = null), r.onload = null, r.onerror = null, r.src = "", r.parentNode && r.parentNode.removeChild(r);
    };
    r.onload = () => {
      a(), e(!0);
    }, r.onerror = () => {
      a(), s(new Error("图片加载失败，文件可能已损坏"));
    }, n = setTimeout(() => {
      a(), s(new Error("图片加载超时"));
    }, t), r.style.display = "none", (o = document.body) == null || o.appendChild(r), r.src = i;
  });
}
function pe(i, t = 15e3) {
  return new Promise((e, s) => {
    var o;
    const r = document.createElement("video");
    let n = null;
    const a = () => {
      n && (clearTimeout(n), n = null), r.onloadeddata = null, r.onerror = null, r.src = "", r.parentNode && r.parentNode.removeChild(r);
    };
    r.onloadeddata = () => {
      a(), e(!0);
    }, r.onerror = () => {
      a(), s(new Error("视频加载失败，文件可能已损坏"));
    }, n = setTimeout(() => {
      a(), s(new Error("视频加载超时"));
    }, t), r.style.display = "none", r.muted = !0, (o = document.body) == null || o.appendChild(r), r.src = i, r.load();
  });
}
function Zi(i, t) {
  const e = t ? t.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"], s = e.filter((l) => !l.startsWith(".")), r = e.filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), n = e.some((l) => l.startsWith("video/")), a = "." + (i.name.split(".").pop() || "").toLowerCase();
  return s.includes(i.type) || n && i.type.startsWith("video/") || r.includes(a) ? { valid: !0 } : { valid: !1, errorHint: `只允许上传 ${e.map((u) => u === "image/svg+xml" ? "SVG" : u === "video/mp4" ? "MP4" : u.startsWith(".") ? u.slice(1).toUpperCase() : u.startsWith("image/") ? u.replace("image/", "").toUpperCase() : u).join("/")} 格式的文件` };
}
function Qi(i, t) {
  return i.size <= t * 1024 * 1024;
}
async function ts(i, t, e = !1) {
  const r = (t ? t.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"]).filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), n = "." + (i.name.split(".").pop() || "").toLowerCase(), a = n === ".svga", o = !a && r.includes(n) && !i.type.startsWith("image/") && !i.type.startsWith("video/");
  if (a)
    e || await me(i);
  else if (!o) {
    const l = URL.createObjectURL(i);
    try {
      i.type.startsWith("video/") ? await pe(l) : await ye(l);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
}
class es {
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
      if (e && T(s) > e) {
        this.callbacks.setError(`URL 不能超过 ${e} 字节`);
        return;
      }
      let r = !1;
      this.cancelRef = () => {
        r = !0;
      }, this.callbacks.setValidating(!0), this.callbacks.setError("");
      const n = (async () => {
        try {
          if (await tt(s, 8e3, this.skipSvgaValidation), r) return;
          this.callbacks.onConfirm(s);
        } catch (a) {
          if (r) return;
          this.callbacks.setError((a instanceof Error ? a.message : "") || "图片 URL 无效");
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
    if (s && T(r) > s)
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
    if (r && T(n) > r)
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
      return await tt(t, 8e3, this.skipSvgaValidation), e || (this.callbacks.onConfirm(t), this.callbacks.setValidating(!1)), t;
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
function It(i, t = "image/jpeg", e = 0.92) {
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
async function is(i, t, e = "image/jpeg", s = 0.92) {
  const r = new Image();
  r.crossOrigin = "anonymous", await new Promise((o, l) => {
    r.onload = () => o(), r.onerror = l, r.src = i;
  });
  const n = document.createElement("canvas");
  n.width = t.width, n.height = t.height;
  const a = n.getContext("2d");
  if (!a)
    throw new Error("Failed to get canvas 2D context");
  return a.drawImage(
    r,
    t.x,
    t.y,
    t.width,
    t.height,
    0,
    0,
    t.width,
    t.height
  ), It(n, e, s);
}
async function ss(i, t = "image/jpeg", e = 0.92) {
  if (!i)
    throw new Error("Canvas is null or undefined");
  return It(i, t, e);
}
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
function Le(i) {
  return URL.createObjectURL(i);
}
function Et(i) {
  try {
    URL.revokeObjectURL(i);
  } catch (t) {
    console.warn("Failed to revoke ObjectURL:", i, t);
  }
}
function Ie(i, t) {
  return i && Et(i), Le(t);
}
function Ee(i) {
  var e;
  const t = (e = i.dataTransfer) == null ? void 0 : e.files;
  return t && t.length > 0 ? t[0] : null;
}
function ns(i) {
  return (t) => {
    t.preventDefault();
    const e = Ee(t);
    e && i(e);
  };
}
function as(i) {
  i.preventDefault();
}
const R = {
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
function os(i) {
  return R[i];
}
function cs(i, t) {
  return Math.max(1, Math.ceil(i / t));
}
function ls(i, t) {
  return Math.max(1, Math.min(i, t));
}
function us(i, t) {
  return (i - 1) * t;
}
function gs(i, t, e) {
  const s = (i - 1) * t + 1, r = Math.min(i * t, e);
  return { start: s, end: r };
}
const ds = {
  field: "createTime",
  direction: "descend"
}, Ce = R.liveList, V = "liveList_currentPage", k = "liveList_pageCursors", Se = 1024;
class et extends Error {
  constructor(t, e, s = "Load Live List Failed") {
    super(e || s), this.name = "LiveListApiError", this.errorCode = t, this.errorInfo = e;
  }
}
function N() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function ve(i) {
  const { page: t, pageCursors: e, pageSize: s = Ce } = i, r = e.get(t) || "", { list: n, next: a } = await Kt({ next: r, count: s, sortDirection: "descend" }), o = n, l = new Map(e);
  return a && o.length > 0 && l.set(t + 1, a), {
    lives: o,
    currentPage: t,
    hasMoreData: !!a && o.length === s,
    pageCursors: l,
    response: { ErrorCode: 0, Response: { RoomList: n, Next: a } }
  };
}
function be(i) {
  const { targetPage: t, currentPage: e, hasMoreData: s } = i;
  return !(t < 1 || t > e && !s);
}
function Te(i) {
  const { currentPage: t, hasMoreData: e, livesLength: s } = i;
  return !e && s <= 1 && t > 1 ? t - 1 : t;
}
function _e(i) {
  const t = i.storage || sessionStorage;
  try {
    t.setItem(V, String(i.currentPage)), t.setItem(k, JSON.stringify(Array.from(i.pageCursors.entries())));
  } catch {
  }
}
function we(i = sessionStorage) {
  let t = 1, e = N();
  try {
    const s = i.getItem(V), r = i.getItem(k);
    if (i.removeItem(V), i.removeItem(k), s && r) {
      const n = Number(s);
      if (n > 0) {
        const a = JSON.parse(r);
        e = new Map(a), t = n;
      }
    }
  } catch {
    t = 1, e = N();
  }
  return { pageToLoad: t, pageCursors: e };
}
function Ae(i, t) {
  return T(i) > t;
}
async function Me(i) {
  return await w(i);
}
function fs(i) {
  return i ? new Date(i * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function hs(i, t) {
  const { field: e, direction: s } = t, r = [...i], n = s === "ascend" ? 1 : -1;
  return r.sort((a, o) => {
    let l = 0;
    switch (e) {
      case "createTime":
        l = (a.createdAt || 0) - (o.createdAt || 0);
        break;
      case "viewerCount":
        l = (a.onlineCount || 0) - (o.onlineCount || 0);
        break;
      case "duration": {
        const u = a.endedAt ? a.endedAt - a.createdAt : Date.now() / 1e3 - a.createdAt, f = o.endedAt ? o.endedAt - o.createdAt : Date.now() / 1e3 - o.createdAt;
        l = u - f;
        break;
      }
      case "status": {
        const u = a.endedAt ? 1 : 0, f = o.endedAt ? 1 : 0;
        l = u - f;
        break;
      }
      default:
        l = 0;
    }
    return l * n;
  }), r;
}
function ms(i, t) {
  let e = i;
  return t.status && (t.status === "ongoing" ? e = e.filter((s) => !s.endedAt) : t.status === "ended" && (e = e.filter((s) => !!s.endedAt))), t.anchorId && (e = e.filter((s) => s.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (e = e.filter((s) => !s.category || s.category.length === 0 ? !1 : t.tags.some((r) => s.category.includes(r)))), t.customFilter && (e = e.filter(t.customFilter)), e;
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
  set(t, e, s) {
    var r;
    if (this.cache.size >= this.maxPages) {
      const n = (r = Array.from(this.cache.entries()).sort((a, o) => a[1].timestamp - o[1].timestamp)[0]) == null ? void 0 : r[0];
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
const Re = () => "gift_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9), De = (i, t, e) => {
  const s = i.Name || "", r = i.Desc || "", n = (i.LanguageList || []).map((o) => ({
    name: o.Name || "",
    description: o.Desc || "",
    language: o.Language || ""
  })), a = e.get(i.GiftId) || [];
  return {
    id: i.GiftId,
    name: s,
    iconUrl: i.IconUrl || "",
    price: i.Coins || 0,
    animationUrl: i.ResourceUrl || "",
    level: i.Level !== void 0 ? String(i.Level) : void 0,
    description: r,
    categoryIds: a,
    categories: t.get(i.GiftId) || [],
    createdAt: i.CreateTime !== void 0 ? String(i.CreateTime) : void 0,
    languageList: n
  };
}, Ue = (i) => {
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
function Oe(i) {
  const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map();
  return (i || []).forEach((s) => {
    const r = s.CategoryName || "";
    (s.GiftIdList || []).forEach((n) => {
      t.has(n) || (t.set(n, []), e.set(n, [])), r && t.get(n).push(r), e.get(n).push(s.CategoryId);
    });
  }), { giftToCategories: t, giftToCategoryIds: e };
}
async function Ne(i) {
  const t = await g(d.getGiftList, {});
  if (t && t.ErrorCode === 0 && t.Response) {
    const e = t.Response.GiftList || [], s = t.Response.CategoryList || [], { giftToCategories: r, giftToCategoryIds: n } = Oe(s), a = e.map((l) => De(l, r, n)), o = s.map((l) => Ue(l));
    return {
      gifts: a,
      total: t.Response.TotalCount || a.length,
      categories: o
    };
  }
  return { gifts: [], total: 0 };
}
async function Pe(i) {
  const t = i.id || Re();
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
async function xe(i) {
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
async function Ge(i) {
  await g(d.delGift, { GiftId: i });
}
async function Fe(i, t) {
  var r;
  const e = await g(d.getGiftLanguage, { GiftId: i, Language: t }), s = (r = e == null ? void 0 : e.Response) == null ? void 0 : r.Language;
  return {
    name: (s == null ? void 0 : s.Name) || "",
    description: (s == null ? void 0 : s.Desc) || ""
  };
}
async function je(i, t, e, s) {
  await g(d.setGiftLanguage, {
    GiftId: i,
    Language: t,
    Name: e,
    Desc: s || ""
  });
}
async function Ve(i, t) {
  await g(d.delGiftLanguage, { GiftId: i, Language: t });
}
async function ke(i) {
  await g(d.addGiftCategory, {
    Category: {
      CategoryId: i.categoryId,
      CategoryName: i.name || i.defaultName || "",
      CategoryDesc: i.description || i.defaultDesc || ""
    }
  });
}
async function Be(i) {
  await g(d.editGiftCategory, {
    Category: {
      CategoryId: i.categoryId,
      CategoryName: i.name || i.defaultName || "",
      CategoryDesc: i.description || i.defaultDesc || ""
    }
  });
}
async function We(i) {
  await g(d.delGiftCategory, { CategoryId: i });
}
async function $e(i, t) {
  var r;
  const e = await g(d.getGiftCategoryLanguage, { CategoryId: i, Language: t }), s = (r = e == null ? void 0 : e.Response) == null ? void 0 : r.Language;
  return {
    name: (s == null ? void 0 : s.CategoryName) || "",
    description: (s == null ? void 0 : s.CategoryDesc) || ""
  };
}
async function Ke(i, t, e, s) {
  await g(d.setGiftCategoryLanguage, {
    CategoryId: i,
    Language: t,
    CategoryName: e,
    CategoryDesc: s || ""
  });
}
async function Ye(i, t) {
  await g(d.delGiftCategoryLanguage, { CategoryId: i, Language: t });
}
async function He(i, t) {
  await g(d.addGiftCategoryRelations, { CategoryId: i, GiftIdList: t });
}
async function Xe(i, t) {
  await g(d.delGiftCategoryRelations, { CategoryId: i, GiftIdList: t });
}
class ps {
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
      const e = await Ne(t == null ? void 0 : t.language);
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
      const e = await Pe(t);
      return this.setLoading("giftAction", !1), e;
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(s), s;
    }
  }
  async updateGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await xe(t), this.setLoading("giftAction", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(s), s;
    }
  }
  async deleteGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await Ge(t), this.giftList = this.giftList.filter((e) => e.id !== t), this.setLoading("giftAction", !1), this.notifyStateChange();
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(s), s;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await ke(t), this.setLoading("categoryAction", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(s), s;
    }
  }
  async updateGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await Be(t), this.setLoading("categoryAction", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(s), s;
    }
  }
  async deleteGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await We(t), this.giftCategoryList = this.giftCategoryList.filter((e) => e.id !== t), this.setLoading("categoryAction", !1), this.notifyStateChange();
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
        await He(r, [e]);
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
        await Xe(r, [e]);
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
      const e = await Fe(t.giftId, t.language);
      return this.setLoading("giftLanguage", !1), e;
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(s), s;
    }
  }
  async setGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await je(t.giftId, t.language, t.name, t.description), this.setLoading("giftLanguage", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(s), s;
    }
  }
  async deleteGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await Ve(t.giftId, t.language), this.setLoading("giftLanguage", !1);
    } catch (e) {
      const s = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(s), s;
    }
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(t, e) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      const s = await $e(t, e);
      return this.setLoading("giftCategoryLanguage", !1), s;
    } catch (s) {
      const r = s instanceof Error ? s : new Error(String(s));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
  async setGiftCategoryLanguage(t, e, s, r) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await Ke(t, e, s, r), this.setLoading("giftCategoryLanguage", !1);
    } catch (n) {
      const a = n instanceof Error ? n : new Error(String(n));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(a), a;
    }
  }
  async deleteGiftCategoryLanguage(t, e) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await Ye(t, e), this.setLoading("giftCategoryLanguage", !1);
    } catch (s) {
      const r = s instanceof Error ? s : new Error(String(s));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
}
const Ls = R.mutedList, Is = R.bannedList, qe = 600, ze = 86400, Ct = (i) => Array.isArray(i) ? i.filter((t) => !!t && typeof t == "object") : [], B = (i, ...t) => {
  const e = t.map((s) => i[s]).find((s) => typeof s == "string" && s.length > 0);
  return typeof e == "string" ? e : "";
}, St = (i, ...t) => {
  const e = t.map((r) => i[r]).find((r) => r != null), s = Number(e || 0);
  return Number.isFinite(s) ? s : 0;
}, x = (i) => i.memberAccounts || i.userIds || [];
async function Es(i) {
  var s;
  const t = await Qt(i);
  return Ct(((s = t.Response) == null ? void 0 : s.MutedAccountList) || t.MutedAccountList).map((r) => ({
    userId: B(r, "Member_Account", "userId", "UserID"),
    endTime: St(r, "MutedUntil", "endTime")
  })).filter((r) => r.userId);
}
function Cs(i, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((s) => s.userId === i && s.endTime > e);
}
async function Ss(i) {
  var s;
  const t = await te(i);
  return Ct(((s = t.Response) == null ? void 0 : s.BannedAccountList) || t.BannedAccountList).map((r) => ({
    userId: B(r, "Member_Account", "userId", "UserID"),
    endTime: St(r, "BannedUntil", "endTime"),
    reason: B(r, "Reason", "reason") || void 0
  })).filter((r) => r.userId);
}
function vs(i, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((s) => s.userId === i && s.endTime > e);
}
async function bs(i) {
  const { liveId: t } = i, e = x(i), s = i.muteTime ?? i.duration ?? qe;
  await qt(t, e, s);
}
async function Ts(i) {
  const { liveId: t } = i, e = x(i);
  await zt(t, e);
}
async function _s(i) {
  const { liveId: t, reason: e = "" } = i, s = x(i), r = i.banTime ?? i.duration ?? ze;
  await Jt(t, s, r, e);
}
async function ws(i) {
  const { liveId: t } = i, e = x(i);
  await Zt(t, e);
}
function vt(i) {
  return `${i}_robot`;
}
function As(i, t) {
  return i === vt(t);
}
function Ms(i, t) {
  const e = vt(t);
  return i.filter((s) => s !== e);
}
function Rs(i) {
  const t = Math.floor(Date.now() / 1e3), e = i - t;
  if (e <= 0)
    return "已过期";
  const s = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
  return s > 0 ? `${s}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function Ds(i) {
  const t = Math.floor(Date.now() / 1e3);
  return i <= t;
}
const Je = {
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
}, Ze = "https://web.sdk.qcloud.com/im/assets/emoji-plugin/", Us = (i) => {
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
      const n = e.slice(0, r + 1), a = Je[n];
      if (a) {
        t.push({
          type: "emoji",
          key: n,
          src: `${Ze}${a}`
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
function Os(i, t) {
  const e = Math.max(1, t), s = Math.min(Math.max(1, i), e);
  if (e <= 7)
    return Array.from({ length: e }, (a, o) => o + 1);
  const r = [], n = (a) => {
    r[r.length - 1] !== a && r.push(a);
  };
  n(1), s > 4 && n("...");
  for (let a = Math.max(2, s - 2); a <= Math.min(e - 1, s + 2); a++)
    n(a);
  return s < e - 3 && n("..."), n(e), r;
}
class Qe {
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
    const a = `${this.config.prefix ? `[${this.config.prefix}]` : ""}[${e}] ${s}`;
    switch (t) {
      case "debug":
        console.debug(a, r);
        break;
      case "info":
        console.info(a, r);
        break;
      case "warn":
        console.warn(a, r);
        break;
      case "error":
        console.error(a, r);
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
new Qe({ prefix: "LiveKit" });
const Ns = (i, t = null) => {
  try {
    return JSON.parse(i);
  } catch (e) {
    return console.warn("Failed to parse JSON:", i, e), t;
  }
}, Ps = (i, t) => {
  let e = null;
  return (...s) => {
    e !== null && clearTimeout(e), e = window.setTimeout(() => {
      i(...s), e = null;
    }, t);
  };
}, xs = (i, t = {}) => {
  const e = i;
  e != null && e.requestFullscreen ? e == null || e.requestFullscreen(t) : e != null && e.mozRequestFullScreen ? e == null || e.mozRequestFullScreen(t) : e != null && e.webkitRequestFullScreen ? e == null || e.webkitRequestFullScreen(t) : e != null && e.msRequestFullscreen && (e == null || e.msRequestFullscreen(t));
}, Gs = () => {
  if (!(document != null && document.fullscreenElement) && !(document != null && document.webkitFullscreenElement) && !(document != null && document.mozFullScreenElement))
    return;
  const i = document;
  i != null && i.exitFullscreen ? i == null || i.exitFullscreen() : i != null && i.msExitFullscreen ? i == null || i.msExitFullscreen() : i != null && i.mozCancelFullScreen ? i == null || i.mozCancelFullScreen() : i != null && i.webkitExitFullscreen && (i == null || i.webkitExitFullscreen());
}, q = async (i) => {
  var e;
  if ((e = navigator.clipboard) != null && e.writeText)
    return navigator.clipboard.writeText(i);
  const t = document.createElement("textarea");
  t.value = i, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function Fs(i) {
  return `live_obs_${i}`;
}
class W extends Error {
  constructor(t, e, s) {
    const r = e === "url-validation" ? `${t}不可用` : `${t}上传失败`, n = s ?? {}, a = n.ErrorInfo || n.message || (e === "url-validation" ? "请检查 URL 是否正确" : "网络错误");
    super(`${r}: ${a}`), this.name = "ImageUploadResolveError", this.label = t, this.type = e, this.cause = s;
  }
}
async function ti(i) {
  const { handle: t, hasPendingFile: e, fallbackUrl: s, label: r } = i;
  if ((t == null ? void 0 : t.isUrlInputMode) ?? !0)
    try {
      const a = await (t == null ? void 0 : t.ensureUrlValidated());
      return a ?? "";
    } catch (a) {
      throw new W(r, "url-validation", a);
    }
  else if (e && t)
    try {
      return await t.uploadPendingFile() || "";
    } catch (a) {
      throw new W(r, "upload", a);
    }
  else
    return s.trim();
}
async function js(i) {
  return Promise.all(i.map(ti));
}
function Vs(i, t = "图片") {
  if (i instanceof W)
    return i.message;
  const e = i ?? {}, s = e.ErrorInfo || e.message || "未知错误";
  return `${t}处理失败: ${s}`;
}
const ei = {
  0: "操作成功",
  [-1]: "暂未归类的通用错误",
  [-2]: "请求被限频，请稍后重试",
  [-3]: "重复操作",
  [-1e3]: "未找到 SDKAppID，请在控制台确认应用信息",
  [-1001]: "传入的参数不合法，请检查入参",
  [-1002]: "未登录，请先登录",
  [-1003]: "获取权限失败，当前未授权音/视频权限，请查看是否开启设备权限",
  [-1004]: "该功能需要开通额外的套餐，请在控制台按需开通"
}, ii = {
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
}, si = {
  [-2101]: "需要进房后才可使用此功能",
  [-2102]: "房主不支持退房操作。会议房间可以先转让房主再退房，直播房间房主只能解散房间",
  [-2103]: "当前房间类型下不支持该操作",
  [-2105]: "创建房间 ID 非法，自定义 ID 必须为可打印 ASCII 字符（0x20-0x7e），最长 48 个字节",
  [-2107]: "房间名称非法，名称最长 30 字节，字符编码必须是 UTF-8",
  [-2108]: "当前用户已在别的房间内，请先退出当前房间"
}, ri = {
  [-2200]: "未找到该用户"
}, ni = {
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
}, ai = {
  [-4001]: "当前房间不支持预加载"
}, oi = {
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
}, ci = {
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
}, li = {
  ...ei,
  ...ii,
  ...si,
  ...ri,
  ...ni,
  ...ai,
  ...oi,
  ...ci
};
function it(i, t, e) {
  return t || (li[i] ?? e ?? `未知错误（错误码: ${i}）`);
}
function ks(i) {
  return i === 0;
}
function Bs(i) {
  return i < 0;
}
function Ws(i) {
  return i >= 6e4 && i < 7e4;
}
function $s(i) {
  return i >= 1e5;
}
function Ks(i) {
  return i === 0 ? "success" : i < 0 ? "client" : i >= 6e4 && i < 7e4 ? "rest_api" : i >= 1e5 ? "server" : "unknown";
}
async function ui() {
  return (await yt({
    method: "GET",
    url: "/upload/config"
  })).data;
}
async function Ys() {
  try {
    return !!(await ui()).enabled;
  } catch {
    return !1;
  }
}
async function Hs(i, t = "cover", e) {
  const s = new FormData();
  s.append("file", i), s.append("type", t);
  const r = await yt({
    method: "POST",
    url: "/upload/image",
    data: s,
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 6e4,
    onUploadProgress: (n) => {
      if (e && n.total) {
        const a = Math.round(n.loaded * 100 / n.total);
        e(a);
      }
    }
  });
  if (r.code !== 0)
    throw new Error(r.message || "上传失败");
  return r.data;
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
], st = [
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
], gi = [
  ...$,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function P(i) {
  return !!i && typeof i == "object" && !Array.isArray(i);
}
function bt(i) {
  return typeof i == "string" ? i.trim() : "";
}
function A(i, t) {
  if (!i) return "";
  for (const e of t) {
    const s = bt(i[e]);
    if (s)
      return s;
  }
  return "";
}
function b(i) {
  if (P(i))
    return i;
  if (typeof i == "string")
    try {
      const t = JSON.parse(i);
      return P(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function Tt(i) {
  return [
    b(i.liveOwner),
    b(i.anchor),
    b(i.owner),
    b(i.host),
    b(i.userInfo),
    b(i.sender)
  ];
}
function Xs(i) {
  const t = (i || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function qs(i) {
  if (!P(i))
    return "";
  const t = A(i, $);
  if (t)
    return t;
  for (const s of Tt(i)) {
    const r = A(s, $);
    if (r)
      return r;
  }
  const e = b(
    i.CustomINFO ?? i.customInfo ?? i.customData ?? i.metadata
  );
  return A(e, gi);
}
function zs(i, t = "") {
  if (typeof i == "string")
    return i.trim() || t;
  if (!P(i))
    return t;
  const e = A(i, st);
  if (e)
    return e;
  const s = bt(i.liveOwner);
  if (s)
    return s;
  for (const r of Tt(i)) {
    const n = A(r, st);
    if (n)
      return n;
  }
  return t;
}
const di = "live_", Js = 43, Zs = 100, fi = "VideoDynamicGrid9Seats", hi = 8, O = 9 / 16, _t = 16 / 9, E = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, mi = [
  { value: "VideoDynamicGrid9Seats", labelKey: c.DYNAMIC_GRID_LAYOUT, descKey: c.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: c.FLOATING_WINDOW_LAYOUT, descKey: c.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: c.FIXED_GRID_LAYOUT, descKey: c.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: c.FIXED_WINDOW_LAYOUT, descKey: c.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: c.LANDSCAPE_BROADCASTING, descKey: c.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function Qs() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: fi,
    maxSeatCount: hi
  };
}
function tr() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function yi(i) {
  return `${di}${i}`;
}
function pi(i) {
  return i === "AudioSalon" || i === "Karaoke";
}
function Li(i) {
  return mi.find((t) => t.value === i);
}
function er(i) {
  var t;
  return ((t = Li(i)) == null ? void 0 : t.orientation) === "landscape" ? _t : O;
}
function ir(i) {
  return !i.key.trim() && !!i.value.trim();
}
function Ii(i) {
  const t = {};
  for (const e of i) {
    const s = e.key.trim();
    s && (t[s] = e.value);
  }
  return t;
}
function sr(i) {
  const t = {};
  let e = 0;
  for (const r of i) {
    const n = r.key.trim();
    if (!n) continue;
    const a = T(n);
    if (a > E.maxKeyBytes)
      return { type: "key-too-long", key: n, max: E.maxKeyBytes, current: a };
    const o = T(r.value);
    if (o > E.maxValueBytes)
      return { type: "value-too-long", key: n, max: E.maxValueBytes, current: o };
    e += o, t[n] = r.value;
  }
  const s = Object.keys(t).length;
  return s > E.maxCount ? { type: "max-count", max: E.maxCount, current: s } : e > E.maxTotalValueBytes ? { type: "total-value-too-long", max: E.maxTotalValueBytes, current: e } : null;
}
function rr(i, t) {
  const e = new Set(Object.keys(t));
  return i.filter((s) => !e.has(s));
}
function nr(i) {
  const { formData: t, coverUrl: e, customInfos: s, useObsStreaming: r } = i, n = Ii(s), a = {
    liveId: yi(t.anchorId),
    anchorId: t.anchorId,
    title: t.liveName,
    seatTemplate: t.seatTemplate
  };
  return e && (a.coverUrl = e), pi(t.seatTemplate) && (a.maxSeatCount = t.maxSeatCount), Object.keys(n).length > 0 && (a.customInfo = n), r && (a.useObsStreaming = !0), a;
}
function Ei(i) {
  if (!i) return [];
  if (typeof i == "string")
    try {
      return Ei(JSON.parse(i));
    } catch {
      return [];
    }
  return typeof i != "object" ? [] : Object.entries(i).map(([t, e]) => ({
    key: t,
    value: String(e)
  }));
}
function ar(i) {
  return new Promise((t) => {
    if (!i) {
      t(O);
      return;
    }
    const e = new Image();
    e.crossOrigin = "anonymous", e.onload = () => {
      const s = e.naturalWidth / e.naturalHeight;
      t(s > 1 ? _t : O);
    }, e.onerror = () => t(O), e.src = i;
  });
}
const Ci = 70102;
function wt(i) {
  return `live_obs_${i}`;
}
function Si(i) {
  const t = /* @__PURE__ */ new Set();
  return i == null || i.forEach((e) => {
    e.Member_Account && t.add(e.Member_Account);
  }), t;
}
function At(i) {
  return i || null;
}
async function K(i, t) {
  const [e, s] = await Promise.all([
    ee(i).then((r) => {
      var n;
      return ((n = r.Response) == null ? void 0 : n.RobotList_Account) || [];
    }).catch(() => []),
    ie(i).then((r) => {
      var n;
      return Si((n = r.Response) == null ? void 0 : n.SeatList);
    }).catch(() => /* @__PURE__ */ new Set())
  ]);
  return {
    hasRobot: e.includes(t),
    onSeat: s.has(t)
  };
}
async function or(i) {
  const { liveId: t, anchorId: e, onStatusChange: s, messages: r = {} } = i, n = wt(e), a = r.getStreamInfoFailed || "Get Stream Info Failed";
  let o = null, l = "";
  try {
    const u = await X(t, n);
    o = At(u), o || (l = a);
  } catch (u) {
    l = (u instanceof Error ? u.message : "") || a;
  }
  try {
    const { hasRobot: u, onSeat: f } = await K(t, n);
    let L = f;
    if (!u) {
      s == null || s("creating");
      const h = await ne(n, `OBS Robot ${n}`);
      if (h.ErrorCode !== 0 && h.Error !== 0 && h.ErrorCode !== Ci)
        throw new Error(h.ErrorInfo || r.importAccountFailed || "Import Account Failed");
      const _ = await re(t, [n]);
      if (_.ErrorCode !== 0)
        throw new Error(_.ErrorInfo || r.addRobotFailed || "Add Robot Failed");
      L = (await K(t, n)).onSeat;
    }
    if (!L) {
      s == null || s("seating");
      const h = await se(t, n);
      if (h.ErrorCode !== 0)
        throw new Error(h.ErrorInfo || r.pickSeatFailed || "Pick Seat Failed");
    }
    return s == null || s("ready"), {
      robotId: n,
      streamInfo: o,
      streamInfoError: l,
      setupError: "",
      status: "ready",
      configuredSuccessfully: !0
    };
  } catch (u) {
    console.error("OBS setup failed:", u);
    const f = (u instanceof Error ? u.message : "") || r.setupFailed || "OBS Setup Failed";
    return s == null || s("error"), {
      robotId: n,
      streamInfo: o,
      streamInfoError: l,
      setupError: f,
      status: "error",
      configuredSuccessfully: !1
    };
  }
}
async function vi(i) {
  const { liveId: t, anchorId: e, getStreamInfoFailedMessage: s = "Get Stream Info Failed" } = i, r = wt(e);
  try {
    const { hasRobot: n, onSeat: a } = await K(t, r);
    if (!n || !a)
      return {
        robotId: r,
        hasRobot: n,
        onSeat: a,
        streamInfo: null,
        streamInfoError: "",
        status: "none",
        errorMessage: ""
      };
    try {
      const o = At(await X(t, r));
      return {
        robotId: r,
        hasRobot: n,
        onSeat: a,
        streamInfo: o,
        streamInfoError: o ? "" : s,
        status: "ready",
        errorMessage: ""
      };
    } catch (o) {
      return {
        robotId: r,
        hasRobot: n,
        onSeat: a,
        streamInfo: null,
        streamInfoError: (o instanceof Error ? o.message : "") || s,
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
const Mt = R.moderation, bi = 10;
async function cr(i) {
  const {
    liveId: t,
    pageNum: e,
    pageSize: s = Mt,
    minutes: r = bi,
    violationOnly: n = !0
  } = i, a = await kt({
    liveId: t,
    pageNum: e,
    pageSize: s,
    minutes: r,
    violationOnly: n
  }), o = await Bt(a.list), l = await Wt();
  return {
    list: o,
    total: Math.max(0, a.total - l),
    currentPage: e
  };
}
async function lr(i) {
  await Vt(i);
}
function ur(i, t, e, s = Mt) {
  const r = Math.max(0, t - e), n = Math.max(1, Math.ceil(r / s));
  return Math.min(i, n);
}
function gr(i, t) {
  return i.includes(t) ? i.filter((e) => e !== t) : [...i, t];
}
function dr(i, t) {
  if (t.length > 0 && t.every((s) => i.includes(s)))
    return i.filter((s) => !t.includes(s));
  {
    const s = new Set(i);
    return t.forEach((r) => s.add(r)), Array.from(s);
  }
}
function fr(i, t) {
  return i.filter((e) => t.includes(e));
}
function hr(i, t) {
  return t.length === 0 ? !1 : t.every((e) => i.includes(e));
}
function mr(i) {
  return {
    normal: c.NORMAL,
    porn: c.PORN,
    sensitive: c.SENSITIVE,
    political: c.POLITICAL,
    advertising: c.ADVERTISING,
    abuse: c.ABUSE,
    illegal: c.ILLEGAL,
    composite: c.COMPOSITE,
    violence: c.VIOLENCE,
    sexy: c.SEXY,
    unknown: c.UNKNOWN
  }[i] || c.UNKNOWN;
}
function yr(i) {
  const t = new Date(i), e = String(t.getMonth() + 1).padStart(2, "0"), s = String(t.getDate()).padStart(2, "0"), r = String(t.getHours()).padStart(2, "0"), n = String(t.getMinutes()).padStart(2, "0"), a = String(t.getSeconds()).padStart(2, "0");
  return `${e}-${s} ${r}:${n}:${a}`;
}
const Y = /* @__PURE__ */ new Map();
function G(i, t) {
  if (typeof document > "u") return 0;
  const e = `${i}:${t}`, s = Y.get(e);
  if (s !== void 0) return s;
  const r = document.createElement("span");
  r.className = i, i.includes("live-card-tag-overlay") && !i.includes("live-card-tag-more") ? r.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${t}` : r.textContent = t, r.style.visibility = "hidden", r.style.position = "absolute", r.style.left = "-9999px", r.style.top = "-9999px", r.style.pointerEvents = "none", document.body.appendChild(r);
  const n = r.getBoundingClientRect().width;
  return document.body.removeChild(r), Y.set(e, n), n;
}
function Ti() {
  Y.clear();
}
function Rt(i) {
  const t = i.roomIdText ?? i.liveIdText ?? "", {
    containerWidth: e,
    tagTexts: s,
    idLeftOffset: r = 6,
    tagsRightOffset: n = 8,
    tagGap: a = 6,
    safeGap: o = 12,
    minVisibleTags: l = 2,
    maxVisibleTags: u = 99
  } = i, L = G("live-id-badge", t), h = r + L, _ = e - n, C = s.map(
    (m) => G("live-card-tag-overlay", m)
  ), D = G("live-card-tag-overlay live-card-tag-more", "...");
  let S = 0, I = 0;
  for (let m = 0; m < C.length; m++) {
    const y = C[m], z = C.length - m - 1, xt = z > 0 ? D : 0, J = I > 0 ? a : 0, Gt = S + J + y + (z > 0 ? a + xt : 0), Z = _ - Gt, Ft = Math.max(60, Z - r - o);
    if (L > Ft || Z < h + o)
      break;
    S += J + y, I++;
  }
  if (C.length - I > 0 && (S += a + D), s.length >= l && I < l) {
    let m = 0;
    for (let y = 0; y < l; y++)
      m += (y > 0 ? a : 0) + C[y];
    s.length > l && (m += a + D), I = l, S = m;
  }
  if (I > u) {
    I = u;
    let m = 0;
    for (let y = 0; y < u; y++)
      m += (y > 0 ? a : 0) + C[y];
    s.length > u && (m += a + D), S = m;
  }
  const Nt = _ - S, Pt = Math.max(
    60,
    Nt - r - o
  );
  return {
    visibleCount: I,
    showMore: s.length > I,
    idMaxWidth: `${Math.round(Pt)}px`,
    tagsMaxWidth: `${Math.round(S)}px`
  };
}
function pr(i, t, e, s, r) {
  return i.map((n) => {
    const a = t(n), o = e(n);
    return Rt({
      containerWidth: r,
      roomIdText: `${s("Room ID")}: ${a}`,
      tagTexts: o.map((l) => s(l))
    });
  });
}
class Lr {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = t.containerSelector, this.t = t.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(t, e) {
    const s = this.cache.get(t);
    if (s) return s;
    const r = Rt({
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
    this.cache.clear(), Ti();
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
    const e = window.getComputedStyle(t), s = parseFloat(e.gap) || 8, r = e.gridTemplateColumns, n = r.match(/repeat\((\d+)/), a = n ? parseInt(n[1], 10) : r.split(" ").length || 1;
    return (t.clientWidth - s * (a - 1)) / a;
  }
}
const p = {
  sc: { code: "zh-Hans", label: "Simplified Chinese" },
  tc: { code: "zh-Hant", label: "Traditional Chinese" },
  en: { code: "en", label: "English" }
}, rt = {
  "zh-Hans": "sc",
  "zh-Hant": "tc",
  en: "en"
}, Ir = ["sc", "tc", "en"], Er = 20, Cr = 20, Sr = 20, vr = 100, nt = 20, br = 45;
function Dt(i) {
  return new TextEncoder().encode(i).length;
}
function Tr(i, t) {
  if (!i || t <= 0)
    return "";
  let e = "", s = 0;
  for (const r of i) {
    const n = Dt(r);
    if (s + n > t)
      break;
    e += r, s += n;
  }
  return e;
}
function _r(i) {
  if (!i) return "-";
  const t = typeof i == "number" ? i * 1e3 : parseInt(i) * 1e3, e = new Date(t), s = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), n = String(e.getDate()).padStart(2, "0"), a = String(e.getHours()).padStart(2, "0"), o = String(e.getMinutes()).padStart(2, "0"), l = String(e.getSeconds()).padStart(2, "0");
  return `${s}-${r}-${n} ${a}:${o}:${l}`;
}
function wr(i) {
  return p[i];
}
function Ut(i) {
  const t = Object.entries(p).find(([e, s]) => s.code === i);
  return t ? t[0] : void 0;
}
function Ar(i) {
  const t = Ut(i);
  return t ? p[t].label : i;
}
function Mr(i) {
  return typeof i == "string" ? i : typeof i == "number" ? String(i) : i.Language || i.language || "";
}
function Ot() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function _i(i, t) {
  return i == null ? void 0 : i.find((e) => e.language === t);
}
function wi(i) {
  const t = Ot(), e = [];
  if (!i || i.length === 0)
    return { config: t, langsToFetch: e };
  for (const s of i) {
    const r = s.language, n = Ut(r);
    n && (s.name || s.description ? t[n] = { name: s.name || "", description: s.description || "" } : e.push(n));
  }
  return { config: t, langsToFetch: e };
}
function Ai(i, t) {
  const e = p[t].code, s = _i(i, e);
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
function Mi(i) {
  return i.trim().toLowerCase();
}
function at(i, t) {
  return Dt(i) > t;
}
function U(i, t) {
  const e = Mi(t);
  return e ? i.filter((s) => {
    const r = (s.id || "").toLowerCase(), n = (s.name || "").toLowerCase(), a = (s.description || "").toLowerCase(), o = (s.categories || []).join(",").toLowerCase();
    return r.includes(e) || n.includes(e) || a.includes(e) || o.includes(e);
  }) : i;
}
function ot(i) {
  const t = i.categories.map((r) => {
    const n = j(r.languageList, "categoryName", "categoryDescription");
    return {
      ...r,
      name: (n == null ? void 0 : n.name) || r.defaultName || r.name,
      description: (n == null ? void 0 : n.description) || r.defaultDescription || r.description
    };
  }), e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    e.set(String(r.id), r.name);
  }), { gifts: i.gifts.map((r) => {
    const n = j(r.languageList, "name", "description"), a = (r.categoryIds || []).map((o) => e.get(String(o)) || o);
    return {
      ...r,
      name: (n == null ? void 0 : n.name) || r.defaultName || r.name,
      description: (n == null ? void 0 : n.description) || r.defaultDescription || r.description,
      categories: a
    };
  }), categories: t };
}
const Rr = 10, Dr = 20, Ur = 20, Or = 60, H = "gift_categories_cache";
function Ri(i) {
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
function Di(i, t = sessionStorage) {
  if (i.length !== 0)
    try {
      t.setItem(H, JSON.stringify(i));
    } catch {
    }
}
function Ui(i = sessionStorage) {
  try {
    const t = i.getItem(H);
    return t ? (i.removeItem(H), Ri(JSON.parse(t))) : [];
  } catch {
    return [];
  }
}
function Oi(i) {
  return i.map((t) => {
    const e = j(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: (e == null ? void 0 : e.name) || t.defaultName || t.name,
      description: (e == null ? void 0 : e.description) || t.defaultDescription || t.description
    };
  });
}
const Nr = {
  viewBox: "0 0 24 24",
  path: "M11 6.5L5.5 12L11 17.5M6.75 12H19.75",
  strokeWidth: 2,
  strokeLinecap: "square"
}, Pr = {
  viewBox: "0 0 24 24",
  path: "M12 11V17M12 7V7.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
  strokeWidth: 2
}, xr = {
  viewBox: "0 0 24 24",
  path: "M6 9L12 15L18 9",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
class Gr {
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
    const e = Ie(this.currentUrl || void 0, t);
    return this.currentUrl = e, e;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (Et(this.currentUrl), this.currentUrl = "");
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
const v = {
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
function Fr(i) {
  const t = [
    { key: "liveId", i18nKey: c.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: v.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: c.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: v.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: c.COVER_IMAGE, className: "col-cover", width: v.COVER_WIDTH },
    { key: "anchor", i18nKey: c.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: v.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: c.CREATE_TIME, className: "live-list-col-time", width: v.CREATED_AT_WIDTH }
  ];
  return i.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: v.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: c.ACTIONS, className: "live-list-col-action", maxWidth: v.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function jr(i) {
  const { live: t, icons: e, t: s, onEnter: r, onDetail: n, onEdit: a, onDelete: o } = i;
  return [
    { key: "enter", label: s(c.ENTER_LIVE), title: s(c.ENTER_LIVE), icon: e.enter, onClick: () => r(t.liveId) },
    { key: "detail", label: s(c.LIVE_DETAILS), title: s(c.LIVE_DETAILS), icon: e.detail, onClick: () => n(t) },
    { key: "edit", label: s(c.EDIT), title: s(c.EDIT), icon: e.edit, onClick: () => a(t) },
    { key: "delete", label: s(c.DISSOLVE), title: s(c.DISSOLVE), icon: e.delete, danger: !0, onClick: () => o(t) }
  ];
}
async function Ni(i, t) {
  var n;
  const e = ((n = i.anchor) == null ? void 0 : n.userId) || "", s = await vi({
    liveId: i.liveId,
    anchorId: e,
    getStreamInfoFailedMessage: t(c.GET_STREAM_INFO_FAILED)
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
      robotStatusText: t(c.OBS_READY),
      streamInfo: s.streamInfo
    },
    toastError: s.streamInfoError || void 0
  } : s.status === "none" ? {
    snapshot: {
      ...r,
      robotStatus: "none",
      robotStatusText: t(c.OBS_SETUP_FAILED)
    }
  } : {
    snapshot: {
      ...r,
      robotStatus: "error",
      robotStatusText: t(c.REQUEST_FAILED, {
        error: s.errorMessage || t(c.NETWORK_ERROR)
      })
    }
  };
}
const ct = {
  visible: !1,
  live: null,
  robotId: "",
  streamInfo: null,
  robotStatus: "checking",
  robotStatusText: "",
  actionLoading: ""
}, lt = {
  visible: !1,
  title: "",
  content: "",
  liveId: ""
};
class Vr {
  constructor(t) {
    this.opts = t, this.state = {
      lives: [],
      loading: !1,
      refreshing: !1,
      currentPage: 1,
      hasMoreData: !0,
      searchInput: "",
      obsModal: { ...ct },
      confirmDialog: { ...lt },
      isCreateModalVisible: !1,
      isEditModalVisible: !1,
      editingLive: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.pageCursors = N(), this.destroyed = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
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
    const t = we();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await ve({
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
      const s = this.opts.t(c.LOAD_LIVE_LIST_FAILED);
      e instanceof et ? this.opts.toast.error(it(e.errorCode, e.errorInfo, s)) : this.opts.toast.error(s);
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
    be({
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
    return Ae(this.state.searchInput, Se);
  }
  async search() {
    const t = this.state.searchInput.trim();
    if (t) {
      if (this.isSearchInputTooLong()) {
        this.opts.toast.error(this.opts.t(c.INPUT_TOO_LONG));
        return;
      }
      this.setState({ loading: !0 });
      try {
        const e = await Me(t);
        e ? (this.setState({
          lives: [e],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.success(this.opts.t(c.SEARCH_SUCCESS))) : (this.setState({
          lives: [],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.error(this.opts.t(c.LIVE_NOT_FOUND)));
      } catch (e) {
        if (console.error("搜索直播失败:", e), e instanceof et)
          this.opts.toast.error(it(
            e.errorCode,
            e.errorInfo,
            this.opts.t(c.LIVE_NOT_FOUND)
          ));
        else {
          const s = (e == null ? void 0 : e.message) || this.opts.t(c.NETWORK_ERROR);
          this.opts.toast.error(this.opts.t(c.SEARCH_FAILED, { error: s }));
        }
      } finally {
        this.setState({ loading: !1 });
      }
    }
  }
  async clearSearch() {
    this.pageCursors = N(), this.setState({
      searchInput: "",
      currentPage: 1,
      hasMoreData: !0
    }), await this.loadPage(1);
  }
  // -------- 进入直播 --------
  enterLive(t) {
    _e({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await q(t);
    const s = e ?? this.opts.t(c.LIVE_ID);
    this.opts.toast.success(this.opts.t(c.COPY_LABEL_COPIED, { label: s }));
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
        robotStatusText: this.opts.t(c.LOADING),
        actionLoading: "stream"
      }
    });
    const { snapshot: e, toastError: s } = await Ni(t, this.opts.t);
    this.state.obsModal.visible && ((r = this.state.obsModal.live) == null ? void 0 : r.liveId) === t.liveId && this.setState({ obsModal: e }), s && this.opts.toast.error(s);
  }
  closeDetail() {
    this.setState({ obsModal: { ...ct } });
  }
  // -------- 删除确认 --------
  requestDelete(t) {
    this.setState({
      confirmDialog: {
        visible: !0,
        title: this.opts.t(c.DISSOLVE_CONFIRMATION),
        content: this.opts.t(c.DISSOLVE_DESCRIPTION, {
          liveId: t.liveName || this.opts.t(c.UNNAMED_LIVE)
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
        await this.opts.endLive(t), this.opts.toast.success(this.opts.t(c.DISSOLVE_SUCCESS));
        const e = Te({
          currentPage: this.state.currentPage,
          hasMoreData: this.state.hasMoreData,
          livesLength: this.state.lives.length
        });
        await this.loadPage(e);
      } catch (e) {
        console.error("解散直播失败:", e), this.opts.toast.error(this.opts.t(c.DISSOLVE_FAILED));
      } finally {
        this.setState({ confirmDialog: { ...lt } });
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
const Pi = { name: "", description: "" };
class kr {
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
      giftLangConfig: Ot(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...Pi },
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
      const t = await this.opts.actions.fetchGiftList(), e = t.giftCategoryList || [], { gifts: s, categories: r } = ot({
        gifts: t.giftList || [],
        categories: e
      });
      this.setState({
        giftList: s,
        displayList: U(s, this.state.searchInput),
        categoryList: r.length > 0 ? r : this.state.categoryList
      });
    } catch (t) {
      console.error(this.opts.t(c.GET_GIFT_LIST_FAILED), t);
      const e = this.formatError(t, this.opts.t(c.GET_GIFT_LIST_FAILED));
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
    const { gifts: t, categories: e } = ot({
      gifts: this.state.giftList,
      categories: this.state.categoryList
    });
    this.setState({
      giftList: t,
      categoryList: e,
      displayList: U(t, this.state.searchInput)
    });
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    const e = String(t ?? "");
    this.setState({ searchInput: e }), !at(e, nt) && this.setState({ displayList: U(this.state.giftList, e) });
  }
  isSearchInputTooLong() {
    return at(this.state.searchInput, nt);
  }
  /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
  search() {
    const t = this.state.searchInput.trim();
    if (!t) return;
    if (this.isSearchInputTooLong()) {
      this.opts.toast.error(this.opts.t(c.INPUT_TOO_LONG));
      return;
    }
    const e = U(this.state.giftList, this.state.searchInput);
    e.length > 0 ? (this.setState({ displayList: e }), this.opts.toast.success(this.opts.t("Found results", { count: e.length }))) : (this.setState({ displayList: [] }), this.opts.toast.error(this.opts.t("No gift found", { keyword: t })));
  }
  clearSearch() {
    this.setState({ searchInput: "", displayList: this.state.giftList });
  }
  // -------- 导航 / 复制 --------
  goToCategoryManagement() {
    Di(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await q(String(t || "")), this.opts.toast.success(this.opts.t(c.COPY_LABEL_COPIED, { label: this.opts.t(c.GIFT_ID) }));
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
        this.opts.t(this.state.isEdit ? c.GIFT_UPDATED_SUCCESSFULLY : c.GIFT_CREATED_SUCCESSFULLY)
      ), await this.fetchGiftList(), this.setState({ dialogVisible: !1 });
    } catch (s) {
      throw this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
        error: this.extractErrorInfo(s)
      })), s;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openGiftLangConfigDialog(t) {
    const e = this.state.giftList.find((n) => n.id === t), { config: s, langsToFetch: r } = wi(e == null ? void 0 : e.languageList);
    if (this.setState({
      editingId: t,
      giftLangConfig: s,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const n = await Promise.allSettled(
          r.map(async (o) => {
            const l = await this.opts.actions.getGiftLanguage({
              giftId: t,
              language: p[o].code
            });
            return { langKey: o, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const a = { ...this.state.giftLangConfig };
        for (const o of n)
          if (o.status === "fulfilled") {
            const { langKey: l, result: u } = o.value;
            a[l] = { name: u.name || "", description: u.description || "" };
          }
        this.setState({ giftLangConfig: a });
      } catch {
      }
  }
  closeGiftLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    const s = this.state.giftList.find((a) => a.id === t), r = Ai(s == null ? void 0 : s.languageList, e);
    let n = r.form;
    if (r.needsFetch)
      try {
        const a = await this.opts.actions.getGiftLanguage({ giftId: t, language: r.langCode });
        n = { name: a.name || "", description: a.description || "" };
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
          language: p[e].code,
          name: s.name,
          description: s.description
        }), this.opts.toast.success(this.opts.t(c.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchGiftList(), r && this.state.editingLang === e && this.setState({
          giftLangConfig: {
            ...this.state.giftLangConfig,
            [e]: { ...s }
          }
        });
      } catch (n) {
        this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
          error: this.extractErrorInfo(n)
        }));
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftLanguage({ giftId: t, language: p[e].code }), this.opts.toast.success(this.opts.t(c.LANGUAGE_CONFIG_CLEARED)), this.setState({
        giftLangConfig: {
          ...this.state.giftLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchGiftList();
    } catch (s) {
      this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
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
        }), this.opts.toast.success(this.opts.t(c.CATEGORY_ADDED)), await this.fetchGiftList();
      } catch (s) {
        this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
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
        }), this.opts.toast.success(this.opts.t(c.CATEGORY_REMOVED)), await this.fetchGiftList();
      } catch (s) {
        this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
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
        await this.opts.actions.deleteGift(t.id), this.opts.toast.success(this.opts.t(c.GIFT_DELETED_SUCCESSFULLY)), await this.fetchGiftList();
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(c.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return (e == null ? void 0 : e.ErrorInfo) || (e == null ? void 0 : e.message) || this.opts.t(c.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const s = t;
    return s != null && s.ErrorInfo ? `${e}: ${s.ErrorInfo}` : s != null && s.message ? `${e}: ${s.message}` : e;
  }
}
const ut = {
  categoryId: "",
  name: "",
  description: ""
}, gt = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, dt = { name: "", description: "" };
class Br {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      categoryList: [],
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      formData: { ...ut },
      langConfigVisible: !1,
      categoryLangConfig: ft(gt),
      langEditVisible: !1,
      editingLang: null,
      editingCategoryForLang: "",
      langEditForm: { ...dt },
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
      const e = Ui();
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
      console.error(this.opts.t(c.GET_CATEGORY_LIST_FAILED), e), this.opts.toast.error(this.formatError(e, this.opts.t(c.GET_CATEGORY_LIST_FAILED))), this.setState({ categoryList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    this.state.categoryList.length !== 0 && this.setState({ categoryList: Oi(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await q(String(t || "")), this.opts.toast.success(
      this.opts.t(c.COPY_LABEL_COPIED, { label: this.opts.t(c.CATEGORY_ID) })
    );
  }
  // -------- 新增 / 编辑弹窗 --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      formData: { ...ut },
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
      }), this.opts.toast.success(this.opts.t(c.CATEGORY_UPDATED_SUCCESSFULLY))) : (await this.opts.actions.createGiftCategory({
        categoryId: t.categoryId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(c.CATEGORY_CREATED_SUCCESSFULLY))), this.setState({ dialogVisible: !1 }), await this.fetchCategoryList(!1);
    } catch (e) {
      throw this.opts.toast.error(
        this.opts.t(c.OPERATION_FAILED, { error: this.extractErrorInfo(e) })
      ), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openLangConfigDialog(t) {
    const e = this.state.categoryList.find((n) => n.id === t), s = ft(gt), r = [];
    if (e != null && e.languageList && e.languageList.length > 0)
      for (const n of e.languageList) {
        const a = F(n);
        a.langKey && (a.name || a.description ? s[a.langKey] = { name: a.name, description: a.description } : r.push(a.langKey));
      }
    if (this.setState({
      editingId: t,
      categoryLangConfig: s,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const n = await Promise.allSettled(
          r.map(async (o) => {
            const l = await this.opts.actions.getGiftCategoryLanguage(
              t,
              p[o].code
            );
            return { langKey: o, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const a = { ...this.state.categoryLangConfig };
        for (const o of n)
          if (o.status === "fulfilled") {
            const { langKey: l, result: u } = o.value;
            a[l] = { name: u.name || "", description: u.description || "" };
          }
        this.setState({ categoryLangConfig: a });
      } catch {
      }
  }
  closeLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    var o;
    const s = this.state.categoryList.find((l) => l.id === t), r = p[e].code, n = (o = s == null ? void 0 : s.languageList) == null ? void 0 : o.find((l) => F(l).langCode === r);
    let a = { ...dt };
    if (n) {
      const l = F(n);
      if (l.name || l.description)
        a = { name: l.name, description: l.description };
      else
        try {
          const u = await this.opts.actions.getGiftCategoryLanguage(t, r);
          a = { name: u.name || "", description: u.description || "" };
        } catch {
        }
    }
    this.setState({
      editingCategoryForLang: t,
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
    const { editingCategoryForLang: t, editingLang: e, langEditForm: s, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        s.name && (await this.opts.actions.setGiftCategoryLanguage(
          t,
          p[e].code,
          s.name,
          s.description
        ), this.opts.toast.success(this.opts.t(c.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchCategoryList(!1), r && this.state.editingId === t && this.state.editingLang === e && this.setState({
          categoryLangConfig: {
            ...this.state.categoryLangConfig,
            [e]: { ...s }
          }
        });
      } catch (n) {
        this.opts.toast.error(
          this.opts.t(c.OPERATION_FAILED, { error: this.extractErrorInfo(n) })
        );
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftCategoryLanguage(t, p[e].code), this.opts.toast.success(this.opts.t(c.LANGUAGE_CONFIG_CLEARED)), this.setState({
        categoryLangConfig: {
          ...this.state.categoryLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchCategoryList(!1);
    } catch (s) {
      this.opts.toast.error(
        this.opts.t(c.OPERATION_FAILED, { error: this.extractErrorInfo(s) })
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
        await this.opts.actions.deleteGiftCategory(t.id), this.opts.toast.success(this.opts.t(c.CATEGORY_DELETED_SUCCESSFULLY)), await this.fetchCategoryList(!1);
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(c.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return (e == null ? void 0 : e.ErrorInfo) || (e == null ? void 0 : e.message) || this.opts.t(c.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const s = t;
    return s != null && s.ErrorInfo ? `${e}: ${s.ErrorInfo}` : s != null && s.message ? `${e}: ${s.message}` : e;
  }
}
function ft(i) {
  return {
    sc: { ...i.sc },
    tc: { ...i.tc },
    en: { ...i.en }
  };
}
function F(i) {
  if (typeof i == "string")
    return { langCode: i, langKey: rt[i], name: "", description: "" };
  const t = i.language || "";
  return {
    langCode: t,
    langKey: t ? rt[t] : void 0,
    name: i.categoryName || "",
    description: i.categoryDescription || ""
  };
}
export {
  br as $,
  Js as A,
  Is as B,
  Or as C,
  ze as D,
  Ze as E,
  p as F,
  H as G,
  di as H,
  Pr as I,
  k as J,
  Ce as K,
  _t as L,
  V as M,
  Se as N,
  Zs as O,
  et as P,
  ys as Q,
  Vr as R,
  Yi as S,
  Rr as T,
  bi as U,
  Mt as V,
  Ls as W,
  rs as X,
  R as Y,
  O as Z,
  Gr as _,
  Nr as a,
  ki as a$,
  mi as a0,
  es as a1,
  _s as a2,
  nr as a3,
  yi as a4,
  jr as a5,
  Ni as a6,
  Os as a7,
  Di as a8,
  us as a9,
  ve as aA,
  Es as aB,
  U as aC,
  ms as aD,
  Ms as aE,
  fr as aF,
  fs as aG,
  yr as aH,
  Rs as aI,
  _r as aJ,
  te as aK,
  T as aL,
  er as aM,
  is as aN,
  rr as aO,
  Ys as aP,
  Ks as aQ,
  it as aR,
  Xs as aS,
  wi as aT,
  Ai as aU,
  Mr as aV,
  wr as aW,
  Ut as aX,
  Ar as aY,
  Fr as aZ,
  Te as a_,
  ur as aa,
  gs as ab,
  cs as ac,
  be as ad,
  It as ae,
  Ti as af,
  Ii as ag,
  Rt as ah,
  pr as ai,
  Ui as aj,
  Ri as ak,
  q as al,
  Ps as am,
  Qs as an,
  tr as ao,
  Ot as ap,
  ns as aq,
  N as ar,
  Le as as,
  ss as at,
  Ei as au,
  lr as av,
  ar as aw,
  Gs as ax,
  Ee as ay,
  Ss as az,
  Lr as b,
  $i as b$,
  mr as b0,
  ce as b1,
  Qt as b2,
  vi as b3,
  Fs as b4,
  os as b5,
  Li as b6,
  Ji as b7,
  ui as b8,
  Vs as b9,
  Oi as bA,
  ot as bB,
  Ie as bC,
  qs as bD,
  zs as bE,
  ti as bF,
  js as bG,
  we as bH,
  Et as bI,
  Ns as bJ,
  _e as bK,
  Me as bL,
  ae as bM,
  Bi as bN,
  le as bO,
  Ki as bP,
  xs as bQ,
  oe as bR,
  or as bS,
  hs as bT,
  Vi as bU,
  ji as bV,
  dr as bW,
  gr as bX,
  Tr as bY,
  ws as bZ,
  Ts as b_,
  zi as ba,
  hr as bb,
  pi as bc,
  vs as bd,
  Bs as be,
  ir as bf,
  Ds as bg,
  at as bh,
  Ae as bi,
  Cs as bj,
  As as bk,
  Ws as bl,
  $s as bm,
  ks as bn,
  Hi as bo,
  fe as bp,
  Xi as bq,
  de as br,
  cr as bs,
  bs as bt,
  Wi as bu,
  Mi as bv,
  $t as bw,
  Us as bx,
  as as by,
  qi as bz,
  Je as c,
  Hs as c0,
  sr as c1,
  ts as c2,
  Qi as c3,
  Zi as c4,
  ye as c5,
  tt as c6,
  ls as c7,
  me as c8,
  he as c9,
  pe as ca,
  Zt as cb,
  Jt as cc,
  Dr as d,
  Yt as e,
  Ur as f,
  w as g,
  xr as h,
  E as i,
  hi as j,
  qe as k,
  fi as l,
  qt as m,
  ds as n,
  Sr as o,
  vr as p,
  Er as q,
  Cr as r,
  nt as s,
  Br as t,
  zt as u,
  kr as v,
  ps as w,
  W as x,
  rt as y,
  Ir as z
};
