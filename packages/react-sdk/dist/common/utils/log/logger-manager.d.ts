/**
 * 日志管理器（单例）
 *
 * 移植自 TRTC_Next sdk-core，去掉 SSO / TRTC 特有概念（forAllJoinedClients、
 * innerEmitter 进房事件、上下行标记等）。
 *
 * 职责：
 * - 维护日志队列，定时批量上报到 Kibana
 * - 失败重试（3 次），失败日志放回队列重新上报
 * - 级别控制：本地打印级别 + 上报级别（可独立配置）
 * - URL 参数 ?logLevelToUpload=N 动态控制上报级别
 * - 从 auth-store 自动获取 sdkAppId / userId，无需手动 setConfig
 *
 * 与 Aegis 共存：Aegis 负责业务事件上报（reportEvent），
 * LoggerManager 负责日志文本批量上报到 Kibana。
 */
import { LOG_LEVEL } from './constants';
import Logger from './logger';
export interface ILog {
    /** 是否已上报成功 */
    uploaded?: boolean;
    /** 日志内容（已格式化为字符串） */
    log: string;
    /** 日志级别 */
    level: LOG_LEVEL;
}
declare class LoggerManager {
    private _isEnableUploadLog;
    private _queue;
    private _timeoutId;
    /** 本地 console 打印级别 */
    private _logLevel;
    /** 上报到 Kibana 的最低级别（默认 INFO） */
    private _logLevelToUpload;
    constructor();
    /** 是否已具备上报能力（定时器已启动 + 开关已开启） */
    get isAbleToUpload(): boolean;
    /** 启动定时上报 */
    startUpload(): void;
    /** 停止定时上报 */
    stopUpload(): void;
    private uploadInterval;
    /** 从 auth-store 获取当前认证信息 */
    private getAuthInfo;
    /** 从队列中取出一批待上报日志 */
    private getLogsToUpload;
    /** 执行一次上报 */
    upload(): Promise<void>;
    /** 带重试的上报请求 */
    private uploadLogWithRetry;
    private getPrefix;
    /**
     * 上报用紧凑级别缩写（首字母），节省每条日志前缀体积。
     * 不含竖线，由 enqueue/log 拼接时自行加 `|`，避免空格分隔。
     */
    private getUploadPrefix;
    /** 获取本地打印级别 */
    getLogLevel(): LOG_LEVEL;
    /** 设置本地打印级别 */
    setLogLevel(level: LOG_LEVEL): void;
    /** 设置上报级别（低于此级别的日志不入队列） */
    setLogLevelToUpload(level: LOG_LEVEL): void;
    /** 开启日志上报 */
    enableUploadLog(): void;
    /** 关闭日志上报 */
    disableUploadLog(): void;
    private logChunkToString;
    private addLogToQueue;
    /** 核心日志方法：console 用完整前缀，入队用紧凑前缀 */
    log(level: LOG_LEVEL, log: unknown[]): void;
    /**
     * 仅入队上报，不输出 console
     *
     * 供外部 Logger 桥接使用：外部 Logger 已自行负责 console 输出，
     * 只需把日志推入 Kibana 上报队列，避免双份 console。
     * 入队使用紧凑前缀，减少上报体积。
     */
    enqueue(level: LOG_LEVEL, log: unknown[]): void;
    debug(...log: unknown[]): void;
    info(...log: unknown[]): void;
    warn(...log: unknown[]): void;
    error(...log: unknown[]): void;
    /** 创建模块 Logger（支持父子层级） */
    createLogger(options: {
        parent?: Logger;
        id: string;
    }): Logger;
    /**
     * 检查 URL param，支持通过 url 参数动态控制上报级别
     * 用法：?logLevelToUpload=2 （对应 INFO）
     */
    private checkURLParam;
    /** 获取当前队列（调试用） */
    getQueue(): ILog[];
}
declare const _default: LoggerManager;
export default _default;
