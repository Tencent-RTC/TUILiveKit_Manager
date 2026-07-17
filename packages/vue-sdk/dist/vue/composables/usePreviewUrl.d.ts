/**
 * Vue Composable for managing preview URL lifecycle
 * Thin wrapper around PreviewUrlController for Vue reactivity
 *
 * @example
 * ```vue
 * <script setup>
 * const { previewUrl, setPreview, clearPreview } = usePreviewUrl();
 *
 * // Create preview from file
 * setPreview(file);
 *
 * // Clear preview
 * clearPreview();
 *
 * // Auto cleanup on unmount
 * </script>
 * ```
 */
export declare function usePreviewUrl(): {
    /** Current preview URL (empty string if none) */
    previewUrl: import("../../vue").Ref<string, string>;
    /** Set preview from File/Blob (or null to clear) */
    setPreview: (file: File | Blob | null) => void;
    /** Clear preview URL */
    clearPreview: () => void;
    /** Whether preview exists */
    readonly hasPreview: boolean;
};
