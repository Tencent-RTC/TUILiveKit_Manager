import { resolveAccount } from '../layout';
import type { SdkAccount } from '../layout';
/** 进房账号（sdkAppId 为 0 表示无效） */
export type PlayerAccount = {
    sdkAppId: number;
    userId: string;
    userSig: string;
    userName?: string;
    avatarUrl?: string;
} | undefined;
/**
 * 根据身份模式解析进房账号
 * - admin 模式：直接使用管理账号进房
 * - audience 模式：通过服务端创建临时账号进房
 */
export declare function resolvePlayerAccount(identityMode: 'admin' | 'audience'): Promise<PlayerAccount>;
/**
 * 设置监控管理员昵称（进房前调用）
 *
 * 通过 IM profile 接口设置用户的展示昵称和角色，使进入直播间后消息列表和观众列表
 * 中显示自定义昵称，而非默认的 userId。
 *
 * @param userId - 用户 ID
 * @param nick - 自定义昵称
 */
export declare function setMonitorNickname(userId: string, nick: string): Promise<void>;
/** 重新导出供 UI 层使用 */
export { resolveAccount, type SdkAccount };
