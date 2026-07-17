import { type Ref } from '../../vue';
import type { UseAsyncActionOptions, UseAsyncActionReturn } from './useAsyncAction';
export interface ConfirmDialogState {
    visible: boolean;
    title: string;
    content: string;
    confirmText?: string;
}
export interface UseConfirmActionOptions<T = any> extends Omit<UseAsyncActionOptions<T>, 'onSuccess' | 'onError' | 'showError'> {
    /**
     * 确认弹框配置
     */
    confirm: {
        title: string;
        content: string;
        confirmText?: string;
    };
    /**
     * 成功回调（会在确认执行成功后调用，且会自动关闭弹框）
     * 注意：框架已通过 operationName 自动生成错误 toast，onSuccess 中如需 toast 请自行处理
     */
    onSuccess?: (result: T) => void;
}
export interface UseConfirmActionReturn<T = any> extends Omit<UseAsyncActionReturn<T>, 'execute'> {
    /**
     * 确认弹框状态
     */
    confirmDialog: Ref<ConfirmDialogState | null>;
    /**
     * 打开确认弹框
     */
    requestConfirm: () => void;
    /**
     * 取消确认
     */
    cancelConfirm: () => void;
    /**
     * 确认并执行
     */
    executeWithConfirm: () => Promise<T | undefined>;
}
/**
 * 带确认弹框的异步操作 Composable
 *
 * @example
 * const { confirmDialog, requestConfirm, loading } = useConfirmAction({
 *   action: async () => { await endLive(id); },
 *   confirm: {
 *     title: '确认强制停播？',
 *     content: '停播后不可恢复',
 *   },
 *   onSuccess: () => {
 *     MessagePlugin.success('停播成功');
 *   },
 * });
 *
 * // 触发时
 * requestConfirm();
 *
 * // 渲染弹框
 * {{ confirmDialog && (
 *   <t-dialog ... onConfirm="executeWithConfirm" />
 * )}}
 */
export declare function useConfirmAction<T = any>(options: UseConfirmActionOptions<T>): UseConfirmActionReturn<T>;
export default useConfirmAction;
