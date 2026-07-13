export interface ModerationLocalDeletionConfig {
    /** 本地删除记录保留天数，默认 7 天 */
    ttlDays?: number;
}
export interface DeletedModerationItemRecord {
    id: string;
    deletedAt: number;
    expiresAt: number;
}
export declare function configureModerationLocalDeletion(nextConfig: ModerationLocalDeletionConfig): void;
export declare function getModerationLocalDeletionConfig(): Required<ModerationLocalDeletionConfig>;
export declare function cleanupExpiredModerationLocalDeletions(now?: number): Promise<void>;
export declare function recordDeletedModerationIds(ids: string[], options?: ModerationLocalDeletionConfig): Promise<void>;
export declare function getActiveDeletedModerationIds(now?: number): Promise<Set<string>>;
export declare function getActiveDeletedModerationIdCount(): Promise<number>;
export declare function filterDeletedModerationItems<T extends {
    id?: string;
}>(items: T[]): Promise<T[]>;
