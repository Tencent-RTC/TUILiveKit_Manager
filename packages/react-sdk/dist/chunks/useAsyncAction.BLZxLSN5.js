import { ref as A, onUnmounted as U } from "vue";
import { P as V, g as x } from "./PreviewUrlController.KM17Oi3R.js";
import { s as G } from "./svga.min.Zof6g_Kl.js";
import { c as E } from "./logger.rNWqpx5t.js";
import { q as $, s as L } from "./layout.BFdpDTDu.js";
import "./main-layout.G3PkFHlB.js";
import { MessagePlugin as d } from "tdesign-vue-next";
function j() {
  const a = A(""), s = new V();
  function n(o) {
    const e = s.setPreview(o);
    a.value = e;
  }
  function i() {
    s.clearPreview(), a.value = "";
  }
  return U(() => {
    s.cleanup();
  }), {
    /** Current preview URL (empty string if none) */
    previewUrl: a,
    /** Set preview from File/Blob (or null to clear) */
    setPreview: n,
    /** Clear preview URL */
    clearPreview: i,
    /** Whether preview exists */
    get hasPreview() {
      return !!a.value;
    }
  };
}
const m = E("SvgaPlayer");
function k(a = {}) {
  const { loop: s = 1, autoPlay: n = !0 } = a, i = A(null), o = A(!1);
  let e = null;
  function v() {
    if (e) {
      try {
        e.stopAnimation(), e.clear();
      } catch (t) {
        m.warn("SVGA cleanup error", "", t);
      }
      e = null, o.value = !1;
    }
  }
  async function w(t) {
    if (!i.value) {
      m.warn("general", "SVGA container not mounted");
      return;
    }
    v();
    const f = i.value, r = new G.Player(f);
    e = r;
    const g = x();
    if (!g) {
      m.error("general", "SVGA parser not initialized");
      return;
    }
    try {
      await new Promise((c, y) => {
        g.load(
          t,
          (p) => {
            try {
              r.loops = s, r.setVideoItem(p), n && (r.startAnimation(), o.value = !0), c();
            } catch (P) {
              y(P);
            }
          },
          (p) => {
            y(p);
          }
        );
      });
    } catch (c) {
      throw m.error("SVGA load error", "", c), v(), c;
    }
  }
  async function l(t) {
    const f = URL.createObjectURL(t);
    try {
      await w(f);
    } finally {
      URL.revokeObjectURL(f);
    }
  }
  function u() {
    if (e)
      try {
        e.stopAnimation(), o.value = !1;
      } catch (t) {
        m.warn("SVGA stop error", "", t);
      }
  }
  function S() {
    if (e)
      try {
        e.startAnimation(), o.value = !0;
      } catch (t) {
        m.warn("SVGA start error", "", t);
      }
  }
  return U(() => {
    v();
  }), {
    /** Container ref (attach to div) */
    containerRef: i,
    /** Play SVGA from URL */
    playUrl: w,
    /** Play SVGA from File/Blob */
    playFile: l,
    /** Stop animation */
    stopAnimation: u,
    /** Start animation */
    startAnimation: S,
    /** Whether animation is playing */
    isPlaying: o
  };
}
const h = E("AsyncAction");
function q(a) {
  const { action: s, operationName: n, onSuccess: i, onError: o, errorMessage: e, showError: v, showSuccess: w } = a, l = A(!1);
  let u = !1;
  return { loading: l, execute: async (...f) => {
    if (u) {
      h.warn("useAsyncAction", "操作正在进行中，忽略重复调用");
      return;
    }
    u = !0, l.value = !0;
    try {
      const r = await s(...f);
      return i?.(r), n && w && d.success(`【${n}】成功`), r;
    } catch (r) {
      const g = r instanceof Error ? r : new Error(String(r)), { code: c, info: y } = $(r), p = e || n || "";
      if (h.error("useAsyncAction", `${p} (ErrorCode: ${c || "N/A"})`, r), n && v !== !1) {
        const P = L(c, y, g.message || String(r));
        d.error(`【${n}】失败：${P}`);
      }
      o?.(g);
      return;
    } finally {
      u = !1, l.value = !1;
    }
  }, reset: () => {
    u = !1, l.value = !1;
  } };
}
export {
  k as a,
  q as b,
  j as u
};
