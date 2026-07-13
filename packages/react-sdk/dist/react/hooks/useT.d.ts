import type { TFunction } from '../../common/i18n/t';
/**
 * 类型安全的 i18n Hook
 * 内部使用 useUIKit 获取 t 函数，避免 prop drilling
 *
 * @example
 * ```typescript
 * function MyComponent() {
 *   const { t } = useT();
 *   return <div>{t(I18N.LIVE_LIST)}</div>;
 * }
 * ```
 */
export declare function useT(): {
    t: TFunction;
};
