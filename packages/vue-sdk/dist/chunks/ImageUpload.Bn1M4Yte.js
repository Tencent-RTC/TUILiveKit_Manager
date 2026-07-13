import { openBlock as v, createBlock as C, renderSlot as he, resolveComponent as F, createVNode as x, withCtx as j, Fragment as ye, renderList as ct, resolveDynamicComponent as Pe, withDirectives as Ct, vShow as Tt, mergeProps as It, withModifiers as hi, createCommentVNode as N, defineComponent as li, computed as xe, ref as I, watch as ce, nextTick as ut, onMounted as ci, onUnmounted as ui, createElementBlock as S, createElementVNode as W, normalizeClass as ue, unref as y, createTextVNode as dt, toDisplayString as U, createSlots as di, normalizeStyle as Ee } from "vue";
import { UploadIcon as ft, CloseIcon as fi, ImageIcon as mi, CutIcon as pi } from "tdesign-icons-vue-next";
import { MessagePlugin as re } from "tdesign-vue-next";
import { s as mt } from "./svga.min.Zof6g_Kl.js";
import { useUIKit as gi } from "@tencentcloud/uikit-base-component-vue3";
import { c as vi } from "./logger.rNWqpx5t.js";
import { I as E } from "./layout.BFdpDTDu.js";
import { g as bi, bp as pt, by as gt, br as wi, bz as yi, bo as zi, bq as Ri, aF as Ai } from "./main-layout.G3PkFHlB.js";
import { i as Si, g as Mi } from "./PreviewUrlController.KM17Oi3R.js";
import { U as xi, k as Ei, u as vt, i as Ci, h as Ti, v as Ii, a as Wi } from "./upload.DXa_mkyh.js";
import { u as Di, a as Li } from "./useAsyncAction.BLZxLSN5.js";
import { _ as Pi } from "./_plugin-vue_export-helper.CHgC5LLL.js";
function bt(e, t) {
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
    t % 2 ? bt(Object(i), !0).forEach((function(o) {
      _(e, o, i[o]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : bt(Object(i)).forEach((function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o));
    }));
  }
  return e;
}
function _(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function Oi(e, t) {
  if (e == null) return {};
  var i, o, s = (function(a, h) {
    if (a == null) return {};
    var r, l, c = {}, u = Object.keys(a);
    for (l = 0; l < u.length; l++) r = u[l], h.indexOf(r) >= 0 || (c[r] = a[r]);
    return c;
  })(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (o = 0; o < n.length; o++) i = n[o], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
  }
  return s;
}
function ae(e) {
  return (function(t) {
    if (Array.isArray(t)) return Be(t);
  })(e) || (function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  })(e) || (function(t, i) {
    if (t) {
      if (typeof t == "string") return Be(t, i);
      var o = Object.prototype.toString.call(t).slice(8, -1);
      if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return Be(t, i);
    }
  })(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function Be(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
  return o;
}
var wt, Hi, Ce, D = (wt = function(e) {
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
}, wt(Ce = { path: Hi, exports: {}, require: function(e, t) {
  return (function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  })(t == null && Ce.path);
} }, Ce.exports), Ce.exports), Y = function(e) {
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
    var c = Date.now() - a;
    c < t && c >= 0 ? o = setTimeout(r, t - c) : (o = null, i || (h = e.apply(n, s), n = s = null));
  }
  t == null && (t = 100);
  var l = function() {
    n = this, s = arguments, a = Date.now();
    var c = i && !o;
    return o || (o = setTimeout(r, t)), c && (h = e.apply(n, s), n = s = null), h;
  };
  return l.clear = function() {
    o && (clearTimeout(o), o = null);
  }, l.flush = function() {
    o && (h = e.apply(n, s), n = s = null, clearTimeout(o), o = null);
  }, l;
}
Ne.debounce = Ne;
var Ye = Ne, p = function() {
  return p = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, p.apply(this, arguments);
};
function Wt(e, t) {
  var i, o;
  return e && t ? (i = "" + e + t[0].toUpperCase() + t.slice(1), o = e + "-" + t) : (i = e || t, o = e || t), { name: i, classname: o };
}
function Dt(e) {
  return /^blob:/.test(e);
}
function yt(e) {
  return Dt(e) || (function(t) {
    return /^data:/.test(t);
  })(e);
}
function de(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function L(e) {
  return e === void 0;
}
function Le(e) {
  return typeof e == "object" && e !== null;
}
function Ze(e, t, i) {
  var o = {};
  return Le(e) ? (Object.keys(t).forEach((function(s) {
    L(e[s]) ? o[s] = t[s] : Le(t[s]) ? Le(e[s]) ? o[s] = Ze(e[s], t[s], i[s]) : o[s] = e[s] ? t[s] : i[s] : t[s] === !0 || t[s] === !1 ? o[s] = !!e[s] : o[s] = e[s];
  })), o) : e ? t : i;
}
function Te(e) {
  var t = Number(e);
  return Number.isNaN(t) ? e : t;
}
function zt(e) {
  return typeof (e == "number" || /* @__PURE__ */ (function(t) {
    return typeof t == "object" && t !== null;
  })(e) && toString.call(e) == "[object Number]") && !Lt(e);
}
function Lt(e) {
  return e != e;
}
function Pt(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
var ze = function(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), this.type = "manipulateImage", this.move = e, this.scale = t;
}, Ui = function(e, t) {
  t === void 0 && (t = {}), this.type = "resize", this.directions = e, this.params = t;
}, Qe = function(e) {
  this.type = "move", this.directions = e;
}, ki = (function() {
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
})(), Je = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
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
      this.$emit("drag", new ki(e, o, { left: i[0].clientX, top: i[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
Je.render = function(e, t, i, o, s, n) {
  return v(), C("div", { ref: "draggable", class: i.classname, onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }), onMouseover: t[3] || (t[3] = function() {
    return n.onMouseOver && n.onMouseOver.apply(n, arguments);
  }), onMouseleave: t[4] || (t[4] = function() {
    return n.onMouseLeave && n.onMouseLeave.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 34);
};
var je = Y("vue-handler-wrapper"), Ot = { name: "HandlerWrapper", components: { DraggableElement: Je }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var t, i = Wt(this.horizontalPosition, this.verticalPosition);
    e = je((_(t = {}, i.classname, !0), _(t, "disabled", this.disabled), t));
  } else e = je({ disabled: this.disabled });
  return { root: e, draggable: je("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ot.render = function(e, t, i, o, s, n) {
  var a = F("DraggableElement");
  return v(), C("div", { class: n.classes.root }, [x(a, { class: n.classes.draggable, onDrag: t[1] || (t[1] = function(h) {
    return e.$emit("drag", h);
  }), onDragEnd: t[2] || (t[2] = function(h) {
    return e.$emit("drag-end");
  }), onLeave: t[3] || (t[3] = function(h) {
    return e.$emit("leave");
  }), onEnter: t[4] || (t[4] = function(h) {
    return e.$emit("enter");
  }) }, { default: j((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["class"])], 2);
};
var $i = Y("vue-line-wrapper"), Ht = { name: "LineWrapper", components: { DraggableElement: Je }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return $i((_(e = {}, this.position, !0), _(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ht.render = function(e, t, i, o, s, n) {
  var a = F("DraggableElement");
  return v(), C(a, { class: n.classname, onDrag: t[1] || (t[1] = function(h) {
    return e.$emit("drag", h);
  }), onDragEnd: t[2] || (t[2] = function(h) {
    return e.$emit("drag-end");
  }), onLeave: t[3] || (t[3] = function(h) {
    return e.$emit("leave");
  }), onEnter: t[4] || (t[4] = function(h) {
    return e.$emit("enter");
  }) }, { default: j((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["class"]);
};
var q = ["left", "right", "top", "bottom"], Bi = ["left", "right"], ji = ["top", "bottom"], _i = ["left", "top"], Fi = ["fill-area", "fit-area", "stencil", "none"], Rt = { left: 0, top: 0, width: 0, height: 0 };
function At(e, t, i) {
  return !(i = i || ["width", "height", "left", "top"]).some((function(o) {
    return e[o] !== t[o];
  }));
}
function K(e) {
  return { left: e.left, top: e.top, right: e.left + e.width, bottom: e.top + e.height };
}
function fe(e, t) {
  return { left: e.left - t.left, top: e.top - t.top };
}
function P(e) {
  return { left: e.left + e.width / 2, top: e.top + e.height / 2 };
}
function Re(e, t) {
  var i = { left: 0, top: 0, right: 0, bottom: 0 };
  return q.forEach((function(o) {
    var s = t[o], n = K(e)[o];
    i[o] = s !== void 0 && n !== void 0 ? o === "left" || o === "top" ? Math.max(0, s - n) : Math.max(0, n - s) : 0;
  })), i;
}
function G(e, t) {
  return { left: e.left - t.left, top: e.top - t.top, width: e.width + t.left + t.right, height: e.height + t.top + t.bottom };
}
function Oe(e) {
  return { left: -e.left, top: -e.top };
}
function $(e, t) {
  return p(p({}, e), { left: e.left + t.left, top: e.top + t.top });
}
function V(e, t, i, o) {
  if (t !== 1) {
    if (i) {
      var s = P(e);
      return { width: e.width * t, height: e.height * t, left: e.left + e.width * (1 - t) / 2 + (i.left - s.left) * (1 - t), top: e.top + e.height * (1 - t) / 2 + (i.top - s.top) * (1 - t) };
    }
    return { width: e.width * t, height: e.height * t, left: e.left + e.width * (1 - t) / 2, top: e.top + e.height * (1 - t) / 2 };
  }
  return e;
}
function R(e) {
  return e.width / e.height;
}
function me(e, t) {
  return Math.min(t.right !== void 0 && t.left !== void 0 ? (t.right - t.left) / e.width : 1 / 0, t.bottom !== void 0 && t.top !== void 0 ? (t.bottom - t.top) / e.height : 1 / 0);
}
function pe(e, t) {
  var i = { left: 0, top: 0 }, o = Re(e, t);
  return o.left && o.left > 0 ? i.left = o.left : o.right && o.right > 0 && (i.left = -o.right), o.top && o.top > 0 ? i.top = o.top : o.bottom && o.bottom > 0 && (i.top = -o.bottom), i;
}
function _e(e, t) {
  var i;
  return t.minimum && e < t.minimum ? i = t.minimum : t.maximum && e > t.maximum && (i = t.maximum), i;
}
function Ut(e, t) {
  var i = R(e), o = R(t);
  return t.width < 1 / 0 && t.height < 1 / 0 ? i > o ? { width: t.width, height: t.width / i } : { width: t.height * i, height: t.height } : t.width < 1 / 0 ? { width: t.width, height: t.width / i } : t.height < 1 / 0 ? { width: t.height * i, height: t.height } : e;
}
function kt(e, t) {
  var i = t * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(i)) + Math.abs(e.height * Math.sin(i)), height: Math.abs(e.width * Math.sin(i)) + Math.abs(e.height * Math.cos(i)) };
}
function ne(e, t) {
  var i = t * Math.PI / 180;
  return { left: e.left * Math.cos(i) - e.top * Math.sin(i), top: e.left * Math.sin(i) + e.top * Math.cos(i) };
}
function He(e, t) {
  var i = Re(O(e, t), t);
  return i.left + i.right + i.top + i.bottom ? i.left + i.right > i.top + i.bottom ? Math.min((e.width + i.left + i.right) / e.width, me(e, t)) : Math.min((e.height + i.top + i.bottom) / e.height, me(e, t)) : 1;
}
function O(e, t, i) {
  i === void 0 && (i = !1);
  var o = pe(e, t);
  return $(e, i ? Oe(o) : o);
}
function Ge(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function Vi(e, t) {
  return p(p({}, e), { minWidth: Math.min(t.width, e.minWidth), minHeight: Math.min(t.height, e.minHeight), maxWidth: Math.min(t.width, e.maxWidth), maxHeight: Math.min(t.height, e.maxHeight) });
}
function $t(e, t, i) {
  i === void 0 && (i = !0);
  var o = {};
  return q.forEach((function(s) {
    var n = e[s], a = t[s];
    n !== void 0 && a !== void 0 ? o[s] = s === "left" || s === "top" ? i ? Math.max(n, a) : Math.min(n, a) : i ? Math.min(n, a) : Math.max(n, a) : a !== void 0 ? o[s] = a : n !== void 0 && (o[s] = n);
  })), o;
}
function Ue(e, t) {
  return $t(e, t, !0);
}
function St(e) {
  var t = e.size, i = e.aspectRatio, o = e.ignoreMinimum, s = e.sizeRestrictions;
  return !!((t.correctRatio || R(t) >= i.minimum && R(t) <= i.maximum) && t.height <= s.maxHeight && t.width <= s.maxWidth && t.width && t.height && (o || t.height >= s.minHeight && t.width >= s.minWidth));
}
function Mt(e, t) {
  return Math.pow(e.width - t.width, 2) + Math.pow(e.height - t.height, 2);
}
function ee(e) {
  var t = e.width, i = e.height, o = e.sizeRestrictions, s = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, n = { width: Math.max(o.minWidth, Math.min(o.maxWidth, t)), height: Math.max(o.minHeight, Math.min(o.maxHeight, i)) };
  function a(l, c) {
    return c === void 0 && (c = !1), l.reduce((function(u, d) {
      return St({ size: d, aspectRatio: s, sizeRestrictions: o, ignoreMinimum: c }) && (!u || Mt(d, { width: t, height: i }) < Mt(u, { width: t, height: i })) ? d : u;
    }), null);
  }
  var h = [];
  s && [s.minimum, s.maximum].forEach((function(l) {
    l && h.push({ width: n.width, height: n.width / l, correctRatio: !0 }, { width: n.height * l, height: n.height, correctRatio: !0 });
  })), St({ size: n, aspectRatio: s, sizeRestrictions: o }) && h.push(n);
  var r = a(h) || a(h, !0);
  return r && { width: r.width, height: r.height };
}
function qe(e) {
  var t = e.event, i = e.coordinates, o = e.positionRestrictions, s = o === void 0 ? {} : o, n = $(i, t.directions);
  return $(n, pe(n, s));
}
function Xi(e) {
  var t = e.coordinates, i = e.transform, o = e.imageSize, s = e.sizeRestrictions, n = e.positionRestrictions, a = e.aspectRatio, h = e.visibleArea, r = function(c, u) {
    return qe({ coordinates: c, positionRestrictions: n, event: new Qe({ left: u.left - c.left, top: u.top - c.top }) });
  }, l = p({}, t);
  return (Array.isArray(i) ? i : [i]).forEach((function(c) {
    var u = {};
    L((u = typeof c == "function" ? c({ coordinates: l, imageSize: o, visibleArea: h }) : c).width) && L(u.height) || (l = (function(d, f) {
      var b = p(p(p({}, d), ee({ width: f.width, height: f.height, sizeRestrictions: s, aspectRatio: a })), { left: 0, top: 0 });
      return r(b, { left: d.left, top: d.top });
    })(l, p(p({}, l), u))), L(u.left) && L(u.top) || (l = r(l, p(p({}, l), u)));
  })), l;
}
function Ni(e) {
  e.event;
  var t = e.getAreaRestrictions, i = e.boundaries, o = e.coordinates, s = e.visibleArea;
  e.aspectRatio;
  var n = e.stencilSize, a = e.sizeRestrictions, h = e.positionRestrictions;
  e.stencilReference;
  var r, l, c, u = p({}, o), d = p({}, s), f = p({}, n);
  r = R(f), l = R(u), c === void 0 && (c = 1e-3), (r === 0 || l === 0 ? Math.abs(l - r) < c : Math.abs(l / r) < 1 + c && Math.abs(l / r) > 1 - c) || (u = p(p({}, u), ee({ sizeRestrictions: a, width: u.width, height: u.height, aspectRatio: { minimum: R(f), maximum: R(f) } })));
  var b = He(d = V(d, u.width * i.width / (d.width * f.width)), t({ visibleArea: d, type: "resize" }));
  return b !== 1 && (d = V(d, b), u = V(u, b)), d = O(d = $(d, fe(P(u), P(d))), t({ visibleArea: d, type: "move" })), { coordinates: u = O(u, Ue(K(d), h)), visibleArea: d };
}
function Yi(e) {
  var t = e.event, i = e.getAreaRestrictions, o = e.boundaries, s = e.coordinates, n = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var a = e.positionRestrictions;
  e.stencilReference;
  var h = p({}, s), r = p({}, n);
  if (s && n && t.type !== "manipulateImage") {
    var l = { width: 0, height: 0 };
    r.width, o.width, R(o) > R(h) ? (l.height = 0.8 * o.height, l.width = l.height * R(h)) : (l.width = 0.8 * o.width, l.height = l.width * R(h));
    var c = He(r = V(r, h.width * o.width / (r.width * l.width)), i({ visibleArea: r, type: "resize" }));
    r = V(r, c), c !== 1 && (l.height /= c, l.width /= c), r = O(r = $(r, fe(P(h), P(r))), i({ visibleArea: r, type: "move" })), h = O(h, Ue(K(r), a));
  }
  return { coordinates: h, visibleArea: r };
}
function Zi(e) {
  var t = e.event, i = e.coordinates, o = e.visibleArea, s = e.getAreaRestrictions, n = p({}, o), a = p({}, i);
  if (t.type === "setCoordinates") {
    var h = Math.max(0, a.width - n.width), r = Math.max(0, a.height - n.height);
    h > r ? n = V(n, Math.min(a.width / n.width, me(n, s({ visibleArea: n, type: "resize" })))) : r > h && (n = V(n, Math.min(a.height / n.height, me(n, s({ visibleArea: n, type: "resize" }))))), n = O(n = $(n, Oe(pe(a, K(n)))), s({ visibleArea: n, type: "move" }));
  }
  return { visibleArea: n, coordinates: a };
}
function Gi(e) {
  var t = e.imageSize, i = e.visibleArea, o = e.coordinates, s = i || t;
  return { left: (i ? i.left : 0) + s.width / 2 - o.width / 2, top: (i ? i.top : 0) + s.height / 2 - o.height / 2 };
}
function qi(e) {
  var t = e.imageSize, i = e.visibleArea, o = e.aspectRatio, s = e.sizeRestrictions, n = i || t, a = Math.min(o.maximum || 1 / 0, Math.max(o.minimum || 0, R(n))), h = n.width < n.height ? { width: 0.8 * n.width, height: 0.8 * n.width / a } : { height: 0.8 * n.height, width: 0.8 * n.height * a };
  return ee(p(p({}, h), { aspectRatio: o, sizeRestrictions: s }));
}
function Ki(e) {
  var t, i, o = e.imageSize, s = e.visibleArea, n = e.boundaries, a = e.aspectRatio, h = e.sizeRestrictions, r = e.stencilSize, l = s || o;
  return R(l) > R(n) ? i = (t = r.height * l.height / n.height) * R(r) : t = (i = r.width * l.width / n.width) / R(r), ee({ width: i, height: t, aspectRatio: a, sizeRestrictions: h });
}
function Qi(e) {
  var t = e.getAreaRestrictions, i = e.coordinates, o = e.imageSize, s = R(e.boundaries);
  if (i) {
    var n = { height: Math.max(i.height, o.height), width: Math.max(i.width, o.width) }, a = Ut({ width: R(n) > s ? n.width : n.height * s, height: R(n) > s ? n.width / s : n.height }, Ge(t())), h = { left: i.left + i.width / 2 - a.width / 2, top: i.top + i.height / 2 - a.height / 2, width: a.width, height: a.height }, r = Re(i, K(p({ left: 0, top: 0 }, o))), l = {};
    return !r.left && !r.right && h.width <= o.width && (l.left = 0, l.right = o.width), !r.top && !r.bottom && h.height <= o.height && (l.top = 0, l.bottom = o.height), O(h, l);
  }
  var c = R(o);
  return a = { height: c > s ? o.height : o.width / s, width: c > s ? o.height * s : o.width }, { left: o.width / 2 - a.width / 2, top: o.height / 2 - a.height / 2, width: a.width, height: a.height };
}
function Ie(e, t) {
  return $t(e, K(t));
}
function Ji(e) {
  var t = e.event, i = e.coordinates, o = e.visibleArea, s = e.sizeRestrictions, n = e.getAreaRestrictions, a = e.positionRestrictions, h = e.adjustStencil, r = t.scale, l = t.move, c = p({}, o), u = p({}, i), d = 1, f = 1, b = r.factor && Math.abs(r.factor - 1) > 1e-3;
  c = $(c, { left: l.left || 0, top: l.top || 0 });
  var w = { stencil: { minimum: Math.max(s.minWidth ? s.minWidth / u.width : 0, s.minHeight ? s.minHeight / u.height : 0), maximum: Math.min(s.maxWidth ? s.maxWidth / u.width : 1 / 0, s.maxHeight ? s.maxHeight / u.height : 1 / 0, me(u, a)) }, area: { maximum: me(c, n({ visibleArea: c, type: "resize" })) } };
  r.factor && b && (r.factor < 1 ? (f = Math.max(r.factor, w.stencil.minimum)) > 1 && (f = 1) : r.factor > 1 && (f = Math.min(r.factor, Math.min(w.area.maximum, w.stencil.maximum))) < 1 && (f = 1)), f && (c = V(c, f, r.center));
  var A = i.left - o.left, T = o.width + o.left - (i.width + i.left), B = i.top - o.top, te = o.height + o.top - (i.height + i.top);
  return c = O(c = $(c, pe(c, { left: a.left !== void 0 ? a.left - A * f : void 0, top: a.top !== void 0 ? a.top - B * f : void 0, bottom: a.bottom !== void 0 ? a.bottom + te * f : void 0, right: a.right !== void 0 ? a.right + T * f : void 0 })), n({ visibleArea: c, type: "move" })), u.width = u.width * f, u.height = u.height * f, u.left = c.left + A * f, u.top = c.top + B * f, u = O(u, Ue(K(c), a)), r.factor && b && h && (r.factor > 1 ? d = Math.min(w.area.maximum, r.factor) / f : r.factor < 1 && (d = Math.max(u.height / c.height, u.width / c.width, r.factor / f)), d !== 1 && (c = $(c = O(c = V(c, d, r.factor > 1 ? r.center : P(u)), n({ visibleArea: c, type: "move" })), Oe(pe(u, K(c)))))), { coordinates: u, visibleArea: c };
}
function en(e) {
  var t = e.aspectRatio, i = e.getAreaRestrictions, o = e.coordinates, s = e.visibleArea, n = e.sizeRestrictions, a = e.positionRestrictions, h = e.imageSize, r = e.previousImageSize, l = e.angle, c = p({}, o), u = p({}, s), d = ne(P(p({ left: 0, top: 0 }, r)), l);
  return (c = p(p({}, ee({ sizeRestrictions: n, aspectRatio: t, width: c.width, height: c.height })), ne(P(c), l))).left -= d.left - h.width / 2 + c.width / 2, c.top -= d.top - h.height / 2 + c.height / 2, u = V(u, He(u, i({ visibleArea: u, type: "resize" }))), { coordinates: c = O(c, a), visibleArea: u = O(u = $(u, fe(P(c), P(o))), i({ visibleArea: u, type: "move" })) };
}
function tn(e) {
  var t = e.flip, i = e.previousFlip, o = e.rotate, s = e.getAreaRestrictions, n = e.coordinates, a = e.visibleArea, h = e.imageSize, r = p({}, n), l = p({}, a), c = i.horizontal !== t.horizontal, u = i.vertical !== t.vertical;
  if (c || u) {
    var d = ne({ left: h.width / 2, top: h.height / 2 }, -o), f = ne(P(r), -o), b = ne({ left: c ? d.left - (f.left - d.left) : f.left, top: u ? d.top - (f.top - d.top) : f.top }, o);
    r = $(r, fe(b, P(r))), f = ne(P(l), -o), l = O(l = $(l, fe(b = ne({ left: c ? d.left - (f.left - d.left) : f.left, top: u ? d.top - (f.top - d.top) : f.top }, o), P(l))), s({ visibleArea: l, type: "move" }));
  }
  return { coordinates: r, visibleArea: l };
}
function xt(e) {
  var t = e.directions, i = e.coordinates, o = e.positionRestrictions, s = o === void 0 ? {} : o, n = e.sizeRestrictions, a = e.preserveRatio, h = e.compensate, r = p({}, t), l = G(i, r).width, c = G(i, r).height;
  l < 0 && (r.left < 0 && r.right < 0 ? (r.left = -(i.width - n.minWidth) / (r.left / r.right), r.right = -(i.width - n.minWidth) / (r.right / r.left)) : r.left < 0 ? r.left = -(i.width - n.minWidth) : r.right < 0 && (r.right = -(i.width - n.minWidth))), c < 0 && (r.top < 0 && r.bottom < 0 ? (r.top = -(i.height - n.minHeight) / (r.top / r.bottom), r.bottom = -(i.height - n.minHeight) / (r.bottom / r.top)) : r.top < 0 ? r.top = -(i.height - n.minHeight) : r.bottom < 0 && (r.bottom = -(i.height - n.minHeight)));
  var u = Re(G(i, r), s);
  h && (u.left && u.left > 0 && u.right === 0 ? (r.right += u.left, r.left -= u.left) : u.right && u.right > 0 && u.left === 0 && (r.left += u.right, r.right -= u.right), u.top && u.top > 0 && u.bottom === 0 ? (r.bottom += u.top, r.top -= u.top) : u.bottom && u.bottom > 0 && u.top === 0 && (r.top += u.bottom, r.bottom -= u.bottom), u = Re(G(i, r), s));
  var d = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (q.forEach((function(w) {
    var A = u[w];
    A && r[w] && (d[w] = Math.max(0, 1 - A / r[w]));
  })), a) {
    var f = Math.min.apply(null, q.map((function(w) {
      return d[w];
    })));
    f !== 1 / 0 && q.forEach((function(w) {
      r[w] *= f;
    }));
  } else q.forEach((function(w) {
    d[w] !== 1 / 0 && (r[w] *= d[w]);
  }));
  if (l = G(i, r).width, c = G(i, r).height, r.right + r.left && (l > n.maxWidth ? d.width = (n.maxWidth - i.width) / (r.right + r.left) : l < n.minWidth && (d.width = (n.minWidth - i.width) / (r.right + r.left))), r.bottom + r.top && (c > n.maxHeight ? d.height = (n.maxHeight - i.height) / (r.bottom + r.top) : c < n.minHeight && (d.height = (n.minHeight - i.height) / (r.bottom + r.top))), a) {
    var b = Math.min(d.width, d.height);
    b !== 1 / 0 && q.forEach((function(w) {
      r[w] *= b;
    }));
  } else d.width !== 1 / 0 && Bi.forEach((function(w) {
    r[w] *= d.width;
  })), d.height !== 1 / 0 && ji.forEach((function(w) {
    r[w] *= d.height;
  }));
  return r;
}
function We(e, t, i) {
  return t == 0 && i == 0 ? e / 2 : t == 0 ? 0 : i == 0 ? e : e * Math.abs(t / (t + i));
}
var nn = Y("vue-simple-handler"), on = Y("vue-simple-handler-wrapper"), et = { name: "SimpleHandler", components: { HandlerWrapper: Ot }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, t = (_(e = {}, this.horizontalPosition, !!this.horizontalPosition), _(e, this.verticalPosition, !!this.verticalPosition), _(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), _(e, "hover", this.hover), e);
  return { default: D(nn(t), this.defaultClass, this.hover && this.hoverClass), wrapper: D(on(t), this.wrapperClass) };
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
  var a = F("HandlerWrapper");
  return v(), C(a, { class: n.classes.wrapper, "vertical-position": i.verticalPosition, "horizontal-position": i.horizontalPosition, disabled: i.disabled, onDrag: n.onDrag, onDragEnd: n.onDragEnd, onEnter: n.onEnter, onLeave: n.onLeave }, { default: j((function() {
    return [x("div", { class: n.classes.default }, null, 2)];
  })), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var sn = Y("vue-simple-line"), rn = Y("vue-simple-line-wrapper"), tt = { name: "SimpleLine", components: { LineWrapper: Ht }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: D(sn(_({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: D(rn(_({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
tt.render = function(e, t, i, o, s, n) {
  var a = F("LineWrapper");
  return v(), C(a, { class: n.classes.wrapper, position: i.position, disabled: i.disabled, onDrag: n.onDrag, onDragEnd: n.onDragEnd, onEnter: n.onEnter, onLeave: n.onLeave }, { default: j((function() {
    return [x("div", { class: n.classes.root }, null, 2)];
  })), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var Fe = Y("vue-bounding-box"), an = ["east", "west", null], hn = ["south", "north", null], Bt = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return et;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return tt;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return an.forEach((function(t) {
    hn.forEach((function(i) {
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
  return { root: Fe(), handlers: e, handlersWrappers: t, lines: i, linesWrappers: o };
}, lineNodes: function() {
  var e = this, t = [];
  return this.points.forEach((function(i) {
    i.horizontalDirection && i.verticalDirection || !e.lines[i.name] || t.push({ name: i.name, component: e.linesComponent, class: D(e.classes.lines.default, e.classes.lines[i.name], !e.resizable && e.classes.lines.disabled), wrapperClass: D(e.classes.linesWrappers.default, e.classes.linesWrappers[i.name], !e.resizable && e.classes.linesWrappers.disabled), hoverClass: e.classes.lines.hover, verticalDirection: i.verticalDirection, horizontalDirection: i.horizontalDirection, disabled: !e.resizable });
  })), t;
}, handlerNodes: function() {
  var e = this, t = [], i = this.width, o = this.height;
  return this.points.forEach((function(s) {
    if (e.handlers[s.name]) {
      var n = { name: s.name, component: e.handlersComponent, class: D(e.classes.handlers.default, e.classes.handlers[s.name]), wrapperClass: D(e.classes.handlersWrappers.default, e.classes.handlersWrappers[s.name]), hoverClass: e.classes.handlers.hover, verticalDirection: s.verticalDirection, horizontalDirection: s.horizontalDirection, disabled: !e.resizable };
      if (i && o) {
        var a = s.horizontalDirection, h = s.verticalDirection, r = a === "east" ? i : a === "west" ? 0 : i / 2, l = h === "south" ? o : h === "north" ? 0 : o / 2;
        n.wrapperClass = Fe("handler"), n.wrapperStyle = { transform: "translate(".concat(r, "px, ").concat(l, "px)") }, e.transitions && e.transitions.enabled && (n.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else n.wrapperClass = Fe("handler", _({}, s.classname, !0));
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
  t === "west" ? h.left -= n : t === "east" && (h.right += n), i === "north" ? h.top -= a : i === "south" && (h.bottom += a), !i && t ? o = "width" : i && !t && (o = "height"), this.resizable && this.$emit("resize", new Ui(h, { allowedDirections: { left: t === "west" || !t, right: t === "east" || !t, bottom: i === "south" || !i, top: i === "north" || !i }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: o }));
} }, emits: ["resize", "resize-end"] };
Bt.render = function(e, t, i, o, s, n) {
  return v(), C("div", { ref: "box", class: n.classes.root, style: n.style }, [he(e.$slots, "default"), x("div", null, [(v(!0), C(ye, null, ct(n.lineNodes, (function(a) {
    return v(), C(Pe(a.component), { key: a.name, "default-class": a.class, "hover-class": a.hoverClass, "wrapper-class": a.wrapperClass, position: a.name, disabled: a.disabled, onDrag: function(h) {
      return n.onHandlerDrag(h, a.horizontalDirection, a.verticalDirection);
    }, onDragEnd: t[1] || (t[1] = function(h) {
      return n.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  })), 128))]), (v(!0), C(ye, null, ct(n.handlerNodes, (function(a) {
    return v(), C("div", { key: a.name, style: a.wrapperStyle, class: a.wrapperClass }, [(v(), C(Pe(a.component), { "default-class": a.class, "hover-class": a.hoverClass, "wrapper-class": a.wrapperClass, "horizontal-position": a.horizontalDirection, "vertical-position": a.verticalDirection, disabled: a.disabled, onDrag: function(h) {
      return n.onHandlerDrag(h, a.horizontalDirection, a.verticalDirection);
    }, onDragEnd: t[2] || (t[2] = function(h) {
      return n.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  })), 128))], 6);
};
var ln = Y("vue-draggable-area"), jt = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: ln() };
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
    this.touches.length === 1 && i.length === 1 && this.$emit("move", new Qe({ left: i[0].clientX - (s + this.anchor.x), top: i[0].clientY - (n + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
jt.render = function(e, t, i, o, s, n) {
  return v(), C("div", { ref: "container", onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 544);
};
function Ve(e) {
  var t, i;
  return { rotate: e.rotate || 0, flip: { horizontal: ((t = e?.flip) === null || t === void 0 ? void 0 : t.horizontal) || !1, vertical: ((i = e?.flip) === null || i === void 0 ? void 0 : i.vertical) || !1 } };
}
function cn(e) {
  return new Promise((function(t, i) {
    try {
      if (e) if (/^data:/i.test(e)) t((function(r) {
        r = r.replace(/^data:([^;]+);base64,/gim, "");
        for (var l = atob(r), c = l.length, u = new ArrayBuffer(c), d = new Uint8Array(u), f = 0; f < c; f++) d[f] = l.charCodeAt(f);
        return u;
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
function _t(e) {
  var t = e.rotate, i = e.flip, o = e.scaleX, s = e.scaleY, n = "";
  return n += " rotate(" + t + "deg) ", n += " scaleX(" + o * (i.horizontal ? -1 : 1) + ") ", n += " scaleY(" + s * (i.vertical ? -1 : 1) + ") ";
}
function un(e) {
  try {
    var t, i = new DataView(e), o = void 0, s = void 0, n = void 0, a = void 0;
    if (i.getUint8(0) === 255 && i.getUint8(1) === 216) for (var h = i.byteLength, r = 2; r + 1 < h; ) {
      if (i.getUint8(r) === 255 && i.getUint8(r + 1) === 225) {
        n = r;
        break;
      }
      r++;
    }
    if (n && (o = n + 10, (function(f, b, w) {
      var A, T = "";
      for (A = b, w += b; A < w; A++) T += String.fromCharCode(f.getUint8(A));
      return T;
    })(i, n + 4, 4) === "Exif")) {
      var l = i.getUint16(o);
      if (((s = l === 18761) || l === 19789) && i.getUint16(o + 2, s) === 42) {
        var c = i.getUint32(o + 4, s);
        c >= 8 && (a = o + c);
      }
    }
    if (a) {
      for (var u = i.getUint16(a, s), d = 0; d < u; d++)
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
function Et(e, t) {
  var i = t.getBoundingClientRect(), o = i.left, s = i.top, n = { left: 0, top: 0 }, a = 0;
  return e.forEach((function(h) {
    n.left += (h.clientX - o) / e.length, n.top += (h.clientY - s) / e.length;
  })), e.forEach((function(h) {
    a += Pt({ x: n.left, y: n.top }, { x: h.clientX - o, y: h.clientY - s });
  })), { centerMass: n, spread: a, count: e.length };
}
var Ft = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = Ye(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, t) {
  if (this.touches.length) {
    if (this.touches.length === 1 && t.length === 1) this.$emit("move", new ze({ left: this.touches[0].clientX - t[0].clientX, top: this.touches[0].clientY - t[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var i = Et(t, this.$refs.container), o = this.oldGeometricProperties;
      o.count === i.count && o.count > 1 && this.$emit("resize", new ze({ left: o.centerMass.left - i.centerMass.left, top: o.centerMass.top - i.centerMass.top }, { factor: o.spread / i.spread, center: i.centerMass })), this.oldGeometricProperties = i;
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
    })), this.oldGeometricProperties = Et(this.touches, t);
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
    var t = this.$refs.container.getBoundingClientRect(), i = t.left, o = t.top, s = 1 + this.wheelResize.ratio * (a = e.deltaY || e.detail || e.wheelDelta, (h = +a) == 0 || Lt(h) ? h : h > 0 ? 1 : -1), n = { left: e.clientX - i, top: e.clientY - o };
    this.$emit("resize", new ze({}, { factor: s, center: n })), this.touches.length || this.debouncedProcessEnd();
  }
  var a, h;
} }, emits: ["resize", "move", "transform-end"] };
Ft.render = function(e, t, i, o, s, n) {
  return v(), C("div", { ref: "container", onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }), onWheel: t[3] || (t[3] = function() {
    return n.onWheel && n.onWheel.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 544);
};
var Ke = { components: { TransformableImage: Ft }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
Ke.render = function(e, t, i, o, s, n) {
  var a = F("transformable-image");
  return v(), C(a, { "touch-move": i.touchMove, "touch-resize": i.touchResize, "mouse-move": i.mouseMove, "wheel-resize": i.wheelResize, onMove: t[1] || (t[1] = function(h) {
    return e.$emit("move", h);
  }), onResize: t[2] || (t[2] = function(h) {
    return e.$emit("resize", h);
  }) }, { default: j((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var De = Y("vue-preview"), Vt = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: De({ fill: this.fill }), wrapper: De("wrapper"), imageWrapper: De("image-wrapper"), image: D(De("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, t = z(z({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), i = this.imageSize.width, o = this.imageSize.height, s = kt({ width: i, height: o }, t.rotate), n = { width: "".concat(i, "px"), height: "".concat(o, "px"), left: "0px", top: "0px" }, a = { rotate: { left: (i - s.width) * t.scaleX / 2, top: (o - s.height) * t.scaleY / 2 }, scale: { left: (1 - t.scaleX) * i / 2, top: (1 - t.scaleY) * o / 2 } };
    return n.transform = `translate(
				`.concat(-this.coordinates.left / e - a.rotate.left - a.scale.left, "px,").concat(-this.coordinates.top / e - a.rotate.top - a.scale.top, "px) ") + _t(t), this.transitions && this.transitions.enabled && (n.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), n;
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
Vt.render = function(e, t, i, o, s, n) {
  return v(), C("div", { ref: "root", class: n.classes.root, style: n.style }, [x("div", { ref: "wrapper", class: n.classes.wrapper, style: n.wrapperStyle }, [Ct(x("img", { ref: "image", src: i.image && i.image.src, class: n.classes.image, style: n.imageStyle }, null, 14, ["src"]), [[Tt, i.image && i.image.src]])], 6)], 6);
};
var Xt = { components: { Preview: Vt }, inheritAttrs: !1 };
Xt.render = function(e, t, i, o, s, n) {
  var a = F("preview");
  return v(), C(a, It(e.$attrs, { fill: !0 }), null, 16);
};
var Xe = Y("vue-rectangle-stencil"), it = { name: "RectangleStencil", components: { StencilPreview: Xt, BoundingBox: Bt, DraggableArea: jt }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return et;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return tt;
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
  return { stencil: D(Xe({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: D(Xe("preview"), this.previewClass), boundingBox: D(Xe("bounding-box"), this.boundingBoxClass) };
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
it.render = function(e, t, i, o, s, n) {
  var a = F("stencil-preview"), h = F("draggable-area"), r = F("bounding-box");
  return v(), C("div", { class: n.classes.stencil, style: n.style }, [x(r, { width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, transitions: i.transitions, class: n.classes.boundingBox, handlers: i.handlers, "handlers-component": i.handlersComponent, "handlers-classes": i.handlersClasses, "handlers-wrappers-classes": i.handlersWrappersClasses, lines: i.lines, "lines-component": i.linesComponent, "lines-classes": i.linesClasses, "lines-wrappers-classes": i.linesWrappersClasses, resizable: i.resizable, onResize: n.onResize, onResizeEnd: n.onResizeEnd }, { default: j((function() {
    return [x(h, { movable: i.movable, onMove: n.onMove, onMoveEnd: n.onMoveEnd }, { default: j((function() {
      return [x(a, { image: i.image, coordinates: i.coordinates, width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, class: n.classes.preview, transitions: i.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    })), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  })), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var dn = ["transitions"], J = Y("vue-advanced-cropper"), Nt = { name: "Cropper", components: { BackgroundWrapper: Ke }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return it;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return Ke;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return Fi.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var t = e.event, i = e.coordinates, o = e.aspectRatio, s = e.positionRestrictions, n = e.sizeRestrictions, a = p(p({}, i), { right: i.left + i.width, bottom: i.top + i.height }), h = t.params || {}, r = p({}, t.directions), l = h.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  n.widthFrozen && (r.left = 0, r.right = 0), n.heightFrozen && (r.top = 0, r.bottom = 0), q.forEach((function(Z) {
    l[Z] || (r[Z] = 0);
  }));
  var c = G(a, r = xt({ coordinates: a, directions: r, sizeRestrictions: n, positionRestrictions: s })).width, u = G(a, r).height, d = h.preserveRatio ? R(a) : _e(c / u, o);
  if (d) {
    var f = h.respectDirection;
    if (f || (f = a.width >= a.height || d === 1 ? "width" : "height"), f === "width") {
      var b = c / d - a.height;
      if (l.top && l.bottom) {
        var w = r.top, A = r.bottom;
        r.bottom = We(b, A, w), r.top = We(b, w, A);
      } else l.bottom ? r.bottom = b : l.top ? r.top = b : l.right ? r.right = 0 : l.left && (r.left = 0);
    } else if (f === "height") {
      var T = a.width - u * d;
      if (l.left && l.right) {
        var B = r.left, te = r.right;
        r.left = -We(T, B, te), r.right = -We(T, te, B);
      } else l.left ? r.left = -T : l.right ? r.right = -T : l.top ? r.top = 0 : l.bottom && (r.bottom = 0);
    }
    r = xt({ directions: r, coordinates: a, sizeRestrictions: n, positionRestrictions: s, preserveRatio: !0, compensate: h.compensate });
  }
  return c = G(a, r).width, u = G(a, r).height, (d = h.preserveRatio ? R(a) : _e(c / u, o)) && Math.abs(d - c / u) > 1e-3 && q.forEach((function(Z) {
    l[Z] || (r[Z] = 0);
  })), qe({ event: new Qe({ left: -r.left, top: -r.top }), coordinates: { width: i.width + r.right + r.left, height: i.height + r.top + r.bottom, left: i.left, top: i.top }, positionRestrictions: s });
} }, moveAlgorithm: { type: Function, default: qe }, initStretcher: { type: Function, default: function(e) {
  var t = e.stretcher, i = e.imageSize, o = R(i);
  t.style.width = i.width + "px", t.style.height = t.clientWidth / o + "px", t.style.width = t.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.coordinates, o = e.aspectRatio, s = e.sizeRestrictions, n = e.positionRestrictions, a = p(p({}, i), ee({ width: i.width, height: i.height, aspectRatio: o, sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minHeight: Math.min(t.height, s.minHeight), minWidth: Math.min(t.width, s.minWidth) } }));
  return a = O(a = $(a, fe(P(i), P(a))), Ue(K(t), n));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.boundaries, o = e.getAreaRestrictions, s = e.coordinates, n = p({}, t);
  n.height = n.width / R(i), n.top += (t.height - n.height) / 2, (s.height - n.height > 0 || s.width - n.width > 0) && (n = V(n, Math.max(s.height / n.height, s.width / n.width)));
  var a = Oe(pe(s, K(n = V(n, He(n, o({ visibleArea: n, type: "resize" }))))));
  return n.width < s.width && (a.left = 0), n.height < s.height && (a.top = 0), n = O(n = $(n, a), o({ visibleArea: n, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.boundaries, o = e.imageSize, s = e.imageRestriction, n = e.type, a = {};
  return s === "fill-area" ? a = { left: 0, top: 0, right: o.width, bottom: o.height } : s === "fit-area" && (R(i) > R(o) ? (a = { top: 0, bottom: o.height }, t && n === "move" && (t.width > o.width ? (a.left = -(t.width - o.width) / 2, a.right = o.width - a.left) : (a.left = 0, a.right = o.width))) : (a = { left: 0, right: o.width }, t && n === "move" && (t.height > o.height ? (a.top = -(t.height - o.height) / 2, a.bottom = o.height - a.top) : (a.top = 0, a.bottom = o.height)))), a;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var t = e.imageSize, i = {};
  return e.imageRestriction !== "none" && (i = { left: 0, top: 0, right: t.width, bottom: t.height }), i;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: z({}, Rt) };
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
  var e = Ze(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: Ze(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: L(this.minWidth) ? 0 : Te(this.minWidth), minHeight: L(this.minHeight) ? 0 : Te(this.minHeight), maxWidth: L(this.maxWidth) ? 1 / 0 : Te(this.maxWidth), maxHeight: L(this.maxHeight) ? 1 / 0 : Te(this.maxHeight) });
    if (e = (function(o) {
      var s = o.areaRestrictions, n = o.sizeRestrictions, a = o.boundaries, h = o.positionRestrictions, r = p(p({}, n), { minWidth: n.minWidth !== void 0 ? n.minWidth : 0, minHeight: n.minHeight !== void 0 ? n.minHeight : 0, maxWidth: n.maxWidth !== void 0 ? n.maxWidth : 1 / 0, maxHeight: n.maxHeight !== void 0 ? n.maxHeight : 1 / 0 });
      h.left !== void 0 && h.right !== void 0 && (r.maxWidth = Math.min(r.maxWidth, h.right - h.left)), h.bottom !== void 0 && h.top !== void 0 && (r.maxHeight = Math.min(r.maxHeight, h.bottom - h.top));
      var l = Ge(s), c = Ut(a, l);
      return l.width < 1 / 0 && (!r.maxWidth || r.maxWidth > c.width) && (r.maxWidth = Math.min(r.maxWidth, c.width)), l.height < 1 / 0 && (!r.maxHeight || r.maxHeight > c.height) && (r.maxHeight = Math.min(r.maxHeight, c.height)), r.minWidth > r.maxWidth && (r.minWidth = r.maxWidth, r.widthFrozen = !0), r.minHeight > r.maxHeight && (r.minHeight = r.maxHeight, r.heightFrozen = !0), r;
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
  return { cropper: J(), image: D(J("image"), this.imageClass), stencil: J("stencil"), boundaries: D(J("boundaries"), this.boundariesClass), stretcher: D(J("stretcher")), background: D(J("background"), this.backgroundClass), foreground: D(J("foreground"), this.foregroundClass), imageWrapper: D(J("image-wrapper")), cropperWrapper: D(J("cropper-wrapper")) };
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
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, t = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, i = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, o = z(z({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), s = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-t.left - i.left - this.imageTransforms.translateX, "px, ").concat(-t.top - i.top - this.imageTransforms.translateY, "px)") + _t(o) };
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
  this.debouncedUpdate = Ye(this.update, this.debounce), this.debouncedDisableTransitions = Ye(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
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
  this.onManipulateImage(new ze({}, { factor: 1 / e, center: t }), { normalize: !1, transitions: s });
}, move: function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.transitions, s = o === void 0 || o;
  this.onManipulateImage(new ze({ left: e || 0, top: t || 0 }), { normalize: !1, transitions: s });
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
  })(z(z({}, this.getPublicProperties()), {}, { positionRestrictions: Ie(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, t, i, o) {
  var s = this.autoZoomAlgorithm;
  s || (s = this.stencilSize ? Ni : this.autoZoom ? Yi : Zi);
  var n = s({ event: { type: e, params: o }, visibleArea: t, coordinates: i, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return z(z({}, n), {}, { changed: !At(n.visibleArea, t) || !At(n.coordinates, i) });
}, runAutoZoom: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = t.transitions, o = i !== void 0 && i, s = Oi(t, dn), n = this.processAutoZoom(e, this.visibleArea, this.coordinates, s), a = n.visibleArea, h = n.coordinates, r = n.changed;
  o && r && this.enableTransitions(), this.visibleArea = a, this.coordinates = h, o && r && this.debouncedDisableTransitions();
}, normalizeEvent: function(e) {
  return (function(t) {
    var i = t.event, o = t.visibleArea, s = t.coefficient;
    if (i.type === "manipulateImage") return p(p({}, i), { move: { left: i.move && i.move.left ? s * i.move.left : 0, top: i.move && i.move.top ? s * i.move.top : 0 }, scale: { factor: i.scale && i.scale.factor ? i.scale.factor : 1, center: i.scale && i.scale.center ? { left: i.scale.center.left * s + o.left, top: i.scale.center.top * s + o.top } : null } });
    if (i.type === "resize") {
      var n = p(p({}, i), { directions: p({}, i.directions) });
      return q.forEach((function(h) {
        n.directions[h] *= s;
      })), n;
    }
    if (i.type === "move") {
      var a = p(p({}, i), { directions: p({}, i.directions) });
      return _i.forEach((function(h) {
        a.directions[h] *= s;
      })), a;
    }
    return i;
  })(z(z({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, t = this.$refs.image, i = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? (function(h, r, l) {
      var c = l.rotate, u = l.flip, d = { width: r.naturalWidth, height: r.naturalHeight }, f = kt(d, c), b = h.getContext("2d");
      h.height = f.height, h.width = f.width, b.save();
      var w = ne(P(p({ left: 0, top: 0 }, d)), c);
      return b.translate(-(w.left - f.width / 2), -(w.top - f.height / 2)), b.rotate(c * Math.PI / 180), b.translate(u.horizontal ? d.width : 0, u.vertical ? d.height : 0), b.scale(u.horizontal ? -1 : 1, u.vertical ? -1 : 1), b.drawImage(r, 0, 0, d.width, d.height), b.restore(), h;
    })(this.$refs.sourceCanvas, t, this.imageTransforms) : t, o = z({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), s = function(h) {
      return h.find((function(r) {
        return l = r, !Number.isNaN(parseFloat(l)) && isFinite(l);
        var l;
      }));
    }, n = ee({ sizeRestrictions: { minWidth: s([o.width, o.minWidth]) || 0, minHeight: s([o.height, o.minHeight]) || 0, maxWidth: s([o.width, o.maxWidth]) || 1 / 0, maxHeight: s([o.height, o.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (o.maxArea && n.width * n.height > o.maxArea) {
      var a = Math.sqrt(o.maxArea / (n.width * n.height));
      n = { width: Math.round(a * n.width), height: Math.round(a * n.height) };
    }
    return (function(h, r, l, c, u) {
      h.width = c ? c.width : l.width, h.height = c ? c.height : l.height;
      var d = h.getContext("2d");
      d.clearRect(0, 0, h.width, h.height), u && (u.imageSmoothingEnabled && (d.imageSmoothingEnabled = u.imageSmoothingEnabled), u.imageSmoothingQuality && (d.imageSmoothingQuality = u.imageSmoothingQuality), u.fillColor && (d.fillStyle = u.fillColor, d.fillRect(0, 0, h.width, h.height), d.save()));
      var f = l.left < 0 ? -l.left : 0, b = l.top < 0 ? -l.top : 0;
      d.drawImage(r, l.left + f, l.top + b, l.width, l.height, f * (h.width / l.width), b * (h.height / l.height), h.width, h.height);
    })(e, i, this.coordinates, n, o), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.visibleArea && t ? Vi(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, o = this.visibleArea && t ? Ie(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return Xi({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i, positionRestrictions: o, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var t = this.defaultSize;
    t || (t = this.stencilSize ? Ki : qi);
    var i = this.sizeRestrictions;
    i.minWidth, i.minHeight, i.maxWidth, i.maxHeight;
    var o = de(t) ? t({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : t, s = this.defaultPosition || Gi, n = [o, function(a) {
      var h = a.coordinates;
      return z({}, de(s) ? s({ coordinates: h, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
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
    if (de(e.defaultBoundaries) ? e.boundaries = e.defaultBoundaries(o) : e.defaultBoundaries === "fit" ? e.boundaries = (function(s) {
      var n = s.cropper, a = s.imageSize, h = n.clientHeight, r = n.clientWidth, l = h, c = a.width * h / a.height;
      return c > r && (c = r, l = a.height * r / a.width), { width: c, height: l };
    })(o) : e.boundaries = (function(s) {
      var n = s.cropper;
      return { width: n.clientWidth, height: n.clientHeight };
    })(o), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  }));
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = z(z({}, this.defaultImageTransforms), {}, { flip: z({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then((function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var t, i, o, s, n, a, h = e.defaultVisibleArea || Qi;
    e.visibleArea = de(h) ? h({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (t = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, i = t.visibleArea, o = t.boundaries, s = t.getAreaRestrictions, n = p({}, i), a = R(o), n.width / n.height !== a && (n.height = n.width / a), O(n, s({ visibleArea: n, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
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
      if (yt(s)) return !1;
      var n = window.location, a = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(s) || [], h = { protocol: a[1] || "", host: a[2] || "", port: a[3] || "" }, r = function(l) {
        return l.port || ((l.protocol || n.protocol) === "http" ? 80 : 433);
      };
      return !(!h.protocol && !h.host && !h.port || h.protocol && h.protocol == n.protocol && h.host && h.host == n.host && h.host && r(h) == r(n));
    })(this.src)) {
      var i = L(this.crossOrigin) ? this.canvas : this.crossOrigin;
      i === !0 && (i = "anonymous"), this.imageAttributes.crossOrigin = i || null;
    }
    if (this.checkOrientation) {
      var o = (e = this.src, new Promise((function(s) {
        cn(e).then((function(n) {
          var a = un(n);
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
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, o && s && s > 1 ? Dt(i) || !yt(i) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([o])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = (function(n) {
    for (var a = [], h = new Uint8Array(n); h.length > 0; ) {
      var r = h.subarray(0, 8192);
      a.push(String.fromCharCode.apply(null, Array.from ? Array.from(r) : r.slice())), h = h.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(a.join(""));
  })(o) : this.imageAttributes.src = i, de(this.defaultTransforms) ? this.appliedImageTransforms = Ve(this.defaultTransforms()) : Le(this.defaultTransforms) ? this.appliedImageTransforms = Ve(this.defaultTransforms) : this.appliedImageTransforms = (function(n) {
    var a = Ve({});
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
    t.coordinates = t.moveAlgorithm(z(z({}, t.getPublicProperties()), {}, { positionRestrictions: Ie(t.positionRestrictions, t.visibleArea), coordinates: t.coordinates, event: t.normalizeEvent(e) })), t.onChange();
  }));
}, onResize: function(e) {
  var t = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender((function() {
    var i = t.sizeRestrictions, o = Math.min(t.coordinates.width, t.coordinates.height, 20 * t.coefficient);
    t.coordinates = t.resizeAlgorithm(z(z({}, t.getPublicProperties()), {}, { positionRestrictions: Ie(t.positionRestrictions, t.visibleArea), sizeRestrictions: { maxWidth: Math.min(i.maxWidth, t.visibleArea.width), maxHeight: Math.min(i.maxHeight, t.visibleArea.height), minWidth: Math.max(i.minWidth, o), minHeight: Math.max(i.minHeight, o) }, event: t.normalizeEvent(e) })), t.onChange(), t.ticking = !1;
  }));
}, onManipulateImage: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i = t.transitions, o = i !== void 0 && i, s = t.normalize, n = s === void 0 || s;
    o && this.enableTransitions();
    var a = Ji(z(z({}, this.getPublicProperties()), {}, { event: n ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), h = a.visibleArea, r = a.coordinates;
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
  if (L(t) && (t = L(s) ? n : s), L(i) && (i = L(s) ? a : s), !e && (L(t) || L(i))) {
    var r = this.getStencilSize(), l = r ? R(r) : null;
    L(t) && (t = zt(l) ? l : void 0), L(i) && (i = zt(l) ? l : void 0);
  }
  return { minimum: t, maximum: i };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, t = e.boundaries, i = e.stencilSize, o = e.aspectRatio, _e(R(s = de(i) ? i({ boundaries: t, aspectRatio: o }) : i), o) && (s = ee({ sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minWidth: 0, minHeight: 0 }, width: s.width, height: s.height, aspectRatio: { minimum: o.minimum, maximum: o.maximum } })), (s.width > t.width || s.height > t.height) && (s = ee({ sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minWidth: 0, minHeight: 0 }, width: s.width, height: s.height, aspectRatio: { minimum: R(s), maximum: R(s) } })), s;
  var e, t, i, o, s;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return z({}, Rt);
}, flip: function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.transitions, s = o === void 0 || o;
  if (!this.transitionsActive) {
    s && this.enableTransitions();
    var n = z({}, this.imageTransforms.flip), a = tn({ flip: { horizontal: e ? !n.horizontal : n.horizontal, vertical: t ? !n.vertical : n.vertical }, previousFlip: n, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), h = a.visibleArea, r = a.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), t && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = h, this.coordinates = r, this.onChange(), s && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = t.transitions, o = i === void 0 || i;
  if (!this.transitionsActive) {
    o && this.enableTransitions();
    var s = z({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var n = en({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: s, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), a = n.visibleArea, h = n.coordinates, r = this.processAutoZoom("rotateImage", a, h);
    a = r.visibleArea, h = r.coordinates, this.visibleArea = a, this.coordinates = h, this.onChange(), o && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, fn = { key: 0, ref: "canvas", style: { display: "none" } }, mn = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
Nt.render = function(e, t, i, o, s, n) {
  return v(), C("div", { ref: "cropper", class: n.classes.cropper }, [x("div", { ref: "stretcher", class: n.classes.stretcher }, null, 2), x("div", { class: n.classes.boundaries, style: n.boundariesStyle }, [(v(), C(Pe(i.backgroundWrapperComponent), { class: n.classes.cropperWrapper, "wheel-resize": n.settings.resizeImage.wheel, "touch-resize": n.settings.resizeImage.touch, "touch-move": n.settings.moveImage.touch, "mouse-move": n.settings.moveImage.mouse, onMove: n.onManipulateImage, onResize: n.onManipulateImage }, { default: j((function() {
    return [x("div", { class: n.classes.background, style: n.boundariesStyle }, null, 6), x("div", { class: n.classes.imageWrapper }, [x("img", { ref: "image", crossorigin: s.imageAttributes.crossOrigin, src: s.imageAttributes.src, class: n.classes.image, style: n.imageStyle, onMousedown: t[1] || (t[1] = hi((function() {
    }), ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), x("div", { class: n.classes.foreground, style: n.boundariesStyle }, null, 6), Ct((v(), C(Pe(i.stencilComponent), It({ ref: "stencil", image: n.image, coordinates: s.coordinates, "stencil-coordinates": n.stencilCoordinates, transitions: n.transitionsOptions }, i.stencilProps, { onResize: n.onResize, onResizeEnd: n.onResizeEnd, onMove: n.onMove, onMoveEnd: n.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[Tt, s.imageLoaded]]), i.canvas ? (v(), C("canvas", fn, null, 512)) : N("", !0), i.canvas ? (v(), C("canvas", mn, null, 512)) : N("", !0)];
  })), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
const pn = { class: "image-upload-container" }, gn = {
  key: 0,
  class: "image-upload-mode-switch"
}, vn = {
  key: 1,
  class: "image-upload-url-input"
}, bn = {
  key: 0,
  class: "input-suffix-validating"
}, wn = {
  key: 2,
  class: "image-upload-url-error"
}, yn = {
  key: 0,
  class: "image-upload-uploading-overlay"
}, zn = { class: "image-upload-progress-circle" }, Rn = ["stroke-dasharray"], An = ["src"], Sn = ["src"], Mn = {
  key: 2,
  class: "image-upload-provider-badge"
}, xn = {
  key: 3,
  class: "image-upload-provider-badge upload-failed-badge"
}, En = {
  key: 4,
  class: "image-upload-provider-badge",
  style: { background: "#ff9800" }
}, Cn = {
  key: 5,
  class: "image-upload-preview-actions"
}, Tn = ["title"], In = ["title"], Wn = {
  key: 0,
  class: "image-upload-progress"
}, Dn = { class: "progress-bar" }, Ln = { class: "progress-text" }, Pn = { class: "upload-hint" }, On = { class: "upload-sub-hint" }, Hn = ["accept"], Un = ["src"], kn = ["src"], $n = { class: "image-crop-body" }, Bn = {
  key: 0,
  class: "image-crop-loading"
}, jn = { class: "image-crop-footer" }, _n = { class: "btn-content" }, Fn = /* @__PURE__ */ li({
  __name: "ImageUpload",
  props: {
    modelValue: { default: "" },
    type: { default: "cover" },
    cropEnabled: { type: Boolean, default: !0 },
    aspectRatio: { default: 16 / 9 },
    maxSize: { default: 10 },
    placeholder: { default: "" },
    urlPlaceholder: { default: "" },
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
    const o = vi("ImageUpload"), { t: s } = gi();
    Si(mt.Parser);
    const n = e, a = i, h = xe(() => n.placeholder || s(E.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE)), r = xe(() => n.urlPlaceholder || s(E.ENTER_IMAGE_URL)), l = xe(() => n.acceptHint || s(E.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: n.maxSize })), c = I(null), u = I(null), d = I(!1), f = I(0), b = I(!1), w = I(""), A = I(!n.uploadEnabled), T = I(n.modelValue), B = I(null), { previewUrl: te, setPreview: Z } = Di(), ge = I(!1), ve = I(!1), {
      containerRef: Yt,
      playUrl: Zt
    } = Li({ loop: 1, autoPlay: !0 }), ke = I(null);
    let be = null;
    function we() {
      if (be) {
        try {
          be.stopAnimation(), be.clear();
        } catch {
        }
        be = null;
      }
    }
    function Gt(m) {
      Zt(m).catch((g) => {
        o.error("ImageUpload", "SVGA preview load error:", g);
      });
    }
    function qt(m) {
      we(), ut(() => {
        if (!ke.value) return;
        const g = new mt.Player(ke.value);
        g.loops = 0, g.setContentMode("AspectFit"), be = g;
        const M = Mi();
        M && M.load(
          m,
          (H) => {
            g.setVideoItem(H), g.startAnimation();
          },
          (H) => {
            o.error("ImageUpload", "SVGA URL preview load error:", H);
          }
        );
      });
    }
    const ie = I(!1), oe = I(""), Kt = I(1), nt = I(1), Ae = I(!1), Se = I(null), ot = I({ width: 300, height: 300 });
    function Me() {
      if (!Se.value) return;
      const m = Se.value.clientWidth, g = Se.value.clientHeight || 320, M = m / g, H = n.aspectRatio || 16 / 9;
      let le, Q;
      H > M ? (le = Math.min(m, 500), Q = le / H) : (Q = Math.min(g, 320), le = Q * H), ot.value = { width: Math.round(le), height: Math.round(Q) };
    }
    ce(ie, async (m) => {
      m && (await ut(), setTimeout(Me, 100));
    }), ce(() => n.aspectRatio, () => {
      ie.value && Me();
    }), ci(() => {
      window.addEventListener("resize", Me);
    });
    const se = I(!1), k = I(""), X = new xi({
      setValidating: (m) => {
        se.value = m;
      },
      setError: (m) => {
        k.value = m;
      },
      onConfirm: (m) => {
        a("update:modelValue", m);
      }
    }, n.skipSvgaValidation);
    ce(() => n.skipSvgaValidation, (m) => {
      X.updateSkipSvgaValidation(!!m);
    });
    const $e = xe(() => bi(T.value));
    ce(() => n.modelValue, (m) => {
      T.value = m, k.value = "", m && n.uploadEnabled && (A.value = !0), n.deferUpload && (B.value = null, Z(null), ge.value = !1, ve.value = !1, a("fileReady", null));
    }), ce(() => n.uploadEnabled, (m) => {
      m && !n.modelValue && (A.value = !1);
    }), ce(
      [() => n.modelValue, A, () => n.uploadEnabled],
      ([m, g, M]) => {
        m && (g || !M) && pt(m) ? qt(m) : we();
      },
      { flush: "post" }
    ), ui(() => {
      X.dispose(), we(), window.removeEventListener("resize", Me);
    });
    function st() {
      c.value?.click();
    }
    function Qt(m) {
      const g = m.target.files?.[0];
      g && rt(g), m.target.value = "";
    }
    async function rt(m) {
      const g = Ci(m, n.accept);
      if (!g.valid) {
        re.error(g.errorHint);
        return;
      }
      if (!Ti(m, n.maxSize)) {
        re.error(s(E.FILE_SIZE_EXCEEDS_MB, { max: n.maxSize }));
        return;
      }
      try {
        await Ii(m, n.accept, n.skipSvgaValidation);
      } catch (M) {
        const H = M instanceof Error ? M : new Error(String(M));
        o.error("ImageUpload", `File load failed: ${H.message || s(E.FILE_LOAD_FAILED)}`, H), re.error(H.message || s(E.FILE_LOAD_FAILED));
        return;
      }
      if (n.cropEnabled) {
        Kt.value = 1, nt.value = 1, oe.value = "", Ae.value = !0, ie.value = !0;
        try {
          const M = await yi(m);
          oe.value = M;
        } catch {
          re.error(s(E.IMAGE_LOAD_FAILED)), ie.value = !1;
        } finally {
          Ae.value = !1;
        }
      } else
        await ht(m);
    }
    async function Jt() {
      if (!(!oe.value || !u.value))
        try {
          const { canvas: m } = u.value.getResult(), g = await Wi(m, "image/jpeg", 0.92);
          ie.value = !1, await ht(g);
        } catch {
          re.error(s(E.CROP_FAILED));
        }
    }
    function at() {
      ie.value = !1, oe.value = "";
    }
    async function ht(m) {
      if (n.deferUpload) {
        B.value = m, Z(m);
        const g = zi(m), M = Ri(m);
        ge.value = M, ve.value = g, a("fileReady", m), g && Gt(previewUrl);
        return;
      }
      d.value = !0, f.value = 0;
      try {
        const g = await vt(m, n.type, (M) => {
          f.value = M;
        });
        a("update:modelValue", g.url), w.value = g.provider || "", re.success(s(E.UPLOAD_SUCCESS));
      } catch (g) {
        const M = g instanceof Error ? g : new Error(String(g));
        o.error("ImageUpload", `Upload failed: ${M.message || s(E.NETWORK_ERROR)}`, M), re.error(`${s(E.UPLOAD_FAILED_WITH_ERROR, { error: M.message || s(E.NETWORK_ERROR) })}`);
      } finally {
        d.value = !1, f.value = 0;
      }
    }
    function ei(m) {
      m.preventDefault();
      const g = Ai(m);
      g && rt(g);
    }
    function ti() {
      X.cancelValidation(), se.value = !1, k.value = "", A.value = !1;
    }
    function lt() {
      X.cancelValidation(), se.value = !1, k.value = "", A.value = !0;
    }
    function ii() {
      X.handleUrlFocus();
    }
    function ni(m) {
      m && typeof m == "object" && "target" in m && m.preventDefault(), X.handleUrlBlur(
        T.value,
        n.maxBytes
      );
    }
    function oi(m) {
      typeof m == "string" && (T.value = m, k.value = "", X.cancelValidation(), se.value = !1);
    }
    function si(m) {
      m && typeof m == "object" && "target" in m && m.preventDefault(), X.handleUrlEnter(
        T.value,
        n.maxBytes
      );
    }
    function ri(m) {
      m?.stopPropagation(), X.cancelValidation(), se.value = !1, k.value = "", a("update:modelValue", ""), T.value = "", w.value = "", d.value = !1, f.value = 0, b.value = !1, we(), n.deferUpload && (B.value = null, Z(null), ge.value = !1, ve.value = !1, a("fileReady", null));
    }
    function ai(m) {
      m.target.style.display = "none";
    }
    return t({
      /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
      get isUrlInputMode() {
        return A.value;
      },
      /** 当前是否正在验证 URL */
      get isValidating() {
        return se.value;
      },
      /** URL 验证错误信息 */
      get urlValidationError() {
        return k.value;
      },
      /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
      get hasUrlError() {
        return A.value ? !!(k.value || n.maxBytes && T.value.trim() && $e.value > n.maxBytes) : !1;
      },
      /** 当前 URL 输入框中的值（用于提交时校验实际输入） */
      get urlInputValue() {
        return T.value;
      },
      /** 验证图片 URL 是否可访问 */
      validateImageUrl: Ei,
      /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
      setUrlError(m) {
        k.value = m;
      },
      /** 切换到 URL 输入模式 */
      switchToUrlMode: lt,
      /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
      reset() {
        X.reset(), B.value = null, Z(null), ge.value = !1, ve.value = !1, we(), T.value = n.modelValue || "", w.value = "", k.value = "", d.value = !1, f.value = 0, b.value = !1, n.uploadEnabled && (A.value = !!n.modelValue), a("fileReady", null);
      },
      /**
       * 确保 URL 输入已验证并返回最终 URL。
       * - 如果当前不在 URL 输入模式，返回 null
       * - 如果正在验证，等待验证完成
       * - 如果输入框中有未 blur 确认的 URL，主动触发验证
       * - 验证成功返回 URL，验证失败抛出错误
       */
      async ensureUrlValidated() {
        return A.value ? await X.ensureUrlValidatedWithErrorCheck(
          T.value,
          n.modelValue || "",
          !!k.value,
          n.maxBytes
        ) : null;
      },
      async uploadPendingFile() {
        const m = B.value;
        if (!m) return null;
        d.value = !0, f.value = 0, b.value = !1;
        try {
          const g = await vt(m, n.type, (M) => {
            f.value = M;
          });
          return B.value = null, w.value = g.provider || "", b.value = !1, g.url;
        } catch (g) {
          throw b.value = !0, g;
        } finally {
          d.value = !1, f.value = 0;
        }
      }
    }), (m, g) => {
      const M = F("t-input"), H = F("t-button"), le = F("t-dialog");
      return v(), S("div", pn, [
        e.uploadEnabled && e.showUrlInput ? (v(), S("div", gn, [
          W("button", {
            class: ue(["mode-switch-btn", { active: !A.value }]),
            onClick: ti
          }, [
            x(y(ft)),
            dt(" " + U(y(s)(y(E).UPLOAD_IMAGE)), 1)
          ], 2),
          W("button", {
            class: ue(["mode-switch-btn", { active: A.value }]),
            onClick: lt
          }, U(y(s)(y(E).ENTER_URL)), 3)
        ])) : N("", !0),
        A.value || !e.uploadEnabled ? (v(), S("div", vn, [
          x(M, {
            "model-value": T.value,
            "onUpdate:modelValue": oi,
            onFocus: ii,
            onBlur: ni,
            onEnter: si,
            placeholder: r.value,
            status: k.value ? "error" : "default"
          }, di({ _: 2 }, [
            e.maxBytes ? {
              name: "suffix",
              fn: j(() => [
                se.value ? (v(), S("span", bn, U(y(s)(y(E).VALIDATING)), 1)) : (v(), S("span", {
                  key: 1,
                  class: ue(["input-suffix-count", { "byte-overflow": $e.value > e.maxBytes }])
                }, U($e.value) + "/" + U(e.maxBytes), 3))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["model-value", "placeholder", "status"])
        ])) : N("", !0),
        k.value && (A.value || !e.uploadEnabled) ? (v(), S("div", wn, U(k.value), 1)) : N("", !0),
        e.uploadEnabled && !A.value ? (v(), S(ye, { key: 3 }, [
          y(te) ? (v(), S("div", {
            key: 0,
            class: "image-upload-preview",
            style: Ee({
              width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
              height: `${e.previewHeight || 160}px`
            })
          }, [
            d.value ? (v(), S("div", yn, [
              W("div", zn, [
                (v(), S("svg", {
                  viewBox: "0 0 36 36",
                  class: ue(["progress-ring", { indeterminate: f.value <= 0 }])
                }, [
                  g[3] || (g[3] = W("path", {
                    class: "progress-ring-bg",
                    pathLength: "100",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, -1)),
                  W("path", {
                    class: ue(["progress-ring-fill", { indeterminate: f.value <= 0 }]),
                    pathLength: "100",
                    "stroke-dasharray": f.value > 0 ? `${f.value}, 100` : "25, 100",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, 10, Rn)
                ], 2))
              ])
            ])) : (v(), S(ye, { key: 1 }, [
              ve.value ? (v(), S("div", {
                key: 0,
                ref_key: "svgaPreviewRef",
                ref: Yt,
                class: "svga-preview-container"
              }, null, 512)) : ge.value ? (v(), S("video", {
                key: 1,
                src: y(te),
                muted: "",
                loop: "",
                autoplay: "",
                playsinline: ""
              }, null, 8, An)) : (v(), S("img", {
                key: 2,
                src: y(te),
                alt: "preview"
              }, null, 8, Sn))
            ], 64)),
            !d.value && w.value ? (v(), S("span", Mn, U(w.value.toUpperCase()), 1)) : N("", !0),
            !d.value && b.value ? (v(), S("span", xn, U(y(s)(y(E).UPLOAD_FAILED)), 1)) : !d.value && !w.value ? (v(), S("span", En, U(y(s)(y(E).PENDING_UPLOAD)), 1)) : N("", !0),
            d.value ? N("", !0) : (v(), S("div", Cn, [
              W("button", {
                class: "preview-action-btn",
                onClick: st,
                title: y(s)(y(E).RE_UPLOAD)
              }, [
                x(y(ft))
              ], 8, Tn),
              W("button", {
                class: "preview-action-btn",
                onClick: ri,
                title: y(s)(y(E).DELETE)
              }, [
                x(y(fi))
              ], 8, In)
            ]))
          ], 4)) : (v(), S("div", {
            key: 1,
            class: ue(["image-upload-dropzone", { uploading: d.value }]),
            onClick: g[0] || (g[0] = (Q) => !d.value && st()),
            onDragover: g[1] || (g[1] = //@ts-ignore
            (...Q) => y(gt) && y(gt)(...Q)),
            onDrop: ei,
            style: Ee({ height: `${e.previewHeight || 160}px` })
          }, [
            d.value ? (v(), S("div", Wn, [
              W("div", Dn, [
                W("div", {
                  class: "progress-fill",
                  style: Ee({ width: `${f.value}%` })
                }, null, 4)
              ]),
              W("span", Ln, U(f.value) + "%", 1)
            ])) : (v(), S(ye, { key: 1 }, [
              x(y(mi), {
                size: "32",
                "stroke-width": 1.2
              }),
              W("span", Pn, U(h.value), 1),
              W("span", On, U(l.value), 1)
            ], 64))
          ], 38)),
          W("input", {
            ref_key: "fileInputRef",
            ref: c,
            type: "file",
            accept: e.accept || "image/jpeg,image/png,image/gif,image/webp",
            style: { display: "none" },
            onChange: Qt
          }, null, 40, Hn)
        ], 64)) : N("", !0),
        e.modelValue && (A.value || !e.uploadEnabled) ? (v(), S("div", {
          key: 4,
          class: "image-upload-preview url-preview",
          style: Ee({
            width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
            height: `${e.previewHeight || 120}px`,
            marginTop: "8px"
          })
        }, [
          y(pt)(e.modelValue) ? (v(), S("div", {
            key: 0,
            ref_key: "svgaUrlPreviewRef",
            ref: ke,
            class: "svga-preview-container"
          }, null, 512)) : y(wi)(e.modelValue) ? (v(), S("video", {
            key: 1,
            src: e.modelValue,
            muted: "",
            loop: "",
            autoplay: "",
            playsinline: ""
          }, null, 8, Un)) : (v(), S("img", {
            key: 2,
            src: e.modelValue,
            alt: "preview",
            onError: ai
          }, null, 40, kn))
        ], 4)) : N("", !0),
        x(le, {
          visible: ie.value,
          "onUpdate:visible": g[2] || (g[2] = (Q) => ie.value = Q),
          header: y(s)(y(E).CROP_IMAGE),
          width: 600,
          footer: !1,
          class: "image-crop-modal",
          onClose: at
        }, {
          default: j(() => [
            W("div", $n, [
              W("div", {
                ref_key: "cropAreaRef",
                ref: Se,
                class: "image-crop-area"
              }, [
                Ae.value ? (v(), S("div", Bn, [
                  g[4] || (g[4] = W("div", { class: "loading-spinner" }, null, -1)),
                  W("span", null, U(y(s)(y(E).IMAGE_LOADING)), 1)
                ])) : oe.value ? (v(), C(y(Nt), {
                  key: 1,
                  ref_key: "cropperRef",
                  ref: u,
                  src: oe.value,
                  style: { width: "100%", height: "100%" },
                  "resize-image": {
                    adjustStencil: !1
                  },
                  "stencil-component": y(it),
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
                  "stencil-size": ot.value,
                  "image-restriction": "stencil",
                  "min-zoom": 0.5,
                  "max-zoom": 3,
                  zoom: nt.value
                }, null, 8, ["src", "stencil-component", "stencil-props", "stencil-size", "zoom"])) : N("", !0)
              ], 512)
            ]),
            W("div", jn, [
              x(H, {
                variant: "outline",
                shape: "round",
                onClick: at
              }, {
                default: j(() => [
                  dt(U(y(s)(y(E).CANCEL)), 1)
                ]),
                _: 1
              }),
              x(H, {
                theme: "primary",
                shape: "round",
                disabled: Ae.value || !oe.value,
                onClick: Jt,
                class: "crop-confirm-btn"
              }, {
                default: j(() => [
                  W("span", _n, [
                    x(y(pi)),
                    W("span", null, U(y(s)(y(E).CONFIRM_CROP)), 1)
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
}), io = /* @__PURE__ */ Pi(Fn, [["__scopeId", "data-v-1a396a8f"]]);
export {
  io as I
};
