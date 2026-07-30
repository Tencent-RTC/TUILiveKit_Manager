/**
 * UI 状态 Composable
 *
 * 管理 UI 相关的状态
 * - 确认对话框
 * - 下拉菜单位置
 * - 模态框显示状态
 * - 纯前端逻辑，不调用任何 API
 *
 * 架构: View → useUIState（纯前端逻辑，不涉及 API）
 */
/**
 * 确认对话框配置
 */
export interface ConfirmDialogConfig {
    visible: boolean;
    title: string;
    content: string;
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void;
}
/**
 * 下拉菜单位置
 */
export interface DropdownPosition {
    visible: boolean;
    x: number;
    y: number;
}
/**
 * 审核下拉菜单状态
 */
export interface ModerationDropdownState extends DropdownPosition {
    itemId?: string;
    content?: string;
}
/**
 * 观众下拉菜单状态
 */
export interface AudienceDropdownState extends DropdownPosition {
    userId?: string;
    userName?: string;
}
/**
 * UI 状态管理
 */
export declare function useUIState(): {
    confirmDialog: import("vue").Ref<{
        visible: boolean;
        title: string;
        content: string;
        onConfirm?: (() => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    }, ConfirmDialogConfig | {
        visible: boolean;
        title: string;
        content: string;
        onConfirm?: (() => void | Promise<void>) | undefined;
        onCancel?: (() => void) | undefined;
    }>;
    moderationDropdown: {
        itemId?: string | undefined;
        content?: string | undefined;
        visible: boolean;
        x: number;
        y: number;
    };
    audienceDropdown: {
        userId?: string | undefined;
        userName?: string | undefined;
        visible: boolean;
        x: number;
        y: number;
    };
    mutedModalVisible: import("vue").Ref<boolean, boolean>;
    bannedModalVisible: import("vue").Ref<boolean, boolean>;
    successMsg: import("vue").Ref<string, string>;
    errorMsg: import("vue").Ref<string, string>;
    showConfirmDialog: (config: Omit<ConfirmDialogConfig, "visible">) => void;
    hideConfirmDialog: () => void;
    showModerationDropdown: (x: number, y: number, itemId?: string, content?: string) => void;
    hideModerationDropdown: () => void;
    showAudienceDropdown: (x: number, y: number, userId?: string, userName?: string) => void;
    hideAudienceDropdown: () => void;
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
};
