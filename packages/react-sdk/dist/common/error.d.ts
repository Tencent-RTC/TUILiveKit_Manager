/**
 * Live Manager SDK 统一错误类型
 * 所有异步操作失败时 reject 的值均为 LiveManagerError 实例
 */
export declare class LiveManagerError extends Error {
    code?: number;
    originalError?: unknown;
    /** 操作上下文标识，调用方可据此决定是否拼接操作名文案 */
    context?: string;
    constructor(message: string, code?: number, originalError?: unknown, context?: string);
    /**
     * 从任意错误创建 LiveManagerError 实例
     */
    static from(error: unknown): LiveManagerError;
}
/**
 * 为 TRTC API 响应创建 LiveManagerError
 *
 * 用法：
 *   if (response.ErrorCode !== 0) throw apiError(response, 'endLive');
 *
 * @param response  TRTC API 响应（至少包含 ErrorCode / ErrorInfo）
 * @param context   操作上下文标识，如 'endLive'、'createLive'
 */
export declare function apiError(response: {
    ErrorCode: number;
    ErrorInfo?: string;
}, context: string): LiveManagerError;
