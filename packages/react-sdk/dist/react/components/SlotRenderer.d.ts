import React from 'react';
import type { ComponentType, ElementType, ReactElement, ReactNode } from 'react';
export type ReactSlotComponent<P extends Record<string, unknown> = Record<string, unknown>> = ComponentType<P> | ElementType | ReactElement | null | undefined;
interface SlotRendererProps<P extends Record<string, unknown> = Record<string, unknown>> {
    slot?: ReactSlotComponent<P>;
    props?: P;
    fallback?: ReactNode;
    className?: string;
}
export default function SlotRenderer<P extends Record<string, unknown> = Record<string, unknown>>({ slot, props, fallback, className, }: SlotRendererProps<P>): React.JSX.Element | null;
export {};
