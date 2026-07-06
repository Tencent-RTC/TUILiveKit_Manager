import { jsxs as s, jsx as e, Fragment as se } from "react/jsx-runtime";
import Pe, { useState as w, useCallback as O, useEffect as V, useRef as j, useMemo as le } from "react";
import { useParams as Ge, useNavigate as ze, useLocation as He } from "react-router-dom";
import { Dialog as Ne, Tooltip as oe, Button as Q, Tabs as ve, Switch as Be, Loading as Ke } from "tdesign-react";
import { CheckCircleIcon as Te, ChatOffIcon as xe, UserCheckedIcon as qe, UserBlockedIcon as Fe, MoreIcon as je, InfoCircleIcon as de, CloseCircleIcon as Ye, RefreshIcon as Je, ChevronLeftIcon as Xe, ChevronRightIcon as Ze, ArrowLeftIcon as Qe, NotificationIcon as en, StopCircleIcon as nn } from "tdesign-icons-react";
import { useUIKit as Se } from "@tencentcloud/uikit-base-component-react";
import { LiveView as tn, useLiveAudienceState as Ae, BarrageList as rn, BarrageInput as an, LiveAudienceList as on, useLiveListState as sn, useLoginState as cn, useLivePlayerState as ln, LiveListEvent as ye } from "tuikit-atomicx-react";
import { c as Ee } from "../../chunks/logger.DCFRj533.js";
import { I as n, a3 as dn, f as un, W as ge, q as ue, s as pe, k as Re, O as mn, g as fn, a9 as hn } from "../../chunks/layout.DppKPdLU.js";
import { bg as Nn, b8 as Me, bb as De, l as gn, bm as we, D as En, bN as Cn, a6 as pn, bE as Ln, Y as Le, aj as Tn, ao as An, aI as vn, aR as bn, aB as Mn, bX as fe, ah as In, bc as _n, bK as Sn, bD as On, bC as yn } from "../../chunks/main-layout.BqLTYqar.js";
import { b as Ve, u as Oe } from "../../chunks/live-monitor.DzfKuVn6.js";
import "../../chunks/useSvgaPlayer.xaOB2im4.js";
import { M as q, u as Rn } from "../../chunks/useAsyncAction.Ce9HnFRp.js";
import { u as me } from "../../chunks/useConfirmAction.CRsj8aPf.js";
import { S as We } from "../../chunks/SlotRenderer.vgqO2kMA.js";
import { c as Dn, i as wn } from "../../chunks/user-action-dropdown.8c9nzcrX.js";
import { A as Ie } from "../../chunks/AnchorAvatar.DaGA8h42.js";
import { createPortal as Un } from "react-dom";
import { u as kn } from "../../chunks/gift.bgXTYSLh.js";
import { p as Pn, g as Bn, b as xn } from "../../chunks/columns.qsOqR_3f.js";
import { A as _e, F as Fn } from "../../chunks/ActionButtons.Cfkno1zE.js";
function Vn() {
  const [a, t] = w(""), [c, d] = w(""), L = O((u, f) => {
    u === "success" ? (t(f), setTimeout(() => t(""), 3e3)) : (d(f), setTimeout(() => d(""), 3e3));
  }, []);
  return {
    successMsg: a,
    errorMsg: c,
    showMessage: L
  };
}
function Wn({
  liveControlSlots: a,
  liveInfo: t,
  currentLive: c,
  liveAnchorAvatar: d,
  liveAnchorName: L,
  isVoiceLive: u,
  isMockMode: f,
  liveEndedOverlayVisible: l,
  t: h
}) {
  return /* @__PURE__ */ s("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ e(We, { slot: a?.beforeLiveInfo, props: { liveInfo: t } }),
    /* @__PURE__ */ s("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        Ie,
        {
          className: "anchor-avatar",
          src: d,
          name: L,
          title: L
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: l ? h(n.LIVE_ENDED) : c?.liveName || t?.liveName || h(n.LOADING) })
    ] }),
    /* @__PURE__ */ e("div", { className: "video-stage", children: /* @__PURE__ */ s("div", { className: `player-container${u ? " player-container-voice" : ""}`, children: [
      f ? t?.coverUrl ? /* @__PURE__ */ e("div", { className: "mock-cover-preview", children: /* @__PURE__ */ e(
        "img",
        {
          src: t.coverUrl,
          alt: "cover",
          className: "mock-cover-img",
          onError: (_) => {
            _.currentTarget.src = dn;
          }
        }
      ) }) : null : /* @__PURE__ */ e(tn, {}),
      l && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ s("div", { className: "live-state-overlay-content", children: [
        /* @__PURE__ */ e("img", { src: Dn, alt: "", className: "live-state-overlay-icon" }),
        /* @__PURE__ */ e(
          "div",
          {
            className: "live-state-overlay-title",
            style: {
              color: "rgba(0, 0, 0, 0.55)",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
              lineHeight: "24px"
            },
            children: h(n.LIVE_ENDED)
          }
        )
      ] }) })
    ] }) })
  ] });
}
const Ue = Ee("MessageList"), $n = 12 * 1024, ce = { current: { giftList: [] } }, Gn = Pe.memo(
  ({ message: a, style: t }) => {
    const c = a.sender.userId, d = c === ce.current.anchorUserId, L = a.sender.nameCard || a.sender.userName || c;
    let u;
    if (a.messageType === 0)
      u = a.textContent || "";
    else if (a.businessId === "gift" && a.data)
      try {
        const h = JSON.parse(a.data), _ = h.giftName || "", g = h.giftId;
        if (g) {
          const I = ce.current.giftList?.find((E) => E.id === g);
          I?.languageList ? u = un(I.languageList)?.name || _ : u = _;
        } else
          u = _;
      } catch {
        u = a.data || "";
      }
    else
      u = a.data || "";
    const f = Pn(u);
    return /* @__PURE__ */ s(
      "div",
      {
        className: `message-item${d ? " host" : ""}`,
        style: t,
        onClick: (h) => {
          ce.current.onMessageClick?.(h, a);
        },
        children: [
          d && /* @__PURE__ */ e("span", { className: "message-badge", children: ce.current.t?.(n.HOST) || n.HOST }),
          /* @__PURE__ */ s("span", { className: "message-username", children: [
            L,
            ": "
          ] }),
          /* @__PURE__ */ e("span", { className: "message-content", children: f.length > 0 ? f.map((h, _) => h.type === "text" ? /* @__PURE__ */ e("span", { className: "message-text", children: h.text }, `t${_}`) : /* @__PURE__ */ e(
            "img",
            {
              src: h.src,
              alt: h.key,
              className: "message-emoji",
              loading: "lazy",
              draggable: !1
            },
            `e${_}-${h.key}`
          )) : /* @__PURE__ */ e("span", { className: "message-text", children: u }) })
        ]
      }
    );
  },
  (a, t) => a.message.liveId === t.message.liveId && a.message.sequence === t.message.sequence && a.style === t.style
), zn = ({ liveId: a, anchorUserId: t, onMuteUser: c, onBanUser: d, mutedList: L = [], bannedList: u = [], roomJoined: f }) => {
  const { t: l } = Se(), { audienceList: h, disableSendMessage: _ } = Ae(), { giftList: g, fetchGiftList: I } = kn();
  V(() => {
    I().catch(() => {
    });
  }, [I]), ce.current.giftList = g;
  const [E, N] = w(!1), [A, x] = w({ top: 0, left: 0 }), [b, H] = w(null), $ = j(null), U = j(null), S = t;
  ce.current.t = l;
  const M = (p) => h?.find((v) => v.userId === p), P = (p) => {
    const v = M(p);
    if (v)
      return v.isMessageDisabled === !0;
    const R = L.find((m) => m.userId === p);
    return R ? R.endTime > Date.now() / 1e3 : !1;
  }, z = (p) => {
    const v = u.find((R) => R.userId === p);
    return v ? v.endTime > Date.now() / 1e3 : !1;
  };
  V(() => {
    if (!E) return;
    const p = (v) => {
      setTimeout(() => {
        U.current && U.current.contains(v.target) || (N(!1), H(null));
      }, 100);
    };
    return document.addEventListener("mousedown", p), () => {
      document.removeEventListener("mousedown", p);
    };
  }, [E]);
  const k = O((p, v) => {
    if (p.stopPropagation(), Number(v.sender.userRole) !== 2 || Nn(a || "", v.sender.userId))
      return;
    const m = p.target.closest(".message-item");
    if (!m)
      return;
    const W = m.getBoundingClientRect(), re = W.bottom + 4, F = Math.min(W.left, window.innerWidth - 160);
    x({ top: re, left: Math.max(0, F) }), H(v), N(!0);
  }, [a]);
  V(() => {
    ce.current.anchorUserId = S, ce.current.onMessageClick = k;
  });
  const y = () => {
    if (b && d) {
      const p = b.sender.userId;
      if (S && p === Me(S)) {
        N(!1), H(null);
        return;
      }
      if (De(p, h)) {
        N(!1), H(null);
        return;
      }
      const v = b.sender.userName || b.sender.nameCard || b.sender.userId, R = z(p);
      d(p, v, R);
    }
    N(!1), H(null);
  }, K = async () => {
    if (!b) return;
    const p = b.sender.userId;
    if (S && p === Me(S)) {
      N(!1), H(null);
      return;
    }
    if (De(p, h)) {
      N(!1), H(null);
      return;
    }
    const v = b.sender.userName || b.sender.nameCard || b.sender.userId, R = P(p);
    try {
      _ ? (await _({ userId: p, isDisable: !R }), Ue.info("toggleMute", R ? "Unmute successful" : "Mute successful")) : c && c(p, v, R);
    } catch (m) {
      Ue.error("general", "SDK mute failed, using fallback method:", m), c && c(p, v, R);
    }
    N(!1), H(null);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: "message-list-container",
      ref: $,
      children: [
        /* @__PURE__ */ e("div", { className: "message-list-scroll-area barrage-list-wrapper", children: /* @__PURE__ */ e(
          rn,
          {
            Message: Gn
          }
        ) }),
        f && /* @__PURE__ */ e(
          an,
          {
            placeholder: l(n.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
            disabled: !a,
            maxLength: $n,
            autoFocus: !1
          }
        ),
        E && b && Un(
          /* @__PURE__ */ s(
            "div",
            {
              ref: U,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: A.top,
                left: A.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: K, children: P(b.sender.userId) ? /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(Te, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.UNMUTE) })
                ] }) : /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(xe, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: y, children: z(b.sender.userId) ? /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(qe, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.UNBAN) })
                ] }) : /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(Fe, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.BAN) })
                ] }) })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}, Hn = Pe.memo(zn);
function Kn({
  mutedModalVisible: a,
  bannedModalVisible: t,
  mutedList: c,
  bannedList: d,
  memberListLoading: L,
  unmutingUserId: u,
  unbanningUserId: f,
  getUserAvatar: l,
  getUserNameFromCache: h,
  onMutedModalClose: _,
  onBannedModalClose: g,
  onUnmuteFromList: I,
  onUnbanFromList: E,
  t: N
}) {
  return /* @__PURE__ */ s(se, { children: [
    /* @__PURE__ */ e(
      Ne,
      {
        visible: a,
        header: N(n.MUTED_VIEWERS),
        onClose: _,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", onClick: _, children: N(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(n.LOADING) }) : c.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(n.NO_MUTED_MEMBERS) }) : /* @__PURE__ */ s("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ e("th", { children: N(n.USER) }),
            /* @__PURE__ */ e("th", { children: N(n.UNMUTE_TIME) }),
            /* @__PURE__ */ e("th", { children: N(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: c.map((A) => {
            const x = h(A.userId), b = u === A.userId;
            return /* @__PURE__ */ s("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ s("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  Ie,
                  {
                    className: "member-table-avatar",
                    src: l(A.userId),
                    name: x
                  }
                ),
                /* @__PURE__ */ e(oe, { content: x, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: x }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: A.endTime > 0 ? new Date(A.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: b ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: N(n.UNMUTING) }) : /* @__PURE__ */ e(
                _e,
                {
                  actions: [
                    {
                      key: "unmute",
                      label: N(n.UNMUTE),
                      onClick: () => I(A.userId, x)
                    }
                  ]
                }
              ) })
            ] }, A.userId);
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ e(
      Ne,
      {
        visible: t,
        header: N(n.BANNED_VIEWERS),
        onClose: g,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", onClick: g, children: N(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(n.LOADING) }) : d.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(n.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ s("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ e("th", { children: N(n.USER) }),
            /* @__PURE__ */ e("th", { children: N(n.BAN_LIFT_TIME) }),
            /* @__PURE__ */ e("th", { children: N(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: d.map((A) => {
            const x = h(A.userId), b = f === A.userId;
            return /* @__PURE__ */ s("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ s("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  Ie,
                  {
                    className: "member-table-avatar",
                    src: l(A.userId),
                    name: x
                  }
                ),
                /* @__PURE__ */ e(oe, { content: x, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: x }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: A.endTime > 0 ? new Date(A.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: b ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: N(n.UNBANNING) }) : /* @__PURE__ */ e(
                _e,
                {
                  actions: [
                    {
                      key: "unban",
                      label: N(n.UNBAN),
                      onClick: () => E(A.userId, x)
                    }
                  ]
                }
              ) })
            ] }, A.userId);
          }) })
        ] }) })
      }
    )
  ] });
}
const ke = Ee("MemberMgmt");
function qn(a, t, c, d) {
  const {
    mutedList: L,
    bannedList: u,
    memberLoading: f,
    fetchMutedList: l,
    fetchBannedList: h,
    muteMember: _,
    unmuteMember: g,
    banMember: I,
    unbanMember: E
  } = Ve({ liveId: a || "", pageSize: 20 }), [N, A] = w([]), [x, b] = w([]), [H, $] = w(!1), [U, S] = w(null), [M, P] = w(null), z = j(null), k = j(null), [y, K] = w(null), [p, v] = w(null);
  V(() => {
    Array.isArray(L) && A(L);
  }, [L]), V(() => {
    Array.isArray(u) && b(u);
  }, [u]);
  const R = (o, r) => {
    o === "success" ? q.success(r) : q.error(r);
  }, m = O(async (o, r) => {
    try {
      await g({ memberAccounts: [o] }), R("success", t(n.USER_ACTION_SUCCESS, { action: t(n.UNMUTE), name: r })), await l();
    } catch (i) {
      const { code: D, info: Z } = ue(i), X = D ? pe(D, Z) : (i instanceof Error ? i.message : "") || t(n.UNKNOWN_HOST);
      R("error", `【${t(n.UNMUTE)}】${t(n.OPERATION_FAILED, { error: X })}`);
    }
  }, [g, t, l]), W = me({
    operationName: t(n.MUTE),
    action: async () => {
      const o = z.current;
      if (!o) throw new Error("No target");
      await _({ memberAccounts: [o.userId], muteTime: gn });
    },
    confirm: {
      title: t(n.CONFIRM_ACTION_TITLE, { action: t(n.MUTE) }),
      content: z.current ? t(n.MUTE_CONFIRM_CONTENT, { name: z.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = z.current;
      R("success", t(n.USER_ACTION_SUCCESS, { action: t(n.MUTE), name: o?.userName || "" })), await ae(), z.current = null, K(null);
    }
  }), re = O((o, r, i) => {
    if (a) {
      if (d) {
        q.warning(t(n.LIVE_ENDED));
        return;
      }
      we(o, c) || (i ? m(o, r) : (z.current = { userId: o, userName: r }, K({ userId: o, userName: r })));
    }
  }, [a, c, m, d, t]), F = O(async (o, r) => {
    try {
      await E({ memberAccounts: [o] }), R("success", t(n.USER_ACTION_SUCCESS, { action: t(n.UNBAN), name: r })), await h();
    } catch (i) {
      const { code: D, info: Z } = ue(i), X = D ? pe(D, Z) : (i instanceof Error ? i.message : "") || t(n.UNKNOWN_HOST);
      R("error", `【${t(n.UNBAN)}】${t(n.OPERATION_FAILED, { error: X })}`);
    }
  }, [E, t, h]), J = me({
    operationName: t(n.BAN),
    action: async () => {
      const o = k.current;
      if (!o) throw new Error("No target");
      await I({ memberAccounts: [o.userId], duration: En });
    },
    confirm: {
      title: t(n.CONFIRM_ACTION_TITLE, { action: t(n.BAN) }),
      content: k.current ? t(n.BAN_CONFIRM_CONTENT, { name: k.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = k.current;
      R("success", t(n.USER_ACTION_SUCCESS, { action: t(n.BAN), name: o?.userName || "" })), await ie(), k.current = null, v(null);
    }
  }), C = O((o, r, i) => {
    if (a) {
      if (d) {
        q.warning(t(n.LIVE_ENDED));
        return;
      }
      we(o, c) || (i ? F(o, r) : (k.current = { userId: o, userName: r }, v({ userId: o, userName: r })));
    }
  }, [a, c, F, d, t]), B = j(W);
  B.current = W;
  const Y = j(J);
  Y.current = J, V(() => {
    y && B.current.requestConfirm();
  }, [y]), V(() => {
    p && Y.current.requestConfirm();
  }, [p]);
  const ne = O(async (o, r) => {
    if (a) {
      if (d) {
        q.warning(t(n.LIVE_ENDED));
        return;
      }
      if (!U) {
        S(o);
        try {
          await m(o, r || o);
        } finally {
          S(null);
        }
      }
    }
  }, [a, m, d, t, U]), ee = O(async (o, r) => {
    if (a) {
      if (d) {
        q.warning(t(n.LIVE_ENDED));
        return;
      }
      if (!M) {
        P(o);
        try {
          await F(o, r || o);
        } finally {
          P(null);
        }
      }
    }
  }, [a, F, d, t, M]), ae = O(async () => {
    if (a) {
      $(!0);
      try {
        const o = await l();
        A(Array.isArray(o) ? o : []);
      } catch (o) {
        ke.error("fetchMutedList", "获取禁言列表失败", o);
        const { code: r, info: i } = ue(o), D = r ? pe(r, i) : (o instanceof Error ? o.message : "") || t(n.UNKNOWN_HOST);
        R("error", t(n.FETCH_MUTED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, t, l]), ie = O(async () => {
    if (a) {
      $(!0);
      try {
        const o = await h();
        b(Array.isArray(o) ? o : []);
      } catch (o) {
        ke.error("fetchBannedList", "获取封禁列表失败", o);
        const { code: r, info: i } = ue(o), D = r ? pe(r, i) : (o instanceof Error ? o.message : "") || t(n.UNKNOWN_HOST);
        R("error", t(n.FETCH_BANNED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, t, h]), T = O((o) => N.some((r) => r.userId === o), [N]);
  return {
    mutedList: N,
    bannedList: x,
    memberListLoading: H,
    unmutingUserId: U,
    unbanningUserId: M,
    fetchMutedList: ae,
    fetchBannedList: ie,
    handleMuteAudience: re,
    handleBanAudience: C,
    handleUnmuteFromList: ne,
    handleUnbanFromList: ee,
    isUserMuted: T,
    muteConfirmDialog: W.confirmDialog,
    banConfirmDialog: J.confirmDialog,
    muteAction: W,
    banAction: J
  };
}
const jn = 160;
function Yn({
  liveId: a,
  activeTab: t,
  onActiveTabChange: c,
  disabled: d,
  currentUserId: L,
  roomJoined: u = !1
}) {
  const { t: f } = Se(), { currentLive: l, updateLive: h } = Oe(), _ = l?.liveOwner?.userId || "", g = qn(a, f, _, d), { audienceList: I } = Ae(), E = l?.isMessageDisabled === !0, [N, A] = w(!1), [x, b] = w(!1), H = O((C) => {
    if (!d && C !== E) {
      if (!C) {
        A(!0), h({ liveId: a, isMessageDisabled: !1 }).finally(() => A(!1));
        return;
      }
      b(!0);
    }
  }, [d, E, a, h]), $ = O(() => {
    A(!0), h({ liveId: a, isMessageDisabled: !0 }).then(() => b(!1)).finally(() => A(!1));
  }, [a, h]), [U, S] = w(null), M = j(null), P = O((C, B, Y) => {
    C.stopPropagation();
    const ne = C.currentTarget.getBoundingClientRect();
    S({ userId: B, userName: Y, x: ne.right, y: ne.bottom + 4 });
  }, []), z = O(() => {
    S(null);
  }, []);
  V(() => {
    if (!U) return;
    const C = (B) => {
      M.current && !M.current.contains(B.target) && S(null);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [U]);
  const [k, y] = w(!1), [K, p] = w(!1), v = j(g.fetchMutedList);
  v.current = g.fetchMutedList;
  const R = j(g.fetchBannedList);
  R.current = g.fetchBannedList;
  const m = O(() => {
    v.current(), y(!0);
  }, []), W = O(() => {
    R.current(), p(!0);
  }, []);
  V(() => {
    t === "audience" && a && (v.current(), R.current());
  }, [t, a]);
  function re(C) {
    const B = I.find((Y) => Y.userId === C);
    if (B && "avatarUrl" in B && typeof B.avatarUrl == "string")
      return B.avatarUrl;
  }
  function F(C) {
    const B = I.find((Y) => Y.userId === C);
    return B?.userName ? B.userName : C;
  }
  function J(C, B) {
    return C ? /* @__PURE__ */ e(
      Ne,
      {
        visible: !0,
        header: f(C.title),
        onClose: () => B.cancelConfirm(),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", disabled: B.loading, onClick: () => B.cancelConfirm(), children: f(n.CANCEL) }),
          /* @__PURE__ */ e(
            Q,
            {
              shape: "round",
              theme: "primary",
              loading: B.loading,
              onClick: () => B.executeWithConfirm(),
              children: f(C.confirmText ?? n.CONFIRM)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: f(C.content) } })
      },
      C.title
    ) : null;
  }
  return /* @__PURE__ */ s("div", { className: "left-interaction-card", children: [
    /* @__PURE__ */ s("div", { className: "interaction-tabs-header", children: [
      /* @__PURE__ */ s(
        ve,
        {
          value: t,
          onChange: (C) => c(C),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(ve.TabPanel, { value: "chat", label: f(n.MESSAGE_LIST) }),
            /* @__PURE__ */ e(ve.TabPanel, { value: "audience", label: f(n.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ s("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          Be,
          {
            value: E,
            disabled: N || d,
            onChange: (C) => H(!!C)
          }
        ),
        /* @__PURE__ */ e("span", { className: "all-mute-label", children: f(n.ALL_MEMBER_MUTE) })
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "interaction-body", children: [
      /* @__PURE__ */ s(
        "div",
        {
          className: "chat-stream-sidebar",
          style: {
            height: "100%",
            display: t === "chat" ? "flex" : "none",
            flexDirection: "column"
          },
          children: [
            E && /* @__PURE__ */ s("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ e("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ e("span", { children: f(n.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ e(
              Hn,
              {
                liveId: a,
                anchorUserId: _,
                mutedList: g.mutedList,
                bannedList: g.bannedList,
                roomJoined: u,
                onMuteUser: g.handleMuteAudience,
                onBanUser: g.handleBanAudience
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: "audience-tab-wrapper",
          style: { display: t === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(on, { height: "99%", children: ({ audience: C }) => {
              if (C.userId === L)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: f(n.ME) });
              const B = Me(_);
              return C.userRole === 0 || C.userId === B ? null : /* @__PURE__ */ s("div", { className: "audience-row-actions", children: [
                g.isUserMuted(C.userId) && /* @__PURE__ */ e("span", { className: "audience-muted-badge", children: f(n.MUTED) }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: f(n.MORE_ACTIONS),
                    disabled: d,
                    onClick: (Y) => {
                      Y.stopPropagation(), P(
                        Y,
                        C.userId,
                        C.userName || C.userId
                      );
                    },
                    children: /* @__PURE__ */ e(je, { size: 18 })
                  }
                )
              ] });
            } }) }),
            /* @__PURE__ */ s("div", { className: "audience-bottom-actions", children: [
              /* @__PURE__ */ s("button", { className: "audience-bottom-btn", disabled: d, onClick: m, children: [
                f(n.MUTED_VIEWERS),
                " (",
                g.mutedList.length,
                ")"
              ] }),
              /* @__PURE__ */ s("button", { className: "audience-bottom-btn", disabled: d, onClick: W, children: [
                f(n.BANNED_VIEWERS),
                " (",
                g.bannedList.length,
                ")"
              ] })
            ] })
          ]
        }
      )
    ] }),
    U && /* @__PURE__ */ s(
      "div",
      {
        ref: M,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: U.y,
          left: U.x - jn
        },
        children: [
          /* @__PURE__ */ e("div", { className: "dropdown-header", children: U.userName }),
          /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
          g.isUserMuted(U.userId) ? /* @__PURE__ */ s(
            "button",
            {
              className: "dropdown-item",
              disabled: d,
              onClick: () => {
                g.handleMuteAudience(U.userId, U.userName, !0), z();
              },
              children: [
                /* @__PURE__ */ e(Te, { size: 14 }),
                f(n.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ s(
            "button",
            {
              className: "dropdown-item",
              disabled: d,
              onClick: () => {
                g.handleMuteAudience(U.userId, U.userName, !1), z();
              },
              children: [
                /* @__PURE__ */ e(xe, { size: 14 }),
                f(n.MUTE)
              ]
            }
          ),
          /* @__PURE__ */ s(
            "button",
            {
              className: "dropdown-item danger",
              disabled: d,
              onClick: () => {
                g.handleBanAudience(U.userId, U.userName, !1), z();
              },
              children: [
                /* @__PURE__ */ e(Fe, { size: 14 }),
                f(n.BAN)
              ]
            }
          )
        ]
      }
    ),
    J(g.muteConfirmDialog, g.muteAction),
    J(g.banConfirmDialog, g.banAction),
    x && /* @__PURE__ */ e(
      Ne,
      {
        visible: !0,
        header: f(n.ENABLE_ALL_MEMBER_MUTE),
        onClose: () => b(!1),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", onClick: () => b(!1), children: f(n.CANCEL) }),
          /* @__PURE__ */ e(Q, { shape: "round", theme: "primary", loading: N, onClick: $, children: f(n.CONFIRM_ENABLE) })
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: f(n.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT) } })
      }
    ),
    /* @__PURE__ */ e(
      Kn,
      {
        mutedModalVisible: k,
        bannedModalVisible: K,
        mutedList: g.mutedList,
        bannedList: g.bannedList,
        memberListLoading: g.memberListLoading,
        unmutingUserId: g.unmutingUserId,
        unbanningUserId: g.unbanningUserId,
        getUserAvatar: re,
        getUserNameFromCache: F,
        onMutedModalClose: () => y(!1),
        onBannedModalClose: () => p(!1),
        onUnmuteFromList: g.handleUnmuteFromList,
        onUnbanFromList: g.handleUnbanFromList,
        t: f
      }
    )
  ] });
}
const G = Ee("LiveControl");
function Jn() {
  try {
    if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
      return "admin";
  } catch {
  }
  return "audience";
}
function Xn({
  liveControlSlots: a,
  liveInfo: t,
  liveId: c,
  initialIsLiveEnded: d,
  activeTab: L,
  onActiveTabChange: u,
  onLiveEnded: f,
  t: l
}) {
  const { currentLive: h, setCurrentLive: _ } = Oe(), { joinLive: g, leaveLive: I, subscribeEvent: E, unsubscribeEvent: N } = sn(), { fetchAudienceList: A } = Ae(), { login: x, loginUserInfo: b } = cn(), { hideControlBar: H, showControlBar: $, setAutoHideDelay: U } = ln(), [S, M] = w(!1), [P, z] = w(""), [k, y] = w(!1), [K, p] = w(0), v = j(""), R = j(!1), m = j(null), W = j(null), re = b?.userId || P, F = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, J = j(Jn()).current, C = 5, B = 2e3;
  V(() => {
    if (F) {
      G.info("LiveControlLeftPanel", "Mock mode, skipping TUILogin"), M(!0);
      return;
    }
    if (S) return;
    const o = async () => {
      try {
        let i;
        if (J === "audience" ? (G.info("LiveControlLeftPanel", "Audience mode, creating basic account..."), i = await Ln("audience")) : (G.info("LiveControlLeftPanel", "Admin mode, resolving account..."), i = await mn()), !i || i.sdkAppId === 0) {
          G.warn("LiveControlLeftPanel", "No valid credentials, will retry"), r();
          return;
        }
        z(i.userId), G.info("LiveControlLeftPanel", "TUILogin as:", J, "userId:", i.userId), await x({
          SDKAppID: i.sdkAppId,
          userID: i.userId,
          userSig: i.userSig
        }), G.info("LiveControlLeftPanel", "TUILogin success"), M(!0), p(0);
      } catch (i) {
        i?.code === 2025 || i?.message?.includes("重复登录") ? (G.info("LiveControlLeftPanel", "Already logged in"), M(!0), p(0)) : (G.error("LiveControlLeftPanel", "TUILogin failed:", i), r());
      }
    }, r = () => {
      if (K >= C) {
        G.error("LiveControlLeftPanel", `Login failed after ${C} retries, giving up`);
        return;
      }
      const i = B * (K + 1);
      G.info("LiveControlLeftPanel", `Scheduling login retry #${K + 1} in ${i}ms`), W.current = setTimeout(() => {
        p((D) => D + 1);
      }, i);
    };
    return o(), () => {
      W.current && (clearTimeout(W.current), W.current = null);
    };
  }, [F, S, x, K]), V(() => {
    if (F || !S || !P || J !== "audience") return;
    const o = Re() === "en-US" ? "admin" : "管理员";
    Cn(P, o).catch((r) => {
      G.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", r);
    });
  }, [F, S, P]), V(() => {
    if (c)
      return G.info("LiveControlLeftPanel", "Setting current live:", c), _(c), () => {
        G.info("LiveControlLeftPanel", "Clearing current live"), _(null);
      };
  }, [c, _]);
  const Y = O(async () => {
    if (!(!c || !h || !S)) {
      if (d) {
        G.info("LiveControlLeftPanel", "Live already ended, skipping join");
        return;
      }
      if (v.current === c) {
        G.info("LiveControlLeftPanel", "Already joined live:", c);
        return;
      }
      try {
        G.info("LiveControlLeftPanel", "Joining live:", c, "as:", J);
        const o = Re();
        if (wn.callExperimentalAPI(JSON.stringify({
          api: "setCurrentLanguage",
          params: { language: o === "en-US" ? "en" : o === "zh-CN" ? "zh-Hans" : o }
        })).catch(() => {
        }), await g({ liveId: c }), v.current = c, y(!0), await A().catch((r) => {
          G.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", r);
        }), H(), U(0), !R.current && E) {
          const r = () => {
            G.info("LiveControlLeftPanel", "Live ended event received"), _(null), f?.();
          };
          m.current = r, E(ye.ON_LIVE_ENDED, r), R.current = !0;
        }
        G.info("LiveControlLeftPanel", "Successfully joined live:", c), console.log("[LiveControlLeftPanel] adding live admin:", P, "room:", c), pn(c, P).catch((r) => {
          console.error("[LiveControlLeftPanel] addLiveAdmin failed:", r), G.warn("LiveControlLeftPanel", "addLiveAdmin failed:", r);
        });
      } catch (o) {
        G.error("LiveControlLeftPanel", "Failed to join live:", o);
      }
    }
  }, [c, h, S, g, A, E, J, _, d, f]);
  V(() => {
    Y();
  }, [Y]), V(() => {
    v.current = "", y(!1);
  }, [c]);
  const ne = j(!1);
  V(() => () => {
    if (ne.current = !0, G.info("LiveControlLeftPanel", "Component unmounting, cleaning up"), R.current && N && m.current && (N(ye.ON_LIVE_ENDED, m.current), R.current = !1, m.current = null), v.current) {
      const o = v.current;
      v.current = "", I().catch((r) => {
        G.warn("LiveControlLeftPanel", "leaveLive on unmount failed for", o, r);
      });
    }
    $();
  }, [I, N, $]);
  const ee = le(
    () => t?.anchor.avatarUrl || h?.liveOwner?.avatarUrl || "",
    [t?.anchor.avatarUrl, h?.liveOwner?.avatarUrl]
  ), ae = le(
    () => t?.anchor.nick || h?.liveOwner?.userName || l(n.UNKNOWN_ANCHOR),
    [t?.anchor.nick, h?.liveOwner?.userName, l]
  ), ie = le(
    () => h?.liveType === "Voice",
    [h?.liveType]
  );
  return /* @__PURE__ */ s("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      Wn,
      {
        liveControlSlots: a,
        liveInfo: t,
        currentLive: h,
        liveAnchorAvatar: ee,
        liveAnchorName: ae,
        isVoiceLive: ie,
        isMockMode: F,
        liveEndedOverlayVisible: d || !h && !F,
        t: l
      }
    ),
    /* @__PURE__ */ e(
      Yn,
      {
        liveId: c,
        activeTab: L,
        onActiveTabChange: u,
        disabled: d ?? !1,
        currentUserId: re,
        roomJoined: k
      }
    )
  ] });
}
const Zn = (a, t, c) => {
  const d = Array.from({ length: t }, () => 0);
  return a.forEach((L, u) => {
    const f = u % t;
    d[f] = Math.max(d[f], L);
  }), d.reduce((L, u) => L + u, 0) + c * (t - 1);
}, Qn = (a) => {
  const t = Array.from(a.querySelectorAll(":scope > .stat-bar-item")), c = document.createElement("div");
  c.style.position = "absolute", c.style.left = "-99999px", c.style.top = "0", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = "max-content", document.body.appendChild(c);
  const d = t.map((L) => {
    const u = L.cloneNode(!0);
    return u.style.width = "max-content", u.style.maxWidth = "none", c.appendChild(u), Math.ceil(u.getBoundingClientRect().width);
  });
  return c.remove(), d;
}, et = (a) => {
  if (a.clientWidth <= 0) return;
  const t = Qn(a);
  if (!t.length) return;
  const c = parseFloat(getComputedStyle(a).columnGap) || 0, d = a.clientWidth, L = [7, 4, 3, 2, 1].find((u) => Zn(t, u, c) <= d + 1) || 1;
  a.style.setProperty("--stats-columns", String(L));
}, nt = (a) => a >= 1e4 ? (a / 1e4).toFixed(1) + "w" : a.toLocaleString(), tt = (a, t) => {
  a < 0 && (a = 0);
  const c = Math.floor(a / 86400), d = Math.floor(a % 86400 / 3600), L = Math.floor(a % 3600 / 60), u = a % 60, f = `${d.toString().padStart(2, "0")}:${L.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return c > 0 ? `${c}${t(n.DAYS)} ${f}` : f;
}, rt = (a) => {
  const t = new Date(a), c = String(t.getMonth() + 1).padStart(2, "0"), d = String(t.getDate()).padStart(2, "0"), L = String(t.getHours()).padStart(2, "0"), u = String(t.getMinutes()).padStart(2, "0"), f = String(t.getSeconds()).padStart(2, "0");
  return `${c}-${d} ${L}:${u}:${f}`;
};
function at({
  liveInfo: a,
  audienceCount: t,
  liveDuration: c,
  interactionRate: d,
  updateTimeText: L,
  t: u
}) {
  const f = j(null);
  return V(() => {
    const l = f.current;
    if (!l) return;
    let h = null;
    const _ = () => {
      h !== null && cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        h = null, et(l);
      });
    }, g = new ResizeObserver(_);
    g.observe(l);
    const I = new MutationObserver(_);
    return I.observe(l, { childList: !0, subtree: !0, characterData: !0 }), _(), () => {
      g.disconnect(), I.disconnect(), h !== null && cancelAnimationFrame(h);
    };
  }, []), /* @__PURE__ */ s("div", { className: "sidebar-stats-card", children: [
    /* @__PURE__ */ s("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ s("div", { className: "stats-header-left", children: [
        /* @__PURE__ */ e("h3", { children: u(n.LIVE_DATA_CONTROL) }),
        /* @__PURE__ */ s("span", { className: "live-status-tag", children: [
          /* @__PURE__ */ e("span", { className: "live-status-dot" }),
          u(n.LIVE_NOW),
          /* @__PURE__ */ e("span", { className: "live-duration-text", children: tt(c, u) })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: "update-time", children: u(n.UPDATED_AT, { time: L }) })
    ] }),
    /* @__PURE__ */ s("div", { ref: f, className: "stats-bar-design", children: [
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.CURRENT_VIEWERS),
          /* @__PURE__ */ e(oe, { content: u(n.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: nt(a?.onlineCount ?? t ?? 0) })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.COMMENT_COUNT),
          /* @__PURE__ */ e(oe, { content: u(n.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.commentCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.COMMENT_USERS),
          /* @__PURE__ */ e(oe, { content: u(n.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.viewCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.INTERACTION_RATE),
          /* @__PURE__ */ e(oe, { content: u(n.INTERACTION_RATE_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: d })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.TOTAL_GIFT_AMOUNT),
          /* @__PURE__ */ e(oe, { content: u(n.TOTAL_GIFT_AMOUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftAmount?.toFixed(2) ?? "0.00" })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.GIFT_COUNT),
          /* @__PURE__ */ e(oe, { content: u(n.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftCount ?? 0 })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.GIFT_SENDERS),
          /* @__PURE__ */ e(oe, { content: u(n.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftUserCount ?? 0 })
      ] })
    ] })
  ] });
}
function ot({
  moderationMode: a = "cloud",
  moderationList: t,
  moderationLoading: c,
  moderationPage: d,
  moderationTotal: L,
  moderationTotalPages: u,
  moderationSelectedIds: f,
  isAllOnPageSelected: l,
  customModerationToggleEnabled: h,
  onCustomToggleChange: _,
  updateTimeText: g,
  disabled: I = !1,
  onRefresh: E,
  onPageChange: N,
  onBulkApprove: A,
  onBulkDelete: x,
  onToggleSelectOne: b,
  onToggleSelectAll: H,
  onRelease: $,
  onDelete: U,
  onOpenDropdown: S,
  t: M
}) {
  const P = a === "custom", z = le(
    () => Bn({ hideTypeColumn: P }).map((k) => ({
      ...k,
      title: k.i18nKey ? M(k.i18nKey) : "",
      ...k.key === "check" ? {
        headerRender: () => /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            checked: l,
            disabled: I,
            onChange: H
          }
        )
      } : {},
      render: (() => {
        switch (k.key) {
          case "check":
            return (y) => /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                checked: f.includes(y.id),
                disabled: I,
                onChange: () => b(y.id)
              }
            );
          case "userId":
            return (y) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: y.userId }) });
          case "content":
            return (y) => /* @__PURE__ */ e("span", { title: y.content, children: y.content });
          case "type":
            return (y) => /* @__PURE__ */ e("span", { className: "moderation-type-text", children: M(y.type) });
          case "createdAtMs":
            return (y) => rt(y.createdAtMs);
          case "action":
            return (y) => {
              const K = [
                { key: "approve", label: M(n.APPROVE), onClick: () => $(y) },
                { key: "delete", label: M(n.DELETE), danger: !0, onClick: () => U(y) }
              ];
              return P || K.push({ key: "more", label: M(n.MORE), suffixCaret: !0, onClick: (p) => S(p, y) }), /* @__PURE__ */ e(
                _e,
                {
                  disabled: I,
                  actions: K
                }
              );
            };
          default:
            return;
        }
      })()
    })),
    [M, l, I, f, H, b, $, U, S, P]
  );
  return /* @__PURE__ */ s("div", { className: "moderation-card", children: [
    /* @__PURE__ */ s("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ s("div", { className: "moderation-header-left", children: [
        !P && /* @__PURE__ */ e("h3", { children: M(n.CONTENT_MODERATION) }),
        P && /* @__PURE__ */ s("label", { className: "moderation-toggle-label", style: { display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12 }, children: [
          /* @__PURE__ */ e(
            Be,
            {
              size: "small",
              value: h,
              disabled: I,
              onChange: (k) => _(k)
            }
          ),
          /* @__PURE__ */ e("span", { style: { fontSize: 13 }, children: M(n.CUSTOM_MODERATION_TOGGLE) })
        ] }),
        /* @__PURE__ */ e(
          Q,
          {
            theme: "primary",
            shape: "round",
            onClick: A,
            disabled: I || f.length <= 1,
            icon: /* @__PURE__ */ e(Te, { style: { width: 14, height: 14 } }),
            children: M(n.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          Q,
          {
            theme: "primary",
            shape: "round",
            onClick: x,
            disabled: I || f.length <= 1,
            icon: /* @__PURE__ */ e(Ye, { style: { width: 14, height: 14 } }),
            children: M(n.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: M(n.UPDATED_AT, { time: g }) }),
        /* @__PURE__ */ e(
          Q,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(Je, {}),
            loading: c,
            disabled: I,
            onClick: E,
            children: M(n.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ e(
        Fn,
        {
          columns: z,
          data: t,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: M(n.MODERATION_EMPTY) }) })
        }
      ),
      t.length > 0 && /* @__PURE__ */ s("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: M(n.TOTAL_ITEMS, { count: L, total: L }) }),
        /* @__PURE__ */ s("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: I || d <= 1,
              onClick: () => N(d - 1),
              "aria-label": M(n.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(Xe, { style: { width: 14 } })
            }
          ),
          xn(d, u).map(
            (k, y) => k === "..." ? /* @__PURE__ */ e("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${y}`) : /* @__PURE__ */ e(
              "button",
              {
                className: `page-num ${k === d ? "active" : ""}`,
                disabled: I,
                onClick: () => N(k),
                children: k
              },
              k
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: d >= u,
              onClick: () => N(d + 1),
              "aria-label": M(n.NEXT_PAGE),
              children: /* @__PURE__ */ e(Ze, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const be = Ee("Moderation");
function it(a, t, c, d) {
  const {
    moderationMode: L,
    customModerationToggleEnabled: u,
    updateCustomModerationToggleEnabled: f,
    fetchTextModerationList: l,
    approveTextModerationItems: h,
    bypassCorrectionKeyword: _,
    deleteModerationItems: g
  } = Ve({ liveId: a || "", pageSize: Le }), I = L === "custom", [E, N] = w([]), [A, x] = w(!1), [b, H] = w(1), [$, U] = w(0), [S, M] = w([]), [P, z] = w(null), [k, y] = w(null), K = le(() => Tn($, Le), [$]), p = O(
    async (T = 1) => {
      if (a) {
        x(!0);
        try {
          const o = Math.max(1, T), r = An(d), i = await l({
            pageNum: o,
            pageSize: Le,
            startTime: r,
            violationOnly: !I
            // custom 模式不过滤 violationOnly
          });
          let D = i.list || [];
          if (I) {
            const Z = [...D].sort((X, te) => te.createdAtMs - X.createdAtMs);
            N(Z), U(i.total || 0);
          } else {
            D = await vn(D);
            const Z = await bn(), te = [...Mn(D)].sort((Ce, $e) => $e.createdAtMs - Ce.createdAtMs);
            N(te), U(Math.max(0, (i.total || 0) - Z));
          }
          H(o), M((Z) => fe(Z.filter((X) => D.some((te) => te.id === X))));
        } catch (o) {
          be.error("moderation", `load failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
          const r = ue(o).info || o.message || t(n.UNKNOWN_ERROR);
          q.error(`【${t(n.REFRESH)}${t(n.CONTENT_MODERATION)}】${t(n.OPERATION_FAILED, { error: r })}`);
        } finally {
          x(!1);
        }
      }
    },
    [a, t, l, d, I]
  );
  V(() => {
    a && d != null && p(1);
  }, [a, d]);
  const v = O(async (T = !1) => {
    c || (await p(b), T || q.success(t(n.REFRESHED)));
  }, [p, b, t, c]), R = O(
    (T) => {
      T < 1 || T > K || T === b || p(T);
    },
    [p, b, K]
  ), m = O(
    async (T) => {
      M((r) => r.filter((i) => !T.includes(i))), N((r) => r.filter((i) => !T.includes(i.id))), U((r) => Math.max(0, r - T.length));
      const o = In(
        b,
        $,
        T.length,
        Le
      );
      await p(o);
    },
    [p, b, $]
  ), W = me({
    operationName: t(n.RELEASE_AND_RESEND),
    action: async () => {
      if (!P || !a) throw new Error("liveId is required");
      await h({
        ids: [P.id],
        items: [{ id: P.id, content: P.content, userId: P.userId }],
        liveId: a
      });
    },
    confirm: {
      title: t(n.CONFIRM_ACTION_TITLE, { action: t(n.RELEASE_AND_RESEND) }),
      content: t(n.RELEASE_AND_RESEND_DESCRIPTION)
    },
    showSuccess: !0,
    onSuccess: async () => {
      P && await m([P.id]), z(null);
    }
  }), re = O((T) => {
    if (c) {
      q.warning(t(n.LIVE_ENDED));
      return;
    }
    z(T), W.requestConfirm();
  }, [W, c, t]), F = me({
    operationName: t(n.BYPASS_CORRECTION),
    action: async () => {
      if (!k) throw new Error("No target item");
      await _({ content: k.content });
    },
    confirm: {
      title: t(n.BYPASS_CORRECTION_DIALOG_TITLE),
      content: t(n.BYPASS_CORRECTION_DESCRIPTION)
    },
    showSuccess: !0,
    onSuccess: async () => {
      k && await m([k.id]), y(null);
    }
  }), J = O((T) => {
    if (c) {
      q.warning(t(n.LIVE_ENDED));
      return;
    }
    y(T), F.requestConfirm();
  }, [F, c, t]), C = me({
    operationName: t(n.BULK_APPROVE),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const T = E.filter((i) => S.includes(i.id)).sort((i, D) => i.createdAtMs - D.createdAtMs), o = T.map((i) => i.id), r = T.map((i) => ({ id: i.id, content: i.content, userId: i.userId }));
      await h({ ids: o, items: r, liveId: a });
    },
    confirm: {
      title: t(n.CONFIRM_ACTION_TITLE, { action: t(n.BULK_APPROVE) }),
      content: t(n.BULK_APPROVE_CONFIRM_CONTENT)
    },
    showSuccess: !0,
    onSuccess: async () => {
      const T = [...S];
      await m(T);
    }
  }), B = O(() => {
    if (c) {
      q.warning(t(n.LIVE_ENDED));
      return;
    }
    if (S.length === 0) {
      q.warning(t(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    C.requestConfirm();
  }, [C, S, c, t]), Y = O(
    async (T) => {
      if (c) {
        q.warning(t(n.LIVE_ENDED));
        return;
      }
      try {
        await g([T.id]), q.info(t(n.DELETED)), await m([T.id]);
      } catch (o) {
        be.error("moderation", `delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
        const r = ue(o).info || o.message || t(n.UNKNOWN_ERROR);
        q.error(`【${t(n.DELETE)}${t(n.CONTENT_MODERATION)}】${t(n.OPERATION_FAILED, { error: r })}`);
      }
    },
    [m, t, c]
  ), ne = O(async () => {
    if (c) {
      q.warning(t(n.LIVE_ENDED));
      return;
    }
    if (S.length === 0) {
      q.warning(t(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const T = [...S];
    try {
      await g(T), q.info(t(n.DELETED)), await m(T);
    } catch (o) {
      be.error("moderation", `bulk delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
      const r = ue(o).info || o.message || t(n.UNKNOWN_ERROR);
      q.error(`【${t(n.BULK_DELETE)}${t(n.CONTENT_MODERATION)}】${t(n.OPERATION_FAILED, { error: r })}`);
    }
  }, [S, m, t, c]), ee = O((T) => {
    M((o) => o.includes(T) ? fe(o.filter((r) => r !== T)) : fe([...o, T]));
  }, []), ae = O(() => {
    M((T) => {
      const o = fe(E.map((r) => r.id));
      return T.length >= o.length ? [] : o;
    });
  }, [E]), ie = le(() => {
    const T = fe(E.map((o) => o.id));
    return _n(S, T);
  }, [E, S]);
  return {
    moderationMode: L,
    customModerationToggleEnabled: u,
    updateCustomModerationToggleEnabled: f,
    moderationList: E,
    moderationLoading: A,
    moderationPage: b,
    moderationTotal: $,
    moderationTotalPages: K,
    moderationSelectedIds: S,
    isAllOnPageSelected: ie,
    releaseConfirmDialog: W.confirmDialog,
    bypassConfirmDialog: F.confirmDialog,
    bulkApproveConfirmDialog: C.confirmDialog,
    releaseAction: {
      executeWithConfirm: W.executeWithConfirm,
      cancelConfirm: W.cancelConfirm,
      loading: W.loading
    },
    bypassAction: {
      executeWithConfirm: F.executeWithConfirm,
      cancelConfirm: F.cancelConfirm,
      loading: F.loading
    },
    bulkApproveAction: {
      executeWithConfirm: C.executeWithConfirm,
      cancelConfirm: C.cancelConfirm,
      loading: C.loading
    },
    handleRefreshModeration: v,
    goToModerationPage: R,
    handleRelease: re,
    handleBypassCorrection: J,
    handleDeleteModeration: Y,
    handleBulkApprove: B,
    handleBulkDelete: ne,
    toggleSelectOne: ee,
    toggleSelectAll: ae
  };
}
const he = Ee("LiveControl");
function St() {
  const { liveId: a } = Ge();
  V(() => (he.info("LiveControl", "✅ Component MOUNTED, liveId:", a), () => {
    he.info("LiveControl", "❌ Component UNMOUNTED, liveId:", a);
  }), []);
  const t = ze(), L = He().state?.from === "live-list" ? "/live-list" : "/live-monitor", f = fn().components?.liveControl, { t: l } = Se(), {
    fetchLiveDetail: h,
    fetchLiveStats: _,
    endLive: g
  } = Oe(), { audienceCount: I } = Ae();
  V(() => {
    I > 0 && N((r) => r && { ...r, onlineCount: I });
  }, [I]);
  const [E, N] = w(null), A = le(() => !E || Number(E?.activityStatus) === 2, [E?.activityStatus, E]), [x, b] = w("chat"), [H, $] = w(!0), { successMsg: U, errorMsg: S } = Vn(), M = me({
    operationName: l(n.FORCE_STOP),
    action: async () => {
      if (!E) throw new Error("liveInfo is null");
      return g(E.id || E.liveId);
    },
    confirm: {
      title: l(n.CONFIRM_ACTION_TITLE, { action: l(n.FORCE_STOP) }),
      content: l(n.FORCE_STOP_CONFIRM_CONTENT),
      confirmText: l(n.CONFIRM)
    },
    onSuccess: () => {
      t(L);
    }
  }), P = me({
    operationName: l(n.SEND_VIOLATION_WARNING),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const r = E?.liveName || a;
      await Sn(a, {
        violationType: l(n.VIOLATION_TYPE_WARNING),
        violationContent: l(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: r }),
        handleSuggestion: l(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: l(n.CONFIRM_ACTION_TITLE, { action: l(n.SEND_VIOLATION_WARNING) }),
      content: l(n.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: l(n.CONFIRM)
    },
    errorMessage: l(n.SEND_FAILED),
    showSuccess: !0
  }), z = O(() => {
    N((r) => r && { ...r, activityStatus: 2 });
  }, []), k = () => {
    P.requestConfirm();
  }, y = j(null), [K, p] = w(0), [v, R] = w(null), m = it(a, l, A, E?.createdAt);
  V(() => () => {
    a && he.info("LiveControl", "Component unmounting, liveId:", a);
  }, [a]);
  const W = Rn({
    operationName: l(n.FETCH_LIVE_INFO),
    showError: !1,
    showSuccess: !1,
    action: async () => a ? await h(a) : null,
    errorMessage: l(n.GET_ERROR_MESSAGE),
    onError: () => {
      $(!1);
    },
    onSuccess: (r) => {
      if ($(!1), !r) return;
      const i = r.anchor?.userId, D = On(r, i || "-"), Z = yn(r);
      if (N({
        liveId: r.liveId,
        id: r.liveId,
        liveName: r.liveName || l(n.UNNAMED_LIVE_SHORT),
        coverUrl: r.coverUrl || hn,
        anchor: {
          userId: i || "",
          nick: D,
          avatarUrl: Z
        },
        onlineCount: r.onlineCount || 0,
        createdAt: r.createdAt ?? 0,
        isMessageDisabled: r.isMessageDisabled === !0,
        liveType: r.liveType || "Live",
        isSeatEnabled: r.isSeatEnabled || !1,
        maxSeatCount: r.maxSeatCount || 9,
        maxMemberCount: r.maxMemberCount || 1e3,
        category: r.category || [],
        activityStatus: Number(r.activityStatus ?? 0),
        endedAt: r.endedAt,
        isPublicVisible: r.isPublicVisible !== void 0 ? r.isPublicVisible : !0,
        isLikeEnabled: r.isLikeEnabled !== void 0 ? r.isLikeEnabled : !0,
        stats: r.stats
      }), r.createdAt && Number(r.activityStatus) !== 2) {
        const X = r.createdAt > 1e12 ? r.createdAt : r.createdAt * 1e3;
        if (X > 1e12) {
          const te = Math.floor((Date.now() - X) / 1e3);
          p(te > 0 ? te : 0);
        }
      }
      C();
    }
  }), re = O(async () => {
    await W.execute();
  }, [W.execute]), [F, J] = w(() => {
    const r = /* @__PURE__ */ new Date();
    return `${String(r.getHours()).padStart(2, "0")}:${String(r.getMinutes()).padStart(2, "0")}`;
  }), C = O(() => {
    const r = /* @__PURE__ */ new Date();
    J(`${String(r.getHours()).padStart(2, "0")}:${String(r.getMinutes()).padStart(2, "0")}`);
  }, []), B = O(async () => {
    if (a)
      try {
        const r = await _(a);
        N((i) => i && {
          ...i,
          stats: r
        }), C();
      } catch (r) {
        he.error("LiveControl", "fetchStats failed:", r);
      }
  }, [a, C]), Y = le(() => {
    const r = E?.stats?.viewCount ?? 0, i = E?.stats?.commentCount ?? 0;
    if (r <= 0) return "0%";
    const D = i / r * 100;
    return Math.min(D, 100).toFixed(1) + "%";
  }, [E?.stats?.viewCount, E?.stats?.commentCount]), ne = 30, ee = j(null), ae = j(!0), ie = O(() => {
    t(L);
  }, [t, L]), T = O(() => {
    R(null);
  }, []), o = O((r, i) => {
    r.preventDefault(), r.stopPropagation();
    const D = r.currentTarget.getBoundingClientRect();
    R({
      item: i,
      x: D.right,
      y: D.bottom + 4
    });
  }, []);
  return V(() => {
    const r = E?.createdAt;
    if (!r || r < 1e9 || Number(E?.activityStatus) === 2)
      return;
    const i = r > 1e12 ? r : r * 1e3, D = () => {
      const X = Math.floor((Date.now() - i) / 1e3);
      p(X > 0 ? X : 0);
    };
    D();
    const Z = window.setInterval(D, 1e3);
    return () => {
      window.clearInterval(Z);
    };
  }, [E?.createdAt, E?.activityStatus]), V(() => {
    if (!v) return;
    const r = (i) => {
      y.current && !y.current.contains(i.target) && T();
    };
    return document.addEventListener("mousedown", r), () => document.removeEventListener("mousedown", r);
  }, [T, v]), V(() => {
    if (x !== "audience") return;
    const r = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((X) => {
        const te = X, Ce = te.textContent || "";
        te.title !== Ce && (te.title = Ce);
      });
    };
    r();
    const i = document.querySelector(".audience-list-area");
    if (!i) return;
    const D = new MutationObserver(r);
    return D.observe(i, { childList: !0, subtree: !0 }), () => D.disconnect();
  }, [x]), V(() => {
    if (a)
      return he.info("LiveControl", "Fetching room info for:", a), ae.current = !0, re(), () => {
        ae.current = !1;
      };
  }, [a]), V(() => {
    if (!a || ne === 0 || A) {
      ee.current && (clearInterval(ee.current), ee.current = null);
      return;
    }
    return ee.current = window.setInterval(() => {
      ae.current && (B(), m.moderationMode === "custom" && !m.customModerationToggleEnabled || m.handleRefreshModeration(!0));
    }, ne * 1e3), () => {
      ee.current && (clearInterval(ee.current), ee.current = null);
    };
  }, [a, ne, A, B, m.handleRefreshModeration, m.moderationMode, m.customModerationToggleEnabled]), H ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(Ke, { loading: !0, text: l(n.LOADING) }) }) : /* @__PURE__ */ s("div", { className: "live-control-container", children: [
    /* @__PURE__ */ s("div", { className: "toast-area", children: [
      U && /* @__PURE__ */ e("div", { className: "status-success", children: U }),
      S && /* @__PURE__ */ e("div", { className: "status-error", children: S })
    ] }),
    /* @__PURE__ */ s("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ s("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(Q, { shape: "circle", variant: "outline", className: "back-btn", onClick: ie, title: l(n.BACK_TO_LIST), icon: /* @__PURE__ */ e(Qe, { fill: "transparent", stroke: "currentColor", strokeWidth: 2 }) }),
        /* @__PURE__ */ e("h1", { children: l(n.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ s("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          Q,
          {
            variant: "text",
            theme: "warning",
            icon: /* @__PURE__ */ e(en, { size: 16 }),
            disabled: A,
            onClick: k,
            children: l(n.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(Q, { variant: "text", theme: "danger", disabled: A, onClick: () => M.requestConfirm(), icon: /* @__PURE__ */ e(nn, {}), children: l(n.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ s("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Xn,
        {
          liveControlSlots: f,
          liveInfo: E,
          liveId: a || "",
          initialIsLiveEnded: A,
          activeTab: x,
          onActiveTabChange: b,
          onLiveEnded: z,
          t: l
        }
      ),
      /* @__PURE__ */ s("aside", { className: "right-sidebar", children: [
        /* @__PURE__ */ e(
          at,
          {
            liveInfo: E,
            audienceCount: I,
            liveDuration: K,
            interactionRate: Y,
            updateTimeText: F,
            t: l
          }
        ),
        /* @__PURE__ */ e(We, { slot: f?.customControlPanel, props: { liveInfo: E } }),
        /* @__PURE__ */ e(
          ot,
          {
            moderationMode: m.moderationMode,
            moderationList: m.moderationList,
            moderationLoading: m.moderationLoading,
            moderationPage: m.moderationPage,
            moderationTotal: m.moderationTotal,
            moderationTotalPages: m.moderationTotalPages,
            moderationSelectedIds: m.moderationSelectedIds,
            isAllOnPageSelected: m.isAllOnPageSelected,
            customModerationToggleEnabled: m.customModerationToggleEnabled,
            onCustomToggleChange: m.updateCustomModerationToggleEnabled,
            updateTimeText: F,
            disabled: A,
            onRefresh: async () => {
              await m.handleRefreshModeration(), C();
            },
            onPageChange: m.goToModerationPage,
            onBulkApprove: m.handleBulkApprove,
            onBulkDelete: m.handleBulkDelete,
            onToggleSelectOne: m.toggleSelectOne,
            onToggleSelectAll: m.toggleSelectAll,
            onRelease: m.handleRelease,
            onDelete: m.handleDeleteModeration,
            onOpenDropdown: o,
            t: l
          }
        )
      ] })
    ] }),
    v && m.moderationMode !== "custom" && /* @__PURE__ */ e(
      "div",
      {
        ref: y,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: v.y,
          left: v.x - 160
        },
        children: /* @__PURE__ */ s(
          "button",
          {
            className: "dropdown-item",
            disabled: A,
            onClick: () => {
              const r = v.item;
              T(), m.handleBypassCorrection(r);
            },
            children: [
              /* @__PURE__ */ e(Te, { size: 14 }),
              l(n.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (() => {
      const i = [
        { key: "forceStop", dialog: M.confirmDialog, action: M },
        { key: "violationWarning", dialog: P.confirmDialog, action: P },
        { key: "release", dialog: m.releaseConfirmDialog, action: m.releaseAction },
        ...m.moderationMode !== "custom" ? [
          { key: "bypass", dialog: m.bypassConfirmDialog, action: m.bypassAction }
        ] : [],
        { key: "bulkApprove", dialog: m.bulkApproveConfirmDialog, action: m.bulkApproveAction }
      ].find((D) => !!D.dialog);
      return !i || !i.dialog ? null : /* @__PURE__ */ e(
        Ne,
        {
          visible: !0,
          header: l(i.dialog.title),
          onClose: () => i.action.cancelConfirm(),
          width: ge.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ s(se, { children: [
            /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", disabled: i.action.loading, onClick: () => i.action.cancelConfirm(), children: l(n.CANCEL) }),
            /* @__PURE__ */ e(
              Q,
              {
                shape: "round",
                theme: "primary",
                loading: i.action.loading,
                onClick: () => i.action.executeWithConfirm(),
                children: l(i.dialog.confirmText ?? n.CONFIRM)
              }
            )
          ] }),
          children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: l(i.dialog.content) } })
        }
      );
    })()
  ] });
}
export {
  St as default
};
