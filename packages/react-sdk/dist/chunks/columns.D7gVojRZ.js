import { I as e } from "./layout.DpmHfGro.js";
function r(i) {
  const t = [
    { key: "liveId", i18nKey: e.LIVE_ID, minWidth: 80, maxWidth: 250, fitContent: !0, flexible: !0 },
    { key: "liveName", i18nKey: e.LIVE_TITLE, minWidth: 120, maxWidth: 400, fitContent: !0, flexible: !0 },
    { key: "coverUrl", i18nKey: e.COVER_IMAGE, width: 150, flexible: !0 },
    { key: "anchor", i18nKey: e.ANCHOR_ID, minWidth: 80, maxWidth: 250, fitContent: !0, flexible: !0 },
    { key: "createdAt", i18nKey: e.CREATE_TIME, width: 200 }
  ];
  return i.hasExtraColumn && t.push({ key: "customer-extra", width: 160 }), t.push({ key: "actions", i18nKey: e.ACTIONS, maxWidth: 320, fitContent: !0 }), t;
}
export {
  r as g
};
