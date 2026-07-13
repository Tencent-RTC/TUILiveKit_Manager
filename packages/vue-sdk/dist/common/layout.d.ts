import type { AppMenu, BrandConfig, CustomerExtensionV1, FeatureFlagKey, FeatureFlags, ResolvedCustomerConfig } from 'livekit-manager-customization';
/** LiveKit Logo SVG data URI，两端共用 */
export declare const LOGO_SVG_DATA_URI = "data:image/svg+xml,%3csvg%20width='26'%20height='25'%20viewBox='0%200%2026%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19.031%208.43442C18.9368%208.42827%2018.8012%208.50613%2018.5299%208.66187L11.5925%2012.6453C11.0526%2012.9553%2010.7827%2013.1102%2010.5756%2013.3163C10.2995%2013.5909%2010.1009%2013.9331%209.99988%2014.3084C9.92407%2014.5899%209.92407%2014.9%209.92407%2015.5203V21.861C9.92407%2023.4502%2011.2185%2024.7384%2012.8152%2024.7384C14.1242%2024.7384%2015.2699%2023.863%2015.6081%2022.6044L19.2143%209.18442C19.2952%208.88336%2019.3357%208.73283%2019.3053%208.64388C19.2648%208.52529%2019.1565%208.44263%2019.031%208.43442Z'%20fill='%230C60F2'/%3e%3cpath%20d='M9.46288%202.58624C9.32855%202.54566%209.15969%202.5676%208.82197%202.61148L5.24075%203.0768C1.0721%203.61845%20-1.25921%208.14035%200.733978%2011.8183C2.3403%2014.7825%206.09573%2015.839%209.02759%2014.1517L9.03052%2014.15C9.58315%2013.8313%209.9235%2013.2447%209.92407%2012.6098L9.92408%203.57267C9.92408%203.23425%209.92408%203.06504%209.86616%202.93796C9.78894%202.76852%209.64198%202.64035%209.46288%202.58624Z'%20fill='%230095FF'/%3e%3cpath%20d='M10.9577%203.1626L17.953%207.2243C18.4371%207.50542%2018.6792%207.64598%2018.9329%207.71423C19.2711%207.80522%2019.6272%207.80491%2019.9652%207.71334C20.2188%207.64465%2020.4606%207.50367%2020.9443%207.22172L24.6956%205.03497C25.5064%204.56233%2025.949%203.63997%2025.8127%202.70699C25.6309%201.46278%2024.491%200.595394%2023.252%200.75846L11.1174%202.35548C10.7755%202.40048%2010.6046%202.42298%2010.537%202.4866C10.4469%202.57141%2010.4206%202.70457%2010.4715%202.81765C10.5097%202.90246%2010.659%202.98918%2010.9577%203.1626Z'%20fill='%2300CCFF'/%3e%3c/svg%3e";
/** 侧边栏菜单项的 key（路由路径片段） */
export declare const MENU_KEYS: readonly ["live-monitor", "live-list", "gift-config"];
export type MenuKey = (typeof MENU_KEYS)[number];
export type CoreRouteKey = 'live-list' | 'live-monitor' | 'live-control' | 'gift-config' | 'gift-category';
/** 需要翻译的页面标题 key，值为 i18n key */
export declare const PAGE_TITLE_KEYS: Record<string, string>;
/** 菜单项与对应的 i18n key 映射 */
export declare const MENU_ITEM_LABELS: Record<MenuKey, string>;
export declare const CORE_DEFAULT_BRAND: BrandConfig;
export declare const CORE_DEFAULT_FEATURES: Required<FeatureFlags>;
export declare const CORE_DEFAULT_MENUS: AppMenu[];
export interface LiveManagerAppConfig<TComponent = unknown> extends ResolvedCustomerConfig<TComponent> {
    extension: CustomerExtensionV1<TComponent>;
}
export declare function createLiveManagerAppConfig<TComponent = unknown>(extension?: CustomerExtensionV1<TComponent>): LiveManagerAppConfig<TComponent>;
export declare function configureLiveManager<TComponent = unknown>(extension?: CustomerExtensionV1<TComponent>): LiveManagerAppConfig<TComponent>;
export declare function getActiveAppConfig<TComponent = unknown>(): LiveManagerAppConfig<TComponent>;
export declare function getDefaultRoutePath(): string;
export declare function getRouteTitleKey(routeKey: string): string | undefined;
export declare function getCoreRouteFeature(routeKey: CoreRouteKey): FeatureFlagKey | undefined;
export declare function isCoreRouteEnabled(routeKey: CoreRouteKey): boolean;
/** SDK 账号凭证 */
export interface SdkAccount {
    sdkAppId: number;
    userId: string;
    userSig: string;
}
/**
 * 解析 SDK 账号：
 * 1. 服务端配置模式 → 调用 login API
 * 2. 凭证模式 → 从 sessionStorage 读取
 */
export declare function resolveAccount(): Promise<SdkAccount | undefined>;
/**
 * 执行退出登录逻辑（清除凭证 + 缓存）
 */
export declare function performLogout(): void;
/**
 * 根据路径变化判断是否正在离开直播相关页面
 * @returns true 表示从直播/房控页面离开到了非直播页面，应执行退房清理
 */
export declare function isLeavingLivePage(previousPath: string, currentPath: string): boolean;
/**
 * 从 URL pathname 提取菜单 key
 * 例如 '/live-list' -> 'live-list', '/live-control/123' -> 'live-control'
 */
export declare function getMenuKeyFromPath(pathname: string): string | undefined;
/** 支持的语言列表 */
export type SupportedLanguage = 'zh-CN' | 'en-US';
/**
 * 根据当前语言返回表单 label 宽度。
 * 英文 label 较长（如 "Custom Extension Info"），需要更宽的空间。
 */
export declare function getFormLabelWidth(baseWidth?: number): number;
/**
 * 从 localStorage 读取用户手动切换过的语言。
 * 优先读取 i18next 标准键 i18nextLng（由 i18next.changeLanguage() 自动持久化），
 * 兼容旧键 live-manager:language（迁移后自动清理）。
 * 返回 null 表示用户从未手动切换过。
 */
export declare function getSavedLanguage(): SupportedLanguage | null;
/**
 * 获取默认语言。
 * 优先级：localStorage 用户切换过的语言 > 浏览器语言
 */
export declare function getDefaultLanguage(): SupportedLanguage;
/**
 * @deprecated 请使用 getDefaultLanguage() 代替，该函数不再依赖 sdkAppId。
 * 保留此函数以保证向后兼容，内部委托给 getDefaultLanguage()。
 */
export declare function getDefaultLanguageBySdkAppId(_sdkAppId?: number): SupportedLanguage;
/**
 * 切换语言：返回另一种语言
 */
export declare function toggleLanguage(current: SupportedLanguage): SupportedLanguage;
/**
 * 同步 `<html lang="...">` 属性到当前语言。
 * 语言变化时调用此函数，保持 HTML lang 与实际显示语言一致。
 */
export declare function setDocumentLanguage(lang: SupportedLanguage): void;
/**
 * 获取当前 UI 语言
 */
export declare function getCurrentLanguage(): SupportedLanguage;
/**
 * 将 UI 语言映射为 TRTC API 的语言参数
 * zh-CN → 'zh-Hans', en-US → 'en'
 */
export declare function getApiLanguage(): string;
/**
 * 当前 UI 语言对应的 TRTC API 语言代码
 * zh-CN → 'zh-Hans', en-US → 'en'
 */
export declare function getCurrentApiLanguageCode(): string;
/**
 * 从 LanguageList 中查找当前语言的本地化值
 * @param languageList API 返回的语言列表，如 [{ name, description, language }, ...]
 * @param nameField 名称字段名，礼物用 'name'，分类用 'categoryName'
 * @param descField 描述字段名，礼物用 'description'，分类用 'categoryDescription'
 * @returns { name, description } 当前语言的名称和描述，找不到则返回 undefined
 */
export declare function findLocalizedValues(languageList: ReadonlyArray<unknown> | undefined, nameField?: string, descField?: string): {
    name: string;
    description: string;
} | undefined;
