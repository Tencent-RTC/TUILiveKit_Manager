import { bL as B, bM as z, s as I, p as C, f as g, t as D } from "./main-layout.CM11iefe.js";
import { s as P, t as R, a as j, f as F } from "./utils.C6Y5FhVw.js";
import { aL as _, av as G, R as q } from "./layout.CzmvDFr9.js";
class H extends z {
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
class v extends z {
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
class k extends H {
}
class K extends v {
  next(e) {
    this.subInner(e, k), this.next = (t) => {
      this.currentSink.dispose(), this.subInner(t, k);
    };
  }
}
const W = B(K, "switchMap"), J = 600 * 1e3;
class se {
  constructor(e) {
    this.subscription = null, this.pageSize = e.pageSize ?? 8, this.refreshIntervalMs = e.refreshIntervalMs ?? _() ?? J, this.options = e, this.pageData$ = I(), this.stop$ = I();
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
      F(() => !e.options.isUnmounted() && !e.options.isSearchMode()),
      // ── 第 2 层：switchMap 自动取消旧轮询（参考 TRTC_Next volume-evalution.ts 模式） ──
      W((t) => {
        const s = Array.from(
          new Set(
            t.slice(0, e.pageSize).map((i) => i.liveId).filter(Boolean)
          )
        );
        return s.length === 0 ? g(Promise.resolve(/* @__PURE__ */ new Map())) : C(
          // timer(0, INTERVAL): 立即执行 + 日后每 INTERVAL
          D(0, e.refreshIntervalMs),
          // API 调用（带搜索/卸载保护）
          W(() => {
            if (e.options.isUnmounted() || e.options.isSearchMode())
              return g(Promise.resolve(/* @__PURE__ */ new Map()));
            const { startTime: i, endTime: r } = e.options.getTimeRange();
            return g(G(s, 10, i, r));
          }),
          // 搜索/卸载时自动停止链（下次 tick 生效）
          j(
            () => !e.options.isUnmounted() && !e.options.isSearchMode()
          ),
          // stop() 立即终止
          R(e.stop$)
        );
      }),
      // ── 第 3 层：外层 stop 守卫 ──
      R(e.stop$),
      // ── 订阅（参考 TRTC_Next audio-decoder.ts 模式） ──
      P(
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
function x(n, e) {
  if (typeof document > "u") return 0;
  const t = `${n}:${e}`, s = b.get(t);
  if (s !== void 0) return s;
  const i = document.createElement("span");
  i.className = n, n.includes("live-card-tag-overlay") && !n.includes("live-card-tag-more") ? i.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${e}` : i.textContent = e, i.style.visibility = "hidden", i.style.position = "absolute", i.style.left = "-9999px", i.style.top = "-9999px", i.style.pointerEvents = "none", document.body.appendChild(i);
  const r = i.getBoundingClientRect().width;
  return document.body.removeChild(i), b.set(t, r), r;
}
function N() {
  b.clear();
}
function $(n) {
  const e = n.roomIdText ?? n.liveIdText ?? "", {
    containerWidth: t,
    tagTexts: s,
    idLeftOffset: i = 6,
    tagsRightOffset: r = 8,
    tagGap: a = 6,
    safeGap: u = 12,
    minVisibleTags: l = 2,
    maxVisibleTags: m = 99
  } = n, M = x("live-id-badge", e), L = i + M, y = t - r, p = s.map(
    (o) => x("live-card-tag-overlay", o)
  ), f = x("live-card-tag-overlay live-card-tag-more", "...");
  let d = 0, h = 0;
  for (let o = 0; o < p.length; o++) {
    const c = p[o], w = p.length - o - 1, E = w > 0 ? f : 0, S = h > 0 ? a : 0, O = d + S + c + (w > 0 ? a + E : 0), T = y - O, U = Math.max(60, T - i - u);
    if (M > U || T < L + u)
      break;
    d += S + c, h++;
  }
  if (p.length - h > 0 && (d += a + f), s.length >= l && h < l) {
    let o = 0;
    for (let c = 0; c < l; c++)
      o += (c > 0 ? a : 0) + p[c];
    s.length > l && (o += a + f), h = l, d = o;
  }
  if (h > m) {
    h = m;
    let o = 0;
    for (let c = 0; c < m; c++)
      o += (c > 0 ? a : 0) + p[c];
    s.length > m && (o += a + f), d = o;
  }
  const V = y - d, A = Math.max(
    60,
    V - i - u
  );
  return {
    visibleCount: h,
    showMore: s.length > h,
    idMaxWidth: `${Math.round(A)}px`,
    tagsMaxWidth: `${Math.round(d)}px`
  };
}
function ie(n, e, t, s, i) {
  return n.map((r) => {
    const a = e(r), u = t(r);
    return $({
      containerWidth: i,
      roomIdText: `${s("Room ID")}: ${a}`,
      tagTexts: u.map((l) => s(l))
    });
  });
}
class ne {
  constructor(e) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = e.containerSelector, this.t = e.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(e, t) {
    const s = this.cache.get(e);
    if (s) return s;
    const i = $({
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
    this.cache.clear(), N();
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
      roomIdText: `${this.t(q.LIVE_ID)}: ${e}`,
      tagTexts: t.map((s) => this.t(s)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const e = document.querySelector(this.containerSelector);
    if (!e) return 300;
    const t = window.getComputedStyle(e), s = parseFloat(t.gap) || 8, i = t.gridTemplateColumns, r = i.match(/repeat\((\d+)/), a = r ? parseInt(r[1], 10) : i.split(" ").length || 1;
    return (e.clientWidth - s * (a - 1)) / a;
  }
}
export {
  ne as A,
  se as V,
  $ as a,
  ie as b,
  N as c,
  W as s
};
