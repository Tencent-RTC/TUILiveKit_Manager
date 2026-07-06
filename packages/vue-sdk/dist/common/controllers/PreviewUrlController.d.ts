/**
 * Framework-agnostic preview URL controller
 * Manages ObjectURL lifecycle (creation, updates, cleanup)
 *
 * @example
 * ```ts
 * const controller = new PreviewUrlController();
 *
 * // Create preview from file
 * const url = controller.setPreview(file);
 *
 * // Clear preview
 * controller.clearPreview();
 *
 * // Cleanup on destroy
 * controller.cleanup();
 * ```
 */
export declare class PreviewUrlController {
    private currentUrl;
    /**
     * Set preview from File/Blob (or null to clear)
     * Automatically revokes old URL if exists
     *
     * @param file - File/Blob to create preview from, or null to clear
     * @returns Preview URL (empty string if null)
     */
    setPreview(file: File | Blob | null): string;
    /**
     * Clear current preview URL
     * Revokes ObjectURL to free memory
     */
    clearPreview(): void;
    /**
     * Cleanup all resources
     * Should be called on component unmount
     */
    cleanup(): void;
    /**
     * Get current preview URL
     * @returns Current URL (empty string if none)
     */
    getCurrentUrl(): string;
    /**
     * Check if preview exists
     */
    hasPreview(): boolean;
}
