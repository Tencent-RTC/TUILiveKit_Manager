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
