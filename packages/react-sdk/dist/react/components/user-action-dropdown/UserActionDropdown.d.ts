import React from 'react';
import type { BaseUserActionDropdownProps } from '../../../common/components/user-action-dropdown';
export interface UserActionDropdownProps extends BaseUserActionDropdownProps {
    onVisibleChange?: (visible: boolean) => void;
    onMute?: (userId: string, userName: string, isMuted: boolean) => void;
    onBan?: (userId: string, userName: string, isBanned: boolean) => void;
}
declare const UserActionDropdown: React.FC<UserActionDropdownProps>;
export default UserActionDropdown;
