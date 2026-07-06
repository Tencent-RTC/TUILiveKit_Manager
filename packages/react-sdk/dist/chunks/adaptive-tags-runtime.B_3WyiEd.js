import { s as I, p as W, a as O, t as R, b as S, f as m, c as k, bH as U, bI as B } from "./main-layout.DZAH01ts.js";
import { aJ as D, a7 as P } from "./layout.5hoGLPKE.js";
const j = 600 * 1e3;
class K {
  constructor(e) {
    this.subscription = null, this.pageSize = e.pageSize ?? 8, this.refreshIntervalMs = e.refreshIntervalMs ?? D() ?? j, this.options = e, this.pageData$ = I(), this.stop$ = I();
  }
  /**
   * 初始化轮询管线（首次 feed 前调用一次）
   */
  ensureStarted() {
    if (this.subscription) return;
    const e = this;
    this.subscription = W(
      e.pageData$,
      // ── 第 1 层：过滤无效状态 ──
      B(() => !e.options.isUnmounted() && !e.options.isSearchMode()),
      // ── 第 2 层：switchMap 自动取消旧轮询（参考 TRTC_Next volume-evalution.ts 模式） ──
      S((i) => {
        const s = Array.from(
          new Set(
            i.slice(0, e.pageSize).map((t) => t.liveId).filter(Boolean)
          )
        );
        return s.length === 0 ? m(Promise.resolve(/* @__PURE__ */ new Map())) : W(
          // timer(0, INTERVAL): 立即执行 + 日后每 INTERVAL
          k(0, e.refreshIntervalMs),
          // API 调用（带搜索/卸载保护）
          S(() => {
            if (e.options.isUnmounted() || e.options.isSearchMode())
              return m(Promise.resolve(/* @__PURE__ */ new Map()));
            const { startTime: t, endTime: r } = e.options.getTimeRange();
            return m(P(s, 10, t, r));
          }),
          // 搜索/卸载时自动停止链（下次 tick 生效）
          U(
            () => !e.options.isUnmounted() && !e.options.isSearchMode()
          ),
          // stop() 立即终止
          R(e.stop$)
        );
      }),
      // ── 第 3 层：外层 stop 守卫 ──
      R(e.stop$),
      // ── 订阅（参考 TRTC_Next audio-decoder.ts 模式） ──
      O(
        (i) => {
          if (e.options.isUnmounted() || e.options.isSearchMode() || i.size === 0) return;
          const s = Array.from(i.keys());
          e.options.onUpdate(s, i);
        },
        (i) => {
          e.options.onError?.(i);
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
function v(n, e) {
  if (typeof document > "u") return 0;
  const i = `${n}:${e}`, s = b.get(i);
  if (s !== void 0) return s;
  const t = document.createElement("span");
  t.className = n, n.includes("live-card-tag-overlay") && !n.includes("live-card-tag-more") ? t.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${e}` : t.textContent = e, t.style.visibility = "hidden", t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "-9999px", t.style.pointerEvents = "none", document.body.appendChild(t);
  const r = t.getBoundingClientRect().width;
  return document.body.removeChild(t), b.set(i, r), r;
}
function F() {
  b.clear();
}
function C(n) {
  const e = n.roomIdText ?? n.liveIdText ?? "", {
    containerWidth: i,
    tagTexts: s,
    idLeftOffset: t = 6,
    tagsRightOffset: r = 8,
    tagGap: a = 6,
    safeGap: u = 12,
    minVisibleTags: l = 2,
    maxVisibleTags: g = 99
  } = n, x = v("live-id-badge", e), z = t + x, M = i - r, p = s.map(
    (o) => v("live-card-tag-overlay", o)
  ), f = v("live-card-tag-overlay live-card-tag-more", "...");
  let d = 0, h = 0;
  for (let o = 0; o < p.length; o++) {
    const c = p[o], T = p.length - o - 1, V = T > 0 ? f : 0, w = h > 0 ? a : 0, A = d + w + c + (T > 0 ? a + V : 0), y = M - A, E = Math.max(60, y - t - u);
    if (x > E || y < z + u)
      break;
    d += w + c, h++;
  }
  if (p.length - h > 0 && (d += a + f), s.length >= l && h < l) {
    let o = 0;
    for (let c = 0; c < l; c++)
      o += (c > 0 ? a : 0) + p[c];
    s.length > l && (o += a + f), h = l, d = o;
  }
  if (h > g) {
    h = g;
    let o = 0;
    for (let c = 0; c < g; c++)
      o += (c > 0 ? a : 0) + p[c];
    s.length > g && (o += a + f), d = o;
  }
  const $ = M - d, L = Math.max(
    60,
    $ - t - u
  );
  return {
    visibleCount: h,
    showMore: s.length > h,
    idMaxWidth: `${Math.round(L)}px`,
    tagsMaxWidth: `${Math.round(d)}px`
  };
}
function Q(n, e, i, s, t) {
  return n.map((r) => {
    const a = e(r), u = i(r);
    return C({
      containerWidth: t,
      roomIdText: `${s("Room ID")}: ${a}`,
      tagTexts: u.map((l) => s(l))
    });
  });
}
class X {
  constructor(e) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = e.containerSelector, this.t = e.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(e, i) {
    const s = this.cache.get(e);
    if (s) return s;
    const t = C({
      ...this.buildOptions(e, i.tags || [])
      // 允许调用方覆盖
    });
    return this.cache.set(e, t), t;
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
    this.cache.clear(), F();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(e) {
    this.onResize = e;
    const i = document.querySelector(this.containerSelector);
    i && (this.resizeObserver = new ResizeObserver((s) => {
      for (const t of s)
        if (t.contentRect.width > 0) {
          this.clearCache(), this.onResize?.();
          break;
        }
    }), this.resizeObserver.observe(i));
  }
  /** 停止监听（外部在 onUnmounted/cleanup 中调用） */
  disconnect() {
    this.resizeObserver?.disconnect(), this.resizeObserver = null, this.onResize = null;
  }
  /** 为列表批量初始化缓存（每次调用都会清除旧缓存并重新计算） */
  initForList(e) {
    this.clearCache();
    for (const i of e)
      this.compute(i.liveId, i);
  }
  /** 获取当前缓存（只读，用于框架响应式同步） */
  getCache() {
    return this.cache;
  }
  buildOptions(e, i) {
    return {
      containerWidth: this.getContainerWidth(),
      roomIdText: `${this.t("LIVE_ID")}: ${e}`,
      tagTexts: i.map((s) => this.t(s)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const e = document.querySelector(this.containerSelector);
    if (!e) return 300;
    const i = window.getComputedStyle(e), s = parseFloat(i.gap) || 8, t = i.gridTemplateColumns, r = t.match(/repeat\((\d+)/), a = r ? parseInt(r[1], 10) : t.split(" ").length || 1;
    return (e.clientWidth - s * (a - 1)) / a;
  }
}
export {
  X as A,
  K as V,
  C as a,
  Q as b,
  F as c
};
