/**
 * Aegis 性能监控 SDK
 * 文档: https://docs.qq.com/doc/DUVhITmRqT2pGdWRG
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
/**
 * 初始化 Aegis
 *
 * 注意：uin 可能在初始化时尚不可用（用户未登录）。
 * 如果在初始化时 uin 为空，Aegis 实例会被创建但上报数据不带 uin。
 * 后续通过 setAegisUin() 或 saveCredentials() 设置 uin 后，
 * 会调用 reinitAegis() 重建实例以确保 uin 生效。
 *
 * @param config 配置项
 * @returns Aegis 实例
 */
export declare function initAegis(config: AegisConfig): Aegis | null;
/**
 * 销毁并重建 Aegis 实例（用于 uin 从空变为有值时的场景）
 * 仅当实例已存在且 uin 确实不同时才重建
 *
 * @param uin 新的 uin 值
 * @param baseConfig 保存的基本配置（id 等），从原始 initAegis 配置中提取
 */
export declare function reinitAegisIfUinChanged(uin: string): void;
/**
 * 获取 Aegis 实例
 * @returns Aegis 实例
 */
export declare function getAegis(): Aegis | null;
/**
 * 设置用户 ID
 * @param uin 用户唯一 ID
 */
export declare function setAegisUin(uin: string): void;
/**
 * 根据当前 sdkAppId 更新 uin
 * @returns 是否更新成功
 */
export declare function updateUinFromSdkAppId(): boolean;
/**
 * 启用自动同步（当前实现为立即同步一次）
 */
export declare function enableAutoUpdateUin(): void;
/**
 * 禁用自动同步（内存态实现下无需额外清理）
 */
export declare function disableAutoUpdateUin(): void;
/**
 * 检查是否已初始化
 */
export declare function isAegisInited(): boolean;
export { Aegis };
