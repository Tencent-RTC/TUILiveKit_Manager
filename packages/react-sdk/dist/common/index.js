import { at as G, au as N, av as B, aw as y, ax as x, ay as V, ar as w, I as Y, az as k, L as K, a as X, aA as H, aB as W, aC as $, N as j, aD as z, aE as Z, T as q, aF as J, b as Q, c as aa, d as ea, aG as sa, aH as ta, aI as ra, e as ia, aJ as oa, aK as na, aL as la, aM as ga, aN as ua, aO as da, f as La, aP as ca, aQ as Ea, g as Aa, h as ba, as as _a, aR as pa, aS as Ca, j as fa, k as ma, l as Ta, aT as va, m as Ia, aU as Ma, n as Sa, aV as Ra, aW as ha, aX as Da, o as Oa, p as Ua, aY as Pa, q as Fa, aZ as Ga, r as Na, a_ as Ba, s as ya, t as xa, a$ as Va, b0 as wa, u as Ya, v as ka, w as Ka, x as Xa, y as Ha, z as Wa, A as $a, B as ja, C as za, D as Za, E as qa, G as Ja, b1 as Qa, b2 as ae, H as ee, J as se, b3 as te, b4 as re, K as ie, M as oe, O as ne, b5 as le, P as ge, Q as ue, R as de, U as Le, V as ce, W as Ee, X as Ae, Y as be, Z as _e, b6 as pe, b7 as Ce, _ as fe, $ as me, a0 as Te, a1 as ve, a2 as Ie, a4 as Me, a5 as Se, b8 as Re, b9 as he, ba as De, a6 as Oe, a7 as Ue, a8 as Pe, a9 as Fe, aa as Ge, ab as Ne, ac as Be, bb as ye, ae as xe, af as Ve, ag as we, bc as Ye, ah as ke, ai as Ke, aj as Xe, ak as He, al as We, am as $e, an as je, bd as ze, be as Ze, ao as qe, ap as Je, bf as Qe, bg as as, bh as es, aq as ss } from "../chunks/shared-state.Bf8CkvaR.js";
import { s as i, p as n, e as l, t as g, f as r, h as u, i as d, j as L, m as c, u as E } from "../chunks/main-layout.OEkSp6vd.js";
import { A as rs, B as is, C as os, k as ns, D as ls, l as gs, n as us, o as ds, q as Ls, v as cs, E as Es, w as As, x as bs, y as _s, z as ps, F as Cs, H as fs, G as ms, I as Ts, J as vs, K as Is, L as Ms, b as Ss, a as Rs, M as hs, N as Ds, O as Os, P as Us, Q as Ps, R as Fs, S as Gs, T as Ns, U as Bs, V as ys, W as xs, X as Vs, Y as ws, Z as Ys, _ as ks, $ as Ks, a0 as Xs, a1 as Hs, a2 as Ws, a3 as $s, a4 as js, a5 as zs, a6 as Zs, a7 as qs, a8 as Js, a9 as Qs, aa as at, ab as et, ac as st, ad as tt, ae as rt, af as it, ag as ot, ah as nt, ai as lt, aj as gt, ak as ut, al as dt, am as Lt, an as ct, ao as Et, ap as At, aq as bt, ar as _t, as as pt, at as Ct, au as ft, av as mt, aw as Tt, ax as vt, ay as It, az as Mt, aA as St, aB as Rt, aC as ht, aD as Dt, aE as Ot, aF as Ut, aG as Pt, aH as Ft, aI as Gt, aJ as Nt, aK as Bt, aL as yt, aM as xt, aN as Vt, g as wt, aO as Yt, aP as kt, c as Kt, aQ as Xt, aR as Ht, aS as Wt, aT as $t, aU as jt, aV as zt, aW as Zt, aX as qt, aY as Jt, aZ as Qt, a_ as ar, a$ as er, b0 as sr, b1 as tr, b2 as rr, b3 as ir, b4 as or, b5 as nr, b6 as lr, b7 as gr, b8 as ur, b9 as dr, ba as Lr, bb as cr, bc as Er, bd as Ar, be as br, bf as _r, bg as pr, bh as Cr, bi as fr, bj as mr, bk as Tr, bl as vr, bm as Ir, bn as Mr, bo as Sr, bp as Rr, bq as hr, br as Dr, r as Or, bs as Ur, bt as Pr, bu as Fr, bv as Gr, d as Nr, bw as Br, bx as yr, by as xr, bz as Vr, bA as wr, bB as Yr, bC as kr, bD as Kr, bE as Xr, bF as Hr, bG as Wr, bH as $r, bI as jr, bJ as zr, bK as Zr, bL as qr, bM as Jr, bN as Qr, bO as ai, bP as ei, bQ as si, bR as ti } from "../chunks/main-layout.OEkSp6vd.js";
import { s as A } from "../chunks/violation-labels-poller.BLRVAuJB.js";
import { V as ii } from "../chunks/violation-labels-poller.BLRVAuJB.js";
import { I as ni, U as li, c as gi, a as ui, g as di, b as Li, d as ci, e as Ei, r as Ai, f as bi, u as _i, v as pi, h as Ci, i as fi, j as mi, k as Ti, l as vi } from "../chunks/upload.BUq-1ot2.js";
import { B as Mi, E as Si, b as Ri, g as hi, p as Di } from "../chunks/columns.B8HdBl39.js";
import { g as Ui } from "../chunks/columns.DzP4VQm6.js";
import { b as Fi, C as Gi, a as Ni, M as Bi, g as yi } from "../chunks/constants.CoYk_HaF.js";
import { P as Vi } from "../chunks/PreviewUrlController.D1r9dOPU.js";
import { g as Yi } from "../chunks/columns.CY8AmK1x.js";
async function p(a) {
  return { liveInfo: await L(a) };
}
function C(a) {
  return !a || !a.stats ? { stats: null } : { stats: a.stats };
}
async function f(a) {
  const { liveId: e, mute: s } = a;
  s ? await c(e, ["All_Member"], 0) : await E(e, ["All_Member"]);
}
async function m(a) {
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
class h {
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
const D = {
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
  rs as ANCHOR_ID_MAX_BYTES,
  D as ARROW_LEFT_ICON,
  G as AdaptiveTagRuntime,
  N as Aegis,
  is as BANNED_LIST_PAGE_SIZE,
  Mi as BASIC_EMOJI,
  Fi as CATEGORY_DESC_MAX_BYTES,
  Gi as CATEGORY_ID_MAX_BYTES,
  Ni as CATEGORY_NAME_MAX_BYTES,
  U as CHEVRON_DOWN_ICON,
  B as CORE_DEFAULT_BRAND,
  y as CORE_DEFAULT_FEATURES,
  x as CORE_DEFAULT_MENUS,
  V as CREDENTIAL_KEYS,
  os as CUSTOM_INFO_LIMITS,
  ns as ClientCommonError,
  ls as DEFAULT_BAN_DURATION,
  gs as DEFAULT_MAX_SEAT_COUNT,
  us as DEFAULT_MUTE_DURATION,
  ds as DEFAULT_SEAT_TEMPLATE,
  Ls as DEFAULT_SORT_OPTIONS,
  w as DIALOG_WIDTH,
  cs as DeviceError,
  Si as EMOJI_BASE_URL,
  Es as ErrorCode,
  As as GIFT_CATEGORIES_CACHE_KEY,
  bs as GIFT_DESC_MAX_BYTES,
  _s as GIFT_EXT_MAX_BYTES,
  ps as GIFT_ID_MAX_BYTES,
  Cs as GIFT_NAME_MAX_BYTES,
  fs as GIFT_SEARCH_MAX_BYTES,
  ms as GiftCategoryController,
  Ts as GiftConfigController,
  vs as GiftStateManager,
  Y as I18N,
  O as INFO_CIRCLE_ICON,
  ni as ImageUploadResolveError,
  Is as LANDSCAPE_COVER_ASPECT_RATIO,
  Ms as LANG_CODE_TO_KEY,
  Ss as LANG_CONFIG_KEYS,
  Rs as LANG_MAP,
  hs as LIVE_ID_PREFIX,
  Ds as LIVE_LIST_CURSOR_STORAGE_KEY,
  Os as LIVE_LIST_PAGE_SIZE,
  Us as LIVE_LIST_PAGE_STORAGE_KEY,
  Ps as LIVE_LIST_SEARCH_MAX_BYTES,
  Fs as LIVE_SEARCH_MAX_BYTES,
  Gs as LIVE_TITLE_MAX_BYTES,
  k as LOGO_SVG_DATA_URI,
  h as LiveDataPoller,
  Ns as LiveError,
  Bs as LiveListCache,
  ys as LiveListController,
  xs as LiveListPagination,
  K as LiveManagerError,
  Vs as LiveMonitorCore,
  ws as LiveUserError,
  X as Logger,
  Bi as MAX_CATEGORY_COUNT,
  H as MENU_ITEM_LABELS,
  W as MENU_KEYS,
  $ as MOCK_VIDEO_POSTER_FALLBACK,
  Ys as MODERATION_DEFAULT_MINUTES,
  ks as MODERATION_PAGE_SIZE,
  Ks as MUTED_LIST_PAGE_SIZE,
  j as NETWORK_ERROR_CODE,
  Xs as ObjectURLManager,
  z as PAGE_TITLE_KEYS,
  Z as PAGINATION_DEFAULTS,
  Hs as PORTRAIT_COVER_ASPECT_RATIO,
  Ws as PreloadError,
  Vi as PreviewUrlController,
  $s as RestApiError,
  js as SEAT_TEMPLATE_OPTIONS,
  zs as SeatPermissionError,
  Zs as ServerError,
  q as TIMEOUT_ERROR_CODE,
  li as UrlValidationController,
  ii as ViolationLabelsPoller,
  qs as addLiveAdmin,
  J as apiError,
  Q as applyPatch,
  Js as approveTextModerationItems,
  Qs as banMember,
  aa as batchGetUserProfilePortrait,
  ea as bindI18nHelpers,
  at as buildCreateLiveParams,
  et as buildGiftSubmitPayload,
  st as buildLiveId,
  tt as buildLiveRowActions,
  rt as buildObsModalState,
  Ri as buildPageNumbers,
  it as bypassCorrectionKeyword,
  ot as cacheGiftCategories,
  R as calculateDuration,
  sa as calculateOffset,
  nt as calculatePageAfterDelete,
  ta as calculatePageRange,
  ra as calculateTotalPages,
  lt as canGoToLiveListPage,
  gi as canvasToBlob,
  ia as checkServerConfig,
  oa as cleanupExpiredModerationLocalDeletions,
  na as clearAdaptiveTagCache,
  gt as clearAdminCache,
  la as clearCache,
  ga as clearCredentials,
  ut as collectValidCustomInfo,
  ua as computeAdaptiveTags,
  da as computeAdaptiveTagsBatch,
  dt as computeModerationStartTime,
  La as configureLiveManager,
  ca as configureModerationLocalDeletion,
  Lt as consumeCachedGiftCategories,
  ct as convertGiftCategoriesToCategoryItems,
  Et as copyText,
  At as createDebounce,
  bt as createDefaultCreateLiveFormData,
  _t as createDefaultEditLiveFormData,
  pt as createDefaultGiftLangConfig,
  Ct as createDragDropHandler,
  Ea as createErrorHandler,
  ft as createLiveListCursorMap,
  Aa as createLiveManagerAppConfig,
  ba as createLogger,
  mt as createPreviewUrl,
  ui as cropCanvasToBlob,
  Tt as customInfoRecordToList,
  vt as dedupeById,
  _a as defaultAvatarUrl,
  pa as defaultCoverUrl,
  Ca as del,
  It as detectImageAspectRatio,
  fa as disableAutoUpdateUin,
  ma as enResource,
  Ta as enableAutoUpdateUin,
  m as endLive,
  Mt as exitFullScreen,
  St as extractFileFromDragEvent,
  C as extractLiveStats,
  Rt as fetchBannedList,
  p as fetchLiveDetail,
  ht as fetchLiveListPage,
  Dt as fetchMutedList,
  va as filterDeletedModerationItems,
  Ot as filterGiftListByKeyword,
  Ut as filterLiveList,
  Pt as filterObsRobots,
  Ft as filterSelectedIds,
  Ia as findLocalizedValues,
  S as formatGiftCount,
  M as formatLikeCount,
  I as formatLiveDuration,
  Gt as formatLiveListTime,
  Nt as formatModerationTime,
  Bt as formatRemainingTime,
  yt as formatTime,
  o as formatViewerCount,
  Ma as get,
  Sa as getActiveAppConfig,
  Ra as getActiveBrandConfig,
  ha as getActiveDeletedModerationIdCount,
  Da as getActiveDeletedModerationIds,
  xt as getAdminList,
  Oa as getAegis,
  Ua as getApiLanguage,
  Pa as getAuthToken,
  Vt as getBannedMemberList,
  wt as getByteLength,
  yi as getCategoryColumnLayouts,
  Fa as getCoreRouteFeature,
  Yt as getCoverAspectRatio,
  Ga as getCredentials,
  di as getCroppedImg,
  Na as getCurrentApiLanguageCode,
  Ba as getCurrentDomain,
  ya as getCurrentLanguage,
  xa as getCurrentUserId,
  Va as getCurrentUserName,
  wa as getCurrentUserSig,
  Ya as getDefaultAuthState,
  ka as getDefaultLanguage,
  Ka as getDefaultLanguageBySdkAppId,
  Xa as getDefaultRoutePath,
  kt as getDeletedCustomInfoKeys,
  Li as getEffectiveUploadEnabled,
  Ha as getErrorCategory,
  Wa as getErrorInfo,
  $a as getErrorLocale,
  ja as getErrorMessage,
  Kt as getFallbackInitial,
  za as getFormLabelWidth,
  Ui as getGiftColumnLayouts,
  Xt as getGiftLangConfigFromLanguageList,
  Ht as getGiftLangEditFormFromLanguageList,
  Za as getGlobalLogLevel,
  qa as getHttpClient,
  Wt as getInteractionModerationList,
  $t as getLangCode,
  jt as getLangInfo,
  zt as getLangKeyByCode,
  Zt as getLangLabel,
  Yi as getLiveListColumnsMeta,
  qt as getLiveListPageAfterDelete,
  Jt as getLiveViolationLabelsBatch,
  Ja as getMenuKeyFromPath,
  Qt as getMessages,
  hi as getModerationColumnLayouts,
  Qa as getModerationLocalDeletionConfig,
  ar as getMuteStatus,
  er as getMutedMemberList,
  sr as getObsRobotId,
  ae as getPageSize,
  ee as getRouteTitleKey,
  se as getSavedLanguage,
  te as getSdkAppId,
  tr as getSeatTemplateOption,
  re as getSvgaParserIfInited,
  ci as getUploadConfig,
  Ei as getUploadErrorMessage,
  ie as getUserProfilePortrait,
  oe as initAegis,
  ne as initHttpClient,
  le as initSvgaParser,
  rr as isAdminUser,
  ge as isAegisInited,
  ir as isAllSelected,
  v as isAnchor,
  or as isAnchorUser,
  nr as isAudioSeatTemplate,
  lr as isBanned,
  gr as isCachedAdmin,
  ue as isClientError,
  de as isCoreRouteEnabled,
  ur as isCustomInfoKeyMissing,
  dr as isExpired,
  Lr as isGiftSearchInputTooLong,
  Le as isLeavingLivePage,
  T as isLiveOngoing,
  cr as isLiveSearchInputTooLong,
  ce as isLoggedIn,
  Er as isMuted,
  Ee as isNetworkError,
  Ae as isNetworkRelatedError,
  Ar as isObsRobot,
  be as isProxyMode,
  _e as isRestApiError,
  pe as isServerConfigured,
  Ce as isServerConfiguredMode,
  fe as isServerError,
  me as isSuccess,
  br as isSvgaFile,
  _r as isSvgaUrl,
  Te as isTimeoutError,
  pr as isVideoFile,
  Cr as isVideoUrl,
  fr as loadModerationList,
  ve as logger,
  Ie as login,
  Me as measureAndReport,
  mr as modifyAdmin,
  f as muteAll,
  Tr as muteMember,
  vr as muteUser,
  Ir as normalizeGiftSearchKeyword,
  Mr as parseCustomInfo,
  Di as parseTextWithEmoji,
  Se as performLogout,
  Re as post,
  Sr as preventDefaultDrag,
  he as put,
  Rr as readFileAsDataURL,
  De as recordDeletedModerationIds,
  hr as remapCategoryListByLanguage,
  Dr as remapGiftListByLanguage,
  Or as replacePreviewUrl,
  Oe as reportAppInit,
  Ue as reportBusinessOp,
  Pe as reportCapability,
  Fe as reportEvent,
  Ge as reportFeatureUse,
  Ne as reportPageView,
  Be as reportTime,
  ye as request,
  xe as resetReportedCaches,
  Ve as resolveAccount,
  Ur as resolveAnchorAvatarUrl,
  Pr as resolveAnchorDisplayName,
  Ai as resolveImageUploadUrl,
  bi as resolveMultipleImageUploads,
  Fr as resolvePlayerAccount,
  Gr as restoreLiveListPaginationState,
  Nr as revokePreviewUrl,
  Br as safelyParse,
  we as saveCredentials,
  yr as saveLiveListPaginationState,
  xr as searchLiveById,
  Vr as sendCustomMessage,
  wr as sendMessage,
  Yr as sendViolationWarning,
  kr as sendViolationWarningQuick,
  Ye as setActiveBrandConfig,
  ke as setAegisUin,
  Ke as setAuthStoreAdapter,
  Xe as setDocumentLanguage,
  He as setErrorLocale,
  We as setErrorLocaleProvider,
  Kr as setFullScreen,
  $e as setGlobalLogLevel,
  Xr as setMonitorNickname,
  Hr as setMuteAll,
  je as setReportPlatform,
  ze as setServerConfigured,
  Ze as setUserProfileRole,
  Wr as setupObsStreamingForLive,
  $r as sortLiveList,
  jr as toBoolean,
  zr as toNumber,
  qe as toggleLanguage,
  Zr as toggleSelectAll,
  qr as toggleSelectOne,
  Jr as truncateToMaxBytes,
  Qr as unbanMember,
  ai as uniqueIds,
  ei as unmuteMember,
  si as unmuteUser,
  Je as updateUinFromSdkAppId,
  _i as uploadImage,
  ti as validateCustomInfo,
  pi as validateFileLoad,
  Ci as validateFileSize,
  fi as validateFileType,
  mi as validateImageFile,
  Ti as validateImageUrl,
  Qe as validatePageNumber,
  as as validateSvgaFile,
  es as validateSvgaUrl,
  vi as validateVideoFile,
  ss as zhResource
};
