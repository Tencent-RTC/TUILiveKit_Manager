/**
 * 文件类型检测工具
 */
/** 判断 URL 是否为视频文件 */
export declare function isVideoUrl(url: string): boolean;
/** 判断 URL 是否为 SVGA 文件 */
export declare function isSvgaUrl(url: string): boolean;
/** 判断文件是否为 SVGA（通过文件名后缀） */
export declare function isSvgaFile(file: File | Blob): boolean;
/** 判断文件是否为视频（通过 MIME 类型） */
export declare function isVideoFile(file: File | Blob): boolean;
/** 获取字符串的 UTF-8 字节长度 */
export declare function getByteLength(str: string): number;
/** 读取文件为 DataURL */
export declare function readFileAsDataURL(file: File): Promise<string>;
