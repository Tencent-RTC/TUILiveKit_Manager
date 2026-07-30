/**
 * 登录页字段帮助链接
 *
 * 根据平台（react / vue）和语言（zh-CN / en-US）返回对应文档链接。
 * React / Vue 登录页共用同一套链接生成逻辑，避免双端重复实现。
 */
export type HelpPlatform = 'react' | 'vue';
export type HelpLanguage = 'zh-CN' | 'en-US';
export interface HelpLinkSet {
    /** SDKAppID 获取方式文档 */
    sdkAppId: string;
    /** SecretKey 获取方式文档（与 SDKAppID 相同） */
    secretKey: string;
    /** 管理员账号管理文档 */
    userId: string;
}
/**
 * 获取登录页各字段的帮助文档链接
 *
 * @param platform - 项目平台 'react' | 'vue'
 * @param language - 当前语言 'zh-CN' | 'en-US'
 */
export declare function getHelpLinks(platform: HelpPlatform, language: HelpLanguage): HelpLinkSet;
