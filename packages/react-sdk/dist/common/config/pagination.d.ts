/**
 * 统一的分页配置常量
 *
 * 集中管理所有模块的分页大小，避免重复定义
 */
export declare const PAGINATION_DEFAULTS: {
    /** 直播列表分页大小 */
    readonly liveList: 20;
    /** 审核列表分页大小 */
    readonly moderation: 20;
    /** 成员列表分页大小 */
    readonly memberList: 50;
    /** 禁言成员列表分页大小 */
    readonly mutedList: 50;
    /** 封禁成员列表分页大小 */
    readonly bannedList: 50;
    /** 礼物列表分页大小 */
    readonly giftList: 30;
    /** 礼物分类列表分页大小 */
    readonly giftCategoryList: 20;
    /** 直播监控列表分页大小 */
    readonly liveMonitor: 8;
};
export type PaginationType = keyof typeof PAGINATION_DEFAULTS;
/**
 * 获取指定模块的默认分页大小
 * @param type 分页类型
 * @returns 分页大小
 */
export declare function getPageSize(type: PaginationType): number;
/**
 * 计算总页数
 * @param total 总记录数
 * @param pageSize 每页大小
 * @returns 总页数（至少为 1）
 */
export declare function calculateTotalPages(total: number, pageSize: number): number;
/**
 * 验证并修正页码到有效范围
 * @param page 目标页码
 * @param totalPages 总页数
 * @returns 修正后的页码（1 到 totalPages 之间）
 */
export declare function validatePageNumber(page: number, totalPages: number): number;
/**
 * 计算分页偏移量（用于数据库查询）
 * @param page 当前页码（从 1 开始）
 * @param pageSize 每页大小
 * @returns 偏移量（从 0 开始）
 */
export declare function calculateOffset(page: number, pageSize: number): number;
/**
 * 计算当前页的数据范围
 * @param page 当前页码（从 1 开始）
 * @param pageSize 每页大小
 * @param total 总记录数
 * @returns { start: 开始索引（从 1 开始）, end: 结束索引（包含） }
 */
export declare function calculatePageRange(page: number, pageSize: number, total: number): {
    start: number;
    end: number;
};
