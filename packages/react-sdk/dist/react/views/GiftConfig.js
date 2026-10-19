import { jsx as n, jsxs as l, Fragment as X } from "react/jsx-runtime";
import { useRef as ee, useState as v, useEffect as Q, useSyncExternalStore as Pe } from "react";
import { HelpCircleIcon as se, EditIcon as de, FileCopyIcon as we, SearchIcon as Be, AdjustmentIcon as Ve, AddIcon as ge } from "tdesign-icons-react";
import { useNavigate as De } from "react-router-dom";
import { Dialog as S, Input as Y, Tooltip as re, Button as I, InputNumber as pe, Textarea as Ye, Select as me, Card as Xe } from "tdesign-react";
import { useUIKit as H, i18next as ue } from "@tencentcloud/uikit-base-component-react";
import { A as Ne, F as He } from "../../chunks/ActionButtons.Cfkno1zE.js";
import { M as m, u as We, a as Z } from "../../chunks/useAsyncAction.Cvl9CySV.js";
/* empty css                                */
import { c as ze, a as le, D as j, I as i, g as Te } from "../../chunks/shared-state.CEzqGWS1.js";
import { H as b, g, I as N, z as T, F as q, ad as $e, b as qe, a as K, aN as Ke, aW as je, L as Je, K as Qe, be as fe, J as he } from "../../chunks/main-layout.DlXjtEAo.js";
import { g as Ze } from "../../chunks/PreviewUrlController.B1iCtmJA.js";
import { F as Ce, a as C } from "../../chunks/FormField.D0eRD3uO.js";
import { I as Ee } from "../../chunks/ImageUpload.DfCCn0X6.js";
import { d as ei, b as ii } from "../../chunks/image-upload-resolve.Bzo6gUma.js";
import { g as ni } from "../../chunks/columns.HXE6RyYV.js";
import { b as ti } from "../../chunks/useT.BCvyIXv0.js";
import { S as Ie } from "../../chunks/SlotRenderer.C_MQN-Nv.js";
const R = 0, B = 2147483647, V = 0, D = 99, _e = {
  id: "",
  name: "",
  iconUrl: "",
  price: 0,
  animationUrl: "",
  level: "",
  description: "",
  extensionInfo: "",
  enabled: !0
}, ri = ze("GiftFormDialog");
function li({
  visible: c,
  isEdit: p,
  editingId: s,
  formData: e,
  uploadEnabled: d,
  onFormDataChange: r,
  onSubmitGift: u,
  onClose: h
}) {
  const { t } = H();
  le().components?.giftConfig;
  const E = ee(null), A = ee(null), [x, L] = v(!1), [W, y] = v(!1), [z, F] = v(!1), [M, f] = v(!1), _ = () => {
    E.current?.reset(), A.current?.reset(), L(!1), y(!1);
  }, U = () => {
    _(), h();
  }, [k, P] = v(!1), ie = async () => {
    if (!e.id.trim()) {
      m.error(t(i.ENTER_GIFT_ID));
      return;
    }
    if (g(e.id) > b) {
      m.error(t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: b }));
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
    if (e.level && !isNaN(a) && (a < V || a > D)) {
      m.error(t(i.GIFT_LEVEL_RANGE, { min: V, max: D }));
      return;
    }
    if (e.price < R || e.price > B) {
      m.error(t(i.GIFT_PRICE_RANGE, { min: R, max: B }));
      return;
    }
    const O = E.current?.isUrlInputMode ?? !0, w = O && (E.current?.urlInputValue?.trim?.() || "");
    if (!x && !e.iconUrl.trim() && !w) {
      O && E.current?.setUrlError(t(i.ENTER_THUMBNAIL_URL)), m.error(t(i.UPLOAD_THUMBNAIL_OR_ENTER_URL));
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
    P(!0);
    try {
      const [G, J] = await ei([
        {
          handle: E.current,
          hasPendingFile: x,
          fallbackUrl: e.iconUrl,
          label: t(i.THUMBNAIL)
        },
        {
          handle: A.current,
          hasPendingFile: W,
          fallbackUrl: e.animationUrl,
          label: t(i.GIFT_MATERIAL)
        }
      ]), ne = { ...e, iconUrl: G, animationUrl: J };
      r(ne);
      const te = $e(e, G, J);
      await u(te);
    } catch (G) {
      ri.error("GiftFormDialog", `Image upload failed: ${G?.message || t(i.UNKNOWN_HOST)}`, G), m.error(ii(G, t(i.THUMBNAIL)));
    } finally {
      P(!1);
    }
  };
  return /* @__PURE__ */ n(
    S,
    {
      destroyOnClose: !0,
      visible: c,
      header: t(p ? i.EDIT_GIFT : i.CREATE_GIFT),
      onClose: U,
      width: j.GIFT_FORM,
      placement: "center",
      className: "gift-modal",
      footer: /* @__PURE__ */ l(X, { children: [
        /* @__PURE__ */ n(I, { shape: "round", variant: "outline", onClick: U, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(
          I,
          {
            shape: "round",
            theme: "primary",
            onClick: ie,
            disabled: k || !p && !e.id.trim() || !e.name.trim() || E.current?.isValidating || A.current?.isValidating || z || M,
            children: t(k ? p ? i.SAVING : i.CREATING : p ? i.SAVE : i.CREATE)
          }
        )
      ] }),
      children: /* @__PURE__ */ l(Ce, { labelWidth: Te(110), children: [
        !p && /* @__PURE__ */ n(C, { label: t(i.GIFT_ID), requiredMark: !0, children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ l("div", { style: { display: "flex", gap: "8px", alignItems: "flex-start" }, children: [
            /* @__PURE__ */ n(
              Y,
              {
                value: e.id,
                onChange: (a) => r({ ...e, id: String(a) }),
                placeholder: t(i.ENTER_GIFT_ID),
                status: g(e.id) > b ? "error" : "default",
                suffix: /* @__PURE__ */ l("span", { className: `input-suffix-count${g(e.id) > b ? " byte-overflow" : ""}`, children: [
                  g(e.id),
                  "/",
                  b
                ] }),
                style: { flex: 1 }
              }
            ),
            /* @__PURE__ */ n(re, { content: t(i.RANDOM_GENERATE_ID), children: /* @__PURE__ */ n(
              I,
              {
                variant: "text",
                shape: "square",
                onClick: () => {
                  const a = "0123456789abcdefghijklmnopqrstuvwxyz";
                  let O = "";
                  for (let w = 0; w < 10; w++)
                    O += a[Math.floor(Math.random() * 36)];
                  r({ ...e, id: O });
                },
                children: "🎲"
              }
            ) })
          ] }),
          g(e.id) > b && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.GIFT_ID), max: b }) })
        ] }) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_PRICE), requiredMark: !0, children: /* @__PURE__ */ n(
          pe,
          {
            value: e.price,
            onChange: (a) => r({ ...e, price: Number(a) || R }),
            min: R,
            max: B,
            decimalPlaces: 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: e.price < R || e.price > B ? t(i.GIFT_PRICE_RANGE, { min: R, max: B }) : "",
              status: e.price < R || e.price > B ? "error" : "default"
            },
            style: { width: "100%" },
            placeholder: t(i.ENTER_GIFT_PRICE)
          }
        ) }),
        /* @__PURE__ */ n(C, { label: t(i.GIFT_LEVEL), children: /* @__PURE__ */ n(
          pe,
          {
            value: e.level ? parseInt(e.level) : void 0,
            onChange: (a) => {
              if (a == null) {
                r({ ...e, level: "" });
                return;
              }
              r({ ...e, level: String(a) });
            },
            min: e.level ? V : void 0,
            max: e.level ? D : void 0,
            allowInputOverLimit: !0,
            inputProps: {
              tips: (() => {
                const a = parseInt(e.level);
                return !isNaN(a) && (a < V || a > D) ? t(i.GIFT_LEVEL_RANGE, { min: V, max: D }) : "";
              })(),
              status: (() => {
                const a = parseInt(e.level);
                return !isNaN(a) && (a < V || a > D) ? "error" : "default";
              })()
            },
            style: { width: "100%" },
            placeholder: t(i.ENTER_GIFT_LEVEL)
          }
        ) }),
        /* @__PURE__ */ n(C, { label: /* @__PURE__ */ l("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
          t(i.THUMBNAIL),
          !d && /* @__PURE__ */ n(re, { placement: "top", content: /* @__PURE__ */ l("span", { children: [
            t(i.UPLOAD_NOT_CONFIGURED_HINT),
            /* @__PURE__ */ n("a", { href: "https://cloud.tencent.com/document/product/647/123831#159bb20a-d83d-4fde-a37b-1ff99632ee2c", target: "_blank", rel: "noopener noreferrer", style: { color: "#6ea1ff", textDecoration: "underline" }, children: t(i.VIEW_DETAILS) })
          ] }), children: /* @__PURE__ */ n(se, { size: "14px", style: { marginLeft: "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } }) })
        ] }), requiredMark: !0, children: /* @__PURE__ */ n(
          Ee,
          {
            ref: E,
            value: e.iconUrl,
            onChange: (a) => {
              r({ ...e, iconUrl: a }), L(!1);
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
            onFileReady: (a) => L(!!a),
            onUrlErrorChange: F
          }
        ) }),
        /* @__PURE__ */ n(C, { label: /* @__PURE__ */ l("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
          t(i.GIFT_MATERIAL),
          !d && /* @__PURE__ */ n(re, { placement: "top", content: /* @__PURE__ */ l("span", { children: [
            t(i.UPLOAD_NOT_CONFIGURED_HINT),
            /* @__PURE__ */ n("a", { href: "https://cloud.tencent.com/document/product/647/123831#159bb20a-d83d-4fde-a37b-1ff99632ee2c", target: "_blank", rel: "noopener noreferrer", style: { color: "#6ea1ff", textDecoration: "underline" }, children: t(i.VIEW_DETAILS) })
          ] }), children: /* @__PURE__ */ n(se, { size: "14px", style: { marginLeft: "4px", cursor: "pointer", color: "rgba(0,0,0,0.4)" } }) })
        ] }), children: /* @__PURE__ */ n(
          Ee,
          {
            ref: A,
            value: e.animationUrl,
            onChange: (a) => {
              r({ ...e, animationUrl: a }), y(!1);
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
            onFileReady: (a) => y(!!a),
            onUrlErrorChange: f
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
                status: g(e.extensionInfo) > q ? "error" : "default"
              }
            ),
            /* @__PURE__ */ l("span", { className: `textarea-suffix-count${g(e.extensionInfo) > q ? " byte-overflow" : ""}`, children: [
              g(e.extensionInfo),
              "/",
              q
            ] })
          ] }),
          g(e.extensionInfo) > q && /* @__PURE__ */ n("div", { className: "form-field__error-tip", children: t(i.MAX_BYTES, { field: t(i.CUSTOM_EXTENSION_INFO), max: q }) })
        ] }) })
      ] })
    },
    `gift-edit-${s}`
  );
}
function ai({
  visible: c,
  editingId: p,
  giftLangConfig: s,
  onClose: e,
  onEditLang: d,
  onClearLang: r
}) {
  const { t: u } = H();
  return /* @__PURE__ */ n(
    S,
    {
      visible: c,
      header: u(i.GIFT_MULTILINGUAL_CONFIG),
      onClose: e,
      width: j.GIFT_LANG_CONFIG,
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
          /* @__PURE__ */ n("tbody", { children: qe.map((h) => {
            const t = s[h], E = K[h];
            return /* @__PURE__ */ l("tr", { children: [
              /* @__PURE__ */ n("td", { children: u(E.label) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-name", children: t.name || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: u(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { className: "gift-lang-table-cell-desc", children: t.description || /* @__PURE__ */ n("span", { className: "gift-lang-table-empty", children: u(i.NOT_CONFIGURED) }) }),
              /* @__PURE__ */ n("td", { children: /* @__PURE__ */ n(
                Ne,
                {
                  actions: [
                    {
                      key: "edit",
                      label: u(i.EDIT),
                      onClick: () => p && d(p, h)
                    },
                    {
                      key: "clear",
                      label: u(i.CLEAR),
                      danger: !0,
                      disabled: !t.name && !t.description,
                      onClick: () => p && r(p, h)
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
function oi({
  visible: c,
  editingGiftForLang: p,
  editingLang: s,
  langEditForm: e,
  saving: d,
  onFormChange: r,
  onSave: u,
  onClose: h
}) {
  const { t } = H();
  return /* @__PURE__ */ n(
    S,
    {
      destroyOnClose: !0,
      visible: c && !!s,
      header: s ? t(i.EDIT_GIFT_LANGUAGE_INFO, { lang: t(K[s].label) }) : "",
      onClose: h,
      width: j.GIFT_EDIT,
      className: "gift-lang-edit-modal",
      footer: /* @__PURE__ */ l(X, { children: [
        /* @__PURE__ */ n(I, { shape: "round", variant: "outline", disabled: d, onClick: h, children: t(i.CANCEL) }),
        /* @__PURE__ */ n(I, { shape: "round", theme: "primary", loading: d, onClick: u, children: t(i.SAVE) })
      ] }),
      children: /* @__PURE__ */ l(Ce, { labelWidth: Te(110), children: [
        /* @__PURE__ */ n(C, { label: t(i.GIFT_NAME), children: /* @__PURE__ */ l("div", { className: "form-field__input-wrapper", children: [
          /* @__PURE__ */ n(
            Y,
            {
              value: e.name,
              onChange: (E) => {
                r({ ...e, name: String(E) });
              },
              placeholder: s ? t(i.ENTER_LANGUAGE_GIFT_NAME, { lang: t(K[s].label) }) : "",
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
              placeholder: s ? t(i.ENTER_LANGUAGE_GIFT_DESCRIPTION, { lang: t(K[s].label) }) : "",
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
    `lang-edit-${p}-${s}`
  );
}
const { Option: ci } = me;
function si({
  visible: c,
  editingCategoryGift: p,
  giftCategoryIds: s,
  allCategories: e,
  availableCategories: d,
  selectedCategoryId: r,
  categoryAddPopVisible: u,
  categoryDeleteVisible: h,
  deletingCategoryId: t,
  categoryAddLoading: E,
  categoryRemoveLoading: A,
  onRemoveCategory: x,
  onAddCategoryConfirm: L,
  onSelectCategory: W,
  onToggleAddPop: y,
  onConfirmRemoveCategory: z,
  onClose: F,
  onCloseDeleteDialog: M
}) {
  const { t: f } = H();
  return /* @__PURE__ */ l(X, { children: [
    /* @__PURE__ */ n(
      S,
      {
        visible: c && !!p,
        header: f(i.EDIT_GIFT_CATEGORY),
        onClose: F,
        width: j.GIFT_EDIT,
        className: "gift-category-edit-modal",
        footer: /* @__PURE__ */ n(I, { shape: "round", theme: "primary", onClick: F, children: f(i.CLOSE) }),
        children: /* @__PURE__ */ l("div", { className: "gift-category-edit-tags", children: [
          s.map((_) => {
            const k = e.find((P) => String(P.id) === String(_))?.name || _;
            return /* @__PURE__ */ l("span", { className: "gift-category-edit-tag", children: [
              k,
              /* @__PURE__ */ n("button", { className: "gift-category-edit-tag-close", onClick: () => x(_), children: /* @__PURE__ */ n("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ n("path", { d: "M9 3L3 9M3 3L9 9", stroke: "currentColor", strokeWidth: "1.2", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }, _);
          }),
          /* @__PURE__ */ n("div", { className: "gift-category-add-wrapper", children: /* @__PURE__ */ l(I, { variant: "text", theme: "primary", onClick: () => y(!u), children: [
            "+ ",
            f(i.ADD)
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      S,
      {
        visible: u,
        header: f(i.SELECT_CATEGORY),
        onClose: () => y(!1),
        width: 360,
        placement: "center",
        footer: /* @__PURE__ */ n(I, { shape: "round", theme: "primary", disabled: !r, loading: E, onClick: L, children: f(i.CONFIRM) }),
        children: /* @__PURE__ */ l("div", { className: "category-select-list", children: [
          /* @__PURE__ */ n(
            me,
            {
              value: r,
              onChange: (_) => W(String(_)),
              placeholder: f(i.SELECT_CATEGORY_LOWERCASE),
              style: { width: "100%" },
              children: d.map((_) => /* @__PURE__ */ n(ci, { value: _.id, label: _.name }, _.id))
            }
          ),
          d.length === 0 && /* @__PURE__ */ n("div", { className: "category-select-empty", children: f(i.NO_AVAILABLE_CATEGORIES) })
        ] })
      }
    ),
    /* @__PURE__ */ n(
      S,
      {
        visible: h,
        header: f(i.CONFIRM_ACTION_TITLE, { action: f(i.GIFT_CATEGORY_REMOVE_OPERATION) }),
        onClose: M,
        width: 400,
        placement: "center",
        footer: /* @__PURE__ */ l(X, { children: [
          /* @__PURE__ */ n(I, { shape: "round", variant: "outline", disabled: A, onClick: M, children: f(i.CANCEL) }),
          /* @__PURE__ */ n(I, { shape: "round", theme: "primary", loading: A, onClick: z, children: f(i.CONFIRM) })
        ] }),
        children: /* @__PURE__ */ n("p", { children: f(i.REMOVE_CATEGORY_DESCRIPTION) })
      }
    )
  ] });
}
function di({
  visible: c,
  deletingItem: p,
  loading: s,
  onConfirm: e,
  onClose: d
}) {
  const { t: r } = H();
  return /* @__PURE__ */ n(
    S,
    {
      visible: c && !!p,
      header: r(i.CONFIRM_ACTION_TITLE, { action: r(i.GIFT_DELETE_OPERATION) }),
      onClose: d,
      width: j.GIFT_DELETE,
      footer: /* @__PURE__ */ l(X, { children: [
        /* @__PURE__ */ n(I, { shape: "round", variant: "outline", disabled: s, onClick: d, children: r(i.CANCEL) }),
        /* @__PURE__ */ n(I, { shape: "round", theme: "primary", loading: s, onClick: e, children: r(i.DELETE) })
      ] }),
      children: /* @__PURE__ */ n("p", { children: r(i.CANNOT_UNDO_AFTER_DELETE) })
    }
  );
}
function gi(c, p, s) {
  switch (c) {
    case "id":
      return (e) => /* @__PURE__ */ l("div", { className: "gift-id", children: [
        /* @__PURE__ */ n("span", { className: "gift-id-text", children: e.id || "-" }),
        /* @__PURE__ */ n(
          we,
          {
            className: "copy-icon",
            size: 14,
            onClick: () => s.onCopyId(String(e.id || ""))
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
      return (e) => /* @__PURE__ */ l("div", { className: "gift-category-cell", onClick: () => s.onOpenCategoryEdit(e), children: [
        /* @__PURE__ */ n("span", { children: e.categories?.join(", ") || "-" }),
        /* @__PURE__ */ n(de, { className: "gift-category-edit-icon", size: 14 })
      ] });
    case "languageList":
      return (e) => /* @__PURE__ */ l("div", { className: "gift-lang-tags", children: [
        e.languageList && e.languageList.length > 0 ? e.languageList.map((d) => {
          const r = je(d), u = Je[r], h = u ? K[u] : null;
          return /* @__PURE__ */ n(
            "span",
            {
              className: "gift-lang-tag",
              onClick: () => u && s.onOpenLangEdit(e.id, u),
              children: h ? p(h.label) : r
            },
            r
          );
        }) : /* @__PURE__ */ n("span", { className: "gift-lang-empty", children: "-" }),
        /* @__PURE__ */ n(
          de,
          {
            className: "gift-lang-edit-icon",
            size: 14,
            onClick: () => s.onOpenGiftLangConfig(e.id)
          }
        )
      ] });
    case "level":
      return (e) => e.level || "-";
    case "price":
      return (e) => e.price ?? 0;
    case "createdAt":
      return (e) => Ke(e.createdAt);
    case "customer-extra": {
      const e = le().components?.giftConfig;
      return (d) => /* @__PURE__ */ n(Ie, { slot: e?.giftTableExtraColumns, props: { gift: d } });
    }
    case "actions": {
      const e = le().components?.giftConfig;
      return (d) => /* @__PURE__ */ l(X, { children: [
        /* @__PURE__ */ n(
          Ne,
          {
            actions: [
              { key: "edit", label: p(i.EDIT), onClick: () => s.onEdit(d) },
              { key: "delete", label: p(i.DELETE), danger: !0, onClick: () => s.onDelete(d) }
            ]
          }
        ),
        /* @__PURE__ */ n(Ie, { slot: e?.giftRowActions, props: { gift: d } })
      ] });
    }
    default:
      return;
  }
}
function pi() {
  const { t: c } = ti();
  return (p) => ni().map((e) => ({
    ...e,
    title: e.i18nKey ? c(e.i18nKey) : "",
    render: gi(e.key, c, p)
  }));
}
function Si() {
  const { t: c } = H(), p = We(), s = De(), e = pi(), d = ee(null);
  d.current || (d.current = new Qe({
    actions: p,
    t: c,
    toast: m,
    onNavigateToCategoryManagement: () => s("/gift-category")
  }));
  const r = d.current;
  Q(() => {
    r.setOpts({
      actions: p,
      t: c,
      onNavigateToCategoryManagement: () => s("/gift-category")
    });
  }, [r, p, c, s]);
  const u = Pe(r.subscribe, r.getState, r.getState);
  Q(() => (r.init(), () => r.dispose()), []), Q(() => {
    const o = () => r.onLanguageChanged();
    return ue.on("languageChanged", o), () => {
      ue.off("languageChanged", o);
    };
  }, [r]);
  const { loading: h, execute: t } = Z({
    toast: { action: i.LABEL_DELETED, entity: i.GIFT },
    operationName: c(i.GIFT_DELETE_OPERATION),
    action: async () => {
      await r.confirmDelete();
    }
  }), { loading: E, execute: A } = Z({
    toast: { action: i.GIFT_MULTILINGUAL_SAVE },
    operationName: c(i.GIFT_MULTILINGUAL_SAVE),
    action: async () => {
      await r.saveLangEdit();
    }
  }), { loading: x, execute: L } = Z({
    toast: { action: i.GIFT_CATEGORY_ADD_OPERATION },
    operationName: c(i.GIFT_CATEGORY_ADD_OPERATION),
    action: async () => {
      await r.confirmAddCategory();
    },
    onSuccess: () => {
      U(!1);
    }
  }), { loading: W, execute: y } = Z({
    toast: { action: i.GIFT_CATEGORY_REMOVE_OPERATION },
    operationName: c(i.GIFT_CATEGORY_REMOVE_OPERATION),
    action: async () => {
      await r.confirmRemoveCategory();
    }
  }), [z, F] = v(!1);
  Q(() => {
    Ze().then(F);
  }, []);
  const [M, f] = v(_e), [_, U] = v(!1), k = ee(null), {
    loading: P,
    displayList: ie,
    searchInput: a,
    dialogVisible: O,
    isEdit: w,
    editingId: G,
    langConfigVisible: J,
    giftLangConfig: ne,
    langEditVisible: te,
    editingLang: Ae,
    editingGiftForLang: Ge,
    langEditForm: ye,
    categoryEditVisible: ve,
    editingCategoryGift: Le,
    allCategories: ae,
    giftCategoryIds: oe,
    selectedCategoryId: Oe,
    categoryDeleteVisible: be,
    deletingCategoryId: Re,
    deleteDialogVisible: Se,
    deletingItem: xe
  } = u, Fe = ae.filter((o) => !oe.includes(o.id)), ce = () => {
    f(_e), r.openCreateDialog();
  }, Me = (o) => {
    f({
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
  }, Ue = async () => {
    await L();
  }, ke = e({
    onEdit: Me,
    onDelete: (o) => r.requestDelete(o),
    onOpenCategoryEdit: (o) => r.openCategoryEditDialog(o),
    onOpenLangEdit: (o, $) => {
      r.openLangEditDialog(o, $);
    },
    onOpenGiftLangConfig: (o) => {
      r.openGiftLangConfigDialog(o);
    },
    onCopyId: (o) => r.copyGiftId(o)
  });
  return /* @__PURE__ */ l("div", { className: "gift-config-container", children: [
    /* @__PURE__ */ l("div", { className: "gift-config-page-header", children: [
      /* @__PURE__ */ n("h1", { className: "gift-config-title", children: c(i.GIFT_MANAGEMENT) }),
      /* @__PURE__ */ l("div", { className: "gift-config-actions", children: [
        /* @__PURE__ */ n(
          Y,
          {
            value: a,
            onChange: (o) => r.setSearchInput(String(o ?? "")),
            onEnter: () => {
              if (r.isSearchInputTooLong()) {
                m.error(c(i.INPUT_TOO_LONG));
                return;
              }
              r.search();
            },
            clearable: !0,
            onClear: () => r.clearSearch(),
            placeholder: c(i.SEARCH_GIFT_PLACEHOLDER),
            suffixIcon: /* @__PURE__ */ n(Be, { size: 16 }),
            className: "gift-config-search-input",
            status: fe(a, he) ? "error" : "default",
            tips: fe(a, he) ? c(i.INPUT_EXCEEDS_LENGTH_LIMIT) : ""
          }
        ),
        /* @__PURE__ */ n(I, { shape: "round", theme: "primary", onClick: () => r.goToCategoryManagement(), variant: "outline", icon: /* @__PURE__ */ n(Ve, {}), children: c(i.CATEGORY_MANAGEMENT) }),
        /* @__PURE__ */ l(I, { shape: "round", onClick: ce, theme: "primary", children: [
          "＋ ",
          c(i.ADD_GIFT)
        ] })
      ] })
    ] }),
    /* @__PURE__ */ n(Xe, { className: "gift-list-card", ref: k, children: /* @__PURE__ */ n(
      He,
      {
        columns: ke,
        data: ie,
        rowKey: "id",
        loading: P,
        tableClassName: "gift-table",
        bodyClassName: "gift-list-content",
        rowClassName: "gift-row",
        loadingNode: /* @__PURE__ */ l("div", { className: "gift-loading-container", children: [
          /* @__PURE__ */ n("div", { className: "gift-loading-spinner" }),
          /* @__PURE__ */ n("span", { className: "gift-loading-text", children: c(i.LOADING) })
        ] }),
        emptyNode: a ? /* @__PURE__ */ n("div", { className: "gift-empty-container", children: /* @__PURE__ */ n("span", { className: "gift-empty-text", children: c(i.NO_GIFT_FOUND, { keyword: a }) }) }) : /* @__PURE__ */ l("div", { className: "gift-empty-container", children: [
          /* @__PURE__ */ n("div", { className: "empty-guide-icon", children: /* @__PURE__ */ n(ge, { size: "40px" }) }),
          /* @__PURE__ */ n("p", { className: "empty-guide-title", children: c(i.EMPTY_GIFT_TITLE) }),
          /* @__PURE__ */ n("p", { className: "empty-guide-desc", children: c(i.EMPTY_GIFT_DESC) }),
          /* @__PURE__ */ n("div", { className: "empty-guide-actions", children: /* @__PURE__ */ n(I, { theme: "primary", shape: "round", className: "empty-guide-cta", icon: /* @__PURE__ */ n(ge, {}), onClick: ce, children: c(i.ADD_GIFT) }) })
        ] })
      }
    ) }),
    /* @__PURE__ */ n(
      li,
      {
        visible: O,
        isEdit: w,
        editingId: G,
        formData: M,
        uploadEnabled: z,
        onFormDataChange: f,
        onSubmitGift: async (o) => {
          await r.submitGift(o);
        },
        onClose: () => r.closeDialog()
      }
    ),
    /* @__PURE__ */ n(
      ai,
      {
        visible: J,
        editingId: G,
        giftLangConfig: ne,
        onClose: () => r.closeGiftLangConfigDialog(),
        onEditLang: (o, $) => {
          r.openLangEditDialog(o, $);
        },
        onClearLang: (o, $) => {
          r.clearLang(o, $);
        }
      }
    ),
    /* @__PURE__ */ n(
      oi,
      {
        visible: te,
        editingGiftForLang: Ge,
        editingLang: Ae,
        langEditForm: ye,
        saving: E,
        onFormChange: (o) => r.setLangEditForm(o),
        onSave: () => A(),
        onClose: () => r.closeLangEditDialog()
      }
    ),
    /* @__PURE__ */ n(
      si,
      {
        visible: ve,
        editingCategoryGift: Le,
        giftCategoryIds: oe,
        allCategories: ae,
        availableCategories: Fe,
        selectedCategoryId: Oe,
        categoryAddPopVisible: _,
        categoryDeleteVisible: be,
        deletingCategoryId: Re,
        categoryAddLoading: x,
        categoryRemoveLoading: W,
        onRemoveCategory: (o) => r.requestRemoveCategory(o),
        onAddCategoryConfirm: Ue,
        onSelectCategory: (o) => r.setSelectedCategoryId(o),
        onToggleAddPop: U,
        onConfirmRemoveCategory: () => y(),
        onClose: () => r.closeCategoryEditDialog(),
        onCloseDeleteDialog: () => r.cancelRemoveCategory()
      }
    ),
    /* @__PURE__ */ n(
      di,
      {
        visible: Se,
        deletingItem: xe,
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
