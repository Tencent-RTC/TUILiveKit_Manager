import type { MonitorLiveInfo } from '../types/live';
export type LiveListSortField = 'createTime' | 'viewerCount' | 'duration' | 'status';
export type LiveListSortDirection = 'ascend' | 'descend';
export interface LiveListSortOptions {
    field: LiveListSortField;
    direction: LiveListSortDirection;
}
/**
 * 默认排序选项（按创建时间降序）
 */
export declare const DEFAULT_SORT_OPTIONS: LiveListSortOptions;
export interface LiveListFilterOptions {
    /** 直播状态筛选 */
    status?: 'ongoing' | 'ended';
    /** 主播 ID 筛选 */
    anchorId?: string;
    /** 标签筛选（包含任意一个标签即可） */
    tags?: string[];
    /** 自定义筛选函数 */
    customFilter?: (live: MonitorLiveInfo) => boolean;
}
export interface LiveListCacheEntry {
    data: MonitorLiveInfo[];
    timestamp: number;
    hasMoreData: boolean;
}
export interface LiveListCacheOptions {
    /** 缓存过期时间（毫秒），默认 5 分钟 */
    ttl?: number;
    /** 最大缓存页数，默认 10 页 */
    maxPages?: number;
}
/** @deprecated Use PAGINATION_DEFAULTS.liveList instead */
export declare const LIVE_LIST_PAGE_SIZE: 20;
export declare const LIVE_LIST_PAGE_STORAGE_KEY = "liveList_currentPage";
export declare const LIVE_LIST_CURSOR_STORAGE_KEY = "liveList_pageCursors";
export declare const LIVE_SEARCH_MAX_BYTES = 34;
export interface LiveListPageResult {
    lives: MonitorLiveInfo[];
    currentPage: number;
    hasMoreData: boolean;
    pageCursors: Map<number, string>;
    response: Record<string, unknown>;
}
export declare function createLiveListCursorMap(): Map<number, string>;
/** 分页快照（LiveList / LiveMonitor 共用）
 * @remarks
 * React/Vue 分页绑定接口（{@link ReactPaginatedListBinding} / {@link VuePaginatedListBinding}）
 * 对外暴露旧字段名（pageData / hasMore），内部映射自此接口：
 * - `pageData` ← `list`
 * - `hasMore`  ← `hasMoreData`
 */
export interface PaginatedListSnapshot {
    list: MonitorLiveInfo[];
    pageCursors: Map<number, string>;
    currentPage: number;
    hasMoreData: boolean;
    loading: boolean;
}
/**
 * LiveListPagination - LiveList 和 LiveMonitor 共用

/**
 * 房间列表分页核心 — LiveList 和 LiveMonitor 共用
 *
 * 封装：list / pageCursors / currentPage / hasMoreData / loading
 *      + loadPage / refresh / nextPage / prevPage / goToFirstPage / goToPage
 *      + 空页自动回退 + loadVersion 竞态保护
 *
 * LiveListController: 直接组合使用，state.lives 从 pagination.list 派生
 * PaginatedListController: 组合使用，替换原 fastrx 管线
 */
export declare class LiveListPagination {
    list: MonitorLiveInfo[];
    pageCursors: Map<number, string>;
    currentPage: number;
    hasMoreData: boolean;
    loading: boolean;
    private listeners;
    private loadVersion;
    private defaultPageSize;
    constructor(options?: {
        pageSize?: number;
    });
    subscribe(listener: () => void): () => void;
    private notify;
    getSnapshot(): PaginatedListSnapshot;
    /**
     * 加载指定页。内部自动处理空页回退（递归）。
     * loadVersion 竞态保护：新请求到达时旧结果自动丢弃。
     * pageSize 不传则使用构造函数配置的默认值。
     */
    loadPage(page: number, pageSize?: number): Promise<void>;
    refresh(pageSize?: number): Promise<void>;
    goToFirstPage(pageSize?: number): Promise<void>;
    nextPage(pageSize?: number): Promise<void>;
    prevPage(pageSize?: number): Promise<void>;
    goToPage(page: number, pageCursors: Map<number, string>, pageSize?: number): Promise<void>;
    /** 删除房间后应跳转的页码 */
    getPageAfterDelete(): number;
    /** 保存分页状态（用于跨页面导航恢复） */
    saveState(): void;
    /** 恢复分页状态 */
    restoreState(): {
        pageToLoad: number;
    };
    reset(): void;
}
export declare function fetchLiveListPage(options: {
    page: number;
    pageCursors: Map<number, string>;
    pageSize?: number;
}): Promise<LiveListPageResult>;
export declare function canGoToLiveListPage(options: {
    targetPage: number;
    currentPage: number;
    hasMoreData: boolean;
}): boolean;
export declare function getLiveListPageAfterDelete(options: {
    currentPage: number;
    hasMoreData: boolean;
    livesLength: number;
}): number;
export declare function saveLiveListPaginationState(options: {
    currentPage: number;
    pageCursors: Map<number, string>;
    storage?: Storage;
}): void;
export declare function restoreLiveListPaginationState(storage?: Storage): {
    pageToLoad: number;
    pageCursors: Map<number, string>;
};
export declare function isLiveSearchInputTooLong(input: string, maxBytes: number): boolean;
export declare function searchLiveById(liveId: string): Promise<MonitorLiveInfo | null>;
export declare function formatLiveListTime(timestamp: number): string;
/**
 * 对直播列表进行排序
 * @param lives 直播列表
 * @param options 排序选项
 * @returns 排序后的列表（不改变原数组）
 */
export declare function sortLiveList(lives: MonitorLiveInfo[], options: LiveListSortOptions): MonitorLiveInfo[];
/**
 * 对直播列表进行筛选
 * @param lives 直播列表
 * @param options 筛选选项
 * @returns 筛选后的列表
 */
export declare function filterLiveList(lives: MonitorLiveInfo[], options: LiveListFilterOptions): MonitorLiveInfo[];
/**
 * 直播列表缓存管理器
 */
export declare class LiveListCache {
    private cache;
    private ttl;
    private maxPages;
    constructor(options?: LiveListCacheOptions);
    /**
     * 设置缓存
     * @param page 页码
     * @param data 数据
     * @param hasMoreData 是否有更多数据
     */
    set(page: number, data: MonitorLiveInfo[], hasMoreData: boolean): void;
    /**
     * 获取缓存
     * @param page 页码
     * @returns 缓存数据或 null（如果不存在或已过期）
     */
    get(page: number): LiveListCacheEntry | null;
    /**
     * 清除指定页的缓存
     * @param page 页码（如果不传则清除所有）
     */
    clear(page?: number): void;
    /**
     * 清除所有过期的缓存
     */
    clearExpired(): void;
    /**
     * 获取缓存统计信息
     */
    getStats(): {
        size: number;
        pages: number[];
    };
    /**
     * 更新 TTL
     * @param ttlMs 新的 TTL（毫秒）
     */
    updateTtl(ttlMs: number): void;
    /**
     * 更新最大缓存页数
     * @param maxPages 新的最大页数
     */
    updateMaxPages(maxPages: number): void;
}
