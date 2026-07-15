import { jsxs as s, jsx as e, Fragment as se } from "react/jsx-runtime";
import { I as n, ax as ze, g as Ce, k as He, an as ge, c as fe, x as ue, z as Le, q as Re, ab as Ke, l as qe, aD as je } from "../../chunks/layout.Br-W54NR.js";
import Be, { useState as w, useCallback as y, useEffect as V, useRef as j, useMemo as le } from "react";
import { useParams as Ye, useNavigate as Je, useLocation as Xe } from "react-router-dom";
import { Dialog as Ee, Tooltip as oe, Button as Z, Tabs as be, Switch as xe, Loading as Qe } from "tdesign-react";
import { CheckCircleIcon as Ae, ChatOffIcon as Fe, UserCheckedIcon as Ze, UserBlockedIcon as Ve, MoreIcon as en, InfoCircleIcon as de, CloseCircleIcon as nn, RefreshIcon as tn, ChevronLeftIcon as rn, ChevronRightIcon as an, ArrowLeftIcon as on, NotificationIcon as sn, StopCircleIcon as cn } from "tdesign-icons-react";
import { useUIKit as ye } from "@tencentcloud/uikit-base-component-react";
import { LiveView as ln, useLiveAudienceState as ve, BarrageList as dn, BarrageInput as un, LiveAudienceList as mn, useLiveListState as fn, useLoginState as hn, useLivePlayerState as Nn, LiveListEvent as De } from "tuikit-atomicx-react";
import { bg as gn, b8 as Ie, bb as we, l as En, bm as Ue, D as Cn, bQ as pn, a6 as Ln, bF as Tn, Y as Te, aj as An, ao as vn, aI as bn, aR as Mn, aB as In, b_ as he, ah as _n, bc as On, bN as yn, bE as Sn, bD as Rn } from "../../chunks/main-layout.1w0vpJq1.js";
import { useRiskControlState as We, useConfirmAction as me, useLiveMonitorState as Se } from "../../react.js";
import { u as Dn, M as q, a as wn } from "../../chunks/useAsyncAction.CJQgktvN.js";
import { S as $e } from "../../chunks/SlotRenderer.CuSOZ-rh.js";
import { c as Un, C as kn } from "../../chunks/user-action-dropdown.BWQSPxr1.js";
import { A as _e } from "../../chunks/AnchorAvatar.DPu0Iep0.js";
import { createPortal as Pn } from "react-dom";
import { p as Bn, g as xn, b as Fn } from "../../chunks/columns.Dtl_rF_k.js";
import { A as Oe, F as Vn } from "../../chunks/ActionButtons.Cfkno1zE.js";
function Wn() {
  const [a, r] = w(""), [c, d] = w(""), L = y((u, m) => {
    u === "success" ? (r(m), setTimeout(() => r(""), 3e3)) : (d(m), setTimeout(() => d(""), 3e3));
  }, []);
  return {
    successMsg: a,
    errorMsg: c,
    showMessage: L
  };
}
function $n({
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
  return /* @__PURE__ */ s("section", { className: "video-monitor-area", children: [
    /* @__PURE__ */ e($e, { slot: a?.beforeLiveInfo, props: { liveInfo: r } }),
    /* @__PURE__ */ s("div", { className: "live-header-external", children: [
      /* @__PURE__ */ e(
        _e,
        {
          className: "anchor-avatar",
          src: d,
          name: L,
          title: L
        }
      ),
      /* @__PURE__ */ e("span", { className: "live-title-text", children: l ? h(n.LIVE_ENDED) : c?.liveName || r?.liveName || h(n.LOADING) })
    ] }),
    /* @__PURE__ */ e("div", { className: "video-stage", children: /* @__PURE__ */ s("div", { className: `player-container${u ? " player-container-voice" : ""}`, children: [
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
      ) }) : null : /* @__PURE__ */ e(ln, {}),
      l && /* @__PURE__ */ e("div", { className: "live-state-overlay live-state-overlay--ended", children: /* @__PURE__ */ s("div", { className: "live-state-overlay-content", children: [
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
            children: h(n.LIVE_ENDED)
          }
        )
      ] }) })
    ] }) })
  ] });
}
const ke = Ce("MessageList"), Gn = 12 * 1024, ce = { current: { giftList: [] } }, zn = Be.memo(
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
    const m = Bn(u);
    return /* @__PURE__ */ s(
      "div",
      {
        className: `message-item${d ? " host" : ""}`,
        style: r,
        onClick: (h) => {
          ce.current.onMessageClick?.(h, a);
        },
        children: [
          d && /* @__PURE__ */ e("span", { className: "message-badge", children: ce.current.t?.(n.HOST) || n.HOST }),
          /* @__PURE__ */ s("span", { className: "message-username", children: [
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
), Hn = ({ liveId: a, anchorUserId: r, onMuteUser: c, onBanUser: d, mutedList: L = [], bannedList: u = [], roomJoined: m }) => {
  const { t: l } = ye(), { audienceList: h, disableSendMessage: _ } = ve(), { giftList: g, fetchGiftList: I } = Dn();
  V(() => {
    I().catch(() => {
    });
  }, [I]), ce.current.giftList = g;
  const [E, N] = w(!1), [A, x] = w({ top: 0, left: 0 }), [b, H] = w(null), $ = j(null), U = j(null), O = r;
  ce.current.t = l;
  const M = (p) => h?.find((v) => v.userId === p), P = (p) => {
    const v = M(p);
    if (v)
      return v.isMessageDisabled === !0;
    const R = L.find((f) => f.userId === p);
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
  const k = y((p, v) => {
    if (p.stopPropagation(), Number(v.sender.userRole) !== 2 || gn(a || "", v.sender.userId))
      return;
    const f = p.target.closest(".message-item");
    if (!f)
      return;
    const W = f.getBoundingClientRect(), re = W.bottom + 4, F = Math.min(W.left, window.innerWidth - 160);
    x({ top: re, left: Math.max(0, F) }), H(v), N(!0);
  }, [a]);
  V(() => {
    ce.current.anchorUserId = O, ce.current.onMessageClick = k;
  });
  const S = () => {
    if (b && d) {
      const p = b.sender.userId;
      if (O && p === Ie(O)) {
        N(!1), H(null);
        return;
      }
      if (we(p, h)) {
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
    if (O && p === Ie(O)) {
      N(!1), H(null);
      return;
    }
    if (we(p, h)) {
      N(!1), H(null);
      return;
    }
    const v = b.sender.userName || b.sender.nameCard || b.sender.userId, R = P(p);
    try {
      _ ? (await _({ userId: p, isDisable: !R }), ke.info("toggleMute", R ? "Unmute successful" : "Mute successful")) : c && c(p, v, R);
    } catch (f) {
      ke.error("general", "SDK mute failed, using fallback method:", f), c && c(p, v, R);
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
          dn,
          {
            Message: zn
          }
        ) }),
        m && /* @__PURE__ */ e(
          un,
          {
            placeholder: l(n.ENTER_MESSAGE_TO_SEND_AS_ADMIN),
            disabled: !a,
            maxLength: Gn,
            autoFocus: !1
          }
        ),
        E && b && Pn(
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
                  /* @__PURE__ */ e(Ae, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.UNMUTE) })
                ] }) : /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(Fe, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.MUTE) })
                ] }) }),
                /* @__PURE__ */ e("button", { className: "dropdown-item danger", onClick: S, children: z(b.sender.userId) ? /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(Ze, { size: 14 }),
                  /* @__PURE__ */ e("span", { children: l(n.UNBAN) })
                ] }) : /* @__PURE__ */ s(se, { children: [
                  /* @__PURE__ */ e(Ve, { size: 14 }),
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
}, Kn = Be.memo(Hn);
function qn({
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
  return /* @__PURE__ */ s(se, { children: [
    /* @__PURE__ */ e(
      Ee,
      {
        visible: a,
        header: N(n.MUTED_LIST),
        onClose: _,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(Z, { shape: "round", variant: "outline", onClick: _, children: N(n.CLOSE) }),
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
                  _e,
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
                Oe,
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
      Ee,
      {
        visible: r,
        header: N(n.BANNED_LIST),
        onClose: g,
        width: ge.WIDE,
        footer: /* @__PURE__ */ e(Z, { shape: "round", variant: "outline", onClick: g, children: N(n.CLOSE) }),
        children: /* @__PURE__ */ e("div", { className: "member-list-panel-modal", children: L ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(n.LOADING) }) : d.length === 0 ? /* @__PURE__ */ e("div", { className: "member-list-empty", children: N(n.NO_BANNED_MEMBERS) }) : /* @__PURE__ */ s("table", { className: "member-list-table", children: [
          /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ s("tr", { children: [
            /* @__PURE__ */ e("th", { children: N(n.USER) }),
            /* @__PURE__ */ e("th", { children: N(n.BAN_LIFT_TIME) }),
            /* @__PURE__ */ e("th", { children: N(n.ACTIONS) })
          ] }) }),
          /* @__PURE__ */ e("tbody", { children: d.map((A) => {
            const x = h(A.userId), b = m === A.userId;
            return /* @__PURE__ */ s("tr", { children: [
              /* @__PURE__ */ e("td", { className: "member-table-user", children: /* @__PURE__ */ s("div", { className: "member-table-user-cell", children: [
                /* @__PURE__ */ e(
                  _e,
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
                Oe,
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
const Pe = Ce("MemberMgmt");
function jn(a, r, c, d) {
  const { opSuccess: L } = fe(r), {
    mutedList: u,
    bannedList: m,
    fetchMutedList: l,
    fetchBannedList: h,
    muteMember: _,
    unmuteMember: g,
    banMember: I,
    unbanMember: E
  } = We({ liveId: a || "", pageSize: 20 }), [N, A] = w([]), [x, b] = w([]), [H, $] = w(!1), [U, O] = w(null), [M, P] = w(null), z = j(null), k = j(null), [S, K] = w(null), [p, v] = w(null);
  V(() => {
    Array.isArray(u) && A(u);
  }, [u]), V(() => {
    Array.isArray(m) && b(m);
  }, [m]);
  const R = (o, t) => {
    o === "success" ? q.success(t) : q.error(t);
  }, f = y(async (o, t) => {
    try {
      await g({ memberAccounts: [o] }), R("success", L(n.UNMUTE, t)), await l();
    } catch (i) {
      const { code: D, info: Q } = ue(i), X = D ? Le(D, Q) : (i instanceof Error ? i.message : "") || r(n.UNKNOWN_HOST);
      R("error", `【${r(n.UNMUTE)}】${r(n.OPERATION_FAILED, { error: X })}`);
    }
  }, [g, r, l]), W = me({
    operationName: r(n.MUTE),
    action: async () => {
      const o = z.current;
      if (!o) throw new Error("No target");
      await _({ memberAccounts: [o.userId], muteTime: En });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.MUTE) }),
      content: z.current ? r(n.MUTE_CONFIRM_CONTENT, { name: z.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = z.current;
      R("success", L(n.MUTE, o?.userName || "")), await ae(), z.current = null, K(null);
    }
  }), re = y((o, t, i) => {
    if (a) {
      if (d) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      Ue(o, c) || (i ? f(o, t) : (z.current = { userId: o, userName: t }, K({ userId: o, userName: t })));
    }
  }, [a, c, f, d, r]), F = y(async (o, t) => {
    try {
      await E({ memberAccounts: [o] }), R("success", L(n.UNBAN, t)), await h();
    } catch (i) {
      const { code: D, info: Q } = ue(i), X = D ? Le(D, Q) : (i instanceof Error ? i.message : "") || r(n.UNKNOWN_HOST);
      R("error", `【${r(n.UNBAN)}】${r(n.OPERATION_FAILED, { error: X })}`);
    }
  }, [E, r, h]), J = me({
    operationName: r(n.BAN),
    action: async () => {
      const o = k.current;
      if (!o) throw new Error("No target");
      await I({ memberAccounts: [o.userId], duration: Cn });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.BAN) }),
      content: k.current ? r(n.BAN_CONFIRM_CONTENT, { name: k.current.userName }) : ""
    },
    onSuccess: async () => {
      const o = k.current;
      R("success", L(n.BAN, o?.userName || "")), await ie(), k.current = null, v(null);
    }
  }), C = y((o, t, i) => {
    if (a) {
      if (d) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      Ue(o, c) || (i ? F(o, t) : (k.current = { userId: o, userName: t }, v({ userId: o, userName: t })));
    }
  }, [a, c, F, d, r]), B = j(W);
  B.current = W;
  const Y = j(J);
  Y.current = J, V(() => {
    S && B.current.requestConfirm();
  }, [S]), V(() => {
    p && Y.current.requestConfirm();
  }, [p]);
  const ne = y(async (o, t) => {
    if (a) {
      if (d) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      if (!U) {
        O(o);
        try {
          await f(o, t || o);
        } finally {
          O(null);
        }
      }
    }
  }, [a, f, d, r, U]), ee = y(async (o, t) => {
    if (a) {
      if (d) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      if (!M) {
        P(o);
        try {
          await F(o, t || o);
        } finally {
          P(null);
        }
      }
    }
  }, [a, F, d, r, M]), ae = y(async () => {
    if (a) {
      $(!0);
      try {
        const o = await l();
        A(Array.isArray(o) ? o : []);
      } catch (o) {
        Pe.error("fetchMutedList", "获取禁言列表失败", o);
        const { code: t, info: i } = ue(o), D = t ? Le(t, i) : (o instanceof Error ? o.message : "") || r(n.UNKNOWN_HOST);
        R("error", r(n.FETCH_MUTED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, r, l]), ie = y(async () => {
    if (a) {
      $(!0);
      try {
        const o = await h();
        b(Array.isArray(o) ? o : []);
      } catch (o) {
        Pe.error("fetchBannedList", "获取封禁列表失败", o);
        const { code: t, info: i } = ue(o), D = t ? Le(t, i) : (o instanceof Error ? o.message : "") || r(n.UNKNOWN_HOST);
        R("error", r(n.FETCH_BANNED_LIST_FAILED, { error: D }));
      } finally {
        $(!1);
      }
    }
  }, [a, r, h]), T = y((o) => N.some((t) => t.userId === o), [N]);
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
const Yn = 160;
function Jn({
  liveId: a,
  activeTab: r,
  onActiveTabChange: c,
  disabled: d,
  currentUserId: L,
  roomJoined: u = !1
}) {
  const { t: m } = ye(), { currentLive: l, updateLive: h } = Se(), _ = l?.liveOwner?.userId || "", g = jn(a, m, _, d), { audienceList: I } = ve(), E = l?.isMessageDisabled === !0, [N, A] = w(!1), [x, b] = w(!1), H = y((C) => {
    if (!d && C !== E) {
      if (!C) {
        A(!0), h({ liveId: a, isMessageDisabled: !1 }).finally(() => A(!1));
        return;
      }
      b(!0);
    }
  }, [d, E, a, h]), $ = y(() => {
    A(!0), h({ liveId: a, isMessageDisabled: !0 }).then(() => b(!1)).finally(() => A(!1));
  }, [a, h]), [U, O] = w(null), M = j(null), P = y((C, B, Y) => {
    C.stopPropagation();
    const ne = C.currentTarget.getBoundingClientRect();
    O({ userId: B, userName: Y, x: ne.right, y: ne.bottom + 4 });
  }, []), z = y(() => {
    O(null);
  }, []);
  V(() => {
    if (!U) return;
    const C = (B) => {
      M.current && !M.current.contains(B.target) && O(null);
    };
    return document.addEventListener("mousedown", C), () => document.removeEventListener("mousedown", C);
  }, [U]);
  const [k, S] = w(!1), [K, p] = w(!1), v = j(g.fetchMutedList);
  v.current = g.fetchMutedList;
  const R = j(g.fetchBannedList);
  R.current = g.fetchBannedList;
  const f = y(() => {
    v.current(), S(!0);
  }, []), W = y(() => {
    R.current(), p(!0);
  }, []);
  V(() => {
    r === "audience" && a && (v.current(), R.current());
  }, [r, a]);
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
      Ee,
      {
        visible: !0,
        header: m(C.title),
        onClose: () => B.cancelConfirm(),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(Z, { shape: "round", variant: "outline", disabled: B.loading, onClick: () => B.cancelConfirm(), children: m(n.CANCEL) }),
          /* @__PURE__ */ e(
            Z,
            {
              shape: "round",
              theme: "primary",
              loading: B.loading,
              onClick: () => B.executeWithConfirm(),
              children: m(C.confirmText ?? n.CONFIRM)
            }
          )
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: m(C.content) } })
      },
      C.title
    ) : null;
  }
  return /* @__PURE__ */ s("div", { className: "left-interaction-card", children: [
    /* @__PURE__ */ s("div", { className: "interaction-tabs-header", children: [
      /* @__PURE__ */ s(
        be,
        {
          value: r,
          onChange: (C) => c(C),
          className: "interaction-tabs",
          children: [
            /* @__PURE__ */ e(be.TabPanel, { value: "chat", label: m(n.MESSAGE_LIST) }),
            /* @__PURE__ */ e(be.TabPanel, { value: "audience", label: m(n.AUDIENCE_LIST) })
          ]
        }
      ),
      /* @__PURE__ */ s("div", { className: "all-mute-control-row", children: [
        /* @__PURE__ */ e(
          xe,
          {
            value: E,
            disabled: N || d,
            onChange: (C) => H(!!C)
          }
        ),
        /* @__PURE__ */ e("span", { className: "all-mute-label", children: m(n.ALL_MEMBER_MUTE) })
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
            E && /* @__PURE__ */ s("div", { className: "all-mute-banner", children: [
              /* @__PURE__ */ e("span", { className: "all-mute-banner-icon", children: "!" }),
              /* @__PURE__ */ e("span", { children: m(n.ALL_MEMBER_MUTE_ENABLED_BANNER) })
            ] }),
            /* @__PURE__ */ e(
              Kn,
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
          style: { display: r === "audience" ? "flex" : "none" },
          children: [
            /* @__PURE__ */ e("div", { className: "audience-list-area", children: /* @__PURE__ */ e(mn, { height: "99%", children: ({ audience: C }) => {
              if (C.userId === L)
                return /* @__PURE__ */ e("span", { className: "audience-me-tag", children: m(n.ME) });
              const B = Ie(_);
              return C.userRole === 0 || C.userId === B ? null : /* @__PURE__ */ s("div", { className: "audience-row-actions", children: [
                g.isUserMuted(C.userId) && /* @__PURE__ */ e("span", { className: "audience-muted-badge", children: m(n.MUTED) }),
                /* @__PURE__ */ e(
                  "button",
                  {
                    className: "audience-more-btn",
                    title: m(n.MORE_ACTIONS),
                    disabled: d,
                    onClick: (Y) => {
                      Y.stopPropagation(), P(
                        Y,
                        C.userId,
                        C.userName || C.userId
                      );
                    },
                    children: /* @__PURE__ */ e(en, { size: 18 })
                  }
                )
              ] });
            } }) }),
            /* @__PURE__ */ s("div", { className: "audience-bottom-actions", children: [
              /* @__PURE__ */ s("button", { className: "audience-bottom-btn", disabled: d, onClick: f, children: [
                m(n.MUTED_LIST),
                " (",
                g.mutedList.length,
                ")"
              ] }),
              /* @__PURE__ */ s("button", { className: "audience-bottom-btn", disabled: d, onClick: W, children: [
                m(n.BANNED_LIST),
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
          left: U.x - Yn
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
                /* @__PURE__ */ e(Ae, { size: 14 }),
                m(n.UNMUTE)
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
                /* @__PURE__ */ e(Fe, { size: 14 }),
                m(n.MUTE)
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
                /* @__PURE__ */ e(Ve, { size: 14 }),
                m(n.BAN)
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
        header: m(n.ENABLE_ALL_MEMBER_MUTE),
        onClose: () => b(!1),
        width: ge.CONFIRM,
        zIndex: 2600,
        footer: /* @__PURE__ */ s(se, { children: [
          /* @__PURE__ */ e(Z, { shape: "round", variant: "outline", onClick: () => b(!1), children: m(n.CANCEL) }),
          /* @__PURE__ */ e(Z, { shape: "round", theme: "primary", loading: N, onClick: $, children: m(n.CONFIRM_ENABLE) })
        ] }),
        children: /* @__PURE__ */ e("p", { dangerouslySetInnerHTML: { __html: m(n.ENABLE_ALL_MEMBER_MUTE_CONFIRM_CONTENT) } })
      }
    ),
    /* @__PURE__ */ e(
      qn,
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
        onMutedModalClose: () => S(!1),
        onBannedModalClose: () => p(!1),
        onUnmuteFromList: g.handleUnmuteFromList,
        onUnbanFromList: g.handleUnbanFromList,
        t: m
      }
    )
  ] });
}
const G = Ce("LiveControl");
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
  liveId: c,
  initialIsLiveEnded: d,
  activeTab: L,
  onActiveTabChange: u,
  onLiveEnded: m,
  t: l
}) {
  const { currentLive: h, setCurrentLive: _ } = Se(), { joinLive: g, leaveLive: I, subscribeEvent: E, unsubscribeEvent: N } = fn(), { fetchAudienceList: A } = ve(), { login: x, loginUserInfo: b } = hn(), { hideControlBar: H, showControlBar: $, setAutoHideDelay: U } = Nn(), [O, M] = w(!1), [P, z] = w(""), [k, S] = w(!1), [K, p] = w(0), v = j(""), R = j(!1), f = j(null), W = j(null), re = b?.userId || P, F = typeof __MOCK_MODE__ < "u" && __MOCK_MODE__ || typeof window < "u" && window.__PLAYWRIGHT_MOCK__ === !0, J = j(Xn()).current, C = 5, B = 2e3;
  V(() => {
    if (F) {
      G.info("LiveControlLeftPanel", "Mock mode, skipping TUILogin"), M(!0);
      return;
    }
    if (O) return;
    const o = async () => {
      try {
        let i;
        if (J === "audience" ? (G.info("LiveControlLeftPanel", "Audience mode, creating basic account..."), i = await Tn("audience")) : (G.info("LiveControlLeftPanel", "Admin mode, resolving account..."), i = await Ke()), !i || i.sdkAppId === 0) {
          G.warn("LiveControlLeftPanel", "No valid credentials, will retry"), t();
          return;
        }
        z(i.userId), G.info("LiveControlLeftPanel", "TUILogin as:", J, "userId:", i.userId), await x({
          SDKAppID: i.sdkAppId,
          userID: i.userId,
          userSig: i.userSig
        }), G.info("LiveControlLeftPanel", "TUILogin success"), M(!0), p(0);
      } catch (i) {
        i?.code === 2025 || i?.message?.includes("重复登录") ? (G.info("LiveControlLeftPanel", "Already logged in"), M(!0), p(0)) : (G.error("LiveControlLeftPanel", "TUILogin failed:", i), t());
      }
    }, t = () => {
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
  }, [F, O, x, K]), V(() => {
    if (F || !O || !P || J !== "audience") return;
    const o = Re() === "en-US" ? "admin" : "管理员";
    pn(P, o).catch((t) => {
      G.warn("LiveControlLeftPanel", "setMonitorNickname before join failed:", t);
    });
  }, [F, O, P]), V(() => {
    if (c)
      return G.info("LiveControlLeftPanel", "Setting current live:", c), _(c), () => {
        G.info("LiveControlLeftPanel", "Clearing current live"), _(null);
      };
  }, [c, _]);
  const Y = y(async () => {
    if (!(!c || !h || !O)) {
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
        if (kn.callExperimentalAPI(JSON.stringify({
          api: "setCurrentLanguage",
          params: { language: o === "en-US" ? "en" : o === "zh-CN" ? "zh-Hans" : o }
        })).catch(() => {
        }), await g({ liveId: c }), v.current = c, S(!0), await A().catch((t) => {
          G.warn("LiveControlLeftPanel", "fetchAudienceList after join failed:", t);
        }), H(), U(0), !R.current && E) {
          const t = () => {
            G.info("LiveControlLeftPanel", "Live ended event received"), _(null), m?.();
          };
          f.current = t, E(De.ON_LIVE_ENDED, t), R.current = !0;
        }
        G.info("LiveControlLeftPanel", "Successfully joined live:", c), console.log("[LiveControlLeftPanel] adding live admin:", P, "room:", c), Ln(c, P).catch((t) => {
          console.error("[LiveControlLeftPanel] addLiveAdmin failed:", t), G.warn("LiveControlLeftPanel", "addLiveAdmin failed:", t);
        });
      } catch (o) {
        G.error("LiveControlLeftPanel", "Failed to join live:", o);
      }
    }
  }, [c, h, O, g, A, E, J, _, d, m]);
  V(() => {
    Y();
  }, [Y]), V(() => {
    v.current = "", S(!1);
  }, [c]);
  const ne = j(!1);
  V(() => () => {
    if (ne.current = !0, G.info("LiveControlLeftPanel", "Component unmounting, cleaning up"), R.current && N && f.current && (N(De.ON_LIVE_ENDED, f.current), R.current = !1, f.current = null), v.current) {
      const o = v.current;
      v.current = "", I().catch((t) => {
        G.warn("LiveControlLeftPanel", "leaveLive on unmount failed for", o, t);
      });
    }
    $();
  }, [I, N, $]);
  const ee = le(
    () => r?.anchor.avatarUrl || h?.liveOwner?.avatarUrl || "",
    [r?.anchor.avatarUrl, h?.liveOwner?.avatarUrl]
  ), ae = le(
    () => r?.anchor.nick || h?.liveOwner?.userName || l(n.UNKNOWN_ANCHOR),
    [r?.anchor.nick, h?.liveOwner?.userName, l]
  ), ie = le(
    () => h?.liveType === "Voice",
    [h?.liveType]
  );
  return /* @__PURE__ */ s("div", { className: "left-content-area", children: [
    /* @__PURE__ */ e(
      $n,
      {
        liveControlSlots: a,
        liveInfo: r,
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
      Jn,
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
const Zn = (a, r, c) => {
  const d = Array.from({ length: r }, () => 0);
  return a.forEach((L, u) => {
    const m = u % r;
    d[m] = Math.max(d[m], L);
  }), d.reduce((L, u) => L + u, 0) + c * (r - 1);
}, et = (a) => {
  const r = Array.from(a.querySelectorAll(":scope > .stat-bar-item")), c = document.createElement("div");
  c.style.position = "absolute", c.style.left = "-99999px", c.style.top = "0", c.style.visibility = "hidden", c.style.pointerEvents = "none", c.style.width = "max-content", document.body.appendChild(c);
  const d = r.map((L) => {
    const u = L.cloneNode(!0);
    return u.style.width = "max-content", u.style.maxWidth = "none", c.appendChild(u), Math.ceil(u.getBoundingClientRect().width);
  });
  return c.remove(), d;
}, nt = (a) => {
  if (a.clientWidth <= 0) return;
  const r = et(a);
  if (!r.length) return;
  const c = parseFloat(getComputedStyle(a).columnGap) || 0, d = a.clientWidth, L = [7, 4, 3, 2, 1].find((u) => Zn(r, u, c) <= d + 1) || 1;
  a.style.setProperty("--stats-columns", String(L));
}, tt = (a) => a >= 1e4 ? (a / 1e4).toFixed(1) + "w" : a.toLocaleString(), rt = (a, r) => {
  a < 0 && (a = 0);
  const c = Math.floor(a / 86400), d = Math.floor(a % 86400 / 3600), L = Math.floor(a % 3600 / 60), u = a % 60, m = `${d.toString().padStart(2, "0")}:${L.toString().padStart(2, "0")}:${u.toString().padStart(2, "0")}`;
  return c > 0 ? `${c}${r(n.DAYS)} ${m}` : m;
}, at = (a) => {
  const r = new Date(a), c = String(r.getMonth() + 1).padStart(2, "0"), d = String(r.getDate()).padStart(2, "0"), L = String(r.getHours()).padStart(2, "0"), u = String(r.getMinutes()).padStart(2, "0"), m = String(r.getSeconds()).padStart(2, "0");
  return `${c}-${d} ${L}:${u}:${m}`;
};
function ot({
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
        h = null, nt(l);
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
          /* @__PURE__ */ e("span", { className: "live-duration-text", children: rt(c, u) })
        ] })
      ] }),
      /* @__PURE__ */ e("span", { className: "update-time", children: u(n.UPDATED_AT, { time: L }) })
    ] }),
    /* @__PURE__ */ s("div", { ref: m, className: "stats-bar-design", children: [
      /* @__PURE__ */ s("div", { className: "stat-bar-item", children: [
        /* @__PURE__ */ s("div", { className: "stat-label", children: [
          u(n.CURRENT_VIEWERS),
          /* @__PURE__ */ e(oe, { content: u(n.CURRENT_VIEWERS_TOOLTIP), placement: "top", children: /* @__PURE__ */ e(de, { size: 14, className: "info-icon" }) })
        ] }),
        /* @__PURE__ */ e("div", { className: "stat-value", children: tt(a?.onlineCount ?? r ?? 0) })
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
function it({
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
  onBulkApprove: A,
  onBulkDelete: x,
  onToggleSelectOne: b,
  onToggleSelectAll: H,
  onRelease: $,
  onDelete: U,
  onOpenDropdown: O,
  t: M
}) {
  const P = a === "custom", z = le(
    () => xn({ hideTypeColumn: P }).map((k) => ({
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
            return (S) => /* @__PURE__ */ e(
              "input",
              {
                type: "checkbox",
                checked: m.includes(S.id),
                disabled: I,
                onChange: () => b(S.id)
              }
            );
          case "userId":
            return (S) => /* @__PURE__ */ e("div", { className: "moderation-user-cell", children: /* @__PURE__ */ e("span", { className: "moderation-user-id", children: S.userId }) });
          case "content":
            return (S) => /* @__PURE__ */ e("span", { title: S.content, children: S.content });
          case "type":
            return (S) => /* @__PURE__ */ e("span", { className: "moderation-type-text", children: M(S.type) });
          case "createdAtMs":
            return (S) => at(S.createdAtMs);
          case "action":
            return (S) => {
              const K = [
                { key: "approve", label: M(n.APPROVE), onClick: () => $(S) },
                { key: "delete", label: M(n.DELETE), danger: !0, onClick: () => U(S) }
              ];
              return P || K.push({ key: "more", label: M(n.MORE), suffixCaret: !0, onClick: (p) => O(p, S) }), /* @__PURE__ */ e(
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
    [M, l, I, m, H, b, $, U, O, P]
  );
  return /* @__PURE__ */ s("div", { className: "moderation-card", children: [
    /* @__PURE__ */ s("div", { className: "moderation-card-header", children: [
      /* @__PURE__ */ s("div", { className: "moderation-header-left", children: [
        !P && /* @__PURE__ */ e("h3", { children: M(n.CONTENT_MODERATION) }),
        P && /* @__PURE__ */ s("label", { className: "moderation-toggle-label", style: { display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12 }, children: [
          /* @__PURE__ */ e(
            xe,
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
          Z,
          {
            theme: "primary",
            shape: "round",
            onClick: A,
            disabled: I || m.length <= 1,
            icon: /* @__PURE__ */ e(Ae, { style: { width: 14, height: 14 } }),
            children: M(n.BULK_APPROVE)
          }
        ),
        /* @__PURE__ */ e(
          Z,
          {
            theme: "primary",
            shape: "round",
            onClick: x,
            disabled: I || m.length <= 1,
            icon: /* @__PURE__ */ e(nn, { style: { width: 14, height: 14 } }),
            children: M(n.BULK_DELETE)
          }
        )
      ] }),
      /* @__PURE__ */ s("div", { className: "moderation-toolbar", children: [
        /* @__PURE__ */ e("span", { className: "update-time", children: M(n.UPDATED_AT, { time: g }) }),
        /* @__PURE__ */ e(
          Z,
          {
            theme: "primary",
            variant: "outline",
            shape: "round",
            icon: /* @__PURE__ */ e(tn, {}),
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
        Vn,
        {
          columns: z,
          data: r,
          rowKey: "id",
          tableClassName: "moderation-table",
          headerClassName: "moderation-header-fixed",
          bodyClassName: "moderation-table-scroll",
          emptyNode: /* @__PURE__ */ e("div", { className: "moderation-empty", children: /* @__PURE__ */ e("span", { children: M(n.MODERATION_EMPTY) }) })
        }
      ),
      r.length > 0 && /* @__PURE__ */ s("div", { className: "moderation-pagination", children: [
        /* @__PURE__ */ e("span", { children: M(n.TOTAL_ITEMS, { count: L, total: L }) }),
        /* @__PURE__ */ s("div", { className: "pagination-pages", children: [
          /* @__PURE__ */ e(
            "button",
            {
              className: "page-num page-nav",
              disabled: I || d <= 1,
              onClick: () => N(d - 1),
              "aria-label": M(n.PREVIOUS_PAGE),
              children: /* @__PURE__ */ e(rn, { style: { width: 14 } })
            }
          ),
          Fn(d, u).map(
            (k, S) => k === "..." ? /* @__PURE__ */ e("span", { className: "page-ellipsis", children: "..." }, `ellipsis-${S}`) : /* @__PURE__ */ e(
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
              children: /* @__PURE__ */ e(an, { style: { width: 14 } })
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const Me = Ce("Moderation");
function st(a, r, c, d) {
  const {
    moderationMode: L,
    customModerationToggleEnabled: u,
    updateCustomModerationToggleEnabled: m,
    fetchTextModerationList: l,
    approveTextModerationItems: h,
    bypassCorrectionKeyword: _,
    deleteModerationItems: g
  } = We({ liveId: a || "", pageSize: Te }), I = L === "custom", [E, N] = w([]), [A, x] = w(!1), [b, H] = w(1), [$, U] = w(0), [O, M] = w([]), [P, z] = w(null), [k, S] = w(null), K = le(() => An($, Te), [$]), p = y(
    async (T = 1) => {
      if (a) {
        x(!0);
        try {
          const o = Math.max(1, T), t = vn(d), i = await l({
            pageNum: o,
            pageSize: Te,
            startTime: t,
            violationOnly: !I
            // custom 模式不过滤 violationOnly
          });
          let D = i.list || [];
          if (I) {
            const Q = [...D].sort((X, te) => te.createdAtMs - X.createdAtMs);
            N(Q), U(i.total || 0);
          } else {
            D = await bn(D);
            const Q = await Mn(), te = [...In(D)].sort((pe, Ge) => Ge.createdAtMs - pe.createdAtMs);
            N(te), U(Math.max(0, (i.total || 0) - Q));
          }
          H(o), M((Q) => he(Q.filter((X) => D.some((te) => te.id === X))));
        } catch (o) {
          Me.error("moderation", `load failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
          const t = ue(o).info || o.message || r(n.UNKNOWN_ERROR);
          q.error(`【${r(n.REFRESH)}${r(n.CONTENT_MODERATION)}】${r(n.OPERATION_FAILED, { error: t })}`);
        } finally {
          x(!1);
        }
      }
    },
    [a, r, l, d, I]
  );
  V(() => {
    a && d != null && p(1);
  }, [a, d]);
  const v = y(async (T = !1) => {
    c || (await p(b), T || q.success(fe(r).opSuccess(n.REFRESH)));
  }, [p, b, r, c]), R = y(
    (T) => {
      T < 1 || T > K || T === b || p(T);
    },
    [p, b, K]
  ), f = y(
    async (T) => {
      M((t) => t.filter((i) => !T.includes(i))), N((t) => t.filter((i) => !T.includes(i.id))), U((t) => Math.max(0, t - T.length));
      const o = _n(
        b,
        $,
        T.length,
        Te
      );
      await p(o);
    },
    [p, b, $]
  ), W = me({
    operationName: r(n.RELEASE_AND_RESEND),
    action: async () => {
      if (!P || !a) throw new Error("liveId is required");
      await h({
        ids: [P.id],
        items: [{ id: P.id, content: P.content, userId: P.userId }],
        liveId: a
      });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.RELEASE_AND_RESEND) }),
      content: r(n.RELEASE_AND_RESEND_DESCRIPTION)
    },
    onSuccess: async () => {
      P && await f([P.id]), z(null);
    }
  }), re = y((T) => {
    if (c) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    z(T), W.requestConfirm();
  }, [W, c, r]), F = me({
    operationName: r(n.BYPASS_CORRECTION),
    action: async () => {
      if (!k) throw new Error("No target item");
      await _({ content: k.content });
    },
    confirm: {
      title: r(n.BYPASS_CORRECTION_DIALOG_TITLE),
      content: r(n.BYPASS_CORRECTION_DESCRIPTION)
    },
    onSuccess: async () => {
      k && await f([k.id]), S(null);
    }
  }), J = y((T) => {
    if (c) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    S(T), F.requestConfirm();
  }, [F, c, r]), C = me({
    operationName: r(n.BULK_APPROVE),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const T = E.filter((i) => O.includes(i.id)).sort((i, D) => i.createdAtMs - D.createdAtMs), o = T.map((i) => i.id), t = T.map((i) => ({ id: i.id, content: i.content, userId: i.userId }));
      await h({ ids: o, items: t, liveId: a });
    },
    confirm: {
      title: r(n.CONFIRM_ACTION_TITLE, { action: r(n.BULK_APPROVE) }),
      content: r(n.BULK_APPROVE_CONFIRM_CONTENT)
    },
    onSuccess: async () => {
      const T = [...O];
      await f(T);
    }
  }), B = y(() => {
    if (c) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    if (O.length === 0) {
      q.warning(r(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    C.requestConfirm();
  }, [C, O, c, r]), Y = y(
    async (T) => {
      if (c) {
        q.warning(r(n.LIVE_ENDED));
        return;
      }
      try {
        await g([T.id]), q.info(fe(r).opSuccess(n.DELETE)), await f([T.id]);
      } catch (o) {
        Me.error("moderation", `delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
        const t = ue(o).info || o.message || r(n.UNKNOWN_ERROR);
        q.error(`【${r(n.DELETE)}${r(n.CONTENT_MODERATION)}】${fe(r).opFailed(n.DELETE, null, t)}`);
      }
    },
    [f, r, c]
  ), ne = y(async () => {
    if (c) {
      q.warning(r(n.LIVE_ENDED));
      return;
    }
    if (O.length === 0) {
      q.warning(r(n.PLEASE_SELECT_AT_LEAST_ONE_ITEM));
      return;
    }
    const T = [...O];
    try {
      await g(T), q.info(fe(r).opSuccess(n.DELETE)), await f(T);
    } catch (o) {
      Me.error("moderation", `bulk delete failed (ErrorCode: ${o?.ErrorCode ?? o?.code ?? o?.errorCode ?? "N/A"}):`, o);
      const t = ue(o).info || o.message || r(n.UNKNOWN_ERROR);
      q.error(`【${r(n.BULK_DELETE)}${r(n.CONTENT_MODERATION)}】${r(n.OPERATION_FAILED, { error: t })}`);
    }
  }, [O, f, r, c]), ee = y((T) => {
    M((o) => o.includes(T) ? he(o.filter((t) => t !== T)) : he([...o, T]));
  }, []), ae = y(() => {
    M((T) => {
      const o = he(E.map((t) => t.id));
      return T.length >= o.length ? [] : o;
    });
  }, [E]), ie = le(() => {
    const T = he(E.map((o) => o.id));
    return On(O, T);
  }, [E, O]);
  return {
    moderationMode: L,
    customModerationToggleEnabled: u,
    updateCustomModerationToggleEnabled: m,
    moderationList: E,
    moderationLoading: A,
    moderationPage: b,
    moderationTotal: $,
    moderationTotalPages: K,
    moderationSelectedIds: O,
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
const Ne = Ce("LiveControl");
function Mt() {
  const { liveId: a } = Ye();
  V(() => (Ne.info("LiveControl", "✅ Component MOUNTED, liveId:", a), () => {
    Ne.info("LiveControl", "❌ Component UNMOUNTED, liveId:", a);
  }), []);
  const r = Je(), L = Xe().state?.from === "live-list" ? "/live-list" : "/live-monitor", m = qe().components?.liveControl, { t: l } = ye(), {
    fetchLiveDetail: h,
    fetchLiveStats: _,
    endLive: g
  } = Se(), { audienceCount: I } = ve();
  V(() => {
    I > 0 && N((t) => t && { ...t, onlineCount: I });
  }, [I]);
  const [E, N] = w(null), A = le(() => !E || Number(E?.activityStatus) === 2, [E?.activityStatus, E]), [x, b] = w("chat"), [H, $] = w(!0), { successMsg: U, errorMsg: O } = Wn(), M = me({
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
      r(L);
    }
  }), P = me({
    operationName: l(n.SEND_VIOLATION_WARNING),
    action: async () => {
      if (!a) throw new Error("liveId is required");
      const t = E?.liveName || a;
      await yn(a, {
        violationType: l(n.VIOLATION_TYPE_WARNING),
        violationContent: l(n.VIOLATION_WARNING_CONTENT_TEMPLATE, { liveName: t }),
        handleSuggestion: l(n.VIOLATION_WARNING_DEFAULT_SUGGESTION)
      });
    },
    confirm: {
      title: l(n.CONFIRM_ACTION_TITLE, { action: l(n.SEND_VIOLATION_WARNING) }),
      content: l(n.VIOLATION_WARNING_CONFIRM_CONTENT),
      confirmText: l(n.CONFIRM)
    },
    errorMessage: fe(l).opFailed(n.OP_SEND)
  }), z = y(() => {
    N((t) => t && { ...t, activityStatus: 2 });
  }, []), k = () => {
    P.requestConfirm();
  }, S = j(null), [K, p] = w(0), [v, R] = w(null), f = st(a, l, A, E?.createdAt);
  V(() => () => {
    a && Ne.info("LiveControl", "Component unmounting, liveId:", a);
  }, [a]);
  const W = wn({
    showError: !1,
    action: async () => a ? await h(a) : null,
    errorMessage: l(n.GET_ERROR_MESSAGE),
    onError: () => {
      $(!1);
    },
    onSuccess: (t) => {
      if ($(!1), !t) return;
      const i = t.anchor?.userId, D = Sn(t, i || "-"), Q = Rn(t);
      if (N({
        liveId: t.liveId,
        id: t.liveId,
        liveName: t.liveName || l(n.UNNAMED_LIVE_SHORT),
        coverUrl: t.coverUrl || je,
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
        const X = t.createdAt > 1e12 ? t.createdAt : t.createdAt * 1e3;
        if (X > 1e12) {
          const te = Math.floor((Date.now() - X) / 1e3);
          p(te > 0 ? te : 0);
        }
      }
      C();
    }
  }), re = y(async () => {
    await W.execute();
  }, [W.execute]), [F, J] = w(() => {
    const t = /* @__PURE__ */ new Date();
    return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
  }), C = y(() => {
    const t = /* @__PURE__ */ new Date();
    J(`${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`);
  }, []), B = y(async () => {
    if (a)
      try {
        const t = await _(a);
        N((i) => i && {
          ...i,
          stats: t
        }), C();
      } catch (t) {
        Ne.error("LiveControl", "fetchStats failed:", t);
      }
  }, [a, C]), Y = le(() => {
    const t = E?.stats?.viewCount ?? 0, i = E?.stats?.commentCount ?? 0;
    if (t <= 0) return "0%";
    const D = i / t * 100;
    return Math.min(D, 100).toFixed(1) + "%";
  }, [E?.stats?.viewCount, E?.stats?.commentCount]), ne = 30, ee = j(null), ae = j(!0), ie = y(() => {
    r(L);
  }, [r, L]), T = y(() => {
    R(null);
  }, []), o = y((t, i) => {
    t.preventDefault(), t.stopPropagation();
    const D = t.currentTarget.getBoundingClientRect();
    R({
      item: i,
      x: D.right,
      y: D.bottom + 4
    });
  }, []);
  return V(() => {
    const t = E?.createdAt;
    if (!t || t < 1e9 || Number(E?.activityStatus) === 2)
      return;
    const i = t > 1e12 ? t : t * 1e3, D = () => {
      const X = Math.floor((Date.now() - i) / 1e3);
      p(X > 0 ? X : 0);
    };
    D();
    const Q = window.setInterval(D, 1e3);
    return () => {
      window.clearInterval(Q);
    };
  }, [E?.createdAt, E?.activityStatus]), V(() => {
    if (!v) return;
    const t = (i) => {
      S.current && !S.current.contains(i.target) && T();
    };
    return document.addEventListener("mousedown", t), () => document.removeEventListener("mousedown", t);
  }, [T, v]), V(() => {
    if (x !== "audience") return;
    const t = () => {
      document.querySelectorAll(".uikit-liveAudienceList__name").forEach((X) => {
        const te = X, pe = te.textContent || "";
        te.title !== pe && (te.title = pe);
      });
    };
    t();
    const i = document.querySelector(".audience-list-area");
    if (!i) return;
    const D = new MutationObserver(t);
    return D.observe(i, { childList: !0, subtree: !0 }), () => D.disconnect();
  }, [x]), V(() => {
    if (a)
      return Ne.info("LiveControl", "Fetching room info for:", a), ae.current = !0, re(), () => {
        ae.current = !1;
      };
  }, [a]), V(() => {
    if (!a || ne === 0 || A) {
      ee.current && (clearInterval(ee.current), ee.current = null);
      return;
    }
    return ee.current = window.setInterval(() => {
      ae.current && (B(), f.moderationMode === "custom" && !f.customModerationToggleEnabled || f.handleRefreshModeration(!0));
    }, ne * 1e3), () => {
      ee.current && (clearInterval(ee.current), ee.current = null);
    };
  }, [a, ne, A, B, f.handleRefreshModeration, f.moderationMode, f.customModerationToggleEnabled]), H ? /* @__PURE__ */ e("div", { className: "loading-container", children: /* @__PURE__ */ e(Qe, { loading: !0, text: l(n.LOADING) }) }) : /* @__PURE__ */ s("div", { className: "live-control-container", children: [
    /* @__PURE__ */ s("div", { className: "toast-area", children: [
      U && /* @__PURE__ */ e("div", { className: "status-success", children: U }),
      O && /* @__PURE__ */ e("div", { className: "status-error", children: O })
    ] }),
    /* @__PURE__ */ s("header", { className: "live-control-navbar", children: [
      /* @__PURE__ */ s("div", { className: "nav-left", children: [
        /* @__PURE__ */ e(Z, { shape: "circle", variant: "outline", className: "back-btn", onClick: ie, title: l(n.BACK_TO_LIST), icon: /* @__PURE__ */ e(on, { fill: "transparent", stroke: "currentColor", strokeWidth: 2 }) }),
        /* @__PURE__ */ e("h1", { children: l(n.LIVE_DETAILS) })
      ] }),
      /* @__PURE__ */ s("div", { className: "nav-right", children: [
        /* @__PURE__ */ e(
          Z,
          {
            variant: "text",
            theme: "warning",
            icon: /* @__PURE__ */ e(sn, { size: 16 }),
            disabled: A,
            onClick: k,
            children: l(n.VIOLATION_WARNING)
          }
        ),
        /* @__PURE__ */ e(Z, { variant: "text", theme: "danger", disabled: A, onClick: () => M.requestConfirm(), icon: /* @__PURE__ */ e(cn, {}), children: l(n.FORCE_STOP) })
      ] })
    ] }),
    /* @__PURE__ */ s("main", { className: "live-control-viewport", children: [
      /* @__PURE__ */ e(
        Qn,
        {
          liveControlSlots: m,
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
          ot,
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
          it,
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
            disabled: A,
            onRefresh: async () => {
              await f.handleRefreshModeration(), C();
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
    v && f.moderationMode !== "custom" && /* @__PURE__ */ e(
      "div",
      {
        ref: S,
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
              const t = v.item;
              T(), f.handleBypassCorrection(t);
            },
            children: [
              /* @__PURE__ */ e(Ae, { size: 14 }),
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
        { key: "release", dialog: f.releaseConfirmDialog, action: f.releaseAction },
        ...f.moderationMode !== "custom" ? [
          { key: "bypass", dialog: f.bypassConfirmDialog, action: f.bypassAction }
        ] : [],
        { key: "bulkApprove", dialog: f.bulkApproveConfirmDialog, action: f.bulkApproveAction }
      ].find((D) => !!D.dialog);
      return !i || !i.dialog ? null : /* @__PURE__ */ e(
        Ee,
        {
          visible: !0,
          header: l(i.dialog.title),
          onClose: () => i.action.cancelConfirm(),
          width: ge.CONFIRM,
          zIndex: 2600,
          footer: /* @__PURE__ */ s(se, { children: [
            /* @__PURE__ */ e(Z, { shape: "round", variant: "outline", disabled: i.action.loading, onClick: () => i.action.cancelConfirm(), children: l(n.CANCEL) }),
            /* @__PURE__ */ e(
              Z,
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
  Mt as default
};
