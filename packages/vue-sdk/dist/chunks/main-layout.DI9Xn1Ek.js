import { aA as i, aB as c, I as f, av as F, am as k, ac as V, af as B } from "./en-US.CklcmnrB.js";
function fe(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function de(e, t = !1) {
  return typeof e == "boolean" ? e : typeof e == "number" ? e !== 0 : typeof e == "string" ? e === "true" || e === "1" : t;
}
function K(e) {
  if (!e) return {};
  if (typeof e == "object" && !Array.isArray(e))
    return Object.fromEntries(
      Object.entries(e).map(([t, n]) => [t, String(n ?? "")])
    );
  if (typeof e != "string") return {};
  try {
    const t = JSON.parse(e);
    if (t && typeof t == "object" && !Array.isArray(t))
      return Object.fromEntries(
        Object.entries(t).map(([n, o]) => [n, String(o ?? "")])
      );
  } catch {
    return {};
  }
  return {};
}
function C(e) {
  const t = e.RoomId || "", n = e.Owner_Account || "", o = {
    liveId: t,
    liveName: e.RoomName || "",
    coverUrl: e.CoverURL || "",
    anchor: {
      userId: n,
      nick: n,
      avatarUrl: ""
    },
    onlineCount: 0,
    // 列表不返回实时在线人数，需要通过 getLiveStatistic 单独获取
    createdAt: e.CreateTime && e.CreateTime > 1e9 ? e.CreateTime : 0,
    category: (e.Category || []).map(String),
    // number[] → string[]
    activityStatus: e.ActivityStatus || 0,
    isMessageDisabled: !1,
    isLikeEnabled: !0,
    isPublicVisible: !0,
    stats: {
      liveId: t,
      viewCount: e.ViewCount ?? 0,
      onlineCount: 0,
      likeCount: 0,
      giftCount: 0,
      giftAmount: 0,
      commentCount: 0,
      duration: 0
    }
  };
  if ("RoomType" in e) {
    const r = e;
    return {
      ...o,
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
      customInfo: r.CustomInfo ? K(r.CustomInfo) : {}
    };
  }
  return o;
}
async function G(e = {}) {
  const t = e.next || "0", n = e.count || 20, o = await i(c.fetchLiveList, {
    Next: t,
    Count: n,
    SortDirection: e.sortDirection
  });
  if (o.ErrorCode !== 0)
    throw new Error(`Get live list failed: ${o.ErrorInfo || "Unknown error"} (code: ${o.ErrorCode})`);
  return {
    list: (o.Response?.RoomList || []).map(
      (s) => C(s)
    ),
    next: o.Response?.Next || ""
  };
}
async function D(e) {
  const [t, n] = await Promise.all([
    i(c.getRoomInfo, { RoomId: e }),
    i(c.getRoomMetadata, { RoomId: e, Keys: [] })
  ]);
  if (!t.Response?.RoomInfo) return null;
  const o = C(t.Response.RoomInfo);
  if (n?.Response?.Metadata) {
    const r = { ...o.customInfo || {} };
    (n.Response.Metadata || []).forEach((s) => {
      r[s.Key] = s.Value;
    }), o.customInfo = r;
  }
  return o;
}
async function me(e) {
  return i(c.getLiveStatistic, { RoomId: e });
}
async function ge(e) {
  return i(c.destroyRoom, { RoomId: e });
}
async function Ie(e) {
  const t = e.liveId || String(Date.now()), n = {
    RoomId: t,
    RoomType: "Live",
    SeatTemplate: e.seatTemplate || "VideoDynamicGrid9Seats",
    Owner_Account: e.anchorId,
    IsUnlimitedRoomEnabled: !0
  };
  if (e.useObsStreaming && (n.KeepOwnerOnSeat = !1), e.liveName && e.liveName.trim() && (n.RoomName = e.liveName), e.coverUrl && e.coverUrl.trim() && (n.CoverURL = e.coverUrl.trim()), e.maxSeatCount && (e.seatTemplate === "AudioSalon" || e.seatTemplate === "Karaoke") && (n.MaxSeatCount = Number(e.maxSeatCount)), await i(c.createLive, { RoomInfo: n }), e.customInfo && Object.keys(e.customInfo).length > 0) {
    const r = Object.entries(e.customInfo).map(([s, a]) => ({ Key: s, Value: a }));
    await i(c.setRoomMetadata, { RoomId: t, Metadata: r });
  }
  const o = await D(t);
  if (!o)
    throw new Error("创建直播成功，但获取详情失败");
  return o;
}
async function Ae(e, t) {
  const n = [], o = { RoomId: e, IsUnlimitedRoomEnabled: !0 };
  if (t.liveName !== void 0 && (o.RoomName = t.liveName), t.coverUrl !== void 0 && (o.CoverURL = t.coverUrl), t.isMessageDisabled !== void 0 && (o.IsMessageDisabled = t.isMessageDisabled), n.push(i(c.updateLiveInfo, { RoomInfo: o })), t.customInfo && Object.keys(t.customInfo).length > 0) {
    const s = Object.entries(t.customInfo).map(([a, u]) => ({ Key: a, Value: u }));
    n.push(i(c.setRoomMetadata, { RoomId: e, Metadata: s }));
  }
  return t.deleteKeys && t.deleteKeys.length > 0 && n.push(i(c.delRoomMetadata, { RoomId: e, Keys: t.deleteKeys })), (await Promise.all(n))[0];
}
async function $(e, t, n = 600) {
  return i(c.muteMember, { RoomId: e, MemberList_Account: t, MuteTime: n });
}
async function j(e, t) {
  return i(c.muteMember, { RoomId: e, MemberList_Account: t, MuteTime: 0 });
}
async function Y(e, t, n = 3600, o = "") {
  return i(c.banMember, { RoomId: e, MemberList_Account: t, Duration: n, Reason: o });
}
async function W(e, t) {
  return i(c.unbanMember, { RoomId: e, MemberList_Account: t });
}
async function z(e, t = {}) {
  return i(c.getMutedMemberList, {
    RoomId: e,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function X(e, t = {}) {
  return i(c.getBannedMemberList, {
    RoomId: e,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function ye(e) {
  return i(c.getRobot, { RoomId: e });
}
async function Le(e) {
  return i(c.getSeatList, { RoomId: e });
}
async function he(e, t, n = 0) {
  return i(c.pickUserOnSeat, { RoomId: e, Member_Account: t, Index: n });
}
async function ve(e, t) {
  return i(c.addRobot, { RoomId: e, RobotList_Account: t });
}
async function be(e, t, n) {
  return i(c.importAccount, { UserID: e, Nick: t || "", FaceUrl: "" });
}
function Se(e) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(e);
}
function Me(e) {
  return /\.svga(\?|$)/i.test(e);
}
function Te(e) {
  return e instanceof File ? e.name.toLowerCase().endsWith(".svga") : !1;
}
function Re(e) {
  return e.type.startsWith("video/");
}
function b(e) {
  return new TextEncoder().encode(e).length;
}
function Ee(e) {
  return new Promise((t, n) => {
    const o = new FileReader();
    o.onload = () => t(o.result), o.onerror = n, o.readAsDataURL(e);
  });
}
const I = {
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
function _e(e) {
  return I[e];
}
function Ce(e, t) {
  return Math.max(1, Math.ceil(e / t));
}
function De(e, t) {
  return Math.max(1, Math.min(e, t));
}
function pe(e, t) {
  return (e - 1) * t;
}
function Oe(e, t, n) {
  const o = (e - 1) * t + 1, r = Math.min(e * t, n);
  return { start: o, end: r };
}
const Ne = {
  field: "createTime",
  direction: "descend"
}, J = I.liveList, S = "liveList_currentPage", M = "liveList_pageCursors", we = 1024;
class xe extends Error {
  constructor(t, n, o = "Load Live List Failed") {
    super(n || o), this.name = "LiveListApiError", this.errorCode = t, this.errorInfo = n;
  }
}
function E() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function Ue(e) {
  const { page: t, pageCursors: n, pageSize: o = J } = e, r = n.get(t) || "", { list: s, next: a } = await G({ next: r, count: o, sortDirection: "descend" }), u = s, l = new Map(n);
  return a && u.length > 0 && l.set(t + 1, a), {
    lives: u,
    currentPage: t,
    hasMoreData: !!a && u.length === o,
    pageCursors: l,
    response: { ErrorCode: 0, Response: { RoomList: s, Next: a } }
  };
}
function Pe(e) {
  const { targetPage: t, currentPage: n, hasMoreData: o } = e;
  return !(t < 1 || t > n && !o);
}
function Fe(e) {
  const { currentPage: t, hasMoreData: n, livesLength: o } = e;
  return !n && o <= 1 && t > 1 ? t - 1 : t;
}
function ke(e) {
  const t = e.storage || sessionStorage;
  try {
    t.setItem(S, String(e.currentPage)), t.setItem(M, JSON.stringify(Array.from(e.pageCursors.entries())));
  } catch {
  }
}
function Ve(e = sessionStorage) {
  let t = 1, n = E();
  try {
    const o = e.getItem(S), r = e.getItem(M);
    if (e.removeItem(S), e.removeItem(M), o && r) {
      const s = Number(o);
      if (s > 0) {
        const a = JSON.parse(r);
        n = new Map(a), t = s;
      }
    }
  } catch {
    t = 1, n = E();
  }
  return { pageToLoad: t, pageCursors: n };
}
function Be(e, t) {
  return b(e) > t;
}
async function Ke(e) {
  return await D(e);
}
function Ge(e) {
  return e ? new Date(e * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function $e(e, t) {
  const { field: n, direction: o } = t, r = [...e], s = o === "ascend" ? 1 : -1;
  return r.sort((a, u) => {
    let l = 0;
    switch (n) {
      case "createTime":
        l = (a.createdAt || 0) - (u.createdAt || 0);
        break;
      case "viewerCount":
        l = (a.onlineCount || 0) - (u.onlineCount || 0);
        break;
      case "duration": {
        const h = a.endedAt ? a.endedAt - a.createdAt : Date.now() / 1e3 - a.createdAt, v = u.endedAt ? u.endedAt - u.createdAt : Date.now() / 1e3 - u.createdAt;
        l = h - v;
        break;
      }
      case "status": {
        const h = a.endedAt ? 1 : 0, v = u.endedAt ? 1 : 0;
        l = h - v;
        break;
      }
      default:
        l = 0;
    }
    return l * s;
  }), r;
}
function je(e, t) {
  let n = e;
  return t.status && (t.status === "ongoing" ? n = n.filter((o) => !o.endedAt) : t.status === "ended" && (n = n.filter((o) => !!o.endedAt))), t.anchorId && (n = n.filter((o) => o.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (n = n.filter((o) => !o.category || o.category.length === 0 ? !1 : t.tags.some((r) => o.category.includes(r)))), t.customFilter && (n = n.filter(t.customFilter)), n;
}
class Ye {
  constructor(t = {}) {
    this.cache = /* @__PURE__ */ new Map(), this.ttl = t.ttl || 300 * 1e3, this.maxPages = t.maxPages || 10;
  }
  /**
   * 设置缓存
   * @param page 页码
   * @param data 数据
   * @param hasMoreData 是否有更多数据
   */
  set(t, n, o) {
    if (this.cache.size >= this.maxPages) {
      const r = Array.from(this.cache.entries()).sort((s, a) => s[1].timestamp - a[1].timestamp)[0]?.[0];
      r !== void 0 && this.cache.delete(r);
    }
    this.cache.set(t, {
      data: n,
      timestamp: Date.now(),
      hasMoreData: o
    });
  }
  /**
   * 获取缓存
   * @param page 页码
   * @returns 缓存数据或 null（如果不存在或已过期）
   */
  get(t) {
    const n = this.cache.get(t);
    return n ? Date.now() - n.timestamp > this.ttl ? (this.cache.delete(t), null) : n : null;
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
    for (const [n, o] of this.cache.entries())
      t - o.timestamp > this.ttl && this.cache.delete(n);
  }
  /**
   * 获取缓存统计信息
   */
  getStats() {
    return {
      size: this.cache.size,
      pages: Array.from(this.cache.keys()).sort((t, n) => t - n)
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
      const n = Array.from(this.cache.entries()).sort((o, r) => o[1].timestamp - r[1].timestamp)[0]?.[0];
      n !== void 0 && this.cache.delete(n);
    }
  }
}
const We = I.mutedList, ze = I.bannedList, H = 600, Z = 86400, p = (e) => Array.isArray(e) ? e.filter((t) => !!t && typeof t == "object") : [], T = (e, ...t) => {
  const n = t.map((o) => e[o]).find((o) => typeof o == "string" && o.length > 0);
  return typeof n == "string" ? n : "";
}, O = (e, ...t) => {
  const n = t.map((r) => e[r]).find((r) => r != null), o = Number(n || 0);
  return Number.isFinite(o) ? o : 0;
}, L = (e) => e.memberAccounts || e.userIds || [];
async function Xe(e) {
  const t = await z(e);
  return p(t.Response?.MutedAccountList || t.MutedAccountList).map((o) => ({
    userId: T(o, "Member_Account", "userId", "UserID"),
    endTime: O(o, "MutedUntil", "endTime")
  })).filter((o) => o.userId);
}
function Je(e, t) {
  const n = Math.floor(Date.now() / 1e3);
  return t.some((o) => o.userId === e && o.endTime > n);
}
async function He(e) {
  const t = await X(e);
  return p(t.Response?.BannedAccountList || t.BannedAccountList).map((o) => ({
    userId: T(o, "Member_Account", "userId", "UserID"),
    endTime: O(o, "BannedUntil", "endTime"),
    reason: T(o, "Reason", "reason") || void 0
  })).filter((o) => o.userId);
}
function Ze(e, t) {
  const n = Math.floor(Date.now() / 1e3);
  return t.some((o) => o.userId === e && o.endTime > n);
}
async function qe(e) {
  const { liveId: t } = e, n = L(e), o = e.muteTime ?? e.duration ?? H;
  await $(t, n, o);
}
async function Qe(e) {
  const { liveId: t } = e, n = L(e);
  await j(t, n);
}
async function et(e) {
  const { liveId: t, reason: n = "" } = e, o = L(e), r = e.banTime ?? e.duration ?? Z;
  await Y(t, o, r, n);
}
async function tt(e) {
  const { liveId: t } = e, n = L(e);
  await W(t, n);
}
function N(e) {
  return `${e}_robot`;
}
function nt(e, t) {
  return e === N(t);
}
function ot(e, t) {
  const n = N(t);
  return e.filter((o) => o !== n);
}
function rt(e) {
  const t = Math.floor(Date.now() / 1e3), n = e - t;
  if (n <= 0)
    return "已过期";
  const o = Math.floor(n / 3600), r = Math.floor(n % 3600 / 60);
  return o > 0 ? `${o}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function at(e) {
  const t = Math.floor(Date.now() / 1e3);
  return e <= t;
}
class q {
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
  debug(t, n, o) {
    this.log("debug", t, n, o);
  }
  /**
   * 信息日志
   */
  info(t, n, o) {
    this.log("info", t, n, o);
  }
  /**
   * 警告日志
   */
  warn(t, n, o) {
    this.log("warn", t, n, o);
  }
  /**
   * 错误日志
   */
  error(t, n, o) {
    this.log("error", t, n, o), this.config.enableReport && o && this.reportError(t, n, o);
  }
  /**
   * 统一日志输出
   */
  log(t, n, o, r) {
    if (!this.config.enableConsole) return;
    const a = `${this.config.prefix ? `[${this.config.prefix}]` : ""}[${n}] ${o}`;
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
  reportError(t, n, o) {
  }
}
new q({ prefix: "LiveKit" });
const R = [
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
], _ = [
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
], Q = [
  ...R,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function y(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function w(e) {
  return typeof e == "string" ? e.trim() : "";
}
function g(e, t) {
  if (!e) return "";
  for (const n of t) {
    const o = w(e[n]);
    if (o)
      return o;
  }
  return "";
}
function m(e) {
  if (y(e))
    return e;
  if (typeof e == "string")
    try {
      const t = JSON.parse(e);
      return y(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function x(e) {
  return [
    m(e.liveOwner),
    m(e.anchor),
    m(e.owner),
    m(e.host),
    m(e.userInfo),
    m(e.sender)
  ];
}
function st(e) {
  const t = (e || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function it(e) {
  if (!y(e))
    return "";
  const t = g(e, R);
  if (t)
    return t;
  for (const o of x(e)) {
    const r = g(o, R);
    if (r)
      return r;
  }
  const n = m(
    e.CustomINFO ?? e.customInfo ?? e.customData ?? e.metadata
  );
  return g(n, Q);
}
function ct(e, t = "") {
  if (typeof e == "string")
    return e.trim() || t;
  if (!y(e))
    return t;
  const n = g(e, _);
  if (n)
    return n;
  const o = w(e.liveOwner);
  if (o)
    return o;
  for (const r of x(e)) {
    const s = g(r, _);
    if (s)
      return s;
  }
  return t;
}
const ee = "live_", ut = 43, lt = 100, te = "VideoDynamicGrid9Seats", ne = 8, A = 9 / 16, U = 16 / 9, d = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, oe = [
  { value: "VideoDynamicGrid9Seats", labelKey: f.DYNAMIC_GRID_LAYOUT, descKey: f.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: f.FLOATING_WINDOW_LAYOUT, descKey: f.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: f.FIXED_GRID_LAYOUT, descKey: f.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: f.FIXED_WINDOW_LAYOUT, descKey: f.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: f.LANDSCAPE_BROADCASTING, descKey: f.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function ft() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: te,
    maxSeatCount: ne
  };
}
function dt() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function re(e) {
  return `${ee}${e}`;
}
function ae(e) {
  return e === "AudioSalon" || e === "Karaoke";
}
function se(e) {
  return oe.find((t) => t.value === e);
}
function mt(e) {
  return se(e)?.orientation === "landscape" ? U : A;
}
function gt(e) {
  return !e.key.trim() && !!e.value.trim();
}
function ie(e) {
  const t = {};
  for (const n of e) {
    const o = n.key.trim();
    o && (t[o] = n.value);
  }
  return t;
}
function It(e) {
  const t = {};
  let n = 0;
  for (const r of e) {
    const s = r.key.trim();
    if (!s) continue;
    const a = b(s);
    if (a > d.maxKeyBytes)
      return { type: "key-too-long", key: s, max: d.maxKeyBytes, current: a };
    const u = b(r.value);
    if (u > d.maxValueBytes)
      return { type: "value-too-long", key: s, max: d.maxValueBytes, current: u };
    n += u, t[s] = r.value;
  }
  const o = Object.keys(t).length;
  return o > d.maxCount ? { type: "max-count", max: d.maxCount, current: o } : n > d.maxTotalValueBytes ? { type: "total-value-too-long", max: d.maxTotalValueBytes, current: n } : null;
}
function At(e, t) {
  const n = new Set(Object.keys(t));
  return e.filter((o) => !n.has(o));
}
function yt(e) {
  const { formData: t, coverUrl: n, customInfos: o, useObsStreaming: r } = e, s = ie(o), a = {
    liveId: re(t.anchorId),
    anchorId: t.anchorId,
    title: t.liveName,
    seatTemplate: t.seatTemplate
  };
  return n && (a.coverUrl = n), ae(t.seatTemplate) && (a.maxSeatCount = t.maxSeatCount), Object.keys(s).length > 0 && (a.customInfo = s), r && (a.useObsStreaming = !0), a;
}
function ce(e) {
  if (!e) return [];
  if (typeof e == "string")
    try {
      return ce(JSON.parse(e));
    } catch {
      return [];
    }
  return typeof e != "object" ? [] : Object.entries(e).map(([t, n]) => ({
    key: t,
    value: String(n)
  }));
}
function Lt(e) {
  return new Promise((t) => {
    if (!e) {
      t(A);
      return;
    }
    const n = new Image();
    n.crossOrigin = "anonymous", n.onload = () => {
      const o = n.naturalWidth / n.naturalHeight;
      t(o > 1 ? U : A);
    }, n.onerror = () => t(A), n.src = e;
  });
}
const P = I.moderation, ue = 10;
async function ht(e) {
  const {
    liveId: t,
    pageNum: n,
    pageSize: o = P,
    minutes: r = ue,
    violationOnly: s = !0
  } = e, a = await k({
    liveId: t,
    pageNum: n,
    pageSize: o,
    minutes: r,
    violationOnly: s
  }), u = await V(a.list), l = await B();
  return {
    list: u,
    total: Math.max(0, a.total - l),
    currentPage: n
  };
}
async function vt(e) {
  await F(e);
}
function bt(e, t, n, o = P) {
  const r = Math.max(0, t - n), s = Math.max(1, Math.ceil(r / o));
  return Math.min(e, s);
}
function St(e, t) {
  return e.includes(t) ? e.filter((n) => n !== t) : [...e, t];
}
function Mt(e, t) {
  if (t.length > 0 && t.every((o) => e.includes(o)))
    return e.filter((o) => !t.includes(o));
  {
    const o = new Set(e);
    return t.forEach((r) => o.add(r)), Array.from(o);
  }
}
function Tt(e, t) {
  return e.filter((n) => t.includes(n));
}
function Rt(e, t) {
  return t.length === 0 ? !1 : t.every((n) => e.includes(n));
}
function Et(e) {
  const t = new Date(e), n = String(t.getMonth() + 1).padStart(2, "0"), o = String(t.getDate()).padStart(2, "0"), r = String(t.getHours()).padStart(2, "0"), s = String(t.getMinutes()).padStart(2, "0"), a = String(t.getSeconds()).padStart(2, "0");
  return `${n}-${o} ${r}:${s}:${a}`;
}
export {
  mt as $,
  ut as A,
  ze as B,
  d as C,
  Z as D,
  Pe as E,
  ie as F,
  ft as G,
  dt as H,
  E as I,
  ce as J,
  vt as K,
  U as L,
  ue as M,
  Lt as N,
  He as O,
  I as P,
  Ue as Q,
  Xe as R,
  oe as S,
  je as T,
  ot as U,
  Tt as V,
  Ge as W,
  Et as X,
  rt as Y,
  X as Z,
  b as _,
  ne as a,
  At as a0,
  st as a1,
  Fe as a2,
  z as a3,
  _e as a4,
  se as a5,
  Rt as a6,
  ae as a7,
  Ze as a8,
  gt as a9,
  be as aA,
  ve as aB,
  he as aC,
  ye as aD,
  Le as aE,
  W as aF,
  Y as aG,
  me as aH,
  Ie as aI,
  Ae as aJ,
  at as aa,
  Be as ab,
  Je as ac,
  nt as ad,
  Te as ae,
  Me as af,
  Re as ag,
  Se as ah,
  ht as ai,
  qe as aj,
  K as ak,
  Ee as al,
  it as am,
  ct as an,
  Ve as ao,
  ke as ap,
  Ke as aq,
  $e as ar,
  de as as,
  fe as at,
  Mt as au,
  St as av,
  tt as aw,
  Qe as ax,
  It as ay,
  De as az,
  H as b,
  te as c,
  Ne as d,
  ge as e,
  ee as f,
  D as g,
  M as h,
  J as i,
  S as j,
  we as k,
  lt as l,
  $ as m,
  xe as n,
  Ye as o,
  P as p,
  We as q,
  A as r,
  et as s,
  yt as t,
  j as u,
  re as v,
  pe as w,
  bt as x,
  Oe as y,
  Ce as z
};
