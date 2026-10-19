import { I as s, a as l, bu as u, Y as f } from "./shared-state.CEzqGWS1.js";
const o = [
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
], c = [14e8, 17e8], _ = [172e7, 18e8];
function d(t, [e, r]) {
  return t >= e && t < r;
}
function I(t) {
  const e = t.trim();
  if (!e)
    return { valid: !1, field: "sdkAppId", message: s.SDK_APP_ID_REQUIRED };
  if (!/^\d+$/.test(e))
    return { valid: !1, field: "sdkAppId", message: s.SDK_APP_ID_INVALID_FORMAT };
  const r = Number(e), i = e.length;
  return i === 8 ? o.some((n) => d(r, n)) ? { valid: !0 } : { valid: !1, field: "sdkAppId", message: s.SDK_APP_ID_INVALID_RANGE } : i === 10 ? d(r, c) || d(r, _) ? { valid: !0 } : { valid: !1, field: "sdkAppId", message: s.SDK_APP_ID_INVALID_RANGE } : { valid: !1, field: "sdkAppId", message: s.SDK_APP_ID_INVALID_LENGTH };
}
function A(t) {
  const e = t.trim();
  return e ? e.length < 8 ? { valid: !1, field: "secretKey", message: s.SECRET_KEY_TOO_SHORT } : { valid: !0 } : { valid: !1, field: "secretKey", message: s.SECRET_KEY_REQUIRED };
}
function m(t) {
  const e = t.trim();
  return e ? new TextEncoder().encode(e).length > 32 ? { valid: !1, field: "userId", message: s.USER_ID_TOO_LONG } : { valid: !0 } : { valid: !1, field: "userId", message: s.USER_ID_REQUIRED };
}
function R(t, e, r) {
  const i = I(t);
  if (!i.valid) return i;
  const n = A(e);
  if (!n.valid) return n;
  const a = m(r);
  return a.valid ? { valid: !0 } : a;
}
function p(t) {
  return /^\d{8,}$/.test(t.trim());
}
const E = "LiveKit";
function v(t, e) {
  if (e) return e;
  const r = t === "zh-CN" ? u : f;
  return (i) => r[i] || i;
}
function g(t, e) {
  const r = v(t, e), n = (l().brand.appName || "").trim();
  if (n && n !== E) {
    const a = r(n);
    return a !== n ? a : n;
  }
  return r(s.DEMO_PRODUCT_NAME);
}
export {
  I as a,
  A as b,
  m as c,
  p as i,
  g as r,
  R as v
};
