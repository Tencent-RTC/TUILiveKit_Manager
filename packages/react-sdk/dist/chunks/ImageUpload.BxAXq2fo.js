import { openBlock as v, createBlock as E, renderSlot as he, resolveComponent as X, createVNode as x, withCtx as F, Fragment as ye, renderList as dt, resolveDynamicComponent as Oe, withDirectives as It, vShow as Wt, mergeProps as Dt, withModifiers as ci, createCommentVNode as G, defineComponent as ui, computed as Ee, ref as T, watch as ce, nextTick as ft, onMounted as di, onUnmounted as fi, createElementBlock as A, createElementVNode as W, normalizeClass as ue, unref as y, createTextVNode as mt, toDisplayString as $, createSlots as mi, normalizeStyle as Ce } from "vue";
import { UploadIcon as pt, CloseIcon as pi, ImageIcon as gi, CutIcon as vi } from "tdesign-icons-vue-next";
import { MessagePlugin as ae } from "tdesign-vue-next";
import { s as gt } from "./svga.min.Zof6g_Kl.js";
import { useUIKit as bi } from "@tencentcloud/uikit-base-component-vue3";
import { g as wi, c as yi, I as M } from "./layout.Br-W54NR.js";
import { g as zi, bo as vt, bx as bt, bq as Ri, by as Ai, bn as Mi, bp as Si, aE as xi } from "./main-layout.1w0vpJq1.js";
import { i as Ei, g as Ci } from "./PreviewUrlController.HDrOm6as.js";
import { U as Ti, k as Ii, u as wt, i as Wi, h as Di, v as Pi, a as Li } from "./upload.C-_mha0d.js";
import { u as Oi, a as Hi } from "./useSvgaPlayer.BNISTnSu.js";
import "./useAsyncAction.E1F28vKl.js";
import { _ as Ui } from "./_plugin-vue_export-helper.CHgC5LLL.js";
function yt(e, t) {
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
    t % 2 ? yt(Object(i), !0).forEach((function(o) {
      V(e, o, i[o]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : yt(Object(i)).forEach((function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(i, o));
    }));
  }
  return e;
}
function V(e, t, i) {
  return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e;
}
function ki(e, t) {
  if (e == null) return {};
  var i, o, s = (function(r, h) {
    if (r == null) return {};
    var a, l, c = {}, u = Object.keys(r);
    for (l = 0; l < u.length; l++) a = u[l], h.indexOf(a) >= 0 || (c[a] = r[a]);
    return c;
  })(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (o = 0; o < n.length; o++) i = n[o], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (s[i] = e[i]);
  }
  return s;
}
function re(e) {
  return (function(t) {
    if (Array.isArray(t)) return _e(t);
  })(e) || (function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  })(e) || (function(t, i) {
    if (t) {
      if (typeof t == "string") return _e(t, i);
      var o = Object.prototype.toString.call(t).slice(8, -1);
      if (o === "Object" && t.constructor && (o = t.constructor.name), o === "Map" || o === "Set") return Array.from(t);
      if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return _e(t, i);
    }
  })(e) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function _e(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var i = 0, o = new Array(t); i < t; i++) o[i] = e[i];
  return o;
}
var zt, $i, Te, D = (zt = function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function i() {
      for (var o = [], s = 0; s < arguments.length; s++) {
        var n = arguments[s];
        if (n) {
          var r = typeof n;
          if (r === "string" || r === "number") o.push(n);
          else if (Array.isArray(n)) {
            if (n.length) {
              var h = i.apply(null, n);
              h && o.push(h);
            }
          } else if (r === "object") if (n.toString === Object.prototype.toString) for (var a in n) t.call(n, a) && n[a] && o.push(a);
          else o.push(n.toString());
        }
      }
      return o.join(" ");
    }
    e.exports ? (i.default = i, e.exports = i) : window.classNames = i;
  })();
}, zt(Te = { path: $i, exports: {}, require: function(e, t) {
  return (function() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
  })(t == null && Te.path);
} }, Te.exports), Te.exports), Z = function(e) {
  return function(t, i) {
    if (!t) return e;
    var o;
    typeof t == "string" ? o = t : i = t;
    var s = e;
    return o && (s += "__" + o), s + (i ? Object.keys(i).reduce((function(n, r) {
      var h = i[r];
      return h && (n += " " + (typeof h == "boolean" ? s + "--" + r : s + "--" + r + "_" + h)), n;
    }), "") : "");
  };
};
function Ge(e, t, i) {
  var o, s, n, r, h;
  function a() {
    var c = Date.now() - r;
    c < t && c >= 0 ? o = setTimeout(a, t - c) : (o = null, i || (h = e.apply(n, s), n = s = null));
  }
  t == null && (t = 100);
  var l = function() {
    n = this, s = arguments, r = Date.now();
    var c = i && !o;
    return o || (o = setTimeout(a, t)), c && (h = e.apply(n, s), n = s = null), h;
  };
  return l.clear = function() {
    o && (clearTimeout(o), o = null);
  }, l.flush = function() {
    o && (h = e.apply(n, s), n = s = null, clearTimeout(o), o = null);
  }, l;
}
Ge.debounce = Ge;
var Ze = Ge, p = function() {
  return p = Object.assign || function(e) {
    for (var t, i = 1, o = arguments.length; i < o; i++) for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    return e;
  }, p.apply(this, arguments);
};
function Pt(e, t) {
  var i, o;
  return e && t ? (i = "" + e + t[0].toUpperCase() + t.slice(1), o = e + "-" + t) : (i = e || t, o = e || t), { name: i, classname: o };
}
function Lt(e) {
  return /^blob:/.test(e);
}
function Rt(e) {
  return Lt(e) || (function(t) {
    return /^data:/.test(t);
  })(e);
}
function de(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function P(e) {
  return e === void 0;
}
function Le(e) {
  return typeof e == "object" && e !== null;
}
function qe(e, t, i) {
  var o = {};
  return Le(e) ? (Object.keys(t).forEach((function(s) {
    P(e[s]) ? o[s] = t[s] : Le(t[s]) ? Le(e[s]) ? o[s] = qe(e[s], t[s], i[s]) : o[s] = e[s] ? t[s] : i[s] : t[s] === !0 || t[s] === !1 ? o[s] = !!e[s] : o[s] = e[s];
  })), o) : e ? t : i;
}
function Ie(e) {
  var t = Number(e);
  return Number.isNaN(t) ? e : t;
}
function At(e) {
  return typeof (e == "number" || /* @__PURE__ */ (function(t) {
    return typeof t == "object" && t !== null;
  })(e) && toString.call(e) == "[object Number]") && !Ot(e);
}
function Ot(e) {
  return e != e;
}
function Ht(e, t) {
  return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
}
var ze = function(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = {}), this.type = "manipulateImage", this.move = e, this.scale = t;
}, Bi = function(e, t) {
  t === void 0 && (t = {}), this.type = "resize", this.directions = e, this.params = t;
}, et = function(e) {
  this.type = "move", this.directions = e;
}, ji = (function() {
  function e(t, i, o, s, n) {
    this.type = "drag", this.nativeEvent = t, this.position = o, this.previousPosition = s, this.element = i, this.anchor = n;
  }
  return e.prototype.shift = function() {
    var t = this, i = t.element, o = t.anchor, s = t.position;
    if (i) {
      var n = i.getBoundingClientRect(), r = n.left, h = n.top;
      return { left: s.left - r - o.left, top: s.top - h - o.top };
    }
    return { left: 0, top: 0 };
  }, e;
})(), tt = { name: "DraggableElement", props: { classname: { type: String } }, beforeMount: function() {
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
  e.cancelable && !this.disabled && e.touches.length === 1 && (this.touches = re(e.touches), this.hovered || (this.$emit("enter"), this.hovered = !0), e.touches.length && this.initAnchor(this.touches.reduce((function(t, i) {
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
  var i = re(t);
  if (this.touches.length) {
    if (this.touches.length === 1 && i.length === 1) {
      var o = this.$refs.draggable;
      this.$emit("drag", new ji(e, o, { left: i[0].clientX, top: i[0].clientY }, { left: this.touches[0].clientX, top: this.touches[0].clientY }, this.anchor));
    }
    this.touches = i;
  }
}, processEnd: function() {
  this.touches.length && this.$emit("drag-end"), this.hovered && (this.$emit("leave"), this.hovered = !1), this.touches = [];
} }, emits: ["drag", "drag-end", "leave", "enter"] };
tt.render = function(e, t, i, o, s, n) {
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
var Fe = Z("vue-handler-wrapper"), Ut = { name: "HandlerWrapper", components: { DraggableElement: tt }, props: { horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, computed: { classes: function() {
  var e;
  if (this.horizontalPosition || this.verticalPosition) {
    var t, i = Pt(this.horizontalPosition, this.verticalPosition);
    e = Fe((V(t = {}, i.classname, !0), V(t, "disabled", this.disabled), t));
  } else e = Fe({ disabled: this.disabled });
  return { root: e, draggable: Fe("draggable") };
} }, emits: ["leave", "enter", "drag", "drag-end"] };
Ut.render = function(e, t, i, o, s, n) {
  var r = X("DraggableElement");
  return v(), E("div", { class: n.classes.root }, [x(r, { class: n.classes.draggable, onDrag: t[1] || (t[1] = function(h) {
    return e.$emit("drag", h);
  }), onDragEnd: t[2] || (t[2] = function(h) {
    return e.$emit("drag-end");
  }), onLeave: t[3] || (t[3] = function(h) {
    return e.$emit("leave");
  }), onEnter: t[4] || (t[4] = function(h) {
    return e.$emit("enter");
  }) }, { default: F((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["class"])], 2);
};
var _i = Z("vue-line-wrapper"), kt = { name: "LineWrapper", components: { DraggableElement: tt }, props: { position: { type: String, required: !0 }, disabled: { type: Boolean, default: !1 } }, computed: { classname: function() {
  var e;
  return _i((V(e = {}, this.position, !0), V(e, "disabled", this.disabled), e));
} }, emits: ["leave", "enter", "drag", "drag-end"] };
kt.render = function(e, t, i, o, s, n) {
  var r = X("DraggableElement");
  return v(), E(r, { class: n.classname, onDrag: t[1] || (t[1] = function(h) {
    return e.$emit("drag", h);
  }), onDragEnd: t[2] || (t[2] = function(h) {
    return e.$emit("drag-end");
  }), onLeave: t[3] || (t[3] = function(h) {
    return e.$emit("leave");
  }), onEnter: t[4] || (t[4] = function(h) {
    return e.$emit("enter");
  }) }, { default: F((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["class"]);
};
var K = ["left", "right", "top", "bottom"], Fi = ["left", "right"], Vi = ["top", "bottom"], Xi = ["left", "top"], Ni = ["fill-area", "fit-area", "stencil", "none"], Mt = { left: 0, top: 0, width: 0, height: 0 };
function St(e, t, i) {
  return !(i = i || ["width", "height", "left", "top"]).some((function(o) {
    return e[o] !== t[o];
  }));
}
function Q(e) {
  return { left: e.left, top: e.top, right: e.left + e.width, bottom: e.top + e.height };
}
function fe(e, t) {
  return { left: e.left - t.left, top: e.top - t.top };
}
function O(e) {
  return { left: e.left + e.width / 2, top: e.top + e.height / 2 };
}
function Re(e, t) {
  var i = { left: 0, top: 0, right: 0, bottom: 0 };
  return K.forEach((function(o) {
    var s = t[o], n = Q(e)[o];
    i[o] = s !== void 0 && n !== void 0 ? o === "left" || o === "top" ? Math.max(0, s - n) : Math.max(0, n - s) : 0;
  })), i;
}
function q(e, t) {
  return { left: e.left - t.left, top: e.top - t.top, width: e.width + t.left + t.right, height: e.height + t.top + t.bottom };
}
function He(e) {
  return { left: -e.left, top: -e.top };
}
function j(e, t) {
  return p(p({}, e), { left: e.left + t.left, top: e.top + t.top });
}
function N(e, t, i, o) {
  if (t !== 1) {
    if (i) {
      var s = O(e);
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
function Ve(e, t) {
  var i;
  return t.minimum && e < t.minimum ? i = t.minimum : t.maximum && e > t.maximum && (i = t.maximum), i;
}
function $t(e, t) {
  var i = R(e), o = R(t);
  return t.width < 1 / 0 && t.height < 1 / 0 ? i > o ? { width: t.width, height: t.width / i } : { width: t.height * i, height: t.height } : t.width < 1 / 0 ? { width: t.width, height: t.width / i } : t.height < 1 / 0 ? { width: t.height * i, height: t.height } : e;
}
function Bt(e, t) {
  var i = t * Math.PI / 180;
  return { width: Math.abs(e.width * Math.cos(i)) + Math.abs(e.height * Math.sin(i)), height: Math.abs(e.width * Math.sin(i)) + Math.abs(e.height * Math.cos(i)) };
}
function ne(e, t) {
  var i = t * Math.PI / 180;
  return { left: e.left * Math.cos(i) - e.top * Math.sin(i), top: e.left * Math.sin(i) + e.top * Math.cos(i) };
}
function Ue(e, t) {
  var i = Re(H(e, t), t);
  return i.left + i.right + i.top + i.bottom ? i.left + i.right > i.top + i.bottom ? Math.min((e.width + i.left + i.right) / e.width, me(e, t)) : Math.min((e.height + i.top + i.bottom) / e.height, me(e, t)) : 1;
}
function H(e, t, i) {
  i === void 0 && (i = !1);
  var o = pe(e, t);
  return j(e, i ? He(o) : o);
}
function Ke(e) {
  return { width: e.right !== void 0 && e.left !== void 0 ? e.right - e.left : 1 / 0, height: e.bottom !== void 0 && e.top !== void 0 ? e.bottom - e.top : 1 / 0 };
}
function Yi(e, t) {
  return p(p({}, e), { minWidth: Math.min(t.width, e.minWidth), minHeight: Math.min(t.height, e.minHeight), maxWidth: Math.min(t.width, e.maxWidth), maxHeight: Math.min(t.height, e.maxHeight) });
}
function jt(e, t, i) {
  i === void 0 && (i = !0);
  var o = {};
  return K.forEach((function(s) {
    var n = e[s], r = t[s];
    n !== void 0 && r !== void 0 ? o[s] = s === "left" || s === "top" ? i ? Math.max(n, r) : Math.min(n, r) : i ? Math.min(n, r) : Math.max(n, r) : r !== void 0 ? o[s] = r : n !== void 0 && (o[s] = n);
  })), o;
}
function ke(e, t) {
  return jt(e, t, !0);
}
function xt(e) {
  var t = e.size, i = e.aspectRatio, o = e.ignoreMinimum, s = e.sizeRestrictions;
  return !!((t.correctRatio || R(t) >= i.minimum && R(t) <= i.maximum) && t.height <= s.maxHeight && t.width <= s.maxWidth && t.width && t.height && (o || t.height >= s.minHeight && t.width >= s.minWidth));
}
function Et(e, t) {
  return Math.pow(e.width - t.width, 2) + Math.pow(e.height - t.height, 2);
}
function te(e) {
  var t = e.width, i = e.height, o = e.sizeRestrictions, s = { minimum: e.aspectRatio && e.aspectRatio.minimum || 0, maximum: e.aspectRatio && e.aspectRatio.maximum || 1 / 0 }, n = { width: Math.max(o.minWidth, Math.min(o.maxWidth, t)), height: Math.max(o.minHeight, Math.min(o.maxHeight, i)) };
  function r(l, c) {
    return c === void 0 && (c = !1), l.reduce((function(u, d) {
      return xt({ size: d, aspectRatio: s, sizeRestrictions: o, ignoreMinimum: c }) && (!u || Et(d, { width: t, height: i }) < Et(u, { width: t, height: i })) ? d : u;
    }), null);
  }
  var h = [];
  s && [s.minimum, s.maximum].forEach((function(l) {
    l && h.push({ width: n.width, height: n.width / l, correctRatio: !0 }, { width: n.height * l, height: n.height, correctRatio: !0 });
  })), xt({ size: n, aspectRatio: s, sizeRestrictions: o }) && h.push(n);
  var a = r(h) || r(h, !0);
  return a && { width: a.width, height: a.height };
}
function Qe(e) {
  var t = e.event, i = e.coordinates, o = e.positionRestrictions, s = o === void 0 ? {} : o, n = j(i, t.directions);
  return j(n, pe(n, s));
}
function Gi(e) {
  var t = e.coordinates, i = e.transform, o = e.imageSize, s = e.sizeRestrictions, n = e.positionRestrictions, r = e.aspectRatio, h = e.visibleArea, a = function(c, u) {
    return Qe({ coordinates: c, positionRestrictions: n, event: new et({ left: u.left - c.left, top: u.top - c.top }) });
  }, l = p({}, t);
  return (Array.isArray(i) ? i : [i]).forEach((function(c) {
    var u = {};
    P((u = typeof c == "function" ? c({ coordinates: l, imageSize: o, visibleArea: h }) : c).width) && P(u.height) || (l = (function(d, m) {
      var b = p(p(p({}, d), te({ width: m.width, height: m.height, sizeRestrictions: s, aspectRatio: r })), { left: 0, top: 0 });
      return a(b, { left: d.left, top: d.top });
    })(l, p(p({}, l), u))), P(u.left) && P(u.top) || (l = a(l, p(p({}, l), u)));
  })), l;
}
function Zi(e) {
  e.event;
  var t = e.getAreaRestrictions, i = e.boundaries, o = e.coordinates, s = e.visibleArea;
  e.aspectRatio;
  var n = e.stencilSize, r = e.sizeRestrictions, h = e.positionRestrictions;
  e.stencilReference;
  var a, l, c, u = p({}, o), d = p({}, s), m = p({}, n);
  a = R(m), l = R(u), c === void 0 && (c = 1e-3), (a === 0 || l === 0 ? Math.abs(l - a) < c : Math.abs(l / a) < 1 + c && Math.abs(l / a) > 1 - c) || (u = p(p({}, u), te({ sizeRestrictions: r, width: u.width, height: u.height, aspectRatio: { minimum: R(m), maximum: R(m) } })));
  var b = Ue(d = N(d, u.width * i.width / (d.width * m.width)), t({ visibleArea: d, type: "resize" }));
  return b !== 1 && (d = N(d, b), u = N(u, b)), d = H(d = j(d, fe(O(u), O(d))), t({ visibleArea: d, type: "move" })), { coordinates: u = H(u, ke(Q(d), h)), visibleArea: d };
}
function qi(e) {
  var t = e.event, i = e.getAreaRestrictions, o = e.boundaries, s = e.coordinates, n = e.visibleArea;
  e.aspectRatio, e.stencilSize, e.sizeRestrictions;
  var r = e.positionRestrictions;
  e.stencilReference;
  var h = p({}, s), a = p({}, n);
  if (s && n && t.type !== "manipulateImage") {
    var l = { width: 0, height: 0 };
    a.width, o.width, R(o) > R(h) ? (l.height = 0.8 * o.height, l.width = l.height * R(h)) : (l.width = 0.8 * o.width, l.height = l.width * R(h));
    var c = Ue(a = N(a, h.width * o.width / (a.width * l.width)), i({ visibleArea: a, type: "resize" }));
    a = N(a, c), c !== 1 && (l.height /= c, l.width /= c), a = H(a = j(a, fe(O(h), O(a))), i({ visibleArea: a, type: "move" })), h = H(h, ke(Q(a), r));
  }
  return { coordinates: h, visibleArea: a };
}
function Ki(e) {
  var t = e.event, i = e.coordinates, o = e.visibleArea, s = e.getAreaRestrictions, n = p({}, o), r = p({}, i);
  if (t.type === "setCoordinates") {
    var h = Math.max(0, r.width - n.width), a = Math.max(0, r.height - n.height);
    h > a ? n = N(n, Math.min(r.width / n.width, me(n, s({ visibleArea: n, type: "resize" })))) : a > h && (n = N(n, Math.min(r.height / n.height, me(n, s({ visibleArea: n, type: "resize" }))))), n = H(n = j(n, He(pe(r, Q(n)))), s({ visibleArea: n, type: "move" }));
  }
  return { visibleArea: n, coordinates: r };
}
function Qi(e) {
  var t = e.imageSize, i = e.visibleArea, o = e.coordinates, s = i || t;
  return { left: (i ? i.left : 0) + s.width / 2 - o.width / 2, top: (i ? i.top : 0) + s.height / 2 - o.height / 2 };
}
function Ji(e) {
  var t = e.imageSize, i = e.visibleArea, o = e.aspectRatio, s = e.sizeRestrictions, n = i || t, r = Math.min(o.maximum || 1 / 0, Math.max(o.minimum || 0, R(n))), h = n.width < n.height ? { width: 0.8 * n.width, height: 0.8 * n.width / r } : { height: 0.8 * n.height, width: 0.8 * n.height * r };
  return te(p(p({}, h), { aspectRatio: o, sizeRestrictions: s }));
}
function en(e) {
  var t, i, o = e.imageSize, s = e.visibleArea, n = e.boundaries, r = e.aspectRatio, h = e.sizeRestrictions, a = e.stencilSize, l = s || o;
  return R(l) > R(n) ? i = (t = a.height * l.height / n.height) * R(a) : t = (i = a.width * l.width / n.width) / R(a), te({ width: i, height: t, aspectRatio: r, sizeRestrictions: h });
}
function tn(e) {
  var t = e.getAreaRestrictions, i = e.coordinates, o = e.imageSize, s = R(e.boundaries);
  if (i) {
    var n = { height: Math.max(i.height, o.height), width: Math.max(i.width, o.width) }, r = $t({ width: R(n) > s ? n.width : n.height * s, height: R(n) > s ? n.width / s : n.height }, Ke(t())), h = { left: i.left + i.width / 2 - r.width / 2, top: i.top + i.height / 2 - r.height / 2, width: r.width, height: r.height }, a = Re(i, Q(p({ left: 0, top: 0 }, o))), l = {};
    return !a.left && !a.right && h.width <= o.width && (l.left = 0, l.right = o.width), !a.top && !a.bottom && h.height <= o.height && (l.top = 0, l.bottom = o.height), H(h, l);
  }
  var c = R(o);
  return r = { height: c > s ? o.height : o.width / s, width: c > s ? o.height * s : o.width }, { left: o.width / 2 - r.width / 2, top: o.height / 2 - r.height / 2, width: r.width, height: r.height };
}
function We(e, t) {
  return jt(e, Q(t));
}
function nn(e) {
  var t = e.event, i = e.coordinates, o = e.visibleArea, s = e.sizeRestrictions, n = e.getAreaRestrictions, r = e.positionRestrictions, h = e.adjustStencil, a = t.scale, l = t.move, c = p({}, o), u = p({}, i), d = 1, m = 1, b = a.factor && Math.abs(a.factor - 1) > 1e-3;
  c = j(c, { left: l.left || 0, top: l.top || 0 });
  var w = { stencil: { minimum: Math.max(s.minWidth ? s.minWidth / u.width : 0, s.minHeight ? s.minHeight / u.height : 0), maximum: Math.min(s.maxWidth ? s.maxWidth / u.width : 1 / 0, s.maxHeight ? s.maxHeight / u.height : 1 / 0, me(u, r)) }, area: { maximum: me(c, n({ visibleArea: c, type: "resize" })) } };
  a.factor && b && (a.factor < 1 ? (m = Math.max(a.factor, w.stencil.minimum)) > 1 && (m = 1) : a.factor > 1 && (m = Math.min(a.factor, Math.min(w.area.maximum, w.stencil.maximum))) < 1 && (m = 1)), m && (c = N(c, m, a.center));
  var I = i.left - o.left, L = o.width + o.left - (i.width + i.left), C = i.top - o.top, U = o.height + o.top - (i.height + i.top);
  return c = H(c = j(c, pe(c, { left: r.left !== void 0 ? r.left - I * m : void 0, top: r.top !== void 0 ? r.top - C * m : void 0, bottom: r.bottom !== void 0 ? r.bottom + U * m : void 0, right: r.right !== void 0 ? r.right + L * m : void 0 })), n({ visibleArea: c, type: "move" })), u.width = u.width * m, u.height = u.height * m, u.left = c.left + I * m, u.top = c.top + C * m, u = H(u, ke(Q(c), r)), a.factor && b && h && (a.factor > 1 ? d = Math.min(w.area.maximum, a.factor) / m : a.factor < 1 && (d = Math.max(u.height / c.height, u.width / c.width, a.factor / m)), d !== 1 && (c = j(c = H(c = N(c, d, a.factor > 1 ? a.center : O(u)), n({ visibleArea: c, type: "move" })), He(pe(u, Q(c)))))), { coordinates: u, visibleArea: c };
}
function on(e) {
  var t = e.aspectRatio, i = e.getAreaRestrictions, o = e.coordinates, s = e.visibleArea, n = e.sizeRestrictions, r = e.positionRestrictions, h = e.imageSize, a = e.previousImageSize, l = e.angle, c = p({}, o), u = p({}, s), d = ne(O(p({ left: 0, top: 0 }, a)), l);
  return (c = p(p({}, te({ sizeRestrictions: n, aspectRatio: t, width: c.width, height: c.height })), ne(O(c), l))).left -= d.left - h.width / 2 + c.width / 2, c.top -= d.top - h.height / 2 + c.height / 2, u = N(u, Ue(u, i({ visibleArea: u, type: "resize" }))), { coordinates: c = H(c, r), visibleArea: u = H(u = j(u, fe(O(c), O(o))), i({ visibleArea: u, type: "move" })) };
}
function sn(e) {
  var t = e.flip, i = e.previousFlip, o = e.rotate, s = e.getAreaRestrictions, n = e.coordinates, r = e.visibleArea, h = e.imageSize, a = p({}, n), l = p({}, r), c = i.horizontal !== t.horizontal, u = i.vertical !== t.vertical;
  if (c || u) {
    var d = ne({ left: h.width / 2, top: h.height / 2 }, -o), m = ne(O(a), -o), b = ne({ left: c ? d.left - (m.left - d.left) : m.left, top: u ? d.top - (m.top - d.top) : m.top }, o);
    a = j(a, fe(b, O(a))), m = ne(O(l), -o), l = H(l = j(l, fe(b = ne({ left: c ? d.left - (m.left - d.left) : m.left, top: u ? d.top - (m.top - d.top) : m.top }, o), O(l))), s({ visibleArea: l, type: "move" }));
  }
  return { coordinates: a, visibleArea: l };
}
function Ct(e) {
  var t = e.directions, i = e.coordinates, o = e.positionRestrictions, s = o === void 0 ? {} : o, n = e.sizeRestrictions, r = e.preserveRatio, h = e.compensate, a = p({}, t), l = q(i, a).width, c = q(i, a).height;
  l < 0 && (a.left < 0 && a.right < 0 ? (a.left = -(i.width - n.minWidth) / (a.left / a.right), a.right = -(i.width - n.minWidth) / (a.right / a.left)) : a.left < 0 ? a.left = -(i.width - n.minWidth) : a.right < 0 && (a.right = -(i.width - n.minWidth))), c < 0 && (a.top < 0 && a.bottom < 0 ? (a.top = -(i.height - n.minHeight) / (a.top / a.bottom), a.bottom = -(i.height - n.minHeight) / (a.bottom / a.top)) : a.top < 0 ? a.top = -(i.height - n.minHeight) : a.bottom < 0 && (a.bottom = -(i.height - n.minHeight)));
  var u = Re(q(i, a), s);
  h && (u.left && u.left > 0 && u.right === 0 ? (a.right += u.left, a.left -= u.left) : u.right && u.right > 0 && u.left === 0 && (a.left += u.right, a.right -= u.right), u.top && u.top > 0 && u.bottom === 0 ? (a.bottom += u.top, a.top -= u.top) : u.bottom && u.bottom > 0 && u.top === 0 && (a.top += u.bottom, a.bottom -= u.bottom), u = Re(q(i, a), s));
  var d = { width: 1 / 0, height: 1 / 0, left: 1 / 0, right: 1 / 0, top: 1 / 0, bottom: 1 / 0 };
  if (K.forEach((function(w) {
    var I = u[w];
    I && a[w] && (d[w] = Math.max(0, 1 - I / a[w]));
  })), r) {
    var m = Math.min.apply(null, K.map((function(w) {
      return d[w];
    })));
    m !== 1 / 0 && K.forEach((function(w) {
      a[w] *= m;
    }));
  } else K.forEach((function(w) {
    d[w] !== 1 / 0 && (a[w] *= d[w]);
  }));
  if (l = q(i, a).width, c = q(i, a).height, a.right + a.left && (l > n.maxWidth ? d.width = (n.maxWidth - i.width) / (a.right + a.left) : l < n.minWidth && (d.width = (n.minWidth - i.width) / (a.right + a.left))), a.bottom + a.top && (c > n.maxHeight ? d.height = (n.maxHeight - i.height) / (a.bottom + a.top) : c < n.minHeight && (d.height = (n.minHeight - i.height) / (a.bottom + a.top))), r) {
    var b = Math.min(d.width, d.height);
    b !== 1 / 0 && K.forEach((function(w) {
      a[w] *= b;
    }));
  } else d.width !== 1 / 0 && Fi.forEach((function(w) {
    a[w] *= d.width;
  })), d.height !== 1 / 0 && Vi.forEach((function(w) {
    a[w] *= d.height;
  }));
  return a;
}
function De(e, t, i) {
  return t == 0 && i == 0 ? e / 2 : t == 0 ? 0 : i == 0 ? e : e * Math.abs(t / (t + i));
}
var an = Z("vue-simple-handler"), rn = Z("vue-simple-handler-wrapper"), it = { name: "SimpleHandler", components: { HandlerWrapper: Ut }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, horizontalPosition: { type: String }, verticalPosition: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  var e, t = (V(e = {}, this.horizontalPosition, !!this.horizontalPosition), V(e, this.verticalPosition, !!this.verticalPosition), V(e, "".concat(this.horizontalPosition, "-").concat(this.verticalPosition), !!(this.verticalPosition && this.horizontalPosition)), V(e, "hover", this.hover), e);
  return { default: D(an(t), this.defaultClass, this.hover && this.hoverClass), wrapper: D(rn(t), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
it.render = function(e, t, i, o, s, n) {
  var r = X("HandlerWrapper");
  return v(), E(r, { class: n.classes.wrapper, "vertical-position": i.verticalPosition, "horizontal-position": i.horizontalPosition, disabled: i.disabled, onDrag: n.onDrag, onDragEnd: n.onDragEnd, onEnter: n.onEnter, onLeave: n.onLeave }, { default: F((function() {
    return [x("div", { class: n.classes.default }, null, 2)];
  })), _: 1 }, 8, ["class", "vertical-position", "horizontal-position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var hn = Z("vue-simple-line"), ln = Z("vue-simple-line-wrapper"), nt = { name: "SimpleLine", components: { LineWrapper: kt }, props: { defaultClass: { type: String }, hoverClass: { type: String }, wrapperClass: { type: String }, position: { type: String }, disabled: { type: Boolean, default: !1 } }, data: function() {
  return { hover: !1 };
}, computed: { classes: function() {
  return { root: D(hn(V({}, this.position, !0)), this.defaultClass, this.hover && this.hoverClass), wrapper: D(ln(V({}, this.position, !0)), this.wrapperClass) };
} }, methods: { onDrag: function(e) {
  this.$emit("drag", e);
}, onEnter: function() {
  this.hover = !0;
}, onLeave: function() {
  this.hover = !1;
}, onDragEnd: function() {
  this.$emit("drag-end");
} }, emits: ["drag", "drag-end"] };
nt.render = function(e, t, i, o, s, n) {
  var r = X("LineWrapper");
  return v(), E(r, { class: n.classes.wrapper, position: i.position, disabled: i.disabled, onDrag: n.onDrag, onDragEnd: n.onDragEnd, onEnter: n.onEnter, onLeave: n.onLeave }, { default: F((function() {
    return [x("div", { class: n.classes.root }, null, 2)];
  })), _: 1 }, 8, ["class", "position", "disabled", "onDrag", "onDragEnd", "onEnter", "onLeave"]);
};
var Xe = Z("vue-bounding-box"), cn = ["east", "west", null], un = ["south", "north", null], _t = { name: "BoundingBox", props: { width: { type: Number }, height: { type: Number }, transitions: { type: Object }, handlers: { type: Object, default: function() {
  return { eastNorth: !0, north: !0, westNorth: !0, west: !0, westSouth: !0, south: !0, eastSouth: !0, east: !0 };
} }, handlersComponent: { type: [Object, String], default: function() {
  return it;
} }, handlersClasses: { type: Object, default: function() {
  return {};
} }, handlersWrappersClasses: { type: Object, default: function() {
  return {};
} }, lines: { type: Object, default: function() {
  return { west: !0, north: !0, east: !0, south: !0 };
} }, linesComponent: { type: [Object, String], default: function() {
  return nt;
} }, linesClasses: { type: Object, default: function() {
  return {};
} }, linesWrappersClasses: { type: Object, default: function() {
  return {};
} }, resizable: { type: Boolean, default: !0 } }, data: function() {
  var e = [];
  return cn.forEach((function(t) {
    un.forEach((function(i) {
      if (t !== i) {
        var o = Pt(t, i), s = o.name, n = o.classname;
        e.push({ name: s, classname: n, verticalDirection: i, horizontalDirection: t });
      }
    }));
  })), { points: e };
}, computed: { style: function() {
  var e = {};
  return this.width && this.height && (e.width = "".concat(this.width, "px"), e.height = "".concat(this.height, "px"), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction))), e;
}, classes: function() {
  var e = this.handlersClasses, t = this.handlersWrappersClasses, i = this.linesClasses, o = this.linesWrappersClasses;
  return { root: Xe(), handlers: e, handlersWrappers: t, lines: i, linesWrappers: o };
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
        var r = s.horizontalDirection, h = s.verticalDirection, a = r === "east" ? i : r === "west" ? 0 : i / 2, l = h === "south" ? o : h === "north" ? 0 : o / 2;
        n.wrapperClass = Xe("handler"), n.wrapperStyle = { transform: "translate(".concat(a, "px, ").concat(l, "px)") }, e.transitions && e.transitions.enabled && (n.wrapperStyle.transition = "".concat(e.transitions.time, "ms ").concat(e.transitions.timingFunction));
      } else n.wrapperClass = Xe("handler", V({}, s.classname, !0));
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
  var o, s = e.shift(), n = s.left, r = s.top, h = { left: 0, right: 0, top: 0, bottom: 0 };
  t === "west" ? h.left -= n : t === "east" && (h.right += n), i === "north" ? h.top -= r : i === "south" && (h.bottom += r), !i && t ? o = "width" : i && !t && (o = "height"), this.resizable && this.$emit("resize", new Bi(h, { allowedDirections: { left: t === "west" || !t, right: t === "east" || !t, bottom: i === "south" || !i, top: i === "north" || !i }, preserveAspectRatio: e.nativeEvent && e.nativeEvent.shiftKey, respectDirection: o }));
} }, emits: ["resize", "resize-end"] };
_t.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "box", class: n.classes.root, style: n.style }, [he(e.$slots, "default"), x("div", null, [(v(!0), E(ye, null, dt(n.lineNodes, (function(r) {
    return v(), E(Oe(r.component), { key: r.name, "default-class": r.class, "hover-class": r.hoverClass, "wrapper-class": r.wrapperClass, position: r.name, disabled: r.disabled, onDrag: function(h) {
      return n.onHandlerDrag(h, r.horizontalDirection, r.verticalDirection);
    }, onDragEnd: t[1] || (t[1] = function(h) {
      return n.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "position", "disabled", "onDrag"]);
  })), 128))]), (v(!0), E(ye, null, dt(n.handlerNodes, (function(r) {
    return v(), E("div", { key: r.name, style: r.wrapperStyle, class: r.wrapperClass }, [(v(), E(Oe(r.component), { "default-class": r.class, "hover-class": r.hoverClass, "wrapper-class": r.wrapperClass, "horizontal-position": r.horizontalDirection, "vertical-position": r.verticalDirection, disabled: r.disabled, onDrag: function(h) {
      return n.onHandlerDrag(h, r.horizontalDirection, r.verticalDirection);
    }, onDragEnd: t[2] || (t[2] = function(h) {
      return n.onEnd();
    }) }, null, 8, ["default-class", "hover-class", "wrapper-class", "horizontal-position", "vertical-position", "disabled", "onDrag"]))], 6);
  })), 128))], 6);
};
var dn = Z("vue-draggable-area"), Ft = { name: "DraggableArea", props: { movable: { type: Boolean, default: !0 }, activationDistance: { type: Number, default: 20 } }, computed: { classnames: function() {
  return { default: dn() };
} }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, mounted: function() {
  this.touches = [], this.touchStarted = !1;
}, methods: { onTouchStart: function(e) {
  if (e.cancelable) {
    var t = this.movable && e.touches.length === 1;
    t && (this.touches = re(e.touches)), (this.touchStarted || t) && (e.preventDefault(), e.stopPropagation());
  }
}, onTouchEnd: function() {
  this.touchStarted = !1, this.processEnd();
}, onTouchMove: function(e) {
  this.touches.length >= 1 && (this.touchStarted ? (this.processMove(e, e.touches), e.preventDefault(), e.stopPropagation()) : Ht({ x: this.touches[0].clientX, y: this.touches[0].clientY }, { x: e.touches[0].clientX, y: e.touches[0].clientY }) > this.activationDistance && (this.initAnchor({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY }), this.touchStarted = !0));
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
  var i = re(t);
  if (this.touches.length) {
    var o = this.$refs.container.getBoundingClientRect(), s = o.left, n = o.top;
    this.touches.length === 1 && i.length === 1 && this.$emit("move", new et({ left: i[0].clientX - (s + this.anchor.x), top: i[0].clientY - (n + this.anchor.y) }));
  }
}, processEnd: function() {
  this.touches.length && this.$emit("move-end"), this.touches = [];
} }, emits: ["move", "move-end"] };
Ft.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "container", onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 544);
};
function Ne(e) {
  var t, i;
  return { rotate: e.rotate || 0, flip: { horizontal: ((t = e?.flip) === null || t === void 0 ? void 0 : t.horizontal) || !1, vertical: ((i = e?.flip) === null || i === void 0 ? void 0 : i.vertical) || !1 } };
}
function fn(e) {
  return new Promise((function(t, i) {
    try {
      if (e) if (/^data:/i.test(e)) t((function(a) {
        a = a.replace(/^data:([^;]+);base64,/gim, "");
        for (var l = atob(a), c = l.length, u = new ArrayBuffer(c), d = new Uint8Array(u), m = 0; m < c; m++) d[m] = l.charCodeAt(m);
        return u;
      })(e));
      else if (/^blob:/i.test(e)) {
        var o = new FileReader();
        o.onload = function(a) {
          t(a.target.result);
        }, n = e, r = function(a) {
          o.readAsArrayBuffer(a);
        }, (h = new XMLHttpRequest()).open("GET", n, !0), h.responseType = "blob", h.onload = function() {
          this.status != 200 && this.status !== 0 || r(this.response);
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
    } catch (a) {
      i(a);
    }
    var n, r, h;
  }));
}
function Vt(e) {
  var t = e.rotate, i = e.flip, o = e.scaleX, s = e.scaleY, n = "";
  return n += " rotate(" + t + "deg) ", n += " scaleX(" + o * (i.horizontal ? -1 : 1) + ") ", n += " scaleY(" + s * (i.vertical ? -1 : 1) + ") ";
}
function mn(e) {
  try {
    var t, i = new DataView(e), o = void 0, s = void 0, n = void 0, r = void 0;
    if (i.getUint8(0) === 255 && i.getUint8(1) === 216) for (var h = i.byteLength, a = 2; a + 1 < h; ) {
      if (i.getUint8(a) === 255 && i.getUint8(a + 1) === 225) {
        n = a;
        break;
      }
      a++;
    }
    if (n && (o = n + 10, (function(m, b, w) {
      var I, L = "";
      for (I = b, w += b; I < w; I++) L += String.fromCharCode(m.getUint8(I));
      return L;
    })(i, n + 4, 4) === "Exif")) {
      var l = i.getUint16(o);
      if (((s = l === 18761) || l === 19789) && i.getUint16(o + 2, s) === 42) {
        var c = i.getUint32(o + 4, s);
        c >= 8 && (r = o + c);
      }
    }
    if (r) {
      for (var u = i.getUint16(r, s), d = 0; d < u; d++)
        if (a = r + 12 * d + 2, i.getUint16(a, s) === 274) {
          a += 8, t = i.getUint16(a, s), i.setUint16(a, 1, s);
          break;
        }
    }
    return t;
  } catch {
    return null;
  }
}
function Tt(e, t) {
  var i = t.getBoundingClientRect(), o = i.left, s = i.top, n = { left: 0, top: 0 }, r = 0;
  return e.forEach((function(h) {
    n.left += (h.clientX - o) / e.length, n.top += (h.clientY - s) / e.length;
  })), e.forEach((function(h) {
    r += Ht({ x: n.left, y: n.top }, { x: h.clientX - o, y: h.clientY - s });
  })), { centerMass: n, spread: r, count: e.length };
}
var Xt = { props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 }, eventsFilter: { type: Function, required: !1 } }, beforeMount: function() {
  window.addEventListener("mouseup", this.onMouseUp, { passive: !1 }), window.addEventListener("mousemove", this.onMouseMove, { passive: !1 }), window.addEventListener("touchmove", this.onTouchMove, { passive: !1 }), window.addEventListener("touchend", this.onTouchEnd, { passive: !1 });
}, beforeUnmount: function() {
  window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousemove", this.onMouseMove), window.removeEventListener("touchmove", this.onTouchMove), window.removeEventListener("touchend", this.onTouchEnd);
}, created: function() {
  this.transforming = !1, this.debouncedProcessEnd = Ze(this.processEnd), this.touches = [];
}, methods: { processMove: function(e, t) {
  if (this.touches.length) {
    if (this.touches.length === 1 && t.length === 1) this.$emit("move", new ze({ left: this.touches[0].clientX - t[0].clientX, top: this.touches[0].clientY - t[0].clientY }));
    else if (this.touches.length > 1 && this.touchResize) {
      var i = Tt(t, this.$refs.container), o = this.oldGeometricProperties;
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
    var t = this.$refs.container, i = t.getBoundingClientRect(), o = i.left, s = i.top, n = i.bottom, r = i.right;
    this.touches = re(e.touches).filter((function(h) {
      return h.clientX > o && h.clientX < r && h.clientY > s && h.clientY < n;
    })), this.oldGeometricProperties = Tt(this.touches, t);
  }
}, onTouchEnd: function(e) {
  e.touches.length === 0 && (this.touches = [], this.processEnd());
}, onTouchMove: function(e) {
  var t = this;
  if (this.touches.length) {
    var i = re(e.touches).filter((function(o) {
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
    var t = this.$refs.container.getBoundingClientRect(), i = t.left, o = t.top, s = 1 + this.wheelResize.ratio * (r = e.deltaY || e.detail || e.wheelDelta, (h = +r) == 0 || Ot(h) ? h : h > 0 ? 1 : -1), n = { left: e.clientX - i, top: e.clientY - o };
    this.$emit("resize", new ze({}, { factor: s, center: n })), this.touches.length || this.debouncedProcessEnd();
  }
  var r, h;
} }, emits: ["resize", "move", "transform-end"] };
Xt.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "container", onTouchstart: t[1] || (t[1] = function() {
    return n.onTouchStart && n.onTouchStart.apply(n, arguments);
  }), onMousedown: t[2] || (t[2] = function() {
    return n.onMouseDown && n.onMouseDown.apply(n, arguments);
  }), onWheel: t[3] || (t[3] = function() {
    return n.onWheel && n.onWheel.apply(n, arguments);
  }) }, [he(e.$slots, "default")], 544);
};
var Je = { components: { TransformableImage: Xt }, props: { touchMove: { type: Boolean, required: !0 }, mouseMove: { type: Boolean, required: !0 }, touchResize: { type: Boolean, required: !0 }, wheelResize: { type: [Boolean, Object], required: !0 } }, emits: ["resize", "move"] };
Je.render = function(e, t, i, o, s, n) {
  var r = X("transformable-image");
  return v(), E(r, { "touch-move": i.touchMove, "touch-resize": i.touchResize, "mouse-move": i.mouseMove, "wheel-resize": i.wheelResize, onMove: t[1] || (t[1] = function(h) {
    return e.$emit("move", h);
  }), onResize: t[2] || (t[2] = function(h) {
    return e.$emit("resize", h);
  }) }, { default: F((function() {
    return [he(e.$slots, "default")];
  })), _: 3 }, 8, ["touch-move", "touch-resize", "mouse-move", "wheel-resize"]);
};
var Pe = Z("vue-preview"), Nt = { props: { coordinates: { type: Object }, transitions: { type: Object }, image: { type: Object, default: function() {
  return {};
} }, imageClass: { type: String }, width: { type: Number }, height: { type: Number }, fill: { type: Boolean } }, data: function() {
  return { calculatedImageSize: { width: 0, height: 0 }, calculatedSize: { width: 0, height: 0 } };
}, computed: { classes: function() {
  return { root: Pe({ fill: this.fill }), wrapper: Pe("wrapper"), imageWrapper: Pe("image-wrapper"), image: D(Pe("image"), this.imageClass) };
}, style: function() {
  if (this.fill) return {};
  var e = {};
  return this.width && (e.width = "".concat(this.size.width, "px")), this.height && (e.height = "".concat(this.size.height, "px")), this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, wrapperStyle: function() {
  var e = { width: "".concat(this.size.width, "px"), height: "".concat(this.size.height, "px"), left: "calc(50% - ".concat(this.size.width / 2, "px)"), top: "calc(50% - ".concat(this.size.height / 2, "px)") };
  return this.transitions && this.transitions.enabled && (e.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), e;
}, imageStyle: function() {
  if (this.coordinates && this.image) {
    var e = this.coordinates.width / this.size.width, t = z(z({ rotate: 0, flip: { horizontal: !1, vertical: !1 } }, this.image.transforms), {}, { scaleX: 1 / e, scaleY: 1 / e }), i = this.imageSize.width, o = this.imageSize.height, s = Bt({ width: i, height: o }, t.rotate), n = { width: "".concat(i, "px"), height: "".concat(o, "px"), left: "0px", top: "0px" }, r = { rotate: { left: (i - s.width) * t.scaleX / 2, top: (o - s.height) * t.scaleY / 2 }, scale: { left: (1 - t.scaleX) * i / 2, top: (1 - t.scaleY) * o / 2 } };
    return n.transform = `translate(
				`.concat(-this.coordinates.left / e - r.rotate.left - r.scale.left, "px,").concat(-this.coordinates.top / e - r.rotate.top - r.scale.top, "px) ") + Vt(t), this.transitions && this.transitions.enabled && (n.transition = "".concat(this.transitions.time, "ms ").concat(this.transitions.timingFunction)), n;
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
Nt.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "root", class: n.classes.root, style: n.style }, [x("div", { ref: "wrapper", class: n.classes.wrapper, style: n.wrapperStyle }, [It(x("img", { ref: "image", src: i.image && i.image.src, class: n.classes.image, style: n.imageStyle }, null, 14, ["src"]), [[Wt, i.image && i.image.src]])], 6)], 6);
};
var Yt = { components: { Preview: Nt }, inheritAttrs: !1 };
Yt.render = function(e, t, i, o, s, n) {
  var r = X("preview");
  return v(), E(r, Dt(e.$attrs, { fill: !0 }), null, 16);
};
var Ye = Z("vue-rectangle-stencil"), ot = { name: "RectangleStencil", components: { StencilPreview: Yt, BoundingBox: _t, DraggableArea: Ft }, props: { image: { type: Object }, coordinates: { type: Object }, stencilCoordinates: { type: Object }, handlers: { type: Object }, handlersComponent: { type: [Object, String], default: function() {
  return it;
} }, lines: { type: Object }, linesComponent: { type: [Object, String], default: function() {
  return nt;
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
  return { stencil: D(Ye({ movable: this.movable, moving: this.moving, resizing: this.resizing }), this.moving && this.movingClass, this.resizing && this.resizingClass), preview: D(Ye("preview"), this.previewClass), boundingBox: D(Ye("bounding-box"), this.boundingBoxClass) };
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
ot.render = function(e, t, i, o, s, n) {
  var r = X("stencil-preview"), h = X("draggable-area"), a = X("bounding-box");
  return v(), E("div", { class: n.classes.stencil, style: n.style }, [x(a, { width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, transitions: i.transitions, class: n.classes.boundingBox, handlers: i.handlers, "handlers-component": i.handlersComponent, "handlers-classes": i.handlersClasses, "handlers-wrappers-classes": i.handlersWrappersClasses, lines: i.lines, "lines-component": i.linesComponent, "lines-classes": i.linesClasses, "lines-wrappers-classes": i.linesWrappersClasses, resizable: i.resizable, onResize: n.onResize, onResizeEnd: n.onResizeEnd }, { default: F((function() {
    return [x(h, { movable: i.movable, onMove: n.onMove, onMoveEnd: n.onMoveEnd }, { default: F((function() {
      return [x(r, { image: i.image, coordinates: i.coordinates, width: i.stencilCoordinates.width, height: i.stencilCoordinates.height, class: n.classes.preview, transitions: i.transitions }, null, 8, ["image", "coordinates", "width", "height", "class", "transitions"])];
    })), _: 1 }, 8, ["movable", "onMove", "onMoveEnd"])];
  })), _: 1 }, 8, ["width", "height", "transitions", "class", "handlers", "handlers-component", "handlers-classes", "handlers-wrappers-classes", "lines", "lines-component", "lines-classes", "lines-wrappers-classes", "resizable", "onResize", "onResizeEnd"])], 6);
};
var pn = ["transitions"], ee = Z("vue-advanced-cropper"), Gt = { name: "Cropper", components: { BackgroundWrapper: Je }, props: { src: { type: String, default: null }, stencilComponent: { type: [Object, String], default: function() {
  return ot;
} }, backgroundWrapperComponent: { type: [Object, String], default: function() {
  return Je;
} }, stencilProps: { type: Object, default: function() {
  return {};
} }, autoZoom: { type: Boolean, default: !1 }, imageClass: { type: String }, boundariesClass: { type: String }, backgroundClass: { type: String }, foregroundClass: { type: String }, minWidth: { type: [Number, String] }, minHeight: { type: [Number, String] }, maxWidth: { type: [Number, String] }, maxHeight: { type: [Number, String] }, debounce: { type: [Boolean, Number], default: 500 }, transitions: { type: Boolean, default: !0 }, checkOrientation: { type: Boolean, default: !0 }, canvas: { type: [Object, Boolean], default: !0 }, crossOrigin: { type: [Boolean, String], default: void 0 }, transitionTime: { type: Number, default: 300 }, imageRestriction: { type: String, default: "fit-area", validator: function(e) {
  return Ni.indexOf(e) !== -1;
} }, roundResult: { type: Boolean, default: !0 }, defaultSize: { type: [Function, Object] }, defaultPosition: { type: [Function, Object] }, defaultVisibleArea: { type: [Function, Object] }, defaultTransforms: { type: [Function, Object] }, defaultBoundaries: { type: [Function, String], validator: function(e) {
  return !(typeof e == "string" && e !== "fill" && e !== "fit");
} }, priority: { type: String, default: "coordinates" }, stencilSize: { type: [Object, Function] }, resizeImage: { type: [Boolean, Object], default: !0 }, moveImage: { type: [Boolean, Object], default: !0 }, autoZoomAlgorithm: { type: Function }, resizeAlgorithm: { type: Function, default: function(e) {
  var t = e.event, i = e.coordinates, o = e.aspectRatio, s = e.positionRestrictions, n = e.sizeRestrictions, r = p(p({}, i), { right: i.left + i.width, bottom: i.top + i.height }), h = t.params || {}, a = p({}, t.directions), l = h.allowedDirections || { left: !0, right: !0, bottom: !0, top: !0 };
  n.widthFrozen && (a.left = 0, a.right = 0), n.heightFrozen && (a.top = 0, a.bottom = 0), K.forEach((function(_) {
    l[_] || (a[_] = 0);
  }));
  var c = q(r, a = Ct({ coordinates: r, directions: a, sizeRestrictions: n, positionRestrictions: s })).width, u = q(r, a).height, d = h.preserveRatio ? R(r) : Ve(c / u, o);
  if (d) {
    var m = h.respectDirection;
    if (m || (m = r.width >= r.height || d === 1 ? "width" : "height"), m === "width") {
      var b = c / d - r.height;
      if (l.top && l.bottom) {
        var w = a.top, I = a.bottom;
        a.bottom = De(b, I, w), a.top = De(b, w, I);
      } else l.bottom ? a.bottom = b : l.top ? a.top = b : l.right ? a.right = 0 : l.left && (a.left = 0);
    } else if (m === "height") {
      var L = r.width - u * d;
      if (l.left && l.right) {
        var C = a.left, U = a.right;
        a.left = -De(L, C, U), a.right = -De(L, U, C);
      } else l.left ? a.left = -L : l.right ? a.right = -L : l.top ? a.top = 0 : l.bottom && (a.bottom = 0);
    }
    a = Ct({ directions: a, coordinates: r, sizeRestrictions: n, positionRestrictions: s, preserveRatio: !0, compensate: h.compensate });
  }
  return c = q(r, a).width, u = q(r, a).height, (d = h.preserveRatio ? R(r) : Ve(c / u, o)) && Math.abs(d - c / u) > 1e-3 && K.forEach((function(_) {
    l[_] || (a[_] = 0);
  })), Qe({ event: new et({ left: -a.left, top: -a.top }), coordinates: { width: i.width + a.right + a.left, height: i.height + a.top + a.bottom, left: i.left, top: i.top }, positionRestrictions: s });
} }, moveAlgorithm: { type: Function, default: Qe }, initStretcher: { type: Function, default: function(e) {
  var t = e.stretcher, i = e.imageSize, o = R(i);
  t.style.width = i.width + "px", t.style.height = t.clientWidth / o + "px", t.style.width = t.clientWidth + "px";
} }, fitCoordinates: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.coordinates, o = e.aspectRatio, s = e.sizeRestrictions, n = e.positionRestrictions, r = p(p({}, i), te({ width: i.width, height: i.height, aspectRatio: o, sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minHeight: Math.min(t.height, s.minHeight), minWidth: Math.min(t.width, s.minWidth) } }));
  return r = H(r = j(r, fe(O(i), O(r))), ke(Q(t), n));
} }, fitVisibleArea: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.boundaries, o = e.getAreaRestrictions, s = e.coordinates, n = p({}, t);
  n.height = n.width / R(i), n.top += (t.height - n.height) / 2, (s.height - n.height > 0 || s.width - n.width > 0) && (n = N(n, Math.max(s.height / n.height, s.width / n.width)));
  var r = He(pe(s, Q(n = N(n, Ue(n, o({ visibleArea: n, type: "resize" }))))));
  return n.width < s.width && (r.left = 0), n.height < s.height && (r.top = 0), n = H(n = j(n, r), o({ visibleArea: n, type: "move" }));
} }, areaRestrictionsAlgorithm: { type: Function, default: function(e) {
  var t = e.visibleArea, i = e.boundaries, o = e.imageSize, s = e.imageRestriction, n = e.type, r = {};
  return s === "fill-area" ? r = { left: 0, top: 0, right: o.width, bottom: o.height } : s === "fit-area" && (R(i) > R(o) ? (r = { top: 0, bottom: o.height }, t && n === "move" && (t.width > o.width ? (r.left = -(t.width - o.width) / 2, r.right = o.width - r.left) : (r.left = 0, r.right = o.width))) : (r = { left: 0, right: o.width }, t && n === "move" && (t.height > o.height ? (r.top = -(t.height - o.height) / 2, r.bottom = o.height - r.top) : (r.top = 0, r.bottom = o.height)))), r;
} }, sizeRestrictionsAlgorithm: { type: Function, default: function(e) {
  return { minWidth: e.minWidth, minHeight: e.minHeight, maxWidth: e.maxWidth, maxHeight: e.maxHeight };
} }, positionRestrictionsAlgorithm: { type: Function, default: function(e) {
  var t = e.imageSize, i = {};
  return e.imageRestriction !== "none" && (i = { left: 0, top: 0, right: t.width, bottom: t.height }), i;
} } }, data: function() {
  return { transitionsActive: !1, imageLoaded: !1, imageAttributes: { width: null, height: null, crossOrigin: null, src: null }, defaultImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, appliedImageTransforms: { rotate: 0, flip: { horizontal: !1, vertical: !1 } }, boundaries: { width: 0, height: 0 }, visibleArea: null, coordinates: z({}, Mt) };
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
  var e = qe(this.resizeImage, { touch: !0, wheel: { ratio: 0.1 }, adjustStencil: !0 }, { touch: !1, wheel: !1, adjustStencil: !1 });
  return { moveImage: qe(this.moveImage, { touch: !0, mouse: !0 }, { touch: !1, mouse: !1 }), resizeImage: e };
}, coefficient: function() {
  return this.visibleArea ? this.visibleArea.width / this.boundaries.width : 0;
}, areaRestrictions: function() {
  return this.imageLoaded ? this.areaRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction, boundaries: this.boundaries }) : {};
}, transitionsOptions: function() {
  return { enabled: this.transitionsActive, timingFunction: "ease-in-out", time: 350 };
}, sizeRestrictions: function() {
  if (this.boundaries.width && this.boundaries.height && this.imageSize.width && this.imageSize.height) {
    var e = this.sizeRestrictionsAlgorithm({ imageSize: this.imageSize, minWidth: P(this.minWidth) ? 0 : Ie(this.minWidth), minHeight: P(this.minHeight) ? 0 : Ie(this.minHeight), maxWidth: P(this.maxWidth) ? 1 / 0 : Ie(this.maxWidth), maxHeight: P(this.maxHeight) ? 1 / 0 : Ie(this.maxHeight) });
    if (e = (function(o) {
      var s = o.areaRestrictions, n = o.sizeRestrictions, r = o.boundaries, h = o.positionRestrictions, a = p(p({}, n), { minWidth: n.minWidth !== void 0 ? n.minWidth : 0, minHeight: n.minHeight !== void 0 ? n.minHeight : 0, maxWidth: n.maxWidth !== void 0 ? n.maxWidth : 1 / 0, maxHeight: n.maxHeight !== void 0 ? n.maxHeight : 1 / 0 });
      h.left !== void 0 && h.right !== void 0 && (a.maxWidth = Math.min(a.maxWidth, h.right - h.left)), h.bottom !== void 0 && h.top !== void 0 && (a.maxHeight = Math.min(a.maxHeight, h.bottom - h.top));
      var l = Ke(s), c = $t(r, l);
      return l.width < 1 / 0 && (!a.maxWidth || a.maxWidth > c.width) && (a.maxWidth = Math.min(a.maxWidth, c.width)), l.height < 1 / 0 && (!a.maxHeight || a.maxHeight > c.height) && (a.maxHeight = Math.min(a.maxHeight, c.height)), a.minWidth > a.maxWidth && (a.minWidth = a.maxWidth, a.widthFrozen = !0), a.minHeight > a.maxHeight && (a.minHeight = a.maxHeight, a.heightFrozen = !0), a;
    })({ sizeRestrictions: e, areaRestrictions: this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }), imageSize: this.imageSize, boundaries: this.boundaries, positionRestrictions: this.positionRestrictions, imageRestriction: this.imageRestriction, visibleArea: this.visibleArea, stencilSize: this.getStencilSize() }), this.visibleArea && this.stencilSize) {
      var t = this.getStencilSize(), i = Ke(this.getAreaRestrictions({ visibleArea: this.visibleArea, type: "resize" }));
      e.maxWidth = Math.min(e.maxWidth, i.width * t.width / this.boundaries.width), e.maxHeight = Math.min(e.maxHeight, i.height * t.height / this.boundaries.height), e.maxWidth < e.minWidth && (e.minWidth = e.maxWidth), e.maxHeight < e.minHeight && (e.minHeight = e.maxHeight);
    }
    return e;
  }
  return { minWidth: 0, minHeight: 0, maxWidth: 0, maxHeight: 0 };
}, positionRestrictions: function() {
  return this.positionRestrictionsAlgorithm({ imageSize: this.imageSize, imageRestriction: this.imageRestriction });
}, classes: function() {
  return { cropper: ee(), image: D(ee("image"), this.imageClass), stencil: ee("stencil"), boundaries: D(ee("boundaries"), this.boundariesClass), stretcher: D(ee("stretcher")), background: D(ee("background"), this.backgroundClass), foreground: D(ee("foreground"), this.foregroundClass), imageWrapper: D(ee("image-wrapper")), cropperWrapper: D(ee("cropper-wrapper")) };
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
  var e = this.imageAttributes.width > this.imageAttributes.height ? { width: Math.min(1024, this.imageAttributes.width), height: Math.min(1024, this.imageAttributes.width) / (this.imageAttributes.width / this.imageAttributes.height) } : { height: Math.min(1024, this.imageAttributes.height), width: Math.min(1024, this.imageAttributes.height) * (this.imageAttributes.width / this.imageAttributes.height) }, t = { left: (e.width - this.imageSize.width) / (2 * this.coefficient), top: (e.height - this.imageSize.height) / (2 * this.coefficient) }, i = { left: (1 - 1 / this.coefficient) * e.width / 2, top: (1 - 1 / this.coefficient) * e.height / 2 }, o = z(z({}, this.imageTransforms), {}, { scaleX: this.imageTransforms.scaleX * (this.imageAttributes.width / e.width), scaleY: this.imageTransforms.scaleY * (this.imageAttributes.height / e.height) }), s = { width: "".concat(e.width, "px"), height: "".concat(e.height, "px"), left: "0px", top: "0px", transform: "translate(".concat(-t.left - i.left - this.imageTransforms.translateX, "px, ").concat(-t.top - i.top - this.imageTransforms.translateY, "px)") + Vt(o) };
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
  this.debouncedUpdate = Ze(this.update, this.debounce), this.debouncedDisableTransitions = Ze(this.disableTransitions, this.transitionsOptions.time), this.awaiting = !1;
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
  var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = i.autoZoom, s = o === void 0 || o, n = i.transitions, r = n === void 0 || n;
  this.$nextTick((function() {
    t.imageLoaded ? (t.transitionsActive || (r && t.enableTransitions(), t.coordinates = t.applyTransform(e), s && t.runAutoZoom("setCoordinates"), r && t.debouncedDisableTransitions()), t.onChange()) : t.delayedTransforms = e;
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
    return n.width > o.maxWidth ? n.width = Math.floor(i.width) : n.width < o.minWidth && (n.width = Math.ceil(i.width)), n.height > o.maxHeight ? n.height = Math.floor(i.height) : n.height < o.minHeight && (n.height = Math.ceil(i.height)), H(n, s);
  })(z(z({}, this.getPublicProperties()), {}, { positionRestrictions: We(this.positionRestrictions, this.visibleArea), coordinates: e })) : e;
}, processAutoZoom: function(e, t, i, o) {
  var s = this.autoZoomAlgorithm;
  s || (s = this.stencilSize ? Zi : this.autoZoom ? qi : Ki);
  var n = s({ event: { type: e, params: o }, visibleArea: t, coordinates: i, boundaries: this.boundaries, aspectRatio: this.getAspectRatio(), positionRestrictions: this.positionRestrictions, getAreaRestrictions: this.getAreaRestrictions, sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize() });
  return z(z({}, n), {}, { changed: !St(n.visibleArea, t) || !St(n.coordinates, i) });
}, runAutoZoom: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = t.transitions, o = i !== void 0 && i, s = ki(t, pn), n = this.processAutoZoom(e, this.visibleArea, this.coordinates, s), r = n.visibleArea, h = n.coordinates, a = n.changed;
  o && a && this.enableTransitions(), this.visibleArea = r, this.coordinates = h, o && a && this.debouncedDisableTransitions();
}, normalizeEvent: function(e) {
  return (function(t) {
    var i = t.event, o = t.visibleArea, s = t.coefficient;
    if (i.type === "manipulateImage") return p(p({}, i), { move: { left: i.move && i.move.left ? s * i.move.left : 0, top: i.move && i.move.top ? s * i.move.top : 0 }, scale: { factor: i.scale && i.scale.factor ? i.scale.factor : 1, center: i.scale && i.scale.center ? { left: i.scale.center.left * s + o.left, top: i.scale.center.top * s + o.top } : null } });
    if (i.type === "resize") {
      var n = p(p({}, i), { directions: p({}, i.directions) });
      return K.forEach((function(h) {
        n.directions[h] *= s;
      })), n;
    }
    if (i.type === "move") {
      var r = p(p({}, i), { directions: p({}, i.directions) });
      return Xi.forEach((function(h) {
        r.directions[h] *= s;
      })), r;
    }
    return i;
  })(z(z({}, this.getPublicProperties()), {}, { event: e }));
}, getCanvas: function() {
  if (this.$refs.canvas) {
    var e = this.$refs.canvas, t = this.$refs.image, i = this.imageTransforms.rotate !== 0 || this.imageTransforms.flip.horizontal || this.imageTransforms.flip.vertical ? (function(h, a, l) {
      var c = l.rotate, u = l.flip, d = { width: a.naturalWidth, height: a.naturalHeight }, m = Bt(d, c), b = h.getContext("2d");
      h.height = m.height, h.width = m.width, b.save();
      var w = ne(O(p({ left: 0, top: 0 }, d)), c);
      return b.translate(-(w.left - m.width / 2), -(w.top - m.height / 2)), b.rotate(c * Math.PI / 180), b.translate(u.horizontal ? d.width : 0, u.vertical ? d.height : 0), b.scale(u.horizontal ? -1 : 1, u.vertical ? -1 : 1), b.drawImage(a, 0, 0, d.width, d.height), b.restore(), h;
    })(this.$refs.sourceCanvas, t, this.imageTransforms) : t, o = z({ minWidth: 0, minHeight: 0, maxWidth: 1 / 0, maxHeight: 1 / 0, maxArea: this.maxCanvasSize, imageSmoothingEnabled: !0, imageSmoothingQuality: "high", fillColor: "transparent" }, this.canvas), s = function(h) {
      return h.find((function(a) {
        return l = a, !Number.isNaN(parseFloat(l)) && isFinite(l);
        var l;
      }));
    }, n = te({ sizeRestrictions: { minWidth: s([o.width, o.minWidth]) || 0, minHeight: s([o.height, o.minHeight]) || 0, maxWidth: s([o.width, o.maxWidth]) || 1 / 0, maxHeight: s([o.height, o.maxHeight]) || 1 / 0 }, width: this.coordinates.width, height: this.coordinates.height, aspectRatio: { minimum: this.coordinates.width / this.coordinates.height, maximum: this.coordinates.width / this.coordinates.height } });
    if (o.maxArea && n.width * n.height > o.maxArea) {
      var r = Math.sqrt(o.maxArea / (n.width * n.height));
      n = { width: Math.round(r * n.width), height: Math.round(r * n.height) };
    }
    return (function(h, a, l, c, u) {
      h.width = c ? c.width : l.width, h.height = c ? c.height : l.height;
      var d = h.getContext("2d");
      d.clearRect(0, 0, h.width, h.height), u && (u.imageSmoothingEnabled && (d.imageSmoothingEnabled = u.imageSmoothingEnabled), u.imageSmoothingQuality && (d.imageSmoothingQuality = u.imageSmoothingQuality), u.fillColor && (d.fillStyle = u.fillColor, d.fillRect(0, 0, h.width, h.height), d.save()));
      var m = l.left < 0 ? -l.left : 0, b = l.top < 0 ? -l.top : 0;
      d.drawImage(a, l.left + m, l.top + b, l.width, l.height, m * (h.width / l.width), b * (h.height / l.height), h.width, h.height);
    })(e, i, this.coordinates, n, o), e;
  }
}, update: function() {
  this.$emit("change", this.getResult());
}, applyTransform: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], i = this.visibleArea && t ? Yi(this.sizeRestrictions, this.visibleArea) : this.sizeRestrictions, o = this.visibleArea && t ? We(this.positionRestrictions, this.visibleArea) : this.positionRestrictions;
  return Gi({ transform: e, coordinates: this.coordinates, imageSize: this.imageSize, sizeRestrictions: i, positionRestrictions: o, aspectRatio: this.getAspectRatio(), visibleArea: this.visibleArea });
}, resetCoordinates: function() {
  var e = this;
  if (this.$refs.image) {
    this.$refs.cropper, this.$refs.image;
    var t = this.defaultSize;
    t || (t = this.stencilSize ? en : Ji);
    var i = this.sizeRestrictions;
    i.minWidth, i.minHeight, i.maxWidth, i.maxHeight;
    var o = de(t) ? t({ boundaries: this.boundaries, imageSize: this.imageSize, aspectRatio: this.getAspectRatio(), sizeRestrictions: this.sizeRestrictions, stencilSize: this.getStencilSize(), visibleArea: this.visibleArea }) : t, s = this.defaultPosition || Qi, n = [o, function(r) {
      var h = r.coordinates;
      return z({}, de(s) ? s({ coordinates: h, imageSize: e.imageSize, visibleArea: e.visibleArea }) : e.defaultPosition);
    }];
    this.delayedTransforms && n.push.apply(n, re(Array.isArray(this.delayedTransforms) ? this.delayedTransforms : [this.delayedTransforms])), this.coordinates = this.applyTransform(n, !0), this.delayedTransforms = null;
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
      var n = s.cropper, r = s.imageSize, h = n.clientHeight, a = n.clientWidth, l = h, c = r.width * h / r.height;
      return c > a && (c = a, l = r.height * a / r.width), { width: c, height: l };
    })(o) : e.boundaries = (function(s) {
      var n = s.cropper;
      return { width: n.clientWidth, height: n.clientHeight };
    })(o), !e.boundaries.width || !e.boundaries.height) throw new Error("It's impossible to fit the cropper in the current container");
  }));
}, resetVisibleArea: function() {
  var e = this;
  return this.appliedImageTransforms = z(z({}, this.defaultImageTransforms), {}, { flip: z({}, this.defaultImageTransforms.flip) }), this.updateBoundaries().then((function() {
    e.priority !== "visible-area" && (e.visibleArea = null, e.resetCoordinates());
    var t, i, o, s, n, r, h = e.defaultVisibleArea || tn;
    e.visibleArea = de(h) ? h({ imageSize: e.imageSize, boundaries: e.boundaries, coordinates: e.priority !== "visible-area" ? e.coordinates : null, getAreaRestrictions: e.getAreaRestrictions, stencilSize: e.getStencilSize() }) : e.defaultVisibleArea, e.visibleArea = (t = { visibleArea: e.visibleArea, boundaries: e.boundaries, getAreaRestrictions: e.getAreaRestrictions }, i = t.visibleArea, o = t.boundaries, s = t.getAreaRestrictions, n = p({}, i), r = R(o), n.width / n.height !== r && (n.height = n.width / r), H(n, s({ visibleArea: n, type: "move" }))), e.priority === "visible-area" ? e.resetCoordinates() : e.coordinates = e.fitCoordinates({ visibleArea: e.visibleArea, coordinates: e.coordinates, aspectRatio: e.getAspectRatio(), positionRestrictions: e.positionRestrictions, sizeRestrictions: e.sizeRestrictions }), e.runAutoZoom("resetVisibleArea");
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
      if (Rt(s)) return !1;
      var n = window.location, r = /(\w+:)?(?:\/\/)([\w.-]+)?(?::(\d+))?\/?/.exec(s) || [], h = { protocol: r[1] || "", host: r[2] || "", port: r[3] || "" }, a = function(l) {
        return l.port || ((l.protocol || n.protocol) === "http" ? 80 : 433);
      };
      return !(!h.protocol && !h.host && !h.port || h.protocol && h.protocol == n.protocol && h.host && h.host == n.host && h.host && a(h) == a(n));
    })(this.src)) {
      var i = P(this.crossOrigin) ? this.canvas : this.crossOrigin;
      i === !0 && (i = "anonymous"), this.imageAttributes.crossOrigin = i || null;
    }
    if (this.checkOrientation) {
      var o = (e = this.src, new Promise((function(s) {
        fn(e).then((function(n) {
          var r = mn(n);
          s(n ? { source: e, arrayBuffer: n, orientation: r } : { source: e, arrayBuffer: null, orientation: null });
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
  this.imageAttributes.revoke && this.imageAttributes.src && URL.revokeObjectURL(this.imageAttributes.src), this.imageAttributes.revoke = !1, o && s && s > 1 ? Lt(i) || !Rt(i) ? (this.imageAttributes.src = URL.createObjectURL(new Blob([o])), this.imageAttributes.revoke = !0) : this.imageAttributes.src = (function(n) {
    for (var r = [], h = new Uint8Array(n); h.length > 0; ) {
      var a = h.subarray(0, 8192);
      r.push(String.fromCharCode.apply(null, Array.from ? Array.from(a) : a.slice())), h = h.subarray(8192);
    }
    return "data:image/jpeg;base64," + btoa(r.join(""));
  })(o) : this.imageAttributes.src = i, de(this.defaultTransforms) ? this.appliedImageTransforms = Ne(this.defaultTransforms()) : Le(this.defaultTransforms) ? this.appliedImageTransforms = Ne(this.defaultTransforms) : this.appliedImageTransforms = (function(n) {
    var r = Ne({});
    if (n) switch (n) {
      case 2:
        r.flip.horizontal = !0;
        break;
      case 3:
        r.rotate = -180;
        break;
      case 4:
        r.flip.vertical = !0;
        break;
      case 5:
        r.rotate = 90, r.flip.vertical = !0;
        break;
      case 6:
        r.rotate = 90;
        break;
      case 7:
        r.rotate = 90, r.flip.horizontal = !0;
        break;
      case 8:
        r.rotate = -90;
    }
    return r;
  })(s), this.defaultImageTransforms = z(z({}, this.appliedImageTransforms), {}, { flip: z({}, this.appliedImageTransforms.flip) }), this.$nextTick((function() {
    var n = t.$refs.image;
    n && n.complete && ((function(r) {
      return !!r.naturalWidth;
    })(n) ? t.onSuccessLoadImage() : t.onFailLoadImage());
  }));
}, onResizeEnd: function() {
  this.runAutoZoom("resize", { transitions: !0 });
}, onMoveEnd: function() {
  this.runAutoZoom("move", { transitions: !0 });
}, onMove: function(e) {
  var t = this;
  this.transitionsOptions.enabled || this.awaitRender((function() {
    t.coordinates = t.moveAlgorithm(z(z({}, t.getPublicProperties()), {}, { positionRestrictions: We(t.positionRestrictions, t.visibleArea), coordinates: t.coordinates, event: t.normalizeEvent(e) })), t.onChange();
  }));
}, onResize: function(e) {
  var t = this;
  this.transitionsOptions.enabled || this.stencilSize && !this.autoZoom || this.awaitRender((function() {
    var i = t.sizeRestrictions, o = Math.min(t.coordinates.width, t.coordinates.height, 20 * t.coefficient);
    t.coordinates = t.resizeAlgorithm(z(z({}, t.getPublicProperties()), {}, { positionRestrictions: We(t.positionRestrictions, t.visibleArea), sizeRestrictions: { maxWidth: Math.min(i.maxWidth, t.visibleArea.width), maxHeight: Math.min(i.maxHeight, t.visibleArea.height), minWidth: Math.max(i.minWidth, o), minHeight: Math.max(i.minHeight, o) }, event: t.normalizeEvent(e) })), t.onChange(), t.ticking = !1;
  }));
}, onManipulateImage: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!this.transitionsOptions.enabled) {
    var i = t.transitions, o = i !== void 0 && i, s = t.normalize, n = s === void 0 || s;
    o && this.enableTransitions();
    var r = nn(z(z({}, this.getPublicProperties()), {}, { event: n ? this.normalizeEvent(e) : e, getAreaRestrictions: this.getAreaRestrictions, imageRestriction: this.imageRestriction, adjustStencil: !this.stencilSize && this.settings.resizeImage.adjustStencil })), h = r.visibleArea, a = r.coordinates;
    this.visibleArea = h, this.coordinates = a, this.runAutoZoom("manipulateImage"), this.onChange(), o && this.debouncedDisableTransitions();
  }
}, onPropsChange: function() {
  this.coordinates = this.applyTransform(this.coordinates, !0), this.onChange(!1);
}, getAreaRestrictions: function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.visibleArea, i = e.type, o = i === void 0 ? "move" : i;
  return this.areaRestrictionsAlgorithm({ boundaries: this.boundaries, imageSize: this.imageSize, imageRestriction: this.imageRestriction, visibleArea: t, type: o });
}, getAspectRatio: function(e) {
  var t, i, o = this.stencilProps, s = o.aspectRatio, n = o.minAspectRatio, r = o.maxAspectRatio;
  if (this.$refs.stencil && this.$refs.stencil.aspectRatios) {
    var h = this.$refs.stencil.aspectRatios();
    t = h.minimum, i = h.maximum;
  }
  if (P(t) && (t = P(s) ? n : s), P(i) && (i = P(s) ? r : s), !e && (P(t) || P(i))) {
    var a = this.getStencilSize(), l = a ? R(a) : null;
    P(t) && (t = At(l) ? l : void 0), P(i) && (i = At(l) ? l : void 0);
  }
  return { minimum: t, maximum: i };
}, getStencilSize: function() {
  if (this.stencilSize) return e = { currentStencilSize: { width: this.stencilCoordinates.width, height: this.stencilCoordinates.height }, stencilSize: this.stencilSize, boundaries: this.boundaries, coefficient: this.coefficient, coordinates: this.coordinates, aspectRatio: this.getAspectRatio(!0) }, t = e.boundaries, i = e.stencilSize, o = e.aspectRatio, Ve(R(s = de(i) ? i({ boundaries: t, aspectRatio: o }) : i), o) && (s = te({ sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minWidth: 0, minHeight: 0 }, width: s.width, height: s.height, aspectRatio: { minimum: o.minimum, maximum: o.maximum } })), (s.width > t.width || s.height > t.height) && (s = te({ sizeRestrictions: { maxWidth: t.width, maxHeight: t.height, minWidth: 0, minHeight: 0 }, width: s.width, height: s.height, aspectRatio: { minimum: R(s), maximum: R(s) } })), s;
  var e, t, i, o, s;
}, getPublicProperties: function() {
  return { coefficient: this.coefficient, visibleArea: this.visibleArea, coordinates: this.coordinates, boundaries: this.boundaries, sizeRestrictions: this.sizeRestrictions, positionRestrictions: this.positionRestrictions, aspectRatio: this.getAspectRatio(), imageRestriction: this.imageRestriction };
}, defaultCoordinates: function() {
  return z({}, Mt);
}, flip: function(e, t) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = i.transitions, s = o === void 0 || o;
  if (!this.transitionsActive) {
    s && this.enableTransitions();
    var n = z({}, this.imageTransforms.flip), r = sn({ flip: { horizontal: e ? !n.horizontal : n.horizontal, vertical: t ? !n.vertical : n.vertical }, previousFlip: n, rotate: this.imageTransforms.rotate, visibleArea: this.visibleArea, coordinates: this.coordinates, imageSize: this.imageSize, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), h = r.visibleArea, a = r.coordinates;
    e && (this.appliedImageTransforms.flip.horizontal = !this.appliedImageTransforms.flip.horizontal), t && (this.appliedImageTransforms.flip.vertical = !this.appliedImageTransforms.flip.vertical), this.visibleArea = h, this.coordinates = a, this.onChange(), s && this.debouncedDisableTransitions();
  }
}, rotate: function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = t.transitions, o = i === void 0 || i;
  if (!this.transitionsActive) {
    o && this.enableTransitions();
    var s = z({}, this.imageSize);
    this.appliedImageTransforms.rotate += e;
    var n = on({ visibleArea: this.visibleArea, coordinates: this.coordinates, previousImageSize: s, imageSize: this.imageSize, angle: e, positionRestrictions: this.positionRestrictions, sizeRestrictions: this.sizeRestrictions, getAreaRestrictions: this.getAreaRestrictions, aspectRatio: this.getAspectRatio() }), r = n.visibleArea, h = n.coordinates, a = this.processAutoZoom("rotateImage", r, h);
    r = a.visibleArea, h = a.coordinates, this.visibleArea = r, this.coordinates = h, this.onChange(), o && this.debouncedDisableTransitions();
  }
} }, emits: ["change", "error", "ready"] }, gn = { key: 0, ref: "canvas", style: { display: "none" } }, vn = { key: 1, ref: "sourceCanvas", style: { display: "none" } };
Gt.render = function(e, t, i, o, s, n) {
  return v(), E("div", { ref: "cropper", class: n.classes.cropper }, [x("div", { ref: "stretcher", class: n.classes.stretcher }, null, 2), x("div", { class: n.classes.boundaries, style: n.boundariesStyle }, [(v(), E(Oe(i.backgroundWrapperComponent), { class: n.classes.cropperWrapper, "wheel-resize": n.settings.resizeImage.wheel, "touch-resize": n.settings.resizeImage.touch, "touch-move": n.settings.moveImage.touch, "mouse-move": n.settings.moveImage.mouse, onMove: n.onManipulateImage, onResize: n.onManipulateImage }, { default: F((function() {
    return [x("div", { class: n.classes.background, style: n.boundariesStyle }, null, 6), x("div", { class: n.classes.imageWrapper }, [x("img", { ref: "image", crossorigin: s.imageAttributes.crossOrigin, src: s.imageAttributes.src, class: n.classes.image, style: n.imageStyle, onMousedown: t[1] || (t[1] = ci((function() {
    }), ["prevent"])) }, null, 46, ["crossorigin", "src"])], 2), x("div", { class: n.classes.foreground, style: n.boundariesStyle }, null, 6), It((v(), E(Oe(i.stencilComponent), Dt({ ref: "stencil", image: n.image, coordinates: s.coordinates, "stencil-coordinates": n.stencilCoordinates, transitions: n.transitionsOptions }, i.stencilProps, { onResize: n.onResize, onResizeEnd: n.onResizeEnd, onMove: n.onMove, onMoveEnd: n.onMoveEnd }), null, 16, ["image", "coordinates", "stencil-coordinates", "transitions", "onResize", "onResizeEnd", "onMove", "onMoveEnd"])), [[Wt, s.imageLoaded]]), i.canvas ? (v(), E("canvas", gn, null, 512)) : G("", !0), i.canvas ? (v(), E("canvas", vn, null, 512)) : G("", !0)];
  })), _: 1 }, 8, ["class", "wheel-resize", "touch-resize", "touch-move", "mouse-move", "onMove", "onResize"]))], 6)], 2);
};
const bn = { class: "image-upload-container" }, wn = {
  key: 0,
  class: "image-upload-mode-switch"
}, yn = {
  key: 1,
  class: "image-upload-url-input"
}, zn = {
  key: 0,
  class: "input-suffix-validating"
}, Rn = {
  key: 2,
  class: "image-upload-url-error"
}, An = {
  key: 0,
  class: "image-upload-uploading-overlay"
}, Mn = { class: "image-upload-progress-circle" }, Sn = ["stroke-dasharray"], xn = ["src"], En = ["src"], Cn = {
  key: 2,
  class: "image-upload-provider-badge"
}, Tn = {
  key: 3,
  class: "image-upload-provider-badge upload-failed-badge"
}, In = {
  key: 4,
  class: "image-upload-provider-badge",
  style: { background: "#ff9800" }
}, Wn = {
  key: 5,
  class: "image-upload-preview-actions"
}, Dn = ["title"], Pn = ["title"], Ln = {
  key: 0,
  class: "image-upload-progress"
}, On = { class: "progress-bar" }, Hn = { class: "progress-text" }, Un = { class: "upload-hint" }, kn = { class: "upload-sub-hint" }, $n = ["accept"], Bn = ["src"], jn = ["src"], _n = { class: "image-crop-body" }, Fn = {
  key: 0,
  class: "image-crop-loading"
}, Vn = { class: "image-crop-footer" }, Xn = { class: "btn-content" }, Nn = /* @__PURE__ */ ui({
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
    const o = wi("ImageUpload"), { t: s } = bi(), { opSuccess: n, opFailed: r } = yi(s);
    Ei(gt.Parser);
    const h = e, a = i, l = Ee(() => h.placeholder || s(M.CLICK_OR_DRAG_TO_UPLOAD_COVER_IMAGE)), c = Ee(() => h.urlPlaceholder || s(M.ENTER_IMAGE_URL)), u = Ee(() => h.acceptHint || s(M.SUPPORTS_IMAGE_FORMATS_MAX_MB, { max: h.maxSize })), d = T(null), m = T(null), b = T(!1), w = T(0), I = T(!1), L = T(""), C = T(!h.uploadEnabled), U = T(h.modelValue), _ = T(null), { previewUrl: $e, setPreview: Ae } = Oi(), ge = T(!1), ve = T(!1), {
      containerRef: Zt,
      playUrl: qt
    } = Hi({ loop: 1, autoPlay: !0 }), Be = T(null);
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
    function Kt(f) {
      qt(f).catch((g) => {
        o.error("ImageUpload", "SVGA preview load error:", g);
      });
    }
    function Qt(f) {
      we(), ft(() => {
        if (!Be.value) return;
        const g = new gt.Player(Be.value);
        g.loops = 0, g.setContentMode("AspectFit"), be = g;
        const S = Ci();
        S && S.load(
          f,
          (k) => {
            g.setVideoItem(k), g.startAnimation();
          },
          (k) => {
            o.error("ImageUpload", "SVGA URL preview load error:", k);
          }
        );
      });
    }
    const ie = T(!1), oe = T(""), Jt = T(1), st = T(1), Me = T(!1), Se = T(null), at = T({ width: 300, height: 300 });
    function xe() {
      if (!Se.value) return;
      const f = Se.value.clientWidth, g = Se.value.clientHeight || 320, S = f / g, k = h.aspectRatio || 16 / 9;
      let le, J;
      k > S ? (le = Math.min(f, 500), J = le / k) : (J = Math.min(g, 320), le = J * k), at.value = { width: Math.round(le), height: Math.round(J) };
    }
    ce(ie, async (f) => {
      f && (await ft(), setTimeout(xe, 100));
    }), ce(() => h.aspectRatio, () => {
      ie.value && xe();
    }), di(() => {
      window.addEventListener("resize", xe);
    });
    const se = T(!1), B = T(""), Y = new Ti({
      setValidating: (f) => {
        se.value = f;
      },
      setError: (f) => {
        B.value = f;
      },
      onConfirm: (f) => {
        a("update:modelValue", f);
      }
    }, h.skipSvgaValidation);
    ce(() => h.skipSvgaValidation, (f) => {
      Y.updateSkipSvgaValidation(!!f);
    });
    const je = Ee(() => zi(U.value));
    ce(() => h.modelValue, (f) => {
      U.value = f, B.value = "", f && h.uploadEnabled && (C.value = !0), h.deferUpload && (_.value = null, Ae(null), ge.value = !1, ve.value = !1, a("fileReady", null));
    }), ce(() => h.uploadEnabled, (f) => {
      f && !h.modelValue && (C.value = !1);
    }), ce(
      [() => h.modelValue, C, () => h.uploadEnabled],
      ([f, g, S]) => {
        f && (g || !S) && vt(f) ? Qt(f) : we();
      },
      { flush: "post" }
    ), fi(() => {
      Y.dispose(), we(), window.removeEventListener("resize", xe);
    });
    function rt() {
      d.value?.click();
    }
    function ei(f) {
      const g = f.target.files?.[0];
      g && ht(g), f.target.value = "";
    }
    async function ht(f) {
      const g = Wi(f, h.accept);
      if (!g.valid) {
        ae.error(g.errorHint);
        return;
      }
      if (!Di(f, h.maxSize)) {
        ae.error(s(M.FILE_SIZE_EXCEEDS_MB, { max: h.maxSize }));
        return;
      }
      try {
        await Pi(f, h.accept, h.skipSvgaValidation);
      } catch (S) {
        const k = S instanceof Error ? S : new Error(String(S));
        o.error("ImageUpload", `File load failed: ${k.message || s(M.FILE_LOAD_FAILED)}`, k), ae.error(k.message || s(M.FILE_LOAD_FAILED));
        return;
      }
      if (h.cropEnabled) {
        Jt.value = 1, st.value = 1, oe.value = "", Me.value = !0, ie.value = !0;
        try {
          const S = await Ai(f);
          oe.value = S;
        } catch {
          ae.error(s(M.IMAGE_LOAD_FAILED)), ie.value = !1;
        } finally {
          Me.value = !1;
        }
      } else
        await ct(f);
    }
    async function ti() {
      if (!(!oe.value || !m.value))
        try {
          const { canvas: f } = m.value.getResult(), g = await Li(f, "image/jpeg", 0.92);
          ie.value = !1, await ct(g);
        } catch {
          ae.error(s(M.CROP_FAILED));
        }
    }
    function lt() {
      ie.value = !1, oe.value = "";
    }
    async function ct(f) {
      if (h.deferUpload) {
        _.value = f, Ae(f);
        const g = Mi(f), S = Si(f);
        ge.value = S, ve.value = g, a("fileReady", f), g && Kt(previewUrl);
        return;
      }
      b.value = !0, w.value = 0;
      try {
        const g = await wt(f, h.type, (S) => {
          w.value = S;
        });
        a("update:modelValue", g.url), L.value = g.provider || "", ae.success(n(M.OP_UPLOAD, M.IMAGE));
      } catch (g) {
        const S = g instanceof Error ? g : new Error(String(g));
        o.error("ImageUpload", `Upload failed: ${S.message || s(M.NETWORK_ERROR)}`, S), ae.error(r(M.OP_UPLOAD, M.IMAGE, S.message || s(M.NETWORK_ERROR)));
      } finally {
        b.value = !1, w.value = 0;
      }
    }
    function ii(f) {
      f.preventDefault();
      const g = xi(f);
      g && ht(g);
    }
    function ni() {
      Y.cancelValidation(), se.value = !1, B.value = "", C.value = !1;
    }
    function ut() {
      Y.cancelValidation(), se.value = !1, B.value = "", C.value = !0;
    }
    function oi() {
      Y.handleUrlFocus();
    }
    function si(f) {
      f && typeof f == "object" && "target" in f && f.preventDefault(), Y.handleUrlBlur(
        U.value,
        h.maxBytes
      );
    }
    function ai(f) {
      typeof f == "string" && (U.value = f, B.value = "", Y.cancelValidation(), se.value = !1);
    }
    function ri(f) {
      f && typeof f == "object" && "target" in f && f.preventDefault(), Y.handleUrlEnter(
        U.value,
        h.maxBytes
      );
    }
    function hi(f) {
      f?.stopPropagation(), Y.cancelValidation(), se.value = !1, B.value = "", a("update:modelValue", ""), U.value = "", L.value = "", b.value = !1, w.value = 0, I.value = !1, we(), h.deferUpload && (_.value = null, Ae(null), ge.value = !1, ve.value = !1, a("fileReady", null));
    }
    function li(f) {
      f.target.style.display = "none";
    }
    return t({
      /** 当前是否处于 URL 输入模式（true=URL输入, false=文件上传） */
      get isUrlInputMode() {
        return C.value;
      },
      /** 当前是否正在验证 URL */
      get isValidating() {
        return se.value;
      },
      /** URL 验证错误信息 */
      get urlValidationError() {
        return B.value;
      },
      /** 当前 URL 是否存在错误（验证失败或字节超限），用于外部禁用提交按钮 */
      get hasUrlError() {
        return C.value ? !!(B.value || h.maxBytes && U.value.trim() && je.value > h.maxBytes) : !1;
      },
      /** 当前 URL 输入框中的值（用于提交时校验实际输入） */
      get urlInputValue() {
        return U.value;
      },
      /** 验证图片 URL 是否可访问 */
      validateImageUrl: Ii,
      /** 外部设置 URL 验证错误信息（用于必填校验等场景使输入框变红） */
      setUrlError(f) {
        B.value = f;
      },
      /** 切换到 URL 输入模式 */
      switchToUrlMode: ut,
      /** 重置组件内部状态，清理待上传文件、本地预览和 URL 输入 */
      reset() {
        Y.reset(), _.value = null, Ae(null), ge.value = !1, ve.value = !1, we(), U.value = h.modelValue || "", L.value = "", B.value = "", b.value = !1, w.value = 0, I.value = !1, h.uploadEnabled && (C.value = !!h.modelValue), a("fileReady", null);
      },
      /**
       * 确保 URL 输入已验证并返回最终 URL。
       * - 如果当前不在 URL 输入模式，返回 null
       * - 如果正在验证，等待验证完成
       * - 如果输入框中有未 blur 确认的 URL，主动触发验证
       * - 验证成功返回 URL，验证失败抛出错误
       */
      async ensureUrlValidated() {
        return C.value ? await Y.ensureUrlValidatedWithErrorCheck(
          U.value,
          h.modelValue || "",
          !!B.value,
          h.maxBytes
        ) : null;
      },
      async uploadPendingFile() {
        const f = _.value;
        if (!f) return null;
        b.value = !0, w.value = 0, I.value = !1;
        try {
          const g = await wt(f, h.type, (S) => {
            w.value = S;
          });
          return _.value = null, L.value = g.provider || "", I.value = !1, g.url;
        } catch (g) {
          throw I.value = !0, g;
        } finally {
          b.value = !1, w.value = 0;
        }
      }
    }), (f, g) => {
      const S = X("t-input"), k = X("t-button"), le = X("t-dialog");
      return v(), A("div", bn, [
        e.uploadEnabled && e.showUrlInput ? (v(), A("div", wn, [
          W("button", {
            class: ue(["mode-switch-btn", { active: !C.value }]),
            onClick: ni
          }, [
            x(y(pt)),
            mt(" " + $(y(s)(y(M).UPLOAD_IMAGE)), 1)
          ], 2),
          W("button", {
            class: ue(["mode-switch-btn", { active: C.value }]),
            onClick: ut
          }, $(y(s)(y(M).ENTER_URL)), 3)
        ])) : G("", !0),
        C.value || !e.uploadEnabled ? (v(), A("div", yn, [
          x(S, {
            "model-value": U.value,
            "onUpdate:modelValue": ai,
            onFocus: oi,
            onBlur: si,
            onEnter: ri,
            placeholder: c.value,
            status: B.value ? "error" : "default"
          }, mi({ _: 2 }, [
            e.maxBytes ? {
              name: "suffix",
              fn: F(() => [
                se.value ? (v(), A("span", zn, $(y(s)(y(M).VALIDATING)), 1)) : (v(), A("span", {
                  key: 1,
                  class: ue(["input-suffix-count", { "byte-overflow": je.value > e.maxBytes }])
                }, $(je.value) + "/" + $(e.maxBytes), 3))
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["model-value", "placeholder", "status"])
        ])) : G("", !0),
        B.value && (C.value || !e.uploadEnabled) ? (v(), A("div", Rn, $(B.value), 1)) : G("", !0),
        e.uploadEnabled && !C.value ? (v(), A(ye, { key: 3 }, [
          y($e) ? (v(), A("div", {
            key: 0,
            class: "image-upload-preview",
            style: Ce({
              width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
              height: `${e.previewHeight || 160}px`
            })
          }, [
            b.value ? (v(), A("div", An, [
              W("div", Mn, [
                (v(), A("svg", {
                  viewBox: "0 0 36 36",
                  class: ue(["progress-ring", { indeterminate: w.value <= 0 }])
                }, [
                  g[3] || (g[3] = W("path", {
                    class: "progress-ring-bg",
                    pathLength: "100",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, -1)),
                  W("path", {
                    class: ue(["progress-ring-fill", { indeterminate: w.value <= 0 }]),
                    pathLength: "100",
                    "stroke-dasharray": w.value > 0 ? `${w.value}, 100` : "25, 100",
                    d: "M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  }, null, 10, Sn)
                ], 2))
              ])
            ])) : (v(), A(ye, { key: 1 }, [
              ve.value ? (v(), A("div", {
                key: 0,
                ref_key: "svgaPreviewRef",
                ref: Zt,
                class: "svga-preview-container"
              }, null, 512)) : ge.value ? (v(), A("video", {
                key: 1,
                src: y($e),
                muted: "",
                loop: "",
                autoplay: "",
                playsinline: ""
              }, null, 8, xn)) : (v(), A("img", {
                key: 2,
                src: y($e),
                alt: "preview"
              }, null, 8, En))
            ], 64)),
            !b.value && L.value ? (v(), A("span", Cn, $(L.value.toUpperCase()), 1)) : G("", !0),
            !b.value && I.value ? (v(), A("span", Tn, $(y(r)(y(M).OP_UPLOAD, y(M).IMAGE)), 1)) : !b.value && !L.value ? (v(), A("span", In, $(y(s)(y(M).PENDING_UPLOAD)), 1)) : G("", !0),
            b.value ? G("", !0) : (v(), A("div", Wn, [
              W("button", {
                class: "preview-action-btn",
                onClick: rt,
                title: y(s)(y(M).RE_UPLOAD)
              }, [
                x(y(pt))
              ], 8, Dn),
              W("button", {
                class: "preview-action-btn",
                onClick: hi,
                title: y(s)(y(M).DELETE)
              }, [
                x(y(pi))
              ], 8, Pn)
            ]))
          ], 4)) : (v(), A("div", {
            key: 1,
            class: ue(["image-upload-dropzone", { uploading: b.value }]),
            onClick: g[0] || (g[0] = (J) => !b.value && rt()),
            onDragover: g[1] || (g[1] = //@ts-ignore
            (...J) => y(bt) && y(bt)(...J)),
            onDrop: ii,
            style: Ce({ height: `${e.previewHeight || 160}px` })
          }, [
            b.value ? (v(), A("div", Ln, [
              W("div", On, [
                W("div", {
                  class: "progress-fill",
                  style: Ce({ width: `${w.value}%` })
                }, null, 4)
              ]),
              W("span", Hn, $(w.value) + "%", 1)
            ])) : (v(), A(ye, { key: 1 }, [
              x(y(gi), {
                size: "32",
                "stroke-width": 1.2
              }),
              W("span", Un, $(l.value), 1),
              W("span", kn, $(u.value), 1)
            ], 64))
          ], 38)),
          W("input", {
            ref_key: "fileInputRef",
            ref: d,
            type: "file",
            accept: e.accept || "image/jpeg,image/png,image/gif,image/webp",
            style: { display: "none" },
            onChange: ei
          }, null, 40, $n)
        ], 64)) : G("", !0),
        e.modelValue && (C.value || !e.uploadEnabled) ? (v(), A("div", {
          key: 4,
          class: "image-upload-preview url-preview",
          style: Ce({
            width: typeof e.previewWidth == "number" ? `${e.previewWidth}px` : e.previewWidth || "100%",
            height: `${e.previewHeight || 120}px`,
            marginTop: "8px"
          })
        }, [
          y(vt)(e.modelValue) ? (v(), A("div", {
            key: 0,
            ref_key: "svgaUrlPreviewRef",
            ref: Be,
            class: "svga-preview-container"
          }, null, 512)) : y(Ri)(e.modelValue) ? (v(), A("video", {
            key: 1,
            src: e.modelValue,
            muted: "",
            loop: "",
            autoplay: "",
            playsinline: ""
          }, null, 8, Bn)) : (v(), A("img", {
            key: 2,
            src: e.modelValue,
            alt: "preview",
            onError: li
          }, null, 40, jn))
        ], 4)) : G("", !0),
        x(le, {
          visible: ie.value,
          "onUpdate:visible": g[2] || (g[2] = (J) => ie.value = J),
          header: y(s)(y(M).CROP_IMAGE),
          width: 600,
          footer: !1,
          class: "image-crop-modal",
          onClose: lt
        }, {
          default: F(() => [
            W("div", _n, [
              W("div", {
                ref_key: "cropAreaRef",
                ref: Se,
                class: "image-crop-area"
              }, [
                Me.value ? (v(), A("div", Fn, [
                  g[4] || (g[4] = W("div", { class: "loading-spinner" }, null, -1)),
                  W("span", null, $(y(s)(y(M).IMAGE_LOADING)), 1)
                ])) : oe.value ? (v(), E(y(Gt), {
                  key: 1,
                  ref_key: "cropperRef",
                  ref: m,
                  src: oe.value,
                  style: { width: "100%", height: "100%" },
                  "resize-image": {
                    adjustStencil: !1
                  },
                  "stencil-component": y(ot),
                  "stencil-props": {
                    aspectRatio: h.aspectRatio,
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
                  "stencil-size": at.value,
                  "image-restriction": "stencil",
                  "min-zoom": 0.5,
                  "max-zoom": 3,
                  zoom: st.value
                }, null, 8, ["src", "stencil-component", "stencil-props", "stencil-size", "zoom"])) : G("", !0)
              ], 512)
            ]),
            W("div", Vn, [
              x(k, {
                variant: "outline",
                shape: "round",
                onClick: lt
              }, {
                default: F(() => [
                  mt($(y(s)(y(M).CANCEL)), 1)
                ]),
                _: 1
              }),
              x(k, {
                theme: "primary",
                shape: "round",
                disabled: Me.value || !oe.value,
                onClick: ti,
                class: "crop-confirm-btn"
              }, {
                default: F(() => [
                  W("span", Xn, [
                    x(y(vi)),
                    W("span", null, $(y(s)(y(M).CONFIRM_CROP)), 1)
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
}), so = /* @__PURE__ */ Ui(Nn, [["__scopeId", "data-v-8a6d77da"]]);
export {
  so as I
};
