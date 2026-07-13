import { clearAdaptiveTagCache, type AdaptiveTagResult } from '../../../../common';
/**
 * 计算并缓存自适应标签参数（React 薄封装）
 *
 * 实际计算已下沉到 common/utils/adaptive-tags.ts，
 * 本文件仅做：1) 参数转换；2) 缓存 key 管理。
 */
export declare const computeAndCacheAdaptive: (liveId: string, tags: string[], containerSelector: string, t: (key: string) => string) => AdaptiveTagResult | null;
/**
 * 获取默认的自适应结果
 */
export declare const getDefaultAdaptiveResult: () => AdaptiveTagResult;
export { clearAdaptiveTagCache };
export type { AdaptiveTagResult };
