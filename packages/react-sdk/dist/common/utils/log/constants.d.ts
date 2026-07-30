/**
 * Kibana 日志上报常量
 *
 * 移植自 TRTC_Next sdk-core，去掉 SSO / TRTC 特有概念。
 * 上报服务端复用腾讯云 AVQualityReportSvc（与 TRTC 共用 sdkAppId 体系）。
 */
/** 日志级别（数值越大越严重） */
export declare const LOG_LEVEL: {
    readonly TRACE: 0;
    readonly DEBUG: 1;
    readonly INFO: 2;
    readonly WARN: 3;
    readonly ERROR: 4;
    readonly NONE: 5;
};
export type LOG_LEVEL = (typeof LOG_LEVEL)[keyof typeof LOG_LEVEL];
/** 日志级别名称（用于 console 输出和上报前缀） */
export declare const LOG_LEVEL_NAME: Record<number, string>;
/** 日志上报命令类型（服务端通过 cmdtype 区分日志类别） */
export declare const LOGGER_CMD_TYPE: {
    /** 上报 kibana 日志 */
    readonly LOG: "jssdk_log";
};
/** 日志上报域名（国内） */
export declare const LOGGER_DOMAIN = "https://yun.tim.qq.com";
/** 日志上报域名（海外，sdkAppId < 1400000000） */
export declare const LOGGER_DOMAIN_OVERSEA = "https://apisgp.my-imcloud.com";
/** 定时上报间隔（毫秒） */
export declare const LOG_UPLOAD_INTERVAL = 5000;
/** 单次上报最大日志条数 */
export declare const LOG_UPLOAD_BATCH_SIZE = 50;
/** 上报失败重试次数 */
export declare const LOG_UPLOAD_RETRIES = 3;
/** 上报请求超时（毫秒） */
export declare const LOG_UPLOAD_REQUEST_TIMEOUT = 5000;
/** gzip 压缩阈值（字节），超过此大小才压缩 */
export declare const GZIP_THRESHOLD = 2800;
