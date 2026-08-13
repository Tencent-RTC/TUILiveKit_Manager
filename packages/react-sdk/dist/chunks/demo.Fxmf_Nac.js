import { a as u, u as c } from "./PreviewUrlController.CCpOcmIC.js";
const o = /* @__PURE__ */ new Set();
let n = { uploading: !1, uploadProgress: 0 };
function i() {
  o.forEach((t) => {
    try {
      t();
    } catch {
    }
  });
}
function e(t) {
  n = t, i();
}
function d() {
  return n;
}
function f(t) {
  return o.add(t), () => {
    o.delete(t);
  };
}
async function g() {
  return u();
}
async function U(t, r, s) {
  e({ uploading: !0, uploadProgress: 0 });
  try {
    return await c(t, r, (a) => {
      e({ uploading: !0, uploadProgress: a }), s?.(a);
    });
  } finally {
    e({ uploading: !1, uploadProgress: 0 });
  }
}
function m(t) {
  return new URL(`../mock-${t}/`, window.location.href).href;
}
const h = "https://cloud.tencent.com/document/product/647/123012", S = "https://github.com/Tencent-RTC/TUILiveKit_Manager/issues";
export {
  h as D,
  S as G,
  U as a,
  d as g,
  g as p,
  m as r,
  f as s
};
