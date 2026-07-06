/**
 * 操作按钮/菜单项的类型定义
 */
/**
 * 基础操作接口
 */
export interface BaseAction {
    /** 操作标签 */
    label: string;
    /** 点击回调 */
    onClick: () => void | Promise<void>;
    /** 是否危险操作（红色高亮） */
    danger?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 图标（可选） */
    icon?: string;
    /** 自定义类名 */
    className?: string;
}
/**
 * 审核操作类型
 */
export type ModerationActionType = 'approve' | 'delete' | 'release' | 'correction';
/**
 * 审核操作接口
 */
export interface ModerationAction extends BaseAction {
    /** 操作类型 */
    type?: ModerationActionType;
    /** 关联的审核项 ID */
    itemId?: string;
}
/**
 * 成员操作类型
 */
export type MemberActionType = 'unmute' | 'unban' | 'mute' | 'ban';
/**
 * 成员操作接口
 */
export interface MemberAction extends BaseAction {
    /** 操作类型 */
    type?: MemberActionType;
    /** 关联的用户 ID */
    userId?: string;
}
/**
 * 通用操作集合
 */
export type Action = BaseAction | ModerationAction | MemberAction;
