/**
 * Gift Config 组件导出
 */
export { default as GiftFormDialog } from './GiftFormDialog';
export { default as GiftLangConfigDialog } from './GiftLangConfigDialog';
export { default as GiftLangEditDialog } from './GiftLangEditDialog';
export { default as GiftCategoryEditDialog } from './GiftCategoryEditDialog';
export { default as GiftDeleteDialog } from './GiftDeleteDialog';
export { useGiftTableColumns } from './GiftTableColumns';
export type { GiftFormData, LangEditForm, CategoryData, GiftConfigProps, GiftFormDialogProps, GiftLangConfigDialogProps, GiftLangEditDialogProps, GiftCategoryEditDialogProps, GiftDeleteDialogProps, } from './types';
export { GIFT_PRICE_MIN, GIFT_PRICE_MAX, GIFT_LEVEL_MIN, GIFT_LEVEL_MAX, clampNumber, initialFormData, initialGiftLangConfig, initialLangEditForm, } from './types';
