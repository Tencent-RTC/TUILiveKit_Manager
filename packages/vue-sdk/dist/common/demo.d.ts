/**
 * Demo 模式相关工具（仅在线 demo 构建启用，release 中 __DEMO_MODE__ 为 false 时相关分支被 tree-shake）
 */
/** Demo 跳转目标变体：React 演示应用跳 mock-react，Vue 演示应用跳 mock-vue */
export type DemoTargetVariant = 'react' | 'vue';
/**
 * 解析 Demo 模式跳转目标 URL
 *
 * 部署假设：demo 应用与对应 mock 应用同级目录部署
 *   - react 应用在 /react/，则 mock 在 /mock-react/
 *   - vue 应用在 /vue/，则 mock 在 /mock-vue/
 *
 * 基于当前页面 URL 向上一级进入 mock-{variant} 目录，
 * 兼容根部署与子路径部署（react 目录与 mock-react 目录同级）。
 */
export declare function resolveDemoTargetPath(variant: DemoTargetVariant): string;
/**
 * 部署文档链接（中英文统一指向腾讯云集成文档）
 * 与登录页顶部提示使用同一个链接。
 */
export declare const DEPLOY_DOC_URL = "https://cloud.tencent.com/document/product/647/123012";
/**
 * GitHub Issue 链接（中英文通用）
 * 跑马灯中 "可到 GitHub 提交 Issue" 文案的跳转目标。
 */
export declare const GITHUB_ISSUE_URL = "https://github.com/Tencent-RTC/TUILiveKit_Manager/issues";
/**
 * 用户反馈问卷链接（腾讯问卷 wj.qq.com）
 *
 * 反馈入口统一走外部问卷，不再自建弹窗：自建弹窗曝光低、提交率几乎为零，
 * 改为「左下角常驻按钮 + 跑马灯文案」两个入口共同导流到同一份问卷。
 * 问卷内容需在 wj.qq.com 后台维护，改题不需要改代码。
 */
export declare const SURVEY_URL = "https://wj.qq.com/s2/28180031/a04s";
