const v = /* @__PURE__ */ new Map();
function m(c, e) {
  if (typeof document > "u") return 0;
  const i = `${c}:${e}`, n = v.get(i);
  if (n !== void 0) return n;
  const t = document.createElement("span");
  t.className = c, c.includes("live-card-tag-overlay") && !c.includes("live-card-tag-more") ? t.innerHTML = `<svg class="shield-icon" viewBox="0 0 24 24" width="14" height="14" style="flex-shrink:0;vertical-align:middle;">
        <path d="M12 2L4 5v6.1c0 5.2 3.4 10.1 8 11.9 4.6-1.8 8-6.7 8-11.9V5l-8-3z" fill="white" stroke="white" stroke-width="0.5"/>
        <text x="12" y="16" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="bold">!</text>
      </svg>${e}` : t.textContent = e, t.style.visibility = "hidden", t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "-9999px", t.style.pointerEvents = "none", document.body.appendChild(t);
  const a = t.getBoundingClientRect().width;
  return document.body.removeChild(t), v.set(i, a), a;
}
function $() {
  v.clear();
}
function M(c) {
  const e = c.roomIdText ?? c.liveIdText ?? "", {
    containerWidth: i,
    tagTexts: n,
    idLeftOffset: t = 6,
    tagsRightOffset: a = 8,
    tagGap: o = 6,
    safeGap: u = 12,
    minVisibleTags: h = 2,
    maxVisibleTags: f = 99
  } = c, x = m("live-id-badge", e), W = t + x, b = i - a, g = n.map(
    (s) => m("live-card-tag-overlay", s)
  ), p = m("live-card-tag-overlay live-card-tag-more", "...");
  let l = 0, d = 0;
  for (let s = 0; s < g.length; s++) {
    const r = g[s], T = g.length - s - 1, I = T > 0 ? p : 0, y = d > 0 ? o : 0, z = l + y + r + (T > 0 ? o + I : 0), w = b - z, O = Math.max(60, w - t - u);
    if (x > O || w < W + u)
      break;
    l += y + r, d++;
  }
  if (g.length - d > 0 && (l += o + p), n.length >= h && d < h) {
    let s = 0;
    for (let r = 0; r < h; r++)
      s += (r > 0 ? o : 0) + g[r];
    n.length > h && (s += o + p), d = h, l = s;
  }
  if (d > f) {
    d = f;
    let s = 0;
    for (let r = 0; r < f; r++)
      s += (r > 0 ? o : 0) + g[r];
    n.length > f && (s += o + p), l = s;
  }
  const C = b - l, R = Math.max(
    60,
    C - t - u
  );
  return {
    visibleCount: d,
    showMore: n.length > d,
    idMaxWidth: `${Math.round(R)}px`,
    tagsMaxWidth: `${Math.round(l)}px`
  };
}
function V(c, e, i, n, t) {
  return c.map((a) => {
    const o = e(a), u = i(a);
    return M({
      containerWidth: t,
      roomIdText: `${n("Room ID")}: ${o}`,
      tagTexts: u.map((h) => n(h))
    });
  });
}
class k {
  constructor(e) {
    this.cache = /* @__PURE__ */ new Map(), this.resizeObserver = null, this.onResize = null, this.containerSelector = e.containerSelector, this.t = e.t;
  }
  /** 计算并缓存单个卡片的自适应结果 */
  compute(e, i) {
    const n = this.cache.get(e);
    if (n) return n;
    const t = M({
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
    this.cache.clear(), $();
  }
  /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
  observe(e) {
    this.onResize = e;
    const i = document.querySelector(this.containerSelector);
    i && (this.resizeObserver = new ResizeObserver((n) => {
      for (const t of n)
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
  /** 为列表批量初始化缓存 */
  initForList(e) {
    for (const i of e)
      this.cache.has(i.liveId) || this.compute(i.liveId, i);
  }
  /** 获取当前缓存（只读，用于框架响应式同步） */
  getCache() {
    return this.cache;
  }
  buildOptions(e, i) {
    return {
      containerWidth: this.getContainerWidth(),
      roomIdText: `${this.t("LIVE_ID")}: ${e}`,
      tagTexts: i.map((n) => this.t(n)),
      maxVisibleTags: 2
    };
  }
  getContainerWidth() {
    const e = document.querySelector(this.containerSelector);
    if (!e) return 300;
    const i = window.getComputedStyle(e), n = parseFloat(i.gap) || 8, t = i.gridTemplateColumns, a = t.match(/repeat\((\d+)/), o = a ? parseInt(a[1], 10) : t.split(" ").length || 1;
    return (e.clientWidth - n * (o - 1)) / o;
  }
}
export {
  k as A,
  M as a,
  V as b,
  $ as c
};
