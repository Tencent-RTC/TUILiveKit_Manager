/**
 * LiveControl 相关类型定义
 */
import type { TextModerationItem } from '../../../types/interaction';
export type { TextModerationItem };
export interface MutedMember {
    userId: string;
    endTime: number;
}
export interface BannedMember {
    userId: string;
    endTime: number;
}
export interface AudienceDropdownState {
    visible: boolean;
    userId: string;
    userName: string;
    isMuted: boolean;
    x: number;
    y: number;
}
export interface ModerationDropdownState {
    item: TextModerationItem;
    x: number;
    y: number;
}
export interface ConfirmDialogState {
    visible: boolean;
    title: string;
    content: string;
    confirmText?: string;
    onConfirm: () => void;
}
export type TFunction = (key: string, options?: Record<string, unknown>) => string;
