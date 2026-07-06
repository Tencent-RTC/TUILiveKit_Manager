/**
 * 自适应标签布局计算工具
 *
 * 核心逻辑：根据直播 ID 实际占用宽度，动态决定标签显示个数，保证两者不重叠。
 * - 有标签时最少保留 2 个（如果总数 ≥2）
 * - 无标签时 ID 占满全部宽度
 * - 标签尽可能多显示，但碰到 ID 时减少个数
 *
 * 使用真实 DOM 测量，避免 Canvas 字体差异和伪元素宽度误差。
 */
export interface AdaptiveTagOptions {
    /** 卡片容器宽度（像素） */
    containerWidth: number;
    /**
     * 直播 ID 完整文本
     * @deprecated 请使用 roomIdText（保持向后兼容，liveIdText 仍可正常传入）
     */
    liveIdText?: string;
    /** 直播 ID 完整文本（优先使用） */
    roomIdText?: string;
    /** 标签文本数组（已翻译后） */
    tagTexts: string[];
    /** 左侧直播 ID 的 left 偏移（像素），默认 6 */
    idLeftOffset?: number;
    /** 右侧标签容器的 right 偏移（像素），默认 8 */
    tagsRightOffset?: number;
    /** 标签之间的 gap（像素），默认 6 */
    tagGap?: number;
    /** 标签与 ID 之间的安全间距（像素），默认 12 */
    safeGap?: number;
    /** 最少保留标签数（如果总数 ≥ 此值），默认 2 */
    minVisibleTags?: number;
    /** 最多显示标签数，默认 99（无上限） */
    maxVisibleTags?: number;
}
export interface AdaptiveTagResult {
    /** 实际可显示的标签数 */
    visibleCount: number;
    /** 是否需要显示 "..." 展开按钮 */
    showMore: boolean;
    /** 直播 ID 元素应设置的 max-width（像素，含单位字符串） */
    idMaxWidth: string;
    /** 标签容器应设置的 max-width（像素，含单位字符串） */
    tagsMaxWidth: string;
}
/**
 * 清除宽度测量缓存（窗口 resize 或字体变化时调用）
 */
export declare function clearAdaptiveTagCache(): void;
/**
 * 计算自适应标签布局参数
 *
 * 算法步骤：
 * 1. 用真实 DOM 测量直播 ID 和每个标签的实际宽度
 * 2. 从右向左累加标签宽度，直到碰到 ID 的右边界
 * 3. 如果结果不足 minVisibleTags 但总数 ≥ minVisibleTags，强制保留 minVisibleTags，反向压缩 ID
 */
export declare function computeAdaptiveTags(options: AdaptiveTagOptions): AdaptiveTagResult;
/**
 * 为每个卡片计算自适应标签参数（批量版）
 */
export declare function computeAdaptiveTagsBatch<T>(items: T[], getRoomId: (item: T) => string, getTags: (item: T) => string[], translate: (key: string) => string, containerWidth: number): AdaptiveTagResult[];
