/**
 * 成员列表对话框组件
 */
import React from '../../../react';
import type { MutedMember, BannedMember } from './types';
interface MemberListDialogsProps {
    mutedModalVisible: boolean;
    bannedModalVisible: boolean;
    mutedList: MutedMember[];
    bannedList: BannedMember[];
    memberListLoading: boolean;
    /** 当前正在解除禁言的用户 ID，单用户粒度 loading（与 Vue 端对齐） */
    unmutingUserId?: string | null;
    /** 当前正在解除封禁的用户 ID，单用户粒度 loading（与 Vue 端对齐） */
    unbanningUserId?: string | null;
    getUserAvatar: (userId: string) => string | undefined;
    getUserNameFromCache: (userId: string) => string;
    onMutedModalClose: () => void;
    onBannedModalClose: () => void;
    onUnmuteFromList: (userId: string, userName?: string) => void;
    onUnbanFromList: (userId: string, userName?: string) => void;
    t: (key: string) => string;
}
export default function MemberListDialogs({ mutedModalVisible, bannedModalVisible, mutedList, bannedList, memberListLoading, unmutingUserId, unbanningUserId, getUserAvatar, getUserNameFromCache, onMutedModalClose, onBannedModalClose, onUnmuteFromList, onUnbanFromList, t, }: MemberListDialogsProps): React.JSX.Element;
export {};
