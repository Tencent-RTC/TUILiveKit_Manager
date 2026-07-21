import { type Ref } from '../../../../vue';
import type { MonitorLiveInfo, UserPortraitProfile } from '../../../../types/live';
import type { ModerationType } from '../../../../types/interaction';
import type { VuePaginatedListBinding } from '../../../live-monitor';
import type { TFunction } from '../../../../common/i18n/t';
export interface LiveMonitorDataComposable {
    currentPage: Ref<number>;
    hasMoreData: Ref<boolean>;
    loading: Ref<boolean>;
    hasLiveData: Ref<boolean>;
    searching: Ref<boolean>;
    refreshing: Ref<boolean>;
    isSearchMode: Ref<boolean>;
    searchInput: Ref<string>;
    searchResults: Ref<MonitorLiveInfo[] | null>;
    liveViolationLabelMap: Ref<Map<string, ModerationType[]>>;
    userProfileMap: Ref<Map<string, UserPortraitProfile>>;
    playingLiveIds: Ref<Set<string>>;
    isUnmounted: Ref<boolean>;
    handlePrevPage: () => Promise<void>;
    handleNextPage: () => Promise<void>;
    handleGoToFirstPage: () => Promise<void>;
    handleSearch: (keyword?: string) => Promise<void>;
    handleClearSearch: () => Promise<void>;
    handleRefresh: () => Promise<void>;
    handleCloseLiveSuccess: (currentPage: number, hasMore: boolean, pageDataLength: number) => Promise<void>;
    mergeTags: (...tagGroups: Array<ModerationType[] | undefined>) => ModerationType[];
    resolveLiveId: (item: {
        liveId?: unknown;
        id?: unknown;
    }) => string;
}
export declare function useLiveMonitorData(paginatedList: VuePaginatedListBinding, options: {
    stopPlay: (liveId: string) => Promise<void>;
    t: TFunction;
}): LiveMonitorDataComposable;
