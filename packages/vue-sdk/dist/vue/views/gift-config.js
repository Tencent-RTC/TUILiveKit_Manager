import { defineComponent as _t, shallowRef as vt, computed as m, ref as S, reactive as Et, onMounted as It, onBeforeUnmount as Tt, resolveComponent as N, openBlock as _, createElementBlock as v, createElementVNode as r, toDisplayString as s, unref as e, createVNode as d, withCtx as i, createTextVNode as g, Fragment as k, renderList as W, createBlock as j, normalizeClass as V, createCommentVNode as P, nextTick as Ct } from "vue";
import { useRouter as ht } from "vue-router";
import { SearchIcon as bt, AdjustmentIcon as Nt, AddIcon as he, EditIcon as be, CopyIcon as At, HelpCircleIcon as Ne } from "tdesign-icons-vue-next";
import { MessagePlugin as I, Tooltip as Ae } from "tdesign-vue-next";
import { useUIKit as yt, i18next as ye } from "@tencentcloud/uikit-base-component-vue3";
import { c as Gt, a as Lt, I as l, g as Ge, v as Rt } from "../../chunks/shared-state.DVNvfj7e.js";
import { K as Ot, be as Le, J as Re, aN as Ut, aY as xt, aW as ne, aZ as Ft, g as f, H as F, I as T, z as C, F as H, b as Dt, a as J, ad as Mt } from "../../chunks/main-layout.8WX-Nzxd.js";
import { d as St, b as kt } from "../../chunks/image-upload-resolve.CUCSpady.js";
import { g as Vt } from "../../chunks/PreviewUrlController.Bh9ZwVwJ.js";
import { g as Pt } from "../../chunks/columns.El7kYnni.js";
import { u as wt, a as ie } from "../../chunks/useAsyncAction.DOxAQMNT.js";
import { I as Oe } from "../../chunks/ImageUpload.BBIqXO2l.js";
import { _ as Bt, a as Ue } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { _ as se } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.C69u4If7.js";
/* empty css                                */
const Yt = { class: "gift-config-container" }, Xt = { class: "gift-config-page-header" }, Ht = { class: "gift-config-title" }, zt = { class: "gift-config-actions" }, $t = { class: "gift-search-input" }, qt = { class: "gift-id" }, Wt = { class: "gift-id-text" }, jt = { class: "gift-thumbnail" }, Jt = ["src", "alt"], Zt = { key: 1 }, Qt = ["onClick"], Kt = { class: "gift-lang-tags" }, el = ["onClick"], tl = {
  key: 1,
  class: "gift-lang-empty"
}, ll = { class: "gift-loading-container" }, al = { class: "gift-loading-text" }, ol = {
  key: 0,
  class: "gift-empty-container"
}, nl = { class: "gift-empty-text" }, il = {
  key: 1,
  class: "gift-empty-container"
}, sl = { class: "empty-guide-icon" }, rl = { class: "empty-guide-title" }, dl = { class: "empty-guide-desc" }, cl = { class: "empty-guide-actions" }, ul = { style: { display: "flex", gap: "8px", "align-items": "flex-start" } }, fl = { style: { display: "inline-flex", "align-items": "center" } }, gl = {
  href: "https://cloud.tencent.com/document/product/647/123012#159bb20a-d83d-4fde-a37b-1ff99632ee2c",
  target: "_blank",
  rel: "noopener noreferrer",
  style: { color: "#6ea1ff", "text-decoration": "underline" }
}, pl = { style: { display: "inline-flex", "align-items": "center" } }, ml = {
  href: "https://cloud.tencent.com/document/product/647/123012#159bb20a-d83d-4fde-a37b-1ff99632ee2c",
  target: "_blank",
  rel: "noopener noreferrer",
  style: { color: "#6ea1ff", "text-decoration": "underline" }
}, _l = { class: "textarea-count-wrapper" }, vl = {
  key: 0,
  class: "form-field__error-tip"
}, El = { class: "gift-lang-config-container" }, Il = { class: "gift-lang-config-info-banner" }, Tl = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, Cl = { class: "gift-lang-config-table" }, hl = { class: "gift-lang-table-cell-name" }, bl = {
  key: 1,
  class: "gift-lang-table-empty"
}, Nl = { class: "gift-lang-table-cell-desc" }, Al = {
  key: 1,
  class: "gift-lang-table-empty"
}, yl = { class: "gift-category-edit-tags" }, Gl = ["onClick"], Ll = { class: "gift-category-add-wrapper" }, Rl = { class: "category-select-list" }, Ol = {
  key: 0,
  class: "category-select-empty"
}, Ul = { class: "category-select-footer" }, z = 0, Z = 2147483647, w = 0, B = 99, jl = /* @__PURE__ */ _t({
  __name: "gift-config",
  setup(xl) {
    const xe = Gt("GiftConfig"), Fe = ht(), Q = Lt().components?.giftConfig, De = Pt(), { t } = yt(), G = wt(), u = new Ot({
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
        success: (o) => I.success(o),
        error: (o) => I.error(o)
      },
      onNavigateToCategoryManagement: () => Fe.push("/gift-category")
    }), p = vt(u.getState()), Me = u.subscribe(() => {
      p.value = u.getState();
    }), Se = m(() => p.value.loading), ke = m(() => p.value.displayList), Y = m(() => p.value.searchInput), R = m(() => p.value.isEdit), $ = m(() => p.value.editingId);
    m(() => p.value.giftList), m(() => p.value.categoryList);
    const D = m(() => p.value.giftLangConfig), M = m(() => p.value.editingLang);
    m(() => p.value.editingGiftForLang);
    const b = m(() => p.value.langEditForm);
    m(() => p.value.editingCategoryGift);
    const Ve = m(() => p.value.allCategories), K = m(() => p.value.giftCategoryIds);
    m(() => p.value.deletingCategoryId), m(() => p.value.deletingItem);
    const re = m({
      get: () => p.value.dialogVisible,
      set: (o) => {
        o || u.closeDialog();
      }
    }), de = m({
      get: () => p.value.langConfigVisible,
      set: (o) => {
        o || u.closeGiftLangConfigDialog();
      }
    }), ce = m({
      get: () => p.value.langEditVisible,
      set: (o) => {
        o || u.closeLangEditDialog();
      }
    }), ee = m({
      get: () => p.value.categoryEditVisible,
      set: (o) => {
        o || u.closeCategoryEditDialog();
      }
    }), te = m({
      get: () => p.value.categorySelectVisible,
      set: (o) => u.setCategorySelectVisible(o)
    }), ue = m({
      get: () => p.value.categoryDeleteVisible,
      set: (o) => {
        o || u.cancelRemoveCategory();
      }
    }), fe = m({
      get: () => p.value.deleteDialogVisible,
      set: (o) => {
        o || u.cancelDelete();
      }
    }), le = m({
      get: () => p.value.selectedCategoryId,
      set: (o) => u.setSelectedCategoryId(o)
    }), ge = m(
      () => Ve.value.filter((o) => !K.value.includes(o.id))
    ), X = S(!1), O = S(!1), h = S(null), L = S(null), q = S(!1), ae = S(!1), a = Et({
      id: "",
      name: "",
      iconUrl: "",
      price: 0,
      animationUrl: "",
      levelNum: void 0,
      description: "",
      extensionInfo: "",
      enabled: !0
    }), Pe = (o) => {
      a.price = Number(o) || z;
    }, we = (o) => {
      if (o === "" || o === null || o === void 0) {
        a.levelNum = void 0;
        return;
      }
      a.levelNum = Number(o);
    }, Be = (o) => {
      u.setLangEditForm({ name: String(o ?? "") });
    }, Ye = (o) => {
      u.setLangEditForm({ description: String(o ?? "") });
    }, Xe = (o) => {
      u.setSearchInput(String(o ?? ""));
    }, pe = () => u.search(), He = () => u.clearSearch(), ze = (o) => {
      u.copyGiftId(o);
    }, $e = () => u.goToCategoryManagement(), qe = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => Ze(o)
      },
      {
        key: "delete",
        label: t(l.DELETE),
        danger: !0,
        onClick: () => dt(o)
      }
    ], We = (o) => [
      {
        key: "edit",
        label: t(l.EDIT),
        onClick: () => $.value && Ee($.value, o)
      },
      {
        key: "clear",
        label: t(l.CLEAR),
        danger: !0,
        disabled: !D.value[o].name && !D.value[o].description,
        onClick: () => $.value && u.clearLang($.value, o)
      }
    ], je = (o) => u.getCategoryName(o), me = (o) => {
      h.value?.reset(), L.value?.reset(), u.closeDialog();
    }, Je = () => {
      const o = "0123456789abcdefghijklmnopqrstuvwxyz";
      let c = "";
      for (let E = 0; E < 10; E++)
        c += o[Math.floor(Math.random() * 36)];
      a.id = c;
    }, _e = () => {
      Qe(), h.value?.reset(), L.value?.reset(), u.openCreateDialog();
    }, Ze = async (o) => {
      h.value?.reset(), L.value?.reset(), a.id = o.id, a.name = o.name, a.iconUrl = o.iconUrl, a.price = o.price, a.animationUrl = o.animationUrl || "", a.levelNum = o.level != null ? parseInt(o.level) : void 0, a.description = o.description || "", a.extensionInfo = o.extensionInfo || "", a.enabled = o.enabled ?? !0, u.openEditDialog(o), await Ct(), o.iconUrl && h.value && h.value.switchToUrlMode(), o.animationUrl && L.value && L.value.switchToUrlMode();
    }, Qe = () => {
      a.id = "", a.name = "", a.iconUrl = "", a.price = 0, a.animationUrl = "", a.levelNum = void 0, a.description = "", a.extensionInfo = "", a.enabled = !0, q.value = !1, ae.value = !1;
    }, Ke = async () => {
      if (!a.id.trim() && !R.value) {
        I.error(t(l.ENTER_GIFT_ID));
        return;
      }
      if (f(a.id) > F) {
        I.error(t(l.MAX_BYTES, { field: t(l.GIFT_ID), max: F }));
        return;
      }
      if (!a.name.trim()) {
        I.error(t(l.ENTER_GIFT_NAME));
        return;
      }
      if (f(a.name) > T) {
        I.error(t(l.MAX_BYTES, { field: t(l.GIFT_NAME), max: T }));
        return;
      }
      const o = h.value?.isUrlInputMode ?? !0, c = o && (h.value?.urlInputValue?.trim?.() || "");
      if (!q.value && !a.iconUrl.trim() && !c) {
        o && h.value?.setUrlError(t(l.ENTER_THUMBNAIL_URL)), I.error(t(l.UPLOAD_THUMBNAIL_OR_ENTER_URL));
        return;
      }
      if (a.description && f(a.description) > C) {
        I.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: C }));
        return;
      }
      if (a.levelNum !== void 0 && (a.levelNum < w || a.levelNum > B)) {
        I.error(t(l.GIFT_LEVEL_RANGE, { min: w, max: B }));
        return;
      }
      if (a.extensionInfo.trim()) {
        try {
          JSON.parse(a.extensionInfo.trim());
        } catch {
          I.error(t(l.EXTENSION_INFO_JSON_FORMAT));
          return;
        }
        if (f(a.extensionInfo.trim()) > 100) {
          I.error(t(l.MAX_BYTES, { field: t(l.CUSTOM_EXTENSION_INFO), max: 100 }));
          return;
        }
      }
      X.value = !0;
      try {
        const [E, A] = await St([
          {
            handle: h.value,
            hasPendingFile: q.value,
            fallbackUrl: a.iconUrl,
            label: t(l.THUMBNAIL)
          },
          {
            handle: L.value,
            hasPendingFile: ae.value,
            fallbackUrl: a.animationUrl,
            label: t(l.GIFT_MATERIAL)
          }
        ]), oe = Mt(
          { ...a, level: a.levelNum != null ? String(a.levelNum) : void 0 },
          E,
          A
        );
        await u.submitGift(oe);
      } catch (E) {
        xe.error("GiftConfig", `Image upload failed: ${E?.message || t(l.UNKNOWN_HOST)}`, E), I.error(kt(E, t(l.THUMBNAIL)));
      } finally {
        X.value = !1;
      }
    }, et = (o) => {
      u.openGiftLangConfigDialog(o);
    }, ve = () => u.closeGiftLangConfigDialog(), Ee = (o, c) => {
      c && u.openLangEditDialog(o, c);
    }, tt = async () => {
      const o = b.value;
      if (o.name && f(o.name) > T) {
        I.error(t(l.MAX_BYTES, { field: t(l.GIFT_NAME), max: T }));
        return;
      }
      if (o.description && f(o.description) > C) {
        I.error(t(l.MAX_BYTES, { field: t(l.DESCRIPTION), max: C }));
        return;
      }
      try {
        await u.saveLangEdit(), I.success(Rt(t).opSuccess(l.GIFT_MULTILINGUAL_SAVE));
      } catch {
      }
    }, lt = (o) => {
      u.openCategoryEditDialog(o);
    }, at = (o) => {
      u.requestRemoveCategory(o);
    }, { execute: ot } = ie({
      toast: { action: l.GIFT_CATEGORY_REMOVE_OPERATION },
      operationName: t(l.GIFT_CATEGORY_REMOVE_OPERATION),
      action: async () => {
        await u.confirmRemoveCategory();
      }
    }), nt = () => {
      ot();
    }, it = () => u.openCategorySelectDialog(), { execute: st } = ie({
      toast: { action: l.GIFT_CATEGORY_ADD_OPERATION },
      operationName: t(l.GIFT_CATEGORY_ADD_OPERATION),
      action: async () => {
        await u.confirmAddCategory();
      }
    }), rt = () => {
      st();
    }, dt = (o) => u.requestDelete(o), { execute: ct } = ie({
      toast: { action: l.LABEL_DELETED, entity: l.GIFT },
      operationName: t(l.GIFT_DELETE_OPERATION),
      action: async () => {
        await u.confirmDelete();
      }
    }), ut = () => {
      ct();
    }, Ie = () => u.onLanguageChanged();
    return It(async () => {
      O.value = await Vt(), ye.on("languageChanged", Ie), await u.init();
    }), Tt(() => {
      ye.off("languageChanged", Ie), Me(), u.dispose();
    }), (o, c) => {
      const E = N("t-input"), A = N("t-button"), oe = N("t-card"), ft = N("t-tooltip"), y = N("t-form-item"), Te = N("t-input-number"), gt = N("t-textarea"), Ce = N("t-form"), U = N("t-dialog"), pt = N("t-option"), mt = N("t-select");
      return _(), v("div", Yt, [
        r("div", Xt, [
          r("h1", Ht, s(e(t)(e(l).GIFT_MANAGEMENT)), 1),
          r("div", zt, [
            r("div", $t, [
              d(E, {
                "model-value": Y.value,
                placeholder: e(t)(e(l).SEARCH_GIFT_PLACEHOLDER),
                clearable: "",
                status: e(Le)(Y.value, e(Re)) ? "error" : "default",
                tips: e(Le)(Y.value, e(Re)) ? e(t)(e(l).INPUT_EXCEEDS_LENGTH_LIMIT) : "",
                "onUpdate:modelValue": Xe,
                onEnter: pe,
                onClear: He
              }, {
                suffixIcon: i(() => [
                  d(e(bt), {
                    class: "search-icon",
                    onClick: pe
                  })
                ]),
                _: 1
              }, 8, ["model-value", "placeholder", "status", "tips"])
            ]),
            d(A, {
              variant: "outline",
              shape: "round",
              onClick: $e,
              theme: "primary"
            }, {
              icon: i(() => [
                d(e(Nt))
              ]),
              default: i(() => [
                g(" " + s(e(t)(e(l).CATEGORY_MANAGEMENT)), 1)
              ]),
              _: 1
            }),
            d(A, {
              theme: "primary",
              shape: "round",
              onClick: _e
            }, {
              default: i(() => [
                g(" ＋ " + s(e(t)(e(l).ADD_GIFT)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        d(oe, { class: "gift-list-card" }, {
          default: i(() => [
            d(Bt, {
              columns: e(De),
              data: ke.value,
              "row-key": "id",
              loading: Se.value,
              "table-class-name": "gift-table",
              "body-class-name": "gift-list-content",
              "row-class-name": "gift-row"
            }, {
              "header-id": i(() => [
                g(s(e(t)(e(l).GIFT_ID)), 1)
              ]),
              "header-iconUrl": i(() => [
                g(s(e(t)(e(l).THUMBNAIL)), 1)
              ]),
              "header-name": i(() => [
                g(s(e(t)(e(l).NAME)), 1)
              ]),
              "header-description": i(() => [
                g(s(e(t)(e(l).DESCRIPTION)), 1)
              ]),
              "header-categories": i(() => [
                g(s(e(t)(e(l).CATEGORY)), 1)
              ]),
              "header-languageList": i(() => [
                g(s(e(t)(e(l).MULTILINGUAL_CONFIG)), 1)
              ]),
              "header-level": i(() => [
                g(s(e(t)(e(l).LEVEL)), 1)
              ]),
              "header-price": i(() => [
                g(s(e(t)(e(l).PRICE)), 1)
              ]),
              "header-createdAt": i(() => [
                g(s(e(t)(e(l).CREATE_TIME)), 1)
              ]),
              "header-actions": i(() => [
                g(s(e(t)(e(l).ACTIONS)), 1)
              ]),
              "cell-id": i(({ row: n }) => [
                r("div", qt, [
                  r("span", Wt, s(n.id || "-"), 1),
                  d(e(At), {
                    class: "copy-icon",
                    size: "14",
                    onClick: (x) => ze(n.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-iconUrl": i(({ row: n }) => [
                r("div", jt, [
                  n.iconUrl ? (_(), v("img", {
                    key: 0,
                    src: n.iconUrl,
                    alt: n.name
                  }, null, 8, Jt)) : (_(), v("span", Zt, "🎁"))
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
                  onClick: (x) => lt(n)
                }, [
                  r("span", null, s(n.categories?.join(", ") || "-"), 1),
                  d(e(be), {
                    class: "gift-category-edit-icon",
                    size: "14"
                  })
                ], 8, Qt)
              ]),
              "cell-languageList": i(({ row: n }) => [
                r("div", Kt, [
                  n.languageList && n.languageList.length > 0 ? (_(!0), v(k, { key: 0 }, W(n.languageList, (x) => (_(), v("span", {
                    key: e(ne)(x),
                    class: "gift-lang-tag",
                    onClick: (Fl) => Ee(n.id, e(xt)(e(ne)(x)))
                  }, s(e(t)(e(Ft)(e(ne)(x)))), 9, el))), 128)) : (_(), v("span", tl, "-")),
                  d(e(be), {
                    class: "gift-lang-edit-icon",
                    size: "14",
                    onClick: (x) => et(n.id)
                  }, null, 8, ["onClick"])
                ])
              ]),
              "cell-level": i(({ row: n }) => [
                g(s(n.level || "-"), 1)
              ]),
              "cell-price": i(({ row: n }) => [
                g(s(n.price ?? 0), 1)
              ]),
              "cell-createdAt": i(({ row: n }) => [
                g(s(e(Ut)(n.createdAt)), 1)
              ]),
              "cell-customer-extra": i(({ row: n }) => [
                d(se, {
                  "slot-component": e(Q)?.giftTableExtraColumns,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              "cell-actions": i(({ row: n }) => [
                d(Ue, {
                  actions: qe(n)
                }, null, 8, ["actions"]),
                d(se, {
                  "slot-component": e(Q)?.giftRowActions,
                  "slot-props": { gift: n }
                }, null, 8, ["slot-component", "slot-props"])
              ]),
              loading: i(() => [
                r("div", ll, [
                  c[18] || (c[18] = r("div", { class: "gift-loading-spinner" }, null, -1)),
                  r("span", al, s(e(t)(e(l).LOADING)), 1)
                ])
              ]),
              empty: i(() => [
                Y.value ? (_(), v("div", ol, [
                  r("span", nl, s(e(t)(e(l).NO_GIFT_FOUND, { keyword: Y.value })), 1)
                ])) : (_(), v("div", il, [
                  r("div", sl, [
                    d(e(he), { size: "40px" })
                  ]),
                  r("p", rl, s(e(t)(e(l).EMPTY_GIFT_TITLE)), 1),
                  r("p", dl, s(e(t)(e(l).EMPTY_GIFT_DESC)), 1),
                  r("div", cl, [
                    d(A, {
                      theme: "primary",
                      shape: "round",
                      class: "empty-guide-cta",
                      onClick: _e
                    }, {
                      icon: i(() => [
                        d(e(he))
                      ]),
                      default: i(() => [
                        g(" " + s(e(t)(e(l).ADD_GIFT)), 1)
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
        d(U, {
          visible: re.value,
          "onUpdate:visible": c[9] || (c[9] = (n) => re.value = n),
          header: R.value ? e(t)(e(l).EDIT_GIFT) : e(t)(e(l).CREATE_GIFT),
          width: "600px",
          placement: "center",
          class: "gift-modal",
          "on-close": () => me()
        }, {
          footer: i(() => [
            d(A, {
              variant: "outline",
              shape: "round",
              onClick: c[0] || (c[0] = (n) => me())
            }, {
              default: i(() => [
                g(s(e(t)(e(l).CANCEL)), 1)
              ]),
              _: 1
            }),
            d(A, {
              theme: "primary",
              shape: "round",
              disabled: X.value || !R.value && !a.id.trim() || !a.name.trim() || h.value?.isValidating || L.value?.isValidating || h.value?.hasUrlError || L.value?.hasUrlError,
              loading: X.value,
              onClick: Ke
            }, {
              default: i(() => [
                g(s(X.value ? R.value ? e(t)(e(l).SAVING) : e(t)(e(l).CREATING) : R.value ? e(t)(e(l).SAVE) : e(t)(e(l).CREATE)), 1)
              ]),
              _: 1
            }, 8, ["disabled", "loading"])
          ]),
          default: i(() => [
            d(Ce, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(Ge)(110),
              colon: !1
            }, {
              default: i(() => [
                R.value ? P("", !0) : (_(), j(y, {
                  key: 0,
                  label: e(t)(e(l).GIFT_ID),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    r("div", ul, [
                      d(E, {
                        modelValue: a.id,
                        "onUpdate:modelValue": c[1] || (c[1] = (n) => a.id = n),
                        placeholder: e(t)(e(l).ENTER_GIFT_ID),
                        status: e(f)(a.id) > e(F) ? "error" : "default",
                        tips: e(f)(a.id) > e(F) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_ID), max: e(F) }) : "",
                        style: { flex: "1" }
                      }, {
                        suffix: i(() => [
                          r("span", {
                            class: V(["input-suffix-count", { "byte-overflow": e(f)(a.id) > e(F) }])
                          }, s(e(f)(a.id)) + "/" + s(e(F)), 3)
                        ]),
                        _: 1
                      }, 8, ["modelValue", "placeholder", "status", "tips"]),
                      d(ft, {
                        content: e(t)(e(l).RANDOM_GENERATE_ID)
                      }, {
                        default: i(() => [
                          d(A, {
                            variant: "text",
                            shape: "square",
                            onClick: Je
                          }, {
                            default: i(() => [...c[19] || (c[19] = [
                              g(" 🎲 ", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["content"])
                    ])
                  ]),
                  _: 1
                }, 8, ["label"])),
                d(y, {
                  label: e(t)(e(l).GIFT_PRICE),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(Te, {
                      "model-value": a.price,
                      min: z,
                      max: Z,
                      "decimal-places": 0,
                      status: a.price < z || a.price > Z ? "error" : "default",
                      tips: a.price < z || a.price > Z ? e(t)(e(l).GIFT_PRICE_RANGE, { min: z, max: Z }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_PRICE),
                      "onUpdate:modelValue": Pe
                    }, null, 8, ["model-value", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(y, {
                  label: e(t)(e(l).GIFT_LEVEL)
                }, {
                  default: i(() => [
                    d(Te, {
                      "model-value": a.levelNum,
                      min: a.levelNum != null ? w : void 0,
                      max: a.levelNum != null ? B : void 0,
                      status: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < w || (a.levelNum ?? 0) > B) ? "error" : "default",
                      tips: (a.levelNum ?? 0) > 0 && ((a.levelNum ?? 0) < w || (a.levelNum ?? 0) > B) ? e(t)(e(l).GIFT_LEVEL_RANGE, { min: w, max: B }) : "",
                      style: { width: "100%" },
                      placeholder: e(t)(e(l).ENTER_GIFT_LEVEL),
                      "onUpdate:modelValue": we
                    }, null, 8, ["model-value", "min", "max", "status", "tips", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(y, { "required-mark": "" }, {
                  label: i(() => [
                    r("span", fl, [
                      g(s(e(t)(e(l).THUMBNAIL)) + " ", 1),
                      O.value ? P("", !0) : (_(), j(e(Ae), {
                        key: 0,
                        placement: "top"
                      }, {
                        content: i(() => [
                          r("span", null, [
                            g(s(e(t)(e(l).UPLOAD_NOT_CONFIGURED_HINT)) + " ", 1),
                            r("a", gl, s(e(t)(e(l).VIEW_DETAILS)), 1)
                          ])
                        ]),
                        default: i(() => [
                          d(e(Ne), {
                            size: "14px",
                            style: { "margin-left": "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" }
                          })
                        ]),
                        _: 1
                      }))
                    ])
                  ]),
                  default: i(() => [
                    d(Oe, {
                      ref_key: "iconUploadRef",
                      ref: h,
                      modelValue: a.iconUrl,
                      "onUpdate:modelValue": c[2] || (c[2] = (n) => a.iconUrl = n),
                      type: "gift-icon",
                      "upload-enabled": O.value,
                      "crop-enabled": !0,
                      "aspect-ratio": 1,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
                      "preview-width": 120,
                      "preview-height": 120,
                      "max-size": 5,
                      "max-bytes": 200,
                      "defer-upload": O.value,
                      onFileReady: c[3] || (c[3] = (n) => q.value = !!n)
                    }, null, 8, ["modelValue", "upload-enabled", "placeholder", "defer-upload"])
                  ]),
                  _: 1
                }),
                d(y, null, {
                  label: i(() => [
                    r("span", pl, [
                      g(s(e(t)(e(l).GIFT_MATERIAL)) + " ", 1),
                      O.value ? P("", !0) : (_(), j(e(Ae), {
                        key: 0,
                        placement: "top"
                      }, {
                        content: i(() => [
                          r("span", null, [
                            g(s(e(t)(e(l).UPLOAD_NOT_CONFIGURED_HINT)) + " ", 1),
                            r("a", ml, s(e(t)(e(l).VIEW_DETAILS)), 1)
                          ])
                        ]),
                        default: i(() => [
                          d(e(Ne), {
                            size: "14px",
                            style: { "margin-left": "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" }
                          })
                        ]),
                        _: 1
                      }))
                    ])
                  ]),
                  default: i(() => [
                    d(Oe, {
                      ref_key: "animUploadRef",
                      ref: L,
                      modelValue: a.animationUrl,
                      "onUpdate:modelValue": c[4] || (c[4] = (n) => a.animationUrl = n),
                      type: "gift-animation",
                      "upload-enabled": O.value,
                      "crop-enabled": !1,
                      placeholder: e(t)(e(l).CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
                      "url-placeholder": e(t)(e(l).ENTER_FILE_URL),
                      "preview-width": 120,
                      "preview-height": 120,
                      "max-size": 10,
                      accept: "video/mp4,.svga",
                      "accept-hint": e(t)(e(l).SUPPORT_MP4_SVGA_MAX_10MB),
                      "max-bytes": 200,
                      "defer-upload": O.value,
                      "skip-svga-validation": !0,
                      onFileReady: c[5] || (c[5] = (n) => ae.value = !!n)
                    }, null, 8, ["modelValue", "upload-enabled", "placeholder", "url-placeholder", "accept-hint", "defer-upload"])
                  ]),
                  _: 1
                }),
                d(y, {
                  label: e(t)(e(l).GIFT_NAME),
                  "required-mark": ""
                }, {
                  default: i(() => [
                    d(E, {
                      modelValue: a.name,
                      "onUpdate:modelValue": c[6] || (c[6] = (n) => a.name = n),
                      placeholder: e(t)(e(l).ENTER_GIFT_NAME),
                      status: e(f)(a.name) > e(T) ? "error" : "default",
                      tips: e(f)(a.name) > e(T) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_NAME), max: e(T) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: V(["input-suffix-count", { "byte-overflow": e(f)(a.name) > e(T) }])
                        }, s(e(f)(a.name)) + "/" + s(e(T)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(y, {
                  label: e(t)(e(l).DESCRIPTION)
                }, {
                  default: i(() => [
                    d(E, {
                      modelValue: a.description,
                      "onUpdate:modelValue": c[7] || (c[7] = (n) => a.description = n),
                      placeholder: e(t)(e(l).ENTER_GIFT_DESCRIPTION),
                      status: e(f)(a.description) > e(C) ? "error" : "default",
                      tips: e(f)(a.description) > e(C) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(C) }) : ""
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: V(["input-suffix-count", { "byte-overflow": e(f)(a.description) > e(C) }])
                        }, s(e(f)(a.description)) + "/" + s(e(C)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(se, {
                  "slot-component": e(Q)?.giftFormExtraFields,
                  "slot-props": { mode: R.value ? "edit" : "create", formData: { ...a } }
                }, null, 8, ["slot-component", "slot-props"]),
                d(y, {
                  label: e(t)(e(l).CUSTOM_EXTENSION_INFO)
                }, {
                  default: i(() => [
                    r("div", _l, [
                      d(gt, {
                        modelValue: a.extensionInfo,
                        "onUpdate:modelValue": c[8] || (c[8] = (n) => a.extensionInfo = n),
                        placeholder: e(t)(e(l).EXTENSION_INFO_JSON_FORMAT),
                        autosize: { minRows: 3 },
                        status: e(f)(a.extensionInfo) > e(H) ? "error" : "default"
                      }, null, 8, ["modelValue", "placeholder", "status"]),
                      r("span", {
                        class: V(["textarea-suffix-count", { "byte-overflow": e(f)(a.extensionInfo) > e(H) }])
                      }, s(e(f)(a.extensionInfo)) + "/" + s(e(H)), 3)
                    ]),
                    e(f)(a.extensionInfo) > e(H) ? (_(), v("div", vl, s(e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).CUSTOM_EXTENSION_INFO), max: e(H) })), 1)) : P("", !0)
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
          visible: de.value,
          "onUpdate:visible": c[10] || (c[10] = (n) => de.value = n),
          header: e(t)(e(l).GIFT_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: e(t)(e(l).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": ve,
          onConfirm: ve
        }, {
          default: i(() => [
            r("div", El, [
              r("div", Il, [
                (_(), v("svg", Tl, [...c[20] || (c[20] = [
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
              r("table", Cl, [
                r("thead", null, [
                  r("tr", null, [
                    r("th", null, s(e(t)(e(l).LANGUAGE_TYPE)), 1),
                    r("th", null, s(e(t)(e(l).GIFT_NAME)), 1),
                    r("th", null, s(e(t)(e(l).DESCRIPTION)), 1),
                    r("th", null, s(e(t)(e(l).ACTIONS)), 1)
                  ])
                ]),
                r("tbody", null, [
                  (_(!0), v(k, null, W(e(Dt), (n) => (_(), v("tr", { key: n }, [
                    r("td", null, s(e(t)(e(J)[n].label)), 1),
                    r("td", hl, [
                      D.value[n].name ? (_(), v(k, { key: 0 }, [
                        g(s(D.value[n].name), 1)
                      ], 64)) : (_(), v("span", bl, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", Nl, [
                      D.value[n].description ? (_(), v(k, { key: 0 }, [
                        g(s(D.value[n].description), 1)
                      ], 64)) : (_(), v("span", Al, s(e(t)(e(l).NOT_CONFIGURED)), 1))
                    ]),
                    r("td", null, [
                      d(Ue, {
                        actions: We(n)
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
          visible: ce.value,
          "onUpdate:visible": c[11] || (c[11] = (n) => ce.value = n),
          header: M.value ? e(t)(e(l).EDIT_GIFT_LANGUAGE_INFO, { lang: e(t)(e(J)[M.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: e(t)(e(l).SAVE), loading: !1, shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: tt
        }, {
          default: i(() => [
            d(Ce, {
              class: "gift-modal-body",
              "label-align": "right",
              "label-width": e(Ge)(110),
              colon: !1
            }, {
              default: i(() => [
                d(y, {
                  label: e(t)(e(l).GIFT_NAME)
                }, {
                  default: i(() => [
                    d(E, {
                      "model-value": b.value.name,
                      placeholder: M.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_NAME, { lang: e(t)(e(J)[M.value].label) }) : "",
                      status: e(f)(b.value.name) > e(T) ? "error" : "default",
                      tips: e(f)(b.value.name) > e(T) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).GIFT_NAME), max: e(T) }) : "",
                      "onUpdate:modelValue": Be
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: V(["input-suffix-count", { "byte-overflow": e(f)(b.value.name) > e(T) }])
                        }, s(e(f)(b.value.name)) + "/" + s(e(T)), 3)
                      ]),
                      _: 1
                    }, 8, ["model-value", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                d(y, {
                  label: e(t)(e(l).DESCRIPTION)
                }, {
                  default: i(() => [
                    d(E, {
                      "model-value": b.value.description,
                      placeholder: M.value ? e(t)(e(l).ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: e(t)(e(J)[M.value].label) }) : "",
                      status: e(f)(b.value.description) > e(C) ? "error" : "default",
                      tips: e(f)(b.value.description) > e(C) ? e(t)(e(l).MAX_BYTES, { field: e(t)(e(l).DESCRIPTION), max: e(C) }) : "",
                      "onUpdate:modelValue": Ye
                    }, {
                      suffix: i(() => [
                        r("span", {
                          class: V(["input-suffix-count", { "byte-overflow": e(f)(b.value.description) > e(C) }])
                        }, s(e(f)(b.value.description)) + "/" + s(e(C)), 3)
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
          visible: ee.value,
          "onUpdate:visible": c[12] || (c[12] = (n) => ee.value = n),
          header: e(t)(e(l).EDIT_GIFT_CATEGORY),
          width: "420px",
          placement: "center",
          class: "gift-category-edit-modal",
          "confirm-btn": { content: e(t)(e(l).CLOSE), shape: "round" },
          "cancel-btn": null,
          onConfirm: c[13] || (c[13] = (n) => ee.value = !1)
        }, {
          default: i(() => [
            r("div", yl, [
              K.value.length > 0 ? (_(!0), v(k, { key: 0 }, W(K.value, (n) => (_(), v("span", {
                key: n,
                class: "gift-category-edit-tag"
              }, [
                g(s(je(n)) + " ", 1),
                r("button", {
                  class: "gift-category-edit-tag-close",
                  onClick: (x) => at(n)
                }, [...c[21] || (c[21] = [
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
                ])], 8, Gl)
              ]))), 128)) : P("", !0),
              r("div", Ll, [
                d(A, {
                  size: "small",
                  variant: "text",
                  theme: "primary",
                  onClick: it
                }, {
                  default: i(() => [
                    g(" + " + s(e(t)(e(l).ADD)), 1)
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        d(U, {
          visible: fe.value,
          "onUpdate:visible": c[14] || (c[14] = (n) => fe.value = n),
          header: e(t)(e(l).CONFIRM_ACTION_TITLE, { action: e(t)(e(l).GIFT_DELETE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(l).CONFIRM), shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: ut
        }, {
          default: i(() => [
            r("p", null, s(e(t)(e(l).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(U, {
          visible: ue.value,
          "onUpdate:visible": c[15] || (c[15] = (n) => ue.value = n),
          header: e(t)(e(l).CONFIRM_ACTION_TITLE, { action: e(t)(e(l).GIFT_CATEGORY_REMOVE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(l).CONFIRM), shape: "round" },
          "cancel-btn": { content: e(t)(e(l).CANCEL), shape: "round" },
          onConfirm: nt
        }, {
          default: i(() => [
            r("p", null, s(e(t)(e(l).REMOVE_CATEGORY_DESCRIPTION)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]),
        d(U, {
          visible: te.value,
          "onUpdate:visible": c[17] || (c[17] = (n) => te.value = n),
          header: e(t)(e(l).SELECT_CATEGORY),
          width: "360px",
          placement: "center",
          footer: !1,
          "on-close": () => te.value = !1
        }, {
          default: i(() => [
            r("div", Rl, [
              d(mt, {
                modelValue: le.value,
                "onUpdate:modelValue": c[16] || (c[16] = (n) => le.value = n),
                placeholder: e(t)(e(l).SELECT_CATEGORY_LOWERCASE),
                style: { width: "100%" }
              }, {
                default: i(() => [
                  (_(!0), v(k, null, W(ge.value, (n) => (_(), j(pt, {
                    key: n.id,
                    value: n.id,
                    label: n.name
                  }, null, 8, ["value", "label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "placeholder"]),
              ge.value.length === 0 ? (_(), v("div", Ol, s(e(t)(e(l).NO_AVAILABLE_CATEGORIES)), 1)) : P("", !0)
            ]),
            r("div", Ul, [
              d(A, {
                theme: "primary",
                shape: "round",
                disabled: !le.value,
                onClick: rt
              }, {
                default: i(() => [
                  g(s(e(t)(e(l).CONFIRM)), 1)
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
  jl as default
};
