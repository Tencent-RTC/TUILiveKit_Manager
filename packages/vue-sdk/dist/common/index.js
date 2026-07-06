import { A as B, L as y, c as N, d as x, e as V, g as Y, a as k, b as w, i as K, f as X, l as H, m as W, r as $, h as j, j as q, k as z, n as Z, o as J, p as Q, s as aa, q as ea, t as sa, u as ta } from "../chunks/logger.DCFRj533.js";
import { Y as ia, Z as oa, _ as na, $ as la, W as ga, I as ua, a0 as da, L as La, a1 as ca, a2 as Aa, a3 as Ea, a4 as ba, a5 as ma, b as fa, c as pa, a6 as _a, a7 as Ca, a as Ta, a8 as va, d as Ia, X as Sa, a9 as Ma, aa as ha, e as Da, f as Ua, ab as Oa, g as Ra, ac as Pa, h as Fa, ad as Ga, i as Ba, ae as ya, j as Na, af as xa, k as Va, l as Ya, ag as ka, ah as wa, m as Ka, n as Xa, o as Ha, p as Wa, q as $a, r as ja, s as qa, t as za, u as Za, v as Ja, w as Qa, x as ae, ai as ee, y as se, z as te, A as re, B as ie, C as oe, D as ne, E as le, F as ge, aj as ue, ak as de, G as Le, H as ce, J as Ae, M as Ee, al as be, am as me, an as fe, O as pe, P as _e, ao as Ce, Q as Te, R as ve, S as Ie, ap as Se, aq as Me, U as he, V as De } from "../chunks/layout.DppKPdLU.js";
import { s as i, p as n, f as r, t as l, h as g, i as u, m as d, u as L } from "../chunks/main-layout.BqLTYqar.js";
import { A as Oe, B as Re, C as Pe, j as Fe, D as Ge, k as Be, l as ye, n as Ne, o as xe, q as Ve, E as Ye, v as ke, w as we, x as Ke, y as Xe, z as He, F as We, G as $e, H as je, I as qe, L as ze, b as Ze, a as Je, J as Qe, K as as, M as es, N as ss, O as ts, P as rs, Q as is, R as os, S as ns, T as ls, U as gs, V as us, W as ds, X as Ls, Y as cs, Z as As, _ as Es, $ as bs, a0 as ms, a1 as fs, a2 as ps, a3 as _s, a4 as Cs, a5 as Ts, a6 as vs, a7 as Is, a8 as Ss, a9 as Ms, aa as hs, ab as Ds, ac as Us, ad as Os, ae as Rs, af as Ps, ag as Fs, ah as Gs, ai as Bs, aj as ys, ak as Ns, al as xs, am as Vs, an as Ys, ao as ks, ap as ws, aq as Ks, ar as Xs, as as Hs, at as Ws, au as $s, av as js, aw as qs, ax as zs, ay as Zs, az as Js, aA as Qs, aB as at, aC as et, aD as st, aE as tt, aF as rt, aG as it, aH as ot, aI as nt, aJ as lt, aK as gt, aL as ut, aM as dt, aN as Lt, aO as ct, aP as At, aQ as Et, aR as bt, aS as mt, aT as ft, aU as pt, g as _t, aV as Ct, aW as Tt, c as vt, aX as It, aY as St, aZ as Mt, a_ as ht, a$ as Dt, b0 as Ut, b1 as Ot, b2 as Rt, b3 as Pt, b4 as Ft, b5 as Gt, b6 as Bt, b7 as yt, b8 as Nt, b9 as xt, ba as Vt, bb as Yt, bc as kt, bd as wt, be as Kt, bf as Xt, bg as Ht, bh as Wt, bi as $t, bj as jt, bk as qt, bl as zt, bm as Zt, bn as Jt, bo as Qt, bp as ar, bq as er, br as sr, bs as tr, bt as rr, bu as ir, bv as or, bw as nr, bx as lr, by as gr, bz as ur, bA as dr, bB as Lr, r as cr, bC as Ar, bD as Er, bE as br, bF as mr, d as fr, bG as pr, bH as _r, bI as Cr, bJ as Tr, e as vr, bK as Ir, bL as Sr, bM as Mr, bN as hr, bO as Dr, bP as Ur, bQ as Or, bR as Rr, bS as Pr, bT as Fr, bU as Gr, bV as Br, bW as yr, bX as Nr, bY as xr, bZ as Vr, b_ as Yr, b$ as kr } from "../chunks/main-layout.BqLTYqar.js";
import { s as c } from "../chunks/adaptive-tags-runtime.Cka5EKuv.js";
import { A as Kr, V as Xr, c as Hr, a as Wr, b as $r } from "../chunks/adaptive-tags-runtime.Cka5EKuv.js";
import { g as qr, i as zr, v as Zr, a as Jr } from "../chunks/svga.DC02l1-t.js";
import { I as ai, U as ei, c as si, a as ti, g as ri, b as ii, d as oi, e as ni, r as li, f as gi, u as ui, v as di, h as Li, i as ci, j as Ai, k as Ei, l as bi } from "../chunks/upload.Ne4Xd5tE.js";
import { B as fi, E as pi, b as _i, g as Ci, p as Ti } from "../chunks/columns.qsOqR_3f.js";
import { s as A, t as E } from "../chunks/utils.Bs5D6gUq.js";
import { G as Ii } from "../chunks/gift-state.Bpr3m8GH.js";
import { g as Mi } from "../chunks/columns.DXZISpo3.js";
import { b as Di, C as Ui, a as Oi, M as Ri, g as Pi } from "../chunks/constants.0sqSRoRZ.js";
import { P as Gi } from "../chunks/PreviewUrlController.D2lJw03i.js";
import { g as yi } from "../chunks/columns.DtUarMJr.js";
async function p(a) {
  return { liveInfo: await u(a) };
}
function _(a) {
  return !a || !a.stats ? { stats: null } : { stats: a.stats };
}
async function C(a) {
  const { liveId: e, mute: s } = a;
  s ? await d(e, ["All_Member"], 0) : await L(e, ["All_Member"]);
}
async function T(a) {
  await g(a);
}
function v(a) {
  return a ? !a.endedAt : !1;
}
function I(a, e) {
  return e ? e.anchor.userId === a : !1;
}
function S(a) {
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
function h(a) {
  return o(a);
}
function D(a) {
  return a ? a.endedAt && a.stats?.duration ? a.stats.duration : a.createdAt ? Math.floor(Date.now() / 1e3) - a.createdAt : 0 : 0;
}
class U {
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
      l(0, this.intervalMs),
      // switchMap: 若回调未完成时新一轮 timer 触发，自动取消旧请求
      c(() => {
        try {
          const e = this.callback();
          return e instanceof Promise ? r(e) : r(Promise.resolve(e));
        } catch {
          return r(Promise.resolve());
        }
      }),
      // stop() 立即终止
      E(this.stop$),
      A()
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
}, R = {
  viewBox: "0 0 24 24",
  path: "M12 11V17M12 7V7.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
  strokeWidth: 2
}, P = {
  viewBox: "0 0 24 24",
  path: "M6 9L12 15L18 9",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
export {
  Oe as ANCHOR_ID_MAX_BYTES,
  O as ARROW_LEFT_ICON,
  Kr as AdaptiveTagRuntime,
  B as Aegis,
  Re as BANNED_LIST_PAGE_SIZE,
  fi as BASIC_EMOJI,
  Di as CATEGORY_DESC_MAX_BYTES,
  Ui as CATEGORY_ID_MAX_BYTES,
  Oi as CATEGORY_NAME_MAX_BYTES,
  P as CHEVRON_DOWN_ICON,
  ia as CORE_DEFAULT_BRAND,
  oa as CORE_DEFAULT_FEATURES,
  na as CORE_DEFAULT_MENUS,
  la as CREDENTIAL_KEYS,
  Pe as CUSTOM_INFO_LIMITS,
  Fe as ClientCommonError,
  Ge as DEFAULT_BAN_DURATION,
  Be as DEFAULT_MAX_SEAT_COUNT,
  ye as DEFAULT_MUTE_DURATION,
  Ne as DEFAULT_SEAT_TEMPLATE,
  xe as DEFAULT_SORT_OPTIONS,
  ga as DIALOG_WIDTH,
  Ve as DeviceError,
  pi as EMOJI_BASE_URL,
  Ye as ErrorCode,
  ke as GIFT_CATEGORIES_CACHE_KEY,
  we as GIFT_DESC_MAX_BYTES,
  Ke as GIFT_EXT_MAX_BYTES,
  Xe as GIFT_ID_MAX_BYTES,
  He as GIFT_NAME_MAX_BYTES,
  We as GIFT_SEARCH_MAX_BYTES,
  $e as GiftCategoryController,
  je as GiftConfigController,
  Ii as GiftStateManager,
  ua as I18N,
  R as INFO_CIRCLE_ICON,
  ai as ImageUploadResolveError,
  qe as LANDSCAPE_COVER_ASPECT_RATIO,
  ze as LANG_CODE_TO_KEY,
  Ze as LANG_CONFIG_KEYS,
  Je as LANG_MAP,
  Qe as LIVE_ID_PREFIX,
  as as LIVE_LIST_CURSOR_STORAGE_KEY,
  es as LIVE_LIST_PAGE_SIZE,
  ss as LIVE_LIST_PAGE_STORAGE_KEY,
  ts as LIVE_LIST_SEARCH_MAX_BYTES,
  rs as LIVE_SEARCH_MAX_BYTES,
  is as LIVE_TITLE_MAX_BYTES,
  da as LOGO_SVG_DATA_URI,
  U as LiveDataPoller,
  os as LiveError,
  ns as LiveListCache,
  ls as LiveListController,
  gs as LiveListPagination,
  La as LiveManagerError,
  us as LiveMonitorCore,
  ds as LiveUserError,
  y as Logger,
  Ri as MAX_CATEGORY_COUNT,
  ca as MENU_ITEM_LABELS,
  Aa as MENU_KEYS,
  Ea as MOCK_VIDEO_POSTER_FALLBACK,
  Ls as MODERATION_DEFAULT_MINUTES,
  cs as MODERATION_PAGE_SIZE,
  As as MUTED_LIST_PAGE_SIZE,
  Es as ObjectURLManager,
  ba as PAGE_TITLE_KEYS,
  bs as PAGINATION_DEFAULTS,
  ms as PORTRAIT_COVER_ASPECT_RATIO,
  fs as PreloadError,
  Gi as PreviewUrlController,
  ps as RestApiError,
  _s as SEAT_TEMPLATE_OPTIONS,
  Cs as SeatPermissionError,
  Ts as ServerError,
  ei as UrlValidationController,
  Xr as ViolationLabelsPoller,
  vs as addLiveAdmin,
  ma as apiError,
  Is as approveTextModerationItems,
  Ss as banMember,
  fa as batchGetUserProfilePortrait,
  Ms as buildCreateLiveParams,
  hs as buildGiftSubmitPayload,
  Ds as buildLiveId,
  Us as buildLiveRowActions,
  Os as buildObsModalState,
  _i as buildPageNumbers,
  Rs as bypassCorrectionKeyword,
  Ps as cacheGiftCategories,
  D as calculateDuration,
  Fs as calculateOffset,
  Gs as calculatePageAfterDelete,
  Bs as calculatePageRange,
  ys as calculateTotalPages,
  Ns as canGoToLiveListPage,
  si as canvasToBlob,
  pa as checkServerConfig,
  xs as cleanupExpiredModerationLocalDeletions,
  Hr as clearAdaptiveTagCache,
  Vs as clearAdminCache,
  _a as clearCache,
  Ca as clearCredentials,
  Ys as collectValidCustomInfo,
  Wr as computeAdaptiveTags,
  $r as computeAdaptiveTagsBatch,
  ks as computeModerationStartTime,
  Ta as configureLiveManager,
  ws as configureModerationLocalDeletion,
  Ks as consumeCachedGiftCategories,
  Xs as convertGiftCategoriesToCategoryItems,
  Hs as copyText,
  Ws as createDebounce,
  $s as createDefaultCreateLiveFormData,
  js as createDefaultEditLiveFormData,
  qs as createDefaultGiftLangConfig,
  zs as createDragDropHandler,
  va as createErrorHandler,
  Zs as createLiveListCursorMap,
  Ia as createLiveManagerAppConfig,
  N as createLogger,
  Js as createPreviewUrl,
  ti as cropCanvasToBlob,
  Qs as customInfoRecordToList,
  at as dedupeById,
  Sa as defaultAvatarUrl,
  Ma as defaultCoverUrl,
  ha as del,
  et as detectImageAspectRatio,
  x as disableAutoUpdateUin,
  Da as enResource,
  V as enableAutoUpdateUin,
  T as endLive,
  st as exitFullScreen,
  tt as extractFileFromDragEvent,
  _ as extractLiveStats,
  rt as fetchBannedList,
  p as fetchLiveDetail,
  it as fetchLiveListPage,
  ot as fetchMutedList,
  nt as filterDeletedModerationItems,
  lt as filterGiftListByKeyword,
  gt as filterLiveList,
  ut as filterObsRobots,
  dt as filterSelectedIds,
  Ua as findLocalizedValues,
  h as formatGiftCount,
  M as formatLikeCount,
  S as formatLiveDuration,
  Lt as formatLiveListTime,
  ct as formatModerationTime,
  At as formatRemainingTime,
  Et as formatTime,
  o as formatViewerCount,
  Oa as get,
  Ra as getActiveAppConfig,
  Pa as getActiveBrandConfig,
  bt as getActiveDeletedModerationIdCount,
  mt as getActiveDeletedModerationIds,
  ft as getAdminList,
  Y as getAegis,
  Fa as getApiLanguage,
  Ga as getAuthToken,
  pt as getBannedMemberList,
  _t as getByteLength,
  Pi as getCategoryColumnLayouts,
  Ba as getCoreRouteFeature,
  Ct as getCoverAspectRatio,
  ya as getCredentials,
  ri as getCroppedImg,
  Na as getCurrentApiLanguageCode,
  xa as getCurrentDomain,
  Va as getCurrentLanguage,
  Ya as getCurrentUserId,
  ka as getCurrentUserName,
  wa as getCurrentUserSig,
  k as getDefaultAuthState,
  Ka as getDefaultLanguage,
  Xa as getDefaultLanguageBySdkAppId,
  Ha as getDefaultRoutePath,
  Tt as getDeletedCustomInfoKeys,
  ii as getEffectiveUploadEnabled,
  Wa as getErrorCategory,
  $a as getErrorInfo,
  ja as getErrorLocale,
  qa as getErrorMessage,
  vt as getFallbackInitial,
  za as getFormLabelWidth,
  Mi as getGiftColumnLayouts,
  It as getGiftLangConfigFromLanguageList,
  St as getGiftLangEditFormFromLanguageList,
  w as getGlobalLogLevel,
  Za as getHttpClient,
  Mt as getInteractionModerationList,
  ht as getLangCode,
  Dt as getLangInfo,
  Ut as getLangKeyByCode,
  Ot as getLangLabel,
  yi as getLiveListColumnsMeta,
  Rt as getLiveListPageAfterDelete,
  Pt as getLiveViolationLabelsBatch,
  Ja as getMenuKeyFromPath,
  Ft as getMessages,
  Ci as getModerationColumnLayouts,
  Gt as getModerationLocalDeletionConfig,
  Bt as getMuteStatus,
  yt as getMutedMemberList,
  Nt as getObsRobotId,
  xt as getPageSize,
  Qa as getRouteTitleKey,
  ae as getSavedLanguage,
  ee as getSdkAppId,
  Vt as getSeatTemplateOption,
  qr as getSvgaParserIfInited,
  oi as getUploadConfig,
  ni as getUploadErrorMessage,
  se as getUserProfilePortrait,
  K as initAegis,
  te as initHttpClient,
  zr as initSvgaParser,
  Yt as isAdminUser,
  X as isAegisInited,
  kt as isAllSelected,
  I as isAnchor,
  wt as isAnchorUser,
  Kt as isAudioSeatTemplate,
  Xt as isBanned,
  Ht as isCachedAdmin,
  re as isClientError,
  ie as isCoreRouteEnabled,
  Wt as isCustomInfoKeyMissing,
  $t as isExpired,
  jt as isGiftSearchInputTooLong,
  oe as isLeavingLivePage,
  v as isLiveOngoing,
  qt as isLiveSearchInputTooLong,
  ne as isLoggedIn,
  zt as isMuted,
  Zt as isObsRobot,
  le as isProxyMode,
  ge as isRestApiError,
  ue as isServerConfigured,
  de as isServerConfiguredMode,
  Le as isServerError,
  ce as isSuccess,
  Jt as isSvgaFile,
  Qt as isSvgaUrl,
  ar as isVideoFile,
  er as isVideoUrl,
  sr as loadModerationList,
  H as logger,
  Ae as login,
  W as measureAndReport,
  tr as modifyAdmin,
  C as muteAll,
  rr as muteMember,
  ir as muteUser,
  or as normalizeGiftSearchKeyword,
  nr as parseCustomInfo,
  Ti as parseTextWithEmoji,
  Ee as performLogout,
  be as post,
  lr as preventDefaultDrag,
  me as put,
  gr as readFileAsDataURL,
  ur as recordDeletedModerationIds,
  dr as remapCategoryListByLanguage,
  Lr as remapGiftListByLanguage,
  cr as replacePreviewUrl,
  $ as reportAppInit,
  j as reportBusinessOp,
  q as reportCapability,
  z as reportEvent,
  Z as reportFeatureUse,
  J as reportPageView,
  Q as reportTime,
  fe as request,
  pe as resolveAccount,
  Ar as resolveAnchorAvatarUrl,
  Er as resolveAnchorDisplayName,
  li as resolveImageUploadUrl,
  gi as resolveMultipleImageUploads,
  br as resolvePlayerAccount,
  mr as restoreLiveListPaginationState,
  fr as revokePreviewUrl,
  pr as safelyParse,
  _e as saveCredentials,
  _r as saveLiveListPaginationState,
  Cr as searchLiveById,
  Tr as sendCustomMessage,
  vr as sendMessage,
  Ir as sendViolationWarning,
  Sr as sendViolationWarningQuick,
  Ce as setActiveBrandConfig,
  aa as setAegisUin,
  ea as setAuthStoreAdapter,
  Te as setDocumentLanguage,
  ve as setErrorLocale,
  Ie as setErrorLocaleProvider,
  Mr as setFullScreen,
  sa as setGlobalLogLevel,
  hr as setMonitorNickname,
  Dr as setMuteAll,
  Se as setServerConfigured,
  Me as setUserProfileRole,
  Ur as setupObsStreamingForLive,
  Or as sortLiveList,
  Rr as toBoolean,
  Pr as toNumber,
  he as toggleLanguage,
  Fr as toggleSelectAll,
  Gr as toggleSelectOne,
  Br as truncateToMaxBytes,
  yr as unbanMember,
  Nr as uniqueIds,
  xr as unmuteMember,
  Vr as unmuteUser,
  ta as updateUinFromSdkAppId,
  ui as uploadImage,
  Yr as validateCustomInfo,
  di as validateFileLoad,
  Li as validateFileSize,
  ci as validateFileType,
  Ai as validateImageFile,
  Ei as validateImageUrl,
  kr as validatePageNumber,
  Zr as validateSvgaFile,
  Jr as validateSvgaUrl,
  bi as validateVideoFile,
  De as zhResource
};
