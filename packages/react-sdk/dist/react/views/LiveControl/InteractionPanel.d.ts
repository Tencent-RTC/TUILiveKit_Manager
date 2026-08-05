interface InteractionPanelProps {
    liveId: string;
    activeTab: 'chat' | 'audience';
    onActiveTabChange: (tab: 'chat' | 'audience') => void;
    disabled: boolean;
    currentUserId: string;
    roomJoined?: boolean;
}
/**
 * 互动面板组件
 *
 * 职责:
 * 1. 自己管理禁言/封禁/全员禁言的 UI 业务逻辑
 * 2. 调用 useMemberManagement 获取核心数据能力
 * 3. 渲染确认弹窗、禁言/封禁列表、观众下拉菜单
 */
export default function InteractionPanel({ liveId, activeTab, onActiveTabChange, disabled, currentUserId, roomJoined, }: InteractionPanelProps): import("react").JSX.Element;
export {};
