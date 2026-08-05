import { bl as f, bj as g, g as u } from "./main-layout.Dt5HcQRZ.js";
import { bo as p, bn as b } from "./shared-state.CsnQDWhV.js";
function h(a, t = 8e3, r = !1) {
  return new Promise((s, e) => {
    if (!a) {
      e(new Error("URL 不能为空"));
      return;
    }
    if (f(a)) {
      s(!0);
      return;
    }
    if (g(a)) {
      if (r) {
        s(!0);
        return;
      }
      p(a, t > 8e3 ? t : 15e3).then(() => s(!0)).catch(e);
      return;
    }
    const i = document.createElement("img");
    let l = null;
    const o = () => {
      l && (clearTimeout(l), l = null), i.onload = null, i.onerror = null, i.src = "", i.parentNode && i.parentNode.removeChild(i);
    };
    i.onload = () => {
      o(), s(!0);
    }, i.onerror = () => {
      o(), e(new Error("图片加载失败，请检查 URL 是否正确"));
    }, l = setTimeout(() => {
      o(), e(new Error("图片加载超时，请检查 URL 是否可访问"));
    }, t), i.style.display = "none", document.body?.appendChild(i), i.src = a;
  });
}
function w(a, t = 1e4) {
  return new Promise((r, s) => {
    const e = document.createElement("img");
    let i = null;
    const l = () => {
      i && (clearTimeout(i), i = null), e.onload = null, e.onerror = null, e.src = "", e.parentNode && e.parentNode.removeChild(e);
    };
    e.onload = () => {
      l(), r(!0);
    }, e.onerror = () => {
      l(), s(new Error("图片加载失败，文件可能已损坏"));
    }, i = setTimeout(() => {
      l(), s(new Error("图片加载超时"));
    }, t), e.style.display = "none", document.body?.appendChild(e), e.src = a;
  });
}
function v(a, t = 15e3) {
  return new Promise((r, s) => {
    const e = document.createElement("video");
    let i = null;
    const l = () => {
      i && (clearTimeout(i), i = null), e.onloadeddata = null, e.onerror = null, e.src = "", e.parentNode && e.parentNode.removeChild(e);
    };
    e.onloadeddata = () => {
      l(), r(!0);
    }, e.onerror = () => {
      l(), s(new Error("视频加载失败，文件可能已损坏"));
    }, i = setTimeout(() => {
      l(), s(new Error("视频加载超时"));
    }, t), e.style.display = "none", e.muted = !0, document.body?.appendChild(e), e.src = a, e.load();
  });
}
function R(a, t) {
  const r = t ? t.split(",").map((n) => n.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"], s = r.filter((n) => !n.startsWith(".")), e = r.filter((n) => n.startsWith(".")).map((n) => n.toLowerCase()), i = r.some((n) => n.startsWith("video/")), l = "." + (a.name.split(".").pop() || "").toLowerCase();
  return s.includes(a.type) || i && a.type.startsWith("video/") || e.includes(l) ? { valid: !0 } : { valid: !1, errorHint: `只允许上传 ${r.map((c) => c === "image/svg+xml" ? "SVG" : c === "video/mp4" ? "MP4" : c.startsWith(".") ? c.slice(1).toUpperCase() : c.startsWith("image/") ? c.replace("image/", "").toUpperCase() : c).join("/")} 格式的文件` };
}
function E(a, t) {
  return a.size <= t * 1024 * 1024;
}
async function k(a, t, r = !1) {
  const e = (t ? t.split(",").map((n) => n.trim()) : ["image/jpeg", "image/png", "image/gif", "image/webp"]).filter((n) => n.startsWith(".")).map((n) => n.toLowerCase()), i = "." + (a.name.split(".").pop() || "").toLowerCase(), l = i === ".svga", o = !l && e.includes(i) && !a.type.startsWith("image/") && !a.type.startsWith("video/");
  if (l)
    r || await b(a);
  else if (!o) {
    const n = URL.createObjectURL(a);
    try {
      a.type.startsWith("video/") ? await v(n) : await w(n);
    } finally {
      URL.revokeObjectURL(n);
    }
  }
}
class L {
  constructor(t, r = !1) {
    this.cancelRef = null, this.validationPromise = null, this.resetFlag = !1, this.blurTimer = null, this.callbacks = t, this.skipSvgaValidation = r;
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
  async doUrlConfirm(t, r) {
    this.cancelRef && (this.cancelRef(), this.cancelRef = null);
    const s = (typeof t == "string" ? t : String(t)).trim();
    if (s) {
      if (r && u(s) > r) {
        this.callbacks.setError(`URL 不能超过 ${r} 字节`);
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
        } catch (l) {
          if (e) return;
          this.callbacks.setError((l instanceof Error ? l.message : "") || "图片 URL 无效");
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
  handleUrlBlur(t, r) {
    this.blurTimer && clearTimeout(this.blurTimer), this.blurTimer = setTimeout(() => {
      if (this.blurTimer = null, this.resetFlag) {
        this.resetFlag = !1;
        return;
      }
      this.doUrlConfirm(t, r);
    }, 150);
  }
  /** Enter 触发：立即执行，不延迟 */
  handleUrlEnter(t, r) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null), this.resetFlag = !1, this.doUrlConfirm(t, r);
  }
  /**
   * 确保 URL 输入已验证并返回最终 URL
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值（modelValue / value prop）
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidated(t, r, s) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const e = t.trim();
    if (!e) return "";
    if (s && u(e) > s)
      throw new Error(`URL 不能超过 ${s} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return e !== r ? await this._doValidateForSubmit(e) : e;
  }
  /**
   * 带错误状态检查的 ensureUrlValidated
   * @param urlInputValue 当前输入值
   * @param currentValue 当前已确认的值
   * @param hasError 当前是否有验证错误
   * @param maxBytes URL 最大字节数
   */
  async ensureUrlValidatedWithErrorCheck(t, r, s, e) {
    this.blurTimer && (clearTimeout(this.blurTimer), this.blurTimer = null);
    const i = t.trim();
    if (!i) return "";
    if (e && u(i) > e)
      throw new Error(`URL 不能超过 ${e} 字节`);
    if (this.validationPromise)
      try {
        await this.validationPromise;
      } catch {
      }
    return s || i !== r ? await this._doValidateForSubmit(i) : i;
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
    let r = !1;
    this.cancelRef = () => {
      r = !0;
    }, this.callbacks.setValidating(!0), this.callbacks.setError("");
    try {
      return await h(t, 8e3, this.skipSvgaValidation), r || (this.callbacks.onConfirm(t), this.callbacks.setValidating(!1)), t;
    } catch (s) {
      throw r || (this.callbacks.setValidating(!1), this.callbacks.setError((s instanceof Error ? s.message : "") || "图片 URL 无效")), s;
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
function m(a, t = "image/jpeg", r = 0.92) {
  return new Promise((s, e) => {
    a.toBlob(
      (i) => {
        i ? s(i) : e(new Error("Canvas to Blob conversion failed"));
      },
      t,
      r
    );
  });
}
async function V(a, t, r = "image/jpeg", s = 0.92) {
  const e = new Image();
  e.crossOrigin = "anonymous", await new Promise((o, n) => {
    e.onload = () => o(), e.onerror = n, e.src = a;
  });
  const i = document.createElement("canvas");
  i.width = t.width, i.height = t.height;
  const l = i.getContext("2d");
  if (!l)
    throw new Error("Failed to get canvas 2D context");
  return l.drawImage(
    e,
    t.x,
    t.y,
    t.width,
    t.height,
    0,
    0,
    t.width,
    t.height
  ), m(i, r, s);
}
async function C(a, t = "image/jpeg", r = 0.92) {
  if (!a)
    throw new Error("Canvas is null or undefined");
  return m(a, t, r);
}
class d extends Error {
  constructor(t, r, s) {
    const e = r === "url-validation" ? `${t}不可用` : `${t}上传失败`, i = s ?? {}, l = i.ErrorInfo || i.message || (r === "url-validation" ? "请检查 URL 是否正确" : "网络错误");
    super(`${e}: ${l}`), this.name = "ImageUploadResolveError", this.label = t, this.type = r, this.cause = s;
  }
}
async function U(a) {
  const { handle: t, hasPendingFile: r, fallbackUrl: s, label: e } = a;
  if (t?.isUrlInputMode ?? !0)
    try {
      const l = await t?.ensureUrlValidated();
      return l ?? "";
    } catch (l) {
      throw new d(e, "url-validation", l);
    }
  else if (r && t)
    try {
      return await t.uploadPendingFile() || "";
    } catch (l) {
      throw new d(e, "upload", l);
    }
  else
    return s.trim();
}
async function F(a) {
  return Promise.all(a.map(U));
}
function P(a, t = "图片") {
  if (a instanceof d)
    return a.message;
  const r = a ?? {}, s = r.ErrorInfo || r.message || "未知错误";
  return `${t}处理失败: ${s}`;
}
export {
  d as I,
  L as U,
  C as a,
  P as b,
  m as c,
  F as d,
  E as e,
  R as f,
  V as g,
  w as h,
  h as i,
  v as j,
  U as r,
  k as v
};
