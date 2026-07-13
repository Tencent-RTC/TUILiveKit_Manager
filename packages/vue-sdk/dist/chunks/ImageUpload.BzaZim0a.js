import { jsxs as I, jsx as d, Fragment as se } from "react/jsx-runtime";
import * as k from "react";
import { forwardRef as dt, useRef as q, useState as S, useImperativeHandle as ft, useEffect as j, useCallback as ye } from "react";
import { p as mt, c as vt } from "./logger.pnqt7v8K.js";
import { UploadIcon as Fe, CloseIcon as gt, ImageIcon as wt, CutIcon as Ct } from "tdesign-icons-react";
import { Button as ce, Input as yt, Dialog as Rt } from "tdesign-react";
import { useUIKit as _t } from "@tencentcloud/uikit-base-component-react";
import { I as y } from "./layout.BInVXJga.js";
import { aA as le, b1 as We, ba as Et, b0 as St, af as Dt, b9 as Pt, b3 as xt } from "./main-layout.7dM7GuCv.js";
import { i as At, g as bt } from "./svga.DC02l1-t.js";
import { U as zt, u as Ve, k as It, i as Mt, h as Nt, v as Ut, g as Lt } from "./upload.cidDdOp0.js";
import { s as Ke } from "./svga.min.Zof6g_Kl.js";
import { M as Y } from "./useAsyncAction.DxNHBQrn.js";
import { u as Ot } from "./usePreviewUrl.D8rNvbX1.js";
import { u as Tt } from "./useSvgaPlayer.CmxN4tuC.js";
var Pe = function(a, r) {
  return Pe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
  }, Pe(a, r);
};
function Ft(a, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Pe(a, r);
  function e() {
    this.constructor = a;
  }
  a.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var D = function() {
  return D = Object.assign || function(r) {
    for (var e, t = 1, o = arguments.length; t < o; t++) {
      e = arguments[t];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, D.apply(this, arguments);
};
var Re, Ze;
function Wt() {
  if (Ze) return Re;
  Ze = 1;
  var a = !1, r, e, t, o, i, n, s, c, l, p, v, h, g, P, w;
  function C() {
    if (!a) {
      a = !0;
      var _ = navigator.userAgent, R = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(_), U = /(Mac OS X)|(Windows)|(Linux)/.exec(_);
      if (h = /\b(iPhone|iP[ao]d)/.exec(_), g = /\b(iP[ao]d)/.exec(_), p = /Android/i.exec(_), P = /FBAN\/\w+;/i.exec(_), w = /Mobile/i.exec(_), v = !!/Win64/.exec(_), R) {
        r = R[1] ? parseFloat(R[1]) : R[5] ? parseFloat(R[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
        var H = /(?:Trident\/(\d+.\d+))/.exec(_);
        n = H ? parseFloat(H[1]) + 4 : r, e = R[2] ? parseFloat(R[2]) : NaN, t = R[3] ? parseFloat(R[3]) : NaN, o = R[4] ? parseFloat(R[4]) : NaN, o ? (R = /(?:Chrome\/(\d+\.\d+))/.exec(_), i = R && R[1] ? parseFloat(R[1]) : NaN) : i = NaN;
      } else
        r = e = t = i = o = NaN;
      if (U) {
        if (U[1]) {
          var f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(_);
          s = f ? parseFloat(f[1].replace("_", ".")) : !0;
        } else
          s = !1;
        c = !!U[2], l = !!U[3];
      } else
        s = c = l = !1;
    }
  }
  var M = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return C() || r;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return C() || n > r;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return M.ie() && v;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return C() || e;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return C() || t;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return C() || o;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return M.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return C() || i;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return C() || c;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return C() || s;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return C() || l;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return C() || h;
    },
    mobile: function() {
      return C() || h || g || p || w;
    },
    nativeApp: function() {
      return C() || P;
    },
    android: function() {
      return C() || p;
    },
    ipad: function() {
      return C() || g;
    }
  };
  return Re = M, Re;
}
var _e, ke;
function Vt() {
  if (ke) return _e;
  ke = 1;
  var a = !!(typeof window < "u" && window.document && window.document.createElement), r = {
    canUseDOM: a,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
    canUseViewport: a && !!window.screen,
    isInWorker: !a
    // For now, this is true - might change in the future.
  };
  return _e = r, _e;
}
var Ee, Ge;
function Zt() {
  if (Ge) return Ee;
  Ge = 1;
  var a = Vt(), r;
  a.canUseDOM && (r = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
  document.implementation.hasFeature("", "") !== !0);
  function e(t, o) {
    if (!a.canUseDOM || o && !("addEventListener" in document))
      return !1;
    var i = "on" + t, n = i in document;
    if (!n) {
      var s = document.createElement("div");
      s.setAttribute(i, "return;"), n = typeof s[i] == "function";
    }
    return !n && r && t === "wheel" && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n;
  }
  return Ee = e, Ee;
}
var Se, je;
function kt() {
  if (je) return Se;
  je = 1;
  var a = Wt(), r = Zt(), e = 10, t = 40, o = 800;
  function i(n) {
    var s = 0, c = 0, l = 0, p = 0;
    return "detail" in n && (c = n.detail), "wheelDelta" in n && (c = -n.wheelDelta / 120), "wheelDeltaY" in n && (c = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (s = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (s = c, c = 0), l = s * e, p = c * e, "deltaY" in n && (p = n.deltaY), "deltaX" in n && (l = n.deltaX), (l || p) && n.deltaMode && (n.deltaMode == 1 ? (l *= t, p *= t) : (l *= o, p *= o)), l && !s && (s = l < 1 ? -1 : 1), p && !c && (c = p < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: l,
      pixelY: p
    };
  }
  return i.getEventType = function() {
    return a.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel";
  }, Se = i, Se;
}
var De, He;
function Gt() {
  return He || (He = 1, De = kt()), De;
}
var jt = Gt();
const Ht = /* @__PURE__ */ mt(jt);
function Xt(a, r, e, t, o, i) {
  i === void 0 && (i = 0);
  var n = B(a, r, i), s = n.width, c = n.height, l = Math.min(s, e), p = Math.min(c, t);
  return l > p * o ? {
    width: p * o,
    height: p
  } : {
    width: l,
    height: l / o
  };
}
function qt(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function oe(a, r, e, t, o) {
  o === void 0 && (o = 0);
  var i = B(r.width, r.height, o), n = i.width, s = i.height;
  return {
    x: Xe(a.x, n, e.width, t),
    y: Xe(a.y, s, e.height, t)
  };
}
function Xe(a, r, e, t) {
  var o = Math.abs(r * t / 2 - e / 2);
  return he(a, -o, o);
}
function qe(a, r) {
  return Math.sqrt(Math.pow(a.y - r.y, 2) + Math.pow(a.x - r.x, 2));
}
function Ye(a, r) {
  return Math.atan2(r.y - a.y, r.x - a.x) * 180 / Math.PI;
}
function Yt(a, r, e, t, o, i, n) {
  i === void 0 && (i = 0), n === void 0 && (n = !0);
  var s = n ? $t : Kt, c = B(r.width, r.height, i), l = B(r.naturalWidth, r.naturalHeight, i), p = {
    x: s(100, ((c.width - e.width / o) / 2 - a.x / o) / c.width * 100),
    y: s(100, ((c.height - e.height / o) / 2 - a.y / o) / c.height * 100),
    width: s(100, e.width / c.width * 100 / o),
    height: s(100, e.height / c.height * 100 / o)
  }, v = Math.round(s(l.width, p.width * l.width / 100)), h = Math.round(s(l.height, p.height * l.height / 100)), g = l.width >= l.height * t, P = g ? {
    width: Math.round(h * t),
    height: h
  } : {
    width: v,
    height: Math.round(v / t)
  }, w = D(D({}, P), {
    x: Math.round(s(l.width - P.width, p.x * l.width / 100)),
    y: Math.round(s(l.height - P.height, p.y * l.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: w
  };
}
function $t(a, r) {
  return Math.min(a, Math.max(0, r));
}
function Kt(a, r) {
  return r;
}
function Bt(a, r, e, t, o, i) {
  var n = B(r.width, r.height, e), s = he(t.width / n.width * (100 / a.width), o, i), c = {
    x: s * n.width / 2 - t.width / 2 - n.width * s * (a.x / 100),
    y: s * n.height / 2 - t.height / 2 - n.height * s * (a.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function Jt(a, r, e) {
  var t = qt(r);
  return e.height > e.width ? e.height / (a.height * t) : e.width / (a.width * t);
}
function Qt(a, r, e, t, o, i) {
  e === void 0 && (e = 0);
  var n = B(r.naturalWidth, r.naturalHeight, e), s = he(Jt(a, r, t), o, i), c = t.height > t.width ? t.height / a.height : t.width / a.width, l = {
    x: ((n.width - a.width) / 2 - a.x) * c,
    y: ((n.height - a.height) / 2 - a.y) * c
  };
  return {
    crop: l,
    zoom: s
  };
}
function $e(a, r) {
  return {
    x: (r.x + a.x) / 2,
    y: (r.y + a.y) / 2
  };
}
function er(a) {
  return a * Math.PI / 180;
}
function B(a, r, e) {
  var t = er(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * r),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * r)
  };
}
function he(a, r, e) {
  return Math.min(Math.max(a, r), e);
}
function ue() {
  for (var a = [], r = 0; r < arguments.length; r++)
    a[r] = arguments[r];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var tr = `.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`, rr = 1, or = 3, nr = 1, ir = (
  /** @class */
  (function(a) {
    Ft(r, a);
    function r() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.cropperRef = k.createRef(), e.imageRef = k.createRef(), e.videoRef = k.createRef(), e.containerPosition = {
        x: 0,
        y: 0
      }, e.containerRef = null, e.styleRef = null, e.containerRect = null, e.mediaSize = {
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0
      }, e.dragStartPosition = {
        x: 0,
        y: 0
      }, e.dragStartCrop = {
        x: 0,
        y: 0
      }, e.gestureZoomStart = 0, e.gestureRotationStart = 0, e.isTouching = !1, e.lastPinchDistance = 0, e.lastPinchRotation = 0, e.rafDragTimeout = null, e.rafPinchTimeout = null, e.wheelTimer = null, e.currentDoc = typeof document < "u" ? document : null, e.currentWindow = typeof window < "u" ? window : null, e.resizeObserver = null, e.previousCropSize = null, e.isInitialized = !1, e.state = {
        cropSize: null,
        hasWheelJustStarted: !1,
        mediaObjectFit: void 0
      }, e.initResizeObserver = function() {
        if (!(typeof window.ResizeObserver > "u" || !e.containerRef)) {
          var t = !0;
          e.resizeObserver = new window.ResizeObserver(function(o) {
            if (t) {
              t = !1;
              return;
            }
            e.computeSizes();
          }), e.resizeObserver.observe(e.containerRef);
        }
      }, e.preventZoomSafari = function(t) {
        return t.preventDefault();
      }, e.cleanEvents = function() {
        e.currentDoc && (e.currentDoc.removeEventListener("mousemove", e.onMouseMove), e.currentDoc.removeEventListener("mouseup", e.onDragStopped), e.currentDoc.removeEventListener("touchmove", e.onTouchMove), e.currentDoc.removeEventListener("touchend", e.onDragStopped), e.currentDoc.removeEventListener("gesturechange", e.onGestureChange), e.currentDoc.removeEventListener("gestureend", e.onGestureEnd), e.currentDoc.removeEventListener("scroll", e.onScroll));
      }, e.clearScrollEvent = function() {
        e.containerRef && e.containerRef.removeEventListener("wheel", e.onWheel), e.wheelTimer && clearTimeout(e.wheelTimer);
      }, e.onMediaLoad = function() {
        var t = e.computeSizes();
        t && (e.previousCropSize = t, e.emitCropData(), e.setInitialCrop(t), e.isInitialized = !0), e.props.onMediaLoaded && e.props.onMediaLoaded(e.mediaSize);
      }, e.setInitialCrop = function(t) {
        if (e.props.initialCroppedAreaPercentages) {
          var o = Bt(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), i = o.crop, n = o.zoom;
          e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(n);
        } else if (e.props.initialCroppedAreaPixels) {
          var s = Qt(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), i = s.crop, n = s.zoom;
          e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(n);
        }
      }, e.computeSizes = function() {
        var t, o, i, n, s, c, l = e.imageRef.current || e.videoRef.current;
        if (l && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var p = e.containerRect.width / e.containerRect.height, v = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((o = e.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, h = ((i = e.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((n = e.videoRef.current) === null || n === void 0 ? void 0 : n.videoHeight) || 0, g = l.offsetWidth < v || l.offsetHeight < h, P = v / h, w = void 0;
          if (g)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                w = p > P ? {
                  width: e.containerRect.height * P,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / P
                };
                break;
              case "horizontal-cover":
                w = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / P
                };
                break;
              case "vertical-cover":
                w = {
                  width: e.containerRect.height * P,
                  height: e.containerRect.height
                };
                break;
            }
          else
            w = {
              width: l.offsetWidth,
              height: l.offsetHeight
            };
          e.mediaSize = D(D({}, w), {
            naturalWidth: v,
            naturalHeight: h
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var C = e.props.cropSize ? e.props.cropSize : Xt(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((s = e.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== C.height || ((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== C.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(C), e.setState({
            cropSize: C
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(C), C;
        }
      }, e.saveContainerPosition = function() {
        if (e.containerRef) {
          var t = e.containerRef.getBoundingClientRect();
          e.containerPosition = {
            x: t.left,
            y: t.top
          };
        }
      }, e.onMouseDown = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("mousemove", e.onMouseMove), e.currentDoc.addEventListener("mouseup", e.onDragStopped), e.saveContainerPosition(), e.onDragStart(r.getMousePoint(t)));
      }, e.onMouseMove = function(t) {
        return e.onDrag(r.getMousePoint(t));
      }, e.onScroll = function(t) {
        e.currentDoc && (t.preventDefault(), e.saveContainerPosition());
      }, e.onTouchStart = function(t) {
        e.currentDoc && (e.isTouching = !0, !(e.props.onTouchRequest && !e.props.onTouchRequest(t)) && (e.currentDoc.addEventListener("touchmove", e.onTouchMove, {
          passive: !1
        }), e.currentDoc.addEventListener("touchend", e.onDragStopped), e.saveContainerPosition(), t.touches.length === 2 ? e.onPinchStart(t) : t.touches.length === 1 && e.onDragStart(r.getTouchPoint(t.touches[0]))));
      }, e.onTouchMove = function(t) {
        t.preventDefault(), t.touches.length === 2 ? e.onPinchMove(t) : t.touches.length === 1 && e.onDrag(r.getTouchPoint(t.touches[0]));
      }, e.onGestureStart = function(t) {
        e.currentDoc && (t.preventDefault(), e.currentDoc.addEventListener("gesturechange", e.onGestureChange), e.currentDoc.addEventListener("gestureend", e.onGestureEnd), e.gestureZoomStart = e.props.zoom, e.gestureRotationStart = e.props.rotation);
      }, e.onGestureChange = function(t) {
        if (t.preventDefault(), !e.isTouching) {
          var o = r.getMousePoint(t), i = e.gestureZoomStart - 1 + t.scale;
          if (e.setNewZoom(i, o, {
            shouldUpdatePosition: !0
          }), e.props.onRotationChange) {
            var n = e.gestureRotationStart + t.rotation;
            e.props.onRotationChange(n);
          }
        }
      }, e.onGestureEnd = function(t) {
        e.cleanEvents();
      }, e.onDragStart = function(t) {
        var o, i, n = t.x, s = t.y;
        e.dragStartPosition = {
          x: n,
          y: s
        }, e.dragStartCrop = D({}, e.props.crop), (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o);
      }, e.onDrag = function(t) {
        var o = t.x, i = t.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(o === void 0 || i === void 0)) {
            var n = o - e.dragStartPosition.x, s = i - e.dragStartPosition.y, c = {
              x: e.dragStartCrop.x + n,
              y: e.dragStartCrop.y + s
            }, l = e.props.restrictPosition ? oe(c, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : c;
            e.props.onCropChange(l);
          }
        }));
      }, e.onDragStopped = function() {
        var t, o;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (o = (t = e.props).onInteractionEnd) === null || o === void 0 || o.call(t);
      }, e.onWheel = function(t) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
          t.preventDefault();
          var o = r.getMousePoint(t), i = Ht(t).pixelY, n = e.props.zoom - i * e.props.zoomSpeed / 200;
          e.setNewZoom(n, o, {
            shouldUpdatePosition: !0
          }), e.state.hasWheelJustStarted || e.setState({
            hasWheelJustStarted: !0
          }, function() {
            var s, c;
            return (c = (s = e.props).onInteractionStart) === null || c === void 0 ? void 0 : c.call(s);
          }), e.wheelTimer && clearTimeout(e.wheelTimer), e.wheelTimer = e.currentWindow.setTimeout(function() {
            return e.setState({
              hasWheelJustStarted: !1
            }, function() {
              var s, c;
              return (c = (s = e.props).onInteractionEnd) === null || c === void 0 ? void 0 : c.call(s);
            });
          }, 250);
        }
      }, e.getPointOnContainer = function(t, o) {
        var i = t.x, n = t.y;
        if (!e.containerRect)
          throw new Error("The Cropper is not mounted");
        return {
          x: e.containerRect.width / 2 - (i - o.x),
          y: e.containerRect.height / 2 - (n - o.y)
        };
      }, e.getPointOnMedia = function(t) {
        var o = t.x, i = t.y, n = e.props, s = n.crop, c = n.zoom;
        return {
          x: (o + s.x) / c,
          y: (i + s.y) / c
        };
      }, e.setNewZoom = function(t, o, i) {
        var n = i === void 0 ? {} : i, s = n.shouldUpdatePosition, c = s === void 0 ? !0 : s;
        if (!(!e.state.cropSize || !e.props.onZoomChange)) {
          var l = he(t, e.props.minZoom, e.props.maxZoom);
          if (c) {
            var p = e.getPointOnContainer(o, e.containerPosition), v = e.getPointOnMedia(p), h = {
              x: v.x * l - p.x,
              y: v.y * l - p.y
            }, g = e.props.restrictPosition ? oe(h, e.mediaSize, e.state.cropSize, l, e.props.rotation) : h;
            e.props.onCropChange(g);
          }
          e.props.onZoomChange(l);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? oe(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return Yt(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
      }, e.emitCropData = function() {
        var t = e.getCropData();
        if (t) {
          var o = t.croppedAreaPercentages, i = t.croppedAreaPixels;
          e.props.onCropComplete && e.props.onCropComplete(o, i), e.props.onCropAreaChange && e.props.onCropAreaChange(o, i);
        }
      }, e.emitCropAreaChange = function() {
        var t = e.getCropData();
        if (t) {
          var o = t.croppedAreaPercentages, i = t.croppedAreaPixels;
          e.props.onCropAreaChange && e.props.onCropAreaChange(o, i);
        }
      }, e.recomputeCropPosition = function() {
        var t, o;
        if (e.state.cropSize) {
          var i = e.props.crop;
          if (e.isInitialized && (!((t = e.previousCropSize) === null || t === void 0) && t.width) && (!((o = e.previousCropSize) === null || o === void 0) && o.height)) {
            var n = Math.abs(e.previousCropSize.width - e.state.cropSize.width) > 1e-6 || Math.abs(e.previousCropSize.height - e.state.cropSize.height) > 1e-6;
            if (n) {
              var s = e.state.cropSize.width / e.previousCropSize.width, c = e.state.cropSize.height / e.previousCropSize.height;
              i = {
                x: e.props.crop.x * s,
                y: e.props.crop.y * c
              };
            }
          }
          var l = e.props.restrictPosition ? oe(i, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : i;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(l), e.emitCropData();
        }
      }, e.onKeyDown = function(t) {
        var o, i, n = e.props, s = n.crop, c = n.onCropChange, l = n.keyboardStep, p = n.zoom, v = n.rotation, h = l;
        if (e.state.cropSize) {
          t.shiftKey && (h *= 0.2);
          var g = D({}, s);
          switch (t.key) {
            case "ArrowUp":
              g.y -= h, t.preventDefault();
              break;
            case "ArrowDown":
              g.y += h, t.preventDefault();
              break;
            case "ArrowLeft":
              g.x -= h, t.preventDefault();
              break;
            case "ArrowRight":
              g.x += h, t.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (g = oe(g, e.mediaSize, e.state.cropSize, p, v)), t.repeat || (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o), c(g);
        }
      }, e.onKeyUp = function(t) {
        var o, i;
        switch (t.key) {
          case "ArrowUp":
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
            t.preventDefault();
            break;
          default:
            return;
        }
        e.emitCropData(), (i = (o = e.props).onInteractionEnd) === null || i === void 0 || i.call(o);
      }, e;
    }
    return r.prototype.componentDidMount = function() {
      !this.currentDoc || !this.currentWindow || (this.containerRef && (this.containerRef.ownerDocument && (this.currentDoc = this.containerRef.ownerDocument), this.currentDoc.defaultView && (this.currentWindow = this.currentDoc.defaultView), this.initResizeObserver(), typeof window.ResizeObserver > "u" && this.currentWindow.addEventListener("resize", this.computeSizes), this.props.zoomWithScroll && this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = tr, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(e) {
      var t, o, i, n, s, c, l, p, v;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = e.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((n = this.props.cropSize) === null || n === void 0 ? void 0 : n.width) ? this.computeSizes() : (((s = e.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((l = e.crop) === null || l === void 0 ? void 0 : l.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((v = this.videoRef.current) === null || v === void 0 || v.load());
      var h = this.getObjectFit();
      h !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: h
      }, this.computeSizes);
    }, r.prototype.getAspect = function() {
      var e = this.props, t = e.cropSize, o = e.aspect;
      return t ? t.width / t.height : o;
    }, r.prototype.getObjectFit = function() {
      var e, t, o, i;
      if (this.props.objectFit === "cover") {
        var n = this.imageRef.current || this.videoRef.current;
        if (n && this.containerRef) {
          this.containerRect = this.containerRef.getBoundingClientRect();
          var s = this.containerRect.width / this.containerRect.height, c = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0, l = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, p = c / l;
          return p < s ? "horizontal-cover" : "vertical-cover";
        }
        return "horizontal-cover";
      }
      return this.props.objectFit;
    }, r.prototype.onPinchStart = function(e) {
      var t = r.getTouchPoint(e.touches[0]), o = r.getTouchPoint(e.touches[1]);
      this.lastPinchDistance = qe(t, o), this.lastPinchRotation = Ye(t, o), this.onDragStart($e(t, o));
    }, r.prototype.onPinchMove = function(e) {
      var t = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = r.getTouchPoint(e.touches[0]), i = r.getTouchPoint(e.touches[1]), n = $e(o, i);
        this.onDrag(n), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = qe(o, i), c = t.props.zoom * (s / t.lastPinchDistance);
          t.setNewZoom(c, n, {
            shouldUpdatePosition: !1
          }), t.lastPinchDistance = s;
          var l = Ye(o, i), p = t.props.rotation + (l - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(p), t.lastPinchRotation = l;
        });
      }
    }, r.prototype.render = function() {
      var e = this, t, o = this.props, i = o.image, n = o.video, s = o.mediaProps, c = o.cropperProps, l = o.transform, p = o.crop, v = p.x, h = p.y, g = o.rotation, P = o.zoom, w = o.cropShape, C = o.showGrid, M = o.roundCropAreaPixels, _ = o.style, R = _.containerStyle, U = _.cropAreaStyle, H = _.mediaStyle, f = o.classes, de = f.containerClassName, J = f.cropAreaClassName, N = f.mediaClassName, b = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
      return k.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(O) {
          return e.containerRef = O;
        },
        "data-testid": "container",
        style: R,
        className: ue("reactEasyCrop_Container", de)
      }, i ? k.createElement("img", D({
        alt: "",
        className: ue("reactEasyCrop_Image", b === "contain" && "reactEasyCrop_Contain", b === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", b === "vertical-cover" && "reactEasyCrop_Cover_Vertical", N)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: D(D({}, H), {
          transform: l || "translate(".concat(v, "px, ").concat(h, "px) rotate(").concat(g, "deg) scale(").concat(P, ")")
        }),
        onLoad: this.onMediaLoad
      })) : n && k.createElement("video", D({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: ue("reactEasyCrop_Video", b === "contain" && "reactEasyCrop_Contain", b === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", b === "vertical-cover" && "reactEasyCrop_Cover_Vertical", N)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: D(D({}, H), {
          transform: l || "translate(".concat(v, "px, ").concat(h, "px) rotate(").concat(g, "deg) scale(").concat(P, ")")
        }),
        controls: !1
      }), (Array.isArray(n) ? n : [{
        src: n
      }]).map(function(L) {
        return k.createElement("source", D({
          key: L.src
        }, L));
      })), this.state.cropSize && k.createElement("div", D({
        ref: this.cropperRef,
        style: D(D({}, U), {
          width: M ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: M ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: ue("reactEasyCrop_CropArea", w === "round" && "reactEasyCrop_CropAreaRound", C && "reactEasyCrop_CropAreaGrid", J)
      }, c)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: or,
      minZoom: rr,
      cropShape: "rect",
      objectFit: "contain",
      showGrid: !0,
      style: {},
      classes: {},
      mediaProps: {},
      cropperProps: {},
      zoomSpeed: 1,
      restrictPosition: !0,
      zoomWithScroll: !0,
      keyboardStep: nr
    }, r.getMousePoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, r.getTouchPoint = function(e) {
      return {
        x: Number(e.clientX),
        y: Number(e.clientY)
      };
    }, r;
  })(k.Component)
);
const pe = vt("ImageUpload");
At(Ke.Parser);
const _r = dt(function({
  value: r = "",
  onChange: e,
  type: t = "cover",
  cropEnabled: o = !0,
  aspectRatio: i = 16 / 9,
  maxSize: n = 10,
  placeholder: s,
  urlPlaceholder: c,
  showUrlInput: l = !0,
  previewWidth: p,
  previewHeight: v,
  uploadEnabled: h = !1,
  accept: g,
  acceptHint: P,
  maxBytes: w,
  className: C = "",
  deferUpload: M = !1,
  onFileReady: _,
  skipSvgaValidation: R = !1,
  onUrlErrorChange: U
}, H) {
  const { t: f } = _t(), de = s || f(y.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), J = q(null), [N, b] = S(!1), [L, O] = S(0), [Be, Q] = S(!1), [fe, ne] = S(""), [x, X] = S(!h), [z, ie] = S(r), [me, G] = S(!1), [V, T] = S(""), A = q(null);
  A.current || (A.current = new zt({
    setValidating: G,
    setError: T,
    onConfirm: e
  }, R)), A.current.updateCallbacks({
    setValidating: G,
    setError: T,
    onConfirm: e
  }), A.current.updateSkipSvgaValidation(R);
  const $ = q(null), { previewUrl: Z, setPreview: K } = Ot(), [Je, ve] = S(!1), [ge, ae] = S(!1), {
    containerRef: Qe,
    playUrl: xe,
    stopAnimation: ar
  } = Tt({ loop: 1, autoPlay: !0 });
  ft(H, () => ({
    get isUrlInputMode() {
      return x;
    },
    get isValidating() {
      return me;
    },
    get urlValidationError() {
      return V;
    },
    /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
    get hasUrlError() {
      return x ? !!(V || w && z.trim() && le(z.trim()) > w) : !1;
    },
    get urlInputValue() {
      return z;
    },
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => {
      X(!0);
    },
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (u) => {
      T(u);
    },
    validateImageUrl: async (u, m) => {
      G(!0), T("");
      try {
        return await It(u, m, R), !0;
      } catch (E) {
        const W = E instanceof Error ? E : new Error(String(E));
        throw T(W.message || f(y.IMAGE_URL_INVALID)), W;
      } finally {
        G(!1);
      }
    },
    reset: () => {
      A.current.reset(), $.current = null, K(null), ve(!1), ae(!1), ie(r || ""), ne(""), T(""), b(!1), O(0), Q(!1), h && X(!!r), _?.(null);
    },
    ensureUrlValidated: async () => x ? await A.current.ensureUrlValidatedWithErrorCheck(
      z,
      r || "",
      !!V,
      w
    ) : null,
    uploadPendingFile: async () => {
      const u = $.current;
      if (!u) return null;
      b(!0), O(0), Q(!1);
      try {
        const m = await Ve(u, t, O);
        return $.current = null, ne(m.provider || ""), Q(!1), m.url;
      } catch (m) {
        throw Q(!0), m;
      } finally {
        b(!1), O(0);
      }
    }
  }), [t, x, me, V, z, Z, r, w, e, f]), j(() => {
    ie(r), r && h && X(!0), M && ($.current = null, K(null), ae(!1), _?.(null));
  }, [r]), j(() => {
    h && r ? X(!0) : h && X(!1);
  }, [h]), j(() => {
    if (!U) return;
    let u = !1;
    (x || !h) && (V || w && z.trim() && le(z.trim()) > w) && (u = !0), U(u);
  }, [x, V, z, w, h, U]);
  const Ae = q(r);
  j(() => {
    r && Z && Ae.current !== r && K(null), Ae.current = r;
  }, [r, Z, K]), j(() => () => {
    A.current?.dispose();
  }, []), j(() => {
    !ge || !Z || xe(Z).catch((u) => {
      pe.error("ImageUpload", "SVGA preview load error:", u);
    });
  }, [ge, Z, xe]);
  const we = q(null), F = q(null);
  j(() => {
    if (!r || !We(r) || !(x || !h) || !we.current) {
      if (F.current) {
        try {
          F.current.stopAnimation(), F.current.clear();
        } catch {
        }
        F.current = null;
      }
      return;
    }
    if (F.current) {
      try {
        F.current.stopAnimation(), F.current.clear();
      } catch {
      }
      F.current = null;
    }
    const u = we.current, m = new Ke.Player(u);
    m.loops = 0, m.setContentMode("AspectFit"), F.current = m;
    const E = bt();
    if (E)
      return E.load(
        r,
        (W) => {
          m.setVideoItem(W), m.startAnimation();
        },
        (W) => {
          pe.error("ImageUpload", "SVGA URL preview load error:", W);
        }
      ), () => {
        try {
          m.stopAnimation(), m.clear();
        } catch {
        }
        F.current = null;
      };
  }, [r, x, h]);
  const [et, ee] = S(!1), [te, be] = S(""), [tt, ze] = S({ x: 0, y: 0 }), [rt, Ie] = S(1), [Me, Ne] = S(null), [sr, ot] = S(null), [Ue, Le] = S(!1), nt = ye((u, m) => {
    Ne(m);
  }, []), [it, Oe] = S(!1), re = q(null);
  j(() => () => {
    re.current && clearTimeout(re.current);
  }, []);
  const Ce = ye(async (u) => {
    const m = Mt(u, g);
    if (!m.valid) {
      Y.error(m.errorHint);
      return;
    }
    if (!Nt(u, n)) {
      Y.error(f(y.FILE_SIZE_EXCEEDS_MB, { max: n }));
      return;
    }
    try {
      await Ut(u, g, R);
    } catch (E) {
      const W = E instanceof Error ? E : new Error(String(E));
      pe.error("ImageUpload", `File load failed: ${W.message || f(y.FILE_LOAD_FAILED)}`, W), Y.error(W.message || f(y.FILE_LOAD_FAILED));
      return;
    }
    if (o) {
      be(""), ot(u), ze({ x: 0, y: 0 }), Ie(1), Ne(null), Le(!0), Oe(!1), ee(!0);
      try {
        const E = await Et(u);
        be(E);
      } catch {
        Y.error(f(y.IMAGE_LOAD_FAILED)), ee(!1);
      } finally {
        Le(!1), re.current && clearTimeout(re.current), re.current = setTimeout(() => {
          Oe(!0);
        }, 350);
      }
    } else
      await Te(u);
  }, [g, n, f, R, o, M]), Te = async (u) => {
    if (M) {
      $.current = u, K(u);
      const m = u.type.startsWith("video/"), E = St(u);
      ve(m), ae(E), _?.(u);
      return;
    }
    b(!0), O(0);
    try {
      const m = await Ve(u, t, O);
      e(m.url), ne(m.provider || ""), Y.success(f(y.UPLOAD_SUCCESS));
    } catch (m) {
      const E = m instanceof Error ? m : new Error(String(m));
      pe.error("ImageUpload", `Upload failed: ${E.message || f(y.NETWORK_ERROR)}`, E), Y.error(f(y.UPLOAD_FAILED_WITH_ERROR, { error: E.message || f(y.NETWORK_ERROR) }));
    } finally {
      b(!1), O(0);
    }
  }, at = async () => {
    if (!(!Me || !te))
      try {
        const u = await Lt(te, Me);
        ee(!1), await Te(u);
      } catch {
        Y.error(f(y.CROP_FAILED));
      }
  }, st = Pt, ct = ye(Dt((u) => {
    Ce(u);
  }), [Ce]), lt = () => {
    A.current.handleUrlFocus();
  }, ut = () => {
    A.current.handleUrlBlur(
      z,
      w
    );
  }, pt = () => {
    A.current.handleUrlEnter(
      z,
      w
    );
  }, ht = (u) => {
    u?.stopPropagation(), A.current.cancelValidation(), G(!1), T(""), e(""), ie(""), ne(""), b(!1), O(0), Q(!1), M && ($.current = null, K(null), ve(!1), ae(!1), _?.(null));
  };
  return /* @__PURE__ */ I("div", { className: `image-upload-container ${C}`, children: [
    h && l && /* @__PURE__ */ I("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ d(
        ce,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${x ? "" : "active"}`,
          onClick: () => {
            A.current.cancelValidation(), G(!1), T(""), X(!1);
          },
          icon: /* @__PURE__ */ d(Fe, { size: "12" }),
          children: f(y.UPLOAD_IMAGE)
        }
      ),
      /* @__PURE__ */ d(
        ce,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${x ? "active" : ""}`,
          onClick: () => {
            A.current.cancelValidation(), G(!1), T(""), X(!0);
          },
          children: f(y.ENTER_URL)
        }
      )
    ] }),
    (x || !h) && /* @__PURE__ */ d("div", { className: "image-upload-url-input", children: /* @__PURE__ */ d(
      yt,
      {
        value: z,
        onChange: (u) => {
          ie(String(u)), T(""), A.current.cancelValidation(), G(!1);
        },
        onFocus: lt,
        onBlur: ut,
        onEnter: pt,
        placeholder: c || f(y.ENTER_IMAGE_URL),
        status: V ? "error" : void 0,
        suffix: w ? me ? /* @__PURE__ */ d("span", { className: "input-suffix-validating", children: f(y.VALIDATING) }) : /* @__PURE__ */ I("span", { className: `input-suffix-count${le(z) > w ? " byte-overflow" : ""}`, children: [
          le(z),
          "/",
          w
        ] }) : void 0
      }
    ) }),
    V && (x || !h) && /* @__PURE__ */ d("div", { className: "image-upload-url-error", children: V }),
    h && !x && /* @__PURE__ */ I(se, { children: [
      Z ? /* @__PURE__ */ I(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: p || "100%",
            height: v || 160
          },
          children: [
            N ? (
              // 正在上传时显示进度条覆盖层
              /* @__PURE__ */ d("div", { className: "image-upload-uploading-overlay", children: /* @__PURE__ */ d("div", { className: "image-upload-progress-circle", children: /* @__PURE__ */ I("svg", { viewBox: "0 0 36 36", className: `progress-ring${L <= 0 ? " indeterminate" : ""}`, children: [
                /* @__PURE__ */ d(
                  "path",
                  {
                    className: "progress-ring-bg",
                    pathLength: "100",
                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                  }
                ),
                /* @__PURE__ */ d(
                  "path",
                  {
                    className: `progress-ring-fill${L <= 0 ? " indeterminate" : ""}`,
                    pathLength: "100",
                    strokeDasharray: L > 0 ? `${L}, 100` : "25, 100",
                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                  }
                )
              ] }) }) })
            ) : /* @__PURE__ */ d(se, { children: ge ? /* @__PURE__ */ d("div", { ref: Qe, className: "svga-preview-container" }) : Je ? /* @__PURE__ */ d("video", { src: Z, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ d("img", { src: Z, alt: "preview" }) }),
            !N && fe && /* @__PURE__ */ d("span", { className: "image-upload-provider-badge", children: fe.toUpperCase() }),
            !N && Be ? /* @__PURE__ */ d("span", { className: "image-upload-provider-badge upload-failed-badge", children: f(y.UPLOAD_FAILED) }) : !N && !fe ? /* @__PURE__ */ d("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: f(y.PENDING_UPLOAD) }) : null,
            !N && /* @__PURE__ */ I("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ d(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => J.current?.click(),
                  title: f(y.RE_UPLOAD),
                  children: /* @__PURE__ */ d(Fe, {})
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: ht,
                  title: f(y.DELETE),
                  children: /* @__PURE__ */ d(gt, {})
                }
              )
            ] })
          ]
        }
      ) : (
        /* 上传区域 */
        /* @__PURE__ */ d(
          "div",
          {
            className: `image-upload-dropzone ${N ? "uploading" : ""}`,
            onClick: () => !N && J.current?.click(),
            onDragOver: st,
            onDrop: ct,
            style: { height: v || 120 },
            children: N ? /* @__PURE__ */ I("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ d("div", { className: "progress-bar", children: /* @__PURE__ */ d("div", { className: "progress-fill", style: { width: `${L}%` } }) }),
              /* @__PURE__ */ I("span", { className: "progress-text", children: [
                L,
                "%"
              ] })
            ] }) : /* @__PURE__ */ I(se, { children: [
              /* @__PURE__ */ d(wt, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ d("span", { className: "upload-hint", children: de }),
              /* @__PURE__ */ d("span", { className: "upload-sub-hint", children: P || f(y.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: n }) })
            ] })
          }
        )
      ),
      /* @__PURE__ */ d(
        "input",
        {
          ref: J,
          type: "file",
          accept: g || "image/jpeg,image/png,image/gif,image/webp",
          style: { display: "none" },
          onChange: (u) => {
            const m = u.target.files?.[0];
            m && Ce(m), u.target.value = "";
          }
        }
      )
    ] }),
    r && (x || !h) && /* @__PURE__ */ d(
      "div",
      {
        className: "image-upload-preview url-preview",
        style: {
          width: p || "100%",
          height: v || 120,
          marginTop: 8
        },
        children: We(r) ? /* @__PURE__ */ d("div", { ref: we, className: "svga-preview-container" }) : xt(r) ? /* @__PURE__ */ d("video", { src: r, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ d("img", { src: r, alt: "preview", onError: (u) => {
          u.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ d(
      Rt,
      {
        visible: et,
        header: f(y.CROP_IMAGE),
        onClose: () => ee(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ I(se, { children: [
          /* @__PURE__ */ d(ce, { shape: "round", variant: "outline", onClick: () => ee(!1), children: f(y.CANCEL) }),
          /* @__PURE__ */ d(ce, { shape: "round", theme: "primary", onClick: at, disabled: Ue || !te, icon: /* @__PURE__ */ d(Ct, { size: "14" }), children: f(y.CONFIRM_CROP) })
        ] }),
        children: /* @__PURE__ */ d("div", { className: "image-crop-area", children: Ue || !it ? /* @__PURE__ */ I("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ d("div", { className: "loading-spinner" }),
          /* @__PURE__ */ d("span", { children: f(y.IMAGE_LOADING) })
        ] }) : te ? /* @__PURE__ */ d(
          ir,
          {
            image: te,
            crop: tt,
            zoom: rt,
            aspect: i,
            onCropChange: ze,
            onZoomChange: Ie,
            onCropComplete: nt
          }
        ) : null })
      }
    )
  ] });
});
export {
  _r as I
};
