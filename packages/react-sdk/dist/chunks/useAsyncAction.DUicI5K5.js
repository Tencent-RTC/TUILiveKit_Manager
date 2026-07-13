import { useState as x, useRef as v, useCallback as p } from "react";
import { c as C } from "./logger.BVGT9iyh.js";
import { q as L, s as N } from "./layout.DpmHfGro.js";
import "./main-layout.CAk7EHcz.js";
import { MessagePlugin as o } from "tdesign-react";
const y = {
  success: (r) => o.success(r),
  error: (r) => o.error(r),
  warning: (r) => o.error(r),
  info: (r) => o.info(r)
}, E = C("AsyncAction");
function P(r) {
  const { action: c, operationName: s, onSuccess: a, onError: i, errorMessage: u, showError: f, showSuccess: g } = r, [n, t] = x(!1), l = v(c);
  l.current = c;
  const d = p(async (...M) => {
    if (n) {
      E.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    t(!0);
    try {
      const e = await l.current(...M);
      return a?.(e), s && g && y.success(`【${s}】成功`), e;
    } catch (e) {
      const m = e instanceof Error ? e : new Error(String(e)), { code: A, info: S } = L(e), $ = u || s || "";
      if (E.error("useAsyncAction", `${$} (ErrorCode: ${A || "N/A"})`, e), s && f !== !1) {
        const h = N(A, S, m.message || String(e));
        y.error(`【${s}】失败：${h}`);
      }
      i?.(m);
      return;
    } finally {
      t(!1);
    }
  }, [n, u, a, i, s, f, g]), w = p(() => {
    t(!1);
  }, []);
  return { loading: n, execute: d, reset: w };
}
export {
  y as M,
  P as u
};
