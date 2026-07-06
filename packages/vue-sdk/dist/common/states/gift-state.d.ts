/**
 * GiftStateManager - 框架无关的礼物状态管理器
 *
 * 抽取 React useGiftState() 和 Vue useGiftState() 中的公共业务逻辑，
 * 消除双端重复代码。
 *
 * 设计：
 * - 内部用普通变量管理状态（giftList、giftCategoryList、loading、error）
 * - 通过 onStateChange 回调通知框架层更新
 * - 所有 API 调用委托给 ../../api/gift
 *
 * 接入方式：
 * - React: 在 useGiftState() 中创建实例，通过 onStateChange 同步到 useState
 * - Vue:    在 useGiftState() 中创建实例，通过 onStateChange 同步到 ref
 */
import type { GiftItem, GiftCategoryItem, CreateGiftParams, UpdateGiftParams, GiftLanguageQueryParams, GiftLanguageSetParams, CreateGiftCategoryParams, UpdateGiftCategoryParams, AddGiftCategoryRelationsParams, DeleteGiftCategoryRelationsParams, GiftListQueryParams, GiftListResult, GiftLanguageInfo } from '../../types/gift';
import { type Subject } from 'fastrx';
export interface GiftStateManagerOptions {
    /**
     * 状态变化回调（兼容旧接口，推荐使用 observeState() 获取 fastrx Subject）
     * 当 giftList / giftCategoryList / loading / error 任一变化时触发
     */
    onStateChange?: (state: GiftStateSnapshot) => void;
}
export interface GiftStateSnapshot {
    giftList: GiftItem[];
    giftCategoryList: GiftCategoryItem[];
    loading: Partial<Record<string, boolean>>;
    error: Error | null;
}
export interface GiftStateManagerActions {
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
export declare class GiftStateManager implements GiftStateManagerActions {
    private giftList;
    private giftCategoryList;
    private loading;
    private error;
    /** 状态流（每次状态变化时发射） */
    private state$;
    /** 销毁信号（取消所有订阅） */
    private destroy$;
    private onStateChange?;
    private destroyed;
    /**
     * fetchGiftList 的去重版本。
     * 同一 key 的调用在 TTL 内返回缓存的 Promise/结果，
     * 避免短时间内重复请求（如 addGiftCategoryRelations 内部调用 + Controller 再次调用）。
     */
    private readonly deduplicatedFetchGiftList;
    constructor(opts?: GiftStateManagerOptions);
    /**
     * 获取响应式状态流（推荐方式）
     * 搭配 pipe(state$, takeUntil(destroy$), subscribe(...)) 使用
     */
    observeState(): {
        state$: Subject<GiftStateSnapshot>;
        destroy$: Subject<void>;
    };
    getGiftList(): GiftItem[];
    getGiftCategoryList(): GiftCategoryItem[];
    getLoading(): Partial<Record<string, boolean>>;
    getError(): Error | null;
    /** 获取完整状态快照 */
    getSnapshot(): GiftStateSnapshot;
    destroy(): void;
    private isDestroyed;
    private setLoading;
    private setError;
    private notifyStateChange;
    /**
     * 通用的 loading/error 包装器。
     * 自动管理 setLoading(key, true) → await fn() → setLoading(key, false)，
     * 异常时设置 error 并继续抛出。
     */
    private withLoading;
    /**
     * 获取礼物列表（去重版）。
     * 短期内重复调用（如 addGiftCategoryRelations 内部 + Controller 再次调用）
     * 会复用前一次的结果，避免重复请求。
     */
    fetchGiftList(params?: GiftListQueryParams): Promise<GiftListResult>;
    /** fetchGiftList 的原始实现，不经过去重包装 */
    private _fetchGiftListRaw;
    createGift(params: CreateGiftParams): Promise<string>;
    updateGift(params: UpdateGiftParams): Promise<void>;
    deleteGift(giftId: string): Promise<void>;
    createGiftCategory(params: CreateGiftCategoryParams): Promise<void>;
    updateGiftCategory(params: UpdateGiftCategoryParams): Promise<void>;
    deleteGiftCategory(categoryId: string): Promise<void>;
    addGiftCategoryRelations(params: AddGiftCategoryRelationsParams): Promise<void>;
    deleteGiftCategoryRelations(params: DeleteGiftCategoryRelationsParams): Promise<void>;
    getGiftLanguage(params: GiftLanguageQueryParams): Promise<GiftLanguageInfo>;
    setGiftLanguage(params: GiftLanguageSetParams): Promise<void>;
    deleteGiftLanguage(params: GiftLanguageQueryParams): Promise<void>;
    getGiftCategoryLanguage(categoryId: string, language: string): Promise<Record<string, string>>;
    setGiftCategoryLanguage(categoryId: string, language: string, languageName: string, description?: string): Promise<void>;
    deleteGiftCategoryLanguage(categoryId: string, language: string): Promise<void>;
}
