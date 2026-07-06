/**
 * UserProfileManager - 用户资料管理
 *
 * 抽取 LiveMonitorCore 中的用户资料获取和缓存逻辑，
 * 消除与其他职责的耦合。
 *
 * 职责：
 * - 批量获取用户资料
 * - 缓存用户资料（避免重复请求）
 * - 管理加载状态
 */
export interface UserProfileManagerOptions {
    /** 状态变化回调 */
    onStateChange?: (state: {
        userProfiles?: Record<string, any>;
        loading?: Partial<Record<string, boolean>>;
    }) => void;
    /** 获取当前激活状态 */
    getActive?: () => boolean;
}
export declare class UserProfileManager {
    private userProfiles;
    private loading;
    private onStateChange?;
    private getActive?;
    constructor(opts?: UserProfileManagerOptions);
    /** 获取缓存的用户资料 */
    getProfiles(): Record<string, any>;
    /** 获取指定用户的资料 */
    getProfile(userId: string): any | undefined;
    /** 批量获取用户资料（带缓存） */
    fetchProfiles(userIds: string[]): Promise<Map<string, any>>;
    /** 获取需要的用户ID（过滤已缓存的） */
    getMissingUserIds(userIds: string[]): string[];
    /** 重置状态 */
    reset(): void;
    /** 销毁 */
    destroy(): void;
    private setLoading;
    private notifyStateChange;
}
