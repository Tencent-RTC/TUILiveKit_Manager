/**
 * LiveMonitorCore - 框架无关的核心逻辑层
 *
 * 抽取 React useLiveMonitorState 和 Vue useLiveMonitorState 中的
 * 公共业务逻辑，消除双端重复代码。
 *
 * 设计：
 * - 内部用普通变量/Map 管理状态
 * - 通过 onStateChange 回调通知框架层更新
 * - 播放器管理委托给 PlayerRegistry
 * - 所有 API 调用委托给 ../api/live 和 ../api/auth
 */
import type { MonitorLiveInfo, LiveStats, CreateLiveParams, UpdateLiveParams, ServerConfig } from '../../types/live';
import type { LiveMonitorCoreOptions } from './types';
export declare class LiveMonitorCore {
    private currentLive;
    private liveList;
    private hasMore;
    private loading;
    private error;
    private playerRegistry;
    private userProfileManager;
    private onStateChange?;
    private getActive?;
    constructor(opts?: LiveMonitorCoreOptions);
    getLiveList(): MonitorLiveInfo[];
    getHasMore(): boolean;
    getCurrentLive(): MonitorLiveInfo | null;
    getLoading(): Partial<Record<string, boolean>>;
    getError(): Error | null;
    private initialized;
    init(config: ServerConfig): void;
    setCurrentLive(liveId: string | null): void;
    getCurrentLiveInfo(): MonitorLiveInfo | null;
    fetchLiveDetail(liveId?: string): Promise<MonitorLiveInfo | null>;
    createLive(params: CreateLiveParams): Promise<MonitorLiveInfo>;
    updateLive(params: UpdateLiveParams): Promise<void>;
    endLive(liveId?: string): Promise<void>;
    /** 获取缓存的用户资料 */
    getUserProfile(userId: string): any | undefined;
    /**
     * 合并统计数据到 LiveStats（公共方法）
     * @param baseLive 基础直播信息
     * @param statisticData 统计数据
     * @returns 合并后的 LiveStats
     */
    private mergeStatisticData;
    fetchLiveStats(liveId?: string): Promise<LiveStats>;
    startPlay(params: {
        liveId: string;
        containerId: string;
    }): Promise<void>;
    stopPlay(liveId: string): Promise<void>;
    /**
     * 设置全员禁言（禁止评论）
     * @param liveId 直播间 ID
     * @param mute 是否禁言
     */
    setAllMute(liveId: string, mute: boolean): Promise<void>;
    /**
     * 从服务器获取全员禁言状态
     * @param liveId 直播间 ID
     */
    fetchMuteStatus(liveId: string): Promise<void>;
    reset(): void;
    destroy(): void;
    private setLoading;
    private setError;
    private notifyStateChange;
}
