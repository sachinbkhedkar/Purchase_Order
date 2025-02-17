﻿/*
 Highmaps JS v8.2.2 (2020-10-22)

 (c) 2011-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (V, O) { "object" === typeof module && module.exports ? (O["default"] = O, module.exports = V.document ? O(V) : O) : "function" === typeof define && define.amd ? define("highcharts/highmaps", function () { return O(V) }) : (V.Highcharts && V.Highcharts.error(16, !0), V.Highcharts = O(V)) })("undefined" !== typeof window ? window : this, function (V) {
    function O(n, h, q, z) { n.hasOwnProperty(h) || (n[h] = z.apply(null, q)) } var q = {}; O(q, "Core/Globals.js", [], function () {
        var n = "undefined" !== typeof V ? V : "undefined" !== typeof window ? window : {}, h = n.document,
        q = n.navigator && n.navigator.userAgent || "", z = h && h.createElementNS && !!h.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, y = /(edge|msie|trident)/i.test(q) && !n.opera, F = -1 !== q.indexOf("Firefox"), M = -1 !== q.indexOf("Chrome"), G = F && 4 > parseInt(q.split("Firefox/")[1], 10); return {
            product: "Highcharts", version: "8.2.2", deg2rad: 2 * Math.PI / 360, doc: h, hasBidiBug: G, hasTouch: !!n.TouchEvent, isMS: y, isWebKit: -1 !== q.indexOf("AppleWebKit"), isFirefox: F, isChrome: M, isSafari: !M && -1 !== q.indexOf("Safari"), isTouchDevice: /(Mobile|Android|Windows Phone)/.test(q),
            SVG_NS: "http://www.w3.org/2000/svg", chartCount: 0, seriesTypes: {}, symbolSizes: {}, svg: z, win: n, marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"], noop: function () { }, charts: [], dateFormats: {}
        }
    }); O(q, "Core/Utilities.js", [q["Core/Globals.js"]], function (n) {
        function h(d, t, a, b) {
            var c = t ? "Highcharts error" : "Highcharts warning"; 32 === d && (d = c + ": Deprecated member"); var f = u(d), J = f ? c + " #" + d + ": www.highcharts.com/errors/" + d + "/" : d.toString(); c = function () {
                if (t) throw Error(J); r.console && -1 === h.messages.indexOf(J) &&
                    console.log(J)
            }; if ("undefined" !== typeof b) { var l = ""; f && (J += "?"); S(b, function (d, t) { l += "\n - " + t + ": " + d; f && (J += encodeURI(t) + "=" + encodeURI(d)) }); J += l } a ? aa(a, "displayError", { code: d, message: J, params: b }, c) : c(); h.messages.push(J)
        } function q() { var d, t = arguments, a = {}, b = function (d, t) { "object" !== typeof d && (d = {}); S(t, function (a, c) { !z(a, !0) || v(a) || H(a) ? d[c] = t[c] : d[c] = b(d[c] || {}, a) }); return d }; !0 === t[0] && (a = t[1], t = Array.prototype.slice.call(t, 2)); var c = t.length; for (d = 0; d < c; d++)a = b(a, t[d]); return a } function z(d,
            t) { return !!d && "object" === typeof d && (!t || !D(d)) } function y(d, t, a) { var b; g(t) ? p(a) ? d.setAttribute(t, a) : d && d.getAttribute && ((b = d.getAttribute(t)) || "class" !== t || (b = d.getAttribute(t + "Name"))) : S(t, function (t, a) { d.setAttribute(a, t) }); return b } function F() { for (var d = arguments, t = d.length, a = 0; a < t; a++) { var b = d[a]; if ("undefined" !== typeof b && null !== b) return b } } function M(d, t) {
                if (!d) return t; var a = d.split(".").reverse(); if (1 === a.length) return t[d]; for (d = a.pop(); "undefined" !== typeof d && "undefined" !== typeof t && null !==
                    t;)t = t[d], d = a.pop(); return t
            } n.timers = []; var G = n.charts, B = n.doc, r = n.win; (h || (h = {})).messages = []; n.error = h; n.merge = q; var m = n.pInt = function (d, t) { return parseInt(d, t || 10) }, g = n.isString = function (d) { return "string" === typeof d }, D = n.isArray = function (d) { d = Object.prototype.toString.call(d); return "[object Array]" === d || "[object Array Iterator]" === d }; n.isObject = z; var H = n.isDOMElement = function (d) { return z(d) && "number" === typeof d.nodeType }, v = n.isClass = function (d) {
                var t = d && d.constructor; return !(!z(d, !0) || H(d) || !t ||
                    !t.name || "Object" === t.name)
            }, u = n.isNumber = function (d) { return "number" === typeof d && !isNaN(d) && Infinity > d && -Infinity < d }, A = n.erase = function (d, t) { for (var a = d.length; a--;)if (d[a] === t) { d.splice(a, 1); break } }, p = n.defined = function (d) { return "undefined" !== typeof d && null !== d }; n.attr = y; var k = n.splat = function (d) { return D(d) ? d : [d] }, c = n.syncTimeout = function (d, t, a) { if (0 < t) return setTimeout(d, t, a); d.call(0, a); return -1 }, e = n.clearTimeout = function (d) { p(d) && clearTimeout(d) }, f = n.extend = function (d, t) {
                var a; d || (d = {}); for (a in t) d[a] =
                    t[a]; return d
            }; n.pick = F; var b = n.css = function (d, t) { n.isMS && !n.svg && t && "undefined" !== typeof t.opacity && (t.filter = "alpha(opacity=" + 100 * t.opacity + ")"); f(d.style, t) }, l = n.createElement = function (d, t, a, c, J) { d = B.createElement(d); t && f(d, t); J && b(d, { padding: "0", border: "none", margin: "0" }); a && b(d, a); c && c.appendChild(d); return d }, a = n.extendClass = function (d, t) { var a = function () { }; a.prototype = new d; f(a.prototype, t); return a }, x = n.pad = function (d, t, a) {
                return Array((t || 2) + 1 - String(d).replace("-", "").length).join(a || "0") +
                    d
            }, E = n.relativeLength = function (d, t, a) { return /%$/.test(d) ? t * parseFloat(d) / 100 + (a || 0) : parseFloat(d) }, C = n.wrap = function (d, t, a) { var b = d[t]; d[t] = function () { var d = Array.prototype.slice.call(arguments), t = arguments, c = this; c.proceed = function () { b.apply(c, arguments.length ? arguments : t) }; d.unshift(b); d = a.apply(this, d); c.proceed = null; return d } }, K = n.format = function (d, t, a) {
                var b = "{", c = !1, J = [], f = /f$/, l = /\.([0-9])/, e = n.defaultOptions.lang, w = a && a.time || n.time; for (a = a && a.numberFormatter || Q; d;) {
                    var P = d.indexOf(b); if (-1 ===
                        P) break; var k = d.slice(0, P); if (c) { k = k.split(":"); b = M(k.shift() || "", t); if (k.length && "number" === typeof b) if (k = k.join(":"), f.test(k)) { var x = parseInt((k.match(l) || ["", "-1"])[1], 10); null !== b && (b = a(b, x, e.decimalPoint, -1 < k.indexOf(",") ? e.thousandsSep : "")) } else b = w.dateFormat(k, b); J.push(b) } else J.push(k); d = d.slice(P + 1); b = (c = !c) ? "}" : "{"
                } J.push(d); return J.join("")
            }, T = n.getMagnitude = function (d) { return Math.pow(10, Math.floor(Math.log(d) / Math.LN10)) }, R = n.normalizeTickInterval = function (d, t, a, b, c) {
                var f = d; a = F(a,
                    1); var l = d / a; t || (t = c ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === b && (1 === a ? t = t.filter(function (d) { return 0 === d % 1 }) : .1 >= a && (t = [1 / a]))); for (b = 0; b < t.length && !(f = t[b], c && f * a >= d || !c && l <= (t[b] + (t[b + 1] || t[b])) / 2); b++); return f = J(f * a, -Math.round(Math.log(.001) / Math.LN10))
            }, N = n.stableSort = function (d, t) { var a = d.length, b, c; for (c = 0; c < a; c++)d[c].safeI = c; d.sort(function (d, a) { b = t(d, a); return 0 === b ? d.safeI - a.safeI : b }); for (c = 0; c < a; c++)delete d[c].safeI }, I = n.arrayMin = function (d) {
                for (var t = d.length, a = d[0]; t--;)d[t] <
                    a && (a = d[t]); return a
            }, w = n.arrayMax = function (d) { for (var t = d.length, a = d[0]; t--;)d[t] > a && (a = d[t]); return a }, d = n.destroyObjectProperties = function (d, t) { S(d, function (a, b) { a && a !== t && a.destroy && a.destroy(); delete d[b] }) }, t = n.discardElement = function (d) { var t = n.garbageBin; t || (t = l("div")); d && t.appendChild(d); t.innerHTML = "" }, J = n.correctFloat = function (d, t) { return parseFloat(d.toPrecision(t || 14)) }, P = n.timeUnits = { millisecond: 1, second: 1E3, minute: 6E4, hour: 36E5, day: 864E5, week: 6048E5, month: 24192E5, year: 314496E5 }, Q =
                    n.numberFormat = function (d, t, a, b) {
                        d = +d || 0; t = +t; var c = n.defaultOptions.lang, J = (d.toString().split(".")[1] || "").split("e")[0].length, f = d.toString().split("e"); if (-1 === t) t = Math.min(J, 20); else if (!u(t)) t = 2; else if (t && f[1] && 0 > f[1]) { var l = t + +f[1]; 0 <= l ? (f[0] = (+f[0]).toExponential(l).split("e")[0], t = l) : (f[0] = f[0].split(".")[0] || 0, d = 20 > t ? (f[0] * Math.pow(10, f[1])).toFixed(t) : 0, f[1] = 0) } var e = (Math.abs(f[1] ? f[0] : d) + Math.pow(10, -Math.max(t, J) - 1)).toFixed(t); J = String(m(e)); l = 3 < J.length ? J.length % 3 : 0; a = F(a, c.decimalPoint);
                        b = F(b, c.thousandsSep); d = (0 > d ? "-" : "") + (l ? J.substr(0, l) + b : ""); d += J.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + b); t && (d += a + e.slice(-t)); f[1] && 0 !== +d && (d += "e" + f[1]); return d
                    }; Math.easeInOutSine = function (d) { return -.5 * (Math.cos(Math.PI * d) - 1) }; var ba = n.getStyle = function (d, t, a) {
                        if ("width" === t) return t = Math.min(d.offsetWidth, d.scrollWidth), a = d.getBoundingClientRect && d.getBoundingClientRect().width, a < t && a >= t - 1 && (t = Math.floor(a)), Math.max(0, t - n.getStyle(d, "padding-left") - n.getStyle(d, "padding-right")); if ("height" ===
                            t) return Math.max(0, Math.min(d.offsetHeight, d.scrollHeight) - n.getStyle(d, "padding-top") - n.getStyle(d, "padding-bottom")); r.getComputedStyle || h(27, !0); if (d = r.getComputedStyle(d, void 0)) d = d.getPropertyValue(t), F(a, "opacity" !== t) && (d = m(d)); return d
                    }, Y = n.inArray = function (d, t, a) { h(32, !1, void 0, { "Highcharts.inArray": "use Array.indexOf" }); return t.indexOf(d, a) }, Z = n.find = Array.prototype.find ? function (d, t) { return d.find(t) } : function (d, t) { var a, b = d.length; for (a = 0; a < b; a++)if (t(d[a], a)) return d[a] }; n.keys = function (d) {
                        h(32,
                            !1, void 0, { "Highcharts.keys": "use Object.keys" }); return Object.keys(d)
                    }; var X = n.offset = function (d) { var t = B.documentElement; d = d.parentElement || d.parentNode ? d.getBoundingClientRect() : { top: 0, left: 0 }; return { top: d.top + (r.pageYOffset || t.scrollTop) - (t.clientTop || 0), left: d.left + (r.pageXOffset || t.scrollLeft) - (t.clientLeft || 0) } }, S = n.objectEach = function (d, t, a) { for (var b in d) Object.hasOwnProperty.call(d, b) && t.call(a || d[b], d[b], b, d) }; S({ map: "map", each: "forEach", grep: "filter", reduce: "reduce", some: "some" }, function (d,
                        t) { n[t] = function (a) { var b; h(32, !1, void 0, (b = {}, b["Highcharts." + t] = "use Array." + d, b)); return Array.prototype[d].apply(a, [].slice.call(arguments, 1)) } }); var W = n.addEvent = function (d, t, a, b) {
                        void 0 === b && (b = {}); var c = d.addEventListener || n.addEventListenerPolyfill; var f = "function" === typeof d && d.prototype ? d.prototype.protoEvents = d.prototype.protoEvents || {} : d.hcEvents = d.hcEvents || {}; n.Point && d instanceof n.Point && d.series && d.series.chart && (d.series.chart.runTrackerClick = !0); c && c.call(d, t, a, !1); f[t] || (f[t] =
                            []); f[t].push({ fn: a, order: "number" === typeof b.order ? b.order : Infinity }); f[t].sort(function (d, t) { return d.order - t.order }); return function () { U(d, t, a) }
                        }, U = n.removeEvent = function (d, t, a) {
                            function b(t, a) { var b = d.removeEventListener || n.removeEventListenerPolyfill; b && b.call(d, t, a, !1) } function c(a) { var c; if (d.nodeName) { if (t) { var f = {}; f[t] = !0 } else f = a; S(f, function (d, t) { if (a[t]) for (c = a[t].length; c--;)b(t, a[t][c].fn) }) } } var f;["protoEvents", "hcEvents"].forEach(function (J, l) {
                                var e = (l = l ? d : d.prototype) && l[J]; e &&
                                    (t ? (f = e[t] || [], a ? (e[t] = f.filter(function (d) { return a !== d.fn }), b(t, a)) : (c(e), e[t] = [])) : (c(e), l[J] = {}))
                            })
                        }, aa = n.fireEvent = function (d, t, a, b) {
                            var c; a = a || {}; if (B.createEvent && (d.dispatchEvent || d.fireEvent)) { var J = B.createEvent("Events"); J.initEvent(t, !0, !0); f(J, a); d.dispatchEvent ? d.dispatchEvent(J) : d.fireEvent(t, J) } else a.target || f(a, { preventDefault: function () { a.defaultPrevented = !0 }, target: d, type: t }), function (t, b) {
                            void 0 === t && (t = []); void 0 === b && (b = []); var f = 0, J = 0, l = t.length + b.length; for (c = 0; c < l; c++)!1 ===
                                (t[f] ? b[J] ? t[f].order <= b[J].order ? t[f++] : b[J++] : t[f++] : b[J++]).fn.call(d, a) && a.preventDefault()
                            }(d.protoEvents && d.protoEvents[t], d.hcEvents && d.hcEvents[t]); b && !a.defaultPrevented && b.call(d, a)
                        }, ca, da = n.uniqueKey = function () { var d = Math.random().toString(36).substring(2, 9) + "-", t = 0; return function () { return "highcharts-" + (ca ? "" : d) + t++ } }(), ea = n.useSerialIds = function (d) { return ca = F(d, ca) }, fa = n.isFunction = function (d) { return "function" === typeof d }, ha = n.getOptions = function () { return n.defaultOptions }, ia = n.setOptions =
                            function (d) { n.defaultOptions = q(!0, n.defaultOptions, d); (d.time || d.global) && n.time.update(q(n.defaultOptions.global, n.defaultOptions.time, d.global, d.time)); return n.defaultOptions }; r.jQuery && (r.jQuery.fn.highcharts = function () { var d = [].slice.call(arguments); if (this[0]) return d[0] ? (new (n[g(d[0]) ? d.shift() : "Chart"])(this[0], d[0], d[1]), this) : G[y(this[0], "data-highcharts-chart")] }); return {
                                addEvent: W, arrayMax: w, arrayMin: I, attr: y, clamp: function (d, t, a) { return d > t ? d < a ? d : a : t }, clearTimeout: e, correctFloat: J, createElement: l,
                                css: b, defined: p, destroyObjectProperties: d, discardElement: t, erase: A, error: h, extend: f, extendClass: a, find: Z, fireEvent: aa, format: K, getMagnitude: T, getNestedProperty: M, getOptions: ha, getStyle: ba, inArray: Y, isArray: D, isClass: v, isDOMElement: H, isFunction: fa, isNumber: u, isObject: z, isString: g, merge: q, normalizeTickInterval: R, numberFormat: Q, objectEach: S, offset: X, pad: x, pick: F, pInt: m, relativeLength: E, removeEvent: U, setOptions: ia, splat: k, stableSort: N, syncTimeout: c, timeUnits: P, uniqueKey: da, useSerialIds: ea, wrap: C
                            }
    }); O(q,
        "Core/Color/Color.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
            var q = h.isNumber, z = h.merge, y = h.pInt; ""; h = function () {
                function h(q) {
                this.parsers = [{ regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/, parse: function (h) { return [y(h[1]), y(h[2]), y(h[3]), parseFloat(h[4], 10)] } }, { regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/, parse: function (h) { return [y(h[1]), y(h[2]), y(h[3]), 1] } }]; this.rgba = []; if (n.Color !== h) return new n.Color(q);
                    if (!(this instanceof h)) return new h(q); this.init(q)
                } h.parse = function (n) { return new h(n) }; h.prototype.init = function (n) {
                    var q, B; if ((this.input = n = h.names[n && n.toLowerCase ? n.toLowerCase() : ""] || n) && n.stops) this.stops = n.stops.map(function (g) { return new h(g[1]) }); else {
                        if (n && n.charAt && "#" === n.charAt()) { var r = n.length; n = parseInt(n.substr(1), 16); 7 === r ? q = [(n & 16711680) >> 16, (n & 65280) >> 8, n & 255, 1] : 4 === r && (q = [(n & 3840) >> 4 | (n & 3840) >> 8, (n & 240) >> 4 | n & 240, (n & 15) << 4 | n & 15, 1]) } if (!q) for (B = this.parsers.length; B-- && !q;) {
                            var m =
                                this.parsers[B]; (r = m.regex.exec(n)) && (q = m.parse(r))
                        }
                    } this.rgba = q || []
                }; h.prototype.get = function (n) { var h = this.input, B = this.rgba; if ("undefined" !== typeof this.stops) { var r = z(h); r.stops = [].concat(r.stops); this.stops.forEach(function (m, g) { r.stops[g] = [r.stops[g][0], m.get(n)] }) } else r = B && q(B[0]) ? "rgb" === n || !n && 1 === B[3] ? "rgb(" + B[0] + "," + B[1] + "," + B[2] + ")" : "a" === n ? B[3] : "rgba(" + B.join(",") + ")" : h; return r }; h.prototype.brighten = function (n) {
                    var h, B = this.rgba; if (this.stops) this.stops.forEach(function (r) { r.brighten(n) });
                    else if (q(n) && 0 !== n) for (h = 0; 3 > h; h++)B[h] += y(255 * n), 0 > B[h] && (B[h] = 0), 255 < B[h] && (B[h] = 255); return this
                }; h.prototype.setOpacity = function (n) { this.rgba[3] = n; return this }; h.prototype.tweenTo = function (n, h) { var B = this.rgba, r = n.rgba; r.length && B && B.length ? (n = 1 !== r[3] || 1 !== B[3], h = (n ? "rgba(" : "rgb(") + Math.round(r[0] + (B[0] - r[0]) * (1 - h)) + "," + Math.round(r[1] + (B[1] - r[1]) * (1 - h)) + "," + Math.round(r[2] + (B[2] - r[2]) * (1 - h)) + (n ? "," + (r[3] + (B[3] - r[3]) * (1 - h)) : "") + ")") : h = n.input || "none"; return h }; h.names = { white: "#ffffff", black: "#000000" };
                return h
            }(); n.Color = h; n.color = h.parse; return h
        }); O(q, "Core/Animation/Fx.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
            var q = n.win, z = h.isNumber, y = h.objectEach; h = function () {
                function h(h, n, B) { this.pos = NaN; this.options = n; this.elem = h; this.prop = B } h.prototype.dSetter = function () {
                    var h = this.paths, n = h && h[0]; h = h && h[1]; var B = [], r = this.now || 0; if (1 !== r && n && h) if (n.length === h.length && 1 > r) for (var m = 0; m < h.length; m++) {
                        for (var g = n[m], D = h[m], H = [], v = 0; v < D.length; v++) {
                            var u = g[v], A = D[v]; H[v] = "number" ===
                                typeof u && "number" === typeof A && ("A" !== D[0] || 4 !== v && 5 !== v) ? u + r * (A - u) : A
                        } B.push(H)
                    } else B = h; else B = this.toD || []; this.elem.attr("d", B, void 0, !0)
                }; h.prototype.update = function () { var h = this.elem, n = this.prop, B = this.now, r = this.options.step; if (this[n + "Setter"]) this[n + "Setter"](); else h.attr ? h.element && h.attr(n, B, null, !0) : h.style[n] = B + this.unit; r && r.call(h, B, this) }; h.prototype.run = function (h, G, B) {
                    var r = this, m = r.options, g = function (v) { return g.stopped ? !1 : r.step(v) }, D = q.requestAnimationFrame || function (v) {
                        setTimeout(v,
                            13)
                    }, H = function () { for (var v = 0; v < n.timers.length; v++)n.timers[v]() || n.timers.splice(v--, 1); n.timers.length && D(H) }; h !== G || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = h, this.end = G, this.unit = B, this.now = this.start, this.pos = 0, g.elem = this.elem, g.prop = this.prop, g() && 1 === n.timers.push(g) && D(H)) : (delete m.curAnim[this.prop], m.complete && 0 === Object.keys(m.curAnim).length && m.complete.call(this.elem))
                }; h.prototype.step = function (h) {
                    var n = +new Date, B = this.options, r = this.elem, m = B.complete,
                    g = B.duration, D = B.curAnim; if (r.attr && !r.element) h = !1; else if (h || n >= g + this.startTime) { this.now = this.end; this.pos = 1; this.update(); var H = D[this.prop] = !0; y(D, function (v) { !0 !== v && (H = !1) }); H && m && m.call(r); h = !1 } else this.pos = B.easing((n - this.startTime) / g), this.now = this.start + (this.end - this.start) * this.pos, this.update(), h = !0; return h
                }; h.prototype.initPath = function (h, n, B) {
                    function r(k, c) {
                        for (; k.length < p;) {
                            var e = k[0], f = c[p - k.length]; f && "M" === e[0] && (k[0] = "C" === f[0] ? ["C", e[1], e[2], e[1], e[2], e[1], e[2]] : ["L", e[1],
                                e[2]]); k.unshift(e); H && k.push(k[k.length - 1])
                        }
                    } function m(k, c) { for (; k.length < p;)if (c = k[k.length / v - 1].slice(), "C" === c[0] && (c[1] = c[5], c[2] = c[6]), H) { var e = k[k.length / v].slice(); k.splice(k.length / 2, 0, c, e) } else k.push(c) } var g = h.startX, D = h.endX; n = n && n.slice(); B = B.slice(); var H = h.isArea, v = H ? 2 : 1; if (!n) return [B, B]; if (g && D) {
                        for (h = 0; h < g.length; h++)if (g[h] === D[0]) { var u = h; break } else if (g[0] === D[D.length - g.length + h]) { u = h; var A = !0; break } else if (g[g.length - 1] === D[D.length - g.length + h]) { u = g.length - h; break } "undefined" ===
                            typeof u && (n = [])
                    } if (n.length && z(u)) { var p = B.length + u * v; A ? (r(n, B), m(B, n)) : (r(B, n), m(n, B)) } return [n, B]
                }; h.prototype.fillSetter = function () { h.prototype.strokeSetter.apply(this, arguments) }; h.prototype.strokeSetter = function () { this.elem.attr(this.prop, n.color(this.start).tweenTo(n.color(this.end), this.pos), null, !0) }; return h
            }(); return n.Fx = h
        }); O(q, "Core/Animation/AnimationUtilities.js", [q["Core/Animation/Fx.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q) {
            var L = q.defined, y = q.getStyle, F =
                q.isArray, M = q.isNumber, G = q.isObject, B = q.merge, r = q.objectEach, m = q.pick; q = h.setAnimation = function (u, v) { v.renderer.globalAnimation = m(u, v.options.chart.animation, !0) }; var g = h.animObject = function (u) { return G(u) ? h.merge({ duration: 500, defer: 0 }, u) : { duration: u ? 500 : 0, defer: 0 } }, D = h.getDeferredAnimation = function (u, v, p) {
                    var k = g(v), c = 0, e = 0; (p ? [p] : u.series).forEach(function (f) { f = g(f.options.animation); c = v && L(v.defer) ? k.defer : Math.max(c, f.duration + f.defer); e = Math.min(k.duration, f.duration) }); u.renderer.forExport &&
                        (c = 0); return { defer: Math.max(0, c - e), duration: Math.min(c, e) }
                }, H = h.animate = function (u, g, p) {
                    var k, c = "", e, f; if (!G(p)) { var b = arguments; p = { duration: b[2], easing: b[3], complete: b[4] } } M(p.duration) || (p.duration = 400); p.easing = "function" === typeof p.easing ? p.easing : Math[p.easing] || Math.easeInOutSine; p.curAnim = B(g); r(g, function (b, a) {
                        v(u, a); f = new n(u, p, a); e = null; "d" === a && F(g.d) ? (f.paths = f.initPath(u, u.pathArray, g.d), f.toD = g.d, k = 0, e = 1) : u.attr ? k = u.attr(a) : (k = parseFloat(y(u, a)) || 0, "opacity" !== a && (c = "px")); e || (e = b);
                        e && e.match && e.match("px") && (e = e.replace(/px/g, "")); f.run(k, e, c)
                    })
                }, v = h.stop = function (v, g) { for (var p = h.timers.length; p--;)h.timers[p].elem !== v || g && g !== h.timers[p].prop || (h.timers[p].stopped = !0) }; return { animate: H, animObject: g, getDeferredAnimation: D, setAnimation: q, stop: v }
        }); O(q, "Core/Renderer/SVG/SVGElement.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Color/Color.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
            var y = n.animate, L = n.animObject, M = n.stop, G = q.deg2rad, B = q.doc,
            r = q.hasTouch, m = q.isFirefox, g = q.noop, D = q.svg, H = q.SVG_NS, v = q.win, u = z.attr, A = z.createElement, p = z.css, k = z.defined, c = z.erase, e = z.extend, f = z.fireEvent, b = z.isArray, l = z.isFunction, a = z.isNumber, x = z.isString, E = z.merge, C = z.objectEach, K = z.pick, T = z.pInt, R = z.syncTimeout, N = z.uniqueKey; ""; n = function () {
                function I() { this.height = this.element = void 0; this.opacity = 1; this.renderer = void 0; this.SVG_NS = H; this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" "); this.width = void 0 } I.prototype._defaultGetter =
                    function (a) { a = K(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0); /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a)); return a }; I.prototype._defaultSetter = function (a, d, t) { t.setAttribute(d, a) }; I.prototype.add = function (a) {
                        var d = this.renderer, t = this.element; a && (this.parentGroup = a); this.parentInverted = a && a.inverted; "undefined" !== typeof this.textStr && "text" === this.element.nodeName && d.buildText(this); this.added = !0; if (!a || a.handleZ || this.zIndex) var b = this.zIndexSetter(); b || (a ? a.element : d.box).appendChild(t);
                        if (this.onAdd) this.onAdd(); return this
                    }; I.prototype.addClass = function (a, d) { var t = d ? "" : this.attr("class") || ""; a = (a || "").split(/ /g).reduce(function (d, a) { -1 === t.indexOf(a) && d.push(a); return d }, t ? [t] : []).join(" "); a !== t && this.attr("class", a); return this }; I.prototype.afterSetters = function () { this.doTransform && (this.updateTransform(), this.doTransform = !1) }; I.prototype.align = function (a, d, t) {
                        var b, f = {}; var l = this.renderer; var e = l.alignedObjects; var w, k; if (a) {
                            if (this.alignOptions = a, this.alignByTranslate = d,
                                !t || x(t)) this.alignTo = b = t || "renderer", c(e, this), e.push(this), t = void 0
                        } else a = this.alignOptions, d = this.alignByTranslate, b = this.alignTo; t = K(t, l[b], l); b = a.align; l = a.verticalAlign; e = (t.x || 0) + (a.x || 0); var E = (t.y || 0) + (a.y || 0); "right" === b ? w = 1 : "center" === b && (w = 2); w && (e += (t.width - (a.width || 0)) / w); f[d ? "translateX" : "x"] = Math.round(e); "bottom" === l ? k = 1 : "middle" === l && (k = 2); k && (E += (t.height - (a.height || 0)) / k); f[d ? "translateY" : "y"] = Math.round(E); this[this.placed ? "animate" : "attr"](f); this.placed = !0; this.alignAttr =
                            f; return this
                    }; I.prototype.alignSetter = function (a) { var d = { left: "start", center: "middle", right: "end" }; d[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", d[a])) }; I.prototype.animate = function (a, d, t) { var b = this, c = L(K(d, this.renderer.globalAnimation, !0)); d = c.defer; K(B.hidden, B.msHidden, B.webkitHidden, !1) && (c.duration = 0); 0 !== c.duration ? (t && (c.complete = t), R(function () { b.element && y(b, a, c) }, d)) : (this.attr(a, void 0, t), C(a, function (d, t) { c.step && c.step.call(this, d, { prop: t, pos: 1 }) }, this)); return this };
                I.prototype.applyTextOutline = function (a) {
                    var d = this.element, t; -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(d.style.fill))); a = a.split(" "); var b = a[a.length - 1]; if ((t = a[0]) && "none" !== t && q.svg) {
                    this.fakeTS = !0; a = [].slice.call(d.getElementsByTagName("tspan")); this.ySetter = this.xSetter; t = t.replace(/(^[\d\.]+)(.*?)$/g, function (d, t, a) { return 2 * t + a }); this.removeTextOutline(a); var c = d.textContent ? /^[\u0591-\u065F\u066A-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/.test(d.textContent) :
                        !1; var f = d.firstChild; a.forEach(function (a, l) { 0 === l && (a.setAttribute("x", d.getAttribute("x")), l = d.getAttribute("y"), a.setAttribute("y", l || 0), null === l && d.setAttribute("y", 0)); l = a.cloneNode(!0); u(c && !m ? a : l, { "class": "highcharts-text-outline", fill: b, stroke: b, "stroke-width": t, "stroke-linejoin": "round" }); d.insertBefore(l, f) }); c && m && a[0] && (a = a[0].cloneNode(!0), a.textContent = " ", d.insertBefore(a, f))
                    }
                }; I.prototype.attr = function (a, d, t, b) {
                    var c = this.element, f, l = this, J, e, w = this.symbolCustomAttribs; if ("string" ===
                        typeof a && "undefined" !== typeof d) { var k = a; a = {}; a[k] = d } "string" === typeof a ? l = (this[a + "Getter"] || this._defaultGetter).call(this, a, c) : (C(a, function (d, t) { J = !1; b || M(this, t); this.symbolName && -1 !== w.indexOf(t) && (f || (this.symbolAttr(a), f = !0), J = !0); !this.rotation || "x" !== t && "y" !== t || (this.doTransform = !0); J || (e = this[t + "Setter"] || this._defaultSetter, e.call(this, d, t, c), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(t) && this.updateShadows(t, d, e)) }, this), this.afterSetters());
                    t && t.call(this); return l
                }; I.prototype.clip = function (a) { return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none") }; I.prototype.crisp = function (a, d) { d = d || a.strokeWidth || 0; var t = Math.round(d) % 2 / 2; a.x = Math.floor(a.x || this.x || 0) + t; a.y = Math.floor(a.y || this.y || 0) + t; a.width = Math.floor((a.width || this.width || 0) - 2 * t); a.height = Math.floor((a.height || this.height || 0) - 2 * t); k(a.strokeWidth) && (a.strokeWidth = d); return a }; I.prototype.complexColor = function (a, d, t) {
                    var c = this.renderer, l, e, w, x, p, v, u, g,
                    A, m, K = [], r; f(this.renderer, "complexColor", { args: arguments }, function () {
                        a.radialGradient ? e = "radialGradient" : a.linearGradient && (e = "linearGradient"); if (e) {
                            w = a[e]; p = c.gradients; v = a.stops; A = t.radialReference; b(w) && (a[e] = w = { x1: w[0], y1: w[1], x2: w[2], y2: w[3], gradientUnits: "userSpaceOnUse" }); "radialGradient" === e && A && !k(w.gradientUnits) && (x = w, w = E(w, c.getRadialAttr(A, x), { gradientUnits: "userSpaceOnUse" })); C(w, function (d, t) { "id" !== t && K.push(t, d) }); C(v, function (d) { K.push(d) }); K = K.join(","); if (p[K]) m = p[K].attr("id");
                            else { w.id = m = N(); var f = p[K] = c.createElement(e).attr(w).add(c.defs); f.radAttr = x; f.stops = []; v.forEach(function (d) { 0 === d[1].indexOf("rgba") ? (l = h.parse(d[1]), u = l.get("rgb"), g = l.get("a")) : (u = d[1], g = 1); d = c.createElement("stop").attr({ offset: d[0], "stop-color": u, "stop-opacity": g }).add(f); f.stops.push(d) }) } r = "url(" + c.url + "#" + m + ")"; t.setAttribute(d, r); t.gradient = K; a.toString = function () { return r }
                        }
                    })
                }; I.prototype.css = function (a) {
                    var d = this.styles, t = {}, b = this.element, c = "", f = !d, l = ["textOutline", "textOverflow", "width"];
                    a && a.color && (a.fill = a.color); d && C(a, function (a, b) { d && d[b] !== a && (t[b] = a, f = !0) }); if (f) {
                        d && (a = e(d, t)); if (a) if (null === a.width || "auto" === a.width) delete this.textWidth; else if ("text" === b.nodeName.toLowerCase() && a.width) var w = this.textWidth = T(a.width); this.styles = a; w && !D && this.renderer.forExport && delete a.width; if (b.namespaceURI === this.SVG_NS) { var k = function (d, t) { return "-" + t.toLowerCase() }; C(a, function (d, t) { -1 === l.indexOf(t) && (c += t.replace(/([A-Z])/g, k) + ":" + d + ";") }); c && u(b, "style", c) } else p(b, a); this.added &&
                            ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline))
                    } return this
                }; I.prototype.dashstyleSetter = function (a) {
                    var d = this["stroke-width"]; "inherit" === d && (d = 1); if (a = a && a.toLowerCase()) {
                        var t = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(","); for (a = t.length; a--;)t[a] =
                            "" + T(t[a]) * K(d, NaN); a = t.join(",").replace(/NaN/g, "none"); this.element.setAttribute("stroke-dasharray", a)
                    }
                }; I.prototype.destroy = function () {
                    var a = this, d = a.element || {}, t = a.renderer, b = t.isSVG && "SPAN" === d.nodeName && a.parentGroup || void 0, f = d.ownerSVGElement; d.onclick = d.onmouseout = d.onmouseover = d.onmousemove = d.point = null; M(a); if (a.clipPath && f) {
                        var l = a.clipPath;[].forEach.call(f.querySelectorAll("[clip-path],[CLIP-PATH]"), function (d) { -1 < d.getAttribute("clip-path").indexOf(l.element.id) && d.removeAttribute("clip-path") });
                        a.clipPath = l.destroy()
                    } if (a.stops) { for (f = 0; f < a.stops.length; f++)a.stops[f].destroy(); a.stops.length = 0; a.stops = void 0 } a.safeRemoveChild(d); for (t.styledMode || a.destroyShadows(); b && b.div && 0 === b.div.childNodes.length;)d = b.parentGroup, a.safeRemoveChild(b.div), delete b.div, b = d; a.alignTo && c(t.alignedObjects, a); C(a, function (d, t) { a[t] && a[t].parentGroup === a && a[t].destroy && a[t].destroy(); delete a[t] })
                }; I.prototype.destroyShadows = function () {
                    (this.shadows || []).forEach(function (a) { this.safeRemoveChild(a) }, this);
                    this.shadows = void 0
                }; I.prototype.destroyTextPath = function (a, d) {
                    var t = a.getElementsByTagName("text")[0]; if (t) { if (t.removeAttribute("dx"), t.removeAttribute("dy"), d.element.setAttribute("id", ""), this.textPathWrapper && t.getElementsByTagName("textPath").length) { for (a = this.textPathWrapper.element.childNodes; a.length;)t.appendChild(a[0]); t.removeChild(this.textPathWrapper.element) } } else if (a.getAttribute("dx") || a.getAttribute("dy")) a.removeAttribute("dx"), a.removeAttribute("dy"); this.textPathWrapper && (this.textPathWrapper =
                        this.textPathWrapper.destroy())
                }; I.prototype.dSetter = function (a, d, t) { b(a) && ("string" === typeof a[0] && (a = this.renderer.pathToSegments(a)), this.pathArray = a, a = a.reduce(function (d, t, a) { return t && t.join ? (a ? d + " " : "") + t.join(" ") : (t || "").toString() }, "")); /(NaN| {2}|^$)/.test(a) && (a = "M 0 0"); this[d] !== a && (t.setAttribute(d, a), this[d] = a) }; I.prototype.fadeOut = function (a) { var d = this; d.animate({ opacity: 0 }, { duration: K(a, 150), complete: function () { d.attr({ y: -9999 }).hide() } }) }; I.prototype.fillSetter = function (a, d, t) {
                    "string" ===
                    typeof a ? t.setAttribute(d, a) : a && this.complexColor(a, d, t)
                }; I.prototype.getBBox = function (a, d) {
                    var t, b = this.renderer, c = this.element, f = this.styles, w = this.textStr, x = b.cache, E = b.cacheKeys, p = c.namespaceURI === this.SVG_NS; d = K(d, this.rotation, 0); var C = b.styledMode ? c && I.prototype.getStyle.call(c, "font-size") : f && f.fontSize; if (k(w)) { var v = w.toString(); -1 === v.indexOf("<") && (v = v.replace(/[0-9]/g, "0")); v += ["", d, C, this.textWidth, f && f.textOverflow, f && f.fontWeight].join() } v && !a && (t = x[v]); if (!t) {
                        if (p || b.forExport) {
                            try {
                                var u =
                                    this.fakeTS && function (d) { [].forEach.call(c.querySelectorAll(".highcharts-text-outline"), function (t) { t.style.display = d }) }; l(u) && u("none"); t = c.getBBox ? e({}, c.getBBox()) : { width: c.offsetWidth, height: c.offsetHeight }; l(u) && u("")
                            } catch (aa) { "" } if (!t || 0 > t.width) t = { width: 0, height: 0 }
                        } else t = this.htmlGetBBox(); b.isSVG && (a = t.width, b = t.height, p && (t.height = b = { "11px,17": 14, "13px,20": 16 }[f && f.fontSize + "," + Math.round(b)] || b), d && (f = d * G, t.width = Math.abs(b * Math.sin(f)) + Math.abs(a * Math.cos(f)), t.height = Math.abs(b * Math.cos(f)) +
                            Math.abs(a * Math.sin(f)))); if (v && 0 < t.height) { for (; 250 < E.length;)delete x[E.shift()]; x[v] || E.push(v); x[v] = t }
                    } return t
                }; I.prototype.getStyle = function (a) { return v.getComputedStyle(this.element || this, "").getPropertyValue(a) }; I.prototype.hasClass = function (a) { return -1 !== ("" + this.attr("class")).split(" ").indexOf(a) }; I.prototype.hide = function (a) { a ? this.attr({ y: -9999 }) : this.attr({ visibility: "hidden" }); return this }; I.prototype.htmlGetBBox = function () { return { height: 0, width: 0, x: 0, y: 0 } }; I.prototype.init = function (a,
                    d) { this.element = "span" === d ? A(d) : B.createElementNS(this.SVG_NS, d); this.renderer = a; f(this, "afterInit") }; I.prototype.invert = function (a) { this.inverted = a; this.updateTransform(); return this }; I.prototype.on = function (a, d) {
                        var t, b, c = this.element, f; r && "click" === a ? (c.ontouchstart = function (d) { t = d.touches[0].clientX; b = d.touches[0].clientY }, c.ontouchend = function (a) { t && 4 <= Math.sqrt(Math.pow(t - a.changedTouches[0].clientX, 2) + Math.pow(b - a.changedTouches[0].clientY, 2)) || d.call(c, a); f = !0; !1 !== a.cancelable && a.preventDefault() },
                            c.onclick = function (t) { f || d.call(c, t) }) : c["on" + a] = d; return this
                    }; I.prototype.opacitySetter = function (a, d, t) { this.opacity = a = Number(Number(a).toFixed(3)); t.setAttribute(d, a) }; I.prototype.removeClass = function (a) { return this.attr("class", ("" + this.attr("class")).replace(x(a) ? new RegExp("(^| )" + a + "( |$)") : a, " ").replace(/ +/g, " ").trim()) }; I.prototype.removeTextOutline = function (a) { for (var d = a.length, t; d--;)t = a[d], "highcharts-text-outline" === t.getAttribute("class") && c(a, this.element.removeChild(t)) }; I.prototype.safeRemoveChild =
                        function (a) { var d = a.parentNode; d && d.removeChild(a) }; I.prototype.setRadialReference = function (a) { var d = this.element.gradient && this.renderer.gradients[this.element.gradient]; this.element.radialReference = a; d && d.radAttr && d.animate(this.renderer.getRadialAttr(a, d.radAttr)); return this }; I.prototype.setTextPath = function (b, d) {
                            var t = this.element, c = { textAnchor: "text-anchor" }, f = !1, l = this.textPathWrapper, e = !l; d = E(!0, { enabled: !0, attributes: { dy: -5, startOffset: "50%", textAnchor: "middle" } }, d); var x = d.attributes; if (b &&
                                d && d.enabled) {
                                    l && null === l.element.parentNode ? (e = !0, l = l.destroy()) : l && this.removeTextOutline.call(l.parentGroup, [].slice.call(t.getElementsByTagName("tspan"))); this.options && this.options.padding && (x.dx = -this.options.padding); l || (this.textPathWrapper = l = this.renderer.createElement("textPath"), f = !0); var w = l.element; (d = b.element.getAttribute("id")) || b.element.setAttribute("id", d = N()); if (e) for (b = t.getElementsByTagName("tspan"); b.length;)b[0].setAttribute("y", 0), a(x.dx) && b[0].setAttribute("x", -x.dx), w.appendChild(b[0]);
                                f && l && l.add({ element: this.text ? this.text.element : t }); w.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + d); k(x.dy) && (w.parentNode.setAttribute("dy", x.dy), delete x.dy); k(x.dx) && (w.parentNode.setAttribute("dx", x.dx), delete x.dx); C(x, function (d, t) { w.setAttribute(c[t] || t, d) }); t.removeAttribute("transform"); this.removeTextOutline.call(l, [].slice.call(t.getElementsByTagName("tspan"))); this.text && !this.renderer.styledMode && this.attr({ fill: "none", "stroke-width": 0 }); this.applyTextOutline =
                                    this.updateTransform = g
                            } else l && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(t, b), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline)); return this
                        }; I.prototype.shadow = function (a, d, t) {
                            var b = [], c = this.element, f = !1, l = this.oldShadowOptions; var k = { color: "#000000", offsetX: 1, offsetY: 1, opacity: .15, width: 3 }; var x; !0 === a ? x = k : "object" === typeof a && (x = e(k, a)); x && (x && l && C(x, function (d, t) { d !== l[t] && (f = !0) }), f && this.destroyShadows(),
                                this.oldShadowOptions = x); if (!x) this.destroyShadows(); else if (!this.shadows) {
                                    var w = x.opacity / x.width; var E = this.parentInverted ? "translate(-1,-1)" : "translate(" + x.offsetX + ", " + x.offsetY + ")"; for (k = 1; k <= x.width; k++) {
                                        var p = c.cloneNode(!1); var v = 2 * x.width + 1 - 2 * k; u(p, { stroke: a.color || "#000000", "stroke-opacity": w * k, "stroke-width": v, transform: E, fill: "none" }); p.setAttribute("class", (p.getAttribute("class") || "") + " highcharts-shadow"); t && (u(p, "height", Math.max(u(p, "height") - v, 0)), p.cutHeight = v); d ? d.element.appendChild(p) :
                                            c.parentNode && c.parentNode.insertBefore(p, c); b.push(p)
                                    } this.shadows = b
                                } return this
                        }; I.prototype.show = function (a) { return this.attr({ visibility: a ? "inherit" : "visible" }) }; I.prototype.strokeSetter = function (a, d, t) {
                        this[d] = a; this.stroke && this["stroke-width"] ? (I.prototype.fillSetter.call(this, this.stroke, "stroke", t), t.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === d && 0 === a && this.hasStroke ? (t.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] &&
                            (t.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0)
                        }; I.prototype.strokeWidth = function () { if (!this.renderer.styledMode) return this["stroke-width"] || 0; var a = this.getStyle("stroke-width"), d = 0; if (a.indexOf("px") === a.length - 2) d = T(a); else if ("" !== a) { var t = B.createElementNS(H, "rect"); u(t, { width: a, "stroke-width": 0 }); this.element.parentNode.appendChild(t); d = t.getBBox().width; t.parentNode.removeChild(t) } return d }; I.prototype.symbolAttr = function (a) {
                            var d = this; "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (t) {
                            d[t] =
                                K(a[t], d[t])
                            }); d.attr({ d: d.renderer.symbols[d.symbolName](d.x, d.y, d.width, d.height, d) })
                        }; I.prototype.textSetter = function (a) { a !== this.textStr && (delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this)) }; I.prototype.titleSetter = function (a) {
                            var d = this.element.getElementsByTagName("title")[0]; d || (d = B.createElementNS(this.SVG_NS, "title"), this.element.appendChild(d)); d.firstChild && d.removeChild(d.firstChild); d.appendChild(B.createTextNode(String(K(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g,
                                "<").replace(/&gt;/g, ">")))
                        }; I.prototype.toFront = function () { var a = this.element; a.parentNode.appendChild(a); return this }; I.prototype.translate = function (a, d) { return this.attr({ translateX: a, translateY: d }) }; I.prototype.updateShadows = function (a, d, t) { var b = this.shadows; if (b) for (var c = b.length; c--;)t.call(b[c], "height" === a ? Math.max(d - (b[c].cutHeight || 0), 0) : "d" === a ? this.d : d, a, b[c]) }; I.prototype.updateTransform = function () {
                            var a = this.translateX || 0, d = this.translateY || 0, t = this.scaleX, b = this.scaleY, c = this.inverted,
                            f = this.rotation, l = this.matrix, e = this.element; c && (a += this.width, d += this.height); a = ["translate(" + a + "," + d + ")"]; k(l) && a.push("matrix(" + l.join(",") + ")"); c ? a.push("rotate(90) scale(-1,1)") : f && a.push("rotate(" + f + " " + K(this.rotationOriginX, e.getAttribute("x"), 0) + " " + K(this.rotationOriginY, e.getAttribute("y") || 0) + ")"); (k(t) || k(b)) && a.push("scale(" + K(t, 1) + " " + K(b, 1) + ")"); a.length && e.setAttribute("transform", a.join(" "))
                        }; I.prototype.visibilitySetter = function (a, d, t) {
                            "inherit" === a ? t.removeAttribute(d) : this[d] !==
                                a && t.setAttribute(d, a); this[d] = a
                        }; I.prototype.xGetter = function (a) { "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy")); return this._defaultGetter(a) }; I.prototype.zIndexSetter = function (a, d) {
                            var t = this.renderer, b = this.parentGroup, c = (b || t).element || t.box, f = this.element, l = !1; t = c === t.box; var e = this.added; var x; k(a) ? (f.setAttribute("data-z-index", a), a = +a, this[d] === a && (e = !1)) : k(this[d]) && f.removeAttribute("data-z-index"); this[d] = a; if (e) {
                            (a = this.zIndex) && b && (b.handleZ = !0); d = c.childNodes; for (x =
                                d.length - 1; 0 <= x && !l; x--) { b = d[x]; e = b.getAttribute("data-z-index"); var p = !k(e); if (b !== f) if (0 > a && p && !t && !x) c.insertBefore(f, d[x]), l = !0; else if (T(e) <= a || p && (!k(a) || 0 <= a)) c.insertBefore(f, d[x + 1] || null), l = !0 } l || (c.insertBefore(f, d[t ? 3 : 0] || null), l = !0)
                            } return l
                        }; return I
            }(); n.prototype["stroke-widthSetter"] = n.prototype.strokeSetter; n.prototype.yGetter = n.prototype.xGetter; n.prototype.matrixSetter = n.prototype.rotationOriginXSetter = n.prototype.rotationOriginYSetter = n.prototype.rotationSetter = n.prototype.scaleXSetter =
                n.prototype.scaleYSetter = n.prototype.translateXSetter = n.prototype.translateYSetter = n.prototype.verticalAlignSetter = function (a, b) { this[b] = a; this.doTransform = !0 }; q.SVGElement = n; return q.SVGElement
        }); O(q, "Core/Renderer/SVG/SVGLabel.js", [q["Core/Renderer/SVG/SVGElement.js"], q["Core/Utilities.js"]], function (n, h) {
            var q = this && this.__extends || function () {
                var h = function (r, m) {
                    h = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (g, m) { g.__proto__ = m } || function (g, m) {
                        for (var r in m) m.hasOwnProperty(r) &&
                            (g[r] = m[r])
                    }; return h(r, m)
                }; return function (r, m) { function g() { this.constructor = r } h(r, m); r.prototype = null === m ? Object.create(m) : (g.prototype = m.prototype, new g) }
            }(), z = h.defined, y = h.extend, F = h.isNumber, M = h.merge, G = h.removeEvent; return function (h) {
                function r(m, g, D, H, v, u, A, p, k, c) {
                    var e = h.call(this) || this; e.init(m, "g"); e.textStr = g; e.x = D; e.y = H; e.anchorX = u; e.anchorY = A; e.baseline = k; e.className = c; "button" !== c && e.addClass("highcharts-label"); c && e.addClass("highcharts-" + c); e.text = m.text("", 0, 0, p).attr({ zIndex: 1 });
                    if ("string" === typeof v) { var f = /^url\((.*?)\)$/.test(v); if (e.renderer.symbols[v] || f) e.symbolKey = v } e.bBox = r.emptyBBox; e.padding = 3; e.paddingLeft = 0; e.baselineOffset = 0; e.needsBox = m.styledMode || f; e.deferredAttr = {}; e.alignFactor = 0; return e
                } q(r, h); r.prototype.alignSetter = function (m) { m = { left: 0, center: .5, right: 1 }[m]; m !== this.alignFactor && (this.alignFactor = m, this.bBox && F(this.xSetting) && this.attr({ x: this.xSetting })) }; r.prototype.anchorXSetter = function (m, g) {
                this.anchorX = m; this.boxAttr(g, Math.round(m) - this.getCrispAdjust() -
                    this.xSetting)
                }; r.prototype.anchorYSetter = function (m, g) { this.anchorY = m; this.boxAttr(g, m - this.ySetting) }; r.prototype.boxAttr = function (m, g) { this.box ? this.box.attr(m, g) : this.deferredAttr[m] = g }; r.prototype.css = function (m) { if (m) { var g = {}; m = M(m); r.textProps.forEach(function (r) { "undefined" !== typeof m[r] && (g[r] = m[r], delete m[r]) }); this.text.css(g); var h = "fontSize" in g || "fontWeight" in g; if ("width" in g || h) this.updateBoxSize(), h && this.updateTextPadding() } return n.prototype.css.call(this, m) }; r.prototype.destroy =
                    function () { G(this.element, "mouseenter"); G(this.element, "mouseleave"); this.text && this.text.destroy(); this.box && (this.box = this.box.destroy()); n.prototype.destroy.call(this) }; r.prototype.fillSetter = function (m, g) { m && (this.needsBox = !0); this.fill = m; this.boxAttr(g, m) }; r.prototype.getBBox = function () { var m = this.bBox, g = this.padding; return { width: m.width + 2 * g, height: m.height + 2 * g, x: m.x - g, y: m.y - g } }; r.prototype.getCrispAdjust = function () {
                        return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ?
                            parseInt(this["stroke-width"], 10) : 0) % 2 / 2
                    }; r.prototype.heightSetter = function (m) { this.heightSetting = m }; r.prototype.on = function (m, g) { var r = this, h = r.text, v = h && "SPAN" === h.element.tagName ? h : void 0; if (v) { var u = function (u) { ("mouseenter" === m || "mouseleave" === m) && u.relatedTarget instanceof Element && (r.element.contains(u.relatedTarget) || v.element.contains(u.relatedTarget)) || g.call(r.element, u) }; v.on(m, u) } n.prototype.on.call(r, m, u || g); return r }; r.prototype.onAdd = function () {
                        var m = this.textStr; this.text.add(this);
                        this.attr({ text: z(m) ? m : "", x: this.x, y: this.y }); this.box && z(this.anchorX) && this.attr({ anchorX: this.anchorX, anchorY: this.anchorY })
                    }; r.prototype.paddingSetter = function (m) { z(m) && m !== this.padding && (this.padding = m, this.updateTextPadding()) }; r.prototype.paddingLeftSetter = function (m) { z(m) && m !== this.paddingLeft && (this.paddingLeft = m, this.updateTextPadding()) }; r.prototype.rSetter = function (m, g) { this.boxAttr(g, m) }; r.prototype.shadow = function (m) {
                    m && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(m));
                        return this
                    }; r.prototype.strokeSetter = function (m, g) { this.stroke = m; this.boxAttr(g, m) }; r.prototype["stroke-widthSetter"] = function (m, g) { m && (this.needsBox = !0); this["stroke-width"] = m; this.boxAttr(g, m) }; r.prototype["text-alignSetter"] = function (m) { this.textAlign = m }; r.prototype.textSetter = function (m) { "undefined" !== typeof m && this.text.attr({ text: m }); this.updateBoxSize(); this.updateTextPadding() }; r.prototype.updateBoxSize = function () {
                        var m = this.text.element.style, g = {}, h = this.padding, H = this.paddingLeft, v = F(this.widthSetting) &&
                            F(this.heightSetting) && !this.textAlign || !z(this.text.textStr) ? r.emptyBBox : this.text.getBBox(); this.width = (this.widthSetting || v.width || 0) + 2 * h + H; this.height = (this.heightSetting || v.height || 0) + 2 * h; this.baselineOffset = h + Math.min(this.renderer.fontMetrics(m && m.fontSize, this.text).b, v.height || Infinity); this.needsBox && (this.box || (m = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), m.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" +
                                this.className + "-box" : "")), m.add(this), m = this.getCrispAdjust(), g.x = m, g.y = (this.baseline ? -this.baselineOffset : 0) + m), g.width = Math.round(this.width), g.height = Math.round(this.height), this.box.attr(y(g, this.deferredAttr)), this.deferredAttr = {}); this.bBox = v
                    }; r.prototype.updateTextPadding = function () {
                        var m = this.text, g = this.baseline ? 0 : this.baselineOffset, r = this.paddingLeft + this.padding; z(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (r += { center: .5, right: 1 }[this.textAlign] *
                            (this.widthSetting - this.bBox.width)); if (r !== m.x || g !== m.y) m.attr("x", r), m.hasBoxWidthChanged && (this.bBox = m.getBBox(!0), this.updateBoxSize()), "undefined" !== typeof g && m.attr("y", g); m.x = r; m.y = g
                    }; r.prototype.widthSetter = function (m) { this.widthSetting = F(m) ? m : void 0 }; r.prototype.xSetter = function (m) { this.x = m; this.alignFactor && (m -= this.alignFactor * ((this.widthSetting || this.bBox.width) + 2 * this.padding), this["forceAnimate:x"] = !0); this.xSetting = Math.round(m); this.attr("translateX", this.xSetting) }; r.prototype.ySetter =
                        function (m) { this.ySetting = this.y = Math.round(m); this.attr("translateY", this.ySetting) }; r.emptyBBox = { width: 0, height: 0, x: 0, y: 0 }; r.textProps = "color cursor direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "); return r
            }(n)
        }); O(q, "Core/Renderer/SVG/SVGRenderer.js", [q["Core/Color/Color.js"], q["Core/Globals.js"], q["Core/Renderer/SVG/SVGElement.js"], q["Core/Renderer/SVG/SVGLabel.js"], q["Core/Utilities.js"]], function (n, h, q, z, y) {
            var F =
                y.addEvent, L = y.attr, G = y.createElement, B = y.css, r = y.defined, m = y.destroyObjectProperties, g = y.extend, D = y.isArray, H = y.isNumber, v = y.isObject, u = y.isString, A = y.merge, p = y.objectEach, k = y.pick, c = y.pInt, e = y.splat, f = y.uniqueKey, b = h.charts, l = h.deg2rad, a = h.doc, x = h.isFirefox, E = h.isMS, C = h.isWebKit; y = h.noop; var K = h.svg, T = h.SVG_NS, R = h.symbolSizes, N = h.win, I = function () {
                    function w(d, a, b, c, f, l, e) {
                    this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex =
                        this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0; this.init(d, a, b, c, f, l, e)
                    } w.prototype.init = function (d, t, b, c, f, l, e) {
                        var J = this.createElement("svg").attr({ version: "1.1", "class": "highcharts-root" }); e || J.css(this.getStyle(c)); c = J.element; d.appendChild(c); L(d, "dir", "ltr"); -1 === d.innerHTML.indexOf("xmlns") && L(c, "xmlns", this.SVG_NS); this.isSVG = !0; this.box = c; this.boxWrapper = J; this.alignedObjects = []; this.url = (x || C) && a.getElementsByTagName("base").length ? N.location.href.split("#")[0].replace(/<[^>]*>/g,
                            "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : ""; this.createElement("desc").add().element.appendChild(a.createTextNode("Created with Highcharts 8.2.2")); this.defs = this.createElement("defs").add(); this.allowHTML = l; this.forExport = f; this.styledMode = e; this.gradients = {}; this.cache = {}; this.cacheKeys = []; this.imgCount = 0; this.setSize(t, b, !1); var k; x && d.getBoundingClientRect && (t = function () {
                                B(d, { left: 0, top: 0 }); k = d.getBoundingClientRect(); B(d, {
                                    left: Math.ceil(k.left) - k.left + "px", top: Math.ceil(k.top) - k.top +
                                        "px"
                                })
                            }, t(), this.unSubPixelFix = F(N, "resize", t))
                    }; w.prototype.definition = function (d) { function t(d, c) { var f; e(d).forEach(function (d) { var l = b.createElement(d.tagName), e = {}; p(d, function (d, a) { "tagName" !== a && "children" !== a && "textContent" !== a && (e[a] = d) }); l.attr(e); l.add(c || b.defs); d.textContent && l.element.appendChild(a.createTextNode(d.textContent)); t(d.children || [], l); f = l }); return f } var b = this; return t(d) }; w.prototype.getStyle = function (d) {
                        return this.style = g({
                            fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                            fontSize: "12px"
                        }, d)
                    }; w.prototype.setStyle = function (d) { this.boxWrapper.css(this.getStyle(d)) }; w.prototype.isHidden = function () { return !this.boxWrapper.getBBox().width }; w.prototype.destroy = function () { var d = this.defs; this.box = null; this.boxWrapper = this.boxWrapper.destroy(); m(this.gradients || {}); this.gradients = null; d && (this.defs = d.destroy()); this.unSubPixelFix && this.unSubPixelFix(); return this.alignedObjects = null }; w.prototype.createElement = function (d) { var a = new this.Element; a.init(this, d); return a }; w.prototype.getRadialAttr =
                        function (d, a) { return { cx: d[0] - d[2] / 2 + a.cx * d[2], cy: d[1] - d[2] / 2 + a.cy * d[2], r: a.r * d[2] } }; w.prototype.truncate = function (d, t, b, c, f, l, e) {
                            var J = this, k = d.rotation, x, P = c ? 1 : 0, Q = (b || c).length, p = Q, E = [], C = function (d) { t.firstChild && t.removeChild(t.firstChild); d && t.appendChild(a.createTextNode(d)) }, w = function (a, l) { l = l || a; if ("undefined" === typeof E[l]) if (t.getSubStringLength) try { E[l] = f + t.getSubStringLength(0, c ? l + 1 : l) } catch (ja) { "" } else J.getSpanWidth && (C(e(b || c, a)), E[l] = f + J.getSpanWidth(d, t)); return E[l] }, v; d.rotation =
                                0; var u = w(t.textContent.length); if (v = f + u > l) { for (; P <= Q;)p = Math.ceil((P + Q) / 2), c && (x = e(c, p)), u = w(p, x && x.length - 1), P === Q ? P = Q + 1 : u > l ? Q = p - 1 : P = p; 0 === Q ? C("") : b && Q === b.length - 1 || C(x || e(b || c, p)) } c && c.splice(0, p); d.actualWidth = u; d.rotation = k; return v
                        }; w.prototype.buildText = function (d) {
                            var t = d.element, b = this, f = b.forExport, l = k(d.textStr, "").toString(), e = -1 !== l.indexOf("<"), x = t.childNodes, E, C = L(t, "x"), w = d.styles, v = d.textWidth, g = w && w.lineHeight, A = w && w.textOutline, m = w && "ellipsis" === w.textOverflow, r = w && "nowrap" ===
                                w.whiteSpace, h = w && w.fontSize, N, I = x.length; w = v && !d.added && this.box; var H = function (d) { var a; b.styledMode || (a = /(px|em)$/.test(d && d.style.fontSize) ? d.style.fontSize : h || b.style.fontSize || 12); return g ? c(g) : b.fontMetrics(a, d.getAttribute("style") ? d : t).h }, D = function (d, a) { p(b.escapes, function (t, b) { a && -1 !== a.indexOf(t) || (d = d.toString().replace(new RegExp(t, "g"), b)) }); return d }, n = function (d, a) {
                                    var t = d.indexOf("<"); d = d.substring(t, d.indexOf(">") - t); t = d.indexOf(a + "="); if (-1 !== t && (t = t + a.length + 1, a = d.charAt(t),
                                        '"' === a || "'" === a)) return d = d.substring(t + 1), d.substring(0, d.indexOf(a))
                                }, q = /<br.*?>/g; var R = [l, m, r, g, A, h, v].join(); if (R !== d.textCache) {
                                    for (d.textCache = R; I--;)t.removeChild(x[I]); e || A || m || v || -1 !== l.indexOf(" ") && (!r || q.test(l)) ? (w && w.appendChild(t), e ? (l = b.styledMode ? l.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : l.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'),
                                        l = l.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(q)) : l = [l], l = l.filter(function (d) { return "" !== d }), l.forEach(function (c, l) {
                                            var e = 0, J = 0; c = c.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||"); var k = c.split("|||"); k.forEach(function (c) {
                                                if ("" !== c || 1 === k.length) {
                                                    var x = {}, P = a.createElementNS(b.SVG_NS, "tspan"), p, Q; (p = n(c, "class")) && L(P, "class", p); if (p = n(c, "style")) p = p.replace(/(;| |^)color([ :])/, "$1fill$2"), L(P, "style", p); if ((Q = n(c, "href")) &&
                                                        !f && -1 === Q.split(":")[0].toLowerCase().indexOf("javascript")) { var w = a.createElementNS(b.SVG_NS, "a"); L(w, "href", Q); L(P, "class", "highcharts-anchor"); w.appendChild(P); b.styledMode || B(P, { cursor: "pointer" }) } c = D(c.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " "); if (" " !== c) {
                                                            P.appendChild(a.createTextNode(c)); e ? x.dx = 0 : l && null !== C && (x.x = C); L(P, x); t.appendChild(w || P); !e && N && (!K && f && B(P, { display: "block" }), L(P, "dy", H(P))); if (v) {
                                                                var u = c.replace(/([^\^])-/g, "$1- ").split(" "); x = !r && (1 < k.length || l || 1 < u.length); w = 0; Q =
                                                                    H(P); if (m) E = b.truncate(d, P, c, void 0, 0, Math.max(0, v - parseInt(h || 12, 10)), function (d, a) { return d.substring(0, a) + "\u2026" }); else if (x) for (; u.length;)u.length && !r && 0 < w && (P = a.createElementNS(T, "tspan"), L(P, { dy: Q, x: C }), p && L(P, "style", p), P.appendChild(a.createTextNode(u.join(" ").replace(/- /g, "-"))), t.appendChild(P)), b.truncate(d, P, null, u, 0 === w ? J : 0, v, function (d, a) { return u.slice(0, a).join(" ").replace(/- /g, "-") }), J = d.actualWidth, w++
                                                            } e++
                                                        }
                                                }
                                            }); N = N || t.childNodes.length
                                        }), m && E && d.attr("title", D(d.textStr || "",
                                            ["&lt;", "&gt;"])), w && w.removeChild(t), u(A) && d.applyTextOutline && d.applyTextOutline(A)) : t.appendChild(a.createTextNode(D(l)))
                                }
                        }; w.prototype.getContrast = function (d) { d = n.parse(d).rgba; d[0] *= 1; d[1] *= 1.2; d[2] *= .5; return 459 < d[0] + d[1] + d[2] ? "#000000" : "#FFFFFF" }; w.prototype.button = function (d, a, b, c, f, l, e, k, x, p) {
                            var t = this.label(d, a, b, x, void 0, void 0, p, void 0, "button"), J = 0, P = this.styledMode; d = (f = f ? A(f) : f) && f.style || {}; f && f.style && delete f.style; t.attr(A({ padding: 8, r: 2 }, f)); if (!P) {
                                f = A({
                                    fill: "#f7f7f7", stroke: "#cccccc",
                                    "stroke-width": 1, style: { color: "#333333", cursor: "pointer", fontWeight: "normal" }
                                }, { style: d }, f); var Q = f.style; delete f.style; l = A(f, { fill: "#e6e6e6" }, l); var w = l.style; delete l.style; e = A(f, { fill: "#e6ebf5", style: { color: "#000000", fontWeight: "bold" } }, e); var C = e.style; delete e.style; k = A(f, { style: { color: "#cccccc" } }, k); var v = k.style; delete k.style
                            } F(t.element, E ? "mouseover" : "mouseenter", function () { 3 !== J && t.setState(1) }); F(t.element, E ? "mouseout" : "mouseleave", function () { 3 !== J && t.setState(J) }); t.setState = function (d) {
                            1 !==
                                d && (t.state = J = d); t.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][d || 0]); P || t.attr([f, l, e, k][d || 0]).css([Q, w, C, v][d || 0])
                            }; P || t.attr(f).css(g({ cursor: "default" }, Q)); return t.on("click", function (d) { 3 !== J && c.call(t, d) })
                        }; w.prototype.crispLine = function (d, a, b) { void 0 === b && (b = "round"); var t = d[0], c = d[1]; t[1] === c[1] && (t[1] = c[1] = Math[b](t[1]) - a % 2 / 2); t[2] === c[2] && (t[2] = c[2] = Math[b](t[2]) + a % 2 / 2); return d }; w.prototype.path =
                            function (d) { var a = this.styledMode ? {} : { fill: "none" }; D(d) ? a.d = d : v(d) && g(a, d); return this.createElement("path").attr(a) }; w.prototype.circle = function (d, a, b) { d = v(d) ? d : "undefined" === typeof d ? {} : { x: d, y: a, r: b }; a = this.createElement("circle"); a.xSetter = a.ySetter = function (d, a, t) { t.setAttribute("c" + a, d) }; return a.attr(d) }; w.prototype.arc = function (d, a, b, c, f, l) { v(d) ? (c = d, a = c.y, b = c.r, d = c.x) : c = { innerR: c, start: f, end: l }; d = this.symbol("arc", d, a, b, b, c); d.r = b; return d }; w.prototype.rect = function (d, a, b, c, f, l) {
                                f = v(d) ? d.r :
                                    f; var t = this.createElement("rect"); d = v(d) ? d : "undefined" === typeof d ? {} : { x: d, y: a, width: Math.max(b, 0), height: Math.max(c, 0) }; this.styledMode || ("undefined" !== typeof l && (d.strokeWidth = l, d = t.crisp(d)), d.fill = "none"); f && (d.r = f); t.rSetter = function (d, a, b) { t.r = d; L(b, { rx: d, ry: d }) }; t.rGetter = function () { return t.r }; return t.attr(d)
                            }; w.prototype.setSize = function (d, a, b) {
                                var t = this.alignedObjects, c = t.length; this.width = d; this.height = a; for (this.boxWrapper.animate({ width: d, height: a }, {
                                    step: function () {
                                        this.attr({
                                            viewBox: "0 0 " +
                                                this.attr("width") + " " + this.attr("height")
                                        })
                                    }, duration: k(b, !0) ? void 0 : 0
                                }); c--;)t[c].align()
                            }; w.prototype.g = function (d) { var a = this.createElement("g"); return d ? a.attr({ "class": "highcharts-" + d }) : a }; w.prototype.image = function (d, a, b, c, f, l) {
                                var t = { preserveAspectRatio: "none" }, e = function (d, a) { d.setAttributeNS ? d.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : d.setAttribute("hc-svg-href", a) }, J = function (a) { e(k.element, d); l.call(k, a) }; 1 < arguments.length && g(t, { x: a, y: b, width: c, height: f }); var k = this.createElement("image").attr(t);
                                l ? (e(k.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), t = new N.Image, F(t, "load", J), t.src = d, t.complete && J({})) : e(k.element, d); return k
                            }; w.prototype.symbol = function (d, t, c, f, l, e) {
                                var J = this, x = /^url\((.*?)\)$/, P = x.test(d), p = !P && (this.symbols[d] ? d : "circle"), E = p && this.symbols[p], Q; if (E) {
                                "number" === typeof t && (Q = E.call(this.symbols, Math.round(t || 0), Math.round(c || 0), f || 0, l || 0, e)); var w = this.path(Q); J.styledMode || w.attr("fill", "none"); g(w, {
                                    symbolName: p, x: t, y: c, width: f,
                                    height: l
                                }); e && g(w, e)
                                } else if (P) {
                                    var C = d.match(x)[1]; w = this.image(C); w.imgwidth = k(R[C] && R[C].width, e && e.width); w.imgheight = k(R[C] && R[C].height, e && e.height); var v = function () { w.attr({ width: w.width, height: w.height }) };["width", "height"].forEach(function (d) {
                                    w[d + "Setter"] = function (d, a) {
                                        var t = {}, b = this["img" + a], c = "width" === a ? "translateX" : "translateY"; this[a] = d; r(b) && (e && "within" === e.backgroundSize && this.width && this.height && (b = Math.round(b * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element &&
                                            this.element.setAttribute(a, b), this.alignByTranslate || (t[c] = ((this[a] || 0) - b) / 2, this.attr(t)))
                                    }
                                    }); r(t) && w.attr({ x: t, y: c }); w.isImg = !0; r(w.imgwidth) && r(w.imgheight) ? v() : (w.attr({ width: 0, height: 0 }), G("img", {
                                        onload: function () {
                                            var d = b[J.chartIndex]; 0 === this.width && (B(this, { position: "absolute", top: "-999em" }), a.body.appendChild(this)); R[C] = { width: this.width, height: this.height }; w.imgwidth = this.width; w.imgheight = this.height; w.element && v(); this.parentNode && this.parentNode.removeChild(this); J.imgCount--; if (!J.imgCount &&
                                                d && !d.hasLoaded) d.onload()
                                        }, src: C
                                    }), this.imgCount++)
                                } return w
                            }; w.prototype.clipRect = function (d, a, b, c) { var t = f() + "-", l = this.createElement("clipPath").attr({ id: t }).add(this.defs); d = this.rect(d, a, b, c, 0).add(l); d.id = t; d.clipPath = l; d.count = 0; return d }; w.prototype.text = function (d, a, b, c) {
                                var t = {}; if (c && (this.allowHTML || !this.forExport)) return this.html(d, a, b); t.x = Math.round(a || 0); b && (t.y = Math.round(b)); r(d) && (t.text = d); d = this.createElement("text").attr(t); c || (d.xSetter = function (d, a, t) {
                                    var b = t.getElementsByTagName("tspan"),
                                    c = t.getAttribute(a), f; for (f = 0; f < b.length; f++) { var l = b[f]; l.getAttribute(a) === c && l.setAttribute(a, d) } t.setAttribute(a, d)
                                }); return d
                            }; w.prototype.fontMetrics = function (d, a) { d = !this.styledMode && /px/.test(d) || !N.getComputedStyle ? d || a && a.style && a.style.fontSize || this.style && this.style.fontSize : a && q.prototype.getStyle.call(a, "font-size"); d = /px/.test(d) ? c(d) : 12; a = 24 > d ? d + 3 : Math.round(1.2 * d); return { h: a, b: Math.round(.8 * a), f: d } }; w.prototype.rotCorr = function (d, a, b) {
                                var t = d; a && b && (t = Math.max(t * Math.cos(a * l), 4));
                                return { x: -d / 3 * Math.sin(a * l), y: t }
                            }; w.prototype.pathToSegments = function (d) { for (var a = [], b = [], c = { A: 8, C: 7, H: 2, L: 3, M: 3, Q: 5, S: 5, T: 3, V: 2 }, f = 0; f < d.length; f++)u(b[0]) && H(d[f]) && b.length === c[b[0].toUpperCase()] && d.splice(f, 0, b[0].replace("M", "L").replace("m", "l")), "string" === typeof d[f] && (b.length && a.push(b.slice(0)), b.length = 0), b.push(d[f]); a.push(b.slice(0)); return a }; w.prototype.label = function (d, a, b, c, f, l, e, k, x) { return new z(this, d, a, b, c, f, l, e, k, x) }; return w
                }(); I.prototype.Element = q; I.prototype.SVG_NS = T;
            I.prototype.draw = y; I.prototype.escapes = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }; I.prototype.symbols = {
                circle: function (a, d, t, b) { return this.arc(a + t / 2, d + b / 2, t / 2, b / 2, { start: .5 * Math.PI, end: 2.5 * Math.PI, open: !1 }) }, square: function (a, d, t, b) { return [["M", a, d], ["L", a + t, d], ["L", a + t, d + b], ["L", a, d + b], ["Z"]] }, triangle: function (a, d, t, b) { return [["M", a + t / 2, d], ["L", a + t, d + b], ["L", a, d + b], ["Z"]] }, "triangle-down": function (a, d, t, b) { return [["M", a, d], ["L", a + t, d], ["L", a + t / 2, d + b], ["Z"]] }, diamond: function (a,
                    d, t, b) { return [["M", a + t / 2, d], ["L", a + t, d + b / 2], ["L", a + t / 2, d + b], ["L", a, d + b / 2], ["Z"]] }, arc: function (a, d, t, b, c) {
                        var f = []; if (c) {
                            var l = c.start || 0, e = c.end || 0, J = c.r || t; t = c.r || b || t; var x = .001 > Math.abs(e - l - 2 * Math.PI); e -= .001; b = c.innerR; x = k(c.open, x); var p = Math.cos(l), E = Math.sin(l), P = Math.cos(e), w = Math.sin(e); l = k(c.longArc, .001 > e - l - Math.PI ? 0 : 1); f.push(["M", a + J * p, d + t * E], ["A", J, t, 0, l, k(c.clockwise, 1), a + J * P, d + t * w]); r(b) && f.push(x ? ["M", a + b * P, d + b * w] : ["L", a + b * P, d + b * w], ["A", b, b, 0, l, r(c.clockwise) ? 1 - c.clockwise : 0, a + b *
                                p, d + b * E]); x || f.push(["Z"])
                        } return f
                    }, callout: function (a, d, t, b, c) {
                        var f = Math.min(c && c.r || 0, t, b), l = f + 6, e = c && c.anchorX || 0; c = c && c.anchorY || 0; var J = [["M", a + f, d], ["L", a + t - f, d], ["C", a + t, d, a + t, d, a + t, d + f], ["L", a + t, d + b - f], ["C", a + t, d + b, a + t, d + b, a + t - f, d + b], ["L", a + f, d + b], ["C", a, d + b, a, d + b, a, d + b - f], ["L", a, d + f], ["C", a, d, a, d, a + f, d]]; e && e > t ? c > d + l && c < d + b - l ? J.splice(3, 1, ["L", a + t, c - 6], ["L", a + t + 6, c], ["L", a + t, c + 6], ["L", a + t, d + b - f]) : J.splice(3, 1, ["L", a + t, b / 2], ["L", e, c], ["L", a + t, b / 2], ["L", a + t, d + b - f]) : e && 0 > e ? c > d + l && c < d + b - l ?
                            J.splice(7, 1, ["L", a, c + 6], ["L", a - 6, c], ["L", a, c - 6], ["L", a, d + f]) : J.splice(7, 1, ["L", a, b / 2], ["L", e, c], ["L", a, b / 2], ["L", a, d + f]) : c && c > b && e > a + l && e < a + t - l ? J.splice(5, 1, ["L", e + 6, d + b], ["L", e, d + b + 6], ["L", e - 6, d + b], ["L", a + f, d + b]) : c && 0 > c && e > a + l && e < a + t - l && J.splice(1, 1, ["L", e - 6, d], ["L", e, d - 6], ["L", e + 6, d], ["L", t - f, d]); return J
                    }
            }; h.SVGRenderer = I; h.Renderer = h.SVGRenderer; return h.Renderer
        }); O(q, "Core/Renderer/HTML/HTMLElement.js", [q["Core/Globals.js"], q["Core/Renderer/SVG/SVGElement.js"], q["Core/Utilities.js"]], function (n,
            h, q) {
                var L = q.css, y = q.defined, F = q.extend, M = q.pick, G = q.pInt, B = n.isFirefox; F(h.prototype, {
                    htmlCss: function (r) { var m = "SPAN" === this.element.tagName && r && "width" in r, g = M(m && r.width, void 0); if (m) { delete r.width; this.textWidth = g; var h = !0 } r && "ellipsis" === r.textOverflow && (r.whiteSpace = "nowrap", r.overflow = "hidden"); this.styles = F(this.styles, r); L(this.element, r); h && this.htmlUpdateTransform(); return this }, htmlGetBBox: function () { var r = this.element; return { x: r.offsetLeft, y: r.offsetTop, width: r.offsetWidth, height: r.offsetHeight } },
                    htmlUpdateTransform: function () {
                        if (this.added) {
                            var r = this.renderer, m = this.element, g = this.translateX || 0, h = this.translateY || 0, H = this.x || 0, v = this.y || 0, u = this.textAlign || "left", A = { left: 0, center: .5, right: 1 }[u], p = this.styles, k = p && p.whiteSpace; L(m, { marginLeft: g, marginTop: h }); !r.styledMode && this.shadows && this.shadows.forEach(function (b) { L(b, { marginLeft: g + 1, marginTop: h + 1 }) }); this.inverted && [].forEach.call(m.childNodes, function (b) { r.invertChild(b, m) }); if ("SPAN" === m.tagName) {
                                p = this.rotation; var c = this.textWidth &&
                                    G(this.textWidth), e = [p, u, m.innerHTML, this.textWidth, this.textAlign].join(), f; (f = c !== this.oldTextWidth) && !(f = c > this.oldTextWidth) && ((f = this.textPxLength) || (L(m, { width: "", whiteSpace: k || "nowrap" }), f = m.offsetWidth), f = f > c); f && (/[ \-]/.test(m.textContent || m.innerText) || "ellipsis" === m.style.textOverflow) ? (L(m, { width: c + "px", display: "block", whiteSpace: k || "normal" }), this.oldTextWidth = c, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1; e !== this.cTT && (k = r.fontMetrics(m.style.fontSize, m).b, !y(p) || p === (this.oldRotation ||
                                        0) && u === this.oldAlign || this.setSpanRotation(p, A, k), this.getSpanCorrection(!y(p) && this.textPxLength || m.offsetWidth, k, A, p, u)); L(m, { left: H + (this.xCorr || 0) + "px", top: v + (this.yCorr || 0) + "px" }); this.cTT = e; this.oldRotation = p; this.oldAlign = u
                            }
                        } else this.alignOnAdd = !0
                    }, setSpanRotation: function (r, m, g) { var h = {}, H = this.renderer.getTransformKey(); h[H] = h.transform = "rotate(" + r + "deg)"; h[H + (B ? "Origin" : "-origin")] = h.transformOrigin = 100 * m + "% " + g + "px"; L(this.element, h) }, getSpanCorrection: function (r, m, g) {
                    this.xCorr = -r * g;
                        this.yCorr = -m
                    }
                }); return h
        }); O(q, "Core/Renderer/HTML/HTMLRenderer.js", [q["Core/Globals.js"], q["Core/Renderer/SVG/SVGElement.js"], q["Core/Renderer/SVG/SVGRenderer.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
            var y = n.isFirefox, L = n.isMS, M = n.isWebKit, G = n.win, B = z.attr, r = z.createElement, m = z.extend, g = z.pick; m(q.prototype, {
                getTransformKey: function () { return L && !/Edge/.test(G.navigator.userAgent) ? "-ms-transform" : M ? "-webkit-transform" : y ? "MozTransform" : G.opera ? "-o-transform" : "" }, html: function (n, H, v) {
                    var u = this.createElement("span"),
                    A = u.element, p = u.renderer, k = p.isSVG, c = function (c, f) { ["opacity", "visibility"].forEach(function (b) { c[b + "Setter"] = function (l, a, e) { var k = c.div ? c.div.style : f; h.prototype[b + "Setter"].call(this, l, a, e); k && (k[a] = l) } }); c.addedSetters = !0 }; u.textSetter = function (c) { c !== A.innerHTML && (delete this.bBox, delete this.oldTextWidth); this.textStr = c; A.innerHTML = g(c, ""); u.doTransform = !0 }; k && c(u, u.element.style); u.xSetter = u.ySetter = u.alignSetter = u.rotationSetter = function (c, f) {
                        "align" === f ? u.alignValue = u.textAlign = c : u[f] = c;
                        u.doTransform = !0
                    }; u.afterSetters = function () { this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1) }; u.attr({ text: n, x: Math.round(H), y: Math.round(v) }).css({ position: "absolute" }); p.styledMode || u.css({ fontFamily: this.style.fontFamily, fontSize: this.style.fontSize }); A.style.whiteSpace = "nowrap"; u.css = u.htmlCss; k && (u.add = function (e) {
                        var f = p.box.parentNode, b = []; if (this.parentGroup = e) {
                            var l = e.div; if (!l) {
                                for (; e;)b.push(e), e = e.parentGroup; b.reverse().forEach(function (a) {
                                    function e(b, c) {
                                    a[c] = b; "translateX" ===
                                        c ? p.left = b + "px" : p.top = b + "px"; a.doTransform = !0
                                    } var k = B(a.element, "class"); l = a.div = a.div || r("div", k ? { className: k } : void 0, { position: "absolute", left: (a.translateX || 0) + "px", top: (a.translateY || 0) + "px", display: a.display, opacity: a.opacity, pointerEvents: a.styles && a.styles.pointerEvents }, l || f); var p = l.style; m(a, { classSetter: function (a) { return function (b) { this.element.setAttribute("class", b); a.className = b } }(l), on: function () { b[0].div && u.on.apply({ element: b[0].div }, arguments); return a }, translateXSetter: e, translateYSetter: e });
                                    a.addedSetters || c(a)
                                })
                            }
                        } else l = f; l.appendChild(A); u.added = !0; u.alignOnAdd && u.htmlUpdateTransform(); return u
                    }); return u
                }
            }); return q
        }); O(q, "Core/Axis/Tick.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
            var q = h.clamp, z = h.correctFloat, y = h.defined, F = h.destroyObjectProperties, M = h.extend, G = h.fireEvent, B = h.isNumber, r = h.merge, m = h.objectEach, g = h.pick, D = n.deg2rad; h = function () {
                function h(v, u, g, p, k) {
                this.isNewLabel = this.isNew = !0; this.axis = v; this.pos = u; this.type = g || ""; this.parameters = k || {}; this.tickmarkOffset =
                    this.parameters.tickmarkOffset; this.options = this.parameters.options; G(this, "init"); g || p || this.addLabel()
                } h.prototype.addLabel = function () {
                    var v = this, u = v.axis, m = u.options, p = u.chart, k = u.categories, c = u.logarithmic, e = u.names, f = v.pos, b = g(v.options && v.options.labels, m.labels), l = u.tickPositions, a = f === l[0], x = f === l[l.length - 1]; e = this.parameters.category || (k ? g(k[f], e[f], f) : f); var E = v.label; k = (!b.step || 1 === b.step) && 1 === u.tickInterval; l = l.info; var C, r; if (u.dateTime && l) {
                        var h = p.time.resolveDTLFormat(m.dateTimeLabelFormats[!m.grid &&
                            l.higherRanks[f] || l.unitName]); var n = h.main
                    } v.isFirst = a; v.isLast = x; v.formatCtx = { axis: u, chart: p, isFirst: a, isLast: x, dateTimeLabelFormat: n, tickPositionInfo: l, value: c ? z(c.lin2log(e)) : e, pos: f }; m = u.labelFormatter.call(v.formatCtx, this.formatCtx); if (r = h && h.list) v.shortenLabel = function () { for (C = 0; C < r.length; C++)if (E.attr({ text: u.labelFormatter.call(M(v.formatCtx, { dateTimeLabelFormat: r[C] })) }), E.getBBox().width < u.getSlotWidth(v) - 2 * g(b.padding, 5)) return; E.attr({ text: "" }) }; k && u._addedPlotLB && v.moveLabel(m, b);
                    y(E) || v.movedLabel ? E && E.textStr !== m && !k && (!E.textWidth || b.style && b.style.width || E.styles.width || E.css({ width: null }), E.attr({ text: m }), E.textPxLength = E.getBBox().width) : (v.label = E = v.createLabel({ x: 0, y: 0 }, m, b), v.rotation = 0)
                }; h.prototype.createLabel = function (v, u, g) { var p = this.axis, k = p.chart; if (v = y(u) && g.enabled ? k.renderer.text(u, v.x, v.y, g.useHTML).add(p.labelGroup) : null) k.styledMode || v.css(r(g.style)), v.textPxLength = v.getBBox().width; return v }; h.prototype.destroy = function () { F(this, this.axis) }; h.prototype.getPosition =
                    function (v, u, g, p) { var k = this.axis, c = k.chart, e = p && c.oldChartHeight || c.chartHeight; v = { x: v ? z(k.translate(u + g, null, null, p) + k.transB) : k.left + k.offset + (k.opposite ? (p && c.oldChartWidth || c.chartWidth) - k.right - k.left : 0), y: v ? e - k.bottom + k.offset - (k.opposite ? k.height : 0) : z(e - k.translate(u + g, null, null, p) - k.transB) }; v.y = q(v.y, -1E5, 1E5); G(this, "afterGetPosition", { pos: v }); return v }; h.prototype.getLabelPosition = function (v, u, g, p, k, c, e, f) {
                        var b = this.axis, l = b.transA, a = b.isLinked && b.linkedParent ? b.linkedParent.reversed :
                            b.reversed, x = b.staggerLines, E = b.tickRotCorr || { x: 0, y: 0 }, C = k.y, m = p || b.reserveSpaceDefault ? 0 : -b.labelOffset * ("center" === b.labelAlign ? .5 : 1), r = {}; y(C) || (C = 0 === b.side ? g.rotation ? -8 : -g.getBBox().height : 2 === b.side ? E.y + 8 : Math.cos(g.rotation * D) * (E.y - g.getBBox(!1, 0).height / 2)); v = v + k.x + m + E.x - (c && p ? c * l * (a ? -1 : 1) : 0); u = u + C - (c && !p ? c * l * (a ? 1 : -1) : 0); x && (g = e / (f || 1) % x, b.opposite && (g = x - g - 1), u += b.labelOffset / x * g); r.x = v; r.y = Math.round(u); G(this, "afterGetLabelPosition", { pos: r, tickmarkOffset: c, index: e }); return r
                    }; h.prototype.getLabelSize =
                        function () { return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0 }; h.prototype.getMarkPath = function (v, u, g, p, k, c) { return c.crispLine([["M", v, u], ["L", v + (k ? 0 : -g), u + (k ? g : 0)]], p) }; h.prototype.handleOverflow = function (v) {
                            var u = this.axis, m = u.options.labels, p = v.x, k = u.chart.chartWidth, c = u.chart.spacing, e = g(u.labelLeft, Math.min(u.pos, c[3])); c = g(u.labelRight, Math.max(u.isRadial ? 0 : u.pos + u.len, k - c[1])); var f = this.label, b = this.rotation, l = { left: 0, center: .5, right: 1 }[u.labelAlign || f.attr("align")],
                                a = f.getBBox().width, x = u.getSlotWidth(this), E = x, C = 1, r, h = {}; if (b || "justify" !== g(m.overflow, "justify")) 0 > b && p - l * a < e ? r = Math.round(p / Math.cos(b * D) - e) : 0 < b && p + l * a > c && (r = Math.round((k - p) / Math.cos(b * D))); else if (k = p + (1 - l) * a, p - l * a < e ? E = v.x + E * (1 - l) - e : k > c && (E = c - v.x + E * l, C = -1), E = Math.min(x, E), E < x && "center" === u.labelAlign && (v.x += C * (x - E - l * (x - Math.min(a, E)))), a > E || u.autoRotation && (f.styles || {}).width) r = E; r && (this.shortenLabel ? this.shortenLabel() : (h.width = Math.floor(r) + "px", (m.style || {}).textOverflow || (h.textOverflow =
                                    "ellipsis"), f.css(h)))
                        }; h.prototype.moveLabel = function (v, u) { var g = this, p = g.label, k = !1, c = g.axis, e = c.reversed; p && p.textStr === v ? (g.movedLabel = p, k = !0, delete g.label) : m(c.ticks, function (b) { k || b.isNew || b === g || !b.label || b.label.textStr !== v || (g.movedLabel = b.label, k = !0, b.labelPos = g.movedLabel.xy, delete b.label) }); if (!k && (g.labelPos || p)) { var f = g.labelPos || p.xy; p = c.horiz ? e ? 0 : c.width + c.left : f.x; c = c.horiz ? f.y : e ? c.width + c.left : 0; g.movedLabel = g.createLabel({ x: p, y: c }, v, u); g.movedLabel && g.movedLabel.attr({ opacity: 0 }) } };
                h.prototype.render = function (v, u, m) { var p = this.axis, k = p.horiz, c = this.pos, e = g(this.tickmarkOffset, p.tickmarkOffset); c = this.getPosition(k, c, e, u); e = c.x; var f = c.y; p = k && e === p.pos + p.len || !k && f === p.pos ? -1 : 1; m = g(m, 1); this.isActive = !0; this.renderGridLine(u, m, p); this.renderMark(c, m, p); this.renderLabel(c, u, m, v); this.isNew = !1; G(this, "afterRender") }; h.prototype.renderGridLine = function (v, u, m) {
                    var p = this.axis, k = p.options, c = this.gridLine, e = {}, f = this.pos, b = this.type, l = g(this.tickmarkOffset, p.tickmarkOffset), a = p.chart.renderer,
                    x = b ? b + "Grid" : "grid", E = k[x + "LineWidth"], C = k[x + "LineColor"]; k = k[x + "LineDashStyle"]; c || (p.chart.styledMode || (e.stroke = C, e["stroke-width"] = E, k && (e.dashstyle = k)), b || (e.zIndex = 1), v && (u = 0), this.gridLine = c = a.path().attr(e).addClass("highcharts-" + (b ? b + "-" : "") + "grid-line").add(p.gridGroup)); if (c && (m = p.getPlotLinePath({ value: f + l, lineWidth: c.strokeWidth() * m, force: "pass", old: v }))) c[v || this.isNew ? "attr" : "animate"]({ d: m, opacity: u })
                }; h.prototype.renderMark = function (v, u, m) {
                    var p = this.axis, k = p.options, c = p.chart.renderer,
                    e = this.type, f = e ? e + "Tick" : "tick", b = p.tickSize(f), l = this.mark, a = !l, x = v.x; v = v.y; var E = g(k[f + "Width"], !e && p.isXAxis ? 1 : 0); k = k[f + "Color"]; b && (p.opposite && (b[0] = -b[0]), a && (this.mark = l = c.path().addClass("highcharts-" + (e ? e + "-" : "") + "tick").add(p.axisGroup), p.chart.styledMode || l.attr({ stroke: k, "stroke-width": E })), l[a ? "attr" : "animate"]({ d: this.getMarkPath(x, v, b[0], l.strokeWidth() * m, p.horiz, c), opacity: u }))
                }; h.prototype.renderLabel = function (v, u, m, p) {
                    var k = this.axis, c = k.horiz, e = k.options, f = this.label, b = e.labels,
                    l = b.step; k = g(this.tickmarkOffset, k.tickmarkOffset); var a = !0, x = v.x; v = v.y; f && B(x) && (f.xy = v = this.getLabelPosition(x, v, f, c, b, k, p, l), this.isFirst && !this.isLast && !g(e.showFirstLabel, 1) || this.isLast && !this.isFirst && !g(e.showLastLabel, 1) ? a = !1 : !c || b.step || b.rotation || u || 0 === m || this.handleOverflow(v), l && p % l && (a = !1), a && B(v.y) ? (v.opacity = m, f[this.isNewLabel ? "attr" : "animate"](v), this.isNewLabel = !1) : (f.attr("y", -9999), this.isNewLabel = !0))
                }; h.prototype.replaceMovedLabel = function () {
                    var v = this.label, g = this.axis, m =
                        g.reversed; if (v && !this.isNew) { var p = g.horiz ? m ? g.left : g.width + g.left : v.xy.x; m = g.horiz ? v.xy.y : m ? g.width + g.top : g.top; v.animate({ x: p, y: m, opacity: 0 }, void 0, v.destroy); delete this.label } g.isDirty = !0; this.label = this.movedLabel; delete this.movedLabel
                }; return h
            }(); n.Tick = h; return n.Tick
        }); O(q, "Core/Time.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
            var q = h.defined, z = h.error, y = h.extend, F = h.isObject, M = h.merge, G = h.objectEach, B = h.pad, r = h.pick, m = h.splat, g = h.timeUnits, D = n.win; h = function () {
                function h(g) {
                this.options =
                    {}; this.variableTimezone = this.useUTC = !1; this.Date = D.Date; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.update(g)
                } h.prototype.get = function (g, u) { if (this.variableTimezone || this.timezoneOffset) { var v = u.getTime(), p = v - this.getTimezoneOffset(u); u.setTime(p); g = u["getUTC" + g](); u.setTime(v); return g } return this.useUTC ? u["getUTC" + g]() : u["get" + g]() }; h.prototype.set = function (g, u, m) {
                    if (this.variableTimezone || this.timezoneOffset) {
                        if ("Milliseconds" === g || "Seconds" === g || "Minutes" === g) return u["setUTC" +
                            g](m); var p = this.getTimezoneOffset(u); p = u.getTime() - p; u.setTime(p); u["setUTC" + g](m); g = this.getTimezoneOffset(u); p = u.getTime() + g; return u.setTime(p)
                    } return this.useUTC ? u["setUTC" + g](m) : u["set" + g](m)
                }; h.prototype.update = function (g) { var m = r(g && g.useUTC, !0); this.options = g = M(!0, this.options || {}, g); this.Date = g.Date || D.Date || Date; this.timezoneOffset = (this.useUTC = m) && g.timezoneOffset; this.getTimezoneOffset = this.timezoneOffsetFunction(); this.variableTimezone = !(m && !g.getTimezoneOffset && !g.timezone) }; h.prototype.makeTime =
                    function (g, m, h, p, k, c) { if (this.useUTC) { var e = this.Date.UTC.apply(0, arguments); var f = this.getTimezoneOffset(e); e += f; var b = this.getTimezoneOffset(e); f !== b ? e += b - f : f - 36E5 !== this.getTimezoneOffset(e - 36E5) || n.isSafari || (e -= 36E5) } else e = (new this.Date(g, m, r(h, 1), r(p, 0), r(k, 0), r(c, 0))).getTime(); return e }; h.prototype.timezoneOffsetFunction = function () {
                        var g = this, m = this.options, r = m.moment || D.moment; if (!this.useUTC) return function (p) { return 6E4 * (new Date(p.toString())).getTimezoneOffset() }; if (m.timezone) {
                            if (r) return function (p) {
                                return 6E4 *
                                    -r.tz(p, m.timezone).utcOffset()
                            }; z(25)
                        } return this.useUTC && m.getTimezoneOffset ? function (p) { return 6E4 * m.getTimezoneOffset(p.valueOf()) } : function () { return 6E4 * (g.timezoneOffset || 0) }
                    }; h.prototype.dateFormat = function (g, m, h) {
                        var p; if (!q(m) || isNaN(m)) return (null === (p = n.defaultOptions.lang) || void 0 === p ? void 0 : p.invalidDate) || ""; g = r(g, "%Y-%m-%d %H:%M:%S"); var k = this; p = new this.Date(m); var c = this.get("Hours", p), e = this.get("Day", p), f = this.get("Date", p), b = this.get("Month", p), l = this.get("FullYear", p), a = n.defaultOptions.lang,
                            x = null === a || void 0 === a ? void 0 : a.weekdays, E = null === a || void 0 === a ? void 0 : a.shortWeekdays; p = y({ a: E ? E[e] : x[e].substr(0, 3), A: x[e], d: B(f), e: B(f, 2, " "), w: e, b: a.shortMonths[b], B: a.months[b], m: B(b + 1), o: b + 1, y: l.toString().substr(2, 2), Y: l, H: B(c), k: c, I: B(c % 12 || 12), l: c % 12 || 12, M: B(this.get("Minutes", p)), p: 12 > c ? "AM" : "PM", P: 12 > c ? "am" : "pm", S: B(p.getSeconds()), L: B(Math.floor(m % 1E3), 3) }, n.dateFormats); G(p, function (a, b) { for (; -1 !== g.indexOf("%" + b);)g = g.replace("%" + b, "function" === typeof a ? a.call(k, m) : a) }); return h ? g.substr(0,
                                1).toUpperCase() + g.substr(1) : g
                    }; h.prototype.resolveDTLFormat = function (g) { return F(g, !0) ? g : (g = m(g), { main: g[0], from: g[1], to: g[2] }) }; h.prototype.getTimeTicks = function (m, u, h, p) {
                        var k = this, c = [], e = {}; var f = new k.Date(u); var b = m.unitRange, l = m.count || 1, a; p = r(p, 1); if (q(u)) {
                            k.set("Milliseconds", f, b >= g.second ? 0 : l * Math.floor(k.get("Milliseconds", f) / l)); b >= g.second && k.set("Seconds", f, b >= g.minute ? 0 : l * Math.floor(k.get("Seconds", f) / l)); b >= g.minute && k.set("Minutes", f, b >= g.hour ? 0 : l * Math.floor(k.get("Minutes", f) / l));
                            b >= g.hour && k.set("Hours", f, b >= g.day ? 0 : l * Math.floor(k.get("Hours", f) / l)); b >= g.day && k.set("Date", f, b >= g.month ? 1 : Math.max(1, l * Math.floor(k.get("Date", f) / l))); if (b >= g.month) { k.set("Month", f, b >= g.year ? 0 : l * Math.floor(k.get("Month", f) / l)); var x = k.get("FullYear", f) } b >= g.year && k.set("FullYear", f, x - x % l); b === g.week && (x = k.get("Day", f), k.set("Date", f, k.get("Date", f) - x + p + (x < p ? -7 : 0))); x = k.get("FullYear", f); p = k.get("Month", f); var E = k.get("Date", f), C = k.get("Hours", f); u = f.getTime(); k.variableTimezone && (a = h - u > 4 * g.month ||
                                k.getTimezoneOffset(u) !== k.getTimezoneOffset(h)); u = f.getTime(); for (f = 1; u < h;)c.push(u), u = b === g.year ? k.makeTime(x + f * l, 0) : b === g.month ? k.makeTime(x, p + f * l) : !a || b !== g.day && b !== g.week ? a && b === g.hour && 1 < l ? k.makeTime(x, p, E, C + f * l) : u + b * l : k.makeTime(x, p, E + f * l * (b === g.day ? 1 : 7)), f++; c.push(u); b <= g.hour && 1E4 > c.length && c.forEach(function (a) { 0 === a % 18E5 && "000000000" === k.dateFormat("%H%M%S%L", a) && (e[a] = "day") })
                        } c.info = y(m, { higherRanks: e, totalRange: b * l }); return c
                    }; return h
            }(); n.Time = h; return n.Time
        }); O(q, "Core/Options.js",
            [q["Core/Globals.js"], q["Core/Color/Color.js"], q["Core/Time.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
                var y = n.isTouchDevice, L = n.svg; h = h.parse; z = z.merge; ""; n.defaultOptions = {
                    colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "), symbols: ["circle", "diamond", "square", "triangle", "triangle-down"], lang: {
                        loading: "Loading...", months: "January February March April May June July August September October November December".split(" "), shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), decimalPoint: ".", numericSymbols: "kMGTPE".split(""), resetZoom: "Reset zoom", resetZoomTitle: "Reset zoom level 1:1", thousandsSep: " "
                    }, global: {}, time: { Date: void 0, getTimezoneOffset: void 0, timezone: void 0, timezoneOffset: 0, useUTC: !0 }, chart: {
                        styledMode: !1, borderRadius: 0, colorCount: 10, defaultSeriesType: "line", ignoreHiddenSeries: !0, spacing: [10, 10, 15, 10], resetZoomButton: { theme: { zIndex: 6 }, position: { align: "right", x: -10, y: 10 } }, width: null,
                        height: null, borderColor: "#335cad", backgroundColor: "#ffffff", plotBorderColor: "#cccccc"
                    }, title: { text: "Chart title", align: "center", margin: 15, widthAdjust: -44 }, subtitle: { text: "", align: "center", widthAdjust: -44 }, caption: { margin: 15, text: "", align: "left", verticalAlign: "bottom" }, plotOptions: {}, labels: { style: { position: "absolute", color: "#333333" } }, legend: {
                        enabled: !0, align: "center", alignColumns: !0, layout: "horizontal", labelFormatter: function () { return this.name }, borderColor: "#999999", borderRadius: 0, navigation: {
                            activeColor: "#003399",
                            inactiveColor: "#cccccc"
                        }, itemStyle: { color: "#333333", cursor: "pointer", fontSize: "12px", fontWeight: "bold", textOverflow: "ellipsis" }, itemHoverStyle: { color: "#000000" }, itemHiddenStyle: { color: "#cccccc" }, shadow: !1, itemCheckboxStyle: { position: "absolute", width: "13px", height: "13px" }, squareSymbol: !0, symbolPadding: 5, verticalAlign: "bottom", x: 0, y: 0, title: { style: { fontWeight: "bold" } }
                    }, loading: {
                        labelStyle: { fontWeight: "bold", position: "relative", top: "45%" }, style: {
                            position: "absolute", backgroundColor: "#ffffff", opacity: .5,
                            textAlign: "center"
                        }
                    }, tooltip: {
                        enabled: !0, animation: L, borderRadius: 3, dateTimeLabelFormats: { millisecond: "%A, %b %e, %H:%M:%S.%L", second: "%A, %b %e, %H:%M:%S", minute: "%A, %b %e, %H:%M", hour: "%A, %b %e, %H:%M", day: "%A, %b %e, %Y", week: "Week from %A, %b %e, %Y", month: "%B %Y", year: "%Y" }, footerFormat: "", padding: 8, snap: y ? 25 : 10, headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>', pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>', backgroundColor: h("#f7f7f7").setOpacity(.85).get(),
                        borderWidth: 1, shadow: !0, style: { color: "#333333", cursor: "default", fontSize: "12px", whiteSpace: "nowrap" }
                    }, credits: { enabled: !0, href: "https://www.highcharts.com?credits", position: { align: "right", x: -10, verticalAlign: "bottom", y: -5 }, style: { cursor: "pointer", color: "#999999", fontSize: "9px" }, text: "Highcharts.com" }
                }; ""; n.time = new q(z(n.defaultOptions.global, n.defaultOptions.time)); n.dateFormat = function (h, q, B) { return n.time.dateFormat(h, q, B) }; return { dateFormat: n.dateFormat, defaultOptions: n.defaultOptions, time: n.time }
            });
    O(q, "Core/Axis/Axis.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Color/Color.js"], q["Core/Globals.js"], q["Core/Axis/Tick.js"], q["Core/Utilities.js"], q["Core/Options.js"]], function (n, h, q, z, y, F) {
        var L = n.animObject, G = y.addEvent, B = y.arrayMax, r = y.arrayMin, m = y.clamp, g = y.correctFloat, D = y.defined, H = y.destroyObjectProperties, v = y.error, u = y.extend, A = y.fireEvent, p = y.format, k = y.getMagnitude, c = y.isArray, e = y.isFunction, f = y.isNumber, b = y.isString, l = y.merge, a = y.normalizeTickInterval, x = y.objectEach, E = y.pick,
        C = y.relativeLength, K = y.removeEvent, T = y.splat, R = y.syncTimeout, N = F.defaultOptions, I = q.deg2rad; n = function () {
            function w(d, a) {
            this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks =
                this.overlap = this.options = this.oldMin = this.oldMax = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0; this.init(d, a)
            } w.prototype.init = function (d, a) {
                var t = a.isX, b = this; b.chart = d; b.horiz = d.inverted && !b.isZAxis ? !t : t; b.isXAxis =
                    t; b.coll = b.coll || (t ? "xAxis" : "yAxis"); A(this, "init", { userOptions: a }); b.opposite = a.opposite; b.side = a.side || (b.horiz ? b.opposite ? 0 : 2 : b.opposite ? 1 : 3); b.setOptions(a); var c = this.options, f = c.type; b.labelFormatter = c.labels.formatter || b.defaultLabelFormatter; b.userOptions = a; b.minPixelPadding = 0; b.reversed = c.reversed; b.visible = !1 !== c.visible; b.zoomEnabled = !1 !== c.zoomEnabled; b.hasNames = "category" === f || !0 === c.categories; b.categories = c.categories || b.hasNames; b.names || (b.names = [], b.names.keys = {}); b.plotLinesAndBandsGroups =
                        {}; b.positiveValuesOnly = !!b.logarithmic; b.isLinked = D(c.linkedTo); b.ticks = {}; b.labelEdge = []; b.minorTicks = {}; b.plotLinesAndBands = []; b.alternateBands = {}; b.len = 0; b.minRange = b.userMinRange = c.minRange || c.maxZoom; b.range = c.range; b.offset = c.offset || 0; b.max = null; b.min = null; b.crosshair = E(c.crosshair, T(d.options.tooltip.crosshairs)[t ? 0 : 1], !1); a = b.options.events; -1 === d.axes.indexOf(b) && (t ? d.axes.splice(d.xAxis.length, 0, b) : d.axes.push(b), d[b.coll].push(b)); b.series = b.series || []; d.inverted && !b.isZAxis && t && "undefined" ===
                            typeof b.reversed && (b.reversed = !0); b.labelRotation = b.options.labels.rotation; x(a, function (d, a) { e(d) && G(b, a, d) }); A(this, "afterInit")
            }; w.prototype.setOptions = function (d) { this.options = l(w.defaultOptions, "yAxis" === this.coll && w.defaultYAxisOptions, [w.defaultTopAxisOptions, w.defaultRightAxisOptions, w.defaultBottomAxisOptions, w.defaultLeftAxisOptions][this.side], l(N[this.coll], d)); A(this, "afterSetOptions", { userOptions: d }) }; w.prototype.defaultLabelFormatter = function () {
                var d = this.axis, a = f(this.value) ? this.value :
                    NaN, b = d.chart.time, c = d.categories, l = this.dateTimeLabelFormat, e = N.lang, k = e.numericSymbols; e = e.numericSymbolMagnitude || 1E3; var x = k && k.length, g = d.options.labels.format; d = d.logarithmic ? Math.abs(a) : d.tickInterval; var E = this.chart, C = E.numberFormatter; if (g) var m = p(g, this, E); else if (c) m = "" + this.value; else if (l) m = b.dateFormat(l, a); else if (x && 1E3 <= d) for (; x-- && "undefined" === typeof m;)b = Math.pow(e, x + 1), d >= b && 0 === 10 * a % b && null !== k[x] && 0 !== a && (m = C(a / b, -1) + k[x]); "undefined" === typeof m && (m = 1E4 <= Math.abs(a) ? C(a, -1) :
                        C(a, -1, void 0, "")); return m
            }; w.prototype.getSeriesExtremes = function () {
                var d = this, a = d.chart, b; A(this, "getSeriesExtremes", null, function () {
                d.hasVisibleSeries = !1; d.dataMin = d.dataMax = d.threshold = null; d.softThreshold = !d.isXAxis; d.stacking && d.stacking.buildStacks(); d.series.forEach(function (t) {
                    if (t.visible || !a.options.chart.ignoreHiddenSeries) {
                        var c = t.options, l = c.threshold; d.hasVisibleSeries = !0; d.positiveValuesOnly && 0 >= l && (l = null); if (d.isXAxis) {
                            if (c = t.xData, c.length) {
                                c = d.logarithmic ? c.filter(d.validatePositiveValue) :
                                    c; b = t.getXExtremes(c); var e = b.min; var k = b.max; f(e) || e instanceof Date || (c = c.filter(f), b = t.getXExtremes(c), e = b.min, k = b.max); c.length && (d.dataMin = Math.min(E(d.dataMin, e), e), d.dataMax = Math.max(E(d.dataMax, k), k))
                            }
                        } else if (t = t.applyExtremes(), f(t.dataMin) && (e = t.dataMin, d.dataMin = Math.min(E(d.dataMin, e), e)), f(t.dataMax) && (k = t.dataMax, d.dataMax = Math.max(E(d.dataMax, k), k)), D(l) && (d.threshold = l), !c.softThreshold || d.positiveValuesOnly) d.softThreshold = !1
                    }
                })
                }); A(this, "afterGetSeriesExtremes")
            }; w.prototype.translate =
                function (d, a, b, c, l, e) { var t = this.linkedParent || this, k = 1, J = 0, x = c ? t.oldTransA : t.transA; c = c ? t.oldMin : t.min; var p = t.minPixelPadding; l = (t.isOrdinal || t.brokenAxis && t.brokenAxis.hasBreaks || t.logarithmic && l) && t.lin2val; x || (x = t.transA); b && (k *= -1, J = t.len); t.reversed && (k *= -1, J -= k * (t.sector || t.len)); a ? (d = (d * k + J - p) / x + c, l && (d = t.lin2val(d))) : (l && (d = t.val2lin(d)), d = f(c) ? k * (d - c) * x + J + k * p + (f(e) ? x * e : 0) : void 0); return d }; w.prototype.toPixels = function (d, a) { return this.translate(d, !1, !this.horiz, null, !0) + (a ? 0 : this.pos) };
            w.prototype.toValue = function (d, a) { return this.translate(d - (a ? 0 : this.pos), !0, !this.horiz, null, !0) }; w.prototype.getPlotLinePath = function (d) {
                function a(d, a, t) { if ("pass" !== C && d < a || d > t) C ? d = m(d, a, t) : N = !0; return d } var b = this, c = b.chart, l = b.left, e = b.top, k = d.old, x = d.value, p = d.translatedValue, g = d.lineWidth, C = d.force, w, u, v, h, r = k && c.oldChartHeight || c.chartHeight, K = k && c.oldChartWidth || c.chartWidth, N, I = b.transB; d = { value: x, lineWidth: g, old: k, force: C, acrossPanes: d.acrossPanes, translatedValue: p }; A(this, "getPlotLinePath",
                    d, function (d) { p = E(p, b.translate(x, null, null, k)); p = m(p, -1E5, 1E5); w = v = Math.round(p + I); u = h = Math.round(r - p - I); f(p) ? b.horiz ? (u = e, h = r - b.bottom, w = v = a(w, l, l + b.width)) : (w = l, v = K - b.right, u = h = a(u, e, e + b.height)) : (N = !0, C = !1); d.path = N && !C ? null : c.renderer.crispLine([["M", w, u], ["L", v, h]], g || 1) }); return d.path
            }; w.prototype.getLinearTickPositions = function (d, a, b) {
                var t = g(Math.floor(a / d) * d); b = g(Math.ceil(b / d) * d); var c = [], f; g(t + d) === t && (f = 20); if (this.single) return [a]; for (a = t; a <= b;) {
                    c.push(a); a = g(a + d, f); if (a === l) break;
                    var l = a
                } return c
            }; w.prototype.getMinorTickInterval = function () { var d = this.options; return !0 === d.minorTicks ? E(d.minorTickInterval, "auto") : !1 === d.minorTicks ? null : d.minorTickInterval }; w.prototype.getMinorTickPositions = function () {
                var d = this.options, a = this.tickPositions, b = this.minorTickInterval, c = [], f = this.pointRangePadding || 0, l = this.min - f; f = this.max + f; var e = f - l; if (e && e / b < this.len / 3) {
                    var k = this.logarithmic; if (k) this.paddedTicks.forEach(function (d, a, t) {
                        a && c.push.apply(c, k.getLogTickPositions(b, t[a - 1], t[a],
                            !0))
                    }); else if (this.dateTime && "auto" === this.getMinorTickInterval()) c = c.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(b), l, f, d.startOfWeek)); else for (d = l + (a[0] - l) % b; d <= f && d !== c[0]; d += b)c.push(d)
                } 0 !== c.length && this.trimTicks(c); return c
            }; w.prototype.adjustForMinRange = function () {
                var d = this.options, a = this.min, b = this.max, c = this.logarithmic, f, l, e, k, x; this.isXAxis && "undefined" === typeof this.minRange && !c && (D(d.min) || D(d.max) ? this.minRange = null : (this.series.forEach(function (d) {
                    k = d.xData;
                    for (l = x = d.xIncrement ? 1 : k.length - 1; 0 < l; l--)if (e = k[l] - k[l - 1], "undefined" === typeof f || e < f) f = e
                }), this.minRange = Math.min(5 * f, this.dataMax - this.dataMin))); if (b - a < this.minRange) { var p = this.dataMax - this.dataMin >= this.minRange; var g = this.minRange; var C = (g - b + a) / 2; C = [a - C, E(d.min, a - C)]; p && (C[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin); a = B(C); b = [a + g, E(d.max, a + g)]; p && (b[2] = c ? c.log2lin(this.dataMax) : this.dataMax); b = r(b); b - a < g && (C[0] = b - g, C[1] = E(d.min, b - g), a = B(C)) } this.min = a; this.max =
                    b
            }; w.prototype.getClosest = function () { var d; this.categories ? d = 1 : this.series.forEach(function (a) { var t = a.closestPointRange, b = a.visible || !a.chart.options.chart.ignoreHiddenSeries; !a.noSharedTooltip && D(t) && b && (d = D(d) ? Math.min(d, t) : t) }); return d }; w.prototype.nameToX = function (d) {
                var a = c(this.categories), b = a ? this.categories : this.names, f = d.options.x; d.series.requireSorting = !1; D(f) || (f = !1 === this.options.uniqueNames ? d.series.autoIncrement() : a ? b.indexOf(d.name) : E(b.keys[d.name], -1)); if (-1 === f) { if (!a) var l = b.length } else l =
                    f; "undefined" !== typeof l && (this.names[l] = d.name, this.names.keys[d.name] = l); return l
            }; w.prototype.updateNames = function () {
                var d = this, a = this.names; 0 < a.length && (Object.keys(a.keys).forEach(function (d) { delete a.keys[d] }), a.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (a) {
                a.xIncrement = null; if (!a.points || a.isDirtyData) d.max = Math.max(d.max, a.xData.length - 1), a.processData(), a.generatePoints(); a.data.forEach(function (b, t) {
                    if (b && b.options && "undefined" !== typeof b.name) {
                        var c = d.nameToX(b);
                        "undefined" !== typeof c && c !== b.x && (b.x = c, a.xData[t] = c)
                    }
                })
                }))
            }; w.prototype.setAxisTranslation = function (d) {
                var a = this, c = a.max - a.min, f = a.axisPointRange || 0, l = 0, e = 0, k = a.linkedParent, x = !!a.categories, p = a.transA, g = a.isXAxis; if (g || x || f) {
                    var C = a.getClosest(); k ? (l = k.minPointOffset, e = k.pointRangePadding) : a.series.forEach(function (d) {
                        var t = x ? 1 : g ? E(d.options.pointRange, C, 0) : a.axisPointRange || 0, c = d.options.pointPlacement; f = Math.max(f, t); if (!a.single || x) d = d.is("xrange") ? !g : g, l = Math.max(l, d && b(c) ? 0 : t / 2), e = Math.max(e,
                            d && "on" === c ? 0 : t)
                    }); k = a.ordinal && a.ordinal.slope && C ? a.ordinal.slope / C : 1; a.minPointOffset = l *= k; a.pointRangePadding = e *= k; a.pointRange = Math.min(f, a.single && x ? 1 : c); g && (a.closestPointRange = C)
                } d && (a.oldTransA = p); a.translationSlope = a.transA = p = a.staticScale || a.len / (c + e || 1); a.transB = a.horiz ? a.left : a.bottom; a.minPixelPadding = p * l; A(this, "afterSetAxisTranslation")
            }; w.prototype.minFromRange = function () { return this.max - this.range }; w.prototype.setTickInterval = function (d) {
                var b = this, c = b.chart, l = b.logarithmic, e = b.options,
                x = b.isXAxis, p = b.isLinked, C = e.maxPadding, m = e.minPadding, w = e.tickInterval, u = e.tickPixelInterval, h = b.categories, r = f(b.threshold) ? b.threshold : null, K = b.softThreshold; b.dateTime || h || p || this.getTickAmount(); var N = E(b.userMin, e.min); var I = E(b.userMax, e.max); if (p) { b.linkedParent = c[b.coll][e.linkedTo]; var n = b.linkedParent.getExtremes(); b.min = E(n.min, n.dataMin); b.max = E(n.max, n.dataMax); e.type !== b.linkedParent.options.type && v(11, 1, c) } else {
                    if (K && D(r)) if (b.dataMin >= r) n = r, m = 0; else if (b.dataMax <= r) { var H = r; C = 0 } b.min =
                        E(N, n, b.dataMin); b.max = E(I, H, b.dataMax)
                } l && (b.positiveValuesOnly && !d && 0 >= Math.min(b.min, E(b.dataMin, b.min)) && v(10, 1, c), b.min = g(l.log2lin(b.min), 16), b.max = g(l.log2lin(b.max), 16)); b.range && D(b.max) && (b.userMin = b.min = N = Math.max(b.dataMin, b.minFromRange()), b.userMax = I = b.max, b.range = null); A(b, "foundExtremes"); b.beforePadding && b.beforePadding(); b.adjustForMinRange(); !(h || b.axisPointRange || b.stacking && b.stacking.usePercentage || p) && D(b.min) && D(b.max) && (c = b.max - b.min) && (!D(N) && m && (b.min -= c * m), !D(I) && C && (b.max +=
                    c * C)); f(b.userMin) || (f(e.softMin) && e.softMin < b.min && (b.min = N = e.softMin), f(e.floor) && (b.min = Math.max(b.min, e.floor))); f(b.userMax) || (f(e.softMax) && e.softMax > b.max && (b.max = I = e.softMax), f(e.ceiling) && (b.max = Math.min(b.max, e.ceiling))); K && D(b.dataMin) && (r = r || 0, !D(N) && b.min < r && b.dataMin >= r ? b.min = b.options.minRange ? Math.min(r, b.max - b.minRange) : r : !D(I) && b.max > r && b.dataMax <= r && (b.max = b.options.minRange ? Math.max(r, b.min + b.minRange) : r)); b.tickInterval = b.min === b.max || "undefined" === typeof b.min || "undefined" ===
                        typeof b.max ? 1 : p && !w && u === b.linkedParent.options.tickPixelInterval ? w = b.linkedParent.tickInterval : E(w, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, h ? 1 : (b.max - b.min) * u / Math.max(b.len, u)); x && !d && b.series.forEach(function (d) { d.processData(b.min !== b.oldMin || b.max !== b.oldMax) }); b.setAxisTranslation(!0); A(this, "initialAxisTranslation"); b.pointRange && !w && (b.tickInterval = Math.max(b.pointRange, b.tickInterval)); d = E(e.minTickInterval, b.dateTime && !b.series.some(function (d) { return d.noSharedTooltip }) ?
                            b.closestPointRange : 0); !w && b.tickInterval < d && (b.tickInterval = d); b.dateTime || b.logarithmic || w || (b.tickInterval = a(b.tickInterval, void 0, k(b.tickInterval), E(e.allowDecimals, .5 > b.tickInterval || void 0 !== this.tickAmount), !!this.tickAmount)); this.tickAmount || (b.tickInterval = b.unsquish()); this.setTickPositions()
            }; w.prototype.setTickPositions = function () {
                var d = this.options, a = d.tickPositions; var b = this.getMinorTickInterval(); var c = d.tickPositioner, f = this.hasVerticalPanning(), l = "colorAxis" === this.coll, e = (l ||
                    !f) && d.startOnTick; f = (l || !f) && d.endOnTick; this.tickmarkOffset = this.categories && "between" === d.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0; this.minorTickInterval = "auto" === b && this.tickInterval ? this.tickInterval / 5 : b; this.single = this.min === this.max && D(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== d.allowDecimals); this.tickPositions = b = a && a.slice(); !b && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? b = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,
                        d.units), this.min, this.max, d.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (b = [this.min, this.max], v(19, !1, this.chart)), b.length > this.len && (b = [b[0], b.pop()], b[0] === b[1] && (b.length = 1)), this.tickPositions = b, c && (c = c.apply(this, [this.min, this.max]))) && (this.tickPositions = b = c); this.paddedTicks = b.slice(0); this.trimTicks(b,
                            e, f); this.isLinked || (this.single && 2 > b.length && !this.categories && !this.series.some(function (d) { return d.is("heatmap") && "between" === d.options.pointPlacement }) && (this.min -= .5, this.max += .5), a || c || this.adjustTickAmount()); A(this, "afterSetTickPositions")
            }; w.prototype.trimTicks = function (d, a, b) {
                var c = d[0], t = d[d.length - 1], f = !this.isOrdinal && this.minPointOffset || 0; A(this, "trimTicks"); if (!this.isLinked) {
                    if (a && -Infinity !== c) this.min = c; else for (; this.min - f > d[0];)d.shift(); if (b) this.max = t; else for (; this.max + f <
                        d[d.length - 1];)d.pop(); 0 === d.length && D(c) && !this.options.tickPositions && d.push((t + c) / 2)
                }
            }; w.prototype.alignToOthers = function () { var d = {}, a, b = this.options; !1 === this.chart.options.chart.alignTicks || !1 === b.alignTicks || !1 === b.startOnTick || !1 === b.endOnTick || this.logarithmic || this.chart[this.coll].forEach(function (b) { var c = b.options; c = [b.horiz ? c.left : c.top, c.width, c.height, c.pane].join(); b.series.length && (d[c] ? a = !0 : d[c] = 1) }); return a }; w.prototype.getTickAmount = function () {
                var d = this.options, a = d.tickAmount,
                b = d.tickPixelInterval; !D(d.tickInterval) && !a && this.len < b && !this.isRadial && !this.logarithmic && d.startOnTick && d.endOnTick && (a = 2); !a && this.alignToOthers() && (a = Math.ceil(this.len / b) + 1); 4 > a && (this.finalTickAmt = a, a = 5); this.tickAmount = a
            }; w.prototype.adjustTickAmount = function () {
                var d = this.options, a = this.tickInterval, b = this.tickPositions, c = this.tickAmount, f = this.finalTickAmt, l = b && b.length, e = E(this.threshold, this.softThreshold ? 0 : null), k; if (this.hasData()) {
                    if (l < c) {
                        for (k = this.min; b.length < c;)b.length % 2 || k ===
                            e ? b.push(g(b[b.length - 1] + a)) : b.unshift(g(b[0] - a)); this.transA *= (l - 1) / (c - 1); this.min = d.startOnTick ? b[0] : Math.min(this.min, b[0]); this.max = d.endOnTick ? b[b.length - 1] : Math.max(this.max, b[b.length - 1])
                    } else l > c && (this.tickInterval *= 2, this.setTickPositions()); if (D(f)) { for (a = d = b.length; a--;)(3 === f && 1 === a % 2 || 2 >= f && 0 < a && a < d - 1) && b.splice(a, 1); this.finalTickAmt = void 0 }
                }
            }; w.prototype.setScale = function () {
                var d, a = !1, b = !1; this.series.forEach(function (d) {
                    var c; a = a || d.isDirtyData || d.isDirty; b = b || (null === (c = d.xAxis) ||
                        void 0 === c ? void 0 : c.isDirty) || !1
                }); this.oldMin = this.min; this.oldMax = this.max; this.oldAxisLength = this.len; this.setAxisSize(); (d = this.len !== this.oldAxisLength) || a || b || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = d || this.min !== this.oldMin ||
                    this.max !== this.oldMax)) : this.stacking && this.stacking.cleanStacks(); a && this.panningState && (this.panningState.isDirty = !0); A(this, "afterSetScale")
            }; w.prototype.setExtremes = function (d, a, b, c, f) { var t = this, l = t.chart; b = E(b, !0); t.series.forEach(function (d) { delete d.kdTree }); f = u(f, { min: d, max: a }); A(t, "setExtremes", f, function () { t.userMin = d; t.userMax = a; t.eventArgs = f; b && l.redraw(c) }) }; w.prototype.zoom = function (d, a) {
                var b = this, c = this.dataMin, t = this.dataMax, f = this.options, l = Math.min(c, E(f.min, c)), e = Math.max(t,
                    E(f.max, t)); d = { newMin: d, newMax: a }; A(this, "zoom", d, function (d) { var a = d.newMin, f = d.newMax; if (a !== b.min || f !== b.max) b.allowZoomOutside || (D(c) && (a < l && (a = l), a > e && (a = e)), D(t) && (f < l && (f = l), f > e && (f = e))), b.displayBtn = "undefined" !== typeof a || "undefined" !== typeof f, b.setExtremes(a, f, !1, void 0, { trigger: "zoom" }); d.zoomed = !0 }); return d.zoomed
            }; w.prototype.setAxisSize = function () {
                var d = this.chart, a = this.options, b = a.offsets || [0, 0, 0, 0], c = this.horiz, f = this.width = Math.round(C(E(a.width, d.plotWidth - b[3] + b[1]), d.plotWidth)),
                l = this.height = Math.round(C(E(a.height, d.plotHeight - b[0] + b[2]), d.plotHeight)), e = this.top = Math.round(C(E(a.top, d.plotTop + b[0]), d.plotHeight, d.plotTop)); a = this.left = Math.round(C(E(a.left, d.plotLeft + b[3]), d.plotWidth, d.plotLeft)); this.bottom = d.chartHeight - l - e; this.right = d.chartWidth - f - a; this.len = Math.max(c ? f : l, 0); this.pos = c ? a : e
            }; w.prototype.getExtremes = function () {
                var d = this.logarithmic; return {
                    min: d ? g(d.lin2log(this.min)) : this.min, max: d ? g(d.lin2log(this.max)) : this.max, dataMin: this.dataMin, dataMax: this.dataMax,
                    userMin: this.userMin, userMax: this.userMax
                }
            }; w.prototype.getThreshold = function (d) { var a = this.logarithmic, b = a ? a.lin2log(this.min) : this.min; a = a ? a.lin2log(this.max) : this.max; null === d || -Infinity === d ? d = b : Infinity === d ? d = a : b > d ? d = b : a < d && (d = a); return this.translate(d, 0, 1, 0, 1) }; w.prototype.autoLabelAlign = function (d) { var a = (E(d, 0) - 90 * this.side + 720) % 360; d = { align: "center" }; A(this, "autoLabelAlign", d, function (d) { 15 < a && 165 > a ? d.align = "right" : 195 < a && 345 > a && (d.align = "left") }); return d.align }; w.prototype.tickSize = function (d) {
                var a =
                    this.options, b = a["tick" === d ? "tickLength" : "minorTickLength"], c = E(a["tick" === d ? "tickWidth" : "minorTickWidth"], "tick" === d && this.isXAxis && !this.categories ? 1 : 0); if (c && b) { "inside" === a[d + "Position"] && (b = -b); var f = [b, c] } d = { tickSize: f }; A(this, "afterTickSize", d); return d.tickSize
            }; w.prototype.labelMetrics = function () { var d = this.tickPositions && this.tickPositions[0] || 0; return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[d] && this.ticks[d].label) }; w.prototype.unsquish =
                function () {
                    var d = this.options.labels, a = this.horiz, b = this.tickInterval, c = b, f = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / b), l, e = d.rotation, k = this.labelMetrics(), x, p = Number.MAX_VALUE, C, m = this.max - this.min, w = function (d) { var a = d / (f || 1); a = 1 < a ? Math.ceil(a) : 1; a * b > m && Infinity !== d && Infinity !== f && m && (a = Math.ceil(m / b)); return g(a * b) }; a ? (C = !d.staggerLines && !d.step && (D(e) ? [e] : f < E(d.autoRotationLimit, 80) && d.autoRotation)) && C.forEach(function (d) {
                        if (d === e || d && -90 <= d && 90 >= d) {
                            x = w(Math.abs(k.h / Math.sin(I * d)));
                            var a = x + Math.abs(d / 360); a < p && (p = a, l = d, c = x)
                        }
                    }) : d.step || (c = w(k.h)); this.autoRotation = C; this.labelRotation = E(l, e); return c
                }; w.prototype.getSlotWidth = function (d) {
                    var a, b = this.chart, c = this.horiz, l = this.options.labels, e = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), k = b.margin[3]; if (d && f(d.slotWidth)) return d.slotWidth; if (c && l && 2 > (l.step || 0)) return l.rotation ? 0 : (this.staggerLines || 1) * this.len / e; if (!c) {
                        d = null === (a = null === l || void 0 === l ? void 0 : l.style) || void 0 === a ? void 0 : a.width; if (void 0 !== d) return parseInt(d,
                            10); if (k) return k - b.spacing[3]
                    } return .33 * b.chartWidth
                }; w.prototype.renderUnsquish = function () {
                    var d = this.chart, a = d.renderer, c = this.tickPositions, f = this.ticks, l = this.options.labels, e = l && l.style || {}, k = this.horiz, x = this.getSlotWidth(), p = Math.max(1, Math.round(x - 2 * (l.padding || 5))), g = {}, E = this.labelMetrics(), C = l.style && l.style.textOverflow, m = 0; b(l.rotation) || (g.rotation = l.rotation || 0); c.forEach(function (d) { d = f[d]; d.movedLabel && d.replaceMovedLabel(); d && d.label && d.label.textPxLength > m && (m = d.label.textPxLength) });
                    this.maxLabelLength = m; if (this.autoRotation) m > p && m > E.h ? g.rotation = this.labelRotation : this.labelRotation = 0; else if (x) { var w = p; if (!C) { var u = "clip"; for (p = c.length; !k && p--;) { var r = c[p]; if (r = f[r].label) r.styles && "ellipsis" === r.styles.textOverflow ? r.css({ textOverflow: "clip" }) : r.textPxLength > x && r.css({ width: x + "px" }), r.getBBox().height > this.len / c.length - (E.h - E.f) && (r.specificTextOverflow = "ellipsis") } } } g.rotation && (w = m > .5 * d.chartHeight ? .33 * d.chartHeight : m, C || (u = "ellipsis")); if (this.labelAlign = l.align || this.autoLabelAlign(this.labelRotation)) g.align =
                        this.labelAlign; c.forEach(function (d) { var a = (d = f[d]) && d.label, b = e.width, c = {}; a && (a.attr(g), d.shortenLabel ? d.shortenLabel() : w && !b && "nowrap" !== e.whiteSpace && (w < a.textPxLength || "SPAN" === a.element.tagName) ? (c.width = w + "px", C || (c.textOverflow = a.specificTextOverflow || u), a.css(c)) : a.styles && a.styles.width && !c.width && !b && a.css({ width: null }), delete a.specificTextOverflow, d.rotation = g.rotation) }, this); this.tickRotCorr = a.rotCorr(E.b, this.labelRotation || 0, 0 !== this.side)
                }; w.prototype.hasData = function () {
                    return this.series.some(function (d) { return d.hasData() }) ||
                        this.options.showEmpty && D(this.min) && D(this.max)
                }; w.prototype.addTitle = function (d) {
                    var a = this.chart.renderer, b = this.horiz, c = this.opposite, f = this.options.title, e, k = this.chart.styledMode; this.axisTitle || ((e = f.textAlign) || (e = (b ? { low: "left", middle: "center", high: "right" } : { low: c ? "right" : "left", middle: "center", high: c ? "left" : "right" })[f.align]), this.axisTitle = a.text(f.text, 0, 0, f.useHTML).attr({ zIndex: 7, rotation: f.rotation || 0, align: e }).addClass("highcharts-axis-title"), k || this.axisTitle.css(l(f.style)), this.axisTitle.add(this.axisGroup),
                        this.axisTitle.isNew = !0); k || f.style.width || this.isRadial || this.axisTitle.css({ width: this.len + "px" }); this.axisTitle[d ? "show" : "hide"](d)
                }; w.prototype.generateTick = function (d) { var a = this.ticks; a[d] ? a[d].addLabel() : a[d] = new z(this, d) }; w.prototype.getOffset = function () {
                    var d = this, a = d.chart, b = a.renderer, c = d.options, f = d.tickPositions, l = d.ticks, e = d.horiz, k = d.side, p = a.inverted && !d.isZAxis ? [1, 0, 3, 2][k] : k, g, C = 0, m = 0, w = c.title, u = c.labels, r = 0, v = a.axisOffset; a = a.clipOffset; var h = [-1, 1, 1, -1][k], K = c.className, N = d.axisParent;
                    var I = d.hasData(); d.showAxis = g = I || E(c.showEmpty, !0); d.staggerLines = d.horiz && u.staggerLines; d.axisGroup || (d.gridGroup = b.g("grid").attr({ zIndex: c.gridZIndex || 1 }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (K || "")).add(N), d.axisGroup = b.g("axis").attr({ zIndex: c.zIndex || 2 }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (K || "")).add(N), d.labelGroup = b.g("axis-labels").attr({ zIndex: u.zIndex || 7 }).addClass("highcharts-" + d.coll.toLowerCase() + "-labels " + (K || "")).add(N)); I || d.isLinked ? (f.forEach(function (a,
                        b) { d.generateTick(a, b) }), d.renderUnsquish(), d.reserveSpaceDefault = 0 === k || 2 === k || { 1: "left", 3: "right" }[k] === d.labelAlign, E(u.reserveSpace, "center" === d.labelAlign ? !0 : null, d.reserveSpaceDefault) && f.forEach(function (a) { r = Math.max(l[a].getLabelSize(), r) }), d.staggerLines && (r *= d.staggerLines), d.labelOffset = r * (d.opposite ? -1 : 1)) : x(l, function (a, d) { a.destroy(); delete l[d] }); if (w && w.text && !1 !== w.enabled && (d.addTitle(g), g && !1 !== w.reserveSpace)) {
                        d.titleOffset = C = d.axisTitle.getBBox()[e ? "height" : "width"]; var n = w.offset;
                            m = D(n) ? 0 : E(w.margin, e ? 5 : 10)
                        } d.renderLine(); d.offset = h * E(c.offset, v[k] ? v[k] + (c.margin || 0) : 0); d.tickRotCorr = d.tickRotCorr || { x: 0, y: 0 }; b = 0 === k ? -d.labelMetrics().h : 2 === k ? d.tickRotCorr.y : 0; m = Math.abs(r) + m; r && (m = m - b + h * (e ? E(u.y, d.tickRotCorr.y + 8 * h) : u.x)); d.axisTitleMargin = E(n, m); d.getMaxLabelDimensions && (d.maxLabelDimensions = d.getMaxLabelDimensions(l, f)); e = this.tickSize("tick"); v[k] = Math.max(v[k], d.axisTitleMargin + C + h * d.offset, m, f && f.length && e ? e[0] + h * d.offset : 0); c = c.offset ? 0 : 2 * Math.floor(d.axisLine.strokeWidth() /
                            2); a[p] = Math.max(a[p], c); A(this, "afterGetOffset")
                }; w.prototype.getLinePath = function (a) { var d = this.chart, b = this.opposite, c = this.offset, f = this.horiz, l = this.left + (b ? this.width : 0) + c; c = d.chartHeight - this.bottom - (b ? this.height : 0) + c; b && (a *= -1); return d.renderer.crispLine([["M", f ? this.left : l, f ? c : this.top], ["L", f ? d.chartWidth - this.right : l, f ? c : d.chartHeight - this.bottom]], a) }; w.prototype.renderLine = function () {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),
                    this.chart.styledMode || this.axisLine.attr({ stroke: this.options.lineColor, "stroke-width": this.options.lineWidth, zIndex: 7 }))
                }; w.prototype.getTitlePosition = function () {
                    var a = this.horiz, b = this.left, c = this.top, f = this.len, l = this.options.title, e = a ? b : c, k = this.opposite, x = this.offset, p = l.x || 0, g = l.y || 0, E = this.axisTitle, C = this.chart.renderer.fontMetrics(l.style && l.style.fontSize, E); E = Math.max(E.getBBox(null, 0).height - C.h - 1, 0); f = { low: e + (a ? 0 : f), middle: e + f / 2, high: e + (a ? f : 0) }[l.align]; b = (a ? c + this.height : b) + (a ? 1 : -1) *
                        (k ? -1 : 1) * this.axisTitleMargin + [-E, E, C.f, -E][this.side]; a = { x: a ? f + p : b + (k ? this.width : 0) + x + p, y: a ? b + g - (k ? this.height : 0) + x : f + g }; A(this, "afterGetTitlePosition", { titlePosition: a }); return a
                }; w.prototype.renderMinorTick = function (a) { var d = this.chart.hasRendered && f(this.oldMin), b = this.minorTicks; b[a] || (b[a] = new z(this, a, "minor")); d && b[a].isNew && b[a].render(null, !0); b[a].render(null, !1, 1) }; w.prototype.renderTick = function (a, b) {
                    var d, c = this.isLinked, l = this.ticks, t = this.chart.hasRendered && f(this.oldMin); if (!c || a >=
                        this.min && a <= this.max || (null === (d = this.grid) || void 0 === d ? 0 : d.isColumn)) l[a] || (l[a] = new z(this, a)), t && l[a].isNew && l[a].render(b, !0, -1), l[a].render(b)
                }; w.prototype.render = function () {
                    var a = this, b = a.chart, c = a.logarithmic, l = a.options, e = a.isLinked, k = a.tickPositions, p = a.axisTitle, g = a.ticks, E = a.minorTicks, C = a.alternateBands, m = l.stackLabels, w = l.alternateGridColor, u = a.tickmarkOffset, r = a.axisLine, v = a.showAxis, h = L(b.renderer.globalAnimation), K, N; a.labelEdge.length = 0; a.overlap = !1;[g, E, C].forEach(function (a) {
                        x(a,
                            function (a) { a.isActive = !1 })
                    }); if (a.hasData() || e) a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (d) { a.renderMinorTick(d) }), k.length && (k.forEach(function (d, b) { a.renderTick(d, b) }), u && (0 === a.min || a.single) && (g[-1] || (g[-1] = new z(a, -1, null, !0)), g[-1].render(-1))), w && k.forEach(function (d, f) {
                        N = "undefined" !== typeof k[f + 1] ? k[f + 1] + u : a.max - u; 0 === f % 2 && d < a.max && N <= a.max + (b.polar ? -u : u) && (C[d] || (C[d] = new q.PlotLineOrBand(a)), K = d + u, C[d].options = {
                            from: c ? c.lin2log(K) : K, to: c ? c.lin2log(N) :
                                N, color: w, className: "highcharts-alternate-grid"
                        }, C[d].render(), C[d].isActive = !0)
                    }), a._addedPlotLB || ((l.plotLines || []).concat(l.plotBands || []).forEach(function (d) { a.addPlotBandOrLine(d) }), a._addedPlotLB = !0);[g, E, C].forEach(function (a) { var d, c = [], f = h.duration; x(a, function (a, d) { a.isActive || (a.render(d, !1, 0), a.isActive = !1, c.push(d)) }); R(function () { for (d = c.length; d--;)a[c[d]] && !a[c[d]].isActive && (a[c[d]].destroy(), delete a[c[d]]) }, a !== C && b.hasRendered && f ? f : 0) }); r && (r[r.isPlaced ? "animate" : "attr"]({ d: this.getLinePath(r.strokeWidth()) }),
                        r.isPlaced = !0, r[v ? "show" : "hide"](v)); p && v && (l = a.getTitlePosition(), f(l.y) ? (p[p.isNew ? "attr" : "animate"](l), p.isNew = !1) : (p.attr("y", -9999), p.isNew = !0)); m && m.enabled && a.stacking && a.stacking.renderStackTotals(); a.isDirty = !1; A(this, "afterRender")
                }; w.prototype.redraw = function () { this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) { a.render() })); this.series.forEach(function (a) { a.isDirty = !0 }) }; w.prototype.getKeepProps = function () { return this.keepProps || w.keepProps }; w.prototype.destroy = function (a) {
                    var d =
                        this, b = d.plotLinesAndBands, c; A(this, "destroy", { keepEvents: a }); a || K(d);[d.ticks, d.minorTicks, d.alternateBands].forEach(function (a) { H(a) }); if (b) for (a = b.length; a--;)b[a].destroy(); "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) { d[a] && (d[a] = d[a].destroy()) }); for (c in d.plotLinesAndBandsGroups) d.plotLinesAndBandsGroups[c] = d.plotLinesAndBandsGroups[c].destroy(); x(d, function (a, b) { -1 === d.getKeepProps().indexOf(b) && delete d[b] })
                }; w.prototype.drawCrosshair =
                    function (a, b) {
                        var d = this.crosshair, c = E(d.snap, !0), f, l = this.cross, t = this.chart; A(this, "drawCrosshair", { e: a, point: b }); a || (a = this.cross && this.cross.e); if (this.crosshair && !1 !== (D(b) || !c)) {
                            c ? D(b) && (f = E("colorAxis" !== this.coll ? b.crosshairPos : null, this.isXAxis ? b.plotX : this.len - b.plotY)) : f = a && (this.horiz ? a.chartX - this.pos : this.len - a.chartY + this.pos); if (D(f)) {
                                var e = { value: b && (this.isXAxis ? b.x : E(b.stackY, b.y)), translatedValue: f }; t.polar && u(e, { isCrosshair: !0, chartX: a && a.chartX, chartY: a && a.chartY, point: b }); e =
                                    this.getPlotLinePath(e) || null
                            } if (!D(e)) { this.hideCrosshair(); return } c = this.categories && !this.isRadial; l || (this.cross = l = t.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c ? "category " : "thin ") + d.className).attr({ zIndex: E(d.zIndex, 2) }).add(), t.styledMode || (l.attr({ stroke: d.color || (c ? h.parse("#ccd6eb").setOpacity(.25).get() : "#cccccc"), "stroke-width": E(d.width, 1) }).css({ "pointer-events": "none" }), d.dashStyle && l.attr({ dashstyle: d.dashStyle }))); l.show().attr({ d: e }); c && !d.width && l.attr({ "stroke-width": this.transA });
                            this.cross.e = a
                        } else this.hideCrosshair(); A(this, "afterDrawCrosshair", { e: a, point: b })
                    }; w.prototype.hideCrosshair = function () { this.cross && this.cross.hide(); A(this, "afterHideCrosshair") }; w.prototype.hasVerticalPanning = function () { var a, b; return /y/.test((null === (b = null === (a = this.chart.options.chart) || void 0 === a ? void 0 : a.panning) || void 0 === b ? void 0 : b.type) || "") }; w.prototype.validatePositiveValue = function (a) { return f(a) && 0 < a }; w.defaultOptions = {
                        dateTimeLabelFormats: {
                            millisecond: { main: "%H:%M:%S.%L", range: !1 },
                            second: { main: "%H:%M:%S", range: !1 }, minute: { main: "%H:%M", range: !1 }, hour: { main: "%H:%M", range: !1 }, day: { main: "%e. %b" }, week: { main: "%e. %b" }, month: { main: "%b '%y" }, year: { main: "%Y" }
                        }, endOnTick: !1, labels: { enabled: !0, indentation: 10, x: 0, style: { color: "#666666", cursor: "default", fontSize: "11px" } }, maxPadding: .01, minorTickLength: 2, minorTickPosition: "outside", minPadding: .01, showEmpty: !0, startOfWeek: 1, startOnTick: !1, tickLength: 10, tickPixelInterval: 100, tickmarkPlacement: "between", tickPosition: "outside", title: {
                            align: "middle",
                            style: { color: "#666666" }
                        }, type: "linear", minorGridLineColor: "#f2f2f2", minorGridLineWidth: 1, minorTickColor: "#999999", lineColor: "#ccd6eb", lineWidth: 1, gridLineColor: "#e6e6e6", tickColor: "#ccd6eb"
                    }; w.defaultYAxisOptions = {
                        endOnTick: !0, maxPadding: .05, minPadding: .05, tickPixelInterval: 72, showLastLabel: !0, labels: { x: -8 }, startOnTick: !0, title: { rotation: 270, text: "Values" }, stackLabels: {
                            animation: {}, allowOverlap: !1, enabled: !1, crop: !0, overflow: "justify", formatter: function () {
                                var a = this.axis.chart.numberFormatter; return a(this.total,
                                    -1)
                            }, style: { color: "#000000", fontSize: "11px", fontWeight: "bold", textOutline: "1px contrast" }
                        }, gridLineWidth: 1, lineWidth: 0
                    }; w.defaultLeftAxisOptions = { labels: { x: -15 }, title: { rotation: 270 } }; w.defaultRightAxisOptions = { labels: { x: 15 }, title: { rotation: 90 } }; w.defaultBottomAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; w.defaultTopAxisOptions = { labels: { autoRotation: [-45], x: 0 }, margin: 15, title: { rotation: 0 } }; w.keepProps = "extKey hcEvents names series userMax userMin".split(" "); return w
        }();
        q.Axis = n; return q.Axis
    }); O(q, "Core/Axis/DateTimeAxis.js", [q["Core/Axis/Axis.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = h.addEvent, z = h.getMagnitude, y = h.normalizeTickInterval, F = h.timeUnits, M = function () {
            function h(h) { this.axis = h } h.prototype.normalizeTimeTickInterval = function (h, r) {
                var m = r || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]]; r = m[m.length -
                    1]; var g = F[r[0]], n = r[1], H; for (H = 0; H < m.length && !(r = m[H], g = F[r[0]], n = r[1], m[H + 1] && h <= (g * n[n.length - 1] + F[m[H + 1][0]]) / 2); H++); g === F.year && h < 5 * g && (n = [1, 2, 5]); h = y(h / g, n, "year" === r[0] ? Math.max(z(h / g), 1) : 1); return { unitRange: g, count: h, unitName: r[0] }
            }; return h
        }(); h = function () {
            function h() { } h.compose = function (h) {
                h.keepProps.push("dateTime"); h.prototype.getTimeTicks = function () { return this.chart.time.getTimeTicks.apply(this.chart.time, arguments) }; q(h, "init", function (r) {
                    "datetime" !== r.userOptions.type ? this.dateTime =
                        void 0 : this.dateTime || (this.dateTime = new M(this))
                })
            }; h.AdditionsClass = M; return h
        }(); h.compose(n); return h
    }); O(q, "Core/Axis/LogarithmicAxis.js", [q["Core/Axis/Axis.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = h.addEvent, z = h.getMagnitude, y = h.normalizeTickInterval, F = h.pick, M = function () {
            function h(h) { this.axis = h } h.prototype.getLogTickPositions = function (h, r, m, g) {
                var n = this.axis, H = n.len, v = n.options, u = []; g || (this.minorAutoInterval = void 0); if (.5 <= h) h = Math.round(h), u = n.getLinearTickPositions(h, r, m); else if (.08 <=
                    h) { v = Math.floor(r); var A, p; for (H = .3 < h ? [1, 2, 4] : .15 < h ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; v < m + 1 && !p; v++) { var k = H.length; for (A = 0; A < k && !p; A++) { var c = this.log2lin(this.lin2log(v) * H[A]); c > r && (!g || e <= m) && "undefined" !== typeof e && u.push(e); e > m && (p = !0); var e = c } } } else r = this.lin2log(r), m = this.lin2log(m), h = g ? n.getMinorTickInterval() : v.tickInterval, h = F("auto" === h ? null : h, this.minorAutoInterval, v.tickPixelInterval / (g ? 5 : 1) * (m - r) / ((g ? H / n.tickPositions.length : H) || 1)), h = y(h, void 0, z(h)), u = n.getLinearTickPositions(h, r, m).map(this.log2lin),
                        g || (this.minorAutoInterval = h / 5); g || (n.tickInterval = h); return u
            }; h.prototype.lin2log = function (h) { return Math.pow(10, h) }; h.prototype.log2lin = function (h) { return Math.log(h) / Math.LN10 }; return h
        }(); h = function () {
            function h() { } h.compose = function (h) {
                h.keepProps.push("logarithmic"); var r = h.prototype, m = M.prototype; r.log2lin = m.log2lin; r.lin2log = m.lin2log; q(h, "init", function (g) {
                    var m = this.logarithmic; "logarithmic" !== g.userOptions.type ? this.logarithmic = void 0 : (m || (m = this.logarithmic = new M(this)), this.log2lin !==
                        m.log2lin && (m.log2lin = this.log2lin.bind(this)), this.lin2log !== m.lin2log && (m.lin2log = this.lin2log.bind(this)))
                }); q(h, "afterInit", function () { var g = this.logarithmic; g && (this.lin2val = function (m) { return g.lin2log(m) }, this.val2lin = function (m) { return g.log2lin(m) }) })
            }; return h
        }(); h.compose(n); return h
    }); O(q, "Core/Axis/PlotLineOrBand.js", [q["Core/Axis/Axis.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q) {
        var z = q.arrayMax, y = q.arrayMin, F = q.defined, L = q.destroyObjectProperties, G = q.erase, B = q.extend,
        r = q.merge, m = q.objectEach, g = q.pick; q = function () {
            function n(g, m) { this.axis = g; m && (this.options = m, this.id = m.id) } n.prototype.render = function () {
                h.fireEvent(this, "render"); var n = this, v = n.axis, u = v.horiz, A = v.logarithmic, p = n.options, k = p.label, c = n.label, e = p.to, f = p.from, b = p.value, l = F(f) && F(e), a = F(b), x = n.svgElem, E = !x, C = [], K = p.color, q = g(p.zIndex, 0), D = p.events; C = { "class": "highcharts-plot-" + (l ? "band " : "line ") + (p.className || "") }; var N = {}, I = v.chart.renderer, w = l ? "bands" : "lines"; A && (f = A.log2lin(f), e = A.log2lin(e), b =
                    A.log2lin(b)); v.chart.styledMode || (a ? (C.stroke = K || "#999999", C["stroke-width"] = g(p.width, 1), p.dashStyle && (C.dashstyle = p.dashStyle)) : l && (C.fill = K || "#e6ebf5", p.borderWidth && (C.stroke = p.borderColor, C["stroke-width"] = p.borderWidth))); N.zIndex = q; w += "-" + q; (A = v.plotLinesAndBandsGroups[w]) || (v.plotLinesAndBandsGroups[w] = A = I.g("plot-" + w).attr(N).add()); E && (n.svgElem = x = I.path().attr(C).add(A)); if (a) C = v.getPlotLinePath({ value: b, lineWidth: x.strokeWidth(), acrossPanes: p.acrossPanes }); else if (l) C = v.getPlotBandPath(f,
                        e, p); else return; !n.eventsAdded && D && (m(D, function (a, b) { x.on(b, function (a) { D[b].apply(n, [a]) }) }), n.eventsAdded = !0); (E || !x.d) && C && C.length ? x.attr({ d: C }) : x && (C ? (x.show(!0), x.animate({ d: C })) : x.d && (x.hide(), c && (n.label = c = c.destroy()))); k && (F(k.text) || F(k.formatter)) && C && C.length && 0 < v.width && 0 < v.height && !C.isFlat ? (k = r({ align: u && l && "center", x: u ? !l && 4 : 10, verticalAlign: !u && l && "middle", y: u ? l ? 16 : 10 : l ? 6 : -4, rotation: u && !l && 90 }, k), this.renderLabel(k, C, l, q)) : c && c.hide(); return n
            }; n.prototype.renderLabel = function (g,
                m, h, r) { var p = this.label, k = this.axis.chart.renderer; p || (p = { align: g.textAlign || g.align, rotation: g.rotation, "class": "highcharts-plot-" + (h ? "band" : "line") + "-label " + (g.className || "") }, p.zIndex = r, r = this.getLabelText(g), this.label = p = k.text(r, 0, 0, g.useHTML).attr(p).add(), this.axis.chart.styledMode || p.css(g.style)); k = m.xBounds || [m[0][1], m[1][1], h ? m[2][1] : m[0][1]]; m = m.yBounds || [m[0][2], m[1][2], h ? m[2][2] : m[0][2]]; h = y(k); r = y(m); p.align(g, !1, { x: h, y: r, width: z(k) - h, height: z(m) - r }); p.show(!0) }; n.prototype.getLabelText =
                    function (g) { return F(g.formatter) ? g.formatter.call(this) : g.text }; n.prototype.destroy = function () { G(this.axis.plotLinesAndBands, this); delete this.axis; L(this) }; return n
        }(); B(n.prototype, {
            getPlotBandPath: function (g, m, h) {
            void 0 === h && (h = this.options); var r = this.getPlotLinePath({ value: m, force: !0, acrossPanes: h.acrossPanes }); h = this.getPlotLinePath({ value: g, force: !0, acrossPanes: h.acrossPanes }); var v = [], p = this.horiz, k = 1; g = g < this.min && m < this.min || g > this.max && m > this.max; if (h && r) {
                if (g) {
                    var c = h.toString() === r.toString();
                    k = 0
                } for (g = 0; g < h.length; g += 2) { m = h[g]; var e = h[g + 1], f = r[g], b = r[g + 1]; "M" !== m[0] && "L" !== m[0] || "M" !== e[0] && "L" !== e[0] || "M" !== f[0] && "L" !== f[0] || "M" !== b[0] && "L" !== b[0] || (p && f[1] === m[1] ? (f[1] += k, b[1] += k) : p || f[2] !== m[2] || (f[2] += k, b[2] += k), v.push(["M", m[1], m[2]], ["L", e[1], e[2]], ["L", b[1], b[2]], ["L", f[1], f[2]], ["Z"])); v.isFlat = c }
            } return v
            }, addPlotBand: function (g) { return this.addPlotBandOrLine(g, "plotBands") }, addPlotLine: function (g) { return this.addPlotBandOrLine(g, "plotLines") }, addPlotBandOrLine: function (g, m) {
                var r =
                    new h.PlotLineOrBand(this, g), u = this.userOptions; this.visible && (r = r.render()); if (r) { if (m) { var n = u[m] || []; n.push(g); u[m] = n } this.plotLinesAndBands.push(r); this._addedPlotLB = !0 } return r
            }, removePlotBandOrLine: function (g) { for (var m = this.plotLinesAndBands, h = this.options, r = this.userOptions, n = m.length; n--;)m[n].id === g && m[n].destroy();[h.plotLines || [], r.plotLines || [], h.plotBands || [], r.plotBands || []].forEach(function (p) { for (n = p.length; n--;)(p[n] || {}).id === g && G(p, p[n]) }) }, removePlotBand: function (g) { this.removePlotBandOrLine(g) },
            removePlotLine: function (g) { this.removePlotBandOrLine(g) }
        }); h.PlotLineOrBand = q; return h.PlotLineOrBand
    }); O(q, "Core/Tooltip.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = n.doc, z = h.clamp, y = h.css, F = h.defined, M = h.discardElement, G = h.extend, B = h.fireEvent, r = h.format, m = h.isNumber, g = h.isString, D = h.merge, H = h.pick, v = h.splat, u = h.syncTimeout, A = h.timeUnits; ""; var p = function () {
            function k(c, e) {
            this.container = void 0; this.crosshairs = []; this.distance = 0; this.isHidden = !0; this.isSticky = !1; this.now =
                {}; this.options = {}; this.outside = !1; this.chart = c; this.init(c, e)
            } k.prototype.applyFilter = function () {
                var c = this.chart; c.renderer.definition({ tagName: "filter", id: "drop-shadow-" + c.index, opacity: .5, children: [{ tagName: "feGaussianBlur", "in": "SourceAlpha", stdDeviation: 1 }, { tagName: "feOffset", dx: 1, dy: 1 }, { tagName: "feComponentTransfer", children: [{ tagName: "feFuncA", type: "linear", slope: .3 }] }, { tagName: "feMerge", children: [{ tagName: "feMergeNode" }, { tagName: "feMergeNode", "in": "SourceGraphic" }] }] }); c.renderer.definition({
                    tagName: "style",
                    textContent: ".highcharts-tooltip-" + c.index + "{filter:url(#drop-shadow-" + c.index + ")}"
                })
            }; k.prototype.bodyFormatter = function (c) { return c.map(function (c) { var f = c.series.tooltipOptions; return (f[(c.point.formatPrefix || "point") + "Formatter"] || c.point.tooltipFormatter).call(c.point, f[(c.point.formatPrefix || "point") + "Format"] || "") }) }; k.prototype.cleanSplit = function (c) { this.chart.series.forEach(function (e) { var f = e && e.tt; f && (!f.isActive || c ? e.tt = f.destroy() : f.isActive = !1) }) }; k.prototype.defaultFormatter = function (c) {
                var e =
                    this.points || v(this); var f = [c.tooltipFooterHeaderFormatter(e[0])]; f = f.concat(c.bodyFormatter(e)); f.push(c.tooltipFooterHeaderFormatter(e[0], !0)); return f
            }; k.prototype.destroy = function () { this.label && (this.label = this.label.destroy()); this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy()); this.renderer && (this.renderer = this.renderer.destroy(), M(this.container)); h.clearTimeout(this.hideTimer); h.clearTimeout(this.tooltipTimeout) }; k.prototype.getAnchor = function (c, e) {
                var f = this.chart,
                b = f.pointer, l = f.inverted, a = f.plotTop, k = f.plotLeft, g = 0, p = 0, m, h; c = v(c); this.followPointer && e ? ("undefined" === typeof e.chartX && (e = b.normalize(e)), c = [e.chartX - k, e.chartY - a]) : c[0].tooltipPos ? c = c[0].tooltipPos : (c.forEach(function (b) { m = b.series.yAxis; h = b.series.xAxis; g += b.plotX + (!l && h ? h.left - k : 0); p += (b.plotLow ? (b.plotLow + b.plotHigh) / 2 : b.plotY) + (!l && m ? m.top - a : 0) }), g /= c.length, p /= c.length, c = [l ? f.plotWidth - p : g, this.shared && !l && 1 < c.length && e ? e.chartY - a : l ? f.plotHeight - g : p]); return c.map(Math.round)
            }; k.prototype.getDateFormat =
                function (c, e, f, b) { var l = this.chart.time, a = l.dateFormat("%m-%d %H:%M:%S.%L", e), k = { millisecond: 15, second: 12, minute: 9, hour: 6, day: 3 }, g = "millisecond"; for (p in A) { if (c === A.week && +l.dateFormat("%w", e) === f && "00:00:00.000" === a.substr(6)) { var p = "week"; break } if (A[p] > c) { p = g; break } if (k[p] && a.substr(k[p]) !== "01-01 00:00:00.000".substr(k[p])) break; "week" !== p && (g = p) } if (p) var m = l.resolveDTLFormat(b[p]).main; return m }; k.prototype.getLabel = function () {
                    var c, e, f = this, b = this.chart.renderer, l = this.chart.styledMode, a = this.options,
                    k = "tooltip" + (F(a.className) ? " " + a.className : ""), p = (null === (c = a.style) || void 0 === c ? void 0 : c.pointerEvents) || (!this.followPointer && a.stickOnContact ? "auto" : "none"), g; c = function () { f.inContact = !0 }; var m = function () { var a = f.chart.hoverSeries; f.inContact = !1; if (a && a.onMouseOut) a.onMouseOut() }; if (!this.label) {
                    this.outside && (this.container = g = n.doc.createElement("div"), g.className = "highcharts-tooltip-container", y(g, { position: "absolute", top: "1px", pointerEvents: p, zIndex: 3 }), n.doc.body.appendChild(g), this.renderer =
                        b = new n.Renderer(g, 0, 0, null === (e = this.chart.options.chart) || void 0 === e ? void 0 : e.style, void 0, void 0, b.styledMode)); this.split ? this.label = b.g(k) : (this.label = b.label("", 0, 0, a.shape || "callout", null, null, a.useHTML, null, k).attr({ padding: a.padding, r: a.borderRadius }), l || this.label.attr({ fill: a.backgroundColor, "stroke-width": a.borderWidth }).css(a.style).css({ pointerEvents: p }).shadow(a.shadow)); l && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index)); if (f.outside && !f.split) {
                            var h =
                                this.label, r = h.xSetter, u = h.ySetter; h.xSetter = function (a) { r.call(h, f.distance); g.style.left = a + "px" }; h.ySetter = function (a) { u.call(h, f.distance); g.style.top = a + "px" }
                        } this.label.on("mouseenter", c).on("mouseleave", m).attr({ zIndex: 8 }).add()
                    } return this.label
                }; k.prototype.getPosition = function (c, e, f) {
                    var b = this.chart, l = this.distance, a = {}, k = b.inverted && f.h || 0, g, p = this.outside, m = p ? q.documentElement.clientWidth - 2 * l : b.chartWidth, h = p ? Math.max(q.body.scrollHeight, q.documentElement.scrollHeight, q.body.offsetHeight,
                        q.documentElement.offsetHeight, q.documentElement.clientHeight) : b.chartHeight, r = b.pointer.getChartPosition(), u = b.containerScaling, v = function (a) { return u ? a * u.scaleX : a }, w = function (a) { return u ? a * u.scaleY : a }, d = function (a) { var d = "x" === a; return [a, d ? m : h, d ? c : e].concat(p ? [d ? v(c) : w(e), d ? r.left - l + v(f.plotX + b.plotLeft) : r.top - l + w(f.plotY + b.plotTop), 0, d ? m : h] : [d ? c : e, d ? f.plotX + b.plotLeft : f.plotY + b.plotTop, d ? b.plotLeft : b.plotTop, d ? b.plotLeft + b.plotWidth : b.plotTop + b.plotHeight]) }, t = d("y"), J = d("x"), n = !this.followPointer &&
                            H(f.ttBelow, !b.inverted === !!f.negative), A = function (d, b, c, f, t, e, g) { var p = "y" === d ? w(l) : v(l), x = (c - f) / 2, m = f < t - l, E = t + l + f < b, h = t - p - c + x; t = t + p - x; if (n && E) a[d] = t; else if (!n && m) a[d] = h; else if (m) a[d] = Math.min(g - f, 0 > h - k ? h : h - k); else if (E) a[d] = Math.max(e, t + k + c > b ? t : t + k); else return !1 }, D = function (d, b, c, f, t) { var e; t < l || t > b - l ? e = !1 : a[d] = t < c / 2 ? 1 : t > b - f / 2 ? b - f - 2 : t - c / 2; return e }, B = function (a) { var d = t; t = J; J = d; g = a }, y = function () { !1 !== A.apply(0, t) ? !1 !== D.apply(0, J) || g || (B(!0), y()) : g ? a.x = a.y = 0 : (B(!0), y()) }; (b.inverted || 1 < this.len) &&
                                B(); y(); return a
                }; k.prototype.getXDateFormat = function (c, e, f) { e = e.dateTimeLabelFormats; var b = f && f.closestPointRange; return (b ? this.getDateFormat(b, c.x, f.options.startOfWeek, e) : e.day) || e.year }; k.prototype.hide = function (c) { var e = this; h.clearTimeout(this.hideTimer); c = H(c, this.options.hideDelay, 500); this.isHidden || (this.hideTimer = u(function () { e.getLabel().fadeOut(c ? void 0 : c); e.isHidden = !0 }, c)) }; k.prototype.init = function (c, e) {
                this.chart = c; this.options = e; this.crosshairs = []; this.now = { x: 0, y: 0 }; this.isHidden =
                    !0; this.split = e.split && !c.inverted && !c.polar; this.shared = e.shared || this.split; this.outside = H(e.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY))
                }; k.prototype.isStickyOnContact = function () { return !(this.followPointer || !this.options.stickOnContact || !this.inContact) }; k.prototype.move = function (c, e, f, b) {
                    var l = this, a = l.now, k = !1 !== l.options.animation && !l.isHidden && (1 < Math.abs(c - a.x) || 1 < Math.abs(e - a.y)), g = l.followPointer || 1 < l.len; G(a, {
                        x: k ? (2 * a.x + c) / 3 : c, y: k ? (a.y + e) / 2 : e, anchorX: g ? void 0 : k ? (2 * a.anchorX + f) /
                            3 : f, anchorY: g ? void 0 : k ? (a.anchorY + b) / 2 : b
                    }); l.getLabel().attr(a); l.drawTracker(); k && (h.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () { l && l.move(c, e, f, b) }, 32))
                }; k.prototype.refresh = function (c, e) {
                    var f = this.chart, b = this.options, l = c, a = {}, k = [], g = b.formatter || this.defaultFormatter; a = this.shared; var p = f.styledMode; if (b.enabled) {
                        h.clearTimeout(this.hideTimer); this.followPointer = v(l)[0].series.tooltipOptions.followPointer; var m = this.getAnchor(l, e); e = m[0]; var r = m[1]; !a || l.series &&
                            l.series.noSharedTooltip ? a = l.getLabelConfig() : (f.pointer.applyInactiveState(l), l.forEach(function (a) { a.setState("hover"); k.push(a.getLabelConfig()) }), a = { x: l[0].category, y: l[0].y }, a.points = k, l = l[0]); this.len = k.length; f = g.call(a, this); g = l.series; this.distance = H(g.tooltipOptions.distance, 16); !1 === f ? this.hide() : (this.split ? this.renderSplit(f, v(c)) : (c = this.getLabel(), b.style.width && !p || c.css({ width: this.chart.spacingBox.width + "px" }), c.attr({ text: f && f.join ? f.join("") : f }), c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" +
                                H(l.colorIndex, g.colorIndex)), p || c.attr({ stroke: b.borderColor || l.color || g.color || "#666666" }), this.updatePosition({ plotX: e, plotY: r, negative: l.negative, ttBelow: l.ttBelow, h: m[2] || 0 })), this.isHidden && this.label && this.label.attr({ opacity: 1 }).show(), this.isHidden = !1); B(this, "refresh")
                    }
                }; k.prototype.renderSplit = function (c, e) {
                    function f(a, d, b, c, f) { void 0 === f && (f = !0); b ? (d = B ? 0 : L, a = z(a - c / 2, A.left, A.right - c)) : (d -= y, a = f ? a - c - t : a + t, a = z(a, f ? a : A.left, A.right)); return { x: a, y: d } } var b = this, l = b.chart, a = b.chart, k = a.plotHeight,
                        p = a.plotLeft, m = a.plotTop, h = a.pointer, r = a.renderer, u = a.scrollablePixelsY, v = void 0 === u ? 0 : u; u = a.scrollingContainer; u = void 0 === u ? { scrollLeft: 0, scrollTop: 0 } : u; var I = u.scrollLeft, w = u.scrollTop, d = a.styledMode, t = b.distance, J = b.options, q = b.options.positioner, A = { left: I, right: I + a.chartWidth, top: w, bottom: w + a.chartHeight }, D = b.getLabel(), B = !(!l.xAxis[0] || !l.xAxis[0].opposite), y = m + w, F = 0, L = k - v; g(c) && (c = [!1, c]); c = c.slice(0, e.length + 1).reduce(function (a, c, l) {
                            if (!1 !== c && "" !== c) {
                                l = e[l - 1] || {
                                    isHeader: !0, plotX: e[0].plotX,
                                    plotY: k, series: {}
                                }; var g = l.isHeader, x = g ? b : l.series, h = x.tt, E = l.isHeader; var C = l.series; var u = "highcharts-color-" + H(l.colorIndex, C.colorIndex, "none"); h || (h = { padding: J.padding, r: J.borderRadius }, d || (h.fill = J.backgroundColor, h["stroke-width"] = J.borderWidth), h = r.label("", 0, 0, J[E ? "headerShape" : "shape"] || "callout", void 0, void 0, J.useHTML).addClass((E ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + u).attr(h).add(D)); h.isActive = !0; h.attr({ text: c }); d || h.css(J.style).shadow(J.shadow).attr({
                                    stroke: J.borderColor ||
                                        l.color || C.color || "#333333"
                                }); c = x.tt = h; E = c.getBBox(); x = E.width + c.strokeWidth(); g && (F = E.height, L += F, B && (y -= F)); C = l.plotX; C = void 0 === C ? 0 : C; u = l.plotY; u = void 0 === u ? 0 : u; var n = l.series; if (l.isHeader) { C = p + C; var N = m + k / 2 } else h = n.xAxis, n = n.yAxis, C = h.pos + z(C, -t, h.len + t), n.pos + u >= w + m && n.pos + u <= w + m + k - v && (N = n.pos + u); C = z(C, A.left - t, A.right + t); "number" === typeof N ? (E = E.height + 1, u = q ? q.call(b, x, E, l) : f(C, N, g, x), a.push({
                                    align: q ? 0 : void 0, anchorX: C, anchorY: N, boxWidth: x, point: l, rank: H(u.rank, g ? 1 : 0), size: E, target: u.y, tt: c,
                                    x: u.x
                                })) : c.isActive = !1
                            } return a
                        }, []); !q && c.some(function (a) { return a.x < A.left }) && (c = c.map(function (a) { var d = f(a.anchorX, a.anchorY, a.point.isHeader, a.boxWidth, !1); return G(a, { target: d.y, x: d.x }) })); b.cleanSplit(); n.distribute(c, L); c.forEach(function (a) { var d = a.pos; a.tt.attr({ visibility: "undefined" === typeof d ? "hidden" : "inherit", x: a.x, y: d + y, anchorX: a.anchorX, anchorY: a.anchorY }) }); c = b.container; l = b.renderer; b.outside && c && l && (a = D.getBBox(), l.setSize(a.width + a.x, a.height + a.y, !1), h = h.getChartPosition(), c.style.left =
                            h.left + "px", c.style.top = h.top + "px")
                }; k.prototype.drawTracker = function () {
                    if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy(); else {
                        var c = this.chart, e = this.label, f = c.hoverPoint; if (e && f) {
                            var b = { x: 0, y: 0, width: 0, height: 0 }; f = this.getAnchor(f); var l = e.getBBox(); f[0] += c.plotLeft - e.translateX; f[1] += c.plotTop - e.translateY; b.x = Math.min(0, f[0]); b.y = Math.min(0, f[1]); b.width = 0 > f[0] ? Math.max(Math.abs(f[0]), l.width - f[0]) : Math.max(Math.abs(f[0]), l.width); b.height = 0 > f[1] ? Math.max(Math.abs(f[1]),
                                l.height - Math.abs(f[1])) : Math.max(Math.abs(f[1]), l.height); this.tracker ? this.tracker.attr(b) : (this.tracker = e.renderer.rect(b).addClass("highcharts-tracker").add(e), c.styledMode || this.tracker.attr({ fill: "rgba(0,0,0,0)" }))
                        }
                    }
                }; k.prototype.styledModeFormat = function (c) { return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"') }; k.prototype.tooltipFooterHeaderFormatter = function (c, e) {
                    var f = e ? "footer" :
                        "header", b = c.series, l = b.tooltipOptions, a = l.xDateFormat, k = b.xAxis, g = k && "datetime" === k.options.type && m(c.key), p = l[f + "Format"]; e = { isFooter: e, labelConfig: c }; B(this, "headerFormatter", e, function (f) { g && !a && (a = this.getXDateFormat(c, l, k)); g && a && (c.point && c.point.tooltipDateKeys || ["key"]).forEach(function (b) { p = p.replace("{point." + b + "}", "{point." + b + ":" + a + "}") }); b.chart.styledMode && (p = this.styledModeFormat(p)); f.text = r(p, { point: c, series: b }, this.chart) }); return e.text
                }; k.prototype.update = function (c) {
                    this.destroy();
                    D(!0, this.chart.options.tooltip.userOptions, c); this.init(this.chart, D(!0, this.options, c))
                }; k.prototype.updatePosition = function (c) {
                    var e = this.chart, f = e.pointer, b = this.getLabel(), l = c.plotX + e.plotLeft, a = c.plotY + e.plotTop; f = f.getChartPosition(); c = (this.options.positioner || this.getPosition).call(this, b.width, b.height, c); if (this.outside) {
                        var k = (this.options.borderWidth || 0) + 2 * this.distance; this.renderer.setSize(b.width + k, b.height + k, !1); if (e = e.containerScaling) y(this.container, {
                            transform: "scale(" + e.scaleX +
                                ", " + e.scaleY + ")"
                        }), l *= e.scaleX, a *= e.scaleY; l += f.left - c.x; a += f.top - c.y
                    } this.move(Math.round(c.x), Math.round(c.y || 0), l, a)
                }; return k
        }(); n.Tooltip = p; return n.Tooltip
    }); O(q, "Core/Pointer.js", [q["Core/Color/Color.js"], q["Core/Globals.js"], q["Core/Tooltip.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
        var y = n.parse, F = h.charts, L = h.noop, G = z.addEvent, B = z.attr, r = z.css, m = z.defined, g = z.extend, D = z.find, H = z.fireEvent, v = z.isNumber, u = z.isObject, A = z.objectEach, p = z.offset, k = z.pick, c = z.splat; ""; n = function () {
            function e(c,
                b) { this.lastValidTouch = {}; this.pinchDown = []; this.runChartClick = !1; this.chart = c; this.hasDragged = !1; this.options = b; this.unbindContainerMouseLeave = function () { }; this.unbindContainerMouseEnter = function () { }; this.init(c, b) } e.prototype.applyInactiveState = function (c) {
                    var b = [], f; (c || []).forEach(function (a) { f = a.series; b.push(f); f.linkedParent && b.push(f.linkedParent); f.linkedSeries && (b = b.concat(f.linkedSeries)); f.navigatorSeries && b.push(f.navigatorSeries) }); this.chart.series.forEach(function (a) {
                    -1 === b.indexOf(a) ?
                        a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive")
                    })
                }; e.prototype.destroy = function () { var c = this; "undefined" !== typeof c.unDocMouseMove && c.unDocMouseMove(); this.unbindContainerMouseLeave(); h.chartCount || (h.unbindDocumentMouseUp && (h.unbindDocumentMouseUp = h.unbindDocumentMouseUp()), h.unbindDocumentTouchEnd && (h.unbindDocumentTouchEnd = h.unbindDocumentTouchEnd())); clearInterval(c.tooltipTimeout); A(c, function (b, f) { c[f] = void 0 }) }; e.prototype.drag = function (c) {
                    var b = this.chart,
                    f = b.options.chart, a = c.chartX, e = c.chartY, k = this.zoomHor, g = this.zoomVert, p = b.plotLeft, m = b.plotTop, h = b.plotWidth, r = b.plotHeight, v = this.selectionMarker, w = this.mouseDownX || 0, d = this.mouseDownY || 0, t = u(f.panning) ? f.panning && f.panning.enabled : f.panning, J = f.panKey && c[f.panKey + "Key"]; if (!v || !v.touch) if (a < p ? a = p : a > p + h && (a = p + h), e < m ? e = m : e > m + r && (e = m + r), this.hasDragged = Math.sqrt(Math.pow(w - a, 2) + Math.pow(d - e, 2)), 10 < this.hasDragged) {
                        var n = b.isInsidePlot(w - p, d - m); b.hasCartesianSeries && (this.zoomX || this.zoomY) && n && !J &&
                            !v && (this.selectionMarker = v = b.renderer.rect(p, m, k ? 1 : h, g ? 1 : r, 0).attr({ "class": "highcharts-selection-marker", zIndex: 7 }).add(), b.styledMode || v.attr({ fill: f.selectionMarkerFill || y("#335cad").setOpacity(.25).get() })); v && k && (a -= w, v.attr({ width: Math.abs(a), x: (0 < a ? 0 : a) + w })); v && g && (a = e - d, v.attr({ height: Math.abs(a), y: (0 < a ? 0 : a) + d })); n && !v && t && b.pan(c, f.panning)
                    }
                }; e.prototype.dragStart = function (c) {
                    var b = this.chart; b.mouseIsDown = c.type; b.cancelClick = !1; b.mouseDownX = this.mouseDownX = c.chartX; b.mouseDownY = this.mouseDownY =
                        c.chartY
                }; e.prototype.drop = function (c) {
                    var b = this, f = this.chart, a = this.hasPinched; if (this.selectionMarker) {
                        var e = { originalEvent: c, xAxis: [], yAxis: [] }, k = this.selectionMarker, p = k.attr ? k.attr("x") : k.x, h = k.attr ? k.attr("y") : k.y, u = k.attr ? k.attr("width") : k.width, n = k.attr ? k.attr("height") : k.height, N; if (this.hasDragged || a) f.axes.forEach(function (f) {
                            if (f.zoomEnabled && m(f.min) && (a || b[{ xAxis: "zoomX", yAxis: "zoomY" }[f.coll]]) && v(p) && v(h)) {
                                var l = f.horiz, d = "touchend" === c.type ? f.minPixelPadding : 0, t = f.toValue((l ? p : h) +
                                    d); l = f.toValue((l ? p + u : h + n) - d); e[f.coll].push({ axis: f, min: Math.min(t, l), max: Math.max(t, l) }); N = !0
                            }
                        }), N && H(f, "selection", e, function (b) { f.zoom(g(b, a ? { animation: !1 } : null)) }); v(f.index) && (this.selectionMarker = this.selectionMarker.destroy()); a && this.scaleGroups()
                    } f && v(f.index) && (r(f.container, { cursor: f._cursor }), f.cancelClick = 10 < this.hasDragged, f.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = [])
                }; e.prototype.findNearestKDPoint = function (c, b, l) {
                    var a = this.chart, f = a.hoverPoint; a = a.tooltip; if (f &&
                        a && a.isStickyOnContact()) return f; var e; c.forEach(function (a) { var c = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y"); a = a.searchPoint(l, c); if ((c = u(a, !0)) && !(c = !u(e, !0))) { c = e.distX - a.distX; var f = e.dist - a.dist, k = (a.series.group && a.series.group.zIndex) - (e.series.group && e.series.group.zIndex); c = 0 < (0 !== c && b ? c : 0 !== f ? f : 0 !== k ? k : e.series.index > a.series.index ? -1 : 1) } c && (e = a) }); return e
                }; e.prototype.getChartCoordinatesFromPoint = function (c, b) {
                    var f = c.series, a = f.xAxis; f = f.yAxis; var e = k(c.clientX,
                        c.plotX), g = c.shapeArgs; if (a && f) return b ? { chartX: a.len + a.pos - e, chartY: f.len + f.pos - c.plotY } : { chartX: e + a.pos, chartY: c.plotY + f.pos }; if (g && g.x && g.y) return { chartX: g.x, chartY: g.y }
                }; e.prototype.getChartPosition = function () { return this.chartPosition || (this.chartPosition = p(this.chart.container)) }; e.prototype.getCoordinates = function (c) { var b = { xAxis: [], yAxis: [] }; this.chart.axes.forEach(function (f) { b[f.isXAxis ? "xAxis" : "yAxis"].push({ axis: f, value: f.toValue(c[f.horiz ? "chartX" : "chartY"]) }) }); return b }; e.prototype.getHoverData =
                    function (c, b, l, a, e, g) {
                        var f, p = []; a = !(!a || !c); var x = b && !b.stickyTracking, m = { chartX: g ? g.chartX : void 0, chartY: g ? g.chartY : void 0, shared: e }; H(this, "beforeGetHoverData", m); x = x ? [b] : l.filter(function (a) { return m.filter ? m.filter(a) : a.visible && !(!e && a.directTouch) && k(a.options.enableMouseTracking, !0) && a.stickyTracking }); b = (f = a || !g ? c : this.findNearestKDPoint(x, e, g)) && f.series; f && (e && !b.noSharedTooltip ? (x = l.filter(function (a) {
                            return m.filter ? m.filter(a) : a.visible && !(!e && a.directTouch) && k(a.options.enableMouseTracking,
                                !0) && !a.noSharedTooltip
                        }), x.forEach(function (a) { var b = D(a.points, function (a) { return a.x === f.x && !a.isNull }); u(b) && (a.chart.isBoosting && (b = a.getPoint(b)), p.push(b)) })) : p.push(f)); m = { hoverPoint: f }; H(this, "afterGetHoverData", m); return { hoverPoint: m.hoverPoint, hoverSeries: b, hoverPoints: p }
                    }; e.prototype.getPointFromEvent = function (c) { c = c.target; for (var b; c && !b;)b = c.point, c = c.parentNode; return b }; e.prototype.onTrackerMouseOut = function (c) {
                        c = c.relatedTarget || c.toElement; var b = this.chart.hoverSeries; this.isDirectTouch =
                            !1; if (!(!b || !c || b.stickyTracking || this.inClass(c, "highcharts-tooltip") || this.inClass(c, "highcharts-series-" + b.index) && this.inClass(c, "highcharts-tracker"))) b.onMouseOut()
                    }; e.prototype.inClass = function (c, b) { for (var f; c;) { if (f = B(c, "class")) { if (-1 !== f.indexOf(b)) return !0; if (-1 !== f.indexOf("highcharts-container")) return !1 } c = c.parentNode } }; e.prototype.init = function (c, b) {
                    this.options = b; this.chart = c; this.runChartClick = b.chart.events && !!b.chart.events.click; this.pinchDown = []; this.lastValidTouch = {}; q && (c.tooltip =
                        new q(c, b.tooltip), this.followTouchMove = k(b.tooltip.followTouchMove, !0)); this.setDOMEvents()
                    }; e.prototype.normalize = function (c, b) { var f = c.touches, a = f ? f.length ? f.item(0) : k(f.changedTouches, c.changedTouches)[0] : c; b || (b = this.getChartPosition()); f = a.pageX - b.left; b = a.pageY - b.top; if (a = this.chart.containerScaling) f /= a.scaleX, b /= a.scaleY; return g(c, { chartX: Math.round(f), chartY: Math.round(b) }) }; e.prototype.onContainerClick = function (c) {
                        var b = this.chart, f = b.hoverPoint; c = this.normalize(c); var a = b.plotLeft, e =
                            b.plotTop; b.cancelClick || (f && this.inClass(c.target, "highcharts-tracker") ? (H(f.series, "click", g(c, { point: f })), b.hoverPoint && f.firePointEvent("click", c)) : (g(c, this.getCoordinates(c)), b.isInsidePlot(c.chartX - a, c.chartY - e) && H(b, "click", c)))
                    }; e.prototype.onContainerMouseDown = function (c) { var b = 1 === ((c.buttons || c.button) & 1); c = this.normalize(c); if (h.isFirefox && 0 !== c.button) this.onContainerMouseMove(c); if ("undefined" === typeof c.button || b) this.zoomOption(c), b && c.preventDefault && c.preventDefault(), this.dragStart(c) };
            e.prototype.onContainerMouseLeave = function (c) { var b = F[k(h.hoverChartIndex, -1)], f = this.chart.tooltip; c = this.normalize(c); b && (c.relatedTarget || c.toElement) && (b.pointer.reset(), b.pointer.chartPosition = void 0); f && !f.isHidden && this.reset() }; e.prototype.onContainerMouseEnter = function (c) { delete this.chartPosition }; e.prototype.onContainerMouseMove = function (c) {
                var b = this.chart; c = this.normalize(c); this.setHoverChartIndex(); c.preventDefault || (c.returnValue = !1); "mousedown" === b.mouseIsDown && this.drag(c); b.openMenu ||
                    !this.inClass(c.target, "highcharts-tracker") && !b.isInsidePlot(c.chartX - b.plotLeft, c.chartY - b.plotTop) || this.runPointActions(c)
            }; e.prototype.onDocumentTouchEnd = function (c) { F[h.hoverChartIndex] && F[h.hoverChartIndex].pointer.drop(c) }; e.prototype.onContainerTouchMove = function (c) { this.touch(c) }; e.prototype.onContainerTouchStart = function (c) { this.zoomOption(c); this.touch(c, !0) }; e.prototype.onDocumentMouseMove = function (c) {
                var b = this.chart, f = this.chartPosition; c = this.normalize(c, f); var a = b.tooltip; !f || a &&
                    a.isStickyOnContact() || b.isInsidePlot(c.chartX - b.plotLeft, c.chartY - b.plotTop) || this.inClass(c.target, "highcharts-tracker") || this.reset()
            }; e.prototype.onDocumentMouseUp = function (c) { var b = F[k(h.hoverChartIndex, -1)]; b && b.pointer.drop(c) }; e.prototype.pinch = function (c) {
                var b = this, f = b.chart, a = b.pinchDown, e = c.touches || [], p = e.length, m = b.lastValidTouch, h = b.hasZoom, r = b.selectionMarker, u = {}, v = 1 === p && (b.inClass(c.target, "highcharts-tracker") && f.runTrackerClick || b.runChartClick), n = {}; 1 < p && (b.initiated = !0); h &&
                    b.initiated && !v && !1 !== c.cancelable && c.preventDefault();[].map.call(e, function (a) { return b.normalize(a) }); "touchstart" === c.type ? ([].forEach.call(e, function (b, d) { a[d] = { chartX: b.chartX, chartY: b.chartY } }), m.x = [a[0].chartX, a[1] && a[1].chartX], m.y = [a[0].chartY, a[1] && a[1].chartY], f.axes.forEach(function (a) {
                        if (a.zoomEnabled) {
                            var d = f.bounds[a.horiz ? "h" : "v"], b = a.minPixelPadding, c = a.toPixels(Math.min(k(a.options.min, a.dataMin), a.dataMin)), e = a.toPixels(Math.max(k(a.options.max, a.dataMax), a.dataMax)), l = Math.max(c,
                                e); d.min = Math.min(a.pos, Math.min(c, e) - b); d.max = Math.max(a.pos + a.len, l + b)
                        }
                    }), b.res = !0) : b.followTouchMove && 1 === p ? this.runPointActions(b.normalize(c)) : a.length && (r || (b.selectionMarker = r = g({ destroy: L, touch: !0 }, f.plotBox)), b.pinchTranslate(a, e, u, r, n, m), b.hasPinched = h, b.scaleGroups(u, n), b.res && (b.res = !1, this.reset(!1, 0)))
            }; e.prototype.pinchTranslate = function (c, b, e, a, k, g) { this.zoomHor && this.pinchTranslateDirection(!0, c, b, e, a, k, g); this.zoomVert && this.pinchTranslateDirection(!1, c, b, e, a, k, g) }; e.prototype.pinchTranslateDirection =
                function (c, b, e, a, k, g, p, m) {
                    var f = this.chart, l = c ? "x" : "y", x = c ? "X" : "Y", h = "chart" + x, r = c ? "width" : "height", d = f["plot" + (c ? "Left" : "Top")], t, E, u = m || 1, C = f.inverted, v = f.bounds[c ? "h" : "v"], n = 1 === b.length, q = b[0][h], K = e[0][h], A = !n && b[1][h], H = !n && e[1][h]; e = function () { "number" === typeof H && 20 < Math.abs(q - A) && (u = m || Math.abs(K - H) / Math.abs(q - A)); E = (d - K) / u + q; t = f["plot" + (c ? "Width" : "Height")] / u }; e(); b = E; if (b < v.min) { b = v.min; var D = !0 } else b + t > v.max && (b = v.max - t, D = !0); D ? (K -= .8 * (K - p[l][0]), "number" === typeof H && (H -= .8 * (H - p[l][1])),
                        e()) : p[l] = [K, H]; C || (g[l] = E - d, g[r] = t); g = C ? 1 / u : u; k[r] = t; k[l] = b; a[C ? c ? "scaleY" : "scaleX" : "scale" + x] = u; a["translate" + x] = g * d + (K - g * q)
                }; e.prototype.reset = function (f, b) {
                    var e = this.chart, a = e.hoverSeries, k = e.hoverPoint, g = e.hoverPoints, p = e.tooltip, m = p && p.shared ? g : k; f && m && c(m).forEach(function (a) { a.series.isCartesian && "undefined" === typeof a.plotX && (f = !1) }); if (f) p && m && c(m).length && (p.refresh(m), p.shared && g ? g.forEach(function (a) {
                        a.setState(a.state, !0); a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null,
                            a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a))
                    }) : k && (k.setState(k.state, !0), e.axes.forEach(function (a) { a.crosshair && k.series[a.coll] === a && a.drawCrosshair(null, k) }))); else { if (k) k.onMouseOut(); g && g.forEach(function (a) { a.setState() }); if (a) a.onMouseOut(); p && p.hide(b); this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove()); e.axes.forEach(function (a) { a.hideCrosshair() }); this.hoverX = e.hoverPoints = e.hoverPoint = null }
                }; e.prototype.runPointActions = function (c, b) {
                    var f = this.chart,
                    a = f.tooltip && f.tooltip.options.enabled ? f.tooltip : void 0, e = a ? a.shared : !1, g = b || f.hoverPoint, p = g && g.series || f.hoverSeries; p = this.getHoverData(g, p, f.series, (!c || "touchmove" !== c.type) && (!!b || p && p.directTouch && this.isDirectTouch), e, c); g = p.hoverPoint; var m = p.hoverPoints; b = (p = p.hoverSeries) && p.tooltipOptions.followPointer; e = e && p && !p.noSharedTooltip; if (g && (g !== f.hoverPoint || a && a.isHidden)) {
                        (f.hoverPoints || []).forEach(function (a) { -1 === m.indexOf(a) && a.setState() }); if (f.hoverSeries !== p) p.onMouseOver(); this.applyInactiveState(m);
                        (m || []).forEach(function (a) { a.setState("hover") }); f.hoverPoint && f.hoverPoint.firePointEvent("mouseOut"); if (!g.series) return; f.hoverPoints = m; f.hoverPoint = g; g.firePointEvent("mouseOver"); a && a.refresh(e ? m : g, c)
                    } else b && a && !a.isHidden && (g = a.getAnchor([{}], c), a.updatePosition({ plotX: g[0], plotY: g[1] })); this.unDocMouseMove || (this.unDocMouseMove = G(f.container.ownerDocument, "mousemove", function (a) { var b = F[h.hoverChartIndex]; if (b) b.pointer.onDocumentMouseMove(a) })); f.axes.forEach(function (a) {
                        var b = k((a.crosshair ||
                            {}).snap, !0), e; b && ((e = f.hoverPoint) && e.series[a.coll] === a || (e = D(m, function (b) { return b.series[a.coll] === a }))); e || !b ? a.drawCrosshair(c, e) : a.hideCrosshair()
                    })
                }; e.prototype.scaleGroups = function (c, b) { var f = this.chart, a; f.series.forEach(function (e) { a = c || e.getPlotBox(); e.xAxis && e.xAxis.zoomEnabled && e.group && (e.group.attr(a), e.markerGroup && (e.markerGroup.attr(a), e.markerGroup.clip(b ? f.clipRect : null)), e.dataLabelsGroup && e.dataLabelsGroup.attr(a)) }); f.clipRect.attr(b || f.clipBox) }; e.prototype.setDOMEvents =
                    function () {
                        var c = this.chart.container, b = c.ownerDocument; c.onmousedown = this.onContainerMouseDown.bind(this); c.onmousemove = this.onContainerMouseMove.bind(this); c.onclick = this.onContainerClick.bind(this); this.unbindContainerMouseEnter = G(c, "mouseenter", this.onContainerMouseEnter.bind(this)); this.unbindContainerMouseLeave = G(c, "mouseleave", this.onContainerMouseLeave.bind(this)); h.unbindDocumentMouseUp || (h.unbindDocumentMouseUp = G(b, "mouseup", this.onDocumentMouseUp.bind(this))); h.hasTouch && (G(c, "touchstart",
                            this.onContainerTouchStart.bind(this)), G(c, "touchmove", this.onContainerTouchMove.bind(this)), h.unbindDocumentTouchEnd || (h.unbindDocumentTouchEnd = G(b, "touchend", this.onDocumentTouchEnd.bind(this))))
                    }; e.prototype.setHoverChartIndex = function () { var c = this.chart, b = h.charts[k(h.hoverChartIndex, -1)]; if (b && b !== c) b.pointer.onContainerMouseLeave({ relatedTarget: !0 }); b && b.mouseIsDown || (h.hoverChartIndex = c.index) }; e.prototype.touch = function (c, b) {
                        var e = this.chart, a; this.setHoverChartIndex(); if (1 === c.touches.length) if (c =
                            this.normalize(c), (a = e.isInsidePlot(c.chartX - e.plotLeft, c.chartY - e.plotTop)) && !e.openMenu) { b && this.runPointActions(c); if ("touchmove" === c.type) { b = this.pinchDown; var f = b[0] ? 4 <= Math.sqrt(Math.pow(b[0].chartX - c.chartX, 2) + Math.pow(b[0].chartY - c.chartY, 2)) : !1 } k(f, !0) && this.pinch(c) } else b && this.reset(); else 2 === c.touches.length && this.pinch(c)
                    }; e.prototype.zoomOption = function (c) {
                        var b = this.chart, e = b.options.chart, a = e.zoomType || ""; b = b.inverted; /touch/.test(c.type) && (a = k(e.pinchType, a)); this.zoomX = c = /x/.test(a);
                        this.zoomY = a = /y/.test(a); this.zoomHor = c && !b || a && b; this.zoomVert = a && !b || c && b; this.hasZoom = c || a
                    }; return e
        }(); return h.Pointer = n
    }); O(q, "Core/MSPointer.js", [q["Core/Globals.js"], q["Core/Pointer.js"], q["Core/Utilities.js"]], function (n, h, q) {
        function z() { var m = []; m.item = function (g) { return this[g] }; g(H, function (g) { m.push({ pageX: g.pageX, pageY: g.pageY, target: g.target }) }); return m } function y(g, m, p, k) {
        "touch" !== g.pointerType && g.pointerType !== g.MSPOINTER_TYPE_TOUCH || !L[n.hoverChartIndex] || (k(g), k = L[n.hoverChartIndex].pointer,
            k[m]({ type: p, target: g.currentTarget, preventDefault: B, touches: z() }))
        } var F = this && this.__extends || function () { var g = function (m, p) { g = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (k, c) { k.__proto__ = c } || function (k, c) { for (var e in c) c.hasOwnProperty(e) && (k[e] = c[e]) }; return g(m, p) }; return function (m, p) { function k() { this.constructor = m } g(m, p); m.prototype = null === p ? Object.create(p) : (k.prototype = p.prototype, new k) } }(), L = n.charts, G = n.doc, B = n.noop, r = q.addEvent, m = q.css, g = q.objectEach, D = q.removeEvent,
            H = {}, v = !!n.win.PointerEvent; return function (g) {
                function h() { return null !== g && g.apply(this, arguments) || this } F(h, g); h.prototype.batchMSEvents = function (g) { g(this.chart.container, v ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown); g(this.chart.container, v ? "pointermove" : "MSPointerMove", this.onContainerPointerMove); g(G, v ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp) }; h.prototype.destroy = function () { this.batchMSEvents(D); g.prototype.destroy.call(this) }; h.prototype.init = function (p, k) {
                    g.prototype.init.call(this,
                        p, k); this.hasZoom && m(p.container, { "-ms-touch-action": "none", "touch-action": "none" })
                }; h.prototype.onContainerPointerDown = function (g) { y(g, "onContainerTouchStart", "touchstart", function (k) { H[k.pointerId] = { pageX: k.pageX, pageY: k.pageY, target: k.currentTarget } }) }; h.prototype.onContainerPointerMove = function (g) { y(g, "onContainerTouchMove", "touchmove", function (k) { H[k.pointerId] = { pageX: k.pageX, pageY: k.pageY }; H[k.pointerId].target || (H[k.pointerId].target = k.currentTarget) }) }; h.prototype.onDocumentPointerUp = function (g) {
                    y(g,
                        "onDocumentTouchEnd", "touchend", function (k) { delete H[k.pointerId] })
                }; h.prototype.setDOMEvents = function () { g.prototype.setDOMEvents.call(this); (this.hasZoom || this.followTouchMove) && this.batchMSEvents(r) }; return h
            }(h)
    }); O(q, "Core/Legend.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q) {
        var z = n.animObject, y = n.setAnimation, F = q.addEvent, L = q.css, G = q.defined, B = q.discardElement, r = q.find, m = q.fireEvent, g = q.format, D = q.isNumber, H = q.merge, v = q.pick, u = q.relativeLength,
        A = q.stableSort, p = q.syncTimeout; n = q.wrap; q = h.isFirefox; var k = h.marginNames, c = h.win, e = function () {
            function c(b, c) {
            this.allItems = []; this.contentGroup = this.box = void 0; this.display = !1; this.group = void 0; this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0; this.options = {}; this.padding = 0; this.pages = []; this.proximate = !1; this.scrollGroup = void 0;
                this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0; this.chart = b; this.init(b, c)
            } c.prototype.init = function (b, c) { this.chart = b; this.setOptions(c); c.enabled && (this.render(), F(this.chart, "endResize", function () { this.legend.positionCheckboxes() }), this.proximate ? this.unchartrender = F(this.chart, "render", function () { this.legend.proximatePositions(); this.legend.positionItems() }) : this.unchartrender && this.unchartrender()) }; c.prototype.setOptions = function (b) {
                var c = v(b.padding,
                    8); this.options = b; this.chart.styledMode || (this.itemStyle = b.itemStyle, this.itemHiddenStyle = H(this.itemStyle, b.itemHiddenStyle)); this.itemMarginTop = b.itemMarginTop || 0; this.itemMarginBottom = b.itemMarginBottom || 0; this.padding = c; this.initialItemY = c - 5; this.symbolWidth = v(b.symbolWidth, 16); this.pages = []; this.proximate = "proximate" === b.layout && !this.chart.inverted; this.baseline = void 0
            }; c.prototype.update = function (b, c) {
                var a = this.chart; this.setOptions(H(!0, this.options, b)); this.destroy(); a.isDirtyLegend = a.isDirtyBox =
                    !0; v(c, !0) && a.redraw(); m(this, "afterUpdate")
            }; c.prototype.colorizeItem = function (b, c) {
            b.legendGroup[c ? "removeClass" : "addClass"]("highcharts-legend-item-hidden"); if (!this.chart.styledMode) { var a = this.options, e = b.legendItem, f = b.legendLine, l = b.legendSymbol, k = this.itemHiddenStyle.color; a = c ? a.itemStyle.color : k; var g = c ? b.color || k : k, p = b.options && b.options.marker, h = { fill: g }; e && e.css({ fill: a, color: a }); f && f.attr({ stroke: g }); l && (p && l.isMarker && (h = b.pointAttribs(), c || (h.stroke = h.fill = k)), l.attr(h)) } m(this, "afterColorizeItem",
                { item: b, visible: c })
            }; c.prototype.positionItems = function () { this.allItems.forEach(this.positionItem, this); this.chart.isResizing || this.positionCheckboxes() }; c.prototype.positionItem = function (b) { var c = this, a = this.options, e = a.symbolPadding, f = !a.rtl, k = b._legendItemPos; a = k[0]; k = k[1]; var g = b.checkbox, p = b.legendGroup; p && p.element && (e = { translateX: f ? a : this.legendWidth - a - 2 * e - 4, translateY: k }, f = function () { m(c, "afterPositionItem", { item: b }) }, G(p.translateY) ? p.animate(e, void 0, f) : (p.attr(e), f())); g && (g.x = a, g.y = k) };
            c.prototype.destroyItem = function (b) { var c = b.checkbox;["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (a) { b[a] && (b[a] = b[a].destroy()) }); c && B(b.checkbox) }; c.prototype.destroy = function () { function b(b) { this[b] && (this[b] = this[b].destroy()) } this.getAllItems().forEach(function (c) { ["legendItem", "legendGroup"].forEach(b, c) }); "clipRect up down pager nav box title group".split(" ").forEach(b, this); this.display = null }; c.prototype.positionCheckboxes = function () {
                var b = this.group && this.group.alignAttr,
                c = this.clipHeight || this.legendHeight, a = this.titleHeight; if (b) { var e = b.translateY; this.allItems.forEach(function (f) { var l = f.checkbox; if (l) { var k = e + a + l.y + (this.scrollOffset || 0) + 3; L(l, { left: b.translateX + f.checkboxOffset + l.x - 20 + "px", top: k + "px", display: this.proximate || k > e - 6 && k < e + c - 6 ? "" : "none" }) } }, this) }
            }; c.prototype.renderTitle = function () {
                var b = this.options, c = this.padding, a = b.title, e = 0; a.text && (this.title || (this.title = this.chart.renderer.label(a.text, c - 3, c - 4, null, null, null, b.useHTML, null, "legend-title").attr({ zIndex: 1 }),
                    this.chart.styledMode || this.title.css(a.style), this.title.add(this.group)), a.width || this.title.css({ width: this.maxLegendWidth + "px" }), b = this.title.getBBox(), e = b.height, this.offsetWidth = b.width, this.contentGroup.attr({ translateY: e })); this.titleHeight = e
            }; c.prototype.setText = function (b) { var c = this.options; b.legendItem.attr({ text: c.labelFormat ? g(c.labelFormat, b, this.chart) : c.labelFormatter.call(b) }) }; c.prototype.renderItem = function (b) {
                var c = this.chart, a = c.renderer, e = this.options, f = this.symbolWidth, k = e.symbolPadding,
                g = this.itemStyle, p = this.itemHiddenStyle, m = "horizontal" === e.layout ? v(e.itemDistance, 20) : 0, h = !e.rtl, r = b.legendItem, u = !b.series, d = !u && b.series.drawLegendSymbol ? b.series : b, t = d.options; t = this.createCheckboxForItem && t && t.showCheckbox; m = f + k + m + (t ? 20 : 0); var J = e.useHTML, n = b.options.className; r || (b.legendGroup = a.g("legend-item").addClass("highcharts-" + d.type + "-series highcharts-color-" + b.colorIndex + (n ? " " + n : "") + (u ? " highcharts-series-" + b.index : "")).attr({ zIndex: 1 }).add(this.scrollGroup), b.legendItem = r = a.text("",
                    h ? f + k : -k, this.baseline || 0, J), c.styledMode || r.css(H(b.visible ? g : p)), r.attr({ align: h ? "left" : "right", zIndex: 2 }).add(b.legendGroup), this.baseline || (this.fontMetrics = a.fontMetrics(c.styledMode ? 12 : g.fontSize, r), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, r.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, d.drawLegendSymbol(this, b), this.setItemEvents && this.setItemEvents(b, r, J)); t && !b.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(b); this.colorizeItem(b,
                        b.visible); !c.styledMode && g.width || r.css({ width: (e.itemWidth || this.widthOption || c.spacingBox.width) - m + "px" }); this.setText(b); c = r.getBBox(); b.itemWidth = b.checkboxOffset = e.itemWidth || b.legendItemWidth || c.width + m; this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth); this.totalItemWidth += b.itemWidth; this.itemHeight = b.itemHeight = Math.round(b.legendItemHeight || c.height || this.symbolHeight)
            }; c.prototype.layoutItem = function (b) {
                var c = this.options, a = this.padding, e = "horizontal" === c.layout, f = b.itemHeight,
                k = this.itemMarginBottom, g = this.itemMarginTop, p = e ? v(c.itemDistance, 20) : 0, m = this.maxLegendWidth; c = c.alignColumns && this.totalItemWidth > m ? this.maxItemWidth : b.itemWidth; e && this.itemX - a + c > m && (this.itemX = a, this.lastLineHeight && (this.itemY += g + this.lastLineHeight + k), this.lastLineHeight = 0); this.lastItemY = g + this.itemY + k; this.lastLineHeight = Math.max(f, this.lastLineHeight); b._legendItemPos = [this.itemX, this.itemY]; e ? this.itemX += c : (this.itemY += g + f + k, this.lastLineHeight = f); this.offsetWidth = this.widthOption || Math.max((e ?
                    this.itemX - a - (b.checkbox ? 0 : p) : c) + a, this.offsetWidth)
            }; c.prototype.getAllItems = function () { var b = []; this.chart.series.forEach(function (c) { var a = c && c.options; c && v(a.showInLegend, G(a.linkedTo) ? !1 : void 0, !0) && (b = b.concat(c.legendItems || ("point" === a.legendType ? c.data : c))) }); m(this, "afterGetAllItems", { allItems: b }); return b }; c.prototype.getAlignment = function () { var b = this.options; return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0) }; c.prototype.adjustMargins =
                function (b, c) { var a = this.chart, e = this.options, f = this.getAlignment(); f && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (l, g) { l.test(f) && !G(b[g]) && (a[k[g]] = Math.max(a[k[g]], a.legend[(g + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][g] * e[g % 2 ? "x" : "y"] + v(e.margin, 12) + c[g] + (a.titleOffset[g] || 0))) }) }; c.prototype.proximatePositions = function () {
                    var b = this.chart, c = [], a = "left" === this.options.align; this.allItems.forEach(function (e) {
                        var f; var l = a; if (e.yAxis) {
                            e.xAxis.options.reversed &&
                            (l = !l); e.points && (f = r(l ? e.points : e.points.slice(0).reverse(), function (a) { return D(a.plotY) })); l = this.itemMarginTop + e.legendItem.getBBox().height + this.itemMarginBottom; var k = e.yAxis.top - b.plotTop; e.visible ? (f = f ? f.plotY : e.yAxis.height, f += k - .3 * l) : f = k + e.yAxis.height; c.push({ target: f, size: l, item: e })
                        }
                    }, this); h.distribute(c, b.plotHeight); c.forEach(function (a) { a.item._legendItemPos[1] = b.plotTop - b.spacing[0] + a.pos })
                }; c.prototype.render = function () {
                    var b = this.chart, c = b.renderer, a = this.group, e = this.box, f = this.options,
                    k = this.padding; this.itemX = k; this.itemY = this.initialItemY; this.lastItemY = this.offsetWidth = 0; this.widthOption = u(f.width, b.spacingBox.width - k); var g = b.spacingBox.width - 2 * k - f.x; -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (g /= 2); this.maxLegendWidth = this.widthOption || g; a || (this.group = a = c.g("legend").attr({ zIndex: 7 }).add(), this.contentGroup = c.g().attr({ zIndex: 1 }).add(a), this.scrollGroup = c.g().add(this.contentGroup)); this.renderTitle(); var p = this.getAllItems(); A(p, function (a, b) {
                        return (a.options &&
                            a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
                    }); f.reversed && p.reverse(); this.allItems = p; this.display = g = !!p.length; this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0; p.forEach(this.renderItem, this); p.forEach(this.layoutItem, this); p = (this.widthOption || this.offsetWidth) + k; var h = this.lastItemY + this.lastLineHeight + this.titleHeight; h = this.handleOverflow(h); h += k; e || (this.box = e = c.rect().addClass("highcharts-legend-box").attr({ r: f.borderRadius }).add(a), e.isNew = !0);
                    b.styledMode || e.attr({ stroke: f.borderColor, "stroke-width": f.borderWidth || 0, fill: f.backgroundColor || "none" }).shadow(f.shadow); 0 < p && 0 < h && (e[e.isNew ? "attr" : "animate"](e.crisp.call({}, { x: 0, y: 0, width: p, height: h }, e.strokeWidth())), e.isNew = !1); e[g ? "show" : "hide"](); b.styledMode && "none" === a.getStyle("display") && (p = h = 0); this.legendWidth = p; this.legendHeight = h; g && this.align(); this.proximate || this.positionItems(); m(this, "afterRender")
                }; c.prototype.align = function (b) {
                void 0 === b && (b = this.chart.spacingBox); var c =
                    this.chart, a = this.options, e = b.y; /(lth|ct|rth)/.test(this.getAlignment()) && 0 < c.titleOffset[0] ? e += c.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < c.titleOffset[2] && (e -= c.titleOffset[2]); e !== b.y && (b = H(b, { y: e })); this.group.align(H(a, { width: this.legendWidth, height: this.legendHeight, verticalAlign: this.proximate ? "top" : a.verticalAlign }), !0, b)
                }; c.prototype.handleOverflow = function (b) {
                    var c = this, a = this.chart, e = a.renderer, f = this.options, k = f.y, g = this.padding; k = a.spacingBox.height + ("top" === f.verticalAlign ?
                        -k : k) - g; var p = f.maxHeight, m, h = this.clipRect, r = f.navigation, u = v(r.animation, !0), d = r.arrowSize || 12, t = this.nav, J = this.pages, n, q = this.allItems, A = function (a) { "number" === typeof a ? h.attr({ height: a }) : h && (c.clipRect = h.destroy(), c.contentGroup.clip()); c.contentGroup.div && (c.contentGroup.div.style.clip = a ? "rect(" + g + "px,9999px," + (g + a) + "px,0)" : "auto") }, H = function (b) { c[b] = e.circle(0, 0, 1.3 * d).translate(d / 2, d / 2).add(t); a.styledMode || c[b].attr("fill", "rgba(0,0,0,0.0001)"); return c[b] }; "horizontal" !== f.layout || "middle" ===
                            f.verticalAlign || f.floating || (k /= 2); p && (k = Math.min(k, p)); J.length = 0; b > k && !1 !== r.enabled ? (this.clipHeight = m = Math.max(k - 20 - this.titleHeight - g, 0), this.currentPage = v(this.currentPage, 1), this.fullHeight = b, q.forEach(function (a, d) { var b = a._legendItemPos[1], c = Math.round(a.legendItem.getBBox().height), e = J.length; if (!e || b - J[e - 1] > m && (n || b) !== J[e - 1]) J.push(n || b), e++; a.pageIx = e - 1; n && (q[d - 1].pageIx = e - 1); d === q.length - 1 && b + c - J[e - 1] > m && b !== n && (J.push(b), a.pageIx = e); b !== n && (n = b) }), h || (h = c.clipRect = e.clipRect(0, g, 9999,
                                0), c.contentGroup.clip(h)), A(m), t || (this.nav = t = e.g().attr({ zIndex: 1 }).add(this.group), this.up = e.symbol("triangle", 0, 0, d, d).add(t), H("upTracker").on("click", function () { c.scroll(-1, u) }), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation"), a.styledMode || this.pager.css(r.style), this.pager.add(t), this.down = e.symbol("triangle-down", 0, 0, d, d).add(t), H("downTracker").on("click", function () { c.scroll(1, u) })), c.scroll(0), b = k) : t && (A(), this.nav = t.destroy(), this.scrollGroup.attr({ translateY: 1 }), this.clipHeight =
                                    0); return b
                }; c.prototype.scroll = function (b, c) {
                    var a = this, e = this.chart, f = this.pages, l = f.length, k = this.currentPage + b; b = this.clipHeight; var g = this.options.navigation, h = this.pager, r = this.padding; k > l && (k = l); 0 < k && ("undefined" !== typeof c && y(c, e), this.nav.attr({ translateX: r, translateY: b + this.padding + 7 + this.titleHeight, visibility: "visible" }), [this.up, this.upTracker].forEach(function (a) { a.attr({ "class": 1 === k ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }), h.attr({ text: k + "/" + l }), [this.down,
                    this.downTracker].forEach(function (a) { a.attr({ x: 18 + this.pager.getBBox().width, "class": k === l ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active" }) }, this), e.styledMode || (this.up.attr({ fill: 1 === k ? g.inactiveColor : g.activeColor }), this.upTracker.css({ cursor: 1 === k ? "default" : "pointer" }), this.down.attr({ fill: k === l ? g.inactiveColor : g.activeColor }), this.downTracker.css({ cursor: k === l ? "default" : "pointer" })), this.scrollOffset = -f[k - 1] + this.initialItemY, this.scrollGroup.animate({ translateY: this.scrollOffset }),
                        this.currentPage = k, this.positionCheckboxes(), c = z(v(c, e.renderer.globalAnimation, !0)), p(function () { m(a, "afterScroll", { currentPage: k }) }, c.duration))
                }; return c
        }(); (/Trident\/7\.0/.test(c.navigator && c.navigator.userAgent) || q) && n(e.prototype, "positionItem", function (c, b) { var e = this, a = function () { b._legendItemPos && c.call(e, b) }; a(); e.bubbleLegend || setTimeout(a) }); h.Legend = e; return h.Legend
    }); O(q, "Core/Series/Point.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Globals.js"], q["Core/Utilities.js"]],
        function (n, h, q) {
            var z = n.animObject, y = q.defined, F = q.erase, L = q.extend, G = q.fireEvent, B = q.format, r = q.getNestedProperty, m = q.isArray, g = q.isNumber, D = q.isObject, H = q.syncTimeout, v = q.pick, u = q.removeEvent, A = q.uniqueKey; ""; n = function () {
                function p() { this.colorIndex = this.category = void 0; this.formatPrefix = "point"; this.id = void 0; this.isNull = !1; this.percentage = this.options = this.name = void 0; this.selected = !1; this.total = this.series = void 0; this.visible = !0; this.x = void 0 } p.prototype.animateBeforeDestroy = function () {
                    var k =
                        this, c = { x: k.startXPos, opacity: 0 }, e, f = k.getGraphicalProps(); f.singular.forEach(function (b) { e = "dataLabel" === b; k[b] = k[b].animate(e ? { x: k[b].startXPos, y: k[b].startYPos, opacity: 0 } : c) }); f.plural.forEach(function (b) { k[b].forEach(function (b) { b.element && b.animate(L({ x: k.startXPos }, b.startYPos ? { x: b.startXPos, y: b.startYPos } : {})) }) })
                }; p.prototype.applyOptions = function (k, c) {
                    var e = this.series, f = e.options.pointValKey || e.pointValKey; k = p.prototype.optionsToObject.call(this, k); L(this, k); this.options = this.options ? L(this.options,
                        k) : k; k.group && delete this.group; k.dataLabels && delete this.dataLabels; f && (this.y = p.prototype.getNestedProperty.call(this, f)); this.formatPrefix = (this.isNull = v(this.isValid && !this.isValid(), null === this.x || !g(this.y))) ? "null" : "point"; this.selected && (this.state = "select"); "name" in this && "undefined" === typeof c && e.xAxis && e.xAxis.hasNames && (this.x = e.xAxis.nameToX(this)); "undefined" === typeof this.x && e && (this.x = "undefined" === typeof c ? e.autoIncrement(this) : c); return this
                }; p.prototype.destroy = function () {
                    function k() {
                        if (c.graphic ||
                            c.dataLabel || c.dataLabels) u(c), c.destroyElements(); for (a in c) c[a] = null
                    } var c = this, e = c.series, f = e.chart; e = e.options.dataSorting; var b = f.hoverPoints, l = z(c.series.chart.renderer.globalAnimation), a; c.legendItem && f.legend.destroyItem(c); b && (c.setState(), F(b, c), b.length || (f.hoverPoints = null)); if (c === f.hoverPoint) c.onMouseOut(); e && e.enabled ? (this.animateBeforeDestroy(), H(k, l.duration)) : k(); f.pointCount--
                }; p.prototype.destroyElements = function (k) {
                    var c = this; k = c.getGraphicalProps(k); k.singular.forEach(function (e) {
                    c[e] =
                        c[e].destroy()
                    }); k.plural.forEach(function (e) { c[e].forEach(function (c) { c.element && c.destroy() }); delete c[e] })
                }; p.prototype.firePointEvent = function (k, c, e) { var f = this, b = this.series.options; (b.point.events[k] || f.options && f.options.events && f.options.events[k]) && f.importEvents(); "click" === k && b.allowPointSelect && (e = function (b) { f.select && f.select(null, b.ctrlKey || b.metaKey || b.shiftKey) }); G(f, k, c, e) }; p.prototype.getClassName = function () {
                    return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") +
                        (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "")
                }; p.prototype.getGraphicalProps = function (k) {
                    var c = this, e = [], f, b = { singular: [], plural: [] }; k = k || { graphic: 1, dataLabel: 1 }; k.graphic && e.push("graphic", "shadowGroup"); k.dataLabel && e.push("dataLabel",
                        "dataLabelUpper", "connector"); for (f = e.length; f--;) { var l = e[f]; c[l] && b.singular.push(l) } ["dataLabel", "connector"].forEach(function (a) { var e = a + "s"; k[a] && c[e] && b.plural.push(e) }); return b
                }; p.prototype.getLabelConfig = function () { return { x: this.category, y: this.y, color: this.color, colorIndex: this.colorIndex, key: this.name || this.category, series: this.series, point: this, percentage: this.percentage, total: this.total || this.stackTotal } }; p.prototype.getNestedProperty = function (k) {
                    if (k) return 0 === k.indexOf("custom.") ?
                        r(k, this.options) : this[k]
                }; p.prototype.getZone = function () { var k = this.series, c = k.zones; k = k.zoneAxis || "y"; var e = 0, f; for (f = c[e]; this[k] >= f.value;)f = c[++e]; this.nonZonedColor || (this.nonZonedColor = this.color); this.color = f && f.color && !this.options.color ? f.color : this.nonZonedColor; return f }; p.prototype.hasNewShapeType = function () { return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType }; p.prototype.init = function (k, c, e) {
                this.series = k; this.applyOptions(c, e); this.id = y(this.id) ?
                    this.id : A(); this.resolveColor(); k.chart.pointCount++; G(this, "afterInit"); return this
                }; p.prototype.optionsToObject = function (k) {
                    var c = {}, e = this.series, f = e.options.keys, b = f || e.pointArrayMap || ["y"], l = b.length, a = 0, h = 0; if (g(k) || null === k) c[b[0]] = k; else if (m(k)) for (!f && k.length > l && (e = typeof k[0], "string" === e ? c.name = k[0] : "number" === e && (c.x = k[0]), a++); h < l;)f && "undefined" === typeof k[a] || (0 < b[h].indexOf(".") ? p.prototype.setNestedProperty(c, k[a], b[h]) : c[b[h]] = k[a]), a++ , h++; else "object" === typeof k && (c = k, k.dataLabels &&
                        (e._hasPointLabels = !0), k.marker && (e._hasPointMarkers = !0)); return c
                }; p.prototype.resolveColor = function () {
                    var k = this.series; var c = k.chart.options.chart.colorCount; var e = k.chart.styledMode; delete this.nonZonedColor; e || this.options.color || (this.color = k.color); k.options.colorByPoint ? (e || (c = k.options.colors || k.chart.options.colors, this.color = this.color || c[k.colorCounter], c = c.length), e = k.colorCounter, k.colorCounter++ , k.colorCounter === c && (k.colorCounter = 0)) : e = k.colorIndex; this.colorIndex = v(this.colorIndex,
                        e)
                }; p.prototype.setNestedProperty = function (k, c, e) { e.split(".").reduce(function (e, b, l, a) { e[b] = a.length - 1 === l ? c : D(e[b], !0) ? e[b] : {}; return e[b] }, k); return k }; p.prototype.tooltipFormatter = function (k) {
                    var c = this.series, e = c.tooltipOptions, f = v(e.valueDecimals, ""), b = e.valuePrefix || "", l = e.valueSuffix || ""; c.chart.styledMode && (k = c.chart.tooltip.styledModeFormat(k)); (c.pointArrayMap || ["y"]).forEach(function (a) {
                        a = "{point." + a; if (b || l) k = k.replace(RegExp(a + "}", "g"), b + a + "}" + l); k = k.replace(RegExp(a + "}", "g"), a + ":,." +
                            f + "f}")
                    }); return B(k, { point: this, series: this.series }, c.chart)
                }; return p
            }(); return h.Point = n
        }); O(q, "Core/Series/Series.js", [q["Core/Globals.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q) {
            var z = q.error, y = q.extendClass, F = q.fireEvent, L = q.getOptions, G = q.isObject, B = q.merge, r = q.objectEach; q = function () {
                function m(g, h) { var r = B(m.defaultOptions, h); this.chart = g; this._i = g.series.length; g.series.push(this); this.options = r; this.userOptions = B(h) } m.addSeries = function (g, h) {
                m.seriesTypes[g] =
                    h
                }; m.cleanRecursively = function (g, h) { var n = {}; r(g, function (r, u) { if (G(g[u], !0) && !g.nodeType && h[u]) r = m.cleanRecursively(g[u], h[u]), Object.keys(r).length && (n[u] = r); else if (G(g[u]) || g[u] !== h[u]) n[u] = g[u] }); return n }; m.getSeries = function (g, h) { void 0 === h && (h = {}); var r = g.options.chart; r = h.type || r.type || r.defaultSeriesType || ""; var v = m.seriesTypes[r]; v || z(17, !0, g, { missingModuleFor: r }); return new v(g, h) }; m.seriesType = function (g, r, n, v, u) {
                    var q = L().plotOptions || {}, p = m.seriesTypes; r = r || ""; q[g] = B(q[r], n); m.addSeries(g,
                        y(p[r] || function () { }, v)); p[g].prototype.type = g; u && (p[g].prototype.pointClass = y(h, u)); return p[g]
                }; m.prototype.update = function (g, h) { void 0 === h && (h = !0); var r = this; g = m.cleanRecursively(g, this.userOptions); var v = g.type; "undefined" !== typeof v && v !== r.type && (r = m.getSeries(r.chart, g)); F(r, "update", { newOptions: g }); r.userOptions = B(g); F(r, "afterUpdate", { newOptions: g }); h && r.chart.redraw(); return r }; m.defaultOptions = { type: "base" }; m.seriesTypes = {}; return m
            }(); q.prototype.pointClass = h; n.seriesType = q.seriesType;
            n.seriesTypes = q.seriesTypes; return q
        }); O(q, "Core/Chart/Chart.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Axis/Axis.js"], q["Core/Series/Series.js"], q["Core/Globals.js"], q["Core/Legend.js"], q["Core/MSPointer.js"], q["Core/Options.js"], q["Core/Pointer.js"], q["Core/Time.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M, G, B, r) {
            var m = n.animate, g = n.animObject, D = n.setAnimation, H = z.charts, v = z.doc, u = z.win, A = M.defaultOptions, p = r.addEvent, k = r.attr, c = r.createElement, e = r.css, f = r.defined, b = r.discardElement,
            l = r.erase, a = r.error, x = r.extend, E = r.find, C = r.fireEvent, K = r.getStyle, T = r.isArray, R = r.isFunction, N = r.isNumber, I = r.isObject, w = r.isString, d = r.merge, t = r.numberFormat, J = r.objectEach, P = r.pick, Q = r.pInt, ba = r.relativeLength, Y = r.removeEvent, Z = r.splat, X = r.syncTimeout, L = r.uniqueKey, W = z.marginNames, U = function () {
                function n(a, d, b) {
                this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth =
                    this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0; this.getArgs(a, d, b)
                } n.prototype.getArgs = function (a, d, b) { w(a) || a.nodeName ? (this.renderTo = a, this.init(d, b)) : this.init(a, d) }; n.prototype.init = function (a, b) {
                    var c, e = a.series, f = a.plotOptions || {}; C(this, "init", { args: arguments },
                        function () {
                        a.series = null; c = d(A, a); var l = c.chart || {}; J(c.plotOptions, function (a, b) { I(a) && (a.tooltip = f[b] && d(f[b].tooltip) || void 0) }); c.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip; c.series = a.series = e; this.userOptions = a; var k = l.events; this.margin = []; this.spacing = []; this.bounds = { h: {}, v: {} }; this.labelCollectors = []; this.callback = b; this.isResizing = 0; this.options = c; this.axes = []; this.series = []; this.time = a.time && Object.keys(a.time).length ? new B(a.time) : z.time; this.numberFormatter =
                            l.numberFormatter || t; this.styledMode = l.styledMode; this.hasCartesianSeries = l.showAxes; var g = this; g.index = H.length; H.push(g); z.chartCount++; k && J(k, function (a, d) { R(a) && p(g, d, a) }); g.xAxis = []; g.yAxis = []; g.pointCount = g.colorCounter = g.symbolCounter = 0; C(g, "afterInit"); g.firstRender()
                        })
                }; n.prototype.initSeries = function (d) { var b = this.options.chart; b = d.type || b.type || b.defaultSeriesType; var c = q.seriesTypes[b]; c || a(17, !0, this, { missingModuleFor: b }); b = new c(this, d); "function" === typeof b.init && b.init(this, d); return b };
                n.prototype.setSeriesData = function () { this.getSeriesOrderByLinks().forEach(function (a) { a.points || a.data || !a.enabledDataSorting || a.setData(a.options.data, !1) }) }; n.prototype.getSeriesOrderByLinks = function () { return this.series.concat().sort(function (a, d) { return a.linkedSeries.length || d.linkedSeries.length ? d.linkedSeries.length - a.linkedSeries.length : 0 }) }; n.prototype.orderSeries = function (a) { var d = this.series; for (a = a || 0; a < d.length; a++)d[a] && (d[a].index = a, d[a].name = d[a].getName()) }; n.prototype.isInsidePlot =
                    function (a, d, b) { var c = b ? d : a; a = b ? a : d; c = { x: c, y: a, isInsidePlot: 0 <= c && c <= this.plotWidth && 0 <= a && a <= this.plotHeight }; C(this, "afterIsInsidePlot", c); return c.isInsidePlot }; n.prototype.redraw = function (a) {
                        C(this, "beforeRedraw"); var d = this, b = d.axes, c = d.series, e = d.pointer, f = d.legend, t = d.userOptions.legend, l = d.isDirtyLegend, k = d.hasCartesianSeries, g = d.isDirtyBox, p = d.renderer, m = p.isHidden(), h = []; d.setResponsive && d.setResponsive(!1); D(d.hasRendered ? a : !1, d); m && d.temporaryDisplay(); d.layOutTitles(); for (a = c.length; a--;) {
                            var r =
                                c[a]; if (r.options.stacking) { var u = !0; if (r.isDirty) { var w = !0; break } }
                        } if (w) for (a = c.length; a--;)r = c[a], r.options.stacking && (r.isDirty = !0); c.forEach(function (a) { a.isDirty && ("point" === a.options.legendType ? ("function" === typeof a.updateTotals && a.updateTotals(), l = !0) : t && (t.labelFormatter || t.labelFormat) && (l = !0)); a.isDirtyData && C(a, "updatedData") }); l && f && f.options.enabled && (f.render(), d.isDirtyLegend = !1); u && d.getStacks(); k && b.forEach(function (a) { d.isResizing && N(a.min) || (a.updateNames(), a.setScale()) }); d.getMargins();
                        k && (b.forEach(function (a) { a.isDirty && (g = !0) }), b.forEach(function (a) { var d = a.min + "," + a.max; a.extKey !== d && (a.extKey = d, h.push(function () { C(a, "afterSetExtremes", x(a.eventArgs, a.getExtremes())); delete a.eventArgs })); (g || u) && a.redraw() })); g && d.drawChartBox(); C(d, "predraw"); c.forEach(function (a) { (g || a.isDirty) && a.visible && a.redraw(); a.isDirtyData = !1 }); e && e.reset(!0); p.draw(); C(d, "redraw"); C(d, "render"); m && d.temporaryDisplay(!0); h.forEach(function (a) { a.call() })
                    }; n.prototype.get = function (a) {
                        function d(d) {
                            return d.id ===
                                a || d.options && d.options.id === a
                        } var b = this.series, c; var e = E(this.axes, d) || E(this.series, d); for (c = 0; !e && c < b.length; c++)e = E(b[c].points || [], d); return e
                    }; n.prototype.getAxes = function () { var a = this, d = this.options, b = d.xAxis = Z(d.xAxis || {}); d = d.yAxis = Z(d.yAxis || {}); C(this, "getAxes"); b.forEach(function (a, d) { a.index = d; a.isX = !0 }); d.forEach(function (a, d) { a.index = d }); b.concat(d).forEach(function (d) { new h(a, d) }); C(this, "afterGetAxes") }; n.prototype.getSelectedPoints = function () {
                        var a = []; this.series.forEach(function (d) {
                            a =
                            a.concat(d.getPointsCollection().filter(function (a) { return P(a.selectedStaging, a.selected) }))
                        }); return a
                    }; n.prototype.getSelectedSeries = function () { return this.series.filter(function (a) { return a.selected }) }; n.prototype.setTitle = function (a, d, b) { this.applyDescription("title", a); this.applyDescription("subtitle", d); this.applyDescription("caption", void 0); this.layOutTitles(b) }; n.prototype.applyDescription = function (a, b) {
                        var c = this, e = "title" === a ? { color: "#333333", fontSize: this.options.isStock ? "16px" : "18px" } :
                            { color: "#666666" }; e = this.options[a] = d(!this.styledMode && { style: e }, this.options[a], b); var f = this[a]; f && b && (this[a] = f = f.destroy()); e && !f && (f = this.renderer.text(e.text, 0, 0, e.useHTML).attr({ align: e.align, "class": "highcharts-" + a, zIndex: e.zIndex || 4 }).add(), f.update = function (d) { c[{ title: "setTitle", subtitle: "setSubtitle", caption: "setCaption" }[a]](d) }, this.styledMode || f.css(e.style), this[a] = f)
                    }; n.prototype.layOutTitles = function (a) {
                        var d = [0, 0, 0], b = this.renderer, c = this.spacingBox;["title", "subtitle", "caption"].forEach(function (a) {
                            var e =
                                this[a], f = this.options[a], t = f.verticalAlign || "top"; a = "title" === a ? -3 : "top" === t ? d[0] + 2 : 0; if (e) { if (!this.styledMode) var l = f.style.fontSize; l = b.fontMetrics(l, e).b; e.css({ width: (f.width || c.width + (f.widthAdjust || 0)) + "px" }); var k = Math.round(e.getBBox(f.useHTML).height); e.align(x({ y: "bottom" === t ? l : a + l, height: k }, f), !1, "spacingBox"); f.floating || ("top" === t ? d[0] = Math.ceil(d[0] + k) : "bottom" === t && (d[2] = Math.ceil(d[2] + k))) }
                        }, this); d[0] && "top" === (this.options.title.verticalAlign || "top") && (d[0] += this.options.title.margin);
                        d[2] && "bottom" === this.options.caption.verticalAlign && (d[2] += this.options.caption.margin); var e = !this.titleOffset || this.titleOffset.join(",") !== d.join(","); this.titleOffset = d; C(this, "afterLayOutTitles"); !this.isDirtyBox && e && (this.isDirtyBox = this.isDirtyLegend = e, this.hasRendered && P(a, !0) && this.isDirtyBox && this.redraw())
                    }; n.prototype.getChartSize = function () {
                        var a = this.options.chart, d = a.width; a = a.height; var b = this.renderTo; f(d) || (this.containerWidth = K(b, "width")); f(a) || (this.containerHeight = K(b, "height"));
                        this.chartWidth = Math.max(0, d || this.containerWidth || 600); this.chartHeight = Math.max(0, ba(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400))
                    }; n.prototype.temporaryDisplay = function (a) {
                        var d = this.renderTo; if (a) for (; d && d.style;)d.hcOrigStyle && (e(d, d.hcOrigStyle), delete d.hcOrigStyle), d.hcOrigDetached && (v.body.removeChild(d), d.hcOrigDetached = !1), d = d.parentNode; else for (; d && d.style;) {
                            v.body.contains(d) || d.parentNode || (d.hcOrigDetached = !0, v.body.appendChild(d)); if ("none" === K(d, "display",
                                !1) || d.hcOricDetached) d.hcOrigStyle = { display: d.style.display, height: d.style.height, overflow: d.style.overflow }, a = { display: "block", overflow: "hidden" }, d !== this.renderTo && (a.height = 0), e(d, a), d.offsetWidth || d.style.setProperty("display", "block", "important"); d = d.parentNode; if (d === v.body) break
                        }
                    }; n.prototype.setClassName = function (a) { this.container.className = "highcharts-container " + (a || "") }; n.prototype.getContainer = function () {
                        var d = this.options, b = d.chart; var f = this.renderTo; var t = L(), l, g; f || (this.renderTo =
                            f = b.renderTo); w(f) && (this.renderTo = f = v.getElementById(f)); f || a(13, !0, this); var p = Q(k(f, "data-highcharts-chart")); N(p) && H[p] && H[p].hasRendered && H[p].destroy(); k(f, "data-highcharts-chart", this.index); f.innerHTML = ""; b.skipClone || f.offsetWidth || this.temporaryDisplay(); this.getChartSize(); p = this.chartWidth; var m = this.chartHeight; e(f, { overflow: "hidden" }); this.styledMode || (l = x({
                                position: "relative", overflow: "hidden", width: p + "px", height: m + "px", textAlign: "left", lineHeight: "normal", zIndex: 0, "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                                userSelect: "none"
                            }, b.style)); this.container = f = c("div", { id: t }, l, f); this._cursor = f.style.cursor; this.renderer = new (z[b.renderer] || z.Renderer)(f, p, m, null, b.forExport, d.exporting && d.exporting.allowHTML, this.styledMode); D(void 0, this); this.setClassName(b.className); if (this.styledMode) for (g in d.defs) this.renderer.definition(d.defs[g]); else this.renderer.setStyle(b.style); this.renderer.chartIndex = this.index; C(this, "afterGetContainer")
                    }; n.prototype.getMargins = function (a) {
                        var d = this.spacing, b = this.margin,
                        c = this.titleOffset; this.resetMargins(); c[0] && !f(b[0]) && (this.plotTop = Math.max(this.plotTop, c[0] + d[0])); c[2] && !f(b[2]) && (this.marginBottom = Math.max(this.marginBottom, c[2] + d[2])); this.legend && this.legend.display && this.legend.adjustMargins(b, d); C(this, "getMargins"); a || this.getAxisMargins()
                    }; n.prototype.getAxisMargins = function () {
                        var a = this, d = a.axisOffset = [0, 0, 0, 0], b = a.colorAxis, c = a.margin, e = function (a) { a.forEach(function (a) { a.visible && a.getOffset() }) }; a.hasCartesianSeries ? e(a.axes) : b && b.length && e(b);
                        W.forEach(function (b, e) { f(c[e]) || (a[b] += d[e]) }); a.setChartSize()
                    }; n.prototype.reflow = function (a) { var d = this, b = d.options.chart, c = d.renderTo, e = f(b.width) && f(b.height), t = b.width || K(c, "width"); b = b.height || K(c, "height"); c = a ? a.target : u; if (!e && !d.isPrinting && t && b && (c === u || c === v)) { if (t !== d.containerWidth || b !== d.containerHeight) r.clearTimeout(d.reflowTimeout), d.reflowTimeout = X(function () { d.container && d.setSize(void 0, void 0, !1) }, a ? 100 : 0); d.containerWidth = t; d.containerHeight = b } }; n.prototype.setReflow = function (a) {
                        var d =
                            this; !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = p(u, "resize", function (a) { d.options && d.reflow(a) }), p(this, "destroy", this.unbindReflow))
                    }; n.prototype.setSize = function (a, d, b) {
                        var c = this, f = c.renderer; c.isResizing += 1; D(b, c); b = f.globalAnimation; c.oldChartHeight = c.chartHeight; c.oldChartWidth = c.chartWidth; "undefined" !== typeof a && (c.options.chart.width = a); "undefined" !== typeof d && (c.options.chart.height = d); c.getChartSize(); c.styledMode || (b ?
                            m : e)(c.container, { width: c.chartWidth + "px", height: c.chartHeight + "px" }, b); c.setChartSize(!0); f.setSize(c.chartWidth, c.chartHeight, b); c.axes.forEach(function (a) { a.isDirty = !0; a.setScale() }); c.isDirtyLegend = !0; c.isDirtyBox = !0; c.layOutTitles(); c.getMargins(); c.redraw(b); c.oldChartHeight = null; C(c, "resize"); X(function () { c && C(c, "endResize", null, function () { --c.isResizing }) }, g(b).duration)
                    }; n.prototype.setChartSize = function (a) {
                        var d = this.inverted, b = this.renderer, c = this.chartWidth, e = this.chartHeight, f = this.options.chart,
                        t = this.spacing, l = this.clipOffset, k, g, p, m; this.plotLeft = k = Math.round(this.plotLeft); this.plotTop = g = Math.round(this.plotTop); this.plotWidth = p = Math.max(0, Math.round(c - k - this.marginRight)); this.plotHeight = m = Math.max(0, Math.round(e - g - this.marginBottom)); this.plotSizeX = d ? m : p; this.plotSizeY = d ? p : m; this.plotBorderWidth = f.plotBorderWidth || 0; this.spacingBox = b.spacingBox = { x: t[3], y: t[0], width: c - t[3] - t[1], height: e - t[0] - t[2] }; this.plotBox = b.plotBox = { x: k, y: g, width: p, height: m }; c = 2 * Math.floor(this.plotBorderWidth /
                            2); d = Math.ceil(Math.max(c, l[3]) / 2); b = Math.ceil(Math.max(c, l[0]) / 2); this.clipBox = { x: d, y: b, width: Math.floor(this.plotSizeX - Math.max(c, l[1]) / 2 - d), height: Math.max(0, Math.floor(this.plotSizeY - Math.max(c, l[2]) / 2 - b)) }; a || this.axes.forEach(function (a) { a.setAxisSize(); a.setAxisTranslation() }); C(this, "afterSetChartSize", { skipAxes: a })
                    }; n.prototype.resetMargins = function () {
                        C(this, "resetMargins"); var a = this, d = a.options.chart;["margin", "spacing"].forEach(function (b) {
                            var c = d[b], e = I(c) ? c : [c, c, c, c];["Top", "Right",
                                "Bottom", "Left"].forEach(function (c, f) { a[b][f] = P(d[b + c], e[f]) })
                        }); W.forEach(function (d, b) { a[d] = P(a.margin[b], a.spacing[b]) }); a.axisOffset = [0, 0, 0, 0]; a.clipOffset = [0, 0, 0, 0]
                    }; n.prototype.drawChartBox = function () {
                        var a = this.options.chart, d = this.renderer, b = this.chartWidth, c = this.chartHeight, e = this.chartBackground, f = this.plotBackground, t = this.plotBorder, l = this.styledMode, k = this.plotBGImage, g = a.backgroundColor, p = a.plotBackgroundColor, m = a.plotBackgroundImage, h, r = this.plotLeft, x = this.plotTop, u = this.plotWidth,
                        w = this.plotHeight, n = this.plotBox, v = this.clipRect, E = this.clipBox, J = "animate"; e || (this.chartBackground = e = d.rect().addClass("highcharts-background").add(), J = "attr"); if (l) var q = h = e.strokeWidth(); else { q = a.borderWidth || 0; h = q + (a.shadow ? 8 : 0); g = { fill: g || "none" }; if (q || e["stroke-width"]) g.stroke = a.borderColor, g["stroke-width"] = q; e.attr(g).shadow(a.shadow) } e[J]({ x: h / 2, y: h / 2, width: b - h - q % 2, height: c - h - q % 2, r: a.borderRadius }); J = "animate"; f || (J = "attr", this.plotBackground = f = d.rect().addClass("highcharts-plot-background").add());
                        f[J](n); l || (f.attr({ fill: p || "none" }).shadow(a.plotShadow), m && (k ? (m !== k.attr("href") && k.attr("href", m), k.animate(n)) : this.plotBGImage = d.image(m, r, x, u, w).add())); v ? v.animate({ width: E.width, height: E.height }) : this.clipRect = d.clipRect(E); J = "animate"; t || (J = "attr", this.plotBorder = t = d.rect().addClass("highcharts-plot-border").attr({ zIndex: 1 }).add()); l || t.attr({ stroke: a.plotBorderColor, "stroke-width": a.plotBorderWidth || 0, fill: "none" }); t[J](t.crisp({ x: r, y: x, width: u, height: w }, -t.strokeWidth())); this.isDirtyBox =
                            !1; C(this, "afterDrawChartBox")
                    }; n.prototype.propFromSeries = function () { var a = this, d = a.options.chart, b, c = a.options.series, e, f;["inverted", "angular", "polar"].forEach(function (t) { b = q.seriesTypes[d.type || d.defaultSeriesType]; f = d[t] || b && b.prototype[t]; for (e = c && c.length; !f && e--;)(b = q.seriesTypes[c[e].type]) && b.prototype[t] && (f = !0); a[t] = f }) }; n.prototype.linkSeries = function () {
                        var a = this, d = a.series; d.forEach(function (a) { a.linkedSeries.length = 0 }); d.forEach(function (d) {
                            var b = d.options.linkedTo; w(b) && (b = ":previous" ===
                                b ? a.series[d.index - 1] : a.get(b)) && b.linkedParent !== d && (b.linkedSeries.push(d), d.linkedParent = b, b.enabledDataSorting && d.setDataSortingOptions(), d.visible = P(d.options.visible, b.options.visible, d.visible))
                        }); C(this, "afterLinkSeries")
                    }; n.prototype.renderSeries = function () { this.series.forEach(function (a) { a.translate(); a.render() }) }; n.prototype.renderLabels = function () {
                        var a = this, d = a.options.labels; d.items && d.items.forEach(function (b) {
                            var c = x(d.style, b.style), e = Q(c.left) + a.plotLeft, f = Q(c.top) + a.plotTop + 12;
                            delete c.left; delete c.top; a.renderer.text(b.html, e, f).attr({ zIndex: 2 }).css(c).add()
                        })
                    }; n.prototype.render = function () {
                        var a = this.axes, d = this.colorAxis, b = this.renderer, c = this.options, e = 0, f = function (a) { a.forEach(function (a) { a.visible && a.render() }) }; this.setTitle(); this.legend = new y(this, c.legend); this.getStacks && this.getStacks(); this.getMargins(!0); this.setChartSize(); c = this.plotWidth; a.some(function (a) { if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return e = 21, !0 }); var t = this.plotHeight =
                            Math.max(this.plotHeight - e, 0); a.forEach(function (a) { a.setScale() }); this.getAxisMargins(); var l = 1.1 < c / this.plotWidth; var k = 1.05 < t / this.plotHeight; if (l || k) a.forEach(function (a) { (a.horiz && l || !a.horiz && k) && a.setTickInterval(!0) }), this.getMargins(); this.drawChartBox(); this.hasCartesianSeries ? f(a) : d && d.length && f(d); this.seriesGroup || (this.seriesGroup = b.g("series-group").attr({ zIndex: 3 }).add()); this.renderSeries(); this.renderLabels();  this.setResponsive && this.setResponsive(); this.updateContainerScaling();
                        this.hasRendered = !0
                    }; n.prototype.updateContainerScaling =
                        function () { var a = this.container; if (2 < a.offsetWidth && 2 < a.offsetHeight && a.getBoundingClientRect) { var d = a.getBoundingClientRect(), b = d.width / a.offsetWidth; a = d.height / a.offsetHeight; 1 !== b || 1 !== a ? this.containerScaling = { scaleX: b, scaleY: a } : delete this.containerScaling } }; n.prototype.destroy = function () {
                            var a = this, d = a.axes, c = a.series, e = a.container, f, t = e && e.parentNode; C(a, "destroy"); a.renderer.forExport ? l(H, a) : H[a.index] = void 0; z.chartCount--; a.renderTo.removeAttribute("data-highcharts-chart"); Y(a); for (f = d.length; f--;)d[f] =
                                d[f].destroy(); this.scroller && this.scroller.destroy && this.scroller.destroy(); for (f = c.length; f--;)c[f] = c[f].destroy(); "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (d) { var b = a[d]; b && b.destroy && (a[d] = b.destroy()) }); e && (e.innerHTML = "", Y(e), t && b(e)); J(a, function (d, b) { delete a[b] })
                        }; n.prototype.firstRender = function () {
                            var a = this, d = a.options; if (!a.isReadyToRender ||
                                a.isReadyToRender()) { a.getContainer(); a.resetMargins(); a.setChartSize(); a.propFromSeries(); a.getAxes(); (T(d.series) ? d.series : []).forEach(function (d) { a.initSeries(d) }); a.linkSeries(); a.setSeriesData(); C(a, "beforeRender"); G && (a.pointer = z.hasTouch || !u.PointerEvent && !u.MSPointerEvent ? new G(a, d) : new F(a, d)); a.render(); if (!a.renderer.imgCount && !a.hasLoaded) a.onload(); a.temporaryDisplay(!0) }
                        }; n.prototype.onload = function () {
                            this.callbacks.concat([this.callback]).forEach(function (a) {
                            a && "undefined" !== typeof this.index &&
                                a.apply(this, [this])
                            }, this); C(this, "load"); C(this, "render"); f(this.index) && this.setReflow(this.options.chart.reflow); this.hasLoaded = !0
                        }; return n
            }(); U.prototype.callbacks = []; z.chart = function (a, d, b) { return new U(a, d, b) }; return z.Chart = U
        }); O(q, "Extensions/ScrollablePlotArea.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
            var y = n.stop, F = z.addEvent, L = z.createElement, G = z.pick; ""; F(h, "afterSetChartSize", function (h) {
                var r =
                    this.options.chart.scrollablePlotArea, m = r && r.minWidth; r = r && r.minHeight; if (!this.renderer.forExport) {
                        if (m) { if (this.scrollablePixelsX = m = Math.max(0, m - this.chartWidth)) { this.plotWidth += m; this.inverted ? (this.clipBox.height += m, this.plotBox.height += m) : (this.clipBox.width += m, this.plotBox.width += m); var g = { 1: { name: "right", value: m } } } } else r && (this.scrollablePixelsY = m = Math.max(0, r - this.chartHeight)) && (this.plotHeight += m, this.inverted ? (this.clipBox.width += m, this.plotBox.width += m) : (this.clipBox.height += m, this.plotBox.height +=
                            m), g = { 2: { name: "bottom", value: m } }); g && !h.skipAxes && this.axes.forEach(function (m) { g[m.side] ? m.getPlotLinePath = function () { var h = g[m.side].name, r = this[h]; this[h] = r - g[m.side].value; var u = q.Axis.prototype.getPlotLinePath.apply(this, arguments); this[h] = r; return u } : (m.setAxisSize(), m.setAxisTranslation()) })
                    }
            }); F(h, "render", function () { this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed() }); h.prototype.setUpScrolling = function () {
                var h =
                    this, r = { WebkitOverflowScrolling: "touch", overflowX: "hidden", overflowY: "hidden" }; this.scrollablePixelsX && (r.overflowX = "auto"); this.scrollablePixelsY && (r.overflowY = "auto"); this.scrollingParent = L("div", { className: "highcharts-scrolling-parent" }, { position: "relative" }, this.renderTo); this.scrollingContainer = L("div", { className: "highcharts-scrolling" }, r, this.scrollingParent); F(this.scrollingContainer, "scroll", function () { h.pointer && delete h.pointer.chartPosition }); this.innerContainer = L("div", { className: "highcharts-inner-container" },
                        null, this.scrollingContainer); this.innerContainer.appendChild(this.container); this.setUpScrolling = null
            }; h.prototype.moveFixedElements = function () {
                var h = this.container, r = this.fixedRenderer, m = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), g; this.scrollablePixelsX &&
                    !this.inverted ? g = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? g = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? g = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (g = ".highcharts-yaxis"); m.push(g, g + "-labels"); m.forEach(function (g) { [].forEach.call(h.querySelectorAll(g), function (g) { (g.namespaceURI === r.SVG_NS ? r.box : r.box.parentNode).appendChild(g); g.style.pointerEvents = "auto" }) })
            }; h.prototype.applyFixed = function () {
                var h, r, m = !this.fixedDiv, g = this.options.chart.scrollablePlotArea;
                m ? (this.fixedDiv = L("div", { className: "highcharts-fixed" }, { position: "absolute", overflow: "hidden", pointerEvents: "none", zIndex: 2, top: 0 }, null, !0), null === (h = this.scrollingContainer) || void 0 === h ? void 0 : h.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = h = new q.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight, null === (r = this.options.chart) || void 0 === r ? void 0 : r.style), this.scrollableMask = h.path().attr({
                    fill: this.options.chart.backgroundColor ||
                        "#fff", "fill-opacity": G(g.opacity, .85), zIndex: -1
                }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), F(this, "afterShowResetZoom", this.moveFixedElements), F(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight); r = this.chartWidth + (this.scrollablePixelsX || 0); h = this.chartHeight + (this.scrollablePixelsY || 0); y(this.container); this.container.style.width = r + "px"; this.container.style.height = h + "px"; this.renderer.boxWrapper.attr({
                    width: r,
                    height: h, viewBox: [0, 0, r, h].join(" ")
                }); this.chartBackground.attr({ width: r, height: h }); this.scrollingContainer.style.height = this.chartHeight + "px"; m && (g.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * g.scrollPositionX), g.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * g.scrollPositionY)); h = this.axisOffset; m = this.plotTop - h[0] - 1; g = this.plotLeft - h[3] - 1; r = this.plotTop + this.plotHeight + h[2] + 1; h = this.plotLeft + this.plotWidth + h[1] + 1; var n = this.plotLeft +
                    this.plotWidth - (this.scrollablePixelsX || 0), H = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0); m = this.scrollablePixelsX ? [["M", 0, m], ["L", this.plotLeft - 1, m], ["L", this.plotLeft - 1, r], ["L", 0, r], ["Z"], ["M", n, m], ["L", this.chartWidth, m], ["L", this.chartWidth, r], ["L", n, r], ["Z"]] : this.scrollablePixelsY ? [["M", g, 0], ["L", g, this.plotTop - 1], ["L", h, this.plotTop - 1], ["L", h, 0], ["Z"], ["M", g, H], ["L", g, this.chartHeight], ["L", h, this.chartHeight], ["L", h, H], ["Z"]] : [["M", 0, 0]]; "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({ d: m })
            }
        });
    O(q, "Core/Axis/StackingAxis.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = n.getDeferredAnimation, z = h.addEvent, y = h.destroyObjectProperties, F = h.fireEvent, M = h.objectEach, G = h.pick, B = function () {
            function h(h) { this.oldStacks = {}; this.stacks = {}; this.stacksTouched = 0; this.axis = h } h.prototype.buildStacks = function () {
                var h = this.axis, g = h.series, r = G(h.options.reversedStacks, !0), n = g.length, v; if (!h.isXAxis) {
                this.usePercentage = !1; for (v = n; v--;) {
                    var u = g[r ? v : n - v - 1]; u.setStackedPoints();
                    u.setGroupedPoints()
                } for (v = 0; v < n; v++)g[v].modifyStacks(); F(h, "afterBuildStacks")
                }
            }; h.prototype.cleanStacks = function () { if (!this.axis.isXAxis) { if (this.oldStacks) var h = this.stacks = this.oldStacks; M(h, function (g) { M(g, function (g) { g.cumulative = g.total }) }) } }; h.prototype.resetStacks = function () { var h = this, g = h.stacks; h.axis.isXAxis || M(g, function (g) { M(g, function (m, r) { m.touched < h.stacksTouched ? (m.destroy(), delete g[r]) : (m.total = null, m.cumulative = null) }) }) }; h.prototype.renderStackTotals = function () {
                var h = this.axis,
                g = h.chart, r = g.renderer, n = this.stacks; h = q(g, h.options.stackLabels.animation); var v = this.stackTotalGroup = this.stackTotalGroup || r.g("stack-labels").attr({ visibility: "visible", zIndex: 6, opacity: 0 }).add(); v.translate(g.plotLeft, g.plotTop); M(n, function (g) { M(g, function (g) { g.render(v) }) }); v.animate({ opacity: 1 }, h)
            }; return h
        }(); return function () {
            function h() { } h.compose = function (m) { z(m, "init", h.onInit); z(m, "destroy", h.onDestroy) }; h.onDestroy = function () {
                var h = this.stacking; if (h) {
                    var g = h.stacks; M(g, function (h,
                        m) { y(h); g[m] = null }); h && h.stackTotalGroup && h.stackTotalGroup.destroy()
                }
            }; h.onInit = function () { this.stacking || (this.stacking = new B(this)) }; return h
        }()
    }); O(q, "Mixins/LegendSymbol.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = h.merge, z = h.pick; return n.LegendSymbolMixin = {
            drawRectangle: function (h, n) { var q = h.symbolHeight, y = h.options.squareSymbol; n.legendSymbol = this.chart.renderer.rect(y ? (h.symbolWidth - q) / 2 : 0, h.baseline - q + 1, y ? q : h.symbolWidth, q, z(h.options.symbolRadius, q / 2)).addClass("highcharts-point").attr({ zIndex: 3 }).add(n.legendGroup) },
            drawLineMarker: function (h) {
                var n = this.options, y = n.marker, G = h.symbolWidth, B = h.symbolHeight, r = B / 2, m = this.chart.renderer, g = this.legendGroup; h = h.baseline - Math.round(.3 * h.fontMetrics.b); var D = {}; this.chart.styledMode || (D = { "stroke-width": n.lineWidth || 0 }, n.dashStyle && (D.dashstyle = n.dashStyle)); this.legendLine = m.path([["M", 0, h], ["L", G, h]]).addClass("highcharts-graph").attr(D).add(g); y && !1 !== y.enabled && G && (n = Math.min(z(y.radius, r), r), 0 === this.symbol.indexOf("url") && (y = q(y, { width: B, height: B }), n = 0), this.legendSymbol =
                    y = m.symbol(this.symbol, G / 2 - n, h - n, 2 * n, 2 * n, y).addClass("highcharts-point").add(g), y.isMarker = !0)
            }
        }
    }); O(q, "Core/Series/CartesianSeries.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Series/Series.js"], q["Core/Globals.js"], q["Mixins/LegendSymbol.js"], q["Core/Options.js"], q["Core/Series/Point.js"], q["Core/Renderer/SVG/SVGElement.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M, G) {
        var B = n.animObject, r = y.defaultOptions, m = G.addEvent, g = G.arrayMax, D = G.arrayMin, H = G.clamp, v = G.correctFloat, u = G.defined,
        A = G.erase, p = G.error, k = G.extend, c = G.find, e = G.fireEvent, f = G.getNestedProperty, b = G.isArray, l = G.isFunction, a = G.isNumber, x = G.isString, E = G.merge, C = G.objectEach, K = G.pick, T = G.removeEvent, R = G.splat, N = G.syncTimeout; ""; var I = h.seriesTypes, w = q.win; n = h.seriesType("line", void 0, {
            lineWidth: 2, allowPointSelect: !1, crisp: !0, showCheckbox: !1, animation: { duration: 1E3 }, events: {}, marker: {
                enabledThreshold: 2, lineColor: "#ffffff", lineWidth: 0, radius: 4, states: {
                    normal: { animation: !0 }, hover: {
                        animation: { duration: 50 }, enabled: !0, radiusPlus: 2,
                        lineWidthPlus: 1
                    }, select: { fillColor: "#cccccc", lineColor: "#000000", lineWidth: 2 }
                }
            }, point: { events: {} }, dataLabels: { animation: {}, align: "center", defer: !0, formatter: function () { var a = this.series.chart.numberFormatter; return "number" !== typeof this.y ? "" : a(this.y, -1) }, padding: 5, style: { fontSize: "11px", fontWeight: "bold", color: "contrast", textOutline: "1px contrast" }, verticalAlign: "bottom", x: 0, y: 0 }, cropThreshold: 300, opacity: 1, pointRange: 0, softThreshold: !0, states: {
                normal: { animation: !0 }, hover: {
                    animation: { duration: 50 },
                    lineWidthPlus: 1, marker: {}, halo: { size: 10, opacity: .25 }
                }, select: { animation: { duration: 0 } }, inactive: { animation: { duration: 50 }, opacity: .2 }
            }, stickyTracking: !0, turboThreshold: 1E3, findNearestPointBy: "x"
        }, {
            axisTypes: ["xAxis", "yAxis"], coll: "series", colorCounter: 0, cropShoulder: 1, directTouch: !1, isCartesian: !0, parallelArrays: ["x", "y"], pointClass: F, requireSorting: !0, sorted: !0, init: function (a, b) {
                e(this, "init", { options: b }); var d = this, c = a.series, f; this.eventOptions = this.eventOptions || {}; this.eventsToUnbind = []; d.chart =
                    a; d.options = b = d.setOptions(b); d.linkedSeries = []; d.bindAxes(); k(d, { name: b.name, state: "", visible: !1 !== b.visible, selected: !0 === b.selected }); var t = b.events; C(t, function (a, b) { l(a) && d.eventOptions[b] !== a && (l(d.eventOptions[b]) && T(d, b, d.eventOptions[b]), d.eventOptions[b] = a, m(d, b, a)) }); if (t && t.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0; d.getColor(); d.getSymbol(); d.parallelArrays.forEach(function (a) { d[a + "Data"] || (d[a + "Data"] = []) }); d.isCartesian && (a.hasCartesianSeries =
                        !0); c.length && (f = c[c.length - 1]); d._i = K(f && f._i, -1) + 1; d.opacity = d.options.opacity; a.orderSeries(this.insert(c)); b.dataSorting && b.dataSorting.enabled ? d.setDataSortingOptions() : d.points || d.data || d.setData(b.data, !1); e(this, "afterInit")
            }, is: function (a) { return I[a] && this instanceof I[a] }, insert: function (d) { var b = this.options.index, c; if (a(b)) { for (c = d.length; c--;)if (b >= K(d[c].options.index, d[c]._i)) { d.splice(c + 1, 0, this); break } -1 === c && d.unshift(this); c += 1 } else d.push(this); return K(c, d.length - 1) }, bindAxes: function () {
                var a =
                    this, b = a.options, c = a.chart, f; e(this, "bindAxes", null, function () { (a.axisTypes || []).forEach(function (d) { c[d].forEach(function (c) { f = c.options; if (b[d] === f.index || "undefined" !== typeof b[d] && b[d] === f.id || "undefined" === typeof b[d] && 0 === f.index) a.insert(c.series), a[d] = c, c.isDirty = !0 }); a[d] || a.optionalAxis === d || p(18, !0, c) }) }); e(this, "afterBindAxes")
            }, updateParallelArrays: function (d, b) {
                var c = d.series, e = arguments, f = a(b) ? function (a) { var e = "y" === a && c.toYData ? c.toYData(d) : d[a]; c[a + "Data"][b] = e } : function (a) {
                Array.prototype[b].apply(c[a +
                    "Data"], Array.prototype.slice.call(e, 2))
                }; c.parallelArrays.forEach(f)
            }, hasData: function () { return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length }, autoIncrement: function () {
                var a = this.options, b = this.xIncrement, c, e = a.pointIntervalUnit, f = this.chart.time; b = K(b, a.pointStart, 0); this.pointInterval = c = K(this.pointInterval, a.pointInterval, 1); e && (a = new f.Date(b), "day" === e ? f.set("Date", a, f.get("Date", a) + c) : "month" === e ? f.set("Month",
                    a, f.get("Month", a) + c) : "year" === e && f.set("FullYear", a, f.get("FullYear", a) + c), c = a.getTime() - b); this.xIncrement = b + c; return b
            }, setDataSortingOptions: function () { var a = this.options; k(this, { requireSorting: !1, sorted: !1, enabledDataSorting: !0, allowDG: !1 }); u(a.pointRange) || (a.pointRange = 1) }, setOptions: function (a) {
                var d = this.chart, b = d.options, c = b.plotOptions, f = d.userOptions || {}; a = E(a); d = d.styledMode; var l = { plotOptions: c, userOptions: a }; e(this, "setOptions", l); var k = l.plotOptions[this.type], g = f.plotOptions || {};
                this.userOptions = l.userOptions; f = E(k, c.series, f.plotOptions && f.plotOptions[this.type], a); this.tooltipOptions = E(r.tooltip, r.plotOptions.series && r.plotOptions.series.tooltip, r.plotOptions[this.type].tooltip, b.tooltip.userOptions, c.series && c.series.tooltip, c[this.type].tooltip, a.tooltip); this.stickyTracking = K(a.stickyTracking, g[this.type] && g[this.type].stickyTracking, g.series && g.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : f.stickyTracking); null === k.marker && delete f.marker;
                this.zoneAxis = f.zoneAxis; b = this.zones = (f.zones || []).slice(); !f.negativeColor && !f.negativeFillColor || f.zones || (c = { value: f[this.zoneAxis + "Threshold"] || f.threshold || 0, className: "highcharts-negative" }, d || (c.color = f.negativeColor, c.fillColor = f.negativeFillColor), b.push(c)); b.length && u(b[b.length - 1].value) && b.push(d ? {} : { color: this.color, fillColor: this.fillColor }); e(this, "afterSetOptions", { options: f }); return f
            }, getName: function () { return K(this.options.name, "Series " + (this.index + 1)) }, getCyclic: function (a,
                b, c) { var d = this.chart, e = this.userOptions, f = a + "Index", t = a + "Counter", l = c ? c.length : K(d.options.chart[a + "Count"], d[a + "Count"]); if (!b) { var k = K(e[f], e["_" + f]); u(k) || (d.series.length || (d[t] = 0), e["_" + f] = k = d[t] % l, d[t] += 1); c && (b = c[k]) } "undefined" !== typeof k && (this[f] = k); this[a] = b }, getColor: function () { this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || r.plotOptions[this.type].color, this.chart.options.colors) }, getPointsCollection: function () {
                    return (this.hasGroupedData ?
                        this.points : this.data) || []
                }, getSymbol: function () { this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols) }, findPointIndex: function (d, b) {
                    var e = d.id, f = d.x, t = this.points, l, k = this.options.dataSorting; if (e) var g = this.chart.get(e); else if (this.linkedParent || this.enabledDataSorting) { var h = k && k.matchByName ? "name" : "index"; g = c(t, function (a) { return !a.touched && a[h] === d[h] }); if (!g) return } if (g) { var p = g && g.index; "undefined" !== typeof p && (l = !0) } "undefined" === typeof p && a(f) && (p = this.xData.indexOf(f,
                        b)); -1 !== p && "undefined" !== typeof p && this.cropped && (p = p >= this.cropStart ? p - this.cropStart : p); !l && t[p] && t[p].touched && (p = void 0); return p
                }, drawLegendSymbol: z.drawLineMarker, updateData: function (d, b) {
                    var c = this.options, e = c.dataSorting, f = this.points, t = [], l, k, p, h = this.requireSorting, m = d.length === f.length, r = !0; this.xIncrement = null; d.forEach(function (d, b) {
                        var k = u(d) && this.pointClass.prototype.optionsToObject.call({ series: this }, d) || {}; var g = k.x; if (k.id || a(g)) {
                            if (g = this.findPointIndex(k, p), -1 === g || "undefined" ===
                                typeof g ? t.push(d) : f[g] && d !== c.data[g] ? (f[g].update(d, !1, null, !1), f[g].touched = !0, h && (p = g + 1)) : f[g] && (f[g].touched = !0), !m || b !== g || e && e.enabled || this.hasDerivedData) l = !0
                        } else t.push(d)
                    }, this); if (l) for (d = f.length; d--;)(k = f[d]) && !k.touched && k.remove && k.remove(!1, b); else !m || e && e.enabled ? r = !1 : (d.forEach(function (a, d) { f[d].update && a !== f[d].y && f[d].update(a, !1, null, !1) }), t.length = 0); f.forEach(function (a) { a && (a.touched = !1) }); if (!r) return !1; t.forEach(function (a) { this.addPoint(a, !1, null, null, !1) }, this); null ===
                        this.xIncrement && this.xData && this.xData.length && (this.xIncrement = g(this.xData), this.autoIncrement()); return !0
                }, setData: function (d, c, e, f) {
                    var t = this, l = t.points, k = l && l.length || 0, g, h = t.options, m = t.chart, r = h.dataSorting, n = null, u = t.xAxis; n = h.turboThreshold; var w = this.xData, v = this.yData, q = (g = t.pointArrayMap) && g.length, E = h.keys, C = 0, N = 1, J; d = d || []; g = d.length; c = K(c, !0); r && r.enabled && (d = this.sortData(d)); !1 !== f && g && k && !t.cropped && !t.hasGroupedData && t.visible && !t.isSeriesBoosting && (J = this.updateData(d, e)); if (!J) {
                    t.xIncrement =
                        null; t.colorCounter = 0; this.parallelArrays.forEach(function (a) { t[a + "Data"].length = 0 }); if (n && g > n) if (n = t.getFirstValidPoint(d), a(n)) for (e = 0; e < g; e++)w[e] = this.autoIncrement(), v[e] = d[e]; else if (b(n)) if (q) for (e = 0; e < g; e++)f = d[e], w[e] = f[0], v[e] = f.slice(1, q + 1); else for (E && (C = E.indexOf("x"), N = E.indexOf("y"), C = 0 <= C ? C : 0, N = 0 <= N ? N : 1), e = 0; e < g; e++)f = d[e], w[e] = f[C], v[e] = f[N]; else p(12, !1, m); else for (e = 0; e < g; e++)"undefined" !== typeof d[e] && (f = { series: t }, t.pointClass.prototype.applyOptions.apply(f, [d[e]]), t.updateParallelArrays(f,
                            e)); v && x(v[0]) && p(14, !0, m); t.data = []; t.options.data = t.userOptions.data = d; for (e = k; e--;)l[e] && l[e].destroy && l[e].destroy(); u && (u.minRange = u.userMinRange); t.isDirty = m.isDirtyBox = !0; t.isDirtyData = !!l; e = !1
                    } "point" === h.legendType && (this.processData(), this.generatePoints()); c && m.redraw(e)
                }, sortData: function (a) {
                    var d = this, b = d.options.dataSorting.sortKey || "y", c = function (a, d) { return u(d) && a.pointClass.prototype.optionsToObject.call({ series: a }, d) || {} }; a.forEach(function (b, e) { a[e] = c(d, b); a[e].index = e }, this);
                    a.concat().sort(function (a, d) { a = f(b, a); d = f(b, d); return d < a ? -1 : d > a ? 1 : 0 }).forEach(function (a, d) { a.x = d }, this); d.linkedSeries && d.linkedSeries.forEach(function (d) { var b = d.options, e = b.data; b.dataSorting && b.dataSorting.enabled || !e || (e.forEach(function (b, f) { e[f] = c(d, b); a[f] && (e[f].x = a[f].x, e[f].index = f) }), d.setData(e, !1)) }); return a
                }, getProcessedData: function (a) {
                    var d = this.xData, b = this.yData, c = d.length; var e = 0; var f = this.xAxis, l = this.options; var k = l.cropThreshold; var g = a || this.getExtremesFromAll || l.getExtremesFromAll,
                        h = this.isCartesian; a = f && f.val2lin; l = !(!f || !f.logarithmic); var m = this.requireSorting; if (f) { f = f.getExtremes(); var r = f.min; var n = f.max } if (h && this.sorted && !g && (!k || c > k || this.forceCrop)) if (d[c - 1] < r || d[0] > n) d = [], b = []; else if (this.yData && (d[0] < r || d[c - 1] > n)) { e = this.cropData(this.xData, this.yData, r, n); d = e.xData; b = e.yData; e = e.start; var u = !0 } for (k = d.length || 1; --k;)if (c = l ? a(d[k]) - a(d[k - 1]) : d[k] - d[k - 1], 0 < c && ("undefined" === typeof x || c < x)) var x = c; else 0 > c && m && (p(15, !1, this.chart), m = !1); return {
                            xData: d, yData: b, cropped: u,
                            cropStart: e, closestPointRange: x
                        }
                }, processData: function (a) { var d = this.xAxis; if (this.isCartesian && !this.isDirty && !d.isDirty && !this.yAxis.isDirty && !a) return !1; a = this.getProcessedData(); this.cropped = a.cropped; this.cropStart = a.cropStart; this.processedXData = a.xData; this.processedYData = a.yData; this.closestPointRange = this.basePointRange = a.closestPointRange }, cropData: function (a, b, c, e, f) {
                    var d = a.length, t = 0, l = d, k; f = K(f, this.cropShoulder); for (k = 0; k < d; k++)if (a[k] >= c) { t = Math.max(0, k - f); break } for (c = k; c < d; c++)if (a[c] >
                        e) { l = c + f; break } return { xData: a.slice(t, l), yData: b.slice(t, l), start: t, end: l }
                }, generatePoints: function () {
                    var a = this.options, b = a.data, c = this.data, f, l = this.processedXData, g = this.processedYData, p = this.pointClass, h = l.length, m = this.cropStart || 0, r = this.hasGroupedData; a = a.keys; var n = [], x; c || r || (c = [], c.length = b.length, c = this.data = c); a && r && (this.options.keys = !1); for (x = 0; x < h; x++) {
                        var u = m + x; if (r) {
                            var w = (new p).init(this, [l[x]].concat(R(g[x]))); w.dataGroup = this.groupMap[x]; w.dataGroup.options && (w.options = w.dataGroup.options,
                                k(w, w.dataGroup.options), delete w.dataLabels)
                        } else (w = c[u]) || "undefined" === typeof b[u] || (c[u] = w = (new p).init(this, b[u], l[x])); w && (w.index = u, n[x] = w)
                    } this.options.keys = a; if (c && (h !== (f = c.length) || r)) for (x = 0; x < f; x++)x !== m || r || (x += h), c[x] && (c[x].destroyElements(), c[x].plotX = void 0); this.data = c; this.points = n; e(this, "afterGeneratePoints")
                }, getXExtremes: function (a) { return { min: D(a), max: g(a) } }, getExtremes: function (d, c) {
                    var f = this.xAxis, t = this.yAxis, l = this.processedXData || this.xData, k = [], p = 0, h = 0; var m = 0; var r =
                        this.requireSorting ? this.cropShoulder : 0, x = t ? t.positiveValuesOnly : !1, n; d = d || this.stackedYData || this.processedYData || []; t = d.length; f && (m = f.getExtremes(), h = m.min, m = m.max); for (n = 0; n < t; n++) { var u = l[n]; var w = d[n]; var v = (a(w) || b(w)) && (w.length || 0 < w || !x); u = c || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !f || (l[n + r] || u) >= h && (l[n - r] || u) <= m; if (v && u) if (v = w.length) for (; v--;)a(w[v]) && (k[p++] = w[v]); else k[p++] = w } d = { dataMin: D(k), dataMax: g(k) }; e(this, "afterGetExtremes", { dataExtremes: d });
                    return d
                }, applyExtremes: function () { var a = this.getExtremes(); this.dataMin = a.dataMin; this.dataMax = a.dataMax; return a }, getFirstValidPoint: function (a) { for (var d = null, b = a.length, c = 0; null === d && c < b;)d = a[c], c++; return d }, translate: function () {
                this.processedXData || this.processData(); this.generatePoints(); var d = this.options, c = d.stacking, f = this.xAxis, l = f.categories, k = this.enabledDataSorting, g = this.yAxis, p = this.points, h = p.length, m = !!this.modifyValue, r, n = this.pointPlacementToXValue(), x = !!n, w = d.threshold, E = d.startFromThreshold ?
                    w : 0, q, C = this.zoneAxis || "y", N = Number.MAX_VALUE; for (r = 0; r < h; r++) {
                        var I = p[r], A = I.x, D = I.y, y = I.low, B = c && g.stacking && g.stacking.stacks[(this.negStacks && D < (E ? 0 : w) ? "-" : "") + this.stackKey]; if (g.positiveValuesOnly && !g.validatePositiveValue(D) || f.positiveValuesOnly && !f.validatePositiveValue(A)) I.isNull = !0; I.plotX = q = v(H(f.translate(A, 0, 0, 0, 1, n, "flags" === this.type), -1E5, 1E5)); if (c && this.visible && B && B[A]) { var R = this.getStackIndicator(R, A, this.index); if (!I.isNull) { var G = B[A]; var z = G.points[R.key] } } b(z) && (y = z[0],
                            D = z[1], y === E && R.key === B[A].base && (y = K(a(w) && w, g.min)), g.positiveValuesOnly && 0 >= y && (y = null), I.total = I.stackTotal = G.total, I.percentage = G.total && I.y / G.total * 100, I.stackY = D, this.irregularWidths || G.setOffset(this.pointXOffset || 0, this.barW || 0)); I.yBottom = u(y) ? H(g.translate(y, 0, 1, 0, 1), -1E5, 1E5) : null; m && (D = this.modifyValue(D, I)); I.plotY = "number" === typeof D && Infinity !== D ? H(g.translate(D, 0, 1, 0, 1), -1E5, 1E5) : void 0; I.isInside = this.isPointInside(I); I.clientX = x ? v(f.translate(A, 0, 0, 0, 1, n)) : q; I.negative = I[C] < (d[C +
                                "Threshold"] || w || 0); I.category = l && "undefined" !== typeof l[I.x] ? l[I.x] : I.x; if (!I.isNull && !1 !== I.visible) { "undefined" !== typeof F && (N = Math.min(N, Math.abs(q - F))); var F = q } I.zone = this.zones.length && I.getZone(); !I.graphic && this.group && k && (I.isNew = !0)
                    } this.closestPointRangePx = N; e(this, "afterTranslate")
                }, getValidPoints: function (a, b, c) { var d = this.chart; return (a || this.points || []).filter(function (a) { return b && !d.isInsidePlot(a.plotX, a.plotY, d.inverted) ? !1 : !1 !== a.visible && (c || !a.isNull) }) }, getClipBox: function (a,
                    b) { var d = this.options, c = this.chart, e = c.inverted, f = this.xAxis, t = f && this.yAxis, l = c.options.chart.scrollablePlotArea || {}; a && !1 === d.clip && t ? a = e ? { y: -c.chartWidth + t.len + t.pos, height: c.chartWidth, width: c.chartHeight, x: -c.chartHeight + f.len + f.pos } : { y: -t.pos, height: c.chartHeight, width: c.chartWidth, x: -f.pos } : (a = this.clipBox || c.clipBox, b && (a.width = c.plotSizeX, a.x = (c.scrollablePixelsX || 0) * (l.scrollPositionX || 0))); return b ? { width: a.width, x: a.x } : a }, setClip: function (a) {
                        var d = this.chart, b = this.options, c = d.renderer,
                        e = d.inverted, f = this.clipBox, l = this.getClipBox(a), k = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, l.height, b.xAxis, b.yAxis].join(), g = d[k], p = d[k + "m"]; a && (l.width = 0, e && (l.x = d.plotHeight + (!1 !== b.clip ? 0 : d.plotTop))); g ? d.hasLoaded || g.attr(l) : (a && (d[k + "m"] = p = c.clipRect(e ? d.plotSizeX + 99 : -99, e ? -d.plotLeft : -d.plotTop, 99, e ? d.chartWidth : d.chartHeight)), d[k] = g = c.clipRect(l), g.count = { length: 0 }); a && !g.count[this.index] && (g.count[this.index] = !0, g.count.length += 1); if (!1 !== b.clip || a) this.group.clip(a ||
                            f ? g : d.clipRect), this.markerGroup.clip(p), this.sharedClipKey = k; a || (g.count[this.index] && (delete g.count[this.index], --g.count.length), 0 === g.count.length && k && d[k] && (f || (d[k] = d[k].destroy()), d[k + "m"] && (d[k + "m"] = d[k + "m"].destroy())))
                    }, animate: function (a) { var d = this.chart, b = B(this.options.animation); if (!d.hasRendered) if (a) this.setClip(b); else { var c = this.sharedClipKey; a = d[c]; var e = this.getClipBox(b, !0); a && a.animate(e, b); d[c + "m"] && d[c + "m"].animate({ width: e.width + 99, x: e.x - (d.inverted ? 0 : 99) }, b) } }, afterAnimate: function () {
                        this.setClip();
                        e(this, "afterAnimate"); this.finishedAnimating = !0
                    }, drawPoints: function () {
                        var a = this.points, b = this.chart, c, e, f = this.options.marker, l = this[this.specialGroup] || this.markerGroup, k = this.xAxis, g = K(f.enabled, !k || k.isRadial ? !0 : null, this.closestPointRangePx >= f.enabledThreshold * f.radius); if (!1 !== f.enabled || this._hasPointMarkers) for (c = 0; c < a.length; c++) {
                            var p = a[c]; var h = (e = p.graphic) ? "animate" : "attr"; var m = p.marker || {}; var r = !!p.marker; if ((g && "undefined" === typeof m.enabled || m.enabled) && !p.isNull && !1 !== p.visible) {
                                var n =
                                    K(m.symbol, this.symbol); var x = this.markerAttribs(p, p.selected && "select"); this.enabledDataSorting && (p.startXPos = k.reversed ? -x.width : k.width); var w = !1 !== p.isInside; e ? e[w ? "show" : "hide"](w).animate(x) : w && (0 < x.width || p.hasImage) && (p.graphic = e = b.renderer.symbol(n, x.x, x.y, x.width, x.height, r ? m : f).add(l), this.enabledDataSorting && b.hasRendered && (e.attr({ x: p.startXPos }), h = "animate")); e && "animate" === h && e[w ? "show" : "hide"](w).animate(x); if (e && !b.styledMode) e[h](this.pointAttribs(p, p.selected && "select")); e && e.addClass(p.getClassName(),
                                        !0)
                            } else e && (p.graphic = e.destroy())
                        }
                    }, markerAttribs: function (a, b) { var d = this.options, c = d.marker, e = a.marker || {}, f = e.symbol || c.symbol, l = K(e.radius, c.radius); b && (c = c.states[b], b = e.states && e.states[b], l = K(b && b.radius, c && c.radius, l + (c && c.radiusPlus || 0))); a.hasImage = f && 0 === f.indexOf("url"); a.hasImage && (l = 0); a = { x: d.crisp ? Math.floor(a.plotX) - l : a.plotX - l, y: a.plotY - l }; l && (a.width = a.height = 2 * l); return a }, pointAttribs: function (a, b) {
                        var d = this.options.marker, c = a && a.options, e = c && c.marker || {}, f = this.color, l = c &&
                            c.color, t = a && a.color; c = K(e.lineWidth, d.lineWidth); var k = a && a.zone && a.zone.color; a = 1; f = l || k || t || f; l = e.fillColor || d.fillColor || f; f = e.lineColor || d.lineColor || f; b = b || "normal"; d = d.states[b]; b = e.states && e.states[b] || {}; c = K(b.lineWidth, d.lineWidth, c + K(b.lineWidthPlus, d.lineWidthPlus, 0)); l = b.fillColor || d.fillColor || l; f = b.lineColor || d.lineColor || f; a = K(b.opacity, d.opacity, a); return { stroke: f, "stroke-width": c, fill: l, opacity: a }
                    }, destroy: function (a) {
                        var d = this, b = d.chart, c = /AppleWebKit\/533/.test(w.navigator.userAgent),
                        f, l, k = d.data || [], g, p; e(d, "destroy"); this.removeEvents(a); (d.axisTypes || []).forEach(function (a) { (p = d[a]) && p.series && (A(p.series, d), p.isDirty = p.forceRedraw = !0) }); d.legendItem && d.chart.legend.destroyItem(d); for (l = k.length; l--;)(g = k[l]) && g.destroy && g.destroy(); d.points = null; G.clearTimeout(d.animationTimeout); C(d, function (a, d) { a instanceof M && !a.survive && (f = c && "group" === d ? "hide" : "destroy", a[f]()) }); b.hoverSeries === d && (b.hoverSeries = null); A(b.series, d); b.orderSeries(); C(d, function (b, c) {
                        a && "hcEvents" ===
                            c || delete d[c]
                        })
                    }, getGraphPath: function (a, b, c) {
                        var d = this, e = d.options, f = e.step, l, k = [], t = [], g; a = a || d.points; (l = a.reversed) && a.reverse(); (f = { right: 1, center: 2 }[f] || f && 3) && l && (f = 4 - f); a = this.getValidPoints(a, !1, !(e.connectNulls && !b && !c)); a.forEach(function (l, p) {
                            var h = l.plotX, m = l.plotY, r = a[p - 1]; (l.leftCliff || r && r.rightCliff) && !c && (g = !0); l.isNull && !u(b) && 0 < p ? g = !e.connectNulls : l.isNull && !b ? g = !0 : (0 === p || g ? p = [["M", l.plotX, l.plotY]] : d.getPointSpline ? p = [d.getPointSpline(a, l, p)] : f ? (p = 1 === f ? [["L", r.plotX, m]] : 2 ===
                                f ? [["L", (r.plotX + h) / 2, r.plotY], ["L", (r.plotX + h) / 2, m]] : [["L", h, r.plotY]], p.push(["L", h, m])) : p = [["L", h, m]], t.push(l.x), f && (t.push(l.x), 2 === f && t.push(l.x)), k.push.apply(k, p), g = !1)
                        }); k.xMap = t; return d.graphPath = k
                    }, drawGraph: function () {
                        var a = this, b = this.options, c = (this.gappedPath || this.getGraphPath).call(this), e = this.chart.styledMode, f = [["graph", "highcharts-graph"]]; e || f[0].push(b.lineColor || this.color || "#cccccc", b.dashStyle); f = a.getZonesGraphs(f); f.forEach(function (d, f) {
                            var l = d[0], k = a[l], t = k ? "animate" :
                                "attr"; k ? (k.endX = a.preventGraphAnimation ? null : c.xMap, k.animate({ d: c })) : c.length && (a[l] = k = a.chart.renderer.path(c).addClass(d[1]).attr({ zIndex: 1 }).add(a.group)); k && !e && (l = { stroke: d[2], "stroke-width": b.lineWidth, fill: a.fillGraph && a.color || "none" }, d[3] ? l.dashstyle = d[3] : "square" !== b.linecap && (l["stroke-linecap"] = l["stroke-linejoin"] = "round"), k[t](l).shadow(2 > f && b.shadow)); k && (k.startX = c.xMap, k.isArea = c.isArea)
                        })
                    }, getZonesGraphs: function (a) {
                        this.zones.forEach(function (d, b) {
                            b = ["zone-graph-" + b, "highcharts-graph highcharts-zone-graph-" +
                                b + " " + (d.className || "")]; this.chart.styledMode || b.push(d.color || this.color, d.dashStyle || this.options.dashStyle); a.push(b)
                        }, this); return a
                    }, applyZones: function () {
                        var a = this, b = this.chart, c = b.renderer, e = this.zones, f, l, k = this.clips || [], g, p = this.graph, h = this.area, m = Math.max(b.chartWidth, b.chartHeight), r = this[(this.zoneAxis || "y") + "Axis"], x = b.inverted, n, w, u, v = !1, q, E; if (e.length && (p || h) && r && "undefined" !== typeof r.min) {
                            var C = r.reversed; var N = r.horiz; p && !this.showLine && p.hide(); h && h.hide(); var I = r.getExtremes();
                            e.forEach(function (d, e) {
                                f = C ? N ? b.plotWidth : 0 : N ? 0 : r.toPixels(I.min) || 0; f = H(K(l, f), 0, m); l = H(Math.round(r.toPixels(K(d.value, I.max), !0) || 0), 0, m); v && (f = l = r.toPixels(I.max)); n = Math.abs(f - l); w = Math.min(f, l); u = Math.max(f, l); r.isXAxis ? (g = { x: x ? u : w, y: 0, width: n, height: m }, N || (g.x = b.plotHeight - g.x)) : (g = { x: 0, y: x ? u : w, width: m, height: n }, N && (g.y = b.plotWidth - g.y)); x && c.isVML && (g = r.isXAxis ? { x: 0, y: C ? w : u, height: g.width, width: b.chartWidth } : { x: g.y - b.plotLeft - b.spacingBox.x, y: 0, width: g.height, height: b.chartHeight }); k[e] ? k[e].animate(g) :
                                    k[e] = c.clipRect(g); q = a["zone-area-" + e]; E = a["zone-graph-" + e]; p && E && E.clip(k[e]); h && q && q.clip(k[e]); v = d.value > I.max; a.resetZones && 0 === l && (l = void 0)
                            }); this.clips = k
                        } else a.visible && (p && p.show(!0), h && h.show(!0))
                    }, invertGroups: function (a) {
                        function d() { ["group", "markerGroup"].forEach(function (d) { b[d] && (c.renderer.isVML && b[d].attr({ width: b.yAxis.len, height: b.xAxis.len }), b[d].width = b.yAxis.len, b[d].height = b.xAxis.len, b[d].invert(b.isRadialSeries ? !1 : a)) }) } var b = this, c = b.chart; b.xAxis && (b.eventsToUnbind.push(m(c,
                            "resize", d)), d(), b.invertGroups = d)
                    }, plotGroup: function (a, b, c, e, f) {
                        var d = this[a], l = !d; c = { visibility: c, zIndex: e || .1 }; "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c.opacity = this.opacity); l && (this[a] = d = this.chart.renderer.g().add(f)); d.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (u(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (d.hasClass("highcharts-tracker") ? " highcharts-tracker" :
                            ""), !0); d.attr(c)[l ? "attr" : "animate"](this.getPlotBox()); return d
                    }, getPlotBox: function () { var a = this.chart, b = this.xAxis, c = this.yAxis; a.inverted && (b = c, c = this.xAxis); return { translateX: b ? b.left : a.plotLeft, translateY: c ? c.top : a.plotTop, scaleX: 1, scaleY: 1 } }, removeEvents: function (a) { a ? this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function (a) { a() }), this.eventsToUnbind.length = 0) : T(this) }, render: function () {
                        var a = this, b = a.chart, c = a.options, f = B(c.animation), l = !a.finishedAnimating && b.renderer.isSVG &&
                            f.duration, k = a.visible ? "inherit" : "hidden", g = c.zIndex, p = a.hasRendered, h = b.seriesGroup, m = b.inverted; e(this, "render"); var r = a.plotGroup("group", "series", k, g, h); a.markerGroup = a.plotGroup("markerGroup", "markers", k, g, h); l && a.animate && a.animate(!0); r.inverted = a.isCartesian || a.invertable ? m : !1; a.drawGraph && (a.drawGraph(), a.applyZones()); a.visible && a.drawPoints(); a.drawDataLabels && a.drawDataLabels(); a.redrawPoints && a.redrawPoints(); a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker(); a.invertGroups(m);
                        !1 === c.clip || a.sharedClipKey || p || r.clip(b.clipRect); l && a.animate && a.animate(); p || (l && f.defer && (l += f.defer), a.animationTimeout = N(function () { a.afterAnimate() }, l || 0)); a.isDirty = !1; a.hasRendered = !0; e(a, "afterRender")
                    }, redraw: function () {
                        var a = this.chart, b = this.isDirty || this.isDirtyData, c = this.group, e = this.xAxis, f = this.yAxis; c && (a.inverted && c.attr({ width: a.plotWidth, height: a.plotHeight }), c.animate({ translateX: K(e && e.left, a.plotLeft), translateY: K(f && f.top, a.plotTop) })); this.translate(); this.render(); b &&
                            delete this.kdTree
                    }, kdAxisArray: ["clientX", "plotY"], searchPoint: function (a, b) { var d = this.xAxis, c = this.yAxis, e = this.chart.inverted; return this.searchKDTree({ clientX: e ? d.len - a.chartY + d.pos : a.chartX - d.pos, plotY: e ? c.len - a.chartX + c.pos : a.chartY - c.pos }, b, a) }, buildKDTree: function (a) {
                        function b(a, c, e) { var f; if (f = a && a.length) { var l = d.kdAxisArray[c % e]; a.sort(function (a, b) { return a[l] - b[l] }); f = Math.floor(f / 2); return { point: a[f], left: b(a.slice(0, f), c + 1, e), right: b(a.slice(f + 1), c + 1, e) } } } this.buildingKdTree = !0; var d =
                            this, c = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1; delete d.kdTree; N(function () { d.kdTree = b(d.getValidPoints(null, !d.directTouch), c, c); d.buildingKdTree = !1 }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1)
                    }, searchKDTree: function (a, b, c) {
                        function d(a, b, c, g) {
                            var t = b.point, p = e.kdAxisArray[c % g], h = t; var m = u(a[f]) && u(t[f]) ? Math.pow(a[f] - t[f], 2) : null; var r = u(a[l]) && u(t[l]) ? Math.pow(a[l] - t[l], 2) : null; r = (m || 0) + (r || 0); t.dist = u(r) ? Math.sqrt(r) : Number.MAX_VALUE; t.distX = u(m) ? Math.sqrt(m) : Number.MAX_VALUE; p = a[p] -
                                t[p]; r = 0 > p ? "left" : "right"; m = 0 > p ? "right" : "left"; b[r] && (r = d(a, b[r], c + 1, g), h = r[k] < h[k] ? r : t); b[m] && Math.sqrt(p * p) < h[k] && (a = d(a, b[m], c + 1, g), h = a[k] < h[k] ? a : h); return h
                        } var e = this, f = this.kdAxisArray[0], l = this.kdAxisArray[1], k = b ? "distX" : "dist"; b = -1 < e.options.findNearestPointBy.indexOf("y") ? 2 : 1; this.kdTree || this.buildingKdTree || this.buildKDTree(c); if (this.kdTree) return d(a, this.kdTree, b, b)
                    }, pointPlacementToXValue: function () {
                        var b = this.options, c = b.pointRange, e = this.xAxis; b = b.pointPlacement; "between" === b && (b =
                            e.reversed ? -.5 : .5); return a(b) ? b * K(c, e.pointRange) : 0
                    }, isPointInside: function (a) { return "undefined" !== typeof a.plotY && "undefined" !== typeof a.plotX && 0 <= a.plotY && a.plotY <= this.yAxis.len && 0 <= a.plotX && a.plotX <= this.xAxis.len }
        }); ""; return n
    }); O(q, "Series/LineSeries.js", [q["Core/Series/CartesianSeries.js"], q["Core/Globals.js"]], function (n, h) { h.Series = n; return h.Series }); O(q, "Extensions/Stacking.js", [q["Core/Axis/Axis.js"], q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Core/Axis/StackingAxis.js"], q["Core/Utilities.js"]],
        function (n, h, q, z, y) {
            var F = y.correctFloat, L = y.defined, G = y.destroyObjectProperties, B = y.format, r = y.isNumber, m = y.pick; ""; var g = q.Series, D = function () {
                function h(g, h, m, p, k) {
                    var c = g.chart.inverted; this.axis = g; this.isNegative = m; this.options = h = h || {}; this.x = p; this.total = null; this.points = {}; this.hasValidPoints = !1; this.stack = k; this.rightCliff = this.leftCliff = 0; this.alignOptions = { align: h.align || (c ? m ? "left" : "right" : "center"), verticalAlign: h.verticalAlign || (c ? "middle" : m ? "bottom" : "top"), y: h.y, x: h.x }; this.textAlign =
                        h.textAlign || (c ? m ? "right" : "left" : "center")
                } h.prototype.destroy = function () { G(this, this.axis) }; h.prototype.render = function (g) {
                    var h = this.axis.chart, r = this.options, p = r.format; p = p ? B(p, this, h) : r.formatter.call(this); this.label ? this.label.attr({ text: p, visibility: "hidden" }) : (this.label = h.renderer.label(p, null, null, r.shape, null, null, r.useHTML, !1, "stack-labels"), p = { r: r.borderRadius || 0, text: p, rotation: r.rotation, padding: m(r.padding, 5), visibility: "hidden" }, h.styledMode || (p.fill = r.backgroundColor, p.stroke = r.borderColor,
                        p["stroke-width"] = r.borderWidth, this.label.css(r.style)), this.label.attr(p), this.label.added || this.label.add(g)); this.label.labelrank = h.plotHeight
                }; h.prototype.setOffset = function (h, n, q, p, k) {
                    var c = this.axis, e = c.chart; p = c.translate(c.stacking.usePercentage ? 100 : p ? p : this.total, 0, 0, 0, 1); q = c.translate(q ? q : 0); q = L(p) && Math.abs(p - q); h = m(k, e.xAxis[0].translate(this.x)) + h; c = L(p) && this.getStackBox(e, this, h, p, n, q, c); n = this.label; q = this.isNegative; h = "justify" === m(this.options.overflow, "justify"); var f = this.textAlign;
                    n && c && (k = n.getBBox(), p = n.padding, f = "left" === f ? e.inverted ? -p : p : "right" === f ? k.width : e.inverted && "center" === f ? k.width / 2 : e.inverted ? q ? k.width + p : -p : k.width / 2, q = e.inverted ? k.height / 2 : q ? -p : k.height, this.alignOptions.x = m(this.options.x, 0), this.alignOptions.y = m(this.options.y, 0), c.x -= f, c.y -= q, n.align(this.alignOptions, null, c), e.isInsidePlot(n.alignAttr.x + f - this.alignOptions.x, n.alignAttr.y + q - this.alignOptions.y) ? n.show() : (n.alignAttr.y = -9999, h = !1), h && g.prototype.justifyDataLabel.call(this.axis, n, this.alignOptions,
                        n.alignAttr, k, c), n.attr({ x: n.alignAttr.x, y: n.alignAttr.y }), m(!h && this.options.crop, !0) && ((e = r(n.x) && r(n.y) && e.isInsidePlot(n.x - p + n.width, n.y) && e.isInsidePlot(n.x + p, n.y)) || n.hide()))
                }; h.prototype.getStackBox = function (g, h, m, p, k, c, e) { var f = h.axis.reversed, b = g.inverted, l = e.height + e.pos - (b ? g.plotLeft : g.plotTop); h = h.isNegative && !f || !h.isNegative && f; return { x: b ? h ? p - e.right : p - c + e.pos - g.plotLeft : m + g.xAxis[0].transB - g.plotLeft, y: b ? e.height - m - k : h ? l - p - c : l - p, width: b ? c : k, height: b ? k : c } }; return h
            }(); h.prototype.getStacks =
                function () { var g = this, h = g.inverted; g.yAxis.forEach(function (g) { g.stacking && g.stacking.stacks && g.hasVisibleSeries && (g.stacking.oldStacks = g.stacking.stacks) }); g.series.forEach(function (r) { var n = r.xAxis && r.xAxis.options || {}; !r.options.stacking || !0 !== r.visible && !1 !== g.options.chart.ignoreHiddenSeries || (r.stackKey = [r.type, m(r.options.stack, ""), h ? n.top : n.left, h ? n.height : n.width].join()) }) }; z.compose(n); g.prototype.setGroupedPoints = function () {
                    this.options.centerInCategory && (this.is("column") || this.is("columnrange")) &&
                    !this.options.stacking && 1 < this.chart.series.length && g.prototype.setStackedPoints.call(this, "group")
                }; g.prototype.setStackedPoints = function (g) {
                    var h = g || this.options.stacking; if (h && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                        var r = this.processedXData, n = this.processedYData, p = [], k = n.length, c = this.options, e = c.threshold, f = m(c.startFromThreshold && e, 0); c = c.stack; g = g ? this.type + "," + h : this.stackKey; var b = "-" + g, l = this.negStacks, a = this.yAxis, x = a.stacking.stacks, q = a.stacking.oldStacks,
                            C, K; a.stacking.stacksTouched += 1; for (K = 0; K < k; K++) {
                                var H = r[K]; var y = n[K]; var N = this.getStackIndicator(N, H, this.index); var I = N.key; var w = (C = l && y < (f ? 0 : e)) ? b : g; x[w] || (x[w] = {}); x[w][H] || (q[w] && q[w][H] ? (x[w][H] = q[w][H], x[w][H].total = null) : x[w][H] = new D(a, a.options.stackLabels, C, H, c)); w = x[w][H]; null !== y ? (w.points[I] = w.points[this.index] = [m(w.cumulative, f)], L(w.cumulative) || (w.base = I), w.touched = a.stacking.stacksTouched, 0 < N.index && !1 === this.singleStacks && (w.points[I][0] = w.points[this.index + "," + H + ",0"][0])) :
                                    w.points[I] = w.points[this.index] = null; "percent" === h ? (C = C ? g : b, l && x[C] && x[C][H] ? (C = x[C][H], w.total = C.total = Math.max(C.total, w.total) + Math.abs(y) || 0) : w.total = F(w.total + (Math.abs(y) || 0))) : "group" === h ? null !== y && (w.total = (w.total || 0) + 1) : w.total = F(w.total + (y || 0)); w.cumulative = "group" === h ? (w.total || 1) - 1 : m(w.cumulative, f) + (y || 0); null !== y && (w.points[I].push(w.cumulative), p[K] = w.cumulative, w.hasValidPoints = !0)
                            } "percent" === h && (a.stacking.usePercentage = !0); "group" !== h && (this.stackedYData = p); a.stacking.oldStacks =
                                {}
                    }
                }; g.prototype.modifyStacks = function () { var g = this, h = g.stackKey, m = g.yAxis.stacking.stacks, r = g.processedXData, p, k = g.options.stacking; g[k + "Stacker"] && [h, "-" + h].forEach(function (c) { for (var e = r.length, f, b; e--;)if (f = r[e], p = g.getStackIndicator(p, f, g.index, c), b = (f = m[c] && m[c][f]) && f.points[p.key]) g[k + "Stacker"](b, f, e) }) }; g.prototype.percentStacker = function (g, h, m) { h = h.total ? 100 / h.total : 0; g[0] = F(g[0] * h); g[1] = F(g[1] * h); this.stackedYData[m] = g[1] }; g.prototype.getStackIndicator = function (g, h, m, r) {
                !L(g) || g.x !==
                    h || r && g.key !== r ? g = { x: h, index: 0, key: r } : g.index++; g.key = [m, h, g.index].join(); return g
                }; q.StackItem = D; return q.StackItem
        }); O(q, "Core/Dynamics.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Axis/Axis.js"], q["Core/Series/Series.js"], q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Series/LineSeries.js"], q["Core/Options.js"], q["Core/Series/Point.js"], q["Core/Time.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M, G, B, r) {
            var m = n.animate, g = n.setAnimation, D = q.seriesTypes, H = M.time, v = r.addEvent, u = r.createElement,
            A = r.css, p = r.defined, k = r.erase, c = r.error, e = r.extend, f = r.fireEvent, b = r.isArray, l = r.isNumber, a = r.isObject, x = r.isString, E = r.merge, C = r.objectEach, K = r.pick, T = r.relativeLength, R = r.splat; y.cleanRecursively = function (b, c) { var e = {}; C(b, function (d, f) { if (a(b[f], !0) && !b.nodeType && c[f]) d = y.cleanRecursively(b[f], c[f]), Object.keys(d).length && (e[f] = d); else if (a(b[f]) || b[f] !== c[f]) e[f] = b[f] }); return e }; e(z.prototype, {
                addSeries: function (a, b, c) {
                    var d, e = this; a && (b = K(b, !0), f(e, "addSeries", { options: a }, function () {
                        d = e.initSeries(a);
                        e.isDirtyLegend = !0; e.linkSeries(); d.enabledDataSorting && d.setData(a.data, !1); f(e, "afterAddSeries", { series: d }); b && e.redraw(c)
                    })); return d
                }, addAxis: function (a, b, c, d) { return this.createAxis(b ? "xAxis" : "yAxis", { axis: a, redraw: c, animation: d }) }, addColorAxis: function (a, b, c) { return this.createAxis("colorAxis", { axis: a, redraw: b, animation: c }) }, createAxis: function (a, b) {
                    var c = this.options, d = "colorAxis" === a, e = b.redraw, f = b.animation; b = E(b.axis, { index: this[a].length, isX: "xAxis" === a }); var l = d ? new y.ColorAxis(this, b) :
                        new h(this, b); c[a] = R(c[a] || {}); c[a].push(b); d && (this.isDirtyLegend = !0, this.axes.forEach(function (a) { a.series = [] }), this.series.forEach(function (a) { a.bindAxes(); a.isDirtyData = !0 })); K(e, !0) && this.redraw(f); return l
                }, showLoading: function (a) {
                    var b = this, c = b.options, d = b.loadingDiv, f = c.loading, l = function () { d && A(d, { left: b.plotLeft + "px", top: b.plotTop + "px", width: b.plotWidth + "px", height: b.plotHeight + "px" }) }; d || (b.loadingDiv = d = u("div", { className: "highcharts-loading highcharts-loading-hidden" }, null, b.container),
                        b.loadingSpan = u("span", { className: "highcharts-loading-inner" }, null, d), v(b, "redraw", l)); d.className = "highcharts-loading"; b.loadingSpan.innerHTML = K(a, c.lang.loading, ""); b.styledMode || (A(d, e(f.style, { zIndex: 10 })), A(b.loadingSpan, f.labelStyle), b.loadingShown || (A(d, { opacity: 0, display: "" }), m(d, { opacity: f.style.opacity || .5 }, { duration: f.showDuration || 0 }))); b.loadingShown = !0; l()
                }, hideLoading: function () {
                    var a = this.options, b = this.loadingDiv; b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode ||
                        m(b, { opacity: 0 }, { duration: a.loading.hideDuration || 100, complete: function () { A(b, { display: "none" }) } })); this.loadingShown = !1
                }, propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "), propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "), propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
                collectionsWithUpdate: ["xAxis", "yAxis", "zAxis", "series"], update: function (a, b, c, d) {
                    var e = this,  k, h, m, r = a.isResponsiveOptions, n = []; f(e, "update", { options: a }); r || e.setResponsive(!1, !0); a = y.cleanRecursively(a, e.options); E(!0, e.userOptions, a); if (k = a.chart) {
                        E(!0, e.options.chart, k); "className" in k && e.setClassName(k.className); "reflow" in k && e.setReflow(k.reflow); if ("inverted" in k || "polar" in k || "type" in k) {
                            e.propFromSeries();
                            var w = !0
                        } "alignTicks" in k && (w = !0); C(k, function (a, b) { -1 !== e.propsRequireUpdateSeries.indexOf("chart." + b) && (h = !0); -1 !== e.propsRequireDirtyBox.indexOf(b) && (e.isDirtyBox = !0); -1 !== e.propsRequireReflow.indexOf(b) && (r ? e.isDirtyBox = !0 : m = !0) }); !e.styledMode && "style" in k && e.renderer.setStyle(k.style)
                    } !e.styledMode && a.colors && (this.options.colors = a.colors); a.time && (this.time === H && (this.time = new B(a.time)), E(!0, e.options.time, a.time)); C(a, function (b, c) {
                        if (e[c] && "function" === typeof e[c].update) e[c].update(b, !1);
                        else if ("function" === typeof e[g[c]]) e[g[c]](b); else "color" !== c && -1 === e.collectionsWithUpdate.indexOf(c) && E(!0, e.options[c], a[c]); "chart" !== c && -1 !== e.propsRequireUpdateSeries.indexOf(c) && (h = !0)
                    }); this.collectionsWithUpdate.forEach(function (b) {
                        if (a[b]) {
                            if ("series" === b) { var d = []; e[b].forEach(function (a, b) { a.options.isInternal || d.push(K(a.options.index, b)) }) } R(a[b]).forEach(function (a, f) {
                                var l = p(a.id), k; l && (k = e.get(a.id)); k || (k = e[b][d ? d[f] : f]) && l && p(k.options.id) && (k = void 0); k && k.coll === b && (k.update(a,
                                    !1), c && (k.touched = !0)); !k && c && e.collectionsWithInit[b] && (e.collectionsWithInit[b][0].apply(e, [a].concat(e.collectionsWithInit[b][1] || []).concat([!1])).touched = !0)
                            }); c && e[b].forEach(function (a) { a.touched || a.options.isInternal ? delete a.touched : n.push(a) })
                        }
                    }); n.forEach(function (a) { a.remove && a.remove(!1) }); w && e.axes.forEach(function (a) { a.update({}, !1) }); h && e.getSeriesOrderByLinks().forEach(function (a) { a.chart && a.update({}, !1) }, this); w = k && k.width; k = k && k.height; x(k) && (k = T(k, w || e.chartWidth)); m || l(w) && w !==
                        e.chartWidth || l(k) && k !== e.chartHeight ? e.setSize(w, k, d) : K(b, !0) && e.redraw(d); f(e, "afterUpdate", { options: a, redraw: b, animation: d })
                }, setSubtitle: function (a, b) { this.applyDescription("subtitle", a); this.layOutTitles(b) }, setCaption: function (a, b) { this.applyDescription("caption", a); this.layOutTitles(b) }
            }); z.prototype.collectionsWithInit = { xAxis: [z.prototype.addAxis, [!0]], yAxis: [z.prototype.addAxis, [!1]], series: [z.prototype.addSeries] }; e(G.prototype, {
                update: function (b, c, e, d) {
                    function f() {
                        l.applyOptions(b); var d =
                            g && l.hasDummyGraphic; d = null === l.y ? !d : d; g && d && (l.graphic = g.destroy(), delete l.hasDummyGraphic); a(b, !0) && (g && g.element && b && b.marker && "undefined" !== typeof b.marker.symbol && (l.graphic = g.destroy()), b && b.dataLabels && l.dataLabel && (l.dataLabel = l.dataLabel.destroy()), l.connector && (l.connector = l.connector.destroy())); h = l.index; k.updateParallelArrays(l, h); m.data[h] = a(m.data[h], !0) || a(b, !0) ? l.options : K(b, m.data[h]); k.isDirty = k.isDirtyData = !0; !k.fixedBox && k.hasCartesianSeries && (p.isDirtyBox = !0); "point" === m.legendType &&
                                (p.isDirtyLegend = !0); c && p.redraw(e)
                    } var l = this, k = l.series, g = l.graphic, h, p = k.chart, m = k.options; c = K(c, !0); !1 === d ? f() : l.firePointEvent("update", { options: b }, f)
                }, remove: function (a, b) { this.series.removePoint(this.series.data.indexOf(this), a, b) }
            }); e(F.prototype, {
                addPoint: function (a, b, c, d, e) {
                    var l = this.options, k = this.data, g = this.chart, h = this.xAxis; h = h && h.hasNames && h.names; var p = l.data, t = this.xData, m; b = K(b, !0); var r = { series: this }; this.pointClass.prototype.applyOptions.apply(r, [a]); var n = r.x; var x = t.length;
                    if (this.requireSorting && n < t[x - 1]) for (m = !0; x && t[x - 1] > n;)x--; this.updateParallelArrays(r, "splice", x, 0, 0); this.updateParallelArrays(r, x); h && r.name && (h[n] = r.name); p.splice(x, 0, a); m && (this.data.splice(x, 0, null), this.processData()); "point" === l.legendType && this.generatePoints(); c && (k[0] && k[0].remove ? k[0].remove(!1) : (k.shift(), this.updateParallelArrays(r, "shift"), p.shift())); !1 !== e && f(this, "addPoint", { point: r }); this.isDirtyData = this.isDirty = !0; b && g.redraw(d)
                }, removePoint: function (a, b, c) {
                    var d = this, e = d.data,
                    f = e[a], l = d.points, k = d.chart, h = function () { l && l.length === e.length && l.splice(a, 1); e.splice(a, 1); d.options.data.splice(a, 1); d.updateParallelArrays(f || { series: d }, "splice", a, 1); f && f.destroy(); d.isDirty = !0; d.isDirtyData = !0; b && k.redraw() }; g(c, k); b = K(b, !0); f ? f.firePointEvent("remove", null, h) : h()
                }, remove: function (a, b, c, d) { function e() { l.destroy(d); l.remove = null; k.isDirtyLegend = k.isDirtyBox = !0; k.linkSeries(); K(a, !0) && k.redraw(b) } var l = this, k = l.chart; !1 !== c ? f(l, "remove", null, e) : e() }, update: function (a, b) {
                    a = y.cleanRecursively(a,
                        this.userOptions); f(this, "update", { options: a }); var l = this, d = l.chart, k = l.userOptions, g = l.initialType || l.type, h = d.options.plotOptions, p = a.type || k.type || d.options.chart.type, m = !(this.hasDerivedData || p && p !== this.type || "undefined" !== typeof a.pointStart || "undefined" !== typeof a.pointInterval || l.hasOptionChanged("dataGrouping") || l.hasOptionChanged("pointStart") || l.hasOptionChanged("pointInterval") || l.hasOptionChanged("pointIntervalUnit") || l.hasOptionChanged("keys")), r = D[g].prototype, n, x = ["eventOptions", "navigatorSeries",
                            "baseSeries"], q = l.finishedAnimating && { animation: !1 }, u = {}; m && (x.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a.visible && x.push("area", "graph"), l.parallelArrays.forEach(function (a) { x.push(a + "Data") }), a.data && (a.dataSorting && e(l.options.dataSorting, a.dataSorting), this.setData(a.data, !1))); a = E(k, q, {
                                index: "undefined" === typeof k.index ? l.index : k.index, pointStart: K(h && h.series &&
                                    h.series.pointStart, k.pointStart, l.xData[0])
                            }, !m && { data: l.options.data }, a); m && a.data && (a.data = l.options.data); x = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"].concat(x); x.forEach(function (a) { x[a] = l[a]; delete l[a] }); l.remove(!1, null, !1, !0); for (n in r) l[n] = void 0; D[p || g] ? e(l, D[p || g].prototype) : c(17, !0, d, { missingModuleFor: p || g }); x.forEach(function (a) { l[a] = x[a] }); l.init(d, a); if (m && this.points) {
                                var C = l.options; !1 === C.visible ? (u.graphic = 1, u.dataLabel = 1) : l._hasPointLabels || (a = C.marker, k = C.dataLabels,
                                    a && (!1 === a.enabled || "symbol" in a) && (u.graphic = 1), k && !1 === k.enabled && (u.dataLabel = 1)); this.points.forEach(function (a) { a && a.series && (a.resolveColor(), Object.keys(u).length && a.destroyElements(u), !1 === C.showInLegend && a.legendItem && d.legend.destroyItem(a)) }, this)
                            } l.initialType = g; d.linkSeries(); f(this, "afterUpdate"); K(b, !0) && d.redraw(m ? void 0 : !1)
                }, setName: function (a) { this.name = this.options.name = this.userOptions.name = a; this.chart.isDirtyLegend = !0 }, hasOptionChanged: function (a) {
                    var b = this.options[a], c = this.chart.options.plotOptions,
                    d = this.userOptions[a]; return d ? b !== d : b !== K(c && c[this.type] && c[this.type][a], c && c.series && c.series[a], b)
                }
            }); e(h.prototype, {
                update: function (a, b) { var c = this.chart, d = a && a.events || {}; a = E(this.userOptions, a); c.options[this.coll].indexOf && (c.options[this.coll][c.options[this.coll].indexOf(this.userOptions)] = a); C(c.options[this.coll].events, function (a, b) { "undefined" === typeof d[b] && (d[b] = void 0) }); this.destroy(!0); this.init(c, e(a, { events: d })); c.isDirtyBox = !0; K(b, !0) && c.redraw() }, remove: function (a) {
                    for (var c =
                        this.chart, e = this.coll, d = this.series, f = d.length; f--;)d[f] && d[f].remove(!1); k(c.axes, this); k(c[e], this); b(c.options[e]) ? c.options[e].splice(this.options.index, 1) : delete c.options[e]; c[e].forEach(function (a, b) { a.options.index = a.userOptions.index = b }); this.destroy(); c.isDirtyBox = !0; K(a, !0) && c.redraw()
                }, setTitle: function (a, b) { this.update({ title: a }, b) }, setCategories: function (a, b) { this.update({ categories: a }, b) }
            })
        }); O(q, "Series/AreaSeries.js", [q["Core/Series/Series.js"], q["Core/Color/Color.js"], q["Core/Globals.js"],
        q["Mixins/LegendSymbol.js"], q["Core/Utilities.js"]], function (n, h, q, z, y) {
            var F = h.parse, L = y.objectEach, G = y.pick, B = q.Series; n.seriesType("area", "line", { threshold: 0 }, {
                singleStacks: !1, getStackPoints: function (h) {
                    var m = [], g = [], r = this.xAxis, n = this.yAxis, q = n.stacking.stacks[this.stackKey], u = {}, A = this.index, p = n.series, k = p.length, c = G(n.options.reversedStacks, !0) ? 1 : -1, e; h = h || this.points; if (this.options.stacking) {
                        for (e = 0; e < h.length; e++)h[e].leftNull = h[e].rightNull = void 0, u[h[e].x] = h[e]; L(q, function (b, c) {
                        null !==
                            b.total && g.push(c)
                        }); g.sort(function (b, c) { return b - c }); var f = p.map(function (b) { return b.visible }); g.forEach(function (b, l) {
                            var a = 0, h, p; if (u[b] && !u[b].isNull) m.push(u[b]), [-1, 1].forEach(function (a) { var m = 1 === a ? "rightNull" : "leftNull", r = 0, n = q[g[l + a]]; if (n) for (e = A; 0 <= e && e < k;)h = n.points[e], h || (e === A ? u[b][m] = !0 : f[e] && (p = q[b].points[e]) && (r -= p[1] - p[0])), e += c; u[b][1 === a ? "rightCliff" : "leftCliff"] = r }); else {
                                for (e = A; 0 <= e && e < k;) { if (h = q[b].points[e]) { a = h[1]; break } e += c } a = n.translate(a, 0, 1, 0, 1); m.push({
                                    isNull: !0,
                                    plotX: r.translate(b, 0, 0, 0, 1), x: b, plotY: a, yBottom: a
                                })
                            }
                        })
                    } return m
                }, getGraphPath: function (h) {
                    var m = B.prototype.getGraphPath, g = this.options, r = g.stacking, n = this.yAxis, q, u = [], A = [], p = this.index, k = n.stacking.stacks[this.stackKey], c = g.threshold, e = Math.round(n.getThreshold(g.threshold)); g = G(g.connectNulls, "percent" === r); var f = function (a, b, f) {
                        var g = h[a]; a = r && k[g.x].points[p]; var m = g[f + "Null"] || 0; f = g[f + "Cliff"] || 0; g = !0; if (f || m) { var x = (m ? a[0] : a[1]) + f; var q = a[0] + f; g = !!m } else !r && h[b] && h[b].isNull && (x = q = c); "undefined" !==
                            typeof x && (A.push({ plotX: l, plotY: null === x ? e : n.getThreshold(x), isNull: g, isCliff: !0 }), u.push({ plotX: l, plotY: null === q ? e : n.getThreshold(q), doCurve: !1 }))
                    }; h = h || this.points; r && (h = this.getStackPoints(h)); for (q = 0; q < h.length; q++) { r || (h[q].leftCliff = h[q].rightCliff = h[q].leftNull = h[q].rightNull = void 0); var b = h[q].isNull; var l = G(h[q].rectPlotX, h[q].plotX); var a = r ? h[q].yBottom : e; if (!b || g) g || f(q, q - 1, "left"), b && !r && g || (A.push(h[q]), u.push({ x: q, plotX: l, plotY: a })), g || f(q, q + 1, "right") } q = m.call(this, A, !0, !0); u.reversed =
                        !0; b = m.call(this, u, !0, !0); (a = b[0]) && "M" === a[0] && (b[0] = ["L", a[1], a[2]]); b = q.concat(b); m = m.call(this, A, !1, g); b.xMap = q.xMap; this.areaPath = b; return m
                }, drawGraph: function () {
                this.areaPath = []; B.prototype.drawGraph.apply(this); var h = this, m = this.areaPath, g = this.options, n = [["area", "highcharts-area", this.color, g.fillColor]]; this.zones.forEach(function (m, r) { n.push(["zone-area-" + r, "highcharts-area highcharts-zone-area-" + r + " " + m.className, m.color || h.color, m.fillColor || g.fillColor]) }); n.forEach(function (r) {
                    var n =
                        r[0], q = h[n], A = q ? "animate" : "attr", p = {}; q ? (q.endX = h.preventGraphAnimation ? null : m.xMap, q.animate({ d: m })) : (p.zIndex = 0, q = h[n] = h.chart.renderer.path(m).addClass(r[1]).add(h.group), q.isArea = !0); h.chart.styledMode || (p.fill = G(r[3], F(r[2]).setOpacity(G(g.fillOpacity, .75)).get())); q[A](p); q.startX = m.xMap; q.shiftUnit = g.step ? 2 : 1
                })
                }, drawLegendSymbol: z.drawRectangle
            }); ""
        }); O(q, "Series/SplineSeries.js", [q["Core/Series/Series.js"], q["Core/Utilities.js"]], function (n, h) {
            var q = h.pick; n.seriesType("spline", "line", {},
                {
                    getPointSpline: function (h, n, F) {
                        var y = n.plotX || 0, G = n.plotY || 0, B = h[F - 1]; F = h[F + 1]; if (B && !B.isNull && !1 !== B.doCurve && !n.isCliff && F && !F.isNull && !1 !== F.doCurve && !n.isCliff) {
                            h = B.plotY || 0; var r = F.plotX || 0; F = F.plotY || 0; var m = 0; var g = (1.5 * y + (B.plotX || 0)) / 2.5; var D = (1.5 * G + h) / 2.5; r = (1.5 * y + r) / 2.5; var H = (1.5 * G + F) / 2.5; r !== g && (m = (H - D) * (r - y) / (r - g) + G - H); D += m; H += m; D > h && D > G ? (D = Math.max(h, G), H = 2 * G - D) : D < h && D < G && (D = Math.min(h, G), H = 2 * G - D); H > F && H > G ? (H = Math.max(F, G), D = 2 * G - H) : H < F && H < G && (H = Math.min(F, G), D = 2 * G - H); n.rightContX =
                                r; n.rightContY = H
                        } n = ["C", q(B.rightContX, B.plotX, 0), q(B.rightContY, B.plotY, 0), q(g, y, 0), q(D, G, 0), y, G]; B.rightContX = B.rightContY = void 0; return n
                    }
                }); ""
        }); O(q, "Series/AreaSplineSeries.js", [q["Core/Series/Series.js"], q["Mixins/LegendSymbol.js"], q["Core/Options.js"]], function (n, h, q) { var z = n.seriesTypes.area.prototype; n.seriesType("areaspline", "spline", q.defaultOptions.plotOptions.area, { getStackPoints: z.getStackPoints, getGraphPath: z.getGraphPath, drawGraph: z.drawGraph, drawLegendSymbol: h.drawRectangle }); "" });
    O(q, "Series/ColumnSeries.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Series/Series.js"], q["Core/Color/Color.js"], q["Core/Globals.js"], q["Mixins/LegendSymbol.js"], q["Series/LineSeries.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M) {
        var G = n.animObject, B = q.parse; n = z.noop; var r = M.clamp, m = M.defined, g = M.extend, D = M.isArray, H = M.isNumber, v = M.merge, u = M.pick, A = M.objectEach; ""; h = h.seriesType("column", "line", {
            borderRadius: 0, centerInCategory: !1, groupPadding: .2, marker: null, pointPadding: .1, minPointLength: 0,
            cropThreshold: 50, pointRange: null, states: { hover: { halo: !1, brightness: .1 }, select: { color: "#cccccc", borderColor: "#000000" } }, dataLabels: { align: void 0, verticalAlign: void 0, y: void 0 }, startFromThreshold: !0, stickyTracking: !1, tooltip: { distance: 6 }, threshold: 0, borderColor: "#ffffff"
        }, {
            cropShoulder: 0, directTouch: !0, trackerGroups: ["group", "dataLabelsGroup"], negStacks: !0, init: function () {
                F.prototype.init.apply(this, arguments); var g = this, k = g.chart; k.hasRendered && k.series.forEach(function (c) {
                c.type === g.type && (c.isDirty =
                    !0)
                })
            }, getColumnMetrics: function () {
                var g = this, k = g.options, c = g.xAxis, e = g.yAxis, f = c.options.reversedStacks; f = c.reversed && !f || !c.reversed && f; var b, l = {}, a = 0; !1 === k.grouping ? a = 1 : g.chart.series.forEach(function (c) { var f = c.yAxis, k = c.options; if (c.type === g.type && (c.visible || !g.chart.options.chart.ignoreHiddenSeries) && e.len === f.len && e.pos === f.pos) { if (k.stacking && "group" !== k.stacking) { b = c.stackKey; "undefined" === typeof l[b] && (l[b] = a++); var h = l[b] } else !1 !== k.grouping && (h = a++); c.columnIndex = h } }); var h = Math.min(Math.abs(c.transA) *
                    (c.ordinal && c.ordinal.slope || k.pointRange || c.closestPointRange || c.tickInterval || 1), c.len), m = h * k.groupPadding, r = (h - 2 * m) / (a || 1); k = Math.min(k.maxPointWidth || c.len, u(k.pointWidth, r * (1 - 2 * k.pointPadding))); g.columnMetrics = { width: k, offset: (r - k) / 2 + (m + ((g.columnIndex || 0) + (f ? 1 : 0)) * r - h / 2) * (f ? -1 : 1), paddedWidth: r, columnCount: a }; return g.columnMetrics
            }, crispCol: function (g, k, c, e) {
                var f = this.chart, b = this.borderWidth, l = -(b % 2 ? .5 : 0); b = b % 2 ? .5 : 1; f.inverted && f.renderer.isVML && (b += 1); this.options.crisp && (c = Math.round(g +
                    c) + l, g = Math.round(g) + l, c -= g); e = Math.round(k + e) + b; l = .5 >= Math.abs(k) && .5 < e; k = Math.round(k) + b; e -= k; l && e && (--k, e += 1); return { x: g, y: k, width: c, height: e }
            }, adjustForMissingColumns: function (g, k, c, e) {
                var f = this, b = this.options.stacking; if (!c.isNull && 1 < e.columnCount) {
                    var l = 0, a = 0; A(this.yAxis.stacking && this.yAxis.stacking.stacks, function (e) { if ("number" === typeof c.x && (e = e[c.x.toString()])) { var k = e.points[f.index], g = e.total; b ? (k && (l = a), e.hasValidPoints && a++) : D(k) && (l = k[1], a = g || 0) } }); g = (c.plotX || 0) + ((a - 1) * e.paddedWidth +
                        k) / 2 - k - l * e.paddedWidth
                } return g
            }, translate: function () {
                var g = this, k = g.chart, c = g.options, e = g.dense = 2 > g.closestPointRange * g.xAxis.transA; e = g.borderWidth = u(c.borderWidth, e ? 0 : 1); var f = g.xAxis, b = g.yAxis, l = c.threshold, a = g.translatedThreshold = b.getThreshold(l), h = u(c.minPointLength, 5), n = g.getColumnMetrics(), q = n.width, v = g.barW = Math.max(q, 1 + 2 * e), A = g.pointXOffset = n.offset, D = g.dataMin, N = g.dataMax; k.inverted && (a -= .5); c.pointPadding && (v = Math.ceil(v)); F.prototype.translate.apply(g); g.points.forEach(function (e) {
                    var p =
                        u(e.yBottom, a), d = 999 + Math.abs(p), t = q, x = e.plotX || 0; d = r(e.plotY, -d, b.len + d); var E = x + A, C = v, K = Math.min(d, p), I = Math.max(d, p) - K; if (h && Math.abs(I) < h) { I = h; var y = !b.reversed && !e.negative || b.reversed && e.negative; H(l) && H(N) && e.y === l && N <= l && (b.min || 0) < l && D !== N && (y = !y); K = Math.abs(K - a) > h ? p - h : a - (y ? h : 0) } m(e.options.pointWidth) && (t = C = Math.ceil(e.options.pointWidth), E -= Math.round((t - q) / 2)); c.centerInCategory && (E = g.adjustForMissingColumns(E, t, e, n)); e.barX = E; e.pointWidth = t; e.tooltipPos = k.inverted ? [b.len + b.pos - k.plotLeft -
                            d, f.len + f.pos - k.plotTop - (x || 0) - A - C / 2, I] : [E + C / 2, d + b.pos - k.plotTop, I]; e.shapeType = g.pointClass.prototype.shapeType || "rect"; e.shapeArgs = g.crispCol.apply(g, e.isNull ? [E, a, C, 0] : [E, K, C, I])
                })
            }, getSymbol: n, drawLegendSymbol: y.drawRectangle, drawGraph: function () { this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data") }, pointAttribs: function (g, k) {
                var c = this.options, e = this.pointAttrToOptions || {}; var f = e.stroke || "borderColor"; var b = e["stroke-width"] || "borderWidth", l = g && g.color || this.color, a = g && g[f] ||
                    c[f] || this.color || l, h = g && g[b] || c[b] || this[b] || 0; e = g && g.options.dashStyle || c.dashStyle; var p = u(g && g.opacity, c.opacity, 1); if (g && this.zones.length) { var m = g.getZone(); l = g.options.color || m && (m.color || g.nonZonedColor) || this.color; m && (a = m.borderColor || a, e = m.dashStyle || e, h = m.borderWidth || h) } k && g && (g = v(c.states[k], g.options.states && g.options.states[k] || {}), k = g.brightness, l = g.color || "undefined" !== typeof k && B(l).brighten(g.brightness).get() || l, a = g[f] || a, h = g[b] || h, e = g.dashStyle || e, p = u(g.opacity, p)); f = {
                        fill: l,
                        stroke: a, "stroke-width": h, opacity: p
                    }; e && (f.dashstyle = e); return f
            }, drawPoints: function () {
                var g = this, k = this.chart, c = g.options, e = k.renderer, f = c.animationLimit || 250, b; g.points.forEach(function (l) {
                    var a = l.graphic, h = !!a, p = a && k.pointCount < f ? "animate" : "attr"; if (H(l.plotY) && null !== l.y) {
                        b = l.shapeArgs; a && l.hasNewShapeType() && (a = a.destroy()); g.enabledDataSorting && (l.startXPos = g.xAxis.reversed ? -(b ? b.width : 0) : g.xAxis.width); a || (l.graphic = a = e[l.shapeType](b).add(l.group || g.group)) && g.enabledDataSorting && k.hasRendered &&
                            k.pointCount < f && (a.attr({ x: l.startXPos }), h = !0, p = "animate"); if (a && h) a[p](v(b)); if (c.borderRadius) a[p]({ r: c.borderRadius }); k.styledMode || a[p](g.pointAttribs(l, l.selected && "select")).shadow(!1 !== l.allowShadow && c.shadow, null, c.stacking && !c.borderRadius); a.addClass(l.getClassName(), !0)
                    } else a && (l.graphic = a.destroy())
                })
            }, animate: function (h) {
                var k = this, c = this.yAxis, e = k.options, f = this.chart.inverted, b = {}, l = f ? "translateX" : "translateY"; if (h) b.scaleY = .001, h = r(c.toPixels(e.threshold), c.pos, c.pos + c.len), f ? b.translateX =
                    h - c.len : b.translateY = h, k.clipBox && k.setClip(), k.group.attr(b); else { var a = k.group.attr(l); k.group.animate({ scaleY: 1 }, g(G(k.options.animation), { step: function (e, f) { k.group && (b[l] = a + f.pos * (c.pos - a), k.group.attr(b)) } })) }
            }, remove: function () { var g = this, k = g.chart; k.hasRendered && k.series.forEach(function (c) { c.type === g.type && (c.isDirty = !0) }); F.prototype.remove.apply(g, arguments) }
        }); ""; return h
    }); O(q, "Series/BarSeries.js", [q["Core/Series/Series.js"]], function (n) {
        n.seriesType("bar", "column", null, { inverted: !0 });
        ""
    }); O(q, "Series/ScatterSeries.js", [q["Core/Series/Series.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q) {
        q = q.addEvent; var z = h.Series; n.seriesType("scatter", "line", { lineWidth: 0, findNearestPointBy: "xy", jitter: { x: 0, y: 0 }, marker: { enabled: !0 }, tooltip: { headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>', pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>" } }, {
            sorted: !1, requireSorting: !1, noSharedTooltip: !0, trackerGroups: ["group",
                "markerGroup", "dataLabelsGroup"], takeOrdinalPosition: !1, drawGraph: function () { (this.options.lineWidth || 0 === this.options.lineWidth && this.graph && this.graph.strokeWidth()) && z.prototype.drawGraph.call(this) }, applyJitter: function () {
                    var h = this, n = this.options.jitter, q = this.points.length; n && this.points.forEach(function (y, B) {
                        ["x", "y"].forEach(function (r, m) {
                            var g = "plot" + r.toUpperCase(); if (n[r] && !y.isNull) {
                                var D = h[r + "Axis"]; var H = n[r] * D.transA; if (D && !D.isLog) {
                                    var v = Math.max(0, y[g] - H); D = Math.min(D.len, y[g] + H);
                                    m = 1E4 * Math.sin(B + m * q); y[g] = v + (D - v) * (m - Math.floor(m)); "x" === r && (y.clientX = y.plotX)
                                }
                            }
                        })
                    })
                }
        }); q(z, "afterTranslate", function () { this.applyJitter && this.applyJitter() }); ""
    }); O(q, "Mixins/CenteredSeries.js", [q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = h.isNumber, z = h.pick, y = h.relativeLength, F = n.deg2rad; return n.CenteredSeriesMixin = {
            getCenter: function () {
                var h = this.options, q = this.chart, B = 2 * (h.slicedOffset || 0), r = q.plotWidth - 2 * B, m = q.plotHeight - 2 * B, g = h.center, D = Math.min(r, m), H = h.size, v = h.innerSize ||
                    0; "string" === typeof H && (H = parseFloat(H)); "string" === typeof v && (v = parseFloat(v)); h = [z(g[0], "50%"), z(g[1], "50%"), z(H && 0 > H ? void 0 : h.size, "100%"), z(v && 0 > v ? void 0 : h.innerSize || 0, "0%")]; !q.angular || this instanceof n.Series || (h[3] = 0); for (g = 0; 4 > g; ++g)H = h[g], q = 2 > g || 2 === g && /%$/.test(H), h[g] = y(H, [r, m, D, h[2]][g]) + (q ? B : 0); h[3] > h[2] && (h[3] = h[2]); return h
            }, getStartAndEndRadians: function (h, n) { h = q(h) ? h : 0; n = q(n) && n > h && 360 > n - h ? n : h + 360; return { start: F * (h + -90), end: F * (n + -90) } }
        }
    }); O(q, "Series/PieSeries.js", [q["Core/Animation/AnimationUtilities.js"],
    q["Core/Series/Series.js"], q["Mixins/CenteredSeries.js"], q["Core/Globals.js"], q["Mixins/LegendSymbol.js"], q["Series/LineSeries.js"], q["Core/Series/Point.js"], q["Core/Renderer/SVG/SVGRenderer.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M, G, B) {
        var r = n.setAnimation, m = q.getStartAndEndRadians; n = z.noop; var g = B.addEvent, D = B.clamp, H = B.defined, v = B.fireEvent, u = B.isNumber, A = B.merge, p = B.pick, k = B.relativeLength; h.seriesType("pie", "line", {
            center: [null, null], clip: !1, colorByPoint: !0, dataLabels: {
                allowOverlap: !0,
                connectorPadding: 5, connectorShape: "fixedOffset", crookDistance: "70%", distance: 30, enabled: !0, formatter: function () { return this.point.isNull ? void 0 : this.point.name }, softConnector: !0, x: 0
            }, fillColor: void 0, ignoreHiddenPoint: !0, inactiveOtherPoints: !0, legendType: "point", marker: null, size: null, showInLegend: !1, slicedOffset: 10, stickyTracking: !1, tooltip: { followPointer: !0 }, borderColor: "#ffffff", borderWidth: 1, lineWidth: void 0, states: { hover: { brightness: .1 } }
        }, {
            isCartesian: !1, requireSorting: !1, directTouch: !0, noSharedTooltip: !0,
            trackerGroups: ["group", "dataLabelsGroup"], axisTypes: [], pointAttribs: h.seriesTypes.column.prototype.pointAttribs, animate: function (c) { var e = this, f = e.points, b = e.startAngleRad; c || f.forEach(function (c) { var a = c.graphic, f = c.shapeArgs; a && f && (a.attr({ r: p(c.startR, e.center && e.center[3] / 2), start: b, end: b }), a.animate({ r: f.r, start: f.start, end: f.end }, e.options.animation)) }) }, hasData: function () { return !!this.processedXData.length }, updateTotals: function () {
                var c, e = 0, f = this.points, b = f.length, g = this.options.ignoreHiddenPoint;
                for (c = 0; c < b; c++) { var a = f[c]; e += g && !a.visible ? 0 : a.isNull ? 0 : a.y } this.total = e; for (c = 0; c < b; c++)a = f[c], a.percentage = 0 < e && (a.visible || !g) ? a.y / e * 100 : 0, a.total = e
            }, generatePoints: function () { F.prototype.generatePoints.call(this); this.updateTotals() }, getX: function (c, e, f) { var b = this.center, g = this.radii ? this.radii[f.index] : b[2] / 2; c = Math.asin(D((c - b[1]) / (g + f.labelDistance), -1, 1)); return b[0] + (e ? -1 : 1) * Math.cos(c) * (g + f.labelDistance) + (0 < f.labelDistance ? (e ? -1 : 1) * this.options.dataLabels.padding : 0) }, translate: function (c) {
                this.generatePoints();
                var e = 0, f = this.options, b = f.slicedOffset, g = b + (f.borderWidth || 0), a = m(f.startAngle, f.endAngle), h = this.startAngleRad = a.start; a = (this.endAngleRad = a.end) - h; var r = this.points, n = f.dataLabels.distance; f = f.ignoreHiddenPoint; var q, u = r.length; c || (this.center = c = this.getCenter()); for (q = 0; q < u; q++) {
                    var A = r[q]; var D = h + e * a; if (!f || A.visible) e += A.percentage / 100; var I = h + e * a; A.shapeType = "arc"; A.shapeArgs = { x: c[0], y: c[1], r: c[2] / 2, innerR: c[3] / 2, start: Math.round(1E3 * D) / 1E3, end: Math.round(1E3 * I) / 1E3 }; A.labelDistance = p(A.options.dataLabels &&
                        A.options.dataLabels.distance, n); A.labelDistance = k(A.labelDistance, A.shapeArgs.r); this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, A.labelDistance); I = (I + D) / 2; I > 1.5 * Math.PI ? I -= 2 * Math.PI : I < -Math.PI / 2 && (I += 2 * Math.PI); A.slicedTranslation = { translateX: Math.round(Math.cos(I) * b), translateY: Math.round(Math.sin(I) * b) }; var w = Math.cos(I) * c[2] / 2; var d = Math.sin(I) * c[2] / 2; A.tooltipPos = [c[0] + .7 * w, c[1] + .7 * d]; A.half = I < -Math.PI / 2 || I > Math.PI / 2 ? 1 : 0; A.angle = I; D = Math.min(g, A.labelDistance / 5); A.labelPosition = {
                            natural: {
                                x: c[0] +
                                    w + Math.cos(I) * A.labelDistance, y: c[1] + d + Math.sin(I) * A.labelDistance
                            }, "final": {}, alignment: 0 > A.labelDistance ? "center" : A.half ? "right" : "left", connectorPosition: { breakAt: { x: c[0] + w + Math.cos(I) * D, y: c[1] + d + Math.sin(I) * D }, touchingSliceAt: { x: c[0] + w, y: c[1] + d } }
                        }
                } v(this, "afterTranslate")
            }, drawEmpty: function () {
                var c = this.startAngleRad, e = this.endAngleRad, f = this.options; if (0 === this.total && this.center) {
                    var b = this.center[0]; var g = this.center[1]; this.graph || (this.graph = this.chart.renderer.arc(b, g, this.center[1] / 2, 0,
                        c, e).addClass("highcharts-empty-series").add(this.group)); this.graph.attr({ d: G.prototype.symbols.arc(b, g, this.center[2] / 2, 0, { start: c, end: e, innerR: this.center[3] / 2 }) }); this.chart.styledMode || this.graph.attr({ "stroke-width": f.borderWidth, fill: f.fillColor || "none", stroke: f.color || "#cccccc" })
                } else this.graph && (this.graph = this.graph.destroy())
            }, redrawPoints: function () {
                var c = this, e = c.chart, f = e.renderer, b, g, a, k, h = c.options.shadow; this.drawEmpty(); !h || c.shadowGroup || e.styledMode || (c.shadowGroup = f.g("shadow").attr({ zIndex: -1 }).add(c.group));
                c.points.forEach(function (l) {
                    var p = {}; g = l.graphic; if (!l.isNull && g) {
                        k = l.shapeArgs; b = l.getTranslate(); if (!e.styledMode) { var m = l.shadowGroup; h && !m && (m = l.shadowGroup = f.g("shadow").add(c.shadowGroup)); m && m.attr(b); a = c.pointAttribs(l, l.selected && "select") } l.delayedRendering ? (g.setRadialReference(c.center).attr(k).attr(b), e.styledMode || g.attr(a).attr({ "stroke-linejoin": "round" }).shadow(h, m), l.delayedRendering = !1) : (g.setRadialReference(c.center), e.styledMode || A(!0, p, a), A(!0, p, k, b), g.animate(p)); g.attr({
                            visibility: l.visible ?
                                "inherit" : "hidden"
                        }); g.addClass(l.getClassName())
                    } else g && (l.graphic = g.destroy())
                })
            }, drawPoints: function () { var c = this.chart.renderer; this.points.forEach(function (e) { e.graphic && e.hasNewShapeType() && (e.graphic = e.graphic.destroy()); e.graphic || (e.graphic = c[e.shapeType](e.shapeArgs).add(e.series.group), e.delayedRendering = !0) }) }, searchPoint: n, sortByAngle: function (c, e) { c.sort(function (c, b) { return "undefined" !== typeof c.angle && (b.angle - c.angle) * e }) }, drawLegendSymbol: y.drawRectangle, getCenter: q.getCenter, getSymbol: n,
            drawGraph: null
        }, {
            init: function () { M.prototype.init.apply(this, arguments); var c = this; c.name = p(c.name, "Slice"); var e = function (e) { c.slice("select" === e.type) }; g(c, "select", e); g(c, "unselect", e); return c }, isValid: function () { return u(this.y) && 0 <= this.y }, setVisible: function (c, e) {
                var f = this, b = f.series, g = b.chart, a = b.options.ignoreHiddenPoint; e = p(e, a); c !== f.visible && (f.visible = f.options.visible = c = "undefined" === typeof c ? !f.visible : c, b.options.data[b.data.indexOf(f)] = f.options, ["graphic", "dataLabel", "connector",
                    "shadowGroup"].forEach(function (a) { if (f[a]) f[a][c ? "show" : "hide"](!0) }), f.legendItem && g.legend.colorizeItem(f, c), c || "hover" !== f.state || f.setState(""), a && (b.isDirty = !0), e && g.redraw())
            }, slice: function (c, e, f) { var b = this.series; r(f, b.chart); p(e, !0); this.sliced = this.options.sliced = H(c) ? c : !this.sliced; b.options.data[b.data.indexOf(this)] = this.options; this.graphic && this.graphic.animate(this.getTranslate()); this.shadowGroup && this.shadowGroup.animate(this.getTranslate()) }, getTranslate: function () {
                return this.sliced ?
                    this.slicedTranslation : { translateX: 0, translateY: 0 }
            }, haloPath: function (c) { var e = this.shapeArgs; return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(e.x, e.y, e.r + c, e.r + c, { innerR: e.r - 1, start: e.start, end: e.end }) }, connectorShapes: {
                fixedOffset: function (c, e, f) { var b = e.breakAt; e = e.touchingSliceAt; return [["M", c.x, c.y], f.softConnector ? ["C", c.x + ("left" === c.alignment ? -5 : 5), c.y, 2 * b.x - e.x, 2 * b.y - e.y, b.x, b.y] : ["L", b.x, b.y], ["L", e.x, e.y]] }, straight: function (c, e) {
                    e = e.touchingSliceAt; return [["M",
                        c.x, c.y], ["L", e.x, e.y]]
                }, crookedLine: function (c, e, f) { e = e.touchingSliceAt; var b = this.series, g = b.center[0], a = b.chart.plotWidth, h = b.chart.plotLeft; b = c.alignment; var p = this.shapeArgs.r; f = k(f.crookDistance, 1); a = "left" === b ? g + p + (a + h - g - p) * (1 - f) : h + (g - p) * f; f = ["L", a, c.y]; g = !0; if ("left" === b ? a > c.x || a < e.x : a < c.x || a > e.x) g = !1; c = [["M", c.x, c.y]]; g && c.push(f); c.push(["L", e.x, e.y]); return c }
            }, getConnectorPath: function () {
                var c = this.labelPosition, e = this.series.options.dataLabels, f = e.connectorShape, b = this.connectorShapes;
                b[f] && (f = b[f]); return f.call(this, { x: c.final.x, y: c.final.y, alignment: c.alignment }, c.connectorPosition, e)
            }
        }); ""
    }); O(q, "Core/Series/DataLabels.js", [q["Core/Animation/AnimationUtilities.js"], q["Core/Globals.js"], q["Core/Series/CartesianSeries.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
        var y = n.getDeferredAnimation; n = h.noop; var F = h.seriesTypes, L = z.arrayMax, G = z.clamp, B = z.defined, r = z.extend, m = z.fireEvent, g = z.format, D = z.isArray, H = z.merge, v = z.objectEach, u = z.pick, A = z.relativeLength, p = z.splat, k = z.stableSort;
        ""; h.distribute = function (c, e, f) {
            function b(a, b) { return a.target - b.target } var g, a = !0, p = c, m = []; var r = 0; var n = p.reducedLen || e; for (g = c.length; g--;)r += c[g].size; if (r > n) { k(c, function (a, b) { return (b.rank || 0) - (a.rank || 0) }); for (r = g = 0; r <= n;)r += c[g].size, g++; m = c.splice(g - 1, c.length) } k(c, b); for (c = c.map(function (a) { return { size: a.size, targets: [a.target], align: u(a.align, .5) } }); a;) {
                for (g = c.length; g--;)a = c[g], r = (Math.min.apply(0, a.targets) + Math.max.apply(0, a.targets)) / 2, a.pos = G(r - a.size * a.align, 0, e - a.size); g = c.length;
                for (a = !1; g--;)0 < g && c[g - 1].pos + c[g - 1].size > c[g].pos && (c[g - 1].size += c[g].size, c[g - 1].targets = c[g - 1].targets.concat(c[g].targets), c[g - 1].align = .5, c[g - 1].pos + c[g - 1].size > e && (c[g - 1].pos = e - c[g - 1].size), c.splice(g, 1), a = !0)
            } p.push.apply(p, m); g = 0; c.some(function (a) {
                var b = 0; if (a.targets.some(function () {
                    p[g].pos = a.pos + b; if ("undefined" !== typeof f && Math.abs(p[g].pos - p[g].target) > f) return p.slice(0, g + 1).forEach(function (a) { delete a.pos }), p.reducedLen = (p.reducedLen || e) - .1 * e, p.reducedLen > .1 * e && h.distribute(p, e, f),
                        !0; b += p[g].size; g++
                })) return !0
            }); k(p, b)
        }; q.prototype.drawDataLabels = function () {
            function c(a, b) { var c = b.filter; return c ? (b = c.operator, a = a[c.property], c = c.value, ">" === b && a > c || "<" === b && a < c || ">=" === b && a >= c || "<=" === b && a <= c || "==" === b && a == c || "===" === b && a === c ? !0 : !1) : !0 } function e(a, b) { var c = [], d; if (D(a) && !D(b)) c = a.map(function (a) { return H(a, b) }); else if (D(b) && !D(a)) c = b.map(function (b) { return H(a, b) }); else if (D(a) || D(b)) for (d = Math.max(a.length, b.length); d--;)c[d] = H(a[d], b[d]); else c = H(a, b); return c } var f =
                this, b = f.chart, k = f.options, a = k.dataLabels, h = f.points, r, n = f.hasRendered || 0, q = a.animation; q = a.defer ? y(b, q, f) : { defer: 0, duration: 0 }; var A = b.renderer; a = e(e(b.options.plotOptions && b.options.plotOptions.series && b.options.plotOptions.series.dataLabels, b.options.plotOptions && b.options.plotOptions[f.type] && b.options.plotOptions[f.type].dataLabels), a); m(this, "drawDataLabels"); if (D(a) || a.enabled || f._hasPointLabels) {
                    var z = f.plotGroup("dataLabelsGroup", "data-labels", n ? "inherit" : "hidden", a.zIndex || 6); z.attr({ opacity: +n });
                    !n && (n = f.dataLabelsGroup) && (f.visible && z.show(!0), n[k.animation ? "animate" : "attr"]({ opacity: 1 }, q)); h.forEach(function (l) {
                        r = p(e(a, l.dlOptions || l.options && l.options.dataLabels)); r.forEach(function (a, e) {
                            var d = a.enabled && (!l.isNull || l.dataLabelOnNull) && c(l, a), h = l.dataLabels ? l.dataLabels[e] : l.dataLabel, p = l.connectors ? l.connectors[e] : l.connector, m = u(a.distance, l.labelDistance), r = !h; if (d) {
                                var n = l.getLabelConfig(); var q = u(a[l.formatPrefix + "Format"], a.format); n = B(q) ? g(q, n, b) : (a[l.formatPrefix + "Formatter"] ||
                                    a.formatter).call(n, a); q = a.style; var x = a.rotation; b.styledMode || (q.color = u(a.color, q.color, f.color, "#000000"), "contrast" === q.color ? (l.contrastColor = A.getContrast(l.color || f.color), q.color = !B(m) && a.inside || 0 > m || k.stacking ? l.contrastColor : "#000000") : delete l.contrastColor, k.cursor && (q.cursor = k.cursor)); var w = { r: a.borderRadius || 0, rotation: x, padding: a.padding, zIndex: 1 }; b.styledMode || (w.fill = a.backgroundColor, w.stroke = a.borderColor, w["stroke-width"] = a.borderWidth); v(w, function (a, b) {
                                    "undefined" === typeof a &&
                                        delete w[b]
                                    })
                            } !h || d && B(n) ? d && B(n) && (h ? w.text = n : (l.dataLabels = l.dataLabels || [], h = l.dataLabels[e] = x ? A.text(n, 0, -9999, a.useHTML).addClass("highcharts-data-label") : A.label(n, 0, -9999, a.shape, null, null, a.useHTML, null, "data-label"), e || (l.dataLabel = h), h.addClass(" highcharts-data-label-color-" + l.colorIndex + " " + (a.className || "") + (a.useHTML ? " highcharts-tracker" : ""))), h.options = a, h.attr(w), b.styledMode || h.css(q).shadow(a.shadow), h.added || h.add(z), a.textPath && !a.useHTML && (h.setTextPath(l.getDataLabelPath && l.getDataLabelPath(h) ||
                                l.graphic, a.textPath), l.dataLabelPath && !a.textPath.enabled && (l.dataLabelPath = l.dataLabelPath.destroy())), f.alignDataLabel(l, h, a, null, r)) : (l.dataLabel = l.dataLabel && l.dataLabel.destroy(), l.dataLabels && (1 === l.dataLabels.length ? delete l.dataLabels : delete l.dataLabels[e]), e || delete l.dataLabel, p && (l.connector = l.connector.destroy(), l.connectors && (1 === l.connectors.length ? delete l.connectors : delete l.connectors[e])))
                        })
                    })
                } m(this, "afterDrawDataLabels")
        }; q.prototype.alignDataLabel = function (c, e, f, b, g) {
            var a =
                this, l = this.chart, k = this.isCartesian && l.inverted, h = this.enabledDataSorting, p = u(c.dlBox && c.dlBox.centerX, c.plotX, -9999), m = u(c.plotY, -9999), n = e.getBBox(), q = f.rotation, v = f.align, w = l.isInsidePlot(p, Math.round(m), k), d = "justify" === u(f.overflow, h ? "none" : "justify"), t = this.visible && !1 !== c.visible && (c.series.forceDL || h && !d || w || f.inside && b && l.isInsidePlot(p, k ? b.x + 1 : b.y + b.height - 1, k)); var A = function (b) { h && a.xAxis && !d && a.setDataLabelStartPos(c, e, g, w, b) }; if (t) {
                    var D = l.renderer.fontMetrics(l.styledMode ? void 0 : f.style.fontSize,
                        e).b; b = r({ x: k ? this.yAxis.len - m : p, y: Math.round(k ? this.xAxis.len - p : m), width: 0, height: 0 }, b); r(f, { width: n.width, height: n.height }); q ? (d = !1, p = l.renderer.rotCorr(D, q), p = { x: b.x + (f.x || 0) + b.width / 2 + p.x, y: b.y + (f.y || 0) + { top: 0, middle: .5, bottom: 1 }[f.verticalAlign] * b.height }, A(p), e[g ? "attr" : "animate"](p).attr({ align: v }), A = (q + 720) % 360, A = 180 < A && 360 > A, "left" === v ? p.y -= A ? n.height : 0 : "center" === v ? (p.x -= n.width / 2, p.y -= n.height / 2) : "right" === v && (p.x -= n.width, p.y -= A ? 0 : n.height), e.placed = !0, e.alignAttr = p) : (A(b), e.align(f, null,
                            b), p = e.alignAttr); d && 0 <= b.height ? this.justifyDataLabel(e, f, p, n, b, g) : u(f.crop, !0) && (t = l.isInsidePlot(p.x, p.y) && l.isInsidePlot(p.x + n.width, p.y + n.height)); if (f.shape && !q) e[g ? "attr" : "animate"]({ anchorX: k ? l.plotWidth - c.plotY : c.plotX, anchorY: k ? l.plotHeight - c.plotX : c.plotY })
                } g && h && (e.placed = !1); t || h && !d || (e.hide(!0), e.placed = !1)
        }; q.prototype.setDataLabelStartPos = function (c, e, f, b, g) {
            var a = this.chart, l = a.inverted, k = this.xAxis, h = k.reversed, p = l ? e.height / 2 : e.width / 2; c = (c = c.pointWidth) ? c / 2 : 0; k = l ? g.x : h ? -p - c : k.width -
                p + c; g = l ? h ? this.yAxis.height - p + c : -p - c : g.y; e.startXPos = k; e.startYPos = g; b ? "hidden" === e.visibility && (e.show(), e.attr({ opacity: 0 }).animate({ opacity: 1 })) : e.attr({ opacity: 1 }).animate({ opacity: 0 }, void 0, e.hide); a.hasRendered && (f && e.attr({ x: e.startXPos, y: e.startYPos }), e.placed = !0)
        }; q.prototype.justifyDataLabel = function (c, e, f, b, g, a) {
            var k = this.chart, l = e.align, h = e.verticalAlign, p = c.box ? 0 : c.padding || 0, m = e.x; m = void 0 === m ? 0 : m; var r = e.y; var n = void 0 === r ? 0 : r; r = f.x + p; if (0 > r) {
            "right" === l && 0 <= m ? (e.align = "left", e.inside =
                !0) : m -= r; var q = !0
            } r = f.x + b.width - p; r > k.plotWidth && ("left" === l && 0 >= m ? (e.align = "right", e.inside = !0) : m += k.plotWidth - r, q = !0); r = f.y + p; 0 > r && ("bottom" === h && 0 <= n ? (e.verticalAlign = "top", e.inside = !0) : n -= r, q = !0); r = f.y + b.height - p; r > k.plotHeight && ("top" === h && 0 >= n ? (e.verticalAlign = "bottom", e.inside = !0) : n += k.plotHeight - r, q = !0); q && (e.x = m, e.y = n, c.placed = !a, c.align(e, void 0, g)); return q
        }; F.pie && (F.pie.prototype.dataLabelPositioners = {
            radialDistributionY: function (c) { return c.top + c.distributeBox.pos }, radialDistributionX: function (c,
                e, f, b) { return c.getX(f < e.top + 2 || f > e.bottom - 2 ? b : f, e.half, e) }, justify: function (c, e, f) { return f[0] + (c.half ? -1 : 1) * (e + c.labelDistance) }, alignToPlotEdges: function (c, e, f, b) { c = c.getBBox().width; return e ? c + b : f - c - b }, alignToConnectors: function (c, e, f, b) { var g = 0, a; c.forEach(function (b) { a = b.dataLabel.getBBox().width; a > g && (g = a) }); return e ? g + b : f - g - b }
        }, F.pie.prototype.drawDataLabels = function () {
            var c = this, e = c.data, f, b = c.chart, g = c.options.dataLabels || {}, a = g.connectorPadding, k, p = b.plotWidth, m = b.plotHeight, r = b.plotLeft,
            n = Math.round(b.chartWidth / 3), v, A = c.center, D = A[2] / 2, w = A[1], d, t, y, z, G = [[], []], F, M, O, X, S = [0, 0, 0, 0], W = c.dataLabelPositioners, U; c.visible && (g.enabled || c._hasPointLabels) && (e.forEach(function (a) { a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({ width: "auto" }).css({ width: "auto", textOverflow: "clip" }), a.dataLabel.shortened = !1) }), q.prototype.drawDataLabels.apply(c), e.forEach(function (a) {
            a.dataLabel && (a.visible ? (G[a.half].push(a), a.dataLabel._pos = null, !B(g.style.width) && !B(a.options.dataLabels &&
                a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > n && (a.dataLabel.css({ width: Math.round(.7 * n) + "px" }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels))
            }), G.forEach(function (e, k) {
                var l = e.length, n = [], q; if (l) {
                    c.sortByAngle(e, k - .5); if (0 < c.maxLabelDistance) {
                        var x = Math.max(0, w - D - c.maxLabelDistance); var v = Math.min(w + D + c.maxLabelDistance, b.plotHeight); e.forEach(function (a) {
                        0 < a.labelDistance && a.dataLabel &&
                            (a.top = Math.max(0, w - D - a.labelDistance), a.bottom = Math.min(w + D + a.labelDistance, b.plotHeight), q = a.dataLabel.getBBox().height || 21, a.distributeBox = { target: a.labelPosition.natural.y - a.top + q / 2, size: q, rank: a.y }, n.push(a.distributeBox))
                        }); x = v + q - x; h.distribute(n, x, x / 5)
                    } for (X = 0; X < l; X++) {
                        f = e[X]; y = f.labelPosition; d = f.dataLabel; O = !1 === f.visible ? "hidden" : "inherit"; M = x = y.natural.y; n && B(f.distributeBox) && ("undefined" === typeof f.distributeBox.pos ? O = "hidden" : (z = f.distributeBox.size, M = W.radialDistributionY(f))); delete f.positionIndex;
                        if (g.justify) F = W.justify(f, D, A); else switch (g.alignTo) { case "connectors": F = W.alignToConnectors(e, k, p, r); break; case "plotEdges": F = W.alignToPlotEdges(d, k, p, r); break; default: F = W.radialDistributionX(c, f, M, x) }d._attr = { visibility: O, align: y.alignment }; U = f.options.dataLabels || {}; d._pos = { x: F + u(U.x, g.x) + ({ left: a, right: -a }[y.alignment] || 0), y: M + u(U.y, g.y) - 10 }; y.final.x = F; y.final.y = M; u(g.crop, !0) && (t = d.getBBox().width, x = null, F - t < a && 1 === k ? (x = Math.round(t - F + a), S[3] = Math.max(x, S[3])) : F + t > p - a && 0 === k && (x = Math.round(F +
                            t - p + a), S[1] = Math.max(x, S[1])), 0 > M - z / 2 ? S[0] = Math.max(Math.round(-M + z / 2), S[0]) : M + z / 2 > m && (S[2] = Math.max(Math.round(M + z / 2 - m), S[2])), d.sideOverflow = x)
                    }
                }
            }), 0 === L(S) || this.verifyDataLabelOverflow(S)) && (this.placeDataLabels(), this.points.forEach(function (a) {
                U = H(g, a.options.dataLabels); if (k = u(U.connectorWidth, 1)) {
                    var e; v = a.connector; if ((d = a.dataLabel) && d._pos && a.visible && 0 < a.labelDistance) {
                        O = d._attr.visibility; if (e = !v) a.connector = v = b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" +
                            a.colorIndex + (a.className ? " " + a.className : "")).add(c.dataLabelsGroup), b.styledMode || v.attr({ "stroke-width": k, stroke: U.connectorColor || a.color || "#666666" }); v[e ? "attr" : "animate"]({ d: a.getConnectorPath() }); v.attr("visibility", O)
                    } else v && (a.connector = v.destroy())
                }
            }))
        }, F.pie.prototype.placeDataLabels = function () {
            this.points.forEach(function (c) {
                var e = c.dataLabel, f; e && c.visible && ((f = e._pos) ? (e.sideOverflow && (e._attr.width = Math.max(e.getBBox().width - e.sideOverflow, 0), e.css({
                    width: e._attr.width + "px", textOverflow: (this.options.dataLabels.style ||
                        {}).textOverflow || "ellipsis"
                }), e.shortened = !0), e.attr(e._attr), e[e.moved ? "animate" : "attr"](f), e.moved = !0) : e && e.attr({ y: -9999 })); delete c.distributeBox
            }, this)
        }, F.pie.prototype.alignDataLabel = n, F.pie.prototype.verifyDataLabelOverflow = function (c) {
            var e = this.center, f = this.options, b = f.center, g = f.minSize || 80, a = null !== f.size; if (!a) {
                if (null !== b[0]) var k = Math.max(e[2] - Math.max(c[1], c[3]), g); else k = Math.max(e[2] - c[1] - c[3], g), e[0] += (c[3] - c[1]) / 2; null !== b[1] ? k = G(k, g, e[2] - Math.max(c[0], c[2])) : (k = G(k, g, e[2] - c[0] -
                    c[2]), e[1] += (c[0] - c[2]) / 2); k < e[2] ? (e[2] = k, e[3] = Math.min(A(f.innerSize || 0, k), k), this.translate(e), this.drawDataLabels && this.drawDataLabels()) : a = !0
            } return a
        }); F.column && (F.column.prototype.alignDataLabel = function (c, e, f, b, g) {
            var a = this.chart.inverted, k = c.series, l = c.dlBox || c.shapeArgs, h = u(c.below, c.plotY > u(this.translatedThreshold, k.yAxis.len)), p = u(f.inside, !!this.options.stacking); l && (b = H(l), 0 > b.y && (b.height += b.y, b.y = 0), l = b.y + b.height - k.yAxis.len, 0 < l && l < b.height && (b.height -= l), a && (b = {
                x: k.yAxis.len - b.y -
                    b.height, y: k.xAxis.len - b.x - b.width, width: b.height, height: b.width
            }), p || (a ? (b.x += h ? 0 : b.width, b.width = 0) : (b.y += h ? b.height : 0, b.height = 0))); f.align = u(f.align, !a || p ? "center" : h ? "right" : "left"); f.verticalAlign = u(f.verticalAlign, a || p ? "middle" : h ? "top" : "bottom"); q.prototype.alignDataLabel.call(this, c, e, f, b, g); f.inside && c.contrastColor && e.css({ color: c.contrastColor })
        })
    }); O(q, "Extensions/OverlappingDataLabels.js", [q["Core/Chart/Chart.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = h.addEvent, z = h.fireEvent, y =
            h.isArray, F = h.isNumber, M = h.objectEach, G = h.pick; q(n, "render", function () {
                var h = []; (this.labelCollectors || []).forEach(function (r) { h = h.concat(r()) }); (this.yAxis || []).forEach(function (r) { r.stacking && r.options.stackLabels && !r.options.stackLabels.allowOverlap && M(r.stacking.stacks, function (m) { M(m, function (g) { h.push(g.label) }) }) }); (this.series || []).forEach(function (r) {
                    var m = r.options.dataLabels; r.visible && (!1 !== m.enabled || r._hasPointLabels) && (r.nodes || r.points).forEach(function (g) {
                    g.visible && (y(g.dataLabels) ?
                        g.dataLabels : g.dataLabel ? [g.dataLabel] : []).forEach(function (m) { var r = m.options; m.labelrank = G(r.labelrank, g.labelrank, g.shapeArgs && g.shapeArgs.height); r.allowOverlap || h.push(m) })
                    })
                }); this.hideOverlappingLabels(h)
            }); n.prototype.hideOverlappingLabels = function (h) {
                var r = this, m = h.length, g = r.renderer, n, q, v, u = !1; var A = function (c) {
                    var e, f = c.box ? 0 : c.padding || 0, b = e = 0, k; if (c && (!c.alignAttr || c.placed)) {
                        var a = c.alignAttr || { x: c.attr("x"), y: c.attr("y") }; var h = c.parentGroup; c.width || (e = c.getBBox(), c.width = e.width,
                            c.height = e.height, e = g.fontMetrics(null, c.element).h); var p = c.width - 2 * f; (k = { left: "0", center: "0.5", right: "1" }[c.alignValue]) ? b = +k * p : F(c.x) && Math.round(c.x) !== c.translateX && (b = c.x - c.translateX); return { x: a.x + (h.translateX || 0) + f - (b || 0), y: a.y + (h.translateY || 0) + f - e, width: c.width - 2 * f, height: c.height - 2 * f }
                    }
                }; for (q = 0; q < m; q++)if (n = h[q]) n.oldOpacity = n.opacity, n.newOpacity = 1, n.absoluteBox = A(n); h.sort(function (c, e) { return (e.labelrank || 0) - (c.labelrank || 0) }); for (q = 0; q < m; q++) {
                    var p = (A = h[q]) && A.absoluteBox; for (n = q +
                        1; n < m; ++n) { var k = (v = h[n]) && v.absoluteBox; !p || !k || A === v || 0 === A.newOpacity || 0 === v.newOpacity || k.x >= p.x + p.width || k.x + k.width <= p.x || k.y >= p.y + p.height || k.y + k.height <= p.y || ((A.labelrank < v.labelrank ? A : v).newOpacity = 0) }
                } h.forEach(function (c) {
                    if (c) {
                        var e = c.newOpacity; c.oldOpacity !== e && (c.alignAttr && c.placed ? (c[e ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), u = !0, c.alignAttr.opacity = e, c[c.isOld ? "animate" : "attr"](c.alignAttr, null, function () {
                        r.styledMode || c.css({ pointerEvents: e ? "auto" : "none" }); c.visibility =
                            e ? "inherit" : "hidden"
                        }), z(r, "afterHideOverlappingLabel")) : c.attr({ opacity: e })); c.isOld = !0
                    }
                }); u && z(r, "afterHideAllOverlappingLabels")
            }
    }); O(q, "Core/Interaction.js", [q["Core/Series/Series.js"], q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Core/Legend.js"], q["Series/LineSeries.js"], q["Core/Options.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M, G) {
        n = n.seriesTypes; var B = q.hasTouch, r = q.svg, m = F.defaultOptions, g = G.addEvent, D = G.createElement, H = G.css, v = G.defined, u = G.extend, A =
            G.fireEvent, p = G.isArray, k = G.isFunction, c = G.isNumber, e = G.isObject, f = G.merge, b = G.objectEach, l = G.pick; ""; q = q.TrackerMixin = {
                drawTrackerPoint: function () {
                    var a = this, b = a.chart, c = b.pointer, e = function (a) { var b = c.getPointFromEvent(a); "undefined" !== typeof b && (c.isDirectTouch = !0, b.onMouseOver(a)) }, f; a.points.forEach(function (a) { f = p(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : []; a.graphic && (a.graphic.element.point = a); f.forEach(function (b) { b.div ? b.div.point = a : b.element.point = a }) }); a._hasTracking || (a.trackerGroups.forEach(function (f) {
                        if (a[f]) {
                            a[f].addClass("highcharts-tracker").on("mouseover",
                                e).on("mouseout", function (a) { c.onTrackerMouseOut(a) }); if (B) a[f].on("touchstart", e); !b.styledMode && a.options.cursor && a[f].css(H).css({ cursor: a.options.cursor })
                        }
                    }), a._hasTracking = !0); A(this, "afterDrawTracker")
                }, drawTrackerGraph: function () {
                    var a = this, b = a.options, c = b.trackByArea, e = [].concat(c ? a.areaPath : a.graphPath), f = a.chart, g = f.pointer, k = f.renderer, l = f.options.tooltip.snap, h = a.tracker, p = function (b) { if (f.hoverSeries !== a) a.onMouseOver() }, d = "rgba(192,192,192," + (r ? .0001 : .002) + ")"; h ? h.attr({ d: e }) : a.graph &&
                        (a.tracker = k.path(e).attr({ visibility: a.visible ? "visible" : "hidden", zIndex: 2 }).addClass(c ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({ "stroke-linecap": "round", "stroke-linejoin": "round", stroke: d, fill: c ? d : "none", "stroke-width": a.graph.strokeWidth() + (c ? 0 : 2 * l) }), [a.tracker, a.markerGroup].forEach(function (a) {
                            a.addClass("highcharts-tracker").on("mouseover", p).on("mouseout", function (a) { g.onTrackerMouseOut(a) }); b.cursor && !f.styledMode && a.css({ cursor: b.cursor });
                            if (B) a.on("touchstart", p)
                        })); A(this, "afterDrawTracker")
                }
            }; n.column && (n.column.prototype.drawTracker = q.drawTrackerPoint); n.pie && (n.pie.prototype.drawTracker = q.drawTrackerPoint); n.scatter && (n.scatter.prototype.drawTracker = q.drawTrackerPoint); u(z.prototype, {
                setItemEvents: function (a, b, c) {
                    var e = this, g = e.chart.renderer.boxWrapper, k = a instanceof M, l = "highcharts-legend-" + (k ? "point" : "series") + "-active", h = e.chart.styledMode; (c ? [b, a.legendSymbol] : [a.legendGroup]).forEach(function (c) {
                        if (c) c.on("mouseover", function () {
                        a.visible &&
                            e.allItems.forEach(function (b) { a !== b && b.setState("inactive", !k) }); a.setState("hover"); a.visible && g.addClass(l); h || b.css(e.options.itemHoverStyle)
                        }).on("mouseout", function () { e.chart.styledMode || b.css(f(a.visible ? e.itemStyle : e.itemHiddenStyle)); e.allItems.forEach(function (b) { a !== b && b.setState("", !k) }); g.removeClass(l); a.setState() }).on("click", function (b) {
                            var c = function () { a.setVisible && a.setVisible(); e.allItems.forEach(function (b) { a !== b && b.setState(a.visible ? "inactive" : "", !k) }) }; g.removeClass(l); b =
                                { browserEvent: b }; a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : A(a, "legendItemClick", b, c)
                        })
                    })
                }, createCheckboxForItem: function (a) { a.checkbox = D("input", { type: "checkbox", className: "highcharts-legend-checkbox", checked: a.selected, defaultChecked: a.selected }, this.options.itemCheckboxStyle, this.chart.container); g(a.checkbox, "click", function (b) { A(a.series || a, "checkboxClick", { checked: b.target.checked, item: a }, function () { a.select() }) }) }
            }); u(h.prototype, {
                showResetZoom: function () {
                    function a() { b.zoomOut() }
                    var b = this, c = m.lang, e = b.options.chart.resetZoomButton, f = e.theme, g = f.states, k = "chart" === e.relativeTo || "spaceBox" === e.relativeTo ? null : "plotBox"; A(this, "beforeShowResetZoom", null, function () { b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, f, g && g.hover).attr({ align: e.position.align, title: c.resetZoomTitle }).addClass("highcharts-reset-zoom").add().align(e.position, !1, k) }); A(this, "afterShowResetZoom")
                }, zoomOut: function () { A(this, "selection", { resetSelection: !0 }, this.zoom) }, zoom: function (a) {
                    var b =
                        this, c, f = b.pointer, g = !1, k = b.inverted ? f.mouseDownX : f.mouseDownY; !a || a.resetSelection ? (b.axes.forEach(function (a) { c = a.zoom() }), f.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) { var e = a.axis, l = b.inverted ? e.left : e.top, d = b.inverted ? l + e.width : l + e.height, h = e.isXAxis, p = !1; if (!h && k >= l && k <= d || h || !v(k)) p = !0; f[h ? "zoomX" : "zoomY"] && p && (c = e.zoom(a.min, a.max), e.displayBtn && (g = !0)) }); var h = b.resetZoomButton; g && !h ? b.showResetZoom() : !g && e(h) && (b.resetZoomButton = h.destroy()); c && b.redraw(l(b.options.chart.animation,
                            a && a.animation, 100 > b.pointCount))
                }, pan: function (a, b) {
                    var e = this, f = e.hoverPoints, g = e.options.chart, k = e.options.mapNavigation && e.options.mapNavigation.enabled, h; b = "object" === typeof b ? b : { enabled: b, type: "x" }; g && g.panning && (g.panning = b); var p = b.type; A(this, "pan", { originalEvent: a }, function () {
                        f && f.forEach(function (a) { a.setState() }); var b = [1]; "xy" === p ? b = [1, 0] : "y" === p && (b = [0]); b.forEach(function (b) {
                            var d = e[b ? "xAxis" : "yAxis"][0], f = d.horiz, g = a[f ? "chartX" : "chartY"]; f = f ? "mouseDownX" : "mouseDownY"; var m = e[f], r =
                                (d.pointRange || 0) / 2, n = d.reversed && !e.inverted || !d.reversed && e.inverted ? -1 : 1, q = d.getExtremes(), u = d.toValue(m - g, !0) + r * n; n = d.toValue(m + d.len - g, !0) - r * n; var x = n < u; m = x ? n : u; u = x ? u : n; var w = d.hasVerticalPanning(), v = d.panningState; d.series.forEach(function (a) { if (w && !b && (!v || v.isDirty)) { var d = a.getProcessedData(!0); a = a.getExtremes(d.yData, !0); v || (v = { startMin: Number.MAX_VALUE, startMax: -Number.MAX_VALUE }); c(a.dataMin) && c(a.dataMax) && (v.startMin = Math.min(a.dataMin, v.startMin), v.startMax = Math.max(a.dataMax, v.startMax)) } });
                            n = Math.min(l(null === v || void 0 === v ? void 0 : v.startMin, q.dataMin), r ? q.min : d.toValue(d.toPixels(q.min) - d.minPixelPadding)); r = Math.max(l(null === v || void 0 === v ? void 0 : v.startMax, q.dataMax), r ? q.max : d.toValue(d.toPixels(q.max) + d.minPixelPadding)); d.panningState = v; d.isOrdinal || (x = n - m, 0 < x && (u += x, m = n), x = u - r, 0 < x && (u = r, m -= x), d.series.length && m !== q.min && u !== q.max && m >= n && u <= r && (d.setExtremes(m, u, !1, !1, { trigger: "pan" }), e.resetZoomButton || k || m === n || u === r || !p.match("y") || (e.showResetZoom(), d.displayBtn = !1), h = !0), e[f] =
                                g)
                        }); h && e.redraw(!1); H(e.container, { cursor: "move" })
                    })
                }
            }); u(M.prototype, {
                select: function (a, b) {
                    var c = this, e = c.series, f = e.chart; this.selectedStaging = a = l(a, !c.selected); c.firePointEvent(a ? "select" : "unselect", { accumulate: b }, function () {
                    c.selected = c.options.selected = a; e.options.data[e.data.indexOf(c)] = c.options; c.setState(a && "select"); b || f.getSelectedPoints().forEach(function (a) {
                        var b = a.series; a.selected && a !== c && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(f.hoverPoints &&
                            b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"))
                    })
                    }); delete this.selectedStaging
                }, onMouseOver: function (a) { var b = this.series.chart, c = b.pointer; a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted); c.runPointActions(a, this) }, onMouseOut: function () { var a = this.series.chart; this.firePointEvent("mouseOut"); this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) { a.setState() }); a.hoverPoints = a.hoverPoint = null }, importEvents: function () {
                    if (!this.hasImportedEvents) {
                        var a =
                            this, c = f(a.series.options.point, a.options).events; a.events = c; b(c, function (b, c) { k(b) && g(a, c, b) }); this.hasImportedEvents = !0
                    }
                }, setState: function (a, b) {
                    var c = this.series, e = this.state, f = c.options.states[a || "normal"] || {}, g = m.plotOptions[c.type].marker && c.options.marker, k = g && !1 === g.enabled, h = g && g.states && g.states[a || "normal"] || {}, p = !1 === h.enabled, r = c.stateMarkerGraphic, d = this.marker || {}, t = c.chart, n = c.halo, q, x = g && c.markerAttribs; a = a || ""; if (!(a === this.state && !b || this.selected && "select" !== a || !1 === f.enabled ||
                        a && (p || k && !1 === h.enabled) || a && d.states && d.states[a] && !1 === d.states[a].enabled)) {
                        this.state = a; x && (q = c.markerAttribs(this, a)); if (this.graphic) {
                            e && this.graphic.removeClass("highcharts-point-" + e); a && this.graphic.addClass("highcharts-point-" + a); if (!t.styledMode) {
                                var v = c.pointAttribs(this, a); var y = l(t.options.chart.animation, f.animation); c.options.inactiveOtherPoints && v.opacity && ((this.dataLabels || []).forEach(function (a) { a && a.animate({ opacity: v.opacity }, y) }), this.connector && this.connector.animate({ opacity: v.opacity },
                                    y)); this.graphic.animate(v, y)
                            } q && this.graphic.animate(q, l(t.options.chart.animation, h.animation, g.animation)); r && r.hide()
                        } else { if (a && h) { e = d.symbol || c.symbol; r && r.currentSymbol !== e && (r = r.destroy()); if (q) if (r) r[b ? "animate" : "attr"]({ x: q.x, y: q.y }); else e && (c.stateMarkerGraphic = r = t.renderer.symbol(e, q.x, q.y, q.width, q.height).add(c.markerGroup), r.currentSymbol = e); !t.styledMode && r && r.attr(c.pointAttribs(this, a)) } r && (r[a && this.isInside ? "show" : "hide"](), r.element.point = this) } a = f.halo; f = (r = this.graphic || r) &&
                            r.visibility || "inherit"; a && a.size && r && "hidden" !== f && !this.isCluster ? (n || (c.halo = n = t.renderer.path().add(r.parentGroup)), n.show()[b ? "animate" : "attr"]({ d: this.haloPath(a.size) }), n.attr({ "class": "highcharts-halo highcharts-color-" + l(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""), visibility: f, zIndex: -1 }), n.point = this, t.styledMode || n.attr(u({ fill: this.color || c.color, "fill-opacity": a.opacity }, a.attributes))) : n && n.point && n.point.haloPath && n.animate({ d: n.point.haloPath(0) }, null, n.hide);
                        A(this, "afterSetState")
                    }
                }, haloPath: function (a) { return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a) }
            }); u(y.prototype, {
                onMouseOver: function () { var a = this.chart, b = a.hoverSeries; a.pointer.setHoverChartIndex(); if (b && b !== this) b.onMouseOut(); this.options.events.mouseOver && A(this, "mouseOver"); this.setState("hover"); a.hoverSeries = this }, onMouseOut: function () {
                    var a = this.options, b = this.chart, c = b.tooltip, e = b.hoverPoint; b.hoverSeries = null; if (e) e.onMouseOut(); this && a.events.mouseOut &&
                        A(this, "mouseOut"); !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide(); b.series.forEach(function (a) { a.setState("", !0) })
                }, setState: function (a, b) {
                    var c = this, e = c.options, f = c.graph, g = e.inactiveOtherPoints, k = e.states, h = e.lineWidth, p = e.opacity, m = l(k[a || "normal"] && k[a || "normal"].animation, c.chart.options.chart.animation); e = 0; a = a || ""; if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
                        b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" +
                            a))
                    }), c.state = a, !c.chart.styledMode)) { if (k[a] && !1 === k[a].enabled) return; a && (h = k[a].lineWidth || h + (k[a].lineWidthPlus || 0), p = l(k[a].opacity, p)); if (f && !f.dashstyle) for (k = { "stroke-width": h }, f.animate(k, m); c["zone-graph-" + e];)c["zone-graph-" + e].attr(k), e += 1; g || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) { a && a.animate({ opacity: p }, m) }) } b && g && c.points && c.setAllPointsToState(a)
                }, setAllPointsToState: function (a) { this.points.forEach(function (b) { b.setState && b.setState(a) }) }, setVisible: function (a,
                    b) {
                        var c = this, e = c.chart, f = c.legendItem, g = e.options.chart.ignoreHiddenSeries, k = c.visible; var h = (c.visible = a = c.options.visible = c.userOptions.visible = "undefined" === typeof a ? !k : a) ? "show" : "hide";["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) { if (c[a]) c[a][h]() }); if (e.hoverSeries === c || (e.hoverPoint && e.hoverPoint.series) === c) c.onMouseOut(); f && e.legend.colorizeItem(c, a); c.isDirty = !0; c.options.stacking && e.series.forEach(function (a) { a.options.stacking && a.visible && (a.isDirty = !0) });
                    c.linkedSeries.forEach(function (b) { b.setVisible(a, !1) }); g && (e.isDirtyBox = !0); A(c, h); !1 !== b && e.redraw()
                }, show: function () { this.setVisible(!0) }, hide: function () { this.setVisible(!1) }, select: function (a) { this.selected = a = this.options.selected = "undefined" === typeof a ? !this.selected : a; this.checkbox && (this.checkbox.checked = a); A(this, a ? "select" : "unselect") }, drawTracker: q.drawTrackerGraph
            })
    }); O(q, "Core/Responsive.js", [q["Core/Chart/Chart.js"], q["Core/Utilities.js"]], function (n, h) {
        var q = h.find, z = h.isArray, y = h.isObject,
        F = h.merge, M = h.objectEach, G = h.pick, B = h.splat, r = h.uniqueKey; n.prototype.setResponsive = function (h, g) {
            var m = this.options.responsive, n = [], v = this.currentResponsive; !g && m && m.rules && m.rules.forEach(function (g) { "undefined" === typeof g._id && (g._id = r()); this.matchResponsiveRule(g, n) }, this); g = F.apply(0, n.map(function (g) { return q(m.rules, function (h) { return h._id === g }).chartOptions })); g.isResponsiveOptions = !0; n = n.toString() || void 0; n !== (v && v.ruleIds) && (v && this.update(v.undoOptions, h, !0), n ? (v = this.currentOptions(g),
                v.isResponsiveOptions = !0, this.currentResponsive = { ruleIds: n, mergedOptions: g, undoOptions: v }, this.update(g, h, !0)) : this.currentResponsive = void 0)
        }; n.prototype.matchResponsiveRule = function (h, g) { var m = h.condition; (m.callback || function () { return this.chartWidth <= G(m.maxWidth, Number.MAX_VALUE) && this.chartHeight <= G(m.maxHeight, Number.MAX_VALUE) && this.chartWidth >= G(m.minWidth, 0) && this.chartHeight >= G(m.minHeight, 0) }).call(this) && g.push(h._id) }; n.prototype.currentOptions = function (h) {
            function g(h, r, n, p) {
                var k;
                M(h, function (c, e) { if (!p && -1 < m.collectionsWithUpdate.indexOf(e)) for (c = B(c), n[e] = [], k = 0; k < Math.max(c.length, r[e].length); k++)r[e][k] && (void 0 === c[k] ? n[e][k] = r[e][k] : (n[e][k] = {}, g(c[k], r[e][k], n[e][k], p + 1))); else y(c) ? (n[e] = z(c) ? [] : {}, g(c, r[e] || {}, n[e], p + 1)) : n[e] = "undefined" === typeof r[e] ? null : r[e] })
            } var m = this, r = {}; g(h, this.options, r, 0); return r
        }
    }); O(q, "masters/highcharts.src.js", [q["Core/Globals.js"]], function (n) { return n }); O(q, "Core/Axis/MapAxis.js", [q["Core/Axis/Axis.js"], q["Core/Utilities.js"]],
        function (n, h) {
            var q = h.addEvent, z = h.pick, y = function () { return function (h) { this.axis = h } }(); h = function () {
                function h() { } h.compose = function (h) {
                    h.keepProps.push("mapAxis"); q(h, "init", function () { this.mapAxis || (this.mapAxis = new y(this)) }); q(h, "getSeriesExtremes", function () { if (this.mapAxis) { var h = []; this.isXAxis && (this.series.forEach(function (n, r) { n.useMapGeometry && (h[r] = n.xData, n.xData = []) }), this.mapAxis.seriesXData = h) } }); q(h, "afterGetSeriesExtremes", function () {
                        if (this.mapAxis) {
                            var h = this.mapAxis.seriesXData ||
                                [], n; if (this.isXAxis) { var r = z(this.dataMin, Number.MAX_VALUE); var m = z(this.dataMax, -Number.MAX_VALUE); this.series.forEach(function (g, q) { g.useMapGeometry && (r = Math.min(r, z(g.minX, r)), m = Math.max(m, z(g.maxX, m)), g.xData = h[q], n = !0) }); n && (this.dataMin = r, this.dataMax = m); this.mapAxis.seriesXData = void 0 }
                        }
                    }); q(h, "afterSetAxisTranslation", function () {
                        if (this.mapAxis) {
                            var h = this.chart, n = h.plotWidth / h.plotHeight; h = h.xAxis[0]; var r; "yAxis" === this.coll && "undefined" !== typeof h.transA && this.series.forEach(function (h) {
                            h.preserveAspectRatio &&
                                (r = !0)
                            }); if (r && (this.transA = h.transA = Math.min(this.transA, h.transA), n /= (h.max - h.min) / (this.max - this.min), n = 1 > n ? this : h, h = (n.max - n.min) * n.transA, n.mapAxis.pixelPadding = n.len - h, n.minPixelPadding = n.mapAxis.pixelPadding / 2, h = n.mapAxis.fixTo)) { h = h[1] - n.toValue(h[0], !0); h *= n.transA; if (Math.abs(h) > n.minPixelPadding || n.min === n.dataMin && n.max === n.dataMax) h = 0; n.minPixelPadding -= h }
                        }
                    }); q(h, "render", function () { this.mapAxis && (this.mapAxis.fixTo = void 0) })
                }; return h
            }(); h.compose(n); return h
        }); O(q, "Mixins/ColorSeries.js",
            [], function () {
                return {
                    colorPointMixin: { setVisible: function (n) { var h = this, q = n ? "show" : "hide"; h.visible = h.options.visible = !!n;["graphic", "dataLabel"].forEach(function (n) { if (h[n]) h[n][q]() }); this.series.buildKDTree() } }, colorSeriesMixin: {
                        optionalAxis: "colorAxis", colorAxis: 0, translateColors: function () {
                            var n = this, h = this.options.nullColor, q = this.colorAxis, z = this.colorKey; (this.data.length ? this.data : this.points).forEach(function (y) {
                                var F = y.getNestedProperty(z); (F = y.options.color || (y.isNull || null === y.value ?
                                    h : q && "undefined" !== typeof F ? q.toColor(F, y) : y.color || n.color)) && y.color !== F && (y.color = F, "point" === n.options.legendType && y.legendItem && n.chart.legend.colorizeItem(y, y.visible))
                            })
                        }
                    }
                }
            }); O(q, "Core/Axis/ColorAxis.js", [q["Core/Axis/Axis.js"], q["Core/Chart/Chart.js"], q["Core/Color/Color.js"], q["Mixins/ColorSeries.js"], q["Core/Animation/Fx.js"], q["Core/Globals.js"], q["Core/Legend.js"], q["Mixins/LegendSymbol.js"], q["Series/LineSeries.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q, z, y,
                F, M, G, B, r, m) {
                    var g = this && this.__extends || function () { var b = function (c, a) { b = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, b) { a.__proto__ = b } || function (a, b) { for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]) }; return b(c, a) }; return function (c, a) { function e() { this.constructor = c } b(c, a); c.prototype = null === a ? Object.create(a) : (e.prototype = a.prototype, new e) } }(), D = q.parse; q = z.colorPointMixin; z = z.colorSeriesMixin; var H = F.noop, v = m.addEvent, u = m.erase, A = m.extend, p = m.isNumber, k = m.merge, c = m.pick,
                        e = m.splat; ""; A(B.prototype, z); A(r.prototype, q); h.prototype.collectionsWithUpdate.push("colorAxis"); h.prototype.collectionsWithInit.colorAxis = [h.prototype.addColorAxis]; var f = function (b) {
                            function e(a, c) { var e = b.call(this, a, c) || this; e.beforePadding = !1; e.chart = void 0; e.coll = "colorAxis"; e.dataClasses = void 0; e.legendItem = void 0; e.legendItems = void 0; e.name = ""; e.options = void 0; e.stops = void 0; e.visible = !0; e.init(a, c); return e } g(e, b); e.buildOptions = function (a, b, c) {
                                a = a.options.legend || {}; var e = c.layout ? "vertical" !==
                                    c.layout : "vertical" !== a.layout; return k(b, { side: e ? 2 : 1, reversed: !e }, c, { opposite: !e, showEmpty: !1, title: null, visible: a.enabled && (c ? !1 !== c.visible : !0) })
                            }; e.prototype.init = function (a, c) { var f = e.buildOptions(a, e.defaultOptions, c); this.coll = "colorAxis"; b.prototype.init.call(this, a, f); c.dataClasses && this.initDataClasses(c); this.initStops(); this.horiz = !f.opposite; this.zoomEnabled = !1 }; e.prototype.initDataClasses = function (a) {
                                var b = this.chart, c, e = 0, f = b.options.chart.colorCount, g = this.options, h = a.dataClasses.length;
                                this.dataClasses = c = []; this.legendItems = []; a.dataClasses.forEach(function (a, l) { a = k(a); c.push(a); if (b.styledMode || !a.color) "category" === g.dataClassColor ? (b.styledMode || (l = b.options.colors, f = l.length, a.color = l[e]), a.colorIndex = e, e++ , e === f && (e = 0)) : a.color = D(g.minColor).tweenTo(D(g.maxColor), 2 > h ? .5 : l / (h - 1)) })
                            }; e.prototype.hasData = function () { return !!(this.tickPositions || []).length }; e.prototype.setTickPositions = function () { if (!this.dataClasses) return b.prototype.setTickPositions.call(this) }; e.prototype.initStops =
                                function () { this.stops = this.options.stops || [[0, this.options.minColor], [1, this.options.maxColor]]; this.stops.forEach(function (a) { a.color = D(a[1]) }) }; e.prototype.setOptions = function (a) { b.prototype.setOptions.call(this, a); this.options.crosshair = this.options.marker }; e.prototype.setAxisSize = function () {
                                    var a = this.legendSymbol, b = this.chart, c = b.options.legend || {}, f, g; a ? (this.left = c = a.attr("x"), this.top = f = a.attr("y"), this.width = g = a.attr("width"), this.height = a = a.attr("height"), this.right = b.chartWidth - c - g, this.bottom =
                                        b.chartHeight - f - a, this.len = this.horiz ? g : a, this.pos = this.horiz ? c : f) : this.len = (this.horiz ? c.symbolWidth : c.symbolHeight) || e.defaultLegendLength
                                }; e.prototype.normalizedValue = function (a) { this.logarithmic && (a = this.logarithmic.log2lin(a)); return 1 - (this.max - a) / (this.max - this.min || 1) }; e.prototype.toColor = function (a, b) {
                                    var c = this.dataClasses, e = this.stops, f; if (c) for (f = c.length; f--;) {
                                        var g = c[f]; var k = g.from; e = g.to; if (("undefined" === typeof k || a >= k) && ("undefined" === typeof e || a <= e)) {
                                            var h = g.color; b && (b.dataClass =
                                                f, b.colorIndex = g.colorIndex); break
                                        }
                                    } else { a = this.normalizedValue(a); for (f = e.length; f-- && !(a > e[f][0]);); k = e[f] || e[f + 1]; e = e[f + 1] || k; a = 1 - (e[0] - a) / (e[0] - k[0] || 1); h = k.color.tweenTo(e.color, a) } return h
                                }; e.prototype.getOffset = function () { var a = this.legendGroup, c = this.chart.axisOffset[this.side]; a && (this.axisParent = a, b.prototype.getOffset.call(this), this.added || (this.added = !0, this.labelLeft = 0, this.labelRight = this.width), this.chart.axisOffset[this.side] = c) }; e.prototype.setLegendColor = function () {
                                    var a = this.reversed,
                                    b = a ? 1 : 0; a = a ? 0 : 1; b = this.horiz ? [b, 0, a, 0] : [0, a, 0, b]; this.legendColor = { linearGradient: { x1: b[0], y1: b[1], x2: b[2], y2: b[3] }, stops: this.stops }
                                }; e.prototype.drawLegendSymbol = function (a, b) {
                                    var f = a.padding, g = a.options, k = this.horiz, h = c(g.symbolWidth, k ? e.defaultLegendLength : 12), l = c(g.symbolHeight, k ? 12 : e.defaultLegendLength), p = c(g.labelPadding, k ? 16 : 30); g = c(g.itemDistance, 10); this.setLegendColor(); b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, h, l).attr({ zIndex: 1 }).add(b.legendGroup); this.legendItemWidth =
                                        h + f + (k ? g : p); this.legendItemHeight = l + f + (k ? p : 0)
                                }; e.prototype.setState = function (a) { this.series.forEach(function (b) { b.setState(a) }) }; e.prototype.setVisible = function () { }; e.prototype.getSeriesExtremes = function () {
                                    var a = this.series, b = a.length, e; this.dataMin = Infinity; for (this.dataMax = -Infinity; b--;) {
                                        var f = a[b]; var g = f.colorKey = c(f.options.colorKey, f.colorKey, f.pointValKey, f.zoneAxis, "y"); var k = f.pointArrayMap; var h = f[g + "Min"] && f[g + "Max"]; if (f[g + "Data"]) var l = f[g + "Data"]; else if (k) {
                                            l = []; k = k.indexOf(g); var p =
                                                f.yData; if (0 <= k && p) for (e = 0; e < p.length; e++)l.push(c(p[e][k], p[e]))
                                        } else l = f.yData; h ? (f.minColorValue = f[g + "Min"], f.maxColorValue = f[g + "Max"]) : (l = B.prototype.getExtremes.call(f, l), f.minColorValue = l.dataMin, f.maxColorValue = l.dataMax); "undefined" !== typeof f.minColorValue && (this.dataMin = Math.min(this.dataMin, f.minColorValue), this.dataMax = Math.max(this.dataMax, f.maxColorValue)); h || B.prototype.applyExtremes.call(f)
                                    }
                                }; e.prototype.drawCrosshair = function (a, c) {
                                    var e = c && c.plotX, f = c && c.plotY, g = this.pos, k = this.len;
                                    if (c) { var h = this.toPixels(c.getNestedProperty(c.series.colorKey)); h < g ? h = g - 2 : h > g + k && (h = g + k + 2); c.plotX = h; c.plotY = this.len - h; b.prototype.drawCrosshair.call(this, a, c); c.plotX = e; c.plotY = f; this.cross && !this.cross.addedToColorAxis && this.legendGroup && (this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup), this.cross.addedToColorAxis = !0, !this.chart.styledMode && this.crosshair && this.cross.attr({ fill: this.crosshair.color })) }
                                }; e.prototype.getPlotLinePath = function (a) {
                                    var c = this.left, e = a.translatedValue,
                                    f = this.top; return p(e) ? this.horiz ? [["M", e - 4, f - 6], ["L", e + 4, f - 6], ["L", e, f], ["Z"]] : [["M", c, e], ["L", c - 6, e + 6], ["L", c - 6, e - 6], ["Z"]] : b.prototype.getPlotLinePath.call(this, a)
                                }; e.prototype.update = function (a, c) {
                                    var f = this.chart, g = f.legend, h = e.buildOptions(f, {}, a); this.series.forEach(function (a) { a.isDirtyData = !0 }); (a.dataClasses && g.allItems || this.dataClasses) && this.destroyItems(); f.options[this.coll] = k(this.userOptions, h); b.prototype.update.call(this, h, c); this.legendItem && (this.setLegendColor(), g.colorizeItem(this,
                                        !0))
                                }; e.prototype.destroyItems = function () { var a = this.chart; this.legendItem ? a.legend.destroyItem(this) : this.legendItems && this.legendItems.forEach(function (b) { a.legend.destroyItem(b) }); a.isDirtyLegend = !0 }; e.prototype.remove = function (a) { this.destroyItems(); b.prototype.remove.call(this, a) }; e.prototype.getDataClassLegendSymbols = function () {
                                    var a = this, b = a.chart, c = a.legendItems, e = b.options.legend, f = e.valueDecimals, g = e.valueSuffix || "", k; c.length || a.dataClasses.forEach(function (e, h) {
                                        var l = !0, d = e.from, p = e.to,
                                        m = b.numberFormatter; k = ""; "undefined" === typeof d ? k = "< " : "undefined" === typeof p && (k = "> "); "undefined" !== typeof d && (k += m(d, f) + g); "undefined" !== typeof d && "undefined" !== typeof p && (k += " - "); "undefined" !== typeof p && (k += m(p, f) + g); c.push(A({ chart: b, name: k, options: {}, drawLegendSymbol: G.drawRectangle, visible: !0, setState: H, isDataClass: !0, setVisible: function () { l = a.visible = !l; a.series.forEach(function (a) { a.points.forEach(function (a) { a.dataClass === h && a.setVisible(l) }) }); b.legend.colorizeItem(this, l) } }, e))
                                    }); return c
                                };
                            e.defaultLegendLength = 200; e.defaultOptions = { lineWidth: 0, minPadding: 0, maxPadding: 0, gridLineWidth: 1, tickPixelInterval: 72, startOnTick: !0, endOnTick: !0, offset: 0, marker: { animation: { duration: 50 }, width: .01, color: "#999999" }, labels: { overflow: "justify", rotation: 0 }, minColor: "#e6ebf5", maxColor: "#003399", tickLength: 5, showInLegend: !0 }; e.keepProps = ["legendGroup", "legendItemHeight", "legendItemWidth", "legendItem", "legendSymbol"]; return e
                        }(n); Array.prototype.push.apply(n.keepProps, f.keepProps); F.ColorAxis = f;["fill",
                            "stroke"].forEach(function (b) { y.prototype[b + "Setter"] = function () { this.elem.attr(b, D(this.start).tweenTo(D(this.end), this.pos), null, !0) } }); v(h, "afterGetAxes", function () { var b = this, c = b.options; this.colorAxis = []; c.colorAxis && (c.colorAxis = e(c.colorAxis), c.colorAxis.forEach(function (a, c) { a.index = c; new f(b, a) })) }); v(B, "bindAxes", function () { var b = this.axisTypes; b ? -1 === b.indexOf("colorAxis") && b.push("colorAxis") : this.axisTypes = ["colorAxis"] }); v(M, "afterGetAllItems", function (b) {
                                var c = [], a, e; (this.chart.colorAxis ||
                                    []).forEach(function (e) { (a = e.options) && a.showInLegend && (a.dataClasses && a.visible ? c = c.concat(e.getDataClassLegendSymbols()) : a.visible && c.push(e), e.series.forEach(function (c) { if (!c.options.showInLegend || a.dataClasses) "point" === c.options.legendType ? c.points.forEach(function (a) { u(b.allItems, a) }) : u(b.allItems, c) })) }); for (e = c.length; e--;)b.allItems.unshift(c[e])
                            }); v(M, "afterColorizeItem", function (b) { b.visible && b.item.legendColor && b.item.legendSymbol.attr({ fill: b.item.legendColor }) }); v(M, "afterUpdate", function () {
                                var b =
                                    this.chart.colorAxis; b && b.forEach(function (b, a, c) { b.update({}, c) })
                            }); v(B, "afterTranslate", function () { (this.chart.colorAxis && this.chart.colorAxis.length || this.colorAttribs) && this.translateColors() }); return f
            }); O(q, "Mixins/ColorMapSeries.js", [q["Core/Globals.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q) {
                var z = q.defined; return {
                    colorMapPointMixin: {
                        dataLabelOnNull: !0, isValid: function () { return null !== this.value && Infinity !== this.value && -Infinity !== this.value }, setState: function (n) {
                            h.prototype.setState.call(this,
                                n); this.graphic && this.graphic.attr({ zIndex: "hover" === n ? 1 : 0 })
                        }
                    }, colorMapSeriesMixin: { pointArrayMap: ["value"], axisTypes: ["xAxis", "yAxis", "colorAxis"], trackerGroups: ["group", "markerGroup", "dataLabelsGroup"], getSymbol: n.noop, parallelArrays: ["x", "y", "value"], colorKey: "value", pointAttribs: n.seriesTypes.column.prototype.pointAttribs, colorAttribs: function (h) { var n = {}; z(h.color) && (n[this.colorProp || "fill"] = h.color); return n } }
                }
            }); O(q, "Maps/MapNavigation.js", [q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Core/Utilities.js"]],
                function (n, h, q) {
                    function z(g) { g && (g.preventDefault && g.preventDefault(), g.stopPropagation && g.stopPropagation(), g.cancelBubble = !0) } function y(g) { this.init(g) } var F = h.doc, L = q.addEvent, G = q.extend, B = q.merge, r = q.objectEach, m = q.pick; y.prototype.init = function (g) { this.chart = g; g.mapNavButtons = [] }; y.prototype.update = function (g) {
                        var h = this.chart, n = h.options.mapNavigation, q, u, A, p, k, c = function (c) { this.handler.call(h, c); z(c) }, e = h.mapNavButtons; g && (n = h.options.mapNavigation = B(h.options.mapNavigation, g)); for (; e.length;)e.pop().destroy();
                        m(n.enableButtons, n.enabled) && !h.renderer.forExport && r(n.buttons, function (f, b) {
                            q = B(n.buttonOptions, f); h.styledMode || (u = q.theme, u.style = B(q.theme.style, q.style), p = (A = u.states) && A.hover, k = A && A.select); f = h.renderer.button(q.text, 0, 0, c, u, p, k, 0, "zoomIn" === b ? "topbutton" : "bottombutton").addClass("highcharts-map-navigation highcharts-" + { zoomIn: "zoom-in", zoomOut: "zoom-out" }[b]).attr({ width: q.width, height: q.height, title: h.options.lang[b], padding: q.padding, zIndex: 5 }).add(); f.handler = q.onclick; L(f.element, "dblclick",
                                z); e.push(f); var g = q, a = L(h, "load", function () { f.align(G(g, { width: f.width, height: 2 * f.height }), null, g.alignTo); a() })
                        }); this.updateEvents(n)
                    }; y.prototype.updateEvents = function (g) {
                        var h = this.chart; m(g.enableDoubleClickZoom, g.enabled) || g.enableDoubleClickZoomTo ? this.unbindDblClick = this.unbindDblClick || L(h.container, "dblclick", function (g) { h.pointer.onContainerDblClick(g) }) : this.unbindDblClick && (this.unbindDblClick = this.unbindDblClick()); m(g.enableMouseWheelZoom, g.enabled) ? this.unbindMouseWheel = this.unbindMouseWheel ||
                            L(h.container, "undefined" === typeof F.onmousewheel ? "DOMMouseScroll" : "mousewheel", function (g) { h.pointer.onContainerMouseWheel(g); z(g); return !1 }) : this.unbindMouseWheel && (this.unbindMouseWheel = this.unbindMouseWheel())
                    }; G(n.prototype, {
                        fitToBox: function (g, h) { [["x", "width"], ["y", "height"]].forEach(function (m) { var n = m[0]; m = m[1]; g[n] + g[m] > h[n] + h[m] && (g[m] > h[m] ? (g[m] = h[m], g[n] = h[n]) : g[n] = h[n] + h[m] - g[m]); g[m] > h[m] && (g[m] = h[m]); g[n] < h[n] && (g[n] = h[n]) }); return g }, mapZoom: function (g, h, n, r, q) {
                            var u = this.xAxis[0],
                            p = u.max - u.min, k = m(h, u.min + p / 2), c = p * g; p = this.yAxis[0]; var e = p.max - p.min, f = m(n, p.min + e / 2); e *= g; k = this.fitToBox({ x: k - c * (r ? (r - u.pos) / u.len : .5), y: f - e * (q ? (q - p.pos) / p.len : .5), width: c, height: e }, { x: u.dataMin, y: p.dataMin, width: u.dataMax - u.dataMin, height: p.dataMax - p.dataMin }); c = k.x <= u.dataMin && k.width >= u.dataMax - u.dataMin && k.y <= p.dataMin && k.height >= p.dataMax - p.dataMin; r && u.mapAxis && (u.mapAxis.fixTo = [r - u.pos, h]); q && p.mapAxis && (p.mapAxis.fixTo = [q - p.pos, n]); "undefined" === typeof g || c ? (u.setExtremes(void 0, void 0,
                                !1), p.setExtremes(void 0, void 0, !1)) : (u.setExtremes(k.x, k.x + k.width, !1), p.setExtremes(k.y, k.y + k.height, !1)); this.redraw()
                        }
                    }); L(n, "beforeRender", function () { this.mapNavigation = new y(this); this.mapNavigation.update() }); h.MapNavigation = y
                }); O(q, "Maps/MapPointer.js", [q["Core/Pointer.js"], q["Core/Utilities.js"]], function (n, h) {
                    var q = h.extend, z = h.pick; h = h.wrap; q(n.prototype, {
                        onContainerDblClick: function (h) {
                            var n = this.chart; h = this.normalize(h); n.options.mapNavigation.enableDoubleClickZoomTo ? n.pointer.inClass(h.target,
                                "highcharts-tracker") && n.hoverPoint && n.hoverPoint.zoomTo() : n.isInsidePlot(h.chartX - n.plotLeft, h.chartY - n.plotTop) && n.mapZoom(.5, n.xAxis[0].toValue(h.chartX), n.yAxis[0].toValue(h.chartY), h.chartX, h.chartY)
                        }, onContainerMouseWheel: function (h) {
                            var n = this.chart; h = this.normalize(h); var q = h.detail || -(h.wheelDelta / 120); n.isInsidePlot(h.chartX - n.plotLeft, h.chartY - n.plotTop) && n.mapZoom(Math.pow(n.options.mapNavigation.mouseWheelSensitivity, q), n.xAxis[0].toValue(h.chartX), n.yAxis[0].toValue(h.chartY), h.chartX,
                                h.chartY)
                        }
                    }); h(n.prototype, "zoomOption", function (h) { var n = this.chart.options.mapNavigation; z(n.enableTouchZoom, n.enabled) && (this.chart.options.chart.pinchType = "xy"); h.apply(this, [].slice.call(arguments, 1)) }); h(n.prototype, "pinchTranslate", function (h, n, q, z, B, r, m) { h.call(this, n, q, z, B, r, m); "map" === this.chart.options.chart.type && this.hasZoom && (h = z.scaleX > z.scaleY, this.pinchTranslateDirection(!h, n, q, z, B, r, m, h ? z.scaleX : z.scaleY)) })
                }); O(q, "Maps/Map.js", [q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Core/Options.js"],
                q["Core/Renderer/SVG/SVGRenderer.js"], q["Core/Utilities.js"]], function (n, h, q, z, y) {
                    function F(g, h, m, n, r, q, p, k) { return [["M", g + r, h], ["L", g + m - q, h], ["C", g + m - q / 2, h, g + m, h + q / 2, g + m, h + q], ["L", g + m, h + n - p], ["C", g + m, h + n - p / 2, g + m - p / 2, h + n, g + m - p, h + n], ["L", g + k, h + n], ["C", g + k / 2, h + n, g, h + n - k / 2, g, h + n - k], ["L", g, h + r], ["C", g, h + r / 2, g + r / 2, h, g + r, h], ["Z"]] } q = q.defaultOptions; var L = y.extend, G = y.getOptions, B = y.merge, r = y.pick; y = h.Renderer; var m = h.VMLRenderer; L(q.lang, { zoomIn: "Zoom in", zoomOut: "Zoom out" }); q.mapNavigation = {
                        buttonOptions: {
                            alignTo: "plotBox",
                            align: "left", verticalAlign: "top", x: 0, width: 18, height: 18, padding: 5, style: { fontSize: "15px", fontWeight: "bold" }, theme: { "stroke-width": 1, "text-align": "center" }
                        }, buttons: { zoomIn: { onclick: function () { this.mapZoom(.5) }, text: "+", y: 0 }, zoomOut: { onclick: function () { this.mapZoom(2) }, text: "-", y: 28 } }, mouseWheelSensitivity: 1.1
                    }; q = h.splitPath = function (g) {
                    "string" === typeof g && (g = g.replace(/([A-Za-z])/g, " $1 ").replace(/^\s*/, "").replace(/\s*$/, ""), g = g.split(/[ ,;]+/).map(function (g) { return /[A-za-z]/.test(g) ? g : parseFloat(g) }));
                        return z.prototype.pathToSegments(g)
                    }; h.maps = {}; z.prototype.symbols.topbutton = function (g, h, m, n, r) { r = r && r.r || 0; return F(g - 1, h - 1, m, n, r, r, 0, 0) }; z.prototype.symbols.bottombutton = function (g, h, m, n, r) { r = r && r.r || 0; return F(g - 1, h - 1, m, n, 0, 0, r, r) }; y === m && ["topbutton", "bottombutton"].forEach(function (g) { m.prototype.symbols[g] = z.prototype.symbols[g] }); return {
                        mapChart: h.Map = h.mapChart = function (g, h, m) {
                            var q = "string" === typeof g || g.nodeName, u = arguments[q ? 1 : 0], A = u, p = {
                                endOnTick: !1, visible: !1, minPadding: 0, maxPadding: 0,
                                startOnTick: !1
                            }, k = G().credits; var c = u.series; u.series = null; u = B({ chart: { panning: { enabled: !0, type: "xy" }, type: "map" }, credits: { mapText: r(k.mapText, ' \u00a9 <a href="{geojson.copyrightUrl}">{geojson.copyrightShort}</a>'), mapTextFull: r(k.mapTextFull, "{geojson.copyright}") }, tooltip: { followTouchMove: !1 }, xAxis: p, yAxis: B(p, { reversed: !0 }) }, u, { chart: { inverted: !1, alignTicks: !1 } }); u.series = A.series = c; return q ? new n(g, u, m) : new n(u, h)
                        }, maps: h.maps, splitPath: q
                    }
                }); O(q, "Series/MapSeries.js", [q["Core/Series/Series.js"],
                q["Mixins/ColorMapSeries.js"], q["Core/Globals.js"], q["Mixins/LegendSymbol.js"], q["Maps/Map.js"], q["Core/Series/Point.js"], q["Core/Renderer/SVG/SVGRenderer.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F, M, G) {
                    var B = h.colorMapPointMixin, r = q.noop, m = y.maps, g = y.splitPath, D = G.extend, H = G.fireEvent, v = G.getNestedProperty, u = G.isArray, A = G.isNumber, p = G.merge, k = G.objectEach, c = G.pick, e = G.splat, f = q.Series, b = n.seriesTypes; n.seriesType("map", "scatter", {
                        animation: !1, dataLabels: {
                            crop: !1, formatter: function () { return this.point.value },
                            inside: !0, overflow: !1, padding: 0, verticalAlign: "middle"
                        }, marker: null, nullColor: "#f7f7f7", stickyTracking: !1, tooltip: { followPointer: !0, pointFormat: "{point.name}: {point.value}<br/>" }, turboThreshold: 0, allAreas: !0, borderColor: "#cccccc", borderWidth: 1, joinBy: "hc-key", states: { hover: { halo: null, brightness: .2 }, normal: { animation: !0 }, select: { color: "#cccccc" }, inactive: { opacity: 1 } }
                    }, p(h.colorMapSeriesMixin, {
                        type: "map", getExtremesFromAll: !0, useMapGeometry: !0, forceDL: !0, searchPoint: r, directTouch: !0, preserveAspectRatio: !0,
                        pointArrayMap: ["value"], setOptions: function (b) { b = f.prototype.setOptions.call(this, b); var a = b.joinBy; null === a && (a = "_i"); a = this.joinBy = e(a); a[1] || (a[1] = a[0]); return b }, getBox: function (b) {
                            var a = Number.MAX_VALUE, e = -a, f = a, h = -a, k = a, l = a, p = this.xAxis, m = this.yAxis, n; (b || []).forEach(function (b) {
                                if (b.path) {
                                    "string" === typeof b.path ? b.path = g(b.path) : "M" === b.path[0] && (b.path = M.prototype.pathToSegments(b.path)); var d = b.path || [], p = -a, m = a, r = -a, q = a, u = b.properties; b._foundBox || (d.forEach(function (a) {
                                        var b = a[a.length -
                                            2]; a = a[a.length - 1]; "number" === typeof b && "number" === typeof a && (m = Math.min(m, b), p = Math.max(p, b), q = Math.min(q, a), r = Math.max(r, a))
                                    }), b._midX = m + (p - m) * c(b.middleX, u && u["hc-middle-x"], .5), b._midY = q + (r - q) * c(b.middleY, u && u["hc-middle-y"], .5), b._maxX = p, b._minX = m, b._maxY = r, b._minY = q, b.labelrank = c(b.labelrank, (p - m) * (r - q)), b._foundBox = !0); e = Math.max(e, b._maxX); f = Math.min(f, b._minX); h = Math.max(h, b._maxY); k = Math.min(k, b._minY); l = Math.min(b._maxX - b._minX, b._maxY - b._minY, l); n = !0
                                }
                            }); n && (this.minY = Math.min(k, c(this.minY,
                                a)), this.maxY = Math.max(h, c(this.maxY, -a)), this.minX = Math.min(f, c(this.minX, a)), this.maxX = Math.max(e, c(this.maxX, -a)), p && "undefined" === typeof p.options.minRange && (p.minRange = Math.min(5 * l, (this.maxX - this.minX) / 5, p.minRange || a)), m && "undefined" === typeof m.options.minRange && (m.minRange = Math.min(5 * l, (this.maxY - this.minY) / 5, m.minRange || a)))
                        }, hasData: function () { return !!this.processedXData.length }, getExtremes: function () {
                            var b = f.prototype.getExtremes.call(this, this.valueData), a = b.dataMin; b = b.dataMax; this.chart.hasRendered &&
                                this.isDirtyData && this.getBox(this.options.data); A(a) && (this.valueMin = a); A(b) && (this.valueMax = b); return { dataMin: this.minY, dataMax: this.maxY }
                        }, translatePath: function (b) {
                            var a = this.xAxis, c = this.yAxis, e = a.min, f = a.transA, g = a.minPixelPadding, h = c.min, k = c.transA, l = c.minPixelPadding, p = []; b && b.forEach(function (a) {
                                "M" === a[0] ? p.push(["M", (a[1] - (e || 0)) * f + g, (a[2] - (h || 0)) * k + l]) : "L" === a[0] ? p.push(["L", (a[1] - (e || 0)) * f + g, (a[2] - (h || 0)) * k + l]) : "C" === a[0] ? p.push(["C", (a[1] - (e || 0)) * f + g, (a[2] - (h || 0)) * k + l, (a[3] - (e || 0)) *
                                    f + g, (a[4] - (h || 0)) * k + l, (a[5] - (e || 0)) * f + g, (a[6] - (h || 0)) * k + l]) : "Q" === a[0] ? p.push(["Q", (a[1] - (e || 0)) * f + g, (a[2] - (h || 0)) * k + l, (a[3] - (e || 0)) * f + g, (a[4] - (h || 0)) * k + l]) : "Z" === a[0] && p.push(["Z"])
                            }); return p
                        }, setData: function (b, a, c, e) {
                            var g = this.options, h = this.chart.options.chart, l = h && h.map, n = g.mapData, r = this.joinBy, x = g.keys || this.pointArrayMap, w = [], d = {}, t = this.chart.mapTransforms; !n && l && (n = "string" === typeof l ? m[l] : l); b && b.forEach(function (a, c) {
                                var d = 0; if (A(a)) b[c] = { value: a }; else if (u(a)) {
                                b[c] = {}; !g.keys && a.length >
                                    x.length && "string" === typeof a[0] && (b[c]["hc-key"] = a[0], ++d); for (var e = 0; e < x.length; ++e, ++d)x[e] && "undefined" !== typeof a[d] && (0 < x[e].indexOf(".") ? F.prototype.setNestedProperty(b[c], a[d], x[e]) : b[c][x[e]] = a[d])
                                } r && "_i" === r[0] && (b[c]._i = c)
                            }); this.getBox(b); (this.chart.mapTransforms = t = h && h.mapTransforms || n && n["hc-transform"] || t) && k(t, function (a) { a.rotation && (a.cosAngle = Math.cos(a.rotation), a.sinAngle = Math.sin(a.rotation)) }); if (n) {
                            "FeatureCollection" === n.type && (this.mapTitle = n.title, n = q.geojson(n, this.type,
                                this)); this.mapData = n; this.mapMap = {}; for (t = 0; t < n.length; t++)h = n[t], l = h.properties, h._i = t, r[0] && l && l[r[0]] && (h[r[0]] = l[r[0]]), d[h[r[0]]] = h; this.mapMap = d; if (b && r[1]) { var y = r[1]; b.forEach(function (a) { a = v(y, a); d[a] && w.push(d[a]) }) } if (g.allAreas) { this.getBox(n); b = b || []; if (r[1]) { var E = r[1]; b.forEach(function (a) { w.push(v(E, a)) }) } w = "|" + w.map(function (a) { return a && a[r[0]] }).join("|") + "|"; n.forEach(function (a) { r[0] && -1 !== w.indexOf("|" + a[r[0]] + "|") || (b.push(p(a, { value: null })), e = !1) }) } else this.getBox(w)
                            } f.prototype.setData.call(this,
                                b, a, c, e)
                        }, drawGraph: r, drawDataLabels: r, doFullTranslate: function () { return this.isDirtyData || this.chart.isResizing || this.chart.renderer.isVML || !this.baseTrans }, translate: function () { var b = this, a = b.xAxis, c = b.yAxis, e = b.doFullTranslate(); b.generatePoints(); b.data.forEach(function (f) { A(f._midX) && A(f._midY) && (f.plotX = a.toPixels(f._midX, !0), f.plotY = c.toPixels(f._midY, !0)); e && (f.shapeType = "path", f.shapeArgs = { d: b.translatePath(f.path) }) }); H(b, "afterTranslate") }, pointAttribs: function (e, a) {
                            a = e.series.chart.styledMode ?
                                this.colorAttribs(e) : b.column.prototype.pointAttribs.call(this, e, a); a["stroke-width"] = c(e.options[this.pointAttrToOptions && this.pointAttrToOptions["stroke-width"] || "borderWidth"], "inherit"); return a
                        }, drawPoints: function () {
                            var e = this, a = e.xAxis, f = e.yAxis, g = e.group, h = e.chart, k = h.renderer, p = this.baseTrans; e.transformGroup || (e.transformGroup = k.g().attr({ scaleX: 1, scaleY: 1 }).add(g), e.transformGroup.survive = !0); if (e.doFullTranslate()) h.hasRendered && !h.styledMode && e.points.forEach(function (a) {
                            a.shapeArgs &&
                                (a.shapeArgs.fill = e.pointAttribs(a, a.state).fill)
                            }), e.group = e.transformGroup, b.column.prototype.drawPoints.apply(e), e.group = g, e.points.forEach(function (a) { if (a.graphic) { var b = ""; a.name && (b += "highcharts-name-" + a.name.replace(/ /g, "-").toLowerCase()); a.properties && a.properties["hc-key"] && (b += " highcharts-key-" + a.properties["hc-key"].toLowerCase()); b && a.graphic.addClass(b); h.styledMode && a.graphic.css(e.pointAttribs(a, a.selected && "select" || void 0)) } }), this.baseTrans = {
                                originX: a.min - a.minPixelPadding / a.transA,
                                originY: f.min - f.minPixelPadding / f.transA + (f.reversed ? 0 : f.len / f.transA), transAX: a.transA, transAY: f.transA
                            }, this.transformGroup.animate({ translateX: 0, translateY: 0, scaleX: 1, scaleY: 1 }); else {
                                var m = a.transA / p.transAX; var n = f.transA / p.transAY; var r = a.toPixels(p.originX, !0); var q = f.toPixels(p.originY, !0); .99 < m && 1.01 > m && .99 < n && 1.01 > n && (n = m = 1, r = Math.round(r), q = Math.round(q)); var d = this.transformGroup; if (h.renderer.globalAnimation) {
                                    var t = d.attr("translateX"); var u = d.attr("translateY"); var v = d.attr("scaleX");
                                    var A = d.attr("scaleY"); d.attr({ animator: 0 }).animate({ animator: 1 }, { step: function (a, b) { d.attr({ translateX: t + (r - t) * b.pos, translateY: u + (q - u) * b.pos, scaleX: v + (m - v) * b.pos, scaleY: A + (n - A) * b.pos }) } })
                                } else d.attr({ translateX: r, translateY: q, scaleX: m, scaleY: n })
                            } h.styledMode || g.element.setAttribute("stroke-width", c(e.options[e.pointAttrToOptions && e.pointAttrToOptions["stroke-width"] || "borderWidth"], 1) / (m || 1)); this.drawMapDataLabels()
                        }, drawMapDataLabels: function () {
                            f.prototype.drawDataLabels.call(this); this.dataLabelsGroup &&
                                this.dataLabelsGroup.clip(this.chart.clipRect)
                        }, render: function () { var b = this, a = f.prototype.render; b.chart.renderer.isVML && 3E3 < b.data.length ? setTimeout(function () { a.call(b) }) : a.call(b) }, animate: function (b) { var a = this.options.animation, c = this.group, e = this.xAxis, f = this.yAxis, g = e.pos, h = f.pos; this.chart.renderer.isSVG && (!0 === a && (a = { duration: 1E3 }), b ? c.attr({ translateX: g + e.len / 2, translateY: h + f.len / 2, scaleX: .001, scaleY: .001 }) : c.animate({ translateX: g, translateY: h, scaleX: 1, scaleY: 1 }, a)) }, animateDrilldown: function (b) {
                            var a =
                                this.chart.plotBox, c = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1], e = c.bBox, f = this.chart.options.drilldown.animation; b || (b = Math.min(e.width / a.width, e.height / a.height), c.shapeArgs = { scaleX: b, scaleY: b, translateX: e.x, translateY: e.y }, this.points.forEach(function (a) { a.graphic && a.graphic.attr(c.shapeArgs).animate({ scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 }, f) }))
                        }, drawLegendSymbol: z.drawRectangle, animateDrillupFrom: function (c) { b.column.prototype.animateDrillupFrom.call(this, c) }, animateDrillupTo: function (c) {
                            b.column.prototype.animateDrillupTo.call(this,
                                c)
                        }
                    }), D({
                        applyOptions: function (b, a) { var c = this.series; b = F.prototype.applyOptions.call(this, b, a); a = c.joinBy; c.mapData && c.mapMap && (a = F.prototype.getNestedProperty.call(b, a[1]), (a = "undefined" !== typeof a && c.mapMap[a]) ? (c.xyFromShape && (b.x = a._midX, b.y = a._midY), D(b, a)) : b.value = b.value || null); return b }, onMouseOver: function (b) { G.clearTimeout(this.colorInterval); if (null !== this.value || this.series.options.nullInteraction) F.prototype.onMouseOver.call(this, b); else this.series.onMouseOut(b) }, zoomTo: function () {
                            var b =
                                this.series; b.xAxis.setExtremes(this._minX, this._maxX, !1); b.yAxis.setExtremes(this._minY, this._maxY, !1); b.chart.redraw()
                        }
                    }, B)); ""
                }); O(q, "Series/MapLineSeries.js", [q["Core/Series/Series.js"]], function (n) {
                    var h = n.seriesTypes; n.seriesType("mapline", "map", { lineWidth: 1, fillColor: "none" }, { type: "mapline", colorProp: "stroke", pointAttrToOptions: { stroke: "color", "stroke-width": "lineWidth" }, pointAttribs: function (n, q) { n = h.map.prototype.pointAttribs.call(this, n, q); n.fill = this.options.fillColor; return n }, drawLegendSymbol: h.line.prototype.drawLegendSymbol });
                    ""
                }); O(q, "Series/MapPointSeries.js", [q["Core/Series/Series.js"], q["Core/Globals.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q, z) {
                    var y = z.merge, F = h.Series; n.seriesType("mappoint", "scatter", { dataLabels: { crop: !1, defer: !1, enabled: !0, formatter: function () { return this.point.name }, overflow: !1, style: { color: "#000000" } } }, { type: "mappoint", forceDL: !0, drawDataLabels: function () { F.prototype.drawDataLabels.call(this); this.dataLabelsGroup && this.dataLabelsGroup.clip(this.chart.clipRect) } }, {
                        applyOptions: function (h,
                            n) { h = "undefined" !== typeof h.lat && "undefined" !== typeof h.lon ? y(h, this.series.chart.fromLatLonToPoint(h)) : h; return q.prototype.applyOptions.call(this, h, n) }
                    }); ""
                }); O(q, "Series/Bubble/BubbleLegend.js", [q["Core/Chart/Chart.js"], q["Core/Color/Color.js"], q["Core/Globals.js"], q["Core/Legend.js"], q["Core/Utilities.js"]], function (n, h, q, z, y) {
                    var F = h.parse; h = y.addEvent; var L = y.arrayMax, G = y.arrayMin, B = y.isNumber, r = y.merge, m = y.objectEach, g = y.pick, D = y.setOptions, H = y.stableSort, v = y.wrap; ""; var u = q.Series, A = q.noop;
                    D({ legend: { bubbleLegend: { borderColor: void 0, borderWidth: 2, className: void 0, color: void 0, connectorClassName: void 0, connectorColor: void 0, connectorDistance: 60, connectorWidth: 1, enabled: !1, labels: { className: void 0, allowOverlap: !1, format: "", formatter: void 0, align: "right", style: { fontSize: 10, color: void 0 }, x: 0, y: 0 }, maxSize: 60, minSize: 10, legendIndex: 0, ranges: { value: void 0, borderColor: void 0, color: void 0, connectorColor: void 0 }, sizeBy: "area", sizeByAbsoluteValue: !1, zIndex: 1, zThreshold: 0 } } }); D = function () {
                        function h(g,
                            c) { this.options = this.symbols = this.visible = this.ranges = this.movementX = this.maxLabel = this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0; this.setState = A; this.init(g, c) } h.prototype.init = function (g, c) { this.options = g; this.visible = !0; this.chart = c.chart; this.legend = c }; h.prototype.addToLegend = function (g) { g.splice(this.options.legendIndex, 0, this) }; h.prototype.drawLegendSymbol = function (h) {
                                var c = this.chart, e = this.options,
                                f = g(h.options.itemDistance, 20), b = e.ranges; var k = e.connectorDistance; this.fontMetrics = c.renderer.fontMetrics(e.labels.style.fontSize.toString() + "px"); b && b.length && B(b[0].value) ? (H(b, function (a, b) { return b.value - a.value }), this.ranges = b, this.setOptions(), this.render(), c = this.getMaxLabelSize(), b = this.ranges[0].radius, h = 2 * b, k = k - b + c.width, k = 0 < k ? k : 0, this.maxLabel = c, this.movementX = "left" === e.labels.align ? k : 0, this.legendItemWidth = h + k + f, this.legendItemHeight = h + this.fontMetrics.h / 2) : h.options.bubbleLegend.autoRanges =
                                    !0
                            }; h.prototype.setOptions = function () {
                                var h = this.ranges, c = this.options, e = this.chart.series[c.seriesIndex], f = this.legend.baseline, b = { "z-index": c.zIndex, "stroke-width": c.borderWidth }, l = { "z-index": c.zIndex, "stroke-width": c.connectorWidth }, a = this.getLabelStyles(), p = e.options.marker.fillOpacity, m = this.chart.styledMode; h.forEach(function (k, n) {
                                    m || (b.stroke = g(k.borderColor, c.borderColor, e.color), b.fill = g(k.color, c.color, 1 !== p ? F(e.color).setOpacity(p).get("rgba") : e.color), l.stroke = g(k.connectorColor, c.connectorColor,
                                        e.color)); h[n].radius = this.getRangeRadius(k.value); h[n] = r(h[n], { center: h[0].radius - h[n].radius + f }); m || r(!0, h[n], { bubbleStyle: r(!1, b), connectorStyle: r(!1, l), labelStyle: a })
                                }, this)
                            }; h.prototype.getLabelStyles = function () {
                                var h = this.options, c = {}, e = "left" === h.labels.align, f = this.legend.options.rtl; m(h.labels.style, function (b, e) { "color" !== e && "fontSize" !== e && "z-index" !== e && (c[e] = b) }); return r(!1, c, {
                                    "font-size": h.labels.style.fontSize, fill: g(h.labels.style.color, "#000000"), "z-index": h.zIndex, align: f || e ? "right" :
                                        "left"
                                })
                            }; h.prototype.getRangeRadius = function (g) { var c = this.options; return this.chart.series[this.options.seriesIndex].getRadius.call(this, c.ranges[c.ranges.length - 1].value, c.ranges[0].value, c.minSize, c.maxSize, g) }; h.prototype.render = function () {
                                var g = this.chart.renderer, c = this.options.zThreshold; this.symbols || (this.symbols = { connectors: [], bubbleItems: [], labels: [] }); this.legendSymbol = g.g("bubble-legend"); this.legendItem = g.g("bubble-legend-item"); this.legendSymbol.translateX = 0; this.legendSymbol.translateY =
                                    0; this.ranges.forEach(function (e) { e.value >= c && this.renderRange(e) }, this); this.legendSymbol.add(this.legendItem); this.legendItem.add(this.legendGroup); this.hideOverlappingLabels()
                            }; h.prototype.renderRange = function (g) {
                                var c = this.options, e = c.labels, f = this.chart.renderer, b = this.symbols, h = b.labels, a = g.center, k = Math.abs(g.radius), p = c.connectorDistance || 0, m = e.align, n = e.style.fontSize; p = this.legend.options.rtl || "left" === m ? -p : p; e = c.connectorWidth; var r = this.ranges[0].radius || 0, q = a - k - c.borderWidth / 2 + e / 2; n =
                                    n / 2 - (this.fontMetrics.h - n) / 2; var u = f.styledMode; "center" === m && (p = 0, c.connectorDistance = 0, g.labelStyle.align = "center"); m = q + c.labels.y; var v = r + p + c.labels.x; b.bubbleItems.push(f.circle(r, a + ((q % 1 ? 1 : .5) - (e % 2 ? 0 : .5)), k).attr(u ? {} : g.bubbleStyle).addClass((u ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-symbol " + (c.className || "")).add(this.legendSymbol)); b.connectors.push(f.path(f.crispLine([["M", r, q], ["L", r + p, q]], c.connectorWidth)).attr(u ? {} : g.connectorStyle).addClass((u ?
                                        "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (c.connectorClassName || "")).add(this.legendSymbol)); g = f.text(this.formatLabel(g), v, m + n).attr(u ? {} : g.labelStyle).addClass("highcharts-bubble-legend-labels " + (c.labels.className || "")).add(this.legendSymbol); h.push(g); g.placed = !0; g.alignAttr = { x: v, y: m + n }
                            }; h.prototype.getMaxLabelSize = function () { var g, c; this.symbols.labels.forEach(function (e) { c = e.getBBox(!0); g = g ? c.width > g.width ? c : g : c }); return g || {} }; h.prototype.formatLabel =
                                function (g) { var c = this.options, e = c.labels.formatter; c = c.labels.format; var f = this.chart.numberFormatter; return c ? y.format(c, g) : e ? e.call(g) : f(g.value, 1) }; h.prototype.hideOverlappingLabels = function () { var g = this.chart, c = this.symbols; !this.options.labels.allowOverlap && c && (g.hideOverlappingLabels(c.labels), c.labels.forEach(function (e, f) { e.newOpacity ? e.newOpacity !== e.oldOpacity && c.connectors[f].show() : c.connectors[f].hide() })) }; h.prototype.getRanges = function () {
                                    var h = this.legend.bubbleLegend, c = h.options.ranges,
                                    e, f = Number.MAX_VALUE, b = -Number.MAX_VALUE; h.chart.series.forEach(function (a) { a.isBubble && !a.ignoreSeries && (e = a.zData.filter(B), e.length && (f = g(a.options.zMin, Math.min(f, Math.max(G(e), !1 === a.options.displayNegative ? a.options.zThreshold : -Number.MAX_VALUE))), b = g(a.options.zMax, Math.max(b, L(e))))) }); var l = f === b ? [{ value: b }] : [{ value: f }, { value: (f + b) / 2 }, { value: b, autoRanges: !0 }]; c.length && c[0].radius && l.reverse(); l.forEach(function (a, b) { c && c[b] && (l[b] = r(!1, c[b], a)) }); return l
                                }; h.prototype.predictBubbleSizes =
                                    function () { var g = this.chart, c = this.fontMetrics, e = g.legend.options, f = "horizontal" === e.layout, b = f ? g.legend.lastLineHeight : 0, h = g.plotSizeX, a = g.plotSizeY, p = g.series[this.options.seriesIndex]; g = Math.ceil(p.minPxSize); var m = Math.ceil(p.maxPxSize); p = p.options.maxSize; var n = Math.min(a, h); if (e.floating || !/%$/.test(p)) c = m; else if (p = parseFloat(p), c = (n + b - c.h / 2) * p / 100 / (p / 100 + 1), f && a - c >= h || !f && h - c >= a) c = m; return [g, Math.ceil(c)] }; h.prototype.updateRanges = function (g, c) {
                                        var e = this.legend.options.bubbleLegend; e.minSize =
                                            g; e.maxSize = c; e.ranges = this.getRanges()
                                    }; h.prototype.correctSizes = function () { var g = this.legend, c = this.chart.series[this.options.seriesIndex]; 1 < Math.abs(Math.ceil(c.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, c.maxPxSize), g.render()) }; return h
                    }(); h(z, "afterGetAllItems", function (g) {
                        var h = this.bubbleLegend, c = this.options, e = c.bubbleLegend, f = this.chart.getVisibleBubbleSeriesIndex(); h && h.ranges && h.ranges.length && (e.ranges.length && (e.autoRanges = !!e.ranges[0].autoRanges), this.destroyItem(h));
                        0 <= f && c.enabled && e.enabled && (e.seriesIndex = f, this.bubbleLegend = new q.BubbleLegend(e, this), this.bubbleLegend.addToLegend(g.allItems))
                    }); n.prototype.getVisibleBubbleSeriesIndex = function () { for (var g = this.series, h = 0; h < g.length;) { if (g[h] && g[h].isBubble && g[h].visible && g[h].zData.length) return h; h++ } return -1 }; z.prototype.getLinesHeights = function () {
                        var g = this.allItems, h = [], c = g.length, e, f = 0; for (e = 0; e < c; e++)if (g[e].legendItemHeight && (g[e].itemHeight = g[e].legendItemHeight), g[e] === g[c - 1] || g[e + 1] && g[e]._legendItemPos[1] !==
                            g[e + 1]._legendItemPos[1]) { h.push({ height: 0 }); var b = h[h.length - 1]; for (f; f <= e; f++)g[f].itemHeight > b.height && (b.height = g[f].itemHeight); b.step = e } return h
                    }; z.prototype.retranslateItems = function (g) {
                        var h, c, e, f = this.options.rtl, b = 0; this.allItems.forEach(function (k, a) {
                            h = k.legendGroup.translateX; c = k._legendItemPos[1]; if ((e = k.movementX) || f && k.ranges) e = f ? h - k.options.maxSize / 2 : h + e, k.legendGroup.attr({ translateX: e }); a > g[b].step && b++; k.legendGroup.attr({ translateY: Math.round(c + g[b].height / 2) }); k._legendItemPos[1] =
                                c + g[b].height / 2
                        })
                    }; h(u, "legendItemClick", function () { var g = this.chart, h = this.visible, c = this.chart.legend; c && c.bubbleLegend && (this.visible = !h, this.ignoreSeries = h, g = 0 <= g.getVisibleBubbleSeriesIndex(), c.bubbleLegend.visible !== g && (c.update({ bubbleLegend: { enabled: g } }), c.bubbleLegend.visible = g), this.visible = h) }); v(n.prototype, "drawChartBox", function (g, h, c) {
                        var e = this.legend, f = 0 <= this.getVisibleBubbleSeriesIndex(); if (e && e.options.enabled && e.bubbleLegend && e.options.bubbleLegend.autoRanges && f) {
                            var b = e.bubbleLegend.options;
                            f = e.bubbleLegend.predictBubbleSizes(); e.bubbleLegend.updateRanges(f[0], f[1]); b.placed || (e.group.placed = !1, e.allItems.forEach(function (b) { b.legendGroup.translateY = null })); e.render(); this.getMargins(); this.axes.forEach(function (c) { c.visible && c.render(); b.placed || (c.setScale(), c.updateNames(), m(c.ticks, function (a) { a.isNew = !0; a.isNewLabel = !0 })) }); b.placed = !0; this.getMargins(); g.call(this, h, c); e.bubbleLegend.correctSizes(); e.retranslateItems(e.getLinesHeights())
                        } else g.call(this, h, c), e && e.options.enabled &&
                            e.bubbleLegend && (e.render(), e.retranslateItems(e.getLinesHeights()))
                    }); q.BubbleLegend = D; return q.BubbleLegend
                }); O(q, "Series/Bubble/BubbleSeries.js", [q["Core/Axis/Axis.js"], q["Core/Series/Series.js"], q["Core/Color/Color.js"], q["Core/Globals.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q, z, y, F) {
                    var L = q.parse; q = z.noop; var G = F.arrayMax, B = F.arrayMin, r = F.clamp, m = F.extend, g = F.isNumber, D = F.pick, H = F.pInt, v = z.Series, u = h.seriesTypes; ""; h.seriesType("bubble", "scatter", {
                        dataLabels: {
                            formatter: function () { return this.point.z },
                            inside: !0, verticalAlign: "middle"
                        }, animationLimit: 250, marker: { lineColor: null, lineWidth: 1, fillOpacity: .5, radius: null, states: { hover: { radiusPlus: 0 } }, symbol: "circle" }, minSize: 8, maxSize: "20%", softThreshold: !1, states: { hover: { halo: { size: 5 } } }, tooltip: { pointFormat: "({point.x}, {point.y}), Size: {point.z}" }, turboThreshold: 0, zThreshold: 0, zoneAxis: "z"
                    }, {
                        pointArrayMap: ["y", "z"], parallelArrays: ["x", "y", "z"], trackerGroups: ["group", "dataLabelsGroup"], specialGroup: "group", bubblePadding: !0, zoneAxis: "z", directTouch: !0,
                        isBubble: !0, pointAttribs: function (g, h) { var k = this.options.marker.fillOpacity; g = v.prototype.pointAttribs.call(this, g, h); 1 !== k && (g.fill = L(g.fill).setOpacity(k).get("rgba")); return g }, getRadii: function (g, h, k) { var c = this.zData, e = this.yData, f = k.minPxSize, b = k.maxPxSize, l = []; var a = 0; for (k = c.length; a < k; a++) { var m = c[a]; l.push(this.getRadius(g, h, f, b, m, e[a])) } this.radii = l }, getRadius: function (h, m, k, c, e, f) {
                            var b = this.options, l = "width" !== b.sizeBy, a = b.zThreshold, n = m - h, p = .5; if (null === f || null === e) return null; if (g(e)) {
                            b.sizeByAbsoluteValue &&
                                (e = Math.abs(e - a), n = Math.max(m - a, Math.abs(h - a)), h = 0); if (e < h) return k / 2 - 1; 0 < n && (p = (e - h) / n)
                            } l && 0 <= p && (p = Math.sqrt(p)); return Math.ceil(k + p * (c - k)) / 2
                        }, animate: function (g) { !g && this.points.length < this.options.animationLimit && this.points.forEach(function (g) { var h = g.graphic; h && h.width && (this.hasRendered || h.attr({ x: g.plotX, y: g.plotY, width: 1, height: 1 }), h.animate(this.markerAttribs(g), this.options.animation)) }, this) }, hasData: function () { return !!this.processedXData.length }, translate: function () {
                            var h, n = this.data,
                            k = this.radii; u.scatter.prototype.translate.call(this); for (h = n.length; h--;) { var c = n[h]; var e = k ? k[h] : 0; g(e) && e >= this.minPxSize / 2 ? (c.marker = m(c.marker, { radius: e, width: 2 * e, height: 2 * e }), c.dlBox = { x: c.plotX - e, y: c.plotY - e, width: 2 * e, height: 2 * e }) : c.shapeArgs = c.plotY = c.dlBox = void 0 }
                        }, alignDataLabel: u.column.prototype.alignDataLabel, buildKDTree: q, applyZones: q
                    }, { haloPath: function (g) { return y.prototype.haloPath.call(this, 0 === g ? 0 : (this.marker ? this.marker.radius || 0 : 0) + g) }, ttBelow: !1 }); n.prototype.beforePadding = function () {
                        var h =
                            this, m = this.len, k = this.chart, c = 0, e = m, f = this.isXAxis, b = f ? "xData" : "yData", l = this.min, a = {}, n = Math.min(k.plotWidth, k.plotHeight), q = Number.MAX_VALUE, u = -Number.MAX_VALUE, v = this.max - l, y = m / v, z = []; this.series.forEach(function (b) {
                                var c = b.options; !b.bubblePadding || !b.visible && k.options.chart.ignoreHiddenSeries || (h.allowZoomOutside = !0, z.push(b), f && (["minSize", "maxSize"].forEach(function (b) { var d = c[b], e = /%$/.test(d); d = H(d); a[b] = e ? n * d / 100 : d }), b.minPxSize = a.minSize, b.maxPxSize = Math.max(a.maxSize, a.minSize), b = b.zData.filter(g),
                                    b.length && (q = D(c.zMin, r(B(b), !1 === c.displayNegative ? c.zThreshold : -Number.MAX_VALUE, q)), u = D(c.zMax, Math.max(u, G(b))))))
                            }); z.forEach(function (a) { var k = a[b], m = k.length; f && a.getRadii(q, u, a); if (0 < v) for (; m--;)if (g(k[m]) && h.dataMin <= k[m] && k[m] <= h.max) { var d = a.radii ? a.radii[m] : 0; c = Math.min((k[m] - l) * y - d, c); e = Math.max((k[m] - l) * y + d, e) } }); z.length && 0 < v && !this.logarithmic && (e -= m, y *= (m + Math.max(0, c) - Math.min(e, m)) / m, [["min", "userMin", c], ["max", "userMax", e]].forEach(function (a) {
                            "undefined" === typeof D(h.options[a[0]],
                                h[a[1]]) && (h[a[0]] += a[2] / y)
                            }))
                    }; ""
                }); O(q, "Series/MapBubbleSeries.js", [q["Core/Series/Series.js"], q["Core/Series/Point.js"], q["Core/Utilities.js"]], function (n, h, q) {
                    var z = q.merge, y = n.seriesTypes; y.bubble && n.seriesType("mapbubble", "bubble", { animationLimit: 500, tooltip: { pointFormat: "{point.name}: {point.z}" } }, { xyFromShape: !0, type: "mapbubble", pointArrayMap: ["z"], getMapData: y.map.prototype.getMapData, getBox: y.map.prototype.getBox, setData: y.map.prototype.setData, setOptions: y.map.prototype.setOptions }, {
                        applyOptions: function (n,
                            q) { return n && "undefined" !== typeof n.lat && "undefined" !== typeof n.lon ? h.prototype.applyOptions.call(this, z(n, this.series.chart.fromLatLonToPoint(n)), q) : y.map.prototype.pointClass.prototype.applyOptions.call(this, n, q) }, isValid: function () { return "number" === typeof this.z }, ttBelow: !1
                    }); ""
                }); O(q, "Series/HeatmapSeries.js", [q["Core/Series/Series.js"], q["Mixins/ColorMapSeries.js"], q["Core/Globals.js"], q["Mixins/LegendSymbol.js"], q["Core/Renderer/SVG/SVGRenderer.js"], q["Core/Utilities.js"]], function (n, h, q, z,
                    y, F) {
                        var L = h.colorMapPointMixin; h = h.colorMapSeriesMixin; var G = q.noop, B = F.clamp, r = F.extend, m = F.fireEvent, g = F.isNumber, D = F.merge, H = F.pick, v = q.Series; F = n.seriesTypes; var u = y.prototype.symbols; ""; n.seriesType("heatmap", "scatter", {
                            animation: !1, borderWidth: 0, nullColor: "#f7f7f7", dataLabels: { formatter: function () { return this.point.value }, inside: !0, verticalAlign: "middle", crop: !1, overflow: !1, padding: 0 }, marker: { symbol: "rect", radius: 0, lineColor: void 0, states: { hover: { lineWidthPlus: 0 }, select: {} } }, clip: !0, pointRange: null,
                            tooltip: { pointFormat: "{point.x}, {point.y}: {point.value}<br/>" }, states: { hover: { halo: !1, brightness: .2 } }
                        }, D(h, {
                            pointArrayMap: ["y", "value"], hasPointSpecificOptions: !0, getExtremesFromAll: !0, directTouch: !0, init: function () { v.prototype.init.apply(this, arguments); var g = this.options; g.pointRange = H(g.pointRange, g.colsize || 1); this.yAxis.axisPointRange = g.rowsize || 1; r(u, { ellipse: u.circle, rect: u.square }) }, getSymbol: v.prototype.getSymbol, setClip: function (g) {
                                var h = this.chart; v.prototype.setClip.apply(this, arguments);
                                (!1 !== this.options.clip || g) && this.markerGroup.clip((g || this.clipBox) && this.sharedClipKey ? h[this.sharedClipKey] : h.clipRect)
                            }, translate: function () {
                                var g = this.options, h = g.marker && g.marker.symbol || "", k = u[h] ? h : "rect"; g = this.options; var c = -1 !== ["circle", "square"].indexOf(k); this.generatePoints(); this.points.forEach(function (e) {
                                    var f = e.getCellAttributes(), b = { x: Math.min(f.x1, f.x2), y: Math.min(f.y1, f.y2), width: Math.max(Math.abs(f.x2 - f.x1), 0), height: Math.max(Math.abs(f.y2 - f.y1), 0) }; var g = e.hasImage = 0 === (e.marker &&
                                        e.marker.symbol || h || "").indexOf("url"); if (c) { var a = Math.abs(b.width - b.height); b.x = Math.min(f.x1, f.x2) + (b.width < b.height ? 0 : a / 2); b.y = Math.min(f.y1, f.y2) + (b.width < b.height ? a / 2 : 0); b.width = b.height = Math.min(b.width, b.height) } a = { plotX: (f.x1 + f.x2) / 2, plotY: (f.y1 + f.y2) / 2, clientX: (f.x1 + f.x2) / 2, shapeType: "path", shapeArgs: D(!0, b, { d: u[k](b.x, b.y, b.width, b.height) }) }; g && (e.marker = { width: b.width, height: b.height }); r(e, a)
                                }); m(this, "afterTranslate")
                            }, pointAttribs: function (g, h) {
                                var k = v.prototype.pointAttribs.call(this,
                                    g, h), c = this.options || {}, e = this.chart.options.plotOptions || {}, f = e.series || {}, b = e.heatmap || {}; e = c.borderColor || b.borderColor || f.borderColor; f = c.borderWidth || b.borderWidth || f.borderWidth || k["stroke-width"]; k.stroke = g && g.marker && g.marker.lineColor || c.marker && c.marker.lineColor || e || this.color; k["stroke-width"] = f; h && (g = D(c.states[h], c.marker && c.marker.states[h], g.options.states && g.options.states[h] || {}), h = g.brightness, k.fill = g.color || q.color(k.fill).brighten(h || 0).get(), k.stroke = g.lineColor); return k
                            },
                            markerAttribs: function (g, h) { var k = g.marker || {}, c = this.options.marker || {}, e = g.shapeArgs || {}, f = {}; if (g.hasImage) return { x: g.plotX, y: g.plotY }; if (h) { var b = c.states[h] || {}; var l = k.states && k.states[h] || {};[["width", "x"], ["height", "y"]].forEach(function (a) { f[a[0]] = (l[a[0]] || b[a[0]] || e[a[0]]) + (l[a[0] + "Plus"] || b[a[0] + "Plus"] || 0); f[a[1]] = e[a[1]] + (e[a[0]] - f[a[0]]) / 2 }) } return h ? f : e }, drawPoints: function () {
                                var g = this; if ((this.options.marker || {}).enabled || this._hasPointMarkers) v.prototype.drawPoints.call(this), this.points.forEach(function (h) {
                                h.graphic &&
                                    h.graphic[g.chart.styledMode ? "css" : "animate"](g.colorAttribs(h))
                                })
                            }, hasData: function () { return !!this.processedXData.length }, getValidPoints: function (g, h) { return v.prototype.getValidPoints.call(this, g, h, !0) }, getBox: G, drawLegendSymbol: z.drawRectangle, alignDataLabel: F.column.prototype.alignDataLabel, getExtremes: function () { var h = v.prototype.getExtremes.call(this, this.valueData), m = h.dataMin; h = h.dataMax; g(m) && (this.valueMin = m); g(h) && (this.valueMax = h); return v.prototype.getExtremes.call(this) }
                        }), D(L, {
                            applyOptions: function (g,
                                h) { g = q.Point.prototype.applyOptions.call(this, g, h); g.formatPrefix = g.isNull || null === g.value ? "null" : "point"; return g }, isValid: function () { return Infinity !== this.value && -Infinity !== this.value }, haloPath: function (g) { if (!g) return []; var h = this.shapeArgs; return ["M", h.x - g, h.y - g, "L", h.x - g, h.y + h.height + g, h.x + h.width + g, h.y + h.height + g, h.x + h.width + g, h.y - g, "Z"] }, getCellAttributes: function () {
                                    var g = this.series, h = g.options, k = (h.colsize || 1) / 2, c = (h.rowsize || 1) / 2, e = g.xAxis, f = g.yAxis, b = this.options.marker || g.options.marker;
                                    g = g.pointPlacementToXValue(); var l = H(this.pointPadding, h.pointPadding, 0), a = { x1: B(Math.round(e.len - (e.translate(this.x - k, !1, !0, !1, !0, -g) || 0)), -e.len, 2 * e.len), x2: B(Math.round(e.len - (e.translate(this.x + k, !1, !0, !1, !0, -g) || 0)), -e.len, 2 * e.len), y1: B(Math.round(f.translate(this.y - c, !1, !0, !1, !0) || 0), -f.len, 2 * f.len), y2: B(Math.round(f.translate(this.y + c, !1, !0, !1, !0) || 0), -f.len, 2 * f.len) };[["width", "x"], ["height", "y"]].forEach(function (c) {
                                        var e = c[0]; c = c[1]; var f = c + "1", g = c + "2", h = Math.abs(a[f] - a[g]), k = b && b.lineWidth ||
                                            0, m = Math.abs(a[f] + a[g]) / 2; b[e] && b[e] < h && (a[f] = m - b[e] / 2 - k / 2, a[g] = m + b[e] / 2 + k / 2); l && ("y" === c && (f = g, g = c + "1"), a[f] += l, a[g] -= l)
                                    }); return a
                                }
                        })); ""
                }); O(q, "Extensions/GeoJSON.js", [q["Core/Chart/Chart.js"], q["Core/Globals.js"], q["Core/Utilities.js"]], function (n, h, q) {
                    function z(h, m) { var g, n = !1, r = h.x, q = h.y; h = 0; for (g = m.length - 1; h < m.length; g = h++) { var u = m[h][1] > q; var y = m[g][1] > q; u !== y && r < (m[g][0] - m[h][0]) * (q - m[h][1]) / (m[g][1] - m[h][1]) + m[h][0] && (n = !n) } return n } var y = h.win, F = q.error, L = q.extend, G = q.format, B = q.merge;
                    q = q.wrap; ""; n.prototype.transformFromLatLon = function (h, m) {
                        var g, n = (null === (g = this.userOptions.chart) || void 0 === g ? void 0 : g.proj4) || y.proj4; if (!n) return F(21, !1, this), { x: 0, y: null }; h = n(m.crs, [h.lon, h.lat]); g = m.cosAngle || m.rotation && Math.cos(m.rotation); n = m.sinAngle || m.rotation && Math.sin(m.rotation); h = m.rotation ? [h[0] * g + h[1] * n, -h[0] * n + h[1] * g] : h; return {
                            x: ((h[0] - (m.xoffset || 0)) * (m.scale || 1) + (m.xpan || 0)) * (m.jsonres || 1) + (m.jsonmarginX || 0), y: (((m.yoffset || 0) - h[1]) * (m.scale || 1) + (m.ypan || 0)) * (m.jsonres || 1) -
                                (m.jsonmarginY || 0)
                        }
                    }; n.prototype.transformToLatLon = function (h, m) { if ("undefined" === typeof y.proj4) F(21, !1, this); else { h = { x: ((h.x - (m.jsonmarginX || 0)) / (m.jsonres || 1) - (m.xpan || 0)) / (m.scale || 1) + (m.xoffset || 0), y: ((-h.y - (m.jsonmarginY || 0)) / (m.jsonres || 1) + (m.ypan || 0)) / (m.scale || 1) + (m.yoffset || 0) }; var g = m.cosAngle || m.rotation && Math.cos(m.rotation), n = m.sinAngle || m.rotation && Math.sin(m.rotation); m = y.proj4(m.crs, "WGS84", m.rotation ? { x: h.x * g + h.y * -n, y: h.x * n + h.y * g } : h); return { lat: m.y, lon: m.x } } }; n.prototype.fromPointToLatLon =
                        function (h) { var m = this.mapTransforms, g; if (m) { for (g in m) if (Object.hasOwnProperty.call(m, g) && m[g].hitZone && z({ x: h.x, y: -h.y }, m[g].hitZone.coordinates[0])) return this.transformToLatLon(h, m[g]); return this.transformToLatLon(h, m["default"]) } F(22, !1, this) }; n.prototype.fromLatLonToPoint = function (h) {
                            var m = this.mapTransforms, g; if (!m) return F(22, !1, this), { x: 0, y: null }; for (g in m) if (Object.hasOwnProperty.call(m, g) && m[g].hitZone) { var n = this.transformFromLatLon(h, m[g]); if (z({ x: n.x, y: -n.y }, m[g].hitZone.coordinates[0])) return n } return this.transformFromLatLon(h,
                                m["default"])
                        }; h.geojson = function (h, m, g) {
                            var n = [], q = [], r = function (g) { g.forEach(function (g, h) { 0 === h ? q.push(["M", g[0], -g[1]]) : q.push(["L", g[0], -g[1]]) }) }; m = m || "map"; h.features.forEach(function (g) {
                                var h = g.geometry, p = h.type; h = h.coordinates; g = g.properties; var k; q = []; "map" === m || "mapbubble" === m ? ("Polygon" === p ? (h.forEach(r), q.push(["Z"])) : "MultiPolygon" === p && (h.forEach(function (c) { c.forEach(r) }), q.push(["Z"])), q.length && (k = { path: q })) : "mapline" === m ? ("LineString" === p ? r(h) : "MultiLineString" === p && h.forEach(r),
                                    q.length && (k = { path: q })) : "mappoint" === m && "Point" === p && (k = { x: h[0], y: -h[1] }); k && n.push(L(k, { name: g.name || g.NAME, properties: g }))
                            }); g && h.copyrightShort && (g.chart.mapCredits = G(g.chart.options.credits.mapText, { geojson: h }), g.chart.mapCreditsFull = G(g.chart.options.credits.mapTextFull, { geojson: h })); return n
                        }; 
                });
    O(q, "masters/modules/map.src.js", [], function () { }); O(q, "masters/highmaps.src.js", [q["masters/highcharts.src.js"]], function (n) { n.product = "Highmaps"; return n }); q["masters/highmaps.src.js"]._modules = q; return q["masters/highmaps.src.js"]
});
//# sourceMappingURL=highmaps.js.map