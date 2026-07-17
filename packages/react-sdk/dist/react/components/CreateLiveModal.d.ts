import type { ElementType } from '../../react';
import type { CreateLiveParams, MonitorLiveInfo } from '../../types/live';
import './CreateLiveModal.css';
interface CreateLiveModalProps {
    visible: boolean;
    onClose: () => void;
    onSuccess: () => void;
    uploadEnabled?: boolean;
    extraFieldsSlot?: ElementType;
    onCreate: (params: CreateLiveParams) => Promise<MonitorLiveInfo>;
}
export default function CreateLiveModal({ visible, onClose, onSuccess, uploadEnabled, extraFieldsSlot, onCreate: onCreate }: CreateLiveModalProps): import("../../react").JSX.Element;
export {};
