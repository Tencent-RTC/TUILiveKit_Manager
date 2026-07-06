import type { MonitorLiveInfo } from '../types/live';
import type { UseLiveMonitorStateReturn } from '../types/live';
import { type PaginatedListSnapshot } from '../common/live-list';
/** @internal 内部分页列表绑定类型
 * @remarks
 * 字段名映射（兼容旧 API，内部映射自 {@link PaginatedListSnapshot}）：
 * - `pageData` ← `PaginatedListSnapshot.list`
 * - `hasMore`  ← `PaginatedListSnapshot.hasMoreData`
 * - `currentPage` / `loading` 直接透传
 */
export interface ReactPaginatedListBinding {
    /** 当前页数据 */
    pageData: MonitorLiveInfo[];
    /** 当前页码 */
    currentPage: number;
    /** 是否还有下一页 */
    hasMore: boolean;
    /** 是否正在加载 */
    loading: boolean;
    /** 下一页 */
    nextPage(): Promise<void>;
    /** 上一页 */
    prevPage(): Promise<void>;
    /** 回到首页 */
    goToFirstPage(): Promise<void>;
    /** 刷新当前页（封禁后调用） */
    refreshCurrentPage(): Promise<void>;
    /** 跳转到指定页（返回时恢复分页状态） */
    goToPage(page: number, pageCursors: Map<number, string>): Promise<void>;
    /** 获取当前完整快照（含 pageCursors，用于保存/恢复分页状态） */
    getSnapshot(): PaginatedListSnapshot;
}
/**
 * 订阅分页控制器状态变化
 * @param listener 状态变化时的回调函数
 * @returns 取消订阅的函数
 */
export declare function subscribeToPagination(listener: (snapshot: PaginatedListSnapshot) => void): () => void;
/**
 * 直播监控页 Hook（单例模式）
 * 组件卸载时自动停止所有监控
 */
export declare function useLiveMonitorState(): UseLiveMonitorStateReturn;
/** @internal SDK 内部 views 使用的分页控制器 Hook */
export declare function usePaginatedList(): ReactPaginatedListBinding;
export type { UseLiveMonitorStateReturn, MonitorListItem, LiveMonitorState, MonitorPlayStatus } from '../types/live';
export type { UseGiftStateReturn } from './gift';
export { useGiftState } from './gift';
export type { UseRiskControlStateReturn, UseRiskControlStateOptions } from './risk-control';
export { useRiskControlState } from './risk-control';
export { Message } from './components/Toast';
