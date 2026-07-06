/**
 * 礼物类别表格工具函数
 */
import type { GiftCategoryItem } from '../../../types/gift';
type CategoryItem = GiftCategoryItem;
export { getByteLength, getLangKeyByCode, getLangLabel, getLangCode } from '../gift-table/utils';
export declare const GIFT_CATEGORIES_CACHE_KEY = "gift_categories_cache";
/**
 * 转换 API 返回的礼物分类到标准 GiftCategoryItem
 */
export declare function convertGiftCategoriesToCategoryItems(giftCategories: Array<Record<string, unknown>>): GiftCategoryItem[];
export declare function cacheGiftCategories(categories: unknown[], storage?: Storage): void;
export declare function consumeCachedGiftCategories(storage?: Storage): CategoryItem[];
export declare function remapCategoryListByLanguage<T extends CategoryItem>(categories: T[]): T[];
