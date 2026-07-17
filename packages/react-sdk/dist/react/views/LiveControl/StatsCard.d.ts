/**
 * 数据看板组件
 */
import React from '../../../react';
import type { MonitorLiveInfo } from '../../../common/types';
interface StatsCardProps {
    liveInfo: MonitorLiveInfo | null;
    audienceCount: number;
    liveDuration: number;
    interactionRate: string;
    updateTimeText: string;
    t: (key: string, options?: Record<string, unknown>) => string;
}
export default function StatsCard({ liveInfo, audienceCount, liveDuration, interactionRate, updateTimeText, t, }: StatsCardProps): React.JSX.Element;
export {};
