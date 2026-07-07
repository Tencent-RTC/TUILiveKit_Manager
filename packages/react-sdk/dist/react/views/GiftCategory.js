import { jsxs as l, jsx as a, Fragment as R } from "react/jsx-runtime";
import { useRef as w, useEffect as T, useSyncExternalStore as $, useState as z, useMemo as q } from "react";
import { useNavigate as j } from "react-router-dom";
import { Button as f, Dialog as L, Input as C } from "tdesign-react";
import { ArrowLeftIcon as K, FileCopyIcon as Z } from "tdesign-icons-react";
import { useUIKit as J, i18next as x } from "@tencentcloud/uikit-base-component-react";
import { F as M, a as p } from "../../chunks/FormField.D0eRD3uO.js";
import { F as Q, A as F } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { M as N, u as D } from "../../chunks/useAsyncAction.BPwANCLg.js";
import { u as ee } from "../../chunks/gift.DrqYoQLw.js";
import "../../chunks/logger.CjN8f6V1.js";
import { I as t, W as G, t as k } from "../../chunks/layout.CpAnx6QV.js";
import { G as ae, L as te, a as y, g as c, b as ie } from "../../chunks/main-layout.DNtgEqmy.js";
import { M as b, g as re, C as _, a as d, b as g } from "../../chunks/constants.BwJej5rq.js";
/* empty css                                  */
function ye() {
  const { t: e } = J(), I = j(), s = ee(), O = w(null);
  O.current || (O.current = new ae({
    actions: {
      fetchGiftList: s.fetchGiftList,
      createGiftCategory: s.createGiftCategory,
      updateGiftCategory: s.updateGiftCategory,
      deleteGiftCategory: s.deleteGiftCategory,
      getGiftCategoryLanguage: s.getGiftCategoryLanguage,
      setGiftCategoryLanguage: s.setGiftCategoryLanguage,
      deleteGiftCategoryLanguage: s.deleteGiftCategoryLanguage
    },
    t: e,
    toast: N,
    onNavigateBack: () => I("/gift-config")
  }));
  const n = O.current;
  T(() => {
    n.setOpts({
      actions: {
        fetchGiftList: s.fetchGiftList,
        createGiftCategory: s.createGiftCategory,
        updateGiftCategory: s.updateGiftCategory,
        deleteGiftCategory: s.deleteGiftCategory,
        getGiftCategoryLanguage: s.getGiftCategoryLanguage,
        setGiftCategoryLanguage: s.setGiftCategoryLanguage,
        deleteGiftCategoryLanguage: s.deleteGiftCategoryLanguage
      },
      t: e,
      onNavigateBack: () => I("/gift-config")
    });
  }, [n, s, e, I]);
  const i = $(n.subscribe, n.getState, n.getState);
  T(() => (n.init(), () => n.dispose()), []), T(() => {
    const r = () => n.onLanguageChanged();
    return x.on("languageChanged", r), () => {
      x.off("languageChanged", r);
    };
  }, [n]);
  const { loading: v, execute: B } = D({
    operationName: e(t.CATEGORY_SAVE),
    showError: !1,
    showSuccess: !1,
    action: async (r) => {
      await n.submitForm({
        categoryId: r.categoryId.trim(),
        name: r.name.trim(),
        description: r.description.trim()
      });
    }
  }), { loading: Y, execute: U } = D({
    operationName: e(t.CATEGORY_MULTILINGUAL_SAVE),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await n.saveLangEdit();
    }
  }), { loading: S, execute: P } = D({
    operationName: e(t.CATEGORY_DELETE_OPERATION),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await n.confirmDelete();
    }
  }), u = w(null), [X, H] = z(600);
  T(() => {
    const r = () => {
      if (!u.current) return;
      const m = window.innerHeight, E = u.current.closest(".gift-category-table-wrapper");
      if (!E) return;
      const h = E.getBoundingClientRect(), A = m - h.top - 60 - 24;
      H(Math.max(200, A));
    };
    r(), window.addEventListener("resize", r);
    const o = new ResizeObserver(r);
    return u.current && o.observe(u.current), () => {
      window.removeEventListener("resize", r), o.disconnect();
    };
  }, []);
  const V = async () => {
    const { categoryId: r, name: o, description: m } = i.formData;
    if (!r.trim()) {
      N.error(e(t.ENTER_CATEGORY_ID));
      return;
    }
    if (!o.trim()) {
      N.error(e(t.ENTER_CATEGORY_NAME));
      return;
    }
    await B({
      categoryId: r.trim(),
      name: o.trim(),
      description: m.trim()
    });
  }, W = async () => {
    const { langEditForm: r } = i;
    if (r.name && c(r.name) > d) {
      N.error(e(t.MAX_BYTES, { field: e(t.CATEGORY_NAME), max: d }));
      return;
    }
    if (r.description && c(r.description) > g) {
      N.error(e(t.MAX_BYTES, { field: e(t.CATEGORY_DESCRIPTION), max: g }));
      return;
    }
    await U();
  };
  return /* @__PURE__ */ l("div", { className: "gift-category-container", children: [
    /* @__PURE__ */ l("div", { className: "gift-category-page-header", children: [
      /* @__PURE__ */ l("div", { className: "gift-category-title-section", children: [
        /* @__PURE__ */ a(
          f,
          {
            shape: "square",
            variant: "text",
            className: "back-btn",
            onClick: () => n.goBack(),
            icon: /* @__PURE__ */ a(K, { fill: "transparent", stroke: "currentColor", strokeWidth: 2 })
          }
        ),
        /* @__PURE__ */ a("h1", { children: e(t.CATEGORY_MANAGEMENT) })
      ] }),
      /* @__PURE__ */ a("div", { className: "gift-category-actions", children: /* @__PURE__ */ l("div", { className: `create-category-btn-wrapper${i.categoryList.length >= b ? " disabled" : ""}`, children: [
        /* @__PURE__ */ l(
          f,
          {
            shape: "round",
            theme: "primary",
            onClick: () => n.openCreateDialog(),
            disabled: i.categoryList.length >= b,
            children: [
              "＋ ",
              e(t.ADD_CATEGORY)
            ]
          }
        ),
        i.categoryList.length >= b && /* @__PURE__ */ a("div", { className: "create-category-tooltip", children: e(t.CATEGORY_LIMIT_REACHED) })
      ] }) })
    ] }),
    /* @__PURE__ */ a("div", { className: "gift-category-table-wrapper", ref: u, children: /* @__PURE__ */ a(
      Q,
      {
        columns: q(
          () => re().map((r) => ({
            ...r,
            title: r.i18nKey ? e(r.i18nKey) : "",
            render: (() => {
              switch (r.key) {
                case "id":
                  return (o) => /* @__PURE__ */ l("div", { className: "gift-id", children: [
                    /* @__PURE__ */ a("span", { className: "gift-id-text", children: o.id || "-" }),
                    /* @__PURE__ */ a(
                      Z,
                      {
                        className: "copy-icon",
                        size: 14,
                        onClick: () => n.copyCategoryId(o.id)
                      }
                    )
                  ] });
                case "name":
                  return (o) => o.name || "-";
                case "description":
                  return (o) => o.description || "-";
                case "languageList":
                  return (o) => /* @__PURE__ */ l("div", { className: "category-lang-tags", children: [
                    o.languageList && o.languageList.length > 0 ? o.languageList.map((m) => {
                      const E = typeof m == "string" ? m : m.language || "", h = te[E], A = h ? y[h] : null;
                      return /* @__PURE__ */ a(
                        "span",
                        {
                          className: "category-lang-tag",
                          onClick: () => o && h && n.openLangEditDialog(o.id, h),
                          children: A ? e(A.label) : E
                        },
                        E
                      );
                    }) : /* @__PURE__ */ a("span", { className: "category-lang-empty", children: "-" }),
                    /* @__PURE__ */ a(
                      "svg",
                      {
                        className: "category-lang-edit-icon",
                        width: "14",
                        height: "14",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        onClick: () => o && n.openLangConfigDialog(o.id),
                        style: { cursor: "pointer" },
                        children: /* @__PURE__ */ a("path", { d: "M10.5 3.5L12.5 5.5M2 14L2.5 11.5L11 3L13 5L4.5 13.5L2 14Z", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" })
                      }
                    )
                  ] });
                case "giftCount":
                  return (o) => o.giftCount ?? 0;
                case "actions":
                  return (o) => /* @__PURE__ */ a(
                    F,
                    {
                      actions: [
                        { key: "edit", label: e(t.EDIT), onClick: () => o && n.openEditDialog(o) },
                        { key: "delete", label: e(t.DELETE), danger: !0, onClick: () => o && n.requestDelete(o) }
                      ]
                    }
                  );
                default:
                  return;
              }
            })()
          })),
          [e]
        ),
        data: i.categoryList,
        rowKey: "id",
        loading: i.loading,
        tableClassName: "category-table",
        bodyClassName: "category-list-content",
        bodyStyle: { maxHeight: X },
        loadingNode: /* @__PURE__ */ l("div", { className: "category-loading-container", children: [
          /* @__PURE__ */ a("div", { className: "category-loading-spinner" }),
          /* @__PURE__ */ a("span", { className: "category-loading-text", children: e(t.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ a("div", { className: "category-empty-container", children: /* @__PURE__ */ a("span", { className: "category-empty-text", children: e(t.CREATE_CATEGORY_FIRST) }) })
      }
    ) }),
    /* @__PURE__ */ a(
      L,
      {
        visible: i.dialogVisible,
        header: i.isEdit ? e(t.EDIT_CATEGORY) : e(t.CREATE_CATEGORY),
        onClose: () => n.closeDialog(),
        width: G.CATEGORY_FORM,
        placement: "center",
        className: "category-dialog",
        footer: /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ a(f, { shape: "round", variant: "outline", onClick: () => n.closeDialog(), children: e(t.CANCEL) }),
          /* @__PURE__ */ a(
            f,
            {
              shape: "round",
              theme: "primary",
              onClick: V,
              disabled: v || !i.formData.categoryId.trim() || !i.formData.name.trim(),
              children: v ? e(t.CREATING) : i.isEdit ? e(t.SAVE) : e(t.CREATE)
            }
          )
        ] }),
        children: /* @__PURE__ */ l(M, { labelWidth: k(100), children: [
          /* @__PURE__ */ a(p, { label: e(t.CATEGORY_ID), requiredMark: !0, children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ a(
              C,
              {
                value: i.formData.categoryId,
                onChange: (r) => n.setFormData({ categoryId: String(r) }),
                placeholder: e(t.ENTER_CATEGORY_ID),
                disabled: i.isEdit,
                status: c(i.formData.categoryId) > _ ? "error" : "default",
                suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${c(i.formData.categoryId) > _ ? " byte-overflow" : ""}`, children: [
                  c(i.formData.categoryId),
                  "/",
                  _
                ] })
              }
            ),
            c(i.formData.categoryId) > _ && /* @__PURE__ */ a("div", { className: "form-field__error-tip", children: e(t.MAX_BYTES, { field: e(t.CATEGORY_ID), max: _ }) })
          ] }) }),
          /* @__PURE__ */ a(p, { label: e(t.CATEGORY_NAME), requiredMark: !0, children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ a(
              C,
              {
                value: i.formData.name,
                onChange: (r) => n.setFormData({ name: String(r) }),
                placeholder: e(t.ENTER_CATEGORY_NAME),
                status: c(i.formData.name) > d ? "error" : "default",
                suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${c(i.formData.name) > d ? " byte-overflow" : ""}`, children: [
                  c(i.formData.name),
                  "/",
                  d
                ] })
              }
            ),
            c(i.formData.name) > d && /* @__PURE__ */ a("div", { className: "form-field__error-tip", children: e(t.MAX_BYTES, { field: e(t.CATEGORY_NAME), max: d }) })
          ] }) }),
          /* @__PURE__ */ a(p, { label: e(t.DESCRIPTION), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ a(
              C,
              {
                value: i.formData.description,
                onChange: (r) => n.setFormData({ description: String(r) }),
                placeholder: e(t.ENTER_CATEGORY_DESCRIPTION),
                status: c(i.formData.description) > g ? "error" : "default",
                suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${c(i.formData.description) > g ? " byte-overflow" : ""}`, children: [
                  c(i.formData.description),
                  "/",
                  g
                ] })
              }
            ),
            c(i.formData.description) > g && /* @__PURE__ */ a("div", { className: "form-field__error-tip", children: e(t.MAX_BYTES, { field: e(t.CATEGORY_DESCRIPTION), max: g }) })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ a(
      L,
      {
        visible: i.langConfigVisible,
        header: e(t.CATEGORY_MULTILINGUAL_CONFIG),
        onClose: () => n.closeLangConfigDialog(),
        width: G.GIFT_LANG_CONFIG,
        placement: "center",
        className: "category-lang-config-dialog",
        footer: /* @__PURE__ */ a(f, { shape: "round", theme: "primary", onClick: () => n.closeLangConfigDialog(), children: e(t.CLOSE) }),
        children: /* @__PURE__ */ l("div", { className: "category-lang-config-container", children: [
          /* @__PURE__ */ l("div", { className: "category-lang-config-info-banner", children: [
            /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
              /* @__PURE__ */ a("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
              /* @__PURE__ */ a("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
              /* @__PURE__ */ a("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
            ] }),
            /* @__PURE__ */ a("span", { children: e(t.CATEGORY_MULTILINGUAL_CONFIG_TIP) })
          ] }),
          /* @__PURE__ */ l("table", { className: "category-lang-config-table", children: [
            /* @__PURE__ */ a("thead", { children: /* @__PURE__ */ l("tr", { children: [
              /* @__PURE__ */ a("th", { children: e(t.LANGUAGE_TYPE) }),
              /* @__PURE__ */ a("th", { children: e(t.CATEGORY_NAME) }),
              /* @__PURE__ */ a("th", { children: e(t.CATEGORY_DESCRIPTION) }),
              /* @__PURE__ */ a("th", { children: e(t.ACTIONS) })
            ] }) }),
            /* @__PURE__ */ a("tbody", { children: ie.map((r) => {
              const o = i.categoryLangConfig[r], m = y[r];
              return /* @__PURE__ */ l("tr", { children: [
                /* @__PURE__ */ a("td", { children: e(m.label) }),
                /* @__PURE__ */ a("td", { className: "category-lang-table-cell-name", children: o.name || /* @__PURE__ */ a("span", { className: "category-lang-table-empty", children: e(t.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ a("td", { className: "category-lang-table-cell-desc", children: o.description || /* @__PURE__ */ a("span", { className: "category-lang-table-empty", children: e(t.NOT_CONFIGURED) }) }),
                /* @__PURE__ */ a("td", { children: /* @__PURE__ */ a(
                  F,
                  {
                    actions: [
                      {
                        key: "edit",
                        label: e(t.EDIT),
                        onClick: () => i.editingId && n.openLangEditDialog(i.editingId, r)
                      },
                      {
                        key: "clear",
                        label: e(t.CLEAR),
                        danger: !0,
                        disabled: !o.name && !o.description,
                        onClick: () => i.editingId && n.clearLang(i.editingId, r)
                      }
                    ]
                  }
                ) })
              ] }, r);
            }) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ a(
      L,
      {
        destroyOnClose: !0,
        visible: i.langEditVisible && !!i.editingLang,
        header: i.editingLang ? e(t.EDIT_CATEGORY_LANGUAGE_INFO, { lang: e(y[i.editingLang].label) }) : "",
        onClose: () => n.closeLangEditDialog(),
        width: G.GIFT_EDIT,
        placement: "center",
        className: "category-lang-edit-modal",
        footer: /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ a(f, { shape: "round", variant: "outline", disabled: Y, onClick: () => n.closeLangEditDialog(), children: e(t.CANCEL) }),
          /* @__PURE__ */ a(f, { shape: "round", theme: "primary", loading: Y, onClick: W, children: e(t.SAVE) })
        ] }),
        children: /* @__PURE__ */ l(M, { labelWidth: k(100), children: [
          /* @__PURE__ */ a(p, { label: e(t.CATEGORY_NAME), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ a(
              C,
              {
                value: i.langEditForm.name,
                onChange: (r) => n.setLangEditForm({ name: String(r) }),
                placeholder: i.editingLang ? e(t.ENTER_LANGUAGE_CATEGORY_NAME, { lang: e(y[i.editingLang].label) }) : "",
                status: c(i.langEditForm.name) > d ? "error" : "default",
                suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${c(i.langEditForm.name) > d ? " byte-overflow" : ""}`, children: [
                  c(i.langEditForm.name),
                  "/",
                  d
                ] })
              }
            ),
            c(i.langEditForm.name) > d && /* @__PURE__ */ a("div", { className: "form-field__error-tip", children: e(t.MAX_BYTES, { field: e(t.CATEGORY_NAME), max: d }) })
          ] }) }),
          /* @__PURE__ */ a(p, { label: e(t.CATEGORY_DESCRIPTION), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
            /* @__PURE__ */ a(
              C,
              {
                value: i.langEditForm.description,
                onChange: (r) => n.setLangEditForm({ description: String(r) }),
                placeholder: i.editingLang ? e(t.ENTER_LANGUAGE_CATEGORY_DESCRIPTION, { lang: e(y[i.editingLang].label) }) : "",
                status: c(i.langEditForm.description) > g ? "error" : "default",
                suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${c(i.langEditForm.description) > g ? " byte-overflow" : ""}`, children: [
                  c(i.langEditForm.description),
                  "/",
                  g
                ] })
              }
            ),
            c(i.langEditForm.description) > g && /* @__PURE__ */ a("div", { className: "form-field__error-tip", children: e(t.MAX_BYTES, { field: e(t.CATEGORY_DESCRIPTION), max: g }) })
          ] }) })
        ] })
      },
      `cat-lang-edit-${i.editingCategoryForLang}-${i.editingLang ?? ""}`
    ),
    /* @__PURE__ */ a(
      L,
      {
        visible: i.deleteDialogVisible && !!i.deletingItem,
        header: e(t.CONFIRM_ACTION_TITLE, { action: e(t.CATEGORY_DELETE_OPERATION) }),
        onClose: () => n.cancelDelete(),
        width: G.GIFT_DELETE,
        placement: "center",
        footer: /* @__PURE__ */ l(R, { children: [
          /* @__PURE__ */ a(f, { shape: "round", variant: "outline", disabled: S, onClick: () => n.cancelDelete(), children: e(t.CANCEL) }),
          /* @__PURE__ */ a(f, { shape: "round", theme: "primary", loading: S, onClick: () => P(), children: e(t.DELETE) })
        ] }),
        children: /* @__PURE__ */ a("p", { children: e(t.CANNOT_UNDO_AFTER_DELETE) })
      }
    )
  ] });
}
export {
  ye as default
};
