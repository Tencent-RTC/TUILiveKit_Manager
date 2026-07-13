import type { PushInfo } from '../types/live';
export type ObsSetupStatus = '' | 'creating' | 'seating' | 'ready' | 'error';
export interface ObsSetupMessages {
    getStreamInfoFailed?: string;
    importAccountFailed?: string;
    addRobotFailed?: string;
    pickSeatFailed?: string;
    setupFailed?: string;
}
export interface SetupObsStreamingOptions {
    liveId: string;
    anchorId: string;
    onStatusChange?: (status: ObsSetupStatus) => void;
    messages?: ObsSetupMessages;
}
export interface SetupObsStreamingResult {
    robotId: string;
    streamInfo: PushInfo | null;
    streamInfoError: string;
    setupError: string;
    status: ObsSetupStatus;
    configuredSuccessfully: boolean;
}
export type ObsLiveDetailStatus = 'ready' | 'none' | 'error';
export interface GetObsLiveDetailResult {
    robotId: string;
    hasRobot: boolean;
    onSeat: boolean;
    streamInfo: PushInfo | null;
    streamInfoError: string;
    status: ObsLiveDetailStatus;
    errorMessage: string;
}
export declare function setupObsStreamingForLive(options: SetupObsStreamingOptions): Promise<SetupObsStreamingResult>;
export declare function getObsLiveDetailInfo(options: {
    liveId: string;
    anchorId: string;
    getStreamInfoFailedMessage?: string;
}): Promise<GetObsLiveDetailResult>;
