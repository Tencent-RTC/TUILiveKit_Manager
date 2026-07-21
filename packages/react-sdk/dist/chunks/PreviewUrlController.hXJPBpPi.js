import { bC as c, bH as U } from "./main-layout.D1ZA8pmk.js";
let u = null;
function o() {
  if (!u)
    throw new Error("SVGAParser 未初始化，请先调用 initSvgaParser()");
  return u;
}
function w(t) {
  u || (u = new t());
}
function P() {
  return u;
}
function h(t, n = 15e3) {
  return new Promise((i, l) => {
    if (!t) {
      l(new Error("URL 不能为空"));
      return;
    }
    const s = o();
    let r = null, e = !1;
    const a = () => {
      r && (clearTimeout(r), r = null);
    };
    r = setTimeout(() => {
      e || (e = !0, l(new Error("SVGA 资源加载超时，请检查 URL 是否可访问")));
    }, n), s.load(
      t,
      () => {
        e || (e = !0, a(), i(!0));
      },
      () => {
        e || (e = !0, a(), l(new Error("SVGA 资源加载失败，请检查 URL 是否正确")));
      }
    );
  });
}
function S(t, n = 15e3) {
  return new Promise((i, l) => {
    let s = null, r = !1;
    const e = () => {
      s && (clearTimeout(s), s = null);
    };
    s = setTimeout(() => {
      r || (r = !0, l(new Error("SVGA 文件解析超时")));
    }, n);
    const a = URL.createObjectURL(t);
    o().load(
      a,
      () => {
        r || (r = !0, e(), URL.revokeObjectURL(a), i(!0));
      },
      () => {
        r || (r = !0, e(), URL.revokeObjectURL(a), l(new Error("SVGA 文件无效或已损坏")));
      }
    );
  });
}
class g {
  constructor() {
    this.currentUrl = "";
  }
  /**
   * Set preview from File/Blob (or null to clear)
   * Automatically revokes old URL if exists
   * 
   * @param file - File/Blob to create preview from, or null to clear
   * @returns Preview URL (empty string if null)
   */
  setPreview(n) {
    if (!n)
      return this.clearPreview(), "";
    const i = c(this.currentUrl || void 0, n);
    return this.currentUrl = i, i;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (U(this.currentUrl), this.currentUrl = "");
  }
  /**
   * Cleanup all resources
   * Should be called on component unmount
   */
  cleanup() {
    this.clearPreview();
  }
  /**
   * Get current preview URL
   * @returns Current URL (empty string if none)
   */
  getCurrentUrl() {
    return this.currentUrl;
  }
  /**
   * Check if preview exists
   */
  hasPreview() {
    return !!this.currentUrl;
  }
}
export {
  g as P,
  h as a,
  P as g,
  w as i,
  S as v
};
