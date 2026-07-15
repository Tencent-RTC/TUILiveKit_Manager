import { ap as G, aq as N, ar as B, as as y, at as x, an as V, I as w, au as Y, L as k, a as K, av as X, aw as H, ax as W, N as $, ay as j, T as z, az as Z, b as q, c as J, d as Q, aA as aa, aB as ea, e as sa, aC as ta, f as ra, g as ia, ao as oa, aD as na, aE as la, h as ga, i as ua, j as da, k as ca, aF as La, l as Ea, aG as Aa, m as ba, n as _a, aH as pa, o as Ca, aI as ma, p as fa, aJ as Ta, q as va, r as Ia, aK as Ma, aL as Sa, s as Ra, t as Da, u as Oa, v as ha, w as Ua, x as Pa, y as Fa, z as Ga, A as Na, B as Ba, C as ya, D as xa, E as Va, F as wa, aM as Ya, G as ka, H as Ka, J as Xa, K as Ha, M as Wa, O as $a, P as ja, Q as za, R as Za, U as qa, V as Ja, W as Qa, aN as ae, aO as ee, X as se, Y as te, Z as re, _ as ie, $ as oe, a1 as ne, a2 as le, aP as ge, aQ as ue, a3 as de, a4 as ce, a5 as Le, a6 as Ee, a7 as Ae, a8 as be, a9 as _e, aR as pe, aa as Ce, ab as me, ac as fe, aS as Te, ad as ve, ae as Ie, af as Me, ag as Se, ah as Re, ai as De, aj as Oe, aT as he, aU as Ue, ak as Pe, al as Fe, am as Ge } from "../chunks/layout.Br-W54NR.js";
import { s as i, p as n, d as l, t as g, f as r, e as u, h as d, i as c, m as L, u as E } from "../chunks/main-layout.1w0vpJq1.js";
import { A as Be, B as ye, C as xe, j as Ve, D as we, k as Ye, l as ke, n as Ke, o as Xe, q as He, E as We, r as $e, v as je, w as ze, x as Ze, y as qe, z as Je, G as Qe, F as as, H as es, I as ss, L as ts, b as rs, a as is, J as os, K as ns, M as ls, N as gs, O as us, P as ds, Q as cs, R as Ls, S as Es, T as As, U as bs, V as _s, W as ps, X as Cs, Y as ms, Z as fs, _ as Ts, $ as vs, a0 as Is, a1 as Ms, a2 as Ss, a3 as Rs, a4 as Ds, a5 as Os, a6 as hs, a7 as Us, a8 as Ps, a9 as Fs, aa as Gs, ab as Ns, ac as Bs, ad as ys, ae as xs, af as Vs, ag as ws, ah as Ys, ai as ks, aj as Ks, ak as Xs, al as Hs, am as Ws, an as $s, ao as js, ap as zs, aq as Zs, ar as qs, as as Js, at as Qs, au as at, av as et, aw as st, ax as tt, ay as rt, az as it, aA as ot, aB as nt, aC as lt, aD as gt, aE as ut, aF as dt, aG as ct, aH as Lt, aI as Et, aJ as At, aK as bt, aL as _t, aM as pt, aN as Ct, aO as mt, aP as ft, aQ as Tt, aR as vt, aS as It, aT as Mt, aU as St, g as Rt, aV as Dt, aW as Ot, c as ht, aX as Ut, aY as Pt, aZ as Ft, a_ as Gt, a$ as Nt, b0 as Bt, b1 as yt, b2 as xt, b3 as Vt, b4 as wt, b5 as Yt, b6 as kt, b7 as Kt, b8 as Xt, b9 as Ht, ba as Wt, bb as $t, bc as jt, bd as zt, be as Zt, bf as qt, bg as Jt, bh as Qt, bi as ar, bj as er, bk as sr, bl as tr, bm as rr, bn as ir, bo as or, bp as nr, bq as lr, br as gr, bs as ur, bt as dr, bu as cr, bv as Lr, bw as Er, bx as Ar, by as br, bz as _r, bA as pr, bB as Cr, bC as mr, bD as fr, bE as Tr, bF as vr, bG as Ir, bH as Mr, bI as Sr, bJ as Rr, bK as Dr, bL as Or, bM as hr, bN as Ur, bO as Pr, bP as Fr, bQ as Gr, bR as Nr, bS as Br, bT as yr, bU as xr, bV as Vr, bW as wr, bX as Yr, bY as kr, bZ as Kr, b_ as Xr, b$ as Hr, c0 as Wr, c1 as $r, c2 as jr } from "../chunks/main-layout.1w0vpJq1.js";
import { s as A } from "../chunks/adaptive-tags-runtime.DK-QkIB_.js";
import { A as Zr, V as qr, c as Jr, a as Qr, b as ai } from "../chunks/adaptive-tags-runtime.DK-QkIB_.js";
import { P as si, g as ti, i as ri, v as ii, a as oi } from "../chunks/PreviewUrlController.HDrOm6as.js";
import { I as li, U as gi, c as ui, a as di, g as ci, b as Li, d as Ei, e as Ai, r as bi, f as _i, u as pi, v as Ci, h as mi, i as fi, j as Ti, k as vi, l as Ii } from "../chunks/upload.C-_mha0d.js";
import { B as Si, E as Ri, b as Di, g as Oi, p as hi } from "../chunks/columns.Dtl_rF_k.js";
import { g as Pi } from "../chunks/columns.CfpW-l5l.js";
import { b as Gi, C as Ni, a as Bi, M as yi, g as xi } from "../chunks/constants.C_WSTVOQ.js";
import { g as wi } from "../chunks/columns.CB_IFrzG.js";
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
const O = {
  viewBox: "0 0 24 24",
  path: "M11 6.5L5.5 12L11 17.5M6.75 12H19.75",
  strokeWidth: 2,
  strokeLinecap: "square"
}, h = {
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
  Be as ANCHOR_ID_MAX_BYTES,
  O as ARROW_LEFT_ICON,
  Zr as AdaptiveTagRuntime,
  G as Aegis,
  ye as BANNED_LIST_PAGE_SIZE,
  Si as BASIC_EMOJI,
  Gi as CATEGORY_DESC_MAX_BYTES,
  Ni as CATEGORY_ID_MAX_BYTES,
  Bi as CATEGORY_NAME_MAX_BYTES,
  U as CHEVRON_DOWN_ICON,
  N as CORE_DEFAULT_BRAND,
  B as CORE_DEFAULT_FEATURES,
  y as CORE_DEFAULT_MENUS,
  x as CREDENTIAL_KEYS,
  xe as CUSTOM_INFO_LIMITS,
  Ve as ClientCommonError,
  we as DEFAULT_BAN_DURATION,
  Ye as DEFAULT_MAX_SEAT_COUNT,
  ke as DEFAULT_MUTE_DURATION,
  Ke as DEFAULT_SEAT_TEMPLATE,
  Xe as DEFAULT_SORT_OPTIONS,
  V as DIALOG_WIDTH,
  He as DeviceError,
  Ri as EMOJI_BASE_URL,
  We as ErrorCode,
  $e as GIFT_CATEGORIES_CACHE_KEY,
  je as GIFT_DESC_MAX_BYTES,
  ze as GIFT_EXT_MAX_BYTES,
  Ze as GIFT_ID_MAX_BYTES,
  qe as GIFT_NAME_MAX_BYTES,
  Je as GIFT_SEARCH_MAX_BYTES,
  Qe as GiftCategoryController,
  as as GiftConfigController,
  es as GiftStateManager,
  w as I18N,
  h as INFO_CIRCLE_ICON,
  li as ImageUploadResolveError,
  ss as LANDSCAPE_COVER_ASPECT_RATIO,
  ts as LANG_CODE_TO_KEY,
  rs as LANG_CONFIG_KEYS,
  is as LANG_MAP,
  os as LIVE_ID_PREFIX,
  ns as LIVE_LIST_CURSOR_STORAGE_KEY,
  ls as LIVE_LIST_PAGE_SIZE,
  gs as LIVE_LIST_PAGE_STORAGE_KEY,
  us as LIVE_LIST_SEARCH_MAX_BYTES,
  ds as LIVE_SEARCH_MAX_BYTES,
  cs as LIVE_TITLE_MAX_BYTES,
  Y as LOGO_SVG_DATA_URI,
  D as LiveDataPoller,
  Ls as LiveError,
  Es as LiveListCache,
  As as LiveListController,
  bs as LiveListPagination,
  k as LiveManagerError,
  _s as LiveMonitorCore,
  ps as LiveUserError,
  K as Logger,
  yi as MAX_CATEGORY_COUNT,
  X as MENU_ITEM_LABELS,
  H as MENU_KEYS,
  W as MOCK_VIDEO_POSTER_FALLBACK,
  Cs as MODERATION_DEFAULT_MINUTES,
  ms as MODERATION_PAGE_SIZE,
  fs as MUTED_LIST_PAGE_SIZE,
  $ as NETWORK_ERROR_CODE,
  Ts as ObjectURLManager,
  j as PAGE_TITLE_KEYS,
  vs as PAGINATION_DEFAULTS,
  Is as PORTRAIT_COVER_ASPECT_RATIO,
  Ms as PreloadError,
  si as PreviewUrlController,
  Ss as RestApiError,
  Rs as SEAT_TEMPLATE_OPTIONS,
  Ds as SeatPermissionError,
  Os as ServerError,
  z as TIMEOUT_ERROR_CODE,
  gi as UrlValidationController,
  qr as ViolationLabelsPoller,
  hs as addLiveAdmin,
  Z as apiError,
  Us as approveTextModerationItems,
  Ps as banMember,
  q as batchGetUserProfilePortrait,
  J as bindI18nHelpers,
  Fs as buildCreateLiveParams,
  Gs as buildGiftSubmitPayload,
  Ns as buildLiveId,
  Bs as buildLiveRowActions,
  ys as buildObsModalState,
  Di as buildPageNumbers,
  xs as bypassCorrectionKeyword,
  Vs as cacheGiftCategories,
  R as calculateDuration,
  ws as calculateOffset,
  Ys as calculatePageAfterDelete,
  ks as calculatePageRange,
  Ks as calculateTotalPages,
  Xs as canGoToLiveListPage,
  ui as canvasToBlob,
  Q as checkServerConfig,
  Hs as cleanupExpiredModerationLocalDeletions,
  Jr as clearAdaptiveTagCache,
  Ws as clearAdminCache,
  aa as clearCache,
  ea as clearCredentials,
  $s as collectValidCustomInfo,
  Qr as computeAdaptiveTags,
  ai as computeAdaptiveTagsBatch,
  js as computeModerationStartTime,
  sa as configureLiveManager,
  zs as configureModerationLocalDeletion,
  Zs as consumeCachedGiftCategories,
  qs as convertGiftCategoriesToCategoryItems,
  Js as copyText,
  Qs as createDebounce,
  at as createDefaultCreateLiveFormData,
  et as createDefaultEditLiveFormData,
  st as createDefaultGiftLangConfig,
  tt as createDragDropHandler,
  ta as createErrorHandler,
  rt as createLiveListCursorMap,
  ra as createLiveManagerAppConfig,
  ia as createLogger,
  it as createPreviewUrl,
  di as cropCanvasToBlob,
  ot as customInfoRecordToList,
  nt as dedupeById,
  oa as defaultAvatarUrl,
  na as defaultCoverUrl,
  la as del,
  lt as detectImageAspectRatio,
  ga as disableAutoUpdateUin,
  ua as enResource,
  da as enableAutoUpdateUin,
  f as endLive,
  gt as exitFullScreen,
  ut as extractFileFromDragEvent,
  C as extractLiveStats,
  dt as fetchBannedList,
  p as fetchLiveDetail,
  ct as fetchLiveListPage,
  Lt as fetchMutedList,
  Et as filterDeletedModerationItems,
  At as filterGiftListByKeyword,
  bt as filterLiveList,
  _t as filterObsRobots,
  pt as filterSelectedIds,
  ca as findLocalizedValues,
  S as formatGiftCount,
  M as formatLikeCount,
  I as formatLiveDuration,
  Ct as formatLiveListTime,
  mt as formatModerationTime,
  ft as formatRemainingTime,
  Tt as formatTime,
  o as formatViewerCount,
  La as get,
  Ea as getActiveAppConfig,
  Aa as getActiveBrandConfig,
  vt as getActiveDeletedModerationIdCount,
  It as getActiveDeletedModerationIds,
  Mt as getAdminList,
  ba as getAegis,
  _a as getApiLanguage,
  pa as getAuthToken,
  St as getBannedMemberList,
  Rt as getByteLength,
  xi as getCategoryColumnLayouts,
  Ca as getCoreRouteFeature,
  Dt as getCoverAspectRatio,
  ma as getCredentials,
  ci as getCroppedImg,
  fa as getCurrentApiLanguageCode,
  Ta as getCurrentDomain,
  va as getCurrentLanguage,
  Ia as getCurrentUserId,
  Ma as getCurrentUserName,
  Sa as getCurrentUserSig,
  Ra as getDefaultAuthState,
  Da as getDefaultLanguage,
  Oa as getDefaultLanguageBySdkAppId,
  ha as getDefaultRoutePath,
  Ot as getDeletedCustomInfoKeys,
  Li as getEffectiveUploadEnabled,
  Ua as getErrorCategory,
  Pa as getErrorInfo,
  Fa as getErrorLocale,
  Ga as getErrorMessage,
  ht as getFallbackInitial,
  Na as getFormLabelWidth,
  Pi as getGiftColumnLayouts,
  Ut as getGiftLangConfigFromLanguageList,
  Pt as getGiftLangEditFormFromLanguageList,
  Ba as getGlobalLogLevel,
  ya as getHttpClient,
  Ft as getInteractionModerationList,
  Gt as getLangCode,
  Nt as getLangInfo,
  Bt as getLangKeyByCode,
  yt as getLangLabel,
  wi as getLiveListColumnsMeta,
  xt as getLiveListPageAfterDelete,
  Vt as getLiveViolationLabelsBatch,
  xa as getMenuKeyFromPath,
  wt as getMessages,
  Oi as getModerationColumnLayouts,
  Yt as getModerationLocalDeletionConfig,
  kt as getMuteStatus,
  Kt as getMutedMemberList,
  Xt as getObsRobotId,
  Ht as getPageSize,
  Va as getRouteTitleKey,
  wa as getSavedLanguage,
  Ya as getSdkAppId,
  Wt as getSeatTemplateOption,
  ti as getSvgaParserIfInited,
  Ei as getUploadConfig,
  Ai as getUploadErrorMessage,
  ka as getUserProfilePortrait,
  Ka as initAegis,
  Xa as initHttpClient,
  ri as initSvgaParser,
  $t as isAdminUser,
  Ha as isAegisInited,
  jt as isAllSelected,
  v as isAnchor,
  zt as isAnchorUser,
  Zt as isAudioSeatTemplate,
  qt as isBanned,
  Jt as isCachedAdmin,
  Wa as isClientError,
  $a as isCoreRouteEnabled,
  Qt as isCustomInfoKeyMissing,
  ar as isExpired,
  er as isGiftSearchInputTooLong,
  ja as isLeavingLivePage,
  T as isLiveOngoing,
  sr as isLiveSearchInputTooLong,
  za as isLoggedIn,
  tr as isMuted,
  Za as isNetworkError,
  qa as isNetworkRelatedError,
  rr as isObsRobot,
  Ja as isProxyMode,
  Qa as isRestApiError,
  ae as isServerConfigured,
  ee as isServerConfiguredMode,
  se as isServerError,
  te as isSuccess,
  ir as isSvgaFile,
  or as isSvgaUrl,
  re as isTimeoutError,
  nr as isVideoFile,
  lr as isVideoUrl,
  gr as loadModerationList,
  ie as logger,
  oe as login,
  ne as measureAndReport,
  ur as modifyAdmin,
  m as muteAll,
  dr as muteMember,
  cr as muteUser,
  Lr as normalizeGiftSearchKeyword,
  Er as parseCustomInfo,
  hi as parseTextWithEmoji,
  le as performLogout,
  ge as post,
  Ar as preventDefaultDrag,
  ue as put,
  br as readFileAsDataURL,
  _r as recordDeletedModerationIds,
  pr as remapCategoryListByLanguage,
  Cr as remapGiftListByLanguage,
  mr as replacePreviewUrl,
  de as reportAppInit,
  ce as reportBusinessOp,
  Le as reportCapability,
  Ee as reportEvent,
  Ae as reportFeatureUse,
  be as reportPageView,
  _e as reportTime,
  pe as request,
  Ce as resetReportedCaches,
  me as resolveAccount,
  fr as resolveAnchorAvatarUrl,
  Tr as resolveAnchorDisplayName,
  bi as resolveImageUploadUrl,
  _i as resolveMultipleImageUploads,
  vr as resolvePlayerAccount,
  Ir as restoreLiveListPaginationState,
  Mr as revokePreviewUrl,
  Sr as safelyParse,
  fe as saveCredentials,
  Rr as saveLiveListPaginationState,
  Dr as searchLiveById,
  Or as sendCustomMessage,
  hr as sendMessage,
  Ur as sendViolationWarning,
  Pr as sendViolationWarningQuick,
  Te as setActiveBrandConfig,
  ve as setAegisUin,
  Ie as setAuthStoreAdapter,
  Me as setDocumentLanguage,
  Se as setErrorLocale,
  Re as setErrorLocaleProvider,
  Fr as setFullScreen,
  De as setGlobalLogLevel,
  Gr as setMonitorNickname,
  Nr as setMuteAll,
  Oe as setReportPlatform,
  he as setServerConfigured,
  Ue as setUserProfileRole,
  Br as setupObsStreamingForLive,
  yr as sortLiveList,
  xr as toBoolean,
  Vr as toNumber,
  Pe as toggleLanguage,
  wr as toggleSelectAll,
  Yr as toggleSelectOne,
  kr as truncateToMaxBytes,
  Kr as unbanMember,
  Xr as uniqueIds,
  Hr as unmuteMember,
  Wr as unmuteUser,
  Fe as updateUinFromSdkAppId,
  pi as uploadImage,
  $r as validateCustomInfo,
  Ci as validateFileLoad,
  mi as validateFileSize,
  fi as validateFileType,
  Ti as validateImageFile,
  vi as validateImageUrl,
  jr as validatePageNumber,
  ii as validateSvgaFile,
  oi as validateSvgaUrl,
  Ii as validateVideoFile,
  Ge as zhResource
};
