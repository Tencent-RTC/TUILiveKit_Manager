import { MessagePlugin as e } from "tdesign-react";
import { useState as w, useRef as M, useCallback as f } from "react";
import { c as x } from "./logger.pnqt7v8K.js";
import { a3 as S } from "./layout.BInVXJga.js";
import "./main-layout.7dM7GuCv.js";
const $ = {
  success: (r) => e.success(r),
  error: (r) => e.error(r),
  warning: (r) => e.error(r),
  info: (r) => e.info(r)
}, g = x("AsyncAction");
function b(r) {
  const { action: t, operationName: l, onSuccess: c, onError: a, errorMessage: i } = r, [n, s] = w(!1), u = M(t);
  u.current = t;
  const m = f(async (...p) => {
    if (n) {
      g.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    s(!0);
    try {
      const o = await u.current(...p);
      return c?.(o), o;
    } catch (o) {
      const y = o instanceof Error ? o : new Error(String(o)), { code: d } = S(o), E = i || l;
      g.error("useAsyncAction", `${E} (ErrorCode: ${d || "N/A"})`, o), a?.(y);
      return;
    } finally {
      s(!1);
    }
  }, [n, i, c, a]), A = f(() => {
    s(!1);
  }, []);
  return { loading: n, execute: m, reset: A };
}
export {
  $ as M,
  b as u
};
