import type { SetupObsStreamingOptions, SetupObsStreamingResult, GetObsLiveDetailResult } from '../types/live';
export type { ObsSetupStatus, ObsSetupMessages, SetupObsStreamingOptions, SetupObsStreamingResult, ObsLiveDetailStatus, GetObsLiveDetailResult, } from '../types/live';
export declare function setupObsStreamingForLive(options: SetupObsStreamingOptions): Promise<SetupObsStreamingResult>;
export declare function getObsLiveDetailInfo(options: {
    liveId: string;
    anchorId: string;
    getStreamInfoFailedMessage?: string;
}): Promise<GetObsLiveDetailResult>;
