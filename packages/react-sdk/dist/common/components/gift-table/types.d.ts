/**
 * 礼物表格组件类型定义
 */
import type { GiftItem, GiftLanguageDetail } from '../../../types/gift';
/**
 * 重新导出核心类型
 */
export type { GiftItem };
export type { GiftLanguageDetail };
/**
 * 语言类型
 */
export type LangKey = 'sc' | 'tc' | 'en';
/**
 * 语言映射
 */
export interface LangInfo {
    code: string;
    label: string;
}
export type LangMap = Record<LangKey, LangInfo>;
/**
 * 单语言编辑表单（弹窗内编辑某个语言下的名称/描述）
 */
export interface LangEditForm {
    name: string;
    description: string;
}
/**
 * 三语言配置（sc/tc/en，礼物或分类的多语言完整态）
 */
export type GiftLangConfig = Record<LangKey, LangEditForm>;
/**
 * 表格列定义
 */
export interface GiftTableColumn {
    key: string;
    title: string;
    width?: number;
    align?: 'left' | 'center' | 'right';
}
/**
 * 表格 Props
 */
export interface GiftTableProps<T = GiftItem> {
    columns: GiftTableColumn[];
    data: T[];
    rowKey: string;
    loading?: boolean;
    emptyText?: string;
}
