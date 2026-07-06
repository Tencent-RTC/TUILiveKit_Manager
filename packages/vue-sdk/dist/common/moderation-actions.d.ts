/**
 * 审核模块公共操作
 *
 * 框架无关的审核业务逻辑，包括：
 * - 数据加载
 * - 白名单操作
 * - 删除操作
 * - 分页计算
 */
import { type TextModerationItem } from './index';
export declare const MODERATION_PAGE_SIZE: 20;
export declare const MODERATION_DEFAULT_MINUTES = 10;
/**
 * 计算审核列表查询的起始时间（毫秒时间戳）
 *
 * React/Vue 两端共享，避免 startTime 格式不一致（秒 vs 毫秒）。
 *
 * @param createdAtSec 直播创建时间（秒级时间戳），未传入则回退最近 1 小时
 * @returns 审核列表 startTime（毫秒时间戳），上限夹持在 30 天内
 */
export declare function computeModerationStartTime(createdAtSec?: number): number;
/**
 * 按 id 去重，保留首次出现的记录
 * React/Vue 两端共享，确保一致性
 */
export declare function dedupeById<T extends {
    id?: string;
}>(items: T[]): T[];
/**
 * 确保字符串数组元素唯一
 */
export declare function uniqueIds(ids: string[]): string[];
export interface ModerationListParams {
    /** 直播 ID */
    liveId: string;
    /** 页码（从 1 开始） */
    pageNum: number;
    /** 每页大小 */
    pageSize?: number;
    /** 查询最近 N 分钟 */
    minutes?: number;
    /** 是否只查询违规内容 */
    violationOnly?: boolean;
}
export interface ModerationListResult {
    /** 审核列表 */
    list: TextModerationItem[];
    /** 总数（已过滤本地删除） */
    total: number;
    /** 当前页码 */
    currentPage: number;
}
export interface ApproveTextModerationItemsParams {
    /** 审核项 ID 列表 */
    ids: string[];
    /** 审核项详情列表（userId 用于以被拦截用户身份重发原文） */
    items: Array<{
        id: string;
        content: string;
        userId?: string;
    }>;
    /** 直播 ID */
    liveId?: string;
}
export interface BypassCorrectionKeywordParams {
    /** 审核内容 */
    content: string;
    /** 直播 ID */
    liveId?: string;
}
/**
 * 加载审核列表（已过滤本地删除项）
 * @param params 查询参数
 * @returns 审核列表结果
 */
export declare function loadModerationList(params: ModerationListParams): Promise<ModerationListResult>;
/**
 * 放行审核记录（重发原文）
 */
export declare function approveTextModerationItems(params: ApproveTextModerationItemsParams): Promise<void>;
/**
 * 绕过纠错关键词审核
 */
export declare function bypassCorrectionKeyword(params: BypassCorrectionKeywordParams): Promise<void>;
/**
 * 计算删除后应该停留的页码
 * @param currentPage 当前页码
 * @param currentTotal 当前总数
 * @param removedCount 删除数量
 * @param pageSize 每页大小
 * @returns 目标页码
 */
export declare function calculatePageAfterDelete(currentPage: number, currentTotal: number, removedCount: number, pageSize?: number): number;
/**
 * 计算总页数
 * @param total 总记录数
 * @param pageSize 每页大小
 * @returns 总页数（至少为 1）
 */
export declare function calculateTotalPages(total: number, pageSize?: number): number;
/**
 * 切换单个选择
 * @param selectedIds 当前选中的 ID 列表
 * @param id 要切换的 ID
 * @returns 新的选中列表
 */
export declare function toggleSelectOne(selectedIds: string[], id: string): string[];
/**
 * 切换全选
 * @param selectedIds 当前选中的 ID 列表
 * @param allIds 当前页所有 ID
 * @returns 新的选中列表
 */
export declare function toggleSelectAll(selectedIds: string[], allIds: string[]): string[];
/**
 * 过滤选中的 ID（移除不在列表中的）
 * @param selectedIds 当前选中的 ID 列表
 * @param validIds 有效的 ID 列表
 * @returns 过滤后的选中列表
 */
export declare function filterSelectedIds(selectedIds: string[], validIds: string[]): string[];
/**
 * 检查当前页是否全选
 * @param selectedIds 当前选中的 ID 列表
 * @param allIds 当前页所有 ID
 * @returns 是否全选
 */
export declare function isAllSelected(selectedIds: string[], allIds: string[]): boolean;
/**
 * 格式化审核时间
 * @param timestamp 时间戳（毫秒）
 * @returns 格式化后的时间字符串 (MM-DD HH:mm:ss)
 */
export declare function formatModerationTime(timestamp: number): string;
