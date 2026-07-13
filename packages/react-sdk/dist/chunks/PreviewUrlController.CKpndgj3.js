let c = null;
function u() {
  if (!c)
    throw new Error("SVGAParser 未初始化，请先调用 initSvgaParser()");
  return c;
}
function h(r) {
  c || (c = new r());
}
function w() {
  return c;
}
function L(r, e = 15e3) {
  return new Promise((n, i) => {
    if (!r) {
      i(new Error("URL 不能为空"));
      return;
    }
    const a = u();
    let t = null, s = !1;
    const l = () => {
      t && (clearTimeout(t), t = null);
    };
    t = setTimeout(() => {
      s || (s = !0, i(new Error("SVGA 资源加载超时，请检查 URL 是否可访问")));
    }, e), a.load(
      r,
      () => {
        s || (s = !0, l(), n(!0));
      },
      () => {
        s || (s = !0, l(), i(new Error("SVGA 资源加载失败，请检查 URL 是否正确")));
      }
    );
  });
}
function R(r, e = 15e3) {
  return new Promise((n, i) => {
    let a = null, t = !1;
    const s = () => {
      a && (clearTimeout(a), a = null);
    };
    a = setTimeout(() => {
      t || (t = !0, i(new Error("SVGA 文件解析超时")));
    }, e);
    const l = URL.createObjectURL(r);
    u().load(
      l,
      () => {
        t || (t = !0, s(), URL.revokeObjectURL(l), n(!0));
      },
      () => {
        t || (t = !0, s(), URL.revokeObjectURL(l), i(new Error("SVGA 文件无效或已损坏")));
      }
    );
  });
}
class P {
  constructor() {
    this.urls = /* @__PURE__ */ new Set();
  }
  /**
   * 创建 ObjectURL 并自动跟踪
   * @param blob - File 或 Blob 对象
   * @returns ObjectURL 字符串
   */
  create(e) {
    const n = URL.createObjectURL(e);
    return this.urls.add(n), n;
  }
  /**
   * 释放指定的 ObjectURL
   * @param url - 要释放的 URL
   */
  revoke(e) {
    this.urls.has(e) && (URL.revokeObjectURL(e), this.urls.delete(e));
  }
  /**
   * 释放所有跟踪的 ObjectURL
   */
  revokeAll() {
    this.urls.forEach((e) => {
      URL.revokeObjectURL(e);
    }), this.urls.clear();
  }
  /**
   * 获取当前跟踪的 URL 数量
   */
  get size() {
    return this.urls.size;
  }
}
function U(r) {
  return URL.createObjectURL(r);
}
function o(r) {
  try {
    URL.revokeObjectURL(r);
  } catch (e) {
    console.warn("Failed to revoke ObjectURL:", r, e);
  }
}
function v(r, e) {
  return r && o(r), U(e);
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
  setPreview(e) {
    if (!e)
      return this.clearPreview(), "";
    const n = v(this.currentUrl || void 0, e);
    return this.currentUrl = n, n;
  }
  /**
   * Clear current preview URL
   * Revokes ObjectURL to free memory
   */
  clearPreview() {
    this.currentUrl && (o(this.currentUrl), this.currentUrl = "");
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
  P as O,
  g as P,
  o as a,
  L as b,
  U as c,
  w as g,
  h as i,
  v as r,
  R as v
};
