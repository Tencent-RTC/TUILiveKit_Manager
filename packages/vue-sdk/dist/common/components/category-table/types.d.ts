/**
 * 礼物类别表格组件类型定义
 */
import type { CategoryLanguageDetail, GiftCategoryItem } from '../../../types/gift';
import type { LangKey, LangEditForm, GiftLangConfig } from '../gift-table/types';
export type { LangKey, LangEditForm, GiftLangConfig };
/**
 * 重新导出核心类型
 */
export type { CategoryLanguageDetail };
export type { GiftCategoryItem as CategoryItem };
/**
 * 类别语言配置（复用 GiftLangConfig 结构）
 */
export type CategoryLangConfig = GiftLangConfig;
