/**
 * Aegis 性能监控 SDK
 * 文档: https://docs.qq.com/doc/DUVhITmRqT2pGdWRG
 *
 * 所有状态通过 window.__LIVEKIT_AEGIS__ 存储，
 * 不保留模块级变量，彻底消除 Vite 代码分割时跨 chunk 复制问题。
 */
import Aegis from 'aegis-web-sdk';
export interface AegisConfig {
    id: string;
    uin?: string;
    reportApiSpeed?: boolean;
    reportAssetSpeed?: boolean;
    spa?: boolean;
    hostUrl?: string;
    /** 是否在初始化时尝试根据当前认证状态同步 sdkAppId 到 uin */
    autoUpdateUin?: boolean;
    [key: string]: unknown;
}
export declare function initAegis(config: AegisConfig): Aegis | null;
export declare function reinitAegisIfUinChanged(uin: string): void;
export declare function getAegis(): Aegis | null;
export declare function setAegisUin(uin: string): void;
export declare function updateUinFromSdkAppId(): boolean;
export declare function enableAutoUpdateUin(): void;
export declare function disableAutoUpdateUin(): void;
export declare function isAegisInited(): boolean;
export { Aegis };
