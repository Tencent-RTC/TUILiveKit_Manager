/**
 * FixedHeaderTable 共享布局工具（Vue & React 共用）。
 * 纯函数 + 极少量 DOM 测量逻辑，无任何框架依赖。
 *
 * 设计要点：
 * - 拉伸 / 压缩两个场景共用 `distribute()`，用 `phase` 参数区分。
 * - `allocateFlexibleWidths` 保证：sum(<col>) === containerWidth（拉伸场景），
 *   这样浏览器就没有"差额"可分摊到固定列上。
 */
export declare const FIT_CONTENT_SAFE_PADDING = 4;
export declare const DEFAULT_FIT_CONTENT_MAX_ROWS = 50;
export interface LayoutColumn {
    key: string;
    width?: number | string;
    fitContent?: boolean;
    minWidth?: number;
    maxWidth?: number;
    flexible?: boolean;
}
export type IsFitContentFn<C extends LayoutColumn> = (column: C) => boolean;
export declare function clampWidth(width: number, minWidth?: number, maxWidth?: number): number;
export declare function parsePxLikeWidth(width: number | string | undefined): number | null;
export declare function areWidthsEqual(prev: Record<string, number>, next: Record<string, number>): boolean;
/**
 * 基于内容理想宽度 rawWidths 与容器宽度，计算每列最终展示宽度。
 *
 * 关键不变量：
 * - 非 flexible 列的最终宽度严格等于 rawWidths[key] 或显式 width，绝不因容器变化抖动；
 * - flexible 列通过 distribute() 统一分配，严格遵守 [minWidth, maxWidth] 约束：
 *
 *   拉伸（available >= Σraw）：
 *     distribute() 按 raw 权重比例分配剩余空间，触 maxWidth 的列截断，
 *     多余空间回流给其他 flexible 列。raw 值来自 `measureRawWidths`，
 *     仅受 minWidth 保护（不提前 clamp maxWidth），保证「饥饿列」检测
 *     (raw > max) 正常工作。
 *
 *   压缩（available < Σraw）：
 *     按 raw 权重向下压缩，触底 minWidth 后剩余预算继续在其他 flexible 列分配。
 *
 * 任何场景下都保证 sum(flexibleCol) + sum(fixedCol) === containerWidth，
 * 避免浏览器把差额按比例分摊到固定列上。
 */
export declare function allocateFlexibleWidths<C extends LayoutColumn>(columns: C[], rawWidths: Record<string, number>, containerWidth: number, isFitContent: IsFitContentFn<C>): Record<string, number>;
/**
 * 计算 <table> 的 inline width 样式。
 *
 * 默认 CSS：`width: 100% + table-layout: fixed`。当 sum(<col>) > 容器时，
 * 浏览器会按比例压缩所有 <col>（包括固定 px 列），导致"所有列都在缩"。
 * 解法：当存在 fitContent 列且测量完成后，把 table.width 设为列宽之和，
 * minWidth 设为 100%。这样：
 * - sum(<col>) < 容器：minWidth: 100% 撑满；
 * - sum(<col>) > 容器：保持自然总宽，超出由 .fixed-header-table__body 横向滚动；
 * - 浏览器永不越权按比例压缩固定列。
 */
export declare function computeTableInlineStyle<C extends LayoutColumn>(columns: C[], measuredWidths: Record<string, number>, isFitContent: IsFitContentFn<C>): {
    width: string;
    minWidth: string;
} | null;
/**
 * 批量测量多个单元格的"理想内容宽度"。
 *
 * 性能关键：传统逐个测量会触发 N 次 layout 回流（每次 append + getBoundingClientRect）。
 * 这里把所有 wrapper 装进同一个隔离 host，一次 append → 一次 read → 一次 remove，
 * 在 fitContentMaxRows=50、3 个 fit 列的场景下，可把 ~150 次回流降到 1 次。
 */
export declare function measureCellContentWidthsBatch(cells: HTMLElement[]): number[];
