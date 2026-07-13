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
 * Aegis 测速流与事件流是分开存储的，仅靠 aegis.reportTime 写入测速流，
 * tools 的 queryEvents 查的是事件流，因此需要同时上报。
 */
export declare function reportTime(name: string, duration: number): void;
/** 上报业务操作结果 */
export declare function reportBusinessOp(category: string, action: string, success: boolean, _detail?: string): void;
/** 计时并上报 */
export declare function measureAndReport(name: string, fn: () => Promise<any>): Promise<any>;
/** 设置当前运行平台（React/Vue 入口模块加载时调用） */
export declare function setReportPlatform(platform: 'react' | 'vue'): void;
export declare function reportAppInit(version?: string): void;
/** 能力类型 */
export type CapabilityType = 'moderation' | 'av_moderation' | 'text_moderation' | 'moderation_custom' | 'text_moderation_custom';
/**
 * 上报能力接入。在探测到某项审核能力可用时调用。
 * 会话内同一 sdkAppId + capability 仅上报一次。
 * sdkAppId 不可用时跳过（无客户身份不产生事件）。
 * @param capability 能力类型
 */
export declare function reportCapability(capability: CapabilityType): void;
/** 核心功能标识 */
export type FeatureKey = 'live_monitor' | 'live_detail' | 'create_live' | 'gift_manage' | 'risk_control';
/**
 * 上报功能使用。在用户进入核心功能页面时调用。
 * 如果调用时 sdkAppId 尚不可用（鉴权未完成），会自动排队，
 * 在 reportAppInit（saveCredentials 后）统一补发。
 */
export declare function reportFeatureUse(feature: FeatureKey): void;
/** 上报页面浏览（SPA 路由变化时调用） */
export declare function reportPageView(path: string): void;
