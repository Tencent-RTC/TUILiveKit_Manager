import { ref as p, onUnmounted as G } from "vue";
import { s as U } from "./svga.min.Zof6g_Kl.js";
import { c as h } from "./logger.DRLw23-l.js";
import "./layout.5hoGLPKE.js";
import "./main-layout.DZAH01ts.js";
import { g as x } from "./svga.DC02l1-t.js";
import { MessagePlugin as d } from "tdesign-vue-next";
const c = h("SvgaPlayer");
function O(u = {}) {
  const { loop: f = 1, autoPlay: m = !0 } = u, i = p(null), t = p(!1);
  let e = null;
  function n() {
    if (e) {
      try {
        e.stopAnimation(), e.clear();
      } catch (r) {
        c.warn("SVGA cleanup error", "", r);
      }
      e = null, t.value = !1;
    }
  }
  async function o(r) {
    if (!i.value) {
      c.warn("general", "SVGA container not mounted");
      return;
    }
    n();
    const a = i.value, s = new U.Player(a);
    e = s;
    const w = x();
    if (!w) {
      c.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((l, S) => {
        w.load(
          r,
          (g) => {
            try {
              s.loops = f, s.setVideoItem(g), m && (s.startAnimation(), t.value = !0), l();
            } catch (V) {
              S(V);
            }
          },
          (g) => {
            S(g);
          }
        );
      });
    } catch (l) {
      throw c.error("SVGA load error", "", l), n(), l;
    }
  }
  async function A(r) {
    const a = URL.createObjectURL(r);
    try {
      await o(a);
    } finally {
      URL.revokeObjectURL(a);
    }
  }
  function v() {
    if (e)
      try {
        e.stopAnimation(), t.value = !1;
      } catch (r) {
        c.warn("SVGA stop error", "", r);
      }
  }
  function y() {
    if (e)
      try {
        e.startAnimation(), t.value = !0;
      } catch (r) {
        c.warn("SVGA start error", "", r);
      }
  }
  return G(() => {
    n();
  }), {
    /** Container ref (attach to div) */
    containerRef: i,
    /** Play SVGA from URL */
    playUrl: o,
    /** Play SVGA from File/Blob */
    playFile: A,
    /** Stop animation */
    stopAnimation: v,
    /** Start animation */
    startAnimation: y,
    /** Whether animation is playing */
    isPlaying: t
  };
}
const P = h("AsyncAction");
function j(u) {
  const { action: f, onSuccess: m, onError: i, successMessage: t, errorMessage: e } = u, n = p(!1);
  let o = !1;
  return { loading: n, execute: async (...y) => {
    if (o) {
      P.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    o = !0, n.value = !0;
    try {
      const r = await f(...y);
      return t && d.success(t), m?.(r), r;
    } catch (r) {
      const a = r instanceof Error ? r : new Error(String(r)), s = e ? `${e}: ${a.message}` : a.message;
      P.error("useAsyncAction", "异步操作执行失败", r), d.error(s), i?.(a);
      return;
    } finally {
      o = !1, n.value = !1;
    }
  }, reset: () => {
    o = !1, n.value = !1;
  } };
}
export {
  O as a,
  j as u
};
