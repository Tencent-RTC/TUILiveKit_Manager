/**
 * i18n 模板拼接工具函数
 *
 * 用法:
 *   const { opSuccess, opFailed } = bindI18nHelpers(t);
 *   opSuccess(I18N.DELETE)                          // "删除成功"
 *   opSuccess(I18N.LABEL_CREATED, I18N.GIFT)         // "礼物创建成功"
 *   opSuccess(I18N.MUTE, userName)                   // "张三禁言成功"
 *   opFailed(I18N.OP_UPLOAD, I18N.IMAGE)             // "图片上传失败"
 *   opFailed(I18N.COPY, null, errMsg)                // "复制失败：errMsg"
 */
import type { I18nKey, TFunction } from './t';
export declare function bindI18nHelpers(t: TFunction): {
    opSuccess: (action: I18nKey, entity?: string) => string;
    opFailed: (action: I18nKey, entity?: string | null, error?: string) => string;
};
export type I18nHelpers = ReturnType<typeof bindI18nHelpers>;
