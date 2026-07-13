import { useState as p, useRef as w, useCallback as l } from "react";
import { MessagePlugin as e } from "tdesign-react";
import { c as E } from "./logger.DfjyL4S7.js";
const m = {
  success: (r) => e.success(r),
  error: (r) => e.error(r),
  warning: (r) => e.error(r),
  info: (r) => e.info(r)
}, S = E("AsyncAction");
function R(r) {
  const { action: i, onSuccess: u, onError: f, successMessage: o, errorMessage: n } = r, [c, t] = p(!1), g = w(i);
  g.current = i;
  const y = l(async (...M) => {
    if (c) {
      S.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    t(!0);
    try {
      const s = await g.current(...M);
      return o && m.success(o), u?.(s), s;
    } catch (s) {
      const a = s instanceof Error ? s : new Error(String(s)), d = n ? `${n}: ${a.message}` : a.message;
      m.error(d), f?.(a);
      return;
    } finally {
      t(!1);
    }
  }, [c, o, n, u, f]), A = l(() => {
    t(!1);
  }, []);
  return { loading: c, execute: y, reset: A };
}
export {
  m as M,
  R as u
};
