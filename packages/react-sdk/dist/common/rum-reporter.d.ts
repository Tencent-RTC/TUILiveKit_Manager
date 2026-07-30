/**
 * 上报自定义事件
 * @param name   事件名（对应 RUM Name 维度）
 * @param ext1   扩展字段 1（操作/action）
 * @param ext2   扩展字段 2（结果 success/fail）
 *
 * ext3 固定为 sdkAppId（不需要在 RUM 控制台配置枚举表即可生效）。
 */
export declare function reportEvent(name: string, ext1?: string, ext2?: string): void;
/**
 * 上报自定义测速
 * @param name 测速名称
 * @param duration 耗时（毫秒）
 *
 * 同时向事件流发送一条同名事件（ext1=name, ext2=ok），
 * 供 tools 后台按 ext1 分组统计"调用次数"。
 */
export declare function reportTime(name: string, duration: number): void;
/** 上报业务操作结果 */
export declare function reportBusinessOp(category: string, action: string, success: boolean, _detail?: string): void;
/** 计时并上报 */
export declare function measureAndReport(name: string, fn: () => Promise<any>): Promise<any>;
/** 设置当前运行平台（React/Vue 入口模块加载时调用） */
export declare function setReportPlatform(platform: 'react' | 'vue'): void;
/** 上报来源类型 */
export type ReportSource = 'demo' | 'release' | 'sdk';
/**
 * 显式设置上报来源。
 * release 项目入口（packages/vue3、packages/react）加载时调用 setReportSource('release')。
 * SDK 接入的客户项目无需调用，默认为 'sdk'。
 * demo 页面通过 URL 自动识别，优先级高于显式设置。
 */
export declare function setReportSource(source: ReportSource): void;
export declare function reportAppInit(version?: string): void;
/** 能力类型 */
export type CapabilityType = 'moderation' | 'av_moderation' | 'text_moderation' | 'moderation_custom' | 'text_moderation_custom';
export declare function reportCapability(capability: CapabilityType): void;
/** 核心功能标识 */
export type FeatureKey = 'live_monitor' | 'live_detail' | 'create_live' | 'gift_manage' | 'risk_control';
export declare function reportFeatureUse(feature: FeatureKey): void;
export declare function reportPageView(path: string): void;
/**
 * 重置会话内去重缓存。当 Aegis 实例因 uin 变化被销毁重建时调用。
 */
export declare function resetReportedCaches(): void;
