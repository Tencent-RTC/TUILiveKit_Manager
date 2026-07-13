/**
 * 统一日志系统
 *
 * 开发环境: 输出到 console，支持按级别过滤
 * 生产环境: 可关闭 console 输出，通过 RUM / Aegis 上报错误
 *
 * 使用方式:
 *   import { logger, createLogger } from '../common/utils/logger';
 *   const log = createLogger('MyModule');
 *   log.info('init', 'Component loaded');
 *   log.error('init', 'Failed to load', err);
 */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface LoggerConfig {
    /** 模块前缀，输出格式为 [Prefix][Context] message */
    prefix?: string;
    /** 是否启用 console 输出，默认开发环境启用 */
    enableConsole?: boolean;
    /** 是否启用 RUM 错误上报，默认生产环境启用 */
    enableReport?: boolean;
    /** 最低日志级别，低于此级别的日志将被忽略，默认 'debug'（全部输出） */
    minLevel?: LogLevel;
}
/**
 * 设置全局最低日志级别
 * 例如在生产环境可设为 'warn' 以只输出警告和错误
 */
export declare function setGlobalLogLevel(level: LogLevel): void;
/** 获取当前全局日志级别 */
export declare function getGlobalLogLevel(): LogLevel;
declare class Logger {
    private config;
    constructor(config?: LoggerConfig);
    /**
     * 调试日志 - 仅在开发环境可见
     */
    debug(context: string, ...args: unknown[]): void;
    /**
     * 信息日志
     */
    info(context: string, ...args: unknown[]): void;
    /**
     * 警告日志
     */
    warn(context: string, ...args: unknown[]): void;
    /**
     * 错误日志 - 同时触发 RUM 上报（如启用）
     */
    error(context: string, ...args: unknown[]): void;
    /**
     * 统一日志输出
     */
    private log;
    /**
     * 格式化时间戳 HH:MM:SS.mmm
     */
    private formatTimestamp;
    /**
     * 上报错误到 RUM (Aegis)
     * 通过 reportBusinessOp 上报，与 rum-reporter 打通
     */
    private reportToRum;
}
export declare const logger: Logger;
export { Logger };
export declare const createLogger: (prefix: string) => Logger;
