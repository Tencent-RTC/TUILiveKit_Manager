import { defineComponent as fe, shallowRef as me, computed as f, ref as Ee, onMounted as _e, onBeforeUnmount as pe, resolveComponent as h, openBlock as E, createElementBlock as _, createElementVNode as n, createVNode as u, unref as e, withCtx as s, toDisplayString as i, normalizeClass as I, createTextVNode as p, createCommentVNode as Ce, Fragment as M, renderList as Z } from "vue";
import { useRouter as ve } from "vue-router";
import { ArrowLeftIcon as Ae, EditIcon as Te, CopyIcon as ye } from "tdesign-icons-vue-next";
import { MessagePlugin as A } from "tdesign-vue-next";
import { useUIKit as be, i18next as K } from "@tencentcloud/uikit-base-component-vue3";
import { _ as Ge, a as ee } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { u as Ie, a as Le } from "../../chunks/useAsyncAction.E1F28vKl.js";
import { I as a, A as te, c as F } from "../../chunks/layout.Br-W54NR.js";
import { G as Oe, a_ as U, b1 as Re, g, b as he, a as x, as as Ne, b0 as De } from "../../chunks/main-layout.1w0vpJq1.js";
import { g as Ye, M as w, C as N, a as C, b as v } from "../../chunks/constants.C_WSTVOQ.js";
/* empty css                                  */
const ke = { class: "gift-category-container" }, Se = { class: "gift-category-page-header" }, Me = { class: "gift-category-title-section" }, xe = { class: "gift-category-actions" }, Ve = {
  key: 0,
  class: "create-category-tooltip"
}, Fe = { class: "gift-category-table-wrapper" }, Ue = { class: "gift-id" }, we = { class: "gift-id-text" }, Be = { class: "category-lang-tags" }, Pe = ["onClick"], Xe = {
  key: 1,
  class: "category-lang-empty"
}, $e = { class: "category-loading-container" }, qe = { class: "category-loading-text" }, ze = { class: "category-empty-container" }, He = { class: "category-empty-text" }, We = { class: "category-lang-config-container" }, je = { class: "category-lang-config-info-banner" }, Je = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  style: { "flex-shrink": "0" }
}, Qe = { class: "category-lang-config-table" }, Ze = { class: "category-lang-table-cell-name" }, Ke = {
  key: 1,
  class: "category-lang-table-empty"
}, et = { class: "category-lang-table-cell-desc" }, tt = {
  key: 1,
  class: "category-lang-table-empty"
}, Et = /* @__PURE__ */ fe({
  __name: "gift-category",
  setup(at) {
    const ae = ve(), { t } = be(), b = Ie(), c = new Oe({
      actions: {
        fetchGiftList: b.fetchGiftList,
        createGiftCategory: b.createGiftCategory,
        updateGiftCategory: b.updateGiftCategory,
        deleteGiftCategory: b.deleteGiftCategory,
        getGiftCategoryLanguage: b.getGiftCategoryLanguage,
        setGiftCategoryLanguage: b.setGiftCategoryLanguage,
        deleteGiftCategoryLanguage: b.deleteGiftCategoryLanguage
      },
      t,
      toast: {
        success: (o) => A.success(o),
        error: (o) => A.error(o)
      },
      onNavigateBack: () => ae.push("/gift-config")
    }), d = me(c.getState()), oe = c.subscribe(() => {
      d.value = c.getState();
    }), le = f(() => d.value.loading), D = f(() => d.value.categoryList), V = f(() => d.value.isEdit), m = f(() => d.value.formData), Y = f(() => d.value.categoryLangConfig), G = f(() => d.value.editingLang), T = f(() => d.value.langEditForm), B = f({
      get: () => d.value.dialogVisible,
      set: (o) => {
        o || c.closeDialog();
      }
    }), P = f({
      get: () => d.value.langConfigVisible,
      set: (o) => {
        o || c.closeLangConfigDialog();
      }
    }), X = f({
      get: () => d.value.langEditVisible,
      set: (o) => {
        o || c.closeLangEditDialog();
      }
    }), $ = f({
      get: () => d.value.deleteDialogVisible,
      set: (o) => {
        o || c.cancelDelete();
      }
    }), q = f({
      get: () => d.value.formData.categoryId,
      set: (o) => c.setFormData({ categoryId: o })
    }), z = f({
      get: () => d.value.formData.name,
      set: (o) => c.setFormData({ name: o })
    }), H = f({
      get: () => d.value.formData.description,
      set: (o) => c.setFormData({ description: o })
    }), W = f({
      get: () => d.value.langEditForm.name,
      set: (o) => c.setLangEditForm({ name: o })
    }), j = f({
      get: () => d.value.langEditForm.description,
      set: (o) => c.setLangEditForm({ description: o })
    }), L = Ee(!1), { execute: ne } = Le({
      toast: { action: a.LABEL_DELETED, entity: a.CATEGORY },
      operationName: t(a.CATEGORY_DELETE_OPERATION),
      action: async () => {
        await c.confirmDelete();
      }
    }), ie = Ye(), se = (o) => {
      Ne(String(o || "")), A.success(F(t).opSuccess(a.COPY, t(a.CATEGORY_ID)));
    }, re = (o, r) => {
      const k = U(r), y = De(k);
      y && c.openLangEditDialog(o, y);
    }, ce = (o) => [
      {
        key: "edit",
        label: t(a.EDIT),
        onClick: () => c.openEditDialog(o)
      },
      {
        key: "delete",
        label: t(a.DELETE),
        danger: !0,
        onClick: () => c.requestDelete(o)
      }
    ], de = (o) => [
      {
        key: "edit",
        label: t(a.EDIT),
        onClick: () => d.value.editingId && c.openLangEditDialog(d.value.editingId, o)
      },
      {
        key: "clear",
        label: t(a.CLEAR),
        danger: !0,
        disabled: !d.value.categoryLangConfig[o].name && !d.value.categoryLangConfig[o].description,
        onClick: () => d.value.editingId && c.clearLang(d.value.editingId, o)
      }
    ], ue = async () => {
      const o = d.value.formData;
      if (!o.categoryId.trim()) {
        A.error(t(a.ENTER_CATEGORY_ID));
        return;
      }
      if (!o.name.trim()) {
        A.error(t(a.ENTER_CATEGORY_NAME));
        return;
      }
      L.value = !0;
      try {
        await c.submitForm({
          categoryId: o.categoryId.trim(),
          name: o.name.trim(),
          description: o.description.trim()
        }), A.success(F(t).opSuccess(a.CATEGORY_SAVE));
      } catch {
      } finally {
        L.value = !1;
      }
    }, ge = async () => {
      const o = d.value.langEditForm;
      if (o.name && g(o.name) > C) {
        A.error(t(a.MAX_BYTES, { field: t(a.CATEGORY_NAME), max: C }));
        return;
      }
      if (o.description && g(o.description) > v) {
        A.error(t(a.MAX_BYTES, { field: t(a.CATEGORY_DESCRIPTION), max: v }));
        return;
      }
      try {
        await c.saveLangEdit(), A.success(F(t).opSuccess(a.CATEGORY_MULTILINGUAL_SAVE));
      } catch {
      }
    }, J = () => c.onLanguageChanged();
    return _e(() => {
      c.init(), K.on("languageChanged", J);
    }), pe(() => {
      K.off("languageChanged", J), oe(), c.dispose();
    }), (o, r) => {
      const k = h("t-button"), y = h("t-input"), O = h("t-form-item"), Q = h("t-form"), S = h("t-dialog");
      return E(), _("div", ke, [
        n("div", Se, [
          n("div", Me, [
            u(k, {
              variant: "outline",
              shape: "circle",
              class: "back-btn",
              onClick: r[0] || (r[0] = (l) => e(c).goBack()),
              title: e(t)(e(a).BACK_TO_LIST)
            }, {
              icon: s(() => [
                u(e(Ae), {
                  "fill-color": "transparent",
                  "stroke-color": "currentColor",
                  "stroke-width": 2
                })
              ]),
              _: 1
            }, 8, ["title"]),
            n("h1", null, i(e(t)(e(a).CATEGORY_MANAGEMENT)), 1)
          ]),
          n("div", xe, [
            n("div", {
              class: I(["create-category-btn-wrapper", { disabled: D.value.length >= e(w) }])
            }, [
              u(k, {
                theme: "primary",
                shape: "round",
                disabled: D.value.length >= e(w),
                onClick: r[1] || (r[1] = (l) => e(c).openCreateDialog())
              }, {
                default: s(() => [
                  p(" ＋ " + i(e(t)(e(a).ADD_CATEGORY)), 1)
                ]),
                _: 1
              }, 8, ["disabled"]),
              D.value.length >= e(w) ? (E(), _("div", Ve, i(e(t)(e(a).CATEGORY_LIMIT_REACHED)), 1)) : Ce("", !0)
            ], 2)
          ])
        ]),
        n("div", Fe, [
          u(Ge, {
            columns: e(ie),
            data: D.value,
            "row-key": "id",
            loading: le.value,
            "table-class-name": "category-table",
            "body-class-name": "category-list-content"
          }, {
            "header-id": s(() => [
              p(i(e(t)(e(a).CATEGORY_ID)), 1)
            ]),
            "header-name": s(() => [
              p(i(e(t)(e(a).CATEGORY_NAME)), 1)
            ]),
            "header-description": s(() => [
              p(i(e(t)(e(a).CATEGORY_DESCRIPTION)), 1)
            ]),
            "header-languageList": s(() => [
              p(i(e(t)(e(a).MULTILINGUAL_CONFIG)), 1)
            ]),
            "header-giftCount": s(() => [
              p(i(e(t)(e(a).NUMBER_OF_GIFTS)), 1)
            ]),
            "header-actions": s(() => [
              p(i(e(t)(e(a).ACTIONS)), 1)
            ]),
            "cell-id": s(({ row: l }) => [
              n("div", Ue, [
                n("span", we, i(l.id || "-"), 1),
                u(e(ye), {
                  class: "copy-icon",
                  size: "14",
                  onClick: (R) => se(l.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-name": s(({ row: l }) => [
              p(i(l.name || "-"), 1)
            ]),
            "cell-description": s(({ row: l }) => [
              p(i(l.description || "-"), 1)
            ]),
            "cell-languageList": s(({ row: l }) => [
              n("div", Be, [
                l.languageList && l.languageList.length > 0 ? (E(!0), _(M, { key: 0 }, Z(l.languageList, (R) => (E(), _("span", {
                  key: e(U)(R),
                  class: "category-lang-tag",
                  onClick: (ot) => re(l.id, R)
                }, i(e(t)(e(Re)(e(U)(R)))), 9, Pe))), 128)) : (E(), _("span", Xe, "-")),
                u(e(Te), {
                  class: "category-lang-edit-icon",
                  size: "14",
                  onClick: (R) => e(c).openLangConfigDialog(l.id)
                }, null, 8, ["onClick"])
              ])
            ]),
            "cell-giftCount": s(({ row: l }) => [
              p(i(l.giftCount ?? 0), 1)
            ]),
            "cell-actions": s(({ row: l }) => [
              u(ee, {
                actions: ce(l)
              }, null, 8, ["actions"])
            ]),
            loading: s(() => [
              n("div", $e, [
                r[12] || (r[12] = n("div", { class: "category-loading-spinner" }, null, -1)),
                n("span", qe, i(e(t)(e(a).LOADING)), 1)
              ])
            ]),
            empty: s(() => [
              n("div", ze, [
                n("span", He, i(e(t)(e(a).CREATE_CATEGORY_FIRST)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data", "loading"])
        ]),
        u(S, {
          visible: B.value,
          "onUpdate:visible": r[5] || (r[5] = (l) => B.value = l),
          header: V.value ? e(t)(e(a).EDIT_CATEGORY) : e(t)(e(a).CREATE_CATEGORY),
          width: "500px",
          placement: "center",
          class: "gift-modal",
          "confirm-btn": {
            content: L.value ? e(t)(e(a).CREATING) : V.value ? e(t)(e(a).SAVE) : e(t)(e(a).CREATE),
            disabled: L.value || !m.value.categoryId.trim() || !m.value.name.trim(),
            loading: L.value,
            shape: "round"
          },
          "cancel-btn": { shape: "round" },
          "on-confirm": ue
        }, {
          default: s(() => [
            u(Q, {
              class: "gift-modal-body",
              "label-width": e(te)(100),
              colon: !1
            }, {
              default: s(() => [
                u(O, {
                  label: e(t)(e(a).CATEGORY_ID),
                  "required-mark": !0
                }, {
                  default: s(() => [
                    u(y, {
                      modelValue: q.value,
                      "onUpdate:modelValue": r[2] || (r[2] = (l) => q.value = l),
                      placeholder: e(t)(e(a).ENTER_CATEGORY_ID),
                      disabled: V.value,
                      status: e(g)(m.value.categoryId) > e(N) ? "error" : "default",
                      tips: e(g)(m.value.categoryId) > e(N) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_ID), max: e(N) }) : ""
                    }, {
                      suffix: s(() => [
                        n("span", {
                          class: I(["input-suffix-count", { "byte-overflow": e(g)(m.value.categoryId) > e(N) }])
                        }, i(e(g)(m.value.categoryId)) + "/" + i(e(N)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "disabled", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u(O, {
                  label: e(t)(e(a).CATEGORY_NAME),
                  "required-mark": !0
                }, {
                  default: s(() => [
                    u(y, {
                      modelValue: z.value,
                      "onUpdate:modelValue": r[3] || (r[3] = (l) => z.value = l),
                      placeholder: e(t)(e(a).ENTER_CATEGORY_NAME),
                      status: e(g)(m.value.name) > e(C) ? "error" : "default",
                      tips: e(g)(m.value.name) > e(C) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_NAME), max: e(C) }) : ""
                    }, {
                      suffix: s(() => [
                        n("span", {
                          class: I(["input-suffix-count", { "byte-overflow": e(g)(m.value.name) > e(C) }])
                        }, i(e(g)(m.value.name)) + "/" + i(e(C)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u(O, {
                  label: e(t)(e(a).DESCRIPTION)
                }, {
                  default: s(() => [
                    u(y, {
                      modelValue: H.value,
                      "onUpdate:modelValue": r[4] || (r[4] = (l) => H.value = l),
                      placeholder: e(t)(e(a).ENTER_CATEGORY_DESCRIPTION),
                      status: e(g)(m.value.description) > e(v) ? "error" : "default",
                      tips: e(g)(m.value.description) > e(v) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_DESCRIPTION), max: e(v) }) : ""
                    }, {
                      suffix: s(() => [
                        n("span", {
                          class: I(["input-suffix-count", { "byte-overflow": e(g)(m.value.description) > e(v) }])
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
        u(S, {
          visible: P.value,
          "onUpdate:visible": r[6] || (r[6] = (l) => P.value = l),
          header: e(t)(e(a).CATEGORY_MULTILINGUAL_CONFIG),
          width: "680px",
          placement: "center",
          class: "gift-lang-config-dialog",
          "confirm-btn": { content: e(t)(e(a).CLOSE), shape: "round" },
          "cancel-btn": null,
          "on-close": () => e(c).closeLangConfigDialog(),
          onConfirm: r[7] || (r[7] = (l) => e(c).closeLangConfigDialog())
        }, {
          default: s(() => [
            n("div", We, [
              n("div", je, [
                (E(), _("svg", Je, [...r[13] || (r[13] = [
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
              n("table", Qe, [
                n("thead", null, [
                  n("tr", null, [
                    n("th", null, i(e(t)(e(a).LANGUAGE_TYPE)), 1),
                    n("th", null, i(e(t)(e(a).CATEGORY_NAME)), 1),
                    n("th", null, i(e(t)(e(a).CATEGORY_DESCRIPTION)), 1),
                    n("th", null, i(e(t)(e(a).ACTIONS)), 1)
                  ])
                ]),
                n("tbody", null, [
                  (E(!0), _(M, null, Z(e(he), (l) => (E(), _("tr", { key: l }, [
                    n("td", null, i(e(t)(e(x)[l].label)), 1),
                    n("td", Ze, [
                      Y.value[l].name ? (E(), _(M, { key: 0 }, [
                        p(i(Y.value[l].name), 1)
                      ], 64)) : (E(), _("span", Ke, i(e(t)(e(a).NOT_CONFIGURED)), 1))
                    ]),
                    n("td", et, [
                      Y.value[l].description ? (E(), _(M, { key: 0 }, [
                        p(i(Y.value[l].description), 1)
                      ], 64)) : (E(), _("span", tt, i(e(t)(e(a).NOT_CONFIGURED)), 1))
                    ]),
                    n("td", null, [
                      u(ee, {
                        actions: de(l)
                      }, null, 8, ["actions"])
                    ])
                  ]))), 128))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "on-close"]),
        u(S, {
          visible: X.value,
          "onUpdate:visible": r[10] || (r[10] = (l) => X.value = l),
          header: G.value ? e(t)(e(a).EDIT_CATEGORY_LANGUAGE_INFO, { lang: e(t)(e(x)[G.value].label) }) : "",
          width: "420px",
          placement: "center",
          class: "gift-lang-edit-modal",
          "confirm-btn": { content: e(t)(e(a).SAVE), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: ge
        }, {
          default: s(() => [
            u(Q, {
              class: "gift-modal-body",
              "label-width": e(te)(100),
              colon: !1
            }, {
              default: s(() => [
                u(O, {
                  label: e(t)(e(a).CATEGORY_NAME)
                }, {
                  default: s(() => [
                    u(y, {
                      modelValue: W.value,
                      "onUpdate:modelValue": r[8] || (r[8] = (l) => W.value = l),
                      placeholder: G.value ? e(t)(e(a).ENTER_LANGUAGE_CATEGORY_NAME, { lang: e(t)(e(x)[G.value].label) }) : "",
                      status: e(g)(T.value.name) > e(C) ? "error" : "default",
                      tips: e(g)(T.value.name) > e(C) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_NAME), max: e(C) }) : ""
                    }, {
                      suffix: s(() => [
                        n("span", {
                          class: I(["input-suffix-count", { "byte-overflow": e(g)(T.value.name) > e(C) }])
                        }, i(e(g)(T.value.name)) + "/" + i(e(C)), 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder", "status", "tips"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                u(O, {
                  label: e(t)(e(a).CATEGORY_DESCRIPTION)
                }, {
                  default: s(() => [
                    u(y, {
                      modelValue: j.value,
                      "onUpdate:modelValue": r[9] || (r[9] = (l) => j.value = l),
                      placeholder: G.value ? e(t)(e(a).ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: e(t)(e(x)[G.value].label) }) : "",
                      status: e(g)(T.value.description) > e(v) ? "error" : "default",
                      tips: e(g)(T.value.description) > e(v) ? e(t)(e(a).MAX_BYTES, { field: e(t)(e(a).CATEGORY_DESCRIPTION), max: e(v) }) : ""
                    }, {
                      suffix: s(() => [
                        n("span", {
                          class: I(["input-suffix-count", { "byte-overflow": e(g)(T.value.description) > e(v) }])
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
        u(S, {
          visible: $.value,
          "onUpdate:visible": r[11] || (r[11] = (l) => $.value = l),
          header: e(t)(e(a).CONFIRM_ACTION_TITLE, { action: e(t)(e(a).CATEGORY_DELETE_OPERATION) }),
          width: "400px",
          placement: "center",
          "confirm-btn": { theme: "primary", content: e(t)(e(a).CONFIRM), shape: "round" },
          "cancel-btn": { shape: "round" },
          onConfirm: e(ne)
        }, {
          default: s(() => [
            n("p", null, i(e(t)(e(a).CANNOT_UNDO_AFTER_DELETE)), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "onConfirm"])
      ]);
    };
  }
});
export {
  Et as default
};
