import { jsx as n, jsxs as l, Fragment as V } from "react/jsx-runtime";
import { useRef as Z, useState as L, useEffect as J, useSyncExternalStore as xe } from "react";
import { EditIcon as se, FileCopyIcon as ke, SearchIcon as Pe, AdjustmentIcon as we, AddIcon as ce } from "tdesign-icons-react";
import { useNavigate as Be } from "react-router-dom";
import { Dialog as S, Input as Y, InputNumber as de, Textarea as Ye, Button as I, Select as Ie, Card as Ve } from "tdesign-react";
import { useUIKit as X, i18next as ge } from "@tencentcloud/uikit-base-component-react";
import { A as _e, F as Xe } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { M as m, u as De, a as Q } from "../../chunks/useAsyncAction.DDER13aa.js";
/* empty css                                */
import { c as He, a as re, D as K, I as i, g as me } from "../../chunks/shared-state.LwLSW33A.js";
import { H as O, g, I as N, z as T, F as $, ad as We, b as $e, a as z, aN as ze, aW as Ke, L as qe, K as je, be as pe, J as ue } from "../../chunks/main-layout.BxLEuh4E.js";
import { g as Je } from "../../chunks/PreviewUrlController.ChqehaBQ.js";
import { F as Ne, a as C } from "../../chunks/FormField.D0eRD3uO.js";
import { I as he } from "../../chunks/ImageUpload.CKFWFOOB.js";
import { d as Qe, b as Ze } from "../../chunks/image-upload-resolve.CM9TaFWN.js";
import { g as ei } from "../../chunks/columns.STT1P7CJ.js";
import { b as ii } from "../../chunks/useT.BMh2aeYA.js";
import { S as fe } from "../../chunks/SlotRenderer.BMGbSEqN.js";
const R = 0, P = 2147483647, w = 0, B = 99, Ee = {
  id: "",
  name: "",
  iconUrl: "",
  price: 0,
  animationUrl: "",
  level: "",
  description: "",
  extensionInfo: "",
  enabled: !0
}, ni = He("GiftFormDialog");
function ti({
  visible: s,
  isEdit: p,
  editingId: c,
  formData: e,
  uploadEnabled: d,
  onFormDataChange: r,
  onSubmitGift: u,
  onClose: f
}) {
  const { t } = X();
  re().components?.giftConfig;
  const E = Z(null), A = Z(null), [b, y] = L(!1), [D, v] = L(!1), [H, F] = L(!1), [M, h] = L(!1), _ = () => {
    E.current?.reset(), A.current?.reset(), y(!1), v(!1);
  }, U = () => {
    _(), f();
  }, [x, k] = L(!1), ee = async () => {
    if (!e.id.trim()) {
      m.error(t(i.ENTER_GIFT_ID));
      return;
    }
    if (g(e.id) > O) {
      m.error(t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: O }));
      return;
    }
    if (!e.name.trim()) {
      m.error(t(i.ENTER_GIFT_NAME));
      return;
    }
    if (g(e.name) > N) {
      m.error(t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: N }));
      return;
    }
    if (e.description && g(e.description) > T) {
      m.error(t(i.MAX_BYTES, { field: t(i.DESCRIPTION), max: T }));
      return;
    }
    const a = parseInt(e.level);
    if (e.level && !isNaN(a) && (a < w || a > B)) {
      m.error(t(i.GIFT_LEVEL_RANGE, { min: w, max: B }));
      return;
    }
    if (e.price < R || e.price > P) {
      m.error(t(i.GIFT_PRICE_RANGE, { min: R, max: P }));
      return;
    }
    const q = E.current?.isUrlInputMode ?? !0, ie = q && (E.current?.urlInputValue?.trim?.() || "");
    if (!b && !e.iconUrl.trim() && !ie) {
      q && E.current?.setUrlError(t(i.ENTER_THUMBNAIL_URL)), m.error(t(i.UPLOAD_THUMBNAIL_OR_ENTER_URL));
      return;
    }
    if (e.extensionInfo.trim()) {
      try {
        JSON.parse(e.extensionInfo.trim());
      } catch {
        m.error(t(i.EXTENSION_INFO_JSON_FORMAT));
        return;
      }
      if (new TextEncoder().encode(e.extensionInfo.trim()).length > 100) {
        m.error(t(i.MAX_BYTES, { field: t(i.CUSTOM_EXTENSION_INFO), max: 100 }));
        return;
      }
    }
    k(!0);
    try {
      const [G, j] = await Qe([
        {
          handle: E.current,
          hasPendingFile: b,
          fallbackUrl: e.iconUrl,
          label: t(i.THUMBNAIL)
        },
        {
          handle: A.current,
          hasPendingFile: D,
          fallbackUrl: e.animationUrl,
          label: t(i.GIFT_MATERIAL)
        }
      ]), ne = { ...e, iconUrl: G, animationUrl: j };
      r(ne);
      const te = We(e, G, j);
      await u(te);
    } catch (G) {
      ni.error("GiftFormDialog", `Image upload failed: ${G?.message || t(i.UNKNOWN_HOST)}`, G), m.error(Ze(G, t(i.THUMBNAIL)));
    } finally {
      k(!1);
    }
  };
  return /* @__PURE__ */ n(
    S,
    {
      destroyOnClose: !0,
      visible: s,
      header: t(p ? i.EDIT_GIFT : i.CREATE_GIFT),
      onClose: U,
      width: K.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ l(V, { children: [
        /* @__PURE__ */ n(I, { shape: "round", variant: "outline", onClick: U, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(
          I,
          {
            shape: "round",
            theme: "primary",
            onClick: ee,
            disabled: x || !p && !e.id.trim() || !e.name.trim() || E.current?.isValidating || A.current?.isValidating || H || M,
            children: t(x ? p ? i.SAVING : i.CREATING : p ? i.SAVE : i.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ l(Ne, { labelWidth: me(110), children: [
        !p && /* @__PURE__ */ n(C, { label: t(i.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            Y,
            {
              value: e.id,
              onChange: (a) => r({ ...e, id: String(a) }),
              placeholder: t(i.ENTER_GIFT_ID),
              status: g(e.id) > O ? "error" : "default",
              suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${g(e.id) > O ? " byte-overflow" : ""}`, children: [
                g(e.id),
                "/",
                O
              ] })
            }
          ),
          g(e.id) > O && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: O }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_PRICE), requiredMark: !0, children: /* @__PURE__ */ n(
          de,
          {
            value: e.price,
            onChange: (a) => r({ ...e, price: Number(a) || R }),
            min: R,
            max: P,
            decimalPlaces: 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: e.price < R || e.price > P ? t(i.GIFT_PRICE_RANGE, { min: R, max: P }) : "",
              status: e.price < R || e.price > P ? "error" : "default"
            },
            style: { width: "100%" },
            placeholder: t(i.ENTER_GIFT_PRICE)
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_LEVEL), children: /* @__PURE__ */ n(
          de,
          {
            value: e.level ? parseInt(e.level) : void 0,
            onChange: (a) => {
              if (a == null) {
                r({ ...e, level: "" });
                return;
              }
              r({ ...e, level: String(a) });
            },
            min: e.level ? w : void 0,
            max: e.level ? B : void 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: (() => {
                const a = parseInt(e.level);
                return !isNaN(a) && (a < w || a > B) ? t(i.GIFT_LEVEL_RANGE, { min: w, max: B }) : "";
              })(),
              status: (() => {
                const a = parseInt(e.level);
                return !isNaN(a) && (a < w || a > B) ? "error" : "default";
              })()
            },
            style: { width: "100%" },
            placeholder: t(i.ENTER_GIFT_LEVEL)
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.THUMBNAIL), requiredMark: !0, children: /* @__PURE__ */ n(
          he,
          {
            ref: E,
            value: e.iconUrl,
            onChange: (a) => {
              r({ ...e, iconUrl: a }), y(!1);
            },
            type: "gift-icon",
            uploadEnabled: d,
            cropEnabled: !0,
            aspectRatio: 1,
            placeholder: t(i.CLICK_OR_DRAG_TO_UPLOAD_THUMBNAIL),
            previewWidth: 120,
            previewHeight: 120,
            maxSize: 5,
            maxBytes: 200,
            deferUpload: d,
            onFileReady: (a) => y(!!a),
            onUrlErrorChange: F
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_MATERIAL), children: /* @__PURE__ */ n(
          he,
          {
            ref: A,
            value: e.animationUrl,
            onChange: (a) => {
              r({ ...e, animationUrl: a }), v(!1);
            },
            type: "gift-animation",
            uploadEnabled: d,
            cropEnabled: !1,
            placeholder: t(i.CLICK_OR_DRAG_TO_UPLOAD_MATERIAL),
            urlPlaceholder: t(i.ENTER_FILE_URL),
            previewWidth: 120,
            previewHeight: 120,
            maxSize: 10,
            accept: "video/mp4,.svga",
            acceptHint: t(i.SUPPORT_MP4_SVGA_MAX_10MB),
            maxBytes: 200,
            deferUpload: d,
            skipSvgaValidation: !0,
            onFileReady: (a) => v(!!a),
            onUrlErrorChange: h
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_NAME), requiredMark: !0, children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            Y,
            {
              value: e.name,
              onChange: (a) => r({ ...e, name: String(a) }),
              placeholder: t(i.ENTER_GIFT_NAME),
              status: g(e.name) > N ? "error" : "default",
              suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${g(e.name) > N ? " byte-overflow" : ""}`, children: [
                g(e.name),
                "/",
                N
              ] })
            }
          ),
          g(e.name) > N && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: N }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.DESCRIPTION), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            Y,
            {
              value: e.description,
              onChange: (a) => r({ ...e, description: String(a) }),
              placeholder: t(i.ENTER_GIFT_DESCRIPTION),
              status: g(e.description) > T ? "error" : "default",
              suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${g(e.description) > T ? " byte-overflow" : ""}`, children: [
                g(e.description),
                "/",
                T
              ] })
            }
          ),
          g(e.description) > T && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.DESCRIPTION), max: T }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.CUSTOM_EXTENSION_INFO), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ l("div", { className: "textarea-count-wrapper", children: [
            /* @__PURE__ */ n(
              Ye,
              {
                value: e.extensionInfo,
                onChange: (a) => r({ ...e, extensionInfo: String(a) }),
                placeholder: 'JSON 格式例如：{"key":"value"}',
                autosize: { minRows: 3 },
                status: g(e.extensionInfo) > $ ? "error" : "default"
              }
            ),
            /* @__PURE__ */ l("span", { className: `textarea-suffix-count${g(e.extensionInfo) > $ ? " byte-overflow" : ""}`, children: [
              g(e.extensionInfo),
              "/",
              $
            ] })
          ] }),
          g(e.extensionInfo) > $ && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.CUSTOM_EXTENSION_INFO), max: $ }) })
        ] }) })
      ] })
    },
    `gift-edit-${c}`
  );
}
function ri({
  visible: s,
  editingId: p,
  giftLangConfig: c,
  onClose: e,
  onEditLang: d,
  onClearLang: r
}) {
  const { t: u } = X();
  return /* @__PURE__ */ n(
    S,
    {
      visible: s,
      header: u(i.GIFT_MULTILINGUAL_CONFIG),
      onClose: e,
      width: K.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ n(I, { shape: "round", theme: "primary", onClick: e, children: u(i.CLOSE) }),
      children: /* @__PURE__ */ l("div", { className: "gift-lang-config-container", children: [
        /* @__PURE__ */ l("div", { className: "gift-lang-config-info-banner", children: [
          /* @__PURE__ */ l("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ n("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
            /* @__PURE__ */ n("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
            /* @__PURE__ */ n("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
          ] }),
          /* @__PURE__ */ n("span", { children: u(i.MULTILINGUAL_CONFIG_TIP) })
        ] }),
        /* @__PURE__ */ l("table", { className: "gift-lang-config-table", children: [
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ l("tr", { children: [
            /* @__PURE__ */ n("th", { children: u(i.LANGUAGE_TYPE) }),
            /* @__PURE__ */ n("th", { children: u(i.GIFT_NAME) }),
            /* @__PURE__ */ n("th", { children: u(i.DESCRIPTION) }),
            /* @__PURE__ */ n("th", { children: u(i.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ n("tbody", { children: $e.map((f) => {
            const t = c[f], E = z[f];
            return /* @__PURE__ */ l("tr", { children: [
              /* @__PURE__ */ n("td", { children: u(E.label) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-name", children: t.name || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: u(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-desc", children: t.description || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: u(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n(
                _e,
                {
                  actions: [
                    {
                      key: "edit",
                      label: u(i.EDIT),
                      onClick: () => p && d(p, f)
                    },
                    {
                      key: "clear",
                      label: u(i.CLEAR),
                      danger: !0,
                      disabled: !t.name && !t.description,
                      onClick: () => p && r(p, f)
                    }
                  ]
                }
              ) })
            ] }, f);
          }) })
        ] })
      ] })
    }
  );
}
function li({
  visible: s,
  editingGiftForLang: p,
  editingLang: c,
  langEditForm: e,
  saving: d,
  onFormChange: r,
  onSave: u,
  onClose: f
}) {
  const { t } = X();
  return /* @__PURE__ */ n(
    S,
    {
      destroyOnClose: !0,
      visible: s && !!c,
      header: c ? t(i.EDIT_GIFT_LANGUAGE_INFO, { lang: t(z[c].label) }) : "",
      onClose: f,
      width: K.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ l(V, { children: [
        /* @__PURE__ */ n(I, { shape: "round", variant: "outline", disabled: d, onClick: f, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(I, { shape: "round", theme: "primary", loading: d, onClick: u, children: t(i.SAVE) })
      ] }),
      children: /* @__PURE__ */ l(Ne, { labelWidth: me(110), children: [
        /* @__PURE__ */ n(C, { label: t(i.GIFT_NAME), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            Y,
            {
              value: e.name,
              onChange: (E) => {
                r({ ...e, name: String(E) });
              },
              placeholder: c ? t(i.ENTER_LANGUAGE_GIFT_NAME, { lang: t(z[c].label) }) : "",
              status: g(e.name) > N ? "error" : "default",
              suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${g(e.name) > N ? " byte-overflow" : ""}`, children: [
                g(e.name),
                "/",
                N
              ] })
            }
          ),
          g(e.name) > N && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: N }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.DESCRIPTION), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            Y,
            {
              value: e.description,
              onChange: (E) => {
                r({ ...e, description: String(E) });
              },
              placeholder: c ? t(i.ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: t(z[c].label) }) : "",
              status: g(e.description) > T ? "error" : "default",
              suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${g(e.description) > T ? " byte-overflow" : ""}`, children: [
                g(e.description),
                "/",
                T
              ] })
            }
          ),
          g(e.description) > T && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.DESCRIPTION), max: T }) })
        ] }) })
      ] })
    },
    `lang-edit-${p}-${c}`
  );
}
const { Option: ai } = Ie;
function oi({
  visible: s,
  editingCategoryGift: p,
  giftCategoryIds: c,
  allCategories: e,
  availableCategories: d,
  selectedCategoryId: r,
  categoryAddPopVisible: u,
  categoryDeleteVisible: f,
  deletingCategoryId: t,
  categoryAddLoading: E,
  categoryRemoveLoading: A,
  onRemoveCategory: b,
  onAddCategoryConfirm: y,
  onSelectCategory: D,
  onToggleAddPop: v,
  onConfirmRemoveCategory: H,
  onClose: F,
  onCloseDeleteDialog: M
}) {
  const { t: h } = X();
  return /* @__PURE__ */ l(V, { children: [
    /* @__PURE__ */ n(
      S,
      {
        visible: s && !!p,
        header: h(i.EDIT_GIFT_CATEGORY),
        onClose: F,
        width: K.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ n(I, { shape: "round", theme: "primary", onClick: F, children: h(i.CLOSE) }),
        children: /* @__PURE__ */ l("div", { className: "gift-category-edit-tags", children: [
          c.map((_) => {
            const x = e.find((k) => String(k.id) === String(_))?.name || _;
            return /* @__PURE__ */ l("span", { className: "gift-category-edit-tag", children: [
              x,
              /* @__PURE__ */ n("button", { className: "gift-category-edit-tag-close", onClick: () => b(_), children: /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ n("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, _);
          }),
          /* @__PURE__ */ n("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ l(I, { variant: "text", theme: "primary", onClick: () => v(!u), children: [
            "+ ",
            h(i.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      S,
      {
        visible: u,
        header: h(i.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ n(I, { shape: "round", theme: "primary", disabled: !r, loading: E, onClick: y, children: h(i.CONFIRM) }),
        children: /* @__PURE__ */ l("div", { className: "category-select-list", children: [
          /* @__PURE__ */ n(
            Ie,
            {
              value: r,
              onChange: (_) => D(String(_)),
              placeholder: h(i.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: d.map((_) => /* @__PURE__ */ n(ai, { value: _.id, label: _.name }, _.id))
            }
          ),
          d.length === 0 && /* @__PURE__ */ n("div", { className: "category-select-empty", children: h(i.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      S,
      {
        visible: f,
        header: h(i.CONFIRM_ACTION_TITLE, { action: h(i.GIFT_CATEGORY_REMOVE_OPERATION) }),
        onClose: M,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ l(V, { children: [
          /* @__PURE__ */ n(I, { shape: "round", variant: "outline", disabled: A, onClick: M, children: h(i.CANCEL) }),
          /* @__PURE__ */ n(I, { shape: "round", theme: "primary", loading: A, onClick: H, children: h(i.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ n("p", { children: h(i.REMOVE_CATEGORY_DESCRIPTION) })
      }
    )
  ] });
}
function si({
  visible: s,
  deletingItem: p,
  loading: c,
  onConfirm: e,
  onClose: d
}) {
  const { t: r } = X();
  return /* @__PURE__ */ n(
    S,
    {
      visible: s && !!p,
      header: r(i.CONFIRM_ACTION_TITLE, { action: r(i.GIFT_DELETE_OPERATION) }),
      onClose: d,
      width: K.GIFT_DELETE,
      footer: /* @__PURE__ */ l(V, { children: [
        /* @__PURE__ */ n(I, { shape: "round", variant: "outline", disabled: c, onClick: d, children: r(i.CANCEL) }),
        /* @__PURE__ */ n(I, { shape: "round", theme: "primary", loading: c, onClick: e, children: r(i.DELETE) })
      ] }),
      children: /* @__PURE__ */ n("p", { children: r(i.CANNOT_UNDO_AFTER_DELETE) })
    }
  );
}
function ci(s, p, c) {
  switch (s) {
    case "id":
      return (e) => /* @__PURE__ */ l("div", { className: "gift-id", children: [
        /* @__PURE__ */ n("span", { className: "gift-id-text", children: e.id || "-" }),
        /* @__PURE__ */ n(
          ke,
          {
            className: "copy-icon",
            size: 14,
            onClick: () => c.onCopyId(String(e.id || ""))
          }
        )
      ] });
    case "iconUrl":
      return (e) => /* @__PURE__ */ n("div", { className: "gift-thumbnail", children: e.iconUrl ? /* @__PURE__ */ n("img", { src: e.iconUrl, alt: e.name || "gift" }) : /* @__PURE__ */ n("span", { children: "🎁" }) });
    case "name":
      return (e) => e.name || "-";
    case "description":
      return (e) => /* @__PURE__ */ n("span", { children: e.description || "-" });
    case "categories":
      return (e) => /* @__PURE__ */ l("div", { className: "gift-category-cell", onClick: () => c.onOpenCategoryEdit(e), children: [
        /* @__PURE__ */ n("span", { children: e.categories?.join(", ") || "-" }),
        /* @__PURE__ */ n(se, { className: "gift-category-edit-icon", size: 14 })
      ] });
    case "languageList":
      return (e) => /* @__PURE__ */ l("div", { className: "gift-lang-tags", children: [
        e.languageList && e.languageList.length > 0 ? e.languageList.map((d) => {
          const r = Ke(d), u = qe[r], f = u ? z[u] : null;
          return /* @__PURE__ */ n(
            "span",
            {
              className: "gift-lang-tag",
              onClick: () => u && c.onOpenLangEdit(e.id, u),
              children: f ? p(f.label) : r
            },
            r
          );
        }) : /* @__PURE__ */ n("span", { className: "gift-lang-empty", children: "-" }),
        /* @__PURE__ */ n(
          se,
          {
            className: "gift-lang-edit-icon",
            size: 14,
            onClick: () => c.onOpenGiftLangConfig(e.id)
          }
        )
      ] });
    case "level":
      return (e) => e.level || "-";
    case "price":
      return (e) => e.price ?? 0;
    case "createdAt":
      return (e) => ze(e.createdAt);
    case "customer-extra": {
      const e = re().components?.giftConfig;
      return (d) => /* @__PURE__ */ n(fe, { slot: e?.giftTableExtraColumns, props: { gift: d } });
    }
    case "actions": {
      const e = re().components?.giftConfig;
      return (d) => /* @__PURE__ */ l(V, { children: [
        /* @__PURE__ */ n(
          _e,
          {
            actions: [
              { key: "edit", label: p(i.EDIT), onClick: () => c.onEdit(d) },
              { key: "delete", label: p(i.DELETE), danger: !0, onClick: () => c.onDelete(d) }
            ]
          }
        ),
        /* @__PURE__ */ n(fe, { slot: e?.giftRowActions, props: { gift: d } })
      ] });
    }
    default:
      return;
  }
}
function di() {
  const { t: s } = ii();
  return (p) => ei().map((e) => ({
    ...e,
    title: e.i18nKey ? s(e.i18nKey) : "",
    render: ci(e.key, s, p)
  }));
}
function Ri() {
  const { t: s } = X(), p = De(), c = Be(), e = di(), d = Z(null);
  d.current || (d.current = new je({
    actions: p,
    t: s,
    toast: m,
    onNavigateToCategoryManagement: () => c("/gift-category")
  }));
  const r = d.current;
  J(() => {
    r.setOpts({
      actions: p,
      t: s,
      onNavigateToCategoryManagement: () => c("/gift-category")
    });
  }, [r, p, s, c]);
  const u = xe(r.subscribe, r.getState, r.getState);
  J(() => (r.init(), () => r.dispose()), []), J(() => {
    const o = () => r.onLanguageChanged();
    return ge.on("languageChanged", o), () => {
      ge.off("languageChanged", o);
    };
  }, [r]);
  const { loading: f, execute: t } = Q({
    toast: { action: i.LABEL_DELETED, entity: i.GIFT },
    operationName: s(i.GIFT_DELETE_OPERATION),
    action: async () => {
      await r.confirmDelete();
    }
  }), { loading: E, execute: A } = Q({
    toast: { action: i.GIFT_MULTILINGUAL_SAVE },
    operationName: s(i.GIFT_MULTILINGUAL_SAVE),
    action: async () => {
      await r.saveLangEdit();
    }
  }), { loading: b, execute: y } = Q({
    toast: { action: i.GIFT_CATEGORY_ADD_OPERATION },
    operationName: s(i.GIFT_CATEGORY_ADD_OPERATION),
    action: async () => {
      await r.confirmAddCategory();
    },
    onSuccess: () => {
      U(!1);
    }
  }), { loading: D, execute: v } = Q({
    toast: { action: i.GIFT_CATEGORY_REMOVE_OPERATION },
    operationName: s(i.GIFT_CATEGORY_REMOVE_OPERATION),
    action: async () => {
      await r.confirmRemoveCategory();
    }
  }), [H, F] = L(!1);
  J(() => {
    Je().then(F);
  }, []);
  const [M, h] = L(Ee), [_, U] = L(!1), x = Z(null), {
    loading: k,
    displayList: ee,
    searchInput: a,
    dialogVisible: q,
    isEdit: ie,
    editingId: G,
    langConfigVisible: j,
    giftLangConfig: ne,
    langEditVisible: te,
    editingLang: Te,
    editingGiftForLang: Ce,
    langEditForm: Ae,
    categoryEditVisible: Ge,
    editingCategoryGift: ve,
    allCategories: le,
    giftCategoryIds: ae,
    selectedCategoryId: Le,
    categoryDeleteVisible: ye,
    deletingCategoryId: Oe,
    deleteDialogVisible: Re,
    deletingItem: Se
  } = u, be = le.filter((o) => !ae.includes(o.id)), oe = () => {
    h(Ee), r.openCreateDialog();
  }, Fe = (o) => {
    h({
      id: o.id,
      name: o.name,
      iconUrl: o.iconUrl,
      price: o.price,
      animationUrl: o.animationUrl || "",
      level: o.level || "",
      description: o.description || "",
      extensionInfo: o.extensionInfo || "",
      enabled: o.enabled ?? !0
    }), r.openEditDialog(o);
  }, Me = async () => {
    await y();
  }, Ue = e({
    onEdit: Fe,
    onDelete: (o) => r.requestDelete(o),
    onOpenCategoryEdit: (o) => r.openCategoryEditDialog(o),
    onOpenLangEdit: (o, W) => {
      r.openLangEditDialog(o, W);
    },
    onOpenGiftLangConfig: (o) => {
      r.openGiftLangConfigDialog(o);
    },
    onCopyId: (o) => r.copyGiftId(o)
  });
  return /* @__PURE__ */ l("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ l("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ n("h1", { className: "gift-config-title", children: s(i.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ l("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ n(
          Y,
          {
            value: a,
            onChange: (o) => r.setSearchInput(String(o ?? "")),
            onEnter: () => {
              if (r.isSearchInputTooLong()) {
                m.error(s(i.INPUT_TOO_LONG));
                return;
              }
              r.search();
            },
            clearable: !0,
            onClear: () => r.clearSearch(),
            placeholder: s(i.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ n(Pe, { size: 16 }),
            className: "gift-config-search-input",
            status: pe(a, ue) ? "error" : "default",
            tips: pe(a, ue) ? s(i.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ n(I, { shape: "round", theme: "primary", onClick: () => r.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ n(we, {}), children: s(i.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ l(I, { shape: "round", onClick: oe, theme: "primary", children: [
          "＋ ",
          s(i.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(Ve, { className: "gift-list-card", ref: x, children: /* @__PURE__ */ n(
      Xe,
      {
        columns: Ue,
        data: ee,
        rowKey: "id",
        loading: k,
        tableClassName: "gift-table",
        bodyClassName: "gift-list-content",
        rowClassName: "gift-row",
        loadingNode: /* @__PURE__ */ l("div", { className: "gift-loading-container", children: [
          /* @__PURE__ */ n("div", { className: "gift-loading-spinner" }),
          /* @__PURE__ */ n("span", { className: "gift-loading-text", children: s(i.LOADING) })
        ] }),
        emptyNode: a ? /* @__PURE__ */ n("div", { className: "gift-empty-container", children: /* @__PURE__ */ n("span", { className: "gift-empty-text", children: s(i.NO_GIFT_FOUND, { keyword: a }) }) }) : /* @__PURE__ */ l("div", { className: "gift-empty-container", children: [
          /* @__PURE__ */ n("div", { className: "empty-guide-icon", children: /* @__PURE__ */ n(ce, { size: "40px" }) }),
          /* @__PURE__ */ n("p", { className: "empty-guide-title", children: s(i.EMPTY_GIFT_TITLE) }),
          /* @__PURE__ */ n("p", { className: "empty-guide-desc", children: s(i.EMPTY_GIFT_DESC) }),
          /* @__PURE__ */ n("div", { className: "empty-guide-actions", children: /* @__PURE__ */ n(I, { theme: "primary", shape: "round", className: "empty-guide-cta", icon: /* @__PURE__ */ n(ce, {}), onClick: oe, children: s(i.ADD_GIFT) }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ n(
      ti,
      {
        visible: q,
        isEdit: ie,
        editingId: G,
        formData: M,
        uploadEnabled: H,
        onFormDataChange: h,
        onSubmitGift: async (o) => {
          await r.submitGift(o);
        },
        onClose: () => r.closeDialog()
      }
    ),
    /* @__PURE__ */ n(
      ri,
      {
        visible: j,
        editingId: G,
        giftLangConfig: ne,
        onClose: () => r.closeGiftLangConfigDialog(),
        onEditLang: (o, W) => {
          r.openLangEditDialog(o, W);
        },
        onClearLang: (o, W) => {
          r.clearLang(o, W);
        }
      }
    ),
    /* @__PURE__ */ n(
      li,
      {
        visible: te,
        editingGiftForLang: Ce,
        editingLang: Te,
        langEditForm: Ae,
        saving: E,
        onFormChange: (o) => r.setLangEditForm(o),
        onSave: () => A(),
        onClose: () => r.closeLangEditDialog()
      }
    ),
    /* @__PURE__ */ n(
      oi,
      {
        visible: Ge,
        editingCategoryGift: ve,
        giftCategoryIds: ae,
        allCategories: le,
        availableCategories: be,
        selectedCategoryId: Le,
        categoryAddPopVisible: _,
        categoryDeleteVisible: ye,
        deletingCategoryId: Oe,
        categoryAddLoading: b,
        categoryRemoveLoading: D,
        onRemoveCategory: (o) => r.requestRemoveCategory(o),
        onAddCategoryConfirm: Me,
        onSelectCategory: (o) => r.setSelectedCategoryId(o),
        onToggleAddPop: U,
        onConfirmRemoveCategory: () => v(),
        onClose: () => r.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => r.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ n(
      si,
      {
        visible: Re,
        deletingItem: Se,
        loading: f,
        onConfirm: () => t(),
        onClose: () => r.cancelDelete()
      }
    )
  ] });
}
export {
  Ri as default
};
