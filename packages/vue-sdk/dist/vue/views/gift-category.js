import { defineComponent as ue, shallowRef as ge, computed as f, ref as fe, onMounted as me, onBeforeUnmount as _e, resolveComponent as R, openBlock as _, createElementBlock as E, createElementVNode as n, createVNode as u, unref as e, withCtx as r, toDisplayString as i, normalizeClass as G, createTextVNode as p, createCommentVNode as Ee, Fragment as S, renderList as Q } from "vue";
import { useRouter as pe } from "vue-router";
import { ArrowLeftIcon as Ce, EditIcon as ve, CopyIcon as Te } from "tdesign-icons-vue-next";
import { MessagePlugin as A } from "tdesign-vue-next";
import { useUIKit as be, i18next as Z } from "@tencentcloud/uikit-base-component-vue3";
import { _ as ye, a as K } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { u as Ae } from "../../chunks/gift.C2r8tUnB.js";
import "../../chunks/logger.DCFRj533.js";
import { I as a, t as ee } from "../../chunks/layout.DppKPdLU.js";
import { G as Ie, a_ as F, b1 as Ge, g, b as he, a as x, as as Le, b0 as Oe } from "../../chunks/main-layout.BqLTYqar.js";
import { g as Re, M as U, C as N, a as C, b as v } from "../../chunks/constants.0sqSRoRZ.js";
/* empty css                                  */
const Ne = { class: "gift-category-container" }, De = { class: "gift-category-page-header" }, Ye = { class: "gift-category-title-section" }, ke = { class: "gift-category-actions" }, Me = {
  key: 0,
  class: "create-category-tooltip"
}, Se = { class: "gift-category-table-wrapper" }, xe = { class: "gift-id" }, Ve = { class: "gift-id-text" }, Fe = { class: "category-lang-tags" }, Ue = ["onClick"], we = {
  key: 1,
  class: "category-lang-empty"
}, Be = { class: "category-loading-container" }, Pe = { class: "category-loading-text" }, Xe = { class: "category-empty-container" }, $e = { class: "category-empty-text" }, qe = { class: "category-lang-config-container" }, ze = { class: "category-lang-config-info-banner" }, He = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, We = { class: "category-lang-config-table" }, je = { class: "category-lang-table-cell-name" }, Je = {
  key: 1,
  class: "category-lang-table-empty"
}, Qe = { class: "category-lang-table-cell-desc" }, Ze = {
  key: 1,
  class: "category-lang-table-empty"
}, ft = /* @__PURE__ */ ue({
  __name: "gift-category",
  setup(Ke) {
    const te = pe(), { t } = be(), y = Ae(), d = new Ie({
      actions: {
        fetchGiftList: y.fetchGiftList,
        createGiftCategory: y.createGiftCategory,
        updateGiftCategory: y.updateGiftCategory,
        deleteGiftCategory: y.deleteGiftCategory,
        getGiftCategoryLanguage: y.getGiftCategoryLanguage,
        setGiftCategoryLanguage: y.setGiftCategoryLanguage,
        deleteGiftCategoryLanguage: y.deleteGiftCategoryLanguage
      },
      t,
      toast: {
        success: (o) => A.success(o),
        error: (o) => A.error(o)
      },
      onNavigateBack: () => te.push("/gift-config")
    }), c = ge(d.getState()), ae = d.subscribe(() => {
      c.value = d.getState();
    }), le = f(() => c.value.loading), D = f(() => c.value.categoryList), V = f(() => c.value.isEdit), m = f(() => c.value.formData), Y = f(() => c.value.categoryLangConfig), I = f(() => c.value.editingLang), T = f(() => c.value.langEditForm), w = f({
      get: () => c.value.dialogVisible,
      set: (o) => {
        o || d.closeDialog();
      }
    }), B = f({
      get: () => c.value.langConfigVisible,
      set: (o) => {
        o || d.closeLangConfigDialog();
      }
    }), P = f({
      get: () => c.value.langEditVisible,
      set: (o) => {
        o || d.closeLangEditDialog();
      }
    }), X = f({
      get: () => c.value.deleteDialogVisible,
      set: (o) => {
        o || d.cancelDelete();
      }
    }), $ = f({
      get: () => c.value.formData.categoryId,
      set: (o) => d.setFormData({ categoryId: o })
    }), q = f({
      get: () => c.value.formData.name,
      set: (o) => d.setFormData({ name: o })
    }), z = f({
      get: () => c.value.formData.description,
      set: (o) => d.setFormData({ description: o })
    }), H = f({
      get: () => c.value.langEditForm.name,
      set: (o) => d.setLangEditForm({ name: o })
    }), W = f({
      get: () => c.value.langEditForm.description,
      set: (o) => d.setLangEditForm({ description: o })
    }), h = fe(!1), oe = Re(), ne = (o) => {
      Le(String(o || "")), A.success(t(a.COPY_LABEL_COPIED, { label: t(a.CATEGORY_ID) }));
    }, ie = (o, s) => {
      const k = F(s), b = Oe(k);
      b && d.openLangEditDialog(o, b);
    }, se = (o) => [
      {
        key: "edit",
        label: t(a.EDIT),
        onClick: () => d.openEditDialog(o)
      },
      {
        key: "delete",
        label: t(a.DELETE),
        danger: !0,
        onClick: () => d.requestDelete(o)
      }
    ], re = (o) => [
      {
        key: "edit",
        label: t(a.EDIT),
        onClick: () => c.value.editingId && d.openLangEditDialog(c.value.editingId, o)
      },
      {
        key: "clear",
        label: t(a.CLEAR),
        danger: !0,
        disabled: !c.value.categoryLangConfig[o].name && !c.value.categoryLangConfig[o].description,
        onClick: () => c.value.editingId && d.clearLang(c.value.editingId, o)
      }
    ], de = async () => {
      const o = c.value.formData;
      if (!o.categoryId.trim()) {
        A.error(t(a.ENTER_CATEGORY_ID));
        return;
      }
      if (!o.name.trim()) {
        A.error(t(a.ENTER_CATEGORY_NAME));
        return;
      }
      h.value = !0;
      try {
        await d.submitForm({
          categoryId: o.categoryId.trim(),
          name: o.name.trim(),
          description: o.description.trim()
        });
      } catch {
      } finally {
        h.value = !1;
      }
    }, ce = async () => {
      const o = c.value.langEditForm;
      if (o.name && g(o.name) > C) {
        A.error(t(a.MAX_BYTES, { field: t(a.CATEGORY_NAME), max: C }));
        return;
      }
      if (o.description && g(o.description) > v) {
        A.error(t(a.MAX_BYTES, { field: t(a.CATEGORY_DESCRIPTION), max: v }));
        return;
      }
      await d.saveLangEdit();
    }, j = () => d.onLanguageChanged();
    return me(() => {
      d.init(), Z.on("languageChanged", j);
    }), _e(() => {
      Z.off("languageChanged", j), ae(), d.dispose();
    }), (o, s) => {
      const k = R("t-button"), b = R("t-input"), L = R("t-form-item"), J = R("t-form"), M = R("t-dialog");
      return _(), E("div", Ne, [
        n("div", De, [
          n("div", Ye, [
            u(k, {
              variant: "outline",
              shape: "circle",
              class: "back-btn",
              onClick: s[0] || (s[0] = (l) => e(d).goBack()),
              title: e(t)(e(a).BACK_TO_LIST)
            }, {
              icon: r(() => [
                u(e(Ce), {
                  "fill-color": "transparent",
                  "stroke-color": "currentColor",
                  "stroke-width": 2
                })
              ]),
              _: 1
            }, 8, ["title"]),
            n("h1", null, i(e(t)(e(a).CATEGORY_MANAGEMENT)), 1)
          ]),
          n("div", ke, [
            n("div", {
              class: G(["create-category-btn-wrapper", { disabled: D.value.length >= e(U) }])
            }, [
              u(k, {
                theme: "primary",
                shape: "round",
                disabled: D.value.length >= e(U),
                onClick: s[1] || (s[1] = (l) => e(d).openCreateDialog())
              }, {
                default: r(() => [
                  p(" ＋ " + i(e(t)(e(a).ADD_CATEGORY)), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              D.value.length >= e(U) ? (_(), E("div", Me, i(e(t)(e(a).CATEGORY_LIMIT_REACHED)), 1)) : Ee("", !0)
            ], 2)
          ])
        ]),
        n("div", Se, [
          u(ye, {
            columns: e(oe),
            data: D.value,
            "row-key": "id",
            loading: le.value,
            "table-class-name": "category-table",
            "body-class-name": "category-list-content"
          }, {
            "header-id": r(() => [
              p(i(e(t)(e(a).CATEGORY_ID)), 1)
            ]),
            "header-name": r(() => [
              p(i(e(t)(e(a).CATEGORY_NAME)), 1)
            ]),
            "header-description": r(() => [
              p(i(e(t)(e(a).CATEGORY_DESCRIPTION)), 1)
            ]),
            "header-languageList": r(() => [
              p(i(e(t)(e(a).MULTILINGUAL_CONFIG)), 1)
            ]),
            "header-giftCount": r(() => [
              p(i(e(t)(e(a).NUMBER_OF_GIFTS)), 1)
            ]),
            "header-actions": r(() => [
              p(i(e(t)(e(a).ACTIONS)), 1)
            ]),
            "cell-id": r(({ row: l }) => [
              n("div", xe, [
                n("span", Ve, i(l.id || "-"), 1),
                u(e(Te), {
                  class: "copy-icon",
                  size: "14",
                  onClick: (O) => ne(l.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-name": r(({ row: l }) => [
              p(i(l.name || "-"), 1)
            ]),
            "cell-description": r(({ row: l }) => [
              p(i(l.description || "-"), 1)
            ]),
            "cell-languageList": r(({ row: l }) => [
              n("div", Fe, [
                l.languageList && l.languageList.length > 0 ? (_(!0), E(S, { key: 0 }, Q(l.languageList, (O) => (_(), E("span", {
                  key: e(F)(O),
                  class: "category-lang-tag",
                  onClick: (et) => ie(l.id, O)
                }, i(e(t)(e(Ge)(e(F)(O)))), 9, Ue))), 128)) : (_(), E("span", we, "-")),
                u(e(ve), {
                  class: "category-lang-edit-icon",
                  size: "14",
                  onClick: (O) => e(d).openLangConfigDialog(l.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-giftCount": r(({ row: l }) => [
              p(i(l.giftCount ?? 0), 1)
            ]),
            "cell-actions": r(({ row: l }) => [
              u(K, {
                actions: se(l)
              }, null, 8, ["actions"])
            ]),
            loading: r(() => [
              n("div", Be, [
                s[13] || (s[13] = n("div", { class: "category-loading-spinner" }, null, -1)),
                n("span", Pe, i(e(t)(e(a).LOADING)), 1)
              ])
            ]),
            empty: r(() => [
              n("div", Xe, [
                n("span", $e, i(e(t)(e(a).CREATE_CATEGORY_FIRST)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data", "loading"])
        ]),
        u(M, {
          visible: w.value,
          "onUpdate:visible": s[5] || (s[5] = (l) => w.value = l),
          header: V.value ? e(t)(e(a).EDIT_CATEGORY) : e(t)(e(a).CREATE_CATEGORY),
          width: "500px",
          placement: "center",
          class: "gift-modal",
          "confirm-btn": {
            content: h.value ? e(t)(e(a).CREATING) : V.value ? e(t)(e(a).SAVE) : e(t)(e(a).CREATE),
            disabled: h.value || !m.value.categoryId.trim() || !m.value.name.trim(),
            loading: h.value,
            shape: "round"
          },
          "cancel-btn": { shape: "round" },
          "on-confirm": de
        }, {
          default: r(() => [
            u(J, {
              class: "gift-modal-body",
              "label-width": e(ee)(100),
              colon: !1
            }, {
              default: r(() => [
                u(L, {
                  label: e(t)(e(a).CATEGORY_ID),
                  "required-mark": !0
                }, {
                  default: r(() => [
                    u(b, {
                      modelValue: $.value,
                      "onUpdate:modelValue": s[2] || (s[2] = (l) => $.value = l),
                      placeholder: e(t)(e(a).ENTER_CATEGORY_ID),
                      disabled: V.value,
                      status: e(g)(m.value.categoryId) > e(N) ? "error" : "default",
                      tips: e(g)(m.value.categoryId) > e(N) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_ID), max: e(N) }) : ""
                    }, {
                      suffix: r(() => [
                        n("span", {
                          class: G(["input-suffix-count", { "byte-overflow": e(g)(m.value.categoryId) > e(N) }])
                        }, i(e(g)(m.value.categoryId)) + "/" + i(e(N)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "disabled", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u(L, {
                  label: e(t)(e(a).CATEGORY_NAME),
                  "required-mark": !0
                }, {
                  default: r(() => [
                    u(b, {
                      modelValue: q.value,
                      "onUpdate:modelValue": s[3] || (s[3] = (l) => q.value = l),
                      placeholder: e(t)(e(a).ENTER_CATEGORY_NAME),
                      status: e(g)(m.value.name) > e(C) ? "error" : "default",
                      tips: e(g)(m.value.name) > e(C) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_NAME), max: e(C) }) : ""
                    }, {
                      suffix: r(() => [
                        n("span", {
                          class: G(["input-suffix-count", { "byte-overflow": e(g)(m.value.name) > e(C) }])
                        }, i(e(g)(m.value.name)) + "/" + i(e(C)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u(L, {
                  label: e(t)(e(a).DESCRIPTION)
                }, {
                  default: r(() => [
                    u(b, {
                      modelValue: z.value,
                      "onUpdate:modelValue": s[4] || (s[4] = (l) => z.value = l),
                      placeholder: e(t)(e(a).ENTER_CATEGORY_DESCRIPTION),
                      status: e(g)(m.value.description) > e(v) ? "error" : "default",
                      tips: e(g)(m.value.description) > e(v) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_DESCRIPTION), max: e(v) }) : ""
                    }, {
                      suffix: r(() => [
                        n("span", {
                          class: G(["input-suffix-count", { "byte-overflow": e(g)(m.value.description) > e(v) }])
                        }, i(e(g)(m.value.description)) + "/" + i(e(v)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        u(M, {
          visible: B.value,
          "onUpdate:visible": s[6] || (s[6] = (l) => B.value = l),
          header: e(t)(e(a).CATEGORY_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: e(t)(e(a).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": () => e(d).closeLangConfigDialog(),
          onConfirm: s[7] || (s[7] = (l) => e(d).closeLangConfigDialog())
        }, {
          default: r(() => [
            n("div", qe, [
              n("div", ze, [
                (_(), E("svg", He, [...s[14] || (s[14] = [
                  n("circle", {
                    cx: "8",
                    cy: "8",
                    r: "7",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5"
                  }, null, -1),
                  n("path", {
                    d: "M8 7V11",
                    stroke: "#1C66E5",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round"
                  }, null, -1),
                  n("circle", {
                    cx: "8",
                    cy: "5",
                    r: "0.75",
                    fill: "#1C66E5"
                  }, null, -1)
                ])])),
                n("span", null, i(e(t)(e(a).CATEGORY_MULTILINGUAL_CONFIG_TIP)), 1)
              ]),
              n("table", We, [
                n("thead", null, [
                  n("tr", null, [
                    n("th", null, i(e(t)(e(a).LANGUAGE_TYPE)), 1),
                    n("th", null, i(e(t)(e(a).CATEGORY_NAME)), 1),
                    n("th", null, i(e(t)(e(a).CATEGORY_DESCRIPTION)), 1),
                    n("th", null, i(e(t)(e(a).ACTIONS)), 1)
                  ])
                ]),
                n("tbody", null, [
                  (_(!0), E(S, null, Q(e(he), (l) => (_(), E("tr", { key: l }, [
                    n("td", null, i(e(t)(e(x)[l].label)), 1),
                    n("td", je, [
                      Y.value[l].name ? (_(), E(S, { key: 0 }, [
                        p(i(Y.value[l].name), 1)
                      ], 64)) : (_(), E("span", Je, i(e(t)(e(a).NOT_CONFIGURED)), 1))
                    ]),
                    n("td", Qe, [
                      Y.value[l].description ? (_(), E(S, { key: 0 }, [
                        p(i(Y.value[l].description), 1)
                      ], 64)) : (_(), E("span", Ze, i(e(t)(e(a).NOT_CONFIGURED)), 1))
                    ]),
                    n("td", null, [
                      u(K, {
                        actions: re(l)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "on-close"]),
        u(M, {
          visible: P.value,
          "onUpdate:visible": s[10] || (s[10] = (l) => P.value = l),
          header: I.value ? e(t)(e(a).EDIT_CATEGORY_LANGUAGE_INFO, { lang: e(t)(e(x)[I.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: e(t)(e(a).SAVE), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: ce
        }, {
          default: r(() => [
            u(J, {
              class: "gift-modal-body",
              "label-width": e(ee)(100),
              colon: !1
            }, {
              default: r(() => [
                u(L, {
                  label: e(t)(e(a).CATEGORY_NAME)
                }, {
                  default: r(() => [
                    u(b, {
                      modelValue: H.value,
                      "onUpdate:modelValue": s[8] || (s[8] = (l) => H.value = l),
                      placeholder: I.value ? e(t)(e(a).ENTER_LANGUAGE_CATEGORY_NAME, { lang: e(t)(e(x)[I.value].label) }) : "",
                      status: e(g)(T.value.name) > e(C) ? "error" : "default",
                      tips: e(g)(T.value.name) > e(C) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_NAME), max: e(C) }) : ""
                    }, {
                      suffix: r(() => [
                        n("span", {
                          class: G(["input-suffix-count", { "byte-overflow": e(g)(T.value.name) > e(C) }])
                        }, i(e(g)(T.value.name)) + "/" + i(e(C)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u(L, {
                  label: e(t)(e(a).CATEGORY_DESCRIPTION)
                }, {
                  default: r(() => [
                    u(b, {
                      modelValue: W.value,
                      "onUpdate:modelValue": s[9] || (s[9] = (l) => W.value = l),
                      placeholder: I.value ? e(t)(e(a).ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: e(t)(e(x)[I.value].label) }) : "",
                      status: e(g)(T.value.description) > e(v) ? "error" : "default",
                      tips: e(g)(T.value.description) > e(v) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_DESCRIPTION), max: e(v) }) : ""
                    }, {
                      suffix: r(() => [
                        n("span", {
                          class: G(["input-suffix-count", { "byte-overflow": e(g)(T.value.description) > e(v) }])
                        }, i(e(g)(T.value.description)) + "/" + i(e(v)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label-width"])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"]),
        u(M, {
          visible: X.value,
          "onUpdate:visible": s[11] || (s[11] = (l) => X.value = l),
          header: e(t)(e(a).CONFIRM_ACTION_TITLE, { action: e(t)(e(a).CATEGORY_DELETE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(a).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: s[12] || (s[12] = (l) => e(d).confirmDelete())
        }, {
          default: r(() => [
            n("p", null, i(e(t)(e(a).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn"])
      ]);
    };
  }
});
export {
  ft as default
};
