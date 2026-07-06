/**
 * 直播数据操作模块
 *
 * 框架无关的直播数据业务逻辑，包括：
 * - 直播详情获取
 * - 直播统计数据
 * - 全员禁言/解除禁言
 * - 直播关闭
 */
import type { MonitorLiveInfo, LiveStats } from '../types/live';
export interface LiveDataResult {
    /** 直播信息 */
    liveInfo: MonitorLiveInfo | null;
}
export interface LiveStatsResult {
    /** 统计数据 */
    stats: LiveStats | null;
}
export interface LiveMuteAllParams {
    /** 直播 ID */
    liveId: string;
    /** 是否全员禁言 */
    mute: boolean;
}
/**
 * 获取直播详情
 * @param liveId 直播 ID
 * @returns 直播信息
 */
export declare function fetchLiveDetail(liveId: string): Promise<LiveDataResult>;
/**
 * 提取直播统计数据
 * @param liveInfo 直播信息
 * @returns 统计数据
 */
export declare function extractLiveStats(liveInfo: MonitorLiveInfo | null): LiveStatsResult;
/**
 * 全员禁言/解除禁言
 * @param params 禁言参数
 */
export declare function muteAll(params: LiveMuteAllParams): Promise<void>;
/**
 * 关闭直播
 * @param liveId 直播 ID
 */
export declare function endLive(liveId: string): Promise<void>;
/**
 * 检查直播是否正在进行
 * @param liveInfo 直播信息
 * @returns 是否正在进行
 */
export declare function isLiveOngoing(liveInfo: MonitorLiveInfo | null): boolean;
/**
 * 检查是否为主播
 * @param userId 用户 ID
 * @param liveInfo 直播信息
 * @returns 是否为主播
 */
export declare function isAnchor(userId: string, liveInfo: MonitorLiveInfo | null): boolean;
/**
 * 格式化直播时长
 * @param liveInfo 直播信息
 * @returns 时长字符串（如 "1小时23分钟"、"45分钟"）
 */
export declare function formatLiveDuration(liveInfo: MonitorLiveInfo | null): string;
/**
 * 格式化观看人数
 * @param count 人数
 * @returns 格式化后的字符串（如 "1.2K"、"15.8M"）
 */
export declare function formatViewerCount(count: number): string;
/**
 * 格式化点赞数
 * @param count 点赞数
 * @returns 格式化后的字符串
 */
export declare function formatLikeCount(count: number): string;
/**
 * 格式化礼物数
 * @param count 礼物数
 * @returns 格式化后的字符串
 */
export declare function formatGiftCount(count: number): string;
/**
 * 计算直播时长（秒）
 * @param liveInfo 直播信息
 * @returns 时长（秒）
 */
export declare function calculateDuration(liveInfo: MonitorLiveInfo | null): number;
/**
 * 轮询管理器（fastrx 实现）
 *
 * 用于定时刷新直播数据，具备原生并发保护：
 * - switchMap 自动取消前一次飞行中的请求，防止积压
 * - takeUntil 统一管理生命周期，无需手动 clearInterval
 *
 * @example
 * const poller = new LiveDataPoller({
 *   callback: async () => { await fetchLiveDetail(liveId); },
 *   interval: 5000,
 * });
 * poller.start();
 * poller.stop();  // 组件卸载时
 */
export declare class LiveDataPoller {
    private poll$;
    private stop$;
    private subscription;
    private callback;
    private intervalMs;
    constructor(callback: () => Promise<void> | void, intervalMs?: number);
    /**
     * 启动轮询
     * - 立即执行一次
     * - 之后每隔 intervalMs 执行
     * - 若回调是 async，switchMap 在前一次未完成时自动取消
     */
    start(): void;
    /**
     * 停止轮询
     */
    stop(): void;
    /**
     * 更新轮询间隔（立即生效）
     */
    updateInterval(intervalMs: number): void;
    /**
     * 是否正在运行
     */
    isRunning(): boolean;
    /**
     * 销毁轮询器
     */
    destroy(): void;
}
