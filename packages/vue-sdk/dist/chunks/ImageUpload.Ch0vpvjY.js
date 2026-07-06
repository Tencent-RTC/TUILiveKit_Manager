import { openBlock as v, createBlock as E, renderSlot as he, resolveComponent as _, createVNode as M, withCtx as B, Fragment as be, renderList as lt, resolveDynamicComponent as De, withDirectives as Et, vShow as Ct, mergeProps as Tt, withModifiers as ai, createCommentVNode as X, defineComponent as hi, computed as ke, ref as T, watch as ce, nextTick as ct, onMounted as li, onUnmounted as ci, createElementBlock as A, createElementVNode as C, normalizeClass as Se, unref as y, createTextVNode as ut, toDisplayString as P, createSlots as ui, normalizeStyle as Me } from "vue";
import { UploadIcon as dt, CloseIcon as di, ImageIcon as fi, CutIcon as mi } from "tdesign-icons-vue-next";
import { MessagePlugin as re } from "tdesign-vue-next";
import { s as ft } from "./svga.min.oQNdj2nc.js";
import { useUIKit as pi } from "@tencentcloud/uikit-base-component-vue3";
import { c as gi } from "./logger.DfjyL4S7.js";
import { M as W } from "./en-US.BxRaQHCQ.js";
import { as as vi, a$ as mt, b7 as pt, b1 as bi, b8 as wi, a_ as yi, b0 as zi, af as Ri } from "./main-layout.zkqp5e6A.js";
import { i as Ai, g as Si } from "./svga.DC02l1-t.js";
import { U as Mi, k as xi, u as gt, i as Ei, h as Ci, v as Ti, a as Wi } from "./upload.XbwElAmz.js";
import { u as Ii } from "./usePreviewUrl.fhvcWQdM.js";
import { a as Di } from "./useAsyncAction.B9mqB-Vh.js";
import { _ as Pi } from "./_plugin-vue_export-helper.CHgC5LLL.js";
function vt(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter((function(s) {
      return Object.getOwnPropertyDescriptor(e, s).enumerable;
    }))), i.push.apply(i, o);
  }
  return i;
}
function z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vt(Object(i), !0).forEach((function(o) {
      j(e, o, i[o]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : vt(Object(i)).forEach((function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o));
    }));
  }
  return e;
}
function j(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Li(e, t) {
  if (e == null) return {};
  var i, o, s = (function(a, h) {
    if (a == null) return {};
    var r, l, u = {}, c = Object.keys(a);
    for (l = 0; l < c.length; l++) r = c[l], h.indexOf(r) >= 0 || (u[r] = a[r]);
    return u;
  })(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (o = 0; o < n.length; o++) i = n[o], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
  }
  return s;
}
function ae(e) {
  return (function(t) {
    if (Array.isArray(t)) return $e(t);
  })(e) || (function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  })(e) || (function(t, i) {
    if (t) {
      if (typeof t == "string") return $e(t, i);
      var o = Object.prototype.toString.call(t).slice(8, -1);
      if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return $e(t, i);
    }
  })(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function $e(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
  return o;
}
var bt, Oi, xe, I = (bt = function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function i() {
      for (var o = [], s = 0; s < arguments.length; s++) {
        var n = arguments[s];
        if (n) {
          var a = typeof n;
          if (a === "string" || a === "number") o.push(n);
          else if (Array.isArray(n)) {
            if (n.length) {
              var h = i.apply(null, n);
              h && o.push(h);
            }
          } else if (a === "object") if (n.toString === Object.prototype.toString) for (var r in n) t.call(n, r) && n[r] && o.push(r);
          else o.push(n.toString());
        }
      }
      return o.join(" ");
    }
    e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
  })();
}, bt(xe = { path: Oi, exports: {}, require: function(e, t) {
  return (function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  })(t == null && xe.path);
} }, xe.exports), xe.exports), Y = function(e) {
  return function(t, i) {
    if (!t) return e;
    var o;
    typeof t == "string" ? o = t : i = t;
    var s = e;
    return o && (s += "__" + o), s + (i ? Object.keys(i).reduce((function(n, a) {
      var h = i[a];
      return h && (n += " " + (typeof h == "boolean" ? s + "--" + a : s + "--" + a + "_" + h)), n;
    }), "") : "");
  };
};
function Ne(e, t, i) {
  var o, s, n, a, h;
  function r() {
    var u = Date.now() - a;
    u < t && u >= 0 ? o = setTimeout(r, t - u) : (o = null, i || (h = e.apply(n, s), n = s = null));
  }
  t == null && (t = 100);
  var l = function() {
    n = this, s = arguments, a = Date.now();
    var u = i && !o;
    return o || (o = setTimeout(r, t)), u && (h = e.apply(n, s), n = s = null), h;
  };
  return l.clear = function() {
    o && (clearTimeout(o), o = null);
  }, l.flush = function() {
    o && (h = e.apply(n, s), n = s = null, clearTimeout(o), o = null);
  }, l;
}
Ne.debounce = Ne;
var Xe = Ne, p = function() {
  return p = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, p.apply(this, arguments);
};
function Wt(e, t) {
  var i, o;
  return e && t ? (i = "" + e + t[0].toUpperCase() + t.slice(1), o = e + "-" + t) : (i = e || t, o = e || t), { name: i, classname: o };
}
function It(e) {
  return /^blob:/.test(e);
}
function wt(e) {
  return It(e) || (function(t) {
    return /^data:/.test(t);
  })(e);
}
function ue(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function D(e) {
  return e === void 0;
}
function Ie(e) {
  return typeof e == "object" && e !== null;
}
function Ye(e, t, i) {
  var o = {};
  return Ie(e) ? (Object.keys(t).forEach((function(s) {
    D(e[s]) ? o[s] = t[s] : Ie(t[s]) ? Ie(e[s]) ? o[s] = Ye(e[s], t[s], i[s]) : o[s] = e[s] ? t[s] : i[s] : t[s] === !0 || t[s] === !1 ? o[s] = !!e[s] : o[s] = e[s];
  })), o) : e ? t : i;
}
function Ee(e) {
  var t = Number(e);
  return Number.isNaN(t) ? e : t;
}
function yt(e) {
  return typeof (e == "number" || /* @__PURE__ */ (function(t) {
    return typeof t == "object" && t !== null;
  })(e) && toString.call(e) == "[object Number]") && !Dt(e);
}
function Dt(e) {
  return e != e;
}
function Pt(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
var we = function(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), this.type = "manipulateImage", this.move = e, this.scale = t;
}, Hi = function(e, t) {
  t === void 0 && (t = {}), this.type = "resize", this.directions = e, this.params = t;
}, Ke = function(e) {
  this.type = "move", this.directions = e;
}, Ui = (function() {
  function e(t, i, o, s, n) {
    this.type = "drag", this.nativeEvent = t, this.position = o, this.previousPosition = s, this.element = i, this.anchor = n;
  }
  return e.prototype.shift = function() {
    var t = this, i = t.element, o = t.anchor, s = t.position;
    if (i) {
      var n = i.getBoundingClientRect(), a = n.left, h = n.top;
      return { left: s.left - a - o.left, top: s.top - h - o.top };
    }
    return { left: 0, top: 0 };
  }, e;
})(), Qe = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  if (!this.$refs.draggable) throw new Error('You should add ref "draggable" to your root element to use draggable mixin');
  this.touches = [], this.hovered = !1;
}, methods: { onMouseOver: function() {
  this.hovered || (this.hovered = !0, this.$emit("enter"));
}, onMouseLeave: function() {
  this.hovered && !this.touches.length && (this.hovered = !1, this.$emit("leave"));
}, onTouchStart: function(e) {
  e.cancelable && !this.disabled && e.touches.length === 1 && (this.touches = ae(e.touches), this.hovered || (this.$emit("enter"), this.hovered = !0), e.touches.length && this.initAnchor(this.touches.reduce((function(t, i) {
    return { clientX: t.clientX + i.clientX / e.touches.length, clientY: t.clientY + i.clientY / e.touches.length };
  }), { clientX: 0, clientY: 0 })), e.preventDefault && e.preventDefault(), e.stopPropagation());
}, onTouchEnd: function() {
  this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length && (this.processMove(e, e.touches), e.preventDefault && e.preventDefault(), e.stopPropagation && e.stopPropagation());
}, onMouseDown: function(e) {
  if (!this.disabled) {
    var t = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [t], this.initAnchor(t), e.stopPropagation();
  }
}, onMouseMove: function(e) {
  this.touches.length && (this.processMove(e, [{ fake: !0, clientX: e.clientX, clientY: e.clientY }]), e.preventDefault && e.preventDefault());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(e) {
  var t = this.$refs.draggable.getBoundingClientRect(), i = t.left, o = t.right, s = t.bottom, n = t.top;
  this.anchor = { left: e.clientX - i, top: e.clientY - n, bottom: s - e.clientY, right: o - e.clientX };
}, processMove: function(e, t) {
  var i = ae(t);
  if (this.touches.length) {
    if (this.touches.length === 1 && i.length === 1) {
      var o = this.$refs.draggable;
      this.$emit("drag", new Ui(e, o, { left: i[0].clientX, top: i[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
Qe.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "draggable", class: i.classname, onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }), onMouseover: t[3] || (t[3] = function() {
    return n.onMouseOver && n.onMouseOver.apply(n, arguments);
  }), onMouseleave: t[4] || (t[4] = function() {
    return n.onMouseLeave && n.onMouseLeave.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 34);
};
var Be = Y("vue-handler-wrapper"), Lt = { name: "HandlerWrapper", components: { DraggableElement: Qe }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var t, i = Wt(this.horizontalPosition, this.verticalPosition);
    e = Be((j(t = {}, i.classname, !0), j(t, "disabled", this.disabled), t));
  } else e = Be({ disabled: this.disabled });
  return { root: e, draggable: Be("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Lt.render = function(e, t, i, o, s, n) {
  var a = _("DraggableElement");
  return v(), E("div", { class: n.classes.root }, [M(a, { class: n.classes.draggable, onDrag: t[1] || (t[1] = function(h) {
    return e.$emit("drag", h);
  }), onDragEnd: t[2] || (t[2] = function(h) {
    return e.$emit("drag-end");
  }), onLeave: t[3] || (t[3] = function(h) {
    return e.$emit("leave");
  }), onEnter: t[4] || (t[4] = function(h) {
    return e.$emit("enter");
  }) }, { default: B((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["class"])], 2);
};
var ki = Y("vue-line-wrapper"), Ot = { name: "LineWrapper", components: { DraggableElement: Qe }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return ki((j(e = {}, this.position, !0), j(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ot.render = function(e, t, i, o, s, n) {
  var a = _("DraggableElement");
  return v(), E(a, { class: n.classname, onDrag: t[1] || (t[1] = function(h) {
    return e.$emit("drag", h);
  }), onDragEnd: t[2] || (t[2] = function(h) {
    return e.$emit("drag-end");
  }), onLeave: t[3] || (t[3] = function(h) {
    return e.$emit("leave");
  }), onEnter: t[4] || (t[4] = function(h) {
    return e.$emit("enter");
  }) }, { default: B((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["class"]);
};
var Z = ["left", "right", "top", "bottom"], $i = ["left", "right"], Bi = ["top", "bottom"], ji = ["left", "top"], _i = ["fill-area", "fit-area", "stencil", "none"], zt = { left: 0, top: 0, width: 0, height: 0 };
function Rt(e, t, i) {
  return !(i = i || ["width", "height", "left", "top"]).some((function(o) {
    return e[o] !== t[o];
  }));
}
function q(e) {
  return { left: e.left, top: e.top, right: e.left + e.width, bottom: e.top + e.height };
}
function de(e, t) {
  return { left: e.left - t.left, top: e.top - t.top };
}
function L(e) {
  return { left: e.left + e.width / 2, top: e.top + e.height / 2 };
}
function ye(e, t) {
  var i = { left: 0, top: 0, right: 0, bottom: 0 };
  return Z.forEach((function(o) {
    var s = t[o], n = q(e)[o];
    i[o] = s !== void 0 && n !== void 0 ? o === "left" || o === "top" ? Math.max(0, s - n) : Math.max(0, n - s) : 0;
  })), i;
}
function G(e, t) {
  return { left: e.left - t.left, top: e.top - t.top, width: e.width + t.left + t.right, height: e.height + t.top + t.bottom };
}
function Pe(e) {
  return { left: -e.left, top: -e.top };
}
function k(e, t) {
  return p(p({}, e), { left: e.left + t.left, top: e.top + t.top });
}
function F(e, t, i, o) {
  if (t !== 1) {
    if (i) {
      var s = L(e);
      return { width: e.width * t, height: e.height * t, left: e.left + e.width * (1 - t) / 2 + (i.left - s.left) * (1 - t), top: e.top + e.height * (1 - t) / 2 + (i.top - s.top) * (1 - t) };
    }
    return { width: e.width * t, height: e.height * t, left: e.left + e.width * (1 - t) / 2, top: e.top + e.height * (1 - t) / 2 };
  }
  return e;
}
function R(e) {
  return e.width / e.height;
}
function fe(e, t) {
  return Math.min(t.right !== void 0 && t.left !== void 0 ? (t.right - t.left) / e.width : 1 / 0, t.bottom !== void 0 && t.top !== void 0 ? (t.bottom - t.top) / e.height : 1 / 0);
}
function me(e, t) {
  var i = { left: 0, top: 0 }, o = ye(e, t);
  return o.left && o.left > 0 ? i.left = o.left : o.right && o.right > 0 && (i.left = -o.right), o.top && o.top > 0 ? i.top = o.top : o.bottom && o.bottom > 0 && (i.top = -o.bottom), i;
}
function je(e, t) {
  var i;
  return t.minimum && e < t.minimum ? i = t.minimum : t.maximum && e > t.maximum && (i = t.maximum), i;
}
function Ht(e, t) {
  var i = R(e), o = R(t);
  return t.width < 1 / 0 && t.height < 1 / 0 ? i > o ? { width: t.width, height: t.width / i } : { width: t.height * i, height: t.height } : t.width < 1 / 0 ? { width: t.width, height: t.width / i } : t.height < 1 / 0 ? { width: t.height * i, height: t.height } : e;
}
function Ut(e, t) {
  var i = t * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(i)) + Math.abs(e.height * Math.sin(i)), height: Math.abs(e.width * Math.sin(i)) + Math.abs(e.height * Math.cos(i)) };
}
function ne(e, t) {
  var i = t * Math.PI / 180;
  return { left: e.left * Math.cos(i) - e.top * Math.sin(i), top: e.left * Math.sin(i) + e.top * Math.cos(i) };
}
function Le(e, t) {
  var i = ye(O(e, t), t);
  return i.left + i.right + i.top + i.bottom ? i.left + i.right > i.top + i.bottom ? Math.min((e.width + i.left + i.right) / e.width, fe(e, t)) : Math.min((e.height + i.top + i.bottom) / e.height, fe(e, t)) : 1;
}
function O(e, t, i) {
  i === void 0 && (i = !1);
  var o = me(e, t);
  return k(e, i ? Pe(o) : o);
}
function Ge(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function Fi(e, t) {
  return p(p({}, e), { minWidth: Math.min(t.width, e.minWidth), minHeight: Math.min(t.height, e.minHeight), maxWidth: Math.min(t.width, e.maxWidth), maxHeight: Math.min(t.height, e.maxHeight) });
}
function kt(e, t, i) {
  i === void 0 && (i = !0);
  var o = {};
  return Z.forEach((function(s) {
    var n = e[s], a = t[s];
    n !== void 0 && a !== void 0 ? o[s] = s === "left" || s === "top" ? i ? Math.max(n, a) : Math.min(n, a) : i ? Math.min(n, a) : Math.max(n, a) : a !== void 0 ? o[s] = a : n !== void 0 && (o[s] = n);
  })), o;
}
function Oe(e, t) {
  return kt(e, t, !0);
}
function At(e) {
  var t = e.size, i = e.aspectRatio, o = e.ignoreMinimum, s = e.sizeRestrictions;
  return !!((t.correctRatio || R(t) >= i.minimum && R(t) <= i.maximum) && t.height <= s.maxHeight && t.width <= s.maxWidth && t.width && t.height && (o || t.height >= s.minHeight && t.width >= s.minWidth));
}
function St(e, t) {
  return Math.pow(e.width - t.width, 2) + Math.pow(e.height - t.height, 2);
}
function te(e) {
  var t = e.width, i = e.height, o = e.sizeRestrictions, s = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, n = { width: Math.max(o.minWidth, Math.min(o.maxWidth, t)), height: Math.max(o.minHeight, Math.min(o.maxHeight, i)) };
  function a(l, u) {
    return u === void 0 && (u = !1), l.reduce((function(c, d) {
      return At({ size: d, aspectRatio: s, sizeRestrictions: o, ignoreMinimum: u }) && (!c || St(d, { width: t, height: i }) < St(c, { width: t, height: i })) ? d : c;
    }), null);
  }
  var h = [];
  s && [s.minimum, s.maximum].forEach((function(l) {
    l && h.push({ width: n.width, height: n.width / l, correctRatio: !0 }, { width: n.height * l, height: n.height, correctRatio: !0 });
  })), At({ size: n, aspectRatio: s, sizeRestrictions: o }) && h.push(n);
  var r = a(h) || a(h, !0);
  return r && { width: r.width, height: r.height };
}
function Ze(e) {
  var t = e.event, i = e.coordinates, o = e.positionRestrictions, s = o === void 0 ? {} : o, n = k(i, t.directions);
  return k(n, me(n, s));
}
function Vi(e) {
  var t = e.coordinates, i = e.transform, o = e.imageSize, s = e.sizeRestrictions, n = e.positionRestrictions, a = e.aspectRatio, h = e.visibleArea, r = function(u, c) {
    return Ze({ coordinates: u, positionRestrictions: n, event: new Ke({ left: c.left - u.left, top: c.top - u.top }) });
  }, l = p({}, t);
  return (Array.isArray(i) ? i : [i]).forEach((function(u) {
    var c = {};
    D((c = typeof u == "function" ? u({ coordinates: l, imageSize: o, visibleArea: h }) : u).width) && D(c.height) || (l = (function(d, m) {
      var w = p(p(p({}, d), te({ width: m.width, height: m.height, sizeRestrictions: s, aspectRatio: a })), { left: 0, top: 0 });
      return r(w, { left: d.left, top: d.top });
    })(l, p(p({}, l), c))), D(c.left) && D(c.top) || (l = r(l, p(p({}, l), c)));
  })), l;
}
function Ni(e) {
  e.event;
  var t = e.getAreaRestrictions, i = e.boundaries, o = e.coordinates, s = e.visibleArea;
  e.aspectRatio;
  var n = e.stencilSize, a = e.sizeRestrictions, h = e.positionRestrictions;
  e.stencilReference;
  var r, l, u, c = p({}, o), d = p({}, s), m = p({}, n);
  r = R(m), l = R(c), u === void 0 && (u = 1e-3), (r === 0 || l === 0 ? Math.abs(l - r) < u : Math.abs(l / r) < 1 + u && Math.abs(l / r) > 1 - u) || (c = p(p({}, c), te({ sizeRestrictions: a, width: c.width, height: c.height, aspectRatio: { minimum: R(m), maximum: R(m) } })));
  var w = Le(d = F(d, c.width * i.width / (d.width * m.width)), t({ visibleArea: d, type: "resize" }));
  return w !== 1 && (d = F(d, w), c = F(c, w)), d = O(d = k(d, de(L(c), L(d))), t({ visibleArea: d, type: "move" })), { coordinates: c = O(c, Oe(q(d), h)), visibleArea: d };
}
function Xi(e) {
  var t = e.event, i = e.getAreaRestrictions, o = e.boundaries, s = e.coordinates, n = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var a = e.positionRestrictions;
  e.stencilReference;
  var h = p({}, s), r = p({}, n);
  if (s && n && t.type !== "manipulateImage") {
    var l = { width: 0, height: 0 };
    r.width, o.width, R(o) > R(h) ? (l.height = 0.8 * o.height, l.width = l.height * R(h)) : (l.width = 0.8 * o.width, l.height = l.width * R(h));
    var u = Le(r = F(r, h.width * o.width / (r.width * l.width)), i({ visibleArea: r, type: "resize" }));
    r = F(r, u), u !== 1 && (l.height /= u, l.width /= u), r = O(r = k(r, de(L(h), L(r))), i({ visibleArea: r, type: "move" })), h = O(h, Oe(q(r), a));
  }
  return { coordinates: h, visibleArea: r };
}
function Yi(e) {
  var t = e.event, i = e.coordinates, o = e.visibleArea, s = e.getAreaRestrictions, n = p({}, o), a = p({}, i);
  if (t.type === "setCoordinates") {
    var h = Math.max(0, a.width - n.width), r = Math.max(0, a.height - n.height);
    h > r ? n = F(n, Math.min(a.width / n.width, fe(n, s({ visibleArea: n, type: "resize" })))) : r > h && (n = F(n, Math.min(a.height / n.height, fe(n, s({ visibleArea: n, type: "resize" }))))), n = O(n = k(n, Pe(me(a, q(n)))), s({ visibleArea: n, type: "move" }));
  }
  return { visibleArea: n, coordinates: a };
}
function Gi(e) {
  var t = e.imageSize, i = e.visibleArea, o = e.coordinates, s = i || t;
  return { left: (i ? i.left : 0) + s.width / 2 - o.width / 2, top: (i ? i.top : 0) + s.height / 2 - o.height / 2 };
}
function Zi(e) {
  var t = e.imageSize, i = e.visibleArea, o = e.aspectRatio, s = e.sizeRestrictions, n = i || t, a = Math.min(o.maximum || 1 / 0, Math.max(o.minimum || 0, R(n))), h = n.width < n.height ? { width: 0.8 * n.width, height: 0.8 * n.width / a } : { height: 0.8 * n.height, width: 0.8 * n.height * a };
  return te(p(p({}, h), { aspectRatio: o, sizeRestrictions: s }));
}
function qi(e) {
  var t, i, o = e.imageSize, s = e.visibleArea, n = e.boundaries, a = e.aspectRatio, h = e.sizeRestrictions, r = e.stencilSize, l = s || o;
  return R(l) > R(n) ? i = (t = r.height * l.height / n.height) * R(r) : t = (i = r.width * l.width / n.width) / R(r), te({ width: i, height: t, aspectRatio: a, sizeRestrictions: h });
}
function Ki(e) {
  var t = e.getAreaRestrictions, i = e.coordinates, o = e.imageSize, s = R(e.boundaries);
  if (i) {
    var n = { height: Math.max(i.height, o.height), width: Math.max(i.width, o.width) }, a = Ht({ width: R(n) > s ? n.width : n.height * s, height: R(n) > s ? n.width / s : n.height }, Ge(t())), h = { left: i.left + i.width / 2 - a.width / 2, top: i.top + i.height / 2 - a.height / 2, width: a.width, height: a.height }, r = ye(i, q(p({ left: 0, top: 0 }, o))), l = {};
    return !r.left && !r.right && h.width <= o.width && (l.left = 0, l.right = o.width), !r.top && !r.bottom && h.height <= o.height && (l.top = 0, l.bottom = o.height), O(h, l);
  }
  var u = R(o);
  return a = { height: u > s ? o.height : o.width / s, width: u > s ? o.height * s : o.width }, { left: o.width / 2 - a.width / 2, top: o.height / 2 - a.height / 2, width: a.width, height: a.height };
}
function Ce(e, t) {
  return kt(e, q(t));
}
function Qi(e) {
  var t = e.event, i = e.coordinates, o = e.visibleArea, s = e.sizeRestrictions, n = e.getAreaRestrictions, a = e.positionRestrictions, h = e.adjustStencil, r = t.scale, l = t.move, u = p({}, o), c = p({}, i), d = 1, m = 1, w = r.factor && Math.abs(r.factor - 1) > 1e-3;
  u = k(u, { left: l.left || 0, top: l.top || 0 });
  var b = { stencil: { minimum: Math.max(s.minWidth ? s.minWidth / c.width : 0, s.minHeight ? s.minHeight / c.height : 0), maximum: Math.min(s.maxWidth ? s.maxWidth / c.width : 1 / 0, s.maxHeight ? s.maxHeight / c.height : 1 / 0, fe(c, a)) }, area: { maximum: fe(u, n({ visibleArea: u, type: "resize" })) } };
  r.factor && w && (r.factor < 1 ? (m = Math.max(r.factor, b.stencil.minimum)) > 1 && (m = 1) : r.factor > 1 && (m = Math.min(r.factor, Math.min(b.area.maximum, b.stencil.maximum))) < 1 && (m = 1)), m && (u = F(u, m, r.center));
  var S = i.left - o.left, H = o.width + o.left - (i.width + i.left), K = i.top - o.top, Q = o.height + o.top - (i.height + i.top);
  return u = O(u = k(u, me(u, { left: a.left !== void 0 ? a.left - S * m : void 0, top: a.top !== void 0 ? a.top - K * m : void 0, bottom: a.bottom !== void 0 ? a.bottom + Q * m : void 0, right: a.right !== void 0 ? a.right + H * m : void 0 })), n({ visibleArea: u, type: "move" })), c.width = c.width * m, c.height = c.height * m, c.left = u.left + S * m, c.top = u.top + K * m, c = O(c, Oe(q(u), a)), r.factor && w && h && (r.factor > 1 ? d = Math.min(b.area.maximum, r.factor) / m : r.factor < 1 && (d = Math.max(c.height / u.height, c.width / u.width, r.factor / m)), d !== 1 && (u = k(u = O(u = F(u, d, r.factor > 1 ? r.center : L(c)), n({ visibleArea: u, type: "move" })), Pe(me(c, q(u)))))), { coordinates: c, visibleArea: u };
}
function Ji(e) {
  var t = e.aspectRatio, i = e.getAreaRestrictions, o = e.coordinates, s = e.visibleArea, n = e.sizeRestrictions, a = e.positionRestrictions, h = e.imageSize, r = e.previousImageSize, l = e.angle, u = p({}, o), c = p({}, s), d = ne(L(p({ left: 0, top: 0 }, r)), l);
  return (u = p(p({}, te({ sizeRestrictions: n, aspectRatio: t, width: u.width, height: u.height })), ne(L(u), l))).left -= d.left - h.width / 2 + u.width / 2, u.top -= d.top - h.height / 2 + u.height / 2, c = F(c, Le(c, i({ visibleArea: c, type: "resize" }))), { coordinates: u = O(u, a), visibleArea: c = O(c = k(c, de(L(u), L(o))), i({ visibleArea: c, type: "move" })) };
}
function en(e) {
  var t = e.flip, i = e.previousFlip, o = e.rotate, s = e.getAreaRestrictions, n = e.coordinates, a = e.visibleArea, h = e.imageSize, r = p({}, n), l = p({}, a), u = i.horizontal !== t.horizontal, c = i.vertical !== t.vertical;
  if (u || c) {
    var d = ne({ left: h.width / 2, top: h.height / 2 }, -o), m = ne(L(r), -o), w = ne({ left: u ? d.left - (m.left - d.left) : m.left, top: c ? d.top - (m.top - d.top) : m.top }, o);
    r = k(r, de(w, L(r))), m = ne(L(l), -o), l = O(l = k(l, de(w = ne({ left: u ? d.left - (m.left - d.left) : m.left, top: c ? d.top - (m.top - d.top) : m.top }, o), L(l))), s({ visibleArea: l, type: "move" }));
  }
  return { coordinates: r, visibleArea: l };
}
function Mt(e) {
  var t = e.directions, i = e.coordinates, o = e.positionRestrictions, s = o === void 0 ? {} : o, n = e.sizeRestrictions, a = e.preserveRatio, h = e.compensate, r = p({}, t), l = G(i, r).width, u = G(i, r).height;
  l < 0 && (r.left < 0 && r.right < 0 ? (r.left = -(i.width - n.minWidth) / (r.left / r.right), r.right = -(i.width - n.minWidth) / (r.right / r.left)) : r.left < 0 ? r.left = -(i.width - n.minWidth) : r.right < 0 && (r.right = -(i.width - n.minWidth))), u < 0 && (r.top < 0 && r.bottom < 0 ? (r.top = -(i.height - n.minHeight) / (r.top / r.bottom), r.bottom = -(i.height - n.minHeight) / (r.bottom / r.top)) : r.top < 0 ? r.top = -(i.height - n.minHeight) : r.bottom < 0 && (r.bottom = -(i.height - n.minHeight)));
  var c = ye(G(i, r), s);
  h && (c.left && c.left > 0 && c.right === 0 ? (r.right += c.left, r.left -= c.left) : c.right && c.right > 0 && c.left === 0 && (r.left += c.right, r.right -= c.right), c.top && c.top > 0 && c.bottom === 0 ? (r.bottom += c.top, r.top -= c.top) : c.bottom && c.bottom > 0 && c.top === 0 && (r.top += c.bottom, r.bottom -= c.bottom), c = ye(G(i, r), s));
  var d = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (Z.forEach((function(b) {
    var S = c[b];
    S && r[b] && (d[b] = Math.max(0, 1 - S / r[b]));
  })), a) {
    var m = Math.min.apply(null, Z.map((function(b) {
      return d[b];
    })));
    m !== 1 / 0 && Z.forEach((function(b) {
      r[b] *= m;
    }));
  } else Z.forEach((function(b) {
    d[b] !== 1 / 0 && (r[b] *= d[b]);
  }));
  if (l = G(i, r).width, u = G(i, r).height, r.right + r.left && (l > n.maxWidth ? d.width = (n.maxWidth - i.width) / (r.right + r.left) : l < n.minWidth && (d.width = (n.minWidth - i.width) / (r.right + r.left))), r.bottom + r.top && (u > n.maxHeight ? d.height = (n.maxHeight - i.height) / (r.bottom + r.top) : u < n.minHeight && (d.height = (n.minHeight - i.height) / (r.bottom + r.top))), a) {
    var w = Math.min(d.width, d.height);
    w !== 1 / 0 && Z.forEach((function(b) {
      r[b] *= w;
    }));
  } else d.width !== 1 / 0 && $i.forEach((function(b) {
    r[b] *= d.width;
  })), d.height !== 1 / 0 && Bi.forEach((function(b) {
    r[b] *= d.height;
  }));
  return r;
}
function Te(e, t, i) {
  return t == 0 && i == 0 ? e / 2 : t == 0 ? 0 : i == 0 ? e : e * Math.abs(t / (t + i));
}
var tn = Y("vue-simple-handler"), nn = Y("vue-simple-handler-wrapper"), Je = { name: "SimpleHandler", components: { HandlerWrapper: Lt }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, t = (j(e = {}, this.horizontalPosition, !!this.horizontalPosition), j(e, this.verticalPosition, !!this.verticalPosition), j(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), j(e, "hover", this.hover), e);
  return { default: I(tn(t), this.defaultClass, this.hover && this.hoverClass), wrapper: I(nn(t), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
Je.render = function(e, t, i, o, s, n) {
  var a = _("HandlerWrapper");
  return v(), E(a, { class: n.classes.wrapper, "vertical-position": i.verticalPosition, "horizontal-position": i.horizontalPosition, disabled: i.disabled, onDrag: n.onDrag, onDragEnd: n.onDragEnd, onEnter: n.onEnter, onLeave: n.onLeave }, { default: B((function() {
    return [M("div", { class: n.classes.default }, null, 2)];
  })), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var on = Y("vue-simple-line"), sn = Y("vue-simple-line-wrapper"), et = { name: "SimpleLine", components: { LineWrapper: Ot }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: I(on(j({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: I(sn(j({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
et.render = function(e, t, i, o, s, n) {
  var a = _("LineWrapper");
  return v(), E(a, { class: n.classes.wrapper, position: i.position, disabled: i.disabled, onDrag: n.onDrag, onDragEnd: n.onDragEnd, onEnter: n.onEnter, onLeave: n.onLeave }, { default: B((function() {
    return [M("div", { class: n.classes.root }, null, 2)];
  })), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var _e = Y("vue-bounding-box"), rn = ["east", "west", null], an = ["south", "north", null], $t = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return Je;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return et;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return rn.forEach((function(t) {
    an.forEach((function(i) {
      if (t !== i) {
        var o = Wt(t, i), s = o.name, n = o.classname;
        e.push({ name: s, classname: n, verticalDirection: i, horizontalDirection: t });
      }
    }));
  })), { points: e };
}, computed: { style: function() {
  var e = {};
  return this.width && this.height && (e.width = "".concat(this.width, "px"), e.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), e;
}, classes: function() {
  var e = this.handlersClasses, t = this.handlersWrappersClasses, i = this.linesClasses, o = this.linesWrappersClasses;
  return { root: _e(), handlers: e, handlersWrappers: t, lines: i, linesWrappers: o };
}, lineNodes: function() {
  var e = this, t = [];
  return this.points.forEach((function(i) {
    i.horizontalDirection && i.verticalDirection || !e.lines[i.name] || t.push({ name: i.name, component: e.linesComponent, class: I(e.classes.lines.default, e.classes.lines[i.name], !e.resizable && e.classes.lines.disabled), wrapperClass: I(e.classes.linesWrappers.default, e.classes.linesWrappers[i.name], !e.resizable && e.classes.linesWrappers.disabled), hoverClass: e.classes.lines.hover, verticalDirection: i.verticalDirection, horizontalDirection: i.horizontalDirection, disabled: !e.resizable });
  })), t;
}, handlerNodes: function() {
  var e = this, t = [], i = this.width, o = this.height;
  return this.points.forEach((function(s) {
    if (e.handlers[s.name]) {
      var n = { name: s.name, component: e.handlersComponent, class: I(e.classes.handlers.default, e.classes.handlers[s.name]), wrapperClass: I(e.classes.handlersWrappers.default, e.classes.handlersWrappers[s.name]), hoverClass: e.classes.handlers.hover, verticalDirection: s.verticalDirection, horizontalDirection: s.horizontalDirection, disabled: !e.resizable };
      if (i && o) {
        var a = s.horizontalDirection, h = s.verticalDirection, r = a === "east" ? i : a === "west" ? 0 : i / 2, l = h === "south" ? o : h === "north" ? 0 : o / 2;
        n.wrapperClass = _e("handler"), n.wrapperStyle = { transform: "translate(".concat(r, "px, ").concat(l, "px)") }, e.transitions && e.transitions.enabled && (n.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else n.wrapperClass = _e("handler", j({}, s.classname, !0));
      t.push(n);
    }
  })), t;
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [];
}, methods: { onEnd: function() {
  this.$emit("resize-end");
}, onHandlerDrag: function(e, t, i) {
  var o, s = e.shift(), n = s.left, a = s.top, h = { left: 0, right: 0, top: 0, bottom: 0 };
  t === "west" ? h.left -= n : t === "east" && (h.right += n), i === "north" ? h.top -= a : i === "south" && (h.bottom += a), !i && t ? o = "width" : i && !t && (o = "height"), this.resizable && this.$emit("resize", new Hi(h, { allowedDirections: { left: t === "west" || !t, right: t === "east" || !t, bottom: i === "south" || !i, top: i === "north" || !i }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: o }));
} }, emits: ["resize", "resize-end"] };
$t.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "box", class: n.classes.root, style: n.style }, [he(e.$slots, "default"), M("div", null, [(v(!0), E(be, null, lt(n.lineNodes, (function(a) {
    return v(), E(De(a.component), { key: a.name, "default-class": a.class, "hover-class": a.hoverClass, "wrapper-class": a.wrapperClass, position: a.name, disabled: a.disabled, onDrag: function(h) {
      return n.onHandlerDrag(h, a.horizontalDirection, a.verticalDirection);
    }, onDragEnd: t[1] || (t[1] = function(h) {
      return n.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  })), 128))]), (v(!0), E(be, null, lt(n.handlerNodes, (function(a) {
    return v(), E("div", { key: a.name, style: a.wrapperStyle, class: a.wrapperClass }, [(v(), E(De(a.component), { "default-class": a.class, "hover-class": a.hoverClass, "wrapper-class": a.wrapperClass, "horizontal-position": a.horizontalDirection, "vertical-position": a.verticalDirection, disabled: a.disabled, onDrag: function(h) {
      return n.onHandlerDrag(h, a.horizontalDirection, a.verticalDirection);
    }, onDragEnd: t[2] || (t[2] = function(h) {
      return n.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  })), 128))], 6);
};
var hn = Y("vue-draggable-area"), Bt = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: hn() };
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [], this.touchStarted = !1;
}, methods: { onTouchStart: function(e) {
  if (e.cancelable) {
    var t = this.movable && e.touches.length === 1;
    t && (this.touches = ae(e.touches)), (this.touchStarted || t) && (e.preventDefault(), e.stopPropagation());
  }
}, onTouchEnd: function() {
  this.touchStarted = !1, this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(e, e.touches), e.preventDefault(), e.stopPropagation()) : Pt({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: e.touches[0].clientX, y: e.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), this.touchStarted = !0));
}, onMouseDown: function(e) {
  if (this.movable && e.button === 0) {
    var t = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [t], this.initAnchor(t), e.stopPropagation();
  }
}, onMouseMove: function(e) {
  this.touches.length && (this.processMove(e, [{ fake: !0, clientX: e.clientX, clientY: e.clientY }]), e.preventDefault && e.cancelable && e.preventDefault(), e.stopPropagation());
}, onMouseUp: function() {
  this.processEnd();
}, initAnchor: function(e) {
  var t = this.$refs.container.getBoundingClientRect(), i = t.left, o = t.top;
  this.anchor = { x: e.clientX - i, y: e.clientY - o };
}, processMove: function(e, t) {
  var i = ae(t);
  if (this.touches.length) {
    var o = this.$refs.container.getBoundingClientRect(), s = o.left, n = o.top;
    this.touches.length === 1 && i.length === 1 && this.$emit("move", new Ke({ left: i[0].clientX - (s + this.anchor.x), top: i[0].clientY - (n + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
Bt.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "container", onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 544);
};
function Fe(e) {
  var t, i;
  return { rotate: e.rotate || 0, flip: { horizontal: ((t = e?.flip) === null || t === void 0 ? void 0 : t.horizontal) || !1, vertical: ((i = e?.flip) === null || i === void 0 ? void 0 : i.vertical) || !1 } };
}
function ln(e) {
  return new Promise((function(t, i) {
    try {
      if (e) if (/^data:/i.test(e)) t((function(r) {
        r = r.replace(/^data:([^;]+);base64,/gim, "");
        for (var l = atob(r), u = l.length, c = new ArrayBuffer(u), d = new Uint8Array(c), m = 0; m < u; m++) d[m] = l.charCodeAt(m);
        return c;
      })(e));
      else if (/^blob:/i.test(e)) {
        var o = new FileReader();
        o.onload = function(r) {
          t(r.target.result);
        }, n = e, a = function(r) {
          o.readAsArrayBuffer(r);
        }, (h = new XMLHttpRequest()).open("GET", n, !0), h.responseType = "blob", h.onload = function() {
          this.status != 200 && this.status !== 0 || a(this.response);
        }, h.send();
      } else {
        var s = new XMLHttpRequest();
        s.onreadystatechange = function() {
          s.readyState === 4 && (s.status === 200 || s.status === 0 ? t(s.response) : i("Warning: could not load an image to parse its orientation"), s = null);
        }, s.onprogress = function() {
          s.getResponseHeader("content-type") !== "image/jpeg" && s.abort();
        }, s.withCredentials = !1, s.open("GET", e, !0), s.responseType = "arraybuffer", s.send(null);
      }
      else i("Error: the image is empty");
    } catch (r) {
      i(r);
    }
    var n, a, h;
  }));
}
function jt(e) {
  var t = e.rotate, i = e.flip, o = e.scaleX, s = e.scaleY, n = "";
  return n += " rotate(" + t + "deg) ", n += " scaleX(" + o * (i.horizontal ? -1 : 1) + ") ", n += " scaleY(" + s * (i.vertical ? -1 : 1) + ") ";
}
function cn(e) {
  try {
    var t, i = new DataView(e), o = void 0, s = void 0, n = void 0, a = void 0;
    if (i.getUint8(0) === 255 && i.getUint8(1) === 216) for (var h = i.byteLength, r = 2; r + 1 < h; ) {
      if (i.getUint8(r) === 255 && i.getUint8(r + 1) === 225) {
        n = r;
        break;
      }
      r++;
    }
    if (n && (o = n + 10, (function(m, w, b) {
      var S, H = "";
      for (S = w, b += w; S < b; S++) H += String.fromCharCode(m.getUint8(S));
      return H;
    })(i, n + 4, 4) === "Exif")) {
      var l = i.getUint16(o);
      if (((s = l === 18761) || l === 19789) && i.getUint16(o + 2, s) === 42) {
        var u = i.getUint32(o + 4, s);
        u >= 8 && (a = o + u);
      }
    }
    if (a) {
      for (var c = i.getUint16(a, s), d = 0; d < c; d++)
        if (r = a + 12 * d + 2, i.getUint16(r, s) === 274) {
          r += 8, t = i.getUint16(r, s), i.setUint16(r, 1, s);
          break;
        }
    }
    return t;
  } catch {
    return null;
  }
}
function xt(e, t) {
  var i = t.getBoundingClientRect(), o = i.left, s = i.top, n = { left: 0, top: 0 }, a = 0;
  return e.forEach((function(h) {
    n.left += (h.clientX - o) / e.length, n.top += (h.clientY - s) / e.length;
  })), e.forEach((function(h) {
    a += Pt({ x: n.left, y: n.top }, { x: h.clientX - o, y: h.clientY - s });
  })), { centerMass: n, spread: a, count: e.length };
}
var _t = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = Xe(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, t) {
  if (this.touches.length) {
    if (this.touches.length === 1 && t.length === 1) this.$emit("move", new we({ left: this.touches[0].clientX - t[0].clientX, top: this.touches[0].clientY - t[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var i = xt(t, this.$refs.container), o = this.oldGeometricProperties;
      o.count === i.count && o.count > 1 && this.$emit("resize", new we({ left: o.centerMass.left - i.centerMass.left, top: o.centerMass.top - i.centerMass.top }, { factor: o.spread / i.spread, center: i.centerMass })), this.oldGeometricProperties = i;
    }
    this.touches = t;
  }
}, processEnd: function() {
  this.transforming && (this.transforming = !1, this.$emit("transform-end"));
}, processStart: function() {
  this.transforming = !0, this.debouncedProcessEnd.clear();
}, processEvent: function(e) {
  return this.eventsFilter ? this.eventsFilter(e, this.transforming) !== !1 : (e.preventDefault(), e.stopPropagation(), !0);
}, onTouchStart: function(e) {
  if (e.cancelable && (this.touchMove || this.touchResize && e.touches.length > 1) && this.processEvent(e)) {
    var t = this.$refs.container, i = t.getBoundingClientRect(), o = i.left, s = i.top, n = i.bottom, a = i.right;
    this.touches = ae(e.touches).filter((function(h) {
      return h.clientX > o && h.clientX < a && h.clientY > s && h.clientY < n;
    })), this.oldGeometricProperties = xt(this.touches, t);
  }
}, onTouchEnd: function(e) {
  e.touches.length === 0 && (this.touches = [], this.processEnd());
}, onTouchMove: function(e) {
  var t = this;
  if (this.touches.length) {
    var i = ae(e.touches).filter((function(o) {
      return !o.identifier || t.touches.find((function(s) {
        return s.identifier === o.identifier;
      }));
    }));
    this.processEvent(e) && (this.processMove(e, i), this.processStart());
  }
}, onMouseDown: function(e) {
  if (this.mouseMove && "buttons" in e && e.buttons === 1 && this.processEvent(e)) {
    var t = { fake: !0, clientX: e.clientX, clientY: e.clientY };
    this.touches = [t], this.processStart();
  }
}, onMouseMove: function(e) {
  this.touches.length && this.processEvent(e) && this.processMove(e, [{ clientX: e.clientX, clientY: e.clientY }]);
}, onMouseUp: function() {
  this.touches = [], this.processEnd();
}, onWheel: function(e) {
  if (this.wheelResize && this.processEvent(e)) {
    var t = this.$refs.container.getBoundingClientRect(), i = t.left, o = t.top, s = 1 + this.wheelResize.ratio * (a = e.deltaY || e.detail || e.wheelDelta, (h = +a) == 0 || Dt(h) ? h : h > 0 ? 1 : -1), n = { left: e.clientX - i, top: e.clientY - o };
    this.$emit("resize", new we({}, { factor: s, center: n })), this.touches.length || this.debouncedProcessEnd();
  }
  var a, h;
} }, emits: ["resize", "move", "transform-end"] };
_t.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "container", onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }), onWheel: t[3] || (t[3] = function() {
    return n.onWheel && n.onWheel.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 544);
};
var qe = { components: { TransformableImage: _t }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
qe.render = function(e, t, i, o, s, n) {
  var a = _("transformable-image");
  return v(), E(a, { "touch-move": i.touchMove, "touch-resize": i.touchResize, "mouse-move": i.mouseMove, "wheel-resize": i.wheelResize, onMove: t[1] || (t[1] = function(h) {
    return e.$emit("move", h);
  }), onResize: t[2] || (t[2] = function(h) {
    return e.$emit("resize", h);
  }) }, { default: B((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var We = Y("vue-preview"), Ft = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: We({ fill: this.fill }), wrapper: We("wrapper"), imageWrapper: We("image-wrapper"), image: I(We("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, t = z(z({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), i = this.imageSize.width, o = this.imageSize.height, s = Ut({ width: i, height: o }, t.rotate), n = { width: "".concat(i, "px"), height: "".concat(o, "px"), left: "0px", top: "0px" }, a = { rotate: { left: (i - s.width) * t.scaleX / 2, top: (o - s.height) * t.scaleY / 2 }, scale: { left: (1 - t.scaleX) * i / 2, top: (1 - t.scaleY) * o / 2 } };
    return n.transform = `translate(
				`.concat(-this.coordinates.left / e - a.rotate.left - a.scale.left, "px,").concat(-this.coordinates.top / e - a.rotate.top - a.scale.top, "px) ") + jt(t), this.transitions && this.transitions.enabled && (n.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), n;
  }
  return {};
}, size: function() {
  return { width: this.width || this.calculatedSize.width, height: this.height || this.calculatedSize.height };
}, imageSize: function() {
  return { width: this.image.width || this.calculatedImageSize.width, height: this.image.height || this.calculatedImageSize.height };
} }, watch: { image: function(e) {
  (e.width || e.height) && this.onChangeImage();
} }, mounted: function() {
  var e = this;
  this.onChangeImage(), this.$refs.image.addEventListener("load", (function() {
    e.refreshImage();
  })), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh);
}, methods: { refreshImage: function() {
  var e = this.$refs.image;
  this.calculatedImageSize.height = e.naturalHeight, this.calculatedImageSize.width = e.naturalWidth;
}, refresh: function() {
  var e = this.$refs.root;
  this.width || (this.calculatedSize.width = e.clientWidth), this.height || (this.calculatedSize.height = e.clientHeight);
}, onChangeImage: function() {
  var e = this.$refs.image;
  e && e.complete && this.refreshImage(), this.refresh();
} } };
Ft.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "root", class: n.classes.root, style: n.style }, [M("div", { ref: "wrapper", class: n.classes.wrapper, style: n.wrapperStyle }, [Et(M("img", { ref: "image", src: i.image && i.image.src, class: n.classes.image, style: n.imageStyle }, null, 14, ["src"]), [[Ct, i.image && i.image.src]])], 6)], 6);
};
var Vt = { components: { Preview: Ft }, inheritAttrs: !1 };
Vt.render = function(e, t, i, o, s, n) {
  var a = _("preview");
  return v(), E(a, Tt(e.$attrs, { fill: !0 }), null, 16);
};
var Ve = Y("vue-rectangle-stencil"), tt = { name: "RectangleStencil", components: { StencilPreview: Vt, BoundingBox: $t, DraggableArea: Bt }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return Je;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return et;
} }, aspectRatio: { type: [Number, String] }, minAspectRatio: { type: [Number, String] }, maxAspectRatio: { type: [Number, String] }, movable: { type: Boolean, default: !0 }, resizable: { type: Boolean, default: !0 }, transitions: { type: Object }, movingClass: { type: String }, resizingClass: { type: String }, previewClass: { type: String }, boundingBoxClass: { type: String }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} } }, data: function() {
  return { moving: !1, resizing: !1 };
}, computed: { classes: function() {
  return { stencil: I(Ve({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: I(Ve("preview"), this.previewClass), boundingBox: I(Ve("bounding-box"), this.boundingBoxClass) };
}, style: function() {
  var e = this.stencilCoordinates, t = e.height, i = e.width, o = e.left, s = e.top, n = { width: "".concat(i, "px"), height: "".concat(t, "px"), transform: "translate(".concat(o, "px, ").concat(s, "px)") };
  return this.transitions && this.transitions.enabled && (n.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), n;
} }, methods: { onMove: function(e) {
  this.$emit("move", e), this.moving = !0;
}, onMoveEnd: function() {
  this.$emit("move-end"), this.moving = !1;
}, onResize: function(e) {
  this.$emit("resize", e), this.resizing = !0;
}, onResizeEnd: function() {
  this.$emit("resize-end"), this.resizing = !1;
}, aspectRatios: function() {
  return { minimum: this.aspectRatio || this.minAspectRatio, maximum: this.aspectRatio || this.maxAspectRatio };
} }, emits: ["resize", "resize-end", "move", "move-end"] };
tt.render = function(e, t, i, o, s, n) {
  var a = _("stencil-preview"), h = _("draggable-area"), r = _("bounding-box");
  return v(), E("div", { class: n.classes.stencil, style: n.style }, [M(r, { width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, transitions: i.transitions, class: n.classes.boundingBox, handlers: i.handlers, "handlers-component": i.handlersComponent, "handlers-classes": i.handlersClasses, "handlers-wrappers-classes": i.handlersWrappersClasses, lines: i.lines, "lines-component": i.linesComponent, "lines-classes": i.linesClasses, "lines-wrappers-classes": i.linesWrappersClasses, resizable: i.resizable, onResize: n.onResize, onResizeEnd: n.onResizeEnd }, { default: B((function() {
    return [M(h, { movable: i.movable, onMove: n.onMove, onMoveEnd: n.onMoveEnd }, { default: B((function() {
      return [M(a, { image: i.image, coordinates: i.coordinates, width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, class: n.classes.preview, transitions: i.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    })), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  })), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var un = ["transitions"], ee = Y("vue-advanced-cropper"), Nt = { name: "Cropper", components: { BackgroundWrapper: qe }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return tt;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return qe;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return _i.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var t = e.event, i = e.coordinates, o = e.aspectRatio, s = e.positionRestrictions, n = e.sizeRestrictions, a = p(p({}, i), { right: i.left + i.width, bottom: i.top + i.height }), h = t.params || {}, r = p({}, t.directions), l = h.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  n.widthFrozen && (r.left = 0, r.right = 0), n.heightFrozen && (r.top = 0, r.bottom = 0), Z.forEach((function(V) {
    l[V] || (r[V] = 0);
  }));
  var u = G(a, r = Mt({ coordinates: a, directions: r, sizeRestrictions: n, positionRestrictions: s })).width, c = G(a, r).height, d = h.preserveRatio ? R(a) : je(u / c, o);
  if (d) {
    var m = h.respectDirection;
    if (m || (m = a.width >= a.height || d === 1 ? "width" : "height"), m === "width") {
      var w = u / d - a.height;
      if (l.top && l.bottom) {
        var b = r.top, S = r.bottom;
        r.bottom = Te(w, S, b), r.top = Te(w, b, S);
      } else l.bottom ? r.bottom = w : l.top ? r.top = w : l.right ? r.right = 0 : l.left && (r.left = 0);
    } else if (m === "height") {
      var H = a.width - c * d;
      if (l.left && l.right) {
        var K = r.left, Q = r.right;
        r.left = -Te(H, K, Q), r.right = -Te(H, Q, K);
      } else l.left ? r.left = -H : l.right ? r.right = -H : l.top ? r.top = 0 : l.bottom && (r.bottom = 0);
    }
    r = Mt({ directions: r, coordinates: a, sizeRestrictions: n, positionRestrictions: s, preserveRatio: !0, compensate: h.compensate });
  }
  return u = G(a, r).width, c = G(a, r).height, (d = h.preserveRatio ? R(a) : je(u / c, o)) && Math.abs(d - u / c) > 1e-3 && Z.forEach((function(V) {
    l[V] || (r[V] = 0);
  })), Ze({ event: new Ke({ left: -r.left, top: -r.top }), coordinates: { width: i.width + r.right + r.left, height: i.height + r.top + r.bottom, left: i.left, top: i.top }, positionRestrictions: s });
} }, moveAlgorithm: { type: Function, default: Ze }, initStretcher: { type: Function, default: function(e) {
  var t = e.stretcher, i = e.imageSize, o = R(i);
  t.style.width = i.width + "px", t.style.height = t.clientWidth / o + "px", t.style.width = t.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.coordinates, o = e.aspectRatio, s = e.sizeRestrictions, n = e.positionRestrictions, a = p(p({}, i), te({ width: i.width, height: i.height, aspectRatio: o, sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minHeight: Math.min(t.height, s.minHeight), minWidth: Math.min(t.width, s.minWidth) } }));
  return a = O(a = k(a, de(L(i), L(a))), Oe(q(t), n));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.boundaries, o = e.getAreaRestrictions, s = e.coordinates, n = p({}, t);
  n.height = n.width / R(i), n.top += (t.height - n.height) / 2, (s.height - n.height > 0 || s.width - n.width > 0) && (n = F(n, Math.max(s.height / n.height, s.width / n.width)));
  var a = Pe(me(s, q(n = F(n, Le(n, o({ visibleArea: n, type: "resize" }))))));
  return n.width < s.width && (a.left = 0), n.height < s.height && (a.top = 0), n = O(n = k(n, a), o({ visibleArea: n, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.boundaries, o = e.imageSize, s = e.imageRestriction, n = e.type, a = {};
  return s === "fill-area" ? a = { left: 0, top: 0, right: o.width, bottom: o.height } : s === "fit-area" && (R(i) > R(o) ? (a = { top: 0, bottom: o.height }, t && n === "move" && (t.width > o.width ? (a.left = -(t.width - o.width) / 2, a.right = o.width - a.left) : (a.left = 0, a.right = o.width))) : (a = { left: 0, right: o.width }, t && n === "move" && (t.height > o.height ? (a.top = -(t.height - o.height) / 2, a.bottom = o.height - a.top) : (a.top = 0, a.bottom = o.height)))), a;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var t = e.imageSize, i = {};
  return e.imageRestriction !== "none" && (i = { left: 0, top: 0, right: t.width, bottom: t.height }), i;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: z({}, zt) };
}, computed: { image: function() {
  return { src: this.imageAttributes.src, width: this.imageAttributes.width, height: this.imageAttributes.height, transforms: this.imageTransforms };
}, imageTransforms: function() {
  return { rotate: this.appliedImageTransforms.rotate, flip: { horizontal: this.appliedImageTransforms.flip.horizontal, vertical: this.appliedImageTransforms.flip.vertical }, translateX: this.visibleArea ? this.visibleArea.left / this.coefficient : 0, translateY: this.visibleArea ? this.visibleArea.top / this.coefficient : 0, scaleX: 1 / this.coefficient, scaleY: 1 / this.coefficient };
}, imageSize: function() {
  var e = (function(t) {
    return t * Math.PI / 180;
  })(this.imageTransforms.rotate);
  return { width: Math.abs(this.imageAttributes.width * Math.cos(e)) + Math.abs(this.imageAttributes.height * Math.sin(e)), height: Math.abs(this.imageAttributes.width * Math.sin(e)) + Math.abs(this.imageAttributes.height * Math.cos(e)) };
}, initialized: function() {
  return !!(this.visibleArea && this.imageLoaded);
}, settings: function() {
  var e = Ye(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: Ye(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: D(this.minWidth) ? 0 : Ee(this.minWidth), minHeight: D(this.minHeight) ? 0 : Ee(this.minHeight), maxWidth: D(this.maxWidth) ? 1 / 0 : Ee(this.maxWidth), maxHeight: D(this.maxHeight) ? 1 / 0 : Ee(this.maxHeight) });
    if (e = (function(o) {
      var s = o.areaRestrictions, n = o.sizeRestrictions, a = o.boundaries, h = o.positionRestrictions, r = p(p({}, n), { minWidth: n.minWidth !== void 0 ? n.minWidth : 0, minHeight: n.minHeight !== void 0 ? n.minHeight : 0, maxWidth: n.maxWidth !== void 0 ? n.maxWidth : 1 / 0, maxHeight: n.maxHeight !== void 0 ? n.maxHeight : 1 / 0 });
      h.left !== void 0 && h.right !== void 0 && (r.maxWidth = Math.min(r.maxWidth, h.right - h.left)), h.bottom !== void 0 && h.top !== void 0 && (r.maxHeight = Math.min(r.maxHeight, h.bottom - h.top));
      var l = Ge(s), u = Ht(a, l);
      return l.width < 1 / 0 && (!r.maxWidth || r.maxWidth > u.width) && (r.maxWidth = Math.min(r.maxWidth, u.width)), l.height < 1 / 0 && (!r.maxHeight || r.maxHeight > u.height) && (r.maxHeight = Math.min(r.maxHeight, u.height)), r.minWidth > r.maxWidth && (r.minWidth = r.maxWidth, r.widthFrozen = !0), r.minHeight > r.maxHeight && (r.minHeight = r.maxHeight, r.heightFrozen = !0), r;
    })({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var t = this.getStencilSize(), i = Ge(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      e.maxWidth = Math.min(e.maxWidth, i.width * t.width / this.boundaries.width), e.maxHeight = Math.min(e.maxHeight, i.height * t.height / this.boundaries.height), e.maxWidth < e.minWidth && (e.minWidth = e.maxWidth), e.maxHeight < e.minHeight && (e.minHeight = e.maxHeight);
    }
    return e;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: ee(), image: I(ee("image"), this.imageClass), stencil: ee("stencil"), boundaries: I(ee("boundaries"), this.boundariesClass), stretcher: I(ee("stretcher")), background: I(ee("background"), this.backgroundClass), foreground: I(ee("foreground"), this.foregroundClass), imageWrapper: I(ee("image-wrapper")), cropperWrapper: I(ee("cropper-wrapper")) };
}, stencilCoordinates: function() {
  if (this.initialized) {
    var e = this.coordinates, t = e.width, i = e.height, o = e.left, s = e.top;
    return { width: t / this.coefficient, height: i / this.coefficient, left: (o - this.visibleArea.left) / this.coefficient, top: (s - this.visibleArea.top) / this.coefficient };
  }
  return this.defaultCoordinates();
}, boundariesStyle: function() {
  var e = { width: this.boundaries.width ? "".concat(Math.round(this.boundaries.width), "px") : "auto", height: this.boundaries.height ? "".concat(Math.round(this.boundaries.height), "px") : "auto", transition: "opacity ".concat(this.transitionTime, "ms"), pointerEvents: this.imageLoaded ? "all" : "none" };
  return this.imageLoaded || (e.opacity = "0"), e;
}, imageStyle: function() {
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, t = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, i = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, o = z(z({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), s = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-t.left - i.left - this.imageTransforms.translateX, "px, ").concat(-t.top - i.top - this.imageTransforms.translateY, "px)") + jt(o) };
  return this.transitionsOptions.enabled && (s.transition = "".concat(this.transitionsOptions.time, "ms ").concat(this.transitionsOptions.timingFunction)), s;
} }, watch: { src: function() {
  this.onChangeImage();
}, stencilComponent: function() {
  var e = this;
  this.$nextTick((function() {
    e.resetCoordinates(), e.runAutoZoom("setCoordinates"), e.onChange();
  }));
}, minWidth: function() {
  this.onPropsChange();
}, maxWidth: function() {
  this.onPropsChange();
}, minHeight: function() {
  this.onPropsChange();
}, maxHeight: function() {
  this.onPropsChange();
}, imageRestriction: function() {
  this.reset();
}, stencilProps: function(e, t) {
  ["aspectRatio", "minAspectRatio", "maxAspectRatio"].find((function(i) {
    return e[i] !== t[i];
  })) && this.$nextTick(this.onPropsChange);
} }, created: function() {
  this.debouncedUpdate = Xe(this.update, this.debounce), this.debouncedDisableTransitions = Xe(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
}, mounted: function() {
  this.$refs.image.addEventListener("load", this.onSuccessLoadImage), this.$refs.image.addEventListener("error", this.onFailLoadImage), this.onChangeImage(), window.addEventListener("resize", this.refresh), window.addEventListener("orientationchange", this.refresh);
}, unmounted: function() {
  window.removeEventListener("resize", this.refresh), window.removeEventListener("orientationchange", this.refresh), this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.debouncedUpdate.clear(), this.debouncedDisableTransitions.clear();
}, methods: { getResult: function() {
  var e = this.initialized ? this.prepareResult(z({}, this.coordinates)) : this.defaultCoordinates(), t = { rotate: this.imageTransforms.rotate % 360, flip: z({}, this.imageTransforms.flip) };
  if (this.src && this.imageLoaded) {
    var i = this;
    return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? z({}, this.visibleArea) : null, imageTransforms: t, get canvas() {
      return i.canvas ? i.getCanvas() : void 0;
    } };
  }
  return { image: this.image, coordinates: e, visibleArea: this.visibleArea ? z({}, this.visibleArea) : null, canvas: void 0, imageTransforms: t };
}, zoom: function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.transitions, s = o === void 0 || o;
  this.onManipulateImage(new we({}, { factor: 1 / e, center: t }), { normalize: !1, transitions: s });
}, move: function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.transitions, s = o === void 0 || o;
  this.onManipulateImage(new we({ left: e || 0, top: t || 0 }), { normalize: !1, transitions: s });
}, setCoordinates: function(e) {
  var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.autoZoom, s = o === void 0 || o, n = i.transitions, a = n === void 0 || n;
  this.$nextTick((function() {
    t.imageLoaded ? (t.transitionsActive || (a && t.enableTransitions(), t.coordinates = t.applyTransform(e), s && t.runAutoZoom("setCoordinates"), a && t.debouncedDisableTransitions()), t.onChange()) : t.delayedTransforms = e;
  }));
}, refresh: function() {
  var e = this, t = this.$refs.image;
  if (this.src && t) return this.initialized ? this.updateVisibleArea().then((function() {
    e.onChange();
  })) : this.resetVisibleArea().then((function() {
    e.onChange();
  }));
}, reset: function() {
  var e = this;
  return this.resetVisibleArea().then((function() {
    e.onChange(!1);
  }));
}, awaitRender: function(e) {
  var t = this;
  this.awaiting || (this.awaiting = !0, this.$nextTick((function() {
    e(), t.awaiting = !1;
  })));
}, prepareResult: function(e) {
  return this.roundResult ? (function(t) {
    var i = t.coordinates, o = t.sizeRestrictions, s = t.positionRestrictions, n = { width: Math.round(i.width), height: Math.round(i.height), left: Math.round(i.left), top: Math.round(i.top) };
    return n.width > o.maxWidth ? n.width = Math.floor(i.width) : n.width < o.minWidth && (n.width = Math.ceil(i.width)), n.height > o.maxHeight ? n.height = Math.floor(i.height) : n.height < o.minHeight && (n.height = Math.ceil(i.height)), O(n, s);
  })(z(z({}, this.getPublicProperties()), {}, { positionRestrictions: Ce(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, t, i, o) {
  var s = this.autoZoomAlgorithm;
  s || (s = this.stencilSize ? Ni : this.autoZoom ? Xi : Yi);
  var n = s({ event: { type: e, params: o }, visibleArea: t, coordinates: i, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return z(z({}, n), {}, { changed: !Rt(n.visibleArea, t) || !Rt(n.coordinates, i) });
}, runAutoZoom: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = t.transitions, o = i !== void 0 && i, s = Li(t, un), n = this.processAutoZoom(e, this.visibleArea, this.coordinates, s), a = n.visibleArea, h = n.coordinates, r = n.changed;
  o && r && this.enableTransitions(), this.visibleArea = a, this.coordinates = h, o && r && this.debouncedDisableTransitions();
}, normalizeEvent: function(e) {
  return (function(t) {
    var i = t.event, o = t.visibleArea, s = t.coefficient;
    if (i.type === "manipulateImage") return p(p({}, i), { move: { left: i.move && i.move.left ? s * i.move.left : 0, top: i.move && i.move.top ? s * i.move.top : 0 }, scale: { factor: i.scale && i.scale.factor ? i.scale.factor : 1, center: i.scale && i.scale.center ? { left: i.scale.center.left * s + o.left, top: i.scale.center.top * s + o.top } : null } });
    if (i.type === "resize") {
      var n = p(p({}, i), { directions: p({}, i.directions) });
      return Z.forEach((function(h) {
        n.directions[h] *= s;
      })), n;
    }
    if (i.type === "move") {
      var a = p(p({}, i), { directions: p({}, i.directions) });
      return ji.forEach((function(h) {
        a.directions[h] *= s;
      })), a;
    }
    return i;
  })(z(z({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, t = this.$refs.image, i = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? (function(h, r, l) {
      var u = l.rotate, c = l.flip, d = { width: r.naturalWidth, height: r.naturalHeight }, m = Ut(d, u), w = h.getContext("2d");
      h.height = m.height, h.width = m.width, w.save();
      var b = ne(L(p({ left: 0, top: 0 }, d)), u);
      return w.translate(-(b.left - m.width / 2), -(b.top - m.height / 2)), w.rotate(u * Math.PI / 180), w.translate(c.horizontal ? d.width : 0, c.vertical ? d.height : 0), w.scale(c.horizontal ? -1 : 1, c.vertical ? -1 : 1), w.drawImage(r, 0, 0, d.width, d.height), w.restore(), h;
    })(this.$refs.sourceCanvas, t, this.imageTransforms) : t, o = z({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), s = function(h) {
      return h.find((function(r) {
        return l = r, !Number.isNaN(parseFloat(l)) && isFinite(l);
        var l;
      }));
    }, n = te({ sizeRestrictions: { minWidth: s([o.width, o.minWidth]) || 0, minHeight: s([o.height, o.minHeight]) || 0, maxWidth: s([o.width, o.maxWidth]) || 1 / 0, maxHeight: s([o.height, o.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (o.maxArea && n.width * n.height > o.maxArea) {
      var a = Math.sqrt(o.maxArea / (n.width * n.height));
      n = { width: Math.round(a * n.width), height: Math.round(a * n.height) };
    }
    return (function(h, r, l, u, c) {
      h.width = u ? u.width : l.width, h.height = u ? u.height : l.height;
      var d = h.getContext("2d");
      d.clearRect(0, 0, h.width, h.height), c && (c.imageSmoothingEnabled && (d.imageSmoothingEnabled = c.imageSmoothingEnabled), c.imageSmoothingQuality && (d.imageSmoothingQuality = c.imageSmoothingQuality), c.fillColor && (d.fillStyle = c.fillColor, d.fillRect(0, 0, h.width, h.height), d.save()));
      var m = l.left < 0 ? -l.left : 0, w = l.top < 0 ? -l.top : 0;
      d.drawImage(r, l.left + m, l.top + w, l.width, l.height, m * (h.width / l.width), w * (h.height / l.height), h.width, h.height);
    })(e, i, this.coordinates, n, o), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.visibleArea && t ? Fi(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, o = this.visibleArea && t ? Ce(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return Vi({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i, positionRestrictions: o, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var t = this.defaultSize;
    t || (t = this.stencilSize ? qi : Zi);
    var i = this.sizeRestrictions;
    i.minWidth, i.minHeight, i.maxWidth, i.maxHeight;
    var o = ue(t) ? t({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : t, s = this.defaultPosition || Gi, n = [o, function(a) {
      var h = a.coordinates;
      return z({}, ue(s) ? s({ coordinates: h, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
    }];
    this.delayedTransforms && n.push.apply(n, ae(Array.isArray(this.delayedTransforms) ? this.delayedTransforms : [this.delayedTransforms])), this.coordinates = this.applyTransform(n, !0), this.delayedTransforms = null;
  }
}, clearImage: function() {
  var e = this;
  this.imageLoaded = !1, setTimeout((function() {
    var t = e.$refs.stretcher;
    t && (t.style.height = "auto", t.style.width = "auto"), e.coordinates = e.defaultCoordinates(), e.boundaries = { width: 0, height: 0 };
  }), this.transitionTime);
}, enableTransitions: function() {
  this.transitions && (this.transitionsActive = !0);
}, disableTransitions: function() {
  this.transitionsActive = !1;
}, updateBoundaries: function() {
  var e = this, t = this.$refs.stretcher, i = this.$refs.cropper;
  return this.initStretcher({ cropper: i, stretcher: t, imageSize: this.imageSize }), this.$nextTick().then((function() {
    var o = { cropper: i, imageSize: e.imageSize };
    if (ue(e.defaultBoundaries) ? e.boundaries = e.defaultBoundaries(o) : e.defaultBoundaries === "fit" ? e.boundaries = (function(s) {
      var n = s.cropper, a = s.imageSize, h = n.clientHeight, r = n.clientWidth, l = h, u = a.width * h / a.height;
      return u > r && (u = r, l = a.height * r / a.width), { width: u, height: l };
    })(o) : e.boundaries = (function(s) {
      var n = s.cropper;
      return { width: n.clientWidth, height: n.clientHeight };
    })(o), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  }));
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = z(z({}, this.defaultImageTransforms), {}, { flip: z({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then((function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var t, i, o, s, n, a, h = e.defaultVisibleArea || Ki;
    e.visibleArea = ue(h) ? h({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (t = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, i = t.visibleArea, o = t.boundaries, s = t.getAreaRestrictions, n = p({}, i), a = R(o), n.width / n.height !== a && (n.height = n.width / a), O(n, s({ visibleArea: n, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
  })).catch((function() {
    e.visibleArea = null;
  }));
}, updateVisibleArea: function() {
  var e = this;
  return this.updateBoundaries().then((function() {
    e.visibleArea = e.fitVisibleArea({ imageSize: e.imageSize, boundaries: e.boundaries, visibleArea: e.visibleArea, coordinates: e.coordinates, getAreaRestrictions: e.getAreaRestrictions }), e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("updateVisibleArea");
  })).catch((function() {
    e.visibleArea = null;
  }));
}, onChange: function() {
  var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  e && this.debounce ? this.debouncedUpdate() : this.update();
}, onChangeImage: function() {
  var e, t = this;
  if (this.imageLoaded = !1, this.delayedTransforms = null, this.src) {
    if ((function(s) {
      if (wt(s)) return !1;
      var n = window.location, a = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(s) || [], h = { protocol: a[1] || "", host: a[2] || "", port: a[3] || "" }, r = function(l) {
        return l.port || ((l.protocol || n.protocol) === "http" ? 80 : 433);
      };
      return !(!h.protocol && !h.host && !h.port || h.protocol && h.protocol == n.protocol && h.host && h.host == n.host && h.host && r(h) == r(n));
    })(this.src)) {
      var i = D(this.crossOrigin) ? this.canvas : this.crossOrigin;
      i === !0 && (i = "anonymous"), this.imageAttributes.crossOrigin = i || null;
    }
    if (this.checkOrientation) {
      var o = (e = this.src, new Promise((function(s) {
        ln(e).then((function(n) {
          var a = cn(n);
          s(n ? { source: e, arrayBuffer: n, orientation: a } : { source: e, arrayBuffer: null, orientation: null });
        })).catch((function(n) {
          console.warn(n), s({ source: e, arrayBuffer: null, orientation: null });
        }));
      })));
      setTimeout((function() {
        o.then(t.onParseImage);
      }), this.transitionTime);
    } else setTimeout((function() {
      t.onParseImage({ source: t.src });
    }), this.transitionTime);
  } else this.clearImage();
}, onFailLoadImage: function() {
  this.imageAttributes.src && (this.clearImage(), this.$emit("error"));
}, onSuccessLoadImage: function() {
  var e = this, t = this.$refs.image;
  t && !this.imageLoaded && (this.imageAttributes.height = t.naturalHeight, this.imageAttributes.width = t.naturalWidth, this.imageLoaded = !0, this.resetVisibleArea().then((function() {
    e.$emit("ready"), e.onChange(!1);
  })));
}, onParseImage: function(e) {
  var t = this, i = e.source, o = e.arrayBuffer, s = e.orientation;
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, o && s && s > 1 ? It(i) || !wt(i) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([o])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = (function(n) {
    for (var a = [], h = new Uint8Array(n); h.length > 0; ) {
      var r = h.subarray(0, 8192);
      a.push(String.fromCharCode.apply(null, Array.from ? Array.from(r) : r.slice())), h = h.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(a.join(""));
  })(o) : this.imageAttributes.src = i, ue(this.defaultTransforms) ? this.appliedImageTransforms = Fe(this.defaultTransforms()) : Ie(this.defaultTransforms) ? this.appliedImageTransforms = Fe(this.defaultTransforms) : this.appliedImageTransforms = (function(n) {
    var a = Fe({});
    if (n) switch (n) {
      case 2:
        a.flip.horizontal = !0;
        break;
      case 3:
        a.rotate = -180;
        break;
      case 4:
        a.flip.vertical = !0;
        break;
      case 5:
        a.rotate = 90, a.flip.vertical = !0;
        break;
      case 6:
        a.rotate = 90;
        break;
      case 7:
        a.rotate = 90, a.flip.horizontal = !0;
        break;
      case 8:
        a.rotate = -90;
    }
    return a;
  })(s), this.defaultImageTransforms = z(z({}, this.appliedImageTransforms), {}, { flip: z({}, this.appliedImageTransforms.flip) }), this.$nextTick((function() {
    var n = t.$refs.image;
    n && n.complete && ((function(a) {
      return !!a.naturalWidth;
    })(n) ? t.onSuccessLoadImage() : t.onFailLoadImage());
  }));
}, onResizeEnd: function() {
  this.runAutoZoom("resize", { transitions: !0 });
}, onMoveEnd: function() {
  this.runAutoZoom("move", { transitions: !0 });
}, onMove: function(e) {
  var t = this;
  this.transitionsOptions.enabled || this.awaitRender((function() {
    t.coordinates = t.moveAlgorithm(z(z({}, t.getPublicProperties()), {}, { positionRestrictions: Ce(t.positionRestrictions, t.visibleArea), coordinates: t.coordinates, event: t.normalizeEvent(e) })), t.onChange();
  }));
}, onResize: function(e) {
  var t = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender((function() {
    var i = t.sizeRestrictions, o = Math.min(t.coordinates.width, t.coordinates.height, 20 * t.coefficient);
    t.coordinates = t.resizeAlgorithm(z(z({}, t.getPublicProperties()), {}, { positionRestrictions: Ce(t.positionRestrictions, t.visibleArea), sizeRestrictions: { maxWidth: Math.min(i.maxWidth, t.visibleArea.width), maxHeight: Math.min(i.maxHeight, t.visibleArea.height), minWidth: Math.max(i.minWidth, o), minHeight: Math.max(i.minHeight, o) }, event: t.normalizeEvent(e) })), t.onChange(), t.ticking = !1;
  }));
}, onManipulateImage: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i = t.transitions, o = i !== void 0 && i, s = t.normalize, n = s === void 0 || s;
    o && this.enableTransitions();
    var a = Qi(z(z({}, this.getPublicProperties()), {}, { event: n ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), h = a.visibleArea, r = a.coordinates;
    this.visibleArea = h, this.coordinates = r, this.runAutoZoom("manipulateImage"), this.onChange(), o && this.debouncedDisableTransitions();
  }
}, onPropsChange: function() {
  this.coordinates = this.applyTransform(this.coordinates, !0), this.onChange(!1);
}, getAreaRestrictions: function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.visibleArea, i = e.type, o = i === void 0 ? "move" : i;
  return this.areaRestrictionsAlgorithm({ boundaries: this.boundaries, imageSize: this.imageSize, imageRestriction: this.imageRestriction, visibleArea: t, type: o });
}, getAspectRatio: function(e) {
  var t, i, o = this.stencilProps, s = o.aspectRatio, n = o.minAspectRatio, a = o.maxAspectRatio;
  if (this.$refs.stencil && this.$refs.stencil.aspectRatios) {
    var h = this.$refs.stencil.aspectRatios();
    t = h.minimum, i = h.maximum;
  }
  if (D(t) && (t = D(s) ? n : s), D(i) && (i = D(s) ? a : s), !e && (D(t) || D(i))) {
    var r = this.getStencilSize(), l = r ? R(r) : null;
    D(t) && (t = yt(l) ? l : void 0), D(i) && (i = yt(l) ? l : void 0);
  }
  return { minimum: t, maximum: i };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, t = e.boundaries, i = e.stencilSize, o = e.aspectRatio, je(R(s = ue(i) ? i({ boundaries: t, aspectRatio: o }) : i), o) && (s = te({ sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minWidth: 0, minHeight: 0 }, width: s.width, height: s.height, aspectRatio: { minimum: o.minimum, maximum: o.maximum } })), (s.width > t.width || s.height > t.height) && (s = te({ sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minWidth: 0, minHeight: 0 }, width: s.width, height: s.height, aspectRatio: { minimum: R(s), maximum: R(s) } })), s;
  var e, t, i, o, s;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return z({}, zt);
}, flip: function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.transitions, s = o === void 0 || o;
  if (!this.transitionsActive) {
    s && this.enableTransitions();
    var n = z({}, this.imageTransforms.flip), a = en({ flip: { horizontal: e ? !n.horizontal : n.horizontal, vertical: t ? !n.vertical : n.vertical }, previousFlip: n, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), h = a.visibleArea, r = a.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), t && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = h, this.coordinates = r, this.onChange(), s && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = t.transitions, o = i === void 0 || i;
  if (!this.transitionsActive) {
    o && this.enableTransitions();
    var s = z({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var n = Ji({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: s, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), a = n.visibleArea, h = n.coordinates, r = this.processAutoZoom("rotateImage", a, h);
    a = r.visibleArea, h = r.coordinates, this.visibleArea = a, this.coordinates = h, this.onChange(), o && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, dn = { key: 0, ref: "canvas", style: { display: "none" } }, fn = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
Nt.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "cropper", class: n.classes.cropper }, [M("div", { ref: "stretcher", class: n.classes.stretcher }, null, 2), M("div", { class: n.classes.boundaries, style: n.boundariesStyle }, [(v(), E(De(i.backgroundWrapperComponent), { class: n.classes.cropperWrapper, "wheel-resize": n.settings.resizeImage.wheel, "touch-resize": n.settings.resizeImage.touch, "touch-move": n.settings.moveImage.touch, "mouse-move": n.settings.moveImage.mouse, onMove: n.onManipulateImage, onResize: n.onManipulateImage }, { default: B((function() {
    return [M("div", { class: n.classes.background, style: n.boundariesStyle }, null, 6), M("div", { class: n.classes.imageWrapper }, [M("img", { ref: "image", crossorigin: s.imageAttributes.crossOrigin, src: s.imageAttributes.src, class: n.classes.image, style: n.imageStyle, onMousedown: t[1] || (t[1] = ai((function() {
    }), ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), M("div", { class: n.classes.foreground, style: n.boundariesStyle }, null, 6), Et((v(), E(De(i.stencilComponent), Tt({ ref: "stencil", image: n.image, coordinates: s.coordinates, "stencil-coordinates": n.stencilCoordinates, transitions: n.transitionsOptions }, i.stencilProps, { onResize: n.onResize, onResizeEnd: n.onResizeEnd, onMove: n.onMove, onMoveEnd: n.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[Ct, s.imageLoaded]]), i.canvas ? (v(), E("canvas", dn, null, 512)) : X("", !0), i.canvas ? (v(), E("canvas", fn, null, 512)) : X("", !0)];
  })), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
const mn = { class: "image-upload-container" }, pn = {
  key: 0,
  class: "image-upload-mode-switch"
}, gn = {
  key: 1,
  class: "image-upload-url-input"
}, vn = {
  key: 0,
  class: "input-suffix-validating"
}, bn = {
  key: 2,
  class: "image-upload-url-error"
}, wn = {
  key: 0,
  class: "image-upload-uploading-overlay"
}, yn = { class: "image-upload-progress-circle" }, zn = {
  viewBox: "0 0 36 36",
  class: "progress-ring"
}, Rn = ["stroke-dasharray"], An = { class: "progress-percent" }, Sn = { class: "upload-status-text" }, Mn = ["src"], xn = ["src"], En = {
  key: 2,
  class: "image-upload-provider-badge"
}, Cn = {
  key: 3,
  class: "image-upload-provider-badge upload-failed-badge"
}, Tn = {
  key: 4,
  class: "image-upload-provider-badge",
  style: { background: "#ff9800" }
}, Wn = {
  key: 5,
  class: "image-upload-preview-actions"
}, In = ["title"], Dn = ["title"], Pn = {
  key: 0,
  class: "image-upload-progress"
}, Ln = { class: "progress-bar" }, On = { class: "progress-text" }, Hn = { class: "upload-hint" }, Un = { class: "upload-sub-hint" }, kn = ["accept"], $n = ["src"], Bn = ["src"], jn = { class: "image-crop-body" }, _n = {
  key: 0,
  class: "image-crop-loading"
}, Fn = { class: "image-crop-footer" }, Vn = { class: "btn-content" }, Nn = /* @__PURE__ */ hi({
  __name: "ImageUpload",
  props: {
    modelValue: { default: "" },
    type: { default: "cover" },
    cropEnabled: { type: Boolean, default: !0 },
    aspectRatio: { default: 16 / 9 },
    maxSize: { default: 10 },
    placeholder: { default: "" },
    showUrlInput: { type: Boolean, default: !0 },
    previewWidth: {},
    previewHeight: { default: 160 },
    uploadEnabled: { type: Boolean, default: !1 },
    accept: {},
    acceptHint: {},
    maxBytes: {},
    className: {},
    deferUpload: { type: Boolean, default: !1 },
    skipSvgaValidation: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "fileReady"],
  setup(e, { expose: t, emit: i }) {
    const o = gi("ImageUpload"), { t: s } = pi();
    Ai(ft.Parser);
    const n = e, a = i, h = ke(() => n.placeholder || s(W.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE)), r = ke(() => n.acceptHint || s("Supports JPG/PNG/GIF/WebP max {max}MB", { max: n.maxSize })), l = T(null), u = T(null), c = T(!1), d = T(0), m = T(!1), w = T(""), b = T(!n.uploadEnabled), S = T(n.modelValue), H = T(null), { previewUrl: K, setPreview: Q } = Ii(), V = T(!1), pe = T(!1), {
      containerRef: Xt,
      playUrl: Yt
    } = Di({ loop: 1, autoPlay: !0 }), He = T(null);
    let ge = null;
    function ve() {
      if (ge) {
        try {
          ge.stopAnimation(), ge.clear();
        } catch {
        }
        ge = null;
      }
    }
    function Gt(f) {
      Yt(f).catch((g) => {
        o.error("ImageUpload", "SVGA preview load error:", g);
      });
    }
    function Zt(f) {
      ve(), ct(() => {
        if (!He.value) return;
        const g = new ft.Player(He.value);
        g.loops = 0, g.setContentMode("AspectFit"), ge = g;
        const x = Si();
        x && x.load(
          f,
          ($) => {
            g.setVideoItem($), g.startAnimation();
          },
          ($) => {
            o.error("ImageUpload", "SVGA URL preview load error:", $);
          }
        );
      });
    }
    const ie = T(!1), oe = T(""), qt = T(1), it = T(1), ze = T(!1), Re = T(null), nt = T({ width: 300, height: 300 });
    function Ae() {
      if (!Re.value) return;
      const f = Re.value.clientWidth, g = Re.value.clientHeight || 320, x = f / g, $ = n.aspectRatio || 16 / 9;
      let le, J;
      $ > x ? (le = Math.min(f, 500), J = le / $) : (J = Math.min(g, 320), le = J * $), nt.value = { width: Math.round(le), height: Math.round(J) };
    }
    ce(ie, async (f) => {
      f && (await ct(), setTimeout(Ae, 100));
    }), ce(() => n.aspectRatio, () => {
      ie.value && Ae();
    }), li(() => {
      window.addEventListener("resize", Ae);
    });
    const se = T(!1), U = T(""), N = new Mi({
      setValidating: (f) => {
        se.value = f;
      },
      setError: (f) => {
        U.value = f;
      },
      onConfirm: (f) => {
        a("update:modelValue", f);
      }
    }, n.skipSvgaValidation);
    ce(() => n.skipSvgaValidation, (f) => {
      N.updateSkipSvgaValidation(!!f);
    });
    const Ue = ke(() => vi(S.value));
    ce(() => n.modelValue, (f) => {
      S.value = f, U.value = "", f && n.uploadEnabled && (b.value = !0), n.deferUpload && (H.value = null, Q(null), V.value = !1, pe.value = !1, a("fileReady", null));
    }), ce(() => n.uploadEnabled, (f) => {
      f && !n.modelValue && (b.value = !1);
    }), ce(
      [() => n.modelValue, b, () => n.uploadEnabled],
      ([f, g, x]) => {
        f && (g || !x) && mt(f) ? Zt(f) : ve();
      },
      { flush: "post" }
    ), ci(() => {
      N.dispose(), ve(), window.removeEventListener("resize", Ae);
    });
    function ot() {
      l.value?.click();
    }
    function Kt(f) {
      const g = f.target.files?.[0];
      g && st(g), f.target.value = "";
    }
    async function st(f) {
      const g = Ei(f, n.accept);
      if (!g.valid) {
        re.error(g.errorHint);
        return;
      }
      if (!Ci(f, n.maxSize)) {
        re.error(s("File size exceeds {max}MB", { max: n.maxSize }));
        return;
      }
      try {
        await Ti(f, n.accept, n.skipSvgaValidation);
      } catch (x) {
        const $ = x instanceof Error ? x : new Error(String(x));
        re.error($.message || s(W.FILE_LOAD_FAILED));
        return;
      }
      if (n.cropEnabled) {
        qt.value = 1, it.value = 1, oe.value = "", ze.value = !0, ie.value = !0;
        try {
          const x = await wi(f);
          oe.value = x;
        } catch {
          re.error(s(W.IMAGE_LOAD_FAILED)), ie.value = !1;
        } finally {
          ze.value = !1;
        }
      } else
        await at(f);
    }
    async function Qt() {
      if (!(!oe.value || !u.value))
        try {
          const { canvas: f } = u.value.getResult(), g = await Wi(f, "image/jpeg", 0.92);
          ie.value = !1, await at(g);
        } catch {
          re.error(s(W.CROP_FAILED));
        }
    }
    function rt() {
      ie.value = !1, oe.value = "";
    }
    async function at(f) {
      if (n.deferUpload) {
        H.value = f, Q(f);
        const g = yi(f), x = zi(f);
        V.value = x, pe.value = g, a("fileReady", f), g && Gt(previewUrl);
        return;
      }
      c.value = !0, d.value = 0;
      try {
        const g = await gt(f, n.type, (x) => {
          d.value = x;
        });
        a("update:modelValue", g.url), w.value = g.provider || "", re.success(s(W.UPLOAD_SUCCESS));
      } catch (g) {
        const x = g instanceof Error ? g : new Error(String(g));
        re.error(`${s("Upload Failed With Error", { error: x.message || s(W.NETWORK_ERROR) })}`);
      } finally {
        c.value = !1, d.value = 0;
      }
    }
    function Jt(f) {
      f.preventDefault();
      const g = Ri(f);
      g && st(g);
    }
    function ei() {
      N.cancelValidation(), se.value = !1, U.value = "", b.value = !1;
    }
    function ht() {
      N.cancelValidation(), se.value = !1, U.value = "", b.value = !0;
    }
    function ti() {
      N.handleUrlFocus();
    }
    function ii(f) {
      f && typeof f == "object" && "target" in f && f.preventDefault(), N.handleUrlBlur(
        S.value,
        n.maxBytes
      );
    }
    function ni(f) {
      typeof f == "string" && (S.value = f, U.value = "", N.cancelValidation(), se.value = !1);
    }
    function oi(f) {
      f && typeof f == "object" && "target" in f && f.preventDefault(), N.handleUrlEnter(
        S.value,
        n.maxBytes
      );
    }
    function si(f) {
      f?.stopPropagation(), N.cancelValidation(), se.value = !1, U.value = "", a("update:modelValue", ""), S.value = "", w.value = "", c.value = !1, d.value = 0, m.value = !1, ve(), n.deferUpload && (H.value = null, Q(null), V.value = !1, pe.value = !1, a("fileReady", null));
    }
    function ri(f) {
      f.target.style.display = "none";
    }
    return t({
      /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
      get isUrlInputMode() {
        return b.value;
      },
      /** 当前是否正在验证 URL */
      get isValidating() {
        return se.value;
      },
      /** URL 验证错误信息 */
      get urlValidationError() {
        return U.value;
      },
      /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
      get hasUrlError() {
        return b.value ? !!(U.value || n.maxBytes && S.value.trim() && Ue.value > n.maxBytes) : !1;
      },
      /** 当前 URL 输入框中的值（用于提交时校验实际输入） */
      get urlInputValue() {
        return S.value;
      },
      /** 验证图片 URL 是否可访问 */
      validateImageUrl: xi,
      /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
      setUrlError(f) {
        U.value = f;
      },
      /** 切换到 URL 输入模式 */
      switchToUrlMode: ht,
      /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
      reset() {
        N.reset(), H.value = null, Q(null), V.value = !1, pe.value = !1, ve(), S.value = n.modelValue || "", w.value = "", U.value = "", c.value = !1, d.value = 0, m.value = !1, n.uploadEnabled && (b.value = !!n.modelValue), a("fileReady", null);
      },
      /**
       * 确保 URL 输入已验证并返回最终 URL。
       * - 如果当前不在 URL 输入模式，返回 null
       * - 如果正在验证，等待验证完成
       * - 如果输入框中有未 blur 确认的 URL，主动触发验证
       * - 验证成功返回 URL，验证失败抛出错误
       */
      async ensureUrlValidated() {
        return b.value ? await N.ensureUrlValidatedWithErrorCheck(
          S.value,
          n.modelValue || "",
          !!U.value,
          n.maxBytes
        ) : null;
      },
      async uploadPendingFile() {
        const f = H.value;
        if (!f) return null;
        c.value = !0, d.value = 0, m.value = !1;
        try {
          const g = await gt(f, n.type, (x) => {
            d.value = x;
          });
          return H.value = null, w.value = g.provider || "", m.value = !1, g.url;
        } catch (g) {
          throw m.value = !0, g;
        } finally {
          c.value = !1, d.value = 0;
        }
      }
    }), (f, g) => {
      const x = _("t-input"), $ = _("t-button"), le = _("t-dialog");
      return v(), A("div", mn, [
        e.uploadEnabled && e.showUrlInput ? (v(), A("div", pn, [
          C("button", {
            class: Se(["mode-switch-btn", { active: !b.value }]),
            onClick: ei
          }, [
            M(y(dt)),
            ut(" " + P(y(s)(y(W).UPLOAD_IMAGE)), 1)
          ], 2),
          C("button", {
            class: Se(["mode-switch-btn", { active: b.value }]),
            onClick: ht
          }, P(y(s)(y(W).ENTER_URL)), 3)
        ])) : X("", !0),
        b.value || !e.uploadEnabled ? (v(), A("div", gn, [
          M(x, {
            "model-value": S.value,
            "onUpdate:modelValue": ni,
            onFocus: ti,
            onBlur: ii,
            onEnter: oi,
            placeholder: y(s)(y(W).ENTER_IMAGE_URL),
            status: U.value ? "error" : "default"
          }, ui({ _: 2 }, [
            e.maxBytes ? {
              name: "suffix",
              fn: B(() => [
                se.value ? (v(), A("span", vn, P(y(s)(y(W).VALIDATING)), 1)) : (v(), A("span", {
                  key: 1,
                  class: Se(["input-suffix-count", { "byte-overflow": Ue.value > e.maxBytes }])
                }, P(Ue.value) + "/" + P(e.maxBytes), 3))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["model-value", "placeholder", "status"])
        ])) : X("", !0),
        U.value && (b.value || !e.uploadEnabled) ? (v(), A("div", bn, P(U.value), 1)) : X("", !0),
        e.uploadEnabled && !b.value ? (v(), A(be, { key: 3 }, [
          y(K) ? (v(), A("div", {
            key: 0,
            class: "image-upload-preview",
            style: Me({
              width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
              height: `${e.previewHeight || 160}px`
            })
          }, [
            c.value ? (v(), A("div", wn, [
              C("div", yn, [
                (v(), A("svg", zn, [
                  g[3] || (g[3] = C("path", {
                    class: "progress-ring-bg",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, -1)),
                  C("path", {
                    class: "progress-ring-fill",
                    "stroke-dasharray": `${d.value}, 100`,
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, 8, Rn)
                ])),
                C("span", An, P(d.value) + "%", 1)
              ]),
              C("span", Sn, P(y(s)(y(W).UPLOADING)), 1)
            ])) : (v(), A(be, { key: 1 }, [
              pe.value ? (v(), A("div", {
                key: 0,
                ref_key: "svgaPreviewRef",
                ref: Xt,
                class: "svga-preview-container"
              }, null, 512)) : V.value ? (v(), A("video", {
                key: 1,
                src: y(K),
                muted: "",
                loop: "",
                autoplay: "",
                playsinline: ""
              }, null, 8, Mn)) : (v(), A("img", {
                key: 2,
                src: y(K),
                alt: "preview"
              }, null, 8, xn))
            ], 64)),
            !c.value && w.value ? (v(), A("span", En, P(w.value.toUpperCase()), 1)) : X("", !0),
            !c.value && m.value ? (v(), A("span", Cn, P(y(s)(y(W).UPLOAD_FAILED)), 1)) : !c.value && !w.value ? (v(), A("span", Tn, P(y(s)(y(W).PENDING_UPLOAD)), 1)) : X("", !0),
            c.value ? X("", !0) : (v(), A("div", Wn, [
              C("button", {
                class: "preview-action-btn",
                onClick: ot,
                title: y(s)(y(W).RE_UPLOAD)
              }, [
                M(y(dt))
              ], 8, In),
              C("button", {
                class: "preview-action-btn",
                onClick: si,
                title: y(s)(y(W).DELETE)
              }, [
                M(y(di))
              ], 8, Dn)
            ]))
          ], 4)) : (v(), A("div", {
            key: 1,
            class: Se(["image-upload-dropzone", { uploading: c.value }]),
            onClick: g[0] || (g[0] = (J) => !c.value && ot()),
            onDragover: g[1] || (g[1] = //@ts-ignore
            (...J) => y(pt) && y(pt)(...J)),
            onDrop: Jt,
            style: Me({ height: `${e.previewHeight || 160}px` })
          }, [
            c.value ? (v(), A("div", Pn, [
              C("div", Ln, [
                C("div", {
                  class: "progress-fill",
                  style: Me({ width: `${d.value}%` })
                }, null, 4)
              ]),
              C("span", On, P(d.value) + "%", 1)
            ])) : (v(), A(be, { key: 1 }, [
              M(y(fi), {
                size: "32",
                "stroke-width": 1.2
              }),
              C("span", Hn, P(h.value), 1),
              C("span", Un, P(r.value), 1)
            ], 64))
          ], 38)),
          C("input", {
            ref_key: "fileInputRef",
            ref: l,
            type: "file",
            accept: e.accept || "image/jpeg,image/png,image/gif,image/webp",
            style: { display: "none" },
            onChange: Kt
          }, null, 40, kn)
        ], 64)) : X("", !0),
        e.modelValue && (b.value || !e.uploadEnabled) ? (v(), A("div", {
          key: 4,
          class: "image-upload-preview url-preview",
          style: Me({
            width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
            height: `${e.previewHeight || 120}px`,
            marginTop: "8px"
          })
        }, [
          y(mt)(e.modelValue) ? (v(), A("div", {
            key: 0,
            ref_key: "svgaUrlPreviewRef",
            ref: He,
            class: "svga-preview-container"
          }, null, 512)) : y(bi)(e.modelValue) ? (v(), A("video", {
            key: 1,
            src: e.modelValue,
            muted: "",
            loop: "",
            autoplay: "",
            playsinline: ""
          }, null, 8, $n)) : (v(), A("img", {
            key: 2,
            src: e.modelValue,
            alt: "preview",
            onError: ri
          }, null, 40, Bn))
        ], 4)) : X("", !0),
        M(le, {
          visible: ie.value,
          "onUpdate:visible": g[2] || (g[2] = (J) => ie.value = J),
          header: y(s)(y(W).CROP_IMAGE),
          width: 600,
          footer: !1,
          class: "image-crop-modal",
          onClose: rt
        }, {
          default: B(() => [
            C("div", jn, [
              C("div", {
                ref_key: "cropAreaRef",
                ref: Re,
                class: "image-crop-area"
              }, [
                ze.value ? (v(), A("div", _n, [
                  g[4] || (g[4] = C("div", { class: "loading-spinner" }, null, -1)),
                  C("span", null, P(y(s)(y(W).IMAGE_LOADING)), 1)
                ])) : oe.value ? (v(), E(y(Nt), {
                  key: 1,
                  ref_key: "cropperRef",
                  ref: u,
                  src: oe.value,
                  style: { width: "100%", height: "100%" },
                  "resize-image": {
                    adjustStencil: !1
                  },
                  "stencil-component": y(tt),
                  "stencil-props": {
                    aspectRatio: n.aspectRatio,
                    movable: !1,
                    resizable: !1,
                    handlers: {},
                    lines: {
                      north: !0,
                      west: !0,
                      south: !0,
                      east: !0
                    }
                  },
                  "stencil-size": nt.value,
                  "image-restriction": "stencil",
                  "min-zoom": 0.5,
                  "max-zoom": 3,
                  zoom: it.value
                }, null, 8, ["src", "stencil-component", "stencil-props", "stencil-size", "zoom"])) : X("", !0)
              ], 512)
            ]),
            C("div", Fn, [
              M($, {
                variant: "outline",
                shape: "round",
                onClick: rt
              }, {
                default: B(() => [
                  ut(P(y(s)(y(W).CANCEL)), 1)
                ]),
                _: 1
              }),
              M($, {
                theme: "primary",
                shape: "round",
                disabled: ze.value || !oe.value,
                onClick: Qt,
                class: "crop-confirm-btn"
              }, {
                default: B(() => [
                  C("span", Vn, [
                    M(y(mi)),
                    C("span", null, P(y(s)(y(W).CONFIRM_CROP)), 1)
                  ])
                ]),
                _: 1
              }, 8, ["disabled"])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
}), so = /* @__PURE__ */ Pi(Nn, [["__scopeId", "data-v-e4369d16"]]);
export {
  so as I
};
