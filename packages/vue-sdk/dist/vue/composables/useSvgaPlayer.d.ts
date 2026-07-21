import { type Ref } from '../../vue';
/**
 * SVGA Player initialization options
 */
export interface UseSvgaPlayerOptions {
    /** Whether to loop the animation */
    loop?: number;
    /** Whether to start playing immediately */
    autoPlay?: boolean;
}
/**
 * Vue Composable for managing SVGA player lifecycle
 * Automatically handles player creation, cleanup, and animation control
 *
 * @example
 * ```vue
 * <script setup>
 * const { containerRef, playUrl, stopAnimation, isPlaying } = useSvgaPlayer();
 *
 * // Play SVGA from URL
 * playUrl('https://example.com/animation.svga');
 *
 * // Stop animation
 * stopAnimation();
 * </script>
 *
 * <template>
 *   <div ref="containerRef" class="svga-container" />
 * </template>
 * ```
 */
export declare function useSvgaPlayer(options?: UseSvgaPlayerOptions): {
    /** Container ref (attach to div) */
    containerRef: Ref<HTMLDivElement | null, HTMLDivElement | null>;
    /** Play SVGA from URL */
    playUrl: (url: string) => Promise<void>;
    /** Play SVGA from File/Blob */
    playFile: (file: File | Blob) => Promise<void>;
    /** Stop animation */
    stopAnimation: () => void;
    /** Start animation */
    startAnimation: () => void;
    /** Whether animation is playing */
    isPlaying: Ref<boolean, boolean>;
};
