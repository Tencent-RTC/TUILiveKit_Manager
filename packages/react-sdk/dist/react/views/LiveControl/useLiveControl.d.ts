interface UseLiveControlOptions {
    liveId: string;
    onLiveEnded?: () => void;
}
interface UseLiveControlResult {
    currentLive: any;
    tuiLoginReady: boolean;
    currentUserId: string;
    handleLeaveLive: (onComplete?: () => void) => void;
}
/**
 * 自定义 Hook: 管理直播间状态和 TUIKit 登录
 *
 * 职责:
 * 1. TUIKit 登录管理
 * 2. 加入/退出直播间
 * 3. 监听直播结束事件
 * 4. 清理资源
 *
 * @param options.liveId - 直播间 ID
 * @param options.onLiveEnded - 直播结束回调
 */
export declare function useLiveControl({ liveId, onLiveEnded, }: UseLiveControlOptions): UseLiveControlResult;
export {};
