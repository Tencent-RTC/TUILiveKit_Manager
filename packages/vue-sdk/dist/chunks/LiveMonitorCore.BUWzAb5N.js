import { g as f, aH as d, aI as L, aJ as p, e as S } from "./main-layout.BHEhJFno.js";
import { aC as y, aA as c, ac as v, aB as u, Y as l, d as C, az as I } from "./en-US.BGpvCrvn.js";
async function U(n, t = 50) {
  return v(`/chat/${n}/messages`, { limit: t });
}
async function _(n, t) {
  const e = y().credentials?.userId || "admin";
  return c(u.sendTextMsg, {
    RoomId: n,
    Sender_Account: e,
    TextContent: t,
    MsgPriority: "Normal"
  });
}
async function M(n, t, e, i) {
  const r = i || y().credentials?.userId || "admin";
  return c(u.sendCustomMsg, {
    RoomId: n,
    Sender_Account: r,
    BusinessId: t,
    Data: e
  });
}
async function P(n, t) {
  return c(u.updateLiveInfo, {
    RoomInfo: {
      RoomId: n,
      IsMessageDisabled: t,
      IsUnlimitedRoomEnabled: !0
    }
  });
}
async function N(n, t, e) {
  return c(u.muteMember, {
    RoomId: n,
    MemberList_Account: [t],
    MuteTime: e || 60
  });
}
async function F(n, t) {
  return c(u.muteMember, {
    RoomId: n,
    MemberList_Account: [t],
    MuteTime: 0
  });
}
async function w(n) {
  return v(`/chat/${n}/mute-status`);
}
async function m(n, t) {
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
  return M(
    n,
    "violation_alert",
    // BusinessId：标识违规警告消息
    JSON.stringify(i)
    // Data：消息内容
  );
}
async function G(n, t, e, i) {
  const r = {
    porn: l.VIOLATION_SUGGESTION_PORN,
    political: l.VIOLATION_SUGGESTION_POLITICAL,
    abuse: l.VIOLATION_SUGGESTION_ABUSE,
    advertising: l.VIOLATION_SUGGESTION_ADVERTISING,
    illegal: l.VIOLATION_SUGGESTION_ILLEGAL,
    sexy: l.VIOLATION_SUGGESTION_SEXY,
    violence: l.VIOLATION_SUGGESTION_VIOLENCE,
    default: l.VIOLATION_SUGGESTION_DEFAULT
  }, s = r[t] || r.default, a = i ? i(s) : s;
  return m(n, {
    violationType: t,
    violationContent: e,
    handleSuggestion: a
  });
}
class A {
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
    const { liveId: e, container: i, url: r } = t;
    if (!e || !i)
      throw new Error("liveId and container are required");
    if (!this.playerFactory)
      throw console.error("[PlayerRegistry] playerFactory is not configured!"), new Error(
        "playerFactory is not configured. Please provide it in ServerConfig or call setPlayerFactory()."
      );
    this.debug && console.log("[PlayerRegistry] startPlay called", { liveId: e, containerId: i.id });
    try {
      if (this.stoppingSet.has(e)) {
        this.debug && console.log(`[PlayerRegistry] Waiting for stopPlay to complete for ${e}`);
        const a = this.stoppingPromiseMap.get(e);
        a && await a;
      }
      this.playerMap.has(e) && await this.stopPlay(e);
      const s = this.playerFactory(e);
      this.playerMap.set(e, s), await s.play(i, r), this.debug && console.log(`[PlayerRegistry] Started playing live ${e}`);
    } catch (s) {
      throw this.playerMap.has(e) && await this.stopPlay(e), s;
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
      const i = this.stoppingPromiseMap.get(t);
      return i || void 0;
    }
    this.stoppingSet.add(t);
    const e = (async () => {
      try {
        const i = this.playerMap.get(t);
        i && (await i.stop(), await i.destroy(), this.playerMap.delete(t), this.debug && console.log(`[PlayerRegistry] Stopped playing live ${t}`));
      } catch (i) {
        this.debug && console.warn(`[PlayerRegistry] Error stopping live ${t}:`, i);
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
    return this.playerMap.forEach((e, i) => {
      const r = e.getPlayerInfo();
      t[i] = {
        state: r.state,
        liveId: r.liveId
      };
    }), t;
  }
}
class E {
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
      const i = await C(t);
      return this.userProfiles = { ...this.userProfiles, ...Object.fromEntries(i) }, this.setLoading(e, !1), i;
    } catch (i) {
      throw this.setLoading(e, !1), console.error("[UserProfileManager] fetchProfiles failed:", i), i;
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
class k {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.loading = {}, this.error = null, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new A({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new E({
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
    const e = this.liveList.find((i) => i.liveId === t);
    e ? (this.currentLive = e, this.notifyStateChange({ currentLive: e }), this.fetchMuteStatus(t).catch(() => {
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), f(t).then((i) => {
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
      const [r, s, a] = await Promise.allSettled([
        f(e),
        d(e),
        this.fetchPushInfo(e)
        // 内部调用，获取推流信息
      ]);
      let o = null;
      if (r.status === "fulfilled")
        o = r.value;
      else
        throw r.reason;
      const h = s.status === "fulfilled" ? s.value?.Response : null;
      return o && a.status === "fulfilled" && a.value && (o.streamInfo = a.value), o && h && (o.stats = this.mergeStatisticData(o, h)), o && (this.liveList.some((g) => g.liveId === o.liveId) ? this.liveList = this.liveList.map(
        (g) => g.liveId === o.liveId ? o : g
      ) : this.liveList = [o, ...this.liveList], this.currentLive = o), this.setLoading(i, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), o;
    } catch (r) {
      const s = r instanceof Error ? r : new Error(String(r));
      throw this.setError(s), this.setLoading(i, !1), console.error("[LiveMonitorCore] fetchLiveDetail failed:", s), s;
    }
  }
  // ========= 推流信息（私有方法，在 fetchLiveDetail 内部调用） =========
  async fetchPushInfo(t) {
    try {
      return await I(t);
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
      const r = (await L(t)).liveId || t.liveId, s = r ? await f(r) : null;
      if (!s)
        throw new Error("创建直播成功，但获取详情失败");
      return this.liveList = [s, ...this.liveList], this.currentLive = s, this.setLoading(e, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), s;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setError(r), this.setLoading(e, !1), console.error("[LiveMonitorCore] createLive failed:", r), r;
    }
  }
  // ========= 更新直播 =========
  async updateLive(t) {
    const e = t.liveId || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as params.liveId, or call setCurrentLive(liveId) first");
    const i = "update";
    this.setLoading(i, !0), this.setError(null);
    try {
      if (await p(e, t), this.currentLive) {
        const { liveId: r, ...s } = t;
        this.currentLive = { ...this.currentLive, ...s, liveId: this.currentLive.liveId }, this.notifyStateChange({ currentLive: this.currentLive });
      }
      this.setLoading(i, !1);
    } catch (r) {
      const s = r instanceof Error ? r : new Error(String(r));
      throw this.setError(s), this.setLoading(i, !1), console.error("[LiveMonitorCore] updateLive failed:", s), s;
    }
  }
  // ========= 结束直播 =========
  async endLive(t) {
    const e = t || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const i = "end";
    this.setLoading(i, !0), this.setError(null);
    try {
      await S(e), this.liveList = this.liveList.filter((r) => r.liveId !== e), this.currentLive && this.currentLive.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), this.setLoading(i, !1);
    } catch (r) {
      const s = r instanceof Error ? r : new Error(String(r));
      throw this.setError(s), this.setLoading(i, !1), console.error("[LiveMonitorCore] endLive failed:", s), s;
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
      totalUniqueCommenters: e.TotalUniqueCommenters || t.stats?.totalUniqueCommenters,
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
    const e = t || this.currentLive?.liveId, i = t ? this.liveList.find((s) => s.liveId === t) || this.currentLive : this.currentLive;
    if (!e || !i)
      throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const r = "stats";
    this.setLoading(r, !0);
    try {
      const a = (await d(e))?.Response, o = a ? this.mergeStatisticData(i, a) : i.stats || {
        liveId: e,
        onlineCount: 0,
        viewCount: 0,
        likeCount: 0,
        giftCount: 0,
        giftAmount: 0,
        commentCount: 0,
        duration: 0
      };
      return this.currentLive && this.currentLive.liveId === e && (this.currentLive = { ...this.currentLive, stats: o }, this.notifyStateChange({ currentLive: this.currentLive })), this.liveList = this.liveList.map(
        (h) => h.liveId === e ? { ...h, stats: o } : h
      ), this.setLoading(r, !1), this.notifyStateChange({
        liveList: this.liveList
      }), o;
    } catch (s) {
      throw this.setLoading(r, !1), console.error("[LiveMonitorCore] fetchLiveStats failed:", s), s;
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
        await P(t, e), this.liveList = this.liveList.map((i) => i.liveId === t ? { ...i, isMuted: e } : i), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
      } catch (i) {
        throw console.error("[LiveMonitorCore] setAllMute failed:", i), i;
      }
  }
  /**
   * 从服务器获取全员禁言状态
   * @param liveId 直播间 ID
   */
  async fetchMuteStatus(t) {
    if (t)
      try {
        const e = await w(t);
        if (e && typeof e == "object") {
          const i = e.isMutedAll ?? !1;
          let r = !1;
          this.liveList = this.liveList.map((s) => s.liveId === t && s.isMuted !== i ? (r = !0, { ...s, isMuted: i }) : s), this.currentLive && this.currentLive.liveId === t && this.currentLive.isMuted !== i && (this.currentLive = { ...this.currentLive, isMuted: i }, r = !0), r && this.notifyStateChange({
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
    (!this.getActive || this.getActive()) && this.onStateChange?.(t);
  }
}
export {
  k as L,
  w as a,
  _ as b,
  m as c,
  G as d,
  P as e,
  U as g,
  N as m,
  M as s,
  F as u
};
