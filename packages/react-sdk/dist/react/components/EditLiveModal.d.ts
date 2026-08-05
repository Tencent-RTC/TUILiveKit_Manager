import type { ElementType } from 'react';
import type { MonitorLiveInfo, UpdateLiveParams } from '../../types/live';
import './EditLiveModal.css';
interface EditLiveModalProps {
    visible: boolean;
    live: MonitorLiveInfo | null;
    onClose: () => void;
    onSuccess: (updatedFields: {
        liveName: string;
        coverUrl: string;
    }) => void;
    uploadEnabled?: boolean;
    extraFieldsSlot?: ElementType;
    onUpdate: (liveId: string, params: UpdateLiveParams) => Promise<any>;
    onFetchDetail: (liveId: string) => Promise<any>;
}
export default function EditLiveModal({ visible, live, onClose, onSuccess, uploadEnabled, extraFieldsSlot, onUpdate, onFetchDetail }: EditLiveModalProps): import("react").JSX.Element | null;
export {};
