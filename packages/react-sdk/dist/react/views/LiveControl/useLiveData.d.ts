import React from "react";
import type { MonitorLiveInfo } from '../../../types/live';
interface UseLiveDataProps {
    liveId: string | undefined;
    sdkReady: boolean;
    fetchRoomDetail: (liveId: string) => Promise<any>;
    fetchLiveStats: (liveId: string) => Promise<any>;
    fetchUserProfiles: (userIds: string[]) => Promise<void>;
    setLoading: (loading: boolean) => void;
    setLiveInfo: React.Dispatch<React.SetStateAction<MonitorLiveInfo | null>>;
    showMessage: (type: "success" | "error", msg: string) => void;
    t: (key: string, options?: any) => string;
}
interface UseLiveDataReturn {
    fetchLiveInfo: () => Promise<void>;
    fetchStats: () => Promise<void>;
}
/**
 * 直播间数据获取 Hook
 * 拆分自 LiveControl.tsx
 */
export declare function useLiveData({ liveId, sdkReady, fetchRoomDetail, fetchLiveStats, fetchUserProfiles, setLoading, setLiveInfo, showMessage, t, }: UseLiveDataProps): UseLiveDataReturn;
export {};
