export interface BarrageSenderInfo {
    userId: string;
    userName?: string;
    nameCard?: string;
    avatarUrl?: string;
    [key: string]: unknown;
}
export interface Barrage {
    liveId: string;
    sender: BarrageSenderInfo;
    sequence: number;
    timestampInSecond: number;
    messageType: 0 | 1;
    textContent?: string;
    extensionInfo?: Record<string, string> | null;
    businessId?: string;
    data?: string;
}
export interface MessageListProps {
    liveId?: string;
    anchorUserId?: string;
    /** @deprecated 不再需要，改为通过 userRole（Tag_Profile_IM_Role）判断管理员身份 */
    currentUserId?: string;
    onMuteUser?: (userId: string, userName: string, isMuted: boolean) => void;
    onBanUser?: (userId: string, userName: string, isBanned: boolean) => void;
    mutedList?: Array<{
        userId: string;
        endTime: number;
    }>;
    bannedList?: Array<{
        userId: string;
        endTime: number;
    }>;
}
export interface DropdownPosition {
    top: number;
    left: number;
}
