import type { AuthState, AuthMode, CheckConfigResponse, LoginResponse, LoginParams } from '../types/auth';
import type { UserPortraitProfile } from '../types/live';
/** useAuthState() 返回值 */
export interface UseAuthStateReturn {
    /** 完整认证状态（高级用法，一般优先使用下方的派生状态） */
    authState: AuthState;
    /** 是否已登录 */
    isLoggedIn: boolean;
    /** 当前用户 ID */
    currentUserId: string;
    /** 当前用户昵称 */
    currentUserName: string;
    /** 当前 SDK App ID */
    sdkAppId: number;
    /** 登录模式：server（服务端配置）| proxy（前端自主凭证）| null（未登录） */
    authMode: AuthMode;
    /** 检查服务端配置（判断是否已配置 SDKAppID / SecretKey） */
    checkServerConfig(): Promise<CheckConfigResponse>;
    /**
     * 登录（统一入口，自动判断模式）
     * - 不传参数：server 模式，由服务端配置自动登录
     * - 传 `{ sdkAppId, secretKey, userId?, expireTime? }`：proxy 模式，前端本地计算 userSig
     * - 传 `{ sdkAppId, userSig, userId? }`：直接用已有凭证登录
     */
    login(params?: LoginParams): Promise<LoginResponse>;
    /** 登出并清除全部凭证 */
    logout(): void;
    /** 获取单个用户资料（昵称 / 头像） */
    getUserProfilePortrait(userId: string): Promise<UserPortraitProfile | null>;
    /** 批量获取用户资料（昵称 / 头像），返回 Map<userId, profile> */
    batchGetUserProfilePortrait(userIds: string[]): Promise<Map<string, UserPortraitProfile>>;
}
/**
 * 认证状态 Hook
 * 全局共享同一份认证状态，任意组件订阅都会同步更新
 */
export declare function useAuthState(): UseAuthStateReturn;
