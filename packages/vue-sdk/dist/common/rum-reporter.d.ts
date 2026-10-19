/**
 * RUM 事件名常量（上报端与 internal-tools 查询端共用）。
 * 修改任一处需同步另一端，拼写错误会导致数据丢失。
 */
export declare const RUM_EVENT_NAME: {
    /** 应用初始化（登录一次性事件） */
    readonly APP_INIT: "app_init";
    /** 核心功能使用 */
    readonly FEATURE_USE: "feature_use";
    /** 审核能力开启 */
    readonly CAPABILITY: "capability";
    /** 页面浏览 */
    readonly PAGE_VIEW: "page_view";
    /**
     * SDK 错误日志事件。
     *
     * 所有通过 Logger.error() 触发的 RUM 上报统一使用此 name，
     * 模块归属通过 ext1 传递（'error:模块名' 前缀）。这样错误事件不会与业务事件名
     * (moderation / live_crud / risk_control / gift_manage / live_search / force_stop)
     * 冲突，避免把模块错误日志误统计为「管理操作」。
     */
    readonly ERROR: "error";
    /** React 渲染错误（AppErrorBoundary 捕获，ext1='render'） */
    readonly RENDER_ERROR: "reactRenderError";
    /** 转化触点点击（ext1=触点标识，ext2=mock_demo/build_demo/customer） */
    readonly CONVERSION_CLICK: "conversion_click";
    /** demo 问卷评分（ext1=1~5 星，ext2=场景 mock_demo/build_demo） */
    readonly SURVEY_RATING: "survey_rating";
};
/** RUM 事件 ext2 维度结果标识 */
export declare const RUM_RESULT: {
    /** 操作成功 */
    readonly SUCCESS: "success";
    /** 操作失败 */
    readonly FAIL: "fail";
    /** 测速默认结果 */
    readonly OK: "ok";
    /** 能力已开启 */
    readonly ON: "on";
};
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
 * @param ext1 事件 ext1 维度（默认取 name，不影响测速 name）
 * @param ext2 事件 ext2 维度（默认 'ok'）
 *
 * 同时向事件流发送一条事件（ext1=ext1, ext2=ext2），
 * 供 tools 后台按 ext1 分组统计"调用次数"。
 */
export declare function reportTime(name: string, duration: number, ext1?: string, ext2?: string): void;
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
/**
 * 转化触点点击上报（demo → 接入路径上的意向信号）。
 *
 * 用途：分析 demo 用户向正式接入转化的关键触点，如
 * 点击接入/部署文档、复制 OBS 推流信息、登录页查找凭证帮助等。
 *
 * ext1 = 触点标识（如 obs_server_url / help_sdk_app_id / deploy_doc）
 * ext2 = 场景：
 *   - 'mock_demo' / 'build_demo'：demo 应用可感知编译态时传入
 *   - 'customer'：SDK 层触点（OBS 复制等）无法感知 demo 形态时统一使用，
 *     分析时按 ext3(sdkAppId) 区分 demo 客户与正式客户
 *
 * 注意：只记录"点击/复制"动作本身，不上报被复制的敏感内容（推流地址/密钥）。
 */
export declare function reportConversionClick(track: string, scene: 'mock_demo' | 'build_demo' | 'customer'): void;
/** demo 问卷场景（与 conversion_click 的 scene 取值一致） */
export type SurveyScene = 'mock_demo' | 'build_demo' | 'customer';
/**
 * 上报 demo 问卷评分（1~5 星）。
 *
 * 评分是「度量值」而非「转化触点」，因此使用独立的 survey_rating 事件：
 *   - ext1 = 评分（'1'~'5'，枚举可控，便于 RUM 按 ext1 聚合统计各星级次数）
 *   - ext2 = 场景（mock_demo / build_demo），供 internal-tools 按形态过滤
 *   - ext3 仍由 reportEvent 统一解析为 sdkAppId 或 demo 匿名指纹
 *
 * 用户留言（自由文本）不通过 RUM 上报，走独立后端落库（见 common/survey.ts），
 * 避免自由文本污染 RUM 聚合维度 + PII/敏感信息进监控系统的合规风险。
 */
export declare function reportSurveyRating(rating: number, scene: SurveyScene): void;
export declare function reportPageView(path: string): void;
/**
 * 重置会话内去重缓存。当 Aegis 实例因 uin 变化被销毁重建时调用。
 *
 * 清的是全局单例里的集合（而非模块级变量），因此代码分割出的所有 chunk 会一起失效重来，
 * 不会出现「chunk A 已清空、chunk B 仍持有旧集合」的半重置状态。
 */
export declare function resetReportedCaches(): void;
