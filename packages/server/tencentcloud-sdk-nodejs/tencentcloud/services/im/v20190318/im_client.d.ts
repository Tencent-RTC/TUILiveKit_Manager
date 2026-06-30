import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { UpdateTPNSInfoRequest, UpdateTPNSInfoResponse } from "./im_models";
/**
 * im client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 更新tpns应用信息
     */
    UpdateTPNSInfo(req: UpdateTPNSInfoRequest, cb?: (error: string, rep: UpdateTPNSInfoResponse) => void): Promise<UpdateTPNSInfoResponse>;
}
