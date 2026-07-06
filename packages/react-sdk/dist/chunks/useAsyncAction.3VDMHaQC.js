import { useState as A, useRef as p, useCallback as l } from "react";
import { MessagePlugin as r } from "tdesign-react";
const m = {
  success: (s) => r.success(s),
  error: (s) => r.error(s),
  warning: (s) => r.error(s),
  info: (s) => r.info(s)
};
function v(s) {
  const { action: u, onSuccess: i, onError: f, successMessage: n, errorMessage: o } = s, [c, t] = A(!1), g = p(u);
  g.current = u;
  const y = l(async (...d) => {
    if (c) {
      console.warn("[useAsyncAction] 操作正在进行中，忽略重复调用");
      return;
    }
    t(!0);
    try {
      const e = await g.current(...d);
      return n && m.success(n), i?.(e), e;
    } catch (e) {
      const a = e instanceof Error ? e : new Error(String(e)), w = o ? `${o}: ${a.message}` : a.message;
      m.error(w), f?.(a);
      return;
    } finally {
      t(!1);
    }
  }, [c, n, o, i, f]), M = l(() => {
    t(!1);
  }, []);
  return { loading: c, execute: y, reset: M };
}
export {
  m as M,
  v as u
};
