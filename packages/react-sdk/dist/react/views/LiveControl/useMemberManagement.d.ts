import type { MutedMember, BannedMember } from './types';
import { useConfirmAction } from '../../hooks/useConfirmAction';
export interface UseMemberManagementReturn {
    mutedList: MutedMember[];
    bannedList: BannedMember[];
    memberListLoading: boolean;
    /** 当前正在解除禁言的用户 ID，用于在列表中展示单用户粒度 loading 状态 */
    unmutingUserId: string | null;
    /** 当前正在解除封禁的用户 ID，用于在列表中展示单用户粒度 loading 状态 */
    unbanningUserId: string | null;
    fetchMutedList: () => Promise<void>;
    fetchBannedList: () => Promise<void>;
    handleMuteAudience: (userId: string, userName: string, isMuted: boolean) => void;
    handleBanAudience: (userId: string, userName: string, isBanned: boolean) => void;
    handleUnmuteFromList: (userId: string, userName?: string) => void;
    handleUnbanFromList: (userId: string, userName?: string) => void;
    isUserMuted: (userId: string) => boolean;
    muteConfirmDialog: ReturnType<typeof useConfirmAction>['confirmDialog'];
    banConfirmDialog: ReturnType<typeof useConfirmAction>['confirmDialog'];
    muteAction: Pick<ReturnType<typeof useConfirmAction>, 'executeWithConfirm' | 'cancelConfirm' | 'loading'>;
    banAction: Pick<ReturnType<typeof useConfirmAction>, 'executeWithConfirm' | 'cancelConfirm' | 'loading'>;
}
export declare function useMemberManagement(liveId: string | undefined, t: (key: string, options?: any) => string, anchorUserId: string, isLiveEnded?: boolean): UseMemberManagementReturn;
