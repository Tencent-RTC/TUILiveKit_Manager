/**
 * Kibana 日志上报系统
 *
 * 移植自 TRTC_Next sdk-core，提供：
 * - loggerManager：日志队列 + 定时批量上报（5 秒间隔，每次最多 50 条）
 * - Logger：模块化日志实例，支持父子层级前缀
 * - eventLogger：Kibana 事件上报（成功率/失败率统计）
 *
 * 与 Aegis（业务事件上报）共存，职责不同：
 * - Kibana 日志通道：日志文本批量上报 + 成功率/失败率事件
 * - Aegis RUM 平台：业务事件上报（reportEvent / reportTime）
 *
 * 使用示例：
 * ```ts
 * import { loggerManager, eventLogger, LOG_LEVEL } from '../common/utils/log';
 *
 * // 创建模块 Logger
 * const logger = loggerManager.createLogger({ id: 'LiveMonitor' });
 * const childLogger = logger.createChild({ id: 'LiveList' });
 * childLogger.info('loading list');  // [LiveMonitor-LiveList] loading list
 *
 * // 上报 API 调用成功率
 * await eventLogger.reportEvent('live_create', () => createLive(params));
 * ```
 */
export { default as loggerManager } from './logger-manager';
export type { ILog } from './logger-manager';
export { default as Logger } from './logger';
export { default as eventLogger } from './event-logger';
export type { LogEvent } from './event-logger';
export { LOG_LEVEL, LOG_LEVEL_NAME, LOGGER_CMD_TYPE } from './constants';
export type { LOG_LEVEL as LOG_LEVEL_TYPE } from './constants';
import Logger from './logger';
/**
 * 便捷函数：创建模块 Logger
 * @param id 模块标识，如 'LiveMonitor' / 'GiftState'
 */
export declare function createKibanaLogger(id: string): Logger;
