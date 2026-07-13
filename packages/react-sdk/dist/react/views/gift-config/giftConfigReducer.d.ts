import type { GiftItem } from '../../../common';
import type { GiftFormData, CategoryData, LangEditForm, GiftLangConfig } from './types';
/**
 * GiftConfig 组件的集中状态管理
 * 将原有的 28 个 useState 整合为统一的 state 对象
 */
export interface GiftConfigState {
    loading: boolean;
    submitting: boolean;
    giftList: GiftItem[];
    displayList: GiftItem[];
    categoryList: any[];
    searchInput: string;
    dialogVisible: boolean;
    isEdit: boolean;
    editingId: string;
    formData: GiftFormData;
    uploadEnabled: boolean;
    langConfigVisible: boolean;
    giftLangConfig: GiftLangConfig;
    langEditVisible: boolean;
    editingLang: string | null;
    editingGiftForLang: string;
    langEditForm: LangEditForm;
    categoryEditVisible: boolean;
    editingCategoryGift: GiftItem | null;
    allCategories: CategoryData[];
    giftCategoryIds: string[];
    categoryAddPopVisible: boolean;
    selectedCategoryId: string;
    categoryDeleteVisible: boolean;
    deletingCategoryId: string;
    deleteDialogVisible: boolean;
    deletingItem: GiftItem | null;
}
export type GiftConfigAction = {
    type: 'SET_LOADING';
    payload: boolean;
} | {
    type: 'SET_SUBMITTING';
    payload: boolean;
} | {
    type: 'SET_GIFT_LIST';
    payload: GiftItem[];
} | {
    type: 'SET_DISPLAY_LIST';
    payload: GiftItem[];
} | {
    type: 'SET_CATEGORY_LIST';
    payload: any[];
} | {
    type: 'UPDATE_GIFT_AND_CATEGORY_LIST';
    payload: {
        gifts: GiftItem[];
        categories: any[];
    };
} | {
    type: 'SET_SEARCH_INPUT';
    payload: string;
} | {
    type: 'CLEAR_SEARCH';
} | {
    type: 'OPEN_CREATE_DIALOG';
} | {
    type: 'OPEN_EDIT_DIALOG';
    payload: {
        item: GiftItem;
    };
} | {
    type: 'CLOSE_DIALOG';
} | {
    type: 'UPDATE_FORM_DATA';
    payload: Partial<GiftFormData>;
} | {
    type: 'SET_UPLOAD_ENABLED';
    payload: boolean;
} | {
    type: 'OPEN_LANG_CONFIG_DIALOG';
    payload: {
        giftId: string;
        config: GiftLangConfig;
    };
} | {
    type: 'CLOSE_LANG_CONFIG_DIALOG';
} | {
    type: 'UPDATE_LANG_CONFIG';
    payload: Partial<GiftLangConfig> | ((prev: GiftLangConfig) => GiftLangConfig);
} | {
    type: 'OPEN_LANG_EDIT_DIALOG';
    payload: {
        giftId: string;
        lang: string;
        form: LangEditForm;
    };
} | {
    type: 'CLOSE_LANG_EDIT_DIALOG';
} | {
    type: 'UPDATE_LANG_EDIT_FORM';
    payload: Partial<LangEditForm>;
} | {
    type: 'OPEN_CATEGORY_EDIT_DIALOG';
    payload: {
        gift: GiftItem;
        allCategories: CategoryData[];
        giftCategoryIds: string[];
    };
} | {
    type: 'CLOSE_CATEGORY_EDIT_DIALOG';
} | {
    type: 'ADD_GIFT_CATEGORY';
    payload: string;
} | {
    type: 'REMOVE_GIFT_CATEGORY';
    payload: string;
} | {
    type: 'SET_SELECTED_CATEGORY_ID';
    payload: string;
} | {
    type: 'TOGGLE_CATEGORY_ADD_POP';
    payload: boolean;
} | {
    type: 'OPEN_CATEGORY_DELETE_DIALOG';
    payload: string;
} | {
    type: 'CLOSE_CATEGORY_DELETE_DIALOG';
} | {
    type: 'OPEN_DELETE_DIALOG';
    payload: GiftItem;
} | {
    type: 'CLOSE_DELETE_DIALOG';
} | {
    type: 'RESET_ALL_DIALOGS';
};
export declare const initialState: GiftConfigState;
/**
 * GiftConfig 状态 Reducer
 * 集中处理所有状态更新逻辑，提供可预测的状态变化
 */
export declare function giftConfigReducer(state: GiftConfigState, action: GiftConfigAction): GiftConfigState;
