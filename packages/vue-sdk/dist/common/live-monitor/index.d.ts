/**
 * Live Monitor 公共层 - 主入口
 *
 * 导出框架无关的核心逻辑，供 React/Vue 薄封装调用
 */
export { LiveMonitorCore } from './LiveMonitorCore';
export type { LiveMonitorCoreOptions, ILiveMonitorCore, LiveMonitorInternalState, } from './types';
export { PlayerRegistry } from './PlayerRegistry';
export type { PlayerRegistryOptions } from './PlayerRegistry';
export { UserProfileManager } from './UserProfileManager';
export type { UserProfileManagerOptions } from './UserProfileManager';
export { LiveListPagination } from '../live-list';
export type { PaginatedListSnapshot } from '../live-list';
