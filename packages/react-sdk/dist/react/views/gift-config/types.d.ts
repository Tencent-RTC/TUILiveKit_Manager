import type { GiftItem, GiftLangConfig, LangKey } from '../../../common';
export type { GiftLangConfig, LangKey };
/**
 * 礼物表单数据类型
 */
export interface GiftFormData {
    id: string;
    name: string;
    iconUrl: string;
    price: number;
    animationUrl: string;
    level: string;
    description: string;
    extensionInfo: string;
    enabled: boolean;
}
/**
 * 语言编辑表单数据类型
 */
export interface LangEditForm {
    name: string;
    description: string;
}
/**
 * 类别数据类型
 */
export interface CategoryData {
    id: string;
    name: string;
    giftIds: string[];
}
/**
 * 礼物配置相关的 Props 接口
 */
export interface GiftConfigProps {
}
/**
 * 礼物表单弹窗 Props
 */
export interface GiftFormDialogProps {
    visible: boolean;
    isEdit: boolean;
    editingId: string;
    formData: GiftFormData;
    uploadEnabled: boolean;
    onFormDataChange: (formData: GiftFormData) => void;
    onSubmitGift: (formData: GiftFormData) => Promise<void>;
    onClose: () => void;
}
/**
 * 多语言配置弹窗 Props
 */
export interface GiftLangConfigDialogProps {
    visible: boolean;
    editingId: string;
    giftLangConfig: GiftLangConfig;
    onClose: () => void;
    onEditLang: (giftId: string, lang: LangKey) => void;
    onClearLang: (giftId: string, lang: LangKey) => void;
}
/**
 * 语言编辑弹窗 Props
 */
export interface GiftLangEditDialogProps {
    visible: boolean;
    editingGiftForLang: string;
    editingLang: LangKey | null;
    langEditForm: LangEditForm;
    saving: boolean;
    onFormChange: (form: LangEditForm) => void;
    onSave: () => void;
    onClose: () => void;
}
/**
 * 类别编辑弹窗 Props
 */
export interface GiftCategoryEditDialogProps {
    visible: boolean;
    editingCategoryGift: GiftItem | null;
    giftCategoryIds: string[];
    allCategories: CategoryData[];
    availableCategories: CategoryData[];
    selectedCategoryId: string;
    categoryAddPopVisible: boolean;
    categoryDeleteVisible: boolean;
    deletingCategoryId: string;
    categoryAddLoading: boolean;
    categoryRemoveLoading: boolean;
    onRemoveCategory: (categoryId: string) => void;
    onAddCategoryConfirm: () => void;
    onSelectCategory: (categoryId: string) => void;
    onToggleAddPop: (visible: boolean) => void;
    onConfirmRemoveCategory: () => void;
    onClose: () => void;
    onCloseDeleteDialog: () => void;
}
/**
 * 删除确认弹窗 Props
 */
export interface GiftDeleteDialogProps {
    visible: boolean;
    deletingItem: GiftItem | null;
    loading: boolean;
    onConfirm: () => void;
    onClose: () => void;
}
export declare const GIFT_PRICE_MIN = 0;
export declare const GIFT_PRICE_MAX = 2147483647;
export declare const GIFT_LEVEL_MIN = 0;
export declare const GIFT_LEVEL_MAX = 99;
/**
 * clamp 工具：超出范围自动修正
 */
export declare const clampNumber: (value: string | number | null | undefined, min: number, max: number, fallback: number) => number;
/**
 * 初始表单数据
 */
export declare const initialFormData: GiftFormData;
/**
 * 初始多语言配置
 */
export declare const initialGiftLangConfig: GiftLangConfig;
/**
 * 初始语言编辑表单
 */
export declare const initialLangEditForm: LangEditForm;
