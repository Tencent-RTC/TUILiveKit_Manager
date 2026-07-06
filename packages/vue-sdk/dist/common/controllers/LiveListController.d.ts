/**
 * 框架无关的直播列表控制器
 *
 * 集中管理直播列表页所有数据状态：分页、搜索、详情弹窗、删除确认、
 * 创建 / 编辑弹窗可见性等。视图层（React / Vue）只负责订阅 state 并
 * 渲染，所有副作用与状态变化都在 controller 内完成，由此实现
 * 两套视图最大程度的代码复用。
 *
 * 视图层接入方式：
 *  - React: 通过 `useSyncExternalStore(controller.subscribe, controller.getState)` 订阅
 *  - Vue:   通过 `shallowRef` + `controller.subscribe(() => ref.value = controller.getState())` 订阅
 */
import type { MonitorLiveInfo, PushInfo } from '../../types/live';
import { LIVE_SEARCH_MAX_BYTES, formatLiveListTime, isLiveSearchInputTooLong } from '../live-list';
export type Translator = (key: string, vars?: Record<string, unknown>) => string;
export interface LiveListToast {
    success(message: string): void;
    error(message: string): void;
}
export interface LiveListControllerOptions {
    /** 解散直播（来自 useLiveMonitorState().endLive） */
    endLive: (liveId: string) => Promise<void>;
    /** 当用户点击进入直播时触发，由视图层路由跳转 */
    onEnterLive: (liveId: string) => void;
    /** 翻译函数 */
    t: Translator;
    /** Toast 适配器，由视图层根据所用 UI 库提供 */
    toast: LiveListToast;
    /** 获取直播详情（来自 useLiveMonitorState().fetchLiveDetail，内含 OBS 推流信息） */
    fetchLiveDetail: (liveId: string) => Promise<MonitorLiveInfo | null>;
}
export type ObsRobotStatus = 'checking' | 'creating' | 'seating' | 'ready' | 'error' | 'none';
export interface LiveListObsModalState {
    visible: boolean;
    live: MonitorLiveInfo | null;
    robotId: string;
    streamInfo: PushInfo | null;
    robotStatus: ObsRobotStatus;
    robotStatusText: string;
    actionLoading: string;
    errorMessage: string;
}
export interface LiveListConfirmDialogState {
    visible: boolean;
    title: string;
    content: string;
    liveId: string;
}
export interface LiveListState {
    lives: MonitorLiveInfo[];
    loading: boolean;
    refreshing: boolean;
    currentPage: number;
    hasMoreData: boolean;
    searchInput: string;
    obsModal: LiveListObsModalState;
    confirmDialog: LiveListConfirmDialogState;
    isCreateModalVisible: boolean;
    isEditModalVisible: boolean;
    editingLive: MonitorLiveInfo | null;
}
export type LiveRowActionKey = 'enter' | 'detail' | 'edit' | 'delete';
export interface LiveRowActionDescriptor {
    key: LiveRowActionKey;
    label: string;
    title: string;
    danger?: boolean;
    onClick: () => void;
}
export interface BuildLiveRowActionsOptions {
    live: MonitorLiveInfo;
    t: Translator;
    onEnter: (liveId: string) => void;
    onDetail: (live: MonitorLiveInfo) => void;
    onEdit: (live: MonitorLiveInfo) => void;
    onDelete: (live: MonitorLiveInfo) => void;
}
export declare function buildLiveRowActions(options: BuildLiveRowActionsOptions): LiveRowActionDescriptor[];
/**
 * 根据 fetchLiveDetail 返回的 MonitorLiveInfo（含 OBS 推流信息）构建 obsModal 快照。
 * 视图层只需 `setState({ ...state, obsModal: snapshot })` 即可。
 */
export declare function buildObsModalState(live: MonitorLiveInfo, t: Translator, fetchLiveDetail: (liveId: string) => Promise<MonitorLiveInfo | null>): Promise<LiveListObsModalState>;
export declare class LiveListController {
    private readonly opts;
    private state;
    private listeners;
    /** 房间列表分页核心（与 LiveMonitor 共用） */
    private pagination;
    private destroyed;
    private isSearchMode;
    constructor(opts: LiveListControllerOptions);
    getState: () => LiveListState;
    subscribe: (listener: () => void) => (() => void);
    private setState;
    private notify;
    dispose(): void;
    init(): Promise<void>;
    loadPage(page: number): Promise<void>;
    refresh(): Promise<void>;
    goToPage(page: number): void;
    setSearchInput(value: string): void;
    isSearchInputTooLong(): boolean;
    search(): Promise<void>;
    clearSearch(): Promise<void>;
    enterLive(liveId: string): void;
    copyText(text: string, label?: string): Promise<void>;
    showDetail(live: MonitorLiveInfo): Promise<void>;
    closeDetail(): void;
    requestDelete(live: MonitorLiveInfo): void;
    cancelDelete(): void;
    confirmDelete(): Promise<void>;
    openCreateModal(): void;
    closeCreateModal(): void;
    /** 创建成功后调用，关闭弹窗 + 刷新 */
    onLiveCreated(): void;
    openEditModal(live: MonitorLiveInfo): void;
    closeEditModal(): void;
    /** 编辑成功后调用，局部更新 lives，避免整页刷新 */
    onLiveEdited(updatedFields: {
        liveName: string;
        coverUrl: string;
    }): void;
}
export { formatLiveListTime, isLiveSearchInputTooLong, LIVE_SEARCH_MAX_BYTES };
