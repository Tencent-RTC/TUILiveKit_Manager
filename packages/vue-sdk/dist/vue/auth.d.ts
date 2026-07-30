/**
 * 认证状态 Composable（单例模式）
 *
 * 收拢登录认证与用户资料能力：
 * - 服务端配置检查（checkServerConfig）
 * - 登录 / 登出（server 与 proxy 两种模式，成功后自动保存凭证）
 * - 登录态响应式订阅（基于 auth-store 订阅机制）
 * - 用户资料查询（昵称 / 头像）
 *
 * 设计原则：
 *   - 业务逻辑复用 common 层（auth-store / auth-actions）与 api 层（api/auth）
 *   - Composable 只负责 Vue 响应式同步，模块级共享 ref，多组件共享同一实例
 */
import { type ComputedRef, type Ref } from 'vue';
import type { AuthState, AuthMode, CheckConfigResponse, LoginResponse, LoginParams } from '../types/auth';
import type { UserPortraitProfile } from '../types/live';
/** useAuthState() 返回值 */
export interface UseAuthStateReturn {
    /** 完整认证状态（高级用法，一般优先使用下方的派生状态） */
    authState: Ref<AuthState>;
    /** 是否已登录 */
    isLoggedIn: ComputedRef<boolean>;
    /** 当前用户 ID */
    currentUserId: ComputedRef<string>;
    /** 当前用户昵称 */
    currentUserName: ComputedRef<string>;
    /** 当前 SDK App ID */
    sdkAppId: ComputedRef<number>;
    /** 登录模式：server（服务端配置）| proxy（前端自主凭证）| null（未登录） */
    authMode: ComputedRef<AuthMode>;
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
 * 认证状态 Composable
 * 单例模式：多次调用共享同一份认证状态
 */
export declare function useAuthState(): UseAuthStateReturn;
