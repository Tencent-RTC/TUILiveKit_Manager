import type { TableColumnLayout } from '../table-columns';
/**
 * 风控审核表格列布局（跨框架共享）
 *
 * 仅包含列的结构性配置（key、尺寸、className 等），不包含框架特定的
 * title 文本和 render 函数。React/Vue 各自在此基础上添加自己的渲染逻辑。
 */
/** 审核列布局（平台无关的结构性配置） */
export interface ModerationColumnLayout extends TableColumnLayout {
}
/**
 * 获取审核表格列布局配置
 * @param options.hideTypeColumn - custom 模式下隐藏「识别类型」列
 */
export declare function getModerationColumnLayouts(options?: {
    hideTypeColumn?: boolean;
}): ModerationColumnLayout[];
