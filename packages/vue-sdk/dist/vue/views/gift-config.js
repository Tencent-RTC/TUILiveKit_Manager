import { defineComponent as gt, shallowRef as ft, computed as m, ref as S, reactive as mt, onMounted as pt, onBeforeUnmount as _t, resolveComponent as A, openBlock as _, createElementBlock as v, createElementVNode as r, toDisplayString as s, unref as e, createVNode as d, withCtx as i, createTextVNode as p, Fragment as x, renderList as q, createBlock as Ce, normalizeClass as k, createCommentVNode as J, nextTick as vt } from "vue";
import { useRouter as Et } from "vue-router";
import { SearchIcon as It, AdjustmentIcon as Tt, AddIcon as he, EditIcon as be, CopyIcon as Ct } from "tdesign-icons-vue-next";
import { MessagePlugin as E } from "tdesign-vue-next";
import { useUIKit as ht, i18next as Ne } from "@tencentcloud/uikit-base-component-vue3";
import { c as bt, a as Nt, I as l, g as Ae, u as At } from "../../chunks/shared-state.LwLSW33A.js";
import { K as Gt, be as Ge, J as ye, aN as yt, aY as Lt, aW as oe, aZ as Rt, g, H as F, I, z as T, F as X, b as Ot, a as W, ad as Ut } from "../../chunks/main-layout.BxLEuh4E.js";
import { d as Ft, b as Dt } from "../../chunks/image-upload-resolve.CM9TaFWN.js";
import { g as Mt } from "../../chunks/PreviewUrlController.ChqehaBQ.js";
import { g as St } from "../../chunks/columns.STT1P7CJ.js";
import { u as xt, a as ne } from "../../chunks/useAsyncAction.Btr7ihji.js";
import { I as Le } from "../../chunks/ImageUpload.DUXRho-X.js";
import { _ as kt, a as Re } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { _ as ie } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.CTZnYVPd.js";
/* empty css                                */
const Vt = { class: "gift-config-container" }, Pt = { class: "gift-config-page-header" }, Bt = { class: "gift-config-title" }, wt = { class: "gift-config-actions" }, Yt = { class: "gift-search-input" }, Xt = { class: "gift-id" }, Ht = { class: "gift-id-text" }, $t = { class: "gift-thumbnail" }, zt = ["src", "alt"], qt = { key: 1 }, Jt = ["onClick"], Wt = { class: "gift-lang-tags" }, jt = ["onClick"], Zt = {
  key: 1,
  class: "gift-lang-empty"
}, Qt = { class: "gift-loading-container" }, Kt = { class: "gift-loading-text" }, el = {
  key: 0,
  class: "gift-empty-container"
}, tl = { class: "gift-empty-text" }, ll = {
  key: 1,
  class: "gift-empty-container"
}, al = { class: "empty-guide-icon" }, ol = { class: "empty-guide-title" }, nl = { class: "empty-guide-desc" }, il = { class: "empty-guide-actions" }, sl = { class: "textarea-count-wrapper" }, rl = {
  key: 0,
  class: "form-field__error-tip"
}, dl = { class: "gift-lang-config-container" }, cl = { class: "gift-lang-config-info-banner" }, ul = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, gl = { class: "gift-lang-config-table" }, fl = { class: "gift-lang-table-cell-name" }, ml = {
  key: 1,
  class: "gift-lang-table-empty"
}, pl = { class: "gift-lang-table-cell-desc" }, _l = {
  key: 1,
  class: "gift-lang-table-empty"
}, vl = { class: "gift-category-edit-tags" }, El = ["onClick"], Il = { class: "gift-category-add-wrapper" }, Tl = { class: "category-select-list" }, Cl = {
  key: 0,
  class: "category-select-empty"
}, hl = { class: "category-select-footer" }, H = 0, j = 2147483647, V = 0, P = 99, Bl = /* @__PURE__ */ gt({
  __name: "gift-config",
  setup(bl) {
    const Oe = bt("GiftConfig"), Ue = Et(), Z = Nt().components?.giftConfig, Fe = St(), { t } = ht(), G = xt(), u = new Gt({
      actions: {
        fetchGiftList: G.fetchGiftList,
        createGift: G.createGift,
        updateGift: G.updateGift,
        deleteGift: G.deleteGift,
        getGiftLanguage: G.getGiftLanguage,
        setGiftLanguage: G.setGiftLanguage,
        deleteGiftLanguage: G.deleteGiftLanguage,
        addGiftCategoryRelations: G.addGiftCategoryRelations,
        deleteGiftCategoryRelations: G.deleteGiftCategoryRelations
      },
      t,
      toast: {
        success: (o) => E.success(o),
        error: (o) => E.error(o)
      },
      onNavigateToCategoryManagement: () => Ue.push("/gift-category")
    }), f = ft(u.getState()), De = u.subscribe(() => {
      f.value = u.getState();
    }), Me = m(() => f.value.loading), Se = m(() => f.value.displayList), B = m(() => f.value.searchInput), R = m(() => f.value.isEdit), $ = m(() => f.value.editingId);
    m(() => f.value.giftList), m(() => f.value.categoryList);
    const D = m(() => f.value.giftLangConfig), M = m(() => f.value.editingLang);
    m(() => f.value.editingGiftForLang);
    const b = m(() => f.value.langEditForm);
    m(() => f.value.editingCategoryGift);
    const xe = m(() => f.value.allCategories), Q = m(() => f.value.giftCategoryIds);
    m(() => f.value.deletingCategoryId), m(() => f.value.deletingItem);
    const se = m({
      get: () => f.value.dialogVisible,
      set: (o) => {
        o || u.closeDialog();
      }
    }), re = m({
      get: () => f.value.langConfigVisible,
      set: (o) => {
        o || u.closeGiftLangConfigDialog();
      }
    }), de = m({
      get: () => f.value.langEditVisible,
      set: (o) => {
        o || u.closeLangEditDialog();
      }
    }), K = m({
      get: () => f.value.categoryEditVisible,
      set: (o) => {
        o || u.closeCategoryEditDialog();
      }
    }), ee = m({
      get: () => f.value.categorySelectVisible,
      set: (o) => u.setCategorySelectVisible(o)
    }), ce = m({
      get: () => f.value.categoryDeleteVisible,
      set: (o) => {
        o || u.cancelRemoveCategory();
      }
    }), ue = m({
      get: () => f.value.deleteDialogVisible,
      set: (o) => {
        o || u.cancelDelete();
      }
    }), te = m({
      get: () => f.value.selectedCategoryId,
      set: (o) => u.setSelectedCategoryId(o)
    }), ge = m(
      () => xe.value.filter((o) => !Q.value.includes(o.id))
    ), w = S(!1), Y = S(!1), C = S(null), y = S(null), z = S(!1), le = S(!1), a = mt({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), ke = (o) => {
      a.price = Number(o) || H;
    }, Ve = (o) => {
      if (o === "" || o === null || o === void 0) {
        a.levelNum = void 0;
        return;
      }
      a.levelNum = Number(o);
    }, Pe = (o) => {
      u.setLangEditForm({ name: String(o ?? "") });
    }, Be = (o) => {
      u.setLangEditForm({ description: String(o ?? "") });
    }, we = (o) => {
      u.setSearchInput(String(o ?? ""));
    }, fe = () => u.search(), Ye = () => u.clearSearch(), Xe = (o) => {
      u.copyGiftId(o);
    }, He = () => u.goToCategoryManagement(), $e = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => Je(o)
      },
      {
        key: "delete",
        label: t(l.DELETE),
        danger: !0,
        onClick: () => it(o)
      }
    ], ze = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => $.value && ve($.value, o)
      },
      {
        key: "clear",
        label: t(l.CLEAR),
        danger: !0,
        disabled: !D.value[o].name && !D.value[o].description,
        onClick: () => $.value && u.clearLang($.value, o)
      }
    ], qe = (o) => u.getCategoryName(o), me = (o) => {
      C.value?.reset(), y.value?.reset(), u.closeDialog();
    }, pe = () => {
      We(), C.value?.reset(), y.value?.reset(), u.openCreateDialog();
    }, Je = async (o) => {
      C.value?.reset(), y.value?.reset(), a.id = o.id, a.name = o.name, a.iconUrl = o.iconUrl, a.price = o.price, a.animationUrl = o.animationUrl || "", a.levelNum = o.level != null ? parseInt(o.level) : void 0, a.description = o.description || "", a.extensionInfo = o.extensionInfo || "", a.enabled = o.enabled ?? !0, u.openEditDialog(o), await vt(), o.iconUrl && C.value && C.value.switchToUrlMode(), o.animationUrl && y.value && y.value.switchToUrlMode();
    }, We = () => {
      a.id = "", a.name = "", a.iconUrl = "", a.price = 0, a.animationUrl = "", a.levelNum = void 0, a.description = "", a.extensionInfo = "", a.enabled = !0, z.value = !1, le.value = !1;
    }, je = async () => {
      if (!a.id.trim() && !R.value) {
        E.error(t(l.ENTER_GIFT_ID));
        return;
      }
      if (g(a.id) > F) {
        E.error(t(l.MAX_BYTES, { field: t(l.GIFT_ID), max: F }));
        return;
      }
      if (!a.name.trim()) {
        E.error(t(l.ENTER_GIFT_NAME));
        return;
      }
      if (g(a.name) > I) {
        E.error(t(l.MAX_BYTES, { field: t(l.GIFT_NAME), max: I }));
        return;
      }
      const o = C.value?.isUrlInputMode ?? !0, c = o && (C.value?.urlInputValue?.trim?.() || "");
      if (!z.value && !a.iconUrl.trim() && !c) {
        o && C.value?.setUrlError(t(l.ENTER_THUMBNAIL_URL)), E.error(t(l.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (a.description && g(a.description) > T) {
        E.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: T }));
        return;
      }
      if (a.levelNum !== void 0 && (a.levelNum < V || a.levelNum > P)) {
        E.error(t(l.GIFT_LEVEL_RANGE, { min: V, max: P }));
        return;
      }
      if (a.extensionInfo.trim()) {
        try {
          JSON.parse(a.extensionInfo.trim());
        } catch {
          E.error(t(l.EXTENSION_INFO_JSON_FORMAT));
          return;
        }
        if (g(a.extensionInfo.trim()) > 100) {
          E.error(t(l.MAX_BYTES, { field: t(l.CUSTOM_EXTENSION_INFO), max: 100 }));
          return;
        }
      }
      w.value = !0;
      try {
        const [h, L] = await Ft([
          {
            handle: C.value,
            hasPendingFile: z.value,
            fallbackUrl: a.iconUrl,
            label: t(l.THUMBNAIL)
          },
          {
            handle: y.value,
            hasPendingFile: le.value,
            fallbackUrl: a.animationUrl,
            label: t(l.GIFT_MATERIAL)
          }
        ]), ae = Ut(
          { ...a, level: a.levelNum != null ? String(a.levelNum) : void 0 },
          h,
          L
        );
        await u.submitGift(ae);
      } catch (h) {
        Oe.error("GiftConfig", `Image upload failed: ${h?.message || t(l.UNKNOWN_HOST)}`, h), E.error(Dt(h, t(l.THUMBNAIL)));
      } finally {
        w.value = !1;
      }
    }, Ze = (o) => {
      u.openGiftLangConfigDialog(o);
    }, _e = () => u.closeGiftLangConfigDialog(), ve = (o, c) => {
      c && u.openLangEditDialog(o, c);
    }, Qe = async () => {
      const o = b.value;
      if (o.name && g(o.name) > I) {
        E.error(t(l.MAX_BYTES, { field: t(l.GIFT_NAME), max: I }));
        return;
      }
      if (o.description && g(o.description) > T) {
        E.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: T }));
        return;
      }
      try {
        await u.saveLangEdit(), E.success(At(t).opSuccess(l.GIFT_MULTILINGUAL_SAVE));
      } catch {
      }
    }, Ke = (o) => {
      u.openCategoryEditDialog(o);
    }, et = (o) => {
      u.requestRemoveCategory(o);
    }, { execute: tt } = ne({
      toast: { action: l.GIFT_CATEGORY_REMOVE_OPERATION },
      operationName: t(l.GIFT_CATEGORY_REMOVE_OPERATION),
      action: async () => {
        await u.confirmRemoveCategory();
      }
    }), lt = () => {
      tt();
    }, at = () => u.openCategorySelectDialog(), { execute: ot } = ne({
      toast: { action: l.GIFT_CATEGORY_ADD_OPERATION },
      operationName: t(l.GIFT_CATEGORY_ADD_OPERATION),
      action: async () => {
        await u.confirmAddCategory();
      }
    }), nt = () => {
      ot();
    }, it = (o) => u.requestDelete(o), { execute: st } = ne({
      toast: { action: l.LABEL_DELETED, entity: l.GIFT },
      operationName: t(l.GIFT_DELETE_OPERATION),
      action: async () => {
        await u.confirmDelete();
      }
    }), rt = () => {
      st();
    }, Ee = () => u.onLanguageChanged();
    return pt(async () => {
      Y.value = await Mt(), Ne.on("languageChanged", Ee), await u.init();
    }), _t(() => {
      Ne.off("languageChanged", Ee), De(), u.dispose();
    }), (o, c) => {
      const h = A("t-input"), L = A("t-button"), ae = A("t-card"), N = A("t-form-item"), Ie = A("t-input-number"), dt = A("t-textarea"), Te = A("t-form"), O = A("t-dialog"), ct = A("t-option"), ut = A("t-select");
      return _(), v("div", Vt, [
        r("div", Pt, [
          r("h1", Bt, s(e(t)(e(l).GIFT_MANAGEMENT)), 1),
          r("div", wt, [
            r("div", Yt, [
              d(h, {
                "model-value": B.value,
                placeholder: e(t)(e(l).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: e(Ge)(B.value, e(ye)) ? "error" : "default",
                tips: e(Ge)(B.value, e(ye)) ? e(t)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": we,
                onEnter: fe,
                onClear: Ye
              }, {
                suffixIcon: i(() => [
                  d(e(It), {
                    class: "search-icon",
                    onClick: fe
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            d(L, {
              variant: "outline",
              shape: "round",
              onClick: He,
              theme: "primary"
            }, {
              icon: i(() => [
                d(e(Tt))
              ]),
              default: i(() => [
                p(" " + s(e(t)(e(l).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            d(L, {
              theme: "primary",
              shape: "round",
              onClick: pe
            }, {
              default: i(() => [
                p(" ＋ " + s(e(t)(e(l).ADD_GIFT)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        d(ae, { class: "gift-list-card" }, {
          default: i(() => [
            d(kt, {
              columns: e(Fe),
              data: Se.value,
              "row-key": "id",
              loading: Me.value,
              "table-class-name": "gift-table",
              "body-class-name": "gift-list-content",
              "row-class-name": "gift-row"
            }, {
              "header-id": i(() => [
                p(s(e(t)(e(l).GIFT_ID)), 1)
              ]),
              "header-iconUrl": i(() => [
                p(s(e(t)(e(l).THUMBNAIL)), 1)
              ]),
              "header-name": i(() => [
                p(s(e(t)(e(l).NAME)), 1)
              ]),
              "header-description": i(() => [
                p(s(e(t)(e(l).DESCRIPTION)), 1)
              ]),
              "header-categories": i(() => [
                p(s(e(t)(e(l).CATEGORY)), 1)
              ]),
              "header-languageList": i(() => [
                p(s(e(t)(e(l).MULTILINGUAL_CONFIG)), 1)
              ]),
              "header-level": i(() => [
                p(s(e(t)(e(l).LEVEL)), 1)
              ]),
              "header-price": i(() => [
                p(s(e(t)(e(l).PRICE)), 1)
              ]),
              "header-createdAt": i(() => [
                p(s(e(t)(e(l).CREATE_TIME)), 1)
              ]),
              "header-actions": i(() => [
                p(s(e(t)(e(l).ACTIONS)), 1)
              ]),
              "cell-id": i(({ row: n }) => [
                r("div", Xt, [
                  r("span", Ht, s(n.id || "-"), 1),
                  d(e(Ct), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (U) => Xe(n.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": i(({ row: n }) => [
                r("div", $t, [
                  n.iconUrl ? (_(), v("img", {
                    key: 0,
                    src: n.iconUrl,
                    alt: n.name
                  }, null, 8, zt)) : (_(), v("span", qt, "🎁"))
                ])
              ]),
              "cell-name": i(({ row: n }) => [
                r("span", null, s(n.name || "-"), 1)
              ]),
              "cell-description": i(({ row: n }) => [
                r("span", null, s(n.description || "-"), 1)
              ]),
              "cell-categories": i(({ row: n }) => [
                r("div", {
                  class: "gift-category-cell",
                  onClick: (U) => Ke(n)
                }, [
                  r("span", null, s(n.categories?.join(", ") || "-"), 1),
                  d(e(be), {
                    class: "gift-category-edit-icon",
                    size: "14"
                  })
                ], 8, Jt)
              ]),
              "cell-languageList": i(({ row: n }) => [
                r("div", Wt, [
                  n.languageList && n.languageList.length > 0 ? (_(!0), v(x, { key: 0 }, q(n.languageList, (U) => (_(), v("span", {
                    key: e(oe)(U),
                    class: "gift-lang-tag",
                    onClick: (Nl) => ve(n.id, e(Lt)(e(oe)(U)))
                  }, s(e(t)(e(Rt)(e(oe)(U)))), 9, jt))), 128)) : (_(), v("span", Zt, "-")),
                  d(e(be), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (U) => Ze(n.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-level": i(({ row: n }) => [
                p(s(n.level || "-"), 1)
              ]),
              "cell-price": i(({ row: n }) => [
                p(s(n.price ?? 0), 1)
              ]),
              "cell-createdAt": i(({ row: n }) => [
                p(s(e(yt)(n.createdAt)), 1)
              ]),
              "cell-customer-extra": i(({ row: n }) => [
                d(ie, {
                  "slot-component": e(Z)?.giftTableExtraColumns,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              "cell-actions": i(({ row: n }) => [
                d(Re, {
                  actions: $e(n)
                }, null, 8, ["actions"]),
                d(ie, {
                  "slot-component": e(Z)?.giftRowActions,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: i(() => [
                r("div", Qt, [
                  c[18] || (c[18] = r("div", { class: "gift-loading-spinner" }, null, -1)),
                  r("span", Kt, s(e(t)(e(l).LOADING)), 1)
                ])
              ]),
              empty: i(() => [
                B.value ? (_(), v("div", el, [
                  r("span", tl, s(e(t)(e(l).NO_GIFT_FOUND, { keyword: B.value })), 1)
                ])) : (_(), v("div", ll, [
                  r("div", al, [
                    d(e(he), { size: "40px" })
                  ]),
                  r("p", ol, s(e(t)(e(l).EMPTY_GIFT_TITLE)), 1),
                  r("p", nl, s(e(t)(e(l).EMPTY_GIFT_DESC)), 1),
                  r("div", il, [
                    d(L, {
                      theme: "primary",
                      shape: "round",
                      class: "empty-guide-cta",
                      onClick: pe
                    }, {
                      icon: i(() => [
                        d(e(he))
                      ]),
                      default: i(() => [
                        p(" " + s(e(t)(e(l).ADD_GIFT)), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]))
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          _: 1
        }),
        d(O, {
          visible: se.value,
          "onUpdate:visible": c[9] || (c[9] = (n) => se.value = n),
          header: R.value ? e(t)(e(l).EDIT_GIFT) : e(t)(e(l).CREATE_GIFT),
          width: "600px",
          placement: "center",
          class: "gift-modal",
          "on-close": () => me()
        }, {
          footer: i(() => [
            d(L, {
              variant: "outline",
              shape: "round",
              onClick: c[0] || (c[0] = (n) => me())
            }, {
              default: i(() => [
                p(s(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            d(L, {
              theme: "primary",
              shape: "round",
              disabled: w.value || !R.value && !a.id.trim() || !a.name.trim() || C.value?.isValidating || y.value?.isValidating || C.value?.hasUrlError || y.value?.hasUrlError,
              loading: w.value,
              onClick: je
            }, {
              default: i(() => [
                p(s(w.value ? R.value ? e(t)(e(l).SAVING) : e(t)(e(l).CREATING) : R.value ? e(t)(e(l).SAVE) : e(t)(e(l).CREATE)), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ]),
          default: i(() => [
            d(Te, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(Ae)(110),
              colon: !1
            }, {
              default: i(() => [
                R.value ? J("", !0) : (_(), Ce(N, {
                  key: 0,
                  label: e(t)(e(l).GIFT_ID),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(h, {
                      modelValue: a.id,
                      "onUpdate:modelValue": c[1] || (c[1] = (n) => a.id = n),
                      placeholder: e(t)(e(l).ENTER_GIFT_ID),
                      status: e(g)(a.id) > e(F) ? "error" : "default",
                      tips: e(g)(a.id) > e(F) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_ID), max: e(F) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(a.id) > e(F) }])
                        }, s(e(g)(a.id)) + "/" + s(e(F)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])),
                d(N, {
                  label: e(t)(e(l).GIFT_PRICE),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(Ie, {
                      "model-value": a.price,
                      min: H,
                      max: j,
                      "decimal-places": 0,
                      status: a.price < H || a.price > j ? "error" : "default",
                      tips: a.price < H || a.price > j ? e(t)(e(l).GIFT_PRICE_RANGE, { min: H, max: j }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_PRICE),
                      "onUpdate:modelValue": ke
                    }, null, 8, ["model-value", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).GIFT_LEVEL)
                }, {
                  default: i(() => [
                    d(Ie, {
                      "model-value": a.levelNum,
                      min: a.levelNum != null ? V : void 0,
                      max: a.levelNum != null ? P : void 0,
                      status: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < V || (a.levelNum ?? 0) > P) ? "error" : "default",
                      tips: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < V || (a.levelNum ?? 0) > P) ? e(t)(e(l).GIFT_LEVEL_RANGE, { min: V, max: P }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_LEVEL),
                      "onUpdate:modelValue": Ve
                    }, null, 8, ["model-value", "min", "max", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).THUMBNAIL),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(Le, {
                      ref_key: "iconUploadRef",
                      ref: C,
                      modelValue: a.iconUrl,
                      "onUpdate:modelValue": c[2] || (c[2] = (n) => a.iconUrl = n),
                      type: "gift-icon",
                      "upload-enabled": Y.value,
                      "crop-enabled": !0,
                      "aspect-ratio": 1,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
                      "preview-width": 120,
                      "preview-height": 120,
                      "max-size": 5,
                      "max-bytes": 200,
                      "defer-upload": Y.value,
                      onFileReady: c[3] || (c[3] = (n) => z.value = !!n)
                    }, null, 8, ["modelValue", "upload-enabled", "placeholder", "defer-upload"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).GIFT_MATERIAL)
                }, {
                  default: i(() => [
                    d(Le, {
                      ref_key: "animUploadRef",
                      ref: y,
                      modelValue: a.animationUrl,
                      "onUpdate:modelValue": c[4] || (c[4] = (n) => a.animationUrl = n),
                      type: "gift-animation",
                      "upload-enabled": Y.value,
                      "crop-enabled": !1,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
                      "url-placeholder": e(t)(e(l).ENTER_FILE_URL),
                      "preview-width": 120,
                      "preview-height": 120,
                      "max-size": 10,
                      accept: "video/mp4,.svga",
                      "accept-hint": e(t)(e(l).SUPPORT_MP4_SVGA_MAX_10MB),
                      "max-bytes": 200,
                      "defer-upload": Y.value,
                      "skip-svga-validation": !0,
                      onFileReady: c[5] || (c[5] = (n) => le.value = !!n)
                    }, null, 8, ["modelValue", "upload-enabled", "placeholder", "url-placeholder", "accept-hint", "defer-upload"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).GIFT_NAME),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(h, {
                      modelValue: a.name,
                      "onUpdate:modelValue": c[6] || (c[6] = (n) => a.name = n),
                      placeholder: e(t)(e(l).ENTER_GIFT_NAME),
                      status: e(g)(a.name) > e(I) ? "error" : "default",
                      tips: e(g)(a.name) > e(I) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_NAME), max: e(I) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(a.name) > e(I) }])
                        }, s(e(g)(a.name)) + "/" + s(e(I)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).DESCRIPTION)
                }, {
                  default: i(() => [
                    d(h, {
                      modelValue: a.description,
                      "onUpdate:modelValue": c[7] || (c[7] = (n) => a.description = n),
                      placeholder: e(t)(e(l).ENTER_GIFT_DESCRIPTION),
                      status: e(g)(a.description) > e(T) ? "error" : "default",
                      tips: e(g)(a.description) > e(T) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(T) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(a.description) > e(T) }])
                        }, s(e(g)(a.description)) + "/" + s(e(T)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(ie, {
                  "slot-component": e(Z)?.giftFormExtraFields,
                  "slot-props": { mode: R.value ? "edit" : "create", formData: { ...a } }
                }, null, 8, ["slot-component", "slot-props"]),
                d(N, {
                  label: e(t)(e(l).CUSTOM_EXTENSION_INFO)
                }, {
                  default: i(() => [
                    r("div", sl, [
                      d(dt, {
                        modelValue: a.extensionInfo,
                        "onUpdate:modelValue": c[8] || (c[8] = (n) => a.extensionInfo = n),
                        placeholder: e(t)(e(l).EXTENSION_INFO_JSON_FORMAT),
                        autosize: { minRows: 3 },
                        status: e(g)(a.extensionInfo) > e(X) ? "error" : "default"
                      }, null, 8, ["modelValue", "placeholder", "status"]),
                      r("span", {
                        class: k(["textarea-suffix-count", { "byte-overflow": e(g)(a.extensionInfo) > e(X) }])
                      }, s(e(g)(a.extensionInfo)) + "/" + s(e(X)), 3)
                    ]),
                    e(g)(a.extensionInfo) > e(X) ? (_(), v("div", rl, s(e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).CUSTOM_EXTENSION_INFO), max: e(X) })), 1)) : J("", !0)
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "on-close"]),
        d(O, {
          visible: re.value,
          "onUpdate:visible": c[10] || (c[10] = (n) => re.value = n),
          header: e(t)(e(l).GIFT_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: e(t)(e(l).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": _e,
          onConfirm: _e
        }, {
          default: i(() => [
            r("div", dl, [
              r("div", cl, [
                (_(), v("svg", ul, [...c[19] || (c[19] = [
                  r("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5"
                  }, null, -1),
                  r("path", {
                    d: "M8 7V11",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }, null, -1),
                  r("circle", {
                    cx: "8",
                    cy: "5",
                    r: "0.75",
                    fill: "#1C66E5"
                  }, null, -1)
                ])])),
                r("span", null, s(e(t)(e(l).MULTILINGUAL_CONFIG_TIP)), 1)
              ]),
              r("table", gl, [
                r("thead", null, [
                  r("tr", null, [
                    r("th", null, s(e(t)(e(l).LANGUAGE_TYPE)), 1),
                    r("th", null, s(e(t)(e(l).GIFT_NAME)), 1),
                    r("th", null, s(e(t)(e(l).DESCRIPTION)), 1),
                    r("th", null, s(e(t)(e(l).ACTIONS)), 1)
                  ])
                ]),
                r("tbody", null, [
                  (_(!0), v(x, null, q(e(Ot), (n) => (_(), v("tr", { key: n }, [
                    r("td", null, s(e(t)(e(W)[n].label)), 1),
                    r("td", fl, [
                      D.value[n].name ? (_(), v(x, { key: 0 }, [
                        p(s(D.value[n].name), 1)
                      ], 64)) : (_(), v("span", ml, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", pl, [
                      D.value[n].description ? (_(), v(x, { key: 0 }, [
                        p(s(D.value[n].description), 1)
                      ], 64)) : (_(), v("span", _l, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", null, [
                      d(Re, {
                        actions: ze(n)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        d(O, {
          visible: de.value,
          "onUpdate:visible": c[11] || (c[11] = (n) => de.value = n),
          header: M.value ? e(t)(e(l).EDIT_GIFT_LANGUAGE_INFO, { lang: e(t)(e(W)[M.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: e(t)(e(l).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: Qe
        }, {
          default: i(() => [
            d(Te, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(Ae)(110),
              colon: !1
            }, {
              default: i(() => [
                d(N, {
                  label: e(t)(e(l).GIFT_NAME)
                }, {
                  default: i(() => [
                    d(h, {
                      "model-value": b.value.name,
                      placeholder: M.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_NAME, { lang: e(t)(e(W)[M.value].label) }) : "",
                      status: e(g)(b.value.name) > e(I) ? "error" : "default",
                      tips: e(g)(b.value.name) > e(I) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_NAME), max: e(I) }) : "",
                      "onUpdate:modelValue": Pe
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(b.value.name) > e(I) }])
                        }, s(e(g)(b.value.name)) + "/" + s(e(I)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).DESCRIPTION)
                }, {
                  default: i(() => [
                    d(h, {
                      "model-value": b.value.description,
                      placeholder: M.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: e(t)(e(W)[M.value].label) }) : "",
                      status: e(g)(b.value.description) > e(T) ? "error" : "default",
                      tips: e(g)(b.value.description) > e(T) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(T) }) : "",
                      "onUpdate:modelValue": Be
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(b.value.description) > e(T) }])
                        }, s(e(g)(b.value.description)) + "/" + s(e(T)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(O, {
          visible: K.value,
          "onUpdate:visible": c[12] || (c[12] = (n) => K.value = n),
          header: e(t)(e(l).EDIT_GIFT_CATEGORY),
          width: "420px",
          placement: "center",
          class: "gift-category-edit-modal",
          "confirm-btn": { content: e(t)(e(l).CLOSE), shape: "round" },
          "cancel-btn": null,
          onConfirm: c[13] || (c[13] = (n) => K.value = !1)
        }, {
          default: i(() => [
            r("div", vl, [
              Q.value.length > 0 ? (_(!0), v(x, { key: 0 }, q(Q.value, (n) => (_(), v("span", {
                key: n,
                class: "gift-category-edit-tag"
              }, [
                p(s(qe(n)) + " ", 1),
                r("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (U) => et(n)
                }, [...c[20] || (c[20] = [
                  r("svg", {
                    width: "12",
                    height: "12",
                    viewBox: "0 0 12 12",
                    fill: "none"
                  }, [
                    r("path", {
                      d: "M9 3L3 9M3 3L9 9",
                      stroke: "currentColor",
                      "stroke-width": "1.2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ], -1)
                ])], 8, El)
              ]))), 128)) : J("", !0),
              r("div", Il, [
                d(L, {
                  size: "small",
                  variant: "text",
                  theme: "primary",
                  onClick: at
                }, {
                  default: i(() => [
                    p(" + " + s(e(t)(e(l).ADD)), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        d(O, {
          visible: ue.value,
          "onUpdate:visible": c[14] || (c[14] = (n) => ue.value = n),
          header: e(t)(e(l).CONFIRM_ACTION_TITLE, { action: e(t)(e(l).GIFT_DELETE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(l).CONFIRM), shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: rt
        }, {
          default: i(() => [
            r("p", null, s(e(t)(e(l).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(O, {
          visible: ce.value,
          "onUpdate:visible": c[15] || (c[15] = (n) => ce.value = n),
          header: e(t)(e(l).CONFIRM_ACTION_TITLE, { action: e(t)(e(l).GIFT_CATEGORY_REMOVE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(l).CONFIRM), shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: lt
        }, {
          default: i(() => [
            r("p", null, s(e(t)(e(l).REMOVE_CATEGORY_DESCRIPTION)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(O, {
          visible: ee.value,
          "onUpdate:visible": c[17] || (c[17] = (n) => ee.value = n),
          header: e(t)(e(l).SELECT_CATEGORY),
          width: "360px",
          placement: "center",
          footer: !1,
          "on-close": () => ee.value = !1
        }, {
          default: i(() => [
            r("div", Tl, [
              d(ut, {
                modelValue: te.value,
                "onUpdate:modelValue": c[16] || (c[16] = (n) => te.value = n),
                placeholder: e(t)(e(l).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: i(() => [
                  (_(!0), v(x, null, q(ge.value, (n) => (_(), Ce(ct, {
                    key: n.id,
                    value: n.id,
                    label: n.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              ge.value.length === 0 ? (_(), v("div", Cl, s(e(t)(e(l).NO_AVAILABLE_CATEGORIES)), 1)) : J("", !0)
            ]),
            r("div", hl, [
              d(L, {
                theme: "primary",
                shape: "round",
                disabled: !te.value,
                onClick: nt
              }, {
                default: i(() => [
                  p(s(e(t)(e(l).CONFIRM)), 1)
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "on-close"])
      ]);
    };
  }
});
export {
  Bl as default
};
