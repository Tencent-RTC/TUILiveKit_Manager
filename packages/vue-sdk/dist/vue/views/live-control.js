import { defineComponent as se, openBlock as v, createElementBlock as M, toDisplayString as c, createCommentVNode as K, resolveComponent as ge, createElementVNode as i, createVNode as g, unref as e, withCtx as A, createTextVNode as V, Fragment as Be, createBlock as G, computed as $, ref as I, h as Se, watch as ve, onUnmounted as Le, Teleport as Xe, normalizeStyle as Qe, renderList as Ze, onMounted as _t, withDirectives as dt, vShow as ut, withModifiers as sn, nextTick as Pe, mergeProps as vt, normalizeClass as ln, reactive as ze } from "vue";
import { useRoute as rn, useRouter as cn } from "vue-router";
import { Tooltip as Ie, MessagePlugin as S } from "tdesign-vue-next";
import { useUIKit as me } from "@tencentcloud/uikit-base-component-vue3";
import { LiveView as dn, useLiveAudienceState as Ke, LiveAudienceList as un, useLoginState as vn, useLiveListState as mn, useLivePlayerState as fn } from "tuikit-atomicx-vue3";
import { _ as Ct } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.iwDk4NW9.js";
import { ArrowLeftIcon as gn, NotificationIcon as bn, StopCircleIcon as hn, CheckCircleIcon as qe, ChatOffIcon as Nt, UserCheckedIcon as Tt, UserBlockedIcon as Lt, MoreIcon as En, InfoCircleIcon as Te, CloseCircleIcon as In, RefreshIcon as _n, ChevronDownIcon as mt } from "tdesign-icons-vue-next";
import { c as je } from "../../chunks/logger.DCFRj533.js";
import { I as t, a3 as Cn, f as Nn, q as Z, l as Mt, k as ft, O as Tn, g as Ln, a9 as Mn, s as yn } from "../../chunks/layout.DppKPdLU.js";
import { bg as An, b8 as xe, bb as gt, l as On, D as Sn, bN as pn, bE as Rn, a6 as wn, aj as Dn, bX as Ge, bc as Un, bD as bt, bC as ht, aO as kn, Y as We, ao as $n, aI as xn, aB as Et, aR as Bn, bK as Pn, ah as Fn } from "../../chunks/main-layout.BqLTYqar.js";
import { BarrageList as Vn, BarrageInput as Gn, LiveListEvent as Wn } from "tuikit-atomicx-vue3/live";
import { _ as et } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.BUqtwIhL.js";
import { c as Kn, i as qn } from "../../chunks/user-action-dropdown.8c9nzcrX.js";
import { a as tt, c as yt } from "../../chunks/chat.BW03hVL7.js";
import { u as jn } from "../../chunks/gift.C2r8tUnB.js";
import "../../chunks/useAsyncAction.UFjlzk-_.js";
import { p as Hn, b as Yn, g as zn } from "../../chunks/columns.qsOqR_3f.js";
import { a as nt, _ as Jn } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import { u as Ye } from "../../chunks/useConfirmAction.D59ibI7L.js";
import "../../chunks/action-buttons.ChAJrOyM.js";
import { _ as Xn } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const Qn = { class: "toast-area" }, Zn = {
  key: 0,
  class: "status-success"
}, ea = {
  key: 1,
  class: "status-error"
}, ta = /* @__PURE__ */ se({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(a) {
    return (r, d) => (v(), M("div", Qn, [
      a.successMsg ? (v(), M("div", Zn, c(a.successMsg), 1)) : K("", !0),
      a.errorMsg ? (v(), M("div", ea, c(a.errorMsg), 1)) : K("", !0)
    ]));
  }
}), na = { class: "live-control-navbar" }, aa = { class: "nav-left" }, oa = { class: "nav-right" }, ia = /* @__PURE__ */ se({
  __name: "NavBar",
  props: {
    handleLeaveLive: { type: Function },
    handleViolationWarning: { type: Function },
    handleForceStopLive: { type: Function },
    disabled: { type: Boolean }
  },
  setup(a) {
    const { t: r } = me();
    return (d, o) => {
      const u = ge("t-button");
      return v(), M("header", na, [
        i("div", aa, [
          g(u, {
            variant: "outline",
            shape: "circle",
            class: "back-btn",
            onClick: a.handleLeaveLive,
            title: e(r)(e(t).BACK_TO_LIST)
          }, {
            icon: A(() => [
              g(e(gn), {
                "fill-color": "transparent",
                "stroke-color": "currentColor",
                "stroke-width": 2
              })
            ]),
            _: 1
          }, 8, ["onClick", "title"]),
          i("h1", null, c(e(r)(e(t).LIVE_DETAILS)), 1)
        ]),
        i("div", oa, [
          g(u, {
            variant: "text",
            theme: "warning",
            disabled: a.disabled,
            onClick: a.handleViolationWarning
          }, {
            icon: A(() => [
              g(e(bn))
            ]),
            default: A(() => [
              V(" " + c(e(r)(e(t).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "onClick"]),
          g(u, {
            variant: "text",
            theme: "danger",
            disabled: a.disabled,
            onClick: a.handleForceStopLive
          }, {
            icon: A(() => [
              g(e(hn))
            ]),
            default: A(() => [
              V(" " + c(e(r)(e(t).FORCE_STOP)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ])
      ]);
    };
  }
}), sa = { class: "video-monitor-area" }, la = { class: "live-header-external" }, ra = { class: "live-title-text" }, ca = { class: "video-stage" }, da = { class: "player-container" }, ua = {
  key: 0,
  class: "mock-cover-preview"
}, va = ["src"], ma = {
  key: 2,
  class: "live-state-overlay live-state-overlay--ended"
}, fa = { class: "live-state-overlay-content" }, ga = ["src"], ba = {
  class: "live-state-overlay-title",
  style: {
    color: "rgba(0, 0, 0, 0.55)",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px"
  }
}, ha = /* @__PURE__ */ se({
  __name: "VideoMonitor",
  props: {
    liveInfo: {},
    liveAnchorAvatar: {},
    liveAnchorName: {},
    liveEndedOverlayVisible: { type: Boolean },
    currentLive: {},
    sdkReady: { type: Boolean },
    isMockMode: { type: Boolean },
    liveControlSlots: {},
    handleLeaveLive: { type: Function }
  },
  setup(a) {
    const { t: r } = me();
    function d(o) {
      const u = o.target;
      u.src = Cn;
    }
    return (o, u) => (v(), M("section", sa, [
      g(Ct, {
        "slot-component": a.liveControlSlots?.beforeLiveInfo,
        "slot-props": { liveInfo: a.liveInfo }
      }, null, 8, ["slot-component", "slot-props"]),
      i("div", la, [
        g(et, {
          "class-name": "anchor-avatar",
          src: a.liveAnchorAvatar,
          name: a.liveAnchorName,
          title: a.liveAnchorName
        }, null, 8, ["src", "name", "title"]),
        i("span", ra, c(a.liveEndedOverlayVisible ? e(r)(e(t).LIVE_ENDED) : a.currentLive?.liveName || a.liveInfo?.liveName || e(r)(e(t).LOADING)), 1)
      ]),
      i("div", ca, [
        i("div", da, [
          a.isMockMode ? (v(), M(Be, { key: 0 }, [
            a.liveInfo?.coverUrl ? (v(), M("div", ua, [
              i("img", {
                src: a.liveInfo.coverUrl,
                alt: "cover",
                class: "mock-cover-img",
                onError: d
              }, null, 40, va)
            ])) : K("", !0)
          ], 64)) : a.sdkReady ? (v(), G(e(dn), { key: 1 })) : K("", !0),
          a.liveEndedOverlayVisible ? (v(), M("div", ma, [
            i("div", fa, [
              i("img", {
                src: e(Kn),
                alt: "",
                class: "live-state-overlay-icon"
              }, null, 8, ga),
              i("div", ba, c(e(r)(e(t).LIVE_ENDED)), 1)
            ])
          ])) : K("", !0)
        ])
      ])
    ]));
  }
}), Ea = { class: "message-list-scroll-area barrage-list-wrapper" }, Ia = 12 * 1024, _a = /* @__PURE__ */ se({
  __name: "MessageList",
  props: {
    liveId: { default: "" },
    anchorUserId: { default: "" },
    onMuteUser: {},
    onBanUser: {},
    mutedList: { default: () => [] },
    bannedList: { default: () => [] },
    currentLive: {},
    roomJoined: { type: Boolean }
  },
  setup(a) {
    const r = je("MessageList"), { t: d } = me(), { giftList: o, fetchGiftList: u } = jn();
    u().catch(() => {
    });
    const h = a, { currentLive: m } = tt(), { audienceList: s, disableSendMessage: O } = Ke(), _ = $(() => h.currentLive || m.value), y = I(!1), x = I({ top: 0, left: 0 }), N = I(null), te = I(null), j = I(null), R = I(null), B = (E) => s.value.find((k) => k.userId === E), X = (E) => {
      const k = B(E);
      if (k)
        return k.isMessageDisabled === !0;
      const W = h.mutedList.find((P) => P.userId === E);
      return W ? W.endTime > Date.now() / 1e3 : !1;
    }, Q = (E) => {
      const k = h.bannedList.find((W) => W.userId === E);
      return k ? k.endTime > Date.now() / 1e3 : !1;
    }, z = (E, k) => {
      if (E.preventDefault(), E.stopPropagation(), Number(k.sender.userRole) !== 2 || An(h.liveId || "", k.sender.userId))
        return;
      const P = E.target.closest(".message-item");
      if (!P) return;
      const D = P.getBoundingClientRect(), ce = D.bottom + 4, F = Math.min(
        D.left,
        window.innerWidth - 150
      );
      x.value = { top: ce, left: Math.max(0, F) }, N.value = k, y.value = !0;
    }, H = () => {
      if (N.value && h.onBanUser) {
        const E = N.value.sender.userId;
        if (E === xe(_.value?.liveOwner?.userId || "")) {
          y.value = !1, N.value = null;
          return;
        }
        if (gt(E, s.value)) {
          y.value = !1, N.value = null;
          return;
        }
        const k = N.value.sender.userName || N.value.sender.nameCard || N.value.sender.userId, W = Q(E);
        h.onBanUser(E, k, W);
      }
      y.value = !1, N.value = null;
    }, re = async () => {
      if (!N.value) return;
      const E = N.value.sender.userId;
      if (E === xe(_.value?.liveOwner?.userId || "")) {
        y.value = !1, N.value = null;
        return;
      }
      if (gt(E, s.value)) {
        y.value = !1, N.value = null;
        return;
      }
      const k = N.value.sender.userName || N.value.sender.nameCard || N.value.sender.userId, W = X(E);
      try {
        await O({ userId: E, isDisable: !W }), r.info("muteOperation", W ? "解除禁言成功" : "禁言成功");
      } catch (P) {
        r.error("SDK 禁言失败，使用备用方法", "", P), h.onMuteUser && h.onMuteUser(E, k, W);
      }
      y.value = !1, N.value = null;
    }, fe = se({
      props: {
        message: {
          type: Object,
          required: !0
        },
        isLastInChunk: {
          type: Boolean,
          default: !0
        },
        style: {
          type: Object,
          default: () => ({})
        }
      },
      setup(E) {
        const k = E.message.sender.nameCard || E.message.sender.userName || E.message.sender.userId, W = E.message.sender.userId === _.value?.liveOwner?.userId;
        let P;
        if (E.message.messageType === 0)
          P = E.message.textContent || "";
        else if (E.message.businessId === "gift" && E.message.data)
          try {
            const F = JSON.parse(E.message.data), ae = F.giftName || "", ee = F.giftId;
            if (ee) {
              const T = o.value.find((q) => q.id === ee);
              T?.languageList ? P = Nn(T.languageList)?.name || ae : P = ae;
            } else
              P = ae;
          } catch {
            P = E.message.data || "";
          }
        else
          P = E.message.data || "";
        const D = Hn(P), ce = () => D.map((F, ae) => F.type === "emoji" ? Se("img", {
          key: ae,
          class: "message-emoji",
          src: F.src,
          alt: F.key
        }) : Se("span", { key: ae, class: "message-text" }, F.text));
        return () => Se("div", {
          class: ["message-item", W ? "host" : ""],
          style: E.style,
          onContextMenu: (F) => z(F, E.message)
        }, [
          // 主播标识
          W ? Se("span", { class: "message-badge" }, d(t.HOST)) : null,
          // 昵称
          Se("span", { class: "message-username", onClick: (F) => z(F, E.message) }, `${k}: `),
          // 消息内容
          Se("span", { class: "message-content" }, ce())
        ]);
      }
    }), ne = (E) => {
      j.value && j.value.contains(E.target) || (y.value = !1, N.value = null);
    };
    return ve(y, (E) => {
      E ? document.addEventListener("mousedown", ne) : document.removeEventListener("mousedown", ne);
    }), Le(() => {
      document.removeEventListener("mousedown", ne);
    }), (E, k) => (v(), M("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: te
    }, [
      i("div", Ea, [
        g(e(Vn), {
          ref_key: "barrageListRef",
          ref: R,
          Message: e(fe)
        }, null, 8, ["Message"])
      ]),
      a.roomJoined ? (v(), G(e(Gn), {
        key: 0,
        placeholder: e(d)(e(t).ENTER_MESSAGE_TO_SEND_AS_ADMIN),
        disabled: !h.liveId,
        maxLength: Ia,
        autoFocus: !1
      }, null, 8, ["placeholder", "disabled"])) : K("", !0),
      (v(), G(Xe, { to: "body" }, [
        y.value && N.value ? (v(), M("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: j,
          class: "user-action-dropdown",
          style: Qe({
            position: "fixed",
            top: `${x.value.top}px`,
            left: `${x.value.left}px`
          })
        }, [
          i("button", {
            class: "dropdown-item",
            onClick: re
          }, [
            X(N.value.sender.userId) ? (v(), G(e(qe), { key: 0 })) : (v(), G(e(Nt), { key: 1 })),
            i("span", null, c(X(N.value.sender.userId) ? e(d)(e(t).UNMUTE) : e(d)(e(t).MUTE)), 1)
          ]),
          i("button", {
            class: "dropdown-item danger",
            onClick: H
          }, [
            Q(N.value.sender.userId) ? (v(), G(e(Tt), { key: 0 })) : (v(), G(e(Lt), { key: 1 })),
            i("span", null, c(Q(N.value.sender.userId) ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
          ])
        ], 4)) : K("", !0)
      ]))
    ], 512));
  }
}), Ca = ["innerHTML"], Je = /* @__PURE__ */ se({
  __name: "ConfirmDialog",
  props: {
    visible: { type: Boolean },
    title: {},
    content: {},
    confirmText: {},
    loading: { type: Boolean },
    onConfirm: { type: Function },
    onClose: { type: Function }
  },
  emits: ["update:visible"],
  setup(a, { emit: r }) {
    const { t: d } = me(), o = a, u = r, h = $({
      get: () => o.visible,
      set: (O) => u("update:visible", O)
    }), m = () => {
      o.loading || o.onConfirm();
    }, s = () => {
      o.onClose();
    };
    return (O, _) => {
      const y = ge("t-dialog");
      return v(), G(y, {
        visible: h.value,
        "onUpdate:visible": _[0] || (_[0] = (x) => h.value = x),
        header: e(d)(a.title),
        "confirm-btn": { content: e(d)(a.confirmText) || e(d)(e(t).CONFIRM), theme: "primary", shape: "round", loading: a.loading },
        "cancel-btn": { content: e(d)(e(t).CANCEL), shape: "round", disabled: a.loading },
        onConfirm: m,
        onClose: s,
        onCancel: s
      }, {
        default: A(() => [
          i("p", {
            innerHTML: e(d)(a.content)
          }, null, 8, Ca)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
}), Na = { class: "member-list-panel-modal" }, Ta = {
  key: 0,
  class: "member-list-empty"
}, La = {
  key: 1,
  class: "member-list-empty"
}, Ma = {
  key: 2,
  class: "member-list-table"
}, ya = { class: "member-table-user" }, Aa = { class: "member-table-user-cell" }, Oa = { class: "member-table-user-name" }, Sa = { class: "member-table-time" }, pa = { class: "member-table-action" }, Ra = {
  key: 0,
  class: "list-action-button",
  disabled: ""
}, wa = /* @__PURE__ */ se({
  __name: "MutedModal",
  props: {
    visible: { type: Boolean },
    mutedList: {},
    memberListLoading: { type: Boolean },
    unmutingUserId: {},
    getUserAvatar: { type: Function },
    getUserNameFromCache: { type: Function },
    getMutedMemberActions: { type: Function }
  },
  emits: ["update:visible"],
  setup(a, { emit: r }) {
    const { t: d } = me(), o = a, u = r, h = $({
      get: () => o.visible,
      set: (m) => u("update:visible", m)
    });
    return (m, s) => {
      const O = ge("t-dialog");
      return v(), G(O, {
        visible: h.value,
        "onUpdate:visible": s[0] || (s[0] = (_) => h.value = _),
        header: e(d)(e(t).MUTED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: A(() => [
          i("div", Na, [
            a.memberListLoading ? (v(), M("div", Ta, c(e(d)(e(t).LOADING)), 1)) : a.mutedList.length === 0 ? (v(), M("div", La, c(e(d)(e(t).NO_MUTED_MEMBERS)), 1)) : (v(), M("table", Ma, [
              i("thead", null, [
                i("tr", null, [
                  i("th", null, c(e(d)(e(t).USER)), 1),
                  i("th", null, c(e(d)(e(t).UNMUTE_TIME)), 1),
                  i("th", null, c(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              i("tbody", null, [
                (v(!0), M(Be, null, Ze(a.mutedList, (_) => (v(), M("tr", {
                  key: _.userId
                }, [
                  i("td", ya, [
                    i("div", Aa, [
                      g(et, {
                        "class-name": "member-table-avatar",
                        src: a.getUserAvatar(_.userId),
                        name: a.getUserNameFromCache(_.userId)
                      }, null, 8, ["src", "name"]),
                      g(e(Ie), {
                        content: a.getUserNameFromCache(_.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: A(() => [
                          i("span", Oa, c(a.getUserNameFromCache(_.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  i("td", Sa, c(_.endTime > 0 ? new Date(_.endTime * 1e3).toLocaleString() : "-"), 1),
                  i("td", pa, [
                    a.unmutingUserId === _.userId ? (v(), M("button", Ra, c(e(d)(e(t).UNMUTING)), 1)) : (v(), G(nt, {
                      key: 1,
                      actions: a.getMutedMemberActions(_.userId)
                    }, null, 8, ["actions"]))
                  ])
                ]))), 128))
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Da = { class: "member-list-panel-modal" }, Ua = {
  key: 0,
  class: "member-list-empty"
}, ka = {
  key: 1,
  class: "member-list-empty"
}, $a = {
  key: 2,
  class: "member-list-table"
}, xa = { class: "member-table-user" }, Ba = { class: "member-table-user-cell" }, Pa = { class: "member-table-user-name" }, Fa = { class: "member-table-time" }, Va = { class: "member-table-action" }, Ga = {
  key: 0,
  class: "list-action-button",
  disabled: ""
}, Wa = /* @__PURE__ */ se({
  __name: "BannedModal",
  props: {
    visible: { type: Boolean },
    bannedList: {},
    memberListLoading: { type: Boolean },
    unbanningUserId: {},
    getUserAvatar: { type: Function },
    getUserNameFromCache: { type: Function },
    getBannedMemberActions: { type: Function }
  },
  emits: ["update:visible"],
  setup(a, { emit: r }) {
    const { t: d } = me(), o = a, u = r, h = $({
      get: () => o.visible,
      set: (m) => u("update:visible", m)
    });
    return (m, s) => {
      const O = ge("t-dialog");
      return v(), G(O, {
        visible: h.value,
        "onUpdate:visible": s[0] || (s[0] = (_) => h.value = _),
        header: e(d)(e(t).BANNED_VIEWERS),
        width: 600,
        footer: !1
      }, {
        default: A(() => [
          i("div", Da, [
            a.memberListLoading ? (v(), M("div", Ua, c(e(d)(e(t).LOADING)), 1)) : a.bannedList.length === 0 ? (v(), M("div", ka, c(e(d)(e(t).NO_BANNED_MEMBERS)), 1)) : (v(), M("table", $a, [
              i("thead", null, [
                i("tr", null, [
                  i("th", null, c(e(d)(e(t).USER)), 1),
                  i("th", null, c(e(d)(e(t).BAN_LIFT_TIME)), 1),
                  i("th", null, c(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              i("tbody", null, [
                (v(!0), M(Be, null, Ze(a.bannedList, (_) => (v(), M("tr", {
                  key: _.userId
                }, [
                  i("td", xa, [
                    i("div", Ba, [
                      g(et, {
                        "class-name": "member-table-avatar",
                        src: a.getUserAvatar(_.userId),
                        name: a.getUserNameFromCache(_.userId)
                      }, null, 8, ["src", "name"]),
                      g(e(Ie), {
                        content: a.getUserNameFromCache(_.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: A(() => [
                          i("span", Pa, c(a.getUserNameFromCache(_.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  i("td", Fa, c(_.endTime > 0 ? new Date(_.endTime * 1e3).toLocaleString() : "-"), 1),
                  i("td", Va, [
                    a.unbanningUserId === _.userId ? (v(), M("button", Ga, c(e(d)(e(t).UNBANNING)), 1)) : (v(), G(nt, {
                      key: 1,
                      actions: a.getBannedMemberActions(_.userId)
                    }, null, 8, ["actions"]))
                  ])
                ]))), 128))
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["visible", "header"]);
    };
  }
}), Ka = { class: "dropdown-header" }, qa = /* @__PURE__ */ se({
  __name: "AudienceDropdown",
  props: {
    visible: { type: Boolean },
    userName: {},
    isMuted: { type: Boolean },
    isBanned: { type: Boolean },
    position: {}
  },
  emits: ["mute", "ban", "close"],
  setup(a, { emit: r }) {
    const { t: d } = me(), o = I(null), u = a, h = r, m = (_) => {
      o.value && !o.value.contains(_.target) && h("close");
    };
    ve(
      () => u.visible,
      (_) => {
        _ ? document.addEventListener("mousedown", m) : document.removeEventListener("mousedown", m);
      }
    ), Le(() => {
      document.removeEventListener("mousedown", m);
    });
    const s = () => {
      h("mute"), h("close");
    }, O = () => {
      h("ban"), h("close");
    };
    return (_, y) => (v(), G(Xe, { to: "body" }, [
      a.visible ? (v(), M("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: o,
        class: "user-action-dropdown",
        style: Qe({
          position: "fixed",
          top: a.position.y + "px",
          left: a.position.x - 160 + "px"
        })
      }, [
        i("div", Ka, c(a.userName), 1),
        y[0] || (y[0] = i("div", { class: "dropdown-divider" }, null, -1)),
        a.isMuted ? (v(), M("button", {
          key: 0,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(qe)),
          V(" " + c(e(d)(e(t).UNMUTE)), 1)
        ])) : (v(), M("button", {
          key: 1,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(Nt)),
          V(" " + c(e(d)(e(t).MUTE)), 1)
        ])),
        i("button", {
          class: "dropdown-item danger",
          onClick: O
        }, [
          a.isBanned ? (v(), G(e(Tt), { key: 0 })) : (v(), G(e(Lt), { key: 1 })),
          V(" " + c(a.isBanned ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
        ])
      ], 4)) : K("", !0)
    ]));
  }
}), ja = { class: "left-interaction-card" }, Ha = { class: "interaction-tabs-header" }, Ya = { class: "all-mute-control-row" }, za = { class: "all-mute-label" }, Ja = { class: "interaction-body" }, Xa = { class: "chat-stream-sidebar" }, Qa = {
  key: 0,
  class: "all-mute-banner"
}, Za = { class: "audience-tab-wrapper" }, eo = { class: "audience-list-area" }, to = {
  key: 0,
  class: "audience-me-tag"
}, no = {
  key: 1,
  class: "audience-row-actions"
}, ao = {
  key: 0,
  class: "audience-muted-badge"
}, oo = ["title", "disabled", "onClick"], io = { class: "audience-bottom-actions" }, so = ["disabled"], lo = ["disabled"], ro = /* @__PURE__ */ se({
  __name: "InteractionPanel",
  props: {
    liveId: {},
    activeTab: {},
    disabled: { type: Boolean },
    currentUserId: {},
    anchorUserId: {},
    currentLive: {},
    roomJoined: { type: Boolean }
  },
  emits: ["update:activeTab"],
  setup(a, { emit: r }) {
    const d = je("InteractionPanel"), { t: o } = me(), u = a, h = r, m = $({
      get: () => u.activeTab,
      set: (b) => h("update:activeTab", b)
    }), {
      mutedList: s,
      bannedList: O,
      memberLoading: _,
      muteMember: y,
      unmuteMember: x,
      banMember: N,
      unbanMember: te,
      fetchMutedList: j,
      fetchBannedList: R
    } = yt({ liveId: u.liveId, pageSize: 100 }), { updateLive: B } = tt(), { audienceList: X } = Ke(), Q = $(() => u.currentLive?.isMessageDisabled === !0), z = I(!1), H = I(null), re = I(!1);
    function fe(b) {
      H.value = { ...b, visible: !0 };
    }
    function ne() {
      H.value = null, re.value = !1;
    }
    async function E() {
      if (!(!H.value || re.value)) {
        re.value = !0;
        try {
          await H.value.action();
        } catch (b) {
          d.error("confirm action failed:", b);
        } finally {
          re.value = !1, H.value = null;
        }
      }
    }
    function k(b, f, w) {
      if (u.disabled) {
        S.warning(o(t.LIVE_ENDED));
        return;
      }
      const ie = xe(u.anchorUserId);
      if (b !== ie) {
        if (w) {
          x({ memberAccounts: [b] }).then(() => {
            S.success(o(t.USER_ACTION_SUCCESS, { action: o(t.UNMUTE), name: f }));
          }).catch((J) => {
            const L = Z(J).info || J?.message || o(t.UNKNOWN_ERROR);
            S.error(`【${o(t.UNMUTE)}】${o(t.OPERATION_FAILED, { error: L })}`);
          });
          return;
        }
        fe({
          title: o(t.CONFIRM_ACTION_TITLE, { action: o(t.MUTE) }),
          content: o(t.MUTE_CONFIRM_CONTENT, { name: f }),
          confirmText: o(t.CONFIRM),
          action: async () => {
            await y({ memberAccounts: [b], muteTime: On }), S.success(o(t.USER_ACTION_SUCCESS, { action: o(t.MUTE), name: f }));
          }
        });
      }
    }
    function W(b, f, w) {
      if (u.disabled) {
        S.warning(o(t.LIVE_ENDED));
        return;
      }
      const ie = xe(u.anchorUserId);
      if (b !== ie) {
        if (w) {
          te({ memberAccounts: [b] }).then(() => {
            S.success(o(t.USER_ACTION_SUCCESS, { action: o(t.UNBAN), name: f }));
          }).catch((J) => {
            const L = Z(J).info || J?.message || o(t.UNKNOWN_ERROR);
            S.error(`【${o(t.UNBAN)}】${o(t.OPERATION_FAILED, { error: L })}`);
          });
          return;
        }
        fe({
          title: o(t.CONFIRM_ACTION_TITLE, { action: o(t.BAN) }),
          content: o(t.BAN_CONFIRM_CONTENT, { name: f }),
          confirmText: o(t.CONFIRM),
          action: async () => {
            await N({ memberAccounts: [b], duration: Sn }), S.success(o(t.USER_ACTION_SUCCESS, { action: o(t.BAN), name: f }));
          }
        });
      }
    }
    function P(b) {
      if (u.disabled) {
        S.warning(o(t.LIVE_ENDED));
        return;
      }
      const f = !!b;
      if (f !== Q.value) {
        if (!f) {
          z.value = !0, B({ liveId: u.liveId, isMessageDisabled: !1 }).then(() => {
            S.success(o(t.ALL_MEMBER_MUTE_DISABLED));
          }).catch((w) => {
            const ie = Z(w).info || w?.message || o(t.UNKNOWN_ERROR);
            S.error(`【${o(t.ALL_MEMBER_MUTE)}】${o(t.OPERATION_FAILED, { error: ie })}`);
          }).finally(() => {
            z.value = !1;
          });
          return;
        }
        fe({
          title: o(t.ENABLE_ALL_MEMBER_MUTE),
          content: o(t.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT),
          confirmText: o(t.CONFIRM_ENABLE),
          action: async () => {
            z.value = !0;
            try {
              await B({ liveId: u.liveId, isMessageDisabled: !0 }), S.success(o(t.ALL_MEMBER_MUTE_ENABLED));
            } finally {
              z.value = !1;
            }
          }
        });
      }
    }
    const D = I(null);
    function ce(b, f, w) {
      b.stopPropagation();
      const ie = b.currentTarget.getBoundingClientRect();
      D.value = { userId: f, userName: w, x: ie.right, y: ie.bottom + 4 };
    }
    function F() {
      D.value = null;
    }
    function ae() {
      if (!D.value) return;
      const { userId: b, userName: f } = D.value;
      k(b, f, T(b)), F();
    }
    function ee() {
      if (!D.value) return;
      const { userId: b, userName: f } = D.value;
      W(b, f, q(b)), F();
    }
    function T(b) {
      return s.value.some((f) => f.userId === b);
    }
    function q(b) {
      return O.value.some((f) => f.userId === b);
    }
    function Ne(b) {
      const f = X.value.find((w) => w.userId === b);
      if (f && "avatarUrl" in f && typeof f.avatarUrl == "string")
        return f.avatarUrl;
    }
    function pe(b) {
      const f = X.value.find((w) => w.userId === b);
      return f?.userName ? f.userName : b;
    }
    const Y = I(null), _e = I(null);
    async function oe(b) {
      if (u.disabled) {
        S.warning(o(t.LIVE_ENDED));
        return;
      }
      if (!Y.value) {
        Y.value = b, await Pe();
        try {
          await x({ memberAccounts: [b] }), S.success(o(t.USER_ACTION_SUCCESS, { action: o(t.UNMUTE), name: b }));
        } catch (f) {
          const w = Z(f).info || f?.message || o(t.UNKNOWN_ERROR);
          S.error(`【${o(t.UNMUTE)}】${o(t.OPERATION_FAILED, { error: w })}`);
        } finally {
          Y.value = null;
        }
      }
    }
    async function Fe(b) {
      if (u.disabled) {
        S.warning(o(t.LIVE_ENDED));
        return;
      }
      if (!_e.value) {
        _e.value = b, await Pe();
        try {
          await te({ memberAccounts: [b] }), S.success(o(t.USER_ACTION_SUCCESS, { action: o(t.UNBAN), name: b }));
        } catch (f) {
          const w = Z(f).info || f?.message || o(t.UNKNOWN_ERROR);
          S.error(`【${o(t.UNBAN)}】${o(t.OPERATION_FAILED, { error: w })}`);
        } finally {
          _e.value = null;
        }
      }
    }
    function Re(b) {
      return [
        {
          key: "unmute",
          label: o(t.UNMUTE),
          onClick: () => oe(b)
        }
      ];
    }
    function we(b) {
      return [
        {
          key: "unban",
          label: o(t.UNBAN),
          onClick: () => Fe(b)
        }
      ];
    }
    const Me = I(!1), Ce = I(!1);
    function U() {
      j(), Me.value = !0;
    }
    function He() {
      R(), Ce.value = !0;
    }
    let de = null;
    return ve(
      () => u.activeTab,
      (b) => {
        if (b === "audience") {
          j(), R();
          const f = () => {
            document.querySelectorAll(".viewer-name").forEach((ie) => {
              const J = ie, L = J.textContent || "";
              J.title !== L && (J.title = L);
            });
          };
          setTimeout(() => {
            f();
            const w = document.querySelector(".audience-list-area");
            de?.disconnect(), de = null, w && (de = new MutationObserver(f), de.observe(w, { childList: !0, subtree: !0 }));
          }, 100);
        } else
          de?.disconnect(), de = null;
      }
    ), _t(() => {
      u.activeTab === "audience" && (j(), R());
    }), Le(() => {
      de?.disconnect(), de = null;
    }), (b, f) => {
      const w = ge("t-tab-panel"), ie = ge("t-tabs"), J = ge("t-switch");
      return v(), M("div", ja, [
        i("div", Ha, [
          g(ie, {
            modelValue: m.value,
            "onUpdate:modelValue": f[0] || (f[0] = (L) => m.value = L),
            class: "interaction-tabs"
          }, {
            default: A(() => [
              g(w, {
                value: "chat",
                label: e(o)(e(t).MESSAGE_LIST)
              }, null, 8, ["label"]),
              g(w, {
                value: "audience",
                label: e(o)(e(t).AUDIENCE_LIST)
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          i("div", Ya, [
            g(J, {
              value: Q.value,
              disabled: z.value || a.disabled,
              onChange: P
            }, null, 8, ["value", "disabled"]),
            i("span", za, c(e(o)(e(t).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        i("div", Ja, [
          dt(i("div", Xa, [
            Q.value ? (v(), M("div", Qa, [
              f[4] || (f[4] = i("span", { class: "all-mute-banner-icon" }, "!", -1)),
              i("span", null, c(e(o)(e(t).ALL_MEMBER_MUTE_ENABLED_BANNER)), 1)
            ])) : K("", !0),
            g(_a, {
              "live-id": a.liveId,
              "anchor-user-id": a.anchorUserId,
              "muted-list": e(s),
              "banned-list": e(O),
              "current-live": a.currentLive,
              "room-joined": a.roomJoined,
              "on-mute-user": k,
              "on-ban-user": W
            }, null, 8, ["live-id", "anchor-user-id", "muted-list", "banned-list", "current-live", "room-joined"])
          ], 512), [
            [ut, a.activeTab === "chat"]
          ]),
          dt(i("div", Za, [
            i("div", eo, [
              g(e(un), { height: "99%" }, {
                "audience-mark": A(({ audience: L }) => [
                  L.userId === a.currentUserId ? (v(), M("span", to, c(e(o)(e(t).ME)), 1)) : L.userRole !== 0 && L.userId !== e(xe)(a.anchorUserId) ? (v(), M("div", no, [
                    T(L.userId) ? (v(), M("span", ao, c(e(o)(e(t).MUTED)), 1)) : K("", !0),
                    i("button", {
                      class: "audience-more-btn",
                      title: e(o)(e(t).MORE_ACTIONS),
                      disabled: a.disabled,
                      onClick: sn((De) => ce(De, L.userId, L.userName || L.userId), ["stop"])
                    }, [
                      g(e(En))
                    ], 8, oo)
                  ])) : K("", !0)
                ]),
                _: 1
              })
            ]),
            i("div", io, [
              i("button", {
                class: "audience-bottom-btn",
                disabled: a.disabled,
                onClick: U
              }, c(e(o)(e(t).MUTED_VIEWERS)) + " (" + c(e(s).length) + ") ", 9, so),
              i("button", {
                class: "audience-bottom-btn",
                disabled: a.disabled,
                onClick: He
              }, c(e(o)(e(t).BANNED_VIEWERS)) + " (" + c(e(O).length) + ") ", 9, lo)
            ])
          ], 512), [
            [ut, a.activeTab === "audience"]
          ])
        ]),
        H.value ? (v(), G(Je, {
          key: 0,
          visible: H.value.visible,
          "onUpdate:visible": f[1] || (f[1] = (L) => H.value.visible = L),
          title: H.value.title,
          content: H.value.content,
          "confirm-text": H.value.confirmText,
          loading: re.value,
          "on-confirm": E,
          "on-close": ne
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        g(wa, {
          visible: Me.value,
          "onUpdate:visible": f[2] || (f[2] = (L) => Me.value = L),
          "muted-list": e(s),
          "member-list-loading": e(_),
          "unmuting-user-id": Y.value,
          "get-user-avatar": Ne,
          "get-user-name-from-cache": pe,
          "get-muted-member-actions": Re
        }, null, 8, ["visible", "muted-list", "member-list-loading", "unmuting-user-id"]),
        g(Wa, {
          visible: Ce.value,
          "onUpdate:visible": f[3] || (f[3] = (L) => Ce.value = L),
          "banned-list": e(O),
          "member-list-loading": e(_),
          "unbanning-user-id": _e.value,
          "get-user-avatar": Ne,
          "get-user-name-from-cache": pe,
          "get-banned-member-actions": we
        }, null, 8, ["visible", "banned-list", "member-list-loading", "unbanning-user-id"]),
        g(qa, {
          visible: !!D.value,
          "user-name": D.value?.userName || "",
          "is-muted": D.value ? T(D.value.userId) : !1,
          "is-banned": D.value ? q(D.value.userId) : !1,
          position: D.value || { x: 0, y: 0 },
          onMute: ae,
          onBan: ee,
          onClose: F
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"])
      ]);
    };
  }
}), co = { class: "left-content-area" }, It = 5, uo = 2e3, vo = /* @__PURE__ */ se({
  __name: "LiveControlLeftPanel",
  props: {
    liveId: {},
    currentLive: {},
    isMockMode: { type: Boolean },
    liveEndedOverlayVisible: { type: Boolean },
    currentUserId: {},
    activeTab: {},
    videoMonitor: {},
    interaction: {}
  },
  emits: ["update:activeTab", "joined-live", "live-ended"],
  setup(a, { emit: r }) {
    const d = je("LiveControlPanel"), o = a, u = r, { login: h, loginUserInfo: m } = vn(), { joinLive: s, leaveLive: O, subscribeEvent: _, unsubscribeEvent: y } = mn(), { fetchAudienceList: x } = Ke(), { hideControlBar: N, showControlBar: te, setAutoHideDelay: j } = fn();
    function R() {
      try {
        if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
          return "admin";
      } catch {
      }
      return "audience";
    }
    const B = I(!1), X = I(""), Q = I(!1), z = I(""), H = I(!1), re = I(!1), fe = I(!1), ne = I(0), E = R(), k = $(
      () => m.value?.userId || z.value || o.currentUserId || Mt() || ""
    ), W = $(
      () => o.liveEndedOverlayVisible || H.value && !o.currentLive && !o.isMockMode
    );
    function P() {
      const T = Wn;
      return T.onLiveEnded || T.ON_LIVE_ENDED || "";
    }
    const D = P(), ce = () => {
      u("live-ended");
    }, F = async () => {
      if (o.isMockMode) {
        B.value = !0;
        return;
      }
      if (!B.value && !re.value) {
        re.value = !0;
        try {
          let T;
          if (E === "audience" ? (d.info("LiveControlLeftPanel", "Audience mode (internal), creating basic account..."), T = await Rn("audience")) : (d.info("LiveControlLeftPanel", "Admin mode, resolving account..."), T = await Tn()), !T || T.sdkAppId === 0 || !T.userId || !T.userSig) {
            d.warn("LiveControlLeftPanel", "No valid account obtained, will retry"), ae();
            return;
          }
          d.info("LiveControlLeftPanel", "Logging in as:", E, "userId:", T.userId), await h({ sdkAppId: T.sdkAppId, userId: T.userId, userSig: T.userSig }), await Pe(), B.value = !0, z.value = T.userId, ne.value = 0;
        } catch (T) {
          if (T?.code === 2025 || T?.message?.includes("重复登录")) {
            await Pe(), B.value = !0, z.value = z.value || "recovered", ne.value = 0;
            return;
          }
          d.error("LiveControlLeftPanel", "TUIKit login failed:", T), ae();
        } finally {
          re.value = !1;
        }
      }
    }, ae = () => {
      if (ne.value >= It) {
        d.error("LiveControlLeftPanel", `Login failed after ${It} retries, giving up`);
        return;
      }
      const T = uo * (ne.value + 1);
      d.info("LiveControlLeftPanel", `Scheduling login retry #${ne.value + 1} in ${T}ms`), setTimeout(() => {
        !B.value && !o.isMockMode && ne.value++;
      }, T);
    }, ee = async () => {
      if (!(!o.liveId || !o.currentLive || !B.value || X.value === o.liveId) && !fe.value) {
        fe.value = !0;
        try {
          d.info("LiveControlLeftPanel", "Joining live:", o.liveId, "as:", E);
          const T = ft();
          qn.callExperimentalAPI(JSON.stringify({
            api: "setCurrentLanguage",
            params: { language: T === "en-US" ? "en" : T === "zh-CN" ? "zh-Hans" : T }
          })).catch(() => {
          }), await s({ liveId: o.liveId }), X.value = o.liveId, await x().catch((q) => {
            d.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", q);
          }), N(), j(0), !Q.value && _ && D && (d.info("LiveControlLeftPanel", "Subscribing to live ended event:", D), _(D, ce), Q.value = !0), u("joined-live"), console.log("[LiveControlLeftPanel] adding live admin:", z.value, "room:", o.liveId), wn(o.liveId, z.value).catch((q) => {
            console.error("[LiveControlLeftPanel] addLiveAdmin failed:", q), d.warn("LiveControlLeftPanel", "addLiveAdmin failed:", q);
          });
        } catch (T) {
          d.error("LiveControlLeftPanel", "joinLive failed:", T);
        } finally {
          fe.value = !1, H.value = !0;
        }
      }
    };
    return ve(
      () => [o.liveId, o.currentLive, k.value, B.value, ne.value],
      async () => {
        if (!(!o.liveId || !o.currentLive) && (B.value || await F(), !!B.value)) {
          if (!o.isMockMode && E === "audience" && z.value) {
            const T = ft() === "en-US" ? "admin" : "管理员";
            pn(z.value, T).catch((q) => {
              d.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", q);
            });
          }
          await ee();
        }
      },
      { immediate: !0 }
    ), ve(
      () => o.liveId,
      () => {
        X.value = "", H.value = !1;
      }
    ), Le(() => {
      Q.value && y && D && (y(D, ce), Q.value = !1), X.value && O?.().catch?.((T) => {
        d.error("LiveControlLeftPanel", "leaveLive on unmount failed:", T);
      }), te();
    }), (T, q) => (v(), M("div", co, [
      g(ha, vt(a.videoMonitor, {
        "live-ended-overlay-visible": W.value,
        "sdk-ready": B.value
      }), null, 16, ["live-ended-overlay-visible", "sdk-ready"]),
      g(ro, vt(a.interaction, {
        "active-tab": a.activeTab,
        "current-user-id": k.value,
        "onUpdate:activeTab": q[0] || (q[0] = (Ne) => u("update:activeTab", Ne))
      }), null, 16, ["active-tab", "current-user-id"])
    ]));
  }
}), mo = { class: "sidebar-stats-card" }, fo = { class: "stats-card-header" }, go = { class: "stats-header-left" }, bo = { class: "live-status-tag" }, ho = { class: "live-duration-text" }, Eo = { class: "update-time" }, Io = { class: "stat-bar-item" }, _o = { class: "stat-label" }, Co = { class: "stat-value" }, No = { class: "stat-bar-item" }, To = { class: "stat-label" }, Lo = { class: "stat-value" }, Mo = { class: "stat-bar-item" }, yo = { class: "stat-label" }, Ao = { class: "stat-value" }, Oo = { class: "stat-bar-item" }, So = { class: "stat-label" }, po = { class: "stat-value" }, Ro = { class: "stat-bar-item" }, wo = { class: "stat-label" }, Do = { class: "stat-value" }, Uo = { class: "stat-bar-item" }, ko = { class: "stat-label" }, $o = { class: "stat-value" }, xo = { class: "stat-bar-item" }, Bo = { class: "stat-label" }, Po = { class: "stat-value" }, Fo = /* @__PURE__ */ se({
  __name: "StatsCard",
  props: {
    stats: {},
    liveDuration: {},
    updateTimeText: {},
    interactionRate: {},
    formatNumber: { type: Function },
    formatDuration: { type: Function }
  },
  setup(a) {
    const { t: r } = me(), d = I(null);
    let o = null, u = null, h = null;
    const m = (y, x, N) => {
      const te = Array.from({ length: x }, () => 0);
      return y.forEach((j, R) => {
        const B = R % x;
        te[B] = Math.max(te[B], j);
      }), te.reduce((j, R) => j + R, 0) + N * (x - 1);
    }, s = (y) => {
      const x = Array.from(y.querySelectorAll(":scope > .stat-bar-item")), N = document.createElement("div");
      N.style.position = "absolute", N.style.left = "-99999px", N.style.top = "0", N.style.visibility = "hidden", N.style.pointerEvents = "none", N.style.width = "max-content", document.body.appendChild(N);
      const te = x.map((j) => {
        const R = j.cloneNode(!0);
        return R.style.width = "max-content", R.style.maxWidth = "none", N.appendChild(R), Math.ceil(R.getBoundingClientRect().width);
      });
      return N.remove(), te;
    }, O = () => {
      const y = d.value;
      if (!y || y.clientWidth <= 0) return;
      const x = s(y);
      if (!x.length) return;
      const N = parseFloat(getComputedStyle(y).columnGap) || 0, te = y.clientWidth, j = [7, 4, 3, 2, 1].find((R) => m(x, R, N) <= te + 1) || 1;
      y.style.setProperty("--stats-columns", String(j));
    }, _ = () => {
      h !== null && cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        h = null, O();
      });
    };
    return _t(() => {
      Pe(() => {
        const y = d.value;
        y && (o = new ResizeObserver(_), o.observe(y), u = new MutationObserver(_), u.observe(y, { childList: !0, subtree: !0, characterData: !0 }), _());
      });
    }), Le(() => {
      o?.disconnect(), u?.disconnect(), h !== null && (cancelAnimationFrame(h), h = null);
    }), (y, x) => (v(), M("div", mo, [
      i("div", fo, [
        i("div", go, [
          i("h3", null, c(e(r)(e(t).LIVE_DATA_CONTROL)), 1),
          i("span", bo, [
            x[0] || (x[0] = i("span", { class: "live-status-dot" }, null, -1)),
            V(" " + c(e(r)(e(t).LIVE_NOW)) + " ", 1),
            i("span", ho, c(a.formatDuration(a.liveDuration)), 1)
          ])
        ]),
        i("span", Eo, c(e(r)(e(t).UPDATED_AT, { time: a.updateTimeText })), 1)
      ]),
      i("div", {
        ref_key: "statsBarRef",
        ref: d,
        class: "stats-bar-design"
      }, [
        i("div", Io, [
          i("div", _o, [
            V(c(e(r)(e(t).CURRENT_VIEWERS)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).CURRENT_VIEWERS_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Co, c(a.formatNumber(a.stats.onlineCount)), 1)
        ]),
        i("div", No, [
          i("div", To, [
            V(c(e(r)(e(t).COMMENT_COUNT)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).COMMENT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Lo, c(a.stats.totalMsgCount.toLocaleString()), 1)
        ]),
        i("div", Mo, [
          i("div", yo, [
            V(c(e(r)(e(t).COMMENT_USERS)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).COMMENT_USERS_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Ao, c(a.stats.totalViewers.toLocaleString()), 1)
        ]),
        i("div", Oo, [
          i("div", So, [
            V(c(e(r)(e(t).INTERACTION_RATE)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).INTERACTION_RATE_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", po, c(a.interactionRate), 1)
        ]),
        i("div", Ro, [
          i("div", wo, [
            V(c(e(r)(e(t).TOTAL_GIFT_AMOUNT)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).TOTAL_GIFT_AMOUNT_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Do, c(a.stats.totalGiftCoins.toFixed(2)), 1)
        ]),
        i("div", Uo, [
          i("div", ko, [
            V(c(e(r)(e(t).GIFT_COUNT)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).GIFT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", $o, c(a.stats.totalGiftsSent), 1)
        ]),
        i("div", xo, [
          i("div", Bo, [
            V(c(e(r)(e(t).GIFT_SENDERS)) + " ", 1),
            g(e(Ie), {
              content: e(r)(e(t).GIFT_SENDERS_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(Te), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Po, c(a.stats.totalUniqueGiftSenders), 1)
        ])
      ], 512)
    ]));
  }
}), Vo = { class: "moderation-card" }, Go = { class: "moderation-card-header" }, Wo = { class: "moderation-header-left" }, Ko = { key: 0 }, qo = {
  key: 2,
  style: { "font-size": "13px", "margin-left": "8px" }
}, jo = { class: "moderation-toolbar" }, Ho = { class: "update-time" }, Yo = { class: "moderation-table-wrapper" }, zo = ["checked", "disabled"], Jo = ["checked", "disabled", "onChange"], Xo = { class: "moderation-user-cell" }, Qo = { class: "moderation-user-id" }, Zo = ["title"], ei = { class: "moderation-type-text" }, ti = { class: "moderation-empty" }, ni = {
  key: 0,
  class: "moderation-pagination"
}, ai = { class: "pagination-pages" }, oi = ["disabled"], ii = {
  key: 0,
  class: "page-ellipsis"
}, si = ["disabled", "onClick"], li = ["disabled"], ri = /* @__PURE__ */ se({
  __name: "ModerationCard",
  props: {
    moderationMode: {},
    moderationList: {},
    moderationLoading: { type: Boolean },
    moderationPage: {},
    moderationTotal: {},
    moderationTotalPages: {},
    moderationPageNumbers: {},
    moderationSelectedIds: {},
    moderationColumns: {},
    isAllOnPageSelected: { type: Boolean },
    customModerationToggleEnabled: { type: Boolean },
    onCustomToggleChange: { type: Function },
    updateTimeText: {},
    disabled: { type: Boolean },
    handleBulkApprove: { type: Function },
    handleBulkDelete: { type: Function },
    handleRefreshModeration: { type: Function },
    toggleSelectOne: { type: Function },
    toggleSelectAll: { type: Function },
    goToModerationPage: { type: Function },
    getModerationActions: { type: Function },
    formatModerationTime: { type: Function }
  },
  setup(a) {
    const { t: r } = me();
    return (d, o) => {
      const u = ge("t-switch"), h = ge("t-button");
      return v(), M("div", Vo, [
        i("div", Go, [
          i("div", Wo, [
            a.moderationMode !== "custom" ? (v(), M("h3", Ko, c(e(r)(e(t).CONTENT_MODERATION)), 1)) : K("", !0),
            a.moderationMode === "custom" ? (v(), G(u, {
              key: 1,
              size: "small",
              value: a.customModerationToggleEnabled,
              disabled: a.disabled,
              onChange: o[0] || (o[0] = (m) => a.onCustomToggleChange?.(m)),
              style: { "margin-left": "12px" }
            }, null, 8, ["value", "disabled"])) : K("", !0),
            a.moderationMode === "custom" ? (v(), M("span", qo, c(e(r)(e(t).CUSTOM_MODERATION_TOGGLE)), 1)) : K("", !0),
            g(h, {
              theme: "primary",
              shape: "round",
              onClick: a.handleBulkApprove,
              disabled: a.disabled || a.moderationSelectedIds.length <= 1
            }, {
              icon: A(() => [
                g(e(qe), { style: { width: "14px", height: "14px" } })
              ]),
              default: A(() => [
                V(" " + c(e(r)(e(t).BULK_APPROVE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"]),
            a.handleBulkDelete ? (v(), G(h, {
              key: 3,
              theme: "primary",
              shape: "round",
              onClick: a.handleBulkDelete,
              disabled: a.disabled || a.moderationSelectedIds.length <= 1
            }, {
              icon: A(() => [
                g(e(In), { style: { width: "14px", height: "14px" } })
              ]),
              default: A(() => [
                V(" " + c(e(r)(e(t).BULK_DELETE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"])) : K("", !0)
          ]),
          i("div", jo, [
            i("span", Ho, c(e(r)(e(t).UPDATED_AT, { time: a.updateTimeText })), 1),
            g(h, {
              theme: "primary",
              variant: "outline",
              shape: "round",
              loading: a.moderationLoading,
              disabled: a.disabled,
              onClick: o[1] || (o[1] = (m) => a.handleRefreshModeration())
            }, {
              icon: A(() => [
                g(e(_n))
              ]),
              default: A(() => [
                V(" " + c(e(r)(e(t).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        i("div", Yo, [
          g(Jn, {
            columns: a.moderationColumns,
            data: a.moderationList,
            "row-key": "id",
            "table-class-name": "moderation-table",
            "header-class-name": "moderation-header-fixed",
            "body-class-name": "moderation-table-scroll"
          }, {
            "header-check": A(() => [
              i("input", {
                type: "checkbox",
                checked: a.isAllOnPageSelected,
                disabled: a.disabled,
                onChange: o[2] || (o[2] = //@ts-ignore
                (...m) => a.toggleSelectAll && a.toggleSelectAll(...m))
              }, null, 40, zo)
            ]),
            "header-userId": A(() => [
              V(c(e(r)(e(t).USERID)), 1)
            ]),
            "header-content": A(() => [
              V(c(e(r)(e(t).COMMENT_CONTENT)), 1)
            ]),
            "header-type": A(() => [
              V(c(e(r)(e(t).SENSITIVE_TYPE)), 1)
            ]),
            "header-createdAtMs": A(() => [
              V(c(e(r)(e(t).CREATED_AT)), 1)
            ]),
            "header-action": A(() => [
              V(c(e(r)(e(t).ACTION)), 1)
            ]),
            "cell-check": A(({ row: m }) => [
              i("input", {
                type: "checkbox",
                checked: a.moderationSelectedIds.includes(m.id),
                disabled: a.disabled,
                onChange: (s) => a.toggleSelectOne(m.id)
              }, null, 40, Jo)
            ]),
            "cell-userId": A(({ row: m }) => [
              i("div", Xo, [
                i("span", Qo, c(m.userId), 1)
              ])
            ]),
            "cell-content": A(({ row: m }) => [
              i("span", {
                title: m.content
              }, c(m.content), 9, Zo)
            ]),
            "cell-type": A(({ row: m }) => [
              i("span", ei, c(e(r)(m.type)), 1)
            ]),
            "cell-createdAtMs": A(({ row: m }) => [
              V(c(a.formatModerationTime(m.createdAtMs)), 1)
            ]),
            "cell-action": A(({ row: m }) => [
              g(nt, {
                actions: a.getModerationActions(m),
                disabled: a.disabled
              }, null, 8, ["actions", "disabled"])
            ]),
            empty: A(() => [
              i("div", ti, [
                i("span", null, c(e(r)(e(t).MODERATION_EMPTY)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data"]),
          a.moderationList.length > 0 ? (v(), M("div", ni, [
            i("span", null, c(e(r)(e(t).TOTAL_ITEMS, { count: a.moderationTotal, total: a.moderationTotal })), 1),
            i("div", ai, [
              i("button", {
                class: "page-num page-nav",
                disabled: a.disabled || a.moderationPage <= 1,
                "aria-label": "prev page",
                onClick: o[3] || (o[3] = (m) => a.goToModerationPage(a.moderationPage - 1))
              }, [
                g(e(mt), { style: { transform: "rotate(90deg)", width: "14px" } })
              ], 8, oi),
              (v(!0), M(Be, null, Ze(a.moderationPageNumbers, (m, s) => (v(), M(Be, {
                key: m === "..." ? `ellipsis-${s}` : m
              }, [
                m === "..." ? (v(), M("span", ii, "...")) : (v(), M("button", {
                  key: 1,
                  class: ln(["page-num", { active: m === a.moderationPage }]),
                  disabled: a.disabled,
                  onClick: (O) => a.goToModerationPage(m)
                }, c(m), 11, si))
              ], 64))), 128)),
              i("button", {
                class: "page-num page-nav",
                disabled: a.disabled || a.moderationPage >= a.moderationTotalPages,
                "aria-label": "next page",
                onClick: o[4] || (o[4] = (m) => a.goToModerationPage(a.moderationPage + 1))
              }, [
                g(e(mt), { style: { transform: "rotate(-90deg)", width: "14px" } })
              ], 8, li)
            ])
          ])) : K("", !0)
        ])
      ]);
    };
  }
}), ci = /* @__PURE__ */ se({
  __name: "ModerationDropdown",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["release", "close"],
  setup(a, { emit: r }) {
    const { t: d } = me(), o = I(null), u = a, h = r, m = (O) => {
      o.value && !o.value.contains(O.target) && h("close");
    };
    ve(
      () => u.visible,
      (O) => {
        O ? document.addEventListener("mousedown", m) : document.removeEventListener("mousedown", m);
      }
    ), Le(() => {
      document.removeEventListener("mousedown", m);
    });
    const s = () => {
      h("release"), h("close");
    };
    return (O, _) => (v(), G(Xe, { to: "body" }, [
      a.visible ? (v(), M("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: o,
        class: "user-action-dropdown moderation-action-dropdown",
        style: Qe({
          position: "fixed",
          top: a.position.y + "px",
          left: a.position.x - 160 + "px"
        })
      }, [
        i("button", {
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(qe)),
          V(" " + c(e(d)(e(t).BYPASS_CORRECTION)), 1)
        ])
      ], 4)) : K("", !0)
    ]));
  }
});
function di() {
  const a = I({
    visible: !1,
    title: "",
    content: ""
  }), r = ze({
    visible: !1,
    x: 0,
    y: 0
  }), d = ze({
    visible: !1,
    x: 0,
    y: 0
  }), o = I(!1), u = I(!1), h = I(""), m = I("");
  return {
    // 状态
    confirmDialog: a,
    moderationDropdown: r,
    audienceDropdown: d,
    mutedModalVisible: o,
    bannedModalVisible: u,
    successMsg: h,
    errorMsg: m,
    // 方法
    showConfirmDialog: (R) => {
      a.value = {
        ...R,
        visible: !0
      };
    },
    hideConfirmDialog: () => {
      a.value.visible = !1;
    },
    showModerationDropdown: (R, B, X, Q) => {
      r.visible = !0, r.x = R, r.y = B, r.itemId = X, r.content = Q;
    },
    hideModerationDropdown: () => {
      r.visible = !1;
    },
    showAudienceDropdown: (R, B, X, Q) => {
      d.visible = !0, d.x = R, d.y = B, d.userId = X, d.userName = Q;
    },
    hideAudienceDropdown: () => {
      d.visible = !1;
    },
    showSuccess: (R) => {
      h.value = R, setTimeout(() => {
        h.value = "";
      }, 3e3);
    },
    showError: (R) => {
      m.value = R, setTimeout(() => {
        m.value = "";
      }, 3e3);
    }
  };
}
const ui = { class: "live-control-container" }, vi = { class: "live-control-viewport" }, mi = { class: "right-sidebar" }, fi = /* @__PURE__ */ se({
  __name: "live-control",
  setup(a) {
    const r = je("LiveControl"), d = rn(), o = cn(), u = $(() => d.params.liveId), h = $(() => d.query.from === "live-list" ? "/live-list" : "/live-monitor"), m = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, { t: s } = me(), { currentLive: O, fetchLiveDetail: _, fetchLiveStats: y, setCurrentLive: x, endLive: N, updateLive: te } = tt(), { audienceCount: j } = Ke(), R = Ln().components?.liveControl, {
      moderationMode: B,
      customModerationToggleEnabled: X,
      updateCustomModerationToggleEnabled: Q,
      textModerationList: z,
      textModerationTotal: H,
      textModerationPageNum: re,
      textModerationLoading: fe,
      fetchTextModerationList: ne,
      approveTextModerationItems: E,
      bypassCorrectionKeyword: k,
      deleteModerationItems: W
    } = yt({
      liveId: u.value,
      pageSize: We
    }), P = $(() => B.value === "custom"), {
      successMsg: D,
      errorMsg: ce
    } = di(), F = I(""), ae = I(""), ee = I(!1), T = I(!1), q = I(null), Ne = $(() => Mt() || ""), pe = I(!0), Y = I(null), _e = I(!1), oe = $(() => !Y.value || Number(Y.value?.activityStatus) === 2), Fe = I("chat"), Re = I(!1), we = I(0), Me = I(null), Ce = I(null), U = ze({
      onlineCount: 0,
      totalViewers: 0,
      totalMsgCount: 0,
      totalLikesReceived: 0,
      totalGiftsSent: 0,
      totalGiftCoins: 0,
      totalUniqueGiftSenders: 0
    }), He = $(() => {
      if (U.totalViewers <= 0) return "0%";
      const n = U.totalMsgCount / U.totalViewers * 100;
      return Math.min(n, 100).toFixed(1) + "%";
    }), de = I(""), b = () => {
      const n = /* @__PURE__ */ new Date(), l = String(n.getHours()).padStart(2, "0"), C = String(n.getMinutes()).padStart(2, "0");
      de.value = `${l}:${C}`;
    };
    b(), ve(
      O,
      (n) => {
        n && (U.totalViewers = n.stats?.viewCount || U.totalViewers, U.totalMsgCount = n.stats?.commentCount || U.totalMsgCount, U.totalLikesReceived = n.stats?.likeCount || U.totalLikesReceived, U.totalGiftsSent = n.stats?.giftCount || U.totalGiftsSent, U.totalGiftCoins = n.stats?.giftAmount || U.totalGiftCoins, U.totalUniqueGiftSenders = n.stats?.giftUserCount || U.totalUniqueGiftSenders, n.onlineCount && (U.onlineCount = n.onlineCount), b());
      },
      { immediate: !0 }
    );
    const f = I([]), w = I(1), ie = fe, J = I(0), L = I([]), De = $(
      () => Dn(J.value, We)
    ), At = $(
      () => Yn(w.value, De.value)
    ), Ot = $(() => {
      if (f.value.length === 0) return !1;
      const n = Ge(f.value.map((l) => l.id));
      return Un(L.value, n);
    }), St = $(() => zn({ hideTypeColumn: P.value })), at = (n) => ({
      id: n.id,
      userId: n.userId,
      content: n.content,
      type: n.type,
      createdAtMs: n.createdAtMs
    }), Ue = async (n = 1) => {
      if (!ie.value && u.value)
        try {
          const l = Math.max(1, n), C = $n(O.value?.createdAt);
          await ne({
            liveId: u.value,
            pageNum: l,
            pageSize: We,
            startTime: C,
            violationOnly: !P.value
          });
          let p = z.value;
          if (P.value) {
            const le = Et(p);
            f.value = le.map(at), J.value = H.value;
          } else {
            p = await xn(p);
            const le = Et(p), Oe = await Bn();
            f.value = le.map(at), J.value = Math.max(0, H.value - Oe);
          }
          w.value = l, L.value = Ge(
            L.value.filter(
              (le) => p.some((Oe) => Oe.id === le)
            )
          );
        } catch (l) {
          const C = Z(l).info || l?.message || s(t.UNKNOWN_ERROR);
          r.error("moderation", `load failed (ErrorCode: ${Z(l).code || "N/A"}):`, l), S.error(`【${s(t.REFRESH)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: C })}`);
        }
    }, ot = async (n = !1) => {
      oe.value || (await Ue(w.value), n || S.success(s(t.REFRESHED)));
    }, pt = (n) => {
      n !== "..." && (n < 1 || n > De.value || n === w.value || Ue(n));
    }, ke = async (n) => {
      L.value = L.value.filter(
        (C) => !n.includes(C)
      ), f.value = f.value.filter(
        (C) => !n.includes(C.id)
      ), J.value = Math.max(0, J.value - n.length);
      const l = Fn(
        w.value,
        J.value,
        n.length,
        We
      );
      await Ue(l);
    }, Rt = (n) => {
      const l = L.value.indexOf(n);
      l >= 0 ? L.value.splice(l, 1) : L.value.push(n), L.value = Ge(L.value);
    }, wt = () => {
      const n = Ge(f.value.map((C) => C.id));
      if (n.length > 0 && n.every((C) => L.value.includes(C)))
        L.value = L.value.filter((C) => !n.includes(C));
      else {
        const C = new Set(L.value);
        n.forEach((p) => C.add(p)), L.value = Array.from(C);
      }
    }, Dt = (n) => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      F.value = s(t.RELEASE_AND_RESEND), ae.value = s(t.RELEASE_AND_RESEND_DESCRIPTION), q.value = async () => {
        try {
          await E({
            ids: [n.id],
            items: [{ id: n.id, content: n.content, userId: n.userId }],
            liveId: u.value
          }), Ve("success", s(t.RELEASE_AND_RESEND_SUCCESS)), await ke([n.id]);
        } catch (l) {
          const C = Z(l).info || l?.message || s(t.UNKNOWN_ERROR);
          r.error("moderation", `release failed (ErrorCode: ${Z(l).code || "N/A"}):`, l), S.error(`【${s(t.RELEASE_AND_RESEND)}】${s(t.OPERATION_FAILED, { error: C })}`);
        } finally {
          ee.value = !1;
        }
      }, ee.value = !0;
    }, ye = I(null), it = () => {
      ye.value = null;
    }, Ut = (n, l) => {
      n.stopPropagation();
      const C = n.currentTarget.getBoundingClientRect();
      ye.value = {
        item: l,
        x: C.right,
        y: C.bottom + 4
      };
    }, kt = async (n) => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      try {
        await W([n.id]), S.info(s(t.DELETED)), await ke([n.id]);
      } catch (l) {
        const C = Z(l).info || l?.message || s(t.UNKNOWN_ERROR);
        r.error("moderation", `delete failed (ErrorCode: ${Z(l).code || "N/A"}):`, l), S.error(`【${s(t.DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: C })}`);
      }
    }, $t = (n) => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      F.value = s(t.BYPASS_CORRECTION_DIALOG_TITLE), ae.value = s(t.BYPASS_CORRECTION_DESCRIPTION), q.value = async () => {
        try {
          await k({
            content: n.content,
            liveId: u.value
          }), Ve("success", s(t.BYPASS_CORRECTION_SUCCESS)), await ke([n.id]);
        } catch (l) {
          const C = Z(l).info || l?.message || s(t.UNKNOWN_ERROR);
          r.error("moderation", `bypass correction keyword failed (ErrorCode: ${Z(l).code || "N/A"}):`, l), S.error(`【${s(t.BYPASS_CORRECTION)}】${s(t.OPERATION_FAILED, { error: C })}`);
        } finally {
          ee.value = !1;
        }
      }, ee.value = !0;
    }, xt = () => {
      if (!ye.value) return;
      const { item: n } = ye.value;
      it(), $t(n);
    }, Bt = (n) => {
      const l = [
        {
          key: "approve",
          label: s(t.APPROVE),
          onClick: () => Dt(n)
        },
        {
          key: "delete",
          label: s(t.DELETE),
          danger: !0,
          onClick: () => kt(n)
        }
      ];
      return P.value || l.push({
        key: "more",
        label: s(t.MORE),
        suffixCaret: !0,
        onClick: (C) => Ut(C, n)
      }), l;
    }, Pt = () => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      if (L.value.length === 0) {
        S.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      he.requestConfirm();
    }, Ft = async () => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      if (L.value.length === 0) {
        S.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const n = [...L.value];
      try {
        await W(n), S.info(s(t.DELETED)), await ke(n);
      } catch (l) {
        const C = Z(l).info || l?.message || s(t.UNKNOWN_ERROR);
        r.error("moderation", `bulk delete failed (ErrorCode: ${Z(l).code || "N/A"}):`, l), S.error(`【${s(t.BULK_DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: C })}`);
      }
    };
    ve(
      [u, () => O.value?.createdAt],
      ([n, l]) => {
        n && l != null && Ue(1);
      },
      { immediate: !0 }
    ), $(() => [
      { label: s(t.REFRESH_OFF), value: 0 },
      { label: s(t.TEN_SECONDS), value: 10 },
      { label: s(t.THIRTY_SECONDS), value: 30 },
      { label: s(t.ONE_MINUTE), value: 60 },
      { label: s(t.FIVE_MINUTES), value: 300 }
    ]);
    const Vt = I(30), { confirmDialog: $e, requestConfirm: Gt, cancelConfirm: st, executeWithConfirm: Wt, loading: lt } = Ye({
      operationName: s(t.SEND_VIOLATION_WARNING),
      action: async () => {
        if (!u.value) throw new Error("liveId is required");
        const n = Y.value?.liveName || u.value;
        await Pn(u.value, {
          violationType: s(t.VIOLATION_TYPE_WARNING),
          violationContent: s(t.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: n }),
          handleSuggestion: s(t.VIOLATION_WARNING_DEFAULT_SUGGESTION)
        });
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.SEND_VIOLATION_WARNING) }),
        content: s(t.VIOLATION_WARNING_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      errorMessage: s(t.SEND_FAILED),
      showSuccess: !0
    }), Kt = () => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      Gt();
    }, be = Ye({
      operationName: s(t.FORCE_STOP),
      action: async () => {
        if (!Y.value) throw new Error("liveInfo is null");
        return N(Y.value.id || Y.value.liveId);
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.FORCE_STOP) }),
        content: s(t.FORCE_STOP_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      onSuccess: () => {
        o.push(h.value);
      }
    }), he = Ye({
      operationName: s(t.BULK_APPROVE),
      action: async () => {
        const n = f.value.filter((p) => L.value.includes(p.id)).sort((p, le) => p.createdAtMs - le.createdAtMs), l = n.map((p) => p.id), C = n.map((p) => ({ id: p.id, content: p.content, userId: p.userId }));
        await E({ ids: l, items: C, liveId: u.value });
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.BULK_APPROVE) }),
        content: s(t.BULK_APPROVE_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      showSuccess: !0,
      onSuccess: async () => {
        const n = [...L.value];
        await ke(n);
      }
    }), Ae = $(() => be.confirmDialog.value ? be.confirmDialog.value : he.confirmDialog.value ? he.confirmDialog.value : null), qt = () => {
      be.confirmDialog.value ? be.executeWithConfirm() : he.confirmDialog.value && he.executeWithConfirm();
    }, jt = () => {
      be.confirmDialog.value ? be.cancelConfirm() : he.confirmDialog.value && he.cancelConfirm();
    }, Ht = $(() => be.confirmDialog.value ? be.loading.value : he.confirmDialog.value ? he.loading.value : !1);
    let ue = null, Ee = null;
    const Yt = $(
      () => O.value?.liveOwner?.userId || Y.value?.anchor.userId || ""
    ), zt = $(
      () => Ce.value?.nick || bt(
        O.value?.liveOwner,
        Y.value?.anchor.nick || s(t.UNKNOWN_HOST)
      )
    ), Jt = $(
      () => Ce.value?.avatarUrl || ht(O.value?.liveOwner) || Y.value?.anchor.avatarUrl
    ), Xt = $(() => ({
      liveInfo: Y.value,
      liveAnchorAvatar: Jt.value,
      liveAnchorName: zt.value,
      currentLive: O.value,
      isMockMode: m,
      liveControlSlots: R,
      handleLeaveLive: rt
    })), Qt = $(() => ({
      liveId: u.value,
      disabled: oe.value,
      currentUserId: Ne.value,
      anchorUserId: Yt.value,
      currentLive: O.value,
      roomJoined: Re.value
    })), Ve = (n, l) => {
      n === "success" ? (D.value = l, setTimeout(() => D.value = "", 3e3)) : (ce.value = l, setTimeout(() => ce.value = "", 3e3));
    }, Zt = (n) => {
      const { code: l, info: C } = Z(n), p = n instanceof Error ? n : new Error(String(n));
      return l ? yn(l, C) : p.message || s(t.UNKNOWN_HOST);
    }, en = (n) => n >= 1e4 ? (n / 1e4).toFixed(1) + "w" : n.toLocaleString(), tn = (n) => {
      n < 0 && (n = 0);
      const l = Math.floor(n / 86400), C = Math.floor(n % 86400 / 3600), p = Math.floor(n % 3600 / 60), le = n % 60, Oe = `${C.toString().padStart(2, "0")}:${p.toString().padStart(2, "0")}:${le.toString().padStart(2, "0")}`;
      return l > 0 ? `${l}${s(t.DAYS)} ${Oe}` : Oe;
    }, rt = () => {
      o.push(h.value);
    }, nn = () => {
      if (oe.value) {
        S.warning(s(t.LIVE_ENDED));
        return;
      }
      be.requestConfirm();
    }, an = async () => {
      if (console.log("[LiveControl][fetchRoomInfo] start, liveId:", u.value), !!u.value)
        try {
          const n = await _(u.value);
          if (console.log("[LiveControl][fetchRoomInfo] fetchLiveDetail result:", n ? "exists" : "null"), n) {
            const l = bt(n, n.anchor?.userId || "-"), C = ht(n);
            if (n.anchor ? Ce.value = {
              nick: n.anchor.nick || l,
              avatarUrl: n.anchor.avatarUrl || C
            } : Ce.value = {
              nick: l,
              avatarUrl: C
            }, Y.value = {
              id: n.liveId,
              title: n.liveName || s(t.UNNAMED_LIVE_SHORT),
              coverUrl: n.coverUrl || Mn,
              anchor: {
                userId: n.anchor?.userId || "",
                nick: l,
                avatarUrl: C
              },
              onlineCount: n.onlineCount || 0,
              createdAt: n.createdAt ? n.createdAt * 1e3 : null,
              isMessageDisabled: n.isMessageDisabled === !0,
              liveType: n.liveType || "Live",
              isSeatEnabled: n.isSeatEnabled || !1,
              takeSeatMode: "FreeToTake",
              maxSeatCount: n.maxSeatCount || 9,
              maxMemberCount: n.maxMemberCount || 1e3,
              category: n.category || [],
              activityStatus: Number(n.activityStatus ?? 0),
              endedAt: n.endedAt,
              isPublicVisible: n.isPublicVisible !== void 0 ? n.isPublicVisible : !0,
              notice: "",
              isLikeEnabled: n.isLikeEnabled !== void 0 ? n.isLikeEnabled : !0
            }, Number(n.activityStatus) === 2)
              _e.value = !0, ue && (clearInterval(ue), ue = null);
            else {
              const p = n.createdAt && n.createdAt > 1e9 ? n.createdAt * 1e3 : null;
              if (Me.value = p, p) {
                const le = Math.floor((Date.now() - p) / 1e3);
                we.value = le > 0 ? le : 0;
              }
            }
          } else
            pe.value = !1;
        } catch (n) {
          r.error("fetchRoomInfo", `获取直播信息失败 (ErrorCode: ${Z(n).code || "N/A"})`, n);
          const l = n instanceof Error ? n : new Error(String(n));
          l.message?.includes("network") || l.message?.includes("fetch") ? Ve("error", s(t.NETWORK_ERROR)) : Ve("error", s(t.REQUEST_FAILED, { error: Zt(n) }));
        } finally {
          pe.value = !1;
        }
    }, ct = async () => {
      if (!(!u.value || !O.value))
        try {
          const n = await y();
          n && (U.totalViewers = n.viewCount || 0, U.totalMsgCount = n.commentCount || 0, U.totalLikesReceived = n.likeCount || 0, U.totalGiftsSent = n.giftCount || 0, U.totalGiftCoins = n.giftAmount || 0, U.totalUniqueGiftSenders = n.giftUserCount || 0, b());
        } catch (n) {
          const l = n instanceof Error ? n : new Error(String(n));
          r.error("获取统计数据失败", `(ErrorCode: ${Z(n).code || "N/A"}) ${l.message || ""}`, l);
        }
    }, on = () => {
      ue && (clearInterval(ue), ue = null), Ee && (clearInterval(Ee), Ee = null), Y.value && (Y.value = { ...Y.value, activityStatus: 2 }), x(null), _e.value = !0;
    };
    return ve(
      u,
      (n) => {
        n && (Re.value = !1, an(), ct(), O.value?.createdAt != null && Ue(1));
      },
      { immediate: !0 }
    ), ve([() => Me.value, oe], ([n, l]) => {
      ue && (clearInterval(ue), ue = null), n && n > 1e12 && !l && (ue = window.setInterval(() => {
        const C = Math.floor((Date.now() - n) / 1e3);
        we.value = C > 0 ? C : 0;
      }, 1e3));
    }, { immediate: !0 }), ve(
      [Vt, oe, u, X, P],
      ([n, l, C, p, le]) => {
        Ee && (clearInterval(Ee), Ee = null), n > 0 && C && !l && (Ee = window.setInterval(() => {
          ct(), le && !p || ot(!0);
        }, n * 1e3));
      },
      { immediate: !0 }
    ), ve(j, (n) => {
      U.onlineCount = n;
    }), Le(() => {
      u.value && r.info("LiveControl", "Component unmounting, liveId:", u.value), ue && clearInterval(ue), Ee && clearInterval(Ee);
    }), (n, l) => {
      const C = ge("t-dialog");
      return v(), M("div", ui, [
        g(e(ta), {
          "success-msg": e(D),
          "error-msg": e(ce)
        }, null, 8, ["success-msg", "error-msg"]),
        g(e(ia), {
          "handle-leave-live": rt,
          "handle-violation-warning": Kt,
          "handle-force-stop-live": nn,
          disabled: oe.value
        }, null, 8, ["disabled"]),
        i("main", vi, [
          g(e(vo), {
            "live-id": u.value,
            "current-live": e(O),
            "is-mock-mode": e(m),
            "live-ended-overlay-visible": _e.value,
            "current-user-id": Ne.value,
            "video-monitor": Xt.value,
            interaction: Qt.value,
            "active-tab": Fe.value,
            "onUpdate:activeTab": l[0] || (l[0] = (p) => Fe.value = p),
            onLiveEnded: on,
            onJoinedLive: l[1] || (l[1] = (p) => Re.value = !0)
          }, null, 8, ["live-id", "current-live", "is-mock-mode", "live-ended-overlay-visible", "current-user-id", "video-monitor", "interaction", "active-tab"]),
          i("aside", mi, [
            g(e(Fo), {
              stats: U,
              "live-duration": we.value,
              "update-time-text": de.value,
              "interaction-rate": He.value,
              "format-number": en,
              "format-duration": tn
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            g(Ct, {
              "slot-component": e(R)?.customControlPanel,
              "slot-props": { liveInfo: Y.value, stats: U }
            }, null, 8, ["slot-component", "slot-props"]),
            g(e(ri), {
              "moderation-mode": e(B),
              "moderation-list": f.value,
              "moderation-loading": e(ie),
              "moderation-page": w.value,
              "moderation-total": J.value,
              "moderation-total-pages": De.value,
              "moderation-page-numbers": At.value,
              "moderation-selected-ids": L.value,
              "moderation-columns": St.value,
              "is-all-on-page-selected": Ot.value,
              "custom-moderation-toggle-enabled": e(X),
              "on-custom-toggle-change": e(Q),
              "update-time-text": de.value,
              disabled: oe.value,
              "handle-bulk-approve": Pt,
              "handle-bulk-delete": Ft,
              "handle-refresh-moderation": ot,
              "toggle-select-one": Rt,
              "toggle-select-all": wt,
              "go-to-moderation-page": pt,
              "get-moderation-actions": Bt,
              "format-moderation-time": e(kn)
            }, null, 8, ["moderation-mode", "moderation-list", "moderation-loading", "moderation-page", "moderation-total", "moderation-total-pages", "moderation-page-numbers", "moderation-selected-ids", "moderation-columns", "is-all-on-page-selected", "custom-moderation-toggle-enabled", "on-custom-toggle-change", "update-time-text", "disabled", "format-moderation-time"])
          ])
        ]),
        Ae.value ? (v(), G(e(Je), {
          key: 0,
          visible: Ae.value.visible,
          "onUpdate:visible": l[2] || (l[2] = (p) => Ae.value.visible = p),
          title: Ae.value.title,
          content: Ae.value.content,
          "confirm-text": Ae.value.confirmText,
          loading: Ht.value,
          "on-confirm": qt,
          "on-close": jt
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        ee.value ? (v(), G(e(Je), {
          key: 1,
          visible: ee.value,
          "onUpdate:visible": l[3] || (l[3] = (p) => ee.value = p),
          title: F.value,
          content: ae.value,
          loading: T.value,
          "on-confirm": async () => {
            if (q.value) {
              T.value = !0;
              try {
                await q.value();
              } finally {
                T.value = !1, ee.value = !1;
              }
            } else
              ee.value = !1;
          },
          "on-close": () => {
            T.value = !1, ee.value = !1, q.value = null;
          }
        }, null, 8, ["visible", "title", "content", "loading", "on-confirm", "on-close"])) : K("", !0),
        P.value ? K("", !0) : (v(), G(e(ci), {
          key: 2,
          visible: !!ye.value,
          position: ye.value || { x: 0, y: 0 },
          onRelease: xt,
          onClose: it
        }, null, 8, ["visible", "position"])),
        e($e) ? (v(), G(C, {
          key: 3,
          visible: e($e).visible,
          header: e($e).title,
          "confirm-btn": {
            content: e($e).confirmText ?? e(s)(e(t).CONFIRM),
            loading: e(lt),
            shape: "round"
          },
          "cancel-btn": {
            content: e(s)(e(t).CANCEL),
            disabled: e(lt),
            shape: "round"
          },
          onConfirm: e(Wt),
          onCancel: e(st),
          onClose: e(st)
        }, {
          default: A(() => [
            i("p", null, c(e($e).content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn", "onConfirm", "onCancel", "onClose"])) : K("", !0)
      ]);
    };
  }
}), $i = /* @__PURE__ */ Xn(fi, [["__scopeId", "data-v-e4e1259b"]]);
export {
  $i as default
};
