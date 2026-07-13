/**
 * 聊天状态 Composable
 *
 * 内部使用 ChatStateManager（框架无关）管理状态和 API 调用，
 * 消除与 React 版本的逻辑重复。
 */
import { type Ref } from 'vue';
export interface UseChatStateReturn {
    /** 是否正在发送管理员消息 */
    sending: Ref<boolean>;
    /** 最近的错误信息 */
    error: Ref<Error | null>;
    /** 发送管理员文本消息 */
    sendAdminMessage(liveId: string, content: string): Promise<any>;
}
/**
 * 聊天状态 Composable
 *
 * 提供发送管理员消息的能力，UI 层不再直接调用 API。
 */
export declare function useChatState(): UseChatStateReturn;
