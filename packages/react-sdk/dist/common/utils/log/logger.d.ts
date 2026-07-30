/**
 * 模块日志实例
 *
 * 移植自 TRTC_Next sdk-core，去掉 TRTC 特有的 userId / remoteUserId /
 * 上下行标记（↑↓）/ type（main/auxiliary）。
 *
 * 保留父子层级，用于模块化日志前缀：
 *   const root = loggerManager.createLogger({ id: 'LiveMonitor' });
 *   const child = root.createChild({ id: 'LiveList' });
 *   child.info('loading');  // 输出: [LiveMonitor-LiveList] loading
 */
import { LOG_LEVEL } from './constants';
export default class Logger {
    private _parentPath?;
    id: string;
    constructor(options: {
        id: string;
    });
    /** 获取完整路径（含父级前缀） */
    private getFullId;
    /**
     * 创建子 Logger，自动继承父级路径
     * @example
     * const parent = loggerManager.createLogger({ id: 'API' });
     * const child = parent.createChild({ id: 'Auth' });
     * // child 的前缀为 [API-Auth]
     */
    createChild(options: {
        id: string;
    }): Logger;
    /** 绑定父 Logger，生成层级路径 */
    bindParent(parent: Logger): void;
    /** 核心日志方法：添加模块前缀后委托给 loggerManager */
    log(level: LOG_LEVEL, log: unknown[]): void;
    info(...args: unknown[]): void;
    debug(...args: unknown[]): void;
    warn(...args: unknown[]): void;
    error(...args: unknown[]): void;
}
