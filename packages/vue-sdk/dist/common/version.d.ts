/**
 * SDK 版本号常量
 *
 * 独立放在 common 层，避免 auth-actions / rum-reporter 等 common 模块
 * import 顶层 index 造成循环依赖。顶层 index.ts 从此处 re-export。
 */
export declare const SDK_VERSION = "1.0.0";
