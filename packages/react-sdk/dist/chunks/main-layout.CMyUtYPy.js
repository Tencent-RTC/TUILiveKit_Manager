import { d as Mt, a5 as ht, a4 as D, a6 as q, be as Ut, n as Rt, aQ as Ot, y as Pt, aG as xt, b6 as Nt, a1 as Gt, l as Ft, aO as jt, t as Vt, m as kt, aP as Bt, u as Wt, a as $t, r as Kt, a0 as Yt, aF as Ht, s as zt, _ as qt, aE as Xt, q as Jt, c as Zt, J as Qt, aa as te, ap as ee, aL as ie, aM as se, aY as c, au as re, a3 as ae, z as ne, E as oe, A as N, ab as ce } from "./upload.HR7xdC-w.js";
class le {
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
        const n = this.stoppingPromiseMap.get(e);
        n && await n;
      }
      this.playerMap.has(e) && await this.stopPlay(e);
      const a = this.playerFactory(e);
      this.playerMap.set(e, a), await a.play(i, r), this.debug && console.log(`[PlayerRegistry] Started playing live ${e}`);
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
class he {
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
      const i = await Mt(t);
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
    var e;
    (!this.getActive || this.getActive()) && ((e = this.onStateChange) == null || e.call(this, t));
  }
}
class mi {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.cursor = "0", this.pageSize = 20, this.sortDirection = "descend", this.loading = {}, this.error = null, this.isActive = !0, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new le({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new he({
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
  /**
   * 获取当前分页游标
   * ⚠️ 关键：用于 LiveMonitor 分页计算
   */
  getCursor() {
    return this.cursor;
  }
  // ========= init =========
  init(t) {
    console.log("[LiveMonitorCore] init called", {
      hasPlayerFactory: !!t.playerFactory,
      baseURL: t.baseURL
    }), t.playerFactory ? (console.log("[LiveMonitorCore] Setting playerFactory"), this.playerRegistry.setPlayerFactory(t.playerFactory)) : console.warn("[LiveMonitorCore] No playerFactory provided!");
  }
  // ========= 直播列表操作 =========
  async fetchLiveList(t) {
    const e = "list";
    this.setLoading(e, !0), this.setError(null);
    const i = Date.now();
    let r;
    try {
      switch (t == null ? void 0 : t.action) {
        case "first":
          r = "0";
          break;
        case "prev":
          r = "0";
          break;
        case "next":
        default:
          r = this.cursor;
          break;
      }
      console.log("[PAGE_DEBUG] fetchLiveList START", {
        requestId: i,
        action: t == null ? void 0 : t.action,
        cursorSent: r,
        cursorBefore: this.cursor,
        pageSize: (t == null ? void 0 : t.count) || this.pageSize
      });
      const a = (t == null ? void 0 : t.count) || this.pageSize, n = await ht({
        next: r,
        count: a,
        sortDirection: this.sortDirection
      });
      let o = n.list || [];
      const l = !!n.next && n.next !== "0" && n.next !== r && o.length >= a;
      console.log("[PAGE_DEBUG] fetchLiveList SUCCESS", {
        requestId: i,
        cursorBefore: r,
        cursorAfter: n.next || "0",
        dataLength: o.length,
        hasMore: l,
        liveIds: o.slice(0, 3).map((h) => h.liveId)
        // 只打印前3个ID
      }), this.cursor = n.next || "0", this.liveList = o, this.hasMore = l;
      try {
        const h = o.map((g) => {
          var f;
          return (f = g.anchor) == null ? void 0 : f.userId;
        }).filter((g) => !!g);
        h.length > 0 && (await this.userProfileManager.fetchProfiles(h), o = o.map((g) => {
          var f;
          if ((f = g.anchor) != null && f.userId) {
            const L = this.userProfileManager.getProfile(g.anchor.userId);
            if (L)
              return {
                ...g,
                anchor: {
                  ...g.anchor,
                  ...L
                }
              };
          }
          return g;
        }));
      } catch (h) {
        console.warn("[LiveMonitorCore] fetchUserProfiles failed:", h);
      }
      return this.notifyStateChange({
        liveList: this.liveList,
        hasMore: this.hasMore,
        loading: { ...this.loading, [e]: !1 }
      }), o;
    } catch (a) {
      const n = a instanceof Error ? a : new Error(String(a));
      throw this.setError(n), this.setLoading(e, !1), console.error("[LiveMonitorCore] fetchLiveList failed:", n), n;
    }
  }
  // ========= 当前直播管理 =========
  setCurrentLive(t) {
    if (t === null) {
      this.currentLive = null, this.notifyStateChange({ currentLive: null });
      return;
    }
    const e = this.liveList.find((i) => i.liveId === t);
    e ? (this.currentLive = e, this.notifyStateChange({ currentLive: e }), this.fetchMuteStatus(t).catch(() => {
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), D(t).then((i) => {
      var r;
      i && ((r = this.getActive) == null ? void 0 : r.call(this)) !== !1 && (this.currentLive = i, this.notifyStateChange({ currentLive: i }), this.fetchMuteStatus(t).catch(() => {
      }));
    }).catch(() => {
    }));
  }
  getCurrentLiveInfo() {
    return this.currentLive ? this.currentLive : null;
  }
  // ========= 直播详情 =========
  async fetchLiveDetail(t) {
    var r, a;
    const e = t || ((r = this.currentLive) == null ? void 0 : r.liveId);
    if (!e) throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const i = "detail";
    this.setLoading(i, !0), this.setError(null);
    try {
      const [n, o, l] = await Promise.allSettled([
        D(e),
        q(e),
        this.fetchPushInfo(e)
        // 内部调用，获取推流信息
      ]);
      let h = null;
      if (n.status === "fulfilled")
        h = n.value;
      else
        throw n.reason;
      const g = o.status === "fulfilled" ? (a = o.value) == null ? void 0 : a.Response : null;
      return h && l.status === "fulfilled" && l.value && (h.streamInfo = l.value), h && g && (h.stats = this.mergeStatisticData(h, g)), h && (this.liveList.some((L) => L.liveId === h.liveId) ? this.liveList = this.liveList.map(
        (L) => L.liveId === h.liveId ? h : L
      ) : this.liveList = [h, ...this.liveList], this.currentLive = h), this.setLoading(i, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), h;
    } catch (n) {
      const o = n instanceof Error ? n : new Error(String(n));
      throw this.setError(o), this.setLoading(i, !1), console.error("[LiveMonitorCore] fetchLiveDetail failed:", o), o;
    }
  }
  // ========= 推流信息（私有方法，在 fetchLiveDetail 内部调用） =========
  async fetchPushInfo(t) {
    try {
      return await Ut(t);
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
      const r = (await Rt(t)).liveId || t.liveId, a = r ? await D(r) : null;
      if (!a)
        throw new Error("创建直播成功，但获取详情失败");
      return this.liveList = [a, ...this.liveList], this.currentLive = a, this.setLoading(e, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), a;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setError(r), this.setLoading(e, !1), console.error("[LiveMonitorCore] createLive failed:", r), r;
    }
  }
  // ========= 更新直播 =========
  async updateLive(t) {
    var r;
    const e = t.liveId || ((r = this.currentLive) == null ? void 0 : r.liveId);
    if (!e) throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const i = "update";
    this.setLoading(i, !0), this.setError(null);
    try {
      await Ot(e, t), this.currentLive && (this.currentLive = { ...this.currentLive, ...t }, this.notifyStateChange({ currentLive: this.currentLive })), this.setLoading(i, !1);
    } catch (a) {
      const n = a instanceof Error ? a : new Error(String(a));
      throw this.setError(n), this.setLoading(i, !1), console.error("[LiveMonitorCore] updateLive failed:", n), n;
    }
  }
  // ========= 结束直播 =========
  async endLive(t) {
    var r;
    const e = t || ((r = this.currentLive) == null ? void 0 : r.liveId);
    if (!e) throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const i = "end";
    this.setLoading(i, !0), this.setError(null);
    try {
      await Pt(e), this.liveList = this.liveList.filter((a) => a.liveId !== e), this.currentLive && this.currentLive.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), this.setLoading(i, !1);
    } catch (a) {
      const n = a instanceof Error ? a : new Error(String(a));
      throw this.setError(n), this.setLoading(i, !1), console.error("[LiveMonitorCore] endLive failed:", n), n;
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
    var r, a, n, o, l, h, g, f;
    return e ? {
      liveId: t.liveId,
      onlineCount: t.onlineCount || e.TotalViewers || 0,
      viewCount: e.TotalViewers || ((r = t.stats) == null ? void 0 : r.viewCount) || 0,
      likeCount: e.TotalLikesReceived || ((a = t.stats) == null ? void 0 : a.likeCount) || 0,
      giftCount: e.TotalGiftsSent || ((n = t.stats) == null ? void 0 : n.giftCount) || 0,
      giftAmount: e.TotalGiftCoins || ((o = t.stats) == null ? void 0 : o.giftAmount) || 0,
      giftUserCount: e.TotalUniqueGiftSenders || ((l = t.stats) == null ? void 0 : l.giftUserCount),
      commentCount: e.TotalMsgCount || ((h = t.stats) == null ? void 0 : h.commentCount) || 0,
      totalUniqueCommenters: e.TotalUniqueCommenters || ((g = t.stats) == null ? void 0 : g.totalUniqueCommenters),
      duration: ((f = t.stats) == null ? void 0 : f.duration) || 0
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
    var a;
    const e = t || ((a = this.currentLive) == null ? void 0 : a.liveId), i = t ? this.liveList.find((n) => n.liveId === t) || this.currentLive : this.currentLive;
    if (!e || !i)
      throw new Error("liveId is required or call setCurrentLive(liveId) first");
    const r = "stats";
    this.setLoading(r, !0);
    try {
      const n = await q(e), o = n == null ? void 0 : n.Response, l = o ? this.mergeStatisticData(i, o) : i.stats || {
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
        (h) => h.liveId === e ? { ...h, stats: l } : h
      ), this.setLoading(r, !1), this.notifyStateChange({
        liveList: this.liveList
      }), l;
    } catch (n) {
      throw this.setLoading(r, !1), console.error("[LiveMonitorCore] fetchLiveStats failed:", n), n;
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
        await xt(t, e), this.liveList = this.liveList.map((i) => i.liveId === t ? { ...i, isMuted: e } : i), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
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
        const e = await Nt(t);
        if (e && typeof e == "object") {
          const i = e.isMutedAll ?? !1;
          let r = !1;
          this.liveList = this.liveList.map((a) => a.liveId === t && a.isMuted !== i ? (r = !0, { ...a, isMuted: i }) : a), this.currentLive && this.currentLive.liveId === t && this.currentLive.isMuted !== i && (this.currentLive = { ...this.currentLive, isMuted: i }, r = !0), r && this.notifyStateChange({
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
    this.liveList = [], this.hasMore = !0, this.currentLive = null, this.loading = {}, this.error = null, this.cursor = "0", this.playerRegistry.stopAll().catch(() => {
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
    this.isActive = !1, this.reset(), this.playerRegistry.destroy().catch(() => {
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
class Li {
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
      const e = await Gt(t == null ? void 0 : t.language);
      return this.giftList = e.gifts || [], this.giftCategoryList = e.categories || [], this.setLoading("giftList", !1), this.notifyStateChange(), {
        giftList: e.gifts || [],
        giftCategoryList: e.categories || []
      };
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftList", !1), this.setError(i), i;
    }
  }
  async createGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      const e = await Ft(t);
      return this.setLoading("giftAction", !1), e;
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(i), i;
    }
  }
  async updateGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await jt(t), this.setLoading("giftAction", !1);
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(i), i;
    }
  }
  async deleteGift(t) {
    this.setLoading("giftAction", !0), this.setError(null);
    try {
      await Vt(t), this.giftList = this.giftList.filter((e) => e.id !== t), this.setLoading("giftAction", !1), this.notifyStateChange();
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftAction", !1), this.setError(i), i;
    }
  }
  // ========= 礼物分类操作 =========
  async createGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await kt(t), this.setLoading("categoryAction", !1);
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(i), i;
    }
  }
  async updateGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await Bt(t), this.setLoading("categoryAction", !1);
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(i), i;
    }
  }
  async deleteGiftCategory(t) {
    this.setLoading("categoryAction", !0), this.setError(null);
    try {
      await Wt(t), this.giftCategoryList = this.giftCategoryList.filter((e) => e.id !== t), this.setLoading("categoryAction", !1), this.notifyStateChange();
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("categoryAction", !1), this.setError(i), i;
    }
  }
  // ========= 礼物-分类关联操作 =========
  async addGiftCategoryRelations(t) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: e, categoryIds: i } = t;
      for (const r of i)
        await $t(r, [e]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftCategory", !1), this.setError(i), i;
    }
  }
  async deleteGiftCategoryRelations(t) {
    this.setLoading("giftCategory", !0), this.setError(null);
    try {
      const { giftId: e, categoryIds: i } = t;
      for (const r of i)
        await Kt(r, [e]);
      this.setLoading("giftCategory", !1), await this.fetchGiftList().catch(() => {
      });
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftCategory", !1), this.setError(i), i;
    }
  }
  // ========= 礼物多语言操作 =========
  async getGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      const e = await Yt(t.giftId, t.language);
      return this.setLoading("giftLanguage", !1), e;
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(i), i;
    }
  }
  async setGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await Ht(t.giftId, t.language, t.name, t.description), this.setLoading("giftLanguage", !1);
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(i), i;
    }
  }
  async deleteGiftLanguage(t) {
    this.setLoading("giftLanguage", !0), this.setError(null);
    try {
      await zt(t.giftId, t.language), this.setLoading("giftLanguage", !1);
    } catch (e) {
      const i = e instanceof Error ? e : new Error(String(e));
      throw this.setLoading("giftLanguage", !1), this.setError(i), i;
    }
  }
  // ========= 礼物分类多语言操作 =========
  async getGiftCategoryLanguage(t, e) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      const i = await qt(t, e);
      return this.setLoading("giftCategoryLanguage", !1), i;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
  async setGiftCategoryLanguage(t, e, i, r) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await Xt(t, e, i, r), this.setLoading("giftCategoryLanguage", !1);
    } catch (a) {
      const n = a instanceof Error ? a : new Error(String(a));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(n), n;
    }
  }
  async deleteGiftCategoryLanguage(t, e) {
    this.setLoading("giftCategoryLanguage", !0), this.setError(null);
    try {
      await Jt(t, e), this.setLoading("giftCategoryLanguage", !1);
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setLoading("giftCategoryLanguage", !1), this.setError(r), r;
    }
  }
}
const w = {
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
function pi(s) {
  return w[s];
}
function yi(s, t) {
  return Math.max(1, Math.ceil(s / t));
}
function Ei(s, t) {
  return Math.max(1, Math.min(s, t));
}
function Ii(s, t) {
  return (s - 1) * t;
}
function Ci(s, t, e) {
  const i = (s - 1) * t + 1, r = Math.min(s * t, e);
  return { start: i, end: r };
}
const vi = w.mutedList, Si = w.bannedList, ge = 600, ue = 86400, gt = (s) => Array.isArray(s) ? s.filter((t) => !!t && typeof t == "object") : [], G = (s, ...t) => {
  const e = t.map((i) => s[i]).find((i) => typeof i == "string" && i.length > 0);
  return typeof e == "string" ? e : "";
}, ut = (s, ...t) => {
  const e = t.map((r) => s[r]).find((r) => r != null), i = Number(e || 0);
  return Number.isFinite(i) ? i : 0;
}, O = (s) => s.memberAccounts || s.userIds || [];
async function _i(s) {
  var i;
  const t = await te(s);
  return gt(((i = t.Response) == null ? void 0 : i.MutedAccountList) || t.MutedAccountList).map((r) => ({
    userId: G(r, "Member_Account", "userId", "UserID"),
    endTime: ut(r, "MutedUntil", "endTime")
  })).filter((r) => r.userId);
}
function Ti(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function wi(s) {
  var i;
  const t = await Qt(s);
  return gt(((i = t.Response) == null ? void 0 : i.BannedAccountList) || t.BannedAccountList).map((r) => ({
    userId: G(r, "Member_Account", "userId", "UserID"),
    endTime: ut(r, "BannedUntil", "endTime"),
    reason: G(r, "Reason", "reason") || void 0
  })).filter((r) => r.userId);
}
function bi(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function Ai(s) {
  const { liveId: t } = s, e = O(s), i = s.muteTime ?? s.duration ?? ge;
  await ee(t, e, i);
}
async function Di(s) {
  const { liveId: t } = s, e = O(s);
  await se(t, e);
}
async function Mi(s) {
  const { liveId: t, reason: e = "" } = s, i = O(s), r = s.banTime ?? s.duration ?? ue;
  await Zt(t, i, r, e);
}
async function Ui(s) {
  const { liveId: t } = s, e = O(s);
  await ie(t, e);
}
function ft(s) {
  return `${s}_robot`;
}
function Ri(s, t) {
  return s === ft(t);
}
function Oi(s, t) {
  const e = ft(t);
  return s.filter((i) => i !== e);
}
function Pi(s) {
  const t = Math.floor(Date.now() / 1e3), e = s - t;
  if (e <= 0)
    return "已过期";
  const i = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
  return i > 0 ? `${i}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function xi(s) {
  const t = Math.floor(Date.now() / 1e3);
  return s <= t;
}
const fe = {
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
}, de = "https://web.sdk.qcloud.com/im/assets/emoji-plugin/", Ni = (s) => {
  if (!s)
    return [];
  const t = [];
  let e = s;
  for (; e.length > 0; ) {
    const i = e.indexOf("["), r = e.indexOf("]");
    if (i === 0) {
      if (r === -1) {
        t.push({ type: "text", text: e });
        break;
      }
      const a = e.slice(0, r + 1), n = fe[a];
      if (n) {
        t.push({
          type: "emoji",
          key: a,
          src: `${de}${n}`
        }), e = e.slice(r + 1);
        continue;
      }
      t.push({ type: "text", text: a }), e = e.slice(r + 1);
      continue;
    }
    if (i === -1) {
      t.push({ type: "text", text: e });
      break;
    }
    t.push({ type: "text", text: e.slice(0, i) }), e = e.slice(i);
  }
  return t;
};
function Gi(s, t) {
  const e = Math.max(1, t), i = Math.min(Math.max(1, s), e);
  if (e <= 7)
    return Array.from({ length: e }, (n, o) => o + 1);
  const r = [], a = (n) => {
    r[r.length - 1] !== n && r.push(n);
  };
  a(1), i > 4 && a("...");
  for (let n = Math.max(2, i - 2); n <= Math.min(e - 1, i + 2); n++)
    a(n);
  return i < e - 3 && a("..."), a(e), r;
}
class me {
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
  debug(t, e, i) {
    this.log("debug", t, e, i);
  }
  /**
   * 信息日志
   */
  info(t, e, i) {
    this.log("info", t, e, i);
  }
  /**
   * 警告日志
   */
  warn(t, e, i) {
    this.log("warn", t, e, i);
  }
  /**
   * 错误日志
   */
  error(t, e, i) {
    this.log("error", t, e, i), this.config.enableReport && i && this.reportError(t, e, i);
  }
  /**
   * 统一日志输出
   */
  log(t, e, i, r) {
    if (!this.config.enableConsole) return;
    const n = `${this.config.prefix ? `[${this.config.prefix}]` : ""}[${e}] ${i}`;
    switch (t) {
      case "debug":
        console.debug(n, r);
        break;
      case "info":
        console.info(n, r);
        break;
      case "warn":
        console.warn(n, r);
        break;
      case "error":
        console.error(n, r);
        break;
    }
  }
  /**
   * 上报错误到监控系统
   * 可以集成 Sentry、腾讯云监控等
   */
  reportError(t, e, i) {
  }
}
new me({ prefix: "LiveKit" });
const Fi = (s, t = null) => {
  try {
    return JSON.parse(s);
  } catch (e) {
    return console.warn("Failed to parse JSON:", s, e), t;
  }
}, ji = (s, t) => {
  let e = null;
  return (...i) => {
    e !== null && clearTimeout(e), e = window.setTimeout(() => {
      s(...i), e = null;
    }, t);
  };
}, Vi = (s, t = {}) => {
  const e = s;
  e != null && e.requestFullscreen ? e == null || e.requestFullscreen(t) : e != null && e.mozRequestFullScreen ? e == null || e.mozRequestFullScreen(t) : e != null && e.webkitRequestFullScreen ? e == null || e.webkitRequestFullScreen(t) : e != null && e.msRequestFullscreen && (e == null || e.msRequestFullscreen(t));
}, ki = () => {
  if (!(document != null && document.fullscreenElement) && !(document != null && document.webkitFullscreenElement) && !(document != null && document.mozFullScreenElement))
    return;
  const s = document;
  s != null && s.exitFullscreen ? s == null || s.exitFullscreen() : s != null && s.msExitFullscreen ? s == null || s.msExitFullscreen() : s != null && s.mozCancelFullScreen ? s == null || s.mozCancelFullScreen() : s != null && s.webkitExitFullscreen && (s == null || s.webkitExitFullscreen());
}, $ = async (s) => {
  var e;
  if ((e = navigator.clipboard) != null && e.writeText)
    return navigator.clipboard.writeText(s);
  const t = document.createElement("textarea");
  t.value = s, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function Bi(s) {
  return `live_obs_${s}`;
}
function Le(s) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(s);
}
function pe(s) {
  return /\.svga(\?|$)/i.test(s);
}
function Wi(s) {
  return s instanceof File ? s.name.toLowerCase().endsWith(".svga") : !1;
}
function $i(s) {
  return s.type.startsWith("video/");
}
function S(s) {
  return new TextEncoder().encode(s).length;
}
function Ki(s) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => t(i.result), i.onerror = e, i.readAsDataURL(s);
  });
}
let T = null;
function dt() {
  if (!T)
    throw new Error("SVGAParser 未初始化，请先调用 initSvgaParser()");
  return T;
}
function Yi(s) {
  T || (T = new s());
}
function Hi() {
  return T;
}
function ye(s, t = 15e3) {
  return new Promise((e, i) => {
    if (!s) {
      i(new Error("URL 不能为空"));
      return;
    }
    const r = dt();
    let a = null, n = !1;
    const o = () => {
      a && (clearTimeout(a), a = null);
    };
    a = setTimeout(() => {
      n || (n = !0, i(new Error("SVGA 资源加载超时，请检查 URL 是否可访问")));
    }, t), r.load(
      s,
      () => {
        n || (n = !0, o(), e(!0));
      },
      () => {
        n || (n = !0, o(), i(new Error("SVGA 资源加载失败，请检查 URL 是否正确")));
      }
    );
  });
}
function Ee(s, t = 15e3) {
  return new Promise((e, i) => {
    let r = null, a = !1;
    const n = () => {
      r && (clearTimeout(r), r = null);
    };
    r = setTimeout(() => {
      a || (a = !0, i(new Error("SVGA 文件解析超时")));
    }, t);
    const o = URL.createObjectURL(s);
    dt().load(
      o,
      () => {
        a || (a = !0, n(), URL.revokeObjectURL(o), e(!0));
      },
      () => {
        a || (a = !0, n(), URL.revokeObjectURL(o), i(new Error("SVGA 文件无效或已损坏")));
      }
    );
  });
}
function X(s, t = 8e3, e = !1) {
  return new Promise((i, r) => {
    var l;
    if (!s) {
      r(new Error("URL 不能为空"));
      return;
    }
    if (Le(s)) {
      i(!0);
      return;
    }
    if (pe(s)) {
      if (e) {
        i(!0);
        return;
      }
      ye(s, t > 8e3 ? t : 15e3).then(() => i(!0)).catch(r);
      return;
    }
    const a = document.createElement("img");
    let n = null;
    const o = () => {
      n && (clearTimeout(n), n = null), a.onload = null, a.onerror = null, a.src = "", a.parentNode && a.parentNode.removeChild(a);
    };
    a.onload = () => {
      o(), i(!0);
    }, a.onerror = () => {
      o(), r(new Error("图片加载失败，请检查 URL 是否正确"));
    }, n = setTimeout(() => {
      o(), r(new Error("图片加载超时，请检查 URL 是否可访问"));
    }, t), a.style.display = "none", (l = document.body) == null || l.appendChild(a), a.src = s;
  });
}
function Ie(s, t = 1e4) {
  return new Promise((e, i) => {
    var o;
    const r = document.createElement("img");
    let a = null;
    const n = () => {
      a && (clearTimeout(a), a = null), r.onload = null, r.onerror = null, r.src = "", r.parentNode && r.parentNode.removeChild(r);
    };
    r.onload = () => {
      n(), e(!0);
    }, r.onerror = () => {
      n(), i(new Error("图片加载失败，文件可能已损坏"));
    }, a = setTimeout(() => {
      n(), i(new Error("图片加载超时"));
    }, t), r.style.display = "none", (o = document.body) == null || o.appendChild(r), r.src = s;
  });
}
function Ce(s, t = 15e3) {
  return new Promise((e, i) => {
    var o;
    const r = document.createElement("video");
    let a = null;
    const n = () => {
      a && (clearTimeout(a), a = null), r.onloadeddata = null, r.onerror = null, r.src = "", r.parentNode && r.parentNode.removeChild(r);
    };
    r.onloadeddata = () => {
      n(), e(!0);
    }, r.onerror = () => {
      n(), i(new Error("视频加载失败，文件可能已损坏"));
    }, a = setTimeout(() => {
      n(), i(new Error("视频加载超时"));
    }, t), r.style.display = "none", r.muted = !0, (o = document.body) == null || o.appendChild(r), r.src = s, r.load();
  });
}
function zi(s, t) {
  const e = t ? t.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"], i = e.filter((l) => !l.startsWith(".")), r = e.filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), a = e.some((l) => l.startsWith("video/")), n = "." + (s.name.split(".").pop() || "").toLowerCase();
  return i.includes(s.type) || a && s.type.startsWith("video/") || r.includes(n) ? { valid: !0 } : { valid: !1, errorHint: `只允许上传 ${e.map((h) => h === "image/svg+xml" ? "SVG" : h === "video/mp4" ? "MP4" : h.startsWith(".") ? h.slice(1).toUpperCase() : h.startsWith("image/") ? h.replace("image/", "").toUpperCase() : h).join("/")} 格式的文件` };
}
function qi(s, t) {
  return s.size <= t * 1024 * 1024;
}
async function Xi(s, t, e = !1) {
  const r = (t ? t.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"]).filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), a = "." + (s.name.split(".").pop() || "").toLowerCase(), n = a === ".svga", o = !n && r.includes(a) && !s.type.startsWith("image/") && !s.type.startsWith("video/");
  if (n)
    e || await Ee(s);
  else if (!o) {
    const l = URL.createObjectURL(s);
    try {
      s.type.startsWith("video/") ? await Ce(l) : await Ie(l);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
}
class Ji {
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
    const i = (typeof t == "string" ? t : String(t)).trim();
    if (i) {
      if (e && S(i) > e) {
        this.callbacks.setError(`URL 不能超过 ${e} 字节`);
        return;
      }
      let r = !1;
      this.cancelRef = () => {
        r = !0;
      }, this.callbacks.setValidating(!0), this.callbacks.setError("");
      const a = (async () => {
        try {
          if (await X(i, 8e3, this.skipSvgaValidation), r) return;
          this.callbacks.onConfirm(i);
        } catch (n) {
          if (r) return;
          this.callbacks.setError((n instanceof Error ? n.message : "") || "图片 URL 无效");
        } finally {
          r || this.callbacks.setValidating(!1), this.cancelRef = null, this.validationPromise = null;
        }
      })();
      this.validationPromise = a, await a;
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
  async ensureUrlValidated(t, e, i) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const r = t.trim();
    if (!r) return "";
    if (i && S(r) > i)
      throw new Error(`URL 不能超过 ${i} 字节`);
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
  async ensureUrlValidatedWithErrorCheck(t, e, i, r) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const a = t.trim();
    if (!a) return "";
    if (r && S(a) > r)
      throw new Error(`URL 不能超过 ${r} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return i || a !== e ? await this._doValidateForSubmit(a) : a;
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
      return await X(t, 8e3, this.skipSvgaValidation), e || (this.callbacks.onConfirm(t), this.callbacks.setValidating(!1)), t;
    } catch (i) {
      throw e || (this.callbacks.setValidating(!1), this.callbacks.setError((i instanceof Error ? i.message : "") || "图片 URL 无效")), i;
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
function mt(s, t = "image/jpeg", e = 0.92) {
  return new Promise((i, r) => {
    s.toBlob(
      (a) => {
        a ? i(a) : r(new Error("Canvas to Blob conversion failed"));
      },
      t,
      e
    );
  });
}
async function Zi(s, t, e = "image/jpeg", i = 0.92) {
  const r = new Image();
  r.crossOrigin = "anonymous", await new Promise((o, l) => {
    r.onload = () => o(), r.onerror = l, r.src = s;
  });
  const a = document.createElement("canvas");
  a.width = t.width, a.height = t.height;
  const n = a.getContext("2d");
  if (!n)
    throw new Error("Failed to get canvas 2D context");
  return n.drawImage(
    r,
    t.x,
    t.y,
    t.width,
    t.height,
    0,
    0,
    t.width,
    t.height
  ), mt(a, e, i);
}
async function Qi(s, t = "image/jpeg", e = 0.92) {
  if (!s)
    throw new Error("Canvas is null or undefined");
  return mt(s, t, e);
}
class ts {
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
function ve(s) {
  return URL.createObjectURL(s);
}
function Lt(s) {
  try {
    URL.revokeObjectURL(s);
  } catch (t) {
    console.warn("Failed to revoke ObjectURL:", s, t);
  }
}
function Se(s, t) {
  return s && Lt(s), ve(t);
}
function _e(s) {
  var e;
  const t = (e = s.dataTransfer) == null ? void 0 : e.files;
  return t && t.length > 0 ? t[0] : null;
}
function es(s) {
  return (t) => {
    t.preventDefault();
    const e = _e(t);
    e && s(e);
  };
}
function is(s) {
  s.preventDefault();
}
class F extends Error {
  constructor(t, e, i) {
    const r = e === "url-validation" ? `${t}不可用` : `${t}上传失败`, a = i ?? {}, n = a.ErrorInfo || a.message || (e === "url-validation" ? "请检查 URL 是否正确" : "网络错误");
    super(`${r}: ${n}`), this.name = "ImageUploadResolveError", this.label = t, this.type = e, this.cause = i;
  }
}
async function Te(s) {
  const { handle: t, hasPendingFile: e, fallbackUrl: i, label: r } = s;
  if ((t == null ? void 0 : t.isUrlInputMode) ?? !0)
    try {
      const n = await (t == null ? void 0 : t.ensureUrlValidated());
      return n ?? "";
    } catch (n) {
      throw new F(r, "url-validation", n);
    }
  else if (e && t)
    try {
      return await t.uploadPendingFile() || "";
    } catch (n) {
      throw new F(r, "upload", n);
    }
  else
    return i.trim();
}
async function ss(s) {
  return Promise.all(s.map(Te));
}
function rs(s, t = "图片") {
  if (s instanceof F)
    return s.message;
  const e = s ?? {}, i = e.ErrorInfo || e.message || "未知错误";
  return `${t}处理失败: ${i}`;
}
const we = {
  0: "操作成功",
  [-1]: "暂未归类的通用错误",
  [-2]: "请求被限频，请稍后重试",
  [-3]: "重复操作",
  [-1e3]: "未找到 SDKAppID，请在控制台确认应用信息",
  [-1001]: "传入的参数不合法，请检查入参",
  [-1002]: "未登录，请先登录",
  [-1003]: "获取权限失败，当前未授权音/视频权限，请查看是否开启设备权限",
  [-1004]: "该功能需要开通额外的套餐，请在控制台按需开通"
}, be = {
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
}, Ae = {
  [-2101]: "需要进房后才可使用此功能",
  [-2102]: "房主不支持退房操作。会议房间可以先转让房主再退房，直播房间房主只能解散房间",
  [-2103]: "当前房间类型下不支持该操作",
  [-2105]: "创建房间 ID 非法，自定义 ID 必须为可打印 ASCII 字符（0x20-0x7e），最长 48 个字节",
  [-2107]: "房间名称非法，名称最长 30 字节，字符编码必须是 UTF-8",
  [-2108]: "当前用户已在别的房间内，请先退出当前房间"
}, De = {
  [-2200]: "未找到该用户"
}, Me = {
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
}, Ue = {
  [-4001]: "当前房间不支持预加载"
}, Re = {
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
}, Oe = {
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
}, Pe = {
  ...we,
  ...be,
  ...Ae,
  ...De,
  ...Me,
  ...Ue,
  ...Re,
  ...Oe
};
function J(s, t, e) {
  return t || (Pe[s] ?? e ?? `未知错误（错误码: ${s}）`);
}
function as(s) {
  return s === 0;
}
function ns(s) {
  return s < 0;
}
function os(s) {
  return s >= 6e4 && s < 7e4;
}
function cs(s) {
  return s >= 1e5;
}
function ls(s) {
  return s === 0 ? "success" : s < 0 ? "client" : s >= 6e4 && s < 7e4 ? "rest_api" : s >= 1e5 ? "server" : "unknown";
}
const j = [
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
], Z = [
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
], xe = [
  ...j,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function U(s) {
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
function C(s) {
  if (U(s))
    return s;
  if (typeof s == "string")
    try {
      const t = JSON.parse(s);
      return U(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function yt(s) {
  return [
    C(s.liveOwner),
    C(s.anchor),
    C(s.owner),
    C(s.host),
    C(s.userInfo),
    C(s.sender)
  ];
}
function hs(s) {
  const t = (s || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function gs(s) {
  if (!U(s))
    return "";
  const t = _(s, j);
  if (t)
    return t;
  for (const i of yt(s)) {
    const r = _(i, j);
    if (r)
      return r;
  }
  const e = C(
    s.CustomINFO ?? s.customInfo ?? s.customData ?? s.metadata
  );
  return _(e, xe);
}
function us(s, t = "") {
  if (typeof s == "string")
    return s.trim() || t;
  if (!U(s))
    return t;
  const e = _(s, Z);
  if (e)
    return e;
  const i = pt(s.liveOwner);
  if (i)
    return i;
  for (const r of yt(s)) {
    const a = _(r, Z);
    if (a)
      return a;
  }
  return t;
}
const Ne = "live_", fs = 43, ds = 100, Ge = "VideoDynamicGrid9Seats", Fe = 8, M = 9 / 16, Et = 16 / 9, y = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, je = [
  { value: "VideoDynamicGrid9Seats", labelKey: c.DYNAMIC_GRID_LAYOUT, descKey: c.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: c.FLOATING_WINDOW_LAYOUT, descKey: c.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: c.FIXED_GRID_LAYOUT, descKey: c.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: c.FIXED_WINDOW_LAYOUT, descKey: c.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: c.LANDSCAPE_BROADCASTING, descKey: c.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function ms() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: Ge,
    maxSeatCount: Fe
  };
}
function Ls() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function Ve(s) {
  return `${Ne}${s}`;
}
function ke(s) {
  return s === "AudioSalon" || s === "Karaoke";
}
function Be(s) {
  return je.find((t) => t.value === s);
}
function ps(s) {
  var t;
  return ((t = Be(s)) == null ? void 0 : t.orientation) === "landscape" ? Et : M;
}
function ys(s) {
  return !s.key.trim() && !!s.value.trim();
}
function We(s) {
  const t = {};
  for (const e of s) {
    const i = e.key.trim();
    i && (t[i] = e.value);
  }
  return t;
}
function Es(s) {
  const t = {};
  let e = 0;
  for (const r of s) {
    const a = r.key.trim();
    if (!a) continue;
    const n = S(a);
    if (n > y.maxKeyBytes)
      return { type: "key-too-long", key: a, max: y.maxKeyBytes, current: n };
    const o = S(r.value);
    if (o > y.maxValueBytes)
      return { type: "value-too-long", key: a, max: y.maxValueBytes, current: o };
    e += o, t[a] = r.value;
  }
  const i = Object.keys(t).length;
  return i > y.maxCount ? { type: "max-count", max: y.maxCount, current: i } : e > y.maxTotalValueBytes ? { type: "total-value-too-long", max: y.maxTotalValueBytes, current: e } : null;
}
function Is(s, t) {
  const e = new Set(Object.keys(t));
  return s.filter((i) => !e.has(i));
}
function Cs(s) {
  const { formData: t, coverUrl: e, customInfos: i, useObsStreaming: r } = s, a = We(i), n = {
    liveId: Ve(t.anchorId),
    anchorId: t.anchorId,
    title: t.liveName,
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
function vs(s) {
  return new Promise((t) => {
    if (!s) {
      t(M);
      return;
    }
    const e = new Image();
    e.crossOrigin = "anonymous", e.onload = () => {
      const i = e.naturalWidth / e.naturalHeight;
      t(i > 1 ? Et : M);
    }, e.onerror = () => t(M), e.src = s;
  });
}
const Ss = {
  field: "createTime",
  direction: "descend"
}, Ke = w.liveList, V = "liveList_currentPage", k = "liveList_pageCursors", Ye = 1024;
class Q extends Error {
  constructor(t, e, i = "Load Live List Failed") {
    super(e || i), this.name = "LiveListApiError", this.errorCode = t, this.errorInfo = e;
  }
}
function R() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function He(s) {
  const { page: t, pageCursors: e, pageSize: i = Ke } = s, r = e.get(t) || "", { list: a, next: n } = await ht({ next: r, count: i, sortDirection: "descend" }), o = a, l = new Map(e);
  return n && o.length > 0 && l.set(t + 1, n), {
    lives: o,
    currentPage: t,
    hasMoreData: !!n && o.length === i,
    pageCursors: l,
    response: { ErrorCode: 0, Response: { RoomList: a, Next: n } }
  };
}
function ze(s) {
  const { targetPage: t, currentPage: e, hasMoreData: i } = s;
  return !(t < 1 || t > e && !i);
}
function qe(s) {
  const { currentPage: t, hasMoreData: e, livesLength: i } = s;
  return !e && i <= 1 && t > 1 ? t - 1 : t;
}
function Xe(s) {
  const t = s.storage || sessionStorage;
  try {
    t.setItem(V, String(s.currentPage)), t.setItem(k, JSON.stringify(Array.from(s.pageCursors.entries())));
  } catch {
  }
}
function Je(s = sessionStorage) {
  let t = 1, e = R();
  try {
    const i = s.getItem(V), r = s.getItem(k);
    if (s.removeItem(V), s.removeItem(k), i && r) {
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
function Ze(s, t) {
  return S(s) > t;
}
async function Qe(s) {
  return await D(s);
}
function _s(s) {
  return s ? new Date(s * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function Ts(s, t) {
  const { field: e, direction: i } = t, r = [...s], a = i === "ascend" ? 1 : -1;
  return r.sort((n, o) => {
    let l = 0;
    switch (e) {
      case "createTime":
        l = (n.createdAt || 0) - (o.createdAt || 0);
        break;
      case "viewerCount":
        l = (n.onlineCount || 0) - (o.onlineCount || 0);
        break;
      case "duration": {
        const h = n.endedAt ? n.endedAt - n.createdAt : Date.now() / 1e3 - n.createdAt, g = o.endedAt ? o.endedAt - o.createdAt : Date.now() / 1e3 - o.createdAt;
        l = h - g;
        break;
      }
      case "status": {
        const h = n.endedAt ? 1 : 0, g = o.endedAt ? 1 : 0;
        l = h - g;
        break;
      }
      default:
        l = 0;
    }
    return l * a;
  }), r;
}
function ws(s, t) {
  let e = s;
  return t.status && (t.status === "ongoing" ? e = e.filter((i) => !i.endedAt) : t.status === "ended" && (e = e.filter((i) => !!i.endedAt))), t.anchorId && (e = e.filter((i) => i.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (e = e.filter((i) => !i.category || i.category.length === 0 ? !1 : t.tags.some((r) => i.category.includes(r)))), t.customFilter && (e = e.filter(t.customFilter)), e;
}
class bs {
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
    var r;
    if (this.cache.size >= this.maxPages) {
      const a = (r = Array.from(this.cache.entries()).sort((n, o) => n[1].timestamp - o[1].timestamp)[0]) == null ? void 0 : r[0];
      a !== void 0 && this.cache.delete(a);
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
    var e;
    for (this.maxPages = t; this.cache.size > t; ) {
      const i = (e = Array.from(this.cache.entries()).sort((r, a) => r[1].timestamp - a[1].timestamp)[0]) == null ? void 0 : e[0];
      i !== void 0 && this.cache.delete(i);
    }
  }
}
const It = w.moderation, ti = 10;
async function As(s) {
  const {
    liveId: t,
    pageNum: e,
    pageSize: i = It,
    minutes: r = ti,
    violationOnly: a = !0
  } = s, n = await ae({
    liveId: t,
    pageNum: e,
    pageSize: i,
    minutes: r,
    violationOnly: a
  }), o = await ne(n.list), l = await oe();
  return {
    list: o,
    total: Math.max(0, n.total - l),
    currentPage: e
  };
}
async function Ds(s) {
  await re(s);
}
function Ms(s, t, e, i = It) {
  const r = Math.max(0, t - e), a = Math.max(1, Math.ceil(r / i));
  return Math.min(s, a);
}
function Us(s, t) {
  return s.includes(t) ? s.filter((e) => e !== t) : [...s, t];
}
function Rs(s, t) {
  if (t.length > 0 && t.every((i) => s.includes(i)))
    return s.filter((i) => !t.includes(i));
  {
    const i = new Set(s);
    return t.forEach((r) => i.add(r)), Array.from(i);
  }
}
function Os(s, t) {
  return s.filter((e) => t.includes(e));
}
function Ps(s, t) {
  return t.length === 0 ? !1 : t.every((e) => s.includes(e));
}
function xs(s) {
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
  }[s] || c.UNKNOWN;
}
function Ns(s) {
  const t = new Date(s), e = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0"), r = String(t.getHours()).padStart(2, "0"), a = String(t.getMinutes()).padStart(2, "0"), n = String(t.getSeconds()).padStart(2, "0");
  return `${e}-${i} ${r}:${a}:${n}`;
}
const B = /* @__PURE__ */ new Map();
function P(s, t) {
  if (typeof document > "u") return 0;
  const e = `${s}:${t}`, i = B.get(e);
  if (i !== void 0) return i;
  const r = document.createElement("span");
  r.className = s, s.includes("live-card-tag-overlay") && !s.includes("live-card-tag-more") ? r.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${t}` : r.textContent = t, r.style.visibility = "hidden", r.style.position = "absolute", r.style.left = "-9999px", r.style.top = "-9999px", r.style.pointerEvents = "none", document.body.appendChild(r);
  const a = r.getBoundingClientRect().width;
  return document.body.removeChild(r), B.set(e, a), a;
}
function ei() {
  B.clear();
}
function Ct(s) {
  const t = s.roomIdText ?? s.liveIdText ?? "", {
    containerWidth: e,
    tagTexts: i,
    idLeftOffset: r = 6,
    tagsRightOffset: a = 8,
    tagGap: n = 6,
    safeGap: o = 12,
    minVisibleTags: l = 2,
    maxVisibleTags: h = 99
  } = s, f = P("live-id-badge", t), L = r + f, K = e - a, v = i.map(
    (u) => P("live-card-tag-overlay", u)
  ), b = P("live-card-tag-overlay live-card-tag-more", "...");
  let E = 0, p = 0;
  for (let u = 0; u < v.length; u++) {
    const d = v[u], Y = v.length - u - 1, bt = Y > 0 ? b : 0, H = p > 0 ? n : 0, At = E + H + d + (Y > 0 ? n + bt : 0), z = K - At, Dt = Math.max(60, z - r - o);
    if (f > Dt || z < L + o)
      break;
    E += H + d, p++;
  }
  if (v.length - p > 0 && (E += n + b), i.length >= l && p < l) {
    let u = 0;
    for (let d = 0; d < l; d++)
      u += (d > 0 ? n : 0) + v[d];
    i.length > l && (u += n + b), p = l, E = u;
  }
  if (p > h) {
    p = h;
    let u = 0;
    for (let d = 0; d < h; d++)
      u += (d > 0 ? n : 0) + v[d];
    i.length > h && (u += n + b), E = u;
  }
  const Tt = K - E, wt = Math.max(
    60,
    Tt - r - o
  );
  return {
    visibleCount: p,
    showMore: i.length > p,
    idMaxWidth: `${Math.round(wt)}px`,
    tagsMaxWidth: `${Math.round(E)}px`
  };
}
function Gs(s, t, e, i, r) {
  return s.map((a) => {
    const n = t(a), o = e(a);
    return Ct({
      containerWidth: r,
      roomIdText: `${i("Room ID")}: ${n}`,
      tagTexts: o.map((l) => i(l))
    });
  });
}
class Fs {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = t.containerSelector, this.t = t.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(t, e) {
    const i = this.cache.get(t);
    if (i) return i;
    const r = Ct({
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
    this.cache.clear(), ei();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(t) {
    this.onResize = t;
    const e = document.querySelector(this.containerSelector);
    e && (this.resizeObserver = new ResizeObserver((i) => {
      var r;
      for (const a of i)
        if (a.contentRect.width > 0) {
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
      tagTexts: e.map((i) => this.t(i)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const t = document.querySelector(this.containerSelector);
    if (!t) return 300;
    const e = window.getComputedStyle(t), i = parseFloat(e.gap) || 8, r = e.gridTemplateColumns, a = r.match(/repeat\((\d+)/), n = a ? parseInt(a[1], 10) : r.split(" ").length || 1;
    return (t.clientWidth - i * (n - 1)) / n;
  }
}
const m = {
  sc: { code: "zh-Hans", label: "Simplified Chinese" },
  tc: { code: "zh-Hant", label: "Traditional Chinese" },
  en: { code: "en", label: "English" }
}, tt = {
  "zh-Hans": "sc",
  "zh-Hant": "tc",
  en: "en"
}, js = ["sc", "tc", "en"], Vs = 20, ks = 20, Bs = 20, Ws = 100, et = 20, $s = 45;
function vt(s) {
  return new TextEncoder().encode(s).length;
}
function Ks(s, t) {
  if (!s || t <= 0)
    return "";
  let e = "", i = 0;
  for (const r of s) {
    const a = vt(r);
    if (i + a > t)
      break;
    e += r, i += a;
  }
  return e;
}
function Ys(s) {
  if (!s) return "-";
  const t = typeof s == "number" ? s * 1e3 : parseInt(s) * 1e3, e = new Date(t), i = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), a = String(e.getDate()).padStart(2, "0"), n = String(e.getHours()).padStart(2, "0"), o = String(e.getMinutes()).padStart(2, "0"), l = String(e.getSeconds()).padStart(2, "0");
  return `${i}-${r}-${a} ${n}:${o}:${l}`;
}
function Hs(s) {
  return m[s];
}
function St(s) {
  const t = Object.entries(m).find(([e, i]) => i.code === s);
  return t ? t[0] : void 0;
}
function zs(s) {
  const t = St(s);
  return t ? m[t].label : s;
}
function qs(s) {
  return typeof s == "string" ? s : typeof s == "number" ? String(s) : s.Language || s.language || "";
}
function _t() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function ii(s, t) {
  return s == null ? void 0 : s.find((e) => e.language === t);
}
function si(s) {
  const t = _t(), e = [];
  if (!s || s.length === 0)
    return { config: t, langsToFetch: e };
  for (const i of s) {
    const r = i.language, a = St(r);
    a && (i.name || i.description ? t[a] = { name: i.name || "", description: i.description || "" } : e.push(a));
  }
  return { config: t, langsToFetch: e };
}
function ri(s, t) {
  const e = m[t].code, i = ii(s, e);
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
function ai(s) {
  return s.trim().toLowerCase();
}
function it(s, t) {
  return vt(s) > t;
}
function A(s, t) {
  const e = ai(t);
  return e ? s.filter((i) => {
    const r = (i.id || "").toLowerCase(), a = (i.name || "").toLowerCase(), n = (i.description || "").toLowerCase(), o = (i.categories || []).join(",").toLowerCase();
    return r.includes(e) || a.includes(e) || n.includes(e) || o.includes(e);
  }) : s;
}
function st(s) {
  const t = s.categories.map((r) => {
    const a = N(r.languageList, "categoryName", "categoryDescription");
    return {
      ...r,
      name: (a == null ? void 0 : a.name) || r.defaultName || r.name,
      description: (a == null ? void 0 : a.description) || r.defaultDescription || r.description
    };
  }), e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    e.set(String(r.id), r.name);
  }), { gifts: s.gifts.map((r) => {
    const a = N(r.languageList, "name", "description"), n = (r.categoryIds || []).map((o) => e.get(String(o)) || o);
    return {
      ...r,
      name: (a == null ? void 0 : a.name) || r.defaultName || r.name,
      description: (a == null ? void 0 : a.description) || r.defaultDescription || r.description,
      categories: n
    };
  }), categories: t };
}
const Xs = 10, Js = 20, Zs = 20, Qs = 60, W = "gift_categories_cache";
function ni(s) {
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
function oi(s, t = sessionStorage) {
  if (s.length !== 0)
    try {
      t.setItem(W, JSON.stringify(s));
    } catch {
    }
}
function ci(s = sessionStorage) {
  try {
    const t = s.getItem(W);
    return t ? (s.removeItem(W), ni(JSON.parse(t))) : [];
  } catch {
    return [];
  }
}
function li(s) {
  return s.map((t) => {
    const e = N(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: (e == null ? void 0 : e.name) || t.defaultName || t.name,
      description: (e == null ? void 0 : e.description) || t.defaultDescription || t.description
    };
  });
}
const tr = {
  viewBox: "0 0 24 24",
  path: "M11 6.5L5.5 12L11 17.5M6.75 12H19.75",
  strokeWidth: 2,
  strokeLinecap: "square"
}, er = {
  viewBox: "0 0 24 24",
  path: "M12 11V17M12 7V7.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
  strokeWidth: 2
}, ir = {
  viewBox: "0 0 24 24",
  path: "M6 9L12 15L18 9",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
class sr {
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
    const e = Se(this.currentUrl || void 0, t);
    return this.currentUrl = e, e;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (Lt(this.currentUrl), this.currentUrl = "");
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
const I = {
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
function rr(s) {
  const t = [
    { key: "liveId", i18nKey: c.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: I.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: c.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: I.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: c.COVER_IMAGE, className: "col-cover", width: I.COVER_WIDTH },
    { key: "anchor", i18nKey: c.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: I.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: c.CREATE_TIME, className: "live-list-col-time", width: I.CREATED_AT_WIDTH }
  ];
  return s.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: I.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: c.ACTIONS, className: "live-list-col-action", maxWidth: I.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function ar(s) {
  const { live: t, icons: e, t: i, onEnter: r, onDetail: a, onEdit: n, onDelete: o } = s;
  return [
    { key: "enter", label: i(c.ENTER_LIVE), title: i(c.ENTER_LIVE), icon: e.enter, onClick: () => r(t.liveId) },
    { key: "detail", label: i(c.LIVE_DETAILS), title: i(c.LIVE_DETAILS), icon: e.detail, onClick: () => a(t) },
    { key: "edit", label: i(c.EDIT), title: i(c.EDIT), icon: e.edit, onClick: () => n(t) },
    { key: "delete", label: i(c.DISSOLVE), title: i(c.DISSOLVE), icon: e.delete, danger: !0, onClick: () => o(t) }
  ];
}
async function hi(s, t) {
  var a;
  const e = ((a = s.anchor) == null ? void 0 : a.userId) || "", i = await ce({
    liveId: s.liveId,
    anchorId: e,
    getStreamInfoFailedMessage: t(c.GET_STREAM_INFO_FAILED)
  }), r = {
    visible: !0,
    live: s,
    robotId: i.robotId,
    streamInfo: null,
    robotStatus: "checking",
    robotStatusText: "",
    actionLoading: ""
  };
  return i.status === "ready" ? {
    snapshot: {
      ...r,
      robotStatus: "ready",
      robotStatusText: t(c.OBS_READY),
      streamInfo: i.streamInfo
    },
    toastError: i.streamInfoError || void 0
  } : i.status === "none" ? {
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
        error: i.errorMessage || t(c.NETWORK_ERROR)
      })
    }
  };
}
const rt = {
  visible: !1,
  live: null,
  robotId: "",
  streamInfo: null,
  robotStatus: "checking",
  robotStatusText: "",
  actionLoading: ""
}, at = {
  visible: !1,
  title: "",
  content: "",
  liveId: ""
};
class nr {
  constructor(t) {
    this.opts = t, this.state = {
      lives: [],
      loading: !1,
      refreshing: !1,
      currentPage: 1,
      hasMoreData: !0,
      searchInput: "",
      obsModal: { ...rt },
      confirmDialog: { ...at },
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
    const t = Je();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await He({
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
      const i = this.opts.t(c.LOAD_LIVE_LIST_FAILED);
      e instanceof Q ? this.opts.toast.error(J(e.errorCode, e.errorInfo, i)) : this.opts.toast.error(i);
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
    ze({
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
    return Ze(this.state.searchInput, Ye);
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
        const e = await Qe(t);
        e ? (this.setState({
          lives: [e],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.success(this.opts.t(c.SEARCH_SUCCESS))) : this.opts.toast.error(this.opts.t(c.LIVE_NOT_FOUND));
      } catch (e) {
        if (console.error("搜索直播失败:", e), e instanceof Q)
          this.opts.toast.error(J(
            e.errorCode,
            e.errorInfo,
            this.opts.t(c.LIVE_NOT_FOUND)
          ));
        else {
          const i = (e == null ? void 0 : e.message) || this.opts.t(c.NETWORK_ERROR);
          this.opts.toast.error(this.opts.t(c.SEARCH_FAILED, { error: i }));
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
    Xe({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await $(t);
    const i = e ?? this.opts.t(c.LIVE_ID);
    this.opts.toast.success(this.opts.t(c.COPY_LABEL_COPIED, { label: i }));
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
    const { snapshot: e, toastError: i } = await hi(t, this.opts.t);
    this.state.obsModal.visible && ((r = this.state.obsModal.live) == null ? void 0 : r.liveId) === t.liveId && this.setState({ obsModal: e }), i && this.opts.toast.error(i);
  }
  closeDetail() {
    this.setState({ obsModal: { ...rt } });
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
        const e = qe({
          currentPage: this.state.currentPage,
          hasMoreData: this.state.hasMoreData,
          livesLength: this.state.lives.length
        });
        await this.loadPage(e);
      } catch (e) {
        console.error("解散直播失败:", e), this.opts.toast.error(this.opts.t(c.DISSOLVE_FAILED));
      } finally {
        this.setState({ confirmDialog: { ...at } });
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
    const i = this.state.lives.map(
      (r) => r.liveId === e.liveId ? { ...r, liveName: t.liveName, coverUrl: t.coverUrl } : r
    );
    this.setState({ isEditModalVisible: !1, lives: i });
  }
}
const gi = { name: "", description: "" };
class or {
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
      giftLangConfig: _t(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...gi },
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
      const t = await this.opts.actions.fetchGiftList(), e = t.giftCategoryList || [], { gifts: i, categories: r } = st({
        gifts: t.giftList || [],
        categories: e
      });
      this.setState({
        giftList: i,
        displayList: A(i, this.state.searchInput),
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
    const { gifts: t, categories: e } = st({
      gifts: this.state.giftList,
      categories: this.state.categoryList
    });
    this.setState({
      giftList: t,
      categoryList: e,
      displayList: A(t, this.state.searchInput)
    });
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    const e = String(t ?? "");
    this.setState({ searchInput: e }), !it(e, et) && this.setState({ displayList: A(this.state.giftList, e) });
  }
  isSearchInputTooLong() {
    return it(this.state.searchInput, et);
  }
  /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
  search() {
    const t = this.state.searchInput.trim();
    if (!t) return;
    if (this.isSearchInputTooLong()) {
      this.opts.toast.error(this.opts.t(c.INPUT_TOO_LONG));
      return;
    }
    const e = A(this.state.giftList, this.state.searchInput);
    e.length > 0 ? (this.setState({ displayList: e }), this.opts.toast.success(this.opts.t("Found results", { count: e.length }))) : (this.setState({ displayList: [] }), this.opts.toast.error(this.opts.t("No gift found", { keyword: t })));
  }
  clearSearch() {
    this.setState({ searchInput: "", displayList: this.state.giftList });
  }
  // -------- 导航 / 复制 --------
  goToCategoryManagement() {
    oi(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await $(String(t || "")), this.opts.toast.success(this.opts.t(c.COPY_LABEL_COPIED, { label: this.opts.t(c.GIFT_ID) }));
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
    } catch (i) {
      throw this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
        error: this.extractErrorInfo(i)
      })), i;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openGiftLangConfigDialog(t) {
    const e = this.state.giftList.find((a) => a.id === t), { config: i, langsToFetch: r } = si(e == null ? void 0 : e.languageList);
    if (this.setState({
      editingId: t,
      giftLangConfig: i,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const a = await Promise.allSettled(
          r.map(async (o) => {
            const l = await this.opts.actions.getGiftLanguage({
              giftId: t,
              language: m[o].code
            });
            return { langKey: o, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const n = { ...this.state.giftLangConfig };
        for (const o of a)
          if (o.status === "fulfilled") {
            const { langKey: l, result: h } = o.value;
            n[l] = { name: h.name || "", description: h.description || "" };
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
    const i = this.state.giftList.find((n) => n.id === t), r = ri(i == null ? void 0 : i.languageList, e);
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
          language: m[e].code,
          name: i.name,
          description: i.description
        }), this.opts.toast.success(this.opts.t(c.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchGiftList(), r && this.state.editingLang === e && this.setState({
          giftLangConfig: {
            ...this.state.giftLangConfig,
            [e]: { ...i }
          }
        });
      } catch (a) {
        this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
          error: this.extractErrorInfo(a)
        }));
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftLanguage({ giftId: t, language: m[e].code }), this.opts.toast.success(this.opts.t(c.LANGUAGE_CONFIG_CLEARED)), this.setState({
        giftLangConfig: {
          ...this.state.giftLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchGiftList();
    } catch (i) {
      this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
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
        }), this.opts.toast.success(this.opts.t(c.CATEGORY_ADDED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
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
        }), this.opts.toast.success(this.opts.t(c.CATEGORY_REMOVED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(c.OPERATION_FAILED, {
          error: this.extractErrorInfo(i)
        }));
      } finally {
        this.setState({ categoryDeleteVisible: !1, deletingCategoryId: "" });
      }
  }
  /** 根据类别 ID 取本地化名称（视图层渲染用） */
  getCategoryName(t) {
    const e = this.state.allCategories.find((i) => String(i.id) === String(t));
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
    const i = t;
    return i != null && i.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i != null && i.message ? `${e}: ${i.message}` : e;
  }
}
const nt = {
  categoryId: "",
  name: "",
  description: ""
}, ot = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, ct = { name: "", description: "" };
class cr {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      categoryList: [],
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      formData: { ...nt },
      langConfigVisible: !1,
      categoryLangConfig: lt(ot),
      langEditVisible: !1,
      editingLang: null,
      editingCategoryForLang: "",
      langEditForm: { ...ct },
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
      const e = ci();
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
    this.state.categoryList.length !== 0 && this.setState({ categoryList: li(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await $(String(t || "")), this.opts.toast.success(
      this.opts.t(c.COPY_LABEL_COPIED, { label: this.opts.t(c.CATEGORY_ID) })
    );
  }
  // -------- 新增 / 编辑弹窗 --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      formData: { ...nt },
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
    const e = this.state.categoryList.find((a) => a.id === t), i = lt(ot), r = [];
    if (e != null && e.languageList && e.languageList.length > 0)
      for (const a of e.languageList) {
        const n = x(a);
        n.langKey && (n.name || n.description ? i[n.langKey] = { name: n.name, description: n.description } : r.push(n.langKey));
      }
    if (this.setState({
      editingId: t,
      categoryLangConfig: i,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const a = await Promise.allSettled(
          r.map(async (o) => {
            const l = await this.opts.actions.getGiftCategoryLanguage(
              t,
              m[o].code
            );
            return { langKey: o, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const n = { ...this.state.categoryLangConfig };
        for (const o of a)
          if (o.status === "fulfilled") {
            const { langKey: l, result: h } = o.value;
            n[l] = { name: h.name || "", description: h.description || "" };
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
    var o;
    const i = this.state.categoryList.find((l) => l.id === t), r = m[e].code, a = (o = i == null ? void 0 : i.languageList) == null ? void 0 : o.find((l) => x(l).langCode === r);
    let n = { ...ct };
    if (a) {
      const l = x(a);
      if (l.name || l.description)
        n = { name: l.name, description: l.description };
      else
        try {
          const h = await this.opts.actions.getGiftCategoryLanguage(t, r);
          n = { name: h.name || "", description: h.description || "" };
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
          m[e].code,
          i.name,
          i.description
        ), this.opts.toast.success(this.opts.t(c.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchCategoryList(!1), r && this.state.editingId === t && this.state.editingLang === e && this.setState({
          categoryLangConfig: {
            ...this.state.categoryLangConfig,
            [e]: { ...i }
          }
        });
      } catch (a) {
        this.opts.toast.error(
          this.opts.t(c.OPERATION_FAILED, { error: this.extractErrorInfo(a) })
        );
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftCategoryLanguage(t, m[e].code), this.opts.toast.success(this.opts.t(c.LANGUAGE_CONFIG_CLEARED)), this.setState({
        categoryLangConfig: {
          ...this.state.categoryLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchCategoryList(!1);
    } catch (i) {
      this.opts.toast.error(
        this.opts.t(c.OPERATION_FAILED, { error: this.extractErrorInfo(i) })
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
    const i = t;
    return i != null && i.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i != null && i.message ? `${e}: ${i.message}` : e;
  }
}
function lt(s) {
  return {
    sc: { ...s.sc },
    tc: { ...s.tc },
    en: { ...s.en }
  };
}
function x(s) {
  if (typeof s == "string")
    return { langCode: s, langKey: tt[s], name: "", description: "" };
  const t = s.language || "";
  return {
    langCode: t,
    langKey: t ? tt[t] : void 0,
    name: s.categoryName || "",
    description: s.categoryDescription || ""
  };
}
export {
  Cs as $,
  fs as A,
  Si as B,
  Qs as C,
  ue as D,
  de as E,
  V as F,
  W as G,
  Ye as H,
  er as I,
  ds as J,
  Q as K,
  Et as L,
  bs as M,
  nr as N,
  mi as O,
  Xs as P,
  ti as Q,
  It as R,
  vi as S,
  ts as T,
  w as U,
  M as V,
  sr as W,
  $s as X,
  je as Y,
  Ji as Z,
  Mi as _,
  tr as a,
  Yi as a$,
  Ve as a0,
  ar as a1,
  hi as a2,
  Gi as a3,
  oi as a4,
  Ii as a5,
  Ms as a6,
  Ci as a7,
  yi as a8,
  ze as a9,
  Oi as aA,
  Os as aB,
  _s as aC,
  Ns as aD,
  Pi as aE,
  Ys as aF,
  S as aG,
  ps as aH,
  Zi as aI,
  Is as aJ,
  ls as aK,
  J as aL,
  hs as aM,
  si as aN,
  ri as aO,
  qs as aP,
  Hs as aQ,
  St as aR,
  zs as aS,
  rr as aT,
  qe as aU,
  xs as aV,
  Bi as aW,
  pi as aX,
  Be as aY,
  Hi as aZ,
  rs as a_,
  mt as aa,
  ei as ab,
  We as ac,
  Ct as ad,
  Gs as ae,
  ci as af,
  ni as ag,
  $ as ah,
  ji as ai,
  ms as aj,
  Ls as ak,
  _t as al,
  es as am,
  R as an,
  ve as ao,
  Qi as ap,
  $e as aq,
  Ds as ar,
  vs as as,
  ki as at,
  _e as au,
  wi as av,
  He as aw,
  _i as ax,
  A as ay,
  ws as az,
  Fs as b,
  Ps as b0,
  ke as b1,
  bi as b2,
  ns as b3,
  ys as b4,
  xi as b5,
  it as b6,
  Ze as b7,
  Ti as b8,
  Ri as b9,
  Ts as bA,
  Rs as bB,
  Us as bC,
  Ks as bD,
  Ui as bE,
  Di as bF,
  Es as bG,
  Xi as bH,
  qi as bI,
  zi as bJ,
  Ie as bK,
  X as bL,
  Ei as bM,
  Ee as bN,
  ye as bO,
  Ce as bP,
  os as ba,
  cs as bb,
  as as bc,
  Wi as bd,
  pe as be,
  $i as bf,
  Le as bg,
  As as bh,
  Ai as bi,
  ai as bj,
  Ni as bk,
  is as bl,
  Ki as bm,
  li as bn,
  st as bo,
  Se as bp,
  gs as bq,
  us as br,
  Te as bs,
  ss as bt,
  Je as bu,
  Lt as bv,
  Fi as bw,
  Xe as bx,
  Qe as by,
  Vi as bz,
  fe as c,
  Js as d,
  Zs as e,
  ir as f,
  y as g,
  Fe as h,
  ge as i,
  Ge as j,
  Ss as k,
  Bs as l,
  Ws as m,
  Vs as n,
  ks as o,
  et as p,
  cr as q,
  or as r,
  Li as s,
  F as t,
  tt as u,
  js as v,
  m as w,
  Ne as x,
  k as y,
  Ke as z
};
