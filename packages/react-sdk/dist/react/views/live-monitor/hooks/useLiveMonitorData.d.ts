import type { MonitorLiveInfo, UserPortraitProfile } from '../../../../types/live';
/**
 * 直播监控数据 Hook
 *
 * 包含：
 *  - 分页数据（PaginatedListController 快照）
 *  - 用户资料缓存（userProfileMap）
 *  - 搜索 / 刷新 / 封禁后翻页操作
 *  - isUnmountedRef 跨异步任务卸载标记
 *
 *  设计说明：
 *  - 封禁弹窗状态（closeConfirm/violationConfirm）及路由跳转（handleClickDetails）
 *    属于纯 UI 状态，保留在 LiveMonitor.tsx 组件内，与 Vue 端对齐。
 *  - 搜索 / 刷新操作属于数据流，放在本 Hook 中管理。
 */
export declare const useLiveMonitorData: () => {
    currentPage: number;
    hasMoreData: boolean;
    loading: boolean;
    pageData: MonitorLiveInfo[];
    hasLiveData: boolean;
    userProfileMap: Map<string, UserPortraitProfile>;
    setUserProfileMap: import("../../../../react").Dispatch<import("../../../../react").SetStateAction<Map<string, UserPortraitProfile>>>;
    isUnmountedRef: import("../../../../react").MutableRefObject<boolean>;
    pageDataCacheRef: import("../../../../react").MutableRefObject<Map<number, MonitorLiveInfo[]>>;
    liveListRef: import("../../../../react").MutableRefObject<MonitorLiveInfo[]>;
    paginatedList: import("../../../live-monitor").ReactPaginatedListBinding;
    searching: boolean;
    isSearchMode: boolean;
    searchInput: string;
    searchResults: MonitorLiveInfo[] | null;
    isSearchModeRef: import("../../../../react").MutableRefObject<boolean>;
    setSearchInput: import("../../../../react").Dispatch<import("../../../../react").SetStateAction<string>>;
    setIsSearchMode: import("../../../../react").Dispatch<import("../../../../react").SetStateAction<boolean>>;
    setSearchResults: import("../../../../react").Dispatch<import("../../../../react").SetStateAction<MonitorLiveInfo[] | null>>;
    handleSearch: (keyword?: string) => Promise<void>;
    handleClearSearch: () => Promise<void>;
    refreshing: boolean;
    handleRefresh: () => Promise<void>;
    handleCloseLiveSuccess: (currentPageValue: number, hasMore: boolean, pageDataLength: number) => Promise<void>;
};
export declare const PAGE_SIZE = 8;
