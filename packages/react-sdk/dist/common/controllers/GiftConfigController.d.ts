/**
 * 框架无关的礼物配置页控制器
 *
 * 集中管理礼物列表页所有数据状态：列表、搜索、各类弹窗（新增/编辑、
 * 多语言、分类编辑、删除确认）的可见性与数据。视图层（React / Vue）只负责
 * 订阅 state 并渲染，所有副作用与状态变化都在 controller 内完成，
 * 由此实现两套视图最大程度的代码复用。
 *
 * 设计要点：
 *  - formData（id/name/iconUrl/...）由视图层各自维护，因为表单字段
 *    类型（如 level）和上传组件（ImageUpload ref）有强烈的框架特性。
 *  - 控制器对外暴露 `submitGift({...})` 接收已解析好 iconUrl/animationUrl
 *    的 payload，统一处理 create / update 的 API 调用 + toast + 刷新。
 *
 * 视图层接入方式：
 *  - React: 通过 `useSyncExternalStore(controller.subscribe, controller.getState)` 订阅
 *  - Vue:   通过 `shallowRef` + `controller.subscribe(() => ref.value = controller.getState())` 订阅
 */
import type { AddGiftCategoryRelationsParams, CreateGiftParams, DeleteGiftCategoryRelationsParams, GiftCategoryItem, GiftItem, GiftLanguageInfo, GiftLanguageQueryParams, GiftLanguageSetParams, GiftListQueryParams, GiftListResult, UpdateGiftParams } from '../../types/gift';
import type { GiftLangConfig, LangEditForm, LangKey } from '../components/gift-table/types';
export type Translator = (key: string, vars?: Record<string, unknown>) => string;
export interface GiftConfigToast {
    success(message: string): void;
    error(message: string): void;
}
/** 由视图层注入的礼物业务能力（来自 useGiftState()） */
export interface GiftConfigActions {
    fetchGiftList(params?: GiftListQueryParams): Promise<GiftListResult>;
    createGift(params: CreateGiftParams): Promise<string>;
    updateGift(params: UpdateGiftParams): Promise<void>;
    deleteGift(giftId: string): Promise<void>;
    getGiftLanguage(params: GiftLanguageQueryParams): Promise<GiftLanguageInfo>;
    setGiftLanguage(params: GiftLanguageSetParams): Promise<void>;
    deleteGiftLanguage(params: GiftLanguageQueryParams): Promise<void>;
    addGiftCategoryRelations(params: AddGiftCategoryRelationsParams): Promise<void>;
    deleteGiftCategoryRelations(params: DeleteGiftCategoryRelationsParams): Promise<void>;
}
export interface GiftConfigControllerOptions {
    /** 礼物业务能力（由视图层从 `useGiftState()` 取得后注入） */
    actions: GiftConfigActions;
    /** 翻译函数 */
    t: Translator;
    /** Toast 适配器，由视图层根据所用 UI 库提供 */
    toast: GiftConfigToast;
    /** 跳转到类别管理页（视图层路由能力注入） */
    onNavigateToCategoryManagement: () => void;
}
/** 类别编辑弹窗里展示的类别简表 */
export interface CategoryData {
    id: string;
    name: string;
    giftIds: string[];
}
/** 提交礼物表单时的归一化 payload（不含 giftId，create / update 共用） */
export interface SubmitGiftPayload {
    /** 礼物 ID（仅创建时使用） */
    id?: string;
    name: string;
    iconUrl: string;
    price: number;
    animationUrl?: string;
    enabled?: boolean;
    level?: string;
    description?: string;
    extensionInfo?: string;
}
/**
 * 从礼物表单数据 + 已解析的图片 URL 构建提交 payload
 *
 * React / Vue 两端共用，确保字段映射一致且无闭包过期风险。
 */
export declare function buildGiftSubmitPayload(formData: {
    id: string;
    name: string;
    price: number;
    enabled: boolean;
    description: string;
    extensionInfo: string;
    level?: string;
}, iconUrl: string, animationUrl: string): SubmitGiftPayload;
export interface GiftConfigState {
    loading: boolean;
    giftList: GiftItem[];
    displayList: GiftItem[];
    categoryList: GiftCategoryItem[];
    searchInput: string;
    dialogVisible: boolean;
    isEdit: boolean;
    editingId: string;
    langConfigVisible: boolean;
    giftLangConfig: GiftLangConfig;
    langEditVisible: boolean;
    editingLang: LangKey | null;
    editingGiftForLang: string;
    langEditForm: LangEditForm;
    categoryEditVisible: boolean;
    editingCategoryGift: GiftItem | null;
    allCategories: CategoryData[];
    giftCategoryIds: string[];
    categorySelectVisible: boolean;
    selectedCategoryId: string;
    categoryDeleteVisible: boolean;
    deletingCategoryId: string;
    deleteDialogVisible: boolean;
    deletingItem: GiftItem | null;
}
export declare class GiftConfigController {
    private state;
    private listeners;
    private destroyed;
    private fetching;
    private opts;
    private get ok();
    constructor(opts: GiftConfigControllerOptions);
    /**
     * 更新依赖注入（当视图层依赖如 t 函数、actions 等发生变化时调用）。
     *
     * 确保控制器始终使用最新的依赖引用，避免闭包过期。
     * Vue 端依赖稳定后无需调用；React 端应通过 useEffect 在依赖变化时调用。
     */
    setOpts(opts: Partial<GiftConfigControllerOptions>): void;
    getState: () => GiftConfigState;
    subscribe: (listener: () => void) => (() => void);
    private setState;
    private notify;
    dispose(): void;
    /**
     * 初始加载（防止 React StrictMode 等场景的重复请求）。
     */
    init(): Promise<void>;
    fetchGiftList(): Promise<void>;
    /**
     * 当 i18next 触发 languageChanged 时调用。
     * 仅本地重新映射 name/description，不重新请求 API。
     */
    onLanguageChanged(): void;
    setSearchInput(value: string): void;
    isSearchInputTooLong(): boolean;
    /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
    search(): void;
    clearSearch(): void;
    goToCategoryManagement(): void;
    copyGiftId(id: string): Promise<void>;
    openCreateDialog(): void;
    openEditDialog(row: GiftItem): void;
    closeDialog(): void;
    /**
     * 提交礼物表单。视图层负责完成校验、上传解析后传入归一化 payload。
     * 成功后会自动关闭弹窗并刷新列表。
     * 失败抛出原始错误，视图层可在调用处捕获以保留 submitting 状态。
     */
    submitGift(payload: SubmitGiftPayload): Promise<void>;
    openGiftLangConfigDialog(giftId: string): Promise<void>;
    closeGiftLangConfigDialog(): void;
    openLangEditDialog(giftId: string, lang: LangKey): Promise<void>;
    setLangEditForm(form: Partial<LangEditForm>): void;
    closeLangEditDialog(): void;
    /**
     * 保存单语言编辑。校验逻辑（字节长度等）由视图层在调用前完成，
     * 控制器只负责调 API + toast + 刷新。
     */
    saveLangEdit(): Promise<void>;
    /** 清除某个语言配置 */
    clearLang(giftId: string, lang: LangKey): Promise<void>;
    openCategoryEditDialog(item: GiftItem): void;
    closeCategoryEditDialog(): void;
    openCategorySelectDialog(): void;
    closeCategorySelectDialog(): void;
    setCategorySelectVisible(visible: boolean): void;
    setSelectedCategoryId(categoryId: string): void;
    /** 当前可添加的类别（计算属性，由视图层调用而非自动派生） */
    getAvailableCategories(): CategoryData[];
    confirmAddCategory(): Promise<void>;
    requestRemoveCategory(categoryId: string): void;
    cancelRemoveCategory(): void;
    confirmRemoveCategory(): Promise<void>;
    /** 根据类别 ID 取本地化名称（视图层渲染用） */
    getCategoryName(categoryId: string): string;
    requestDelete(item: GiftItem): void;
    cancelDelete(): void;
    confirmDelete(): Promise<void>;
    private formatError;
}
