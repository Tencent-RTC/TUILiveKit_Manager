export interface UseAsyncActionOptions<T = any> {
    /**
     * 异步操作函数
     */
    action: (...args: any[]) => Promise<T>;
    /**
     * 操作名称。传入后错误时自动弹 `【操作名】失败：{详情}` toast。
     * 非用户操作（后台轮询等）不传此参数即可避免误弹。
     * @example t(I18N.FORCE_STOP)
     */
    operationName?: string;
    /**
     * 成功回调
     */
    onSuccess?: (result: T) => void;
    /**
     * 错误回调（可选，框架已自动弹 toast，严禁在此重复弹 toast）
     */
    onError?: (error: Error) => void;
    /**
     * 错误消息前缀（可选，用于日志）
     */
    errorMessage?: string;
    /**
     * 是否自动弹错误 toast，默认 true。
     * 传入 false 可关闭（仅当 operationName 存在时生效）。
     */
    showError?: boolean;
    /**
     * 是否自动弹成功 toast，默认 false。
     * 成功 toast 格式多样（带人名、跳走等），由 onSuccess 自行处理更灵活。
     */
    showSuccess?: boolean;
}
export interface UseAsyncActionReturn<T = any> {
    loading: boolean;
    execute: (...args: any[]) => Promise<T | undefined>;
    reset: () => void;
}
/**
 * 异步操作 Hook
 * - operationName 存在且 showError !== false → 错误时自动弹 toast
 * - 非用户操作不传 operationName 即可
 * - **禁止在 onError 中额外弹 toast**
 */
export declare function useAsyncAction<T = any>(options: UseAsyncActionOptions<T>): UseAsyncActionReturn<T>;
export default useAsyncAction;
