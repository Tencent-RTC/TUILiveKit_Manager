/**
 * 礼物表格组件公共资源
 *
 * 提供跨框架共享的类型定义、常量和工具函数
 */
export type { LangKey, LangInfo, LangMap, GiftTableColumn, GiftItem, GiftTableProps, LangEditForm, GiftLangConfig, } from './types';
export { LANG_MAP, LANG_CODE_TO_KEY, LANG_CONFIG_KEYS, GIFT_ID_MAX_BYTES, GIFT_NAME_MAX_BYTES, GIFT_DESC_MAX_BYTES, GIFT_EXT_MAX_BYTES, GIFT_SEARCH_MAX_BYTES, LIVE_LIST_SEARCH_MAX_BYTES, } from './constants';
export { type GiftColumnLayout, getGiftColumnLayouts, } from './columns';
export { getByteLength, truncateToMaxBytes, formatTime, getLangInfo, getLangKeyByCode, getLangLabel, getLangCode, createDefaultGiftLangConfig, getGiftLangConfigFromLanguageList, getGiftLangEditFormFromLanguageList, normalizeGiftSearchKeyword, isGiftSearchInputTooLong, filterGiftListByKeyword, remapGiftListByLanguage, } from './utils';
