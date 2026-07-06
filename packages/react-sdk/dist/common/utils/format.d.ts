/**
 * 通用格式化工具函数
 *
 * 提供数字、文本等通用格式化能力
 * 可被多个组件/页面复用
 */
/**
 * 格式化数字显示
 * - 大于等于 10000 时显示为 "X.Xw" (万)
 * - 小于 10000 时显示带千位分隔符的数字
 *
 * @param num - 要格式化的数字
 * @returns 格式化后的字符串
 *
 * @example
 * formatNumber(1234) // "1,234"
 * formatNumber(15000) // "1.5w"
 * formatNumber(123456) // "12.3w"
 */
export declare function formatNumber(num: number): string;
/**
 * 格式化时间戳为 MM-DD HH:mm:ss 格式
 *
 * @param timestamp - Unix 时间戳（毫秒）
 * @returns 格式化后的时间字符串
 *
 * @example
 * formatTimestamp(1672531200000) // "01-01 00:00:00"
 */
export declare function formatTimestamp(timestamp: number): string;
/**
 * 格式化时长（秒）为可读字符串
 *
 * **注意**: 此函数不包含国际化，返回纯数字时长格式
 * 如需国际化的时长显示，使用 `formatDurationWithI18n`
 *
 * @param seconds - 时长（秒）
 * @returns 格式化后的时长字符串
 *
 * @example
 * formatDuration(3661) // "1:01:01"
 * formatDuration(65) // "0:01:05"
 * formatDuration(86400) // "1 day 0:00:00"
 */
export declare function formatDuration(seconds: number): string;
/**
 * 格式化时长（秒）为可读字符串（支持国际化）
 *
 * @param seconds - 时长（秒）
 * @param t - 国际化翻译函数
 * @param dayKey - "天" 的国际化 key，默认 "days"
 * @returns 格式化后的时长字符串
 *
 * @example
 * formatDurationWithI18n(86400, t) // "1天 00:00:00" (中文)
 * formatDurationWithI18n(86400, t) // "1 day 00:00:00" (英文)
 */
export declare function formatDurationWithI18n(seconds: number, t: (key: string) => string, dayKey?: string): string;
