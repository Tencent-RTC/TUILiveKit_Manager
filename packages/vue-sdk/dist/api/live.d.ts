import type { TRTCResponse } from '../common/trtc-client';
import type { MonitorLiveInfo, CreateLiveParams, UpdateLiveParams } from '../types/live';
export interface VideoQuality {
    Level: number;
    Bitrate: number;
}
export interface LiveStatistic {
    TotalViewers?: number;
    TotalMsgCount?: number;
    TotalLikesReceived?: number;
    TotalGiftsSent?: number;
    TotalGiftCoins?: number;
    TotalUniqueGiftSenders?: number;
}
interface GetSeatListResponseBody {
    SeatList?: SeatItem[];
}
interface GetRobotResponseBody {
    RobotList?: Array<Record<string, unknown>>;
    RobotList_Account?: string[];
    Total?: number;
    Next?: string;
}
export interface MutedAccountItem {
    Member_Account?: string;
    MutedUntil?: number;
}
export interface BannedAccountItem {
    Member_Account?: string;
    BannedUntil?: number;
    Reason?: string;
}
interface GetMutedMemberListResponseBody {
    MutedAccountList?: MutedAccountItem[];
}
interface GetBannedMemberListResponseBody {
    BannedAccountList?: BannedAccountItem[];
}
/**
 * 直播基础信息（PascalCase 格式 - 与服务器 API 字段一致）
 * getLiveList 和 getLiveDetail 返回的公共字段
 */
interface LiveBaseInfo {
    RoomId: string;
    RoomName: string;
    Owner_Account: string;
    /** 主播昵称（getLiveList 返回） */
    OwnerName?: string;
    /** 主播头像 URL（getLiveList 返回） */
    OwnerAvatarUrl?: string;
    CoverURL: string;
    Category: number[];
    ActivityStatus: number;
    CreateTime: number;
    MemberCount: number;
    OnlineCount: number;
    ViewCount: number;
    Popularity: number;
    IsUnlimitedRoomEnabled: boolean;
    SeatLayoutTemplateId: number;
}
/**
 * 服务器返回的直播间列表项（PascalCase 格式）
 * 适用于 getLiveList 的返回数据
 */
export interface LiveListItem extends LiveBaseInfo {
    VideoQualityList?: Array<{
        Level: number;
        Bitrate: number;
    }>;
}
/**
 * 服务器返回的直播间详情（PascalCase 格式）
 * 适用于 getLiveDetail 的返回数据
 */
export interface LiveDetailInfo extends LiveBaseInfo {
    RoomType: string;
    IsSeatEnabled: boolean;
    TakeSeatMode: string;
    MaxMemberCount: number;
    MaxSeatCount: number;
    IsMessageDisabled: boolean;
    IsGiftEnabled: boolean;
    IsLikeEnabled: boolean;
    IsPublicVisible: boolean;
    BackgroundURL: string;
    LifetimeAfterNoUsers: number;
    LifetimeAfterOwnerLeave: number;
    LifetimeAfterOwnerOffline: number;
    KeepOwnerOnSeat: boolean;
    Notice: string;
    IsScreenSharingDisabled: boolean;
    IsAudioDisabled: boolean;
    IsVideoDisabled: boolean;
    SeatTemplate: string;
    CustomInfo?: string;
}
export interface LEBKeyInfo {
    SecretKey: string;
    Encrypted: string;
    Signature: string;
}
export interface SeatItem {
    Index: number;
    Member_Account?: string;
    IsTakenDisabled: boolean;
    IsVideoDisabled: boolean;
    IsAudioDisabled: boolean;
}
export interface GetLiveListResponse {
    list: LiveListItem[];
    next: string;
}
export interface GetRobotResponse extends TRTCResponse<GetRobotResponseBody> {
}
export interface GetSeatListResponse extends TRTCResponse<GetSeatListResponseBody> {
}
export interface CreateLiveResponse extends MonitorLiveInfo {
}
export { getStreamInfoAsync } from '../common/trtc-client';
export declare function getLiveList(params?: {
    next?: string;
    count?: number;
    sortDirection?: 'descend' | 'ascend';
}): Promise<{
    list: MonitorLiveInfo[];
    next: string;
}>;
export declare function getLiveDetail(liveId: string): Promise<MonitorLiveInfo | null>;
export declare function getLiveStatistic(liveId: string): Promise<TRTCResponse<LiveStatistic>>;
export declare function endLive(liveId: string): Promise<TRTCResponse<unknown>>;
export declare function createLive(params: CreateLiveParams): Promise<MonitorLiveInfo>;
export declare function updateLiveInfo(liveId: string, params: UpdateLiveParams): Promise<TRTCResponse<unknown>>;
export declare function muteMember(liveId: string, memberAccounts: string[], muteTime?: number): Promise<TRTCResponse<unknown>>;
export declare function unmuteMember(liveId: string, memberAccounts: string[]): Promise<TRTCResponse<unknown>>;
export declare function banMember(liveId: string, memberAccounts: string[], duration?: number, reason?: string): Promise<TRTCResponse<unknown>>;
export declare function unbanMember(liveId: string, memberAccounts: string[]): Promise<TRTCResponse<unknown>>;
export declare function getMutedMemberList(liveId: string, params?: {
    next?: string;
    count?: number;
    offset?: number;
    limit?: number;
}): Promise<TRTCResponse<GetMutedMemberListResponseBody> & GetMutedMemberListResponseBody>;
export declare function getBannedMemberList(liveId: string, params?: {
    next?: string;
    count?: number;
    offset?: number;
    limit?: number;
}): Promise<TRTCResponse<GetBannedMemberListResponseBody> & GetBannedMemberListResponseBody>;
export declare function getRobotList(liveId: string): Promise<GetRobotResponse>;
export declare function getSeatList(liveId: string): Promise<GetSeatListResponse>;
export declare function delRobot(liveId: string, robotAccounts: string[]): Promise<TRTCResponse<unknown>>;
export declare function kickUserOffSeat(liveId: string, memberAccount: string): Promise<TRTCResponse<unknown>>;
export declare function pickUserOnSeat(liveId: string, memberAccount: string, index?: number): Promise<TRTCResponse<unknown>>;
export declare function addRobot(liveId: string, robotAccounts: string[]): Promise<TRTCResponse<unknown>>;
export declare function importAccount(userId: string, nick?: string, faceUrl?: string): Promise<TRTCResponse<unknown> & {
    Error?: number;
}>;
/** 获取管理员列表响应 */
export interface GetAdminListResponse {
    Admin_Account?: string[];
}
/**
 * 获取直播间管理员列表（同步更新缓存，防止缓存过期）
 * @param liveId 直播 ID
 */
export declare function getAdminList(liveId: string): Promise<string[]>;
/**
 * 批量修改直播间管理员
 * @param liveId 直播 ID
 * @param adminAccounts 管理员用户 ID 列表
 * @param opType 操作类型：add 添加，delete 删除
 */
export declare function modifyAdmin(liveId: string, adminAccounts: string[], opType?: 'add' | 'delete'): Promise<TRTCResponse<unknown>>;
export declare function clearAdminCache(liveId?: string): void;
/**
 * 检查用户是否为当前缓存中的管理员
 */
export declare function isCachedAdmin(liveId: string, userId: string): boolean;
/**
 * 将指定用户添加为直播间管理员（自动合并已有管理员，防止覆盖）
 *
 * monitor_ 命名约定：
 *   以 `monitor_` 为前缀的 userId 表示由 Live Monitor 模块自动分配的管理员账号。
 *   `resolvePlayerAccount` 在 audience 模式下会生成 `monitor_` 前缀的临时账号，
 *   本函数会将此类账号自动设为直播间管理员。每次调用时，旧的 `monitor_` 管理员
 *   会被移除，仅保留最新的一个。
 *
 * - 会先移除已有列表中所有 monitor_ 前缀的管理员，再加当前用户
 * - 非 monitor_ 的管理员不受影响
 * - 同步更新 admin 缓存 + 设置 IM profile（userRole）
 * - 添加失败时自动回滚已删除的旧管理员
 *
 * @param liveId 直播 ID
 * @param userId 要添加的管理员用户 ID
 */
export declare function addLiveAdmin(liveId: string, userId: string): Promise<void>;
