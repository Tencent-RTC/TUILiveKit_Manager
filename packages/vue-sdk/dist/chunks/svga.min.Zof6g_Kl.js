var svga_min = { exports: {} }, hasRequiredSvga_min;
function requireSvga_min() {
  return hasRequiredSvga_min || (hasRequiredSvga_min = 1, (function(module, exports) {
    (function(k, b) {
      module.exports = b();
    })(window, (function() {
      return (function(k) {
        function b(f) {
          if (y[f]) return y[f].exports;
          var d = y[f] = { i: f, l: !1, exports: {} };
          return k[f].call(d.exports, d, d.exports, b), d.l = !0, d.exports;
        }
        var y = {};
        return b.m = k, b.c = y, b.d = function(f, d, h) {
          b.o(f, d) || Object.defineProperty(f, d, { enumerable: !0, get: h });
        }, b.r = function(f) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(f, "__esModule", { value: !0 });
        }, b.t = function(f, d) {
          if (1 & d && (f = b(f)), 8 & d || 4 & d && typeof f == "object" && f && f.__esModule) return f;
          var h = /* @__PURE__ */ Object.create(null);
          if (b.r(h), Object.defineProperty(h, "default", { enumerable: !0, value: f }), 2 & d && typeof f != "string") for (var a in f) b.d(h, a, (function(s) {
            return f[s];
          }).bind(null, a));
          return h;
        }, b.n = function(f) {
          var d = f && f.__esModule ? function() {
            return f.default;
          } : function() {
            return f;
          };
          return b.d(d, "a", d), d;
        }, b.o = function(f, d) {
          return Object.prototype.hasOwnProperty.call(f, d);
        }, b.p = "", b(b.s = 64);
      })([function(k, b, y) {
        var f, d, h = k.exports = y(1), a = y(20);
        h.codegen = y(47), h.fetch = y(48), h.path = y(49), h.fs = h.inquire("fs"), h.toArray = function(n) {
          if (n) {
            for (var i = Object.keys(n), l = new Array(i.length), o = 0; o < i.length; ) l[o] = n[i[o++]];
            return l;
          }
          return [];
        }, h.toObject = function(n) {
          for (var i = {}, l = 0; l < n.length; ) {
            var o = n[l++], u = n[l++];
            u !== void 0 && (i[o] = u);
          }
          return i;
        };
        var s = /\\/g, t = /"/g;
        h.isReserved = function(n) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(n);
        }, h.safeProp = function(n) {
          return !/^[$\w_]+$/.test(n) || h.isReserved(n) ? '["' + n.replace(s, "\\\\").replace(t, '\\"') + '"]' : "." + n;
        }, h.ucFirst = function(n) {
          return n.charAt(0).toUpperCase() + n.substring(1);
        };
        var r = /_([a-z])/g;
        h.camelCase = function(n) {
          return n.substring(0, 1) + n.substring(1).replace(r, (function(i, l) {
            return l.toUpperCase();
          }));
        }, h.compareFieldsById = function(n, i) {
          return n.id - i.id;
        }, h.decorateType = function(n, i) {
          if (n.$type) return i && n.$type.name !== i && (h.decorateRoot.remove(n.$type), n.$type.name = i, h.decorateRoot.add(n.$type)), n.$type;
          f || (f = y(22));
          var l = new f(i || n.name);
          return h.decorateRoot.add(l), l.ctor = n, Object.defineProperty(n, "$type", { value: l, enumerable: !1 }), Object.defineProperty(n.prototype, "$type", { value: l, enumerable: !1 }), l;
        };
        var e = 0;
        h.decorateEnum = function(n) {
          if (n.$type) return n.$type;
          d || (d = y(2));
          var i = new d("Enum" + e++, n);
          return h.decorateRoot.add(i), Object.defineProperty(n, "$type", { value: i, enumerable: !1 }), i;
        }, h.setProperty = function(n, i, l) {
          if (typeof n != "object") throw TypeError("dst must be an object");
          if (!i) throw TypeError("path must be specified");
          return (function o(u, p, g) {
            var v = p.shift();
            if (p.length > 0) u[v] = o(u[v] || {}, p, g);
            else {
              var w = u[v];
              w && (g = [].concat(w).concat(g)), u[v] = g;
            }
            return u;
          })(n, i = i.split("."), l);
        }, Object.defineProperty(h, "decorateRoot", { get: function() {
          return a.decorated || (a.decorated = new (y(30))());
        } });
      }, function(k, b, y) {
        (function(f) {
          function d(s, t, r) {
            for (var e = Object.keys(t), n = 0; n < e.length; ++n) s[e[n]] !== void 0 && r || (s[e[n]] = t[e[n]]);
            return s;
          }
          function h(s) {
            function t(r, e) {
              if (!(this instanceof t)) return new t(r, e);
              Object.defineProperty(this, "message", { get: function() {
                return r;
              } }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", { value: new Error().stack || "" }), e && d(this, e);
            }
            return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", { get: function() {
              return s;
            } }), t.prototype.toString = function() {
              return this.name + ": " + this.message;
            }, t;
          }
          var a = b;
          a.asPromise = y(17), a.base64 = y(38), a.EventEmitter = y(39), a.float = y(40), a.inquire = y(18), a.utf8 = y(41), a.pool = y(42), a.LongBits = y(43), a.isNode = !!(f !== void 0 && f && f.process && f.process.versions && f.process.versions.node), a.global = a.isNode && f || typeof window < "u" && window || typeof self < "u" && self || this, a.emptyArray = Object.freeze ? Object.freeze([]) : [], a.emptyObject = Object.freeze ? Object.freeze({}) : {}, a.isInteger = Number.isInteger || function(s) {
            return typeof s == "number" && isFinite(s) && Math.floor(s) === s;
          }, a.isString = function(s) {
            return typeof s == "string" || s instanceof String;
          }, a.isObject = function(s) {
            return s && typeof s == "object";
          }, a.isset = a.isSet = function(s, t) {
            var r = s[t];
            return !(r == null || !s.hasOwnProperty(t)) && (typeof r != "object" || (Array.isArray(r) ? r.length : Object.keys(r).length) > 0);
          }, a.Buffer = (function() {
            try {
              var s = a.inquire("buffer").Buffer;
              return s.prototype.utf8Write ? s : null;
            } catch {
              return null;
            }
          })(), a._Buffer_from = null, a._Buffer_allocUnsafe = null, a.newBuffer = function(s) {
            return typeof s == "number" ? a.Buffer ? a._Buffer_allocUnsafe(s) : new a.Array(s) : a.Buffer ? a._Buffer_from(s) : typeof Uint8Array > "u" ? s : new Uint8Array(s);
          }, a.Array = typeof Uint8Array < "u" ? Uint8Array : Array, a.Long = a.global.dcodeIO && a.global.dcodeIO.Long || a.global.Long || a.inquire("long"), a.key2Re = /^true|false|0|1$/, a.key32Re = /^-?(?:0|[1-9][0-9]*)$/, a.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, a.longToHash = function(s) {
            return s ? a.LongBits.from(s).toHash() : a.LongBits.zeroHash;
          }, a.longFromHash = function(s, t) {
            var r = a.LongBits.fromHash(s);
            return a.Long ? a.Long.fromBits(r.lo, r.hi, t) : r.toNumber(!!t);
          }, a.merge = d, a.lcFirst = function(s) {
            return s.charAt(0).toLowerCase() + s.substring(1);
          }, a.newError = h, a.ProtocolError = h("ProtocolError"), a.oneOfGetter = function(s) {
            for (var t = {}, r = 0; r < s.length; ++r) t[s[r]] = 1;
            return function() {
              for (var e = Object.keys(this), n = e.length - 1; n > -1; --n) if (t[e[n]] === 1 && this[e[n]] !== void 0 && this[e[n]] !== null) return e[n];
            };
          }, a.oneOfSetter = function(s) {
            return function(t) {
              for (var r = 0; r < s.length; ++r) s[r] !== t && delete this[s[r]];
            };
          }, a.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, a._configure = function() {
            var s = a.Buffer;
            s ? (a._Buffer_from = s.from !== Uint8Array.from && s.from || function(t, r) {
              return new s(t, r);
            }, a._Buffer_allocUnsafe = s.allocUnsafe || function(t) {
              return new s(t);
            }) : a._Buffer_from = a._Buffer_allocUnsafe = null;
          };
        }).call(this, y(37));
      }, function(k, b, y) {
        function f(s, t, r, e, n) {
          if (d.call(this, s, r), t && typeof t != "object") throw TypeError("values must be an object");
          if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = e, this.comments = n || {}, this.reserved = void 0, t) for (var i = Object.keys(t), l = 0; l < i.length; ++l) typeof t[i[l]] == "number" && (this.valuesById[this.values[i[l]] = t[i[l]]] = i[l]);
        }
        k.exports = f;
        var d = y(3);
        ((f.prototype = Object.create(d.prototype)).constructor = f).className = "Enum";
        var h = y(6), a = y(0);
        f.fromJSON = function(s, t) {
          var r = new f(s, t.values, t.options, t.comment, t.comments);
          return r.reserved = t.reserved, r;
        }, f.prototype.toJSON = function(s) {
          var t = !!s && !!s.keepComments;
          return a.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "comment", t ? this.comment : void 0, "comments", t ? this.comments : void 0]);
        }, f.prototype.add = function(s, t, r) {
          if (!a.isString(s)) throw TypeError("name must be a string");
          if (!a.isInteger(t)) throw TypeError("id must be an integer");
          if (this.values[s] !== void 0) throw Error("duplicate name '" + s + "' in " + this);
          if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
          if (this.isReservedName(s)) throw Error("name '" + s + "' is reserved in " + this);
          if (this.valuesById[t] !== void 0) {
            if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
            this.values[s] = t;
          } else this.valuesById[this.values[s] = t] = s;
          return this.comments[s] = r || null, this;
        }, f.prototype.remove = function(s) {
          if (!a.isString(s)) throw TypeError("name must be a string");
          var t = this.values[s];
          if (t == null) throw Error("name '" + s + "' does not exist in " + this);
          return delete this.valuesById[t], delete this.values[s], delete this.comments[s], this;
        }, f.prototype.isReservedId = function(s) {
          return h.isReservedId(this.reserved, s);
        }, f.prototype.isReservedName = function(s) {
          return h.isReservedName(this.reserved, s);
        };
      }, function(k, b, y) {
        function f(a, s) {
          if (!h.isString(a)) throw TypeError("name must be a string");
          if (s && !h.isObject(s)) throw TypeError("options must be an object");
          this.options = s, this.parsedOptions = null, this.name = a, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null;
        }
        k.exports = f, f.className = "ReflectionObject";
        var d, h = y(0);
        Object.defineProperties(f.prototype, { root: { get: function() {
          for (var a = this; a.parent !== null; ) a = a.parent;
          return a;
        } }, fullName: { get: function() {
          for (var a = [this.name], s = this.parent; s; ) a.unshift(s.name), s = s.parent;
          return a.join(".");
        } } }), f.prototype.toJSON = function() {
          throw Error();
        }, f.prototype.onAdd = function(a) {
          this.parent && this.parent !== a && this.parent.remove(this), this.parent = a, this.resolved = !1;
          var s = a.root;
          s instanceof d && s._handleAdd(this);
        }, f.prototype.onRemove = function(a) {
          var s = a.root;
          s instanceof d && s._handleRemove(this), this.parent = null, this.resolved = !1;
        }, f.prototype.resolve = function() {
          return this.resolved ? this : (this.root instanceof d && (this.resolved = !0), this);
        }, f.prototype.getOption = function(a) {
          if (this.options) return this.options[a];
        }, f.prototype.setOption = function(a, s, t) {
          return t && this.options && this.options[a] !== void 0 || ((this.options || (this.options = {}))[a] = s), this;
        }, f.prototype.setParsedOption = function(a, s, t) {
          this.parsedOptions || (this.parsedOptions = []);
          var r = this.parsedOptions;
          if (t) {
            var e = r.find((function(l) {
              return Object.prototype.hasOwnProperty.call(l, a);
            }));
            if (e) {
              var n = e[a];
              h.setProperty(n, t, s);
            } else (e = {})[a] = h.setProperty({}, t, s), r.push(e);
          } else {
            var i = {};
            i[a] = s, r.push(i);
          }
          return this;
        }, f.prototype.setOptions = function(a, s) {
          if (a) for (var t = Object.keys(a), r = 0; r < t.length; ++r) this.setOption(t[r], a[t[r]], s);
          return this;
        }, f.prototype.toString = function() {
          var a = this.constructor.className, s = this.fullName;
          return s.length ? a + " " + s : a;
        }, f._configure = function(a) {
          d = a;
        };
      }, function(k, b, y) {
        function f(e, n, i, l, o, u, p) {
          if (t.isObject(l) ? (p = o, u = l, l = o = void 0) : t.isObject(o) && (p = u, u = o, o = void 0), d.call(this, e, u), !t.isInteger(n) || n < 0) throw TypeError("id must be a non-negative integer");
          if (!t.isString(i)) throw TypeError("type must be a string");
          if (l !== void 0 && !r.test(l = l.toString().toLowerCase())) throw TypeError("rule must be a string rule");
          if (o !== void 0 && !t.isString(o)) throw TypeError("extend must be a string");
          this.rule = l && l !== "optional" ? l : void 0, this.type = i, this.id = n, this.extend = o || void 0, this.required = l === "required", this.optional = !this.required, this.repeated = l === "repeated", this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!t.Long && s.long[i] !== void 0, this.bytes = i === "bytes", this.resolvedType = null, this.extensionField = null, this.declaringField = null, this._packed = null, this.comment = p;
        }
        k.exports = f;
        var d = y(3);
        ((f.prototype = Object.create(d.prototype)).constructor = f).className = "Field";
        var h, a = y(2), s = y(7), t = y(0), r = /^required|optional|repeated$/;
        f.fromJSON = function(e, n) {
          return new f(e, n.id, n.type, n.rule, n.extend, n.options, n.comment);
        }, Object.defineProperty(f.prototype, "packed", { get: function() {
          return this._packed === null && (this._packed = this.getOption("packed") !== !1), this._packed;
        } }), f.prototype.setOption = function(e, n, i) {
          return e === "packed" && (this._packed = null), d.prototype.setOption.call(this, e, n, i);
        }, f.prototype.toJSON = function(e) {
          var n = !!e && !!e.keepComments;
          return t.toObject(["rule", this.rule !== "optional" && this.rule || void 0, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", n ? this.comment : void 0]);
        }, f.prototype.resolve = function() {
          if (this.resolved) return this;
          if ((this.typeDefault = s.defaults[this.type]) === void 0 && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof h ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && this.options.default != null && (this.typeDefault = this.options.default, this.resolvedType instanceof a && typeof this.typeDefault == "string" && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (this.options.packed !== !0 && (this.options.packed === void 0 || !this.resolvedType || this.resolvedType instanceof a) || delete this.options.packed, Object.keys(this.options).length || (this.options = void 0)), this.long) this.typeDefault = t.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u"), Object.freeze && Object.freeze(this.typeDefault);
          else if (this.bytes && typeof this.typeDefault == "string") {
            var e;
            t.base64.test(this.typeDefault) ? t.base64.decode(this.typeDefault, e = t.newBuffer(t.base64.length(this.typeDefault)), 0) : t.utf8.write(this.typeDefault, e = t.newBuffer(t.utf8.length(this.typeDefault)), 0), this.typeDefault = e;
          }
          return this.map ? this.defaultValue = t.emptyObject : this.repeated ? this.defaultValue = t.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof h && (this.parent.ctor.prototype[this.name] = this.defaultValue), d.prototype.resolve.call(this);
        }, f.d = function(e, n, i, l) {
          return typeof n == "function" ? n = t.decorateType(n).name : n && typeof n == "object" && (n = t.decorateEnum(n).name), function(o, u) {
            t.decorateType(o.constructor).add(new f(u, e, n, i, { default: l }));
          };
        }, f._configure = function(e) {
          h = e;
        };
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.BezierPath = function f(d, h, a) {
          (function(s, t) {
            if (!(s instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, f), this._d = d, this._transform = h, this._styles = a;
        };
      }, function(k, b, y) {
        function f(i, l) {
          if (i && i.length) {
            for (var o = {}, u = 0; u < i.length; ++u) o[i[u].name] = i[u].toJSON(l);
            return o;
          }
        }
        function d(i, l) {
          a.call(this, i, l), this.nested = void 0, this._nestedArray = null;
        }
        function h(i) {
          return i._nestedArray = null, i;
        }
        k.exports = d;
        var a = y(3);
        ((d.prototype = Object.create(a.prototype)).constructor = d).className = "Namespace";
        var s, t, r, e = y(4), n = y(0);
        d.fromJSON = function(i, l) {
          return new d(i, l.options).addJSON(l.nested);
        }, d.arrayToJSON = f, d.isReservedId = function(i, l) {
          if (i) {
            for (var o = 0; o < i.length; ++o) if (typeof i[o] != "string" && i[o][0] <= l && i[o][1] > l) return !0;
          }
          return !1;
        }, d.isReservedName = function(i, l) {
          if (i) {
            for (var o = 0; o < i.length; ++o) if (i[o] === l) return !0;
          }
          return !1;
        }, Object.defineProperty(d.prototype, "nestedArray", { get: function() {
          return this._nestedArray || (this._nestedArray = n.toArray(this.nested));
        } }), d.prototype.toJSON = function(i) {
          return n.toObject(["options", this.options, "nested", f(this.nestedArray, i)]);
        }, d.prototype.addJSON = function(i) {
          if (i) for (var l, o = Object.keys(i), u = 0; u < o.length; ++u) l = i[o[u]], this.add((l.fields !== void 0 ? s.fromJSON : l.values !== void 0 ? r.fromJSON : l.methods !== void 0 ? t.fromJSON : l.id !== void 0 ? e.fromJSON : d.fromJSON)(o[u], l));
          return this;
        }, d.prototype.get = function(i) {
          return this.nested && this.nested[i] || null;
        }, d.prototype.getEnum = function(i) {
          if (this.nested && this.nested[i] instanceof r) return this.nested[i].values;
          throw Error("no such enum: " + i);
        }, d.prototype.add = function(i) {
          if (!(i instanceof e && i.extend !== void 0 || i instanceof s || i instanceof r || i instanceof t || i instanceof d)) throw TypeError("object must be a valid nested object");
          if (this.nested) {
            var l = this.get(i.name);
            if (l) {
              if (!(l instanceof d && i instanceof d) || l instanceof s || l instanceof t) throw Error("duplicate name '" + i.name + "' in " + this);
              for (var o = l.nestedArray, u = 0; u < o.length; ++u) i.add(o[u]);
              this.remove(l), this.nested || (this.nested = {}), i.setOptions(l.options, !0);
            }
          } else this.nested = {};
          return this.nested[i.name] = i, i.onAdd(this), h(this);
        }, d.prototype.remove = function(i) {
          if (!(i instanceof a)) throw TypeError("object must be a ReflectionObject");
          if (i.parent !== this) throw Error(i + " is not a member of " + this);
          return delete this.nested[i.name], Object.keys(this.nested).length || (this.nested = void 0), i.onRemove(this), h(this);
        }, d.prototype.define = function(i, l) {
          if (n.isString(i)) i = i.split(".");
          else if (!Array.isArray(i)) throw TypeError("illegal path");
          if (i && i.length && i[0] === "") throw Error("path must be relative");
          for (var o = this; i.length > 0; ) {
            var u = i.shift();
            if (o.nested && o.nested[u]) {
              if (!((o = o.nested[u]) instanceof d)) throw Error("path conflicts with non-namespace objects");
            } else o.add(o = new d(u));
          }
          return l && o.addJSON(l), o;
        }, d.prototype.resolveAll = function() {
          for (var i = this.nestedArray, l = 0; l < i.length; ) i[l] instanceof d ? i[l++].resolveAll() : i[l++].resolve();
          return this.resolve();
        }, d.prototype.lookup = function(i, l, o) {
          if (typeof l == "boolean" ? (o = l, l = void 0) : l && !Array.isArray(l) && (l = [l]), n.isString(i) && i.length) {
            if (i === ".") return this.root;
            i = i.split(".");
          } else if (!i.length) return this;
          if (i[0] === "") return this.root.lookup(i.slice(1), l);
          var u = this.get(i[0]);
          if (u) {
            if (i.length === 1) {
              if (!l || l.indexOf(u.constructor) > -1) return u;
            } else if (u instanceof d && (u = u.lookup(i.slice(1), l, !0))) return u;
          } else for (var p = 0; p < this.nestedArray.length; ++p) if (this._nestedArray[p] instanceof d && (u = this._nestedArray[p].lookup(i, l, !0))) return u;
          return this.parent === null || o ? null : this.parent.lookup(i, l);
        }, d.prototype.lookupType = function(i) {
          var l = this.lookup(i, [s]);
          if (!l) throw Error("no such type: " + i);
          return l;
        }, d.prototype.lookupEnum = function(i) {
          var l = this.lookup(i, [r]);
          if (!l) throw Error("no such Enum '" + i + "' in " + this);
          return l;
        }, d.prototype.lookupTypeOrEnum = function(i) {
          var l = this.lookup(i, [s, r]);
          if (!l) throw Error("no such Type or Enum '" + i + "' in " + this);
          return l;
        }, d.prototype.lookupService = function(i) {
          var l = this.lookup(i, [t]);
          if (!l) throw Error("no such Service '" + i + "' in " + this);
          return l;
        }, d._configure = function(i, l, o) {
          s = i, t = l, r = o;
        };
      }, function(k, b, y) {
        function f(s, t) {
          var r = 0, e = {};
          for (t |= 0; r < s.length; ) e[a[r + t]] = s[r++];
          return e;
        }
        var d = b, h = y(0), a = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        d.basic = f([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), d.defaults = f([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", h.emptyArray, null]), d.long = f([0, 0, 0, 1, 1], 7), d.mapKey = f([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), d.packed = f([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
      }, function(k, b, y) {
        function f(s, t) {
          return Object.prototype.hasOwnProperty.call(s, t);
        }
        var d = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
        b.assign = function(s) {
          for (var t = Array.prototype.slice.call(arguments, 1); t.length; ) {
            var r = t.shift();
            if (r) {
              if (typeof r != "object") throw new TypeError(r + "must be non-object");
              for (var e in r) f(r, e) && (s[e] = r[e]);
            }
          }
          return s;
        }, b.shrinkBuf = function(s, t) {
          return s.length === t ? s : s.subarray ? s.subarray(0, t) : (s.length = t, s);
        };
        var h = { arraySet: function(s, t, r, e, n) {
          if (t.subarray && s.subarray) s.set(t.subarray(r, r + e), n);
          else for (var i = 0; i < e; i++) s[n + i] = t[r + i];
        }, flattenChunks: function(s) {
          var t, r, e, n, i, l;
          for (e = 0, t = 0, r = s.length; t < r; t++) e += s[t].length;
          for (l = new Uint8Array(e), n = 0, t = 0, r = s.length; t < r; t++) i = s[t], l.set(i, n), n += i.length;
          return l;
        } }, a = { arraySet: function(s, t, r, e, n) {
          for (var i = 0; i < e; i++) s[n + i] = t[r + i];
        }, flattenChunks: function(s) {
          return [].concat.apply([], s);
        } };
        b.setTyped = function(s) {
          s ? (b.Buf8 = Uint8Array, b.Buf16 = Uint16Array, b.Buf32 = Int32Array, b.assign(b, h)) : (b.Buf8 = Array, b.Buf16 = Array, b.Buf32 = Array, b.assign(b, a));
        }, b.setTyped(d);
      }, function(k, b, y) {
        function f(v, w, m) {
          this.fn = v, this.len = w, this.next = void 0, this.val = m;
        }
        function d() {
        }
        function h(v) {
          this.head = v.head, this.tail = v.tail, this.len = v.len, this.next = v.states;
        }
        function a() {
          this.len = 0, this.head = new f(d, 0, 0), this.tail = this.head, this.states = null;
        }
        function s(v, w, m) {
          w[m] = 255 & v;
        }
        function t(v, w) {
          this.len = v, this.next = void 0, this.val = w;
        }
        function r(v, w, m) {
          for (; v.hi; ) w[m++] = 127 & v.lo | 128, v.lo = (v.lo >>> 7 | v.hi << 25) >>> 0, v.hi >>>= 7;
          for (; v.lo > 127; ) w[m++] = 127 & v.lo | 128, v.lo = v.lo >>> 7;
          w[m++] = v.lo;
        }
        function e(v, w, m) {
          w[m] = 255 & v, w[m + 1] = v >>> 8 & 255, w[m + 2] = v >>> 16 & 255, w[m + 3] = v >>> 24;
        }
        k.exports = a;
        var n, i = y(1), l = i.LongBits, o = i.base64, u = i.utf8, p = function() {
          return i.Buffer ? function() {
            return (a.create = function() {
              return new n();
            })();
          } : function() {
            return new a();
          };
        };
        a.create = p(), a.alloc = function(v) {
          return new i.Array(v);
        }, i.Array !== Array && (a.alloc = i.pool(a.alloc, i.Array.prototype.subarray)), a.prototype._push = function(v, w, m) {
          return this.tail = this.tail.next = new f(v, w, m), this.len += w, this;
        }, t.prototype = Object.create(f.prototype), t.prototype.fn = function(v, w, m) {
          for (; v > 127; ) w[m++] = 127 & v | 128, v >>>= 7;
          w[m] = v;
        }, a.prototype.uint32 = function(v) {
          return this.len += (this.tail = this.tail.next = new t((v >>>= 0) < 128 ? 1 : v < 16384 ? 2 : v < 2097152 ? 3 : v < 268435456 ? 4 : 5, v)).len, this;
        }, a.prototype.int32 = function(v) {
          return v < 0 ? this._push(r, 10, l.fromNumber(v)) : this.uint32(v);
        }, a.prototype.sint32 = function(v) {
          return this.uint32((v << 1 ^ v >> 31) >>> 0);
        }, a.prototype.uint64 = function(v) {
          var w = l.from(v);
          return this._push(r, w.length(), w);
        }, a.prototype.int64 = a.prototype.uint64, a.prototype.sint64 = function(v) {
          var w = l.from(v).zzEncode();
          return this._push(r, w.length(), w);
        }, a.prototype.bool = function(v) {
          return this._push(s, 1, v ? 1 : 0);
        }, a.prototype.fixed32 = function(v) {
          return this._push(e, 4, v >>> 0);
        }, a.prototype.sfixed32 = a.prototype.fixed32, a.prototype.fixed64 = function(v) {
          var w = l.from(v);
          return this._push(e, 4, w.lo)._push(e, 4, w.hi);
        }, a.prototype.sfixed64 = a.prototype.fixed64, a.prototype.float = function(v) {
          return this._push(i.float.writeFloatLE, 4, v);
        }, a.prototype.double = function(v) {
          return this._push(i.float.writeDoubleLE, 8, v);
        };
        var g = i.Array.prototype.set ? function(v, w, m) {
          w.set(v, m);
        } : function(v, w, m) {
          for (var O = 0; O < v.length; ++O) w[m + O] = v[O];
        };
        a.prototype.bytes = function(v) {
          var w = v.length >>> 0;
          if (!w) return this._push(s, 1, 0);
          if (i.isString(v)) {
            var m = a.alloc(w = o.length(v));
            o.decode(v, m, 0), v = m;
          }
          return this.uint32(w)._push(g, w, v);
        }, a.prototype.string = function(v) {
          var w = u.length(v);
          return w ? this.uint32(w)._push(u.write, w, v) : this._push(s, 1, 0);
        }, a.prototype.fork = function() {
          return this.states = new h(this), this.head = this.tail = new f(d, 0, 0), this.len = 0, this;
        }, a.prototype.reset = function() {
          return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new f(d, 0, 0), this.len = 0), this;
        }, a.prototype.ldelim = function() {
          var v = this.head, w = this.tail, m = this.len;
          return this.reset().uint32(m), m && (this.tail.next = v.next, this.tail = w, this.len += m), this;
        }, a.prototype.finish = function() {
          for (var v = this.head.next, w = this.constructor.alloc(this.len), m = 0; v; ) v.fn(v.val, w, m), m += v.len, v = v.next;
          return w;
        }, a._configure = function(v) {
          n = v, a.create = p(), n._configure();
        };
      }, function(k, b, y) {
        function f(o, u) {
          return RangeError("index out of range: " + o.pos + " + " + (u || 1) + " > " + o.len);
        }
        function d(o) {
          this.buf = o, this.pos = 0, this.len = o.length;
        }
        function h() {
          var o = new e(0, 0), u = 0;
          if (!(this.len - this.pos > 4)) {
            for (; u < 3; ++u) {
              if (this.pos >= this.len) throw f(this);
              if (o.lo = (o.lo | (127 & this.buf[this.pos]) << 7 * u) >>> 0, this.buf[this.pos++] < 128) return o;
            }
            return o.lo = (o.lo | (127 & this.buf[this.pos++]) << 7 * u) >>> 0, o;
          }
          for (; u < 4; ++u) if (o.lo = (o.lo | (127 & this.buf[this.pos]) << 7 * u) >>> 0, this.buf[this.pos++] < 128) return o;
          if (o.lo = (o.lo | (127 & this.buf[this.pos]) << 28) >>> 0, o.hi = (o.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return o;
          if (u = 0, this.len - this.pos > 4) {
            for (; u < 5; ++u) if (o.hi = (o.hi | (127 & this.buf[this.pos]) << 7 * u + 3) >>> 0, this.buf[this.pos++] < 128) return o;
          } else for (; u < 5; ++u) {
            if (this.pos >= this.len) throw f(this);
            if (o.hi = (o.hi | (127 & this.buf[this.pos]) << 7 * u + 3) >>> 0, this.buf[this.pos++] < 128) return o;
          }
          throw Error("invalid varint encoding");
        }
        function a(o, u) {
          return (o[u - 4] | o[u - 3] << 8 | o[u - 2] << 16 | o[u - 1] << 24) >>> 0;
        }
        function s() {
          if (this.pos + 8 > this.len) throw f(this, 8);
          return new e(a(this.buf, this.pos += 4), a(this.buf, this.pos += 4));
        }
        k.exports = d;
        var t, r = y(1), e = r.LongBits, n = r.utf8, i = typeof Uint8Array < "u" ? function(o) {
          if (o instanceof Uint8Array || Array.isArray(o)) return new d(o);
          throw Error("illegal buffer");
        } : function(o) {
          if (Array.isArray(o)) return new d(o);
          throw Error("illegal buffer");
        }, l = function() {
          return r.Buffer ? function(o) {
            return (d.create = function(u) {
              return r.Buffer.isBuffer(u) ? new t(u) : i(u);
            })(o);
          } : i;
        };
        d.create = l(), d.prototype._slice = r.Array.prototype.subarray || r.Array.prototype.slice, d.prototype.uint32 = /* @__PURE__ */ (function() {
          var o = 4294967295;
          return function() {
            if (o = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (o = (o | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) || (o = (o | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128)) return o;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, f(this, 10);
            return o;
          };
        })(), d.prototype.int32 = function() {
          return 0 | this.uint32();
        }, d.prototype.sint32 = function() {
          var o = this.uint32();
          return o >>> 1 ^ -(1 & o) | 0;
        }, d.prototype.bool = function() {
          return this.uint32() !== 0;
        }, d.prototype.fixed32 = function() {
          if (this.pos + 4 > this.len) throw f(this, 4);
          return a(this.buf, this.pos += 4);
        }, d.prototype.sfixed32 = function() {
          if (this.pos + 4 > this.len) throw f(this, 4);
          return 0 | a(this.buf, this.pos += 4);
        }, d.prototype.float = function() {
          if (this.pos + 4 > this.len) throw f(this, 4);
          var o = r.float.readFloatLE(this.buf, this.pos);
          return this.pos += 4, o;
        }, d.prototype.double = function() {
          if (this.pos + 8 > this.len) throw f(this, 4);
          var o = r.float.readDoubleLE(this.buf, this.pos);
          return this.pos += 8, o;
        }, d.prototype.bytes = function() {
          var o = this.uint32(), u = this.pos, p = this.pos + o;
          if (p > this.len) throw f(this, o);
          return this.pos += o, Array.isArray(this.buf) ? this.buf.slice(u, p) : u === p ? new this.buf.constructor(0) : this._slice.call(this.buf, u, p);
        }, d.prototype.string = function() {
          var o = this.bytes();
          return n.read(o, 0, o.length);
        }, d.prototype.skip = function(o) {
          if (typeof o == "number") {
            if (this.pos + o > this.len) throw f(this, o);
            this.pos += o;
          } else do
            if (this.pos >= this.len) throw f(this);
          while (128 & this.buf[this.pos++]);
          return this;
        }, d.prototype.skipType = function(o) {
          switch (o) {
            case 0:
              this.skip();
              break;
            case 1:
              this.skip(8);
              break;
            case 2:
              this.skip(this.uint32());
              break;
            case 3:
              for (; (o = 7 & this.uint32()) != 4; ) this.skipType(o);
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + o + " at offset " + this.pos);
          }
          return this;
        }, d._configure = function(o) {
          t = o, d.create = l(), t._configure();
          var u = r.Long ? "toLong" : "toNumber";
          r.merge(d.prototype, { int64: function() {
            return h.call(this)[u](!1);
          }, uint64: function() {
            return h.call(this)[u](!0);
          }, sint64: function() {
            return h.call(this).zzDecode()[u](!1);
          }, fixed64: function() {
            return s.call(this)[u](!0);
          }, sfixed64: function() {
            return s.call(this)[u](!1);
          } });
        };
      }, function(k, b, y) {
        function f(t, r, e, n) {
          if (Array.isArray(r) || (e = r, r = void 0), h.call(this, t, e), r !== void 0 && !Array.isArray(r)) throw TypeError("fieldNames must be an Array");
          this.oneof = r || [], this.fieldsArray = [], this.comment = n;
        }
        function d(t) {
          if (t.parent) for (var r = 0; r < t.fieldsArray.length; ++r) t.fieldsArray[r].parent || t.parent.add(t.fieldsArray[r]);
        }
        k.exports = f;
        var h = y(3);
        ((f.prototype = Object.create(h.prototype)).constructor = f).className = "OneOf";
        var a = y(4), s = y(0);
        f.fromJSON = function(t, r) {
          return new f(t, r.oneof, r.options, r.comment);
        }, f.prototype.toJSON = function(t) {
          var r = !!t && !!t.keepComments;
          return s.toObject(["options", this.options, "oneof", this.oneof, "comment", r ? this.comment : void 0]);
        }, f.prototype.add = function(t) {
          if (!(t instanceof a)) throw TypeError("field must be a Field");
          return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), t.partOf = this, d(this), this;
        }, f.prototype.remove = function(t) {
          if (!(t instanceof a)) throw TypeError("field must be a Field");
          var r = this.fieldsArray.indexOf(t);
          if (r < 0) throw Error(t + " is not a member of " + this);
          return this.fieldsArray.splice(r, 1), (r = this.oneof.indexOf(t.name)) > -1 && this.oneof.splice(r, 1), t.partOf = null, this;
        }, f.prototype.onAdd = function(t) {
          h.prototype.onAdd.call(this, t);
          for (var r = 0; r < this.oneof.length; ++r) {
            var e = t.get(this.oneof[r]);
            e && !e.partOf && (e.partOf = this, this.fieldsArray.push(e));
          }
          d(this);
        }, f.prototype.onRemove = function(t) {
          for (var r, e = 0; e < this.fieldsArray.length; ++e) (r = this.fieldsArray[e]).parent && r.parent.remove(r);
          h.prototype.onRemove.call(this, t);
        }, f.d = function() {
          for (var t = new Array(arguments.length), r = 0; r < arguments.length; ) t[r] = arguments[r++];
          return function(e, n) {
            s.decorateType(e.constructor).add(new f(n, t)), Object.defineProperty(e, n, { get: s.oneOfGetter(t), set: s.oneOfSetter(t) });
          };
        };
      }, function(k, b, y) {
        function f(h) {
          if (h) for (var a = Object.keys(h), s = 0; s < a.length; ++s) this[a[s]] = h[a[s]];
        }
        k.exports = f;
        var d = y(1);
        f.create = function(h) {
          return this.$type.create(h);
        }, f.encode = function(h, a) {
          return this.$type.encode(h, a);
        }, f.encodeDelimited = function(h, a) {
          return this.$type.encodeDelimited(h, a);
        }, f.decode = function(h) {
          return this.$type.decode(h);
        }, f.decodeDelimited = function(h) {
          return this.$type.decodeDelimited(h);
        }, f.verify = function(h) {
          return this.$type.verify(h);
        }, f.fromObject = function(h) {
          return this.$type.fromObject(h);
        }, f.toObject = function(h, a) {
          return this.$type.toObject(h, a);
        }, f.prototype.toJSON = function() {
          return this.$type.toObject(this, d.toJSONOptions);
        };
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.Parser = void 0;
        var f = /* @__PURE__ */ (function() {
          function a(s, t) {
            for (var r = 0; r < t.length; r++) {
              var e = t[r];
              e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e);
            }
          }
          return function(s, t, r) {
            return t && a(s.prototype, t), r && a(s, r), s;
          };
        })(), d = y(31), h = (function(a) {
          return a && a.__esModule ? a : { default: a };
        })(y(50));
        b.Parser = (function() {
          function a() {
            (function(s, t) {
              if (!(s instanceof t)) throw new TypeError("Cannot call a class as a function");
            })(this, a);
          }
          return f(a, [{ key: "load", value: function(s, t, r) {
            this.loadViaWorker(s, t, r);
          } }, { key: "loadViaWorker", value: function(s, t, r) {
            (0, h.default)(s, (function(e) {
              var n = e.movie;
              n.version = e.ver;
              var i = e.images, l = new d.VideoEntity(n, i);
              t(l);
            }), r);
          } }]), a;
        })();
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.RectPath = void 0;
        var f = y(5);
        b.RectPath = (function(d) {
          function h(a, s, t, r, e, n, i) {
            (function(o, u) {
              if (!(o instanceof u)) throw new TypeError("Cannot call a class as a function");
            })(this, h);
            var l = (function(o, u) {
              if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !u || typeof u != "object" && typeof u != "function" ? o : u;
            })(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this));
            return l._x = a, l._y = s, l._width = t, l._height = r, l._cornerRadius = e, l._transform = n, l._styles = i, l;
          }
          return (function(a, s) {
            if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          })(h, d), h;
        })(f.BezierPath);
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.EllipsePath = void 0;
        var f = y(5);
        b.EllipsePath = (function(d) {
          function h(a, s, t, r, e, n) {
            (function(l, o) {
              if (!(l instanceof o)) throw new TypeError("Cannot call a class as a function");
            })(this, h);
            var i = (function(l, o) {
              if (!l) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return !o || typeof o != "object" && typeof o != "function" ? l : o;
            })(this, (h.__proto__ || Object.getPrototypeOf(h)).call(this));
            return i._x = a, i._y = s, i._radiusX = t, i._radiusY = r, i._transform = e, i._styles = n, i;
          }
          return (function(a, s) {
            if (typeof s != "function" && s !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof s);
            a.prototype = Object.create(s && s.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(a, s) : a.__proto__ = s);
          })(h, d), h;
        })(f.BezierPath);
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 });
        var f = y(34), d = JSON.parse('{"nested":{"com":{"nested":{"opensource":{"nested":{"svga":{"options":{"objc_class_prefix":"SVGAProto","java_package":"com.opensource.svgaplayer.proto"},"nested":{"MovieParams":{"fields":{"viewBoxWidth":{"type":"float","id":1},"viewBoxHeight":{"type":"float","id":2},"fps":{"type":"int32","id":3},"frames":{"type":"int32","id":4}}},"SpriteEntity":{"fields":{"imageKey":{"type":"string","id":1},"frames":{"rule":"repeated","type":"FrameEntity","id":2},"matteKey":{"type":"string","id":3}}},"AudioEntity":{"fields":{"audioKey":{"type":"string","id":1},"startFrame":{"type":"int32","id":2},"endFrame":{"type":"int32","id":3},"startTime":{"type":"int32","id":4},"totalTime":{"type":"int32","id":5}}},"Layout":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4}}},"Transform":{"fields":{"a":{"type":"float","id":1},"b":{"type":"float","id":2},"c":{"type":"float","id":3},"d":{"type":"float","id":4},"tx":{"type":"float","id":5},"ty":{"type":"float","id":6}}},"ShapeEntity":{"oneofs":{"args":{"oneof":["shape","rect","ellipse"]}},"fields":{"type":{"type":"ShapeType","id":1},"shape":{"type":"ShapeArgs","id":2},"rect":{"type":"RectArgs","id":3},"ellipse":{"type":"EllipseArgs","id":4},"styles":{"type":"ShapeStyle","id":10},"transform":{"type":"Transform","id":11}},"nested":{"ShapeType":{"values":{"SHAPE":0,"RECT":1,"ELLIPSE":2,"KEEP":3}},"ShapeArgs":{"fields":{"d":{"type":"string","id":1}}},"RectArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"width":{"type":"float","id":3},"height":{"type":"float","id":4},"cornerRadius":{"type":"float","id":5}}},"EllipseArgs":{"fields":{"x":{"type":"float","id":1},"y":{"type":"float","id":2},"radiusX":{"type":"float","id":3},"radiusY":{"type":"float","id":4}}},"ShapeStyle":{"fields":{"fill":{"type":"RGBAColor","id":1},"stroke":{"type":"RGBAColor","id":2},"strokeWidth":{"type":"float","id":3},"lineCap":{"type":"LineCap","id":4},"lineJoin":{"type":"LineJoin","id":5},"miterLimit":{"type":"float","id":6},"lineDashI":{"type":"float","id":7},"lineDashII":{"type":"float","id":8},"lineDashIII":{"type":"float","id":9}},"nested":{"RGBAColor":{"fields":{"r":{"type":"float","id":1},"g":{"type":"float","id":2},"b":{"type":"float","id":3},"a":{"type":"float","id":4}}},"LineCap":{"values":{"LineCap_BUTT":0,"LineCap_ROUND":1,"LineCap_SQUARE":2}},"LineJoin":{"values":{"LineJoin_MITER":0,"LineJoin_ROUND":1,"LineJoin_BEVEL":2}}}}}},"FrameEntity":{"fields":{"alpha":{"type":"float","id":1},"layout":{"type":"Layout","id":2},"transform":{"type":"Transform","id":3},"clipPath":{"type":"string","id":4},"shapes":{"rule":"repeated","type":"ShapeEntity","id":5}}},"MovieEntity":{"fields":{"version":{"type":"string","id":1},"params":{"type":"MovieParams","id":2},"images":{"keyType":"string","type":"bytes","id":3},"sprites":{"rule":"repeated","type":"SpriteEntity","id":4},"audios":{"rule":"repeated","type":"AudioEntity","id":5}}}}}}}}}}}'), h = b.proto = f.Root.fromJSON(d);
        b.ProtoMovieEntity = h.lookupType("com.opensource.svga.MovieEntity");
      }, function(k, b, y) {
        k.exports = function(f, d) {
          for (var h = new Array(arguments.length - 1), a = 0, s = 2, t = !0; s < arguments.length; ) h[a++] = arguments[s++];
          return new Promise((function(r, e) {
            h[a] = function(n) {
              if (t) if (t = !1, n) e(n);
              else {
                for (var i = new Array(arguments.length - 1), l = 0; l < i.length; ) i[l++] = arguments[l];
                r.apply(null, i);
              }
            };
            try {
              f.apply(d || null, h);
            } catch (n) {
              t && (t = !1, e(n));
            }
          }));
        };
      }, function(module, exports, __webpack_require__) {
        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod;
          } catch (k) {
          }
          return null;
        }
        module.exports = inquire;
      }, function(k, b, y) {
        b.Service = y(46);
      }, function(k, b, y) {
        k.exports = {};
      }, function(k, b, y) {
        function f(s, t, r, e) {
          return t.resolvedType.group ? s("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, e, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : s("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, e, (t.id << 3 | 2) >>> 0);
        }
        k.exports = function(s) {
          for (var t, r = a.codegen(["m", "w"], s.name + "$encode")("if(!w)")("w=Writer.create()"), e = s.fieldsArray.slice().sort(a.compareFieldsById), n = 0; n < e.length; ++n) {
            var i = e[n].resolve(), l = s._fieldsArray.indexOf(i), o = i.resolvedType instanceof d ? "int32" : i.type, u = h.basic[o];
            t = "m" + a.safeProp(i.name), i.map ? (r("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, i.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (i.id << 3 | 2) >>> 0, 8 | h.mapKey[i.keyType], i.keyType), u === void 0 ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, t) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | u, o, t), r("}")("}")) : i.repeated ? (r("if(%s!=null&&%s.length){", t, t), i.packed && h.packed[o] !== void 0 ? r("w.uint32(%i).fork()", (i.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", o, t)("w.ldelim()") : (r("for(var i=0;i<%s.length;++i)", t), u === void 0 ? f(r, i, l, t + "[i]") : r("w.uint32(%i).%s(%s[i])", (i.id << 3 | u) >>> 0, o, t)), r("}")) : (i.optional && r("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, i.name), u === void 0 ? f(r, i, l, t) : r("w.uint32(%i).%s(%s)", (i.id << 3 | u) >>> 0, o, t));
          }
          return r("return w");
        };
        var d = y(2), h = y(7), a = y(0);
      }, function(k, b, y) {
        function f(m, O) {
          h.call(this, m, O), this.fields = {}, this.oneofs = void 0, this.extensions = void 0, this.reserved = void 0, this.group = void 0, this._fieldsById = null, this._fieldsArray = null, this._oneofsArray = null, this._ctor = null;
        }
        function d(m) {
          return m._fieldsById = m._fieldsArray = m._oneofsArray = null, delete m.encode, delete m.decode, delete m.verify, m;
        }
        k.exports = f;
        var h = y(6);
        ((f.prototype = Object.create(h.prototype)).constructor = f).className = "Type";
        var a = y(2), s = y(11), t = y(4), r = y(23), e = y(24), n = y(12), i = y(10), l = y(9), o = y(0), u = y(21), p = y(26), g = y(27), v = y(28), w = y(29);
        Object.defineProperties(f.prototype, { fieldsById: { get: function() {
          if (this._fieldsById) return this._fieldsById;
          this._fieldsById = {};
          for (var m = Object.keys(this.fields), O = 0; O < m.length; ++O) {
            var j = this.fields[m[O]], A = j.id;
            if (this._fieldsById[A]) throw Error("duplicate id " + A + " in " + this);
            this._fieldsById[A] = j;
          }
          return this._fieldsById;
        } }, fieldsArray: { get: function() {
          return this._fieldsArray || (this._fieldsArray = o.toArray(this.fields));
        } }, oneofsArray: { get: function() {
          return this._oneofsArray || (this._oneofsArray = o.toArray(this.oneofs));
        } }, ctor: { get: function() {
          return this._ctor || (this.ctor = f.generateConstructor(this)());
        }, set: function(m) {
          var O = m.prototype;
          O instanceof n || ((m.prototype = new n()).constructor = m, o.merge(m.prototype, O)), m.$type = m.prototype.$type = this, o.merge(m, n, !0), this._ctor = m;
          for (var j = 0; j < this.fieldsArray.length; ++j) this._fieldsArray[j].resolve();
          var A = {};
          for (j = 0; j < this.oneofsArray.length; ++j) A[this._oneofsArray[j].resolve().name] = { get: o.oneOfGetter(this._oneofsArray[j].oneof), set: o.oneOfSetter(this._oneofsArray[j].oneof) };
          j && Object.defineProperties(m.prototype, A);
        } } }), f.generateConstructor = function(m) {
          for (var O, j = o.codegen(["p"], m.name), A = 0; A < m.fieldsArray.length; ++A) (O = m._fieldsArray[A]).map ? j("this%s={}", o.safeProp(O.name)) : O.repeated && j("this%s=[]", o.safeProp(O.name));
          return j("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        }, f.fromJSON = function(m, O) {
          var j = new f(m, O.options);
          j.extensions = O.extensions, j.reserved = O.reserved;
          for (var A = Object.keys(O.fields), T = 0; T < A.length; ++T) j.add((O.fields[A[T]].keyType !== void 0 ? r.fromJSON : t.fromJSON)(A[T], O.fields[A[T]]));
          if (O.oneofs) for (A = Object.keys(O.oneofs), T = 0; T < A.length; ++T) j.add(s.fromJSON(A[T], O.oneofs[A[T]]));
          if (O.nested) for (A = Object.keys(O.nested), T = 0; T < A.length; ++T) {
            var P = O.nested[A[T]];
            j.add((P.id !== void 0 ? t.fromJSON : P.fields !== void 0 ? f.fromJSON : P.values !== void 0 ? a.fromJSON : P.methods !== void 0 ? e.fromJSON : h.fromJSON)(A[T], P));
          }
          return O.extensions && O.extensions.length && (j.extensions = O.extensions), O.reserved && O.reserved.length && (j.reserved = O.reserved), O.group && (j.group = !0), O.comment && (j.comment = O.comment), j;
        }, f.prototype.toJSON = function(m) {
          var O = h.prototype.toJSON.call(this, m), j = !!m && !!m.keepComments;
          return o.toObject(["options", O && O.options || void 0, "oneofs", h.arrayToJSON(this.oneofsArray, m), "fields", h.arrayToJSON(this.fieldsArray.filter((function(A) {
            return !A.declaringField;
          })), m) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : void 0, "reserved", this.reserved && this.reserved.length ? this.reserved : void 0, "group", this.group || void 0, "nested", O && O.nested || void 0, "comment", j ? this.comment : void 0]);
        }, f.prototype.resolveAll = function() {
          for (var m = this.fieldsArray, O = 0; O < m.length; ) m[O++].resolve();
          var j = this.oneofsArray;
          for (O = 0; O < j.length; ) j[O++].resolve();
          return h.prototype.resolveAll.call(this);
        }, f.prototype.get = function(m) {
          return this.fields[m] || this.oneofs && this.oneofs[m] || this.nested && this.nested[m] || null;
        }, f.prototype.add = function(m) {
          if (this.get(m.name)) throw Error("duplicate name '" + m.name + "' in " + this);
          if (m instanceof t && m.extend === void 0) {
            if (this._fieldsById ? this._fieldsById[m.id] : this.fieldsById[m.id]) throw Error("duplicate id " + m.id + " in " + this);
            if (this.isReservedId(m.id)) throw Error("id " + m.id + " is reserved in " + this);
            if (this.isReservedName(m.name)) throw Error("name '" + m.name + "' is reserved in " + this);
            return m.parent && m.parent.remove(m), this.fields[m.name] = m, m.message = this, m.onAdd(this), d(this);
          }
          return m instanceof s ? (this.oneofs || (this.oneofs = {}), this.oneofs[m.name] = m, m.onAdd(this), d(this)) : h.prototype.add.call(this, m);
        }, f.prototype.remove = function(m) {
          if (m instanceof t && m.extend === void 0) {
            if (!this.fields || this.fields[m.name] !== m) throw Error(m + " is not a member of " + this);
            return delete this.fields[m.name], m.parent = null, m.onRemove(this), d(this);
          }
          if (m instanceof s) {
            if (!this.oneofs || this.oneofs[m.name] !== m) throw Error(m + " is not a member of " + this);
            return delete this.oneofs[m.name], m.parent = null, m.onRemove(this), d(this);
          }
          return h.prototype.remove.call(this, m);
        }, f.prototype.isReservedId = function(m) {
          return h.isReservedId(this.reserved, m);
        }, f.prototype.isReservedName = function(m) {
          return h.isReservedName(this.reserved, m);
        }, f.prototype.create = function(m) {
          return new this.ctor(m);
        }, f.prototype.setup = function() {
          for (var m = this.fullName, O = [], j = 0; j < this.fieldsArray.length; ++j) O.push(this._fieldsArray[j].resolve().resolvedType);
          this.encode = u(this)({ Writer: l, types: O, util: o }), this.decode = p(this)({ Reader: i, types: O, util: o }), this.verify = g(this)({ types: O, util: o }), this.fromObject = v.fromObject(this)({ types: O, util: o }), this.toObject = v.toObject(this)({ types: O, util: o });
          var A = w[m];
          if (A) {
            var T = Object.create(this);
            T.fromObject = this.fromObject, this.fromObject = A.fromObject.bind(T), T.toObject = this.toObject, this.toObject = A.toObject.bind(T);
          }
          return this;
        }, f.prototype.encode = function(m, O) {
          return this.setup().encode(m, O);
        }, f.prototype.encodeDelimited = function(m, O) {
          return this.encode(m, O && O.len ? O.fork() : O).ldelim();
        }, f.prototype.decode = function(m, O) {
          return this.setup().decode(m, O);
        }, f.prototype.decodeDelimited = function(m) {
          return m instanceof i || (m = i.create(m)), this.decode(m, m.uint32());
        }, f.prototype.verify = function(m) {
          return this.setup().verify(m);
        }, f.prototype.fromObject = function(m) {
          return this.setup().fromObject(m);
        }, f.prototype.toObject = function(m, O) {
          return this.setup().toObject(m, O);
        }, f.d = function(m) {
          return function(O) {
            o.decorateType(O, m);
          };
        };
      }, function(k, b, y) {
        function f(s, t, r, e, n, i) {
          if (d.call(this, s, t, e, void 0, void 0, n, i), !a.isString(r)) throw TypeError("keyType must be a string");
          this.keyType = r, this.resolvedKeyType = null, this.map = !0;
        }
        k.exports = f;
        var d = y(4);
        ((f.prototype = Object.create(d.prototype)).constructor = f).className = "MapField";
        var h = y(7), a = y(0);
        f.fromJSON = function(s, t) {
          return new f(s, t.id, t.keyType, t.type, t.options, t.comment);
        }, f.prototype.toJSON = function(s) {
          var t = !!s && !!s.keepComments;
          return a.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : void 0]);
        }, f.prototype.resolve = function() {
          if (this.resolved) return this;
          if (h.mapKey[this.keyType] === void 0) throw Error("invalid key type: " + this.keyType);
          return d.prototype.resolve.call(this);
        }, f.d = function(s, t, r) {
          return typeof r == "function" ? r = a.decorateType(r).name : r && typeof r == "object" && (r = a.decorateEnum(r).name), function(e, n) {
            a.decorateType(e.constructor).add(new f(n, s, t, r));
          };
        };
      }, function(k, b, y) {
        function f(r, e) {
          h.call(this, r, e), this.methods = {}, this._methodsArray = null;
        }
        function d(r) {
          return r._methodsArray = null, r;
        }
        k.exports = f;
        var h = y(6);
        ((f.prototype = Object.create(h.prototype)).constructor = f).className = "Service";
        var a = y(25), s = y(0), t = y(19);
        f.fromJSON = function(r, e) {
          var n = new f(r, e.options);
          if (e.methods) for (var i = Object.keys(e.methods), l = 0; l < i.length; ++l) n.add(a.fromJSON(i[l], e.methods[i[l]]));
          return e.nested && n.addJSON(e.nested), n.comment = e.comment, n;
        }, f.prototype.toJSON = function(r) {
          var e = h.prototype.toJSON.call(this, r), n = !!r && !!r.keepComments;
          return s.toObject(["options", e && e.options || void 0, "methods", h.arrayToJSON(this.methodsArray, r) || {}, "nested", e && e.nested || void 0, "comment", n ? this.comment : void 0]);
        }, Object.defineProperty(f.prototype, "methodsArray", { get: function() {
          return this._methodsArray || (this._methodsArray = s.toArray(this.methods));
        } }), f.prototype.get = function(r) {
          return this.methods[r] || h.prototype.get.call(this, r);
        }, f.prototype.resolveAll = function() {
          for (var r = this.methodsArray, e = 0; e < r.length; ++e) r[e].resolve();
          return h.prototype.resolve.call(this);
        }, f.prototype.add = function(r) {
          if (this.get(r.name)) throw Error("duplicate name '" + r.name + "' in " + this);
          return r instanceof a ? (this.methods[r.name] = r, r.parent = this, d(this)) : h.prototype.add.call(this, r);
        }, f.prototype.remove = function(r) {
          if (r instanceof a) {
            if (this.methods[r.name] !== r) throw Error(r + " is not a member of " + this);
            return delete this.methods[r.name], r.parent = null, d(this);
          }
          return h.prototype.remove.call(this, r);
        }, f.prototype.create = function(r, e, n) {
          for (var i, l = new t.Service(r, e, n), o = 0; o < this.methodsArray.length; ++o) {
            var u = s.lcFirst((i = this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g, "");
            l[u] = s.codegen(["r", "c"], s.isReserved(u) ? u + "_" : u)("return this.rpcCall(m,q,s,r,c)")({ m: i, q: i.resolvedRequestType.ctor, s: i.resolvedResponseType.ctor });
          }
          return l;
        };
      }, function(k, b, y) {
        function f(a, s, t, r, e, n, i, l, o) {
          if (h.isObject(e) ? (i = e, e = n = void 0) : h.isObject(n) && (i = n, n = void 0), s !== void 0 && !h.isString(s)) throw TypeError("type must be a string");
          if (!h.isString(t)) throw TypeError("requestType must be a string");
          if (!h.isString(r)) throw TypeError("responseType must be a string");
          d.call(this, a, i), this.type = s || "rpc", this.requestType = t, this.requestStream = !!e || void 0, this.responseType = r, this.responseStream = !!n || void 0, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = l, this.parsedOptions = o;
        }
        k.exports = f;
        var d = y(3);
        ((f.prototype = Object.create(d.prototype)).constructor = f).className = "Method";
        var h = y(0);
        f.fromJSON = function(a, s) {
          return new f(a, s.type, s.requestType, s.responseType, s.requestStream, s.responseStream, s.options, s.comment, s.parsedOptions);
        }, f.prototype.toJSON = function(a) {
          var s = !!a && !!a.keepComments;
          return h.toObject(["type", this.type !== "rpc" && this.type || void 0, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", s ? this.comment : void 0, "parsedOptions", this.parsedOptions]);
        }, f.prototype.resolve = function() {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), d.prototype.resolve.call(this));
        };
      }, function(k, b, y) {
        function f(s) {
          return "missing required '" + s.name + "'";
        }
        k.exports = function(s) {
          var t = a.codegen(["r", "l"], s.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (s.fieldsArray.filter((function(o) {
            return o.map;
          })).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          s.group && t("if((t&7)===4)")("break"), t("switch(t>>>3){");
          for (var r = 0; r < s.fieldsArray.length; ++r) {
            var e = s._fieldsArray[r].resolve(), n = e.resolvedType instanceof d ? "int32" : e.type, i = "m" + a.safeProp(e.name);
            t("case %i:", e.id), e.map ? (t("if(%s===util.emptyObject)", i)("%s={}", i)("var c2 = r.uint32()+r.pos"), h.defaults[e.keyType] !== void 0 ? t("k=%j", h.defaults[e.keyType]) : t("k=null"), h.defaults[n] !== void 0 ? t("value=%j", h.defaults[n]) : t("value=null"), t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", e.keyType)("case 2:"), h.basic[n] === void 0 ? t("value=types[%i].decode(r,r.uint32())", r) : t("value=r.%s()", n), t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), h.long[e.keyType] !== void 0 ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', i) : t("%s[k]=value", i)) : e.repeated ? (t("if(!(%s&&%s.length))", i, i)("%s=[]", i), h.packed[n] !== void 0 && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", i, n)("}else"), h.basic[n] === void 0 ? t(e.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", i, r) : t("%s.push(r.%s())", i, n)) : h.basic[n] === void 0 ? t(e.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", i, r) : t("%s=r.%s()", i, n), t("break");
          }
          for (t("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0; r < s._fieldsArray.length; ++r) {
            var l = s._fieldsArray[r];
            l.required && t("if(!m.hasOwnProperty(%j))", l.name)("throw util.ProtocolError(%j,{instance:m})", f(l));
          }
          return t("return m");
        };
        var d = y(2), h = y(7), a = y(0);
      }, function(k, b, y) {
        function f(t, r) {
          return t.name + ": " + r + (t.repeated && r !== "array" ? "[]" : t.map && r !== "object" ? "{k:" + t.keyType + "}" : "") + " expected";
        }
        function d(t, r, e, n) {
          if (r.resolvedType) if (r.resolvedType instanceof a) {
            t("switch(%s){", n)("default:")("return%j", f(r, "enum value"));
            for (var i = Object.keys(r.resolvedType.values), l = 0; l < i.length; ++l) t("case %i:", r.resolvedType.values[i[l]]);
            t("break")("}");
          } else t("{")("var e=types[%i].verify(%s);", e, n)("if(e)")("return%j+e", r.name + ".")("}");
          else switch (r.type) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              t("if(!util.isInteger(%s))", n)("return%j", f(r, "integer"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", n, n, n, n)("return%j", f(r, "integer|Long"));
              break;
            case "float":
            case "double":
              t('if(typeof %s!=="number")', n)("return%j", f(r, "number"));
              break;
            case "bool":
              t('if(typeof %s!=="boolean")', n)("return%j", f(r, "boolean"));
              break;
            case "string":
              t("if(!util.isString(%s))", n)("return%j", f(r, "string"));
              break;
            case "bytes":
              t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', n, n, n)("return%j", f(r, "buffer"));
          }
          return t;
        }
        function h(t, r, e) {
          switch (r.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              t("if(!util.key32Re.test(%s))", e)("return%j", f(r, "integer key"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              t("if(!util.key64Re.test(%s))", e)("return%j", f(r, "integer|Long key"));
              break;
            case "bool":
              t("if(!util.key2Re.test(%s))", e)("return%j", f(r, "boolean key"));
          }
          return t;
        }
        k.exports = function(t) {
          var r = s.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), e = {};
          t.oneofsArray.length && r("var p={}");
          for (var n = 0; n < t.fieldsArray.length; ++n) {
            var i = t._fieldsArray[n].resolve(), l = "m" + s.safeProp(i.name);
            if (i.optional && r("if(%s!=null&&m.hasOwnProperty(%j)){", l, i.name), i.map) r("if(!util.isObject(%s))", l)("return%j", f(i, "object"))("var k=Object.keys(%s)", l)("for(var i=0;i<k.length;++i){"), h(r, i, "k[i]"), d(r, i, n, l + "[k[i]]")("}");
            else if (i.repeated) r("if(!Array.isArray(%s))", l)("return%j", f(i, "array"))("for(var i=0;i<%s.length;++i){", l), d(r, i, n, l + "[i]")("}");
            else {
              if (i.partOf) {
                var o = s.safeProp(i.partOf.name);
                e[i.partOf.name] === 1 && r("if(p%s===1)", o)("return%j", i.partOf.name + ": multiple values"), e[i.partOf.name] = 1, r("p%s=1", o);
              }
              d(r, i, n, l);
            }
            i.optional && r("}");
          }
          return r("return null");
        };
        var a = y(2), s = y(0);
      }, function(k, b, y) {
        function f(t, r, e, n) {
          if (r.resolvedType) if (r.resolvedType instanceof a) {
            t("switch(d%s){", n);
            for (var i = r.resolvedType.values, l = Object.keys(i), o = 0; o < l.length; ++o) r.repeated && i[l[o]] === r.typeDefault && t("default:"), t("case%j:", l[o])("case %i:", i[l[o]])("m%s=%j", n, i[l[o]])("break");
            t("}");
          } else t('if(typeof d%s!=="object")', n)("throw TypeError(%j)", r.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, e, n);
          else {
            var u = !1;
            switch (r.type) {
              case "double":
              case "float":
                t("m%s=Number(d%s)", n, n);
                break;
              case "uint32":
              case "fixed32":
                t("m%s=d%s>>>0", n, n);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                t("m%s=d%s|0", n, n);
                break;
              case "uint64":
                u = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, u)('else if(typeof d%s==="string")', n)("m%s=parseInt(d%s,10)", n, n)('else if(typeof d%s==="number")', n)("m%s=d%s", n, n)('else if(typeof d%s==="object")', n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, u ? "true" : "");
                break;
              case "bytes":
                t('if(typeof d%s==="string")', n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length)", n)("m%s=d%s", n, n);
                break;
              case "string":
                t("m%s=String(d%s)", n, n);
                break;
              case "bool":
                t("m%s=Boolean(d%s)", n, n);
            }
          }
          return t;
        }
        function d(t, r, e, n) {
          if (r.resolvedType) r.resolvedType instanceof a ? t("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, e, n, n) : t("d%s=types[%i].toObject(m%s,o)", n, e, n);
          else {
            var i = !1;
            switch (r.type) {
              case "double":
              case "float":
                t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                break;
              case "uint64":
                i = !0;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                t('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, i ? "true" : "", n);
                break;
              case "bytes":
                t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                break;
              default:
                t("d%s=m%s", n, n);
            }
          }
          return t;
        }
        var h = b, a = y(2), s = y(0);
        h.fromObject = function(t) {
          var r = t.fieldsArray, e = s.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!r.length) return e("return new this.ctor");
          e("var m=new this.ctor");
          for (var n = 0; n < r.length; ++n) {
            var i = r[n].resolve(), l = s.safeProp(i.name);
            i.map ? (e("if(d%s){", l)('if(typeof d%s!=="object")', l)("throw TypeError(%j)", i.fullName + ": object expected")("m%s={}", l)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", l), f(e, i, n, l + "[ks[i]]")("}")("}")) : i.repeated ? (e("if(d%s){", l)("if(!Array.isArray(d%s))", l)("throw TypeError(%j)", i.fullName + ": array expected")("m%s=[]", l)("for(var i=0;i<d%s.length;++i){", l), f(e, i, n, l + "[i]")("}")("}")) : (i.resolvedType instanceof a || e("if(d%s!=null){", l), f(e, i, n, l), i.resolvedType instanceof a || e("}"));
          }
          return e("return m");
        }, h.toObject = function(t) {
          var r = t.fieldsArray.slice().sort(s.compareFieldsById);
          if (!r.length) return s.codegen()("return {}");
          for (var e = s.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], i = [], l = [], o = 0; o < r.length; ++o) r[o].partOf || (r[o].resolve().repeated ? n : r[o].map ? i : l).push(r[o]);
          if (n.length) {
            for (e("if(o.arrays||o.defaults){"), o = 0; o < n.length; ++o) e("d%s=[]", s.safeProp(n[o].name));
            e("}");
          }
          if (i.length) {
            for (e("if(o.objects||o.defaults){"), o = 0; o < i.length; ++o) e("d%s={}", s.safeProp(i[o].name));
            e("}");
          }
          if (l.length) {
            for (e("if(o.defaults){"), o = 0; o < l.length; ++o) {
              var u = l[o], p = s.safeProp(u.name);
              if (u.resolvedType instanceof a) e("d%s=o.enums===String?%j:%j", p, u.resolvedType.valuesById[u.typeDefault], u.typeDefault);
              else if (u.long) e("if(util.Long){")("var n=new util.Long(%i,%i,%j)", u.typeDefault.low, u.typeDefault.high, u.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", p)("}else")("d%s=o.longs===String?%j:%i", p, u.typeDefault.toString(), u.typeDefault.toNumber());
              else if (u.bytes) {
                var g = "[" + Array.prototype.slice.call(u.typeDefault).join(",") + "]";
                e("if(o.bytes===String)d%s=%j", p, String.fromCharCode.apply(String, u.typeDefault))("else{")("d%s=%s", p, g)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", p, p)("}");
              } else e("d%s=%j", p, u.typeDefault);
            }
            e("}");
          }
          var v = !1;
          for (o = 0; o < r.length; ++o) {
            u = r[o];
            var w = t._fieldsArray.indexOf(u);
            p = s.safeProp(u.name), u.map ? (v || (v = !0, e("var ks2")), e("if(m%s&&(ks2=Object.keys(m%s)).length){", p, p)("d%s={}", p)("for(var j=0;j<ks2.length;++j){"), d(e, u, w, p + "[ks2[j]]")("}")) : u.repeated ? (e("if(m%s&&m%s.length){", p, p)("d%s=[]", p)("for(var j=0;j<m%s.length;++j){", p), d(e, u, w, p + "[j]")("}")) : (e("if(m%s!=null&&m.hasOwnProperty(%j)){", p, u.name), d(e, u, w, p), u.partOf && e("if(o.oneofs)")("d%s=%j", s.safeProp(u.partOf.name), u.name)), e("}");
          }
          return e("return d");
        };
      }, function(k, b, y) {
        var f = b, d = y(12);
        f[".google.protobuf.Any"] = { fromObject: function(h) {
          if (h && h["@type"]) {
            var a = h["@type"].substring(h["@type"].lastIndexOf("/") + 1), s = this.lookup(a);
            if (s) {
              var t = h["@type"].charAt(0) === "." ? h["@type"].substr(1) : h["@type"];
              return t.indexOf("/") === -1 && (t = "/" + t), this.create({ type_url: t, value: s.encode(s.fromObject(h)).finish() });
            }
          }
          return this.fromObject(h);
        }, toObject: function(h, a) {
          var s = "", t = "";
          if (a && a.json && h.type_url && h.value) {
            t = h.type_url.substring(h.type_url.lastIndexOf("/") + 1), s = h.type_url.substring(0, h.type_url.lastIndexOf("/") + 1);
            var r = this.lookup(t);
            r && (h = r.decode(h.value));
          }
          if (!(h instanceof this.ctor) && h instanceof d) {
            var e = h.$type.toObject(h, a);
            return s === "" && (s = "type.googleapis.com/"), t = s + (h.$type.fullName[0] === "." ? h.$type.fullName.substr(1) : h.$type.fullName), e["@type"] = t, e;
          }
          return this.toObject(h, a);
        } };
      }, function(k, b, y) {
        function f(u) {
          a.call(this, "", u), this.deferred = [], this.files = [];
        }
        function d() {
        }
        function h(u, p) {
          var g = p.parent.lookup(p.extend);
          if (g) {
            var v = new e(p.fullName, p.id, p.type, p.rule, void 0, p.options);
            return v.declaringField = p, p.extensionField = v, g.add(v), !0;
          }
          return !1;
        }
        k.exports = f;
        var a = y(6);
        ((f.prototype = Object.create(a.prototype)).constructor = f).className = "Root";
        var s, t, r, e = y(4), n = y(2), i = y(11), l = y(0);
        f.fromJSON = function(u, p) {
          return p || (p = new f()), u.options && p.setOptions(u.options), p.addJSON(u.nested);
        }, f.prototype.resolvePath = l.path.resolve, f.prototype.fetch = l.fetch, f.prototype.load = function u(p, g, v) {
          function w(M, C) {
            if (v) {
              var L = v;
              if (v = null, T) throw M;
              L(M, C);
            }
          }
          function m(M) {
            var C = M.lastIndexOf("google/protobuf/");
            if (C > -1) {
              var L = M.substring(C);
              if (L in r) return L;
            }
            return null;
          }
          function O(M, C) {
            try {
              if (l.isString(C) && C.charAt(0) === "{" && (C = JSON.parse(C)), l.isString(C)) {
                t.filename = M;
                var L, z = t(C, A, g), J = 0;
                if (z.imports) for (; J < z.imports.length; ++J) (L = m(z.imports[J]) || A.resolvePath(M, z.imports[J])) && j(L);
                if (z.weakImports) for (J = 0; J < z.weakImports.length; ++J) (L = m(z.weakImports[J]) || A.resolvePath(M, z.weakImports[J])) && j(L, !0);
              } else A.setOptions(C.options).addJSON(C.nested);
            } catch (ee) {
              w(ee);
            }
            T || P || w(null, A);
          }
          function j(M, C) {
            if (!(A.files.indexOf(M) > -1)) {
              if (A.files.push(M), M in r) return void (T ? O(M, r[M]) : (++P, setTimeout((function() {
                --P, O(M, r[M]);
              }))));
              if (T) {
                var L;
                try {
                  L = l.fs.readFileSync(M).toString("utf8");
                } catch (z) {
                  return void (C || w(z));
                }
                O(M, L);
              } else ++P, A.fetch(M, (function(z, J) {
                if (--P, v) return z ? void (C ? P || w(null, A) : w(z)) : void O(M, J);
              }));
            }
          }
          typeof g == "function" && (v = g, g = void 0);
          var A = this;
          if (!v) return l.asPromise(u, A, p, g);
          var T = v === d, P = 0;
          l.isString(p) && (p = [p]);
          for (var B, R = 0; R < p.length; ++R) (B = A.resolvePath("", p[R])) && j(B);
          if (T) return A;
          P || w(null, A);
        }, f.prototype.loadSync = function(u, p) {
          if (!l.isNode) throw Error("not supported");
          return this.load(u, p, d);
        }, f.prototype.resolveAll = function() {
          if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map((function(u) {
            return "'extend " + u.extend + "' in " + u.parent.fullName;
          })).join(", "));
          return a.prototype.resolveAll.call(this);
        };
        var o = /^[A-Z]/;
        f.prototype._handleAdd = function(u) {
          if (u instanceof e) u.extend === void 0 || u.extensionField || h(0, u) || this.deferred.push(u);
          else if (u instanceof n) o.test(u.name) && (u.parent[u.name] = u.values);
          else if (!(u instanceof i)) {
            if (u instanceof s) for (var p = 0; p < this.deferred.length; ) h(0, this.deferred[p]) ? this.deferred.splice(p, 1) : ++p;
            for (var g = 0; g < u.nestedArray.length; ++g) this._handleAdd(u._nestedArray[g]);
            o.test(u.name) && (u.parent[u.name] = u);
          }
        }, f.prototype._handleRemove = function(u) {
          if (u instanceof e) {
            if (u.extend !== void 0) if (u.extensionField) u.extensionField.parent.remove(u.extensionField), u.extensionField = null;
            else {
              var p = this.deferred.indexOf(u);
              p > -1 && this.deferred.splice(p, 1);
            }
          } else if (u instanceof n) o.test(u.name) && delete u.parent[u.name];
          else if (u instanceof a) {
            for (var g = 0; g < u.nestedArray.length; ++g) this._handleRemove(u._nestedArray[g]);
            o.test(u.name) && delete u.parent[u.name];
          }
        }, f._configure = function(u, p, g) {
          s = u, t = p, r = g;
        };
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.VideoEntity = void 0;
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        }, d = /* @__PURE__ */ (function() {
          function s(t, r) {
            for (var e = 0; e < r.length; e++) {
              var n = r[e];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }
          return function(t, r, e) {
            return r && s(t.prototype, r), e && s(t, e), t;
          };
        })(), h = y(32), a = y(16).ProtoMovieEntity;
        b.VideoEntity = (function() {
          function s(t, r) {
            (function(e, n) {
              if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            })(this, s), this.version = "", this.videoSize = { width: 0, height: 0 }, this.FPS = 20, this.frames = 0, this.images = {}, this.sprites = [], this.audios = [], (t === void 0 ? "undefined" : f(t)) === "object" && t.$type == a ? (f(t.params) === "object" && (this.version = t.ver, this.videoSize.width = t.params.viewBoxWidth || 0, this.videoSize.height = t.params.viewBoxHeight || 0, this.FPS = t.params.fps || 20, this.frames = t.params.frames || 0), this.resetSprites(t), this.audios = t.audios) : t && (t.movie && (t.movie.viewBox && (this.videoSize.width = parseFloat(t.movie.viewBox.width) || 0, this.videoSize.height = parseFloat(t.movie.viewBox.height) || 0), this.version = t.ver, this.FPS = parseInt(t.movie.fps) || 20, this.frames = parseInt(t.movie.frames) || 0), this.resetSprites(t)), r && (this.images = r);
          }
          return d(s, [{ key: "resetSprites", value: function(t) {
            t.sprites instanceof Array && (this.sprites = t.sprites.map((function(r) {
              return new h.SpriteEntity(r);
            })));
          } }]), s;
        })();
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.SpriteEntity = void 0;
        var f = y(33);
        y(5), y(14), y(15), b.SpriteEntity = function d(h) {
          (function(a, s) {
            if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
          })(this, d), this.matteKey = null, this.imageKey = null, this.frames = [], this.matteKey = h.matteKey, this.imageKey = h.imageKey, h.frames && (this.frames = h.frames.map((function(a) {
            return new f.FrameEntity(a);
          })));
        };
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.FrameEntity = void 0;
        var f = y(5);
        b.FrameEntity = function d(h) {
          (function(o, u) {
            if (!(o instanceof u)) throw new TypeError("Cannot call a class as a function");
          })(this, d), this.alpha = 0, this.transform = { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, this.layout = { x: 0, y: 0, width: 0, height: 0 }, this.nx = 0, this.ny = 0, this.maskPath = null, this.shapes = [], this.alpha = parseFloat(h.alpha) || 0, h.layout && (this.layout.x = parseFloat(h.layout.x) || 0, this.layout.y = parseFloat(h.layout.y) || 0, this.layout.width = parseFloat(h.layout.width) || 0, this.layout.height = parseFloat(h.layout.height) || 0), h.transform && (this.transform.a = parseFloat(h.transform.a) || 1, this.transform.b = parseFloat(h.transform.b) || 0, this.transform.c = parseFloat(h.transform.c) || 0, this.transform.d = parseFloat(h.transform.d) || 1, this.transform.tx = parseFloat(h.transform.tx) || 0, this.transform.ty = parseFloat(h.transform.ty) || 0), h.clipPath && h.clipPath.length > 0 && (this.maskPath = new f.BezierPath(h.clipPath, void 0, { fill: "#000000" })), h.shapes && (h.shapes instanceof Array && h.shapes.forEach((function(o) {
            switch (o.pathArgs = o.args, o.type) {
              case 0:
                o.type = "shape", o.pathArgs = o.shape;
                break;
              case 1:
                o.type = "rect", o.pathArgs = o.rect;
                break;
              case 2:
                o.type = "ellipse", o.pathArgs = o.ellipse;
                break;
              case 3:
                o.type = "keep";
            }
            if (o.styles) {
              o.styles.fill && (typeof o.styles.fill.r == "number" && (o.styles.fill[0] = o.styles.fill.r), typeof o.styles.fill.g == "number" && (o.styles.fill[1] = o.styles.fill.g), typeof o.styles.fill.b == "number" && (o.styles.fill[2] = o.styles.fill.b), typeof o.styles.fill.a == "number" && (o.styles.fill[3] = o.styles.fill.a)), o.styles.stroke && (typeof o.styles.stroke.r == "number" && (o.styles.stroke[0] = o.styles.stroke.r), typeof o.styles.stroke.g == "number" && (o.styles.stroke[1] = o.styles.stroke.g), typeof o.styles.stroke.b == "number" && (o.styles.stroke[2] = o.styles.stroke.b), typeof o.styles.stroke.a == "number" && (o.styles.stroke[3] = o.styles.stroke.a));
              var u = o.styles.lineDash || [];
              switch (o.styles.lineDashI > 0 && u.push(o.styles.lineDashI), o.styles.lineDashII > 0 && (u.length < 1 && u.push(0), u.push(o.styles.lineDashII), u.push(0)), o.styles.lineDashIII > 0 && (u.length < 2 && (u.push(0), u.push(0)), u[2] = o.styles.lineDashIII), o.styles.lineDash = u, o.styles.lineJoin) {
                case 0:
                  o.styles.lineJoin = "miter";
                  break;
                case 1:
                  o.styles.lineJoin = "round";
                  break;
                case 2:
                  o.styles.lineJoin = "bevel";
              }
              switch (o.styles.lineCap) {
                case 0:
                  o.styles.lineCap = "butt";
                  break;
                case 1:
                  o.styles.lineCap = "round";
                  break;
                case 2:
                  o.styles.lineCap = "square";
              }
            }
          })), h.shapes[0] && h.shapes[0].type === "keep" ? this.shapes = d.lastShapes : (this.shapes = h.shapes, d.lastShapes = h.shapes));
          var a = this.transform.a * this.layout.x + this.transform.c * this.layout.y + this.transform.tx, s = this.transform.a * (this.layout.x + this.layout.width) + this.transform.c * this.layout.y + this.transform.tx, t = this.transform.a * this.layout.x + this.transform.c * (this.layout.y + this.layout.height) + this.transform.tx, r = this.transform.a * (this.layout.x + this.layout.width) + this.transform.c * (this.layout.y + this.layout.height) + this.transform.tx, e = this.transform.b * this.layout.x + this.transform.d * this.layout.y + this.transform.ty, n = this.transform.b * (this.layout.x + this.layout.width) + this.transform.d * this.layout.y + this.transform.ty, i = this.transform.b * this.layout.x + this.transform.d * (this.layout.y + this.layout.height) + this.transform.ty, l = this.transform.b * (this.layout.x + this.layout.width) + this.transform.d * (this.layout.y + this.layout.height) + this.transform.ty;
          this.nx = Math.min(Math.min(t, r), Math.min(a, s)), this.ny = Math.min(Math.min(i, l), Math.min(e, n));
        };
      }, function(k, b, y) {
        k.exports = y(35);
      }, function(k, b, y) {
        var f = k.exports = y(36);
        f.build = "light", f.load = function(d, h, a) {
          return typeof h == "function" ? (a = h, h = new f.Root()) : h || (h = new f.Root()), h.load(d, a);
        }, f.loadSync = function(d, h) {
          return h || (h = new f.Root()), h.loadSync(d);
        }, f.encoder = y(21), f.decoder = y(26), f.verifier = y(27), f.converter = y(28), f.ReflectionObject = y(3), f.Namespace = y(6), f.Root = y(30), f.Enum = y(2), f.Type = y(22), f.Field = y(4), f.OneOf = y(11), f.MapField = y(23), f.Service = y(24), f.Method = y(25), f.Message = y(12), f.wrappers = y(29), f.types = y(7), f.util = y(0), f.ReflectionObject._configure(f.Root), f.Namespace._configure(f.Type, f.Service, f.Enum), f.Root._configure(f.Type), f.Field._configure(f.Type);
      }, function(k, b, y) {
        function f() {
          d.util._configure(), d.Writer._configure(d.BufferWriter), d.Reader._configure(d.BufferReader);
        }
        var d = b;
        d.build = "minimal", d.Writer = y(9), d.BufferWriter = y(44), d.Reader = y(10), d.BufferReader = y(45), d.util = y(1), d.rpc = y(19), d.roots = y(20), d.configure = f, f();
      }, function(k, b) {
        var y;
        y = /* @__PURE__ */ (function() {
          return this;
        })();
        try {
          y = y || new Function("return this")();
        } catch {
          typeof window == "object" && (y = window);
        }
        k.exports = y;
      }, function(k, b, y) {
        var f = b;
        f.length = function(s) {
          var t = s.length;
          if (!t) return 0;
          for (var r = 0; --t % 4 > 1 && s.charAt(t) === "="; ) ++r;
          return Math.ceil(3 * s.length) / 4 - r;
        };
        for (var d = new Array(64), h = new Array(123), a = 0; a < 64; ) h[d[a] = a < 26 ? a + 65 : a < 52 ? a + 71 : a < 62 ? a - 4 : a - 59 | 43] = a++;
        f.encode = function(s, t, r) {
          for (var e, n = null, i = [], l = 0, o = 0; t < r; ) {
            var u = s[t++];
            switch (o) {
              case 0:
                i[l++] = d[u >> 2], e = (3 & u) << 4, o = 1;
                break;
              case 1:
                i[l++] = d[e | u >> 4], e = (15 & u) << 2, o = 2;
                break;
              case 2:
                i[l++] = d[e | u >> 6], i[l++] = d[63 & u], o = 0;
            }
            l > 8191 && ((n || (n = [])).push(String.fromCharCode.apply(String, i)), l = 0);
          }
          return o && (i[l++] = d[e], i[l++] = 61, o === 1 && (i[l++] = 61)), n ? (l && n.push(String.fromCharCode.apply(String, i.slice(0, l))), n.join("")) : String.fromCharCode.apply(String, i.slice(0, l));
        }, f.decode = function(s, t, r) {
          for (var e, n = r, i = 0, l = 0; l < s.length; ) {
            var o = s.charCodeAt(l++);
            if (o === 61 && i > 1) break;
            if ((o = h[o]) === void 0) throw Error("invalid encoding");
            switch (i) {
              case 0:
                e = o, i = 1;
                break;
              case 1:
                t[r++] = e << 2 | (48 & o) >> 4, e = o, i = 2;
                break;
              case 2:
                t[r++] = (15 & e) << 4 | (60 & o) >> 2, e = o, i = 3;
                break;
              case 3:
                t[r++] = (3 & e) << 6 | o, i = 0;
            }
          }
          if (i === 1) throw Error("invalid encoding");
          return r - n;
        }, f.test = function(s) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s);
        };
      }, function(k, b, y) {
        function f() {
          this._listeners = {};
        }
        k.exports = f, f.prototype.on = function(d, h, a) {
          return (this._listeners[d] || (this._listeners[d] = [])).push({ fn: h, ctx: a || this }), this;
        }, f.prototype.off = function(d, h) {
          if (d === void 0) this._listeners = {};
          else if (h === void 0) this._listeners[d] = [];
          else for (var a = this._listeners[d], s = 0; s < a.length; ) a[s].fn === h ? a.splice(s, 1) : ++s;
          return this;
        }, f.prototype.emit = function(d) {
          var h = this._listeners[d];
          if (h) {
            for (var a = [], s = 1; s < arguments.length; ) a.push(arguments[s++]);
            for (s = 0; s < h.length; ) h[s].fn.apply(h[s++].ctx, a);
          }
          return this;
        };
      }, function(k, b, y) {
        function f(t) {
          return typeof Float32Array < "u" ? (function() {
            function r(p, g, v) {
              l[0] = p, g[v] = o[0], g[v + 1] = o[1], g[v + 2] = o[2], g[v + 3] = o[3];
            }
            function e(p, g, v) {
              l[0] = p, g[v] = o[3], g[v + 1] = o[2], g[v + 2] = o[1], g[v + 3] = o[0];
            }
            function n(p, g) {
              return o[0] = p[g], o[1] = p[g + 1], o[2] = p[g + 2], o[3] = p[g + 3], l[0];
            }
            function i(p, g) {
              return o[3] = p[g], o[2] = p[g + 1], o[1] = p[g + 2], o[0] = p[g + 3], l[0];
            }
            var l = new Float32Array([-0]), o = new Uint8Array(l.buffer), u = o[3] === 128;
            t.writeFloatLE = u ? r : e, t.writeFloatBE = u ? e : r, t.readFloatLE = u ? n : i, t.readFloatBE = u ? i : n;
          })() : (function() {
            function r(n, i, l, o) {
              var u = i < 0 ? 1 : 0;
              if (u && (i = -i), i === 0) n(1 / i > 0 ? 0 : 2147483648, l, o);
              else if (isNaN(i)) n(2143289344, l, o);
              else if (i > 34028234663852886e22) n((u << 31 | 2139095040) >>> 0, l, o);
              else if (i < 11754943508222875e-54) n((u << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, l, o);
              else {
                var p = Math.floor(Math.log(i) / Math.LN2);
                n((u << 31 | p + 127 << 23 | 8388607 & Math.round(i * Math.pow(2, -p) * 8388608)) >>> 0, l, o);
              }
            }
            function e(n, i, l) {
              var o = n(i, l), u = 2 * (o >> 31) + 1, p = o >>> 23 & 255, g = 8388607 & o;
              return p === 255 ? g ? NaN : u * (1 / 0) : p === 0 ? 1401298464324817e-60 * u * g : u * Math.pow(2, p - 150) * (g + 8388608);
            }
            t.writeFloatLE = r.bind(null, d), t.writeFloatBE = r.bind(null, h), t.readFloatLE = e.bind(null, a), t.readFloatBE = e.bind(null, s);
          })(), typeof Float64Array < "u" ? (function() {
            function r(p, g, v) {
              l[0] = p, g[v] = o[0], g[v + 1] = o[1], g[v + 2] = o[2], g[v + 3] = o[3], g[v + 4] = o[4], g[v + 5] = o[5], g[v + 6] = o[6], g[v + 7] = o[7];
            }
            function e(p, g, v) {
              l[0] = p, g[v] = o[7], g[v + 1] = o[6], g[v + 2] = o[5], g[v + 3] = o[4], g[v + 4] = o[3], g[v + 5] = o[2], g[v + 6] = o[1], g[v + 7] = o[0];
            }
            function n(p, g) {
              return o[0] = p[g], o[1] = p[g + 1], o[2] = p[g + 2], o[3] = p[g + 3], o[4] = p[g + 4], o[5] = p[g + 5], o[6] = p[g + 6], o[7] = p[g + 7], l[0];
            }
            function i(p, g) {
              return o[7] = p[g], o[6] = p[g + 1], o[5] = p[g + 2], o[4] = p[g + 3], o[3] = p[g + 4], o[2] = p[g + 5], o[1] = p[g + 6], o[0] = p[g + 7], l[0];
            }
            var l = new Float64Array([-0]), o = new Uint8Array(l.buffer), u = o[7] === 128;
            t.writeDoubleLE = u ? r : e, t.writeDoubleBE = u ? e : r, t.readDoubleLE = u ? n : i, t.readDoubleBE = u ? i : n;
          })() : (function() {
            function r(n, i, l, o, u, p) {
              var g = o < 0 ? 1 : 0;
              if (g && (o = -o), o === 0) n(0, u, p + i), n(1 / o > 0 ? 0 : 2147483648, u, p + l);
              else if (isNaN(o)) n(0, u, p + i), n(2146959360, u, p + l);
              else if (o > 17976931348623157e292) n(0, u, p + i), n((g << 31 | 2146435072) >>> 0, u, p + l);
              else {
                var v;
                if (o < 22250738585072014e-324) n((v = o / 5e-324) >>> 0, u, p + i), n((g << 31 | v / 4294967296) >>> 0, u, p + l);
                else {
                  var w = Math.floor(Math.log(o) / Math.LN2);
                  w === 1024 && (w = 1023), n(4503599627370496 * (v = o * Math.pow(2, -w)) >>> 0, u, p + i), n((g << 31 | w + 1023 << 20 | 1048576 * v & 1048575) >>> 0, u, p + l);
                }
              }
            }
            function e(n, i, l, o, u) {
              var p = n(o, u + i), g = n(o, u + l), v = 2 * (g >> 31) + 1, w = g >>> 20 & 2047, m = 4294967296 * (1048575 & g) + p;
              return w === 2047 ? m ? NaN : v * (1 / 0) : w === 0 ? 5e-324 * v * m : v * Math.pow(2, w - 1075) * (m + 4503599627370496);
            }
            t.writeDoubleLE = r.bind(null, d, 0, 4), t.writeDoubleBE = r.bind(null, h, 4, 0), t.readDoubleLE = e.bind(null, a, 0, 4), t.readDoubleBE = e.bind(null, s, 4, 0);
          })(), t;
        }
        function d(t, r, e) {
          r[e] = 255 & t, r[e + 1] = t >>> 8 & 255, r[e + 2] = t >>> 16 & 255, r[e + 3] = t >>> 24;
        }
        function h(t, r, e) {
          r[e] = t >>> 24, r[e + 1] = t >>> 16 & 255, r[e + 2] = t >>> 8 & 255, r[e + 3] = 255 & t;
        }
        function a(t, r) {
          return (t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24) >>> 0;
        }
        function s(t, r) {
          return (t[r] << 24 | t[r + 1] << 16 | t[r + 2] << 8 | t[r + 3]) >>> 0;
        }
        k.exports = f(f);
      }, function(k, b, y) {
        var f = b;
        f.length = function(d) {
          for (var h = 0, a = 0, s = 0; s < d.length; ++s) (a = d.charCodeAt(s)) < 128 ? h += 1 : a < 2048 ? h += 2 : (64512 & a) == 55296 && (64512 & d.charCodeAt(s + 1)) == 56320 ? (++s, h += 4) : h += 3;
          return h;
        }, f.read = function(d, h, a) {
          if (a - h < 1) return "";
          for (var s, t = null, r = [], e = 0; h < a; ) (s = d[h++]) < 128 ? r[e++] = s : s > 191 && s < 224 ? r[e++] = (31 & s) << 6 | 63 & d[h++] : s > 239 && s < 365 ? (s = ((7 & s) << 18 | (63 & d[h++]) << 12 | (63 & d[h++]) << 6 | 63 & d[h++]) - 65536, r[e++] = 55296 + (s >> 10), r[e++] = 56320 + (1023 & s)) : r[e++] = (15 & s) << 12 | (63 & d[h++]) << 6 | 63 & d[h++], e > 8191 && ((t || (t = [])).push(String.fromCharCode.apply(String, r)), e = 0);
          return t ? (e && t.push(String.fromCharCode.apply(String, r.slice(0, e))), t.join("")) : String.fromCharCode.apply(String, r.slice(0, e));
        }, f.write = function(d, h, a) {
          for (var s, t, r = a, e = 0; e < d.length; ++e) (s = d.charCodeAt(e)) < 128 ? h[a++] = s : s < 2048 ? (h[a++] = s >> 6 | 192, h[a++] = 63 & s | 128) : (64512 & s) == 55296 && (64512 & (t = d.charCodeAt(e + 1))) == 56320 ? (s = 65536 + ((1023 & s) << 10) + (1023 & t), ++e, h[a++] = s >> 18 | 240, h[a++] = s >> 12 & 63 | 128, h[a++] = s >> 6 & 63 | 128, h[a++] = 63 & s | 128) : (h[a++] = s >> 12 | 224, h[a++] = s >> 6 & 63 | 128, h[a++] = 63 & s | 128);
          return a - r;
        };
      }, function(k, b, y) {
        k.exports = function(f, d, h) {
          var a = h || 8192, s = a >>> 1, t = null, r = a;
          return function(e) {
            if (e < 1 || e > s) return f(e);
            r + e > a && (t = f(a), r = 0);
            var n = d.call(t, r, r += e);
            return 7 & r && (r = 1 + (7 | r)), n;
          };
        };
      }, function(k, b, y) {
        function f(t, r) {
          this.lo = t >>> 0, this.hi = r >>> 0;
        }
        k.exports = f;
        var d = y(1), h = f.zero = new f(0, 0);
        h.toNumber = function() {
          return 0;
        }, h.zzEncode = h.zzDecode = function() {
          return this;
        }, h.length = function() {
          return 1;
        };
        var a = f.zeroHash = "\0\0\0\0\0\0\0\0";
        f.fromNumber = function(t) {
          if (t === 0) return h;
          var r = t < 0;
          r && (t = -t);
          var e = t >>> 0, n = (t - e) / 4294967296 >>> 0;
          return r && (n = ~n >>> 0, e = ~e >>> 0, ++e > 4294967295 && (e = 0, ++n > 4294967295 && (n = 0))), new f(e, n);
        }, f.from = function(t) {
          if (typeof t == "number") return f.fromNumber(t);
          if (d.isString(t)) {
            if (!d.Long) return f.fromNumber(parseInt(t, 10));
            t = d.Long.fromString(t);
          }
          return t.low || t.high ? new f(t.low >>> 0, t.high >>> 0) : h;
        }, f.prototype.toNumber = function(t) {
          if (!t && this.hi >>> 31) {
            var r = 1 + ~this.lo >>> 0, e = ~this.hi >>> 0;
            return r || (e = e + 1 >>> 0), -(r + 4294967296 * e);
          }
          return this.lo + 4294967296 * this.hi;
        }, f.prototype.toLong = function(t) {
          return d.Long ? new d.Long(0 | this.lo, 0 | this.hi, !!t) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!t };
        };
        var s = String.prototype.charCodeAt;
        f.fromHash = function(t) {
          return t === a ? h : new f((s.call(t, 0) | s.call(t, 1) << 8 | s.call(t, 2) << 16 | s.call(t, 3) << 24) >>> 0, (s.call(t, 4) | s.call(t, 5) << 8 | s.call(t, 6) << 16 | s.call(t, 7) << 24) >>> 0);
        }, f.prototype.toHash = function() {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        }, f.prototype.zzEncode = function() {
          var t = this.hi >> 31;
          return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this;
        }, f.prototype.zzDecode = function() {
          var t = -(1 & this.lo);
          return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this;
        }, f.prototype.length = function() {
          var t = this.lo, r = (this.lo >>> 28 | this.hi << 4) >>> 0, e = this.hi >>> 24;
          return e === 0 ? r === 0 ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : r < 16384 ? r < 128 ? 5 : 6 : r < 2097152 ? 7 : 8 : e < 128 ? 9 : 10;
        };
      }, function(k, b, y) {
        function f() {
          h.call(this);
        }
        function d(s, t, r) {
          s.length < 40 ? a.utf8.write(s, t, r) : t.utf8Write ? t.utf8Write(s, r) : t.write(s, r);
        }
        k.exports = f;
        var h = y(9);
        (f.prototype = Object.create(h.prototype)).constructor = f;
        var a = y(1);
        f._configure = function() {
          f.alloc = a._Buffer_allocUnsafe, f.writeBytesBuffer = a.Buffer && a.Buffer.prototype instanceof Uint8Array && a.Buffer.prototype.set.name === "set" ? function(s, t, r) {
            t.set(s, r);
          } : function(s, t, r) {
            if (s.copy) s.copy(t, r, 0, s.length);
            else for (var e = 0; e < s.length; ) t[r++] = s[e++];
          };
        }, f.prototype.bytes = function(s) {
          a.isString(s) && (s = a._Buffer_from(s, "base64"));
          var t = s.length >>> 0;
          return this.uint32(t), t && this._push(f.writeBytesBuffer, t, s), this;
        }, f.prototype.string = function(s) {
          var t = a.Buffer.byteLength(s);
          return this.uint32(t), t && this._push(d, t, s), this;
        }, f._configure();
      }, function(k, b, y) {
        function f(a) {
          d.call(this, a);
        }
        k.exports = f;
        var d = y(10);
        (f.prototype = Object.create(d.prototype)).constructor = f;
        var h = y(1);
        f._configure = function() {
          h.Buffer && (f.prototype._slice = h.Buffer.prototype.slice);
        }, f.prototype.string = function() {
          var a = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + a, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + a, this.len));
        }, f._configure();
      }, function(k, b, y) {
        function f(h, a, s) {
          if (typeof h != "function") throw TypeError("rpcImpl must be a function");
          d.EventEmitter.call(this), this.rpcImpl = h, this.requestDelimited = !!a, this.responseDelimited = !!s;
        }
        k.exports = f;
        var d = y(1);
        (f.prototype = Object.create(d.EventEmitter.prototype)).constructor = f, f.prototype.rpcCall = function h(a, s, t, r, e) {
          if (!r) throw TypeError("request must be specified");
          var n = this;
          if (!e) return d.asPromise(h, n, a, s, t, r);
          if (n.rpcImpl) try {
            return n.rpcImpl(a, s[n.requestDelimited ? "encodeDelimited" : "encode"](r).finish(), (function(i, l) {
              if (i) return n.emit("error", i, a), e(i);
              if (l !== null) {
                if (!(l instanceof t)) try {
                  l = t[n.responseDelimited ? "decodeDelimited" : "decode"](l);
                } catch (o) {
                  return n.emit("error", o, a), e(o);
                }
                return n.emit("data", l, a), e(null, l);
              }
              n.end(!0);
            }));
          } catch (i) {
            return n.emit("error", i, a), void setTimeout((function() {
              e(i);
            }), 0);
          }
          else setTimeout((function() {
            e(Error("already ended"));
          }), 0);
        }, f.prototype.end = function(h) {
          return this.rpcImpl && (h || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
        };
      }, function(k, b, y) {
        function f(d, h) {
          function a(r) {
            if (typeof r != "string") {
              var e = s();
              if (f.verbose && console.log("codegen: " + e), e = "return " + e, r) {
                for (var n = Object.keys(r), i = new Array(n.length + 1), l = new Array(n.length), o = 0; o < n.length; ) i[o] = n[o], l[o] = r[n[o++]];
                return i[o] = e, Function.apply(null, i).apply(null, l);
              }
              return Function(e)();
            }
            for (var u = new Array(arguments.length - 1), p = 0; p < u.length; ) u[p] = arguments[++p];
            if (p = 0, r = r.replace(/%([%dfijs])/g, (function(g, v) {
              var w = u[p++];
              switch (v) {
                case "d":
                case "f":
                  return String(Number(w));
                case "i":
                  return String(Math.floor(w));
                case "j":
                  return JSON.stringify(w);
                case "s":
                  return String(w);
              }
              return "%";
            })), p !== u.length) throw Error("parameter count mismatch");
            return t.push(r), a;
          }
          function s(r) {
            return "function " + (r || h || "") + "(" + (d && d.join(",") || "") + `){
  ` + t.join(`
  `) + `
}`;
          }
          typeof d == "string" && (h = d, d = void 0);
          var t = [];
          return a.toString = s, a;
        }
        k.exports = f, f.verbose = !1;
      }, function(k, b, y) {
        function f(a, s, t) {
          return typeof s == "function" ? (t = s, s = {}) : s || (s = {}), t ? !s.xhr && h && h.readFile ? h.readFile(a, (function(r, e) {
            return r && typeof XMLHttpRequest < "u" ? f.xhr(a, s, t) : r ? t(r) : t(null, s.binary ? e : e.toString("utf8"));
          })) : f.xhr(a, s, t) : d(f, this, a, s);
        }
        k.exports = f;
        var d = y(17), h = y(18)("fs");
        f.xhr = function(a, s, t) {
          var r = new XMLHttpRequest();
          r.onreadystatechange = function() {
            if (r.readyState === 4) {
              if (r.status !== 0 && r.status !== 200) return t(Error("status " + r.status));
              if (s.binary) {
                var e = r.response;
                if (!e) {
                  e = [];
                  for (var n = 0; n < r.responseText.length; ++n) e.push(255 & r.responseText.charCodeAt(n));
                }
                return t(null, typeof Uint8Array < "u" ? new Uint8Array(e) : e);
              }
              return t(null, r.responseText);
            }
          }, s.binary && ("overrideMimeType" in r && r.overrideMimeType("text/plain; charset=x-user-defined"), r.responseType = "arraybuffer"), r.open("GET", a), r.send();
        };
      }, function(k, b, y) {
        var f = b, d = f.isAbsolute = function(a) {
          return /^(?:\/|\w+:)/.test(a);
        }, h = f.normalize = function(a) {
          var s = (a = a.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), t = d(a), r = "";
          t && (r = s.shift() + "/");
          for (var e = 0; e < s.length; ) s[e] === ".." ? e > 0 && s[e - 1] !== ".." ? s.splice(--e, 2) : t ? s.splice(e, 1) : ++e : s[e] === "." ? s.splice(e, 1) : ++e;
          return r + s.join("/");
        };
        f.resolve = function(a, s, t) {
          return t || (s = h(s)), d(s) ? s : (t || (a = h(a)), (a = a.replace(/(?:\/|^)[^/]+$/, "")).length ? h(a + "/" + s) : s);
        };
      }, function(k, b, y) {
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, d = y(16).ProtoMovieEntity, h = y(8).assign, a = y(51), s = {};
        h(s, a);
        var t = function(e) {
          for (var n = [], i = 0; i < e.length; i += 32768) n.push(String.fromCharCode.apply(null, e.subarray(i, i + 32768)));
          return n.join("");
        }, r = { loadAssets: function(e, n, i) {
          if ((typeof JSZipUtils > "u" ? "undefined" : f(JSZipUtils)) === "object" && typeof JSZip == "function") if (e.toString() == "[object File]") r._readBlobAsArrayBuffer(e, (function(u) {
            var p = new Uint8Array(u, 0, 4);
            p[0] == 80 && p[1] == 75 && p[2] == 3 && p[3] == 4 ? JSZip.loadAsync(u).then((function(g) {
              r._decodeAssets(g, n);
            })) : r.load_viaProto(u, n, i);
          }));
          else if (e.indexOf("data:svga/1.0;base64,") >= 0) {
            var l = r._base64ToArrayBuffer(e.substring(21));
            JSZip.loadAsync(l).then((function(u) {
              r._decodeAssets(u, n);
            }));
          } else e.indexOf("data:svga/2.0;base64,") >= 0 ? (l = r._base64ToArrayBuffer(e.substring(21)), r.load_viaProto(l, n, i)) : JSZipUtils.getBinaryContent(e, (function(u, p) {
            if (u) throw i && i(u), console.error(u), u;
            var g = new Uint8Array(p, 0, 4);
            g[0] == 80 && g[1] == 75 && g[2] == 3 && g[3] == 4 ? JSZip.loadAsync(p).then((function(v) {
              r._decodeAssets(v, n);
            })) : r.load_viaProto(p, n, i);
          }));
          else {
            var o = new XMLHttpRequest();
            o.open("GET", e, !0), o.responseType = "arraybuffer", o.onload = function() {
              r.load_viaProto(o.response, n, i);
            }, o.onerror = function(u) {
              if (!i) throw console.error(u), u;
              i(u);
            }, o.send();
          }
        }, load_viaProto: function(e, n, i) {
          try {
            var l = s.inflate(e), o = d.decode(l), u = {};
            r._loadImages(u, void 0, o, (function() {
              o.ver = "2.0", n({ movie: o, images: u });
            }));
          } catch (p) {
            if (i) return void i(p);
            throw console.error(p), p;
          }
        }, _decodeAssets: function(e, n) {
          var i = "1.0";
          e.file("movie.binary") && (i = "1.5"), e.file("movie.spec").async("string").then((function(l) {
            var o = JSON.parse(l), u = {};
            o.ver = i, r._loadImages(u, e, o, (function() {
              n({ movie: o, images: u });
            }));
          }));
        }, _loadImages: function(e, n, i, l) {
          var o = this;
          if ((i === void 0 ? "undefined" : f(i)) === "object" && i.$type == d) {
            var u = !0;
            if (n) e: for (var p in i.images)
              switch ((function(j) {
                if (i.images.hasOwnProperty(j)) {
                  var A = i.images[j], T = t(A);
                  return e.hasOwnProperty(j) ? "continue" : (u = !1, n.file(T + ".png").async("base64").then((function(P) {
                    e[j] = P, r._loadImages(e, n, i, l);
                  }).bind(o)), "break");
                }
              })(p)) {
                case "continue":
                  continue;
                case "break":
                  break e;
              }
            else for (var g in i.images) if (i.images.hasOwnProperty(g)) {
              var v = i.images[g], w = void 0;
              try {
                w = t(v);
              } catch {
                w = t(v);
              }
              e[g] = btoa(w);
            }
            u && l.call(this);
          } else {
            u = !0;
            for (var m in i.images) if (i.images.hasOwnProperty(m)) {
              var O = i.images[m];
              if (e.hasOwnProperty(m)) continue;
              u = !1, n.file(O + ".png").async("base64").then((function(j) {
                e[m] = j, r._loadImages(e, n, i, l);
              }).bind(this));
              break;
            }
            u && l.call(this);
          }
        }, _base64ToArrayBuffer: function(e) {
          for (var n = window.atob(e), i = n.length, l = new Uint8Array(i), o = 0; o < i; o++) l[o] = n.charCodeAt(o);
          return l.buffer;
        }, _readBlobAsArrayBuffer: function(e, n) {
          var i = new FileReader();
          i.onload = function(l) {
            n(l.target.result);
          }, i.readAsArrayBuffer(e);
        } };
        k.exports = function(e, n, i) {
          r.loadAssets(e, n, i);
        };
      }, function(k, b, y) {
        function f(l) {
          if (!(this instanceof f)) return new f(l);
          this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, l || {});
          var o = this.options;
          o.raw && o.windowBits >= 0 && o.windowBits < 16 && (o.windowBits = -o.windowBits, o.windowBits === 0 && (o.windowBits = -15)), !(o.windowBits >= 0 && o.windowBits < 16) || l && l.windowBits || (o.windowBits += 32), o.windowBits > 15 && o.windowBits < 48 && (15 & o.windowBits) == 0 && (o.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new e(), this.strm.avail_out = 0;
          var u = h.inflateInit2(this.strm, o.windowBits);
          if (u !== t.Z_OK) throw new Error(r[u]);
          if (this.header = new n(), h.inflateGetHeader(this.strm, this.header), o.dictionary && (typeof o.dictionary == "string" ? o.dictionary = s.string2buf(o.dictionary) : i.call(o.dictionary) === "[object ArrayBuffer]" && (o.dictionary = new Uint8Array(o.dictionary)), o.raw && (u = h.inflateSetDictionary(this.strm, o.dictionary)) !== t.Z_OK)) throw new Error(r[u]);
        }
        function d(l, o) {
          var u = new f(o);
          if (u.push(l, !0), u.err) throw u.msg || r[u.err];
          return u.result;
        }
        var h = y(52), a = y(8), s = y(57), t = y(58), r = y(59), e = y(60), n = y(61), i = Object.prototype.toString;
        f.prototype.push = function(l, o) {
          var u, p, g, v, w, m = this.strm, O = this.options.chunkSize, j = this.options.dictionary, A = !1;
          if (this.ended) return !1;
          p = o === ~~o ? o : o === !0 ? t.Z_FINISH : t.Z_NO_FLUSH, typeof l == "string" ? m.input = s.binstring2buf(l) : i.call(l) === "[object ArrayBuffer]" ? m.input = new Uint8Array(l) : m.input = l, m.next_in = 0, m.avail_in = m.input.length;
          do {
            if (m.avail_out === 0 && (m.output = new a.Buf8(O), m.next_out = 0, m.avail_out = O), (u = h.inflate(m, t.Z_NO_FLUSH)) === t.Z_NEED_DICT && j && (u = h.inflateSetDictionary(this.strm, j)), u === t.Z_BUF_ERROR && A === !0 && (u = t.Z_OK, A = !1), u !== t.Z_STREAM_END && u !== t.Z_OK) return this.onEnd(u), this.ended = !0, !1;
            m.next_out && (m.avail_out !== 0 && u !== t.Z_STREAM_END && (m.avail_in !== 0 || p !== t.Z_FINISH && p !== t.Z_SYNC_FLUSH) || (this.options.to === "string" ? (g = s.utf8border(m.output, m.next_out), v = m.next_out - g, w = s.buf2string(m.output, g), m.next_out = v, m.avail_out = O - v, v && a.arraySet(m.output, m.output, g, v, 0), this.onData(w)) : this.onData(a.shrinkBuf(m.output, m.next_out)))), m.avail_in === 0 && m.avail_out === 0 && (A = !0);
          } while ((m.avail_in > 0 || m.avail_out === 0) && u !== t.Z_STREAM_END);
          return u === t.Z_STREAM_END && (p = t.Z_FINISH), p === t.Z_FINISH ? (u = h.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === t.Z_OK) : p !== t.Z_SYNC_FLUSH || (this.onEnd(t.Z_OK), m.avail_out = 0, !0);
        }, f.prototype.onData = function(l) {
          this.chunks.push(l);
        }, f.prototype.onEnd = function(l) {
          l === t.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = l, this.msg = this.strm.msg;
        }, b.Inflate = f, b.inflate = d, b.inflateRaw = function(l, o) {
          return (o = o || {}).raw = !0, d(l, o);
        }, b.ungzip = d;
      }, function(k, b, y) {
        function f(_) {
          return (_ >>> 24 & 255) + (_ >>> 8 & 65280) + ((65280 & _) << 8) + ((255 & _) << 24);
        }
        function d() {
          this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new l.Buf16(320), this.work = new l.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
        }
        function h(_) {
          var E;
          return _ && _.state ? (E = _.state, _.total_in = _.total_out = E.total = 0, _.msg = "", E.wrap && (_.adler = 1 & E.wrap), E.mode = J, E.last = 0, E.havedict = 0, E.dmax = 32768, E.head = null, E.hold = 0, E.bits = 0, E.lencode = E.lendyn = new l.Buf32(ze), E.distcode = E.distdyn = new l.Buf32(Je), E.sane = 1, E.back = -1, T) : R;
        }
        function a(_) {
          var E;
          return _ && _.state ? ((E = _.state).wsize = 0, E.whave = 0, E.wnext = 0, h(_)) : R;
        }
        function s(_, E) {
          var c, I;
          return _ && _.state ? (I = _.state, E < 0 ? (c = 0, E = -E) : (c = 1 + (E >> 4), E < 48 && (E &= 15)), E && (E < 8 || E > 15) ? R : (I.window !== null && I.wbits !== E && (I.window = null), I.wrap = c, I.wbits = E, a(_))) : R;
        }
        function t(_, E) {
          var c, I;
          return _ ? (I = new d(), _.state = I, I.window = null, (c = s(_, E)) !== T && (_.state = null), c) : R;
        }
        function r(_) {
          if (De) {
            var E;
            for (n = new l.Buf32(512), i = new l.Buf32(32), E = 0; E < 144; ) _.lens[E++] = 8;
            for (; E < 256; ) _.lens[E++] = 9;
            for (; E < 280; ) _.lens[E++] = 7;
            for (; E < 288; ) _.lens[E++] = 8;
            for (g(w, _.lens, 0, 288, n, 0, _.work, { bits: 9 }), E = 0; E < 32; ) _.lens[E++] = 5;
            g(m, _.lens, 0, 32, i, 0, _.work, { bits: 5 }), De = !1;
          }
          _.lencode = n, _.lenbits = 9, _.distcode = i, _.distbits = 5;
        }
        function e(_, E, c, I) {
          var V, N = _.state;
          return N.window === null && (N.wsize = 1 << N.wbits, N.wnext = 0, N.whave = 0, N.window = new l.Buf8(N.wsize)), I >= N.wsize ? (l.arraySet(N.window, E, c - N.wsize, N.wsize, 0), N.wnext = 0, N.whave = N.wsize) : ((V = N.wsize - N.wnext) > I && (V = I), l.arraySet(N.window, E, c - I, V, N.wnext), (I -= V) ? (l.arraySet(N.window, E, c - I, I, 0), N.wnext = I, N.whave = N.wsize) : (N.wnext += V, N.wnext === N.wsize && (N.wnext = 0), N.whave < N.wsize && (N.whave += V))), 0;
        }
        var n, i, l = y(8), o = y(53), u = y(54), p = y(55), g = y(56), v = 0, w = 1, m = 2, O = 4, j = 5, A = 6, T = 0, P = 1, B = 2, R = -2, M = -3, C = -4, L = -5, z = 8, J = 1, ee = 2, oe = 3, Q = 4, fe = 5, he = 6, ie = 7, le = 8, ue = 9, ce = 10, de = 11, se = 12, _e = 13, Ae = 14, we = 15, Se = 16, je = 17, Te = 18, Ee = 19, pe = 20, ye = 21, Ne = 22, Fe = 23, Ce = 24, Be = 25, Ie = 26, ke = 27, Pe = 28, Re = 29, U = 30, xe = 31, Le = 32, ze = 852, Je = 592, Ue = 15, De = !0;
        b.inflateReset = a, b.inflateReset2 = s, b.inflateResetKeep = h, b.inflateInit = function(_) {
          return t(_, Ue);
        }, b.inflateInit2 = t, b.inflate = function(_, E) {
          var c, I, V, N, te, F, $, S, x, me, q, D, ve, Oe, Z, W, X, Y, ge, be, K, re, ae, ne, G = 0, H = new l.Buf8(4), Me = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          if (!_ || !_.state || !_.output || !_.input && _.avail_in !== 0) return R;
          (c = _.state).mode === se && (c.mode = _e), te = _.next_out, V = _.output, $ = _.avail_out, N = _.next_in, I = _.input, F = _.avail_in, S = c.hold, x = c.bits, me = F, q = $, re = T;
          e: for (; ; ) switch (c.mode) {
            case J:
              if (c.wrap === 0) {
                c.mode = _e;
                break;
              }
              for (; x < 16; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              if (2 & c.wrap && S === 35615) {
                c.check = 0, H[0] = 255 & S, H[1] = S >>> 8 & 255, c.check = u(c.check, H, 2, 0), S = 0, x = 0, c.mode = ee;
                break;
              }
              if (c.flags = 0, c.head && (c.head.done = !1), !(1 & c.wrap) || (((255 & S) << 8) + (S >> 8)) % 31) {
                _.msg = "incorrect header check", c.mode = U;
                break;
              }
              if ((15 & S) !== z) {
                _.msg = "unknown compression method", c.mode = U;
                break;
              }
              if (x -= 4, K = 8 + (15 & (S >>>= 4)), c.wbits === 0) c.wbits = K;
              else if (K > c.wbits) {
                _.msg = "invalid window size", c.mode = U;
                break;
              }
              c.dmax = 1 << K, _.adler = c.check = 1, c.mode = 512 & S ? ce : se, S = 0, x = 0;
              break;
            case ee:
              for (; x < 16; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              if (c.flags = S, (255 & c.flags) !== z) {
                _.msg = "unknown compression method", c.mode = U;
                break;
              }
              if (57344 & c.flags) {
                _.msg = "unknown header flags set", c.mode = U;
                break;
              }
              c.head && (c.head.text = S >> 8 & 1), 512 & c.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, c.check = u(c.check, H, 2, 0)), S = 0, x = 0, c.mode = oe;
            case oe:
              for (; x < 32; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              c.head && (c.head.time = S), 512 & c.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, H[2] = S >>> 16 & 255, H[3] = S >>> 24 & 255, c.check = u(c.check, H, 4, 0)), S = 0, x = 0, c.mode = Q;
            case Q:
              for (; x < 16; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              c.head && (c.head.xflags = 255 & S, c.head.os = S >> 8), 512 & c.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, c.check = u(c.check, H, 2, 0)), S = 0, x = 0, c.mode = fe;
            case fe:
              if (1024 & c.flags) {
                for (; x < 16; ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                c.length = S, c.head && (c.head.extra_len = S), 512 & c.flags && (H[0] = 255 & S, H[1] = S >>> 8 & 255, c.check = u(c.check, H, 2, 0)), S = 0, x = 0;
              } else c.head && (c.head.extra = null);
              c.mode = he;
            case he:
              if (1024 & c.flags && ((D = c.length) > F && (D = F), D && (c.head && (K = c.head.extra_len - c.length, c.head.extra || (c.head.extra = new Array(c.head.extra_len)), l.arraySet(c.head.extra, I, N, D, K)), 512 & c.flags && (c.check = u(c.check, I, D, N)), F -= D, N += D, c.length -= D), c.length)) break e;
              c.length = 0, c.mode = ie;
            case ie:
              if (2048 & c.flags) {
                if (F === 0) break e;
                D = 0;
                do
                  K = I[N + D++], c.head && K && c.length < 65536 && (c.head.name += String.fromCharCode(K));
                while (K && D < F);
                if (512 & c.flags && (c.check = u(c.check, I, D, N)), F -= D, N += D, K) break e;
              } else c.head && (c.head.name = null);
              c.length = 0, c.mode = le;
            case le:
              if (4096 & c.flags) {
                if (F === 0) break e;
                D = 0;
                do
                  K = I[N + D++], c.head && K && c.length < 65536 && (c.head.comment += String.fromCharCode(K));
                while (K && D < F);
                if (512 & c.flags && (c.check = u(c.check, I, D, N)), F -= D, N += D, K) break e;
              } else c.head && (c.head.comment = null);
              c.mode = ue;
            case ue:
              if (512 & c.flags) {
                for (; x < 16; ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                if (S !== (65535 & c.check)) {
                  _.msg = "header crc mismatch", c.mode = U;
                  break;
                }
                S = 0, x = 0;
              }
              c.head && (c.head.hcrc = c.flags >> 9 & 1, c.head.done = !0), _.adler = c.check = 0, c.mode = se;
              break;
            case ce:
              for (; x < 32; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              _.adler = c.check = f(S), S = 0, x = 0, c.mode = de;
            case de:
              if (c.havedict === 0) return _.next_out = te, _.avail_out = $, _.next_in = N, _.avail_in = F, c.hold = S, c.bits = x, B;
              _.adler = c.check = 1, c.mode = se;
            case se:
              if (E === j || E === A) break e;
            case _e:
              if (c.last) {
                S >>>= 7 & x, x -= 7 & x, c.mode = ke;
                break;
              }
              for (; x < 3; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              switch (c.last = 1 & S, x -= 1, 3 & (S >>>= 1)) {
                case 0:
                  c.mode = Ae;
                  break;
                case 1:
                  if (r(c), c.mode = pe, E === A) {
                    S >>>= 2, x -= 2;
                    break e;
                  }
                  break;
                case 2:
                  c.mode = je;
                  break;
                case 3:
                  _.msg = "invalid block type", c.mode = U;
              }
              S >>>= 2, x -= 2;
              break;
            case Ae:
              for (S >>>= 7 & x, x -= 7 & x; x < 32; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              if ((65535 & S) != (S >>> 16 ^ 65535)) {
                _.msg = "invalid stored block lengths", c.mode = U;
                break;
              }
              if (c.length = 65535 & S, S = 0, x = 0, c.mode = we, E === A) break e;
            case we:
              c.mode = Se;
            case Se:
              if (D = c.length) {
                if (D > F && (D = F), D > $ && (D = $), D === 0) break e;
                l.arraySet(V, I, N, D, te), F -= D, N += D, $ -= D, te += D, c.length -= D;
                break;
              }
              c.mode = se;
              break;
            case je:
              for (; x < 14; ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              if (c.nlen = 257 + (31 & S), S >>>= 5, x -= 5, c.ndist = 1 + (31 & S), S >>>= 5, x -= 5, c.ncode = 4 + (15 & S), S >>>= 4, x -= 4, c.nlen > 286 || c.ndist > 30) {
                _.msg = "too many length or distance symbols", c.mode = U;
                break;
              }
              c.have = 0, c.mode = Te;
            case Te:
              for (; c.have < c.ncode; ) {
                for (; x < 3; ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                c.lens[Me[c.have++]] = 7 & S, S >>>= 3, x -= 3;
              }
              for (; c.have < 19; ) c.lens[Me[c.have++]] = 0;
              if (c.lencode = c.lendyn, c.lenbits = 7, ae = { bits: c.lenbits }, re = g(v, c.lens, 0, 19, c.lencode, 0, c.work, ae), c.lenbits = ae.bits, re) {
                _.msg = "invalid code lengths set", c.mode = U;
                break;
              }
              c.have = 0, c.mode = Ee;
            case Ee:
              for (; c.have < c.nlen + c.ndist; ) {
                for (; W = (G = c.lencode[S & (1 << c.lenbits) - 1]) >>> 16 & 255, X = 65535 & G, !((Z = G >>> 24) <= x); ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                if (X < 16) S >>>= Z, x -= Z, c.lens[c.have++] = X;
                else {
                  if (X === 16) {
                    for (ne = Z + 2; x < ne; ) {
                      if (F === 0) break e;
                      F--, S += I[N++] << x, x += 8;
                    }
                    if (S >>>= Z, x -= Z, c.have === 0) {
                      _.msg = "invalid bit length repeat", c.mode = U;
                      break;
                    }
                    K = c.lens[c.have - 1], D = 3 + (3 & S), S >>>= 2, x -= 2;
                  } else if (X === 17) {
                    for (ne = Z + 3; x < ne; ) {
                      if (F === 0) break e;
                      F--, S += I[N++] << x, x += 8;
                    }
                    x -= Z, K = 0, D = 3 + (7 & (S >>>= Z)), S >>>= 3, x -= 3;
                  } else {
                    for (ne = Z + 7; x < ne; ) {
                      if (F === 0) break e;
                      F--, S += I[N++] << x, x += 8;
                    }
                    x -= Z, K = 0, D = 11 + (127 & (S >>>= Z)), S >>>= 7, x -= 7;
                  }
                  if (c.have + D > c.nlen + c.ndist) {
                    _.msg = "invalid bit length repeat", c.mode = U;
                    break;
                  }
                  for (; D--; ) c.lens[c.have++] = K;
                }
              }
              if (c.mode === U) break;
              if (c.lens[256] === 0) {
                _.msg = "invalid code -- missing end-of-block", c.mode = U;
                break;
              }
              if (c.lenbits = 9, ae = { bits: c.lenbits }, re = g(w, c.lens, 0, c.nlen, c.lencode, 0, c.work, ae), c.lenbits = ae.bits, re) {
                _.msg = "invalid literal/lengths set", c.mode = U;
                break;
              }
              if (c.distbits = 6, c.distcode = c.distdyn, ae = { bits: c.distbits }, re = g(m, c.lens, c.nlen, c.ndist, c.distcode, 0, c.work, ae), c.distbits = ae.bits, re) {
                _.msg = "invalid distances set", c.mode = U;
                break;
              }
              if (c.mode = pe, E === A) break e;
            case pe:
              c.mode = ye;
            case ye:
              if (F >= 6 && $ >= 258) {
                _.next_out = te, _.avail_out = $, _.next_in = N, _.avail_in = F, c.hold = S, c.bits = x, p(_, q), te = _.next_out, V = _.output, $ = _.avail_out, N = _.next_in, I = _.input, F = _.avail_in, S = c.hold, x = c.bits, c.mode === se && (c.back = -1);
                break;
              }
              for (c.back = 0; W = (G = c.lencode[S & (1 << c.lenbits) - 1]) >>> 16 & 255, X = 65535 & G, !((Z = G >>> 24) <= x); ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              if (W && (240 & W) == 0) {
                for (Y = Z, ge = W, be = X; W = (G = c.lencode[be + ((S & (1 << Y + ge) - 1) >> Y)]) >>> 16 & 255, X = 65535 & G, !(Y + (Z = G >>> 24) <= x); ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                S >>>= Y, x -= Y, c.back += Y;
              }
              if (S >>>= Z, x -= Z, c.back += Z, c.length = X, W === 0) {
                c.mode = Ie;
                break;
              }
              if (32 & W) {
                c.back = -1, c.mode = se;
                break;
              }
              if (64 & W) {
                _.msg = "invalid literal/length code", c.mode = U;
                break;
              }
              c.extra = 15 & W, c.mode = Ne;
            case Ne:
              if (c.extra) {
                for (ne = c.extra; x < ne; ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                c.length += S & (1 << c.extra) - 1, S >>>= c.extra, x -= c.extra, c.back += c.extra;
              }
              c.was = c.length, c.mode = Fe;
            case Fe:
              for (; W = (G = c.distcode[S & (1 << c.distbits) - 1]) >>> 16 & 255, X = 65535 & G, !((Z = G >>> 24) <= x); ) {
                if (F === 0) break e;
                F--, S += I[N++] << x, x += 8;
              }
              if ((240 & W) == 0) {
                for (Y = Z, ge = W, be = X; W = (G = c.distcode[be + ((S & (1 << Y + ge) - 1) >> Y)]) >>> 16 & 255, X = 65535 & G, !(Y + (Z = G >>> 24) <= x); ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                S >>>= Y, x -= Y, c.back += Y;
              }
              if (S >>>= Z, x -= Z, c.back += Z, 64 & W) {
                _.msg = "invalid distance code", c.mode = U;
                break;
              }
              c.offset = X, c.extra = 15 & W, c.mode = Ce;
            case Ce:
              if (c.extra) {
                for (ne = c.extra; x < ne; ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                c.offset += S & (1 << c.extra) - 1, S >>>= c.extra, x -= c.extra, c.back += c.extra;
              }
              if (c.offset > c.dmax) {
                _.msg = "invalid distance too far back", c.mode = U;
                break;
              }
              c.mode = Be;
            case Be:
              if ($ === 0) break e;
              if (D = q - $, c.offset > D) {
                if ((D = c.offset - D) > c.whave && c.sane) {
                  _.msg = "invalid distance too far back", c.mode = U;
                  break;
                }
                D > c.wnext ? (D -= c.wnext, ve = c.wsize - D) : ve = c.wnext - D, D > c.length && (D = c.length), Oe = c.window;
              } else Oe = V, ve = te - c.offset, D = c.length;
              D > $ && (D = $), $ -= D, c.length -= D;
              do
                V[te++] = Oe[ve++];
              while (--D);
              c.length === 0 && (c.mode = ye);
              break;
            case Ie:
              if ($ === 0) break e;
              V[te++] = c.length, $--, c.mode = ye;
              break;
            case ke:
              if (c.wrap) {
                for (; x < 32; ) {
                  if (F === 0) break e;
                  F--, S |= I[N++] << x, x += 8;
                }
                if (q -= $, _.total_out += q, c.total += q, q && (_.adler = c.check = c.flags ? u(c.check, V, q, te - q) : o(c.check, V, q, te - q)), q = $, (c.flags ? S : f(S)) !== c.check) {
                  _.msg = "incorrect data check", c.mode = U;
                  break;
                }
                S = 0, x = 0;
              }
              c.mode = Pe;
            case Pe:
              if (c.wrap && c.flags) {
                for (; x < 32; ) {
                  if (F === 0) break e;
                  F--, S += I[N++] << x, x += 8;
                }
                if (S !== (4294967295 & c.total)) {
                  _.msg = "incorrect length check", c.mode = U;
                  break;
                }
                S = 0, x = 0;
              }
              c.mode = Re;
            case Re:
              re = P;
              break e;
            case U:
              re = M;
              break e;
            case xe:
              return C;
            case Le:
            default:
              return R;
          }
          return _.next_out = te, _.avail_out = $, _.next_in = N, _.avail_in = F, c.hold = S, c.bits = x, (c.wsize || q !== _.avail_out && c.mode < U && (c.mode < ke || E !== O)) && e(_, _.output, _.next_out, q - _.avail_out) ? (c.mode = xe, C) : (me -= _.avail_in, q -= _.avail_out, _.total_in += me, _.total_out += q, c.total += q, c.wrap && q && (_.adler = c.check = c.flags ? u(c.check, V, q, _.next_out - q) : o(c.check, V, q, _.next_out - q)), _.data_type = c.bits + (c.last ? 64 : 0) + (c.mode === se ? 128 : 0) + (c.mode === pe || c.mode === we ? 256 : 0), (me === 0 && q === 0 || E === O) && re === T && (re = L), re);
        }, b.inflateEnd = function(_) {
          if (!_ || !_.state) return R;
          var E = _.state;
          return E.window && (E.window = null), _.state = null, T;
        }, b.inflateGetHeader = function(_, E) {
          var c;
          return _ && _.state ? (2 & (c = _.state).wrap) == 0 ? R : (c.head = E, E.done = !1, T) : R;
        }, b.inflateSetDictionary = function(_, E) {
          var c, I = E.length;
          return _ && _.state ? (c = _.state).wrap !== 0 && c.mode !== de ? R : c.mode === de && o(1, E, I, 0) !== c.check ? M : e(_, E, I, I) ? (c.mode = xe, C) : (c.havedict = 1, T) : R;
        }, b.inflateInfo = "pako inflate (from Nodeca project)";
      }, function(k, b, y) {
        k.exports = function(f, d, h, a) {
          for (var s = 65535 & f | 0, t = f >>> 16 & 65535 | 0, r = 0; h !== 0; ) {
            h -= r = h > 2e3 ? 2e3 : h;
            do
              t = t + (s = s + d[a++] | 0) | 0;
            while (--r);
            s %= 65521, t %= 65521;
          }
          return s | t << 16 | 0;
        };
      }, function(k, b, y) {
        var f = (function() {
          for (var d, h = [], a = 0; a < 256; a++) {
            d = a;
            for (var s = 0; s < 8; s++) d = 1 & d ? 3988292384 ^ d >>> 1 : d >>> 1;
            h[a] = d;
          }
          return h;
        })();
        k.exports = function(d, h, a, s) {
          var t = f, r = s + a;
          d ^= -1;
          for (var e = s; e < r; e++) d = d >>> 8 ^ t[255 & (d ^ h[e])];
          return -1 ^ d;
        };
      }, function(k, b, y) {
        k.exports = function(f, d) {
          var h, a, s, t, r, e, n, i, l, o, u, p, g, v, w, m, O, j, A, T, P, B, R, M, C;
          h = f.state, a = f.next_in, M = f.input, s = a + (f.avail_in - 5), t = f.next_out, C = f.output, r = t - (d - f.avail_out), e = t + (f.avail_out - 257), n = h.dmax, i = h.wsize, l = h.whave, o = h.wnext, u = h.window, p = h.hold, g = h.bits, v = h.lencode, w = h.distcode, m = (1 << h.lenbits) - 1, O = (1 << h.distbits) - 1;
          e: do {
            g < 15 && (p += M[a++] << g, g += 8, p += M[a++] << g, g += 8), j = v[p & m];
            t: for (; ; ) {
              if (p >>>= A = j >>> 24, g -= A, (A = j >>> 16 & 255) == 0) C[t++] = 65535 & j;
              else {
                if (!(16 & A)) {
                  if ((64 & A) == 0) {
                    j = v[(65535 & j) + (p & (1 << A) - 1)];
                    continue t;
                  }
                  if (32 & A) {
                    h.mode = 12;
                    break e;
                  }
                  f.msg = "invalid literal/length code", h.mode = 30;
                  break e;
                }
                T = 65535 & j, (A &= 15) && (g < A && (p += M[a++] << g, g += 8), T += p & (1 << A) - 1, p >>>= A, g -= A), g < 15 && (p += M[a++] << g, g += 8, p += M[a++] << g, g += 8), j = w[p & O];
                r: for (; ; ) {
                  if (p >>>= A = j >>> 24, g -= A, !(16 & (A = j >>> 16 & 255))) {
                    if ((64 & A) == 0) {
                      j = w[(65535 & j) + (p & (1 << A) - 1)];
                      continue r;
                    }
                    f.msg = "invalid distance code", h.mode = 30;
                    break e;
                  }
                  if (P = 65535 & j, g < (A &= 15) && (p += M[a++] << g, (g += 8) < A && (p += M[a++] << g, g += 8)), (P += p & (1 << A) - 1) > n) {
                    f.msg = "invalid distance too far back", h.mode = 30;
                    break e;
                  }
                  if (p >>>= A, g -= A, P > (A = t - r)) {
                    if ((A = P - A) > l && h.sane) {
                      f.msg = "invalid distance too far back", h.mode = 30;
                      break e;
                    }
                    if (B = 0, R = u, o === 0) {
                      if (B += i - A, A < T) {
                        T -= A;
                        do
                          C[t++] = u[B++];
                        while (--A);
                        B = t - P, R = C;
                      }
                    } else if (o < A) {
                      if (B += i + o - A, (A -= o) < T) {
                        T -= A;
                        do
                          C[t++] = u[B++];
                        while (--A);
                        if (B = 0, o < T) {
                          T -= A = o;
                          do
                            C[t++] = u[B++];
                          while (--A);
                          B = t - P, R = C;
                        }
                      }
                    } else if (B += o - A, A < T) {
                      T -= A;
                      do
                        C[t++] = u[B++];
                      while (--A);
                      B = t - P, R = C;
                    }
                    for (; T > 2; ) C[t++] = R[B++], C[t++] = R[B++], C[t++] = R[B++], T -= 3;
                    T && (C[t++] = R[B++], T > 1 && (C[t++] = R[B++]));
                  } else {
                    B = t - P;
                    do
                      C[t++] = C[B++], C[t++] = C[B++], C[t++] = C[B++], T -= 3;
                    while (T > 2);
                    T && (C[t++] = C[B++], T > 1 && (C[t++] = C[B++]));
                  }
                  break;
                }
              }
              break;
            }
          } while (a < s && t < e);
          a -= T = g >> 3, p &= (1 << (g -= T << 3)) - 1, f.next_in = a, f.next_out = t, f.avail_in = a < s ? s - a + 5 : 5 - (a - s), f.avail_out = t < e ? e - t + 257 : 257 - (t - e), h.hold = p, h.bits = g;
        };
      }, function(k, b, y) {
        var f = y(8), d = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], h = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], a = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], s = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
        k.exports = function(t, r, e, n, i, l, o, u) {
          var p, g, v, w, m, O, j, A, T, P = u.bits, B = 0, R = 0, M = 0, C = 0, L = 0, z = 0, J = 0, ee = 0, oe = 0, Q = 0, fe = null, he = 0, ie = new f.Buf16(16), le = new f.Buf16(16), ue = null, ce = 0;
          for (B = 0; B <= 15; B++) ie[B] = 0;
          for (R = 0; R < n; R++) ie[r[e + R]]++;
          for (L = P, C = 15; C >= 1 && ie[C] === 0; C--) ;
          if (L > C && (L = C), C === 0) return i[l++] = 20971520, i[l++] = 20971520, u.bits = 1, 0;
          for (M = 1; M < C && ie[M] === 0; M++) ;
          for (L < M && (L = M), ee = 1, B = 1; B <= 15; B++) if (ee <<= 1, (ee -= ie[B]) < 0) return -1;
          if (ee > 0 && (t === 0 || C !== 1)) return -1;
          for (le[1] = 0, B = 1; B < 15; B++) le[B + 1] = le[B] + ie[B];
          for (R = 0; R < n; R++) r[e + R] !== 0 && (o[le[r[e + R]]++] = R);
          if (t === 0 ? (fe = ue = o, O = 19) : t === 1 ? (fe = d, he -= 257, ue = h, ce -= 257, O = 256) : (fe = a, ue = s, O = -1), Q = 0, R = 0, B = M, m = l, z = L, J = 0, v = -1, w = (oe = 1 << L) - 1, t === 1 && oe > 852 || t === 2 && oe > 592) return 1;
          for (; ; ) {
            j = B - J, o[R] < O ? (A = 0, T = o[R]) : o[R] > O ? (A = ue[ce + o[R]], T = fe[he + o[R]]) : (A = 96, T = 0), p = 1 << B - J, M = g = 1 << z;
            do
              i[m + (Q >> J) + (g -= p)] = j << 24 | A << 16 | T | 0;
            while (g !== 0);
            for (p = 1 << B - 1; Q & p; ) p >>= 1;
            if (p !== 0 ? (Q &= p - 1, Q += p) : Q = 0, R++, --ie[B] == 0) {
              if (B === C) break;
              B = r[e + o[R]];
            }
            if (B > L && (Q & w) !== v) {
              for (J === 0 && (J = L), m += M, ee = 1 << (z = B - J); z + J < C && !((ee -= ie[z + J]) <= 0); ) z++, ee <<= 1;
              if (oe += 1 << z, t === 1 && oe > 852 || t === 2 && oe > 592) return 1;
              i[v = Q & w] = L << 24 | z << 16 | m - l | 0;
            }
          }
          return Q !== 0 && (i[m + Q] = B - J << 24 | 64 << 16 | 0), u.bits = L, 0;
        };
      }, function(k, b, y) {
        function f(r, e) {
          if (e < 65534 && (r.subarray && a || !r.subarray && h)) return String.fromCharCode.apply(null, d.shrinkBuf(r, e));
          for (var n = "", i = 0; i < e; i++) n += String.fromCharCode(r[i]);
          return n;
        }
        var d = y(8), h = !0, a = !0;
        try {
          String.fromCharCode.apply(null, [0]);
        } catch {
          h = !1;
        }
        try {
          String.fromCharCode.apply(null, new Uint8Array(1));
        } catch {
          a = !1;
        }
        for (var s = new d.Buf8(256), t = 0; t < 256; t++) s[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
        s[254] = s[254] = 1, b.string2buf = function(r) {
          var e, n, i, l, o, u = r.length, p = 0;
          for (l = 0; l < u; l++) (64512 & (n = r.charCodeAt(l))) == 55296 && l + 1 < u && (64512 & (i = r.charCodeAt(l + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), l++), p += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
          for (e = new d.Buf8(p), o = 0, l = 0; o < p; l++) (64512 & (n = r.charCodeAt(l))) == 55296 && l + 1 < u && (64512 & (i = r.charCodeAt(l + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), l++), n < 128 ? e[o++] = n : n < 2048 ? (e[o++] = 192 | n >>> 6, e[o++] = 128 | 63 & n) : n < 65536 ? (e[o++] = 224 | n >>> 12, e[o++] = 128 | n >>> 6 & 63, e[o++] = 128 | 63 & n) : (e[o++] = 240 | n >>> 18, e[o++] = 128 | n >>> 12 & 63, e[o++] = 128 | n >>> 6 & 63, e[o++] = 128 | 63 & n);
          return e;
        }, b.buf2binstring = function(r) {
          return f(r, r.length);
        }, b.binstring2buf = function(r) {
          for (var e = new d.Buf8(r.length), n = 0, i = e.length; n < i; n++) e[n] = r.charCodeAt(n);
          return e;
        }, b.buf2string = function(r, e) {
          var n, i, l, o, u = e || r.length, p = new Array(2 * u);
          for (i = 0, n = 0; n < u; ) if ((l = r[n++]) < 128) p[i++] = l;
          else if ((o = s[l]) > 4) p[i++] = 65533, n += o - 1;
          else {
            for (l &= o === 2 ? 31 : o === 3 ? 15 : 7; o > 1 && n < u; ) l = l << 6 | 63 & r[n++], o--;
            o > 1 ? p[i++] = 65533 : l < 65536 ? p[i++] = l : (l -= 65536, p[i++] = 55296 | l >> 10 & 1023, p[i++] = 56320 | 1023 & l);
          }
          return f(p, i);
        }, b.utf8border = function(r, e) {
          var n;
          for ((e = e || r.length) > r.length && (e = r.length), n = e - 1; n >= 0 && (192 & r[n]) == 128; ) n--;
          return n < 0 || n === 0 ? e : n + s[r[n]] > e ? n : e;
        };
      }, function(k, b, y) {
        k.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
      }, function(k, b, y) {
        k.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
      }, function(k, b, y) {
        k.exports = function() {
          this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
        };
      }, function(k, b, y) {
        k.exports = function() {
          this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
        };
      }, function(k, b, y) {
        k.exports = (function(f) {
          function d(a) {
            if (h[a]) return h[a].exports;
            var s = h[a] = { i: a, l: !1, exports: {} };
            return f[a].call(s.exports, s, s.exports, d), s.l = !0, s.exports;
          }
          var h = {};
          return d.m = f, d.c = h, d.d = function(a, s, t) {
            d.o(a, s) || Object.defineProperty(a, s, { configurable: !1, enumerable: !0, get: t });
          }, d.n = function(a) {
            var s = a && a.__esModule ? function() {
              return a.default;
            } : function() {
              return a;
            };
            return d.d(s, "a", s), s;
          }, d.o = function(a, s) {
            return Object.prototype.hasOwnProperty.call(a, s);
          }, d.p = "", d(d.s = 0);
        })([function(f, d, h) {
          Object.defineProperty(d, "__esModule", { value: !0 });
          var a = h(1);
          f.exports = a.ValueAnimator;
        }, function(f, d, h) {
          Object.defineProperty(d, "__esModule", { value: !0 });
          var a = (function() {
            function s() {
              this.startValue = 0, this.endValue = 0, this.duration = 0, this.loops = 1, this.fillRule = 0, this.onStart = function() {
              }, this.onUpdate = function() {
              }, this.onEnd = function() {
              }, this.mRunning = !1, this.mStartTime = 0, this.mCurrentFrication = 0, this.mReverse = !1;
            }
            return s.prototype.start = function(t) {
              t === void 0 && (t = void 0), this.doStart(!1, t);
            }, s.prototype.reverse = function(t) {
              t === void 0 && (t = void 0), this.doStart(!0, t);
            }, s.prototype.stop = function() {
              this.doStop();
            }, Object.defineProperty(s.prototype, "animatedValue", { get: function() {
              return (this.endValue - this.startValue) * this.mCurrentFrication + this.startValue;
            }, enumerable: !0, configurable: !0 }), s.prototype.doStart = function(t, r) {
              t === void 0 && (t = !1), r === void 0 && (r = void 0), this.mReverse = t, this.mRunning = !0, this.mStartTime = s.currentTimeMillsecond(), r && (this.mStartTime -= t ? (1 - r / (this.endValue - this.startValue)) * this.duration : r / (this.endValue - this.startValue) * this.duration), this.mCurrentFrication = 0, this.onStart(), this.doFrame();
            }, s.prototype.doStop = function() {
              this.mRunning = !1;
            }, s.prototype.doFrame = function() {
              this.mRunning && (this.doDeltaTime(s.currentTimeMillsecond() - this.mStartTime), this.mRunning && s.requestAnimationFrame(this.doFrame.bind(this)));
            }, s.prototype.doDeltaTime = function(t) {
              t >= this.duration * this.loops ? (this.mCurrentFrication = this.fillRule === 1 ? 0 : 1, this.mRunning = !1) : (this.mCurrentFrication = t % this.duration / this.duration, this.mReverse && (this.mCurrentFrication = 1 - this.mCurrentFrication)), this.onUpdate(this.animatedValue), this.mRunning === !1 && this.onEnd();
            }, s.currentTimeMillsecond = function() {
              return typeof performance > "u" ? (/* @__PURE__ */ new Date()).getTime() : performance.now();
            }, s.requestAnimationFrame = function(t) {
              return typeof requestAnimationFrame > "u" ? setTimeout(t, 16) : window.requestAnimationFrame(t);
            }, s;
          })();
          d.ValueAnimator = a;
        }]);
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.Player = void 0;
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(s) {
          return typeof s;
        } : function(s) {
          return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s;
        }, d = /* @__PURE__ */ (function() {
          function s(t, r) {
            for (var e = 0; e < r.length; e++) {
              var n = r[e];
              n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
          }
          return function(t, r, e) {
            return r && s(t.prototype, r), e && s(t, e), t;
          };
        })(), h = y(65), a = y(62);
        b.Player = (function() {
          function s(t) {
            (function(r, e) {
              if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, s), this.loops = 0, this.clearsAfterStop = !0, this.fillMode = "Forward", this._asChild = !1, this._container = void 0, this._renderer = void 0, this._animator = void 0, this._drawingCanvas = void 0, this._contentMode = "AspectFit", this._videoItem = void 0, this._forwardAnimating = !1, this._currentFrame = 0, this._dynamicImage = {}, this._dynamicImageTransform = {}, this._dynamicText = {}, this._onFinished = void 0, this._onFrame = void 0, this._onPercentage = void 0, this._container = typeof t == "string" ? document.querySelector(t) : t, this._asChild = t === void 0, this._init();
          }
          return d(s, [{ key: "setVideoItem", value: function(t) {
            this._currentFrame = 0, this._videoItem = t, this._renderer.prepare(), this.clear(), this._update();
          } }, { key: "setContentMode", value: function(t) {
            this._contentMode = t, this._update();
          } }, { key: "setClipsToBounds", value: function(t) {
            this._container instanceof HTMLDivElement && (this._container.style.overflowX = this._container.style.overflowY = t ? "hidden" : void 0);
          } }, { key: "startAnimation", value: function(t) {
            this.stopAnimation(!1), this._doStart(void 0, t, void 0);
          } }, { key: "startAnimationWithRange", value: function(t, r) {
            this.stopAnimation(!1), this._doStart(t, r, void 0);
          } }, { key: "pauseAnimation", value: function() {
            this.stopAnimation(!1);
          } }, { key: "stopAnimation", value: function(t) {
            this._forwardAnimating = !1, this._animator !== void 0 && this._animator.stop(), t === void 0 && (t = this.clearsAfterStop), t && this.clear();
          } }, { key: "clear", value: function() {
            this._renderer.clear(), this._renderer.clearAudios();
          } }, { key: "stepToFrame", value: function(t, r) {
            t >= this._videoItem.frames || t < 0 || (this.pauseAnimation(), this._currentFrame = t, this._update(), r && this._doStart(void 0, !1, this._currentFrame));
          } }, { key: "stepToPercentage", value: function(t, r) {
            var e = parseInt(t * this._videoItem.frames);
            e >= this._videoItem.frames && e > 0 && (e = this._videoItem.frames - 1), this.stepToFrame(e, r);
          } }, { key: "setImage", value: function(t, r, e) {
            this._dynamicImage[r] = t, e !== void 0 && e instanceof Array && e.length == 6 && (this._dynamicImageTransform[r] = e);
          } }, { key: "setText", value: function(t, r) {
            var e = typeof t == "string" ? t : t.text, n = ((t === void 0 ? "undefined" : f(t)) === "object" ? t.size : "14px") || "14px", i = ((t === void 0 ? "undefined" : f(t)) === "object" ? t.family : "Arial") || "Arial", l = ((t === void 0 ? "undefined" : f(t)) === "object" ? t.color : "#000000") || "#000000", o = ((t === void 0 ? "undefined" : f(t)) === "object" ? t.offset : { x: 0, y: 0 }) || { x: 0, y: 0 };
            this._dynamicText[r] = { text: e, style: n + " " + i, color: l, offset: o };
          } }, { key: "clearDynamicObjects", value: function() {
            this._dynamicImage = {}, this._dynamicImageTransform = {}, this._dynamicText = {};
          } }, { key: "onFinished", value: function(t) {
            this._onFinished = t;
          } }, { key: "onFrame", value: function(t) {
            this._onFrame = t;
          } }, { key: "onPercentage", value: function(t) {
            this._onPercentage = t;
          } }, { key: "drawOnContext", value: function(t, r, e, n, i) {
            this._drawingCanvas && this._videoItem && t.drawImage(this._drawingCanvas, r, e, n || this._videoItem.videoSize.width, i || this._videoItem.videoSize.height);
          } }, { key: "_init", value: function() {
            if (this._container instanceof HTMLDivElement || this._asChild) {
              if (this._container) for (var t = this._container.querySelectorAll("canvas"), r = 0; r < t.length; r++) {
                var e = t[r];
                e !== void 0 && e.__isPlayer && this._container.removeChild(e);
              }
              this._drawingCanvas = document.createElement("canvas"), this._drawingCanvas.__isPlayer = !0, this._drawingCanvas.style.backgroundColor = "transparent", this._container && (this._container.appendChild(this._drawingCanvas), this._container.style.textAlign = "left");
            }
            this._renderer = new h.Renderer(this);
          } }, { key: "_doStart", value: function(t, r, e) {
            var n = this;
            this._animator = new a(), t !== void 0 ? (this._animator.startValue = Math.max(0, t.location), this._animator.endValue = Math.min(this._videoItem.frames - 1, t.location + t.length), this._animator.duration = (this._animator.endValue - this._animator.startValue + 1) * (1 / this._videoItem.FPS) * 1e3) : (this._animator.startValue = 0, this._animator.endValue = this._videoItem.frames - 1, this._animator.duration = this._videoItem.frames * (1 / this._videoItem.FPS) * 1e3), this._animator.loops = this.loops <= 0 ? 1 / 0 : this.loops, this._animator.fillRule = this.fillMode === "Backward" ? 1 : 0, this._animator.onUpdate = function(i) {
              n._currentFrame !== Math.floor(i) && (n._forwardAnimating && n._currentFrame > Math.floor(i) && n._renderer.clearAudios(), n._currentFrame = Math.floor(i), n._update(), typeof n._onFrame == "function" && n._onFrame(n._currentFrame), typeof n._onPercentage == "function" && n._onPercentage(parseFloat(n._currentFrame + 1) / parseFloat(n._videoItem.frames)));
            }, this._animator.onEnd = function() {
              n._forwardAnimating = !1, n.clearsAfterStop === !0 && n.clear(), typeof n._onFinished == "function" && n._onFinished();
            }, r === !0 ? (this._animator.reverse(e), this._forwardAnimating = !1) : (this._animator.start(e), this._forwardAnimating = !0), this._currentFrame = this._animator.startValue, this._update();
          } }, { key: "_resize", value: function() {
            var t = !1;
            if (this._drawingCanvas) {
              var r;
              r = this._drawingCanvas.parentNode ? { width: this._drawingCanvas.parentNode.clientWidth, height: this._drawingCanvas.parentNode.clientHeight } : this._videoItem.videoSize;
              var e = this._videoItem.videoSize;
              if (r.width >= e.width && r.height >= e.height) this._drawingCanvas.width = r.width, this._drawingCanvas.height = r.height, this._drawingCanvas.style.webkitTransform = this._drawingCanvas.style.transform = "", t = !0;
              else {
                if (this._drawingCanvas.width = e.width, this._drawingCanvas.height = e.height, this._contentMode === "Fill") {
                  var n = r.width / e.width, i = r.height / e.height, l = (e.width * n - e.width) / 2, o = (e.height * i - e.height) / 2;
                  this._drawingCanvas.style.webkitTransform = this._drawingCanvas.style.transform = "matrix(" + n + ", 0.0, 0.0, " + i + ", " + l + ", " + o + ")";
                } else if (this._contentMode === "AspectFit" || this._contentMode === "AspectFill") {
                  var u = e.width / e.height, p = r.width / r.height;
                  if (u >= p && this._contentMode === "AspectFit" || u <= p && this._contentMode === "AspectFill") {
                    var g = r.width / e.width, v = (e.width * g - e.width) / 2, w = (e.height * g - e.height) / 2 + (r.height - e.height * g) / 2;
                    this._drawingCanvas.style.webkitTransform = this._drawingCanvas.style.transform = "matrix(" + g + ", 0.0, 0.0, " + g + ", " + v + ", " + w + ")";
                  } else if (u < p && this._contentMode === "AspectFit" || u > p && this._contentMode === "AspectFill") {
                    var m = r.height / e.height, O = (e.width * m - e.width) / 2 + (r.width - e.width * m) / 2, j = (e.height * m - e.height) / 2;
                    this._drawingCanvas.style.webkitTransform = this._drawingCanvas.style.transform = "matrix(" + m + ", 0.0, 0.0, " + m + ", " + O + ", " + j + ")";
                  }
                }
                this._globalTransform = void 0;
              }
            }
            if (this._drawingCanvas === void 0 || t === !0) {
              var A = 1, T = 1, P = 0, B = 0, R = { width: this._container !== void 0 ? this._container.clientWidth : 0, height: this._container !== void 0 ? this._container.clientHeight : 0 }, M = this._videoItem.videoSize;
              if (this._contentMode === "Fill") A = R.width / M.width, T = R.height / M.height;
              else if (this._contentMode === "AspectFit" || this._contentMode === "AspectFill") {
                var C = M.width / M.height, L = R.width / R.height;
                C >= L && this._contentMode === "AspectFit" || C <= L && this._contentMode === "AspectFill" ? (A = T = R.width / M.width, B = (R.height - M.height * T) / 2) : (C < L && this._contentMode === "AspectFit" || C > L && this._contentMode === "AspectFill") && (A = T = R.height / M.height, P = (R.width - M.width * A) / 2);
              }
              this._globalTransform = { a: A, b: 0, c: 0, d: T, tx: P, ty: B };
            }
          } }, { key: "_update", value: function() {
            this._videoItem !== void 0 && (this._resize(), this._renderer.drawFrame(this._currentFrame), this._renderer.playAudio(this._currentFrame));
          } }]), s;
        })();
      }, function(k, b, y) {
        var f = y(13), d = y(63), h = y(66);
        k.exports = { Parser: f.Parser, Player: d.Player, autoload: h.AutoLoader.autoload }, h.AutoLoader.autoload();
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.Renderer = void 0;
        var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t;
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, d = /* @__PURE__ */ (function() {
          function t(r, e) {
            for (var n = 0; n < e.length; n++) {
              var i = e[n];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, i.key, i);
            }
          }
          return function(r, e, n) {
            return e && t(r.prototype, e), n && t(r, n), r;
          };
        })(), h = y(5), a = y(15), s = y(14);
        b.Renderer = (function() {
          function t(r) {
            (function(e, n) {
              if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
            })(this, t), this._owner = void 0, this._prepared = !1, this._undrawFrame = void 0, this._bitmapCache = void 0, this._soundsQueue = [], this._owner = r;
          }
          return d(t, [{ key: "dataURLtoBlob", value: function(r) {
            for (var e = r.split(","), n = e[0].match(/:(.*?);/)[1], i = atob(e[1]), l = i.length, o = new Uint8Array(l); l--; ) o[l] = i.charCodeAt(l);
            return new Blob([o], { type: n });
          } }, { key: "prepare", value: function() {
            var r, e, n = this;
            if (this._prepared = !1, this._bitmapCache = void 0, this._owner._videoItem.images === void 0 || Object.keys(this._owner._videoItem.images).length == 0) return this._bitmapCache = {}, void (this._prepared = !0);
            this._bitmapCache === void 0 && (function() {
              n._bitmapCache = {};
              var i = 0, l = 0;
              for (r in n._owner._videoItem.images) {
                var o = n._owner._videoItem.images[r];
                if (o.indexOf("iVBO") === 0 || o.indexOf("/9j/2w") === 0) {
                  i++;
                  var u = document.createElement("img");
                  u.onload = (function() {
                    ++l == i && (this._prepared = !0, typeof this._undrawFrame == "number" && (this.drawFrame(this._undrawFrame), this._undrawFrame = void 0));
                  }).bind(n), u.src = "data:image/png;base64," + o;
                  var p = r.replace(".matte", "");
                  n._bitmapCache[p] = u;
                } else o.indexOf("SUQz") === 0 && window.Howl !== void 0 && (i++, (e = new Howl({ src: [navigator.vendor === "Google Inc." ? URL.createObjectURL(n.dataURLtoBlob("data:audio/x-mpeg;base64," + o)) : "data:audio/x-mpeg;base64," + o], html5: navigator.vendor === "Google Inc." || void 0, preload: navigator.vendor === "Google Inc." || void 0, format: navigator.vendor === "Google Inc." ? ["mp3"] : void 0 })).once("load", (function() {
                  ++l == i && (this._prepared = !0, typeof this._undrawFrame == "number" && (this.drawFrame(this._undrawFrame), this._undrawFrame = void 0));
                }).bind(n)), e.on("loaderror", (function(g) {
                  console.error(g);
                })), n._bitmapCache[r] = e);
              }
            })();
          } }, { key: "clear", value: function() {
            var r = (this._owner._drawingCanvas || this._owner._container).getContext("2d"), e = { x: 0, y: 0, width: (this._owner._drawingCanvas || this._owner._container).width, height: (this._owner._drawingCanvas || this._owner._container).height };
            r.clearRect(e.x, e.y, e.width, e.height);
          } }, { key: "clearAudios", value: function() {
            this._soundsQueue.forEach((function(r) {
              r.player.stop(r.playID);
            })), this._soundsQueue = [];
          } }, { key: "drawFrame", value: function(r) {
            var e = this;
            if (this._prepared) {
              var n = (this._owner._drawingCanvas || this._owner._container).getContext("2d"), i = { x: 0, y: 0, width: (this._owner._drawingCanvas || this._owner._container).width, height: (this._owner._drawingCanvas || this._owner._container).height };
              n.clearRect(i.x, i.y, i.width, i.height);
              var l = /* @__PURE__ */ new Map(), o = !1, u = this._owner._videoItem.sprites;
              u.forEach((function(p, g) {
                if (u[0].imageKey.indexOf(".matte") != -1) if (p.imageKey.indexOf(".matte") == -1) {
                  var v = u[g - 1];
                  if (o && (p.matteKey == null || p.matteKey.length == 0 || p.matteKey != v.matteKey)) {
                    o = !1;
                    var w = l.get(p.matteKey);
                    n.globalCompositeOperation = "destination-in", e.drawSprite(w, n, r), n.globalCompositeOperation = "source-over", n.restore();
                  }
                  p.matteKey == null || v.matteKey != null && v.matteKey.length != 0 && v.matteKey == p.matteKey || (o = !0, n.save()), e.drawSprite(p, n, r), o && g == u.length - 1 && (w = l.get(p.matteKey), n.globalCompositeOperation = "destination-in", e.drawSprite(w, n, r), n.globalCompositeOperation = "source-over", n.restore());
                } else l.set(p.imageKey, p);
                else e.drawSprite(p, n, r);
              }));
            } else this._undrawFrame = r;
          } }, { key: "drawSprite", value: function(r, e, n) {
            var i = this, l = r.frames[this._owner._currentFrame];
            if (!(l.alpha < 0.05)) {
              e.save(), this._owner._globalTransform && e.transform(this._owner._globalTransform.a, this._owner._globalTransform.b, this._owner._globalTransform.c, this._owner._globalTransform.d, this._owner._globalTransform.tx, this._owner._globalTransform.ty), e.globalAlpha = l.alpha, e.transform(l.transform.a, l.transform.b, l.transform.c, l.transform.d, l.transform.tx, l.transform.ty);
              var o = r.imageKey.replace(".matte", ""), u = this._owner._dynamicImage[o] || this._bitmapCache[o] || this._owner._videoItem.images[o];
              if (typeof u == "string") {
                var p = this._bitmapCache[r.imageKey] || document.createElement("img"), g = void 0, v = void 0;
                if (u.indexOf("iVBO") === 0 || u.indexOf("/9j/2w") === 0 ? p.src = "data:image/png;base64," + u : (p._svgaSrc !== u && (p._svgaSrc = u, p.src = u), g = l.layout.width, v = l.layout.height), this._bitmapCache[r.imageKey] = p, l.maskPath !== void 0 && l.maskPath !== null && (this.drawBezier(e, l.maskPath), e.clip()), this._owner._dynamicImageTransform[r.imageKey] !== void 0) {
                  e.save();
                  var w = this._owner._dynamicImageTransform[r.imageKey];
                  e.transform(w[0], w[1], w[2], w[3], w[4], w[5]);
                }
                g && v ? e.drawImage(p, 0, 0, g, v) : e.drawImage(p, 0, 0), this._owner._dynamicImageTransform[r.imageKey] !== void 0 && e.restore();
              } else if ((u === void 0 ? "undefined" : f(u)) === "object") {
                if (l.maskPath !== void 0 && l.maskPath !== null && (l.maskPath._styles = void 0, this.drawBezier(e, l.maskPath), e.clip()), this._owner._dynamicImageTransform[r.imageKey] !== void 0) {
                  e.save();
                  var m = this._owner._dynamicImageTransform[r.imageKey];
                  e.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
                }
                e.drawImage(u, 0, 0), this._owner._dynamicImageTransform[r.imageKey] !== void 0 && e.restore();
              }
              l.shapes && l.shapes.forEach((function(P) {
                P.type === "shape" && P.pathArgs && P.pathArgs.d && i.drawBezier(e, new h.BezierPath(P.pathArgs.d, P.transform, P.styles)), P.type === "ellipse" && P.pathArgs && i.drawEllipse(e, new a.EllipsePath(parseFloat(P.pathArgs.x) || 0, parseFloat(P.pathArgs.y) || 0, parseFloat(P.pathArgs.radiusX) || 0, parseFloat(P.pathArgs.radiusY) || 0, P.transform, P.styles)), P.type === "rect" && P.pathArgs && i.drawRect(e, new s.RectPath(parseFloat(P.pathArgs.x) || 0, parseFloat(P.pathArgs.y) || 0, parseFloat(P.pathArgs.width) || 0, parseFloat(P.pathArgs.height) || 0, parseFloat(P.pathArgs.cornerRadius) || 0, P.transform, P.styles));
              }));
              var O = this._owner._dynamicText[r.imageKey];
              if (O !== void 0) {
                e.textBaseline = "middle", e.font = O.style;
                var j = e.measureText(O.text).width;
                e.fillStyle = O.color;
                var A = O.offset !== void 0 && O.offset.x !== void 0 ? isNaN(parseFloat(O.offset.x)) ? 0 : parseFloat(O.offset.x) : 0, T = O.offset !== void 0 && O.offset.y !== void 0 ? isNaN(parseFloat(O.offset.y)) ? 0 : parseFloat(O.offset.y) : 0;
                e.fillText(O.text, (l.layout.width - j) / 2 + A, l.layout.height / 2 + T);
              }
              e.restore();
            }
          } }, { key: "playAudio", value: function(r) {
            var e = this;
            if (this._owner._forwardAnimating && this._owner._videoItem.audios instanceof Array) {
              this._owner._videoItem.audios.forEach((function(i) {
                if (i.startFrame === r && e._bitmapCache[i.audioKey] !== void 0 && typeof e._bitmapCache[i.audioKey].play == "function") {
                  var l = { playID: e._bitmapCache[i.audioKey].play(), player: e._bitmapCache[i.audioKey], endFrame: i.endFrame };
                  l.player.seek(i.startTime / 1e3, l.playID), e._soundsQueue.push(l);
                }
              }));
              var n = !1;
              this._soundsQueue.forEach((function(i) {
                r >= i.endFrame && (n = !0, i.player.stop(i.playID));
              })), n && (this._soundsQueue = this._soundsQueue.filter((function(i) {
                return r < i.endFrame;
              })));
            }
          } }, { key: "resetShapeStyles", value: function(r, e) {
            var n = e._styles;
            n !== void 0 && (n && n.stroke ? r.strokeStyle = "rgba(" + parseInt(255 * n.stroke[0]) + ", " + parseInt(255 * n.stroke[1]) + ", " + parseInt(255 * n.stroke[2]) + ", " + n.stroke[3] + ")" : r.strokeStyle = "transparent", n && (r.lineWidth = n.strokeWidth || void 0, r.lineCap = n.lineCap || void 0, r.lineJoin = n.lineJoin || void 0, r.miterLimit = n.miterLimit || void 0), n && n.fill ? r.fillStyle = "rgba(" + parseInt(255 * n.fill[0]) + ", " + parseInt(255 * n.fill[1]) + ", " + parseInt(255 * n.fill[2]) + ", " + n.fill[3] + ")" : r.fillStyle = "transparent", n && n.lineDash && r.setLineDash(n.lineDash));
          } }, { key: "drawBezier", value: function(r, e) {
            var n = this;
            r.save(), this.resetShapeStyles(r, e), e._transform !== void 0 && e._transform !== null && r.transform(e._transform.a, e._transform.b, e._transform.c, e._transform.d, e._transform.tx, e._transform.ty);
            var i = { x: 0, y: 0, x1: 0, y1: 0, x2: 0, y2: 0 };
            r.beginPath(), e._d.replace(/([a-zA-Z])/g, "|||$1 ").replace(/,/g, " ").split("|||").forEach((function(l) {
              if (l.length != 0) {
                var o = l.substr(0, 1);
                if ("MLHVCSQRZmlhvcsqrz".indexOf(o) >= 0) {
                  var u = l.substr(1).trim().split(" ");
                  n.drawBezierElement(r, i, o, u);
                }
              }
            })), e._styles && e._styles.fill && r.fill(), e._styles && e._styles.stroke && r.stroke(), r.restore();
          } }, { key: "drawBezierElement", value: function(r, e, n, i) {
            switch (n) {
              case "M":
                e.x = Number(i[0]), e.y = Number(i[1]), r.moveTo(e.x, e.y);
                break;
              case "m":
                e.x += Number(i[0]), e.y += Number(i[1]), r.moveTo(e.x, e.y);
                break;
              case "L":
                e.x = Number(i[0]), e.y = Number(i[1]), r.lineTo(e.x, e.y);
                break;
              case "l":
                e.x += Number(i[0]), e.y += Number(i[1]), r.lineTo(e.x, e.y);
                break;
              case "H":
                e.x = Number(i[0]), r.lineTo(e.x, e.y);
                break;
              case "h":
                e.x += Number(i[0]), r.lineTo(e.x, e.y);
                break;
              case "V":
                e.y = Number(i[0]), r.lineTo(e.x, e.y);
                break;
              case "v":
                e.y += Number(i[0]), r.lineTo(e.x, e.y);
                break;
              case "C":
                e.x1 = Number(i[0]), e.y1 = Number(i[1]), e.x2 = Number(i[2]), e.y2 = Number(i[3]), e.x = Number(i[4]), e.y = Number(i[5]), r.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y);
                break;
              case "c":
                e.x1 = e.x + Number(i[0]), e.y1 = e.y + Number(i[1]), e.x2 = e.x + Number(i[2]), e.y2 = e.y + Number(i[3]), e.x += Number(i[4]), e.y += Number(i[5]), r.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y);
                break;
              case "S":
                e.x1 && e.y1 && e.x2 && e.y2 ? (e.x1 = e.x - e.x2 + e.x, e.y1 = e.y - e.y2 + e.y, e.x2 = Number(i[0]), e.y2 = Number(i[1]), e.x = Number(i[2]), e.y = Number(i[3]), r.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y)) : (e.x1 = Number(i[0]), e.y1 = Number(i[1]), e.x = Number(i[2]), e.y = Number(i[3]), r.quadraticCurveTo(e.x1, e.y1, e.x, e.y));
                break;
              case "s":
                e.x1 && e.y1 && e.x2 && e.y2 ? (e.x1 = e.x - e.x2 + e.x, e.y1 = e.y - e.y2 + e.y, e.x2 = e.x + Number(i[0]), e.y2 = e.y + Number(i[1]), e.x += Number(i[2]), e.y += Number(i[3]), r.bezierCurveTo(e.x1, e.y1, e.x2, e.y2, e.x, e.y)) : (e.x1 = e.x + Number(i[0]), e.y1 = e.y + Number(i[1]), e.x += Number(i[2]), e.y += Number(i[3]), r.quadraticCurveTo(e.x1, e.y1, e.x, e.y));
                break;
              case "Q":
                e.x1 = Number(i[0]), e.y1 = Number(i[1]), e.x = Number(i[2]), e.y = Number(i[3]), r.quadraticCurveTo(e.x1, e.y1, e.x, e.y);
                break;
              case "q":
                e.x1 = e.x + Number(i[0]), e.y1 = e.y + Number(i[1]), e.x += Number(i[2]), e.y += Number(i[3]), r.quadraticCurveTo(e.x1, e.y1, e.x, e.y);
                break;
              case "A":
              case "a":
                break;
              case "Z":
              case "z":
                r.closePath();
            }
          } }, { key: "drawEllipse", value: function(r, e) {
            r.save(), this.resetShapeStyles(r, e), e._transform !== void 0 && e._transform !== null && r.transform(e._transform.a, e._transform.b, e._transform.c, e._transform.d, e._transform.tx, e._transform.ty);
            var n = e._x - e._radiusX, i = e._y - e._radiusY, l = 2 * e._radiusX, o = 2 * e._radiusY, u = l / 2 * 0.5522848, p = o / 2 * 0.5522848, g = n + l, v = i + o, w = n + l / 2, m = i + o / 2;
            r.beginPath(), r.moveTo(n, m), r.bezierCurveTo(n, m - p, w - u, i, w, i), r.bezierCurveTo(w + u, i, g, m - p, g, m), r.bezierCurveTo(g, m + p, w + u, v, w, v), r.bezierCurveTo(w - u, v, n, m + p, n, m), e._styles && e._styles.fill && r.fill(), e._styles && e._styles.stroke && r.stroke(), r.restore();
          } }, { key: "drawRect", value: function(r, e) {
            r.save(), this.resetShapeStyles(r, e), e._transform !== void 0 && e._transform !== null && r.transform(e._transform.a, e._transform.b, e._transform.c, e._transform.d, e._transform.tx, e._transform.ty);
            var n = e._x, i = e._y, l = e._width, o = e._height, u = e._cornerRadius;
            l < 2 * u && (u = l / 2), o < 2 * u && (u = o / 2), r.beginPath(), r.moveTo(n + u, i), r.arcTo(n + l, i, n + l, i + o, u), r.arcTo(n + l, i + o, n, i + o, u), r.arcTo(n, i + o, n, i, u), r.arcTo(n, i, n + l, i, u), r.closePath(), e._styles && e._styles.fill && r.fill(), e._styles && e._styles.stroke && r.stroke(), r.restore();
          } }]), t;
        })();
      }, function(k, b, y) {
        Object.defineProperty(b, "__esModule", { value: !0 }), b.AutoLoader = void 0;
        var f = y(13), d = y(63), h = b.AutoLoader = function a() {
          (function(s, t) {
            if (!(s instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, a);
        };
        h.sharedParser = new f.Parser(), h.autoload = function(a, s) {
          if (typeof window < "u" && typeof document < "u") {
            var t = s || h.sharedParser;
            if (a) {
              if ((a.tagName === "CANVAS" || a.tagName === "DIV") && a.attributes.src && a.attributes.src.value.indexOf(".svga") === a.attributes.src.value.length - 5) {
                var r = a.attributes.src.value, e = new d.Player(a);
                t.load(r, (function(l) {
                  if (a.attributes.loops) {
                    var o = parseFloat(a.attributes.loops.value) || 0;
                    e.loops = o;
                  }
                  if (a.attributes.clearsAfterStop) {
                    var u = a.attributes.clearsAfterStop.value !== "false";
                    e.clearsAfterStop = u;
                  }
                  e.setVideoItem(l), e.startAnimation();
                })), a.player = e;
              }
            } else for (var n = document.querySelectorAll('[src$=".svga"]'), i = 0; i < n.length; i++)
              a = n[i], h.autoload(a);
          }
        };
      }]);
    }));
  })(svga_min)), svga_min.exports;
}
var svga_minExports = requireSvga_min();
export {
  svga_minExports as s
};
