/**
 * 凭证验证工具
 *
 * SDKAppID 有效号段（参考腾讯云 TRTC 文档）：
 *   国内站:     [1400000000, 1700000000)  10 位
 *   国际站:     [20000000,  100000000)     8 位
 *   跨站(国内): [1720000000, 1800000000)  10 位
 */
export interface CredentialValidationResult {
    valid: boolean;
    /** 出错的字段名，valid 为 true 时为 undefined */
    field?: 'sdkAppId' | 'secretKey' | 'userId';
    /** 错误信息（I18N 常量值，即英文文案），作为 t() key 命中资源，valid 为 true 时为 undefined */
    message?: string;
}
/**
 * 验证 SDKAppID 格式和号段
 * - 8 位：必须落在国际站号段内
 * - 10 位：必须落在国内站或跨站号段内
 */
export declare function validateSdkAppId(value: string): CredentialValidationResult;
/**
 * 验证 SecretKey
 * - 非空
 * - 最小长度 8 字符
 */
export declare function validateSecretKey(value: string): CredentialValidationResult;
/**
 * 验证 User ID
 * - 非空
 * - 不超过 32 字节（TRTC IM 限制）
 */
export declare function validateUserId(value: string): CredentialValidationResult;
/**
 * 组合验证：按 sdkAppId → secretKey → userId 顺序校验，
 * 遇到第一个失败立刻返回
 */
export declare function validateCredentialLogin(sdkAppId: string, secretKey: string, userId: string): CredentialValidationResult;
/**
 * 判断 value 是否为有效的 SDKAppID（仅检查格式，不做号段校验）
 * 用于过滤脏数据等宽松场景
 */
export declare function isValidSdkAppIdFormat(value: string): boolean;
