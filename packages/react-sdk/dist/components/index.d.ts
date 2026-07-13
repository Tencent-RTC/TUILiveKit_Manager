/**
 * 组件挂载入口
 *
 * 提供 mountLiveManager 和 preloadLiveManager 能力
 */
export declare const version = "1.0.0";
export declare const publicApiVersion = "1.0.0";
export declare const compatibleCustomerExtensionVersion = "1";
export declare const modules: readonly ["room-list", "live-monitor", "room-control", "gift-config", "risk-control"];
export type LiveManagerModuleName = typeof modules[number];
export interface RuntimeConfig {
    apiBaseUrl?: string;
    authToken?: string;
    getAuthToken?: () => string | Promise<string>;
    language?: 'zh-CN' | 'en-US';
    routerMode?: 'hash' | 'memory';
    popupContainer?: HTMLElement | string;
}
export interface LiveManagerMountOptions {
    container: HTMLElement | string;
    module: LiveManagerModuleName;
    framework?: 'react' | 'vue';
    runtime?: RuntimeConfig;
    extension?: unknown;
    props?: Record<string, unknown>;
}
export interface MountedLiveManager {
    unmount: () => void;
    update?: (props: Record<string, unknown>) => void;
}
export declare function mountLiveManager(_options: LiveManagerMountOptions): Promise<MountedLiveManager>;
export declare function preloadLiveManager(_options?: {
    framework?: 'react' | 'vue';
    module?: LiveManagerModuleName;
}): Promise<void>;
