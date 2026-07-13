/**
 * React Hook for managing preview URL lifecycle
 * Thin wrapper around PreviewUrlController for React state binding
 *
 * @example
 * ```tsx
 * const { previewUrl, setPreview, clearPreview } = usePreviewUrl();
 *
 * // Create preview from file
 * setPreview(file);
 *
 * // Clear preview
 * clearPreview();
 *
 * // Auto cleanup on unmount
 * ```
 */
export declare function usePreviewUrl(): {
    /** Current preview URL (empty string if none) */
    previewUrl: string;
    /** Set preview from File/Blob (or null to clear) */
    setPreview: (file: File | Blob | null) => void;
    /** Clear preview URL */
    clearPreview: () => void;
    /** Whether preview exists */
    hasPreview: boolean;
};
