import { defineComponent as se, openBlock as u, createElementBlock as C, toDisplayString as c, createCommentVNode as K, resolveComponent as be, createElementVNode as i, createVNode as g, unref as e, withCtx as y, createTextVNode as V, Fragment as Fe, createBlock as G, computed as $, ref as N, h as Se, watch as ve, onUnmounted as ye, Teleport as Ze, normalizeStyle as et, renderList as tt, onMounted as Lt, withDirectives as vt, vShow as mt, withModifiers as rn, nextTick as Ve, mergeProps as ft, normalizeClass as cn, reactive as Qe } from "vue";
import { useRoute as dn, useRouter as un } from "vue-router";
import { Tooltip as Ne, MessagePlugin as A } from "tdesign-vue-next";
import { useUIKit as me } from "@tencentcloud/uikit-base-component-vue3";
import { LiveView as vn, useLiveAudienceState as je, LiveAudienceList as mn, useLoginState as fn, useLiveListState as gn, useLivePlayerState as bn } from "tuikit-atomicx-vue3";
import { _ as Tt } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.DX4aj1kg.js";
import { ArrowLeftIcon as hn, NotificationIcon as En, StopCircleIcon as In, CheckCircleIcon as He, ChatOffIcon as Ct, UserCheckedIcon as Mt, UserBlockedIcon as yt, MoreIcon as _n, InfoCircleIcon as Me, CloseCircleIcon as Nn, RefreshIcon as Ln, ChevronDownIcon as gt } from "tdesign-icons-vue-next";
import { c as Ye } from "../../chunks/logger.rNWqpx5t.js";
import { I as t, a7 as Tn, g as Cn, a as At, r as te, m as Ot, l as bt, S as Mn, h as yn, ad as An } from "../../chunks/layout.C1lzYH2h.js";
import { bg as On, b8 as Pe, bb as ht, l as pn, D as Rn, bQ as wn, bF as Sn, a6 as Dn, aj as Un, b_ as Ke, bc as kn, bE as Et, bD as It, aO as $n, Y as qe, ao as xn, aI as Bn, aB as _t, aR as Pn, bN as Fn, ah as Vn } from "../../chunks/main-layout.QTEHh38b.js";
import { BarrageList as Gn, BarrageInput as Wn, LiveListEvent as Kn } from "tuikit-atomicx-vue3/live";
import { _ as nt } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.DnJBxwMs.js";
import { c as qn, i as jn } from "../../chunks/user-action-dropdown.mpLYb6KT.js";
import { useLiveMonitorState as at, useRiskControlState as pt, useConfirmAction as Je } from "../../vue.js";
import { u as Hn } from "../../chunks/useAsyncAction.TZaXlZ4q.js";
import { p as Yn, b as zn, g as Jn } from "../../chunks/columns.DCEilkva.js";
import { a as ot, _ as Qn } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import "../../chunks/action-buttons.ChAJrOyM.js";
import { _ as Xn } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const Zn = { class: "toast-area" }, ea = {
  key: 0,
  class: "status-success"
}, ta = {
  key: 1,
  class: "status-error"
}, na = /* @__PURE__ */ se({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(a) {
    return (l, d) => (u(), C("div", Zn, [
      a.successMsg ? (u(), C("div", ea, c(a.successMsg), 1)) : K("", !0),
      a.errorMsg ? (u(), C("div", ta, c(a.errorMsg), 1)) : K("", !0)
    ]));
  }
}), aa = { class: "live-control-navbar" }, oa = { class: "nav-left" }, ia = { class: "nav-right" }, sa = /* @__PURE__ */ se({
  __name: "NavBar",
  props: {
    handleLeaveLive: { type: Function },
    handleViolationWarning: { type: Function },
    handleForceStopLive: { type: Function },
    disabled: { type: Boolean }
  },
  setup(a) {
    const { t: l } = me();
    return (d, o) => {
      const m = be("t-button");
      return u(), C("header", aa, [
        i("div", oa, [
          g(m, {
            variant: "outline",
            shape: "circle",
            class: "back-btn",
            onClick: a.handleLeaveLive,
            title: e(l)(e(t).BACK_TO_LIST)
          }, {
            icon: y(() => [
              g(e(hn), {
                "fill-color": "transparent",
                "stroke-color": "currentColor",
                "stroke-width": 2
              })
            ]),
            _: 1
          }, 8, ["onClick", "title"]),
          i("h1", null, c(e(l)(e(t).LIVE_DETAILS)), 1)
        ]),
        i("div", ia, [
          g(m, {
            variant: "text",
            theme: "warning",
            disabled: a.disabled,
            onClick: a.handleViolationWarning
          }, {
            icon: y(() => [
              g(e(En))
            ]),
            default: y(() => [
              V(" " + c(e(l)(e(t).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "onClick"]),
          g(m, {
            variant: "text",
            theme: "danger",
            disabled: a.disabled,
            onClick: a.handleForceStopLive
          }, {
            icon: y(() => [
              g(e(In))
            ]),
            default: y(() => [
              V(" " + c(e(l)(e(t).FORCE_STOP)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ])
      ]);
    };
  }
}), la = { class: "video-monitor-area" }, ra = { class: "live-header-external" }, ca = { class: "live-title-text" }, da = { class: "video-stage" }, ua = { class: "player-container" }, va = {
  key: 0,
  class: "mock-cover-preview"
}, ma = ["src"], fa = {
  key: 2,
  class: "live-state-overlay live-state-overlay--ended"
}, ga = { class: "live-state-overlay-content" }, ba = ["src"], ha = {
  class: "live-state-overlay-title",
  style: {
    color: "rgba(0, 0, 0, 0.55)",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px"
  }
}, Ea = /* @__PURE__ */ se({
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
    const { t: l } = me();
    function d(o) {
      const m = o.target;
      m.src = Tn;
    }
    return (o, m) => (u(), C("section", la, [
      g(Tt, {
        "slot-component": a.liveControlSlots?.beforeLiveInfo,
        "slot-props": { liveInfo: a.liveInfo }
      }, null, 8, ["slot-component", "slot-props"]),
      i("div", ra, [
        g(nt, {
          "class-name": "anchor-avatar",
          src: a.liveAnchorAvatar,
          name: a.liveAnchorName,
          title: a.liveAnchorName
        }, null, 8, ["src", "name", "title"]),
        i("span", ca, c(a.liveEndedOverlayVisible ? e(l)(e(t).LIVE_ENDED) : a.currentLive?.liveName || a.liveInfo?.liveName || e(l)(e(t).LOADING)), 1)
      ]),
      i("div", da, [
        i("div", ua, [
          a.isMockMode ? (u(), C(Fe, { key: 0 }, [
            a.liveInfo?.coverUrl ? (u(), C("div", va, [
              i("img", {
                src: a.liveInfo.coverUrl,
                alt: "cover",
                class: "mock-cover-img",
                onError: d
              }, null, 40, ma)
            ])) : K("", !0)
          ], 64)) : a.sdkReady ? (u(), G(e(vn), { key: 1 })) : K("", !0),
          a.liveEndedOverlayVisible ? (u(), C("div", fa, [
            i("div", ga, [
              i("img", {
                src: e(qn),
                alt: "",
                class: "live-state-overlay-icon"
              }, null, 8, ba),
              i("div", ha, c(e(l)(e(t).LIVE_ENDED)), 1)
            ])
          ])) : K("", !0)
        ])
      ])
    ]));
  }
}), Ia = { class: "message-list-scroll-area barrage-list-wrapper" }, _a = 12 * 1024, Na = /* @__PURE__ */ se({
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
    const l = Ye("MessageList"), { t: d } = me(), { giftList: o, fetchGiftList: m } = Hn();
    m().catch(() => {
    });
    const v = a, { currentLive: f } = at(), { audienceList: s, disableSendMessage: p } = je(), b = $(() => v.currentLive || f.value), I = N(!1), P = N({ top: 0, left: 0 }), T = N(null), ne = N(null), Y = N(null), S = N(null), x = (_) => s.value.find((B) => B.userId === _), Q = (_) => {
      const B = x(_);
      if (B)
        return B.isMessageDisabled === !0;
      const W = v.mutedList.find((q) => q.userId === _);
      return W ? W.endTime > Date.now() / 1e3 : !1;
    }, X = (_) => {
      const B = v.bannedList.find((W) => W.userId === _);
      return B ? B.endTime > Date.now() / 1e3 : !1;
    }, Z = (_, B) => {
      if (_.preventDefault(), _.stopPropagation(), Number(B.sender.userRole) !== 2 || On(v.liveId || "", B.sender.userId))
        return;
      const q = _.target.closest(".message-item");
      if (!q) return;
      const oe = q.getBoundingClientRect(), D = oe.bottom + 4, j = Math.min(
        oe.left,
        window.innerWidth - 150
      );
      P.value = { top: D, left: Math.max(0, j) }, T.value = B, I.value = !0;
    }, de = () => {
      if (T.value && v.onBanUser) {
        const _ = T.value.sender.userId;
        if (_ === Pe(b.value?.liveOwner?.userId || "")) {
          I.value = !1, T.value = null;
          return;
        }
        if (ht(_, s.value)) {
          I.value = !1, T.value = null;
          return;
        }
        const B = T.value.sender.userName || T.value.sender.nameCard || T.value.sender.userId, W = X(_);
        v.onBanUser(_, B, W);
      }
      I.value = !1, T.value = null;
    }, z = async () => {
      if (!T.value) return;
      const _ = T.value.sender.userId;
      if (_ === Pe(b.value?.liveOwner?.userId || "")) {
        I.value = !1, T.value = null;
        return;
      }
      if (ht(_, s.value)) {
        I.value = !1, T.value = null;
        return;
      }
      const B = T.value.sender.userName || T.value.sender.nameCard || T.value.sender.userId, W = Q(_);
      try {
        await p({ userId: _, isDisable: !W }), l.info("muteOperation", W ? "解除禁言成功" : "禁言成功");
      } catch (q) {
        l.error("SDK 禁言失败，使用备用方法", "", q), v.onMuteUser && v.onMuteUser(_, B, W);
      }
      I.value = !1, T.value = null;
    }, le = se({
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
      setup(_) {
        const B = _.message.sender.nameCard || _.message.sender.userName || _.message.sender.userId, W = _.message.sender.userId === b.value?.liveOwner?.userId;
        let q;
        if (_.message.messageType === 0)
          q = _.message.textContent || "";
        else if (_.message.businessId === "gift" && _.message.data)
          try {
            const j = JSON.parse(_.message.data), ee = j.giftName || "", fe = j.giftId;
            if (fe) {
              const M = o.value.find((U) => U.id === fe);
              M?.languageList ? q = Cn(M.languageList)?.name || ee : q = ee;
            } else
              q = ee;
          } catch {
            q = _.message.data || "";
          }
        else
          q = _.message.data || "";
        const oe = Yn(q), D = () => oe.map((j, ee) => j.type === "emoji" ? Se("img", {
          key: ee,
          class: "message-emoji",
          src: j.src,
          alt: j.key
        }) : Se("span", { key: ee, class: "message-text" }, j.text));
        return () => Se("div", {
          class: ["message-item", W ? "host" : ""],
          style: _.style,
          onContextMenu: (j) => Z(j, _.message)
        }, [
          // 主播标识
          W ? Se("span", { class: "message-badge" }, d(t.HOST)) : null,
          // 昵称
          Se("span", { class: "message-username", onClick: (j) => Z(j, _.message) }, `${B}: `),
          // 消息内容
          Se("span", { class: "message-content" }, D())
        ]);
      }
    }), ae = (_) => {
      Y.value && Y.value.contains(_.target) || (I.value = !1, T.value = null);
    };
    return ve(I, (_) => {
      _ ? document.addEventListener("mousedown", ae) : document.removeEventListener("mousedown", ae);
    }), ye(() => {
      document.removeEventListener("mousedown", ae);
    }), (_, B) => (u(), C("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: ne
    }, [
      i("div", Ia, [
        g(e(Gn), {
          ref_key: "barrageListRef",
          ref: S,
          Message: e(le)
        }, null, 8, ["Message"])
      ]),
      a.roomJoined ? (u(), G(e(Wn), {
        key: 0,
        placeholder: e(d)(e(t).ENTER_MESSAGE_TO_SEND_AS_ADMIN),
        disabled: !v.liveId,
        maxLength: _a,
        autoFocus: !1
      }, null, 8, ["placeholder", "disabled"])) : K("", !0),
      (u(), G(Ze, { to: "body" }, [
        I.value && T.value ? (u(), C("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: Y,
          class: "user-action-dropdown",
          style: et({
            position: "fixed",
            top: `${P.value.top}px`,
            left: `${P.value.left}px`
          })
        }, [
          i("button", {
            class: "dropdown-item",
            onClick: z
          }, [
            Q(T.value.sender.userId) ? (u(), G(e(He), { key: 0 })) : (u(), G(e(Ct), { key: 1 })),
            i("span", null, c(Q(T.value.sender.userId) ? e(d)(e(t).UNMUTE) : e(d)(e(t).MUTE)), 1)
          ]),
          i("button", {
            class: "dropdown-item danger",
            onClick: de
          }, [
            X(T.value.sender.userId) ? (u(), G(e(Mt), { key: 0 })) : (u(), G(e(yt), { key: 1 })),
            i("span", null, c(X(T.value.sender.userId) ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
          ])
        ], 4)) : K("", !0)
      ]))
    ], 512));
  }
}), La = ["innerHTML"], Xe = /* @__PURE__ */ se({
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
  setup(a, { emit: l }) {
    const { t: d } = me(), o = a, m = l, v = $({
      get: () => o.visible,
      set: (p) => m("update:visible", p)
    }), f = () => {
      o.loading || o.onConfirm();
    }, s = () => {
      o.onClose();
    };
    return (p, b) => {
      const I = be("t-dialog");
      return u(), G(I, {
        visible: v.value,
        "onUpdate:visible": b[0] || (b[0] = (P) => v.value = P),
        header: e(d)(a.title),
        "confirm-btn": { content: e(d)(a.confirmText) || e(d)(e(t).CONFIRM), theme: "primary", shape: "round", loading: a.loading },
        "cancel-btn": { content: e(d)(e(t).CANCEL), shape: "round", disabled: a.loading },
        onConfirm: f,
        onClose: s,
        onCancel: s
      }, {
        default: y(() => [
          i("p", {
            innerHTML: e(d)(a.content)
          }, null, 8, La)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
}), Ta = { class: "member-list-panel-modal" }, Ca = {
  key: 0,
  class: "member-list-empty"
}, Ma = {
  key: 1,
  class: "member-list-empty"
}, ya = {
  key: 2,
  class: "member-list-table"
}, Aa = { class: "member-table-user" }, Oa = { class: "member-table-user-cell" }, pa = { class: "member-table-user-name" }, Ra = { class: "member-table-time" }, wa = { class: "member-table-action" }, Sa = {
  key: 0,
  class: "list-action-button",
  disabled: ""
}, Da = /* @__PURE__ */ se({
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
  setup(a, { emit: l }) {
    const { t: d } = me(), o = a, m = l, v = $({
      get: () => o.visible,
      set: (f) => m("update:visible", f)
    });
    return (f, s) => {
      const p = be("t-dialog");
      return u(), G(p, {
        visible: v.value,
        "onUpdate:visible": s[0] || (s[0] = (b) => v.value = b),
        header: e(d)(e(t).MUTED_LIST),
        width: 600,
        footer: !1
      }, {
        default: y(() => [
          i("div", Ta, [
            a.memberListLoading ? (u(), C("div", Ca, c(e(d)(e(t).LOADING)), 1)) : a.mutedList.length === 0 ? (u(), C("div", Ma, c(e(d)(e(t).NO_MUTED_MEMBERS)), 1)) : (u(), C("table", ya, [
              i("thead", null, [
                i("tr", null, [
                  i("th", null, c(e(d)(e(t).USER)), 1),
                  i("th", null, c(e(d)(e(t).UNMUTE_TIME)), 1),
                  i("th", null, c(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              i("tbody", null, [
                (u(!0), C(Fe, null, tt(a.mutedList, (b) => (u(), C("tr", {
                  key: b.userId
                }, [
                  i("td", Aa, [
                    i("div", Oa, [
                      g(nt, {
                        "class-name": "member-table-avatar",
                        src: a.getUserAvatar(b.userId),
                        name: a.getUserNameFromCache(b.userId)
                      }, null, 8, ["src", "name"]),
                      g(e(Ne), {
                        content: a.getUserNameFromCache(b.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: y(() => [
                          i("span", pa, c(a.getUserNameFromCache(b.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  i("td", Ra, c(b.endTime > 0 ? new Date(b.endTime * 1e3).toLocaleString() : "-"), 1),
                  i("td", wa, [
                    a.unmutingUserId === b.userId ? (u(), C("button", Sa, c(e(d)(e(t).UNMUTING)), 1)) : (u(), G(ot, {
                      key: 1,
                      actions: a.getMutedMemberActions(b.userId)
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
}), Ua = { class: "member-list-panel-modal" }, ka = {
  key: 0,
  class: "member-list-empty"
}, $a = {
  key: 1,
  class: "member-list-empty"
}, xa = {
  key: 2,
  class: "member-list-table"
}, Ba = { class: "member-table-user" }, Pa = { class: "member-table-user-cell" }, Fa = { class: "member-table-user-name" }, Va = { class: "member-table-time" }, Ga = { class: "member-table-action" }, Wa = {
  key: 0,
  class: "list-action-button",
  disabled: ""
}, Ka = /* @__PURE__ */ se({
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
  setup(a, { emit: l }) {
    const { t: d } = me(), o = a, m = l, v = $({
      get: () => o.visible,
      set: (f) => m("update:visible", f)
    });
    return (f, s) => {
      const p = be("t-dialog");
      return u(), G(p, {
        visible: v.value,
        "onUpdate:visible": s[0] || (s[0] = (b) => v.value = b),
        header: e(d)(e(t).BANNED_LIST),
        width: 600,
        footer: !1
      }, {
        default: y(() => [
          i("div", Ua, [
            a.memberListLoading ? (u(), C("div", ka, c(e(d)(e(t).LOADING)), 1)) : a.bannedList.length === 0 ? (u(), C("div", $a, c(e(d)(e(t).NO_BANNED_MEMBERS)), 1)) : (u(), C("table", xa, [
              i("thead", null, [
                i("tr", null, [
                  i("th", null, c(e(d)(e(t).USER)), 1),
                  i("th", null, c(e(d)(e(t).BAN_LIFT_TIME)), 1),
                  i("th", null, c(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              i("tbody", null, [
                (u(!0), C(Fe, null, tt(a.bannedList, (b) => (u(), C("tr", {
                  key: b.userId
                }, [
                  i("td", Ba, [
                    i("div", Pa, [
                      g(nt, {
                        "class-name": "member-table-avatar",
                        src: a.getUserAvatar(b.userId),
                        name: a.getUserNameFromCache(b.userId)
                      }, null, 8, ["src", "name"]),
                      g(e(Ne), {
                        content: a.getUserNameFromCache(b.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: y(() => [
                          i("span", Fa, c(a.getUserNameFromCache(b.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  i("td", Va, c(b.endTime > 0 ? new Date(b.endTime * 1e3).toLocaleString() : "-"), 1),
                  i("td", Ga, [
                    a.unbanningUserId === b.userId ? (u(), C("button", Wa, c(e(d)(e(t).UNBANNING)), 1)) : (u(), G(ot, {
                      key: 1,
                      actions: a.getBannedMemberActions(b.userId)
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
}), qa = { class: "dropdown-header" }, ja = /* @__PURE__ */ se({
  __name: "AudienceDropdown",
  props: {
    visible: { type: Boolean },
    userName: {},
    isMuted: { type: Boolean },
    isBanned: { type: Boolean },
    position: {}
  },
  emits: ["mute", "ban", "close"],
  setup(a, { emit: l }) {
    const { t: d } = me(), o = N(null), m = a, v = l, f = (b) => {
      o.value && !o.value.contains(b.target) && v("close");
    };
    ve(
      () => m.visible,
      (b) => {
        b ? document.addEventListener("mousedown", f) : document.removeEventListener("mousedown", f);
      }
    ), ye(() => {
      document.removeEventListener("mousedown", f);
    });
    const s = () => {
      v("mute"), v("close");
    }, p = () => {
      v("ban"), v("close");
    };
    return (b, I) => (u(), G(Ze, { to: "body" }, [
      a.visible ? (u(), C("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: o,
        class: "user-action-dropdown",
        style: et({
          position: "fixed",
          top: a.position.y + "px",
          left: a.position.x - 160 + "px"
        })
      }, [
        i("div", qa, c(a.userName), 1),
        I[0] || (I[0] = i("div", { class: "dropdown-divider" }, null, -1)),
        a.isMuted ? (u(), C("button", {
          key: 0,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(He)),
          V(" " + c(e(d)(e(t).UNMUTE)), 1)
        ])) : (u(), C("button", {
          key: 1,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(Ct)),
          V(" " + c(e(d)(e(t).MUTE)), 1)
        ])),
        i("button", {
          class: "dropdown-item danger",
          onClick: p
        }, [
          a.isBanned ? (u(), G(e(Mt), { key: 0 })) : (u(), G(e(yt), { key: 1 })),
          V(" " + c(a.isBanned ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
        ])
      ], 4)) : K("", !0)
    ]));
  }
}), Ha = { class: "left-interaction-card" }, Ya = { class: "interaction-tabs-header" }, za = { class: "all-mute-control-row" }, Ja = { class: "all-mute-label" }, Qa = { class: "interaction-body" }, Xa = { class: "chat-stream-sidebar" }, Za = {
  key: 0,
  class: "all-mute-banner"
}, eo = { class: "audience-tab-wrapper" }, to = { class: "audience-list-area" }, no = {
  key: 0,
  class: "audience-me-tag"
}, ao = {
  key: 1,
  class: "audience-row-actions"
}, oo = {
  key: 0,
  class: "audience-muted-badge"
}, io = ["title", "disabled", "onClick"], so = { class: "audience-bottom-actions" }, lo = ["disabled"], ro = ["disabled"], co = /* @__PURE__ */ se({
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
  setup(a, { emit: l }) {
    const d = Ye("InteractionPanel"), { t: o } = me(), { opSuccess: m } = At(o), v = a, f = l, s = $({
      get: () => v.activeTab,
      set: (h) => f("update:activeTab", h)
    }), {
      mutedList: p,
      bannedList: b,
      memberLoading: I,
      muteMember: P,
      unmuteMember: T,
      banMember: ne,
      unbanMember: Y,
      fetchMutedList: S,
      fetchBannedList: x
    } = pt({ liveId: v.liveId, pageSize: 100 }), { updateLive: Q } = at(), { audienceList: X } = je(), Z = $(() => v.currentLive?.isMessageDisabled === !0), de = N(!1), z = N(null), le = N(!1);
    function ae(h) {
      z.value = { ...h, visible: !0 };
    }
    function _() {
      z.value = null, le.value = !1;
    }
    async function B() {
      if (!(!z.value || le.value)) {
        le.value = !0;
        try {
          await z.value.action();
        } catch (h) {
          d.error("confirm action failed:", h);
        } finally {
          le.value = !1, z.value = null;
        }
      }
    }
    function W(h, E, O) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      const J = Pe(v.anchorUserId);
      if (h !== J) {
        if (O) {
          T({ memberAccounts: [h] }).then(() => {
            A.success(m(t.UNMUTE, E));
          }).catch((re) => {
            const w = te(re).info || re?.message || o(t.UNKNOWN_ERROR);
            A.error(`【${o(t.UNMUTE)}】${o(t.OPERATION_FAILED, { error: w })}`);
          });
          return;
        }
        ae({
          title: o(t.CONFIRM_ACTION_TITLE, { action: o(t.MUTE) }),
          content: o(t.MUTE_CONFIRM_CONTENT, { name: E }),
          confirmText: o(t.CONFIRM),
          action: async () => {
            await P({ memberAccounts: [h], muteTime: pn }), A.success(m(t.MUTE, E));
          }
        });
      }
    }
    function q(h, E, O) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      const J = Pe(v.anchorUserId);
      if (h !== J) {
        if (O) {
          Y({ memberAccounts: [h] }).then(() => {
            A.success(m(t.UNBAN, E));
          }).catch((re) => {
            const w = te(re).info || re?.message || o(t.UNKNOWN_ERROR);
            A.error(`【${o(t.UNBAN)}】${o(t.OPERATION_FAILED, { error: w })}`);
          });
          return;
        }
        ae({
          title: o(t.CONFIRM_ACTION_TITLE, { action: o(t.BAN) }),
          content: o(t.BAN_CONFIRM_CONTENT, { name: E }),
          confirmText: o(t.CONFIRM),
          action: async () => {
            await ne({ memberAccounts: [h], duration: Rn }), A.success(m(t.BAN, E));
          }
        });
      }
    }
    function oe(h) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      const E = !!h;
      if (E !== Z.value) {
        if (!E) {
          de.value = !0, Q({ liveId: v.liveId, isMessageDisabled: !1 }).then(() => {
            A.success(m(t.OP_DISABLE, t.ALL_MEMBER_MUTE));
          }).catch((O) => {
            const J = te(O).info || O?.message || o(t.UNKNOWN_ERROR);
            A.error(`【${o(t.ALL_MEMBER_MUTE)}】${o(t.OPERATION_FAILED, { error: J })}`);
          }).finally(() => {
            de.value = !1;
          });
          return;
        }
        ae({
          title: o(t.ENABLE_ALL_MEMBER_MUTE),
          content: o(t.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT),
          confirmText: o(t.CONFIRM_ENABLE),
          action: async () => {
            de.value = !0;
            try {
              await Q({ liveId: v.liveId, isMessageDisabled: !0 }), A.success(m(t.OP_ENABLE, t.ALL_MEMBER_MUTE));
            } finally {
              de.value = !1;
            }
          }
        });
      }
    }
    const D = N(null);
    function j(h, E, O) {
      h.stopPropagation();
      const J = h.currentTarget.getBoundingClientRect();
      D.value = { userId: E, userName: O, x: J.right, y: J.bottom + 4 };
    }
    function ee() {
      D.value = null;
    }
    function fe() {
      if (!D.value) return;
      const { userId: h, userName: E } = D.value;
      W(h, E, U(h)), ee();
    }
    function M() {
      if (!D.value) return;
      const { userId: h, userName: E } = D.value;
      q(h, E, he(h)), ee();
    }
    function U(h) {
      return p.value.some((E) => E.userId === h);
    }
    function he(h) {
      return b.value.some((E) => E.userId === h);
    }
    function Le(h) {
      const E = X.value.find((O) => O.userId === h);
      if (E && "avatarUrl" in E && typeof E.avatarUrl == "string")
        return E.avatarUrl;
    }
    function De(h) {
      const E = X.value.find((O) => O.userId === h);
      return E?.userName ? E.userName : h;
    }
    const Te = N(null), H = N(null);
    async function Ue(h) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      if (!Te.value) {
        Te.value = h, await Ve();
        try {
          await T({ memberAccounts: [h] }), A.success(m(t.UNMUTE, h));
        } catch (E) {
          const O = te(E).info || E?.message || o(t.UNKNOWN_ERROR);
          A.error(`【${o(t.UNMUTE)}】${o(t.OPERATION_FAILED, { error: O })}`);
        } finally {
          Te.value = null;
        }
      }
    }
    async function ie(h) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      if (!H.value) {
        H.value = h, await Ve();
        try {
          await Y({ memberAccounts: [h] }), A.success(m(t.UNBAN, h));
        } catch (E) {
          const O = te(E).info || E?.message || o(t.UNKNOWN_ERROR);
          A.error(`【${o(t.UNBAN)}】${o(t.OPERATION_FAILED, { error: O })}`);
        } finally {
          H.value = null;
        }
      }
    }
    function Ge(h) {
      return [
        {
          key: "unmute",
          label: o(t.UNMUTE),
          onClick: () => Ue(h)
        }
      ];
    }
    function ke(h) {
      return [
        {
          key: "unban",
          label: o(t.UNBAN),
          onClick: () => ie(h)
        }
      ];
    }
    const Ce = N(!1), Ae = N(!1);
    function Oe() {
      S(), Ce.value = !0;
    }
    function k() {
      x(), Ae.value = !0;
    }
    let ge = null;
    return ve(
      () => v.activeTab,
      (h) => {
        if (h === "audience") {
          S(), x();
          const E = () => {
            document.querySelectorAll(".viewer-name").forEach((J) => {
              const re = J, w = re.textContent || "";
              re.title !== w && (re.title = w);
            });
          };
          setTimeout(() => {
            E();
            const O = document.querySelector(".audience-list-area");
            ge?.disconnect(), ge = null, O && (ge = new MutationObserver(E), ge.observe(O, { childList: !0, subtree: !0 }));
          }, 100);
        } else
          ge?.disconnect(), ge = null;
      }
    ), Lt(() => {
      v.activeTab === "audience" && (S(), x());
    }), ye(() => {
      ge?.disconnect(), ge = null;
    }), (h, E) => {
      const O = be("t-tab-panel"), J = be("t-tabs"), re = be("t-switch");
      return u(), C("div", Ha, [
        i("div", Ya, [
          g(J, {
            modelValue: s.value,
            "onUpdate:modelValue": E[0] || (E[0] = (w) => s.value = w),
            class: "interaction-tabs"
          }, {
            default: y(() => [
              g(O, {
                value: "chat",
                label: e(o)(e(t).MESSAGE_LIST)
              }, null, 8, ["label"]),
              g(O, {
                value: "audience",
                label: e(o)(e(t).AUDIENCE_LIST)
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          i("div", za, [
            g(re, {
              value: Z.value,
              disabled: de.value || a.disabled,
              onChange: oe
            }, null, 8, ["value", "disabled"]),
            i("span", Ja, c(e(o)(e(t).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        i("div", Qa, [
          vt(i("div", Xa, [
            Z.value ? (u(), C("div", Za, [
              E[4] || (E[4] = i("span", { class: "all-mute-banner-icon" }, "!", -1)),
              i("span", null, c(e(o)(e(t).ALL_MEMBER_MUTE_ENABLED_BANNER)), 1)
            ])) : K("", !0),
            g(Na, {
              "live-id": a.liveId,
              "anchor-user-id": a.anchorUserId,
              "muted-list": e(p),
              "banned-list": e(b),
              "current-live": a.currentLive,
              "room-joined": a.roomJoined,
              "on-mute-user": W,
              "on-ban-user": q
            }, null, 8, ["live-id", "anchor-user-id", "muted-list", "banned-list", "current-live", "room-joined"])
          ], 512), [
            [mt, a.activeTab === "chat"]
          ]),
          vt(i("div", eo, [
            i("div", to, [
              g(e(mn), { height: "99%" }, {
                "audience-mark": y(({ audience: w }) => [
                  w.userId === a.currentUserId ? (u(), C("span", no, c(e(o)(e(t).ME)), 1)) : w.userRole !== 0 && w.userId !== e(Pe)(a.anchorUserId) ? (u(), C("div", ao, [
                    U(w.userId) ? (u(), C("span", oo, c(e(o)(e(t).MUTED)), 1)) : K("", !0),
                    i("button", {
                      class: "audience-more-btn",
                      title: e(o)(e(t).MORE_ACTIONS),
                      disabled: a.disabled,
                      onClick: rn((F) => j(F, w.userId, w.userName || w.userId), ["stop"])
                    }, [
                      g(e(_n))
                    ], 8, io)
                  ])) : K("", !0)
                ]),
                _: 1
              })
            ]),
            i("div", so, [
              i("button", {
                class: "audience-bottom-btn",
                disabled: a.disabled,
                onClick: Oe
              }, c(e(o)(e(t).MUTED_LIST)) + " (" + c(e(p).length) + ") ", 9, lo),
              i("button", {
                class: "audience-bottom-btn",
                disabled: a.disabled,
                onClick: k
              }, c(e(o)(e(t).BANNED_LIST)) + " (" + c(e(b).length) + ") ", 9, ro)
            ])
          ], 512), [
            [mt, a.activeTab === "audience"]
          ])
        ]),
        z.value ? (u(), G(Xe, {
          key: 0,
          visible: z.value.visible,
          "onUpdate:visible": E[1] || (E[1] = (w) => z.value.visible = w),
          title: z.value.title,
          content: z.value.content,
          "confirm-text": z.value.confirmText,
          loading: le.value,
          "on-confirm": B,
          "on-close": _
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        g(Da, {
          visible: Ce.value,
          "onUpdate:visible": E[2] || (E[2] = (w) => Ce.value = w),
          "muted-list": e(p),
          "member-list-loading": e(I),
          "unmuting-user-id": Te.value,
          "get-user-avatar": Le,
          "get-user-name-from-cache": De,
          "get-muted-member-actions": Ge
        }, null, 8, ["visible", "muted-list", "member-list-loading", "unmuting-user-id"]),
        g(Ka, {
          visible: Ae.value,
          "onUpdate:visible": E[3] || (E[3] = (w) => Ae.value = w),
          "banned-list": e(b),
          "member-list-loading": e(I),
          "unbanning-user-id": H.value,
          "get-user-avatar": Le,
          "get-user-name-from-cache": De,
          "get-banned-member-actions": ke
        }, null, 8, ["visible", "banned-list", "member-list-loading", "unbanning-user-id"]),
        g(ja, {
          visible: !!D.value,
          "user-name": D.value?.userName || "",
          "is-muted": D.value ? U(D.value.userId) : !1,
          "is-banned": D.value ? he(D.value.userId) : !1,
          position: D.value || { x: 0, y: 0 },
          onMute: fe,
          onBan: M,
          onClose: ee
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"])
      ]);
    };
  }
}), uo = { class: "left-content-area" }, Nt = 5, vo = 2e3, mo = /* @__PURE__ */ se({
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
  setup(a, { emit: l }) {
    const d = Ye("LiveControlPanel"), o = a, m = l, { login: v, loginUserInfo: f } = fn(), { joinLive: s, leaveLive: p, subscribeEvent: b, unsubscribeEvent: I } = gn(), { fetchAudienceList: P } = je(), { hideControlBar: T, showControlBar: ne, setAutoHideDelay: Y } = bn();
    function S() {
      try {
        if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
          return "admin";
      } catch {
      }
      return "audience";
    }
    const x = N(!1), Q = N(""), X = N(!1), Z = N(""), de = N(!1), z = N(!1), le = N(!1), ae = N(0), _ = S(), B = $(
      () => f.value?.userId || Z.value || o.currentUserId || Ot() || ""
    ), W = $(
      () => o.liveEndedOverlayVisible || de.value && !o.currentLive && !o.isMockMode
    );
    function q() {
      const M = Kn;
      return M.onLiveEnded || M.ON_LIVE_ENDED || "";
    }
    const oe = q(), D = () => {
      m("live-ended");
    }, j = async () => {
      if (o.isMockMode) {
        x.value = !0;
        return;
      }
      if (!x.value && !z.value) {
        z.value = !0;
        try {
          let M;
          if (_ === "audience" ? (d.info("LiveControlLeftPanel", "Audience mode (internal), creating basic account..."), M = await Sn("audience")) : (d.info("LiveControlLeftPanel", "Admin mode, resolving account..."), M = await Mn()), !M || M.sdkAppId === 0 || !M.userId || !M.userSig) {
            d.warn("LiveControlLeftPanel", "No valid account obtained, will retry"), ee();
            return;
          }
          d.info("LiveControlLeftPanel", "Logging in as:", _, "userId:", M.userId), await v({ sdkAppId: M.sdkAppId, userId: M.userId, userSig: M.userSig }), await Ve(), x.value = !0, Z.value = M.userId, ae.value = 0;
        } catch (M) {
          if (M?.code === 2025 || M?.message?.includes("重复登录")) {
            await Ve(), x.value = !0, Z.value = Z.value || "recovered", ae.value = 0;
            return;
          }
          d.error("LiveControlLeftPanel", "TUIKit login failed:", M), ee();
        } finally {
          z.value = !1;
        }
      }
    }, ee = () => {
      if (ae.value >= Nt) {
        d.error("LiveControlLeftPanel", `Login failed after ${Nt} retries, giving up`);
        return;
      }
      const M = vo * (ae.value + 1);
      d.info("LiveControlLeftPanel", `Scheduling login retry #${ae.value + 1} in ${M}ms`), setTimeout(() => {
        !x.value && !o.isMockMode && ae.value++;
      }, M);
    }, fe = async () => {
      if (!(!o.liveId || !o.currentLive || !x.value || Q.value === o.liveId) && !le.value) {
        le.value = !0;
        try {
          d.info("LiveControlLeftPanel", "Joining live:", o.liveId, "as:", _);
          const M = bt();
          jn.callExperimentalAPI(JSON.stringify({
            api: "setCurrentLanguage",
            params: { language: M === "en-US" ? "en" : M === "zh-CN" ? "zh-Hans" : M }
          })).catch(() => {
          }), await s({ liveId: o.liveId }), Q.value = o.liveId, await P().catch((U) => {
            d.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", U);
          }), T(), Y(0), !X.value && b && oe && (d.info("LiveControlLeftPanel", "Subscribing to live ended event:", oe), b(oe, D), X.value = !0), m("joined-live"), console.log("[LiveControlLeftPanel] adding live admin:", Z.value, "room:", o.liveId), Dn(o.liveId, Z.value).catch((U) => {
            console.error("[LiveControlLeftPanel] addLiveAdmin failed:", U), d.warn("LiveControlLeftPanel", "addLiveAdmin failed:", U);
          });
        } catch (M) {
          d.error("LiveControlLeftPanel", "joinLive failed:", M);
        } finally {
          le.value = !1, de.value = !0;
        }
      }
    };
    return ve(
      () => [o.liveId, o.currentLive, B.value, x.value, ae.value],
      async () => {
        if (!(!o.liveId || !o.currentLive) && (x.value || await j(), !!x.value)) {
          if (!o.isMockMode && _ === "audience" && Z.value) {
            const M = bt() === "en-US" ? "admin" : "管理员";
            wn(Z.value, M).catch((U) => {
              d.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", U);
            });
          }
          await fe();
        }
      },
      { immediate: !0 }
    ), ve(
      () => o.liveId,
      () => {
        Q.value = "", de.value = !1;
      }
    ), ye(() => {
      X.value && I && oe && (I(oe, D), X.value = !1), Q.value && p?.().catch?.((M) => {
        d.error("LiveControlLeftPanel", "leaveLive on unmount failed:", M);
      }), ne();
    }), (M, U) => (u(), C("div", uo, [
      g(Ea, ft(a.videoMonitor, {
        "live-ended-overlay-visible": W.value,
        "sdk-ready": x.value
      }), null, 16, ["live-ended-overlay-visible", "sdk-ready"]),
      g(co, ft(a.interaction, {
        "active-tab": a.activeTab,
        "current-user-id": B.value,
        "onUpdate:activeTab": U[0] || (U[0] = (he) => m("update:activeTab", he))
      }), null, 16, ["active-tab", "current-user-id"])
    ]));
  }
}), fo = { class: "sidebar-stats-card" }, go = { class: "stats-card-header" }, bo = { class: "stats-header-left" }, ho = { class: "live-status-tag" }, Eo = { class: "live-duration-text" }, Io = { class: "update-time" }, _o = { class: "stat-bar-item" }, No = { class: "stat-label" }, Lo = { class: "stat-value" }, To = { class: "stat-bar-item" }, Co = { class: "stat-label" }, Mo = { class: "stat-value" }, yo = { class: "stat-bar-item" }, Ao = { class: "stat-label" }, Oo = { class: "stat-value" }, po = { class: "stat-bar-item" }, Ro = { class: "stat-label" }, wo = { class: "stat-value" }, So = { class: "stat-bar-item" }, Do = { class: "stat-label" }, Uo = { class: "stat-value" }, ko = { class: "stat-bar-item" }, $o = { class: "stat-label" }, xo = { class: "stat-value" }, Bo = { class: "stat-bar-item" }, Po = { class: "stat-label" }, Fo = { class: "stat-value" }, Vo = /* @__PURE__ */ se({
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
    const { t: l } = me(), d = N(null);
    let o = null, m = null, v = null;
    const f = (I, P, T) => {
      const ne = Array.from({ length: P }, () => 0);
      return I.forEach((Y, S) => {
        const x = S % P;
        ne[x] = Math.max(ne[x], Y);
      }), ne.reduce((Y, S) => Y + S, 0) + T * (P - 1);
    }, s = (I) => {
      const P = Array.from(I.querySelectorAll(":scope > .stat-bar-item")), T = document.createElement("div");
      T.style.position = "absolute", T.style.left = "-99999px", T.style.top = "0", T.style.visibility = "hidden", T.style.pointerEvents = "none", T.style.width = "max-content", document.body.appendChild(T);
      const ne = P.map((Y) => {
        const S = Y.cloneNode(!0);
        return S.style.width = "max-content", S.style.maxWidth = "none", T.appendChild(S), Math.ceil(S.getBoundingClientRect().width);
      });
      return T.remove(), ne;
    }, p = () => {
      const I = d.value;
      if (!I || I.clientWidth <= 0) return;
      const P = s(I);
      if (!P.length) return;
      const T = parseFloat(getComputedStyle(I).columnGap) || 0, ne = I.clientWidth, Y = [7, 4, 3, 2, 1].find((S) => f(P, S, T) <= ne + 1) || 1;
      I.style.setProperty("--stats-columns", String(Y));
    }, b = () => {
      v !== null && cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        v = null, p();
      });
    };
    return Lt(() => {
      Ve(() => {
        const I = d.value;
        I && (o = new ResizeObserver(b), o.observe(I), m = new MutationObserver(b), m.observe(I, { childList: !0, subtree: !0, characterData: !0 }), b());
      });
    }), ye(() => {
      o?.disconnect(), m?.disconnect(), v !== null && (cancelAnimationFrame(v), v = null);
    }), (I, P) => (u(), C("div", fo, [
      i("div", go, [
        i("div", bo, [
          i("h3", null, c(e(l)(e(t).LIVE_DATA_CONTROL)), 1),
          i("span", ho, [
            P[0] || (P[0] = i("span", { class: "live-status-dot" }, null, -1)),
            V(" " + c(e(l)(e(t).LIVE_NOW)) + " ", 1),
            i("span", Eo, c(a.formatDuration(a.liveDuration)), 1)
          ])
        ]),
        i("span", Io, c(e(l)(e(t).UPDATED_AT, { time: a.updateTimeText })), 1)
      ]),
      i("div", {
        ref_key: "statsBarRef",
        ref: d,
        class: "stats-bar-design"
      }, [
        i("div", _o, [
          i("div", No, [
            V(c(e(l)(e(t).CURRENT_VIEWERS)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).CURRENT_VIEWERS_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Lo, c(a.formatNumber(a.stats.onlineCount)), 1)
        ]),
        i("div", To, [
          i("div", Co, [
            V(c(e(l)(e(t).COMMENT_COUNT)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).COMMENT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Mo, c(a.stats.totalMsgCount.toLocaleString()), 1)
        ]),
        i("div", yo, [
          i("div", Ao, [
            V(c(e(l)(e(t).COMMENT_USERS)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).COMMENT_USERS_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Oo, c(a.stats.totalViewers.toLocaleString()), 1)
        ]),
        i("div", po, [
          i("div", Ro, [
            V(c(e(l)(e(t).INTERACTION_RATE)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).INTERACTION_RATE_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", wo, c(a.interactionRate), 1)
        ]),
        i("div", So, [
          i("div", Do, [
            V(c(e(l)(e(t).TOTAL_GIFT_AMOUNT)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).TOTAL_GIFT_AMOUNT_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Uo, c(a.stats.totalGiftCoins.toFixed(2)), 1)
        ]),
        i("div", ko, [
          i("div", $o, [
            V(c(e(l)(e(t).GIFT_COUNT)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).GIFT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", xo, c(a.stats.totalGiftsSent), 1)
        ]),
        i("div", Bo, [
          i("div", Po, [
            V(c(e(l)(e(t).GIFT_SENDERS)) + " ", 1),
            g(e(Ne), {
              content: e(l)(e(t).GIFT_SENDERS_TOOLTIP),
              placement: "top"
            }, {
              default: y(() => [
                g(e(Me), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          i("div", Fo, c(a.stats.totalUniqueGiftSenders), 1)
        ])
      ], 512)
    ]));
  }
}), Go = { class: "moderation-card" }, Wo = { class: "moderation-card-header" }, Ko = { class: "moderation-header-left" }, qo = { key: 0 }, jo = {
  key: 2,
  style: { "font-size": "13px", "margin-left": "8px" }
}, Ho = { class: "moderation-toolbar" }, Yo = { class: "update-time" }, zo = { class: "moderation-table-wrapper" }, Jo = ["checked", "disabled"], Qo = ["checked", "disabled", "onChange"], Xo = { class: "moderation-user-cell" }, Zo = { class: "moderation-user-id" }, ei = ["title"], ti = { class: "moderation-type-text" }, ni = { class: "moderation-empty" }, ai = {
  key: 0,
  class: "moderation-pagination"
}, oi = { class: "pagination-pages" }, ii = ["disabled"], si = {
  key: 0,
  class: "page-ellipsis"
}, li = ["disabled", "onClick"], ri = ["disabled"], ci = /* @__PURE__ */ se({
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
    const { t: l } = me();
    return (d, o) => {
      const m = be("t-switch"), v = be("t-button");
      return u(), C("div", Go, [
        i("div", Wo, [
          i("div", Ko, [
            a.moderationMode !== "custom" ? (u(), C("h3", qo, c(e(l)(e(t).CONTENT_MODERATION)), 1)) : K("", !0),
            a.moderationMode === "custom" ? (u(), G(m, {
              key: 1,
              size: "small",
              value: a.customModerationToggleEnabled,
              disabled: a.disabled,
              onChange: o[0] || (o[0] = (f) => a.onCustomToggleChange?.(f)),
              style: { "margin-left": "12px" }
            }, null, 8, ["value", "disabled"])) : K("", !0),
            a.moderationMode === "custom" ? (u(), C("span", jo, c(e(l)(e(t).CUSTOM_MODERATION_TOGGLE)), 1)) : K("", !0),
            g(v, {
              theme: "primary",
              shape: "round",
              onClick: a.handleBulkApprove,
              disabled: a.disabled || a.moderationSelectedIds.length <= 1
            }, {
              icon: y(() => [
                g(e(He), { style: { width: "14px", height: "14px" } })
              ]),
              default: y(() => [
                V(" " + c(e(l)(e(t).BULK_APPROVE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"]),
            a.handleBulkDelete ? (u(), G(v, {
              key: 3,
              theme: "primary",
              shape: "round",
              onClick: a.handleBulkDelete,
              disabled: a.disabled || a.moderationSelectedIds.length <= 1
            }, {
              icon: y(() => [
                g(e(Nn), { style: { width: "14px", height: "14px" } })
              ]),
              default: y(() => [
                V(" " + c(e(l)(e(t).BULK_DELETE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"])) : K("", !0)
          ]),
          i("div", Ho, [
            i("span", Yo, c(e(l)(e(t).UPDATED_AT, { time: a.updateTimeText })), 1),
            g(v, {
              theme: "primary",
              variant: "outline",
              shape: "round",
              loading: a.moderationLoading,
              disabled: a.disabled,
              onClick: o[1] || (o[1] = (f) => a.handleRefreshModeration())
            }, {
              icon: y(() => [
                g(e(Ln))
              ]),
              default: y(() => [
                V(" " + c(e(l)(e(t).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        i("div", zo, [
          g(Qn, {
            columns: a.moderationColumns,
            data: a.moderationList,
            "row-key": "id",
            "table-class-name": "moderation-table",
            "header-class-name": "moderation-header-fixed",
            "body-class-name": "moderation-table-scroll"
          }, {
            "header-check": y(() => [
              i("input", {
                type: "checkbox",
                checked: a.isAllOnPageSelected,
                disabled: a.disabled,
                onChange: o[2] || (o[2] = //@ts-ignore
                (...f) => a.toggleSelectAll && a.toggleSelectAll(...f))
              }, null, 40, Jo)
            ]),
            "header-userId": y(() => [
              V(c(e(l)(e(t).USERID)), 1)
            ]),
            "header-content": y(() => [
              V(c(e(l)(e(t).COMMENT_CONTENT)), 1)
            ]),
            "header-type": y(() => [
              V(c(e(l)(e(t).SENSITIVE_TYPE)), 1)
            ]),
            "header-createdAtMs": y(() => [
              V(c(e(l)(e(t).CREATED_AT)), 1)
            ]),
            "header-action": y(() => [
              V(c(e(l)(e(t).ACTION)), 1)
            ]),
            "cell-check": y(({ row: f }) => [
              i("input", {
                type: "checkbox",
                checked: a.moderationSelectedIds.includes(f.id),
                disabled: a.disabled,
                onChange: (s) => a.toggleSelectOne(f.id)
              }, null, 40, Qo)
            ]),
            "cell-userId": y(({ row: f }) => [
              i("div", Xo, [
                i("span", Zo, c(f.userId), 1)
              ])
            ]),
            "cell-content": y(({ row: f }) => [
              i("span", {
                title: f.content
              }, c(f.content), 9, ei)
            ]),
            "cell-type": y(({ row: f }) => [
              i("span", ti, c(e(l)(f.type)), 1)
            ]),
            "cell-createdAtMs": y(({ row: f }) => [
              V(c(a.formatModerationTime(f.createdAtMs)), 1)
            ]),
            "cell-action": y(({ row: f }) => [
              g(ot, {
                actions: a.getModerationActions(f),
                disabled: a.disabled
              }, null, 8, ["actions", "disabled"])
            ]),
            empty: y(() => [
              i("div", ni, [
                i("span", null, c(e(l)(e(t).MODERATION_EMPTY)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data"]),
          a.moderationList.length > 0 ? (u(), C("div", ai, [
            i("span", null, c(e(l)(e(t).TOTAL_ITEMS, { count: a.moderationTotal, total: a.moderationTotal })), 1),
            i("div", oi, [
              i("button", {
                class: "page-num page-nav",
                disabled: a.disabled || a.moderationPage <= 1,
                "aria-label": "prev page",
                onClick: o[3] || (o[3] = (f) => a.goToModerationPage(a.moderationPage - 1))
              }, [
                g(e(gt), { style: { transform: "rotate(90deg)", width: "14px" } })
              ], 8, ii),
              (u(!0), C(Fe, null, tt(a.moderationPageNumbers, (f, s) => (u(), C(Fe, {
                key: f === "..." ? `ellipsis-${s}` : f
              }, [
                f === "..." ? (u(), C("span", si, "...")) : (u(), C("button", {
                  key: 1,
                  class: cn(["page-num", { active: f === a.moderationPage }]),
                  disabled: a.disabled,
                  onClick: (p) => a.goToModerationPage(f)
                }, c(f), 11, li))
              ], 64))), 128)),
              i("button", {
                class: "page-num page-nav",
                disabled: a.disabled || a.moderationPage >= a.moderationTotalPages,
                "aria-label": "next page",
                onClick: o[4] || (o[4] = (f) => a.goToModerationPage(a.moderationPage + 1))
              }, [
                g(e(gt), { style: { transform: "rotate(-90deg)", width: "14px" } })
              ], 8, ri)
            ])
          ])) : K("", !0)
        ])
      ]);
    };
  }
}), di = /* @__PURE__ */ se({
  __name: "ModerationDropdown",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["release", "close"],
  setup(a, { emit: l }) {
    const { t: d } = me(), o = N(null), m = a, v = l, f = (p) => {
      o.value && !o.value.contains(p.target) && v("close");
    };
    ve(
      () => m.visible,
      (p) => {
        p ? document.addEventListener("mousedown", f) : document.removeEventListener("mousedown", f);
      }
    ), ye(() => {
      document.removeEventListener("mousedown", f);
    });
    const s = () => {
      v("release"), v("close");
    };
    return (p, b) => (u(), G(Ze, { to: "body" }, [
      a.visible ? (u(), C("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: o,
        class: "user-action-dropdown moderation-action-dropdown",
        style: et({
          position: "fixed",
          top: a.position.y + "px",
          left: a.position.x - 160 + "px"
        })
      }, [
        i("button", {
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(He)),
          V(" " + c(e(d)(e(t).BYPASS_CORRECTION)), 1)
        ])
      ], 4)) : K("", !0)
    ]));
  }
});
function ui() {
  const a = N({
    visible: !1,
    title: "",
    content: ""
  }), l = Qe({
    visible: !1,
    x: 0,
    y: 0
  }), d = Qe({
    visible: !1,
    x: 0,
    y: 0
  }), o = N(!1), m = N(!1), v = N(""), f = N("");
  return {
    // 状态
    confirmDialog: a,
    moderationDropdown: l,
    audienceDropdown: d,
    mutedModalVisible: o,
    bannedModalVisible: m,
    successMsg: v,
    errorMsg: f,
    // 方法
    showConfirmDialog: (S) => {
      a.value = {
        ...S,
        visible: !0
      };
    },
    hideConfirmDialog: () => {
      a.value.visible = !1;
    },
    showModerationDropdown: (S, x, Q, X) => {
      l.visible = !0, l.x = S, l.y = x, l.itemId = Q, l.content = X;
    },
    hideModerationDropdown: () => {
      l.visible = !1;
    },
    showAudienceDropdown: (S, x, Q, X) => {
      d.visible = !0, d.x = S, d.y = x, d.userId = Q, d.userName = X;
    },
    hideAudienceDropdown: () => {
      d.visible = !1;
    },
    showSuccess: (S) => {
      v.value = S, setTimeout(() => {
        v.value = "";
      }, 3e3);
    },
    showError: (S) => {
      f.value = S, setTimeout(() => {
        f.value = "";
      }, 3e3);
    }
  };
}
const vi = { class: "live-control-container" }, mi = { class: "live-control-viewport" }, fi = { class: "right-sidebar" }, gi = /* @__PURE__ */ se({
  __name: "live-control",
  setup(a) {
    const l = Ye("LiveControl"), d = dn(), o = un(), m = $(() => d.params.liveId), v = $(() => d.query.from === "live-list" ? "/live-list" : "/live-monitor"), f = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, { t: s } = me(), { opSuccess: p, opFailed: b } = At(s), { currentLive: I, fetchLiveDetail: P, fetchLiveStats: T, setCurrentLive: ne, endLive: Y, updateLive: S } = at(), { audienceCount: x } = je(), Q = yn().components?.liveControl, {
      moderationMode: X,
      customModerationToggleEnabled: Z,
      updateCustomModerationToggleEnabled: de,
      textModerationList: z,
      textModerationTotal: le,
      textModerationPageNum: ae,
      textModerationLoading: _,
      fetchTextModerationList: B,
      approveTextModerationItems: W,
      bypassCorrectionKeyword: q,
      deleteModerationItems: oe
    } = pt({
      liveId: m.value,
      pageSize: qe
    }), D = $(() => X.value === "custom"), {
      successMsg: j,
      errorMsg: ee
    } = ui(), fe = N(""), M = N(""), U = N(!1), he = N(!1), Le = N(null), De = $(() => Ot() || ""), Te = N(!0), H = N(null), Ue = N(!1), ie = $(() => !H.value || Number(H.value?.activityStatus) === 2), Ge = N("chat"), ke = N(!1), Ce = N(0), Ae = N(null), Oe = N(null), k = Qe({
      onlineCount: 0,
      totalViewers: 0,
      totalMsgCount: 0,
      totalLikesReceived: 0,
      totalGiftsSent: 0,
      totalGiftCoins: 0,
      totalUniqueGiftSenders: 0
    }), ge = $(() => {
      if (k.totalViewers <= 0) return "0%";
      const n = k.totalMsgCount / k.totalViewers * 100;
      return Math.min(n, 100).toFixed(1) + "%";
    }), h = N(""), E = () => {
      const n = /* @__PURE__ */ new Date(), r = String(n.getHours()).padStart(2, "0"), L = String(n.getMinutes()).padStart(2, "0");
      h.value = `${r}:${L}`;
    };
    E(), ve(
      I,
      (n) => {
        n && (k.totalViewers = n.stats?.viewCount || k.totalViewers, k.totalMsgCount = n.stats?.commentCount || k.totalMsgCount, k.totalLikesReceived = n.stats?.likeCount || k.totalLikesReceived, k.totalGiftsSent = n.stats?.giftCount || k.totalGiftsSent, k.totalGiftCoins = n.stats?.giftAmount || k.totalGiftCoins, k.totalUniqueGiftSenders = n.stats?.giftUserCount || k.totalUniqueGiftSenders, n.onlineCount && (k.onlineCount = n.onlineCount), E());
      },
      { immediate: !0 }
    );
    const O = N([]), J = N(1), re = _, w = N(0), F = N([]), ze = $(
      () => Un(w.value, qe)
    ), Rt = $(
      () => zn(J.value, ze.value)
    ), wt = $(() => {
      if (O.value.length === 0) return !1;
      const n = Ke(O.value.map((r) => r.id));
      return kn(F.value, n);
    }), St = $(() => Jn({ hideTypeColumn: D.value })), it = (n) => ({
      id: n.id,
      userId: n.userId,
      content: n.content,
      type: n.type,
      createdAtMs: n.createdAtMs
    }), $e = async (n = 1) => {
      if (!re.value && m.value)
        try {
          const r = Math.max(1, n), L = xn(I.value?.createdAt);
          await B({
            liveId: m.value,
            pageNum: r,
            pageSize: qe,
            startTime: L,
            violationOnly: !D.value
          });
          let R = z.value;
          if (D.value) {
            const ce = _t(R);
            O.value = ce.map(it), w.value = le.value;
          } else {
            R = await Bn(R);
            const ce = _t(R), we = await Pn();
            O.value = ce.map(it), w.value = Math.max(0, le.value - we);
          }
          J.value = r, F.value = Ke(
            F.value.filter(
              (ce) => R.some((we) => we.id === ce)
            )
          );
        } catch (r) {
          const L = te(r).info || r?.message || s(t.UNKNOWN_ERROR);
          l.error("moderation", `load failed (ErrorCode: ${te(r).code || "N/A"}):`, r), A.error(`【${s(t.REFRESH)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: L })}`);
        }
    }, st = async (n = !1) => {
      ie.value || (await $e(J.value), n || A.success(p(t.REFRESH)));
    }, Dt = (n) => {
      n !== "..." && (n < 1 || n > ze.value || n === J.value || $e(n));
    }, xe = async (n) => {
      F.value = F.value.filter(
        (L) => !n.includes(L)
      ), O.value = O.value.filter(
        (L) => !n.includes(L.id)
      ), w.value = Math.max(0, w.value - n.length);
      const r = Vn(
        J.value,
        w.value,
        n.length,
        qe
      );
      await $e(r);
    }, Ut = (n) => {
      const r = F.value.indexOf(n);
      r >= 0 ? F.value.splice(r, 1) : F.value.push(n), F.value = Ke(F.value);
    }, kt = () => {
      const n = Ke(O.value.map((L) => L.id));
      if (n.length > 0 && n.every((L) => F.value.includes(L)))
        F.value = F.value.filter((L) => !n.includes(L));
      else {
        const L = new Set(F.value);
        n.forEach((R) => L.add(R)), F.value = Array.from(L);
      }
    }, $t = (n) => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      fe.value = s(t.RELEASE_AND_RESEND), M.value = s(t.RELEASE_AND_RESEND_DESCRIPTION), Le.value = async () => {
        try {
          await W({
            ids: [n.id],
            items: [{ id: n.id, content: n.content, userId: n.userId }],
            liveId: m.value
          }), We("success", p(t.RELEASE_AND_RESEND)), await xe([n.id]);
        } catch (r) {
          const L = te(r).info || r?.message || s(t.UNKNOWN_ERROR);
          l.error("moderation", `release failed (ErrorCode: ${te(r).code || "N/A"}):`, r), A.error(`【${s(t.RELEASE_AND_RESEND)}】${s(t.OPERATION_FAILED, { error: L })}`);
        } finally {
          U.value = !1;
        }
      }, U.value = !0;
    }, pe = N(null), lt = () => {
      pe.value = null;
    }, xt = (n, r) => {
      n.stopPropagation();
      const L = n.currentTarget.getBoundingClientRect();
      pe.value = {
        item: r,
        x: L.right,
        y: L.bottom + 4
      };
    }, Bt = async (n) => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      try {
        await oe([n.id]), A.info(p(t.DELETE)), await xe([n.id]);
      } catch (r) {
        const L = te(r).info || r?.message || s(t.UNKNOWN_ERROR);
        l.error("moderation", `delete failed (ErrorCode: ${te(r).code || "N/A"}):`, r), A.error(`【${s(t.DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: L })}`);
      }
    }, Pt = (n) => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      fe.value = s(t.BYPASS_CORRECTION_DIALOG_TITLE), M.value = s(t.BYPASS_CORRECTION_DESCRIPTION), Le.value = async () => {
        try {
          await q({
            content: n.content,
            liveId: m.value
          }), We("success", p(t.BYPASS_CORRECTION)), await xe([n.id]);
        } catch (r) {
          const L = te(r).info || r?.message || s(t.UNKNOWN_ERROR);
          l.error("moderation", `bypass correction keyword failed (ErrorCode: ${te(r).code || "N/A"}):`, r), A.error(`【${s(t.BYPASS_CORRECTION)}】${s(t.OPERATION_FAILED, { error: L })}`);
        } finally {
          U.value = !1;
        }
      }, U.value = !0;
    }, Ft = () => {
      if (!pe.value) return;
      const { item: n } = pe.value;
      lt(), Pt(n);
    }, Vt = (n) => {
      const r = [
        {
          key: "approve",
          label: s(t.APPROVE),
          onClick: () => $t(n)
        },
        {
          key: "delete",
          label: s(t.DELETE),
          danger: !0,
          onClick: () => Bt(n)
        }
      ];
      return D.value || r.push({
        key: "more",
        label: s(t.MORE),
        suffixCaret: !0,
        onClick: (L) => xt(L, n)
      }), r;
    }, Gt = () => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      if (F.value.length === 0) {
        A.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      Ie.requestConfirm();
    }, Wt = async () => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      if (F.value.length === 0) {
        A.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const n = [...F.value];
      try {
        await oe(n), A.info(p(t.DELETE)), await xe(n);
      } catch (r) {
        const L = te(r).info || r?.message || s(t.UNKNOWN_ERROR);
        l.error("moderation", `bulk delete failed (ErrorCode: ${te(r).code || "N/A"}):`, r), A.error(`【${s(t.BULK_DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: L })}`);
      }
    };
    ve(
      [m, () => I.value?.createdAt],
      ([n, r]) => {
        n && r != null && $e(1);
      },
      { immediate: !0 }
    ), $(() => [
      { label: s(t.REFRESH_OFF), value: 0 },
      { label: s(t.TEN_SECONDS), value: 10 },
      { label: s(t.THIRTY_SECONDS), value: 30 },
      { label: s(t.ONE_MINUTE), value: 60 },
      { label: s(t.FIVE_MINUTES), value: 300 }
    ]);
    const Kt = N(30), { confirmDialog: Be, requestConfirm: qt, cancelConfirm: rt, executeWithConfirm: jt, loading: ct } = Je({
      operationName: s(t.SEND_VIOLATION_WARNING),
      action: async () => {
        if (!m.value) throw new Error("liveId is required");
        const n = H.value?.liveName || m.value;
        await Fn(m.value, {
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
      errorMessage: b(t.OP_SEND),
      showSuccess: !0
    }), Ht = () => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      qt();
    }, Ee = Je({
      operationName: s(t.FORCE_STOP),
      action: async () => {
        if (!H.value) throw new Error("liveInfo is null");
        return Y(H.value.id || H.value.liveId);
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.FORCE_STOP) }),
        content: s(t.FORCE_STOP_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      onSuccess: () => {
        o.push(v.value);
      }
    }), Ie = Je({
      operationName: s(t.BULK_APPROVE),
      action: async () => {
        const n = O.value.filter((R) => F.value.includes(R.id)).sort((R, ce) => R.createdAtMs - ce.createdAtMs), r = n.map((R) => R.id), L = n.map((R) => ({ id: R.id, content: R.content, userId: R.userId }));
        await W({ ids: r, items: L, liveId: m.value });
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.BULK_APPROVE) }),
        content: s(t.BULK_APPROVE_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      showSuccess: !0,
      onSuccess: async () => {
        const n = [...F.value];
        await xe(n);
      }
    }), Re = $(() => Ee.confirmDialog.value ? Ee.confirmDialog.value : Ie.confirmDialog.value ? Ie.confirmDialog.value : null), Yt = () => {
      Ee.confirmDialog.value ? Ee.executeWithConfirm() : Ie.confirmDialog.value && Ie.executeWithConfirm();
    }, zt = () => {
      Ee.confirmDialog.value ? Ee.cancelConfirm() : Ie.confirmDialog.value && Ie.cancelConfirm();
    }, Jt = $(() => Ee.confirmDialog.value ? Ee.loading.value : Ie.confirmDialog.value ? Ie.loading.value : !1);
    let ue = null, _e = null;
    const Qt = $(
      () => I.value?.liveOwner?.userId || H.value?.anchor.userId || ""
    ), Xt = $(
      () => Oe.value?.nick || Et(
        I.value?.liveOwner,
        H.value?.anchor.nick || s(t.UNKNOWN_HOST)
      )
    ), Zt = $(
      () => Oe.value?.avatarUrl || It(I.value?.liveOwner) || H.value?.anchor.avatarUrl
    ), en = $(() => ({
      liveInfo: H.value,
      liveAnchorAvatar: Zt.value,
      liveAnchorName: Xt.value,
      currentLive: I.value,
      isMockMode: f,
      liveControlSlots: Q,
      handleLeaveLive: dt
    })), tn = $(() => ({
      liveId: m.value,
      disabled: ie.value,
      currentUserId: De.value,
      anchorUserId: Qt.value,
      currentLive: I.value,
      roomJoined: ke.value
    })), We = (n, r) => {
      n === "success" ? (j.value = r, setTimeout(() => j.value = "", 3e3)) : (ee.value = r, setTimeout(() => ee.value = "", 3e3));
    }, nn = (n) => n >= 1e4 ? (n / 1e4).toFixed(1) + "w" : n.toLocaleString(), an = (n) => {
      n < 0 && (n = 0);
      const r = Math.floor(n / 86400), L = Math.floor(n % 86400 / 3600), R = Math.floor(n % 3600 / 60), ce = n % 60, we = `${L.toString().padStart(2, "0")}:${R.toString().padStart(2, "0")}:${ce.toString().padStart(2, "0")}`;
      return r > 0 ? `${r}${s(t.DAYS)} ${we}` : we;
    }, dt = () => {
      o.push(v.value);
    }, on = () => {
      if (ie.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      Ee.requestConfirm();
    }, sn = async () => {
      if (console.log("[LiveControl][fetchRoomInfo] start, liveId:", m.value), !!m.value)
        try {
          const n = await P(m.value);
          if (console.log("[LiveControl][fetchRoomInfo] fetchLiveDetail result:", n ? "exists" : "null"), n) {
            const r = Et(n, n.anchor?.userId || "-"), L = It(n);
            if (n.anchor ? Oe.value = {
              nick: n.anchor.nick || r,
              avatarUrl: n.anchor.avatarUrl || L
            } : Oe.value = {
              nick: r,
              avatarUrl: L
            }, H.value = {
              id: n.liveId,
              title: n.liveName || s(t.UNNAMED_LIVE_SHORT),
              coverUrl: n.coverUrl || An,
              anchor: {
                userId: n.anchor?.userId || "",
                nick: r,
                avatarUrl: L
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
              Ue.value = !0, ue && (clearInterval(ue), ue = null);
            else {
              const R = n.createdAt && n.createdAt > 1e9 ? n.createdAt * 1e3 : null;
              if (Ae.value = R, R) {
                const ce = Math.floor((Date.now() - R) / 1e3);
                Ce.value = ce > 0 ? ce : 0;
              }
            }
          } else
            Te.value = !1;
        } catch (n) {
          l.error("fetchRoomInfo", `获取直播信息失败 (ErrorCode: ${te(n).code || "N/A"})`, n);
          const r = n instanceof Error ? n : new Error(String(n));
          r.message?.includes("network") || r.message?.includes("fetch") ? We("error", s(t.NETWORK_ERROR)) : We("error", b(t.OP_REQUEST));
        } finally {
          Te.value = !1;
        }
    }, ut = async () => {
      if (!(!m.value || !I.value))
        try {
          const n = await T();
          n && (k.totalViewers = n.viewCount || 0, k.totalMsgCount = n.commentCount || 0, k.totalLikesReceived = n.likeCount || 0, k.totalGiftsSent = n.giftCount || 0, k.totalGiftCoins = n.giftAmount || 0, k.totalUniqueGiftSenders = n.giftUserCount || 0, E());
        } catch (n) {
          const r = n instanceof Error ? n : new Error(String(n));
          l.error("获取统计数据失败", `(ErrorCode: ${te(n).code || "N/A"}) ${r.message || ""}`, r);
        }
    }, ln = () => {
      ue && (clearInterval(ue), ue = null), _e && (clearInterval(_e), _e = null), H.value && (H.value = { ...H.value, activityStatus: 2 }), ne(null), Ue.value = !0;
    };
    return ve(
      m,
      (n) => {
        n && (ke.value = !1, sn(), ut(), I.value?.createdAt != null && $e(1));
      },
      { immediate: !0 }
    ), ve([() => Ae.value, ie], ([n, r]) => {
      ue && (clearInterval(ue), ue = null), n && n > 1e12 && !r && (ue = window.setInterval(() => {
        const L = Math.floor((Date.now() - n) / 1e3);
        Ce.value = L > 0 ? L : 0;
      }, 1e3));
    }, { immediate: !0 }), ve(
      [Kt, ie, m, Z, D],
      ([n, r, L, R, ce]) => {
        _e && (clearInterval(_e), _e = null), n > 0 && L && !r && (_e = window.setInterval(() => {
          ut(), ce && !R || st(!0);
        }, n * 1e3));
      },
      { immediate: !0 }
    ), ve(x, (n) => {
      k.onlineCount = n;
    }), ye(() => {
      m.value && l.info("LiveControl", "Component unmounting, liveId:", m.value), ue && clearInterval(ue), _e && clearInterval(_e);
    }), (n, r) => {
      const L = be("t-dialog");
      return u(), C("div", vi, [
        g(e(na), {
          "success-msg": e(j),
          "error-msg": e(ee)
        }, null, 8, ["success-msg", "error-msg"]),
        g(e(sa), {
          "handle-leave-live": dt,
          "handle-violation-warning": Ht,
          "handle-force-stop-live": on,
          disabled: ie.value
        }, null, 8, ["disabled"]),
        i("main", mi, [
          g(e(mo), {
            "live-id": m.value,
            "current-live": e(I),
            "is-mock-mode": e(f),
            "live-ended-overlay-visible": Ue.value,
            "current-user-id": De.value,
            "video-monitor": en.value,
            interaction: tn.value,
            "active-tab": Ge.value,
            "onUpdate:activeTab": r[0] || (r[0] = (R) => Ge.value = R),
            onLiveEnded: ln,
            onJoinedLive: r[1] || (r[1] = (R) => ke.value = !0)
          }, null, 8, ["live-id", "current-live", "is-mock-mode", "live-ended-overlay-visible", "current-user-id", "video-monitor", "interaction", "active-tab"]),
          i("aside", fi, [
            g(e(Vo), {
              stats: k,
              "live-duration": Ce.value,
              "update-time-text": h.value,
              "interaction-rate": ge.value,
              "format-number": nn,
              "format-duration": an
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            g(Tt, {
              "slot-component": e(Q)?.customControlPanel,
              "slot-props": { liveInfo: H.value, stats: k }
            }, null, 8, ["slot-component", "slot-props"]),
            g(e(ci), {
              "moderation-mode": e(X),
              "moderation-list": O.value,
              "moderation-loading": e(re),
              "moderation-page": J.value,
              "moderation-total": w.value,
              "moderation-total-pages": ze.value,
              "moderation-page-numbers": Rt.value,
              "moderation-selected-ids": F.value,
              "moderation-columns": St.value,
              "is-all-on-page-selected": wt.value,
              "custom-moderation-toggle-enabled": e(Z),
              "on-custom-toggle-change": e(de),
              "update-time-text": h.value,
              disabled: ie.value,
              "handle-bulk-approve": Gt,
              "handle-bulk-delete": Wt,
              "handle-refresh-moderation": st,
              "toggle-select-one": Ut,
              "toggle-select-all": kt,
              "go-to-moderation-page": Dt,
              "get-moderation-actions": Vt,
              "format-moderation-time": e($n)
            }, null, 8, ["moderation-mode", "moderation-list", "moderation-loading", "moderation-page", "moderation-total", "moderation-total-pages", "moderation-page-numbers", "moderation-selected-ids", "moderation-columns", "is-all-on-page-selected", "custom-moderation-toggle-enabled", "on-custom-toggle-change", "update-time-text", "disabled", "format-moderation-time"])
          ])
        ]),
        Re.value ? (u(), G(e(Xe), {
          key: 0,
          visible: Re.value.visible,
          "onUpdate:visible": r[2] || (r[2] = (R) => Re.value.visible = R),
          title: Re.value.title,
          content: Re.value.content,
          "confirm-text": Re.value.confirmText,
          loading: Jt.value,
          "on-confirm": Yt,
          "on-close": zt
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        U.value ? (u(), G(e(Xe), {
          key: 1,
          visible: U.value,
          "onUpdate:visible": r[3] || (r[3] = (R) => U.value = R),
          title: fe.value,
          content: M.value,
          loading: he.value,
          "on-confirm": async () => {
            if (Le.value) {
              he.value = !0;
              try {
                await Le.value();
              } finally {
                he.value = !1, U.value = !1;
              }
            } else
              U.value = !1;
          },
          "on-close": () => {
            he.value = !1, U.value = !1, Le.value = null;
          }
        }, null, 8, ["visible", "title", "content", "loading", "on-confirm", "on-close"])) : K("", !0),
        D.value ? K("", !0) : (u(), G(e(di), {
          key: 2,
          visible: !!pe.value,
          position: pe.value || { x: 0, y: 0 },
          onRelease: Ft,
          onClose: lt
        }, null, 8, ["visible", "position"])),
        e(Be) ? (u(), G(L, {
          key: 3,
          visible: e(Be).visible,
          header: e(Be).title,
          "confirm-btn": {
            content: e(Be).confirmText ?? e(s)(e(t).CONFIRM),
            loading: e(ct),
            shape: "round"
          },
          "cancel-btn": {
            content: e(s)(e(t).CANCEL),
            disabled: e(ct),
            shape: "round"
          },
          onConfirm: e(jt),
          onCancel: e(rt),
          onClose: e(rt)
        }, {
          default: y(() => [
            i("p", null, c(e(Be).content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn", "onConfirm", "onCancel", "onClose"])) : K("", !0)
      ]);
    };
  }
}), ki = /* @__PURE__ */ Xn(gi, [["__scopeId", "data-v-403d58e3"]]);
export {
  ki as default
};
