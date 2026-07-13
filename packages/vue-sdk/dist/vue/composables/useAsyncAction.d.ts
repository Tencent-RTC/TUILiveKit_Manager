import { type Ref } from 'vue';
import type { I18nKey } from '../../common/i18n';
export interface UseAsyncActionOptions<T = any> {
    /**
     * 异步操作函数
     */
    action: (...args: any[]) => Promise<T>;
    /**
     * 操作名称。传入后错误时自动弹 `【操作名】失败：{详情}` toast。
     * @deprecated 优先使用 toast.action + toast.entity 自动拼接
     */
    operationName?: string;
    /**
     * 自动成功 toast（推荐）。传入 action/entity 自动用 OP_SUCCESS 模板拼接。
     * @example toast: { action: I18N.LABEL_DELETED, entity: I18N.GIFT }
     */
    toast?: {
        action: I18nKey;
        entity?: string;
    };
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
     */
    showError?: boolean;
}
export interface UseAsyncActionReturn<T = any> {
    loading: Ref<boolean>;
    execute: (...args: any[]) => Promise<T | undefined>;
    reset: () => void;
}
/**
 * 异步操作 Composable
 * - operationName 存在且 showError !== false → 错误时自动弹 toast
 * - 非用户操作不传 operationName 即可
 * - **禁止在 onError 中额外弹 toast**
 */
export declare function useAsyncAction<T = any>(options: UseAsyncActionOptions<T>): UseAsyncActionReturn<T>;
export default useAsyncAction;
