import { a as u, u as c } from "./PreviewUrlController.B1iCtmJA.js";
import { b0 as i } from "./shared-state.CEzqGWS1.js";
const n = /* @__PURE__ */ new Set();
let a = { uploading: !1, uploadProgress: 0 };
function p() {
  n.forEach((o) => {
    try {
      o();
    } catch {
    }
  });
}
function e(o) {
  a = o, p();
}
function m() {
  return a;
}
function U(o) {
  return n.add(o), () => {
    n.delete(o);
  };
}
async function h() {
  return u();
}
async function S(o, t, s) {
  e({ uploading: !0, uploadProgress: 0 });
  try {
    return await c(o, t, (r) => {
      e({ uploading: !0, uploadProgress: r }), s?.(r);
    });
  } finally {
    e({ uploading: !1, uploadProgress: 0 });
  }
}
function w(o) {
  return new URL(`../mock-${o}/`, window.location.href).href;
}
const y = "https://cloud.tencent.com/document/product/647/123012", L = "https://github.com/Tencent-RTC/TUILiveKit_Manager/issues", l = "https://wj.qq.com/s2/28180031/a04s";
function R(o, t) {
  try {
    i(o, t);
  } catch {
  }
  window.open(l, "_blank", "noopener,noreferrer");
}
export {
  y as D,
  L as G,
  l as S,
  S as a,
  m as g,
  R as o,
  h as p,
  w as r,
  U as s
};
