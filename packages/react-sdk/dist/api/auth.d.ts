import type { CheckConfigResponse, LoginResponse, UserSigResponse, LoginParams } from '../types/auth';
import type { UserPortraitProfile } from '../types/live';
export declare function checkServerConfig(): Promise<CheckConfigResponse>;
/**
 * 登录（统一入口，自动判断模式）
 *
 * - 不传参数或空对象：server 模式，由服务端 .env 配置自动登录
 * - 传 `secretKey`：proxy 模式，前端本地计算 userSig 后发送到后端登录
 * - 传 `userSig` + `sdkAppId`：直接用已有凭证登录
 *
 * @param params - 登录参数，空对象表示 server 模式
 */
export declare function login(params?: LoginParams): Promise<LoginResponse>;
/**
 * 前端自主凭证模式登录（已废弃，请使用 login({ sdkAppId, secretKey, userId?, expireTime? }) 代替）
 * @deprecated 请使用 `login({ sdkAppId, secretKey, userId?, expireTime? })` 代替
 */
export declare function loginWithSecret(sdkAppId: number, secretKey: string, userId?: string, expireTime?: number): Promise<LoginResponse>;
export declare function getUserSig(userId: string): Promise<UserSigResponse>;
/**
 * 通过服务端 API 创建基础账号信息（含 userSig）
 * @param userId - 可选，指定 userId（不传则自动生成）
 * @param prefix - userId 前缀，默认 "live_"（live-control 场景建议传 "monitor_" 便于识别）
 */
export declare function createBasicAccount(userId?: string, prefix?: string): Promise<{
    sdkAppId: number;
    userId: string;
    userSig: string;
    userName: string;
    avatarUrl: string;
} | undefined>;
/**
 * 设置指定用户的资料（Nick + Role），通过 portrait_set 接口标记为管理员
 * @param userIdOrRole - 用户 ID（新签名）或角色值（旧签名，已废弃）
 * @param role - 角色值，默认为 1（管理员）
 * @param nick - 昵称，默认为 "管理员"
 */
export declare function setUserProfileRole(userId: string, role?: number, nick?: string): Promise<{
    ErrorCode: number;
    ErrorInfo?: string;
    ActionStatus?: string;
}>;
/** @deprecated 请使用 setUserProfileRole(userId, role, nick) 新签名 */
export declare function setUserProfileRole(role: number): Promise<{
    ErrorCode: number;
    ErrorInfo?: string;
    ActionStatus?: string;
}>;
export declare function getUserProfilePortrait(userId: string): Promise<UserPortraitProfile | null>;
export declare function batchGetUserProfilePortrait(userIds: string[]): Promise<Map<string, UserPortraitProfile>>;
export interface CredentialVerificationResult {
    valid: boolean;
    error?: string;
}
/**
 * 登录成功后验证凭证是否有效
 *
 * 通过调用一个轻量 TRTC API（portrait_get）来验证 userSig 是否有效。
 * - 成功：凭证有效，可以安全跳转
 * - 失败：凭证无效（sdkAppId 或 secretKey 错误），建议用户重新输入
 *
 * 调用时机：saveCredentials 之后、页面跳转之前
 */
export declare function verifyCredentials(): Promise<CredentialVerificationResult>;
