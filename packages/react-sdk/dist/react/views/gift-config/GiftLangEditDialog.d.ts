import { type LangKey } from '../../../common';
import type { LangEditForm } from './types';
interface GiftLangEditDialogProps {
    visible: boolean;
    editingGiftForLang: string;
    editingLang: LangKey | null;
    langEditForm: LangEditForm;
    saving: boolean;
    onFormChange: (form: LangEditForm) => void;
    onSave: () => void;
    onClose: () => void;
}
export default function GiftLangEditDialog({ visible, editingGiftForLang, editingLang, langEditForm, saving, onFormChange, onSave, onClose, }: GiftLangEditDialogProps): import("../../../react").JSX.Element;
export {};
