import { defineComponent as ut, shallowRef as gt, computed as m, ref as S, reactive as ft, onMounted as mt, onBeforeUnmount as pt, resolveComponent as A, openBlock as _, createElementBlock as v, createElementVNode as r, toDisplayString as s, unref as e, createVNode as d, withCtx as i, createTextVNode as p, Fragment as x, renderList as z, createBlock as Te, normalizeClass as V, createCommentVNode as q, nextTick as _t } from "vue";
import { useRouter as vt } from "vue-router";
import { SearchIcon as Et, AdjustmentIcon as It, EditIcon as Ce, CopyIcon as Tt } from "tdesign-icons-vue-next";
import { MessagePlugin as E } from "tdesign-vue-next";
import { useUIKit as Ct, i18next as he } from "@tencentcloud/uikit-base-component-vue3";
import { h as ht, m as bt, I as l, B as be, d as Nt } from "../../chunks/layout.QDR0rddX.js";
import { F as At, bj as Ne, z as Ae, aQ as Gt, b0 as Lt, a_ as oe, b1 as yt, g, x as F, y as I, v as T, w as Y, b as Rt, a as j, aa as Ot } from "../../chunks/main-layout.BgP9Ncvl.js";
import { b as Ut, f as Ft, e as Dt } from "../../chunks/upload.B9g98mEN.js";
import { g as Mt } from "../../chunks/columns.BKd5KjpN.js";
import { u as St, a as ne } from "../../chunks/useAsyncAction.hiF1kgA5.js";
import { I as Ge } from "../../chunks/ImageUpload.BxREa4JW.js";
import { _ as xt, a as Le } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { _ as ie } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.D5UgT9kd.js";
/* empty css                                */
const Vt = { class: "gift-config-container" }, kt = { class: "gift-config-page-header" }, Pt = { class: "gift-config-title" }, Bt = { class: "gift-config-actions" }, wt = { class: "gift-search-input" }, Yt = { class: "gift-id" }, Xt = { class: "gift-id-text" }, Ht = { class: "gift-thumbnail" }, $t = ["src", "alt"], zt = { key: 1 }, qt = ["onClick"], jt = { class: "gift-lang-tags" }, Jt = ["onClick"], Wt = {
  key: 1,
  class: "gift-lang-empty"
}, Qt = { class: "gift-loading-container" }, Zt = { class: "gift-loading-text" }, Kt = { class: "gift-empty-container" }, el = { class: "gift-empty-text" }, tl = { class: "textarea-count-wrapper" }, ll = {
  key: 0,
  class: "form-field__error-tip"
}, al = { class: "gift-lang-config-container" }, ol = { class: "gift-lang-config-info-banner" }, nl = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, il = { class: "gift-lang-config-table" }, sl = { class: "gift-lang-table-cell-name" }, rl = {
  key: 1,
  class: "gift-lang-table-empty"
}, dl = { class: "gift-lang-table-cell-desc" }, cl = {
  key: 1,
  class: "gift-lang-table-empty"
}, ul = { class: "gift-category-edit-tags" }, gl = ["onClick"], fl = { class: "gift-category-add-wrapper" }, ml = { class: "category-select-list" }, pl = {
  key: 0,
  class: "category-select-empty"
}, _l = { class: "category-select-footer" }, X = 0, J = 2147483647, k = 0, P = 99, Dl = /* @__PURE__ */ ut({
  __name: "gift-config",
  setup(vl) {
    const ye = ht("GiftConfig"), Re = vt(), W = bt().components?.giftConfig, Oe = Mt(), { t } = Ct(), G = St(), u = new At({
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
      onNavigateToCategoryManagement: () => Re.push("/gift-category")
    }), f = gt(u.getState()), Ue = u.subscribe(() => {
      f.value = u.getState();
    }), Fe = m(() => f.value.loading), De = m(() => f.value.displayList), Q = m(() => f.value.searchInput), R = m(() => f.value.isEdit), H = m(() => f.value.editingId);
    m(() => f.value.giftList), m(() => f.value.categoryList);
    const D = m(() => f.value.giftLangConfig), M = m(() => f.value.editingLang);
    m(() => f.value.editingGiftForLang);
    const b = m(() => f.value.langEditForm);
    m(() => f.value.editingCategoryGift);
    const Me = m(() => f.value.allCategories), Z = m(() => f.value.giftCategoryIds);
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
      () => Me.value.filter((o) => !Z.value.includes(o.id))
    ), B = S(!1), w = S(!1), C = S(null), L = S(null), $ = S(!1), le = S(!1), a = ft({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), Se = (o) => {
      a.price = Number(o) || X;
    }, xe = (o) => {
      if (o === "" || o === null || o === void 0) {
        a.levelNum = void 0;
        return;
      }
      a.levelNum = Number(o);
    }, Ve = (o) => {
      u.setLangEditForm({ name: String(o ?? "") });
    }, ke = (o) => {
      u.setLangEditForm({ description: String(o ?? "") });
    }, Pe = (o) => {
      u.setSearchInput(String(o ?? ""));
    }, fe = () => u.search(), Be = () => u.clearSearch(), we = (o) => {
      u.copyGiftId(o);
    }, Ye = () => u.goToCategoryManagement(), Xe = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => qe(o)
      },
      {
        key: "delete",
        label: t(l.DELETE),
        danger: !0,
        onClick: () => nt(o)
      }
    ], He = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => H.value && _e(H.value, o)
      },
      {
        key: "clear",
        label: t(l.CLEAR),
        danger: !0,
        disabled: !D.value[o].name && !D.value[o].description,
        onClick: () => H.value && u.clearLang(H.value, o)
      }
    ], $e = (o) => u.getCategoryName(o), me = (o) => {
      C.value?.reset(), L.value?.reset(), u.closeDialog();
    }, ze = () => {
      je(), C.value?.reset(), L.value?.reset(), u.openCreateDialog();
    }, qe = async (o) => {
      C.value?.reset(), L.value?.reset(), a.id = o.id, a.name = o.name, a.iconUrl = o.iconUrl, a.price = o.price, a.animationUrl = o.animationUrl || "", a.levelNum = o.level != null ? parseInt(o.level) : void 0, a.description = o.description || "", a.extensionInfo = o.extensionInfo || "", a.enabled = o.enabled ?? !0, u.openEditDialog(o), await _t(), o.iconUrl && C.value && C.value.switchToUrlMode(), o.animationUrl && L.value && L.value.switchToUrlMode();
    }, je = () => {
      a.id = "", a.name = "", a.iconUrl = "", a.price = 0, a.animationUrl = "", a.levelNum = void 0, a.description = "", a.extensionInfo = "", a.enabled = !0, $.value = !1, le.value = !1;
    }, Je = async () => {
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
      if (!$.value && !a.iconUrl.trim() && !c) {
        o && C.value?.setUrlError(t(l.ENTER_THUMBNAIL_URL)), E.error(t(l.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (a.description && g(a.description) > T) {
        E.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: T }));
        return;
      }
      if (a.levelNum !== void 0 && (a.levelNum < k || a.levelNum > P)) {
        E.error(t(l.GIFT_LEVEL_RANGE, { min: k, max: P }));
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
      B.value = !0;
      try {
        const [h, y] = await Ft([
          {
            handle: C.value,
            hasPendingFile: $.value,
            fallbackUrl: a.iconUrl,
            label: t(l.THUMBNAIL)
          },
          {
            handle: L.value,
            hasPendingFile: le.value,
            fallbackUrl: a.animationUrl,
            label: t(l.GIFT_MATERIAL)
          }
        ]), ae = Ot(
          { ...a, level: a.levelNum != null ? String(a.levelNum) : void 0 },
          h,
          y
        );
        await u.submitGift(ae);
      } catch (h) {
        ye.error("GiftConfig", `Image upload failed: ${h?.message || t(l.UNKNOWN_HOST)}`, h), E.error(Dt(h, t(l.THUMBNAIL)));
      } finally {
        B.value = !1;
      }
    }, We = (o) => {
      u.openGiftLangConfigDialog(o);
    }, pe = () => u.closeGiftLangConfigDialog(), _e = (o, c) => {
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
        await u.saveLangEdit(), E.success(Nt(t).opSuccess(l.GIFT_MULTILINGUAL_SAVE));
      } catch {
      }
    }, Ze = (o) => {
      u.openCategoryEditDialog(o);
    }, Ke = (o) => {
      u.requestRemoveCategory(o);
    }, { execute: et } = ne({
      toast: { action: l.GIFT_CATEGORY_REMOVE_OPERATION },
      operationName: t(l.GIFT_CATEGORY_REMOVE_OPERATION),
      action: async () => {
        await u.confirmRemoveCategory();
      }
    }), tt = () => {
      et();
    }, lt = () => u.openCategorySelectDialog(), { execute: at } = ne({
      toast: { action: l.GIFT_CATEGORY_ADD_OPERATION },
      operationName: t(l.GIFT_CATEGORY_ADD_OPERATION),
      action: async () => {
        await u.confirmAddCategory();
      }
    }), ot = () => {
      at();
    }, nt = (o) => u.requestDelete(o), { execute: it } = ne({
      toast: { action: l.LABEL_DELETED, entity: l.GIFT },
      operationName: t(l.GIFT_DELETE_OPERATION),
      action: async () => {
        await u.confirmDelete();
      }
    }), st = () => {
      it();
    }, ve = () => u.onLanguageChanged();
    return mt(async () => {
      w.value = await Ut(), he.on("languageChanged", ve), await u.init();
    }), pt(() => {
      he.off("languageChanged", ve), Ue(), u.dispose();
    }), (o, c) => {
      const h = A("t-input"), y = A("t-button"), ae = A("t-card"), N = A("t-form-item"), Ee = A("t-input-number"), rt = A("t-textarea"), Ie = A("t-form"), O = A("t-dialog"), dt = A("t-option"), ct = A("t-select");
      return _(), v("div", Vt, [
        r("div", kt, [
          r("h1", Pt, s(e(t)(e(l).GIFT_MANAGEMENT)), 1),
          r("div", Bt, [
            r("div", wt, [
              d(h, {
                "model-value": Q.value,
                placeholder: e(t)(e(l).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: e(Ne)(Q.value, e(Ae)) ? "error" : "default",
                tips: e(Ne)(Q.value, e(Ae)) ? e(t)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": Pe,
                onEnter: fe,
                onClear: Be
              }, {
                suffixIcon: i(() => [
                  d(e(Et), {
                    class: "search-icon",
                    onClick: fe
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            d(y, {
              variant: "outline",
              shape: "round",
              onClick: Ye,
              theme: "primary"
            }, {
              icon: i(() => [
                d(e(It))
              ]),
              default: i(() => [
                p(" " + s(e(t)(e(l).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            d(y, {
              theme: "primary",
              shape: "round",
              onClick: ze
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
            d(xt, {
              columns: e(Oe),
              data: De.value,
              "row-key": "id",
              loading: Fe.value,
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
                r("div", Yt, [
                  r("span", Xt, s(n.id || "-"), 1),
                  d(e(Tt), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (U) => we(n.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": i(({ row: n }) => [
                r("div", Ht, [
                  n.iconUrl ? (_(), v("img", {
                    key: 0,
                    src: n.iconUrl,
                    alt: n.name
                  }, null, 8, $t)) : (_(), v("span", zt, "🎁"))
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
                  onClick: (U) => Ze(n)
                }, [
                  r("span", null, s(n.categories?.join(", ") || "-"), 1),
                  d(e(Ce), {
                    class: "gift-category-edit-icon",
                    size: "14"
                  })
                ], 8, qt)
              ]),
              "cell-languageList": i(({ row: n }) => [
                r("div", jt, [
                  n.languageList && n.languageList.length > 0 ? (_(!0), v(x, { key: 0 }, z(n.languageList, (U) => (_(), v("span", {
                    key: e(oe)(U),
                    class: "gift-lang-tag",
                    onClick: (El) => _e(n.id, e(Lt)(e(oe)(U)))
                  }, s(e(t)(e(yt)(e(oe)(U)))), 9, Jt))), 128)) : (_(), v("span", Wt, "-")),
                  d(e(Ce), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (U) => We(n.id)
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
                p(s(e(Gt)(n.createdAt)), 1)
              ]),
              "cell-customer-extra": i(({ row: n }) => [
                d(ie, {
                  "slot-component": e(W)?.giftTableExtraColumns,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              "cell-actions": i(({ row: n }) => [
                d(Le, {
                  actions: Xe(n)
                }, null, 8, ["actions"]),
                d(ie, {
                  "slot-component": e(W)?.giftRowActions,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: i(() => [
                r("div", Qt, [
                  c[18] || (c[18] = r("div", { class: "gift-loading-spinner" }, null, -1)),
                  r("span", Zt, s(e(t)(e(l).LOADING)), 1)
                ])
              ]),
              empty: i(() => [
                r("div", Kt, [
                  r("span", el, s(e(t)(e(l).NO_GIFT_DATA)), 1)
                ])
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
            d(y, {
              variant: "outline",
              shape: "round",
              onClick: c[0] || (c[0] = (n) => me())
            }, {
              default: i(() => [
                p(s(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            d(y, {
              theme: "primary",
              shape: "round",
              disabled: B.value || !R.value && !a.id.trim() || !a.name.trim() || C.value?.isValidating || L.value?.isValidating || C.value?.hasUrlError || L.value?.hasUrlError,
              loading: B.value,
              onClick: Je
            }, {
              default: i(() => [
                p(s(B.value ? R.value ? e(t)(e(l).SAVING) : e(t)(e(l).CREATING) : R.value ? e(t)(e(l).SAVE) : e(t)(e(l).CREATE)), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ]),
          default: i(() => [
            d(Ie, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(be)(110),
              colon: !1
            }, {
              default: i(() => [
                R.value ? q("", !0) : (_(), Te(N, {
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
                          class: V(["input-suffix-count", { "byte-overflow": e(g)(a.id) > e(F) }])
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
                    d(Ee, {
                      "model-value": a.price,
                      min: X,
                      max: J,
                      "decimal-places": 0,
                      status: a.price < X || a.price > J ? "error" : "default",
                      tips: a.price < X || a.price > J ? e(t)(e(l).GIFT_PRICE_RANGE, { min: X, max: J }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_PRICE),
                      "onUpdate:modelValue": Se
                    }, null, 8, ["model-value", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).GIFT_LEVEL)
                }, {
                  default: i(() => [
                    d(Ee, {
                      "model-value": a.levelNum,
                      min: a.levelNum != null ? k : void 0,
                      max: a.levelNum != null ? P : void 0,
                      status: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < k || (a.levelNum ?? 0) > P) ? "error" : "default",
                      tips: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < k || (a.levelNum ?? 0) > P) ? e(t)(e(l).GIFT_LEVEL_RANGE, { min: k, max: P }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_LEVEL),
                      "onUpdate:modelValue": xe
                    }, null, 8, ["model-value", "min", "max", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).THUMBNAIL),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(Ge, {
                      ref_key: "iconUploadRef",
                      ref: C,
                      modelValue: a.iconUrl,
                      "onUpdate:modelValue": c[2] || (c[2] = (n) => a.iconUrl = n),
                      type: "gift-icon",
                      "upload-enabled": w.value,
                      "crop-enabled": !0,
                      "aspect-ratio": 1,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
                      "preview-width": 120,
                      "preview-height": 120,
                      "max-size": 5,
                      "max-bytes": 200,
                      "defer-upload": w.value,
                      onFileReady: c[3] || (c[3] = (n) => $.value = !!n)
                    }, null, 8, ["modelValue", "upload-enabled", "placeholder", "defer-upload"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).GIFT_MATERIAL)
                }, {
                  default: i(() => [
                    d(Ge, {
                      ref_key: "animUploadRef",
                      ref: L,
                      modelValue: a.animationUrl,
                      "onUpdate:modelValue": c[4] || (c[4] = (n) => a.animationUrl = n),
                      type: "gift-animation",
                      "upload-enabled": w.value,
                      "crop-enabled": !1,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
                      "url-placeholder": e(t)(e(l).ENTER_FILE_URL),
                      "preview-width": 120,
                      "preview-height": 120,
                      "max-size": 10,
                      accept: "video/mp4,.svga",
                      "accept-hint": e(t)(e(l).SUPPORT_MP4_SVGA_MAX_10MB),
                      "max-bytes": 200,
                      "defer-upload": w.value,
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
                          class: V(["input-suffix-count", { "byte-overflow": e(g)(a.name) > e(I) }])
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
                          class: V(["input-suffix-count", { "byte-overflow": e(g)(a.description) > e(T) }])
                        }, s(e(g)(a.description)) + "/" + s(e(T)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(ie, {
                  "slot-component": e(W)?.giftFormExtraFields,
                  "slot-props": { mode: R.value ? "edit" : "create", formData: { ...a } }
                }, null, 8, ["slot-component", "slot-props"]),
                d(N, {
                  label: e(t)(e(l).CUSTOM_EXTENSION_INFO)
                }, {
                  default: i(() => [
                    r("div", tl, [
                      d(rt, {
                        modelValue: a.extensionInfo,
                        "onUpdate:modelValue": c[8] || (c[8] = (n) => a.extensionInfo = n),
                        placeholder: e(t)(e(l).EXTENSION_INFO_JSON_FORMAT),
                        autosize: { minRows: 3 },
                        status: e(g)(a.extensionInfo) > e(Y) ? "error" : "default"
                      }, null, 8, ["modelValue", "placeholder", "status"]),
                      r("span", {
                        class: V(["textarea-suffix-count", { "byte-overflow": e(g)(a.extensionInfo) > e(Y) }])
                      }, s(e(g)(a.extensionInfo)) + "/" + s(e(Y)), 3)
                    ]),
                    e(g)(a.extensionInfo) > e(Y) ? (_(), v("div", ll, s(e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).CUSTOM_EXTENSION_INFO), max: e(Y) })), 1)) : q("", !0)
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
          "on-close": pe,
          onConfirm: pe
        }, {
          default: i(() => [
            r("div", al, [
              r("div", ol, [
                (_(), v("svg", nl, [...c[19] || (c[19] = [
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
              r("table", il, [
                r("thead", null, [
                  r("tr", null, [
                    r("th", null, s(e(t)(e(l).LANGUAGE_TYPE)), 1),
                    r("th", null, s(e(t)(e(l).GIFT_NAME)), 1),
                    r("th", null, s(e(t)(e(l).DESCRIPTION)), 1),
                    r("th", null, s(e(t)(e(l).ACTIONS)), 1)
                  ])
                ]),
                r("tbody", null, [
                  (_(!0), v(x, null, z(e(Rt), (n) => (_(), v("tr", { key: n }, [
                    r("td", null, s(e(t)(e(j)[n].label)), 1),
                    r("td", sl, [
                      D.value[n].name ? (_(), v(x, { key: 0 }, [
                        p(s(D.value[n].name), 1)
                      ], 64)) : (_(), v("span", rl, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", dl, [
                      D.value[n].description ? (_(), v(x, { key: 0 }, [
                        p(s(D.value[n].description), 1)
                      ], 64)) : (_(), v("span", cl, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", null, [
                      d(Le, {
                        actions: He(n)
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
          header: M.value ? e(t)(e(l).EDIT_GIFT_LANGUAGE_INFO, { lang: e(t)(e(j)[M.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: e(t)(e(l).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: Qe
        }, {
          default: i(() => [
            d(Ie, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(be)(110),
              colon: !1
            }, {
              default: i(() => [
                d(N, {
                  label: e(t)(e(l).GIFT_NAME)
                }, {
                  default: i(() => [
                    d(h, {
                      "model-value": b.value.name,
                      placeholder: M.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_NAME, { lang: e(t)(e(j)[M.value].label) }) : "",
                      status: e(g)(b.value.name) > e(I) ? "error" : "default",
                      tips: e(g)(b.value.name) > e(I) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_NAME), max: e(I) }) : "",
                      "onUpdate:modelValue": Ve
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: V(["input-suffix-count", { "byte-overflow": e(g)(b.value.name) > e(I) }])
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
                      placeholder: M.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: e(t)(e(j)[M.value].label) }) : "",
                      status: e(g)(b.value.description) > e(T) ? "error" : "default",
                      tips: e(g)(b.value.description) > e(T) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(T) }) : "",
                      "onUpdate:modelValue": ke
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: V(["input-suffix-count", { "byte-overflow": e(g)(b.value.description) > e(T) }])
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
            r("div", ul, [
              Z.value.length > 0 ? (_(!0), v(x, { key: 0 }, z(Z.value, (n) => (_(), v("span", {
                key: n,
                class: "gift-category-edit-tag"
              }, [
                p(s($e(n)) + " ", 1),
                r("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (U) => Ke(n)
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
                ])], 8, gl)
              ]))), 128)) : q("", !0),
              r("div", fl, [
                d(y, {
                  size: "small",
                  variant: "text",
                  theme: "primary",
                  onClick: lt
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
          onConfirm: st
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
          onConfirm: tt
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
            r("div", ml, [
              d(ct, {
                modelValue: te.value,
                "onUpdate:modelValue": c[16] || (c[16] = (n) => te.value = n),
                placeholder: e(t)(e(l).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: i(() => [
                  (_(!0), v(x, null, z(ge.value, (n) => (_(), Te(dt, {
                    key: n.id,
                    value: n.id,
                    label: n.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              ge.value.length === 0 ? (_(), v("div", pl, s(e(t)(e(l).NO_AVAILABLE_CATEGORIES)), 1)) : q("", !0)
            ]),
            r("div", _l, [
              d(y, {
                theme: "primary",
                shape: "round",
                disabled: !te.value,
                onClick: ot
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
  Dl as default
};
