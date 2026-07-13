import type { ModerationType, PaginatedModerationList, GetModerationListParams, ApproveTextModerationItemsParams, BypassCorrectionKeywordParams } from '../types/interaction';
export declare function getInteractionModerationList(params?: GetModerationListParams): Promise<PaginatedModerationList>;
export declare function approveTextModerationItems(params: ApproveTextModerationItemsParams): Promise<void>;
export declare function bypassCorrectionKeyword(params: BypassCorrectionKeywordParams): Promise<void>;
/**
 * 批量查询直播间审核标签（使用 QueryModerationRecord）
 *
 * 对接服务端 POST /moderation/room-labels 接口（内部调用 TRTC QueryModerationRecord）。
 * 支持批量查询，单个直播可传入 [liveId] 调用。
 *
 * @param liveIds - 直播间ID数组
 * @param _minutes - 保留参数，暂未使用
 * @param startTime - 可选，开始时间（格式：YYYY-MM-DD HH:mm:ss）
 * @param endTime - 可选，结束时间（格式：YYYY-MM-DD HH:mm:ss）
 * @param createdAtMap - 可选，房间创建时间 Map（liveId → 秒级时间戳），用于过滤房间创建前的记录
 * @returns Map<liveId, ModerationType[]>
 */
export declare function getLiveViolationLabelsBatch(liveIds: string[], _minutes?: number, startTime?: string, endTime?: string, createdAtMap?: Map<string, number>): Promise<Map<string, ModerationType[]>>;
export type ModerationMode = 'cloud' | 'custom';
/**
 * 获取当前审核模式
 * 首次调用会请求服务端，后续使用缓存
 */
export declare function getModerationMode(): Promise<ModerationMode>;
/**
 * 设置审核模式缓存（用于初始化时手动设置）
 */
export declare function setCachedModerationMode(mode: ModerationMode): void;
export interface CustomModerationToggleResult {
    ActionStatus: string;
    ErrorCode: number;
    Enabled: boolean;
}
export interface CustomModerationListResult {
    TotalCount: number;
    RequestId: string;
    Data: Array<{
        ContentId: string;
        From_Account: string;
        Content: string;
        Time: string;
    }>;
}
export interface CustomModerationDeleteResult {
    ActionStatus: string;
    ErrorCode: number;
    DeletedCount: number;
    RequestId: string;
}
/**
 * 获取全员审核开关（custom 模式）
 */
export declare function getCustomModerationToggle(): Promise<CustomModerationToggleResult>;
/**
 * 设置全员审核开关（custom 模式）
 */
export declare function updateCustomModerationToggle(enabled: boolean): Promise<CustomModerationToggleResult>;
/**
 * 查询审核消息列表（custom 模式）
 * 代理到用户自有审核服务器
 */
export declare function getCustomModerationList(params: GetModerationListParams): Promise<PaginatedModerationList>;
/**
 * 删除审核记录（custom 模式）
 * 代理到用户自有审核服务器
 */
export declare function deleteCustomModerationRecords(contentIds: string[]): Promise<CustomModerationDeleteResult>;
/**
 * 放行审核记录（custom 模式）
 *
 * 1. 以原始用户身份重发消息到直播间（ForbidCallbackControl 禁止回调二次拦截）
 * 2. 重发成功后删除用户服务器上的记录
 * 3. 每条独立处理，成功一条删一条，失败保留
 */
export declare function approveCustomModerationItems(params: ApproveTextModerationItemsParams): Promise<{
    success: number;
    failed: number;
}>;
