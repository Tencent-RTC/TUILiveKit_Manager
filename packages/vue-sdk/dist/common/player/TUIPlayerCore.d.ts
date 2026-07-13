/**
 * TUIPlayer - 基于 TRTC SDK v5 的视频播放器核心实现
 * React/Vue 共用同一份播放器核心，避免双端重复维护
 */
import type { IPlayer, PlayerState, PlayerEventCallbacks } from '../../types/live';
/**
 * 账号信息接口
 */
export interface Account {
    sdkAppId: number;
    userId: string;
    userSig: string;
}
/**
 * TUIPlayer - 基于 TRTC SDK 的视频播放器
 */
export declare class TUIPlayer implements IPlayer {
    private liveId;
    private viewId;
    private trtc;
    private currentPlayableUserId;
    private eventHandlers;
    private currentState;
    private account;
    constructor(liveId: string, account?: Account);
    /**
     * 设置账号信息（在 play 之前调用）
     */
    setAccount(account: Account): void;
    /**
     * 获取播放器信息
     */
    getPlayerInfo(): {
        liveId: string;
        state: PlayerState;
    };
    /**
     * 设置播放事件监听器
     */
    on<T extends keyof PlayerEventCallbacks>(event: T, handler: PlayerEventCallbacks[T]): void;
    /**
     * 移除播放事件监听器
     */
    off<T extends keyof PlayerEventCallbacks>(event: T): void;
    /**
     * 初始化 TRTC SDK
     */
    private initTRTC;
    /**
     * 绑定 TRTC 事件
     */
    private bindEvents;
    /**
     * 解绑 TRTC 事件
     */
    private unbindEvents;
    /**
     * 获取进房参数
     */
    private getEnterRoomParams;
    /**
     * 获取视图容器元素
     */
    private getViewElement;
    /**
     * 开始播放
     * @param container 视频容器元素或ID
     * @param url 播放地址（可选，TRTC 不需要）
     */
    play(container: HTMLElement | string, url?: string): Promise<void>;
    /**
     * 停止播放
     */
    stop(): Promise<void>;
    /**
     * 暂停播放
     */
    pause(): Promise<void>;
    /**
     * 恢复播放
     */
    resume(): Promise<void>;
    /**
     * 销毁播放器
     *
     * exitRoom 是异步网络调用，可能因网络异常而长时间挂起。
     * 如果 exitRoom 挂起，trtc.destroy() 永远不会被调用，
     * 底层 RTCPeerConnection 不会被释放，造成内存泄露。
     * 因此添加超时保护：无论 exitRoom 是否成功，最终都会调用 destroy() 释放资源。
     */
    destroy(): Promise<void>;
    /**
     * 设置音量
     */
    setVolume(volume: number): void;
    /**
     * 静音/取消静音
     */
    setMute(muted: boolean): void;
    /**
     * 获取当前播放状态
     */
    getState(): PlayerState;
    /**
     * 截图
     */
    captureSnapshot(): string | Blob | undefined;
    /**
     * 处理用户视频可用事件
     */
    private handleUserVideoAvailable;
    /**
     * 处理用户音频可用事件
     */
    private handleUserAudioAvailable;
    /**
     * 处理错误事件
     */
    private handleError;
    /**
     * 判断是否是混流用户
     */
    private isMixedStreamUser;
    /**
     * 判断是否是当前直播间的混流用户
     */
    private isCurrentLiveMixedStreamUser;
}
/**
 * 创建播放器工厂函数（单用户：所有 Card 共用同一个账号）
 *
 * @param account 账号信息（sdkAppId, userId, userSig）
 */
export declare function createPlayerFactory(account: Account): (liveId: string) => IPlayer;
/**
 * 创建多用户播放器工厂（每个 liveId 独立 userId，避免 TRTC 频率限制）
 * 账号按需懒加载：首次 play 某个 liveId 时调用 getAccount 获取账号，后续复用缓存。
 * 缓存有 TTL 过期和最大容量限制，防止内存无限增长和 userSig 过期。
 *
 * @param getAccount 根据 liveId 异步获取账号信息（userId 建议格式: live_monitor_${liveId}）
 */
export declare function createPooledPlayerFactory(getAccount: (liveId: string) => Promise<Account | null>): (liveId: string) => IPlayer;
