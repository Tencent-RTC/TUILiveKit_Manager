import type { SeatTemplate } from '../types/live';
export interface CustomInfo {
    key: string;
    value: string;
}
export interface CreateLiveFormData {
    anchorId: string;
    liveName: string;
    coverUrl: string;
    seatTemplate: SeatTemplate;
    maxSeatCount: number;
}
export interface EditLiveFormData {
    liveName: string;
    coverUrl: string;
}
export interface LiveFormSeatTemplateOption {
    value: SeatTemplate;
    labelKey: string;
    descKey: string;
    orientation: 'landscape' | 'portrait';
}
export interface CreateLiveSubmitParams {
    liveId: string;
    anchorId: string;
    liveName?: string;
    coverUrl?: string;
    seatTemplate: SeatTemplate;
    maxSeatCount?: number;
    customInfo?: Record<string, string>;
    useObsStreaming?: boolean;
}
export type CustomInfoValidationErrorType = 'max-count' | 'key-too-long' | 'value-too-long' | 'total-value-too-long';
export interface CustomInfoValidationError {
    type: CustomInfoValidationErrorType;
    key?: string;
    max: number;
    current?: number;
}
export declare const LIVE_ID_PREFIX = "live_";
export declare const ANCHOR_ID_MAX_BYTES = 32;
export declare const LIVE_TITLE_MAX_BYTES = 100;
export declare const DEFAULT_SEAT_TEMPLATE: SeatTemplate;
export declare const DEFAULT_MAX_SEAT_COUNT = 8;
export declare const PORTRAIT_COVER_ASPECT_RATIO: number;
export declare const LANDSCAPE_COVER_ASPECT_RATIO: number;
export declare const CUSTOM_INFO_LIMITS: {
    readonly maxCount: 10;
    readonly maxKeyBytes: 50;
    readonly maxValueBytes: number;
    readonly maxTotalValueBytes: number;
};
export declare const SEAT_TEMPLATE_OPTIONS: LiveFormSeatTemplateOption[];
export declare function createDefaultCreateLiveFormData(): CreateLiveFormData;
export declare function createDefaultEditLiveFormData(): EditLiveFormData;
export declare function buildLiveId(anchorId: string): string;
export declare function isAudioSeatTemplate(seatTemplate: SeatTemplate): boolean;
export declare function getSeatTemplateOption(seatTemplate: SeatTemplate): LiveFormSeatTemplateOption | undefined;
export declare function getCoverAspectRatio(seatTemplate: SeatTemplate): number;
export declare function isCustomInfoKeyMissing(info: CustomInfo): boolean;
export declare function collectValidCustomInfo(infos: CustomInfo[]): Record<string, string>;
export declare function validateCustomInfo(infos: CustomInfo[]): CustomInfoValidationError | null;
export declare function getDeletedCustomInfoKeys(initialKeys: string[], customInfo: Record<string, string>): string[];
export declare function buildCreateLiveParams(options: {
    formData: CreateLiveFormData;
    coverUrl: string;
    customInfos: CustomInfo[];
    useObsStreaming: boolean;
}): CreateLiveSubmitParams;
export declare function customInfoRecordToList(customInfo: unknown): CustomInfo[];
export declare function detectImageAspectRatio(url: string): Promise<number>;
