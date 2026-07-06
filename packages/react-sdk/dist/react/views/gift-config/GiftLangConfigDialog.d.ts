import { type GiftLangConfig, type LangKey } from '../../../common';
interface GiftLangConfigDialogProps {
    visible: boolean;
    editingId: string;
    giftLangConfig: GiftLangConfig;
    onClose: () => void;
    onEditLang: (giftId: string, lang: LangKey) => void;
    onClearLang: (giftId: string, lang: LangKey) => void;
}
export default function GiftLangConfigDialog({ visible, editingId, giftLangConfig, onClose, onEditLang, onClearLang, }: GiftLangConfigDialogProps): import("react").JSX.Element;
export {};
