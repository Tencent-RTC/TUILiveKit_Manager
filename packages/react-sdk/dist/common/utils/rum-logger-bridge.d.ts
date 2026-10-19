/**
 * Logger → RUM 桥接模块
 *
 * 被 Logger.error() 动态导入，将错误信息上报到 Aegis/RUM。
 * 独立文件以避免 Logger 与 rum-reporter 之间的循环依赖。
 */
/**
 * 上报错误到 RUM
 *
 * 设计要点（从「上报结果用于分析」角度）：
 *
 * 1. name='error'：与业务事件名 (moderation/live_crud/...) 分开，
 *    避免错误日志被 Top 30 / 运营质量等页面误统计为「管理操作」。
 *
 * 2. ext1='error:{context}'：加前缀避免与能力事件的 ext1 合并。
 *    分析师在 RUM 调试图中能清楚看到每个模块的错误次数，
 *    且不会与同名的能力接入事件混淆。
 *
 * 3. ext2='fail'：与业务操作的 success/fail 标识保持一致，
 *    便于未来按 ext2 维度统计错误率。错误详情（message + stack）
 *    不放入 RUM（RUM 只做计数统计），通过 Kibana 日志通道查看完整信息。
 *
 * @param context 模块/上下文（如 'moderation' / 'LiveMonitorCore'），写入 ext1（带前缀）
 * @param _message 错误描述（保留参数兼容调用方，详情走 Kibana 不放入 RUM）
 * @param _error   错误对象（保留参数兼容调用方，详情走 Kibana 不放入 RUM）
 */
export declare function reportErrorToRum(context: string, _message: string, _error: unknown): void;
