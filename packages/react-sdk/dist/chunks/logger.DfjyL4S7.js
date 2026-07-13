function vi() {
  return {
    // 凭证（基础设施层使用）
    sdkAppId: 0,
    userId: "",
    userSig: "",
    // UI 登录态
    mode: null,
    token: "",
    userName: "",
    domain: "",
    isConfigured: !1,
    identifier: "",
    avatarUrl: "",
    credentials: null
  };
}
function yi(R) {
  return {
    ...R,
    credentials: R.credentials ? { ...R.credentials } : null
  };
}
function yo(R, O) {
  const x = yi({
    ...R,
    ...O,
    credentials: O.credentials === void 0 ? R.credentials : O.credentials ? { ...O.credentials } : null
  });
  if (O.credentials !== void 0) {
    const z = x.credentials;
    x.sdkAppId = z?.sdkAppId ?? 0, x.userId = z?.userId ?? "", x.userSig = z?.userSig ?? "";
  }
  return x;
}
let Qt = vi();
const wi = {
  getState: () => yi(Qt),
  setState: (R) => {
    Qt = yo(Qt, R);
  },
  reset: () => {
    Qt = vi();
  }
};
let Me = wi;
function ko(R) {
  const O = Me.getState();
  Me = R ?? wi, Me.reset(), Me.setState(O);
}
function wo() {
  return Me.getState();
}
function Ao(R) {
  return Me.setState(R), Me.getState();
}
function Io() {
  Me.reset();
}
var Mo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bo(R) {
  return R && R.__esModule && Object.prototype.hasOwnProperty.call(R, "default") ? R.default : R;
}
var Zt = { exports: {} }, Eo = Zt.exports, gi;
function So() {
  return gi || (gi = 1, (function(R, O) {
    ((x, z) => {
      R.exports = z();
    })(Eo, function() {
      var x, z;
      function G(e) {
        this.name = "__st" + (1e9 * Math.random() >>> 0) + x + "__", e?.forEach(this.add, this), x += 1;
      }
      Array.prototype.find || Object.defineProperty(Array.prototype, "find", { configurable: !0, writable: !0, value: function(e) {
        if (this === null) throw new TypeError('"this" is null or not defined');
        var t = Object(this), n = t.length >>> 0;
        if (typeof e != "function") throw new TypeError("predicate must be a function");
        for (var r = arguments[1], i = 0; i < n; ) {
          var o = t[i];
          if (e.call(r, o, i, t)) return o;
          i += 1;
        }
      } }), window.WeakSet || (x = Date.now() % 1e9, G.prototype.add = function(e) {
        var t = this.name;
        return e[t] || Object.defineProperty(e, t, { value: !0, writable: !0 }), this;
      }, G.prototype.delete = function(e) {
        return !!e[this.name] && !(e[this.name] = void 0);
      }, G.prototype.has = function(e) {
        return !!e[this.name];
      }, z = G, Object.defineProperty(window, "WeakSet", { value: function(e) {
        return new z(e);
      } })), Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: function(e) {
        if (e == null) throw new TypeError("Cannot convert first argument to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) if ((r = arguments[n]) != null) for (var r = Object(r), i = Object.keys(Object(r)), o = 0, a = i.length; o < a; o++) {
          var s = i[o], u = Object.getOwnPropertyDescriptor(r, s);
          u != null && u.enumerable && (t[s] = r[s]);
        }
        return t;
      } });
      var ye = function(e, t) {
        return (ye = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(n, r) {
          n.__proto__ = r;
        } : function(n, r) {
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
        }))(e, t);
      }, T = function() {
        return (T = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }).apply(this, arguments);
      };
      function K(e, t, n, r) {
        return new (n = n || Promise)(function(i, o) {
          function a(l) {
            try {
              u(r.next(l));
            } catch (c) {
              o(c);
            }
          }
          function s(l) {
            try {
              u(r.throw(l));
            } catch (c) {
              o(c);
            }
          }
          function u(l) {
            var c;
            l.done ? i(l.value) : ((c = l.value) instanceof n ? c : new n(function(f) {
              f(c);
            })).then(a, s);
          }
          u((r = r.apply(e, [])).next());
        });
      }
      function ae(e, t) {
        var n, r, i, o = { label: 0, sent: function() {
          if (1 & i[0]) throw i[1];
          return i[1];
        }, trys: [], ops: [] }, a = { next: s(0), throw: s(1), return: s(2) };
        return typeof Symbol == "function" && (a[Symbol.iterator] = function() {
          return this;
        }), a;
        function s(u) {
          return function(l) {
            var c = [u, l];
            if (n) throw new TypeError("Generator is already executing.");
            for (; o; ) try {
              if (n = 1, r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done) return i;
              switch (r = 0, (c = i ? [2 & c[0], i.value] : c)[0]) {
                case 0:
                case 1:
                  i = c;
                  break;
                case 4:
                  return o.label++, { value: c[1], done: !1 };
                case 5:
                  o.label++, r = c[1], c = [0];
                  continue;
                case 7:
                  c = o.ops.pop(), o.trys.pop();
                  continue;
                default:
                  if (!((i = 0 < (i = o.trys).length && i[i.length - 1]) || c[0] !== 6 && c[0] !== 2)) {
                    o = 0;
                    continue;
                  }
                  if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) o.label = c[1];
                  else if (c[0] === 6 && o.label < i[1]) o.label = i[1], i = c;
                  else {
                    if (!(i && o.label < i[2])) {
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                    }
                    o.label = i[2], o.ops.push(c);
                  }
              }
              c = t.call(e, o);
            } catch (f) {
              c = [6, f], r = 0;
            } finally {
              n = i = 0;
            }
            if (5 & c[0]) throw c[1];
            return { value: c[0] ? c[1] : void 0, done: !0 };
          };
        }
      }
      function Q() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        for (var r = Array(e), i = 0, t = 0; t < n; t++) for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
        return r;
      }
      var S, A, re, Pi = /_?t(\d)?(imestamp)?=\d+&?/g, Vn = ["aegis.qq.com", "tamaegis.com", "/aegis-sdk", "rumt-", "/flog.core.min.js", "pingfore.qq.com", "pingfore.tencent.com", "zhiyan.tencent-cloud.net", "h.trace.qq.com", "btrace.qq.com", "beacon.qq.com", "dmplog.qq.com", "qq.com/report", "svibeacon.onezapp.com", "cube.weixinbridge.com", "doubleclick.net", "pcmgrmonitor.3g.qq.com", "tdm.qq.com", "report.qqweb.qq.com", "tpstelemetry.tencent.com", "galileotelemetry.tencent.com", "insight.cloud.tencent.com", "facebook.com", "facebook.net", "google", "yahoo.com", "twitter.com", "ga-audiences", "report.idqqimg.com", "arms-retcode.aliyuncs.com", "px.effirst.com", "sentry", "baidu.com", "hot-update.json", "u.c.b.r.o.w.s.e.r", "report.url.cn", "sockjs-node", "m3u8", "flv"], Li = ["ResizeObserver loop limit exceeded", "ResizeObserver loop completed", "Failed to execute 'transaction'", "window.indexedDB.deleteDatabase is not a function"], $n = ["ext1", "ext2", "ext3", "ext4", "ext5", "ext6", "ext7", "ext8", "ext9", "ext10", "level", "trace", "tag", "seq", "code"], Ci = ["static", "fetch"], Z = "unknown";
      (E = S = S || {}).INFO_ALL = "-1", E.API_RESPONSE = "1", E.INFO = "2", E.ERROR = "4", E.PROMISE_ERROR = "8", E.AJAX_ERROR = "16", E.SCRIPT_ERROR = "32", E.IMAGE_ERROR = "64", E.CSS_ERROR = "128", E.CONSOLE_ERROR = "256", E.MEDIA_ERROR = "512", E.RET_ERROR = "1024", E.PAGE_LOAD = "1025", E.SLOW_PAGE_LOAD = "1026", E.SLOW_NET_REQUEST = "1027", E.ASSERT_REQUEST = "1028", E.SLOW_ASSET_REQUEST = "1029", E.CLICK_EVENT = "1030", E.CONSOLE_LOG = "1031", E.BLANK_SCREEN = "1032", E.MEMORY_OOM = "1033", E.LAG_MONITOR = "1034", E.NORESPONSE_LOG = "1035", E.REPORT = "2048", E.PV = "4096", E.EVENT = "8192", E.SPEED_EVENT = "8193", E.PAGE_NOT_FOUND_ERROR = "16384", E.WEBSOCKET_ERROR = "32768", E.BRIDGE_ERROR = "65536", E.LAZY_LOAD_ERROR = "131072", E.CRASH_ERROR = "262144", (E = A = A || {}).LOG = "log", E.SPEED = "speed", E.PERFORMANCE = "performance", E.OFFLINE = "offline", E.WHITE_LIST = "whiteList", E.VITALS = "vitals", E.PV = "pv", E.CUSTOM_PV = "customPV", E.EVENT = "event", E.CUSTOM = "custom", E.SDK_ERROR = "sdkError", E.SET_DATA = "setData", E.LOAD_PACKAGE = "loadPackage", E.MEMORY = "memory", (E = re = re || {}).production = "production", E.development = "development", E.gray = "gray", E.pre = "pre", E.daily = "daily", E.local = "local", E.test = "test", E.others = "others";
      function tn(e, t) {
        var n;
        return typeof e != "string" ? "" : typeof t == "object" && t ? (n = Object.getOwnPropertyNames(t).map(function(r) {
          var i = t[r];
          return r + "=" + encodeURIComponent(typeof i == "string" ? i : JSON.stringify(i));
        }).join("&").replace(/eval/gi, "evaI"), e + (e.indexOf("?") === -1 ? "?" : "&") + n) : e;
      }
      He.prototype.indexOf = function(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n].callback === t) return n;
        return -1;
      }, He.prototype.on = function(e, t, n) {
        var r;
        if (n === void 0 && (n = 0), this) return (r = this.eventsList[e]) || (this.eventsList[e] = [], r = this.eventsList[e]), this.indexOf(r, t) === -1 && r.push({ name: e, type: n || 0, callback: t }), this;
      }, He.prototype.one = function(e, t) {
        this.on(e, t, 1);
      }, He.prototype.remove = function(e, t) {
        if (this) {
          var n = this.eventsList[e];
          if (n) {
            if (t) return n.length && (t = this.indexOf(n, t), n.splice(t, 1)), this;
            try {
              delete this.eventsList[e];
            } catch {
            }
          }
          return null;
        }
      }, He.prototype.clear = function() {
        this.eventsList = {};
      };
      var nt, ki = He, Jn = function(e) {
        if (!e || e.length === 0) return "{}";
        e = Array.isArray(e) ? e : [e];
        var t = Array.from(new Set(e.flatMap(function(r) {
          return Object.keys(r);
        }))), n = {};
        return t.forEach(function(r) {
          n[r] = e.map(function(i) {
            return i[r] || "";
          });
        }), n.count = e.length, fe(n);
      };
      function He() {
        var e = this;
        this.emit = function(t) {
          for (var n, r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
          if (e) {
            if ((o = e.eventsList[t]) != null && o.length) for (var o = o.slice(), a = 0; a < o.length; a++) {
              n = o[a];
              try {
                var s = n.callback.apply(e, r);
                if (n.type === 1 && e.remove(t, n.callback), s === !1) break;
              } catch (u) {
                throw u;
              }
            }
            return e;
          }
        }, this.eventsList = {};
      }
      (E = nt = nt || {})[E.number = -1] = "number", E.string = "";
      function bt(e, t) {
        return typeof e == "number" || typeof e == "string" ? e : nt.number;
      }
      function je(e, t) {
        return typeof e == "string" ? e.split("?")[t ? 1 : 0] || "" : e;
      }
      function Xn(e, t) {
        return t === void 0 && (t = 2048), String(e).replace(Pi, "").slice(0, t);
      }
      function Et(e) {
        return typeof e == "string" && /^\//.test(e) ? location?.protocol === "https:" : /^https/.test(e);
      }
      function Kn(e, t, n) {
        var r, i, o;
        try {
          if (typeof t?.retCodeHandler == "function") return { code: (o = (i = t.retCodeHandler(e, n?.url, n?.ctx, n?.payload) || {}).code) === void 0 ? Z : o, isErr: i.isErr };
          if (!(e = typeof e == "string" ? JSON.parse(e) : e)) return { code: Z, isErr: !1 };
          typeof ((r = t?.ret) == null ? void 0 : r.join) == "function" && (Rt = [].concat(t.ret.map(function(s) {
            return s.toLowerCase();
          })));
          var a = Object.getOwnPropertyNames(e).filter(function(s) {
            return Rt.indexOf(s.toLowerCase()) !== -1;
          });
          return a.length ? { code: "" + (o = (o = e[a[0]]) !== "未知" && o !== "" ? o : Z), isErr: o !== 0 && o !== "0" && o !== Z } : { code: Z, isErr: !1 };
        } catch {
          return { code: Z, isErr: !1 };
        }
      }
      function rt(e, t, n) {
        try {
          var r = typeof t == "function" ? t(e, n?.url, n?.ctx) || "" : e;
          return rn(r).slice(0, 10240);
        } catch {
          return "";
        }
      }
      function Qn(e, t) {
        var n, r = { fetch: [], static: [], bridge: [] }, i = {};
        return Array.isArray(e) ? e.forEach(function(o) {
          var a;
          (a = r[o.type]) != null && a.push(o);
        }) : (n = r[e.type]) != null && n.push(e), i.payload = JSON.stringify(T({ duration: r }, t)), i;
      }
      function qe(e, t) {
        return typeof e != "string" || !e || t && -1 < e.indexOf(t) || Ui.test(e) || Vn.some(function(n) {
          return -1 < e.indexOf(n);
        });
      }
      function Yn(e, t, n, r) {
        var i = e.rateLimitConfigs;
        i ? r === A.LOG && Array.isArray(t) ? (e = t.filter(function(o) {
          return o = rr(r, o.level), ir(i[o]);
        })).length && n(e) : (e = rr(r), ir(i[e]) && n(t)) : n(t);
      }
      function St(e, t) {
        var n, r = [], i = e.config;
        return e.lifeCycle.on("destroy", function() {
          r.length = 0;
        }), function(o, a) {
          Array.isArray(o) ? r = r.concat(o) : r.push(o), t && r.length >= t || e.sendNow && 0 < r.length ? (r = or(r), 0 < (r = Array.isArray(r) ? r : []).length && a(r.splice(0, r.length)), n && clearTimeout(n)) : (n && clearTimeout(n), n = setTimeout(function() {
            n = null, r = or(r), 0 < (r = Array.isArray(r) ? r : []).length && a(r.splice(0, r.length));
          }, i.delay));
        };
      }
      function Ai(e, t) {
        return Array.isArray(e) ? t(e.map(function(n) {
          return r = T(T({}, n), { msg: typeof n.msg == "string" ? n.msg : [].concat(n.msg).map(we).join(" ") }), $n.forEach(function(i) {
            r[i] || delete r[i];
          }), r;
          var r;
        })) : t([T(T({}, e), { msg: typeof e.msg == "string" ? e.msg : we(e.msg) })]);
      }
      function Zn(e, t) {
        return function(n, r) {
          var i, o, a, s, u;
          n != null && n.log && n != null && n.type ? (i = function(l, c, f) {
            switch (c) {
              case A.LOG:
                return Jn(sr(l));
              case A.SPEED:
                var p = l, d = f;
                return d = d && d !== "undefined" ? T(T({}, e.bean), { from: d }) : T({}, e.bean), fe(Qn(p, d));
              case A.EVENT:
                return fe({ payload: fe(Array.isArray(l) ? l : [l]) });
              case A.CUSTOM:
                return fe({ payload: fe({ custom: Array.isArray(l) ? l : [l] }) });
              default:
                return {};
            }
          }, (a = Array.isArray(n.log) ? n.log : [n.log]).length !== 1 ? (o = {}, a.forEach(function(l) {
            var c = l.from || "undefined";
            delete l.from, o[c] || (o[c] = []), o[c].push(l);
          }), Object.keys(o).forEach(function(l) {
            var c, f = o[l], p = (p = n.url) != null && p.includes("?") ? "&" : "?";
            l === "undefined" ? (c = "" + n.url, r(T(T({}, n), { url: c, log: f.length === 1 ? f[0] : f, data: i(f, t, "") }))) : (c = n.url + p + "from=" + l, r(T(T({}, n), { url: c, log: f.length === 1 ? f[0] : f, beanFilter: Q(n.beanFilter || [], ["from"]), data: i(f, t, l) })));
          })) : (s = (a = a[0]).from, delete a.from, u = (u = n.url) != null && u.includes("?") ? "&" : "?", s ? (u = n.url + u + "from=" + s, r(T(T({}, n), { url: u, log: a, beanFilter: Q(n.beanFilter || [], ["from"]), data: i(a, t, s) }))) : (u = "" + n.url, r(T(T({}, n), { url: u, log: a, data: i(a, t, "") }))))) : r(n);
        };
      }
      function Ii(e, t) {
        return function(n, r) {
          var i, o, a, s = Array.isArray(n), u = s ? n : [n], l = (e.lifeCycle.emit("beforeRequest", n), e.config.beforeRequest);
          (u = typeof l == "function" ? u.map(function(c) {
            try {
              var f = l({ logs: c, logType: t });
              return f?.logType === t && f != null && f.logs ? f.logs : f !== !1 && c;
            } catch {
              return c;
            }
          }).filter(function(c) {
            return c !== !1;
          }) : u).length && (i = u, n = $n, !Array.isArray(i) || i.length <= 1 || (o = [], a = [], !(a = typeof n == "string" ? [n] : n)) || a.length <= 0 || (a.forEach(function(c) {
            i.forEach(function(f) {
              f != null && f[c] && o.push(c);
            });
          }), 0 < o.length && (i = i.map(function(c) {
            var f = {};
            return o.forEach(function(p) {
              f[p] = "";
            }), T(T({}, f), c);
          }))), u = i, r(s ? u : u[0]));
        };
      }
      function er(e) {
        return function(t, n) {
          e.lifeCycle.emit("modifyRequest", t);
          var r = e.config.modifyRequest;
          if (typeof r == "function") try {
            var i = r(t);
            typeof i == "object" && "url" in i && (t = i);
          } catch (o) {
            console.error(o);
          }
          n(t);
        };
      }
      function tr(e) {
        return function(t, n) {
          (r = e.lifeCycle) != null && r.emit("afterRequest", t);
          var r = (e.config || {}).afterRequest;
          typeof r == "function" && r(t) === !1 || n(t);
        };
      }
      var Mi = ["application/xhtml+xml", "application/xml", "application/pdf", "application/pkcs12", "application/javascript", "application/x-javascript", "application/ecmascript", "application/vnd.mspowerpoint", "application/vnd.apple.mpegurl", "application/ogg", "text/css", "text/javascript", "image", "audio", "video", "video/mp2t"], Ni = /\.(json|js|css|jpg|jpeg|png|svg|apng|webp|gif|bmp|mp4|mp3|ts|mpeg|wav|webm|ogg|flv|m3u8|ttf|woff2|otf|eot|woff|html|htm|shtml|shtm|)$/i, Rt = ["ret", "retcode", "code", "errcode"], nn = function() {
        var e = /* @__PURE__ */ new WeakSet();
        return function(t, n) {
          if (n instanceof Error) return "Error.message: " + n.message + ` 
  Error.stack: ` + n.stack;
          if (typeof n == "object" && n !== null) {
            if (e.has(n)) return "[Circular " + (t || "root") + "]";
            e.add(n);
          }
          return n;
        };
      }, we = function(e) {
        if (typeof e == "string") return e;
        try {
          return e instanceof Error ? (JSON.stringify(e, nn(), 2) || "undefined").replace(/"/gim, "") : JSON.stringify(e, nn(), 2) || "undefined";
        } catch (t) {
          return `error happen when aegis stringify: 
 ` + t.message + ` 
 ` + t.stack;
        }
      }, fe = function(e) {
        if (typeof e == "string") return e;
        try {
          return JSON.stringify(e, nn()) || "undefined";
        } catch (t) {
          return `error happen when aegis stringify: 
 ` + t.message + ` 
 ` + t.stack;
        }
      }, rn = function(e, t) {
        t === void 0 && (t = 3);
        var n, r, i, o = "";
        return Array.isArray(e) ? (o += "[", n = e.length, e.forEach(function(a, s) {
          o = (o += typeof a == "object" && 1 < t ? rn(a, t - 1) : Fi(a)) + (s === n - 1 ? "" : ",");
        }), o += "]") : e instanceof Object || typeof e == "object" ? (o = "{", r = Object.keys(e), i = r.length, r.forEach(function(a, s) {
          typeof e[a] == "object" && 1 < t ? o += '"' + a + '":' + rn(e[a], t - 1) : o += _i(a, e[a]), o += s === i - 1 || s < i - 1 && e[r[s + 1]] === void 0 ? "" : ",";
        }), o += "}") : o += e, o;
      }, _i = function(e, t) {
        var n = typeof t, r = "";
        return n == "string" || n == "object" ? r += '"' + e + '":"' + t + '"' : typeof t == "function" ? r += '"' + e + '":"function ' + t.name + '"' : typeof t == "symbol" ? r += '"' + e + '":"symbol"' : typeof t != "number" && n != "boolean" || (r += '"' + e + '": ' + t), r;
      }, Fi = function(e) {
        var t = typeof e;
        return "" + (t == "undefined" || t == "symbol" || t == "function" ? "null" : t == "string" || t == "object" ? '"' + e + '"' : e);
      }, Ui = /data:(image|text|application|font)\/.*;base64/, Di = ((E = {})[A.LOG] = "log", E[A.MEMORY] = "log", E[A.SPEED] = "speed", E[A.PERFORMANCE] = "performance", E[A.VITALS] = "webvitals", E[A.PV] = "pv", E[A.EVENT] = "event", E[A.CUSTOM] = "custom", E[A.SET_DATA] = "miniProgramData", E[A.LOAD_PACKAGE] = "miniProgramData", E), nr = ((E = {})[S.ERROR] = "jsError", E[S.PROMISE_ERROR] = "jsError", E[S.BLANK_SCREEN] = "whiteScreen", E[S.SCRIPT_ERROR] = "assetsException", E[S.IMAGE_ERROR] = "assetsException", E[S.CSS_ERROR] = "assetsException", E[S.MEDIA_ERROR] = "assetsException", E), rr = function(e, t) {
        return e === A.LOG && t && nr[t] ? nr[t] : Di[e] || "";
      }, ir = function(e) {
        return e == null || !(e <= 0) && (100 <= e || 100 * Math.random() < e);
      }, or = function(e) {
        return e.filter(function(t, n) {
          return t.type !== "static" || !e.find(function(r, i) {
            return t.url === r.url && t.status === 200 && n < i;
          });
        });
      }, ar = function(e) {
        e.level === S.INFO_ALL && (e.level = S.INFO);
      }, Ne = {}, We = {}, on = function(e) {
        return Ne[e] || (Ne[e] = setTimeout(function() {
          We[e] = {}, Ne[e] = null;
        }, 6e4)), Ne[e];
      }, sr = function(e) {
        return (Array.isArray(e) ? e : [e]).map(function(t) {
          return Object.getOwnPropertyNames(t).reduce(function(n, r) {
            return r !== "ctx" && (n[r] = t[r]), n;
          }, { level: S.INFO, msg: "" });
        });
      }, lr = function(e) {
        return function(t) {
          return e.sendPipeline([function(n, r) {
            return r({ url: e.config.url || "", data: Jn(sr(n)), method: "post", contentType: "application/json", type: A.LOG, log: n, requestConfig: { timeout: 5e3 }, success: function() {
              var i = e.config.onReport;
              typeof i == "function" && n.forEach(function(o) {
                i(o);
              }), typeof r == "function" && r([]);
            } });
          }], A.LOG)(t);
        };
      }, Tt = { generateTraceId: ur(16), generateSpanId: ur(8) }, Ot = Array(32);
      function ur(e) {
        return function() {
          for (var t = 0; t < 2 * e; t++) Ot[t] = Math.floor(16 * Math.random()) + 48, 58 <= Ot[t] && (Ot[t] += 39);
          return String.fromCharCode.apply(null, Ot.slice(0, 2 * e));
        };
      }
      function an() {
        return ("10000000100040008000" + 1e11).replace(/[018]/g, function(e) {
          return (e ^ (16 * Math.random() & 15) >> e / 4).toString(16);
        });
      }
      function sn() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
          var t = 16 * Math.random() | 0;
          return (e === "x" ? t : 3 & t | 8).toString(16);
        });
      }
      function Hi(e) {
        for (var t, n, r, i = "", o = 0, a = (e = String(e)).length % 3; o < e.length; ) {
          if (255 < (t = e.charCodeAt(o++)) || 255 < (n = e.charCodeAt(o++)) || 255 < (r = e.charCodeAt(o++))) throw new TypeError("Failed to execute 'btoa': The string to be encoded contains characters outside of the Latin1 range.");
          i += Te.charAt((t = t << 16 | n << 8 | r) >> 18 & 63) + Te.charAt(t >> 12 & 63) + Te.charAt(t >> 6 & 63) + Te.charAt(63 & t);
        }
        return a ? i.slice(0, a - 3) + "===".substring(a) : i;
      }
      function ji(e) {
        if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !qi.test(e)) throw new TypeError("Failed to execute 'atob': The string to be decoded is not correctly encoded.");
        var t;
        e += "==".slice(2 - (3 & e.length));
        for (var n, r, i = "", o = 0; o < e.length; ) t = Te.indexOf(e.charAt(o++)) << 18 | Te.indexOf(e.charAt(o++)) << 12 | (n = Te.indexOf(e.charAt(o++))) << 6 | (r = Te.indexOf(e.charAt(o++))), i += n === 64 ? String.fromCharCode(t >> 16 & 255) : r === 64 ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
        return i;
      }
      function ln(e) {
        var t, n = "";
        return n = typeof e == "object" && (t = (e = ((r, i) => {
          for (var o = 0; o < i.length; o++) {
            var a = i[o], s = r[a] || typeof r.get == "function" && r.get(a);
            if (s) return [a, s];
          }
          return ["", ""];
        })(e, Object.keys(cr)))[0]) ? cr[t](e[1]) : n;
      }
      function Be(e) {
        if (e && e.reduce && e.length) return e.length === 1 ? function(t, n) {
          e[0](t, n || fr);
        } : e.reduce(function(t, n) {
          return function(r, i) {
            return i === void 0 && (i = fr), t(r, function(o) {
              return n?.(o, i);
            });
          };
        });
        throw new TypeError("createPipeline need at least one function param");
      }
      function un(e, t) {
        Object.getOwnPropertyNames(e).forEach(function(n) {
          var r;
          n === "constructor" || !(r = Object.getOwnPropertyDescriptor(e, n)) || r.get || r.set || typeof r.value == "function" && (t ? t[n] = n === "sendPipeline" ? function() {
            return function() {
            };
          } : function() {
          } : e[n] = function() {
          });
        });
      }
      var Te = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", qi = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, Wi = (be.prototype.generate = function(e, t, n) {
        if (t === void 0 && (t = {}), this.url = e, !this.isUrlIgnored() && this.isUrlInTraceUrls() && this.traceType) {
          switch (this.traceType) {
            case "traceparent":
              this.traceId = this.createTraceparent();
              break;
            case "b3":
              this.traceId = this.createB3();
              break;
            case "sw8":
              this.traceId = this.createSw8(n);
              break;
            case "sentry-trace":
              this.traceId = this.createSentryTrace();
              break;
            default:
              return console.warn("this trace key " + this.traceType + " is not supported"), void (this.traceId = "");
          }
          return t[this.traceType] && (this.traceId = t[this.traceType]), { name: this.traceType, value: this.traceId };
        }
      }, be.prototype.createTraceparent = function() {
        var e = Tt.generateSpanId();
        return "00-" + Tt.generateTraceId() + "-" + e + "-0" + this.traceFlag.toString(16);
      }, be.prototype.createB3 = function() {
        var e = Tt.generateSpanId();
        return Tt.generateTraceId() + "-" + e + "-" + this.traceFlag;
      }, be.prototype.createSw8 = function(r) {
        var t = typeof btoa == "function" ? btoa : Hi, r = r || {}, n = r.host, n = n === void 0 ? "" : n, r = r.pathname, r = r === void 0 ? "" : r, i = sn(), o = sn();
        return "1-" + String(t(o)) + "-" + String(t(i)) + "-1-" + String(t("aegis")) + "-" + String(t("1.41.13")) + "-" + String(t(encodeURI(r))) + "-" + String(t(n));
      }, be.prototype.createSentryTrace = function() {
        var e = an().substring(16);
        return an() + "-" + e + "-" + this.traceFlag;
      }, be.prototype.isUrlIgnored = function() {
        if (Array.isArray(this.ignoreUrls) && this.ignoreUrls.length !== 0) for (var e = 0, t = this.ignoreUrls; e < t.length; e++) {
          var n = t[e];
          if (this.urlMatches(this.url, n)) return !0;
        }
        return !1;
      }, be.prototype.isUrlInTraceUrls = function() {
        if (!this.urls) return !0;
        if (Array.isArray(this.urls)) {
          if (this.urls.length === 0) return !1;
          for (var e = 0, t = this.urls; e < t.length; e++) {
            var n = t[e];
            if (this.urlMatches(this.url, n)) return !0;
          }
        }
        return !1;
      }, be.prototype.urlMatches = function(e, t) {
        return typeof t == "string" ? e === t : !!e.match(t);
      }, be), cr = { sw8: function(n) {
        var t = typeof atob == "function" ? atob : ji, n = n.split("-")[1];
        return n ? t(n) : "";
      }, traceparent: function(e) {
        return e.split("-")[1];
      }, b3: function(e) {
        return e.split("-")[0];
      }, "sentry-trace": function(e) {
        return e.split("-")[0];
      } }, fr = function() {
      };
      function be(e, t, n, r) {
        n === void 0 && (n = null), this.traceType = e, this.ignoreUrls = t, this.urls = n, this.traceFlag = r == null ? 1 : +!!r;
      }
      function cn(e, t) {
        return e ? t ? "gzip" : "identity" : null;
      }
      function it() {
        return window.performance !== void 0 && typeof performance.getEntriesByType == "function" && typeof performance.now == "function";
      }
      function dr(e) {
        var t;
        return -1 < ((t = (t = window.PerformanceObserver) == null ? void 0 : t.supportedEntryTypes) == null ? void 0 : t.indexOf(e));
      }
      function V(e) {
        return Gi.indexOf(e) !== -1;
      }
      C.use = function(e) {
        C.installedPlugins.indexOf(e) === -1 && e.aegisPlugin && C.installedPlugins.push(e);
      }, C.unuse = function(e) {
        e = C.installedPlugins.indexOf(e), e !== -1 && C.installedPlugins.splice(e, 1);
      }, C.prototype.init = function(e) {
        function t() {
          o || (r && clearTimeout(r), r = setTimeout(function() {
            o = !0, l();
          }, n.config.uin ? 50 : 500));
        }
        var n, r, i, o, a, s, u, l, c, f;
        this.setConfig(e), this.config = (f = this.config, e = e.hostUrl, f.url = (e = typeof (e = e === void 0 ? "https://rumt-zh.com" : e) != "string" ? "https://rumt-zh.com" : e) + "/collect", f.offlineUrl = e + "/offline", f.whiteListUrl = e + "/collect/whitelist", f.rateLimitUrl = e + "/rateConfig", f.pvUrl = e + "/collect/pv", f.eventUrl = e + "/collect/events", f.speedUrl = e + "/speed", f.customTimeUrl = e + "/speed/custom", f.performanceUrl = e + "/speed/performance", f.performanceUrlForHippy = e + "/speed/hippyPerformance", f.webVitalsUrl = e + "/speed/webvitals", f.setDataReportUrl = e + "/speed/miniProgramData", f.memoryUrl = e + "/memory", f), this.resetWhitelistGzipState(), n = this, o = !1, a = [3, 30, 300], s = 0, u = function() {
          d = a[Math.min(s, a.length - 1)], s += 1;
          var d;
          n.rateLimitSampled || (n.rateLimitReady = !0, n.rateLimitPool && n.rateLimitPool.length && n.rateLimitPool.splice(0).forEach(function(h) {
            h.resolve(h.logs);
          })), c(d);
        }, l = function() {
          var d = n.config.rateLimitUrl, h = d === void 0 ? "" : d;
          h && n.sendPipeline([function(g, m) {
            m({ url: "" + h, type: A.WHITE_LIST, success: function(b) {
              try {
                var y, w = b.data || JSON.parse(b), v = w.retcode, L = w.configs, N = w.ttl;
                v === 0 && Array.isArray(L) ? (y = {}, L.forEach(function(k) {
                  var I = k.limit_type;
                  y[I] = k.sample_rate;
                }), n.rateLimitConfigs = y, n.rateLimitReady = !0, n.rateLimitSampled = !0, n.rateLimitPool && n.rateLimitPool.length && n.rateLimitPool.splice(0).forEach(function(k) {
                  Yn(n, k.logs, k.resolve, k.sendType);
                }), 0 < N && c(N)) : u();
              } catch {
                u();
              }
            }, fail: function() {
              u();
            } });
          }], A.WHITE_LIST)(null);
        }, c = function(d) {
          i && clearTimeout(i), i = setTimeout(function() {
            o = !1, l();
          }, 1e3 * d);
        }, t(), n.lifeCycle.on("onConfigChange", function() {
          o = !1, s = 0, t();
        }), n.lifeCycle.on("destroy", function() {
          r && clearTimeout(r), i && clearTimeout(i), n.rateLimitPool && (n.rateLimitPool.length = 0);
        });
        for (var p = 0; p < C.installedPlugins.length; p++) try {
          C.installedPlugins[p].patch(this);
        } catch (d) {
          this.sendSDKError(d);
        }
        this.lifeCycle.emit("onInited");
      }, C.prototype.destroy = function(e) {
        e === void 0 && (e = !1);
        var t, n, r = C.instances.indexOf(this);
        r !== -1 && C.instances.splice(r, 1);
        for (var i = C.installedPlugins.length - 1; 0 <= i; i--) try {
          C.installedPlugins[i].unpatch(this);
        } catch (a) {
          this.sendSDKError(a);
        }
        if (this.lifeCycle.emit("destroy"), this.lifeCycle.clear(), e) t = this, n = Object.getOwnPropertyDescriptors(t), Object.keys(n).forEach(function(a) {
          n[a].writable && (t[a] = null);
        }), Object.setPrototypeOf(this, null);
        else {
          for (var o = this; o.constructor !== Object && un(o, this), o = Object.getPrototypeOf(o); ) ;
          C.instances.length === 0 && (r = Object.getPrototypeOf(this).constructor, un(r), un(C));
        }
      }, C.prototype.setConfig = function(c) {
        Object.assign(this.config, c);
        var c = this.config, t = c.id, n = c.uin, r = c.version, i = c.ext1, o = c.ext2, a = c.ext3, s = c.aid, l = c.env, u = l === void 0 ? "production" : l, l = c.pageUrl, c = this.bean.id !== t || this.bean.uin !== n || this.bean.aid !== s;
        return this.bean.id = t || "", this.bean.uin = n || "", this.bean.version = r || "1.41.13", this.bean.aid = s || "", this.bean.env = (() => {
          switch (u) {
            case re.production:
            case re.development:
            case re.gray:
            case re.pre:
            case re.daily:
            case re.local:
            case re.test:
            case re.others:
              return 1;
            default:
              return;
          }
        })() ? u : re.others, l && this.extendBean("from", encodeURIComponent(l.slice(0, 2048))), i && this.extendBean("ext1", encodeURIComponent(i)), o && this.extendBean("ext2", encodeURIComponent(o)), a && this.extendBean("ext3", encodeURIComponent(a)), c && this.lifeCycle.emit("onConfigChange", this.config), this.config;
      }, C.prototype.extendBean = function(e, t) {
        this.bean[e] = t;
      }, C.prototype.resetWhitelistGzipState = function() {
        this.whitelistUseGzip = !0, this.whitelistUseGzipReady = !0;
      }, C.prototype.updateWhitelistGzipState = function(e) {
        this.whitelistUseGzip = e == null || e === "" || Number(e) === 1, this.whitelistUseGzipReady = !0;
      }, C.prototype.disableWhitelistGzipState = function() {
        this.whitelistUseGzip = !1, this.whitelistUseGzipReady = !0;
      }, C.prototype.isGzipReportEnabled = function(e) {
        return !!e && (!this.config.whiteListUrl || this.whitelistUseGzipReady && this.whitelistUseGzip);
      }, C.prototype.send = function(e, t, n) {
        var r = this;
        return Be([er(this), Zn(this, e?.type), function(i, o) {
          r.request(i, function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            o({ isErr: !1, result: a, logType: i.type, logs: i.log }), t?.apply(void 0, a);
          }, function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            o({ isErr: !0, result: a, logType: i.type, logs: i.log }), n?.apply(void 0, a);
          });
        }, tr(this)])(e);
      }, C.prototype.sendSDKError = function(e) {
        var t = this;
        this.sendPipeline([function(n, r) {
          r({ url: t.config.url + "?id=1085&msg[0]=" + encodeURIComponent(we(n)) + "&level[0]=2&from=" + t.config.id + "&count=1&version=" + t.config.id + "(1.41.13)", addBean: !1, method: "get", type: A.SDK_ERROR, log: n });
        }], A.SDK_ERROR)(e);
      }, C.prototype.sendPipeline = function(e, t) {
        var n, r, i, o = this;
        return Be(Q([function(a, s) {
          if (typeof n.config.random != "number" && (console.warn("random must in [0, 1], default is 1."), n.config.random = 1), !n.isHidden || !n.isGetSample) if (n.isGetSample) n.isHidden || s(a);
          else {
            if (n.isGetSample = !0, Math.random() < n.config.random) return n.isHidden = !1, s(a);
            n.isHidden = !0;
          }
        }, function(a, s) {
          if (i !== A.SDK_ERROR && i !== A.WHITE_LIST) return r.rateLimitReady ? void Yn(r, a, s, i) : (r.rateLimitPool || (r.rateLimitPool = []), void (r.rateLimitPool.length < 200 && r.rateLimitPool.push({ logs: a, resolve: s, sendType: i })));
          s(a);
        }, Ii(r = n = this, i = t)], e, [Zn(this, t), er(this), function(a, s) {
          var u;
          a.url && o.rateLimitSampled && (u = a.url.indexOf("?") === -1 ? "?" : "&", a.url = a.url + u + "sampled=1"), s(a);
        }, function(a, s) {
          o.request(a, function() {
            for (var u = [], l = 0; l < arguments.length; l++) u[l] = arguments[l];
            var c = !1;
            -1 < ("" + u[o.failRequestCount = 0]).indexOf("403 forbidden") && (c = !0, o.destroy()), s({ isErr: c, result: u, logType: a?.type, logs: a?.log }), (c = a?.success) != null && c.call.apply(c, Q([a], u));
          }, function() {
            for (var u, l = [], c = 0; c < arguments.length; c++) l[c] = arguments[c];
            60 <= ++o.failRequestCount && o.destroy(), -1 < ("" + l[0]).indexOf("403 forbidden") && o.destroy(), s({ isErr: !0, result: l, logType: a?.type, logs: a?.log }), (u = a?.fail) != null && u.call.apply(u, Q([a], l));
          });
        }, tr(this)]));
      }, C.prototype.validateRange = function(e) {
        return 0 <= e && e <= 127 ? e : -1;
      }, C.prototype.info = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = { level: S.INFO, msg: e, originFrom: this.getOriginFrom() };
        e.length === 1 && e[0].msg && Object.assign(n, T({}, e[0]), { level: S.INFO, originFrom: this.getOriginFrom() }), this.normalLogPipeline(n);
      }, C.prototype.infoAll = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = { level: S.INFO_ALL, msg: e, originFrom: this.getOriginFrom() };
        e.length === 1 && e[0].msg && Object.assign(n, T({}, e[0]), { level: S.INFO_ALL, originFrom: this.getOriginFrom() }), this.normalLogPipeline(n);
      }, C.prototype.report = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = { level: S.REPORT, msg: e, originFrom: this.getOriginFrom() };
        e.length === 1 && e[0].msg && Object.assign(n, T({}, e[0]), { originFrom: this.getOriginFrom() }), this.normalLogPipeline(n);
      }, C.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = { level: S.ERROR, msg: e, originFrom: this.getOriginFrom() };
        e.length === 1 && e[0].msg && Object.assign(n, T({}, e[0]), { level: S.ERROR, originFrom: this.getOriginFrom() }), this.normalLogPipeline(n);
      }, C.prototype.reportEvent = function(e) {
        e && ((e = typeof e == "string" ? { name: e, ext1: this.config.ext1 || "", ext2: this.config.ext2 || "", ext3: this.config.ext3 || "", originFrom: this.getOriginFrom() } : T(T({}, e), { originFrom: e.originFrom || this.getOriginFrom() })).name ? (typeof e.name != "string" && (console.warn("reportEvent params name must be string"), e.name = String(e.name)), this.eventPipeline(e)) : console.warn("reportEvent params error"));
      }, C.prototype.reportT = function(d) {
        var t = d.name, n = d.duration, r = d.ext1, r = r === void 0 ? "" : r, i = d.ext2, i = i === void 0 ? "" : i, o = d.ext3, o = o === void 0 ? "" : o, a = d.ext4, s = d.ext5, u = d.ext6, l = d.ext7, c = d.ext8, f = d.ext9, p = d.ext10, d = d.from;
        if (typeof t == "string" && typeof n == "number" && typeof r == "string" && typeof i == "string" && typeof o == "string") {
          if (!(n < 0 || 2147483646 < n)) return this.submitCustomTime(t, n, r, i, o, a === void 0 ? "" : a, s === void 0 ? "" : s, u === void 0 ? "" : u, l === void 0 ? "" : l, c === void 0 ? "" : c, f === void 0 ? "" : f, p === void 0 ? "" : p, d === void 0 ? "" : d);
          console.warn("reportTime: duration must between 0 and 2147483646");
        } else console.warn("reportTime: params error");
      }, C.prototype.reportTime = function(e, t) {
        if (typeof e == "object") return this.reportT(e);
        typeof e == "string" ? typeof t == "number" ? t < 0 || 2147483646 < t ? console.warn("reportTime: duration must between 0 and 2147483646") : (this.submitCustomTime(e, t), this.normalLogPipeline({ level: S.SPEED_EVENT, msg: "key:" + e + "\\n duration:" + t, errorMsg: "", originFrom: this.getOriginFrom() })) : console.warn("reportTime: second param must be number") : console.warn("reportTime: first param must be a string");
      }, C.prototype.time = function(e) {
        typeof e == "string" ? this.timeMap[e] ? console.warn("Timer " + e + " already exists") : this.timeMap[e] = Date.now() : console.warn("time: first param must be a string");
      }, C.prototype.timeEnd = function(e) {
        var t;
        typeof e != "object" || e === null ? typeof e == "string" ? (t = this.getTimeEventDuration(e)) !== void 0 ? (this.submitCustomTime(e, t), delete this.timeMap[e]) : console.warn("Timer " + e + " does not exist") : console.warn("timeEnd: first param must be a string") : (t = this.getTimeEventDuration(e.name)) !== void 0 ? (this.reportT(T(T({}, e), { duration: t })), delete this.timeMap[e.name]) : console.warn("Timer " + e.name + " does not exist");
      }, C.prototype.ready = function(e, t, n) {
        throw new Error('You need to override "ready" method');
      }, C.prototype.request = function(e, t, n) {
        throw new Error('You need to override "request" method');
      }, C.prototype.speedLogPipeline = function(e) {
        throw new Error('You need to override "speedLogPipeline" method');
      }, C.prototype.getOriginFrom = function() {
        throw new Error('You need to override "getOriginFrom" method');
      }, Object.defineProperty(C.prototype, "__version__", { get: function() {
        return "1.41.13";
      }, enumerable: !1, configurable: !0 }), Object.defineProperty(C.prototype, "LogType", { get: function() {
        return S;
      }, enumerable: !1, configurable: !0 }), C.prototype.reportPv = function(e) {
        e && console.warn("reportPv is deprecated, please use reportEvent");
      }, C.prototype.submitCustomTime = function(e, t, n, r, i, o, a, s, u, l, c, f, p) {
        e = { name: e, duration: t, ext1: String(n || this.config.ext1 || "").slice(0, 1024), ext2: String(r || this.config.ext2 || "").slice(0, 1024), ext3: String(i || this.config.ext3 || "").slice(0, 1024), ext4: o || this.config.ext4, ext5: a || this.config.ext5, ext6: s || this.config.ext6, ext7: u || this.config.ext7, ext8: l || this.config.ext8, ext9: c || this.config.ext9, ext10: f || this.config.ext10, from: p || void 0 }, this.customTimePipeline(e);
      }, C.prototype.getTimeEventDuration = function(e) {
        if (e !== void 0 && this.timeMap[e]) return Date.now() - this.timeMap[e];
      }, C.version = "1.41.13", C.instances = [], C.logType = S, C.environment = re, C.installedPlugins = [];
      var E = C, _ = (se.prototype.patch = function(e) {
        this.canUse(e) && this.exist(e) && (this.instances.push(e), this.triggerInit(e), this.triggerOnNewAegis(e));
      }, se.prototype.unpatch = function(e) {
        var t = this.instances.indexOf(e);
        t !== -1 && (this.instances.splice(t, 1), this.instances.length === 0) && this.uninstall(e);
      }, se.prototype.countInstance = function() {
        return this.instances.length;
      }, se.prototype.uninstall = function(e) {
        var t;
        (t = (t = this.option) == null ? void 0 : t.destroy) != null && t.apply(this, [e]);
      }, se.prototype.walk = function(e) {
        var t = this;
        this.instances.forEach(function(n) {
          var r = t.canUse(n);
          r && e(n, r);
        });
      }, se.prototype.canUse = function(e) {
        return e = this.getConfig(e), !(!e || typeof e != "object") || !!e;
      }, se.prototype.getConfig = function(e) {
        return (e = e.config) == null ? void 0 : e[this.name];
      }, se.prototype.exist = function(e) {
        return this.instances.indexOf(e) === -1;
      }, se.prototype.triggerInit = function(e) {
        var t;
        this.inited || (this.inited = !0, (t = (t = this.option) == null ? void 0 : t.init) == null) || t.call(this.option, this.getConfig(e));
      }, se.prototype.triggerOnNewAegis = function(e) {
        var t;
        (t = (t = this.option) == null ? void 0 : t.onNewAegis) != null && t.call(this.option, e, this.getConfig(e));
      }, se), Bi = new _({ name: "aid", aid: "", init: function(e) {
        try {
          var t = e !== !0 && e || window.localStorage.getItem("AEGIS_ID");
          t || (t = sn(), window.localStorage.setItem("AEGIS_ID", t)), this.aid = t;
        } catch {
        }
      }, onNewAegis: function(e) {
        e.bean.aid = this.aid, e.config.aid = this.aid;
      } }), xt = new _({ name: "reportAssetSpeed" }), zi = xt = new _({ name: "reportAssetSpeed", collectCur: 0, collectEntryType: "resource", ASSETS_INITIATOR_TYPE: ["img", "css", "script", "link", "audio", "video"], getFromParam: function(e) {
        return e.getCurrentPageUrl();
      }, onNewAegis: function(e) {
        var t = this;
        it() && (setTimeout(function() {
          t.collectSuccessLog(e), t.collectFailLog(e);
        }, 5e3), performance.onresourcetimingbufferfull = function() {
          typeof performance.clearResourceTimings == "function" && (t.collectCur = 0, performance.clearResourceTimings());
        });
      }, processLog: function(e, u) {
        var n = u.duration || 0, r = u.transferSize || 0, i = !1, a = e.config;
        if ((s = a?.api) != null && s.isSlowAsset && typeof ((s = a?.api) == null ? void 0 : s.isSlowAsset) == "function") try {
          i = (o = a?.api) == null ? void 0 : o.isSlowAsset(u);
        } catch (l) {
          return void console.warn("[Aegis] isSlowAsset function happen error:", l, ", this data will not be reported.");
        }
        else i = (s = a?.api) != null && s.assetSlowThreshold && typeof ((o = a?.api) == null ? void 0 : o.assetSlowThreshold) == "number" ? n > ((s = a?.api) == null ? void 0 : s.assetSlowThreshold) : 1e3 < n;
        var o = ["ASSET_REQUEST: " + u.url, "status: " + u.status, "duration: " + n + "ms", "type: " + u.type, "domainLookup: " + u.domainLookup + "ms", "connectTime: " + u.connectTime + "ms", "transferSize: " + (0 < r ? r + "bytes" : "unknown")].filter(Boolean).join(`

`), a = e.isWhiteList && e.config.assetLog, s = e.config.slowAssetLog && i, u = { level: i ? e.LogType.SLOW_ASSET_REQUEST : e.LogType.ASSERT_REQUEST, msg: o, ext1: n.toString() || "", errorMsg: "", originFrom: e.getOriginFrom() };
        (a || s) && e.normalLogPipeline(u);
      }, publish: function(e, t) {
        var n = this;
        this.$walk(function(r) {
          r === t && (r.speedLogPipeline(e), Array.isArray(e) ? e.forEach(n.processLog) : n.processLog(t, e));
        });
      }, publishMany: function(e, t) {
        for (var n = t.config, r = this.getFromParam(t), i = 0, o = e.length; i < o; i++) {
          var a = e[i];
          this.ASSETS_INITIATOR_TYPE.indexOf(a.initiatorType) === -1 || qe(a.name, n.hostUrl) || this.publish(this.generateLog(a, n, r), t);
        }
      }, collectSuccessLog: function(e) {
        var t, n, r = this;
        typeof window.PerformanceObserver == "function" ? (this.publishMany(performance.getEntriesByType(this.collectEntryType), e), (t = new window.PerformanceObserver(function(i) {
          r.publishMany(i.getEntries(), e);
        })).observe({ entryTypes: [this.collectEntryType] }), e.lifeCycle.on("destroy", function() {
          xt.countInstance() === 0 && t.disconnect();
        })) : (n = setInterval(function() {
          var i = performance.getEntriesByType(r.collectEntryType), o = i.slice(r.collectCur);
          r.collectCur = i.length, r.publishMany(o, e);
        }, 3e3), e.lifeCycle.on("destroy", function() {
          xt.countInstance() === 0 && clearInterval(n);
        }));
      }, collectFailLog: function(e) {
        function t(i) {
          var o, a, s, u;
          i && (i = i.target || i.srcElement, !(o = i?.src || i?.href) || typeof o != "string" || -1 < window.location.href.indexOf(o) || (i = typeof ((i = r.api) == null ? void 0 : i.resourceTypeHandler) == "function" ? (i = r.api) == null ? void 0 : i.resourceTypeHandler(o) : "", a = performance.getEntriesByType(n.collectEntryType).find(function(l) {
            return l.name === o;
          }), qe(o, r.hostUrl)) || (s = n.getFromParam(e), u = Number((u = a) == null ? void 0 : u.responseStatus), u = Number.isFinite(u) && 0 < u ? u : 400, u = { url: Xn(o), status: u, duration: Number((a?.duration || 0).toFixed(2)), method: "get", type: i || "static", isHttps: Et(o), urlQuery: je(o, !0), nextHopProtocol: "", domainLookup: 0, connectTime: 0, from: s }, n.publish(u, e)));
        }
        var n = this, r = e.config;
        window.document.addEventListener("error", t, !0), e.lifeCycle.on("destroy", function() {
          xt.countInstance() === 0 && window.document.removeEventListener("error", t, !0);
        });
      }, generateLog: function(e, r, n) {
        var r = typeof ((i = r.api) == null ? void 0 : i.resourceTypeHandler) == "function" ? (i = r.api) == null ? void 0 : i.resourceTypeHandler(e.name) : "", i = e.transferSize, o = Number(e.responseStatus), o = Number.isFinite(o) && 0 < o ? o : 200;
        return { url: Xn(e.name), method: "get", duration: Number(e.duration.toFixed(2)), status: o, type: r || "static", isHttps: Et(e.name), nextHopProtocol: e.nextHopProtocol || "", urlQuery: je(e.name, !0), domainLookup: bt(e.domainLookupEnd - e.domainLookupStart), connectTime: bt(e.connectEnd - e.connectStart), transferSize: 0 < i ? i : -1, from: n };
      }, collectNotReportedLog: function(e) {
        var t, n;
        it() && (t = (n = performance.getEntriesByType(this.collectEntryType)).length, typeof window.PerformanceObserver != "function") && this.collectCur !== t && (n = n.slice(this.collectCur), this.collectCur = t, this.publishMany(n, e));
      }, destroy: function() {
        this.option.publish = function() {
        };
      } }), Gi = window.navigator.userAgent.toLowerCase(), P = {};
      function se(e) {
        this.aegisPlugin = !0, this.name = "", this.instances = [], this.inited = !1, e.$walk = this.walk.bind(this), e.$getConfig = this.getConfig.bind(this), this.option = e, this.name = e.name;
      }
      function C(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h = this;
        this.isGetSample = !1, this.isHidden = !1, this.config = { version: 0, delay: 1e3, onError: !0, repeat: 60, random: 1, aid: !0, device: !0, pagePerformance: !0, webVitals: !0, speedSample: !0, onClose: !0, reportLoadPackageSpeed: !0, hostUrl: "https://rumt-zh.com", env: "production", url: "", offlineUrl: "", whiteListUrl: "", rateLimitUrl: "", pvUrl: "", speedUrl: "", customTimeUrl: "", performanceUrl: "", performanceUrlForHippy: "", webVitalsUrl: "", eventUrl: "", setDataReportUrl: "", memoryUrl: "", reportImmediately: !0, gzip: !0 }, this.isWhiteList = !1, this.whitelistUseGzip = !0, this.whitelistUseGzipReady = !1, this.lifeCycle = new ki(), this.bean = {}, this.rateLimitConfigs = null, this.rateLimitReady = !1, this.rateLimitSampled = !1, this.rateLimitPool = [], this.normalLogPipeline = Be([St(this, 5), Ai, function(g, m) {
          var b = t.config;
          m(g = g.map(function(y) {
            var w, v = b.maxLength || 10240;
            try {
              if (!y.msg || y.msg.length <= v) return y;
              y.msg = (w = y.msg) == null ? void 0 : w.substring(0, v);
            } catch {
              y.msg = we(y.msg).substring(0, b.maxLength);
            }
            return y;
          }));
        }, (d = (t = this).config, function(g, m) {
          var b = typeof d.repeat == "number" ? d.repeat : 60;
          if (b <= 0) return m(g);
          var y = d?.id + "_error", w = We[y] || {};
          m(g.filter(function(v) {
            if (v.level === S.ERROR || v.level === S.PROMISE_ERROR || v.level === S.AJAX_ERROR || v.level === S.SCRIPT_ERROR || v.level === S.IMAGE_ERROR || v.level === S.CSS_ERROR || v.level === S.MEDIA_ERROR || v.level === S.RET_ERROR || v.level === S.BRIDGE_ERROR || v.level === S.PAGE_NOT_FOUND_ERROR || v.level === S.WEBSOCKET_ERROR || v.level === S.LAZY_LOAD_ERROR) {
              if (v = v.msg.slice(0, 200), w[v] > b) return Ne[y] || on(y), !1;
              w[v] = 1 + ~~w[v], We[y] = w;
            }
            return !0;
          }));
        }), (f = this.lifeCycle.emit, p = this.config, function(g, m) {
          var b, y = p.logCreated;
          return typeof y == "function" ? (b = g.filter(function(w) {
            return y(w) !== !1;
          }), f("beforeWrite", b), m(b)) : (f("beforeWrite", g), m(g));
        }), (c = this, setTimeout(function() {
          var b = c.config, m = b.pvUrl, g = m === void 0 ? "" : m, m = b.spa, b = -1 < ["web-sdk", "mp-sdk", "rn-sdk"].indexOf("web-sdk");
          g && (b && !m || !b) && c.sendPipeline([function(y, w) {
            var v = c.getOriginFrom(), L = g != null && g.includes("?") ? "&" : "?";
            w({ url: v ? g + L + "originFrom=" + encodeURIComponent(v) : g, type: A.PV });
          }], A.PV)(null);
        }, 100), function(g, m) {
          m(g);
        }), (u = s = a = !1, l = [], (i = this).lifeCycle.on("onConfigChange", function() {
          o && clearTimeout(o), o = setTimeout(function() {
            var g, m;
            !u && i.config && (u = !0, g = i.config.whiteListUrl, (m = g === void 0 ? "" : g) && i.sendPipeline([function(b, y) {
              y({ url: m, type: A.WHITE_LIST, success: function(w) {
                s = !0;
                try {
                  var v = w.data || JSON.parse(w), L = v.retcode, N = v.result, k = N === void 0 ? {} : N, I = (L === 0 ? (a = k.is_in_white_list, i.isWhiteList = a, i.updateWhitelistGzipState(k.use_gzip), 0 <= k.rate && k.rate <= 1 && (i.config.random = k.rate, i.isGetSample = !1)) : i.disableWhitelistGzipState(), i.isWhiteList && l.length ? lr(i)(l.splice(0), function() {
                  }) : !i.isWhiteList && l.length && (l.length = 0), i.config.onWhitelist);
                  typeof I == "function" && I(a);
                } catch {
                }
              }, fail: function() {
                s = !0;
              } });
            }], A.WHITE_LIST)(null), u = !1);
          }, i.config.uin ? 50 : 500);
        }), i.lifeCycle.on("destroy", function() {
          l.length = 0;
        }), function(g, m) {
          var b;
          a || (b = (b = i.config) == null ? void 0 : b.api) != null && b.reportRequest ? m(g.concat(l.splice(0)).map(function(y) {
            return ar(y), y;
          })) : (b = g.filter(function(y) {
            return y.level !== S.INFO && y.level !== S.API_RESPONSE ? (ar(y), !0) : (s || (l.push(y), 200 <= l.length && (l.length = 200)), !1);
          })).length && m(b);
        }), function(g, m) {
          try {
            var b = g.filter(function(v) {
              return [S.ERROR, S.PROMISE_ERROR, S.AJAX_ERROR, S.SCRIPT_ERROR, S.IMAGE_ERROR, S.CSS_ERROR, S.MEDIA_ERROR, S.WEBSOCKET_ERROR, S.BRIDGE_ERROR, S.BLANK_SCREEN, S.RET_ERROR, S.PAGE_NOT_FOUND_ERROR, S.LAZY_LOAD_ERROR].includes(v.level);
            }), y = (b.length && h.lifeCycle.emit("errorOccurred", b), g.forEach(function(v) {
              ["ext1", "ext2", "ext3"].forEach(function(L) {
                v[L] && typeof v[L] == "string" && (v[L] = v[L].slice(0, 1024));
              }), ["ext4", "ext5", "ext6", "ext7", "ext8", "ext9", "ext10"].forEach(function(L) {
                v[L] && typeof v[L] != "string" && (v[L] = String(v[L]));
              });
            }), JSON.parse(JSON.stringify(g))), w = (h.lifeCycle.emit("beforeReport", y), h.config.beforeReport);
            (g = typeof w == "function" ? g.filter(function(v) {
              return w(v) !== !1;
            }) : g).length && m(g);
          } catch {
          }
        }, lr(this)]), this.eventPipeline = Be([St(this, 10), (r = this, function(g) {
          r.sendPipeline([function(m, b) {
            var y = m.map(function(w) {
              return { name: w.name, originFrom: w.originFrom, ext1: String(w.ext1 || r.config.ext1 || "").slice(0, 1024), ext2: String(w.ext2 || r.config.ext2 || "").slice(0, 1024), ext3: String(w.ext3 || r.config.ext3 || "").slice(0, 1024), ext4: String(w.ext4 || r.config.ext4 || ""), ext5: String(w.ext5 || r.config.ext5 || ""), ext6: String(w.ext6 || r.config.ext6 || ""), ext7: String(w.ext7 || r.config.ext7 || ""), ext8: String(w.ext8 || r.config.ext8 || ""), ext9: String(w.ext9 || r.config.ext9 || ""), ext10: String(w.ext10 || r.config.ext10 || "") };
            });
            b({ url: r.config.eventUrl, method: "post", contentType: "application/json", data: fe({ payload: fe(y) }), type: A.EVENT, log: m });
          }], A.EVENT)(g);
        })]), this.customTimePipeline = Be([St(this, 10), (n = this, function(g) {
          return n.sendPipeline([function(m, b) {
            b({ url: n.config.customTimeUrl, method: "post", contentType: "application/json", data: fe({ payload: fe({ custom: m }) }), type: A.CUSTOM, log: m });
          }], A.CUSTOM)(g);
        })]), this.timeMap = {}, this.failRequestCount = 0, C.instances.push(this);
      }
      P.macos = function() {
        return V("mac");
      }, P.ios = function() {
        return P.iphone() || P.ipod() || P.ipad();
      }, P.iphone = function() {
        return !P.windows() && V("iphone");
      }, P.ipod = function() {
        return V("ipod");
      }, P.ipad = function() {
        var e = navigator.platform === "MacIntel" && 1 < navigator.maxTouchPoints;
        return V("ipad") || e;
      }, P.android = function() {
        return !P.windows() && V("android");
      }, P.androidPhone = function() {
        return P.android() && V("mobile");
      }, P.androidTablet = function() {
        return P.android() && !V("mobile");
      }, P.blackberry = function() {
        return V("blackberry") || V("bb10");
      }, P.blackberryPhone = function() {
        return P.blackberry() && !V("tablet");
      }, P.blackberryTablet = function() {
        return P.blackberry() && V("tablet");
      }, P.windows = function() {
        return V("windows");
      }, P.windowsPhone = function() {
        return P.windows() && V("phone");
      }, P.windowsTablet = function() {
        return P.windows() && V("touch") && !P.windowsPhone();
      }, P.fxos = function() {
        return (V("(mobile") || V("(tablet")) && V(" rv:");
      }, P.fxosPhone = function() {
        return P.fxos() && V("mobile");
      }, P.fxosTablet = function() {
        return P.fxos() && V("tablet");
      }, P.meego = function() {
        return V("meego");
      }, P.cordova = function() {
        return window.cordova && location.protocol === "file:";
      }, P.nodeWebkit = function() {
        return typeof window.process == "object";
      }, P.mobile = function() {
        return P.androidPhone() || P.iphone() || P.ipod() || P.windowsPhone() || P.blackberryPhone() || P.fxosPhone() || P.meego();
      }, P.tablet = function() {
        return P.ipad() || P.androidTablet() || P.blackberryTablet() || P.windowsTablet() || P.fxosTablet();
      }, P.desktop = function() {
        return !P.tablet() && !P.mobile();
      };
      function pr() {
        return { host: new URL(location.href).host, pathname: location.pathname };
      }
      function ot(e, t, n) {
        return t != null && t.length && typeof e == "object" ? t.reduce(function(r, i) {
          var o = window.Headers && e instanceof Headers ? e.get(i) : e[i];
          return o ? r + (r === "" ? "" : `

`) + n + " header " + i + ": " + o : r;
        }, "") : "";
      }
      function Pt(e, t) {
        return e && ["null", "undefined"].indexOf(e) === -1 ? t + ": " + e : "";
      }
      function fn(o, t, n) {
        t === void 0 && (t = "");
        var r, i, o = typeof ((i = o.api) == null ? void 0 : i.resourceTypeHandler) == "function" ? (i = o.api) == null ? void 0 : i.resourceTypeHandler(n) : "";
        return Ci.indexOf(o) === -1 && (r = t === void 0 ? "" : t, i = (n === void 0 ? "" : n).split("?")[0], o = Ni.test(i) || Mi.some(function(a) {
          return String(r).indexOf(a) !== -1;
        }) ? "static" : "fetch"), o;
      }
      function hr(e, t) {
        return e ? S.AJAX_ERROR : t ? S.RET_ERROR : S.API_RESPONSE;
      }
      function gr(e, t, n) {
        var r, i;
        if (!e) return !1;
        if ((r = t?.api) != null && r.isSlowApi && typeof ((r = t?.api) == null ? void 0 : r.isSlowApi) == "function") try {
          return (i = t?.api) == null ? void 0 : i.isSlowApi(n || { duration: e });
        } catch (o) {
          return console.warn("[Aegis] isSlowApi function happen error:", o, ", this data will not be reported."), !1;
        }
        return (r = t?.api) != null && r.apiSlowThreshold && typeof ((i = t?.api) == null ? void 0 : i.apiSlowThreshold) == "number" ? e > ((n = t?.api) == null ? void 0 : n.apiSlowThreshold) : 1e3 < e;
      }
      function Lt(e, t) {
        return (e = e.api) != null && e.usePerformanceTiming && typeof t.url == "string" && (e = (e = performance.getEntriesByName(t.url)) == null ? void 0 : e.pop(), e) ? { url: t.url, isHttps: Et(t.url), method: t.method, type: t.type, status: t.status, duration: Number(e.duration.toFixed(2)), nextHopProtocol: e.nextHopProtocol || "", domainLookup: bt(e.domainLookupEnd - e.domainLookupStart), connectTime: bt(e.connectEnd - e.connectStart) } : { url: t.url, isHttps: Et(t.url), method: t.method, type: t.type, status: t.status, duration: Number(t.duration.toFixed(2)), nextHopProtocol: "", domainLookup: nt.number, connectTime: nt.number };
      }
      function mr() {
        return window.location.href;
      }
      function Vi(e) {
        return (e = ((t) => {
          var n = "", r = t.nodeType;
          if (r === 1 || r === 9 || r === 11) {
            if (typeof t.textContent == "string") return t.textContent;
            for (var i = t.firstChild; i; i = i.nextSibling) n += Cr(t);
          } else if (r === 3 || r === 4) return t.nodeValue;
          return n;
        })(e)) ? e.replace(/^\s+|\s+$/g, "") : "";
      }
      var vr, yr, dn, pn, ie, Ct, kt, Oe, at, wr, At, ze, br, hn, gn, Er, mn, vn, Sr = !(P.isIE = function() {
        return "ActiveXObject" in window;
      }), xe = [], Rr = /^\/[^/]/, Tr = !1, de = [], Ge = { maxRetryCount: 10, retryInterval: function(e) {
        return 1e3 * (2 << e);
      }, whenRetryEndStillFail: "discard", maxStorageCount: 50 }, $i = (new _({ name: "reportApiSpeed" }), new _({ name: "reportApiSpeed", override: !1, onNewAegis: function(e) {
        var t, n;
        this.override || (this.override = !0, (n = e.config.api) != null && n.injectTraceHeader && (this.traceRequestHeader = new Wi(n.injectTraceHeader, (t = n?.injectTraceIgnoreUrls) != null ? t : [], n?.injectTraceUrls, n?.traceFlag)), this.overrideFetch(e.config, e), this.overrideXhr(e.config, e));
      }, getFromParam: function(e) {
        return e.getCurrentPageUrl();
      }, overrideFetch: function(e, t) {
        var n = this, r = e.api, r = { name: this.name, traceRequestHeader: r != null && r.injectTraceHeader ? this.traceRequestHeader : null, getCurrentFrom: function() {
          return n.getFromParam(t);
        }, then: function(a, s, u, l, c, f, p) {
          var d, h;
          qe(u, e.hostUrl) || (d = a.headers ? a.headers.get("content-type") : "", (h = fn(e, d || "", u)) === "fetch" ? a.clone().text().then(function(g) {
            var m, b = a.status <= 0 || 400 <= a.status, k = ((k = e.api) == null ? void 0 : k.reqHeaders) || [], y = ot(l?.headers, k, "req"), k = ((k = e.api) == null ? void 0 : k.resHeaders) || [], w = ot(a.headers, k, "res"), v = ln(l?.headers), k = Kn(g, e.api, { url: u, ctx: a, payload: l?.body }), L = k.code, N = k.isErr, k = (k = e.api) == null ? void 0 : k.apiDetail, I = k ? rt(l?.body, (m = e.api) == null ? void 0 : m.reqParamHandler, { url: u }) : "", F = k ? rt(g, (m = e.api) == null ? void 0 : m.resBodyHandler, { url: u, ctx: a }) : "";
            setTimeout(function() {
              var q = Lt(e, { url: u, duration: s, type: h, status: a.status || 0, method: l?.method || "get" }), Y = [b ? "FETCH_ERROR: " + g : "", "fetch req url: " + u, "res status: " + (q.status || 0), "res duration: " + q.duration + "ms", "res startTime: " + c, y, w, "req method: " + (q.method || "GET"), "res retcode: " + L, Pt(I, "req param"), Pt(F, "res data")].filter(function(D) {
                return D;
              }).join(`

`), Y = (q.payload = l?.body, q.ret = L, q.isErr = +N, q.from = f || n.getFromParam(t), { msg: Y, code: L, trace: v, errorMsg: "", from: f || n.getFromParam(t), originFrom: p, level: S.API_RESPONSE }), U = e.slowApiLog && gr(q?.duration, e, q);
              Y.level = U ? S.SLOW_NET_REQUEST : hr(b, N), (U || Y.level !== S.API_RESPONSE || t.isWhiteList || (U = (U = t.config) == null ? void 0 : U.api) != null && U.reportRequest) && n.publishNormalLog(Y, t), n.publishSpeed(q, t);
            }, 0);
          }).catch(function(g) {
            console.info("ignore something error when process resp " + g);
          }) : setTimeout(function() {
            var g = Lt(e, { url: u, duration: s, type: h, status: a.status || 0, method: l?.method || "get" });
            g.type = "static", g.urlQuery = je(u, !0), g.from = f || n.getFromParam(t), n.publishSpeed(g, t);
          }, 0));
        }, catch: function(a, s, u, l, c, f, p) {
          var d, h, g, m, b;
          throw qe(u, e.hostUrl) || (d = fn(e, "", u), h = ((h = e.api) == null ? void 0 : h.reqHeaders) || [], g = ot(l?.headers, h, "req"), m = ln(l?.headers), b = (h = e.api) != null && h.apiDetail ? rt(l?.body, (h = e.api) == null ? void 0 : h.reqParamHandler, { url: u }) : "", setTimeout(function() {
            var y = Lt(e, { url: u, duration: s, type: d, status: 0, method: l?.method || "get" }), y = (y.from = f || n.getFromParam(t), n.publishSpeed(y, t), "AJAX_ERROR: " + a + `
                          
req url: ` + u + `
                          
res status: 0
                          
res duration: ` + y.duration + `ms
                          
req method: ` + (l?.method || "get") + `
                          
req param: ` + b + `
                          
res startTime: ` + c + `
                          
` + g);
            n.publishNormalLog({ msg: y, level: S.AJAX_ERROR, code: -400, trace: m, errorMsg: "", from: f || n.getFromParam(t), originFrom: p }, t);
          }, 0)), a;
        } }, i = (this.hackFetchOptions = r, this.hackFetchOptions), o = (r = e.api) == null ? void 0 : r.ignoreHackReg;
        if (o === void 0 && (o = /\.flv(\?|$)/i), de.find(function(a) {
          return a.name === i.name;
        })) throw new Error("name '" + i.name + "' is already in hackFetch option list");
        de.push(i), !Tr && window.fetch && (Tr = !0, pn = window.fetch, window.fetch = function(a, s) {
          s === void 0 && (s = {});
          var u = typeof a == "string" ? a : a?.url;
          if ((p = o?.test) != null && p.call(o, u)) return pn(u, s);
          Rr.test(u) && (u = "" + location.origin + u);
          var l, c, f, p = (i || {}).traceRequestHeader;
          p && (l = (l = (s || {}).headers) === void 0 ? {} : l, c = (f = pr()).host, c = (p = p.generate(u, l, { host: c, pathname: f.pathname }) || {}).name, f = p.value) && c && (s.headers = Object.assign(l, ((p = {})[c] = f, p)));
          for (var d = /* @__PURE__ */ new Map(), h = window.location.href, g = 0; g < de.length; g++) {
            var m = de[g];
            try {
              typeof m.beforeFetch == "function" && m.beforeFetch(u, s), typeof m.getCurrentFrom == "function" && d.set(m.name, m.getCurrentFrom());
            } catch {
            }
          }
          var b = Date.now();
          return pn(a, s).then(function(y) {
            for (var w = y.clone(), v = 0; v < de.length; v++) {
              var L = de[v];
              try {
                typeof L.then == "function" && L.then(w, Date.now() - b, u, s, b, d.get(L.name), h);
              } catch {
              }
            }
            return w;
          }).catch(function(y) {
            for (var w = 0; w < de.length; w++) {
              var v = de[w];
              try {
                typeof v.catch == "function" && v.catch(y, Date.now() - b, u, s, b, d.get(v.name), h);
              } catch {
              }
            }
            throw y;
          });
        });
      }, overrideXhr: function(e, t) {
        var n, r = this, i = { name: this.name, ignoreHackReg: (i = e.api) == null ? void 0 : i.ignoreHackReg, traceRequestHeader: (i = e.api) != null && i.injectTraceHeader ? this.traceRequestHeader : null, getCurrentFrom: function() {
          return r.getFromParam(t);
        }, send: function(o, a, s, u) {
          var l, c, f = Date.now(), p = ((e?.api || {}).injectTraceHeader && (c = (l = pr()).host, l = (c = r.traceRequestHeader.generate(o.aegisUrl, {}, { host: c, pathname: l.pathname }) || {}).name, c = c.value, l) && c && o.setRequestHeader(l, c), o.addEventListener("loadend", function() {
            var g, m, b, y, w = o.aegisUrl || "";
            qe(w, e.hostUrl) || o.failType === "abort" || (g = "", (o.failType || !o.status || 400 <= o.status) && (g = o.failType || "failed"), m = Date.now() - f, b = o.getResponseHeader("content-type") || "", y = fn(e, b, w), setTimeout(function() {
              var v = Lt(e, { url: w, duration: m, type: y, status: o.status, method: o.aegisMethod || "get" });
              if (v.from = s || r.getFromParam(t), y === "fetch") {
                var F = ((F = e.api) == null ? void 0 : F.reqHeaders) || [], L = ot(o.aegisXhrReqHeader, F, "req"), F = ((F = e.api) == null ? void 0 : F.resHeaders) || [], N = o.getAllResponseHeaders().split(`\r
`).reduce(function(U, D) {
                  return D = D.split(": "), D[0] && D[1] && (U[D[0]] = D[1]), U;
                }, {}), k = ot(N, F, "res"), I = ln(o.aegisXhrReqHeader), F = (N = e.api) == null ? void 0 : N.apiDetail, q = F ? rt(a, (N = e.api) == null ? void 0 : N.reqParamHandler, { url: w }) : "", Y = F ? rt(o.response, (N = e.api) == null ? void 0 : N.resBodyHandler, { url: w }) : "";
                try {
                  ((U, D, j, J) => {
                    var Ce, Ye, ee;
                    try {
                      if (typeof D?.retCodeHandlerAsync == "function") return D.retCodeHandlerAsync(U, j?.url, j?.ctx, function(te) {
                        var ke = te.code;
                        J?.({ code: ke === void 0 ? Z : ke, isErr: te.isErr });
                      });
                      if (typeof D?.retCodeHandler == "function") return ee = (Ye = D.retCodeHandler(U, j?.url, j?.ctx, j?.payload) || {}).code, J != null && J({ code: ee === void 0 ? Z : ee, isErr: Ye.isErr });
                      if (!(U = typeof U == "string" ? JSON.parse(U) : U)) return J != null && J({ code: Z, isErr: !1 });
                      typeof ((Ce = D?.ret) == null ? void 0 : Ce.join) == "function" && (Rt = [].concat(D.ret.map(function(te) {
                        return te.toLowerCase();
                      })));
                      var dt = Object.getOwnPropertyNames(U).filter(function(te) {
                        return Rt.indexOf(te.toLowerCase()) !== -1;
                      });
                      if (dt.length) return (ee = U[dt[0]]) !== "未知" && ee !== "" || (ee = Z), J != null && J({ code: "" + ee, isErr: ee !== 0 && ee !== "0" && ee !== Z });
                      J?.({ code: Z, isErr: !1 });
                    } catch {
                      J?.({ code: Z, isErr: !1 });
                    }
                  })(o.response, e.api, { url: w, ctx: o, payload: a }, function(j) {
                    var D = j.code, j = j.isErr, J = [g ? "AJAX_ERROR: request " + g : "", "fetch req url: " + w, "res status: " + (v.status || 0), "res duration: " + v.duration + "ms", "res startTime: " + f, L, k, "req method: " + (v.method || "GET"), "res retcode: " + D, Pt(q, "req param"), Pt(Y, "res data")].filter(function(Ce) {
                      return Ce;
                    }).join(`

`);
                    v.ret = D, v.isErr = +j, v.payload = a, e.slowApiLog && gr(v?.duration, e, v) ? r.publishNormalLog({ msg: J, level: S.SLOW_NET_REQUEST, code: D, trace: I, errorMsg: "", from: s || r.getFromParam(t), originFrom: u }, t) : r.publishNormalLog({ msg: J, level: hr(!!g, j), code: D, trace: I, errorMsg: "", from: s || r.getFromParam(t), originFrom: u }, t), r.publishSpeed(v, t);
                  });
                } catch {
                  v.ret = Z, r.publishSpeed(v, t);
                }
              } else v.type = "static", v.urlQuery = je(w, !0), r.publishSpeed(v, t);
              o.removeEventListener("abort", p), o.removeEventListener("error", d), o.removeEventListener("timeout", h);
            }, 0));
          }), function() {
            o.failType = "abort";
          }), d = function() {
            o.failType = "error";
          }, h = function() {
            o.failType = "timeout";
          };
          o.addEventListener("abort", p), o.addEventListener("error", d), o.addEventListener("timeout", h);
        } };
        this.hackXHROptions = i, n = this.hackXHROptions, xe.find(function(o) {
          return o.name === n.name;
        }) || (xe.push(n), !Sr && window.XMLHttpRequest && (vr = window.XMLHttpRequest.prototype.send, yr = window.XMLHttpRequest.prototype.open, dn = window.XMLHttpRequest.prototype.setRequestHeader, Sr = !0, window.XMLHttpRequest.prototype.open = function() {
          this.aegisMethod = arguments[0];
          var o, a = arguments[1];
          if (Rr.test(a) && (a = "" + location.origin + a), this.aegisUrl = a, (a = (o = n.ignoreHackReg) == null ? void 0 : o.test) == null || !a.call(o, this.aegisUrl)) if (this.aegisXhrStartTime = Date.now(), this.sendByAegis) P.isIE() || (this.timeout = 5e3);
          else for (var s = 0; s < xe.length; s++) {
            var u = xe[s];
            try {
              typeof u.open == "function" && u.open(this);
            } catch {
            }
          }
          return yr.apply(this, arguments);
        }, window.XMLHttpRequest.prototype.setRequestHeader = function() {
          var o, a, s;
          return (a = (s = n.ignoreHackReg) == null ? void 0 : s.test) != null && a.call(s, this.aegisUrl) ? dn.apply(this, arguments) : (a = arguments[0], s = arguments[1], this.aegisXhrReqHeader = (o = this.aegisXhrReqHeader) != null ? o : {}, n != null && n.traceRequestHeader && -1 < ["traceparent", "b3", "sw8", "sentry-trace"].indexOf(a) && (this.aegisXhrReqHeader[a] || (arguments[1] = s), this.aegisXhrReqHeader[a]) ? void 0 : (this.aegisXhrReqHeader[a] = arguments[1], dn.apply(this, arguments)));
        }, window.XMLHttpRequest.prototype.send = function() {
          var o, a;
          if (!((a = (o = n.ignoreHackReg) == null ? void 0 : o.test) != null && a.call(o, this.aegisUrl) || this.sendByAegis)) for (var s = 0; s < xe.length; s++) {
            var u = xe[s];
            try {
              typeof u.send == "function" && u.send(this, arguments[0], typeof u.getCurrentFrom == "function" ? u.getCurrentFrom() : void 0, window.location.href);
            } catch {
            }
          }
          return vr.apply(this, arguments);
        }));
      }, publishSpeed: function(e) {
        var t = this;
        this.$walk(function(n) {
          var r = t.$getConfig(n);
          e.type !== "fetch" || typeof r?.urlHandler != "function" ? (e.url = je(e.url), n.speedLogPipeline(e)) : n.speedLogPipeline(T(T({}, e), { url: je(r.urlHandler(e.url, e.payload)) }));
        });
      }, publishNormalLog: function(e) {
        this.$walk(function(t) {
          t.normalLogPipeline(e);
        });
      }, destroy: function() {
        var e, t, n;
        this.option.publishSpeed = function() {
        }, this.option.publishNormalLog = function() {
        }, this.option.hackXHROptions && (e = this.option.hackXHROptions, (n = xe.findIndex(function(r) {
          return r.name === e.name;
        })) !== -1) && xe.splice(n, 1), this.option.hackFetchOptions && (t = this.option.hackFetchOptions, (n = de.findIndex(function(r) {
          return r.name === t.name;
        })) !== -1) && de.splice(n, 1), this.option.override = !1;
      } })), st = {}, Ji = new _({ name: "reportBridgeSpeed", override: !1, onNewAegis: function(e) {
        this.override || (this.override = !0, this.overrideBridge(e));
      }, getFromParam: function(e) {
        return e.getCurrentPageUrl();
      }, publishSpeed: function(e, t) {
        this.$walk(function(n) {
          n === t && n.speedLogPipeline(e);
        });
      }, overrideBridge: function(e) {
        var t = this, n = e.config;
        n.reportBridgeSpeed && n.h5Bridge && n.h5BridgeFunc.length && n.h5BridgeFunc.forEach(function(r) {
          var i = n.h5Bridge[r];
          st[r] = i, n.h5Bridge[r] = function() {
            for (var o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
            var s = o[0], u = o[1], l = o[2], c = o[3], f = Date.now(), p = t.getFromParam(e);
            i(s, u, l, function(d) {
              var h = Kn(d, n.api), g = h.code, h = h.isErr, g = { url: s + "-" + u, name: s + "-" + u, duration: Date.now() - f, type: "bridge", ret: g, isErr: +h, from: p };
              t.publishSpeed(g, e), c(d);
            });
          };
        });
      }, unHackBridge: function(e) {
        Object.keys(st).forEach(function(t) {
          st[t] && (e.config.h5Bridge[t] = st[t]);
        }), st = {};
      }, destroy: function(e) {
        this.option.publishSpeed = function() {
        }, this.option.unHackBridge(e), this.option.override = !1;
      } }), M = ((M = ie = ie || {})[M.unknown = 100] = "unknown", M[M.wifi = 1] = "wifi", M[M.net2g = 2] = "net2g", M[M.net3g = 3] = "net3g", M[M.net4g = 4] = "net4g", M[M.net5g = 5] = "net5g", M[M.net6g = 6] = "net6g", (M = Ct = Ct || {})[M.android = 1] = "android", M[M.ios = 2] = "ios", M[M.windows = 3] = "windows", M[M.macos = 4] = "macos", M[M.linux = 5] = "linux", M[M.other = 100] = "other", (M = kt = kt || {})[M.unknown = 100] = "unknown", M[M.normal = 0] = "normal", M[M.weak = 1] = "weak", M[M.disconnected = 2] = "disconnected", new _({ name: "device", onNewAegis: function(e) {
        e.extendBean("platform", this.getPlatform()), e.extendBean("netType", ie.unknown), this.getDpi(e), this.refreshNetworkTypeToBean(e), this.refreshNetworkStatusToBean(e);
      }, getDpi: function(e) {
        e.extendBean("vp", Math.round(window.innerWidth) + " * " + Math.round(window.innerHeight)), window.screen && e.extendBean("sr", Math.round(window.screen.width) + " * " + Math.round(window.screen.height));
      }, getPlatform: function() {
        var e = { android: /\bAndroid\s*([^;]+)/, ios: /\b(iPad|iPhone|iPod)\b.*? OS ([\d_]+)/, windows: /\b(Windows NT)/, macos: /\b(Mac OS)/, linux: /\b(Linux)/i }, t = Object.keys(e).find(function(n) {
          return e[n].test(navigator.userAgent);
        });
        return t ? Ct[t] : Ct.other;
      }, refreshNetworkTypeToBean: function(e) {
        var t = this, n = e.config;
        n && (typeof n.getNetworkType == "function" ? n.getNetworkType : Or)(function(r) {
          ie[r] || (r = ie.unknown), e.extendBean("netType", r), t.NetworkRefreshTimer = setTimeout(function() {
            t.refreshNetworkTypeToBean(e), clearTimeout(t.NetworkRefreshTimer);
          }, 1e4);
        });
      }, refreshNetworkStatusToBean: function(e) {
        var t, n = this, r = e.config;
        r && (t = typeof r.getNetworkStatus == "function" ? r.getNetworkStatus : t) != null && t(function(i) {
          kt[i] === void 0 && (i = kt.unknown), e.extendBean("netStatus", i), n.NetworkStatusRefreshTimer = setTimeout(function() {
            n.refreshNetworkStatusToBean(e), clearTimeout(n.NetworkStatusRefreshTimer);
          }, 1e4);
        });
      } })), Or = function(e) {
        var t = "", n = navigator.userAgent.match(/NetType\/(\w+)/);
        n ? t = n[1] : navigator.connection && (t = navigator.connection.effectiveType || navigator.connection.type), e((n = t = t || Z, 0 <= (n = String(n).toLowerCase()).indexOf("4g") ? ie.net4g : 0 <= n.indexOf("wifi") ? ie.wifi : 0 <= n.indexOf("5g") ? ie.net5g : 0 <= n.indexOf("6g") ? ie.net6g : 0 <= n.indexOf("3g") ? ie.net3g : 0 <= n.indexOf("2g") ? ie.net2g : ie.unknown));
      }, Xi = window.WebSocket, Ee = [], Ki = { construct: function(e, t) {
        var n = new e(t[0], t[1]);
        return n.originSend = n.send, n.addEventListener("error", function(i) {
          var i = i?.currentTarget || {}, o = i.url, a = i.readyState;
          Ee?.forEach(function(s) {
            s = s.onErr, s?.({ msg: "无法获知具体错误信息，需在浏览器控制台查看！", readyState: a, connectUrl: o });
          });
        }), Object.defineProperty(n, "send", { get: function() {
          return function(r) {
            (i = n.originSend) != null && i.call(n, r);
            var i = n.readyState;
            if (i !== WebSocket.OPEN) {
              var o = { readyState: i, connectUrl: n.url };
              switch (i) {
                case WebSocket.CLOSED:
                  Ee.forEach(function(a) {
                    a = a.sendErr, a?.(T({ msg: "消息发送失败，连接已关闭！" }, o));
                  });
                  break;
                case WebSocket.CONNECTING:
                  Ee.forEach(function(a) {
                    (0, a.sendErr)(T({ msg: "消息发送失败，正在连接中！" }, o));
                  });
                  break;
                case WebSocket.CLOSING:
                  Ee.forEach(function(a) {
                    (0, a.sendErr)(T({ msg: "消息发送失败，连接正在关闭！" }, o));
                  });
              }
            }
          };
        } }), n;
      } }, xr = new _({ name: "onError" }), Qi = xr = new _({ name: "onError", onNewAegis: function(e) {
        this.startListen(e);
      }, getFromParam: function(e) {
        return e.getCurrentPageUrl();
      }, startListen: function(e) {
        function t(l) {
          var c, f = l && we(l.reason);
          f && s.publishErrorLog({ msg: "PROMISE_ERROR: " + f, errorMsg: (c = (l = ((c = l.reason) == null ? void 0 : c.message) || ((c = l.reason) == null ? void 0 : c.errMsg) || f) == null ? void 0 : l.slice) == null ? void 0 : c.call(l, 0, 150), level: S.PROMISE_ERROR, from: s.getFromParam(e), originFrom: e.getOriginFrom() }, e);
        }
        function n(l) {
          var c;
          if (l = l?.target || l?.srcElement) {
            var f = l.src || l.href || "", p = l.tagName, p = (p === void 0 ? "script" : p).toLowerCase(), d = ["audio", "video"].includes(p);
            if (!d || l != null && l.error) {
              if (!(qe(c = f, e.config.hostUrl) || -1 < window.location.href.indexOf(c))) {
                var h = { msg: p + " load fail: " + f + " " + (d ? `

error code: ` + ((c = l?.error) == null ? void 0 : c.code) + (((d = l?.error) == null ? void 0 : d.message) !== "" ? `
error msg: ` + ((c = l?.error) == null ? void 0 : c.message) : "") : ""), level: S.INFO, from: s.getFromParam(e), originFrom: e.getOriginFrom() };
                if (/\.js$/.test(f)) h.level = S.SCRIPT_ERROR;
                else if (/\.css$/.test(f)) h.level = S.CSS_ERROR;
                else switch (p) {
                  case "script":
                    h.level = S.SCRIPT_ERROR;
                    break;
                  case "link":
                    h.level = S.CSS_ERROR;
                    break;
                  case "img":
                    h.level = S.IMAGE_ERROR;
                    break;
                  case "audio":
                  case "video":
                    h.level = S.MEDIA_ERROR;
                    break;
                  default:
                    return;
                }
                s.publishErrorLog(h, e);
              }
            } else console.log("may be media load success because error is undefine");
          }
        }
        var r, i, o, a, s = this, u = window.onerror;
        window.onerror = function() {
          for (var l = [], c = 0; c < arguments.length; c++) l[c] = arguments[c];
          var f, p = we(l[0]);
          typeof (f = p) != "string" || !f || Li.some(function(d) {
            return -1 < f.indexOf(d);
          }) || Vn.some(function(d) {
            return -1 < f.indexOf(d);
          }) || s.publishErrorLog({ msg: (p || "") + " @ (" + (we(l[1]) || "") + ":" + (l[2] || 0) + ":" + (l[3] || 0) + `)
          
` + we(l[4] || ""), level: S.ERROR, from: s.getFromParam(e), originFrom: e.getOriginFrom() }, e), u?.call.apply(u, Q([window], l));
        }, window.addEventListener("unhandledrejection", t), window.document.addEventListener("error", n, !0), e.lifeCycle.on("destroy", function() {
          xr.countInstance() === 0 && (window.document.removeEventListener("unhandledrejection", t), window.document.removeEventListener("error", n, !0));
        }), e.config.websocketHack && (r = { key: e.config.id + "-" + this.name, onErr: function(l) {
          var c;
          (c = s.publishWsErrorLog) != null && c.call(s, l, e);
        }, sendErr: function(l) {
          var c;
          (c = s.publishWsErrorLog) != null && c.call(s, l, e);
        } }, this.hackWebsocketConfig = r, r = this.hackWebsocketConfig, window.Proxy) && window.WebSocket && (i = window.WebSocket, window && !i.isHack && (o = new Proxy(WebSocket, Ki), i.isHack = !0, window.WebSocket = o), a = r, Ee.find(function(l) {
          return l.key === a.key;
        }) || a && Ee.push(a));
      }, publishErrorLog: function(e, t) {
        this.$walk(function(n) {
          n === t && n.normalLogPipeline(e);
        });
      }, publishWsErrorLog: function(e, t) {
        var n = e.connectUrl;
        this.publishErrorLog({ msg: `WEBSOCKET_ERROR: 
              connect: ` + n + `
              readyState: ` + e.readyState + `
              msg: ` + e.msg, level: S.WEBSOCKET_ERROR, from: this.getFromParam(t), originFrom: t.getOriginFrom() }, t);
      }, destroy: function() {
        var e, t;
        this.option.publishErrorLog = function() {
        }, this.option.hackWebsocketConfig && (e = this.option.hackWebsocketConfig, window.WebSocket = Xi, (t = Ee.findIndex(function(n) {
          return n.key === e.key;
        })) !== -1) && Ee.splice(t, 1);
      } }), Pr = (new _({ name: "clickElementLog" }), function(e) {
        if (e.id !== "" && e.id) return 'id("' + e.id + '")';
        if (e === document.body) return e.tagName;
        if (e instanceof Document) return "document";
        var t = 0;
        if (e.parentNode) for (var n = e.parentNode.childNodes, r = 0; r < n.length; r += 1) {
          var i = n[r];
          if (i === e) return Pr(e.parentNode) + "/" + e.tagName + "[" + (t + 1) + "]";
          i.nodeType === 1 && i.tagName === e.tagName && (t += 1);
        }
        return 0;
      }), Lr = function(e) {
        return e instanceof Array ? new Map(e.map(function(t) {
          return [t, !0];
        })) : /* @__PURE__ */ new Map();
      }, It = function(e, t) {
        return typeof e == "string" ? e.split(t) : [];
      }, Cr = function(e) {
        if (e.nodeType === 3 || e.nodeType === 4) return e.nodeValue || "";
        if (e.nodeType !== 1) return "";
        if (typeof e.textContent == "string") return e.textContent;
        for (var t = "", n = e.firstChild; n; n = n.nextSibling) t += Cr(n);
        return t;
      }, Yi = new _({ name: "clickElementLog", listeners: [], onNewAegis: function(e) {
        this.startListen(e);
      }, startListen: function(e) {
        for (var t = function(o) {
          n.listeners.push(((a, s, u, l) => {
            function c(f) {
              var p = document.documentElement;
              p && u.call(p, f, f.target);
            }
            return a.addEventListener(s, c, l), { destroy: function() {
              a.removeEventListener(s, c, l);
            } };
          })(document, o, function(a, s) {
            var u, l, c;
            s && !((f, p) => {
              d = Lr(((d = (f = f).ignoreElements) == null ? void 0 : d.ignoreClasses) || []) || /* @__PURE__ */ new Map();
              for (var d, h = (f = { ignoreIds: Lr(((f = f.ignoreElements) == null ? void 0 : f.ignoreIds) || []) || /* @__PURE__ */ new Map(), ignoreClasses: d }).ignoreClasses, g = f.ignoreIds, m = !(g.size === 0 && h.size === 0), b = p, y = (It(p.getAttribute("id") || "", " "), It(p.getAttribute("class") || "", ""), 0), w = !1; b && m && b.getAttribute; ) {
                if (w) return !0;
                if (10 <= y) break;
                for (var v = It(b.getAttribute("id") || "", " "), L = It(b.getAttribute("class") || "", ""), N = 0, k = v; N < k.length; N++) {
                  var I = k[N];
                  if (g.has(I)) {
                    w = !0;
                    break;
                  }
                }
                for (var F = 0, q = L; F < q.length; F++) {
                  var Y = q[F];
                  if (h.has(Y)) {
                    w = !0;
                    break;
                  }
                }
                y += 1, b = b.parentNode || b.parentElement;
              }
              return !1;
            })(e.config, s) && (u = Pr(s), l = Vi(s), c = s.getBoundingClientRect && s.getBoundingClientRect(), s = { op: o, view_type: s?.nodeName || "", view_text: l.slice(0, 127), view_tag: u, page: mr(), page_id: mr(), view_pos: { p0: (parseInt(String(c.left), 10) || -1) + "," + (parseInt(String(c.top), 10) || -1), p1: (parseInt(String(c.left + window.scrollX), 10) || -1) + "," + (parseInt(String(c.top + window.scrollY), 10) || -1) } }, e.normalLogPipeline({ msg: s, level: S.CLICK_EVENT, errorMsg: "", originFrom: e.getOriginFrom() }));
          }, !0));
        }, n = this, r = 0, i = Object.entries({ click: 1, longpress: 2 }); r < i.length; r++) t(i[r][0]);
      }, destroy: function() {
        this.listeners.forEach(function(e) {
          return e.destroy();
        }), this.listeners = [];
      } }), Mt = (new _({ name: "consoleLog" }), { log: console.log, error: console.error, warn: console.warn, info: console.info, debug: console.debug, trace: console.trace }), Zi = new _({ name: "consoleLog", onNewAegis: function(e) {
        this.startListen(e);
      }, startListen: function(e) {
        var t;
        t = e, ["log", "error", "warn", "info", "debug", "trace"].forEach(function(n) {
          var r = Mt[n];
          console[n] = function() {
            for (var i, o = [], a = 0; a < arguments.length; a++) o[a] = arguments[a];
            try {
              r.apply(console, o), !t.isWhiteList && ["log", "info", "debug", "trace"].includes(n) || (i = o.map(function(s) {
                if (typeof s == "object" && s !== null) try {
                  return JSON.stringify(s);
                } catch {
                }
                return String(s);
              }).join(" "), t.normalLogPipeline({ msg: "method: console." + n + `
message: ` + i, level: S.CONSOLE_LOG, errorMsg: "", originFrom: t.getOriginFrom() }));
            } catch (s) {
              Mt.error("Console hook error:", s);
            }
          };
        });
      }, destroy: function() {
        Object.keys(Mt).forEach(function(e) {
          console[e] = Mt[e];
        });
      } });
      function kr() {
        At = [], at = -1, Oe = null, mn(addEventListener);
      }
      ze = { passive: !0, capture: !0 }, br = /* @__PURE__ */ new Date(), hn = function(e, t) {
        Oe || (Oe = t, at = e, wr = /* @__PURE__ */ new Date(), mn(removeEventListener), gn());
      }, gn = function() {
        var e;
        0 <= at && at < wr - br && (e = { entryType: "first-input", name: Oe.type, target: Oe.target, cancelable: Oe.cancelable, startTime: Oe.timeStamp, processingStart: Oe.timeStamp + at }, At.forEach(function(t) {
          t(e);
        }), At = []);
      }, Er = function(e) {
        var t, n, r, i, o, a;
        e.cancelable && (t = (1e12 < e.timeStamp ? /* @__PURE__ */ new Date() : performance.now()) - e.timeStamp, e.type == "pointerdown" ? (n = t, r = e, i = function() {
          hn(n, r), a();
        }, o = function() {
          a();
        }, a = function() {
          removeEventListener("pointerup", i, ze), removeEventListener("pointercancel", o, ze);
        }, addEventListener("pointerup", i, ze), addEventListener("pointercancel", o, ze)) : hn(t, e));
      }, mn = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
          return e(t, Er, ze);
        });
      }, vn = document.visibilityState === "hidden" ? 0 : 1 / 0, addEventListener("visibilitychange", function e(t) {
        document.visibilityState === "hidden" && (vn = t.timeStamp, removeEventListener("visibilitychange", e, !0));
      }, !0), kr(), self.webVitals = { firstInputPolyfill: function(e) {
        At.push(e), gn();
      }, resetFirstInputPolyfill: kr, get firstHiddenTime() {
        return vn;
      } };
      function pe(e, t) {
        var n = Fr(), r = "navigate";
        return 0 <= _r ? r = "back-forward-cache" : n && (document.prerendering || 0 < Rn() ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), { name: e, value: t === void 0 ? -1 : t, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: r };
      }
      function Ve(e, t, n) {
        try {
          var r;
          if (PerformanceObserver.supportedEntryTypes.includes(e)) return (r = new PerformanceObserver(function(i) {
            Promise.resolve().then(function() {
              t(i.getEntries());
            });
          })).observe(Object.assign({ type: e, buffered: !0 }, n || {})), r;
        } catch {
        }
      }
      function he(e, t, n, r) {
        var i, o;
        return function(a) {
          0 <= t.value && (a || r) && ((o = t.value - (i || 0)) || i === void 0) && (i = t.value, t.delta = o, t.rating = (a = t.value) > n[1] ? "poor" : a > n[0] ? "needs-improvement" : "good", e(t));
        };
      }
      function yn(e) {
        requestAnimationFrame(function() {
          return requestAnimationFrame(function() {
            return e();
          });
        });
      }
      function Nt(e) {
        function t(n) {
          n.type !== "pagehide" && document.visibilityState !== "hidden" || e(n);
        }
        addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0);
      }
      function wn(e) {
        var t = !1;
        return function(n) {
          t || (e(n), t = !0);
        };
      }
      function bn() {
        return Xe < 0 && (Xe = Ur(), Dr(), Je(function() {
          setTimeout(function() {
            Xe = Ur(), Dr();
          }, 0);
        })), { get firstHiddenTime() {
          return Xe;
        } };
      }
      function _t(e) {
        document.prerendering ? addEventListener("prerenderingchange", function() {
          return e();
        }, !0) : e();
      }
      function Ar(e, t) {
        t = t || {}, _t(function() {
          var n, r = bn(), i = pe("FCP"), o = Ve("paint", function(a) {
            a.forEach(function(s) {
              s.name === "first-contentful-paint" && (o.disconnect(), s.startTime < r.firstHiddenTime) && (i.value = Math.max(s.startTime - Rn(), 0), i.entries.push(s), n(!0));
            });
          });
          o && (n = he(e, i, Hr, t.reportAllChanges), Je(function(a) {
            i = pe("FCP"), n = he(e, i, Hr, t.reportAllChanges), yn(function() {
              i.value = performance.now() - a.timeStamp, n(!0);
            });
          }));
        });
      }
      function eo(e) {
        var t, n, r, i, o, a;
        e.cancelable && (t = (1e12 < e.timeStamp ? /* @__PURE__ */ new Date() : performance.now()) - e.timeStamp, e.type == "pointerdown" ? (n = t, r = e, i = function() {
          qr(n, r), a();
        }, o = function() {
          a();
        }, a = function() {
          removeEventListener("pointerup", i, ut), removeEventListener("pointercancel", o, ut);
        }, addEventListener("pointerup", i, ut), addEventListener("pointercancel", o, ut)) : qr(t, e));
      }
      function to(e) {
        e.forEach(function(t) {
          t.interactionId && (Tn = Math.min(Tn, t.interactionId), jt = Math.max(jt, t.interactionId), Gr = jt ? (jt - Tn) / 7 + 1 : 0);
        });
      }
      function Ir() {
        return Vr() - Jr;
      }
      function Mr(e) {
        var t = me[me.length - 1], n = On[e.interactionId];
        (n || me.length < 10 || e.duration > t.latency) && (n ? (n.entries.push(e), n.latency = Math.max(n.latency, e.duration)) : (t = { id: e.interactionId, latency: e.duration, entries: [e] }, On[t.id] = t, me.push(t)), me.sort(function(r, i) {
          return i.latency - r.latency;
        }), me.splice(10).forEach(function(r) {
          delete On[r.id];
        }));
      }
      function En(e, t) {
        function n(i, o, a, s) {
          function u(l) {
            i === "visibilitychange" && document.visibilityState !== "hidden" || (s ? setTimeout(function() {
              return o(l);
            }, s) : o(l), a && removeEventListener(i, u, !0));
          }
          addEventListener(i, u, !0);
        }
        var r;
        n("visibilitychange", e, t?.once, (r = t?.delay) == null ? void 0 : r.visibilitychange), n("pagehide", e, t?.once, (r = t?.delay) == null ? void 0 : r.pagehide), n("beforeunload", e, t?.once, (r = t?.delay) == null ? void 0 : r.beforeunload);
      }
      function $e(e) {
        var t = e.name;
        0 < (e = e.value) && (Le[t] = e);
      }
      function ge(e, t, n, r) {
        return n === void 0 && (n = 15e3), r === void 0 && (r = 0), (t = t === void 0 ? 0 : t) <= e && e <= n ? e : r;
      }
      function Ft(e, t) {
        t === void 0 && (t = []);
        try {
          var n = localStorage.getItem(e);
          if (n != null) {
            var r = JSON.parse(n);
            if (Array.isArray(t) && !Array.isArray(r)) try {
              localStorage.removeItem(e);
            } catch {
            }
            else {
              if (Array.isArray(t) || typeof t != "object" || t === null || typeof r == "object" && r !== null && !Array.isArray(r)) return r;
              try {
                localStorage.removeItem(e);
              } catch {
              }
            }
          }
          return t;
        } catch {
          try {
            localStorage.removeItem(e);
          } catch {
          }
          return t;
        }
      }
      function Ut(e, t) {
        try {
          localStorage.setItem(e, t);
        } catch {
        }
      }
      var Pe, lt, Nr, Dt, Sn, _e, _r = -1, Je = function(e) {
        addEventListener("pageshow", function(t) {
          t.persisted && (_r = t.timeStamp, e(t));
        }, !0);
      }, Fr = function() {
        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
      }, Rn = function() {
        var e = Fr();
        return e && e.activationStart || 0;
      }, Xe = -1, Ur = function() {
        return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0;
      }, Ht = function(e) {
        document.visibilityState === "hidden" && -1 < Xe && (Xe = e.type === "visibilitychange" ? e.timeStamp : 0, no());
      }, Dr = function() {
        addEventListener("visibilitychange", Ht, !0), addEventListener("prerenderingchange", Ht, !0);
      }, no = function() {
        removeEventListener("visibilitychange", Ht, !0), removeEventListener("prerenderingchange", Ht, !0);
      }, Hr = [1800, 3e3], jr = [0.1, 0.25], ut = { passive: !0, capture: !0 }, ro = /* @__PURE__ */ new Date(), qr = function(e, t) {
        Pe || (Pe = t, lt = e, Nr = /* @__PURE__ */ new Date(), Br(removeEventListener), Wr());
      }, Wr = function() {
        var e;
        0 <= lt && lt < Nr - ro && (e = { entryType: "first-input", name: Pe.type, target: Pe.target, cancelable: Pe.cancelable, startTime: Pe.timeStamp, processingStart: Pe.timeStamp + lt }, Dt.forEach(function(t) {
          t(e);
        }), Dt = []);
      }, Br = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t) {
          return e(t, eo, ut);
        });
      }, zr = [100, 300], Gr = 0, Tn = 1 / 0, jt = 0, Vr = function() {
        return Sn ? Gr : performance.interactionCount || 0;
      }, $r = [200, 500], Jr = 0, me = [], On = {}, Xr = [2500, 4e3], xn = {}, io = (Fe.prototype.start = function() {
        var e = this, t = new PerformanceObserver(function(n) {
          n = n.getEntriesByName("first-contentful-paint"), 0 < n.length && (e.fcp = n[0].startTime, e.slientWindowStartTime = e.fcp, t.disconnect(), setTimeout(function() {
            e.checkTTI();
          }, Math.max(e.slienceTimeInterval - (performance.now() - e.fcp) + 20, 1)));
        });
        t.observe({ entryTypes: ["paint"] }), this.longtaskObserver = new PerformanceObserver(function(n) {
          n = n.getEntries(), e.longTaskEntries = e.longTaskEntries.concat(n);
        }), this.longtaskObserver.observe({ entryTypes: ["longtask"] }), this.resourceObserver = new PerformanceObserver(function(n) {
          n = n.getEntries(), e.resourceEntries = e.resourceEntries.concat(n);
        }), this.resourceObserver.observe({ entryTypes: ["resource"] });
      }, Fe.prototype.checkTTI = function() {
        var e = this;
        this.hasSlientWindow() ? (this.calculateTTI(), this.longtaskObserver.disconnect(), this.resourceObserver.disconnect()) : setTimeout(function() {
          e.checkTTI();
        }, this.checkInterval);
      }, Fe.prototype.hasSlientWindow = function() {
        var e, t = performance.now();
        return !(t - this.slientWindowStartTime < 5e3 || ((e = this.getLastLongTaskEndTime()) > this.slientWindowStartTime ? (this.slientWindowStartTime = e, this.resourceEntries = []) : this.getRequestCount(this.slientWindowStartTime, t) <= 2 ? (this.lastLongtaskEndTime = e, 0) : (t = this.resourceEntries.sort(function(n, r) {
          return n.startTime - r.startTime;
        }), this.slientWindowStartTime = t[this.resourceEntries.length - 2].startTime, 1)));
      }, Fe.prototype.getLastLongTaskEndTime = function() {
        var e;
        return this.longTaskEntries.length === 0 ? -1 : (e = 0, this.longTaskEntries.forEach(function(t) {
          t.startTime + t.duration > e && (e = t.startTime + t.duration);
        }), e);
      }, Fe.prototype.getRequestCount = function(e, t) {
        var n = 0;
        return this.resourceEntries.forEach(function(r) {
          r.startTime >= e && r.startTime + r.duration <= t && (n += 1);
        }), n;
      }, Fe.prototype.calculateTTI = function() {
        var t = this.lastLongtaskEndTime === -1 ? this.slientWindowStartTime : this.lastLongtaskEndTime, e = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart, t = Math.max(e, t);
        this.onTTICallback(t);
      }, Fe), Le = (new _({ name: "webVitals" }), { FCP: -1, LCP: -1, FID: -1, CLS: -1, INP: -1, TTI: -1, from: void 0 }), Pn = /* @__PURE__ */ new Map(), oo = new _({ name: "webVitals", onNewAegis: function(e) {
        var t, n, r, i, o, a, s, u, l, c, f = this;
        if (it() && typeof window.PerformanceObserver == "function" && typeof performance.getEntriesByName == "function") try {
          Pn.set(e, { isWebVitalsReported: !1, hasFirstEntry: !1, custom: null }), Ar($e), l = $e, c = {}, _t(function() {
            function p(y) {
              (y = y[y.length - 1]) && y.startTime < g.firstHiddenTime && (m.value = Math.max(y.startTime - Rn(), 0), m.entries = [y], d());
            }
            var d, h, g = bn(), m = pe("LCP"), b = Ve("largest-contentful-paint", p);
            b && (d = he(l, m, Xr, c.reportAllChanges), h = wn(function() {
              xn[m.id] || (p(b.takeRecords()), b.disconnect(), xn[m.id] = !0, d(!0));
            }), ["keydown", "click"].forEach(function(y) {
              addEventListener(y, function() {
                return setTimeout(h, 0);
              }, !0);
            }), Nt(h), Je(function(y) {
              m = pe("LCP"), d = he(l, m, Xr, c.reportAllChanges), yn(function() {
                m.value = performance.now() - y.timeStamp, xn[m.id] = !0, d(!0);
              });
            }));
          }), s = $e, u = {}, _t(function() {
            function p(y) {
              y.startTime < h.firstHiddenTime && (g.value = y.processingStart - y.startTime, g.entries.push(y), b(!0));
            }
            function d(y) {
              y.forEach(p);
            }
            var h = bn(), g = pe("FID"), m = Ve("first-input", d), b = he(s, g, zr, u.reportAllChanges);
            m && Nt(wn(function() {
              d(m.takeRecords()), m.disconnect();
            })), m && Je(function() {
              g = pe("FID"), b = he(s, g, zr, u.reportAllChanges), Dt = [], lt = -1, Pe = null, Br(addEventListener), Dt.push(p), Wr();
            });
          }), o = $e, a = {}, Ar(wn(function() {
            function p(y) {
              y.forEach(function(w) {
                var v, L;
                w.hadRecentInput || (v = m[0], L = m[m.length - 1], g && w.startTime - L.startTime < 1e3 && w.startTime - v.startTime < 5e3 ? (g += w.value, m.push(w)) : (g = w.value, m = [w]));
              }), g > h.value && (h.value = g, h.entries = m, d());
            }
            var d, h = pe("CLS", 0), g = 0, m = [], b = Ve("layout-shift", p);
            b && (d = he(o, h, jr, a.reportAllChanges), Nt(function() {
              p(b.takeRecords()), d(!0);
            }), Je(function() {
              h = pe("CLS", g = 0), d = he(o, h, jr, a.reportAllChanges), yn(function() {
                return d();
              });
            }), setTimeout(d, 0));
          })), r = $e, i = {}, _t(function() {
            var p;
            "interactionCount" in performance || (Sn = Sn || Ve("event", to, { type: "event", buffered: !0, durationThreshold: 0 }));
            function d(b) {
              b.forEach(function(y) {
                y.interactionId && Mr(y), y.entryType !== "first-input" || me.some(function(w) {
                  return w.entries.some(function(v) {
                    return y.duration === v.duration && y.startTime === v.startTime;
                  });
                }) || Mr(y);
              }), b = Math.min(me.length - 1, Math.floor(Ir() / 50)), (b = me[b]) && b.latency !== h.value && (h.value = b.latency, h.entries = b.entries, m());
            }
            var h = pe("INP"), g = Ve("event", d, { durationThreshold: (p = i.durationThreshold) != null ? p : 40 }), m = he(r, h, $r, i.reportAllChanges);
            g && ("PerformanceEventTiming" in window && "interactionId" in PerformanceEventTiming.prototype && g.observe({ type: "first-input", buffered: !0 }), Nt(function() {
              d(g.takeRecords()), h.value < 0 && 0 < Ir() && (h.value = 0, h.entries = []), m(!0);
            }), Je(function() {
              me = [], Jr = Vr(), h = pe("INP"), m = he(r, h, $r, i.reportAllChanges);
            }));
          }), n = function(p) {
            $e({ name: "TTI", value: p });
          }, it() && new io(n).start(), En(function() {
            f.tryReport(e, null, "onHidden");
          }, { once: !0, delay: { visibilitychange: 10 } }), Le.from = (t = e) == null ? void 0 : t.getCurrentPageUrl();
        } catch {
        }
      }, tryReport: function(e, t, n) {
        var r = this;
        n === void 0 && (n = "manual"), this.$walk(function(i) {
          i === e && (typeof (i = r.$getConfig(e)) == "object" && i.manualReport === !0 || n !== "onHidden" ? (i = Pn.get(e)) && !i.hasFirstEntry ? (i.hasFirstEntry = !0, n === "manual" && t && (i.custom = t)) : r.doReport(e, i?.custom || t) : r.doReport(e, null));
        });
      }, doReport: function(e, t) {
        var n = Pn.get(e);
        if (n) {
          if (n != null && n.isWebVitalsReported) return;
          n.isWebVitalsReported = !0;
        }
        this.$walk(function(r) {
          var i, o;
          r === e && (o = T({}, Le), t && Object.keys(t).forEach(function(a) {
            t[a] != null && (o[a] = t[a]);
          }), (i = r.sendPipeline) != null) && i.call(r, [function(a, s) {
            var u, l = [];
            for (u in a) u !== "from" && l.push(u + "=" + a[u]);
            var c = ((c = (c = r.config) == null ? void 0 : c.performanceUrl) == null ? void 0 : c.indexOf("?")) === -1 ? "?" : "&";
            s({ url: r.config.webVitalsUrl + c + l.join("&"), type: A.VITALS, log: a, sendBeacon: !0 });
          }], A.VITALS)(o);
        });
      }, publish: function(e, t) {
        this.tryReport(e, t, "manual");
      }, destroy: function() {
        this.option.publish = function() {
        };
      } }), Kr = (new _({ name: "pagePerformance" }), 3), ct = /* @__PURE__ */ new Map(), ao = new _({ name: "pagePerformance", performanceMap: {}, onNewAegis: function(e) {
        var t;
        it() && (ct.set(e, { isPagePerformanceReported: !1 }), _e ? this.publish(_e, e) : this.startCalcPerformance(e), t = this.publishWhenObHidden.bind(this, e), En(t, { once: !0 }), e.lifeCycle.on("destroy", function() {
          var n = ct.get(e);
          n && (n.isPagePerformanceReported = !1);
        }));
      }, publishWhenObHidden: function(e) {
        var t, n = ct.get(e);
        if (n == null || !n.isPagePerformanceReported) {
          if (n = 0, (t = e.firstScreenInfo) != null && t.timing) n = e.firstScreenInfo.timing;
          else if (dr("paint")) try {
            var r, i = performance.getEntriesByName("first-contentful-paint");
            i && 0 < i.length && (r = i[0]) && 0 < r.startTime && (n = r.startTime);
          } catch {
          }
          (_e = this.buildPerformanceLog(e, n, this.getPageUrl(e), window.location.href)) && this.publish(_e, e, !0);
        }
      }, buildPerformanceLog: function(e, t, n, r) {
        var i = performance.timing;
        if (i) return n = { from: n, originFrom: r, dnsLookup: ge(i.domainLookupEnd - i.domainLookupStart), tcp: ge(i.connectEnd - i.connectStart), ssl: ge(i.secureConnectionStart === 0 ? 0 : i.requestStart - i.secureConnectionStart), ttfb: ge(i.responseStart - i.requestStart), contentDownload: ge(i.responseEnd - i.responseStart), domParse: ge(i.domInteractive - i.domLoading, 0, 15e3, 1070), resourceDownload: ge(i.loadEventStart - i.domInteractive, 0, 15e3, 1070), firstScreenTiming: ge(Math.floor(t), 0, 15e3, 15e3) }, (r = e.config).extraPerformanceData && JSON.stringify(r.extraPerformanceData) !== "{}" && (t = (i = r.extraPerformanceData).engineInit, e = i.bundleLoad, n = T(T({}, n), { engineInit: ge(t, 0, 1e4), bundleLoad: ge(e, 0, 1e4) })), n;
      }, publish: function(e, t, n) {
        var r = this;
        n === void 0 && (n = !1), this.$walk(function(i) {
          var o, a;
          i === t && ((o = ct.get(i)) && (o.isPagePerformanceReported = !0), a = e.originFrom || window.location.href, e.originFrom && delete e.originFrom, i.sendPipeline([function(s, u) {
            var l, c, f = [];
            for (l in s) l !== "from" && f.push(l + "=" + s[l]);
            if (r.$getConfig(i)) return c = ((c = i.config.performanceUrl) == null ? void 0 : c.indexOf("?")) === -1 ? "?" : "&", u({ url: i.config.performanceUrl + c + f.join("&"), type: A.PERFORMANCE, log: s, sendBeacon: n });
          }], A.PERFORMANCE)(T({}, e)), setTimeout(function() {
            var c = ["duration: " + (e.dnsLookup + e.tcp + e.ssl + e.ttfb + e.contentDownload + e.domParse + e.resourceDownload) + "ms", "firstScreenTiming: " + e.firstScreenTiming + "ms", "dnsLookup: " + e.dnsLookup + "ms", "tcp: " + e.tcp + "ms", "ssl: " + e.ssl + "ms", "ttfb: " + e.ttfb + "ms", "contentDownload: " + e.contentDownload + "ms", "domParse: " + e.domParse + "ms", "resourceDownload: " + e.resourceDownload + "ms", "lcp: " + Le.LCP + "ms", "fid: " + Le.FID + "ms", "cls: " + Le.CLS + "ms", "fcp: " + Le.FCP + "ms", e.engineInit ? "engineInit: " + e.engineInit + "ms" : "", e.bundleLoad ? "bundleLoad: " + e.bundleLoad + "ms" : ""].filter(function(f) {
              return f;
            }).join(`

`), u = r.$getConfig(i), s = !1;
            if (typeof u?.isSlowPage == "function") try {
              s = u?.isSlowPage(e, Le);
            } catch (f) {
              return void console.warn("[Aegis] isSlowPage function happen error:", f, ", this data will not be reported.");
            }
            else u != null && u.slowPageThreshold && typeof u.slowPageThreshold == "number" ? e.firstScreenTiming > u?.slowPageThreshold && (s = !0) : s = 1e3 < e.firstScreenTiming;
            var u = t.config.pageLoadLog, l = t.config.slowPageLoadLog && s, c = { msg: c, ext1: ((c = e.firstScreenTiming) == null ? void 0 : c.toString()) || "", level: s ? S.SLOW_PAGE_LOAD : S.PAGE_LOAD, errorMsg: "", originFrom: a };
            (u || l) && i.normalLogPipeline(c);
          }, 3e3));
        });
      }, getPageUrl: function(e) {
        var t = this.$getConfig(e);
        return t != null && t.urlHandler && typeof t?.urlHandler == "function" && (t = t?.urlHandler(), t) ? encodeURIComponent(t) : e.getCurrentPageUrl();
      }, startCalcPerformance: function(e) {
        var t = this;
        try {
          var n = this.getPageUrl(e), r = e.getOriginFrom();
          this.getFirstScreenTiming(e, function(i) {
            _e = t.buildPerformanceLog(e, i, n, r), i = ct.get(e), !_e || i != null && i.isPagePerformanceReported || t.publish(_e, e);
          });
        } catch {
        }
      }, getFirstScreenTiming: function(e, t) {
        var n = this;
        e.lifeCycle.on("destroy", function() {
          c && clearTimeout(c);
        });
        var r, i = this, o = ["script", "style", "link", "br"], a = [], s = {}, u = (dr("paint") && (r = new PerformanceObserver(function(f) {
          f.getEntries().forEach(function(p) {
            var d;
            p.entryType === "paint" && p.name === "first-contentful-paint" && 0 < (d = document.querySelectorAll("[AEGIS-FIRST-SCREEN-TIMING]")).length && e.config.id && !n.performanceMap[e.config.id] && (n.setFirstScreenInfo(e, p.startTime, d[0], d), t?.(p.startTime), u.disconnect(), r.disconnect(), c) && clearTimeout(c);
          });
        })).observe({ entryTypes: ["paint"] }), new MutationObserver(function(f) {
          var p = { roots: [], ignores: [], rootsDomNum: [], time: performance.now() };
          f.forEach(function(d) {
            d && d.addedNodes && Array.prototype.slice.call(d.addedNodes).forEach(function(h) {
              i.isEleInArray(h, p.ignores) ? p.ignores.push(h) : h.nodeType === 1 && h.hasAttribute("AEGIS-FIRST-SCREEN-TIMING") ? (Object.prototype.hasOwnProperty.apply(s, [p.time]) || (s[p.time] = []), s[p.time].push(h)) : h.nodeType === 1 && (i.hasAncestorOrSelfWithAttribute(h, "AEGIS-IGNORE-FIRST-SCREEN-TIMING") ? p.ignores.push(h) : o.indexOf(h.nodeName.toLocaleLowerCase()) !== -1 || i.isEleInArray(h, p.roots) || (p.roots.push(h), p.rootsDomNum.push(i.walkAndCount(h) || 0)));
            });
          }), p.roots.length && a.push(p);
        })), l = (u.observe(document, { childList: !0, subtree: !0 }), function(f) {
          (f = f === void 0 ? 0 : f) || (p = 0, h = Object.keys(s), d = null, h.length ? (f = Math.max.apply(null, h), d = (h = s[f]) == null ? void 0 : h[0]) : a.forEach(function(w) {
            for (var v = 0; v < w.roots.length; v++) w.rootsDomNum[v] > p && i.isInFirstScreen(w.roots[v]) && (p = w.rootsDomNum[v], f = w.time, d = w.roots[v]);
          }), d && n.setFirstScreenInfo(e, f, d, s), a.length = 0, Object.keys(s).forEach(function(w) {
            s[w] = s[w].map(function(v) {
              var L = { tagName: v.tagName }, N = v.attributes;
              if (!N) return v;
              for (var k = 0; k < N.length; k++) {
                var I = N[k];
                I.name && (L[I.name] = v.getAttribute(I.name));
              }
              return L;
            });
          }));
          var p, d, h = performance.timing, g = h.domInteractive - h.domLoading, m = f;
          c = null;
          for (var b = 0, y = [g, h.loadEventStart - h.domInteractive, m]; b < y.length; b++) if (y[b] <= 0 && 0 < Kr) {
            c = setTimeout(function() {
              return l(m);
            }, 3e3);
            break;
          }
          c ? --Kr : (u.disconnect(), r?.disconnect(), t?.(f));
        }), c = setTimeout(function() {
          return l();
        }, 3e3);
      }, setFirstScreenInfo: function(e, t, n, r) {
        var i;
        e.config.id && this.performanceMap[e.config.id] || (e.config.id && (this.performanceMap[e.config.id] = !0), (typeof ((i = e.config) == null ? void 0 : i.pagePerformance) != "object" || (i = e.config.pagePerformance) != null && i.firstScreenInfo) && (e.firstScreenInfo = { element: n, timing: t, markDoms: r }));
      }, isEleInArray: function(e, t) {
        return !(!e || e === document.documentElement) && (t.indexOf(e) !== -1 || this.isEleInArray(e.parentElement, t));
      }, isInFirstScreen: function(e) {
        var t;
        return !(!e || typeof e.getBoundingClientRect != "function") && (e = e.getBoundingClientRect(), t = window.innerHeight, 0 <= e.left) && e.left < window.innerWidth && 0 <= e.top && e.top < t && 0 < e.width && 0 < e.height;
      }, walkAndCount: function(e) {
        var t = 0;
        if (e && e.nodeType === 1) {
          t += 1;
          var n = e.children;
          if (n != null && n.length) for (var r = 0; r < n.length; r++) n[r].nodeType === 1 && n[r].hasAttribute("AEGIS-IGNORE-FIRST-SCREEN-TIMING") || (t += this.walkAndCount(n[r]));
        }
        return t;
      }, hasAncestorOrSelfWithAttribute: function(e, t) {
        for (var n = e; n && n !== document.body; ) {
          if (n.hasAttribute(t)) return !0;
          n = n.parentElement;
        }
        return !1;
      } }), so = (new _({ name: "spa" }), ["replaceState", "pushState", "popstate", "hashchange"]), lo = new _({ name: "spa", originFireUrl: "", onNewAegis: function(e) {
        var t = this;
        history.pushState = this.wr("pushState") || history.pushState, history.replaceState = this.wr("replaceState") || history.replaceState, this.sendPv = this.sendPv.bind(this), e.config.spa && this.sendPv(e), so.forEach(function(n) {
          return window.addEventListener(n, function() {
            return t.sendPv.call(t, e);
          });
        });
      }, wr: function(e) {
        var t = history[e], n = "__" + e + "__hasWrittenByTamSpa";
        return typeof t == "function" && !history[n] && (Object.defineProperty(history, n, { value: !0, enumerable: !1 }), function() {
          var r = t.apply(this, arguments), i = null;
          return typeof Event == "function" ? i = new Event(e) : (i = document.createEvent("HTMLEvents")).initEvent(e, !1, !0), window.dispatchEvent(i), r;
        });
      }, sendPv: function(e) {
        var t = this;
        setTimeout(function() {
          var n = location.pathname + location.hash + e.config.id;
          t.$walk(function(r) {
            var i;
            r === e && (i = r.config.pvUrl) && n && n !== t.originFireUrl && (r.sendPipeline([function(o, a) {
              var s = i != null && i.includes("?") ? "&" : "?";
              a({ url: i + s + "originFrom=" + encodeURIComponent(e.getOriginFrom()), type: A.PV });
            }], A.PV)(null), t.originFireUrl = n);
          });
        }, 0);
      }, destroy: function() {
        this.option.sendPv = function() {
        };
      } });
      function Fe(e) {
        this.slienceTimeInterval = 5e3, this.checkInterval = 100, this.fcp = 0, this.longTaskEntries = [], this.resourceEntries = [], this.slientWindowStartTime = performance.now(), this.onTTICallback = e;
      }
      function Qr(e) {
        return K(this, void 0, void 0, function() {
          var t, n, r, i, o, a, s;
          return ae(this, function(u) {
            switch (u.label) {
              case 0:
                t = new Blob([e]).stream().pipeThrough(new CompressionStream("gzip")), t = t.getReader(), n = [], u.label = 1;
              case 1:
                return [4, t.read()];
              case 2:
                if (r = u.sent(), i = r.done, r = r.value, i) return [3, 4];
                n.push(r), u.label = 3;
              case 3:
                return [3, 1];
              case 4:
                if (n.length === 1) return [2, n[0]];
                for (i = n.reduce(function(l, c) {
                  return l + c.length;
                }, 0), o = new Uint8Array(i), s = a = 0; s < n.length; s += 1) o.set(n[s], a), a += n[s].length;
                return [2, o];
            }
          });
        });
      }
      var Se = null, Ln = !1, uo = 0, Re = /* @__PURE__ */ new Map(), Cn = "__MONITOR_SESSION_V1__";
      function kn(e) {
        try {
          sessionStorage.setItem("__MONITOR_SESSION_V1__", JSON.stringify(e));
        } catch {
        }
      }
      function co(e, t) {
        var n;
        return typeof window > "u" ? { sessionId: t(), createdAt: Date.now(), lastActivity: Date.now(), source: e, version: 1 } : (n = window[Cn]) != null && n.sessionId ? (n.lastActivity = Date.now(), kn(n), n) : (n = (() => {
          try {
            var r, i, o = sessionStorage.getItem("__MONITOR_SESSION_V1__");
            return o ? typeof (r = JSON.parse(o)).sessionId != "string" || typeof r.createdAt != "number" || typeof r.lastActivity != "number" || 36e5 < (i = Date.now()) - r.createdAt || 9e5 < i - r.lastActivity ? null : (r.lastActivity = i, r) : null;
          } catch {
            return null;
          }
        })()) ? (kn(window[Cn] = n), n) : (n = { sessionId: t(), createdAt: Date.now(), lastActivity: Date.now(), source: e, version: 1 }, kn(window[Cn] = n), n);
      }
      ye(An = H, E = Yr = E), An.prototype = E === null ? Object.create(E) : (Zr.prototype = E.prototype, new Zr()), H.resolveGzipConfig = function(e) {
        var t, n = { enable: !0, threshold: 1024, debug: !1, useWorker: !0, workerThreshold: 4096 };
        return e === !1 ? T(T({}, n), { enable: !1 }) : e === !0 || e == null ? n : { enable: e.enable !== !1, threshold: (t = e.threshold) != null ? t : n.threshold, debug: (t = e.debug) != null ? t : n.debug, useWorker: (t = e.useWorker) != null ? t : n.useWorker, workerThreshold: (t = e.workerThreshold) != null ? t : n.workerThreshold };
      }, H.prototype.addExtBean = function(e, t) {
        t && this.extendBean(e, encodeURIComponent(typeof t == "string" && ["ext1", "ext2", "ext3"].includes(e) ? t.slice(0, 1024) : t));
      }, H.prototype.getBean = function(e) {
        var t = this;
        return e === void 0 && (e = []), "" + Object.getOwnPropertyNames(this.bean).filter(function(n) {
          return e.indexOf(n) === -1;
        }).map(function(n) {
          return n === "from" ? "from=" + t.getCurrentPageUrl() : n + "=" + t.bean[n];
        }).join("&");
      }, H.prototype.getCurrentPageUrl = function() {
        var e = this.config.pageUrl || location.href, e = (e = typeof this.config.urlHandler == "function" ? this.config.urlHandler() || location.href : e).slice(0, 2048);
        return encodeURIComponent(e);
      }, H.prototype.getOriginFrom = function() {
        try {
          return (typeof window < "u" && window.location ? window.location.href : "").slice(0, 2048);
        } catch {
          return "";
        }
      }, H.prototype.reportPageView = function(e) {
        var t, n, r = this.config.pvUrl;
        r && (t = this.getOriginFrom(), n = typeof e == "string" && e ? e.slice(0, 2048) : "", this.sendPipeline([function(i, o) {
          var a = t ? tn(r, { originFrom: t }) : r;
          o({ url: n ? tn(a, { from: n }) : a, type: A.PV, beanFilter: n ? ["from"] : void 0 });
        }], A.PV)(null));
      }, H.prototype.ready = function() {
        function e() {
          var n, r, i, o;
          t.reportRequestQueue.length && (n = t.reportRequestQueue.splice(0, 1)[0], r = n.options, i = n.success, o = n.fail, t.$request(r, function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            try {
              return i?.apply(r, a);
            } finally {
              e();
            }
          }, function() {
            for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
            try {
              return o?.apply(r, a);
            } finally {
              e();
            }
          }));
        }
        var t = this;
        e(), this.isReportReady = !0;
      }, H.prototype.request = function(e, t, n) {
        var r, i, o = this;
        this.config.reportImmediately || this.isReportReady ? this.$request(e, r = function(a) {
          var s, u = Ft("aegis-web-retry-report-requests");
          u != null && u.length && e.extraRetryOptions && (0 <= (s = u.findIndex(function(l) {
            return l.extraRetryOptions.requestId === e.extraRetryOptions.requestId;
          })) && (u.splice(s, 1), Ut("aegis-web-retry-report-requests", JSON.stringify(u))), delete window[e.extraRetryOptions.success], delete window[e.extraRetryOptions.fail]), t?.(a);
        }, i = function(a) {
          if (!o.config.reportRetry || e.type === A.WHITE_LIST || e.type === A.SDK_ERROR) return n?.(a);
          var s = typeof o.config.reportRetry == "boolean" ? Ge : T(T({}, Ge), o.config.reportRetry), l = s.maxRetryCount, u = l === void 0 ? Ge.maxRetryCount : l, l = s.retryInterval, l = l === void 0 ? Ge.retryInterval : l, f = s.whenRetryEndStillFail, c = f === void 0 ? Ge.whenRetryEndStillFail : f, f = s.maxStorageCount, p = Math.min(100, Math.max(20, f === void 0 ? Ge.maxStorageCount : f)), d = (e.extraRetryOptions || (e.extraRetryOptions = { requestId: "", retriedCount: 0, success: "", fail: "" }), e.extraRetryOptions), h = (d.requestId = d.requestId || e.url + "-" + Date.now() + "-" + Math.random(), d.requestId), g = (d.retriedCount = d.retriedCount || 0, d.success = d.success || h + "_successCallback", d.fail = d.fail || h + "_failCallback", Ft("aegis-web-retry-report-requests"));
          if (g.find(function(m) {
            return m.extraRetryOptions.requestId === h;
          }))
            s = g.findIndex(function(m) {
              return m.extraRetryOptions.requestId === h;
            }), g[s] = e;
          else for (g.push(e); g.length > p; ) g.shift();
          Ut("aegis-web-retry-report-requests", JSON.stringify(g)), setTimeout(function() {
            var m, b;
            d.retriedCount < u ? (e.extraRetryOptions.retriedCount += 1, o.$request(e, r, i)) : ((b = (m = Ft("aegis-web-retry-report-requests")).findIndex(function(y) {
              return ((y = y.extraRetryOptions) == null ? void 0 : y.requestId) === h;
            })) !== -1 && c === "discard" && (m.splice(b, 1), Ut("aegis-web-retry-report-requests", JSON.stringify(m))), n?.(a), delete window[d.success], delete window[d.fail]);
          }, typeof l == "function" ? l(e.extraRetryOptions.retriedCount) : l), window[d.success] || (window[d.success] = r), window[d.fail] || (window[d.fail] = i);
        }) : this.reportRequestQueue.push({ options: e, success: t, fail: n });
      }, H.prototype.$request = function(e, t, n) {
        var r, i;
        if (e && typeof e.url == "string" && e.url !== "" && this.bean.id) return r = e.url, e.addBean !== !1 && (r = ((o, a) => {
          var s, u, l, c = o, f = e.beanFilter || [];
          for (s in a) f.indexOf(s) === -1 && ((l = (u = new RegExp("([?&])" + s + "(=([^&]*))?(?=&|$)")).exec(c)) ? l[2] && l[3] !== "" && l[3] !== "undefined" || (c = c.replace(u, "$1" + s + "=" + a[s])) : (l = -1 < c.indexOf("?") ? "&" : "?", c += l + s + "=" + a[s]));
          return c;
        })(r, T(T({}, this.bean), { from: this.getCurrentPageUrl() }))), e.url = r, r = e.method || "get", i = this.config.onBeforeRequest, (e = i ? i(e, this) : e) ? e.url ? void ((e != null && e.sendBeacon || this.sendNow) && typeof navigator?.sendBeacon == "function" ? navigator.sendBeacon(e.url, e.data) : (typeof e.data == "string" && (e.data = e.data.replace(/eval/gi, "evaI")), (i = this.isGzipReportEnabled(this.resolvedGzipConfig.enable)) && H.compressionSupported && r.toLowerCase() !== "get" && typeof e.data == "string" && e.data.length >= this.resolvedGzipConfig.threshold ? this.sendWithGzip(e, r, i, t, n) : this.sendXhr(e, r, e.data, cn(i, !1), t, n))) : console.warn("Please handle the parameters reasonably, options.url is necessary") : console.warn("Sending request blocked");
      }, H.prototype.sendWithGzip = function(e, t, n, r, i) {
        return K(this, void 0, void 0, function() {
          var o, a, s, u;
          return ae(this, function(l) {
            switch (l.label) {
              case 0:
                if (l.trys.push([0, 9, , 10]), o = new TextEncoder(), o = o.encode(e.data), s = this.resolvedGzipConfig, a = s.useWorker, s = s.workerThreshold, u = void 0, !(a && o.byteLength >= s)) return [3, 6];
                l.label = 1;
              case 1:
                return l.trys.push([1, 3, , 5]), [4, (p = o, new Promise(function(d, h) {
                  var g, m, b, y = (() => {
                    if (Ln) return null;
                    if (Se) return Se;
                    try {
                      var w = new Blob([`
self.onmessage=async function(e){
  try{
    var d=e.data,id=d.id,raw=d.data;
    var s=new Blob([raw]).stream().pipeThrough(new CompressionStream("gzip"));
    var r=s.getReader(),chunks=[];
    for(;;){var res=r.read();var p=await res;if(p.done)break;chunks.push(p.value);}
    var len=0;for(var i=0;i<chunks.length;i++)len+=chunks[i].length;
    var out=new Uint8Array(len),off=0;
    for(var i=0;i<chunks.length;i++){out.set(chunks[i],off);off+=chunks[i].length;}
    self.postMessage({id:id,compressed:out},[out.buffer]);
  }catch(err){
    self.postMessage({id:id,error:err.message||"compress error"});
  }
};`], { type: "application/javascript" }), v = URL.createObjectURL(w);
                      return Se = new Worker(v), URL.revokeObjectURL(v), Se.onmessage = function(I) {
                        var I = I.data, N = I.id, k = I.compressed, I = I.error, F = Re.get(N);
                        F && (Re.delete(N), I ? F.reject(new Error(I)) : F.resolve(k));
                      }, Se.onerror = function() {
                        Ln = !0, Re.forEach(function(L) {
                          return L.reject(new Error("gzip worker error"));
                        }), Re.clear(), Se && (Se.terminate(), Se = null), Re.forEach(function(L) {
                          return L.reject(new Error("worker terminated"));
                        }), Re.clear();
                      }, Se;
                    } catch {
                      return Ln = !0, null;
                    }
                  })();
                  y ? (g = uo += 1, m = setTimeout(function() {
                    var w = Re.get(g);
                    w && (Re.delete(g), w.reject(new Error("gzip worker timeout")));
                  }, 5e3), Re.set(g, { resolve: function(w) {
                    clearTimeout(m), d(w);
                  }, reject: function(w) {
                    clearTimeout(m), h(w);
                  } }), b = p.buffer.slice(p.byteOffset, p.byteOffset + p.byteLength), y.postMessage({ id: g, data: new Uint8Array(b) }, [b])) : h(new Error("worker unavailable"));
                }))];
              case 2:
                return u = l.sent(), [3, 5];
              case 3:
                return l.sent(), [4, Qr(o)];
              case 4:
                return u = l.sent(), [3, 5];
              case 5:
                return [3, 8];
              case 6:
                return [4, Qr(o)];
              case 7:
                u = l.sent(), l.label = 8;
              case 8:
                return this.resolvedGzipConfig.debug && console.info("[Aegis gzip] before=" + (c = o.byteLength) + "B after=" + (f = u.byteLength) + "B saved=" + (c - f) + "B ratio=" + (0 < c ? (f / c * 100).toFixed(1) : "0.0") + "%"), this.sendXhr(e, t, u, cn(n, !0), r, i), [3, 10];
              case 9:
                return l.sent(), this.sendXhr(e, t, e.data, cn(n, !1), r, i), [3, 10];
              case 10:
                return [2];
            }
            var c, f, p;
          });
        });
      }, H.prototype.sendXhr = function(e, t, n, r, i, o) {
        var a = new XMLHttpRequest();
        a.sendByAegis = !0, a.addEventListener("readystatechange", function() {
          a.readyState === 4 && (400 <= a.status || a.status === 0 ? o?.(a.response) : i?.(a.response));
        }), t.toLocaleLowerCase() === "get" ? (a.open("get", tn(e.url, e.data)), a.send()) : (a.open("post", e.url), e.contentType && a.setRequestHeader("Content-Type", e.contentType), r && a.setRequestHeader("Content-Encoding", r), a.send(n));
      }, H.prototype.publishPluginsLogs = function() {
        var e = H.installedPlugins.find(function(t) {
          return t.name === "reportAssetSpeed";
        });
        e?.option.collectNotReportedLog(this);
      }, H.prototype.uploadLogs = function(e, t) {
        var n;
        e === void 0 && (e = {}), t === void 0 && (t = {}), (n = this.lifeCycle) != null && n.emit("uploadLogs", e, t);
      }, H.prototype.reportWebVitals = function(e) {
        try {
          var t = H.installedPlugins.find(function(n) {
            return n.name === "webVitals";
          });
          t && this.config.webVitals && this.config.webVitals.manualReport && t.option.publish(this, e);
        } catch {
        }
      }, H.sessionID = co("aegis", an).sessionId, H.compressionSupported = null;
      var Yr, An, E = H;
      function H(e) {
        var t, n, r, i, o, a, s = Yr.call(this, e) || this;
        s.sendNow = !1, s.isReportReady = !1, s.reportRequestQueue = [], s.speedLogPipeline = Be([St(s), (i = s.config, function(f, p) {
          var d, h, g, m = typeof i.repeat == "number" ? i.repeat : 60;
          !i.speedSample || m <= 0 ? p(f) : (d = i?.id || "0", h = We[d] || {}, Array.isArray(f) ? (g = f.filter(function(b) {
            var y = !h[b.url] || h[b.url] < m;
            return y ? (h[b.url] = 1 + ~~h[b.url], We[d] = h) : Ne[d] || on(d), y;
          })).length && p(g) : !h[f.url] || h[f.url] < m ? (h[f.url] = 1 + ~~h[f.url], We[d] = h, p(f)) : Ne[d] || on(d));
        }), (r = s, function(f, p) {
          Or(function(d) {
            r.extendBean("netType", d), p(f);
          });
        }), function(f, p) {
          (d = s.lifeCycle) != null && d.emit("beforeReportSpeed", f);
          var d, h = s.config.beforeReportSpeed;
          if ((f = typeof h == "function" ? f.filter(function(g) {
            return h(g) !== !1;
          }) : f).length) return p(f);
        }, function(f, p) {
          p(f.map(function(d) {
            return d.payload !== void 0 && delete d.payload, d;
          }));
        }, function(f) {
          return s.sendPipeline([function(p, d) {
            d({ type: A.SPEED, url: "" + s.config.speedUrl, method: "post", contentType: "application/json", data: Qn(p, T(T({}, s.bean), { from: s.getCurrentPageUrl() })), log: p });
          }], A.SPEED)(f);
        }]), e.asyncPlugin = !0;
        try {
          typeof document < "u" && (e.uin = e.uin || ((t = document.cookie.match(/\buin=\D+(\d*)/)) != null ? t : [])[1] || ((n = document.cookie.match(/\bilive_uin=\D*(\d+)/)) != null ? n : [])[1] || ""), s.init(e), s.resolvedGzipConfig = H.resolveGzipConfig(s.config.gzip), H.compressionSupported === null && (H.compressionSupported = (() => {
            try {
              return typeof CompressionStream == "function";
            } catch {
              return !1;
            }
          })()), s.extendBean("sessionId", H.sessionID), s.extendBean("from", s.getCurrentPageUrl()), typeof document < "u" && s.extendBean("referer", encodeURIComponent(document.referrer || "")), o = function(f, p) {
            p !== "aegis" && f && f !== H.sessionID && (H.sessionID = f, s.extendBean("sessionId", f));
          };
          var u = typeof window > "u" ? function() {
          } : (window.addEventListener("monitor-session-update", a = function(f) {
            o(f.detail.sessionId, f.detail.source);
          }), function() {
            return window.removeEventListener("monitor-session-update", a);
          }), l = (s.lifeCycle.on("destroy", u), function() {
            function f() {
              var d;
              p.length && (d = p.splice(0, 1)[0], Ut("aegis-web-retry-report-requests", JSON.stringify(p)), s.$request(d, function() {
                for (var h, g = [], m = 0; m < arguments.length; m++) g[m] = arguments[m];
                try {
                  return (h = window[d.extraRetryOptions.success]) == null ? void 0 : h.apply(d, g);
                } finally {
                  f();
                }
              }, function() {
                for (var h, g = [], m = 0; m < arguments.length; m++) g[m] = arguments[m];
                try {
                  return (h = window[d.extraRetryOptions.fail]) == null ? void 0 : h.apply(d, g);
                } finally {
                  f();
                }
              }));
            }
            var p = Ft("aegis-web-retry-report-requests");
            f();
          });
          "requestIdleCallback" in window ? window.requestIdleCallback(function() {
            return K(s, void 0, void 0, function() {
              return ae(this, function(f) {
                return l(), [2];
              });
            });
          }) : setTimeout(l, 5e3);
          for (var c = 1; c <= 10; c++) s.addExtBean("ext" + c, e["ext" + c]);
        } catch (f) {
          console.warn(f), console.log(`%cThe above error occurred in the process of initializing Aegis, which will affect your normal use of Aegis.
It is recommended that you contact us for feedback and thank you for your support.`, "color: red"), s.sendSDKError(f);
        }
        return s;
      }
      function Zr() {
        this.constructor = An;
      }
      new _({ name: "ie" }), new _({ name: "onClose" });
      var fo = new _({ name: "onClose", onNewAegis: function(e) {
        var t, n = this;
        P.desktop() ? (t = window.onunload, window.onunload = function() {
          for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
          n.publishNotReportedLog(e), t?.call.apply(t, Q([window], r));
        }) : En(this.publishNotReportedLog.bind(this, e), { once: !0 });
      }, publishNotReportedLog: function(e) {
        var t = this;
        this.$walk(function(n) {
          n === e && (n.sendNow = !0, n.publishPluginsLogs(), t.publishThrottlePipeLogs(n));
        });
      }, publishThrottlePipeLogs: function(e) {
        e?.speedLogPipeline([]), e?.eventPipeline([]), e?.customTimePipeline([]), e?.normalLogPipeline([]);
      } });
      new _({ name: "aid" });
      var Ke, Qe = { containers: ["body", "html", "#app", "#root"], ignoreContainers: [], containerMatchers: { tagName: ["body", "html"], id: ["app", "root"], className: [] }, ignoreMatchers: { tagName: [], id: [], className: [] }, detectStartPosition: { x: 0, y: 0 }, emptyElementsPercent: 70, sameElementsPercent: 70, debounceDuration: 2e3, everySideSampleNumber: 9, disableSameElementsCheck: !0, ignoreElesWhenDomChange: [], reDetectInterval: 2e3, samePointDepth: 5, customBlankScreenDector: null, enableScreenshot: !1, needScreenShotMeta: !1, screenshotQuality: 0.1, screenshotFormat: "image/webp", onBlankScreenCapture: null, clientScreenshotTimeout: 1e4 }, po = ["canvas", "img", "svg", "iframe"], ho = ((Ue = Ke = Ke || {})[Ue.UNKNOWN = 0] = "UNKNOWN", Ue[Ue.ERROR = 1] = "ERROR", Ue[Ue.DOM_CHANGE = 2] = "DOM_CHANGE", /* @__PURE__ */ new Set(["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE", "HEAD", "META", "LINK", "BR", "WBR"])), go = ($.prototype.capture = function() {
        return K(this, void 0, void 0, function() {
          var e, t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, m, b, y;
          return ae(this, function(w) {
            switch (w.label) {
              case 0:
                return w.trys.push([0, 7, , 8]), e = performance.now(), this.tasks = [], this.nodeCounter = 0, this.resourcePool.clear(), this.maxDepthReached = 0, this.depthLimitHitCount = 0, l = window.innerWidth, g = window.innerHeight, this.vw = l, this.vh = g, s = window.devicePixelRatio || 1, n = l * this.options.scale, u = g * this.options.scale, r = Math.min(1, this.options.maxWidth / n, this.options.maxHeight / u), t = n * r, n = u * r, u = s * this.options.scale, this.canvas.width = l * u, this.canvas.height = g * u, this.ctx.scale(u, u), r = t / (l * u), this.totalScale = u * r, this.ctx.beginPath(), this.ctx.rect(0, 0, l, g), this.ctx.clip(), this.collectTasks(document.body, 0, [], 0), this.tasks.sort(function(v, L) {
                  return v.zIndex !== L.zIndex ? v.zIndex - L.zIndex : v.domOrder - L.domOrder;
                }), i = [], this.resourcePool.forEach(function(v) {
                  v instanceof Promise && i.push(v);
                }), 0 < i.length ? [4, Promise.all(i)] : [3, 2];
              case 1:
                w.sent(), w.label = 2;
              case 2:
                o = "", a = 0, w.label = 3;
              case 3:
                return a < this.tasks.length ? (s = this.tasks[a], (u = 0 < s.clipRects.length ? s.clipRects.map(function(v) {
                  return v.left + "," + v.top;
                }).join("|") : "") !== o && (o && this.ctx.restore(), u && (this.ctx.save(), this.applyClipRects(s.clipRects)), o = u), [4, s.render()]) : [3, 6];
              case 4:
                w.sent(), w.label = 5;
              case 5:
                return a++, [3, 3];
              case 6:
                if (o && this.ctx.restore(), l = this.canvas, r < 0.99) {
                  if (c = this.canvas, f = this.canvas.width, p = this.canvas.height, 3 * t < f) for (; 2 * t < f && (f = Math.floor(f / 2), p = Math.floor(p / 2), (d = document.createElement("canvas")).width = f, d.height = p, h = d.getContext("2d")); ) h.imageSmoothingEnabled = !0, h.imageSmoothingQuality = "medium", h.drawImage(c, 0, 0, f, p), c = d;
                  (g = document.createElement("canvas")).width = t, g.height = n, (m = g.getContext("2d")) && (m.imageSmoothingEnabled = !0, m.imageSmoothingQuality = "medium", m.drawImage(c, 0, 0, t, n), l = g);
                }
                return m = this.options.format === "jpg" ? "jpeg" : this.options.format, b = l.toDataURL("image/" + m, this.options.quality), this.options.debug && (y = 0 < this.depthLimitHitCount ? " ⚠️ 深度限制触发" + this.depthLimitHitCount + "次" : "", console.log("%c🚀 截图完成 (" + Math.round(performance.now() - e) + "ms) 尺寸:" + l.width + "x" + l.height + " 节点:" + this.nodeCounter + " 任务:" + this.tasks.length + " 最大深度:" + this.maxDepthReached + "/100" + y, "color: #673AB7; font-weight: bold;")), this.cleanup(), [2, b];
              case 7:
                return y = w.sent(), this.cleanup(), this.options.debug && console.error("Screenshot capture failed:", y), [2, ""];
              case 8:
                return [2];
            }
          });
        });
      }, $.prototype.isElementVisible = function(e, t) {
        return 0 < t.length ? (t = t[t.length - 1], !(e.right < t.left || e.left > t.right) && (!(e.bottom < t.top || e.top > t.bottom) || Math.abs(e.width - t.width) < 50)) : !(e.bottom < 0 || e.top > this.vh || e.right < 0 || e.left > this.vw);
      }, $.prototype.applyClipRects = function(e) {
        for (var t = 0, n = e; t < n.length; t++) {
          var r = n[t];
          this.ctx.beginPath(), this.ctx.rect(r.left, r.top, r.width, r.height), this.ctx.clip();
        }
      }, $.prototype.collectTasks = function(e, t, n, r) {
        var i = this;
        if (t === void 0 && (t = 0), n === void 0 && (n = []), (r = r === void 0 ? 0 : r) > this.maxDepthReached && (this.maxDepthReached = r), 100 < r) this.depthLimitHitCount++;
        else {
          this.nodeCounter++;
          var o = this.nodeCounter;
          if (e.nodeType !== 3) {
            if (e instanceof Element) {
              var a = e.tagName;
              if (!ho.has(a)) {
                var s = getComputedStyle(e);
                if (s.display !== "none" && s.visibility !== "hidden" && parseFloat(s.opacity) !== 0) {
                  var u = e.getBoundingClientRect(), m = s.position, l = m === "fixed" || m === "sticky", d = t, f = s.zIndex, c = (f !== "auto" && (f = parseInt(f, 10), isNaN(f) || (d = f)), l && d < 2e4 && (d += 2e4), 2e4 <= t && d < 2e4 && (d += 2e4), d = d < t ? t : d), f = 2e4 <= t, p = m === "fixed" ? [] : n, d = 0 <= u.bottom && u.top <= this.vh && 0 <= u.right && u.left <= this.vw;
                  if (this.options.viewportOnly && (u.width === 0 && u.height === 0 && !l && !f || !(d || l || f || e.parentElement === document.body || this.isElementVisible(u, p))))
                    return;
                  var h, g, m = s.overflow || s.overflowX || s.overflowY, m = m === "hidden" || m === "scroll" || m === "auto" || m === "clip", b = (this.checkAndPreload(s), (d || l || f) && (0 < u.width || 0 < u.height) && (h = parseFloat(s.opacity), this.addTask(c, o, p, function() {
                    return i.drawBox(s, u, l, h);
                  })), ["::before", "::after"].forEach(function(D) {
                    var j = getComputedStyle(e, D);
                    j.content === "none" && j.backgroundImage === "none" && j.webkitMaskImage === "none" || (i.checkAndPreload(j), i.addTask(c, o, p, function() {
                      return i.drawPseudoElement(j, u);
                    }));
                  }), e instanceof HTMLImageElement ? (this.preloadImage(e.src), this.addTask(c, o, p, function() {
                    return i.drawImageFromUrl(e.src, u);
                  })) : e instanceof SVGElement ? (g = this.preloadSVG(e), this.addTask(c, o, p, function() {
                    return i.drawImageFromUrl(g, u);
                  })) : e instanceof HTMLCanvasElement && e !== this.canvas ? this.addTask(c, o, p, function() {
                    return i.drawCanvas(e, u);
                  }) : (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && this.addTask(c, o, p, function() {
                    return i.drawInputText(e, s, u);
                  }), m ? Q(p, [{ left: u.left, top: u.top, right: u.right, bottom: u.bottom, width: u.width, height: u.height }]) : p), y = r + 1;
                  if (e.shadowRoot) for (var w = 0, v = Array.from(e.shadowRoot.childNodes); w < v.length; w++) U = v[w], this.collectTasks(U, c, b, y);
                  else if (a === "SLOT") for (var L = 0, N = e.assignedNodes(); L < N.length; L++) {
                    var k = N[L];
                    this.collectTasks(k, c, b, y);
                  }
                  else for (var I = 0, F = Array.from(e.childNodes); I < F.length; I++) U = F[I], this.collectTasks(U, c, b, y);
                }
              }
            } else if (e.childNodes) for (var q = 0, Y = Array.from(e.childNodes); q < Y.length; q++) {
              var U = Y[q];
              this.collectTasks(U, t, n, r + 1);
            }
          } else (d = e.textContent) != null && d.trim() && this.addTask(t, o, n, function() {
            return i.drawTextNode(e);
          });
        }
      }, $.prototype.addTask = function(e, t, n, r) {
        this.tasks.push({ zIndex: e, domOrder: t, clipRects: n, render: r });
      }, $.prototype.drawBox = function(e, t, n, r) {
        n === void 0 && (n = !1), r === void 0 && (r = 1);
        var i, o = e.backgroundColor, a = e.borderColor, s = e.borderWidth, u = e.borderRadius, l = e.backgroundImage, c = e.boxShadow, f = e.webkitMaskImage || e.maskImage, p = o !== "transparent" && o !== "rgba(0, 0, 0, 0)", d = 0 < parseFloat(s), h = l && l !== "none", g = f && f !== "none", m = c && c !== "none" && !c.includes("inset");
        (p || d || h || g || m || n) && (this.ctx.save(), r < 1 && (this.ctx.globalAlpha *= r), m && (i = c.match(/(-?\d+px)\s+(-?\d+px)\s+(\d+px)\s*(\d+px)?\s*(rgba?\(.*?\)|#\w+|\w+)/) || c.match(/(rgba?\(.*?\)|#\w+|\w+)\s+(-?\d+px)\s+(-?\d+px)\s+(\d+px)\s*(\d+px)?/)) && (r = isNaN(parseFloat(i[1])), this.ctx.shadowOffsetX = parseFloat(r ? i[2] : i[1]), this.ctx.shadowOffsetY = parseFloat(r ? i[3] : i[2]), this.ctx.shadowBlur = parseFloat(r ? i[4] : i[3]), this.ctx.shadowColor = r ? i[1] : i[5] || "transparent"), m = Math.min(parseFloat(u) || 0, Math.min(t.width, t.height) / 2), this.ctx.beginPath(), 0 < m ? this.roundRectPath(t.left, t.top, t.width, t.height, m) : this.ctx.rect(t.left, t.top, t.width, t.height), c = h && l.includes("gradient"), p ? (this.ctx.fillStyle = o, this.ctx.fill()) : (n || c) && (t.bottom > 0.85 * this.vh && t.height < 0.5 * this.vh || c) && (this.ctx.fillStyle = "#ffffff", this.ctx.fill()), g && this.drawMaskImage(f, e, t), h && !c && (i = l.match(/url\(["']?(.*?)["']?\)/)) && (r = this.resourcePool.get(i[1])) && r instanceof HTMLImageElement && this.ctx.drawImage(r, t.left, t.top, t.width, t.height), d && (this.ctx.shadowColor = "transparent", this.ctx.strokeStyle = a, u = parseFloat(s), m = 1 / this.totalScale, this.ctx.lineWidth = Math.max(u, m), this.ctx.stroke()), this.ctx.restore());
      }, $.prototype.drawMaskImage = function(a, t, n) {
        var r, i, o, a = a.match(/url\(["']?(.*?)["']?\)/);
        a && (a = this.resourcePool.get(a[1])) && a instanceof HTMLImageElement && ((r = document.createElement("canvas")).width = n.width, r.height = n.height, i = r.getContext("2d")) && (o = t.backgroundColor !== "transparent" && t.backgroundColor !== "rgba(0, 0, 0, 0)", i.fillStyle = o ? t.backgroundColor : t.color || "#000", i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "destination-in", i.drawImage(a, 0, 0, n.width, n.height), this.ctx.drawImage(r, n.left, n.top));
      }, $.prototype.drawPseudoElement = function(e, t) {
        var n = e.content, r = e.backgroundImage, s = e.opacity, i = e.fontSize, o = e.color, a = e.webkitMaskImage || e.maskImage, s = (this.ctx.save(), this.ctx.globalAlpha *= parseFloat(s), a && a !== "none" ? this.drawMaskImage(a, e, t) : r && r !== "none" && (s = r.match(/url\(["']?(.*?)["']?\)/)) && (a = this.resourcePool.get(s[1])) && a instanceof HTMLImageElement && (r = parseFloat(i) || 16, this.ctx.drawImage(a, t.left + (t.width - r) / 2, t.top + (t.height - r) / 2, r, r)), (n || "").replace(/^["']|["']$/g, ""));
        s && !["none", "normal", "on", "off", "", " "].includes(s.toLowerCase()) && (this.ctx.font = e.fontStyle + " " + e.fontWeight + " " + e.fontSize + " " + e.fontFamily, this.ctx.fillStyle = o, this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(s, t.left + t.width / 2, t.top + t.height / 2)), this.ctx.restore();
      }, $.prototype.drawInputText = function(e, t, n) {
        if (e instanceof HTMLInputElement) {
          var r = (r = e.type) == null ? void 0 : r.toLowerCase();
          if (r === "checkbox" || r === "radio" || r === "file" || r === "submit" || r === "button" || r === "reset" || r === "image" || r === "hidden" || r === "color" || r === "range") return;
        }
        var r = e.value, i = r || e.placeholder;
        i && (this.ctx.save(), this.ctx.globalAlpha *= parseFloat(t.opacity), this.ctx.font = t.fontStyle + " " + t.fontWeight + " " + t.fontSize + " " + t.fontFamily, this.ctx.fillStyle = r ? t.color : "rgba(153, 153, 153, 0.7)", this.ctx.textBaseline = "middle", this.ctx.textAlign = t.textAlign === "center" ? "center" : "left", r = this.ctx.textAlign === "center" ? n.left + n.width / 2 : n.left + 10, t = n.top + (e instanceof HTMLTextAreaElement ? 18 : n.height / 2), this.ctx.fillText(i, r, t), this.ctx.restore());
      }, $.prototype.drawTextNode = function(e) {
        var t = e.parentElement;
        if (t) {
          var n = e.textContent;
          if (n && n.trim() && !(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) try {
            var r = document.createRange(), i = (r.selectNodeContents(e), r.getClientRects());
            if (i.length !== 0) {
              var o = getComputedStyle(t);
              if (this.ctx.save(), this.ctx.globalAlpha *= parseFloat(o.opacity), this.ctx.font = o.fontStyle + " " + o.fontWeight + " " + o.fontSize + " " + o.fontFamily, this.ctx.fillStyle = o.color, this.ctx.textBaseline = "top", this.ctx.textAlign = "left", i.length === 1) this.ctx.fillText(n.trim(), i[0].left, i[0].top);
              else for (var a = n.replace(/\n\s*/g, " "), s = 0, u = 0; u < i.length; u++) {
                var l = i[u];
                if (!(l.width < 1)) {
                  for (var c = s, f = a.length, p = ""; c <= f; ) {
                    var d = c + f >> 1, h = a.substring(s, d);
                    this.ctx.measureText(h).width <= l.width + 2 ? (p = h, c = 1 + d) : f = d - 1;
                  }
                  if (p && (this.ctx.fillText(p, l.left, l.top), s += p.length), s >= a.length) break;
                }
              }
              this.ctx.restore();
            }
          } catch {
          }
        }
      }, $.prototype.drawCanvas = function(e, t) {
        try {
          this.ctx.drawImage(e, t.left, t.top, t.width, t.height);
        } catch {
        }
      }, $.prototype.preloadImage = function(e) {
        var t, n = this;
        return !e || this.resourcePool.has(e) ? (t = this.resourcePool.get(e)) instanceof Promise ? t : Promise.resolve(t || null) : (t = new Promise(function(r) {
          function i(s) {
            a || (a = !0, n.resourcePool.set(e, s), r(s));
          }
          var o = new Image(), a = !1;
          n.options.useCORS && !e.startsWith("data:") && (o.crossOrigin = "anonymous"), o.onload = function() {
            return i(o);
          }, o.onerror = function() {
            return i(null);
          }, o.src = e, setTimeout(function() {
            return i(null);
          }, 2e3);
        }), this.resourcePool.set(e, t), t);
      }, $.prototype.preloadSVG = function(e) {
        try {
          var t = new XMLSerializer().serializeToString(e), n = URL.createObjectURL(new Blob([t], { type: "image/svg+xml;charset=utf-8" }));
          return this.blobUrls.add(n), this.preloadImage(n), n;
        } catch {
          return "";
        }
      }, $.prototype.cleanup = function() {
        this.blobUrls.forEach(function(e) {
          try {
            URL.revokeObjectURL(e);
          } catch {
          }
        }), this.blobUrls.clear(), this.resourcePool.clear(), this.tasks = [];
      }, $.prototype.drawImageFromUrl = function(e, t) {
        e && (e = this.resourcePool.get(e)) && e instanceof HTMLImageElement && this.ctx.drawImage(e, t.left, t.top, t.width, t.height);
      }, $.prototype.checkAndPreload = function(e) {
        var n = e.backgroundImage;
        n && n !== "none" && (t = n.match(/url\(["']?(.*?)["']?\)/)) && this.preloadImage(t[1]);
        var t, n = e.webkitMaskImage || e.maskImage;
        n && n !== "none" && (t = n.match(/url\(["']?(.*?)["']?\)/)) && this.preloadImage(t[1]);
      }, $.prototype.roundRectPath = function(e, t, n, r, i) {
        this.ctx.beginPath(), this.ctx.moveTo(e + i, t), this.ctx.lineTo(e + n - i, t), this.ctx.quadraticCurveTo(e + n, t, e + n, t + i), this.ctx.lineTo(e + n, t + r - i), this.ctx.quadraticCurveTo(e + n, t + r, e + n - i, t + r), this.ctx.lineTo(e + i, t + r), this.ctx.quadraticCurveTo(e, t + r, e, t + r - i), this.ctx.lineTo(e, t + i), this.ctx.quadraticCurveTo(e, t, e + i, t), this.ctx.closePath();
      }, $), ei = { THRESHOLDS: { SMALL: 3e5 }, LEVELS: [{ maxArea: 1e5, scale: 1, defaultQuality: 0.7 }, { maxArea: 3e5, scale: 1, defaultQuality: 0.6 }, { maxArea: 8e5, scale: 0.7, defaultQuality: 0.6 }, { maxArea: 15e5, scale: 0.5, defaultQuality: 0.65 }, { maxArea: 25e5, scale: 0.45, defaultQuality: 0.65 }, { maxArea: 1 / 0, scale: 0.45, defaultQuality: 0.65 }] };
      function $(n) {
        n === void 0 && (n = {}), this.tasks = [], this.nodeCounter = 0, this.resourcePool = /* @__PURE__ */ new Map(), this.blobUrls = /* @__PURE__ */ new Set(), this.vw = 0, this.vh = 0, this.totalScale = 1, this.maxDepthReached = 0, this.depthLimitHitCount = 0, this.options = { useCORS: (t = n.useCORS) == null || t, scale: (t = n.scale) != null ? t : 1, quality: (t = n.quality) != null ? t : 0.8, format: (t = n.format) != null ? t : "webp", viewportOnly: (t = n.viewportOnly) == null || t, maxWidth: (t = n.maxWidth) != null ? t : 1920, maxHeight: (t = n.maxHeight) != null ? t : 1080, debug: (t = n.debug) != null && t }, this.canvas = document.createElement("canvas");
        var t, n = this.canvas.getContext("2d", { alpha: !0 });
        if (!n) throw new Error("Failed to get 2D canvas context");
        this.ctx = n;
      }
      function In(e) {
        return ei.LEVELS.find(function(t) {
          return e <= t.maxArea;
        });
      }
      function ti(e) {
        return { tagName: Q(e.tagName || []), id: Q(e.id || []), className: Q(e.className || []) };
      }
      function ni(e) {
        return Array.isArray(e) ? e.filter(function(t) {
          return typeof t == "string";
        }).map(function(t) {
          return t.trim();
        }).filter(Boolean) : [];
      }
      function qt(e, t, n, r, i) {
        var o, a, s = (e = e.map(function(u) {
          return oi(u);
        })).map(function(u) {
          return u.selector;
        });
        return (e = e[0]) ? (a = o = !1, a = li(r) ? (o = ai(e, r), ai(e, i)) : (o = si(e, t), si(e, n)), { isWhitePoint: o && !a, selectorPointers: s }) : { isWhitePoint: !1, selectorPointers: s };
      }
      function ri(e) {
        try {
          var t, n, r, i, o, a, s = e.config.blankScreen;
          return s === !0 ? T({}, Qe) : (n = "containerMatchers" in (t = s) || "ignoreMatchers" in t, r = "containers" in t || "ignoreContainers" in t, i = Mn(T({}, Qe), t), n ? (li(i.containerMatchers) || (i.containerMatchers = ti(Qe.containerMatchers)), typeof i.ignoreMatchers == "object" && i.ignoreMatchers !== null || (i.ignoreMatchers = ti(Qe.ignoreMatchers)), i.containers = [], i.ignoreContainers = []) : r && (o = ni(i.containers), a = ni(i.ignoreContainers), i.containers = o.length ? o : Q(Qe.containers), i.ignoreContainers = a, i.containerMatchers = { tagName: [], id: [], className: [] }, i.ignoreMatchers = { tagName: [], id: [], className: [] }), i);
        } catch {
          return T({}, Qe);
        }
      }
      function Wt(e, t) {
        function n(i) {
          var o = i[0];
          return o && o.shadowRoot !== null && (o = ((o = o?.shadowRoot) == null ? void 0 : o.elementsFromPoint(e, t)) || []).length > i.length ? n(o || []) : i;
        }
        var r = document.elementsFromPoint(e, t);
        return n(r);
      }
      function ii(e, t, n, r) {
        return t === void 0 && (t = "image/webp"), n === void 0 && (n = 1920), r === void 0 && (r = 1080), K(void 0, void 0, void 0, function() {
          var i, o;
          return ae(this, function(a) {
            switch (a.label) {
              case 0:
                return a.trys.push([0, 2, , 3]), i = Math.min(window.innerWidth, n), o = Math.min(window.innerHeight, r), i = In(i * o), o = i.scale, i = i.defaultQuality, [4, new go(s = (s = { scale: o, quality: e ?? i, format: { "image/webp": "webp", "image/jpeg": "jpeg", "image/png": "png" }[t] || "webp", maxWidth: n, maxHeight: r, useCORS: !0, viewportOnly: !0, debug: !1 }) === void 0 ? {} : s).capture()];
              case 1:
                return [2, a.sent()];
              case 2:
                return [2, (o = a.sent()) instanceof Error ? o : new Error(String(o))];
              case 3:
                return [2];
            }
            var s;
          });
        });
      }
      var oi = function(r) {
        var t = r.nodeName.toLowerCase(), n = r.id || "", r = typeof (r = r).className == "string" ? r.className : r.getAttribute("class") || "", i = t;
        return n && (i += "#" + n), r && (i += r.split(" ").filter(function(o) {
          return !!o;
        }).map(function(o) {
          return "." + o;
        }).join("")), { tagName: t, id: n, className: r, selector: i };
      }, ai = function(e, t) {
        var n;
        if ((n = t?.tagName) != null && n.length) {
          var r = e.tagName.toLowerCase();
          if (t.tagName.some(function(o) {
            return r === o.toLowerCase().trim();
          })) return !0;
        }
        if ((n = t?.id) != null && n.length && e.id && t.id.some(function(o) {
          return e.id === o.trim();
        })) return !0;
        if ((n = t?.className) != null && n.length && e.className) {
          var i = e.className.split(" ").map(function(o) {
            return o.trim();
          }).filter(Boolean);
          if (t.className.some(function(o) {
            return o = o.trim(), !!o && i.includes(o);
          })) return !0;
        }
        return !1;
      }, si = function(e, t) {
        return !(t == null || !t.length) && t.some(function(n) {
          return e.selector.includes(n);
        });
      }, li = function(e) {
        var t;
        return !(!e || !((t = e.tagName) != null && t.length || (t = e.id) != null && t.length || (t = e.className) != null && t.length));
      }, Mn = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        if (!t.length) return e;
        var r = t.shift();
        if (r) for (var i in r) {
          var o = r[i];
          Array.isArray(o) ? e[i] = Q(o) : typeof o == "object" && o !== null && Object.prototype.hasOwnProperty.call(e, i) && typeof e[i] == "object" && e[i] !== null && !Array.isArray(e[i]) ? Mn(e[i], o) : e[i] = o;
        }
        return Mn.apply(void 0, Q([e], t));
      }, Ue = new _({ name: "blankScreen", captureScreenshotWithStrategy: function() {
        return K(this, void 0, void 0, function() {
          var e, t, n, r, i, o;
          return ae(this, function(a) {
            switch (a.label) {
              case 0:
                return a.trys.push([0, 3, , 4]), e = window.innerWidth, e = e * window.innerHeight, t = Date.now(), [4, ii()];
              case 1:
                return o = a.sent(), i = Date.now() - t, typeof o == "object" && o !== null ? [2, { error: "capture_failed", details: { firstCaptureTime: i, errorMessage: o?.message } }] : o ? !(r = ((n = o) == null ? void 0 : n.length) / 1024) || r <= 0 || !isFinite(r) ? [2, { error: "invalid_size", details: { reason: "screenshot_size_invalid", size: r } }] : 90 < r ? [2, { error: "complex_page", details: { firstSize: Math.round(r), threshold: 90 } }] : r <= 30 ? [2, n] : (i = 26 / r) < 0.5 ? [2, { error: "over_compression", details: { firstSize: Math.round(r), requiredRatio: Math.round(100 * i), minRatio: Math.round(50) } }] : (u = i, l = In(s = e).defaultQuality, s = s <= ei.THRESHOLDS.SMALL ? 0.25 : 0.3, o = Math.max(s, l * u), [4, ii(o)]) : [2, { error: "capture_failed", details: { reason: "empty_result" } }];
              case 2:
                return typeof (i = a.sent()) == "object" && i !== null ? [2, { error: "retry_capture_failed", details: { firstSize: Math.round(r), errorMessage: i?.message } }] : (n = i) ? n && n?.length <= 30720 ? [2, n] : [2, { error: "retry_failed", details: { firstSize: Math.round(r), finalSize: n ? Math.round(n?.length / 1024) : 0, maxSize: 30 } }] : [2, { error: "retry_capture_failed", details: { reason: "empty_result" } }];
              case 3:
                return [2, { error: "exception", details: { message: (o = a.sent()) instanceof Error ? o.message : String(o), stack: o instanceof Error ? o.stack : void 0 } }];
              case 4:
                return [2];
            }
            var s, u, l;
          });
        });
      }, isDestroyed: !1, isAwaitingClientScreenshot: !1, pendingTimeouts: [], notifyClientScreenshot: function(e, t, n, r) {
        var i = this;
        if (!this.isDestroyed) {
          var o = !(this.isAwaitingClientScreenshot = !0), a = t.timestamp + "_" + Math.random().toString(36).slice(2, 10), t = T(T({}, t), { requestId: a }), s = setTimeout(function() {
            i.pendingTimeouts = i.pendingTimeouts.filter(function(l) {
              return l !== s;
            }), i.isDestroyed ? i.isAwaitingClientScreenshot = !1 : o || (o = !0, i.isAwaitingClientScreenshot = !1, r(null, { success: !1, source: "client", reason: "timeout", timeout: n, requestId: a }));
          }, n);
          this.pendingTimeouts.push(s);
          try {
            e(t, function(l) {
              i.isDestroyed ? (i.isAwaitingClientScreenshot = !1, clearTimeout(s)) : o || (o = !0, i.isAwaitingClientScreenshot = !1, clearTimeout(s), i.pendingTimeouts = i.pendingTimeouts.filter(function(c) {
                return c !== s;
              }), l && typeof l == "string" ? r(l, { success: !0, source: "client", requestId: a }) : r(null, { success: !1, source: "client", reason: "client_returned_null", requestId: a }));
            });
          } catch (l) {
            o || this.isDestroyed || (o = !0, this.isAwaitingClientScreenshot = !1, clearTimeout(s), this.pendingTimeouts = this.pendingTimeouts.filter(function(c) {
              return c !== s;
            }), r(null, { success: !1, source: "client", reason: "callback_error", error: l instanceof Error ? l.message : String(l), requestId: a }));
          }
        }
      }, onNewAegis: function(e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, m, b, y, w, v, L, N, k, I, F, q, Y, U, D, j, J, Ce, Ye, ee, dt, te, ke, Ze, Fn, Bt = this;
        document.elementFromPoint && (this.pendingTimeouts.forEach(function(W) {
          clearTimeout(W);
        }), this.pendingTimeouts = [], this.isDestroyed = !1, this.isAwaitingClientScreenshot = !1, r = ri(e), i = r.everySideSampleNumber, o = r.sameElementsPercent, a = r.containers, s = r.ignoreContainers, u = r.containerMatchers, l = r.ignoreMatchers, c = r.detectStartPosition, f = r.ignoreElesWhenDomChange, p = r.reDetectInterval, d = r.disableSameElementsCheck, h = r.samePointDepth, g = r.enableScreenshot, m = r.needScreenShotMeta, b = r.onBlankScreenCapture, y = r.clientScreenshotTimeout, w = 4 * i - 3, v = Math.floor(w * r.emptyElementsPercent / 100), L = Math.floor(w * o / 100), N = Ke.UNKNOWN, I = null, F = k = !1, q = function() {
          return K(Bt, void 0, void 0, function() {
            var W, X, Ae, ve, ui, ci, zt, pt, De, Un, et, ht, Gt, le, Vt, ue, Dn, fi, oe, Hn, jn, $t, Jt, di, Ie, gt, mt, vt, yt, Xt, qn, tt, vo = this;
            return ae(this, function(wt) {
              switch (wt.label) {
                case 0:
                  if (W = window.innerHeight, X = window.innerWidth, Ae = c.x, ve = c.y, X <= Ae || W <= ve) return [2];
                  for (ui = Ae + (X - Ae) / 2, ci = ve + (W - ve) / 2, zt = [], pt = i + 1, Un = De = 0, et = 1; et < pt; et++) le = ve + (W - ve) * et / pt, ue = Wt(ht = Ae + (X - Ae) * et / pt, ci), Gt = Wt(ui, le), Vt = Wt(ht, le), ht = Wt(ht, W - le), le = qt(ue, a, s, u, l), le.isWhitePoint && (De += 1), zt.push(le.selectorPointers), et !== pt / 2 && (ue = qt(Gt, a, s, u, l), le = ue.isWhitePoint, Gt = ue.selectorPointers, le && (De += 1), ue = qt(Vt, a, s, u, l), le = ue.isWhitePoint, Vt = ue.selectorPointers, le && (De += 1), ue = qt(ht, a, s, u, l), ue.isWhitePoint && (De += 1), zt.push(Gt, Vt, ue.selectorPointers));
                  return mt = v <= De, vt = !1, Dn = { samePointerMap: {}, maximumSamePointer: {} }, d || (oe = zt.map(function(B) {
                    return B.slice(0, h);
                  }), Kt = oe.map(function(B) {
                    return B.join(" < ");
                  }).reduce(function(B, ne) {
                    return B[ne] = B[ne] ? B[ne] + 1 : 1, B;
                  }, {}), Wn = Object.keys(Kt).map(function(B) {
                    return [B, Kt[B]];
                  }).sort(function(B, ne) {
                    return ne[1] - B[1];
                  })[0], pi = Wn[0], oe = { samePointerMap: Kt, maximumSamePointerClass: pi, maximumSamePointerCounter: Wn[1] }, Dn = { samePointerMap: oe.samePointerMap, maximumSamePointer: ((tt = {})[fi = oe.maximumSamePointerClass] = oe = oe.maximumSamePointerCounter, tt) }, Un = oe, tt = po.some(function(B) {
                    return fi.startsWith(B);
                  }), vt = L <= oe && !tt), mt || vt ? [3, 1] : (k = !1, I = null, [3, 8]);
                case 1:
                  return k ? (oe = I?.whitePointCount >= v, tt = I?.samePointCount >= L, Hn = oe && tt ? "both" : oe ? "whitePoint" : "sameElement", jn = t ? "error" : "domChange", $t = window.innerWidth, Jt = window.innerHeight, di = Math.round(I?.samePointCount / w * 100), Ie = { whitePointCount: I?.whitePointCount, samePointCount: I?.samePointCount, maximumSamePointer: I?.maximumSamePointer, linkMsg: I?.linkMsg }, gt = function(B, ne) {
                    ne = { msg: "decect blankscreen triggerReason: " + Hn + " triggerType: " + jn + `

whitePointCount: ` + Ie.whitePointCount + " whitePointerThreshold: " + v + (d ? "" : `

sameElementsCount: ` + Ie.samePointCount + " samePointerThreshold: " + L + " sameElementPercent: " + di + "%") + `

viewport: ` + $t + "x" + Jt + " totalSamplePoints: " + w + (d ? "" : `

maxSameElement: ` + we(Ie.maximumSamePointer)) + (m && g && ne ? `

screenShotMeta: ` + JSON.stringify(ne) : "") + (Ie.linkMsg ? `

linkError: ` + Ie.linkMsg : ""), level: S.BLANK_SCREEN, errorMsg: B || null, originFrom: e.getOriginFrom() }, e.normalLogPipeline(ne);
                  }, g ? b ? (mt = In($t * Jt), vt = { triggerReason: Hn, triggerType: jn, whitePointCount: Ie.whitePointCount || 0, samePointCount: Ie.samePointCount || 0, viewportWidth: $t, viewportHeight: Jt, url: window.location.href, timestamp: Date.now(), recommendedScale: mt.scale, recommendedQuality: mt.defaultQuality, maxSizeKB: 30 }, this.notifyClientScreenshot(b, vt, y, function(B, ne) {
                    if (B && typeof B == "string") {
                      var hi = B.length / 1024;
                      if (30 < hi) return void gt(null, T(T({}, ne), { success: !1, reason: "size_exceeded", size: Math.round(hi), maxSize: 30 }));
                    }
                    gt(B, ne);
                  }), [3, 4]) : [3, 2] : [3, 5]) : [3, 7];
                case 2:
                  return [4, this.captureScreenshotWithStrategy()];
                case 3:
                  yt = wt.sent(), qn = Xt = null, qn = typeof yt == "string" ? (Xt = yt, { success: !0, source: "sdk" }) : (Xt = null, { success: !1, source: "sdk", error: yt.error, details: yt.details }), gt(Xt, qn), wt.label = 4;
                case 4:
                  return [3, 6];
                case 5:
                  gt(null, null), wt.label = 6;
                case 6:
                  return k = !1, I = null, [3, 8];
                case 7:
                  I = T(T({ msg: "blank_screen", level: S.BLANK_SCREEN, whitePointCount: De, samePointCount: Un }, Dn), t ? { linkLogType: t?.type, linkLogLevel: t?.level, linkErrorMsg: t?.errorMsg, linkMsg: t?.msg } : {}), k = !0, n = setTimeout(function() {
                    return K(vo, void 0, void 0, function() {
                      return ae(this, function(B) {
                        switch (B.label) {
                          case 0:
                            return [4, Y()];
                          case 1:
                            return B.sent(), [2];
                        }
                      });
                    });
                  }, p), wt.label = 8;
                case 8:
                  return [2];
              }
              var Kt, Wn, pi;
            });
          });
        }, Y = function() {
          return K(Bt, void 0, void 0, function() {
            var W = this;
            return ae(this, function(X) {
              switch (X.label) {
                case 0:
                  return "requestIdleCallback" in window ? (window.requestIdleCallback(function(Ae) {
                    return K(W, void 0, void 0, function() {
                      return ae(this, function(ve) {
                        switch (ve.label) {
                          case 0:
                            return 0 < Ae.timeRemaining() ? [4, q()] : [3, 2];
                          case 1:
                            ve.sent(), ve.label = 2;
                          case 2:
                            return [2];
                        }
                      });
                    });
                  }), [3, 3]) : [3, 1];
                case 1:
                  return [4, q()];
                case 2:
                  X.sent(), X.label = 3;
                case 3:
                  return [2];
              }
            });
          });
        }, U = function() {
          var W;
          k || Bt.isAwaitingClientScreenshot || N === Ke.ERROR && !t || (N = t ? Ke.ERROR : Ke.DOM_CHANGE, clearTimeout(n), W = ri(e).debounceDuration, n = setTimeout(function() {
            return K(Bt, void 0, void 0, function() {
              return ae(this, function(X) {
                switch (X.label) {
                  case 0:
                    return clearTimeout(n), [4, Y()];
                  case 1:
                    return X.sent(), [2];
                }
              });
            });
          }, W));
        }, e.lifeCycle.on("errorOccurred", D = function(W) {
          W = W.filter(function(X) {
            return X.level !== S.BLANK_SCREEN;
          }), 0 < W.length && (t = W[W.length - 1], U());
        }), j = null, window.MutationObserver && (te = ke = null, J = window.cancelAnimationFrame || function(W) {
          clearTimeout(W);
        }, Ce = window.requestAnimationFrame || function(W) {
          return setTimeout(W, 1e3 / 60);
        }, Ye = function() {
          (j = new MutationObserver(function(W) {
            var X = oi(W[0].target), X = f.includes(X.selector);
            W.length === 1 && X || U();
          })).observe(document.body, { childList: !0, subtree: !0 });
        }, ee = function() {
          ke && (clearTimeout(ke), ke = null), te && (J(te), te = null);
        }, document.body ? Ye() : (te = Ce(dt = function() {
          document.body ? (ee(), Ye()) : te = Ce(dt);
        }), ke = setTimeout(function() {
          ee();
        }, 1e4))), Ze = function() {
          F && (F = !0, k) && (clearTimeout(n), q());
        }, Fn = function() {
          document.visibilityState === "visible" && (F = !1), document.visibilityState === "hidden" && Ze();
        }, window.addEventListener("pagehide", Ze), window.addEventListener("beforeunload", Ze), window.addEventListener("visibilitychange", Fn), this.destroyBlanckScreenDetect = function() {
          window.removeEventListener("pagehide", Ze), window.removeEventListener("beforeunload", Ze), window.removeEventListener("visibilitychange", Fn), e.lifeCycle.remove("errorOccurred", D), j?.disconnect();
        });
      }, destroy: function() {
        this.isDestroyed = !0, this.isAwaitingClientScreenshot = !1, this.pendingTimeouts.forEach(function(e) {
          clearTimeout(e);
        }), this.pendingTimeouts = [], this.destroyBlanckScreenDetect();
      } }), mo = (new _({ name: "lagMonitor" }), new _({ name: "lagMonitor", observer: null, lagRecords: [], onNewAegis: function(e) {
        var t, n = this.$getConfig(e);
        n && n.enabled && typeof PerformanceObserver < "u" && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame") && (t = n.sampleRate || 1, Math.random() < t) && this.initLagMonitor(e, n);
      }, initLagMonitor: function(e, t) {
        var n = this, r = t.threshold || 2e3, i = t.noResponseThreshold || 5e3;
        try {
          this.observer = new PerformanceObserver(function(o) {
            o.getEntries().forEach(function(a) {
              var s;
              a.duration > r && (s = a.scripts && 0 < a.scripts.length ? a.scripts[0] : null, a = { name: a.name, timestamp: Date.now(), entryType: a.entryType, startTime: a.startTime, duration: a.duration, invoker: s?.invoker, sourceURL: s?.sourceURL }, n.lagRecords.push(a), 100 < n.lagRecords.length && n.lagRecords.shift(), n.publishLagLog(a, e, i <= a.duration));
            });
          }), this.observer.observe({ type: "long-animation-frame", buffered: !1 }), typeof window < "u" && (window.__longTasks = this.lagRecords);
        } catch (o) {
          if (typeof console < "u" && console.warn && console.warn("Lag monitor initialization failed:", o), this.observer) {
            try {
              this.observer.disconnect();
            } catch {
            }
            this.observer = null;
          }
        }
      }, publishLagLog: function(e, t, n) {
        n === void 0 && (n = !1);
        try {
          this.$walk(function(r) {
            if (r === t) {
              var i = { msg: JSON.stringify({ type: n ? "NORESPONSE_DETECTED" : "LAG_DETECTED", duration: Math.round(100 * e.duration) / 100, startTime: Math.round(100 * e.startTime) / 100, entryType: e.entryType, sourceURL: e.sourceURL || "unknown", invoker: e.invoker || "unknown", timestamp: e.timestamp }), level: n ? S.NORESPONSE_LOG : S.LAG_MONITOR, time: e.timestamp, originFrom: r.getOriginFrom() };
              try {
                r.normalLogPipeline(i);
              } catch (o) {
                typeof console < "u" && console.warn && console.warn("Lag log pipeline failed:", o);
              }
            }
          });
        } catch (r) {
          typeof console < "u" && console.warn && console.warn("Lag log publish failed:", r);
        }
      }, getLagRecords: function() {
        return Q(this.lagRecords);
      }, clearLagRecords: function() {
        this.lagRecords.length = 0, typeof window < "u" && (window.__longTasks = []);
      }, destroy: function() {
        if (this.observer) {
          try {
            this.observer.disconnect();
          } catch (e) {
            typeof console < "u" && console.warn && console.warn("Observer disconnect failed:", e);
          }
          this.observer = null;
        }
        this.clearLagRecords();
      } }));
      function Nn() {
        try {
          return typeof window < "u" && window.performance && window.performance.memory && typeof window.performance.memory.usedJSHeapSize == "number";
        } catch {
        }
      }
      function _n() {
        try {
          var e, t, n;
          return Nn() ? (t = (e = window.performance.memory).usedJSHeapSize || 0, n = e.jsHeapSizeLimit || 0, { usedJSHeapSize: t, totalJSHeapSize: e.totalJSHeapSize || 0, jsHeapSizeLimit: n, usageRatio: 0 < n ? Math.round(t / n * 1e4) / 100 : 0, timestamp: Date.now() }) : null;
        } catch {
          return null;
        }
      }
      function ft(e) {
        return Math.round(e / 1048576 * 100) / 100;
      }
      return new _({ name: "memoryMonitor" }), _ = new _({ name: "memoryMonitor", memoryReportTimer: null, oomCheckTimer: null, lastOOMTime: 0, memoryRecords: [], onNewAegis: function(e) {
        var t, n, r = this.$getConfig(e);
        r && r.enabled && Nn() && (t = r.sampleRate || 1, Math.random() < t) && (!(t = r.monitorPages) || t.length === 0 || (n = typeof window < "u" ? window.location.href : "", t.some(function(i) {
          return typeof i == "string" ? n.includes(i) : i instanceof RegExp && i.test(n);
        }))) && this.initMemoryMonitor(e, r);
      }, initMemoryMonitor: function(e, t) {
        var n, r = this, i = t.enableMemoryReport !== !1, o = t.enableOOMReport !== !1, a = t.memoryReportInterval || 6e4, s = t.oomCheckInterval || 1e4, u = t.oomThreshold || (() => {
          try {
            var l, c;
            return Nn() && 0 < (l = window.performance.memory.jsHeapSizeLimit || 0) ? (c = ft(l), Math.round(0.9 * c)) : 100;
          } catch {
            return 100;
          }
        })();
        try {
          i && (this.memoryReportTimer = setInterval(function() {
            r.reportCurrentMemory(e, "MEMORY_REPORT");
          }, a)), o && (this.oomCheckTimer = setInterval(function() {
            r.checkOOMCondition(e, u);
          }, s)), typeof window < "u" && (window.addEventListener("beforeunload", n = function() {
            r.cleanup();
          }), window.addEventListener("pagehide", n));
        } catch (l) {
          typeof console < "u" && console.warn && console.warn("Memory monitor initialization failed:", l), this.cleanup();
        }
      }, reportCurrentMemory: function(e, t) {
        try {
          var n, r = _n();
          r && (n = { type: t, memoryInfo: r, url: typeof window < "u" ? window.location.href : "", userAgent: typeof navigator < "u" ? navigator.userAgent : "", timestamp: Date.now() }, this.memoryRecords.push(n), 50 < this.memoryRecords.length && this.memoryRecords.shift(), this.publishMemoryLog(n, e));
        } catch (i) {
          typeof console < "u" && console.warn && console.warn("Memory report failed:", i);
        }
      }, checkOOMCondition: function(e, t) {
        try {
          var n, r, i = _n();
          i && (n = ft(i.usedJSHeapSize), r = Date.now(), t < n) && 3e5 < r - this.lastOOMTime && (this.lastOOMTime = r, this.reportCurrentMemory(e, "MEMORY_OOM"));
        } catch (o) {
          typeof console < "u" && console.warn && console.warn("OOM check failed:", o);
        }
      }, publishMemoryLog: function(e, t) {
        try {
          e.type === "MEMORY_REPORT" ? this.publishMemoryReport(e, t) : e.type === "MEMORY_OOM" && this.publishOOMLog(e, t);
        } catch (n) {
          typeof console < "u" && console.warn && console.warn("Memory log publish failed:", n);
        }
      }, publishMemoryReport: function(e, t) {
        try {
          var n = { memoryUsed: e.memoryInfo.usedJSHeapSize, memoryAllocated: e.memoryInfo.totalJSHeapSize, memoryUsage: e.memoryInfo.usageRatio };
          this.$walk(function(r) {
            var i;
            if (r === t) try {
              (i = r.sendPipeline) != null && i.call(r, [function(o, a) {
                var s = r.config.memoryUrl || r.config.hostUrl + "/memory", u = new URLSearchParams();
                Object.keys(o).forEach(function(l) {
                  var c = o[l];
                  c != null && c !== "" && u.append(l, String(c));
                }), a({ url: s + "?" + u.toString(), method: "post", type: A.MEMORY, log: o, success: function() {
                  typeof console < "u" && console.debug && console.debug("Memory report success:", o.memory_used, "bytes");
                }, fail: function(l) {
                  typeof console < "u" && console.warn && console.warn("Memory report failed:", l);
                } });
              }], A.MEMORY)(n);
            } catch (o) {
              typeof console < "u" && console.warn && console.warn("Memory pipeline failed:", o);
            }
          });
        } catch (r) {
          typeof console < "u" && console.warn && console.warn("Memory report publish failed:", r);
        }
      }, publishOOMLog: function(e, t) {
        try {
          var n = e.memoryInfo, r = "Memory OOM detected: Used " + ft(n.usedJSHeapSize) + "MB / Total " + ft(n.totalJSHeapSize) + "MB / Limit " + ft(n.jsHeapSizeLimit) + "MB (" + n.usageRatio + "%)", i = { msg: r, level: S.MEMORY_OOM, time: e.timestamp, originFrom: t.getOriginFrom() };
          this.$walk(function(o) {
            var a;
            if (o === t) try {
              (a = o.normalLogPipeline) != null && a.call(o, i), typeof console < "u" && console.warn && console.warn("OOM detected and reported:", r);
            } catch (s) {
              typeof console < "u" && console.warn && console.warn("OOM pipeline failed:", s);
            }
          });
        } catch (o) {
          typeof console < "u" && console.warn && console.warn("OOM log publish failed:", o);
        }
      }, getMemoryRecords: function() {
        return Q(this.memoryRecords);
      }, getCurrentMemoryStatus: _n, clearMemoryRecords: function() {
        this.memoryRecords.length = 0;
      }, cleanup: function() {
        this.memoryReportTimer && (clearInterval(this.memoryReportTimer), this.memoryReportTimer = null), this.oomCheckTimer && (clearInterval(this.oomCheckTimer), this.oomCheckTimer = null);
      }, destroy: function() {
        this.cleanup(), this.clearMemoryRecords(), this.lastOOMTime = 0;
      } }), E.use(Qi), E.use($i), E.use(zi), E.use(ao), E.use(oo), E.use(Bi), E.use(M), E.use(lo), E.use(fo), E.use(Yi), E.use(Zi), E.use(mo), E.use(_), E.use(Ji), E.use(Ue), E;
    });
  })(Zt)), Zt.exports;
}
var Ro = So();
const bi = /* @__PURE__ */ bo(Ro);
let ce = null, en = null;
function Bn() {
  const R = wo().credentials?.sdkAppId;
  return R ? String(R) : void 0;
}
function Ei(R, O) {
  if (!O)
    return !1;
  const x = R;
  return typeof x.setConfig == "function" ? (x.setConfig({ uin: O }), !0) : typeof x.setUin == "function" ? (x.setUin(O), !0) : x.config && typeof x.config == "object" ? (x.config.uin = O, !0) : (console.warn("[Aegis] 当前 SDK 实例不支持动态更新 uin"), !1);
}
function No(R) {
  if (!R.id)
    return console.warn("[Aegis] id is required"), null;
  en = { ...R };
  const O = R.uin || Bn();
  return ce = new bi({
    reportApiSpeed: !0,
    reportAssetSpeed: !0,
    spa: !0,
    hostUrl: "https://rumt-zh.com",
    uin: O,
    ...R
  }), (R.autoUpdateUin || !R.uin && Bn()) && Si(), ce;
}
function _o(R) {
  if (!en || !en.id || !R) return;
  const O = ce?.config?.uin;
  if (String(O) !== String(R)) {
    try {
      ce.destroy?.();
    } catch {
    }
    ce = new bi({
      reportApiSpeed: !0,
      reportAssetSpeed: !0,
      spa: !0,
      hostUrl: "https://rumt-zh.com",
      ...en,
      uin: R
    }), console.log("[Aegis] instance reinitialized with uin:", R);
  }
}
function To() {
  return ce;
}
function Fo(R) {
  ce && Ei(ce, R);
}
function Si() {
  const R = Bn();
  return R && ce ? Ei(ce, R) : !1;
}
function Uo() {
  Si();
}
function Do() {
}
function Ho() {
  return ce !== null;
}
function Ri() {
  return To();
}
function zn(R, O, x, z) {
  const G = Ri();
  if (G)
    try {
      G.reportEvent?.({ name: R, ext1: O, ext2: x, ext3: z });
    } catch {
    }
}
function Ti(R, O) {
  const x = Ri();
  if (x)
    try {
      x.reportTime?.({ name: R, duration: O });
    } catch {
    }
}
function Oi(R, O, x, z) {
  zn(R, O, x ? "success" : "fail", z);
}
function Oo(R, O) {
  const x = Date.now();
  return O().finally(() => {
    Ti(R, Date.now() - x);
  });
}
let mi = null;
function xo(R) {
  if (R === mi) return;
  mi = R;
  const O = Po(R);
  zn("page_view", O, R);
}
function Po(R) {
  return R.split("/").filter(Boolean)[0] || "home";
}
const jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  measureAndReport: Oo,
  reportBusinessOp: Oi,
  reportEvent: zn,
  reportPageView: xo,
  reportTime: Ti
}, Symbol.toStringTag, { value: "Module" }));
function Lo(R, O, x) {
  const z = Co(x);
  Oi(R, "error", !1, `${O}${z ? ` | ${z}` : ""}`);
}
function Co(R) {
  if (!R) return "";
  if (R instanceof Error) {
    const O = [];
    if (R.message && O.push(R.message), R.stack) {
      const x = R.stack.split(`
`)[1]?.trim();
      x && O.push(x);
    }
    return O.join(" | ");
  }
  if (typeof R == "string") return R;
  try {
    return JSON.stringify(R);
  } catch {
    return String(R);
  }
}
const Yt = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};
let Gn = "debug";
function qo(R) {
  Gn = R;
}
function Wo() {
  return Gn;
}
class xi {
  constructor(O = {}) {
    this.config = {
      enableConsole: process.env.NODE_ENV !== "production",
      enableReport: process.env.NODE_ENV === "production",
      ...O
    };
  }
  /**
   * 调试日志 - 仅在开发环境可见
   */
  debug(O, ...x) {
    this.log("debug", O, x[0], x.length > 1 ? x.slice(1) : void 0);
  }
  /**
   * 信息日志
   */
  info(O, ...x) {
    this.log("info", O, x[0], x.length > 1 ? x.slice(1) : void 0);
  }
  /**
   * 警告日志
   */
  warn(O, ...x) {
    this.log("warn", O, x[0], x.length > 1 ? x.slice(1) : void 0);
  }
  /**
   * 错误日志 - 同时触发 RUM 上报（如启用）
   */
  error(O, ...x) {
    const z = x[0], G = x.length > 1 ? x.slice(1) : void 0;
    if (this.log("error", O, z, G), this.config.enableReport && G) {
      const ye = G.find((T) => T instanceof Error) ?? G[G.length - 1];
      ye && this.reportToRum(O, z, ye);
    }
  }
  /**
   * 统一日志输出
   */
  log(O, x, z, G) {
    if (Yt[O] < Yt[Gn] || this.config.minLevel && Yt[O] < Yt[this.config.minLevel] || !this.config.enableConsole) return;
    const ye = this.formatTimestamp(), T = this.config.prefix ? `[${this.config.prefix}]` : "", K = `${ye}${T}[${x}] ${z}`;
    switch (O) {
      case "debug":
        console.debug(K, G ?? "");
        break;
      case "info":
        console.info(K, G ?? "");
        break;
      case "warn":
        console.warn(K, G ?? "");
        break;
      case "error":
        console.error(K, G ?? "");
        break;
    }
  }
  /**
   * 格式化时间戳 HH:MM:SS.mmm
   */
  formatTimestamp() {
    const O = /* @__PURE__ */ new Date(), x = String(O.getHours()).padStart(2, "0"), z = String(O.getMinutes()).padStart(2, "0"), G = String(O.getSeconds()).padStart(2, "0"), ye = String(O.getMilliseconds()).padStart(3, "0");
    return `[${x}:${z}:${G}.${ye}]`;
  }
  /**
   * 上报错误到 RUM (Aegis)
   * 通过 reportBusinessOp 上报，与 rum-reporter 打通
   */
  reportToRum(O, x, z) {
    try {
      Lo(O, x, z);
    } catch {
    }
  }
}
const Bo = new xi({ prefix: "LiveKit" }), zo = (R) => new xi({ prefix: R });
export {
  bi as A,
  xi as L,
  vi as a,
  Wo as b,
  zo as c,
  Do as d,
  Uo as e,
  Ho as f,
  To as g,
  zn as h,
  No as i,
  xo as j,
  Ti as k,
  Bo as l,
  Oo as m,
  ko as n,
  qo as o,
  Mo as p,
  bo as q,
  Oi as r,
  Fo as s,
  wo as t,
  Si as u,
  Ao as v,
  _o as w,
  Io as x,
  jo as y
};
