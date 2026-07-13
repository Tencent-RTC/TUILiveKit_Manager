/**
 * 礼物表格列布局（跨框架共享）
 *
 * 仅包含列的结构性配置（key、尺寸、className 等），不包含框架特定的
 * title 文本和 render 函数。React/Vue 各自在此基础上添加自己的渲染逻辑。
 */
import type { TableColumnLayout } from '../table-columns';
/**
 * 礼物列布局（平台无关的结构性配置）
 * 与 FixedHeaderTable 中 fitContent/flexible/minWidth/maxWidth 语义完全一致
 */
export interface GiftColumnLayout extends TableColumnLayout {
}
/**
 * 获取礼物表格列布局配置
 *
 * - 所有内容列（name / description / categories 等）使用 fitContent + flexible，
 *   容器收窄时按内容测量宽度等比压缩，长内容触发 word-break 折行
 * - createdAt 固定宽度 180px，确保时间戳对齐
 * - iconUrl / id / level / price / actions 等使用 fitContent，按内容测量宽度适配
 * - 如果业务注册了 giftTableExtraColumns slot，自动插入 customer-extra 列
 */
export declare function getGiftColumnLayouts(): GiftColumnLayout[];
