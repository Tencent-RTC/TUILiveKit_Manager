/**
 * TRTC房间内审核记录列表
 */
export interface RoomModerationRecord {
    /**
     *
     */
    RoomId?: string;
    /**
     *
     */
    ModerationRecord?: Array<ModerationHitRecord>;
}
/**
 * QueryModerationRecord返回参数结构体
 */
export interface QueryModerationRecordResponse {
    /**
     * <p>违规命中的记录列表</p>
     */
    Records?: Array<RoomModerationRecord>;
    /**
     * 唯一请求 ID，由服务端生成，每次请求都会返回（若请求因其他原因未能抵达服务端，则该次请求不会获得 RequestId）。定位问题时需要提供该次请求的 RequestId。
     */
    RequestId?: string;
}
/**
 * QueryModerationRecord请求参数结构体
 */
export interface QueryModerationRecordRequest {
    /**
     * <p>申请的Sdkappid</p>
     */
    SdkAppId?: number;
    /**
     * <p>房间号列表</p>
     */
    RoomIds?: Array<string>;
    /**
     * <p>开始时间</p><p>参数格式：2026-06-30 14:18:13</p>
     */
    StartTime?: string;
    /**
     * <p>结束时间</p><p>参数格式：2026-06-30 14:18:13</p>
     */
    EndTime?: string;
}
/**
 * 内容理解命中记录
 */
export interface ModerationHitRecord {
    /**
     *
     */
    SubTaskId?: number;
    /**
     *
     */
    PlayUin?: string;
    /**
     *
     */
    MediaType?: number;
    /**
     *
     */
    Label?: string;
    /**
     *
     */
    CreateTime?: string;
}
