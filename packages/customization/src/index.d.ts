export declare const CUSTOMER_EXTENSION_PROTOCOL_VERSION: "1";
export declare const CUSTOMER_EXTENSION_PROTOCOL_MAJOR: "1";
export declare const LIVE_MANAGER_COMPONENTS_API_VERSION: "1.0.0";
export declare const LIVE_MANAGER_COMPONENTS_API_VERSION_RANGE: "^1.0.0";
export type CustomerExtensionProtocolVersion = typeof CUSTOMER_EXTENSION_PROTOCOL_VERSION;
export interface BrandConfig {
    appName?: string;
    pageTitle?: string;
    logoUrl?: string;
    primaryColor?: string;
    defaultAvatarUrl?: string;
    defaultCoverUrl?: string;
}
export type FeatureFlagKey = 'enableGift' | 'enableGiftCategory' | 'enableLiveMonitor' | 'enableRoomControl' | 'enableUpload' | 'enableDebugInfo';
export interface FeatureFlags {
    enableGift?: boolean;
    enableGiftCategory?: boolean;
    enableLiveMonitor?: boolean;
    enableRoomControl?: boolean;
    enableUpload?: boolean;
    enableDebugInfo?: boolean;
}
export interface AppMenu {
    key: string;
    title: string;
    path: string;
    icon?: string;
    order?: number;
    hidden?: boolean;
    requiresAuth?: boolean;
    feature?: FeatureFlagKey;
}
export interface MenuExtension {
    hidden?: string[];
    rename?: Record<string, string>;
    order?: string[];
    extraMenus?: AppMenu[];
}
export interface AppRoute<TComponent = unknown> {
    path: string;
    name: string;
    title: string;
    component: TComponent | (() => Promise<TComponent>);
    requiresAuth?: boolean;
    menuKey?: string;
    feature?: FeatureFlagKey;
}
export interface RouteExtension<TComponent = unknown> {
    extraRoutes?: AppRoute<TComponent>[];
    routeOverrides?: Record<string, TComponent | (() => Promise<TComponent>)>;
    titleOverrides?: Record<string, string>;
}
export interface ComponentSlots<TComponent = unknown> {
    layout?: {
        headerLeft?: TComponent;
        headerRight?: TComponent;
        sidebarTop?: TComponent;
        sidebarBottom?: TComponent;
    };
    liveList?: {
        beforeToolbar?: TComponent;
        afterToolbar?: TComponent;
        tableExtraColumns?: TComponent;
        rowActions?: TComponent;
        liveFormExtraFields?: TComponent;
    };
    liveMonitor?: {
        monitorCardExtraInfo?: TComponent;
        userActionExtraItems?: TComponent;
    };
    liveControl?: {
        beforeLiveInfo?: TComponent;
        afterLiveInfo?: TComponent;
        customControlPanel?: TComponent;
    };
    giftConfig?: {
        giftTableExtraColumns?: TComponent;
        giftFormExtraFields?: TComponent;
        giftRowActions?: TComponent;
    };
}
export interface RuntimeConfig {
    apiBaseUrl?: string;
    authToken?: string;
    language?: 'zh-CN' | 'en-US';
    routerMode?: 'hash' | 'memory';
    popupContainer?: HTMLElement | string;
}
export interface CustomerExtensionV1<TComponent = unknown> {
    version: CustomerExtensionProtocolVersion;
    brand?: BrandConfig;
    menus?: MenuExtension;
    routes?: RouteExtension<TComponent>;
    components?: ComponentSlots<TComponent>;
    features?: FeatureFlags;
    runtime?: RuntimeConfig;
}
export interface ResolvedCustomerConfig<TComponent = unknown> {
    version: '1';
    brand: BrandConfig;
    menus: AppMenu[];
    routes?: RouteExtension<TComponent>;
    components?: ComponentSlots<TComponent>;
    features: Required<FeatureFlags>;
    runtime: RuntimeConfig;
}
export declare function defineCustomerExtension<TComponent = unknown>(extension: CustomerExtensionV1<TComponent>): CustomerExtensionV1<TComponent>;
export declare function resolveBrandConfig(defaultBrand: BrandConfig, extension?: BrandConfig): BrandConfig;
export declare function resolveFeatureFlags(defaultFeatures: Required<FeatureFlags>, extension?: FeatureFlags): Required<FeatureFlags>;
export declare function resolveRuntimeConfig(defaultRuntime: RuntimeConfig, extension?: RuntimeConfig): RuntimeConfig;
export declare function resolveMenus(defaultMenus: AppMenu[], extension?: MenuExtension, features?: Required<FeatureFlags>): AppMenu[];
export declare function assertUniqueMenuKeys(menus: AppMenu[]): void;
export interface CustomerExtensionContractOptions {
    coreRouteNames?: string[];
    allowedRouteOverrides?: string[];
}
export interface CustomerExtensionContractResult {
    valid: boolean;
    errors: string[];
    warnings: string[];
}
export declare function validateCustomerExtensionContract<TComponent = unknown>(extension: CustomerExtensionV1<TComponent>, resolvedMenus: AppMenu[], options?: CustomerExtensionContractOptions): CustomerExtensionContractResult;
