/**
 * 审核列表组件
 */
import React from 'react';
import type { TextModerationItem } from './types';
interface ModerationCardProps {
    /** 审核模式：cloud | custom */
    moderationMode: 'cloud' | 'custom';
    moderationList: TextModerationItem[];
    moderationLoading: boolean;
    moderationPage: number;
    moderationTotal: number;
    moderationTotalPages: number;
    moderationSelectedIds: string[];
    isAllOnPageSelected: boolean;
    /** custom 模式：全员审核开关 */
    customModerationToggleEnabled: boolean;
    /** custom 模式：切换全员审核开关 */
    onCustomToggleChange: (enabled: boolean) => void;
    updateTimeText: string;
    disabled?: boolean;
    onRefresh: () => void;
    onPageChange: (page: number) => void;
    onBulkApprove: () => void;
    onBulkDelete: () => void;
    onToggleSelectOne: (id: string) => void;
    onToggleSelectAll: () => void;
    onRelease: (item: TextModerationItem) => void;
    onDelete: (item: TextModerationItem) => void;
    onOpenDropdown: (e: React.MouseEvent, item: TextModerationItem) => void;
    t: (key: string, options?: Record<string, unknown>) => string;
}
export default function ModerationCard({ moderationMode, moderationList, moderationLoading, moderationPage, moderationTotal, moderationTotalPages, moderationSelectedIds, isAllOnPageSelected, customModerationToggleEnabled, onCustomToggleChange, updateTimeText, disabled, onRefresh, onPageChange, onBulkApprove, onBulkDelete, onToggleSelectOne, onToggleSelectAll, onRelease, onDelete, onOpenDropdown, t, }: ModerationCardProps): React.JSX.Element;
export {};
