import type { MonitorLiveInfo } from '../../../types/live';
interface UseAllMuteProps {
    liveInfo: MonitorLiveInfo | null;
    updateRoom: (liveId: string, params: {
        isMessageDisabled: boolean;
    }) => Promise<any>;
    setLiveInfo: (updater: (prev: MonitorLiveInfo | null) => MonitorLiveInfo | null) => void;
    showMessage: (type: "success" | "error", msg: string) => void;
}
interface UseAllMuteReturn {
    isAllMuted: boolean;
    allMuteLoading: boolean;
    applyAllMute: (nextValue: boolean) => Promise<void>;
}
/**
 * 全局禁言 Hook
 * 拆分自 LiveControl.tsx
 */
export declare function useAllMute({ liveInfo, updateRoom, setLiveInfo, showMessage, }: UseAllMuteProps): UseAllMuteReturn;
export {};
