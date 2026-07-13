import { ah as p, af as g, _ as u } from "./main-layout.qKCc3UXK.js";
import { v as w, b as v } from "./PreviewUrlController.CKpndgj3.js";
import { aw as h } from "./en-US.BT81VsgK.js";
function f(r, e = 8e3, i = !1) {
  return new Promise((n, t) => {
    if (!r) {
      t(new Error("URL 不能为空"));
      return;
    }
    if (p(r)) {
      n(!0);
      return;
    }
    if (g(r)) {
      if (i) {
        n(!0);
        return;
      }
      v(r, e > 8e3 ? e : 15e3).then(() => n(!0)).catch(t);
      return;
    }
    const a = document.createElement("img");
    let s = null;
    const o = () => {
      s && (clearTimeout(s), s = null), a.onload = null, a.onerror = null, a.src = "", a.parentNode && a.parentNode.removeChild(a);
    };
    a.onload = () => {
      o(), n(!0);
    }, a.onerror = () => {
      o(), t(new Error("图片加载失败，请检查 URL 是否正确"));
    }, s = setTimeout(() => {
      o(), t(new Error("图片加载超时，请检查 URL 是否可访问"));
    }, e), a.style.display = "none", document.body?.appendChild(a), a.src = r;
  });
}
function b(r, e = 1e4) {
  return new Promise((i, n) => {
    const t = document.createElement("img");
    let a = null;
    const s = () => {
      a && (clearTimeout(a), a = null), t.onload = null, t.onerror = null, t.src = "", t.parentNode && t.parentNode.removeChild(t);
    };
    t.onload = () => {
      s(), i(!0);
    }, t.onerror = () => {
      s(), n(new Error("图片加载失败，文件可能已损坏"));
    }, a = setTimeout(() => {
      s(), n(new Error("图片加载超时"));
    }, e), t.style.display = "none", document.body?.appendChild(t), t.src = r;
  });
}
function T(r, e = 15e3) {
  return new Promise((i, n) => {
    const t = document.createElement("video");
    let a = null;
    const s = () => {
      a && (clearTimeout(a), a = null), t.onloadeddata = null, t.onerror = null, t.src = "", t.parentNode && t.parentNode.removeChild(t);
    };
    t.onloadeddata = () => {
      s(), i(!0);
    }, t.onerror = () => {
      s(), n(new Error("视频加载失败，文件可能已损坏"));
    }, a = setTimeout(() => {
      s(), n(new Error("视频加载超时"));
    }, e), t.style.display = "none", t.muted = !0, document.body?.appendChild(t), t.src = r, t.load();
  });
}
function C(r, e) {
  const i = e ? e.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"], n = i.filter((l) => !l.startsWith(".")), t = i.filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), a = i.some((l) => l.startsWith("video/")), s = "." + (r.name.split(".").pop() || "").toLowerCase();
  return n.includes(r.type) || a && r.type.startsWith("video/") || t.includes(s) ? { valid: !0 } : { valid: !1, errorHint: `只允许上传 ${i.map((c) => c === "image/svg+xml" ? "SVG" : c === "video/mp4" ? "MP4" : c.startsWith(".") ? c.slice(1).toUpperCase() : c.startsWith("image/") ? c.replace("image/", "").toUpperCase() : c).join("/")} 格式的文件` };
}
function L(r, e) {
  return r.size <= e * 1024 * 1024;
}
async function V(r, e, i = !1) {
  const t = (e ? e.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"]).filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), a = "." + (r.name.split(".").pop() || "").toLowerCase(), s = a === ".svga", o = !s && t.includes(a) && !r.type.startsWith("image/") && !r.type.startsWith("video/");
  if (s)
    i || await w(r);
  else if (!o) {
    const l = URL.createObjectURL(r);
    try {
      r.type.startsWith("video/") ? await T(l) : await b(l);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
}
class P {
  constructor(e, i = !1) {
    this.cancelRef = null, this.validationPromise = null, this.resetFlag = !1, this.blurTimer = null, this.callbacks = e, this.skipSvgaValidation = i;
  }
  /** 更新回调（用于 React 中当回调闭包更新时） */
  updateCallbacks(e) {
    this.callbacks = e;
  }
  /** 更新 skipSvgaValidation */
  updateSkipSvgaValidation(e) {
    this.skipSvgaValidation = e;
  }
  /**
   * URL 确认验证（blur / enter 场景）
   *
   * 错误提示策略：
   * - 字节超限 → 通过 callbacks.setError 在输入框下方内联显示，不弹 Toast
   * - 验证失败 → 同上，通过 callbacks.setError 内联显示
   * - 验证成功 → callbacks.onConfirm 通知外部
   */
  async doUrlConfirm(e, i) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    const n = (typeof e == "string" ? e : String(e)).trim();
    if (n) {
      if (i && u(n) > i) {
        this.callbacks.setError(`URL 不能超过 ${i} 字节`);
        return;
      }
      let t = !1;
      this.cancelRef = () => {
        t = !0;
      }, this.callbacks.setValidating(!0), this.callbacks.setError("");
      const a = (async () => {
        try {
          if (await f(n, 8e3, this.skipSvgaValidation), t) return;
          this.callbacks.onConfirm(n);
        } catch (s) {
          if (t) return;
          this.callbacks.setError((s instanceof Error ? s.message : "") || "图片 URL 无效");
        } finally {
          t || this.callbacks.setValidating(!1), this.cancelRef = null, this.validationPromise = null;
        }
      })();
      this.validationPromise = a, await a;
    } else
      this.callbacks.onConfirm("");
  }
  /** focus 触发：清除 resetFlag */
  handleUrlFocus() {
    this.resetFlag = !1;
  }
  /** blur 触发：延迟 150ms 执行 */
  handleUrlBlur(e, i) {
    this.blurTimer && clearTimeout(this.blurTimer), this.blurTimer = setTimeout(() => {
      if (this.blurTimer = null, this.resetFlag) {
        this.resetFlag = !1;
        return;
      }
      this.doUrlConfirm(e, i);
    }, 150);
  }
  /** Enter 触发：立即执行，不延迟 */
  handleUrlEnter(e, i) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.resetFlag = !1, this.doUrlConfirm(e, i);
  }
  /**
   * 确保 URL 输入已验证并返回最终 URL
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值（modelValue / value prop）
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidated(e, i, n) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const t = e.trim();
    if (!t) return "";
    if (n && u(t) > n)
      throw new Error(`URL 不能超过 ${n} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return t !== i ? await this._doValidateForSubmit(t) : t;
  }
  /**
   * 带错误状态检查的 ensureUrlValidated
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值
   * @param hasError 当前是否有验证错误
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidatedWithErrorCheck(e, i, n, t) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const a = e.trim();
    if (!a) return "";
    if (t && u(a) > t)
      throw new Error(`URL 不能超过 ${t} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return n || a !== i ? await this._doValidateForSubmit(a) : a;
  }
  /**
   * 提交场景下执行验证并返回结果
   *
   * 错误提示策略：
   * - 验证失败 → 调用 callbacks.setError 让输入框变红，同时 throw Error 给 Modal 层弹 Toast
   * - 验证成功 → callbacks.onConfirm 通知外部
   */
  async _doValidateForSubmit(e) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    let i = !1;
    this.cancelRef = () => {
      i = !0;
    }, this.callbacks.setValidating(!0), this.callbacks.setError("");
    try {
      return await f(e, 8e3, this.skipSvgaValidation), i || (this.callbacks.onConfirm(e), this.callbacks.setValidating(!1)), e;
    } catch (n) {
      throw i || (this.callbacks.setValidating(!1), this.callbacks.setError((n instanceof Error ? n.message : "") || "图片 URL 无效")), n;
    } finally {
      this.cancelRef = null, this.validationPromise = null;
    }
  }
  /** 取消正在进行的验证 */
  cancelValidation() {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
  }
  /** 重置所有状态 */
  reset() {
    this.resetFlag = !0, this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.cancelRef && (this.cancelRef(), this.cancelRef = null), this.validationPromise = null, this.callbacks.setValidating(!1);
  }
  /** 清理资源（组件卸载时调用） */
  dispose() {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.cancelRef && (this.cancelRef(), this.cancelRef = null);
  }
}
function m(r, e = "image/jpeg", i = 0.92) {
  return new Promise((n, t) => {
    r.toBlob(
      (a) => {
        a ? n(a) : t(new Error("Canvas to Blob conversion failed"));
      },
      e,
      i
    );
  });
}
async function S(r, e, i = "image/jpeg", n = 0.92) {
  const t = new Image();
  t.crossOrigin = "anonymous", await new Promise((o, l) => {
    t.onload = () => o(), t.onerror = l, t.src = r;
  });
  const a = document.createElement("canvas");
  a.width = e.width, a.height = e.height;
  const s = a.getContext("2d");
  if (!s)
    throw new Error("Failed to get canvas 2D context");
  return s.drawImage(
    t,
    e.x,
    e.y,
    e.width,
    e.height,
    0,
    0,
    e.width,
    e.height
  ), m(a, i, n);
}
async function I(r, e = "image/jpeg", i = 0.92) {
  if (!r)
    throw new Error("Canvas is null or undefined");
  return m(r, e, i);
}
function U(r) {
  const e = r.dataTransfer?.files;
  return e && e.length > 0 ? e[0] : null;
}
function W(r) {
  return (e) => {
    e.preventDefault();
    const i = U(e);
    i && r(i);
  };
}
function D(r) {
  r.preventDefault();
}
class d extends Error {
  constructor(e, i, n) {
    const t = i === "url-validation" ? `${e}不可用` : `${e}上传失败`, a = n ?? {}, s = a.ErrorInfo || a.message || (i === "url-validation" ? "请检查 URL 是否正确" : "网络错误");
    super(`${t}: ${s}`), this.name = "ImageUploadResolveError", this.label = e, this.type = i, this.cause = n;
  }
}
async function y(r) {
  const { handle: e, hasPendingFile: i, fallbackUrl: n, label: t } = r;
  if (e?.isUrlInputMode ?? !0)
    try {
      const s = await e?.ensureUrlValidated();
      return s ?? "";
    } catch (s) {
      throw new d(t, "url-validation", s);
    }
  else if (i && e)
    try {
      return await e.uploadPendingFile() || "";
    } catch (s) {
      throw new d(t, "upload", s);
    }
  else
    return n.trim();
}
async function $(r) {
  return Promise.all(r.map(y));
}
function M(r, e = "图片") {
  if (r instanceof d)
    return r.message;
  const i = r ?? {}, n = i.ErrorInfo || i.message || "未知错误";
  return `${e}处理失败: ${n}`;
}
async function E() {
  return (await h({
    method: "GET",
    url: "/upload/config"
  })).data;
}
async function N() {
  try {
    return !!(await E()).enabled;
  } catch {
    return !1;
  }
}
async function j(r, e = "cover", i) {
  const n = new FormData();
  n.append("file", r), n.append("type", e);
  const t = await h({
    method: "POST",
    url: "/upload/image",
    data: n,
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 6e4,
    onUploadProgress: (a) => {
      if (i && a.total) {
        const s = Math.round(a.loaded * 100 / a.total);
        i(s);
      }
    }
  });
  if (t.code !== 0)
    throw new Error(t.message || "上传失败");
  return t.data;
}
export {
  d as I,
  P as U,
  W as a,
  I as b,
  m as c,
  N as d,
  U as e,
  E as f,
  S as g,
  M as h,
  $ as i,
  L as j,
  C as k,
  b as l,
  f as m,
  T as n,
  D as p,
  y as r,
  j as u,
  V as v
};
