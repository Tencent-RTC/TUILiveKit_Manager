import { type GiftFormData } from './types';
import { type SubmitGiftPayload } from '../../../common';
interface GiftFormDialogProps {
    visible: boolean;
    isEdit: boolean;
    editingId: string;
    formData: GiftFormData;
    uploadEnabled: boolean;
    onFormDataChange: (formData: GiftFormData) => void;
    onSubmitGift: (payload: SubmitGiftPayload) => Promise<void>;
    onClose: () => void;
}
export default function GiftFormDialog({ visible, isEdit, editingId, formData, uploadEnabled, onFormDataChange, onSubmitGift, onClose, }: GiftFormDialogProps): import("react").JSX.Element;
export {};
