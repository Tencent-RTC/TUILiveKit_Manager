/**
 * 全局 ErrorBoundary
 *
 * 捕获组件渲染期间的未处理异常，显示回退 UI 而非白屏。
 * 同时上报错误到 RUM 用于线上监控。
 */
import { Component, type ReactNode } from 'react';
import { LiveManagerError } from '../../common/error';
interface Props {
    children: ReactNode;
    /** 自定义回退 UI（可选） */
    fallback?: (error: LiveManagerError, retry: () => void) => ReactNode;
}
interface State {
    error: LiveManagerError | null;
}
export declare class AppErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(error: unknown): State;
    componentDidCatch(error: unknown, info: {
        componentStack: string;
    }): void;
    handleRetry: () => void;
    render(): string | number | boolean | import("react").JSX.Element | Iterable<ReactNode> | null | undefined;
}
export {};
