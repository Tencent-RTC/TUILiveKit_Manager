import { aU as g, aS as p, aq as d } from "./main-layout.DNAtZmGx.js";
import { a as w, v } from "./svga.DC02l1-t.js";
import { aD as m, L as b } from "./error-message.BVYzOzgW.js";
function h(r, t = 8e3, a = !1) {
  return new Promise((s, e) => {
    if (!r) {
      e(new Error("URL 不能为空"));
      return;
    }
    if (g(r)) {
      s(!0);
      return;
    }
    if (p(r)) {
      if (a) {
        s(!0);
        return;
      }
      w(r, t > 8e3 ? t : 15e3).then(() => s(!0)).catch(e);
      return;
    }
    const i = document.createElement("img");
    let n = null;
    const o = () => {
      n && (clearTimeout(n), n = null), i.onload = null, i.onerror = null, i.src = "", i.parentNode && i.parentNode.removeChild(i);
    };
    i.onload = () => {
      o(), s(!0);
    }, i.onerror = () => {
      o(), e(new Error("图片加载失败，请检查 URL 是否正确"));
    }, n = setTimeout(() => {
      o(), e(new Error("图片加载超时，请检查 URL 是否可访问"));
    }, t), i.style.display = "none", document.body?.appendChild(i), i.src = r;
  });
}
function U(r, t = 1e4) {
  return new Promise((a, s) => {
    const e = document.createElement("img");
    let i = null;
    const n = () => {
      i && (clearTimeout(i), i = null), e.onload = null, e.onerror = null, e.src = "", e.parentNode && e.parentNode.removeChild(e);
    };
    e.onload = () => {
      n(), a(!0);
    }, e.onerror = () => {
      n(), s(new Error("图片加载失败，文件可能已损坏"));
    }, i = setTimeout(() => {
      n(), s(new Error("图片加载超时"));
    }, t), e.style.display = "none", document.body?.appendChild(e), e.src = r;
  });
}
function y(r, t = 15e3) {
  return new Promise((a, s) => {
    const e = document.createElement("video");
    let i = null;
    const n = () => {
      i && (clearTimeout(i), i = null), e.onloadeddata = null, e.onerror = null, e.src = "", e.parentNode && e.parentNode.removeChild(e);
    };
    e.onloadeddata = () => {
      n(), a(!0);
    }, e.onerror = () => {
      n(), s(new Error("视频加载失败，文件可能已损坏"));
    }, i = setTimeout(() => {
      n(), s(new Error("视频加载超时"));
    }, t), e.style.display = "none", e.muted = !0, document.body?.appendChild(e), e.src = r, e.load();
  });
}
function C(r, t) {
  const a = t ? t.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"], s = a.filter((l) => !l.startsWith(".")), e = a.filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), i = a.some((l) => l.startsWith("video/")), n = "." + (r.name.split(".").pop() || "").toLowerCase();
  return s.includes(r.type) || i && r.type.startsWith("video/") || e.includes(n) ? { valid: !0 } : { valid: !1, errorHint: `只允许上传 ${a.map((c) => c === "image/svg+xml" ? "SVG" : c === "video/mp4" ? "MP4" : c.startsWith(".") ? c.slice(1).toUpperCase() : c.startsWith("image/") ? c.replace("image/", "").toUpperCase() : c).join("/")} 格式的文件` };
}
function V(r, t) {
  return r.size <= t * 1024 * 1024;
}
async function F(r, t, a = !1) {
  const e = (t ? t.split(",").map((l) => l.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"]).filter((l) => l.startsWith(".")).map((l) => l.toLowerCase()), i = "." + (r.name.split(".").pop() || "").toLowerCase(), n = i === ".svga", o = !n && e.includes(i) && !r.type.startsWith("image/") && !r.type.startsWith("video/");
  if (n)
    a || await v(r);
  else if (!o) {
    const l = URL.createObjectURL(r);
    try {
      r.type.startsWith("video/") ? await y(l) : await U(l);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
}
class P {
  constructor(t, a = !1) {
    this.cancelRef = null, this.validationPromise = null, this.resetFlag = !1, this.blurTimer = null, this.callbacks = t, this.skipSvgaValidation = a;
  }
  /** 更新回调（用于 React 中当回调闭包更新时） */
  updateCallbacks(t) {
    this.callbacks = t;
  }
  /** 更新 skipSvgaValidation */
  updateSkipSvgaValidation(t) {
    this.skipSvgaValidation = t;
  }
  /**
   * URL 确认验证（blur / enter 场景）
   *
   * 错误提示策略：
   * - 字节超限 → 通过 callbacks.setError 在输入框下方内联显示，不弹 Toast
   * - 验证失败 → 同上，通过 callbacks.setError 内联显示
   * - 验证成功 → callbacks.onConfirm 通知外部
   */
  async doUrlConfirm(t, a) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    const s = (typeof t == "string" ? t : String(t)).trim();
    if (s) {
      if (a && d(s) > a) {
        this.callbacks.setError(`URL 不能超过 ${a} 字节`);
        return;
      }
      let e = !1;
      this.cancelRef = () => {
        e = !0;
      }, this.callbacks.setValidating(!0), this.callbacks.setError("");
      const i = (async () => {
        try {
          if (await h(s, 8e3, this.skipSvgaValidation), e) return;
          this.callbacks.onConfirm(s);
        } catch (n) {
          if (e) return;
          this.callbacks.setError((n instanceof Error ? n.message : "") || "图片 URL 无效");
        } finally {
          e || this.callbacks.setValidating(!1), this.cancelRef = null, this.validationPromise = null;
        }
      })();
      this.validationPromise = i, await i;
    } else
      this.callbacks.onConfirm("");
  }
  /** focus 触发：清除 resetFlag */
  handleUrlFocus() {
    this.resetFlag = !1;
  }
  /** blur 触发：延迟 150ms 执行 */
  handleUrlBlur(t, a) {
    this.blurTimer && clearTimeout(this.blurTimer), this.blurTimer = setTimeout(() => {
      if (this.blurTimer = null, this.resetFlag) {
        this.resetFlag = !1;
        return;
      }
      this.doUrlConfirm(t, a);
    }, 150);
  }
  /** Enter 触发：立即执行，不延迟 */
  handleUrlEnter(t, a) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.resetFlag = !1, this.doUrlConfirm(t, a);
  }
  /**
   * 确保 URL 输入已验证并返回最终 URL
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值（modelValue / value prop）
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidated(t, a, s) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const e = t.trim();
    if (!e) return "";
    if (s && d(e) > s)
      throw new Error(`URL 不能超过 ${s} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return e !== a ? await this._doValidateForSubmit(e) : e;
  }
  /**
   * 带错误状态检查的 ensureUrlValidated
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值
   * @param hasError 当前是否有验证错误
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidatedWithErrorCheck(t, a, s, e) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const i = t.trim();
    if (!i) return "";
    if (e && d(i) > e)
      throw new Error(`URL 不能超过 ${e} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return s || i !== a ? await this._doValidateForSubmit(i) : i;
  }
  /**
   * 提交场景下执行验证并返回结果
   *
   * 错误提示策略：
   * - 验证失败 → 调用 callbacks.setError 让输入框变红，同时 throw Error 给 Modal 层弹 Toast
   * - 验证成功 → callbacks.onConfirm 通知外部
   */
  async _doValidateForSubmit(t) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    let a = !1;
    this.cancelRef = () => {
      a = !0;
    }, this.callbacks.setValidating(!0), this.callbacks.setError("");
    try {
      return await h(t, 8e3, this.skipSvgaValidation), a || (this.callbacks.onConfirm(t), this.callbacks.setValidating(!1)), t;
    } catch (s) {
      throw a || (this.callbacks.setValidating(!1), this.callbacks.setError((s instanceof Error ? s.message : "") || "图片 URL 无效")), s;
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
function f(r, t = "image/jpeg", a = 0.92) {
  return new Promise((s, e) => {
    r.toBlob(
      (i) => {
        i ? s(i) : e(new Error("Canvas to Blob conversion failed"));
      },
      t,
      a
    );
  });
}
async function S(r, t, a = "image/jpeg", s = 0.92) {
  const e = new Image();
  e.crossOrigin = "anonymous", await new Promise((o, l) => {
    e.onload = () => o(), e.onerror = l, e.src = r;
  });
  const i = document.createElement("canvas");
  i.width = t.width, i.height = t.height;
  const n = i.getContext("2d");
  if (!n)
    throw new Error("Failed to get canvas 2D context");
  return n.drawImage(
    e,
    t.x,
    t.y,
    t.width,
    t.height,
    0,
    0,
    t.width,
    t.height
  ), f(i, a, s);
}
async function I(r, t = "image/jpeg", a = 0.92) {
  if (!r)
    throw new Error("Canvas is null or undefined");
  return f(r, t, a);
}
class u extends Error {
  constructor(t, a, s) {
    const e = a === "url-validation" ? `${t}不可用` : `${t}上传失败`, i = s ?? {}, n = i.ErrorInfo || i.message || (a === "url-validation" ? "请检查 URL 是否正确" : "网络错误");
    super(`${e}: ${n}`), this.name = "ImageUploadResolveError", this.label = t, this.type = a, this.cause = s;
  }
}
async function T(r) {
  const { handle: t, hasPendingFile: a, fallbackUrl: s, label: e } = r;
  if (t?.isUrlInputMode ?? !0)
    try {
      const n = await t?.ensureUrlValidated();
      return n ?? "";
    } catch (n) {
      throw new u(e, "url-validation", n);
    }
  else if (a && t)
    try {
      return await t.uploadPendingFile() || "";
    } catch (n) {
      throw new u(e, "upload", n);
    }
  else
    return s.trim();
}
async function W(r) {
  return Promise.all(r.map(T));
}
function $(r, t = "图片") {
  if (r instanceof u)
    return r.message;
  const a = r ?? {}, s = a.ErrorInfo || a.message || "未知错误";
  return `${t}处理失败: ${s}`;
}
async function E() {
  return (await m({
    method: "GET",
    url: "/upload/config"
  })).data;
}
async function M() {
  try {
    return !!(await E()).enabled;
  } catch {
    return !1;
  }
}
async function N(r, t = "cover", a) {
  const s = new FormData();
  s.append("file", r), s.append("type", t);
  const e = await m({
    method: "POST",
    url: "/upload/image",
    data: s,
    headers: { "Content-Type": "multipart/form-data" },
    timeout: 6e4,
    onUploadProgress: (i) => {
      if (a && i.total) {
        const n = Math.round(i.loaded * 100 / i.total);
        a(n);
      }
    }
  });
  if (e.code !== 0)
    throw new b(e.message || "", e.code);
  return e.data;
}
export {
  u as I,
  P as U,
  I as a,
  M as b,
  f as c,
  E as d,
  $ as e,
  W as f,
  S as g,
  V as h,
  C as i,
  U as j,
  h as k,
  y as l,
  T as r,
  N as u,
  F as v
};
