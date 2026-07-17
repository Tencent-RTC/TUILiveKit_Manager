import { type Ref } from '../../../../vue';
import type { AdaptiveTagResult } from '../../../../common';
/**
 * 自适应标签 composable（Vue 薄包装）
 *
 * 实际计算已下沉到框架无关的 AdaptiveTagRuntime，
 * 本 composable 只负责：
 * 1. 创建 runtime 实例
 * 2. 把 runtime 结果同步到 vue ref（触发重渲染）
 * 3. 在 onMounted / onUnmounted 中管理 ResizeObserver 生命周期
 */
export interface AdaptiveTagComposable {
    adaptiveTagMap: Ref<Map<string, AdaptiveTagResult>>;
    getAdaptiveResult: (liveId: string) => AdaptiveTagResult;
    getVisibleTags: (tags: string[], liveId: string) => string[];
    initResizeObserver: () => void;
    cleanupResizeObserver: () => void;
    initAdaptiveTags: (list: Array<Record<string, unknown>>) => void;
}
export declare function useAdaptiveTags(getMergedList: () => Array<Record<string, unknown>> | undefined, t: (key: string) => string): AdaptiveTagComposable;
