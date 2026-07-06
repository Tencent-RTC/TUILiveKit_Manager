/**
 * ImageUpload 统一导出
 *
 * 将原来的单文件 image-upload.ts (692 行) 拆分为模块化结构：
 * - file-type.ts: 文件类型检测工具
 * - svga.ts: SVGA 相关处理
 * - validation.ts: 媒体验证和文件选择验证
 * - url-controller.ts: URL 验证控制器
 * - crop.ts: 图片裁剪工具
 * - preview.ts: 文件预览和 ObjectURL 管理
 * - drag-drop.ts: 拖拽上传工具
 */
export { isVideoUrl, isSvgaUrl, isSvgaFile, isVideoFile, getByteLength, readFileAsDataURL, } from './file-type';
export { getSvgaParser, initSvgaParser, getSvgaParserIfInited, validateSvgaUrl, validateSvgaFile, } from './svga';
export { validateImageUrl, validateImageFile, validateVideoFile, validateFileType, validateFileSize, validateFileLoad, type FileTypeValidationResult, } from './validation';
export { UrlValidationController, type UrlValidationCallbacks, } from './url-controller';
export { getCroppedImg, cropCanvasToBlob, canvasToBlob, type CropArea, } from './crop';
export { ObjectURLManager, createPreviewUrl, revokePreviewUrl, replacePreviewUrl, } from './preview';
export { extractFileFromDragEvent, createDragDropHandler, preventDefaultDrag, } from './drag-drop';
