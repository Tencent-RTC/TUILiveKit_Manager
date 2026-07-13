/**
 * 认证相关类型
 *
 * 整个 SDK（含闭源 UI 组件）共用这一组类型。
 */
/** 配置检查响应 */
export interface CheckConfigResponse {
    code: number;
    message: string;
    data?: {
        configured: boolean;
        sdkAppId: number;
        hasSdkAppId: boolean;
        hasSecretKey: boolean;
        hasIdentifier: boolean;
        identifier: string;
        /** 违规标签轮询刷新间隔（秒），默认 600（10 分钟），从服务端 .env 配置 */
        liveViolationRefreshInterval?: number;
    };
}
/** 登录响应 */
export interface LoginResponse {
    code: number;
    message: string;
    data?: {
        token: string;
        userId: string;
        userName: string;
        sdkAppId?: number;
        userSig?: string;
        configured?: boolean;
        domain?: string;
    };
}
/** UserSig 响应 */
export interface UserSigResponse {
    code: number;
    message: string;
    data?: {
        sdkAppId: number;
        userId: string;
        userSig: string;
        /** 用户昵称（部分服务端不返回） */
        userName?: string;
    };
}
/** 登录参数（自动模式 - 服务器完整配置时不需要参数） */
export interface AutoLoginParams {
}
/** 登录参数（凭证模式 - 服务器未完整配置时需要） */
export interface CredentialLoginParams {
    userId?: string;
    userSig: string;
    sdkAppId: number;
    domain?: string;
}
/** 统一登录参数类型 */
export type LoginParams = AutoLoginParams | CredentialLoginParams;
/** 持久化存储的凭证 */
export interface StoredCredentials {
    userId: string;
    userSig: string;
    sdkAppId: number;
    /** 仅在 proxy 模式（前端自主凭证），用于本地计算 userSig */
    secretKey?: string;
}
/** 基础用户信息 */
export interface BasicUserInfo {
    sdkAppId: number;
    userId: string;
    userSig: string;
    userName: string;
    avatarUrl: string;
}
/** 认证模式 */
export type AuthMode = 'server' | 'proxy' | null;
/**
 * 认证状态（SDK 全局单例）
 *
 * 顶层 sdkAppId / userId / userSig 与 credentials 由 auth-store 自动同步：
 * - 基础设施层（trtc-client / api/auth / api/chat）读取顶层字段
 * - UI 组件登录态使用 mode / token / userName / domain / credentials
 */
export interface AuthState {
    /** 当前生效的 SDK App ID（与 credentials.sdkAppId 同步） */
    sdkAppId: number;
    /** 当前用户 ID（与 credentials.userId 同步） */
    userId: string;
    /** 当前用户签名（与 credentials.userSig 同步） */
    userSig: string;
    /** 登录模式 */
    mode: AuthMode;
    /** Bearer Token */
    token: string;
    /** 用户昵称 */
    userName: string;
    /** 业务域名 */
    domain: string;
    /** 是否已配置（旧字段，保留兼容） */
    isConfigured: boolean;
    /** 应用标识（旧字段，保留兼容） */
    identifier: string;
    /** 用户头像（旧字段，保留兼容） */
    avatarUrl: string;
    /** 存储凭证（proxy 模式下使用） */
    credentials: StoredCredentials | null;
    /** 仅在 proxy 模式，用于本地计算 userSig */
    secretKey: string;
}
