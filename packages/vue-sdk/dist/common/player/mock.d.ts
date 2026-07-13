/**
 * Mock 播放器工厂（仅开发/测试使用）
 *
 * 此文件独立存放，确保生产构建时能通过 tree-shaking 完全排除。
 * 生产代码不应 import 此文件。
 */
import type { PlayerFactory } from '../../types/live';
/**
 * 创建 Mock 播放器工厂
 * 返回只能渲染静态占位画面的播放器，不创建真实 TRTC 连接
 */
export declare function createMockPlayerFactory(): PlayerFactory;
