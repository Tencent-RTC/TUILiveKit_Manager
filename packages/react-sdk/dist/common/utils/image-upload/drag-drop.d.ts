/**
 * 拖拽上传工具
 * 提供框架无关的拖拽事件处理
 */
/**
 * 从拖拽事件中提取文件
 *
 * @param event - DragEvent 对象
 * @returns File | null - 提取的文件，如果没有则返回 null
 *
 * @example
 * ```typescript
 * const file = extractFileFromDragEvent(event);
 * if (file) {
 *   handleFile(file);
 * }
 * ```
 */
export declare function extractFileFromDragEvent(event: DragEvent): File | null;
/**
 * 创建拖拽处理器
 * 返回标准的拖拽事件处理函数
 *
 * @param onFile - 文件提取成功的回调
 * @returns 拖拽事件处理函数
 *
 * @example
 * ```typescript
 * const handleDrop = createDragDropHandler((file) => {
 *   log.info('Dropped file', '', file.name);
 *   handleFileUpload(file);
 * });
 *
 * // 在组件中使用
 * <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
 *   Drop file here
 * </div>
 * ```
 */
export declare function createDragDropHandler(onFile: (file: File) => void): (event: DragEvent) => void;
/**
 * 阻止默认拖拽行为（用于 dragOver 事件）
 *
 * @param event - DragEvent 对象
 *
 * @example
 * ```typescript
 * <div onDragOver={preventDefaultDrag}>
 *   ...
 * </div>
 * ```
 */
export declare function preventDefaultDrag(event: DragEvent): void;
