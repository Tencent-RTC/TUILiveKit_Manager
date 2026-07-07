import { jsx as n, jsxs as a, Fragment as Y } from "react/jsx-runtime";
import { useRef as Z, useState as L, useEffect as J, useSyncExternalStore as xe } from "react";
import { EditIcon as oe, FileCopyIcon as Ue, SearchIcon as we, AdjustmentIcon as ke } from "tdesign-icons-react";
import { useNavigate as Pe } from "react-router-dom";
import { Dialog as R, Input as V, InputNumber as se, Textarea as Be, Button as m, Select as he, Card as Ve } from "tdesign-react";
import { useUIKit as X, i18next as ce } from "@tencentcloud/uikit-base-component-react";
import { A as Ee, F as Ye } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { M as _, u as Q } from "../../chunks/useAsyncAction.BPwANCLg.js";
/* empty css                                */
import { c as Xe } from "../../chunks/logger.CjN8f6V1.js";
import { g as re, W as j, I as i, t as Ie } from "../../chunks/layout.CpAnx6QV.js";
import { y as O, g, z as N, w as T, x as $, aa as He, b as De, a as z, aQ as We, a_ as $e, L as ze, H as je, bj as de, F as ge } from "../../chunks/main-layout.DNtgEqmy.js";
import { f as qe, e as Ke, b as Je } from "../../chunks/upload.zkDcPb1K.js";
import { u as Qe } from "../../chunks/gift.DrqYoQLw.js";
import { F as me, a as C } from "../../chunks/FormField.D0eRD3uO.js";
import { I as ue } from "../../chunks/ImageUpload.8AspvSn3.js";
import { g as Ze } from "../../chunks/columns.DKNxMEbd.js";
import { u as ei } from "../../chunks/useT.Bz7bz9Yv.js";
import { S as pe } from "../../chunks/SlotRenderer.C26oD6Ib.js";
const S = 0, k = 2147483647, P = 0, B = 99, fe = {
  id: "",
  name: "",
  iconUrl: "",
  price: 0,
  animationUrl: "",
  level: "",
  description: "",
  extensionInfo: "",
  enabled: !0
}, ii = Xe("GiftFormDialog");
function ni({
  visible: s,
  isEdit: u,
  editingId: c,
  formData: e,
  uploadEnabled: d,
  onFormDataChange: r,
  onSubmitGift: p,
  onClose: h
}) {
  const { t } = X();
  re().components?.giftConfig;
  const E = Z(null), A = Z(null), [b, y] = L(!1), [H, v] = L(!1), [D, F] = L(!1), [M, f] = L(!1), I = () => {
    E.current?.reset(), A.current?.reset(), y(!1), v(!1);
  }, x = () => {
    I(), h();
  }, [U, w] = L(!1), ee = async () => {
    if (!e.id.trim()) {
      _.error(t(i.ENTER_GIFT_ID));
      return;
    }
    if (g(e.id) > O) {
      _.error(t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: O }));
      return;
    }
    if (!e.name.trim()) {
      _.error(t(i.ENTER_GIFT_NAME));
      return;
    }
    if (g(e.name) > N) {
      _.error(t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: N }));
      return;
    }
    if (e.description && g(e.description) > T) {
      _.error(t(i.MAX_BYTES, { field: t(i.DESCRIPTION), max: T }));
      return;
    }
    const o = parseInt(e.level);
    if (e.level && !isNaN(o) && (o < P || o > B)) {
      _.error(t(i.GIFT_LEVEL_RANGE, { min: P, max: B }));
      return;
    }
    if (e.price < S || e.price > k) {
      _.error(t(i.GIFT_PRICE_RANGE, { min: S, max: k }));
      return;
    }
    const q = E.current?.isUrlInputMode ?? !0, ie = q && (E.current?.urlInputValue?.trim?.() || "");
    if (!b && !e.iconUrl.trim() && !ie) {
      q && E.current?.setUrlError(t(i.ENTER_THUMBNAIL_URL)), _.error(t(i.UPLOAD_THUMBNAIL_OR_ENTER_URL));
      return;
    }
    if (e.extensionInfo.trim()) {
      try {
        JSON.parse(e.extensionInfo.trim());
      } catch {
        _.error(t(i.EXTENSION_INFO_JSON_FORMAT));
        return;
      }
      if (new TextEncoder().encode(e.extensionInfo.trim()).length > 100) {
        _.error(t(i.MAX_BYTES, { field: t(i.CUSTOM_EXTENSION_INFO), max: 100 }));
        return;
      }
    }
    w(!0);
    try {
      const [G, K] = await qe([
        {
          handle: E.current,
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
      ]), ne = { ...e, iconUrl: G, animationUrl: K };
      r(ne);
      const te = He(e, G, K);
      await p(te);
    } catch (G) {
      ii.error("GiftFormDialog", `Image upload failed: ${G?.message || t(i.UNKNOWN_HOST)}`, G), _.error(Ke(G, t(i.THUMBNAIL)));
    } finally {
      w(!1);
    }
  };
  return /* @__PURE__ */ n(
    R,
    {
      destroyOnClose: !0,
      visible: s,
      header: t(u ? i.EDIT_GIFT : i.CREATE_GIFT),
      onClose: x,
      width: j.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(m, { shape: "round", variant: "outline", onClick: x, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(
          m,
          {
            shape: "round",
            theme: "primary",
            onClick: ee,
            disabled: U || !u && !e.id.trim() || !e.name.trim() || E.current?.isValidating || A.current?.isValidating || D || M,
            children: t(U ? u ? i.SAVING : i.CREATING : u ? i.SAVE : i.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ a(me, { labelWidth: Ie(110), children: [
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
            onChange: (o) => r({ ...e, price: Number(o) || S }),
            min: S,
            max: k,
            decimalPlaces: 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: e.price < S || e.price > k ? t(i.GIFT_PRICE_RANGE, { min: S, max: k }) : "",
              status: e.price < S || e.price > k ? "error" : "default"
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
            min: e.level ? P : void 0,
            max: e.level ? B : void 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: (() => {
                const o = parseInt(e.level);
                return !isNaN(o) && (o < P || o > B) ? t(i.GIFT_LEVEL_RANGE, { min: P, max: B }) : "";
              })(),
              status: (() => {
                const o = parseInt(e.level);
                return !isNaN(o) && (o < P || o > B) ? "error" : "default";
              })()
            },
            style: { width: "100%" },
            placeholder: t(i.ENTER_GIFT_LEVEL)
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.THUMBNAIL), requiredMark: !0, children: /* @__PURE__ */ n(
          ue,
          {
            ref: E,
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
              status: g(e.name) > N ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.name) > N ? " byte-overflow" : ""}`, children: [
                g(e.name),
                "/",
                N
              ] })
            }
          ),
          g(e.name) > N && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: N }) })
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
    R,
    {
      visible: s,
      header: p(i.GIFT_MULTILINGUAL_CONFIG),
      onClose: e,
      width: j.GIFT_LANG_CONFIG,
      className: "gift-lang-config-dialog",
      footer: /* @__PURE__ */ n(m, { shape: "round", theme: "primary", onClick: e, children: p(i.CLOSE) }),
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
          /* @__PURE__ */ n("tbody", { children: De.map((h) => {
            const t = c[h], E = z[h];
            return /* @__PURE__ */ a("tr", { children: [
              /* @__PURE__ */ n("td", { children: p(E.label) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-name", children: t.name || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: p(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-desc", children: t.description || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: p(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n(
                Ee,
                {
                  actions: [
                    {
                      key: "edit",
                      label: p(i.EDIT),
                      onClick: () => u && d(u, h)
                    },
                    {
                      key: "clear",
                      label: p(i.CLEAR),
                      danger: !0,
                      disabled: !t.name && !t.description,
                      onClick: () => u && r(u, h)
                    }
                  ]
                }
              ) })
            ] }, h);
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
  onClose: h
}) {
  const { t } = X();
  return /* @__PURE__ */ n(
    R,
    {
      destroyOnClose: !0,
      visible: s && !!c,
      header: c ? t(i.EDIT_GIFT_LANGUAGE_INFO, { lang: t(z[c].label) }) : "",
      onClose: h,
      width: j.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(m, { shape: "round", variant: "outline", disabled: d, onClick: h, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(m, { shape: "round", theme: "primary", loading: d, onClick: p, children: t(i.SAVE) })
      ] }),
      children: /* @__PURE__ */ a(me, { labelWidth: Ie(110), children: [
        /* @__PURE__ */ n(C, { label: t(i.GIFT_NAME), children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.name,
              onChange: (E) => {
                r({ ...e, name: String(E) });
              },
              placeholder: c ? t(i.ENTER_LANGUAGE_GIFT_NAME, { lang: t(z[c].label) }) : "",
              status: g(e.name) > N ? "error" : "default",
              suffix: /* @__PURE__ */ a("span", { className: `input-suffix-count${g(e.name) > N ? " byte-overflow" : ""}`, children: [
                g(e.name),
                "/",
                N
              ] })
            }
          ),
          g(e.name) > N && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_NAME), max: N }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.DESCRIPTION), children: /* @__PURE__ */ a("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            V,
            {
              value: e.description,
              onChange: (E) => {
                r({ ...e, description: String(E) });
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
const { Option: li } = he;
function ai({
  visible: s,
  editingCategoryGift: u,
  giftCategoryIds: c,
  allCategories: e,
  availableCategories: d,
  selectedCategoryId: r,
  categoryAddPopVisible: p,
  categoryDeleteVisible: h,
  deletingCategoryId: t,
  categoryAddLoading: E,
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
      R,
      {
        visible: s && !!u,
        header: f(i.EDIT_GIFT_CATEGORY),
        onClose: F,
        width: j.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ n(m, { shape: "round", theme: "primary", onClick: F, children: f(i.CLOSE) }),
        children: /* @__PURE__ */ a("div", { className: "gift-category-edit-tags", children: [
          c.map((I) => {
            const U = e.find((w) => String(w.id) === String(I))?.name || I;
            return /* @__PURE__ */ a("span", { className: "gift-category-edit-tag", children: [
              U,
              /* @__PURE__ */ n("button", { className: "gift-category-edit-tag-close", onClick: () => b(I), children: /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ n("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, I);
          }),
          /* @__PURE__ */ n("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ a(m, { variant: "text", theme: "primary", onClick: () => v(!p), children: [
            "+ ",
            f(i.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      R,
      {
        visible: p,
        header: f(i.SELECT_CATEGORY),
        onClose: () => v(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ n(m, { shape: "round", theme: "primary", disabled: !r, loading: E, onClick: y, children: f(i.CONFIRM) }),
        children: /* @__PURE__ */ a("div", { className: "category-select-list", children: [
          /* @__PURE__ */ n(
            he,
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
      R,
      {
        visible: h,
        header: f(i.CONFIRM_ACTION_TITLE, { action: f(i.GIFT_CATEGORY_REMOVE_OPERATION) }),
        onClose: M,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ a(Y, { children: [
          /* @__PURE__ */ n(m, { shape: "round", variant: "outline", disabled: A, onClick: M, children: f(i.CANCEL) }),
          /* @__PURE__ */ n(m, { shape: "round", theme: "primary", loading: A, onClick: D, children: f(i.CONFIRM) })
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
    R,
    {
      visible: s && !!u,
      header: r(i.CONFIRM_ACTION_TITLE, { action: r(i.GIFT_DELETE_OPERATION) }),
      onClose: d,
      width: j.GIFT_DELETE,
      footer: /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(m, { shape: "round", variant: "outline", disabled: c, onClick: d, children: r(i.CANCEL) }),
        /* @__PURE__ */ n(m, { shape: "round", theme: "primary", loading: c, onClick: e, children: r(i.DELETE) })
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
          Ue,
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
          const r = $e(d), p = ze[r], h = p ? z[p] : null;
          return /* @__PURE__ */ n(
            "span",
            {
              className: "gift-lang-tag",
              onClick: () => p && c.onOpenLangEdit(e.id, p),
              children: h ? u(h.label) : r
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
      return (e) => We(e.createdAt);
    case "customer-extra": {
      const e = re().components?.giftConfig;
      return (d) => /* @__PURE__ */ n(pe, { slot: e?.giftTableExtraColumns, props: { gift: d } });
    }
    case "actions": {
      const e = re().components?.giftConfig;
      return (d) => /* @__PURE__ */ a(Y, { children: [
        /* @__PURE__ */ n(
          Ee,
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
function Si() {
  const { t: s } = X(), u = Qe(), c = Pe(), e = ci(), d = Z(null);
  d.current || (d.current = new je({
    actions: u,
    t: s,
    toast: _,
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
  const p = xe(r.subscribe, r.getState, r.getState);
  J(() => (r.init(), () => r.dispose()), []), J(() => {
    const l = () => r.onLanguageChanged();
    return ce.on("languageChanged", l), () => {
      ce.off("languageChanged", l);
    };
  }, [r]);
  const { loading: h, execute: t } = Q({
    operationName: s(i.GIFT_DELETE_OPERATION),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await r.confirmDelete();
    }
  }), { loading: E, execute: A } = Q({
    operationName: s(i.GIFT_MULTILINGUAL_SAVE),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await r.saveLangEdit();
    }
  }), { loading: b, execute: y } = Q({
    operationName: s(i.GIFT_CATEGORY_ADD_OPERATION),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await r.confirmAddCategory();
    },
    onSuccess: () => {
      x(!1);
    }
  }), { loading: H, execute: v } = Q({
    operationName: s(i.GIFT_CATEGORY_REMOVE_OPERATION),
    showError: !1,
    showSuccess: !1,
    action: async () => {
      await r.confirmRemoveCategory();
    }
  }), [D, F] = L(!1);
  J(() => {
    Je().then(F);
  }, []);
  const [M, f] = L(fe), [I, x] = L(!1), U = Z(null), {
    loading: w,
    displayList: ee,
    searchInput: o,
    dialogVisible: q,
    isEdit: ie,
    editingId: G,
    langConfigVisible: K,
    giftLangConfig: ne,
    langEditVisible: te,
    editingLang: _e,
    editingGiftForLang: Ne,
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
  } = p, Se = le.filter((l) => !ae.includes(l.id)), Re = () => {
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
                _.error(s(i.INPUT_TOO_LONG));
                return;
              }
              r.search();
            },
            clearable: !0,
            onClear: () => r.clearSearch(),
            placeholder: s(i.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ n(we, { size: 16 }),
            className: "gift-config-search-input",
            status: de(o, ge) ? "error" : "default",
            tips: de(o, ge) ? s(i.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ n(m, { shape: "round", theme: "primary", onClick: () => r.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ n(ke, {}), children: s(i.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ a(m, { shape: "round", onClick: Re, theme: "primary", children: [
          "＋ ",
          s(i.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(Ve, { className: "gift-list-card", ref: U, children: /* @__PURE__ */ n(
      Ye,
      {
        columns: Me,
        data: ee,
        rowKey: "id",
        loading: w,
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
        visible: q,
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
        visible: K,
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
        editingGiftForLang: Ne,
        editingLang: _e,
        langEditForm: Te,
        saving: E,
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
        availableCategories: Se,
        selectedCategoryId: Ge,
        categoryAddPopVisible: I,
        categoryDeleteVisible: ve,
        deletingCategoryId: Le,
        categoryAddLoading: b,
        categoryRemoveLoading: H,
        onRemoveCategory: (l) => r.requestRemoveCategory(l),
        onAddCategoryConfirm: Fe,
        onSelectCategory: (l) => r.setSelectedCategoryId(l),
        onToggleAddPop: x,
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
        loading: h,
        onConfirm: () => t(),
        onClose: () => r.cancelDelete()
      }
    )
  ] });
}
export {
  Si as default
};
