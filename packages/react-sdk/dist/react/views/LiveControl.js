import { jsxs as i, jsx as e, Fragment as ie } from "react/jsx-runtime";
import { I as t, p as ze, c as pe, _ as He, D as ge, u as fe, ak as ue, am as Le, ab as Re, b5 as Ke, x as qe, Z as je, a1 as Ye, a as Je, S as Xe } from "../../chunks/shared-state.2k2VlnY1.js";
import Be, { useState as w, useCallback as S, useEffect as V, useRef as j, useMemo as le } from "react";
import { useParams as Ze, useNavigate as Qe, useLocation as et } from "react-router-dom";
import { Dialog as Ee, Tooltip as oe, Button as Q, Tabs as ve, Switch as xe, Loading as tt } from "tdesign-react";
import { CheckCircleIcon as be, ChatOffIcon as Fe, UserCheckedIcon as nt, UserBlockedIcon as Ve, MoreIcon as rt, InfoCircleIcon as de, CloseCircleIcon as at, RefreshIcon as ot, ChevronLeftIcon as st, ChevronRightIcon as it, ArrowLeftIcon as ct, NotificationIcon as lt, StopCircleIcon as dt } from "tdesign-icons-react";
import { useUIKit as ye } from "@tencentcloud/uikit-base-component-react";
import { LiveView as ut, useLiveAudienceState as Ae, BarrageList as mt, BarrageInput as ft, LiveAudienceList as ht, useLiveListState as Nt, useLoginState as gt, useLivePlayerState as Et, LiveListEvent as De } from "tuikit-atomicx-react";
import { bb as pt, b3 as Ie, b5 as we, r as Ct, bh as Ue, D as Lt, bK as Tt, a9 as bt, bz as At, a0 as Te, an as vt, az as Mt, bU as he, aj as It, b6 as _t, bH as Ot, by as yt, bx as St } from "../../chunks/main-layout.B_9sQtkU.js";
import { useRiskControlState as We, useConfirmAction as me, useLiveMonitorState as Se } from "../../react.js";
import { u as Rt, M as q, a as Dt } from "../../chunks/useAsyncAction.DMAyL8UQ.js";
import { S as $e } from "../../chunks/SlotRenderer.BbG5_brN.js";
import { c as wt, C as Ut } from "../../chunks/user-action-dropdown.Dt5BLjy1.js";
import { A as _e } from "../../chunks/AnchorAvatar.D8As4c7u.js";
import { createPortal as kt } from "react-dom";
import { p as Pt, g as Bt, b as xt } from "../../chunks/columns.DRbiWjNO.js";
import { A as Oe, F as Ft } from "../../chunks/ActionButtons.Cfkno1zE.js";
function Vt() {
  const [a, r] = w(""), [c, d] = w(""), L = S((u, m) => {
    u === "success" ? (r(m), setTimeout(() => r(""), 3e3)) : (d(m), setTimeout(() => d(""), 3e3));
  }, []);
  return {
    successMsg: a,
    errorMsg: c,
    showMessage: L
  };
}
function Wt({
  liveControlSlots: a,
  liveInfo: r,
  currentLive: c,
  liveAnchorAvatar: d,
  liveAnchorName: L,
  isVoiceLive: u,
  isMockMode: m,
  liveEndedOverlayVisible: l,
  t: h
}) {
  return /* @__PURE__ */ i("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ e($e, { slot: a?.beforeLiveInfo, props: { liveInfo: r } }),
    /* @__PURE__ */ i("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        _e,
        {
          className: "anchor-avatar",
          src: d,
          name: L,
          title: L
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: l ? h(t.LIVE_ENDED) : c?.liveName || r?.liveName || h(t.LOADING) })
    ] }),
    /* @__PURE__ */ e("div", { className: "video-stage", children: /* @__PURE__ */ i("div", { className: `player-container${u ? " player-container-voice" : ""}`, children: [
      m ? r?.coverUrl ? /* @__PURE__ */ e("div", { className: "mock-cover-preview", children: /* @__PURE__ */ e(
        "img",
        {
          src: r.coverUrl,
          alt: "cover",
          className: "mock-cover-img",
          onError: (_) => {
            _.currentTarget.src = ze;
          }
        }
      ) }) : null : /* @__PURE__ */ e(ut, {}),
      l && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ i("div", { className: "live-state-overlay-content", children: [
        /* @__PURE__ */ e("img", { src: wt, alt: "", className: "live-state-overlay-icon" }),
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
            children: h(t.LIVE_ENDED)
          }
        )
      ] }) })
    ] }) })
  ] });
}
const ke = pe("MessageList"), $t = 12 * 1024, ce = { current: { giftList: [] } }, Gt = Be.memo(
  ({ message: a, style: r }) => {
    const c = a.sender.userId, d = c === ce.current.anchorUserId, L = a.sender.nameCard || a.sender.userName || c;
    let u;
    if (a.messageType === 0)
      u = a.textContent || "";
    else if (a.businessId === "gift" && a.data)
      try {
        const h = JSON.parse(a.data), _ = h.giftName || "", g = h.giftId;
        if (g) {
          const I = ce.current.giftList?.find((E) => E.id === g);
          I?.languageList ? u = He(I.languageList)?.name || _ : u = _;
        } else
          u = _;
      } catch {
        u = a.data || "";
      }
    else
      u = a.data || "";
    const m = Pt(u);
    return /* @__PURE__ */ i(
      "div",
      {
        className: `message-item${d ? " host" : ""}`,
        style: r,
        onClick: (h) => {
          ce.current.onMessageClick?.(h, a);
        },
        children: [
          d && /* @__PURE__ */ e("span", { className: "message-badge", children: ce.current.t?.(t.HOST) || t.HOST }),
          /* @__PURE__ */ i("span", { className: "message-username", children: [
            L,
            ": "
          ] }),
          /* @__PURE__ */ e("span", { className: "message-content", children: m.length > 0 ? m.map((h, _) => h.type === "text" ? /* @__PURE__ */ e("span", { className: "message-text", children: h.text }, `t${_}`) : /* @__PURE__ */ e(
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
  (a, r) => a.message.liveId === r.message.liveId && a.message.sequence === r.message.sequence && a.style === r.style
), zt = ({ liveId: a, anchorUserId: r, onMuteUser: c, onBanUser: d, mutedList: L = [], bannedList: u = [], roomJoined: m }) => {
  const { t: l } = ye(), { audienceList: h, disableSendMessage: _ } = Ae(), { giftList: g, fetchGiftList: I } = Rt();
  V(() => {
    I().catch(() => {
    });
  }, [I]), ce.current.giftList = g;
  const [E, N] = w(!1), [b, x] = w({ top: 0, left: 0 }), [v, H] = w(null), $ = j(null), U = j(null), O = r;
  ce.current.t = l;
  const M = (C) => h?.find((A) => A.userId === C), P = (C) => {
    const A = M(C);
    if (A)
      return A.isMessageDisabled === !0;
    const R = L.find((f) => f.userId === C);
    return R ? R.endTime > Date.now() / 1e3 : !1;
  }, z = (C) => {
    const A = u.find((R) => R.userId === C);
    return A ? A.endTime > Date.now() / 1e3 : !1;
  };
  V(() => {
    if (!E) return;
    const C = (A) => {
      setTimeout(() => {
        U.current && U.current.contains(A.target) || (N(!1), H(null));
      }, 100);
    };
    return document.addEventListener("mousedown", C), () => {
      document.removeEventListener("mousedown", C);
    };
  }, [E]);
  const k = S((C, A) => {
    if (C.stopPropagation(), Number(A.sender.userRole) !== 2 || pt(a || "", A.sender.userId))
      return;
    const f = C.target.closest(".message-item");
    if (!f)
      return;
    const W = f.getBoundingClientRect(), re = W.bottom + 4, F = Math.min(W.left, window.innerWidth - 160);
    x({ top: re, left: Math.max(0, F) }), H(A), N(!0);
  }, [a]);
  V(() => {
    ce.current.anchorUserId = O, ce.current.onMessageClick = k;
  });
  const y = () => {
    if (v && d) {
      const C = v.sender.userId;
      if (O && C === Ie(O)) {
        N(!1), H(null);
        return;
      }
      if (we(C, h)) {
        N(!1), H(null);
        return;
      }
      const A = v.sender.userName || v.sender.nameCard || v.sender.userId, R = z(C);
      d(C, A, R);
    }
    N(!1), H(null);
  }, K = async () => {
    if (!v) return;
    const C = v.sender.userId;
    if (O && C === Ie(O)) {
      N(!1), H(null);
      return;
    }
    if (we(C, h)) {
      N(!1), H(null);
      return;
    }
    const A = v.sender.userName || v.sender.nameCard || v.sender.userId, R = P(C);
    try {
      _ ? (await _({ userId: C, isDisable: !R }), ke.debug("toggleMute", R ? "Unmute successful" : "Mute successful")) : c && c(C, A, R);
    } catch (f) {
      ke.error("general", "SDK mute failed, using fallback method:", f), c && c(C, A, R);
    }
    N(!1), H(null);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: "message-list-container",
      ref: $,
      children: [
        /* @__PURE__ */ e("div", { className: "message-list-scroll-area barrage-list-wrapper", children: /* @__PURE__ */ e(
          mt,
          {
            Message: Gt
          }
        ) }),
        m && /* @__PURE__ */ e(
          ft,
          {
            placeholder: l(t.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
            disabled: !a,
            maxLength: $t,
            autoFocus: !1
          }
        ),
        E && v && kt(
          /* @__PURE__ */ i(
            "div",
            {
              ref: U,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: b.top,
                left: b.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: K, children: P(v.sender.userId) ? /* @__PURE__ */ i(ie, { children: [
                  /* @__PURE__ */ e(be, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(t.UNMUTE) })
                ] }) : /* @__PURE__ */ i(ie, { children: [
                  /* @__PURE__ */ e(Fe, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(t.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: y, children: z(v.sender.userId) ? /* @__PURE__ */ i(ie, { children: [
                  /* @__PURE__ */ e(nt, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(t.UNBAN) })
                ] }) : /* @__PURE__ */ i(ie, { children: [
                  /* @__PURE__ */ e(Ve, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(t.BAN) })
                ] }) })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}, Ht = Be.memo(zt);
function Kt({
  mutedModalVisible: a,
  bannedModalVisible: r,
  mutedList: c,
  bannedList: d,
  memberListLoading: L,
  unmutingUserId: u,
  unbanningUserId: m,
  getUserAvatar: l,
  getUserNameFromCache: h,
  onMutedModalClose: _,
  onBannedModalClose: g,
  onUnmuteFromList: I,
  onUnbanFromList: E,
  t: N
}) {
  return /* @__PURE__ */ i(ie, { children: [
    /* @__PURE__ */ e(
      Ee,
      {
        visible: a,
        header: N(t.MUTED_LIST),
        onClose: _,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", onClick: _, children: N(t.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(t.LOADING) }) : c.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(t.NO_MUTED_MEMBERS) }) : /* @__PURE__ */ i("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ e("th", { children: N(t.USER) }),
            /* @__PURE__ */ e("th", { children: N(t.UNMUTE_TIME) }),
            /* @__PURE__ */ e("th", { children: N(t.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: c.map((b) => {
            const x = h(b.userId), v = u === b.userId;
            return /* @__PURE__ */ i("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ i("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  _e,
                  {
                    className: "member-table-avatar",
                    src: l(b.userId),
                    name: x
                  }
                ),
                /* @__PURE__ */ e(oe, { content: x, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: x }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: b.endTime > 0 ? new Date(b.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: v ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: N(t.UNMUTING) }) : /* @__PURE__ */ e(
                Oe,
                {
                  actions: [
                    {
                      key: "unmute",
                      label: N(t.UNMUTE),
                      onClick: () => I(b.userId, x)
                    }
                  ]
                }
              ) })
            ] }, b.userId);
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ e(
      Ee,
      {
        visible: r,
        header: N(t.BANNED_LIST),
        onClose: g,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", onClick: g, children: N(t.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(t.LOADING) }) : d.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(t.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ i("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ e("th", { children: N(t.USER) }),
            /* @__PURE__ */ e("th", { children: N(t.BAN_LIFT_TIME) }),
            /* @__PURE__ */ e("th", { children: N(t.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: d.map((b) => {
            const x = h(b.userId), v = m === b.userId;
            return /* @__PURE__ */ i("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ i("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  _e,
                  {
                    className: "member-table-avatar",
                    src: l(b.userId),
                    name: x
                  }
                ),
                /* @__PURE__ */ e(oe, { content: x, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: x }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: b.endTime > 0 ? new Date(b.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: v ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: N(t.UNBANNING) }) : /* @__PURE__ */ e(
                Oe,
                {
                  actions: [
                    {
                      key: "unban",
                      label: N(t.UNBAN),
                      onClick: () => E(b.userId, x)
                    }
                  ]
                }
              ) })
            ] }, b.userId);
          }) })
        ] }) })
      }
    )
  ] });
}
const Pe = pe("MemberMgmt");
function qt(a, r, c, d) {
  const { opSuccess: L } = fe(r), {
    mutedList: u,
    bannedList: m,
    fetchMutedList: l,
    fetchBannedList: h,
    muteMember: _,
    unmuteMember: g,
    banMember: I,
    unbanMember: E
  } = We({ liveId: a || "", pageSize: 20 }), [N, b] = w([]), [x, v] = w([]), [H, $] = w(!1), [U, O] = w(null), [M, P] = w(null), z = j(null), k = j(null), [y, K] = w(null), [C, A] = w(null);
  V(() => {
    Array.isArray(u) && b(u);
  }, [u]), V(() => {
    Array.isArray(m) && v(m);
  }, [m]);
  const R = (o, n) => {
    o === "success" ? q.success(n) : q.error(n);
  }, f = S(async (o, n) => {
    try {
      await g({ memberAccounts: [o] }), R("success", L(t.UNMUTE, n)), await l();
    } catch (s) {
      const { code: D, info: Z } = ue(s), X = D ? Le(D, Z) : (s instanceof Error ? s.message : "") || r(t.UNKNOWN_HOST);
      R("error", `【${r(t.UNMUTE)}】${r(t.OPERATION_FAILED, { error: X })}`);
    }
  }, [g, r, l]), W = me({
    operationName: r(t.MUTE),
    action: async () => {
      const o = z.current;
      if (!o) throw new Error("No target");
      await _({ memberAccounts: [o.userId], muteTime: Ct });
    },
    confirm: {
      title: r(t.CONFIRM_ACTION_TITLE, { action: r(t.MUTE) }),
      content: z.current ? r(t.MUTE_CONFIRM_CONTENT, { name: z.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = z.current;
      R("success", L(t.MUTE, o?.userName || "")), await ae(), z.current = null, K(null);
    }
  }), re = S((o, n, s) => {
    if (a) {
      if (d) {
        q.warning(r(t.LIVE_ENDED));
        return;
      }
      Ue(o, c) || (s ? f(o, n) : (z.current = { userId: o, userName: n }, K({ userId: o, userName: n })));
    }
  }, [a, c, f, d, r]), F = S(async (o, n) => {
    try {
      await E({ memberAccounts: [o] }), R("success", L(t.UNBAN, n)), await h();
    } catch (s) {
      const { code: D, info: Z } = ue(s), X = D ? Le(D, Z) : (s instanceof Error ? s.message : "") || r(t.UNKNOWN_HOST);
      R("error", `【${r(t.UNBAN)}】${r(t.OPERATION_FAILED, { error: X })}`);
    }
  }, [E, r, h]), J = me({
    operationName: r(t.BAN),
    action: async () => {
      const o = k.current;
      if (!o) throw new Error("No target");
      await I({ memberAccounts: [o.userId], duration: Lt });
    },
    confirm: {
      title: r(t.CONFIRM_ACTION_TITLE, { action: r(t.BAN) }),
      content: k.current ? r(t.BAN_CONFIRM_CONTENT, { name: k.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = k.current;
      R("success", L(t.BAN, o?.userName || "")), await se(), k.current = null, A(null);
    }
  }), p = S((o, n, s) => {
    if (a) {
      if (d) {
        q.warning(r(t.LIVE_ENDED));
        return;
      }
      Ue(o, c) || (s ? F(o, n) : (k.current = { userId: o, userName: n }, A({ userId: o, userName: n })));
    }
  }, [a, c, F, d, r]), B = j(W);
  B.current = W;
  const Y = j(J);
  Y.current = J, V(() => {
    y && B.current.requestConfirm();
  }, [y]), V(() => {
    C && Y.current.requestConfirm();
  }, [C]);
  const te = S(async (o, n) => {
    if (a) {
      if (d) {
        q.warning(r(t.LIVE_ENDED));
        return;
      }
      if (!U) {
        O(o);
        try {
          await f(o, n || o);
        } finally {
          O(null);
        }
      }
    }
  }, [a, f, d, r, U]), ee = S(async (o, n) => {
    if (a) {
      if (d) {
        q.warning(r(t.LIVE_ENDED));
        return;
      }
      if (!M) {
        P(o);
        try {
          await F(o, n || o);
        } finally {
          P(null);
        }
      }
    }
  }, [a, F, d, r, M]), ae = S(async () => {
    if (a) {
      $(!0);
      try {
        const o = await l();
        b(Array.isArray(o) ? o : []);
      } catch (o) {
        Pe.error("fetchMutedList", "获取禁言列表失败", o);
        const { code: n, info: s } = ue(o), D = n ? Le(n, s) : (o instanceof Error ? o.message : "") || r(t.UNKNOWN_HOST);
        R("error", r(t.FETCH_MUTED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, r, l]), se = S(async () => {
    if (a) {
      $(!0);
      try {
        const o = await h();
        v(Array.isArray(o) ? o : []);
      } catch (o) {
        Pe.error("fetchBannedList", "获取封禁列表失败", o);
        const { code: n, info: s } = ue(o), D = n ? Le(n, s) : (o instanceof Error ? o.message : "") || r(t.UNKNOWN_HOST);
        R("error", r(t.FETCH_BANNED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, r, h]), T = S((o) => N.some((n) => n.userId === o), [N]);
  return {
    mutedList: N,
    bannedList: x,
    memberListLoading: H,
    unmutingUserId: U,
    unbanningUserId: M,
    fetchMutedList: ae,
    fetchBannedList: se,
    handleMuteAudience: re,
    handleBanAudience: p,
    handleUnmuteFromList: te,
    handleUnbanFromList: ee,
    isUserMuted: T,
    muteConfirmDialog: W.confirmDialog,
    banConfirmDialog: J.confirmDialog,
    muteAction: W,
    banAction: J
  };
}
const jt = 160;
function Yt({
  liveId: a,
  activeTab: r,
  onActiveTabChange: c,
  disabled: d,
  currentUserId: L,
  roomJoined: u = !1
}) {
  const { t: m } = ye(), { currentLive: l, updateLive: h } = Se(), _ = l?.liveOwner?.userId || "", g = qt(a, m, _, d), { audienceList: I } = Ae(), E = l?.isMessageDisabled === !0, [N, b] = w(!1), [x, v] = w(!1), H = S((p) => {
    if (!d && p !== E) {
      if (!p) {
        b(!0), h({ liveId: a, isMessageDisabled: !1 }).finally(() => b(!1));
        return;
      }
      v(!0);
    }
  }, [d, E, a, h]), $ = S(() => {
    b(!0), h({ liveId: a, isMessageDisabled: !0 }).then(() => v(!1)).finally(() => b(!1));
  }, [a, h]), [U, O] = w(null), M = j(null), P = S((p, B, Y) => {
    p.stopPropagation();
    const te = p.currentTarget.getBoundingClientRect();
    O({ userId: B, userName: Y, x: te.right, y: te.bottom + 4 });
  }, []), z = S(() => {
    O(null);
  }, []);
  V(() => {
    if (!U) return;
    const p = (B) => {
      M.current && !M.current.contains(B.target) && O(null);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, [U]);
  const [k, y] = w(!1), [K, C] = w(!1), A = j(g.fetchMutedList);
  A.current = g.fetchMutedList;
  const R = j(g.fetchBannedList);
  R.current = g.fetchBannedList;
  const f = S(() => {
    A.current(), y(!0);
  }, []), W = S(() => {
    R.current(), C(!0);
  }, []);
  V(() => {
    r === "audience" && a && (A.current(), R.current());
  }, [r, a]);
  function re(p) {
    const B = I.find((Y) => Y.userId === p);
    if (B && "avatarUrl" in B && typeof B.avatarUrl == "string")
      return B.avatarUrl;
  }
  function F(p) {
    const B = I.find((Y) => Y.userId === p);
    return B?.userName ? B.userName : p;
  }
  function J(p, B) {
    return p ? /* @__PURE__ */ e(
      Ee,
      {
        visible: !0,
        header: m(p.title),
        onClose: () => B.cancelConfirm(),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ i(ie, { children: [
          /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", disabled: B.loading, onClick: () => B.cancelConfirm(), children: m(t.CANCEL) }),
          /* @__PURE__ */ e(
            Q,
            {
              shape: "round",
              theme: "primary",
              loading: B.loading,
              onClick: () => B.executeWithConfirm(),
              children: m(p.confirmText ?? t.CONFIRM)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: m(p.content) } })
      },
      p.title
    ) : null;
  }
  return /* @__PURE__ */ i("div", { className: "left-interaction-card", children: [
    /* @__PURE__ */ i("div", { className: "interaction-tabs-header", children: [
      /* @__PURE__ */ i(
        ve,
        {
          value: r,
          onChange: (p) => c(p),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(ve.TabPanel, { value: "chat", label: m(t.MESSAGE_LIST) }),
            /* @__PURE__ */ e(ve.TabPanel, { value: "audience", label: m(t.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          xe,
          {
            value: E,
            disabled: N || d,
            onChange: (p) => H(!!p)
          }
        ),
        /* @__PURE__ */ e("span", { className: "all-mute-label", children: m(t.ALL_MEMBER_MUTE) })
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "interaction-body", children: [
      /* @__PURE__ */ i(
        "div",
        {
          className: "chat-stream-sidebar",
          style: {
            height: "100%",
            display: r === "chat" ? "flex" : "none",
            flexDirection: "column"
          },
          children: [
            E && /* @__PURE__ */ i("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ e("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ e("span", { children: m(t.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ e(
              Ht,
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
      /* @__PURE__ */ i(
        "div",
        {
          className: "audience-tab-wrapper",
          style: { display: r === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(ht, { height: "99%", children: ({ audience: p }) => {
              if (p.userId === L)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: m(t.ME) });
              const B = Ie(_);
              return p.userRole === 0 || p.userId === B ? null : /* @__PURE__ */ i("div", { className: "audience-row-actions", children: [
                g.isUserMuted(p.userId) && /* @__PURE__ */ e("span", { className: "audience-muted-badge", children: m(t.MUTED) }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: m(t.MORE_ACTIONS),
                    disabled: d,
                    onClick: (Y) => {
                      Y.stopPropagation(), P(
                        Y,
                        p.userId,
                        p.userName || p.userId
                      );
                    },
                    children: /* @__PURE__ */ e(rt, { size: 18 })
                  }
                )
              ] });
            } }) }),
            /* @__PURE__ */ i("div", { className: "audience-bottom-actions", children: [
              /* @__PURE__ */ i("button", { className: "audience-bottom-btn", disabled: d, onClick: f, children: [
                m(t.MUTED_LIST),
                " (",
                g.mutedList.length,
                ")"
              ] }),
              /* @__PURE__ */ i("button", { className: "audience-bottom-btn", disabled: d, onClick: W, children: [
                m(t.BANNED_LIST),
                " (",
                g.bannedList.length,
                ")"
              ] })
            ] })
          ]
        }
      )
    ] }),
    U && /* @__PURE__ */ i(
      "div",
      {
        ref: M,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: U.y,
          left: U.x - jt
        },
        children: [
          /* @__PURE__ */ e("div", { className: "dropdown-header", children: U.userName }),
          /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
          g.isUserMuted(U.userId) ? /* @__PURE__ */ i(
            "button",
            {
              className: "dropdown-item",
              disabled: d,
              onClick: () => {
                g.handleMuteAudience(U.userId, U.userName, !0), z();
              },
              children: [
                /* @__PURE__ */ e(be, { size: 14 }),
                m(t.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ i(
            "button",
            {
              className: "dropdown-item",
              disabled: d,
              onClick: () => {
                g.handleMuteAudience(U.userId, U.userName, !1), z();
              },
              children: [
                /* @__PURE__ */ e(Fe, { size: 14 }),
                m(t.MUTE)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: "dropdown-item danger",
              disabled: d,
              onClick: () => {
                g.handleBanAudience(U.userId, U.userName, !1), z();
              },
              children: [
                /* @__PURE__ */ e(Ve, { size: 14 }),
                m(t.BAN)
              ]
            }
          )
        ]
      }
    ),
    J(g.muteConfirmDialog, g.muteAction),
    J(g.banConfirmDialog, g.banAction),
    x && /* @__PURE__ */ e(
      Ee,
      {
        visible: !0,
        header: m(t.ENABLE_ALL_MEMBER_MUTE),
        onClose: () => v(!1),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ i(ie, { children: [
          /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", onClick: () => v(!1), children: m(t.CANCEL) }),
          /* @__PURE__ */ e(Q, { shape: "round", theme: "primary", loading: N, onClick: $, children: m(t.CONFIRM_ENABLE) })
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: m(t.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT) } })
      }
    ),
    /* @__PURE__ */ e(
      Kt,
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
        onBannedModalClose: () => C(!1),
        onUnmuteFromList: g.handleUnmuteFromList,
        onUnbanFromList: g.handleUnbanFromList,
        t: m
      }
    )
  ] });
}
const G = pe("LiveControl");
function Jt() {
  try {
    if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
      return "admin";
  } catch {
  }
  return "audience";
}
function Xt({
  liveControlSlots: a,
  liveInfo: r,
  liveId: c,
  initialIsLiveEnded: d,
  activeTab: L,
  onActiveTabChange: u,
  onLiveEnded: m,
  t: l
}) {
  const { currentLive: h, setCurrentLive: _ } = Se(), { joinLive: g, leaveLive: I, subscribeEvent: E, unsubscribeEvent: N } = Nt(), { fetchAudienceList: b } = Ae(), { login: x, loginUserInfo: v } = gt(), { hideControlBar: H, showControlBar: $, setAutoHideDelay: U } = Et(), [O, M] = w(!1), [P, z] = w(""), [k, y] = w(!1), [K, C] = w(0), A = j(""), R = j(!1), f = j(null), W = j(null), re = v?.userId || P, F = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, J = j(Jt()).current, p = 5, B = 2e3;
  V(() => {
    if (F) {
      G.debug("LiveControlLeftPanel", "Mock mode, skipping TUILogin"), M(!0), y(!0);
      return;
    }
    if (O) return;
    const o = async () => {
      try {
        let s;
        if (J === "audience" ? (G.debug("LiveControlLeftPanel", "Audience mode, creating basic account..."), s = await At("audience")) : (G.debug("LiveControlLeftPanel", "Admin mode, resolving account..."), s = await Ke()), !s || s.sdkAppId === 0) {
          G.warn("LiveControlLeftPanel", "No valid credentials, will retry"), n();
          return;
        }
        z(s.userId), G.debug("LiveControlLeftPanel", "TUILogin as:", J, "userId:", s.userId), await x({
          SDKAppID: s.sdkAppId,
          userID: s.userId,
          userSig: s.userSig
        }), G.info("LiveControlLeftPanel", "TUILogin success"), M(!0), C(0);
      } catch (s) {
        s?.code === 2025 || s?.message?.includes("重复登录") ? (G.debug("LiveControlLeftPanel", "Already logged in"), M(!0), C(0)) : (G.error("LiveControlLeftPanel", "TUILogin failed:", s), n());
      }
    }, n = () => {
      if (K >= p) {
        G.error("LiveControlLeftPanel", `Login failed after ${p} retries, giving up`);
        return;
      }
      const s = B * (K + 1);
      G.debug("LiveControlLeftPanel", `Scheduling login retry #${K + 1} in ${s}ms`), W.current = setTimeout(() => {
        C((D) => D + 1);
      }, s);
    };
    return o(), () => {
      W.current && (clearTimeout(W.current), W.current = null);
    };
  }, [F, O, x, K]), V(() => {
    if (F || !O || !P || J !== "audience") return;
    const o = Re() === "en-US" ? "admin" : "管理员";
    Tt(P, o).catch((n) => {
      G.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", n);
    });
  }, [F, O, P]), V(() => {
    if (c)
      return G.debug("LiveControlLeftPanel", "Setting current live:", c), _(c), () => {
        G.debug("LiveControlLeftPanel", "Clearing current live"), _(null);
      };
  }, [c, _]);
  const Y = S(async () => {
    if (!(!c || !h || !O)) {
      if (d) {
        G.debug("LiveControlLeftPanel", "Live already ended, skipping join");
        return;
      }
      if (A.current === c) {
        G.debug("LiveControlLeftPanel", "Already joined live:", c);
        return;
      }
      try {
        G.debug("LiveControlLeftPanel", "Joining live:", c, "as:", J);
        const o = Re();
        if (Ut.callExperimentalAPI(JSON.stringify({
          api: "setCurrentLanguage",
          params: { language: o === "en-US" ? "en" : o === "zh-CN" ? "zh-Hans" : o }
        })).catch(() => {
        }), await g({ liveId: c }), A.current = c, y(!0), await b().catch((n) => {
          G.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", n);
        }), H(), U(0), !R.current && E) {
          const n = () => {
            G.info("LiveControlLeftPanel", "Live ended event received"), _(null), m?.();
          };
          f.current = n, E(De.ON_LIVE_ENDED, n), R.current = !0;
        }
        G.info("LiveControlLeftPanel", "Successfully joined live:", c), console.log("[LiveControlLeftPanel] adding live admin:", P, "room:", c), bt(c, P).catch((n) => {
          console.error("[LiveControlLeftPanel] addLiveAdmin failed:", n), G.warn("LiveControlLeftPanel", "addLiveAdmin failed:", n);
        });
      } catch (o) {
        G.error("LiveControlLeftPanel", "Failed to join live:", o);
      }
    }
  }, [c, h, O, g, b, E, J, _, d, m]);
  V(() => {
    Y();
  }, [Y]), V(() => {
    A.current = "", y(!1);
  }, [c]);
  const te = j(!1);
  V(() => () => {
    if (te.current = !0, G.debug("LiveControlLeftPanel", "Component unmounting, cleaning up"), R.current && N && f.current && (N(De.ON_LIVE_ENDED, f.current), R.current = !1, f.current = null), A.current) {
      const o = A.current;
      A.current = "", I().catch((n) => {
        G.warn("LiveControlLeftPanel", "leaveLive on unmount failed for", o, n);
      });
    }
    $();
  }, [I, N, $]);
  const ee = le(
    () => r?.anchor.avatarUrl || h?.liveOwner?.avatarUrl || "",
    [r?.anchor.avatarUrl, h?.liveOwner?.avatarUrl]
  ), ae = le(
    () => r?.anchor.nick || h?.liveOwner?.userName || l(t.UNKNOWN_ANCHOR),
    [r?.anchor.nick, h?.liveOwner?.userName, l]
  ), se = le(
    () => h?.liveType === "Voice",
    [h?.liveType]
  );
  return /* @__PURE__ */ i("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      Wt,
      {
        liveControlSlots: a,
        liveInfo: r,
        currentLive: h,
        liveAnchorAvatar: ee,
        liveAnchorName: ae,
        isVoiceLive: se,
        isMockMode: F,
        liveEndedOverlayVisible: d || !h && !F,
        t: l
      }
    ),
    /* @__PURE__ */ e(
      Yt,
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
const Zt = (a, r, c) => {
  const d = Array.from({ length: r }, () => 0);
  return a.forEach((L, u) => {
    const m = u % r;
    d[m] = Math.max(d[m], L);
  }), d.reduce((L, u) => L + u, 0) + c * (r - 1);
}, Qt = (a) => {
  const r = Array.from(a.querySelectorAll(":scope > .stat-bar-item")), c = document.createElement("div");
  c.style.position = "absolute", c.style.left = "-99999px", c.style.top = "0", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = "max-content", document.body.appendChild(c);
  const d = r.map((L) => {
    const u = L.cloneNode(!0);
    return u.style.width = "max-content", u.style.maxWidth = "none", c.appendChild(u), Math.ceil(u.getBoundingClientRect().width);
  });
  return c.remove(), d;
}, en = (a) => {
  if (a.clientWidth <= 0) return;
  const r = Qt(a);
  if (!r.length) return;
  const c = parseFloat(getComputedStyle(a).columnGap) || 0, d = a.clientWidth, L = [7, 4, 3, 2, 1].find((u) => Zt(r, u, c) <= d + 1) || 1;
  a.style.setProperty("--stats-columns", String(L));
}, tn = (a) => a >= 1e4 ? (a / 1e4).toFixed(1) + "w" : a.toLocaleString(), nn = (a, r) => {
  a < 0 && (a = 0);
  const c = Math.floor(a / 86400), d = Math.floor(a % 86400 / 3600), L = Math.floor(a % 3600 / 60), u = a % 60, m = `${d.toString().padStart(2, "0")}:${L.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return c > 0 ? `${c}${r(t.DAYS)} ${m}` : m;
}, rn = (a) => {
  const r = new Date(a), c = String(r.getMonth() + 1).padStart(2, "0"), d = String(r.getDate()).padStart(2, "0"), L = String(r.getHours()).padStart(2, "0"), u = String(r.getMinutes()).padStart(2, "0"), m = String(r.getSeconds()).padStart(2, "0");
  return `${c}-${d} ${L}:${u}:${m}`;
};
function an({
  liveInfo: a,
  audienceCount: r,
  liveDuration: c,
  interactionRate: d,
  updateTimeText: L,
  t: u
}) {
  const m = j(null);
  return V(() => {
    const l = m.current;
    if (!l) return;
    let h = null;
    const _ = () => {
      h !== null && cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        h = null, en(l);
      });
    }, g = new ResizeObserver(_);
    g.observe(l);
    const I = new MutationObserver(_);
    return I.observe(l, { childList: !0, subtree: !0, characterData: !0 }), _(), () => {
      g.disconnect(), I.disconnect(), h !== null && cancelAnimationFrame(h);
    };
  }, []), /* @__PURE__ */ i("div", { className: "sidebar-stats-card", children: [
    /* @__PURE__ */ i("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ i("div", { className: "stats-header-left", children: [
        /* @__PURE__ */ e("h3", { children: u(t.LIVE_DATA_CONTROL) }),
        /* @__PURE__ */ i("span", { className: "live-status-tag", children: [
          /* @__PURE__ */ e("span", { className: "live-status-dot" }),
          u(t.LIVE_NOW),
          /* @__PURE__ */ e("span", { className: "live-duration-text", children: nn(c, u) })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: "update-time", children: u(t.UPDATED_AT, { time: L }) })
    ] }),
    /* @__PURE__ */ i("div", { ref: m, className: "stats-bar-design", children: [
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.CURRENT_VIEWERS),
          /* @__PURE__ */ e(oe, { content: u(t.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: tn(a?.onlineCount ?? r ?? 0) })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.COMMENT_COUNT),
          /* @__PURE__ */ e(oe, { content: u(t.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.commentCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.COMMENT_USERS),
          /* @__PURE__ */ e(oe, { content: u(t.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.viewCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.INTERACTION_RATE),
          /* @__PURE__ */ e(oe, { content: u(t.INTERACTION_RATE_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: d })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.TOTAL_GIFT_AMOUNT),
          /* @__PURE__ */ e(oe, { content: u(t.TOTAL_GIFT_AMOUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftAmount?.toFixed(2) ?? "0.00" })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.GIFT_COUNT),
          /* @__PURE__ */ e(oe, { content: u(t.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftCount ?? 0 })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          u(t.GIFT_SENDERS),
          /* @__PURE__ */ e(oe, { content: u(t.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftUserCount ?? 0 })
      ] })
    ] })
  ] });
}
function on({
  moderationMode: a = "cloud",
  moderationList: r,
  moderationLoading: c,
  moderationPage: d,
  moderationTotal: L,
  moderationTotalPages: u,
  moderationSelectedIds: m,
  isAllOnPageSelected: l,
  customModerationToggleEnabled: h,
  onCustomToggleChange: _,
  updateTimeText: g,
  disabled: I = !1,
  onRefresh: E,
  onPageChange: N,
  onBulkApprove: b,
  onBulkDelete: x,
  onToggleSelectOne: v,
  onToggleSelectAll: H,
  onRelease: $,
  onDelete: U,
  onOpenDropdown: O,
  t: M
}) {
  const P = a === "custom", z = le(
    () => Bt({ hideTypeColumn: P }).map((k) => ({
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
                checked: m.includes(y.id),
                disabled: I,
                onChange: () => v(y.id)
              }
            );
          case "userId":
            return (y) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: y.userId }) });
          case "content":
            return (y) => /* @__PURE__ */ e("span", { title: y.content, children: y.content });
          case "type":
            return (y) => /* @__PURE__ */ e("span", { className: "moderation-type-text", children: M(y.type) });
          case "createdAtMs":
            return (y) => rn(y.createdAtMs);
          case "action":
            return (y) => {
              const K = [
                { key: "approve", label: M(t.APPROVE), onClick: () => $(y) },
                { key: "delete", label: M(t.DELETE), danger: !0, onClick: () => U(y) }
              ];
              return P || K.push({ key: "more", label: M(t.MORE), suffixCaret: !0, onClick: (C) => O(C, y) }), /* @__PURE__ */ e(
                Oe,
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
    [M, l, I, m, H, v, $, U, O, P]
  );
  return /* @__PURE__ */ i("div", { className: "moderation-card", children: [
    /* @__PURE__ */ i("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ i("div", { className: "moderation-header-left", children: [
        !P && /* @__PURE__ */ e("h3", { children: M(t.CONTENT_MODERATION) }),
        P && /* @__PURE__ */ i("label", { className: "moderation-toggle-label", style: { display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12 }, children: [
          /* @__PURE__ */ e(
            xe,
            {
              size: "small",
              value: h,
              disabled: I,
              onChange: (k) => _(k)
            }
          ),
          /* @__PURE__ */ e("span", { style: { fontSize: 13 }, children: M(t.CUSTOM_MODERATION_TOGGLE) })
        ] }),
        /* @__PURE__ */ e(
          Q,
          {
            theme: "primary",
            shape: "round",
            onClick: b,
            disabled: I || m.length <= 1,
            icon: /* @__PURE__ */ e(be, { style: { width: 14, height: 14 } }),
            children: M(t.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          Q,
          {
            theme: "primary",
            shape: "round",
            onClick: x,
            disabled: I || m.length <= 1,
            icon: /* @__PURE__ */ e(at, { style: { width: 14, height: 14 } }),
            children: M(t.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: M(t.UPDATED_AT, { time: g }) }),
        /* @__PURE__ */ e(
          Q,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(ot, {}),
            loading: c,
            disabled: I,
            onClick: E,
            children: M(t.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ e(
        Ft,
        {
          columns: z,
          data: r,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: M(t.MODERATION_EMPTY) }) })
        }
      ),
      r.length > 0 && /* @__PURE__ */ i("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: M(t.TOTAL_ITEMS, { count: L, total: L }) }),
        /* @__PURE__ */ i("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: I || d <= 1,
              onClick: () => N(d - 1),
              "aria-label": M(t.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(st, { style: { width: 14 } })
            }
          ),
          xt(d, u).map(
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
              "aria-label": M(t.NEXT_PAGE),
              children: /* @__PURE__ */ e(it, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Me = pe("Moderation");
function sn(a, r, c, d) {
  const {
    moderationMode: L,
    customModerationToggleEnabled: u,
    updateCustomModerationToggleEnabled: m,
    fetchTextModerationList: l,
    approveTextModerationItems: h,
    bypassCorrectionKeyword: _,
    deleteModerationItems: g
  } = We({ liveId: a || "", pageSize: Te }), I = L === "custom", [E, N] = w([]), [b, x] = w(!1), [v, H] = w(1), [$, U] = w(0), [O, M] = w([]), [P, z] = w(null), [k, y] = w(null), K = le(() => qe($, Te), [$]), C = S(
    async (T = 1) => {
      if (a) {
        x(!0);
        try {
          const o = Math.max(1, T), n = vt(d), s = await l({
            pageNum: o,
            pageSize: Te,
            startTime: n,
            violationOnly: !I
            // custom 模式不过滤 violationOnly
          });
          let D = s.list || [];
          if (I) {
            const Z = [...D].sort((X, ne) => ne.createdAtMs - X.createdAtMs);
            N(Z), U(s.total || 0);
          } else {
            D = await je(D);
            const Z = await Ye(), ne = [...Mt(D)].sort((Ce, Ge) => Ge.createdAtMs - Ce.createdAtMs);
            N(ne), U(Math.max(0, (s.total || 0) - Z));
          }
          H(o), M((Z) => he(Z.filter((X) => D.some((ne) => ne.id === X))));
        } catch (o) {
          Me.error("moderation", `load failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
          const n = ue(o).info || o.message || r(t.UNKNOWN_ERROR);
          q.error(`【${r(t.REFRESH)}${r(t.CONTENT_MODERATION)}】${r(t.OPERATION_FAILED, { error: n })}`);
        } finally {
          x(!1);
        }
      }
    },
    [a, r, l, d, I]
  );
  V(() => {
    a && d != null && C(1);
  }, [a, d]);
  const A = S(async (T = !1) => {
    c || (await C(v), T || q.success(fe(r).opSuccess(t.REFRESH)));
  }, [C, v, r, c]), R = S(
    (T) => {
      T < 1 || T > K || T === v || C(T);
    },
    [C, v, K]
  ), f = S(
    async (T) => {
      M((n) => n.filter((s) => !T.includes(s))), N((n) => n.filter((s) => !T.includes(s.id))), U((n) => Math.max(0, n - T.length));
      const o = It(
        v,
        $,
        T.length,
        Te
      );
      await C(o);
    },
    [C, v, $]
  ), W = me({
    operationName: r(t.RELEASE_AND_RESEND),
    action: async () => {
      if (!P || !a) throw new Error("liveId is required");
      await h({
        ids: [P.id],
        items: [{ id: P.id, content: P.content, userId: P.userId }],
        liveId: a
      });
    },
    confirm: {
      title: r(t.CONFIRM_ACTION_TITLE, { action: r(t.RELEASE_AND_RESEND) }),
      content: r(t.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      P && await f([P.id]), z(null);
    }
  }), re = S((T) => {
    if (c) {
      q.warning(r(t.LIVE_ENDED));
      return;
    }
    z(T), W.requestConfirm();
  }, [W, c, r]), F = me({
    operationName: r(t.BYPASS_CORRECTION),
    action: async () => {
      if (!k) throw new Error("No target item");
      await _({ content: k.content });
    },
    confirm: {
      title: r(t.BYPASS_CORRECTION_DIALOG_TITLE),
      content: r(t.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      k && await f([k.id]), y(null);
    }
  }), J = S((T) => {
    if (c) {
      q.warning(r(t.LIVE_ENDED));
      return;
    }
    y(T), F.requestConfirm();
  }, [F, c, r]), p = me({
    operationName: r(t.BULK_APPROVE),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const T = E.filter((s) => O.includes(s.id)).sort((s, D) => s.createdAtMs - D.createdAtMs), o = T.map((s) => s.id), n = T.map((s) => ({ id: s.id, content: s.content, userId: s.userId }));
      await h({ ids: o, items: n, liveId: a });
    },
    confirm: {
      title: r(t.CONFIRM_ACTION_TITLE, { action: r(t.BULK_APPROVE) }),
      content: r(t.BULK_APPROVE_CONFIRM_CONTENT)
    },
    onSuccess: async () => {
      const T = [...O];
      await f(T);
    }
  }), B = S(() => {
    if (c) {
      q.warning(r(t.LIVE_ENDED));
      return;
    }
    if (O.length === 0) {
      q.warning(r(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    p.requestConfirm();
  }, [p, O, c, r]), Y = S(
    async (T) => {
      if (c) {
        q.warning(r(t.LIVE_ENDED));
        return;
      }
      try {
        await g([T.id]), q.info(fe(r).opSuccess(t.DELETE)), await f([T.id]);
      } catch (o) {
        Me.error("moderation", `delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
        const n = ue(o).info || o.message || r(t.UNKNOWN_ERROR);
        q.error(`【${r(t.DELETE)}${r(t.CONTENT_MODERATION)}】${fe(r).opFailed(t.DELETE, null, n)}`);
      }
    },
    [f, r, c]
  ), te = S(async () => {
    if (c) {
      q.warning(r(t.LIVE_ENDED));
      return;
    }
    if (O.length === 0) {
      q.warning(r(t.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const T = [...O];
    try {
      await g(T), q.info(fe(r).opSuccess(t.DELETE)), await f(T);
    } catch (o) {
      Me.error("moderation", `bulk delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
      const n = ue(o).info || o.message || r(t.UNKNOWN_ERROR);
      q.error(`【${r(t.BULK_DELETE)}${r(t.CONTENT_MODERATION)}】${r(t.OPERATION_FAILED, { error: n })}`);
    }
  }, [O, f, r, c]), ee = S((T) => {
    M((o) => o.includes(T) ? he(o.filter((n) => n !== T)) : he([...o, T]));
  }, []), ae = S(() => {
    M((T) => {
      const o = he(E.map((n) => n.id));
      return T.length >= o.length ? [] : o;
    });
  }, [E]), se = le(() => {
    const T = he(E.map((o) => o.id));
    return _t(O, T);
  }, [E, O]);
  return {
    moderationMode: L,
    customModerationToggleEnabled: u,
    updateCustomModerationToggleEnabled: m,
    moderationList: E,
    moderationLoading: b,
    moderationPage: v,
    moderationTotal: $,
    moderationTotalPages: K,
    moderationSelectedIds: O,
    isAllOnPageSelected: se,
    releaseConfirmDialog: W.confirmDialog,
    bypassConfirmDialog: F.confirmDialog,
    bulkApproveConfirmDialog: p.confirmDialog,
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
      executeWithConfirm: p.executeWithConfirm,
      cancelConfirm: p.cancelConfirm,
      loading: p.loading
    },
    handleRefreshModeration: A,
    goToModerationPage: R,
    handleRelease: re,
    handleBypassCorrection: J,
    handleDeleteModeration: Y,
    handleBulkApprove: B,
    handleBulkDelete: te,
    toggleSelectOne: ee,
    toggleSelectAll: ae
  };
}
const Ne = pe("LiveControl");
function Mn() {
  const { liveId: a } = Ze();
  V(() => (Ne.debug("LiveControl", "✅ Component MOUNTED, liveId:", a), () => {
    Ne.debug("LiveControl", "❌ Component UNMOUNTED, liveId:", a);
  }), []);
  const r = Qe(), L = et().state?.from === "live-list" ? "/live-list" : "/live-monitor", m = Je().components?.liveControl, { t: l } = ye(), {
    fetchLiveDetail: h,
    fetchLiveStats: _,
    endLive: g
  } = Se(), { audienceCount: I } = Ae();
  V(() => {
    I > 0 && N((n) => n && { ...n, onlineCount: I });
  }, [I]);
  const [E, N] = w(null), b = le(() => !E || Number(E?.activityStatus) === 2, [E?.activityStatus, E]), [x, v] = w("chat"), [H, $] = w(!0), { successMsg: U, errorMsg: O } = Vt(), M = me({
    operationName: l(t.FORCE_STOP),
    action: async () => {
      if (!E) throw new Error("liveInfo is null");
      return g(E.id || E.liveId);
    },
    confirm: {
      title: l(t.CONFIRM_ACTION_TITLE, { action: l(t.FORCE_STOP) }),
      content: l(t.FORCE_STOP_CONFIRM_CONTENT),
      confirmText: l(t.CONFIRM)
    },
    onSuccess: () => {
      r(L);
    }
  }), P = me({
    operationName: l(t.SEND_VIOLATION_WARNING),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const n = E?.liveName || a;
      await Ot(a, {
        violationType: l(t.VIOLATION_TYPE_WARNING),
        violationContent: l(t.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: n }),
        handleSuggestion: l(t.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: l(t.CONFIRM_ACTION_TITLE, { action: l(t.SEND_VIOLATION_WARNING) }),
      content: l(t.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: l(t.CONFIRM)
    },
    errorMessage: fe(l).opFailed(t.OP_SEND)
  }), z = S(() => {
    N((n) => n && { ...n, activityStatus: 2 });
  }, []), k = () => {
    P.requestConfirm();
  }, y = j(null), [K, C] = w(0), [A, R] = w(null), f = sn(a, l, b, E?.createdAt);
  V(() => () => {
    a && Ne.info("LiveControl", "Component unmounting, liveId:", a);
  }, [a]);
  const W = Dt({
    showError: !1,
    action: async () => a ? await h(a) : null,
    errorMessage: l(t.GET_ERROR_MESSAGE),
    onError: () => {
      $(!1);
    },
    onSuccess: (n) => {
      if ($(!1), !n) return;
      const s = n.anchor?.userId, D = yt(n, s || "-"), Z = St(n);
      if (N({
        liveId: n.liveId,
        id: n.liveId,
        liveName: n.liveName || l(t.UNNAMED_LIVE_SHORT),
        coverUrl: n.coverUrl || Xe,
        anchor: {
          userId: s || "",
          nick: D,
          avatarUrl: Z
        },
        onlineCount: n.onlineCount || 0,
        createdAt: n.createdAt ?? 0,
        isMessageDisabled: n.isMessageDisabled === !0,
        liveType: n.liveType || "Live",
        isSeatEnabled: n.isSeatEnabled || !1,
        maxSeatCount: n.maxSeatCount || 9,
        maxMemberCount: n.maxMemberCount || 1e3,
        category: n.category || [],
        activityStatus: Number(n.activityStatus ?? 0),
        endedAt: n.endedAt,
        isPublicVisible: n.isPublicVisible !== void 0 ? n.isPublicVisible : !0,
        isLikeEnabled: n.isLikeEnabled !== void 0 ? n.isLikeEnabled : !0,
        stats: n.stats
      }), n.createdAt && Number(n.activityStatus) !== 2) {
        const X = n.createdAt > 1e12 ? n.createdAt : n.createdAt * 1e3;
        if (X > 1e12) {
          const ne = Math.floor((Date.now() - X) / 1e3);
          C(ne > 0 ? ne : 0);
        }
      }
      p();
    }
  }), re = S(async () => {
    await W.execute();
  }, [W.execute]), [F, J] = w(() => {
    const n = /* @__PURE__ */ new Date();
    return `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}`;
  }), p = S(() => {
    const n = /* @__PURE__ */ new Date();
    J(`${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}`);
  }, []), B = S(async () => {
    if (a)
      try {
        const n = await _(a);
        N((s) => s && {
          ...s,
          stats: n
        }), p();
      } catch (n) {
        Ne.error("LiveControl", "fetchStats failed:", n);
      }
  }, [a, p]), Y = le(() => {
    const n = E?.stats?.viewCount ?? 0, s = E?.stats?.commentCount ?? 0;
    if (n <= 0) return "0%";
    const D = s / n * 100;
    return Math.min(D, 100).toFixed(1) + "%";
  }, [E?.stats?.viewCount, E?.stats?.commentCount]), te = 30, ee = j(null), ae = j(!0), se = S(() => {
    r(L);
  }, [r, L]), T = S(() => {
    R(null);
  }, []), o = S((n, s) => {
    n.preventDefault(), n.stopPropagation();
    const D = n.currentTarget.getBoundingClientRect();
    R({
      item: s,
      x: D.right,
      y: D.bottom + 4
    });
  }, []);
  return V(() => {
    const n = E?.createdAt;
    if (!n || n < 1e9 || Number(E?.activityStatus) === 2)
      return;
    const s = n > 1e12 ? n : n * 1e3, D = () => {
      const X = Math.floor((Date.now() - s) / 1e3);
      C(X > 0 ? X : 0);
    };
    D();
    const Z = window.setInterval(D, 1e3);
    return () => {
      window.clearInterval(Z);
    };
  }, [E?.createdAt, E?.activityStatus]), V(() => {
    if (!A) return;
    const n = (s) => {
      y.current && !y.current.contains(s.target) && T();
    };
    return document.addEventListener("mousedown", n), () => document.removeEventListener("mousedown", n);
  }, [T, A]), V(() => {
    if (x !== "audience") return;
    const n = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((X) => {
        const ne = X, Ce = ne.textContent || "";
        ne.title !== Ce && (ne.title = Ce);
      });
    };
    n();
    const s = document.querySelector(".audience-list-area");
    if (!s) return;
    const D = new MutationObserver(n);
    return D.observe(s, { childList: !0, subtree: !0 }), () => D.disconnect();
  }, [x]), V(() => {
    if (a)
      return Ne.info("LiveControl", "Fetching room info for:", a), ae.current = !0, re(), () => {
        ae.current = !1;
      };
  }, [a]), V(() => {
    if (!a || te === 0 || b) {
      ee.current && (clearInterval(ee.current), ee.current = null);
      return;
    }
    return ee.current = window.setInterval(() => {
      ae.current && (B(), f.moderationMode === "custom" && !f.customModerationToggleEnabled || f.handleRefreshModeration(!0));
    }, te * 1e3), () => {
      ee.current && (clearInterval(ee.current), ee.current = null);
    };
  }, [a, te, b, B, f.handleRefreshModeration, f.moderationMode, f.customModerationToggleEnabled]), H ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(tt, { loading: !0, text: l(t.LOADING) }) }) : /* @__PURE__ */ i("div", { className: "live-control-container", children: [
    /* @__PURE__ */ i("div", { className: "toast-area", children: [
      U && /* @__PURE__ */ e("div", { className: "status-success", children: U }),
      O && /* @__PURE__ */ e("div", { className: "status-error", children: O })
    ] }),
    /* @__PURE__ */ i("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ i("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(Q, { shape: "circle", variant: "outline", className: "back-btn", onClick: se, title: l(t.BACK_TO_LIST), icon: /* @__PURE__ */ e(ct, { fill: "transparent", stroke: "currentColor", strokeWidth: 2 }) }),
        /* @__PURE__ */ e("h1", { children: l(t.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ i("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          Q,
          {
            variant: "text",
            theme: "warning",
            icon: /* @__PURE__ */ e(lt, { size: 16 }),
            disabled: b,
            onClick: k,
            children: l(t.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(Q, { variant: "text", theme: "danger", disabled: b, onClick: () => M.requestConfirm(), icon: /* @__PURE__ */ e(dt, {}), children: l(t.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ i("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Xt,
        {
          liveControlSlots: m,
          liveInfo: E,
          liveId: a || "",
          initialIsLiveEnded: b,
          activeTab: x,
          onActiveTabChange: v,
          onLiveEnded: z,
          t: l
        }
      ),
      /* @__PURE__ */ i("aside", { className: "right-sidebar", children: [
        /* @__PURE__ */ e(
          an,
          {
            liveInfo: E,
            audienceCount: I,
            liveDuration: K,
            interactionRate: Y,
            updateTimeText: F,
            t: l
          }
        ),
        /* @__PURE__ */ e($e, { slot: m?.customControlPanel, props: { liveInfo: E } }),
        /* @__PURE__ */ e(
          on,
          {
            moderationMode: f.moderationMode,
            moderationList: f.moderationList,
            moderationLoading: f.moderationLoading,
            moderationPage: f.moderationPage,
            moderationTotal: f.moderationTotal,
            moderationTotalPages: f.moderationTotalPages,
            moderationSelectedIds: f.moderationSelectedIds,
            isAllOnPageSelected: f.isAllOnPageSelected,
            customModerationToggleEnabled: f.customModerationToggleEnabled,
            onCustomToggleChange: f.updateCustomModerationToggleEnabled,
            updateTimeText: F,
            disabled: b,
            onRefresh: async () => {
              await f.handleRefreshModeration(), p();
            },
            onPageChange: f.goToModerationPage,
            onBulkApprove: f.handleBulkApprove,
            onBulkDelete: f.handleBulkDelete,
            onToggleSelectOne: f.toggleSelectOne,
            onToggleSelectAll: f.toggleSelectAll,
            onRelease: f.handleRelease,
            onDelete: f.handleDeleteModeration,
            onOpenDropdown: o,
            t: l
          }
        )
      ] })
    ] }),
    A && f.moderationMode !== "custom" && /* @__PURE__ */ e(
      "div",
      {
        ref: y,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: A.y,
          left: A.x - 160
        },
        children: /* @__PURE__ */ i(
          "button",
          {
            className: "dropdown-item",
            disabled: b,
            onClick: () => {
              const n = A.item;
              T(), f.handleBypassCorrection(n);
            },
            children: [
              /* @__PURE__ */ e(be, { size: 14 }),
              l(t.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (() => {
      const s = [
        { key: "forceStop", dialog: M.confirmDialog, action: M },
        { key: "violationWarning", dialog: P.confirmDialog, action: P },
        { key: "release", dialog: f.releaseConfirmDialog, action: f.releaseAction },
        ...f.moderationMode !== "custom" ? [
          { key: "bypass", dialog: f.bypassConfirmDialog, action: f.bypassAction }
        ] : [],
        { key: "bulkApprove", dialog: f.bulkApproveConfirmDialog, action: f.bulkApproveAction }
      ].find((D) => !!D.dialog);
      return !s || !s.dialog ? null : /* @__PURE__ */ e(
        Ee,
        {
          visible: !0,
          header: l(s.dialog.title),
          onClose: () => s.action.cancelConfirm(),
          width: ge.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ i(ie, { children: [
            /* @__PURE__ */ e(Q, { shape: "round", variant: "outline", disabled: s.action.loading, onClick: () => s.action.cancelConfirm(), children: l(t.CANCEL) }),
            /* @__PURE__ */ e(
              Q,
              {
                shape: "round",
                theme: "primary",
                loading: s.action.loading,
                onClick: () => s.action.executeWithConfirm(),
                children: l(s.dialog.confirmText ?? t.CONFIRM)
              }
            )
          ] }),
          children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: l(s.dialog.content) } })
        }
      );
    })()
  ] });
}
export {
  Mn as default
};
