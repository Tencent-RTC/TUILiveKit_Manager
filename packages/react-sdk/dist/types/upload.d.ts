/**
 * 上传相关类型定义
 */
export interface UploadConfig {
    /** 是否启用上传 */
    enabled: boolean;
    /** 后端使用的存储 Provider（如 cos / oss / s3） */
    provider?: string;
    /** 存储桶名称 */
    bucket?: string;
    /** 存储区域 */
    region?: string;
    /** CDN 域名 */
    cdnDomain?: string;
    /** 业务访问域名 */
    accessDomain?: string;
    /** 最大文件大小（字节） */
    maxSize?: number;
    /** 允许的文件类型（MIME） */
    allowedTypes?: string[];
}
export interface UploadResult {
    /** 访问 URL */
    url: string;
    /** 对象 key */
    key?: string;
    /** 文件大小（字节） */
    size?: number;
    /** MIME 类型 */
    mimetype?: string;
    /** 存储 Provider */
    provider?: string;
    /** UI 兼容：文件名 */
    filename?: string;
}
