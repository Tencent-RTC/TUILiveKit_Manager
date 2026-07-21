import { useState as h, useRef as w, useCallback as a, useEffect as v } from "react";
import { P as V, g as d } from "./PreviewUrlController.hXJPBpPi.js";
import { s as G } from "./svga.min.Zof6g_Kl.js";
import { g as L } from "./layout.CKxcF5ct.js";
import "./main-layout.D1ZA8pmk.js";
import { useUIKit as b } from "@tencentcloud/uikit-base-component-react";
import { c as I } from "./t.QkUmzvcB.js";
function z() {
  const [c, s] = h(""), i = w(null);
  i.current || (i.current = new V());
  const e = i.current, r = a((o) => {
    const u = e.setPreview(o);
    s(u);
  }, [e]), n = a(() => {
    e.clearPreview(), s("");
  }, [e]);
  return v(() => () => {
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
const l = L("SvgaPlayer");
function F(c = {}) {
  const { loop: s = 1, autoPlay: i = !0 } = c, e = w(null), r = w(null), n = w(!1), o = a(() => {
    if (r.current) {
      try {
        r.current.stopAnimation(), r.current.clear();
      } catch (t) {
        l.warn("SVGA cleanup error", "", t);
      }
      r.current = null, n.current = !1;
    }
  }, []), u = a(async (t) => {
    if (!e.current) {
      l.warn("general", "SVGA container not mounted");
      return;
    }
    o();
    const f = e.current, p = new G.Player(f);
    r.current = p;
    const P = d();
    if (!P) {
      l.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((m, g) => {
        P.load(
          t,
          (y) => {
            try {
              p.loops = s, p.setVideoItem(y), i && (p.startAnimation(), n.current = !0), m();
            } catch (S) {
              g(S);
            }
          },
          (y) => {
            g(y);
          }
        );
      });
    } catch (m) {
      throw l.error("SVGA load error", "", m), o(), m;
    }
  }, [s, i, o]), A = a(async (t) => {
    const f = URL.createObjectURL(t);
    try {
      await u(f);
    } finally {
      URL.revokeObjectURL(f);
    }
  }, [u]), U = a(() => {
    if (r.current)
      try {
        r.current.stopAnimation(), n.current = !1;
      } catch (t) {
        l.warn("SVGA stop error", "", t);
      }
  }, []), R = a(() => {
    if (r.current)
      try {
        r.current.startAnimation(), n.current = !0;
      } catch (t) {
        l.warn("SVGA start error", "", t);
      }
  }, []);
  return v(() => o, [o]), {
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
function K() {
  const { t: c } = b();
  return { t: I(c) };
}
export {
  F as a,
  K as b,
  z as u
};
