import { resolveAnchorAvatarUrl, resolveAnchorDisplayName } from '../../common';
export { resolveAnchorAvatarUrl, resolveAnchorDisplayName };
interface AnchorAvatarProps {
    className?: string;
    name?: string;
    src?: string;
    title?: string;
}
export default function AnchorAvatar({ className, name, src, title, }: AnchorAvatarProps): import("react").JSX.Element;
