import { F as i, L as o } from "./en-US.B3IHgsij.js";
const l = {
  moderationAvailable: !0,
  moderationRemainUsage: 0,
  loading: !1,
  error: null,
  lastUpdatedAt: 0
};
let t = { ...l };
const s = /* @__PURE__ */ new Set();
function r(a) {
  const e = t;
  return t = { ...t, ...a }, s.forEach((n) => n(t, e)), t;
}
function A() {
  return t.moderationAvailable;
}
async function c() {
  r({ loading: !0, error: null });
  try {
    const a = await i(), e = a > 0;
    return r({
      moderationAvailable: e,
      moderationRemainUsage: a,
      loading: !1,
      lastUpdatedAt: Date.now()
    }), e;
  } catch (a) {
    const e = a instanceof o ? a : o.from(a);
    return r({
      moderationAvailable: !1,
      moderationRemainUsage: 0,
      loading: !1,
      error: e,
      lastUpdatedAt: Date.now()
    }), !1;
  }
}
export {
  A as a,
  c as i
};
