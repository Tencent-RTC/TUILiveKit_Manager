/**
 * URL 验证控制器
 */
/** URL 验证控制器的回调 */
export interface UrlValidationCallbacks {
    /** 设置验证中状态 */
    setValidating: (v: boolean) => void;
    /** 设置验证错误信息（空字符串表示无错误） */
    setError: (msg: string) => void;
    /** 验证成功后通知外部更新 URL */
    onConfirm: (url: string) => void;
}
/**
 * 框架无关的 URL 验证状态机控制器
 *
 * 封装了 URL 输入验证的所有状态管理逻辑：
 * - blur 延迟验证（150ms）
 * - 验证取消与竞态处理
 * - ensureUrlValidated 提交前验证
 * - reset 重置
 *
 * 框架层只需将状态变化通过回调桥接到各自的响应式系统。
 */
export declare class UrlValidationController {
    private cancelRef;
    private validationPromise;
    private resetFlag;
    private blurTimer;
    private callbacks;
    private skipSvgaValidation;
    constructor(callbacks: UrlValidationCallbacks, skipSvgaValidation?: boolean);
    /** 更新回调（用于 React 中当回调闭包更新时） */
    updateCallbacks(callbacks: UrlValidationCallbacks): void;
    /** 更新 skipSvgaValidation */
    updateSkipSvgaValidation(skip: boolean): void;
    /**
     * URL 确认验证（blur / enter 场景）
     *
     * 错误提示策略：
     * - 字节超限 → 通过 callbacks.setError 在输入框下方内联显示，不弹 Toast
     * - 验证失败 → 同上，通过 callbacks.setError 内联显示
     * - 验证成功 → callbacks.onConfirm 通知外部
     */
    doUrlConfirm(urlInputValue: string, maxBytes?: number): Promise<void>;
    /** focus 触发：清除 resetFlag */
    handleUrlFocus(): void;
    /** blur 触发：延迟 150ms 执行 */
    handleUrlBlur(urlInputValue: string, maxBytes?: number): void;
    /** Enter 触发：立即执行，不延迟 */
    handleUrlEnter(urlInputValue: string, maxBytes?: number): void;
    /**
     * 确保 URL 输入已验证并返回最终 URL
     * @param urlInputValue 当前输入值
     * @param currentValue 当前已确认的值（modelValue / value prop）
     * @param maxBytes URL 最大字节数
     */
    ensureUrlValidated(urlInputValue: string, currentValue: string, maxBytes?: number): Promise<string>;
    /**
     * 带错误状态检查的 ensureUrlValidated
     * @param urlInputValue 当前输入值
     * @param currentValue 当前已确认的值
     * @param hasError 当前是否有验证错误
     * @param maxBytes URL 最大字节数
     */
    ensureUrlValidatedWithErrorCheck(urlInputValue: string, currentValue: string, hasError: boolean, maxBytes?: number): Promise<string>;
    /**
     * 提交场景下执行验证并返回结果
     *
     * 错误提示策略：
     * - 验证失败 → 调用 callbacks.setError 让输入框变红，同时 throw Error 给 Modal 层弹 Toast
     * - 验证成功 → callbacks.onConfirm 通知外部
     */
    private _doValidateForSubmit;
    /** 取消正在进行的验证 */
    cancelValidation(): void;
    /** 重置所有状态 */
    reset(): void;
    /** 清理资源（组件卸载时调用） */
    dispose(): void;
}
