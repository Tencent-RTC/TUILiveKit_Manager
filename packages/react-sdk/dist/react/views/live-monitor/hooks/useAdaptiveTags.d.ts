import type { AdaptiveTagResult } from '../../../../common/utils/adaptive-tags';
/**
 * 自适应标签 Hook（React 薄包装）
 *
 * 实际计算已下沉到框架无关的 AdaptiveTagRuntime，
 * 本 hook 只负责：
 * 1. 创建 runtime 实例
 * 2. 把 runtime 结果同步到 React state（触发重渲染）
 * 3. 在 useEffect 中管理 ResizeObserver 生命周期
 */
interface UseAdaptiveTagsReturn {
    getAdaptiveResult: (liveId: string) => AdaptiveTagResult;
    initResizeObserver: () => void;
    cleanupResizeObserver: () => void;
    initAdaptiveTags: (list: Array<{
        liveId: string;
        tags?: string[];
    }>) => void;
}
export declare function useAdaptiveTags(getMergedList: () => Array<{
    liveId: string;
    tags?: string[];
}> | undefined, t: (key: string) => string): UseAdaptiveTagsReturn;
export {};
