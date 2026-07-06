import { s as e, bm as n } from "./main-layout.Dtg_jOYA.js";
class o {
  constructor(t) {
    this.sending = !1, this.error = null, this.activeCount = 0, this.state$ = e(), this.destroy$ = e(), this.onStateChange = t?.onStateChange;
  }
  /**
   * 获取响应式状态流（推荐方式）
   * 搭配 pipe(state$, takeUntil(destroy$), subscribe(...)) 使用
   */
  observeState() {
    return { state$: this.state$, destroy$: this.destroy$ };
  }
  /** 获取当前状态快照 */
  getSnapshot() {
    return { sending: this.sending, error: this.error };
  }
  /** 通知框架层状态已变更 */
  notify() {
    const t = this.getSnapshot();
    this.state$.next(t), this.onStateChange?.(t);
  }
  /** 增加活跃计数（UI 挂载时调用） */
  addActive() {
    this.activeCount++;
  }
  /** 减少活跃计数（UI 卸载时调用） */
  removeActive() {
    this.activeCount = Math.max(0, this.activeCount - 1);
  }
  /** 当前是否有活跃的 UI 实例 */
  get isActive() {
    return this.activeCount > 0;
  }
  /**
   * 发送管理员文本消息
   * 通过 IM send_group_msg API 发送，与放行/重发使用一致的协议
   */
  async sendAdminMessage(t, i) {
    this.sending = !0, this.error = null, this.notify();
    try {
      const s = await n(t, i);
      return this.sending = !1, this.notify(), s;
    } catch (s) {
      throw this.sending = !1, this.error = s instanceof Error ? s : new Error(String(s)), this.notify(), s;
    }
  }
  /** 销毁管理器，清理所有状态 */
  destroy() {
    this.activeCount = 0, this.sending = !1, this.error = null, this.destroy$.next();
  }
}
export {
  o as C
};
