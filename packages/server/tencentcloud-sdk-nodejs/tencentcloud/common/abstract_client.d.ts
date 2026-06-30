import { ClientProfile, Credential, ClientConfig, HttpProfile, DynamicCredential } from "./interface";
/**
 * API 响应回调函数类型
 * @template TReuslt 响应数据类型
 */
export type ResponseCallback<TReuslt = any> = (error: string, rep: TReuslt) => void;
/**
 * HTTP 请求选项
 */
export interface RequestOptions extends Partial<Pick<HttpProfile, "headers">> {
    /**
     * 是否为 multipart 请求
     */
    multipart?: boolean;
    /**
     * 中止请求信号
     */
    signal?: AbortSignal;
    /**
     * 设置 Authorization 为 SKIP，跳过签名
     * @default false
     */
    skipSign?: boolean;
}
type ResponseData = any;
/**
 * @inner
 */
export declare class AbstractClient {
    sdkVersion: string;
    path: string;
    credential: Credential | DynamicCredential;
    region: string;
    apiVersion: string;
    endpoint: string;
    profile: ClientProfile;
    /**
     * 实例化client对象
     * @param {string} endpoint 接入点域名
     * @param {string} version 产品版本
     * @param {Credential} credential 认证信息实例
     * @param {string} region 产品地域
     * @param {ClientProfile} profile 可选配置实例
     */
    constructor(endpoint: string, version: string, { credential, region, profile }: ClientConfig);
    /**
     * 获取凭证信息
     * @returns {Promise<Credential>} 返回凭证信息的 Promise
     */
    getCredential(): Promise<Credential>;
    /**
     * @inner
     */
    request(action: string, req: any, options?: ResponseCallback | RequestOptions, cb?: ResponseCallback): Promise<ResponseData>;
    /**
     * @inner
     */
    requestOctetStream(action: string, req: any, options?: ResponseCallback | RequestOptions, cb?: ResponseCallback): Promise<any>;
    /**
     * @inner
     */
    private doRequest;
    /**
     * @inner
     */
    private doRequestWithSign3;
    private parseResponse;
    /**
     * @inner
     */
    private mergeData;
    /**
     * @inner
     */
    private formatRequestData;
    /**
     * @inner
     */
    private formatSignString;
}
export {};
