import { c8 as D, c9 as $, s as T, p as C, f as g, t as j, b3 as P } from "./main-layout.mc55E2SN.js";
import { s as _, t as R, a as F, f as G } from "./utils.UUWrENpa.js";
import { au as q, I as H } from "./layout.BIfRE2CE.js";
import { j as k } from "./logger.h-0kjLdM.js";
class K extends $ {
  constructor(e, t, s) {
    super(e), this.data = t, this.context = s;
  }
  next(e) {
    const t = this.context.combineResults;
    t ? this.sink.next(t(this.data, e)) : this.sink.next(e);
  }
  // 如果complete先于context的complete触发，则激活原始的context的complete
  tryComplete() {
    this.context.resetComplete(), this.dispose();
  }
}
class v extends $ {
  constructor(e, t, s) {
    super(e), this.makeSource = t, this.combineResults = s, this.index = 0;
  }
  subInner(e, t) {
    const s = this.currentSink = new t(this.sink, e, this);
    this.complete === v.prototype.complete && (this.complete = this.tryComplete), s.complete = s.tryComplete, s.subscribe(this.makeSource(e, this.index++));
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
class W extends K {
}
class J extends v {
  next(e) {
    this.subInner(e, W), this.next = (t) => {
      this.currentSink.dispose(), this.subInner(t, W);
    };
  }
}
const z = D(J, "switchMap"), N = 600 * 1e3;
class ne {
  constructor(e) {
    this.subscription = null, this.pageSize = e.pageSize ?? 8, this.refreshIntervalMs = e.refreshIntervalMs ?? q() ?? N, this.options = e, this.pageData$ = T(), this.stop$ = T();
  }
  /**
   * 初始化轮询管线（首次 feed 前调用一次）
   */
  ensureStarted() {
    if (this.subscription) return;
    const e = this;
    this.subscription = C(
      e.pageData$,
      // ── 第 1 层：过滤无效状态 ──
      G(() => !e.options.isUnmounted() && !e.options.isSearchMode()),
      // ── 第 2 层：switchMap 自动取消旧轮询（参考 TRTC_Next volume-evalution.ts 模式） ──
      z((t) => {
        const s = Array.from(
          new Set(
            t.slice(0, e.pageSize).map((n) => n.liveId).filter(Boolean)
          )
        ), i = /* @__PURE__ */ new Map();
        return t.forEach((n) => {
          n.liveId && n.createdAt && i.set(n.liveId, n.createdAt);
        }), s.length === 0 ? g(Promise.resolve(/* @__PURE__ */ new Map())) : C(
          // timer(0, INTERVAL): 立即执行 + 日后每 INTERVAL
          j(0, e.refreshIntervalMs),
          // API 调用（带搜索/卸载保护）
          z(() => {
            if (e.options.isUnmounted() || e.options.isSearchMode())
              return g(Promise.resolve(/* @__PURE__ */ new Map()));
            const { startTime: n, endTime: r } = e.options.getTimeRange();
            return g(
              P(s, 10, n, r, i).then((l) => (k("av_moderation"), k("moderation"), l))
            );
          }),
          // 搜索/卸载时自动停止链（下次 tick 生效）
          F(
            () => !e.options.isUnmounted() && !e.options.isSearchMode()
          ),
          // stop() 立即终止
          R(e.stop$)
        );
      }),
      // ── 第 3 层：外层 stop 守卫 ──
      R(e.stop$),
      // ── 订阅（参考 TRTC_Next audio-decoder.ts 模式） ──
      _(
        (t) => {
          if (e.options.isUnmounted() || e.options.isSearchMode() || t.size === 0) return;
          const s = Array.from(t.keys());
          e.options.onUpdate(s, t);
        },
        (t) => {
          e.options.onError?.(t);
        }
      )
      // fastrx pipe() 在有 subscribe() 时返回 Subscribe<unknown>，
      // 但嵌套 pipe 在 switchMap 中的类型推断在某些版本中可能丢失泛型，
      // 此处显式断言以兼容不同 fastrx 版本的类型签名
    );
  }
  /**
   * 驱动新数据（pageData/翻页变化时调用）
   */
  feed(e) {
    this.pageData$.next(e);
  }
  /**
   * 停止所有轮询并清理
   */
  stop() {
    this.subscription && (this.stop$.next(), this.subscription.dispose?.(), this.subscription = null);
  }
}
const b = /* @__PURE__ */ new Map();
function x(o, e) {
  if (typeof document > "u") return 0;
  const t = `${o}:${e}`, s = b.get(t);
  if (s !== void 0) return s;
  const i = document.createElement("span");
  i.className = o, o.includes("live-card-tag-overlay") && !o.includes("live-card-tag-more") ? i.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${e}` : i.textContent = e, i.style.visibility = "hidden", i.style.position = "absolute", i.style.left = "-9999px", i.style.top = "-9999px", i.style.pointerEvents = "none", document.body.appendChild(i);
  const n = i.getBoundingClientRect().width;
  return document.body.removeChild(i), b.set(t, n), n;
}
function Q() {
  b.clear();
}
function A(o) {
  const e = o.roomIdText ?? o.liveIdText ?? "", {
    containerWidth: t,
    tagTexts: s,
    idLeftOffset: i = 6,
    tagsRightOffset: n = 8,
    tagGap: r = 6,
    safeGap: l = 12,
    minVisibleTags: d = 2,
    maxVisibleTags: m = 99
  } = o, M = x("live-id-badge", e), E = i + M, y = t - n, u = s.map(
    (a) => x("live-card-tag-overlay", a)
  ), f = x("live-card-tag-overlay live-card-tag-more", "...");
  let p = 0, h = 0;
  for (let a = 0; a < u.length; a++) {
    const c = u[a], w = u.length - a - 1, O = w > 0 ? f : 0, I = h > 0 ? r : 0, U = p + I + c + (w > 0 ? r + O : 0), S = y - U, B = Math.max(60, S - i - l);
    if (M > B || S < E + l)
      break;
    p += I + c, h++;
  }
  if (u.length - h > 0 && (p += r + f), s.length >= d && h < d) {
    let a = 0;
    for (let c = 0; c < d; c++)
      a += (c > 0 ? r : 0) + u[c];
    s.length > d && (a += r + f), h = d, p = a;
  }
  if (h > m) {
    h = m;
    let a = 0;
    for (let c = 0; c < m; c++)
      a += (c > 0 ? r : 0) + u[c];
    s.length > m && (a += r + f), p = a;
  }
  const L = y - p, V = Math.max(
    60,
    L - i - l
  );
  return {
    visibleCount: h,
    showMore: s.length > h,
    idMaxWidth: `${Math.round(V)}px`,
    tagsMaxWidth: `${Math.round(p)}px`
  };
}
function oe(o, e, t, s, i) {
  return o.map((n) => {
    const r = e(n), l = t(n);
    return A({
      containerWidth: i,
      roomIdText: `${s("Room ID")}: ${r}`,
      tagTexts: l.map((d) => s(d))
    });
  });
}
class re {
  constructor(e) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = e.containerSelector, this.t = e.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(e, t) {
    const s = this.cache.get(e);
    if (s) return s;
    const i = A({
      ...this.buildOptions(e, t.tags || [])
      // 允许调用方覆盖
    });
    return this.cache.set(e, i), i;
  }
  /** 获取缓存结果，无缓存时返回保守默认值 */
  getResult(e) {
    return this.cache.get(e) || {
      visibleCount: 0,
      showMore: !1,
      idMaxWidth: "calc(100% - 12px)",
      tagsMaxWidth: "0px"
    };
  }
  /** 清除缓存（窗口缩放或字体变化时调用） */
  clearCache() {
    this.cache.clear(), Q();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(e) {
    this.onResize = e;
    const t = document.querySelector(this.containerSelector);
    t && (this.resizeObserver = new ResizeObserver((s) => {
      for (const i of s)
        if (i.contentRect.width > 0) {
          this.clearCache(), this.onResize?.();
          break;
        }
    }), this.resizeObserver.observe(t));
  }
  /** 停止监听（外部在 onUnmounted/cleanup 中调用） */
  disconnect() {
    this.resizeObserver?.disconnect(), this.resizeObserver = null, this.onResize = null;
  }
  /** 为列表批量初始化缓存（每次调用都会清除旧缓存并重新计算） */
  initForList(e) {
    this.clearCache();
    for (const t of e)
      this.compute(t.liveId, t);
  }
  /** 获取当前缓存（只读，用于框架响应式同步） */
  getCache() {
    return this.cache;
  }
  buildOptions(e, t) {
    return {
      containerWidth: this.getContainerWidth(),
      roomIdText: `${this.t(H.LIVE_ID)}: ${e}`,
      tagTexts: t.map((s) => this.t(s)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const e = document.querySelector(this.containerSelector);
    if (!e) return 300;
    const t = window.getComputedStyle(e), s = parseFloat(t.gap) || 8, i = t.gridTemplateColumns, n = i.match(/repeat\((\d+)/), r = n ? parseInt(n[1], 10) : i.split(" ").length || 1;
    return (e.clientWidth - s * (r - 1)) / r;
  }
}
export {
  re as A,
  ne as V,
  A as a,
  oe as b,
  Q as c,
  z as s
};
