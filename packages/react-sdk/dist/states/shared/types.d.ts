/**
 * SDK 状态管理 - 共享类型和工具函数
 */
import type { UserPortraitProfile } from '../../types/live';
import type { GiftItem, GiftCategoryItem, CreateGiftParams, CreateGiftCategoryParams } from '../../types/gift';
import type { ModerationType, PaginatedModerationList } from '../../types/interaction';
import type { PushInfo } from '../../common/trtc-client';
export type { UserPortraitProfile, GiftItem, GiftCategoryItem, CreateGiftParams, CreateGiftCategoryParams, ModerationType, PaginatedModerationList, PushInfo };
/**
 * 通用 Store 接口
 */
export interface Store<T> {
    getState: () => T;
    setState: (patch: Partial<T> | ((prev: T) => Partial<T>)) => T;
    subscribe: (listener: StoreListener<T>) => () => void;
}
export type StoreListener<T> = (state: T, previousState: T) => void;
/**
 * 深拷贝状态
 */
export declare function cloneState<T>(state: T): T;
