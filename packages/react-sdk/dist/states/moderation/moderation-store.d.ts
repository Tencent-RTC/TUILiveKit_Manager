/**
 * 内容审核可用性状态。
 *
 * 审核列表、放行、纠错、成员风控等业务能力统一通过
 * React/Vue 的 useRiskControlState 直接调用 API；这里仅保留应用入口
 * 初始化审核可用性的轻量状态，供布局和页面判断功能开关。
 */
import { LiveManagerError } from '../../common/error';
export interface ModerationAvailabilityState {
    moderationAvailable: boolean;
    moderationRemainUsage: number;
    loading: boolean;
    error: LiveManagerError | null;
    lastUpdatedAt: number;
}
export declare function getModerationAvailabilitySnapshot(): ModerationAvailabilityState;
export declare function subscribeModerationAvailability(listener: (state: ModerationAvailabilityState, previousState: ModerationAvailabilityState) => void): () => void;
export declare function resetModerationAvailability(): void;
/** 是否已接入机器审核 */
export declare function isModerationAvailable(): boolean;
/** 设置审核可用性（正式环境 API 返回后调用） */
export declare function setModerationAvailable(available: boolean, remainUsage?: number): void;
/** 初始化审核可用性（应在 MainLayout 或 App 入口调用一次） */
export declare function initModerationAvailability(): Promise<boolean>;
