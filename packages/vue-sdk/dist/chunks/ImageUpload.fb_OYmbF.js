import { jsxs as M, jsx as h, Fragment as se } from "react/jsx-runtime";
import * as Z from "react";
import { forwardRef as ht, useRef as q, useState as S, useImperativeHandle as dt, useEffect as H, useCallback as ye } from "react";
import { p as ft, c as mt } from "./logger.pnqt7v8K.js";
import { UploadIcon as Fe, CloseIcon as vt, ImageIcon as gt, CutIcon as wt } from "tdesign-icons-react";
import { Button as ce, Input as Ct, Dialog as yt } from "tdesign-react";
import { useUIKit as Rt } from "@tencentcloud/uikit-base-component-react";
import { I as C } from "./layout.Cg64usQg.js";
import { az as le, b1 as We, ba as _t, b0 as Et, ae as St, b9 as Dt, b3 as Pt } from "./main-layout.BKiYd7Lp.js";
import { i as xt, g as At } from "./svga.DC02l1-t.js";
import { U as bt, u as Ve, k as zt, i as It, h as Mt, v as Nt, g as Lt } from "./upload.Bb1Jkc44.js";
import { s as Ke } from "./svga.min.Zof6g_Kl.js";
import { M as Y } from "./useAsyncAction.BmoBWVx2.js";
import { u as Ut } from "./usePreviewUrl.PMNNqK3l.js";
import { u as Tt } from "./useSvgaPlayer.ystJuK8O.js";
var Pe = function(a, r) {
  return Pe = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
    e.__proto__ = t;
  } || function(e, t) {
    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
  }, Pe(a, r);
};
function Ot(a, r) {
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
function Ft() {
  if (Ze) return Re;
  Ze = 1;
  var a = !1, r, e, t, o, i, n, s, c, l, u, d, v, y, g, P;
  function w() {
    if (!a) {
      a = !0;
      var R = navigator.userAgent, _ = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(R), k = /(Mac OS X)|(Windows)|(Linux)/.exec(R);
      if (v = /\b(iPhone|iP[ao]d)/.exec(R), y = /\b(iP[ao]d)/.exec(R), u = /Android/i.exec(R), g = /FBAN\/\w+;/i.exec(R), P = /Mobile/i.exec(R), d = !!/Win64/.exec(R), _) {
        r = _[1] ? parseFloat(_[1]) : _[5] ? parseFloat(_[5]) : NaN, r && document && document.documentMode && (r = document.documentMode);
        var f = /(?:Trident\/(\d+.\d+))/.exec(R);
        n = f ? parseFloat(f[1]) + 4 : r, e = _[2] ? parseFloat(_[2]) : NaN, t = _[3] ? parseFloat(_[3]) : NaN, o = _[4] ? parseFloat(_[4]) : NaN, o ? (_ = /(?:Chrome\/(\d+\.\d+))/.exec(R), i = _ && _[1] ? parseFloat(_[1]) : NaN) : i = NaN;
      } else
        r = e = t = i = o = NaN;
      if (k) {
        if (k[1]) {
          var G = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(R);
          s = G ? parseFloat(G[1].replace("_", ".")) : !0;
        } else
          s = !1;
        c = !!k[2], l = !!k[3];
      } else
        s = c = l = !1;
    }
  }
  var N = {
    /**
     *  Check if the UA is Internet Explorer.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    ie: function() {
      return w() || r;
    },
    /**
     * Check if we're in Internet Explorer compatibility mode.
     *
     * @return bool true if in compatibility mode, false if
     * not compatibility mode or not ie
     */
    ieCompatibilityMode: function() {
      return w() || n > r;
    },
    /**
     * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
     * only need this because Skype can't handle 64-bit IE yet.  We need to remove
     * this when we don't need it -- tracked by #601957.
     */
    ie64: function() {
      return N.ie() && d;
    },
    /**
     *  Check if the UA is Firefox.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    firefox: function() {
      return w() || e;
    },
    /**
     *  Check if the UA is Opera.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    opera: function() {
      return w() || t;
    },
    /**
     *  Check if the UA is WebKit.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    webkit: function() {
      return w() || o;
    },
    /**
     *  For Push
     *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
     */
    safari: function() {
      return N.webkit();
    },
    /**
     *  Check if the UA is a Chrome browser.
     *
     *
     *  @return float|NaN Version number (if match) or NaN.
     */
    chrome: function() {
      return w() || i;
    },
    /**
     *  Check if the user is running Windows.
     *
     *  @return bool `true' if the user's OS is Windows.
     */
    windows: function() {
      return w() || c;
    },
    /**
     *  Check if the user is running Mac OS X.
     *
     *  @return float|bool   Returns a float if a version number is detected,
     *                       otherwise true/false.
     */
    osx: function() {
      return w() || s;
    },
    /**
     * Check if the user is running Linux.
     *
     * @return bool `true' if the user's OS is some flavor of Linux.
     */
    linux: function() {
      return w() || l;
    },
    /**
     * Check if the user is running on an iPhone or iPod platform.
     *
     * @return bool `true' if the user is running some flavor of the
     *    iPhone OS.
     */
    iphone: function() {
      return w() || v;
    },
    mobile: function() {
      return w() || v || y || u || P;
    },
    nativeApp: function() {
      return w() || g;
    },
    android: function() {
      return w() || u;
    },
    ipad: function() {
      return w() || y;
    }
  };
  return Re = N, Re;
}
var _e, ke;
function Wt() {
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
function Vt() {
  if (Ge) return Ee;
  Ge = 1;
  var a = Wt(), r;
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
function Zt() {
  if (je) return Se;
  je = 1;
  var a = Ft(), r = Vt(), e = 10, t = 40, o = 800;
  function i(n) {
    var s = 0, c = 0, l = 0, u = 0;
    return "detail" in n && (c = n.detail), "wheelDelta" in n && (c = -n.wheelDelta / 120), "wheelDeltaY" in n && (c = -n.wheelDeltaY / 120), "wheelDeltaX" in n && (s = -n.wheelDeltaX / 120), "axis" in n && n.axis === n.HORIZONTAL_AXIS && (s = c, c = 0), l = s * e, u = c * e, "deltaY" in n && (u = n.deltaY), "deltaX" in n && (l = n.deltaX), (l || u) && n.deltaMode && (n.deltaMode == 1 ? (l *= t, u *= t) : (l *= o, u *= o)), l && !s && (s = l < 1 ? -1 : 1), u && !c && (c = u < 1 ? -1 : 1), {
      spinX: s,
      spinY: c,
      pixelX: l,
      pixelY: u
    };
  }
  return i.getEventType = function() {
    return a.firefox() ? "DOMMouseScroll" : r("wheel") ? "wheel" : "mousewheel";
  }, Se = i, Se;
}
var De, He;
function kt() {
  return He || (He = 1, De = Zt()), De;
}
var Gt = kt();
const jt = /* @__PURE__ */ ft(Gt);
function Ht(a, r, e, t, o, i) {
  i === void 0 && (i = 0);
  var n = B(a, r, i), s = n.width, c = n.height, l = Math.min(s, e), u = Math.min(c, t);
  return l > u * o ? {
    width: u * o,
    height: u
  } : {
    width: l,
    height: l / o
  };
}
function Xt(a) {
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
function qt(a, r, e, t, o, i, n) {
  i === void 0 && (i = 0), n === void 0 && (n = !0);
  var s = n ? Yt : $t, c = B(r.width, r.height, i), l = B(r.naturalWidth, r.naturalHeight, i), u = {
    x: s(100, ((c.width - e.width / o) / 2 - a.x / o) / c.width * 100),
    y: s(100, ((c.height - e.height / o) / 2 - a.y / o) / c.height * 100),
    width: s(100, e.width / c.width * 100 / o),
    height: s(100, e.height / c.height * 100 / o)
  }, d = Math.round(s(l.width, u.width * l.width / 100)), v = Math.round(s(l.height, u.height * l.height / 100)), y = l.width >= l.height * t, g = y ? {
    width: Math.round(v * t),
    height: v
  } : {
    width: d,
    height: Math.round(d / t)
  }, P = D(D({}, g), {
    x: Math.round(s(l.width - g.width, u.x * l.width / 100)),
    y: Math.round(s(l.height - g.height, u.y * l.height / 100))
  });
  return {
    croppedAreaPercentages: u,
    croppedAreaPixels: P
  };
}
function Yt(a, r) {
  return Math.min(a, Math.max(0, r));
}
function $t(a, r) {
  return r;
}
function Kt(a, r, e, t, o, i) {
  var n = B(r.width, r.height, e), s = he(t.width / n.width * (100 / a.width), o, i), c = {
    x: s * n.width / 2 - t.width / 2 - n.width * s * (a.x / 100),
    y: s * n.height / 2 - t.height / 2 - n.height * s * (a.y / 100)
  };
  return {
    crop: c,
    zoom: s
  };
}
function Bt(a, r, e) {
  var t = Xt(r);
  return e.height > e.width ? e.height / (a.height * t) : e.width / (a.width * t);
}
function Jt(a, r, e, t, o, i) {
  e === void 0 && (e = 0);
  var n = B(r.naturalWidth, r.naturalHeight, e), s = he(Bt(a, r, t), o, i), c = t.height > t.width ? t.height / a.height : t.width / a.width, l = {
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
function Qt(a) {
  return a * Math.PI / 180;
}
function B(a, r, e) {
  var t = Qt(e);
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
var er = `.reactEasyCrop_Container {
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
`, tr = 1, rr = 3, or = 1, nr = (
  /** @class */
  (function(a) {
    Ot(r, a);
    function r() {
      var e = a !== null && a.apply(this, arguments) || this;
      return e.cropperRef = Z.createRef(), e.imageRef = Z.createRef(), e.videoRef = Z.createRef(), e.containerPosition = {
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
          var o = Kt(e.props.initialCroppedAreaPercentages, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), i = o.crop, n = o.zoom;
          e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(n);
        } else if (e.props.initialCroppedAreaPixels) {
          var s = Jt(e.props.initialCroppedAreaPixels, e.mediaSize, e.props.rotation, t, e.props.minZoom, e.props.maxZoom), i = s.crop, n = s.zoom;
          e.props.onCropChange(i), e.props.onZoomChange && e.props.onZoomChange(n);
        }
      }, e.computeSizes = function() {
        var t, o, i, n, s, c, l = e.imageRef.current || e.videoRef.current;
        if (l && e.containerRef) {
          e.containerRect = e.containerRef.getBoundingClientRect(), e.saveContainerPosition();
          var u = e.containerRect.width / e.containerRect.height, d = ((t = e.imageRef.current) === null || t === void 0 ? void 0 : t.naturalWidth) || ((o = e.videoRef.current) === null || o === void 0 ? void 0 : o.videoWidth) || 0, v = ((i = e.imageRef.current) === null || i === void 0 ? void 0 : i.naturalHeight) || ((n = e.videoRef.current) === null || n === void 0 ? void 0 : n.videoHeight) || 0, y = l.offsetWidth < d || l.offsetHeight < v, g = d / v, P = void 0;
          if (y)
            switch (e.state.mediaObjectFit) {
              default:
              case "contain":
                P = u > g ? {
                  width: e.containerRect.height * g,
                  height: e.containerRect.height
                } : {
                  width: e.containerRect.width,
                  height: e.containerRect.width / g
                };
                break;
              case "horizontal-cover":
                P = {
                  width: e.containerRect.width,
                  height: e.containerRect.width / g
                };
                break;
              case "vertical-cover":
                P = {
                  width: e.containerRect.height * g,
                  height: e.containerRect.height
                };
                break;
            }
          else
            P = {
              width: l.offsetWidth,
              height: l.offsetHeight
            };
          e.mediaSize = D(D({}, P), {
            naturalWidth: d,
            naturalHeight: v
          }), e.props.setMediaSize && e.props.setMediaSize(e.mediaSize);
          var w = e.props.cropSize ? e.props.cropSize : Ht(e.mediaSize.width, e.mediaSize.height, e.containerRect.width, e.containerRect.height, e.props.aspect, e.props.rotation);
          return (((s = e.state.cropSize) === null || s === void 0 ? void 0 : s.height) !== w.height || ((c = e.state.cropSize) === null || c === void 0 ? void 0 : c.width) !== w.width) && e.props.onCropSizeChange && e.props.onCropSizeChange(w), e.setState({
            cropSize: w
          }, e.recomputeCropPosition), e.props.setCropSize && e.props.setCropSize(w), w;
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
          var o = r.getMousePoint(t), i = jt(t).pixelY, n = e.props.zoom - i * e.props.zoomSpeed / 200;
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
            var u = e.getPointOnContainer(o, e.containerPosition), d = e.getPointOnMedia(u), v = {
              x: d.x * l - u.x,
              y: d.y * l - u.y
            }, y = e.props.restrictPosition ? oe(v, e.mediaSize, e.state.cropSize, l, e.props.rotation) : v;
            e.props.onCropChange(y);
          }
          e.props.onZoomChange(l);
        }
      }, e.getCropData = function() {
        if (!e.state.cropSize)
          return null;
        var t = e.props.restrictPosition ? oe(e.props.crop, e.mediaSize, e.state.cropSize, e.props.zoom, e.props.rotation) : e.props.crop;
        return qt(t, e.mediaSize, e.state.cropSize, e.getAspect(), e.props.zoom, e.props.rotation, e.props.restrictPosition);
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
        var o, i, n = e.props, s = n.crop, c = n.onCropChange, l = n.keyboardStep, u = n.zoom, d = n.rotation, v = l;
        if (e.state.cropSize) {
          t.shiftKey && (v *= 0.2);
          var y = D({}, s);
          switch (t.key) {
            case "ArrowUp":
              y.y -= v, t.preventDefault();
              break;
            case "ArrowDown":
              y.y += v, t.preventDefault();
              break;
            case "ArrowLeft":
              y.x -= v, t.preventDefault();
              break;
            case "ArrowRight":
              y.x += v, t.preventDefault();
              break;
            default:
              return;
          }
          e.props.restrictPosition && (y = oe(y, e.mediaSize, e.state.cropSize, u, d)), t.repeat || (i = (o = e.props).onInteractionStart) === null || i === void 0 || i.call(o), c(y);
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
      }), this.containerRef.addEventListener("gesturestart", this.onGestureStart)), this.currentDoc.addEventListener("scroll", this.onScroll), this.props.disableAutomaticStylesInjection || (this.styleRef = this.currentDoc.createElement("style"), this.styleRef.setAttribute("type", "text/css"), this.props.nonce && this.styleRef.setAttribute("nonce", this.props.nonce), this.styleRef.innerHTML = er, this.currentDoc.head.appendChild(this.styleRef)), this.imageRef.current && this.imageRef.current.complete && this.onMediaLoad(), this.props.setImageRef && this.props.setImageRef(this.imageRef), this.props.setVideoRef && this.props.setVideoRef(this.videoRef), this.props.setCropperRef && this.props.setCropperRef(this.cropperRef));
    }, r.prototype.componentWillUnmount = function() {
      var e, t;
      !this.currentDoc || !this.currentWindow || (typeof window.ResizeObserver > "u" && this.currentWindow.removeEventListener("resize", this.computeSizes), (e = this.resizeObserver) === null || e === void 0 || e.disconnect(), this.containerRef && this.containerRef.removeEventListener("gesturestart", this.preventZoomSafari), this.styleRef && ((t = this.styleRef.parentNode) === null || t === void 0 || t.removeChild(this.styleRef)), this.cleanEvents(), this.props.zoomWithScroll && this.clearScrollEvent());
    }, r.prototype.componentDidUpdate = function(e) {
      var t, o, i, n, s, c, l, u, d;
      e.rotation !== this.props.rotation ? (this.computeSizes(), this.recomputeCropPosition()) : e.aspect !== this.props.aspect ? this.computeSizes() : e.objectFit !== this.props.objectFit ? this.computeSizes() : e.zoom !== this.props.zoom ? this.recomputeCropPosition() : ((t = e.cropSize) === null || t === void 0 ? void 0 : t.height) !== ((o = this.props.cropSize) === null || o === void 0 ? void 0 : o.height) || ((i = e.cropSize) === null || i === void 0 ? void 0 : i.width) !== ((n = this.props.cropSize) === null || n === void 0 ? void 0 : n.width) ? this.computeSizes() : (((s = e.crop) === null || s === void 0 ? void 0 : s.x) !== ((c = this.props.crop) === null || c === void 0 ? void 0 : c.x) || ((l = e.crop) === null || l === void 0 ? void 0 : l.y) !== ((u = this.props.crop) === null || u === void 0 ? void 0 : u.y)) && this.emitCropAreaChange(), e.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef && (this.props.zoomWithScroll ? this.containerRef.addEventListener("wheel", this.onWheel, {
        passive: !1
      }) : this.clearScrollEvent()), e.video !== this.props.video && ((d = this.videoRef.current) === null || d === void 0 || d.load());
      var v = this.getObjectFit();
      v !== this.state.mediaObjectFit && this.setState({
        mediaObjectFit: v
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
          var s = this.containerRect.width / this.containerRect.height, c = ((e = this.imageRef.current) === null || e === void 0 ? void 0 : e.naturalWidth) || ((t = this.videoRef.current) === null || t === void 0 ? void 0 : t.videoWidth) || 0, l = ((o = this.imageRef.current) === null || o === void 0 ? void 0 : o.naturalHeight) || ((i = this.videoRef.current) === null || i === void 0 ? void 0 : i.videoHeight) || 0, u = c / l;
          return u < s ? "horizontal-cover" : "vertical-cover";
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
          var l = Ye(o, i), u = t.props.rotation + (l - t.lastPinchRotation);
          t.props.onRotationChange && t.props.onRotationChange(u), t.lastPinchRotation = l;
        });
      }
    }, r.prototype.render = function() {
      var e = this, t, o = this.props, i = o.image, n = o.video, s = o.mediaProps, c = o.cropperProps, l = o.transform, u = o.crop, d = u.x, v = u.y, y = o.rotation, g = o.zoom, P = o.cropShape, w = o.showGrid, N = o.roundCropAreaPixels, R = o.style, _ = R.containerStyle, k = R.cropAreaStyle, f = R.mediaStyle, G = o.classes, J = G.containerClassName, L = G.cropAreaClassName, F = G.mediaClassName, b = (t = this.state.mediaObjectFit) !== null && t !== void 0 ? t : this.getObjectFit();
      return Z.createElement("div", {
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        ref: function(de) {
          return e.containerRef = de;
        },
        "data-testid": "container",
        style: _,
        className: ue("reactEasyCrop_Container", J)
      }, i ? Z.createElement("img", D({
        alt: "",
        className: ue("reactEasyCrop_Image", b === "contain" && "reactEasyCrop_Contain", b === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", b === "vertical-cover" && "reactEasyCrop_Cover_Vertical", F)
      }, s, {
        src: i,
        ref: this.imageRef,
        style: D(D({}, f), {
          transform: l || "translate(".concat(d, "px, ").concat(v, "px) rotate(").concat(y, "deg) scale(").concat(g, ")")
        }),
        onLoad: this.onMediaLoad
      })) : n && Z.createElement("video", D({
        autoPlay: !0,
        playsInline: !0,
        loop: !0,
        muted: !0,
        className: ue("reactEasyCrop_Video", b === "contain" && "reactEasyCrop_Contain", b === "horizontal-cover" && "reactEasyCrop_Cover_Horizontal", b === "vertical-cover" && "reactEasyCrop_Cover_Vertical", F)
      }, s, {
        ref: this.videoRef,
        onLoadedMetadata: this.onMediaLoad,
        style: D(D({}, f), {
          transform: l || "translate(".concat(d, "px, ").concat(v, "px) rotate(").concat(y, "deg) scale(").concat(g, ")")
        }),
        controls: !1
      }), (Array.isArray(n) ? n : [{
        src: n
      }]).map(function(I) {
        return Z.createElement("source", D({
          key: I.src
        }, I));
      })), this.state.cropSize && Z.createElement("div", D({
        ref: this.cropperRef,
        style: D(D({}, k), {
          width: N ? Math.round(this.state.cropSize.width) : this.state.cropSize.width,
          height: N ? Math.round(this.state.cropSize.height) : this.state.cropSize.height
        }),
        tabIndex: 0,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        "data-testid": "cropper",
        className: ue("reactEasyCrop_CropArea", P === "round" && "reactEasyCrop_CropAreaRound", w && "reactEasyCrop_CropAreaGrid", L)
      }, c)));
    }, r.defaultProps = {
      zoom: 1,
      rotation: 0,
      aspect: 4 / 3,
      maxZoom: rr,
      minZoom: tr,
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
      keyboardStep: or
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
  })(Z.Component)
);
const pe = mt("ImageUpload");
xt(Ke.Parser);
const Rr = ht(function({
  value: r = "",
  onChange: e,
  type: t = "cover",
  cropEnabled: o = !0,
  aspectRatio: i = 16 / 9,
  maxSize: n = 10,
  placeholder: s,
  showUrlInput: c = !0,
  previewWidth: l,
  previewHeight: u,
  uploadEnabled: d = !1,
  accept: v,
  acceptHint: y,
  maxBytes: g,
  className: P = "",
  deferUpload: w = !1,
  onFileReady: N,
  skipSvgaValidation: R = !1,
  onUrlErrorChange: _
}, k) {
  const { t: f } = Rt(), G = s || f(C.CLICK_OR_DRAG_TO_UPLOAD_IMAGE), J = q(null), [L, F] = S(!1), [b, I] = S(0), [de, Q] = S(!1), [fe, ne] = S(""), [x, X] = S(!d), [z, ie] = S(r), [me, j] = S(!1), [W, U] = S(""), A = q(null);
  A.current || (A.current = new bt({
    setValidating: j,
    setError: U,
    onConfirm: e
  }, R)), A.current.updateCallbacks({
    setValidating: j,
    setError: U,
    onConfirm: e
  }), A.current.updateSkipSvgaValidation(R);
  const $ = q(null), { previewUrl: V, setPreview: K } = Ut(), [Be, ve] = S(!1), [ge, ae] = S(!1), {
    containerRef: Je,
    playUrl: xe,
    stopAnimation: ir
  } = Tt({ loop: 1, autoPlay: !0 });
  dt(k, () => ({
    get isUrlInputMode() {
      return x;
    },
    get isValidating() {
      return me;
    },
    get urlValidationError() {
      return W;
    },
    /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
    get hasUrlError() {
      return x ? !!(W || g && z.trim() && le(z.trim()) > g) : !1;
    },
    get urlInputValue() {
      return z;
    },
    /** 切换到 URL 输入模式 */
    switchToUrlMode: () => {
      X(!0);
    },
    /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
    setUrlError: (p) => {
      U(p);
    },
    validateImageUrl: async (p, m) => {
      j(!0), U("");
      try {
        return await zt(p, m, R), !0;
      } catch (E) {
        const O = E instanceof Error ? E : new Error(String(E));
        throw U(O.message || f(C.IMAGE_URL_INVALID)), O;
      } finally {
        j(!1);
      }
    },
    reset: () => {
      A.current.reset(), $.current = null, K(null), ve(!1), ae(!1), ie(r || ""), ne(""), U(""), F(!1), I(0), Q(!1), d && X(!!r), N?.(null);
    },
    ensureUrlValidated: async () => x ? await A.current.ensureUrlValidatedWithErrorCheck(
      z,
      r || "",
      !!W,
      g
    ) : null,
    uploadPendingFile: async () => {
      const p = $.current;
      if (!p) return null;
      F(!0), I(0), Q(!1);
      try {
        const m = await Ve(p, t, I);
        return $.current = null, ne(m.provider || ""), Q(!1), m.url;
      } catch (m) {
        throw Q(!0), m;
      } finally {
        F(!1), I(0);
      }
    }
  }), [t, x, me, W, z, V, r, g, e, f]), H(() => {
    ie(r), r && d && X(!0), w && ($.current = null, K(null), ae(!1), N?.(null));
  }, [r]), H(() => {
    d && r ? X(!0) : d && X(!1);
  }, [d]), H(() => {
    if (!_) return;
    let p = !1;
    (x || !d) && (W || g && z.trim() && le(z.trim()) > g) && (p = !0), _(p);
  }, [x, W, z, g, d, _]);
  const Ae = q(r);
  H(() => {
    r && V && Ae.current !== r && K(null), Ae.current = r;
  }, [r, V, K]), H(() => () => {
    A.current?.dispose();
  }, []), H(() => {
    !ge || !V || xe(V).catch((p) => {
      pe.error("ImageUpload", "SVGA preview load error:", p);
    });
  }, [ge, V, xe]);
  const we = q(null), T = q(null);
  H(() => {
    if (!r || !We(r) || !(x || !d) || !we.current) {
      if (T.current) {
        try {
          T.current.stopAnimation(), T.current.clear();
        } catch {
        }
        T.current = null;
      }
      return;
    }
    if (T.current) {
      try {
        T.current.stopAnimation(), T.current.clear();
      } catch {
      }
      T.current = null;
    }
    const p = we.current, m = new Ke.Player(p);
    m.loops = 0, m.setContentMode("AspectFit"), T.current = m;
    const E = At();
    if (E)
      return E.load(
        r,
        (O) => {
          m.setVideoItem(O), m.startAnimation();
        },
        (O) => {
          pe.error("ImageUpload", "SVGA URL preview load error:", O);
        }
      ), () => {
        try {
          m.stopAnimation(), m.clear();
        } catch {
        }
        T.current = null;
      };
  }, [r, x, d]);
  const [Qe, ee] = S(!1), [te, be] = S(""), [et, ze] = S({ x: 0, y: 0 }), [tt, Ie] = S(1), [Me, Ne] = S(null), [ar, rt] = S(null), [Le, Ue] = S(!1), ot = ye((p, m) => {
    Ne(m);
  }, []), [nt, Te] = S(!1), re = q(null);
  H(() => () => {
    re.current && clearTimeout(re.current);
  }, []);
  const Ce = ye(async (p) => {
    const m = It(p, v);
    if (!m.valid) {
      Y.error(m.errorHint);
      return;
    }
    if (!Mt(p, n)) {
      Y.error(f(C.FILE_SIZE_EXCEEDS_MB, { max: n }));
      return;
    }
    try {
      await Nt(p, v, R);
    } catch (E) {
      const O = E instanceof Error ? E : new Error(String(E));
      pe.error("ImageUpload", `File load failed: ${O.message || f(C.FILE_LOAD_FAILED)}`, O), Y.error(O.message || f(C.FILE_LOAD_FAILED));
      return;
    }
    if (o) {
      be(""), rt(p), ze({ x: 0, y: 0 }), Ie(1), Ne(null), Ue(!0), Te(!1), ee(!0);
      try {
        const E = await _t(p);
        be(E);
      } catch {
        Y.error(f(C.IMAGE_LOAD_FAILED)), ee(!1);
      } finally {
        Ue(!1), re.current && clearTimeout(re.current), re.current = setTimeout(() => {
          Te(!0);
        }, 350);
      }
    } else
      await Oe(p);
  }, [v, n, f, R, o, w]), Oe = async (p) => {
    if (w) {
      $.current = p, K(p);
      const m = p.type.startsWith("video/"), E = Et(p);
      ve(m), ae(E), N?.(p);
      return;
    }
    F(!0), I(0);
    try {
      const m = await Ve(p, t, I);
      e(m.url), ne(m.provider || ""), Y.success(f(C.UPLOAD_SUCCESS));
    } catch (m) {
      const E = m instanceof Error ? m : new Error(String(m));
      pe.error("ImageUpload", `Upload failed: ${E.message || f(C.NETWORK_ERROR)}`, E), Y.error(f(C.UPLOAD_FAILED_WITH_ERROR, { error: E.message || f(C.NETWORK_ERROR) }));
    } finally {
      F(!1), I(0);
    }
  }, it = async () => {
    if (!(!Me || !te))
      try {
        const p = await Lt(te, Me);
        ee(!1), await Oe(p);
      } catch {
        Y.error(f(C.CROP_FAILED));
      }
  }, at = Dt, st = ye(St((p) => {
    Ce(p);
  }), [Ce]), ct = () => {
    A.current.handleUrlFocus();
  }, lt = () => {
    A.current.handleUrlBlur(
      z,
      g
    );
  }, ut = () => {
    A.current.handleUrlEnter(
      z,
      g
    );
  }, pt = (p) => {
    p?.stopPropagation(), A.current.cancelValidation(), j(!1), U(""), e(""), ie(""), ne(""), F(!1), I(0), Q(!1), w && ($.current = null, K(null), ve(!1), ae(!1), N?.(null));
  };
  return /* @__PURE__ */ M("div", { className: `image-upload-container ${P}`, children: [
    d && c && /* @__PURE__ */ M("div", { className: "image-upload-mode-switch", children: [
      /* @__PURE__ */ h(
        ce,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${x ? "" : "active"}`,
          onClick: () => {
            A.current.cancelValidation(), j(!1), U(""), X(!1);
          },
          icon: /* @__PURE__ */ h(Fe, { size: "12" }),
          children: f(C.UPLOAD_IMAGE)
        }
      ),
      /* @__PURE__ */ h(
        ce,
        {
          shape: "round",
          variant: "outline",
          className: `mode-switch-btn ${x ? "active" : ""}`,
          onClick: () => {
            A.current.cancelValidation(), j(!1), U(""), X(!0);
          },
          children: f(C.ENTER_URL)
        }
      )
    ] }),
    (x || !d) && /* @__PURE__ */ h("div", { className: "image-upload-url-input", children: /* @__PURE__ */ h(
      Ct,
      {
        value: z,
        onChange: (p) => {
          ie(String(p)), U(""), A.current.cancelValidation(), j(!1);
        },
        onFocus: ct,
        onBlur: lt,
        onEnter: ut,
        placeholder: f(C.ENTER_IMAGE_URL),
        status: W ? "error" : void 0,
        suffix: g ? me ? /* @__PURE__ */ h("span", { className: "input-suffix-validating", children: f(C.VALIDATING) }) : /* @__PURE__ */ M("span", { className: `input-suffix-count${le(z) > g ? " byte-overflow" : ""}`, children: [
          le(z),
          "/",
          g
        ] }) : void 0
      }
    ) }),
    W && (x || !d) && /* @__PURE__ */ h("div", { className: "image-upload-url-error", children: W }),
    d && !x && /* @__PURE__ */ M(se, { children: [
      V ? /* @__PURE__ */ M(
        "div",
        {
          className: "image-upload-preview",
          style: {
            width: l || "100%",
            height: u || 160
          },
          children: [
            L ? (
              // 正在上传时显示进度条覆盖层
              /* @__PURE__ */ h("div", { className: "image-upload-uploading-overlay", children: /* @__PURE__ */ h("div", { className: "image-upload-progress-circle", children: /* @__PURE__ */ M("svg", { viewBox: "0 0 36 36", className: `progress-ring${b <= 0 ? " indeterminate" : ""}`, children: [
                /* @__PURE__ */ h(
                  "path",
                  {
                    className: "progress-ring-bg",
                    pathLength: "100",
                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                  }
                ),
                /* @__PURE__ */ h(
                  "path",
                  {
                    className: `progress-ring-fill${b <= 0 ? " indeterminate" : ""}`,
                    pathLength: "100",
                    strokeDasharray: b > 0 ? `${b}, 100` : "25, 100",
                    d: `M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831`
                  }
                )
              ] }) }) })
            ) : /* @__PURE__ */ h(se, { children: ge ? /* @__PURE__ */ h("div", { ref: Je, className: "svga-preview-container" }) : Be ? /* @__PURE__ */ h("video", { src: V, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ h("img", { src: V, alt: "preview" }) }),
            !L && fe && /* @__PURE__ */ h("span", { className: "image-upload-provider-badge", children: fe.toUpperCase() }),
            !L && de ? /* @__PURE__ */ h("span", { className: "image-upload-provider-badge upload-failed-badge", children: f(C.UPLOAD_FAILED) }) : !L && !fe ? /* @__PURE__ */ h("span", { className: "image-upload-provider-badge", style: { background: "#ff9800" }, children: f(C.PENDING_UPLOAD) }) : null,
            !L && /* @__PURE__ */ M("div", { className: "image-upload-preview-actions", children: [
              /* @__PURE__ */ h(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: () => J.current?.click(),
                  title: f(C.RE_UPLOAD),
                  children: /* @__PURE__ */ h(Fe, {})
                }
              ),
              /* @__PURE__ */ h(
                "button",
                {
                  className: "preview-action-btn",
                  onClick: pt,
                  title: f(C.DELETE),
                  children: /* @__PURE__ */ h(vt, {})
                }
              )
            ] })
          ]
        }
      ) : (
        /* 上传区域 */
        /* @__PURE__ */ h(
          "div",
          {
            className: `image-upload-dropzone ${L ? "uploading" : ""}`,
            onClick: () => !L && J.current?.click(),
            onDragOver: at,
            onDrop: st,
            style: { height: u || 120 },
            children: L ? /* @__PURE__ */ M("div", { className: "image-upload-progress", children: [
              /* @__PURE__ */ h("div", { className: "progress-bar", children: /* @__PURE__ */ h("div", { className: "progress-fill", style: { width: `${b}%` } }) }),
              /* @__PURE__ */ M("span", { className: "progress-text", children: [
                b,
                "%"
              ] })
            ] }) : /* @__PURE__ */ M(se, { children: [
              /* @__PURE__ */ h(gt, { size: "32", strokeWidth: 1.2 }),
              /* @__PURE__ */ h("span", { className: "upload-hint", children: G }),
              /* @__PURE__ */ h("span", { className: "upload-sub-hint", children: y || f(C.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: n }) })
            ] })
          }
        )
      ),
      /* @__PURE__ */ h(
        "input",
        {
          ref: J,
          type: "file",
          accept: v || "image/jpeg,image/png,image/gif,image/webp",
          style: { display: "none" },
          onChange: (p) => {
            const m = p.target.files?.[0];
            m && Ce(m), p.target.value = "";
          }
        }
      )
    ] }),
    r && (x || !d) && /* @__PURE__ */ h(
      "div",
      {
        className: "image-upload-preview url-preview",
        style: {
          width: l || "100%",
          height: u || 120,
          marginTop: 8
        },
        children: We(r) ? /* @__PURE__ */ h("div", { ref: we, className: "svga-preview-container" }) : Pt(r) ? /* @__PURE__ */ h("video", { src: r, muted: !0, loop: !0, autoPlay: !0, playsInline: !0 }) : /* @__PURE__ */ h("img", { src: r, alt: "preview", onError: (p) => {
          p.target.style.display = "none";
        } })
      }
    ),
    /* @__PURE__ */ h(
      yt,
      {
        visible: Qe,
        header: f(C.CROP_IMAGE),
        onClose: () => ee(!1),
        width: 600,
        className: "image-crop-modal",
        footer: /* @__PURE__ */ M(se, { children: [
          /* @__PURE__ */ h(ce, { shape: "round", variant: "outline", onClick: () => ee(!1), children: f(C.CANCEL) }),
          /* @__PURE__ */ h(ce, { shape: "round", theme: "primary", onClick: it, disabled: Le || !te, icon: /* @__PURE__ */ h(wt, { size: "14" }), children: f(C.CONFIRM_ACTION_TITLE, { action: f(C.CROP_IMAGE) }) })
        ] }),
        children: /* @__PURE__ */ h("div", { className: "image-crop-area", children: Le || !nt ? /* @__PURE__ */ M("div", { className: "image-crop-loading", children: [
          /* @__PURE__ */ h("div", { className: "loading-spinner" }),
          /* @__PURE__ */ h("span", { children: f(C.IMAGE_LOADING) })
        ] }) : te ? /* @__PURE__ */ h(
          nr,
          {
            image: te,
            crop: et,
            zoom: tt,
            aspect: i,
            onCropChange: ze,
            onZoomChange: Ie,
            onCropComplete: ot
          }
        ) : null })
      }
    )
  ] });
});
export {
  Rr as I
};
