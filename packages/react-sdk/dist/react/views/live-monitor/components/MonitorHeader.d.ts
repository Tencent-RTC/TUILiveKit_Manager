import React from '../../../../react';
interface MonitorHeaderProps {
    searchInput: string;
    onSearchInputChange: (value: string) => void;
    onSearch: () => void;
    onClearSearch: () => void;
    onRefresh: () => void;
    refreshing: boolean;
}
/**
 * 监控页面头部组件
 * 包含搜索框和刷新按钮
 */
declare const MonitorHeader: React.FC<MonitorHeaderProps>;
export default MonitorHeader;
