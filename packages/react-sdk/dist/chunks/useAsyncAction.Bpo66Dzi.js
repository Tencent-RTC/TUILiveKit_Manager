import { ref as g, onUnmounted as E } from "vue";
import { s as V } from "./svga.min.Zof6g_Kl.js";
import { c as P } from "./logger.pnqt7v8K.js";
import { a3 as x } from "./layout.BInVXJga.js";
import "./main-layout.7dM7GuCv.js";
import { g as G } from "./svga.DC02l1-t.js";
const c = P("SvgaPlayer");
function N(f = {}) {
  const { loop: y = 1, autoPlay: m = !0 } = f, i = g(null), n = g(!1);
  let e = null;
  function t() {
    if (e) {
      try {
        e.stopAnimation(), e.clear();
      } catch (r) {
        c.warn("SVGA cleanup error", "", r);
      }
      e = null, n.value = !1;
    }
  }
  async function o(r) {
    if (!i.value) {
      c.warn("general", "SVGA container not mounted");
      return;
    }
    t();
    const a = i.value, s = new V.Player(a);
    e = s;
    const l = G();
    if (!l) {
      c.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((u, d) => {
        l.load(
          r,
          (A) => {
            try {
              s.loops = y, s.setVideoItem(A), m && (s.startAnimation(), n.value = !0), u();
            } catch (h) {
              d(h);
            }
          },
          (A) => {
            d(A);
          }
        );
      });
    } catch (u) {
      throw c.error("SVGA load error", "", u), t(), u;
    }
  }
  async function v(r) {
    const a = URL.createObjectURL(r);
    try {
      await o(a);
    } finally {
      URL.revokeObjectURL(a);
    }
  }
  function w() {
    if (e)
      try {
        e.stopAnimation(), n.value = !1;
      } catch (r) {
        c.warn("SVGA stop error", "", r);
      }
  }
  function p() {
    if (e)
      try {
        e.startAnimation(), n.value = !0;
      } catch (r) {
        c.warn("SVGA start error", "", r);
      }
  }
  return E(() => {
    t();
  }), {
    /** Container ref (attach to div) */
    containerRef: i,
    /** Play SVGA from URL */
    playUrl: o,
    /** Play SVGA from File/Blob */
    playFile: v,
    /** Stop animation */
    stopAnimation: w,
    /** Start animation */
    startAnimation: p,
    /** Whether animation is playing */
    isPlaying: n
  };
}
const S = P("AsyncAction");
function O(f) {
  const { action: y, operationName: m, onSuccess: i, onError: n, errorMessage: e } = f, t = g(!1);
  let o = !1;
  return { loading: t, execute: async (...p) => {
    if (o) {
      S.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    o = !0, t.value = !0;
    try {
      const r = await y(...p);
      return i?.(r), r;
    } catch (r) {
      const a = r instanceof Error ? r : new Error(String(r)), { code: s } = x(r), l = e || m;
      S.error("useAsyncAction", `${l} (ErrorCode: ${s || "N/A"})`, r), n?.(a);
      return;
    } finally {
      o = !1, t.value = !1;
    }
  }, reset: () => {
    o = !1, t.value = !1;
  } };
}
export {
  N as a,
  O as u
};
