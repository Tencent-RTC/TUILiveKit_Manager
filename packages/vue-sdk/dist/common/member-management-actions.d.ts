/**
 * 成员管理模块公共操作
 *
 * 框架无关的成员管理业务逻辑，包括：
 * - 禁言成员列表
 * - 封禁成员列表
 * - 禁言/解除禁言
 * - 封禁/解除封禁
 */
export declare const MUTED_LIST_PAGE_SIZE: 50;
export declare const BANNED_LIST_PAGE_SIZE: 50;
export declare const DEFAULT_MUTE_DURATION = 600;
export declare const DEFAULT_BAN_DURATION = 3600;
export interface MutedMember {
    /** 用户 ID */
    userId: string;
    /** 禁言结束时间（秒级时间戳） */
    endTime: number;
}
export interface BannedMember {
    /** 用户 ID */
    userId: string;
    /** 封禁结束时间（秒级时间戳） */
    endTime: number;
    /** 封禁原因（可选） */
    reason?: string;
}
export interface MemberMutParams {
    /** 直播 ID */
    liveId: string;
    /** 用户 ID 列表 */
    userIds?: string[];
    /** 用户 ID 列表（API 字段命名兼容） */
    memberAccounts?: string[];
    /** 禁言时长（秒），默认 600 秒 */
    duration?: number;
    /** 禁言时长（秒，API 字段命名兼容） */
    muteTime?: number;
}
export interface MemberBanParams {
    /** 直播 ID */
    liveId: string;
    /** 用户 ID 列表 */
    userIds?: string[];
    /** 用户 ID 列表（API 字段命名兼容） */
    memberAccounts?: string[];
    /** 封禁时长（秒），默认 86400 秒 */
    duration?: number;
    /** 封禁时长（秒，API 字段命名兼容） */
    banTime?: number;
    /** 封禁原因（可选） */
    reason?: string;
}
export interface MemberUnmuteParams {
    /** 直播 ID */
    liveId: string;
    /** 用户 ID 列表 */
    userIds?: string[];
    /** 用户 ID 列表（API 字段命名兼容） */
    memberAccounts?: string[];
}
export interface MemberUnbanParams {
    /** 直播 ID */
    liveId: string;
    /** 用户 ID 列表 */
    userIds?: string[];
    /** 用户 ID 列表（API 字段命名兼容） */
    memberAccounts?: string[];
}
/**
 * 获取禁言成员列表
 * @param liveId 直播 ID
 * @returns 禁言成员列表
 */
export declare function fetchMutedList(liveId: string): Promise<MutedMember[]>;
/**
 * 检查用户是否被禁言
 * @param userId 用户 ID
 * @param mutedList 禁言列表
 * @returns 是否被禁言
 */
export declare function isMuted(userId: string, mutedList: MutedMember[]): boolean;
/**
 * 获取封禁成员列表
 * @param liveId 直播 ID
 * @returns 封禁成员列表
 */
export declare function fetchBannedList(liveId: string): Promise<BannedMember[]>;
/**
 * 检查用户是否被封禁
 * @param userId 用户 ID
 * @param bannedList 封禁列表
 * @returns 是否被封禁
 */
export declare function isBanned(userId: string, bannedList: BannedMember[]): boolean;
/**
 * 禁言成员
 * @param params 禁言参数
 */
export declare function muteMember(params: MemberMutParams): Promise<void>;
/**
 * 解除禁言
 * @param params 解除禁言参数
 */
export declare function unmuteMember(params: MemberUnmuteParams): Promise<void>;
/**
 * 封禁成员
 * @param params 封禁参数
 */
export declare function banMember(params: MemberBanParams): Promise<void>;
/**
 * 解除封禁
 * @param params 解除封禁参数
 */
export declare function unbanMember(params: MemberUnbanParams): Promise<void>;
/**
 * 检查用户是否为管理员（根据观众列表中的 userRole 字段）
 * @param userId 用户 ID
 * @param audienceList 观众列表（需包含 userId 和 userRole 字段）
 * @returns 是否为管理员
 */
export declare function isAdminUser(userId: string, audienceList: Array<{
    userId: string;
    userRole?: number;
}>): boolean;
/**
 * 检查用户是否为主播（根据观众列表中的 userRole 字段）
 * @param userId 用户 ID
 * @param audienceList 观众列表（需包含 userId 和 userRole 字段）
 * @returns 是否为主播
 */
export declare function isAnchorUser(userId: string, audienceList: Array<{
    userId: string;
    userRole?: number;
}>): boolean;
/**
 * 获取 OBS 机器人 ID
 * @param anchorUserId 主播用户 ID
 * @returns OBS 机器人 ID
 */
export declare function getObsRobotId(anchorUserId: string): string;
/**
 * 检查是否为 OBS 机器人账号
 * @param userId 用户 ID
 * @param anchorUserId 主播用户 ID
 * @returns 是否为机器人
 */
export declare function isObsRobot(userId: string, anchorUserId: string): boolean;
/**
 * 过滤掉 OBS 机器人账号
 * @param userIds 用户 ID 列表
 * @param anchorUserId 主播用户 ID
 * @returns 过滤后的用户 ID 列表
 */
export declare function filterObsRobots(userIds: string[], anchorUserId: string): string[];
/**
 * 格式化剩余时间
 * @param endTime 结束时间（秒级时间戳）
 * @returns 剩余时间描述（如 "5分钟"、"2小时"、"已过期"）
 */
export declare function formatRemainingTime(endTime: number): string;
/**
 * 检查是否已过期
 * @param endTime 结束时间（秒级时间戳）
 * @returns 是否过期
 */
export declare function isExpired(endTime: number): boolean;
