import type { BrandConfig } from 'livekit-manager-customization';
/** 默认封面图 URL：客户扩展配置 > 环境变量 > 核心默认资源 */
export declare let defaultCoverUrl: string;
/** 默认头像 URL：客户扩展配置 > 环境变量 > 核心默认资源 */
export declare let defaultAvatarUrl: string;
/** Mock 模式下 video.png 加载失败时的回退占位图（SVG data URI） */
export declare const MOCK_VIDEO_POSTER_FALLBACK: string;
export declare function setActiveBrandConfig(brand?: BrandConfig): void;
export declare function getActiveBrandConfig(): BrandConfig;
/**
 * 弹框宽度常量 - React 和 Vue 统一使用
 * TDesign Dialog 的 width prop 会直接设为 inline style，
 * 因此通过 JS 常量来保持两端一致。
 */
export declare const DIALOG_WIDTH: {
    /** 常规表单弹框（新建/编辑直播间等） */
    readonly FORM: 560;
    /** 信息展示弹框（直播信息、OBS 等） */
    readonly INFO: 560;
    /** 确认类弹框（关播确认等） */
    readonly CONFIRM: 480;
    /** 宽弹框（禁言列表、封禁列表等） */
    readonly WIDE: 600;
    /** 裁剪图片弹窗 */
    readonly CROP: 600;
    /** 新建/编辑礼物弹框 */
    readonly GIFT_FORM: 600;
    /** 礼物/类别多语言配置弹框 */
    readonly GIFT_LANG_CONFIG: 680;
    /** 礼物/类别语言编辑、类别编辑弹框 */
    readonly GIFT_EDIT: 420;
    /** 礼物/类别删除确认弹框 */
    readonly GIFT_DELETE: 400;
    /** 新增/编辑类别弹框 */
    readonly CATEGORY_FORM: 500;
};
