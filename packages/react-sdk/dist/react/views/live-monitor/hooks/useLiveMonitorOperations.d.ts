import type { MonitorLiveInfo } from '../../../../types/live';
import type { ReactPaginatedListBinding } from '../../../live-monitor';
interface UseLiveMonitorOperationsParams {
    /** 分页控制器对外绑定（来自 useLiveMonitorState().paginatedList） */
    paginatedList: ReactPaginatedListBinding;
    /** 是否处于搜索模式 */
    isSearchMode: boolean;
    /** 切换搜索模式 */
    setIsSearchMode: (mode: boolean) => void;
    /** 设置搜索输入框 */
    setSearchInput: (input: string) => void;
    /** 设置搜索结果（用于在搜索模式下替换列表显示） */
    setSearchResults: (results: MonitorLiveInfo[] | null) => void;
    /** 停止单个直播间监控 */
    stopPlay: (liveId: string) => Promise<void>;
    /** 结束直播 */
    endLive: (liveId: string) => Promise<void>;
    /** 当前选中的直播间（用于详情场景，目前未直接使用） */
    currentLive: MonitorLiveInfo | null;
    /** 搜索单个直播间详情 */
    fetchLiveDetail: (liveId?: string) => Promise<MonitorLiveInfo | null>;
    /** 卸载标记 */
    isUnmountedRef: React.MutableRefObject<boolean>;
}
/**
 * 直播监控操作管理 Hook
 *
 * 重构说明：
 *  - 删除对 pageDataCacheRef / pageHasMoreRef / liveListRef / loadNewPage / clearAllCache 的依赖；
 *  - 全部分页操作通过 paginatedList.* 完成（switchPage / refresh / clearPageCacheFrom / exportPageHasMore）；
 *  - controller 内部已实现"串行控制 + 版本号 + 三级缓存策略"，外部不再需要维护 loadInFlight / queuedLoad。
 *
 * 仍保留 pageVersionRef：与 useViolationLabels 共享的请求作废令牌（独立于 controller 内部版本号）。
 */
export declare const useLiveMonitorOperations: (params: UseLiveMonitorOperationsParams) => {
    closeConfirm: {
        visible: boolean;
        liveId: string;
        liveName: string;
        closing: boolean;
    };
    handleCloseLive: (liveId: string, liveName: string) => void;
    handleConfirmClose: () => Promise<void>;
    handleCancelClose: () => void;
    violationConfirm: {
        visible: boolean;
        liveId: string;
        liveName: string;
    };
    handleViolationWarning: (liveId: string, liveName: string) => void;
    setViolationConfirm: import("react").Dispatch<import("react").SetStateAction<{
        visible: boolean;
        liveId: string;
        liveName: string;
    }>>;
    searching: boolean;
    isSearchModeRef: import("react").MutableRefObject<boolean>;
    handleSearch: (keyword?: string) => Promise<void>;
    handleClearSearch: () => Promise<void>;
    refreshing: boolean;
    handleRefresh: () => Promise<void>;
    handleClickDetails: (liveId: string) => void;
};
export {};
