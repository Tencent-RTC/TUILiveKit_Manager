import { jsxs as z, jsx as d, Fragment as le } from "react/jsx-runtime";
import * as V from "react";
import { forwardRef as vt, useRef as Y, useState as S, useImperativeHandle as mt, useEffect as H, useCallback as _e } from "react";
import { w as gt, c as wt } from "./logger.rNWqpx5t.js";
import { UploadIcon as Ve, CloseIcon as Ct, ImageIcon as yt, CutIcon as Rt } from "tdesign-icons-react";
import { Button as ue, Input as _t, Dialog as Et } from "tdesign-react";
import { useUIKit as St } from "@tencentcloud/uikit-base-component-react";
import { I as m, a as Pt } from "./layout.LLpP3S0z.js";
import { g as pe, bo as Ge, by as Dt, bn as xt, ax as At, bx as bt, bq as Mt } from "./main-layout.DjCTrpgR.js";
import { i as zt, g as It } from "./PreviewUrlController.BpR7cymA.js";
import { U as Nt, u as Ze, k as Ut, i as Ot, h as Lt, v as Tt, g as Wt } from "./upload._M0taK95.js";
import { s as Je } from "./svga.min.Zof6g_Kl.js";
import { M as $ } from "./useAsyncAction.CUcnwsXM.js";
import { u as Ft, a as Vt } from "./useT.E_JO3ciU.js";
var Ae = function(a, r) {
  return Ae = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
  }, Ae(a, r);
};
function Gt(a, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Ae(a, r);
  function e() {
    this.constructor = a;
  }
  a.prototype = r === null ? Object.create(r) : (e.prototype = r.prototype, new e());
}
var P = function() {
  return P = Object.assign || function(r) {
    for (var e, t = 1, o = arguments.length; t < o; t++) {
      e = arguments[t];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }, P.apply(this, arguments);
};
var Ee, ke;
function Zt() {
  if (ke) return Ee;
  ke = 1;
  var a = !1, r, e, t, o, i, n, s, c, l, p, g, h, w, D, C;
  function y() {
    if (!a) {
      a = !0;
      var _ = navigator.userAgent, R = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(_), N = /(Mac OS X)|(Windows)|(Linux)/.exec(_);
      if (h = /\b(iPhone|iP[ao]d)/.exec(_), w = /\b(iP[ao]d)/.exec(_), p = /Android/i.exec(_), D = /FBAN\/\w+;/i.exec(_), C = /Mobile/i.exec(_), g = !!/Win64/.exec(_), R) {
        r = R[1] ? parseFloat(R[1]) : R[5] ? parseFloat(R[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
        var q = /(?:Trident\/(\d+.\d+))/.exec(_);
        n = q ? parseFloat(q[1]) + 4 : r, e = R[2] ? parseFloat(R[2]) : NaN, t = R[3] ? parseFloat(R[3]) : NaN, o = R[4] ? parseFloat(R[4]) : NaN, o ? (R = /(?:Chrome\/(\d+\.\d+))/.exec(_), i = R && R[1] ? parseFloat(R[1]) : NaN) : i = NaN;
      } else
        r = e = t = i = o = NaN;
      if (N) {
        if (N[1]) {
          var f = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(_);
          s = f ? parseFloat(f[1].replace("_", ".")) : !0;
        } else
          s = !1;
        c = !!N[2], l = !!N[3];
      } else
        s = c = l = !1;
    }
  }
  var I = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return y() || r;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return y() || n > r;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return I.ie() && g;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return y() || e;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return y() || t;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return y() || o;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return I.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return y() || i;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return y() || c;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return y() || s;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return y() || l;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return y() || h;
    },
    mobile: function() {
      return y() || h || w || p || C;
    },
    nativeApp: function() {
      return y() || D;
    },
    android: function() {
      return y() || p;
    },
    ipad: function() {
      return y() || w;
    }
  };
  return Ee = I, Ee;
}
var Se, je;
function kt() {
  if (je) return Se;
  je = 1;
  var a = !!(typeof window < "u" && window.document && window.document.createElement), r = {
    canUseDOM: a,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: a && !!(window.addEventListener || window.attachEvent),
    canUseViewport: a && !!window.screen,
    isInWorker: !a
    // For now, this is true - might change in the future.
  };
  return Se = r, Se;
}
var Pe, He;
function jt() {
  if (He) return Pe;
  He = 1;
  var a = kt(), r;
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
  return Pe = e, Pe;
}
var De, qe;
function Ht() {
  if (qe) return De;
  qe = 1;
  var a = Zt(), r = jt(), e = 10, t = 40, o = 800;
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
  }, De = i, De;
}
var xe, Xe;
function qt() {
  return Xe || (Xe = 1, xe = Ht()), xe;
}
var Xt = qt();
const Yt = /* @__PURE__ */ gt(Xt);
function $t(a, r, e, t, o, i) {
  i === void 0 && (i = 0);
  var n = Q(a, r, i), s = n.width, c = n.height, l = Math.min(s, e), p = Math.min(c, t);
  return l > p * o ? {
    width: p * o,
    height: p
  } : {
    width: l,
    height: l / o
  };
}
function Kt(a) {
  return a.width > a.height ? a.width / a.naturalWidth : a.height / a.naturalHeight;
}
function ne(a, r, e, t, o) {
  o === void 0 && (o = 0);
  var i = Q(r.width, r.height, o), n = i.width, s = i.height;
  return {
    x: Ye(a.x, n, e.width, t),
    y: Ye(a.y, s, e.height, t)
  };
}
function Ye(a, r, e, t) {
  var o = Math.abs(r * t / 2 - e / 2);
  return fe(a, -o, o);
}
function $e(a, r) {
  return Math.sqrt(Math.pow(a.y - r.y, 2) + Math.pow(a.x - r.x, 2));
}
function Ke(a, r) {
  return Math.atan2(r.y - a.y, r.x - a.x) * 180 / Math.PI;
}
function Bt(a, r, e, t, o, i, n) {
  i === void 0 && (i = 0), n === void 0 && (n = !0);
  var s = n ? Jt : Qt, c = Q(r.width, r.height, i), l = Q(r.naturalWidth, r.naturalHeight, i), p = {
    x: s(100, ((c.width - e.width / o) / 2 - a.x / o) / c.width * 100),
    y: s(100, ((c.height - e.height / o) / 2 - a.y / o) / c.height * 100),
    width: s(100, e.width / c.width * 100 / o),
    height: s(100, e.height / c.height * 100 / o)
  }, g = Math.round(s(l.width, p.width * l.width / 100)), h = Math.round(s(l.height, p.height * l.height / 100)), w = l.width >= l.height * t, D = w ? {
    width: Math.round(h * t),
    height: h
  } : {
    width: g,
    height: Math.round(g / t)
  }, C = P(P({}, D), {
    x: Math.round(s(l.width - D.width, p.x * l.width / 100)),
    y: Math.round(s(l.height - D.height, p.y * l.height / 100))
  });
  return {
    croppedAreaPercentages: p,
    croppedAreaPixels: C
  };
}
function Jt(a, r) {
  return Math.min(a, Math.max(0, r));
}
function Qt(a, r) {
  return r;
}
function er(a, r, e, t, o, i) {
  var n = Q(r.width, r.height, e), s = fe(t.width / n.width * (100 / a.width), o, i), c = {
    x: s * n.width / 2 - t.width / 2 - n.width * s * (a.x / 100),
    y: s * n.height / 2 - t.height / 2 - n.height * s * (a.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function tr(a, r, e) {
  var t = Kt(r);
  return e.height > e.width ? e.height / (a.height * t) : e.width / (a.width * t);
}
function rr(a, r, e, t, o, i) {
  e === void 0 && (e = 0);
  var n = Q(r.naturalWidth, r.naturalHeight, e), s = fe(tr(a, r, t), o, i), c = t.height > t.width ? t.height / a.height : t.width / a.width, l = {
    x: ((n.width - a.width) / 2 - a.x) * c,
    y: ((n.height - a.height) / 2 - a.y) * c
  };
  return {
    crop: l,
    zoom: s
  };
}
function Be(a, r) {
  return {
    x: (r.x + a.x) / 2,
    y: (r.y + a.y) / 2
  };
}
function or(a) {
  return a * Math.PI / 180;
}
function Q(a, r, e) {
  var t = or(e);
  return {
    width: Math.abs(Math.cos(t) * a) + Math.abs(Math.sin(t) * r),
    height: Math.abs(Math.sin(t) * a) + Math.abs(Math.cos(t) * r)
  };
}
function fe(a, r, e) {
  return Math.min(Math.max(a, r), e);
}
function he() {
  for (var a = [], r = 0; r < arguments.length; r++)
    a[r] = arguments[r];
  return a.filter(function(e) {
    return typeof e == "string" && e.length > 0;
  }).join(" ").trim();
}
var nr = `.reactEasyCrop_Container {
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
`, ir = 1, ar = 3, sr = 1, cr = (
  /** @class */
  (function(a) {
    Gt(r, a);
    function r() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.cropperRef = V.createRef(), e.imageRef = V.createRef(), e.videoRef = V.createRef(), e.containerPosition = {
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
          var o = er(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), i = o.crop, n = o.zoom;
          e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(n);
        } else if (e.props.initialCroppedAreaPixels) {
          var s = rr(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), i = s.crop, n = s.zoom;
          e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(n);
        }
      }, e.computeSizes = function() {
        var t, o, i, n, s, c, l = e.imageRef.current || e.videoRef.current;
        if (l && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var p = e.containerRect.width / e.containerRect.height, g = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((o = e.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, h = ((i = e.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((n = e.videoRef.current) === null || n === void 0 ? void 0 : n.videoHeight) || 0, w = l.offsetWidth < g || l.offsetHeight < h, D = g / h, C = void 0;
          if (w)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                C = p > D ? {
                  width: e.containerRect.height * D,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / D
                };
                break;
              case "horizontal-cover":
                C = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / D
                };
                break;
              case "vertical-cover":
                C = {
                  width: e.containerRect.height * D,
                  height: e.containerRect.height
                };
                break;
            }
          else
            C = {
              width: l.offsetWidth,
              height: l.offsetHeight
            };
          e.mediaSize = P(P({}, C), {
            naturalWidth: g,
            naturalHeight: h
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var y = e.props.cropSize ? e.props.cropSize : $t(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((s = e.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== y.height || ((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== y.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(y), e.setState({
            cropSize: y
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(y), y;
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
        }, e.dragStartCrop = P({}, e.props.crop), (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o);
      }, e.onDrag = function(t) {
        var o = t.x, i = t.y;
        e.currentWindow && (e.rafDragTimeout && e.currentWindow.cancelAnimationFrame(e.rafDragTimeout), e.rafDragTimeout = e.currentWindow.requestAnimationFrame(function() {
          if (e.state.cropSize && !(o === void 0 || i === void 0)) {
            var n = o - e.dragStartPosition.x, s = i - e.dragStartPosition.y, c = {
              x: e.dragStartCrop.x + n,
              y: e.dragStartCrop.y + s
            }, l = e.props.restrictPosition ? ne(c, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : c;
            e.props.onCropChange(l);
          }
        }));
      }, e.onDragStopped = function() {
        var t, o;
        e.isTouching = !1, e.cleanEvents(), e.emitCropData(), (o = (t = e.props).onInteractionEnd) === null || o === void 0 || o.call(t);
      }, e.onWheel = function(t) {
        if (e.currentWindow && !(e.props.onWheelRequest && !e.props.onWheelRequest(t))) {
          t.preventDefault();
          var o = r.getMousePoint(t), i = Yt(t).pixelY, n = e.props.zoom - i * e.props.zoomSpeed / 200;
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
          var l = fe(t, e.props.minZoom, e.props.maxZoom);
          if (c) {
            var p = e.getPointOnContainer(o, e.containerPosition), g = e.getPointOnMedia(p), h = {
              x: g.x * l - p.x,
              y: g.y * l - p.y
            }, w = e.props.restrictPosition ? ne(h, e.mediaSize, e.state.cropSize, l, e.props.rotation) : h;
            e.props.onCropChange(w);
          }
          e.props.onZoomChange(l);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? ne(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return Bt(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
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
          var l = e.props.restrictPosition ? ne(i, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : i;
          e.previousCropSize = e.state.cropSize, e.props.onCropChange(l), e.emitCropData();
        }
      }, e.onKeyDown = function(t) {
        var o, i, n = e.props, s = n.crop, c = n.onCropChange, l = n.keyboardStep, p = n.zoom, g = n.rotation, h = l;
        if (e.state.cropSize) {
          t.shiftKey && (h *= 0.2);
          var w = P({}, s);
          switch (t.key) {
            case "ArrowUp":
              w.y -= h, t.preventDefault();
              break;
            case "ArrowDown":
              w.y += h, t.preventDefault();
              break;
            case "ArrowLeft":
              w.x -= h, t.preventDefault();
              break;
            case "ArrowRight":
              w.x += h, t.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (w = ne(w, e.mediaSize, e.state.cropSize, p, g)), t.repeat || (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o), c(w);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = nr, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(e) {
      var t, o, i, n, s, c, l, p, g;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = e.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((n = this.props.cropSize) === null || n === void 0 ? void 0 : n.width) ? this.computeSizes() : (((s = e.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((l = e.crop) === null || l === void 0 ? void 0 : l.y) !== ((p = this.props.crop) === null || p === void 0 ? void 0 : p.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((g = this.videoRef.current) === null || g === void 0 || g.load());
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
      this.lastPinchDistance = $e(t, o), this.lastPinchRotation = Ke(t, o), this.onDragStart(Be(t, o));
    }, r.prototype.onPinchMove = function(e) {
      var t = this;
      if (!(!this.currentDoc || !this.currentWindow)) {
        var o = r.getTouchPoint(e.touches[0]), i = r.getTouchPoint(e.touches[1]), n = Be(o, i);
        this.onDrag(n), this.rafPinchTimeout && this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout), this.rafPinchTimeout = this.currentWindow.requestAnimationFrame(function() {
          var s = $e(o, i), c = t.props.zoom * (s / t.lastPinchDistance);
          t.setNewZoom(c, n, {
            shouldUpdatePosition: !1
          }), t.lastPinchDistance = s;
          var l = Ke(o, i), p = t.props.rotation + (l - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(p), t.lastPinchRotation = l;
        });
      }
    }, r.prototype.render = function() {
      var e = this, t, o = this.props, i = o.image, n = o.video, s = o.mediaProps, c = o.cropperProps, l = o.transform, p = o.crop, g = p.x, h = p.y, w = o.rotation, D = o.zoom, C = o.cropShape, y = o.showGrid, I = o.roundCropAreaPixels, _ = o.style, R = _.containerStyle, N = _.cropAreaStyle, q = _.mediaStyle, f = o.classes, ve = f.containerClassName, G = f.cropAreaClassName, ie = f.mediaClassName, U = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
      return V.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(Z) {
          return e.containerRef = Z;
        },
        "data-testid": "container",
        style: R,
        className: he("reactEasyCrop_Container", ve)
      }, i ? V.createElement("img", P({
        alt: "",
        className: he("reactEasyCrop_Image", U === "contain" && "reactEasyCrop_Contain", U === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", U === "vertical-cover" && "reactEasyCrop_Cover_Vertical", ie)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: P(P({}, q), {
          transform: l || "translate(".concat(g, "px, ").concat(h, "px) rotate(").concat(w, "deg) scale(").concat(D, ")")
        }),
        onLoad: this.onMediaLoad
      })) : n && V.createElement("video", P({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: he("reactEasyCrop_Video", U === "contain" && "reactEasyCrop_Contain", U === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", U === "vertical-cover" && "reactEasyCrop_Cover_Vertical", ie)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: P(P({}, q), {
          transform: l || "translate(".concat(g, "px, ").concat(h, "px) rotate(").concat(w, "deg) scale(").concat(D, ")")
        }),
        controls: !1
      }), (Array.isArray(n) ? n : [{
        src: n
      }]).map(function(M) {
        return V.createElement("source", P({
          key: M.src
        }, M));
      })), this.state.cropSize && V.createElement("div", P({
        ref: this.cropperRef,
        style: P(P({}, N), {
          width: I ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: I ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: he("reactEasyCrop_CropArea", C === "round" && "reactEasyCrop_CropAreaRound", y && "reactEasyCrop_CropAreaGrid", G)
      }, c)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: ar,
      minZoom: ir,
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
      keyboardStep: sr
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
  })(V.Component)
);
const de = wt("ImageUpload");
zt(Je.Parser);
const Sr = vt(function({
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
  previewHeight: g,
  uploadEnabled: h = !1,
  accept: w,
  acceptHint: D,
  maxBytes: C,
  className: y = "",
  deferUpload: I = !1,
  onFileReady: _,
  skipSvgaValidation: R = !1,
  onUrlErrorChange: N
}, q) {
  const { t: f } = St(), { opSuccess: ve, opFailed: G } = Pt(f), ie = s || f(m.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), U = Y(null), [M, Z] = S(!1), [K, k] = S(0), [Qe, ee] = S(!1), [me, ae] = S(""), [x, X] = S(!h), [b, se] = S(r), [ge, j] = S(!1), [W, O] = S(""), A = Y(null);
  A.current || (A.current = new Nt({
    setValidating: j,
    setError: O,
    onConfirm: e
  }, R)), A.current.updateCallbacks({
    setValidating: j,
    setError: O,
    onConfirm: e
  }), A.current.updateSkipSvgaValidation(R);
  const B = Y(null), { previewUrl: F, setPreview: J } = Ft(), [et, we] = S(!1), [Ce, ce] = S(!1), {
    containerRef: tt,
    playUrl: be,
    stopAnimation: lr
  } = Vt({ loop: 1, autoPlay: !0 });
  mt(q, () => ({
    get isUrlInputMode() {
      return x;
    },
    get isValidating() {
      return ge;
    },
    get urlValidationError() {
      return W;
    },
    /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
    get hasUrlError() {
      return x ? !!(W || C && b.trim() && pe(b.trim()) > C) : !1;
    },
    get urlInputValue() {
      return b;
    },
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => {
      X(!0);
    },
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (u) => {
      O(u);
    },
    validateImageUrl: async (u, v) => {
      j(!0), O("");
      try {
        return await Ut(u, v, R), !0;
      } catch (E) {
        const T = E instanceof Error ? E : new Error(String(E));
        throw O(T.message || f(m.IMAGE_URL_INVALID)), T;
      } finally {
        j(!1);
      }
    },
    reset: () => {
      A.current.reset(), B.current = null, J(null), we(!1), ce(!1), se(r || ""), ae(""), O(""), Z(!1), k(0), ee(!1), h && X(!!r), _?.(null);
    },
    ensureUrlValidated: async () => x ? await A.current.ensureUrlValidatedWithErrorCheck(
      b,
      r || "",
      !!W,
      C
    ) : null,
    uploadPendingFile: async () => {
      const u = B.current;
      if (!u) return null;
      Z(!0), k(0), ee(!1);
      try {
        const v = await Ze(u, t, k);
        return B.current = null, ae(v.provider || ""), ee(!1), v.url;
      } catch (v) {
        throw ee(!0), v;
      } finally {
        Z(!1), k(0);
      }
    }
  }), [t, x, ge, W, b, F, r, C, e, f]), H(() => {
    se(r), r && h && X(!0), I && (B.current = null, J(null), ce(!1), _?.(null));
  }, [r]), H(() => {
    h && r ? X(!0) : h && X(!1);
  }, [h]), H(() => {
    if (!N) return;
    let u = !1;
    (x || !h) && (W || C && b.trim() && pe(b.trim()) > C) && (u = !0), N(u);
  }, [x, W, b, C, h, N]);
  const Me = Y(r);
  H(() => {
    r && F && Me.current !== r && J(null), Me.current = r;
  }, [r, F, J]), H(() => () => {
    A.current?.dispose();
  }, []), H(() => {
    !Ce || !F || be(F).catch((u) => {
      de.error("ImageUpload", "SVGA preview load error:", u);
    });
  }, [Ce, F, be]);
  const ye = Y(null), L = Y(null);
  H(() => {
    if (!r || !Ge(r) || !(x || !h) || !ye.current) {
      if (L.current) {
        try {
          L.current.stopAnimation(), L.current.clear();
        } catch {
        }
        L.current = null;
      }
      return;
    }
    if (L.current) {
      try {
        L.current.stopAnimation(), L.current.clear();
      } catch {
      }
      L.current = null;
    }
    const u = ye.current, v = new Je.Player(u);
    v.loops = 0, v.setContentMode("AspectFit"), L.current = v;
    const E = It();
    if (E)
      return E.load(
        r,
        (T) => {
          v.setVideoItem(T), v.startAnimation();
        },
        (T) => {
          de.error("ImageUpload", "SVGA URL preview load error:", T);
        }
      ), () => {
        try {
          v.stopAnimation(), v.clear();
        } catch {
        }
        L.current = null;
      };
  }, [r, x, h]);
  const [rt, te] = S(!1), [re, ze] = S(""), [ot, Ie] = S({ x: 0, y: 0 }), [nt, Ne] = S(1), [Ue, Oe] = S(null), [ur, it] = S(null), [Le, Te] = S(!1), at = _e((u, v) => {
    Oe(v);
  }, []), [st, We] = S(!1), oe = Y(null);
  H(() => () => {
    oe.current && clearTimeout(oe.current);
  }, []);
  const Re = _e(async (u) => {
    const v = Ot(u, w);
    if (!v.valid) {
      $.error(v.errorHint);
      return;
    }
    if (!Lt(u, n)) {
      $.error(f(m.FILE_SIZE_EXCEEDS_MB, { max: n }));
      return;
    }
    try {
      await Tt(u, w, R);
    } catch (E) {
      const T = E instanceof Error ? E : new Error(String(E));
      de.error("ImageUpload", `File load failed: ${T.message || f(G(m.OP_LOAD, m.IMAGE))}`, T), $.error(T.message || f(G(m.OP_LOAD, m.IMAGE)));
      return;
    }
    if (o) {
      ze(""), it(u), Ie({ x: 0, y: 0 }), Ne(1), Oe(null), Te(!0), We(!1), te(!0);
      try {
        const E = await Dt(u);
        ze(E);
      } catch {
        $.error(f(G(m.OP_LOAD, m.IMAGE))), te(!1);
      } finally {
        Te(!1), oe.current && clearTimeout(oe.current), oe.current = setTimeout(() => {
          We(!0);
        }, 350);
      }
    } else
      await Fe(u);
  }, [w, n, f, R, o, I]), Fe = async (u) => {
    if (I) {
      B.current = u, J(u);
      const v = u.type.startsWith("video/"), E = xt(u);
      we(v), ce(E), _?.(u);
      return;
    }
    Z(!0), k(0);
    try {
      const v = await Ze(u, t, k);
      e(v.url), ae(v.provider || ""), $.success(f(ve(m.OP_UPLOAD, m.IMAGE)));
    } catch (v) {
      const E = v instanceof Error ? v : new Error(String(v));
      de.error("ImageUpload", `Upload failed: ${E.message || f(m.NETWORK_ERROR)}`, E), $.error(f(G(m.OP_UPLOAD, m.IMAGE), { error: E.message || f(m.NETWORK_ERROR) }));
    } finally {
      Z(!1), k(0);
    }
  }, ct = async () => {
    if (!(!Ue || !re))
      try {
        const u = await Wt(re, Ue);
        te(!1), await Fe(u);
      } catch {
        $.error(f(G(m.OP_CROP_ACT, m.IMAGE)));
      }
  }, lt = bt, ut = _e(At((u) => {
    Re(u);
  }), [Re]), pt = () => {
    A.current.handleUrlFocus();
  }, ht = () => {
    A.current.handleUrlBlur(
      b,
      C
    );
  }, dt = () => {
    A.current.handleUrlEnter(
      b,
      C
    );
  }, ft = (u) => {
    u?.stopPropagation(), A.current.cancelValidation(), j(!1), O(""), e(""), se(""), ae(""), Z(!1), k(0), ee(!1), I && (B.current = null, J(null), we(!1), ce(!1), _?.(null));
  };
  return /* @__PURE__ */ z("div", { className: `image-upload-container ${y}`, children: [
    h && l && /* @__PURE__ */ z("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ d(
        ue,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${x ? "" : "active"}`,
          onClick: () => {
            A.current.cancelValidation(), j(!1), O(""), X(!1);
          },
          icon: /* @__PURE__ */ d(Ve, { size: "12" }),
          children: f(m.UPLOAD_IMAGE)
        }
      ),
      /* @__PURE__ */ d(
        ue,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${x ? "active" : ""}`,
          onClick: () => {
            A.current.cancelValidation(), j(!1), O(""), X(!0);
          },
          children: f(m.ENTER_URL)
        }
      )
    ] }),
    (x || !h) && /* @__PURE__ */ d("div", { className: "image-upload-url-input", children: /* @__PURE__ */ d(
      _t,
      {
        value: b,
        onChange: (u) => {
          se(String(u)), O(""), A.current.cancelValidation(), j(!1);
        },
        onFocus: pt,
        onBlur: ht,
        onEnter: dt,
        placeholder: c || f(m.ENTER_IMAGE_URL),
        status: W ? "error" : void 0,
        suffix: C ? ge ? /* @__PURE__ */ d("span", { className: "input-suffix-validating", children: f(m.VALIDATING) }) : /* @__PURE__ */ z("span", { className: `input-suffix-count${pe(b) > C ? " byte-overflow" : ""}`, children: [
          pe(b),
          "/",
          C
        ] }) : void 0
      }
    ) }),
    W && (x || !h) && /* @__PURE__ */ d("div", { className: "image-upload-url-error", children: W }),
    h && !x && /* @__PURE__ */ z(le, { children: [
      F ? /* @__PURE__ */ z(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: p || "100%",
            height: g || 160
          },
          children: [
            M ? (
              // 正在上传时显示进度条覆盖层
              /* @__PURE__ */ d("div", { className: "image-upload-uploading-overlay", children: /* @__PURE__ */ d("div", { className: "image-upload-progress-circle", children: /* @__PURE__ */ z("svg", { viewBox: "0 0 36 36", className: `progress-ring${K <= 0 ? " indeterminate" : ""}`, children: [
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
                    className: `progress-ring-fill${K <= 0 ? " indeterminate" : ""}`,
                    pathLength: "100",
                    strokeDasharray: K > 0 ? `${K}, 100` : "25, 100",
                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                  }
                )
              ] }) }) })
            ) : /* @__PURE__ */ d(le, { children: Ce ? /* @__PURE__ */ d("div", { ref: tt, className: "svga-preview-container" }) : et ? /* @__PURE__ */ d("video", { src: F, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ d("img", { src: F, alt: "preview" }) }),
            !M && me && /* @__PURE__ */ d("span", { className: "image-upload-provider-badge", children: me.toUpperCase() }),
            !M && Qe ? /* @__PURE__ */ d("span", { className: "image-upload-provider-badge upload-failed-badge", children: f(G(m.OP_UPLOAD, m.IMAGE)) }) : !M && !me ? /* @__PURE__ */ d("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: f(m.PENDING_UPLOAD) }) : null,
            !M && /* @__PURE__ */ z("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ d(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => U.current?.click(),
                  title: f(m.RE_UPLOAD),
                  children: /* @__PURE__ */ d(Ve, {})
                }
              ),
              /* @__PURE__ */ d(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: ft,
                  title: f(m.DELETE),
                  children: /* @__PURE__ */ d(Ct, {})
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
            className: `image-upload-dropzone ${M ? "uploading" : ""}`,
            onClick: () => !M && U.current?.click(),
            onDragOver: lt,
            onDrop: ut,
            style: { height: g || 120 },
            children: M ? /* @__PURE__ */ z("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ d("div", { className: "progress-bar", children: /* @__PURE__ */ d("div", { className: "progress-fill", style: { width: `${K}%` } }) }),
              /* @__PURE__ */ z("span", { className: "progress-text", children: [
                K,
                "%"
              ] })
            ] }) : /* @__PURE__ */ z(le, { children: [
              /* @__PURE__ */ d(yt, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ d("span", { className: "upload-hint", children: ie }),
              /* @__PURE__ */ d("span", { className: "upload-sub-hint", children: D || f(m.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: n }) })
            ] })
          }
        )
      ),
      /* @__PURE__ */ d(
        "input",
        {
          ref: U,
          type: "file",
          accept: w || "image/jpeg,image/png,image/gif,image/webp",
          style: { display: "none" },
          onChange: (u) => {
            const v = u.target.files?.[0];
            v && Re(v), u.target.value = "";
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
          height: g || 120,
          marginTop: 8
        },
        children: Ge(r) ? /* @__PURE__ */ d("div", { ref: ye, className: "svga-preview-container" }) : Mt(r) ? /* @__PURE__ */ d("video", { src: r, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ d("img", { src: r, alt: "preview", onError: (u) => {
          u.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ d(
      Et,
      {
        visible: rt,
        header: f(m.CROP_IMAGE),
        onClose: () => te(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ z(le, { children: [
          /* @__PURE__ */ d(ue, { shape: "round", variant: "outline", onClick: () => te(!1), children: f(m.CANCEL) }),
          /* @__PURE__ */ d(ue, { shape: "round", theme: "primary", onClick: ct, disabled: Le || !re, icon: /* @__PURE__ */ d(Rt, { size: "14" }), children: f(m.CONFIRM_CROP) })
        ] }),
        children: /* @__PURE__ */ d("div", { className: "image-crop-area", children: Le || !st ? /* @__PURE__ */ z("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ d("div", { className: "loading-spinner" }),
          /* @__PURE__ */ d("span", { children: f(m.IMAGE_LOADING) })
        ] }) : re ? /* @__PURE__ */ d(
          cr,
          {
            image: re,
            crop: ot,
            zoom: nt,
            aspect: i,
            onCropChange: Ie,
            onZoomChange: Ne,
            onCropComplete: at
          }
        ) : null })
      }
    )
  ] });
});
export {
  Sr as I
};
