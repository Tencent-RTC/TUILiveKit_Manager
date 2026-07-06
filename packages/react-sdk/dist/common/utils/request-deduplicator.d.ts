/**
 * 请求去重工具
 *
 * 解决的问题：短时间内对同一个 API 的连续调用（如同步方法内再调用一次刷新），
 * 后面的请求应该复用前面请求的 Promise，而不是发起新一轮的网络请求。
 *
 * 工作原理：
 * 1. 如果同一 key 的请求正在飞行中（pending），后续调用返回同一个 Promise
 * 2. 如果上一次请求已完成且在 TTL 窗口内，返回缓存结果包装的 Promise
 * 3. 超过 TTL 或缓存未命中时，发起新的实际请求
 *
 * 使用 fastrx 内置的 fromPromise + Subject 简化内部实现。
 */
import { type Observable } from 'fastrx';
export interface DeduplicatorOptions {
    /** 结果缓存有效期（毫秒），默认 500ms。设为 0 表示只对并发请求去重 */
    ttl?: number;
}
/**
 * 创建一个去重包装函数（返回 Promise，向后兼容）
 *
 * @param fn 原始异步函数
 * @param keyFn 根据参数生成去重 key 的函数。key 相同的调用才会去重
 * @param options 选项
 */
export declare function createDeduplicatedFn<Args extends unknown[], Result>(fn: (...args: Args) => Promise<Result>, keyFn: (...args: Args) => string, options?: DeduplicatorOptions): (...args: Args) => Promise<Result>;
/**
 * 创建一个去重包装函数（返回 Observable，用于 fastrx 流式组合）
 *
 * 相比 createDeduplicatedFn，返回的是 Observable<Result>，可直接
 * 与 switchMap、takeUntil 等操作符组合使用。
 *
 * @param fn 原始异步函数
 * @param keyFn 根据参数生成去重 key 的函数
 * @param options 选项
 */
export declare function createReactiveDeduplicatedFn<Args extends unknown[], Result>(fn: (...args: Args) => Promise<Result>, keyFn: (...args: Args) => string, options?: DeduplicatorOptions): (...args: Args) => Observable<Result>;
/**
 * 为无参数或参数不变的方法创建去重包装
 * 适用于 fetchGiftList() 这类可能被短期内重复调用的方法
 */
export declare function createDeduplicatedMethod<T, K extends keyof T, M extends T[K] & ((...args: any[]) => any)>(instance: T, methodName: K, keyFn?: (...args: Parameters<M>) => string, options?: DeduplicatorOptions): M;
