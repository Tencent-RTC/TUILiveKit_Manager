import type { GiftItem } from '../../../common';
import type { FixedHeaderTableColumn } from '../../components/FixedHeaderTable';
import type { LangKey } from '../../../common/components/gift-table/types';
type ColumnRenderOptions = {
    onEdit: (item: GiftItem) => void;
    onDelete: (item: GiftItem) => void;
    onOpenCategoryEdit: (item: GiftItem) => void;
    onOpenLangEdit: (giftId: string, lang: LangKey) => void;
    onOpenGiftLangConfig: (giftId: string) => void;
    onCopyId: (id: string) => Promise<void>;
};
/**
 * 获取礼物表格列配置 Hook
 * 布局配置来自 common getGiftColumnLayouts()，React 端仅叠加 title 和 render
 */
export declare function useGiftTableColumns(): (opts: ColumnRenderOptions) => FixedHeaderTableColumn<GiftItem>[];
export {};
