export interface UserActionDropdownPosition {
    top: number;
    left: number;
}
export interface BaseUserActionDropdownProps {
    visible: boolean;
    userId: string;
    userName?: string;
    muted?: boolean;
    banned?: boolean;
    showMute?: boolean;
    showBan?: boolean;
    position?: UserActionDropdownPosition;
}
