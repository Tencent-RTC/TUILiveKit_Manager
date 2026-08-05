import React from 'react';
interface MonitorPaginationProps {
    currentPage: number;
    hasMoreData: boolean;
    loading: boolean;
    onPrevPage: () => void;
    onNextPage: () => void;
    onGoToFirstPage: () => void;
}
/**
 * 监控页面分页组件（简化版：只支持 首页/上一页/下一页）
 */
declare const MonitorPagination: React.FC<MonitorPaginationProps>;
export default MonitorPagination;
