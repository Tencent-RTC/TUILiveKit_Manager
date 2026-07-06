import type { StoredCredentials } from './types/auth';
export declare const CREDENTIAL_KEYS: {
    readonly CONFIGURED: "server_configured";
};
/**
 * 保存登录状态到内存 store
 *
 * - 服务端配置模式：保存为 server 模式
 * - 凭证模式：保存凭证到内存态，仅在当前 SPA 生命周期内有效
 *
 * @param data - 支持以下字段：
 *   - userId   : TRTC 用户 ID
 *   - userSig  : TRTC 用户签名
 *   - sdkAppId : SDK 应用 ID
 *   - token    : 服务端配置模式下返回的 token
 *   - userName : 用户昵称
 *   - configured : 标记为服务端配置模式（true 时即使缺少凭证也不会跳过保存）
 */
export declare function saveCredentials(data: Record<string, unknown> | null | undefined): void;
/** 获取当前凭证（proxy 模式下有值） */
export declare function getCredentials(): StoredCredentials | null;
/** 是否为服务端配置模式 */
export declare function isServerConfiguredMode(): boolean;
/** 是否已登录 */
export declare function isLoggedIn(): boolean;
/** 是否为 server 未配置（凭证透传模式） */
export declare function isProxyMode(): boolean;
/** 清除所有登录凭证 */
export declare function clearCredentials(): void;
/** 当前 Bearer Token */
export declare function getAuthToken(): string;
/** 当前用户名 */
export declare function getCurrentUserName(): string;
/** 当前业务域名 */
export declare function getCurrentDomain(): string;
/** 当前 SDK App ID */
export declare function getSdkAppId(): number;
/** 当前用户 ID */
export declare function getCurrentUserId(): string;
/** 当前 UserSig */
export declare function getCurrentUserSig(): string;
/** 当前 SecretKey（仅在 proxy 模式，用于前端本地计算 userSig） */
export declare function getSecretKey(): string;
/**
 * 前端本地计算 userSig（proxy 模式专用）
 * 使用内存中的 sdkAppId + secretKey 为任意 userId 生成签名
 * 有效期 7 天（604800 秒）
 */
export declare function computeUserSig(userId: string): string | null;
/** 设置服务器是否已配置 */
export declare function setServerConfigured(configured: boolean): void;
/** 检查服务器是否已配置 */
export declare function isServerConfigured(): boolean;
/** 清除兼容旧版本的模式缓存 */
export declare function clearCache(): void;
