/**
 * 互动相关类型定义
 * 与 API 文档保持一致
 */
/** 腾讯云 IM 审核 API 原始返回项（server 透传，不转换字段名） */
export interface ServerModerationItem {
    /** 内容ID (ContentId) */
    ContentId?: string;
    /** 发送者账号 (From_Account) */
    From_Account?: string;
    /** 消息内容 */
    Content?: string;
    /** 审核标签（首字母大写，如 Porn/Abuse/Normal） */
    Lable?: string;
    Label?: string;
    /** 创建时间 (腾讯云时间格式 YYYY-MM-DD HH:mm:ss.SSS) */
    Time?: string;
    /** 内容类型 */
    ContentType?: string;
    /** 场景 */
    Scene?: string;
    /** 接收方 */
    Receiver?: string;
    /** 审核建议 */
    Suggestion?: string;
    /** 审核结果 */
    Result?: string;
    /** 发送者账号（备选字段） */
    Sender?: string;
}
/** 腾讯云 IM 审核 API 原始响应 */
export interface ServerModerationListResponse {
    Data?: ServerModerationItem[];
    TotalCount?: number;
    RequestId?: string;
}
export type ModerationType = 'Normal' | 'Porn' | 'Political' | 'Advertising' | 'Abuse' | 'Illegal' | 'Violence' | 'Sexy' | 'Spam' | 'Moan' | 'Unknown';
/** 文本审核项（与 API 文档一致） */
export interface TextModerationItem {
    id: string;
    liveId?: string;
    userId: string;
    userName?: string;
    userAvatar?: string;
    content: string;
    type: ModerationType;
    createdAtMs: number;
}
/** 分页审核列表 */
export interface PaginatedModerationList {
    list: TextModerationItem[];
    total: number;
    pageNum: number;
    pageSize: number;
}
/** 获取审核列表参数 */
export interface GetModerationListParams {
    liveId?: string;
    pageNum?: number;
    pageSize?: number;
    startTime?: number;
    endTime?: number;
    minutes?: number;
    contentType?: string;
    /** 底层标签字符串（如 Porn / Polity / Ad），优先于 type */
    label?: string;
    /** 统一 ModerationType；内部会映射到腾讯云 Label */
    type?: ModerationType;
    violationOnly?: boolean;
    suggestion?: string;
}
/** 审核记录引用 */
export interface TextModerationRecordRef {
    id: string;
    content?: string;
    /** 被拦截的发送者 IM 账号；放行时作为 Sender_Account 重新发文 */
    userId?: string;
}
/** 批量放行文本审核记录参数 */
export interface ApproveTextModerationItemsParams {
    ids: string[];
    items?: TextModerationRecordRef[];
    liveId?: string;
}
/** 绕过纠错关键词审核参数 */
export interface BypassCorrectionKeywordParams {
    content: string;
    liveId?: string;
}
