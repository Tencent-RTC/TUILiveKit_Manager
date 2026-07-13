import { useState as g, useRef as w, useCallback as c, useEffect as v } from "react";
import { P as h, g as V } from "./PreviewUrlController.CKpndgj3.js";
import { s as d } from "./svga.min.oQNdj2nc.js";
import "./en-US.DXdmRfHg.js";
import "./main-layout.Bx74vUBv.js";
function x() {
  const [i, s] = g(""), a = w(null);
  a.current || (a.current = new h());
  const e = a.current, r = c((o) => {
    const l = e.setPreview(o);
    s(l);
  }, [e]), n = c(() => {
    e.clearPreview(), s("");
  }, [e]);
  return v(() => () => {
    e.cleanup();
  }, [e]), {
    /** Current preview URL (empty string if none) */
    previewUrl: i,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: r,
    /** Clear preview URL */
    clearPreview: n,
    /** Whether preview exists */
    hasPreview: !!i
  };
}
function C(i = {}) {
  const { loop: s = 1, autoPlay: a = !0 } = i, e = w(null), r = w(null), n = w(!1), o = c(() => {
    if (r.current) {
      try {
        r.current.stopAnimation(), r.current.clear();
      } catch (t) {
        console.warn("SVGA cleanup error:", t);
      }
      r.current = null, n.current = !1;
    }
  }, []), l = c(async (t) => {
    if (!e.current) {
      console.warn("SVGA container not mounted");
      return;
    }
    o();
    const u = e.current, f = new d.Player(u);
    r.current = f;
    const y = V();
    if (!y) {
      console.error("SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((p, P) => {
        y.load(
          t,
          (m) => {
            try {
              f.loops = s, f.setVideoItem(m), a && (f.startAnimation(), n.current = !0), p();
            } catch (S) {
              P(S);
            }
          },
          (m) => {
            P(m);
          }
        );
      });
    } catch (p) {
      throw console.error("SVGA load error:", p), o(), p;
    }
  }, [s, a, o]), A = c(async (t) => {
    const u = URL.createObjectURL(t);
    try {
      await l(u);
    } finally {
      URL.revokeObjectURL(u);
    }
  }, [l]), U = c(() => {
    if (r.current)
      try {
        r.current.stopAnimation(), n.current = !1;
      } catch (t) {
        console.warn("SVGA stop error:", t);
      }
  }, []), R = c(() => {
    if (r.current)
      try {
        r.current.startAnimation(), n.current = !0;
      } catch (t) {
        console.warn("SVGA start error:", t);
      }
  }, []);
  return v(() => o, [o]), {
    /** Container ref (attach to div) */
    containerRef: e,
    /** Play SVGA from URL */
    playUrl: l,
    /** Play SVGA from File/Blob */
    playFile: A,
    /** Stop animation */
    stopAnimation: U,
    /** Start animation */
    startAnimation: R,
    /** Whether animation is playing */
    get isPlaying() {
      return n.current;
    }
  };
}
export {
  C as a,
  x as u
};
