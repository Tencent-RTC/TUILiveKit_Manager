/**
 * 礼物表格工具函数
 */
import type { GiftItem, GiftLanguageDetail, GiftCategoryItem } from '../../../types/gift';
import type { LangKey, LangInfo, GiftLangConfig, LangEditForm } from './types';
/**
 * 计算字符串的 UTF-8 字节长度
 */
export declare function getByteLength(str: string): number;
/**
 * 按 UTF-8 字节长度截断字符串
 */
export declare function truncateToMaxBytes(str: string, maxBytes: number): string;
/**
 * 格式化时间戳
 */
export declare function formatTime(timestamp: number | string | undefined): string;
/**
 * 获取语言信息
 */
export declare function getLangInfo(langKey: LangKey): LangInfo | undefined;
/**
 * 根据语言代码获取语言key
 */
export declare function getLangKeyByCode(langCode: string): LangKey | undefined;
/**
 * 获取语言标签
 */
export declare function getLangLabel(langCode: string): string;
/**
 * 从语言列表中提取语言代码
 */
export declare function getLangCode(lang: string | number | {
    Language?: string;
    language?: string;
}): string;
export declare function createDefaultGiftLangConfig(): GiftLangConfig;
export declare function getGiftLangConfigFromLanguageList(languageList: GiftLanguageDetail[] | undefined): {
    config: GiftLangConfig;
    langsToFetch: LangKey[];
};
export declare function getGiftLangEditFormFromLanguageList(languageList: GiftLanguageDetail[] | undefined, lang: LangKey): {
    form: LangEditForm;
    needsFetch: boolean;
    langCode: string;
};
export declare function normalizeGiftSearchKeyword(keyword: string): string;
export declare function isGiftSearchInputTooLong(keyword: string, maxBytes: number): boolean;
export declare function filterGiftListByKeyword<T extends GiftItem>(giftList: T[], keyword: string): T[];
export declare function remapGiftListByLanguage<Gift extends GiftItem, Category extends GiftCategoryItem>(options: {
    gifts: Gift[];
    categories: Category[];
}): {
    gifts: Gift[];
    categories: Category[];
};
