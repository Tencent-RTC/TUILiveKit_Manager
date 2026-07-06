import type { TextModerationItem, GetModerationListParams, PaginatedModerationList } from '../types/interaction';
import type { MuteMemberParams, BanMemberParams, MemberAccountsParam } from '../types/live';
import type { MutedMember, BannedMember } from '../common/member-management-actions';
import { type ModerationMode } from '../api/interaction';
/** useRiskControlState 选项 */
export interface UseRiskControlStateOptions {
    /** 每页数量 */
    pageSize: number;
    /** 直播 ID（必填，用于成员管理） */
    liveId: string;
}
/** useRiskControlState() 返回值（与 API 文档一致） */
export interface UseRiskControlStateReturn {
    /** 审核能力是否可用（通过请求审核列表探测） */
    textModerationAvailable: boolean;
    /** 审核模式：cloud | custom */
    moderationMode: ModerationMode;
    /** 全员审核开关状态（custom 模式） */
    customModerationToggleEnabled: boolean;
    /** 设置全员审核开关（custom 模式） */
    updateCustomModerationToggleEnabled(enabled: boolean): Promise<boolean>;
    /** 文本审核记录列表 */
    textModerationList: TextModerationItem[];
    /** 当前页码 */
    textModerationPageNum: number;
    /** 文本审核记录总数 */
    textModerationTotal: number;
    /** 审核列表加载状态 */
    textModerationLoading: boolean;
    /** 获取文本审核记录列表 */
    fetchTextModerationList(params?: GetModerationListParams): Promise<PaginatedModerationList>;
    /** 批量放行文本审核记录 */
    approveTextModerationItems(params: {
        ids: string[];
        items?: Array<{
            id: string;
            content: string;
            userId?: string;
        }>;
        liveId?: string;
    }): Promise<void>;
    /** 绕过纠错关键词审核（仅 cloud 模式） */
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
    /** 删除审核项（cloud 模式写入 IndexedDB，custom 模式调用服务器 DELETE 接口） */
    deleteModerationItems(ids: string[]): Promise<void>;
    /** 禁言列表（与 fetchTextModerationList 命名对齐） */
    mutedList: MutedMember[];
    /** 封禁列表（与 fetchTextModerationList 命名对齐） */
    bannedList: BannedMember[];
    /** 成员操作加载状态 */
    memberLoading: boolean;
    /** 成员操作错误 */
    memberError: Error | null;
    /** 获取禁言列表（与 fetchTextModerationList 命名对齐） */
    fetchMutedList(): Promise<MutedMember[]>;
    /** 获取封禁列表（与 fetchTextModerationList 命名对齐） */
    fetchBannedList(): Promise<BannedMember[]>;
}
/**
 * 风控管理页 Hook
 * 与 API 文档保持一致
 *
 * @param options 配置选项（必填，包含 liveId）
 */
export declare function useRiskControlState(options: UseRiskControlStateOptions): UseRiskControlStateReturn;
