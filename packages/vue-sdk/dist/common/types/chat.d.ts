/**
 * UI 视图模型类型
 *
 * 注意：这些是 UI 组件内部使用的视图模型，与 SDK 网络层的 ChatMessage / MuteStatus
 * 不完全相同（后者定义在 `types/live`）。
 *
 * UI 组件读取网络层结果后，会把它们转换为这里的视图模型再渲染。
 */
export type UserRole = 'user' | 'admin' | 'anchor';
/** 聊天消息（UI 视图模型） */
export interface UIChatMessage {
    id: string;
    userId: string;
    userName: string;
    userAvatar: string;
    content: string;
    timestamp: number;
    role: UserRole;
}
/** 被禁言用户 */
export interface MutedUser {
    userId: string;
    userName: string;
    muteEndTime: number;
}
/** 禁言状态（UI 视图模型） */
export interface UIMuteStatus {
    isMuteAll: boolean;
    mutedUsers: MutedUser[];
}
/** 禁言请求参数 */
export interface MuteUserParams {
    liveId: string;
    userId: string;
    duration?: number;
}
/** 全员禁言请求参数 */
export interface MuteAllParams {
    liveId: string;
    isMute: boolean;
}
