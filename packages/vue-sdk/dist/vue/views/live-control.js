import { defineComponent as ae, openBlock as u, createElementBlock as M, toDisplayString as l, createCommentVNode as K, resolveComponent as Ee, createElementVNode as o, createVNode as g, unref as e, withCtx as A, createTextVNode as G, Fragment as De, createBlock as W, computed as P, ref as I, h as Se, watch as ve, onUnmounted as Me, Teleport as et, normalizeStyle as tt, renderList as nt, onMounted as Ct, withDirectives as ft, vShow as gt, withModifiers as rn, nextTick as Fe, mergeProps as bt, normalizeClass as cn, reactive as Qe } from "vue";
import { useRoute as dn, useRouter as un } from "vue-router";
import { MessagePlugin as p, Tooltip as Ne } from "tdesign-vue-next";
import { useUIKit as me } from "@tencentcloud/uikit-base-component-vue3";
import { LiveView as vn, useLiveAudienceState as Ye, LiveAudienceList as mn, useLoginState as fn, useLiveListState as gn, useLivePlayerState as bn } from "tuikit-atomicx-vue3";
import { _ as Tt } from "../../chunks/SlotRenderer.vue_vue_type_script_setup_true_lang.D0IGIUWF.js";
import { ArrowLeftIcon as hn, NotificationIcon as En, StopCircleIcon as In, CopyIcon as _n, CheckCircleIcon as ze, ChatOffIcon as yt, UserCheckedIcon as Mt, UserBlockedIcon as At, MoreIcon as Ln, InfoCircleIcon as ye, CloseCircleIcon as Nn, RefreshIcon as Cn, ChevronDownIcon as ht } from "tdesign-icons-vue-next";
import { I as t, p as Tn, c as He, a0 as yn, v as at, am as te, ae as pt, ad as Et, b9 as Mn, a as An, y as pn, $ as On, a3 as wn, V as Rn } from "../../chunks/shared-state.CEzqGWS1.js";
import { bb as Sn, b5 as Dn, b3 as je, aq as Un, r as kn, D as $n, bK as xn, bz as Pn, a9 as Bn, bU as We, b6 as Fn, by as It, bx as _t, aL as Vn, a0 as Ke, an as Gn, az as Lt, bH as Wn, aj as Kn } from "../../chunks/main-layout.DlXjtEAo.js";
import { BarrageList as qn, BarrageInput as jn, LiveListEvent as Yn } from "tuikit-atomicx-vue3/live";
import { _ as ot } from "../../chunks/AnchorAvatar.vue_vue_type_script_setup_true_lang.BcYHNGyQ.js";
import { c as zn, C as Hn } from "../../chunks/user-action-dropdown.CfGEADc8.js";
import { useLiveMonitorState as it, useRiskControlState as Ot, useConfirmAction as Xe } from "../../vue.js";
import { r as qe, p as Jn, b as Xn, g as Qn } from "../../chunks/columns.Cv77hox7.js";
import { u as Zn } from "../../chunks/useAsyncAction.DMgdeI4N.js";
import { a as st, _ as ea } from "../../chunks/ActionButtons.vue_vue_type_script_setup_true_lang.Chj4lTmT.js";
import "../../chunks/action-buttons.ChAJrOyM.js";
import { _ as ta } from "../../chunks/_plugin-vue_export-helper.CHgC5LLL.js";
const na = { class: "toast-area" }, aa = {
  key: 0,
  class: "status-success"
}, oa = {
  key: 1,
  class: "status-error"
}, ia = /* @__PURE__ */ ae({
  __name: "ToastMessages",
  props: {
    successMsg: {},
    errorMsg: {}
  },
  setup(a) {
    return (r, d) => (u(), M("div", na, [
      a.successMsg ? (u(), M("div", aa, l(a.successMsg), 1)) : K("", !0),
      a.errorMsg ? (u(), M("div", oa, l(a.errorMsg), 1)) : K("", !0)
    ]));
  }
}), sa = { class: "live-control-navbar" }, la = { class: "nav-left" }, ra = { class: "nav-right" }, ca = /* @__PURE__ */ ae({
  __name: "NavBar",
  props: {
    handleLeaveLive: { type: Function },
    handleViolationWarning: { type: Function },
    handleForceStopLive: { type: Function },
    disabled: { type: Boolean }
  },
  setup(a) {
    const { t: r } = me();
    return (d, i) => {
      const m = Ee("t-button");
      return u(), M("header", sa, [
        o("div", la, [
          g(m, {
            variant: "outline",
            shape: "circle",
            class: "back-btn",
            onClick: a.handleLeaveLive,
            title: e(r)(e(t).BACK_TO_LIST)
          }, {
            icon: A(() => [
              g(e(hn), {
                "fill-color": "transparent",
                "stroke-color": "currentColor",
                "stroke-width": 2
              })
            ]),
            _: 1
          }, 8, ["onClick", "title"]),
          o("h1", null, l(e(r)(e(t).LIVE_DETAILS)), 1)
        ]),
        o("div", ra, [
          g(m, {
            variant: "text",
            theme: "warning",
            disabled: a.disabled,
            onClick: a.handleViolationWarning
          }, {
            icon: A(() => [
              g(e(En))
            ]),
            default: A(() => [
              G(" " + l(e(r)(e(t).VIOLATION_WARNING)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "onClick"]),
          g(m, {
            variant: "text",
            theme: "danger",
            disabled: a.disabled,
            onClick: a.handleForceStopLive
          }, {
            icon: A(() => [
              g(e(In))
            ]),
            default: A(() => [
              G(" " + l(e(r)(e(t).FORCE_STOP)), 1)
            ]),
            _: 1
          }, 8, ["disabled", "onClick"])
        ])
      ]);
    };
  }
}), da = { class: "video-monitor-area" }, ua = { class: "live-header-external" }, va = { class: "live-title-text" }, ma = { class: "video-stage" }, fa = { class: "player-container" }, ga = {
  key: 0,
  class: "mock-cover-preview"
}, ba = ["src"], ha = {
  key: 2,
  class: "live-state-overlay live-state-overlay--ended"
}, Ea = { class: "live-state-overlay-content" }, Ia = ["src"], _a = {
  class: "live-state-overlay-title",
  style: {
    color: "rgba(0, 0, 0, 0.55)",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "24px"
  }
}, La = /* @__PURE__ */ ae({
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
    function d(i) {
      const m = i.target;
      m.src = Tn;
    }
    return (i, m) => (u(), M("section", da, [
      g(Tt, {
        "slot-component": a.liveControlSlots?.beforeLiveInfo,
        "slot-props": { liveInfo: a.liveInfo }
      }, null, 8, ["slot-component", "slot-props"]),
      o("div", ua, [
        g(ot, {
          "class-name": "anchor-avatar",
          src: a.liveAnchorAvatar,
          name: a.liveAnchorName,
          title: a.liveAnchorName
        }, null, 8, ["src", "name", "title"]),
        o("span", va, l(a.liveEndedOverlayVisible ? e(r)(e(t).LIVE_ENDED) : a.currentLive?.liveName || a.liveInfo?.liveName || e(r)(e(t).LOADING)), 1)
      ]),
      o("div", ma, [
        o("div", fa, [
          a.isMockMode ? (u(), M(De, { key: 0 }, [
            a.liveInfo?.coverUrl ? (u(), M("div", ga, [
              o("img", {
                src: a.liveInfo.coverUrl,
                alt: "cover",
                class: "mock-cover-img",
                onError: d
              }, null, 40, ba)
            ])) : K("", !0)
          ], 64)) : a.sdkReady ? (u(), W(e(vn), { key: 1 })) : K("", !0),
          a.liveEndedOverlayVisible ? (u(), M("div", ha, [
            o("div", Ea, [
              o("img", {
                src: e(zn),
                alt: "",
                class: "live-state-overlay-icon"
              }, null, 8, Ia),
              o("div", _a, l(e(r)(e(t).LIVE_ENDED)), 1)
            ])
          ])) : K("", !0)
        ])
      ])
    ]));
  }
}), Na = { class: "message-list-scroll-area barrage-list-wrapper" }, Ca = { class: "dropdown-header" }, Ta = { class: "dropdown-header-name" }, ya = { class: "dropdown-header-id" }, Ma = { class: "dropdown-header-id-value" }, Aa = 12 * 1024, pa = /* @__PURE__ */ ae({
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
    const r = He("MessageList"), { t: d } = me(), { giftList: i, fetchGiftList: m } = Zn();
    m().catch(() => {
    });
    const v = a, { currentLive: f } = it(), { audienceList: s, disableSendMessage: R } = Ye(), E = P(() => v.currentLive || f.value), L = I(!1), B = I({ top: 0, left: 0 }), C = I(null), ee = I(null), j = I(null), k = I(null), F = (_) => s.value.find((O) => O.userId === _), Q = (_) => {
      const O = F(_);
      if (O)
        return O.isMessageDisabled === !0;
      const S = v.mutedList.find((y) => y.userId === _);
      return S ? S.endTime > Date.now() / 1e3 : !1;
    }, H = (_) => {
      const O = v.bannedList.find((S) => S.userId === _);
      return O ? O.endTime > Date.now() / 1e3 : !1;
    }, q = (_) => {
      const O = _.sender.userId;
      if (Number(_.sender.userRole) !== 2 || Sn(v.liveId || "", O) || Dn(O, s.value)) return !1;
      const S = v.anchorUserId || E.value?.liveOwner?.userId || "";
      return !(S && O === je(S));
    }, Z = async () => {
      if (!C.value) return;
      const _ = C.value.sender.userId, { opSuccess: O, opFailed: S } = at(d);
      try {
        await Un(_), p.success(O(t.COPY, _));
      } catch (y) {
        const se = y instanceof Error ? y.message : String(y);
        r.error("copyUserId", `copy failed (${se})`, y), p.error(S(t.COPY, null, se));
      }
      L.value = !1, C.value = null;
    }, Y = (_, O) => {
      _.preventDefault(), _.stopPropagation();
      const S = _.target.closest(".message-item");
      if (!S) return;
      const y = S.getBoundingClientRect(), se = y.bottom + 4, le = Math.min(
        y.left,
        window.innerWidth - 150
      );
      B.value = { top: se, left: Math.max(0, le) }, C.value = O, L.value = !0;
    }, oe = () => {
      if (C.value && v.onBanUser && q(C.value)) {
        const _ = C.value.sender.userId, O = qe(C.value.sender), S = H(_);
        v.onBanUser(_, O, S);
      }
      L.value = !1, C.value = null;
    }, ie = async () => {
      if (!C.value || !q(C.value)) {
        L.value = !1, C.value = null;
        return;
      }
      const _ = C.value.sender.userId, O = qe(C.value.sender), S = Q(_);
      try {
        await R({ userId: _, isDisable: !S }), r.debug("muteOperation", S ? "解除禁言成功" : "禁言成功");
      } catch (y) {
        r.error("SDK 禁言失败，使用备用方法", "", y), v.onMuteUser && v.onMuteUser(_, O, S);
      }
      L.value = !1, C.value = null;
    }, ge = ae({
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
        const O = qe(_.message.sender) || _.message.sender.userId, S = _.message.sender.userId === E.value?.liveOwner?.userId;
        let y;
        if (_.message.messageType === 0)
          y = _.message.textContent || "";
        else if (_.message.businessId === "gift" && _.message.data)
          try {
            const J = JSON.parse(_.message.data), T = J.giftName || "", $ = J.giftId;
            if ($) {
              const de = i.value.find((fe) => fe.id === $);
              de?.languageList ? y = yn(de.languageList)?.name || T : y = T;
            } else
              y = T;
          } catch {
            y = _.message.data || "";
          }
        else
          y = _.message.data || "";
        const se = Jn(y), le = () => se.map((J, T) => J.type === "emoji" ? Se("img", {
          key: T,
          class: "message-emoji",
          src: J.src,
          alt: J.key
        }) : Se("span", { key: T, class: "message-text" }, J.text));
        return () => Se("div", {
          class: ["message-item", S ? "host" : ""],
          style: _.style,
          onContextMenu: (J) => Y(J, _.message)
        }, [
          // 主播标识
          S ? Se("span", { class: "message-badge" }, d(t.HOST)) : null,
          // 昵称
          Se("span", { class: "message-username", onClick: (J) => Y(J, _.message) }, `${O}: `),
          // 消息内容
          Se("span", { class: "message-content" }, le())
        ]);
      }
    }), be = (_) => {
      j.value && j.value.contains(_.target) || (L.value = !1, C.value = null);
    };
    return ve(L, (_) => {
      _ ? document.addEventListener("mousedown", be) : document.removeEventListener("mousedown", be);
    }), Me(() => {
      document.removeEventListener("mousedown", be);
    }), (_, O) => (u(), M("div", {
      class: "message-list-container",
      ref_key: "containerRef",
      ref: ee
    }, [
      o("div", Na, [
        g(e(qn), {
          ref_key: "barrageListRef",
          ref: k,
          Message: e(ge)
        }, null, 8, ["Message"])
      ]),
      a.roomJoined ? (u(), W(e(jn), {
        key: 0,
        placeholder: e(d)(e(t).ENTER_MESSAGE_TO_SEND_AS_ADMIN),
        disabled: !v.liveId,
        maxLength: Aa,
        autoFocus: !1
      }, null, 8, ["placeholder", "disabled"])) : K("", !0),
      (u(), W(et, { to: "body" }, [
        L.value && C.value ? (u(), M("div", {
          key: 0,
          ref_key: "dropdownRef",
          ref: j,
          class: "user-action-dropdown",
          style: tt({
            position: "fixed",
            top: `${B.value.top}px`,
            left: `${B.value.left}px`
          })
        }, [
          o("div", Ca, [
            o("div", Ta, l(e(qe)(C.value.sender)), 1),
            o("div", ya, [
              O[0] || (O[0] = o("span", { class: "dropdown-header-id-label" }, "ID:", -1)),
              o("span", Ma, l(C.value.sender.userId), 1)
            ])
          ]),
          O[2] || (O[2] = o("div", { class: "dropdown-divider" }, null, -1)),
          o("button", {
            class: "dropdown-item",
            onClick: Z
          }, [
            g(e(_n)),
            o("span", null, l(e(d)(e(t).COPY_ID)), 1)
          ]),
          q(C.value) ? (u(), M(De, { key: 0 }, [
            O[1] || (O[1] = o("div", { class: "dropdown-divider" }, null, -1)),
            o("button", {
              class: "dropdown-item",
              onClick: ie
            }, [
              Q(C.value.sender.userId) ? (u(), W(e(ze), { key: 0 })) : (u(), W(e(yt), { key: 1 })),
              o("span", null, l(Q(C.value.sender.userId) ? e(d)(e(t).UNMUTE) : e(d)(e(t).MUTE)), 1)
            ]),
            o("button", {
              class: "dropdown-item danger",
              onClick: oe
            }, [
              H(C.value.sender.userId) ? (u(), W(e(Mt), { key: 0 })) : (u(), W(e(At), { key: 1 })),
              o("span", null, l(H(C.value.sender.userId) ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
            ])
          ], 64)) : K("", !0)
        ], 4)) : K("", !0)
      ]))
    ], 512));
  }
}), Oa = ["innerHTML"], Ze = /* @__PURE__ */ ae({
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
    const { t: d } = me(), i = a, m = r, v = P({
      get: () => i.visible,
      set: (R) => m("update:visible", R)
    }), f = () => {
      i.loading || i.onConfirm();
    }, s = () => {
      i.onClose();
    };
    return (R, E) => {
      const L = Ee("t-dialog");
      return u(), W(L, {
        visible: v.value,
        "onUpdate:visible": E[0] || (E[0] = (B) => v.value = B),
        header: e(d)(a.title),
        "confirm-btn": { content: e(d)(a.confirmText) || e(d)(e(t).CONFIRM), theme: "primary", shape: "round", loading: a.loading },
        "cancel-btn": { content: e(d)(e(t).CANCEL), shape: "round", disabled: a.loading },
        onConfirm: f,
        onClose: s,
        onCancel: s
      }, {
        default: A(() => [
          o("p", {
            innerHTML: e(d)(a.content)
          }, null, 8, Oa)
        ]),
        _: 1
      }, 8, ["visible", "header", "confirm-btn", "cancel-btn"]);
    };
  }
}), wa = { class: "member-list-panel-modal" }, Ra = {
  key: 0,
  class: "member-list-empty"
}, Sa = {
  key: 1,
  class: "member-list-empty"
}, Da = {
  key: 2,
  class: "member-list-table"
}, Ua = { class: "member-table-user" }, ka = { class: "member-table-user-cell" }, $a = { class: "member-table-user-name" }, xa = { class: "member-table-time" }, Pa = { class: "member-table-action" }, Ba = {
  key: 0,
  class: "list-action-button",
  disabled: ""
}, Fa = /* @__PURE__ */ ae({
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
    const { t: d } = me(), i = a, m = r, v = P({
      get: () => i.visible,
      set: (f) => m("update:visible", f)
    });
    return (f, s) => {
      const R = Ee("t-dialog");
      return u(), W(R, {
        visible: v.value,
        "onUpdate:visible": s[0] || (s[0] = (E) => v.value = E),
        header: e(d)(e(t).MUTED_LIST),
        width: 600,
        footer: !1
      }, {
        default: A(() => [
          o("div", wa, [
            a.memberListLoading ? (u(), M("div", Ra, l(e(d)(e(t).LOADING)), 1)) : a.mutedList.length === 0 ? (u(), M("div", Sa, l(e(d)(e(t).NO_MUTED_MEMBERS)), 1)) : (u(), M("table", Da, [
              o("thead", null, [
                o("tr", null, [
                  o("th", null, l(e(d)(e(t).USER)), 1),
                  o("th", null, l(e(d)(e(t).UNMUTE_TIME)), 1),
                  o("th", null, l(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              o("tbody", null, [
                (u(!0), M(De, null, nt(a.mutedList, (E) => (u(), M("tr", {
                  key: E.userId
                }, [
                  o("td", Ua, [
                    o("div", ka, [
                      g(ot, {
                        "class-name": "member-table-avatar",
                        src: a.getUserAvatar(E.userId),
                        name: a.getUserNameFromCache(E.userId)
                      }, null, 8, ["src", "name"]),
                      g(e(Ne), {
                        content: a.getUserNameFromCache(E.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: A(() => [
                          o("span", $a, l(a.getUserNameFromCache(E.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  o("td", xa, l(E.endTime > 0 ? new Date(E.endTime * 1e3).toLocaleString() : "-"), 1),
                  o("td", Pa, [
                    a.unmutingUserId === E.userId ? (u(), M("button", Ba, l(e(d)(e(t).UNMUTING)), 1)) : (u(), W(st, {
                      key: 1,
                      actions: a.getMutedMemberActions(E.userId)
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
}), Va = { class: "member-list-panel-modal" }, Ga = {
  key: 0,
  class: "member-list-empty"
}, Wa = {
  key: 1,
  class: "member-list-empty"
}, Ka = {
  key: 2,
  class: "member-list-table"
}, qa = { class: "member-table-user" }, ja = { class: "member-table-user-cell" }, Ya = { class: "member-table-user-name" }, za = { class: "member-table-time" }, Ha = { class: "member-table-action" }, Ja = {
  key: 0,
  class: "list-action-button",
  disabled: ""
}, Xa = /* @__PURE__ */ ae({
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
    const { t: d } = me(), i = a, m = r, v = P({
      get: () => i.visible,
      set: (f) => m("update:visible", f)
    });
    return (f, s) => {
      const R = Ee("t-dialog");
      return u(), W(R, {
        visible: v.value,
        "onUpdate:visible": s[0] || (s[0] = (E) => v.value = E),
        header: e(d)(e(t).BANNED_LIST),
        width: 600,
        footer: !1
      }, {
        default: A(() => [
          o("div", Va, [
            a.memberListLoading ? (u(), M("div", Ga, l(e(d)(e(t).LOADING)), 1)) : a.bannedList.length === 0 ? (u(), M("div", Wa, l(e(d)(e(t).NO_BANNED_MEMBERS)), 1)) : (u(), M("table", Ka, [
              o("thead", null, [
                o("tr", null, [
                  o("th", null, l(e(d)(e(t).USER)), 1),
                  o("th", null, l(e(d)(e(t).BAN_LIFT_TIME)), 1),
                  o("th", null, l(e(d)(e(t).ACTIONS)), 1)
                ])
              ]),
              o("tbody", null, [
                (u(!0), M(De, null, nt(a.bannedList, (E) => (u(), M("tr", {
                  key: E.userId
                }, [
                  o("td", qa, [
                    o("div", ja, [
                      g(ot, {
                        "class-name": "member-table-avatar",
                        src: a.getUserAvatar(E.userId),
                        name: a.getUserNameFromCache(E.userId)
                      }, null, 8, ["src", "name"]),
                      g(e(Ne), {
                        content: a.getUserNameFromCache(E.userId),
                        placement: "top",
                        "show-arrow": !1
                      }, {
                        default: A(() => [
                          o("span", Ya, l(a.getUserNameFromCache(E.userId)), 1)
                        ]),
                        _: 2
                      }, 1032, ["content"])
                    ])
                  ]),
                  o("td", za, l(E.endTime > 0 ? new Date(E.endTime * 1e3).toLocaleString() : "-"), 1),
                  o("td", Ha, [
                    a.unbanningUserId === E.userId ? (u(), M("button", Ja, l(e(d)(e(t).UNBANNING)), 1)) : (u(), W(st, {
                      key: 1,
                      actions: a.getBannedMemberActions(E.userId)
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
}), Qa = { class: "dropdown-header" }, Za = /* @__PURE__ */ ae({
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
    const { t: d } = me(), i = I(null), m = a, v = r, f = (E) => {
      i.value && !i.value.contains(E.target) && v("close");
    };
    ve(
      () => m.visible,
      (E) => {
        E ? document.addEventListener("mousedown", f) : document.removeEventListener("mousedown", f);
      }
    ), Me(() => {
      document.removeEventListener("mousedown", f);
    });
    const s = () => {
      v("mute"), v("close");
    }, R = () => {
      v("ban"), v("close");
    };
    return (E, L) => (u(), W(et, { to: "body" }, [
      a.visible ? (u(), M("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: i,
        class: "user-action-dropdown",
        style: tt({
          position: "fixed",
          top: a.position.y + "px",
          left: a.position.x - 160 + "px"
        })
      }, [
        o("div", Qa, l(a.userName), 1),
        L[0] || (L[0] = o("div", { class: "dropdown-divider" }, null, -1)),
        a.isMuted ? (u(), M("button", {
          key: 0,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(ze)),
          G(" " + l(e(d)(e(t).UNMUTE)), 1)
        ])) : (u(), M("button", {
          key: 1,
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(yt)),
          G(" " + l(e(d)(e(t).MUTE)), 1)
        ])),
        o("button", {
          class: "dropdown-item danger",
          onClick: R
        }, [
          a.isBanned ? (u(), W(e(Mt), { key: 0 })) : (u(), W(e(At), { key: 1 })),
          G(" " + l(a.isBanned ? e(d)(e(t).UNBAN) : e(d)(e(t).BAN)), 1)
        ])
      ], 4)) : K("", !0)
    ]));
  }
}), eo = { class: "left-interaction-card" }, to = { class: "interaction-tabs-header" }, no = { class: "all-mute-control-row" }, ao = { class: "all-mute-label" }, oo = { class: "interaction-body" }, io = { class: "chat-stream-sidebar" }, so = {
  key: 0,
  class: "all-mute-banner"
}, lo = { class: "audience-tab-wrapper" }, ro = { class: "audience-list-area" }, co = {
  key: 0,
  class: "audience-me-tag"
}, uo = {
  key: 1,
  class: "audience-row-actions"
}, vo = {
  key: 0,
  class: "audience-muted-badge"
}, mo = ["title", "disabled", "onClick"], fo = { class: "audience-bottom-actions" }, go = ["disabled"], bo = ["disabled"], ho = /* @__PURE__ */ ae({
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
    const d = He("InteractionPanel"), { t: i } = me(), { opSuccess: m } = at(i), v = a, f = r, s = P({
      get: () => v.activeTab,
      set: (b) => f("update:activeTab", b)
    }), {
      mutedList: R,
      bannedList: E,
      muteMember: L,
      unmuteMember: B,
      banMember: C,
      unbanMember: ee,
      fetchMutedList: j,
      fetchBannedList: k
    } = Ot({ liveId: v.liveId, pageSize: 100 }), { updateLive: F } = it(), { audienceList: Q } = Ye(), H = P(() => v.currentLive?.isMessageDisabled === !0), q = I(!1), Z = I(!1), Y = I(null), oe = I(!1);
    function ie(b) {
      Y.value = { ...b, visible: !0 };
    }
    function ge() {
      Y.value = null, oe.value = !1;
    }
    async function be() {
      if (!(!Y.value || oe.value)) {
        oe.value = !0;
        try {
          await Y.value.action();
        } catch (b) {
          d.error("confirm action failed:", b);
        } finally {
          oe.value = !1, Y.value = null;
        }
      }
    }
    function _(b, h, w) {
      if (v.disabled) {
        p.warning(i(t.LIVE_ENDED));
        return;
      }
      const X = je(v.anchorUserId);
      if (b !== X) {
        if (w) {
          B({ memberAccounts: [b] }).then(() => {
            p.success(m(t.UNMUTE, h));
          }).catch((re) => {
            const U = te(re).info || re?.message || i(t.UNKNOWN_ERROR);
            p.error(`【${i(t.UNMUTE)}】${i(t.OPERATION_FAILED, { error: U })}`);
          });
          return;
        }
        ie({
          title: i(t.CONFIRM_ACTION_TITLE, { action: i(t.MUTE) }),
          content: i(t.MUTE_CONFIRM_CONTENT, { name: h }),
          confirmText: i(t.CONFIRM),
          action: async () => {
            await L({ memberAccounts: [b], muteTime: kn }), p.success(m(t.MUTE, h));
          }
        });
      }
    }
    function O(b, h, w) {
      if (v.disabled) {
        p.warning(i(t.LIVE_ENDED));
        return;
      }
      const X = je(v.anchorUserId);
      if (b !== X) {
        if (w) {
          ee({ memberAccounts: [b] }).then(() => {
            p.success(m(t.UNBAN, h));
          }).catch((re) => {
            const U = te(re).info || re?.message || i(t.UNKNOWN_ERROR);
            p.error(`【${i(t.UNBAN)}】${i(t.OPERATION_FAILED, { error: U })}`);
          });
          return;
        }
        ie({
          title: i(t.CONFIRM_ACTION_TITLE, { action: i(t.BAN) }),
          content: i(t.BAN_CONFIRM_CONTENT, { name: h }),
          confirmText: i(t.CONFIRM),
          action: async () => {
            await C({ memberAccounts: [b], duration: $n }), p.success(m(t.BAN, h));
          }
        });
      }
    }
    function S(b) {
      if (v.disabled) {
        p.warning(i(t.LIVE_ENDED));
        return;
      }
      const h = !!b;
      if (h !== H.value) {
        if (!h) {
          q.value = !0, F({ liveId: v.liveId, isMessageDisabled: !1 }).then(() => {
            p.success(m(t.OP_DISABLE, t.ALL_MEMBER_MUTE));
          }).catch((w) => {
            const X = te(w).info || w?.message || i(t.UNKNOWN_ERROR);
            p.error(`【${i(t.ALL_MEMBER_MUTE)}】${i(t.OPERATION_FAILED, { error: X })}`);
          }).finally(() => {
            q.value = !1;
          });
          return;
        }
        ie({
          title: i(t.ENABLE_ALL_MEMBER_MUTE),
          content: i(t.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT),
          confirmText: i(t.CONFIRM_ENABLE),
          action: async () => {
            q.value = !0;
            try {
              await F({ liveId: v.liveId, isMessageDisabled: !0 }), p.success(m(t.OP_ENABLE, t.ALL_MEMBER_MUTE));
            } finally {
              q.value = !1;
            }
          }
        });
      }
    }
    const y = I(null);
    function se(b, h, w) {
      b.stopPropagation();
      const X = b.currentTarget.getBoundingClientRect();
      y.value = { userId: h, userName: w, x: X.right, y: X.bottom + 4 };
    }
    function le() {
      y.value = null;
    }
    function J() {
      if (!y.value) return;
      const { userId: b, userName: h } = y.value;
      _(b, h, $(b)), le();
    }
    function T() {
      if (!y.value) return;
      const { userId: b, userName: h } = y.value;
      O(b, h, de(b)), le();
    }
    function $(b) {
      return R.value.some((h) => h.userId === b);
    }
    function de(b) {
      return E.value.some((h) => h.userId === b);
    }
    function fe(b) {
      const h = Q.value.find((w) => w.userId === b);
      if (h && "avatarUrl" in h && typeof h.avatarUrl == "string")
        return h.avatarUrl;
    }
    function Ue(b) {
      const h = Q.value.find((w) => w.userId === b);
      return h?.userName ? h.userName : b;
    }
    const Ce = I(null), z = I(null);
    async function ke(b) {
      if (v.disabled) {
        p.warning(i(t.LIVE_ENDED));
        return;
      }
      if (!Ce.value) {
        Ce.value = b, await Fe();
        try {
          await B({ memberAccounts: [b] }), p.success(m(t.UNMUTE, b));
        } catch (h) {
          const w = te(h).info || h?.message || i(t.UNKNOWN_ERROR);
          p.error(`【${i(t.UNMUTE)}】${i(t.OPERATION_FAILED, { error: w })}`);
        } finally {
          Ce.value = null;
        }
      }
    }
    async function ne(b) {
      if (v.disabled) {
        p.warning(i(t.LIVE_ENDED));
        return;
      }
      if (!z.value) {
        z.value = b, await Fe();
        try {
          await ee({ memberAccounts: [b] }), p.success(m(t.UNBAN, b));
        } catch (h) {
          const w = te(h).info || h?.message || i(t.UNKNOWN_ERROR);
          p.error(`【${i(t.UNBAN)}】${i(t.OPERATION_FAILED, { error: w })}`);
        } finally {
          z.value = null;
        }
      }
    }
    function Ve(b) {
      return [
        {
          key: "unmute",
          label: i(t.UNMUTE),
          onClick: () => ke(b)
        }
      ];
    }
    function $e(b) {
      return [
        {
          key: "unban",
          label: i(t.UNBAN),
          onClick: () => ne(b)
        }
      ];
    }
    const Te = I(!1), Ae = I(!1);
    function pe() {
      Z.value = !0, j().finally(() => {
        Z.value = !1;
      }), Te.value = !0;
    }
    function x() {
      Z.value = !0, k().finally(() => {
        Z.value = !1;
      }), Ae.value = !0;
    }
    let he = null;
    return ve(
      () => v.activeTab,
      (b) => {
        if (b === "audience") {
          Z.value = !0, Promise.all([j(), k()]).finally(() => {
            Z.value = !1;
          });
          const h = () => {
            document.querySelectorAll(".viewer-name").forEach((X) => {
              const re = X, U = re.textContent || "";
              re.title !== U && (re.title = U);
            });
          };
          setTimeout(() => {
            h();
            const w = document.querySelector(".audience-list-area");
            he?.disconnect(), he = null, w && (he = new MutationObserver(h), he.observe(w, { childList: !0, subtree: !0 }));
          }, 100);
        } else
          he?.disconnect(), he = null;
      }
    ), Ct(() => {
      v.activeTab === "audience" && (Z.value = !0, Promise.all([j(), k()]).finally(() => {
        Z.value = !1;
      }));
    }), Me(() => {
      he?.disconnect(), he = null;
    }), (b, h) => {
      const w = Ee("t-tab-panel"), X = Ee("t-tabs"), re = Ee("t-switch");
      return u(), M("div", eo, [
        o("div", to, [
          g(X, {
            modelValue: s.value,
            "onUpdate:modelValue": h[0] || (h[0] = (U) => s.value = U),
            class: "interaction-tabs"
          }, {
            default: A(() => [
              g(w, {
                value: "chat",
                label: e(i)(e(t).MESSAGE_LIST)
              }, null, 8, ["label"]),
              g(w, {
                value: "audience",
                label: e(i)(e(t).AUDIENCE_LIST)
              }, null, 8, ["label"])
            ]),
            _: 1
          }, 8, ["modelValue"]),
          o("div", no, [
            g(re, {
              value: H.value,
              disabled: q.value || a.disabled,
              onChange: S
            }, null, 8, ["value", "disabled"]),
            o("span", ao, l(e(i)(e(t).ALL_MEMBER_MUTE)), 1)
          ])
        ]),
        o("div", oo, [
          ft(o("div", io, [
            H.value ? (u(), M("div", so, [
              h[4] || (h[4] = o("span", { class: "all-mute-banner-icon" }, "!", -1)),
              o("span", null, l(e(i)(e(t).ALL_MEMBER_MUTE_ENABLED_BANNER)), 1)
            ])) : K("", !0),
            g(pa, {
              "live-id": a.liveId,
              "anchor-user-id": a.anchorUserId,
              "muted-list": e(R),
              "banned-list": e(E),
              "current-live": a.currentLive,
              "room-joined": a.roomJoined,
              "on-mute-user": _,
              "on-ban-user": O
            }, null, 8, ["live-id", "anchor-user-id", "muted-list", "banned-list", "current-live", "room-joined"])
          ], 512), [
            [gt, a.activeTab === "chat"]
          ]),
          ft(o("div", lo, [
            o("div", ro, [
              g(e(mn), { height: "99%" }, {
                "audience-mark": A(({ audience: U }) => [
                  U.userId === a.currentUserId ? (u(), M("span", co, l(e(i)(e(t).ME)), 1)) : U.userRole !== 0 && U.userId !== e(je)(a.anchorUserId) ? (u(), M("div", uo, [
                    $(U.userId) ? (u(), M("span", vo, l(e(i)(e(t).MUTED)), 1)) : K("", !0),
                    o("button", {
                      class: "audience-more-btn",
                      title: e(i)(e(t).MORE_ACTIONS),
                      disabled: a.disabled,
                      onClick: rn((V) => se(V, U.userId, U.userName || U.userId), ["stop"])
                    }, [
                      g(e(Ln))
                    ], 8, mo)
                  ])) : K("", !0)
                ]),
                _: 1
              })
            ]),
            o("div", fo, [
              o("button", {
                class: "audience-bottom-btn",
                disabled: a.disabled,
                onClick: pe
              }, l(e(i)(e(t).MUTED_LIST)) + " (" + l(e(R).length) + ") ", 9, go),
              o("button", {
                class: "audience-bottom-btn",
                disabled: a.disabled,
                onClick: x
              }, l(e(i)(e(t).BANNED_LIST)) + " (" + l(e(E).length) + ") ", 9, bo)
            ])
          ], 512), [
            [gt, a.activeTab === "audience"]
          ])
        ]),
        Y.value ? (u(), W(Ze, {
          key: 0,
          visible: Y.value.visible,
          "onUpdate:visible": h[1] || (h[1] = (U) => Y.value.visible = U),
          title: Y.value.title,
          content: Y.value.content,
          "confirm-text": Y.value.confirmText,
          loading: oe.value,
          "on-confirm": be,
          "on-close": ge
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        g(Fa, {
          visible: Te.value,
          "onUpdate:visible": h[2] || (h[2] = (U) => Te.value = U),
          "muted-list": e(R),
          "member-list-loading": Z.value,
          "unmuting-user-id": Ce.value,
          "get-user-avatar": fe,
          "get-user-name-from-cache": Ue,
          "get-muted-member-actions": Ve
        }, null, 8, ["visible", "muted-list", "member-list-loading", "unmuting-user-id"]),
        g(Xa, {
          visible: Ae.value,
          "onUpdate:visible": h[3] || (h[3] = (U) => Ae.value = U),
          "banned-list": e(E),
          "member-list-loading": Z.value,
          "unbanning-user-id": z.value,
          "get-user-avatar": fe,
          "get-user-name-from-cache": Ue,
          "get-banned-member-actions": $e
        }, null, 8, ["visible", "banned-list", "member-list-loading", "unbanning-user-id"]),
        g(Za, {
          visible: !!y.value,
          "user-name": y.value?.userName || "",
          "is-muted": y.value ? $(y.value.userId) : !1,
          "is-banned": y.value ? de(y.value.userId) : !1,
          position: y.value || { x: 0, y: 0 },
          onMute: J,
          onBan: T,
          onClose: le
        }, null, 8, ["visible", "user-name", "is-muted", "is-banned", "position"])
      ]);
    };
  }
}), Eo = { class: "left-content-area" }, Nt = 5, Io = 2e3, _o = /* @__PURE__ */ ae({
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
    const d = He("LiveControlPanel"), i = a, m = r, { login: v, loginUserInfo: f } = fn(), { joinLive: s, leaveLive: R, subscribeEvent: E, unsubscribeEvent: L } = gn(), { fetchAudienceList: B } = Ye(), { hideControlBar: C, showControlBar: ee, setAutoHideDelay: j } = bn();
    function k() {
      try {
        if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
          return "admin";
      } catch {
      }
      return "audience";
    }
    const F = I(!1), Q = I(""), H = I(!1), q = I(""), Z = I(!1), Y = I(!1), oe = I(!1), ie = I(0), ge = k(), be = P(
      () => f.value?.userId || q.value || i.currentUserId || pt() || ""
    ), _ = P(
      () => i.liveEndedOverlayVisible || Z.value && !i.currentLive && !i.isMockMode
    );
    function O() {
      const T = Yn;
      return T.onLiveEnded || T.ON_LIVE_ENDED || "";
    }
    const S = O(), y = () => {
      m("live-ended");
    }, se = async () => {
      if (i.isMockMode) {
        F.value = !0, m("joined-live");
        return;
      }
      if (!F.value && !Y.value) {
        Y.value = !0;
        try {
          let T;
          if (ge === "audience" ? (d.debug("LiveControlLeftPanel", "Audience mode (internal), creating basic account..."), T = await Pn("audience")) : (d.debug("LiveControlLeftPanel", "Admin mode, resolving account..."), T = await Mn()), !T || T.sdkAppId === 0 || !T.userId || !T.userSig) {
            d.warn("LiveControlLeftPanel", "No valid account obtained, will retry"), le();
            return;
          }
          d.debug("LiveControlLeftPanel", "Logging in as:", ge, "userId:", T.userId), await v({ sdkAppId: T.sdkAppId, userId: T.userId, userSig: T.userSig }), await Fe(), F.value = !0, q.value = T.userId, ie.value = 0;
        } catch (T) {
          if (T?.code === 2025 || T?.message?.includes("重复登录")) {
            await Fe(), F.value = !0, q.value = q.value || "recovered", ie.value = 0;
            return;
          }
          d.error("LiveControlLeftPanel", "TUIKit login failed:", T), le();
        } finally {
          Y.value = !1;
        }
      }
    }, le = () => {
      if (ie.value >= Nt) {
        d.error("LiveControlLeftPanel", `Login failed after ${Nt} retries, giving up`);
        return;
      }
      const T = Io * (ie.value + 1);
      d.debug("LiveControlLeftPanel", `Scheduling login retry #${ie.value + 1} in ${T}ms`), setTimeout(() => {
        !F.value && !i.isMockMode && ie.value++;
      }, T);
    }, J = async () => {
      if (!(!i.liveId || !i.currentLive || !F.value || Q.value === i.liveId) && !oe.value) {
        oe.value = !0;
        try {
          d.debug("LiveControlLeftPanel", "Joining live:", i.liveId, "as:", ge);
          const T = Et();
          Hn.callExperimentalAPI(JSON.stringify({
            api: "setCurrentLanguage",
            params: { language: T === "en-US" ? "en" : T === "zh-CN" ? "zh-Hans" : T }
          })).catch(() => {
          }), await s({ liveId: i.liveId }), Q.value = i.liveId, await B().catch(($) => {
            d.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", $);
          }), C(), j(0), !H.value && E && S && (d.debug("LiveControlLeftPanel", "Subscribing to live ended event:", S), E(S, y), H.value = !0), m("joined-live"), console.log("[LiveControlLeftPanel] adding live admin:", q.value, "room:", i.liveId), Bn(i.liveId, q.value).catch(($) => {
            console.error("[LiveControlLeftPanel] addLiveAdmin failed:", $), d.warn("LiveControlLeftPanel", "addLiveAdmin failed:", $);
          });
        } catch (T) {
          d.error("LiveControlLeftPanel", "joinLive failed:", T);
        } finally {
          oe.value = !1, Z.value = !0;
        }
      }
    };
    return ve(
      () => [i.liveId, i.currentLive, be.value, F.value, ie.value],
      async () => {
        if (!(!i.liveId || !i.currentLive) && (F.value || await se(), !!F.value)) {
          if (!i.isMockMode && ge === "audience" && q.value) {
            const T = Et() === "en-US" ? "admin" : "管理员";
            xn(q.value, T).catch(($) => {
              d.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", $);
            });
          }
          await J();
        }
      },
      { immediate: !0 }
    ), ve(
      () => i.liveId,
      () => {
        Q.value = "", Z.value = !1;
      }
    ), Me(() => {
      H.value && L && S && (L(S, y), H.value = !1), Q.value && R?.().catch?.((T) => {
        d.error("LiveControlLeftPanel", "leaveLive on unmount failed:", T);
      }), ee();
    }), (T, $) => (u(), M("div", Eo, [
      g(La, bt(a.videoMonitor, {
        "live-ended-overlay-visible": _.value,
        "sdk-ready": F.value
      }), null, 16, ["live-ended-overlay-visible", "sdk-ready"]),
      g(ho, bt(a.interaction, {
        "active-tab": a.activeTab,
        "current-user-id": be.value,
        "onUpdate:activeTab": $[0] || ($[0] = (de) => m("update:activeTab", de))
      }), null, 16, ["active-tab", "current-user-id"])
    ]));
  }
}), Lo = { class: "sidebar-stats-card" }, No = { class: "stats-card-header" }, Co = { class: "stats-header-left" }, To = { class: "live-status-tag" }, yo = { class: "live-duration-text" }, Mo = { class: "update-time" }, Ao = { class: "stat-bar-item" }, po = { class: "stat-label" }, Oo = { class: "stat-value" }, wo = { class: "stat-bar-item" }, Ro = { class: "stat-label" }, So = { class: "stat-value" }, Do = { class: "stat-bar-item" }, Uo = { class: "stat-label" }, ko = { class: "stat-value" }, $o = { class: "stat-bar-item" }, xo = { class: "stat-label" }, Po = { class: "stat-value" }, Bo = { class: "stat-bar-item" }, Fo = { class: "stat-label" }, Vo = { class: "stat-value" }, Go = { class: "stat-bar-item" }, Wo = { class: "stat-label" }, Ko = { class: "stat-value" }, qo = { class: "stat-bar-item" }, jo = { class: "stat-label" }, Yo = { class: "stat-value" }, zo = /* @__PURE__ */ ae({
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
    let i = null, m = null, v = null;
    const f = (L, B, C) => {
      const ee = Array.from({ length: B }, () => 0);
      return L.forEach((j, k) => {
        const F = k % B;
        ee[F] = Math.max(ee[F], j);
      }), ee.reduce((j, k) => j + k, 0) + C * (B - 1);
    }, s = (L) => {
      const B = Array.from(L.querySelectorAll(":scope > .stat-bar-item")), C = document.createElement("div");
      C.style.position = "absolute", C.style.left = "-99999px", C.style.top = "0", C.style.visibility = "hidden", C.style.pointerEvents = "none", C.style.width = "max-content", document.body.appendChild(C);
      const ee = B.map((j) => {
        const k = j.cloneNode(!0);
        return k.style.width = "max-content", k.style.maxWidth = "none", C.appendChild(k), Math.ceil(k.getBoundingClientRect().width);
      });
      return C.remove(), ee;
    }, R = () => {
      const L = d.value;
      if (!L || L.clientWidth <= 0) return;
      const B = s(L);
      if (!B.length) return;
      const C = parseFloat(getComputedStyle(L).columnGap) || 0, ee = L.clientWidth, j = [7, 4, 3, 2, 1].find((k) => f(B, k, C) <= ee + 1) || 1;
      L.style.setProperty("--stats-columns", String(j));
    }, E = () => {
      v !== null && cancelAnimationFrame(v), v = requestAnimationFrame(() => {
        v = null, R();
      });
    };
    return Ct(() => {
      Fe(() => {
        const L = d.value;
        L && (i = new ResizeObserver(E), i.observe(L), m = new MutationObserver(E), m.observe(L, { childList: !0, subtree: !0, characterData: !0 }), E());
      });
    }), Me(() => {
      i?.disconnect(), m?.disconnect(), v !== null && (cancelAnimationFrame(v), v = null);
    }), (L, B) => (u(), M("div", Lo, [
      o("div", No, [
        o("div", Co, [
          o("h3", null, l(e(r)(e(t).LIVE_DATA_CONTROL)), 1),
          o("span", To, [
            B[0] || (B[0] = o("span", { class: "live-status-dot" }, null, -1)),
            G(" " + l(e(r)(e(t).LIVE_NOW)) + " ", 1),
            o("span", yo, l(a.formatDuration(a.liveDuration)), 1)
          ])
        ]),
        o("span", Mo, l(e(r)(e(t).UPDATED_AT, { time: a.updateTimeText })), 1)
      ]),
      o("div", {
        ref_key: "statsBarRef",
        ref: d,
        class: "stats-bar-design"
      }, [
        o("div", Ao, [
          o("div", po, [
            G(l(e(r)(e(t).CURRENT_VIEWERS)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).CURRENT_VIEWERS_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", Oo, l(a.formatNumber(a.stats.onlineCount)), 1)
        ]),
        o("div", wo, [
          o("div", Ro, [
            G(l(e(r)(e(t).COMMENT_COUNT)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).COMMENT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", So, l(a.stats.totalMsgCount.toLocaleString()), 1)
        ]),
        o("div", Do, [
          o("div", Uo, [
            G(l(e(r)(e(t).COMMENT_USERS)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).COMMENT_USERS_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", ko, l(a.stats.totalViewers.toLocaleString()), 1)
        ]),
        o("div", $o, [
          o("div", xo, [
            G(l(e(r)(e(t).INTERACTION_RATE)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).INTERACTION_RATE_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", Po, l(a.interactionRate), 1)
        ]),
        o("div", Bo, [
          o("div", Fo, [
            G(l(e(r)(e(t).TOTAL_GIFT_AMOUNT)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).TOTAL_GIFT_AMOUNT_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", Vo, l(a.stats.totalGiftCoins.toFixed(2)), 1)
        ]),
        o("div", Go, [
          o("div", Wo, [
            G(l(e(r)(e(t).GIFT_COUNT)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).GIFT_COUNT_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", Ko, l(a.stats.totalGiftsSent), 1)
        ]),
        o("div", qo, [
          o("div", jo, [
            G(l(e(r)(e(t).GIFT_SENDERS)) + " ", 1),
            g(e(Ne), {
              content: e(r)(e(t).GIFT_SENDERS_TOOLTIP),
              placement: "top"
            }, {
              default: A(() => [
                g(e(ye), { class: "info-icon" })
              ]),
              _: 1
            }, 8, ["content"])
          ]),
          o("div", Yo, l(a.stats.totalUniqueGiftSenders), 1)
        ])
      ], 512)
    ]));
  }
}), Ho = { class: "moderation-card" }, Jo = { class: "moderation-card-header" }, Xo = { class: "moderation-header-left" }, Qo = { key: 0 }, Zo = {
  key: 2,
  style: { "font-size": "13px", "margin-left": "8px" }
}, ei = { class: "moderation-toolbar" }, ti = { class: "update-time" }, ni = { class: "moderation-table-wrapper" }, ai = ["checked", "disabled"], oi = ["checked", "disabled", "onChange"], ii = { class: "moderation-user-cell" }, si = { class: "moderation-user-id" }, li = ["title"], ri = { class: "moderation-type-text" }, ci = { class: "moderation-empty" }, di = {
  key: 0,
  class: "moderation-pagination"
}, ui = { class: "pagination-pages" }, vi = ["disabled"], mi = {
  key: 0,
  class: "page-ellipsis"
}, fi = ["disabled", "onClick"], gi = ["disabled"], bi = /* @__PURE__ */ ae({
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
    return (d, i) => {
      const m = Ee("t-switch"), v = Ee("t-button");
      return u(), M("div", Ho, [
        o("div", Jo, [
          o("div", Xo, [
            a.moderationMode !== "custom" ? (u(), M("h3", Qo, l(e(r)(e(t).CONTENT_MODERATION)), 1)) : K("", !0),
            a.moderationMode === "custom" ? (u(), W(m, {
              key: 1,
              size: "small",
              value: a.customModerationToggleEnabled,
              disabled: a.disabled,
              onChange: i[0] || (i[0] = (f) => a.onCustomToggleChange?.(f)),
              style: { "margin-left": "12px" }
            }, null, 8, ["value", "disabled"])) : K("", !0),
            a.moderationMode === "custom" ? (u(), M("span", Zo, l(e(r)(e(t).CUSTOM_MODERATION_TOGGLE)), 1)) : K("", !0),
            g(v, {
              theme: "primary",
              shape: "round",
              onClick: a.handleBulkApprove,
              disabled: a.disabled || a.moderationSelectedIds.length <= 1
            }, {
              icon: A(() => [
                g(e(ze), { style: { width: "14px", height: "14px" } })
              ]),
              default: A(() => [
                G(" " + l(e(r)(e(t).BULK_APPROVE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"]),
            a.handleBulkDelete ? (u(), W(v, {
              key: 3,
              theme: "primary",
              shape: "round",
              onClick: a.handleBulkDelete,
              disabled: a.disabled || a.moderationSelectedIds.length <= 1
            }, {
              icon: A(() => [
                g(e(Nn), { style: { width: "14px", height: "14px" } })
              ]),
              default: A(() => [
                G(" " + l(e(r)(e(t).BULK_DELETE)), 1)
              ]),
              _: 1
            }, 8, ["onClick", "disabled"])) : K("", !0)
          ]),
          o("div", ei, [
            o("span", ti, l(e(r)(e(t).UPDATED_AT, { time: a.updateTimeText })), 1),
            g(v, {
              theme: "primary",
              variant: "outline",
              shape: "round",
              loading: a.moderationLoading,
              disabled: a.disabled,
              onClick: i[1] || (i[1] = (f) => a.handleRefreshModeration())
            }, {
              icon: A(() => [
                g(e(Cn))
              ]),
              default: A(() => [
                G(" " + l(e(r)(e(t).REFRESH)), 1)
              ]),
              _: 1
            }, 8, ["loading", "disabled"])
          ])
        ]),
        o("div", ni, [
          g(ea, {
            columns: a.moderationColumns,
            data: a.moderationList,
            "row-key": "id",
            "table-class-name": "moderation-table",
            "header-class-name": "moderation-header-fixed",
            "body-class-name": "moderation-table-scroll"
          }, {
            "header-check": A(() => [
              o("input", {
                type: "checkbox",
                checked: a.isAllOnPageSelected,
                disabled: a.disabled,
                onChange: i[2] || (i[2] = //@ts-ignore
                (...f) => a.toggleSelectAll && a.toggleSelectAll(...f))
              }, null, 40, ai)
            ]),
            "header-userId": A(() => [
              G(l(e(r)(e(t).USERID)), 1)
            ]),
            "header-content": A(() => [
              G(l(e(r)(e(t).COMMENT_CONTENT)), 1)
            ]),
            "header-type": A(() => [
              G(l(e(r)(e(t).SENSITIVE_TYPE)), 1)
            ]),
            "header-createdAtMs": A(() => [
              G(l(e(r)(e(t).CREATED_AT)), 1)
            ]),
            "header-action": A(() => [
              G(l(e(r)(e(t).ACTION)), 1)
            ]),
            "cell-check": A(({ row: f }) => [
              o("input", {
                type: "checkbox",
                checked: a.moderationSelectedIds.includes(f.id),
                disabled: a.disabled,
                onChange: (s) => a.toggleSelectOne(f.id)
              }, null, 40, oi)
            ]),
            "cell-userId": A(({ row: f }) => [
              o("div", ii, [
                o("span", si, l(f.userId), 1)
              ])
            ]),
            "cell-content": A(({ row: f }) => [
              o("span", {
                title: f.content
              }, l(f.content), 9, li)
            ]),
            "cell-type": A(({ row: f }) => [
              o("span", ri, l(e(r)(f.type)), 1)
            ]),
            "cell-createdAtMs": A(({ row: f }) => [
              G(l(a.formatModerationTime(f.createdAtMs)), 1)
            ]),
            "cell-action": A(({ row: f }) => [
              g(st, {
                actions: a.getModerationActions(f),
                disabled: a.disabled
              }, null, 8, ["actions", "disabled"])
            ]),
            empty: A(() => [
              o("div", ci, [
                o("span", null, l(e(r)(e(t).MODERATION_EMPTY)), 1)
              ])
            ]),
            _: 1
          }, 8, ["columns", "data"]),
          a.moderationList.length > 0 ? (u(), M("div", di, [
            o("span", null, l(e(r)(e(t).TOTAL_ITEMS, { count: a.moderationTotal, total: a.moderationTotal })), 1),
            o("div", ui, [
              o("button", {
                class: "page-num page-nav",
                disabled: a.disabled || a.moderationPage <= 1,
                "aria-label": "prev page",
                onClick: i[3] || (i[3] = (f) => a.goToModerationPage(a.moderationPage - 1))
              }, [
                g(e(ht), { style: { transform: "rotate(90deg)", width: "14px" } })
              ], 8, vi),
              (u(!0), M(De, null, nt(a.moderationPageNumbers, (f, s) => (u(), M(De, {
                key: f === "..." ? `ellipsis-${s}` : f
              }, [
                f === "..." ? (u(), M("span", mi, "...")) : (u(), M("button", {
                  key: 1,
                  class: cn(["page-num", { active: f === a.moderationPage }]),
                  disabled: a.disabled,
                  onClick: (R) => a.goToModerationPage(f)
                }, l(f), 11, fi))
              ], 64))), 128)),
              o("button", {
                class: "page-num page-nav",
                disabled: a.disabled || a.moderationPage >= a.moderationTotalPages,
                "aria-label": "next page",
                onClick: i[4] || (i[4] = (f) => a.goToModerationPage(a.moderationPage + 1))
              }, [
                g(e(ht), { style: { transform: "rotate(-90deg)", width: "14px" } })
              ], 8, gi)
            ])
          ])) : K("", !0)
        ])
      ]);
    };
  }
}), hi = /* @__PURE__ */ ae({
  __name: "ModerationDropdown",
  props: {
    visible: { type: Boolean },
    position: {}
  },
  emits: ["release", "close"],
  setup(a, { emit: r }) {
    const { t: d } = me(), i = I(null), m = a, v = r, f = (R) => {
      i.value && !i.value.contains(R.target) && v("close");
    };
    ve(
      () => m.visible,
      (R) => {
        R ? document.addEventListener("mousedown", f) : document.removeEventListener("mousedown", f);
      }
    ), Me(() => {
      document.removeEventListener("mousedown", f);
    });
    const s = () => {
      v("release"), v("close");
    };
    return (R, E) => (u(), W(et, { to: "body" }, [
      a.visible ? (u(), M("div", {
        key: 0,
        ref_key: "dropdownRef",
        ref: i,
        class: "user-action-dropdown moderation-action-dropdown",
        style: tt({
          position: "fixed",
          top: a.position.y + "px",
          left: a.position.x - 160 + "px"
        })
      }, [
        o("button", {
          class: "dropdown-item",
          onClick: s
        }, [
          g(e(ze)),
          G(" " + l(e(d)(e(t).BYPASS_CORRECTION)), 1)
        ])
      ], 4)) : K("", !0)
    ]));
  }
});
function Ei() {
  const a = I({
    visible: !1,
    title: "",
    content: ""
  }), r = Qe({
    visible: !1,
    x: 0,
    y: 0
  }), d = Qe({
    visible: !1,
    x: 0,
    y: 0
  }), i = I(!1), m = I(!1), v = I(""), f = I("");
  return {
    // 状态
    confirmDialog: a,
    moderationDropdown: r,
    audienceDropdown: d,
    mutedModalVisible: i,
    bannedModalVisible: m,
    successMsg: v,
    errorMsg: f,
    // 方法
    showConfirmDialog: (k) => {
      a.value = {
        ...k,
        visible: !0
      };
    },
    hideConfirmDialog: () => {
      a.value.visible = !1;
    },
    showModerationDropdown: (k, F, Q, H) => {
      r.visible = !0, r.x = k, r.y = F, r.itemId = Q, r.content = H;
    },
    hideModerationDropdown: () => {
      r.visible = !1;
    },
    showAudienceDropdown: (k, F, Q, H) => {
      d.visible = !0, d.x = k, d.y = F, d.userId = Q, d.userName = H;
    },
    hideAudienceDropdown: () => {
      d.visible = !1;
    },
    showSuccess: (k) => {
      v.value = k, setTimeout(() => {
        v.value = "";
      }, 3e3);
    },
    showError: (k) => {
      f.value = k, setTimeout(() => {
        f.value = "";
      }, 3e3);
    }
  };
}
const Ii = { class: "live-control-container" }, _i = { class: "live-control-viewport" }, Li = { class: "right-sidebar" }, Ni = /* @__PURE__ */ ae({
  __name: "live-control",
  setup(a) {
    const r = He("LiveControl"), d = dn(), i = un(), m = P(() => d.params.liveId), v = P(() => d.query.from === "live-list" ? "/live-list" : "/live-monitor"), f = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, { t: s } = me(), { opSuccess: R, opFailed: E } = at(s), { currentLive: L, fetchLiveDetail: B, fetchLiveStats: C, setCurrentLive: ee, endLive: j, updateLive: k } = it(), { audienceCount: F } = Ye(), Q = An().components?.liveControl, {
      moderationMode: H,
      customModerationToggleEnabled: q,
      updateCustomModerationToggleEnabled: Z,
      textModerationList: Y,
      textModerationTotal: oe,
      textModerationPageNum: ie,
      textModerationLoading: ge,
      fetchTextModerationList: be,
      approveTextModerationItems: _,
      bypassCorrectionKeyword: O,
      deleteModerationItems: S
    } = Ot({
      liveId: m.value,
      pageSize: Ke
    }), y = P(() => H.value === "custom"), {
      successMsg: se,
      errorMsg: le
    } = Ei(), J = I(""), T = I(""), $ = I(!1), de = I(!1), fe = I(null), Ue = P(() => pt() || ""), Ce = I(!0), z = I(null), ke = I(!1), ne = P(() => !z.value || Number(z.value?.activityStatus) === 2), Ve = I("chat"), $e = I(!1), Te = I(0), Ae = I(null), pe = I(null), x = Qe({
      onlineCount: 0,
      totalViewers: 0,
      totalMsgCount: 0,
      totalLikesReceived: 0,
      totalGiftsSent: 0,
      totalGiftCoins: 0,
      totalUniqueGiftSenders: 0
    }), he = P(() => {
      if (x.totalViewers <= 0) return "0%";
      const n = x.totalMsgCount / x.totalViewers * 100;
      return Math.min(n, 100).toFixed(1) + "%";
    }), b = I(""), h = () => {
      const n = /* @__PURE__ */ new Date(), c = String(n.getHours()).padStart(2, "0"), N = String(n.getMinutes()).padStart(2, "0");
      b.value = `${c}:${N}`;
    };
    h(), ve(
      L,
      (n) => {
        n && (x.totalViewers = n.stats?.viewCount || x.totalViewers, x.totalMsgCount = n.stats?.commentCount || x.totalMsgCount, x.totalLikesReceived = n.stats?.likeCount || x.totalLikesReceived, x.totalGiftsSent = n.stats?.giftCount || x.totalGiftsSent, x.totalGiftCoins = n.stats?.giftAmount || x.totalGiftCoins, x.totalUniqueGiftSenders = n.stats?.giftUserCount || x.totalUniqueGiftSenders, n.onlineCount && (x.onlineCount = n.onlineCount), h());
      },
      { immediate: !0 }
    );
    const w = I([]), X = I(1), re = ge, U = I(0), V = I([]), Je = P(
      () => pn(U.value, Ke)
    ), wt = P(
      () => Xn(X.value, Je.value)
    ), Rt = P(() => {
      if (w.value.length === 0) return !1;
      const n = We(w.value.map((c) => c.id));
      return Fn(V.value, n);
    }), St = P(() => Qn({ hideTypeColumn: y.value })), lt = (n) => ({
      id: n.id,
      userId: n.userId,
      content: n.content,
      type: n.type,
      createdAtMs: n.createdAtMs
    }), xe = async (n = 1) => {
      if (!re.value && m.value)
        try {
          const c = Math.max(1, n), N = Gn(L.value?.createdAt);
          await be({
            liveId: m.value,
            pageNum: c,
            pageSize: Ke,
            startTime: N,
            violationOnly: !y.value
          });
          let D = Y.value;
          if (y.value) {
            const ce = Lt(D);
            w.value = ce.map(lt), U.value = oe.value;
          } else {
            D = await On(D);
            const ce = Lt(D), Re = await wn();
            w.value = ce.map(lt), U.value = Math.max(0, oe.value - Re);
          }
          X.value = c, V.value = We(
            V.value.filter(
              (ce) => D.some((Re) => Re.id === ce)
            )
          );
        } catch (c) {
          const N = te(c).info || c?.message || s(t.UNKNOWN_ERROR);
          r.error("moderation", `load failed (ErrorCode: ${te(c).code || "N/A"}):`, c), p.error(`【${s(t.REFRESH)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: N })}`);
        }
    }, rt = async (n = !1) => {
      ne.value || (await xe(X.value), n || p.success(R(t.REFRESH)));
    }, Dt = (n) => {
      n !== "..." && (n < 1 || n > Je.value || n === X.value || xe(n));
    }, Pe = async (n) => {
      V.value = V.value.filter(
        (N) => !n.includes(N)
      ), w.value = w.value.filter(
        (N) => !n.includes(N.id)
      ), U.value = Math.max(0, U.value - n.length);
      const c = Kn(
        X.value,
        U.value,
        n.length,
        Ke
      );
      await xe(c);
    }, Ut = (n) => {
      const c = V.value.indexOf(n);
      c >= 0 ? V.value.splice(c, 1) : V.value.push(n), V.value = We(V.value);
    }, kt = () => {
      const n = We(w.value.map((N) => N.id));
      if (n.length > 0 && n.every((N) => V.value.includes(N)))
        V.value = V.value.filter((N) => !n.includes(N));
      else {
        const N = new Set(V.value);
        n.forEach((D) => N.add(D)), V.value = Array.from(N);
      }
    }, $t = (n) => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      J.value = s(t.RELEASE_AND_RESEND), T.value = s(t.RELEASE_AND_RESEND_DESCRIPTION), fe.value = async () => {
        try {
          await _({
            ids: [n.id],
            items: [{ id: n.id, content: n.content, userId: n.userId }],
            liveId: m.value
          }), Ge("success", R(t.RELEASE_AND_RESEND)), await Pe([n.id]);
        } catch (c) {
          const N = te(c).info || c?.message || s(t.UNKNOWN_ERROR);
          r.error("moderation", `release failed (ErrorCode: ${te(c).code || "N/A"}):`, c), p.error(`【${s(t.RELEASE_AND_RESEND)}】${s(t.OPERATION_FAILED, { error: N })}`);
        } finally {
          $.value = !1;
        }
      }, $.value = !0;
    }, Oe = I(null), ct = () => {
      Oe.value = null;
    }, xt = (n, c) => {
      n.stopPropagation();
      const N = n.currentTarget.getBoundingClientRect();
      Oe.value = {
        item: c,
        x: N.right,
        y: N.bottom + 4
      };
    }, Pt = async (n) => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      try {
        await S([n.id]), p.info(R(t.DELETE)), await Pe([n.id]);
      } catch (c) {
        const N = te(c).info || c?.message || s(t.UNKNOWN_ERROR);
        r.error("moderation", `delete failed (ErrorCode: ${te(c).code || "N/A"}):`, c), p.error(`【${s(t.DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: N })}`);
      }
    }, Bt = (n) => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      J.value = s(t.BYPASS_CORRECTION_DIALOG_TITLE), T.value = s(t.BYPASS_CORRECTION_DESCRIPTION), fe.value = async () => {
        try {
          await O({
            content: n.content,
            liveId: m.value
          }), Ge("success", R(t.BYPASS_CORRECTION)), await Pe([n.id]);
        } catch (c) {
          const N = te(c).info || c?.message || s(t.UNKNOWN_ERROR);
          r.error("moderation", `bypass correction keyword failed (ErrorCode: ${te(c).code || "N/A"}):`, c), p.error(`【${s(t.BYPASS_CORRECTION)}】${s(t.OPERATION_FAILED, { error: N })}`);
        } finally {
          $.value = !1;
        }
      }, $.value = !0;
    }, Ft = () => {
      if (!Oe.value) return;
      const { item: n } = Oe.value;
      ct(), Bt(n);
    }, Vt = (n) => {
      const c = [
        {
          key: "approve",
          label: s(t.APPROVE),
          onClick: () => $t(n)
        },
        {
          key: "delete",
          label: s(t.DELETE),
          danger: !0,
          onClick: () => Pt(n)
        }
      ];
      return y.value || c.push({
        key: "more",
        label: s(t.MORE),
        suffixCaret: !0,
        onClick: (N) => xt(N, n)
      }), c;
    }, Gt = () => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      if (V.value.length === 0) {
        p.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      _e.requestConfirm();
    }, Wt = async () => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      if (V.value.length === 0) {
        p.warning(s(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
        return;
      }
      const n = [...V.value];
      try {
        await S(n), p.info(R(t.DELETE)), await Pe(n);
      } catch (c) {
        const N = te(c).info || c?.message || s(t.UNKNOWN_ERROR);
        r.error("moderation", `bulk delete failed (ErrorCode: ${te(c).code || "N/A"}):`, c), p.error(`【${s(t.BULK_DELETE)}${s(t.CONTENT_MODERATION)}】${s(t.OPERATION_FAILED, { error: N })}`);
      }
    };
    ve(
      [m, () => L.value?.createdAt],
      ([n, c]) => {
        n && c != null && xe(1);
      },
      { immediate: !0 }
    ), P(() => [
      { label: s(t.REFRESH_OFF), value: 0 },
      { label: s(t.TEN_SECONDS), value: 10 },
      { label: s(t.THIRTY_SECONDS), value: 30 },
      { label: s(t.ONE_MINUTE), value: 60 },
      { label: s(t.FIVE_MINUTES), value: 300 }
    ]);
    const Kt = I(30), { confirmDialog: Be, requestConfirm: qt, cancelConfirm: dt, executeWithConfirm: jt, loading: ut } = Xe({
      operationName: s(t.SEND_VIOLATION_WARNING),
      action: async () => {
        if (!m.value) throw new Error("liveId is required");
        const n = z.value?.liveName || m.value;
        await Wn(m.value, {
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
      errorMessage: E(t.OP_SEND),
      showSuccess: !0
    }), Yt = () => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      qt();
    }, Ie = Xe({
      operationName: s(t.FORCE_STOP),
      action: async () => {
        if (!z.value) throw new Error("liveInfo is null");
        return j(z.value.id || z.value.liveId);
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.FORCE_STOP) }),
        content: s(t.FORCE_STOP_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      onSuccess: () => {
        i.push(v.value);
      }
    }), _e = Xe({
      operationName: s(t.BULK_APPROVE),
      action: async () => {
        const n = w.value.filter((D) => V.value.includes(D.id)).sort((D, ce) => D.createdAtMs - ce.createdAtMs), c = n.map((D) => D.id), N = n.map((D) => ({ id: D.id, content: D.content, userId: D.userId }));
        await _({ ids: c, items: N, liveId: m.value });
      },
      confirm: {
        title: s(t.CONFIRM_ACTION_TITLE, { action: s(t.BULK_APPROVE) }),
        content: s(t.BULK_APPROVE_CONFIRM_CONTENT),
        confirmText: s(t.CONFIRM)
      },
      showSuccess: !0,
      onSuccess: async () => {
        const n = [...V.value];
        await Pe(n);
      }
    }), we = P(() => Ie.confirmDialog.value ? Ie.confirmDialog.value : _e.confirmDialog.value ? _e.confirmDialog.value : null), zt = () => {
      Ie.confirmDialog.value ? Ie.executeWithConfirm() : _e.confirmDialog.value && _e.executeWithConfirm();
    }, Ht = () => {
      Ie.confirmDialog.value ? Ie.cancelConfirm() : _e.confirmDialog.value && _e.cancelConfirm();
    }, Jt = P(() => Ie.confirmDialog.value ? Ie.loading.value : _e.confirmDialog.value ? _e.loading.value : !1);
    let ue = null, Le = null;
    const Xt = P(
      () => L.value?.liveOwner?.userId || z.value?.anchor.userId || ""
    ), Qt = P(
      () => pe.value?.nick || It(
        L.value?.liveOwner,
        z.value?.anchor.nick || s(t.UNKNOWN_HOST)
      )
    ), Zt = P(
      () => pe.value?.avatarUrl || _t(L.value?.liveOwner) || z.value?.anchor.avatarUrl
    ), en = P(() => ({
      liveInfo: z.value,
      liveAnchorAvatar: Zt.value,
      liveAnchorName: Qt.value,
      currentLive: L.value,
      isMockMode: f,
      liveControlSlots: Q,
      handleLeaveLive: vt
    })), tn = P(() => ({
      liveId: m.value,
      disabled: ne.value,
      currentUserId: Ue.value,
      anchorUserId: Xt.value,
      currentLive: L.value,
      roomJoined: $e.value
    })), Ge = (n, c) => {
      n === "success" ? (se.value = c, setTimeout(() => se.value = "", 3e3)) : (le.value = c, setTimeout(() => le.value = "", 3e3));
    }, nn = (n) => n >= 1e4 ? (n / 1e4).toFixed(1) + "w" : n.toLocaleString(), an = (n) => {
      n < 0 && (n = 0);
      const c = Math.floor(n / 86400), N = Math.floor(n % 86400 / 3600), D = Math.floor(n % 3600 / 60), ce = n % 60, Re = `${N.toString().padStart(2, "0")}:${D.toString().padStart(2, "0")}:${ce.toString().padStart(2, "0")}`;
      return c > 0 ? `${c}${s(t.DAYS)} ${Re}` : Re;
    }, vt = () => {
      i.push(v.value);
    }, on = () => {
      if (ne.value) {
        p.warning(s(t.LIVE_ENDED));
        return;
      }
      Ie.requestConfirm();
    }, sn = async () => {
      if (console.log("[LiveControl][fetchRoomInfo] start, liveId:", m.value), !!m.value)
        try {
          const n = await B(m.value);
          if (console.log("[LiveControl][fetchRoomInfo] fetchLiveDetail result:", n ? "exists" : "null"), n) {
            const c = It(n, n.anchor?.userId || "-"), N = _t(n);
            if (n.anchor ? pe.value = {
              nick: n.anchor.nick || c,
              avatarUrl: n.anchor.avatarUrl || N
            } : pe.value = {
              nick: c,
              avatarUrl: N
            }, z.value = {
              id: n.liveId,
              title: n.liveName || s(t.UNNAMED_LIVE_SHORT),
              coverUrl: n.coverUrl || Rn,
              anchor: {
                userId: n.anchor?.userId || "",
                nick: c,
                avatarUrl: N
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
              ke.value = !0, ue && (clearInterval(ue), ue = null);
            else {
              const D = n.createdAt && n.createdAt > 1e9 ? n.createdAt * 1e3 : null;
              if (Ae.value = D, D) {
                const ce = Math.floor((Date.now() - D) / 1e3);
                Te.value = ce > 0 ? ce : 0;
              }
            }
          } else
            Ce.value = !1;
        } catch (n) {
          r.error("fetchRoomInfo", `获取直播信息失败 (ErrorCode: ${te(n).code || "N/A"})`, n);
          const c = n instanceof Error ? n : new Error(String(n));
          c.message?.includes("network") || c.message?.includes("fetch") ? Ge("error", s(t.NETWORK_ERROR)) : Ge("error", E(t.OP_REQUEST));
        } finally {
          Ce.value = !1;
        }
    }, mt = async () => {
      if (!(!m.value || !L.value))
        try {
          const n = await C();
          n && (x.totalViewers = n.viewCount || 0, x.totalMsgCount = n.commentCount || 0, x.totalLikesReceived = n.likeCount || 0, x.totalGiftsSent = n.giftCount || 0, x.totalGiftCoins = n.giftAmount || 0, x.totalUniqueGiftSenders = n.giftUserCount || 0, h());
        } catch (n) {
          const c = n instanceof Error ? n : new Error(String(n));
          r.error("获取统计数据失败", `(ErrorCode: ${te(n).code || "N/A"}) ${c.message || ""}`, c);
        }
    }, ln = () => {
      ue && (clearInterval(ue), ue = null), Le && (clearInterval(Le), Le = null), z.value && (z.value = { ...z.value, activityStatus: 2 }), ee(null), ke.value = !0;
    };
    return ve(
      m,
      (n) => {
        n && ($e.value = !1, sn(), mt(), L.value?.createdAt != null && xe(1));
      },
      { immediate: !0 }
    ), ve([() => Ae.value, ne], ([n, c]) => {
      ue && (clearInterval(ue), ue = null), n && n > 1e12 && !c && (ue = window.setInterval(() => {
        const N = Math.floor((Date.now() - n) / 1e3);
        Te.value = N > 0 ? N : 0;
      }, 1e3));
    }, { immediate: !0 }), ve(
      [Kt, ne, m, q, y],
      ([n, c, N, D, ce]) => {
        Le && (clearInterval(Le), Le = null), n > 0 && N && !c && (Le = window.setInterval(() => {
          mt(), ce && !D || rt(!0);
        }, n * 1e3));
      },
      { immediate: !0 }
    ), ve(F, (n) => {
      x.onlineCount = n;
    }), Me(() => {
      m.value && r.debug("LiveControl", "Component unmounting, liveId:", m.value), ue && clearInterval(ue), Le && clearInterval(Le);
    }), (n, c) => {
      const N = Ee("t-dialog");
      return u(), M("div", Ii, [
        g(e(ia), {
          "success-msg": e(se),
          "error-msg": e(le)
        }, null, 8, ["success-msg", "error-msg"]),
        g(e(ca), {
          "handle-leave-live": vt,
          "handle-violation-warning": Yt,
          "handle-force-stop-live": on,
          disabled: ne.value
        }, null, 8, ["disabled"]),
        o("main", _i, [
          g(e(_o), {
            "live-id": m.value,
            "current-live": e(L),
            "is-mock-mode": e(f),
            "live-ended-overlay-visible": ke.value,
            "current-user-id": Ue.value,
            "video-monitor": en.value,
            interaction: tn.value,
            "active-tab": Ve.value,
            "onUpdate:activeTab": c[0] || (c[0] = (D) => Ve.value = D),
            onLiveEnded: ln,
            onJoinedLive: c[1] || (c[1] = (D) => $e.value = !0)
          }, null, 8, ["live-id", "current-live", "is-mock-mode", "live-ended-overlay-visible", "current-user-id", "video-monitor", "interaction", "active-tab"]),
          o("aside", Li, [
            g(e(zo), {
              stats: x,
              "live-duration": Te.value,
              "update-time-text": b.value,
              "interaction-rate": he.value,
              "format-number": nn,
              "format-duration": an
            }, null, 8, ["stats", "live-duration", "update-time-text", "interaction-rate"]),
            g(Tt, {
              "slot-component": e(Q)?.customControlPanel,
              "slot-props": { liveInfo: z.value, stats: x }
            }, null, 8, ["slot-component", "slot-props"]),
            g(e(bi), {
              "moderation-mode": e(H),
              "moderation-list": w.value,
              "moderation-loading": e(re),
              "moderation-page": X.value,
              "moderation-total": U.value,
              "moderation-total-pages": Je.value,
              "moderation-page-numbers": wt.value,
              "moderation-selected-ids": V.value,
              "moderation-columns": St.value,
              "is-all-on-page-selected": Rt.value,
              "custom-moderation-toggle-enabled": e(q),
              "on-custom-toggle-change": e(Z),
              "update-time-text": b.value,
              disabled: ne.value,
              "handle-bulk-approve": Gt,
              "handle-bulk-delete": Wt,
              "handle-refresh-moderation": rt,
              "toggle-select-one": Ut,
              "toggle-select-all": kt,
              "go-to-moderation-page": Dt,
              "get-moderation-actions": Vt,
              "format-moderation-time": e(Vn)
            }, null, 8, ["moderation-mode", "moderation-list", "moderation-loading", "moderation-page", "moderation-total", "moderation-total-pages", "moderation-page-numbers", "moderation-selected-ids", "moderation-columns", "is-all-on-page-selected", "custom-moderation-toggle-enabled", "on-custom-toggle-change", "update-time-text", "disabled", "format-moderation-time"])
          ])
        ]),
        we.value ? (u(), W(e(Ze), {
          key: 0,
          visible: we.value.visible,
          "onUpdate:visible": c[2] || (c[2] = (D) => we.value.visible = D),
          title: we.value.title,
          content: we.value.content,
          "confirm-text": we.value.confirmText,
          loading: Jt.value,
          "on-confirm": zt,
          "on-close": Ht
        }, null, 8, ["visible", "title", "content", "confirm-text", "loading"])) : K("", !0),
        $.value ? (u(), W(e(Ze), {
          key: 1,
          visible: $.value,
          "onUpdate:visible": c[3] || (c[3] = (D) => $.value = D),
          title: J.value,
          content: T.value,
          loading: de.value,
          "on-confirm": async () => {
            if (fe.value) {
              de.value = !0;
              try {
                await fe.value();
              } finally {
                de.value = !1, $.value = !1;
              }
            } else
              $.value = !1;
          },
          "on-close": () => {
            de.value = !1, $.value = !1, fe.value = null;
          }
        }, null, 8, ["visible", "title", "content", "loading", "on-confirm", "on-close"])) : K("", !0),
        y.value ? K("", !0) : (u(), W(e(hi), {
          key: 2,
          visible: !!Oe.value,
          position: Oe.value || { x: 0, y: 0 },
          onRelease: Ft,
          onClose: ct
        }, null, 8, ["visible", "position"])),
        e(Be) ? (u(), W(N, {
          key: 3,
          visible: e(Be).visible,
          header: e(Be).title,
          "confirm-btn": {
            content: e(Be).confirmText ?? e(s)(e(t).CONFIRM),
            loading: e(ut),
            shape: "round"
          },
          "cancel-btn": {
            content: e(s)(e(t).CANCEL),
            disabled: e(ut),
            shape: "round"
          },
          onConfirm: e(jt),
          onCancel: e(dt),
          onClose: e(dt)
        }, {
          default: A(() => [
            o("p", null, l(e(Be).content), 1)
          ]),
          _: 1
        }, 8, ["visible", "header", "confirm-btn", "cancel-btn", "onConfirm", "onCancel", "onClose"])) : K("", !0)
      ]);
    };
  }
}), Vi = /* @__PURE__ */ ta(Ni, [["__scopeId", "data-v-a7572862"]]);
export {
  Vi as default
};
