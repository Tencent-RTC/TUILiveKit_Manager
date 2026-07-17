import React from '../../../../react';
import type { AdaptiveTagResult } from '../../../../common';
import type { MonitorLiveInfo } from '../../../../types/live';
import type { UserPortraitProfile } from '../../../../types/live';
interface LiveCardProps {
    item: MonitorLiveInfo & {
        backgroundUrl?: string;
        avatarUrl?: string;
    };
    hoveredCardId: string | null;
    hoveredTagId: string | null;
    isMuted: boolean;
    userProfile?: UserPortraitProfile;
    displayTags: string[];
    adaptiveResult: AdaptiveTagResult;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onClickDetails: () => void;
    onViolationWarning: () => void;
    onCloseLive: () => void;
    onTagHover: (tagId: string | null) => void;
}
/**
 * 直播间卡片组件
 *
 * 播放生命周期：useEffect 中 startPlay，cleanup 中 stopPlay。
 * playVersionRef 防止 StrictMode 双 mount 导致的竞态。
 * pendingStopPlayRef 防止 stop/start 交替竞态。
 */
declare const LiveCard: React.FC<LiveCardProps>;
export default LiveCard;
