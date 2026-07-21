import { jsx as n, jsxs as a, Fragment as Y } from "react/jsx-runtime";
import { useRef as Z, useState as L, useEffect as J, useSyncExternalStore as Ue } from "react";
import { EditIcon as oe, FileCopyIcon as xe, SearchIcon as ke, AdjustmentIcon as Pe } from "tdesign-icons-react";
import { useNavigate as we } from "react-router-dom";
import { Dialog as S, Input as V, InputNumber as se, Textarea as Be, Button as _, Select as Ee, Card as Ve } from "tdesign-react";
import { useUIKit as X, i18next as ce } from "@tencentcloud/uikit-base-component-react";
import { A as he, F as Ye } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { M as N, u as Xe, a as Q } from "../../chunks/useAsyncAction.R1AlIQqh.js";
/* empty css                                */
import { h as He, n as re, ar as q, I as i, C as Ie } from "../../chunks/shared-state.Bf8CkvaR.js";
import { z as O, g, F as m, x as T, y as $, ab as De, b as We, a as z, aL as $e, aT as ze, L as qe, I as Ke, ba as de, H as ge } from "../../chunks/main-layout.OEkSp6vd.js";
import { f as je, e as Je, b as Qe } from "../../chunks/upload.BUq-1ot2.js";
import { F as _e, a as C } from "../../chunks/FormField.D0eRD3uO.js";
import { I as ue } from "../../chunks/ImageUpload.DB6Sd-EZ.js";
import { g as Ze } from "../../chunks/columns.DzP4VQm6.js";
import { b as ei } from "../../chunks/useT.CDh8p6A1.js";
import { S as pe } from "../../chunks/SlotRenderer.C2--beKA.js";
const R = 0, P = 2147483647, w = 0, B = 99, fe = {
  id: "",
  name: "",
  iconUrl: "",
  price: 0,
  animationUrl: "",
  level: "",
  description: "",
  extensionInfo: "",
  enabled: !0
}, ii = He("GiftFormDialog");
function ni({
  visible: s,
  isEdit: u,
  editingId: c,
  formData: e,
  uploadEnabled: d,
  onFormDataChange: r,
  onSubmitGift: p,
  onClose: E
}) {
  const { t } = X();
  re().components?.giftConfig;
  const h = Z(null), A = Z(null), [b, y] = L(!1), [H, v] = L(!1), [D, F] = L(!1), [M, f] = L(!1), I = () => {
    h.current?.reset(), A.current?.reset(), y(!1), v(!1);
  }, U = () => {
    I(), E();
  }, [x, k] = L(!1), ee = async () => {
    if (!e.id.trim()) {
      N.error(t(i.ENTER_GIFT_ID));
      return;
    }
    if (g(e.id) > O) {
      N.error(t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: O }));
      return;
    }
    if (!e.name.trim()) {
      N.error(t(i.ENTER_GIFT_NAME));
      return;
    }
    if (g(e.name) > m) {
      N.error(t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: m }));
      return;
    }
    if (e.description && g(e.description) > T) {
      N.error(t(i.MAX_BYTES, { field: t(i.DESCRIPTION), max: T }));
      return;
    }
    const o = parseInt(e.level);
    if (e.level && !isNaN(o) && (o < w || o > B)) {
      N.error(t(i.GIFT_LEVEL_RANGE, { min: w, max: B }));
      return;
    }
    if (e.price < R || e.price > P) {
      N.error(t(i.GIFT_PRICE_RANGE, { min: R, max: P }));
      return;
    }
    const K = h.current?.isUrlInputMode ?? !0, ie = K && (h.current?.urlInputValue?.trim?.() || "");
    if (!b && !e.iconUrl.trim() && !ie) {
      K && h.current?.setUrlError(t(i.ENTER_THUMBNAIL_URL)), N.error(t(i.UPLOAD_THUMBNAIL_OR_ENTER_URL));
      return;
    }
    if (e.extensionInfo.trim()) {
      try {
        JSON.parse(e.extensionInfo.trim());
      } catch {
        N.error(t(i.EXTENSION_INFO_JSON_FORMAT));
        return;
      }
      if (new TextEncoder().encode(e.extensionInfo.trim()).length > 100) {
        N.error(t(i.MAX_BYTES, { field: t(i.CUSTOM_EXTENSION_INFO), max: 100 }));
        return;
      }
    }
    k(!0);
    try {
      const [G, j] = await je([
        {
          handle: h.current,
          hasPendingFile: b,
          fallbackUrl: e.iconUrl,
          label: t(i.THUMBNAIL)
        },
        {
          handle: A.current,
          hasPendingFile: H,
          fallbackUrl: e.animationUrl,
          label: t(i.GIFT_MATERIAL)
        }
      ]), ne = { ...e, iconUrl: G, animationUrl: j };
      r(ne);
      const te = De(e, G, j);
      await p(te);
    } catch (G) {
      ii.error("GiftFormDialog", `Image upload failed: ${G?.message || t(i.UNKNOWN_HOST)}`, G), N.error(Je(G, t(i.THUMBNAIL)));
    } finally {
      k(!1);
    }
  };
  return /* @__PURE__ */ n(
    S,
    {
      destroyOnClose: !0,
      visible: s,
      header: t(u ? i.EDIT_GIFT : i.CREATE_GIFT),
      onClose: U,
      width: q.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(_, { shape: "round", variant: "outline", onClick: U, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(
          _,
          {
            shape: "round",
            theme: "primary",
            onClick: ee,
            disabled: x || !u && !e.id.trim() || !e.name.trim() || h.current?.isValidating || A.current?.isValidating || D || M,
            children: t(x ? u ? i.SAVING : i.CREATING : u ? i.SAVE : i.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ a(_e, { labelWidth: Ie(110), children: [
        !u && /* @__PURE__ */ n(C, { label: t(i.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.id,
              onChange: (o) => r({ ...e, id: String(o) }),
              placeholder: t(i.ENTER_GIFT_ID),
              status: g(e.id) > O ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.id) > O ? " byte-overflow" : ""}`, children: [
                g(e.id),
                "/",
                O
              ] })
            }
          ),
          g(e.id) > O && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: O }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_PRICE), requiredMark: !0, children: /* @__PURE__ */ n(
          se,
          {
            value: e.price,
            onChange: (o) => r({ ...e, price: Number(o) || R }),
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
          se,
          {
            value: e.level ? parseInt(e.level) : void 0,
            onChange: (o) => {
              if (o == null) {
                r({ ...e, level: "" });
                return;
              }
              r({ ...e, level: String(o) });
            },
            min: e.level ? w : void 0,
            max: e.level ? B : void 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: (() => {
                const o = parseInt(e.level);
                return !isNaN(o) && (o < w || o > B) ? t(i.GIFT_LEVEL_RANGE, { min: w, max: B }) : "";
              })(),
              status: (() => {
                const o = parseInt(e.level);
                return !isNaN(o) && (o < w || o > B) ? "error" : "default";
              })()
            },
            style: { width: "100%" },
            placeholder: t(i.ENTER_GIFT_LEVEL)
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.THUMBNAIL), requiredMark: !0, children: /* @__PURE__ */ n(
          ue,
          {
            ref: h,
            value: e.iconUrl,
            onChange: (o) => {
              r({ ...e, iconUrl: o }), y(!1);
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
            onFileReady: (o) => y(!!o),
            onUrlErrorChange: F
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_MATERIAL), children: /* @__PURE__ */ n(
          ue,
          {
            ref: A,
            value: e.animationUrl,
            onChange: (o) => {
              r({ ...e, animationUrl: o }), v(!1);
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
            onFileReady: (o) => v(!!o),
            onUrlErrorChange: f
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_NAME), requiredMark: !0, children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.name,
              onChange: (o) => r({ ...e, name: String(o) }),
              placeholder: t(i.ENTER_GIFT_NAME),
              status: g(e.name) > m ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.name) > m ? " byte-overflow" : ""}`, children: [
                g(e.name),
                "/",
                m
              ] })
            }
          ),
          g(e.name) > m && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: m }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.DESCRIPTION), children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.description,
              onChange: (o) => r({ ...e, description: String(o) }),
              placeholder: t(i.ENTER_GIFT_DESCRIPTION),
              status: g(e.description) > T ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.description) > T ? " byte-overflow" : ""}`, children: [
                g(e.description),
                "/",
                T
              ] })
            }
          ),
          g(e.description) > T && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.DESCRIPTION), max: T }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.CUSTOM_EXTENSION_INFO), children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ a("div", { className: "textarea-count-wrapper", children: [
            /* @__PURE__ */ n(
              Be,
              {
                value: e.extensionInfo,
                onChange: (o) => r({ ...e, extensionInfo: String(o) }),
                placeholder: 'JSON 格式例如：{"key":"value"}',
                autosize: { minRows: 3 },
                status: g(e.extensionInfo) > $ ? "error" : "default"
              }
            ),
            /* @__PURE__ */ a("span", { className: `textarea-suffix-count${g(e.extensionInfo) > $ ? " byte-overflow" : ""}`, children: [
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
function ti({
  visible: s,
  editingId: u,
  giftLangConfig: c,
  onClose: e,
  onEditLang: d,
  onClearLang: r
}) {
  const { t: p } = X();
  return /* @__PURE__ */ n(
    S,
    {
      visible: s,
      header: p(i.GIFT_MULTILINGUAL_CONFIG),
      onClose: e,
      width: q.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ n(_, { shape: "round", theme: "primary", onClick: e, children: p(i.CLOSE) }),
      children: /* @__PURE__ */ a("div", { className: "gift-lang-config-container", children: [
        /* @__PURE__ */ a("div", { className: "gift-lang-config-info-banner", children: [
          /* @__PURE__ */ a("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ n("circle", { cx: "8", cy: "8", r: "7", stroke: "#1C66E5", strokeWidth: "1.5" }),
            /* @__PURE__ */ n("path", { d: "M8 7V11", stroke: "#1C66E5", strokeWidth: "1.5", strokeLinecap: "round" }),
            /* @__PURE__ */ n("circle", { cx: "8", cy: "5", r: "0.75", fill: "#1C66E5" })
          ] }),
          /* @__PURE__ */ n("span", { children: p(i.MULTILINGUAL_CONFIG_TIP) })
        ] }),
        /* @__PURE__ */ a("table", { className: "gift-lang-config-table", children: [
          /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ a("tr", { children: [
            /* @__PURE__ */ n("th", { children: p(i.LANGUAGE_TYPE) }),
            /* @__PURE__ */ n("th", { children: p(i.GIFT_NAME) }),
            /* @__PURE__ */ n("th", { children: p(i.DESCRIPTION) }),
            /* @__PURE__ */ n("th", { children: p(i.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ n("tbody", { children: We.map((E) => {
            const t = c[E], h = z[E];
            return /* @__PURE__ */ a("tr", { children: [
              /* @__PURE__ */ n("td", { children: p(h.label) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-name", children: t.name || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: p(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-desc", children: t.description || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: p(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n(
                he,
                {
                  actions: [
                    {
                      key: "edit",
                      label: p(i.EDIT),
                      onClick: () => u && d(u, E)
                    },
                    {
                      key: "clear",
                      label: p(i.CLEAR),
                      danger: !0,
                      disabled: !t.name && !t.description,
                      onClick: () => u && r(u, E)
                    }
                  ]
                }
              ) })
            ] }, E);
          }) })
        ] })
      ] })
    }
  );
}
function ri({
  visible: s,
  editingGiftForLang: u,
  editingLang: c,
  langEditForm: e,
  saving: d,
  onFormChange: r,
  onSave: p,
  onClose: E
}) {
  const { t } = X();
  return /* @__PURE__ */ n(
    S,
    {
      destroyOnClose: !0,
      visible: s && !!c,
      header: c ? t(i.EDIT_GIFT_LANGUAGE_INFO, { lang: t(z[c].label) }) : "",
      onClose: E,
      width: q.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(_, { shape: "round", variant: "outline", disabled: d, onClick: E, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(_, { shape: "round", theme: "primary", loading: d, onClick: p, children: t(i.SAVE) })
      ] }),
      children: /* @__PURE__ */ a(_e, { labelWidth: Ie(110), children: [
        /* @__PURE__ */ n(C, { label: t(i.GIFT_NAME), children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.name,
              onChange: (h) => {
                r({ ...e, name: String(h) });
              },
              placeholder: c ? t(i.ENTER_LANGUAGE_GIFT_NAME, { lang: t(z[c].label) }) : "",
              status: g(e.name) > m ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.name) > m ? " byte-overflow" : ""}`, children: [
                g(e.name),
                "/",
                m
              ] })
            }
          ),
          g(e.name) > m && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: m }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.DESCRIPTION), children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.description,
              onChange: (h) => {
                r({ ...e, description: String(h) });
              },
              placeholder: c ? t(i.ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: t(z[c].label) }) : "",
              status: g(e.description) > T ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.description) > T ? " byte-overflow" : ""}`, children: [
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
    `lang-edit-${u}-${c}`
  );
}
const { Option: li } = Ee;
function ai({
  visible: s,
  editingCategoryGift: u,
  giftCategoryIds: c,
  allCategories: e,
  availableCategories: d,
  selectedCategoryId: r,
  categoryAddPopVisible: p,
  categoryDeleteVisible: E,
  deletingCategoryId: t,
  categoryAddLoading: h,
  categoryRemoveLoading: A,
  onRemoveCategory: b,
  onAddCategoryConfirm: y,
  onSelectCategory: H,
  onToggleAddPop: v,
  onConfirmRemoveCategory: D,
  onClose: F,
  onCloseDeleteDialog: M
}) {
  const { t: f } = X();
  return /* @__PURE__ */ a(Y, { children: [
    /* @__PURE__ */ n(
      S,
      {
        visible: s && !!u,
        header: f(i.EDIT_GIFT_CATEGORY),
        onClose: F,
        width: q.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ n(_, { shape: "round", theme: "primary", onClick: F, children: f(i.CLOSE) }),
        children: /* @__PURE__ */ a("div", { className: "gift-category-edit-tags", children: [
          c.map((I) => {
            const x = e.find((k) => String(k.id) === String(I))?.name || I;
            return /* @__PURE__ */ a("span", { className: "gift-category-edit-tag", children: [
              x,
              /* @__PURE__ */ n("button", { className: "gift-category-edit-tag-close", onClick: () => b(I), children: /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ n("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, I);
          }),
          /* @__PURE__ */ n("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ a(_, { variant: "text", theme: "primary", onClick: () => v(!p), children: [
            "+ ",
            f(i.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      S,
      {
        visible: p,
        header: f(i.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ n(_, { shape: "round", theme: "primary", disabled: !r, loading: h, onClick: y, children: f(i.CONFIRM) }),
        children: /* @__PURE__ */ a("div", { className: "category-select-list", children: [
          /* @__PURE__ */ n(
            Ee,
            {
              value: r,
              onChange: (I) => H(String(I)),
              placeholder: f(i.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: d.map((I) => /* @__PURE__ */ n(li, { value: I.id, label: I.name }, I.id))
            }
          ),
          d.length === 0 && /* @__PURE__ */ n("div", { className: "category-select-empty", children: f(i.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      S,
      {
        visible: E,
        header: f(i.CONFIRM_ACTION_TITLE, { action: f(i.GIFT_CATEGORY_REMOVE_OPERATION) }),
        onClose: M,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ a(Y, { children: [
          /* @__PURE__ */ n(_, { shape: "round", variant: "outline", disabled: A, onClick: M, children: f(i.CANCEL) }),
          /* @__PURE__ */ n(_, { shape: "round", theme: "primary", loading: A, onClick: D, children: f(i.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ n("p", { children: f(i.REMOVE_CATEGORY_DESCRIPTION) })
      }
    )
  ] });
}
function oi({
  visible: s,
  deletingItem: u,
  loading: c,
  onConfirm: e,
  onClose: d
}) {
  const { t: r } = X();
  return /* @__PURE__ */ n(
    S,
    {
      visible: s && !!u,
      header: r(i.CONFIRM_ACTION_TITLE, { action: r(i.GIFT_DELETE_OPERATION) }),
      onClose: d,
      width: q.GIFT_DELETE,
      footer: /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(_, { shape: "round", variant: "outline", disabled: c, onClick: d, children: r(i.CANCEL) }),
        /* @__PURE__ */ n(_, { shape: "round", theme: "primary", loading: c, onClick: e, children: r(i.DELETE) })
      ] }),
      children: /* @__PURE__ */ n("p", { children: r(i.CANNOT_UNDO_AFTER_DELETE) })
    }
  );
}
function si(s, u, c) {
  switch (s) {
    case "id":
      return (e) => /* @__PURE__ */ a("div", { className: "gift-id", children: [
        /* @__PURE__ */ n("span", { className: "gift-id-text", children: e.id || "-" }),
        /* @__PURE__ */ n(
          xe,
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
      return (e) => /* @__PURE__ */ a("div", { className: "gift-category-cell", onClick: () => c.onOpenCategoryEdit(e), children: [
        /* @__PURE__ */ n("span", { children: e.categories?.join(", ") || "-" }),
        /* @__PURE__ */ n(oe, { className: "gift-category-edit-icon", size: 14 })
      ] });
    case "languageList":
      return (e) => /* @__PURE__ */ a("div", { className: "gift-lang-tags", children: [
        e.languageList && e.languageList.length > 0 ? e.languageList.map((d) => {
          const r = ze(d), p = qe[r], E = p ? z[p] : null;
          return /* @__PURE__ */ n(
            "span",
            {
              className: "gift-lang-tag",
              onClick: () => p && c.onOpenLangEdit(e.id, p),
              children: E ? u(E.label) : r
            },
            r
          );
        }) : /* @__PURE__ */ n("span", { className: "gift-lang-empty", children: "-" }),
        /* @__PURE__ */ n(
          oe,
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
      return (e) => $e(e.createdAt);
    case "customer-extra": {
      const e = re().components?.giftConfig;
      return (d) => /* @__PURE__ */ n(pe, { slot: e?.giftTableExtraColumns, props: { gift: d } });
    }
    case "actions": {
      const e = re().components?.giftConfig;
      return (d) => /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(
          he,
          {
            actions: [
              { key: "edit", label: u(i.EDIT), onClick: () => c.onEdit(d) },
              { key: "delete", label: u(i.DELETE), danger: !0, onClick: () => c.onDelete(d) }
            ]
          }
        ),
        /* @__PURE__ */ n(pe, { slot: e?.giftRowActions, props: { gift: d } })
      ] });
    }
    default:
      return;
  }
}
function ci() {
  const { t: s } = ei();
  return (u) => Ze().map((e) => ({
    ...e,
    title: e.i18nKey ? s(e.i18nKey) : "",
    render: si(e.key, s, u)
  }));
}
function yi() {
  const { t: s } = X(), u = Xe(), c = we(), e = ci(), d = Z(null);
  d.current || (d.current = new Ke({
    actions: u,
    t: s,
    toast: N,
    onNavigateToCategoryManagement: () => c("/gift-category")
  }));
  const r = d.current;
  J(() => {
    r.setOpts({
      actions: u,
      t: s,
      onNavigateToCategoryManagement: () => c("/gift-category")
    });
  }, [r, u, s, c]);
  const p = Ue(r.subscribe, r.getState, r.getState);
  J(() => (r.init(), () => r.dispose()), []), J(() => {
    const l = () => r.onLanguageChanged();
    return ce.on("languageChanged", l), () => {
      ce.off("languageChanged", l);
    };
  }, [r]);
  const { loading: E, execute: t } = Q({
    toast: { action: i.LABEL_DELETED, entity: i.GIFT },
    operationName: s(i.GIFT_DELETE_OPERATION),
    action: async () => {
      await r.confirmDelete();
    }
  }), { loading: h, execute: A } = Q({
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
  }), { loading: H, execute: v } = Q({
    toast: { action: i.GIFT_CATEGORY_REMOVE_OPERATION },
    operationName: s(i.GIFT_CATEGORY_REMOVE_OPERATION),
    action: async () => {
      await r.confirmRemoveCategory();
    }
  }), [D, F] = L(!1);
  J(() => {
    Qe().then(F);
  }, []);
  const [M, f] = L(fe), [I, U] = L(!1), x = Z(null), {
    loading: k,
    displayList: ee,
    searchInput: o,
    dialogVisible: K,
    isEdit: ie,
    editingId: G,
    langConfigVisible: j,
    giftLangConfig: ne,
    langEditVisible: te,
    editingLang: Ne,
    editingGiftForLang: me,
    langEditForm: Te,
    categoryEditVisible: Ce,
    editingCategoryGift: Ae,
    allCategories: le,
    giftCategoryIds: ae,
    selectedCategoryId: Ge,
    categoryDeleteVisible: ve,
    deletingCategoryId: Le,
    deleteDialogVisible: ye,
    deletingItem: Oe
  } = p, Re = le.filter((l) => !ae.includes(l.id)), Se = () => {
    f(fe), r.openCreateDialog();
  }, be = (l) => {
    f({
      id: l.id,
      name: l.name,
      iconUrl: l.iconUrl,
      price: l.price,
      animationUrl: l.animationUrl || "",
      level: l.level || "",
      description: l.description || "",
      extensionInfo: l.extensionInfo || "",
      enabled: l.enabled ?? !0
    }), r.openEditDialog(l);
  }, Fe = async () => {
    await y();
  }, Me = e({
    onEdit: be,
    onDelete: (l) => r.requestDelete(l),
    onOpenCategoryEdit: (l) => r.openCategoryEditDialog(l),
    onOpenLangEdit: (l, W) => {
      r.openLangEditDialog(l, W);
    },
    onOpenGiftLangConfig: (l) => {
      r.openGiftLangConfigDialog(l);
    },
    onCopyId: (l) => r.copyGiftId(l)
  });
  return /* @__PURE__ */ a("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ a("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ n("h1", { className: "gift-config-title", children: s(i.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ a("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ n(
          V,
          {
            value: o,
            onChange: (l) => r.setSearchInput(String(l ?? "")),
            onEnter: () => {
              if (r.isSearchInputTooLong()) {
                N.error(s(i.INPUT_TOO_LONG));
                return;
              }
              r.search();
            },
            clearable: !0,
            onClear: () => r.clearSearch(),
            placeholder: s(i.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ n(ke, { size: 16 }),
            className: "gift-config-search-input",
            status: de(o, ge) ? "error" : "default",
            tips: de(o, ge) ? s(i.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ n(_, { shape: "round", theme: "primary", onClick: () => r.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ n(Pe, {}), children: s(i.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ a(_, { shape: "round", onClick: Se, theme: "primary", children: [
          "＋ ",
          s(i.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(Ve, { className: "gift-list-card", ref: x, children: /* @__PURE__ */ n(
      Ye,
      {
        columns: Me,
        data: ee,
        rowKey: "id",
        loading: k,
        tableClassName: "gift-table",
        bodyClassName: "gift-list-content",
        rowClassName: "gift-row",
        loadingNode: /* @__PURE__ */ a("div", { className: "gift-loading-container", children: [
          /* @__PURE__ */ n("div", { className: "gift-loading-spinner" }),
          /* @__PURE__ */ n("span", { className: "gift-loading-text", children: s(i.LOADING) })
        ] }),
        emptyNode: /* @__PURE__ */ n("div", { className: "gift-empty-container", children: /* @__PURE__ */ n("span", { className: "gift-empty-text", children: s(i.NO_GIFT_DATA) }) })
      }
    ) }),
    /* @__PURE__ */ n(
      ni,
      {
        visible: K,
        isEdit: ie,
        editingId: G,
        formData: M,
        uploadEnabled: D,
        onFormDataChange: f,
        onSubmitGift: async (l) => {
          await r.submitGift(l);
        },
        onClose: () => r.closeDialog()
      }
    ),
    /* @__PURE__ */ n(
      ti,
      {
        visible: j,
        editingId: G,
        giftLangConfig: ne,
        onClose: () => r.closeGiftLangConfigDialog(),
        onEditLang: (l, W) => {
          r.openLangEditDialog(l, W);
        },
        onClearLang: (l, W) => {
          r.clearLang(l, W);
        }
      }
    ),
    /* @__PURE__ */ n(
      ri,
      {
        visible: te,
        editingGiftForLang: me,
        editingLang: Ne,
        langEditForm: Te,
        saving: h,
        onFormChange: (l) => r.setLangEditForm(l),
        onSave: () => A(),
        onClose: () => r.closeLangEditDialog()
      }
    ),
    /* @__PURE__ */ n(
      ai,
      {
        visible: Ce,
        editingCategoryGift: Ae,
        giftCategoryIds: ae,
        allCategories: le,
        availableCategories: Re,
        selectedCategoryId: Ge,
        categoryAddPopVisible: I,
        categoryDeleteVisible: ve,
        deletingCategoryId: Le,
        categoryAddLoading: b,
        categoryRemoveLoading: H,
        onRemoveCategory: (l) => r.requestRemoveCategory(l),
        onAddCategoryConfirm: Fe,
        onSelectCategory: (l) => r.setSelectedCategoryId(l),
        onToggleAddPop: U,
        onConfirmRemoveCategory: () => v(),
        onClose: () => r.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => r.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ n(
      oi,
      {
        visible: ye,
        deletingItem: Oe,
        loading: E,
        onConfirm: () => t(),
        onClose: () => r.cancelDelete()
      }
    )
  ] });
}
export {
  yi as default
};
