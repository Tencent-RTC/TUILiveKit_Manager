import { A as G, L as N, c as B, d as y, e as x, g as V, a as k, b as Y, i as w, f as K, l as X, m as H, r as W, h as $, j, k as q, n as z, o as Z, p as J, s as Q, q as aa, t as ea, u as sa, v as ta } from "../chunks/logger.rNWqpx5t.js";
import { a0 as ia, a1 as oa, a2 as na, a3 as la, _ as ga, I as ua, a4 as da, L as ca, a5 as La, a6 as Ea, a7 as Aa, N as ba, a8 as _a, T as ma, a9 as fa, b as pa, a as Ca, c as Ta, aa as va, ab as Ia, d as Sa, ac as Ma, e as Ra, $ as Da, ad as ha, ae as Oa, af as Ua, f as Pa, g as Fa, ag as Ga, h as Na, ah as Ba, i as ya, ai as xa, j as Va, aj as ka, k as Ya, ak as wa, l as Ka, m as Xa, al as Ha, am as Wa, n as $a, o as ja, p as qa, q as za, r as Za, s as Ja, t as Qa, u as ae, v as ee, w as se, x as te, y as re, an as ie, z as oe, A as ne, B as le, C as ge, D as ue, E as de, F as ce, G as Le, H as Ee, J as Ae, ao as be, ap as _e, K as me, M as fe, O as pe, P as Ce, R as Te, aq as ve, ar as Ie, as as Se, S as Me, U as Re, at as De, V as he, W as Oe, X as Ue, au as Pe, av as Fe, Y as Ge, Z as Ne } from "../chunks/layout.C1lzYH2h.js";
import { s as i, p as n, d as l, t as g, f as r, e as u, h as d, i as c, m as L, u as E } from "../chunks/main-layout.QTEHh38b.js";
import { A as ye, B as xe, C as Ve, j as ke, D as Ye, k as we, l as Ke, n as Xe, o as He, q as We, E as $e, r as je, v as qe, w as ze, x as Ze, y as Je, z as Qe, G as as, F as es, H as ss, I as ts, L as rs, b as is, a as os, J as ns, K as ls, M as gs, N as us, O as ds, P as cs, Q as Ls, R as Es, S as As, T as bs, U as _s, V as ms, W as fs, X as ps, Y as Cs, Z as Ts, _ as vs, $ as Is, a0 as Ss, a1 as Ms, a2 as Rs, a3 as Ds, a4 as hs, a5 as Os, a6 as Us, a7 as Ps, a8 as Fs, a9 as Gs, aa as Ns, ab as Bs, ac as ys, ad as xs, ae as Vs, af as ks, ag as Ys, ah as ws, ai as Ks, aj as Xs, ak as Hs, al as Ws, am as $s, an as js, ao as qs, ap as zs, aq as Zs, ar as Js, as as Qs, at, au as et, av as st, aw as tt, ax as rt, ay as it, az as ot, aA as nt, aB as lt, aC as gt, aD as ut, aE as dt, aF as ct, aG as Lt, aH as Et, aI as At, aJ as bt, aK as _t, aL as mt, aM as ft, aN as pt, aO as Ct, aP as Tt, aQ as vt, aR as It, aS as St, aT as Mt, aU as Rt, g as Dt, aV as ht, aW as Ot, c as Ut, aX as Pt, aY as Ft, aZ as Gt, a_ as Nt, a$ as Bt, b0 as yt, b1 as xt, b2 as Vt, b3 as kt, b4 as Yt, b5 as wt, b6 as Kt, b7 as Xt, b8 as Ht, b9 as Wt, ba as $t, bb as jt, bc as qt, bd as zt, be as Zt, bf as Jt, bg as Qt, bh as ar, bi as er, bj as sr, bk as tr, bl as rr, bm as ir, bn as or, bo as nr, bp as lr, bq as gr, br as ur, bs as dr, bt as cr, bu as Lr, bv as Er, bw as Ar, bx as br, by as _r, bz as mr, bA as fr, bB as pr, bC as Cr, bD as Tr, bE as vr, bF as Ir, bG as Sr, bH as Mr, bI as Rr, bJ as Dr, bK as hr, bL as Or, bM as Ur, bN as Pr, bO as Fr, bP as Gr, bQ as Nr, bR as Br, bS as yr, bT as xr, bU as Vr, bV as kr, bW as Yr, bX as wr, bY as Kr, bZ as Xr, b_ as Hr, b$ as Wr, c0 as $r, c1 as jr, c2 as qr } from "../chunks/main-layout.QTEHh38b.js";
import { s as A } from "../chunks/adaptive-tags-runtime.BIBVwV0n.js";
import { A as Zr, V as Jr, c as Qr, a as ai, b as ei } from "../chunks/adaptive-tags-runtime.BIBVwV0n.js";
import { P as ti, g as ri, i as ii, v as oi, a as ni } from "../chunks/PreviewUrlController.C8NgpJv8.js";
import { I as gi, U as ui, c as di, a as ci, g as Li, b as Ei, d as Ai, e as bi, r as _i, f as mi, u as fi, v as pi, h as Ci, i as Ti, j as vi, k as Ii, l as Si } from "../chunks/upload.BK_WDSwt.js";
import { B as Ri, E as Di, b as hi, g as Oi, p as Ui } from "../chunks/columns.DCEilkva.js";
import { g as Fi } from "../chunks/columns.C2TAPr0y.js";
import { b as Ni, C as Bi, a as yi, M as xi, g as Vi } from "../chunks/constants.7GHep651.js";
import { g as Yi } from "../chunks/columns.BYpIbkBz.js";
async function m(a) {
  return { liveInfo: await c(a) };
}
function f(a) {
  return !a || !a.stats ? { stats: null } : { stats: a.stats };
}
async function p(a) {
  const { liveId: e, mute: s } = a;
  s ? await L(e, ["All_Member"], 0) : await E(e, ["All_Member"]);
}
async function C(a) {
  await d(a);
}
function T(a) {
  return a ? !a.endedAt : !1;
}
function v(a, e) {
  return e ? e.anchor.userId === a : !1;
}
function I(a) {
  if (!a) return "-";
  const e = a.stats?.duration || 0, s = Math.floor(e / 3600), t = Math.floor(e % 3600 / 60);
  return s > 0 ? `${s}小时${t}分钟` : t > 0 ? `${t}分钟` : "不到1分钟";
}
function o(a) {
  return a >= 1e6 ? `${(a / 1e6).toFixed(1)}M` : a >= 1e3 ? `${(a / 1e3).toFixed(1)}K` : String(a);
}
function S(a) {
  return o(a);
}
function M(a) {
  return o(a);
}
function R(a) {
  return a ? a.endedAt && a.stats?.duration ? a.stats.duration : a.createdAt ? Math.floor(Date.now() / 1e3) - a.createdAt : 0 : 0;
}
class D {
  constructor(e, s = 5e3) {
    this.subscription = null, this.callback = e, this.intervalMs = s, this.poll$ = i(), this.stop$ = i();
  }
  /**
   * 启动轮询
   * - 立即执行一次
   * - 之后每隔 intervalMs 执行
   * - 若回调是 async，switchMap 在前一次未完成时自动取消
   */
  start() {
    this.subscription || (this.subscription = n(
      // timer(0, interval): 立即触发 + 周期性
      u(0, this.intervalMs),
      // switchMap: 若回调未完成时新一轮 timer 触发，自动取消旧请求
      A(() => {
        try {
          const e = this.callback();
          return e instanceof Promise ? r(e) : r(Promise.resolve(e));
        } catch {
          return r(Promise.resolve());
        }
      }),
      // stop() 立即终止
      g(this.stop$),
      l()
    ));
  }
  /**
   * 停止轮询
   */
  stop() {
    this.subscription && (this.stop$.next(), this.subscription.dispose?.(), this.subscription = null);
  }
  /**
   * 更新轮询间隔（立即生效）
   */
  updateInterval(e) {
    this.intervalMs = e, this.subscription && (this.stop(), this.start());
  }
  /**
   * 是否正在运行
   */
  isRunning() {
    return this.subscription !== null;
  }
  /**
   * 销毁轮询器
   */
  destroy() {
    this.stop();
  }
}
const h = {
  viewBox: "0 0 24 24",
  path: "M11 6.5L5.5 12L11 17.5M6.75 12H19.75",
  strokeWidth: 2,
  strokeLinecap: "square"
}, O = {
  viewBox: "0 0 24 24",
  path: "M12 11V17M12 7V7.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
  strokeWidth: 2
}, U = {
  viewBox: "0 0 24 24",
  path: "M6 9L12 15L18 9",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
export {
  ye as ANCHOR_ID_MAX_BYTES,
  h as ARROW_LEFT_ICON,
  Zr as AdaptiveTagRuntime,
  G as Aegis,
  xe as BANNED_LIST_PAGE_SIZE,
  Ri as BASIC_EMOJI,
  Ni as CATEGORY_DESC_MAX_BYTES,
  Bi as CATEGORY_ID_MAX_BYTES,
  yi as CATEGORY_NAME_MAX_BYTES,
  U as CHEVRON_DOWN_ICON,
  ia as CORE_DEFAULT_BRAND,
  oa as CORE_DEFAULT_FEATURES,
  na as CORE_DEFAULT_MENUS,
  la as CREDENTIAL_KEYS,
  Ve as CUSTOM_INFO_LIMITS,
  ke as ClientCommonError,
  Ye as DEFAULT_BAN_DURATION,
  we as DEFAULT_MAX_SEAT_COUNT,
  Ke as DEFAULT_MUTE_DURATION,
  Xe as DEFAULT_SEAT_TEMPLATE,
  He as DEFAULT_SORT_OPTIONS,
  ga as DIALOG_WIDTH,
  We as DeviceError,
  Di as EMOJI_BASE_URL,
  $e as ErrorCode,
  je as GIFT_CATEGORIES_CACHE_KEY,
  qe as GIFT_DESC_MAX_BYTES,
  ze as GIFT_EXT_MAX_BYTES,
  Ze as GIFT_ID_MAX_BYTES,
  Je as GIFT_NAME_MAX_BYTES,
  Qe as GIFT_SEARCH_MAX_BYTES,
  as as GiftCategoryController,
  es as GiftConfigController,
  ss as GiftStateManager,
  ua as I18N,
  O as INFO_CIRCLE_ICON,
  gi as ImageUploadResolveError,
  ts as LANDSCAPE_COVER_ASPECT_RATIO,
  rs as LANG_CODE_TO_KEY,
  is as LANG_CONFIG_KEYS,
  os as LANG_MAP,
  ns as LIVE_ID_PREFIX,
  ls as LIVE_LIST_CURSOR_STORAGE_KEY,
  gs as LIVE_LIST_PAGE_SIZE,
  us as LIVE_LIST_PAGE_STORAGE_KEY,
  ds as LIVE_LIST_SEARCH_MAX_BYTES,
  cs as LIVE_SEARCH_MAX_BYTES,
  Ls as LIVE_TITLE_MAX_BYTES,
  da as LOGO_SVG_DATA_URI,
  D as LiveDataPoller,
  Es as LiveError,
  As as LiveListCache,
  bs as LiveListController,
  _s as LiveListPagination,
  ca as LiveManagerError,
  ms as LiveMonitorCore,
  fs as LiveUserError,
  N as Logger,
  xi as MAX_CATEGORY_COUNT,
  La as MENU_ITEM_LABELS,
  Ea as MENU_KEYS,
  Aa as MOCK_VIDEO_POSTER_FALLBACK,
  ps as MODERATION_DEFAULT_MINUTES,
  Cs as MODERATION_PAGE_SIZE,
  Ts as MUTED_LIST_PAGE_SIZE,
  ba as NETWORK_ERROR_CODE,
  vs as ObjectURLManager,
  _a as PAGE_TITLE_KEYS,
  Is as PAGINATION_DEFAULTS,
  Ss as PORTRAIT_COVER_ASPECT_RATIO,
  Ms as PreloadError,
  ti as PreviewUrlController,
  Rs as RestApiError,
  Ds as SEAT_TEMPLATE_OPTIONS,
  hs as SeatPermissionError,
  Os as ServerError,
  ma as TIMEOUT_ERROR_CODE,
  ui as UrlValidationController,
  Jr as ViolationLabelsPoller,
  Us as addLiveAdmin,
  fa as apiError,
  Ps as approveTextModerationItems,
  Fs as banMember,
  pa as batchGetUserProfilePortrait,
  Ca as bindI18nHelpers,
  Gs as buildCreateLiveParams,
  Ns as buildGiftSubmitPayload,
  Bs as buildLiveId,
  ys as buildLiveRowActions,
  xs as buildObsModalState,
  hi as buildPageNumbers,
  Vs as bypassCorrectionKeyword,
  ks as cacheGiftCategories,
  R as calculateDuration,
  Ys as calculateOffset,
  ws as calculatePageAfterDelete,
  Ks as calculatePageRange,
  Xs as calculateTotalPages,
  Hs as canGoToLiveListPage,
  di as canvasToBlob,
  Ta as checkServerConfig,
  Ws as cleanupExpiredModerationLocalDeletions,
  Qr as clearAdaptiveTagCache,
  $s as clearAdminCache,
  va as clearCache,
  Ia as clearCredentials,
  js as collectValidCustomInfo,
  ai as computeAdaptiveTags,
  ei as computeAdaptiveTagsBatch,
  qs as computeModerationStartTime,
  Sa as configureLiveManager,
  zs as configureModerationLocalDeletion,
  Zs as consumeCachedGiftCategories,
  Js as convertGiftCategoriesToCategoryItems,
  Qs as copyText,
  at as createDebounce,
  et as createDefaultCreateLiveFormData,
  st as createDefaultEditLiveFormData,
  tt as createDefaultGiftLangConfig,
  rt as createDragDropHandler,
  Ma as createErrorHandler,
  it as createLiveListCursorMap,
  Ra as createLiveManagerAppConfig,
  B as createLogger,
  ot as createPreviewUrl,
  ci as cropCanvasToBlob,
  nt as customInfoRecordToList,
  lt as dedupeById,
  Da as defaultAvatarUrl,
  ha as defaultCoverUrl,
  Oa as defineCustomerExtension,
  Ua as del,
  gt as detectImageAspectRatio,
  y as disableAutoUpdateUin,
  Pa as enResource,
  x as enableAutoUpdateUin,
  C as endLive,
  ut as exitFullScreen,
  dt as extractFileFromDragEvent,
  f as extractLiveStats,
  ct as fetchBannedList,
  m as fetchLiveDetail,
  Lt as fetchLiveListPage,
  Et as fetchMutedList,
  At as filterDeletedModerationItems,
  bt as filterGiftListByKeyword,
  _t as filterLiveList,
  mt as filterObsRobots,
  ft as filterSelectedIds,
  Fa as findLocalizedValues,
  M as formatGiftCount,
  S as formatLikeCount,
  I as formatLiveDuration,
  pt as formatLiveListTime,
  Ct as formatModerationTime,
  Tt as formatRemainingTime,
  vt as formatTime,
  o as formatViewerCount,
  Ga as get,
  Na as getActiveAppConfig,
  Ba as getActiveBrandConfig,
  It as getActiveDeletedModerationIdCount,
  St as getActiveDeletedModerationIds,
  Mt as getAdminList,
  V as getAegis,
  ya as getApiLanguage,
  xa as getAuthToken,
  Rt as getBannedMemberList,
  Dt as getByteLength,
  Vi as getCategoryColumnLayouts,
  Va as getCoreRouteFeature,
  ht as getCoverAspectRatio,
  ka as getCredentials,
  Li as getCroppedImg,
  Ya as getCurrentApiLanguageCode,
  wa as getCurrentDomain,
  Ka as getCurrentLanguage,
  Xa as getCurrentUserId,
  Ha as getCurrentUserName,
  Wa as getCurrentUserSig,
  k as getDefaultAuthState,
  $a as getDefaultLanguage,
  ja as getDefaultLanguageBySdkAppId,
  qa as getDefaultRoutePath,
  Ot as getDeletedCustomInfoKeys,
  Ei as getEffectiveUploadEnabled,
  za as getErrorCategory,
  Za as getErrorInfo,
  Ja as getErrorLocale,
  Qa as getErrorMessage,
  Ut as getFallbackInitial,
  ae as getFormLabelWidth,
  Fi as getGiftColumnLayouts,
  Pt as getGiftLangConfigFromLanguageList,
  Ft as getGiftLangEditFormFromLanguageList,
  Y as getGlobalLogLevel,
  ee as getHttpClient,
  Gt as getInteractionModerationList,
  Nt as getLangCode,
  Bt as getLangInfo,
  yt as getLangKeyByCode,
  xt as getLangLabel,
  Yi as getLiveListColumnsMeta,
  Vt as getLiveListPageAfterDelete,
  kt as getLiveViolationLabelsBatch,
  se as getMenuKeyFromPath,
  Yt as getMessages,
  Oi as getModerationColumnLayouts,
  wt as getModerationLocalDeletionConfig,
  Kt as getMuteStatus,
  Xt as getMutedMemberList,
  Ht as getObsRobotId,
  Wt as getPageSize,
  te as getRouteTitleKey,
  re as getSavedLanguage,
  ie as getSdkAppId,
  $t as getSeatTemplateOption,
  ri as getSvgaParserIfInited,
  Ai as getUploadConfig,
  bi as getUploadErrorMessage,
  oe as getUserProfilePortrait,
  w as initAegis,
  ne as initHttpClient,
  ii as initSvgaParser,
  jt as isAdminUser,
  K as isAegisInited,
  qt as isAllSelected,
  v as isAnchor,
  zt as isAnchorUser,
  Zt as isAudioSeatTemplate,
  Jt as isBanned,
  Qt as isCachedAdmin,
  le as isClientError,
  ge as isCoreRouteEnabled,
  ar as isCustomInfoKeyMissing,
  er as isExpired,
  sr as isGiftSearchInputTooLong,
  ue as isLeavingLivePage,
  T as isLiveOngoing,
  tr as isLiveSearchInputTooLong,
  de as isLoggedIn,
  rr as isMuted,
  ce as isNetworkError,
  Le as isNetworkRelatedError,
  ir as isObsRobot,
  Ee as isProxyMode,
  Ae as isRestApiError,
  be as isServerConfigured,
  _e as isServerConfiguredMode,
  me as isServerError,
  fe as isSuccess,
  or as isSvgaFile,
  nr as isSvgaUrl,
  pe as isTimeoutError,
  lr as isVideoFile,
  gr as isVideoUrl,
  ur as loadModerationList,
  X as logger,
  Ce as login,
  H as measureAndReport,
  dr as modifyAdmin,
  p as muteAll,
  cr as muteMember,
  Lr as muteUser,
  Er as normalizeGiftSearchKeyword,
  Ar as parseCustomInfo,
  Ui as parseTextWithEmoji,
  Te as performLogout,
  ve as post,
  br as preventDefaultDrag,
  Ie as put,
  _r as readFileAsDataURL,
  mr as recordDeletedModerationIds,
  fr as remapCategoryListByLanguage,
  pr as remapGiftListByLanguage,
  Cr as replacePreviewUrl,
  W as reportAppInit,
  $ as reportBusinessOp,
  j as reportCapability,
  q as reportEvent,
  z as reportFeatureUse,
  Z as reportPageView,
  J as reportTime,
  Se as request,
  Me as resolveAccount,
  Tr as resolveAnchorAvatarUrl,
  vr as resolveAnchorDisplayName,
  _i as resolveImageUploadUrl,
  mi as resolveMultipleImageUploads,
  Ir as resolvePlayerAccount,
  Sr as restoreLiveListPaginationState,
  Mr as revokePreviewUrl,
  Rr as safelyParse,
  Re as saveCredentials,
  Dr as saveLiveListPaginationState,
  hr as searchLiveById,
  Or as sendCustomMessage,
  Ur as sendMessage,
  Pr as sendViolationWarning,
  Fr as sendViolationWarningQuick,
  De as setActiveBrandConfig,
  Q as setAegisUin,
  aa as setAuthStoreAdapter,
  he as setDocumentLanguage,
  Oe as setErrorLocale,
  Ue as setErrorLocaleProvider,
  Gr as setFullScreen,
  ea as setGlobalLogLevel,
  Nr as setMonitorNickname,
  Br as setMuteAll,
  sa as setReportPlatform,
  Pe as setServerConfigured,
  Fe as setUserProfileRole,
  yr as setupObsStreamingForLive,
  xr as sortLiveList,
  Vr as toBoolean,
  kr as toNumber,
  Ge as toggleLanguage,
  Yr as toggleSelectAll,
  wr as toggleSelectOne,
  Kr as truncateToMaxBytes,
  Xr as unbanMember,
  Hr as uniqueIds,
  Wr as unmuteMember,
  $r as unmuteUser,
  ta as updateUinFromSdkAppId,
  fi as uploadImage,
  jr as validateCustomInfo,
  pi as validateFileLoad,
  Ci as validateFileSize,
  Ti as validateFileType,
  vi as validateImageFile,
  Ii as validateImageUrl,
  qr as validatePageNumber,
  oi as validateSvgaFile,
  ni as validateSvgaUrl,
  Si as validateVideoFile,
  Ne as zhResource
};
