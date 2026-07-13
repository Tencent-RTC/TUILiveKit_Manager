/**
 * 文件预览和 ObjectURL 管理工具
 * 提供框架无关的文件预览 URL 创建和清理功能
 */
/**
 * ObjectURL 管理器
 * 自动跟踪和清理 createObjectURL 生成的 URL，防止内存泄漏
 */
export declare class ObjectURLManager {
    private urls;
    /**
     * 创建 ObjectURL 并自动跟踪
     * @param blob - File 或 Blob 对象
     * @returns ObjectURL 字符串
     */
    create(blob: File | Blob): string;
    /**
     * 释放指定的 ObjectURL
     * @param url - 要释放的 URL
     */
    revoke(url: string): void;
    /**
     * 释放所有跟踪的 ObjectURL
     */
    revokeAll(): void;
    /**
     * 获取当前跟踪的 URL 数量
     */
    get size(): number;
}
/**
 * 创建文件预览 URL
 *
 * @param file - File 或 Blob 对象
 * @returns ObjectURL 字符串
 *
 * @example
 * ```typescript
 * const previewUrl = createPreviewUrl(file);
 * // 使用完后记得清理
 * revokePreviewUrl(previewUrl);
 * ```
 */
export declare function createPreviewUrl(file: File | Blob): string;
/**
 * 释放预览 URL
 *
 * @param url - ObjectURL 字符串
 */
export declare function revokePreviewUrl(url: string): void;
/**
 * 安全地替换预览 URL
 * 先释放旧 URL，再创建新 URL
 *
 * @param oldUrl - 旧的 ObjectURL（可能为 null）
 * @param newFile - 新的 File 或 Blob
 * @returns 新的 ObjectURL
 *
 * @example
 * ```typescript
 * previewUrl = replacePreviewUrl(previewUrl, newFile);
 * ```
 */
export declare function replacePreviewUrl(oldUrl: string | null | undefined, newFile: File | Blob): string;
