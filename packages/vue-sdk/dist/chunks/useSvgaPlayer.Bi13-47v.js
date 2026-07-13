import { ref as v, onUnmounted as P } from "vue";
import { P as d, g as h } from "./PreviewUrlController.C8NgpJv8.js";
import { s as V } from "./svga.min.Zof6g_Kl.js";
import { c as G } from "./logger.rNWqpx5t.js";
import "./layout.C1lzYH2h.js";
import "./main-layout.QTEHh38b.js";
function j() {
  const n = v(""), o = new d();
  function u(t) {
    const r = o.setPreview(t);
    n.value = r;
  }
  function i() {
    o.clearPreview(), n.value = "";
  }
  return P(() => {
    o.cleanup();
  }), {
    /** Current preview URL (empty string if none) */
    previewUrl: n,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: u,
    /** Clear preview URL */
    clearPreview: i,
    /** Whether preview exists */
    get hasPreview() {
      return !!n.value;
    }
  };
}
const a = G("SvgaPlayer");
function k(n = {}) {
  const { loop: o = 1, autoPlay: u = !0 } = n, i = v(null), t = v(!1);
  let r = null;
  function f() {
    if (r) {
      try {
        r.stopAnimation(), r.clear();
      } catch (e) {
        a.warn("SVGA cleanup error", "", e);
      }
      r = null, t.value = !1;
    }
  }
  async function m(e) {
    if (!i.value) {
      a.warn("general", "SVGA container not mounted");
      return;
    }
    f();
    const l = i.value, c = new V.Player(l);
    r = c;
    const w = h();
    if (!w) {
      a.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((s, y) => {
        w.load(
          e,
          (p) => {
            try {
              c.loops = o, c.setVideoItem(p), u && (c.startAnimation(), t.value = !0), s();
            } catch (S) {
              y(S);
            }
          },
          (p) => {
            y(p);
          }
        );
      });
    } catch (s) {
      throw a.error("SVGA load error", "", s), f(), s;
    }
  }
  async function g(e) {
    const l = URL.createObjectURL(e);
    try {
      await m(l);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
  function A() {
    if (r)
      try {
        r.stopAnimation(), t.value = !1;
      } catch (e) {
        a.warn("SVGA stop error", "", e);
      }
  }
  function U() {
    if (r)
      try {
        r.startAnimation(), t.value = !0;
      } catch (e) {
        a.warn("SVGA start error", "", e);
      }
  }
  return P(() => {
    f();
  }), {
    /** Container ref (attach to div) */
    containerRef: i,
    /** Play SVGA from URL */
    playUrl: m,
    /** Play SVGA from File/Blob */
    playFile: g,
    /** Stop animation */
    stopAnimation: A,
    /** Start animation */
    startAnimation: U,
    /** Whether animation is playing */
    isPlaying: t
  };
}
export {
  k as a,
  j as u
};
