/**
 * 服务端运行时配置
 *
 * 存储从服务端 /api/check_config 拉取到的运行时配置值，
 * 客户只需修改服务端 .env 文件即可生效。
 */
/** 运行时配置 */
export interface ServerRuntimeConfig {
    /** 违规标签轮询刷新间隔（秒），默认 600 */
    liveViolationRefreshInterval: number;
}
/** 设置运行时配置（由 checkServerConfig 在 app 启动时调用） */
export declare function setServerRuntimeConfig(partial: Partial<ServerRuntimeConfig>): void;
/** 获取运行时配置 */
export declare function getServerRuntimeConfig(): Readonly<ServerRuntimeConfig>;
/** 获取违规标签轮询刷新间隔（毫秒） */
export declare function getLiveViolationRefreshIntervalMs(): number;
