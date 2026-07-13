/**
 * Logger → RUM 桥接模块
 *
 * 被 Logger.error() 动态导入，将错误信息上报到 Aegis/RUM。
 * 独立文件以避免 Logger 与 rum-reporter 之间的循环依赖。
 */
/**
 * 上报错误到 RUM
 * @param context 模块/上下文
 * @param message 错误描述
 * @param error 错误对象
 */
export declare function reportErrorToRum(context: string, message: string, error: unknown): void;
