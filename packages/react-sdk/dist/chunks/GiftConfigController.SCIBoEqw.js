import { c as p, r as f, f as g, i as d, a as u, g as I, L as c, b as y, G as L } from "./utils.DS_Ww-c-.js";
import { I as s } from "./en-US.CklcmnrB.js";
import { c as C } from "./index.BmMLgqu-.js";
const S = { name: "", description: "" };
class b {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      giftList: [],
      displayList: [],
      categoryList: [],
      searchInput: "",
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      langConfigVisible: !1,
      giftLangConfig: p(),
      langEditVisible: !1,
      editingLang: null,
      editingGiftForLang: "",
      langEditForm: { ...S },
      categoryEditVisible: !1,
      editingCategoryGift: null,
      allCategories: [],
      giftCategoryIds: [],
      categorySelectVisible: !1,
      selectedCategoryId: "",
      categoryDeleteVisible: !1,
      deletingCategoryId: "",
      deleteDialogVisible: !1,
      deletingItem: null
    }, this.listeners = /* @__PURE__ */ new Set(), this.destroyed = !1, this.fetching = !1, this.getState = () => this.state, this.subscribe = (e) => (this.listeners.add(e), () => {
      this.listeners.delete(e);
    });
  }
  setState(t) {
    this.destroyed || (this.state = { ...this.state, ...t }, this.notify());
  }
  notify() {
    this.listeners.forEach((t) => t());
  }
  dispose() {
    this.destroyed = !0, this.listeners.clear();
  }
  // -------- 列表加载 --------
  /**
   * 初始加载（防止 React StrictMode 等场景的重复请求）。
   */
  async init() {
    this.fetching || (this.fetching = !0, await this.fetchGiftList());
  }
  async fetchGiftList() {
    this.setState({ loading: !0 });
    try {
      const t = await this.opts.actions.fetchGiftList(), e = t.giftCategoryList || [], { gifts: i, categories: o } = f({
        gifts: t.giftList || [],
        categories: e
      });
      this.setState({
        giftList: i,
        displayList: g(i, this.state.searchInput),
        categoryList: o.length > 0 ? o : this.state.categoryList
      });
    } catch (t) {
      console.error(this.opts.t(s.GET_GIFT_LIST_FAILED), t);
      const e = this.formatError(t, this.opts.t(s.GET_GIFT_LIST_FAILED));
      this.opts.toast.error(e), this.setState({ giftList: [], displayList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    if (this.state.giftList.length === 0) return;
    const { gifts: t, categories: e } = f({
      gifts: this.state.giftList,
      categories: this.state.categoryList
    });
    this.setState({
      giftList: t,
      categoryList: e,
      displayList: g(t, this.state.searchInput)
    });
  }
  // -------- 搜索 --------
  setSearchInput(t) {
    const e = String(t ?? "");
    this.setState({ searchInput: e }), !d(e, L) && this.setState({ displayList: g(this.state.giftList, e) });
  }
  isSearchInputTooLong() {
    return d(this.state.searchInput, L);
  }
  /** 触发搜索（本地模糊匹配 ID/名称/描述/类别） */
  search() {
    const t = this.state.searchInput.trim();
    if (!t) return;
    if (this.isSearchInputTooLong()) {
      this.opts.toast.error(this.opts.t(s.INPUT_TOO_LONG));
      return;
    }
    const e = g(this.state.giftList, this.state.searchInput);
    e.length > 0 ? (this.setState({ displayList: e }), this.opts.toast.success(this.opts.t("Found results", { count: e.length }))) : (this.setState({ displayList: [] }), this.opts.toast.error(this.opts.t("No gift found", { keyword: t })));
  }
  clearSearch() {
    this.setState({ searchInput: "", displayList: this.state.giftList });
  }
  // -------- 导航 / 复制 --------
  goToCategoryManagement() {
    u(this.state.categoryList), this.opts.onNavigateToCategoryManagement();
  }
  async copyGiftId(t) {
    await C(String(t || "")), this.opts.toast.success(this.opts.t(s.COPY_LABEL_COPIED, { label: this.opts.t(s.GIFT_ID) }));
  }
  // -------- 新增 / 编辑弹窗（仅切换可见性，formData 由视图层管理） --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      dialogVisible: !0
    });
  }
  openEditDialog(t) {
    this.setState({
      isEdit: !0,
      editingId: t.id,
      dialogVisible: !0
    });
  }
  closeDialog() {
    this.setState({ dialogVisible: !1 });
  }
  /**
   * 提交礼物表单。视图层负责完成校验、上传解析后传入归一化 payload。
   * 成功后会自动关闭弹窗并刷新列表。
   * 失败抛出原始错误，视图层可在调用处捕获以保留 submitting 状态。
   */
  async submitGift(t) {
    try {
      this.state.isEdit ? await this.opts.actions.updateGift({
        giftId: this.state.editingId,
        name: t.name,
        iconUrl: t.iconUrl,
        price: t.price,
        animationUrl: t.animationUrl,
        level: t.level || void 0,
        description: t.description
      }) : await this.opts.actions.createGift({
        id: t.id || "",
        name: t.name,
        iconUrl: t.iconUrl,
        price: t.price,
        animationUrl: t.animationUrl,
        enabled: t.enabled,
        level: t.level || void 0,
        description: t.description,
        extensionInfo: t.extensionInfo?.trim() || void 0
      }), this.opts.toast.success(
        this.opts.t(this.state.isEdit ? s.GIFT_UPDATED_SUCCESSFULLY : s.GIFT_CREATED_SUCCESSFULLY)
      ), await this.fetchGiftList(), this.setState({ dialogVisible: !1 });
    } catch (e) {
      throw this.opts.toast.error(this.opts.t(s.OPERATION_FAILED, {
        error: this.extractErrorInfo(e)
      })), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openGiftLangConfigDialog(t) {
    const e = this.state.giftList.find((a) => a.id === t), { config: i, langsToFetch: o } = I(e?.languageList);
    if (this.setState({
      editingId: t,
      giftLangConfig: i,
      langConfigVisible: !0
    }), o.length !== 0)
      try {
        const a = await Promise.allSettled(
          o.map(async (n) => {
            const l = await this.opts.actions.getGiftLanguage({
              giftId: t,
              language: c[n].code
            });
            return { langKey: n, result: l };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const r = { ...this.state.giftLangConfig };
        for (const n of a)
          if (n.status === "fulfilled") {
            const { langKey: l, result: h } = n.value;
            r[l] = { name: h.name || "", description: h.description || "" };
          }
        this.setState({ giftLangConfig: r });
      } catch {
      }
  }
  closeGiftLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    const i = this.state.giftList.find((r) => r.id === t), o = y(i?.languageList, e);
    let a = o.form;
    if (o.needsFetch)
      try {
        const r = await this.opts.actions.getGiftLanguage({ giftId: t, language: o.langCode });
        a = { name: r.name || "", description: r.description || "" };
      } catch {
      }
    this.setState({
      editingGiftForLang: t,
      editingLang: e,
      langEditForm: a,
      langEditVisible: !0
    });
  }
  setLangEditForm(t) {
    this.setState({
      langEditForm: { ...this.state.langEditForm, ...t }
    });
  }
  closeLangEditDialog() {
    this.setState({ langEditVisible: !1 });
  }
  /**
   * 保存单语言编辑。校验逻辑（字节长度等）由视图层在调用前完成，
   * 控制器只负责调 API + toast + 刷新。
   */
  async saveLangEdit() {
    const { editingGiftForLang: t, editingLang: e, langEditForm: i, langConfigVisible: o } = this.state;
    if (!(!t || !e))
      try {
        i.name && (await this.opts.actions.setGiftLanguage({
          giftId: t,
          language: c[e].code,
          name: i.name,
          description: i.description
        }), this.opts.toast.success(this.opts.t(s.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchGiftList(), o && this.state.editingLang === e && this.setState({
          giftLangConfig: {
            ...this.state.giftLangConfig,
            [e]: { ...i }
          }
        });
      } catch (a) {
        this.opts.toast.error(this.opts.t(s.OPERATION_FAILED, {
          error: this.extractErrorInfo(a)
        }));
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftLanguage({ giftId: t, language: c[e].code }), this.opts.toast.success(this.opts.t(s.LANGUAGE_CONFIG_CLEARED)), this.setState({
        giftLangConfig: {
          ...this.state.giftLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchGiftList();
    } catch (i) {
      this.opts.toast.error(this.opts.t(s.OPERATION_FAILED, {
        error: this.extractErrorInfo(i)
      }));
    }
  }
  // -------- 类别编辑弹窗 --------
  openCategoryEditDialog(t) {
    const e = this.state.categoryList.map((a) => ({
      id: String(a.id || ""),
      name: a.name || "",
      giftIds: (a.giftIds || []).map(String)
    })), i = (t.categoryIds || []).map(String);
    let o = i;
    i.length === 0 && e.length > 0 && (o = e.filter((a) => a.giftIds.includes(String(t.id))).map((a) => a.id)), this.setState({
      editingCategoryGift: t,
      allCategories: e,
      giftCategoryIds: o,
      categorySelectVisible: !1,
      selectedCategoryId: "",
      categoryEditVisible: !0
    });
  }
  closeCategoryEditDialog() {
    this.setState({ categoryEditVisible: !1 });
  }
  // 类别选择子弹窗 / 内联弹层
  openCategorySelectDialog() {
    this.setState({ categorySelectVisible: !0, selectedCategoryId: "" });
  }
  closeCategorySelectDialog() {
    this.setState({ categorySelectVisible: !1 });
  }
  setCategorySelectVisible(t) {
    this.setState({ categorySelectVisible: t });
  }
  setSelectedCategoryId(t) {
    this.setState({ selectedCategoryId: t });
  }
  /** 当前可添加的类别（计算属性，由视图层调用而非自动派生） */
  getAvailableCategories() {
    return this.state.allCategories.filter(
      (t) => !this.state.giftCategoryIds.includes(t.id)
    );
  }
  async confirmAddCategory() {
    const { editingCategoryGift: t, selectedCategoryId: e } = this.state;
    if (!(!t || !e))
      try {
        await this.opts.actions.addGiftCategoryRelations({
          giftId: t.id,
          categoryIds: [e]
        }), this.setState({
          giftCategoryIds: [...this.state.giftCategoryIds, e],
          categorySelectVisible: !1,
          selectedCategoryId: ""
        }), this.opts.toast.success(this.opts.t(s.CATEGORY_ADDED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(s.OPERATION_FAILED, {
          error: this.extractErrorInfo(i)
        }));
      }
  }
  // 类别移除确认
  requestRemoveCategory(t) {
    this.setState({ deletingCategoryId: t, categoryDeleteVisible: !0 });
  }
  cancelRemoveCategory() {
    this.setState({ categoryDeleteVisible: !1 });
  }
  async confirmRemoveCategory() {
    const { editingCategoryGift: t, deletingCategoryId: e } = this.state;
    if (!(!t || !e))
      try {
        await this.opts.actions.deleteGiftCategoryRelations({
          giftId: t.id,
          categoryIds: [e]
        }), this.setState({
          giftCategoryIds: this.state.giftCategoryIds.filter((i) => i !== e)
        }), this.opts.toast.success(this.opts.t(s.CATEGORY_REMOVED)), await this.fetchGiftList();
      } catch (i) {
        this.opts.toast.error(this.opts.t(s.OPERATION_FAILED, {
          error: this.extractErrorInfo(i)
        }));
      } finally {
        this.setState({ categoryDeleteVisible: !1, deletingCategoryId: "" });
      }
  }
  /** 根据类别 ID 取本地化名称（视图层渲染用） */
  getCategoryName(t) {
    return this.state.allCategories.find((i) => String(i.id) === String(t))?.name || t;
  }
  // -------- 礼物删除确认 --------
  requestDelete(t) {
    this.setState({ deletingItem: t, deleteDialogVisible: !0 });
  }
  cancelDelete() {
    this.setState({ deleteDialogVisible: !1 });
  }
  async confirmDelete() {
    const t = this.state.deletingItem;
    if (t)
      try {
        await this.opts.actions.deleteGift(t.id), this.opts.toast.success(this.opts.t(s.GIFT_DELETED_SUCCESSFULLY)), await this.fetchGiftList();
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(s.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return e?.ErrorInfo || e?.message || this.opts.t(s.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const i = t;
    return i?.ErrorInfo ? `${e}: ${i.ErrorInfo}` : i?.message ? `${e}: ${i.message}` : e;
  }
}
export {
  b as G
};
