/**
 * i18n 入口 — Key-as-Default 模式
 *
 * - zhResource: 中文翻译资源
 * - enResource: 英文翻译资源（自动从 I18N key 值推导 + ChatErrorModal 嵌套结构）
 *   所有 I18N key 本身即 UI 英文，无需手动维护英文翻译文件。
 * - I18N: 类型安全的翻译键常量
 */
export { I18N, type I18nKey } from './keys';
export { resource as zhResource } from './zh-CN';
/** 完整英文资源 = 自动推导 + 嵌套结构补充 */
export declare const enResource: {
    ChatErrorModal: {
        title: string;
        login_invalid_sdk_app_id: string;
        login_invalid_user_id: string;
        login_invalid_secret_key: string;
        login_invalid_user_sig: string;
        login_user_sig_expired: string;
        login_user_sig_invalid: string;
        login_user_id_not_match_user_sig: string;
        login_sdk_app_id_not_match_user_sig: string;
        login_sdk_app_id_not_found: string;
        package_not_purchased: string;
        package_group_read_receipt_not_enabled: string;
        package_online_user_list_not_enabled: string;
        package_cloud_search_not_enabled: string;
        package_text_translation_not_enabled: string;
        package_speech_to_text_not_enabled: string;
        call_kit_not_integrated: string;
        search_cloud_rate_limit: string;
        message_voice_size_exceeded: string;
        message_image_invalid_format: string;
        message_image_size_exceeded: string;
        message_image_sensitive_content: string;
        message_video_invalid_format: string;
        message_video_size_exceeded: string;
        message_file_not_exist: string;
        message_file_size_exceeded: string;
        message_file_sending_banned: string;
        message_text_sensitive_content: string;
        message_length_exceeded: string;
        message_local_audit_blocked: string;
        message_recall_time_exceeded: string;
        reaction_emoji_limit_reached: string;
        profile_remark_length_exceeded: string;
        group_announcement_length_exceeded: string;
        group_name_invalid: string;
        group_id_already_used: string;
    };
};
