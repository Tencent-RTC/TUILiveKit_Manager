import { T as u } from "./trtc.CALAaa5v.js";
import { c as f } from "./logger.DRLw23-l.js";
const i = f("TUIPlayer"), v = {
  LIVE: "live"
  // 直播场景
}, y = {
  AUDIENCE: "audience"
  // 观众
}, c = {
  MAIN: "main"
  // 主流（大画面）
};
class p {
  constructor(t, s) {
    this.viewId = "", this.trtc = null, this.currentPlayableUserId = "", this.eventHandlers = {}, this.currentState = "IDLE", this.account = null, this.handleUserVideoAvailable = async (e) => {
      i.debug("handleVideoEvent", "REMOTE_VIDEO_AVAILABLE raw event", e);
      let r, a;
      if (typeof e == "string")
        r = e, a = !0;
      else if (e && typeof e == "object")
        r = e.userId || e.uid || e.user || "", a = e.isAvailable !== void 0 ? e.isAvailable : e.available !== void 0 ? e.available : !0;
      else {
        i.error("handleVideoEvent", "Unexpected event structure", e);
        return;
      }
      if (i.debug("handleVideoEvent", "REMOTE_VIDEO_AVAILABLE parsed", { userId: r, isAvailable: a, liveId: this.liveId }), !!this.isMixedStreamUser(r) && this.isCurrentLiveMixedStreamUser(r) && a) {
        this.currentPlayableUserId = r;
        const o = this.getViewElement();
        o && this.trtc && (await this.trtc.startRemoteVideo({
          userId: r,
          streamType: c.MAIN,
          view: o,
          option: {
            fillMode: "cover"
          }
        }), this.currentState = "playing", i.info("handleVideoEvent", `Started remote video for ${r}`));
      }
    }, this.handleUserAudioAvailable = (e) => {
      i.debug("handleAudioEvent", "REMOTE_AUDIO_AVAILABLE raw event", e);
      let r, a;
      if (typeof e == "string")
        r = e, a = !0;
      else if (e && typeof e == "object")
        r = e.userId || e.uid || e.user || "", a = e.isAvailable !== void 0 ? e.isAvailable : e.available !== void 0 ? e.available : !0;
      else {
        i.error("handleAudioEvent", "Unexpected audio event structure", e);
        return;
      }
      i.debug("handleAudioEvent", "REMOTE_AUDIO_AVAILABLE parsed", { userId: r, isAvailable: a, liveId: this.liveId }), this.isMixedStreamUser(r) && this.isCurrentLiveMixedStreamUser(r) && (this.currentPlayableUserId = r);
    }, this.handleError = (e) => {
      i.error("handleError", "TRTC error", e), this.currentState = "error", this.eventHandlers.onError && this.eventHandlers.onError(e);
    }, this.liveId = t, s && (this.account = s);
  }
  /**
   * 设置账号信息（在 play 之前调用）
   */
  setAccount(t) {
    this.account = t;
  }
  /**
   * 获取播放器信息
   */
  getPlayerInfo() {
    return {
      liveId: this.liveId,
      state: this.currentState
    };
  }
  /**
   * 设置播放事件监听器
   */
  on(t, s) {
    this.eventHandlers[t] = s;
  }
  /**
   * 移除播放事件监听器
   */
  off(t) {
    delete this.eventHandlers[t];
  }
  /**
   * 初始化 TRTC SDK
   */
  initTRTC() {
    this.trtc || (this.trtc = u.create(), this.bindEvents());
  }
  /**
   * 绑定 TRTC 事件
   */
  bindEvents() {
    this.trtc && (this.trtc.on("remote-video-available", this.handleUserVideoAvailable), this.trtc.on("remote-audio-available", this.handleUserAudioAvailable), this.trtc.on("error", this.handleError));
  }
  /**
   * 解绑 TRTC 事件
   */
  unbindEvents() {
    this.trtc && (this.trtc.off("remote-video-available", this.handleUserVideoAvailable), this.trtc.off("remote-audio-available", this.handleUserAudioAvailable), this.trtc.off("error", this.handleError));
  }
  /**
   * 获取进房参数
   */
  getEnterRoomParams() {
    if (!this.account)
      throw new Error("Account not configured. Please call setAccount() first.");
    return {
      sdkAppId: this.account.sdkAppId,
      userId: this.account.userId,
      userSig: this.account.userSig,
      strRoomId: this.liveId,
      // 使用 strRoomId 不是 roomId
      role: y.AUDIENCE,
      scene: v.LIVE,
      autoReceiveVideo: !1,
      autoReceiveAudio: !1
    };
  }
  /**
   * 获取视图容器元素
   */
  getViewElement() {
    return document.getElementById(this.viewId);
  }
  /**
   * 开始播放
   * @param container 视频容器元素或ID
   * @param url 播放地址（可选，TRTC 不需要）
   */
  async play(t, s) {
    if (this.currentState === "playing" || this.currentState === "buffering") {
      i.warn("play", `Live ${this.liveId} is already playing`);
      return;
    }
    try {
      if (typeof t == "string")
        this.viewId = t;
      else if (t.id)
        this.viewId = t.id;
      else
        throw new Error("Container must have an id attribute");
      if (i.info("play", `Starting playback for live ${this.liveId} with container: ${this.viewId}`), this.currentState = "buffering", this.initTRTC(), !this.trtc)
        throw new Error("Failed to initialize TRTC");
      const e = this.getEnterRoomParams();
      await this.trtc.enterRoom(e), this.eventHandlers.onPlay && this.eventHandlers.onPlay();
    } catch (e) {
      throw this.currentState = "error", this.eventHandlers.onError && this.eventHandlers.onError(e), e;
    }
  }
  /**
   * 停止播放
   */
  async stop() {
    if (!(this.currentState === "idle" || this.currentState === "stopped")) {
      i.info("stop", `Stopping playback for live ${this.liveId}`);
      try {
        this.trtc && this.currentPlayableUserId && await this.trtc.stopRemoteVideo({
          userId: this.currentPlayableUserId,
          streamType: c.MAIN
        }), this.currentState = "stopped", this.eventHandlers.onStop && this.eventHandlers.onStop();
      } catch (t) {
        i.error("stop", "Stop error", t);
      }
    }
  }
  /**
   * 暂停播放
   */
  async pause() {
    this.currentState === "playing" && (i.info("pause", `Pausing playback for live ${this.liveId}`), this.currentState = "paused");
  }
  /**
   * 恢复播放
   */
  async resume() {
    this.currentState === "paused" && (i.info("resume", `Resuming playback for live ${this.liveId}`), this.currentState = "playing");
  }
  /**
   * 销毁播放器
   *
   * exitRoom 是异步网络调用，可能因网络异常而长时间挂起。
   * 如果 exitRoom 挂起，trtc.destroy() 永远不会被调用，
   * 底层 RTCPeerConnection 不会被释放，造成内存泄露。
   * 因此添加超时保护：无论 exitRoom 是否成功，最终都会调用 destroy() 释放资源。
   */
  async destroy() {
    i.info("destroy", `Destroying player for live ${this.liveId}`);
    const t = this.trtc;
    if (this.trtc = null, t) {
      try {
        await Promise.race([
          t.exitRoom(),
          new Promise((s) => setTimeout(() => {
            i.warn("destroy", `exitRoom timed out for live ${this.liveId}, forcing destroy`), s();
          }, 3e3))
        ]);
      } catch (s) {
        i.warn("destroy", `exitRoom error for live ${this.liveId}:`, s);
      }
      try {
        t.destroy();
      } catch (s) {
        i.warn("destroy", `trtc.destroy error for live ${this.liveId}:`, s);
      }
    }
    this.viewId = "", this.currentPlayableUserId = "", this.eventHandlers = {}, this.currentState = "idle";
  }
  /**
   * 设置音量
   */
  setVolume(t) {
    i.info("setVolume", `Setting volume to ${t} for live ${this.liveId}`);
  }
  /**
   * 静音/取消静音
   */
  setMute(t) {
    i.info("setMute", `Setting mute to ${t} for live ${this.liveId}`), this.trtc && this.currentPlayableUserId && this.trtc.muteRemoteAudio(this.currentPlayableUserId, t);
  }
  /**
   * 获取当前播放状态
   */
  getState() {
    return this.currentState;
  }
  /**
   * 截图
   */
  captureSnapshot() {
    i.info("captureSnapshot", `Capturing snapshot for live ${this.liveId}`);
  }
  /**
   * 判断是否是混流用户
   */
  isMixedStreamUser(t) {
    return !t || typeof t != "string" ? (i.warn("isMixedStreamUser", `Invalid userId: ${t}`), !1) : t.startsWith("livekit_");
  }
  /**
   * 判断是否是当前直播间的混流用户
   */
  isCurrentLiveMixedStreamUser(t) {
    return this.isMixedStreamUser(t) && t.includes(this.liveId);
  }
}
const I = 50, A = 1800 * 1e3;
function b(l) {
  const t = /* @__PURE__ */ new Map(), s = () => {
    if (t.size <= I) return;
    let e = "", r = 1 / 0;
    for (const [a, o] of t)
      o.cachedAt < r && (r = o.cachedAt, e = a);
    e && t.delete(e);
  };
  return (e) => {
    const r = new p(e), a = r.play.bind(r);
    return r.play = async (o, h) => {
      let n = t.get(e);
      if (n && Date.now() - n.cachedAt > A && (t.delete(e), n = void 0), !n) {
        const d = await l(e);
        if (!d) throw new Error(`[PooledFactory] Failed to get account for live ${e}`);
        n = { account: d, cachedAt: Date.now() }, t.set(e, n), s();
      }
      return r.setAccount(n.account), a(o, h);
    }, r;
  };
}
export {
  b as c
};
