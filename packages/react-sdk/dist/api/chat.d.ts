import type { ChatMessage, MuteStatus } from '../types';
export interface ViolationAlertContent {
    /** 具体违规类型 */
    violationType: string;
    /** 违规时间 (ISO 8601 格式) */
    violationTime: string;
    /** 违规消息内容 */
    violationContent: string;
    /** 处理建议 */
    handleSuggestion: string;
}
export interface ViolationAlertMessage {
    /** 协议版本 */
    version: string;
    /** 消息来源 */
    messageSource: string;
    /** 消息类型 */
    messageType: string;
    /** 消息内容 */
    content: ViolationAlertContent;
}
export declare function getMessages(liveId: string, limit?: number): Promise<ChatMessage[]>;
export declare function sendMessage(liveId: string, content: string): Promise<any>;
export declare function sendCustomMessage(liveId: string, businessId: string, data: string, senderAccount?: string): Promise<any>;
export declare function setMuteAll(liveId: string, isMute: boolean): Promise<any>;
export declare function muteUser(liveId: string, userId: string, duration?: number): Promise<any>;
export declare function unmuteUser(liveId: string, userId: string): Promise<any>;
export declare function getMuteStatus(liveId: string): Promise<MuteStatus>;
/**
 * 发送违规警告消息
 *
 * 向指定直播间发送自定义违规警告消息。
 *
 * 根据腾讯云自定义消息文档（https://cloud.tencent.com/document/product/647/124709）：
 * - BusinessId: 用于标识消息类型（客户端根据此字段判断如何处理）
 * - Data: 自定义消息内容（字符串，客户端需要解析）
 *
 * 客户端收到的消息格式（自动拼接后）：
 * {
 *   "MsgBody": [{
 *     "MsgType": "TIMCustomElem",
 *     "MsgContent": {
 *       "Data": "{\"BusinessId\":\"violation_alert\",\"Data\":\"{...}\"}"
 *     }
 *   }]
 * }
 *
 * @param liveId 直播间 ID
 * @param params 违规警告参数
 * @returns Promise<any> TRTC API 响应
 */
export declare function sendViolationWarning(liveId: string, params: {
    violationType: string;
    violationTime?: string;
    violationContent: string;
    handleSuggestion: string;
}): Promise<any>;
/**
 * 快速发送违规警告（使用预设的违规类型）
 *
 * @param liveId 直播间 ID
 * @param violationType 违规类型（Porn/Political/Abuse/Advertising/Illegal 等）
 * @param violationContent 违规内容描述
 * @param t 翻译函数，用于本地化处理建议文本
 */
export declare function sendViolationWarningQuick(liveId: string, violationType: string, violationContent: string, t?: (key: string, options?: Record<string, unknown>) => string): Promise<any>;
