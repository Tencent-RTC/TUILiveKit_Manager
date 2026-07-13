/**
 * ChatStateManager - 框架无关的聊天状态管理器
 *
 * 抽取 React useChatState() 和 Vue useChatState() 中的公共业务逻辑，
 * 消除双端重复代码。
 *
 * 设计：
 * - 内部用普通变量管理状态（sending、error）
 * - 通过 onStateChange 回调通知框架层更新
 * - API 调用委托给 ../../api/chat
 *
 * 接入方式：
 * - React: 在 useChatState() 中创建实例，通过 onStateChange 同步到 useState
 * - Vue:    在 useChatState() 中创建实例，通过 onStateChange 同步到 ref
 */
import { type Subject } from 'fastrx';
export interface ChatStateManagerOptions {
    /**
     * 状态变化回调（兼容旧接口，推荐使用 observeState() 获取 fastrx Subject）
     * 当 sending / error 任一变化时触发
     */
    onStateChange?: (state: ChatStateSnapshot) => void;
}
export interface ChatStateSnapshot {
    /** 是否正在发送管理员消息 */
    sending: boolean;
    /** 最近的错误信息 */
    error: Error | null;
}
export declare class ChatStateManager {
    private sending;
    private error;
    /** 调用方活跃计数器，>0 表示至少有一个 UI 实例在使用 */
    private activeCount;
    /** 状态流（每次状态变化时发射） */
    private state$;
    /** 销毁信号（取消所有订阅） */
    private destroy$;
    private onStateChange?;
    constructor(options?: ChatStateManagerOptions);
    /**
     * 获取响应式状态流（推荐方式）
     * 搭配 pipe(state$, takeUntil(destroy$), subscribe(...)) 使用
     */
    observeState(): {
        state$: Subject<ChatStateSnapshot>;
        destroy$: Subject<void>;
    };
    /** 获取当前状态快照 */
    getSnapshot(): ChatStateSnapshot;
    /** 通知框架层状态已变更 */
    private notify;
    /** 增加活跃计数（UI 挂载时调用） */
    addActive(): void;
    /** 减少活跃计数（UI 卸载时调用） */
    removeActive(): void;
    /** 当前是否有活跃的 UI 实例 */
    get isActive(): boolean;
    /**
     * 发送管理员文本消息
     * 通过 IM send_group_msg API 发送，与放行/重发使用一致的协议
     */
    sendAdminMessage(liveId: string, content: string): Promise<any>;
    /** 销毁管理器，清理所有状态 */
    destroy(): void;
}
