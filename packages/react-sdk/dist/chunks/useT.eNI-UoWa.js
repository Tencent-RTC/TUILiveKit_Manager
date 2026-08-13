import { useState as h, useRef as m, useCallback as o, useEffect as g } from "react";
import { P as V } from "./PreviewUrlController.CCpOcmIC.js";
import { s as d } from "./svga.min.Zof6g_Kl.js";
import { c as G, av as b, bw as L } from "./shared-state.BkuXD95c.js";
import "./main-layout.CW0IWNsf.js";
import { useUIKit as I } from "@tencentcloud/uikit-base-component-react";
function j() {
  const [c, s] = h(""), i = m(null);
  i.current || (i.current = new V());
  const e = i.current, r = o((a) => {
    const u = e.setPreview(a);
    s(u);
  }, [e]), n = o(() => {
    e.clearPreview(), s("");
  }, [e]);
  return g(() => () => {
    e.cleanup();
  }, [e]), {
    /** Current preview URL (empty string if none) */
    previewUrl: c,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: r,
    /** Clear preview URL */
    clearPreview: n,
    /** Whether preview exists */
    hasPreview: !!c
  };
}
const l = G("SvgaPlayer");
function z(c = {}) {
  const { loop: s = 1, autoPlay: i = !0 } = c, e = m(null), r = m(null), n = m(!1), a = o(() => {
    if (r.current) {
      try {
        r.current.stopAnimation(), r.current.clear();
      } catch (t) {
        l.warn("SVGA cleanup error", "", t);
      }
      r.current = null, n.current = !1;
    }
  }, []), u = o(async (t) => {
    if (!e.current) {
      l.warn("general", "SVGA container not mounted");
      return;
    }
    a();
    const f = e.current, p = new d.Player(f);
    r.current = p;
    const P = b();
    if (!P) {
      l.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((w, v) => {
        P.load(
          t,
          (y) => {
            try {
              p.loops = s, p.setVideoItem(y), i && (p.startAnimation(), n.current = !0), w();
            } catch (S) {
              v(S);
            }
          },
          (y) => {
            v(y);
          }
        );
      });
    } catch (w) {
      throw l.error("SVGA load error", "", w), a(), w;
    }
  }, [s, i, a]), A = o(async (t) => {
    const f = URL.createObjectURL(t);
    try {
      await u(f);
    } finally {
      URL.revokeObjectURL(f);
    }
  }, [u]), U = o(() => {
    if (r.current)
      try {
        r.current.stopAnimation(), n.current = !1;
      } catch (t) {
        l.warn("SVGA stop error", "", t);
      }
  }, []), R = o(() => {
    if (r.current)
      try {
        r.current.startAnimation(), n.current = !0;
      } catch (t) {
        l.warn("SVGA start error", "", t);
      }
  }, []);
  return g(() => a, [a]), {
    /** Container ref (attach to div) */
    containerRef: e,
    /** Play SVGA from URL */
    playUrl: u,
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
function F() {
  const { t: c } = I();
  return { t: L(c) };
}
export {
  z as a,
  F as b,
  j as u
};
