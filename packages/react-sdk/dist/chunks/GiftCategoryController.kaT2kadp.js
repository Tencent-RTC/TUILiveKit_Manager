import { f as l, L as d } from "./constants.BKgq3oBR.js";
import { a as u, r as y } from "./utils.Cdo9eusG.js";
import { Y as o } from "./en-US.DXdmRfHg.js";
import { c as m } from "./index.B5lyUA6W.js";
const A = 10, G = 20, T = 20, O = 60, L = {
  categoryId: "",
  name: "",
  description: ""
}, E = {
  sc: { name: "", description: "" },
  tc: { name: "", description: "" },
  en: { name: "", description: "" }
}, p = { name: "", description: "" };
class F {
  constructor(t) {
    this.opts = t, this.state = {
      loading: !1,
      categoryList: [],
      dialogVisible: !1,
      isEdit: !1,
      editingId: "",
      formData: { ...L },
      langConfigVisible: !1,
      categoryLangConfig: C(E),
      langEditVisible: !1,
      editingLang: null,
      editingCategoryForLang: "",
      langEditForm: { ...p },
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
   * 优先消费 sessionStorage 中由礼物管理页带过来的缓存。
   */
  async init() {
    this.fetching || (this.fetching = !0, await this.fetchCategoryList(!0));
  }
  /**
   * 获取类别列表。
   * @param useCache 是否优先使用 sessionStorage 缓存（仅首次进入页面有效）
   */
  async fetchCategoryList(t = !0) {
    if (t) {
      const e = u();
      if (e.length > 0) {
        this.setState({ categoryList: e });
        return;
      }
    }
    this.setState({ loading: !0 });
    try {
      const e = await this.opts.actions.fetchGiftList();
      this.setState({ categoryList: e.giftCategoryList || [] });
    } catch (e) {
      console.error(this.opts.t(o.GET_CATEGORY_LIST_FAILED), e), this.opts.toast.error(this.formatError(e, this.opts.t(o.GET_CATEGORY_LIST_FAILED))), this.setState({ categoryList: [] });
    } finally {
      this.setState({ loading: !1 });
    }
  }
  /**
   * 当 i18next 触发 languageChanged 时调用。
   * 仅本地重新映射 name/description，不重新请求 API。
   */
  onLanguageChanged() {
    this.state.categoryList.length !== 0 && this.setState({ categoryList: y(this.state.categoryList) });
  }
  // -------- 导航 / 复制 --------
  goBack() {
    this.opts.onNavigateBack();
  }
  async copyCategoryId(t) {
    await m(String(t || "")), this.opts.toast.success(
      this.opts.t(o.COPY_LABEL_COPIED, { label: this.opts.t(o.CATEGORY_ID) })
    );
  }
  // -------- 新增 / 编辑弹窗 --------
  openCreateDialog() {
    this.setState({
      isEdit: !1,
      editingId: "",
      formData: { ...L },
      dialogVisible: !0
    });
  }
  openEditDialog(t) {
    this.setState({
      isEdit: !0,
      editingId: t.id,
      formData: {
        categoryId: t.id,
        name: t.name || "",
        description: t.description || ""
      },
      dialogVisible: !0
    });
  }
  closeDialog() {
    this.setState({ dialogVisible: !1 });
  }
  /** 视图层在 v-model / onChange 时调用，更新表单字段 */
  setFormData(t) {
    this.setState({ formData: { ...this.state.formData, ...t } });
  }
  /**
   * 提交类别表单。视图层负责字段非空 / 字节长度校验后传入归一化 payload。
   * 成功后会自动关闭弹窗并刷新列表。
   * 失败抛出原始错误，视图层可在调用处捕获以保留 submitting 状态。
   */
  async submitForm(t) {
    try {
      this.state.isEdit ? (await this.opts.actions.updateGiftCategory({
        categoryId: this.state.editingId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(o.CATEGORY_UPDATED_SUCCESSFULLY))) : (await this.opts.actions.createGiftCategory({
        categoryId: t.categoryId,
        defaultName: t.name,
        defaultDesc: t.description,
        extensionInfo: ""
      }), this.opts.toast.success(this.opts.t(o.CATEGORY_CREATED_SUCCESSFULLY))), this.setState({ dialogVisible: !1 }), await this.fetchCategoryList(!1);
    } catch (e) {
      throw this.opts.toast.error(
        this.opts.t(o.OPERATION_FAILED, { error: this.extractErrorInfo(e) })
      ), e;
    }
  }
  // -------- 多语言配置弹窗 --------
  async openLangConfigDialog(t) {
    const e = this.state.categoryList.find((r) => r.id === t), s = C(E), g = [];
    if (e?.languageList && e.languageList.length > 0)
      for (const r of e.languageList) {
        const i = h(r);
        i.langKey && (i.name || i.description ? s[i.langKey] = { name: i.name, description: i.description } : g.push(i.langKey));
      }
    if (this.setState({
      editingId: t,
      categoryLangConfig: s,
      langConfigVisible: !0
    }), g.length !== 0)
      try {
        const r = await Promise.allSettled(
          g.map(async (a) => {
            const c = await this.opts.actions.getGiftCategoryLanguage(
              t,
              l[a].code
            );
            return { langKey: a, result: c };
          })
        );
        if (!this.state.langConfigVisible || this.state.editingId !== t) return;
        const i = { ...this.state.categoryLangConfig };
        for (const a of r)
          if (a.status === "fulfilled") {
            const { langKey: c, result: f } = a.value;
            i[c] = { name: f.name || "", description: f.description || "" };
          }
        this.setState({ categoryLangConfig: i });
      } catch {
      }
  }
  closeLangConfigDialog() {
    this.setState({ langConfigVisible: !1 });
  }
  // -------- 单语言编辑子弹窗 --------
  async openLangEditDialog(t, e) {
    const s = this.state.categoryList.find((a) => a.id === t), g = l[e].code, r = s?.languageList?.find((a) => h(a).langCode === g);
    let i = { ...p };
    if (r) {
      const a = h(r);
      if (a.name || a.description)
        i = { name: a.name, description: a.description };
      else
        try {
          const c = await this.opts.actions.getGiftCategoryLanguage(t, g);
          i = { name: c.name || "", description: c.description || "" };
        } catch {
        }
    }
    this.setState({
      editingCategoryForLang: t,
      editingLang: e,
      langEditForm: i,
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
    const { editingCategoryForLang: t, editingLang: e, langEditForm: s, langConfigVisible: g } = this.state;
    if (!(!t || !e))
      try {
        s.name && (await this.opts.actions.setGiftCategoryLanguage(
          t,
          l[e].code,
          s.name,
          s.description
        ), this.opts.toast.success(this.opts.t(o.LANGUAGE_INFO_SAVED_SUCCESSFULLY))), this.setState({ langEditVisible: !1 }), await this.fetchCategoryList(!1), g && this.state.editingId === t && this.state.editingLang === e && this.setState({
          categoryLangConfig: {
            ...this.state.categoryLangConfig,
            [e]: { ...s }
          }
        });
      } catch (r) {
        this.opts.toast.error(
          this.opts.t(o.OPERATION_FAILED, { error: this.extractErrorInfo(r) })
        );
      }
  }
  /** 清除某个语言配置 */
  async clearLang(t, e) {
    try {
      await this.opts.actions.deleteGiftCategoryLanguage(t, l[e].code), this.opts.toast.success(this.opts.t(o.LANGUAGE_CONFIG_CLEARED)), this.setState({
        categoryLangConfig: {
          ...this.state.categoryLangConfig,
          [e]: { name: "", description: "" }
        }
      }), await this.fetchCategoryList(!1);
    } catch (s) {
      this.opts.toast.error(
        this.opts.t(o.OPERATION_FAILED, { error: this.extractErrorInfo(s) })
      );
    }
  }
  // -------- 删除确认 --------
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
        await this.opts.actions.deleteGiftCategory(t.id), this.opts.toast.success(this.opts.t(o.CATEGORY_DELETED_SUCCESSFULLY)), await this.fetchCategoryList(!1);
      } catch (e) {
        this.opts.toast.error(`${this.opts.t(o.DELETE_FAILED)}: ${this.extractErrorInfo(e)}`);
      } finally {
        this.setState({ deleteDialogVisible: !1, deletingItem: null });
      }
  }
  // -------- 错误信息提取 --------
  extractErrorInfo(t) {
    const e = t;
    return e?.ErrorInfo || e?.message || this.opts.t(o.UNKNOWN_HOST);
  }
  formatError(t, e) {
    const s = t;
    return s?.ErrorInfo ? `${e}: ${s.ErrorInfo}` : s?.message ? `${e}: ${s.message}` : e;
  }
}
function C(n) {
  return {
    sc: { ...n.sc },
    tc: { ...n.tc },
    en: { ...n.en }
  };
}
function h(n) {
  if (typeof n == "string")
    return { langCode: n, langKey: d[n], name: "", description: "" };
  const t = n.language || "";
  return {
    langCode: t,
    langKey: t ? d[t] : void 0,
    name: n.categoryName || "",
    description: n.categoryDescription || ""
  };
}
export {
  O as C,
  F as G,
  A as M,
  G as a,
  T as b
};
