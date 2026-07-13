/**
 * 英文翻译资源（极简版 — Key-as-Default 模式）
 *
 * I18N 常量本身就是 UI 英文，i18next 在 returnNull: false 时直接返回 key。
 * 这里只保留无法通过 key 本身表达的嵌套结构（如 ChatErrorModal 的点号键）。
 */
/**
 * 英文资源 = 从 I18N key 值自动推导（key 即英文） + ChatErrorModal 嵌套结构
 * 在 i18next returnNull:false 下所有 I18N key 天然可用，此处仅补充嵌套键。
 */
export declare const resource: {
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
