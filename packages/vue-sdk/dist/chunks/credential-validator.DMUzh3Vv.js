import { I as i } from "./shared-state.CsnQDWhV.js";
const l = [
  [2e7, 3e7],
  // 新加坡
  [3e7, 4e7],
  // 韩国
  [4e7, 5e7],
  // 法兰克福
  [5e7, 6e7],
  // 印度
  [6e7, 7e7],
  // 日本
  [7e7, 8e7],
  // 美国
  [8e7, 9e7],
  // 印尼
  [9e7, 1e8]
  // 沙特
], f = [14e8, 17e8], u = [172e7, 18e8];
function n(t, [e, r]) {
  return t >= e && t < r;
}
function I(t) {
  const e = t.trim();
  if (!e)
    return { valid: !1, field: "sdkAppId", message: i.SDK_APP_ID_REQUIRED };
  if (!/^\d+$/.test(e))
    return { valid: !1, field: "sdkAppId", message: i.SDK_APP_ID_INVALID_FORMAT };
  const r = Number(e), s = e.length;
  return s === 8 ? l.some((d) => n(r, d)) ? { valid: !0 } : { valid: !1, field: "sdkAppId", message: i.SDK_APP_ID_INVALID_RANGE } : s === 10 ? n(r, f) || n(r, u) ? { valid: !0 } : { valid: !1, field: "sdkAppId", message: i.SDK_APP_ID_INVALID_RANGE } : { valid: !1, field: "sdkAppId", message: i.SDK_APP_ID_INVALID_LENGTH };
}
function _(t) {
  const e = t.trim();
  return e ? e.length < 8 ? { valid: !1, field: "secretKey", message: i.SECRET_KEY_TOO_SHORT } : { valid: !0 } : { valid: !1, field: "secretKey", message: i.SECRET_KEY_REQUIRED };
}
function o(t) {
  const e = t.trim();
  return e ? new TextEncoder().encode(e).length > 32 ? { valid: !1, field: "userId", message: i.USER_ID_TOO_LONG } : { valid: !0 } : { valid: !1, field: "userId", message: i.USER_ID_REQUIRED };
}
function m(t, e, r) {
  const s = I(t);
  if (!s.valid) return s;
  const d = _(e);
  if (!d.valid) return d;
  const a = o(r);
  return a.valid ? { valid: !0 } : a;
}
function E(t) {
  return /^\d{8,}$/.test(t.trim());
}
export {
  I as a,
  _ as b,
  o as c,
  E as i,
  m as v
};
