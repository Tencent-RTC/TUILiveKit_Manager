/**
 * 直播数据 Composable
 *
 * 封装直播信息和统计数据的管理
 * - 使用 useLiveMonitorState（允许的 Hook）
 * - 不直接调用 API
 * - 提供响应式状态
 *
 * 架构: View → useLiveData → useLiveMonitorState (Hook) → API
 */
import { type Ref } from '../../vue';
export interface LiveDataState {
    loading: boolean;
    liveInfo: any | null;
    liveDuration: number;
    createTime: number | null;
    anchorProfile: {
        nick: string;
        avatarUrl: string;
    } | null;
    stats: {
        onlineCount: number;
        totalViewers: number;
        totalMsgCount: number;
        totalLikesReceived: number;
        totalGiftsSent: number;
        totalGiftCoins: number;
        totalUniqueGiftSenders: number;
    };
}
/**
 * 直播数据管理
 */
export declare function useLiveData(liveId: Ref<string>): {
    loading: Ref<boolean, boolean>;
    liveInfo: Ref<any, any>;
    liveDuration: Ref<number, number>;
    createTime: Ref<number | null, number | null>;
    anchorProfile: Ref<{
        nick: string;
        avatarUrl: string;
    } | null, {
        nick: string;
        avatarUrl: string;
    } | {
        nick: string;
        avatarUrl: string;
    } | null>;
    stats: {
        onlineCount: number;
        totalViewers: number;
        totalMsgCount: number;
        totalLikesReceived: number;
        totalGiftsSent: number;
        totalGiftCoins: number;
        totalUniqueGiftSenders: number;
    };
    interactionRate: import("../../vue").ComputedRef<string>;
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
        seatTemplate?: import("../..").SeatTemplate | undefined;
    } | null, import("../..").MonitorLiveInfo | {
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
        seatTemplate?: import("../..").SeatTemplate | undefined;
    } | null>;
    loadLiveInfo: () => Promise<{
        success: boolean;
        error: string;
        data?: undefined;
        errorCode?: undefined;
    } | {
        success: boolean;
        data: import("../..").MonitorLiveInfo;
        error?: undefined;
        errorCode?: undefined;
    } | {
        success: boolean;
        error: string;
        errorCode: undefined;
        data?: undefined;
    }>;
    loadStats: () => Promise<{
        success: boolean;
        data?: undefined;
        error?: undefined;
    } | {
        success: boolean;
        data: any;
        error?: undefined;
    } | {
        success: boolean;
        error: string;
        data?: undefined;
    }>;
    updateDuration: () => void;
};
