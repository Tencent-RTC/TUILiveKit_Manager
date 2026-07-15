/**
 * 组件挂载入口
 *
 * 提供页面组件和模块类型定义
 */
export declare const version = "1.0.0";
export declare const publicApiVersion = "1.0.0";
export declare const compatibleCustomerExtensionVersion = "1";
export declare const modules: readonly ["room-list", "live-monitor", "room-control", "gift-config", "risk-control"];
export type LiveManagerModuleName = typeof modules[number];
