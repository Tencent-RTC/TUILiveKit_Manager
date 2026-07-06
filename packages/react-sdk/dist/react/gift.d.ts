import type { GiftItem, GiftCategoryItem, CreateGiftParams, UpdateGiftParams, GiftLanguageQueryParams, GiftLanguageSetParams, CreateGiftCategoryParams, UpdateGiftCategoryParams, AddGiftCategoryRelationsParams, DeleteGiftCategoryRelationsParams, GiftListQueryParams, GiftListResult, GiftLanguageInfo } from '../types/gift';
/** useGiftState() 返回值（与 API 文档一致） */
export interface UseGiftStateReturn {
    /** 礼物列表 */
    giftList: GiftItem[];
    /** 礼物分类列表 */
    giftCategoryList: GiftCategoryItem[];
    /** 获取礼物列表（同时返回分类列表） */
    fetchGiftList(params?: GiftListQueryParams): Promise<GiftListResult>;
    /** 创建礼物 */
    createGift(params: CreateGiftParams): Promise<string>;
    /** 更新礼物 */
    updateGift(params: UpdateGiftParams): Promise<void>;
    /** 删除礼物 */
    deleteGift(giftId: string): Promise<void>;
    /** 创建礼物分类 */
    createGiftCategory(params: CreateGiftCategoryParams): Promise<void>;
    /** 更新礼物分类 */
    updateGiftCategory(params: UpdateGiftCategoryParams): Promise<void>;
    /** 删除礼物分类 */
    deleteGiftCategory(categoryId: string): Promise<void>;
    /** 添加礼物-类别关联关系 */
    addGiftCategoryRelations(params: AddGiftCategoryRelationsParams): Promise<void>;
    /** 删除礼物-类别关联关系 */
    deleteGiftCategoryRelations(params: DeleteGiftCategoryRelationsParams): Promise<void>;
    /** 获取礼物多语言信息 */
    getGiftLanguage(params: GiftLanguageQueryParams): Promise<GiftLanguageInfo>;
    /** 设置礼物多语言信息 */
    setGiftLanguage(params: GiftLanguageSetParams): Promise<void>;
    /** 删除礼物多语言信息 */
    deleteGiftLanguage(params: GiftLanguageQueryParams): Promise<void>;
    /** 获取礼物分类多语言信息 */
    getGiftCategoryLanguage(categoryId: string, language: string): Promise<Record<string, string>>;
    /** 设置礼物分类多语言信息 */
    setGiftCategoryLanguage(categoryId: string, language: string, languageName: string, description?: string): Promise<void>;
    /** 删除礼物分类多语言信息 */
    deleteGiftCategoryLanguage(categoryId: string, language: string): Promise<void>;
}
/**
 * 礼物配置页 Hook
 * 与 API 文档保持一致
 *
 * 内部使用 GiftStateManager（框架无关）管理状态和 API 调用。
 */
export declare function useGiftState(): UseGiftStateReturn;
