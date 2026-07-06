import type { MonitorLiveInfo } from '../../types/live';
import type { ModerationType } from '../../types/interaction';
export interface ViolationLabelsPollerOptions {
    /** 每页查询的直播间数量上限，默认 8 */
    pageSize?: number;
    /** 获取时间范围 */
    getTimeRange: () => {
        startTime: string;
        endTime: string;
    };
    /** 检查是否处于搜索模式 */
    isSearchMode: () => boolean;
    /** 检查是否已卸载 */
    isUnmounted: () => boolean;
    /** 标签更新回调 */
    onUpdate: (liveIds: string[], labelsMap: Map<string, ModerationType[]>) => void;
    /** 错误回调 */
    onError?: (error: unknown) => void;
    /**
     * 轮询刷新间隔（毫秒）
     * 默认从服务端 /api/check_config 返回的 liveViolationRefreshInterval 读取，
     * 客户只需修改服务端 .env 文件即可生效。
     */
    refreshIntervalMs?: number;
}
/**
 * 违规标签轮询器
 *
 * @example
 * const poller = new ViolationLabelsPoller({ ... });
 * poller.ensureStarted();
 * poller.feed(liveList);   // pageData 变化时调用
 * poller.stop();           // 组件卸载 / 搜索模式时调用
 */
export declare class ViolationLabelsPoller {
    private pageData$;
    private stop$;
    private subscription;
    private pageSize;
    private refreshIntervalMs;
    private options;
    constructor(options: ViolationLabelsPollerOptions);
    /**
     * 初始化轮询管线（首次 feed 前调用一次）
     */
    ensureStarted(): void;
    /**
     * 驱动新数据（pageData/翻页变化时调用）
     */
    feed(liveList: MonitorLiveInfo[]): void;
    /**
     * 停止所有轮询并清理
     */
    stop(): void;
}
