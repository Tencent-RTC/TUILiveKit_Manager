/**
 * gzip 压缩 JSON 数据。
 * 超过阈值时压缩为 ArrayBuffer，否则返回原始字符串。
 * 压缩失败时回退为字符串。
 */
export declare function compressJSON(data: unknown): Promise<ArrayBuffer | string>;
/**
 * 发送日志上报 HTTP 请求。
 *
 * @param url     上报地址
 * @param body    请求体（字符串或 gzip 压缩后的 ArrayBuffer）
 * @param timeout 超时时间（毫秒），默认 5000
 */
export declare function httpLog(url: string, body: string | ArrayBuffer, timeout?: number): Promise<{
    data: unknown;
}>;
