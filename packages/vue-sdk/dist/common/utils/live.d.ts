export declare function toNumber(value: unknown, fallback?: number): number;
export declare function toBoolean(value: unknown, fallback?: boolean): boolean;
export declare function parseCustomInfo(value: unknown): Record<string, string>;
export interface UserInfo {
    userId: string;
    userName: string;
    avatarUrl: string;
    customInfo: Record<string, unknown>;
}
