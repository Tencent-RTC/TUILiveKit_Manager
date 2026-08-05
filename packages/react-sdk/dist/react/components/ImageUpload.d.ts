import React from 'react';
import './ImageUpload.css';
interface ImageUploadProps {
    value?: string;
    onChange: (url: string) => void;
    type?: 'cover' | 'gift-icon' | 'gift-animation';
    /** 是否启用裁剪 */
    cropEnabled?: boolean;
    /** 裁剪宽高比 */
    aspectRatio?: number;
    /** 最大文件大小(MB) */
    maxSize?: number;
    /** 上传拖拽区域的占位提示文本（文件上传模式下显示） */
    placeholder?: string;
    /** URL 输入框的 placeholder 文本（URL 输入模式下显示），与 placeholder 用于不同输入模式 */
    urlPlaceholder?: string;
    /** 是否显示 URL 输入框作为备选 */
    showUrlInput?: boolean;
    /** 预览尺寸 */
    previewWidth?: number;
    previewHeight?: number;
    /** COS 上传是否启用 */
    uploadEnabled?: boolean;
    /** 自定义 accept 类型 */
    accept?: string;
    /** 自定义格式提示文案 */
    acceptHint?: string;
    /** URL 最大字节数限制 */
    maxBytes?: number;
    /** 类名 */
    className?: string;
    /**
     * 延迟上传模式：选图/裁剪后不立即上传，而是通过 onFileReady 返回待上传文件，
     * 本地预览图片。外部可在合适时机调用 uploadPendingFile() 完成上传。
     */
    deferUpload?: boolean;
    /** 延迟上传模式下，文件准备就绪的回调 */
    onFileReady?: (file: File | Blob | null) => void;
    /** 是否跳过 SVGA 文件的加载验证 */
    skipSvgaValidation?: boolean;
    /** URL 错误状态变化回调（当有错误时传 true，恢复正常时传 false） */
    onUrlErrorChange?: (hasError: boolean) => void;
}
/** ImageUpload 对外暴露的方法（通过 ref） */
export interface ImageUploadRef {
    /** 执行上传暂存的文件，返回上传后的 URL */
    uploadPendingFile: () => Promise<string | null>;
    /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
    isUrlInputMode: boolean;
    /** 验证图片 URL 是否可访问 */
    validateImageUrl: (url: string, timeout?: number) => Promise<true>;
    /** 当前是否正在验证 URL */
    isValidating: boolean;
    /** URL 验证错误信息 */
    urlValidationError: string;
    /** 当前 URL 是否存在错误（验证失败或字节超限） */
    hasUrlError: boolean;
    /** 当前 URL 输入框中的值 */
    urlInputValue: string;
    /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
    reset: () => void;
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => void;
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (msg: string) => void;
    /**
     * 确保 URL 输入已验证并返回最终 URL。
     * - 如果当前不在 URL 输入模式，返回 null
     * - 如果正在验证，等待验证完成
     * - 如果输入框中有未 blur 确认的 URL，主动触发验证
     * - 验证成功返回 URL，验证失败抛出错误
     */
    ensureUrlValidated: () => Promise<string | null>;
}
declare const ImageUpload: React.ForwardRefExoticComponent<ImageUploadProps & React.RefAttributes<ImageUploadRef>>;
export default ImageUpload;
