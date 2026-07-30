import type { UploadConfig, UploadResult, UploadResourceType } from '../types/upload';
/** useUploadState() 返回值（React 版，响应式数据为普通值） */
export interface UseUploadStateReturn {
    /** 是否正在上传 */
    uploading: boolean;
    /** 当前上传进度（0-100，非上传中为 0） */
    uploadProgress: number;
    /** 获取上传配置（是否启用、存储方式等，依赖服务端 STORAGE_PROVIDER 配置） */
    getUploadConfig(): Promise<UploadConfig>;
    /**
     * 上传资源（通用），返回资源 URL 等信息。
     * @param file 文件
     * @param type 资源类型：cover / gift-icon / gift-animation
     * @param onProgress 进度回调（0-100）
     */
    uploadResource(file: File | Blob, type: UploadResourceType, onProgress?: (percent: number) => void): Promise<UploadResult>;
}
/**
 * 上传状态 Hook
 * 全局共享同一份上传状态（common 单例），任意组件订阅都会同步更新
 */
export declare function useUploadState(): UseUploadStateReturn;
