import { ref as d, onUnmounted as V } from "vue";
import { s as x } from "./svga.min.Zof6g_Kl.js";
import { c as h } from "./logger.pnqt7v8K.js";
import { a2 as G } from "./layout.Cg64usQg.js";
import "./main-layout.BKiYd7Lp.js";
import { g as U } from "./svga.DC02l1-t.js";
import { MessagePlugin as w } from "tdesign-vue-next";
const i = h("SvgaPlayer");
function O(g = {}) {
  const { loop: A = 1, autoPlay: p = !0 } = g, l = d(null), n = d(!1);
  let e = null;
  function u() {
    if (e) {
      try {
        e.stopAnimation(), e.clear();
      } catch (t) {
        i.warn("SVGA cleanup error", "", t);
      }
      e = null, n.value = !1;
    }
  }
  async function f(t) {
    if (!l.value) {
      i.warn("general", "SVGA container not mounted");
      return;
    }
    u();
    const s = l.value, r = new x.Player(s);
    e = r;
    const m = U();
    if (!m) {
      i.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((c, y) => {
        m.load(
          t,
          (v) => {
            try {
              r.loops = A, r.setVideoItem(v), p && (r.startAnimation(), n.value = !0), c();
            } catch (E) {
              y(E);
            }
          },
          (v) => {
            y(v);
          }
        );
      });
    } catch (c) {
      throw i.error("SVGA load error", "", c), u(), c;
    }
  }
  async function o(t) {
    const s = URL.createObjectURL(t);
    try {
      await f(s);
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function a() {
    if (e)
      try {
        e.stopAnimation(), n.value = !1;
      } catch (t) {
        i.warn("SVGA stop error", "", t);
      }
  }
  function S() {
    if (e)
      try {
        e.startAnimation(), n.value = !0;
      } catch (t) {
        i.warn("SVGA start error", "", t);
      }
  }
  return V(() => {
    u();
  }), {
    /** Container ref (attach to div) */
    containerRef: l,
    /** Play SVGA from URL */
    playUrl: f,
    /** Play SVGA from File/Blob */
    playFile: o,
    /** Stop animation */
    stopAnimation: a,
    /** Start animation */
    startAnimation: S,
    /** Whether animation is playing */
    isPlaying: n
  };
}
const P = h("AsyncAction");
function j(g) {
  const { action: A, operationName: p, onSuccess: l, onError: n, successMessage: e, errorMessage: u, showToast: f = !0 } = g, o = d(!1);
  let a = !1;
  return { loading: o, execute: async (...s) => {
    if (a) {
      P.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    a = !0, o.value = !0;
    try {
      const r = await A(...s);
      return f && (e ? w.success(e) : w.success(p)), l?.(r), r;
    } catch (r) {
      const m = r instanceof Error ? r : new Error(String(r)), { code: c } = G(r), y = u || p;
      P.error("useAsyncAction", `${y} (ErrorCode: ${c || "N/A"})`, r), f && w.error(`${y}: ${m.message}`), n?.(m);
      return;
    } finally {
      a = !1, o.value = !1;
    }
  }, reset: () => {
    a = !1, o.value = !1;
  } };
}
export {
  O as a,
  j as u
};
