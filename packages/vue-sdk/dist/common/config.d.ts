export type LiveManagerLanguage = 'zh-CN' | 'en-US';
import type { ServerConfig, PlayerFactory } from '../types/live';
export { ServerConfig, PlayerFactory };
export interface LiveManagerConfig extends ServerConfig {
    authToken?: string;
    getAuthToken?: () => string | Promise<string>;
    language?: LiveManagerLanguage;
    debug?: boolean;
    onUnauthorized?: () => void;
}
export declare function defineLiveManagerConfig(config: LiveManagerConfig): LiveManagerConfig;
export declare function configureLiveManager(config: LiveManagerConfig): LiveManagerConfig;
export declare function getLiveManagerConfig(): LiveManagerConfig | null;
export declare function resetLiveManagerConfig(): void;
