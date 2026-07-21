/**
 * Vue 直播能力适配层 - 主入口（单例模式）
 *
 * Composables 入口（稳定入口，与 API 文档一致）：
 * - useLiveMonitorState() - 直播监控页
 * - useGiftState() - 礼物管理
 * - useRiskControlState(options) - 风控管理
 *
 * 设计原则：
 *   - 使用 LiveMonitorCore（框架无关）处理业务逻辑
 *   - Composable 只负责 Vue 响应式同步和生命周期
 *   - 内部处理分页 cursor，对外只暴露 hasMore
 *   - actions 自动绑定 currentLive，无需重复传入 liveId
 *   - 单例模式：多次调用 useLiveMonitorState() 共享同一个 core 实例
 */
import { type Ref } from '../vue';
import type { MonitorLiveInfo, CreateLiveParams, UpdateLiveParams, FetchLiveListParams, ServerConfig } from '../types/live';
import { type PaginatedListSnapshot } from '../common/live-list';
export declare const LiveListEvent: {
    readonly LIVE_LIST_CHANGED: "LIVE_LIST_CHANGED";
};
/** @internal 内部分页列表绑定类型
 * @remarks
 * 字段名映射（兼容旧 API，内部映射自 {@link PaginatedListSnapshot}）：
 * - `pageData` ← `PaginatedListSnapshot.list`
 * - `hasMore`  ← `PaginatedListSnapshot.hasMoreData`
 * - `currentPage` / `loading` 直接透传
 */
export interface VuePaginatedListBinding {
    /** 当前页数据 */
    pageData: Ref<MonitorLiveInfo[]>;
    /** 当前页码 */
    currentPage: Ref<number>;
    /** 是否还有下一页 */
    hasMore: Ref<boolean>;
    /** 是否正在加载 */
    loading: Ref<boolean>;
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
 * 直播监控页 Composable - 统一用于直播监控和详情页
 * 单例模式：多次调用共享同一个 LiveMonitorCore 实例
 */
export declare function useLiveMonitorState(): {
    init: (config: ServerConfig) => void;
    liveList: Ref<{
        liveId: string;
        id?: string | undefined;
        liveName: string;
        coverUrl: string;
        anchor: {
            userId: string;
            nick: string;
            avatarUrl: string;
        };
        liveOwner?: {
            userId: string;
            userName?: string | undefined;
            avatarUrl?: string | undefined;
            customInfo?: Record<string, string> | undefined;
        } | undefined;
        onlineCount: number;
        createdAt: number;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        isMessageDisabled?: boolean | undefined;
        liveType?: string | undefined;
        isSeatEnabled?: boolean | undefined;
        maxSeatCount?: number | undefined;
        maxMemberCount?: number | undefined;
        activityStatus?: number | undefined;
        isPublicVisible?: boolean | undefined;
        category?: string[] | undefined;
        isLikeEnabled?: boolean | undefined;
        isMuted?: boolean | undefined;
        stats?: {
            liveId: string;
            onlineCount: number;
            viewCount: number;
            likeCount: number;
            giftCount: number;
            giftAmount: number;
            giftUserCount?: number | undefined;
            commentCount: number;
            duration: number;
        } | undefined;
        streamInfo?: {
            serverUrl: string;
            streamKey: string;
        } | undefined;
        customInfo?: Record<string, string> | undefined;
        seatTemplate?: import("..").SeatTemplate | undefined;
    }[], MonitorLiveInfo[] | {
        liveId: string;
        id?: string | undefined;
        liveName: string;
        coverUrl: string;
        anchor: {
            userId: string;
            nick: string;
            avatarUrl: string;
        };
        liveOwner?: {
            userId: string;
            userName?: string | undefined;
            avatarUrl?: string | undefined;
            customInfo?: Record<string, string> | undefined;
        } | undefined;
        onlineCount: number;
        createdAt: number;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        isMessageDisabled?: boolean | undefined;
        liveType?: string | undefined;
        isSeatEnabled?: boolean | undefined;
        maxSeatCount?: number | undefined;
        maxMemberCount?: number | undefined;
        activityStatus?: number | undefined;
        isPublicVisible?: boolean | undefined;
        category?: string[] | undefined;
        isLikeEnabled?: boolean | undefined;
        isMuted?: boolean | undefined;
        stats?: {
            liveId: string;
            onlineCount: number;
            viewCount: number;
            likeCount: number;
            giftCount: number;
            giftAmount: number;
            giftUserCount?: number | undefined;
            commentCount: number;
            duration: number;
        } | undefined;
        streamInfo?: {
            serverUrl: string;
            streamKey: string;
        } | undefined;
        customInfo?: Record<string, string> | undefined;
        seatTemplate?: import("..").SeatTemplate | undefined;
    }[]>;
    hasMore: Ref<boolean, boolean>;
    currentLive: Ref<{
        liveId: string;
        id?: string | undefined;
        liveName: string;
        coverUrl: string;
        anchor: {
            userId: string;
            nick: string;
            avatarUrl: string;
        };
        liveOwner?: {
            userId: string;
            userName?: string | undefined;
            avatarUrl?: string | undefined;
            customInfo?: Record<string, string> | undefined;
        } | undefined;
        onlineCount: number;
        createdAt: number;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        isMessageDisabled?: boolean | undefined;
        liveType?: string | undefined;
        isSeatEnabled?: boolean | undefined;
        maxSeatCount?: number | undefined;
        maxMemberCount?: number | undefined;
        activityStatus?: number | undefined;
        isPublicVisible?: boolean | undefined;
        category?: string[] | undefined;
        isLikeEnabled?: boolean | undefined;
        isMuted?: boolean | undefined;
        stats?: {
            liveId: string;
            onlineCount: number;
            viewCount: number;
            likeCount: number;
            giftCount: number;
            giftAmount: number;
            giftUserCount?: number | undefined;
            commentCount: number;
            duration: number;
        } | undefined;
        streamInfo?: {
            serverUrl: string;
            streamKey: string;
        } | undefined;
        customInfo?: Record<string, string> | undefined;
        seatTemplate?: import("..").SeatTemplate | undefined;
    } | null, MonitorLiveInfo | {
        liveId: string;
        id?: string | undefined;
        liveName: string;
        coverUrl: string;
        anchor: {
            userId: string;
            nick: string;
            avatarUrl: string;
        };
        liveOwner?: {
            userId: string;
            userName?: string | undefined;
            avatarUrl?: string | undefined;
            customInfo?: Record<string, string> | undefined;
        } | undefined;
        onlineCount: number;
        createdAt: number;
        startedAt?: number | undefined;
        endedAt?: number | undefined;
        isMessageDisabled?: boolean | undefined;
        liveType?: string | undefined;
        isSeatEnabled?: boolean | undefined;
        maxSeatCount?: number | undefined;
        maxMemberCount?: number | undefined;
        activityStatus?: number | undefined;
        isPublicVisible?: boolean | undefined;
        category?: string[] | undefined;
        isLikeEnabled?: boolean | undefined;
        isMuted?: boolean | undefined;
        stats?: {
            liveId: string;
            onlineCount: number;
            viewCount: number;
            likeCount: number;
            giftCount: number;
            giftAmount: number;
            giftUserCount?: number | undefined;
            commentCount: number;
            duration: number;
        } | undefined;
        streamInfo?: {
            serverUrl: string;
            streamKey: string;
        } | undefined;
        customInfo?: Record<string, string> | undefined;
        seatTemplate?: import("..").SeatTemplate | undefined;
    } | null>;
    setCurrentLive: (liveId: string | null) => void;
    fetchLiveList: (params?: FetchLiveListParams) => Promise<MonitorLiveInfo[]>;
    createLive: (params: CreateLiveParams) => Promise<MonitorLiveInfo>;
    updateLive: (params: UpdateLiveParams) => Promise<void>;
    endLive: (liveId?: string) => Promise<void>;
    fetchLiveDetail: (liveId?: string) => Promise<MonitorLiveInfo | null>;
    fetchLiveStats: (liveId?: string) => Promise<any>;
    startPlay: (params: {
        liveId: string;
        containerId: string;
    }) => Promise<void>;
    stopPlay: (liveId: string) => Promise<void>;
};
/** @internal SDK 内部 views 使用的分页控制器 Composable */
export declare function usePaginatedList(): VuePaginatedListBinding;
export type { UseLiveMonitorStateReturn, MonitorListItem, LiveMonitorState, MonitorPlayStatus } from '../types/live';
export type { UseGiftStateReturn } from './gift';
export { useGiftState } from './gift';
export type { UseRiskControlStateReturn, UseRiskControlStateOptions } from './risk-control';
export { useRiskControlState } from './risk-control';
