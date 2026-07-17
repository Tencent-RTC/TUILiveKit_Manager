import type { MonitorLiveInfo } from '../../../common/types';
interface VideoMonitorSectionProps {
    liveControlSlots: any;
    liveInfo: MonitorLiveInfo | null;
    currentLive: any;
    liveAnchorAvatar: string;
    liveAnchorName: string;
    isVoiceLive: boolean;
    isMockMode: boolean;
    liveEndedOverlayVisible: boolean;
    t: (key: string, options?: any) => string;
}
/**
 * 视频监控区域组件
 * 负责显示直播视频/封面、主播信息、直播状态
 */
export default function VideoMonitorSection({ liveControlSlots, liveInfo, currentLive, liveAnchorAvatar, liveAnchorName, isVoiceLive, isMockMode, liveEndedOverlayVisible, t, }: VideoMonitorSectionProps): import("../../../react").JSX.Element;
export {};
