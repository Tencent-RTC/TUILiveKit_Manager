import { a as u, u as l } from "./PreviewUrlController.ChqehaBQ.js";
const o = /* @__PURE__ */ new Set();
let r = { uploading: !1, uploadProgress: 0 };
function i() {
  o.forEach((t) => {
    try {
      t();
    } catch {
    }
  });
}
function e(t) {
  r = t, i();
}
function c() {
  return r;
}
function d(t) {
  return o.add(t), () => {
    o.delete(t);
  };
}
async function g() {
  return u();
}
async function m(t, n, s) {
  e({ uploading: !0, uploadProgress: 0 });
  try {
    return await l(t, n, (a) => {
      e({ uploading: !0, uploadProgress: a }), s?.(a);
    });
  } finally {
    e({ uploading: !1, uploadProgress: 0 });
  }
}
function h(t) {
  return new URL(`../mock-${t}/`, window.location.href).href;
}
export {
  m as a,
  c as g,
  g as p,
  h as r,
  d as s
};
