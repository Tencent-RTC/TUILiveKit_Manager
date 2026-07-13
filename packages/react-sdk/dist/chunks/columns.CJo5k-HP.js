import { g as i, I as e } from "./layout.DpmHfGro.js";
function r() {
  const t = i().components?.giftConfig;
  return [
    // id / name / description / categories 一组 flexible 列，容器收窄时按 raw 权重等比
    // 压缩，让 description 等长内容能被压到内容宽度以下、触发 .col-desc 上的
    // word-break: break-all 折行（与 demo 行为一致）。
    //
    // 折行能力本身依赖两件事都成立：
    // 1) FixedHeaderTable 不能给 flexible 列内联 white-space: nowrap（会覆盖 class）；
    // 2) .col-id 在共享 CSS 里也写 word-break: break-all。
    // 任何一个缺失，id 列就会变成单行溢出而不是多行折行。
    { key: "id", i18nKey: e.GIFT_ID, fitContent: !0, flexible: !0, minWidth: 64 },
    { key: "iconUrl", i18nKey: e.THUMBNAIL, fitContent: !0, flexible: !0 },
    { key: "name", i18nKey: e.NAME, fitContent: !0, flexible: !0, minWidth: 80, maxWidth: 180 },
    { key: "description", i18nKey: e.DESCRIPTION, fitContent: !0, flexible: !0, minWidth: 80, maxWidth: 400 },
    { key: "categories", i18nKey: e.CATEGORY, fitContent: !0, flexible: !0, minWidth: 80, maxWidth: 220 },
    { key: "languageList", i18nKey: e.MULTILINGUAL_CONFIG, fitContent: !0, flexible: !0 },
    { key: "level", i18nKey: e.LEVEL, fitContent: !0, flexible: !0, minWidth: 64 },
    { key: "price", i18nKey: e.PRICE, fitContent: !0, flexible: !0, minWidth: 64 },
    { key: "createdAt", i18nKey: e.CREATE_TIME, width: 180 },
    ...t?.giftTableExtraColumns ? [{ key: "customer-extra", width: 160 }] : [],
    { key: "actions", i18nKey: e.ACTIONS, fitContent: !0, minWidth: 120, maxWidth: 320 }
  ];
}
export {
  r as g
};
