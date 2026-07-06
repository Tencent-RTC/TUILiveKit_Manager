import { c as S, t as St, r as M, h as T } from "./logger.DRLw23-l.js";
import { I as a, aG as d, aI as h, g as f, aL as U, ad as Et, aK as Ct, ax as vt, au as Gt, a6 as Vt, z as kt, H as $t, B as Bt, m as Kt, A as Y, a3 as W } from "./layout.5hoGLPKE.js";
function m(...s) {
}
const Yt = (s) => s();
function Wt() {
  this.dispose();
}
const Ht = () => typeof __FASTRX_DEVTOOLS__ < "u";
let jt = 1;
class w extends Function {
  toString() {
    return `${this.name}(${this.args.length ? [...this.args].join(", ") : ""})`;
  }
  // pipe(...args: [...Operator<unknown>[], Operator<unknown>]): Observable<unknown> {
  //   return pipe(this as unknown as Observable<T>, ...args);
  // }
  subscribe(t) {
    const e = new qt(t, this, this.streamId++);
    return g.subscribe({ id: this.id, end: !1 }, { nodeId: e.sourceId, streamId: e.id }), this(e), e;
  }
}
class Q {
  constructor() {
    this.defers = /* @__PURE__ */ new Set(), this.disposed = !1;
  }
  next(t) {
  }
  complete() {
    this.dispose();
  }
  error(t) {
    this.dispose();
  }
  get bindDispose() {
    return () => this.dispose();
  }
  dispose() {
    this.disposed = !0, this.complete = m, this.error = m, this.next = m, this.dispose = m, this.subscribe = m, this.doDefer();
  }
  subscribe(t) {
    return t instanceof w ? t.subscribe(this) : t(this), this;
  }
  get bindSubscribe() {
    return (t) => this.subscribe(t);
  }
  doDefer() {
    this.defers.forEach(Yt), this.defers.clear();
  }
  defer(t) {
    this.defers.add(t);
  }
  removeDefer(t) {
    this.defers.delete(t);
  }
  reset() {
    this.disposed = !1, delete this.complete, delete this.next, delete this.dispose, delete this.next, delete this.subscribe;
  }
  resetNext() {
    delete this.next;
  }
  resetComplete() {
    delete this.complete;
  }
  resetError() {
    delete this.error;
  }
}
class _ extends Q {
  constructor(t) {
    super(), this.sink = t, t.defer(this.bindDispose);
  }
  next(t) {
    this.sink.next(t);
  }
  complete() {
    this.sink.complete();
  }
  error(t) {
    this.sink.error(t);
  }
}
class zt extends Q {
  constructor(t, e = m, i = m, r = m) {
    if (super(), this._next = e, this._error = i, this._complete = r, this.then = m, t instanceof w) {
      const n = { toString: () => "subscribe", id: 0, source: t };
      this.defer(() => {
        g.defer(n, 0);
      }), g.create(n), g.pipe(n), this.sourceId = n.id, this.subscribe(t), g.subscribe({ id: n.id, end: !0 }), e == m ? this._next = (o) => g.next(n, 0, o) : this.next = (o) => {
        g.next(n, 0, o), e(o);
      }, r == m ? this._complete = () => g.complete(n, 0) : this.complete = () => {
        this.dispose(), g.complete(n, 0), r();
      }, i == m ? this._error = (o) => g.complete(n, 0, o) : this.error = (o) => {
        this.dispose(), g.complete(n, 0, o), i(o);
      };
    } else
      this.subscribe(t);
  }
  next(t) {
    this._next(t);
  }
  complete() {
    this.dispose(), this._complete();
  }
  error(t) {
    this.dispose(), this._error(t);
  }
}
function Xt(s, ...t) {
  return t.reduce((e, i) => i(e), s);
}
function D(s, t, e) {
  if (Ht()) {
    const i = Object.defineProperties(Object.setPrototypeOf(s, w.prototype), {
      streamId: { value: 0, writable: !0, configurable: !0 },
      name: { value: t, writable: !0, configurable: !0 },
      args: { value: e, writable: !0, configurable: !0 },
      id: { value: 0, writable: !0, configurable: !0 }
    });
    g.create(i);
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      typeof n == "function" && n instanceof w && g.addSource(i, n);
    }
    return i;
  }
  return s;
}
function k(s, t) {
  return function(...e) {
    return (i) => {
      if (i instanceof w) {
        const r = D((n) => {
          const o = new s(n, ...e);
          o.sourceId = r.id, o.subscribe(i);
        }, t, arguments);
        return r.source = i, g.pipe(r), r;
      } else
        return (r) => i(new s(r, ...e));
    };
  };
}
function C(s, t) {
  window.postMessage({ source: "fastrx-devtools-backend", payload: { event: s, payload: t } });
}
class qt extends _ {
  constructor(t, e, i) {
    super(t), this.source = e, this.id = i, this.sourceId = t.sourceId, this.defer(() => {
      g.defer(this.source, this.id);
    });
  }
  next(t) {
    g.next(this.source, this.id, t), this.sink.next(t);
  }
  complete() {
    g.complete(this.source, this.id), this.sink.complete();
  }
  error(t) {
    g.complete(this.source, this.id, t), this.sink.error(t);
  }
}
const g = {
  addSource(s, t) {
    C("addSource", {
      id: s.id,
      name: s.toString(),
      source: { id: t.id, name: t.toString() }
    });
  },
  next(s, t, e) {
    C("next", { id: s.id, streamId: t, data: e && e.toString() });
  },
  subscribe({ id: s, end: t }, e) {
    C("subscribe", {
      id: s,
      end: t,
      sink: { nodeId: e && e.nodeId, streamId: e && e.streamId }
    });
  },
  complete(s, t, e) {
    C("complete", { id: s.id, streamId: t, err: e ? e.toString() : null });
  },
  defer(s, t) {
    C("defer", { id: s.id, streamId: t });
  },
  pipe(s) {
    C("pipe", {
      name: s.toString(),
      id: s.id,
      source: { id: s.source.id, name: s.source.toString() }
    });
  },
  update(s) {
    C("update", { id: s.id, name: s.toString() });
  },
  create(s) {
    s.id || (s.id = jt++), C("create", { name: s.toString(), id: s.id });
  }
};
class Jt extends Q {
  constructor(t) {
    super(), this.source = t, this.sinks = /* @__PURE__ */ new Set();
  }
  add(t) {
    t.defer(() => this.remove(t)), this.sinks.add(t).size === 1 && (this.reset(), this.subscribe(this.source));
  }
  remove(t) {
    this.sinks.delete(t), this.sinks.size === 0 && this.dispose();
  }
  next(t) {
    this.sinks.forEach((e) => e.next(t));
  }
  complete() {
    this.sinks.forEach((t) => t.complete()), this.sinks.clear();
  }
  error(t) {
    this.sinks.forEach((e) => e.error(t)), this.sinks.clear();
  }
}
function Zt() {
  return (s) => {
    const t = new Jt(s);
    if (s instanceof w) {
      const e = D((i) => {
        t.add(i);
      }, "share", arguments);
      return t.sourceId = e.id, e.source = s, g.pipe(e), e;
    }
    return D(t.add.bind(t), "share", arguments);
  };
}
function it(s) {
  const t = arguments, e = Zt()(D((i) => {
    e.next = (r) => i.next(r), e.complete = () => i.complete(), e.error = (r) => i.error(r);
  }, "subject", t));
  return e.next = m, e.complete = m, e.error = m, e;
}
function bs(s, t) {
  return D((e) => {
    let i = 0;
    const r = setTimeout(() => {
      if (e.removeDefer(n), e.next(i++), t) {
        const o = setInterval(() => e.next(i++), t);
        e.defer(() => {
          clearInterval(o);
        });
      } else
        e.complete();
    }, s), n = () => clearTimeout(r);
    e.defer(n);
  }, "timer", arguments);
}
function rt(s) {
  return D((t) => {
    s.then((e) => {
      t.next(e), t.complete();
    }, t.error.bind(t));
  }, "fromPromise", arguments);
}
class Qt extends _ {
  constructor(t, e, i) {
    super(t), this.filter = e, this.thisArg = i;
  }
  next(t) {
    this.filter.call(this.thisArg, t) && this.sink.next(t);
  }
}
const As = k(Qt, "filter");
class te extends _ {
  constructor(t, e) {
    super(t);
    const i = new _(t);
    i.next = () => {
      i.doDefer(), t.complete();
    }, i.complete = Wt, i.subscribe(e);
  }
}
const ee = k(te, "takeUntil");
class se extends _ {
  constructor(t, e) {
    super(t), this.f = e;
  }
  next(t) {
    this.f(t) ? this.sink.next(t) : (this.doDefer(), this.complete());
  }
}
const _s = k(se, "takeWhile");
class ie extends _ {
  constructor(t, e, i) {
    super(t), this.data = e, this.context = i;
  }
  next(t) {
    const e = this.context.combineResults;
    e ? this.sink.next(e(this.data, t)) : this.sink.next(t);
  }
  // 如果complete先于context的complete触发，则激活原始的context的complete
  tryComplete() {
    this.context.resetComplete(), this.dispose();
  }
}
class tt extends _ {
  constructor(t, e, i) {
    super(t), this.makeSource = e, this.combineResults = i, this.index = 0;
  }
  subInner(t, e) {
    const i = this.currentSink = new e(this.sink, t, this);
    this.complete === tt.prototype.complete && (this.complete = this.tryComplete), i.complete = i.tryComplete, i.subscribe(this.makeSource(t, this.index++));
  }
  // Default complete method that can be overridden by subclasses
  complete() {
    this.sink.complete();
  }
  // 如果complete先于inner的complete触发，则不传播complete
  tryComplete() {
    this.currentSink.resetComplete(), this.dispose();
  }
}
class nt extends ie {
}
class re extends tt {
  next(t) {
    this.subInner(t, nt), this.next = (e) => {
      this.currentSink.dispose(), this.subInner(e, nt);
    };
  }
}
const ne = k(re, "switchMap"), oe = (s = m, t = m, e = m) => (i) => new zt(i, s, t, e), Ts = (s, t = null) => {
  try {
    return JSON.parse(s);
  } catch (e) {
    return console.warn("Failed to parse JSON:", s, e), t;
  }
}, ws = (s, t) => {
  let e = null;
  return (...i) => {
    e !== null && clearTimeout(e), e = window.setTimeout(() => {
      s(...i), e = null;
    }, t);
  };
}, Ds = (s, t = {}) => {
  const e = s;
  e?.requestFullscreen ? e?.requestFullscreen(t) : e?.mozRequestFullScreen ? e?.mozRequestFullScreen(t) : e?.webkitRequestFullScreen ? e?.webkitRequestFullScreen(t) : e?.msRequestFullscreen && e?.msRequestFullscreen(t);
}, Ms = () => {
  if (!document?.fullscreenElement && !document?.webkitFullscreenElement && !document?.mozFullScreenElement)
    return;
  const s = document;
  s?.exitFullscreen ? s?.exitFullscreen() : s?.msExitFullscreen ? s?.msExitFullscreen() : s?.mozCancelFullScreen ? s?.mozCancelFullScreen() : s?.webkitExitFullscreen && s?.webkitExitFullscreen();
}, et = async (s) => {
  if (navigator.clipboard?.writeText)
    return navigator.clipboard.writeText(s);
  const t = document.createElement("textarea");
  t.value = s, t.style.position = "fixed", t.style.opacity = "0", document.body.appendChild(t), t.select(), document.execCommand("copy"), document.body.removeChild(t);
};
function Rs(s) {
  return `live_obs_${s}`;
}
function Os(s, t = 0) {
  const e = Number(s);
  return Number.isFinite(e) ? e : t;
}
function Ps(s, t = !1) {
  return typeof s == "boolean" ? s : typeof s == "number" ? s !== 0 : typeof s == "string" ? s === "true" || s === "1" : t;
}
function ae(s) {
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
function Ns(s) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(s);
}
function Fs(s) {
  return /\.svga(\?|$)/i.test(s);
}
function xs(s) {
  return s instanceof File ? s.name.toLowerCase().endsWith(".svga") : !1;
}
function Us(s) {
  return s.type.startsWith("video/");
}
function H(s) {
  return new TextEncoder().encode(s).length;
}
function Gs(s) {
  return new Promise((t, e) => {
    const i = new FileReader();
    i.onload = () => t(i.result), i.onerror = e, i.readAsDataURL(s);
  });
}
const ce = S("ImagePreview");
class Vs {
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
function le(s) {
  return URL.createObjectURL(s);
}
function ue(s) {
  try {
    URL.revokeObjectURL(s);
  } catch (t) {
    ce.warn("general", "Failed to revoke ObjectURL:", s, t);
  }
}
function ks(s, t) {
  return s && ue(s), le(t);
}
S("DragDrop");
function de(s) {
  const t = s.dataTransfer?.files;
  return t && t.length > 0 ? t[0] : null;
}
function $s(s) {
  return (t) => {
    t.preventDefault();
    const e = de(t);
    e && s(e);
  };
}
function Bs(s) {
  s.preventDefault();
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
], ot = [
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
  ...j,
  "hostAvatarUrl",
  "ownerAvatarUrl",
  "主播头像"
];
function G(s) {
  return !!s && typeof s == "object" && !Array.isArray(s);
}
function bt(s) {
  return typeof s == "string" ? s.trim() : "";
}
function R(s, t) {
  if (!s) return "";
  for (const e of t) {
    const i = bt(s[e]);
    if (i)
      return i;
  }
  return "";
}
function A(s) {
  if (G(s))
    return s;
  if (typeof s == "string")
    try {
      const t = JSON.parse(s);
      return G(t) ? t : null;
    } catch {
      return null;
    }
  return null;
}
function At(s) {
  return [
    A(s.liveOwner),
    A(s.anchor),
    A(s.owner),
    A(s.host),
    A(s.userInfo),
    A(s.sender)
  ];
}
function Ks(s) {
  const t = (s || "").trim();
  return t ? t.charAt(0).toUpperCase() : "?";
}
function Ys(s) {
  if (!G(s))
    return "";
  const t = R(s, j);
  if (t)
    return t;
  for (const i of At(s)) {
    const r = R(i, j);
    if (r)
      return r;
  }
  const e = A(
    s.CustomINFO ?? s.customInfo ?? s.customData ?? s.metadata
  );
  return R(e, he);
}
function Ws(s, t = "") {
  if (typeof s == "string")
    return s.trim() || t;
  if (!G(s))
    return t;
  const e = R(s, ot);
  if (e)
    return e;
  const i = bt(s.liveOwner);
  if (i)
    return i;
  for (const r of At(s)) {
    const n = R(r, ot);
    if (n)
      return n;
  }
  return t;
}
const fe = "live_", Hs = 43, js = 100, ge = "VideoDynamicGrid9Seats", me = 8, x = 9 / 16, _t = 16 / 9, v = {
  maxCount: 10,
  maxKeyBytes: 50,
  maxValueBytes: 2 * 1024,
  maxTotalValueBytes: 16 * 1024
}, pe = [
  { value: "VideoDynamicGrid9Seats", labelKey: a.DYNAMIC_GRID_LAYOUT, descKey: a.DYNAMIC_GRID_LAYOUT_DESC, orientation: "portrait" },
  { value: "VideoDynamicFloat7Seats", labelKey: a.FLOATING_WINDOW_LAYOUT, descKey: a.FLOATING_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoFixedGrid9Seats", labelKey: a.FIXED_GRID_LAYOUT, descKey: a.FIXED_GRID_DESC, orientation: "portrait" },
  { value: "VideoFixedFloat7Seats", labelKey: a.FIXED_WINDOW_LAYOUT, descKey: a.FIXED_WINDOW_DESC, orientation: "portrait" },
  { value: "VideoLandscape4Seat", labelKey: a.LANDSCAPE_BROADCASTING, descKey: a.LANDSCAPE_BROADCASTING_DESC, orientation: "landscape" }
];
function zs() {
  return {
    anchorId: "",
    liveName: "",
    coverUrl: "",
    seatTemplate: ge,
    maxSeatCount: me
  };
}
function Xs() {
  return {
    liveName: "",
    coverUrl: ""
  };
}
function Ie(s) {
  return `${fe}${s}`;
}
function Le(s) {
  return s === "AudioSalon" || s === "Karaoke";
}
function ye(s) {
  return pe.find((t) => t.value === s);
}
function qs(s) {
  return ye(s)?.orientation === "landscape" ? _t : x;
}
function Js(s) {
  return !s.key.trim() && !!s.value.trim();
}
function Se(s) {
  const t = {};
  for (const e of s) {
    const i = e.key.trim();
    i && (t[i] = e.value);
  }
  return t;
}
function Zs(s) {
  const t = {};
  let e = 0;
  for (const r of s) {
    const n = r.key.trim();
    if (!n) continue;
    const o = H(n);
    if (o > v.maxKeyBytes)
      return { type: "key-too-long", key: n, max: v.maxKeyBytes, current: o };
    const c = H(r.value);
    if (c > v.maxValueBytes)
      return { type: "value-too-long", key: n, max: v.maxValueBytes, current: c };
    e += c, t[n] = r.value;
  }
  const i = Object.keys(t).length;
  return i > v.maxCount ? { type: "max-count", max: v.maxCount, current: i } : e > v.maxTotalValueBytes ? { type: "total-value-too-long", max: v.maxTotalValueBytes, current: e } : null;
}
function Qs(s, t) {
  const e = new Set(Object.keys(t));
  return s.filter((i) => !e.has(i));
}
function ti(s) {
  const { formData: t, coverUrl: e, customInfos: i, useObsStreaming: r } = s, n = Se(i), o = {
    liveId: Ie(t.anchorId),
    anchorId: t.anchorId,
    liveName: t.liveName,
    seatTemplate: t.seatTemplate
  };
  return e && (o.coverUrl = e), Le(t.seatTemplate) && (o.maxSeatCount = t.maxSeatCount), Object.keys(n).length > 0 && (o.customInfo = n), r && (o.useObsStreaming = !0), o;
}
function Ee(s) {
  if (!s) return [];
  if (typeof s == "string")
    try {
      return Ee(JSON.parse(s));
    } catch {
      return [];
    }
  return typeof s != "object" ? [] : Object.entries(s).map(([t, e]) => ({
    key: t,
    value: String(e)
  }));
}
function ei(s) {
  return new Promise((t) => {
    if (!s) {
      t(x);
      return;
    }
    const e = new Image();
    e.crossOrigin = "anonymous", e.onload = () => {
      const i = e.naturalWidth / e.naturalHeight;
      t(i > 1 ? _t : x);
    }, e.onerror = () => t(x), e.src = s;
  });
}
function Tt(s) {
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
    activityStatus: Number(s.ActivityStatus ?? 0),
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
    const n = s;
    return {
      ...r,
      liveType: n.RoomType,
      isSeatEnabled: n.IsSeatEnabled,
      maxSeatCount: n.MaxSeatCount,
      maxMemberCount: n.MaxMemberCount,
      isMessageDisabled: n.IsMessageDisabled || !1,
      isLikeEnabled: n.IsLikeEnabled !== !1,
      // 默认 true
      isPublicVisible: n.IsPublicVisible !== !1,
      // 默认 true
      seatTemplate: n.SeatTemplate,
      customInfo: n.CustomInfo ? ae(n.CustomInfo) : {}
    };
  }
  return r;
}
async function Ce(s = {}) {
  const t = s.next || "0", e = s.count || 20, i = await d(h.fetchLiveList, {
    Next: t,
    Count: e,
    SortDirection: s.sortDirection
  });
  if (i.ErrorCode !== 0)
    throw new f(
      i.ErrorInfo || `获取直播列表失败 (ErrorCode: ${i.ErrorCode})`,
      i.ErrorCode,
      i
    );
  return {
    list: (i.Response?.RoomList || []).map(
      (n) => Tt(n)
    ),
    next: i.Response?.Next || ""
  };
}
async function O(s) {
  const [t, e] = await Promise.all([
    d(h.getRoomInfo, { RoomId: s }),
    d(h.getRoomMetadata, { RoomId: s, Keys: [] })
  ]);
  if (t.ErrorCode !== 0)
    throw new f(
      t.ErrorInfo || `Room API error (code: ${t.ErrorCode})`,
      t.ErrorCode,
      t
    );
  if (!t.Response?.RoomInfo) return null;
  const i = Tt(t.Response.RoomInfo);
  if (e?.Response?.Metadata) {
    const r = { ...i.customInfo || {} };
    (e.Response.Metadata || []).forEach((n) => {
      r[n.Key] = n.Value;
    }), i.customInfo = r;
  }
  return i;
}
async function at(s) {
  return d(h.getLiveStatistic, { RoomId: s });
}
async function ve(s) {
  const t = await d(h.destroyRoom, { RoomId: s });
  if (t.ErrorCode !== 0)
    throw new f(t.ErrorInfo || `关闭直播失败 (ErrorCode: ${t.ErrorCode})`, t.ErrorCode, t);
  return t;
}
async function be(s) {
  const t = s.liveId || String(Date.now()), e = {
    RoomId: t,
    RoomType: "Live",
    SeatTemplate: s.seatTemplate || "VideoDynamicGrid9Seats",
    Owner_Account: s.anchorId,
    IsUnlimitedRoomEnabled: !0
  };
  s.useObsStreaming && (e.KeepOwnerOnSeat = !1), s.liveName && s.liveName.trim() && (e.RoomName = s.liveName), s.coverUrl && s.coverUrl.trim() && (e.CoverURL = s.coverUrl.trim()), s.maxSeatCount && (s.seatTemplate === "AudioSalon" || s.seatTemplate === "Karaoke") && (e.MaxSeatCount = Number(s.maxSeatCount));
  const i = await d(h.createLive, { RoomInfo: e });
  if (i.ErrorCode !== 0)
    throw new f(
      i.ErrorInfo || `创建直播失败 (ErrorCode: ${i.ErrorCode})`,
      i.ErrorCode,
      i
    );
  if (s.customInfo && Object.keys(s.customInfo).length > 0) {
    const n = Object.entries(s.customInfo).map(([o, c]) => ({ Key: o, Value: c }));
    await d(h.setRoomMetadata, { RoomId: t, Metadata: n });
  }
  const r = await O(t);
  if (!r)
    throw new f(`创建直播成功但获取详情失败 (liveId: ${t})`);
  return r;
}
async function Ae(s, t) {
  const e = [], i = { RoomId: s, IsUnlimitedRoomEnabled: !0 };
  if (t.liveName !== void 0 && (i.RoomName = t.liveName), t.coverUrl !== void 0 && (i.CoverURL = t.coverUrl), t.isMessageDisabled !== void 0 && (i.IsMessageDisabled = t.isMessageDisabled), e.push(d(h.updateLiveInfo, { RoomInfo: i })), t.customInfo && Object.keys(t.customInfo).length > 0) {
    const o = Object.entries(t.customInfo).map(([c, l]) => ({ Key: c, Value: l }));
    e.push(d(h.setRoomMetadata, { RoomId: s, Metadata: o }));
  }
  t.deleteKeys && t.deleteKeys.length > 0 && e.push(d(h.delRoomMetadata, { RoomId: s, Keys: t.deleteKeys }));
  const n = (await Promise.all(e))[0];
  if (n.ErrorCode !== 0)
    throw new f(
      n.ErrorInfo || `更新直播信息失败 (ErrorCode: ${n.ErrorCode})`,
      n.ErrorCode,
      n
    );
  return n;
}
async function _e(s, t, e = 600) {
  const i = await d(h.muteMember, { RoomId: s, MemberList_Account: t, MuteTime: e });
  if (i.ErrorCode !== 0)
    throw new f(i.ErrorInfo || `禁言失败 (ErrorCode: ${i.ErrorCode})`, i.ErrorCode, i);
  return i;
}
async function Te(s, t) {
  const e = await d(h.muteMember, { RoomId: s, MemberList_Account: t, MuteTime: 0 });
  if (e.ErrorCode !== 0)
    throw new f(e.ErrorInfo || `解除禁言失败 (ErrorCode: ${e.ErrorCode})`, e.ErrorCode, e);
  return e;
}
async function we(s, t, e = 3600, i = "") {
  const r = await d(h.banMember, { RoomId: s, MemberList_Account: t, Duration: e, Reason: i });
  if (r.ErrorCode !== 0)
    throw new f(r.ErrorInfo || `封禁失败 (ErrorCode: ${r.ErrorCode})`, r.ErrorCode, r);
  return r;
}
async function De(s, t) {
  const e = await d(h.unbanMember, { RoomId: s, MemberList_Account: t });
  if (e.ErrorCode !== 0)
    throw new f(e.ErrorInfo || `解除封禁失败 (ErrorCode: ${e.ErrorCode})`, e.ErrorCode, e);
  return e;
}
async function wt(s, t = {}) {
  return d(h.getMutedMemberList, {
    RoomId: s,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function Me(s, t = {}) {
  return d(h.getBannedMemberList, {
    RoomId: s,
    Next: t.next,
    Count: t.count,
    Offset: t.offset,
    Limit: t.limit
  });
}
async function Re(s) {
  return d(h.getRobot, { RoomId: s });
}
async function Oe(s) {
  return d(h.getSeatList, { RoomId: s });
}
async function Pe(s, t, e = 0) {
  const i = await d(h.pickUserOnSeat, { RoomId: s, Member_Account: t, Index: e });
  if (i.ErrorCode !== 0)
    throw new f(i.ErrorInfo || `用户上麦失败 (ErrorCode: ${i.ErrorCode})`, i.ErrorCode, i);
  return i;
}
async function Ne(s, t) {
  const e = await d(h.addRobot, { RoomId: s, RobotList_Account: t });
  if (e.ErrorCode !== 0)
    throw new f(e.ErrorInfo || `添加机器人失败 (ErrorCode: ${e.ErrorCode})`, e.ErrorCode, e);
  return e;
}
async function Fe(s, t, e) {
  const i = await d(h.importAccount, { UserID: s, Nick: t || "", FaceUrl: "" });
  if (i.ErrorCode !== 0)
    throw new f(i.ErrorInfo || `导入账号失败 (ErrorCode: ${i.ErrorCode})`, i.ErrorCode, i);
  return i;
}
const P = {
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
function si(s) {
  return P[s];
}
function ii(s, t) {
  return Math.max(1, Math.ceil(s / t));
}
function ri(s, t) {
  return Math.max(1, Math.min(s, t));
}
function ni(s, t) {
  return (s - 1) * t;
}
function oi(s, t, e) {
  const i = (s - 1) * t + 1, r = Math.min(s * t, e);
  return { start: i, end: r };
}
const ai = {
  field: "createTime",
  direction: "descend"
}, xe = P.liveList, z = "liveList_currentPage", X = "liveList_pageCursors", Ue = 1024;
function V() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
async function Ge(s) {
  const { page: t, pageCursors: e, pageSize: i = xe } = s, r = e.get(t) || "", { list: n, next: o } = await Ce({ next: r, count: i, sortDirection: "descend" }), c = n, l = new Map(e);
  return o && c.length > 0 && l.set(t + 1, o), {
    lives: c,
    currentPage: t,
    hasMoreData: !!o && c.length === i,
    pageCursors: l,
    response: { ErrorCode: 0, Response: { RoomList: n, Next: o } }
  };
}
function Ve(s) {
  const { targetPage: t, currentPage: e, hasMoreData: i } = s;
  return !(t < 1 || t > e && !i);
}
function ke(s) {
  const { currentPage: t, hasMoreData: e, livesLength: i } = s;
  return !e && i <= 1 && t > 1 ? t - 1 : t;
}
function $e(s) {
  const t = s.storage || sessionStorage;
  try {
    t.setItem(z, String(s.currentPage)), t.setItem(X, JSON.stringify(Array.from(s.pageCursors.entries())));
  } catch {
  }
}
function Be(s = sessionStorage) {
  let t = 1, e = V();
  try {
    const i = s.getItem(z), r = s.getItem(X);
    if (s.removeItem(z), s.removeItem(X), i && r) {
      const n = Number(i);
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
function Ke(s, t) {
  return H(s) > t;
}
async function Ye(s) {
  return await O(s);
}
function ci(s) {
  return s ? new Date(s * 1e3).toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).replace(/\//g, "-") : "-";
}
function li(s, t) {
  const { field: e, direction: i } = t, r = [...s], n = i === "ascend" ? 1 : -1;
  return r.sort((o, c) => {
    let l = 0;
    switch (e) {
      case "createTime":
        l = (o.createdAt || 0) - (c.createdAt || 0);
        break;
      case "viewerCount":
        l = (o.onlineCount || 0) - (c.onlineCount || 0);
        break;
      case "duration": {
        const u = o.endedAt ? o.endedAt - o.createdAt : Date.now() / 1e3 - o.createdAt, p = c.endedAt ? c.endedAt - c.createdAt : Date.now() / 1e3 - c.createdAt;
        l = u - p;
        break;
      }
      case "status": {
        const u = o.endedAt ? 1 : 0, p = c.endedAt ? 1 : 0;
        l = u - p;
        break;
      }
      default:
        l = 0;
    }
    return l * n;
  }), r;
}
function ui(s, t) {
  let e = s;
  return t.status && (t.status === "ongoing" ? e = e.filter((i) => !i.endedAt) : t.status === "ended" && (e = e.filter((i) => !!i.endedAt))), t.anchorId && (e = e.filter((i) => i.anchor.userId === t.anchorId)), t.tags && t.tags.length > 0 && (e = e.filter((i) => !i.category || i.category.length === 0 ? !1 : t.tags.some((r) => i.category.includes(r)))), t.customFilter && (e = e.filter(t.customFilter)), e;
}
class di {
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
      const r = Array.from(this.cache.entries()).sort((n, o) => n[1].timestamp - o[1].timestamp)[0]?.[0];
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
const We = S("obs"), He = 70102;
function Dt(s) {
  return `live_obs_${s}`;
}
function je(s) {
  const t = /* @__PURE__ */ new Set();
  return s?.forEach((e) => {
    e.Member_Account && t.add(e.Member_Account);
  }), t;
}
function Mt(s) {
  return s || null;
}
async function q(s, t) {
  const [e, i] = await Promise.all([
    Re(s).then((r) => r.Response?.RobotList_Account || []).catch(() => []),
    Oe(s).then((r) => je(r.Response?.SeatList)).catch(() => /* @__PURE__ */ new Set())
  ]);
  return {
    hasRobot: e.includes(t),
    onSeat: i.has(t)
  };
}
async function hi(s) {
  const { liveId: t, anchorId: e, onStatusChange: i, messages: r = {} } = s, n = Dt(e), o = r.getStreamInfoFailed || "Get Stream Info Failed";
  let c = null, l = "";
  try {
    const { hasRobot: u, onSeat: p } = await q(t, n);
    let st = p;
    if (!u) {
      i?.("creating");
      const I = await Fe(n, `OBS Robot ${n}`);
      if (I.ErrorCode !== 0 && I.Error !== 0 && I.ErrorCode !== He)
        throw new f(I.ErrorInfo || `导入 OBS 账号失败 (ErrorCode: ${I.ErrorCode})`, I.ErrorCode);
      const N = await Ne(t, [n]);
      if (N.ErrorCode !== 0)
        throw new f(N.ErrorInfo || `添加 OBS 机器人失败 (ErrorCode: ${N.ErrorCode})`, N.ErrorCode);
      st = (await q(t, n)).onSeat;
    }
    if (!st) {
      i?.("seating");
      const I = await Pe(t, n);
      if (I.ErrorCode !== 0)
        throw new f(I.ErrorInfo || `OBS 机器人上麦失败 (ErrorCode: ${I.ErrorCode})`, I.ErrorCode);
    }
    i?.("ready");
  } catch (u) {
    We.error("OBS setup failed", "", u);
    const p = (u instanceof Error ? u.message : "") || r.setupFailed || "OBS Setup Failed";
    return i?.("error"), {
      robotId: n,
      streamInfo: c,
      streamInfoError: l,
      setupError: p,
      status: "error",
      configuredSuccessfully: !1
    };
  }
  try {
    let u = await U(t, n);
    if (!u && Et() === 0) {
      const p = await Ct();
      p && (vt({ userId: p.userId, userSig: p.userSig, sdkAppId: p.sdkAppId }), u = await U(t, n));
    }
    c = Mt(u), c || (l = o);
  } catch (u) {
    l = (u instanceof Error ? u.message : "") || o;
  }
  return {
    robotId: n,
    streamInfo: c,
    streamInfoError: l,
    setupError: "",
    status: "ready",
    configuredSuccessfully: !0
  };
}
async function ze(s) {
  const { liveId: t, anchorId: e, getStreamInfoFailedMessage: i = "Get Stream Info Failed" } = s, r = Dt(e);
  try {
    const { hasRobot: n, onSeat: o } = await q(t, r);
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
      let c = await U(t, r);
      if (!c && Et() === 0) {
        const u = await Ct();
        u && (vt({ userId: u.userId, userSig: u.userSig, sdkAppId: u.sdkAppId }), c = await U(t, r));
      }
      const l = Mt(c);
      return {
        robotId: r,
        hasRobot: n,
        onSeat: o,
        streamInfo: l,
        streamInfoError: l ? "" : i,
        status: "ready",
        errorMessage: ""
      };
    } catch (c) {
      return {
        robotId: r,
        hasRobot: n,
        onSeat: o,
        streamInfo: null,
        streamInfoError: (c instanceof Error ? c.message : "") || i,
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
const Rt = P.moderation, Xe = 10, qe = 720 * 60 * 60 * 1e3, Je = 60 * 1e3;
function fi(s) {
  const t = s ? Number(s) * 1e3 : Date.now() - 36e5, e = Date.now() - qe + Je;
  return Math.max(t, e);
}
function gi(s) {
  const t = /* @__PURE__ */ new Set();
  return s.filter((e) => {
    const i = String(e.id ?? "");
    return t.has(i) ? !1 : (t.add(i), !0);
  });
}
function mi(s) {
  return Array.from(new Set(s));
}
async function pi(s) {
  const {
    liveId: t,
    pageNum: e,
    pageSize: i = Rt,
    minutes: r = Xe,
    violationOnly: n = !0
  } = s, o = await Vt({
    liveId: t,
    pageNum: e,
    pageSize: i,
    minutes: r,
    violationOnly: n
  }), c = await kt(o.list), l = await $t();
  return {
    list: c,
    total: Math.max(0, o.total - l),
    currentPage: e
  };
}
async function Ii(s) {
  await Gt(s);
}
function Li(s, t, e, i = Rt) {
  const r = Math.max(0, t - e), n = Math.max(1, Math.ceil(r / i));
  return Math.min(s, n);
}
function yi(s, t) {
  return s.includes(t) ? s.filter((e) => e !== t) : [...s, t];
}
function Si(s, t) {
  if (t.length > 0 && t.every((i) => s.includes(i)))
    return s.filter((i) => !t.includes(i));
  {
    const i = new Set(s);
    return t.forEach((r) => i.add(r)), Array.from(i);
  }
}
function Ei(s, t) {
  return s.filter((e) => t.includes(e));
}
function Ci(s, t) {
  return t.length === 0 ? !1 : t.every((e) => s.includes(e));
}
function vi(s) {
  const t = new Date(s), e = String(t.getMonth() + 1).padStart(2, "0"), i = String(t.getDate()).padStart(2, "0"), r = String(t.getHours()).padStart(2, "0"), n = String(t.getMinutes()).padStart(2, "0"), o = String(t.getSeconds()).padStart(2, "0");
  return `${e}-${i} ${r}:${n}:${o}`;
}
const bi = P.mutedList, Ai = P.bannedList, Ze = 600, Qe = 86400, Ot = (s) => Array.isArray(s) ? s.filter((t) => !!t && typeof t == "object") : [], J = (s, ...t) => {
  const e = t.map((i) => s[i]).find((i) => typeof i == "string" && i.length > 0);
  return typeof e == "string" ? e : "";
}, Pt = (s, ...t) => {
  const e = t.map((r) => s[r]).find((r) => r != null), i = Number(e || 0);
  return Number.isFinite(i) ? i : 0;
}, $ = (s) => s.memberAccounts || s.userIds || [];
async function _i(s) {
  const t = await wt(s);
  return Ot(t.Response?.MutedAccountList || t.MutedAccountList).map((i) => ({
    userId: J(i, "Member_Account", "userId", "UserID"),
    endTime: Pt(i, "MutedUntil", "endTime")
  })).filter((i) => i.userId);
}
function Ti(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function wi(s) {
  const t = await Me(s);
  return Ot(t.Response?.BannedAccountList || t.BannedAccountList).map((i) => ({
    userId: J(i, "Member_Account", "userId", "UserID"),
    endTime: Pt(i, "BannedUntil", "endTime"),
    reason: J(i, "Reason", "reason") || void 0
  })).filter((i) => i.userId);
}
function Di(s, t) {
  const e = Math.floor(Date.now() / 1e3);
  return t.some((i) => i.userId === s && i.endTime > e);
}
async function Mi(s) {
  const { liveId: t } = s, e = $(s), i = s.muteTime ?? s.duration ?? Ze;
  await _e(t, e, i);
}
async function Ri(s) {
  const { liveId: t } = s, e = $(s);
  await Te(t, e);
}
async function Oi(s) {
  const { liveId: t, reason: e = "" } = s, i = $(s), r = s.banTime ?? s.duration ?? Qe;
  await we(t, i, r, e);
}
async function Pi(s) {
  const { liveId: t } = s, e = $(s);
  await De(t, e);
}
const ts = 0, es = 1;
function Ni(s, t) {
  return t.find((i) => i.userId === s)?.userRole === es;
}
function Fi(s, t) {
  return t.find((i) => i.userId === s)?.userRole === ts;
}
function Nt(s) {
  return `${s}_robot`;
}
function xi(s, t) {
  return s === Nt(t);
}
function Ui(s, t) {
  const e = Nt(t);
  return s.filter((i) => i !== e);
}
function Gi(s) {
  const t = Math.floor(Date.now() / 1e3), e = s - t;
  if (e <= 0)
    return "已过期";
  const i = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60);
  return i > 0 ? `${i}小时${r > 0 ? r + "分钟" : ""}` : r > 0 ? `${r}分钟` : "不到1分钟";
}
function Vi(s) {
  const t = Math.floor(Date.now() / 1e3);
  return s <= t;
}
async function ki(s, t = 50) {
  return Bt(`/chat/${s}/messages`, { limit: t });
}
async function $i(s, t) {
  const e = St().credentials?.userId || "admin", i = Math.floor(Math.random() * 4294967295), r = await d(h.sendGroupMsg, {
    GroupId: s,
    From_Account: e,
    Random: i,
    MsgPriority: "Normal",
    MsgBody: [
      {
        MsgType: "TIMTextElem",
        MsgContent: {
          Text: t
        }
      }
    ]
  });
  if (r.ErrorCode !== 0)
    throw new f(r.ErrorInfo || `发送消息失败 (ErrorCode: ${r.ErrorCode})`, r.ErrorCode, r);
  return r;
}
async function ss(s, t, e, i) {
  const r = i || St().credentials?.userId || "admin", n = await d(h.sendCustomMsg, {
    RoomId: s,
    Sender_Account: r,
    BusinessId: t,
    Data: e
  });
  if (n.ErrorCode !== 0)
    throw new f(n.ErrorInfo || `发送自定义消息失败 (ErrorCode: ${n.ErrorCode})`, n.ErrorCode, n);
  return n;
}
async function is(s, t) {
  const e = await d(h.updateLiveInfo, {
    RoomInfo: {
      RoomId: s,
      IsMessageDisabled: t,
      IsUnlimitedRoomEnabled: !0
    }
  });
  if (e.ErrorCode !== 0)
    throw new f(e.ErrorInfo || `全员禁言操作失败 (ErrorCode: ${e.ErrorCode})`, e.ErrorCode, e);
  return e;
}
async function Bi(s, t, e) {
  const i = await d(h.muteMember, {
    RoomId: s,
    MemberList_Account: [t],
    MuteTime: e || 60
  });
  if (i.ErrorCode !== 0)
    throw new f(i.ErrorInfo || `禁言用户失败 (ErrorCode: ${i.ErrorCode})`, i.ErrorCode, i);
  return i;
}
async function Ki(s, t) {
  const e = await d(h.muteMember, {
    RoomId: s,
    MemberList_Account: [t],
    MuteTime: 0
  });
  if (e.ErrorCode !== 0)
    throw new f(e.ErrorInfo || `解除禁言失败 (ErrorCode: ${e.ErrorCode})`, e.ErrorCode, e);
  return e;
}
async function rs(s) {
  const [t, e] = await Promise.all([
    d(h.getRoomInfo, { RoomId: s }),
    wt(s)
  ]), i = t?.Response?.RoomInfo?.IsMessageDisabled ?? !1, n = (e.MutedAccountList || e.Response?.MutedAccountList || []).map((o) => o.Member_Account || "").filter(Boolean);
  return { isMutedAll: i, mutedUsers: n };
}
async function ns(s, t) {
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
  return ss(
    s,
    "violation_alert",
    // BusinessId：标识违规警告消息
    JSON.stringify(i)
    // Data：消息内容
  );
}
async function Yi(s, t, e, i) {
  const r = {
    Porn: a.VIOLATION_SUGGESTION_PORN,
    Political: a.VIOLATION_SUGGESTION_POLITICAL,
    Abuse: a.VIOLATION_SUGGESTION_ABUSE,
    Advertising: a.VIOLATION_SUGGESTION_ADVERTISING,
    Illegal: a.VIOLATION_SUGGESTION_ILLEGAL,
    Sexy: a.VIOLATION_SUGGESTION_SEXY,
    Violence: a.VIOLATION_SUGGESTION_VIOLENCE,
    default: a.VIOLATION_SUGGESTION_DEFAULT
  }, n = r[t] || r.default, o = i ? i(n) : n;
  return ns(s, {
    violationType: t,
    violationContent: e,
    handleSuggestion: o
  });
}
const E = S("PlayerRegistry");
class os {
  constructor(t = {}) {
    this.playerMap = /* @__PURE__ */ new Map(), this.playerFactory = null, this.taskChain = /* @__PURE__ */ new Map(), this.startPlayVersion = /* @__PURE__ */ new Map(), this.playerFactory = t.playerFactory || null, this.debug = t.debug || !1;
  }
  /**
   * 设置播放器工厂
   */
  setPlayerFactory(t) {
    E.info("PlayerRegistry", "setPlayerFactory called", typeof t), this.playerFactory = t;
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
      throw E.error("PlayerRegistry", "playerFactory is not configured!"), new Error(
        "playerFactory is not configured. Please provide it in ServerConfig or call setPlayerFactory()."
      );
    this.debug && E.info("PlayerRegistry", "startPlay called", { liveId: e, containerId: i.id });
    const n = (this.startPlayVersion.get(e) ?? 0) + 1;
    this.startPlayVersion.set(e, n);
    const c = (this.taskChain.get(e) ?? Promise.resolve()).then(async () => {
      if (this.startPlayVersion.get(e) !== n) return;
      const u = this.playerMap.get(e);
      u && (this.debug && E.info("PlayerRegistry", `Stopping existing player for ${e} before restart`), await u.stop(), await u.destroy(), this.playerMap.delete(e));
      const p = this.playerFactory(e);
      this.playerMap.set(e, p), await p.play(i, r), this.debug && E.info("PlayerRegistry", `Started playing live ${e}`);
    }), l = c.catch(() => {
    });
    this.taskChain.set(e, l);
    try {
      await c;
    } catch (u) {
      throw this.playerMap.has(e) && await this.stopPlay(e), u;
    }
  }
  /**
   * 停止播放
   * @param liveId 直播 ID
   */
  async stopPlay(t) {
    if (!t) return;
    const i = (this.taskChain.get(t) ?? Promise.resolve()).then(async () => {
      const n = this.playerMap.get(t);
      if (n) {
        try {
          await n.stop(), await n.destroy();
        } catch (o) {
          this.debug && E.warn("PlayerRegistry", `Error stopping live ${t}:`, o);
        }
        this.playerMap.delete(t), this.debug && E.info("PlayerRegistry", `Stopped playing live ${t}`);
      }
    }), r = i.catch(() => {
    });
    return this.taskChain.set(t, r), i;
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
    await Promise.allSettled(t), this.debug && E.info("PlayerRegistry", "Stopped all players");
  }
  /**
   * 销毁注册表（清理所有资源）
   */
  async destroy() {
    await this.stopAll(), this.playerFactory = null, this.debug && E.info("PlayerRegistry", "Destroyed");
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
const as = S("UserProfileManager");
class cs {
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
      const i = await Kt(t);
      return this.userProfiles = { ...this.userProfiles, ...Object.fromEntries(i) }, this.setLoading(e, !1), i;
    } catch (i) {
      throw this.setLoading(e, !1), as.error("UserProfileManager", "fetchProfiles failed:", i), i;
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
const y = S("LiveMonitorCore");
class Wi {
  constructor(t = {}) {
    this.currentLive = null, this.liveList = [], this.hasMore = !0, this.loading = {}, this.error = null, this.onStateChange = t.onStateChange, this.getActive = t.getActive, this.playerRegistry = new os({
      playerFactory: t.playerFactory,
      debug: !1
    }), this.userProfileManager = new cs({
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
    y.info("init", "init called", {
      hasPlayerFactory: !!t.playerFactory,
      baseURL: t.baseURL
    }), t.playerFactory ? (y.info("LiveMonitorCore", "Setting playerFactory"), this.playerRegistry.setPlayerFactory(t.playerFactory)) : y.warn("LiveMonitorCore", "No playerFactory provided!");
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
    })) : (this.currentLive = null, this.notifyStateChange({ currentLive: null }), O(t).then((i) => {
      i && this.getActive?.() !== !1 && (this.currentLive = i, this.notifyStateChange({ currentLive: i }), this.fetchMuteStatus(t).catch(() => {
      }));
    }).catch((i) => {
      i instanceof f && i.code === 100004 && (this.liveList = this.liveList.filter((r) => r.liveId !== t), this.notifyStateChange({ liveList: this.liveList, currentLive: null }));
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
      const [r, n] = await Promise.allSettled([
        O(e),
        at(e)
      ]);
      let o = null;
      if (r.status === "fulfilled")
        o = r.value;
      else
        throw r.reason;
      const c = n.status === "fulfilled" ? n.value?.Response : null;
      if (o && c && (o.stats = this.mergeStatisticData(o, c)), o && o.anchor?.userId)
        try {
          const l = await ze({
            liveId: e,
            anchorId: o.anchor.userId
          });
          o.streamInfo = l.streamInfo ?? void 0;
        } catch {
        }
      return o && (this.liveList.some((u) => u.liveId === o.liveId) ? this.liveList = this.liveList.map(
        (u) => u.liveId === o.liveId ? o : u
      ) : this.liveList = [o, ...this.liveList], this.currentLive = o), this.setLoading(i, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), o;
    } catch (r) {
      r instanceof f && r.code === 100004 && (this.liveList = this.liveList.filter((o) => o.liveId !== e), this.currentLive?.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }));
      const n = r instanceof Error ? r : new Error(String(r));
      throw this.setError(n), this.setLoading(i, !1), y.error("LiveMonitorCore", "fetchLiveDetail failed:", n), n;
    }
  }
  // ========= 创建直播 =========
  async createLive(t) {
    const e = "create";
    this.setLoading(e, !0), this.setError(null);
    try {
      if (!t.anchorId)
        throw new Error("anchorId is required");
      const r = (await be(t)).liveId || t.liveId, n = r ? await O(r) : null;
      if (!n)
        throw new Error("创建直播成功，但获取详情失败");
      return this.liveList = [n, ...this.liveList], this.currentLive = n, this.setLoading(e, !1), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), n;
    } catch (i) {
      const r = i instanceof Error ? i : new Error(String(i));
      throw this.setError(r), this.setLoading(e, !1), y.error("LiveMonitorCore", "createLive failed:", r), r;
    }
  }
  // ========= 更新直播 =========
  async updateLive(t) {
    const e = t.liveId || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as params.liveId, or call setCurrentLive(liveId) first");
    const i = "update";
    this.setLoading(i, !0), this.setError(null);
    try {
      await Ae(e, t);
      const { liveId: r, ...n } = t;
      this.currentLive && (this.currentLive = { ...this.currentLive, ...n, liveId: this.currentLive.liveId }), this.liveList = this.liveList.map(
        (o) => o.liveId === e ? { ...o, ...n, liveId: o.liveId } : o
      ), this.notifyStateChange({
        currentLive: this.currentLive,
        liveList: this.liveList
      }), this.setLoading(i, !1);
    } catch (r) {
      const n = r instanceof Error ? r : new Error(String(r));
      throw this.setError(n), this.setLoading(i, !1), y.error("LiveMonitorCore", "updateLive failed:", n), n;
    }
  }
  // ========= 结束直播 =========
  async endLive(t) {
    const e = t || this.currentLive?.liveId;
    if (!e) throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const i = "end";
    this.setLoading(i, !0), this.setError(null);
    try {
      await ve(e), this.liveList = this.liveList.filter((r) => r.liveId !== e), this.currentLive && this.currentLive.liveId === e && (this.currentLive = null), this.notifyStateChange({
        liveList: this.liveList,
        currentLive: this.currentLive
      }), this.setLoading(i, !1);
    } catch (r) {
      const n = r instanceof Error ? r : new Error(String(r));
      throw this.setError(n), this.setLoading(i, !1), y.error("LiveMonitorCore", "endLive failed:", n), n;
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
    const e = t || this.currentLive?.liveId, i = t ? this.liveList.find((n) => n.liveId === t) || this.currentLive : this.currentLive;
    if (!e || !i)
      throw new Error("liveId is required: pass it as a parameter, or call setCurrentLive(liveId) first");
    const r = "stats";
    this.setLoading(r, !0);
    try {
      const o = (await at(e))?.Response, c = o ? this.mergeStatisticData(i, o) : i.stats || {
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
    } catch (n) {
      const o = n instanceof Error ? n : new Error(String(n));
      throw this.setError(o), this.setLoading(r, !1), y.error("LiveMonitorCore", "fetchLiveStats failed:", o), o;
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
        await is(t, e), this.liveList = this.liveList.map((i) => i.liveId === t ? { ...i, isMuted: e } : i), this.currentLive && this.currentLive.liveId === t && (this.currentLive = { ...this.currentLive, isMuted: e }, this.notifyStateChange({ currentLive: this.currentLive })), this.notifyStateChange({ liveList: this.liveList });
      } catch (i) {
        const r = i instanceof Error ? i : new Error(String(i));
        throw this.setError(r), y.error("LiveMonitorCore", "setAllMute failed:", r), r;
      }
  }
  /**
   * 从服务器获取全员禁言状态
   * @param liveId 直播间 ID
   */
  async fetchMuteStatus(t) {
    if (t)
      try {
        const e = await rs(t);
        if (e && typeof e == "object") {
          const i = e.isMutedAll ?? !1;
          let r = !1;
          this.liveList = this.liveList.map((n) => n.liveId === t && n.isMuted !== i ? (r = !0, { ...n, isMuted: i }) : n), this.currentLive && this.currentLive.liveId === t && this.currentLive.isMuted !== i && (this.currentLive = { ...this.currentLive, isMuted: i }, r = !0), r && this.notifyStateChange({
            liveList: this.liveList,
            currentLive: this.currentLive
          });
        }
      } catch (e) {
        const i = e instanceof Error ? e : new Error(String(e));
        this.setError(i), y.error("LiveMonitorCore", "fetchMuteStatus failed:", i);
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
const ct = S("PaginatedList");
function lt() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
class Hi {
  constructor(t) {
    this.hasMore = !0, this.pageData = [], this.loading = !1, this.listeners = /* @__PURE__ */ new Set(), this.subscription = null, this.pageSize = t.pageSize ?? 8, this.pageCursors = t.initialPageCursors ?? lt(), this.currentPage = t.initialPage ?? 1, this.fetchPageFn = t.fetchPage, this.pageAction$ = it(), this.destroy$ = it(), this.initPipeline();
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
    ct.info("PaginatedListController", "notify called, listeners:", this.listeners.size, ", snapshot:", { pageDataLength: t.pageData.length, loading: t.loading, currentPage: t.currentPage }), this.listeners.forEach((e) => e(t));
  }
  // -------- 核心翻页（通过 Subject 派发动作，由 fastrx 管线统一处理）--------
  async goToFirstPage() {
    this.pageAction$.next({ type: "goToFirstPage" });
  }
  async prevPage() {
    this.pageAction$.next({ type: "prevPage" });
  }
  async nextPage() {
    this.pageAction$.next({ type: "nextPage" });
  }
  async refreshCurrentPage() {
    this.pageAction$.next({ type: "refreshCurrentPage" });
  }
  async goToPage(t, e) {
    this.pageAction$.next({ type: "goToPage", page: t, pageCursors: e });
  }
  // -------- fastrx 响应式管线 --------
  /**
   * 初始化 fastrx 管线。
   *
   * 管线流程：
   *   pageAction$ → switchMap(同步副作用 + fromPromise(pure fetch)) → subscribe(副作用)
   *                                         └── takeUntil(destroy$)
   *
   * 竞态安全保障：
   * - switchMap 当新 action 到达时取消旧 fromPromise 的订阅
   * - 旧 Promise 仍在后台运行，但其 then/catch 返回的值不会被 subscribe 收到
   * - 因此无需 loadVersion 等手动守卫：`fromPromise + switchMap` 天然只传递最新结果
   *
   * 副作用分隔：
   * - 同步副作用（currentPage/loading/pageCursors 写）在 switchMap callback 中
   * - 异步副作用（pageData/hasMore 写 + notify）在 subscribe callback 中
   */
  initPipeline() {
    if (this.subscription) return;
    const t = this;
    this.subscription = Xt(
      t.pageAction$,
      ne((e) => {
        const i = t.resolveTargetPage(e);
        if (i === null)
          return rt(Promise.resolve(null));
        const r = t.currentPage;
        e.type === "goToFirstPage" ? t.pageCursors = lt() : e.type === "goToPage" && (t.pageCursors = new Map(e.pageCursors)), t.currentPage = i, t.loading = !0;
        const n = new Map(t.pageCursors);
        return rt(
          t.fetchPageFn({
            page: i,
            pageCursors: n,
            count: t.pageSize
          }).then((o) => ({ ok: !0, result: o })).catch((o) => ({ ok: !1, error: o, previousPage: r }))
        );
      }),
      ee(t.destroy$),
      // ── subscribe：仅处理"当前最新"的结果（旧结果已被 switchMap 丢弃） ──
      oe((e) => {
        e !== null && (e.ok ? (t.pageData = e.result.list, t.pageCursors = e.result.pageCursors, t.hasMore = e.result.hasMoreData) : (ct.error("PaginatedListController", "loadPage failed:", e.error), t.currentPage = e.previousPage), t.loading = !1, t.notify());
      })
    );
  }
  /**
   * 计算动作对应的目标页码，返回 null 表示无需执行。
   * 纯函数，不产生副作用。
   */
  resolveTargetPage(t) {
    switch (t.type) {
      case "goToFirstPage":
        return 1;
      case "prevPage":
        return this.currentPage <= 1 ? null : this.currentPage - 1;
      case "nextPage":
        return this.hasMore ? this.currentPage + 1 : null;
      case "refreshCurrentPage":
        return this.currentPage;
      case "goToPage":
        return t.page < 1 ? null : t.page;
    }
  }
  // -------- 清理 --------
  destroy() {
    this.destroy$.next(), this.pageData = [], this.pageCursors.clear(), this.listeners.clear();
  }
}
const L = {
  sc: { code: "zh-Hans", label: "Simplified Chinese" },
  tc: { code: "zh-Hant", label: "Traditional Chinese" },
  en: { code: "en", label: "English" }
}, ut = {
  "zh-Hans": "sc",
  "zh-Hant": "tc",
  en: "en"
}, ji = ["sc", "tc", "en"], zi = 20, Xi = 20, qi = 20, Ji = 100, dt = 50, Zi = 45;
function Ft(s) {
  return new TextEncoder().encode(s).length;
}
function Qi(s, t) {
  if (!s || t <= 0)
    return "";
  let e = "", i = 0;
  for (const r of s) {
    const n = Ft(r);
    if (i + n > t)
      break;
    e += r, i += n;
  }
  return e;
}
function tr(s) {
  if (!s) return "-";
  const t = typeof s == "number" ? s * 1e3 : parseInt(s) * 1e3, e = new Date(t), i = e.getFullYear(), r = String(e.getMonth() + 1).padStart(2, "0"), n = String(e.getDate()).padStart(2, "0"), o = String(e.getHours()).padStart(2, "0"), c = String(e.getMinutes()).padStart(2, "0"), l = String(e.getSeconds()).padStart(2, "0");
  return `${i}-${r}-${n} ${o}:${c}:${l}`;
}
function er(s) {
  return L[s];
}
function xt(s) {
  const t = Object.entries(L).find(([e, i]) => i.code === s);
  return t ? t[0] : void 0;
}
function sr(s) {
  const t = xt(s);
  return t ? L[t].label : s;
}
function ir(s) {
  return typeof s == "string" ? s : typeof s == "number" ? String(s) : s.Language || s.language || "";
}
function Ut() {
  return {
    sc: { name: "", description: "" },
    tc: { name: "", description: "" },
    en: { name: "", description: "" }
  };
}
function ls(s, t) {
  return s?.find((e) => e.language === t);
}
function us(s) {
  const t = Ut(), e = [];
  if (!s || s.length === 0)
    return { config: t, langsToFetch: e };
  for (const i of s) {
    const r = i.language, n = xt(r);
    n && (i.name || i.description ? t[n] = { name: i.name || "", description: i.description || "" } : e.push(n));
  }
  return { config: t, langsToFetch: e };
}
function ds(s, t) {
  const e = L[t].code, i = ls(s, e);
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
function hs(s) {
  return s.trim().toLowerCase();
}
function ht(s, t) {
  return Ft(s) > t;
}
function F(s, t) {
  const e = hs(t);
  return e ? s.filter((i) => {
    const r = (i.id || "").toLowerCase(), n = (i.name || "").toLowerCase(), o = (i.description || "").toLowerCase(), c = (i.categories || []).join(",").toLowerCase();
    return r.includes(e) || n.includes(e) || o.includes(e) || c.includes(e);
  }) : s;
}
function ft(s) {
  const t = s.categories.map((r) => {
    const n = Y(r.languageList, "categoryName", "categoryDescription");
    return {
      ...r,
      name: n?.name || r.defaultName || r.name,
      description: n?.description || r.defaultDescription || r.description
    };
  }), e = /* @__PURE__ */ new Map();
  return t.forEach((r) => {
    e.set(String(r.id), r.name);
  }), { gifts: s.gifts.map((r) => {
    const n = Y(r.languageList, "name", "description"), o = (r.categoryIds || []).map((c) => e.get(String(c)) || c);
    return {
      ...r,
      name: n?.name || r.defaultName || r.name,
      description: n?.description || r.defaultDescription || r.description,
      categories: o
    };
  }), categories: t };
}
const Z = "gift_categories_cache";
function fs(s) {
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
function gs(s, t = sessionStorage) {
  if (s.length !== 0)
    try {
      t.setItem(Z, JSON.stringify(s));
    } catch {
    }
}
function ms(s = sessionStorage) {
  try {
    const t = s.getItem(Z);
    return t ? (s.removeItem(Z), fs(JSON.parse(t))) : [];
  } catch {
    return [];
  }
}
function ps(s) {
  return s.map((t) => {
    const e = Y(t.languageList, "categoryName", "categoryDescription");
    return {
      ...t,
      name: e?.name || t.defaultName || t.name,
      description: e?.description || t.defaultDescription || t.description
    };
  });
}
const B = S("LiveList"), b = {
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
    { key: "liveId", i18nKey: a.LIVE_ID, className: "col-id", minWidth: 80, maxWidth: b.LIVE_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: a.LIVE_TITLE, className: "col-title", minWidth: 120, maxWidth: b.LIVE_TITLE_MAX_WIDTH, fitContent: !0, flexible: !0, ellipsis: !0 },
    { key: "coverUrl", i18nKey: a.COVER_IMAGE, className: "col-cover", width: b.COVER_WIDTH },
    { key: "anchor", i18nKey: a.ANCHOR_ID, className: "col-anchor", minWidth: 80, maxWidth: b.ANCHOR_ID_MAX_WIDTH, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: a.CREATE_TIME, className: "live-list-col-time", width: b.CREATED_AT_WIDTH }
  ];
  return s.hasExtraColumn && t.push({ key: "customer-extra", className: "live-list-col-customer-extra", width: b.EXTRA_COLUMN_WIDTH }), t.push({ key: "actions", i18nKey: a.ACTIONS, className: "live-list-col-action", maxWidth: b.ACTIONS_MAX_WIDTH, fitContent: !0 }), t;
}
function nr(s) {
  const { live: t, t: e, onEnter: i, onDetail: r, onEdit: n, onDelete: o } = s;
  return [
    { key: "enter", label: e(a.ENTER_LIVE), title: e(a.ENTER_LIVE), onClick: () => i(t.liveId) },
    { key: "detail", label: e(a.LIVE_DETAILS), title: e(a.LIVE_DETAILS), onClick: () => r(t) },
    { key: "edit", label: e(a.EDIT), title: e(a.EDIT), onClick: () => n(t) },
    { key: "delete", label: e(a.DISSOLVE), title: e(a.DISSOLVE), danger: !0, onClick: () => o(t) }
  ];
}
async function Is(s, t, e) {
  const i = s.anchor?.userId || "";
  let r = null, n = "";
  try {
    r = await e(s.liveId);
  } catch (c) {
    c instanceof f && (n = W(c.code ?? 0, "", t(a.LIVE_NOT_FOUND)));
  }
  const o = r?.streamInfo ?? null;
  return {
    visible: !0,
    live: s,
    robotId: i ? `live_obs_${i}` : "",
    streamInfo: o,
    robotStatus: o ? "ready" : "none",
    robotStatusText: t(o ? a.OBS_READY : a.OBS_SETUP_FAILED),
    actionLoading: "",
    errorMessage: n
  };
}
const gt = {
  visible: !1,
  live: null,
  robotId: "",
  streamInfo: null,
  robotStatus: "checking",
  robotStatusText: "",
  actionLoading: "",
  errorMessage: ""
}, mt = {
  visible: !1,
  title: "",
  content: "",
  liveId: ""
};
class or {
  constructor(t) {
    this.opts = t, this.state = {
      lives: [],
      loading: !1,
      refreshing: !1,
      currentPage: 1,
      hasMoreData: !0,
      searchInput: "",
      obsModal: { ...gt },
      confirmDialog: { ...mt },
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
    const t = Be();
    this.pageCursors = t.pageCursors, await this.loadPage(t.pageToLoad);
  }
  async loadPage(t) {
    this.setState({ loading: !0 });
    try {
      const e = await Ge({
        page: t,
        pageCursors: this.pageCursors
      });
      this.pageCursors = e.pageCursors, this.setState({
        lives: e.lives,
        currentPage: e.currentPage,
        hasMoreData: e.hasMoreData
      });
    } catch (e) {
      B.error("加载直播列表失败", "", e);
      const i = this.opts.t(a.LOAD_LIVE_LIST_FAILED);
      e instanceof f ? this.opts.toast.error(W(e.code ?? 0, e.message, i)) : this.opts.toast.error(i);
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
    Ve({
      targetPage: t,
      currentPage: this.state.currentPage,
      hasMoreData: this.state.hasMoreData
    }) && (T("ui_action", "pagination", String(t)), this.loadPage(t));
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    this.setState({ searchInput: t });
  }
  isSearchInputTooLong() {
    return Ke(this.state.searchInput, Ue);
  }
  async search() {
    const t = this.state.searchInput.trim();
    if (t) {
      if (this.isSearchInputTooLong()) {
        this.opts.toast.error(this.opts.t(a.INPUT_TOO_LONG));
        return;
      }
      this.setState({ loading: !0 });
      try {
        const e = await Ye(t);
        e ? (this.setState({
          lives: [e],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.success(this.opts.t(a.SEARCH_SUCCESS)), M("live_search", "search", !0, t)) : (this.setState({
          lives: [],
          currentPage: 1,
          hasMoreData: !1
        }), this.opts.toast.error(this.opts.t(a.LIVE_NOT_FOUND)), M("live_search", "search", !1, t));
      } catch (e) {
        if (B.error("搜索直播失败", "", e), M("live_search", "search", !1), e instanceof f)
          this.opts.toast.error(W(
            e.code ?? 0,
            e.message,
            this.opts.t(a.LIVE_NOT_FOUND)
          ));
        else {
          const i = e?.message || this.opts.t(a.NETWORK_ERROR);
          this.opts.toast.error(this.opts.t(a.SEARCH_FAILED, { error: i }));
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
    $e({
      currentPage: this.state.currentPage,
      pageCursors: this.pageCursors
    }), T("ui_action", "enter_live", t), this.opts.onEnterLive(t);
  }
  // -------- 复制 --------
  async copyText(t, e) {
    await et(t);
    const i = e ?? this.opts.t(a.LIVE_ID);
    this.opts.toast.success(this.opts.t(a.COPY_LABEL_COPIED, { label: i }));
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
        robotStatusText: this.opts.t(a.LOADING),
        actionLoading: "stream",
        errorMessage: ""
      }
    });
    const e = await Is(t, this.opts.t, this.opts.fetchLiveDetail);
    this.state.obsModal.visible && this.state.obsModal.live?.liveId === t.liveId && this.setState({ obsModal: e });
  }
  closeDetail() {
    this.setState({ obsModal: { ...gt } });
  }
  // -------- 删除确认 --------
  requestDelete(t) {
    this.setState({
      confirmDialog: {
        visible: !0,
        title: this.opts.t(a.DISSOLVE_CONFIRMATION),
        content: this.opts.t(a.DISSOLVE_DESCRIPTION, {
          liveId: t.liveName || this.opts.t(a.UNNAMED_LIVE)
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
        await this.opts.endLive(t), this.opts.toast.success(this.opts.t(a.DISSOLVE_SUCCESS)), M("live_crud", "delete", !0, t);
        const e = ke({
          currentPage: this.state.currentPage,
          hasMoreData: this.state.hasMoreData,
          livesLength: this.state.lives.length
        });
        await this.loadPage(e);
      } catch (e) {
        B.error("解散直播失败", "", e), M("live_crud", "delete", !1, t), this.opts.toast.error(this.opts.t(a.DISSOLVE_FAILED));
      } finally {
        this.setState({ confirmDialog: { ...mt } });
      }
  }
  // -------- 创建 / 编辑弹窗 --------
  openCreateModal() {
    this.setState({ isCreateModalVisible: !0 }), T("ui_action", "modal", "open", "create_live");
  }
  closeCreateModal() {
    this.setState({ isCreateModalVisible: !1 }), T("ui_action", "modal", "close", "create_live");
  }
  /** 创建成功后调用，关闭弹窗 + 刷新 */
  onLiveCreated() {
    this.setState({ isCreateModalVisible: !1 }), this.refresh();
  }
  openEditModal(t) {
    this.setState({ isEditModalVisible: !0, editingLive: t }), T("ui_action", "modal", "open", "edit_live");
  }
  closeEditModal() {
    this.setState({ isEditModalVisible: !1 }), T("ui_action", "modal", "close", "edit_live");
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
const Ls = S("GiftConfig"), ys = { name: "", description: "" };
class ar {
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
      giftLangConfig: Ut(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...ys },
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
      const t = await this.opts.actions.fetchGiftList(), e = t.giftCategoryList || [], { gifts: i, categories: r } = ft({
        gifts: t.giftList || [],
        categories: e
      });
      this.setState({
        giftList: i,
        displayList: F(i, this.state.searchInput),
        categoryList: r.length > 0 ? r : this.state.categoryList
      });
    } catch (t) {
      Ls.error("fetchGiftConfig", String(this.opts.t(a.GET_GIFT_LIST_FAILED)), t);
      const e = this.formatError(t, this.opts.t(a.GET_GIFT_LIST_FAILED));
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
    const { gifts: t, categories: e } = ft({
      gifts: this.state.giftList,
      categories: this.state.categoryList
    });
    this.setState({
      giftList: t,
      categoryList: e,
      displayList: F(t, this.state.searchInput)
    });
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    const e = String(t ?? "");
    this.setState({ searchInput: e }), !ht(e, dt) && this.setState({ displayList: F(this.state.giftList, e) });
  }
  isSearchInputTooLong() {
    return ht(this.state.searchInput, dt);
  }
  /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
  search() {
    const t = this.state.searchInput.trim();
    if (!t) return;
    if (this.isSearchInputTooLong()) {
      this.opts.toast.error(this.opts.t(a.INPUT_TOO_LONG));
      return;
    }
    const e = F(this.state.giftList, this.state.searchInput);
    e.length > 0 ? (this.setState({ displayList: e }), this.opts.toast.success(this.opts.t("Found results", { count: e.length }))) : (this.setState({ displayList: [] }), this.opts.toast.error(this.opts.t("No gift found", { keyword: t })));
  }
  clearSearch() {
    this.setState({ searchInput: "", displayList: this.state.giftList });
  }
  // -------- 导航 / 复制 --------
  goToCategoryManagement() {
    gs(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await et(String(t || "")), this.opts.toast.success(this.opts.t(a.COPY_LABEL_COPIED, { label: this.opts.t(a.GIFT_ID) }));
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
        this.opts.t(this.state.isEdit ? a.GIFT_UPDATED_SUCCESSFULLY : a.GIFT_CREATED_SUCCESSFULLY)
      ), await this.fetchGiftList(), this.setState({ dialogVisible: !1 });
    } catch (e) {
      throw this.opts.toast.error(this.opts.t(a.OPERATION_FAILED, {
        error: this.extractErrorInfo(e)
      })), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openGiftLangConfigDialog(t) {
    const e = this.state.giftList.find((n) => n.id === t), { config: i, langsToFetch: r } = us(e?.languageList);
    if (this.setState({
      editingId: t,
      giftLangConfig: i,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const n = await Promise.allSettled(
          r.map(async (c) => {
            const l = await this.opts.actions.getGiftLanguage({
              giftId: t,
              language: L[c].code
            });
            return { langKey: c, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const o = { ...this.state.giftLangConfig };
        for (const c of n)
          if (c.status === "fulfilled") {
            const { langKey: l, result: u } = c.value;
            o[l] = { name: u.name || "", description: u.description || "" };
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
    const i = this.state.giftList.find((o) => o.id === t), r = ds(i?.languageList, e);
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
    const { editingGiftForLang: t, editingLang: e, langEditForm: i, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        i.name && (await this.opts.actions.setGiftLanguage({
          giftId: t,
          language: L[e].code,
          name: i.name,
          description: i.description
        }), this.opts.toast.success(this.opts.t(a.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchGiftList(), r && this.state.editingLang === e && this.setState({
          giftLangConfig: {
            ...this.state.giftLangConfig,
            [e]: { ...i }
          }
        });
      } catch (n) {
        this.opts.toast.error(this.opts.t(a.OPERATION_FAILED, {
          error: this.extractErrorInfo(n)
        }));
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftLanguage({ giftId: t, language: L[e].code }), this.opts.toast.success(this.opts.t(a.LANGUAGE_CONFIG_CLEARED)), this.setState({
        giftLangConfig: {
          ...this.state.giftLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchGiftList();
    } catch (i) {
      this.opts.toast.error(this.opts.t(a.OPERATION_FAILED, {
        error: this.extractErrorInfo(i)
      }));
    }
  }
  // -------- 类别编辑弹窗 --------
  openCategoryEditDialog(t) {
    const e = this.state.categoryList.map((n) => ({
      id: String(n.id || ""),
      name: n.name || "",
      giftIds: (n.giftIds || []).map(String)
    })), i = (t.categoryIds || []).map(String);
    let r = i;
    i.length === 0 && e.length > 0 && (r = e.filter((n) => n.giftIds.includes(String(t.id))).map((n) => n.id)), this.setState({
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
        }), this.opts.toast.success(this.opts.t(a.CATEGORY_ADDED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(a.OPERATION_FAILED, {
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
        }), this.opts.toast.success(this.opts.t(a.CATEGORY_REMOVED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(a.OPERATION_FAILED, {
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
        await this.opts.actions.deleteGift(t.id), this.opts.toast.success(this.opts.t(a.GIFT_DELETED_SUCCESSFULLY)), await this.fetchGiftList();
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(a.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return e?.ErrorInfo || e?.message || this.opts.t(a.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const i = t;
    return i?.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i?.message ? `${e}: ${i.message}` : e;
  }
}
const Ss = S("GiftCategory"), pt = {
  categoryId: "",
  name: "",
  description: ""
}, It = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, Lt = { name: "", description: "" };
class cr {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      categoryList: [],
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      formData: { ...pt },
      langConfigVisible: !1,
      categoryLangConfig: yt(It),
      langEditVisible: !1,
      editingLang: null,
      editingCategoryForLang: "",
      langEditForm: { ...Lt },
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
      const e = ms();
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
      Ss.error("fetchCategoryList", String(this.opts.t(a.GET_CATEGORY_LIST_FAILED)), e), this.opts.toast.error(this.formatError(e, this.opts.t(a.GET_CATEGORY_LIST_FAILED))), this.setState({ categoryList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    this.state.categoryList.length !== 0 && this.setState({ categoryList: ps(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await et(String(t || "")), this.opts.toast.success(
      this.opts.t(a.COPY_LABEL_COPIED, { label: this.opts.t(a.CATEGORY_ID) })
    );
  }
  // -------- 新增 / 编辑弹窗 --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      formData: { ...pt },
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
      }), this.opts.toast.success(this.opts.t(a.CATEGORY_UPDATED_SUCCESSFULLY))) : (await this.opts.actions.createGiftCategory({
        categoryId: t.categoryId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(a.CATEGORY_CREATED_SUCCESSFULLY))), this.setState({ dialogVisible: !1 }), await this.fetchCategoryList(!1);
    } catch (e) {
      throw this.opts.toast.error(
        this.opts.t(a.OPERATION_FAILED, { error: this.extractErrorInfo(e) })
      ), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openLangConfigDialog(t) {
    const e = this.state.categoryList.find((n) => n.id === t), i = yt(It), r = [];
    if (e?.languageList && e.languageList.length > 0)
      for (const n of e.languageList) {
        const o = K(n);
        o.langKey && (o.name || o.description ? i[o.langKey] = { name: o.name, description: o.description } : r.push(o.langKey));
      }
    if (this.setState({
      editingId: t,
      categoryLangConfig: i,
      langConfigVisible: !0
    }), r.length !== 0)
      try {
        const n = await Promise.allSettled(
          r.map(async (c) => {
            const l = await this.opts.actions.getGiftCategoryLanguage(
              t,
              L[c].code
            );
            return { langKey: c, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const o = { ...this.state.categoryLangConfig };
        for (const c of n)
          if (c.status === "fulfilled") {
            const { langKey: l, result: u } = c.value;
            o[l] = { name: u.name || "", description: u.description || "" };
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
    const i = this.state.categoryList.find((c) => c.id === t), r = L[e].code, n = i?.languageList?.find((c) => K(c).langCode === r);
    let o = { ...Lt };
    if (n) {
      const c = K(n);
      if (c.name || c.description)
        o = { name: c.name, description: c.description };
      else
        try {
          const l = await this.opts.actions.getGiftCategoryLanguage(t, r);
          o = { name: l.name || "", description: l.description || "" };
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
    const { editingCategoryForLang: t, editingLang: e, langEditForm: i, langConfigVisible: r } = this.state;
    if (!(!t || !e))
      try {
        i.name && (await this.opts.actions.setGiftCategoryLanguage(
          t,
          L[e].code,
          i.name,
          i.description
        ), this.opts.toast.success(this.opts.t(a.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchCategoryList(!1), r && this.state.editingId === t && this.state.editingLang === e && this.setState({
          categoryLangConfig: {
            ...this.state.categoryLangConfig,
            [e]: { ...i }
          }
        });
      } catch (n) {
        this.opts.toast.error(
          this.opts.t(a.OPERATION_FAILED, { error: this.extractErrorInfo(n) })
        );
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftCategoryLanguage(t, L[e].code), this.opts.toast.success(this.opts.t(a.LANGUAGE_CONFIG_CLEARED)), this.setState({
        categoryLangConfig: {
          ...this.state.categoryLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchCategoryList(!1);
    } catch (i) {
      this.opts.toast.error(
        this.opts.t(a.OPERATION_FAILED, { error: this.extractErrorInfo(i) })
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
        await this.opts.actions.deleteGiftCategory(t.id), this.opts.toast.success(this.opts.t(a.CATEGORY_DELETED_SUCCESSFULLY)), await this.fetchCategoryList(!1);
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(a.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return e?.ErrorInfo || e?.message || this.opts.t(a.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const i = t;
    return i?.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i?.message ? `${e}: ${i.message}` : e;
  }
}
function yt(s) {
  return {
    sc: { ...s.sc },
    tc: { ...s.tc },
    en: { ...s.en }
  };
}
function K(s) {
  if (typeof s == "string")
    return { langCode: s, langKey: ut[s], name: "", description: "" };
  const t = s.language || "";
  return {
    langCode: t,
    langKey: t ? ut[t] : void 0,
    name: s.categoryName || "",
    description: s.categoryDescription || ""
  };
}
export {
  gs as $,
  Hs as A,
  Ai as B,
  v as C,
  Qe as D,
  X as E,
  xe as F,
  Z as G,
  z as H,
  Zi as I,
  Ue as J,
  js as K,
  _t as L,
  di as M,
  or as N,
  Wi as O,
  Xe as P,
  Rt as Q,
  bi as R,
  Vs as S,
  P as T,
  x as U,
  pe as V,
  Oi as W,
  ti as X,
  Ie as Y,
  nr as Z,
  Is as _,
  oe as a,
  xi as a$,
  ni as a0,
  Li as a1,
  oi as a2,
  ii as a3,
  Ve as a4,
  Se as a5,
  fi as a6,
  ms as a7,
  fs as a8,
  et as a9,
  qs as aA,
  Qs as aB,
  Ks as aC,
  us as aD,
  ds as aE,
  ir as aF,
  er as aG,
  xt as aH,
  sr as aI,
  rr as aJ,
  ke as aK,
  ki as aL,
  rs as aM,
  wt as aN,
  Rs as aO,
  si as aP,
  ye as aQ,
  Ni as aR,
  Ci as aS,
  Fi as aT,
  Le as aU,
  Di as aV,
  Js as aW,
  Vi as aX,
  ht as aY,
  Ke as aZ,
  Ti as a_,
  ws as aa,
  zs as ab,
  Xs as ac,
  Ut as ad,
  $s as ae,
  V as af,
  le as ag,
  Ee as ah,
  gi as ai,
  Ii as aj,
  ei as ak,
  Ms as al,
  de as am,
  wi as an,
  Ge as ao,
  _i as ap,
  F as aq,
  ui as ar,
  Ui as as,
  Ei as at,
  ci as au,
  vi as av,
  Gi as aw,
  tr as ax,
  Me as ay,
  H as az,
  ne as b,
  xs as b0,
  Fs as b1,
  Us as b2,
  Ns as b3,
  pi as b4,
  Mi as b5,
  Bi as b6,
  hs as b7,
  ae as b8,
  Bs as b9,
  Ri as bA,
  Ki as bB,
  Zs as bC,
  ri as bD,
  we as bE,
  De as bF,
  Hi as bG,
  _s as bH,
  As as bI,
  Gs as ba,
  ps as bb,
  ft as bc,
  ks as bd,
  Ys as be,
  Ws as bf,
  Be as bg,
  ue as bh,
  Ts as bi,
  $e as bj,
  Ye as bk,
  ss as bl,
  $i as bm,
  ns as bn,
  Yi as bo,
  Ds as bp,
  is as bq,
  hi as br,
  li as bs,
  Ps as bt,
  Os as bu,
  Si as bv,
  yi as bw,
  Qi as bx,
  Pi as by,
  mi as bz,
  bs as c,
  me as d,
  ve as e,
  rt as f,
  O as g,
  Ze as h,
  ge as i,
  ai as j,
  qi as k,
  Ji as l,
  _e as m,
  zi as n,
  Xi as o,
  Xt as p,
  dt as q,
  cr as r,
  it as s,
  ee as t,
  Te as u,
  ar as v,
  ut as w,
  ji as x,
  L as y,
  fe as z
};
