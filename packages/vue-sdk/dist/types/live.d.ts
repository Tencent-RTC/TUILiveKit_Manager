export interface UserPortraitProfile {
    /** 用户 ID */
    userId: string;
    /** 昵称 */
    nick: string;
    /** 头像 URL */
    avatarUrl: string;
}
export interface MonitorLiveInfo {
    /** 直播唯一标识 */
    liveId: string;
    /** UI 兼容：直播 ID 别名 */
    id?: string;
    /** 直播标题 */
    liveName: string;
    /** 封面 URL */
    coverUrl: string;
    /** 主播信息 */
    anchor: UserPortraitProfile;
    /** UI 兼容：主播信息别名 */
    liveOwner?: {
        userId: string;
        userName?: string;
        avatarUrl?: string;
        customInfo?: Record<string, string>;
    };
    /** 在线人数 */
    onlineCount: number;
    /** 创建时间（秒级时间戳） */
    createdAt: number;
    /** 开始时间 */
    startedAt?: number;
    /** 结束时间 */
    endedAt?: number;
    /** 是否禁用消息 */
    isMessageDisabled?: boolean;
    /** 直播类型 */
    liveType?: string;
    /** 是否启用麦位 */
    isSeatEnabled?: boolean;
    /** 最大麦位数 */
    maxSeatCount?: number;
    /** 最大成员数 */
    maxMemberCount?: number;
    /** 活动状态 */
    activityStatus?: number;
    /** 是否公开可见 */
    isPublicVisible?: boolean;
    /** 分类标签 */
    category?: string[];
    /** 是否启用点赞 */
    isLikeEnabled?: boolean;
    /** 全员禁言状态 */
    isMuted?: boolean;
    /** 直播统计信息（与API文档一致） */
    stats?: LiveStats;
    /** OBS/RTMP 推流信息 */
    streamInfo?: PushInfo;
    /** 自定义信息 */
    customInfo?: Record<string, string>;
    /** 麦位模板 */
    seatTemplate?: SeatTemplate;
}
export interface PushInfo {
    /** RTMP 服务器地址 */
    serverUrl: string;
    /** 推流密钥（包含 liveId、sdkAppId、userId、userSig） */
    streamKey: string;
}
export type SeatTemplate = 'VideoDynamicGrid9Seats' | 'VideoDynamicFloat7Seats' | 'VideoFixedGrid9Seats' | 'VideoFixedFloat7Seats' | 'VideoLandscape4Seat' | 'AudioSalon' | 'Karaoke';
export interface CreateLiveParams {
    /** 主播 ID */
    anchorId: string;
    /** 指定直播 ID（可选） */
    liveId?: string;
    /** 直播标题 */
    liveName?: string;
    /** 封面 URL */
    coverUrl?: string;
    /** 麦位模板 */
    seatTemplate?: SeatTemplate;
    /** 自定义信息 */
    customInfo?: Record<string, string>;
    /** 是否使用 OBS 推流 */
    useObsStreaming?: boolean;
    /** 最大麦位数 */
    maxSeatCount?: number;
}
export interface UpdateLiveParams {
    /** 直播 ID（可选：如果已通过 setCurrentLive 设置了当前直播间，可省略） */
    liveId?: string;
    /** 直播名称 */
    liveName?: string;
    /** 封面 URL */
    coverUrl?: string;
    /** 是否禁用消息 */
    isMessageDisabled?: boolean;
    /** 自定义信息 */
    customInfo?: Record<string, string>;
    /** 要删除的自定义信息 key 列表 */
    deleteKeys?: string[];
}
export interface LiveListOptions {
    /** 每页数量 */
    pageSize?: number;
    /** 排序方向 */
    sortDirection?: 'descend' | 'ascend';
}
export interface FetchLiveListParams {
    /** 分页操作方向 */
    action: 'next' | 'prev' | 'first';
    /** 每页数量（可选，默认使用 store 配置的 pageSize） */
    count?: number;
}
export interface MemberAccountsParam {
    /** 成员账号列表 */
    memberAccounts: string[];
}
export interface MuteMemberParams extends MemberAccountsParam {
    /** 禁言时间（秒） */
    muteTime?: number;
}
export interface BanMemberParams extends MemberAccountsParam {
    /** 封禁时长（秒） */
    duration?: number;
    /** 封禁原因 */
    reason?: string;
}
export interface LiveStats {
    /** 直播 ID */
    liveId: string;
    /** 当前在线人数 */
    onlineCount: number;
    /** 总观看次数 */
    viewCount: number;
    /** 总点赞数 */
    likeCount: number;
    /** 总礼物数 */
    giftCount: number;
    /** 总礼物金额 */
    giftAmount: number;
    /** 送礼人数 */
    giftUserCount?: number;
    /** 总评论数 */
    commentCount: number;
    /** 直播时长（秒） */
    duration: number;
}
/** 监控播放状态 */
export type MonitorPlayStatus = 'pending' | 'playing' | 'stopped' | 'error';
/**
 * 监控列表项（参考 MonitorLiveInfo 设计）
 * 包含直播间完整信息 + 播放状态
 */
export interface MonitorListItem {
    /** 直播间完整信息 */
    live: MonitorLiveInfo;
    /** 播放器容器 ID */
    containerId: string;
    /** 容器属性，可直接展开到 DOM 元素 */
    containerProps: {
        id: string;
        'data-live-id': string;
    };
    /** 播放状态 */
    playStatus: MonitorPlayStatus;
    /** 播放错误信息 */
    playError?: Error;
}
/**
 * 直播监控状态
 * 使用 monitorMap（Map<string, MonitorListItem>）管理监控项
 */
export interface LiveMonitorState {
    /** 直播列表 */
    liveList: MonitorLiveInfo[];
    /** 列表是否有更多数据 */
    liveListHasMore: boolean;
    /** 列表加载状态（按操作类型区分） */
    liveListLoading: Partial<Record<string, boolean>>;
    /** 列表错误信息 */
    liveListError: Error | null;
    /** 列表最后更新时间 */
    liveListLastUpdatedAt: number;
    /**
     * 监控项 Map
     * key: liveId
     * value: MonitorListItem
     */
    monitorMap: Map<string, MonitorListItem>;
    /** 监控项列表（由 monitorMap 派生，只读） */
    monitorList: MonitorListItem[];
}
/** useLiveMonitorState() 返回值 */
export interface UseLiveMonitorStateReturn {
    /** 初始化配置（调用 init） */
    init(config: ServerConfig): void;
    /** 直播列表 */
    liveList: MonitorLiveInfo[];
    /** 列表是否有更多数据 */
    hasMore: boolean;
    /** 当前选中的直播（固定某个直播间后，所有操作基于该直播间） */
    currentLive: MonitorLiveInfo | null;
    /** 设置当前直播间（传入 liveId 或 null 清除） */
    setCurrentLive(liveId: string | null): void;
    /** 获取直播列表 */
    fetchLiveList(params?: FetchLiveListParams): Promise<MonitorLiveInfo[]>;
    /** 创建直播 */
    createLive(params: CreateLiveParams): Promise<MonitorLiveInfo>;
    /** 更新当前直播间（需先 setCurrentLive） */
    updateLive(params: UpdateLiveParams): Promise<void>;
    /** 结束直播（列表级：指定 liveId；详情页：无需参数，使用 currentLive） */
    endLive(liveId?: string): Promise<void>;
    /** 获取直播间详情（内部会获取推流信息）；不传 liveId 时使用 currentLive */
    fetchLiveDetail(liveId?: string): Promise<MonitorLiveInfo | null>;
    /** 获取直播间统计；不传 liveId 时使用 currentLive；返回 LiveStats 类型 */
    fetchLiveStats(liveId?: string): Promise<LiveStats>;
    /** 开始监控单个直播间 */
    startPlay(params: {
        liveId: string;
        containerId: string;
    }): Promise<void>;
    /** 停止监控单个直播间 */
    stopPlay(liveId: string): Promise<void>;
}
export interface ChatMessage {
    /** 消息 ID */
    messageId: string;
    /** 发送者 ID */
    senderId: string;
    /** 发送者昵称 */
    senderName: string;
    /** 消息内容 */
    content: string;
    /** 时间戳（毫秒） */
    timestamp: number;
    /** 消息类型 */
    messageType: 'text' | 'custom';
}
export interface MuteStatus {
    /** 是否全员禁言 */
    isMutedAll: boolean;
    /** 被禁言的用户列表 */
    mutedUsers: string[];
}
export type PlayerState = 'IDLE' | 'PLAYING';
export declare enum PlayerEvents {
    ON_STATE_CHANGED = "ON_STATE_CHANGED",
    ON_RECEIVE_SEI = "ON_RECEIVE_SEI",
    ON_USER_AUDIO_AVAILABLE = "ON_USER_AUDIO_AVAILABLE"
}
export type PlayerEventCallbacks = {
    [PlayerEvents.ON_STATE_CHANGED]: (state: PlayerState) => void;
    [PlayerEvents.ON_RECEIVE_SEI]: (userId: string, data: unknown) => void;
    [PlayerEvents.ON_USER_AUDIO_AVAILABLE]: (liveId: string, data: {
        userId: string;
        available: boolean;
    }) => void;
};
export interface IPlayer {
    readonly id: string;
    on<T extends PlayerEvents>(event: T, callback: PlayerEventCallbacks[T]): void;
    off<T extends PlayerEvents>(event: T, callback: PlayerEventCallbacks[T]): void;
    /**
     * 开始播放
     * @param container 视频容器元素或 ID
     * @param url 播放地址（可选，TRTC 不需要）
     */
    play(container: HTMLElement | string, url?: string): Promise<void>;
    stop(): Promise<void>;
    muteAudio(mute: boolean): Promise<void>;
    destroy(): Promise<void>;
    getPlayerInfo(): {
        liveId: string;
        state: PlayerState;
    };
}
export type PlayerFactory = (liveId: string) => IPlayer;
export interface ServerConfig {
    /** API 服务器地址（如 https://api.example.com） */
    baseURL: string;
    /** 请求超时时间（毫秒），默认 30000 */
    timeout?: number;
    /** 自定义请求头 */
    headers?: Record<string, string>;
    /**
     * 播放器工厂函数（用于创建播放器实例）
     * 不传时 SDK 内部自动创建默认的 TRTC 多用户池化工厂
     */
    playerFactory?: PlayerFactory;
}
