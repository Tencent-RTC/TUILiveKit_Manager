/**
 * 表格列布局基类（跨框架共享）
 *
 * 扩展自 FixedHeaderTable 的 LayoutColumn，增加 className 和 i18nKey 字段。
 * 所有表格列布局类型（GiftColumnLayout、ModerationColumnLayout、
 * LiveListColumnMeta 等）均继承自此接口。
 */
import type { LayoutColumn } from '../utils/fixed-header-table-layout';
export interface TableColumnLayout extends LayoutColumn {
    /** 单行省略显示，通常和 maxWidth 配合使用；未设置时默认启用 word-break 折行 */
    ellipsis?: boolean;
    /** 对应 i18n key，用于框架层生成列标题文本 */
    i18nKey?: string;
}
