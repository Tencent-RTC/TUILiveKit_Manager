/**
 * 礼物类别表格组件公共资源
 *
 * 提供跨框架共享的类型定义、常量和工具函数
 */
export type { LangKey, LangEditForm, GiftLangConfig, CategoryLanguageDetail, CategoryItem, CategoryLangConfig, } from './types';
export { type CategoryColumnLayout, getCategoryColumnLayouts, } from './columns';
export { LANG_MAP, LANG_CODE_TO_KEY, LANG_CONFIG_KEYS, MAX_CATEGORY_COUNT, CATEGORY_ID_MAX_BYTES, CATEGORY_NAME_MAX_BYTES, CATEGORY_DESC_MAX_BYTES, } from './constants';
export { getByteLength, getLangKeyByCode, getLangLabel, getLangCode, GIFT_CATEGORIES_CACHE_KEY, cacheGiftCategories, consumeCachedGiftCategories, convertGiftCategoriesToCategoryItems, remapCategoryListByLanguage, } from './utils';
