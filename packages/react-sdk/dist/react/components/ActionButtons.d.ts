import type { MouseEvent, ReactNode } from '../../react';
import '../../common/style/action-buttons.css';
export interface ActionButtonItem {
    key: string;
    label: ReactNode;
    title?: string;
    icon?: ReactNode;
    danger?: boolean;
    disabled?: boolean;
    suffixCaret?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
interface ActionButtonsProps {
    actions: ActionButtonItem[];
    className?: string;
    disabled?: boolean;
}
export default function ActionButtons({ actions, className, disabled }: ActionButtonsProps): import("../../react").JSX.Element;
export {};
