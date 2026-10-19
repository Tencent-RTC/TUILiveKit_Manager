import type { BarrageSenderInfo } from '../types/barrage';
/**
 * 解析消息发送者的展示名：群名片 > 昵称 > userId
 *
 * React / Vue 双端共用，保证消息列表展示名、禁言/封禁弹窗文案取同一口径，
 * 避免两端各写一份导致取名顺序分叉。
 */
export declare function resolveSenderDisplayName(sender?: BarrageSenderInfo | null): string;
