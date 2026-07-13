import React from "react";
interface ViolationWarningDialogProps {
    visible: boolean;
    liveId?: string;
    liveName?: string;
    onVisibleChange: (visible: boolean) => void;
    onConfirm?: (payload: {
        liveId: string;
        liveName: string;
    }) => void;
    onCancel?: () => void;
}
/**
 * 违规警告确认弹窗（共用组件）
 * 用于 LiveMonitor 卡片操作 / LiveControl 顶栏按钮
 */
declare const ViolationWarningDialog: React.FC<ViolationWarningDialogProps>;
export default ViolationWarningDialog;
