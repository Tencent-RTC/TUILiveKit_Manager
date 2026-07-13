/**
 * IM 错误码 → 友好提示信息映射（支持中/英双语言）
 * 文档来源: https://cloud.tencent.com/document/product/269/125815
 *
 * 使用方式:
 *   import { getErrorMessage } from '..';
 *   const msg = getErrorMessage(errorCode, errorInfo, fallback, 'zh-CN');
 */
export type ErrorLocale = 'zh-CN' | 'en-US';
/**
 * 设置错误消息语言 getter（推荐方式，支持实时跟随 UI 语言切换）
 *
 * 当用户切换语言时，下一次 getErrorMessage() 调用会自动使用新语言。
 *
 * @example
 * ```ts
 * // React — 放在组件顶层或初始化代码中
 * import { setErrorLocaleProvider } from 'live-manager-sdk';
 * import { useUIKit } from '@tencentcloud/uikit-base-component-react';
 *
 * function AppInit() {
 *   const { t, locale } = useUIKit();
 *   useEffect(() => {
 *     setErrorLocaleProvider(() => locale.startsWith('en') ? 'en-US' : 'zh-CN');
 *   }, [locale]);
 * }
 *
 * // Vue — 放在 app setup 或 Pinia store 中
 * import { setErrorLocaleProvider } from 'live-manager-sdk';
 * const { locale } = useI18n();
 * watchEffect(() => {
 *   setErrorLocaleProvider(() => locale.value.startsWith('en') ? 'en-US' : 'zh-CN');
 * });
 * ```
 */
export declare function setErrorLocaleProvider(getter: (() => ErrorLocale) | null): void;
/**
 * 获取当前错误消息语言（优先级：getter > setErrorLocale 静态值）
 */
export declare function getErrorLocale(): ErrorLocale;
/** @deprecated 推荐使用 setErrorLocaleProvider(getter) 以支持实时语言切换 */
export declare function setErrorLocale(locale: ErrorLocale): void;
/**
 * 根据错误码获取友好提示信息（支持中/英）
 *
 * @param code 错误码
 * @param errorInfo API 返回的错误信息，优先使用；errorInfo 为空时才使用错误码映射
 * @param fallback 未找到对应错误码时的兜底信息
 * @param locale 语言，不传时使用 setErrorLocale() 设置的默认值（默认 zh-CN）
 * @returns 对应语言的错误描述
 *
 * @example
 * ```ts
 * import { getErrorMessage, setErrorLocale } from '..';
 *
 * setErrorLocale('en-US');
 * getErrorMessage(100004);       // => 'Live not found or already dismissed'
 * getErrorMessage(-1002);        // => 'Not logged in, please log in first'
 *
 * // 指定 locale 覆盖默认
 * getErrorMessage(60007, '', '', 'zh-CN'); // => '接口调用频率超过限制...'
 *
 * // errorInfo 优先
 * getErrorMessage(100004, 'Live closed', '', 'en-US'); // => 'Room closed'
 *
 * // fallback 兜底
 * getErrorMessage(99999, '', 'Operation failed', 'en-US'); // => 'Operation failed'
 * ```
 */
export declare function getErrorMessage(code: number, errorInfo?: string, fallback?: string, locale?: ErrorLocale): string;
/**
 * 判断错误码是否表示成功
 */
export declare function isSuccess(code: number): boolean;
/**
 * 判断是否为客户端错误码（负数）
 */
export declare function isClientError(code: number): boolean;
/**
 * 判断是否为 REST API 错误码（60000-69999）
 */
export declare function isRestApiError(code: number): boolean;
/**
 * 判断是否为服务端错误码（100000+）
 */
export declare function isServerError(code: number): boolean;
/**
 * 错误码分类
 */
export type ErrorCategory = 'success' | 'client' | 'rest_api' | 'server' | 'unknown';
/**
 * 获取错误码所属分类
 */
export declare function getErrorCategory(code: number): ErrorCategory;
/**
 * 归一化的错误信息结构
 */
export interface NormalizedErrorInfo {
    code: number;
    info: string;
    original: unknown;
}
/**
 * 把任意错误来源 (LiveManagerError / TRTCResponse / axios / Error / unknown) 归一化为统一结构
 *
 * 兼容字段优先级（从高到低）：
 * - code:  error.code > error.ErrorCode > error.errorCode > 0
 * - info:  error.ErrorInfo > error.errorInfo > error.message > ''
 *
 * @param error 任意错误对象
 * @returns 归一化的 code + info + original
 *
 * @example
 * ```ts
 * import { getErrorInfo, getErrorMessage } from '../utils/error-message';
 *
 * catch (e: unknown) {
 *   const { code, info } = getErrorInfo(e);
 *   toast.error(getErrorMessage(code, info));
 * }
 * ```
 */
/** axios / 网络请求超时 — 归一化为统一错误码 */
export declare const TIMEOUT_ERROR_CODE = -9998;
/** axios / 网络连接失败 — 归一化为统一错误码 */
export declare const NETWORK_ERROR_CODE = -9997;
/**
 * 判断归一化后的错误是否为网络超时
 *
 * @example
 * const { code } = getErrorInfo(error);
 * if (isTimeoutError(code)) {
 *   toast.error('请求超时，请重试');
 * }
 */
export declare function isTimeoutError(code: number): boolean;
/**
 * 判断归一化后的错误是否为网络连接失败
 *
 * @example
 * const { code } = getErrorInfo(error);
 * if (isNetworkError(code)) {
 *   toast.error('网络连接失败，请检查网络');
 * }
 */
export declare function isNetworkError(code: number): boolean;
/**
 * 判断归一化后的错误是否为网络相关错误（超时或连接失败）
 */
export declare function isNetworkRelatedError(code: number): boolean;
export declare function getErrorInfo(error: unknown): NormalizedErrorInfo;
/**
 * 验证 error-message.ts 是否覆盖了 error.ts 中定义的所有错误码。
 * 如果缺少某个错误码的消息，会输出 console.warn 并返回缺失列表。
 *
 * @returns 缺失消息的错误码列表（空数组表示全部覆盖）
 */
export declare function validateErrorCodeCoverage(): number[];
/**
 * 文案重复的错误码组（与腾讯云 IM 错误码规范一致，非 Bug）：
 *
 * | 组别 | 错误码 | 含义 |
 * |------|--------|------|
 * | 签名错误 | 60004, 60005 | 不同版本的账号/签名校验失败 |
 * | 频率限制 | 60018, 60019 | 不同维度的请求频率限制 |
 */
export declare const DUPLICATE_ERROR_MESSAGE_GROUPS: ReadonlyArray<readonly number[]>;
/**
 * 创建统一的 onError 回调处理器，消除多处重复的 getErrorInfo/getErrorMessage 模式。
 *
 * **注意**: useAsyncAction / useConfirmAction 已内置自动 toast，
 * 只需传 operationName 即可。仅在手动 try/catch 中仍需使用此函数。
 *
 * @example
 * ```ts
 * // 手动 try/catch 中使用
 * try {
 *   await someApi();
 * } catch (err) {
 *   createErrorHandler(t, Message.error, t(I18N.UNMUTE))(err);
 * }
 * ```
 *
 * @param t - i18n 翻译函数
 * @param showError - 显示错误消息的函数（React: Message.error, Vue: MessagePlugin.error）
 * @param operationName - 操作名称（可选），传入后会在错误消息前追加 "【操作名】失败：" 前缀
 */
export declare function createErrorHandler(t: (key: string, options?: Record<string, unknown>) => string, showError: (msg: string) => void, operationName?: string): (error: unknown) => void;
