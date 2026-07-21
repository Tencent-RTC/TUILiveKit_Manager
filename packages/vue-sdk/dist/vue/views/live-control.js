import { defineComponent as le, openBlock as u, createElementBlock as T, toDisplayString as c, createCommentVNode as K, resolveComponent as be, createElementVNode as i, createVNode as g, unref as e, withCtx as y, createTextVNode as V, Fragment as Fe, createBlock as G, computed as $, ref as I, h as Se, watch as ve, onUnmounted as ye, Teleport as Ze, normalizeStyle as et, renderList as tt, onMounted as Lt, withDirectives as vt, vShow as mt, withModifiers as rn, nextTick as Ve, mergeProps as ft, normalizeClass as cn, reactive as Qe } from "vue";
import { useRoute as dn, useRouter as un } from "vue-router";
import { Tooltip as Ne, MessagePlugin as A } from "tdesign-vue-next";
import { useUIKit as me } from "@tencentcloud/uikit-base-component-vue3";
import { LiveView as vn, useLiveAudienceState as je, LiveAudienceList as mn, useLoginState as fn, useLiveListState as gn, useLivePlayerState as bn } from "tuikit-atomicx-vue3";
import { _ as Ct } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.D5UgT9kd.js";
import { ArrowLeftIcon as hn, NotificationIcon as En, StopCircleIcon as In, CheckCircleIcon as He, ChatOffIcon as Tt, UserCheckedIcon as Mt, UserBlockedIcon as yt, MoreIcon as _n, InfoCircleIcon as Me, CloseCircleIcon as Nn, RefreshIcon as Ln, ChevronDownIcon as gt } from "tdesign-icons-vue-next";
import { I as t, ay as Cn, h as Ye, l as Tn, d as At, y as ae, s as Ot, r as bt, ac as Mn, m as yn, aE as An } from "../../chunks/layout.QDR0rddX.js";
import { bg as On, b8 as Pe, bb as ht, l as pn, D as Rn, bQ as wn, bF as Sn, a6 as Dn, aj as Un, b_ as Ke, bc as kn, bE as Et, bD as It, aO as $n, Y as qe, ao as xn, aI as Bn, aB as _t, aR as Pn, bN as Fn, ah as Vn } from "../../chunks/main-layout.BgP9Ncvl.js";
import { BarrageList as Gn, BarrageInput as Wn, LiveListEvent as Kn } from "tuikit-atomicx-vue3/live";
import { _ as nt } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.CG8Q8evK.js";
import { c as qn, C as jn } from "../../chunks/user-action-dropdown.jDY49WGX.js";
import { useLiveMonitorState as at, useRiskControlState as pt, useConfirmAction as Je } from "../../vue.js";
import { u as Hn } from "../../chunks/useAsyncAction.hiF1kgA5.js";
import { p as Yn, b as zn, g as Jn } from "../../chunks/columns.DGoQAesP.js";
import { a as ot, _ as Qn } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import "../../chunks/action-buttons.ChAJrOyM.js";
import { _ as Xn } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const Zn = { class: "toast-area" }, ea = {
  key: 0,
  class: "status-success"
}, ta = {
  key: 1,
  class: "status-error"
}, na = /* @__PURE__ */ le({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(a) {
    return (l, d) => (u(), T("div", Zn, [
      a.successMsg ? (u(), T("div", ea, c(a.successMsg), 1)) : K("", !0),
      a.errorMsg ? (u(), T("div", ta, c(a.errorMsg), 1)) : K("", !0)
    ]));
  }
}), aa = { class: "live-control-navbar" }, oa = { class: "nav-left" }, ia = { class: "nav-right" }, sa = /* @__PURE__ */ le({
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
      return u(), T("header", aa, [
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
}, Ea = /* @__PURE__ */ le({
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
      m.src = Cn;
    }
    return (o, m) => (u(), T("section", la, [
      g(Ct, {
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
          a.isMockMode ? (u(), T(Fe, { key: 0 }, [
            a.liveInfo?.coverUrl ? (u(), T("div", va, [
              i("img", {
                src: a.liveInfo.coverUrl,
                alt: "cover",
                class: "mock-cover-img",
                onError: d
              }, null, 40, ma)
            ])) : K("", !0)
          ], 64)) : a.sdkReady ? (u(), G(e(vn), { key: 1 })) : K("", !0),
          a.liveEndedOverlayVisible ? (u(), T("div", fa, [
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
}), Ia = { class: "message-list-scroll-area barrage-list-wrapper" }, _a = 12 * 1024, Na = /* @__PURE__ */ le({
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
    const v = a, { currentLive: f } = at(), { audienceList: s, disableSendMessage: p } = je(), b = $(() => v.currentLive || f.value), N = I(!1), x = I({ top: 0, left: 0 }), C = I(null), te = I(null), H = I(null), S = I(null), P = (_) => s.value.find((B) => B.userId === _), Z = (_) => {
      const B = P(_);
      if (B)
        return B.isMessageDisabled === !0;
      const W = v.mutedList.find((q) => q.userId === _);
      return W ? W.endTime > Date.now() / 1e3 : !1;
    }, J = (_) => {
      const B = v.bannedList.find((W) => W.userId === _);
      return B ? B.endTime > Date.now() / 1e3 : !1;
    }, Y = (_, B) => {
      if (_.preventDefault(), _.stopPropagation(), Number(B.sender.userRole) !== 2 || On(v.liveId || "", B.sender.userId))
        return;
      const q = _.target.closest(".message-item");
      if (!q) return;
      const ie = q.getBoundingClientRect(), D = ie.bottom + 4, j = Math.min(
        ie.left,
        window.innerWidth - 150
      );
      x.value = { top: D, left: Math.max(0, j) }, C.value = B, N.value = !0;
    }, ee = () => {
      if (C.value && v.onBanUser) {
        const _ = C.value.sender.userId;
        if (_ === Pe(b.value?.liveOwner?.userId || "")) {
          N.value = !1, C.value = null;
          return;
        }
        if (ht(_, s.value)) {
          N.value = !1, C.value = null;
          return;
        }
        const B = C.value.sender.userName || C.value.sender.nameCard || C.value.sender.userId, W = J(_);
        v.onBanUser(_, B, W);
      }
      N.value = !1, C.value = null;
    }, Q = async () => {
      if (!C.value) return;
      const _ = C.value.sender.userId;
      if (_ === Pe(b.value?.liveOwner?.userId || "")) {
        N.value = !1, C.value = null;
        return;
      }
      if (ht(_, s.value)) {
        N.value = !1, C.value = null;
        return;
      }
      const B = C.value.sender.userName || C.value.sender.nameCard || C.value.sender.userId, W = Z(_);
      try {
        await p({ userId: _, isDisable: !W }), l.info("muteOperation", W ? "解除禁言成功" : "禁言成功");
      } catch (q) {
        l.error("SDK 禁言失败，使用备用方法", "", q), v.onMuteUser && v.onMuteUser(_, B, W);
      }
      N.value = !1, C.value = null;
    }, re = le({
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
            const j = JSON.parse(_.message.data), ne = j.giftName || "", fe = j.giftId;
            if (fe) {
              const M = o.value.find((U) => U.id === fe);
              M?.languageList ? q = Tn(M.languageList)?.name || ne : q = ne;
            } else
              q = ne;
          } catch {
            q = _.message.data || "";
          }
        else
          q = _.message.data || "";
        const ie = Yn(q), D = () => ie.map((j, ne) => j.type === "emoji" ? Se("img", {
          key: ne,
          class: "message-emoji",
          src: j.src,
          alt: j.key
        }) : Se("span", { key: ne, class: "message-text" }, j.text));
        return () => Se("div", {
          class: ["message-item", W ? "host" : ""],
          style: _.style,
          onContextMenu: (j) => Y(j, _.message)
        }, [
          // 主播标识
          W ? Se("span", { class: "message-badge" }, d(t.HOST)) : null,
          // 昵称
          Se("span", { class: "message-username", onClick: (j) => Y(j, _.message) }, `${B}: `),
          // 消息内容
          Se("span", { class: "message-content" }, D())
        ]);
      }
    }), oe = (_) => {
      H.value && H.value.contains(_.target) || (N.value = !1, C.value = null);
    };
    return ve(N, (_) => {
      _ ? document.addEventListener("mousedown", oe) : document.removeEventListener("mousedown", oe);
    }), ye(() => {
      document.removeEventListener("mousedown", oe);
    }), (_, B) => (u(), T("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: te
    }, [
      i("div", Ia, [
        g(e(Gn), {
          ref_key: "barrageListRef",
          ref: S,
          Message: e(re)
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
        N.value && C.value ? (u(), T("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: H,
          class: "user-action-dropdown",
          style: et({
            position: "fixed",
            top: `${x.value.top}px`,
            left: `${x.value.left}px`
          })
        }, [
          i("button", {
            class: "dropdown-item",
            onClick: Q
          }, [
            Z(C.value.sender.userId) ? (u(), G(e(He), { key: 0 })) : (u(), G(e(Tt), { key: 1 })),
            i("span", null, c(Z(C.value.sender.userId) ? e(d)(e(t).UNMUTE) : e(d)(e(t).MUTE)), 1)
          ]),
          i("button", {
            class: "dropdown-item danger",
            onClick: ee
          }, [
            J(C.value.sender.userId) ? (u(), G(e(Mt), { key: 0 })) : (u(), G(e(yt), { key: 1 })),
            i("span", null, c(J(C.value.sender.userId) ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
          ])
        ], 4)) : K("", !0)
      ]))
    ], 512));
  }
}), La = ["innerHTML"], Xe = /* @__PURE__ */ le({
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
      const N = be("t-dialog");
      return u(), G(N, {
        visible: v.value,
        "onUpdate:visible": b[0] || (b[0] = (x) => v.value = x),
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
}), Ca = { class: "member-list-panel-modal" }, Ta = {
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
}, Da = /* @__PURE__ */ le({
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
          i("div", Ca, [
            a.memberListLoading ? (u(), T("div", Ta, c(e(d)(e(t).LOADING)), 1)) : a.mutedList.length === 0 ? (u(), T("div", Ma, c(e(d)(e(t).NO_MUTED_MEMBERS)), 1)) : (u(), T("table", ya, [
              i("thead", null, [
                i("tr", null, [
                  i("th", null, c(e(d)(e(t).USER)), 1),
                  i("th", null, c(e(d)(e(t).UNMUTE_TIME)), 1),
                  i("th", null, c(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              i("tbody", null, [
                (u(!0), T(Fe, null, tt(a.mutedList, (b) => (u(), T("tr", {
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
                    a.unmutingUserId === b.userId ? (u(), T("button", Sa, c(e(d)(e(t).UNMUTING)), 1)) : (u(), G(ot, {
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
}, Ka = /* @__PURE__ */ le({
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
            a.memberListLoading ? (u(), T("div", ka, c(e(d)(e(t).LOADING)), 1)) : a.bannedList.length === 0 ? (u(), T("div", $a, c(e(d)(e(t).NO_BANNED_MEMBERS)), 1)) : (u(), T("table", xa, [
              i("thead", null, [
                i("tr", null, [
                  i("th", null, c(e(d)(e(t).USER)), 1),
                  i("th", null, c(e(d)(e(t).BAN_LIFT_TIME)), 1),
                  i("th", null, c(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              i("tbody", null, [
                (u(!0), T(Fe, null, tt(a.bannedList, (b) => (u(), T("tr", {
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
                    a.unbanningUserId === b.userId ? (u(), T("button", Wa, c(e(d)(e(t).UNBANNING)), 1)) : (u(), G(ot, {
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
}), qa = { class: "dropdown-header" }, ja = /* @__PURE__ */ le({
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
    const { t: d } = me(), o = I(null), m = a, v = l, f = (b) => {
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
    return (b, N) => (u(), G(Ze, { to: "body" }, [
      a.visible ? (u(), T("div", {
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
        N[0] || (N[0] = i("div", { class: "dropdown-divider" }, null, -1)),
        a.isMuted ? (u(), T("button", {
          key: 0,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(He)),
          V(" " + c(e(d)(e(t).UNMUTE)), 1)
        ])) : (u(), T("button", {
          key: 1,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(Tt)),
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
}, io = ["title", "disabled", "onClick"], so = { class: "audience-bottom-actions" }, lo = ["disabled"], ro = ["disabled"], co = /* @__PURE__ */ le({
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
      muteMember: N,
      unmuteMember: x,
      banMember: C,
      unbanMember: te,
      fetchMutedList: H,
      fetchBannedList: S
    } = pt({ liveId: v.liveId, pageSize: 100 }), { updateLive: P } = at(), { audienceList: Z } = je(), J = $(() => v.currentLive?.isMessageDisabled === !0), Y = I(!1), ee = I(!1), Q = I(null), re = I(!1);
    function oe(h) {
      Q.value = { ...h, visible: !0 };
    }
    function _() {
      Q.value = null, re.value = !1;
    }
    async function B() {
      if (!(!Q.value || re.value)) {
        re.value = !0;
        try {
          await Q.value.action();
        } catch (h) {
          d.error("confirm action failed:", h);
        } finally {
          re.value = !1, Q.value = null;
        }
      }
    }
    function W(h, E, O) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      const X = Pe(v.anchorUserId);
      if (h !== X) {
        if (O) {
          x({ memberAccounts: [h] }).then(() => {
            A.success(m(t.UNMUTE, E));
          }).catch((ce) => {
            const w = ae(ce).info || ce?.message || o(t.UNKNOWN_ERROR);
            A.error(`【${o(t.UNMUTE)}】${o(t.OPERATION_FAILED, { error: w })}`);
          });
          return;
        }
        oe({
          title: o(t.CONFIRM_ACTION_TITLE, { action: o(t.MUTE) }),
          content: o(t.MUTE_CONFIRM_CONTENT, { name: E }),
          confirmText: o(t.CONFIRM),
          action: async () => {
            await N({ memberAccounts: [h], muteTime: pn }), A.success(m(t.MUTE, E));
          }
        });
      }
    }
    function q(h, E, O) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      const X = Pe(v.anchorUserId);
      if (h !== X) {
        if (O) {
          te({ memberAccounts: [h] }).then(() => {
            A.success(m(t.UNBAN, E));
          }).catch((ce) => {
            const w = ae(ce).info || ce?.message || o(t.UNKNOWN_ERROR);
            A.error(`【${o(t.UNBAN)}】${o(t.OPERATION_FAILED, { error: w })}`);
          });
          return;
        }
        oe({
          title: o(t.CONFIRM_ACTION_TITLE, { action: o(t.BAN) }),
          content: o(t.BAN_CONFIRM_CONTENT, { name: E }),
          confirmText: o(t.CONFIRM),
          action: async () => {
            await C({ memberAccounts: [h], duration: Rn }), A.success(m(t.BAN, E));
          }
        });
      }
    }
    function ie(h) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      const E = !!h;
      if (E !== J.value) {
        if (!E) {
          Y.value = !0, P({ liveId: v.liveId, isMessageDisabled: !1 }).then(() => {
            A.success(m(t.OP_DISABLE, t.ALL_MEMBER_MUTE));
          }).catch((O) => {
            const X = ae(O).info || O?.message || o(t.UNKNOWN_ERROR);
            A.error(`【${o(t.ALL_MEMBER_MUTE)}】${o(t.OPERATION_FAILED, { error: X })}`);
          }).finally(() => {
            Y.value = !1;
          });
          return;
        }
        oe({
          title: o(t.ENABLE_ALL_MEMBER_MUTE),
          content: o(t.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT),
          confirmText: o(t.CONFIRM_ENABLE),
          action: async () => {
            Y.value = !0;
            try {
              await P({ liveId: v.liveId, isMessageDisabled: !0 }), A.success(m(t.OP_ENABLE, t.ALL_MEMBER_MUTE));
            } finally {
              Y.value = !1;
            }
          }
        });
      }
    }
    const D = I(null);
    function j(h, E, O) {
      h.stopPropagation();
      const X = h.currentTarget.getBoundingClientRect();
      D.value = { userId: E, userName: O, x: X.right, y: X.bottom + 4 };
    }
    function ne() {
      D.value = null;
    }
    function fe() {
      if (!D.value) return;
      const { userId: h, userName: E } = D.value;
      W(h, E, U(h)), ne();
    }
    function M() {
      if (!D.value) return;
      const { userId: h, userName: E } = D.value;
      q(h, E, he(h)), ne();
    }
    function U(h) {
      return p.value.some((E) => E.userId === h);
    }
    function he(h) {
      return b.value.some((E) => E.userId === h);
    }
    function Le(h) {
      const E = Z.value.find((O) => O.userId === h);
      if (E && "avatarUrl" in E && typeof E.avatarUrl == "string")
        return E.avatarUrl;
    }
    function De(h) {
      const E = Z.value.find((O) => O.userId === h);
      return E?.userName ? E.userName : h;
    }
    const Ce = I(null), z = I(null);
    async function Ue(h) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      if (!Ce.value) {
        Ce.value = h, await Ve();
        try {
          await x({ memberAccounts: [h] }), A.success(m(t.UNMUTE, h));
        } catch (E) {
          const O = ae(E).info || E?.message || o(t.UNKNOWN_ERROR);
          A.error(`【${o(t.UNMUTE)}】${o(t.OPERATION_FAILED, { error: O })}`);
        } finally {
          Ce.value = null;
        }
      }
    }
    async function se(h) {
      if (v.disabled) {
        A.warning(o(t.LIVE_ENDED));
        return;
      }
      if (!z.value) {
        z.value = h, await Ve();
        try {
          await te({ memberAccounts: [h] }), A.success(m(t.UNBAN, h));
        } catch (E) {
          const O = ae(E).info || E?.message || o(t.UNKNOWN_ERROR);
          A.error(`【${o(t.UNBAN)}】${o(t.OPERATION_FAILED, { error: O })}`);
        } finally {
          z.value = null;
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
          onClick: () => se(h)
        }
      ];
    }
    const Te = I(!1), Ae = I(!1);
    function Oe() {
      ee.value = !0, H().finally(() => {
        ee.value = !1;
      }), Te.value = !0;
    }
    function k() {
      ee.value = !0, S().finally(() => {
        ee.value = !1;
      }), Ae.value = !0;
    }
    let ge = null;
    return ve(
      () => v.activeTab,
      (h) => {
        if (h === "audience") {
          ee.value = !0, Promise.all([H(), S()]).finally(() => {
            ee.value = !1;
          });
          const E = () => {
            document.querySelectorAll(".viewer-name").forEach((X) => {
              const ce = X, w = ce.textContent || "";
              ce.title !== w && (ce.title = w);
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
      v.activeTab === "audience" && (ee.value = !0, Promise.all([H(), S()]).finally(() => {
        ee.value = !1;
      }));
    }), ye(() => {
      ge?.disconnect(), ge = null;
    }), (h, E) => {
      const O = be("t-tab-panel"), X = be("t-tabs"), ce = be("t-switch");
      return u(), T("div", Ha, [
        i("div", Ya, [
          g(X, {
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
            g(ce, {
              value: J.value,
              disabled: Y.value || a.disabled,
              onChange: ie
            }, null, 8, ["value", "disabled"]),
            i("span", Ja, c(e(o)(e(t).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        i("div", Qa, [
          vt(i("div", Xa, [
            J.value ? (u(), T("div", Za, [
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
                  w.userId === a.currentUserId ? (u(), T("span", no, c(e(o)(e(t).ME)), 1)) : w.userRole !== 0 && w.userId !== e(Pe)(a.anchorUserId) ? (u(), T("div", ao, [
                    U(w.userId) ? (u(), T("span", oo, c(e(o)(e(t).MUTED)), 1)) : K("", !0),
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
        Q.value ? (u(), G(Xe, {
          key: 0,
          visible: Q.value.visible,
          "onUpdate:visible": E[1] || (E[1] = (w) => Q.value.visible = w),
          title: Q.value.title,
          content: Q.value.content,
          "confirm-text": Q.value.confirmText,
          loading: re.value,
          "on-confirm": B,
          "on-close": _
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        g(Da, {
          visible: Te.value,
          "onUpdate:visible": E[2] || (E[2] = (w) => Te.value = w),
          "muted-list": e(p),
          "member-list-loading": ee.value,
          "unmuting-user-id": Ce.value,
          "get-user-avatar": Le,
          "get-user-name-from-cache": De,
          "get-muted-member-actions": Ge
        }, null, 8, ["visible", "muted-list", "member-list-loading", "unmuting-user-id"]),
        g(Ka, {
          visible: Ae.value,
          "onUpdate:visible": E[3] || (E[3] = (w) => Ae.value = w),
          "banned-list": e(b),
          "member-list-loading": ee.value,
          "unbanning-user-id": z.value,
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
          onClose: ne
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"])
      ]);
    };
  }
}), uo = { class: "left-content-area" }, Nt = 5, vo = 2e3, mo = /* @__PURE__ */ le({
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
    const d = Ye("LiveControlPanel"), o = a, m = l, { login: v, loginUserInfo: f } = fn(), { joinLive: s, leaveLive: p, subscribeEvent: b, unsubscribeEvent: N } = gn(), { fetchAudienceList: x } = je(), { hideControlBar: C, showControlBar: te, setAutoHideDelay: H } = bn();
    function S() {
      try {
        if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
          return "admin";
      } catch {
      }
      return "audience";
    }
    const P = I(!1), Z = I(""), J = I(!1), Y = I(""), ee = I(!1), Q = I(!1), re = I(!1), oe = I(0), _ = S(), B = $(
      () => f.value?.userId || Y.value || o.currentUserId || Ot() || ""
    ), W = $(
      () => o.liveEndedOverlayVisible || ee.value && !o.currentLive && !o.isMockMode
    );
    function q() {
      const M = Kn;
      return M.onLiveEnded || M.ON_LIVE_ENDED || "";
    }
    const ie = q(), D = () => {
      m("live-ended");
    }, j = async () => {
      if (o.isMockMode) {
        P.value = !0;
        return;
      }
      if (!P.value && !Q.value) {
        Q.value = !0;
        try {
          let M;
          if (_ === "audience" ? (d.info("LiveControlLeftPanel", "Audience mode (internal), creating basic account..."), M = await Sn("audience")) : (d.info("LiveControlLeftPanel", "Admin mode, resolving account..."), M = await Mn()), !M || M.sdkAppId === 0 || !M.userId || !M.userSig) {
            d.warn("LiveControlLeftPanel", "No valid account obtained, will retry"), ne();
            return;
          }
          d.info("LiveControlLeftPanel", "Logging in as:", _, "userId:", M.userId), await v({ sdkAppId: M.sdkAppId, userId: M.userId, userSig: M.userSig }), await Ve(), P.value = !0, Y.value = M.userId, oe.value = 0;
        } catch (M) {
          if (M?.code === 2025 || M?.message?.includes("重复登录")) {
            await Ve(), P.value = !0, Y.value = Y.value || "recovered", oe.value = 0;
            return;
          }
          d.error("LiveControlLeftPanel", "TUIKit login failed:", M), ne();
        } finally {
          Q.value = !1;
        }
      }
    }, ne = () => {
      if (oe.value >= Nt) {
        d.error("LiveControlLeftPanel", `Login failed after ${Nt} retries, giving up`);
        return;
      }
      const M = vo * (oe.value + 1);
      d.info("LiveControlLeftPanel", `Scheduling login retry #${oe.value + 1} in ${M}ms`), setTimeout(() => {
        !P.value && !o.isMockMode && oe.value++;
      }, M);
    }, fe = async () => {
      if (!(!o.liveId || !o.currentLive || !P.value || Z.value === o.liveId) && !re.value) {
        re.value = !0;
        try {
          d.info("LiveControlLeftPanel", "Joining live:", o.liveId, "as:", _);
          const M = bt();
          jn.callExperimentalAPI(JSON.stringify({
            api: "setCurrentLanguage",
            params: { language: M === "en-US" ? "en" : M === "zh-CN" ? "zh-Hans" : M }
          })).catch(() => {
          }), await s({ liveId: o.liveId }), Z.value = o.liveId, await x().catch((U) => {
            d.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", U);
          }), C(), H(0), !J.value && b && ie && (d.info("LiveControlLeftPanel", "Subscribing to live ended event:", ie), b(ie, D), J.value = !0), m("joined-live"), console.log("[LiveControlLeftPanel] adding live admin:", Y.value, "room:", o.liveId), Dn(o.liveId, Y.value).catch((U) => {
            console.error("[LiveControlLeftPanel] addLiveAdmin failed:", U), d.warn("LiveControlLeftPanel", "addLiveAdmin failed:", U);
          });
        } catch (M) {
          d.error("LiveControlLeftPanel", "joinLive failed:", M);
        } finally {
          re.value = !1, ee.value = !0;
        }
      }
    };
    return ve(
      () => [o.liveId, o.currentLive, B.value, P.value, oe.value],
      async () => {
        if (!(!o.liveId || !o.currentLive) && (P.value || await j(), !!P.value)) {
          if (!o.isMockMode && _ === "audience" && Y.value) {
            const M = bt() === "en-US" ? "admin" : "管理员";
            wn(Y.value, M).catch((U) => {
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
        Z.value = "", ee.value = !1;
      }
    ), ye(() => {
      J.value && N && ie && (N(ie, D), J.value = !1), Z.value && p?.().catch?.((M) => {
        d.error("LiveControlLeftPanel", "leaveLive on unmount failed:", M);
      }), te();
    }), (M, U) => (u(), T("div", uo, [
      g(Ea, ft(a.videoMonitor, {
        "live-ended-overlay-visible": W.value,
        "sdk-ready": P.value
      }), null, 16, ["live-ended-overlay-visible", "sdk-ready"]),
      g(co, ft(a.interaction, {
        "active-tab": a.activeTab,
        "current-user-id": B.value,
        "onUpdate:activeTab": U[0] || (U[0] = (he) => m("update:activeTab", he))
      }), null, 16, ["active-tab", "current-user-id"])
    ]));
  }
}), fo = { class: "sidebar-stats-card" }, go = { class: "stats-card-header" }, bo = { class: "stats-header-left" }, ho = { class: "live-status-tag" }, Eo = { class: "live-duration-text" }, Io = { class: "update-time" }, _o = { class: "stat-bar-item" }, No = { class: "stat-label" }, Lo = { class: "stat-value" }, Co = { class: "stat-bar-item" }, To = { class: "stat-label" }, Mo = { class: "stat-value" }, yo = { class: "stat-bar-item" }, Ao = { class: "stat-label" }, Oo = { class: "stat-value" }, po = { class: "stat-bar-item" }, Ro = { class: "stat-label" }, wo = { class: "stat-value" }, So = { class: "stat-bar-item" }, Do = { class: "stat-label" }, Uo = { class: "stat-value" }, ko = { class: "stat-bar-item" }, $o = { class: "stat-label" }, xo = { class: "stat-value" }, Bo = { class: "stat-bar-item" }, Po = { class: "stat-label" }, Fo = { class: "stat-value" }, Vo = /* @__PURE__ */ le({
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
    const { t: l } = me(), d = I(null);
    let o = null, m = null, v = null;
    const f = (N, x, C) => {
      const te = Array.from({ length: x }, () => 0);
      return N.forEach((H, S) => {
        const P = S % x;
        te[P] = Math.max(te[P], H);
      }), te.reduce((H, S) => H + S, 0) + C * (x - 1);
    }, s = (N) => {
      const x = Array.from(N.querySelectorAll(":scope > .stat-bar-item")), C = document.createElement("div");
      C.style.position = "absolute", C.style.left = "-99999px", C.style.top = "0", C.style.visibility = "hidden", C.style.pointerEvents = "none", C.style.width = "max-content", document.body.appendChild(C);
      const te = x.map((H) => {
        const S = H.cloneNode(!0);
        return S.style.width = "max-content", S.style.maxWidth = "none", C.appendChild(S), Math.ceil(S.getBoundingClientRect().width);
      });
      return C.remove(), te;
    }, p = () => {
      const N = d.value;
      if (!N || N.clientWidth <= 0) return;
      const x = s(N);
      if (!x.length) return;
      const C = parseFloat(getComputedStyle(N).columnGap) || 0, te = N.clientWidth, H = [7, 4, 3, 2, 1].find((S) => f(x, S, C) <= te + 1) || 1;
      N.style.setProperty("--stats-columns", String(H));
    }, b = () => {
      v !== null && cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        v = null, p();
      });
    };
    return Lt(() => {
      Ve(() => {
        const N = d.value;
        N && (o = new ResizeObserver(b), o.observe(N), m = new MutationObserver(b), m.observe(N, { childList: !0, subtree: !0, characterData: !0 }), b());
      });
    }), ye(() => {
      o?.disconnect(), m?.disconnect(), v !== null && (cancelAnimationFrame(v), v = null);
    }), (N, x) => (u(), T("div", fo, [
      i("div", go, [
        i("div", bo, [
          i("h3", null, c(e(l)(e(t).LIVE_DATA_CONTROL)), 1),
          i("span", ho, [
            x[0] || (x[0] = i("span", { class: "live-status-dot" }, null, -1)),
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
        i("div", Co, [
          i("div", To, [
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
}, li = ["disabled", "onClick"], ri = ["disabled"], ci = /* @__PURE__ */ le({
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
      return u(), T("div", Go, [
        i("div", Wo, [
          i("div", Ko, [
            a.moderationMode !== "custom" ? (u(), T("h3", qo, c(e(l)(e(t).CONTENT_MODERATION)), 1)) : K("", !0),
            a.moderationMode === "custom" ? (u(), G(m, {
              key: 1,
              size: "small",
              value: a.customModerationToggleEnabled,
              disabled: a.disabled,
              onChange: o[0] || (o[0] = (f) => a.onCustomToggleChange?.(f)),
              style: { "margin-left": "12px" }
            }, null, 8, ["value", "disabled"])) : K("", !0),
            a.moderationMode === "custom" ? (u(), T("span", jo, c(e(l)(e(t).CUSTOM_MODERATION_TOGGLE)), 1)) : K("", !0),
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
          a.moderationList.length > 0 ? (u(), T("div", ai, [
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
              (u(!0), T(Fe, null, tt(a.moderationPageNumbers, (f, s) => (u(), T(Fe, {
                key: f === "..." ? `ellipsis-${s}` : f
              }, [
                f === "..." ? (u(), T("span", si, "...")) : (u(), T("button", {
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
}), di = /* @__PURE__ */ le({
  __name: "ModerationDropdown",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["release", "close"],
  setup(a, { emit: l }) {
    const { t: d } = me(), o = I(null), m = a, v = l, f = (p) => {
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
      a.visible ? (u(), T("div", {
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
  const a = I({
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
  }), o = I(!1), m = I(!1), v = I(""), f = I("");
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
    showModerationDropdown: (S, P, Z, J) => {
      l.visible = !0, l.x = S, l.y = P, l.itemId = Z, l.content = J;
    },
    hideModerationDropdown: () => {
      l.visible = !1;
    },
    showAudienceDropdown: (S, P, Z, J) => {
      d.visible = !0, d.x = S, d.y = P, d.userId = Z, d.userName = J;
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
const vi = { class: "live-control-container" }, mi = { class: "live-control-viewport" }, fi = { class: "right-sidebar" }, gi = /* @__PURE__ */ le({
  __name: "live-control",
  setup(a) {
    const l = Ye("LiveControl"), d = dn(), o = un(), m = $(() => d.params.liveId), v = $(() => d.query.from === "live-list" ? "/live-list" : "/live-monitor"), f = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, { t: s } = me(), { opSuccess: p, opFailed: b } = At(s), { currentLive: N, fetchLiveDetail: x, fetchLiveStats: C, setCurrentLive: te, endLive: H, updateLive: S } = at(), { audienceCount: P } = je(), Z = yn().components?.liveControl, {
      moderationMode: J,
      customModerationToggleEnabled: Y,
      updateCustomModerationToggleEnabled: ee,
      textModerationList: Q,
      textModerationTotal: re,
      textModerationPageNum: oe,
      textModerationLoading: _,
      fetchTextModerationList: B,
      approveTextModerationItems: W,
      bypassCorrectionKeyword: q,
      deleteModerationItems: ie
    } = pt({
      liveId: m.value,
      pageSize: qe
    }), D = $(() => J.value === "custom"), {
      successMsg: j,
      errorMsg: ne
    } = ui(), fe = I(""), M = I(""), U = I(!1), he = I(!1), Le = I(null), De = $(() => Ot() || ""), Ce = I(!0), z = I(null), Ue = I(!1), se = $(() => !z.value || Number(z.value?.activityStatus) === 2), Ge = I("chat"), ke = I(!1), Te = I(0), Ae = I(null), Oe = I(null), k = Qe({
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
    }), h = I(""), E = () => {
      const n = /* @__PURE__ */ new Date(), r = String(n.getHours()).padStart(2, "0"), L = String(n.getMinutes()).padStart(2, "0");
      h.value = `${r}:${L}`;
    };
    E(), ve(
      N,
      (n) => {
        n && (k.totalViewers = n.stats?.viewCount || k.totalViewers, k.totalMsgCount = n.stats?.commentCount || k.totalMsgCount, k.totalLikesReceived = n.stats?.likeCount || k.totalLikesReceived, k.totalGiftsSent = n.stats?.giftCount || k.totalGiftsSent, k.totalGiftCoins = n.stats?.giftAmount || k.totalGiftCoins, k.totalUniqueGiftSenders = n.stats?.giftUserCount || k.totalUniqueGiftSenders, n.onlineCount && (k.onlineCount = n.onlineCount), E());
      },
      { immediate: !0 }
    );
    const O = I([]), X = I(1), ce = _, w = I(0), F = I([]), ze = $(
      () => Un(w.value, qe)
    ), Rt = $(
      () => zn(X.value, ze.value)
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
      if (!ce.value && m.value)
        try {
          const r = Math.max(1, n), L = xn(N.value?.createdAt);
          await B({
            liveId: m.value,
            pageNum: r,
            pageSize: qe,
            startTime: L,
            violationOnly: !D.value
          });
          let R = Q.value;
          if (D.value) {
            const de = _t(R);
            O.value = de.map(it), w.value = re.value;
          } else {
            R = await Bn(R);
            const de = _t(R), we = await Pn();
            O.value = de.map(it), w.value = Math.max(0, re.value - we);
          }
          X.value = r, F.value = Ke(
            F.value.filter(
              (de) => R.some((we) => we.id === de)
            )
          );
        } catch (r) {
          const L = ae(r).info || r?.message || s(t.UNKNOWN_ERROR);
          l.error("moderation", `load failed (ErrorCode: ${ae(r).code || "N/A"}):`, r), A.error(`【${s(t.REFRESH)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: L })}`);
        }
    }, st = async (n = !1) => {
      se.value || (await $e(X.value), n || A.success(p(t.REFRESH)));
    }, Dt = (n) => {
      n !== "..." && (n < 1 || n > ze.value || n === X.value || $e(n));
    }, xe = async (n) => {
      F.value = F.value.filter(
        (L) => !n.includes(L)
      ), O.value = O.value.filter(
        (L) => !n.includes(L.id)
      ), w.value = Math.max(0, w.value - n.length);
      const r = Vn(
        X.value,
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
      if (se.value) {
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
          const L = ae(r).info || r?.message || s(t.UNKNOWN_ERROR);
          l.error("moderation", `release failed (ErrorCode: ${ae(r).code || "N/A"}):`, r), A.error(`【${s(t.RELEASE_AND_RESEND)}】${s(t.OPERATION_FAILED, { error: L })}`);
        } finally {
          U.value = !1;
        }
      }, U.value = !0;
    }, pe = I(null), lt = () => {
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
      if (se.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      try {
        await ie([n.id]), A.info(p(t.DELETE)), await xe([n.id]);
      } catch (r) {
        const L = ae(r).info || r?.message || s(t.UNKNOWN_ERROR);
        l.error("moderation", `delete failed (ErrorCode: ${ae(r).code || "N/A"}):`, r), A.error(`【${s(t.DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: L })}`);
      }
    }, Pt = (n) => {
      if (se.value) {
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
          const L = ae(r).info || r?.message || s(t.UNKNOWN_ERROR);
          l.error("moderation", `bypass correction keyword failed (ErrorCode: ${ae(r).code || "N/A"}):`, r), A.error(`【${s(t.BYPASS_CORRECTION)}】${s(t.OPERATION_FAILED, { error: L })}`);
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
      if (se.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      if (F.value.length === 0) {
        A.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      Ie.requestConfirm();
    }, Wt = async () => {
      if (se.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      if (F.value.length === 0) {
        A.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const n = [...F.value];
      try {
        await ie(n), A.info(p(t.DELETE)), await xe(n);
      } catch (r) {
        const L = ae(r).info || r?.message || s(t.UNKNOWN_ERROR);
        l.error("moderation", `bulk delete failed (ErrorCode: ${ae(r).code || "N/A"}):`, r), A.error(`【${s(t.BULK_DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: L })}`);
      }
    };
    ve(
      [m, () => N.value?.createdAt],
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
    const Kt = I(30), { confirmDialog: Be, requestConfirm: qt, cancelConfirm: rt, executeWithConfirm: jt, loading: ct } = Je({
      operationName: s(t.SEND_VIOLATION_WARNING),
      action: async () => {
        if (!m.value) throw new Error("liveId is required");
        const n = z.value?.liveName || m.value;
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
      if (se.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      qt();
    }, Ee = Je({
      operationName: s(t.FORCE_STOP),
      action: async () => {
        if (!z.value) throw new Error("liveInfo is null");
        return H(z.value.id || z.value.liveId);
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
        const n = O.value.filter((R) => F.value.includes(R.id)).sort((R, de) => R.createdAtMs - de.createdAtMs), r = n.map((R) => R.id), L = n.map((R) => ({ id: R.id, content: R.content, userId: R.userId }));
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
      () => N.value?.liveOwner?.userId || z.value?.anchor.userId || ""
    ), Xt = $(
      () => Oe.value?.nick || Et(
        N.value?.liveOwner,
        z.value?.anchor.nick || s(t.UNKNOWN_HOST)
      )
    ), Zt = $(
      () => Oe.value?.avatarUrl || It(N.value?.liveOwner) || z.value?.anchor.avatarUrl
    ), en = $(() => ({
      liveInfo: z.value,
      liveAnchorAvatar: Zt.value,
      liveAnchorName: Xt.value,
      currentLive: N.value,
      isMockMode: f,
      liveControlSlots: Z,
      handleLeaveLive: dt
    })), tn = $(() => ({
      liveId: m.value,
      disabled: se.value,
      currentUserId: De.value,
      anchorUserId: Qt.value,
      currentLive: N.value,
      roomJoined: ke.value
    })), We = (n, r) => {
      n === "success" ? (j.value = r, setTimeout(() => j.value = "", 3e3)) : (ne.value = r, setTimeout(() => ne.value = "", 3e3));
    }, nn = (n) => n >= 1e4 ? (n / 1e4).toFixed(1) + "w" : n.toLocaleString(), an = (n) => {
      n < 0 && (n = 0);
      const r = Math.floor(n / 86400), L = Math.floor(n % 86400 / 3600), R = Math.floor(n % 3600 / 60), de = n % 60, we = `${L.toString().padStart(2, "0")}:${R.toString().padStart(2, "0")}:${de.toString().padStart(2, "0")}`;
      return r > 0 ? `${r}${s(t.DAYS)} ${we}` : we;
    }, dt = () => {
      o.push(v.value);
    }, on = () => {
      if (se.value) {
        A.warning(s(t.LIVE_ENDED));
        return;
      }
      Ee.requestConfirm();
    }, sn = async () => {
      if (console.log("[LiveControl][fetchRoomInfo] start, liveId:", m.value), !!m.value)
        try {
          const n = await x(m.value);
          if (console.log("[LiveControl][fetchRoomInfo] fetchLiveDetail result:", n ? "exists" : "null"), n) {
            const r = Et(n, n.anchor?.userId || "-"), L = It(n);
            if (n.anchor ? Oe.value = {
              nick: n.anchor.nick || r,
              avatarUrl: n.anchor.avatarUrl || L
            } : Oe.value = {
              nick: r,
              avatarUrl: L
            }, z.value = {
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
                const de = Math.floor((Date.now() - R) / 1e3);
                Te.value = de > 0 ? de : 0;
              }
            }
          } else
            Ce.value = !1;
        } catch (n) {
          l.error("fetchRoomInfo", `获取直播信息失败 (ErrorCode: ${ae(n).code || "N/A"})`, n);
          const r = n instanceof Error ? n : new Error(String(n));
          r.message?.includes("network") || r.message?.includes("fetch") ? We("error", s(t.NETWORK_ERROR)) : We("error", b(t.OP_REQUEST));
        } finally {
          Ce.value = !1;
        }
    }, ut = async () => {
      if (!(!m.value || !N.value))
        try {
          const n = await C();
          n && (k.totalViewers = n.viewCount || 0, k.totalMsgCount = n.commentCount || 0, k.totalLikesReceived = n.likeCount || 0, k.totalGiftsSent = n.giftCount || 0, k.totalGiftCoins = n.giftAmount || 0, k.totalUniqueGiftSenders = n.giftUserCount || 0, E());
        } catch (n) {
          const r = n instanceof Error ? n : new Error(String(n));
          l.error("获取统计数据失败", `(ErrorCode: ${ae(n).code || "N/A"}) ${r.message || ""}`, r);
        }
    }, ln = () => {
      ue && (clearInterval(ue), ue = null), _e && (clearInterval(_e), _e = null), z.value && (z.value = { ...z.value, activityStatus: 2 }), te(null), Ue.value = !0;
    };
    return ve(
      m,
      (n) => {
        n && (ke.value = !1, sn(), ut(), N.value?.createdAt != null && $e(1));
      },
      { immediate: !0 }
    ), ve([() => Ae.value, se], ([n, r]) => {
      ue && (clearInterval(ue), ue = null), n && n > 1e12 && !r && (ue = window.setInterval(() => {
        const L = Math.floor((Date.now() - n) / 1e3);
        Te.value = L > 0 ? L : 0;
      }, 1e3));
    }, { immediate: !0 }), ve(
      [Kt, se, m, Y, D],
      ([n, r, L, R, de]) => {
        _e && (clearInterval(_e), _e = null), n > 0 && L && !r && (_e = window.setInterval(() => {
          ut(), de && !R || st(!0);
        }, n * 1e3));
      },
      { immediate: !0 }
    ), ve(P, (n) => {
      k.onlineCount = n;
    }), ye(() => {
      m.value && l.info("LiveControl", "Component unmounting, liveId:", m.value), ue && clearInterval(ue), _e && clearInterval(_e);
    }), (n, r) => {
      const L = be("t-dialog");
      return u(), T("div", vi, [
        g(e(na), {
          "success-msg": e(j),
          "error-msg": e(ne)
        }, null, 8, ["success-msg", "error-msg"]),
        g(e(sa), {
          "handle-leave-live": dt,
          "handle-violation-warning": Ht,
          "handle-force-stop-live": on,
          disabled: se.value
        }, null, 8, ["disabled"]),
        i("main", mi, [
          g(e(mo), {
            "live-id": m.value,
            "current-live": e(N),
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
              "live-duration": Te.value,
              "update-time-text": h.value,
              "interaction-rate": ge.value,
              "format-number": nn,
              "format-duration": an
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            g(Ct, {
              "slot-component": e(Z)?.customControlPanel,
              "slot-props": { liveInfo: z.value, stats: k }
            }, null, 8, ["slot-component", "slot-props"]),
            g(e(ci), {
              "moderation-mode": e(J),
              "moderation-list": O.value,
              "moderation-loading": e(ce),
              "moderation-page": X.value,
              "moderation-total": w.value,
              "moderation-total-pages": ze.value,
              "moderation-page-numbers": Rt.value,
              "moderation-selected-ids": F.value,
              "moderation-columns": St.value,
              "is-all-on-page-selected": wt.value,
              "custom-moderation-toggle-enabled": e(Y),
              "on-custom-toggle-change": e(ee),
              "update-time-text": h.value,
              disabled: se.value,
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
}), Ui = /* @__PURE__ */ Xn(gi, [["__scopeId", "data-v-403d58e3"]]);
export {
  Ui as default
};
