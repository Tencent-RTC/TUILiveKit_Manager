import type { GiftItem } from '../../../common';
interface GiftDeleteDialogProps {
    visible: boolean;
    deletingItem: GiftItem | null;
    loading: boolean;
    onConfirm: () => void;
    onClose: () => void;
}
export default function GiftDeleteDialog({ visible, deletingItem, loading, onConfirm, onClose, }: GiftDeleteDialogProps): import("../../../react").JSX.Element;
export {};
