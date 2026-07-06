import { useState as x, useRef as v, useCallback as p } from "react";
import { c as C } from "./logger.DCFRj533.js";
import { q as L, s as N } from "./layout.DppKPdLU.js";
import "./main-layout.BqLTYqar.js";
import { MessagePlugin as o } from "tdesign-react";
const w = {
  success: (r) => o.success(r),
  error: (r) => o.error(r),
  warning: (r) => o.warning(r),
  info: (r) => o.info(r)
}, y = C("AsyncAction");
function P(r) {
  const { action: c, operationName: e, onSuccess: a, onError: i, errorMessage: u, showError: f, showSuccess: g } = r, [n, t] = x(!1), l = v(c);
  l.current = c;
  const E = p(async (...M) => {
    if (n) {
      y.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    t(!0);
    try {
      const s = await l.current(...M);
      return a?.(s), e && g && w.success(`【${e}】成功`), s;
    } catch (s) {
      const m = s instanceof Error ? s : new Error(String(s)), { code: A, info: S } = L(s), $ = u || e || "";
      if (y.error("useAsyncAction", `${$} (ErrorCode: ${A || "N/A"})`, s), e && f !== !1) {
        const h = N(A, S, m.message || String(s));
        w.error(`【${e}】失败：${h}`);
      }
      i?.(m);
      return;
    } finally {
      t(!1);
    }
  }, [n, u, a, i, e, f, g]), d = p(() => {
    t(!1);
  }, []);
  return { loading: n, execute: E, reset: d };
}
export {
  w as M,
  P as u
};
