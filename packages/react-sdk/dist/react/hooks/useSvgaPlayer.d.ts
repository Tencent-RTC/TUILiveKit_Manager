/**
 * SVGA Player initialization options
 */
export interface UseSvgaPlayerOptions {
    /** Number of loops (0 = infinite) */
    loop?: number;
    /** Whether to start playing immediately */
    autoPlay?: boolean;
}
/**
 * React Hook for managing SVGA player lifecycle
 * Automatically handles player creation, cleanup, and animation control
 *
 * @example
 * ```tsx
 * const { containerRef, playUrl, stopAnimation, isPlaying } = useSvgaPlayer();
 *
 * // Play SVGA from URL
 * playUrl('https://example.com/animation.svga');
 *
 * // Stop animation
 * stopAnimation();
 *
 * // Render container
 * <div ref={containerRef} className="svga-container" />
 * ```
 */
export declare function useSvgaPlayer(options?: UseSvgaPlayerOptions): {
    /** Container ref (attach to div) */
    containerRef: import("react").RefObject<HTMLDivElement>;
    /** Play SVGA from URL */
    playUrl: (url: string) => Promise<void>;
    /** Play SVGA from File/Blob */
    playFile: (file: File | Blob) => Promise<void>;
    /** Stop animation */
    stopAnimation: () => void;
    /** Start animation */
    startAnimation: () => void;
    /** Whether animation is playing */
    readonly isPlaying: boolean;
};
