/**
 * 自适应标签运行时（框架无关）
 *
 * 把 React useAdaptiveTags / Vue useAdaptiveTags 中重复的
 * 「计算 + 缓存 + ResizeObserver」下沉为纯类，
 * 两端各自只做「响应式包装」。
 */
import { type AdaptiveTagResult } from './adaptive-tags';
export declare class AdaptiveTagRuntime {
    private cache;
    private resizeObserver;
    private containerSelector;
    private t;
    private onResize;
    constructor(opts: {
        containerSelector: string;
        t: (key: string) => string;
    });
    /** 计算并缓存单个卡片的自适应结果 */
    compute(liveId: string, item: {
        liveId: string;
        tags?: string[];
    }): AdaptiveTagResult;
    /** 获取缓存结果，无缓存时返回保守默认值 */
    getResult(liveId: string): AdaptiveTagResult;
    /** 清除缓存（窗口缩放或字体变化时调用） */
    clearCache(): void;
    /** 启动 ResizeObserver（外部在 onMounted/useEffect 中调用） */
    observe(callback: () => void): void;
    /** 停止监听（外部在 onUnmounted/cleanup 中调用） */
    disconnect(): void;
    /** 为列表批量初始化缓存（每次调用都会清除旧缓存并重新计算） */
    initForList(list: Array<{
        liveId: string;
        tags?: string[];
    }>): void;
    /** 获取当前缓存（只读，用于框架响应式同步） */
    getCache(): ReadonlyMap<string, AdaptiveTagResult>;
    private buildOptions;
    private getContainerWidth;
}
