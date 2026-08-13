/**
 * 登录页公共逻辑（React/Vue 共用）
 *
 * 设计目标：把"产品名（页顶品牌位）"集中到一个稳定的解析函数，
 * 避免 UI 层直接依赖 `__DEMO_MODE__` 编译变量（dev 模式下编译变量
 * 替换行为不稳定，导致 demo notice 与 product name 显示行为不一致）。
 *
 * 解析优先级：
 *   1. 用户在 BrandConfig 中自定义的 appName（非 SDK 默认值时即视为自定义）
 *   2. I18N.DEMO_PRODUCT_NAME 翻译（中文："腾讯直播管理系统"，英文："Tencent Live Manager"）
 *
 * i18n 翻译由调用方传入 t 函数或当前语言决定；UI 层只负责渲染。
 */
import type { SupportedLanguage } from './layout';
export type LoginTranslator = (key: string) => string;
/**
 * 解析登录页顶部展示的产品名称。
 *
 * 优先级：
 *   1. BrandConfig.appName 已被消费者覆盖（非 SDK 默认值），取其翻译/字面量值
 *   2. I18N.DEMO_PRODUCT_NAME 兜底（demo 场景默认文案）
 *
 * @param language 当前 UI 语言
 * @param t 可选的翻译函数；未提供则使用 SDK 内置 i18n 资源
 * @returns 登录页产品名（已翻译或字面量）
 */
export declare function resolveLoginBrandName(language: SupportedLanguage, t?: LoginTranslator): string;
export type { SupportedLanguage };
