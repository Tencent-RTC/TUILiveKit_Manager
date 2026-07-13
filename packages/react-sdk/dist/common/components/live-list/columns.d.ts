/**
 * 直播列表表格列布局（跨框架共享）
 *
 * 仅包含列的结构性配置（key、尺寸、className 等），不包含框架特定的
 * title 文本和 render 函数。React/Vue 各自在此基础上添加自己的渲染逻辑。
 *
 * 列宽策略：
 * - 操作列：fitContent（按内容测量后固定 px），不参与剩余空间分配。
 * - liveId / liveName / anchor：fitContent + flexible，
 *   以"内容测量宽度"作为权重瓜分剩余空间，列与列之间保持内容自然比例，
 *   并在 [minWidth, maxWidth] 之间 clamp。
 * - coverUrl / createdAt / customer-extra：固定 width。
 */
import type { TableColumnLayout } from '../table-columns';
/**
 * 直播列表列布局（平台无关的结构性配置）
 * 继承 TableColumnLayout，窄化 key 类型并增加直播特有字段
 */
export interface LiveListColumnMeta extends TableColumnLayout {
    key: 'liveId' | 'liveName' | 'coverUrl' | 'anchor' | 'createdAt' | 'customer-extra' | 'actions';
}
/**
 * 获取直播列表表格列布局配置
 *
 * - liveId / liveName / anchor：fitContent + flexible，
 *   以内容测量宽度瓜分剩余空间，在 [minWidth, maxWidth] 之间 clamp。
 * - coverUrl / createdAt：固定 width。
 * - 如果业务注册了 tableExtraColumns slot，自动插入 customer-extra 列
 * - actions 列固定 fitContent，按内容宽度适配
 */
export declare function getLiveListColumnsMeta(options: {
    hasExtraColumn: boolean;
}): LiveListColumnMeta[];
