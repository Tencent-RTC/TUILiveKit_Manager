import { useRef as p, useCallback as o, useEffect as d } from "react";
import { s as h } from "./svga.min.Zof6g_Kl.js";
import { c as G } from "./logger.DCFRj533.js";
import "./layout.DppKPdLU.js";
import "./main-layout.BqLTYqar.js";
import { g as v } from "./svga.DC02l1-t.js";
const e = G("SvgaPlayer");
function E(w = {}) {
  const { loop: m = 1, autoPlay: y = !0 } = w, u = p(null), r = p(null), n = p(!1), a = o(() => {
    if (r.current) {
      try {
        r.current.stopAnimation(), r.current.clear();
      } catch (t) {
        e.warn("SVGA cleanup error", "", t);
      }
      r.current = null, n.current = !1;
    }
  }, []), l = o(async (t) => {
    if (!u.current) {
      e.warn("general", "SVGA container not mounted");
      return;
    }
    a();
    const c = u.current, s = new h.Player(c);
    r.current = s;
    const g = v();
    if (!g) {
      e.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((i, A) => {
        g.load(
          t,
          (f) => {
            try {
              s.loops = m, s.setVideoItem(f), y && (s.startAnimation(), n.current = !0), i();
            } catch (V) {
              A(V);
            }
          },
          (f) => {
            A(f);
          }
        );
      });
    } catch (i) {
      throw e.error("SVGA load error", "", i), a(), i;
    }
  }, [m, y, a]), S = o(async (t) => {
    const c = URL.createObjectURL(t);
    try {
      await l(c);
    } finally {
      URL.revokeObjectURL(c);
    }
  }, [l]), P = o(() => {
    if (r.current)
      try {
        r.current.stopAnimation(), n.current = !1;
      } catch (t) {
        e.warn("SVGA stop error", "", t);
      }
  }, []), R = o(() => {
    if (r.current)
      try {
        r.current.startAnimation(), n.current = !0;
      } catch (t) {
        e.warn("SVGA start error", "", t);
      }
  }, []);
  return d(() => a, [a]), {
    /** Container ref (attach to div) */
    containerRef: u,
    /** Play SVGA from URL */
    playUrl: l,
    /** Play SVGA from File/Blob */
    playFile: S,
    /** Stop animation */
    stopAnimation: P,
    /** Start animation */
    startAnimation: R,
    /** Whether animation is playing */
    get isPlaying() {
      return n.current;
    }
  };
}
export {
  E as u
};
