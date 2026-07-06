import { useState as w, useRef as E, useCallback as l } from "react";
import { MessagePlugin as e } from "tdesign-react";
import { c as S } from "./logger.DRLw23-l.js";
const m = {
  success: (r) => e.success(r),
  error: (r) => e.error(r),
  warning: (r) => e.error(r),
  info: (r) => e.info(r)
}, A = S("AsyncAction");
function R(r) {
  const { action: i, onSuccess: u, onError: f, successMessage: o, errorMessage: n } = r, [c, t] = w(!1), g = E(i);
  g.current = i;
  const y = l(async (...d) => {
    if (c) {
      A.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    t(!0);
    try {
      const s = await g.current(...d);
      return o && m.success(o), u?.(s), s;
    } catch (s) {
      const a = s instanceof Error ? s : new Error(String(s)), p = n ? `${n}: ${a.message}` : a.message;
      A.error("useAsyncAction", "异步操作执行失败", s), m.error(p), f?.(a);
      return;
    } finally {
      t(!1);
    }
  }, [c, o, n, u, f]), M = l(() => {
    t(!1);
  }, []);
  return { loading: c, execute: y, reset: M };
}
export {
  m as M,
  R as u
};
