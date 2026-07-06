import { defineComponent as st, shallowRef as rt, computed as m, ref as x, reactive as dt, onMounted as ct, onBeforeUnmount as ut, resolveComponent as A, openBlock as _, createElementBlock as v, createElementVNode as r, toDisplayString as s, unref as e, createVNode as d, withCtx as i, createTextVNode as p, Fragment as D, renderList as z, createBlock as Ie, normalizeClass as k, createCommentVNode as q, nextTick as gt } from "vue";
import { useRouter as ft } from "vue-router";
import { SearchIcon as mt, AdjustmentIcon as pt, EditIcon as Ce, CopyIcon as _t } from "tdesign-icons-vue-next";
import { MessagePlugin as E } from "tdesign-vue-next";
import { useUIKit as vt, i18next as Te } from "@tencentcloud/uikit-base-component-vue3";
import { c as Et } from "../../chunks/logger.DCFRj533.js";
import { g as It, I as l, t as he } from "../../chunks/layout.DppKPdLU.js";
import { H as Ct, bj as be, F as Ne, aQ as Tt, b0 as ht, a_ as oe, b1 as bt, g, y as S, z as I, w as C, x as X, b as Nt, a as j, aa as At } from "../../chunks/main-layout.BqLTYqar.js";
import { b as Gt, f as Lt, e as yt } from "../../chunks/upload.Ne4Xd5tE.js";
import { g as Rt } from "../../chunks/columns.DXZISpo3.js";
import { I as Ae } from "../../chunks/ImageUpload.JuZWHEq7.js";
import { _ as Ut, a as Ge } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { _ as ne } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.iwDk4NW9.js";
import { u as Ft } from "../../chunks/gift.C2r8tUnB.js";
/* empty css                                */
const St = { class: "gift-config-container" }, Mt = { class: "gift-config-page-header" }, Ot = { class: "gift-config-title" }, xt = { class: "gift-config-actions" }, Dt = { class: "gift-search-input" }, kt = { class: "gift-id" }, Vt = { class: "gift-id-text" }, Pt = { class: "gift-thumbnail" }, Bt = ["src", "alt"], wt = { key: 1 }, Xt = ["onClick"], Yt = { class: "gift-lang-tags" }, Ht = ["onClick"], $t = {
  key: 1,
  class: "gift-lang-empty"
}, zt = { class: "gift-loading-container" }, qt = { class: "gift-loading-text" }, jt = { class: "gift-empty-container" }, Jt = { class: "gift-empty-text" }, Wt = { class: "textarea-count-wrapper" }, Qt = {
  key: 0,
  class: "form-field__error-tip"
}, Zt = { class: "gift-lang-config-container" }, Kt = { class: "gift-lang-config-info-banner" }, el = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, tl = { class: "gift-lang-config-table" }, ll = { class: "gift-lang-table-cell-name" }, al = {
  key: 1,
  class: "gift-lang-table-empty"
}, ol = { class: "gift-lang-table-cell-desc" }, nl = {
  key: 1,
  class: "gift-lang-table-empty"
}, il = { class: "gift-category-edit-tags" }, sl = ["onClick"], rl = { class: "gift-category-add-wrapper" }, dl = { class: "category-select-list" }, cl = {
  key: 0,
  class: "category-select-empty"
}, ul = { class: "category-select-footer" }, Y = 0, J = 2147483647, V = 0, P = 99, Rl = /* @__PURE__ */ st({
  __name: "gift-config",
  setup(gl) {
    const Le = Et("GiftConfig"), ye = ft(), W = It().components?.giftConfig, Re = Rt(), { t } = vt(), G = Ft(), u = new Ct({
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
      onNavigateToCategoryManagement: () => ye.push("/gift-category")
    }), f = rt(u.getState()), Ue = u.subscribe(() => {
      f.value = u.getState();
    }), Fe = m(() => f.value.loading), Se = m(() => f.value.displayList), Q = m(() => f.value.searchInput), R = m(() => f.value.isEdit), H = m(() => f.value.editingId);
    m(() => f.value.giftList), m(() => f.value.categoryList);
    const M = m(() => f.value.giftLangConfig), O = m(() => f.value.editingLang);
    m(() => f.value.editingGiftForLang);
    const b = m(() => f.value.langEditForm);
    m(() => f.value.editingCategoryGift);
    const Me = m(() => f.value.allCategories), Z = m(() => f.value.giftCategoryIds);
    m(() => f.value.deletingCategoryId), m(() => f.value.deletingItem);
    const ie = m({
      get: () => f.value.dialogVisible,
      set: (o) => {
        o || u.closeDialog();
      }
    }), se = m({
      get: () => f.value.langConfigVisible,
      set: (o) => {
        o || u.closeGiftLangConfigDialog();
      }
    }), re = m({
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
    }), de = m({
      get: () => f.value.categoryDeleteVisible,
      set: (o) => {
        o || u.cancelRemoveCategory();
      }
    }), ce = m({
      get: () => f.value.deleteDialogVisible,
      set: (o) => {
        o || u.cancelDelete();
      }
    }), te = m({
      get: () => f.value.selectedCategoryId,
      set: (o) => u.setSelectedCategoryId(o)
    }), ue = m(
      () => Me.value.filter((o) => !Z.value.includes(o.id))
    ), B = x(!1), w = x(!1), T = x(null), L = x(null), $ = x(!1), le = x(!1), a = dt({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), Oe = (o) => {
      a.price = Number(o) || Y;
    }, xe = (o) => {
      if (o === "" || o === null || o === void 0) {
        a.levelNum = void 0;
        return;
      }
      a.levelNum = Number(o);
    }, De = (o) => {
      u.setLangEditForm({ name: String(o ?? "") });
    }, ke = (o) => {
      u.setLangEditForm({ description: String(o ?? "") });
    }, Ve = (o) => {
      u.setSearchInput(String(o ?? ""));
    }, ge = () => u.search(), Pe = () => u.clearSearch(), Be = (o) => {
      u.copyGiftId(o);
    }, we = () => u.goToCategoryManagement(), Xe = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => ze(o)
      },
      {
        key: "delete",
        label: t(l.DELETE),
        danger: !0,
        onClick: () => lt(o)
      }
    ], Ye = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => H.value && pe(H.value, o)
      },
      {
        key: "clear",
        label: t(l.CLEAR),
        danger: !0,
        disabled: !M.value[o].name && !M.value[o].description,
        onClick: () => H.value && u.clearLang(H.value, o)
      }
    ], He = (o) => u.getCategoryName(o), fe = (o) => {
      T.value?.reset(), L.value?.reset(), u.closeDialog();
    }, $e = () => {
      qe(), T.value?.reset(), L.value?.reset(), u.openCreateDialog();
    }, ze = async (o) => {
      T.value?.reset(), L.value?.reset(), a.id = o.id, a.name = o.name, a.iconUrl = o.iconUrl, a.price = o.price, a.animationUrl = o.animationUrl || "", a.levelNum = o.level != null ? parseInt(o.level) : void 0, a.description = o.description || "", a.extensionInfo = o.extensionInfo || "", a.enabled = o.enabled ?? !0, u.openEditDialog(o), await gt(), o.iconUrl && T.value && T.value.switchToUrlMode(), o.animationUrl && L.value && L.value.switchToUrlMode();
    }, qe = () => {
      a.id = "", a.name = "", a.iconUrl = "", a.price = 0, a.animationUrl = "", a.levelNum = void 0, a.description = "", a.extensionInfo = "", a.enabled = !0, $.value = !1, le.value = !1;
    }, je = async () => {
      if (!a.id.trim() && !R.value) {
        E.error(t(l.ENTER_GIFT_ID));
        return;
      }
      if (g(a.id) > S) {
        E.error(t(l.MAX_BYTES, { field: t(l.GIFT_ID), max: S }));
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
      const o = T.value?.isUrlInputMode ?? !0, c = o && (T.value?.urlInputValue?.trim?.() || "");
      if (!$.value && !a.iconUrl.trim() && !c) {
        o && T.value?.setUrlError(t(l.ENTER_THUMBNAIL_URL)), E.error(t(l.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (a.description && g(a.description) > C) {
        E.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: C }));
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
      B.value = !0;
      try {
        const [h, y] = await Lt([
          {
            handle: T.value,
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
        ]), ae = At(
          { ...a, level: a.levelNum != null ? String(a.levelNum) : void 0 },
          h,
          y
        );
        await u.submitGift(ae);
      } catch (h) {
        Le.error("GiftConfig", `Image upload failed: ${h?.message || t(l.UNKNOWN_HOST)}`, h), E.error(yt(h, t(l.THUMBNAIL)));
      } finally {
        B.value = !1;
      }
    }, Je = (o) => {
      u.openGiftLangConfigDialog(o);
    }, me = () => u.closeGiftLangConfigDialog(), pe = (o, c) => {
      c && u.openLangEditDialog(o, c);
    }, We = async () => {
      const o = b.value;
      if (o.name && g(o.name) > I) {
        E.error(t(l.MAX_BYTES, { field: t(l.GIFT_NAME), max: I }));
        return;
      }
      if (o.description && g(o.description) > C) {
        E.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: C }));
        return;
      }
      await u.saveLangEdit();
    }, Qe = (o) => {
      u.openCategoryEditDialog(o);
    }, Ze = (o) => {
      u.requestRemoveCategory(o);
    }, Ke = () => {
      u.confirmRemoveCategory();
    }, et = () => u.openCategorySelectDialog(), tt = () => {
      u.confirmAddCategory();
    }, lt = (o) => u.requestDelete(o), at = () => {
      u.confirmDelete();
    }, _e = () => u.onLanguageChanged();
    return ct(async () => {
      w.value = await Gt(), Te.on("languageChanged", _e), await u.init();
    }), ut(() => {
      Te.off("languageChanged", _e), Ue(), u.dispose();
    }), (o, c) => {
      const h = A("t-input"), y = A("t-button"), ae = A("t-card"), N = A("t-form-item"), ve = A("t-input-number"), ot = A("t-textarea"), Ee = A("t-form"), U = A("t-dialog"), nt = A("t-option"), it = A("t-select");
      return _(), v("div", St, [
        r("div", Mt, [
          r("h1", Ot, s(e(t)(e(l).GIFT_MANAGEMENT)), 1),
          r("div", xt, [
            r("div", Dt, [
              d(h, {
                "model-value": Q.value,
                placeholder: e(t)(e(l).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: e(be)(Q.value, e(Ne)) ? "error" : "default",
                tips: e(be)(Q.value, e(Ne)) ? e(t)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": Ve,
                onEnter: ge,
                onClear: Pe
              }, {
                suffixIcon: i(() => [
                  d(e(mt), {
                    class: "search-icon",
                    onClick: ge
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            d(y, {
              variant: "outline",
              shape: "round",
              onClick: we,
              theme: "primary"
            }, {
              icon: i(() => [
                d(e(pt))
              ]),
              default: i(() => [
                p(" " + s(e(t)(e(l).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            d(y, {
              theme: "primary",
              shape: "round",
              onClick: $e
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
            d(Ut, {
              columns: e(Re),
              data: Se.value,
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
                r("div", kt, [
                  r("span", Vt, s(n.id || "-"), 1),
                  d(e(_t), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (F) => Be(n.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": i(({ row: n }) => [
                r("div", Pt, [
                  n.iconUrl ? (_(), v("img", {
                    key: 0,
                    src: n.iconUrl,
                    alt: n.name
                  }, null, 8, Bt)) : (_(), v("span", wt, "🎁"))
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
                  onClick: (F) => Qe(n)
                }, [
                  r("span", null, s(n.categories?.join(", ") || "-"), 1),
                  d(e(Ce), {
                    class: "gift-category-edit-icon",
                    size: "14"
                  })
                ], 8, Xt)
              ]),
              "cell-languageList": i(({ row: n }) => [
                r("div", Yt, [
                  n.languageList && n.languageList.length > 0 ? (_(!0), v(D, { key: 0 }, z(n.languageList, (F) => (_(), v("span", {
                    key: e(oe)(F),
                    class: "gift-lang-tag",
                    onClick: (fl) => pe(n.id, e(ht)(e(oe)(F)))
                  }, s(e(t)(e(bt)(e(oe)(F)))), 9, Ht))), 128)) : (_(), v("span", $t, "-")),
                  d(e(Ce), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (F) => Je(n.id)
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
                p(s(e(Tt)(n.createdAt)), 1)
              ]),
              "cell-customer-extra": i(({ row: n }) => [
                d(ne, {
                  "slot-component": e(W)?.giftTableExtraColumns,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              "cell-actions": i(({ row: n }) => [
                d(Ge, {
                  actions: Xe(n)
                }, null, 8, ["actions"]),
                d(ne, {
                  "slot-component": e(W)?.giftRowActions,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: i(() => [
                r("div", zt, [
                  c[18] || (c[18] = r("div", { class: "gift-loading-spinner" }, null, -1)),
                  r("span", qt, s(e(t)(e(l).LOADING)), 1)
                ])
              ]),
              empty: i(() => [
                r("div", jt, [
                  r("span", Jt, s(e(t)(e(l).NO_GIFT_DATA)), 1)
                ])
              ]),
              _: 1
            }, 8, ["columns", "data", "loading"])
          ]),
          _: 1
        }),
        d(U, {
          visible: ie.value,
          "onUpdate:visible": c[9] || (c[9] = (n) => ie.value = n),
          header: R.value ? e(t)(e(l).EDIT_GIFT) : e(t)(e(l).CREATE_GIFT),
          width: "600px",
          placement: "center",
          class: "gift-modal",
          "on-close": () => fe()
        }, {
          footer: i(() => [
            d(y, {
              variant: "outline",
              shape: "round",
              onClick: c[0] || (c[0] = (n) => fe())
            }, {
              default: i(() => [
                p(s(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            d(y, {
              theme: "primary",
              shape: "round",
              disabled: B.value || !R.value && !a.id.trim() || !a.name.trim() || T.value?.isValidating || L.value?.isValidating || T.value?.hasUrlError || L.value?.hasUrlError,
              loading: B.value,
              onClick: je
            }, {
              default: i(() => [
                p(s(B.value ? R.value ? e(t)(e(l).SAVING) : e(t)(e(l).CREATING) : R.value ? e(t)(e(l).SAVE) : e(t)(e(l).CREATE)), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ]),
          default: i(() => [
            d(Ee, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(he)(110),
              colon: !1
            }, {
              default: i(() => [
                R.value ? q("", !0) : (_(), Ie(N, {
                  key: 0,
                  label: e(t)(e(l).GIFT_ID),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(h, {
                      modelValue: a.id,
                      "onUpdate:modelValue": c[1] || (c[1] = (n) => a.id = n),
                      placeholder: e(t)(e(l).ENTER_GIFT_ID),
                      status: e(g)(a.id) > e(S) ? "error" : "default",
                      tips: e(g)(a.id) > e(S) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_ID), max: e(S) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(a.id) > e(S) }])
                        }, s(e(g)(a.id)) + "/" + s(e(S)), 3)
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
                    d(ve, {
                      "model-value": a.price,
                      min: Y,
                      max: J,
                      "decimal-places": 0,
                      status: a.price < Y || a.price > J ? "error" : "default",
                      tips: a.price < Y || a.price > J ? e(t)(e(l).GIFT_PRICE_RANGE, { min: Y, max: J }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_PRICE),
                      "onUpdate:modelValue": Oe
                    }, null, 8, ["model-value", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(N, {
                  label: e(t)(e(l).GIFT_LEVEL)
                }, {
                  default: i(() => [
                    d(ve, {
                      "model-value": a.levelNum,
                      min: a.levelNum != null ? V : void 0,
                      max: a.levelNum != null ? P : void 0,
                      status: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < V || (a.levelNum ?? 0) > P) ? "error" : "default",
                      tips: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < V || (a.levelNum ?? 0) > P) ? e(t)(e(l).GIFT_LEVEL_RANGE, { min: V, max: P }) : "",
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
                    d(Ae, {
                      ref_key: "iconUploadRef",
                      ref: T,
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
                    d(Ae, {
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
                      status: e(g)(a.description) > e(C) ? "error" : "default",
                      tips: e(g)(a.description) > e(C) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(C) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(a.description) > e(C) }])
                        }, s(e(g)(a.description)) + "/" + s(e(C)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(ne, {
                  "slot-component": e(W)?.giftFormExtraFields,
                  "slot-props": { mode: R.value ? "edit" : "create", formData: { ...a } }
                }, null, 8, ["slot-component", "slot-props"]),
                d(N, {
                  label: e(t)(e(l).CUSTOM_EXTENSION_INFO)
                }, {
                  default: i(() => [
                    r("div", Wt, [
                      d(ot, {
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
                    e(g)(a.extensionInfo) > e(X) ? (_(), v("div", Qt, s(e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).CUSTOM_EXTENSION_INFO), max: e(X) })), 1)) : q("", !0)
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "on-close"]),
        d(U, {
          visible: se.value,
          "onUpdate:visible": c[10] || (c[10] = (n) => se.value = n),
          header: e(t)(e(l).GIFT_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: e(t)(e(l).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": me,
          onConfirm: me
        }, {
          default: i(() => [
            r("div", Zt, [
              r("div", Kt, [
                (_(), v("svg", el, [...c[19] || (c[19] = [
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
              r("table", tl, [
                r("thead", null, [
                  r("tr", null, [
                    r("th", null, s(e(t)(e(l).LANGUAGE_TYPE)), 1),
                    r("th", null, s(e(t)(e(l).GIFT_NAME)), 1),
                    r("th", null, s(e(t)(e(l).DESCRIPTION)), 1),
                    r("th", null, s(e(t)(e(l).ACTIONS)), 1)
                  ])
                ]),
                r("tbody", null, [
                  (_(!0), v(D, null, z(e(Nt), (n) => (_(), v("tr", { key: n }, [
                    r("td", null, s(e(t)(e(j)[n].label)), 1),
                    r("td", ll, [
                      M.value[n].name ? (_(), v(D, { key: 0 }, [
                        p(s(M.value[n].name), 1)
                      ], 64)) : (_(), v("span", al, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", ol, [
                      M.value[n].description ? (_(), v(D, { key: 0 }, [
                        p(s(M.value[n].description), 1)
                      ], 64)) : (_(), v("span", nl, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", null, [
                      d(Ge, {
                        actions: Ye(n)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        d(U, {
          visible: re.value,
          "onUpdate:visible": c[11] || (c[11] = (n) => re.value = n),
          header: O.value ? e(t)(e(l).EDIT_GIFT_LANGUAGE_INFO, { lang: e(t)(e(j)[O.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: e(t)(e(l).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: We
        }, {
          default: i(() => [
            d(Ee, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(he)(110),
              colon: !1
            }, {
              default: i(() => [
                d(N, {
                  label: e(t)(e(l).GIFT_NAME)
                }, {
                  default: i(() => [
                    d(h, {
                      "model-value": b.value.name,
                      placeholder: O.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_NAME, { lang: e(t)(e(j)[O.value].label) }) : "",
                      status: e(g)(b.value.name) > e(I) ? "error" : "default",
                      tips: e(g)(b.value.name) > e(I) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_NAME), max: e(I) }) : "",
                      "onUpdate:modelValue": De
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
                      placeholder: O.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: e(t)(e(j)[O.value].label) }) : "",
                      status: e(g)(b.value.description) > e(C) ? "error" : "default",
                      tips: e(g)(b.value.description) > e(C) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(C) }) : "",
                      "onUpdate:modelValue": ke
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: k(["input-suffix-count", { "byte-overflow": e(g)(b.value.description) > e(C) }])
                        }, s(e(g)(b.value.description)) + "/" + s(e(C)), 3)
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
        d(U, {
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
            r("div", il, [
              Z.value.length > 0 ? (_(!0), v(D, { key: 0 }, z(Z.value, (n) => (_(), v("span", {
                key: n,
                class: "gift-category-edit-tag"
              }, [
                p(s(He(n)) + " ", 1),
                r("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (F) => Ze(n)
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
                ])], 8, sl)
              ]))), 128)) : q("", !0),
              r("div", rl, [
                d(y, {
                  size: "small",
                  variant: "text",
                  theme: "primary",
                  onClick: et
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
        d(U, {
          visible: ce.value,
          "onUpdate:visible": c[14] || (c[14] = (n) => ce.value = n),
          header: e(t)(e(l).CONFIRM_ACTION_TITLE, { action: e(t)(e(l).GIFT_DELETE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(l).CONFIRM), shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: at
        }, {
          default: i(() => [
            r("p", null, s(e(t)(e(l).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(U, {
          visible: de.value,
          "onUpdate:visible": c[15] || (c[15] = (n) => de.value = n),
          header: e(t)(e(l).CONFIRM_ACTION_TITLE, { action: e(t)(e(l).GIFT_CATEGORY_REMOVE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(l).CONFIRM), shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: Ke
        }, {
          default: i(() => [
            r("p", null, s(e(t)(e(l).REMOVE_CATEGORY_DESCRIPTION)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(U, {
          visible: ee.value,
          "onUpdate:visible": c[17] || (c[17] = (n) => ee.value = n),
          header: e(t)(e(l).SELECT_CATEGORY),
          width: "360px",
          placement: "center",
          footer: !1,
          "on-close": () => ee.value = !1
        }, {
          default: i(() => [
            r("div", dl, [
              d(it, {
                modelValue: te.value,
                "onUpdate:modelValue": c[16] || (c[16] = (n) => te.value = n),
                placeholder: e(t)(e(l).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: i(() => [
                  (_(!0), v(D, null, z(ue.value, (n) => (_(), Ie(nt, {
                    key: n.id,
                    value: n.id,
                    label: n.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              ue.value.length === 0 ? (_(), v("div", cl, s(e(t)(e(l).NO_AVAILABLE_CATEGORIES)), 1)) : q("", !0)
            ]),
            r("div", ul, [
              d(y, {
                theme: "primary",
                shape: "round",
                disabled: !te.value,
                onClick: tt
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
  Rl as default
};
