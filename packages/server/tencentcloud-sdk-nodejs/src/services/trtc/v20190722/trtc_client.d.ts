import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryModerationRecordResponse, QueryModerationRecordRequest } from "./trtc_models";
/**
 * trtc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 查询内容理解记录列表
     */
    QueryModerationRecord(req: QueryModerationRecordRequest, cb?: (error: string, rep: QueryModerationRecordResponse) => void): Promise<QueryModerationRecordResponse>;
}
