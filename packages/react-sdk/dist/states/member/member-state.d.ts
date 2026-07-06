/**
 * 成员管理状态层
 *
 * 封装所有成员控制相关的 API 调用
 * - 禁言/解禁言
 * - 封禁/解封禁
 * - 获取禁言/封禁列表
 *
 * 架构: Composables → memberStates → API
 */
import type { MutedAccountItem, BannedAccountItem } from '../../api/live';
/**
 * 成员管理状态
 *
 * 提供成员控制的所有 API 调用封装
 * UI 层不应该直接调用这些方法，应该通过 Composables 调用
 */
export declare const memberStates: {
    /**
     * 禁言成员
     * @param liveId 直播间ID
     * @param memberAccounts 成员账号列表
     * @param muteTime 禁言时长(秒)
     */
    muteMember: (liveId: string, memberAccounts: string[], muteTime?: number) => Promise<import("../../common/trtc-client").TRTCResponse<unknown>>;
    /**
     * 解除禁言
     * @param liveId 直播间ID
     * @param memberAccounts 成员账号列表
     */
    unmuteMember: (liveId: string, memberAccounts: string[]) => Promise<import("../../common/trtc-client").TRTCResponse<unknown>>;
    /**
     * 封禁成员
     * @param liveId 直播间ID
     * @param memberAccounts 成员账号列表
     * @param duration 封禁时长(秒)
     * @param reason 封禁原因
     */
    banMember: (liveId: string, memberAccounts: string[], duration?: number, reason?: string) => Promise<import("../../common/trtc-client").TRTCResponse<unknown>>;
    /**
     * 解除封禁
     * @param liveId 直播间ID
     * @param memberAccounts 成员账号列表
     */
    unbanMember: (liveId: string, memberAccounts: string[]) => Promise<import("../../common/trtc-client").TRTCResponse<unknown>>;
    /**
     * 获取禁言列表
     * @param liveId 直播间ID
     * @param params 分页参数
     */
    fetchMutedList: (liveId: string, params?: {
        next?: string;
        count?: number;
    }) => Promise<MutedAccountItem[]>;
    /**
     * 获取封禁列表
     * @param liveId 直播间ID
     * @param params 分页参数
     */
    fetchBannedList: (liveId: string, params?: {
        next?: string;
        count?: number;
    }) => Promise<BannedAccountItem[]>;
};
