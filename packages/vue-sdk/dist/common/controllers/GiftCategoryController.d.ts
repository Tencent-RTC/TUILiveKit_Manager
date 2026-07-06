/**
 * 框架无关的礼物类别管理页控制器
 *
 * 集中管理类别列表页所有数据状态：列表、表单、各类弹窗（新增/编辑、
 * 多语言配置、单语言编辑、删除确认）的可见性与数据。视图层（React / Vue）
 * 只负责订阅 state 并渲染，所有副作用与状态变化都在 controller 内完成。
 *
 * 设计要点：
 *  - 类别表单字段全部为 string，双端类型一致，所以 formData 直接放在控制器中。
 *  - 单语言编辑保存时的字节级校验仍由视图层执行（与 GiftConfigController 一致），
 *    控制器只负责 API + toast + 刷新。
 *  - languageList 字段已由 API 层归一化为 camelCase（categoryName /
 *    categoryDescription / language），与 `CategoryLanguageDetail` 类型定义一致。
 *
 * 视图层接入方式：
 *  - React: 通过 `useSyncExternalStore(controller.subscribe, controller.getState)` 订阅
 *  - Vue:   通过 `shallowRef` + `controller.subscribe(() => ref.value = controller.getState())` 订阅
 */
import type { CreateGiftCategoryParams, GiftCategoryItem, GiftListQueryParams, GiftListResult, UpdateGiftCategoryParams } from '../../types/gift';
import type { GiftLangConfig, LangEditForm, LangKey } from '../components/gift-table/types';
export type Translator = (key: string, vars?: Record<string, unknown>) => string;
export interface GiftCategoryToast {
    success(message: string): void;
    error(message: string): void;
}
/** 由视图层注入的类别业务能力（来自 useGiftState()） */
export interface GiftCategoryActions {
    fetchGiftList(params?: GiftListQueryParams): Promise<GiftListResult>;
    createGiftCategory(params: CreateGiftCategoryParams): Promise<void>;
    updateGiftCategory(params: UpdateGiftCategoryParams): Promise<void>;
    deleteGiftCategory(categoryId: string): Promise<void>;
    getGiftCategoryLanguage(categoryId: string, language: string): Promise<Record<string, string>>;
    setGiftCategoryLanguage(categoryId: string, language: string, languageName: string, description?: string): Promise<void>;
    deleteGiftCategoryLanguage(categoryId: string, language: string): Promise<void>;
}
export interface GiftCategoryControllerOptions {
    /** 类别业务能力（由视图层从 `useGiftState()` 取得后注入） */
    actions: GiftCategoryActions;
    /** 翻译函数 */
    t: Translator;
    /** Toast 适配器，由视图层根据所用 UI 库提供 */
    toast: GiftCategoryToast;
    /** 返回礼物管理页（视图层路由能力注入） */
    onNavigateBack: () => void;
}
/** 类别新增/编辑表单数据（双端字段一致） */
export interface CategoryFormData {
    categoryId: string;
    name: string;
    description: string;
}
/** 创建/更新类别的归一化 payload（视图层调用 submitForm 时传入） */
export interface SubmitCategoryPayload {
    categoryId: string;
    name: string;
    description: string;
}
export interface GiftCategoryState {
    loading: boolean;
    categoryList: GiftCategoryItem[];
    dialogVisible: boolean;
    isEdit: boolean;
    editingId: string;
    formData: CategoryFormData;
    langConfigVisible: boolean;
    categoryLangConfig: GiftLangConfig;
    langEditVisible: boolean;
    editingLang: LangKey | null;
    editingCategoryForLang: string;
    langEditForm: LangEditForm;
    deleteDialogVisible: boolean;
    deletingItem: GiftCategoryItem | null;
}
export declare class GiftCategoryController {
    private state;
    private listeners;
    private destroyed;
    private fetching;
    private opts;
    constructor(opts: GiftCategoryControllerOptions);
    /**
     * 更新依赖注入（当视图层依赖如 t 函数、actions 等发生变化时调用）。
     */
    setOpts(opts: Partial<GiftCategoryControllerOptions>): void;
    getState: () => GiftCategoryState;
    subscribe: (listener: () => void) => (() => void);
    private setState;
    private notify;
    dispose(): void;
    /**
     * 初始加载（防止 React StrictMode 等场景的重复请求）。
     * 优先消费 sessionStorage 中由礼物管理页带过来的缓存。
     */
    init(): Promise<void>;
    /**
     * 获取类别列表。
     * @param useCache 是否优先使用 sessionStorage 缓存（仅首次进入页面有效）
     */
    fetchCategoryList(useCache?: boolean): Promise<void>;
    /**
     * 当 i18next 触发 languageChanged 时调用。
     * 仅本地重新映射 name/description，不重新请求 API。
     */
    onLanguageChanged(): void;
    goBack(): void;
    copyCategoryId(id: string): Promise<void>;
    openCreateDialog(): void;
    openEditDialog(row: GiftCategoryItem): void;
    closeDialog(): void;
    /** 视图层在 v-model / onChange 时调用，更新表单字段 */
    setFormData(patch: Partial<CategoryFormData>): void;
    /**
     * 提交类别表单。视图层负责字段非空 / 字节长度校验后传入归一化 payload。
     * 成功后会自动关闭弹窗并刷新列表。
     * 失败抛出原始错误，视图层可在调用处捕获以保留 submitting 状态。
     */
    submitForm(payload: SubmitCategoryPayload): Promise<void>;
    openLangConfigDialog(categoryId: string): Promise<void>;
    closeLangConfigDialog(): void;
    openLangEditDialog(categoryId: string, lang: LangKey): Promise<void>;
    setLangEditForm(form: Partial<LangEditForm>): void;
    closeLangEditDialog(): void;
    /**
     * 保存单语言编辑。校验逻辑（字节长度等）由视图层在调用前完成，
     * 控制器只负责调 API + toast + 刷新。
     */
    saveLangEdit(): Promise<void>;
    /** 清除某个语言配置 */
    clearLang(categoryId: string, lang: LangKey): Promise<void>;
    requestDelete(item: GiftCategoryItem): void;
    cancelDelete(): void;
    confirmDelete(): Promise<void>;
    private formatError;
}
