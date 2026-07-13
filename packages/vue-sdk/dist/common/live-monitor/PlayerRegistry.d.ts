/**
 * PlayerRegistry - 播放器注册表（框架无关）
 *
 * 职责：
 * - 管理播放器生命周期（创建、播放、停止、销毁）
 * - 维护 liveId → IPlayer 映射
 * - 提供统一的播放控制接口
 *
 * 设计：
 * - 不依赖任何框架（React/Vue）
 * - 通过 PlayerFactory 创建播放器
 * - 使用 Promise Chain（taskChain）串行化同一 liveId 的所有操作，消除并发竞态
 * - startPlay 使用版本号守卫（startPlayVersion），链中已过期的 startPlay 在回调头直接跳过，防止链过长导致排队延迟
 * - 自动清理资源
 */
import type { IPlayer, PlayerFactory } from '../../types/live';
export interface PlayerRegistryOptions {
    /** 播放器工厂函数 */
    playerFactory?: PlayerFactory;
    /** 日志前缀（用于调试） */
    debug?: boolean;
}
export declare class PlayerRegistry {
    private playerMap;
    private playerFactory;
    private debug;
    /**
     * 串行任务链 — 同一 liveId 的所有操作通过 .then() 排队执行
     *
     * 原理：将操作链接到前一个 Promise 之后，天然保证串行执行。
     * 链上的 Promise 错误不会被外部感知（catch 吞掉防止断链），
     * 调用方拿到的返回值（原始 Promise）仍可通过 await / catch 感知错误。
     */
    private taskChain;
    /**
     * startPlay 版本号 — 每次 startPlay 递增。
     * 任务回调中检查版本号，若已被更新的 startPlay 取代则直接跳过，
     * 防止链过长导致长时间排队（典型场景：快速滚动列表反复触发 play/stop）。
     * 该 map 不会无限增长，数量等于上次调用 startPlay 的活跃 liveId 数。
     */
    private startPlayVersion;
    constructor(opts?: PlayerRegistryOptions);
    /**
     * 设置播放器工厂
     */
    setPlayerFactory(factory: PlayerFactory): void;
    /**
     * 开始播放
     * @param liveId 直播 ID
     * @param container 视频容器元素
     * @param url 播放地址（可选，TRTC 不需要）
     */
    startPlay(params: {
        liveId: string;
        container: HTMLElement;
        url?: string;
    }): Promise<void>;
    /**
     * 停止播放
     * @param liveId 直播 ID
     */
    stopPlay(liveId: string): Promise<void>;
    /**
     * 获取播放器
     * @param liveId 直播 ID
     * @returns 播放器实例或 undefined
     */
    getPlayer(liveId: string): IPlayer | undefined;
    /**
     * 检查播放器是否存在
     * @param liveId 直播 ID
     * @returns 是否存在
     */
    hasPlayer(liveId: string): boolean;
    /**
     * 获取所有正在播放的 liveId 列表
     * @returns liveId 数组
     */
    getPlayingLiveIds(): string[];
    /**
     * 获取播放器数量
     * @returns 播放器数量
     */
    getPlayerCount(): number;
    /**
     * 停止所有播放器
     */
    stopAll(): Promise<void>;
    /**
     * 销毁注册表（清理所有资源）
     */
    destroy(): Promise<void>;
    /**
     * 获取播放器状态快照（用于调试）
     */
    getSnapshot(): Record<string, {
        state: string;
        liveId: string;
    }>;
}
