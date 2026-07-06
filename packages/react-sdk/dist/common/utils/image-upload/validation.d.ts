/**
 * 媒体验证和文件选择验证
 */
/** 文件类型验证结果 */
export interface FileTypeValidationResult {
    /** 是否通过验证 */
    valid: boolean;
    /** 错误提示（仅当 valid 为 false） */
    errorHint?: string;
}
/**
 * 验证图片 URL 是否可访问（综合验证：图片/视频/SVGA）
 * @param url 要验证的 URL
 * @param timeout 超时时间（毫秒），默认 8000ms
 * @param skipSvgaValidation 是否跳过 SVGA 验证
 */
export declare function validateImageUrl(url: string, timeout?: number, skipSvgaValidation?: boolean): Promise<true>;
/**
 * 验证图片文件（Blob URL）是否可正常加载
 */
export declare function validateImageFile(objectUrl: string, timeout?: number): Promise<true>;
/**
 * 验证视频文件（Blob URL）是否可正常加载
 */
export declare function validateVideoFile(objectUrl: string, timeout?: number): Promise<true>;
/**
 * 验证文件类型是否在 accept 列表中
 * @param file 待验证的文件
 * @param accept accept 属性字符串（逗号分隔的 MIME 类型或扩展名）
 */
export declare function validateFileType(file: File, accept?: string): FileTypeValidationResult;
/**
 * 验证文件大小是否超限
 * @param file 待验证的文件
 * @param maxSizeMB 最大文件大小（MB）
 */
export declare function validateFileSize(file: File, maxSizeMB: number): boolean;
/**
 * 对文件执行加载验证（图片/视频/SVGA）
 * @param file 待验证的文件
 * @param accept accept 属性字符串
 * @param skipSvgaValidation 是否跳过 SVGA 验证
 */
export declare function validateFileLoad(file: File, accept?: string, skipSvgaValidation?: boolean): Promise<void>;
