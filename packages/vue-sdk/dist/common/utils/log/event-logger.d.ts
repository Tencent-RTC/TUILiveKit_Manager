export interface LogEvent {
    /** 事件类型，如 'api_call' / 'feature_use' / 'live_create' */
    eventType: string;
    /** 结果：success / failed */
    result?: 'success' | 'failed';
    /** 错误码（失败时上报） */
    code?: number;
    /** 错误对象（失败时上报 errorInfo） */
    error?: Error | unknown;
    /** 耗时（毫秒），用于 delta 类事件 */
    delta?: number;
    /** 附加维度 */
    [key: string]: unknown;
}
declare class EventLogger {
    /**
     * 上报成功事件
     * @example
     * eventLogger.logSuccessEvent({ eventType: 'live_create' });
     */
    logSuccessEvent(event: LogEvent): void;
    /**
     * 上报失败事件
     * @example
     * eventLogger.logFailedEvent({ eventType: 'live_create', code: 500, error: err });
     */
    logFailedEvent(event: LogEvent): void;
    /**
     * 包装一个 Promise，自动上报成功/失败事件
     * @example
     * const result = await eventLogger.reportEvent('live_create', () => createLive(params));
     */
    reportEvent<T>(eventType: string, fn: () => Promise<T>): Promise<T>;
    /** 上报事件到 Kibana */
    private uploadEventToKibana;
    /** 发送单条事件日志 */
    private uploadEvent;
}
declare const _default: EventLogger;
export default _default;
