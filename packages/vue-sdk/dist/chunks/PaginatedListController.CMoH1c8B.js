function e() {
  return /* @__PURE__ */ new Map([[1, ""]]);
}
class i {
  constructor(a) {
    this.hasMore = !0, this.pageData = [], this.loading = !1, this.isLoading = !1, this.listeners = /* @__PURE__ */ new Set(), this.pageSize = a.pageSize ?? 8, this.pageCursors = a.initialPageCursors ?? e(), this.currentPage = a.initialPage ?? 1, this.fetchPageFn = a.fetchPage;
  }
  // -------- 订阅 / 状态 --------
  getSnapshot() {
    return {
      pageData: this.pageData,
      currentPage: this.currentPage,
      hasMore: this.hasMore,
      loading: this.loading
    };
  }
  subscribe(a) {
    return this.listeners.add(a), () => {
      this.listeners.delete(a);
    };
  }
  notify() {
    const a = this.getSnapshot();
    console.log("[PaginatedListController] notify called, listeners:", this.listeners.size, ", snapshot:", { pageDataLength: a.pageData.length, loading: a.loading, currentPage: a.currentPage }), this.listeners.forEach((t) => t(a));
  }
  // -------- 防止并发 --------
  // isLoading 已在顶部声明，这里不再重复
  // -------- 核心翻页 --------
  /**
   * 回到首页
   */
  async goToFirstPage() {
    if (this.isLoading) {
      console.warn("[PaginatedListController] goToFirstPage: already loading, skipping");
      return;
    }
    this.pageCursors = e(), this.currentPage = 1, await this.loadPage();
  }
  /**
   * 上一页
   */
  async prevPage() {
    if (this.isLoading) {
      console.warn("[PaginatedListController] prevPage: already loading, skipping");
      return;
    }
    this.currentPage <= 1 || (this.currentPage -= 1, await this.loadPage());
  }
  /**
   * 下一页
   */
  async nextPage() {
    if (this.isLoading) {
      console.warn("[PaginatedListController] nextPage: already loading, skipping");
      return;
    }
    this.hasMore && (this.currentPage += 1, await this.loadPage());
  }
  /**
   * 刷新当前页
   */
  async refreshCurrentPage() {
    if (this.isLoading) {
      console.warn("[PaginatedListController] refreshCurrentPage: already loading, skipping");
      return;
    }
    await this.loadPage();
  }
  // -------- 内部加载 --------
  async loadPage() {
    this.isLoading = !0, this.loading = !0, this.notify();
    try {
      const a = await this.fetchPageFn({
        page: this.currentPage,
        pageCursors: this.pageCursors,
        count: this.pageSize
      });
      this.pageData = a.list, this.pageCursors = a.pageCursors, this.hasMore = a.hasMoreData;
    } catch (a) {
      console.error("[PaginatedListController] loadPage failed:", a), this.pageData = [], this.hasMore = !1;
    } finally {
      this.isLoading = !1, this.loading = !1, this.notify();
    }
  }
  // -------- 清理 --------
  destroy() {
    this.pageData = [], this.pageCursors.clear(), this.listeners.clear();
  }
}
export {
  i as P
};
