! function(t) {
    function e(e) {
        for (var r, a, s = e[0], u = e[1], c = e[2], f = 0, d = []; f < s.length; f++) a = s[f], Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]), i[a] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
        for (l && l(e); d.length;) d.shift()();
        return o.push.apply(o, c || []), n()
    }

    function n() {
        for (var t, e = 0; e < o.length; e++) {
            for (var n = o[e], r = !0, s = 1; s < n.length; s++) {
                var u = n[s];
                0 !== i[u] && (r = !1)
            }
            r && (o.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var r = {},
        i = {
            3: 0
        },
        o = [];

    function a(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = t, a.c = r, a.d = function(t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function(t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) a.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, a.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        u = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var c = 0; c < s.length; c++) e(s[c]);
    var l = u;
    o.push([160, 0]), n()
}([, function(t, e, n) {
    var r = n(10),
        i = n(17),
        o = n(31),
        a = n(32),
        s = n(33),
        u = function(t, e, n) {
            var c, l, f, d, h = t & u.F,
                p = t & u.G,
                v = t & u.S,
                y = t & u.P,
                m = t & u.B,
                g = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                b = p ? i : i[e] || (i[e] = {}),
                w = b.prototype || (b.prototype = {});
            for (c in p && (n = e), n) f = ((l = !h && g && void 0 !== g[c]) ? g : n)[c], d = m && l ? s(f, r) : y && "function" == typeof f ? s(Function.call, f) : f, g && a(g, c, f, t & u.U), b[c] != f && o(b, c, d), y && w[c] != f && (w[c] = f)
        };
    r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, , , , function(t, e, n) {
    var r = n(7);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, , function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(71)("wks"),
        i = n(52),
        o = n(10).Symbol,
        a = "function" == typeof o;
    (t.exports = function(t) {
        return r[t] || (r[t] = a && o[t] || (a ? o : i)("Symbol." + t))
    }).store = r
}, , function(t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, , , , , function(t, e, n) {
    var r = n(46),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.11"
    };
    "number" == typeof __e && (__e = n)
}, function(t, e, n) {
    var r = n(1),
        i = n(11),
        o = n(34),
        a = /"/g,
        s = function(t, e, n, r) {
            var i = String(o(t)),
                s = "<" + e;
            return "" !== n && (s += " " + n + '="' + String(r).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
        };
    t.exports = function(t, e) {
        var n = {};
        n[t] = e(s), r(r.P + r.F * i((function() {
            var e = "" [t]('"');
            return e !== e.toLowerCase() || e.split('"').length > 3
        })), "String", n)
    }
}, , function(t, e, n) {
    var r = n(5),
        i = n(112),
        o = n(70),
        a = Object.defineProperty;
    e.f = n(22) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = o(e, !0), r(n), i) try {
            return a(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(34);
    t.exports = function(t) {
        return Object(r(t))
    }
}, function(t, e, n) {
    t.exports = !n(11)((function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(11);
    t.exports = function(t, e) {
        return !!t && r((function() {
            e ? t.call(null, (function() {}), 1) : t.call(null)
        }))
    }
}, function(t, e, n) {
    var r = n(55),
        i = n(34);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(17),
        o = n(11);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
            a = {};
        a[t] = e(n), r(r.S + r.F * o((function() {
            n(1)
        })), "Object", a)
    }
}, , , function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, , function(t, e, n) {
    var r = n(20),
        i = n(44);
    t.exports = n(22) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    var r = n(10),
        i = n(31),
        o = n(28),
        a = n(52)("src"),
        s = n(164),
        u = ("" + s).split("toString");
    n(17).inspectSource = function(t) {
        return s.call(t)
    }, (t.exports = function(t, e, n, s) {
        var c = "function" == typeof n;
        c && (o(n, "name") || i(n, "name", e)), t[e] !== n && (c && (o(n, a) || i(n, a, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : s ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && this[a] || s.call(this)
    }))
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, , , function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e, n) {
    var r = n(72),
        i = n(44),
        o = n(24),
        a = n(70),
        s = n(28),
        u = n(112),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(22) ? c : function(t, e) {
        if (t = o(t), e = a(e, !0), u) try {
            return c(t, e)
        } catch (t) {}
        if (s(t, e)) return i(!r.f.call(t, e), t[e])
    }
}, function(t, e, n) {
    var r = n(33),
        i = n(55),
        o = n(21),
        a = n(16),
        s = n(240);
    t.exports = function(t, e) {
        var n = 1 == t,
            u = 2 == t,
            c = 3 == t,
            l = 4 == t,
            f = 6 == t,
            d = 5 == t || f,
            h = e || s;
        return function(e, s, p) {
            for (var v, y, m = o(e), g = i(m), b = r(s, p, 3), w = a(g.length), E = 0, _ = n ? h(e, w) : u ? h(e, 0) : void 0; w > E; E++)
                if ((d || E in g) && (y = b(v = g[E], E, m), t))
                    if (n) _[E] = y;
                    else if (y) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return v;
                case 6:
                    return E;
                case 2:
                    _.push(v)
            } else if (l) return !1;
            return f ? -1 : c || l ? l : _
        }
    }
}, , , , , function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var r = n(114),
        i = n(86);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    var r = n(52)("meta"),
        i = n(7),
        o = n(28),
        a = n(20).f,
        s = 0,
        u = Object.isExtensible || function() {
            return !0
        },
        c = !n(11)((function() {
            return u(Object.preventExtensions({}))
        })),
        l = function(t) {
            a(t, r, {
                value: {
                    i: "O" + ++s,
                    w: {}
                }
            })
        },
        f = t.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, r)) {
                    if (!u(t)) return "F";
                    if (!e) return "E";
                    l(t)
                }
                return t[r].i
            },
            getWeak: function(t, e) {
                if (!o(t, r)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    l(t)
                }
                return t[r].w
            },
            onFreeze: function(t) {
                return c && f.NEED && u(t) && !o(t, r) && l(t), t
            }
        }
}, , , , , function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
    }
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r = n(5),
        i = n(113),
        o = n(86),
        a = n(85)("IE_PROTO"),
        s = function() {},
        u = function() {
            var t, e = n(84)("iframe"),
                r = o.length;
            for (e.style.display = "none", n(87).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[o[r]];
            return u()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (s.prototype = r(t), n = new s, s.prototype = null, n[a] = t) : n = u(), void 0 === e ? n : i(n, e)
    }
}, function(t, e, n) {
    var r = n(37);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
    }
}, function(t, e, n) {
    var r = n(46),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        return (t = r(t)) < 0 ? i(t + e, 0) : o(t, e)
    }
}, function(t, e, n) {
    var r = n(20).f,
        i = n(28),
        o = n(8)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, o) && r(t, o, {
            configurable: !0,
            value: e
        })
    }
}, function(t, e, n) {
    var r = n(28),
        i = n(21),
        o = n(85)("IE_PROTO"),
        a = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
    }
}, function(t, e, n) {
    "use strict";
    var r = n(91)(!0);
    n(92)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
    }), (function() {
        var t, e = this._t,
            n = this._i;
        return n >= e.length ? {
            value: void 0,
            done: !0
        } : (t = r(e, n), this._i += t.length, {
            value: t,
            done: !1
        })
    }))
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(8)("unscopables"),
        i = Array.prototype;
    null == i[r] && n(31)(i, r, {}), t.exports = function(t) {
        i[r][t] = !0
    }
}, , , , , , , , , function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(17),
        i = n(10),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return o[t] || (o[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: r.version,
        mode: n(53) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    e.f = {}.propertyIsEnumerable
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    "use strict";
    var r = n(75),
        i = {};
    i[n(8)("toStringTag")] = "z", i + "" != "[object z]" && n(32)(Object.prototype, "toString", (function() {
        return "[object " + r(this) + "]"
    }), !0)
}, function(t, e, n) {
    var r = n(37),
        i = n(8)("toStringTag"),
        o = "Arguments" == r(function() {
            return arguments
        }());
    t.exports = function(t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), i)) ? n : o ? r(e) : "Object" == (a = r(e)) && "function" == typeof e.callee ? "Arguments" : a
    }
}, function(t, e, n) {
    "use strict";
    var r = n(75),
        i = RegExp.prototype.exec;
    t.exports = function(t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
            var o = n.call(t, e);
            if ("object" != typeof o) throw new TypeError("RegExp exec method returned something other than an Object or null");
            return o
        }
        if ("RegExp" !== r(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e)
    }
}, function(t, e, n) {
    "use strict";
    n(227);
    var r = n(32),
        i = n(31),
        o = n(11),
        a = n(34),
        s = n(8),
        u = n(96),
        c = s("species"),
        l = !o((function() {
            var t = /./;
            return t.exec = function() {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        f = function() {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function() {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
    t.exports = function(t, e, n) {
        var d = s(t),
            h = !o((function() {
                var e = {};
                return e[d] = function() {
                    return 7
                }, 7 != "" [t](e)
            })),
            p = h ? !o((function() {
                var e = !1,
                    n = /a/;
                return n.exec = function() {
                    return e = !0, null
                }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
                    return n
                }), n[d](""), !e
            })) : void 0;
        if (!h || !p || "replace" === t && !l || "split" === t && !f) {
            var v = /./ [d],
                y = n(a, d, "" [t], (function(t, e, n, r, i) {
                    return e.exec === u ? h && !i ? {
                        done: !0,
                        value: v.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                })),
                m = y[0],
                g = y[1];
            r(String.prototype, t, m), i(RegExp.prototype, d, 2 == e ? function(t, e) {
                return g.call(t, this, e)
            } : function(t) {
                return g.call(t, this)
            })
        }
    }
}, , , , , , , function(t, e, n) {
    var r = n(7),
        i = n(10).document,
        o = r(i) && r(i.createElement);
    t.exports = function(t) {
        return o ? i.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(71)("keys"),
        i = n(52);
    t.exports = function(t) {
        return r[t] || (r[t] = i(t))
    }
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
    var r = n(10).document;
    t.exports = r && r.documentElement
}, function(t, e, n) {
    var r = n(114),
        i = n(86).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(5),
        o = function(t, e) {
            if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
    t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
            try {
                (r = n(33)(Function.call, n(38).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
            } catch (t) {
                e = !0
            }
            return function(t, n) {
                return o(t, n), e ? t.__proto__ = n : r(t, n), t
            }
        }({}, !1) : void 0),
        check: o
    }
}, function(t, e, n) {
    var r = n(37);
    t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
    }
}, function(t, e, n) {
    var r = n(46),
        i = n(34);
    t.exports = function(t) {
        return function(e, n) {
            var o, a, s = String(i(e)),
                u = r(n),
                c = s.length;
            return u < 0 || u >= c ? t ? "" : void 0 : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? t ? s.charAt(u) : o : t ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(53),
        i = n(1),
        o = n(32),
        a = n(31),
        s = n(60),
        u = n(117),
        c = n(57),
        l = n(58),
        f = n(8)("iterator"),
        d = !([].keys && "next" in [].keys()),
        h = function() {
            return this
        };
    t.exports = function(t, e, n, p, v, y, m) {
        u(n, e, p);
        var g, b, w, E = function(t) {
                if (!d && t in S) return S[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t)
                        }
                }
                return function() {
                    return new n(this, t)
                }
            },
            _ = e + " Iterator",
            P = "values" == v,
            x = !1,
            S = t.prototype,
            A = S[f] || S["@@iterator"] || v && S[v],
            O = A || E(v),
            T = v ? P ? E("entries") : O : void 0,
            j = "Array" == e && S.entries || A;
        if (j && (w = l(j.call(new t))) !== Object.prototype && w.next && (c(w, _, !0), r || "function" == typeof w[f] || a(w, f, h)), P && A && "values" !== A.name && (x = !0, O = function() {
                return A.call(this)
            }), r && !m || !d && !x && S[f] || a(S, f, O), s[e] = O, s[_] = h, v)
            if (g = {
                    values: P ? O : E("values"),
                    keys: y ? O : E("keys"),
                    entries: T
                }, m)
                for (b in g) b in S || o(S, b, g[b]);
            else i(i.P + i.F * (d || x), e, g);
        return g
    }
}, function(t, e, n) {
    var r = n(121),
        i = n(34);
    t.exports = function(t, e, n) {
        if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
        return String(i(t))
    }
}, function(t, e, n) {
    var r = n(8)("match");
    t.exports = function(t) {
        var e = /./;
        try {
            "/./" [t](e)
        } catch (n) {
            try {
                return e[r] = !1, !"/./" [t](e)
            } catch (t) {}
        }
        return !0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(91)(!0);
    t.exports = function(t, e, n) {
        return e + (n ? r(t, e).length : 1)
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o = n(228),
        a = RegExp.prototype.exec,
        s = String.prototype.replace,
        u = a,
        c = (r = /a/, i = /b*/g, a.call(r, "a"), a.call(i, "a"), 0 !== r.lastIndex || 0 !== i.lastIndex),
        l = void 0 !== /()??/.exec("")[1];
    (c || l) && (u = function(t) {
        var e, n, r, i, u = this;
        return l && (n = new RegExp("^" + u.source + "$(?!\\s)", o.call(u))), c && (e = u.lastIndex), r = a.call(u, t), c && r && (u.lastIndex = u.global ? r.index + r[0].length : e), l && r && r.length > 1 && s.call(r[0], n, (function() {
            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (r[i] = void 0)
        })), r
    }), t.exports = u
}, function(t, e, n) {
    var r = n(8)("iterator"),
        i = !1;
    try {
        var o = [7][r]();
        o.return = function() {
            i = !0
        }, Array.from(o, (function() {
            throw 2
        }))
    } catch (t) {}
    t.exports = function(t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = [7],
                a = o[r]();
            a.next = function() {
                return {
                    done: n = !0
                }
            }, o[r] = function() {
                return a
            }, t(o)
        } catch (t) {}
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(20),
        o = n(22),
        a = n(8)("species");
    t.exports = function(t) {
        var e = r[t];
        o && e && !e[a] && i.f(e, a, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(t, e, n) {
    for (var r = n(128), i = n(45), o = n(32), a = n(10), s = n(31), u = n(60), c = n(8), l = c("iterator"), f = c("toStringTag"), d = u.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(h), v = 0; v < p.length; v++) {
        var y, m = p[v],
            g = h[m],
            b = a[m],
            w = b && b.prototype;
        if (w && (w[l] || s(w, l, d), w[f] || s(w, f, m), u[m] = d, g))
            for (y in r) w[y] || o(w, y, r[y], !0)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
        return t
    }
}, function(t, e, n) {
    var r = n(33),
        i = n(123),
        o = n(124),
        a = n(5),
        s = n(16),
        u = n(126),
        c = {},
        l = {};
    (e = t.exports = function(t, e, n, f, d) {
        var h, p, v, y, m = d ? function() {
                return t
            } : u(t),
            g = r(n, f, e ? 2 : 1),
            b = 0;
        if ("function" != typeof m) throw TypeError(t + " is not iterable!");
        if (o(m)) {
            for (h = s(t.length); h > b; b++)
                if ((y = e ? g(a(p = t[b])[0], p[1]) : g(t[b])) === c || y === l) return y
        } else
            for (v = m.call(t); !(p = v.next()).done;)
                if ((y = i(v, g, p.value, e)) === c || y === l) return y
    }).BREAK = c, e.RETURN = l
}, function(t, e, n) {
    var r = n(32);
    t.exports = function(t, e, n) {
        for (var i in e) r(t, i, e[i], n);
        return t
    }
}, function(t, e, n) {
    var r = n(7);
    t.exports = function(t, e) {
        if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
        return t
    }
}, , , , , , , , , function(t, e, n) {
    t.exports = !n(22) && !n(11)((function() {
        return 7 != Object.defineProperty(n(84)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(t, e, n) {
    var r = n(20),
        i = n(5),
        o = n(45);
    t.exports = n(22) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, a = o(e), s = a.length, u = 0; s > u;) r.f(t, n = a[u++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(28),
        i = n(24),
        o = n(115)(!1),
        a = n(85)("IE_PROTO");
    t.exports = function(t, e) {
        var n, s = i(t),
            u = 0,
            c = [];
        for (n in s) n != a && r(s, n) && c.push(n);
        for (; e.length > u;) r(s, n = e[u++]) && (~o(c, n) || c.push(n));
        return c
    }
}, function(t, e, n) {
    var r = n(24),
        i = n(16),
        o = n(56);
    t.exports = function(t) {
        return function(e, n, a) {
            var s, u = r(e),
                c = i(u.length),
                l = o(a, c);
            if (t && n != n) {
                for (; c > l;)
                    if ((s = u[l++]) != s) return !0
            } else
                for (; c > l; l++)
                    if ((t || l in u) && u[l] === n) return t || l || 0;
            return !t && -1
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        var r = void 0 === n;
        switch (e.length) {
            case 0:
                return r ? t() : t.call(n);
            case 1:
                return r ? t(e[0]) : t.call(n, e[0]);
            case 2:
                return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
            case 3:
                return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
            case 4:
                return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
        }
        return t.apply(n, e)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(54),
        i = n(44),
        o = n(57),
        a = {};
    n(31)(a, n(8)("iterator"), (function() {
        return this
    })), t.exports = function(t, e, n) {
        t.prototype = r(a, {
            next: i(1, n)
        }), o(t, e + " Iterator")
    }
}, function(t, e, n) {
    e.f = n(8)
}, function(t, e, n) {
    var r = n(24),
        i = n(88).f,
        o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return a && "[object Window]" == o.call(t) ? function(t) {
            try {
                return i(t)
            } catch (t) {
                return a.slice()
            }
        }(t) : i(r(t))
    }
}, function(t, e) {
    t.exports = Object.is || function(t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(37),
        o = n(8)("match");
    t.exports = function(t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(29),
        o = n(8)("species");
    t.exports = function(t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
    }
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t, e, n, i) {
        try {
            return i ? e(r(n)[0], n[1]) : e(n)
        } catch (e) {
            var o = t.return;
            throw void 0 !== o && r(o.call(t)), e
        }
    }
}, function(t, e, n) {
    var r = n(60),
        i = n(8)("iterator"),
        o = Array.prototype;
    t.exports = function(t) {
        return void 0 !== t && (r.Array === t || o[i] === t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(20),
        i = n(44);
    t.exports = function(t, e, n) {
        e in t ? r.f(t, e, i(0, n)) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(75),
        i = n(8)("iterator"),
        o = n(60);
    t.exports = n(17).getIteratorMethod = function(t) {
        if (null != t) return t[i] || t["@@iterator"] || o[r(t)]
    }
}, function(t, e, n) {
    var r = n(29),
        i = n(21),
        o = n(55),
        a = n(16);
    t.exports = function(t, e, n, s, u) {
        r(e);
        var c = i(t),
            l = o(c),
            f = a(c.length),
            d = u ? f - 1 : 0,
            h = u ? -1 : 1;
        if (n < 2)
            for (;;) {
                if (d in l) {
                    s = l[d], d += h;
                    break
                }
                if (d += h, u ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
            }
        for (; u ? d >= 0 : f > d; d += h) d in l && (s = e(s, l[d], d, c));
        return s
    }
}, function(t, e, n) {
    "use strict";
    var r = n(61),
        i = n(129),
        o = n(60),
        a = n(24);
    t.exports = n(92)(Array, "Array", (function(t, e) {
        this._t = a(t), this._i = 0, this._k = e
    }), (function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
    }), "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        }
    }
}, function(t, e, n) {
    var r, i, o, a = n(33),
        s = n(116),
        u = n(87),
        c = n(84),
        l = n(10),
        f = l.process,
        d = l.setImmediate,
        h = l.clearImmediate,
        p = l.MessageChannel,
        v = l.Dispatch,
        y = 0,
        m = {},
        g = function() {
            var t = +this;
            if (m.hasOwnProperty(t)) {
                var e = m[t];
                delete m[t], e()
            }
        },
        b = function(t) {
            g.call(t.data)
        };
    d && h || (d = function(t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return m[++y] = function() {
            s("function" == typeof t ? t : Function(t), e)
        }, r(y), y
    }, h = function(t) {
        delete m[t]
    }, "process" == n(37)(f) ? r = function(t) {
        f.nextTick(a(g, t, 1))
    } : v && v.now ? r = function(t) {
        v.now(a(g, t, 1))
    } : p ? (o = (i = new p).port2, i.port1.onmessage = b, r = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
        l.postMessage(t + "", "*")
    }, l.addEventListener("message", b, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
        u.appendChild(c("script")).onreadystatechange = function() {
            u.removeChild(this), g.call(t)
        }
    } : function(t) {
        setTimeout(a(g, t, 1), 0)
    }), t.exports = {
        set: d,
        clear: h
    }
}, function(t, e, n) {
    "use strict";
    var r = n(29);

    function i(t) {
        var e, n;
        this.promise = new t((function(t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        })), this.resolve = r(e), this.reject = r(n)
    }
    t.exports.f = function(t) {
        return new i(t)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(20).f,
        i = n(54),
        o = n(102),
        a = n(33),
        s = n(100),
        u = n(101),
        c = n(92),
        l = n(129),
        f = n(98),
        d = n(22),
        h = n(47).fastKey,
        p = n(103),
        v = d ? "_s" : "size",
        y = function(t, e) {
            var n, r = h(e);
            if ("F" !== r) return t._i[r];
            for (n = t._f; n; n = n.n)
                if (n.k == e) return n
        };
    t.exports = {
        getConstructor: function(t, e, n, c) {
            var l = t((function(t, r) {
                s(t, l, e, "_i"), t._t = e, t._i = i(null), t._f = void 0, t._l = void 0, t[v] = 0, null != r && u(r, n, t[c], t)
            }));
            return o(l.prototype, {
                clear: function() {
                    for (var t = p(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    t._f = t._l = void 0, t[v] = 0
                },
                delete: function(t) {
                    var n = p(this, e),
                        r = y(n, t);
                    if (r) {
                        var i = r.n,
                            o = r.p;
                        delete n._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), n._f == r && (n._f = i), n._l == r && (n._l = o), n[v]--
                    }
                    return !!r
                },
                forEach: function(t) {
                    p(this, e);
                    for (var n, r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                        for (r(n.v, n.k, this); n && n.r;) n = n.p
                },
                has: function(t) {
                    return !!y(p(this, e), t)
                }
            }), d && r(l.prototype, "size", {
                get: function() {
                    return p(this, e)[v]
                }
            }), l
        },
        def: function(t, e, n) {
            var r, i, o = y(t, e);
            return o ? o.v = n : (t._l = o = {
                i: i = h(e, !0),
                k: e,
                v: n,
                p: r = t._l,
                n: void 0,
                r: !1
            }, t._f || (t._f = o), r && (r.n = o), t[v]++, "F" !== i && (t._i[i] = o)), t
        },
        getEntry: y,
        setStrong: function(t, e, n) {
            c(t, e, (function(t, n) {
                this._t = p(t, e), this._k = n, this._l = void 0
            }), (function() {
                for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
            }), n ? "entries" : "values", !n, !0), f(e)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(1),
        o = n(32),
        a = n(102),
        s = n(47),
        u = n(101),
        c = n(100),
        l = n(7),
        f = n(11),
        d = n(97),
        h = n(57),
        p = n(265);
    t.exports = function(t, e, n, v, y, m) {
        var g = r[t],
            b = g,
            w = y ? "set" : "add",
            E = b && b.prototype,
            _ = {},
            P = function(t) {
                var e = E[t];
                o(E, t, "delete" == t || "has" == t ? function(t) {
                    return !(m && !l(t)) && e.call(this, 0 === t ? 0 : t)
                } : "get" == t ? function(t) {
                    return m && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                } : "add" == t ? function(t) {
                    return e.call(this, 0 === t ? 0 : t), this
                } : function(t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this
                })
            };
        if ("function" == typeof b && (m || E.forEach && !f((function() {
                (new b).entries().next()
            })))) {
            var x = new b,
                S = x[w](m ? {} : -0, 1) != x,
                A = f((function() {
                    x.has(1)
                })),
                O = d((function(t) {
                    new b(t)
                })),
                T = !m && f((function() {
                    for (var t = new b, e = 5; e--;) t[w](e, e);
                    return !t.has(-0)
                }));
            O || ((b = e((function(e, n) {
                c(e, b, t);
                var r = p(new g, e, b);
                return null != n && u(n, y, r[w], r), r
            }))).prototype = E, E.constructor = b), (A || T) && (P("delete"), P("has"), y && P("get")), (T || S) && P(w), m && E.clear && delete E.clear
        } else b = v.getConstructor(e, t, y, w), a(b.prototype, n), s.NEED = !0;
        return h(b, t), _[t] = b, i(i.G + i.W + i.F * (b != g), _), m || v.setStrong(b, t, y), b
    }
}, , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    n(161), n(162), n(180), n(201), n(232), n(257), n(263), n(266), n(268), n(269), n(270), n(382), n(381), n(271), n(272), n(78), n(276), n(63), n(62), t.exports = n(277)
}, function(t, e) {
    ! function() {
        if ("undefined" != typeof window) try {
            var t = new window.CustomEvent("test", {
                cancelable: !0
            });
            if (t.preventDefault(), !0 !== t.defaultPrevented) throw new Error("Could not prevent default")
        } catch (t) {
            var e = function(t, e) {
                var n, r;
                return (e = e || {}).bubbles = !!e.bubbles, e.cancelable = !!e.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), r = n.preventDefault, n.preventDefault = function() {
                    r.call(this);
                    try {
                        Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        })
                    } catch (t) {
                        this.defaultPrevented = !0
                    }
                }, n
            };
            e.prototype = window.Event.prototype, window.CustomEvent = e
        }
    }()
}, function(t, e, n) {
    n(163), n(165), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(177), n(178), n(179), t.exports = n(17).Reflect
}, function(t, e, n) {
    var r = n(1),
        i = n(29),
        o = n(5),
        a = (n(10).Reflect || {}).apply,
        s = Function.apply;
    r(r.S + r.F * !n(11)((function() {
        a((function() {}))
    })), "Reflect", {
        apply: function(t, e, n) {
            var r = i(t),
                u = o(n);
            return a ? a(r, e, u) : s.call(r, e, u)
        }
    })
}, function(t, e, n) {
    t.exports = n(71)("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(1),
        i = n(54),
        o = n(29),
        a = n(5),
        s = n(7),
        u = n(11),
        c = n(166),
        l = (n(10).Reflect || {}).construct,
        f = u((function() {
            function t() {}
            return !(l((function() {}), [], t) instanceof t)
        })),
        d = !u((function() {
            l((function() {}))
        }));
    r(r.S + r.F * (f || d), "Reflect", {
        construct: function(t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (d && !f) return l(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new(c.apply(t, r))
            }
            var u = n.prototype,
                h = i(s(u) ? u : Object.prototype),
                p = Function.apply.call(t, h, e);
            return s(p) ? p : h
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(29),
        i = n(7),
        o = n(116),
        a = [].slice,
        s = {},
        u = function(t, e, n) {
            if (!(e in s)) {
                for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
                s[e] = Function("F,a", "return new F(" + r.join(",") + ")")
            }
            return s[e](t, n)
        };
    t.exports = Function.bind || function(t) {
        var e = r(this),
            n = a.call(arguments, 1),
            s = function() {
                var r = n.concat(a.call(arguments));
                return this instanceof s ? u(e, r.length, r) : o(e, r, t)
            };
        return i(e.prototype) && (s.prototype = e.prototype), s
    }
}, function(t, e, n) {
    var r = n(20),
        i = n(1),
        o = n(5),
        a = n(70);
    i(i.S + i.F * n(11)((function() {
        Reflect.defineProperty(r.f({}, 1, {
            value: 1
        }), 1, {
            value: 2
        })
    })), "Reflect", {
        defineProperty: function(t, e, n) {
            o(t), e = a(e, !0), o(n);
            try {
                return r.f(t, e, n), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(38).f,
        o = n(5);
    r(r.S, "Reflect", {
        deleteProperty: function(t, e) {
            var n = i(o(t), e);
            return !(n && !n.configurable) && delete t[e]
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(5),
        o = function(t) {
            this._t = i(t), this._i = 0;
            var e, n = this._k = [];
            for (e in t) n.push(e)
        };
    n(117)(o, "Object", (function() {
        var t, e = this._k;
        do {
            if (this._i >= e.length) return {
                value: void 0,
                done: !0
            }
        } while (!((t = e[this._i++]) in this._t));
        return {
            value: t,
            done: !1
        }
    })), r(r.S, "Reflect", {
        enumerate: function(t) {
            return new o(t)
        }
    })
}, function(t, e, n) {
    var r = n(38),
        i = n(58),
        o = n(28),
        a = n(1),
        s = n(7),
        u = n(5);
    a(a.S, "Reflect", {
        get: function t(e, n) {
            var a, c, l = arguments.length < 3 ? e : arguments[2];
            return u(e) === l ? e[n] : (a = r.f(e, n)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(l) : void 0 : s(c = i(e)) ? t(c, n, l) : void 0
        }
    })
}, function(t, e, n) {
    var r = n(38),
        i = n(1),
        o = n(5);
    i(i.S, "Reflect", {
        getOwnPropertyDescriptor: function(t, e) {
            return r.f(o(t), e)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(58),
        o = n(5);
    r(r.S, "Reflect", {
        getPrototypeOf: function(t) {
            return i(o(t))
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Reflect", {
        has: function(t, e) {
            return e in t
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(5),
        o = Object.isExtensible;
    r(r.S, "Reflect", {
        isExtensible: function(t) {
            return i(t), !o || o(t)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Reflect", {
        ownKeys: n(176)
    })
}, function(t, e, n) {
    var r = n(88),
        i = n(73),
        o = n(5),
        a = n(10).Reflect;
    t.exports = a && a.ownKeys || function(t) {
        var e = r.f(o(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(5),
        o = Object.preventExtensions;
    r(r.S, "Reflect", {
        preventExtensions: function(t) {
            i(t);
            try {
                return o && o(t), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    var r = n(20),
        i = n(38),
        o = n(58),
        a = n(28),
        s = n(1),
        u = n(44),
        c = n(5),
        l = n(7);
    s(s.S, "Reflect", {
        set: function t(e, n, s) {
            var f, d, h = arguments.length < 4 ? e : arguments[3],
                p = i.f(c(e), n);
            if (!p) {
                if (l(d = o(e))) return t(d, n, s, h);
                p = u(0)
            }
            if (a(p, "value")) {
                if (!1 === p.writable || !l(h)) return !1;
                if (f = i.f(h, n)) {
                    if (f.get || f.set || !1 === f.writable) return !1;
                    f.value = s, r.f(h, n, f)
                } else r.f(h, n, u(0, s));
                return !0
            }
            return void 0 !== p.set && (p.set.call(h, s), !0)
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(89);
    i && r(r.S, "Reflect", {
        setPrototypeOf: function(t, e) {
            i.check(t, e);
            try {
                return i.set(t, e), !0
            } catch (t) {
                return !1
            }
        }
    })
}, function(t, e, n) {
    n(181), n(184), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(199), n(200), n(74), t.exports = n(17).Object
}, function(t, e, n) {
    "use strict";
    var r = n(10),
        i = n(28),
        o = n(22),
        a = n(1),
        s = n(32),
        u = n(47).KEY,
        c = n(11),
        l = n(71),
        f = n(57),
        d = n(52),
        h = n(8),
        p = n(118),
        v = n(182),
        y = n(183),
        m = n(90),
        g = n(5),
        b = n(7),
        w = n(21),
        E = n(24),
        _ = n(70),
        P = n(44),
        x = n(54),
        S = n(119),
        A = n(38),
        O = n(73),
        T = n(20),
        j = n(45),
        I = A.f,
        C = T.f,
        L = S.f,
        k = r.Symbol,
        R = r.JSON,
        M = R && R.stringify,
        F = h("_hidden"),
        B = h("toPrimitive"),
        D = {}.propertyIsEnumerable,
        N = l("symbol-registry"),
        V = l("symbols"),
        H = l("op-symbols"),
        U = Object.prototype,
        W = "function" == typeof k && !!O.f,
        z = r.QObject,
        q = !z || !z.prototype || !z.prototype.findChild,
        $ = o && c((function() {
            return 7 != x(C({}, "a", {
                get: function() {
                    return C(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(t, e, n) {
            var r = I(U, e);
            r && delete U[e], C(t, e, n), r && t !== U && C(U, e, r)
        } : C,
        G = function(t) {
            var e = V[t] = x(k.prototype);
            return e._k = t, e
        },
        J = W && "symbol" == typeof k.iterator ? function(t) {
            return "symbol" == typeof t
        } : function(t) {
            return t instanceof k
        },
        K = function(t, e, n) {
            return t === U && K(H, e, n), g(t), e = _(e, !0), g(n), i(V, e) ? (n.enumerable ? (i(t, F) && t[F][e] && (t[F][e] = !1), n = x(n, {
                enumerable: P(0, !1)
            })) : (i(t, F) || C(t, F, P(1, {})), t[F][e] = !0), $(t, e, n)) : C(t, e, n)
        },
        X = function(t, e) {
            g(t);
            for (var n, r = y(e = E(e)), i = 0, o = r.length; o > i;) K(t, n = r[i++], e[n]);
            return t
        },
        Y = function(t) {
            var e = D.call(this, t = _(t, !0));
            return !(this === U && i(V, t) && !i(H, t)) && (!(e || !i(this, t) || !i(V, t) || i(this, F) && this[F][t]) || e)
        },
        Q = function(t, e) {
            if (t = E(t), e = _(e, !0), t !== U || !i(V, e) || i(H, e)) {
                var n = I(t, e);
                return !n || !i(V, e) || i(t, F) && t[F][e] || (n.enumerable = !0), n
            }
        },
        Z = function(t) {
            for (var e, n = L(E(t)), r = [], o = 0; n.length > o;) i(V, e = n[o++]) || e == F || e == u || r.push(e);
            return r
        },
        tt = function(t) {
            for (var e, n = t === U, r = L(n ? H : E(t)), o = [], a = 0; r.length > a;) !i(V, e = r[a++]) || n && !i(U, e) || o.push(V[e]);
            return o
        };
    W || (s((k = function() {
        if (this instanceof k) throw TypeError("Symbol is not a constructor!");
        var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === U && e.call(H, n), i(this, F) && i(this[F], t) && (this[F][t] = !1), $(this, t, P(1, n))
            };
        return o && q && $(U, t, {
            configurable: !0,
            set: e
        }), G(t)
    }).prototype, "toString", (function() {
        return this._k
    })), A.f = Q, T.f = K, n(88).f = S.f = Z, n(72).f = Y, O.f = tt, o && !n(53) && s(U, "propertyIsEnumerable", Y, !0), p.f = function(t) {
        return G(h(t))
    }), a(a.G + a.W + a.F * !W, {
        Symbol: k
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) h(et[nt++]);
    for (var rt = j(h.store), it = 0; rt.length > it;) v(rt[it++]);
    a(a.S + a.F * !W, "Symbol", {
        for: function(t) {
            return i(N, t += "") ? N[t] : N[t] = k(t)
        },
        keyFor: function(t) {
            if (!J(t)) throw TypeError(t + " is not a symbol!");
            for (var e in N)
                if (N[e] === t) return e
        },
        useSetter: function() {
            q = !0
        },
        useSimple: function() {
            q = !1
        }
    }), a(a.S + a.F * !W, "Object", {
        create: function(t, e) {
            return void 0 === e ? x(t) : X(x(t), e)
        },
        defineProperty: K,
        defineProperties: X,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: Z,
        getOwnPropertySymbols: tt
    });
    var ot = c((function() {
        O.f(1)
    }));
    a(a.S + a.F * ot, "Object", {
        getOwnPropertySymbols: function(t) {
            return O.f(w(t))
        }
    }), R && a(a.S + a.F * (!W || c((function() {
        var t = k();
        return "[null]" != M([t]) || "{}" != M({
            a: t
        }) || "{}" != M(Object(t))
    }))), "JSON", {
        stringify: function(t) {
            for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
            if (n = e = r[1], (b(e) || void 0 !== t) && !J(t)) return m(e) || (e = function(t, e) {
                if ("function" == typeof n && (e = n.call(this, t, e)), !J(e)) return e
            }), r[1] = e, M.apply(R, r)
        }
    }), k.prototype[B] || n(31)(k.prototype, B, k.prototype.valueOf), f(k, "Symbol"), f(Math, "Math", !0), f(r.JSON, "JSON", !0)
}, function(t, e, n) {
    var r = n(10),
        i = n(17),
        o = n(53),
        a = n(118),
        s = n(20).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || s(e, t, {
            value: a.f(t)
        })
    }
}, function(t, e, n) {
    var r = n(45),
        i = n(73),
        o = n(72);
    t.exports = function(t) {
        var e = r(t),
            n = i.f;
        if (n)
            for (var a, s = n(t), u = o.f, c = 0; s.length > c;) u.call(t, a = s[c++]) && e.push(a);
        return e
    }
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        create: n(54)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F * !n(22), "Object", {
        defineProperty: n(20).f
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F * !n(22), "Object", {
        defineProperties: n(113)
    })
}, function(t, e, n) {
    var r = n(24),
        i = n(38).f;
    n(25)("getOwnPropertyDescriptor", (function() {
        return function(t, e) {
            return i(r(t), e)
        }
    }))
}, function(t, e, n) {
    var r = n(21),
        i = n(58);
    n(25)("getPrototypeOf", (function() {
        return function(t) {
            return i(r(t))
        }
    }))
}, function(t, e, n) {
    var r = n(21),
        i = n(45);
    n(25)("keys", (function() {
        return function(t) {
            return i(r(t))
        }
    }))
}, function(t, e, n) {
    n(25)("getOwnPropertyNames", (function() {
        return n(119).f
    }))
}, function(t, e, n) {
    var r = n(7),
        i = n(47).onFreeze;
    n(25)("freeze", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(7),
        i = n(47).onFreeze;
    n(25)("seal", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(7),
        i = n(47).onFreeze;
    n(25)("preventExtensions", (function(t) {
        return function(e) {
            return t && r(e) ? t(i(e)) : e
        }
    }))
}, function(t, e, n) {
    var r = n(7);
    n(25)("isFrozen", (function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    }))
}, function(t, e, n) {
    var r = n(7);
    n(25)("isSealed", (function(t) {
        return function(e) {
            return !r(e) || !!t && t(e)
        }
    }))
}, function(t, e, n) {
    var r = n(7);
    n(25)("isExtensible", (function(t) {
        return function(e) {
            return !!r(e) && (!t || t(e))
        }
    }))
}, function(t, e, n) {
    var r = n(1);
    r(r.S + r.F, "Object", {
        assign: n(198)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(22),
        i = n(45),
        o = n(73),
        a = n(72),
        s = n(21),
        u = n(55),
        c = Object.assign;
    t.exports = !c || n(11)((function() {
        var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach((function(t) {
            e[t] = t
        })), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
    })) ? function(t, e) {
        for (var n = s(t), c = arguments.length, l = 1, f = o.f, d = a.f; c > l;)
            for (var h, p = u(arguments[l++]), v = f ? i(p).concat(f(p)) : i(p), y = v.length, m = 0; y > m;) h = v[m++], r && !d.call(p, h) || (n[h] = p[h]);
        return n
    } : c
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        is: n(120)
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Object", {
        setPrototypeOf: n(89).set
    })
}, function(t, e, n) {
    n(202), n(203), n(204), n(59), n(207), n(208), n(209), n(210), n(212), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(229), n(230), n(231), t.exports = n(17).String
}, function(t, e, n) {
    var r = n(1),
        i = n(56),
        o = String.fromCharCode,
        a = String.fromCodePoint;
    r(r.S + r.F * (!!a && 1 != a.length), "String", {
        fromCodePoint: function(t) {
            for (var e, n = [], r = arguments.length, a = 0; r > a;) {
                if (e = +arguments[a++], i(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                n.push(e < 65536 ? o(e) : o(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
            }
            return n.join("")
        }
    })
}, function(t, e, n) {
    var r = n(1),
        i = n(24),
        o = n(16);
    r(r.S, "String", {
        raw: function(t) {
            for (var e = i(t.raw), n = o(e.length), r = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < r && a.push(String(arguments[s]));
            return a.join("")
        }
    })
}, function(t, e, n) {
    "use strict";
    n(205)("trim", (function(t) {
        return function() {
            return t(this, 3)
        }
    }))
}, function(t, e, n) {
    var r = n(1),
        i = n(34),
        o = n(11),
        a = n(206),
        s = "[" + a + "]",
        u = RegExp("^" + s + s + "*"),
        c = RegExp(s + s + "*$"),
        l = function(t, e, n) {
            var i = {},
                s = o((function() {
                    return !!a[t]() || "​" != "​" [t]()
                })),
                u = i[t] = s ? e(f) : a[t];
            n && (i[n] = u), r(r.P + r.F * s, "String", i)
        },
        f = l.trim = function(t, e) {
            return t = String(i(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
        };
    t.exports = l
}, function(t, e) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(91)(!1);
    r(r.P, "String", {
        codePointAt: function(t) {
            return i(this, t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(16),
        o = n(93),
        a = "".endsWith;
    r(r.P + r.F * n(94)("endsWith"), "String", {
        endsWith: function(t) {
            var e = o(this, t, "endsWith"),
                n = arguments.length > 1 ? arguments[1] : void 0,
                r = i(e.length),
                s = void 0 === n ? r : Math.min(i(n), r),
                u = String(t);
            return a ? a.call(e, u, s) : e.slice(s - u.length, s) === u
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(93);
    r(r.P + r.F * n(94)("includes"), "String", {
        includes: function(t) {
            return !!~i(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "String", {
        repeat: n(211)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(46),
        i = n(34);
    t.exports = function(t) {
        var e = String(i(this)),
            n = "",
            o = r(t);
        if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
        for (; o > 0;
            (o >>>= 1) && (e += e)) 1 & o && (n += e);
        return n
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(16),
        o = n(93),
        a = "".startsWith;
    r(r.P + r.F * n(94)("startsWith"), "String", {
        startsWith: function(t) {
            var e = o(this, t, "startsWith"),
                n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = String(t);
            return a ? a.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    })
}, function(t, e, n) {
    "use strict";
    n(18)("anchor", (function(t) {
        return function(e) {
            return t(this, "a", "name", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("big", (function(t) {
        return function() {
            return t(this, "big", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("blink", (function(t) {
        return function() {
            return t(this, "blink", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("bold", (function(t) {
        return function() {
            return t(this, "b", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("fixed", (function(t) {
        return function() {
            return t(this, "tt", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("fontcolor", (function(t) {
        return function(e) {
            return t(this, "font", "color", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("fontsize", (function(t) {
        return function(e) {
            return t(this, "font", "size", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("italics", (function(t) {
        return function() {
            return t(this, "i", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("link", (function(t) {
        return function(e) {
            return t(this, "a", "href", e)
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("small", (function(t) {
        return function() {
            return t(this, "small", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("strike", (function(t) {
        return function() {
            return t(this, "strike", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("sub", (function(t) {
        return function() {
            return t(this, "sub", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    n(18)("sup", (function(t) {
        return function() {
            return t(this, "sup", "", "")
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(16),
        o = n(95),
        a = n(76);
    n(77)("match", 1, (function(t, e, n, s) {
        return [function(n) {
            var r = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = s(n, t, this);
            if (e.done) return e.value;
            var u = r(t),
                c = String(this);
            if (!u.global) return a(u, c);
            var l = u.unicode;
            u.lastIndex = 0;
            for (var f, d = [], h = 0; null !== (f = a(u, c));) {
                var p = String(f[0]);
                d[h] = p, "" === p && (u.lastIndex = o(c, i(u.lastIndex), l)), h++
            }
            return 0 === h ? null : d
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(96);
    n(1)({
        target: "RegExp",
        proto: !0,
        forced: r !== /./.exec
    }, {
        exec: r
    })
}, function(t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = function() {
        var t = r(this),
            e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(21),
        o = n(16),
        a = n(46),
        s = n(95),
        u = n(76),
        c = Math.max,
        l = Math.min,
        f = Math.floor,
        d = /\$([$&`']|\d\d?|<[^>]*>)/g,
        h = /\$([$&`']|\d\d?)/g;
    n(77)("replace", 2, (function(t, e, n, p) {
        return [function(r, i) {
            var o = t(this),
                a = null == r ? void 0 : r[e];
            return void 0 !== a ? a.call(r, o, i) : n.call(String(o), r, i)
        }, function(t, e) {
            var i = p(n, t, this, e);
            if (i.done) return i.value;
            var f = r(t),
                d = String(this),
                h = "function" == typeof e;
            h || (e = String(e));
            var y = f.global;
            if (y) {
                var m = f.unicode;
                f.lastIndex = 0
            }
            for (var g = [];;) {
                var b = u(f, d);
                if (null === b) break;
                if (g.push(b), !y) break;
                "" === String(b[0]) && (f.lastIndex = s(d, o(f.lastIndex), m))
            }
            for (var w, E = "", _ = 0, P = 0; P < g.length; P++) {
                b = g[P];
                for (var x = String(b[0]), S = c(l(a(b.index), d.length), 0), A = [], O = 1; O < b.length; O++) A.push(void 0 === (w = b[O]) ? w : String(w));
                var T = b.groups;
                if (h) {
                    var j = [x].concat(A, S, d);
                    void 0 !== T && j.push(T);
                    var I = String(e.apply(void 0, j))
                } else I = v(x, d, S, A, T, e);
                S >= _ && (E += d.slice(_, S) + I, _ = S + x.length)
            }
            return E + d.slice(_)
        }];

        function v(t, e, r, o, a, s) {
            var u = r + t.length,
                c = o.length,
                l = h;
            return void 0 !== a && (a = i(a), l = d), n.call(s, l, (function(n, i) {
                var s;
                switch (i.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return t;
                    case "`":
                        return e.slice(0, r);
                    case "'":
                        return e.slice(u);
                    case "<":
                        s = a[i.slice(1, -1)];
                        break;
                    default:
                        var l = +i;
                        if (0 === l) return n;
                        if (l > c) {
                            var d = f(l / 10);
                            return 0 === d ? n : d <= c ? void 0 === o[d - 1] ? i.charAt(1) : o[d - 1] + i.charAt(1) : n
                        }
                        s = o[l - 1]
                }
                return void 0 === s ? "" : s
            }))
        }
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(5),
        i = n(120),
        o = n(76);
    n(77)("search", 1, (function(t, e, n, a) {
        return [function(n) {
            var r = t(this),
                i = null == n ? void 0 : n[e];
            return void 0 !== i ? i.call(n, r) : new RegExp(n)[e](String(r))
        }, function(t) {
            var e = a(n, t, this);
            if (e.done) return e.value;
            var s = r(t),
                u = String(this),
                c = s.lastIndex;
            i(c, 0) || (s.lastIndex = 0);
            var l = o(s, u);
            return i(s.lastIndex, c) || (s.lastIndex = c), null === l ? -1 : l.index
        }]
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(121),
        i = n(5),
        o = n(122),
        a = n(95),
        s = n(16),
        u = n(76),
        c = n(96),
        l = n(11),
        f = Math.min,
        d = [].push,
        h = "length",
        p = !l((function() {
            RegExp(4294967295, "y")
        }));
    n(77)("split", 2, (function(t, e, n, l) {
        var v;
        return v = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[h] || 2 != "ab".split(/(?:ab)*/)[h] || 4 != ".".split(/(.?)(.?)/)[h] || ".".split(/()()/)[h] > 1 || "".split(/.?/)[h] ? function(t, e) {
            var i = String(this);
            if (void 0 === t && 0 === e) return [];
            if (!r(t)) return n.call(i, t, e);
            for (var o, a, s, u = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, v = new RegExp(t.source, l + "g");
                (o = c.call(v, i)) && !((a = v.lastIndex) > f && (u.push(i.slice(f, o.index)), o[h] > 1 && o.index < i[h] && d.apply(u, o.slice(1)), s = o[0][h], f = a, u[h] >= p));) v.lastIndex === o.index && v.lastIndex++;
            return f === i[h] ? !s && v.test("") || u.push("") : u.push(i.slice(f)), u[h] > p ? u.slice(0, p) : u
        } : "0".split(void 0, 0)[h] ? function(t, e) {
            return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function(n, r) {
            var i = t(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : v.call(String(i), n, r)
        }, function(t, e) {
            var r = l(v, t, this, e, v !== n);
            if (r.done) return r.value;
            var c = i(t),
                d = String(this),
                h = o(c, RegExp),
                y = c.unicode,
                m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
                g = new h(p ? c : "^(?:" + c.source + ")", m),
                b = void 0 === e ? 4294967295 : e >>> 0;
            if (0 === b) return [];
            if (0 === d.length) return null === u(g, d) ? [d] : [];
            for (var w = 0, E = 0, _ = []; E < d.length;) {
                g.lastIndex = p ? E : 0;
                var P, x = u(g, p ? d : d.slice(E));
                if (null === x || (P = f(s(g.lastIndex + (p ? 0 : E)), d.length)) === w) E = a(d, E, y);
                else {
                    if (_.push(d.slice(w, E)), _.length === b) return _;
                    for (var S = 1; S <= x.length - 1; S++)
                        if (_.push(x[S]), _.length === b) return _;
                    E = w = P
                }
            }
            return _.push(d.slice(w)), _
        }]
    }))
}, function(t, e, n) {
    n(59), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(252), n(254), n(255), n(256), n(128), t.exports = n(17).Array
}, function(t, e, n) {
    var r = n(1);
    r(r.S, "Array", {
        isArray: n(90)
    })
}, function(t, e, n) {
    "use strict";
    var r = n(33),
        i = n(1),
        o = n(21),
        a = n(123),
        s = n(124),
        u = n(16),
        c = n(125),
        l = n(126);
    i(i.S + i.F * !n(97)((function(t) {
        Array.from(t)
    })), "Array", {
        from: function(t) {
            var e, n, i, f, d = o(t),
                h = "function" == typeof this ? this : Array,
                p = arguments.length,
                v = p > 1 ? arguments[1] : void 0,
                y = void 0 !== v,
                m = 0,
                g = l(d);
            if (y && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), null == g || h == Array && s(g))
                for (n = new h(e = u(d.length)); e > m; m++) c(n, m, y ? v(d[m], m) : d[m]);
            else
                for (f = g.call(d), n = new h; !(i = f.next()).done; m++) c(n, m, y ? a(f, v, [i.value, m], !0) : i.value);
            return n.length = m, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(125);
    r(r.S + r.F * n(11)((function() {
        function t() {}
        return !(Array.of.call(t) instanceof t)
    })), "Array", {
        of: function() {
            for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) i(n, t, arguments[t++]);
            return n.length = e, n
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(24),
        o = [].join;
    r(r.P + r.F * (n(55) != Object || !n(23)(o)), "Array", {
        join: function(t) {
            return o.call(i(this), void 0 === t ? "," : t)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(87),
        o = n(37),
        a = n(56),
        s = n(16),
        u = [].slice;
    r(r.P + r.F * n(11)((function() {
        i && u.call(i)
    })), "Array", {
        slice: function(t, e) {
            var n = s(this.length),
                r = o(this);
            if (e = void 0 === e ? n : e, "Array" == r) return u.call(this, t, e);
            for (var i = a(t, n), c = a(e, n), l = s(c - i), f = new Array(l), d = 0; d < l; d++) f[d] = "String" == r ? this.charAt(i + d) : this[i + d];
            return f
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(29),
        o = n(21),
        a = n(11),
        s = [].sort,
        u = [1, 2, 3];
    r(r.P + r.F * (a((function() {
        u.sort(void 0)
    })) || !a((function() {
        u.sort(null)
    })) || !n(23)(s)), "Array", {
        sort: function(t) {
            return void 0 === t ? s.call(o(this)) : s.call(o(this), i(t))
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(0),
        o = n(23)([].forEach, !0);
    r(r.P + r.F * !o, "Array", {
        forEach: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    var r = n(241);
    t.exports = function(t, e) {
        return new(r(t))(e)
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(90),
        o = n(8)("species");
    t.exports = function(t) {
        var e;
        return i(t) && ("function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0), r(e) && null === (e = e[o]) && (e = void 0)), void 0 === e ? Array : e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(1);
    r(r.P + r.F * !n(23)([].map, !0), "Array", {
        map: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(2);
    r(r.P + r.F * !n(23)([].filter, !0), "Array", {
        filter: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(3);
    r(r.P + r.F * !n(23)([].some, !0), "Array", {
        some: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(4);
    r(r.P + r.F * !n(23)([].every, !0), "Array", {
        every: function(t) {
            return i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(127);
    r(r.P + r.F * !n(23)([].reduce, !0), "Array", {
        reduce: function(t) {
            return i(this, t, arguments.length, arguments[1], !1)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(127);
    r(r.P + r.F * !n(23)([].reduceRight, !0), "Array", {
        reduceRight: function(t) {
            return i(this, t, arguments.length, arguments[1], !0)
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(115)(!1),
        o = [].indexOf,
        a = !!o && 1 / [1].indexOf(1, -0) < 0;
    r(r.P + r.F * (a || !n(23)(o)), "Array", {
        indexOf: function(t) {
            return a ? o.apply(this, arguments) || 0 : i(this, t, arguments[1])
        }
    })
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(24),
        o = n(46),
        a = n(16),
        s = [].lastIndexOf,
        u = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
    r(r.P + r.F * (u || !n(23)(s)), "Array", {
        lastIndexOf: function(t) {
            if (u) return s.apply(this, arguments) || 0;
            var e = i(this),
                n = a(e.length),
                r = n - 1;
            for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
                if (r in e && e[r] === t) return r || 0;
            return -1
        }
    })
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "Array", {
        copyWithin: n(251)
    }), n(61)("copyWithin")
}, function(t, e, n) {
    "use strict";
    var r = n(21),
        i = n(56),
        o = n(16);
    t.exports = [].copyWithin || function(t, e) {
        var n = r(this),
            a = o(n.length),
            s = i(t, a),
            u = i(e, a),
            c = arguments.length > 2 ? arguments[2] : void 0,
            l = Math.min((void 0 === c ? a : i(c, a)) - u, a - s),
            f = 1;
        for (u < s && s < u + l && (f = -1, u += l - 1, s += l - 1); l-- > 0;) u in n ? n[s] = n[u] : delete n[s], s += f, u += f;
        return n
    }
}, function(t, e, n) {
    var r = n(1);
    r(r.P, "Array", {
        fill: n(253)
    }), n(61)("fill")
}, function(t, e, n) {
    "use strict";
    var r = n(21),
        i = n(56),
        o = n(16);
    t.exports = function(t) {
        for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), u = a > 2 ? arguments[2] : void 0, c = void 0 === u ? n : i(u, n); c > s;) e[s++] = t;
        return e
    }
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(5),
        o = !0;
    "find" in [] && Array(1).find((function() {
        o = !1
    })), r(r.P + r.F * o, "Array", {
        find: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(61)("find")
}, function(t, e, n) {
    "use strict";
    var r = n(1),
        i = n(39)(6),
        o = "findIndex",
        a = !0;
    o in [] && Array(1)[o]((function() {
        a = !1
    })), r(r.P + r.F * a, "Array", {
        findIndex: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), n(61)(o)
}, function(t, e, n) {
    n(98)("Array")
}, function(t, e, n) {
    n(74), n(59), n(99), n(258), t.exports = n(17).Promise
}, function(t, e, n) {
    "use strict";
    var r, i, o, a, s = n(53),
        u = n(10),
        c = n(33),
        l = n(75),
        f = n(1),
        d = n(7),
        h = n(29),
        p = n(100),
        v = n(101),
        y = n(122),
        m = n(130).set,
        g = n(259)(),
        b = n(131),
        w = n(260),
        E = n(261),
        _ = n(262),
        P = u.TypeError,
        x = u.process,
        S = x && x.versions,
        A = S && S.v8 || "",
        O = u.Promise,
        T = "process" == l(x),
        j = function() {},
        I = i = b.f,
        C = !! function() {
            try {
                var t = O.resolve(1),
                    e = (t.constructor = {})[n(8)("species")] = function(t) {
                        t(j, j)
                    };
                return (T || "function" == typeof PromiseRejectionEvent) && t.then(j) instanceof e && 0 !== A.indexOf("6.6") && -1 === E.indexOf("Chrome/66")
            } catch (t) {}
        }(),
        L = function(t) {
            var e;
            return !(!d(t) || "function" != typeof(e = t.then)) && e
        },
        k = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                g((function() {
                    for (var r = t._v, i = 1 == t._s, o = 0, a = function(e) {
                            var n, o, a, s = i ? e.ok : e.fail,
                                u = e.resolve,
                                c = e.reject,
                                l = e.domain;
                            try {
                                s ? (i || (2 == t._h && F(t), t._h = 1), !0 === s ? n = r : (l && l.enter(), n = s(r), l && (l.exit(), a = !0)), n === e.promise ? c(P("Promise-chain cycle")) : (o = L(n)) ? o.call(n, u, c) : u(n)) : c(r)
                            } catch (t) {
                                l && !a && l.exit(), c(t)
                            }
                        }; n.length > o;) a(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && R(t)
                }))
            }
        },
        R = function(t) {
            m.call(u, (function() {
                var e, n, r, i = t._v,
                    o = M(t);
                if (o && (e = w((function() {
                        T ? x.emit("unhandledRejection", i, t) : (n = u.onunhandledrejection) ? n({
                            promise: t,
                            reason: i
                        }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", i)
                    })), t._h = T || M(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v
            }))
        },
        M = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length
        },
        F = function(t) {
            m.call(u, (function() {
                var e;
                T ? x.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                })
            }))
        },
        B = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), k(e, !0))
        },
        D = function(t) {
            var e, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === t) throw P("Promise can't be resolved itself");
                    (e = L(t)) ? g((function() {
                        var r = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            e.call(t, c(D, r, 1), c(B, r, 1))
                        } catch (t) {
                            B.call(r, t)
                        }
                    })): (n._v = t, n._s = 1, k(n, !1))
                } catch (t) {
                    B.call({
                        _w: n,
                        _d: !1
                    }, t)
                }
            }
        };
    C || (O = function(t) {
        p(this, O, "Promise", "_h"), h(t), r.call(this);
        try {
            t(c(D, this, 1), c(B, this, 1))
        } catch (t) {
            B.call(this, t)
        }
    }, (r = function(t) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = n(102)(O.prototype, {
        then: function(t, e) {
            var n = I(y(this, O));
            return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = T ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && k(this, !1), n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }), o = function() {
        var t = new r;
        this.promise = t, this.resolve = c(D, t, 1), this.reject = c(B, t, 1)
    }, b.f = I = function(t) {
        return t === O || t === a ? new o(t) : i(t)
    }), f(f.G + f.W + f.F * !C, {
        Promise: O
    }), n(57)(O, "Promise"), n(98)("Promise"), a = n(17).Promise, f(f.S + f.F * !C, "Promise", {
        reject: function(t) {
            var e = I(this);
            return (0, e.reject)(t), e.promise
        }
    }), f(f.S + f.F * (s || !C), "Promise", {
        resolve: function(t) {
            return _(s && this === a ? O : this, t)
        }
    }), f(f.S + f.F * !(C && n(97)((function(t) {
        O.all(t).catch(j)
    }))), "Promise", {
        all: function(t) {
            var e = this,
                n = I(e),
                r = n.resolve,
                i = n.reject,
                o = w((function() {
                    var n = [],
                        o = 0,
                        a = 1;
                    v(t, !1, (function(t) {
                        var s = o++,
                            u = !1;
                        n.push(void 0), a++, e.resolve(t).then((function(t) {
                            u || (u = !0, n[s] = t, --a || r(n))
                        }), i)
                    })), --a || r(n)
                }));
            return o.e && i(o.v), n.promise
        },
        race: function(t) {
            var e = this,
                n = I(e),
                r = n.reject,
                i = w((function() {
                    v(t, !1, (function(t) {
                        e.resolve(t).then(n.resolve, r)
                    }))
                }));
            return i.e && r(i.v), n.promise
        }
    })
}, function(t, e, n) {
    var r = n(10),
        i = n(130).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        a = r.process,
        s = r.Promise,
        u = "process" == n(37)(a);
    t.exports = function() {
        var t, e, n, c = function() {
            var r, i;
            for (u && (r = a.domain) && r.exit(); t;) {
                i = t.fn, t = t.next;
                try {
                    i()
                } catch (r) {
                    throw t ? n() : e = void 0, r
                }
            }
            e = void 0, r && r.enter()
        };
        if (u) n = function() {
            a.nextTick(c)
        };
        else if (!o || r.navigator && r.navigator.standalone)
            if (s && s.resolve) {
                var l = s.resolve(void 0);
                n = function() {
                    l.then(c)
                }
            } else n = function() {
                i.call(r, c)
            };
        else {
            var f = !0,
                d = document.createTextNode("");
            new o(c).observe(d, {
                characterData: !0
            }), n = function() {
                d.data = f = !f
            }
        }
        return function(r) {
            var i = {
                fn: r,
                next: void 0
            };
            e && (e.next = i), t || (t = i, n()), e = i
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        try {
            return {
                e: !1,
                v: t()
            }
        } catch (t) {
            return {
                e: !0,
                v: t
            }
        }
    }
}, function(t, e, n) {
    var r = n(10).navigator;
    t.exports = r && r.userAgent || ""
}, function(t, e, n) {
    var r = n(5),
        i = n(7),
        o = n(131);
    t.exports = function(t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function(t, e, n) {
    n(74), n(59), n(99), n(264), t.exports = n(17).Map
}, function(t, e, n) {
    "use strict";
    var r = n(132),
        i = n(103);
    t.exports = n(133)("Map", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        get: function(t) {
            var e = r.getEntry(i(this, "Map"), t);
            return e && e.v
        },
        set: function(t, e) {
            return r.def(i(this, "Map"), 0 === t ? 0 : t, e)
        }
    }, r, !0)
}, function(t, e, n) {
    var r = n(7),
        i = n(89).set;
    t.exports = function(t, e, n) {
        var o, a = e.constructor;
        return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(t, o), t
    }
}, function(t, e, n) {
    n(74), n(59), n(99), n(267), t.exports = n(17).Set
}, function(t, e, n) {
    "use strict";
    var r = n(132),
        i = n(103);
    t.exports = n(133)("Set", (function(t) {
        return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }), {
        add: function(t) {
            return r.def(i(this, "Set"), t = 0 === t ? 0 : t, t)
        }
    }, r)
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(40));
    ! function() {
        var t;

        function e() {
            function e() {
                n.C = !0, n.b(s.childNodes)
            }
            var n = this;
            this.a = new Map, this.j = new Map, this.h = new Map, this.m = new Set, this.v = new MutationObserver(this.A.bind(this)), this.f = null, this.B = new Set, this.enableFlush = !0, this.C = !1, this.G = this.c(s), window.HTMLImports ? window.HTMLImports.whenReady(e) : e(), t = this
        }

        function n() {
            return t
        }

        function i(t) {
            if (!/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t) || -1 !== c.indexOf(t)) return Error("The element name '" + t + "' is not valid.")
        }

        function o(t, e, r, i) {
            var o = n();
            return t = f.call(t, e, r), (e = o.a.get(e.toLowerCase())) && o.D(t, e, i), o.c(t), t
        }

        function a(t, e, r, i) {
            e = e.toLowerCase();
            var o = t.getAttribute(e);
            i.call(t, e, r), 1 == t.__$CE_upgraded && (r = (i = n().a.get(t.localName)).w, (i = i.i) && 0 <= r.indexOf(e) && ((r = t.getAttribute(e)) !== o && i.call(t, e, o, r, null)))
        }
        var s = document,
            u = window;
        if (!n() || (n().g = function() {}, n().forcePolyfill)) {
            var c = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ");
            e.prototype.K = function(t, e) {
                function n(t) {
                    var e = a[t];
                    if (void 0 !== e && "function" != typeof e) throw Error(o + " '" + t + "' is not a Function");
                    return e
                }
                if ("function" != typeof e) throw new TypeError("constructor must be a Constructor");
                if (u = i(t)) throw u;
                if (this.a.has(t)) throw Error("An element with name '" + t + "' is already defined");
                if (this.j.has(e)) throw Error("Definition failed for '" + t + "': The constructor is already used.");
                var o = t,
                    a = e.prototype;
                if ("object" !== (0, r.default)(a)) throw new TypeError("Definition failed for '" + t + "': constructor.prototype must be an object");
                var u = n("connectedCallback"),
                    c = n("disconnectedCallback"),
                    l = n("attributeChangedCallback");
                this.a.set(o, {
                    name: t,
                    localName: o,
                    constructor: e,
                    o: u,
                    s: c,
                    i: l,
                    w: l && e.observedAttributes || []
                }), this.j.set(e, o), this.C && this.b(s.childNodes), (t = this.h.get(o)) && (t.resolve(void 0), this.h.delete(o))
            }, e.prototype.get = function(t) {
                return (t = this.a.get(t)) ? t.constructor : void 0
            }, e.prototype.L = function(t) {
                if (r = i(t)) return Promise.reject(r);
                if (this.a.has(t)) return Promise.resolve();
                if (r = this.h.get(t)) return r.M;
                var e, n = new Promise((function(t) {
                        e = t
                    })),
                    r = {
                        M: n,
                        resolve: e
                    };
                return this.h.set(t, r), n
            }, e.prototype.g = function() {
                this.enableFlush && (this.l(this.G.takeRecords()), this.A(this.v.takeRecords()), this.m.forEach((function(t) {
                    this.l(t.takeRecords())
                }), this))
            }, e.prototype.I = function(t) {
                this.f = t
            }, e.prototype.c = function(t) {
                return null != t.__$CE_observer || (t.__$CE_observer = new MutationObserver(this.l.bind(this)), t.__$CE_observer.observe(t, {
                    childList: !0,
                    subtree: !0
                }), this.enableFlush && this.m.add(t.__$CE_observer)), t.__$CE_observer
            }, e.prototype.J = function(t) {
                null != t.__$CE_observer && (t.__$CE_observer.disconnect(), this.enableFlush && this.m.delete(t.__$CE_observer), t.__$CE_observer = null)
            }, e.prototype.l = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if ("childList" === n.type) {
                        var r = n.removedNodes;
                        this.b(n.addedNodes), this.H(r)
                    }
                }
            }, e.prototype.b = function(t, e) {
                e = e || new Set;
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (r.nodeType === Node.ELEMENT_NODE) {
                        this.J(r), r = s.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, null, !1);
                        do {
                            this.F(r.currentNode, e)
                        } while (r.nextNode())
                    }
                }
            }, e.prototype.F = function(t, e) {
                if (!e.has(t)) {
                    e.add(t);
                    var n = this.a.get(t.localName);
                    if (n) {
                        var r;
                        if (t.__$CE_upgraded || this.D(t, n, !0), r = t.__$CE_upgraded && !t.__$CE_attached) t: {
                            r = t;do {
                                if (r.__$CE_attached || r.nodeType === Node.DOCUMENT_NODE) {
                                    r = !0;
                                    break t
                                }
                                r = r.parentNode || r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host
                            } while (r);r = !1
                        }
                        r && (t.__$CE_attached = !0, n.o && n.o.call(t))
                    }
                    t.shadowRoot && this.b(t.shadowRoot.childNodes, e), "LINK" === t.tagName && t.rel && -1 !== t.rel.toLowerCase().split(" ").indexOf("import") && this.u(t, e)
                }
            }, e.prototype.u = function(t, e) {
                var n = t.import;
                if (n) e.has(n) || (e.add(n), n.__$CE_observer || this.c(n), this.b(n.childNodes, e));
                else if (e = t.href, !this.B.has(e)) {
                    this.B.add(e);
                    var r = this;
                    t.addEventListener("load", (function e() {
                        t.removeEventListener("load", e), t.import.__$CE_observer || r.c(t.import), r.b(t.import.childNodes)
                    }))
                }
            }, e.prototype.H = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.nodeType === Node.ELEMENT_NODE) {
                        this.c(n), n = s.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, null, !1);
                        do {
                            var r = n.currentNode;
                            if (r.__$CE_upgraded && r.__$CE_attached) {
                                r.__$CE_attached = !1;
                                var i = this.a.get(r.localName);
                                i && i.s && i.s.call(r)
                            }
                        } while (n.nextNode())
                    }
                }
            }, e.prototype.D = function(t, e, n) {
                if (t.__proto__ = e.constructor.prototype, n && (this.I(t), new e.constructor, t.__$CE_upgraded = !0, console.assert(!this.f)), n = e.w, (e = e.i) && 0 < n.length) {
                    this.v.observe(t, {
                        attributes: !0,
                        attributeOldValue: !0,
                        attributeFilter: n
                    });
                    for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (t.hasAttribute(i)) {
                            var o = t.getAttribute(i);
                            e.call(t, i, null, o, null)
                        }
                    }
                }
            }, e.prototype.A = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if ("attributes" === n.type) {
                        var r = n.target,
                            i = this.a.get(r.localName),
                            o = n.attributeName,
                            a = n.oldValue,
                            s = r.getAttribute(o);
                        s !== a && i.i.call(r, o, a, s, n.attributeNamespace)
                    }
                }
            }, !1 !== (Object.getOwnPropertyDescriptor(window, "CustomElementRegistry") || {}).writable && (window.CustomElementRegistry = e), e.prototype.define = e.prototype.K, e.prototype.get = e.prototype.get, e.prototype.whenDefined = e.prototype.L, e.prototype.flush = e.prototype.g, e.prototype.polyfilled = !0, e.prototype._observeRoot = e.prototype.c, e.prototype._addImport = e.prototype.u;
            var l = u.HTMLElement;
            u.HTMLElement = function() {
                var t = n();
                if (t.f) {
                    var e = t.f;
                    return t.f = null, e
                }
                if (this.constructor) return t = t.j.get(this.constructor), o(s, t, void 0, !1);
                throw Error("Unknown constructor. Did you call customElements.define()?")
            }, u.HTMLElement.prototype = Object.create(l.prototype, {
                constructor: {
                    value: u.HTMLElement,
                    configurable: !0,
                    writable: !0
                }
            });
            var f = s.createElement;
            s.createElement = function(t, e) {
                return o(s, t, e, !0)
            };
            var d = s.createElementNS;
            s.createElementNS = function(t, e) {
                return "http://www.w3.org/1999/xhtml" === t ? s.createElement(e) : d.call(s, t, e)
            };
            var h = Element.prototype.attachShadow;
            h && Object.defineProperty(Element.prototype, "attachShadow", {
                value: function(t) {
                    return t = h.call(this, t), n().c(t), t
                }
            });
            var p = s.importNode;
            s.importNode = function(t, e) {
                return t = p.call(s, t, e), n().b(t.nodeType === Node.ELEMENT_NODE ? [t] : t.childNodes), t
            };
            var v = Element.prototype.setAttribute;
            Element.prototype.setAttribute = function(t, e) {
                a(this, t, e, v)
            };
            var y = Element.prototype.removeAttribute;
            Element.prototype.removeAttribute = function(t) {
                a(this, t, null, y)
            }, Object.defineProperty(window, "customElements", {
                value: new e,
                configurable: !0,
                enumerable: !0
            }), window.CustomElements = {
                takeRecords: function() {
                    n().g && n().g()
                }
            }
        }
    }()
}, function(t, e) {
    /**
     * @license
     * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    (() => {
        let t = HTMLElement;
        window.HTMLElement = function() {
            let e = new.target || this.constructor;
            return Reflect.construct(t, [], e)
        }, HTMLElement.prototype = Object.create(t.prototype, {
            constructor: {
                value: HTMLElement,
                configurable: !0,
                writable: !0
            }
        })
    })()
}, function(t, e, n) {
    "use strict";
    window.performance = window.performance || !1, [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function(t) {
        Object.prototype.hasOwnProperty.call(t, "remove") || Object.defineProperty(t, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                this.parentNode.removeChild(this)
            }
        })
    })), [HTMLElement.prototype].forEach((function(t) {
        if (!Object.prototype.hasOwnProperty.call(t, "addEventListener")) {
            var e = t.addEventListener;
            Object.defineProperty(t, "addEventListener", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e.apply(this, n)
                }
            })
        }
    })), [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach((function(t) {
        Object.prototype.hasOwnProperty.call(t, "append") || Object.defineProperty(t, "append", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function() {
                var t = Array.prototype.slice.call(arguments),
                    e = document.createDocumentFragment();
                t.forEach((function(t) {
                    var n = t instanceof Node;
                    e.appendChild(n ? t : document.createTextNode(String(t)))
                })), this.appendChild(e)
            }
        })
    }))
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "Headers", (function() {
        return p
    })), n.d(e, "Request", (function() {
        return E
    })), n.d(e, "Response", (function() {
        return P
    })), n.d(e, "DOMException", (function() {
        return S
    })), n.d(e, "fetch", (function() {
        return A
    }));
    var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== r && r,
        i = "URLSearchParams" in r,
        o = "Symbol" in r && "iterator" in Symbol,
        a = "FileReader" in r && "Blob" in r && function() {
            try {
                return new Blob, !0
            } catch (t) {
                return !1
            }
        }(),
        s = "FormData" in r,
        u = "ArrayBuffer" in r;
    if (u) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
        l = ArrayBuffer.isView || function(t) {
            return t && c.indexOf(Object.prototype.toString.call(t)) > -1
        };

    function f(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase()
    }

    function d(t) {
        return "string" != typeof t && (t = String(t)), t
    }

    function h(t) {
        var e = {
            next: function() {
                var e = t.shift();
                return {
                    done: void 0 === e,
                    value: e
                }
            }
        };
        return o && (e[Symbol.iterator] = function() {
            return e
        }), e
    }

    function p(t) {
        this.map = {}, t instanceof p ? t.forEach((function(t, e) {
            this.append(e, t)
        }), this) : Array.isArray(t) ? t.forEach((function(t) {
            this.append(t[0], t[1])
        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
            this.append(e, t[e])
        }), this)
    }

    function v(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0
    }

    function y(t) {
        return new Promise((function(e, n) {
            t.onload = function() {
                e(t.result)
            }, t.onerror = function() {
                n(t.error)
            }
        }))
    }

    function m(t) {
        var e = new FileReader,
            n = y(e);
        return e.readAsArrayBuffer(t), n
    }

    function g(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer
    }

    function b() {
        return this.bodyUsed = !1, this._initBody = function(t) {
            var e;
            this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : a && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : s && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : i && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : u && a && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = g(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u && (ArrayBuffer.prototype.isPrototypeOf(t) || l(t)) ? this._bodyArrayBuffer = g(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
        }, a && (this.blob = function() {
            var t = v(this);
            if (t) return t;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
            return Promise.resolve(new Blob([this._bodyText]))
        }, this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
                var t = v(this);
                return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
            }
            return this.blob().then(m)
        }), this.text = function() {
            var t, e, n, r = v(this);
            if (r) return r;
            if (this._bodyBlob) return t = this._bodyBlob, e = new FileReader, n = y(e), e.readAsText(t), n;
            if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                return n.join("")
            }(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText)
        }, s && (this.formData = function() {
            return this.text().then(_)
        }), this.json = function() {
            return this.text().then(JSON.parse)
        }, this
    }
    p.prototype.append = function(t, e) {
        t = f(t), e = d(e);
        var n = this.map[t];
        this.map[t] = n ? n + ", " + e : e
    }, p.prototype.delete = function(t) {
        delete this.map[f(t)]
    }, p.prototype.get = function(t) {
        return t = f(t), this.has(t) ? this.map[t] : null
    }, p.prototype.has = function(t) {
        return this.map.hasOwnProperty(f(t))
    }, p.prototype.set = function(t, e) {
        this.map[f(t)] = d(e)
    }, p.prototype.forEach = function(t, e) {
        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
    }, p.prototype.keys = function() {
        var t = [];
        return this.forEach((function(e, n) {
            t.push(n)
        })), h(t)
    }, p.prototype.values = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e)
        })), h(t)
    }, p.prototype.entries = function() {
        var t = [];
        return this.forEach((function(e, n) {
            t.push([n, e])
        })), h(t)
    }, o && (p.prototype[Symbol.iterator] = p.prototype.entries);
    var w = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

    function E(t, e) {
        if (!(this instanceof E)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n, r, i = (e = e || {}).body;
        if (t instanceof E) {
            if (t.bodyUsed) throw new TypeError("Already read");
            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new p(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, i || null == t._bodyInit || (i = t._bodyInit, t.bodyUsed = !0)
        } else this.url = String(t);
        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new p(e.headers)), this.method = (n = e.method || this.method || "GET", r = n.toUpperCase(), w.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(i), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== e.cache && "no-cache" !== e.cache)) {
            var o = /([?&])_=[^&]*/;
            if (o.test(this.url)) this.url = this.url.replace(o, "$1_=" + (new Date).getTime());
            else {
                this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
            }
        }
    }

    function _(t) {
        var e = new FormData;
        return t.trim().split("&").forEach((function(t) {
            if (t) {
                var n = t.split("="),
                    r = n.shift().replace(/\+/g, " "),
                    i = n.join("=").replace(/\+/g, " ");
                e.append(decodeURIComponent(r), decodeURIComponent(i))
            }
        })), e
    }

    function P(t, e) {
        if (!(this instanceof P)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "", this.headers = new p(e.headers), this.url = e.url || "", this._initBody(t)
    }
    E.prototype.clone = function() {
        return new E(this, {
            body: this._bodyInit
        })
    }, b.call(E.prototype), b.call(P.prototype), P.prototype.clone = function() {
        return new P(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new p(this.headers),
            url: this.url
        })
    }, P.error = function() {
        var t = new P(null, {
            status: 0,
            statusText: ""
        });
        return t.type = "error", t
    };
    var x = [301, 302, 303, 307, 308];
    P.redirect = function(t, e) {
        if (-1 === x.indexOf(e)) throw new RangeError("Invalid status code");
        return new P(null, {
            status: e,
            headers: {
                location: t
            }
        })
    };
    var S = r.DOMException;
    try {
        new S
    } catch (t) {
        (S = function(t, e) {
            this.message = t, this.name = e;
            var n = Error(t);
            this.stack = n.stack
        }).prototype = Object.create(Error.prototype), S.prototype.constructor = S
    }

    function A(t, e) {
        return new Promise((function(n, i) {
            var o = new E(t, e);
            if (o.signal && o.signal.aborted) return i(new S("Aborted", "AbortError"));
            var s = new XMLHttpRequest;

            function c() {
                s.abort()
            }
            s.onload = function() {
                var t, e, r = {
                    status: s.status,
                    statusText: s.statusText,
                    headers: (t = s.getAllResponseHeaders() || "", e = new p, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                        var n = t.split(":"),
                            r = n.shift().trim();
                        if (r) {
                            var i = n.join(":").trim();
                            e.append(r, i)
                        }
                    })), e)
                };
                r.url = "responseURL" in s ? s.responseURL : r.headers.get("X-Request-URL");
                var i = "response" in s ? s.response : s.responseText;
                setTimeout((function() {
                    n(new P(i, r))
                }), 0)
            }, s.onerror = function() {
                setTimeout((function() {
                    i(new TypeError("Network request failed"))
                }), 0)
            }, s.ontimeout = function() {
                setTimeout((function() {
                    i(new TypeError("Network request failed"))
                }), 0)
            }, s.onabort = function() {
                setTimeout((function() {
                    i(new S("Aborted", "AbortError"))
                }), 0)
            }, s.open(o.method, function(t) {
                try {
                    return "" === t && r.location.href ? r.location.href : t
                } catch (e) {
                    return t
                }
            }(o.url), !0), "include" === o.credentials ? s.withCredentials = !0 : "omit" === o.credentials && (s.withCredentials = !1), "responseType" in s && (a ? s.responseType = "blob" : u && o.headers.get("Content-Type") && -1 !== o.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")), !e || "object" != typeof e.headers || e.headers instanceof p ? o.headers.forEach((function(t, e) {
                s.setRequestHeader(e, t)
            })) : Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                s.setRequestHeader(t, d(e.headers[t]))
            })), o.signal && (o.signal.addEventListener("abort", c), s.onreadystatechange = function() {
                4 === s.readyState && o.signal.removeEventListener("abort", c)
            }), s.send(void 0 === o._bodyInit ? null : o._bodyInit)
        }))
    }
    A.polyfill = !0, r.fetch || (r.fetch = A, r.Headers = p, r.Request = E, r.Response = P)
}, function(t, e, n) {
    "use strict";
    var r = n(3);

    function i() {
        var t = document.createElement("a");
        t.id = "borderTab";
        var e = document.createElement("div");
        e.id = "teconsent", t.appendChild(e), document.body.appendChild(t);
        var n = document.createElement("div");
        n.id = "consent_blackbar", document.body.appendChild(n);
        var i = r.isEurope ? "//consent.trustarc.com/notice?domain=forbes_iab2.com&c=teconsent&js=nj&noticeType=bb&text=true&gtm=1" : "//consent.trustarc.com/notice?domain=forbes.com&js=nj&noticeType=bb&text=true&c=teconsent",
            o = document.createElement("script");
        o.src = i, e.appendChild(o)
    }
    r.isEurope && (window.trustarcStubPreloaded = !0, function() {
        for (var t, e = window, n = []; e;) {
            try {
                if (e.frames.__tcfapiLocator) {
                    t = e;
                    break
                }
            } catch (t) {}
            if (e === window.top) break;
            e = e.parent
        }
        t || (function t() {
            var n = e.document,
                r = !!e.frames.__tcfapiLocator;
            if (!r)
                if (n.body) {
                    var i = n.createElement("iframe");
                    i.name = "__tcfapiLocator", i.style.display = "none", i.id = "__tcfapiTrustarc", i.src = "https://trustarc.mgr.consensu.org/asset/cmpcookie.v2.html", n.body.appendChild(i)
                } else setTimeout(t, 5);
            return !r
        }(), e.__tcfapi = function() {
            var t, e = arguments;
            if (!e.length) return n;
            if ("setGdprApplies" === e[0]) e.length > 3 && 2 === parseInt(e[1], 10) && "boolean" == typeof e[3] && (t = e[3], "function" == typeof e[2] && e[2]("set", !0));
            else if ("ping" === e[0]) {
                var r = {
                    gdprApplies: t,
                    cmpLoaded: !1,
                    cmpStatus: "stubCMP",
                    apiVersion: "2.0"
                };
                "function" == typeof e[2] && e[2](r, !0)
            } else n.push(e)
        }, e.addEventListener("message", (function(t) {
            var e = "string" == typeof t.data,
                n = {};
            try {
                n = e ? JSON.parse(t.data) : t.data
            } catch (t) {}
            var r = n.__tcfapiCall;
            r && window.__tcfapi(r.command, r.version, (function(n, i) {
                var o = {
                    __tcfapiReturn: {
                        returnValue: n,
                        success: i,
                        callId: r.callId
                    }
                };
                e && (o = JSON.stringify(o)), t.source.postMessage(o, "*")
            }), r.parameter)
        }), !1))
    }()), document.addEventListener("DOMContentLoaded", (function() {
        var t = -1 !== document.cookie.indexOf("notice_gdpr_prefs="),
            e = -1 !== document.cookie.indexOf("notice_gdpr_prefs=0,1,2");
        r.isEurope ? e || i() : t && !e && i()
    }));
    var o = {
            PrivacyManagerAPI: {
                action: "getConsent",
                timestamp: (new Date).getTime(),
                self: window.location.host
            }
        },
        a = JSON.stringify(o);
    window.top.postMessage(a, "*"), window.addEventListener("message", (function(t) {
        try {
            var e = JSON.parse(t.data);
            e && "preference_manager" === e.source && "submit_preferences" === e.message && window.location.reload()
        } catch (t) {}
    }), !1)
}, , , , function(t, e, n) {
    "use strict";
    var r = n(63);
    (0, r.handleAdBlockDependentAction)((function(t) {
        t && document.querySelectorAll("fbs-video").forEach((function(t) {
            t.removeAttribute("autoplay"), t.pause()
        }))
    })), (0, r.handleAdBlockDependentAction)((function(t) {
        t && Array.from(document.querySelectorAll(".medianet, .fbs-ad--artbottom-wrapper")).forEach((function(t) {
            "on" === (0, r.getAbParam)() && t.parentElement.classList.replace("adblock-off", "adblock-on")
        }))
    }))
}, function(t, e, n) {
    "use strict";
    var r = n(3);
    document.addEventListener("DOMContentLoaded", (function() {
        r.serverData.isE2E && (window.isE2EBootstrapped = !0)
    }))
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
    "use strict";

    function r(t) {
        window.performance && performance.mark && performance.mark("Fbs Video: " + t)
    }
    n.r(e);
    var i, o = (i = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
        a = function(t, e, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function u(t) {
                    t.done ? i(t.value) : new n((function(e) {
                        e(t.value)
                    })).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        },
        s = function(t, e) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = e.call(t, a)
                        } catch (t) {
                            o = [6, t], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        },
        u = function(t) {
            function e() {
                var e, n, r, i, o, a = t.call(this) || this;
                return a.init = !1, a.attributeHasChanged = !1, a.videoService = window["fbs-video"], a.windowBlurEventListener = a.handleWindowBlur.bind(a), a.windowFocusEventListener = a.handleWindowFocus.bind(a), a.windowScrollEventListener = (e = a.handleWindowScroll, r = a, (n = 50) || (n = 100), function() {
                    for (var t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                    var s = r || {},
                        u = +new Date;
                    if (i && u < i + n) {
                        clearTimeout(o);
                        var c = n + u + 1;
                        o = setTimeout((function() {
                            i = u, s.deferred = !0, e.apply(s, t)
                        }), c - i)
                    } else i = u, e.apply(s, t)
                }), a.videoPlayingEventListener = a.handleVideoPlaying.bind(a), a.closeButtonTriggered = !1, a
            }
            return o(e, t), Object.defineProperty(e, "observedAttributes", {
                get: function() {
                    return ["video-id", "player-id", "autoplay", "report-autoplay", "rendition-selection", "key-value-string", "muted", "ad-unit-path", "ads-disabled", "show-overlay"]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "playing", {
                get: function() {
                    return this.adPlaying || this.videoPlaying || !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "videoPlaying", {
                get: function() {
                    return this.videoPlayer && !this.videoPlayer.paused() && this.videoPlayer.currentTime() !== this.videoPlayer.duration() || !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "adPlaying", {
                get: function() {
                    return !!this.adPlayer && (!this.adPlayer.paused() && this.adPlayer.currentTime() !== this.adPlayer.duration())
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "adCompleted", {
                get: function() {
                    return !this.adPlayer || !this.adPlayer.paused() && this.adPlayer.currentTime() === this.adPlayer.duration()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "duration", {
                get: function() {
                    return this.videoPlayer && this.videoPlayer.mediainfo && this.videoPlayer.mediainfo.duration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pauseAd", {
                get: function() {
                    return this.hasAttribute("pause-ad") && "false" !== this.getAttribute("pause-ad")
                },
                set: function(t) {
                    t ? this.setAttribute("pause-ad", "") : this.removeAttribute("pause-ad")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "videoId", {
                get: function() {
                    return this.getAttribute("video-id")
                },
                set: function(t) {
                    t && this.setAttribute("video-id", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "showOverlay", {
                get: function() {
                    return "true" === this.getAttribute("show-overlay")
                },
                set: function(t) {
                    t && this.setAttribute("show-overlay", "" + t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "adsDisabled", {
                get: function() {
                    return this.hasAttribute("ads-disabled") && "false" !== this.getAttribute("ads-disabled")
                },
                set: function(t) {
                    t ? this.setAttribute("ads-disabled", "") : this.removeAttribute("ads-disabled")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "adUnitPath", {
                get: function() {
                    return this.getAttribute("ad-unit-path") || this.getAdUnitPath()
                },
                set: function(t) {
                    t && this.setAttribute("ad-unit-path", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "playerId", {
                get: function() {
                    return this.getAttribute("player-id")
                },
                set: function(t) {
                    t && this.setAttribute("player-id", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "playlistId", {
                get: function() {
                    return this.getAttribute("playlist-id")
                },
                set: function(t) {
                    t && this.setAttribute("playlist-id", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "playlistVideoId", {
                get: function() {
                    return this.getAttribute("playlist-video-id")
                },
                set: function(t) {
                    t && this.setAttribute("playlist-video-id", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "autoplay", {
                get: function() {
                    return this.hasAttribute("autoplay") && "false" !== this.getAttribute("autoplay")
                },
                set: function(t) {
                    t ? this.setAttribute("autoplay", "") : this.removeAttribute("autoplay")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "muted", {
                get: function() {
                    return this.hasAttribute("muted") && "false" !== this.getAttribute("muted")
                },
                set: function(t) {
                    t ? this.setAttribute("muted", "") : this.removeAttribute("muted")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "secretAutoplay", {
                get: function() {
                    return this.hasAttribute("secret-autoplay") && "false" !== this.getAttribute("secret-autoplay")
                },
                set: function(t) {
                    t ? this.setAttribute("secret-autoplay", "") : this.removeAttribute("secret-autoplay")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "renditionSelection", {
                get: function() {
                    return this.getAttribute("rendition-selection")
                },
                set: function(t) {
                    t && this.setAttribute("rendition-selection", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "keyValueString", {
                get: function() {
                    return this.getAttribute("key-value-string")
                },
                set: function(t) {
                    t && this.setAttribute("key-value-string", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "attrsSnapshot", {
                get: function() {
                    return {
                        videoId: this.videoId,
                        playerId: this.playerId,
                        playlistId: this.playlistId,
                        autoplay: this.autoplay,
                        secretAutoplay: this.secretAutoplay,
                        renditionSelection: this.renditionSelection,
                        keyValueString: this.keyValueString,
                        videoElementId: this.videoElementId,
                        adUnitPath: this.adUnitPath,
                        adsDisabled: this.adsDisabled,
                        showOverlay: this.showOverlay
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "adPlayer", {
                get: function() {
                    if (this.videoPlayer && this.videoPlayer.ima3 && !(this.videoPlayer.ima3 instanceof Function) && this.videoPlayer.ima3.adsManager) return this.videoPlayer.ima3.adPlayer
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.attributeChangedCallback = function(t, e, n) {
                this.attributeHasChanged = !0, this.init && "video-id" === t && this.changeVideo(n)
            }, e.prototype.connectedCallback = function() {
                var t = this;
                this.isFocused = document.hasFocus(), this.isVideoInView = this.checkIsVideoInView();
                var e = setInterval((function() {
                    return a(t, void 0, void 0, (function() {
                        var t, n = this;
                        return s(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return this.attributeHasChanged ? [3, 2] : (clearInterval(e), this.videoElementId = this.attrsSnapshot.videoElementId = this.videoService.generateId(), this.insertVideoElement(), this.insertCloseButton(), [4, this.videoService.init(this.attrsSnapshot)]);
                                case 1:
                                    return t = r.sent(), this.init = !0, this.playerData = t, this.videoPlayer = t.player, this.videoElement.title = this.videoPlayer.mediainfo.name, this.attachPlayEventListeners(), this.attachCustomSocialOptions(), this.dispatchEvent(new CustomEvent("init")), this.resetDefaultBreakpointClass(), this.autoplay && (setTimeout((function() {
                                        n.playPromise = n.videoPlayer.play()
                                    })), this.subscribeForHiddenPause()), this.playlistId && this.playerData.player.bcPlaylistUi({
                                        hideOnStart: !0
                                    }), [3, 3];
                                case 2:
                                    this.attributeHasChanged = !1, r.label = 3;
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }), 10)
            }, e.prototype.disconnectedCallback = function() {
                this.removeWindowFocusEvents(), document.removeEventListener("fbs-video-playing", this.videoPlayingEventListener), window.removeEventListener("scroll", this.windowScrollEventListener), this.videoPlayer && (this.videoPlayer.off("play"), this.videoPlayer.off("pause"), this.videoPlayer.off("ads-play"), this.videoPlayer.off("ads-pause"), this.videoPlayer.off("ended")), this.videoService.dispose(this.playerData)
            }, e.prototype.changeVideo = function(t) {
                return a(this, void 0, void 0, (function() {
                    return s(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.playerData.videoId = t, [4, this.videoService.handleVideoJsReady(this.playerData)];
                            case 1:
                                return e.sent(), this.videoElement.title = this.videoPlayer.mediainfo.name, this.attachCustomSocialOptions(), this.autoplay && (this.muted && (this.mute(), this.attachAdLoadedHandler()), this.play()), [2]
                        }
                    }))
                }))
            }, e.prototype.mute = function() {
                this.videoPlayer && this.videoPlayer.muted(!0), this.adPlayer && this.muteAd()
            }, e.prototype.play = function() {
                this.videoPlayer && !this.videoPlaying && this.adCompleted && (this.playPromise = this.videoPlayer.play()), this.adPlayer && !this.adPlaying && this.adPlayer.play()
            }, e.prototype.pause = function() {
                var t = this;
                this.videoPlaying && this.playPromise && this.playPromise.then((function() {
                    t.videoPlayer.pause()
                })), this.adPlaying && this.adPlayer.pause()
            }, e.prototype.togglePlay = function() {
                var t = this;
                this.playing && this.playPromise ? this.playPromise.then((function() {
                    t.pause()
                })) : this.play()
            }, e.prototype.requestFullscreen = function() {
                return this.videoPlayer && this.videoPlayer.requestFullscreen(), new Promise((function() {}))
            }, e.prototype.resetDefaultBreakpointClass = function() {
                var t = this.firstElementChild;
                t && t.classList.contains("vjs-layout-x-small") && (t.classList.remove("vjs-layout-x-small"), t.classList.add("vjs-layout-small"))
            }, e.prototype.attachCustomSocialOptions = function() {
                this.videoPlayer.social && this.videoPlayer.social({
                    url: "https://www.forbes.com/video/" + this.videoId + "/"
                })
            }, e.prototype.insertCloseButton = function() {
                this.closeButton = document.createElement("div"), this.closeButton.innerHTML = '<i class="icon icon-close fs-text-s"></i>', this.closeButton.classList.add("video-close"), this.closeButton.classList.add("hidden"), this.closeButton.setAttribute("data-ga-track", "sticky close"), this.appendChild(this.closeButton)
            }, e.prototype.showCloseButton = function() {
                this.useCloseButton && !this.closeButtonTriggered && (this.closeButton.classList.contains("hidden") && this.closeButton.classList.remove("hidden"), this.closeButtonTriggered = !0)
            }, e.prototype.hideAdCloseButton = function() {
                if (!(this.videoPlayer && this.videoPlayer.ima3 && this.videoPlayer.ima3.adsManager && this.videoPlayer.ima3.adsManager.getCurrentAd)) return !1;
                var t = this.videoPlayer.ima3.adsManager.getCurrentAd(),
                    e = t && t.getAdSystem().toLowerCase() || "";
                return t && (-1 === e.indexOf("adsense") || -1 === e.indexOf("adx") || -1 === ["126949942", "126954142", "939010822", "1286113822", "1286115742", "4430278527", "4430286386", "1362247942"].indexOf(t.getAdId()))
            }, e.prototype.insertVideoElement = function() {
                this.videoElement = document.createElement("video"), this.playlistId && (this.classList.add("vjs-playlist-player-container"), this.playlistVideoId = this.videoId), Object.assign(this.videoElement.dataset, {
                    account: "2097119709001",
                    embed: "default",
                    player: this.playerId,
                    playlistId: this.playlistId || "",
                    playlistVideoId: this.playlistVideoId || ""
                }), this.videoElement.className = "video-js brightcove_perform playable-rectangle", this.videoElement.setAttribute("controls", ""), this.videoElement.setAttribute("crossorigin", ""), this.videoElement.setAttribute("playsinline", ""), this.muted && this.videoElement.setAttribute("muted", ""), this.videoElement.id = this.videoElementId, this.innerHTML = "", this.appendChild(this.videoElement)
            }, e.prototype.getAdUnitPath = function() {
                var t = window.fbsads;
                return t ? t.adUnitPath : "/7175/fdcvideo"
            }, e.prototype.attachPlayEventListeners = function() {
                this.attachPlayEventHandler(), this.attachAdsTiming(), this.attachPlayEndedEventListener(), this.attachAdsStartedEventListener(), this.attachAdsErrorEventHandler(), this.attachAdsEndedEventListener(), this.attachPauseEventHandler(), this.subscribeForPause()
            }, e.prototype.attachAdsTiming = function() {
                var t = this;
                this.videoPlayer.on("ads-request", (function() {
                    r("Ad Requested " + t.videoElementId), t.videoPlayer.off("ads-request")
                })), this.videoPlayer.on("adscanceled", (function() {
                    t.showCloseButton(), t.videoPlayer.off("adscanceled")
                })), this.videoPlayer.on("ads-load", (function() {
                    r("Ad Loaded " + t.videoElementId), t.videoPlayer.off("ads-load"), t.muteAd()
                })), this.videoPlayer.on("ima3-ads-manager-loaded", (function() {
                    var e = window.google,
                        n = {
                            campId: t.playerData.sz,
                            chanId: t.playerData.playerId,
                            anId: "930392"
                        };
                    window.googleImaVansAdapter.init(e, t.videoPlayer.ima3.adsManager, t.videoElement, n)
                }))
            }, e.prototype.attachPlayEndedEventListener = function() {
                var t = this;
                this.videoPlayer.on("ended", (function() {
                    t.videoComplete || t.playing || (t.videoComplete = !0, t.removeWindowFocusEvents(), window.removeEventListener("scroll", t.windowScrollEventListener), t.dispatchEvent(new CustomEvent("ended")))
                }))
            }, e.prototype.attachAdsStartedEventListener = function() {
                var t = this;
                this.videoPlayer.on("ads-ad-started", (function() {
                    t.hideAdCloseButton() || t.showCloseButton(), t.dispatchEvent(new CustomEvent("ad-started"))
                }))
            }, e.prototype.attachAdsEndedEventListener = function() {
                var t = this;
                this.videoPlayer.on("ads-ad-ended", (function() {
                    t.showCloseButton(), t.dispatchEvent(new CustomEvent("ad-ended"))
                }))
            }, e.prototype.attachPlayEventHandler = function() {
                var t = this;
                this.videoPlayer.on("play", (function() {
                    t.setAttribute("playing", ""), t.autoplay && !t.secretAutoplay || (t.videoService.hiddenPauseEnabled = !1), t.adsDisabled && t.useCloseButton && t.showCloseButton(), t.videoComplete = !1, t.videoService.setMediaSessionDetails(t.playerData), t.videoService.trackPlay(t.playerData), t.videoService.notifyPlaying(t.videoElementId), t.closeButtonTriggered && t.closeButtonTimeout || (t.closeButtonTimeout = setTimeout((function() {
                        t.showCloseButton()
                    }), 37e3)), t.dispatchEvent(new CustomEvent("play"))
                })), this.videoPlayer.on("ads-play", (function() {
                    t.setAttribute("playing", ""), t.videoService.notifyPlaying(t.videoElementId), t.dispatchEvent(new CustomEvent("play"))
                }))
            }, e.prototype.attachPauseEventHandler = function() {
                var t = this;
                this.videoPlayer.on("pause", (function() {
                    t.removeAttribute("playing"), t.dispatchEvent(new CustomEvent("pause"))
                })), this.videoPlayer.on("ads-pause", (function() {
                    t.removeAttribute("playing"), t.dispatchEvent(new CustomEvent("pause"))
                }))
            }, e.prototype.attachAdLoadedHandler = function() {
                var t = this;
                this.videoPlayer.on("ima3-loaded", (function() {
                    t.adPlayer && t.muteAd()
                }))
            }, e.prototype.attachAdsErrorEventHandler = function() {
                var t = this;
                this.videoPlayer.on("ima3-ad-error", (function() {
                    t.showCloseButton()
                }))
            }, e.prototype.subscribeForPause = function() {
                document.addEventListener("fbs-video-playing", this.videoPlayingEventListener)
            }, e.prototype.handleVideoPlaying = function(t) {
                this.playing && t.detail && t.detail.videoElementId !== this.videoElementId && this.pause()
            }, e.prototype.handleWindowBlur = function() {
                this.isFocused = !1, this.pauseToggleCheck()
            }, e.prototype.handleWindowFocus = function() {
                this.isFocused = !0, this.pauseToggleCheck()
            }, e.prototype.handleWindowScroll = function() {
                this.videoElement && this.videoElement.paused || (this.isVideoInView && !this.checkIsVideoInView() ? (this.isVideoInView = !1, this.pauseToggleCheck()) : !this.isVideoInView && this.checkIsVideoInView() && (this.isVideoInView = !0, this.pauseToggleCheck()))
            }, e.prototype.pauseToggleCheck = function() {
                this.videoService.hiddenPauseEnabled && (!this.playing && this.isFocused && this.isVideoInView ? this.play() : this.pause())
            }, e.prototype.removeWindowFocusEvents = function() {
                window.removeEventListener("blur", this.windowBlurEventListener), window.removeEventListener("focus", this.windowFocusEventListener)
            }, e.prototype.subscribeForHiddenPause = function() {
                window.addEventListener("blur", this.windowBlurEventListener), window.addEventListener("focus", this.windowFocusEventListener), window.addEventListener("scroll", this.windowScrollEventListener), this.addEventListener("click", this.removeWindowFocusEvents.bind(this))
            }, e.prototype.checkIsVideoInView = function() {
                var t = this.getBoundingClientRect();
                return (this.playing ? t.bottom : t.top) > 0
            }, e.prototype.muteAd = function() {
                var t = this;
                if (this.adPlayer) var e = 0,
                    n = setInterval((function() {
                        e++ < 30 && t.adPlayer ? t.adPlayer.muted(!0) : clearInterval(n)
                    }), 20)
            }, e
        }(HTMLElement),
        c = n(9),
        l = function(t) {
            this.playerId = "default", this.videoEnabled = !1, this.autoplay = !1, this.secretAutoplay = !1, this.sz = "620x350", this.adUnitPath = "/7175/fdcvideo", this.playTracked = !1, Object.assign(this, t), this.id = t.videoElementId
        },
        f = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        },
        d = function(t, e, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(t) {
                    try {
                        u(r.next(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function s(t) {
                    try {
                        u(r.throw(t))
                    } catch (t) {
                        o(t)
                    }
                }

                function u(t) {
                    t.done ? i(t.value) : new n((function(e) {
                        e(t.value)
                    })).then(a, s)
                }
                u((r = r.apply(t, e || [])).next())
            }))
        },
        h = function(t, e) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: s(0),
                throw: s(1),
                return: s(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function s(o) {
                return function(s) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = r[2 & o[0] ? "return" : o[0] ? "throw" : "next"]) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [0, i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = e.call(t, a)
                        } catch (t) {
                            o = [6, t], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, s])
                }
            }
        },
        p = [384, 768, 1024, 1280, 1600, 1920],
        v = function() {
            function t() {
                this.ima3Config = {
                    serverUrl: "",
                    requestMode: "onplay",
                    adTechOrder: ["html5", "flash"],
                    vpaidMode: "ENABLED",
                    timeout: 8e3,
                    showVpaidControls: !0
                }, this.bc = window.bc, this.videojs = window.videojs, this.srVideoInit = window.srVideoInit, this.playerData = new Map, this.idCount = 0, this.playerCount = 0, this.PID = "50e4a8434240cf5c4b000009", this.amazonBids = {}, this.hiddenPauseEnabled = !0
            }
            return t.prototype.generateId = function() {
                return "brightcove_perform_" + this.idCount++
            }, t.prototype.init = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e;
                    return h(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return this.fbsAdsService = window.fbsads, e = (e = this.playerData.get(t.videoElementId)) ? Object.assign(e, t) : new l(t), this.playerData.set(t.videoElementId, e), e.amazonId = "videoSlot" + ++this.playerCount, [4, this.waitforGdpr()];
                            case 1:
                                return n.sent(), e.adsDisabled ? [3, 3] : [4, this.loadMnet()];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [4, this.loadVideojs(e)];
                            case 4:
                                return n.sent(), [4, this.initPlugins(e)];
                            case 5:
                                return n.sent(), [4, this.loadIma3()];
                            case 6:
                                return n.sent(), [4, this.loadIntegral()];
                            case 7:
                                return n.sent(), [4, this.initPlayer(e)];
                            case 8:
                                return n.sent(), this.callSimpleReach(e), this.setSimpleReachEvents(e), this.setPlayerBreakpoints(e), [2, e]
                        }
                    }))
                }))
            }, t.prototype.waitforGdpr = function() {
                return d(this, void 0, void 0, (function() {
                    var t;
                    return h(this, (function(e) {
                        return t = window.trackingService || {}, [2, new Promise((function(e) {
                            var n = function(t) {
                                try {
                                    var r = JSON.parse(t.data);
                                    r && "preference_manager" === r.source && "submit_preferences" === r.message && (e(), t.currentTarget.removeEventListener(t.type, n))
                                } catch (t) {}
                            };
                            t.isEurope && -1 === document.cookie.indexOf("notice_gdpr_prefs=") ? window.addEventListener("message", n) : e()
                        }))]
                    }))
                }))
            }, t.prototype.requestMnetBids = function() {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        return this.fbsAdsService ? [2, Promise.race([this.fbsAdsService.fetchMediaNetVideoBids(), new Promise((function(t) {
                            setTimeout(t, 2e3)
                        })).then((function() {
                            return ""
                        }))])] : [2, ""]
                    }))
                }))
            }, t.prototype.loadMnet = function() {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        return this.fbsAdsService.initMediaNetVideoBidding() ? [2, this.fbsAdsService.initMediaNetVideoBidding()] : [2]
                    }))
                }))
            }, t.prototype.notifyPlaying = function(t) {
                var e = new CustomEvent("fbs-video-playing", {
                    detail: {
                        videoElementId: t
                    }
                });
                document.dispatchEvent(e)
            }, t.prototype.simpleReachCall = function() {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        return window.srVideoInit = function(t, e) {
                            return window.SimplereachVideo && (window[t] = window.SimplereachVideo.video(e)), window[t]
                        }, [2]
                    }))
                }))
            }, t.prototype.loadVideojs = function(t) {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.loadScript("//players.brightcove.net/2097119709001/" + t.playerId + "_default/index.min.js")];
                            case 1:
                                return e.sent(), [4, this.loadScript("//images.forbes.com/brightcove/video.js")];
                            case 2:
                                return e.sent(), [4, this.simpleReachCall()];
                            case 3:
                                return e.sent(), this.videojs = window.videojs, this.srVideoInit = window.srVideoInit, this.bc = window.bc, [2]
                        }
                    }))
                }))
            }, t.prototype.initPlugins = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e;
                    return h(this, (function(n) {
                        return (e = this.bc(t.id)) && e.overlayAddons && e.overlayAddons(t.showOverlay), [2]
                    }))
                }))
            }, t.prototype.loadIntegral = function() {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        return [2, Promise.race([this.loadScript("//static.adsafeprotected.com/vans-adapter-google-ima.js"), new Promise((function(t) {
                            setTimeout(t, 1e3)
                        })).then((function() {}))])]
                    }))
                }))
            }, t.prototype.preparePlaylist = function() {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, this.loadScript("//players.brightcove.net/videojs-bc-playlist-ui/3/videojs-bc-playlist-ui.min.js")];
                            case 1:
                                return t.sent(), [4, this.loadStyle("//players.brightcove.net/videojs-bc-playlist-ui/3/videojs-bc-playlist-ui.css")];
                            case 2:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.callSimpleReach = function(t, e) {
                void 0 === e && (e = "init");
                var n = t.player.mediainfo;
                this.srVideoInit(t.id, {
                    pid: this.PID,
                    video_id: n.id,
                    title: n.name,
                    description: n.description,
                    article_id: "",
                    length: Math.trunc(n.duration),
                    thumbnail_url: n.thumbnail,
                    tags: n.tags,
                    date: n.createdAt,
                    ignore_errors: !1,
                    event_name: e
                })
            }, t.prototype.setSimpleReachEvents = function(t) {
                var e, n = this.videojs.getPlayer(t.id),
                    r = [3, 15, 30, 45],
                    i = 0,
                    o = 0;
                n.on("firstPlay", (function() {
                    window[t.id] && window[t.id].start && window[t.id].start(t.autoplay ? "auto" : "click")
                })), n.on("timeupdate", (function(a) {
                    if (parseInt(e) !== Math.floor(n.currentTime())) {
                        e = Math.floor(n.currentTime());
                        var s = Math.floor(n.currentTime() / n.duration() * 100);
                        s >= i + 25 && s < 100 && (i += 25, window[t.id].quartile && window[t.id].quartile(i)), e >= o + 15 && (o += 15, window[t.id].elapsed && window[t.id].elapsed(15)), e >= r[0] && window[t.id].elapsedThreshold && window[t.id].elapsedThreshold(r.shift())
                    }
                })), n.on("ended", (function(e) {
                    window[t.id].quartile && window[t.id].quartile(i), window[t.id].complete && window[t.id].complete(i)
                }))
            }, t.prototype.loadScript = function(t) {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(e) {
                        return [2, new Promise((function(e) {
                            Object(c.a)(t, e)
                        }))]
                    }))
                }))
            }, t.prototype.loadStyle = function(t) {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(e) {
                        return [2, new Promise((function(e) {
                            Object(c.b)(t, e)
                        }))]
                    }))
                }))
            }, t.prototype.loadIma3 = function() {
                return d(this, void 0, void 0, (function() {
                    return h(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, Promise.all([this.loadStyle("//players.brightcove.net/videojs-ima3/3/videojs.ima3.min.css"), this.loadScript("//players.brightcove.net/videojs-ima3/3/videojs.ima3.min.js")])];
                            case 1:
                                return t.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.setAdTargeting = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e, n;
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return t.player.ima3 ? [4, this.getAdServerUrl(t)] : [2];
                            case 1:
                                return e = r.sent(), n = t.autoplay ? "onload" : "onplay", t.player.ima3 instanceof Function ? (this.ima3Config.serverUrl = e, this.ima3Config.requestMode = n, t.player.ima3(this.ima3Config)) : (t.player.ima3.settings.requestMode = n, t.player.ima3.settings.serverUrl = e), [2]
                        }
                    }))
                }))
            }, t.prototype.getAdServerUrl = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e, n, r, i, o, a, s, u, c, l, d;
                    return h(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                return [4, this.getPageTargeting()];
                            case 1:
                                for (c in e = h.sent(), n = this.getVideoAdTargeting(t), r = (t.keyValueString || "").split("&"), i = (r || []).reduce((function(t, e) {
                                        var n = e.split("="),
                                            r = n[0],
                                            i = n[1];
                                        try {
                                            t[r] = decodeURIComponent(i || "")
                                        } catch (e) {
                                            console.error(e), t[r] = ""
                                        }
                                        return t
                                    }), {}), 300 === (o = t.player.el_.getBoundingClientRect()).height && o.width / o.height >= 1.33 && (i.vh = "300plus"), a = f({}, e, n, i), "function" == typeof(s = ((this.amazonBids[t.amazonId] || {}).helpers || {}).qsParams || "") && (s = s()), u = "", s.length > 1 && (u += u ? s : s.substring(1), delete this.amazonBids[t.amazonId]), a) a.hasOwnProperty(c) && (u += (u ? "&" : "") + c + "=" + a[c]);
                                return this.mnetBids && (u += (u ? "&" : "") + this.mnetBids, this.mnetBids = ""), u = encodeURIComponent(u), l = encodeURIComponent("https://www.forbes.com/video/" + t.videoId + "/"), document.cookie.match(/notice_gdpr_prefs=0(?:,1)?:/) && (d = "&npa=1"), [2, "https://pubads.g.doubleclick.net/gampad/ads?sz=620x350|480x320&ciu_sz=s&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1" + d + "&iu=" + t.adUnitPath + "&cust_params=" + u + "&url=[referrer_url]&correlator=[timestamp]&description_url=" + l]
                        }
                    }))
                }))
            }, t.prototype.getPageTargeting = function() {
                return d(this, void 0, void 0, (function() {
                    var t, e;
                    return h(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return t = {}, this.fbsAdsService ? [4, this.fbsAdsService.getPageTargeting()] : [3, 2];
                            case 1:
                                return e = n.sent(), Object.keys(e).filter((function(t) {
                                    return !(t.startsWith("mnet") || t.startsWith("fb_") || t.startsWith("amzn"))
                                })).forEach((function(n) {
                                    t[n] = e[n].join()
                                })), [2, t];
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.getVideoAdTargeting = function(t) {
                var e = this.getMediaInformation(t),
                    n = e.duration,
                    r = e.customFields,
                    i = void 0 === r ? {} : r,
                    o = t.videoId,
                    a = t.secretAutoplay,
                    s = t.autoplay;
                return {
                    vid: o,
                    vl: n ? n <= 60 ? "1min" : "not1min" : "unknown",
                    vss: i.videospecialslot || "",
                    autoplay: !a && s ? "yes" : "no",
                    vchan: this.parseChannelSection(i.channelsection) || "",
                    vsec: this.parseChannelSection(i.channelsection2) || ""
                }
            }, t.prototype.parseChannelSection = function(t) {
                return void 0 === t && (t = ""), t.split(":")[0].trim().replace(/\s/g, "")
            }, t.prototype.initPlayer = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e, n, r;
                    return h(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (!this.bc) return [2, t];
                                t.adsDisabled || this.getAmazonHeaderBidding(t);
                                try {
                                    e = this.bc(t.id), t.adsDisabled || "function" != typeof e.ima3 || e.ima3(this.ima3Config)
                                } catch (t) {
                                    console.error(t)
                                }
                                return n = t, [4, this.prepareVideo(t.id)];
                            case 1:
                                return n.player = i.sent(), t.adsDisabled ? [3, 3] : (r = this, [4, this.requestMnetBids()]);
                            case 2:
                                r.mnetBids = i.sent(), i.label = 3;
                            case 3:
                                return [4, this.handleVideoJsReady(t)];
                            case 4:
                                return i.sent(), [4, this.preparePlaylist()];
                            case 5:
                                return i.sent(), [2, t]
                        }
                    }))
                }))
            }, t.prototype.getAmazonHeaderBidding = function(t) {
                var e = this;
                this.fbsAdsService && this.fbsAdsService.fetchAmazonBids([{
                    slotID: t.amazonId,
                    mediaType: "video"
                }]).then((function(n) {
                    e.amazonBids[t.amazonId] = (n || []).find((function(e) {
                        return e.slotID === t.amazonId
                    }))
                }))
            }, t.prototype.getMediaInformation = function(t) {
                return t.player ? t.player.mediainfo : null
            }, t.prototype.prepareVideo = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e = this;
                    return h(this, (function(n) {
                        return [2, new Promise((function(n) {
                            e.videojs(t).ready((function() {
                                n(this)
                            }))
                        }))]
                    }))
                }))
            }, t.prototype.handleVideoJsReady = function(t) {
                return d(this, void 0, void 0, (function() {
                    var e, n;
                    return h(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, new Promise((function(e, n) {
                                    t.player.catalog.getVideo(t.videoId, (function(t, r) {
                                        t || "string" == typeof r ? n(t) : e(r)
                                    }))
                                }))];
                            case 1:
                                return e = r.sent(), n = document.getElementById(t.videoElementId).getBoundingClientRect(), e = this.processVideoThumbnail(e, n), this.handleCatalogVideo(t, e), t.adsDisabled || "AD_SUPPORTED" !== e.economics ? [3, 3] : [4, this.setAdTargeting(t)];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return [2, e]
                        }
                    }))
                }))
            }, t.prototype.processVideoThumbnail = function(t, e) {
                var n = e.width > e.height,
                    r = n ? e.width : e.height,
                    i = p.find((function(t) {
                        return t >= r
                    })) || p[p.length - 1],
                    o = n ? i + "x0" : "0x" + i;
                return f({}, t, {
                    poster: "https://thumbor.forbes.com/thumbor/" + o + "/" + t.poster,
                    thumbnail: "https://thumbor.forbes.com/thumbor/" + o + "/" + t.thumbnail
                })
            }, t.prototype.handleCatalogVideo = function(t, e) {
                if (t.player.catalog.load(e), t.renditionSelection) switch (t.mediainfo = null, t.renditionSelection) {
                    case "closest":
                        var n = document.getElementById(t.id);
                        t.mediainfo = this.selectRendition(t, n.offsetWidth, n.offsetHeight);
                        break;
                    case "max":
                        t.mediainfo = this.selectRendition(t, screen.width, screen.height);
                        break;
                    default:
                        var r = t.renditionSelection.match(/(\d+)x(\d+)/i);
                        r && (t.mediainfo = this.selectRendition(t, Number(r[1]), Number(r[2])))
                }
                return t.mediainfo && t.player.src({
                    type: "video/mp4",
                    src: t.mediainfo.src
                }), t
            }, t.prototype.selectRendition = function(t, e, n) {
                var r, i = Math.pow(e, 2) + Math.pow(n, 2),
                    o = Number.MAX_VALUE;
                return this.playerData.get(t.id).player.mediainfo.sources.forEach((function(t) {
                    if ("MP4" === t.container && t.width && t.height && t.src) {
                        var e = t.width * t.width + t.height * t.height - i;
                        (!r || o < 0 && e >= 0 || (o < 0 || o >= 0 && e >= 0) && Math.abs(e) < Math.abs(o)) && (r = t, o = e)
                    }
                })), r
            }, t.prototype.dispose = function(t) {
                t && (this.playerData.delete(t.id), t.player && t.player.dispose && t.player.dispose())
            }, t.prototype.setMediaSessionDetails = function(t) {
                if ("mediaSession" in navigator) {
                    var e = this.getMediaInformation(t);
                    navigator.mediaSession.metadata = new MediaMetadata({
                        title: e.name,
                        artist: "Forbes Media",
                        album: "Forbes.com",
                        artwork: [{
                            src: e.thumbnail
                        }]
                    })
                }
            }, t.prototype.trackPlay = function(t) {
                if (!t.playTracked) {
                    t.playTracked = !0;
                    var e = window.trackingService;
                    e && e.track ? e.track({
                        event: "fastVideo",
                        fastN: "video",
                        fastSu: document.location.protocol + "//www.forbes.com/video/" + t.videoId + "/",
                        fastPt: "video",
                        fastI: "video/brightcove/" + t.videoId,
                        fastRe: document.location.host
                    }, !1) : console.warn("No trackingService provided for video")
                }
            }, t.prototype.setPlayerBreakpoints = function(t) {
                this.videojs(t.id).player_.breakpoints_ = {
                    huge: 1 / 0,
                    xlarge: 2560,
                    large: 1440,
                    medium: 768,
                    small: 425,
                    xsmall: 0,
                    tiny: 0
                }
            }, t
        }(),
        y = function() {
            function t(t, e) {
                this.randomVideoIdUrl = "{apiHostServer}/v1/campaign/video?region={region}".replace("{apiHostServer}", t).replace("{region}", e), this.availableVideoIdsUrl = "{apiHostServer}/v1/campaign/availablevideos?region={region}".replace("{apiHostServer}", t).replace("{region}", e), this.videoPlaybackVideoIdUrl = "{apiHostServer}/v1/campaign/video?region={region}".replace("{apiHostServer}", t).replace("{region}", e), this._playedCampaigns = [], this._playedVideos = []
            }
            return t.prototype.getCampaign = function(t) {
                var e = new XMLHttpRequest;
                e.open("GET", this.randomVideoIdUrl, !0), e.onload = function() {
                    var n = {};
                    try {
                        n = JSON.parse(e.responseText)
                    } catch (t) {
                        console.error(t)
                    }
                    "function" == typeof t && (n && n.video_id ? t(n) : t())
                }, e.send()
            }, t.prototype.getAvailableCampaigns = function(t) {
                var e = new XMLHttpRequest;
                e.open("GET", this.availableVideoIdsUrl, !0), e.onload = function() {
                    var n = [];
                    try {
                        n = JSON.parse(e.responseText)
                    } catch (t) {
                        console.error(t)
                    }
                    "function" == typeof t && (((n || [])[0] || {}).video_id ? t(n) : t())
                }, e.send()
            }, t.prototype.playCampaign = function(t, e) {
                var n = this;
                if ("function" != typeof e && (e = function() {}), !t || t.campaign_id && n._playedCampaigns.indexOf(t.campaign_id) > -1 || t.video_id && n._playedVideos.indexOf(t.video_id) > -1) e();
                else {
                    var r = new XMLHttpRequest;
                    r.open("POST", this.videoPlaybackVideoIdUrl, !0), r.setRequestHeader("Content-Type", "application/json"), r.onload = function() {
                        "function" == typeof e && this.readyState === XMLHttpRequest.DONE && 204 === this.status && (t.campaign_id && n._playedCampaigns.push(t.campaign_id), t.video_id && n._playedVideos.push(t.video_id), e())
                    }, r.send(JSON.stringify(t))
                }
            }, t
        }();
    r("Loaded");
    var m = window.__region || "";
    window.fbsCampaignService = new y("https://forbes-campaign-service.brightcove.services", m), window["fbs-video"] = new v, customElements.define("fbs-video", u)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r, i = function() {
            function t() {}
            return t.httpsUrl = function(t) {
                return (t || "").replace(/^http:/, "https:")
            }, t.normalizeImageDomain = function(e) {
                return (e = e || "").startsWith("//") ? "https:" + e : e.startsWith("/") ? "https://blogs-images.forbes.com" + e : t.httpsUrl(e)
            }, t.adjustExistingThumborUrl = function(t, e) {
                var n = t.match(/[0-9]+x[0-9]+/)[0],
                    r = parseInt(n.split("x")[0]) || 0,
                    i = parseInt(n.split("x")[1]) || 0;
                return r *= e, i *= e, t.replace(n, r + "x" + i)
            }, t.prependThumbor = function(t, e, n) {
                if (void 0 === t && (t = ""), (t || "").indexOf("thumbor") > -1) return this.adjustExistingThumborUrl(t, n);
                if ((t || "").indexOf("gravatar") > -1) return t;
                var r = this.normalizeImageDomain(t);
                return this.isOnThumborWhitelist(r) ? "https://thumbor.forbes.com/thumbor/" + e * n + "x0/" + encodeURIComponent(r) : r
            }, t.isOnThumborWhitelist = function(t) {
                return !!this.thumborWhitelist.find((function(e) {
                    return t.indexOf(e) > -1
                }))
            }, t.thumborWhitelist = ["specials-images.forbes.com", "specials-images.forbesimg.com", "i.forbesimg.com", "b-i.forbesimg.com", "images.forbes.com", "blogs-images.forbes.com"], t
        }(),
        o = (r = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            },
            function(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
        a = function(t) {
            function e() {
                var e = t.call(this) || this;
                return e.removePlaceholderEventListener = e.removePlaceholder.bind(e), e.imageEnhancedEventListener = e.imageEnhanced.bind(e), e.handleImageErrorEventListener = e.handleImageError.bind(e), e.imgTag = document.createElement("img"), e.imgTag.style.display = "none", e
            }
            return o(e, t), Object.defineProperty(e, "observedAttributes", {
                get: function() {
                    return ["src", "background-image", "width", "enhanced", "alt"]
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "src", {
                get: function() {
                    return this.getAttribute("src")
                },
                set: function(t) {
                    this.setAttribute("src", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "backgroundImage", {
                get: function() {
                    return this.getAttribute("background-image")
                },
                set: function(t) {
                    this.setAttribute("background-image", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return parseInt(this.getAttribute("width")) || 960
                },
                set: function(t) {
                    this.setAttribute("width", "" + t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "alt", {
                get: function() {
                    return this.getAttribute("alt")
                },
                set: function(t) {
                    this.setAttribute("alt", t)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "enhanced", {
                get: function() {
                    return this.hasAttribute("enhanced") && "false" !== this.getAttribute("enhanced")
                },
                set: function(t) {
                    t ? this.setAttribute("enhanced", "") : this.removeAttribute("enhanced")
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.connectedCallback = function() {
                this.init()
            }, e.prototype.attributeChangedCallback = function(t, e, n) {
                if (n !== e) switch (t) {
                    case "src":
                    case "background-image":
                        if (n.indexOf(".gif") > -1) return this.isGif = !0, this.highResSrc = n, void this.enhanceImage();
                        this.lowResSrc = i.prependThumbor(n, this.width, .1), this.highResSrc = i.prependThumbor(n, this.width, 1), this.shouldEnhanceImage() ? this.enhanceImage() : this.imgTag.src = this.lowResSrc;
                        break;
                    case "alt":
                        this.imgTag.alt = n || ""
                }
            }, e.prototype.registerScrollHandler = function() {
                var t = this;
                document.addEventListener("scroll", function(t) {
                    var e, n, r = this;
                    return function() {
                        for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                        var a = r || {},
                            s = +new Date;
                        if (e && s < e + 100) {
                            clearTimeout(n);
                            var u = 100 + s + 1;
                            n = setTimeout((function() {
                                e = s, a.deferred = !0, t.apply(a, i)
                            }), u - e)
                        } else e = s, t.apply(a, i)
                    }
                }((function() {
                    t.shouldEnhanceImage() && !t.enhanced && t.enhanceImage()
                })))
            }, e.prototype.shouldEnhanceImage = function() {
                return this.getBoundingClientRect().top + window.pageYOffset - document.documentElement.clientTop <= window.innerHeight + window.pageYOffset
            }, e.prototype.enhanceImage = function() {
                this.imgTag.src = this.highResSrc, this.imgTag.addEventListener("load", this.imageEnhancedEventListener), this.isGif && this.classList.add("initial-width")
            }, e.prototype.imageEnhanced = function() {
                this.backgroundImage && (this.style.backgroundImage = "url(" + this.highResSrc + ")"), this.enhanced = !0, this.imgTag.removeEventListener("load", this.imageEnhancedEventListener)
            }, e.prototype.removePlaceholder = function() {
                this.backgroundImage || (this.imgTag.style.display = "block"), this.classList.add("show-img"), this.imgTag.removeEventListener("load", this.removePlaceholderEventListener), this.shouldEnhanceImage() && this.enhanceImage()
            }, e.prototype.handleImageError = function() {
                this.imgTag.src !== this.lowResSrc || this.lowResFailed ? (this.lowResFailed || (this.imgTag.src = this.lowResSrc), this.enhanced = !0) : (this.lowResFailed = !0, this.enhanceImage())
            }, e.prototype.init = function() {
                this.imgTag.alt = this.alt || "", this.imgTag.addEventListener("load", this.removePlaceholderEventListener), this.imgTag.addEventListener("error", this.handleImageErrorEventListener), this.backgroundImage || this.appendChild(this.imgTag), this.enhanced || this.registerScrollHandler()
            }, e
        }(HTMLElement);
    customElements.define("progressive-image", a)
}]);
//# sourceMappingURL=common-55afa134edc1f7faec0d.js.map