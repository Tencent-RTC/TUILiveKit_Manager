import type { GiftItem } from '../../../common';
import type { CategoryData } from './types';
interface GiftCategoryEditDialogProps {
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
export default function GiftCategoryEditDialog({ visible, editingCategoryGift, giftCategoryIds, allCategories, availableCategories, selectedCategoryId, categoryAddPopVisible, categoryDeleteVisible, deletingCategoryId, categoryAddLoading, categoryRemoveLoading, onRemoveCategory, onAddCategoryConfirm, onSelectCategory, onToggleAddPop, onConfirmRemoveCategory, onClose, onCloseDeleteDialog, }: GiftCategoryEditDialogProps): import("../../../react").JSX.Element;
export {};
