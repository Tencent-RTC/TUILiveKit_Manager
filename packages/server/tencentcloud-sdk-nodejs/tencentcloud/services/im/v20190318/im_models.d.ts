/**
 * tpns应用信息
 */
export interface TPNSAccessInfo {
    /**
     * tpns应用id
     */
    AccessId: number;
    /**
     * secret key
     */
    SecretKey: string;
    /**
     * 15 - android, 16 - ios, 17 - mac
     */
    Platform: number;
    /**
     * access key
     */
    AccessKey: string;
    /**
     * 地址
     */
    ZoneUrl: string;
}
/**
 * UpdateTPNSInfo请求参数结构体
 */
export interface UpdateTPNSInfoRequest {
    /**
     * im应用id
     */
    IMAccessId: number;
    /**
     * tpns应用信息列表
     */
    TPNSAccessInfo: Array<TPNSAccessInfo>;
}
/**
 * tpns信息更新结果
 */
export interface TPNSUpdateRes {
    /**
     * 0成功，非0失败
     */
    ErrorCode?: number;
    /**
     * 错误信息
     */
    ErrorMessage?: string;
    /**
     * tpns应用id
     */
    AccessId?: number;
    /**
     * secret key
     */
    SecretKey?: string;
    /**
     * 15 - android, 16 - ios, 17 - mac
     */
    Platform?: number;
    /**
     * access key
     */
    AccessKey?: string;
    /**
     * 地址
     */
    ZoneUrl?: string;
}
/**
 * UpdateTPNSInfo返回参数结构体
 */
export interface UpdateTPNSInfoResponse {
    /**
     * 更新结果列表
     */
    TPNSUpdateRes?: Array<TPNSUpdateRes>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
