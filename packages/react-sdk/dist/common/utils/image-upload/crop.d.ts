/**
 * 图片裁剪工具
 * 提供框架无关的图片裁剪功能
 */
/**
 * 裁剪区域定义（兼容 react-easy-crop 的 Area 类型）
 */
export interface CropArea {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * Canvas 转 Blob（通用工具）
 *
 * @param canvas - HTML Canvas 元素
 * @param mimeType - 输出图片格式，默认 'image/jpeg'
 * @param quality - 图片质量 (0-1)，默认 0.92
 * @returns Promise<Blob>
 */
export declare function canvasToBlob(canvas: HTMLCanvasElement, mimeType?: string, quality?: number): Promise<Blob>;
/**
 * 裁剪图片（用于 React ImageUpload）
 *
 * 从原始图片 URL 根据指定区域裁剪出新图片
 *
 * @param imageSrc - 原始图片 URL（可以是 data URL 或 http(s) URL）
 * @param pixelCrop - 裁剪区域（像素坐标）
 * @param mimeType - 输出图片格式，默认 'image/jpeg'
 * @param quality - 图片质量 (0-1)，默认 0.92
 * @returns Promise<Blob> - 裁剪后的图片 Blob
 *
 * @example
 * ```typescript
 * const croppedBlob = await getCroppedImg(imageUrl, {
 *   x: 100,
 *   y: 100,
 *   width: 400,
 *   height: 300,
 * });
 * ```
 */
export declare function getCroppedImg(imageSrc: string, pixelCrop: CropArea, mimeType?: string, quality?: number): Promise<Blob>;
/**
 * 从 vue-advanced-cropper 的结果裁剪图片（用于 Vue ImageUpload）
 *
 * @param canvas - vue-advanced-cropper 返回的 canvas
 * @param mimeType - 输出图片格式，默认 'image/jpeg'
 * @param quality - 图片质量 (0-1)，默认 0.92
 * @returns Promise<Blob>
 *
 * @example
 * ```typescript
 * const { canvas } = cropperRef.value.getResult();
 * const blob = await cropCanvasToBlob(canvas);
 * ```
 */
export declare function cropCanvasToBlob(canvas: HTMLCanvasElement | null | undefined, mimeType?: string, quality?: number): Promise<Blob>;
