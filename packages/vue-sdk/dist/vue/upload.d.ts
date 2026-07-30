/**
 * 上传状态 Composable（单例模式）
 *
 * 通用资源上传能力，服务于所有需要上传的场景：
 * - 直播封面上传（配合 useLiveMonitorState().createLive）
 * - 礼物图标 / 动画上传（配合 useGiftState）
 * - 未来扩展（头像等）
 *
 * 设计要点：
 * - 业务逻辑与单例状态复用 common 层（upload-actions），Composable 只做响应式桥接
 * - 模块级共享 ref，订阅 common 单例状态，多组件共享同一实例
 */
import { type Ref } from 'vue';
import type { UploadConfig, UploadResult, UploadResourceType } from '../types/upload';
/** useUploadState() 返回值（Vue 版，响应式数据为 Ref） */
export interface UseUploadStateReturn {
    /** 是否正在上传 */
    uploading: Ref<boolean>;
    /** 当前上传进度（0-100，非上传中为 0） */
    uploadProgress: Ref<number>;
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
 * 上传状态 Composable
 * 单例模式：多次调用共享同一份上传状态
 */
export declare function useUploadState(): UseUploadStateReturn;
