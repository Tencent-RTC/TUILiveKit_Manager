import type { CheckConfigResponse, LoginResponse, UserSigResponse } from '../types/auth';
import type { UserPortraitProfile } from '../types/live';
export declare function checkServerConfig(): Promise<CheckConfigResponse>;
export declare function login(params?: {
    userId?: string;
    userSig?: string;
    sdkAppId?: number;
}): Promise<LoginResponse>;
/**
 * 前端自主凭证模式登录
 *
 * 用户在前端输入 sdkAppId + secretKey + userId，
 * 前端本地计算 userSig 后发送到后端登录。
 * 登录成功后，secretKey 会保存在内存中用于后续临时账号的 userSig 计算。
 *
 * @param sdkAppId - 腾讯云 SDK App ID
 * @param secretKey - SDK Secret Key（仅存内存，不持久化）
 * @param userId - 登录用户 ID（默认 administrator）
 * @param expireTime - userSig 有效期（秒），默认 604800（7 天）
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
