import { aq as G, ar as N, as as B, at as y, au as V, ao as x, I as w, av as Y, L as k, a as K, aw as X, ax as H, ay as W, N as $, az as j, T as z, aA as Z, b as q, c as J, d as Q, e as aa, aB as ea, aC as sa, f as ta, aD as ra, g as ia, h as oa, ap as na, aE as la, aF as ga, i as ua, j as da, k as ca, l as La, aG as Ea, m as Aa, aH as ba, n as _a, o as pa, aI as Ca, p as ma, aJ as fa, q as Ta, aK as va, r as Ia, s as Ma, aL as Sa, aM as Ra, t as Da, u as ha, v as Oa, w as Ua, x as Pa, y as Fa, z as Ga, A as Na, B as Ba, C as ya, D as Va, E as xa, F as wa, G as Ya, aN as ka, H as Ka, J as Xa, K as Ha, M as Wa, O as $a, P as ja, Q as za, R as Za, U as qa, V as Ja, W as Qa, X as ae, aO as ee, aP as se, Y as te, Z as re, _ as ie, $ as oe, a0 as ne, a2 as le, a3 as ge, aQ as ue, aR as de, a4 as ce, a5 as Le, a6 as Ee, a7 as Ae, a8 as be, a9 as _e, aa as pe, aS as Ce, ab as me, ac as fe, ad as Te, aT as ve, ae as Ie, af as Me, ag as Se, ah as Re, ai as De, aj as he, ak as Oe, aU as Ue, aV as Pe, al as Fe, am as Ge, an as Ne } from "../chunks/layout.QDR0rddX.js";
import { s as i, p as n, d as l, t as g, f as r, e as u, h as d, i as c, m as L, u as E } from "../chunks/main-layout.BgP9Ncvl.js";
import { A as ye, B as Ve, C as xe, j as we, D as Ye, k as ke, l as Ke, n as Xe, o as He, q as We, E as $e, r as je, v as ze, w as Ze, x as qe, y as Je, z as Qe, G as as, F as es, H as ss, I as ts, L as rs, b as is, a as os, J as ns, K as ls, M as gs, N as us, O as ds, P as cs, Q as Ls, R as Es, S as As, T as bs, U as _s, V as ps, W as Cs, X as ms, Y as fs, Z as Ts, _ as vs, $ as Is, a0 as Ms, a1 as Ss, a2 as Rs, a3 as Ds, a4 as hs, a5 as Os, a6 as Us, a7 as Ps, a8 as Fs, a9 as Gs, aa as Ns, ab as Bs, ac as ys, ad as Vs, ae as xs, af as ws, ag as Ys, ah as ks, ai as Ks, aj as Xs, ak as Hs, al as Ws, am as $s, an as js, ao as zs, ap as Zs, aq as qs, ar as Js, as as Qs, at, au as et, av as st, aw as tt, ax as rt, ay as it, az as ot, aA as nt, aB as lt, aC as gt, aD as ut, aE as dt, aF as ct, aG as Lt, aH as Et, aI as At, aJ as bt, aK as _t, aL as pt, aM as Ct, aN as mt, aO as ft, aP as Tt, aQ as vt, aR as It, aS as Mt, aT as St, aU as Rt, g as Dt, aV as ht, aW as Ot, c as Ut, aX as Pt, aY as Ft, aZ as Gt, a_ as Nt, a$ as Bt, b0 as yt, b1 as Vt, b2 as xt, b3 as wt, b4 as Yt, b5 as kt, b6 as Kt, b7 as Xt, b8 as Ht, b9 as Wt, ba as $t, bb as jt, bc as zt, bd as Zt, be as qt, bf as Jt, bg as Qt, bh as ar, bi as er, bj as sr, bk as tr, bl as rr, bm as ir, bn as or, bo as nr, bp as lr, bq as gr, br as ur, bs as dr, bt as cr, bu as Lr, bv as Er, bw as Ar, bx as br, by as _r, bz as pr, bA as Cr, bB as mr, bC as fr, bD as Tr, bE as vr, bF as Ir, bG as Mr, bH as Sr, bI as Rr, bJ as Dr, bK as hr, bL as Or, bM as Ur, bN as Pr, bO as Fr, bP as Gr, bQ as Nr, bR as Br, bS as yr, bT as Vr, bU as xr, bV as wr, bW as Yr, bX as kr, bY as Kr, bZ as Xr, b_ as Hr, b$ as Wr, c0 as $r, c1 as jr, c2 as zr } from "../chunks/main-layout.BgP9Ncvl.js";
import { s as A } from "../chunks/adaptive-tags-runtime.Nrz95dSj.js";
import { A as qr, V as Jr, c as Qr, a as ai, b as ei } from "../chunks/adaptive-tags-runtime.Nrz95dSj.js";
import { P as ti, g as ri, i as ii, v as oi, a as ni } from "../chunks/PreviewUrlController.B8ClIfJ-.js";
import { I as gi, U as ui, c as di, a as ci, g as Li, b as Ei, d as Ai, e as bi, r as _i, f as pi, u as Ci, v as mi, h as fi, i as Ti, j as vi, k as Ii, l as Mi } from "../chunks/upload.B9g98mEN.js";
import { B as Ri, E as Di, b as hi, g as Oi, p as Ui } from "../chunks/columns.DGoQAesP.js";
import { g as Fi } from "../chunks/columns.BKd5KjpN.js";
import { b as Ni, C as Bi, a as yi, M as Vi, g as xi } from "../chunks/constants.D7m1L-Nc.js";
import { g as Yi } from "../chunks/columns.Dd5IRgBx.js";
async function p(a) {
  return { liveInfo: await c(a) };
}
function C(a) {
  return !a || !a.stats ? { stats: null } : { stats: a.stats };
}
async function m(a) {
  const { liveId: e, mute: s } = a;
  s ? await L(e, ["All_Member"], 0) : await E(e, ["All_Member"]);
}
async function f(a) {
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
function M(a) {
  return o(a);
}
function S(a) {
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
  qr as AdaptiveTagRuntime,
  G as Aegis,
  Ve as BANNED_LIST_PAGE_SIZE,
  Ri as BASIC_EMOJI,
  Ni as CATEGORY_DESC_MAX_BYTES,
  Bi as CATEGORY_ID_MAX_BYTES,
  yi as CATEGORY_NAME_MAX_BYTES,
  U as CHEVRON_DOWN_ICON,
  N as CORE_DEFAULT_BRAND,
  B as CORE_DEFAULT_FEATURES,
  y as CORE_DEFAULT_MENUS,
  V as CREDENTIAL_KEYS,
  xe as CUSTOM_INFO_LIMITS,
  we as ClientCommonError,
  Ye as DEFAULT_BAN_DURATION,
  ke as DEFAULT_MAX_SEAT_COUNT,
  Ke as DEFAULT_MUTE_DURATION,
  Xe as DEFAULT_SEAT_TEMPLATE,
  He as DEFAULT_SORT_OPTIONS,
  x as DIALOG_WIDTH,
  We as DeviceError,
  Di as EMOJI_BASE_URL,
  $e as ErrorCode,
  je as GIFT_CATEGORIES_CACHE_KEY,
  ze as GIFT_DESC_MAX_BYTES,
  Ze as GIFT_EXT_MAX_BYTES,
  qe as GIFT_ID_MAX_BYTES,
  Je as GIFT_NAME_MAX_BYTES,
  Qe as GIFT_SEARCH_MAX_BYTES,
  as as GiftCategoryController,
  es as GiftConfigController,
  ss as GiftStateManager,
  w as I18N,
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
  Y as LOGO_SVG_DATA_URI,
  D as LiveDataPoller,
  Es as LiveError,
  As as LiveListCache,
  bs as LiveListController,
  _s as LiveListPagination,
  k as LiveManagerError,
  ps as LiveMonitorCore,
  Cs as LiveUserError,
  K as Logger,
  Vi as MAX_CATEGORY_COUNT,
  X as MENU_ITEM_LABELS,
  H as MENU_KEYS,
  W as MOCK_VIDEO_POSTER_FALLBACK,
  ms as MODERATION_DEFAULT_MINUTES,
  fs as MODERATION_PAGE_SIZE,
  Ts as MUTED_LIST_PAGE_SIZE,
  $ as NETWORK_ERROR_CODE,
  vs as ObjectURLManager,
  j as PAGE_TITLE_KEYS,
  Is as PAGINATION_DEFAULTS,
  Ms as PORTRAIT_COVER_ASPECT_RATIO,
  Ss as PreloadError,
  ti as PreviewUrlController,
  Rs as RestApiError,
  Ds as SEAT_TEMPLATE_OPTIONS,
  hs as SeatPermissionError,
  Os as ServerError,
  z as TIMEOUT_ERROR_CODE,
  ui as UrlValidationController,
  Jr as ViolationLabelsPoller,
  Us as addLiveAdmin,
  Z as apiError,
  q as applyPatch,
  Ps as approveTextModerationItems,
  Fs as banMember,
  J as batchGetUserProfilePortrait,
  Q as bindI18nHelpers,
  Gs as buildCreateLiveParams,
  Ns as buildGiftSubmitPayload,
  Bs as buildLiveId,
  ys as buildLiveRowActions,
  Vs as buildObsModalState,
  hi as buildPageNumbers,
  xs as bypassCorrectionKeyword,
  ws as cacheGiftCategories,
  R as calculateDuration,
  Ys as calculateOffset,
  ks as calculatePageAfterDelete,
  Ks as calculatePageRange,
  Xs as calculateTotalPages,
  Hs as canGoToLiveListPage,
  di as canvasToBlob,
  aa as checkServerConfig,
  Ws as cleanupExpiredModerationLocalDeletions,
  Qr as clearAdaptiveTagCache,
  $s as clearAdminCache,
  ea as clearCache,
  sa as clearCredentials,
  js as collectValidCustomInfo,
  ai as computeAdaptiveTags,
  ei as computeAdaptiveTagsBatch,
  zs as computeModerationStartTime,
  ta as configureLiveManager,
  Zs as configureModerationLocalDeletion,
  qs as consumeCachedGiftCategories,
  Js as convertGiftCategoriesToCategoryItems,
  Qs as copyText,
  at as createDebounce,
  et as createDefaultCreateLiveFormData,
  st as createDefaultEditLiveFormData,
  tt as createDefaultGiftLangConfig,
  rt as createDragDropHandler,
  ra as createErrorHandler,
  it as createLiveListCursorMap,
  ia as createLiveManagerAppConfig,
  oa as createLogger,
  ot as createPreviewUrl,
  ci as cropCanvasToBlob,
  nt as customInfoRecordToList,
  lt as dedupeById,
  na as defaultAvatarUrl,
  la as defaultCoverUrl,
  ga as del,
  gt as detectImageAspectRatio,
  ua as disableAutoUpdateUin,
  da as enResource,
  ca as enableAutoUpdateUin,
  f as endLive,
  ut as exitFullScreen,
  dt as extractFileFromDragEvent,
  C as extractLiveStats,
  ct as fetchBannedList,
  p as fetchLiveDetail,
  Lt as fetchLiveListPage,
  Et as fetchMutedList,
  At as filterDeletedModerationItems,
  bt as filterGiftListByKeyword,
  _t as filterLiveList,
  pt as filterObsRobots,
  Ct as filterSelectedIds,
  La as findLocalizedValues,
  S as formatGiftCount,
  M as formatLikeCount,
  I as formatLiveDuration,
  mt as formatLiveListTime,
  ft as formatModerationTime,
  Tt as formatRemainingTime,
  vt as formatTime,
  o as formatViewerCount,
  Ea as get,
  Aa as getActiveAppConfig,
  ba as getActiveBrandConfig,
  It as getActiveDeletedModerationIdCount,
  Mt as getActiveDeletedModerationIds,
  St as getAdminList,
  _a as getAegis,
  pa as getApiLanguage,
  Ca as getAuthToken,
  Rt as getBannedMemberList,
  Dt as getByteLength,
  xi as getCategoryColumnLayouts,
  ma as getCoreRouteFeature,
  ht as getCoverAspectRatio,
  fa as getCredentials,
  Li as getCroppedImg,
  Ta as getCurrentApiLanguageCode,
  va as getCurrentDomain,
  Ia as getCurrentLanguage,
  Ma as getCurrentUserId,
  Sa as getCurrentUserName,
  Ra as getCurrentUserSig,
  Da as getDefaultAuthState,
  ha as getDefaultLanguage,
  Oa as getDefaultLanguageBySdkAppId,
  Ua as getDefaultRoutePath,
  Ot as getDeletedCustomInfoKeys,
  Ei as getEffectiveUploadEnabled,
  Pa as getErrorCategory,
  Fa as getErrorInfo,
  Ga as getErrorLocale,
  Na as getErrorMessage,
  Ut as getFallbackInitial,
  Ba as getFormLabelWidth,
  Fi as getGiftColumnLayouts,
  Pt as getGiftLangConfigFromLanguageList,
  Ft as getGiftLangEditFormFromLanguageList,
  ya as getGlobalLogLevel,
  Va as getHttpClient,
  Gt as getInteractionModerationList,
  Nt as getLangCode,
  Bt as getLangInfo,
  yt as getLangKeyByCode,
  Vt as getLangLabel,
  Yi as getLiveListColumnsMeta,
  xt as getLiveListPageAfterDelete,
  wt as getLiveViolationLabelsBatch,
  xa as getMenuKeyFromPath,
  Yt as getMessages,
  Oi as getModerationColumnLayouts,
  kt as getModerationLocalDeletionConfig,
  Kt as getMuteStatus,
  Xt as getMutedMemberList,
  Ht as getObsRobotId,
  Wt as getPageSize,
  wa as getRouteTitleKey,
  Ya as getSavedLanguage,
  ka as getSdkAppId,
  $t as getSeatTemplateOption,
  ri as getSvgaParserIfInited,
  Ai as getUploadConfig,
  bi as getUploadErrorMessage,
  Ka as getUserProfilePortrait,
  Xa as initAegis,
  Ha as initHttpClient,
  ii as initSvgaParser,
  jt as isAdminUser,
  Wa as isAegisInited,
  zt as isAllSelected,
  v as isAnchor,
  Zt as isAnchorUser,
  qt as isAudioSeatTemplate,
  Jt as isBanned,
  Qt as isCachedAdmin,
  $a as isClientError,
  ja as isCoreRouteEnabled,
  ar as isCustomInfoKeyMissing,
  er as isExpired,
  sr as isGiftSearchInputTooLong,
  za as isLeavingLivePage,
  T as isLiveOngoing,
  tr as isLiveSearchInputTooLong,
  Za as isLoggedIn,
  rr as isMuted,
  qa as isNetworkError,
  Ja as isNetworkRelatedError,
  ir as isObsRobot,
  Qa as isProxyMode,
  ae as isRestApiError,
  ee as isServerConfigured,
  se as isServerConfiguredMode,
  te as isServerError,
  re as isSuccess,
  or as isSvgaFile,
  nr as isSvgaUrl,
  ie as isTimeoutError,
  lr as isVideoFile,
  gr as isVideoUrl,
  ur as loadModerationList,
  oe as logger,
  ne as login,
  le as measureAndReport,
  dr as modifyAdmin,
  m as muteAll,
  cr as muteMember,
  Lr as muteUser,
  Er as normalizeGiftSearchKeyword,
  Ar as parseCustomInfo,
  Ui as parseTextWithEmoji,
  ge as performLogout,
  ue as post,
  br as preventDefaultDrag,
  de as put,
  _r as readFileAsDataURL,
  pr as recordDeletedModerationIds,
  Cr as remapCategoryListByLanguage,
  mr as remapGiftListByLanguage,
  fr as replacePreviewUrl,
  ce as reportAppInit,
  Le as reportBusinessOp,
  Ee as reportCapability,
  Ae as reportEvent,
  be as reportFeatureUse,
  _e as reportPageView,
  pe as reportTime,
  Ce as request,
  me as resetReportedCaches,
  fe as resolveAccount,
  Tr as resolveAnchorAvatarUrl,
  vr as resolveAnchorDisplayName,
  _i as resolveImageUploadUrl,
  pi as resolveMultipleImageUploads,
  Ir as resolvePlayerAccount,
  Mr as restoreLiveListPaginationState,
  Sr as revokePreviewUrl,
  Rr as safelyParse,
  Te as saveCredentials,
  Dr as saveLiveListPaginationState,
  hr as searchLiveById,
  Or as sendCustomMessage,
  Ur as sendMessage,
  Pr as sendViolationWarning,
  Fr as sendViolationWarningQuick,
  ve as setActiveBrandConfig,
  Ie as setAegisUin,
  Me as setAuthStoreAdapter,
  Se as setDocumentLanguage,
  Re as setErrorLocale,
  De as setErrorLocaleProvider,
  Gr as setFullScreen,
  he as setGlobalLogLevel,
  Nr as setMonitorNickname,
  Br as setMuteAll,
  Oe as setReportPlatform,
  Ue as setServerConfigured,
  Pe as setUserProfileRole,
  yr as setupObsStreamingForLive,
  Vr as sortLiveList,
  xr as toBoolean,
  wr as toNumber,
  Fe as toggleLanguage,
  Yr as toggleSelectAll,
  kr as toggleSelectOne,
  Kr as truncateToMaxBytes,
  Xr as unbanMember,
  Hr as uniqueIds,
  Wr as unmuteMember,
  $r as unmuteUser,
  Ge as updateUinFromSdkAppId,
  Ci as uploadImage,
  jr as validateCustomInfo,
  mi as validateFileLoad,
  fi as validateFileSize,
  Ti as validateFileType,
  vi as validateImageFile,
  Ii as validateImageUrl,
  zr as validatePageNumber,
  oi as validateSvgaFile,
  ni as validateSvgaUrl,
  Mi as validateVideoFile,
  Ne as zhResource
};
