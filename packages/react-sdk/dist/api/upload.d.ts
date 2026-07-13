import type { UploadConfig, UploadResult } from '../types';
export declare function getUploadConfig(): Promise<UploadConfig>;
export declare function getEffectiveUploadEnabled(): Promise<boolean>;
export declare function uploadImage(file: File | Blob, type?: 'cover' | 'gift-icon' | 'gift-animation', onProgress?: (percent: number) => void): Promise<UploadResult>;
