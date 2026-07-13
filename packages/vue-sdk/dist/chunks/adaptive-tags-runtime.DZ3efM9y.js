import { bK as D, bL as $, s as I, p as C, f as g, t as j } from "./main-layout.DLWT3EVA.js";
import { s as P, t as R, a as _, f as F } from "./utils.CkhUhDme.js";
import { aV as G, aA as q, I as H } from "./layout.B11gjrzt.js";
import { j as k } from "./logger.D3BLOWQd.js";
class K extends $ {
  constructor(t, e, s) {
    super(t), this.data = e, this.context = s;
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
class v extends $ {
  constructor(t, e, s) {
    super(t), this.makeSource = e, this.combineResults = s, this.index = 0;
  }
  subInner(t, e) {
    const s = this.currentSink = new e(this.sink, t, this);
    this.complete === v.prototype.complete && (this.complete = this.tryComplete), s.complete = s.tryComplete, s.subscribe(this.makeSource(t, this.index++));
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
  next(t) {
    this.subInner(t, W), this.next = (e) => {
      this.currentSink.dispose(), this.subInner(e, W);
    };
  }
}
const z = D(J, "switchMap"), N = 600 * 1e3;
class nt {
  constructor(t) {
    this.subscription = null, this.pageSize = t.pageSize ?? 8, this.refreshIntervalMs = t.refreshIntervalMs ?? G() ?? N, this.options = t, this.pageData$ = I(), this.stop$ = I();
  }
  /**
   * 初始化轮询管线（首次 feed 前调用一次）
   */
  ensureStarted() {
    if (this.subscription) return;
    const t = this;
    this.subscription = C(
      t.pageData$,
      // ── 第 1 层：过滤无效状态 ──
      F(() => !t.options.isUnmounted() && !t.options.isSearchMode()),
      // ── 第 2 层：switchMap 自动取消旧轮询（参考 TRTC_Next volume-evalution.ts 模式） ──
      z((e) => {
        const s = Array.from(
          new Set(
            e.slice(0, t.pageSize).map((i) => i.liveId).filter(Boolean)
          )
        );
        return s.length === 0 ? g(Promise.resolve(/* @__PURE__ */ new Map())) : C(
          // timer(0, INTERVAL): 立即执行 + 日后每 INTERVAL
          j(0, t.refreshIntervalMs),
          // API 调用（带搜索/卸载保护）
          z(() => {
            if (t.options.isUnmounted() || t.options.isSearchMode())
              return g(Promise.resolve(/* @__PURE__ */ new Map()));
            const { startTime: i, endTime: a } = t.options.getTimeRange();
            return g(
              q(s, 10, i, a).then((o) => (k("av_moderation"), k("moderation"), o))
            );
          }),
          // 搜索/卸载时自动停止链（下次 tick 生效）
          _(
            () => !t.options.isUnmounted() && !t.options.isSearchMode()
          ),
          // stop() 立即终止
          R(t.stop$)
        );
      }),
      // ── 第 3 层：外层 stop 守卫 ──
      R(t.stop$),
      // ── 订阅（参考 TRTC_Next audio-decoder.ts 模式） ──
      P(
        (e) => {
          if (t.options.isUnmounted() || t.options.isSearchMode() || e.size === 0) return;
          const s = Array.from(e.keys());
          t.options.onUpdate(s, e);
        },
        (e) => {
          t.options.onError?.(e);
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
  feed(t) {
    this.pageData$.next(t);
  }
  /**
   * 停止所有轮询并清理
   */
  stop() {
    this.subscription && (this.stop$.next(), this.subscription.dispose?.(), this.subscription = null);
  }
}
const b = /* @__PURE__ */ new Map();
function x(n, t) {
  if (typeof document > "u") return 0;
  const e = `${n}:${t}`, s = b.get(e);
  if (s !== void 0) return s;
  const i = document.createElement("span");
  i.className = n, n.includes("live-card-tag-overlay") && !n.includes("live-card-tag-more") ? i.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${t}` : i.textContent = t, i.style.visibility = "hidden", i.style.position = "absolute", i.style.left = "-9999px", i.style.top = "-9999px", i.style.pointerEvents = "none", document.body.appendChild(i);
  const a = i.getBoundingClientRect().width;
  return document.body.removeChild(i), b.set(e, a), a;
}
function Q() {
  b.clear();
}
function L(n) {
  const t = n.roomIdText ?? n.liveIdText ?? "", {
    containerWidth: e,
    tagTexts: s,
    idLeftOffset: i = 6,
    tagsRightOffset: a = 8,
    tagGap: o = 6,
    safeGap: u = 12,
    minVisibleTags: l = 2,
    maxVisibleTags: m = 99
  } = n, M = x("live-id-badge", t), V = i + M, y = e - a, p = s.map(
    (r) => x("live-card-tag-overlay", r)
  ), f = x("live-card-tag-overlay live-card-tag-more", "...");
  let d = 0, h = 0;
  for (let r = 0; r < p.length; r++) {
    const c = p[r], w = p.length - r - 1, O = w > 0 ? f : 0, S = h > 0 ? o : 0, U = d + S + c + (w > 0 ? o + O : 0), T = y - U, B = Math.max(60, T - i - u);
    if (M > B || T < V + u)
      break;
    d += S + c, h++;
  }
  if (p.length - h > 0 && (d += o + f), s.length >= l && h < l) {
    let r = 0;
    for (let c = 0; c < l; c++)
      r += (c > 0 ? o : 0) + p[c];
    s.length > l && (r += o + f), h = l, d = r;
  }
  if (h > m) {
    h = m;
    let r = 0;
    for (let c = 0; c < m; c++)
      r += (c > 0 ? o : 0) + p[c];
    s.length > m && (r += o + f), d = r;
  }
  const A = y - d, E = Math.max(
    60,
    A - i - u
  );
  return {
    visibleCount: h,
    showMore: s.length > h,
    idMaxWidth: `${Math.round(E)}px`,
    tagsMaxWidth: `${Math.round(d)}px`
  };
}
function ot(n, t, e, s, i) {
  return n.map((a) => {
    const o = t(a), u = e(a);
    return L({
      containerWidth: i,
      roomIdText: `${s("Room ID")}: ${o}`,
      tagTexts: u.map((l) => s(l))
    });
  });
}
class rt {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = t.containerSelector, this.t = t.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(t, e) {
    const s = this.cache.get(t);
    if (s) return s;
    const i = L({
      ...this.buildOptions(t, e.tags || [])
      // 允许调用方覆盖
    });
    return this.cache.set(t, i), i;
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
    this.cache.clear(), Q();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(t) {
    this.onResize = t;
    const e = document.querySelector(this.containerSelector);
    e && (this.resizeObserver = new ResizeObserver((s) => {
      for (const i of s)
        if (i.contentRect.width > 0) {
          this.clearCache(), this.onResize?.();
          break;
        }
    }), this.resizeObserver.observe(e));
  }
  /** 停止监听（外部在 onUnmounted/cleanup 中调用） */
  disconnect() {
    this.resizeObserver?.disconnect(), this.resizeObserver = null, this.onResize = null;
  }
  /** 为列表批量初始化缓存（每次调用都会清除旧缓存并重新计算） */
  initForList(t) {
    this.clearCache();
    for (const e of t)
      this.compute(e.liveId, e);
  }
  /** 获取当前缓存（只读，用于框架响应式同步） */
  getCache() {
    return this.cache;
  }
  buildOptions(t, e) {
    return {
      containerWidth: this.getContainerWidth(),
      roomIdText: `${this.t(H.LIVE_ID)}: ${t}`,
      tagTexts: e.map((s) => this.t(s)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const t = document.querySelector(this.containerSelector);
    if (!t) return 300;
    const e = window.getComputedStyle(t), s = parseFloat(e.gap) || 8, i = e.gridTemplateColumns, a = i.match(/repeat\((\d+)/), o = a ? parseInt(a[1], 10) : i.split(" ").length || 1;
    return (t.clientWidth - s * (o - 1)) / o;
  }
}
export {
  rt as A,
  nt as V,
  L as a,
  ot as b,
  Q as c,
  z as s
};
