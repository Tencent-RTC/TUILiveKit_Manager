import type { UploadConfig, UploadResult, UploadResourceType } from '../types/upload';
export interface UploadState {
    /** 是否正在上传 */
    uploading: boolean;
    /** 当前上传进度（0-100，非上传中为 0） */
    uploadProgress: number;
}
/** 获取上传状态快照（useSyncExternalStore / ref 初始化用） */
export declare function getUploadStateSnapshot(): UploadState;
/**
 * 订阅上传状态变化（供框架适配层桥接响应式系统）
 * @returns 取消订阅函数
 */
export declare function subscribeUploadState(listener: () => void): () => void;
/** 获取上传配置（是否启用、存储方式等） */
export declare function performGetUploadConfig(): Promise<UploadConfig>;
/**
 * 上传资源（通用），返回资源 URL 等信息。
 * 上传过程中自动更新单例 uploading / uploadProgress 状态。
 *
 * @param file 文件
 * @param type 资源类型：cover / gift-icon / gift-animation
 * @param onProgress 进度回调（0-100）
 */
export declare function performUploadResource(file: File | Blob, type: UploadResourceType, onProgress?: (percent: number) => void): Promise<UploadResult>;
