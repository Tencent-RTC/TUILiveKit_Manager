export declare const BASIC_EMOJI: Record<string, string>;
export declare const EMOJI_BASE_URL = "https://web.sdk.qcloud.com/im/assets/emoji-plugin/";
export type EmojiSegment = {
    type: 'text';
    text: string;
} | {
    type: 'emoji';
    key: string;
    src: string;
};
/**
 * 解析文本中的 emoji
 * @param content 要解析的文本
 * @returns EmojiSegment 数组
 */
export declare const parseTextWithEmoji: (content: string | undefined | null) => EmojiSegment[];
