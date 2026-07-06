/**
 * 直播相关类型定义（与 API 文档一致）
 *
 * 供 `common/` 层内部使用。
 * 最终从 tuikit-live-manager-sdk-react 或 tuikit-live-manager-sdk-vue 对外暴露。
 */
export type { UserPortraitProfile, MonitorLiveInfo, PushInfo, SeatTemplate, CreateLiveParams, UpdateLiveParams, LiveListOptions, FetchLiveListParams, MemberAccountsParam, MuteMemberParams, BanMemberParams, LiveStats, ServerConfig, } from '../../types/live';
export type { LiveListItem, LiveDetailInfo } from '../../api/live';
