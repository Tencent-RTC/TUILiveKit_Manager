/**
 * 认证状态管理（内存）
 *
 * 整个 SDK（含闭源 UI 组件）共用同一份内存状态。
 *
 * - 顶层 sdkAppId / userId / userSig：trtc-client、api/auth、api/chat 等"基础设施层"直接读取
 * - mode / token / userName / domain / credentials：UI 组件登录态使用
 * - credentials 与顶层 sdkAppId/userId/userSig 由 setState 自动保持同步
 *
 * 各前端项目可通过 setAuthStoreAdapter 注入自定义存储；SDK 自身只负责内存读写。
 */
import type { AuthState, StoredCredentials, AuthMode } from './types/auth';
export interface AuthStoreAdapter {
    getState(): AuthState;
    setState(patch: Partial<AuthState>): void;
    reset(): void;
}
export declare function getDefaultAuthState(): AuthState;
export declare function setAuthStoreAdapter(nextAdapter?: AuthStoreAdapter): void;
export declare function getAuthStateSnapshot(): AuthState;
export declare function updateAuthState(patch: Partial<AuthState>): AuthState;
export declare function resetAuthState(): void;
export type { AuthState, AuthMode, StoredCredentials };
/** @deprecated 与 AuthState 同义，仅保留以兼容旧引用 */
export type AuthStateSnapshot = AuthState;
