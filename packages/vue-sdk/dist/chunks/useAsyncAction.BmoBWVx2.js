import { useState as x, useRef as S, useCallback as y } from "react";
import { MessagePlugin as s } from "tdesign-react";
import { c as h } from "./logger.pnqt7v8K.js";
import { a2 as v } from "./layout.Cg64usQg.js";
import "./main-layout.BKiYd7Lp.js";
const c = {
  success: (r) => s.success(r),
  error: (r) => s.error(r),
  warning: (r) => s.error(r),
  info: (r) => s.info(r)
}, d = h("AsyncAction");
function k(r) {
  const { action: a, operationName: i, onSuccess: u, onError: f, successMessage: o, errorMessage: g, showToast: l = !0 } = r, [n, t] = x(!1), m = S(a);
  m.current = a;
  const w = y(async (...M) => {
    if (n) {
      d.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    t(!0);
    try {
      const e = await m.current(...M);
      return l && (o ? c.success(o) : c.success(i)), u?.(e), e;
    } catch (e) {
      const A = e instanceof Error ? e : new Error(String(e)), { code: $ } = v(e), p = g || i;
      d.error("useAsyncAction", `${p} (ErrorCode: ${$ || "N/A"})`, e), l && c.error(`${p}: ${A.message}`), f?.(A);
      return;
    } finally {
      t(!1);
    }
  }, [n, o, g, u, f]), E = y(() => {
    t(!1);
  }, []);
  return { loading: n, execute: w, reset: E };
}
export {
  c as M,
  k as u
};
