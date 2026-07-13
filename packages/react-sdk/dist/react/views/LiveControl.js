import { jsxs as i, jsx as e, Fragment as se } from "react/jsx-runtime";
import { I as n, a7 as ze, g as He, _ as ge, a as fe, r as ue, t as Ce, l as Re, S as Ke, h as qe, ad as je } from "../../chunks/layout.C1lzYH2h.js";
import Be, { useState as w, useCallback as R, useEffect as F, useRef as j, useMemo as le } from "react";
import { useParams as Ye, useNavigate as Je, useLocation as Xe } from "react-router-dom";
import { Dialog as Ee, Tooltip as oe, Button as ne, Tabs as be, Switch as xe, Loading as Qe } from "tdesign-react";
import { CheckCircleIcon as Ae, ChatOffIcon as Fe, UserCheckedIcon as Ze, UserBlockedIcon as Ve, MoreIcon as en, InfoCircleIcon as de, CloseCircleIcon as nn, RefreshIcon as tn, ChevronLeftIcon as rn, ChevronRightIcon as an, ArrowLeftIcon as on, NotificationIcon as sn, StopCircleIcon as cn } from "tdesign-icons-react";
import { useUIKit as ye } from "@tencentcloud/uikit-base-component-react";
import { LiveView as ln, useLiveAudienceState as ve, BarrageList as dn, BarrageInput as un, LiveAudienceList as mn, useLiveListState as fn, useLoginState as hn, useLivePlayerState as Nn, LiveListEvent as De } from "tuikit-atomicx-react";
import { c as pe } from "../../chunks/logger.rNWqpx5t.js";
import { bg as gn, b8 as Ie, bb as we, l as En, bm as Ue, D as pn, bQ as Ln, a6 as Cn, bF as Tn, Y as Te, aj as An, ao as vn, aI as bn, aR as Mn, aB as In, b_ as he, ah as _n, bc as On, bN as yn, bE as Sn, bD as Rn } from "../../chunks/main-layout.QTEHh38b.js";
import { useRiskControlState as We, useConfirmAction as me, useLiveMonitorState as Se } from "../../react.js";
import { u as Dn, M as q, a as wn } from "../../chunks/useAsyncAction.BxAgRz5E.js";
import { S as $e } from "../../chunks/SlotRenderer.oN7HTB7W.js";
import { c as Un, i as kn } from "../../chunks/user-action-dropdown.mpLYb6KT.js";
import { A as _e } from "../../chunks/AnchorAvatar.Cpzva6Ua.js";
import { createPortal as Pn } from "react-dom";
import { p as Bn, g as xn, b as Fn } from "../../chunks/columns.DCEilkva.js";
import { A as Oe, F as Vn } from "../../chunks/ActionButtons.Cfkno1zE.js";
function Wn() {
  const [a, r] = w(""), [s, c] = w(""), C = R((l, m) => {
    l === "success" ? (r(m), setTimeout(() => r(""), 3e3)) : (c(m), setTimeout(() => c(""), 3e3));
  }, []);
  return {
    successMsg: a,
    errorMsg: s,
    showMessage: C
  };
}
function $n({
  liveControlSlots: a,
  liveInfo: r,
  currentLive: s,
  liveAnchorAvatar: c,
  liveAnchorName: C,
  isVoiceLive: l,
  isMockMode: m,
  liveEndedOverlayVisible: u,
  t: f
}) {
  return /* @__PURE__ */ i("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ e($e, { slot: a?.beforeLiveInfo, props: { liveInfo: r } }),
    /* @__PURE__ */ i("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        _e,
        {
          className: "anchor-avatar",
          src: c,
          name: C,
          title: C
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: u ? f(n.LIVE_ENDED) : s?.liveName || r?.liveName || f(n.LOADING) })
    ] }),
    /* @__PURE__ */ e("div", { className: "video-stage", children: /* @__PURE__ */ i("div", { className: `player-container${l ? " player-container-voice" : ""}`, children: [
      m ? r?.coverUrl ? /* @__PURE__ */ e("div", { className: "mock-cover-preview", children: /* @__PURE__ */ e(
        "img",
        {
          src: r.coverUrl,
          alt: "cover",
          className: "mock-cover-img",
          onError: (M) => {
            M.currentTarget.src = ze;
          }
        }
      ) }) : null : /* @__PURE__ */ e(ln, {}),
      u && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ i("div", { className: "live-state-overlay-content", children: [
        /* @__PURE__ */ e("img", { src: Un, alt: "", className: "live-state-overlay-icon" }),
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
            children: f(n.LIVE_ENDED)
          }
        )
      ] }) })
    ] }) })
  ] });
}
const ke = pe("MessageList"), Gn = 12 * 1024, ce = { current: { giftList: [] } }, zn = Be.memo(
  ({ message: a, style: r }) => {
    const s = a.sender.userId, c = s === ce.current.anchorUserId, C = a.sender.nameCard || a.sender.userName || s;
    let l;
    if (a.messageType === 0)
      l = a.textContent || "";
    else if (a.businessId === "gift" && a.data)
      try {
        const f = JSON.parse(a.data), M = f.giftName || "", E = f.giftId;
        if (E) {
          const I = ce.current.giftList?.find((p) => p.id === E);
          I?.languageList ? l = He(I.languageList)?.name || M : l = M;
        } else
          l = M;
      } catch {
        l = a.data || "";
      }
    else
      l = a.data || "";
    const m = Bn(l);
    return /* @__PURE__ */ i(
      "div",
      {
        className: `message-item${c ? " host" : ""}`,
        style: r,
        onClick: (f) => {
          ce.current.onMessageClick?.(f, a);
        },
        children: [
          c && /* @__PURE__ */ e("span", { className: "message-badge", children: ce.current.t?.(n.HOST) || n.HOST }),
          /* @__PURE__ */ i("span", { className: "message-username", children: [
            C,
            ": "
          ] }),
          /* @__PURE__ */ e("span", { className: "message-content", children: m.length > 0 ? m.map((f, M) => f.type === "text" ? /* @__PURE__ */ e("span", { className: "message-text", children: f.text }, `t${M}`) : /* @__PURE__ */ e(
            "img",
            {
              src: f.src,
              alt: f.key,
              className: "message-emoji",
              loading: "lazy",
              draggable: !1
            },
            `e${M}-${f.key}`
          )) : /* @__PURE__ */ e("span", { className: "message-text", children: l }) })
        ]
      }
    );
  },
  (a, r) => a.message.liveId === r.message.liveId && a.message.sequence === r.message.sequence && a.style === r.style
), Hn = ({ liveId: a, anchorUserId: r, onMuteUser: s, onBanUser: c, mutedList: C = [], bannedList: l = [], roomJoined: m }) => {
  const { t: u } = ye(), { audienceList: f, disableSendMessage: M } = ve(), { giftList: E, fetchGiftList: I } = Dn();
  F(() => {
    I().catch(() => {
    });
  }, [I]), ce.current.giftList = E;
  const [p, g] = w(!1), [A, B] = w({ top: 0, left: 0 }), [_, $] = w(null), z = j(null), D = j(null), S = r;
  ce.current.t = u;
  const y = (L) => f?.find((v) => v.userId === L), U = (L) => {
    const v = y(L);
    if (v)
      return v.isMessageDisabled === !0;
    const P = C.find((d) => d.userId === L);
    return P ? P.endTime > Date.now() / 1e3 : !1;
  }, Y = (L) => {
    const v = l.find((P) => P.userId === L);
    return v ? v.endTime > Date.now() / 1e3 : !1;
  };
  F(() => {
    if (!p) return;
    const L = (v) => {
      setTimeout(() => {
        D.current && D.current.contains(v.target) || (g(!1), $(null));
      }, 100);
    };
    return document.addEventListener("mousedown", L), () => {
      document.removeEventListener("mousedown", L);
    };
  }, [p]);
  const k = R((L, v) => {
    if (L.stopPropagation(), Number(v.sender.userRole) !== 2 || gn(a || "", v.sender.userId))
      return;
    const d = L.target.closest(".message-item");
    if (!d)
      return;
    const V = d.getBoundingClientRect(), ee = V.bottom + 4, G = Math.min(V.left, window.innerWidth - 160);
    B({ top: ee, left: Math.max(0, G) }), $(v), g(!0);
  }, [a]);
  F(() => {
    ce.current.anchorUserId = S, ce.current.onMessageClick = k;
  });
  const O = () => {
    if (_ && c) {
      const L = _.sender.userId;
      if (S && L === Ie(S)) {
        g(!1), $(null);
        return;
      }
      if (we(L, f)) {
        g(!1), $(null);
        return;
      }
      const v = _.sender.userName || _.sender.nameCard || _.sender.userId, P = Y(L);
      c(L, v, P);
    }
    g(!1), $(null);
  }, H = async () => {
    if (!_) return;
    const L = _.sender.userId;
    if (S && L === Ie(S)) {
      g(!1), $(null);
      return;
    }
    if (we(L, f)) {
      g(!1), $(null);
      return;
    }
    const v = _.sender.userName || _.sender.nameCard || _.sender.userId, P = U(L);
    try {
      M ? (await M({ userId: L, isDisable: !P }), ke.info("toggleMute", P ? "Unmute successful" : "Mute successful")) : s && s(L, v, P);
    } catch (d) {
      ke.error("general", "SDK mute failed, using fallback method:", d), s && s(L, v, P);
    }
    g(!1), $(null);
  };
  return /* @__PURE__ */ i(
    "div",
    {
      className: "message-list-container",
      ref: z,
      children: [
        /* @__PURE__ */ e("div", { className: "message-list-scroll-area barrage-list-wrapper", children: /* @__PURE__ */ e(
          dn,
          {
            Message: zn
          }
        ) }),
        m && /* @__PURE__ */ e(
          un,
          {
            placeholder: u(n.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
            disabled: !a,
            maxLength: Gn,
            autoFocus: !1
          }
        ),
        p && _ && Pn(
          /* @__PURE__ */ i(
            "div",
            {
              ref: D,
              className: "user-action-dropdown",
              style: {
                position: "fixed",
                top: A.top,
                left: A.left,
                zIndex: 9999
              },
              children: [
                /* @__PURE__ */ e("button", { className: "dropdown-item", onClick: H, children: U(_.sender.userId) ? /* @__PURE__ */ i(se, { children: [
                  /* @__PURE__ */ e(Ae, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: u(n.UNMUTE) })
                ] }) : /* @__PURE__ */ i(se, { children: [
                  /* @__PURE__ */ e(Fe, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: u(n.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: O, children: Y(_.sender.userId) ? /* @__PURE__ */ i(se, { children: [
                  /* @__PURE__ */ e(Ze, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: u(n.UNBAN) })
                ] }) : /* @__PURE__ */ i(se, { children: [
                  /* @__PURE__ */ e(Ve, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: u(n.BAN) })
                ] }) })
              ]
            }
          ),
          document.body
        )
      ]
    }
  );
}, Kn = Be.memo(Hn);
function qn({
  mutedModalVisible: a,
  bannedModalVisible: r,
  mutedList: s,
  bannedList: c,
  memberListLoading: C,
  unmutingUserId: l,
  unbanningUserId: m,
  getUserAvatar: u,
  getUserNameFromCache: f,
  onMutedModalClose: M,
  onBannedModalClose: E,
  onUnmuteFromList: I,
  onUnbanFromList: p,
  t: g
}) {
  return /* @__PURE__ */ i(se, { children: [
    /* @__PURE__ */ e(
      Ee,
      {
        visible: a,
        header: g(n.MUTED_LIST),
        onClose: M,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(ne, { shape: "round", variant: "outline", onClick: M, children: g(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: C ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(n.LOADING) }) : s.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(n.NO_MUTED_MEMBERS) }) : /* @__PURE__ */ i("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ e("th", { children: g(n.USER) }),
            /* @__PURE__ */ e("th", { children: g(n.UNMUTE_TIME) }),
            /* @__PURE__ */ e("th", { children: g(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: s.map((A) => {
            const B = f(A.userId), _ = l === A.userId;
            return /* @__PURE__ */ i("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ i("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  _e,
                  {
                    className: "member-table-avatar",
                    src: u(A.userId),
                    name: B
                  }
                ),
                /* @__PURE__ */ e(oe, { content: B, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: B }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: A.endTime > 0 ? new Date(A.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: _ ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: g(n.UNMUTING) }) : /* @__PURE__ */ e(
                Oe,
                {
                  actions: [
                    {
                      key: "unmute",
                      label: g(n.UNMUTE),
                      onClick: () => I(A.userId, B)
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
      Ee,
      {
        visible: r,
        header: g(n.BANNED_LIST),
        onClose: E,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(ne, { shape: "round", variant: "outline", onClick: E, children: g(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: C ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(n.LOADING) }) : c.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: g(n.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ i("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ i("tr", { children: [
            /* @__PURE__ */ e("th", { children: g(n.USER) }),
            /* @__PURE__ */ e("th", { children: g(n.BAN_LIFT_TIME) }),
            /* @__PURE__ */ e("th", { children: g(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: c.map((A) => {
            const B = f(A.userId), _ = m === A.userId;
            return /* @__PURE__ */ i("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ i("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  _e,
                  {
                    className: "member-table-avatar",
                    src: u(A.userId),
                    name: B
                  }
                ),
                /* @__PURE__ */ e(oe, { content: B, placement: "top", showArrow: !1, children: /* @__PURE__ */ e("span", { className: "member-table-user-name", children: B }) })
              ] }) }),
              /* @__PURE__ */ e("td", { className: "member-table-time", children: A.endTime > 0 ? new Date(A.endTime * 1e3).toLocaleString() : "-" }),
              /* @__PURE__ */ e("td", { className: "member-table-action", children: _ ? /* @__PURE__ */ e("button", { className: "list-action-button", disabled: !0, children: g(n.UNBANNING) }) : /* @__PURE__ */ e(
                Oe,
                {
                  actions: [
                    {
                      key: "unban",
                      label: g(n.UNBAN),
                      onClick: () => p(A.userId, B)
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
const Pe = pe("MemberMgmt");
function jn(a, r, s, c) {
  const { opSuccess: C } = fe(r), {
    mutedList: l,
    bannedList: m,
    memberLoading: u,
    fetchMutedList: f,
    fetchBannedList: M,
    muteMember: E,
    unmuteMember: I,
    banMember: p,
    unbanMember: g
  } = We({ liveId: a || "", pageSize: 20 }), [A, B] = w([]), [_, $] = w([]), [z, D] = w(!1), [S, y] = w(null), [U, Y] = w(null), k = j(null), O = j(null), [H, L] = w(null), [v, P] = w(null);
  F(() => {
    Array.isArray(l) && B(l);
  }, [l]), F(() => {
    Array.isArray(m) && $(m);
  }, [m]);
  const d = (t, o) => {
    t === "success" ? q.success(o) : q.error(o);
  }, V = R(async (t, o) => {
    try {
      await I({ memberAccounts: [t] }), d("success", C(n.UNMUTE, o)), await f();
    } catch (b) {
      const { code: K, info: Q } = ue(b), Z = K ? Ce(K, Q) : (b instanceof Error ? b.message : "") || r(n.UNKNOWN_HOST);
      d("error", `【${r(n.UNMUTE)}】${r(n.OPERATION_FAILED, { error: Z })}`);
    }
  }, [I, r, f]), ee = me({
    operationName: r(n.MUTE),
    action: async () => {
      const t = k.current;
      if (!t) throw new Error("No target");
      await E({ memberAccounts: [t.userId], muteTime: En });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.MUTE) }),
      content: k.current ? r(n.MUTE_CONFIRM_CONTENT, { name: k.current.userName }) : ""
    },
    onSuccess: async () => {
      const t = k.current;
      d("success", C(n.MUTE, t?.userName || "")), await ie(), k.current = null, L(null);
    }
  }), G = R((t, o, b) => {
    if (a) {
      if (c) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      Ue(t, s) || (b ? V(t, o) : (k.current = { userId: t, userName: o }, L({ userId: t, userName: o })));
    }
  }, [a, s, V, c, r]), X = R(async (t, o) => {
    try {
      await g({ memberAccounts: [t] }), d("success", C(n.UNBAN, o)), await M();
    } catch (b) {
      const { code: K, info: Q } = ue(b), Z = K ? Ce(K, Q) : (b instanceof Error ? b.message : "") || r(n.UNKNOWN_HOST);
      d("error", `【${r(n.UNBAN)}】${r(n.OPERATION_FAILED, { error: Z })}`);
    }
  }, [g, r, M]), N = me({
    operationName: r(n.BAN),
    action: async () => {
      const t = O.current;
      if (!t) throw new Error("No target");
      await p({ memberAccounts: [t.userId], duration: pn });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.BAN) }),
      content: O.current ? r(n.BAN_CONFIRM_CONTENT, { name: O.current.userName }) : ""
    },
    onSuccess: async () => {
      const t = O.current;
      d("success", C(n.BAN, t?.userName || "")), await T(), O.current = null, P(null);
    }
  }), x = R((t, o, b) => {
    if (a) {
      if (c) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      Ue(t, s) || (b ? X(t, o) : (O.current = { userId: t, userName: o }, P({ userId: t, userName: o })));
    }
  }, [a, s, X, c, r]), J = j(ee);
  J.current = ee;
  const te = j(N);
  te.current = N, F(() => {
    H && J.current.requestConfirm();
  }, [H]), F(() => {
    v && te.current.requestConfirm();
  }, [v]);
  const re = R(async (t, o) => {
    if (a) {
      if (c) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      if (!S) {
        y(t);
        try {
          await V(t, o || t);
        } finally {
          y(null);
        }
      }
    }
  }, [a, V, c, r, S]), ae = R(async (t, o) => {
    if (a) {
      if (c) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      if (!U) {
        Y(t);
        try {
          await X(t, o || t);
        } finally {
          Y(null);
        }
      }
    }
  }, [a, X, c, r, U]), ie = R(async () => {
    if (a) {
      D(!0);
      try {
        const t = await f();
        B(Array.isArray(t) ? t : []);
      } catch (t) {
        Pe.error("fetchMutedList", "获取禁言列表失败", t);
        const { code: o, info: b } = ue(t), K = o ? Ce(o, b) : (t instanceof Error ? t.message : "") || r(n.UNKNOWN_HOST);
        d("error", r(n.FETCH_MUTED_LIST_FAILED, { error: K }));
      } finally {
        D(!1);
      }
    }
  }, [a, r, f]), T = R(async () => {
    if (a) {
      D(!0);
      try {
        const t = await M();
        $(Array.isArray(t) ? t : []);
      } catch (t) {
        Pe.error("fetchBannedList", "获取封禁列表失败", t);
        const { code: o, info: b } = ue(t), K = o ? Ce(o, b) : (t instanceof Error ? t.message : "") || r(n.UNKNOWN_HOST);
        d("error", r(n.FETCH_BANNED_LIST_FAILED, { error: K }));
      } finally {
        D(!1);
      }
    }
  }, [a, r, M]), h = R((t) => A.some((o) => o.userId === t), [A]);
  return {
    mutedList: A,
    bannedList: _,
    memberListLoading: z,
    unmutingUserId: S,
    unbanningUserId: U,
    fetchMutedList: ie,
    fetchBannedList: T,
    handleMuteAudience: G,
    handleBanAudience: x,
    handleUnmuteFromList: re,
    handleUnbanFromList: ae,
    isUserMuted: h,
    muteConfirmDialog: ee.confirmDialog,
    banConfirmDialog: N.confirmDialog,
    muteAction: ee,
    banAction: N
  };
}
const Yn = 160;
function Jn({
  liveId: a,
  activeTab: r,
  onActiveTabChange: s,
  disabled: c,
  currentUserId: C,
  roomJoined: l = !1
}) {
  const { t: m } = ye(), { currentLive: u, updateLive: f } = Se(), M = u?.liveOwner?.userId || "", E = jn(a, m, M, c), { audienceList: I } = ve(), p = u?.isMessageDisabled === !0, [g, A] = w(!1), [B, _] = w(!1), $ = R((N) => {
    if (!c && N !== p) {
      if (!N) {
        A(!0), f({ liveId: a, isMessageDisabled: !1 }).finally(() => A(!1));
        return;
      }
      _(!0);
    }
  }, [c, p, a, f]), z = R(() => {
    A(!0), f({ liveId: a, isMessageDisabled: !0 }).then(() => _(!1)).finally(() => A(!1));
  }, [a, f]), [D, S] = w(null), y = j(null), U = R((N, x, J) => {
    N.stopPropagation();
    const te = N.currentTarget.getBoundingClientRect();
    S({ userId: x, userName: J, x: te.right, y: te.bottom + 4 });
  }, []), Y = R(() => {
    S(null);
  }, []);
  F(() => {
    if (!D) return;
    const N = (x) => {
      y.current && !y.current.contains(x.target) && S(null);
    };
    return document.addEventListener("mousedown", N), () => document.removeEventListener("mousedown", N);
  }, [D]);
  const [k, O] = w(!1), [H, L] = w(!1), v = j(E.fetchMutedList);
  v.current = E.fetchMutedList;
  const P = j(E.fetchBannedList);
  P.current = E.fetchBannedList;
  const d = R(() => {
    v.current(), O(!0);
  }, []), V = R(() => {
    P.current(), L(!0);
  }, []);
  F(() => {
    r === "audience" && a && (v.current(), P.current());
  }, [r, a]);
  function ee(N) {
    const x = I.find((J) => J.userId === N);
    if (x && "avatarUrl" in x && typeof x.avatarUrl == "string")
      return x.avatarUrl;
  }
  function G(N) {
    const x = I.find((J) => J.userId === N);
    return x?.userName ? x.userName : N;
  }
  function X(N, x) {
    return N ? /* @__PURE__ */ e(
      Ee,
      {
        visible: !0,
        header: m(N.title),
        onClose: () => x.cancelConfirm(),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ i(se, { children: [
          /* @__PURE__ */ e(ne, { shape: "round", variant: "outline", disabled: x.loading, onClick: () => x.cancelConfirm(), children: m(n.CANCEL) }),
          /* @__PURE__ */ e(
            ne,
            {
              shape: "round",
              theme: "primary",
              loading: x.loading,
              onClick: () => x.executeWithConfirm(),
              children: m(N.confirmText ?? n.CONFIRM)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: m(N.content) } })
      },
      N.title
    ) : null;
  }
  return /* @__PURE__ */ i("div", { className: "left-interaction-card", children: [
    /* @__PURE__ */ i("div", { className: "interaction-tabs-header", children: [
      /* @__PURE__ */ i(
        be,
        {
          value: r,
          onChange: (N) => s(N),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(be.TabPanel, { value: "chat", label: m(n.MESSAGE_LIST) }),
            /* @__PURE__ */ e(be.TabPanel, { value: "audience", label: m(n.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ i("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          xe,
          {
            value: p,
            disabled: g || c,
            onChange: (N) => $(!!N)
          }
        ),
        /* @__PURE__ */ e("span", { className: "all-mute-label", children: m(n.ALL_MEMBER_MUTE) })
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
            p && /* @__PURE__ */ i("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ e("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ e("span", { children: m(n.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ e(
              Kn,
              {
                liveId: a,
                anchorUserId: M,
                mutedList: E.mutedList,
                bannedList: E.bannedList,
                roomJoined: l,
                onMuteUser: E.handleMuteAudience,
                onBanUser: E.handleBanAudience
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
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(mn, { height: "99%", children: ({ audience: N }) => {
              if (N.userId === C)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: m(n.ME) });
              const x = Ie(M);
              return N.userRole === 0 || N.userId === x ? null : /* @__PURE__ */ i("div", { className: "audience-row-actions", children: [
                E.isUserMuted(N.userId) && /* @__PURE__ */ e("span", { className: "audience-muted-badge", children: m(n.MUTED) }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: m(n.MORE_ACTIONS),
                    disabled: c,
                    onClick: (J) => {
                      J.stopPropagation(), U(
                        J,
                        N.userId,
                        N.userName || N.userId
                      );
                    },
                    children: /* @__PURE__ */ e(en, { size: 18 })
                  }
                )
              ] });
            } }) }),
            /* @__PURE__ */ i("div", { className: "audience-bottom-actions", children: [
              /* @__PURE__ */ i("button", { className: "audience-bottom-btn", disabled: c, onClick: d, children: [
                m(n.MUTED_LIST),
                " (",
                E.mutedList.length,
                ")"
              ] }),
              /* @__PURE__ */ i("button", { className: "audience-bottom-btn", disabled: c, onClick: V, children: [
                m(n.BANNED_LIST),
                " (",
                E.bannedList.length,
                ")"
              ] })
            ] })
          ]
        }
      )
    ] }),
    D && /* @__PURE__ */ i(
      "div",
      {
        ref: y,
        className: "user-action-dropdown",
        style: {
          position: "fixed",
          top: D.y,
          left: D.x - Yn
        },
        children: [
          /* @__PURE__ */ e("div", { className: "dropdown-header", children: D.userName }),
          /* @__PURE__ */ e("div", { className: "dropdown-divider" }),
          E.isUserMuted(D.userId) ? /* @__PURE__ */ i(
            "button",
            {
              className: "dropdown-item",
              disabled: c,
              onClick: () => {
                E.handleMuteAudience(D.userId, D.userName, !0), Y();
              },
              children: [
                /* @__PURE__ */ e(Ae, { size: 14 }),
                m(n.UNMUTE)
              ]
            }
          ) : /* @__PURE__ */ i(
            "button",
            {
              className: "dropdown-item",
              disabled: c,
              onClick: () => {
                E.handleMuteAudience(D.userId, D.userName, !1), Y();
              },
              children: [
                /* @__PURE__ */ e(Fe, { size: 14 }),
                m(n.MUTE)
              ]
            }
          ),
          /* @__PURE__ */ i(
            "button",
            {
              className: "dropdown-item danger",
              disabled: c,
              onClick: () => {
                E.handleBanAudience(D.userId, D.userName, !1), Y();
              },
              children: [
                /* @__PURE__ */ e(Ve, { size: 14 }),
                m(n.BAN)
              ]
            }
          )
        ]
      }
    ),
    X(E.muteConfirmDialog, E.muteAction),
    X(E.banConfirmDialog, E.banAction),
    B && /* @__PURE__ */ e(
      Ee,
      {
        visible: !0,
        header: m(n.ENABLE_ALL_MEMBER_MUTE),
        onClose: () => _(!1),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ i(se, { children: [
          /* @__PURE__ */ e(ne, { shape: "round", variant: "outline", onClick: () => _(!1), children: m(n.CANCEL) }),
          /* @__PURE__ */ e(ne, { shape: "round", theme: "primary", loading: g, onClick: z, children: m(n.CONFIRM_ENABLE) })
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: m(n.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT) } })
      }
    ),
    /* @__PURE__ */ e(
      qn,
      {
        mutedModalVisible: k,
        bannedModalVisible: H,
        mutedList: E.mutedList,
        bannedList: E.bannedList,
        memberListLoading: E.memberListLoading,
        unmutingUserId: E.unmutingUserId,
        unbanningUserId: E.unbanningUserId,
        getUserAvatar: ee,
        getUserNameFromCache: G,
        onMutedModalClose: () => O(!1),
        onBannedModalClose: () => L(!1),
        onUnmuteFromList: E.handleUnmuteFromList,
        onUnbanFromList: E.handleUnbanFromList,
        t: m
      }
    )
  ] });
}
const W = pe("LiveControl");
function Xn() {
  try {
    if (typeof window < "u" && window.__IDENTITY_MODE__ === "admin")
      return "admin";
  } catch {
  }
  return "audience";
}
function Qn({
  liveControlSlots: a,
  liveInfo: r,
  liveId: s,
  initialIsLiveEnded: c,
  activeTab: C,
  onActiveTabChange: l,
  onLiveEnded: m,
  t: u
}) {
  const { currentLive: f, setCurrentLive: M } = Se(), { joinLive: E, leaveLive: I, subscribeEvent: p, unsubscribeEvent: g } = fn(), { fetchAudienceList: A } = ve(), { login: B, loginUserInfo: _ } = hn(), { hideControlBar: $, showControlBar: z, setAutoHideDelay: D } = Nn(), [S, y] = w(!1), [U, Y] = w(""), [k, O] = w(!1), [H, L] = w(0), v = j(""), P = j(!1), d = j(null), V = j(null), ee = _?.userId || U, G = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, X = j(Xn()).current, N = 5, x = 2e3;
  F(() => {
    if (G) {
      W.info("LiveControlLeftPanel", "Mock mode, skipping TUILogin"), y(!0);
      return;
    }
    if (S) return;
    const h = async () => {
      try {
        let o;
        if (X === "audience" ? (W.info("LiveControlLeftPanel", "Audience mode, creating basic account..."), o = await Tn("audience")) : (W.info("LiveControlLeftPanel", "Admin mode, resolving account..."), o = await Ke()), !o || o.sdkAppId === 0) {
          W.warn("LiveControlLeftPanel", "No valid credentials, will retry"), t();
          return;
        }
        Y(o.userId), W.info("LiveControlLeftPanel", "TUILogin as:", X, "userId:", o.userId), await B({
          SDKAppID: o.sdkAppId,
          userID: o.userId,
          userSig: o.userSig
        }), W.info("LiveControlLeftPanel", "TUILogin success"), y(!0), L(0);
      } catch (o) {
        o?.code === 2025 || o?.message?.includes("重复登录") ? (W.info("LiveControlLeftPanel", "Already logged in"), y(!0), L(0)) : (W.error("LiveControlLeftPanel", "TUILogin failed:", o), t());
      }
    }, t = () => {
      if (H >= N) {
        W.error("LiveControlLeftPanel", `Login failed after ${N} retries, giving up`);
        return;
      }
      const o = x * (H + 1);
      W.info("LiveControlLeftPanel", `Scheduling login retry #${H + 1} in ${o}ms`), V.current = setTimeout(() => {
        L((b) => b + 1);
      }, o);
    };
    return h(), () => {
      V.current && (clearTimeout(V.current), V.current = null);
    };
  }, [G, S, B, H]), F(() => {
    if (G || !S || !U || X !== "audience") return;
    const h = Re() === "en-US" ? "admin" : "管理员";
    Ln(U, h).catch((t) => {
      W.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", t);
    });
  }, [G, S, U]), F(() => {
    if (s)
      return W.info("LiveControlLeftPanel", "Setting current live:", s), M(s), () => {
        W.info("LiveControlLeftPanel", "Clearing current live"), M(null);
      };
  }, [s, M]);
  const J = R(async () => {
    if (!(!s || !f || !S)) {
      if (c) {
        W.info("LiveControlLeftPanel", "Live already ended, skipping join");
        return;
      }
      if (v.current === s) {
        W.info("LiveControlLeftPanel", "Already joined live:", s);
        return;
      }
      try {
        W.info("LiveControlLeftPanel", "Joining live:", s, "as:", X);
        const h = Re();
        if (kn.callExperimentalAPI(JSON.stringify({
          api: "setCurrentLanguage",
          params: { language: h === "en-US" ? "en" : h === "zh-CN" ? "zh-Hans" : h }
        })).catch(() => {
        }), await E({ liveId: s }), v.current = s, O(!0), await A().catch((t) => {
          W.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", t);
        }), $(), D(0), !P.current && p) {
          const t = () => {
            W.info("LiveControlLeftPanel", "Live ended event received"), M(null), m?.();
          };
          d.current = t, p(De.ON_LIVE_ENDED, t), P.current = !0;
        }
        W.info("LiveControlLeftPanel", "Successfully joined live:", s), console.log("[LiveControlLeftPanel] adding live admin:", U, "room:", s), Cn(s, U).catch((t) => {
          console.error("[LiveControlLeftPanel] addLiveAdmin failed:", t), W.warn("LiveControlLeftPanel", "addLiveAdmin failed:", t);
        });
      } catch (h) {
        W.error("LiveControlLeftPanel", "Failed to join live:", h);
      }
    }
  }, [s, f, S, E, A, p, X, M, c, m]);
  F(() => {
    J();
  }, [J]), F(() => {
    v.current = "", O(!1);
  }, [s]);
  const te = j(!1);
  F(() => () => {
    if (te.current = !0, W.info("LiveControlLeftPanel", "Component unmounting, cleaning up"), P.current && g && d.current && (g(De.ON_LIVE_ENDED, d.current), P.current = !1, d.current = null), v.current) {
      const h = v.current;
      v.current = "", I().catch((t) => {
        W.warn("LiveControlLeftPanel", "leaveLive on unmount failed for", h, t);
      });
    }
    z();
  }, [I, g, z]);
  const re = le(
    () => r?.anchor.avatarUrl || f?.liveOwner?.avatarUrl || "",
    [r?.anchor.avatarUrl, f?.liveOwner?.avatarUrl]
  ), ae = le(
    () => r?.anchor.nick || f?.liveOwner?.userName || u(n.UNKNOWN_ANCHOR),
    [r?.anchor.nick, f?.liveOwner?.userName, u]
  ), ie = le(
    () => f?.liveType === "Voice",
    [f?.liveType]
  );
  return /* @__PURE__ */ i("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      $n,
      {
        liveControlSlots: a,
        liveInfo: r,
        currentLive: f,
        liveAnchorAvatar: re,
        liveAnchorName: ae,
        isVoiceLive: ie,
        isMockMode: G,
        liveEndedOverlayVisible: c || !f && !G,
        t: u
      }
    ),
    /* @__PURE__ */ e(
      Jn,
      {
        liveId: s,
        activeTab: C,
        onActiveTabChange: l,
        disabled: c ?? !1,
        currentUserId: ee,
        roomJoined: k
      }
    )
  ] });
}
const Zn = (a, r, s) => {
  const c = Array.from({ length: r }, () => 0);
  return a.forEach((C, l) => {
    const m = l % r;
    c[m] = Math.max(c[m], C);
  }), c.reduce((C, l) => C + l, 0) + s * (r - 1);
}, et = (a) => {
  const r = Array.from(a.querySelectorAll(":scope > .stat-bar-item")), s = document.createElement("div");
  s.style.position = "absolute", s.style.left = "-99999px", s.style.top = "0", s.style.visibility = "hidden", s.style.pointerEvents = "none", s.style.width = "max-content", document.body.appendChild(s);
  const c = r.map((C) => {
    const l = C.cloneNode(!0);
    return l.style.width = "max-content", l.style.maxWidth = "none", s.appendChild(l), Math.ceil(l.getBoundingClientRect().width);
  });
  return s.remove(), c;
}, nt = (a) => {
  if (a.clientWidth <= 0) return;
  const r = et(a);
  if (!r.length) return;
  const s = parseFloat(getComputedStyle(a).columnGap) || 0, c = a.clientWidth, C = [7, 4, 3, 2, 1].find((l) => Zn(r, l, s) <= c + 1) || 1;
  a.style.setProperty("--stats-columns", String(C));
}, tt = (a) => a >= 1e4 ? (a / 1e4).toFixed(1) + "w" : a.toLocaleString(), rt = (a, r) => {
  a < 0 && (a = 0);
  const s = Math.floor(a / 86400), c = Math.floor(a % 86400 / 3600), C = Math.floor(a % 3600 / 60), l = a % 60, m = `${c.toString().padStart(2, "0")}:${C.toString().padStart(2, "0")}:${l.toString().padStart(2, "0")}`;
  return s > 0 ? `${s}${r(n.DAYS)} ${m}` : m;
}, at = (a) => {
  const r = new Date(a), s = String(r.getMonth() + 1).padStart(2, "0"), c = String(r.getDate()).padStart(2, "0"), C = String(r.getHours()).padStart(2, "0"), l = String(r.getMinutes()).padStart(2, "0"), m = String(r.getSeconds()).padStart(2, "0");
  return `${s}-${c} ${C}:${l}:${m}`;
};
function ot({
  liveInfo: a,
  audienceCount: r,
  liveDuration: s,
  interactionRate: c,
  updateTimeText: C,
  t: l
}) {
  const m = j(null);
  return F(() => {
    const u = m.current;
    if (!u) return;
    let f = null;
    const M = () => {
      f !== null && cancelAnimationFrame(f), f = requestAnimationFrame(() => {
        f = null, nt(u);
      });
    }, E = new ResizeObserver(M);
    E.observe(u);
    const I = new MutationObserver(M);
    return I.observe(u, { childList: !0, subtree: !0, characterData: !0 }), M(), () => {
      E.disconnect(), I.disconnect(), f !== null && cancelAnimationFrame(f);
    };
  }, []), /* @__PURE__ */ i("div", { className: "sidebar-stats-card", children: [
    /* @__PURE__ */ i("div", { className: "stats-card-header", children: [
      /* @__PURE__ */ i("div", { className: "stats-header-left", children: [
        /* @__PURE__ */ e("h3", { children: l(n.LIVE_DATA_CONTROL) }),
        /* @__PURE__ */ i("span", { className: "live-status-tag", children: [
          /* @__PURE__ */ e("span", { className: "live-status-dot" }),
          l(n.LIVE_NOW),
          /* @__PURE__ */ e("span", { className: "live-duration-text", children: rt(s, l) })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: "update-time", children: l(n.UPDATED_AT, { time: C }) })
    ] }),
    /* @__PURE__ */ i("div", { ref: m, className: "stats-bar-design", children: [
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.CURRENT_VIEWERS),
          /* @__PURE__ */ e(oe, { content: l(n.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: tt(a?.onlineCount ?? r ?? 0) })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.COMMENT_COUNT),
          /* @__PURE__ */ e(oe, { content: l(n.COMMENT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.commentCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.COMMENT_USERS),
          /* @__PURE__ */ e(oe, { content: l(n.COMMENT_USERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.viewCount?.toLocaleString() ?? "0" })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.INTERACTION_RATE),
          /* @__PURE__ */ e(oe, { content: l(n.INTERACTION_RATE_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: c })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.TOTAL_GIFT_AMOUNT),
          /* @__PURE__ */ e(oe, { content: l(n.TOTAL_GIFT_AMOUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftAmount?.toFixed(2) ?? "0.00" })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.GIFT_COUNT),
          /* @__PURE__ */ e(oe, { content: l(n.GIFT_COUNT_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftCount ?? 0 })
      ] }),
      /* @__PURE__ */ i("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ i("div", { className: "stat-label", children: [
          l(n.GIFT_SENDERS),
          /* @__PURE__ */ e(oe, { content: l(n.GIFT_SENDERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: a?.stats?.giftUserCount ?? 0 })
      ] })
    ] })
  ] });
}
function it({
  moderationMode: a = "cloud",
  moderationList: r,
  moderationLoading: s,
  moderationPage: c,
  moderationTotal: C,
  moderationTotalPages: l,
  moderationSelectedIds: m,
  isAllOnPageSelected: u,
  customModerationToggleEnabled: f,
  onCustomToggleChange: M,
  updateTimeText: E,
  disabled: I = !1,
  onRefresh: p,
  onPageChange: g,
  onBulkApprove: A,
  onBulkDelete: B,
  onToggleSelectOne: _,
  onToggleSelectAll: $,
  onRelease: z,
  onDelete: D,
  onOpenDropdown: S,
  t: y
}) {
  const U = a === "custom", Y = le(
    () => xn({ hideTypeColumn: U }).map((k) => ({
      ...k,
      title: k.i18nKey ? y(k.i18nKey) : "",
      ...k.key === "check" ? {
        headerRender: () => /* @__PURE__ */ e(
          "input",
          {
            type: "checkbox",
            checked: u,
            disabled: I,
            onChange: $
          }
        )
      } : {},
      render: (() => {
        switch (k.key) {
          case "check":
            return (O) => /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                checked: m.includes(O.id),
                disabled: I,
                onChange: () => _(O.id)
              }
            );
          case "userId":
            return (O) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: O.userId }) });
          case "content":
            return (O) => /* @__PURE__ */ e("span", { title: O.content, children: O.content });
          case "type":
            return (O) => /* @__PURE__ */ e("span", { className: "moderation-type-text", children: y(O.type) });
          case "createdAtMs":
            return (O) => at(O.createdAtMs);
          case "action":
            return (O) => {
              const H = [
                { key: "approve", label: y(n.APPROVE), onClick: () => z(O) },
                { key: "delete", label: y(n.DELETE), danger: !0, onClick: () => D(O) }
              ];
              return U || H.push({ key: "more", label: y(n.MORE), suffixCaret: !0, onClick: (L) => S(L, O) }), /* @__PURE__ */ e(
                Oe,
                {
                  disabled: I,
                  actions: H
                }
              );
            };
          default:
            return;
        }
      })()
    })),
    [y, u, I, m, $, _, z, D, S, U]
  );
  return /* @__PURE__ */ i("div", { className: "moderation-card", children: [
    /* @__PURE__ */ i("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ i("div", { className: "moderation-header-left", children: [
        !U && /* @__PURE__ */ e("h3", { children: y(n.CONTENT_MODERATION) }),
        U && /* @__PURE__ */ i("label", { className: "moderation-toggle-label", style: { display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12 }, children: [
          /* @__PURE__ */ e(
            xe,
            {
              size: "small",
              value: f,
              disabled: I,
              onChange: (k) => M(k)
            }
          ),
          /* @__PURE__ */ e("span", { style: { fontSize: 13 }, children: y(n.CUSTOM_MODERATION_TOGGLE) })
        ] }),
        /* @__PURE__ */ e(
          ne,
          {
            theme: "primary",
            shape: "round",
            onClick: A,
            disabled: I || m.length <= 1,
            icon: /* @__PURE__ */ e(Ae, { style: { width: 14, height: 14 } }),
            children: y(n.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          ne,
          {
            theme: "primary",
            shape: "round",
            onClick: B,
            disabled: I || m.length <= 1,
            icon: /* @__PURE__ */ e(nn, { style: { width: 14, height: 14 } }),
            children: y(n.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ i("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: y(n.UPDATED_AT, { time: E }) }),
        /* @__PURE__ */ e(
          ne,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(tn, {}),
            loading: s,
            disabled: I,
            onClick: p,
            children: y(n.REFRESH)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i("div", { className: "moderation-table-wrapper", children: [
      /* @__PURE__ */ e(
        Vn,
        {
          columns: Y,
          data: r,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: y(n.MODERATION_EMPTY) }) })
        }
      ),
      r.length > 0 && /* @__PURE__ */ i("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: y(n.TOTAL_ITEMS, { count: C, total: C }) }),
        /* @__PURE__ */ i("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: I || c <= 1,
              onClick: () => g(c - 1),
              "aria-label": y(n.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(rn, { style: { width: 14 } })
            }
          ),
          Fn(c, l).map(
            (k, O) => k === "..." ? /* @__PURE__ */ e("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${O}`) : /* @__PURE__ */ e(
              "button",
              {
                className: `page-num ${k === c ? "active" : ""}`,
                disabled: I,
                onClick: () => g(k),
                children: k
              },
              k
            )
          ),
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: c >= l,
              onClick: () => g(c + 1),
              "aria-label": y(n.NEXT_PAGE),
              children: /* @__PURE__ */ e(an, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Me = pe("Moderation");
function st(a, r, s, c) {
  const {
    moderationMode: C,
    customModerationToggleEnabled: l,
    updateCustomModerationToggleEnabled: m,
    fetchTextModerationList: u,
    approveTextModerationItems: f,
    bypassCorrectionKeyword: M,
    deleteModerationItems: E
  } = We({ liveId: a || "", pageSize: Te }), I = C === "custom", [p, g] = w([]), [A, B] = w(!1), [_, $] = w(1), [z, D] = w(0), [S, y] = w([]), [U, Y] = w(null), [k, O] = w(null), H = le(() => An(z, Te), [z]), L = R(
    async (T = 1) => {
      if (a) {
        B(!0);
        try {
          const h = Math.max(1, T), t = vn(c), o = await u({
            pageNum: h,
            pageSize: Te,
            startTime: t,
            violationOnly: !I
            // custom 模式不过滤 violationOnly
          });
          let b = o.list || [];
          if (I) {
            const K = [...b].sort((Q, Z) => Z.createdAtMs - Q.createdAtMs);
            g(K), D(o.total || 0);
          } else {
            b = await bn(b);
            const K = await Mn(), Z = [...In(b)].sort((Le, Ge) => Ge.createdAtMs - Le.createdAtMs);
            g(Z), D(Math.max(0, (o.total || 0) - K));
          }
          $(h), y((K) => he(K.filter((Q) => b.some((Z) => Z.id === Q))));
        } catch (h) {
          Me.error("moderation", `load failed (ErrorCode: ${h?.ErrorCode ?? h?.code ?? h?.errorCode ?? "N/A"}):`, h);
          const t = ue(h).info || h.message || r(n.UNKNOWN_ERROR);
          q.error(`【${r(n.REFRESH)}${r(n.CONTENT_MODERATION)}】${r(n.OPERATION_FAILED, { error: t })}`);
        } finally {
          B(!1);
        }
      }
    },
    [a, r, u, c, I]
  );
  F(() => {
    a && c != null && L(1);
  }, [a, c]);
  const v = R(async (T = !1) => {
    s || (await L(_), T || q.success(fe(r).opSuccess(n.REFRESH)));
  }, [L, _, r, s]), P = R(
    (T) => {
      T < 1 || T > H || T === _ || L(T);
    },
    [L, _, H]
  ), d = R(
    async (T) => {
      y((t) => t.filter((o) => !T.includes(o))), g((t) => t.filter((o) => !T.includes(o.id))), D((t) => Math.max(0, t - T.length));
      const h = _n(
        _,
        z,
        T.length,
        Te
      );
      await L(h);
    },
    [L, _, z]
  ), V = me({
    operationName: r(n.RELEASE_AND_RESEND),
    action: async () => {
      if (!U || !a) throw new Error("liveId is required");
      await f({
        ids: [U.id],
        items: [{ id: U.id, content: U.content, userId: U.userId }],
        liveId: a
      });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.RELEASE_AND_RESEND) }),
      content: r(n.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      U && await d([U.id]), Y(null);
    }
  }), ee = R((T) => {
    if (s) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    Y(T), V.requestConfirm();
  }, [V, s, r]), G = me({
    operationName: r(n.BYPASS_CORRECTION),
    action: async () => {
      if (!k) throw new Error("No target item");
      await M({ content: k.content });
    },
    confirm: {
      title: r(n.BYPASS_CORRECTION_DIALOG_TITLE),
      content: r(n.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      k && await d([k.id]), O(null);
    }
  }), X = R((T) => {
    if (s) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    O(T), G.requestConfirm();
  }, [G, s, r]), N = me({
    operationName: r(n.BULK_APPROVE),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const T = p.filter((o) => S.includes(o.id)).sort((o, b) => o.createdAtMs - b.createdAtMs), h = T.map((o) => o.id), t = T.map((o) => ({ id: o.id, content: o.content, userId: o.userId }));
      await f({ ids: h, items: t, liveId: a });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.BULK_APPROVE) }),
      content: r(n.BULK_APPROVE_CONFIRM_CONTENT)
    },
    onSuccess: async () => {
      const T = [...S];
      await d(T);
    }
  }), x = R(() => {
    if (s) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    if (S.length === 0) {
      q.warning(r(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    N.requestConfirm();
  }, [N, S, s, r]), J = R(
    async (T) => {
      if (s) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      try {
        await E([T.id]), q.info(fe(r).opSuccess(n.DELETE)), await d([T.id]);
      } catch (h) {
        Me.error("moderation", `delete failed (ErrorCode: ${h?.ErrorCode ?? h?.code ?? h?.errorCode ?? "N/A"}):`, h);
        const t = ue(h).info || h.message || r(n.UNKNOWN_ERROR);
        q.error(`【${r(n.DELETE)}${r(n.CONTENT_MODERATION)}】${fe(r).opFailed(n.DELETE, null, t)}`);
      }
    },
    [d, r, s]
  ), te = R(async () => {
    if (s) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    if (S.length === 0) {
      q.warning(r(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const T = [...S];
    try {
      await E(T), q.info(fe(r).opSuccess(n.DELETE)), await d(T);
    } catch (h) {
      Me.error("moderation", `bulk delete failed (ErrorCode: ${h?.ErrorCode ?? h?.code ?? h?.errorCode ?? "N/A"}):`, h);
      const t = ue(h).info || h.message || r(n.UNKNOWN_ERROR);
      q.error(`【${r(n.BULK_DELETE)}${r(n.CONTENT_MODERATION)}】${r(n.OPERATION_FAILED, { error: t })}`);
    }
  }, [S, d, r, s]), re = R((T) => {
    y((h) => h.includes(T) ? he(h.filter((t) => t !== T)) : he([...h, T]));
  }, []), ae = R(() => {
    y((T) => {
      const h = he(p.map((t) => t.id));
      return T.length >= h.length ? [] : h;
    });
  }, [p]), ie = le(() => {
    const T = he(p.map((h) => h.id));
    return On(S, T);
  }, [p, S]);
  return {
    moderationMode: C,
    customModerationToggleEnabled: l,
    updateCustomModerationToggleEnabled: m,
    moderationList: p,
    moderationLoading: A,
    moderationPage: _,
    moderationTotal: z,
    moderationTotalPages: H,
    moderationSelectedIds: S,
    isAllOnPageSelected: ie,
    releaseConfirmDialog: V.confirmDialog,
    bypassConfirmDialog: G.confirmDialog,
    bulkApproveConfirmDialog: N.confirmDialog,
    releaseAction: {
      executeWithConfirm: V.executeWithConfirm,
      cancelConfirm: V.cancelConfirm,
      loading: V.loading
    },
    bypassAction: {
      executeWithConfirm: G.executeWithConfirm,
      cancelConfirm: G.cancelConfirm,
      loading: G.loading
    },
    bulkApproveAction: {
      executeWithConfirm: N.executeWithConfirm,
      cancelConfirm: N.cancelConfirm,
      loading: N.loading
    },
    handleRefreshModeration: v,
    goToModerationPage: P,
    handleRelease: ee,
    handleBypassCorrection: X,
    handleDeleteModeration: J,
    handleBulkApprove: x,
    handleBulkDelete: te,
    toggleSelectOne: re,
    toggleSelectAll: ae
  };
}
const Ne = pe("LiveControl");
function It() {
  const { liveId: a } = Ye();
  F(() => (Ne.info("LiveControl", "✅ Component MOUNTED, liveId:", a), () => {
    Ne.info("LiveControl", "❌ Component UNMOUNTED, liveId:", a);
  }), []);
  const r = Je(), C = Xe().state?.from === "live-list" ? "/live-list" : "/live-monitor", m = qe().components?.liveControl, { t: u } = ye(), {
    fetchLiveDetail: f,
    fetchLiveStats: M,
    endLive: E
  } = Se(), { audienceCount: I } = ve();
  F(() => {
    I > 0 && g((t) => t && { ...t, onlineCount: I });
  }, [I]);
  const [p, g] = w(null), A = le(() => !p || Number(p?.activityStatus) === 2, [p?.activityStatus, p]), [B, _] = w("chat"), [$, z] = w(!0), { successMsg: D, errorMsg: S } = Wn(), y = me({
    operationName: u(n.FORCE_STOP),
    action: async () => {
      if (!p) throw new Error("liveInfo is null");
      return E(p.id || p.liveId);
    },
    confirm: {
      title: u(n.CONFIRM_ACTION_TITLE, { action: u(n.FORCE_STOP) }),
      content: u(n.FORCE_STOP_CONFIRM_CONTENT),
      confirmText: u(n.CONFIRM)
    },
    onSuccess: () => {
      r(C);
    }
  }), U = me({
    operationName: u(n.SEND_VIOLATION_WARNING),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const t = p?.liveName || a;
      await yn(a, {
        violationType: u(n.VIOLATION_TYPE_WARNING),
        violationContent: u(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: t }),
        handleSuggestion: u(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: u(n.CONFIRM_ACTION_TITLE, { action: u(n.SEND_VIOLATION_WARNING) }),
      content: u(n.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: u(n.CONFIRM)
    },
    errorMessage: fe(u).opFailed(n.OP_SEND)
  }), Y = R(() => {
    g((t) => t && { ...t, activityStatus: 2 });
  }, []), k = () => {
    U.requestConfirm();
  }, O = j(null), [H, L] = w(0), [v, P] = w(null), d = st(a, u, A, p?.createdAt);
  F(() => () => {
    a && Ne.info("LiveControl", "Component unmounting, liveId:", a);
  }, [a]);
  const V = wn({
    showError: !1,
    action: async () => a ? await f(a) : null,
    errorMessage: u(n.GET_ERROR_MESSAGE),
    onError: () => {
      z(!1);
    },
    onSuccess: (t) => {
      if (z(!1), !t) return;
      const o = t.anchor?.userId, b = Sn(t, o || "-"), K = Rn(t);
      if (g({
        liveId: t.liveId,
        id: t.liveId,
        liveName: t.liveName || u(n.UNNAMED_LIVE_SHORT),
        coverUrl: t.coverUrl || je,
        anchor: {
          userId: o || "",
          nick: b,
          avatarUrl: K
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
        const Q = t.createdAt > 1e12 ? t.createdAt : t.createdAt * 1e3;
        if (Q > 1e12) {
          const Z = Math.floor((Date.now() - Q) / 1e3);
          L(Z > 0 ? Z : 0);
        }
      }
      N();
    }
  }), ee = R(async () => {
    await V.execute();
  }, [V.execute]), [G, X] = w(() => {
    const t = /* @__PURE__ */ new Date();
    return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
  }), N = R(() => {
    const t = /* @__PURE__ */ new Date();
    X(`${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`);
  }, []), x = R(async () => {
    if (a)
      try {
        const t = await M(a);
        g((o) => o && {
          ...o,
          stats: t
        }), N();
      } catch (t) {
        Ne.error("LiveControl", "fetchStats failed:", t);
      }
  }, [a, N]), J = le(() => {
    const t = p?.stats?.viewCount ?? 0, o = p?.stats?.commentCount ?? 0;
    if (t <= 0) return "0%";
    const b = o / t * 100;
    return Math.min(b, 100).toFixed(1) + "%";
  }, [p?.stats?.viewCount, p?.stats?.commentCount]), te = 30, re = j(null), ae = j(!0), ie = R(() => {
    r(C);
  }, [r, C]), T = R(() => {
    P(null);
  }, []), h = R((t, o) => {
    t.preventDefault(), t.stopPropagation();
    const b = t.currentTarget.getBoundingClientRect();
    P({
      item: o,
      x: b.right,
      y: b.bottom + 4
    });
  }, []);
  return F(() => {
    const t = p?.createdAt;
    if (!t || t < 1e9 || Number(p?.activityStatus) === 2)
      return;
    const o = t > 1e12 ? t : t * 1e3, b = () => {
      const Q = Math.floor((Date.now() - o) / 1e3);
      L(Q > 0 ? Q : 0);
    };
    b();
    const K = window.setInterval(b, 1e3);
    return () => {
      window.clearInterval(K);
    };
  }, [p?.createdAt, p?.activityStatus]), F(() => {
    if (!v) return;
    const t = (o) => {
      O.current && !O.current.contains(o.target) && T();
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [T, v]), F(() => {
    if (B !== "audience") return;
    const t = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((Q) => {
        const Z = Q, Le = Z.textContent || "";
        Z.title !== Le && (Z.title = Le);
      });
    };
    t();
    const o = document.querySelector(".audience-list-area");
    if (!o) return;
    const b = new MutationObserver(t);
    return b.observe(o, { childList: !0, subtree: !0 }), () => b.disconnect();
  }, [B]), F(() => {
    if (a)
      return Ne.info("LiveControl", "Fetching room info for:", a), ae.current = !0, ee(), () => {
        ae.current = !1;
      };
  }, [a]), F(() => {
    if (!a || te === 0 || A) {
      re.current && (clearInterval(re.current), re.current = null);
      return;
    }
    return re.current = window.setInterval(() => {
      ae.current && (x(), d.moderationMode === "custom" && !d.customModerationToggleEnabled || d.handleRefreshModeration(!0));
    }, te * 1e3), () => {
      re.current && (clearInterval(re.current), re.current = null);
    };
  }, [a, te, A, x, d.handleRefreshModeration, d.moderationMode, d.customModerationToggleEnabled]), $ ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(Qe, { loading: !0, text: u(n.LOADING) }) }) : /* @__PURE__ */ i("div", { className: "live-control-container", children: [
    /* @__PURE__ */ i("div", { className: "toast-area", children: [
      D && /* @__PURE__ */ e("div", { className: "status-success", children: D }),
      S && /* @__PURE__ */ e("div", { className: "status-error", children: S })
    ] }),
    /* @__PURE__ */ i("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ i("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(ne, { shape: "circle", variant: "outline", className: "back-btn", onClick: ie, title: u(n.BACK_TO_LIST), icon: /* @__PURE__ */ e(on, { fill: "transparent", stroke: "currentColor", strokeWidth: 2 }) }),
        /* @__PURE__ */ e("h1", { children: u(n.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ i("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          ne,
          {
            variant: "text",
            theme: "warning",
            icon: /* @__PURE__ */ e(sn, { size: 16 }),
            disabled: A,
            onClick: k,
            children: u(n.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(ne, { variant: "text", theme: "danger", disabled: A, onClick: () => y.requestConfirm(), icon: /* @__PURE__ */ e(cn, {}), children: u(n.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ i("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Qn,
        {
          liveControlSlots: m,
          liveInfo: p,
          liveId: a || "",
          initialIsLiveEnded: A,
          activeTab: B,
          onActiveTabChange: _,
          onLiveEnded: Y,
          t: u
        }
      ),
      /* @__PURE__ */ i("aside", { className: "right-sidebar", children: [
        /* @__PURE__ */ e(
          ot,
          {
            liveInfo: p,
            audienceCount: I,
            liveDuration: H,
            interactionRate: J,
            updateTimeText: G,
            t: u
          }
        ),
        /* @__PURE__ */ e($e, { slot: m?.customControlPanel, props: { liveInfo: p } }),
        /* @__PURE__ */ e(
          it,
          {
            moderationMode: d.moderationMode,
            moderationList: d.moderationList,
            moderationLoading: d.moderationLoading,
            moderationPage: d.moderationPage,
            moderationTotal: d.moderationTotal,
            moderationTotalPages: d.moderationTotalPages,
            moderationSelectedIds: d.moderationSelectedIds,
            isAllOnPageSelected: d.isAllOnPageSelected,
            customModerationToggleEnabled: d.customModerationToggleEnabled,
            onCustomToggleChange: d.updateCustomModerationToggleEnabled,
            updateTimeText: G,
            disabled: A,
            onRefresh: async () => {
              await d.handleRefreshModeration(), N();
            },
            onPageChange: d.goToModerationPage,
            onBulkApprove: d.handleBulkApprove,
            onBulkDelete: d.handleBulkDelete,
            onToggleSelectOne: d.toggleSelectOne,
            onToggleSelectAll: d.toggleSelectAll,
            onRelease: d.handleRelease,
            onDelete: d.handleDeleteModeration,
            onOpenDropdown: h,
            t: u
          }
        )
      ] })
    ] }),
    v && d.moderationMode !== "custom" && /* @__PURE__ */ e(
      "div",
      {
        ref: O,
        className: "user-action-dropdown moderation-action-dropdown",
        style: {
          position: "fixed",
          top: v.y,
          left: v.x - 160
        },
        children: /* @__PURE__ */ i(
          "button",
          {
            className: "dropdown-item",
            disabled: A,
            onClick: () => {
              const t = v.item;
              T(), d.handleBypassCorrection(t);
            },
            children: [
              /* @__PURE__ */ e(Ae, { size: 14 }),
              u(n.BYPASS_CORRECTION)
            ]
          }
        )
      }
    ),
    (() => {
      const o = [
        { key: "forceStop", dialog: y.confirmDialog, action: y },
        { key: "violationWarning", dialog: U.confirmDialog, action: U },
        { key: "release", dialog: d.releaseConfirmDialog, action: d.releaseAction },
        ...d.moderationMode !== "custom" ? [
          { key: "bypass", dialog: d.bypassConfirmDialog, action: d.bypassAction }
        ] : [],
        { key: "bulkApprove", dialog: d.bulkApproveConfirmDialog, action: d.bulkApproveAction }
      ].find((b) => !!b.dialog);
      return !o || !o.dialog ? null : /* @__PURE__ */ e(
        Ee,
        {
          visible: !0,
          header: u(o.dialog.title),
          onClose: () => o.action.cancelConfirm(),
          width: ge.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ i(se, { children: [
            /* @__PURE__ */ e(ne, { shape: "round", variant: "outline", disabled: o.action.loading, onClick: () => o.action.cancelConfirm(), children: u(n.CANCEL) }),
            /* @__PURE__ */ e(
              ne,
              {
                shape: "round",
                theme: "primary",
                loading: o.action.loading,
                onClick: () => o.action.executeWithConfirm(),
                children: u(o.dialog.confirmText ?? n.CONFIRM)
              }
            )
          ] }),
          children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: u(o.dialog.content) } })
        }
      );
    })()
  ] });
}
export {
  It as default
};
