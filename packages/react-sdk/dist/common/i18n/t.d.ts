/**
 * 类型安全的 i18n 翻译函数
 * 使用方式: import { tt } from './i18n/t';
 * 代替: import { useUIKit } from '@tencentcloud/uikit-base-component-react';
 *
 * 优点:
 * 1. 编译时检查键是否存在
 * 2. IDE 自动补全
 * 3. 重构时自动更新
 */
import type { I18nKey } from './keys';
export type TFunction = (key: I18nKey, params?: Record<string, string | number>) => string;
export declare function createT(tFn: (key: string, params?: Record<string, unknown>) => string): TFunction;
export { I18N } from './keys';
export type { I18nKey } from './keys';
