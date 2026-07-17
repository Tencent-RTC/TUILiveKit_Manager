import type { CSSProperties, ReactNode } from '../../react';
import '../../common/style/fixed-header-table.css';
export interface FixedHeaderTableColumn<T> {
    key: string;
    title?: ReactNode;
    width?: number | string;
    /** 按表头和内容的最大实际宽度自动计算列宽 */
    fitContent?: boolean;
    /** fitContent 列的最小宽度 */
    minWidth?: number;
    /** fitContent 列的最大宽度，避免长文本撑爆表格 */
    maxWidth?: number;
    /**
     * 仅当 fitContent: true 时生效。
     * - false / 缺省：列宽严格等于内容测量值（操作列建议设为此模式）。
     * - true：参与"剩余空间分配"——以内容测量宽度作为权重，
     *   按比例瓜分容器剩余空间（在 [minWidth, maxWidth] 范围内 clamp）。
     */
    flexible?: boolean;
    /** 单行省略显示，通常和 maxWidth 配合使用；未设置时默认启用 word-break 折行 */
    ellipsis?: boolean;
    align?: 'left' | 'center' | 'right';
    render?: (row: T, index: number) => ReactNode;
    headerRender?: () => ReactNode;
}
interface FixedHeaderTableProps<T> {
    columns: FixedHeaderTableColumn<T>[];
    data: T[];
    rowKey: keyof T | ((row: T, index: number) => string | number);
    className?: string;
    tableClassName?: string;
    headerClassName?: string;
    bodyClassName?: string;
    rowClassName?: string | ((row: T, index: number) => string);
    loading?: boolean;
    loadingNode?: ReactNode;
    emptyNode?: ReactNode;
    bodyStyle?: CSSProperties;
    /** 开启后，所有未设置 width 的列都会按内容自动计算宽度 */
    fitContent?: boolean;
    /** 自动计算宽度时最多测量多少行，避免大列表产生性能问题 */
    fitContentMaxRows?: number;
}
declare function FixedHeaderTable<T>({ columns, data, rowKey, className, tableClassName, headerClassName, bodyClassName, rowClassName, loading, loadingNode, emptyNode, bodyStyle, fitContent, fitContentMaxRows, }: FixedHeaderTableProps<T>): import("../../react").JSX.Element;
export default FixedHeaderTable;
