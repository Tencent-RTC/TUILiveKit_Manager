/**
 * Safely parse JSON strings
 * @param str The string to be parsed
 * @param defaultValue The default value when the parsing fails
 * @returns Parse the result or default value
 */
export declare const safelyParse: <T = any>(str: string, defaultValue?: T) => T;
export declare const createDebounce: <T extends (...args: any[]) => any>(func: T, delay: number) => ((...args: Parameters<T>) => void);
/**
 * Make the dom element fullscreen
 * @param {dom} element dom element
 * @example
 * setFullscreen(document.documentElement) // The entire page goes full screen
 * setFullscreen(document.getElementById("id")) // An element goes full screen
 */
export declare const setFullScreen: (element: HTMLElement, options?: FullscreenOptions) => void;
/**
 * exitFullscreen
 * @example
 * exitFullscreen();
 */
export declare const exitFullScreen: () => void;
/**
 * 复制文本到剪贴板（兼容 HTTP 环境）
 * navigator.clipboard 仅在 HTTPS/localhost 下可用，HTTP 环境回退到 execCommand
 */
export declare const copyText: (text: string) => Promise<void>;
/**
 * 根据 anchorId 生成 OBS 推流机器人 ID
 */
export declare function getObsRobotId(anchorId: string): string;
export { BASIC_EMOJI, EMOJI_BASE_URL, parseTextWithEmoji, type EmojiSegment } from './emoji';
export { formatNumber, formatTimestamp, formatDuration, formatDurationWithI18n, } from './format';
export { buildPageNumbers, getPageOffset, getTotalPages, } from './pagination';
export { logger, Logger, createLogger, setGlobalLogLevel, getGlobalLogLevel } from './logger';
export type { LogLevel, LoggerConfig } from './logger';
export { createDeduplicatedFn, createDeduplicatedMethod, createReactiveDeduplicatedFn } from './request-deduplicator';
export type { DeduplicatorOptions } from './request-deduplicator';
export { ViolationLabelsPoller } from './violation-labels-poller';
export type { ViolationLabelsPollerOptions } from './violation-labels-poller';
