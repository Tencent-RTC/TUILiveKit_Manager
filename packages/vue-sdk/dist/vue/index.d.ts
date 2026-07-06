/**
 * Vue 直播能力适配层入口
 *
 * 入口文件仅负责 re-export，具体实现放在独立模块中，避免入口承载业务逻辑。
 */
export * from './live-monitor';
export * from './gift';
export * from './risk-control';
export * from './chat';
export * from './composables';
export { reportEvent, reportTime, reportBusinessOp, reportPageView, measureAndReport } from '../common/rum-reporter';
