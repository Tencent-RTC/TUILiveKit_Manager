/**
 * 风控管理 Composable
 * 与 API 文档保持一致
 *
 * useRiskControlState 是 SDK 对外暴露的风控入口，直接调用 API；
 * UI 层可以直接使用，也可以在 View/composable 层包一层 UI 状态。
 */
import { type Ref } from 'vue';
import type { MuteMemberParams, BanMemberParams, MemberAccountsParam } from '../types/live';
import type { GetModerationListParams, PaginatedModerationList, ModerationType, TextModerationItem } from '../types/interaction';
import type { MutedMember, BannedMember } from '../common/member-management-actions';
import { type ModerationMode } from '../api/interaction';
export type { ModerationType as TextModerationType };
export type { TextModerationItem };
/** 批量放行文本审核记录参数 */
export interface ApproveTextModerationItemsParams {
    /** 记录 ID 列表 */
    ids: string[];
    /** 审核记录内容；不传时使用 id 兜底 */
    items?: Array<{
        id: string;
        content: string;
        userId?: string;
    }>;
    /** 直播 ID；不传时使用 useRiskControlState options 中的 liveId */
    liveId?: string;
}
/** useRiskControlState 选项 */
export interface UseRiskControlStateOptions {
    /** 每页数量 */
    pageSize: number;
    /** 直播 ID（必填，用于成员管理） */
    liveId: string;
}
/** useRiskControlState() 返回值（与 API 文档保持字段一致，Vue 值以 Ref 承载响应式状态） */
export interface UseRiskControlStateReturn {
    /** 审核能力是否可用（通过请求审核列表探测） */
    textModerationAvailable: Ref<boolean>;
    /** 审核模式：cloud | custom */
    moderationMode: Ref<ModerationMode>;
    /** 全员审核开关状态（custom 模式） */
    customModerationToggleEnabled: Ref<boolean>;
    /** 设置全员审核开关（custom 模式） */
    updateCustomModerationToggleEnabled(enabled: boolean): Promise<boolean>;
    /** 文本审核记录列表 */
    textModerationList: Ref<TextModerationItem[]>;
    /** 文本审核记录总数 */
    textModerationTotal: Ref<number>;
    /** 当前页码 */
    textModerationPageNum: Ref<number>;
    /** 审核列表加载状态 */
    textModerationLoading: Ref<boolean>;
    /** 获取文本审核记录列表 */
    fetchTextModerationList(params?: GetModerationListParams): Promise<PaginatedModerationList>;
    /** 批量放行文本审核记录 */
    approveTextModerationItems(params: ApproveTextModerationItemsParams): Promise<void>;
    /** 加入纠错白名单 */
    bypassCorrectionKeyword(params: {
        content: string;
        liveId?: string;
    }): Promise<void>;
    /** 禁言成员（自动使用 options 中的 liveId） */
    muteMember(params: MuteMemberParams): Promise<void>;
    /** 取消禁言（自动使用 options 中的 liveId） */
    unmuteMember(params: MemberAccountsParam): Promise<void>;
    /** 封禁成员（自动使用 options 中的 liveId） */
    banMember(params: BanMemberParams): Promise<void>;
    /** 取消封禁（自动使用 options 中的 liveId） */
    unbanMember(params: MemberAccountsParam): Promise<void>;
    /** 发送违规警告（自动使用 options 中的 liveId） */
    sendViolationWarning(): Promise<any>;
    /** 发送管理员文本消息（自动使用 options 中的 liveId） */
    sendAdminMessage(content: string): Promise<any>;
    /** 删除审核项（cloud 模式写入 IndexedDB，custom 模式调用服务器 DELETE 接口） */
    deleteModerationItems(ids: string[]): Promise<void>;
    /** 禁言列表 */
    mutedList: Ref<MutedMember[]>;
    /** 封禁列表 */
    bannedList: Ref<BannedMember[]>;
    /** 获取禁言列表 */
    fetchMutedList(): Promise<MutedMember[]>;
    /** 获取封禁列表 */
    fetchBannedList(): Promise<BannedMember[]>;
}
export declare function useRiskControlState(options: UseRiskControlStateOptions): UseRiskControlStateReturn;
