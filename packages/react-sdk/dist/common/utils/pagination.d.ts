/**
 * 分页工具函数
 *
 * 提供分页相关的通用功能
 */
/**
 * 生成分页按钮序列
 *
 * 根据当前页和总页数，生成一个智能的页码序列，
 * 当页数过多时会插入 '...' 省略号
 *
 * 规则：
 * - 总页数 ≤ 7 时，显示所有页码
 * - 总页数 > 7 时：
 *   - 始终显示第 1 页和最后一页
 *   - 当前页附近显示 ±2 页
 *   - 中间用 '...' 表示省略
 *
 * @param current - 当前页码（从 1 开始）
 * @param totalPages - 总页数
 * @returns 页码序列数组，可能包含 '...' 省略号
 *
 * @example
 * buildPageNumbers(1, 5) // [1, 2, 3, 4, 5]
 * buildPageNumbers(5, 10) // [1, '...', 3, 4, 5, 6, 7, '...', 10]
 * buildPageNumbers(1, 10) // [1, 2, 3, 4, '...', 10]
 * buildPageNumbers(10, 10) // [1, '...', 7, 8, 9, 10]
 */
export declare function buildPageNumbers(current: number, totalPages: number): Array<number | '...'>;
/**
 * 计算分页偏移量
 *
 * @param page - 当前页码（从 1 开始）
 * @param pageSize - 每页条数
 * @returns 偏移量（从 0 开始）
 *
 * @example
 * getPageOffset(1, 20) // 0
 * getPageOffset(2, 20) // 20
 * getPageOffset(5, 10) // 40
 */
export declare function getPageOffset(page: number, pageSize: number): number;
/**
 * 计算总页数
 *
 * @param total - 总记录数
 * @param pageSize - 每页条数
 * @returns 总页数
 *
 * @example
 * getTotalPages(95, 20) // 5
 * getTotalPages(100, 20) // 5
 * getTotalPages(0, 20) // 0
 */
export declare function getTotalPages(total: number, pageSize: number): number;
