!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(window, function () {
    return function (e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = { i: r, l: !1, exports: {} };
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }
        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 11)
    }([function (e, t, n) {
        "use strict";
        e.exports = n(2)
    }, function (e, t, n) {
        e.exports = n(4)()
    }, function (e, t, n) {
        "use strict";
        /** @license React v16.8.4
         * react.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */var r = n(3), o = "function" == typeof Symbol && Symbol.for, i = o ? Symbol.for("react.element") : 60103,
            s = o ? Symbol.for("react.portal") : 60106, u = o ? Symbol.for("react.fragment") : 60107,
            c = o ? Symbol.for("react.strict_mode") : 60108, a = o ? Symbol.for("react.profiler") : 60114,
            l = o ? Symbol.for("react.provider") : 60109, f = o ? Symbol.for("react.context") : 60110,
            p = o ? Symbol.for("react.concurrent_mode") : 60111, d = o ? Symbol.for("react.forward_ref") : 60112,
            h = o ? Symbol.for("react.suspense") : 60113, y = o ? Symbol.for("react.memo") : 60115,
            b = o ? Symbol.for("react.lazy") : 60116, m = "function" == typeof Symbol && Symbol.iterator;
        function v(e) {
            for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
            !function (e, t, n, r, o, i, s, u) {
                if (!e) {
                    if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                        var c = [n, r, o, i, s, u], a = 0;
                        (e = Error(t.replace(/%s/g, function () {
                            return c[a++]
                        }))).name = "Invariant Violation"
                    }
                    throw e.framesToPop = 1, e
                }
            }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
        }
        var g = {
            isMounted: function () {
                return !1
            }, enqueueForceUpdate: function () {
            }, enqueueReplaceState: function () {
            }, enqueueSetState: function () {
            }
        }, S = {};
        function w(e, t, n) {
            this.props = e, this.context = t, this.refs = S, this.updater = n || g
        }
        function x() {
        }
        function O(e, t, n) {
            this.props = e, this.context = t, this.refs = S, this.updater = n || g
        }
        w.prototype.isReactComponent = {}, w.prototype.setState = function (e, t) {
            "object" != typeof e && "function" != typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState")
        }, w.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }, x.prototype = w.prototype;
        var j = O.prototype = new x;
        j.constructor = O, r(j, w.prototype), j.isPureReactComponent = !0;
        var _ = { current: null }, E = { current: null }, T = Object.prototype.hasOwnProperty,
            R = { key: !0, ref: !0, __self: !0, __source: !0 };
        function P(e, t, n) {
            var r = void 0, o = {}, s = null, u = null;
            if (null != t) for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (s = "" + t.key), t) T.call(t, r) && !R.hasOwnProperty(r) && (o[r] = t[r]);
            var c = arguments.length - 2;
            if (1 === c) o.children = n; else if (1 < c) {
                for (var a = Array(c), l = 0; l < c; l++) a[l] = arguments[l + 2];
                o.children = a
            }
            if (e && e.defaultProps) for (r in c = e.defaultProps) void 0 === o[r] && (o[r] = c[r]);
            return { $$typeof: i, type: e, key: s, ref: u, props: o, _owner: E.current }
        }
        function k(e) {
            return "object" == typeof e && null !== e && e.$$typeof === i
        }
        var C = /\/+/g, L = [];
        function D(e, t, n, r) {
            if (L.length) {
                var o = L.pop();
                return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
            }
            return { result: e, keyPrefix: t, func: n, context: r, count: 0 }
        }
        function q(e) {
            e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > L.length && L.push(e)
        }
        function z(e, t, n) {
            return null == e ? 0 : function e(t, n, r, o) {
                var u = typeof t;
                "undefined" !== u && "boolean" !== u || (t = null);
                var c = !1;
                if (null === t) c = !0; else switch (u) {
                    case"string":
                    case"number":
                        c = !0;
                        break;
                    case"object":
                        switch (t.$$typeof) {
                            case i:
                            case s:
                                c = !0
                        }
                }
                if (c) return r(o, t, "" === n ? "." + A(t, 0) : n), 1;
                if (c = 0, n = "" === n ? "." : n + ":", Array.isArray(t)) for (var a = 0; a < t.length; a++) {
                    var l = n + A(u = t[a], a);
                    c += e(u, l, r, o)
                } else if (l = null === t || "object" != typeof t ? null : "function" == typeof (l = m && t[m] || t["@@iterator"]) ? l : null, "function" == typeof l) for (t = l.call(t), a = 0; !(u = t.next()).done;) c += e(u = u.value, l = n + A(u, a++), r, o); else "object" === u && v("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
                return c
            }(e, "", t, n)
        }
        function A(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? function (e) {
                var t = { "=": "=0", ":": "=2" };
                return "$" + ("" + e).replace(/[=:]/g, function (e) {
                    return t[e]
                })
            }(e.key) : t.toString(36)
        }
        function I(e, t) {
            e.func.call(e.context, t, e.count++)
        }
        function H(e, t, n) {
            var r = e.result, o = e.keyPrefix;
            e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? F(e, r, n, function (e) {
                return e
            }) : null != e && (k(e) && (e = function (e, t) {
                return { $$typeof: i, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
            }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(C, "$&/") + "/") + n)), r.push(e))
        }
        function F(e, t, n, r, o) {
            var i = "";
            null != n && (i = ("" + n).replace(C, "$&/") + "/"), z(e, H, t = D(t, i, r, o)), q(t)
        }
        function U() {
            var e = _.current;
            return null === e && v("307"), e
        }
        var M = {
            Children: {
                map: function (e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return F(e, r, null, t, n), r
                }, forEach: function (e, t, n) {
                    if (null == e) return e;
                    z(e, I, t = D(null, null, t, n)), q(t)
                }, count: function (e) {
                    return z(e, function () {
                        return null
                    }, null)
                }, toArray: function (e) {
                    var t = [];
                    return F(e, t, null, function (e) {
                        return e
                    }), t
                }, only: function (e) {
                    return k(e) || v("143"), e
                }
            },
            createRef: function () {
                return { current: null }
            },
            Component: w,
            PureComponent: O,
            createContext: function (e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = { $$typeof: l, _context: e }, e.Consumer = e
            },
            forwardRef: function (e) {
                return { $$typeof: d, render: e }
            },
            lazy: function (e) {
                return { $$typeof: b, _ctor: e, _status: -1, _result: null }
            },
            memo: function (e, t) {
                return { $$typeof: y, type: e, compare: void 0 === t ? null : t }
            },
            useCallback: function (e, t) {
                return U().useCallback(e, t)
            },
            useContext: function (e, t) {
                return U().useContext(e, t)
            },
            useEffect: function (e, t) {
                return U().useEffect(e, t)
            },
            useImperativeHandle: function (e, t, n) {
                return U().useImperativeHandle(e, t, n)
            },
            useDebugValue: function () {
            },
            useLayoutEffect: function (e, t) {
                return U().useLayoutEffect(e, t)
            },
            useMemo: function (e, t) {
                return U().useMemo(e, t)
            },
            useReducer: function (e, t, n) {
                return U().useReducer(e, t, n)
            },
            useRef: function (e) {
                return U().useRef(e)
            },
            useState: function (e) {
                return U().useState(e)
            },
            Fragment: u,
            StrictMode: c,
            Suspense: h,
            createElement: P,
            cloneElement: function (e, t, n) {
                null == e && v("267", e);
                var o = void 0, s = r({}, e.props), u = e.key, c = e.ref, a = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (c = t.ref, a = E.current), void 0 !== t.key && (u = "" + t.key);
                    var l = void 0;
                    for (o in e.type && e.type.defaultProps && (l = e.type.defaultProps), t) T.call(t, o) && !R.hasOwnProperty(o) && (s[o] = void 0 === t[o] && void 0 !== l ? l[o] : t[o])
                }
                if (1 === (o = arguments.length - 2)) s.children = n; else if (1 < o) {
                    l = Array(o);
                    for (var f = 0; f < o; f++) l[f] = arguments[f + 2];
                    s.children = l
                }
                return { $$typeof: i, type: e.type, key: u, ref: c, props: s, _owner: a }
            },
            createFactory: function (e) {
                var t = P.bind(null, e);
                return t.type = e, t
            },
            isValidElement: k,
            version: "16.8.4",
            unstable_ConcurrentMode: p,
            unstable_Profiler: a,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: _,
                ReactCurrentOwner: E,
                assign: r
            }
        }, N = { default: M }, B = N && M || N;
        e.exports = B.default || B
    }, function (e, t, n) {
        "use strict";
        /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
        var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty,
            i = Object.prototype.propertyIsEnumerable;
        e.exports = function () {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    r[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (e) {
                return !1
            }
        }() ? Object.assign : function (e, t) {
            for (var n, s, u = function (e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), c = 1; c < arguments.length; c++) {
                for (var a in n = Object(arguments[c])) o.call(n, a) && (u[a] = n[a]);
                if (r) {
                    s = r(n);
                    for (var l = 0; l < s.length; l++) i.call(n, s[l]) && (u[s[l]] = n[s[l]])
                }
            }
            return u
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(5);
        function o() {
        }
        function i() {
        }
        i.resetWarningCache = o, e.exports = function () {
            function e(e, t, n, o, i, s) {
                if (s !== r) {
                    var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw u.name = "Invariant Violation", u
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o
            };
            return n.PropTypes = n, n
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function (e, t, n) {
        var r = n(7);
        "string" == typeof r && (r = [[e.i, r, ""]]);
        var o = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(9)(r, o);
        r.locals && (e.exports = r.locals)
    }, function (e, t, n) {
        (t = e.exports = n(8)(!1)).push([e.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]), t.push([e.i, '.fslightbox-fade-in {\n  animation: fslightbox-fade-in 0.25s cubic-bezier(0, 0, 0.7, 1) forwards; }\n\n.fslightbox-fade-out {\n  animation: fslightbox-fade-out .25s ease forwards; }\n\n.fslightbox-fade-in-complete {\n  animation: fslightbox-fade-in-complete 0.25s cubic-bezier(0, 0, 0.7, 1) forwards; }\n\n.fslightbox-fade-out-complete {\n  animation: fslightbox-fade-out-complete .25s ease !important; }\n\n@keyframes fslightbox-fade-in-complete {\n  from {\n    opacity: .3; }\n  to {\n    opacity: 1; } }\n\n@keyframes fslightbox-fade-out-complete {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fslightbox-fade-in {\n  from {\n    opacity: .65; }\n  to {\n    opacity: 1; } }\n\n@keyframes fslightbox-fade-out {\n  from {\n    opacity: .35; }\n  to {\n    opacity: 0; } }\n\n.fslightbox-cursor-grabbing {\n  cursor: grabbing; }\n\n.fslightbox-full-dimension {\n  width: 100%;\n  height: 100%; }\n\n.fslightbox-open {\n  overflow: hidden;\n  height: 100%; }\n\n.fslightbox-flex-centered {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.fslightbox-scrollbarfix {\n  padding-right: 17px; }\n\n.fslightbox-transform-transition {\n  transition: transform .3s; }\n\n.fslightbox-container {\n  font-family: "Montserrat", sans-serif;\n  opacity: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: linear-gradient(rgba(30, 30, 30, 0.9), black 1810%);\n  z-index: 9999999;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  animation: fslightbox-fade-in-complete .25s forwards; }\n\n.fslightbox-svg-path {\n  transition: fill .15s ease;\n  fill: #ddd; }\n\n.fslightbox-media-holder {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.fslightbox-nav {\n  height: 45px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.fslightbox-slide-number-container {\n  height: 100%;\n  font-size: .82rem;\n  color: #c1c2c2;\n  z-index: 0;\n  max-width: 46px; }\n  .fslightbox-slide-number-container div {\n    padding: 0 2px; }\n\n.fslightbox-slash {\n  padding-top: .15rem;\n  font-size: 12px; }\n\n.fslightbox-toolbar {\n  position: absolute;\n  z-index: 3;\n  right: 0;\n  top: 0;\n  height: 100%;\n  display: flex;\n  background: rgba(35, 35, 35, 0.65); }\n\n.fslightbox-toolbar-button {\n  height: 100%;\n  width: 45px;\n  cursor: pointer; }\n\n.fslightbox-toolbar-button:hover .fslightbox-svg-path {\n  fill: white; }\n\n.fslightbox-slide-btn-container {\n  display: flex;\n  align-items: center;\n  padding: 12px 12px 12px 6px;\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  z-index: 3;\n  transform: translateY(-50%); }\n  @media (min-width: 476px) {\n    .fslightbox-slide-btn-container {\n      padding: 22px 22px 22px 6px; } }\n  @media (min-width: 768px) {\n    .fslightbox-slide-btn-container {\n      padding: 30px 30px 30px 6px; } }\n\n.fslightbox-slide-btn-container:hover .fslightbox-svg-path {\n  fill: #f1f1f1; }\n\n.fslightbox-slide-btn {\n  padding: 7px;\n  font-size: 26px;\n  background: rgba(35, 35, 35, 0.65); }\n\n@media (min-width: 476px) {\n  .fslightbox-slide-btn {\n    padding: 8px; } }\n\n.fslightbox-slide-btn-left-container {\n  left: 0; }\n\n@media (max-width: 475.99px) {\n  .fslightbox-slide-btn-left-container {\n    padding-left: 3px; } }\n\n.fslightbox-slide-btn-right-container {\n  right: 0;\n  padding-left: 12px;\n  padding-right: 3px; }\n  @media (min-width: 476px) {\n    .fslightbox-slide-btn-right-container {\n      padding-left: 22px; } }\n  @media (min-width: 768px) {\n    .fslightbox-slide-btn-right-container {\n      padding-left: 30px; } }\n\n@media (min-width: 476px) {\n  .fslightbox-slide-btn-right-container {\n    padding-right: 6px; } }\n\n.fslightbox-down-event-detector {\n  position: absolute;\n  z-index: 1; }\n\n.fslightbox-swiping-invisible-hover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10; }\n\n.fslightbox-invalid-file-wrapper {\n  font-size: 22px;\n  color: #eaebeb;\n  margin: auto;\n  opacity: 0; }\n\n.fslightbox-video {\n  object-fit: cover; }\n\n.fslightbox-loader {\n  display: block;\n  margin: auto;\n  position: relative;\n  width: 67px;\n  height: 67px; }\n\n.fslightbox-loader div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 54px;\n  height: 54px;\n  margin: 6px;\n  border: 5px solid #999;\n  border-radius: 50%;\n  animation: fslightbox-loader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #999 transparent transparent transparent; }\n\n.fslightbox-loader div:nth-child(1) {\n  animation-delay: -0.45s; }\n\n.fslightbox-loader div:nth-child(2) {\n  animation-delay: -0.3s; }\n\n.fslightbox-loader div:nth-child(3) {\n  animation-delay: -0.15s; }\n\n@keyframes fslightbox-loader {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.fslightbox-single-source {\n  margin: auto;\n  opacity: 0;\n  display: block;\n  backface-visibility: hidden;\n  transform: translateZ(0); }\n\n.fslightbox-source-holder {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center; }\n', ""])
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var n = function (e, t) {
                        var n = e[1] || "", r = e[3];
                        if (!r) return n;
                        if (t && "function" == typeof btoa) {
                            var o = (s = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */"),
                                i = r.sources.map(function (e) {
                                    return "/*# sourceURL=" + r.sourceRoot + e + " */"
                                });
                            return [n].concat(i).concat([o]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function (e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (r[i] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var s = e[o];
                    null != s[0] && r[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s))
                }
            }, t
        }
    }, function (e, t, n) {
        var r, o, i = {}, s = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === o && (o = r.apply(this, arguments)), o
        }), u = function (e) {
            var t = {};
            return function (e, n) {
                if ("function" == typeof e) return e();
                if (void 0 === t[e]) {
                    var r = function (e, t) {
                        return t ? t.querySelector(e) : document.querySelector(e)
                    }.call(this, e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    t[e] = r
                }
                return t[e]
            }
        }(), c = null, a = 0, l = [], f = n(10);
        function p(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n], o = i[r.id];
                if (o) {
                    o.refs++;
                    for (var s = 0; s < o.parts.length; s++) o.parts[s](r.parts[s]);
                    for (; s < r.parts.length; s++) o.parts.push(v(r.parts[s], t))
                } else {
                    var u = [];
                    for (s = 0; s < r.parts.length; s++) u.push(v(r.parts[s], t));
                    i[r.id] = { id: r.id, refs: 1, parts: u }
                }
            }
        }
        function d(e, t) {
            for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o], s = t.base ? i[0] + t.base : i[0], u = { css: i[1], media: i[2], sourceMap: i[3] };
                r[s] ? r[s].parts.push(u) : n.push(r[s] = { id: s, parts: [u] })
            }
            return n
        }
        function h(e, t) {
            var n = u(e.insertInto);
            if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var r = l[l.length - 1];
            if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), l.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
                if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = u(e.insertAt.before, n);
                n.insertBefore(t, o)
            }
        }
        function y(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = l.indexOf(e);
            t >= 0 && l.splice(t, 1)
        }
        function b(e) {
            var t = document.createElement("style");
            if (void 0 === e.attrs.type && (e.attrs.type = "text/css"), void 0 === e.attrs.nonce) {
                var r = function () {
                    0;
                    return n.nc
                }();
                r && (e.attrs.nonce = r)
            }
            return m(t, e.attrs), h(e, t), t
        }
        function m(e, t) {
            Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n])
            })
        }
        function v(e, t) {
            var n, r, o, i;
            if (t.transform && e.css) {
                if (!(i = "function" == typeof t.transform ? t.transform(e.css) : t.transform.default(e.css))) return function () {
                };
                e.css = i
            }
            if (t.singleton) {
                var s = a++;
                n = c || (c = b(t)), r = w.bind(null, n, s, !1), o = w.bind(null, n, s, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (e) {
                var t = document.createElement("link");
                return void 0 === e.attrs.type && (e.attrs.type = "text/css"), e.attrs.rel = "stylesheet", m(t, e.attrs), h(e, t), t
            }(t), r = function (e, t, n) {
                var r = n.css, o = n.sourceMap, i = void 0 === t.convertToAbsoluteUrls && o;
                (t.convertToAbsoluteUrls || i) && (r = f(r));
                o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                var s = new Blob([r], { type: "text/css" }), u = e.href;
                e.href = URL.createObjectURL(s), u && URL.revokeObjectURL(u)
            }.bind(null, n, t), o = function () {
                y(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = b(t), r = function (e, t) {
                var n = t.css, r = t.media;
                r && e.setAttribute("media", r);
                if (e.styleSheet) e.styleSheet.cssText = n; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n))
                }
            }.bind(null, n), o = function () {
                y(n)
            });
            return r(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else o()
            }
        }
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || "boolean" == typeof t.singleton || (t.singleton = s()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var n = d(e, t);
            return p(n, t), function (e) {
                for (var r = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    (u = i[s.id]).refs--, r.push(u)
                }
                e && p(d(e, t), t);
                for (o = 0; o < r.length; o++) {
                    var u;
                    if (0 === (u = r[o]).refs) {
                        for (var c = 0; c < u.parts.length; c++) u.parts[c]();
                        delete i[u.id]
                    }
                }
            }
        };
        var g, S = (g = [], function (e, t) {
            return g[e] = t, g.filter(Boolean).join("\n")
        });
        function w(e, t, n, r) {
            var o = n ? "" : r.css;
            if (e.styleSheet) e.styleSheet.cssText = S(t, o); else {
                var i = document.createTextNode(o), s = e.childNodes;
                s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var n = t.protocol + "//" + t.host, r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var o, i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                    return t
                }).replace(/^'(.*)'$/, function (e, t) {
                    return t
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? e : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")")
            })
        }
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0), o = n.n(r), i = n(1), s = n.n(i);
        n(6);
        function u(e) {
            return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function c(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function a(e, t) {
            return !t || "object" !== u(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function f(e, t) {
            return (f = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var p = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), a(this, l(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("svg", {
                        width: this.props.size,
                        height: this.props.size,
                        viewBox: this.props.viewBox,
                        xmlns: "http://www.w3.org/2000/svg"
                    }, o.a.createElement("path", { className: "fslightbox-svg-path", d: this.props.d }))
                }
            }]) && c(n.prototype, i), s && c(n, s), t
        }();
        p.propTypes = { viewBox: s.a.string.isRequired, size: s.a.string.isRequired, d: s.a.string.isRequired };
        var d = p;
        function h(e) {
            return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function b(e, t) {
            return !t || "object" !== h(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function m(e) {
            return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function v(e, t) {
            return (v = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var g = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), b(this, m(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && v(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        onClick: this.props.onClick,
                        className: "fslightbox-toolbar-button fslightbox-flex-centered"
                    }, o.a.createElement(d, { viewBox: this.props.viewBox, size: this.props.size, d: this.props.d }))
                }
            }]) && y(n.prototype, i), s && y(n, s), t
        }();
        g.propTypes = {
            onClick: s.a.func.isRequired,
            viewBox: s.a.string.isRequired,
            size: s.a.string.isRequired,
            d: s.a.string.isRequired
        };
        var S = g;
        function w(e) {
            return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function x(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function O(e) {
            return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function j(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function _(e, t) {
            return (_ = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var E = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = O(t).call(this, e)) || "object" !== w(o) && "function" != typeof o ? j(r) : o).close = n.close.bind(j(n)), n.fullscreen = n.fullscreen.bind(j(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "fullscreen", value: function () {
                    this.props.data.isFullscreenOpen ? this.props.core.fullscreenToggler.turnOffFullscreen() : this.props.core.fullscreenToggler.turnOnFullscreen()
                }
            }, {
                key: "close", value: function () {
                    this.props.core.closeOpenLightbox.closeLightbox()
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-toolbar" }, o.a.createElement(S, {
                        onClick: this.fullscreen,
                        viewBox: "0 0 17.5 17.5",
                        size: "1.25em",
                        d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z"
                    }), o.a.createElement(S, {
                        onClick: this.close,
                        viewBox: "0 0 24 24",
                        size: "1.25em",
                        d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"
                    }))
                }
            }]) && x(n.prototype, i), s && x(n, s), t
        }();
        E.propTypes = { core: s.a.object.isRequired, data: s.a.object.isRequired };
        var T = E;
        function R(e) {
            return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function P(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function k(e, t) {
            return !t || "object" !== R(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function C(e) {
            return (C = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function L(e, t) {
            return (L = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var D = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), k(this, C(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && L(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-slide-number-container fslightbox-flex-centered" }, o.a.createElement("div", null, this.props.slide), o.a.createElement("div", { className: "fslightbox-slash" }, "/"), o.a.createElement("div", null, this.props.totalSlides))
                }
            }]) && P(n.prototype, i), s && P(n, s), t
        }();
        D.propTypes = { slide: s.a.number.isRequired, totalSlides: s.a.number.isRequired };
        var q = D;
        function z(e) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function A(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function I(e, t) {
            return !t || "object" !== z(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function F(e, t) {
            return (F = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var U = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), I(this, H(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && F(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-nav" }, o.a.createElement(T, {
                        core: this.props.core,
                        data: this.props.data
                    }), this.props.data.totalSlides > 1 ? o.a.createElement(q, {
                        slide: this.props.slide,
                        totalSlides: this.props.data.totalSlides
                    }) : null)
                }
            }]) && A(n.prototype, i), s && A(n, s), t
        }();
        U.propTypes = { data: s.a.object.isRequired, core: s.a.object.isRequired, slide: s.a.number.isRequired };
        var M = U;
        function N(e) {
            return (N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function B(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function $(e) {
            return ($ = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function V(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function W(e, t) {
            return (W = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var X = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = $(t).call(this, e)) || "object" !== N(o) && "function" != typeof o ? V(r) : o).goToPreviousSlide = n.goToPreviousSlide.bind(V(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && W(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "goToPreviousSlide", value: function () {
                    this.props.core.slideChanger.changeSlideTo(this.props.core.stageSources.getPreviousSlideIndex() + 1)
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        onClick: this.goToPreviousSlide,
                        className: "fslightbox-slide-btn-container fslightbox-slide-btn-left-container"
                    }, o.a.createElement("div", { className: "fslightbox-slide-btn fslightbox-flex-centered" }, o.a.createElement(d, {
                        viewBox: "0 0 20 20",
                        size: "1em",
                        d: "M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"
                    })))
                }
            }]) && B(n.prototype, i), s && B(n, s), t
        }();
        X.propTypes = { core: s.a.object.isRequired };
        var J = X;
        function G(e) {
            return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Z(e) {
            return (Z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function K(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Q(e, t) {
            return (Q = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ee = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = Z(t).call(this, e)) || "object" !== G(o) && "function" != typeof o ? K(r) : o).goToNextSlide = n.goToNextSlide.bind(K(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Q(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "goToNextSlide", value: function () {
                    this.props.core.slideChanger.changeSlideTo(this.props.core.stageSources.getNextSlideIndex() + 1)
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        onClick: this.goToNextSlide,
                        className: "fslightbox-slide-btn-container fslightbox-slide-btn-right-container"
                    }, o.a.createElement("div", { className: "fslightbox-slide-btn fslightbox-flex-centered" }, o.a.createElement(d, {
                        viewBox: "0 0 20 20",
                        size: "1em",
                        d: "M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
                    })))
                }
            }]) && Y(n.prototype, i), s && Y(n, s), t
        }();
        ee.propTypes = { core: s.a.object.isRequired };
        var te = ee;
        function ne(e) {
            return (ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function re(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function oe(e, t) {
            return !t || "object" !== ne(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ie(e) {
            return (ie = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function se(e, t) {
            return (se = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ue = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), oe(this, ie(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && se(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", { className: "fslightbox-loader" }, o.a.createElement("div", null), o.a.createElement("div", null), o.a.createElement("div", null), o.a.createElement("div", null))
                }
            }]) && re(n.prototype, i), s && re(n, s), t
        }(), ce = 250, ae = "image", le = "video", fe = "youtube", pe = "invalid", de = -1, he = 0, ye = 1;
        function be(e) {
            return (be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function me(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function ve(e) {
            return (ve = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function ge(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Se(e, t) {
            return (Se = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var we = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = ve(t).call(this, e)) || "object" !== be(o) && "function" != typeof o ? ge(r) : o).onLoadedMetaData = n.onLoadedMetaData.bind(ge(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Se(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "onLoadedMetaData", value: function (e) {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || (this.props.sourcesData.sourcesDimensions[this.props.i] = {
                        width: e.target.videoWidth,
                        height: e.target.videoHeight
                    }, this.props.onFirstSourceLoad())
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("video", {
                        onLoadedMetadata: this.onLoadedMetaData,
                        className: "fslightbox-single-source fslightbox-video",
                        controls: !0,
                        ref: this.props.sources[this.props.i],
                        poster: this.props.sourcesData.videosPosters[this.props.i]
                    }, o.a.createElement("source", { src: this.props.urls[this.props.i] }))
                }
            }]) && me(n.prototype, i), s && me(n, s), t
        }();
        we.propTypes = {
            urls: s.a.array.isRequired,
            sourcesData: s.a.object.isRequired,
            sources: s.a.array.isRequired,
            i: s.a.number.isRequired,
            onFirstSourceLoad: s.a.func.isRequired
        };
        var xe = we;
        function Oe(e) {
            return (Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function je(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function _e(e, t) {
            return !t || "object" !== Oe(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Ee(e) {
            return (Ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Te(e, t) {
            return (Te = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Re = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), _e(this, Ee(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Te(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "componentDidMount", value: function () {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || (this.props.sourcesData.sourcesDimensions[this.props.i] = {
                        width: 1920,
                        height: 1080
                    }, this.props.onFirstSourceLoad())
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("iframe", {
                        className: "fslightbox-single-source",
                        ref: this.props.sources[this.props.i],
                        src: "https://www.youtube.com/embed/" + (e = this.props.urls[this.props.i], e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]) + "?enablejsapi=1",
                        allowFullScreen: !0,
                        frameBorder: "0"
                    });
                    var e
                }
            }]) && je(n.prototype, i), s && je(n, s), t
        }();
        Re.propTypes = {
            urls: s.a.array.isRequired,
            sourcesData: s.a.object.isRequired,
            sources: s.a.array.isRequired,
            onFirstSourceLoad: s.a.func.isRequired,
            i: s.a.number.isRequired
        };
        var Pe = Re;
        function ke(e) {
            return (ke = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Ce(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Le(e, t) {
            return !t || "object" !== ke(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function De(e) {
            return (De = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function qe(e, t) {
            return (qe = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ze = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = Le(this, De(t).call(this, e))).props.sourcesData.isSourceAlreadyLoadedArray[n.props.i] || (n.props.sourcesData.isSourceAlreadyLoadedArray[n.props.i] = !0), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && qe(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        className: "fslightbox-invalid-file-wrapper fslightbox-flex-centered",
                        ref: this.props.sources[this.props.i]
                    }, "Invalid file")
                }
            }]) && Ce(n.prototype, i), s && Ce(n, s), t
        }();
        ze.propTypes = { sources: s.a.array.isRequired, sourcesData: s.a.object.isRequired, i: s.a.number.isRequired };
        var Ae = ze;
        function Ie(e) {
            return (Ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function He(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Fe(e) {
            return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Ue(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Me(e, t) {
            return (Me = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var Ne = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(o = Fe(t).call(this, e)) || "object" !== Ie(o) && "function" != typeof o ? Ue(r) : o).imageOnLoad = n.imageOnLoad.bind(Ue(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Me(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "imageOnLoad", value: function (e) {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || (this.props.sourcesData.sourcesDimensions[this.props.i] = {
                        width: e.target.width,
                        height: e.target.height
                    }, this.props.onFirstSourceLoad())
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("img", {
                        onLoad: this.imageOnLoad,
                        className: "fslightbox-single-source",
                        ref: this.props.sources[this.props.i],
                        src: this.props.urls[this.props.i],
                        alt: this.props.urls[this.props.i]
                    }))
                }
            }]) && He(n.prototype, i), s && He(n, s), t
        }();
        Ne.propTypes = {
            urls: s.a.array.isRequired,
            sourcesData: s.a.object.isRequired,
            sources: s.a.array.isRequired,
            i: s.a.number.isRequired,
            onFirstSourceLoad: s.a.func.isRequired
        };
        var Be = Ne;
        function $e(e) {
            var t, n, r, i, s = e.sourcesData, u = e.data, c = e.elements;
            this.attachOnFirstSourceLoad = function (e) {
                i = e
            }, this.setSourceIndex = function (e) {
                r = e
            }, this.getSourceComponent = function () {
                return a(), n
            };
            var a = function () {
                s.sourcesTypes[r] !== pe ? (f(), y()) : l()
            }, l = function () {
                n = o.a.createElement(Ae, { sources: c.sources, sourcesData: s, i: r })
            }, f = function () {
                switch (s.sourcesTypes[r]) {
                    case ae:
                        p();
                        break;
                    case le:
                        d();
                        break;
                    case fe:
                        h()
                }
            }, p = function () {
                t = Be
            }, d = function () {
                t = xe
            }, h = function () {
                t = Pe
            }, y = function () {
                n = o.a.createElement(t, {
                    urls: u.urls,
                    sources: c.sources,
                    sourcesData: s,
                    i: r,
                    onFirstSourceLoad: i
                })
            }
        }
        function Ve(e) {
            var t = e.sourcesData, n = e.elements.sources, r = null, o = 0, i = 0, s = 0, u = 0;
            this.setIndex = function (e) {
                r = e, o = t.sourcesDimensions[e].width, i = t.sourcesDimensions[e].height, s = o / i
            }, this.adjustSourceSize = function () {
                if ((u = t.maxSourceWidth / s) < t.maxSourceHeight) return o < t.maxSourceWidth && (u = i), void c();
                u = i > t.maxSourceHeight ? t.maxSourceHeight : i, c()
            };
            var c = function () {
                n[r].current.style.height = u + "px", n[r].current.style.width = u * s + "px"
            }
        }
        var We, Xe, Je = "fslightbox-fade-in", Ge = "fslightbox-fade-out", Ye = "fslightbox-fade-in-complete",
            Ze = "fslightbox-fade-out-complete", Ke = "fslightbox-open";
        function Qe(e) {
            return (Qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function et(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function tt(e) {
            return (tt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function nt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function rt(e, t) {
            return (rt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var ot = function (e) {
            function t(e) {
                var n, r, o;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, n = !(o = tt(t).call(this, e)) || "object" !== Qe(o) && "function" != typeof o ? nt(r) : o, Xe = !1, We = !0, n.props.sourcesData.sourcesToCreateOnConstruct[n.props.i] && (Xe = !0, n.createSource()), n.onFirstSourceLoad = n.onFirstSourceLoad.bind(nt(n)), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && rt(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "createSource", value: function () {
                    We = !1;
                    var e = new $e(this.props);
                    e.attachOnFirstSourceLoad(this.onFirstSourceLoad), e.setSourceIndex(this.props.i), this.props.elements.sourcesJSXComponents[this.props.i] = e.getSourceComponent(), Xe || this.sourceWasCreated()
                }
            }, {
                key: "sourceWasCreated", value: function () {
                    this.forceUpdate()
                }
            }, {
                key: "componentDidMount", value: function () {
                    Xe && this.sourceWasCreated(), this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] && this.onSourceLoad()
                }
            }, {
                key: "onFirstSourceLoad", value: function () {
                    this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] = !0;
                    var e = new Ve(this.props);
                    e.setIndex(this.props.i), this.props.collections.sourceSizeAdjusters[this.props.i] = e, this.onSourceLoad()
                }
            }, {
                key: "onSourceLoad", value: function () {
                    this.fadeInSource(), this.props.collections.sourceSizeAdjusters[this.props.i] && this.props.collections.sourceSizeAdjusters[this.props.i].adjustSourceSize()
                }
            }, {
                key: "fadeInSource", value: function () {
                    this.props.core.stageSources.isSourceInStage(this.props.i) && (this.props.i === this.props.slide - 1 ? this.props.elements.sources[this.props.i].current.classList.add(Ye) : this.props.elements.sources[this.props.i].current.classList.add(Je))
                }
            }, {
                key: "render", value: function () {
                    var e = this.props.sourcesData.isSourceAlreadyLoadedArray[this.props.i] || !We ? null : o.a.createElement(ue, null);
                    return o.a.createElement(o.a.Fragment, null, e, this.props.elements.sourcesJSXComponents[this.props.i])
                }
            }]) && et(n.prototype, i), s && et(n, s), t
        }();
        ot.propTypes = {
            i: s.a.number.isRequired,
            collections: s.a.object.isRequired,
            core: s.a.object.isRequired,
            data: s.a.object.isRequired,
            elements: s.a.object.isRequired,
            slide: s.a.number.isRequired,
            sourcesData: s.a.object.isRequired
        };
        var it, st, ut = ot;
        function ct() {
            this.isUrlYoutubeOne = function (e) {
                var t = document.createElement("a");
                return t.href = e, "www.youtube.com" === t.hostname
            }, this.getTypeFromResponseContentType = function (e) {
                return e.slice(0, e.indexOf("/"))
            }
        }
        function at() {
            var e = "", t = null, n = null, r = null, o = new ct;
            this.setUrlToCheck = function (t) {
                e = t
            }, this.getSourceType = function () {
                return new Promise(function (n) {
                    if (r = n, o.isUrlYoutubeOne(e)) return a(), n(t);
                    i()
                }).catch(function () {
                    return p()
                })
            };
            var i = function () {
                (n = new XMLHttpRequest).open("GET", e, !0), n.onreadystatechange = s, n.send()
            }, s = function () {
                if (2 === n.readyState) {
                    if (200 !== n.status) return p(), void u();
                    c(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))), u()
                }
            }, u = function () {
                n.abort(), r(t)
            }, c = function (e) {
                switch (e) {
                    case ae:
                        l();
                        break;
                    case le:
                        f();
                        break;
                    default:
                        p()
                }
            }, a = function () {
                t = fe
            }, l = function () {
                t = ae
            }, f = function () {
                t = le
            }, p = function () {
                t = pe
            }
        }
        function lt(e) {
            return (lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function ft(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function pt(e) {
            return (pt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function dt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ht(e, t) {
            return (ht = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var yt = function (e) {
            function t(e) {
                var n, r, i;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, (n = !(i = pt(t).call(this, e)) || "object" !== lt(i) && "function" != typeof i ? dt(r) : i).source = o.a.createRef(), n.processReceivedSourceType = n.processReceivedSourceType.bind(dt(n)), n.props.sourcesData.sourcesTypes[n.props.i] || n.initRequest(), it = !1, st = !1, n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ht(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "initRequest", value: function () {
                    var e = new at;
                    e.setUrlToCheck(this.props.data.urls[this.props.i]), e.getSourceType().then(this.processReceivedSourceType)
                }
            }, {
                key: "processReceivedSourceType", value: function (e) {
                    if (this.props.sourcesData.sourcesTypes[this.props.i] = e, it) {
                        if (null === this.source.current) return void (this.props.sourcesData.sourcesToCreateOnConstruct[this.props.i] = !0);
                        this.source.current.createSource()
                    } else st = !0
                }
            }, {
                key: "onMouseDownListener", value: function (e) {
                    e.preventDefault()
                }
            }, {
                key: "componentDidMount", value: function () {
                    it = !0, this.props.core.stageSources.isSourceInStage(this.props.i) || this.props.core.sourceHoldersTransformer.transformStageSourceHolderAtIndex(this.props.i).negative(), st && this.source.current.createSource()
                }
            }, {
                key: "render", value: function () {
                    return o.a.createElement("div", {
                        ref: this.props.elements.sourceHolders[this.props.i],
                        className: "fslightbox-source-holder fslightbox-full-dimension"
                    }, o.a.createElement(ut, {
                        i: this.props.i,
                        ref: this.source,
                        collections: this.props.collections,
                        core: this.props.core,
                        data: this.props.data,
                        elements: this.props.elements,
                        slide: this.props.slide,
                        sourcesData: this.props.sourcesData
                    }))
                }
            }]) && ft(n.prototype, i), s && ft(n, s), t
        }();
        yt.propTypes = {
            i: s.a.number,
            collections: s.a.object.isRequired,
            core: s.a.object.isRequired,
            data: s.a.object.isRequired,
            elements: s.a.object.isRequired,
            slide: s.a.number.isRequired,
            sourcesData: s.a.object.isRequired
        };
        var bt = yt;
        function mt(e) {
            return (mt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function vt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function gt(e, t) {
            return !t || "object" !== mt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function St(e) {
            return (St = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function wt(e, t) {
            return (wt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var xt = function (e) {
            function t(e) {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), gt(this, St(t).call(this, e))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && wt(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    for (var e = [], t = 0; t < this.props.data.totalSlides; t++) e.push(o.a.createElement(bt, {
                        key: t,
                        i: t,
                        collections: this.props.collections,
                        core: this.props.core,
                        data: this.props.data,
                        elements: this.props.elements,
                        slide: this.props.slide,
                        sourcesData: this.props.sourcesData
                    }));
                    var n = this.props.isSwipingSlides ? "fslightbox-cursor-grabbing" : "";
                    return o.a.createElement("div", {
                        className: "fslightbox-media-holder " + n,
                        onMouseDown: this.props.core.slideSwiping.down.listener,
                        onTouchStart: this.props.core.slideSwiping.down.listener,
                        ref: this.props.elements.mediaHolder
                    }, e)
                }
            }]) && vt(n.prototype, i), s && vt(n, s), t
        }();
        xt.propTypes = {
            collections: s.a.object.isRequired,
            core: s.a.object.isRequired,
            data: s.a.object.isRequired,
            elements: s.a.object.isRequired,
            isSwipingSlides: s.a.bool.isRequired,
            slide: s.a.number.isRequired,
            sourcesData: s.a.object.isRequired
        };
        var Ot = xt, jt = function (e) {
            for (var t = [], n = 0; n < e; n++) t.push(o.a.createRef());
            return t
        }, _t = function (e) {
            for (var t = [], n = 0; n < e; n++) t.push(null);
            return t
        };
        function Et(e) {
            var t, n = e.collections.sourceSizeAdjusters;
            this.adjustAllSourcesSizes = function () {
                for (t = 0; r();) o(), t++
            };
            var r = function () {
                return t < n.length
            }, o = function () {
                i() || n[t].adjustSourceSize()
            }, i = function () {
                return !n[t]
            }
        }
        function Tt(e) {
            var t = this, n = e.elements.sources, r = null;
            this.animateSourceFromSlide = function (e) {
                return r = e - 1, t
            }, this.fadeOut = function () {
                o().add(Ge)
            }, this.fadeIn = function () {
                o().add(Je)
            }, this.removeFadeOut = function () {
                o().remove(Ge)
            }, this.removeFadeIn = function () {
                o().contains(Je) ? o().remove(Je) : o().remove(Ye)
            };
            var o = function () {
                return n[r].current.classList
            }
        }
        function Rt(e) {
            var t = this, n = e.getters.getSlide, r = e.data;
            this.isSourceInStage = function (e) {
                if (e++, 1 === n() && e === r.totalSlides) return !0;
                if (n() === r.totalSlides && 1 === e) return !0;
                var t = n() - e;
                return t === de || t === he || t === ye
            }, this.getPreviousSlideIndex = function () {
                return 1 === n() ? r.totalSlides - 1 : n() - 2
            }, this.getNextSlideIndex = function () {
                return n() === r.totalSlides ? 0 : n()
            }, this.getAllStageIndexes = function () {
                var e = { current: n() - 1 };
                return r.totalSlides > 1 && (e.next = t.getNextSlideIndex()), r.totalSlides > 2 && (e.previous = t.getPreviousSlideIndex()), e
            }
        }
        function Pt(e) {
            var t = e.data;
            this.turnOnFullscreen = function () {
                t.isFullscreenOpen = !0;
                var e = document.documentElement;
                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
            }, this.turnOffFullscreen = function () {
                t.isFullscreenOpen = !1, document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            }
        }
        function kt(e) {
            var t = this, n = e.core, r = n.stageSources,
                o = n.sourceHoldersTransformer.isStageSourceHolderAtIndexValidForTransform;
            this.stageSourcesIndexes = r.getAllStageIndexes(), this.isPreviousSourceHolderSet = function () {
                return o(t.stageSourcesIndexes.previous)
            }, this.isNextSourceHolderSet = function () {
                return o(t.stageSourcesIndexes.next)
            }
        }
        function Ct(e) {
            var t = this, n = e.core.sourceHoldersTransformer.transformStageSourceHolderAtIndex;
            kt.call(this, e), n(this.stageSourcesIndexes.current).zero(), this.withoutTimeout = function () {
                r(), o()
            }, this.withTimeout = function () {
                setTimeout(function () {
                    r(), o()
                }, 220)
            };
            var r = function () {
                t.isPreviousSourceHolderSet() && n(t.stageSourcesIndexes.previous).negative()
            }, o = function () {
                t.isNextSourceHolderSet() && n(t.stageSourcesIndexes.next).positive()
            }
        }
        function Lt(e) {
            var t, n = this, r = e.sourcesData.slideDistance, o = 0;
            this.setSourceHolder = function (e) {
                t = e.current.style
            }, this.byValue = function (e) {
                return o = e, n
            }, this.negative = function () {
                t.transform = s(-i())
            }, this.zero = function () {
                t.transform = s(0)
            }, this.positive = function () {
                t.transform = s(i())
            };
            var i = function () {
                return r * window.innerWidth
            }, s = function (e) {
                return "translate(".concat(e + o, "px,0)")
            }
        }
        function Dt(e) {
            var t = e.getters.getSlide, n = e.elements.sourceHolders, r = e.injector.transforms,
                o = r.getStageSourceHoldersByValueTransformer, i = (0, r.getSourceHolderTransformer)();
            this.transformStageSourceHolders = function () {
                return new Ct(e)
            }, this.transformStageSourceHoldersByValue = function (e) {
                o().transformByValue(e)
            }, this.transformStageSourceHolderAtIndex = function (e) {
                return i.setSourceHolder(n[e]), i
            }, this.isStageSourceHolderAtIndexValidForTransform = function (e) {
                return void 0 !== e && e !== t() - 1
            }
        }
        function qt(e) {
            var t = this, n = e.elements.container, r = e.core, o = r.sourceHoldersTransformer, i = r.fullscreenToggler,
                s = r.sizeController, u = r.eventsControllers.window, c = u.resize, a = u.swiping, l = e.data,
                f = e.setters.setState, p = e.getters.initialize, d = document.documentElement.classList, h = !1;
            this.openLightbox = function () {
                f({ isOpen: !0 }, function () {
                    y(), t.addOpeningClassToDocument()
                })
            }, this.addOpeningClassToDocument = function () {
                d.add(Ke)
            }, this.closeLightbox = function () {
                h || (h = !0, n.current.classList.add(Ze), a.removeListeners(), l.isFullscreenOpen && i.turnOffFullscreen(), setTimeout(function () {
                    b()
                }, ce))
            };
            var y = function () {
                l.isInitialized ? (c.attachListener(), a.attachListeners(), s.adjustMediaHolderSize(), o.transformStageSourceHolders().withoutTimeout()) : p()
            }, b = function () {
                n.current.classList.remove(Ze), h = !1, d.remove(Ke), f({ isOpen: !1 }), c.removeListener()
            }
        }
        function zt(e) {
            var t, n = e.core, r = n.sourceAnimator, o = n.sourceHoldersTransformer, i = e.getters.getSlide,
                s = e.setters.setState;
            this.changeSlideTo = function (e) {
                t = e, u(), s({ slide: t }, function () {
                    o.transformStageSourceHolders().withTimeout()
                })
            };
            var u = function () {
                r.animateSourceFromSlide(i()).removeFadeIn(), r.animateSourceFromSlide(i()).fadeOut(), r.animateSourceFromSlide(t).removeFadeOut(), r.animateSourceFromSlide(t).fadeIn()
            }
        }
        function At(e) {
            var t = e.core, n = t.sizeController.controlAllSizes,
                r = t.sourceSizeAdjusterIterator.adjustAllSourcesSizes,
                o = t.sourceHoldersTransformer.transformStageSourceHolders;
            this.attachListener = function () {
                window.addEventListener("resize", i)
            }, this.removeListener = function () {
                window.removeEventListener("resize", i)
            };
            var i = function () {
                n(), r(), o().withoutTimeout()
            }
        }
        function It(e) {
            var t = e.core.slideSwiping.move;
            this.attachListener = function () {
                window.addEventListener("mousemove", t.listener), window.addEventListener("touchmove", t.listener, { passive: !0 })
            }, this.removeListener = function () {
                window.removeEventListener("mousemove", t.listener), window.removeEventListener("touchmove", t.listener, { passive: !0 })
            }
        }
        function Ht(e) {
            var t = e.core.slideSwiping.up;
            this.attachListener = function () {
                window.addEventListener("mouseup", t.listener), window.addEventListener("touchend", t.listener, { passive: !0 })
            }, this.removeListener = function () {
                window.removeEventListener("mouseup", t.listener), window.removeEventListener("touchend", t.listener, { passive: !0 })
            }
        }
        function Ft(e) {
            var t = [new It(e), new Ht(e)];
            this.attachListeners = function () {
                for (var e = 0; e < t.length; e++) t[e].attachListener()
            }, this.removeListeners = function () {
                for (var e = 0; e < t.length; e++) t[e].removeListener()
            }
        }
        function Ut(e) {
            this.window = { resize: new At(e), swiping: new Ft(e) }
        }
        Ct.prototype = Object.create(kt.prototype), Ct.prototype.constructor = Ct;
        var Mt = 1e3, Nt = .1;
        function Bt(e) {
            var t = this, n = e.sourcesData, r = e.elements.mediaHolder;
            this.controlAllSizes = function () {
                o(), t.adjustMediaHolderSize()
            }, this.adjustMediaHolderSize = function () {
                r.current.style.width = n.maxSourceWidth + "px", r.current.style.height = n.maxSourceHeight + "px"
            };
            var o = function () {
                window.innerWidth < Mt ? n.maxSourceWidth = window.innerWidth : n.maxSourceWidth = window.innerWidth - window.innerWidth * Nt, n.maxSourceHeight = window.innerHeight - window.innerHeight * Nt
            }
        }
        function $t(e, t) {
            var n, r = e.setters.setState;
            this.listener = function (e) {
                n = e, o(), i(), s(), u()
            };
            var o = function () {
                n.target.tagName && ("VIDEO" === n.target.tagName || n.touches || n.preventDefault())
            }, i = function () {
                r({ isSwipingSlides: !0 })
            }, s = function () {
                n.touches ? t.downClientX = n.touches[0].clientX : t.downClientX = n.clientX
            }, u = function () {
                t.swipedDifference = 0
            }
        }
        function Vt(e, t) {
            var n = e.getters.getIsSwipingSlides, r = e.injector.slideSwiping.getMoveActionsForSwipingProps,
                o = (e.core.sourceHoldersTransformer, r(t));
            this.listener = function (e) {
                n() && !t.isAfterSwipeAnimationRunning && (o.setMoveEvent(e), o.runActions())
            }
        }
        function Wt() {
            this.listener = function (e) {
            }
        }
        function Xt(e) {
            var t = { downClientX: 0, isAfterSwipeAnimationRunning: !1, swipedDifference: 0 };
            this.down = new $t(e, t), this.move = new Vt(e, t), this.up = new Wt(t)
        }
        function Jt(e) {
            e.core = this, this.stageSources = new Rt(e), this.sourceSizeAdjusterIterator = new Et(e), this.sourceAnimator = new Tt(e), this.fullscreenToggler = new Pt(e), this.sourceHoldersTransformer = new Dt(e), this.slideChanger = new zt(e), this.slideSwiping = new Xt(e), this.sizeController = new Bt(e), this.eventsControllers = new Ut(e), this.closeOpenLightbox = new qt(e)
        }
        function Gt(e) {
            return (Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function Yt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function Zt(e, t) {
            return !t || "object" !== Gt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function Kt(e) {
            return (Kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function Qt(e, t) {
            return (Qt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        var en = function (e) {
            function t() {
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Zt(this, Kt(t).apply(this, arguments))
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Qt(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "render", value: function () {
                    var e = this.props.isSwipingSlides ? "fslightbox-cursor-grabbing" : "";
                    return o.a.createElement("div", {
                        className: "fslightbox-down-event-detector fslightbox-full-dimension " + e,
                        onMouseDown: this.props.core.slideSwiping.down.listener,
                        onTouchStart: this.props.core.slideSwiping.down.listener
                    })
                }
            }]) && Yt(n.prototype, i), s && Yt(n, s), t
        }();
        en.propTypes = { isSwipingSlides: s.a.bool.isRequired, core: s.a.object.isRequired };
        var tn = en, nn = function (e) {
            return e.isSwipingSlides ? o.a.createElement("div", { className: "fslightbox-slide" }) : null
        };
        nn.propTypes = { isSwipingSlides: s.a.bool.isRequired };
        var rn = nn;
        function on(e) {
            var t, n = this, r = e.core.sourceHoldersTransformer.transformStageSourceHolderAtIndex;
            kt.call(this, e), this.transformByValue = function (e) {
                t = e, r(n.stageSourcesIndexes.current).byValue(e).zero(), o(), i()
            };
            var o = function () {
                n.isPreviousSourceHolderSet() && r(n.stageSourcesIndexes.previous).byValue(t).negative()
            }, i = function () {
                n.isNextSourceHolderSet() && r(n.stageSourcesIndexes.next).byValue(t).positive()
            }
        }
        function sn(e, t) {
            var n, r, o = e.core, i = (o.stageSources, o.sourceHoldersTransformer.transformStageSourceHoldersByValue);
            this.setMoveEvent = function (e) {
                n = e
            }, this.runActions = function () {
                s(), u(), c()
            };
            var s = function () {
                r = n.touches ? n.touches[0].clientX : n.clientX
            }, u = function () {
                t.swipedDifference = r - t.downClientX
            }, c = function () {
                i(t.swipedDifference)
            }
        }
        function un(e) {
            return (un = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        function cn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        function an(e, t) {
            return !t || "object" !== un(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ln(e) {
            return (ln = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }
        function fn(e, t) {
            return (fn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        on.prototype = Object.create(kt.prototype), on.prototype.constructor = on;
        var pn = function (e) {
            function t(e) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), (n = an(this, ln(t).call(this, e))).setUpData(), n.setUpSourcesData(), n.setUpStates(), n.setUpGetters(), n.setUpSetters(), n.setUpElements(), n.setUpCollections(), n.setUpInjector(), n.setUpCore(), n
            }
            var n, i, s;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && fn(e, t)
            }(t, r["Component"]), n = t, (i = [{
                key: "setUpData", value: function () {
                    this.data = {
                        urls: this.props.urls,
                        totalSlides: this.props.urls.length,
                        isFullscreenOpen: !1,
                        isInitialized: !1,
                        isSwipingSlides: !1,
                        deviceType: navigator.platform.includes("Win") ? 0 : navigator.platform.includes("Linux") ? 1 : 2
                    }
                }
            }, {
                key: "setUpSourcesData", value: function () {
                    this.sourcesData = {
                        sourcesTypes: [],
                        isSourceAlreadyLoadedArray: [],
                        sourcesToCreateOnConstruct: [],
                        videosPosters: this.props.videosPosters ? this.props.videosPosters : [],
                        maxSourceWidth: 0,
                        maxSourceHeight: 0,
                        slideDistance: this.props.slideDistance ? this.props.slideDistance : 1.3,
                        sourcesDimensions: []
                    }
                }
            }, {
                key: "setUpStates", value: function () {
                    this.state = {
                        isOpen: this.props.isOpen,
                        isSwipingSlides: !1,
                        slide: this.props.slide ? this.props.slide : 1
                    }
                }
            }, {
                key: "setUpGetters", value: function () {
                    var e = this;
                    this.getters = {
                        initialize: function () {
                            return e.initialize()
                        }, getSlide: function () {
                            return e.state.slide
                        }, getIsSwipingSlides: function () {
                            return e.state.isSwipingSlides
                        }
                    }
                }
            }, {
                key: "setUpSetters", value: function () {
                    var e = this;
                    this.setters = {
                        setState: function (t, n) {
                            return e.setState(t, n)
                        }
                    }
                }
            }, {
                key: "setUpElements", value: function () {
                    this.elements = {
                        container: o.a.createRef(),
                        mediaHolder: o.a.createRef(),
                        sources: jt(this.data.totalSlides),
                        sourceHolders: jt(this.data.totalSlides),
                        sourcesJSXComponents: _t(this.data.totalSlides)
                    }
                }
            }, {
                key: "setUpInjector", value: function () {
                    var e = this;
                    this.injector = {
                        transforms: {
                            getSourceHolderTransformer: function () {
                                return new Lt(e)
                            }, getStageSourceHoldersByValueTransformer: function () {
                                return new on(e)
                            }
                        }, slideSwiping: {
                            getMoveActionsForSwipingProps: function (t) {
                                return new sn(e, t)
                            }
                        }
                    }
                }
            }, {
                key: "setUpCore", value: function () {
                    this.core = new Jt(this)
                }
            }, {
                key: "setUpCollections", value: function () {
                    this.collections = { sourceSizeAdjusters: [] }
                }
            }, {
                key: "componentDidUpdate", value: function (e, t, n) {
                    e.isOpen !== this.props.isOpen && (this.state.isOpen ? this.core.closeOpenLightbox.closeLightbox() : this.core.closeOpenLightbox.openLightbox()), e.slide !== this.props.slide && this.core.slideChanger.changeSlideTo(this.props.slide)
                }
            }, {
                key: "initialize", value: function () {
                    this.data.isInitialized = !0, this.core.sizeController.controlAllSizes(), this.core.eventsControllers.window.resize.attachListener(), this.core.eventsControllers.window.swiping.attachListeners(), this.core.sourceHoldersTransformer.transformStageSourceHolders().withoutTimeout()
                }
            }, {
                key: "componentDidMount", value: function () {
                    this.props.isOpen && (this.initialize(), this.core.closeOpenLightbox.addOpeningClassToDocument())
                }
            }, {
                key: "render", value: function () {
                    return this.state.isOpen ? o.a.createElement("div", {
                        ref: this.elements.container,
                        className: "fslightbox-container fslightbox-full-dimension"
                    }, o.a.createElement(tn, {
                        isSwipingSlides: this.state.isSwipingSlides,
                        core: this.core
                    }), o.a.createElement(rn, { isSwipingSlides: this.state.isSwipingSlides }), o.a.createElement(M, {
                        core: this.core,
                        data: this.data,
                        slide: this.state.slide
                    }), this.data.totalSlides > 1 ? o.a.createElement(o.a.Fragment, null, o.a.createElement(J, { core: this.core }), o.a.createElement(te, { core: this.core })) : null, o.a.createElement(Ot, {
                        collections: this.collections,
                        core: this.core,
                        data: this.data,
                        elements: this.elements,
                        isSwipingSlides: this.state.isSwipingSlides,
                        slide: this.state.slide,
                        sourcesData: this.sourcesData
                    })) : null
                }
            }]) && cn(n.prototype, i), s && cn(n, s), t
        }();
        pn.propTypes = {
            isOpen: s.a.bool.isRequired,
            urls: s.a.array.isRequired,
            onOpen: s.a.func,
            onClose: s.a.func,
            onInit: s.a.func,
            onShow: s.a.func,
            videosPosters: s.a.array,
            slide: s.a.number,
            slideDistance: s.a.number
        };
        t.default = pn
    }])
});