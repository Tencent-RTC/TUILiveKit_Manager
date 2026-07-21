import { bS as S, bT as m, s as p, p as c, e as x, t as h, f as o, h as M, aY as k, bU as I, bV as v } from "./main-layout.OEkSp6vd.js";
import { bi as g, a8 as l } from "./shared-state.Bf8CkvaR.js";
class w extends m {
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
class r extends m {
  constructor(e, t, s) {
    super(e), this.makeSource = t, this.combineResults = s, this.index = 0;
  }
  subInner(e, t) {
    const s = this.currentSink = new t(this.sink, e, this);
    this.complete === r.prototype.complete && (this.complete = this.tryComplete), s.complete = s.tryComplete, s.subscribe(this.makeSource(e, this.index++));
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
class u extends w {
}
class y extends r {
  next(e) {
    this.subInner(e, u), this.next = (t) => {
      this.currentSink.dispose(), this.subInner(t, u);
    };
  }
}
const d = S(y, "switchMap"), R = 600 * 1e3;
class C {
  constructor(e) {
    this.subscription = null, this.pageSize = e.pageSize ?? 8, this.refreshIntervalMs = e.refreshIntervalMs ?? g() ?? R, this.options = e, this.pageData$ = p(), this.stop$ = p();
  }
  /**
   * 初始化轮询管线（首次 feed 前调用一次）
   */
  ensureStarted() {
    if (this.subscription) return;
    const e = this;
    this.subscription = c(
      e.pageData$,
      // ── 第 1 层：过滤无效状态 ──
      v(() => !e.options.isUnmounted() && !e.options.isSearchMode()),
      // ── 第 2 层：switchMap 自动取消旧轮询（参考 TRTC_Next volume-evalution.ts 模式） ──
      d((t) => {
        const s = Array.from(
          new Set(
            t.slice(0, e.pageSize).map((i) => i.liveId).filter(Boolean)
          )
        ), a = /* @__PURE__ */ new Map();
        return t.forEach((i) => {
          i.liveId && i.createdAt && a.set(i.liveId, i.createdAt);
        }), s.length === 0 ? o(Promise.resolve(/* @__PURE__ */ new Map())) : c(
          // timer(0, INTERVAL): 立即执行 + 日后每 INTERVAL
          M(0, e.refreshIntervalMs),
          // API 调用（带搜索/卸载保护）
          d(() => {
            if (e.options.isUnmounted() || e.options.isSearchMode())
              return o(Promise.resolve(/* @__PURE__ */ new Map()));
            const { startTime: i, endTime: f } = e.options.getTimeRange();
            return o(
              k(s, 10, i, f, a).then((b) => (l("av_moderation"), l("moderation"), b)).catch(() => /* @__PURE__ */ new Map())
            );
          }),
          // 搜索/卸载时自动停止链（下次 tick 生效）
          I(
            () => !e.options.isUnmounted() && !e.options.isSearchMode()
          ),
          // stop() 立即终止
          h(e.stop$)
        );
      }),
      // ── 第 3 层：外层 stop 守卫 ──
      h(e.stop$),
      // ── 订阅（参考 TRTC_Next audio-decoder.ts 模式） ──
      x(
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
export {
  C as V,
  d as s
};
