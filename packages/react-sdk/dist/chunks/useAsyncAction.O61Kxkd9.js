import { ref as S, onUnmounted as V } from "vue";
import { s as x } from "./svga.min.Zof6g_Kl.js";
import { c as P } from "./logger.pnqt7v8K.js";
import { q as G, s as U } from "./layout.CXBa-Kt1.js";
import "./main-layout.FU67Uzr8.js";
import { g as $ } from "./svga.DC02l1-t.js";
import { MessagePlugin as h } from "tdesign-vue-next";
const l = P("SvgaPlayer");
function j(A = {}) {
  const { loop: v = 1, autoPlay: n = !0 } = A, u = S(null), o = S(!1);
  let e = null;
  function f() {
    if (e) {
      try {
        e.stopAnimation(), e.clear();
      } catch (t) {
        l.warn("SVGA cleanup error", "", t);
      }
      e = null, o.value = !1;
    }
  }
  async function y(t) {
    if (!u.value) {
      l.warn("general", "SVGA container not mounted");
      return;
    }
    f();
    const c = u.value, r = new x.Player(c);
    e = r;
    const m = $();
    if (!m) {
      l.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((a, p) => {
        m.load(
          t,
          (g) => {
            try {
              r.loops = v, r.setVideoItem(g), n && (r.startAnimation(), o.value = !0), a();
            } catch (w) {
              p(w);
            }
          },
          (g) => {
            p(g);
          }
        );
      });
    } catch (a) {
      throw l.error("SVGA load error", "", a), f(), a;
    }
  }
  async function s(t) {
    const c = URL.createObjectURL(t);
    try {
      await y(c);
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function i() {
    if (e)
      try {
        e.stopAnimation(), o.value = !1;
      } catch (t) {
        l.warn("SVGA stop error", "", t);
      }
  }
  function d() {
    if (e)
      try {
        e.startAnimation(), o.value = !0;
      } catch (t) {
        l.warn("SVGA start error", "", t);
      }
  }
  return V(() => {
    f();
  }), {
    /** Container ref (attach to div) */
    containerRef: u,
    /** Play SVGA from URL */
    playUrl: y,
    /** Play SVGA from File/Blob */
    playFile: s,
    /** Stop animation */
    stopAnimation: i,
    /** Start animation */
    startAnimation: d,
    /** Whether animation is playing */
    isPlaying: o
  };
}
const E = P("AsyncAction");
function k(A) {
  const { action: v, operationName: n, onSuccess: u, onError: o, errorMessage: e, showError: f, showSuccess: y } = A, s = S(!1);
  let i = !1;
  return { loading: s, execute: async (...c) => {
    if (i) {
      E.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    i = !0, s.value = !0;
    try {
      const r = await v(...c);
      return u?.(r), n && y && h.success(`【${n}】成功`), r;
    } catch (r) {
      const m = r instanceof Error ? r : new Error(String(r)), { code: a, info: p } = G(r), g = e || n || "";
      if (E.error("useAsyncAction", `${g} (ErrorCode: ${a || "N/A"})`, r), n && f !== !1) {
        const w = U(a, p, m.message || String(r));
        h.error(`【${n}】失败：${w}`);
      }
      o?.(m);
      return;
    } finally {
      i = !1, s.value = !1;
    }
  }, reset: () => {
    i = !1, s.value = !1;
  } };
}
export {
  j as a,
  k as u
};
