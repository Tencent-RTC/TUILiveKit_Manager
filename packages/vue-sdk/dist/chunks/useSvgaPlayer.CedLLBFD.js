import { ref as p, onUnmounted as y } from "vue";
import { P as d, g } from "./PreviewUrlController.CKpndgj3.js";
import { s as h } from "./svga.min.oQNdj2nc.js";
import "./en-US.CklcmnrB.js";
import "./main-layout.DI9Xn1Ek.js";
function b() {
  const t = p(""), o = new d();
  function s(n) {
    const r = o.setPreview(n);
    t.value = r;
  }
  function a() {
    o.clearPreview(), t.value = "";
  }
  return y(() => {
    o.cleanup();
  }), {
    /** Current preview URL (empty string if none) */
    previewUrl: t,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: s,
    /** Clear preview URL */
    clearPreview: a,
    /** Whether preview exists */
    get hasPreview() {
      return !!t.value;
    }
  };
}
function x(t = {}) {
  const { loop: o = 1, autoPlay: s = !0 } = t, a = p(null), n = p(!1);
  let r = null;
  function u() {
    if (r) {
      try {
        r.stopAnimation(), r.clear();
      } catch (e) {
        console.warn("SVGA cleanup error:", e);
      }
      r = null, n.value = !1;
    }
  }
  async function v(e) {
    if (!a.value) {
      console.warn("SVGA container not mounted");
      return;
    }
    u();
    const i = a.value, l = new h.Player(i);
    r = l;
    const w = g();
    if (!w) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((c, m) => {
        w.load(
          e,
          (f) => {
            try {
              l.loops = o, l.setVideoItem(f), s && (l.startAnimation(), n.value = !0), c();
            } catch (S) {
              m(S);
            }
          },
          (f) => {
            m(f);
          }
        );
      });
    } catch (c) {
      throw console.error("SVGA load error:", c), u(), c;
    }
  }
  async function P(e) {
    const i = URL.createObjectURL(e);
    try {
      await v(i);
    } finally {
      URL.revokeObjectURL(i);
    }
  }
  function A() {
    if (r)
      try {
        r.stopAnimation(), n.value = !1;
      } catch (e) {
        console.warn("SVGA stop error:", e);
      }
  }
  function U() {
    if (r)
      try {
        r.startAnimation(), n.value = !0;
      } catch (e) {
        console.warn("SVGA start error:", e);
      }
  }
  return y(() => {
    u();
  }), {
    /** Container ref (attach to div) */
    containerRef: a,
    /** Play SVGA from URL */
    playUrl: v,
    /** Play SVGA from File/Blob */
    playFile: P,
    /** Stop animation */
    stopAnimation: A,
    /** Start animation */
    startAnimation: U,
    /** Whether animation is playing */
    isPlaying: n
  };
}
export {
  x as a,
  b as u
};
