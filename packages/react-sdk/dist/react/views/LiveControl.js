import { jsxs as s, jsx as e, Fragment as se } from "react/jsx-runtime";
import { I as n, p as Ge, c as Ee, a0 as He, v as ue, D as ge, am as me, ao as Le, ad as De, b9 as Ke, y as qe, $ as Ye, a3 as je, a as Je, V as Xe } from "../../chunks/shared-state.CEzqGWS1.js";
import Pe, { useState as R, useCallback as y, useEffect as F, useRef as J, useMemo as le } from "react";
import { useParams as Ze, useNavigate as Qe, useLocation as en } from "react-router-dom";
import { Dialog as pe, Tooltip as oe, Button as ee, Tabs as Me, Switch as Be, Loading as nn } from "tdesign-react";
import { FileCopyIcon as tn, CheckCircleIcon as ve, ChatOffIcon as xe, UserCheckedIcon as rn, UserBlockedIcon as Fe, MoreIcon as an, InfoCircleIcon as de, CloseCircleIcon as on, RefreshIcon as sn, ChevronLeftIcon as cn, ChevronRightIcon as ln, ArrowLeftIcon as dn, NotificationIcon as un, StopCircleIcon as mn } from "tdesign-icons-react";
import { useUIKit as Se } from "@tencentcloud/uikit-base-component-react";
import { LiveView as fn, useLiveAudienceState as Ae, BarrageList as hn, BarrageInput as Nn, LiveAudienceList as gn, useLiveListState as pn, useLoginState as En, useLivePlayerState as Cn, LiveListEvent as Re } from "tuikit-atomicx-react";
import { aq as Ln, bb as Tn, b5 as bn, b3 as Ve, r as vn, bh as Ue, D as An, bK as Mn, a9 as In, bz as _n, a0 as Te, an as On, az as yn, bU as he, aj as Sn, b6 as wn, bH as Dn, by as Rn, bx as Un } from "../../chunks/main-layout.DlXjtEAo.js";
import { useRiskControlState as We, useConfirmAction as fe, useLiveMonitorState as we } from "../../react.js";
import { u as kn, M as K, a as Pn } from "../../chunks/useAsyncAction.Cvl9CySV.js";
import { S as $e } from "../../chunks/SlotRenderer.C_MQN-Nv.js";
import { c as Bn, C as xn } from "../../chunks/user-action-dropdown.CfGEADc8.js";
import { A as Oe } from "../../chunks/AnchorAvatar.dijA4ymO.js";
import { createPortal as Fn } from "react-dom";
import { r as be, p as Vn, g as Wn, b as $n } from "../../chunks/columns.Cv77hox7.js";
import { A as ye, F as zn } from "../../chunks/ActionButtons.Cfkno1zE.js";
function Gn() {
  const [a, r] = R(""), [l, u] = R(""), L = y((m, f) => {
    m === "success" ? (r(f), setTimeout(() => r(""), 3e3)) : (u(f), setTimeout(() => u(""), 3e3));
  }, []);
  return {
    successMsg: a,
    errorMsg: l,
    showMessage: L
  };
}
function Hn({
  liveControlSlots: a,
  liveInfo: r,
  currentLive: l,
  liveAnchorAvatar: u,
  liveAnchorName: L,
  isVoiceLive: m,
  isMockMode: f,
  liveEndedOverlayVisible: d,
  t: h
}) {
  return /* @__PURE__ */ s("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ e($e, { slot: a?.beforeLiveInfo, props: { liveInfo: r } }),
    /* @__PURE__ */ s("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        Oe,
        {
          className: "anchor-avatar",
          src: u,
          name: L,
          title: L
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: d ? h(n.LIVE_ENDED) : l?.liveName || r?.liveName || h(n.LOADING) })
    ] }),
    /* @__PURE__ */ e("div", { className: "video-stage", children: /* @__PURE__ */ s("div", { className: `player-container${m ? " player-container-voice" : ""}`, children: [
      f ? r?.coverUrl ? /* @__PURE__ */ e("div", { className: "mock-cover-preview", children: /* @__PURE__ */ e(
        "img",
        {
          src: r.coverUrl,
          alt: "cover",
          className: "mock-cover-img",
          onError: (_) => {
            _.currentTarget.src = Ge;
          }
        }
      ) }) : null : /* @__PURE__ */ e(fn, {}),
      d && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ s("div", { className: "live-state-overlay-content", children: [
        /* @__PURE__ */ e("img", { src: Bn, alt: "", className: "live-state-overlay-icon" }),
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
const Ie = Ee("MessageList"), Kn = 12 * 1024, ce = { current: { giftList: [] } }, qn = Pe.memo(
  ({ message: a, style: r }) => {
    const l = a.sender.userId, u = l === ce.current.anchorUserId, L = be(a.sender) || l;
    let m;
    if (a.messageType === 0)
      m = a.textContent || "";
    else if (a.businessId === "gift" && a.data)
      try {
        const h = JSON.parse(a.data), _ = h.giftName || "", N = h.giftId;
        if (N) {
          const M = ce.current.giftList?.find((g) => g.id === N);
          M?.languageList ? m = He(M.languageList)?.name || _ : m = _;
        } else
          m = _;
      } catch {
        m = a.data || "";
      }
    else
      m = a.data || "";
    const f = Vn(m);
    return /* @__PURE__ */ s(
      "div",
      {
        className: `message-item${u ? " host" : ""}`,
        style: r,
        onClick: (h) => {
          ce.current.onMessageClick?.(h, a);
        },
        children: [
          u && /* @__PURE__ */ e("span", { className: "message-badge", children: ce.current.t?.(n.HOST) || n.HOST }),
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
          )) : /* @__PURE__ */ e("span", { className: "message-text", children: m }) })
        ]
      }
    );
  },
  (a, r) => a.message.liveId === r.message.liveId && a.message.sequence === r.message.sequence && a.style === r.style
), Yn = ({ liveId: a, anchorUserId: r, onMuteUser: l, onBanUser: u, mutedList: L = [], bannedList: m = [], roomJoined: f }) => {
  const { t: d } = Se(), { audienceList: h, disableSendMessage: _ } = Ae(), { giftList: N, fetchGiftList: M } = kn();
  F(() => {
    M().catch(() => {
    });
  }, [M]), ce.current.giftList = N;
  const [g, p] = R(!1), [v, x] = R({ top: 0, left: 0 }), [T, Y] = R(null), $ = J(null), U = J(null), w = r;
  ce.current.t = d;
  const A = (E) => h?.find((c) => c.userId === E), k = (E) => {
    const c = A(E);
    if (c)
      return c.isMessageDisabled === !0;
    const I = L.find((H) => H.userId === E);
    return I ? I.endTime > Date.now() / 1e3 : !1;
  }, G = (E) => {
    const c = m.find((I) => I.userId === E);
    return c ? c.endTime > Date.now() / 1e3 : !1;
  };
  F(() => {
    if (!g) return;
    const E = (c) => {
      setTimeout(() => {
        U.current && U.current.contains(c.target) || (p(!1), Y(null));
      }, 100);
    };
    return document.addEventListener("mousedown", E), () => {
      document.removeEventListener("mousedown", E);
    };
  }, [g]);
  const S = (E) => {
    const c = E.sender.userId;
    return !(Number(E.sender.userRole) !== 2 || Tn(a || "", c) || bn(c, h) || w && c === Ve(w));
  }, O = async () => {
    if (!T) return;
    const E = T.sender.userId, { opSuccess: c, opFailed: I } = ue(d);
    try {
      await Ln(E), K.success(c(n.COPY, E));
    } catch (H) {
      const B = H instanceof Error ? H.message : String(H);
      Ie.error("copyUserId", `copy failed (${B})`, H), K.error(I(n.COPY, null, B));
    }
    p(!1), Y(null);
  }, q = y((E, c) => {
    E.stopPropagation();
    const I = E.target.closest(".message-item");
    if (!I)
      return;
    const H = I.getBoundingClientRect(), B = H.bottom + 4, j = Math.min(H.left, window.innerWidth - 160);
    x({ top: B, left: Math.max(0, j) }), Y(c), p(!0);
  }, []);
  F(() => {
    ce.current.anchorUserId = w, ce.current.onMessageClick = q;
  });
  const V = () => {
    if (T && u && S(T)) {
      const E = T.sender.userId, c = be(T.sender), I = G(E);
      u(E, c, I);
    }
    p(!1), Y(null);
  }, W = async () => {
    if (!T || !S(T)) {
      p(!1), Y(null);
      return;
    }
    const E = T.sender.userId, c = be(T.sender), I = k(E);
    try {
      _ ? (await _({ userId: E, isDisable: !I }), Ie.debug("toggleMute", I ? "Unmute successful" : "Mute successful")) : l && l(E, c, I);
    } catch (H) {
      Ie.error("general", "SDK mute failed, using fallback method:", H), l && l(E, c, I);
    }
    p(!1), Y(null);
  };
  return /* @__PURE__ */ s(
    "div",
    {
      className: "message-list-container",
      ref: $,
      children: [
        /* @__PURE__ */ e("div", { className: "message-list-scroll-area barrage-list-wrapper", children: /* @__PURE__ */ e(
          hn,
          {
            Message: qn
          }
        ) }),
        f && /* @__PURE__ */ e(
          Nn,
          {
            placeholder: d(n.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
            disabled: !a,
            maxLength: Kn,
            autoFocus: !1
          }
        ),
        g && T && Fn(
          /* @__PURE__ */ s(
            "div",
            {
              ref: U,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: v.top,
                left: v.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ s("div", { className: "dropdown-header", children: [
                  /* @__PURE__ */ e("div", { className: "dropdown-header-name", children: be(T.sender) }),
                  /* @__PURE__ */ s("div", { className: "dropdown-header-id", children: [
                    /* @__PURE__ */ e("span", { className: "dropdown-header-id-label", children: "ID:" }),
                    /* @__PURE__ */ e("span", { className: "dropdown-header-id-value", children: T.sender.userId })
                  ] })
                ] }),
                /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
                /* @__PURE__ */ s("button", { className: "dropdown-item", onClick: O, children: [
                  /* @__PURE__ */ e(tn, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: d(n.COPY_ID) })
                ] }),
                S(T) && /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
                  /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: W, children: k(T.sender.userId) ? /* @__PURE__ */ s(se, { children: [
                    /* @__PURE__ */ e(ve, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: d(n.UNMUTE) })
                  ] }) : /* @__PURE__ */ s(se, { children: [
                    /* @__PURE__ */ e(xe, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: d(n.MUTE) })
                  ] }) }),
                  /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: V, children: G(T.sender.userId) ? /* @__PURE__ */ s(se, { children: [
                    /* @__PURE__ */ e(rn, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: d(n.UNBAN) })
                  ] }) : /* @__PURE__ */ s(se, { children: [
                    /* @__PURE__ */ e(Fe, { size: 14 }),
                    /* @__PURE__ */ e("span", { children: d(n.BAN) })
                  ] }) })
                ] })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}, jn = Pe.memo(Yn);
function Jn({
  mutedModalVisible: a,
  bannedModalVisible: r,
  mutedList: l,
  bannedList: u,
  memberListLoading: L,
  unmutingUserId: m,
  unbanningUserId: f,
  getUserAvatar: d,
  getUserNameFromCache: h,
  onMutedModalClose: _,
  onBannedModalClose: N,
  onUnmuteFromList: M,
  onUnbanFromList: g,
  t: p
}) {
  return /* @__PURE__ */ s(se, { children: [
    /* @__PURE__ */ e(
      pe,
      {
        visible: a,
        header: p(n.MUTED_LIST),
        onClose: _,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(ee, { shape: "round", variant: "outline", onClick: _, children: p(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: p(n.LOADING) }) : l.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: p(n.NO_MUTED_MEMBERS) }) : /* @__PURE__ */ s("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ e("th", { children: p(n.USER) }),
            /* @__PURE__ */ e("th", { children: p(n.UNMUTE_TIME) }),
            /* @__PURE__ */ e("th", { children: p(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: l.map((v) => {
            const x = h(v.userId), T = m === v.userId;
            return /* @__PURE__ */ s("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ s("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  Oe,
                  {
                    className: "member-table-avatar",
                    src: d(v.userId),
                    name: x
                  }
                ),
                /* @__PURE__ */ e(oe, { content: x, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: x }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: v.endTime > 0 ? new Date(v.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: T ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: p(n.UNMUTING) }) : /* @__PURE__ */ e(
                ye,
                {
                  actions: [
                    {
                      key: "unmute",
                      label: p(n.UNMUTE),
                      onClick: () => M(v.userId, x)
                    }
                  ]
                }
              ) })
            ] }, v.userId);
          }) })
        ] }) })
      }
    ),
    /* @__PURE__ */ e(
      pe,
      {
        visible: r,
        header: p(n.BANNED_LIST),
        onClose: N,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(ee, { shape: "round", variant: "outline", onClick: N, children: p(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: p(n.LOADING) }) : u.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: p(n.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ s("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ e("th", { children: p(n.USER) }),
            /* @__PURE__ */ e("th", { children: p(n.BAN_LIFT_TIME) }),
            /* @__PURE__ */ e("th", { children: p(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: u.map((v) => {
            const x = h(v.userId), T = f === v.userId;
            return /* @__PURE__ */ s("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ s("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  Oe,
                  {
                    className: "member-table-avatar",
                    src: d(v.userId),
                    name: x
                  }
                ),
                /* @__PURE__ */ e(oe, { content: x, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: x }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: v.endTime > 0 ? new Date(v.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: T ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: p(n.UNBANNING) }) : /* @__PURE__ */ e(
                ye,
                {
                  actions: [
                    {
                      key: "unban",
                      label: p(n.UNBAN),
                      onClick: () => g(v.userId, x)
                    }
                  ]
                }
              ) })
            ] }, v.userId);
          }) })
        ] }) })
      }
    )
  ] });
}
const ke = Ee("MemberMgmt");
function Xn(a, r, l, u) {
  const { opSuccess: L } = ue(r), {
    mutedList: m,
    bannedList: f,
    fetchMutedList: d,
    fetchBannedList: h,
    muteMember: _,
    unmuteMember: N,
    banMember: M,
    unbanMember: g
  } = We({ liveId: a || "", pageSize: 20 }), [p, v] = R([]), [x, T] = R([]), [Y, $] = R(!1), [U, w] = R(null), [A, k] = R(null), G = J(null), S = J(null), [O, q] = R(null), [V, W] = R(null);
  F(() => {
    Array.isArray(m) && v(m);
  }, [m]), F(() => {
    Array.isArray(f) && T(f);
  }, [f]);
  const E = (o, t) => {
    o === "success" ? K.success(t) : K.error(t);
  }, c = y(async (o, t) => {
    try {
      await N({ memberAccounts: [o] }), E("success", L(n.UNMUTE, t)), await d();
    } catch (i) {
      const { code: D, info: Q } = me(i), Z = D ? Le(D, Q) : (i instanceof Error ? i.message : "") || r(n.UNKNOWN_HOST);
      E("error", `【${r(n.UNMUTE)}】${r(n.OPERATION_FAILED, { error: Z })}`);
    }
  }, [N, r, d]), I = fe({
    operationName: r(n.MUTE),
    action: async () => {
      const o = G.current;
      if (!o) throw new Error("No target");
      await _({ memberAccounts: [o.userId], muteTime: vn });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.MUTE) }),
      content: G.current ? r(n.MUTE_CONFIRM_CONTENT, { name: G.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = G.current;
      E("success", L(n.MUTE, o?.userName || "")), await ae(), G.current = null, q(null);
    }
  }), H = y((o, t, i) => {
    if (a) {
      if (u) {
        K.warning(r(n.LIVE_ENDED));
        return;
      }
      Ue(o, l) || (i ? c(o, t) : (G.current = { userId: o, userName: t }, q({ userId: o, userName: t })));
    }
  }, [a, l, c, u, r]), B = y(async (o, t) => {
    try {
      await g({ memberAccounts: [o] }), E("success", L(n.UNBAN, t)), await h();
    } catch (i) {
      const { code: D, info: Q } = me(i), Z = D ? Le(D, Q) : (i instanceof Error ? i.message : "") || r(n.UNKNOWN_HOST);
      E("error", `【${r(n.UNBAN)}】${r(n.OPERATION_FAILED, { error: Z })}`);
    }
  }, [g, r, h]), j = fe({
    operationName: r(n.BAN),
    action: async () => {
      const o = S.current;
      if (!o) throw new Error("No target");
      await M({ memberAccounts: [o.userId], duration: An });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.BAN) }),
      content: S.current ? r(n.BAN_CONFIRM_CONTENT, { name: S.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = S.current;
      E("success", L(n.BAN, o?.userName || "")), await ie(), S.current = null, W(null);
    }
  }), C = y((o, t, i) => {
    if (a) {
      if (u) {
        K.warning(r(n.LIVE_ENDED));
        return;
      }
      Ue(o, l) || (i ? B(o, t) : (S.current = { userId: o, userName: t }, W({ userId: o, userName: t })));
    }
  }, [a, l, B, u, r]), P = J(I);
  P.current = I;
  const X = J(j);
  X.current = j, F(() => {
    O && P.current.requestConfirm();
  }, [O]), F(() => {
    V && X.current.requestConfirm();
  }, [V]);
  const te = y(async (o, t) => {
    if (a) {
      if (u) {
        K.warning(r(n.LIVE_ENDED));
        return;
      }
      if (!U) {
        w(o);
        try {
          await c(o, t || o);
        } finally {
          w(null);
        }
      }
    }
  }, [a, c, u, r, U]), ne = y(async (o, t) => {
    if (a) {
      if (u) {
        K.warning(r(n.LIVE_ENDED));
        return;
      }
      if (!A) {
        k(o);
        try {
          await B(o, t || o);
        } finally {
          k(null);
        }
      }
    }
  }, [a, B, u, r, A]), ae = y(async () => {
    if (a) {
      $(!0);
      try {
        const o = await d();
        v(Array.isArray(o) ? o : []);
      } catch (o) {
        ke.error("fetchMutedList", "获取禁言列表失败", o);
        const { code: t, info: i } = me(o), D = t ? Le(t, i) : (o instanceof Error ? o.message : "") || r(n.UNKNOWN_HOST);
        E("error", r(n.FETCH_MUTED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, r, d]), ie = y(async () => {
    if (a) {
      $(!0);
      try {
        const o = await h();
        T(Array.isArray(o) ? o : []);
      } catch (o) {
        ke.error("fetchBannedList", "获取封禁列表失败", o);
        const { code: t, info: i } = me(o), D = t ? Le(t, i) : (o instanceof Error ? o.message : "") || r(n.UNKNOWN_HOST);
        E("error", r(n.FETCH_BANNED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, r, h]), b = y((o) => p.some((t) => t.userId === o), [p]);
  return {
    mutedList: p,
    bannedList: x,
    memberListLoading: Y,
    unmutingUserId: U,
    unbanningUserId: A,
    fetchMutedList: ae,
    fetchBannedList: ie,
    handleMuteAudience: H,
    handleBanAudience: C,
    handleUnmuteFromList: te,
    handleUnbanFromList: ne,
    isUserMuted: b,
    muteConfirmDialog: I.confirmDialog,
    banConfirmDialog: j.confirmDialog,
    muteAction: I,
    banAction: j
  };
}
const Zn = 160;
function Qn({
  liveId: a,
  activeTab: r,
  onActiveTabChange: l,
  disabled: u,
  currentUserId: L,
  roomJoined: m = !1
}) {
  const { t: f } = Se(), { currentLive: d, updateLive: h } = we(), _ = d?.liveOwner?.userId || "", N = Xn(a, f, _, u), { audienceList: M } = Ae(), g = d?.isMessageDisabled === !0, [p, v] = R(!1), [x, T] = R(!1), Y = y((C) => {
    if (!u && C !== g) {
      if (!C) {
        v(!0), h({ liveId: a, isMessageDisabled: !1 }).finally(() => v(!1));
        return;
      }
      T(!0);
    }
  }, [u, g, a, h]), $ = y(() => {
    v(!0), h({ liveId: a, isMessageDisabled: !0 }).then(() => T(!1)).finally(() => v(!1));
  }, [a, h]), [U, w] = R(null), A = J(null), k = y((C, P, X) => {
    C.stopPropagation();
    const te = C.currentTarget.getBoundingClientRect();
    w({ userId: P, userName: X, x: te.right, y: te.bottom + 4 });
  }, []), G = y(() => {
    w(null);
  }, []);
  F(() => {
    if (!U) return;
    const C = (P) => {
      A.current && !A.current.contains(P.target) && w(null);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [U]);
  const [S, O] = R(!1), [q, V] = R(!1), W = J(N.fetchMutedList);
  W.current = N.fetchMutedList;
  const E = J(N.fetchBannedList);
  E.current = N.fetchBannedList;
  const c = y(() => {
    W.current(), O(!0);
  }, []), I = y(() => {
    E.current(), V(!0);
  }, []);
  F(() => {
    r === "audience" && a && (W.current(), E.current());
  }, [r, a]);
  function H(C) {
    const P = M.find((X) => X.userId === C);
    if (P && "avatarUrl" in P && typeof P.avatarUrl == "string")
      return P.avatarUrl;
  }
  function B(C) {
    const P = M.find((X) => X.userId === C);
    return P?.userName ? P.userName : C;
  }
  function j(C, P) {
    return C ? /* @__PURE__ */ e(
      pe,
      {
        visible: !0,
        header: f(C.title),
        onClose: () => P.cancelConfirm(),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(ee, { shape: "round", variant: "outline", disabled: P.loading, onClick: () => P.cancelConfirm(), children: f(n.CANCEL) }),
          /* @__PURE__ */ e(
            ee,
            {
              shape: "round",
              theme: "primary",
              loading: P.loading,
              onClick: () => P.executeWithConfirm(),
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
        Me,
        {
          value: r,
          onChange: (C) => l(C),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(Me.TabPanel, { value: "chat", label: f(n.MESSAGE_LIST) }),
            /* @__PURE__ */ e(Me.TabPanel, { value: "audience", label: f(n.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ s("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          Be,
          {
            value: g,
            disabled: p || u,
            onChange: (C) => Y(!!C)
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
            display: r === "chat" ? "flex" : "none",
            flexDirection: "column"
          },
          children: [
            g && /* @__PURE__ */ s("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ e("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ e("span", { children: f(n.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ e(
              jn,
              {
                liveId: a,
                anchorUserId: _,
                mutedList: N.mutedList,
                bannedList: N.bannedList,
                roomJoined: m,
                onMuteUser: N.handleMuteAudience,
                onBanUser: N.handleBanAudience
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ s(
        "div",
        {
          className: "audience-tab-wrapper",
          style: { display: r === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(gn, { height: "99%", children: ({ audience: C }) => {
              if (C.userId === L)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: f(n.ME) });
              const P = Ve(_);
              return C.userRole === 0 || C.userId === P ? null : /* @__PURE__ */ s("div", { className: "audience-row-actions", children: [
                N.isUserMuted(C.userId) && /* @__PURE__ */ e("span", { className: "audience-muted-badge", children: f(n.MUTED) }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: f(n.MORE_ACTIONS),
                    disabled: u,
                    onClick: (X) => {
                      X.stopPropagation(), k(
                        X,
                        C.userId,
                        C.userName || C.userId
                      );
                    },
                    children: /* @__PURE__ */ e(an, { size: 18 })
                  }
                )
              ] });
            } }) }),
            /* @__PURE__ */ s("div", { className: "audience-bottom-actions", children: [
              /* @__PURE__ */ s("button", { className: "audience-bottom-btn", disabled: u, onClick: c, children: [
                f(n.MUTED_LIST),
                " (",
                N.mutedList.length,
                ")"
              ] }),
              /* @__PURE__ */ s("button", { className: "audience-bottom-btn", disabled: u, onClick: I, children: [
                f(n.BANNED_LIST),
                " (",
                N.bannedList.length,
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
        ref: A,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: U.y,
          left: U.x - Zn
        },
        children: [
          /* @__PURE__ */ e("div", { className: "dropdown-header", children: U.userName }),
          /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
          N.isUserMuted(U.userId) ? /* @__PURE__ */ s(
            "button",
            {
              className: "dropdown-item",
              disabled: u,
              onClick: () => {
                N.handleMuteAudience(U.userId, U.userName, !0), G();
              },
              children: [
                /* @__PURE__ */ e(ve, { size: 14 }),
                f(n.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ s(
            "button",
            {
              className: "dropdown-item",
              disabled: u,
              onClick: () => {
                N.handleMuteAudience(U.userId, U.userName, !1), G();
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
              disabled: u,
              onClick: () => {
                N.handleBanAudience(U.userId, U.userName, !1), G();
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
    j(N.muteConfirmDialog, N.muteAction),
    j(N.banConfirmDialog, N.banAction),
    x && /* @__PURE__ */ e(
      pe,
      {
        visible: !0,
        header: f(n.ENABLE_ALL_MEMBER_MUTE),
        onClose: () => T(!1),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(ee, { shape: "round", variant: "outline", onClick: () => T(!1), children: f(n.CANCEL) }),
          /* @__PURE__ */ e(ee, { shape: "round", theme: "primary", loading: p, onClick: $, children: f(n.CONFIRM_ENABLE) })
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: f(n.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT) } })
      }
    ),
    /* @__PURE__ */ e(
      Jn,
      {
        mutedModalVisible: S,
        bannedModalVisible: q,
        mutedList: N.mutedList,
        bannedList: N.bannedList,
        memberListLoading: N.memberListLoading,
        unmutingUserId: N.unmutingUserId,
        unbanningUserId: N.unbanningUserId,
        getUserAvatar: H,
        getUserNameFromCache: B,
        onMutedModalClose: () => O(!1),
        onBannedModalClose: () => V(!1),
        onUnmuteFromList: N.handleUnmuteFromList,
        onUnbanFromList: N.handleUnbanFromList,
        t: f
      }
    )
  ] });
}
const z = Ee("LiveControl");
function et() {
  try {
    if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
      return "admin";
  } catch {
  }
  return "audience";
}
function nt({
  liveControlSlots: a,
  liveInfo: r,
  liveId: l,
  initialIsLiveEnded: u,
  activeTab: L,
  onActiveTabChange: m,
  onLiveEnded: f,
  t: d
}) {
  const { currentLive: h, setCurrentLive: _ } = we(), { joinLive: N, leaveLive: M, subscribeEvent: g, unsubscribeEvent: p } = pn(), { fetchAudienceList: v } = Ae(), { login: x, loginUserInfo: T } = En(), { hideControlBar: Y, showControlBar: $, setAutoHideDelay: U } = Cn(), [w, A] = R(!1), [k, G] = R(""), [S, O] = R(!1), [q, V] = R(0), W = J(""), E = J(!1), c = J(null), I = J(null), H = T?.userId || k, B = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, j = J(et()).current, C = 5, P = 2e3;
  F(() => {
    if (B) {
      z.debug("LiveControlLeftPanel", "Mock mode, skipping TUILogin"), A(!0), O(!0);
      return;
    }
    if (w) return;
    const o = async () => {
      try {
        let i;
        if (j === "audience" ? (z.debug("LiveControlLeftPanel", "Audience mode, creating basic account..."), i = await _n("audience")) : (z.debug("LiveControlLeftPanel", "Admin mode, resolving account..."), i = await Ke()), !i || i.sdkAppId === 0) {
          z.warn("LiveControlLeftPanel", "No valid credentials, will retry"), t();
          return;
        }
        G(i.userId), z.debug("LiveControlLeftPanel", "TUILogin as:", j, "userId:", i.userId), await x({
          SDKAppID: i.sdkAppId,
          userID: i.userId,
          userSig: i.userSig
        }), z.info("LiveControlLeftPanel", "TUILogin success"), A(!0), V(0);
      } catch (i) {
        i?.code === 2025 || i?.message?.includes("重复登录") ? (z.debug("LiveControlLeftPanel", "Already logged in"), A(!0), V(0)) : (z.error("LiveControlLeftPanel", "TUILogin failed:", i), t());
      }
    }, t = () => {
      if (q >= C) {
        z.error("LiveControlLeftPanel", `Login failed after ${C} retries, giving up`);
        return;
      }
      const i = P * (q + 1);
      z.debug("LiveControlLeftPanel", `Scheduling login retry #${q + 1} in ${i}ms`), I.current = setTimeout(() => {
        V((D) => D + 1);
      }, i);
    };
    return o(), () => {
      I.current && (clearTimeout(I.current), I.current = null);
    };
  }, [B, w, x, q]), F(() => {
    if (B || !w || !k || j !== "audience") return;
    const o = De() === "en-US" ? "admin" : "管理员";
    Mn(k, o).catch((t) => {
      z.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", t);
    });
  }, [B, w, k]), F(() => {
    if (l)
      return z.debug("LiveControlLeftPanel", "Setting current live:", l), _(l), () => {
        z.debug("LiveControlLeftPanel", "Clearing current live"), _(null);
      };
  }, [l, _]);
  const X = y(async () => {
    if (!(!l || !h || !w)) {
      if (u) {
        z.debug("LiveControlLeftPanel", "Live already ended, skipping join");
        return;
      }
      if (W.current === l) {
        z.debug("LiveControlLeftPanel", "Already joined live:", l);
        return;
      }
      try {
        z.debug("LiveControlLeftPanel", "Joining live:", l, "as:", j);
        const o = De();
        if (xn.callExperimentalAPI(JSON.stringify({
          api: "setCurrentLanguage",
          params: { language: o === "en-US" ? "en" : o === "zh-CN" ? "zh-Hans" : o }
        })).catch(() => {
        }), await N({ liveId: l }), W.current = l, O(!0), await v().catch((t) => {
          z.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", t);
        }), Y(), U(0), !E.current && g) {
          const t = () => {
            z.info("LiveControlLeftPanel", "Live ended event received"), _(null), f?.();
          };
          c.current = t, g(Re.ON_LIVE_ENDED, t), E.current = !0;
        }
        z.info("LiveControlLeftPanel", "Successfully joined live:", l), console.log("[LiveControlLeftPanel] adding live admin:", k, "room:", l), In(l, k).catch((t) => {
          console.error("[LiveControlLeftPanel] addLiveAdmin failed:", t), z.warn("LiveControlLeftPanel", "addLiveAdmin failed:", t);
        });
      } catch (o) {
        z.error("LiveControlLeftPanel", "Failed to join live:", o);
      }
    }
  }, [l, h, w, N, v, g, j, _, u, f]);
  F(() => {
    X();
  }, [X]), F(() => {
    W.current = "", O(!1);
  }, [l]);
  const te = J(!1);
  F(() => () => {
    if (te.current = !0, z.debug("LiveControlLeftPanel", "Component unmounting, cleaning up"), E.current && p && c.current && (p(Re.ON_LIVE_ENDED, c.current), E.current = !1, c.current = null), W.current) {
      const o = W.current;
      W.current = "", M().catch((t) => {
        z.warn("LiveControlLeftPanel", "leaveLive on unmount failed for", o, t);
      });
    }
    $();
  }, [M, p, $]);
  const ne = le(
    () => r?.anchor.avatarUrl || h?.liveOwner?.avatarUrl || "",
    [r?.anchor.avatarUrl, h?.liveOwner?.avatarUrl]
  ), ae = le(
    () => r?.anchor.nick || h?.liveOwner?.userName || d(n.UNKNOWN_ANCHOR),
    [r?.anchor.nick, h?.liveOwner?.userName, d]
  ), ie = le(
    () => h?.liveType === "Voice",
    [h?.liveType]
  );
  return /* @__PURE__ */ s("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      Hn,
      {
        liveControlSlots: a,
        liveInfo: r,
        currentLive: h,
        liveAnchorAvatar: ne,
        liveAnchorName: ae,
        isVoiceLive: ie,
        isMockMode: B,
        liveEndedOverlayVisible: u || !h && !B,
        t: d
      }
    ),
    /* @__PURE__ */ e(
      Qn,
      {
        liveId: l,
        activeTab: L,
        onActiveTabChange: m,
        disabled: u ?? !1,
        currentUserId: H,
        roomJoined: S
      }
    )
  ] });
}
const tt = (a, r, l) => {
  const u = Array.from({ length: r }, () => 0);
  return a.forEach((L, m) => {
    const f = m % r;
    u[f] = Math.max(u[f], L);
  }), u.reduce((L, m) => L + m, 0) + l * (r - 1);
}, rt = (a) => {
  const r = Array.from(a.querySelectorAll(":scope > .stat-bar-item")), l = document.createElement("div");
  l.style.position = "absolute", l.style.left = "-99999px", l.style.top = "0", l.style.visibility = "hidden", l.style.pointerEvents = "none", l.style.width = "max-content", document.body.appendChild(l);
  const u = r.map((L) => {
    const m = L.cloneNode(!0);
    return m.style.width = "max-content", m.style.maxWidth = "none", l.appendChild(m), Math.ceil(m.getBoundingClientRect().width);
  });
  return l.remove(), u;
}, at = (a) => {
  if (a.clientWidth <= 0) return;
  const r = rt(a);
  if (!r.length) return;
  const l = parseFloat(getComputedStyle(a).columnGap) || 0, u = a.clientWidth, L = [7, 4, 3, 2, 1].find((m) => tt(r, m, l) <= u + 1) || 1;
  a.style.setProperty("--stats-columns", String(L));
}, ot = (a) => a >= 1e4 ? (a / 1e4).toFixed(1) + "w" : a.toLocaleString(), st = (a, r) => {
  a < 0 && (a = 0);
  const l = Math.floor(a / 86400), u = Math.floor(a % 86400 / 3600), L = Math.floor(a % 3600 / 60), m = a % 60, f = `${u.toString().padStart(2, "0")}:${L.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  return l > 0 ? `${l}${r(n.DAYS)} ${f}` : f;
}, it = (a) => {
  const r = new Date(a), l = String(r.getMonth() + 1).padStart(2, "0"), u = String(r.getDate()).padStart(2, "0"), L = String(r.getHours()).padStart(2, "0"), m = String(r.getMinutes()).padStart(2, "0"), f = String(r.getSeconds()).padStart(2, "0");
  return `${l}-${u} ${L}:${m}:${f}`;
};
function ct({
  liveInfo: a,
  audienceCount: r,
  liveDuration: l,
  interactionRate: u,
  updateTimeText: L,
  t: m
}) {
  const f = J(null);
  return F(() => {
    const d = f.current;
    if (!d) return;
    let h = null;
    const _ = () => {
      h !== null && cancelAnimationFrame(h), h = requestAnimationFrame(() => {
        h = null, at(d);
      });
    }, N = new ResizeObserver(_);
    N.observe(d);
    const M = new MutationObserver(_);
    return M.observe(d, { childList: !0, subtree: !0, characterData: !0 }), _(), () => {
      N.disconnect(), M.disconnect(), h !== null && cancelAnimationFrame(h);
    };
  }, []), /* @__PURE__ */ s("div", { className: "sidebar-stats-card", children: [
    /* @__PURE__ */ s("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ s("div", { className: "stats-header-left", children: [
        /* @__PURE__ */ e("h3", { children: m(n.LIVE_DATA_CONTROL) }),
        /* @__PURE__ */ s("span", { className: "live-status-tag", children: [
          /* @__PURE__ */ e("span", { className: "live-status-dot" }),
          m(n.LIVE_NOW),
          /* @__PURE__ */ e("span", { className: "live-duration-text", children: st(l, m) })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: "update-time", children: m(n.UPDATED_AT, { time: L }) })
    ] }),
    /* @__PURE__ */ s("div", { ref: f, className: "stats-bar-design", children: [
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.CURRENT_VIEWERS),
          /* @__PURE__ */ e(oe, { content: m(n.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: ot(a?.onlineCount ?? r ?? 0) })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.COMMENT_COUNT),
          /* @__PURE__ */ e(oe, { content: m(n.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.commentCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.COMMENT_USERS),
          /* @__PURE__ */ e(oe, { content: m(n.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.viewCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.INTERACTION_RATE),
          /* @__PURE__ */ e(oe, { content: m(n.INTERACTION_RATE_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: u })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.TOTAL_GIFT_AMOUNT),
          /* @__PURE__ */ e(oe, { content: m(n.TOTAL_GIFT_AMOUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftAmount?.toFixed(2) ?? "0.00" })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.GIFT_COUNT),
          /* @__PURE__ */ e(oe, { content: m(n.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftCount ?? 0 })
      ] }),
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          m(n.GIFT_SENDERS),
          /* @__PURE__ */ e(oe, { content: m(n.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftUserCount ?? 0 })
      ] })
    ] })
  ] });
}
function lt({
  moderationMode: a = "cloud",
  moderationList: r,
  moderationLoading: l,
  moderationPage: u,
  moderationTotal: L,
  moderationTotalPages: m,
  moderationSelectedIds: f,
  isAllOnPageSelected: d,
  customModerationToggleEnabled: h,
  onCustomToggleChange: _,
  updateTimeText: N,
  disabled: M = !1,
  onRefresh: g,
  onPageChange: p,
  onBulkApprove: v,
  onBulkDelete: x,
  onToggleSelectOne: T,
  onToggleSelectAll: Y,
  onRelease: $,
  onDelete: U,
  onOpenDropdown: w,
  t: A
}) {
  const k = a === "custom", G = le(
    () => Wn({ hideTypeColumn: k }).map((S) => ({
      ...S,
      title: S.i18nKey ? A(S.i18nKey) : "",
      ...S.key === "check" ? {
        headerRender: () => /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            checked: d,
            disabled: M,
            onChange: Y
          }
        )
      } : {},
      render: (() => {
        switch (S.key) {
          case "check":
            return (O) => /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                checked: f.includes(O.id),
                disabled: M,
                onChange: () => T(O.id)
              }
            );
          case "userId":
            return (O) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: O.userId }) });
          case "content":
            return (O) => /* @__PURE__ */ e("span", { title: O.content, children: O.content });
          case "type":
            return (O) => /* @__PURE__ */ e("span", { className: "moderation-type-text", children: A(O.type) });
          case "createdAtMs":
            return (O) => it(O.createdAtMs);
          case "action":
            return (O) => {
              const q = [
                { key: "approve", label: A(n.APPROVE), onClick: () => $(O) },
                { key: "delete", label: A(n.DELETE), danger: !0, onClick: () => U(O) }
              ];
              return k || q.push({ key: "more", label: A(n.MORE), suffixCaret: !0, onClick: (V) => w(V, O) }), /* @__PURE__ */ e(
                ye,
                {
                  disabled: M,
                  actions: q
                }
              );
            };
          default:
            return;
        }
      })()
    })),
    [A, d, M, f, Y, T, $, U, w, k]
  );
  return /* @__PURE__ */ s("div", { className: "moderation-card", children: [
    /* @__PURE__ */ s("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ s("div", { className: "moderation-header-left", children: [
        !k && /* @__PURE__ */ e("h3", { children: A(n.CONTENT_MODERATION) }),
        k && /* @__PURE__ */ s("label", { className: "moderation-toggle-label", style: { display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12 }, children: [
          /* @__PURE__ */ e(
            Be,
            {
              size: "small",
              value: h,
              disabled: M,
              onChange: (S) => _(S)
            }
          ),
          /* @__PURE__ */ e("span", { style: { fontSize: 13 }, children: A(n.CUSTOM_MODERATION_TOGGLE) })
        ] }),
        /* @__PURE__ */ e(
          ee,
          {
            theme: "primary",
            shape: "round",
            onClick: v,
            disabled: M || f.length <= 1,
            icon: /* @__PURE__ */ e(ve, { style: { width: 14, height: 14 } }),
            children: A(n.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          ee,
          {
            theme: "primary",
            shape: "round",
            onClick: x,
            disabled: M || f.length <= 1,
            icon: /* @__PURE__ */ e(on, { style: { width: 14, height: 14 } }),
            children: A(n.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: A(n.UPDATED_AT, { time: N }) }),
        /* @__PURE__ */ e(
          ee,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(sn, {}),
            loading: l,
            disabled: M,
            onClick: g,
            children: A(n.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ s("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ e(
        zn,
        {
          columns: G,
          data: r,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: A(n.MODERATION_EMPTY) }) })
        }
      ),
      r.length > 0 && /* @__PURE__ */ s("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: A(n.TOTAL_ITEMS, { count: L, total: L }) }),
        /* @__PURE__ */ s("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: M || u <= 1,
              onClick: () => p(u - 1),
              "aria-label": A(n.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(cn, { style: { width: 14 } })
            }
          ),
          $n(u, m).map(
            (S, O) => S === "..." ? /* @__PURE__ */ e("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${O}`) : /* @__PURE__ */ e(
              "button",
              {
                className: `page-num ${S === u ? "active" : ""}`,
                disabled: M,
                onClick: () => p(S),
                children: S
              },
              S
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: u >= m,
              onClick: () => p(u + 1),
              "aria-label": A(n.NEXT_PAGE),
              children: /* @__PURE__ */ e(ln, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const _e = Ee("Moderation");
function dt(a, r, l, u) {
  const {
    moderationMode: L,
    customModerationToggleEnabled: m,
    updateCustomModerationToggleEnabled: f,
    fetchTextModerationList: d,
    approveTextModerationItems: h,
    bypassCorrectionKeyword: _,
    deleteModerationItems: N
  } = We({ liveId: a || "", pageSize: Te }), M = L === "custom", [g, p] = R([]), [v, x] = R(!1), [T, Y] = R(1), [$, U] = R(0), [w, A] = R([]), [k, G] = R(null), [S, O] = R(null), q = le(() => qe($, Te), [$]), V = y(
    async (b = 1) => {
      if (a) {
        x(!0);
        try {
          const o = Math.max(1, b), t = On(u), i = await d({
            pageNum: o,
            pageSize: Te,
            startTime: t,
            violationOnly: !M
            // custom 模式不过滤 violationOnly
          });
          let D = i.list || [];
          if (M) {
            const Q = [...D].sort((Z, re) => re.createdAtMs - Z.createdAtMs);
            p(Q), U(i.total || 0);
          } else {
            D = await Ye(D);
            const Q = await je(), re = [...yn(D)].sort((Ce, ze) => ze.createdAtMs - Ce.createdAtMs);
            p(re), U(Math.max(0, (i.total || 0) - Q));
          }
          Y(o), A((Q) => he(Q.filter((Z) => D.some((re) => re.id === Z))));
        } catch (o) {
          _e.error("moderation", `load failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
          const t = me(o).info || o.message || r(n.UNKNOWN_ERROR);
          K.error(`【${r(n.REFRESH)}${r(n.CONTENT_MODERATION)}】${r(n.OPERATION_FAILED, { error: t })}`);
        } finally {
          x(!1);
        }
      }
    },
    [a, r, d, u, M]
  );
  F(() => {
    a && u != null && V(1);
  }, [a, u]);
  const W = y(async (b = !1) => {
    l || (await V(T), b || K.success(ue(r).opSuccess(n.REFRESH)));
  }, [V, T, r, l]), E = y(
    (b) => {
      b < 1 || b > q || b === T || V(b);
    },
    [V, T, q]
  ), c = y(
    async (b) => {
      A((t) => t.filter((i) => !b.includes(i))), p((t) => t.filter((i) => !b.includes(i.id))), U((t) => Math.max(0, t - b.length));
      const o = Sn(
        T,
        $,
        b.length,
        Te
      );
      await V(o);
    },
    [V, T, $]
  ), I = fe({
    operationName: r(n.RELEASE_AND_RESEND),
    action: async () => {
      if (!k || !a) throw new Error("liveId is required");
      await h({
        ids: [k.id],
        items: [{ id: k.id, content: k.content, userId: k.userId }],
        liveId: a
      });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.RELEASE_AND_RESEND) }),
      content: r(n.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      k && await c([k.id]), G(null);
    }
  }), H = y((b) => {
    if (l) {
      K.warning(r(n.LIVE_ENDED));
      return;
    }
    G(b), I.requestConfirm();
  }, [I, l, r]), B = fe({
    operationName: r(n.BYPASS_CORRECTION),
    action: async () => {
      if (!S) throw new Error("No target item");
      await _({ content: S.content });
    },
    confirm: {
      title: r(n.BYPASS_CORRECTION_DIALOG_TITLE),
      content: r(n.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      S && await c([S.id]), O(null);
    }
  }), j = y((b) => {
    if (l) {
      K.warning(r(n.LIVE_ENDED));
      return;
    }
    O(b), B.requestConfirm();
  }, [B, l, r]), C = fe({
    operationName: r(n.BULK_APPROVE),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const b = g.filter((i) => w.includes(i.id)).sort((i, D) => i.createdAtMs - D.createdAtMs), o = b.map((i) => i.id), t = b.map((i) => ({ id: i.id, content: i.content, userId: i.userId }));
      await h({ ids: o, items: t, liveId: a });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.BULK_APPROVE) }),
      content: r(n.BULK_APPROVE_CONFIRM_CONTENT)
    },
    onSuccess: async () => {
      const b = [...w];
      await c(b);
    }
  }), P = y(() => {
    if (l) {
      K.warning(r(n.LIVE_ENDED));
      return;
    }
    if (w.length === 0) {
      K.warning(r(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    C.requestConfirm();
  }, [C, w, l, r]), X = y(
    async (b) => {
      if (l) {
        K.warning(r(n.LIVE_ENDED));
        return;
      }
      try {
        await N([b.id]), K.info(ue(r).opSuccess(n.DELETE)), await c([b.id]);
      } catch (o) {
        _e.error("moderation", `delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
        const t = me(o).info || o.message || r(n.UNKNOWN_ERROR);
        K.error(`【${r(n.DELETE)}${r(n.CONTENT_MODERATION)}】${ue(r).opFailed(n.DELETE, null, t)}`);
      }
    },
    [c, r, l]
  ), te = y(async () => {
    if (l) {
      K.warning(r(n.LIVE_ENDED));
      return;
    }
    if (w.length === 0) {
      K.warning(r(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const b = [...w];
    try {
      await N(b), K.info(ue(r).opSuccess(n.DELETE)), await c(b);
    } catch (o) {
      _e.error("moderation", `bulk delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
      const t = me(o).info || o.message || r(n.UNKNOWN_ERROR);
      K.error(`【${r(n.BULK_DELETE)}${r(n.CONTENT_MODERATION)}】${r(n.OPERATION_FAILED, { error: t })}`);
    }
  }, [w, c, r, l]), ne = y((b) => {
    A((o) => o.includes(b) ? he(o.filter((t) => t !== b)) : he([...o, b]));
  }, []), ae = y(() => {
    A((b) => {
      const o = he(g.map((t) => t.id));
      return b.length >= o.length ? [] : o;
    });
  }, [g]), ie = le(() => {
    const b = he(g.map((o) => o.id));
    return wn(w, b);
  }, [g, w]);
  return {
    moderationMode: L,
    customModerationToggleEnabled: m,
    updateCustomModerationToggleEnabled: f,
    moderationList: g,
    moderationLoading: v,
    moderationPage: T,
    moderationTotal: $,
    moderationTotalPages: q,
    moderationSelectedIds: w,
    isAllOnPageSelected: ie,
    releaseConfirmDialog: I.confirmDialog,
    bypassConfirmDialog: B.confirmDialog,
    bulkApproveConfirmDialog: C.confirmDialog,
    releaseAction: {
      executeWithConfirm: I.executeWithConfirm,
      cancelConfirm: I.cancelConfirm,
      loading: I.loading
    },
    bypassAction: {
      executeWithConfirm: B.executeWithConfirm,
      cancelConfirm: B.cancelConfirm,
      loading: B.loading
    },
    bulkApproveAction: {
      executeWithConfirm: C.executeWithConfirm,
      cancelConfirm: C.cancelConfirm,
      loading: C.loading
    },
    handleRefreshModeration: W,
    goToModerationPage: E,
    handleRelease: H,
    handleBypassCorrection: j,
    handleDeleteModeration: X,
    handleBulkApprove: P,
    handleBulkDelete: te,
    toggleSelectOne: ne,
    toggleSelectAll: ae
  };
}
const Ne = Ee("LiveControl");
function Ot() {
  const { liveId: a } = Ze();
  F(() => (Ne.debug("LiveControl", "✅ Component MOUNTED, liveId:", a), () => {
    Ne.debug("LiveControl", "❌ Component UNMOUNTED, liveId:", a);
  }), []);
  const r = Qe(), L = en().state?.from === "live-list" ? "/live-list" : "/live-monitor", f = Je().components?.liveControl, { t: d } = Se(), {
    fetchLiveDetail: h,
    fetchLiveStats: _,
    endLive: N
  } = we(), { audienceCount: M } = Ae();
  F(() => {
    M > 0 && p((t) => t && { ...t, onlineCount: M });
  }, [M]);
  const [g, p] = R(null), v = le(() => !g || Number(g?.activityStatus) === 2, [g?.activityStatus, g]), [x, T] = R("chat"), [Y, $] = R(!0), { successMsg: U, errorMsg: w } = Gn(), A = fe({
    operationName: d(n.FORCE_STOP),
    action: async () => {
      if (!g) throw new Error("liveInfo is null");
      return N(g.id || g.liveId);
    },
    confirm: {
      title: d(n.CONFIRM_ACTION_TITLE, { action: d(n.FORCE_STOP) }),
      content: d(n.FORCE_STOP_CONFIRM_CONTENT),
      confirmText: d(n.CONFIRM)
    },
    onSuccess: () => {
      r(L);
    }
  }), k = fe({
    operationName: d(n.SEND_VIOLATION_WARNING),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const t = g?.liveName || a;
      await Dn(a, {
        violationType: d(n.VIOLATION_TYPE_WARNING),
        violationContent: d(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: t }),
        handleSuggestion: d(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: d(n.CONFIRM_ACTION_TITLE, { action: d(n.SEND_VIOLATION_WARNING) }),
      content: d(n.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: d(n.CONFIRM)
    },
    errorMessage: ue(d).opFailed(n.OP_SEND)
  }), G = y(() => {
    p((t) => t && { ...t, activityStatus: 2 });
  }, []), S = () => {
    k.requestConfirm();
  }, O = J(null), [q, V] = R(0), [W, E] = R(null), c = dt(a, d, v, g?.createdAt);
  F(() => () => {
    a && Ne.info("LiveControl", "Component unmounting, liveId:", a);
  }, [a]);
  const I = Pn({
    showError: !1,
    action: async () => a ? await h(a) : null,
    errorMessage: d(n.GET_ERROR_MESSAGE),
    onError: () => {
      $(!1);
    },
    onSuccess: (t) => {
      if ($(!1), !t) return;
      const i = t.anchor?.userId, D = Rn(t, i || "-"), Q = Un(t);
      if (p({
        liveId: t.liveId,
        id: t.liveId,
        liveName: t.liveName || d(n.UNNAMED_LIVE_SHORT),
        coverUrl: t.coverUrl || Xe,
        anchor: {
          userId: i || "",
          nick: D,
          avatarUrl: Q
        },
        onlineCount: t.onlineCount || 0,
        createdAt: t.createdAt ?? 0,
        isMessageDisabled: t.isMessageDisabled === !0,
        liveType: t.liveType || "Live",
        isSeatEnabled: t.isSeatEnabled || !1,
        maxSeatCount: t.maxSeatCount || 9,
        maxMemberCount: t.maxMemberCount || 1e3,
        category: t.category || [],
        activityStatus: Number(t.activityStatus ?? 0),
        endedAt: t.endedAt,
        isPublicVisible: t.isPublicVisible !== void 0 ? t.isPublicVisible : !0,
        isLikeEnabled: t.isLikeEnabled !== void 0 ? t.isLikeEnabled : !0,
        stats: t.stats
      }), t.createdAt && Number(t.activityStatus) !== 2) {
        const Z = t.createdAt > 1e12 ? t.createdAt : t.createdAt * 1e3;
        if (Z > 1e12) {
          const re = Math.floor((Date.now() - Z) / 1e3);
          V(re > 0 ? re : 0);
        }
      }
      C();
    }
  }), H = y(async () => {
    await I.execute();
  }, [I.execute]), [B, j] = R(() => {
    const t = /* @__PURE__ */ new Date();
    return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
  }), C = y(() => {
    const t = /* @__PURE__ */ new Date();
    j(`${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`);
  }, []), P = y(async () => {
    if (a)
      try {
        const t = await _(a);
        p((i) => i && {
          ...i,
          stats: t
        }), C();
      } catch (t) {
        Ne.error("LiveControl", "fetchStats failed:", t);
      }
  }, [a, C]), X = le(() => {
    const t = g?.stats?.viewCount ?? 0, i = g?.stats?.commentCount ?? 0;
    if (t <= 0) return "0%";
    const D = i / t * 100;
    return Math.min(D, 100).toFixed(1) + "%";
  }, [g?.stats?.viewCount, g?.stats?.commentCount]), te = 30, ne = J(null), ae = J(!0), ie = y(() => {
    r(L);
  }, [r, L]), b = y(() => {
    E(null);
  }, []), o = y((t, i) => {
    t.preventDefault(), t.stopPropagation();
    const D = t.currentTarget.getBoundingClientRect();
    E({
      item: i,
      x: D.right,
      y: D.bottom + 4
    });
  }, []);
  return F(() => {
    const t = g?.createdAt;
    if (!t || t < 1e9 || Number(g?.activityStatus) === 2)
      return;
    const i = t > 1e12 ? t : t * 1e3, D = () => {
      const Z = Math.floor((Date.now() - i) / 1e3);
      V(Z > 0 ? Z : 0);
    };
    D();
    const Q = window.setInterval(D, 1e3);
    return () => {
      window.clearInterval(Q);
    };
  }, [g?.createdAt, g?.activityStatus]), F(() => {
    if (!W) return;
    const t = (i) => {
      O.current && !O.current.contains(i.target) && b();
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [b, W]), F(() => {
    if (x !== "audience") return;
    const t = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((Z) => {
        const re = Z, Ce = re.textContent || "";
        re.title !== Ce && (re.title = Ce);
      });
    };
    t();
    const i = document.querySelector(".audience-list-area");
    if (!i) return;
    const D = new MutationObserver(t);
    return D.observe(i, { childList: !0, subtree: !0 }), () => D.disconnect();
  }, [x]), F(() => {
    if (a)
      return Ne.info("LiveControl", "Fetching room info for:", a), ae.current = !0, H(), () => {
        ae.current = !1;
      };
  }, [a]), F(() => {
    if (!a || te === 0 || v) {
      ne.current && (clearInterval(ne.current), ne.current = null);
      return;
    }
    return ne.current = window.setInterval(() => {
      ae.current && (P(), c.moderationMode === "custom" && !c.customModerationToggleEnabled || c.handleRefreshModeration(!0));
    }, te * 1e3), () => {
      ne.current && (clearInterval(ne.current), ne.current = null);
    };
  }, [a, te, v, P, c.handleRefreshModeration, c.moderationMode, c.customModerationToggleEnabled]), Y ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(nn, { loading: !0, text: d(n.LOADING) }) }) : /* @__PURE__ */ s("div", { className: "live-control-container", children: [
    /* @__PURE__ */ s("div", { className: "toast-area", children: [
      U && /* @__PURE__ */ e("div", { className: "status-success", children: U }),
      w && /* @__PURE__ */ e("div", { className: "status-error", children: w })
    ] }),
    /* @__PURE__ */ s("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ s("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(ee, { shape: "circle", variant: "outline", className: "back-btn", onClick: ie, title: d(n.BACK_TO_LIST), icon: /* @__PURE__ */ e(dn, { fill: "transparent", stroke: "currentColor", strokeWidth: 2 }) }),
        /* @__PURE__ */ e("h1", { children: d(n.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ s("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          ee,
          {
            variant: "text",
            theme: "warning",
            icon: /* @__PURE__ */ e(un, { size: 16 }),
            disabled: v,
            onClick: S,
            children: d(n.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(ee, { variant: "text", theme: "danger", disabled: v, onClick: () => A.requestConfirm(), icon: /* @__PURE__ */ e(mn, {}), children: d(n.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ s("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        nt,
        {
          liveControlSlots: f,
          liveInfo: g,
          liveId: a || "",
          initialIsLiveEnded: v,
          activeTab: x,
          onActiveTabChange: T,
          onLiveEnded: G,
          t: d
        }
      ),
      /* @__PURE__ */ s("aside", { className: "right-sidebar", children: [
        /* @__PURE__ */ e(
          ct,
          {
            liveInfo: g,
            audienceCount: M,
            liveDuration: q,
            interactionRate: X,
            updateTimeText: B,
            t: d
          }
        ),
        /* @__PURE__ */ e($e, { slot: f?.customControlPanel, props: { liveInfo: g } }),
        /* @__PURE__ */ e(
          lt,
          {
            moderationMode: c.moderationMode,
            moderationList: c.moderationList,
            moderationLoading: c.moderationLoading,
            moderationPage: c.moderationPage,
            moderationTotal: c.moderationTotal,
            moderationTotalPages: c.moderationTotalPages,
            moderationSelectedIds: c.moderationSelectedIds,
            isAllOnPageSelected: c.isAllOnPageSelected,
            customModerationToggleEnabled: c.customModerationToggleEnabled,
            onCustomToggleChange: c.updateCustomModerationToggleEnabled,
            updateTimeText: B,
            disabled: v,
            onRefresh: async () => {
              await c.handleRefreshModeration(), C();
            },
            onPageChange: c.goToModerationPage,
            onBulkApprove: c.handleBulkApprove,
            onBulkDelete: c.handleBulkDelete,
            onToggleSelectOne: c.toggleSelectOne,
            onToggleSelectAll: c.toggleSelectAll,
            onRelease: c.handleRelease,
            onDelete: c.handleDeleteModeration,
            onOpenDropdown: o,
            t: d
          }
        )
      ] })
    ] }),
    W && c.moderationMode !== "custom" && /* @__PURE__ */ e(
      "div",
      {
        ref: O,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: W.y,
          left: W.x - 160
        },
        children: /* @__PURE__ */ s(
          "button",
          {
            className: "dropdown-item",
            disabled: v,
            onClick: () => {
              const t = W.item;
              b(), c.handleBypassCorrection(t);
            },
            children: [
              /* @__PURE__ */ e(ve, { size: 14 }),
              d(n.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (() => {
      const i = [
        { key: "forceStop", dialog: A.confirmDialog, action: A },
        { key: "violationWarning", dialog: k.confirmDialog, action: k },
        { key: "release", dialog: c.releaseConfirmDialog, action: c.releaseAction },
        ...c.moderationMode !== "custom" ? [
          { key: "bypass", dialog: c.bypassConfirmDialog, action: c.bypassAction }
        ] : [],
        { key: "bulkApprove", dialog: c.bulkApproveConfirmDialog, action: c.bulkApproveAction }
      ].find((D) => !!D.dialog);
      return !i || !i.dialog ? null : /* @__PURE__ */ e(
        pe,
        {
          visible: !0,
          header: d(i.dialog.title),
          onClose: () => i.action.cancelConfirm(),
          width: ge.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ s(se, { children: [
            /* @__PURE__ */ e(ee, { shape: "round", variant: "outline", disabled: i.action.loading, onClick: () => i.action.cancelConfirm(), children: d(n.CANCEL) }),
            /* @__PURE__ */ e(
              ee,
              {
                shape: "round",
                theme: "primary",
                loading: i.action.loading,
                onClick: () => i.action.executeWithConfirm(),
                children: d(i.dialog.confirmText ?? n.CONFIRM)
              }
            )
          ] }),
          children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: d(i.dialog.content) } })
        }
      );
    })()
  ] });
}
export {
  Ot as default
};
