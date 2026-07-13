import type { MonitorLiveInfo } from '../../../../types/live';
import type { ModerationType } from '../../../../types/interaction';
interface UseViolationLabelsParams {
    pageSize: number;
    isSearchModeRef: React.MutableRefObject<boolean>;
    isUnmountedRef: React.MutableRefObject<boolean>;
}
/**
 * 违规标签管理 Hook
 * 内部使用 ViolationLabelsPoller（fastrx），switchMap 自动处理竞态
 * 对外 API 保持不变（loadLiveViolationLabelsForPage / clearLiveViolationRefreshTimer）
 */
export declare const useViolationLabels: (params: UseViolationLabelsParams) => {
    liveViolationLabelMap: Map<string, ModerationType[]>;
    loadLiveViolationLabelsForPage: (liveList: MonitorLiveInfo[], _pageToLoad: number, _version: number) => Promise<void>;
    clearLiveViolationRefreshTimer: () => void;
    getLiveDisplayTags: (item: MonitorLiveInfo) => ModerationType[];
};
export {};
