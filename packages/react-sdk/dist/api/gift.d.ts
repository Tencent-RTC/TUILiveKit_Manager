import type { GiftItem, GiftCategoryItem, CreateGiftParams, CreateGiftCategoryParams, UpdateGiftParams, UpdateGiftCategoryParams } from '../types/gift';
interface TRTCCategoryLanguageRaw {
    CategoryName?: string;
    CategoryDesc?: string;
    Language?: string;
}
interface TRTCCategoryRaw {
    CategoryId: string;
    CategoryName?: string;
    CategoryDesc?: string;
    GiftIdList?: string[];
    LanguageList?: TRTCCategoryLanguageRaw[];
}
interface GetGiftCategoryResponse {
    Category?: TRTCCategoryRaw;
    CategoryList?: TRTCCategoryRaw[];
    TotalCount?: number;
}
export declare function getGiftList(language?: string): Promise<{
    gifts: GiftItem[];
    total: number;
    categories?: GiftCategoryItem[];
}>;
export declare function getGift(giftId: string): Promise<GiftItem>;
export declare function createGift(params: CreateGiftParams): Promise<string>;
export declare function updateGift(params: UpdateGiftParams): Promise<void>;
export declare function deleteGift(giftId: string): Promise<void>;
export declare function toggleGiftEnabled(giftId: string, enabled: boolean): Promise<void>;
export declare function getGiftLanguage(giftId: string, language: string): Promise<{
    name: string;
    description: string;
}>;
export declare function setGiftLanguage(giftId: string, language: string, name: string, description?: string): Promise<void>;
export declare function delGiftLanguage(giftId: string, language: string): Promise<void>;
export declare function getGiftCategoryList(language?: string): Promise<{
    categories: GiftCategoryItem[];
    total: number;
}>;
export declare function getGiftCategory(categoryId: string): Promise<GetGiftCategoryResponse | undefined>;
export declare function createGiftCategory(params: CreateGiftCategoryParams): Promise<void>;
export declare function updateGiftCategory(params: UpdateGiftCategoryParams): Promise<void>;
export declare function deleteGiftCategory(categoryId: string): Promise<void>;
export declare function getGiftCategoryLanguage(categoryId: string, language: string): Promise<{
    name: string;
    description: string;
}>;
export declare function setGiftCategoryLanguage(categoryId: string, language: string, name: string, description?: string): Promise<void>;
export declare function delGiftCategoryLanguage(categoryId: string, language: string): Promise<void>;
export declare function addGiftCategoryRelations(categoryId: string, giftIdList: string[]): Promise<void>;
export declare function delGiftCategoryRelations(categoryId: string, giftIdList: string[]): Promise<void>;
export {};
