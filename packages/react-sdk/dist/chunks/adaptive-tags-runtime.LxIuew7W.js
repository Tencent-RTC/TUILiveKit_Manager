import { s as I, p as W, a as E, t as R, b as C, f as m, c as k, bH as U, bI as B } from "./main-layout.Dtg_jOYA.js";
import { a7 as D } from "./layout.C535EJPV.js";
const P = 600 * 1e3;
class K {
  constructor(t) {
    this.subscription = null, this.pageSize = t.pageSize ?? 8, this.options = t, this.pageData$ = I(), this.stop$ = I();
  }
  /**
   * 初始化轮询管线（首次 feed 前调用一次）
   */
  ensureStarted() {
    if (this.subscription) return;
    const t = this;
    this.subscription = W(
      t.pageData$,
      // ── 第 1 层：过滤无效状态 ──
      B(() => !t.options.isUnmounted() && !t.options.isSearchMode()),
      // ── 第 2 层：switchMap 自动取消旧轮询（参考 TRTC_Next volume-evalution.ts 模式） ──
      C((i) => {
        const s = Array.from(
          new Set(
            i.slice(0, t.pageSize).map((e) => e.liveId).filter(Boolean)
          )
        );
        return s.length === 0 ? m(Promise.resolve(/* @__PURE__ */ new Map())) : W(
          // timer(0, INTERVAL): 立即执行 + 日后每 INTERVAL
          k(0, P),
          // API 调用（带搜索/卸载保护）
          C(() => {
            if (t.options.isUnmounted() || t.options.isSearchMode())
              return m(Promise.resolve(/* @__PURE__ */ new Map()));
            const { startTime: e, endTime: r } = t.options.getTimeRange();
            return m(D(s, 10, e, r));
          }),
          // 搜索/卸载时自动停止链（下次 tick 生效）
          U(
            () => !t.options.isUnmounted() && !t.options.isSearchMode()
          ),
          // stop() 立即终止
          R(t.stop$)
        );
      }),
      // ── 第 3 层：外层 stop 守卫 ──
      R(t.stop$),
      // ── 订阅（参考 TRTC_Next audio-decoder.ts 模式） ──
      E(
        (i) => {
          if (t.options.isUnmounted() || t.options.isSearchMode() || i.size === 0) return;
          const s = Array.from(i.keys());
          t.options.onUpdate(s, i);
        },
        (i) => {
          t.options.onError?.(i);
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
const v = /* @__PURE__ */ new Map();
function b(n, t) {
  if (typeof document > "u") return 0;
  const i = `${n}:${t}`, s = v.get(i);
  if (s !== void 0) return s;
  const e = document.createElement("span");
  e.className = n, n.includes("live-card-tag-overlay") && !n.includes("live-card-tag-more") ? e.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${t}` : e.textContent = t, e.style.visibility = "hidden", e.style.position = "absolute", e.style.left = "-9999px", e.style.top = "-9999px", e.style.pointerEvents = "none", document.body.appendChild(e);
  const r = e.getBoundingClientRect().width;
  return document.body.removeChild(e), v.set(i, r), r;
}
function j() {
  v.clear();
}
function S(n) {
  const t = n.roomIdText ?? n.liveIdText ?? "", {
    containerWidth: i,
    tagTexts: s,
    idLeftOffset: e = 6,
    tagsRightOffset: r = 8,
    tagGap: a = 6,
    safeGap: u = 12,
    minVisibleTags: d = 2,
    maxVisibleTags: g = 99
  } = n, x = b("live-id-badge", t), z = e + x, T = i - r, p = s.map(
    (o) => b("live-card-tag-overlay", o)
  ), f = b("live-card-tag-overlay live-card-tag-more", "...");
  let l = 0, h = 0;
  for (let o = 0; o < p.length; o++) {
    const c = p[o], M = p.length - o - 1, V = M > 0 ? f : 0, w = h > 0 ? a : 0, O = l + w + c + (M > 0 ? a + V : 0), y = T - O, A = Math.max(60, y - e - u);
    if (x > A || y < z + u)
      break;
    l += w + c, h++;
  }
  if (p.length - h > 0 && (l += a + f), s.length >= d && h < d) {
    let o = 0;
    for (let c = 0; c < d; c++)
      o += (c > 0 ? a : 0) + p[c];
    s.length > d && (o += a + f), h = d, l = o;
  }
  if (h > g) {
    h = g;
    let o = 0;
    for (let c = 0; c < g; c++)
      o += (c > 0 ? a : 0) + p[c];
    s.length > g && (o += a + f), l = o;
  }
  const $ = T - l, L = Math.max(
    60,
    $ - e - u
  );
  return {
    visibleCount: h,
    showMore: s.length > h,
    idMaxWidth: `${Math.round(L)}px`,
    tagsMaxWidth: `${Math.round(l)}px`
  };
}
function J(n, t, i, s, e) {
  return n.map((r) => {
    const a = t(r), u = i(r);
    return S({
      containerWidth: e,
      roomIdText: `${s("Room ID")}: ${a}`,
      tagTexts: u.map((d) => s(d))
    });
  });
}
class N {
  constructor(t) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = t.containerSelector, this.t = t.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(t, i) {
    const s = this.cache.get(t);
    if (s) return s;
    const e = S({
      ...this.buildOptions(t, i.tags || [])
      // 允许调用方覆盖
    });
    return this.cache.set(t, e), e;
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
    this.cache.clear(), j();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(t) {
    this.onResize = t;
    const i = document.querySelector(this.containerSelector);
    i && (this.resizeObserver = new ResizeObserver((s) => {
      for (const e of s)
        if (e.contentRect.width > 0) {
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
  initForList(t) {
    this.clearCache();
    for (const i of t)
      this.compute(i.liveId, i);
  }
  /** 获取当前缓存（只读，用于框架响应式同步） */
  getCache() {
    return this.cache;
  }
  buildOptions(t, i) {
    return {
      containerWidth: this.getContainerWidth(),
      roomIdText: `${this.t("LIVE_ID")}: ${t}`,
      tagTexts: i.map((s) => this.t(s)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const t = document.querySelector(this.containerSelector);
    if (!t) return 300;
    const i = window.getComputedStyle(t), s = parseFloat(i.gap) || 8, e = i.gridTemplateColumns, r = e.match(/repeat\((\d+)/), a = r ? parseInt(r[1], 10) : e.split(" ").length || 1;
    return (t.clientWidth - s * (a - 1)) / a;
  }
}
export {
  N as A,
  K as V,
  S as a,
  J as b,
  j as c
};
