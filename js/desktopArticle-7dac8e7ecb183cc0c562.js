! function(e) {
    function t(t) {
        for (var a, n, s = t[0], c = t[1], l = t[2], u = 0, p = []; u < s.length; u++) n = s[u], Object.prototype.hasOwnProperty.call(o, n) && o[n] && p.push(o[n][0]), o[n] = 0;
        for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (e[a] = c[a]);
        for (d && d(t); p.length;) p.shift()();
        return r.push.apply(r, l || []), i()
    }

    function i() {
        for (var e, t = 0; t < r.length; t++) {
            for (var i = r[t], a = !0, s = 1; s < i.length; s++) {
                var c = i[s];
                0 !== o[c] && (a = !1)
            }
            a && (r.splice(t--, 1), e = n(n.s = i[0]))
        }
        return e
    }
    var a = {},
        o = {
            6: 0
        },
        r = [];

    function n(t) {
        if (a[t]) return a[t].exports;
        var i = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = a, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "";
    var s = window.webpackJsonp = window.webpackJsonp || [],
        c = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var d = c;
    r.push([295, 0]), i()
}({
    143: function(e, t, i) {
        "use strict";

        function a(e) {
            Array.from(document.querySelectorAll(".current-page")).forEach((function(e) {
                return e.classList.remove("current-page")
            })), document.querySelector("#article-container-".concat(e)).classList.add("current-page")
        }
        e.exports = {
            addPrintEventListener: function(e) {
                var t = document.querySelector("#article-container-".concat(e, " .print"));
                t.getAttribute("clickable") || (t.addEventListener("click", (function() {
                    a(e), window.print()
                })), t.setAttribute("clickable", !0))
            },
            updatePrintPage: a
        }
    },
    144: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.recalculateAdRail = t.handleAdRail = void 0;
        var o, r, n, s = a(i(145)),
            c = a(i(80)),
            l = a(i(13)),
            d = i(4),
            u = {
                recMargin: 900,
                recxMargin: 400,
                topMargin: 24
            },
            p = 600 + u.recxMargin,
            v = !1,
            h = 1,
            m = function() {
                (0, d.changeAdConfig)(r);
                var e = document.createElement("div"),
                    t = "article-".concat(r, "-recx-").concat(++h);
                e.classList.add("fbs-ad-wrapper", "fbs-ad--".concat(t, "-wrapper")), (v || h > 4) && e.classList.add("fbs-ad--progressive");
                var i = (0, c.default)("fbs-ad", {
                    position: "recx",
                    "ad-id": t
                });
                e.appendChild(i), o.appendChild(e)
            },
            f = (0, l.default)((function() {
                return e = n.parentElement.getBoundingClientRect().bottom, t = void 0 === e ? 0 : e, void(!n.parentElement.getAttribute("data-cycle-complete") && t - window.innerHeight < .25 * window.innerHeight && (n.parentElement.setAttribute("data-cycle-complete", !0), m(), window.removeEventListener("scroll", f)));
                var e, t
            }), 100);
        t.handleAdRail = function(e, t, i) {
            if (!e.parentElement.parentElement.style.height) {
                var a = window.forbes["simple-site"].isSingleRec,
                    c = void 0 !== a && a;
                if (function(e, t, i) {
                        var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            o = i.size,
                            r = void 0 === o ? [] : o,
                            n = (0, s.default)(r, 2),
                            c = n[1],
                            l = e.parentElement.parentElement,
                            d = u["".concat(t, "Margin")],
                            p = Math.max(c, e.firstChild.clientHeight) + d;
                        l.style.height = a && "rec" === t ? "calc(100% - 10px)" : 0 === c ? "".concat(600 + d, "px") : 1 === c ? "1000px" : "".concat(p, "px")
                    }(e, t, i, c), "rec" === t) {
                    if (r = e.id.split("-")[1], o = document.querySelector('.right-rail[article-index="'.concat(r, '"] .ad-rail')), v = o.classList.contains("ad-rail--progressive"), h = 1, c) return void o.classList.add("ad-rail-complete");
                    v && (n = e, h = 0, window.addEventListener("scroll", f))
                } else {
                    if (o.classList.contains("ad-rail-complete")) return;
                    n = e;
                    var l = o.lastElementChild,
                        d = o.clientHeight - (l.offsetTop + l.clientHeight);
                    d > p ? v ? window.addEventListener("scroll", f) : 1 === h ? (n = o.querySelector('fbs-ad[position="rec"]'), window.addEventListener("scroll", f)) : m() : (l.style.height = "".concat(l.clientHeight + d, "px"), o.classList.add("ad-rail-complete"))
                }
            }
        };
        t.recalculateAdRail = function(e) {
            var t = e.getBoundingClientRect().height,
                i = e.querySelector('fbs-ad[position="rec"]'),
                a = e.querySelectorAll('fbs-ad[position="recx"]');
            if (i && a.length) {
                var o = Array.from(a).reduce((function(e, t) {
                        return e + (t.parentElement || {}).clientHeight
                    }), 0),
                    r = i.parentElement.clientHeight + o - 1500 - 50;
                if (r / a.length < 1e3)
                    do {
                        e.removeChild(e.lastElementChild), e.lastElementChild && e.lastElementChild.classList.add("last"), a = e.querySelectorAll('fbs-ad[position="recx"]')
                    } while (a.length && r / a.length < 1e3);
                a.length ? (i.parentElement.style.height = "".concat(1500, "px"), Array.from(a).forEach((function(e) {
                    e.parentElement.style.height = "".concat(Math.floor(r / a.length), "px")
                }))) : i.parentElement.style.height = "".concat(t, "px")
            }
            e.classList.add("adrail-destroyed")
        }
    },
    145: function(e, t, i) {
        var a = i(300),
            o = i(301),
            r = i(135),
            n = i(302);
        e.exports = function(e, t) {
            return a(e) || o(e, t) || r(e, t) || n()
        }
    },
    146: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o, r = a(i(68)),
            n = function() {
                Array.from(o.querySelectorAll(".top-stories__title")).forEach((function(e) {
                    (0, r.default)(e, 2, !1)
                }))
            },
            s = function() {
                window.dataLayer && window.dataLayer.push({
                    event: "analyticsEvent",
                    "event category": "Template Area Interaction",
                    "event action": "scroll",
                    "event label": "728x90 Content Bar In-View"
                })
            },
            c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return !i && 90 === t && e.classList.contains("hidden")
            };
        document.addEventListener("DOMContentLoaded", (function() {
            (o = document.querySelector(".top-stories__carousel")) && (n(), o.addEventListener("slideChangeStart", (function() {
                var e;
                n(), (e = o.querySelector(".fbs-slider__control-left")) && e.classList.remove("fbs-slider__control--hidden")
            })))
        }));
        var l = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e && (c(e, t, i) ? (e.classList.add("display"), e.classList.remove("hidden"), s()) : i && 90 !== t && (e.classList.remove("display"), e.classList.add("hidden")))
        };
        t.default = l
    },
    147: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.handleInread = function(e) {
            var t = document.querySelector("#article-container-".concat(e, ' fbs-ad[position="inread"]'));
            if (!t) return;
            var i = document.querySelector("#article-container-".concat(e, " fbs-video[autoplay]")),
                r = function i() {
                    t.removeEventListener("bootstrapped", i), o(e, t)
                };
            i ? i.addEventListener("ended", (function() {
                setTimeout((function() {
                    i.playing || ((0, a.isActiveAdSlot)("article-".concat(e, "-inread")) ? o(e, t) : t.addEventListener("bootstrapped", r))
                }), 5e3)
            })) : (0, a.isActiveAdSlot)("article-".concat(e, "-inread")) ? o(e, t) : t.addEventListener("bootstrapped", r)
        };
        var a = i(78);

        function o(e, t) {
            var i = document.cookie.split(";").find((function(e) {
                return e.indexOf("inread_last_fire") >= 0
            }));
            if (i && i.split("=").pop() > Date.now()) return;
            var a = document.querySelector("#article-container-".concat(e, " fbs-video[playing]"));
            a && a.pause();
            var o = Date.now() + 3e5,
                r = t.parentElement;
            document.cookie = "inread_last_fire=".concat(o), r.classList.remove("inread-parent"), Array.from(document.querySelectorAll('fbs-ad.inread-active[position="inread"]')).forEach((function(e) {
                return e.classList.remove("inread-active")
            })), t.classList.add("inread-active"), t.display()
        }
    },
    295: function(e, t, i) {
        "use strict";
        var a = i(0);
        i(384), i(159), i(158);
        var o = i(157),
            r = a(i(109)),
            n = i(3);
        i(15), i(12), i(106);
        var s = a(i(14));
        i(67), i(136), i(137), i(298), i(143), i(307), i(147), i(308), i(141), i(142), i(309), i(146), i(107), (0, o.FbsPricingInit)(n.serverData.isProd), (0, s.default)("article"), customElements.define("fbs-cordial", r.default)
    },
    296: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            fetch("/simple-data/contrib-permissions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    publicationId: e
                })
            }).then((function(e) {
                return e.json()
            })).then((function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e) {
                    var t = window.forbes["simple-site"].streamIndex,
                        i = void 0 === t ? 0 : t,
                        a = document.querySelector("#article-container-".concat(i, " .edit-story-container"));
                    a && a.classList.remove("hide-button")
                }
            })).catch((function(e) {
                return console.error("contributor management error: ", e)
            }))
        }
    },
    297: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.template = function(e) {
            var t, i = "",
                a = {},
                r = e || {};
            return function(e, r, d, u, v, h, m, f, g, b, w, y, k, x, _) {
                var S;
                a.getForbesFindsDisclaimer = t = function(e, a, o) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="forbes-finds-disclaimer color-body"' + n("style", p(e ? "font: 10px/14px 'Work Sans'; margin: 0; padding-bottom: 16px;" : ""), !0, !1) + ">", o ? i += null == (t = o) ? "" : t : "rtings.com" === a.toLowerCase() ? i += 'This post was done in partnership with\n<a href="https://www.rtings.com/">RTINGS.com</a>, a buying guide to help people find the best product for their needs. When readers choose to buy\n<a href="https://www.rtings.com/">RTINGS.com\'s</a>\nrecommended picks, RTINGS and Forbes may earn affiliate commission.' : "the strategist" === a.toLowerCase() ? i += 'This article is published through a partnership with New York Media’s\n<a href="http://nymag.com/strategist/">Strategist</a>. The partnership is designed to surface the most useful, expert recommendations for things to buy across the vast e-commerce landscape. We update links when possible, but note that deals can expire and all prices are subject to change. Every editorial product is independently selected by New York Media. If you buy something through our links, Forbes and New York Media may earn an affiliate commission.' : "wirecutter" === a.toLowerCase() ? i += 'This post was done in partnership with\n<a href="https://thewirecutter.com/?utm_source=forbes&amp;utm_medium=referral&amp;utm_campaign=syndication&amp;utm_content=forbes-syndo">Wirecutter</a>. When readers choose to buy Wirecutter’s independently chosen editorial picks, Wirecutter and Forbes may earn affiliate commissions.' : i += "Forbes and/or the author may earn a commission on sales made from links on this page.", i += "</div>"
                }, a.gridItem = t = function(e, o) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="grid__poster ratio16x9"><a class="grid__image" aria-hidden="true"' + n("data-ga-track", e.title, !0, !1) + n("href", e.uri, !0, !1) + n("style", p("background-image:url(".concat(e.image, ");")), !0, !1) + ' tabindex="-1">', ["video", "premium-video"].includes(o) && (i += '<div class="video__watch-wrapper--grid"><div class="video__watch">WATCH</div>', a.icon("play-circle"), i = i + '<span class="video__duration">' + l(null == (t = e.duration) ? "" : t) + "</span></div>"), "gallery" === o && (i += '<div class="grid__icon--gallery">', a.icon("gallery"), i += "</div>"), i += '</a></div><div class="grid__item-info">', (e.paidContentData || {}).paidContent && (i += '<div class="paid-content__text"><div class="paid-content__publication">', a.paidContentLabelDisclaimer(e.paidContentData.paidContent, e.paidContentData.url), i += "</div></div>"), i = i + '<a class="grid__title"' + n("aria-label", "video" === o && "Click to Watch Video ".concat(e.title), !0, !1) + n("data-ga-track", e.title, !0, !1) + n("href", e.uri, !0, !1) + "><h3" + n("class", c(["grid__title-text", {
                        "color-body": ["premium-article", "premium-video"].includes(o),
                        "headline-embed font-base": o.includes("premium-video")
                    }], [!1, !0]), !1, !1) + ">" + l(null == (t = e.shortenedTitle && e.title !== e.shortenedTitle ? e.shortenedTitle : e.title) ? "" : t) + "</h3></a></div>"
                }, a.gridSeasonDropdown = t = function(e, o, s, d) {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["grid__vertical-pipe", {
                            "light-text": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + "></div><div" + (n("class", c(["grid__season-dropdown", {
                            "color-body": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + n("on", s && "tap:AMP.setState({ ".concat(o, ": { gridState: { count: ").concat(o, ".gridState.count, season: ").concat(o, ".gridState.season, episodes: ").concat(o, ".gridState.episodes, totalGridWrappers: ").concat(o, ".gridState.totalGridWrappers, showDropdown: !").concat(o, ".gridState.showDropdown }}})"), !0, !1) + n("[class]", s && "'grid__season-dropdown' + (".concat(o, ".gridState.showDropdown ? ' active' : '') + (['premium-video'].includes('").concat(d, "') ? ' color-body': '')"), !0, !1)) + "><span" + (n("class", c(["grid__season-dropdown__text", {
                            "light-text": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + n("[text]", s && "'Season ' + ".concat(o, ".gridState.season"), !0, !1)) + ">" + l(null == (t = "Season ".concat(e.activeGrid)) ? "" : t) + "</span>", e.seasons.length > 1 && (i = i + "<span" + n("class", c(["grid__season-dropdown-icon", {
                            "light-text": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + ">", a.icon("chevronDown"), i += "</span>"), i = i + "<div" + n("class", c(["grid__dropdown-content", {
                            "color-body bg-base": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + ">",
                        function() {
                            var a = e.seasons;
                            if ("number" == typeof a.length)
                                for (var u = 0, p = a.length; u < p; u++) {
                                    var v = a[u];
                                    i = i + "<div" + (n("class", c(["grid__season-item", {
                                        selected: v === e.activeGrid
                                    }], [!1, !0]), !1, !1) + n("on", s && 'tap:AMP.setState({\n\t\t\t\t\t\t"'.concat(o, '": {\n\t\t\t\t\t\t\tgridState: {\n\t\t\t\t\t\t\t\tcount: 0,\n\t\t\t\t\t\t\t\tseason: ').concat(v, ",\n\t\t\t\t\t\t\t\tepisodes: ").concat(e[v.toString()].episodeCount, ",\n\t\t\t\t\t\t\t\ttotalGridWrappers: ").concat(r.ceil(e[v.toString()].episodeCount / e.batchCount), ",\n\t\t\t\t\t\t\t\tshowDropdown: !").concat(o, ".gridState.showDropdown\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\t\t\t\t\t})"), !0, !1) + n("data-seasonIndex", v, !0, !1) + n("[class]", s && "'grid__season-item' +  (".concat(o, ".gridState.season == ").concat(v, " ? ' selected' : '') + (['premium-video'].includes('").concat(d, "') ? ' color-body': '')"), !0, !1)) + ">" + l(null == (t = "Season ".concat(v)) ? "" : t) + "</div>"
                                } else {
                                    p = 0;
                                    for (var u in a) {
                                        p++;
                                        v = a[u];
                                        i = i + "<div" + (n("class", c(["grid__season-item", {
                                            selected: v === e.activeGrid
                                        }], [!1, !0]), !1, !1) + n("on", s && 'tap:AMP.setState({\n\t\t\t\t\t\t"'.concat(o, '": {\n\t\t\t\t\t\t\tgridState: {\n\t\t\t\t\t\t\t\tcount: 0,\n\t\t\t\t\t\t\t\tseason: ').concat(v, ",\n\t\t\t\t\t\t\t\tepisodes: ").concat(e[v.toString()].episodeCount, ",\n\t\t\t\t\t\t\t\ttotalGridWrappers: ").concat(r.ceil(e[v.toString()].episodeCount / e.batchCount), ",\n\t\t\t\t\t\t\t\tshowDropdown: !").concat(o, ".gridState.showDropdown\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t}\n\t\t\t\t\t})"), !0, !1) + n("data-seasonIndex", v, !0, !1) + n("[class]", s && "'grid__season-item' +  (".concat(o, ".gridState.season == ").concat(v, " ? ' selected' : '') + (['premium-video'].includes('").concat(d, "') ? ' color-body': '')"), !0, !1)) + ">" + l(null == (t = "Season ".concat(v)) ? "" : t) + "</div>"
                                    }
                                }
                        }.call(this), i = i + "</div></div><div" + n("class", c(["grid__vertical-pipe", {
                            "light-text": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + "></div><div" + (n("class", c(["grid__episodes", {
                            "color-body light-text": d.includes("premium-video")
                        }], [!1, !0]), !1, !1) + n("[text]", s && "'Episodes ' + ".concat(o, ".gridState.episodes"), !0, !1)) + ">" + l(null == (t = "Episodes ".concat(e[e.seasons[e.seasons.length - 1]].episodeCount)) ? "" : t) + "</div>"
                }, a.gridSet = t = function(t, o, r, s, l, p, v, h, m) {
                    this && this.block, this && this.attributes;
                    (function() {
                        var f = t.items;
                        if ("number" == typeof f.length)
                            for (var g = 0, b = f.length; g < b; g++) {
                                var w = f[g];
                                i = i + "<div" + (n("class", c(["".concat(t.classes).concat(r == p ? " active" : "").concat(m ? " grid__wrapper--lazy" : "")], [!0]), !1, !1) + n("[class]", v && "'".concat(t.classes, "'\n\t\t\t\t+ ((").concat(!m, " || ").concat(o, ".gridState.count > ").concat(m ? g + 1 : g, ") ? '' : ' grid__wrapper--lazy')\n\t\t\t\t+ (").concat(o, ".gridState.season == ").concat(p, " ? ' active' : '')"), !0, !1)) + ">",
                                    function() {
                                        var e = w;
                                        if ("number" == typeof e.length)
                                            for (var t = 0, o = e.length; t < o; t++) {
                                                var r = e[t];
                                                i += '<div class="grid__item">', a.gridItem(r, l), i += "</div>"
                                            } else {
                                                o = 0;
                                                for (var t in e) {
                                                    o++;
                                                    r = e[t];
                                                    i += '<div class="grid__item">', a.gridItem(r, l), i += "</div>"
                                                }
                                            }
                                    }.call(this), d.keys((h || {}).targeting || {}).length && !m && g < s - 1 && w.length > 0 && ["article", "premium-article"].includes(l) && (i = i + '<div class="grid__ad-container--amp"><template' + n("amp-access-template", !0, !0, !1) + ' type="amp-mustache"><amp-ad width="320" layout="fluid" height="fluid" data-multi-size="321x251,300x250,320x50,300x50,1x1,300x251,320x480" data-multi-size-validation="false" type="doubleclick"' + n("rtc-config", '{"vendors": {"medianet": {"CID": '.concat(u.ampCid, '}, "aps": {"PUB_ID": "3038", "PARAMS": {"amp": "1"}}}}'), !0, !1) + n("data-slot", "/".concat(u.adInventory || "7175", "/fdcmobile/").concat(y.adZone), !0, !1) + n("json", e.stringify(h), !0, !1) + n("data-block-on-consent", !0, !0, !1) + "></amp-ad></template></div>"), i += "</div>"
                            } else {
                                b = 0;
                                for (var g in f) {
                                    b++;
                                    w = f[g];
                                    i = i + "<div" + (n("class", c(["".concat(t.classes).concat(r == p ? " active" : "").concat(m ? " grid__wrapper--lazy" : "")], [!0]), !1, !1) + n("[class]", v && "'".concat(t.classes, "'\n\t\t\t\t+ ((").concat(!m, " || ").concat(o, ".gridState.count > ").concat(m ? g + 1 : g, ") ? '' : ' grid__wrapper--lazy')\n\t\t\t\t+ (").concat(o, ".gridState.season == ").concat(p, " ? ' active' : '')"), !0, !1)) + ">",
                                        function() {
                                            var e = w;
                                            if ("number" == typeof e.length)
                                                for (var t = 0, o = e.length; t < o; t++) {
                                                    var r = e[t];
                                                    i += '<div class="grid__item">', a.gridItem(r, l), i += "</div>"
                                                } else {
                                                    o = 0;
                                                    for (var t in e) {
                                                        o++;
                                                        r = e[t];
                                                        i += '<div class="grid__item">', a.gridItem(r, l), i += "</div>"
                                                    }
                                                }
                                        }.call(this), d.keys((h || {}).targeting || {}).length && !m && g < s - 1 && w.length > 0 && ["article", "premium-article"].includes(l) && (i = i + '<div class="grid__ad-container--amp"><template' + n("amp-access-template", !0, !0, !1) + ' type="amp-mustache"><amp-ad width="320" layout="fluid" height="fluid" data-multi-size="321x251,300x250,320x50,300x50,1x1,300x251,320x480" data-multi-size-validation="false" type="doubleclick"' + n("rtc-config", '{"vendors": {"medianet": {"CID": '.concat(u.ampCid, '}, "aps": {"PUB_ID": "3038", "PARAMS": {"amp": "1"}}}}'), !0, !1) + n("data-slot", "/".concat(u.adInventory || "7175", "/fdcmobile/").concat(y.adZone), !0, !1) + n("json", e.stringify(h), !0, !1) + n("data-block-on-consent", !0, !0, !1) + "></amp-ad></template></div>"), i += "</div>"
                                }
                            }
                    }).call(this)
                }, a.gridLoadMore = t = function(e, t, a, o) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="grid__more-items-wrapper"><span' + n("class", c(["grid__load-more", {
                        hidden: e.initialGridSets >= r.ceil(e[e.seasons[e.seasons.length - 1].toString()].episodeCount / e.batchCount),
                        "color-body": ["premium-article", "premium-video"].includes(a),
                        "font-accent": a.includes("premium-video")
                    }], [!1, !0]), !1, !1) + ' tabindex="0"' + n("on", o && "tap:AMP.setState({ ".concat(t, ": { gridState: { count: ").concat(t, ".gridState.count + 1, season: ").concat(t, ".gridState.season, episodes: ").concat(t, ".gridState.episodes, totalGridWrappers: ").concat(t, ".gridState.totalGridWrappers, showDropdown: ").concat(t, ".gridState.showDropdown }}})"), !0, !1) + n("[class]", o && "'grid__load-more'\n\t\t\t+ (".concat(t, ".gridState.count >= ").concat(t, ".gridState.totalGridWrappers ? ' hidden' : '')\n\t\t\t+ (['premium-article', 'premium-video'].includes('").concat(a, "') ? ' color-body': '')\n\t\t\t+ (['premium-video'].includes('").concat(a, "') ? ' font-accent': '')"), !0, !1) + ' role="button">', ["video", "premium-video"].includes(a) && (i += "More Videos"), "gallery" === a && (i += "More Galleries"), ["article", "premium-article"].includes(a) && (i += "More Articles"), i += "</span></div>"
                }, a.grid = t = function(e, o, s, u, p) {
                    this && this.block, this && this.attributes;
                    (d.keys(e || {}).length && d.keys(e[e.seasons[0]] || {}).length && e[e.seasons[0]].initialGrid.items || []).length && (i += '<div class="grid fs-content">', h && (i = i + "<amp-state" + n("id", o, !0, !1) + '><script type="application/json">{\n\t"gridState": {\n\t\t"count": ' + l(null == (t = e.initialGridSets) ? "" : t) + ',\n\t\t"showDropdown": false,\n\t\t"season": ' + l(null == (t = e.seasons[e.seasons.length - 1]) ? "" : t) + ',\n\t\t"totalGridWrappers": ' + l(null == (t = r.ceil(e[e.seasons[e.seasons.length - 1].toString()].episodeCount / e.batchCount)) ? "" : t) + ',\n\t\t"episodes": ' + l(null == (t = e[e.seasons[e.seasons.length - 1].toString()].episodeCount) ? "" : t) + "\n\t}\n}\n<\/script></amp-state>"), i = i + '<div class="grid__headline-wrapper"><h2' + n("class", c(["grid__more-from", {
                        "color-body": ["premium-article", "premium-video"].includes(s),
                        "font-accent": s.includes("premium-video")
                    }], [!1, !0]), !1, !1) + ">" + l(null == (t = e.headline) ? "" : t) + "</h2>", e.seasons.length > 1 && a.gridSeasonDropdown(e, o, h, s), i += "</div>", function() {
                        var t = e;
                        if ("number" == typeof t.length)
                            for (var i = 0, r = t.length; i < r; i++) {
                                (((n = t[i]).initialGrid || {}).items || []).length && a.gridSet(n.initialGrid, o, e.activeGrid, e.initialGridSets, s, i, h, u, !1), ((n.lazyGrid || {}).items || []).length && a.gridSet(n.lazyGrid, o, e.activeGrid, e.initialGridSets, s, i, h, u, !0)
                            } else {
                                r = 0;
                                for (var i in t) {
                                    var n;
                                    r++, (((n = t[i]).initialGrid || {}).items || []).length && a.gridSet(n.initialGrid, o, e.activeGrid, e.initialGridSets, s, i, h, u, !1), ((n.lazyGrid || {}).items || []).length && a.gridSet(n.lazyGrid, o, e.activeGrid, e.initialGridSets, s, i, h, u, !0)
                                }
                            }
                    }.call(this), a.gridLoadMore(e, o, s, h), i += "</div>")
                }, a.desktopMedianet = t = function(e) {
                    var t = e.position,
                        a = e.size,
                        o = e.tagId,
                        r = e.bta;
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["medianet-wrapper", "ad-unit", r ? "mnet-bta" : "mnet-btf"], [!1, !1, !0]), !1, !1) + "><div" + (n("class", c(["medianet", "fbs-ad--".concat(t, "-wrapper")], [!1, !0]), !1, !1) + n("data-position", t, !0, !1) + n("data-size", a, !0, !1) + n("data-tagId", o, !0, !1)) + "></div></div>"
                }, a.sigfile = t = function(e, t) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["sigfile", "article-body", "fs-responsive-text", {
                        "font-body": o
                    }], [!1, !1, !1, !0]), !1, !1) + ">", (e.twitterName || e.linkedIn) && (i += "<span>Follow me on&nbsp;</span>", e.twitterName && (i = i + "<a" + (n("class", c([{
                        "color-link": o
                    }], [!0]), !1, !1) + n("href", "https://www.twitter.com/".concat(e.twitterName), !0, !1)) + ' rel="noopener noreferrer" target="_blank">Twitter</a>'), e.twitterName && e.linkedIn && (i += "&nbsp;or&nbsp;"), e.linkedIn && (i = i + "<a" + (n("class", c([{
                        "color-link": o
                    }], [!0]), !1, !1) + n("href", e.linkedIn, !0, !1)) + ' rel="noopener noreferrer" target="_blank">LinkedIn</a>'), i += ".&nbsp;"), (e.webSite || e.amazon) && (i += "<span>Check out&nbsp;</span>", e.webSite && (i = i + "my&nbsp;<a" + (n("class", c([{
                        "color-link": o
                    }], [!0]), !1, !1) + n("href", u.sigfile.webSite, !0, !1)) + ' rel="noopener noreferrer" target="_blank">website</a>'), e.webSite && e.amazon && (i += "&nbsp;or&nbsp;"), e.amazon && (i = i + "some of my other work&nbsp;<a" + (n("class", c([{
                        "color-link": o
                    }], [!0]), !1, !1) + n("href", u.sigfile.amazon, !0, !1)) + ' rel="noopener noreferrer" target="_blank">here</a>'), i += ".&nbsp;"), "Forbes Staff" === t && (a.forbesStaffTips(o), i += ".&nbsp;"), i += "</div>"
                }, a.forbesStaffTips = t = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this && this.block, this && this.attributes;
                    i = i + "<span>Send me a secure&nbsp;<a" + n("class", c([{
                        "color-link": e
                    }], [!0]), !1, !1) + ' href="https://www.forbes.com/tips/" rel="noopener noreferrer" target="_blank">tip</a></span>'
                }, a.magazineText = t = function(e, a) {
                    this && this.block, this && this.attributes;
                    i = i + '<p class="magazine-label fs-text-s"><span' + n("class", c([{
                        "light-text color-body": a
                    }], [!0]), !1, !1) + ">" + l(null == (t = e.issueText) ? "" : t) + "</span><a" + (n("href", e.subscribeLink, !0, !1) + n("style", p({
                        color: a ? u.bertieColor : ""
                    }), !0, !1)) + ">" + l(null == (t = e.subscribeText) ? "" : t) + "</a></p>"
                }, a.guestContributorBlock = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["contrib-guest-container", u.isAdLight ? "adlight-guest-border-fortknox-gold" : ""], [!1, !0]), !1, !1) + '><div class="guest-block-text"><div class="guest-intro">' + l(null == (t = "POST WRITTEN BY") ? "" : t) + "</div>", e.name && (i = i + '<div class="guest-name">' + l(null == (t = e.name) ? "" : t) + "</div>"), i = i + '<div class="guest-bio">' + (null == (t = e.bio) ? "" : t) + "</div></div><div" + (n("class", c(["guest-image", "image-".concat(e.imageType)], [!1, !0]), !1, !1) + n("style", p("background-image: url(".concat(e.image, ")")), !0, !1)) + "></div></div>"
                }, a.socialShareButtons = t = function(e) {
                    this && this.block, this && this.attributes;
                    i += '<ul class="article-sharing__container">',
                        function() {
                            var o = e;
                            if ("number" == typeof o.length)
                                for (var r = 0, s = o.length; r < s; r++) {
                                    var d = o[r];
                                    i = i + '<li class="article-sharing__item"><a' + (n("class", c(["social-icon", {
                                        "color-body light-text": u.templateType.includes("premium")
                                    }, r], [!1, !0, !0]), !1, !1) + n("onclick", 'window.open("'.concat(d.sharingLink, "\", 'window', 'width=400,height=500')"), !0, !1) + n("aria-label", "Share ".concat(d.platform), !0, !1) + n("data-ga-track", "".concat(d.platform, " Click"), !0, !1)) + '><span class="screen-reader-text">Share to ' + l(null == (t = d.platform) ? "" : t) + "</span>", a.icon("".concat(r)), i += "</a></li>"
                                } else {
                                    s = 0;
                                    for (var r in o) {
                                        s++;
                                        d = o[r];
                                        i = i + '<li class="article-sharing__item"><a' + (n("class", c(["social-icon", {
                                            "color-body light-text": u.templateType.includes("premium")
                                        }, r], [!1, !0, !0]), !1, !1) + n("onclick", 'window.open("'.concat(d.sharingLink, "\", 'window', 'width=400,height=500')"), !0, !1) + n("aria-label", "Share ".concat(d.platform), !0, !1) + n("data-ga-track", "".concat(d.platform, " Click"), !0, !1)) + '><span class="screen-reader-text">Share to ' + l(null == (t = d.platform) ? "" : t) + "</span>", a.icon("".concat(r)), i += "</a></li>"
                                    }
                                }
                        }.call(this), u.showDisqus && 0 === x && (i += '<span class="disqus-comment-count" data-ga-track="CommentCount"></span>'), i += "</ul>"
                }, a.setPinnedEmbed = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="pinned-embed"' + n("data-type", e.type, !0, !1) + '><button class="pinned-embed-button"' + n("style", p("background-color: ".concat(e.ctaBackgroundColor || "", "; color: ").concat(e.ctaTextColor || "", ";")), !0, !1) + ">" + l(null == (t = e.ctaText) ? "" : t), a.icon("chevronUp"), i = i + '</button><iframe class="pinned-embed-iframe" frameBorder="0" height="100%"' + n("src", e.iframeSrc, !0, !1) + ' width="100%"></iframe></div>'
                }, a.icon = t = function(e) {
                    this && this.block, this && this.attributes;
                    switch (e) {
                        case "amazon-books":
                            i += '<svg class="fs-icon fs-icon--amazon-books" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M1 6.1s3.8-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1zM10.5 6.1s3.9-4.5 8.5 0v10.1s-4-2.8-8.5 0V6.1z"/></svg>';
                            break;
                        case "arrowLeft":
                            i += '<svg class="fs-icon fs-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 10h16v2h-16z"/><path transform="rotate(-45.001 4.5 8.877)" d="M.5 7.9h8v2h-8z"/><path transform="rotate(45.001 4.5 13.124)" d="M.5 12.1h8v2h-8z"/></svg>';
                            break;
                        case "arrowRight":
                            i += '<svg class="fs-icon fs-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(-180 8.964 11)" d="M1 10h16v2H1z"/><path transform="rotate(134.999 14.965 13.124)" d="M11 12.1h8v2h-8z"/><path transform="rotate(-134.999 14.965 8.877)" d="M11 7.9h8v2h-8z"/></svg>';
                            break;
                        case "arrowUp":
                            i += '<svg class="fs-icon fs-icon--arrow-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 0L5 30h15v30h20V30h15L30 0z"/></svg>';
                            break;
                        case "arrowDown":
                            i += '<svg class="fs-icon fs-icon--arrow-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#020202" d="M30 60l25-30H40V0H20v30H5l25 30z"/></svg>';
                            break;
                        case "award":
                            i += '<svg class="fs-icon fs-icon--award" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.2 4H4.8c-.9 0-1.6.7-1.6 1.5v.8c0 1.9 1.4 3.5 3.3 3.7.5 1.1 1.5 2 2.7 2.2v2.3h-3V16h7.5v-1.5h-3v-2.3c1.2-.2 2.2-1.1 2.7-2.2 1.9-.2 3.3-1.8 3.3-3.7v-.8c.1-.8-.6-1.5-1.5-1.5zM4.8 6.2v-.7h1.5v2.9c-.9-.3-1.5-1.2-1.5-2.2zm10.4 0c0 1-.6 1.8-1.5 2.1V5.5h1.5v.7z"/></svg>';
                            break;
                        case "chevronDown":
                            i += '<svg class="fs-icon fs-icon--chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/><path transform="rotate(-45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/></svg>';
                            break;
                        case "chevronLeft":
                            i += '<svg class="fs-icon fs-icon--chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(-45.001 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/><path transform="rotate(45.001 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/></svg>';
                            break;
                        case "chevronRight":
                            i += '<svg class="fs-icon fs-icon--chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(134.999 10.1 12.701)" d="M5.4 11.5h9.5v2.4H5.4z"/><path transform="rotate(-134.999 10.1 7.672)" d="M5.4 6.5h9.5v2.4H5.4z"/></svg>';
                            break;
                        case "chevronUp":
                            i += '<svg class="fs-icon fs-icon--chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.8 19.8"><path transform="rotate(45.001 12.615 10.187)" d="M7.9 9h9.5v2.4H7.9z"/><path transform="rotate(134.999 7.586 10.187)" d="M2.8 9h9.5v2.4H2.8z"/></svg>';
                            break;
                        case "clock":
                            i += '<svg class="fs-icon fs-icon--clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.9 13.1l-2.7-2.7V6.7h1.7v3l2.3 2.3-1.3 1.1zM10 3.3a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>';
                            break;
                        case "close":
                            i += '<svg class="fs-icon fs-icon--close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path transform="rotate(45.001 10 10)" d="M2 9h16v2H2z"/><path transform="rotate(134.999 10 10)" d="M2 9h16v2H2z"/></svg>';
                            break;
                        case "clock":
                            i += '<svg class="fs-icon fs-icon--clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M11.9 13.1l-2.7-2.7V6.7h1.7v3l2.3 2.3-1.3 1.1zM10 3.3a6.7 6.7 0 1 0 0 13.4 6.7 6.7 0 0 0 0-13.4zM10 15c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>';
                            break;
                        case "edit":
                            i += '<svg class="fs-icon fs-icon--edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#030303" d="M16.2 1C17.7 1 19 2.3 19 3.8c0 .6-.2 1.2-.6 1.7l-1.1 1.1-3.9-3.9 1.1-1.1c.5-.4 1.1-.6 1.7-.6zM2.1 13.9L1 19l5.1-1.1L16.5 7.5l-3.9-3.9L2.1 13.9zm11.5-6.5l-7.9 7.9-1-1 7.9-7.9 1 1z"/></svg>';
                            break;
                        case "edu":
                            i += '<svg class="fs-icon fs-icon--edu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.3 10.8v2.7L10 16l4.7-2.5v-2.7L10 13.3l-4.7-2.5zM10 4L2.7 8l7.3 4 6-3.3v4.6h1.3V8L10 4z"/></svg>';
                            break;
                        case "email":
                            i += '<svg class="fs-icon fs-icon--email" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF106_" d="M17 15.2H3.2l5.2-4.3.6.4c.3.3.7.4 1.1.4s.8-.1 1.1-.4l.6-.5 5.2 4.4zm.6-9.2v8l-4.8-4 4.8-4zm-15 8V6l4.8 4-4.8 4zm7.8-3.6c-.2.2-.4.2-.6 0L3.6 5.2h13l-6.2 5.2z"/></svg>';
                            break;
                        case "facebook":
                            i += '<svg class="fs-icon fs-icon--facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M32.9 49H25V30h-3.9v-6.6H25v-3.9c0-5.4 2.2-8.5 8.5-8.5h5.2v6.6h-3.3c-2.5 0-2.6.9-2.6 2.6v3.3h5.9l-.5 6.5H33v19h-.1z"/></svg>';
                            break;
                        case "forbesF":
                            i += '<svg class="fs-icon fs-icon--forbes-f" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.5 7l-.8.2C15 4.9 13.8 3.7 12 3.7H9.5C9.4 5 9.4 7 9.4 9.9h1.7c.9 0 1.6-.7 1.9-2.1h.6V13H13c-.3-1.4-.9-2.1-1.9-2.2H9.4c0 1.6.1 3.1.2 4.4.1.7.2 1.2.4 1.5.2.3.6.5 1.1.6l.8.1v.6H3.6v-.6l.7-.1c.9-.1 1.4-.8 1.5-2.1.3-3.3.3-6.5 0-9.6-.1-1.3-.6-2-1.5-2.1l-.7-.2v-.6h12.8l.1 4.3z"/></svg>';
                            break;
                        case "forbesLogo":
                            i += '<svg class="fs-icon fs-icon--forbes-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 54"><path d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z"/></svg>';
                            break;
                        case "gallery":
                            i += '<svg class="fs-icon fs-icon--gallery" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.89 17.89H6.19V6.19h11.7v11.7zm-8.74-2.97h5.77V9.15H9.15v5.77z"/><path d="M4.49 13.78H2.11V2.11h11.67v2.38H4.49z"/></svg>';
                            break;
                        case "georgia-uaquo":
                            i += '<svg class="fs-icon fs-icon--georgia-uaquo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="#010101" d="M9.9 9.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.6-5.3L2.3 19l-.8-1 6.8-7.2.6-.6c.3-.2.6-.4 1-.4zm0-7.8c.4 0 .8.1 1 .3l.5.5 6.8 7.3-.8 1-7.5-5.3-7.5 5.3-.8-1 6.8-7.2c.1-.2.4-.3.7-.6.1-.2.5-.3.8-.3z"/></svg>';
                            break;
                        case "global":
                            i += '<svg class="fs-icon fs-icon--global" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 1c4.971 0 9 4.029 9 9s-4.029 9-9 9-9-4.029-9-9 4.029-9 9-9zm-4.048 9.818l-3.271.001a7.37 7.37 0 0 0 5.458 6.308 13.367 13.367 0 0 1-2.187-6.309zm11.367.001H14.05a13.35 13.35 0 0 1-2.188 6.307 7.369 7.369 0 0 0 5.457-6.307zm-4.909 0H7.593A11.705 11.705 0 0 0 10 16.914a11.703 11.703 0 0 0 2.41-6.095zM8.139 2.874l-.053.014a7.37 7.37 0 0 0-5.405 6.293H5.95c.184-2.26.94-4.43 2.189-6.307zM10 3.087a11.696 11.696 0 0 0-2.41 6.094h4.817A11.697 11.697 0 0 0 10 3.087zm1.86-.214l.082.124a13.365 13.365 0 0 1 2.106 6.185l3.271-.001a7.37 7.37 0 0 0-5.459-6.308z"/></svg>';
                            break;
                        case "hamburger":
                            i += '<svg class="fs-icon fs-icon--hamburger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 5.5h16v2H2zM2 9.5h16v2H2zM2 13.5h16v2H2z"/></svg>';
                            break;
                        case "info":
                            i += '<svg class="fs-icon fs-icon--info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M28.3 38.4h3.3v-10h-3.3v10zM30 13.3c-9.2 0-16.7 7.5-16.7 16.7S20.8 46.7 30 46.7 46.7 39.2 46.7 30 39.2 13.3 30 13.3zm0 30.1c-7.4 0-13.4-6-13.4-13.4s6-13.4 13.4-13.4 13.4 6 13.4 13.4-6 13.4-13.4 13.4zM28.3 25h3.3v-3.3h-3.3V25z"/></svg>';
                            break;
                        case "instagram":
                            i += '<svg class="fs-icon fs-icon--instagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" d="M38.6 46.3H21.4c-4.3 0-7.7-3.5-7.7-7.7V21.4c0-4.3 3.5-7.7 7.7-7.7h17.1c4.3 0 7.7 3.5 7.7 7.7v17.1c.1 4.3-3.4 7.8-7.6 7.8z"/><circle fill="none" stroke="#000" stroke-width="3" stroke-miterlimit="10" cx="30" cy="30" r="7.4"/><circle cx="38.7" cy="19.3" r="1.8"/></svg>';
                            break;
                        case "linkedin":
                            i += '<svg class="fs-icon fs-icon--linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M44.9 33.2v11h-6.4V34c0-2.6-.9-4.3-3.2-4.3-1.8 0-2.8 1.2-3.3 2.3-.2.4-.2 1-.2 1.6v10.7h-6.4s.1-17.4 0-19.2h6.4V27.9v-.1c.8-1.3 2.4-3.2 5.8-3.2 4.1 0 7.3 2.7 7.3 8.6zM18.7 15.8c-2.2 0-3.6 1.4-3.6 3.3 0 1.8 1.4 3.3 3.5 3.3 2.2 0 3.6-1.5 3.6-3.3 0-1.9-1.3-3.3-3.5-3.3zm-3.2 28.4h6.4V25h-6.4v19.2z"/></svg>';
                            break;
                        case "list":
                            i += '<svg class="fs-icon fs-icon--list" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M15.2 3.2H4.8c-.8 0-1.5.7-1.5 1.5v10.5c0 .8.7 1.5 1.5 1.5h10.5c.8 0 1.5-.7 1.5-1.5V4.8c0-.9-.7-1.6-1.6-1.6zm-3.7 10.6H6.2v-1.5h5.2v1.5zm2.3-3H6.2V9.2h7.5v1.6zm0-3H6.2V6.2h7.5v1.6z"/></svg>';
                            break;
                        case "media":
                            i += '<svg class="fs-icon fs-icon--media" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M49.3 3.9H10.4c-4.8 0-8.7 3.9-8.7 8.7v26.1c0 4.8 3.9 8.7 8.7 8.7h4.4v7.9c0 1.2 1.3 1.9 2.3 1.2l12.8-9.1h19.4c4.8 0 8.7-3.9 8.7-8.7V12.6c0-4.8-3.9-8.7-8.7-8.7m-37.9 8.4H48c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4H11.4c-.8 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4m0 12H48c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4H11.4c-.8 0-1.4-.6-1.4-1.4 0-.7.6-1.4 1.4-1.4M48 39H11.4c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4H48c.8 0 1.4.6 1.4 1.4S48.8 39 48 39m0-5.8H11.4c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4H48c.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4m.1-12H11.5c-.8 0-1.4-.6-1.4-1.4 0-.8.6-1.4 1.4-1.4h36.6c.8 0 1.4.6 1.4 1.4 0 .8-.7 1.4-1.4 1.4"/></svg>';
                            break;
                        case "phone":
                            i += '<svg class="fs-icon fs-icon--phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF14E_" d="M2.6 7.6c-.2-.8-.1-1.5.3-2.3S3.7 4 4.4 3.7c.2-.1.4-.1.6.1l3 3c.3.3.2.5 0 .8-.5.6-.8 1-.8 1.3s.2.7.8 1.3c.4.5 1.2 1.2 2.2 2 .6.5 1 .4 1.4-.1.3-.5.5-.7.7-.7s.5.1.9.5l.9.6c.3.2.7.5 1 .7.4.3.7.5.9.6.4.3.4.6.2.9-1.8 2.5-3.9 2.9-6.4 1.2-2.9-2.1-5.1-4.5-6.6-7.1 0-.1-.1-.3-.4-.8l-.2-.2v-.2zm7.2-3.4c1.5.1 2.7.7 3.7 1.7s1.6 2.3 1.7 3.8c0 .3-.1.5-.4.5-.3 0-.5-.1-.5-.4-.1-1.2-.6-2.3-1.5-3.1-.9-.9-1.9-1.4-3.1-1.5-.1 0-.2 0-.3-.1-.1-.2-.2-.3-.2-.4 0-.3.2-.5.6-.5zm-.3-1.8c0-.3.2-.4.5-.4 2.1.1 3.9.8 5.3 2.2s2.2 3.2 2.2 5.3c0 .3-.1.5-.4.5-.1 0-.2 0-.3-.1-.1-.1-.2-.2-.2-.3-.1-1.9-.7-3.5-2-4.7s-2.8-1.9-4.7-2c-.1 0-.2 0-.3-.1-.1-.2-.1-.3-.1-.4z"/></svg>';
                            break;
                        case "play":
                            i += '<svg class="fs-icon fs-icon--play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 2v16.9l11.1-8.5z"/></svg>';
                            break;
                        case "play-circle":
                            i += '<svg class="fs-icon fs-icon--play-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path class="fs-icon fs-icon--play" fill="#010101" d="M24.252 41.721V18.037l15.789 11.842z"/><path class="fs-icon fs-icon--circle" fill="#010101" d="M30 59.879c-16.542 0-30-13.457-30-30 0-16.542 13.458-30 30-30 16.543 0 30 13.458 30 30 0 16.543-13.457 30-30 30zm0-57.5c-15.164 0-27.5 12.336-27.5 27.5s12.336 27.5 27.5 27.5 27.5-12.336 27.5-27.5-12.336-27.5-27.5-27.5z"/></svg>';
                            break;
                        case "preview-eye":
                            i += '<svg class="fs-icon fs-icon--preview-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 4.1C5.9 4.1 2.3 6.5.5 10c1.8 3.6 5.4 6 9.5 6s7.7-2.4 9.5-5.9c-1.8-3.6-5.4-6-9.5-6zm4.7 3.2c1.1.7 2.1 1.7 2.8 2.8-.7 1.1-1.7 2.1-2.8 2.8-1.4.9-3 1.4-4.7 1.4-1.7 0-3.3-.5-4.7-1.4-1.1-.7-2.1-1.7-2.8-2.8.8-1.2 1.7-2.1 2.8-2.8.1 0 .1-.1.2-.1-.1.4-.3 1-.3 1.6 0 2.6 2.1 4.8 4.8 4.8s4.8-2.1 4.8-4.8c0-.6-.1-1.1-.3-1.6 0 0 .1 0 .2.1zm-5.1 1c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/></svg>';
                            break;
                        case "profile-bug":
                            i += '<svg class="fs-icon fs-icon--profile-bug" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.8 1.8v16.3h16.3V1.8H1.8zm11.8 6.5C13.2 6.7 12.4 6 11.2 6H9.7c-.1.8-.1 2.2-.1 4.1h1.1c.6 0 1-.5 1.2-1.4h.4v3.5h-.4c-.2-.9-.6-1.4-1.2-1.4H9.6c0 1.1 0 2.1.1 2.9 0 .5.1.8.3 1 .1.2.4.3.7.4l.6.1v.4H5.9V15h.5c.3-.1.5-.2.7-.4s.2-.5.3-1c.2-2 .2-4.1 0-6.4 0-.5-.1-.8-.3-1s-.4-.4-.7-.5h-.5v-.5H14l.1 2.9-.5.2z"/></svg>';
                            break;
                        case "pin":
                            i += '<svg class="fs-icon fs-icon--pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--pinArt" fill-rule="evenodd" clip-rule="evenodd" d="M10 9.023c-1.243 0-2.25-.932-2.25-2.082S8.758 4.859 10 4.859s2.25.932 2.25 2.082c.001 1.15-1.008 2.082-2.25 2.082M10 1C6.272 1 3.25 3.796 3.25 7.245c0 3.769 4.193 8.55 6.568 11.666.09.118.274.118.364 0 2.376-3.116 6.568-7.898 6.568-11.666C16.75 3.796 13.728 1 10 1"/></svg>';
                            break;
                        case "reddit":
                            i += '<svg class="fs-icon fs-icon--reddit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30"/><path fill="#FFF" d="M50 30c0-2.4-2-4.4-4.4-4.4-1.2 0-2.2.5-3 1.2-3-2.2-7.1-3.6-11.7-3.7l2-9.4 6.5 1.4c.1 1.7 1.4 3 3.1 3 1.7 0 3.1-1.4 3.1-3.1s-1.4-3.1-3.1-3.1c-1.2 0-2.3.7-2.8 1.7l-7.3-1.5c-.2 0-.4 0-.6.1-.2.1-.3.3-.3.5l-2.2 10.5c-4.7.1-8.8 1.5-11.9 3.7-.8-.8-1.9-1.2-3-1.2-2.4 0-4.4 2-4.4 4.4 0 1.8 1.1 3.3 2.6 4-.1.4-.1.9-.1 1.3 0 6.7 7.8 12.2 17.5 12.2s17.5-5.5 17.5-12.2c0-.4 0-.9-.1-1.3 1.5-.8 2.6-2.3 2.6-4.1zm-30 3.1c0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7.1-3.1-1.3-3.1-3.1zm17.4 8.3c-2.1 2.1-6.2 2.3-7.4 2.3-1.2 0-5.3-.2-7.4-2.3-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0 1.3 1.3 4.2 1.8 6.3 1.8s4.9-.5 6.3-1.8c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1zm-.5-5.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1z"/></svg>';
                            break;
                        case "rss":
                            i += '<svg class="fs-icon fs-icon--rss" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.2 13.6c-.6 0-1.1.2-1.5.6-.5.5-.7 1-.7 1.6 0 .6.2 1.1.6 1.5.5.5 1 .7 1.6.7.6 0 1.1-.2 1.5-.6.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5c-.4-.6-.9-.8-1.5-.8zm0 0M9.2 10.8c-.9-.9-1.8-1.6-2.9-2.1-1.1-.5-2.3-.8-3.5-.9h-.1c-.2 0-.3.1-.5.2-.1.1-.2.3-.2.5V10c0 .2.1.4.2.5.1.1.3.2.5.2 1.7.2 3.2.9 4.4 2.1C8.3 14 9 15.5 9.2 17.2c0 .2.1.3.2.5.2.2.3.3.5.3h1.5c.2 0 .4-.1.5-.2.1-.2.2-.3.2-.5-.1-1.2-.4-2.4-.9-3.5-.4-1.2-1.1-2.1-2-3zm0 0"/><path d="M16.6 11.5c-.8-1.8-1.9-3.4-3.3-4.8s-3-2.5-4.8-3.3C6.6 2.6 4.7 2.1 2.8 2c-.3 0-.4.1-.6.2-.1.1-.2.3-.2.5v1.6c0 .2.1.4.2.5.1.2.3.3.5.3 1.6.1 3.2.5 4.6 1.2 1.5.7 2.7 1.6 3.8 2.6 1.1 1.1 2 2.4 2.6 3.8.7 1.5 1.1 3 1.1 4.6 0 .2.1.3.2.5.1.1.3.2.5.2h1.6c.2 0 .4-.1.5-.2.2-.2.2-.3.2-.5.1-2-.4-3.9-1.2-5.8zm0 0"/></svg>';
                            break;
                        case "star":
                            i += '<svg class="fs-icon fs-icon--star" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path><path fill="none" d="M0 0h18v18H0z"></path></svg>';
                            break;
                        case "search":
                            i += '<svg class="fs-icon fs-icon--search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><circle fill="none" stroke="#000" stroke-width="2" cx="8.5" cy="9" r="6"/><path transform="rotate(45.001 14.922 15.421)" d="M12 14.4h5.9v2H12z"/></svg>';
                            break;
                        case "snapchat":
                            i += '<svg class="fs-icon fs-icon--snapchat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M47.7 38.3c-.2-.2-.4-.4-.7-.4-2.3-.4-3.9-1.7-5-3s-1.7-2.5-1.7-2.6v-.1c-.1-.2-.3-.5-.3-.7v-.4c.2-.6.3-.8 1.3-1.1 0 0 .1 0 .3-.1.1 0 .2-.1.3-.1.7-.3 1.4-.6 1.9-1.1.2-.2.5-.6.5-1-.1-.4-.2-.8-.6-1.1-.6-.4-1.6-.2-2.2 0-.4.1-1.2.5-1.5.1v-.5c.1-1.9.3-3.8 0-5.6-.1-.6-.2-1.1-.5-1.6-.9-2.1-2.3-3.6-3.9-4.5-1.4-.8-3-1.2-4.6-1.3-1.6-.1-3.3.1-4.9.6-.5.2-1 .4-1.4.7-1.7.9-3 2.4-3.9 4.5-.2.5-.4 1.1-.5 1.6-.3 1.9-.1 3.8 0 5.6v.5c-.3.3-1.2 0-1.5-.1-.7-.2-1.6-.4-2.2 0-.4.3-.5.6-.6 1.1-.1.3.2.7.5 1 .5.5 1.2.8 1.9 1.1.1 0 .2.1.3.1.2.1.2.1.3.1 1 .3 1.1.6 1.3 1.1 0 .1.1.2 0 .4 0 .2-.2.4-.3.7 0 .1-.6 1.3-1.7 2.6s-2.8 2.7-5 3c-.3 0-.5.2-.7.4-.2.2-.3.5-.2.8v.2c0 .1 0 .1.1.2.2.5.8.9 1.6 1.3.8.3 1.8.6 3.1.8 0 .1.1.4.1.6 0 .1.1.3.1.4 0 .1.1.3.1.4.1.2.2.5.4.7.2.1.4.2.8.2h.4c.1 0 .3 0 .4-.1.2 0 .5-.1.8-.1.3 0 .6-.1 1-.1h.6c.2 0 .4 0 .6.1.8.1 1.5.6 2.4 1.2 1.9 1.3 3.5 2 5.2 2 1.7 0 3.4-.7 5.2-2 .8-.6 1.6-1.1 2.4-1.2.2 0 .4-.1.6-.1h.6c.4 0 .7 0 1 .1.3 0 .6.1.8.1.2 0 .3.1.4.1h.4c.3 0 .6-.1.8-.2.3-.2.4-.4.4-.7 0-.2.1-.3.1-.4 0-.1.1-.3.1-.4 0-.2.1-.4.1-.6 1.3-.2 2.3-.5 3.1-.8.9-.4 1.4-.8 1.6-1.3 0-.1.1-.2.1-.2V39c.2-.2.1-.5-.1-.7z"/></svg>';
                            break;
                        case "twitter":
                            i += '<svg class="fs-icon fs-icon--twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M22.2 38.9c-3.4-.3-6.1-1.7-7.5-5.1h3.6c-3.9-1.4-5.6-4.3-5.9-8.4 1.2.6 2.3.7 3.5.7-2.1-1.6-3.6-3.4-3.7-6.1-.1-1.5.5-2.8 1.3-4 4.4 5 9.7 8.3 16.5 8.9v-2.7c.1-1.9.6-3.6 1.9-5.1 2.5-2.8 6.9-3.1 9.8-.7.2.2.5.4.7.6.2.2.4.2.7.2 1.1-.3 2-.9 3-1.4.5-.3 1.1-.6 1.7-1-.4 1.1-.9 2-1.5 2.8-.6.8-1.3 1.6-2.2 2.2 1.6-.2 3.2-.6 4.8-1.1-.3.4-.6.8-.9 1.1l-2.7 2.4c-.1.1-.2.3-.2.4.1 3.3-.6 6.5-1.9 9.6-1.9 4.2-4.7 7.5-8.6 9.9-2.5 1.5-5.2 2.4-8.1 2.9-5.5.8-10.5-.5-15.1-3.3-.1 0-.1-.1-.2-.1h.2c1.1.5 2.2.4 3.3.3 2.3-.2 4.5-.9 6.6-2.1l.9-.6v-.3z"/></svg>';
                            break;
                        case "website":
                            i += '<svg class="fs-icon fs-icon--website" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path class="fs-icon fs-icon--_xF10E_" d="M14.7 7.4l2.8 2.6v.4h-1.9V17h-3.7v-4.2H8.1V17H4.4v-6.6H2.5V10L10 3l2.8 2.6v-.9h1.9z"/></svg>';
                            break;
                        case "youtube":
                            i += '<svg class="fs-icon fs-icon--youtube" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M8.2 12.5V7.7l4.6 2.4-4.6 2.4zm9.5-7.3c-.7-.7-1.4-.7-1.7-.7-2.4-.2-6-.2-6-.2s-3.6 0-6 .2c-.3 0-1.1 0-1.7.7-.5.5-.6 1.7-.6 1.7s-.2 1.4-.2 2.8V11c0 1.4.2 2.8.2 2.8s.2 1.2.7 1.7c.6.6 1.4.5 1.8.6 1.4.1 5.8.2 5.8.2s3.6 0 6-.2c.3 0 1.1 0 1.7-.7.5-.5.7-1.7.7-1.7s.2-1.4.2-2.8V9.7c0-1.4-.2-2.8-.2-2.8s-.2-1.2-.7-1.7z"/></svg>';
                            break;
                        case "sharrow":
                            i += '<svg class="fs-icon fs-icon--share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path fill="#010101" d="M34 19.6V4.9L59.2 28 34 51.2V36.5C17.3 32.9 1.8 38.5.8 55.4-1 40.8 3.9 31.1 11.3 25.5c6.3-4.8 15.2-6.6 22.7-5.9z"/></svg>';
                            break;
                        case "gallery":
                            i += '<svg class="fs-icon fs-icon--gallery" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.89 17.89H6.19V6.19h11.7v11.7zm-8.74-2.97h5.77V9.15H9.15v5.77z"/><path d="M4.49 13.78H2.11V2.11h11.67v2.38H4.49z"/></svg>';
                            break;
                        case "galleryCircle":
                            i += '<svg class="fs-icon fs-icon--gallery-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13.579 13.555H7.293V7.269h6.286v6.286zm-4.926-1.359h3.567V8.628H8.653v3.568z"/><path d="M6.546 11.89H5.459V5.434h6.456v1.088H6.546z"/><path d="M9.944 18.839c-4.918 0-8.919-4.001-8.919-8.919S5.026 1 9.944 1s8.919 4.001 8.919 8.919-4.001 8.92-8.919 8.92zm0-16.751c-4.318 0-7.832 3.513-7.832 7.832s3.513 7.832 7.832 7.832 7.832-3.513 7.832-7.832-3.514-7.832-7.832-7.832z"/></svg>';
                            break;
                        case "grid":
                            i += '<svg class="fs-icon fs-icon--grid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 14.25v4.25H1.5v-4.25h4.25zm6.38 0v4.25H7.88v-4.25h4.25zm6.37 0v4.25h-4.25v-4.25h4.25zM5.75 7.88v4.25H1.5V7.88h4.25zm6.38 0v4.25H7.88V7.88h4.25zm6.37 0v4.25h-4.25V7.88h4.25zM5.75 1.5v4.25H1.5V1.5h4.25zm6.38 0v4.25H7.88V1.5h4.25zm6.37 0v4.25h-4.25V1.5h4.25z"/></svg>';
                            break;
                        case "u30badge":
                            i += '<svg class="fs-icon fs-icon--u30badge" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h72v72H0z"/><path transform="translate(6.19 17.106)" fill="#FFF" d="M2.3 27.3l7.8.1c.2 1.9 1.5 3.2 5.1 3.3 3 0 4.5-.9 4.5-2.6 0-1.6-1.4-2.4-4.4-2.4h-2.7l.1-4.9h2.6c2.9 0 4.3-.8 4.4-2.3 0-1.4-1.3-2.3-4-2.3s-4.2 1.1-4.7 2.9L3.3 19c.4-5 4.8-8.2 12.7-8.1 7.3.1 11.8 2.6 11.8 6.8 0 2.7-1.9 4.5-5.1 5.3 3.7.6 5.8 2.6 5.8 5.5-.1 4.7-4.7 7.8-13 7.7-9-.2-12.9-3.6-13.2-8.9zM29 24.4v-1.6c.1-7.5 5.8-11.7 14.9-11.6 9.2.1 14.7 4.5 14.7 11.7v1.6c-.1 7.4-5.3 12-15 11.9-9.8-.2-14.7-4.9-14.6-12zm20.9.2v-1.7c0-4-1.9-6.1-6-6.1s-6.1 2-6.1 6v1.6c0 4 1.9 6.1 6.1 6.1 4.2.1 5.9-2 6-5.9z"/><path transform="translate(0 30.215)" fill="red" d="M5.8 7.6v4c0 .7-.4 1.1-1 1.1s-1-.3-1-1.1v-4h.7v4c0 .3.1.5.3.5s.3-.1.3-.5v-4h.7zm.7 0h.8l.5 2.4.1.5V7.6h.6v5h-.7l-.6-2.9-.1-.5v3.3h-.6V7.6zm3.6 0c.7 0 1.2.2 1.2 1.2v2.6c0 .9-.5 1.2-1.2 1.2h-.9v-5h.9zm-.2.5V12h.1c.3 0 .4-.1.4-.6V8.8c0-.5-.1-.6-.4-.6h-.1v-.1zm2-.5h1.6v.6h-.9v1.4h.7v.6h-.7V12h.9v.6h-1.6v-5zm2.3 0h1c.8 0 1 .3 1 1v.8c0 .5-.1.7-.4.8l.5 2.4h-.8l-.4-2.3h-.2v2.3h-.7v-5zm.9 2.2c.3 0 .3-.1.3-.4v-.9c0-.3-.1-.4-.3-.4h-.2v1.6h.2z"/><path fill="#FFF" d="M38 16.5c0-.9 0-1.7.1-2.4l-2.2.4v.2h.2c.2 0 .3.1.3.2.1.1.1.3.1.5 0 .4.1 1.4 0 2.9v2.8c.8.2 1.4.3 1.9.3.9 0 1.6-.3 2.1-.8s.8-1.2.8-2.1c0-.7-.2-1.3-.6-1.7-.4-.5-.9-.7-1.4-.7-.5 0-.9.1-1.3.4zm0 4.5c0-.5-.1-1.9-.1-4.2.1 0 .3-.1.5-.1.4 0 .6.2.8.5.2.4.3.8.3 1.4 0 .7-.1 1.3-.3 1.7-.2.5-.5.7-.9.7H38zm-10.7-6.8h-5.9v.3h.3c.2 0 .4.1.5.3.1.1.2.4.2.7.1 1.6.1 3.1 0 4.5 0 .3-.1.6-.2.7-.1.1-.3.2-.5.3h-.3v.3h3.8V21h-.4c-.2 0-.4-.1-.5-.3-.1-.1-.2-.4-.2-.7 0-.6-.1-1.3-.1-2h.8c.4 0 .7.3.9 1h.3v-2.4h-.3c-.1.6-.4 1-.9 1H24c0-1.3 0-2.3.1-2.9h1.2c.8 0 1.4.5 1.7 1.6l.3-.1v-2zm-.7 4.6c0 .8.2 1.4.7 1.9.4.5 1.1.7 1.9.7.8 0 1.4-.3 1.9-.8s.7-1.1.7-1.9c0-.8-.2-1.4-.7-1.9-.4-.5-1.1-.7-1.9-.7-.8 0-1.4.3-1.9.8s-.7 1.1-.7 1.9zm3.3-1.7c.2.4.3 1 .3 1.7 0 1.6-.3 2.3-1 2.3-.3 0-.6-.2-.8-.7-.2-.4-.3-1-.3-1.7 0-1.5.3-2.3 1-2.3.4 0 .6.2.8.7zm12.5 3.6c.5.5 1.1.7 1.9.7.5 0 .9-.1 1.2-.3.4-.2.6-.4.8-.7l-.1-.2c-.3.2-.7.4-1.1.4-.6 0-1-.2-1.4-.6-.3-.4-.5-.9-.4-1.5h3.1c0-.7-.2-1.3-.5-1.7-.4-.4-.9-.7-1.6-.7-.8 0-1.5.3-1.9.8-.5.5-.7 1.2-.7 1.9-.1.8.2 1.4.7 1.9zm1.1-3.7c.2-.4.4-.5.6-.5.4 0 .7.6.7 1.7h-1.6c0-.5.1-.9.3-1.2zm6.8-.6c-.4-.2-.9-.3-1.5-.3s-1.1.2-1.5.5c-.4.3-.6.7-.6 1.2 0 .4.1.7.3.9.2.2.6.4 1 .6.4.1.7.3.9.4.2.1.2.3.2.5s-.1.4-.2.6c-.2.2-.4.2-.6.2-.7 0-1.1-.5-1.5-1.4l-.3.1.1 1.5c.5.2 1.1.3 1.8.3s1.2-.2 1.6-.5c.4-.3.6-.7.6-1.3 0-.4-.1-.6-.3-.9-.2-.2-.5-.4-.9-.6-.5-.2-.8-.3-1-.5-.2-.1-.3-.3-.3-.5s.1-.4.2-.5c.1-.1.3-.2.5-.2.6 0 1 .4 1.3 1.3l.3-.1-.1-1.3zm-14.2-.2c-.2-.1-.4-.1-.7-.1-.2 0-.5.1-.8.3-.3.2-.5.5-.7.9v-1.2l-2.2.4v.2h.2c.3 0 .4.3.5.6.1.9.1 1.9 0 2.9 0 .4-.2.6-.5.6h-.2v.3h3.1V21h-.4c-.3 0-.4-.3-.5-.6-.1-.9-.1-1.8 0-2.7.1-.1.3-.2.6-.3.3 0 .6.1 1 .3l.6-1.5z"/></svg>'
                    }
                }, a.bvDisclaimerTooltip = t = function() {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["ftc-disclaimer__tooltip", {
                        amp: h
                    }], [!1, !0]), !1, !1) + ">Storytelling and expertise from marketers</div>"
                }, a.insightsDisclaimerTooltip = t = function() {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["ftc-disclaimer__tooltip", {
                        amp: h
                    }], [!1, !0]), !1, !1) + ">Strategic research and thought leadership</div>"
                }, a.bvDisclaimer = t = function() {
                    this && this.block, this && this.attributes;
                    i += '<span class="ftc-disclaimer voice">&nbsp;BRANDVOICE&nbsp;', a.bvDisclaimerTooltip(h), i += "</span>"
                }, a.insightsDisclaimer = t = function() {
                    this && this.block, this && this.attributes;
                    i += '<span class="ftc-disclaimer insights">FORBES INSIGHTS&nbsp;', a.insightsDisclaimerTooltip(h), i += "</span>"
                }, a.bvTitle = t = function(e) {
                    this && this.block, this && this.attributes;
                    e.advoiceBrand && (i = i + '<div class="grid__brand-voice"><span class="brand">' + l(null == (t = e.advoiceBrand) ? "" : t) + '</span><span class="brand-voice">' + (null == (t = "&nbsp;BRANDVOICE") ? "" : t) + "</span></div>")
                }, a.insightsTitle = t = function(e) {
                    this && this.block, this && this.attributes;
                    e.insights && (i += '<div class="grid__insights">FORBES INSIGHTS</div>')
                }, a.regularTitle = t = function(e) {
                    this && this.block, this && this.attributes;
                    i += '<div class="grid__regular">', e.channelSectionName && (i = i + '<span class="grid__regular-title">' + l(null == (t = e.channelSectionName) ? "" : t) + "</span>"), i += "</div>"
                }, a.topContribBlock = t = function(e, o, r, s) {
                    this && this.block, this && this.attributes;
                    i += '<div class="contrib-container top-contrib">', a.setContribAvatar(e, o, r, s, !0), i += '<div class="contrib-byline">', a.setContribByline(e, o, r, !1), r || a.setContribChannelSection(e, o, s), e.shortBio && (i = i + "<div" + n("class", c(["short-bio", {
                        "color-body light-text": u.templateType.includes("premium")
                    }], [!1, !0]), !1, !1) + "><span>" + l(null == (t = e.shortBio) ? "" : t) + "</span></div>"), i += "</div></div>"
                }, a.getContribBottom = t = function(e, t, o, r) {
                    this && this.block, this && this.attributes;
                    o ? 0 !== e.bylineFormat ? a.getContribBottom(e, t, !1, r) : a.getContribBottom(t, t, !1, r) : (i += '<div class="contrib-byline">', a.setContribAvatar(e, t, o, r, !1), i += '<div class="contrib-info">', a.setContribBottomByline(e, t, o, r), i += "</div></div>", a.setContribBottomBio(e))
                }, a.setContribAvatar = t = function(e, t, o, r, s) {
                    this && this.block, this && this.attributes;
                    r ? a.setCoAuthorAvatar(e, t, o, s) : (i = i + '<a class="fs-author-avatar"' + n("href", o ? t.url : e.url, !0, !1) + n("title", o ? "".concat(t.name, " logo") : "Photo of ".concat(e.name), !0, !1) + ">", o && t.largestAvatar || !o && e.largestAvatar ? i = i + '<img class="fs-author-image"' + n("src", o ? t.largestAvatar : e.largestAvatar, !0, !1) + n("alt", o ? t.name : e.name, !0, !1) + "/>" : a.icon("forbesF"), i += "</a>")
                }, a.setCoAuthorAvatar = t = function(e, t, o, r) {
                    this && this.block, this && this.attributes;
                    o ? r && (i += '<div class="fs-author-avatar"></div>') : a.setContribAvatar(e, t, !1, !1, r)
                }, a.setContribByline = t = function(e, o, r, s) {
                    this && this.block, this && this.attributes;
                    r ? 0 !== e.bylineFormat ? (a.setContribByline(e, o, !1, !0), a.setPublicationByline(o), a.setContribChannelSection(e, o, !1)) : (a.setPublicationByline(o), a.setContribChannelSection(e, o, !1)) : (i = i + '<div class="fs-author-wrapper"><span class="fs-author-name"><a' + (n("class", c(["contrib-link--name", "remove-underline", {
                        "color-body": u.templateType.includes("premium")
                    }], [!1, !1, !0]), !1, !1) + n("href", e.url, !0, !1)) + ">" + l(null == (t = e.name) ? "" : t) + "</a><span" + n("class", c(["contrib-byline-type", {
                        "color-body light-text": u.templateType.includes("premium")
                    }], [!1, !0]), !1, !1) + ">" + l(null == (t = e.displayType) ? "" : t) + "</span>", e.showAuthorTypeDisclaimer && !s && (i = i + "<span" + n("class", c(["disclaimer", {
                        "color-fill-disclaimer light-text": u.templateType.includes("premium")
                    }], [!1, !0]), !1, !1) + ">", a.icon("info"), i += '<div class="ftc-disclaimer__tooltip">Opinions expressed by Forbes Contributors are their own.</div></span>'), 0 === x && u.showFollowAuthor && (i = i + '<fbs-cordial type="Follow"' + n("natural-id", u.authorGroup.primaryAuthor.naturalId, !0, !1) + n("author-slug", u.authorGroup.primaryAuthor.slug, !0, !1) + ' style="margin-left: 8px;"></fbs-cordial>'), i += "</span></div>")
                }, a.setContribBottomByline = t = function(e, a, o, r) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="author-wrapper"><a' + (n("class", c(["author-name", "contrib-byline-author", "speakable-author", {
                        "color-body": u.templateType.includes("premium")
                    }], [!1, !1, !1, !0]), !1, !1) + n("href", e.url, !0, !1)) + ' data-ga-track="contrib block byline">' + l(null == (t = e.name) ? "" : t) + "</a></div>"
                }, a.setPublicationByline = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + '<div class="contrib-publication"><span class="fs-author-name"><a' + (n("class", c(["contrib-link--name", "remove-underline", {
                        "color-body": u.templateType.includes("premium")
                    }], [!1, !1, !0]), !1, !1) + n("href", e.url, !0, !1)) + ">" + l(null == (t = e.name) ? "" : t) + '</a><div class="contrib-label-container">', d.keys(u.authorGroup.paidContent).length > 0 && "Forbes Staff" !== e.type ? (i = i + "<span" + (n("class", c(["ftc-disclaimer", "contrib-byline-type", "".concat("ad" === u.authorGroup.paidContent.type ? "bv" : u.authorGroup.paidContent.type, "-label")], [!1, !1, !0]), !1, !1) + n("style", p("color: ".concat(u.authorGroup.paidContent.primaryColor)), !0, !1)) + ">" + l(null == (t = u.authorGroup.publication.displayType) ? "" : t), u.authorGroup.paidContent.showDisclaimer && (i = i + '<div class="ftc-disclaimer__tooltip">' + l(null == (t = u.authorGroup.paidContent.disclaimerText) ? "" : t) + "</div>"), i = i + "</span><span" + n("class", c(["ftc-label", {
                        "light-text color-body": u.templateType.includes("premium")
                    }], [!1, !0]), !1, !1) + ">" + l(null == (t = u.authorGroup.paidContent.ftcLabel) ? "" : t) + "</span>") : (i = i + "<span" + n("class", c(["contrib-byline-type", {
                        "color-body light-text": u.templateType.includes("premium")
                    }], [!1, !0]), !1, !1) + ">" + l(null == (t = e.displayType) ? "" : t) + "</span>", "Contributor Group" === e.displayType && (i = i + "<span" + n("class", c(["disclaimer", {
                        "color-fill-disclaimer light-text": u.templateType.includes("premium")
                    }], [!1, !0]), !1, !1) + ">", a.icon("info"), i += '<div class="ftc-disclaimer__tooltip">Opinions expressed by Forbes Contributors are their own.</div></span>')), i += "</div></span></div>"
                }, a.setContribChannelSection = t = function(e, t, i) {
                    this && this.block, this && this.attributes;
                    i ? a.setContribChannelSection(e, e, !1) : a.getChannelSection(t)
                }, a.getChannelSection = t = function(e) {
                    this && this.block, this && this.attributes;
                    ((e.primaryChannel || {}).sectionName || (e.primaryChannel || {}).channelName) && (i = i + '<div class="section-name"><a class="remove-underline"' + n("href", (e.primaryChannel || {}).url, !0, !1) + n("style", p({
                        color: e.chanSecColor || u.chanSecColor || "#737373"
                    }), !0, !1) + ">" + l(null == (t = (e.primaryChannel || {}).sectionName || (e.primaryChannel || {}).channelName) ? "" : t) + "</a></div>")
                }, a.setContribBottomBio = t = function(e) {
                    this && this.block, this && this.attributes;
                    i += '<div class="contrib-bio">', i = e.shortDescription ? i + '<div class="contributor-about__initial-description"><p class="author-description">' + (null == (t = e.shortDescription) ? "" : t) + "</p><button" + n("class", c(["toggle-description", "contributor-about__read-more", {
                        "color-body": u.templateType.includes("premium")
                    }], [!1, !1, !0]), !1, !1) + ' data-vars-event-label="contrib block expand" data-ga-track="contrib block expand">&nbsp;Read More</button></div><div class="contributor-about__full-description contributor-about__description-hidden"><p class="author-description">' + (null == (t = e.description) ? "" : t) + "</p><button" + n("class", c(["toggle-description", "contributor-about__read-less", "contributor-about__description-hidden", {
                        "color-body": u.templateType.includes("premium")
                    }], [!1, !1, !1, !0]), !1, !1) + ' data-vars-event-label="contrib block reduce" data-ga-track="contrib block reduce">&nbsp;Read Less</button></div>' : i + '<div class="contributor-about__no-expandable"><p class="text">' + (null == (t = e.description) ? "" : t) + "</p></div>", i += "</div>"
                }, a.articleMetrics = t = function(e, a) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this && this.block, this && this.attributes;
                    i = i + "<div" + (n("class", c(["content-data", e.containerClasses], [!1, !0]), !1, !1) + n("data-date-expiration", e.liveExpirationTimestamp, !0, !1) + n("data-date-modified", e.liveUpdateTimestamp, !0, !1)) + ">", d.keys(e.badge || {}).length && (i = i + '<a class="bertie-badge"' + n("href", e.badge.streamUrl, !0, !1) + ' style="letter-spacing:normal;text-transform:uppercase;">' + l(null == (t = e.badge.displayName) ? "" : t) + "</a>", (e.showPageviews || e.showTimestamp) && (i += '<span class="vert-pipe first">|</span>')), d.keys(a || {}).length && e.showTimestamp && (i = i + "<time>" + l(null == (t = a.monthDayYear) ? "" : t) + ',</time><span class="time"><time>' + l(null == (t = a.hourMinute) ? "" : t) + l(null == (t = a.amPm) ? "" : t) + " " + l(null == (t = a.isEDT ? "EDT" : "EST") ? "" : t) + "</time></span>"), e.showPageviews && e.showTimestamp && (i = i + "<span" + n("class", c(["vert-pipe", {
                        hidden: !o || !b
                    }], [!1, !0]), !1, !1) + ">|</span>"), i += '<span class="hidden pageviews-wrapper"></span>', o && e.showPageviews && b && (i = i + '<span class="pageviews">' + l(null == (t = b.toLocaleString()) ? "" : t) + " views</span>"), i += "</div>"
                }, a.articleHeadline = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["article-headline-container", (e.formatVariant || {}).headlinePositionClasses], [!1, !0]), !1, !1) + ">", e.heroMedia && (i = i + "<div" + n("class", c(["header-background-container", (e.formatVariant || {}).headlineBackgroundColorClasses], [!1, !0]), !1, !1) + "></div>"), i = i + "<div" + n("class", c(["header-content-container", {
                        "adlight-experience": e.isAdLight
                    }], [!1, !0]), !1, !1) + ">", e.metrics.showArticleMetrics && (i += '<div class="metrics-channel light-text">', a.articleMetrics(e.metrics, e.displayTimestamp), i += "</div>"), i = i + "<h1" + n("class", c(["fs-headline", "speakable-headline", "font-base", "font-size", e.formatVariant ? e.formatVariant.headlineTextColorClass : ""], [!1, !1, !1, !1, !0]), !1, !1) + ">" + l(null == (t = e.title) ? "" : t) + "</h1></div></div>"
                }, a.premiumHeroHeadline = t = function(e, t) {
                    this && this.block, this && this.attributes;
                    "no-hero" === t.headline ? (i = i + "<div" + n("class", c(["premium-header-hero-container", e.premiumHeroContainerClasses], [!1, !0]), !1, !1) + ">", a.articleHeadline(u), i += "</div>") : (i = i + "<div" + (n("class", c(["premium-header-hero-container", e.premiumHeroContainerClasses], [!1, !0]), !1, !1) + n("data-ratio", e.heroRatio, !0, !1)) + ">", "atmospheric" === e.type ? a.premiumAtmosphericHero(e, t) : "brightcove" === e.type ? a.premiumBrightcoveHero(e, t) : a.premiumImageHero(e, t), "no-headline" !== t.headline && (["default", "color"].indexOf(t.headline) >= 0 ? (i += '<div class="bg-base">', a.articleHeadline(u), i += "</div>") : a.articleHeadline(u)), i += "</div>")
                }, a.premiumImageHero = t = function(e, a) {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["hero-image-container", e.premiumMediaContainerClasses], [!1, !0]), !1, !1) + "><div" + (n("class", c(["hero-image-block", "".concat(a.headline, " ").concat(e.metaEmbeds ? "" : "no-metaembeds")], [!1, !0]), !1, !1) + n("style", p(e.heroRatio ? "padding-bottom: ".concat(e.heroRatio, "%;") : ""), !0, !1)) + ">", i = "no-headline" === a.headline ? i + '<h1><img class="hero-image"' + n("alt", u.title, !0, !1) + n("src", e.imgSrc, !0, !1) + "/></h1>" : i + '<img class="hero-image"' + n("alt", e.altText || u.title, !0, !1) + ' role="presentational"' + n("src", e.imgSrc, !0, !1) + "/>", i += "</div>", e.credit && ["default", "color"].indexOf(a.headline) >= 0 && (i = i + '<span class="hero-image-credit light-text">' + l(null == (t = e.credit) ? "" : t) + "</span>"), i += "</div>"
                }, a.premiumBrightcoveHero = t = function(e, t) {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["hero-brightcove-container", e.premiumMediaContainerClasses], [!1, !0]), !1, !1) + ">", i = "no-headline" === t.headline ? i + '<h1><div class="hero-brightcove-block no-headline"' + n("style", p("background-image: url('".concat(e.videoImg, "')")), !0, !1) + '><fbs-video class="hero-brightcove-video"' + n("player-id", e.playerId, !0, !1) + n("title", u.title, !0, !1) + n("video-id", e.videoId, !0, !1) + n("ads-disabled", !e.hasPreroll, !0, !1) + n("show-overlay", e.showBCHeadline.toString(), !0, !1) + "></fbs-video></div></h1>" : i + '<div class="hero-brightcove-block"' + n("style", p("background-image: url('".concat(e.videoImg, "')")), !0, !1) + '><fbs-video class="hero-brightcove-video"' + n("player-id", e.playerId, !0, !1) + n("video-id", e.videoId, !0, !1) + n("ads-disabled", !e.hasPreroll, !0, !1) + n("show-overlay", e.showBCHeadline.toString(), !0, !1) + "></fbs-video></div>", i += "</div>"
                }, a.premiumAtmosphericHero = t = function(e, a) {
                    this && this.block, this && this.attributes;
                    i = i + "<div" + n("class", c(["hero-atmospheric-container", e.premiumMediaContainerClasses], [!1, !0]), !1, !1) + '><div class="hero-atmospheric-block"' + n("style", p("background-image: url('".concat(e.videoImg, "'); padding-bottom: ").concat(e.heroRatio, "%")), !0, !1) + '><video class="hero-atmospheric-video" autoplay="true" loop="true" muted="true"><source' + n("src", e.videoSrc, !0, !1) + ' type="video/mp4"/></video></div>', e.credit && ["default", "color"].indexOf(a.headline) >= 0 && (i = i + '<span class="hero-image-credit light-text">' + l(null == (t = e.credit) ? "" : t) + "</span>"), i += "</div>"
                }, i = i + "<article" + (n("class", c(["pay-wall-content", (S = {}, (0, o.default)(S, u.articleId, !0), (0, o.default)(S, "current-page", !x), S)], [!1, !0]), !1, !1) + n("id", "article-container-".concat(x), !0, !1)) + ">", !g && u.showNtvArticleAd && (i = i + '<fbs-ad class="ntv-contentd" position="ntv-contentd" ad-id="ntv-contentd"' + n("batched", !0, !0, !1) + "></fbs-ad>"), u.templateType.includes("premium") ? (u.inflatedEmbedStyles && (i = i + "<style>" + (null == (t = u.inflatedEmbedStyles) ? "" : t) + "</style>"), 0 === x && (i = i + '<div class="fbs-ad--top-wrapper fbs-premium-hero fbs-ad--top-wrapper--sticky"><fbs-ad class="hero-ad" position="hero" ad-id="fbs-hero-ad"' + n("batched", !0, !0, !1) + ' custom-targeting="hero:true"></fbs-ad></div>'), i = i + '<main class="main-content--body premium color-body bg-base"' + n("id", "article-stream-".concat(x), !0, !1) + "><div" + n("class", c(["edit-story-container", "hide-button", {
                    "edit-premium": u.templateType.includes("premium")
                }], [!1, !1, !0]), !1, !1) + '><a class="edit-story-call"' + n("href", u.bertieEditLink, !0, !1) + ' rel="noopener noreferrer" target="_blank" role="button">', a.icon("edit"), i += "<span>Edit Story</span></a></div>", u.heroMedia && u.formatVariant && a.premiumHeroHeadline(u.heroMedia, u.formatVariant), i += '<div class="premium-article-wrapper bg-base">', u.heroMedia.credit && ["default", "color", "no-hero"].indexOf(u.formatVariant.headline) < 0 && (i = i + '<span class="hero-image-credit light-text color-body">' + l(null == (t = u.heroMedia.credit) ? "" : t) + "</span>"), i += '<div class="premium-container body-container">', "no-headline" === (u.formatVariant || {}).headline && u.metrics.showArticleMetrics && (i += '<div class="metrics-channel no-headline-metrics">', a.articleMetrics(u.metrics, u.displayTimestamp), i += "</div>"), i = i + "<div" + (n("class", c(["top-contrib-block", "".concat(u.formatVariant && !(u.formatVariant || {}).isContribVisible ? "hide-contribs" : "", " ").concat(u.templateType.includes("premium") ? "color-accent" : "", " ").concat((u.formatVariant || {}).headline || "", " ").concat("shopping" === u.storyPackage.type ? "no-border" : "")], [!1, !0]), !1, !1) + n("style", p("border-color: ".concat(u.isAdLight ? y.channelColor : "")), !0, !1)) + "><div" + n("class", c(["contribs", {
                    "adlight-experience": u.isAdLight
                }], [!1, !0]), !1, !1) + ">", a.topContribBlock(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>"), function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var o = 0, r = e.length; o < r; o++) {
                            var n = e[o];
                            a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                        } else {
                            r = 0;
                            for (var o in e) {
                                r++;
                                n = e[o];
                                a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                            }
                        }
                }.call(this), "top" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), i += "</div>", "finds" === u.templateType && a.getForbesFindsDisclaimer(!1, u.forbesFindsData.contribName, u.forbesFindsData.customDisclaimer), u.templateType.includes("premium") && (i += '<div class="article-sharing">', a.socialShareButtons(k), i += "</div>"), i += '</div><div class="article-body-container">', "magazine" === u.type && u.magazine && a.magazineText(u.magazine, !0), i = i + "<div" + n("class", c(["article-body", u.articleBodyClasses], [!1, !0]), !1, !1) + ">" + (null == (t = u.body) ? "" : t) + "</div>", u.showMoreFromBlock && a.grid(y.moreFromVideoData, "premiumVideoGrid", "premium-video", null, !1), "bottom" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), u.enableSigfile && u.sigfile && a.sigfile(u.sigfile, u.authorGroup.primaryAuthor.type, !0), u.legalDisclaimer && (i = i + "<div" + n("class", c(["legal-disclaimer", {
                    "color-body light-text": u.templateType.includes("premium")
                }], [!1, !0]), !1, !1) + ">" + (null == (t = u.legalDisclaimer) ? "" : t) + "</div>"), i += '<div class="bottom-contrib-block">', a.getContribBottom(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), i += "</div>", function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var t = 0, o = e.length; t < o; t++) {
                            var r = e[t];
                            i += '<div class="bottom-contrib-block">', a.getContribBottom(r, u.authorGroup.publication, m, !0), i += "</div>"
                        } else {
                            o = 0;
                            for (var t in e) {
                                o++;
                                r = e[t];
                                i += '<div class="bottom-contrib-block">', a.getContribBottom(r, u.authorGroup.publication, m, !0), i += "</div>"
                            }
                        }
                }.call(this), a.desktopFooterRow = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + "<ul" + n("class", c(["footer-row", "color-body", "light-text", e.className], [!1, !1, !1, !0]), !1, !1) + ">",
                        function() {
                            var t = e.data;
                            if ("number" == typeof t.length)
                                for (var i = 0, o = t.length; i < o; i++) {
                                    var r = t[i];
                                    a.footerLink(r)
                                } else {
                                    o = 0;
                                    for (var i in t) {
                                        o++;
                                        r = t[i];
                                        a.footerLink(r)
                                    }
                                }
                        }.call(this), i += "</ul>"
                }, a.footerLink = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = e.attributes ? i + "<li" + n("class", c([e.className], [!0]), !1, !1) + "><a" + s(e.attributes, !1) + ">" + l(null == (t = e.text) ? "" : t) + "</a></li>" : i + '<li class="no-hover-color">' + l(null == (t = e.text) ? "" : t) + "</li>"
                }, i = i + "<div" + (n("class", c(["article-footer", {
                    "bg-base": u.templateType.includes("premium")
                }], [!1, !0]), !1, !1) + n("style", p({
                    border: u.templateType.includes("premium") && u.isStreamDisabled ? "none" : ""
                }), !0, !1)) + ">", function() {
                    var e = v;
                    if ("number" == typeof e.length)
                        for (var t = 0, i = e.length; t < i; t++) {
                            var o = e[t];
                            a.desktopFooterRow(o)
                        } else {
                            i = 0;
                            for (var t in e) {
                                i++;
                                o = e[t];
                                a.desktopFooterRow(o)
                            }
                        }
                }.call(this), !u.isAdLight && ["ad", "insights", "connoisseur"].indexOf(u.blogType) < 0 && (i += '<div class="footer-ad-labeling"></div>'), i += "</div></div></div>", d.keys(u.pinnedEmbed || {}).length && "slido" === u.pinnedEmbed.type && a.setPinnedEmbed(u.pinnedEmbed), i += "</div></main>") : u.isAdLight ? (u.retracted || "none" === u.adExperience || (i = i + "<div" + n("class", c(["top-ad-container", "fbs-ad--top-wrapper", {
                    "ad-bar-container": 0 === x && !u.topStories && _.length > 0
                }], [!1, !1, !0]), !1, !1) + ">", 0 === x && !u.topStories && (_ || []).length > 0 && w && (i = i + '<div class="top-stories hidden"><h3 class="preview__eyebrows preview__eyebrows--top-stories"><span data-ga-track="Top Stories Label">More From Forbes</span></h3><div class="top-stories__carousel-wrapper">' + (null == (t = w) ? "" : t) + "</div></div>"), i = i + '<fbs-ad position="top"' + n("ad-id", "article-".concat(x, "-top"), !0, !1) + ' batched="batched"></fbs-ad></div>'), i = i + '<main class="main-content--body"' + n("id", "article-stream-".concat(x), !0, !1) + "><div" + n("class", c(["edit-story-container", "hide-button", {
                    "edit-premium": u.templateType.includes("premium")
                }], [!1, !1, !0]), !1, !1) + '><a class="edit-story-call"' + n("href", u.bertieEditLink, !0, !1) + ' rel="noopener noreferrer" target="_blank" role="button">', a.icon("edit"), i += '<span>Edit Story</span></a></div><div class="article-wrapper adlight-article"><div class="adlight-header-container"><div class="header-content">', a.articleHeadline(u), i = i + "<div" + (n("class", c(["top-contrib-block", "".concat(u.formatVariant && !(u.formatVariant || {}).isContribVisible ? "hide-contribs" : "", " ").concat(u.templateType.includes("premium") ? "color-accent" : "", " ").concat((u.formatVariant || {}).headline || "", " ").concat("shopping" === u.storyPackage.type ? "no-border" : "")], [!1, !0]), !1, !1) + n("style", p("border-color: ".concat(u.isAdLight ? y.channelColor : "")), !0, !1)) + "><div" + n("class", c(["contribs", {
                    "adlight-experience": u.isAdLight
                }], [!1, !0]), !1, !1) + ">", a.topContribBlock(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>"), function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var o = 0, r = e.length; o < r; o++) {
                            var n = e[o];
                            a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                        } else {
                            r = 0;
                            for (var o in e) {
                                r++;
                                n = e[o];
                                a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                            }
                        }
                }.call(this), "top" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), i += "</div>", "finds" === u.templateType && a.getForbesFindsDisclaimer(!1, u.forbesFindsData.contribName, u.forbesFindsData.customDisclaimer), u.templateType.includes("premium") && (i += '<div class="article-sharing">', a.socialShareButtons(k), i += "</div>"), i = i + '</div></div><div class="right-rail adlight-rail"></div></div><div class="adlight-body-container"><div' + n("class", c(["body-container", {
                    "body-content": u.isAdLight
                }], [!1, !0]), !1, !1) + ">", u.isAdLight || (a.articleHeadline(u), i = i + "<div" + (n("class", c(["top-contrib-block", "".concat(u.formatVariant && !(u.formatVariant || {}).isContribVisible ? "hide-contribs" : "", " ").concat(u.templateType.includes("premium") ? "color-accent" : "", " ").concat((u.formatVariant || {}).headline || "", " ").concat("shopping" === u.storyPackage.type ? "no-border" : "")], [!1, !0]), !1, !1) + n("style", p("border-color: ".concat(u.isAdLight ? y.channelColor : "")), !0, !1)) + "><div" + n("class", c(["contribs", {
                    "adlight-experience": u.isAdLight
                }], [!1, !0]), !1, !1) + ">", a.topContribBlock(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>"), function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var o = 0, r = e.length; o < r; o++) {
                            var n = e[o];
                            a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                        } else {
                            r = 0;
                            for (var o in e) {
                                r++;
                                n = e[o];
                                a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                            }
                        }
                }.call(this), "top" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), i += "</div>", "finds" === u.templateType && a.getForbesFindsDisclaimer(!1, u.forbesFindsData.contribName, u.forbesFindsData.customDisclaimer), u.templateType.includes("premium") && (i += '<div class="article-sharing">', a.socialShareButtons(k), i += "</div>"), i += "</div>"), i += '<div class="article-body-container">', u.elderly && (i += '<div class="elderly-label"><div class="elderly-clock"><span>', a.icon("clock"), i = i + "</span></div><span>" + l(null == (t = "This article is more than ".concat(u.elderly, " years old.")) ? "" : t) + "</span></div>"), "magazine" === u.type && u.magazine && a.magazineText(u.magazine), u.tweetQuotes.length && (i = i + '<div class="top-tweet-quotes"><h5>' + l(null == (t = "Tweet This") ? "" : t) + '</h5><ul class="tweet-quote__list">', function() {
                    var e = u.tweetQuotes;
                    if ("number" == typeof e.length)
                        for (var o = 0, r = e.length; o < r; o++) {
                            var n = e[o];
                            i += '<li class="tweet-quote__item"><div class="tweet-quote__icon">', a.icon("twitter"), i = i + "</div>" + (null == (t = n) ? "" : t) + "</li>"
                        } else {
                            r = 0;
                            for (var o in e) {
                                r++;
                                n = e[o];
                                i += '<li class="tweet-quote__item"><div class="tweet-quote__icon">', a.icon("twitter"), i = i + "</div>" + (null == (t = n) ? "" : t) + "</li>"
                            }
                        }
                }.call(this), i += "</ul></div>"), d.keys(u.updatedTimestamp || {}).length && (i = i + '<div class="topline-updated-timestamp">Updated ' + l(null == (t = u.updatedTimestamp.monthDayYear) ? "" : t) + ", " + l(null == (t = u.updatedTimestamp.hourMinute) ? "" : t) + l(null == (t = u.updatedTimestamp.amPm) ? "" : t) + " " + l(null == (t = u.updatedTimestamp.isEDT ? "EDT" : "EST") ? "" : t) + "</div>"), "shopping" === u.storyPackage.type && (i = i + '<div class="black-friday__description-title">' + (null == (t = u.storyPackage.description) ? "" : t) + "</div>"), i = i + "<div" + n("class", c(["article-body", u.articleBodyClasses], [!1, !0]), !1, !1) + '><div class="article-sharing">', a.socialShareButtons(k), i = i + "</div>" + (null == (t = u.body) ? "" : t) + "</div>", "bottom" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), u.enableSigfile && u.sigfile && a.sigfile(u.sigfile, u.authorGroup.primaryAuthor.type), u.legalDisclaimer && (i = i + "<div" + n("class", c(["legal-disclaimer", {
                    "color-body light-text": u.templateType.includes("premium")
                }], [!1, !0]), !1, !1) + ">" + (null == (t = u.legalDisclaimer) ? "" : t) + "</div>"), i += '<div class="bottom-contrib-block">', a.getContribBottom(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), i += "</div>", function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var t = 0, o = e.length; t < o; t++) {
                            var r = e[t];
                            i += '<div class="bottom-contrib-block">', a.getContribBottom(r, u.authorGroup.publication, m, !0), i += "</div>"
                        } else {
                            o = 0;
                            for (var t in e) {
                                o++;
                                r = e[t];
                                i += '<div class="bottom-contrib-block">', a.getContribBottom(r, u.authorGroup.publication, m, !0), i += "</div>"
                            }
                        }
                }.call(this), a.desktopFooterRow = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + "<ul" + n("class", c(["footer-row", "color-body", "light-text", e.className], [!1, !1, !1, !0]), !1, !1) + ">",
                        function() {
                            var t = e.data;
                            if ("number" == typeof t.length)
                                for (var i = 0, o = t.length; i < o; i++) {
                                    var r = t[i];
                                    a.footerLink(r)
                                } else {
                                    o = 0;
                                    for (var i in t) {
                                        o++;
                                        r = t[i];
                                        a.footerLink(r)
                                    }
                                }
                        }.call(this), i += "</ul>"
                }, a.footerLink = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = e.attributes ? i + "<li" + n("class", c([e.className], [!0]), !1, !1) + "><a" + s(e.attributes, !1) + ">" + l(null == (t = e.text) ? "" : t) + "</a></li>" : i + '<li class="no-hover-color">' + l(null == (t = e.text) ? "" : t) + "</li>"
                }, i = i + "<div" + (n("class", c(["article-footer", {
                    "bg-base": u.templateType.includes("premium")
                }], [!1, !0]), !1, !1) + n("style", p({
                    border: u.templateType.includes("premium") && u.isStreamDisabled ? "none" : ""
                }), !0, !1)) + ">", function() {
                    var e = v;
                    if ("number" == typeof e.length)
                        for (var t = 0, i = e.length; t < i; t++) {
                            var o = e[t];
                            a.desktopFooterRow(o)
                        } else {
                            i = 0;
                            for (var t in e) {
                                i++;
                                o = e[t];
                                a.desktopFooterRow(o)
                            }
                        }
                }.call(this), !u.isAdLight && ["ad", "insights", "connoisseur"].indexOf(u.blogType) < 0 && (i += '<div class="footer-ad-labeling"></div>'), i += "</div>", !u.templateType.includes("premium") && ["ad", "insights"].indexOf(u.blogType) < 0 && !u.isAdLight && !u.retracted && a.desktopMedianet({
                    position: "media_net_0_article_".concat(x),
                    size: "800x200",
                    tagId: 0 === x ? "147984832" : "339696797",
                    bta: !0
                }), i = i + "</div></div><div" + (n("class", c(["right-rail", {
                    "adlight-rail": u.isAdLight
                }], [!1, !0]), !1, !1) + n("article-index", x, !0, !1)) + ">", !u.relativeVideo || u.isAdLight || u.retracted || "advisor" === u.templateType || (i += '<div class="video-placeholder"><div class="video-player inactive"><div class="video-title"></div></div></div>'), u.retracted || "none" === u.adExperience || (i = i + "<div" + n("class", c(["ad-rail", {
                    "ad-rail--progressive": u.progressiveAds
                }], [!1, !0]), !1, !1) + ">", u.progressiveAds && !g && (i = i + "<div" + n("class", c(["fbs-ad-wrapper fbs-spon-logo fbs-ad--article-".concat(x, "-spon-logo-wrapper blocked-ad")], [!0]), !1, !1) + "><fbs-ad" + (n("ad-id", "article-".concat(x, "-spon-logo"), !0, !1) + n("batched", !0, !0, !1)) + ' position="spon-logo"></fbs-ad></div>'), i = i + "<div" + n("class", c(["fbs-ad-wrapper fbs-ad--article-".concat(x, "-rec-wrapper")], [!0]), !1, !1) + "><fbs-ad" + (n("ad-id", "article-".concat(x, "-rec"), !0, !1) + n("batched", !0, !0, !1)) + ' position="rec"></fbs-ad></div>', f || u.progressiveAds || (i = i + "<div" + n("class", c(["fbs-ad-wrapper fbs-ad--article-".concat(x, "-recx-1-wrapper")], [!0]), !1, !1) + "><fbs-ad" + n("ad-id", "article-".concat(x, "-recx-1"), !0, !1) + ' batched="batched" position="recx"></fbs-ad></div>'), i += "</div>"), i += "</div></div></div></main>") : (u.retracted || "none" === u.adExperience || (i = i + "<div" + n("class", c(["top-ad-container", "fbs-ad--top-wrapper", {
                    "ad-bar-container": 0 === x && !u.topStories && _.length > 0
                }], [!1, !1, !0]), !1, !1) + ">", 0 === x && !u.topStories && (_ || []).length > 0 && w && (i = i + '<div class="top-stories hidden"><h3 class="preview__eyebrows preview__eyebrows--top-stories"><span data-ga-track="Top Stories Label">More From Forbes</span></h3><div class="top-stories__carousel-wrapper">' + (null == (t = w) ? "" : t) + "</div></div>"), i = i + '<fbs-ad position="top"' + n("ad-id", "article-".concat(x, "-top"), !0, !1) + ' batched="batched"></fbs-ad></div>'), i = i + '<main class="main-content--body"' + n("id", "article-stream-".concat(x), !0, !1) + "><div" + n("class", c(["edit-story-container", "hide-button", {
                    "edit-premium": u.templateType.includes("premium")
                }], [!1, !1, !0]), !1, !1) + '><a class="edit-story-call"' + n("href", u.bertieEditLink, !0, !1) + ' rel="noopener noreferrer" target="_blank" role="button">', a.icon("edit"), i = i + '<span>Edit Story</span></a></div><div class="article-wrapper"><div class="left-rail"' + n("article-index", x, !0, !1) + "></div><div" + n("class", c(["body-container", {
                    "body-content": u.isAdLight
                }], [!1, !0]), !1, !1) + ">", u.isAdLight || (a.articleHeadline(u), i = i + "<div" + (n("class", c(["top-contrib-block", "".concat(u.formatVariant && !(u.formatVariant || {}).isContribVisible ? "hide-contribs" : "", " ").concat(u.templateType.includes("premium") ? "color-accent" : "", " ").concat((u.formatVariant || {}).headline || "", " ").concat("shopping" === u.storyPackage.type ? "no-border" : "")], [!1, !0]), !1, !1) + n("style", p("border-color: ".concat(u.isAdLight ? y.channelColor : "")), !0, !1)) + "><div" + n("class", c(["contribs", {
                    "adlight-experience": u.isAdLight
                }], [!1, !0]), !1, !1) + ">", a.topContribBlock(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>"), function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var o = 0, r = e.length; o < r; o++) {
                            var n = e[o];
                            a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                        } else {
                            r = 0;
                            for (var o in e) {
                                r++;
                                n = e[o];
                                a.topContribBlock(n, u.authorGroup.publication, m, !0), u.authorGroup.paidContent.showInViewDisclaimer && (i = i + '<div class="contrib__in-view-disclaimer">' + l(null == (t = u.authorGroup.paidContent.inViewDisclaimerText) ? "" : t) + "</div>")
                            }
                        }
                }.call(this), "top" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), i += "</div>", "finds" === u.templateType && a.getForbesFindsDisclaimer(!1, u.forbesFindsData.contribName, u.forbesFindsData.customDisclaimer), u.templateType.includes("premium") && (i += '<div class="article-sharing">', a.socialShareButtons(k), i += "</div>"), i += "</div>"), i += '<div class="article-body-container">', u.elderly && (i += '<div class="elderly-label"><div class="elderly-clock"><span>', a.icon("clock"), i = i + "</span></div><span>" + l(null == (t = "This article is more than ".concat(u.elderly, " years old.")) ? "" : t) + "</span></div>"), "magazine" === u.type && u.magazine && a.magazineText(u.magazine), u.tweetQuotes.length && (i = i + '<div class="top-tweet-quotes"><h5>' + l(null == (t = "Tweet This") ? "" : t) + '</h5><ul class="tweet-quote__list">', function() {
                    var e = u.tweetQuotes;
                    if ("number" == typeof e.length)
                        for (var o = 0, r = e.length; o < r; o++) {
                            var n = e[o];
                            i += '<li class="tweet-quote__item"><div class="tweet-quote__icon">', a.icon("twitter"), i = i + "</div>" + (null == (t = n) ? "" : t) + "</li>"
                        } else {
                            r = 0;
                            for (var o in e) {
                                r++;
                                n = e[o];
                                i += '<li class="tweet-quote__item"><div class="tweet-quote__icon">', a.icon("twitter"), i = i + "</div>" + (null == (t = n) ? "" : t) + "</li>"
                            }
                        }
                }.call(this), i += "</ul></div>"), d.keys(u.updatedTimestamp || {}).length && (i = i + '<div class="topline-updated-timestamp">Updated ' + l(null == (t = u.updatedTimestamp.monthDayYear) ? "" : t) + ", " + l(null == (t = u.updatedTimestamp.hourMinute) ? "" : t) + l(null == (t = u.updatedTimestamp.amPm) ? "" : t) + " " + l(null == (t = u.updatedTimestamp.isEDT ? "EDT" : "EST") ? "" : t) + "</div>"), "shopping" === u.storyPackage.type && (i = i + '<div class="black-friday__description-title">' + (null == (t = u.storyPackage.description) ? "" : t) + "</div>"), i = i + "<div" + n("class", c(["article-body", u.articleBodyClasses], [!1, !0]), !1, !1) + '><div class="article-sharing">', a.socialShareButtons(k), i = i + "</div>" + (null == (t = u.body) ? "" : t) + "</div>", "bottom" === (u.guestContributor || {}).position && a.guestContributorBlock(u.guestContributor), u.enableSigfile && u.sigfile && a.sigfile(u.sigfile, u.authorGroup.primaryAuthor.type), u.legalDisclaimer && (i = i + "<div" + n("class", c(["legal-disclaimer", {
                    "color-body light-text": u.templateType.includes("premium")
                }], [!1, !0]), !1, !1) + ">" + (null == (t = u.legalDisclaimer) ? "" : t) + "</div>"), i += '<div class="bottom-contrib-block">', a.getContribBottom(u.authorGroup.primaryAuthor, u.authorGroup.publication, m, !1), i += "</div>", function() {
                    var e = u.authorGroup.coAuthors;
                    if ("number" == typeof e.length)
                        for (var t = 0, o = e.length; t < o; t++) {
                            var r = e[t];
                            i += '<div class="bottom-contrib-block">', a.getContribBottom(r, u.authorGroup.publication, m, !0), i += "</div>"
                        } else {
                            o = 0;
                            for (var t in e) {
                                o++;
                                r = e[t];
                                i += '<div class="bottom-contrib-block">', a.getContribBottom(r, u.authorGroup.publication, m, !0), i += "</div>"
                            }
                        }
                }.call(this), a.desktopFooterRow = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = i + "<ul" + n("class", c(["footer-row", "color-body", "light-text", e.className], [!1, !1, !1, !0]), !1, !1) + ">",
                        function() {
                            var t = e.data;
                            if ("number" == typeof t.length)
                                for (var i = 0, o = t.length; i < o; i++) {
                                    var r = t[i];
                                    a.footerLink(r)
                                } else {
                                    o = 0;
                                    for (var i in t) {
                                        o++;
                                        r = t[i];
                                        a.footerLink(r)
                                    }
                                }
                        }.call(this), i += "</ul>"
                }, a.footerLink = t = function(e) {
                    this && this.block, this && this.attributes;
                    i = e.attributes ? i + "<li" + n("class", c([e.className], [!0]), !1, !1) + "><a" + s(e.attributes, !1) + ">" + l(null == (t = e.text) ? "" : t) + "</a></li>" : i + '<li class="no-hover-color">' + l(null == (t = e.text) ? "" : t) + "</li>"
                }, i = i + "<div" + (n("class", c(["article-footer", {
                    "bg-base": u.templateType.includes("premium")
                }], [!1, !0]), !1, !1) + n("style", p({
                    border: u.templateType.includes("premium") && u.isStreamDisabled ? "none" : ""
                }), !0, !1)) + ">", function() {
                    var e = v;
                    if ("number" == typeof e.length)
                        for (var t = 0, i = e.length; t < i; t++) {
                            var o = e[t];
                            a.desktopFooterRow(o)
                        } else {
                            i = 0;
                            for (var t in e) {
                                i++;
                                o = e[t];
                                a.desktopFooterRow(o)
                            }
                        }
                }.call(this), !u.isAdLight && ["ad", "insights", "connoisseur"].indexOf(u.blogType) < 0 && (i += '<div class="footer-ad-labeling"></div>'), i += "</div>", !u.templateType.includes("premium") && ["ad", "insights"].indexOf(u.blogType) < 0 && !u.isAdLight && !u.retracted && a.desktopMedianet({
                    position: "media_net_0_article_".concat(x),
                    size: "800x200",
                    tagId: 0 === x ? "147984832" : "339696797",
                    bta: !0
                }), i = i + "</div></div><div" + (n("class", c(["right-rail", {
                    "adlight-rail": u.isAdLight
                }], [!1, !0]), !1, !1) + n("article-index", x, !0, !1)) + ">", !u.relativeVideo || u.isAdLight || u.retracted || "advisor" === u.templateType || (i += '<div class="video-placeholder"><div class="video-player inactive"><div class="video-title"></div></div></div>'), u.retracted || "none" === u.adExperience || (i = i + "<div" + n("class", c(["ad-rail", {
                    "ad-rail--progressive": u.progressiveAds
                }], [!1, !0]), !1, !1) + ">", u.progressiveAds && !g && (i = i + "<div" + n("class", c(["fbs-ad-wrapper fbs-spon-logo fbs-ad--article-".concat(x, "-spon-logo-wrapper blocked-ad")], [!0]), !1, !1) + "><fbs-ad" + (n("ad-id", "article-".concat(x, "-spon-logo"), !0, !1) + n("batched", !0, !0, !1)) + ' position="spon-logo"></fbs-ad></div>'), i = i + "<div" + n("class", c(["fbs-ad-wrapper fbs-ad--article-".concat(x, "-rec-wrapper")], [!0]), !1, !1) + "><fbs-ad" + (n("ad-id", "article-".concat(x, "-rec"), !0, !1) + n("batched", !0, !0, !1)) + ' position="rec"></fbs-ad></div>', f || u.progressiveAds || (i = i + "<div" + n("class", c(["fbs-ad-wrapper fbs-ad--article-".concat(x, "-recx-1-wrapper")], [!0]), !1, !1) + "><fbs-ad" + n("ad-id", "article-".concat(x, "-recx-1"), !0, !1) + ' batched="batched" position="recx"></fbs-ad></div>'), i += "</div>"), i += "</div></div>", u.templateType.includes("premium") || u.retracted || (["ad", "insights"].indexOf(u.blogType) >= 0 ? i += '<div class="fbs-ad--artbottom-wrapper fbs-ad--progressive"></div>' : (i += '<div class="mnet-box article-wrapper" tabindex="-1" role="presentation" aria-hidden="true">', a.desktopMedianet({
                    position: "media_net_1_article_".concat(x),
                    size: "1051x470",
                    tagId: 0 === x ? "691964415" : "181120583",
                    bta: !1
                }), i += "</div>")), i += "</main>"), i += "</article>"
            }.call(this, "JSON" in r ? r.JSON : "undefined" != typeof JSON ? JSON : void 0, "Math" in r ? r.Math : "undefined" != typeof Math ? Math : void 0, "Object" in r ? r.Object : "undefined" != typeof Object ? Object : void 0, "article" in r ? r.article : "undefined" != typeof article ? article : void 0, "footer" in r ? r.footer : "undefined" != typeof footer ? footer : void 0, "isAmp" in r ? r.isAmp : "undefined" != typeof isAmp ? isAmp : void 0, "isGroupBlog" in r ? r.isGroupBlog : "undefined" != typeof isGroupBlog ? isGroupBlog : void 0, "isSingleRec" in r ? r.isSingleRec : "undefined" != typeof isSingleRec ? isSingleRec : void 0, "isSubscriber" in r ? r.isSubscriber : "undefined" != typeof isSubscriber ? isSubscriber : void 0, "pageviews" in r ? r.pageviews : "undefined" != typeof pageviews ? pageviews : void 0, "renderedTopStoriesCarousel" in r ? r.renderedTopStoriesCarousel : "undefined" != typeof renderedTopStoriesCarousel ? renderedTopStoriesCarousel : void 0, "serverData" in r ? r.serverData : "undefined" != typeof serverData ? serverData : void 0, "socialMap" in r ? r.socialMap : "undefined" != typeof socialMap ? socialMap : void 0, "streamIndex" in r ? r.streamIndex : "undefined" != typeof streamIndex ? streamIndex : void 0, "topStories" in r ? r.topStories : "undefined" != typeof topStories ? topStories : void 0), i
        };
        var o = a(i(35)),
            r = a(i(40));

        function n(e, t, i, a) {
            if (!1 === t || null == t || !t && ("class" === e || "style" === e)) return "";
            if (!0 === t) return " " + (a ? e : e + '="' + e + '"');
            var o = (0, r.default)(t);
            return "object" !== o && "function" !== o || "function" != typeof t.toJSON || (t = t.toJSON()), "string" == typeof t || (t = JSON.stringify(t), i || -1 === t.indexOf('"')) ? (i && (t = l(t)), " " + e + '="' + t + '"') : " " + e + "='" + t.replace(/'/g, "&#39;") + "'"
        }

        function s(e, t) {
            var i = "";
            for (var a in e)
                if (d.call(e, a)) {
                    var o = e[a];
                    if ("class" === a) {
                        i = n(a, o = c(o), !1, t) + i;
                        continue
                    }
                    "style" === a && (o = p(o)), i += n(a, o, !1, t)
                } return i
        }

        function c(e, t) {
            return Array.isArray(e) ? function(e, t) {
                for (var i, a = "", o = "", r = Array.isArray(t), n = 0; n < e.length; n++)(i = c(e[n])) && (r && t[n] && (i = l(i)), a = a + o + i, o = " ");
                return a
            }(e, t) : e && "object" == (0, r.default)(e) ? function(e) {
                var t = "",
                    i = "";
                for (var a in e) a && e[a] && d.call(e, a) && (t = t + i + a, i = " ");
                return t
            }(e) : e || ""
        }

        function l(e) {
            var t = "" + e,
                i = u.exec(t);
            if (!i) return e;
            var a, o, r, n = "";
            for (a = i.index, o = 0; a < t.length; a++) {
                switch (t.charCodeAt(a)) {
                    case 34:
                        r = "&quot;";
                        break;
                    case 38:
                        r = "&amp;";
                        break;
                    case 60:
                        r = "&lt;";
                        break;
                    case 62:
                        r = "&gt;";
                        break;
                    default:
                        continue
                }
                o !== a && (n += t.substring(o, a)), o = a + 1, n += r
            }
            return o !== a ? n + t.substring(o, a) : n
        }
        var d = Object.prototype.hasOwnProperty,
            u = /["&<>]/;

        function p(e) {
            if (!e) return "";
            if ("object" == (0, r.default)(e)) {
                var t = "";
                for (var i in e) d.call(e, i) && (t = t + i + ":" + e[i] + ";");
                return t
            }
            return e + ""
        }
    },
    298: function(e, t, i) {
        "use strict";
        var a = i(0),
            o = i(156),
            r = i(78),
            n = a(i(64)),
            s = i(65),
            c = i(299),
            l = i(144),
            d = a(i(303)),
            u = i(304),
            p = a(i(305)),
            v = i(306),
            h = i(67),
            m = a(i(13));
        window.fbsads = window.fbsads || new o.FbsAdsService;
        var f = window.fbsads,
            g = new n.default,
            b = {},
            w = !1,
            y = !1,
            k = 0,
            x = (0, m.default)((function() {
                return g.notify()
            }), 100);
        g.subscribe((function() {
            var e = window.forbes["simple-site"].isAdLight,
                t = void 0 !== e && e,
                i = [];
            f.adSlots.forEach((function(e, t) {
                return i.push(t)
            }));
            var a = Array.from(document.querySelectorAll("#article-container-".concat(k, " fbs-ad[batched]"))).filter((function(e) {
                return t ? "top" === e.position : !!e.position
            })).map((function(e) {
                return e.adId
            }));
            w || a.filter((function(e) {
                return i.indexOf(e) >= 0
            })).length !== a.length || (w = !0, f.displayBatch(a), k ? document.removeEventListener("scroll", x) : document.removeEventListener("fbs-ad-slots", x))
        }));
        var _ = function() {
                b.top && b.rec && !b.ntv && !b.below && ((0, v.renderNTVAds)(), (0, u.renderBelowTheFoldAds)(), b.below = !0, b.ntv = !0)
            },
            S = ["masthead", "premium"],
            C = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return S.indexOf(e.split("/")[1]) >= 0
            },
            A = function() {
                Object.keys(b).forEach((function(e) {
                    b[e] = !1
                }))
            };
        h.pauseAdsObservable.subscribe((function() {
            return (0, s.runAfterMeterVerified)([h.streamObservable, g])
        })), h.streamObservable.subscribe((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.adZone,
                i = e.asyncHistoried,
                a = e.streamIndex,
                o = e.specialSlot,
                n = e.swimlane,
                s = e.tracking,
                l = void 0 === s ? {} : s;
            if ("Detected" !== l.adBlockerDetection && a > k && (0, c.destroyAds)(k), y = C(t), k = a || 0, i || k) {
                var d = o || n || "";
                (0, r.updateAdParams)(), (0, r.applyConfig)(d)
            }
            i || (k && (w = !1, document.addEventListener("scroll", x)), (0, u.setArticleBottomAdValues)(k), (0, v.setNTVAdsValues)(k, t), A())
        })), document.addEventListener("fbs-ad-render", (function(e) {
            var t = e.detail,
                i = void 0 === t ? {} : t;
            if (2 === (i.size || []).length) {
                var a = document.getElementById("".concat(i.slot.getSlotElementId())),
                    o = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return e.replace("article", "").replace(/-/g, "").replace(/[0-9]/g, "")
                    }(i.slot.getSlotElementId());
                "ntvcontentd" !== o ? a && (function(e, t, i) {
                    var a = i.size,
                        o = void 0 === a ? [] : a,
                        r = 0 === o[1],
                        n = 1 === o[0] && 1 === o[1];
                    ["top", "topx", "rec", "recx", "artbottom"].indexOf(t) >= 0 && (n ? e.parentElement.classList.add("blocked-ad") : (e.classList.contains("show-label") || e.classList.add("show-label"), y || "top" !== t || (r ? e.parentElement.classList.add("fluid") : e.parentElement.classList.remove("fluid"))))
                }(a, o, i), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return !e.parentElement.recalledId || "top" === t
                }(a, o) && function(e, t, i) {
                    if (y) "fbsheroad" !== t && "hero" !== t || (0, p.default)(i, k);
                    else switch (t) {
                        case "top":
                            (0, d.default)(k, f, i), b.top = !0, _();
                            break;
                        case "rec":
                        case "recx":
                            (0, l.handleAdRail)(e, t, i), b.rec = !0, _();
                            break;
                        case "sponlogo":
                            e.parentElement.parentElement.classList.remove("blocked-ad")
                    }
                }(a, o, i)) : window.forbes["simple-site"].ntvLineItem = i.lineItemId
            }
        })), document.addEventListener("fbs-ad-slots", x)
    },
    299: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.destroyAds = t.reverseLazyLoadEvent = void 0;
        var o = i(144),
            r = a(i(13)),
            n = 0,
            s = function() {
                var e = window.pageYOffset;
                if (n < e) n = e;
                else {
                    var t = Array.from(document.querySelectorAll('fbs-ad[destroyed="true"]'));
                    t.length ? (t.forEach((function(e) {
                        var t = -.25 * e.clientHeight;
                        e.getBoundingClientRect().bottom >= t && function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = window.forbes["simple-site"].streamIndex,
                                i = void 0 === t ? 0 : t,
                                a = (e.getAttribute("ad-id") || "").split("-")[1];
                            return i === parseInt(a || 0, 10)
                        }(e) && (e.setAttribute("destroyed", "false"), e.removeAttribute("batched"), e.removeAttribute("progressive"), e.recallAd()), e.style.minHeight && e.removeAttribute("style")
                    })), n = e) : window.removeEventListener("scroll", c)
                }
            },
            c = (0, r.default)((function() {
                return s()
            }), 300);
        t.reverseLazyLoadEvent = c;
        t.destroyAds = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = document.querySelector("#article-container-".concat(e)),
                i = t.querySelector(".main-content--body.premium"),
                a = t.querySelectorAll("fbs-ad"),
                r = "134";
            Array.from(a).forEach((function(e) {
                if (!(["ntv-rail-2", "hero", "artbottom"].indexOf(e.position) > -1)) {
                    if ("inread" === e.position) e.classList.remove("inread-active");
                    else {
                        e.setAttribute("destroyed", "true"), "top" === e.position && (e.parentElement.style.minHeight = "".concat(r, "px"));
                        var t = e.firstElementChild;
                        t && e.setAttribute("data-ga-id", t.id)
                    }
                    i && (e.style.minHeight = "".concat(e.clientHeight, "px")), e.destroyAd()
                }
            }));
            var n = t.querySelector(".ad-rail");
            n && ((0, o.recalculateAdRail)(n), n.classList.add("adrail-destroyed")), setTimeout((function() {
                window.addEventListener("scroll", c)
            }), 2e3)
        }
    },
    300: function(e, t) {
        e.exports = function(e) {
            if (Array.isArray(e)) return e
        }
    },
    301: function(e, t) {
        e.exports = function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var i = [],
                    a = !0,
                    o = !1,
                    r = void 0;
                try {
                    for (var n, s = e[Symbol.iterator](); !(a = (n = s.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    o = !0, r = e
                } finally {
                    try {
                        a || null == s.return || s.return()
                    } finally {
                        if (o) throw r
                    }
                }
                return i
            }
        }
    },
    302: function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    },
    303: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = t.isBrandedArticle = void 0;
        var o = a(i(145)),
            r = a(i(146)),
            n = document.querySelector(".top-stories"),
            s = !1;
        t.isBrandedArticle = function() {
            return ["ad", "insights", "connoisseur"].indexOf(((window.forbes["simple-site"] || {}).tracking || {}).blogType || "") >= 0
        };
        var c = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (!e) return 134;
                var o = !a && n && n.classList.contains("display") ? 156 : 0;
                if (i && e.clientHeight >= 134) return e.clientHeight + 30 + o;
                var r = 40 + o;
                return t > 90 ? 250 + r : 94 + r
            },
            l = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return ((i || {}).size || []).length && !e && !t
            },
            d = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e ? parseInt((e.getAttribute("ad-id") || "").split("-")[1] || 0, 10) : 0
            },
            u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e && e.clientHeight
            },
            p = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = 50,
                    a = (t || {}).size || [],
                    p = (0, o.default)(a, 2),
                    v = p[0],
                    h = p[1],
                    m = l(v, h, t),
                    f = d(e),
                    g = 0,
                    b = setInterval((function() {
                        g++;
                        var t = e.querySelector("iframe");
                        g > i ? clearInterval(b) : u(t) && (e.parentElement.style.minHeight = "".concat(c(t, h, m, f), "px"), n && !f && (0, r.default)(n, h, s), clearInterval(b)), s = !0
                    }), 100)
            },
            v = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    a = document.querySelector("#article-container-".concat(e, ' fbs-ad[position="top"]'));
                if (a && (a.parentElement.classList.add("top-ad-animation"), p(a, i), !a.getAttribute("data-cycle-complete"))) {
                    var o = window.forbes["simple-site"].isAdLight,
                        r = void 0 !== o && o;
                    a.parentElement.classList.add("sticky-top-ad"), a.setAttribute("data-cycle-complete", !0), setTimeout((function() {
                        a.parentElement.classList.remove("sticky-top-ad"), r && t.displayBatch(["article-".concat(e, "-rec")])
                    }), 5e3)
                }
            };
        t.default = v
    },
    304: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.renderBelowTheFoldAds = t.setArticleBottomAdValues = void 0;
        var a, o = i(4),
            r = i(63);
        t.setArticleBottomAdValues = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            a = e
        };
        t.renderBelowTheFoldAds = function() {
            var e = document.querySelector("#article-stream-".concat(a));
            Array.from(e.querySelectorAll(".medianet, .fbs-ad--artbottom-wrapper")).forEach((function(t) {
                (t.children || []).length || (t.classList.contains("medianet") ? ((0, o.insertMedianet)(t.getAttribute("data-position"), t.getAttribute("data-size"), t.getAttribute("data-tagId")), t.parentElement.classList.add("adblock-".concat((0, r.getAbParam)() ? (0, r.getAbParam)() : "off"))) : (0, o.insertAd)("artbottom", e, "artbottom-".concat(a)))
            }))
        }
    },
    305: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                i = e.size,
                a = void 0 === i ? [] : i,
                o = document.querySelector("#article-container-".concat(t, " .fbs-ad--top-wrapper"));
            a[0] && 7 === a[0] && o.classList.add("fbs-ad--top-wrapper--takeover")
        };
        t.default = a
    },
    306: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.renderNTVAds = t.setNTVAdsValues = t.isAdInsightsArticle = void 0;
        var o = a(i(80)),
            r = {},
            n = function() {
                return ["ad", "insights"].indexOf(((window.forbes["simple-site"] || {}).tracking || {}).blogType || "") >= 0
            };
        t.isAdInsightsArticle = n;
        t.setNTVAdsValues = function(e, t) {
            r.streamIndex = e, r.adZone = t
        };
        t.renderNTVAds = function() {
            var e = document.querySelector("#article-stream-".concat(r.streamIndex, " .vestpocket"));
            if (e && !e.children.length) {
                n() && e.remove();
                var t = (0, o.default)("p", {
                    "aria-hidden": "true",
                    "data-nosnippet": "true"
                });
                t.innerText = "PROMOTED", e.appendChild(t);
                var i = (0, o.default)("div", {
                    "aria-hidden": "true",
                    tabindex: "-1",
                    class: "ntv-wrapper"
                });
                e.appendChild(i);
                for (var a = r.adZone.split("/")[1].indexOf("advisor") >= 0, s = function(t) {
                        var a = (0, o.default)("div", {
                                class: "ntv-ad"
                            }),
                            n = (0, o.default)("fbs-ad", {
                                position: "ntv-rail-2",
                                "ad-id": "ntv-rail-".concat(t, "-").concat(r.streamIndex)
                            });
                        a.appendChild(n), i.appendChild(a);
                        n.addEventListener("render", (function t(i) {
                            var a = !i.detail.size || 1 === i.detail.size[0] && 1 === i.detail.size[1],
                                o = i.target;
                            o && a ? o.parentElement.style.display = "none" : e.hasAttribute("displayNtv") || function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                    i = document.querySelector("#article-stream-".concat(e, " .ntv-wrapper"));
                                i.style.display = "flex", t.style.display = "inline-block", t.querySelector("p").style.display = "block", t.setAttribute("displayNtv", !0)
                            }(r.streamIndex, e), n.removeEventListener("render", t)
                        }))
                    }, c = 0; c < (a ? 1 : 3); c++) s(c)
            }
        }
    },
    307: function(e, t, i) {
        "use strict";
        i(67).streamObservable.subscribe((function(e) {
            var t = document.querySelector("#article-stream-".concat(e.streamIndex));
            if (t) {
                var i = t.querySelector(".body-container").querySelectorAll("fbs-video"),
                    a = ["iabpre1", "iabpre2", "iabpre3"],
                    o = a.indexOf(e.specialSlot) >= 0 || a.indexOf(e.swimLane) >= 0;
                Array.from(i).forEach((function(e) {
                    e.hasAttribute("autoplay") || o && e.setAttribute("key-value-string", "pos=vid-iab")
                }))
            }
        }))
    },
    308: function(e, t, i) {
        "use strict";
        var a = i(0),
            o = a(i(41)),
            r = a(i(42)),
            n = i(67),
            s = a(i(13)),
            c = [],
            l = {},
            d = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    (0, o.default)(this, e), this.article = t, this.articleHeight = 0, this.element = i, this.status = "inactive", this.fixedBottom = 0, this.fixedTop = 0, this.type = a
                }
                return (0, r.default)(e, [{
                    key: "setFixedPositions",
                    value: function() {
                        var e = this.article.querySelector(".premium-article-wrapper"),
                            t = this.article.querySelector(".article-body-container");
                        e && t && (this.articleHeight = t.offsetHeight, this.fixedBottom = this.article.offsetTop + e.offsetTop + this.articleHeight, this.fixedTop = this.article.offsetTop + e.offsetTop + t.offsetTop)
                    }
                }, {
                    key: "toggleFixedScroll",
                    value: function() {
                        var e = this.article.querySelector(".article-body-container");
                        e && this.articleHeight !== e.offsetHeight && this.setFixedPositions();
                        var t = window.innerHeight + window.scrollY >= this.fixedTop,
                            i = window.innerHeight + window.scrollY >= this.fixedBottom;
                        this.element && t && !i ? this.element.classList.add("in-view") : this.element.classList.remove("in-view")
                    }
                }, {
                    key: "setCta",
                    value: function() {
                        var e = this,
                            t = this.element.querySelector(".pinned-embed-button");
                        if (t) {
                            t.addEventListener("click", (function() {
                                "inactive" === e.status ? (e.element.classList.add("active"), e.status = "active") : (e.element.classList.remove("active"), e.status = "inactive")
                            }));
                            var i = t.querySelector("svg"),
                                a = t.style.color;
                            i && (i.style.fill = a || "#fff")
                        }
                    }
                }, {
                    key: "setPinnedEmbedFunctionality",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        switch (this.type) {
                            case "slido":
                                e && (this.setFixedPositions(), this.setCta()), window.addEventListener("scroll", u)
                        }
                    }
                }]), e
            }(),
            u = (0, s.default)((function() {
                return l.toggleFixedScroll()
            }), 100);
        n.streamObservable.subscribe((function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            if (window.removeEventListener("scroll", u), c[e.streamIndex])(l = c[e.streamIndex]).setPinnedEmbedFunctionality(!1);
            else {
                var t = document.querySelector("#article-container-".concat(e.streamIndex || 0)),
                    i = t.querySelector(".pinned-embed");
                i ? ((l = new d(t, i, i.getAttribute("data-type"))).setPinnedEmbedFunctionality(!0), c.push(l)) : c.push(new d)
            }
        }))
    },
    309: function(e, t, i) {
        "use strict";
        var a, o, r, n, s, c, l = i(0)(i(13)),
            d = i(63),
            u = i(67),
            p = i(147),
            v = null,
            h = !1,
            m = !1,
            f = !1,
            g = !1,
            b = !1,
            w = !1,
            y = [];

        function k(e) {
            var t = e ? document.querySelector(".vjs-ad-control-bar") : r.querySelector(".vjs-control-bar");
            if (t) {
                var i = Array.prototype.slice.call(t.querySelectorAll("button.vjs-button")),
                    a = t.querySelector(".vjs-volume-bar"),
                    o = t.querySelector(".vjs-progress-holder");
                i.concat([t, a, o]).forEach((function(e) {
                    "true" !== e.getAttribute("aria-hidden") && (e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", "-1"))
                }))
            }
        }

        function x(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                i = ((window.forbes || {})["simple-site"] || {}).streamIndex,
                a = document.getElementById("article-stream-".concat(i)),
                o = t.split("&").filter((function(e) {
                    return -1 === e.indexOf("displaysection") && -1 === e.indexOf("displaychannel")
                })).join("&"),
                r = 1230,
                n = "",
                s = o ? "&pos=" : "pos=";
            (v = !!a.querySelector(".right-rail .video-placeholder")) ? (s += "vid-lr", n = window.innerWidth >= r ? "&vw=400plus" : "&vw=less400") : s += "vid-iab";
            var c = "".concat(o).concat(s).concat(n);
            e.setAttribute("key-value-string", c)
        }

        function _() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = document.createElement("fbs-video");
            return e && (t.adUnitPath = e), "on" !== (0, d.getAbParam)() && (t.autoplay = ""), t.role = "presentation", t.controls = "true", t.muted = "true", t.keyValueString = "", t
        }

        function S() {
            r.hasAttribute("stickyVideoCycleComplete") || (r.setAttribute("stickyVideoCycleComplete", !0), n.classList.remove("sticky-video"), s.classList.remove("sticky-video-placeholder"))
        }

        function C(e, t, i) {
            var a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
                r = y[e];
            if (!Array.isArray(t) || t.length <= r) S();
            else {
                var s = t[r],
                    c = document.getElementById("article-stream-".concat(e)),
                    l = c.querySelector(".right-rail .video-player"),
                    u = l.querySelector(".video-title"),
                    v = l.querySelector("fbs-video[autoplay]");
                v || (v = _(o)), s && r <= 2 ? (a && x(v, s.keyValues), v.setAttribute("video-id", s.videoId), v.setAttribute("player-id", s.playerId), v.setAttribute("autoplay", s.autoPlay && i && "on" !== (0, d.getAbParam)() ? "true" : "false"), u.innerText = s.title, l.classList.contains("inactive") && (l.appendChild(v), l.classList.remove("inactive"), l === n && (I(e), (0, p.handleInread)(e))), y[e] = r + 1) : S()
            }
        }

        function A(e, t, i, a, o) {
            window.fbsCampaignService.getCampaign((function(r) {
                return function(e, t, i, a, o) {
                    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        n = r.video_id;
                    if (!g && n) {
                        var s = {
                            autoPlay: !0,
                            playerId: "S1EBSbDn",
                            title: "",
                            videoId: n,
                            keyValues: ""
                        };
                        e.unshift(s), g = !0
                    }
                    C(t, e, i, a, o)
                }(e, t, i, a, o, r)
            }))
        }

        function L(e) {
            document.querySelector(".video-placeholder") && (e || (e = "1%"))
        }

        function z() {
            if (r) {
                var e = document.querySelector(".body-container"),
                    t = parseInt(window.getComputedStyle(e).paddingRight, 10),
                    i = parseInt(window.getComputedStyle(e).paddingLeft, 10),
                    a = e.getBoundingClientRect().left;
                if (i + a > 425 + t) L("".concat(i + a - 400 - t, "px"));
                else L("1%")
            }
        }

        function T() {
            if (s && r && !h && !r.hasAttribute("stickyVideoCycleComplete") && r.playing)
                if (f) {
                    var e = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    k(), k(!0),
                        function() {
                            var e = ((window.forbes || {})["simple-site"] || {}).streamIndex,
                                t = window.pageYOffset - document.documentElement.clientTop,
                                i = v ? s.getBoundingClientRect() : n.getBoundingClientRect(),
                                r = i.height,
                                c = i.top,
                                l = document.querySelector("#article-stream-".concat(e, " .article-footer")),
                                d = l ? l.getBoundingClientRect().top : r,
                                u = v ? .25 : .5,
                                p = document.querySelector(".header").clientHeight || 48;
                            if (!m) {
                                var h = r * u;
                                a = c + t + h - p, o = d + t - (r + h)
                            }
                        }(), e < a || e > o ? (n.classList.remove("sticky-video"), s.classList.remove("sticky-video-placeholder")) : c || "on" === (0, d.getAbParam)() || (n.classList.add("sticky-video"), s.classList.add("sticky-video-placeholder"), m || (m = !0, z()))
                } else f = r.playing
        }

        function M() {
            h = !0, r.pause(), n.classList.remove("sticky-video"), s.classList.remove("sticky-video-placeholder")
        }

        function B() {
            var e = (window.forbes || {})["simple-site"] || {},
                t = e.streamIndex,
                i = e.isAdLight;
            C(t, e.relativeVideos, !i, !D(e.tracking))
        }

        function E() {
            r.classList.add("video-init")
        }

        function V() {
            r.closeButton.addEventListener("click", M)
        }

        function D(e) {
            var t = e.blogType;
            return "ad" === t || "connoisseur" === t || "insights" === t
        }

        function I(e) {
            r && (n.classList.remove("sticky-video"), s.classList.remove("sticky-video-placeholder"), r.setAttribute("stickyVideoCycleComplete", !0), r.removeEventListener("init", E), r.removeEventListener("play", V), r.closeButton.removeEventListener("click", M), r.removeEventListener("ended", B), r = null, s = null, m = !1, a = null, o = null, h = !1, v = null);
            var t = document.getElementById("article-stream-".concat(e));
            r = t.querySelector("fbs-video[autoplay]"),
                function(e) {
                    c = !!e.classList.contains("premium")
                }(t), (v = !!t.querySelector(".right-rail .video-placeholder")) ? (n = t.querySelector(".video-player"), s = t.querySelector(".video-placeholder")) : (n = r, s = t.querySelector(".article-video-placeholder")), r && (r.addEventListener("init", E), r.useCloseButton = !0, r.addEventListener("play", V), r.addEventListener("ended", B))
        }
        document.addEventListener("geo-fetch-finished", (function e() {
            window.fbsCampaignService && window.__region && (window.fbsCampaignService.availableVideoIdsUrl += window.__region, window.fbsCampaignService.randomVideoIdUrl += window.__region, window.fbsCampaignService.videoPlaybackVideoIdUrl += window.__region, w = !0), document.removeEventListener("geo-fetch-finished", e);
            var t = new CustomEvent("fbs-campaign-service-ready");
            document.dispatchEvent(t), b = !0
        })), document.addEventListener("DOMContentLoaded", (function() {
            I(0), window.addEventListener("resize", z), document.addEventListener("scroll", (0, l.default)(T, 100))
        })), u.streamObservable.subscribe((function(e) {
            y.push(0);
            var t = document.getElementById("article-stream-".concat(e.streamIndex)),
                i = t.querySelector("fbs-video[autoplay]"),
                a = t.querySelector(".video-placeholder");
            if (i || a)
                if (a) {
                    var o = window.fbsads._config.ad_unit_path;
                    if (e.swimLane || e.specialSlot || g || !window.fbsCampaignService || e.isE2E) C(e.streamIndex, e.relativeVideos, !e.isAdLight, !D(e.tracking), o);
                    else if (b && w && window.__region) A(e.relativeVideos, e.streamIndex, !e.isAdLight, !D(e.tracking), o);
                    else {
                        document.addEventListener("fbs-campaign-service-ready", (function t() {
                            document.removeEventListener("fbs-campaign-service-ready", t), w && window.__region ? A(e.relativeVideos, e.streamIndex, !e.isAdLight, !D(e.tracking), o) : C(e.streamIndex, e.relativeVideos, !e.isAdLight, !D(e.tracking), o)
                        }))
                    }
                } else(a = document.createElement("div")).classList.add("article-video-placeholder"), i.parentElement.insertBefore(a, i), i.classList.remove("sticky-video"), D(e.tracking) || x(i, i.getAttribute("key-value-string") || ""), (0, p.handleInread)(e.streamIndex);
            else(0, p.handleInread)(e.streamIndex)
        })), u.streamIndexObservable.subscribe(I)
    },
    384: function(e, t, i) {
        "use strict";
        i.r(t);
        var a, o = (a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                },
                function(e, t) {
                    function i() {
                        this.constructor = e
                    }
                    a(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                }),
            r = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o(t, e), Object.defineProperty(t, "observedAttributes", {
                    get: function() {
                        return ["current"]
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "current", {
                    get: function() {
                        return +this.getAttribute("current")
                    },
                    set: function(e) {
                        this.current === e && (e = -1), this.setAttribute("current", e + "")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.connectedCallback = function() {
                    var e = this;
                    this.addEventListener("click", (function(t) {
                        for (var i = t.target; e !== i.parentElement;) i = i.parentElement;
                        for (var a = -1, o = 0; o < e.children.length; o++)
                            if (i === e.children.item(o)) {
                                a = o;
                                break
                            } - 1 !== a && (e.current = a)
                    }))
                }, t.prototype.expand = function(e) {
                    void 0 === e && (e = this.current);
                    for (var t = 0; t < this.children.length; t++) {
                        this.children[t].setAttribute("aria-expanded", t === e ? "true" : "false")
                    }
                }, t.prototype.attributeChangedCallback = function(e, t, i) {
                    this.expand(+i)
                }, t
            }(HTMLElement);
        customElements.define("fbs-accordion", r)
    },
    67: function(e, t, i) {
        "use strict";
        var a = i(0);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pauseAdsObservable = t.streamObservable = t.streamIndexObservable = void 0;
        var o = a(i(35)),
            r = i(30),
            n = i(4),
            s = i(65),
            c = a(i(26)),
            l = a(i(296)),
            d = i(79),
            u = a(i(64)),
            p = a(i(106)),
            v = a(i(13)),
            h = i(62),
            m = i(143),
            f = a(i(105)),
            g = a(i(140)),
            b = i(66),
            w = i(297),
            y = i(3);

        function k(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), i.push.apply(i, a)
            }
            return i
        }

        function x(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(i), !0).forEach((function(t) {
                    (0, o.default)(e, t, i[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : k(Object(i)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                }))
            }
            return e
        }
        var _ = {},
            S = [],
            C = "ad" === ((window.forbes["simple-site"] || {}).tracking || {}).blogType,
            A = new u.default;
        t.streamIndexObservable = A;
        var L = new u.default;
        t.streamObservable = L;
        var z = new u.default;
        t.pauseAdsObservable = z;
        var T, M, B = 0,
            E = !1,
            V = !1;

        function D(e, t) {
            window.history.scrollRestoration = "manual";
            var i = e.article,
                a = (i = void 0 === i ? {} : i).publicationId,
                o = void 0 === a ? "" : a,
                r = i.title,
                c = void 0 === r ? "" : r,
                u = i.uri,
                v = void 0 === u ? "" : u,
                g = e.serverData,
                b = (g = void 0 === g ? {} : g).tracking,
                w = (b = void 0 === b ? {} : b).login,
                y = void 0 === w ? "" : w,
                k = b.templateType,
                _ = void 0 === k ? "" : k,
                S = e.meta,
                T = (S = void 0 === S ? {} : S).oGData,
                M = (T = void 0 === T ? {} : T).title,
                E = void 0 === M ? c : M,
                D = window.forbes["simple-site"].isPreview,
                I = void 0 !== D && D;
            if (V = !1, t) {
                if (e.serverData.historied) window.history.forward();
                else {
                    var H = "".concat(v.split("forbes.com")[1], "?").concat((0, d.getUtmParams)());
                    window.history.pushState(x(x({}, window.history.state), {}, {
                            ss: void 0
                        }), E, H), document.title = E,
                        function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            if ((e.serverData || {}).tracking = x(x({}, (e.serverData || {}).tracking), {}, {
                                    startFromBrandvoice: C,
                                    index: t
                                }), 1 === t) {
                                var i = document.querySelector("#ntv-contentd a[data-href]"),
                                    a = "";
                                i && e.article.uri.split("forbes.com")[1].indexOf(i.getAttribute("data-href").split("forbes.com")[1]) > -1 && (a = window.forbes["simple-site"]), (e.serverData || {}).tracking = x(x({}, (e.serverData || {}).tracking), {}, {
                                    ntvContentLineItemId: a ? "".concat(a) : ""
                                })
                            }
                        }(e, B + 1), V = !0
                }
                B++
            } else window.history.back(), B--;
            if ((0, d.updateMetaForSimpleReach)((e.article.authorGroup.primaryAuthor || {}).name, e.article.uri), (0, m.updatePrintPage)(B), window.forbes["simple-site"] = x(x({}, e.serverData), {}, {
                    topStories: window.forbes["simple-site"].topStories
                }), z.notify(), e.serverData.historied || (0, s.handleAutoplayVideos)({
                    element: document.querySelector("#article-container-".concat(B)),
                    videoSelector: "fbs-video[autoplay]"
                }), e.serverData.asyncHistoried = e.serverData.historied, L.notify(e.serverData), I || (0, h.virtualTrack)(V), !e.serverData.historied) {
                var G = Array.from(document.querySelectorAll("#article-container-".concat(B, " fbs-ad[progressive]")));
                (0, n.registerProgressiveAds)(G), (0, m.addPrintEventListener)(B), (0, p.default)(), "true" === y && (0, l.default)(o), "topline" === _ && (0, f.default)(B), e.serverData.historied = !0
            }
            A.notify(B)
        }

        function I(e) {
            (window.fbsads || {})._config && (window.fbsads._config.ad_unit_path = (0, y.updateGamzoneUserState)("/".concat(e.serverData.adInventory, "/fdc.forbes/").concat(e.serverData.adZone)), (0, n.addNewConfig)(window.fbsads._config.ad_unit_path));
            var t = document.getElementsByClassName("load-stream-marker")[0],
                i = document.createElement("div");
            i.innerHTML = (0, w.template)(e);
            var a = i.firstChild;
            e.serverData.shouldGetPageViews && (0, d.fetchPageviews)(e.article.naturalId).then((function(e) {
                return (0, d.insertPageViews)(e, a)
            })), e.serverData.shouldGetMoreFromBlock && (0, b.initGrid)(a, (0, b.getGridState)(!1)), S.push(x(x({}, e), {}, {
                element: a,
                imagesInBody: a.querySelectorAll(".animatable")
            })), t.parentElement.insertBefore(a, t), E = !1, (0, d.updateMiniPublishDates)(e.article.templateType, a)
        }
        document.addEventListener("scroll", (function() {
            S[B].serverData.animatedBody && (0, g.default)(S[B].imagesInBody, !1)
        })), document.addEventListener("scroll", (0, v.default)((function() {
            var e, t, i = S[B].element,
                a = i.offsetTop,
                o = i.offsetHeight,
                n = S[B].element.querySelector(".article-body-container");
            if (n && (e = n.getBoundingClientRect().height), T > window.pageYOffset) B > 0 && window.pageYOffset < a - .75 * window.innerHeight && D(S[B - 1], !1);
            else {
                var s = ((S[B + 1] || {}).element || {}).offsetTop,
                    l = window.pageYOffset > a + .5 * o || e <= 1200,
                    d = s && s < window.pageYOffset + .7 * window.innerHeight;
                if (l && !S[B + 1] && !E && (B || M || (M = ((window.forbes["simple-site"] || {}).topStories || []).filter((function(e) {
                        return e.uri
                    }))), M[B])) {
                    var u = ((0, r.getCookie)(document.cookie, "malcolm") || "").split("=")[1] || "A",
                        p = "".concat(M[B].uri.split("forbes.com")[1], "?malcolm=").concat(u, "&api=true&streamIndex=").concat(B + 1);
                    E = !0, t = p, fetch(t, {
                        headers: {
                            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36"
                        }
                    }).then(c.default).then((function(e) {
                        return e.json()
                    })).then(I).catch((function(e) {
                        console.error("Failed to load next article!", e), (e.response || {}).status && -1 === [502, 503, 504].indexOf(e.response.status) && (_[t] = (_[t] || 0) + 1, _[t] >= 2 && M.shift()), E = !1
                    }))
                }
                d && S[B + 1] && D(S[B + 1], !0)
            }
            T = window.pageYOffset
        }), 300)), document.addEventListener("DOMContentLoaded", (function e() {
            var t = window.forbes,
                i = t["simple-site"],
                a = void 0 === i ? {} : i,
                o = t["simple-site"],
                r = (o = void 0 === o ? {} : o).tracking,
                c = (r = void 0 === r ? {} : r).login,
                u = void 0 === c ? "" : c,
                p = r.templateType,
                v = void 0 === p ? "" : p,
                h = r.naturalID,
                g = void 0 === h ? "" : h,
                w = r.slot,
                y = void 0 === w ? "" : w;
            window.forbes["simple-site"].streamIndex = 0;
            var k, x = document.getElementById("article-container-".concat(B));
            S.push({
                article: {
                    naturalId: g,
                    specialSlot: y,
                    title: document.title,
                    uri: "https://www.forbes.com".concat(window.location.pathname),
                    authorGroup: {
                        primaryAuthor: {
                            name: (k = document.querySelector('meta[property="article:author"]'), k ? k.getAttribute("content") : "")
                        }
                    }
                },
                element: x,
                historied: !0,
                serverData: a
            }), z.notify(), (0, s.handleAutoplayVideos)({
                element: x,
                videoSelector: "fbs-video[autoplay]"
            }), a.shouldGetPageViews && (0, d.fetchPageviews)(g).then((function(e) {
                return (0, d.insertPageViews)(e, x)
            })), a.shouldGetMoreFromBlock && (0, b.initGrid)(x, (0, b.getGridState)(!1));
            var _ = Array.from(document.querySelectorAll("#article-container-".concat(B, " fbs-ad[progressive]")));
            (0, n.registerProgressiveAds)(_), "true" === u && (0, l.default)(a.publicationId || ""), "topline" === v && (0, f.default)(B), (0, m.addPrintEventListener)(B), L.notify(a), a.historied = !0, document.removeEventListener("DOMContentLoaded", e), S[0].imagesInBody = S[0].element.querySelectorAll(".animatable"), (0, d.updateMiniPublishDates)(v, document)
        })), window.addEventListener("popstate", (function() {
            var e = S[B],
                t = e.article,
                i = (t = void 0 === t ? {} : t).title,
                a = void 0 === i ? "" : i,
                o = e.meta,
                r = (o = void 0 === o ? {} : o).oGData,
                n = (r = void 0 === r ? {} : r).title,
                s = void 0 === n ? a : n;
            document.title = s
        }))
    }
});
//# sourceMappingURL=desktopArticle-7dac8e7ecb183cc0c562.js.map