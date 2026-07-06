export declare const getStatsRequiredWidth: (itemWidths: number[], columns: number, gap: number) => number;
export declare const measureStatsItemWidths: (bar: HTMLElement) => number[];
export declare const updateStatsColumns: (bar: HTMLElement) => void;
export declare const formatNumber: (num: number) => string;
export declare const formatDuration: (seconds: number, t: (key: string) => string) => string;
export declare const formatModerationTime: (timestamp: number) => string;
/**
 * 获取用户头像
 * @param userId 用户ID
 * @param audienceList 观众列表
 * @param userProfiles 用户资料缓存
 * @returns 用户头像URL或undefined
 */
export declare const getUserAvatar: (userId: string, audienceList: Array<{
    userId: string;
    avatarUrl?: string;
}>, userProfiles: Record<string, {
    avatarUrl?: string;
    nick?: string;
}>) => string | undefined;
/**
 * 从缓存获取用户名
 * @param userId 用户ID
 * @param audienceList 观众列表
 * @param userProfiles 用户资料缓存
 * @returns 用户名或用户ID
 */
export declare const getUserNameFromCache: (userId: string, audienceList: Array<{
    userId: string;
    userName?: string;
}>, userProfiles: Record<string, {
    nick?: string;
}>) => string;
