import type { PushInfo } from '../types/live';
export type { PushInfo } from '../types/live';
export declare const TRTCApi: {
    readonly createLive: "v4/live_engine_http_srv/create_room";
    readonly destroyRoom: "v4/live_engine_http_srv/destroy_room";
    readonly fetchLiveList: "v4/live_engine_http_srv/get_room_list";
    readonly getRoomInfo: "v4/live_engine_http_srv/get_room_info";
    readonly updateLiveInfo: "v4/live_engine_http_srv/update_room_info";
    readonly getRoomMetadata: "v4/live_engine_http_srv/get_room_metadata";
    readonly setRoomMetadata: "v4/live_engine_http_srv/set_room_metadata";
    readonly delRoomMetadata: "v4/live_engine_http_srv/del_room_metadata";
    readonly sendTextMsg: "v4/live_engine_http_srv/send_text_msg";
    readonly sendCustomMsg: "v4/live_engine_http_srv/send_custom_msg";
    readonly sendGroupMsg: "v4/group_open_http_svc/send_group_msg";
    readonly muteMember: "v4/live_engine_http_srv/mute_member";
    readonly banMember: "v4/live_engine_http_srv/ban_member";
    readonly unbanMember: "v4/live_engine_http_srv/unban_member";
    readonly getBannedMemberList: "v4/live_engine_http_srv/get_banned_member_list";
    readonly getMutedMemberList: "v4/live_engine_http_srv/get_muted_member_list";
    readonly getLiveStatistic: "v4/live_engine_http_srv/get_room_statistic";
    readonly getGiftList: "v4/live_engine_http_srv/get_gift_info_list";
    readonly getGiftCount: "v4/live_engine_http_srv/get_gift_count";
    readonly getGift: "v4/live_engine_http_srv/get_gift";
    readonly addGift: "v4/live_engine_http_srv/add_gift";
    readonly editGift: "v4/live_engine_http_srv/edit_gift";
    readonly delGift: "v4/live_engine_http_srv/del_gift";
    readonly getGiftLanguage: "v4/live_engine_http_srv/get_gift_language";
    readonly setGiftLanguage: "v4/live_engine_http_srv/set_gift_language";
    readonly delGiftLanguage: "v4/live_engine_http_srv/del_gift_language";
    readonly addGiftCategory: "v4/live_engine_http_srv/add_gift_category";
    readonly delGiftCategory: "v4/live_engine_http_srv/del_gift_category";
    readonly getGiftCategory: "v4/live_engine_http_srv/get_gift_category";
    readonly editGiftCategory: "v4/live_engine_http_srv/edit_gift_category";
    readonly getGiftCategoryLanguage: "v4/live_engine_http_srv/get_gift_category_language";
    readonly setGiftCategoryLanguage: "v4/live_engine_http_srv/set_gift_category_language";
    readonly delGiftCategoryLanguage: "v4/live_engine_http_srv/del_gift_category_language";
    readonly addGiftCategoryRelations: "v4/live_engine_http_srv/add_gift_category_relations";
    readonly delGiftCategoryRelations: "v4/live_engine_http_srv/del_gift_category_relations";
    readonly addRobot: "v4/live_engine_http_srv/add_robot";
    readonly getRobot: "v4/live_engine_http_srv/get_robot";
    readonly delRobot: "v4/live_engine_http_srv/del_robot";
    readonly importAccount: "v4/im_open_login_svc/account_import";
    readonly getSeatList: "v4/room_engine_http_mic/get_seat_list";
    readonly pickUserOnSeat: "v4/room_engine_http_mic/pick_user_on_seat";
    readonly kickUserOffSeat: "v4/room_engine_http_mic/kick_user_off_seat";
    readonly resumeMcuTask: "v4/live_engine_http_srv/resume_mcu_task";
    readonly getUserProfilePortrait: "v4/profile/portrait_get";
    readonly setUserProfilePortrait: "v4/profile/portrait_set";
    readonly getAdminList: "v4/live_engine_http_srv/get_admin_list";
    readonly modifyAdmin: "v4/live_engine_http_srv/modify_admin";
};
/**
 * 通过 server 代理发送 TRTC API 请求
 */
export declare function trtcRequest<T = any>(apiPath: string, body?: Record<string, any>): Promise<T>;
/**
 * 通过 server 代理发送 TRTC API 请求（自动检查 ErrorCode）
 * 成功直接返回 Response，失败 reject LiveManagerError
 *
 * @param context 操作上下文，用于调用方定位错误来源（如 'giftList'）
 */
export declare function trtcRequestChecked<T = any>(apiPath: string, body?: Record<string, any>, context?: string): Promise<T>;
/**
 * TRTC 响应通用接口
 */
export interface TRTCResponse<T = any> {
    ErrorCode: number;
    ErrorInfo?: string;
    ActionStatus?: string;
    RequestId?: string;
    Response?: T;
}
/**
 * TRTC API 错误类（已收编到 LiveManagerError）
 * @deprecated 请使用 LiveManagerError
 */
export { LiveManagerError as TRTCError } from './error';
/**
 * 检查 TRTC 响应是否成功
 */
export declare function checkTRTCResponse<T>(response: TRTCResponse<T>, context?: string): T | undefined;
/**
 * 判断是否为海外版 SDK App ID
 * sdkAppId < 1400000000 为海外版
 */
export declare function isOverseaSdkAppId(sdkAppId: number): boolean;
/**
 * 获取 RTMP 推流服务器地址
 */
export declare function getRtmpPushUrl(sdkAppId?: number): string;
/**
 * 生成 OBS 推流信息
 *
 * 仅用于获取 OBS 机器人的推流信息（serverUrl + streamKey）。
 * 通过服务端为指定的 anchorId 生成 UserSig，拼装完整的 RTMP 推流地址。
 *
 * @param liveId   直播间 ID
 * @param anchorId OBS 机器人 ID（必传，由 setupObsStreamingForLive / getObsLiveDetailInfo 提供）
 */
export declare function getStreamInfoAsync(liveId: string, anchorId: string): Promise<PushInfo | null>;
