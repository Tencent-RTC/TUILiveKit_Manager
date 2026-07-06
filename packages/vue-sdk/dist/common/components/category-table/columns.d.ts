/**
 * 礼物分类表格列布局（跨框架共享）
 *
 * 仅包含列的结构性配置（key、尺寸、className 等），不包含框架特定的
 * title 文本和 render 函数。React/Vue 各自在此基础上添加自己的渲染逻辑。
 */
import type { GiftColumnLayout } from '../gift-table/columns';
export type { GiftColumnLayout as CategoryColumnLayout };
/**
 * 获取分类表格列布局配置
 */
export declare function getCategoryColumnLayouts(): GiftColumnLayout[];
