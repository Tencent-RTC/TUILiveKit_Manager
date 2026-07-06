import type { TFunction } from '../../common/i18n/t';
/**
 * 类型安全的 i18n Composable
 * 内部使用 useUIKit 获取 t 函数，避免 prop drilling
 *
 * @example
 * ```vue
 * <script setup lang="ts">
 * import { useT } from './useT';
 * const { t } = useT();
 * </script>
 * ```
 */
export declare function useT(): {
    t: TFunction;
};
