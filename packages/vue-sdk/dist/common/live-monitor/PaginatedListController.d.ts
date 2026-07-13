export interface PaginatedFetchParams {
    page: number;
    pageCursors: Map<number, string>;
    count: number;
}
export interface PaginatedFetchResult<T> {
    list: T[];
    pageCursors: Map<number, string>;
    hasMoreData: boolean;
}
export interface PaginatedListControllerOptions<T> {
    pageSize?: number;
    initialPage?: number;
    initialPageCursors?: Map<number, string>;
    fetchPage: (params: PaginatedFetchParams) => Promise<PaginatedFetchResult<T>>;
}
export interface PaginatedListSnapshot<T> {
    pageData: T[];
    currentPage: number;
    hasMore: boolean;
    loading: boolean;
    /** 分页游标，用于跨页面导航时保存/恢复分页状态 */
    pageCursors: Map<number, string>;
}
export declare class PaginatedListController<T> {
    private pageSize;
    private pageCursors;
    private currentPage;
    private hasMore;
    private pageData;
    private loading;
    private fetchPageFn;
    private listeners;
    private pageAction$;
    private destroy$;
    private subscription;
    constructor(options: PaginatedListControllerOptions<T>);
    getSnapshot(): PaginatedListSnapshot<T>;
    subscribe(listener: (snapshot: PaginatedListSnapshot<T>) => void): () => void;
    private notify;
    goToFirstPage(): Promise<void>;
    prevPage(): Promise<void>;
    nextPage(): Promise<void>;
    refreshCurrentPage(): Promise<void>;
    goToPage(page: number, pageCursors: Map<number, string>): Promise<void>;
    /**
     * 初始化 fastrx 管线。
     *
     * 管线流程：
     *   pageAction$ → switchMap(同步副作用 + fromPromise(pure fetch)) → subscribe(副作用)
     *                                         └── takeUntil(destroy$)
     *
     * 竞态安全保障：
     * - switchMap 当新 action 到达时取消旧 fromPromise 的订阅
     * - 旧 Promise 仍在后台运行，但其 then/catch 返回的值不会被 subscribe 收到
     * - 因此无需 loadVersion 等手动守卫：`fromPromise + switchMap` 天然只传递最新结果
     *
     * 副作用分隔：
     * - 同步副作用（currentPage/loading/pageCursors 写）在 switchMap callback 中
     * - 异步副作用（pageData/hasMore 写 + notify）在 subscribe callback 中
     */
    private initPipeline;
    /**
     * 计算动作对应的目标页码，返回 null 表示无需执行。
     * 纯函数，不产生副作用。
     */
    private resolveTargetPage;
    destroy(): void;
}
