/**
 * SDK 版本号常量
 *
 * 版本号由 Vite define 在构建时从 package.json 注入，
 * 开发模式下回退到 import.meta.env.SDK_VERSION（Vite 会自动注入），
 * 确保构建产物中的版本号与 package.json 始终保持一致。
 *
 * 独立放在 common 层，避免 auth-actions / rum-reporter 等 common 模块
 * import 顶层 index 造成循环依赖。顶层 index.ts 从此处 re-export。
 */
export declare const SDK_VERSION: string;
