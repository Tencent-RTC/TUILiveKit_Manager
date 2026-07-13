/**
 * 礼物表格常量定义
 */
import type { LangKey, LangMap } from './types';
/**
 * 语言映射配置
 */
export declare const LANG_MAP: LangMap;
/**
 * API语言代码到内部key的反向映射
 */
export declare const LANG_CODE_TO_KEY: Record<string, LangKey>;
/**
 * 多语言配置弹窗中显示的语言列表
 */
export declare const LANG_CONFIG_KEYS: LangKey[];
/**
 * 字节限制常量
 */
export declare const GIFT_ID_MAX_BYTES = 20;
export declare const GIFT_NAME_MAX_BYTES = 20;
export declare const GIFT_DESC_MAX_BYTES = 20;
export declare const GIFT_EXT_MAX_BYTES = 100;
export declare const GIFT_SEARCH_MAX_BYTES = 50;
export declare const LIVE_LIST_SEARCH_MAX_BYTES = 45;
