/**
 * Live Monitor 公共类型定义
 * 供框架无关核心层使用
 */
import type { MonitorLiveInfo, CreateLiveParams, UpdateLiveParams, FetchLiveListParams, ServerConfig, PlayerFactory, IPlayer, PushInfo, LiveStats, UseLiveMonitorStateReturn, MonitorPlayStatus } from '../../types/live';
/** 内部状态快照（框架无关） */
export interface LiveMonitorInternalState {
    liveList: MonitorLiveInfo[];
    hasMore: boolean;
    currentLive: MonitorLiveInfo | null;
    loading: Partial<Record<string, boolean>>;
    error: Error | null;
    cursor: string;
    pageSize: number;
    sortDirection: 'descend' | 'ascend';
    userProfiles: Record<string, any>;
}
/** LiveMonitorCore 构造函数选项 */
export interface LiveMonitorCoreOptions {
    /** 调用框架的 setState 类似功能 */
    onStateChange?: (state: Partial<LiveMonitorInternalState>) => void;
    /** 播放器工厂函数 */
    playerFactory?: PlayerFactory;
    /** 获取当前激活状态（用于判断组件是否卸载） */
    getActive?: () => boolean;
}
/** 公共层对外暴露的接口（与 UseLiveMonitorStateReturn 对齐） */
export interface ILiveMonitorCore {
    /** 初始化配置 */
    init(config: ServerConfig): void;
    /** 直播列表相关 */
    fetchLiveList(params?: FetchLiveListParams): Promise<MonitorLiveInfo[]>;
    /** 直播详情相关（内部会获取推流信息） */
    fetchLiveDetail(liveId?: string): Promise<MonitorLiveInfo | null>;
    /** 直播操作 */
    createLive(params: CreateLiveParams): Promise<MonitorLiveInfo>;
    updateLive(params: UpdateLiveParams): Promise<void>;
    endLive(liveId?: string): Promise<void>;
    /** 全员禁言（内部方法，不对外暴露） */
    setAllMute(liveId: string, mute: boolean): Promise<void>;
    /** 直播统计（返回 LiveStats 类型） */
    fetchLiveStats(liveId?: string): Promise<LiveStats>;
    /** 当前直播管理 */
    setCurrentLive(liveId: string | null): void;
    getCurrentLiveInfo(): MonitorLiveInfo | null;
    /** 重置状态 */
    reset(): void;
    /** 播放控制 */
    startPlay(params: {
        liveId: string;
        containerId: string;
    }): Promise<void>;
    stopPlay(liveId: string): Promise<void>;
    /** 清理资源 */
    destroy(): void;
}
export { MonitorLiveInfo, CreateLiveParams, UpdateLiveParams, FetchLiveListParams, ServerConfig, PlayerFactory, IPlayer, PushInfo, UseLiveMonitorStateReturn, MonitorPlayStatus, };
