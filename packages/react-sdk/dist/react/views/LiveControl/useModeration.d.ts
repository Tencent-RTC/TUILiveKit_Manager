import type { TextModerationItem } from './types';
import { useConfirmAction } from '../../hooks/useConfirmAction';
export interface UseModerationReturn {
    /** 审核模式：cloud | custom */
    moderationMode: 'cloud' | 'custom';
    /** custom 模式：全员审核开关 */
    customModerationToggleEnabled: boolean;
    /** custom 模式：设置全员审核开关 */
    updateCustomModerationToggleEnabled: (enabled: boolean) => Promise<boolean>;
    moderationList: TextModerationItem[];
    moderationLoading: boolean;
    moderationPage: number;
    moderationTotal: number;
    moderationTotalPages: number;
    moderationSelectedIds: string[];
    isAllOnPageSelected: boolean;
    releaseConfirmDialog: ReturnType<typeof useConfirmAction>['confirmDialog'];
    bypassConfirmDialog: ReturnType<typeof useConfirmAction>['confirmDialog'];
    bulkApproveConfirmDialog: ReturnType<typeof useConfirmAction>['confirmDialog'];
    releaseAction: Pick<ReturnType<typeof useConfirmAction>, 'executeWithConfirm' | 'cancelConfirm' | 'loading'>;
    bypassAction: Pick<ReturnType<typeof useConfirmAction>, 'executeWithConfirm' | 'cancelConfirm' | 'loading'>;
    bulkApproveAction: Pick<ReturnType<typeof useConfirmAction>, 'executeWithConfirm' | 'cancelConfirm' | 'loading'>;
    handleRefreshModeration: (silent?: boolean) => Promise<void>;
    goToModerationPage: (page: number) => void;
    toggleSelectOne: (id: string) => void;
    toggleSelectAll: () => void;
    handleRelease: (item: TextModerationItem) => void;
    handleBypassCorrection: (item: TextModerationItem) => void;
    handleDeleteModeration: (item: TextModerationItem) => Promise<void>;
    handleBulkApprove: () => void;
    handleBulkDelete: () => Promise<void>;
}
export declare function useModeration(liveId: string | undefined, t: (key: string, options?: any) => string, isLiveEnded: boolean, createdAt?: number): UseModerationReturn;
