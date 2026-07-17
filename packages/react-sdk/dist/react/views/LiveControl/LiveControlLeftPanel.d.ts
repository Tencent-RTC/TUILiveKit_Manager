import type { MonitorLiveInfo } from '../../../common/types';
interface LiveControlLeftPanelProps {
    liveControlSlots: any;
    liveInfo: MonitorLiveInfo | null;
    liveId: string;
    initialIsLiveEnded?: boolean;
    activeTab: 'chat' | 'audience';
    onActiveTabChange: (tab: 'chat' | 'audience') => void;
    onLiveEnded?: () => void;
    t: (key: string, options?: any) => string;
}
/**
 * 直播控制左侧面板 (容器组件)
 *
 * 职责:
 * 1. 组合 VideoMonitorSection 和 InteractionPanel
 * 2. TUIKit 登录管理
 * 3. 加入/退出直播间
 * 4. 监听直播结束事件
 * 5. 计算派生状态并传递给子组件
 *
 * 注意：成员管理/禁言/封禁/全员禁言逻辑已下沉到 InteractionPanel
 */
export default function LiveControlLeftPanel({ liveControlSlots, liveInfo, liveId, initialIsLiveEnded, activeTab, onActiveTabChange, onLiveEnded, t, }: LiveControlLeftPanelProps): import("../../../react").JSX.Element;
export {};
