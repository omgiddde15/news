/*! @permutive/javascript-sdk v20.37.6 (web) (built 2025-05-01T10:01:25.408Z) */
( () => {
    "use strict";
    var e = {
        654: (e, t, n) => {
            function r(e) {
                return e instanceof Error ? e : new Error("string" == typeof e ? e : JSON.stringify(e))
            }
            n.d(t, {
                w: () => r
            })
        }
        ,
        945: (e, t, n) => {
            n.d(t, {
                N: () => o,
                Qt: () => c,
                Yt: () => p,
                a1: () => a,
                ap: () => i,
                gz: () => d
            });
            var r = n(169)
              , s = n(614);
            function i(e, t) {
                return function(n) {
                    return function(r) {
                        return e.ap(e.map(r, (function(e) {
                            return function(n) {
                                return t.ap(e, n)
                            }
                        }
                        )), n)
                    }
                }
            }
            function o(e) {
                return function(t) {
                    return function(n) {
                        return e.ap(e.map(n, (function(e) {
                            return function() {
                                return e
                            }
                        }
                        )), t)
                    }
                }
            }
            function a(e) {
                return function(t) {
                    return function(n) {
                        return e.ap(e.map(n, (function() {
                            return function(e) {
                                return e
                            }
                        }
                        )), t)
                    }
                }
            }
            function c(e) {
                return function(t, n) {
                    return function(r) {
                        return e.ap(e.map(r, (function(e) {
                            return function(n) {
                                var r;
                                return Object.assign({}, e, ((r = {})[t] = n,
                                r))
                            }
                        }
                        )), n)
                    }
                }
            }
            function u(e, t, n) {
                return function(r) {
                    for (var s = Array(n.length + 1), i = 0; i < n.length; i++)
                        s[i] = n[i];
                    return s[n.length] = r,
                    0 === t ? e.apply(null, s) : u(e, t - 1, s)
                }
            }
            var l = {
                1: function(e) {
                    return [e]
                },
                2: function(e) {
                    return function(t) {
                        return [e, t]
                    }
                },
                3: function(e) {
                    return function(t) {
                        return function(n) {
                            return [e, t, n]
                        }
                    }
                },
                4: function(e) {
                    return function(t) {
                        return function(n) {
                            return function(r) {
                                return [e, t, n, r]
                            }
                        }
                    }
                },
                5: function(e) {
                    return function(t) {
                        return function(n) {
                            return function(r) {
                                return function(s) {
                                    return [e, t, n, r, s]
                                }
                            }
                        }
                    }
                }
            };
            function f(e) {
                return s.e$.call(l, e) || (l[e] = u(r.bc, e - 1, [])),
                l[e]
            }
            function d(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    for (var r = t.length, s = f(r), i = e.map(t[0], s), o = 1; o < r; o++)
                        i = e.ap(i, t[o]);
                    return i
                }
            }
            function p(e) {
                return function(t) {
                    for (var n = Object.keys(t), r = n.length, s = function(e) {
                        var t = e.length;
                        switch (t) {
                        case 1:
                            return function(t) {
                                var n;
                                return (n = {})[e[0]] = t,
                                n
                            }
                            ;
                        case 2:
                            return function(t) {
                                return function(n) {
                                    var r;
                                    return (r = {})[e[0]] = t,
                                    r[e[1]] = n,
                                    r
                                }
                            }
                            ;
                        case 3:
                            return function(t) {
                                return function(n) {
                                    return function(r) {
                                        var s;
                                        return (s = {})[e[0]] = t,
                                        s[e[1]] = n,
                                        s[e[2]] = r,
                                        s
                                    }
                                }
                            }
                            ;
                        case 4:
                            return function(t) {
                                return function(n) {
                                    return function(r) {
                                        return function(s) {
                                            var i;
                                            return (i = {})[e[0]] = t,
                                            i[e[1]] = n,
                                            i[e[2]] = r,
                                            i[e[3]] = s,
                                            i
                                        }
                                    }
                                }
                            }
                            ;
                        case 5:
                            return function(t) {
                                return function(n) {
                                    return function(r) {
                                        return function(s) {
                                            return function(i) {
                                                var o;
                                                return (o = {})[e[0]] = t,
                                                o[e[1]] = n,
                                                o[e[2]] = r,
                                                o[e[3]] = s,
                                                o[e[4]] = i,
                                                o
                                            }
                                        }
                                    }
                                }
                            }
                            ;
                        default:
                            return u((function() {
                                for (var n = [], r = 0; r < arguments.length; r++)
                                    n[r] = arguments[r];
                                for (var s = {}, i = 0; i < t; i++)
                                    s[e[i]] = n[i];
                                return s
                            }
                            ), t - 1, [])
                        }
                    }(n), i = e.map(t[n[0]], s), o = 1; o < r; o++)
                        i = e.ap(i, t[n[o]]);
                    return i
                }
            }
        }
        ,
        340: (e, t, n) => {
            n.d(t, {
                Ce: () => u,
                DY: () => S,
                Eh: () => M,
                GY: () => k,
                Gb: () => g,
                KB: () => f,
                Lx: () => D,
                Od: () => c,
                Qp: () => v,
                Su: () => E,
                UI: () => q,
                YM: () => p,
                f2: () => w,
                fw: () => T,
                hX: () => O,
                ke: () => h,
                md: () => b,
                oA: () => C,
                pR: () => R,
                tS: () => U,
                yL: () => I,
                yW: () => F,
                zT: () => m
            });
            var r = n(169)
              , s = (n(289),
            n(614))
              , i = n(606)
              , o = n(812)
              , a = (n(49),
            n(226),
            function(e) {
                return 0 === e.length
            }
            )
              , c = i.Od
              , u = i.Ce
              , l = (i.ws,
            i.R3)
              , f = (i.Im,
            function(e, t) {
                return e <= 0 ? [] : i.KB(t)(e)
            }
            );
            var d = i.dC
              , p = (o.P5,
            o.YM)
              , g = (o.Z$,
            function(e) {
                return c(e) ? s.G(i.Gb(e)) : s.YP
            }
            )
              , h = function(e) {
                return function(t) {
                    return d(e, t) ? y(t) : t.slice(0, e)
                }
            };
            var _ = function(e, t) {
                for (var n = e.length, r = 0; r < n && t(e[r]); r++)
                    ;
                return r
            };
            function m(e) {
                return function(t) {
                    var n = G(_(t, e))(t);
                    return {
                        init: n[0],
                        rest: n[1]
                    }
                }
            }
            var b = function(e) {
                return function(t) {
                    return e <= 0 || a(t) ? y(t) : e >= t.length ? [] : t.slice(e, t.length)
                }
            };
            function v(e) {
                return function(t) {
                    return t.slice(_(t, e))
                }
            }
            o.cx;
            var w = o.f2;
            o.JO,
            o.qr;
            var y = function(e) {
                return e.slice()
            }
              , k = function(e) {
                return a(e) ? [] : e.slice().reverse()
            }
              , S = function(e) {
                return function(t) {
                    return t.length <= 1 ? y(t) : t.slice().sort(e.compare)
                }
            }
              , I = function(e, t, n) {
                for (var r = [], s = Math.min(e.length, t.length), i = 0; i < s; i++)
                    r[i] = n(e[i], t[i]);
                return r
            };
            o.t9;
            var G = function(e) {
                return function(t) {
                    return e >= 1 && c(t) ? i.lx(e)(t) : a(t) ? [y(t), []] : [[], y(t)]
                }
            };
            o.kp,
            o.Eq;
            var z = i.of
              , q = function(e) {
                return function(t) {
                    return t.map((function(t) {
                        return e(t)
                    }
                    ))
                }
            }
              , U = function(e) {
                return function(t) {
                    return (0,
                    r.zG)(t, function(e) {
                        return function(t) {
                            for (var n = [], r = 0; r < t.length; r++)
                                n.push.apply(n, e(r, t[r]));
                            return n
                        }
                    }((function(t, n) {
                        return e(n)
                    }
                    )))
                }
            }
              , E = function(e) {
                return function(t) {
                    return t.map((function(t, n) {
                        return e(n, t)
                    }
                    ))
                }
            }
              , x = function(e) {
                return function(t) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var i = e(r, t[r]);
                        s.pC(i) && n.push(i.value)
                    }
                    return n
                }
            }
              , P = function(e) {
                return x((function(t, n) {
                    return e(n)
                }
                ))
            }
              , C = P(r.yR)
              , O = function(e) {
                return function(t) {
                    return t.filter(e)
                }
            }
              , D = o.Lx
              , A = (o.xP,
            o.u4,
            o.OE)
              , T = (o.nq,
            o.iw,
            function(e) {
                var t = j(e);
                return function(e) {
                    return t((function(t, n) {
                        return e(n)
                    }
                    ))
                }
            }
            )
              , j = function(e) {
                return function(t) {
                    return A(e.of([]), (function(n, s, i) {
                        return e.ap(e.map(s, (function(e) {
                            return function(t) {
                                return (0,
                                r.zG)(e, l(t))
                            }
                        }
                        )), t(n, i))
                    }
                    ))
                }
            }
              , M = (o.ZN,
            o.Eh)
              , R = o.pR
              , F = (o.pJ,
            o.oR,
            i.oo,
            o.yW);
            o.j0,
            s.F4,
            i.w6,
            i.QI,
            i.Ss
        }
        ,
        335: (e, t, n) => {
            function r(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, (function(n) {
                            return e.map(t(n), (function() {
                                return n
                            }
                            ))
                        }
                        ))
                    }
                }
            }
            function s(e) {
                return function(t, n) {
                    return function(r) {
                        return e.chain(r, (function(r) {
                            return e.map(n(r), (function(e) {
                                var n;
                                return Object.assign({}, r, ((n = {})[t] = e,
                                n))
                            }
                            ))
                        }
                        ))
                    }
                }
            }
            n.d(t, {
                a: () => s,
                m: () => r
            })
        }
        ,
        144: (e, t, n) => {
            n.d(t, {
                g1: () => w,
                G5: () => v,
                dO: () => _,
                Pd: () => I,
                ak: () => N,
                YO: () => Y,
                tS: () => k,
                g_: () => O,
                ij: () => j,
                Yo: () => U,
                DT: () => q,
                Eh: () => g,
                fS: () => D,
                nM: () => E,
                t$: () => c,
                UI: () => h,
                Vn: () => G,
                EQ: () => C,
                aD: () => P,
                of: () => m,
                vx: () => T,
                F2: () => u,
                LF: () => A,
                KC: () => L,
                i$: () => F,
                Y3: () => M,
                it: () => R
            });
            var r = n(335)
              , s = n(906)
              , i = n(169)
              , o = n(289)
              , a = n(614)
              , c = a.t$
              , u = a.F2
              , l = function(e, t) {
                return (0,
                i.zG)(e, h(t))
            }
              , f = function(e, t) {
                return (0,
                i.zG)(e, b(t))
            }
              , d = function(e, t) {
                return (0,
                i.zG)(e, k(t))
            }
              , p = "Either"
              , g = function(e, t) {
                return {
                    equals: function(n, r) {
                        return n === r || (E(n) ? E(r) && e.equals(n.left, r.left) : x(r) && t.equals(n.right, r.right))
                    }
                }
            }
              , h = function(e) {
                return function(t) {
                    return E(t) ? t : u(e(t.right))
                }
            }
              , _ = {
                URI: p,
                map: l
            }
              , m = u
              , b = function(e) {
                return function(t) {
                    return E(t) ? t : E(e) ? e : u(t.right(e.right))
                }
            }
              , v = {
                URI: p,
                map: l,
                ap: f
            }
              , w = {
                URI: p,
                map: l,
                ap: f,
                of: m
            }
              , y = function(e) {
                return function(t) {
                    return E(t) ? t : e(t.right)
                }
            }
              , k = y
              , S = {
                URI: p,
                map: l,
                ap: f,
                chain: d
            }
              , I = function(e, t) {
                return function(n) {
                    return E(n) ? c(e(n.left)) : u(t(n.right))
                }
            }
              , G = function(e) {
                return function(t) {
                    return E(t) ? c(e(t.left)) : t
                }
            }
              , z = {
                URI: p,
                fromEither: i.yR
            }
              , q = (0,
            s.DT)(z)
              , U = (0,
            s.Yo)(z)
              , E = a.nM
              , x = a.tO
              , P = function(e, t) {
                return function(n) {
                    return E(n) ? e(n.left) : t(n.right)
                }
            }
              , C = P
              , O = C
              , D = function(e) {
                return function(t) {
                    return E(t) ? e(t.left) : t.right
                }
            }
              , A = function(e) {
                return E(e) ? u(e.left) : c(e.right)
            }
              , T = function(e) {
                return function(t) {
                    return E(t) ? e(t.left) : t
                }
            }
              , j = function(e) {
                return function(t) {
                    return null == t ? c(e) : u(t)
                }
            }
              , M = function(e, t) {
                try {
                    return u(e())
                } catch (e) {
                    return c(t(e))
                }
            }
              , R = function(e, t) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                    return M((function() {
                        return e.apply(void 0, n)
                    }
                    ), t)
                }
            }
              , F = P(i.yR, i.yR);
            function L(e) {
                return e instanceof Error ? e : new Error(String(e))
            }
            a.F4;
            var Y = (0,
            o.YO)(_)
              , N = (0,
            r.a)(S);
            a.Xl
        }
        ,
        125: (e, t, n) => {
            n.d(t, {
                EQ: () => w,
                F2: () => a,
                KQ: () => d,
                LF: () => z,
                LU: () => G,
                LV: () => y,
                NG: () => p,
                Pd: () => b,
                UI: () => g,
                Vn: () => v,
                ap: () => h,
                dQ: () => I,
                fS: () => k,
                i$: () => q,
                ij: () => f,
                m8: () => u,
                pk: () => l,
                t$: () => c,
                tS: () => _,
                vx: () => S,
                wp: () => m
            });
            var r = n(945)
              , s = n(144)
              , i = n(169)
              , o = n(289);
            function a(e) {
                return (0,
                i.ls)(s.F2, e.of)
            }
            function c(e) {
                return (0,
                i.ls)(s.t$, e.of)
            }
            function u(e) {
                return function(t) {
                    return e.map(t, s.F2)
                }
            }
            function l(e) {
                return function(t) {
                    return e.map(t, s.t$)
                }
            }
            function f(e) {
                return function(t) {
                    return (0,
                    i.ls)(s.ij(t), e.of)
                }
            }
            function d(e) {
                var t = f(e);
                return function(e) {
                    var n = t(e);
                    return function(e) {
                        return (0,
                        i.ls)(e, n)
                    }
                }
            }
            function p(e) {
                var t = _(e)
                  , n = d(e);
                return function(e) {
                    var r = n(e);
                    return function(e) {
                        return t(r(e))
                    }
                }
            }
            function g(e) {
                return (0,
                o.UI)(e, s.dO)
            }
            function h(e) {
                return (0,
                r.ap)(e, s.G5)
            }
            function _(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, (function(n) {
                            return s.nM(n) ? e.of(n) : t(n.right)
                        }
                        ))
                    }
                }
            }
            function m(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, (function(n) {
                            return s.nM(n) ? t() : e.of(n)
                        }
                        ))
                    }
                }
            }
            function b(e) {
                return function(t, n) {
                    return function(r) {
                        return e.map(r, s.Pd(t, n))
                    }
                }
            }
            function v(e) {
                return function(t) {
                    return function(n) {
                        return e.map(n, s.Vn(t))
                    }
                }
            }
            function w(e) {
                return function(t, n) {
                    return function(r) {
                        return e.map(r, s.EQ(t, n))
                    }
                }
            }
            function y(e) {
                return function(t, n) {
                    return function(r) {
                        return e.chain(r, s.EQ(t, n))
                    }
                }
            }
            function k(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, s.EQ(t, e.of))
                    }
                }
            }
            function S(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, (function(n) {
                            return s.nM(n) ? t(n.left) : e.of(n)
                        }
                        ))
                    }
                }
            }
            function I(e) {
                var t = S(e);
                return function(n) {
                    return t((function(t) {
                        return e.map(n(t), (function(e) {
                            return s.nM(e) ? e : s.t$(t)
                        }
                        ))
                    }
                    ))
                }
            }
            function G(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, s.EQ((function(n) {
                            return e.map(t(n), s.t$)
                        }
                        ), (function(t) {
                            return e.of(s.F2(t))
                        }
                        )))
                    }
                }
            }
            function z(e) {
                return function(t) {
                    return e.map(t, s.LF)
                }
            }
            function q(e) {
                return function(t) {
                    return e.map(t, s.i$)
                }
            }
        }
        ,
        689: (e, t, n) => {
            n.d(t, {
                MW: () => c,
                Uz: () => o,
                bc: () => i,
                f7: () => r,
                n_: () => s,
                w4: () => a
            });
            n(169);
            var r = function(e) {
                return {
                    equals: function(t, n) {
                        return t === n || e(t, n)
                    }
                }
            }
              , s = function(e) {
                return r((function(t, n) {
                    for (var r in e)
                        if (!e[r].equals(t[r], n[r]))
                            return !1;
                    return !0
                }
                ))
            }
              , i = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return r((function(t, n) {
                    return e.every((function(e, r) {
                        return e.equals(t[r], n[r])
                    }
                    ))
                }
                ))
            }
              , o = function(e) {
                return function(t) {
                    return r((function(n, r) {
                        return t.equals(e(n), e(r))
                    }
                    ))
                }
            }
              , a = {
                equals: function(e, t) {
                    return e === t
                }
            }
              , c = s;
            a.equals
        }
        ,
        906: (e, t, n) => {
            n.d(t, {
                DT: () => o,
                Dj: () => a,
                Yo: () => i,
                fX: () => c
            });
            var r = n(169)
              , s = n(614);
            function i(e) {
                return function(t) {
                    return function(n) {
                        return e.fromEither(s.Wi(n) ? s.t$(t()) : s.F2(n.value))
                    }
                }
            }
            function o(e) {
                return function(t, n) {
                    return function(r) {
                        return e.fromEither(t(r) ? s.F2(r) : s.t$(n(r)))
                    }
                }
            }
            function a(e) {
                return function(t) {
                    return (0,
                    r.ls)(t, e.fromEither)
                }
            }
            function c(e, t) {
                var n = a(e);
                return function(e) {
                    return function(r) {
                        return t.chain(r, n(e))
                    }
                }
            }
        }
        ,
        755: (e, t, n) => {
            n.d(t, {
                At: () => o,
                oU: () => i
            });
            var r = n(335)
              , s = n(169);
            function i(e, t) {
                return function(n) {
                    var r = (0,
                    s.ls)(n, e.fromIO);
                    return function(e) {
                        return t.chain(e, r)
                    }
                }
            }
            function o(e, t) {
                var n = (0,
                r.m)(t);
                return function(t) {
                    return n((0,
                    s.ls)(t, e.fromIO))
                }
            }
        }
        ,
        241: (e, t, n) => {
            n.d(t, {
                oU: () => i,
                wt: () => s
            });
            var r = n(169);
            function s(e) {
                return function(t) {
                    return (0,
                    r.ls)(t, e.fromTask)
                }
            }
            function i(e, t) {
                return function(n) {
                    var s = (0,
                    r.ls)(n, e.fromTask);
                    return function(e) {
                        return t.chain(e, s)
                    }
                }
            }
        }
        ,
        289: (e, t, n) => {
            function r(e, t) {
                return function(n) {
                    return function(r) {
                        return e.map(r, (function(e) {
                            return t.map(e, n)
                        }
                        ))
                    }
                }
            }
            function s(e) {
                return function(t) {
                    return function(n) {
                        return e.map(n, (function(e) {
                            return e(t)
                        }
                        ))
                    }
                }
            }
            function i(e) {
                return function(t) {
                    return function(n) {
                        return e.map(n, (function(e) {
                            var n;
                            return (n = {})[t] = e,
                            n
                        }
                        ))
                    }
                }
            }
            function o(e) {
                return function(t, n) {
                    return function(r) {
                        return e.map(r, (function(e) {
                            var r;
                            return Object.assign({}, e, ((r = {})[t] = n(e),
                            r))
                        }
                        ))
                    }
                }
            }
            n.d(t, {
                Hr: () => o,
                OV: () => s,
                UI: () => r,
                YO: () => i
            })
        }
        ,
        694: (e, t, n) => {
            n.d(t, {
                G5: () => p,
                PM: () => d,
                RD: () => v,
                UA: () => h,
                UI: () => c,
                dO: () => f,
                of: () => u,
                qo: () => g
            });
            var r = n(169)
              , s = (n(289),
            n(614))
              , i = function(e, t) {
                return function() {
                    return t(e())
                }
            }
              , o = function(e, t) {
                return function() {
                    return e()(t())
                }
            }
              , a = function(e, t) {
                return function() {
                    return t(e())()
                }
            }
              , c = function(e) {
                return function(t) {
                    return i(t, e)
                }
            }
              , u = r.a9
              , l = "IO"
              , f = {
                URI: l,
                map: i
            }
              , d = {
                URI: l,
                of: u
            }
              , p = {
                URI: l,
                map: i,
                ap: o
            }
              , g = {
                URI: l,
                map: i,
                ap: o,
                chain: a
            }
              , h = {
                URI: l,
                map: i,
                ap: o,
                of: u,
                chain: a
            }
              , _ = (r.yR,
            r.yR,
            s.F4,
            u(s.Xl))
              , m = function(e) {
                var t = function(e) {
                    return function(t) {
                        return function() {
                            for (var n = [e(0, s.YM(t))()], r = 1; r < t.length; r++)
                                n.push(e(r, t[r])());
                            return n
                        }
                    }
                }(e);
                return function(e) {
                    return s.Od(e) ? t(e) : _
                }
            }
              , b = function(e) {
                return m((function(t, n) {
                    return e(n)
                }
                ))
            }
              , v = b(r.yR)
        }
        ,
        606: (e, t, n) => {
            n.d(t, {
                Ce: () => l,
                Eh: () => k,
                Gb: () => I,
                Im: () => f,
                KB: () => _,
                Od: () => a,
                QI: () => z,
                R3: () => d,
                Ss: () => q,
                dC: () => c,
                lx: () => y,
                nI: () => h,
                of: () => v,
                oo: () => p,
                ur: () => G,
                w6: () => m,
                ws: () => u,
                yL: () => w
            });
            var r = n(169)
              , s = (n(289),
            n(614))
              , i = n(214)
              , o = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, s = 0, i = t.length; s < i; s++)
                        !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)),
                        r[s] = t[s]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
              , a = function(e) {
                return e.length > 0
            }
              , c = function(e, t) {
                return e < 0 || e >= t.length
            }
              , u = function(e) {
                return function(t) {
                    return o([e], t, !0)
                }
            }
              , l = u
              , f = function(e) {
                return function(t) {
                    return o(o([], t, !0), [e], !1)
                }
            }
              , d = f
              , p = function(e, t, n) {
                if (a(n)) {
                    var r = g(n);
                    return r.splice(e, 0, t),
                    r
                }
                return [t]
            }
              , g = s.r1
              , h = function(e) {
                return a(e) ? s.G(e) : s.YP
            }
              , _ = function(e) {
                return function(t) {
                    for (var n = Math.max(0, Math.floor(t)), r = [e(0)], s = 1; s < n; s++)
                        r.push(e(s));
                    return r
                }
            }
              , m = function(e, t) {
                return e <= t ? _((function(t) {
                    return e + t
                }
                ))(t - e + 1) : [e]
            };
            var b = g
              , v = function(e) {
                return [e]
            }
              , w = function(e, t, n) {
                for (var r = [n(e[0], t[0])], s = Math.min(e.length, t.length), i = 1; i < s; i++)
                    r[i] = n(e[i], t[i]);
                return r
            };
            i.xP,
            i.Lx;
            var y = function(e) {
                return function(t) {
                    var n = Math.max(1, e);
                    return n >= t.length ? [b(t), []] : [(0,
                    r.zG)(t.slice(1, n), l(S(t))), t.slice(n)]
                }
            }
              , k = (i.u4,
            i.OE,
            i.nq,
            i.iw,
            i.YM,
            i.ZN,
            i.Eh)
              , S = (s.F4,
            i.YM)
              , I = function(e) {
                return e.slice(1)
            }
              , G = (i.Z$,
            i.VV,
            i.Fp,
            function(e) {
                return function(t) {
                    return t.reduce(e.concat)
                }
            }
            );
            i.j0;
            function z(e, t) {
                return void 0 === t ? l(e) : (0,
                r.zG)(t, l(e))
            }
            var q = function(e, t) {
                return (0,
                r.zG)(e, d(t))
            };
            i.ur
        }
        ,
        507: (e, t, n) => {
            n.d(t, {
                DT: () => g,
                Dj: () => ue,
                Do: () => be,
                EK: () => _,
                EQ: () => re,
                Eh: () => G,
                FS: () => me,
                G: () => p,
                G5: () => O,
                Gk: () => j,
                Hr: () => we,
                IS: () => h,
                KQ: () => ge,
                NG: () => he,
                OV: () => ae,
                Qt: () => ke,
                Ri: () => B,
                UI: () => U,
                Uo: () => W,
                WG: () => _e,
                Wi: () => te,
                Y3: () => de,
                YO: () => ve,
                YP: () => d,
                aD: () => ne,
                ak: () => ye,
                bM: () => R,
                dO: () => E,
                fS: () => oe,
                fX: () => le,
                fw: () => J,
                g1: () => D,
                g_: () => se,
                hX: () => $,
                ij: () => fe,
                it: () => pe,
                lo: () => L,
                pC: () => ee,
                pF: () => ie,
                pR: () => z,
                tS: () => A,
                uZ: () => q,
                wp: () => M,
                xH: () => ce,
                xu: () => X
            });
            var r = n(945)
              , s = n(335)
              , i = n(906)
              , o = n(169)
              , a = n(289)
              , c = n(614)
              , u = n(327)
              , l = n(49)
              , f = (n(226),
            n(302))
              , d = c.YP
              , p = c.G;
            function g(e) {
                return function(t) {
                    return e(t) ? p(t) : d
                }
            }
            var h = function(e) {
                return "Right" === e._tag ? d : p(e.left)
            }
              , _ = function(e) {
                return "Left" === e._tag ? d : p(e.right)
            }
              , m = function(e, t) {
                return (0,
                o.zG)(e, U(t))
            }
              , b = function(e, t) {
                return (0,
                o.zG)(e, C(t))
            }
              , v = function(e, t) {
                return (0,
                o.zG)(e, A(t))
            }
              , w = function(e, t) {
                return (0,
                o.zG)(e, $(t))
            }
              , y = function(e, t) {
                return (0,
                o.zG)(e, H(t))
            }
              , k = function(e, t) {
                return (0,
                o.zG)(e, K(t))
            }
              , S = function(e, t) {
                return (0,
                o.zG)(e, V(t))
            }
              , I = "Option"
              , G = function(e) {
                return {
                    equals: function(t, n) {
                        return t === n || (te(t) ? te(n) : !te(n) && e.equals(t.value, n.value))
                    }
                }
            }
              , z = function(e) {
                return {
                    equals: G(e).equals,
                    compare: function(t, n) {
                        return t === n ? 0 : ee(t) ? ee(n) ? e.compare(t.value, n.value) : 1 : -1
                    }
                }
            }
              , q = function(e) {
                return {
                    concat: function(t, n) {
                        return te(t) ? n : te(n) ? t : p(e.concat(t.value, n.value))
                    },
                    empty: d
                }
            }
              , U = function(e) {
                return function(t) {
                    return te(t) ? d : p(e(t.value))
                }
            }
              , E = {
                URI: I,
                map: m
            }
              , x = p
              , P = {
                URI: I,
                of: x
            }
              , C = function(e) {
                return function(t) {
                    return te(t) || te(e) ? d : p(t.value(e.value))
                }
            }
              , O = {
                URI: I,
                map: m,
                ap: b
            }
              , D = {
                URI: I,
                map: m,
                ap: b,
                of: x
            }
              , A = function(e) {
                return function(t) {
                    return te(t) ? d : e(t.value)
                }
            }
              , T = {
                URI: I,
                map: m,
                ap: b,
                chain: v
            }
              , j = function(e) {
                return function(t) {
                    return te(t) ? e() : t
                }
            }
              , M = j
              , R = function() {
                return d
            }
              , F = {
                URI: I,
                zero: R
            }
              , L = (0,
            f.l)(F, P)
              , Y = A(o.yR)
              , N = (0,
            l.s4)(d, d)
              , Q = function(e) {
                return te(e) ? N : (0,
                l.s4)(h(e.value), _(e.value))
            }
              , B = {
                URI: I,
                compact: Y,
                separate: Q
            }
              , $ = function(e) {
                return function(t) {
                    return te(t) ? d : e(t.value) ? t : d
                }
            }
              , H = function(e) {
                return function(t) {
                    return te(t) ? d : e(t.value)
                }
            }
              , K = function(e) {
                return function(t) {
                    return (0,
                    l.s4)(w(t, (0,
                    u.ff)(e)), w(t, e))
                }
            }
              , V = function(e) {
                return (0,
                o.ls)(U(e), Q)
            }
              , X = {
                URI: I,
                map: m,
                compact: Y,
                separate: Q,
                filter: w,
                filterMap: y,
                partition: k,
                partitionMap: S
            }
              , J = function(e) {
                return function(t) {
                    return function(n) {
                        return te(n) ? e.of(d) : e.map(t(n.value), p)
                    }
                }
            }
              , W = _
              , Z = {
                URI: I,
                fromEither: W
            }
              , ee = c.pC
              , te = function(e) {
                return "None" === e._tag
            }
              , ne = function(e, t) {
                return function(n) {
                    return te(n) ? e() : t(n.value)
                }
            }
              , re = ne
              , se = re
              , ie = function(e) {
                return function(t) {
                    return te(t) ? e() : t.value
                }
            }
              , oe = ie
              , ae = (0,
            a.OV)(E)
              , ce = Y
              , ue = (0,
            i.Dj)(Z)
              , le = (0,
            i.fX)(Z, T)
              , fe = function(e) {
                return null == e ? d : p(e)
            }
              , de = function(e) {
                try {
                    return p(e())
                } catch (e) {
                    return d
                }
            }
              , pe = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return de((function() {
                        return e.apply(void 0, t)
                    }
                    ))
                }
            }
              , ge = function(e) {
                return (0,
                o.ls)(e, fe)
            }
              , he = function(e) {
                return function(t) {
                    return te(t) ? d : fe(e(t.value))
                }
            }
              , _e = re(o.gn, o.yR)
              , me = re(o.r5, o.yR);
            var be = x(c.F4)
              , ve = (0,
            a.YO)(E)
              , we = (0,
            a.Hr)(E)
              , ye = (0,
            s.a)(T)
              , ke = (0,
            r.Qt)(O);
            c.Xl
        }
        ,
        856: (e, t, n) => {
            n.d(t, {
                Fp: () => d,
                Uz: () => a,
                VV: () => f,
                Zt: () => o,
                gf: () => l,
                gt: () => u,
                lt: () => c
            });
            var r = n(689)
              , s = n(169)
              , i = function(e) {
                return function(t, n) {
                    return t === n || 0 === e(t, n)
                }
            }
              , o = function(e) {
                return {
                    equals: i(e),
                    compare: function(t, n) {
                        return t === n ? 0 : e(t, n)
                    }
                }
            }
              , a = function(e) {
                return function(t) {
                    return o((function(n, r) {
                        return t.compare(e(n), e(r))
                    }
                    ))
                }
            }
              , c = (s.W8,
            function(e) {
                return function(t, n) {
                    return -1 === e.compare(t, n)
                }
            }
            )
              , u = function(e) {
                return function(t, n) {
                    return 1 === e.compare(t, n)
                }
            }
              , l = function(e) {
                return function(t, n) {
                    return -1 !== e.compare(t, n)
                }
            }
              , f = function(e) {
                return function(t, n) {
                    return t === n || e.compare(t, n) < 1 ? t : n
                }
            }
              , d = function(e) {
                return function(t, n) {
                    return t === n || e.compare(t, n) > -1 ? t : n
                }
            };
            r.w4.equals
        }
        ,
        327: (e, t, n) => {
            n.d(t, {
                ff: () => r,
                xD: () => s
            });
            n(169);
            var r = function(e) {
                return function(t) {
                    return !e(t)
                }
            }
              , s = function(e) {
                return function(t) {
                    return function(n) {
                        return t(n) && e(n)
                    }
                }
            }
        }
        ,
        812: (e, t, n) => {
            n.d(t, {
                Ce: () => h,
                DZ: () => J,
                EQ: () => v,
                Eh: () => de,
                Eq: () => Y,
                Ew: () => U,
                G: () => Ie,
                Hr: () => ze,
                JO: () => x,
                Lx: () => re,
                N7: () => O,
                OE: () => se,
                OV: () => he,
                Od: () => g,
                P5: () => y,
                R3: () => _,
                Su: () => K,
                UI: () => H,
                YM: () => k,
                Yo: () => m,
                Z$: () => S,
                ZN: () => ue,
                aD: () => b,
                bM: () => Q,
                bj: () => C,
                cS: () => ke,
                cx: () => q,
                f2: () => E,
                hX: () => V,
                iw: () => oe,
                j0: () => Ge,
                jG: () => le,
                jj: () => A,
                kp: () => L,
                lo: () => be,
                md: () => z,
                nI: () => ye,
                nq: () => ie,
                oA: () => W,
                oR: () => we,
                of: () => N,
                pJ: () => ve,
                pO: () => T,
                pR: () => pe,
                pc: () => M,
                qr: () => P,
                t9: () => D,
                tS: () => B,
                u4: () => ne,
                uK: () => Z,
                uZ: () => fe,
                vP: () => ae,
                xH: () => $,
                xP: () => te,
                xb: () => p,
                yW: () => Se,
                zT: () => G
            });
            var r = n(689)
              , s = n(169)
              , i = n(289)
              , o = n(614)
              , a = n(52)
              , c = n(856)
              , u = n(214)
              , l = n(49)
              , f = (n(226),
            n(302))
              , d = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, s = 0, i = t.length; s < i; s++)
                        !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)),
                        r[s] = t[s]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
              , p = function(e) {
                return 0 === e.length
            }
              , g = u.Od
              , h = u.Ce
              , _ = (u.ws,
            u.R3);
            u.Im;
            var m = function(e) {
                return o.Wi(e) ? ke : [e.value]
            }
              , b = function(e, t) {
                return function(n) {
                    return g(n) ? t(n) : e()
                }
            }
              , v = b
              , w = u.dC;
            function y(e, t) {
                return void 0 === t ? function(t) {
                    return y(e, t)
                }
                : w(e, t) ? o.YP : o.G(t[e])
            }
            var k = function(e) {
                return g(e) ? o.G(u.YM(e)) : o.YP
            }
              , S = function(e) {
                return g(e) ? o.G(u.Z$(e)) : o.YP
            };
            var I = function(e, t) {
                for (var n = e.length, r = 0; r < n && t(e[r]); r++)
                    ;
                return r
            };
            function G(e) {
                return function(t) {
                    var n = j(I(t, e))(t);
                    return {
                        init: n[0],
                        rest: n[1]
                    }
                }
            }
            var z = function(e) {
                return function(t) {
                    return e <= 0 || p(t) ? t : e >= t.length ? ke : t.slice(e, t.length)
                }
            };
            var q = function(e) {
                return function(t) {
                    for (var n = 0; n < t.length; n++)
                        if (e(t[n]))
                            return o.G(n);
                    return o.YP
                }
            };
            function U(e) {
                return function(t) {
                    for (var n = 0; n < t.length; n++)
                        if (e(t[n]))
                            return o.G(t[n]);
                    return o.YP
                }
            }
            var E = function(e) {
                return function(t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = e(t[n]);
                        if (o.pC(r))
                            return r
                    }
                    return o.YP
                }
            };
            var x = function(e) {
                return function(t) {
                    for (var n = t.length - 1; n >= 0; n--) {
                        var r = e(t[n]);
                        if (o.pC(r))
                            return r
                    }
                    return o.YP
                }
            }
              , P = function(e) {
                return function(t) {
                    for (var n = t.length - 1; n >= 0; n--)
                        if (e(t[n]))
                            return o.G(n);
                    return o.YP
                }
            }
              , C = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    "Left" === r._tag && t.push(r.left)
                }
                return t
            };
            var O = function(e) {
                for (var t = [], n = [], r = 0; r < e.length; r++)
                    t[r] = e[r][0],
                    n[r] = e[r][1];
                return [t, n]
            };
            function D(e) {
                return function(t, n) {
                    if (void 0 === n) {
                        var r = D(e);
                        return function(e) {
                            return r(t, e)
                        }
                    }
                    for (var s, i = 0; i < n.length; i++)
                        if (s = n[i],
                        e.equals(s, t))
                            return !0;
                    return !1
                }
            }
            var A = function(e) {
                var t = u.jj(e);
                return function(e) {
                    return g(e) ? t(e) : e
                }
            }
              , T = function(e) {
                var t = u.pO(e);
                return function(e) {
                    return g(e) ? t(e) : ke
                }
            }
              , j = function(e) {
                return function(t) {
                    return e >= 1 && g(t) ? u.lx(e)(t) : p(t) ? [t, ke] : [ke, t]
                }
            }
              , M = function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++)
                        t[n] = arguments[n];
                    return m(e.apply(void 0, t))
                }
            };
            var R = function(e, t) {
                return (0,
                s.zG)(e, H(t))
            }
              , F = function(e, t, n) {
                return (0,
                s.zG)(e, ne(t, n))
            }
              , L = function(e, t) {
                return (0,
                s.zG)(e, ve(t))
            }
              , Y = function(e, t) {
                return (0,
                s.zG)(e, we(t))
            }
              , N = u.of
              , Q = function() {
                return ke
            }
              , B = function(e) {
                return function(t) {
                    return (0,
                    s.zG)(t, function(e) {
                        return function(t) {
                            if (p(t))
                                return ke;
                            for (var n = [], r = 0; r < t.length; r++)
                                n.push.apply(n, e(r, t[r]));
                            return n
                        }
                    }((function(t, n) {
                        return e(n)
                    }
                    )))
                }
            }
              , $ = B(s.yR)
              , H = function(e) {
                return function(t) {
                    return t.map((function(t) {
                        return e(t)
                    }
                    ))
                }
            }
              , K = function(e) {
                return function(t) {
                    return t.map((function(t, n) {
                        return e(n, t)
                    }
                    ))
                }
            }
              , V = function(e) {
                return function(t) {
                    return t.filter(e)
                }
            }
              , X = function(e) {
                return function(t) {
                    for (var n = [], r = 0; r < t.length; r++) {
                        var s = e(r, t[r]);
                        o.pC(s) && n.push(s.value)
                    }
                    return n
                }
            }
              , J = function(e) {
                return X((function(t, n) {
                    return e(n)
                }
                ))
            }
              , W = J(s.yR)
              , Z = function(e) {
                return ee((function(t, n) {
                    return e(n)
                }
                ))
            }
              , ee = function(e) {
                return function(t) {
                    for (var n = [], r = [], s = 0; s < t.length; s++) {
                        var i = t[s];
                        e(s, i) ? r.push(i) : n.push(i)
                    }
                    return (0,
                    l.s4)(n, r)
                }
            }
              , te = function(e) {
                return function(t) {
                    return function(n) {
                        return n.reduce((function(n, r, s) {
                            return e.concat(n, t(s, r))
                        }
                        ), e.empty)
                    }
                }
            }
              , ne = function(e, t) {
                return se(e, (function(e, n, r) {
                    return t(n, r)
                }
                ))
            }
              , re = function(e) {
                var t = te(e);
                return function(e) {
                    return t((function(t, n) {
                        return e(n)
                    }
                    ))
                }
            }
              , se = function(e, t) {
                return function(n) {
                    for (var r = n.length, s = e, i = 0; i < r; i++)
                        s = t(i, s, n[i]);
                    return s
                }
            }
              , ie = function(e, t) {
                return oe(e, (function(e, n, r) {
                    return t(n, r)
                }
                ))
            }
              , oe = function(e, t) {
                return function(n) {
                    return n.reduceRight((function(e, n, r) {
                        return t(r, n, e)
                    }
                    ), e)
                }
            }
              , ae = function(e) {
                return function(t) {
                    return F(t, e.of(Q()), (function(t, n) {
                        return e.ap(e.map(t, (function(e) {
                            return function(t) {
                                return (0,
                                s.zG)(e, _(t))
                            }
                        }
                        )), n)
                    }
                    ))
                }
            }
              , ce = "ReadonlyArray"
              , ue = function(e) {
                return {
                    show: function(t) {
                        return "[".concat(t.map(e.show).join(", "), "]")
                    }
                }
            }
              , le = function() {
                return {
                    concat: function(e, t) {
                        return p(e) ? t : p(t) ? e : e.concat(t)
                    }
                }
            }
              , fe = function() {
                return {
                    concat: le().concat,
                    empty: ke
                }
            }
              , de = function(e) {
                return (0,
                r.f7)((function(t, n) {
                    return t.length === n.length && t.every((function(t, r) {
                        return e.equals(t, n[r])
                    }
                    ))
                }
                ))
            }
              , pe = function(e) {
                return (0,
                c.Zt)((function(t, n) {
                    for (var r = t.length, s = n.length, i = Math.min(r, s), o = 0; o < i; o++) {
                        var c = e.compare(t[o], n[o]);
                        if (0 !== c)
                            return c
                    }
                    return a.Df.compare(r, s)
                }
                ))
            }
              , ge = {
                URI: ce,
                map: R
            }
              , he = (0,
            i.OV)(ge)
              , _e = {
                URI: ce,
                of: N
            }
              , me = {
                URI: ce,
                zero: Q
            }
              , be = (0,
            f.l)(me, _e)
              , ve = function(e) {
                return function(t) {
                    for (var n = d([], e(t), !0), r = []; n.length > 0; ) {
                        var s = n.shift();
                        o.nM(s) ? n.unshift.apply(n, e(s.left)) : r.push(s.right)
                    }
                    return r
                }
            }
              , we = function(e) {
                return function(t) {
                    var n = e(t)
                      , r = []
                      , s = [];
                    function i(t) {
                        o.nM(t) ? e(t.left).forEach((function(e) {
                            return r.push(e)
                        }
                        )) : s.push(t.right)
                    }
                    for (var a = 0, c = n; a < c.length; a++) {
                        i(c[a])
                    }
                    for (; r.length > 0; )
                        i(r.shift());
                    return s
                }
            }
              , ye = (u.oo,
            function(e) {
                return p(e) ? ke : e.slice()
            }
            )
              , ke = u.cS;
            function Se(e) {
                return function(t) {
                    return t.every(e)
                }
            }
            var Ie = function(e) {
                return function(t) {
                    return t.some(e)
                }
            }
              , Ge = function(e) {
                var t = u.j0(e);
                return function(n) {
                    return v((function() {
                        return e.empty
                    }
                    ), t(n))
                }
            }
              , ze = (o.F4,
            (0,
            i.Hr)(ge));
            u.w6,
            u.QI,
            u.Ss
        }
        ,
        214: (e, t, n) => {
            n.d(t, {
                Ce: () => d,
                Eh: () => A,
                Fp: () => L,
                Im: () => p,
                Lx: () => U,
                OE: () => x,
                Od: () => u,
                QI: () => $,
                R3: () => g,
                Ss: () => H,
                UI: () => G,
                VV: () => F,
                YM: () => T,
                Z$: () => M,
                ZN: () => D,
                aL: () => N,
                c2: () => m,
                cS: () => c,
                dC: () => l,
                iw: () => C,
                j0: () => B,
                jj: () => _,
                lx: () => S,
                nq: () => E,
                of: () => I,
                oo: () => h,
                pO: () => k,
                u4: () => q,
                ur: () => Y,
                ut: () => Q,
                w6: () => v,
                ws: () => f,
                xP: () => P
            });
            var r = n(689)
              , s = n(169)
              , i = (n(289),
            n(614))
              , o = n(794)
              , a = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, s = 0, i = t.length; s < i; s++)
                        !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)),
                        r[s] = t[s]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
              , c = i.Xl
              , u = i.Od
              , l = function(e, t) {
                return e < 0 || e >= t.length
            }
              , f = function(e) {
                return function(t) {
                    return a([e], t, !0)
                }
            }
              , d = f
              , p = function(e) {
                return function(t) {
                    return a(a([], t, !0), [e], !1)
                }
            }
              , g = p
              , h = function(e, t, n) {
                if (u(n)) {
                    var r = i.r1(n);
                    return r.splice(e, 0, t),
                    r
                }
                return [t]
            }
              , _ = function(e) {
                return function(t) {
                    if (1 === t.length)
                        return t;
                    for (var n = [T(t)], r = function(t) {
                        n.every((function(n) {
                            return !e.equals(n, t)
                        }
                        )) && n.push(t)
                    }, s = 0, i = j(t); s < i.length; s++) {
                        r(i[s])
                    }
                    return n
                }
            }
              , m = function(e) {
                return u(e) ? i.G(e) : i.YP
            }
              , b = function(e) {
                return function(t) {
                    for (var n = Math.max(0, Math.floor(t)), r = [e(0)], s = 1; s < n; s++)
                        r.push(e(s));
                    return r
                }
            }
              , v = function(e, t) {
                return e <= t ? b((function(t) {
                    return e + t
                }
                ))(t - e + 1) : [e]
            };
            function w(e, t) {
                return t ? e.concat(t) : function(t) {
                    return t.concat(e)
                }
            }
            var y = function(e) {
                return function(t) {
                    for (var n = [e, t[0]], r = 1; r < t.length; r++)
                        n.push(e, t[r]);
                    return n
                }
            }
              , k = function(e) {
                return function(t) {
                    for (var n = e(t), r = [n[0]], s = n[1]; u(s); ) {
                        var i = e(s)
                          , o = i[0]
                          , a = i[1];
                        r.push(o),
                        s = a
                    }
                    return r
                }
            }
              , S = function(e) {
                return function(t) {
                    var n = Math.max(1, e);
                    return n >= t.length ? [t, c] : [(0,
                    s.zG)(t.slice(1, n), d(T(t))), t.slice(n)]
                }
            }
              , I = i.ri
              , G = function(e) {
                return z((function(t, n) {
                    return e(n)
                }
                ))
            }
              , z = function(e) {
                return function(t) {
                    for (var n = [e(0, T(t))], r = 1; r < t.length; r++)
                        n.push(e(r, t[r]));
                    return n
                }
            }
              , q = function(e, t) {
                return x(e, (function(e, n, r) {
                    return t(n, r)
                }
                ))
            }
              , U = function(e) {
                return function(t) {
                    return function(n) {
                        return n.slice(1).reduce((function(n, r) {
                            return e.concat(n, t(r))
                        }
                        ), t(n[0]))
                    }
                }
            }
              , E = function(e, t) {
                return C(e, (function(e, n, r) {
                    return t(n, r)
                }
                ))
            }
              , x = function(e, t) {
                return function(n) {
                    return n.reduce((function(e, n, r) {
                        return t(r, e, n)
                    }
                    ), e)
                }
            }
              , P = function(e) {
                return function(t) {
                    return function(n) {
                        return n.slice(1).reduce((function(n, r, s) {
                            return e.concat(n, t(s + 1, r))
                        }
                        ), t(0, n[0]))
                    }
                }
            }
              , C = function(e, t) {
                return function(n) {
                    return n.reduceRight((function(e, n, r) {
                        return t(r, n, e)
                    }
                    ), e)
                }
            }
              , O = i.YM
              , D = function(e) {
                return {
                    show: function(t) {
                        return "[".concat(t.map(e.show).join(", "), "]")
                    }
                }
            }
              , A = function(e) {
                return (0,
                r.f7)((function(t, n) {
                    return t.length === n.length && t.every((function(t, r) {
                        return e.equals(t, n[r])
                    }
                    ))
                }
                ))
            }
              , T = (i.F4,
            O)
              , j = i.Gb
              , M = function(e) {
                return e[e.length - 1]
            }
              , R = function(e) {
                return e.slice(0, -1)
            }
              , F = function(e) {
                var t = o.VV(e);
                return function(e) {
                    return e.reduce(t.concat)
                }
            }
              , L = function(e) {
                var t = o.Fp(e);
                return function(e) {
                    return e.reduce(t.concat)
                }
            }
              , Y = function(e) {
                return function(t) {
                    return t.reduce(e.concat)
                }
            }
              , N = function(e) {
                return function(t) {
                    return e(T(t), j(t))
                }
            }
              , Q = function(e) {
                return function(t) {
                    return e(R(t), M(t))
                }
            }
              , B = function(e) {
                var t = Y(e);
                return function(e) {
                    return (0,
                    s.ls)(function(e) {
                        return function(t) {
                            var n = j(t);
                            return u(n) ? (0,
                            s.zG)(n, y(e), d(T(t))) : t
                        }
                    }(e), t)
                }
            };
            function $(e, t) {
                return void 0 === t ? d(e) : (0,
                s.zG)(t, d(e))
            }
            var H = function(e, t) {
                return (0,
                s.zG)(e, w([t]))
            }
        }
        ,
        450: (e, t, n) => {
            n.d(t, {
                Bu: () => m,
                CC: () => R,
                DZ: () => ne,
                EG: () => _,
                EW: () => $,
                Eh: () => fe,
                G: () => D,
                HA: () => T,
                Hd: () => U,
                I8: () => L,
                P5: () => b,
                RF: () => F,
                RJ: () => N,
                SW: () => K,
                Su: () => w,
                UI: () => y,
                Ub: () => X,
                V_: () => B,
                XP: () => f,
                Yz: () => P,
                _Y: () => Q,
                _r: () => q,
                cS: () => v,
                dp: () => c,
                dx: () => g,
                e$: () => h,
                hX: () => te,
                jt: () => E,
                kp: () => M,
                mK: () => Z,
                mS: () => Y,
                nn: () => j,
                nr: () => pe,
                nu: () => H,
                oA: () => ce,
                oh: () => ue,
                qS: () => W,
                ri: () => G,
                sq: () => C,
                t9: () => A,
                tV: () => se,
                uK: () => re,
                uZ: () => de,
                vA: () => J,
                vP: () => z,
                xb: () => u,
                yW: () => O,
                z7: () => x,
                zV: () => V
            });
            var r = n(689)
              , s = n(169)
              , i = n(614)
              , o = n(49)
              , a = n(229)
              , c = (n(226),
            function(e) {
                return Object.keys(e).length
            }
            )
              , u = function(e) {
                for (var t in e)
                    if (i.e$.call(e, t))
                        return !1;
                return !0
            }
              , l = function(e) {
                return function(t) {
                    return Object.keys(t).sort(e.compare)
                }
            }
              , f = l(a.Df);
            function d(e) {
                if ("function" == typeof e)
                    return d(a.Df)(e);
                var t = l(e);
                return function(e) {
                    return function(n) {
                        for (var r = [], s = 0, i = t(n); s < i.length; s++) {
                            var o = i[s];
                            r.push(e(o, n[o]))
                        }
                        return r
                    }
                }
            }
            var p = d(a.Df)((function(e, t) {
                return [e, t]
            }
            ));
            var g = function(e, t) {
                return function(n) {
                    if (i.e$.call(n, e) && n[e] === t)
                        return n;
                    var r = Object.assign({}, n);
                    return r[e] = t,
                    r
                }
            }
              , h = function(e, t) {
                return i.e$.call(t, e)
            };
            function _(e) {
                return function(t) {
                    if (!i.e$.call(t, e))
                        return t;
                    var n = Object.assign({}, t);
                    return delete n[e],
                    n
                }
            }
            function m(e) {
                return function(t, n) {
                    if (void 0 === n) {
                        var r = m(e);
                        return function(e) {
                            return r(e, t)
                        }
                    }
                    for (var s in t)
                        if (!i.e$.call(n, s) || !e.equals(t[s], n[s]))
                            return !1;
                    return !0
                }
            }
            function b(e, t) {
                return void 0 === t ? function(t) {
                    return b(e, t)
                }
                : i.e$.call(t, e) ? i.G(t[e]) : i.YP
            }
            var v = {};
            function w(e) {
                return function(t) {
                    var n = {};
                    for (var r in t)
                        i.e$.call(t, r) && (n[r] = e(r, t[r]));
                    return n
                }
            }
            function y(e) {
                return w((function(t, n) {
                    return e(n)
                }
                ))
            }
            function k() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (2 === e.length)
                    return k(a.Df).apply(void 0, e);
                var n = l(e[0]);
                return function(e, t) {
                    return function(r) {
                        for (var s = e, i = n(r), o = i.length, a = 0; a < o; a++) {
                            var c = i[a];
                            s = t(c, s, r[c])
                        }
                        return s
                    }
                }
            }
            function S(e) {
                if ("compare"in e) {
                    var t = l(e);
                    return function(e) {
                        return function(n) {
                            return function(r) {
                                for (var s = e.empty, i = t(r), o = i.length, a = 0; a < o; a++) {
                                    var c = i[a];
                                    s = e.concat(s, n(c, r[c]))
                                }
                                return s
                            }
                        }
                    }
                }
                return S(a.Df)(e)
            }
            function I() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (2 === e.length)
                    return I(a.Df).apply(void 0, e);
                var n = l(e[0]);
                return function(e, t) {
                    return function(r) {
                        for (var s = e, i = n(r), o = i.length - 1; o >= 0; o--) {
                            var a = i[o];
                            s = t(a, r[a], s)
                        }
                        return s
                    }
                }
            }
            var G = function(e, t) {
                var n;
                return (n = {})[e] = t,
                n
            };
            function z(e) {
                return Z(a.Df)(e)
            }
            function q(e) {
                return function(t) {
                    var n = {}
                      , r = {};
                    for (var s in t)
                        if (i.e$.call(t, s)) {
                            var a = e(s, t[s]);
                            switch (a._tag) {
                            case "Left":
                                n[s] = a.left;
                                break;
                            case "Right":
                                r[s] = a.right
                            }
                        }
                    return (0,
                    o.s4)(n, r)
                }
            }
            function U(e) {
                return function(t) {
                    var n = {}
                      , r = {};
                    for (var s in t)
                        if (i.e$.call(t, s)) {
                            var a = t[s];
                            e(s, a) ? r[s] = a : n[s] = a
                        }
                    return (0,
                    o.s4)(n, r)
                }
            }
            function E(e) {
                return function(t) {
                    var n = {};
                    for (var r in t)
                        if (i.e$.call(t, r)) {
                            var s = e(r, t[r]);
                            i.pC(s) && (n[r] = s.value)
                        }
                    return n
                }
            }
            function x(e) {
                return function(t) {
                    var n = {}
                      , r = !1;
                    for (var s in t)
                        if (i.e$.call(t, s)) {
                            var o = t[s];
                            e(s, o) ? n[s] = o : r = !0
                        }
                    return r ? n : t
                }
            }
            var P = p
              , C = function(e) {
                for (var t = {}, n = 0, r = e; n < r.length; n++) {
                    var s = r[n];
                    t[s[0]] = s[1]
                }
                return t
            };
            function O(e) {
                return function(t) {
                    for (var n in t)
                        if (!e(t[n]))
                            return !1;
                    return !0
                }
            }
            function D(e) {
                return function(t) {
                    for (var n in t)
                        if (e(t[n]))
                            return !0;
                    return !1
                }
            }
            function A(e) {
                return function(t, n) {
                    if (void 0 === n) {
                        var r = A(e);
                        return function(e) {
                            return r(t, e)
                        }
                    }
                    for (var s in n)
                        if (e.equals(n[s], t))
                            return !0;
                    return !1
                }
            }
            var T = function(e, t) {
                return (0,
                s.zG)(e, y(t))
            }
              , j = function(e, t) {
                return (0,
                s.zG)(e, w(t))
            }
              , M = function(e) {
                var t = ie(e);
                return function(e, n, r) {
                    return (0,
                    s.zG)(e, t(n, r))
                }
            }
              , R = function(e) {
                return function(t) {
                    var n = oe(e)(t);
                    return function(e, t) {
                        return (0,
                        s.zG)(e, n(t))
                    }
                }
            }
              , F = function(e) {
                var t = ae(e);
                return function(e, n, r) {
                    return (0,
                    s.zG)(e, t(n, r))
                }
            }
              , L = function(e, t) {
                return (0,
                s.zG)(e, te(t))
            }
              , Y = function(e, t) {
                return (0,
                s.zG)(e, ne(t))
            }
              , N = function(e, t) {
                return (0,
                s.zG)(e, re(t))
            }
              , Q = function(e, t) {
                return (0,
                s.zG)(e, se(t))
            }
              , B = function(e) {
                var t = k(e);
                return function(e, n, r) {
                    return (0,
                    s.zG)(e, t(n, r))
                }
            }
              , $ = function(e) {
                var t = S(e);
                return function(e) {
                    var n = t(e);
                    return function(e, t) {
                        return (0,
                        s.zG)(e, n(t))
                    }
                }
            }
              , H = function(e) {
                var t = I(e);
                return function(e, n, r) {
                    return (0,
                    s.zG)(e, t(n, r))
                }
            }
              , K = function(e, t) {
                return (0,
                s.zG)(e, q(t))
            }
              , V = function(e, t) {
                return (0,
                s.zG)(e, U(t))
            }
              , X = function(e, t) {
                return (0,
                s.zG)(e, E(t))
            }
              , J = function(e, t) {
                return (0,
                s.zG)(e, x(t))
            }
              , W = function(e) {
                var t = ee(e);
                return function(e) {
                    var n = t(e);
                    return function(e, t) {
                        return n(e, (0,
                        s.ls)(s.SK, t))
                    }
                }
            }
              , Z = function(e) {
                var t = W(e);
                return function(e) {
                    var n = t(e);
                    return function(e) {
                        return n(e, s.yR)
                    }
                }
            }
              , ee = function(e) {
                return function(t) {
                    var n = l(e);
                    return function(e, r) {
                        var s = n(e);
                        if (0 === s.length)
                            return t.of(v);
                        for (var i = t.of({}), o = function(n) {
                            i = t.ap(t.map(i, (function(e) {
                                return function(t) {
                                    var r;
                                    return Object.assign({}, e, ((r = {})[n] = t,
                                    r))
                                }
                            }
                            )), r(n, e[n]))
                        }, a = 0, c = s; a < c.length; a++) {
                            o(c[a])
                        }
                        return i
                    }
                }
            }
              , te = function(e) {
                return x((function(t, n) {
                    return e(n)
                }
                ))
            }
              , ne = function(e) {
                return E((function(t, n) {
                    return e(n)
                }
                ))
            }
              , re = function(e) {
                return U((function(t, n) {
                    return e(n)
                }
                ))
            }
              , se = function(e) {
                return q((function(t, n) {
                    return e(n)
                }
                ))
            };
            function ie() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (1 === e.length) {
                    var n = k(e[0]);
                    return function(e, t) {
                        return n(e, (function(e, n, r) {
                            return t(n, r)
                        }
                        ))
                    }
                }
                return ie(a.Df).apply(void 0, e)
            }
            function oe(e) {
                if ("compare"in e) {
                    var t = S(e);
                    return function(e) {
                        var n = t(e);
                        return function(e) {
                            return n((function(t, n) {
                                return e(n)
                            }
                            ))
                        }
                    }
                }
                return oe(a.Df)(e)
            }
            function ae() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                if (1 === e.length) {
                    var n = I(e[0]);
                    return function(e, t) {
                        return n(e, (function(e, n, r) {
                            return t(n, r)
                        }
                        ))
                    }
                }
                return ae(a.Df).apply(void 0, e)
            }
            var ce = function(e) {
                var t = {};
                for (var n in e)
                    if (i.e$.call(e, n)) {
                        var r = e[n];
                        i.pC(r) && (t[n] = r.value)
                    }
                return t
            }
              , ue = function(e) {
                var t = {}
                  , n = {};
                for (var r in e)
                    if (i.e$.call(e, r)) {
                        var s = e[r];
                        i.nM(s) ? t[r] = s.left : n[r] = s.right
                    }
                return (0,
                o.s4)(t, n)
            }
              , le = "ReadonlyRecord";
            function fe(e) {
                var t = m(e);
                return (0,
                r.f7)((function(e, n) {
                    return t(e)(n) && t(n)(e)
                }
                ))
            }
            function de(e) {
                return {
                    concat: function(t, n) {
                        if (u(t))
                            return n;
                        if (u(n))
                            return t;
                        var r = Object.assign({}, t);
                        for (var s in n)
                            i.e$.call(n, s) && (r[s] = i.e$.call(t, s) ? e.concat(t[s], n[s]) : n[s]);
                        return r
                    },
                    empty: v
                }
            }
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df;
            function pe(e, t) {
                return i.e$.call(void 0 === t ? this : t, e)
            }
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df,
            a.Df
        }
        ,
        643: (e, t, n) => {
            n.d(t, {
                H5: () => a,
                Kl: () => c,
                Lx: () => l,
                Pd: () => i,
                Yg: () => s,
                li: () => r,
                nq: () => f,
                pL: () => o,
                u4: () => u
            });
            n(169);
            function r(e) {
                return e[0]
            }
            function s(e) {
                return e[1]
            }
            var i = function(e, t) {
                return function(n) {
                    return [t(r(n)), e(s(n))]
                }
            }
              , o = function(e) {
                return function(t) {
                    return [e(r(t)), s(t)]
                }
            }
              , a = function(e) {
                return function(t) {
                    return [r(t), e(s(t))]
                }
            }
              , c = r
              , u = function(e, t) {
                return function(n) {
                    return t(e, r(n))
                }
            }
              , l = function() {
                return function(e) {
                    return function(t) {
                        return e(r(t))
                    }
                }
            }
              , f = function(e, t) {
                return function(n) {
                    return t(r(n), e)
                }
            }
        }
        ,
        794: (e, t, n) => {
            n.d(t, {
                Z$: () => u,
                Fp: () => a,
                VV: () => o,
                n_: () => c
            });
            var r, s = n(614), i = n(856), o = function(e) {
                return {
                    concat: i.VV(e)
                }
            }, a = function(e) {
                return {
                    concat: i.Fp(e)
                }
            }, c = function(e) {
                return {
                    concat: function(t, n) {
                        var r = {};
                        for (var i in e)
                            s.e$.call(e, i) && (r[i] = e[i].concat(t[i], n[i]));
                        return r
                    }
                }
            }, u = function() {
                return {
                    concat: function(e, t) {
                        return t
                    }
                }
            };
            r = void 0
        }
        ,
        49: (e, t, n) => {
            n.d(t, {
                F2: () => o,
                Vn: () => s,
                s4: () => r
            });
            n(169);
            var r = function(e, t) {
                return {
                    left: e,
                    right: t
                }
            }
              , s = function(e) {
                return function(t) {
                    return r(e(i(t)), o(t))
                }
            }
              , i = function(e) {
                return e.left
            }
              , o = function(e) {
                return e.right
            }
        }
        ,
        46: (e, t, n) => {
            n.d(t, {
                At: () => G,
                Do: () => z,
                Hi: () => v,
                Hr: () => U,
                PM: () => b,
                UA: () => k,
                UI: () => d,
                YO: () => q,
                ak: () => E,
                ap: () => p,
                dO: () => m,
                mU: () => S,
                of: () => g,
                pE: () => D,
                qA: () => w,
                qo: () => y,
                tD: () => c,
                tS: () => h,
                uU: () => O
            });
            var r = n(335)
              , s = n(755)
              , i = n(169)
              , o = n(289)
              , a = n(614)
              , c = function(e) {
                return function() {
                    return Promise.resolve().then(e)
                }
            };
            var u = function(e, t) {
                return (0,
                i.zG)(e, d(t))
            }
              , l = function(e, t) {
                return (0,
                i.zG)(e, p(t))
            }
              , f = function(e, t) {
                return (0,
                i.zG)(e, h(t))
            }
              , d = function(e) {
                return function(t) {
                    return function() {
                        return Promise.resolve().then(t).then(e)
                    }
                }
            }
              , p = function(e) {
                return function(t) {
                    return function() {
                        return Promise.all([Promise.resolve().then(t), Promise.resolve().then(e)]).then((function(e) {
                            return (0,
                            e[0])(e[1])
                        }
                        ))
                    }
                }
            }
              , g = function(e) {
                return function() {
                    return Promise.resolve(e)
                }
            }
              , h = function(e) {
                return function(t) {
                    return function() {
                        return Promise.resolve().then(t).then((function(t) {
                            return e(t)()
                        }
                        ))
                    }
                }
            }
              , _ = "Task";
            var m = {
                URI: _,
                map: u
            }
              , b = {
                URI: _,
                of: g
            }
              , v = {
                URI: _,
                map: u,
                ap: l
            }
              , w = {
                URI: _,
                map: u,
                ap: l,
                of: g
            }
              , y = {
                URI: _,
                map: u,
                ap: l,
                chain: f
            }
              , k = {
                URI: _,
                map: u,
                of: g,
                ap: l,
                chain: f
            }
              , S = (i.yR,
            (0,
            r.m)(y))
              , I = {
                URI: _,
                fromIO: c
            }
              , G = (0,
            s.At)(I, y)
              , z = g(a.F4)
              , q = (0,
            o.YO)(m)
              , U = (0,
            o.Hr)(m)
              , E = (0,
            r.a)(y)
              , x = g(a.Xl)
              , P = function(e) {
                var t = function(e) {
                    return function(t) {
                        return function() {
                            return Promise.all(t.map((function(t, n) {
                                return Promise.resolve().then((function() {
                                    return e(n, t)()
                                }
                                ))
                            }
                            )))
                        }
                    }
                }(e);
                return function(e) {
                    return a.Od(e) ? t(e) : x
                }
            }
              , C = function(e) {
                var t = function(e) {
                    return function(t) {
                        return function() {
                            return a.Gb(t).reduce((function(t, n, r) {
                                return t.then((function(t) {
                                    return Promise.resolve().then(e(r + 1, n)).then((function(e) {
                                        return t.push(e),
                                        t
                                    }
                                    ))
                                }
                                ))
                            }
                            ), Promise.resolve().then(e(0, a.YM(t))).then(a.ri))
                        }
                    }
                }(e);
                return function(e) {
                    return a.Od(e) ? t(e) : x
                }
            }
              , O = function(e) {
                return P((function(t, n) {
                    return e(n)
                }
                ))
            }
              , D = function(e) {
                return C((function(t, n) {
                    return e(n)
                }
                ))
            }
        }
        ,
        6: (e, t, n) => {
            n.d(t, {
                At: () => te,
                DT: () => W,
                EQ: () => G,
                F2: () => _,
                Hi: () => K,
                Hr: () => ie,
                Ij: () => ce,
                LV: () => z,
                OV: () => H,
                Op: () => w,
                QM: () => m,
                Qt: () => ae,
                UI: () => T,
                Vn: () => M,
                Y3: () => U,
                YO: () => se,
                Zl: () => L,
                ak: () => oe,
                dk: () => v,
                fF: () => k,
                fS: () => q,
                fX: () => J,
                fj: () => I,
                it: () => E,
                lk: () => b,
                oU: () => ee,
                of: () => N,
                t$: () => h,
                tD: () => y,
                tS: () => F,
                wE: () => re,
                wp: () => Y
            });
            var r = n(945)
              , s = n(335)
              , i = n(125)
              , o = n(906)
              , a = n(755)
              , c = n(241)
              , u = n(169)
              , l = n(289)
              , f = n(614)
              , d = n(46)
              , p = function(e, t, n, r) {
                return new (n || (n = Promise))((function(s, i) {
                    function o(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            i(e)
                        }
                    }
                    function c(e) {
                        var t;
                        e.done ? s(e.value) : (t = e.value,
                        t instanceof n ? t : new n((function(e) {
                            e(t)
                        }
                        ))).then(o, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }
                ))
            }
              , g = function(e, t) {
                var n, r, s, i, o = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                },
                "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }
                ),
                i;
                function a(i) {
                    return function(a) {
                        return function(i) {
                            if (n)
                                throw new TypeError("Generator is already executing.");
                            for (; o; )
                                try {
                                    if (n = 1,
                                    r && (s = 2 & i[0] ? r.return : i[0] ? r.throw || ((s = r.return) && s.call(r),
                                    0) : r.next) && !(s = s.call(r, i[1])).done)
                                        return s;
                                    switch (r = 0,
                                    s && (i = [2 & i[0], s.value]),
                                    i[0]) {
                                    case 0:
                                    case 1:
                                        s = i;
                                        break;
                                    case 4:
                                        return o.label++,
                                        {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++,
                                        r = i[1],
                                        i = [0];
                                        continue;
                                    case 7:
                                        i = o.ops.pop(),
                                        o.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = o.trys,
                                        (s = s.length > 0 && s[s.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                            o.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && o.label < s[1]) {
                                            o.label = s[1],
                                            s = i;
                                            break
                                        }
                                        if (s && o.label < s[2]) {
                                            o.label = s[2],
                                            o.ops.push(i);
                                            break
                                        }
                                        s[2] && o.ops.pop(),
                                        o.trys.pop();
                                        continue
                                    }
                                    i = t.call(e, o)
                                } catch (e) {
                                    i = [6, e],
                                    r = 0
                                } finally {
                                    n = s = 0
                                }
                            if (5 & i[0])
                                throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, a])
                    }
                }
            }
              , h = i.t$(d.PM)
              , _ = i.F2(d.PM)
              , m = i.m8(d.dO)
              , b = i.pk(d.dO)
              , v = (0,
            u.ls)(d.tD, m)
              , w = (0,
            u.ls)(d.tD, b)
              , y = v
              , k = m
              , S = d.of
              , I = d.tD
              , G = i.EQ(d.dO)
              , z = i.LV(d.UA)
              , q = i.fS(d.UA)
              , U = function(e, t) {
                return function() {
                    return p(void 0, void 0, void 0, (function() {
                        var n;
                        return g(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return r.trys.push([0, 2, , 3]),
                                [4, e().then(f.F2)];
                            case 1:
                                return [2, r.sent()];
                            case 2:
                                return n = r.sent(),
                                [2, f.t$(t(n))];
                            case 3:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
            }
              , E = function(e, t) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++)
                        n[r] = arguments[r];
                    return U((function() {
                        return e.apply(void 0, n)
                    }
                    ), t)
                }
            }
              , x = (d.dO,
            d.PM,
            d.PM,
            d.UA,
            d.UA,
            d.UA,
            d.UA,
            d.dO,
            function(e, t) {
                return (0,
                u.zG)(e, T(t))
            }
            )
              , P = function(e, t) {
                return (0,
                u.zG)(e, R(t))
            }
              , C = function(e, t) {
                return (0,
                u.zG)(e, F(t))
            }
              , O = function(e, t, n) {
                return (0,
                u.zG)(e, j(t, n))
            }
              , D = function(e, t) {
                return (0,
                u.zG)(e, M(t))
            }
              , A = function(e, t) {
                return (0,
                u.zG)(e, Y(t))
            }
              , T = i.UI(d.dO)
              , j = i.Pd(d.dO)
              , M = i.Vn(d.dO)
              , R = i.ap(d.Hi)
              , F = i.tS(d.UA)
              , L = F
              , Y = i.wp(d.UA)
              , N = _
              , Q = h
              , B = "TaskEither";
            var $ = {
                URI: B,
                map: x
            }
              , H = (0,
            l.OV)($)
              , K = {
                URI: B,
                map: x,
                ap: P
            }
              , V = {
                URI: B,
                map: x,
                ap: P,
                chain: C
            }
              , X = {
                URI: B,
                fromEither: S
            }
              , J = (0,
            o.fX)(X, V)
              , W = (0,
            o.DT)(X)
              , Z = {
                URI: B,
                fromIO: y
            }
              , ee = (0,
            a.oU)(Z, V)
              , te = (0,
            a.At)(Z, V)
              , ne = {
                URI: B,
                fromIO: y,
                fromTask: k
            }
              , re = (0,
            c.oU)(ne, V);
            f.F4;
            var se = (0,
            l.YO)($)
              , ie = (0,
            l.Hr)($)
              , oe = (0,
            s.a)(V)
              , ae = (0,
            r.Qt)(K)
              , ce = (f.Xl,
            {
                URI: B,
                bimap: O,
                mapLeft: D,
                map: x,
                of: N,
                ap: P,
                chain: C,
                alt: A,
                fromIO: y,
                fromTask: k,
                throwError: Q
            })
        }
        ,
        644: (e, t, n) => {
            n.d(t, {
                H5: () => o,
                Yg: () => i,
                li: () => s
            });
            var r = n(643)
              , s = (n(169),
            r.li)
              , i = r.Yg;
            var o = function(e) {
                return function(t) {
                    return [s(t), e(i(t))]
                }
            };
            r.Kl,
            r.Lx,
            r.u4,
            r.nq
        }
        ,
        226: (e, t, n) => {
            function r(e, t) {
                return function(n) {
                    var r = e.traverse(n);
                    return function(e, s) {
                        return n.map(r(e, s), t.separate)
                    }
                }
            }
            function s(e, t) {
                return function(n) {
                    var r = e.traverse(n);
                    return function(e, s) {
                        return n.map(r(e, s), t.compact)
                    }
                }
            }
            n.d(t, {
                BL: () => s,
                Fj: () => r
            })
        }
        ,
        302: (e, t, n) => {
            function r(e, t) {
                return function(n) {
                    return n ? t.of(void 0) : e.zero()
                }
            }
            n.d(t, {
                l: () => r
            })
        }
        ,
        169: (e, t, n) => {
            n.d(t, {
                MZ: () => i,
                Q1: () => l,
                SK: () => g,
                W8: () => a,
                a9: () => o,
                bc: () => d,
                gn: () => c,
                ls: () => f,
                nn: () => r,
                r5: () => u,
                yR: () => s,
                zG: () => p
            });
            var r = function(e) {
                return function(t) {
                    return t(e)
                }
            };
            function s(e) {
                return e
            }
            var i = s;
            function o(e) {
                return function() {
                    return e
                }
            }
            var a = o(!0)
              , c = o(null)
              , u = o(void 0)
              , l = u;
            function f(e, t, n, r, s, i, o, a, c) {
                switch (arguments.length) {
                case 1:
                    return e;
                case 2:
                    return function() {
                        return t(e.apply(this, arguments))
                    }
                    ;
                case 3:
                    return function() {
                        return n(t(e.apply(this, arguments)))
                    }
                    ;
                case 4:
                    return function() {
                        return r(n(t(e.apply(this, arguments))))
                    }
                    ;
                case 5:
                    return function() {
                        return s(r(n(t(e.apply(this, arguments)))))
                    }
                    ;
                case 6:
                    return function() {
                        return i(s(r(n(t(e.apply(this, arguments))))))
                    }
                    ;
                case 7:
                    return function() {
                        return o(i(s(r(n(t(e.apply(this, arguments)))))))
                    }
                    ;
                case 8:
                    return function() {
                        return a(o(i(s(r(n(t(e.apply(this, arguments))))))))
                    }
                    ;
                case 9:
                    return function() {
                        return c(a(o(i(s(r(n(t(e.apply(this, arguments)))))))))
                    }
                }
            }
            function d() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return e
            }
            function p(e, t, n, r, s, i, o, a, c) {
                switch (arguments.length) {
                case 1:
                    return e;
                case 2:
                    return t(e);
                case 3:
                    return n(t(e));
                case 4:
                    return r(n(t(e)));
                case 5:
                    return s(r(n(t(e))));
                case 6:
                    return i(s(r(n(t(e)))));
                case 7:
                    return o(i(s(r(n(t(e))))));
                case 8:
                    return a(o(i(s(r(n(t(e)))))));
                case 9:
                    return c(a(o(i(s(r(n(t(e))))))));
                default:
                    for (var u = arguments[0], l = 1; l < arguments.length; l++)
                        u = arguments[l](u);
                    return u
                }
            }
            var g = function(e, t) {
                return t
            }
        }
        ,
        614: (e, t, n) => {
            n.d(t, {
                F2: () => f,
                F4: () => m,
                G: () => a,
                Gb: () => h,
                Od: () => p,
                Wi: () => s,
                Xl: () => _,
                YM: () => g,
                YP: () => o,
                e$: () => b,
                nM: () => c,
                pC: () => i,
                r1: () => v,
                ri: () => d,
                t$: () => l,
                tO: () => u
            });
            var r = function(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, s = 0, i = t.length; s < i; s++)
                        !r && s in t || (r || (r = Array.prototype.slice.call(t, 0, s)),
                        r[s] = t[s]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
              , s = function(e) {
                return "None" === e._tag
            }
              , i = function(e) {
                return "Some" === e._tag
            }
              , o = {
                _tag: "None"
            }
              , a = function(e) {
                return {
                    _tag: "Some",
                    value: e
                }
            }
              , c = function(e) {
                return "Left" === e._tag
            }
              , u = function(e) {
                return "Right" === e._tag
            }
              , l = function(e) {
                return {
                    _tag: "Left",
                    left: e
                }
            }
              , f = function(e) {
                return {
                    _tag: "Right",
                    right: e
                }
            }
              , d = function(e) {
                return [e]
            }
              , p = function(e) {
                return e.length > 0
            }
              , g = function(e) {
                return e[0]
            }
              , h = function(e) {
                return e.slice(1)
            }
              , _ = []
              , m = {}
              , b = Object.prototype.hasOwnProperty
              , v = function(e) {
                return r([e[0]], e.slice(1), !0)
            }
        }
        ,
        52: (e, t, n) => {
            n.d(t, {
                Df: () => s,
                Eq: () => r,
                Pc: () => o
            });
            var r = {
                equals: function(e, t) {
                    return e === t
                }
            }
              , s = {
                equals: r.equals,
                compare: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                }
            }
              , i = (r.equals,
            s.compare,
            {
                concat: function(e, t) {
                    return e + t
                }
            })
              , o = {
                concat: i.concat,
                empty: 0
            }
        }
        ,
        229: (e, t, n) => {
            n.d(t, {
                Df: () => s,
                Eq: () => r,
                HD: () => i,
                xb: () => o
            });
            var r = {
                equals: function(e, t) {
                    return e === t
                }
            }
              , s = {
                equals: r.equals,
                compare: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                }
            }
              , i = function(e) {
                return "string" == typeof e
            }
              , o = function(e) {
                return 0 === e.length
            }
        }
        ,
        593: (e, t, n) => {
            n.d(t, {
                GL: () => a,
                HJ: () => c,
                N1: () => f,
                NC: () => r,
                RP: () => s,
                UM: () => u,
                t_: () => l
            });
            const r = performance.now()
              , s = (new Date).getTime();
            let i = []
              , o = !1;
            const a = e => function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                return c(( () => e(...n)))
            }
              , c = (e, t) => {
                if (!o) {
                    const n = self.setTimeout(e, t);
                    return () => self.clearTimeout(n)
                }
                let n;
                const r = () => {
                    void 0 !== n && o && i.length < 1e4 && i.push([n, performance.now()]),
                    n = void 0
                }
                  , s = [self.setTimeout(( () => {
                    n = performance.now(),
                    self.requestAnimationFrame(r),
                    e()
                }
                ), t), self.setTimeout(r, t)];
                return () => {
                    void 0 === n && s.forEach((e => self.clearTimeout(e)))
                }
            }
              , u = (e, t) => {
                if (!o) {
                    const n = self.setInterval(e, t);
                    return () => self.clearInterval(n)
                }
                let n = !1
                  , r = () => {}
                ;
                const s = self.setInterval(( () => {
                    r = c(( () => {
                        n || e()
                    }
                    ))
                }
                ), t);
                return () => {
                    n = !0,
                    r(),
                    self.clearInterval(s)
                }
            }
              , l = e => new Promise(( (t, n) => e.then(a(t), a(n))))
              , f = e => () => l(e())
        }
        ,
        532: (e, t, n) => {
            n.d(t, {
                g1: () => z,
                YO: () => S,
                oQ: () => T,
                a9: () => v,
                Ue: () => _,
                gS: () => m,
                D8: () => A,
                VS: () => q,
                xH: () => U,
                En: () => b,
                p4: () => D,
                fF: () => O,
                Hr: () => I,
                UI: () => y,
                u4: () => E,
                Rp: () => x,
                vP: () => P,
                bw: () => j,
                YP: () => w
            });
            var r = n(654)
              , s = n(144)
              , i = n(169)
              , o = n(507)
              , a = n(812)
              , c = n(937);
            function u(e) {
                let t = e
                  , n = []
                  , r = !1;
                return {
                    addListener(e) {
                        if (r)
                            return () => {}
                            ;
                        let s = t;
                        const i = () => {
                            Object.is(t, s) || (s = t,
                            e(t))
                        }
                        ;
                        n = [...n, i];
                        return () => {
                            n = n.filter((e => e !== i))
                        }
                    },
                    notify(e) {
                        if (r)
                            throw new Error("Ref bug: Attempted to notify a terminated notifier");
                        Object.is(e, t) || (t = e,
                        n.forEach((e => e())))
                    },
                    terminate() {
                        r = !0,
                        n = []
                    }
                }
            }
            function l(e, t) {
                let n = 0;
                return function() {
                    try {
                        if (n++ > 0)
                            throw new Error(e);
                        return t(...arguments)
                    } finally {
                        n--
                    }
                }
            }
            function f(e, t) {
                let n = [...new Set(e)].filter((e => "final" !== e.state));
                if (0 === n.length)
                    return {
                        state: "final",
                        onStateChange: () => () => {}
                    };
                const r = () => 0 === n.length ? "final" : n.some((e => "might_change" === e.state)) ? "might_change" : "nominal"
                  , [s,i] = d(r(), (e => "might_change" !== e && t()))
                  , o = () => i(r());
                return n.forEach((t => {
                    t.onStateChange((t => {
                        switch (t) {
                        case "final":
                            n = e.filter((e => "final" !== e.state)),
                            o();
                            break;
                        case "might_change":
                            i("might_change");
                            break;
                        case "nominal":
                            o();
                            break;
                        default:
                            throw new Error(`Ref bug: Invalid state ${t}`)
                        }
                    }
                    ))
                }
                )),
                s
            }
            function d(e, t) {
                if ("final" === e)
                    return [{
                        state: "final",
                        onStateChange: () => () => {}
                    }, () => {}
                    ];
                const {terminate: n, notify: r, addListener: s} = u(e)
                  , i = {
                    state: e,
                    onStateChange: s
                }
                  , o = l("Disallowed recursion in Branch.", (e => {
                    if ("final" === i.state) {
                        if ("final" === e)
                            return;
                        throw new Error(`Attempted to change state of final branch to ${e}.`)
                    }
                    try {
                        null == t || t(e),
                        i.state = e,
                        r(e)
                    } finally {
                        "final" === e && n()
                    }
                }
                ));
                return [i, o]
            }
            var p = n(289)
              , g = n(694);
            const h = "Ref";
            function _(e) {
                const [t,n,r] = function() {
                    const [e,t] = d("nominal")
                      , n = l("Disallowed recursion in Branch.", (n => {
                        if ("final" === e.state)
                            throw new Error("Attempted to mutate a finalized Ref.");
                        const r = e.state;
                        try {
                            t("might_change"),
                            n()
                        } finally {
                            t(r)
                        }
                    }
                    ));
                    return [e, n, () => t("final")]
                }()
                  , [s,i] = M(t, e);
                return [s, e => n(( () => i(e))), r]
            }
            function m(e) {
                let t = e.empty;
                const n = () => () => {
                    const n = t;
                    return t = e.empty,
                    n
                }
                  , [r,s,i] = _(n());
                return [r, r => {
                    t = e.concat(t, r),
                    s(n())
                }
                , i]
            }
            function b(e, t) {
                return n => {
                    let r = new Array(e).fill(t.empty);
                    return new Array(e).fill(null).map(( (e, s) => (0,
                    i.zG)(n, y(g.UI((e => {
                        const n = t.concat(r[s], e);
                        return r = r.map(( (n, r) => r === s ? t.empty : t.concat(n, e))),
                        n
                    }
                    ))))))
                }
            }
            function v(e) {
                return {
                    get current() {
                        return e
                    },
                    onChange: () => () => {}
                    ,
                    branch: {
                        state: "final",
                        onStateChange: () => () => {}
                    }
                }
            }
            function w(e) {
                return t => {
                    const n = t.onChange(e);
                    return e(t.current),
                    n
                }
            }
            function y(e, t) {
                if (t) {
                    const [n,r] = M(t.branch, e(t.current));
                    return t.onChange((t => r(e(t)))),
                    n
                }
                return t => y(e, t)
            }
            const k = {
                URI: h,
                map: (e, t) => y(t)(e)
            }
              , S = p.YO(k)
              , I = p.Hr(k)
              , G = e => q((t => y(t)(e)))
              , z = {
                URI: h,
                of: v,
                map: k.map,
                ap: (e, t) => G(t)(e)
            };
            function q(e, t) {
                return t ? U(y(e, t)) : t => U(y(e, t))
            }
            function U(e) {
                if ("final" === e.branch.state)
                    return e.current;
                const [t,n] = function(e, t) {
                    let n = t;
                    const r = [e.state, n.state].includes("might_change") ? "might_change" : "nominal"
                      , [s,i] = d(r)
                      , o = e => t => {
                        switch (t) {
                        case "final":
                            i(e().state);
                            break;
                        case "might_change":
                            i("might_change");
                            break;
                        case "nominal":
                            "might_change" === e().state ? i("might_change") : i("nominal");
                            break;
                        default:
                            throw new Error(`Ref bug: Unexpected upstream state ${t}`)
                        }
                    }
                    ;
                    e.onStateChange(o(( () => n)));
                    const a = o(( () => e));
                    let c = n.onStateChange(a);
                    return [s, e => {
                        n = e,
                        c(),
                        c = e.onStateChange(a),
                        a(n.state)
                    }
                    ]
                }(e.branch, e.current.branch)
                  , [r,s] = M(t, e.current.current);
                let i = e.current.onChange(s);
                return e.onChange((e => {
                    i(),
                    i = e.onChange(s),
                    n(e.branch),
                    s(e.current)
                }
                )),
                r
            }
            function E(e) {
                return t => {
                    if ("final" === t.branch.state)
                        return t;
                    let n = o.YP;
                    return y((t => {
                        if (o.Wi(n))
                            return n = o.G(t),
                            t;
                        const r = e(n.value, t);
                        return n = o.G(r),
                        r
                    }
                    ), t)
                }
            }
            function x() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return e => {
                    if (2 === t.length) {
                        let n = t[0];
                        return y((e => (n = t[1](n, e),
                        n)), e)
                    }
                    let n = o.bM();
                    return y((e => {
                        const r = t[0](n, e);
                        return n = o.G(r),
                        r
                    }
                    ), e)
                }
            }
            function P() {
                if (0 === arguments.length || R(arguments.length <= 0 ? void 0 : arguments[0]))
                    return C(...arguments);
                const e = arguments.length <= 0 ? void 0 : arguments[0]
                  , t = Object.keys(e);
                return (0,
                i.zG)(Object.values(e), (e => C(...e)), y((0,
                i.ls)(a.Su(( (e, n) => [t[e], n])), Object.fromEntries)))
            }
            function C() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if (0 === t.length)
                    return v([]);
                if (1 === t.length)
                    return y((e => [e]))(t[0]);
                let r = !1;
                t.forEach((e => e.onChange(( () => {
                    if ("might_change" !== e.branch.state)
                        throw new Error("Ref bug: Received a change notification without a `might_change` state.");
                    r = !0
                }
                ))));
                const s = t.map((0,
                c.vg)("branch"))
                  , i = () => {
                    r && (r = !1,
                    u(t.map((e => e.current))))
                }
                  , o = f(s, i)
                  , [a,u] = M(o, t.map((e => e.current)));
                return a
            }
            function O(e) {
                const [t,n,r] = _(o.YP);
                return e().then((0,
                i.ls)(o.G, n, r)),
                t
            }
            function D(e) {
                const [t,n,a] = _(o.YP);
                return e.then(s.F2).catch((0,
                i.ls)(r.w, s.t$)).then((0,
                i.ls)(o.G, n, a)),
                t
            }
            function A(e) {
                const t = e.hasOwnProperty("equals") ? e.equals : e;
                return E(( (e, n) => t(e, n) ? e : n))
            }
            function T(e) {
                return R(e) ? e : v(e)
            }
            function j(e) {
                return t => (w(e)(t),
                t)
            }
            function M(e, t) {
                if ("final" === e.state)
                    return [v(t), () => {}
                    ];
                const n = u(t);
                e.onStateChange((e => {
                    "final" === e && n.terminate()
                }
                ));
                let r = t;
                return [{
                    get current() {
                        return r
                    },
                    onChange: n.addListener,
                    branch: e
                }, l("Disallowed recursion in Ref.", (e => {
                    r = e,
                    n.notify(r)
                }
                ))]
            }
            function R(e) {
                return "object" == typeof e && null !== e && !Array.isArray(e) && "function" == typeof e.onChange
            }
        }
        ,
        240: (e, t, n) => {
            n.d(t, {
                Hr: () => _,
                K4: () => c,
                KD: () => v,
                UI: () => f,
                VS: () => p,
                YO: () => m,
                ak: () => h,
                bw: () => d,
                dQ: () => u,
                kR: () => w,
                of: () => l,
                vP: () => g,
                yi: () => b
            });
            var r = n(532)
              , s = n(169)
              , i = n(937)
              , o = n(450)
              , a = n(507);
            const c = e => (0,
            s.ls)((t => {
                let {previousState: n, ...r} = t;
                return e(r)
            }
            ), (e => ({
                value: e,
                state: r.a9(void 0)
            })))
              , u = s.yR
              , l = (0,
            s.ls)(s.a9, c)
              , f = e => t => (0,
            s.ls)(t, (0,
            i.rO)({
                value: e
            }))
              , d = e => t => (0,
            s.ls)(t, (0,
            i.rO)({
                value: (0,
                i.bw)(e)
            }));
            function p(e) {
                return t => n => {
                    let {previousState: s, ...i} = n;
                    const o = t({
                        previousState: Array.isArray(s) ? s[0] : void 0,
                        ...i
                    })
                      , a = e(o.value)({
                        previousState: Array.isArray(s) ? s[1] : void 0,
                        ...i
                    });
                    return {
                        value: a.value,
                        state: r.vP(o.state, a.state)
                    }
                }
            }
            function g(e) {
                return t => {
                    let {previousState: n, ...i} = t;
                    const a = S(n) ? n : {}
                      , c = (0,
                    s.zG)(e, o.Su(( (e, t) => t({
                        previousState: a[e],
                        ...i
                    }))));
                    return {
                        value: (0,
                        s.zG)(c, o.UI((e => e.value))),
                        state: (0,
                        s.zG)(c, o.UI((e => e.state)), (e => r.vP(e)))
                    }
                }
            }
            function h(e, t) {
                return n => (0,
                s.ls)((0,
                i.rO)({
                    previousState: k
                }), (i => {
                    const o = n(i)
                      , a = t(o.value)({
                        ...i,
                        previousState: i.previousState[e]
                    });
                    return {
                        value: (0,
                        s.zG)([o.value, a.value], (t => {
                            let[n,r] = t;
                            if (!S(n))
                                throw new Error("Service.bind() was passed an upstream Service with a non-record value.");
                            return {
                                ...n,
                                [e]: r
                            }
                        }
                        )),
                        state: (0,
                        s.zG)(r.vP(o.state, a.state), r.UI((t => {
                            let[n,r] = t;
                            if (void 0 === n)
                                return {
                                    [e]: r
                                };
                            if (!S(n))
                                throw new Error("Service.bind() was passed an upstream Service with a non-record state.");
                            return {
                                ...n,
                                [e]: r
                            }
                        }
                        )))
                    }
                }
                ))
            }
            const _ = (e, t) => f((n => ({
                ...n,
                [e]: t(n)
            })));
            function m(e) {
                return t => (0,
                s.ls)((0,
                i.rO)({
                    previousState: (0,
                    s.ls)(k, (t => t[e]))
                }), t, (0,
                i.rO)({
                    value: t => ({
                        [e]: t
                    }),
                    state: r.UI((t => ({
                        [e]: t
                    })))
                }))
            }
            const b = (e, t) => {
                const n = t || (t => t === e);
                return t => u((o => {
                    let {previousState: a, ...c} = o;
                    const u = Array.isArray(a) && 2 === a.length && n(a[0]) ? a[1] : void 0;
                    return (0,
                    s.zG)({
                        previousState: u,
                        ...c
                    }, t, (0,
                    i.rO)({
                        state: r.UI((t => [e, t]))
                    }))
                }
                ))
            }
              , v = e => {
                const t = e.slice(0, -1)
                  , n = e.slice(-1)[0]
                  , r = [...t.map((e => {
                    let[t,n] = e;
                    return [t, (0,
                    s.a9)(n)]
                }
                )), (0,
                s.a9)(n)];
                return w((0,
                i.lo)(r))
            }
            ;
            function w(e) {
                return (0,
                s.ls)(r.UI(e), y)
            }
            function y(e) {
                const t = (0,
                s.zG)(e, r.Rp(0, (e => e + 1)));
                return n => {
                    let {previousState: i, stopped: o, ...c} = n;
                    return (0,
                    s.zG)(r.vP(e, t), r.Rp(( (e, n) => {
                        let[u,l] = n;
                        return (0,
                        s.zG)(e, a.UI((e => e.state.current)), a.fS(( () => i)), (e => u({
                            previousState: e,
                            stopped: (0,
                            s.zG)(r.vP(o, t), r.UI((e => {
                                let[t,n] = e;
                                return t || n !== l
                            }
                            ))),
                            ...c
                        })))
                    }
                    )), (e => ({
                        value: r.UI((e => e.value), e),
                        state: r.VS((e => e.state), e)
                    })))
                }
            }
            function k(e) {
                return S(e) ? e : {}
            }
            function S(e) {
                return "object" == typeof e && null !== e
            }
        }
        ,
        127: (e, t, n) => {
            n.d(t, {
                d: () => f,
                m: () => l
            });
            var r = n(169)
              , s = n(144)
              , i = n(507)
              , o = n(532)
              , a = n(937)
              , c = n(240)
              , u = n(689);
            const l = e => c.dQ((t => {
                let {stopped: n, previousState: c} = t;
                const u = function(e) {
                    return _(e) ? e : {
                        validityKey: "",
                        lastSuccess: i.YP
                    }
                }(c)
                  , l = (0,
                r.zG)(u, (e => ({
                    ...e,
                    inFlight: i.YP,
                    lastSuccess: (0,
                    r.zG)(e.lastSuccess, i.UI(s.F2))
                })))
                  , f = (0,
                r.zG)(e, o.UI((e => "currentTimestampSecs"in e && "freshness"in e && "validity"in e ? e : {
                    currentTimestampSecs: 0,
                    validity: {
                        key: e.validityKey,
                        maxAge: Number.MAX_SAFE_INTEGER
                    },
                    freshness: {
                        key: e.freshnessKey,
                        maxAge: Number.MAX_SAFE_INTEGER
                    },
                    refresh: e.refresh
                })), (e => o.vP(e, n)), o.Rp(o.a9(l), ( (e, t) => {
                    let[n,c] = t;
                    if (c)
                        return e;
                    const u = n.validity.key()
                      , l = i.hX((e => n.currentTimestampSecs - e.timestamp <= n.validity.maxAge))
                      , f = (0,
                    a.HP)(n.freshness.key)
                      , d = i.hX((e => n.currentTimestampSecs - e.timestamp <= n.freshness.maxAge && e.freshnessKey === f()))
                      , p = (0,
                    r.zG)(e, o.UI((0,
                    r.ls)(i.DT((e => e.validityKey === u)), i.EQ(( () => ({
                        validityKey: u,
                        inFlight: i.YP,
                        lastSuccess: i.YP
                    })), (0,
                    a.rO)({
                        inFlight: l,
                        lastSuccess: i.tS(s.EQ((e => i.G(s.t$(e))), (0,
                        r.ls)(i.G, l, i.UI((e => s.F2(e))))))
                    })))), o.D8(g()));
                    if ((0,
                    r.zG)(p.current, (e => (0,
                    r.zG)(e.inFlight, i.wp(( () => (0,
                    r.zG)(e.lastSuccess, i.tS(i.Uo)))), d, i.pC))))
                        return p;
                    const h = () => ({
                        timestamp: n.currentTimestampSecs,
                        freshnessKey: f(),
                        output: i.YP
                    });
                    return (0,
                    r.zG)(n.refresh, i.EQ(( () => p), (0,
                    r.ls)((0,
                    r.nn)({
                        previous: (0,
                        r.zG)(p.current.lastSuccess, i.tS(i.Uo), i.tS((e => e.output)))
                    }), o.fF, o.UI(i.EQ(( () => (0,
                    r.zG)(p, o.UI((0,
                    a.rO)({
                        inFlight: () => i.G(h())
                    })))), s.EQ((e => (0,
                    r.zG)(p, o.UI((0,
                    a.rO)({
                        inFlight: () => i.YP,
                        lastSuccess: (0,
                        r.ls)(i.tS((0,
                        r.ls)(i.Uo, i.hX((e => i.pC(e.output))))), s.Yo(( () => e)), i.G)
                    })))), (e => o.a9({
                        validityKey: u,
                        inFlight: i.YP,
                        lastSuccess: i.G(s.F2({
                            ...h(),
                            output: i.G(e)
                        }))
                    }))))), o.xH)))
                }
                )), o.xH, o.D8(g()))
                  , d = (0,
                r.zG)(f, o.UI((e => ({
                    validityKey: e.validityKey,
                    lastSuccess: (0,
                    r.zG)(e.lastSuccess, i.tS(i.Uo))
                }))), o.D8(h()))
                  , p = (0,
                r.zG)(d, o.Rp(-1, (e => e + 1)));
                return {
                    value: (0,
                    r.zG)(f, o.UI((0,
                    r.ls)((0,
                    a.vg)("lastSuccess"), i.UI(s.UI((e => e.output))), i.fS(( () => s.F2(i.YP)))))),
                    state: (0,
                    r.zG)(o.vP(d, p), o.UI((e => {
                        let[t,n] = e;
                        return n > 0 ? t : h().equals(t, u) ? c : t
                    }
                    )))
                }
            }
            ))
              , f = e => t => (0,
            r.ls)((0,
            a.rO)({
                previousState: (0,
                r.ls)(i.DT(_), i.YO("s1"), i.Hr("s2", (t => {
                    let {s1: n} = t;
                    return (0,
                    r.zG)(n, (0,
                    a.rO)({
                        lastSuccess: i.UI((0,
                        a.rO)({
                            output: i.tS(e)
                        }))
                    }))
                }
                )), i.UI((e => {
                    let {s1: t, s2: n} = e;
                    return h().equals(t, n) ? t : n
                }
                )), i.FS)
            }), t)
              , d = () => u.n_({
                freshnessKey: (0,
                a.Or)(),
                timestamp: (0,
                a.Or)(),
                output: i.Eh((0,
                a.Or)())
            });
            function p(e) {
                return "object" == typeof e && null !== e && (!(!("freshnessKey"in e) || !m(e.freshnessKey)) && ("timestamp"in e && "number" == typeof e.timestamp && !(!("output"in e) || !(0,
                a.El)(e.output))))
            }
            const g = () => u.n_({
                validityKey: (0,
                a.Or)(),
                inFlight: i.Eh(d()),
                lastSuccess: i.Eh(s.Eh((0,
                a.Or)(), d()))
            })
              , h = () => u.n_({
                validityKey: (0,
                a.Or)(),
                lastSuccess: i.Eh(d())
            });
            function _(e) {
                return "object" == typeof e && null !== e && (!(!("validityKey"in e) || !m(e.validityKey)) && !!("lastSuccess"in e && (0,
                a.El)(e.lastSuccess) && (0,
                r.zG)(e.lastSuccess, i.EQ(( () => !0), p))))
            }
            function m(e) {
                return null === e || "string" == typeof e || "number" == typeof e
            }
        }
        ,
        234: (e, t, n) => {
            n.r(t),
            n.d(t, {
                PermutiveActivationManagerWeb: () => o,
                optimisedActivationsConfig: () => i
            });
            class r {
                logger;
                permutive;
                id;
                segmentCode;
                triggerType;
                config;
                workspaceLevelConfig;
                prefix = "[Activation]";
                constructor(e, t, n, r, s, i, o) {
                    this.logger = e,
                    this.permutive = t,
                    this.id = n,
                    this.segmentCode = r,
                    this.triggerType = s,
                    this.config = i,
                    this.workspaceLevelConfig = o
                }
                getSegmentCode() {
                    return this.segmentCode
                }
                getTriggerType() {
                    return this.triggerType
                }
                getConfig() {
                    return this.config
                }
                getWorkspaceLevelConfig() {
                    return this.workspaceLevelConfig
                }
                trackImpression(e) {
                    return this.trackActivation("impression", e)
                }
                trackConversion(e) {
                    return this.trackActivation("conversion", e)
                }
                trackActivation(e, t) {
                    const n = {
                        reaction_id: this.id,
                        type: e
                    };
                    this.permutive.track("Reaction", n, t),
                    this.logger.log(this.prefix, n.type, n)
                }
            }
            var s = n(973);
            const i = {
                dfp: {
                    dfp: [172215, 95201, 140685, 106906, 89492, 173895, 173924, 114192, 56344, 173884, 77811, 167460, 89784, 167455, 88766, 167473, 167459, 124278, 173906, 173896, 89495, 172214, 100803, 41376, 114028, 173890, 173926, 96020, 173883, 105719, 58133, 173898, 173901, 107326, 98239, 167464, 173902, 92956, 89496, 173908, 90032, 167467, 89786, 157446, 173918, 117411, 173925, 92886, 167468, 173881, 56634, 173876, 124457, 127898, 173931, 167462, 114973, 89497, 88505, 172948, 157502, 174346, 100580, 139769, 173889, 173891, 167461, 105851, 173919, 105717, 167474, 123650, 70302, 133840, 173877, 173909, 91149, 92957, 41414, 92946, 172220, 90449, 89782, 167475, 132352, 89781, 172225, 173888, 114701, 174345, 74314, 167472, 146705, 122439, 172216, 107324, 173880, 120744, 124656, 173907, 39204, 173913, 173917, 94752, 167458, 168072, 173900, 89780, 125544, 114702, 89783, 167463, 173932, 167457, 173910, 122872, 133758, 167456, 172275, 73331, 88504, 134592, 136107, 90033, 89494, 167471, 173878, 167476, 117410, 73342, 173897, 89747, 167466, 172221, 88624, 91654, 89493, 92947, 132239, 173920, 75548, 105718, 174344, 173927, 173916, 173929, 172219, 173922, 90034, 167477, 173879, 172218, 114096, 175844, 175840, 175818, 175830, 175812, 175832, 175814, 175820, 175824, 175835, 175826, 175842, 175822, 175555, 175810, 175806, 175804, 176884, 176887, 176888, 176889, 176890, 176891, 176892, 176893, 176894, 176895, 176897, 176898, 176899, 176902, 176903, 176905, 176904, 176908, 176910, 176911, 176913, 176914, 176916, 176918, 176919, 176920, 176921, 176923, 176924, 176953, 176955, 176957, 176968, 176967, 177226, 178814, 180951, 180952, 180953, 180956, 180957, 180959, 181008, 184006, 184706, 185040, 186327, 186328, 187218, 188255, 188393, 189307, 189338, 189339, 189340, 189341, 189342, 164201, 192184, 193201, 188921, 194112, 194111, 188922, 188920, 194113, 194541, 194542, 194543, 195230, 196455, 196454, 196328, 185107, 197769, 196939, 203327, 206662, 186897, 207689, 207465, 208648, 210889, 211065, 211857, 212119, 213030, 213800, 213933, 214072, 214075, 214073, 214076, 214227, 214925, 214926, 214317, 175798, 173911, 216183, 216262, 188096, 216215, 217787, 217822, 218446, 219231, 221912, 222250, 225088, 226837, 226928, 227134, 229655, 230962, 231667, 231785, 232022],
                    dfp_legacy: {}
                },
                eyeota_pixel: [],
                dbm: {
                    omitted: 0
                },
                appnexus: {},
                appnexus_adserver: [39204, 149125],
                nativo: [],
                rubicon_ssp: [],
                smart: [],
                freewheel: [],
                curation_platforms: {}
            };
            class o {
                logger;
                permutive;
                clientContext;
                constructor(e, t, n) {
                    this.logger = e,
                    this.permutive = t,
                    this.clientContext = n
                }
                getSpecializedActivations(e) {
                    return i[e]
                }
                getActivations(e) {
                    return (0,
                    s.Hn)(e)("activationConfigs", []).filter((e => this.areContextCriteriaSatisfied(e))).map((e => new r(this.logger,this.permutive,e.id,e.sc,e.tt,e.c,e.wc)))
                }
                areContextCriteriaSatisfied(e) {
                    const t = e.cc
                      , n = e => {
                        const t = this.clientContext.getContext()[e.key];
                        switch (e.comparison) {
                        case "EQUALS":
                            return t === e.value;
                        case "NOT_EQUALS":
                            return t !== e.value;
                        case "CONTAINS":
                            return "string" == typeof t && t.indexOf(e.value) >= 0;
                        case "NOT_CONTAINS":
                            return "string" == typeof t && t.indexOf(e.value) < 0
                        }
                    }
                    ;
                    return !t || ("AND" === (r = t).operator ? r.criteria.every(n) : r.criteria.some(n));
                    var r
                }
            }
        }
        ,
        973: (e, t, n) => {
            n.d(t, {
                Hn: () => s
            });
            const r = {
                standard_cohorts: {
                    auto_init: !0,
                    standard_audiences: {
                        affinity_enabled: !0
                    },
                    activationConfigs: []
                },
                ssp: {
                    auto_init: !0,
                    ssps: ["google_pps"],
                    cohort_mapping: {
                        1e7: "bgyz",
                        10000001: "bhgp",
                        10000002: "bhhc",
                        10000003: "bhhg",
                        10000004: "bhhk",
                        10000005: "bhhp",
                        10000006: "bhhv",
                        10000007: "bhhy",
                        10000008: "bhie",
                        10000010: "bhis",
                        10000011: "bhiz",
                        10000012: "bhji",
                        10000013: "bhjq",
                        10000014: "bhka",
                        10000015: "bhkl",
                        10000016: "bhkr",
                        10000017: "bhky",
                        10000018: "bhlg",
                        10000019: "bhli",
                        10000020: "bhlo",
                        10000021: "bhlp",
                        10000022: "bhnd",
                        10000023: "bhnl",
                        10000024: "bhnp",
                        10000025: "bhnw",
                        10000026: "bhoj",
                        10000035: "bgzb",
                        10000036: "bhgq",
                        10000037: "bhgs",
                        10000038: "bhgw",
                        10000039: "bhgy",
                        10000040: "bhgz",
                        10000041: "bhhe",
                        10000042: "bhhh",
                        10000043: "bhhw",
                        10000044: "bhhx",
                        10000045: "bhhz",
                        10000046: "bhia",
                        10000047: "bhif",
                        10000048: "bhig",
                        10000049: "bhii",
                        10000050: "bhij",
                        10000051: "bhik",
                        10000052: "bhim",
                        10000053: "bhip",
                        10000054: "bhit",
                        10000055: "bhiu",
                        10000056: "bhiv",
                        10000057: "bhiy",
                        10000058: "bhjm",
                        10000059: "bhjr",
                        10000060: "bhjs",
                        10000061: "bhjw",
                        10000062: "bhjx",
                        10000063: "bhkm",
                        10000064: "bhir",
                        10000065: "bhko",
                        10000066: "bhkp",
                        10000067: "bhkq",
                        10000068: "bhkz",
                        10000069: "bhla",
                        10000070: "bhlb",
                        10000071: "bhle",
                        10000072: "bhlf",
                        10000073: "bhlq",
                        10000074: "bhlt",
                        10000075: "bhlu",
                        10000076: "bhlw",
                        10000077: "bhlx",
                        10000078: "bhly",
                        10000079: "bhmb",
                        10000080: "bhmi",
                        10000081: "bhmj",
                        10000082: "bhml",
                        10000083: "bhmp",
                        10000084: "bhmr",
                        10000085: "bhmw",
                        10000086: "bhmz",
                        10000087: "bhne",
                        10000088: "bhnf",
                        10000089: "bhni",
                        10000090: "bhnn",
                        10000324: "bhhj",
                        10000325: "bhhi",
                        10000327: "bhku",
                        10000328: "bhkt",
                        10000329: "bhkw",
                        10000330: "bhkv",
                        10000687: "bgzc",
                        10000688: "bgza",
                        10000689: "bhha",
                        10000690: "bhgt",
                        10000691: "bhgx",
                        10000692: "bhgv",
                        10000693: "bhgr",
                        10000694: "bhgu",
                        10000695: "bhhb",
                        10000696: "bhhd",
                        10000697: "bhhf",
                        10000698: "bhhl",
                        10000699: "bhho",
                        10000700: "bhhm",
                        10000701: "bhhn",
                        10000702: "bhhq",
                        10000703: "bhht",
                        10000704: "bhhu",
                        10000705: "bhhs",
                        10000706: "bhhr",
                        10000707: "bhib",
                        10000708: "bhid",
                        10000709: "bhic",
                        10000710: "bhio",
                        10000711: "bhin",
                        10000712: "bhil",
                        10000713: "bhiq",
                        10000714: "bhih",
                        10000715: "bhiw",
                        10000716: "bhix",
                        10000717: "bhja",
                        10000718: "bhjc",
                        10000719: "bhjd",
                        10000720: "bhje",
                        10000721: "bhjf",
                        10000722: "bhjb",
                        10000723: "bhjg",
                        10000724: "bhjh",
                        10000725: "bhjo",
                        10000726: "bhjk",
                        10000727: "bhjn",
                        10000728: "bhjj",
                        10000729: "bhjl",
                        10000730: "bhjy",
                        10000731: "bhju",
                        10000732: "bhjv",
                        10000733: "bhjz",
                        10000734: "bhjt",
                        10000735: "bhkj",
                        10000736: "bhkk",
                        10000737: "bhki",
                        10000738: "bhkd",
                        10000739: "bhkc",
                        10000740: "bhkf",
                        10000741: "bhkh",
                        10000742: "bhkb",
                        10000743: "bhkg",
                        10000744: "bhke",
                        10000745: "bhjp",
                        10000746: "bhkn",
                        10000747: "bhkx",
                        10000748: "bhks",
                        10000749: "bhld",
                        10000750: "bhlc",
                        10000751: "bhlh",
                        10000752: "bhlk",
                        10000753: "bhlj",
                        10000754: "bhll",
                        10000755: "bhlm",
                        10000756: "bhlv",
                        10000757: "bhna",
                        10000758: "bhmv",
                        10000759: "bhmt",
                        10000760: "bhmy",
                        10000761: "bhmc",
                        10000762: "bhmo",
                        10000763: "bhls",
                        10000764: "bhmq",
                        10000765: "bhme",
                        10000766: "bhmh",
                        10000767: "bhlz",
                        10000768: "bhlr",
                        10000769: "bhnb",
                        10000770: "bhmk",
                        10000771: "bhmu",
                        10000772: "bhmx",
                        10000773: "bhmg",
                        10000774: "bhmd",
                        10000775: "bhmf",
                        10000776: "bhnc",
                        10000777: "bhmn",
                        10000778: "bhmm",
                        10000779: "bhma",
                        10000780: "bhms",
                        10000781: "bhng",
                        10000782: "bhnj",
                        10000783: "bhnh",
                        10000784: "bhnk",
                        10000785: "bhno",
                        10000786: "bhnm",
                        10000787: "bhnu",
                        10000788: "bhnv",
                        10000789: "bhns",
                        10000790: "bhnt",
                        10000791: "bhnq",
                        10000792: "bhnr",
                        10000793: "bhob",
                        10000794: "bhny",
                        10000795: "bhod",
                        10000796: "bhoh",
                        10000797: "bhog",
                        10000798: "bhnz",
                        10000799: "bhoa",
                        10000800: "bhoe",
                        10000801: "bhnx",
                        10000802: "bhoc",
                        10000803: "bhof"
                    },
                    all_cohort_mapping: {
                        1e7: ["bgyz"],
                        10000001: ["bhgp"],
                        10000002: ["bhhc"],
                        10000003: ["bhhg"],
                        10000004: ["bhhk"],
                        10000005: ["bhhp"],
                        10000006: ["bhhv"],
                        10000007: ["bhhy"],
                        10000008: ["bhie"],
                        10000010: ["bhis"],
                        10000011: ["bhiz"],
                        10000012: ["bhji"],
                        10000013: ["bhjq"],
                        10000014: ["bhka"],
                        10000015: ["bhkl"],
                        10000016: ["bhkr"],
                        10000017: ["bhky"],
                        10000018: ["bhlg"],
                        10000019: ["bhli"],
                        10000020: ["bhlo"],
                        10000021: ["bhlp"],
                        10000022: ["bhnd"],
                        10000023: ["bhnl"],
                        10000024: ["bhnp"],
                        10000025: ["bhnw"],
                        10000026: ["bhoj"],
                        10000035: ["bgzb"],
                        10000036: ["bhgq"],
                        10000037: ["bhgs"],
                        10000038: ["bhgw"],
                        10000039: ["bhgy"],
                        10000040: ["bhgz"],
                        10000041: ["bhhe"],
                        10000042: ["bhhh"],
                        10000043: ["bhhw"],
                        10000044: ["bhhx"],
                        10000045: ["bhhz"],
                        10000046: ["bhia"],
                        10000047: ["bhif"],
                        10000048: ["bhig"],
                        10000049: ["bhii"],
                        10000050: ["bhij"],
                        10000051: ["bhik"],
                        10000052: ["bhim"],
                        10000053: ["bhip"],
                        10000054: ["bhit"],
                        10000055: ["bhiu"],
                        10000056: ["bhiv"],
                        10000057: ["bhiy"],
                        10000058: ["bhjm"],
                        10000059: ["bhjr"],
                        10000060: ["bhjs"],
                        10000061: ["bhjw"],
                        10000062: ["bhjx"],
                        10000063: ["bhkm"],
                        10000064: ["bhir"],
                        10000065: ["bhko"],
                        10000066: ["bhkp"],
                        10000067: ["bhkq"],
                        10000068: ["bhkz"],
                        10000069: ["bhla"],
                        10000070: ["bhlb"],
                        10000071: ["bhle"],
                        10000072: ["bhlf"],
                        10000073: ["bhlq"],
                        10000074: ["bhlt"],
                        10000075: ["bhlu"],
                        10000076: ["bhlw"],
                        10000077: ["bhlx"],
                        10000078: ["bhly"],
                        10000079: ["bhmb"],
                        10000080: ["bhmi"],
                        10000081: ["bhmj"],
                        10000082: ["bhml"],
                        10000083: ["bhmp"],
                        10000084: ["bhmr"],
                        10000085: ["bhmw"],
                        10000086: ["bhmz"],
                        10000087: ["bhne"],
                        10000088: ["bhnf"],
                        10000089: ["bhni"],
                        10000090: ["bhnn"],
                        10000324: ["bhhj"],
                        10000325: ["bhhi"],
                        10000327: ["bhku"],
                        10000328: ["bhkt"],
                        10000329: ["bhkw"],
                        10000330: ["bhkv"],
                        10000687: ["bgzc"],
                        10000688: ["bgza"],
                        10000689: ["bhha"],
                        10000690: ["bhgt"],
                        10000691: ["bhgx"],
                        10000692: ["bhgv"],
                        10000693: ["bhgr"],
                        10000694: ["bhgu"],
                        10000695: ["bhhb"],
                        10000696: ["bhhd"],
                        10000697: ["bhhf"],
                        10000698: ["bhhl"],
                        10000699: ["bhho"],
                        10000700: ["bhhm"],
                        10000701: ["bhhn"],
                        10000702: ["bhhq"],
                        10000703: ["bhht"],
                        10000704: ["bhhu"],
                        10000705: ["bhhs"],
                        10000706: ["bhhr"],
                        10000707: ["bhib"],
                        10000708: ["bhid"],
                        10000709: ["bhic"],
                        10000710: ["bhio"],
                        10000711: ["bhin"],
                        10000712: ["bhil"],
                        10000713: ["bhiq"],
                        10000714: ["bhih"],
                        10000715: ["bhiw"],
                        10000716: ["bhix"],
                        10000717: ["bhja"],
                        10000718: ["bhjc"],
                        10000719: ["bhjd"],
                        10000720: ["bhje"],
                        10000721: ["bhjf"],
                        10000722: ["bhjb"],
                        10000723: ["bhjg"],
                        10000724: ["bhjh"],
                        10000725: ["bhjo"],
                        10000726: ["bhjk"],
                        10000727: ["bhjn"],
                        10000728: ["bhjj"],
                        10000729: ["bhjl"],
                        10000730: ["bhjy"],
                        10000731: ["bhju"],
                        10000732: ["bhjv"],
                        10000733: ["bhjz"],
                        10000734: ["bhjt"],
                        10000735: ["bhkj"],
                        10000736: ["bhkk"],
                        10000737: ["bhki"],
                        10000738: ["bhkd"],
                        10000739: ["bhkc"],
                        10000740: ["bhkf"],
                        10000741: ["bhkh"],
                        10000742: ["bhkb"],
                        10000743: ["bhkg"],
                        10000744: ["bhke"],
                        10000745: ["bhjp"],
                        10000746: ["bhkn"],
                        10000747: ["bhkx"],
                        10000748: ["bhks"],
                        10000749: ["bhld"],
                        10000750: ["bhlc"],
                        10000751: ["bhlh"],
                        10000752: ["bhlk"],
                        10000753: ["bhlj"],
                        10000754: ["bhll"],
                        10000755: ["bhlm"],
                        10000756: ["bhlv"],
                        10000757: ["bhna"],
                        10000758: ["bhmv"],
                        10000759: ["bhmt"],
                        10000760: ["bhmy"],
                        10000761: ["bhmc"],
                        10000762: ["bhmo"],
                        10000763: ["bhls"],
                        10000764: ["bhmq"],
                        10000765: ["bhme"],
                        10000766: ["bhmh"],
                        10000767: ["bhlz"],
                        10000768: ["bhlr"],
                        10000769: ["bhnb"],
                        10000770: ["bhmk"],
                        10000771: ["bhmu"],
                        10000772: ["bhmx"],
                        10000773: ["bhmg"],
                        10000774: ["bhmd"],
                        10000775: ["bhmf"],
                        10000776: ["bhnc"],
                        10000777: ["bhmn"],
                        10000778: ["bhmm"],
                        10000779: ["bhma"],
                        10000780: ["bhms"],
                        10000781: ["bhng"],
                        10000782: ["bhnj"],
                        10000783: ["bhnh"],
                        10000784: ["bhnk"],
                        10000785: ["bhno"],
                        10000786: ["bhnm"],
                        10000787: ["bhnu"],
                        10000788: ["bhnv"],
                        10000789: ["bhns"],
                        10000790: ["bhnt"],
                        10000791: ["bhnq"],
                        10000792: ["bhnr"],
                        10000793: ["bhob"],
                        10000794: ["bhny"],
                        10000795: ["bhod"],
                        10000796: ["bhoh"],
                        10000797: ["bhog"],
                        10000798: ["bhnz"],
                        10000799: ["bhoa"],
                        10000800: ["bhoe"],
                        10000801: ["bhnx"],
                        10000802: ["bhoc"],
                        10000803: ["bhof"]
                    },
                    affinity_enabled: !0,
                    activationConfigs: []
                },
                overlays: {
                    auto_init: !0,
                    activationConfigs: []
                },
                rubicon_ssp: {
                    auto_init: !0,
                    publisher_id: "29410",
                    activationConfigs: []
                },
                local_storage: {
                    auto_init: !0,
                    activationConfigs: [{
                        id: "0f64b862-b8c4-4fbc-b9db-3e8f1e54aa12",
                        tt: "EveryTime",
                        sc: 39204,
                        c: {
                            storage_key: "_pindexs"
                        },
                        wc: {}
                    }, {
                        id: "f6c72179-e550-4ffb-9f10-b5d742e81a24",
                        tt: "EveryTime",
                        sc: 39204,
                        c: {
                            storage_key: "_ppiano"
                        },
                        wc: {}
                    }]
                },
                scriptrunner: {
                    auto_init: !0,
                    activationConfigs: []
                },
                contextual: {
                    auto_init: !0,
                    script_deployed: !0,
                    activationConfigs: []
                },
                geoip: {
                    auto_init: !1,
                    activationConfigs: []
                },
                clean_room: {
                    auto_init: !0,
                    pass_cohorts_to_prebid: !0,
                    cohort_ssp_config: [],
                    activationConfigs: []
                },
                google_pps__curation_platform: {
                    auto_init: !0,
                    activation_method: "prebid",
                    ssp_code: "google_pps",
                    type: "curation_platform",
                    activationConfigs: []
                },
                dfp: {
                    auto_init: !0,
                    track_slot_rendered: !1,
                    track_slot_viewable: !0,
                    track_slot_clicked: !0,
                    activationConfigs: []
                },
                gam_log: {
                    auto_init: !0,
                    activationConfigs: []
                },
                tracking_pixel: {
                    auto_init: !0,
                    activationConfigs: []
                },
                prebid: {
                    auto_init: !0,
                    revenue_insights_enabled: !0,
                    data_provider_config: {
                        ac_bidders: ["ozone", "rubicon", "appnexus", "openx", "ix"]
                    },
                    activationConfigs: []
                },
                web: {
                    auto_init: !1,
                    add_alchemy_taxonomy: !1,
                    add_alchemy_entities: !1,
                    engagement_edge_only: !0,
                    segment_transition_edge_only: !0,
                    activationConfigs: []
                },
                appnexus_adserver: {
                    auto_init: !0,
                    activationConfigs: []
                },
                publishers: {
                    auto_init: !1,
                    add_alchemy_taxonomy: !0,
                    add_alchemy_entities: !1,
                    activationConfigs: []
                }
            }
              , s = e => {
                const t = r[e];
                return (e, n) => (null == t ? void 0 : t[e]) ?? n
            }
            ;
            s("web"),
            s("dfp"),
            s("facebook_pixel_v2")
        }
        ,
        153: (e, t, n) => {
            n.d(t, {
                X: () => s,
                k: () => r
            });
            const r = e => ({
                id: e.id,
                name: e.name,
                time: new Date(e.time),
                properties: e.properties || {},
                session_id: e.session_id,
                view_id: e.view_id
            })
              , s = e => ({
                id: e.id,
                name: e.name,
                time: (i(e.time) ? e.time : new Date).toISOString(),
                properties: e.properties || {},
                session_id: e.session_id,
                view_id: e.view_id
            })
              , i = e => isFinite(e) && e instanceof Date
        }
        ,
        729: (e, t, n) => {
            n.d(t, {
                F: () => u,
                I: () => c
            });
            var r = n(532)
              , s = n(694)
              , i = n(812)
              , o = n(169)
              , a = n(937);
            const c = (e, t) => {
                let n = !1;
                return r.UI(s.UI((0,
                a.bw)((r => {
                    n || (n = (0,
                    o.zG)(r, i.G((e => {
                        let[,t] = e;
                        return "Pageview" === t.name
                    }
                    ))),
                    n && e.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                        timestamp_name: t,
                        time_origin: "sdk_init"
                    }))
                }
                ))))
            }
              , u = (e, t) => {
                const n = c(e, t);
                return (0,
                o.ls)(r.En(2, i.uZ()), (e => {
                    let[t,s] = e;
                    return (0,
                    o.zG)(s, n, r.UI((e => e()))),
                    t
                }
                ))
            }
        }
        ,
        525: (e, t, n) => {
            n.r(t),
            n.d(t, {
                service: () => Fi
            });
            var r = n(169)
              , s = n(240)
              , i = n(532)
              , o = n(507)
              , a = n(643);
            const c = e => {
                const t = e.current;
                return (0,
                r.zG)(e, i.UI((e => e === t ? {
                    segmentsEntered: [],
                    segmentsExited: []
                } : {
                    segmentsEntered: (0,
                    r.zG)(e, l(t)),
                    segmentsExited: (0,
                    r.zG)(t, l(e))
                })))
            }
              , u = e => new Set(e)
              , l = e => t => (0,
            r.zG)(t, f((t => !e.has(t))))
              , f = e => t => {
                const n = [];
                return t.forEach((t => e(t) && n.push(t))),
                n
            }
            ;
            var d = n(694)
              , p = n(593)
              , g = n(937);
            const h = () => ({
                kind: "null",
                value: null
            })
              , _ = e => ({
                kind: "string",
                value: e
            })
              , m = e => ({
                kind: "number",
                value: e
            })
              , b = e => ({
                kind: "array",
                value: e
            })
              , v = e => ({
                kind: "object",
                value: e
            })
              , w = e => e
              , y = () => ({
                kind: "bottom"
            })
              , k = e => ({
                kind: "inner",
                a: e
            })
              , S = e => ({
                kind: "top",
                error: e
            })
              , I = e => ({
                kind: "unbounded",
                group: e
            })
              , G = (e, t) => ({
                kind: "windowed",
                key: t,
                group: e
            })
              , z = (e, t, n) => ({
                kind: "countLimit",
                n,
                limit: t,
                group: e
            })
              , q = (e, t, n) => ({
                kind: "uniqueLimit",
                n,
                limit: t,
                group: e
            })
              , U = e => ({
                kind: "numberGroup",
                group: e
            })
              , E = e => ({
                kind: "stringGroup",
                group: e
            })
              , x = e => ({
                kind: "tuple",
                tuple: e
            })
              , P = e => ({
                state: e
            })
              , C = (e, t) => ({
                commands: e,
                payload: t
            });
            var O = n(856)
              , D = n(229);
            const A = (e, t) => {
                switch (e.kind) {
                case "bottom":
                    return {
                        kind: "bottom"
                    };
                case "inner":
                    return k(t(e.a));
                case "top":
                    return S(e.error)
                }
            }
              , T = e => (0,
            O.Zt)(( (t, n) => {
                if ("bottom" === t.kind && "bottom" === n.kind)
                    return 0;
                if ("bottom" === t.kind)
                    return -1;
                if ("bottom" === n.kind)
                    return 1;
                if ("top" === t.kind && "top" === n.kind)
                    return D.Df.compare(t.error, n.error);
                if ("top" === t.kind)
                    return 1;
                if ("top" === n.kind)
                    return -1;
                if ("inner" === t.kind && "inner" === n.kind)
                    return e.compare(t.a, n.a);
                throw new Error("Non exhaustive match in extendedAlgebraOrd")
            }
            ));
            var j = n(606)
              , M = n(340)
              , R = n(144)
              , F = function(e) {
                return -1 === e ? 1 : 1 === e ? -1 : 0
            };
            function L(e, t) {
                return (0,
                M.oA)(e.map(t))
            }
            function Y(e, t, n, r) {
                const s = (e, t) => {
                    if (0 === e.length)
                        return (0,
                        M.oA)(t.map((e => (0,
                        o.G)({
                            1: e[1],
                            2: n(o.YP, (0,
                            o.G)(e[2]))
                        }))));
                    if (0 === t.length)
                        return (0,
                        M.oA)(e.map((e => (0,
                        o.G)({
                            1: e[1],
                            2: n((0,
                            o.G)(e[2]), o.YP)
                        }))));
                    if (e.length > 0 && t.length > 0 && (0,
                    O.lt)(r)(e[0][1], t[0][1])) {
                        const [r,...i] = e
                          , a = r[1]
                          , c = r[2];
                        return (0,
                        M.Ce)({
                            1: a,
                            2: n((0,
                            o.G)(c), o.YP)
                        })(s(i, t))
                    }
                    if (e.length > 0 && t.length > 0 && (0,
                    O.gt)(r)(e[0][1], t[0][1])) {
                        const [r,...i] = t
                          , a = r[1]
                          , c = r[2];
                        return (0,
                        M.Ce)({
                            1: a,
                            2: n(o.YP, (0,
                            o.G)(c))
                        })(s(e, i))
                    }
                    if (e.length > 0 && t.length > 0) {
                        const [r,...i] = e
                          , [a,...c] = t
                          , u = r[1]
                          , l = r[2]
                          , f = a[2];
                        return (0,
                        M.Ce)({
                            1: u,
                            2: n((0,
                            o.G)(l), (0,
                            o.G)(f))
                        })(s(i, c))
                    }
                    throw new Error("Non exhaustive match in mapOption2")
                }
                  , i = (0,
                O.Uz)((e => e[1]))(r)
                  , a = (e => {
                    const t = L(e, (e => (0,
                    o.pC)(e[2]) ? (0,
                    o.G)({
                        1: e[1],
                        2: e[2].value
                    }) : o.YP));
                    return 0 === t.length ? o.YP : (0,
                    o.G)(t)
                }
                )(s((0,
                M.DY)(i)([...e].map((e => ({
                    1: e[0],
                    2: e[1]
                })))), (0,
                M.DY)(i)([...t].map((e => ({
                    1: e[0],
                    2: e[1]
                }))))));
                return (0,
                o.UI)((e => new Map(e.map((e => [e[1], e[2]])))))(a)
            }
            function N(e, t, n, r) {
                const s = (0,
                O.Uz)((e => e[0]))(r)
                  , i = (0,
                M.DY)(s)([...t]).reduceRight(( (e, t) => {
                    if ((0,
                    R.nM)(e)) {
                        const r = n(t[1], e.left);
                        return (0,
                        o.pC)(r) ? (0,
                        R.t$)(r.value) : (0,
                        R.F2)(t[0])
                    }
                    return e
                }
                ), (0,
                R.t$)(e));
                return (0,
                o.Uo)(i)
            }
            function Q(e, t) {
                return new Map([...e].map(t))
            }
            function B(e, t) {
                return new Map([...e].filter(t))
            }
            var $ = n(689)
              , H = n(52);
            function K(e) {
                return JSON.stringify(V(e))
            }
            function V(e) {
                switch (e.kind) {
                case "null":
                    return W.encode(e);
                case "string":
                    return Z.encode(e);
                case "number":
                    return ee.encode(e);
                case "array":
                    return te.encode(e);
                case "object":
                    return ne.encode(e)
                }
            }
            function X(e) {
                return null === e ? W.decode(e) : "number" == typeof e ? ee.decode(e) : "string" == typeof e ? Z.decode(e) : Array.isArray(e) ? te.decode(e) : ne.decode(e)
            }
            const J = (e, t) => (0,
            R.t$)(`Failed to decode. Input was ${JSON.stringify(e)}. Codec type was ${t}`)
              , W = {
                encode: e => null,
                decode: e => null === e ? (0,
                R.F2)({
                    kind: "null",
                    value: null
                }) : J(e, "SimpleNull")
            }
              , Z = {
                encode: e => e.value,
                decode: e => "string" == typeof e ? (0,
                R.F2)(_(e)) : J(e, "SimpleString")
            }
              , ee = {
                encode: e => e.value,
                decode: e => "number" == typeof e ? (0,
                R.F2)(m(e)) : J(e, "SimpleNumber")
            }
              , te = {
                encode: e => e.value.map(V),
                decode: e => {
                    if (Array.isArray(e)) {
                        const t = (0,
                        M.fw)(R.g1)(X)(e);
                        return (0,
                        R.UI)(b)(t)
                    }
                    return J(e, "SimpleArray")
                }
            }
              , ne = {
                encode: e => {
                    const t = [...e.value.entries()];
                    return Object.assign({}, ...Array.from(t, (e => {
                        let[t,n] = e;
                        return {
                            [t]: V(n)
                        }
                    }
                    )))
                }
                ,
                decode: e => {
                    if (e && e.constructor === Object) {
                        const t = (0,
                        M.fw)(R.g1)((e => {
                            let[t,n] = e;
                            return (0,
                            r.zG)(X(n), (0,
                            R.UI)((e => (0,
                            r.bc)(t, e))))
                        }
                        ))(Object.entries(e));
                        return (0,
                        R.UI)((e => v(new Map([...e]))))(t)
                    }
                    return J(e, "SimpleObject")
                }
            };
            function re(e) {
                return (0,
                r.zG)(e, ie, (0,
                o.UI)(K), (0,
                o.fS)(( () => "<encode error>")))
            }
            function se(e) {
                return (0,
                o.UI)(fe)(function(e) {
                    switch (e.state.kind) {
                    case "top":
                        return (0,
                        o.G)(_(e.state.error));
                    case "bottom":
                        return o.YP;
                    case "inner":
                        return ie(e.state.a)
                    }
                }(e))
            }
            function ie(e) {
                return function(e) {
                    switch (e.kind) {
                    case "numberGroup":
                    case "stringGroup":
                        return oe(e.group);
                    case "tuple":
                        return e.tuple.length > 0
                    }
                }(e.payload) ? (0,
                o.G)(b(function(e, t) {
                    const n = (0,
                    o.UI)((e => (0,
                    M.Ce)(e)(t)))(e);
                    return (0,
                    o.fS)(( () => t))(n)
                }((0,
                o.UI)((e => _(function(e) {
                    const t = e => (0,
                    o.EQ)(( () => ""), (e => "b" + JSON.stringify(e)))(e.bound)
                      , n = e => {
                        switch (e.operation) {
                        case "add":
                            return "p";
                        case "mul":
                            return "m";
                        case "max":
                            return "v";
                        case "min":
                            return "n"
                        }
                    }
                      , r = e => {
                        const r = t(e[1]) + n(e[1]);
                        return 1 === e[2] ? r : r + JSON.stringify(e[2])
                    }
                    ;
                    return e.map(r).join("")
                }(e))))(e.commands), function(e) {
                    const t = e => {
                        switch (e.kind) {
                        case "bottom":
                            return {
                                kind: "null",
                                value: null
                            };
                        case "top":
                            return _(e.error);
                        case "inner":
                            return m(e.a)
                        }
                    }
                      , n = e => L([ae, ce, e => (0,
                    r.zG)(e, le, v, o.G)], (t => t(e)))
                      , s = e => L([ae, ue, e => (0,
                    r.zG)(e, le, (e => Q(e, (e => {
                        let[t,n] = e;
                        return [JSON.stringify(t), n]
                    }
                    ))), v, o.G)], (t => t(e)));
                    switch (e.kind) {
                    case "tuple":
                        return e.tuple.map(t);
                    case "stringGroup":
                        return n(e.group);
                    case "numberGroup":
                        return s(e.group)
                    }
                }(e.payload)))) : o.YP
            }
            function oe(e) {
                switch (e.kind) {
                case "unbounded":
                    return e.group.size > 0;
                case "windowed":
                    return e.group.size > 0 || (0,
                    o.pC)(e.key);
                case "countLimit":
                case "uniqueLimit":
                    return e.group.size > 0 || (0,
                    o.pC)(e.limit)
                }
            }
            function ae(e) {
                switch (e.kind) {
                case "unbounded":
                    return o.YP;
                case "windowed":
                    return (0,
                    o.G)(_("w"));
                case "countLimit":
                    return (0,
                    o.G)(_(1 === e.n ? "x" : `x${e.n}`));
                case "uniqueLimit":
                    return (0,
                    o.G)(_(1 === e.n ? "u" : `u${e.n}`))
                }
            }
            function ce(e) {
                switch (e.kind) {
                case "unbounded":
                    return o.YP;
                case "windowed":
                    return (0,
                    o.G)(_((0,
                    o.pC)(e.key) ? e.key.value : ""));
                case "countLimit":
                case "uniqueLimit":
                    return (0,
                    o.G)(_((0,
                    o.pC)(e.limit) ? e.limit.value : ""))
                }
            }
            function ue(e) {
                switch (e.kind) {
                case "unbounded":
                    return o.YP;
                case "windowed":
                    return (0,
                    o.pC)(e.key) ? (0,
                    o.G)(m(e.key.value)) : (0,
                    o.G)({
                        kind: "null",
                        value: null
                    });
                case "countLimit":
                case "uniqueLimit":
                    return (0,
                    o.pC)(e.limit) ? (0,
                    o.G)(m(e.limit.value)) : (0,
                    o.G)({
                        kind: "null",
                        value: null
                    })
                }
            }
            function le(e) {
                switch (e.kind) {
                case "unbounded":
                case "windowed":
                case "countLimit":
                case "uniqueLimit":
                    return e.group
                }
            }
            function fe(e) {
                switch (e.kind) {
                case "array":
                    return 0 === e.value.length ? {
                        kind: "null",
                        value: null
                    } : 1 === e.value.length ? fe(e.value[0]) : b(e.value.map(fe));
                case "object":
                    return (0,
                    r.zG)(B(e.value, (e => {
                        let[t,n] = e;
                        return "null" !== n.kind
                    }
                    )), (e => Q(e, (e => [e[0], fe(e[1])]))), v);
                default:
                    return e
                }
            }
            function de(e) {
                const t = e => {
                    if (0 === e.length)
                        return {
                            kind: "bottom"
                        };
                    const t = (e => {
                        if (4 !== e.length)
                            return o.YP;
                        const [t,n,r,s] = e;
                        if ("string" === t.kind && "string" === n.kind && "object" === s.kind) {
                            const e = (0,
                            o.DT)((e => pe(e[1].value) && ge(e[2].value)))({
                                1: t,
                                2: n
                            });
                            return (0,
                            o.UI)((e => ({
                                prim: e[1].value,
                                grp: e[2].value,
                                cutoff: r,
                                m: s.value
                            })))(e)
                        }
                        return o.YP
                    }
                    )(e);
                    if ((0,
                    o.pC)(t)) {
                        const {prim: e, grp: n, cutoff: r, m: s} = t.value
                          , i = he(r, s, _e(n));
                        return "string" == typeof i ? S(i) : k(C(me(e), i))
                    }
                    const n = (e => {
                        if (3 !== e.length)
                            return o.YP;
                        const [t,n,r] = e;
                        if ("string" === t.kind && "object" === r.kind) {
                            const e = (0,
                            o.DT)((e => ge(e.value)))(t);
                            return (0,
                            o.UI)((e => ({
                                grp: e.value,
                                cutoff: n,
                                m: r.value
                            })))(e)
                        }
                        return o.YP
                    }
                    )(e);
                    if ((0,
                    o.pC)(n)) {
                        const {grp: e, cutoff: t, m: r} = n.value
                          , s = he(t, r, _e(e));
                        return "string" == typeof s ? S(s) : k(C(o.YP, s))
                    }
                    const r = (e => {
                        if (2 !== e.length)
                            return o.YP;
                        const [t,n] = e;
                        if ("string" === t.kind && "object" === n.kind) {
                            const e = (0,
                            o.DT)((e => pe(e.value)))(t);
                            return (0,
                            o.UI)((e => ({
                                prim: e.value,
                                m: n.value
                            })))(e)
                        }
                        return o.YP
                    }
                    )(e);
                    if ((0,
                    o.pC)(r)) {
                        const {prim: e, m: t} = r.value;
                        return k(C(me(e), E(I(t))))
                    }
                    const s = (e => {
                        if (1 !== e.length)
                            return o.YP;
                        const [t] = e;
                        return "object" === t.kind ? (0,
                        o.G)({
                            m: t.value
                        }) : o.YP
                    }
                    )(e);
                    if ((0,
                    o.pC)(s)) {
                        const {m: e} = s.value;
                        return k(C(o.YP, E(I(e))))
                    }
                    const i = (e => {
                        if (e.length < 1)
                            return o.YP;
                        const [t,...n] = e;
                        if ("string" === t.kind) {
                            const e = (0,
                            o.DT)((e => pe(e.value)))(t);
                            return (0,
                            o.UI)((e => ({
                                prim: e.value,
                                rest: n
                            })))(e)
                        }
                        return o.YP
                    }
                    )(e);
                    if ((0,
                    o.pC)(i)) {
                        const {prim: e, rest: t} = i.value;
                        return k(C(me(e), ve(t)))
                    }
                    return k(C(o.YP, ve(e)))
                }
                  , n = e => "array" === e.kind ? (0,
                M.tS)(n)(e.value) : [e];
                return "null" === e.kind ? P({
                    kind: "bottom"
                }) : P(t(n(e)))
            }
            function pe(e) {
                const t = e.split("");
                if (!0 == (0 === t.length))
                    return !1;
                {
                    const [e,...n] = t;
                    return -1 !== "bpmvn".indexOf(e) && n.every((e => -1 !== "bpmvn0123456789.".indexOf(e)))
                }
            }
            function ge(e) {
                const t = e.split("");
                switch (!0) {
                case 0 === t.length:
                    return !1;
                case "w" === t[0] && void 0 === t[1]:
                    return !0;
                default:
                    {
                        const [e,...n] = t;
                        return -1 !== "ux".indexOf(e) && -1 === n.map((e => !isNaN(parseInt(e)))).indexOf(!1)
                    }
                }
            }
            function he(e, t, n) {
                switch (e.kind) {
                case "string":
                    return E(n({
                        1: (0,
                        o.G)(e.value),
                        2: t
                    }));
                case "number":
                case "null":
                    return U(n({
                        1: "null" === e.kind ? o.YP : (0,
                        o.G)(e.value),
                        2: B(Q(t, (e => {
                            let[t,n] = e;
                            return [Number(t), n]
                        }
                        )), (e => !isNaN(e[0])))
                    }));
                default:
                    return "{bad cutoff}"
                }
            }
            function _e(e) {
                const t = e => t => q(t[2], t[1], e)
                  , n = e => t => z(t[2], t[1], e)
                  , r = e.split("");
                switch (!0) {
                case "w" === r[0] && void 0 === r[1]:
                    return e => G(e[2], e[1]);
                case "u" === r[0] && void 0 === r[1]:
                    return t(1);
                case "u" === r[0] && void 0 !== r[1]:
                    return t(parseInt(r.slice(1).join("")));
                case "x" === r[0] && void 0 === r[1]:
                    return n(1);
                case "x" === r[0] && void 0 !== r[1]:
                    return n(parseInt(r.slice(1).join("")));
                default:
                    throw new Error("This should never happen if you use isGroupCommand")
                }
            }
            function me(e) {
                const t = e => (0,
                o.Wi)(e.bound) || "add" === e.operation || "mul" === e.operation ? (0,
                o.G)(e) : o.YP
                  , n = (e, n, s) => {
                    const i = ( (e, n) => (0,
                    r.zG)(e, (e => {
                        switch (e) {
                        case "p":
                            return (0,
                            o.G)("add");
                        case "m":
                            return (0,
                            o.G)("mul");
                        case "v":
                            return (0,
                            o.G)("max");
                        case "n":
                            return (0,
                            o.G)("min");
                        default:
                            return o.YP
                        }
                    }
                    ), o.UI((e => ({
                        operation: e,
                        bound: n
                    }))), o.tS(t)))(e, s);
                    return (0,
                    o.UI)((e => {
                        const {init: t, rest: r} = (0,
                        M.zT)((e => {
                            return "number" == typeof (t = parseInt(e)) && isFinite(t) && Math.floor(t) === t;
                            var t
                        }
                        ))(n);
                        return {
                            1: {
                                1: e,
                                2: 0 === t.length ? 1 : parseInt(t.join(""))
                            },
                            2: r.join("")
                        }
                    }
                    ))(i)
                }
                ;
                return (0,
                o.UI)(w)((0,
                j.nI)(be(e, (e => {
                    const t = e.split("");
                    if (0 === t.length)
                        return o.YP;
                    const [s,...i] = t;
                    if ("b" === s) {
                        const {init: e, rest: t} = (0,
                        r.zG)(i, (0,
                        M.zT)((e => -1 !== "1234567890.".indexOf(e))));
                        if (0 === e.length || 0 === t.length)
                            return o.YP;
                        const s = parseFloat(e.join(""))
                          , [a,...c] = t;
                        return n(a, c, (0,
                        o.G)(s))
                    }
                    return n(s, i, o.YP)
                }
                ))))
            }
            function be(e, t) {
                const n = t(e);
                return (0,
                o.fS)(( () => []))((0,
                o.UI)((e => [e[1]].concat(be(e[2], t))))(n))
            }
            function ve(e) {
                return x(e.map(we))
            }
            function we(e) {
                switch (e.kind) {
                case "number":
                    return k(e.value);
                case "string":
                    return S(e.value);
                case "null":
                    return {
                        kind: "bottom"
                    };
                case "object":
                    return S("{object}");
                case "array":
                    return S("{array}")
                }
            }
            var ye = n(945);
            const ke = {
                strategy: (e, t, n) => r => {
                    if ((0,
                    o.Wi)(n))
                        return t;
                    if ("delta" === e && (0,
                    o.Wi)(t))
                        return o.YP;
                    if ((0,
                    o.Wi)(t))
                        return n;
                    if ((0,
                    o.pC)(t) && (0,
                    o.pC)(n))
                        return r(t.value, n.value);
                    throw new Error("Non exhaustive match in combineCommand.strategy")
                }
                ,
                operation: (e, t, n, s, i, a) => {
                    const c = (0,
                    M.pR)(T(a))
                      , u = (0,
                    r.zG)(t.bound, o.EQ(( () => r.yR), (e => t => (0,
                    O.VV)(a)(i.fromNumber(e), t))));
                    if ("append" === e && "add" === t.operation)
                        return (0,
                        M.yL)(n, s, Ee("append", (0,
                        r.ls)(i.plus, u)));
                    if ("append" === e && "mul" === t.operation)
                        return (0,
                        M.yL)(n, s, Ee("append", (0,
                        r.ls)(i.times, u)));
                    if ("append" === e && "max" === t.operation)
                        return (0,
                        O.Fp)(c)(n, s);
                    if ("join" === e && "add" === t.operation)
                        return (0,
                        M.yL)(n, s, Ee("join", (0,
                        O.Fp)(a)));
                    if ("join" === e && "mul" === t.operation)
                        return (0,
                        M.yL)(n, s, Ee("join", (0,
                        O.Fp)(a)));
                    if ("join" === e && "max" === t.operation)
                        return (0,
                        O.Fp)(c)(n, s);
                    if ("min" === t.operation)
                        return ke.operation(e, {
                            operation: "max",
                            bound: t.bound
                        }, n, s, i, function(e) {
                            return (0,
                            O.Zt)(( (t, n) => F(e.compare(t, n))))
                        }(a));
                    if ("delta" === e && "max" === t.operation)
                        return (0,
                        O.gt)(c)(n, s) ? n : s.map(y);
                    if ("delta" === e)
                        return (0,
                        M.yL)(n, s, ( (e, t) => (0,
                        O.gt)(T(a))(e, t) ? A(e, u) : {
                            kind: "bottom"
                        }));
                    throw new Error("Non exhaustive match in combineCommand.operation")
                }
                ,
                extend: (e, t, n, r) => {
                    if ("delta" === e && "top" === n.kind && "top" === r.kind)
                        return (0,
                        O.gt)(D.Df)(n.error, r.error) ? S(n.error) : {
                            kind: "bottom"
                        };
                    if ("delta" === e && "bottom" === r.kind)
                        return n;
                    if ("delta" === e && "bottom" === n.kind)
                        return {
                            kind: "bottom"
                        };
                    if ("top" === n.kind && "top" === r.kind)
                        return S((0,
                        O.Fp)(D.Df)(n.error, r.error));
                    if ("top" === n.kind)
                        return n;
                    if ("top" === r.kind)
                        return r;
                    if ("inner" === n.kind && "inner" === r.kind)
                        return t(n.a, r.a);
                    if ("bottom" === n.kind)
                        return r;
                    if ("bottom" === r.kind)
                        return n;
                    throw new Error("Non exhaustive match in extend")
                }
            }
              , Se = {
                fromNumber: r.yR,
                plus: (e, t) => e + t,
                times: (e, t) => e * t
            };
            function Ie(e, t, n, r) {
                if ("unbounded" === e.kind && "unbounded" === t.kind) {
                    const s = e.group
                      , i = t.group;
                    return (0,
                    o.fS)(y)((0,
                    o.UI)((e => k(I(e))))(Y(s, i, n, r)))
                }
                if ("windowed" === e.kind && "windowed" === t.kind) {
                    const s = e.key
                      , i = e.group
                      , a = t.key
                      , c = t.group
                      , u = (0,
                    O.Fp)((0,
                    o.pR)(r))(s, a);
                    return (0,
                    o.fS)(y)((0,
                    o.UI)((e => k(G(e, u))))(Y(i, c, n, r)))
                }
                if ("countLimit" === e.kind && "countLimit" === t.kind) {
                    const s = e.n
                      , i = t.n;
                    if (s === i) {
                        const i = e.limit
                          , a = e.group
                          , c = t.limit
                          , u = t.group
                          , l = (0,
                        O.Fp)((0,
                        o.pR)(r))(i, c);
                        return (0,
                        o.fS)(y)((0,
                        o.UI)((e => k(z(e, l, s))))(Y(a, u, n, r)))
                    }
                    return S("Non matching counts")
                }
                if ("uniqueLimit" === e.kind && "uniqueLimit" === t.kind) {
                    const s = e.n
                      , i = t.n;
                    if (s === i) {
                        const i = e.limit
                          , a = e.group
                          , c = t.limit
                          , u = t.group
                          , l = (0,
                        O.Fp)((0,
                        o.pR)(r))(i, c);
                        return (0,
                        o.fS)(y)((0,
                        o.UI)((e => k(q(e, l, s))))(Y(a, u, n, r)))
                    }
                    return S("Non matching counts")
                }
                return S("Non matching group types")
            }
            function Ge(e, t, n) {
                return (0,
                o.fS)(h)(ze(e, o.YP)(t, n))
            }
            function ze(e, t) {
                const n = t => (n, r) => ke.strategy(e, n, r)(ze(e, t))
                  , s = (t, r, s) => {
                    if ("stringGroup" === r.kind && "stringGroup" === s.kind) {
                        const e = Ie(r.group, s.group, n(t), D.Df);
                        return A(e, (e => E(Ue(e, D.Df))))
                    }
                    if ("numberGroup" === r.kind && "numberGroup" === s.kind) {
                        const e = Ie(r.group, s.group, n(t), H.Df);
                        return A(e, (e => U(Ue(e, H.Df))))
                    }
                    if ("tuple" === r.kind && "tuple" === s.kind) {
                        const n = (0,
                        o.pC)(t) ? t.value : [];
                        return k(x(function(e, t, n, r, s, i) {
                            const a = (e, t) => ({
                                1: (0,
                                M.ke)(e)(t).concat((0,
                                M.KB)(Math.max(0, e - t.length), y)),
                                2: (0,
                                M.md)(e)(t)
                            })
                              , c = (t, n, r) => {
                                if (0 === t.length)
                                    return ke.operation(e, {
                                        operation: "max",
                                        bound: o.YP
                                    }, n, r, s, i);
                                if (t.length > 0) {
                                    const [o,...u] = t
                                      , l = a(o[2], n)
                                      , f = l[1]
                                      , d = l[2]
                                      , p = a(o[2], r)
                                      , g = p[1]
                                      , h = p[2];
                                    return ke.operation(e, o[1], f, g, s, i).concat(c(u, d, h))
                                }
                                throw new Error("Non exhaustive match in recurse")
                            }
                            ;
                            return (0,
                            M.GY)((0,
                            M.Qp)((e => "bottom" === e.kind))((0,
                            M.GY)(c(t, n, r))))
                        }(e, n, r.tuple, s.tuple, Se, H.Df)))
                    }
                    throw new Error(`Non matching payload. Got ${r.kind} and ${s.kind}`)
                }
                  , i = (e, n) => {
                    if ((0,
                    o.Eh)((0,
                    j.Eh)((0,
                    $.n_)({
                        1: (0,
                        $.n_)({
                            operation: D.Eq,
                            bound: (0,
                            o.Eh)(H.Eq)
                        }),
                        2: H.Eq
                    }))).equals(e.commands, n.commands)) {
                        const r = (0,
                        o.Wi)(e.commands) ? t : e.commands
                          , i = s(r, e.payload, n.payload);
                        return A(i, (t => C(e.commands, t)))
                    }
                    if (i = e.commands,
                    a = n.commands,
                    (0,
                    o.Eh)((0,
                    j.Eh)((0,
                    $.n_)({
                        1: (0,
                        $.n_)({
                            operation: D.Eq
                        }),
                        2: H.Eq
                    }))).equals(i, a)) {
                        const i = (0,
                        r.zG)(( (e, t) => (0,
                        r.zG)((0,
                        ye.gz)(o.G5)(e, t), (0,
                        o.UI)((e => {
                            let[t,n] = e;
                            return j.yL(t, n, ( (e, t) => ({
                                1: {
                                    operation: e[1].operation,
                                    bound: (0,
                                    r.zG)((0,
                                    ye.gz)(o.G5)(e[1].bound, t[1].bound), o.UI((e => {
                                        let[t,n] = e;
                                        return Math.min(t, n)
                                    }
                                    )), o.wp(( () => e[1].bound)), o.wp(( () => t[1].bound)))
                                },
                                2: e[2]
                            })))
                        }
                        ))))(e.commands, n.commands), o.wp(( () => t)))
                          , a = s(i, e.payload, n.payload);
                        return A(a, (e => C(i, e)))
                    }
                    throw new Error(`Non matching primitive strings. Got ${re(e)} and ${re(n)}`);
                    var i, a
                }
                ;
                return (t, n) => se(P(ke.extend(e, i, de(t).state, de(n).state)))
            }
            function qe(e, t, n) {
                const r = (0,
                o.UI)((t => B(e, (e => {
                    let[r,s] = e;
                    return (0,
                    O.gf)(n)(r, t)
                }
                ))))(t);
                return (0,
                o.fS)(( () => e))(r)
            }
            function Ue(e, t) {
                switch (e.kind) {
                case "unbounded":
                    return e;
                case "windowed":
                    return (0,
                    o.Wi)(e.key) ? e : G(qe(e.group, e.key, t), e.key);
                case "countLimit":
                    {
                        const n = e.limit
                          , r = e.n
                          , s = e.group
                          , i = N(r, s, ( (e, t) => t <= 1 ? o.YP : (0,
                        o.G)(t - 1)), t)
                          , a = (0,
                        O.Fp)((0,
                        o.pR)(t))(n, i);
                        return z(qe(s, a, t), a, r)
                    }
                case "uniqueLimit":
                    {
                        const n = e.limit
                          , r = e.n
                          , s = e.group
                          , i = (e, t) => {
                            if ("object" === e.kind) {
                                const n = [...e.value.keys(), ...t.keys()]
                                  , s = new Set(n);
                                return s.size >= r ? o.YP : (0,
                                o.G)(s)
                            }
                            return o.YP
                        }
                          , a = N(new Set, s, i, t)
                          , c = (0,
                        O.Fp)((0,
                        o.pR)(t))(n, a);
                        return q(qe(s, c, t), c, r)
                    }
                }
            }
            function Ee(e, t) {
                return (n, r) => ke.extend(e, ( (e, n) => k(t(e, n))), n, r)
            }
            function xe(e, t) {
                return Ge("append", e, t)
            }
            function Pe(e, t) {
                return Ge("join", e, t)
            }
            var Ce = n(450)
              , Oe = n(327)
              , De = n(6)
              , Ae = n(335)
              , Te = n(289)
              , je = n(49);
            function Me(e, t) {
                return function(n) {
                    return e.map(n, t.compact)
                }
            }
            function Re(e, t, n) {
                var s = Me(e, t)
                  , i = (0,
                Te.UI)(e, n);
                return function(e) {
                    return je.s4(s((0,
                    r.zG)(e, i(o.IS))), s((0,
                    r.zG)(e, i(o.EK))))
                }
            }
            function Fe(e, t) {
                return function(n) {
                    return function(r) {
                        return e.map(r, (function(e) {
                            return t.filter(e, n)
                        }
                        ))
                    }
                }
            }
            function Le(e, t) {
                return function(n) {
                    return function(r) {
                        return e.map(r, (function(e) {
                            return t.filterMap(e, n)
                        }
                        ))
                    }
                }
            }
            function Ye(e, t) {
                var n = Fe(e, t);
                return function(e) {
                    var t = n((0,
                    Oe.ff)(e))
                      , r = n(e);
                    return function(e) {
                        return (0,
                        je.s4)(t(e), r(e))
                    }
                }
            }
            function Ne(e, t) {
                var n = Le(e, t);
                return function(e) {
                    return function(t) {
                        return (0,
                        je.s4)((0,
                        r.zG)(t, n((function(t) {
                            return (0,
                            o.IS)(e(t))
                        }
                        ))), (0,
                        r.zG)(t, n((function(t) {
                            return (0,
                            o.EK)(e(t))
                        }
                        ))))
                    }
                }
            }
            var Qe = n(755)
              , Be = n(241)
              , $e = n(614);
            function He(e) {
                return (0,
                r.ls)(o.G, e.of)
            }
            function Ke(e) {
                return (0,
                r.a9)(e.of(o.YP))
            }
            function Ve(e) {
                return function(t) {
                    return e.map(t, o.G)
                }
            }
            function Xe(e) {
                return (0,
                r.ls)(o.ij, e.of)
            }
            function Je(e) {
                var t = Xe(e);
                return function(e) {
                    return (0,
                    r.ls)(e, t)
                }
            }
            function We(e) {
                var t = ct(e)
                  , n = Je(e);
                return function(e) {
                    return t(n(e))
                }
            }
            function Ze(e) {
                return function(t) {
                    return (0,
                    r.ls)(t, e.of)
                }
            }
            function et(e) {
                var t = ct(e)
                  , n = Ze(e);
                return function(e) {
                    return t(n(e))
                }
            }
            function tt(e) {
                return function(t) {
                    return function(n) {
                        return e.of(o.DT(t)(n))
                    }
                }
            }
            function nt(e) {
                return (0,
                r.ls)(o.Uo, e.of)
            }
            function rt(e) {
                return function(t, n) {
                    return function(r) {
                        return e.map(r, o.EQ(t, n))
                    }
                }
            }
            function st(e) {
                return function(t, n) {
                    return function(r) {
                        return e.chain(r, o.EQ(t, n))
                    }
                }
            }
            function it(e) {
                return function(t) {
                    return function(n) {
                        return e.chain(n, o.EQ(t, e.of))
                    }
                }
            }
            function ot(e) {
                return (0,
                Te.UI)(e, o.dO)
            }
            function at(e) {
                return (0,
                ye.ap)(e, o.G5)
            }
            function ct(e) {
                var t = Ke(e);
                return function(n) {
                    return function(r) {
                        return e.chain(r, o.EQ((function() {
                            return t()
                        }
                        ), n))
                    }
                }
            }
            function ut(e) {
                var t = He(e);
                return function(n) {
                    return function(r) {
                        return e.chain(r, o.EQ(n, t))
                    }
                }
            }
            var lt = n(46)
              , ft = He(lt.PM)
              , dt = (lt.PM,
            lt.of)
              , pt = (lt.PM,
            function(e) {
                return gt(lt.tD(e))
            }
            )
              , gt = Ve(lt.dO)
              , ht = lt.UI(o.Uo)
              , _t = (lt.dO,
            st(lt.qo))
              , mt = (lt.UA,
            lt.PM,
            lt.PM,
            lt.UA,
            lt.PM,
            et(lt.UA))
              , bt = ot(lt.dO)
              , vt = at(lt.Hi)
              , wt = ft
              , yt = ct(lt.UA)
              , kt = (lt.UA,
            lt.PM,
            lt.dO,
            o.Ri,
            lt.dO,
            o.Ri,
            o.dO,
            Fe(lt.dO, o.xu))
              , St = (lt.dO,
            o.xu,
            lt.dO,
            o.xu,
            lt.dO,
            o.xu,
            function(e, t) {
                return (0,
                r.zG)(e, bt(t))
            }
            )
              , It = function(e, t) {
                return (0,
                r.zG)(e, vt(t))
            }
              , Gt = function(e, t) {
                return (0,
                r.zG)(e, yt(t))
            }
              , zt = "TaskOption"
              , qt = {
                URI: zt,
                map: St
            }
              , Ut = {
                URI: zt,
                map: St,
                ap: It,
                chain: Gt
            }
              , Et = {
                URI: zt,
                fromIO: pt
            }
              , xt = (0,
            Qe.At)(Et, Ut)
              , Pt = {
                URI: zt,
                fromIO: pt,
                fromTask: gt
            }
              , Ct = (0,
            Be.wt)(Pt)
              , Ot = (0,
            Be.oU)(Pt, Ut)
              , Dt = ($e.F4,
            (0,
            Te.Hr)(qt))
              , At = (0,
            Ae.a)(Ut)
              , Tt = ($e.Xl,
            He(d.PM))
              , jt = (d.PM,
            d.of,
            d.PM,
            d.dO,
            o.Uo,
            d.dO,
            d.qo,
            d.UA,
            d.UI(o.FS),
            d.UI(o.WG),
            d.PM,
            d.PM,
            d.UA,
            d.PM,
            d.UA,
            d.dO,
            d.G5,
            Tt)
              , Mt = (d.UA,
            ut(d.UA))
              , Rt = (d.PM,
            d.dO,
            o.Ri,
            d.dO,
            o.Ri,
            o.dO,
            d.dO,
            o.xu,
            d.dO,
            o.xu,
            d.dO,
            o.xu,
            d.dO,
            o.xu,
            $e.F4,
            $e.Xl,
            n(812));
            const Ft = new Set(["AdRequest", "PageviewEngagement", "SegmentEntry", "SegmentExit"])
              , Lt = e => s.dQ((t => {
                let {previousState: n} = t;
                const [s,a] = i.Ue(!1);
                const [c,u] = i.gS({
                    empty: o.YP,
                    concat: (e, t) => (0,
                    r.zG)(Rt.oA([e, t]), o.DT(Rt.Od), o.UI((e => e.reduce(( (e, t) => ({
                        ...e,
                        ...t
                    }))))))
                })
                  , l = (0,
                r.zG)((0,
                g.Kn)(n) ? n : {}, (0,
                g.rO)({
                    stateOffset: (0,
                    r.ls)(o.DT(g.BJ), o.fS(( () => 0))),
                    fetchUnseenKey: (0,
                    r.ls)(o.DT(g.HD), o.fS(( () => "")))
                }))
                  , f = (0,
                r.zG)(i.gS(o.uZ({
                    concat: function(e, t) {
                        return Object.assign({}, e, t)
                    }
                })), (t => {
                    let[n,s] = t;
                    return (0,
                    r.zG)(i.vP(e.lastProcessedEvents, e.internalStateDiff, e.queryLanguageProcessing), i.bw((e => {
                        let[t,n,r] = e;
                        if (r)
                            return;
                        return t().filter((e => !Ft.has(e.name))).length > 0 ? s(n()) : void 0
                    }
                    ))),
                    (0,
                    r.zG)(i.vP({
                        internalStateDiff: n,
                        internalStateMap: e.internalStateMap
                    }), i.D8(( (e, t) => e.internalStateDiff === t.internalStateDiff)))
                }
                ))
                  , d = (0,
                r.zG)(i.vP(e.sessionId, f, s), i.Rp(i.a9({
                    ...l,
                    inFlightRequest: !1,
                    previousDecodedState: (0,
                    r.zG)(e.internalStateMap.current, Nt, X, R.fS(( () => v(new Map)))),
                    sendFullStateWithUnseen: !1
                }), ( (t, n) => {
                    let[s,{internalStateDiff: a, internalStateMap: c},l] = n;
                    return (0,
                    r.zG)(t, i.VS((t => {
                        if (t.inFlightRequest)
                            return i.a9(t);
                        const n = !l && t.sendFullStateWithUnseen
                          , f = n || !e.groupIdIsNewlyGenerated && s !== t.fetchUnseenKey;
                        return (0,
                        r.zG)(n ? jt(c) : a, Mt(( () => () => (0,
                        r.zG)({}, o.DT(( () => f))))), lt.tD, yt((0,
                        r.ls)(Bt(t.previousDecodedState), De.Vn((0,
                        g.bw)((t => e.logger.error(t)))), ht)), _t(( () => lt.of({
                            ...t,
                            inFlightRequest: !1
                        })), (0,
                        r.ls)(lt.of, lt.ak("processed", (n => (0,
                        r.zG)(e, Yt({
                            delta: n.delta,
                            stateOffset: t.stateOffset,
                            fetchUnseen: f
                        }), lt.UI((0,
                        g.bw)((0,
                        r.ls)(o.UI((0,
                        g.vg)("stateDelta")), o.hX(Oe.ff(Ce.xb)), u)))))), lt.UI((e => ({
                            fetchUnseenKey: s,
                            inFlightRequest: !1,
                            sendFullStateWithUnseen: t.sendFullStateWithUnseen && !n,
                            previousDecodedState: e.decodedState,
                            stateOffset: (0,
                            r.zG)(e.processed, o.UI((e => e.response.state_offset)), o.fS(( () => t.stateOffset)))
                        }))))), i.fF, i.UI(o.fS(( () => ({
                            ...t,
                            inFlightRequest: !0
                        })))))
                    }
                    )))
                }
                )), i.xH, i.UI((e => ({
                    stateOffset: e.stateOffset,
                    fetchUnseenKey: e.fetchUnseenKey
                }))), i.D8((0,
                $.MW)({
                    stateOffset: H.Eq,
                    fetchUnseenKey: D.Eq
                })));
                return {
                    state: d,
                    value: {
                        externalStateDelta: c
                    }
                }
            }
            ))
              , Yt = e => t => (0,
            r.zG)(e, o.DT((e => e.fetchUnseen || Oe.ff(Ce.xb)(e.delta))), dt, yt((e => {
                return (0,
                r.zG)(t, (n = {
                    event_source_id: t.eventSourceId,
                    fetch_unseen: e.fetchUnseen,
                    group_id: t.groupId,
                    last_seen_offset: e.stateOffset,
                    state: e.delta
                },
                e => De.Y3(( () => e.permutiveApi.req({
                    url: e.permutiveUrls.getEndpointUrl("/state", o.G("v1.0"), [["fetch_unseen", JSON.stringify(n.fetch_unseen)]]),
                    method: "POST",
                    payload: {
                        group_id: n.group_id,
                        event_source_id: n.event_source_id,
                        state: JSON.stringify(n.state),
                        last_seen_offset: n.last_seen_offset
                    },
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1
                })), (e => `Error sending state delta. Got ${R.KC(e)}`))), De.Vn((0,
                g.bw)((e => t.reportError(e)))), ht, kt((e => !!e)), mt((0,
                r.ls)(R.of, R.YO("response"), R.ak("stateDelta", (e => {
                    return t = e.response.state,
                    (0,
                    R.Y3)((function() {
                        return JSON.parse(t)
                    }
                    ), r.yR);
                    var t
                }
                )), R.Vn((0,
                g.bw)((e => t.reportError(`Failed to parse State API response, got ${e}`)))), o.Uo)));
                var n
            }
            )))
              , Nt = e => (0,
            g.b0)(e, ( (e, t) => t.state ? o.G({
                [t.checksum]: t.state
            }) : o.YP))
              , Qt = e => t => {
                const n = (0,
                r.zG)(t, Nt, X, R.fS(( () => v(new Map))), (t => Ge("delta", t, e)));
                return {
                    decodedState: Pe(n, e),
                    delta: (0,
                    r.zG)(n, V, o.ij, o.fS(( () => ({}))))
                }
            }
              , Bt = e => t => () => new Promise((n => (0,
            p.HJ)(( () => (0,
            r.zG)(t, R.it(Qt(e), (e => `Failed to compute delta for state sync. Got ${e}`)), n)))));
            n(226),
            Ce.dp;
            var $t = Ce.xb
              , Ht = function(e) {
                return function(t) {
                    return Object.keys(t).sort(e.compare)
                }
            };
            D.Df;
            Ce.dx,
            Ce.e$;
            Ce.Bu,
            Ce.P5,
            Ce.Su;
            var Kt = Ce.UI;
            Ce.ri;
            function Vt(e) {
                return Ce.vP(e)
            }
            Ce._r;
            Ce.jt;
            Ce.yW,
            Ce.G,
            Ce.t9;
            var Xt = Ce.HA
              , Jt = (Ce.nn,
            Ce.kp)
              , Wt = Ce.CC
              , Zt = Ce.RF
              , en = (Ce.I8,
            Ce.mS,
            Ce.RJ,
            Ce._Y,
            Ce.V_)
              , tn = Ce.EW
              , nn = Ce.nu
              , rn = (Ce.SW,
            Ce.zV,
            Ce.Ub,
            Ce.vA,
            Ce.qS)
              , sn = (Ce.mK,
            function(e) {
                return function(t) {
                    var n = Ht(e);
                    return function(e, r) {
                        var s = n(e);
                        if (0 === s.length)
                            return t.of({});
                        for (var i = t.of({}), o = function(n) {
                            i = t.ap(t.map(i, (function(e) {
                                return function(t) {
                                    return e[n] = t,
                                    e
                                }
                            }
                            )), r(n, e[n]))
                        }, a = 0, c = s; a < c.length; a++) {
                            o(c[a])
                        }
                        return i
                    }
                }
            }
            )
              , on = Ce.hX;
            Ce.DZ,
            Ce.uK,
            Ce.tV;
            Ce.oA,
            Ce.oh;
            var an = "Record";
            var cn = Ce.Eh
              , un = (Ce.uZ,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            Ce.nr,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            D.Df,
            n(654))
              , ln = n(214)
              , fn = function(e) {
                return function(t) {
                    return [void 0, e(t)]
                }
            }
              , dn = function(e) {
                return function(t) {
                    return [e(t), t]
                }
            }
              , pn = function(e, t) {
                return (0,
                r.zG)(e, _n(t))
            }
              , gn = function(e, t) {
                return (0,
                r.zG)(e, mn(t))
            }
              , hn = function(e, t) {
                return (0,
                r.zG)(e, vn(t))
            }
              , _n = function(e) {
                return function(t) {
                    return function(n) {
                        var r = t(n)
                          , s = r[0]
                          , i = r[1];
                        return [e(s), i]
                    }
                }
            }
              , mn = function(e) {
                return function(t) {
                    return function(n) {
                        var r = t(n)
                          , s = r[0]
                          , i = r[1]
                          , o = e(i)
                          , a = o[0]
                          , c = o[1];
                        return [s(a), c]
                    }
                }
            }
              , bn = function(e) {
                return function(t) {
                    return [e, t]
                }
            }
              , vn = function(e) {
                return function(t) {
                    return function(n) {
                        var r = t(n)
                          , s = r[0]
                          , i = r[1];
                        return e(s)(i)
                    }
                }
            }
              , wn = "State"
              , yn = {
                URI: wn,
                map: pn
            }
              , kn = {
                URI: wn,
                map: pn,
                ap: gn
            }
              , Sn = (0,
            ye.N)(kn)
              , In = (0,
            ye.a1)(kn)
              , Gn = {
                URI: wn,
                map: pn,
                ap: gn,
                of: bn
            }
              , zn = {
                URI: wn,
                map: pn,
                ap: gn,
                chain: hn
            }
              , qn = (0,
            Ae.m)(zn)
              , Un = (r.yR,
            (0,
            Te.YO)(yn))
              , En = (0,
            Ae.a)(zn)
              , xn = function(e) {
                var t = function(e) {
                    return function(t) {
                        return function(n) {
                            for (var r = e(0, $e.YM(t))(n), s = [r[0]], i = r[1], o = 1; o < t.length; o++) {
                                var a = e(o, t[o])(i)
                                  , c = a[0]
                                  , u = a[1];
                                s.push(c),
                                i = u
                            }
                            return [s, i]
                        }
                    }
                }(e);
                return function(e) {
                    return $e.Od(e) ? t(e) : bn($e.Xl)
                }
            }
              , Pn = function(e) {
                return xn((function(t, n) {
                    return e(n)
                }
                ))
            }
              , Cn = Pn(r.yR);
            const On = e => ({
                aggregations: {
                    PageviewEngagement: {
                        engaged_time: 0
                    },
                    SegmentEntry: new Set,
                    SegmentExit: new Set,
                    CohortEntry: new Set,
                    CohortExit: new Set
                },
                customProperties: {},
                sessionId: e.sessionId,
                viewId: e.viewId
            })
              , Dn = e => t => {
                const n = new Set(t);
                return n.add(e),
                n
            }
              , An = e => t => {
                const n = new Set(t);
                return n.delete(e),
                n
            }
              , Tn = e => [...e];
            var jn, Mn, Rn = n(153);
            !function(e) {
                e.init = function(e) {
                    return e && "object" == typeof e && "externalStateMap"in e && "internalStateMap"in e ? e : {
                        externalStateMap: o.YP,
                        internalStateMap: {},
                        migrationVersion: hr
                    }
                }
            }(jn || (jn = {})),
            function(e) {
                e.sequenceNonEmptyArray = e => {
                    if (1 === e.length)
                        return e[0];
                    const t = (0,
                    r.bc)([], {}, []);
                    for (const n of e) {
                        t[0].push(...n[0]);
                        for (const e in n[1])
                            t[1][e] = n[1][e];
                        t[2].push(...n[2])
                    }
                    return t
                }
                ,
                e.sequenceArray = t => (0,
                r.zG)(t, o.DT(Rt.Od), o.UI(e.sequenceNonEmptyArray)),
                e.empty = [Rt.cS, Ce.cS, Rt.cS],
                e.error = e => [Rt.of(e), Ce.cS, Rt.cS],
                e.ofOutputEvent = e => [Rt.cS, Ce.cS, [e]]
            }(Mn || (Mn = {}));
            const Fn = e => gr((t => (0,
            r.zG)(Ln((e => ({
                ...e,
                getCurrentSession: () => t.environment.sessionId,
                getCurrentView: () => t.environment.viewId
            }))), vn(( () => {
                return Cn([Yn(e), $n(t.environment.thirdPartyData), (s = t.environment.lookalikeModels,
                (0,
                r.zG)((function(e) {
                    return [e, e]
                }
                ), vn((e => cr.equals(e.lal, s) ? bn(Rt.cS) : (0,
                r.zG)(fn((0,
                g.rO)({
                    lal: (0,
                    r.a9)(s)
                })), Sn(Ln(function(e) {
                    const t = (0,
                    r.zG)(e, o.fS(( () => ({}))));
                    return e => ({
                        ...e,
                        getLookalikeModels: () => t
                    })
                }(s))), vn(( () => (0,
                r.zG)(Rt.Yo(s), Pn(( () => Xn("updateLAL"))), _n(Rt.xH))))))))), (0,
                r.zG)(t.externalStateDelta, o.UI(Vn), o.fS(( () => bn(Rt.bM())))), (n = t.cloudLiftedState,
                (0,
                r.zG)(n, Rt.tS((e => Object.entries(e))), Pn((e => {
                    let[t,n] = e;
                    return dn((e => (0,
                    r.bc)(t, e.queries.runtime.cloudLiftedQueries[t], n)))
                }
                )), vn((e => Zn(R.F2(e)))))), Jn(t.newEvents)]);
                var n, s
            }
            )), _n((0,
            r.ls)(Rt.xH, o.DT(Rt.Od), o.tS(Mn.sequenceArray))), (e => t => {
                let[n,s] = e(t);
                if (o.pC(n)) {
                    let e = n.value
                      , t = 0;
                    const i = 100;
                    let a;
                    for (a = 0; a < i && e[2].length > t; a++) {
                        const n = e[2]
                          , [i,o] = (0,
                        r.zG)(Jn(n.slice(t)), _n((t => Mn.sequenceNonEmptyArray([e, ...t]))), (0,
                        r.nn)(s));
                        e = i,
                        s = o,
                        t = n.length
                    }
                    a >= i && (e = Mn.sequenceNonEmptyArray([e, Mn.error(`Exceeded ${i} iterations when producing transition events`)])),
                    n = o.G(e)
                }
                return (0,
                r.bc)(n, s)
            }
            ), pr(e, "query_language_process_duration"))))
              , Ln = e => fn((0,
            g.rO)({
                effects: e
            }));
            function Yn(e) {
                return (0,
                r.zG)((function(e) {
                    return [e, e]
                }
                ), vn((t => {
                    let {bootstrapped: n, effects: s, eventsForReplay: i} = t;
                    return n ? bn(Rt.cS) : (0,
                    r.zG)(fn((e => ({
                        ...e,
                        bootstrapped: !0,
                        eventsForReplay: []
                    }))), qn(Nn), vn(( () => (0,
                    r.zG)(i, Rt.R3(dr(s)), Pn(Wn("bootstrap")), _n(Rt.xH)))), pr(e, "query_language_bootstrap_duration"))
                }
                )))
            }
            const Nn = () => fn((e => (0,
            r.zG)(e.invalidatedQueries, Rt.EQ(( () => e), Qn(e)))))
              , Qn = e => t => {
                const n = (0,
                r.zG)(t, Rt.UI((t => (0,
                r.bc)(t, {
                    checksum: e.queries.metadata[t]
                }))), (e => Object.fromEntries(e)));
                return (0,
                r.zG)(e, (0,
                g.rO)({
                    persistentState: (0,
                    g.rO)({
                        internalStateMap: e => ({
                            ...n,
                            ...e
                        })
                    })
                }))
            }
              , Bn = (0,
            r.zG)(dn((e => e.tpdQueries)), vn(o.EQ(( () => (0,
            r.zG)(dn((e => new Set([...e.queries.runtime.queriesByEvent["!UpdateSecondPartyData"] || [], ...e.queries.runtime.queriesByEvent["!UpdateThirdPartyData"] || []]))), qn((e => fn((0,
            g.rO)({
                tpdQueries: () => o.G(e)
            })))))), bn)));
            function $n(e) {
                const t = (0,
                r.zG)(e, o.UI(a.li));
                return (0,
                r.zG)((function(e) {
                    return [e, e]
                }
                ), vn((n => {
                    if (o.Eh(H.Eq).equals(t, n.tpdHashInEffectsObject))
                        return bn(Rt.cS);
                    const s = o.FS(t);
                    return (0,
                    r.zG)(fn((0,
                    g.rO)({
                        persistentState: (0,
                        g.rO)({
                            tpdHash: (0,
                            r.a9)(s)
                        }),
                        tpdHashInEffectsObject: (0,
                        r.a9)(t),
                        tpdReady: (0,
                        r.a9)(o.pC(e))
                    })), _n(( () => (0,
                    r.zG)(e, o.UI(a.Yg)))), qn((e => Ln(function(e) {
                        const t = ur(( () => (0,
                        r.zG)(e, o.fS(( () => ({
                            "3p": {}
                        }))))));
                        return e => {
                            const n = ur(( () => ({
                                ...t(),
                                ...e.get1PSegments()
                            })));
                            return {
                                ...e,
                                getSegments: n,
                                getSegmentsArray: ur(( () => fr(n()))),
                                get3PSegments: t
                            }
                        }
                    }(e)))), vn(o.fw(Gn)(( () => (0,
                    r.zG)(n.tpdEventsToProcess, Rt.EQ(( () => s !== n.persistentState.tpdHash ? Xn("updateTPD") : bn(Rt.cS)), (0,
                    r.ls)(Pn(Wn("updateTPD")), Sn(fn((e => ({
                        ...e,
                        tpdEventsToProcess: []
                    })))), _n(Rt.xH))))))), _n(o.fS(( () => Rt.bM()))))
                }
                )))
            }
            const Hn = e => Ce.jt(( (t, n) => (0,
            r.zG)(Ce.P5(t, e.metadata), o.tS((e => Ce.P5(e, n))), o.tS((n => (0,
            r.zG)(Ce.P5(t, e.runtime.locallyLiftedQueries), o.wp(( () => Ce.P5(t, e.runtime.cloudLiftedQueries))), o.NG((e => e.compact(n)))))), o.tS((0,
            r.ls)(X, o.Uo)))))
              , Kn = (e, t) => {
                if (Ce.xb(e))
                    return t;
                if (Ce.xb(t))
                    return e;
                const n = {
                    ...e
                };
                for (const e in t)
                    n[e] = (0,
                    r.zG)(o.ij(n[e]), o.EQ(( () => t[e]), (n => (0,
                    r.zG)(o.Y3(( () => Pe(n, t[e]))), o.fS(( () => t[e]))))));
                return n
            }
            ;
            function Vn(e) {
                return (0,
                r.zG)(dn((t => (0,
                r.zG)(e, Hn(t.queries), (e => (0,
                r.zG)(t.persistentState.externalStateMap, o.UI(Ce.DZ((0,
                r.ls)(X, o.Uo))), o.EQ(( () => e), (t => Kn(t, e))))), Ce.UI(V)))), vn((e => fn((0,
                g.rO)({
                    persistentState: (0,
                    g.rO)({
                        externalStateMap: (0,
                        r.a9)(o.G(e))
                    })
                })))), vn(( () => Xn("updateExternalState"))))
            }
            function Xn(e) {
                return (0,
                r.zG)(dn((e => dr(e.effects))), vn(Wn(e)))
            }
            function Jn(e) {
                return (0,
                r.zG)(e, Rt.EQ(( () => bn(Rt.bM())), (0,
                r.ls)(nr, vn(Pn((e => {
                    let[t,n] = e;
                    return (0,
                    r.zG)(n, Wn(t))
                }
                ))), _n(Rt.xH))))
            }
            function Wn(e) {
                return (0,
                r.ls)(bn, qn((e => "Pageview" !== e.name ? bn(void 0) : fn((0,
                g.rO)({
                    pageviewProperties: (0,
                    r.a9)(e.properties)
                })))), "bootstrap" === e ? r.yR : qn((e => {
                    return fn((0,
                    g.rO)({
                        unprocessedPageviewComplete: (t = e,
                        e => {
                            switch (t.name) {
                            case "Pageview":
                                return t.view_id !== e.viewId ? e : {
                                    ...e,
                                    customProperties: t.properties
                                };
                            case "SegmentEntry":
                                {
                                    const n = t.properties.segment_number;
                                    return (0,
                                    r.zG)(e, (0,
                                    g.rO)({
                                        aggregations: e => e.SegmentExit.has(n) ? (0,
                                        r.zG)(e, (0,
                                        g.rO)({
                                            CohortExit: An(String(n)),
                                            SegmentExit: An(n)
                                        })) : (0,
                                        r.zG)(e, (0,
                                        g.rO)({
                                            CohortEntry: Dn(String(n)),
                                            SegmentEntry: Dn(n)
                                        }))
                                    }))
                                }
                            case "SegmentExit":
                                {
                                    const n = t.properties.segment_number;
                                    return (0,
                                    r.zG)(e, (0,
                                    g.rO)({
                                        aggregations: e => e.SegmentEntry.has(n) ? (0,
                                        r.zG)(e, (0,
                                        g.rO)({
                                            CohortEntry: An(String(n)),
                                            SegmentEntry: An(n)
                                        })) : (0,
                                        r.zG)(e, (0,
                                        g.rO)({
                                            CohortExit: Dn(String(n)),
                                            SegmentExit: Dn(n)
                                        }))
                                    }))
                                }
                            case "PageviewEngagement":
                                {
                                    if (t.view_id !== e.viewId)
                                        return e;
                                    const n = t.properties;
                                    return (0,
                                    r.zG)(e, (0,
                                    g.rO)({
                                        aggregations: (0,
                                        g.rO)({
                                            PageviewEngagement: () => ({
                                                engaged_time: n.total_engaged_time,
                                                completion: n.total_completion
                                            })
                                        })
                                    }))
                                }
                            default:
                                return e
                            }
                        }
                        )
                    }));
                    var t
                }
                )), qn((e => {
                    return ir(e) ? Ln((t = e.properties.segment_number,
                    n = "SegmentEntry" === e.name,
                    e => {
                        return (0,
                        r.zG)(e, (s = {
                            "1p": {
                                ...e.get1PSegments()["1p"],
                                [t]: n
                            }
                        },
                        e => {
                            const t = ur(( () => ({
                                ...s,
                                ...e.get3PSegments()
                            })));
                            return {
                                ...e,
                                getSegments: t,
                                getSegmentsArray: ur(( () => fr(t()))),
                                get1PSegments: () => s
                            }
                        }
                        ));
                        var s
                    }
                    )) : bn(void 0);
                    var t, n
                }
                )), Un("event"), En("queriesToProcess", (t => {
                    let {event: n} = t;
                    return function(e, t) {
                        return (0,
                        r.zG)((function(e) {
                            return [e, e]
                        }
                        ), Un("state"), En("tpdQueriesToReject", (e => {
                            let {state: {tpdReady: t}} = e;
                            return t ? bn(o.bM()) : (0,
                            r.zG)(Bn, _n(o.DT((e => e.size > 0))))
                        }
                        )), vn((n => {
                            let {state: s, tpdQueriesToReject: i} = n;
                            const a = (0,
                            r.zG)(i, o.UI((e => Rt.hX((t => !e.has(t))))), o.fS(( () => e => e)));
                            switch (e) {
                            case "bootstrap":
                                return bn((0,
                                r.zG)(s.queriesForReplay, a));
                            case "event":
                                const e = s.tpdReady ? bn(void 0) : fn((0,
                                g.rO)({
                                    tpdEventsToProcess: Rt.R3(t)
                                }));
                                return (0,
                                r.zG)(bn(s.locallyLiftedQueriesByEvent[t.name] || []), _n(a), Sn(e));
                            case "lookalikeTransition":
                                return bn(s.locallyLiftedQueriesByEvent[t.name] || []);
                            case "transition":
                                const n = s.locallyLiftedQueriesByEvent[t.name] || [];
                                if (o.pC(s.lal)) {
                                    const e = s.locallyLiftedQueriesByEvent["!UpdateLookalikeModels"] || [];
                                    return bn(n.concat(e))
                                }
                                return bn(n);
                            case "updateExternalState":
                                return bn((0,
                                r.zG)(s.persistentState.externalStateMap, o.fS(( () => ({}))), Ce.XP));
                            case "updateLAL":
                                return bn(s.locallyLiftedQueriesByEvent["!UpdateLookalikeModels"] || []);
                            case "updateTPD":
                                return bn([...s.locallyLiftedQueriesByEvent["!UpdateSecondPartyData"] || [], ...s.locallyLiftedQueriesByEvent["!UpdateThirdPartyData"] || []]);
                            default:
                                return bn([])
                            }
                        }
                        )))
                    }(e, n)
                }
                )), vn((t => {
                    let {event: n, queriesToProcess: s} = t;
                    return (0,
                    r.zG)(s, Rt.EQ(( () => bn(Rt.bM())), (t => (0,
                    r.zG)(dn((t => "bootstrap" !== e ? t.effects : {
                        ...t.effects,
                        getCurrentTime: () => n.time,
                        getCurrentView: () => n.view_id,
                        getCurrentSession: () => n.session_id
                    })), vn((e => (0,
                    r.zG)(dn((e => (0,
                    r.zG)(t, Rt.DZ((t => (0,
                    r.zG)(Ce.P5(t, e.queries.runtime.locallyLiftedQueries), o.wp(( () => Ce.P5(t, e.cloudLiftQueriesForReplay))), o.UI((e => (0,
                    r.bc)(t, e))))))))), vn((t => Zn(R.t$((0,
                    r.bc)(t, n)), e))))))))))
                }
                )))
            }
            const Zn = (e, t) => (0,
            r.zG)(e, R.EQ((e => {
                let[n,s] = e;
                return (0,
                r.zG)(n, Pn((e => {
                    let[n,r] = e;
                    return er(n, R.t$([r, s]), t)
                }
                )))
            }
            ), Pn((e => {
                let[t,n,r] = e;
                return er(t, R.F2([n, r]))
            }
            ))), _n(Mn.sequenceArray), qn(o.fw(Gn)((e => {
                let[,t] = e;
                return fn((0,
                g.rO)({
                    persistentState: (0,
                    g.rO)({
                        internalStateMap: e => ({
                            ...e,
                            ...t
                        })
                    })
                }))
            }
            ))), _n(Rt.Yo))
              , er = (e, t, n) => (0,
            r.zG)(dn(R.it((s => {
                var i, c, u;
                const l = n ?? s.effects
                  , f = (0,
                r.zG)(t, R.EQ(a.li, a.li))
                  , [d,p] = (0,
                r.zG)(t, R.aD((e => {
                    let[t,n] = e;
                    return (0,
                    r.bc)(t.lift(n, l), ar({
                        null: null,
                        encode: r.yR,
                        decode: R.of,
                        append: t.append
                    }))
                }
                ), (e => {
                    let[,t] = e;
                    return (0,
                    r.bc)(t, ar(or()))
                }
                )))
                  , g = (0,
                r.zG)(s.persistentState.externalStateMap, o.tS(Ce.P5(e)))
                  , h = s.persistentState.internalStateMap[e] || {
                    checksum: s.queries.metadata[e]
                }
                  , _ = p(e, l, f, h, g, d)
                  , m = Boolean(null === (i = _.result) || void 0 === i ? void 0 : i.result) !== Boolean(null === (c = s.persistentState.internalStateMap[e]) || void 0 === c || null === (u = c.result) || void 0 === u ? void 0 : u.result)
                  , b = (0,
                r.zG)(Rt.lo(m), Rt.UI(( () => {
                    var t;
                    return {
                        name: null !== (t = _.result) && void 0 !== t && t.result ? "SegmentEntry" : "SegmentExit",
                        time: l.getCurrentTime(),
                        view_id: l.getCurrentView(),
                        session_id: l.getCurrentSession(),
                        properties: {
                            ...s.pageviewProperties,
                            segment_number: Number(e)
                        }
                    }
                }
                )));
                return (0,
                r.bc)(_, b)
            }
            ), (t => `Failed to interpret query ${e}. Got ${t}`))), vn(R.EQ((e => bn([[e], Ce.cS, Rt.cS])), (t => {
                let[n,s] = t;
                return (0,
                r.zG)(n.dropExternalState ? tr(e) : bn(void 0), _n(( () => [Rt.cS, {
                    [e]: n
                }, s])))
            }
            ))))
              , tr = e => fn((0,
            g.rO)({
                persistentState: (0,
                g.rO)({
                    externalStateMap: o.UI(Ce.EG(e))
                })
            }));
            function nr(e) {
                const t = e => t => (0,
                r.bc)(e, t);
                return dn((n => (0,
                r.zG)(e, Rt.pO(ln.aL(( (e, t) => {
                    const n = ir(e);
                    return (0,
                    r.zG)(t, Rt.zT((e => ir(e) === n)), (e => {
                        let {init: t, rest: n} = e;
                        return (0,
                        r.bc)(t, n)
                    }
                    ), (0,
                    a.pL)(( (e, t) => n => (0,
                    r.bc)(e, (0,
                    r.zG)(n, Rt.Ce(t))))(n, e)))
                }
                ))), Rt.tS((e => {
                    let[s,i] = e;
                    if (!s)
                        return (0,
                        r.zG)(i, Rt.UI(t("event")));
                    const o = (0,
                    r.zG)(i, Rt.yW((e => n.lookalikeTransitionSegmentNumbers.has(e.properties.segment_number))), (e => e ? "lookalikeTransition" : "transition"));
                    return (0,
                    r.zG)(i, ln.ut(( (e, n) => (0,
                    r.zG)(e, Rt.UI(t("event")), Rt.R3((0,
                    r.zG)(n, t(o)))))))
                }
                )))))
            }
            const rr = (0,
            r.ls)(Ce.hX((e => {
                var t;
                return Boolean(null === (t = e.result) || void 0 === t ? void 0 : t.result)
            }
            )), Ce.XP, Rt.UI(parseInt))
              , sr = (0,
            r.ls)(Kt((e => e.activations ?? {})), on((0,
            r.zG)(Boolean, (0,
            Oe.xD)((0,
            Oe.ff)($t)))));
            function ir(e) {
                var t;
                return ("SegmentEntry" === e.name || "SegmentExit" === e.name) && void 0 !== (null === (t = e.properties) || void 0 === t ? void 0 : t.segment_number)
            }
            const or = () => ({
                null: {
                    kind: "null",
                    value: null
                },
                encode: V,
                decode: X,
                append: xe
            })
              , ar = e => (t, n, s, i, a, c) => {
                const u = {
                    ...i.activations
                }
                  , l = {
                    ...n,
                    setSegmentActivation: (e, n, r) => {
                        if (r != t)
                            throw new Error(`QL called setSegmentActivation for query ${r} while interpreting query ${t}`);
                        e in u ? u[e].includes(n) || (u[e] = [...u[e], n]) : u[e] = [n]
                    }
                }
                  , f = o.ij(i.state)
                  , d = o.ij(c)
                  , p = (0,
                r.zG)((0,
                ye.gz)(o.G5)(f, d), o.UI((t => {
                    let[n,s] = t;
                    const i = (0,
                    r.zG)(e.decode(n), R.fS(( () => e.null)))
                      , o = (0,
                    r.zG)(e.decode(s), R.fS(( () => e.null)));
                    try {
                        return R.F2(e.append(i, o))
                    } catch (e) {
                        throw (0,
                        un.w)(`Failed to append lifted event ${JSON.stringify(s)} to internal state ${JSON.stringify(n)}. Got ${e}`)
                    }
                }
                )), o.Gk(( () => (0,
                r.zG)(f, o.wp(( () => d)), o.UI(R.t$)))))
                  , h = (0,
                r.zG)(p, o.UI(R.EQ(r.yR, e.encode)), o.tS(o.ij))
                  , {overallState: _, dropExternalState: m} = (0,
                r.zG)((0,
                ye.gz)(o.G5)(p, a), o.UI((t => {
                    let[n,s] = t;
                    return (0,
                    r.zG)(o.Uo(e.decode(s)), o.tS((t => (0,
                    r.zG)(n, R.vx(e.decode), R.fS(( () => e.null)), o.it((n => e.append(n, t)))))), o.EQ(( () => ({
                        overallState: h,
                        dropExternalState: !0
                    })), (t => ({
                        overallState: o.ij(e.encode(t)),
                        dropExternalState: !1
                    }))))
                }
                )), o.fS(( () => (0,
                r.zG)(h, o.Gk(( () => a)), (e => ({
                    overallState: e,
                    dropExternalState: !1
                }))))), (0,
                g.rO)({
                    overallState: o.WG
                }))
                  , b = s.interpret(_, l);
                return {
                    checksum: i.checksum,
                    ...(0,
                    r.zG)(h, o.aD(( () => ({})), (e => ({
                        state: e
                    })))),
                    ...!1 === b.result ? {} : {
                        result: b
                    },
                    ...$t(u) ? {} : {
                        activations: u
                    },
                    ...!1 === m ? {} : {
                        dropExternalState: m
                    }
                }
            }
              , cr = o.Eh({
                equals: (e, t) => e === t
            });
            function ur(e) {
                let t, n = !1;
                return () => (n || (t = e(),
                n = !0),
                t)
            }
            function lr(e) {
                const t = ur(( () => (0,
                r.zG)(e, Ce.hX((e => {
                    var t;
                    return Boolean(null === (t = e.result) || void 0 === t ? void 0 : t.result)
                }
                )), Ce.UI(( () => !0)), (e => ({
                    "1p": e
                })))))
                  , n = {
                    "3p": {}
                }
                  , s = ur(( () => ({
                    ...t(),
                    ...n
                })));
                return {
                    getSegments: s,
                    getSegmentsArray: ur(( () => fr(s()))),
                    get1PSegments: t,
                    get3PSegments: () => n
                }
            }
            function fr(e) {
                return Object.keys(e).reduce(( (t, n) => {
                    const r = Object.keys(e[n])
                      , s = [];
                    return r.forEach((t => {
                        !0 === e[n][t] && s.push(t)
                    }
                    )),
                    t[n] = s,
                    t
                }
                ), {})
            }
            const dr = e => ({
                name: "",
                properties: {},
                session_id: e.getCurrentSession(),
                view_id: e.getCurrentView(),
                time: e.getCurrentTime()
            })
              , pr = (e, t) => n => r => {
                const s = e.startSpan(t)
                  , i = n(r);
                return s.finish(),
                i
            }
              , gr = e => t => (0,
            r.zG)(fn((0,
            g.rO)({
                unprocessedPageviewComplete: (0,
                r.ls)(o.DT((e => e.viewId === t.environment.viewId)), o.fS(( () => On(t.environment))))
            })), In(dn((e => (0,
            r.zG)(o.ij(e.persistentState.unprocessedPVC), o.hX((e => e.view_id !== t.environment.viewId)), o.UI(Rn.k))))), Un("flushedPvc"), En("processingResult", (n => {
                let {flushedPvc: s} = n;
                return e({
                    ...t,
                    newEvents: (0,
                    r.zG)(s, o.EQ(( () => t.newEvents), (e => [...t.newEvents, e])))
                })
            }
            )), qn(( () => fn((e => {
                return {
                    ...e,
                    persistentState: {
                        ...e.persistentState,
                        unprocessedPVC: (0,
                        Rn.X)((t = new Date,
                        n = e.unprocessedPageviewComplete,
                        {
                            name: "PageviewComplete",
                            time: t,
                            session_id: n.sessionId,
                            view_id: n.viewId,
                            properties: {
                                ...n.customProperties,
                                aggregations: (0,
                                r.zG)(n.aggregations, (0,
                                g.rO)({
                                    SegmentEntry: Tn,
                                    SegmentExit: Tn,
                                    CohortEntry: Tn,
                                    CohortExit: Tn
                                }))
                            }
                        }))
                    }
                };
                var t, n
            }
            )))), _n((e => {
                let {flushedPvc: t, processingResult: n} = e;
                const s = (0,
                r.zG)(t, o.UI(Mn.ofOutputEvent));
                return (0,
                r.zG)((0,
                ye.gz)(o.G5)(s, n), o.UI(Mn.sequenceNonEmptyArray), o.wp(( () => s)), o.wp(( () => n)))
            }
            )))
              , hr = 2
              , _r = e => t => {
                const n = t.migrationVersion ?? (t.stateIsCompact ? 1 : 0);
                return (0,
                r.zG)([mr, br], Rt.md(n), Rt.EQ(( () => t), (0,
                r.ls)(Rt.OV(e), Rt.u4(t, ( (e, t) => t(e))), (0,
                g.rO)({
                    migrationVersion: () => hr
                }))))
            }
              , mr = e => (0,
            g.rO)({
                externalStateMap: o.UI(Ce.jt(( (t, n) => (0,
                r.zG)(Ce.P5(t, e.locallyLiftedQueries), o.wp(( () => Ce.P5(t, e.cloudLiftedQueries))), o.NG((e => e.compact(n))))))),
                internalStateMap: Ce.Su(( (t, n) => {
                    if (null == (null == n ? void 0 : n.state))
                        return n;
                    const r = e.locallyLiftedQueries[t] || e.cloudLiftedQueries[t];
                    return {
                        ...n,
                        state: r.compact(n.state)
                    }
                }
                ))
            })
              , br = e => {
                const t = new Set(e.queriesByEvent.PageviewEngagement ?? [])
                  , n = new Set(e.queriesByEvent.PageviewComplete ?? []);
                return (0,
                g.rO)({
                    internalStateMap: Ce.z7((0,
                    Oe.ff)((e => t.has(e) && n.has(e))))
                })
            }
              , vr = (e, t) => Ce.xb(t) ? e : (0,
            r.zG)(e, Ce.z7((e => !(e in t))));
            var wr = n(644)
              , yr = n(729);
            const kr = () => e => ((0,
            r.zG)(e, i.UI((e => e()))),
            i.a9({
                newResults: d.of(Rt.cS),
                pendingEvents: Rt.cS
            }))
              , Sr = () => () => De.of(( () => ({})))
              , Ir = e => [e, lt.of(e)]
              , Gr = a.li
              , zr = a.Yg
              , qr = e => t => (0,
            r.zG)(zr(t), (t => () => new Promise((n => {
                const r = t();
                r.then(o.G).then(n);
                const s = (0,
                p.HJ)(( () => n(o.YP)), e);
                r.then(s)
            }
            ))))
              , Ur = e => t => [e, t]
              , Er = "RefEventual"
              , xr = i.UI(Ir)
              , Pr = e => i.a9(Ir(e))
              , Cr = e => t => i.vP((0,
            r.zG)(t, i.UI(Gr), i.UI(e)), (0,
            r.zG)(t, i.UI(zr), i.UI(lt.UI(e))))
              , Or = e => t => i.vP((0,
            r.zG)(i.vP((0,
            r.zG)(e, i.UI(Gr)), (0,
            r.zG)(t, i.UI(Gr))), i.UI((e => {
                let[t,n] = e;
                return n(t)
            }
            ))), (0,
            r.zG)(i.vP((0,
            r.zG)(e, i.UI(zr)), (0,
            r.zG)(t, i.UI(zr))), i.UI((e => {
                let[t,n] = e;
                return lt.ap(t)(n)
            }
            ))))
              , Dr = e => t => (0,
            r.zG)(t.current, qr(e), lt.UI(o.fS(( () => (e => Gr(e.current))(t)))))
              , Ar = i.UI(Gr)
              , Tr = i.UI(zr)
              , jr = {
                URI: Er,
                map: (e, t) => Cr(t)(e)
            }
              , Mr = {
                URI: Er,
                map: jr.map,
                ap: (e, t) => Or(t)(e)
            }
              , Rr = e => s.dQ((t => {
                let {previousState: n} = t;
                const [s,c] = (0,
                r.zG)(e.newEvents, i.En(2, Rt.uZ()), (0,
                wr.H5)(kr(e.permutiveApi, e.permutiveUrls, (u = e.customQueries.runtime,
                (0,
                r.zG)(Object.entries(u.queriesByEvent), Rt.hX((e => {
                    let[,t] = e;
                    return (0,
                    r.zG)(t, Rt.G((e => e in u.cloudLiftedQueries)))
                }
                )), Rt.UI(a.li))))));
                var u;
                const l = i.vP({
                    lookalikeModels: e.lookalikeModels,
                    sessionId: e.sessionId,
                    thirdPartyData: (0,
                    r.zG)(e.thirdPartyData, i.UI(o.UI((0,
                    wr.H5)(Ce.UI((e => {
                        const t = {};
                        return e.forEach((e => t[e] = !0)),
                        t
                    }
                    )))))),
                    viewId: e.viewId
                })
                  , f = (0,
                r.zG)(i.vP({
                    cloudLiftedState: (0,
                    r.zG)(c, i.UI((e => e.newResults))),
                    environment: l,
                    externalStateDelta: e.externalStateDelta,
                    newEvents: (0,
                    r.zG)(s, (0,
                    yr.I)(e.metrics, "query_language_began_processing_pageview"))
                }), i.UI((0,
                g.rO)({
                    environment: e => d.of(e)
                })), i.UI((0,
                ye.Yt)(d.G5)))
                  , p = jn.init(n);
                const h = Sr(e.permutiveApi, e.permutiveUrls)
                  , _ = (0,
                r.zG)(n ? lt.of({
                    processedState: p,
                    stateMigratedThisInitialisation: !1
                }) : (e.metrics.track({
                    name: "sdk_query_state_migrated_workerisation_count_total",
                    labels: {},
                    value: 1
                }),
                (0,
                r.zG)(e.migratedStateMaps, lt.UI((e => {
                    let {internal: t, external: n} = e;
                    return {
                        stateMigratedThisInitialisation: !0,
                        processedState: {
                            externalStateMap: n,
                            internalStateMap: (0,
                            r.zG)(t, o.fS(( () => ({}))))
                        }
                    }
                }
                )))), lt.Hr("environment", ( () => l.current)), lt.ak("process", (t => {
                    let {environment: n, processedState: s} = t;
                    return (0,
                    r.zG)((i = {
                        downloadCloudLiftQueries: h,
                        environment: n,
                        initialState: s,
                        pastEvents: e.priorEvents,
                        queries: e.customQueries
                    },
                    (0,
                    r.zG)(lt.Do, lt.Hr("persistentState", ( () => (0,
                    r.zG)(i.initialState, (0,
                    g.rO)({
                        internalStateMap: Ce.z7(( (e, t) => t.checksum === i.queries.metadata[e]))
                    }), _r(i.queries.runtime)))), lt.Hr("invalidatedLocalQueries", (e => {
                        let {persistentState: {internalStateMap: t}} = e;
                        return vr(i.queries.runtime.locallyLiftedQueries, t)
                    }
                    )), lt.Hr("invalidatedCloudLiftQueries", (e => {
                        let {persistentState: {internalStateMap: t}} = e;
                        return vr(i.queries.runtime.cloudLiftedQueries, t)
                    }
                    )), lt.Hr("hasInvalidatedQueries", (e => {
                        let {invalidatedCloudLiftQueries: t, invalidatedLocalQueries: n} = e;
                        return !(Ce.xb(t) && Ce.xb(n))
                    }
                    )), lt.ak("eventsForReplay", (e => {
                        let {hasInvalidatedQueries: t} = e;
                        return t ? i.pastEvents : lt.of(Rt.bM())
                    }
                    )), lt.ak("cloudLiftQueriesForReplay", (0,
                    r.ls)(o.DT((e => e.eventsForReplay.length > 0)), o.UI((e => Object.keys(e.invalidatedCloudLiftQueries))), o.hX(Rt.Od), o.UI((0,
                    r.ls)(i.downloadCloudLiftQueries, De.OV(i.queries.runtime), lt.UI(R.fS(( () => ({})))))), o.fS(( () => lt.of({}))))), lt.Hr("queriesForReplay", (e => {
                        let {cloudLiftQueriesForReplay: t, invalidatedLocalQueries: n} = e;
                        return [...Object.keys(n), ...Object.keys(t)]
                    }
                    )), lt.UI((e => {
                        let {cloudLiftQueriesForReplay: t, eventsForReplay: n, invalidatedCloudLiftQueries: s, invalidatedLocalQueries: a, queriesForReplay: c, persistentState: u} = e;
                        return {
                            bootstrapped: !1,
                            cloudLiftQueriesForReplay: t,
                            effects: {
                                getCurrentTime: () => new Date,
                                getCurrentSession: () => i.environment.sessionId,
                                getCurrentView: () => i.environment.viewId,
                                getLookalikeModels: () => ({}),
                                setSegmentActivation: (e, t, n) => {
                                    throw new Error(`setSegmentActivation() called for segment ${n} without being overridden first.`)
                                }
                                ,
                                ...lr(u.internalStateMap)
                            },
                            eventsForReplay: n,
                            invalidatedQueries: [...Object.keys(s), ...Object.keys(a)],
                            lal: o.YP,
                            locallyLiftedQueriesByEvent: (0,
                            r.zG)(i.queries.runtime.queriesByEvent, Ce.DZ(o.KQ(Rt.hX((e => e in i.queries.runtime.locallyLiftedQueries))))),
                            lookalikeTransitionSegmentNumbers: (0,
                            r.zG)(i.queries.runtime.queriesByEvent["!UpdateLookalikeModels"] || Rt.cS, Rt.UI(parseInt), (e => new Set(e))),
                            pageviewProperties: {},
                            numEventsForReplay: n.length,
                            queries: i.queries,
                            queriesForReplay: c,
                            persistentState: u,
                            tpdEventsToProcess: Rt.cS,
                            tpdHashInEffectsObject: o.YP,
                            tpdQueries: o.YP,
                            tpdReady: !1,
                            unprocessedPageviewComplete: On({
                                sessionId: i.environment.sessionId,
                                viewId: i.environment.viewId
                            })
                        }
                    }
                    )))), e.trace.traceTask("query_language_initialisation_duration"), lt.UI((0,
                    g.bw)((t => {
                        var n;
                        e.metrics.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                            timestamp_name: "query_language_ready",
                            time_origin: "sdk_init"
                        }, performance.now()),
                        e.metrics.trackCounter({
                            name: "sdk_queries_to_replay_count",
                            value: (n = t,
                            0 === n.numEventsForReplay ? 0 : n.queriesForReplay.length),
                            labels: {}
                        })
                    }
                    ))), lt.UI((t => {
                        let n = t;
                        const s = (0,
                        r.zG)(e.validationService, o.OV({
                            downloadCloudLiftQueries: h,
                            externalState: t.persistentState.externalStateMap
                        }));
                        return t => {
                            const [i,a] = (0,
                            r.zG)(t, Fn(e.trace))(n);
                            return (0,
                            r.zG)(s, o.OV((0,
                            r.bc)(t, a))),
                            n = a,
                            [i, a.persistentState]
                        }
                    }
                    )));
                    var i
                }
                )), i.fF)
                  , m = (0,
                r.zG)(_, i.UI(o.UI((e => e.process))))
                  , b = (0,
                r.zG)(_, i.UI(o.EQ(( () => !1), (e => e.stateMigratedThisInitialisation))));
                let v = Rt.bM();
                const w = (0,
                r.zG)(i.vP({
                    processInput: m,
                    inputIO: (0,
                    r.zG)(f, i.UI(o.G))
                }), i.UI((0,
                ye.Yt)(o.G5)), i.UI(o.UI((e => {
                    let {processInput: t, inputIO: n} = e;
                    const s = n()
                      , [i,c] = (0,
                    r.zG)(s, (0,
                    g.rO)({
                        newEvents: Rt.UI(a.Yg),
                        cloudLiftedState: Rt.UI((e => e.state))
                    }), (e => t({
                        ...e
                    })))
                      , u = (0,
                    r.zG)(i, o.EQ(( () => ({
                        errors: [],
                        events: s.newEvents,
                        internalStateDiff: o.YP
                    })), (e => {
                        let[t,n,r] = e;
                        return {
                            errors: t,
                            events: s.newEvents.concat(r.map((e => [(0,
                            g.k$)(), e]))),
                            internalStateDiff: o.G(n)
                        }
                    }
                    )));
                    return v = (0,
                    r.zG)(v, Rt.R3(u)),
                    {
                        consumeDeltas: () => {
                            const e = v;
                            return v = Rt.cS,
                            e
                        }
                        ,
                        modelState: c
                    }
                }
                ))))
                  , y = (0,
                r.zG)(w, i.UI(o.UI((e => e.modelState))))
                  , k = (0,
                r.zG)(w, i.UI(o.UI((e => e.consumeDeltas))), i.UI(o.fS(( () => d.of(Rt.bM())))))
                  , S = (0,
                r.zG)(i.vP(y, c), i.Rp(( (e, t) => {
                    let[n,s] = t;
                    const i = (0,
                    r.zG)(e, o.UI((e => {
                        let[,t] = e;
                        return (0,
                        r.zG)(n, o.EQ(( () => t), (e => (0,
                        r.zG)(t, Rt.hX((t => !t(e, s.pendingEvents)))))))
                    }
                    )), o.fS(( () => Rt.bM())));
                    if (o.pC(n) && Rt.xb(s.pendingEvents))
                        return [Ir(n.value), i];
                    const a = (0,
                    g.b2)()
                      , c = (0,
                    r.zG)(n, o.fS(( () => p)));
                    return [(0,
                    r.zG)(( () => a.promise), Ur(c)), (0,
                    r.zG)(i, Rt.R3(( (e, t) => {
                        const n = Rt.xb(t) || (0,
                        r.zG)(s.pendingEvents, Rt.yW((e => !t.includes(e))));
                        return n && a.resolve(e),
                        n
                    }
                    )))]
                }
                )), i.UI(a.li))
                  , I = (0,
                r.zG)(k, i.En(3, Rt.uZ()), (t => {
                    let[n,s,a] = t;
                    return {
                        errors: (0,
                        r.zG)(n, i.UI(d.UI(Rt.tS((e => e.errors))))),
                        events: (0,
                        r.zG)(s, i.UI(d.UI(Rt.tS((e => e.events)))), (0,
                        yr.F)(e.metrics, "query_language_processed_pageview")),
                        internalStateDiff: (0,
                        r.zG)(a, i.UI(d.UI((0,
                        r.ls)(Rt.DZ((e => e.internalStateDiff)), o.DT(Rt.Od), o.UI((e => e.reduce(( (e, t) => ({
                            ...e,
                            ...t
                        })))))))))
                    }
                }
                ))
                  , G = (0,
                r.zG)(S, Cr((e => e.internalStateMap)))
                  , z = Ar(G);
                return {
                    state: Ar(S),
                    value: {
                        ...I,
                        stateMigratedThisInitialisation: b,
                        internalStateMap: z,
                        processing: (0,
                        r.zG)(i.vP(w, c), i.UI((e => {
                            let[t,n] = e;
                            return o.Wi(t) || Rt.Od(n.pendingEvents)
                        }
                        ))),
                        segments: (0,
                        r.zG)(G, Cr(Fr)),
                        tpdUsage: (0,
                        r.zG)(i.vP(e.thirdPartyData, z), i.UI((e => {
                            let[t,n] = e;
                            return (0,
                            r.zG)(t, o.UI(( () => sr(n))))
                        }
                        ))),
                        unprocessedPageviewComplete: (0,
                        r.zG)(y, i.UI(o.NG((e => e.unprocessedPVC))), i.UI(o.UI(Rn.k)))
                    }
                }
            }
            ))
              , Fr = e => (0,
            r.zG)(rr(e), (e => (0,
            r.zG)(e, Rt.uK((e => e < 1e7)), (t => {
                let {left: n, right: r} = t;
                return {
                    all: e,
                    custom: r,
                    standard: n
                }
            }
            ))));
            var Lr = n(125);
            const Yr = e => Ir(R.F2(e))
              , Nr = "RefEventualEither"
              , Qr = e => i.a9(Yr(e))
              , Br = Te.UI(jr, R.dO)
              , $r = ye.ap(Mr, R.G5)
              , Hr = e => (e => t => {
                const n = t();
                return (0,
                r.zG)(i.fF(( () => n)), i.UI(o.fS(( () => e))), i.UI((e => (0,
                r.bc)(e, ( () => n)))))
            }
            )(R.F2(e))
              , Kr = e => Cr(R.F2)(e)
              , Vr = e => Cr(R.fS(e))
              , Xr = {
                URI: Nr,
                map: (e, t) => Br(t)(e)
            }
              , Jr = {
                URI: Nr,
                map: Xr.map,
                ap: (e, t) => $r(t)(e)
            }
              , Wr = e => Ar(e.all)
              , Zr = (e, t) => n => ({
                all: (0,
                r.zG)(n, Br(e)),
                byAdServer: (0,
                g.mQ)((0,
                r.ls)(t, o.UI((e => (0,
                r.zG)(n, Br(e))))))
            })
              , es = (e, t) => (0,
            r.ls)(Cr(R.F2), Zr(e, t))
              , ts = e => (0,
            r.zG)(e, Cr(R.F2), Zr(r.yR, (e => o.G(e.filterCohorts))))
              , ns = e => ({
                all: (0,
                r.zG)(e.all, Vr(( () => Rt.bM()))),
                byAdServer: (0,
                g.mQ)((0,
                r.ls)(e.byAdServer, o.UI(Vr(( () => Rt.bM())))))
            })
              , rs = e => (0,
            r.zG)(e, ns, Wr)
              , ss = {
                empty: {
                    all: Qr(Rt.bM()),
                    byAdServer: (0,
                    g.mQ)((e => o.YP))
                },
                concat: (e, t) => ({
                    all: (0,
                    r.zG)((0,
                    ye.gz)(Jr)(e.all, t.all), Br(Rt.xH)),
                    byAdServer: (0,
                    g.mQ)((n => (0,
                    r.zG)(Rt.oA([e.byAdServer(n), t.byAdServer(n)]), ln.c2, o.UI((e => e.reduce(( (e, t) => (0,
                    r.zG)((0,
                    ye.gz)(Jr)(e, t), Br(Rt.xH)))))))))
                })
            }
              , is = new Set(["AdRequest", "PageviewEngagement", "PrebidAuctions", "Reaction", "SegmentEntry", "SegmentExit", "SlotRendered", "ThirdPartySegments", "VideoEngagement"])
              , os = function() {
                return (0,
                r.bc)(...arguments)
            };
            var as = n(794);
            const cs = e => {
                let {queries: t, ...n} = e;
                const [s,c] = i.Ue("pending");
                let u = o.G([]);
                const l = e => {
                    const t = Math.ceil(Math.random() * e.length);
                    return (0,
                    r.zG)(e, M.ke(t))
                }
                ;
                (0,
                r.zG)(( () => new Promise((e => setTimeout(e, n.processingDelayMs)))), lt.UI(( () => performance.now())), lt.UI((e => (0,
                r.zG)(u, o.UI(l), o.hX(M.Od), o.UI(j.ur(as.n_({
                    events: Rt.jG(),
                    externalStateDeltas: Rt.jG(),
                    lookalikeModels: as.Z$(),
                    modelState: as.Z$(),
                    thirdPartyData: as.Z$()
                }))), (0,
                g.bw)(( () => {
                    u = o.YP
                }
                )), o.Hr("startTime", ( () => e))))), lt.UI((0,
                g.bw)(o.EQ(( () => c("skipped")), ( () => c("in_progress"))))), At("historicalEvents", ( () => gt(n.historicalEvents))), At("cloudLiftQueries", ( () => (0,
                r.zG)(Object.keys(t.runtime.cloudLiftedQueries), Rt.aD(( () => lt.of(Ce.cS)), (e => (0,
                r.zG)(n.downloadCloudLiftQueries(e), De.OV(t.runtime), lt.UI(R.fS(( () => Ce.cS)))))), gt))), At("expectedSegmentMemberships", Ct((e => ds({
                    events: {
                        historical: e.historicalEvents,
                        new: e.events
                    },
                    externalState: {
                        historical: n.externalState,
                        deltas: e.externalStateDeltas
                    },
                    lookalikeModels: e.lookalikeModels,
                    queries: {
                        cloudLiftQueries: e.cloudLiftQueries,
                        metadata: t.metadata,
                        runtime: t.runtime
                    },
                    thirdPartyData: e.thirdPartyData
                })))), Dt("report", (e => {
                    let {expectedSegmentMemberships: n, modelState: s} = e;
                    return function(e) {
                        const t = new Set(e.expectedSegmentMemberships);
                        return (0,
                        r.zG)(function(e) {
                            const t = function(e) {
                                const t = (0,
                                r.zG)(Object.keys(e.runtime.queriesByEvent), Rt.Su(( (e, t) => [t, 2 ** e])))
                                  , n = {}
                                  , s = Object.fromEntries(t);
                                for (const t in e.runtime.queriesByEvent) {
                                    const r = e.runtime.queriesByEvent[t];
                                    for (const e of r)
                                        n[e] ? n[e] += s[t] : n[e] = s[t]
                                }
                                const i = {};
                                for (const e in n) {
                                    const t = n[e];
                                    i[t] ? i[t].push(e) : i[t] = [e]
                                }
                                return (0,
                                r.zG)(Object.entries(i), Rt.UI((0,
                                r.ls)((0,
                                a.pL)((e => Number(e))), (0,
                                a.pL)((e => (0,
                                r.zG)(t, Rt.DZ((0,
                                r.ls)(o.DT((t => {
                                    let[,n] = t;
                                    return (e & n) > 0
                                }
                                )), o.UI(a.li)))))))))
                            }(e)
                              , n = new Set(Object.keys(e.runtime.cloudLiftedQueries));
                            if (0 === n.size)
                                return (0,
                                r.zG)(t, Rt.UI((0,
                                a.pL)((e => ({
                                    triggers: e,
                                    cloudLifted: !1
                                })))));
                            return (0,
                            r.zG)(t, Rt.tS((e => {
                                let[t,s] = e;
                                const {left: i, right: o} = (0,
                                r.zG)(s, Rt.uK((e => n.has(e))));
                                return [[{
                                    triggers: t,
                                    cloudLifted: !1
                                }, i], [{
                                    triggers: t,
                                    cloudLifted: !0
                                }, o]]
                            }
                            )))
                        }(e.queries), Rt.UI((0,
                        a.H5)((n => ({
                            actualSegments: (0,
                            r.zG)(n, Rt.hX((t => {
                                var n, r;
                                return Boolean(null === (n = e.modelState.persistentState.internalStateMap[t]) || void 0 === n || null === (r = n.result) || void 0 === r ? void 0 : r.result)
                            }
                            ))),
                            expectedSegments: (0,
                            r.zG)(n, Rt.hX((e => t.has(e))))
                        })))))
                    }({
                        expectedSegmentMemberships: n,
                        modelState: s,
                        queries: t
                    })
                }
                )), xt((e => {
                    let {startTime: t} = e;
                    return () => n.metrics.track({
                        name: "sdk_segmentation_validation_duration_seconds",
                        value: (performance.now() - t) / 1e3,
                        labels: {}
                    })
                }
                )), bt((e => e.report)), bt(ls(n.metrics)), bt(( () => c("finished"))))();
                return [s, e => {
                    let[t,n] = e;
                    (0,
                    r.zG)((0,
                    ye.gz)(o.g1)(u, t.environment.lookalikeModels, (0,
                    r.zG)(t.environment.thirdPartyData, o.UI(a.Yg))), o.UI((e => {
                        let[r,s,i] = e;
                        r.push({
                            externalStateDeltas: Rt.Yo(t.externalStateDelta),
                            lookalikeModels: s,
                            events: t.newEvents,
                            modelState: n,
                            thirdPartyData: i
                        })
                    }
                    )))
                }
                ]
            }
            ;
            const us = new Set(["SegmentEntry", "SegmentExit", "PageviewEngagement", "PageviewComplete", "Pageview", "LinkClick", "SlotViewable", "SlotRendered", "UpdateLookalikeModels", "UpdateSecondPartyData", "UpdateThirdPartyData"])
              , ls = e => t => {
                for (const [n,{expectedSegments: s, actualSegments: i}] of t) {
                    if (0 === s.length && 0 === i.length)
                        continue;
                    const {correct: t, incorrect: o, missing: a} = fs(s, i)
                      , c = (0,
                    r.zG)(n.triggers, Rt.UI((e => e.startsWith("!") ? e.slice(1) : e)), Rt.UI((e => us.has(e) ? e : "misc")), (e => [...new Set(e)]), Rt.UI((e => (0,
                    r.bc)(`trigger_${e}`, !0))), Rt.R3((0,
                    r.bc)("is_cloud_lifted", n.cloudLifted)), (e => Object.fromEntries(e)))
                      , u = (t, n) => n.length > 0 && e.trackCounter({
                        name: t,
                        value: n.length,
                        labels: c
                    });
                    u("sdk_segmentation_validation_correct_count_total", t),
                    u("sdk_segmentation_validation_incorrect_count_total", o),
                    u("sdk_segmentation_validation_missing_count_total", a)
                }
            }
              , fs = (e, t) => {
                if (0 === t.length)
                    return {
                        correct: [],
                        incorrect: [],
                        missing: e
                    };
                if (0 === e.length)
                    return {
                        correct: [],
                        incorrect: t,
                        missing: []
                    };
                const n = new Set(t)
                  , s = new Set(e)
                  , {right: i, left: o} = (0,
                r.zG)(t, Rt.uK((e => s.has(e))));
                return {
                    correct: i,
                    incorrect: o,
                    missing: (0,
                    r.zG)(e, Rt.hX((e => !n.has(e))))
                }
            }
            ;
            const ds = e => hs(50, (function*() {
                const t = {
                    ...e.queries.runtime.locallyLiftedQueries,
                    ...e.queries.cloudLiftQueries
                }
                  , n = (0,
                r.zG)(e.queries.runtime.queriesByEvent, Ce.DZ((0,
                r.ls)(o.ij, o.UI(Rt.UI((e => (0,
                r.bc)(e, t[e])))))))
                  , s = (0,
                r.zG)(e.externalState.historical, o.fS(( () => ({}))), Ce.DZ(o.Dj(X)), (t => (0,
                r.zG)(e.externalState.deltas, Rt.UI(Hn(e.queries)), Rt.u4(t, Kn))), Ce.UI(V))
                  , i = {}
                  , a = new gs(e.lookalikeModels,e.thirdPartyData)
                  , c = e => (a.processEvent(e),
                (0,
                r.zG)(n[e.name] ?? [], Rt.DZ((t => {
                    let[n,s] = t;
                    return (0,
                    r.zG)(o.ij(s.lift(e, a.effects)), o.fX((e => i[n] ? (0,
                    r.zG)(e, ps(s, i[n])) : R.F2(e))), o.UI((e => (i[n] = e,
                    n))))
                }
                ))))
                  , u = e => (0,
                r.zG)((e => (0,
                r.zG)(i[e] ?? null, (n => e in s ? (0,
                r.zG)(s[e], ps(t[e], n), R.fS(( () => n))) : n), (n => t[e].interpret(n, a.effects)), (e => e.result)))(e), o.DT((t => t !== a.getSegmentResult(e))), o.UI((t => ({
                    name: t ? "SegmentEntry" : "SegmentExit",
                    properties: {
                        segment_number: Number(e)
                    },
                    time: a.effects.getCurrentTime(),
                    session_id: a.effects.getCurrentSession(),
                    view_id: a.effects.getCurrentView()
                }))))
                  , l = e => {
                    if (0 == e.length)
                        return;
                    const t = (0,
                    r.zG)(e, Rt.tS((0,
                    r.ls)(u, o.UI(c), o.fS(( () => Rt.bM())))));
                    l(t)
                }
                ;
                for (const t of e.events.historical)
                    yield,
                    c(t);
                (0,
                r.zG)(Object.keys(t), l);
                for (const t of e.events.new)
                    switch (yield,
                    t.name) {
                    case "SegmentEntry":
                    case "SegmentExit":
                    case "PageviewComplete":
                        break;
                    default:
                        c(t)
                    }
                return (0,
                r.zG)(Object.keys(t), l),
                a.effects.getSegmentsArray()["1p"]
            }
            ))
              , ps = (e, t) => n => R.Y3(( () => e.append(t, n)), (e => `Failed to append lifted state: ${e}`));
            class gs {
                segments;
                segmentsArray = void 0;
                lastEvent = o.YP;
                effects;
                constructor(e, t) {
                    const n = (0,
                    r.zG)(t, Ce.UI(Ce.hX((e => !0 === e))));
                    this.segments = {
                        ...n,
                        "1p": {}
                    };
                    const s = (0,
                    r.zG)(this.segments, Ce.UI(Object.keys));
                    this.effects = {
                        getLookalikeModels: () => e,
                        getSegments: () => this.segments,
                        getSegmentsArray: () => (this.segmentsArray || (this.segmentsArray = {
                            ...s,
                            "1p": Object.keys(this.segments["1p"])
                        }),
                        this.segmentsArray),
                        setSegmentActivation: () => {}
                        ,
                        getCurrentTime: () => (0,
                        r.zG)(this.lastEvent, o.EQ(( () => new Date), (e => e.time))),
                        getCurrentSession: () => (0,
                        r.zG)(this.lastEvent, o.EQ(( () => ""), (e => e.session_id))),
                        getCurrentView: () => (0,
                        r.zG)(this.lastEvent, o.EQ(( () => ""), (e => e.view_id)))
                    }
                }
                get1pSegments() {
                    return this.effects.getSegmentsArray()["1p"]
                }
                getSegmentResult(e) {
                    return this.segments["1p"][e] ?? !1
                }
                processEvent(e) {
                    if ("SegmentEntry" === e.name) {
                        const t = e.properties.segment_number;
                        t && this.processSegmentEntry([t])
                    } else if ("SegmentExit" === e.name) {
                        const t = e.properties.segment_number;
                        t && this.processSegmentExit([t])
                    } else if ("PageviewComplete" === e.name) {
                        const t = e.properties.aggregations;
                        (null == t ? void 0 : t.SegmentEntry) && this.processSegmentEntry(t.SegmentEntry),
                        (null == t ? void 0 : t.SegmentExit) && this.processSegmentExit(t.SegmentExit)
                    }
                    this.lastEvent = o.G(e)
                }
                processSegmentEntry(e) {
                    for (const t of e)
                        t in this.segments["1p"] || (this.segments["1p"][t] = !0,
                        this.segmentsArray = void 0)
                }
                processSegmentExit(e) {
                    for (const t of e)
                        t in this.segments["1p"] && (delete this.segments["1p"][t],
                        this.segmentsArray = void 0)
                }
            }
            const hs = (e, t) => async () => {
                let n = performance.now();
                const r = t();
                for (; ; ) {
                    performance.now() - n > e && (await new Promise((e => setTimeout(e))),
                    n = performance.now());
                    const t = r.next();
                    if (t.done)
                        return t.value
                }
            }
              , _s = e => s.dQ((e => {
                let {previousState: t} = e;
                return {
                    value: o.YP,
                    state: i.a9(t)
                }
            }
            ))
              , ms = e => s.dQ((t => {
                let {previousState: n} = t;
                const s = (0,
                r.zG)(n, o.DT(g.El), o.xH, o.hX(D.HD))
                  , a = (0,
                r.zG)(s, o.EQ(( () => !1), (t => t === e.sessionId)));
                if (!e.metrics.isEnabled() || Math.random() > .1 || a)
                    return {
                        value: o.YP,
                        state: i.a9(n)
                    };
                const [c,u] = i.Ue(i.a9("pending"));
                return {
                    value: o.G((t => {
                        let {downloadCloudLiftQueries: n, externalState: r} = t;
                        const [s,i] = cs({
                            downloadCloudLiftQueries: n,
                            externalState: r,
                            historicalEvents: e.priorEvents,
                            metrics: e.metrics,
                            processingDelayMs: 6e4,
                            queries: e.customQueries
                        });
                        return u(s),
                        i
                    }
                    )),
                    state: (0,
                    r.zG)(i.xH(c), i.UI((0,
                    r.ls)(o.DT((e => "in_progress" === e || "finished" === e)), o.UI(( () => e.sessionId)), o.wp(( () => s)))))
                }
            }
            ))
              , bs = e => (0,
            r.zG)(s.K4((t => {
                let {stopped: n} = t;
                const [s,a] = i.Ue(i.a9(d.of(o.YP)));
                let c;
                const u = new Promise((e => {
                    c = e
                }
                ));
                return {
                    priorEvents: () => u.then((e => e())),
                    externalStateDelta: i.xH(s),
                    newEvents: (0,
                    r.zG)(i.vP(e.newEvents, n), i.UI((e => {
                        let[t,n] = e;
                        return n ? () => [] : t
                    }
                    ))),
                    setCachedPriorEvents: c,
                    setExternalStateDelta: a
                }
            }
            )), s.ak("segmentationValidation", (t => {
                let {priorEvents: n} = t;
                return (0,
                r.zG)(e.eventsCache, R.EQ(( () => _s), ( () => ms)), (t => t({
                    ...e,
                    sessionId: e.sessionId.current,
                    priorEvents: n
                })))
            }
            )), s.ak("segmentationService", (t => {
                let {newEvents: n, priorEvents: o, externalStateDelta: a, segmentationValidation: c} = t;
                return (0,
                r.zG)(Rr({
                    ...e,
                    externalStateDelta: a,
                    newEvents: n,
                    priorEvents: o,
                    validationService: c
                }), s.bw((t => (0,
                r.zG)(t.errors, i.UI((t => (0,
                r.zG)(t(), Rt.UI((t => e.reportError(`Query Language: ${t}`, {
                    userId: e.groupId
                }))))))))))
            }
            )), s.UI((t => (0,
            r.zG)(t.segmentationService.events, i.En(4, Rt.uZ()), (n => {
                let[s,c,u,l] = n;
                return {
                    ...t,
                    newEvents: s,
                    realtime: (0,
                    r.zG)(c, i.Rp(!1, ( (e, t) => {
                        const n = t();
                        return e || n.some((e => {
                            let[,t] = e;
                            return "Pageview" === t.name
                        }
                        ))
                    }
                    )), (e => i.vP(e, t.segmentationService.processing)), i.UI((e => {
                        let[t,n] = e;
                        return t && !n
                    }
                    )), i.u4(( (e, t) => e || t))),
                    currentPageviewSegments: (f = {
                        processedEvents: (0,
                        r.zG)(u, i.UI(d.UI(Rt.UI(a.Yg)))),
                        segments: t.segmentationService.segments,
                        viewId: e.viewId
                    },
                    (0,
                    r.zG)(i.vP(f.processedEvents, f.viewId, f.segments), i.Rp({
                        pageviewProcessed: !1,
                        resolvePageviewSegments: e => {}
                        ,
                        segments: Ir({
                            all: [],
                            custom: [],
                            standard: []
                        }),
                        viewId: ""
                    }, ( (e, t) => {
                        let[n,s,i] = t;
                        const a = n();
                        return (0,
                        r.zG)(e, o.DT((e => e.viewId === s)), o.EQ(( () => {
                            if ((0,
                            r.zG)(a, Rt.G((e => "Pageview" === e.name && e.view_id === s))))
                                return {
                                    pageviewProcessed: !0,
                                    resolvePageviewSegments: () => {}
                                    ,
                                    segments: i,
                                    viewId: s
                                };
                            {
                                const e = (0,
                                g.b2)();
                                return {
                                    pageviewProcessed: !1,
                                    resolvePageviewSegments: t => e.resolve(zr(t)()),
                                    segments: os(Gr(i), ( () => e.promise)),
                                    viewId: s
                                }
                            }
                        }
                        ), (e => e.pageviewProcessed ? {
                            ...e,
                            segments: i
                        } : (0,
                        r.zG)(a, Rt.G((e => "Pageview" === e.name && e.view_id === s))) ? (e.resolvePageviewSegments(i),
                        {
                            pageviewProcessed: !0,
                            resolvePageviewSegments: () => {}
                            ,
                            segments: i,
                            viewId: s
                        }) : {
                            ...e,
                            segments: i
                        })))
                    }
                    )), i.UI((e => e.segments)))),
                    lastProcessedEvents: (0,
                    r.zG)(l, i.UI(d.UI(Rt.UI(a.Yg))))
                };
                var f
            }
            )))), s.Hr("cohorts", (t => {
                let {segmentationService: n} = t;
                return (0,
                r.zG)(i.fF(e.nonQlCohorts), i.UI(o.UI((e => (0,
                r.zG)(n.segments, Cr((e => e.all)), Cr(Rt.UI(String)), ts, (t => ({
                    query_language: t,
                    ...e
                })))))))
            }
            )), s.ak("stateSync", (t => {
                let {segmentationService: n, lastProcessedEvents: r} = t;
                return Lt({
                    eventSourceId: e.eventSourceId,
                    groupId: e.groupId,
                    groupIdIsNewlyGenerated: e.groupIdIsNewlyGenerated,
                    internalStateDiff: n.internalStateDiff,
                    internalStateMap: n.internalStateMap,
                    lastProcessedEvents: r,
                    logger: e.logger,
                    permutiveApi: e.permutiveApi,
                    permutiveUrls: e.permutiveUrls,
                    queryLanguageProcessing: n.processing,
                    reportError: e.reportError,
                    sessionId: e.sessionId,
                    viewId: e.viewId
                })
            }
            )), s.bw((e => {
                let {stateSync: t, setExternalStateDelta: n} = e;
                return n(t.externalStateDelta)
            }
            )), s.ak("segmentTransitions", (t => {
                let {segmentationService: n} = t;
                return (e => (0,
                r.zG)(s.vP({
                    currentSegmentsSet: s.K4(( () => (0,
                    r.zG)(e.segments, i.UI(u))))
                }), s.ak("transitionsSinceInit", (e => {
                    let {currentSegmentsSet: t} = e;
                    return s.of(c(t))
                }
                )), s.UI((e => {
                    let {currentSegmentsSet: t, ...n} = e;
                    return n
                }
                ))))({
                    segments: (0,
                    r.zG)(Ar(n.segments), i.UI((e => e.all))),
                    viewId: e.viewId
                })
            }
            )), s.Hr("cohortsRef", (e => {
                let {cohorts: t} = e;
                return (0,
                r.zG)(t, i.VS(o.EQ(( () => i.a9(Rt.bM())), (0,
                r.ls)((e => Object.values(e)), Rt.UI((0,
                r.ls)(ns, (e => e.all), Ar, i.D8(Rt.Eh(D.Eq)))), Rt.vP(i.g1), i.UI(Rt.xH)))))
            }
            )), s.Hr("createTrackRequest", (t => {
                let {cohortsRef: n, segmentationService: s} = t;
                return (0,
                r.zG)(i.vP({
                    cohorts: (0,
                    r.zG)(n, i.UI(o.G)),
                    qlSegments: (0,
                    r.zG)(Ar(s.segments), i.UI(o.G)),
                    webClient: e.webClient
                }), i.UI((0,
                ye.Yt)(o.G5)), i.UI(o.UI((t => {
                    let {cohorts: n, qlSegments: r, webClient: s} = t;
                    return t => ({
                        ...t,
                        segments: r.all,
                        user_id: e.groupId,
                        cohorts: n,
                        properties: {
                            ...t.properties,
                            client: {
                                ...s,
                                ...t.properties.client ?? {}
                            }
                        }
                    })
                }
                ))))
            }
            )), s.Hr("eventsToPublishOnPageUnload", (t => e.trackPageviewComplete ? (0,
            r.zG)(t.segmentationService.unprocessedPageviewComplete, i.UI(Rt.pc(o.UI((e => (0,
            r.bc)(`PageviewComplete-${e.view_id}`, e))))), (e => i.vP(t.createTrackRequest, e)), i.UI((e => {
                let[t,n] = e;
                return (0,
                r.zG)(t, o.EQ(( () => Rt.cS), (e => (0,
                r.zG)(n, Rt.UI((0,
                a.H5)(e))))))
            }
            ))) : i.a9(Rt.cS))), s.ak("eventCache", (t => {
                let {newEvents: n, setCachedPriorEvents: o} = t;
                return (0,
                r.zG)(e.eventsCache, R.EQ((e => (o(e),
                s.of({
                    newEvents: n
                }))), (e => (0,
                r.zG)((e => s.K4(( () => ({
                    newEvents: (0,
                    r.zG)(e.newEvents, i.UI(d.UI((0,
                    g.bw)(Rt.UI((t => {
                        let[,n] = t;
                        is.has(n.name) || e.eventsCache.add(n, {
                            persistOnDisk: !0
                        })
                    }
                    )))))),
                    priorEvents: () => e.eventsCache.all()
                }))))({
                    eventsCache: e,
                    newEvents: n
                }), s.UI((e => {
                    let {newEvents: t, priorEvents: n} = e;
                    return o(n),
                    {
                        newEvents: t
                    }
                }
                ))))))
            }
            )), s.UI((e => ({
                ...e,
                newEvents: e.eventCache.newEvents
            }))), s.Hr("eventsToPublish", (t => {
                let {cohorts: n, newEvents: s, segmentationService: c} = t;
                return (0,
                r.zG)(i.vP(s, e.webClient, c.segments, (0,
                r.zG)(n, i.UI(o.UI((0,
                r.ls)((e => Object.values(e)), Rt.UI(ns), Rt.UI((e => e.all)))))), (0,
                r.zG)(e.viewId, i.Rp(new Set, ( (e, t) => new Set([...e, t]))))), i.UI((t => {
                    let[n,s,i,c,u] = t;
                    return (0,
                    r.zG)(o.Do, o.Qt("webClient", s), o.Qt("cohorts", c), o.ak("events", ( () => (0,
                    r.zG)(n(), Rt.hX((e => {
                        let[,t] = e;
                        return "PageviewComplete" !== t.name || u.has(t.view_id)
                    }
                    )), o.DT(Rt.Od)))), dt, At("segments", ( () => (0,
                    r.zG)(zr(i), gt))), Ot((e => (0,
                    r.zG)(e.cohorts, lt.uU(Dr(1e3)), lt.UI(Rt.xH), lt.UI((t => ({
                        ...e,
                        cohorts: t
                    })))))), bt((t => {
                        let {cohorts: n, events: s, segments: i, webClient: o} = t;
                        return (0,
                        r.zG)(s, Rt.UI((0,
                        a.H5)((t => ({
                            ...t,
                            segments: i.all,
                            user_id: e.groupId,
                            cohorts: n,
                            properties: {
                                ...t.properties,
                                client: {
                                    ...o,
                                    ...t.properties.client ?? {}
                                }
                            }
                        })))))
                    }
                    )), lt.UI(o.fS(( () => Rt.bM()))))
                }
                )), (e => {
                    const [t,n] = i.gS(Rt.uZ());
                    return (0,
                    r.zG)(e, i.UI((e => e().then(n)))),
                    t
                }
                ))
            }
            )));
            var vs = n(709);
            function ws(e) {
                return t => (0,
                r.zG)(i.oQ(e), i.UI((0,
                g.rO)({
                    backoffAfterErrorMs: e => e ?? 0,
                    backoffAfterSuccessMs: e => e ?? 0
                })), (e => s.dQ((n => {
                    let {previousState: s} = n;
                    const [a,c] = i.Ue(function(e) {
                        if ("object" != typeof e || null === e)
                            return {
                                lastSuccess: 0,
                                lastError: 0
                            };
                        return e
                    }(s))
                      , u = (0,
                    r.zG)(i.vP(a, e), i.UI((e => {
                        let[t,n] = e;
                        return Math.max(t.lastError + n.backoffAfterErrorMs, t.lastSuccess + n.backoffAfterSuccessMs)
                    }
                    )));
                    return {
                        state: a,
                        value: (0,
                        r.ls)(o.DT(( () => Date.now() >= u.current)), o.UI(t), o.UI((0,
                        g.bw)((e => e.then(( () => c({
                            ...a.current,
                            lastSuccess: Date.now()
                        })), ( () => c({
                            ...a.current,
                            lastError: Date.now()
                        })))))))
                    }
                }
                ))))
            }
            const ys = function(e, t) {
                return s.of(o.YP)
            };
            var ks = n(127);
            const Ss = function(e, t) {
                return (0,
                r.zG)(Is(e), ws({
                    backoffAfterErrorMs: 6e5
                }), s.VS((e => ks.m((0,
                r.zG)(t, i.UI((0,
                g.rO)({
                    tpdUsage: o.UI((0,
                    r.ls)(Ce.UI(Ce.z7((e => ["eyeota", "liveramp_Acxiom", "liveramp_MeritDirect", "liveramp_PlaceIQ", "liveramp_Bombora", "liveramp_Fluent", "liveramp_Lifesight", "liveramp_Illion", "liveramp_33across", "liveramp_Kantar", "liveramp_OnAudience", "liveramp_RoyMorgan", "liveramp_DunandBradstreet", "liveramp_Experian"].includes(e)))), Ce.hX((0,
                    Oe.ff)(Ce.xb))))
                })), i.UI((t => {
                    let {tpdUsage: n, userId: s} = t;
                    return {
                        validityKey: () => s,
                        freshnessKey: (0,
                        r.ls)(( () => n), o.EQ(( () => 0), (0,
                        r.ls)(JSON.stringify, g.vp))),
                        refresh: (0,
                        r.zG)(n, o.hX((e => Object.keys(e).length > 0)), o.UI((t => () => De.Y3(( () => (0,
                        r.zG)(e({
                            user_id: s,
                            time: new Date,
                            tpd_segments: t
                        }), o.fS(( () => Promise.reject("Blocked by backoff."))))), (e => `Failed to report TPD usage. Got ${e}`)))))
                    }
                }
                )))))), s.UI(r.Q1))
            };
            const Is = e => t => {
                const {config: n, metrics: r, permutiveApi: s, permutiveUrls: i} = e
                  , a = r.startTimer("sdk_http_tpd_usage_seconds", {});
                return s.req({
                    url: i.getEndpointUrl("/tpd/usage", o.G(n.apiVersion)),
                    method: "POST",
                    payload: t,
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1
                }).then((e => (r.stopTimer("sdk_http_tpd_usage_seconds", a),
                e)))
            }
            ;
            var Gs = function(e) {
                return function(t) {
                    return function(n) {
                        return e(t(n))
                    }
                }
            }
              , zs = r.a9;
            $e.F4,
            $e.Xl;
            function qs(e) {
                return function(t) {
                    return function() {
                        return e.of(t)
                    }
                }
            }
            function Us(e) {
                return function(t) {
                    return function(n) {
                        return function(r) {
                            return e.map(n(r), t)
                        }
                    }
                }
            }
            function Es(e) {
                return function(t) {
                    return function(n) {
                        return function(r) {
                            return e.ap(n(r), t(r))
                        }
                    }
                }
            }
            function xs(e) {
                return function(t) {
                    return function(n) {
                        return function(r) {
                            return e.chain(n(r), (function(e) {
                                return t(e)(r)
                            }
                            ))
                        }
                    }
                }
            }
            function Ps(e) {
                return function(t) {
                    return (0,
                    r.ls)(t, e.of)
                }
            }
            lt.PM;
            var Cs = zs
              , Os = (lt.tD,
            Gs(lt.tD),
            function(e, t) {
                return (0,
                r.zG)(e, Ds(t))
            }
            )
              , Ds = Us(lt.dO)
              , As = (lt.Hi,
            qs(lt.PM))
              , Ts = (lt.UA,
            "ReaderTask")
              , js = {
                URI: Ts,
                map: Os
            }
              , Ms = {
                URI: Ts,
                of: As
            };
            $e.F4,
            $e.Xl;
            var Rs = zs
              , Fs = Lr.F2(Ms)
              , Ls = (De.QM,
            De.lk,
            De.dk,
            De.Op,
            De.fj,
            Lr.UI(js))
              , Ys = Fs;
            $e.F4,
            $e.Xl;
            function Ns(e, t) {
                const n = ["amp", "gigya", "pxid", "sailthru"]
                  , a = (0,
                r.zG)(t.identities, i.UI(o.UI(Ce.z7((e => !n.includes(e))))))
                  , c = e => (0,
                g.vp)(JSON.stringify(e))
                  , u = e => [c(e), e];
                return (0,
                r.zG)(s.vP({
                    fetchFromNewEndpoint: (0,
                    r.zG)(Qs(e), ws({
                        backoffAfterErrorMs: 6e5
                    })),
                    fetchFromLegacyEndpoint: (0,
                    r.zG)(Bs(e), ws({
                        backoffAfterErrorMs: 6e5
                    }))
                }), s.VS((n => {
                    let {fetchFromNewEndpoint: c, fetchFromLegacyEndpoint: l} = n;
                    return (0,
                    r.zG)(ks.m((0,
                    r.zG)(i.vP(t.userId, t.sessionId, a), i.UI((t => {
                        let[n,s,i] = t;
                        return {
                            validityKey: () => n,
                            freshnessKey: () => `${$s(i)},${s}`,
                            refresh: (0,
                            r.zG)(i, o.UI((t => () => Ce.xb(t) ? De.of({}) : De.Y3(( () => (0,
                            r.zG)((t => (0,
                            r.zG)(c(t), o.UI((e => e.catch(( () => (0,
                            r.zG)(l(t.identities), o.fS(( () => e))))))), o.wp(( () => l(t.identities))), o.UI((0,
                            g.bw)((t => {
                                const n = e.metrics.startTimer("sdk_get_third_party_data_task_duration_seconds", {});
                                t.catch(r.Q1).then(( () => {
                                    e.metrics.stopTimer("sdk_get_third_party_data_task_duration_seconds", n)
                                }
                                ))
                            }
                            )))))({
                                userId: n,
                                identities: t
                            }), o.fS(( () => Promise.reject("Blocked by persistent backoff"))))), (e => `Error fetching TPD. Got ${e}`)))), o.UI(Ls(u)))
                        }
                    }
                    )))), ks.d((e => o.G((e => Array.isArray(e) ? e : u(e))(e)))), s.UI(i.UI(R.fS((t => (e.logger.warn("[TPD]", `Failed to retrieve usable value, using zero value. ${t}`),
                    o.G(u({}))))))), s.bw((0,
                    r.ls)(i.UI(o.pC), i.UI((t => {
                        t && e.metrics.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                            timestamp_name: "audience_matching_ready",
                            time_origin: "sdk_init"
                        })
                    }
                    )))))
                }
                )))
            }
            const Qs = e => async t => {
                const n = e.metrics.startTimer("sdk_http_audience_matching_seconds", {})
                  , s = await e.permutiveApi.req({
                    url: e.permutiveUrls.getAudienceMatchingEndpointUrl("/id", o.G("v1"), t.userId),
                    payload: {
                        identities: (0,
                        r.zG)(t.identities, Ce.Yz, Rt.UI((e => {
                            let[t,n] = e;
                            return {
                                tag: t,
                                id: n
                            }
                        }
                        )))
                    },
                    method: "POST",
                    withCredentials: !1,
                    dataType: "json"
                });
                return e.metrics.stopTimer("sdk_http_audience_matching_seconds", n),
                s.items
            }
              , Bs = e => async t => {
                const n = e.metrics.startTimer("sdk_http_tpd_seconds", {})
                  , r = await e.permutiveApi.req({
                    url: e.permutiveUrls.getEndpointUrl("/tpd", o.G(e.config.apiVersion)),
                    method: "POST",
                    payload: {
                        user_id: t
                    },
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1
                });
                return e.metrics.stopTimer("sdk_http_tpd_seconds", n),
                r
            }
              , $s = (0,
            r.ls)(JSON.stringify, g.vp);
            const Hs = (e, t) => (0,
            r.zG)(s.vP({
                data: Ns(e, {
                    identities: t.identities,
                    sessionId: t.sessionId,
                    userId: t.userId
                }),
                usageReporting: Ss(e, i.vP({
                    tpdUsage: t.tpdUsage,
                    userId: t.userId
                }))
            }), s.ak("analytics", (e => {
                let {data: n} = e;
                return function(e) {
                    return s.dQ((t => {
                        let {previousState: n} = t;
                        const [s,a] = i.gS(Rt.uZ());
                        var c;
                        return {
                            state: (0,
                            r.zG)(i.vP(e.userId, e.providerSegments, e.sessionId, e.viewId), i.D8(( (e, t) => {
                                let[n,r] = e
                                  , [s,i] = t;
                                return n === s && r === i
                            }
                            )), i.Rp(null !== (c = n) && "object" == typeof c ? c : {
                                userId: "",
                                providerHashes: {}
                            }, ( (e, t) => {
                                let[n,s,i,c] = t;
                                const u = (0,
                                r.zG)(s, o.fS(( () => ({}))))
                                  , l = (0,
                                r.zG)(u, Ce.UI((0,
                                g.SL)(g.vp)))
                                  , f = (0,
                                r.zG)(e, o.DT((e => e.userId === n)), o.UI((e => e.providerHashes)), o.fS(( () => ({}))));
                                return (0,
                                r.zG)(u, Ce.z7((e => l[e] !== (f[e] || 0))), (e => Object.entries(e)), Rt.UI((e => {
                                    let[t,n] = e;
                                    return (0,
                                    r.bc)((0,
                                    g.k$)(), {
                                        name: "ThirdPartySegments",
                                        properties: {
                                            data_provider: t,
                                            segments: [...n]
                                        },
                                        session_id: i,
                                        time: new Date,
                                        view_id: c
                                    })
                                }
                                )), a),
                                {
                                    userId: n,
                                    providerHashes: l
                                }
                            }
                            ))),
                            value: s
                        }
                    }
                    ))
                }({
                    providerSegments: (0,
                    r.zG)(n, i.UI(o.UI(wr.Yg))),
                    sessionId: t.sessionId,
                    userId: t.userId,
                    viewId: t.viewId
                })
            }
            )), s.UI((e => {
                let {data: t, analytics: n} = e;
                return {
                    data: t,
                    analyticsEvents: n
                }
            }
            )))
              , Ks = function(e) {
                const t = {
                    include_geo: !0,
                    include_isp: !0,
                    include_ip_hash: !0,
                    include_ip: !1
                }
                  , n = e.trace.startSpan("geoip_data_retrieval");
                return (0,
                r.zG)(ks.m((0,
                r.zG)(e.sessionId, i.UI((n => ({
                    validityKey: () => (0,
                    g.vp)(JSON.stringify(t)),
                    freshnessKey: () => n,
                    refresh: o.G(( () => De.Y3(( () => Vs(e.permutiveApi, e.metrics, e.config, t, e.permutiveUrls)), (e => `Error fetching geoip. Got ${e}`))))
                }))))), s.UI(i.UI(R.fS((t => (e.logger.warn("[geoip]", `Failed to retrieve usable value, using zero value. ${t}`),
                o.G({})))))), s.bw((0,
                r.ls)(i.UI(o.pC), i.UI((t => {
                    t && (e.metrics.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                        timestamp_name: "geoip_data_ready",
                        time_origin: "sdk_init"
                    }, performance.now()),
                    n.finish())
                }
                )))))
            };
            const Vs = (e, t, n, r, s) => {
                const i = [];
                r.include_geo && i.push(["include", "geo"]),
                r.include_isp && i.push(["include", "isp"]),
                r.include_ip && i.push(["include", "ip"]),
                r.include_ip_hash && i.push(["include", "ip_hash"]);
                const a = t.startTimer("sdk_http_geoip_seconds", {});
                return e.req({
                    url: s.getEndpointUrl("/geoip", o.G(n.apiVersion), i),
                    method: "GET",
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1
                }).then((e => (t.stopTimer("sdk_http_geoip_seconds", a),
                e)))
            }
              , Xs = e => t => {
                const n = r => {
                    const s = {
                        ...r
                    };
                    for (let i in r) {
                        const o = r[i];
                        t.hasOwnProperty(o) ? null != e && e.dropUnenriched && void 0 === t[o] ? delete s[i] : s[i] = t[o] : null !== o && "object" == typeof o && o.constructor === Object && (s[i] = n(o))
                    }
                    return s
                }
                ;
                return n
            }
            ;
            var Js = n(5)
              , Ws = n(973);
            const Zs = function(e, t, n, a, c) {
                const u = (0,
                Ws.Hn)(ti)
                  , l = u("ssps", Rt.cS)
                  , f = u("all_cohort_mapping", {})
                  , d = l.includes("google_pps")
                  , p = u("affinity_enabled", !1);
                return (0,
                r.zG)(c.consent, s.KD([[e => !e, s.of(Qr(o.YP))], s.K4((s => {
                    let {stopped: u} = s;
                    a.debug("[ssp] Addon started, affinity enabled: ", p);
                    const l = (0,
                    r.zG)(c.cohorts, Br((0,
                    r.ls)(Rt.hX((e => e in f)), Rt.tS((e => f[e])))))
                      , d = (0,
                    r.zG)(i.vP(c.url, u), i.UI((e => {
                        let[t,n] = e;
                        return (0,
                        r.zG)(t, o.hX(( () => p && !n)))
                    }
                    )), i.UI(o.UI((n => De.Y3(( () => e.req({
                        method: "GET",
                        url: t.getEndpointUrl("/standard-audiences/v1/affinity", o.YP, [["url", n]]),
                        withCredentials: !1,
                        dataType: "json"
                    })), String)))), i.UI(o.UI(De.Vn((0,
                    g.bw)((e => n(`Failed to fetch affinity cohorts: ${e}`)))))), i.UI(o.UI(De.UI((e => e.affinity_values)))), i.UI(o.fS(( () => De.of(Rt.bM())))), i.VS(Hr(Rt.bM())));
                    return (0,
                    r.zG)((0,
                    ye.gz)(Jr)(l, d), Br(Rt.xH), Br((e => [...new Set(e)])), Br(o.G))
                }
                ))]), s.UI(i.xH), s.UI((e => ({
                    cohorts: (0,
                    r.zG)(e, Br(o.fS(( () => Rt.bM()))), Zr((e => e), (e => "dfp" === e.id && d ? o.G(ei) : o.YP)), o.G),
                    externalData: {
                        [ni]: (0,
                        r.zG)(Ar(e), i.UI(o.Uo), i.UI(o.xH), i.UI(o.UI(ei)), i.D8(o.Eh(Rt.Eh(D.Eq))), i.UI(o.UI((e => ({
                            ssps: l,
                            cohorts: e
                        })))))
                    }
                }))))
            };
            const ei = e => [...new Set(e.map((e => e.replace(/-ac$/, "").replace(/-aw$/, "").replace(/-c$/, ""))))]
              , ti = "ssp";
            const ni = "_pssps"
              , ri = (e, t) => (0,
            r.zG)(Zs(e.permutiveApi, e.permutiveUrls, e.reportError, e.logger, t), s.UI((e => {
                let {cohorts: t, externalData: n} = e;
                return {
                    ssp: t,
                    externalData: n
                }
            }
            )))
              , si = "_pssps"
              , ii = (e, t) => ({
                ssp: o.uZ(ss).concat(e.ssp, t.ssp),
                externalData: {
                    [si]: (0,
                    r.zG)(i.vP(e.externalData._pssps, t.externalData._pssps), i.UI((e => {
                        let[t,n] = e;
                        return o.uZ(oi).concat(t, n)
                    }
                    )))
                }
            })
              , oi = {
                concat: (e, t) => ({
                    cohorts: e.cohorts.concat(t.cohorts),
                    ssps: Array.from(new Set(e.ssps.concat(t.ssps)))
                })
            }
              , ai = (e, t) => s.K4(( () => ({
                ssp: o.YP,
                externalData: {
                    [si]: i.a9(o.YP)
                }
            })))
              , ci = e => {
                const t = (0,
                r.zG)((null == e ? void 0 : e.dfp) ?? [], Rt.UI(String), (e => new Set(e)));
                return {
                    id: "dfp",
                    filterCohorts: Rt.hX((e => t.has(e)))
                }
            }
            ;
            const ui = e => {
                const t = (0,
                r.zG)(Object.values(e) ?? [], Rt.UI(String), (e => new Set(e)));
                return {
                    id: "xandr_ssp",
                    filterCohorts: Rt.hX((e => t.has(e)))
                }
            }
              , li = e => {
                if (!e.metrics.isEnabled())
                    return () => {}
                    ;
                const t = (0,
                r.zG)(e.adServers, Rt.UI((e => (0,
                r.bc)(e.id, e))), Ce.sq, Ce.UI((t => {
                    const n = (0,
                    r.zG)(e.cohorts, Ce.DZ((e => e.byAdServer(t))), (e => i.vP(e)), i.UI(Ce.UI((s = 5e3,
                    a = "Timeout",
                    e => (0,
                    r.zG)(e, qr(s), lt.UI(o.pF(( () => R.t$(a)))))))), i.UI((0,
                    ye.Yt)(lt.Hi)), i.UI(lt.UI((0,
                    r.ls)(Ce.oh, je.Vn(Ce.Su(( (t, n) => {
                        e.logger.warn("[Targeting Metrics]", `[${t}]`, n)
                    }
                    ))), je.F2))), (e => () => e.current));
                    var s, a;
                    return (0,
                    r.ls)(Rt.of, Rt.UI((e => e.cohorts)), di, Rt.UI((e => {
                        let[t,n] = e;
                        return {
                            allCohorts: new Set(t),
                            cohortCountByType: fi(t),
                            requestCount: n
                        }
                    }
                    )), (s => (0,
                    r.zG)(n(), lt.UI(Ce.Su(( (t, n) => (s, i) => {
                        (0,
                        r.zG)(n, Rt.Hr("actualCohortCount", (e => {
                            let {cohortCountByType: t} = e;
                            return (0,
                            r.zG)(t, Ce.P5(s))
                        }
                        )), Rt.UI((n => {
                            const a = {
                                cohort_type: s,
                                target: t
                            }
                              , c = i.reduce(( (e, t) => n.allCohorts.has(t) ? e + 1 : e), 0)
                              , u = i.length - c;
                            e.metrics.track({
                                name: "sdk_ad_request_missed_cohorts",
                                labels: a,
                                value: n.requestCount * u
                            }),
                            e.metrics.track({
                                name: "sdk_ad_request_successful_cohorts",
                                labels: a,
                                value: n.requestCount * c
                            }),
                            (0,
                            r.zG)(n.actualCohortCount, o.UI((t => {
                                const r = t - c;
                                e.metrics.track({
                                    name: "sdk_ad_request_superfluous_cohorts",
                                    labels: a,
                                    value: n.requestCount * r
                                })
                            }
                            )))
                        }
                        )))
                    }
                    )(t.id, s))))), (e => e()))
                }
                )));
                return e => {
                    if ("AdRequest" === e.name)
                        (n = e.properties).ad_server_id in t && t[n.ad_server_id](n);
                    var n
                }
            }
              , fi = e => ({
                ql: (0,
                r.zG)(e, Rt.u4(0, ( (e, t) => isNaN(parseInt(t)) ? e : e + 1)))
            })
              , di = e => (0,
            r.zG)(e, Rt.pO((e => {
                const {init: t, rest: n} = (0,
                r.zG)(e, Rt.zT((t => t === e[0])));
                return [t, n]
            }
            )), Rt.UI((e => [e[0], e.length])))
              , pi = e => (0,
            r.zG)(e.viewId, i.UI((e => {
                let t;
                return {
                    viewId: e,
                    cohortsP: new Promise((e => {
                        t = e
                    }
                    )),
                    resolveCohorts: t
                }
            }
            )), (t => i.vP(t, e.contextualCohorts)), i.UI((e => {
                let[t,n] = e;
                return (0,
                r.zG)(n, o.UI(t.resolveCohorts)),
                (0,
                r.zG)(( () => t.cohortsP), Ur((0,
                r.zG)(n, o.fS(( () => Rt.bM())))))
            }
            )), es((e => e), ( () => o.YP)), o.G);
            const gi = $.n_({
                cohorts: Rt.Eh((0,
                g.Or)()),
                ctx: (0,
                g.Or)()
            })
              , hi = Rt.cS;
            Promise.resolve(R.F2(hi)),
            $.n_({
                userId: (0,
                g.Or)(),
                lastSuccess: {
                    equals: (e, t) => e && t && gi.equals(e, t) || e === t
                }
            });
            function _i(e, t) {
                return Object.keys(t).reduce(( (n, r) => void 0 !== e[r] ? {
                    ...n,
                    [r]: t[r] + e[r]
                } : {
                    ...n,
                    [r]: t[r]
                }), e)
            }
            function mi(e, t) {
                return (0,
                r.zG)(yi(e), ( (e, t) => n => (0,
                r.zG)((e => n(e)().then((e => R.nM(e) ? Promise.reject(e.left) : e.right))), ws(e), s.UI((e => n => () => (0,
                r.zG)(n, e, o.EQ(( () => Promise.resolve(R.t$(t))), (e => e.then(R.F2, R.t$))))))))({
                    backoffAfterErrorMs: 6e5
                }, "Advertiser segmentation request blocked by rate limiting."), s.VS((n => s.dQ((s => {
                    let {previousState: a} = s;
                    return e.logger.debug("[advertiser] previous state:", a),
                    (0,
                    r.zG)(t, i.Rp(i.a9(vi(e)(a)), wi(e)(n)), i.xH, i.bw((t => e.logger.debug("[advertiser] updated state:", t))), (e => ({
                        state: (0,
                        r.zG)(e, i.UI((e => {
                            let {userId: t, lastSuccess: n} = e;
                            return {
                                userId: t,
                                lastSuccess: o.FS(n)
                            }
                        }
                        )), i.D8(xi)),
                        value: (0,
                        r.zG)(e, i.UI((e => {
                            let {eventual: t} = e;
                            return t
                        }
                        )))
                    })))
                }
                )))))
            }
            const bi = e => t => (0,
            r.zG)(t, Cr(function(e) {
                return t => (0,
                r.zG)(t.cohorts, M.hX((n => (0,
                r.zG)(n.groups, M.yW((s => (0,
                r.zG)(o.ij(t.groups[s]), R.Yo(( () => `cohort [${n.code}] is missing group [${s}]`)), R.Vn((t => e.error(`[advertiser] ${t}`))), R.UI((e => e > 0)), R.fS(( () => !0)))))))), M.UI((e => {
                    let {code: t} = e;
                    return t
                }
                )))
            }(e)), es((e => e), (e => "dfp" === e.id ? o.G((e => e)) : o.YP)), o.G)
              , vi = e => t => (0,
            r.zG)(t, o.DT(Pi), o.fS(( () => Ci())), (e => R.Y3(( () => ({
                userId: e.userId,
                inFlight: !1,
                lastSuccess: o.ij(e.lastSuccess),
                view: Ui(),
                ctx: (0,
                r.zG)(o.ij(e.lastSuccess), o.UI((e => {
                    let[t] = e;
                    return t
                }
                ))),
                eventual: Oi()
            })), (e => `failed to parse existing persistent state: ${e}`))), R.fS((t => (e.logger.error("[advertiser]", t),
            qi("")))))
              , wi = e => t => (n, s) => (0,
            r.zG)(n, i.VS((0,
            r.ls)(o.DT((e => {
                let {userId: t} = e;
                return t === s.userId
            }
            )), o.fS(( () => qi(s.userId))), (n => {
                if (Ei(n) === s.viewId)
                    return e.logger.debug("[advertiser] view id is the same as previous, returning existing state", n),
                    i.a9(n);
                if (n.inFlight)
                    return e.logger.debug("[advertiser] in flight request", n),
                    i.a9(n);
                {
                    let a;
                    e.logger.debug("[advertiser] fetching cohorts for view", n);
                    const c = new Promise((e => {
                        a = e
                    }
                    ))
                      , u = () => c;
                    return (0,
                    r.zG)((0,
                    ye.gz)(lt.Hi)(s.customCohorts, s.standardCohorts), lt.tS((e => {
                        let[r,i] = e;
                        return t([s.userId, o.FS(n.ctx), r, i])
                    }
                    )), De.YO("response"), De.ak("cohorts", (t => {
                        let {response: n} = t;
                        return (0,
                        r.zG)(n.c, Ii, (0,
                        g.bw)(R.EQ((t => {
                            e.logger.error(`[advertiser] failed to decode data from response. ${t}`)
                        }
                        ), (t => {
                            e.logger.debug("[advertiser] decoded data from response", t)
                        }
                        ))), lt.of)
                    }
                    )), De.Hr("view", (e => {
                        let {response: t, cohorts: n} = e;
                        return (0,
                        r.bc)(t.ctx, n)
                    }
                    )), i.fF, i.UI((0,
                    r.ls)(o.EQ((function() {
                        return {
                            ...n,
                            inFlight: !0,
                            eventual: (0,
                            r.bc)((0,
                            r.zG)(n.lastSuccess, o.UI((e => {
                                let[t,n] = e;
                                return n
                            }
                            )), o.fS(( () => zi()))), u)
                        }
                    }
                    ), R.EQ((function(t) {
                        e.logger.error(`[advertiser] ${t}`);
                        const i = (0,
                        r.zG)(n.lastSuccess, o.UI((e => {
                            let[t,n] = e;
                            return n
                        }
                        )), o.fS(( () => zi())));
                        return a(i),
                        {
                            userId: s.userId,
                            lastSuccess: n.lastSuccess,
                            ctx: n.ctx,
                            view: (0,
                            r.bc)(s.viewId, o.YP),
                            inFlight: !1,
                            eventual: [i, u]
                        }
                    }
                    ), (function(e) {
                        let {response: t, view: n} = e;
                        const [,i] = n;
                        return a(i),
                        (0,
                        r.zG)({
                            userId: s.userId,
                            lastSuccess: o.G(n),
                            view: (0,
                            r.bc)(s.viewId, o.G(i)),
                            ctx: o.G(t.ctx),
                            inFlight: !1,
                            eventual: (0,
                            r.bc)(i, u)
                        })
                    }
                    ))))))
                }
            }
            ))))
              , yi = e => De.it((t => e.permutiveApi.req({
                url: e.permutiveUrls.getAdvertiserEndpointUrl("/segment", o.G("v4")),
                method: "POST",
                payload: ki(t),
                contentType: "text/plain",
                dataType: "json",
                withCredentials: !1
            })), (e => `Failed to fetch advertiser cohorts: ${e}`))
              , ki = e => JSON.stringify(e)
              , Si = e => {
                const t = (0,
                r.zG)(e, M.YM, R.Yo(( () => "Expected a value, found empty array")), R.tS((e => "string" == typeof e ? R.F2(e) : R.t$("Expected a cohort code, found " + typeof e))))
                  , n = (0,
                r.zG)(e, M.Gb, o.fS(( () => [])), R.DT(Array.isArray, ( () => "Expected an array of groups [integer], found " + typeof e[1])));
                return (0,
                r.zG)(t, R.tS((e => (0,
                r.zG)(n, R.UI((t => ({
                    code: e,
                    groups: t
                })))))))
            }
            ;
            function Ii(e) {
                const [t,n] = e;
                return (0,
                r.zG)(t, M.fw(R.g1)(Si), R.UI((e => ({
                    cohorts: e,
                    groups: n
                }))))
            }
            const Gi = $.n_({
                cohorts: M.Eh($.n_({
                    code: D.Eq,
                    groups: M.Eh(H.Eq)
                })),
                groups: M.Eh(H.Eq)
            })
              , zi = () => ({
                cohorts: [],
                groups: []
            })
              , qi = e => ({
                inFlight: !1,
                userId: e,
                lastSuccess: o.YP,
                view: Ui(),
                ctx: o.YP,
                eventual: Oi()
            })
              , Ui = () => ["", o.YP]
              , Ei = e => e.view[0]
              , xi = $.n_({
                userId: (0,
                g.Or)(),
                lastSuccess: {
                    equals: (e, t) => e === t || !!e && !!t && $.bc(D.Eq, Gi).equals(e, t)
                }
            })
              , Pi = e => "object" == typeof e && null !== e && "userId"in e && "lastSuccess"in e && (void 0 === e.lastSuccess || Array.isArray(e.lastSuccess) && 2 === e.lastSuccess.length && "string" == typeof e.lastSuccess[0] && null !== e.lastSuccess[1] && "object" == typeof e.lastSuccess[1])
              , Ci = () => ({
                userId: ""
            })
              , Oi = () => (0,
            r.bc)(zi(), ( () => Promise.resolve(zi())))
              , Di = (e, t) => {
                const n = (0,
                r.zG)(t, o.UI((e => e.all)), o.fS(( () => Qr(Rt.cS))), Ar, i.UI(o.Uo));
                return {
                    _pcrdbs: i.a9(o.YP),
                    _pcrprs: n
                }
            }
              , Ai = function(e, t) {
                return (0,
                r.zG)(t, s.KD([[e => !e.consent, s.K4(( () => Pr(zi())))], mi(e, t)]), s.UI((0,
                r.ls)(i.xH, (n => (0,
                ye.gz)(Mr)(n, xr((0,
                r.zG)(t, i.UI((e => {
                    let {events: t} = e;
                    return t
                }
                )), (t => {
                    return (n = e.logger,
                    e => t => (0,
                    r.zG)(t, i.UI((t => (0,
                    r.zG)(R.Y3(( () => {
                        const s = t().filter((t => {
                            let[,n] = t;
                            return "SlotViewable" === n.name && (0,
                            r.zG)(o.ij(n.properties.line_item_id), o.UI((e => e.toString())), o.UI((t => e.has(t))), o.fS(( () => !1)))
                        }
                        )).map((e => {
                            let[t,n] = e;
                            return n.properties.line_item_id.toString()
                        }
                        ));
                        return s.forEach((e => t => e.debug("[advertiser] impression event for deal_id:", t))(n)),
                        (e => e.reduce(( (e, t) => ({
                            ...e,
                            [t]: 1
                        })), {}))(s)
                    }
                    ), (e => `Caught error when processing deal id impressions on events. Got ${e}`)), R.fS((e => (n.error("[advertiser]", e),
                    {})))))), i.Rp({}, _i), i.D8(( (e, t) => $t(t))), i.D8(cn(H.Eq)), i.bw((e => n.debug("[advertiser] impressions:", e)))))(new Set([]))(t);
                    var n
                }
                ))))), Cr((e => {
                    let[t,n] = e;
                    return function(e, t, n) {
                        const s = (0,
                        r.zG)(t.groups, M.Su(( (s, i) => {
                            const a = (0,
                            r.zG)((0,
                            r.zG)(t.cohorts, M.hX((e => {
                                let {groups: t} = e;
                                return t.includes(s)
                            }
                            )), M.Lx(H.Pc)((t => (0,
                            r.zG)(o.ij(e[t.code]), o.fS(( () => [])), M.Lx(H.Pc)((e => (0,
                            r.zG)(o.ij(n[e]), o.fS(( () => 0))))))))));
                            return Math.max(0, i - a)
                        }
                        )));
                        return {
                            cohorts: t.cohorts,
                            groups: s
                        }
                    }({}, t, n)
                }
                )), bi(e.logger))), s.bw((t => {
                    (0,
                    r.zG)(t, o.UI(rs), o.fS(( () => i.a9([]))), (t => (0,
                    r.zG)(t, i.UI((t => e.logger.debug("[advertiser] cohorts available for targeting:", t))))))
                }
                )))
            };
            const Ti = (0,
            r.zG)(Ai, (e => (t, n) => (0,
            r.zG)(e(t, n), s.UI((e => ({
                cohorts: e,
                externalData: Di(t.logger, e)
            }))))));
            const ji = s.K4(( () => {}
            ));
            const Mi = e => t => (0,
            r.zG)(e, Ce.UI((e => t.reduce(( (t, n) => t + Number(e.has(n))), 0))));
            const Ri = function(e, t) {
                return s.K4(( () => ({
                    signalRef: i.a9(o.YP)
                })))
            };
            const Fi = e => t => {
                const {consent: n, currentTimestampSecs: c, identities: u, sessionId: l, userId: f, viewId: h, pageviewState: _} = t;
                return (0,
                r.zG)(s.K4(( () => {
                    let n;
                    const r = new Promise((e => {
                        n = e
                    }
                    ))
                      , [s,a] = i.Ue(i.a9(o.YP));
                    return {
                        ...t,
                        adServers: [ci(e.optimisedActivationsConfig.dfp), ui(e.optimisedActivationsConfig.appnexus_adserver)],
                        nonQlCohortsT: () => r,
                        setNonQlCohorts: n,
                        setTpdUsage: a,
                        tpdUsage: i.xH(s)
                    }
                }
                )), s.ak("geoip", ( () => (e => (0,
                r.zG)(e, Ks, s.YO("data"), s.Hr("replacementMap", (e => {
                    let {data: t} = e;
                    return (0,
                    r.zG)(t, i.UI(o.UI((e => {
                        var t;
                        return {
                            $ip_geo_info: e.geo_info,
                            $ip_geo_info_continent: null === (t = e.geo_info) || void 0 === t ? void 0 : t.continent,
                            $ip_isp_info: e.isp_info,
                            $ip_address: e.ip,
                            $ip_address_hash: e.ip_hash
                        }
                    }
                    ))))
                }
                )), s.Hr("permutiveContext", (e => {
                    let {data: t} = e;
                    return (0,
                    r.zG)(t, i.UI(o.EQ(( () => ({})), (e => {
                        var t, n, r, s, i, o, a, c, u;
                        return {
                            isp: null === (t = e.isp_info) || void 0 === t ? void 0 : t.isp,
                            organization: null === (n = e.isp_info) || void 0 === n ? void 0 : n.organization,
                            autonomous_system_number: null === (r = e.isp_info) || void 0 === r ? void 0 : r.autonomous_system_number,
                            autonomous_system_organization: null === (s = e.isp_info) || void 0 === s ? void 0 : s.autonomous_system_organization,
                            continent: null === (i = e.geo_info) || void 0 === i ? void 0 : i.continent,
                            country: null === (o = e.geo_info) || void 0 === o ? void 0 : o.country,
                            city: null === (a = e.geo_info) || void 0 === a ? void 0 : a.city,
                            province: null === (c = e.geo_info) || void 0 === c ? void 0 : c.province,
                            postal_code: null === (u = e.geo_info) || void 0 === u ? void 0 : u.postal_code
                        }
                    }
                    ))))
                }
                ))))({
                    ...e,
                    sessionId: l
                }))), s.Hr("watson", (t => {
                    let {webClient: n} = t;
                    return (0,
                    r.zG)(e.watson, o.fS(( () => (0,
                    r.zG)(n, i.UI(o.UI((e => e.url))), i.D8(o.Eh(D.Eq)), (t => (0,
                    Js.watson)({
                        ...e,
                        pageUrl: t,
                        watsonEnabled: (0,
                        r.zG)(_, i.UI((e => e.watsonEnabled)))
                    }))))))
                }
                )), s.ak("audienceMatching", (t => {
                    let {tpdUsage: n} = t;
                    return Hs(e, {
                        identities: u,
                        sessionId: l,
                        tpdUsage: n,
                        userId: f,
                        viewId: h
                    })
                }
                )), s.UI((e => {
                    let {audienceMatching: {analyticsEvents: t, ...n}, newEvents: s, ...o} = e;
                    return {
                        ...o,
                        audienceMatching: n,
                        newEvents: (0,
                        r.zG)(i.vP(s, t), i.UI(d.RD), i.UI(d.UI(Rt.xH)))
                    }
                }
                )), s.UI((e => {
                    const [t,n,s] = i.Ue(o.bM())
                      , [a,c] = (0,
                    r.zG)(e.newEvents, i.En(2, Rt.uZ()))
                      , u = (0,
                    r.zG)(i.vP(a, t), i.UI((e => {
                        let[t,n] = e;
                        return (0,
                        r.zG)(n, o.UI((e => (0,
                        r.zG)(t, d.UI(Rt.UI((0,
                        g.bw)((t => {
                            let[,n] = t;
                            return e(n)
                        }
                        ))))))), o.fS(( () => d.of(Rt.bM()))))
                    }
                    )));
                    return {
                        ...e,
                        newEvents: u,
                        newEventsForAdvertiserSegmentation: c,
                        collectTargetingSuccessMetrics: e => {
                            n(o.G(e)),
                            s()
                        }
                    }
                }
                )), s.ak("enrichedEvents", (t => {
                    let {enrichmentReplacementMap: n, geoip: c, newEvents: u, watson: l} = t;
                    return (0,
                    r.zG)(i.vP({
                        misc: n,
                        geoip: c.replacementMap,
                        watson: l.replacementMap
                    }), i.UI((0,
                    ye.Yt)(o.G5)), i.UI(o.UI((e => {
                        let {misc: t, geoip: n, watson: r} = e;
                        return {
                            ...t,
                            ...n,
                            ...r
                        }
                    }
                    ))), (t => s.K4(( () => ( (e, t, n, s) => ((0,
                    r.zG)(t, i.UI(o.pC), i.YP((t => {
                        t && e.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                            timestamp_name: "event_enrichment_ready",
                            time_origin: "sdk_init"
                        })
                    }
                    ))),
                    (0,
                    r.zG)(n, i.VS(( () => (0,
                    r.zG)(i.vP((0,
                    r.zG)(t, i.UI(o.UI(Xs({
                        dropUnenriched: !0
                    })))), s), i.UI((0,
                    r.ls)((e => {
                        let[t,n] = e;
                        return () => (0,
                        r.zG)(t, o.EQ(( () => []), (e => (0,
                        r.zG)(n(), Rt.UI((0,
                        a.H5)((0,
                        g.rO)({
                            properties: e
                        })))))))
                    }
                    )))))))))(e.metrics, t, f, u)))))
                }
                )), s.UI((0,
                g.rO)({
                    enrichedEvents: (0,
                    yr.F)(e.metrics, "pageview_enriched")
                })), s.ak("lookalikeModels", ( () => (0,
                r.zG)(e.lookalikeModels, o.EQ(( () => (0,
                vs.lookalikeModelsService)({
                    ...e,
                    consent: n,
                    currentTimestampSecs: c
                })), s.of)))), s.ak("queryLanguage", (n => {
                    let {audienceMatching: o, nonQlCohortsT: a, enrichedEvents: c, lookalikeModels: u, setTpdUsage: l, userIdIsNewlyGenerated: d} = n;
                    return (0,
                    r.zG)((p = {
                        ...e,
                        ...t,
                        newEvents: c,
                        thirdPartyData: o.data,
                        groupId: f,
                        groupIdIsNewlyGenerated: d,
                        nonQlCohorts: a,
                        lookalikeModels: u,
                        migratedStateMaps: e.migratedStateMaps
                    },
                    (0,
                    r.zG)(i.vP(p.eventSourceId, p.groupId, p.groupIdIsNewlyGenerated), i.D8((0,
                    r.zG)(D.Eq, $.Uz((e => {
                        let[t] = e;
                        return t
                    }
                    )))), s.kR((e => {
                        let[t,n,i] = e;
                        return (0,
                        r.zG)(bs({
                            ...p,
                            eventSourceId: t,
                            groupId: n,
                            groupIdIsNewlyGenerated: i,
                            migratedStateMaps: p.migratedStateMaps
                        }), s.yi(t))
                    }
                    )), s.UI((e => ({
                        stateMigratedThisInitialisation: (0,
                        r.zG)(e, i.VS((e => e.segmentationService.stateMigratedThisInitialisation))),
                        cohorts: (0,
                        r.zG)(e, i.VS((e => e.cohortsRef))),
                        currentPageviewSegments: {
                            all: (0,
                            r.zG)(e, i.VS((e => e.currentPageviewSegments)), Cr((e => e.all))),
                            custom: (0,
                            r.zG)(e, i.VS((e => e.currentPageviewSegments)), Cr((e => e.custom))),
                            standard: (0,
                            r.zG)(e, i.VS((e => e.currentPageviewSegments)), Cr((e => e.standard)))
                        },
                        eventsToPublish: (0,
                        r.zG)(e, i.VS((e => e.eventsToPublish))),
                        eventsToPublishOnPageUnload: (0,
                        r.zG)(e, i.VS((e => e.eventsToPublishOnPageUnload))),
                        realtime: (0,
                        r.zG)(e, i.VS((e => e.realtime)), i.Rp(!1, ( (e, t) => e || t)), i.bw((e => {
                            e && p.metrics.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                                timestamp_name: "worker_realtime",
                                time_origin: "sdk_init"
                            }, performance.now())
                        }
                        ))),
                        segments: {
                            all: (0,
                            r.zG)(e, i.VS((e => Ar(e.segmentationService.segments))), i.UI((e => e.all))),
                            custom: (0,
                            r.zG)(e, i.VS((e => Ar(e.segmentationService.segments))), i.UI((e => e.custom))),
                            standard: (0,
                            r.zG)(e, i.VS((e => Ar(e.segmentationService.segments))), i.UI((e => e.standard)))
                        },
                        thirdPartyDataUsage: (0,
                        r.zG)(e, i.VS((e => e.segmentationService.tpdUsage))),
                        transitionsSinceInit: (0,
                        r.zG)(e, i.VS((e => e.segmentTransitions.transitionsSinceInit)))
                    }))))), s.bw((e => {
                        let {thirdPartyDataUsage: t} = e;
                        return l(t)
                    }
                    )));
                    var p
                }
                )), s.ak("classificationModels", (t => {
                    let {queryLanguage: r} = t;
                    return ys(e, i.vP({
                        consent: n,
                        currentTimestampSecs: c,
                        queryLanguageCohorts: Tr(r.currentPageviewSegments.all),
                        realtime: r.realtime,
                        userId: f
                    }))
                }
                )), s.ak("demandPartnersAndCuration", (n => {
                    let {queryLanguage: a} = n;
                    return (0,
                    r.zG)(s.vP({
                        demandPartners: ri(e, {
                            cohorts: Kr(a.currentPageviewSegments.all),
                            consent: t.consent,
                            url: (0,
                            r.zG)(t.webClient, i.UI(o.UI((e => e.url))))
                        }),
                        curation: ai(0, (e.optimisedActivationsConfig.curation_platforms,
                        Kr(a.currentPageviewSegments.all)))
                    }), s.UI((e => {
                        let {demandPartners: t, curation: n} = e;
                        return ii(t, n)
                    }
                    )))
                }
                )), s.ak("advertiserSegmentation", (t => {
                    let {queryLanguage: r, newEventsForAdvertiserSegmentation: s} = t;
                    return Ti(e, i.vP({
                        consent: n,
                        customCohorts: Tr(r.currentPageviewSegments.custom),
                        realtime: r.realtime,
                        sessionId: l,
                        standardCohorts: Tr(r.currentPageviewSegments.standard),
                        userId: f,
                        viewId: h,
                        events: s
                    }))
                }
                )), s.ak("ipIdentifier", (e => {
                    let {userId: t, geoip: n} = e;
                    return (0,
                    r.zG)(n.data, i.UI(o.tS(o.KQ((e => e.ip))))),
                    ji
                }
                )), s.ak("secureSignal", (t => {
                    let {advertiserSegmentation: n, demandPartnersAndCuration: o} = t;
                    return (0,
                    r.zG)(Ri(e, (0,
                    r.zG)(f, i.UI((e => ({
                        userId: e,
                        advertiserCohorts: n.cohorts,
                        stdAudienceCohorts: o.ssp
                    }))))), s.UI((e => {
                        let {signalRef: t} = e;
                        return t
                    }
                    )))
                }
                )), s.Hr("nonQlCohorts", (e => {
                    let {advertiserSegmentation: t, classificationModels: n, contextualCohorts: s, setNonQlCohorts: i, demandPartnersAndCuration: o, viewId: a} = e;
                    return (0,
                    r.zG)(Ce.oA({
                        advertiser: t.cohorts,
                        classificationModel: n,
                        contextual: pi({
                            contextualCohorts: s,
                            viewId: a
                        }),
                        ssp: o.ssp
                    }), (0,
                    g.bw)(i))
                }
                )), s.Hr("qlCohorts", (e => {
                    let {queryLanguage: t} = e;
                    return (0,
                    r.zG)(t.segments.all, i.UI(Rt.UI(String)))
                }
                )), s.bw((t => {
                    return t.collectTargetingSuccessMetrics(li({
                        adServers: t.adServers,
                        cohorts: {
                            ...t.nonQlCohorts,
                            query_language: (n = t.qlCohorts,
                            (0,
                            r.zG)(n, xr, ts))
                        },
                        logger: e.logger,
                        metrics: e.metrics
                    }));
                    var n
                }
                )), s.Hr("eventsToPublish", (t => {
                    let {qlCohorts: n, queryLanguage: s, nonQlCohorts: o} = t;
                    const a = (e => {
                        if (!e.metrics.isEnabled())
                            return e => {}
                            ;
                        const t = (0,
                        r.zG)(e.cohortsByType, Ce.UI(i.Rp(new Set, ( (e, t) => new Set([...e, ...t])))), (e => i.vP(e)));
                        return n => {
                            "Pageview" === n.name && (0,
                            p.HJ)(( () => (0,
                            r.zG)(n.cohorts, Mi(t.current), Ce.Su(( (t, n) => e.metrics.track({
                                name: "sdk_pageview_cohort_count",
                                labels: {
                                    cohort_type: t
                                },
                                value: n
                            }))))))
                        }
                    }
                    )({
                        cohortsByType: (0,
                        r.zG)(o, Ce.UI(rs), Ce.dx("query_language", n)),
                        metrics: e.metrics
                    });
                    return (0,
                    r.zG)(s.eventsToPublish, i.UI(d.UI(Rt.UI((0,
                    g.bw)((e => {
                        let[,t] = e;
                        return a(t)
                    }
                    ))))))
                }
                )), s.UI((e => {
                    let {adServers: t, advertiserSegmentation: n, demandPartnersAndCuration: s, eventsToPublish: o, geoip: a, queryLanguage: c, nonQlCohorts: u, watson: l, secureSignal: f} = e;
                    return {
                        activations: (0,
                        r.zG)(t, Rt.UI((e => (0,
                        r.zG)(Object.values(u), Rt.UI(ns), Rt.DZ((t => t.byAdServer(e))), Rt.UI(Ar), Rt.UI(i.D8(Rt.Eh(D.Eq))), (e => i.vP(...e)), i.UI(Rt.xH), (t => (0,
                        r.bc)(e.id, t))))), Ce.sq),
                        cohorts: {
                            all: c.cohorts,
                            ql: c.segments.all,
                            qlCustom: c.segments.custom,
                            qlStandard: c.segments.standard
                        },
                        context: (0,
                        r.zG)(i.vP(l.permutiveContext, a.permutiveContext), i.UI((e => {
                            let[t,n] = e;
                            return {
                                ...t,
                                ...n
                            }
                        }
                        ))),
                        eventsToPublish: o,
                        eventsToPublishOnPageUnload: c.eventsToPublishOnPageUnload,
                        externalData: i.vP({
                            ...n.externalData,
                            ...s.externalData
                        }),
                        geoIP: a.data,
                        realtime: c.realtime,
                        stateMigratedThisInitialisation: c.stateMigratedThisInitialisation,
                        transitionsSinceInit: c.transitionsSinceInit,
                        secureSignal: f
                    }
                }
                )))
            }
        }
        ,
        937: (e, t, n) => {
            n.d(t, {
                BJ: () => f,
                El: () => x,
                G6: () => w,
                HD: () => l,
                HP: () => I,
                Kn: () => u,
                Or: () => k,
                PQ: () => y,
                SL: () => p,
                aT: () => _,
                b0: () => b,
                b2: () => g,
                bw: () => q,
                k$: () => m,
                lo: () => U,
                mQ: () => G,
                rO: () => z,
                vg: () => S,
                vp: () => d
            });
            var r = n(340)
              , s = n(169)
              , i = n(507)
              , o = n(327)
              , a = n(229)
              , c = n(593);
            const u = e => "object" == typeof e && !Array.isArray(e) && null !== e
              , l = e => "string" == typeof e
              , f = e => "number" == typeof e && !Number.isNaN(e);
            function d(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++)
                    t = (t << 5) - t + e.charCodeAt(n),
                    t &= t;
                return t
            }
            function p(e) {
                return t => {
                    let n = 0;
                    for (let r of t) {
                        n = n + e(r) | 0
                    }
                    return n
                }
            }
            o.ff(a.xb);
            function g() {
                let e, t;
                return {
                    promise: new Promise(( (n, r) => {
                        e = n,
                        t = r
                    }
                    )),
                    reject: t,
                    resolve: e
                }
            }
            let h = [];
            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : navigator.userAgent;
                if (h.unshift(e),
                h.length > 1)
                    return;
                const n = ["beforeunload", "pagehide"]
                  , r = n.concat(["visibilitychange"])
                  , s = e => {
                    if (!i && e) {
                        i = !0;
                        const e = h;
                        h = [],
                        e.forEach((e => {
                            try {
                                e()
                            } catch {}
                        }
                        ))
                    }
                }
                ;
                let i = !1;
                r.forEach((e => {
                    window.addEventListener(e, ( () => {
                        const n = ("visibilitychange" !== e || document.hidden) && v(t);
                        s(n)
                    }
                    ))
                }
                )),
                n.forEach((e => {
                    window.addEventListener(e, ( () => s(!0)))
                }
                ))
            }
            function m() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e => (e ^ (self.crypto || self.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)))
            }
            function b(e, t) {
                const n = Object.keys(e)
                  , r = n.length
                  , s = {};
                for (let o = 0; o < r; o++) {
                    const r = n[o]
                      , a = t(r, e[r]);
                    (0,
                    i.pC)(a) && (s[r] = a.value)
                }
                return s
            }
            function v(e) {
                return /Mobi|Android/i.test(e)
            }
            function w(e) {
                return /^((?!chrome|android).)*safari/i.test(e)
            }
            function y(e, t) {
                return new Promise((n => {
                    (0,
                    c.HJ)(( () => {
                        Promise.resolve(e()).then(n)
                    }
                    ), (null == t ? void 0 : t.timeout) ?? 0)
                }
                ))
            }
            const k = () => ({
                equals: (e, t) => Object.is(e, t)
            });
            function S(e) {
                return t => null != t && e in t ? t[e] : void 0
            }
            function I(e) {
                let t = i.YP;
                const n = (0,
                i.fS)(( () => {
                    const n = e();
                    return t = (0,
                    i.G)(n),
                    n
                }
                ));
                return () => n(t)
            }
            const G = e => {
                const t = new Map;
                return n => (t.has(n) || t.set(n, e(n)),
                t.get(n))
            }
              , z = e => t => {
                const n = {
                    ...t
                };
                for (const s in e) {
                    var r;
                    n[s] = null === (r = e[s]) || void 0 === r ? void 0 : r.call(e, t[s])
                }
                return n
            }
            ;
            function q(e) {
                return t => (e(t),
                t)
            }
            const U = e => t => {
                const n = e.slice(0, -1)
                  , o = e.slice(-1)[0];
                return (0,
                s.zG)(n, r.f2((e => {
                    let[n,r] = e;
                    return (0,
                    s.zG)(t, i.DT(n), i.UI(r))
                }
                )), i.fS(( () => o(t))))
            }
              , E = e => t => {
                if ("number" == typeof t)
                    return t;
                if ("string" == typeof t) {
                    const n = e(t);
                    return Number.isNaN(n) ? void 0 : n
                }
            }
            ;
            E(parseInt),
            E(parseFloat);
            function x(e) {
                return "object" == typeof e && null !== e && "_tag"in e && ["None", "Some"].includes(e._tag)
            }
        }
        ,
        709: (e, t, n) => {
            n.r(t),
            n.d(t, {
                lookalikeModelsService: () => w,
                realService: () => k,
                stubService: () => y
            });
            var r = n(169)
              , s = n(507);
            const i = (e, t, n, r) => t + (n - t) * r / (Math.pow(2, e) - 1)
              , o = (e, t) => {
                const n = (e, t) => {
                    const n = e.toString(16);
                    return ("0".repeat(t) + n).slice(Math.min(-t, -n.length))
                }
                ;
                return `${n(e.getUint32(t), 8)}-${n(e.getUint16(t + 4), 4)}-${n(e.getUint16(t + 6), 4)}-${n(e.getUint16(t + 8), 4)}-${n(e.getUint32(t + 10), 8)}${n(e.getUint16(t + 14), 4)}`
            }
              , a = e => {
                const t = [1, 2]
                  , n = e.getInt8(0);
                if (1 === n)
                    return c(e);
                if (2 === n)
                    return u(e);
                {
                    const r = (0,
                    s.Y3)(( () => o(e, 1)))
                      , i = (0,
                    s.g_)(( () => "Couldn't decode model id"), (e => `Model id was ${e}`))(r);
                    throw new Error(`Decoding only supported for version(s): ${t}; Supplied version was ${n}; ${i}`)
                }
            }
              , c = e => l(e, 1)
              , u = e => l(e, 2)
              , l = (e, t) => {
                const n = o(e, 1)
                  , r = ( (e, t) => {
                    switch (String.fromCharCode(e.getInt8(t))) {
                    case "1":
                        return "1p";
                    case "3":
                        return "3p"
                    }
                }
                )(e, 17)
                  , s = e.getInt8(18)
                  , i = e.getFloat32(19)
                  , a = e.getFloat32(23)
                  , [c,u] = ( (e, t, n, r, s, i) => {
                    const o = {};
                    let a = 0;
                    do {
                        let n;
                        1 === i ? (a = e.getUint16(t),
                        n = e.getUint16(t + 2),
                        t += 4) : (a = e.getUint32(t),
                        n = e.getUint16(t + 4),
                        t += 6),
                        o[0 === a ? "const" : a] = n.toString(36)
                    } while (0 !== a);
                    return [o, t]
                }
                )(e, 27, 0, 0, 0, t);
                return [{
                    version: t,
                    id: n,
                    data_preference: r,
                    weights: c,
                    precision: s,
                    min: i,
                    max: a
                }, u]
            }
            ;
            var f = n(6)
              , d = n(46)
              , p = n(593)
              , g = n(240)
              , h = n(532)
              , _ = n(144)
              , m = n(127)
              , b = n(937);
            const v = () => s.G({})
              , w = k;
            function y(e) {
                return g.K4(( () => h.a9(v())))
            }
            function k(e) {
                e.logger.warn("add cleanup of legacy LAL cache");
                const t = e.trace.startSpan("lookalike_models_data_retrieval_duration");
                return (0,
                r.zG)(m.m((0,
                r.zG)(h.vP(e.consent, e.currentTimestampSecs), h.UI((t => {
                    let[n,o] = t;
                    return {
                        currentTimestampSecs: o,
                        validity: {
                            maxAge: 604800,
                            key: () => "_"
                        },
                        freshness: {
                            maxAge: 86400,
                            key: () => "_"
                        },
                        refresh: (0,
                        r.zG)(n, s.DT(Boolean), s.UI(( () => () => f.fF(function(e) {
                            const t = "Failed fetching binary models, reverting to JSON.\nError: "
                              , n = "Failed fetching json models.\nError: ";
                            return (0,
                            r.zG)(f.Y3(( () => I(e)), (e => e.message)), p.N1, f.oU((e => () => function(e) {
                                const t = [];
                                let n = 0;
                                for (; n < e.byteLength; ) {
                                    const [r,s] = a(new DataView(e,n));
                                    t.push(r),
                                    n += s
                                }
                                return t
                            }(e))), p.N1, f.UI(S((e => {
                                let {precision: t, max: n, min: r} = e;
                                return {
                                    "1p": {},
                                    precision: t,
                                    min: r,
                                    max: n
                                }
                            }
                            ))), f.Vn((n => (e.logger.log(t + n),
                            e.metrics.track({
                                name: "sdk_binary_models_missing_count",
                                value: 1,
                                labels: {}
                            }),
                            n))), f.wp(( () => (0,
                            r.zG)(f.Y3(( () => G(e)), (e => e.message)), f.UI((e => e.models)), f.UI(S(( () => ({
                                "1p": {}
                            }))))))), f.UI((e => (e => {
                                const t = Object.keys(e);
                                return t.length > 0 && e[t[0]].hasOwnProperty("precision")
                            }
                            )(e) ? (e => {
                                const t = {}
                                  , n = Object.keys(e)
                                  , r = e => {
                                    const t = {
                                        "1p": {}
                                    }
                                      , {precision: n, min: r, max: s} = e
                                      , o = e["1p"]
                                      , a = Object.keys(o);
                                    for (let e = 0; e < a.length; e++) {
                                        const c = a[e]
                                          , u = parseInt(o[c], 36);
                                        t["1p"][c] = i(n, r, s, u)
                                    }
                                    return t
                                }
                                ;
                                for (let s = 0; s < n.length; s++) {
                                    const i = n[s]
                                      , o = e[i];
                                    t[i] = r(o)
                                }
                                return t
                            }
                            )(e) : e)), f.fS((t => (e.reportError(n + t),
                            d.of({})))))
                        }(e)))))
                    }
                }
                )))), g.UI(h.UI((0,
                r.ls)(_.fS((t => (e.logger.warn("[LAL]", `Failed to refresh, using zero value. ${t}`),
                v()))), (0,
                b.bw)(s.UI(( () => {
                    t.finish(),
                    e.metrics.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                        timestamp_name: "lookalike_models_ready",
                        time_origin: "sdk_init"
                    })
                }
                )))))))
            }
            function S(e) {
                return t => {
                    const n = {};
                    for (let r = 0; r < t.length; r++) {
                        const s = t[r]
                          , {id: i, weights: o} = s;
                        if (void 0 === i || void 0 === o)
                            continue;
                        const a = e(s);
                        Object.keys(o).forEach((e => {
                            a["1p"][e] = o[e]
                        }
                        )),
                        n[i] = a
                    }
                    return n
                }
            }
            const I = e => {
                const {permutiveApi: t, config: n, metrics: r} = e
                  , s = r.startTimer("sdk_http_models_seconds", {});
                return t.req({
                    url: z(n.cdnProtocol, n.cdnBaseUrl, "binary"),
                    method: "GET",
                    contentType: "text/plain",
                    dataType: "binary",
                    withCredentials: !1
                }).then((e => (r.stopTimer("sdk_http_models_seconds", s),
                e)))
            }
              , G = e => {
                const {permutiveApi: t, config: n, metrics: r} = e
                  , s = r.startTimer("sdk_http_models_seconds", {});
                return t.req({
                    url: z(n.cdnProtocol, n.cdnBaseUrl, "json"),
                    method: "GET",
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1
                }).then((e => (r.stopTimer("sdk_http_models_seconds", s),
                e)))
            }
            ;
            function z(e, t, n) {
                const r = `${e}://${t}`;
                switch (n) {
                case "binary":
                    return `${r}/models/v2/e488cdb0-e7cb-4d91-9648-60d437d8e491-models.bin`;
                case "json":
                    return `${r}/models/e488cdb0-e7cb-4d91-9648-60d437d8e491-models.json`
                }
            }
        }
        ,
        243: (e, t, n) => {
            n.d(t, {
                K: () => U,
                O: () => z
            });
            let r, s;
            const i = new WeakMap
              , o = new WeakMap
              , a = new WeakMap
              , c = new WeakMap
              , u = new WeakMap;
            let l = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t)
                            return o.get(e);
                        if ("objectStoreNames" === t)
                            return e.objectStoreNames || a.get(e);
                        if ("store" === t)
                            return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return p(e[t])
                },
                set: (e, t, n) => (e[t] = n,
                !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };
            function f(e) {
                return e !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (s || (s = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return e.apply(g(this), n),
                    p(i.get(this))
                }
                : function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                        n[r] = arguments[r];
                    return p(e.apply(g(this), n))
                }
                : function(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
                        r[s - 1] = arguments[s];
                    const i = e.call(g(this), t, ...r);
                    return a.set(i, t.sort ? t.sort() : [t]),
                    p(i)
                }
            }
            function d(e) {
                return "function" == typeof e ? f(e) : (e instanceof IDBTransaction && function(e) {
                    if (o.has(e))
                        return;
                    const t = new Promise(( (t, n) => {
                        const r = () => {
                            e.removeEventListener("complete", s),
                            e.removeEventListener("error", i),
                            e.removeEventListener("abort", i)
                        }
                          , s = () => {
                            t(),
                            r()
                        }
                          , i = () => {
                            n(e.error || new DOMException("AbortError","AbortError")),
                            r()
                        }
                        ;
                        e.addEventListener("complete", s),
                        e.addEventListener("error", i),
                        e.addEventListener("abort", i)
                    }
                    ));
                    o.set(e, t)
                }(e),
                t = e,
                (r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e,l) : e);
                var t
            }
            function p(e) {
                if (e instanceof IDBRequest)
                    return function(e) {
                        const t = new Promise(( (t, n) => {
                            const r = () => {
                                e.removeEventListener("success", s),
                                e.removeEventListener("error", i)
                            }
                              , s = () => {
                                t(p(e.result)),
                                r()
                            }
                              , i = () => {
                                n(e.error),
                                r()
                            }
                            ;
                            e.addEventListener("success", s),
                            e.addEventListener("error", i)
                        }
                        ));
                        return t.then((t => {
                            t instanceof IDBCursor && i.set(t, e)
                        }
                        )).catch(( () => {}
                        )),
                        u.set(t, e),
                        t
                    }(e);
                if (c.has(e))
                    return c.get(e);
                const t = d(e);
                return t !== e && (c.set(e, t),
                u.set(t, e)),
                t
            }
            const g = e => u.get(e);
            const h = ["get", "getKey", "getAll", "getAllKeys", "count"]
              , _ = ["put", "add", "delete", "clear"]
              , m = new Map;
            function b(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t)
                    return;
                if (m.get(t))
                    return m.get(t);
                const n = t.replace(/FromIndex$/, "")
                  , r = t !== n
                  , s = _.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !s && !h.includes(n))
                    return;
                const i = async function(e) {
                    const t = this.transaction(e, s ? "readwrite" : "readonly");
                    let i = t.store;
                    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
                        a[c - 1] = arguments[c];
                    return r && (i = i.index(a.shift())),
                    (await Promise.all([i[n](...a), s && t.done]))[0]
                };
                return m.set(t, i),
                i
            }
            l = (e => ({
                ...e,
                get: (t, n, r) => b(t, n) || e.get(t, n, r),
                has: (t, n) => !!b(t, n) || e.has(t, n)
            }))(l);
            var v = n(654)
              , w = n(144)
              , y = n(169)
              , k = n(46)
              , S = n(6)
              , I = n(937)
              , G = n(593);
            const z = "[IDB]"
              , q = (e, t, n, r, s, i) => (0,
            y.zG)((0,
            k.of)(e.getNamespacedStorageKey(s)), (0,
            k.tS)((e => (0,
            S.Y3)((async () => n.put(r, i, e)), v.w))), (0,
            k.UI)((0,
            w.g_)((e => {
                throw t.error(z, `Failed to store crypto key to ${r} due to unexpected error,\n`, e),
                e
            }
            ), ( () => i))), (e => e()));
            class U {
                namespace;
                logger;
                cryptoAlg;
                idb;
                mainObjectStore;
                keyObjectStore;
                keyObjectKey;
                cryptoKey;
                MAX_CONSECUTIVE_PUTS = 30;
                puts = 1;
                hasForcedCompaction = !1;
                constructor(e, t, n, r, s, i, o, a) {
                    this.namespace = e,
                    this.logger = t,
                    this.cryptoAlg = n,
                    this.idb = r,
                    this.mainObjectStore = s,
                    this.keyObjectStore = i,
                    this.keyObjectKey = o,
                    this.cryptoKey = a,
                    this.logDebug("Created", this.idb)
                }
                static initialise(e, t, n, r, s, i, o, a, c, u) {
                    const l = (0,
                    I.G6)(navigator.userAgent) && !1
                      , f = [u, r.isAvailable(), !l].every((e => !0 === e))
                      , d = async (t, s, i) => (0,
                    y.zG)(await t.get(i, e.getNamespacedStorageKey(s)), (async e => e ?? r.generateKey(!1)), (async r => q(e, n, t, o, a, await r))).catch((e => {
                        const t = (0,
                        v.w)(e);
                        throw n.error(z, "Get crypto key failed. Got\n", t),
                        t
                    }
                    ))
                      , p = (e, t, n) => t.includes(n) ? (0,
                    y.Q1)() : e.createObjectStore(n)
                      , g = () => E(s, c, {
                        upgrade: e => {
                            const t = [...e.objectStoreNames];
                            p(e, t, i),
                            p(e, t, o)
                        }
                    }).then((e => {
                        const t = [...e.objectStoreNames];
                        return t.includes(i) && t.includes(o) ? e : Promise.reject(new Error("Object store(s) missing."))
                    }
                    ))
                      , h = f ? (0,
                    w.Y3)(( () => function(e) {
                        if (!(0,
                        I.G6)(navigator.userAgent) || !indexedDB.databases)
                            return Promise.resolve();
                        let t = () => {}
                          , n = 0;
                        return new Promise((e => {
                            const r = () => (n++,
                            indexedDB.databases().finally((0,
                            G.GL)(e)));
                            t = (0,
                            G.UM)(r, 100),
                            r()
                        }
                        )).finally(( () => {
                            t(),
                            e.track({
                                name: "sdk_idb_conn_attempt_safari_count",
                                value: n,
                                labels: {}
                            })
                        }
                        ))
                    }(t).then(( () => g())).catch((e => (n.error(`Re-creating IDB database ${s} due to error`, e),
                    x(s).then(( () => g())))))), String) : (0,
                    w.t$)("Connection not attempted. Default to localStorage");
                    return (0,
                    w.g_)((e => (0,
                    S.t$)(e)), (t => (0,
                    y.zG)((0,
                    S.Y3)(( () => t.then((async e => ({
                        db: e,
                        cryptoKey: await d(e, a, o)
                    })))), String), (0,
                    S.UI)((t => {
                        let {db: s, cryptoKey: c} = t;
                        return new U(e,n,r,s,i,o,a,c)
                    }
                    )))))(h)
                }
                async put(e, t) {
                    return (0,
                    y.zG)((async () => (0,
                    y.bc)(JSON.stringify(e), this.cryptoKey)), (0,
                    k.tS)((e => {
                        let[t,n] = e;
                        return (0,
                        k.of)(this.cryptoAlg.encrypt(n, t))
                    }
                    )), (0,
                    k.tS)((e => async () => (await this.recreateIfNecessary(this.puts++),
                    e))), (0,
                    k.tS)((e => (0,
                    S.Y3)(( () => this.idb.put(this.mainObjectStore, e, this.namespace.getNamespacedStorageKey(String(t)))), v.w))), (0,
                    k.UI)((0,
                    w.g_)((n => {
                        throw this.logError(`Failed to put "${t.toString()}" value`, e, ". Got \n", n),
                        "QuotaExceededError" === n.name && this.forceCompaction(),
                        n
                    }
                    ), ( () => t))), (e => e()))
                }
                get(e) {
                    return (0,
                    y.zG)(this.namespace.getNamespacedStorageKey(String(e)), (t => this.idb.get(this.mainObjectStore, t).then((async e => e ? JSON.parse(await this.cryptoAlg.decrypt(this.cryptoKey, e)) : null)).catch((t => {
                        const n = (0,
                        v.w)(t);
                        throw this.logError(`Get ${e.toString()} failed. Got`, n),
                        n
                    }
                    ))))
                }
                delete(e) {
                    return (0,
                    y.zG)(this.namespace.getNamespacedStorageKey(String(e)), (e => this.idb.delete(this.mainObjectStore, e)))
                }
                deleteStore() {
                    return this.logDebug("Deleting", this.idb),
                    this.idb.close(),
                    x(this.idb.name)
                }
                forceCompaction() {
                    if (this.hasForcedCompaction)
                        return null;
                    this.hasForcedCompaction = !0,
                    this.logDebug("Attempting to force compaction");
                    const e = `__${this.mainObjectStore}`;
                    return E(e).then((t => (t.close(),
                    x(e))))
                }
                recreateIfNecessary(e) {
                    return (0,
                    I.G6)(navigator.userAgent) && e % this.MAX_CONSECUTIVE_PUTS == 0 ? this.recreate() : Promise.resolve()
                }
                async recreate() {
                    const e = this.idb.name
                      , t = this.idb.version
                      , n = await this.idb.getAllKeys(this.mainObjectStore)
                      , r = [];
                    for (const e of n)
                        r.push([e, await this.idb.get(this.mainObjectStore, e)]);
                    await this.deleteStore(),
                    this.idb = await E(e, t, {
                        upgrade: e => {
                            e.createObjectStore(this.mainObjectStore),
                            e.createObjectStore(this.keyObjectStore)
                        }
                    }),
                    await Promise.all(r.map((e => {
                        let[t,n] = e;
                        return this.idb.put(this.mainObjectStore, n, t)
                    }
                    ))),
                    await q(this.namespace, this.logger, this.idb, this.keyObjectStore, this.keyObjectKey, this.cryptoKey),
                    this.logDebug("Reset to", this.idb)
                }
                logDebug() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    this.logger.debug(z, ...t)
                }
                logError() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    this.logger.error(z, ...t)
                }
            }
            const E = (0,
            y.ls)((function(e, t) {
                let {blocked: n, upgrade: r, blocking: s, terminated: i} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const o = indexedDB.open(e, t)
                  , a = p(o);
                return r && o.addEventListener("upgradeneeded", (e => {
                    r(p(o.result), e.oldVersion, e.newVersion, p(o.transaction))
                }
                )),
                n && o.addEventListener("blocked", ( () => n())),
                a.then((e => {
                    i && e.addEventListener("close", ( () => i())),
                    s && e.addEventListener("versionchange", ( () => s()))
                }
                )).catch(( () => {}
                )),
                a
            }
            ), G.t_, (e => e.then((e => ({
                close: e.close.bind(e),
                createObjectStore: (0,
                y.ls)(e.createObjectStore.bind(e), y.Q1),
                delete: (0,
                y.ls)(e.delete.bind(e), G.t_),
                get: (0,
                y.ls)(e.get.bind(e), G.t_),
                getAllKeys: (0,
                y.ls)(e.getAllKeys.bind(e), G.t_),
                get name() {
                    return e.name
                },
                get objectStoreNames() {
                    return e.objectStoreNames
                },
                put: (0,
                y.ls)(e.put.bind(e), G.t_),
                get version() {
                    return e.version
                }
            })))))
              , x = (0,
            y.ls)((function(e) {
                let {blocked: t} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const n = indexedDB.deleteDatabase(e);
                return t && n.addEventListener("blocked", ( () => t())),
                p(n).then(( () => {}
                ))
            }
            ), G.t_)
        }
        ,
        991: (e, t, n) => {
            n.r(t),
            n.d(t, {
                make: () => o
            });
            var r = n(169)
              , s = n(243);
            const i = e => {
                const {logger: t, consent: n, prefix: r} = e
                  , s = (e, n) => (t.debug(`${r} Failed to write ${String(n)} as consent is revoked`),
                Promise.resolve(n));
                return e => class extends e {
                    put = ( (e, t, n) => function() {
                        return (n() ? t : e)(...arguments)
                    }
                    )(super.put.bind(this), s, ( () => !n.current))
                }
            }
              , o = (e, t, n, o, a, c, u, l, f, d, p) => (0,
            r.zG)(s.K, i({
                logger: f,
                consent: d,
                prefix: s.O
            })).initialise(e, t, f, n, o, a, c, u, l, p)
        }
        ,
        5: (e, t, n) => {
            n.r(t),
            n.d(t, {
                watson: () => l
            });
            var r = n(532)
              , s = n(169)
              , i = n(507)
              , o = n(144)
              , a = n(812)
              , c = n(229)
              , u = n(644);
            const l = e => (0,
            s.zG)(d(e), r.YO("data"), r.Hr("replacementMap", (e => {
                let {data: t} = e;
                return (0,
                s.zG)(t, i.YO("data"), i.Hr("taxonomyLabels", (e => {
                    let {data: t} = e;
                    return function(e) {
                        const t = e => {
                            const t = e.split("/").filter((e => e));
                            return t.map(( (e, n) => "/" + t.slice(0, n + 1).join("/")))
                        }
                          , n = a.xH(e.filter(Boolean).map((e => t(e.label))));
                        return a.jj(c.Eq)(n)
                    }(t.taxonomy ?? [])
                }
                )), i.UI((e => {
                    var t, n, r;
                    let {data: i, taxonomyLabels: o} = e;
                    return {
                        $alchemy_concepts: i.concepts ?? [],
                        $alchemy_document_emotion: (null === (t = i.emotion) || void 0 === t || null === (n = t.document) || void 0 === n ? void 0 : n.emotion) ?? null,
                        $alchemy_document_sentiment: (null === (r = i.sentiment) || void 0 === r ? void 0 : r.document) ?? null,
                        $alchemy_entities: i.entities ?? [],
                        $alchemy_entity_names: (0,
                        s.zG)(i.entities ?? [], a.UI((e => e.text))),
                        $alchemy_keywords: i.keywords ?? [],
                        $alchemy_taxonomy: i.taxonomy ?? [],
                        $alchemy_taxonomy_labels: o,
                        $taxonomy_labels: o
                    }
                }
                )))
            }
            )), r.Hr("permutiveContext", (e => {
                let {data: t} = e;
                return (0,
                s.zG)(t, i.EQ(( () => ({})), (e => ({
                    watson: e
                }))))
            }
            )), (e => ({
                permutiveContext: (0,
                s.zG)(e, r.UI((e => e.permutiveContext))),
                replacementMap: (0,
                s.zG)(e, r.UI((e => e.replacementMap)))
            })))
              , f = () => r.a9(i.G({}))
              , d = e => (0,
            s.zG)(r.vP(e.watsonEnabled, e.pageUrl), r.UI((0,
            s.ls)(i.DT(u.li), i.tS(u.Yg))), r.UI(i.UI((0,
            s.ls)(p(e.permutiveApi, e.metrics, e.config, e.permutiveUrls, e.trace), r.p4, r.UI(i.UI(o.fS(( () => ({})))))))), r.VS(i.fS(f)))
              , p = (e, t, n, r, s) => o => {
                const a = t.startTimer("sdk_http_watson_seconds", {})
                  , c = s.startSpan("watson_data_retrieval");
                return e.req({
                    url: r.getEndpointUrl("/watson", i.G(n.apiVersion)),
                    method: "POST",
                    contentType: "text/plain",
                    dataType: "json",
                    withCredentials: !1,
                    payload: {
                        url: o,
                        classify: !0
                    }
                }).then((e => (t.stopTimer("sdk_http_watson_seconds", a),
                t.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                    timestamp_name: "watson_data_ready",
                    time_origin: "sdk_init"
                }, performance.now()),
                c.finish(),
                e)))
            }
        }
    }
      , t = {};
    function n(r) {
        var s = t[r];
        if (void 0 !== s)
            return s.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n),
        i.exports
    }
    n.d = (e, t) => {
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    ( () => {
        var e = n(593)
          , t = n(532)
          , r = n(169)
          , s = n(240)
          , i = n(507)
          , o = n(812)
          , a = n(937)
          , c = n(6);
        function u(e, n) {
            return (0,
            r.zG)(c.Y3(( () => e.get(n)), (e => `Failed to read previous state from IndexedDB: ${e}.`)), c.UI((e => e ?? void 0)), c.UI((s => i => (0,
            r.ls)((0,
            a.rO)({
                previousState: () => s
            }), i, (i => {
                let {value: o, state: c} = i;
                const [u,l] = t.Ue(!1)
                  , f = (0,
                r.zG)(c, t.Rp(-1, (e => e + 1)));
                return {
                    value: (0,
                    r.bc)(u, o),
                    state: (0,
                    r.zG)(t.vP(c, f), (0,
                    a.bw)(t.YP((t => {
                        let[r,i] = t;
                        if (0 !== i || r !== s)
                            switch (l(!1),
                            typeof r) {
                            case "undefined":
                                e.delete(n).then(( () => l(!0)));
                                break;
                            case "object":
                                null === r ? e.delete(n).then(( () => l(!0))) : e.put(r, n).then(( () => l(!0)));
                                break;
                            default:
                                e.put(r, n).then(( () => l(!0)))
                            }
                    }
                    ))))
                }
            }
            )))))
        }
        function l(e) {
            return n => (0,
            r.ls)((0,
            a.rO)({
                previousState: t => e.current ? t : void 0
            }), n, (0,
            a.rO)({
                state: (0,
                r.ls)((n => t.vP(e, n)), t.UI((e => {
                    let[t,n] = e;
                    return t ? n : void 0
                }
                )))
            }))
        }
        var f = n(144);
        class d extends Error {
            static errorName = "NetworkRequestFailedError";
            name = d.errorName;
            constructor() {
                super(d.defaultMessage)
            }
            static get defaultMessage() {
                return "Network request failed"
            }
        }
        class p extends Error {
            static errorName = "NetworkRequestTimeoutError";
            name = p.errorName;
            constructor() {
                super(p.defaultMessage)
            }
            static get defaultMessage() {
                return "Network request timed out"
            }
        }
        var g = n(614)
          , h = function(e) {
            return "Left" === e._tag
        }
          , _ = function(e) {
            return "Right" === e._tag
        };
        function m(e) {
            return {
                _tag: "Left",
                left: e
            }
        }
        function b(e) {
            return {
                _tag: "Right",
                right: e
            }
        }
        function v(e, t) {
            return {
                _tag: "Both",
                left: e,
                right: t
            }
        }
        var w = function(e, t, n) {
            return function(r) {
                switch (r._tag) {
                case "Left":
                    return e(r.left);
                case "Right":
                    return t(r.right);
                case "Both":
                    return n(r.left, r.right)
                }
            }
        }
          , y = w;
        y(b, m, (function(e, t) {
            return v(t, e)
        }
        ));
        var k = b
          , S = "These";
        r.yR,
        r.yR,
        g.Xl;
        class I {
            metrics;
            constructor(e) {
                this.metrics = e
            }
            req(e) {
                return this.reqImpl(e).then((e => (0,
                r.MZ)(e)))
            }
            reqWithBeacon(e) {
                var t, n;
                let {url: r, payload: s} = e;
                const i = JSON.stringify(s)
                  , o = (null === (t = navigator) || void 0 === t || null === (n = t.sendBeacon) || void 0 === n ? void 0 : n.call(t, r, JSON.stringify(s))) ?? !1;
                return this.trackRequestMetrics({
                    is_beacon: !0,
                    is_error: !o,
                    request: {
                        method: "POST",
                        url: r,
                        content_length: i.length
                    }
                }),
                o
            }
            reqImpl(t) {
                const n = "arraybuffer"
                  , {url: s, dataType: o, contentType: c, method: u, withCredentials: l, timeout: h} = t;
                return new Promise(( (_, m) => {
                    const w = new XMLHttpRequest
                      , y = "POST" === t.method ? "string" == typeof (k = t.payload) ? k : JSON.stringify(k) : null;
                    var k;
                    const S = e => this.trackRequestMetrics({
                        is_beacon: !1,
                        request: {
                            method: u,
                            url: s,
                            content_length: (null == y ? void 0 : y.length) ?? 0
                        },
                        response: e
                    });
                    w.onload = (0,
                    e.GL)(( () => {
                        var e, t;
                        return (0,
                        r.zG)(w.status, f.DT((e => e < 400), ( () => {
                            const e = "text" === w.responseType || "" === w.responseType ? w.responseText : "Couldn't access response text";
                            return `Failed ajax request. Status code was ${w.status}. ${e}`
                        }
                        )), f.tS(( () => "json" === o ? w.responseText ? f.Y3(( () => JSON.parse(w.responseText)), (e => `Failed to parse response as JSON. Response was ${JSON.stringify(w.responseText)}. Got ${e}`)) : f.F2(null) : "text" === o ? f.F2(w.responseText) : f.F2(w.response))), (0,
                        a.bw)((0,
                        r.ls)(i.IS, (t = {
                            content_length: "text" === w.responseType || "" === w.responseType ? (null === (e = w.responseText) || void 0 === e ? void 0 : e.length) ?? 0 : w.responseType === n ? w.response.byteLength : 0,
                            response_time_ms: self.performance.now() - I,
                            status_code: w.status
                        },
                        function(e) {
                            return g.Wi(e) ? b(t) : v(e.value, t)
                        }
                        ), S)), f.EQ(m, _))
                    }
                    )),
                    w.onerror = (0,
                    e.GL)(( () => {
                        S(f.t$("network error")),
                        m(new d)
                    }
                    )),
                    w.ontimeout = (0,
                    e.GL)(( () => {
                        S(f.t$("timeout")),
                        m(new p)
                    }
                    )),
                    w.open(u, s, !0),
                    c && w.setRequestHeader("content-type", c),
                    w.timeout = h || w.timeout,
                    w.withCredentials = l || w.withCredentials,
                    w.responseType = "binary" === o ? n : w.responseType;
                    const I = self.performance.now();
                    w.send(y)
                }
                ))
            }
            trackRequestMetrics(e) {
                var t;
                if (null === (t = this.metrics) || void 0 === t || !t.isEnabled())
                    return;
                const n = new URL(e.request.url).pathname;
                if (n.includes("metrics"))
                    return;
                const s = t => this.metrics.track({
                    name: "sdk_http_request_count_total",
                    value: 1,
                    labels: {
                        request_method: e.request.method,
                        request_path: n,
                        request_content_length: e.request.content_length,
                        ...t
                    }
                });
                var o;
                !0 === e.is_beacon ? s({
                    is_beacon: !0,
                    is_error: e.is_error
                }) : (0,
                r.zG)((o = e.response,
                h(o) ? g.YP : (_(o),
                g.G(o.right))), i.aD(( () => ({})), (e => ({
                    response_content_length: e.content_length,
                    response_status: e.status_code,
                    response_time_ms: e.response_time_ms
                }))), (t => ({
                    is_beacon: !1,
                    is_error: !_(e.response),
                    ...t
                })), s)
            }
        }
        class G {
            config;
            PATH_JOINER_Q = "?";
            PATH_JOINER_A = "&";
            constructor(e) {
                this.config = e
            }
            getBaseUrl() {
                return `${this.config.apiProtocol}://${this.config.apiHost}`
            }
            getEndpointUrl(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return this.getUrl("base", e, t, n)
            }
            getSdkErrorsUrl(e, t) {
                return this.getUrl("sdk-errors", e, t, [])
            }
            getAdvertiserEndpointUrl(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return this.getUrl("adv", e, t, n)
            }
            getClassificationModelsEndpointUrl(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return this.getUrl("clm", e, t, n)
            }
            getAudienceMatchingEndpointUrl(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
                const s = `${e}/${n}/audiences`;
                return this.getUrl("audience-matching", s, t, r)
            }
            getCCSCohortMembershipEndpointUrl(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                return this.getUrl("ccs", e, t, n)
            }
            makeAuthenticatedUrl(e) {
                return this.makeUrlWithQueryParams(e, [["k", this.config.apiKey]])
            }
            getUrlPrefix(e) {
                switch (e) {
                case "base":
                    return "";
                case "adv":
                    return "/adv";
                case "sdk-errors":
                    return "/sdk-errors";
                case "clm":
                    return "/clm";
                case "audience-matching":
                    return "/audience-matching";
                case "ccs":
                    return "/ccs"
                }
            }
            getUrl(e, t, n, r) {
                const s = this.getUrlPrefix(e)
                  , o = (0,
                i.g_)(( () => ""), (e => `/${e}`))(n)
                  , a = `${this.getBaseUrl()}${s}${o}${t}`;
                return this.makeUrlWithQueryParams(a, r.concat([["k", this.config.apiKey]]))
            }
            makeUrlWithQueryParams(e, t) {
                const n = t.map((e => {
                    let[t,n] = e;
                    return `${t}=${n}`
                }
                )).join(this.PATH_JOINER_A)
                  , r = e.includes(this.PATH_JOINER_Q) ? this.PATH_JOINER_A : this.PATH_JOINER_Q;
                return `${e}${r}${n}`
            }
        }
        var z = n(243)
          , q = n(945);
        class U {
            sdkInitTimestamp;
            timeOriginSdkInit;
            logger;
            prefix = "[Metrics]";
            timeOriginForContext = P();
            pendingMetrics = [];
            pendingCounters = {};
            pendingTimers = {};
            noMetricsTracked = 0;
            constructor(e, t, n) {
                this.sdkInitTimestamp = e,
                this.timeOriginSdkInit = t,
                this.logger = n
            }
            isEnabled() {
                return !0
            }
            getNoMetricsTracked() {
                return this.noMetricsTracked
            }
            consume() {
                const e = this.pendingMetrics.concat(Object.values(this.pendingCounters).flat());
                return this.pendingMetrics = [],
                this.pendingCounters = {},
                e
            }
            track(e) {
                this.noMetricsTracked++,
                this.logDebug(`Tracking ${e.name}`, {
                    metric: e
                }),
                this.pendingMetrics.push(e)
            }
            trackCounter(e) {
                if (this.noMetricsTracked++,
                this.logDebug(`Tracking ${e.name}`, {
                    metric: e
                }),
                e.name in this.pendingCounters) {
                    const t = Object.keys(e.labels)
                      , n = this.pendingCounters[e.name].findIndex((n => Object.keys(n.labels).length === t.length && t.every((t => n.labels[t] === e.labels[t]))));
                    -1 === n ? this.pendingCounters[e.name].push(e) : this.pendingCounters[e.name][n] = x(this.pendingCounters[e.name][n], e.value)
                } else
                    this.pendingCounters[e.name] = [e]
            }
            synchroniseTimeBetweenContexts(e) {
                return (0,
                r.zG)(q.gz(i.G5)(this.timeOriginForContext, this.timeOriginSdkInit), i.UI((t => {
                    let[n,r] = t;
                    return e + n - r
                }
                )))
            }
            trackTimeSinceInit(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
                (0,
                r.zG)(this.synchroniseTimeBetweenContexts(n), i.UI((e => (e - this.sdkInitTimestamp) / 1e3)), i.UI((n => this.track({
                    name: e,
                    value: n,
                    labels: t
                }))))
            }
            startTimer(e, t) {
                const n = performance.now()
                  , r = this.generateRandomKey(e);
                return this.pendingTimers[r] = {
                    startTime: n,
                    labels: t
                },
                r
            }
            stopTimer(e, t) {
                const n = this.pendingTimers[t];
                if (n) {
                    const r = (performance.now() - n.startTime) / 1e3;
                    this.logDebug("timer stopped", e, r),
                    this.track({
                        name: e,
                        value: r,
                        labels: n.labels
                    }),
                    delete this.pendingTimers[t]
                }
            }
            generateRandomKey(e) {
                return `${e}-${[...Array(24)].map(( () => Math.random().toString(36)[2])).join("")}`
            }
            logDebug() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.debug(this.prefix, ...t)
            }
        }
        class E {
            isEnabled() {
                return !1
            }
            getNoMetricsTracked() {
                return 0
            }
            consume() {
                return []
            }
            track(e) {}
            trackCounter(e) {}
            trackTimeSinceInit(e, t) {}
            startTimer(e, t) {
                return ""
            }
            stopTimer(e, t) {}
        }
        const x = (e, t) => ({
            ...e,
            value: e.value + t
        })
          , P = () => (0,
        r.zG)(i.Y3(( () => performance.timeOrigin)), i.hX((e => "number" == typeof e && !Number.isNaN(e))));
        class C {
            sdkInitTimestamp;
            prefix = "[Permutive]" + (self.document ? "[Main]" : "[Worker]");
            debugStyle = ["color: blue"].join(";");
            constructor(e) {
                this.sdkInitTimestamp = e
            }
            get timeDeltaFromInit() {
                return `[${(new Date).getTime() - this.sdkInitTimestamp}ms]`
            }
            log() {
                return console.log.bind(self.console, this.timeDeltaFromInit, this.prefix)(...arguments)
            }
            debug() {
                return console.debug.bind(self.console, "%s%c%s", this.timeDeltaFromInit, this.debugStyle, this.prefix)(...arguments)
            }
            warn() {
                return console.warn.bind(self.console, this.timeDeltaFromInit, this.prefix)(...arguments)
            }
            error() {
                return console.error.bind(self.console, this.timeDeltaFromInit, this.prefix)(...arguments)
            }
        }
        class O {
            log() {}
            debug() {}
            warn() {}
            error() {}
        }
        class D {
            crypto = self.crypto || self.msCrypto;
            ALG_NAME = "AES-GCM";
            isAvailable() {
                var e;
                return !(null === (e = this.crypto) || void 0 === e || !e.subtle)
            }
            generateKey() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return (0,
                e.t_)(this.crypto.subtle.generateKey({
                    name: this.ALG_NAME,
                    length: 256
                }, t, ["encrypt", "decrypt"]))
            }
            encrypt(e, t) {
                const [n,r] = this._encrypt(e, this.str2bytes(t));
                return n.then((e => {
                    const t = new Uint8Array(16 + e.byteLength);
                    return t.set(r, 0),
                    t.set(new Uint8Array(Uint32Array.of(e.byteLength).buffer), 12),
                    t.set(new Uint8Array(e), 16),
                    t.buffer
                }
                ))
            }
            decrypt(e, t) {
                const n = new Uint8Array(t,0,12)
                  , r = new Uint32Array(t,12,1)[0]
                  , s = t.slice(16, 16 + r);
                return this._decrypt(e, n, s).then(this.bytes2str)
            }
            _encrypt(t, n) {
                const r = this.crypto.getRandomValues(new Uint8Array(12));
                return [(0,
                e.t_)(this.crypto.subtle.encrypt({
                    name: this.ALG_NAME,
                    iv: r
                }, t, n)), r]
            }
            _decrypt(t, n, r) {
                return (0,
                e.t_)(this.crypto.subtle.decrypt({
                    name: this.ALG_NAME,
                    iv: n
                }, t, r))
            }
            str2bytes(e) {
                return (new TextEncoder).encode(e).buffer
            }
            bytes2str(e) {
                return (new TextDecoder).decode(e)
            }
        }
        class A {
            config;
            constructor(e) {
                this.config = e
            }
            getNamespacedStorageKey(e) {
                return `${this.config.stateNamespace}${e}`
            }
        }
        var T = n(46)
          , j = n(694)
          , M = n(450)
          , R = n(327)
          , F = n(214);
        var L = n(654)
          , Y = n(153);
        class N {
            timeoutDurationInMilliseconds;
            maxTimeOutDurationInMilliseconds;
            constructor(e, t) {
                this.timeoutDurationInMilliseconds = e,
                this.maxTimeOutDurationInMilliseconds = t
            }
            schedule(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.timeoutDurationInMilliseconds
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.maxTimeOutDurationInMilliseconds;
                return this.debounce(e, t, n)
            }
            scheduleAccumulated(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeoutDurationInMilliseconds
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.maxTimeOutDurationInMilliseconds;
                return this.debounce(e, n, r, t)
            }
            scheduleForPageUnload(e) {
                return (0,
                a.aT)(e)
            }
            debounce(t, n, r, s) {
                let i, o, c, u = [];
                return l => {
                    s && (c = s.concat(c ?? s.empty, l));
                    const f = (0,
                    a.b2)();
                    u.push(f);
                    var d;
                    return null === (d = i) || void 0 === d || d(),
                    i = (0,
                    e.HJ)(( () => {
                        var e;
                        null === (e = o) || void 0 === e || e(),
                        o = void 0;
                        const n = t(c || l);
                        u.forEach((e => e.resolve(n))),
                        c = null == s ? void 0 : s.empty,
                        u = []
                    }
                    ), n),
                    o || (o = (0,
                    e.HJ)(( () => {
                        var e;
                        null === (e = i) || void 0 === e || e(),
                        o = void 0;
                        const n = t(c || l);
                        u.forEach((e => e.resolve(n))),
                        c = null == s ? void 0 : s.empty,
                        u = []
                    }
                    ), r)),
                    f.promise
                }
            }
        }
        class Q extends Error {
            constructor(e) {
                super(e),
                this.name = "StoreClosingError"
            }
        }
        const B = "permutive-events-cache"
          , $ = "permutive-events-for-page"
          , H = "[EVENTSCACHE]"
          , K = e => "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name;
        class V {
            config;
            logger;
            reportError;
            trace;
            metrics;
            userId;
            makeEventsStore;
            eventStore;
            eventsCache = this.makeEventsRepository(B);
            eventsForPage = this.makeEventsRepository($);
            eventsTTLInMilliseconds;
            readiness;
            debouncedReportError = ( () => new N(5e3,5e3).schedule((e => this.reportError(e.errorMessage, {
                userId: e.userId
            }))))();
            static initialise(e, t, n, s, i, o, a) {
                return (0,
                r.zG)(a(), c.UI((r => new V(e,t,n,s,i,o,a,r))))
            }
            constructor(e, t, n, s, o, c, u, l) {
                this.config = e,
                this.logger = t,
                this.reportError = n,
                this.trace = s,
                this.metrics = o,
                this.userId = c,
                this.makeEventsStore = u,
                this.eventStore = l,
                this.eventsTTLInMilliseconds = (0,
                r.zG)((0,
                i.ij)(this.config.eventsTTLInDays), (0,
                i.tS)((e => "number" == typeof e && e > 0 ? (0,
                i.G)(24 * e * 3600) : i.YP))),
                this.eventsCache.events = (0,
                a.HP)(( () => (0,
                a.PQ)((0,
                r.zG)(T.tD(( () => this.trace.startSpan("load_event_cache"))), T.tS((e => (0,
                r.zG)(this.loadFromDisk(), T.At((t => () => {
                    e.finish(),
                    this.logDebug(`Event cache loaded, #e ${t.length}`)
                }
                ))))))))),
                this.readiness = this.eventsCache.events().then(( () => this.migratePreviousPagesEvents())),
                c.onChange(( () => this.reset()))
            }
            async migratePreviousPagesEvents() {
                const e = this.trace.startSpan("migrate_previous_for_page_events")
                  , t = (0,
                T.pE)((e => (0,
                c.Y3)(( () => e.flush()), L.w)));
                return (0,
                r.zG)([this.eventsForPage, this.eventsCache], t, (0,
                T.UI)((t => {
                    const n = o.bj(t);
                    return n.length > 0 && this.reportError(`Migrate previous events failed. Got:\n${n.join("\n ")}`, {
                        userId: this.userId.current
                    }),
                    e.finish()
                }
                )), (e => e()))
            }
            all() {
                return Promise.all([this.eventsCache.events(), this.eventsForPage.events()]).then(o.xH)
            }
            async add(e, t) {
                let {persistOnDisk: n} = t;
                return this.logDebug("Adding to cache", e),
                this.eventsForPage.events = (0,
                r.zG)(this.eventsForPage.events, T.UI((t => [...t, e])), a.HP),
                n && this.readiness.then(( () => this.eventsForPage.flush())),
                e
            }
            filterEventsByWorkspace(e) {
                return e
            }
            pruneEventsToSizeLimit(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.config.eventsCacheLimitBytes;
                if (n <= 0 || t <= n)
                    return this.logDebug(`Event size of ${t} less than limit of ${n}`),
                    {
                        events: e,
                        sizeInBytes: t
                    };
                this.logDebug("Events before pruning", {
                    count: e.length,
                    sizeInBytes: t,
                    byteLimit: n
                });
                let r = 1
                  , s = [...e];
                for (; t > n; )
                    s.splice(0, r),
                    r *= 2,
                    t = 2 * JSON.stringify(s).length;
                return this.logDebug("Events after pruning", {
                    count: s.length,
                    sizeInBytes: t
                }),
                {
                    events: s,
                    sizeInBytes: t
                }
            }
            loadFromDisk() {
                const e = () => []
                  , t = (0,
                r.zG)(this.eventsTTLInMilliseconds, i.EQ(( () => r.yR), (e => o.hX((t => e > Date.now() - t.time.getTime())))));
                return (0,
                r.zG)(T.tD(( () => (this.logLog("Loading event cache..."),
                this.metrics.startTimer("sdk_load_events_cache_task_duration_seconds", {})))), T.YO("loadEventsCacheTask"), T.ak("eventsFromDisk", ( () => (0,
                r.zG)(o.nI([this.eventStore.get(B), this.eventStore.get($)]), o.UI(c.LV((0,
                a.lo)([[e => e instanceof Q, (0,
                r.ls)(e, T.of)], t => (0,
                r.zG)(T.tD(( () => this.reportError(`Error fetching data from store. Got ${t}`, {
                    userId: this.userId.current
                }))), T.tS(( () => () => this.reset("historical"))), T.UI(e))]), (0,
                r.ls)(i.fS(e), T.of))), o.vP(T.qA)))), T.At((e => {
                    let {eventsFromDisk: t, loadEventsCacheTask: n} = e;
                    return () => {
                        this.logDebug("Read events from store:", t),
                        this.metrics.stopTimer("sdk_load_events_cache_task_duration_seconds", n)
                    }
                }
                )), T.UI((0,
                r.ls)((0,
                a.vg)("eventsFromDisk"), o.xH, this.filterEventsByWorkspace, (e => this.pruneEventsToSizeLimit(e, 2 * JSON.stringify(e).length)), (e => (this.eventsCache.sizeInBytes = e.sizeInBytes,
                this.eventsCache.sizeInBytesLastSuccessfulWrite = e.sizeInBytes,
                e.events.length > 0 && (this.metrics.track({
                    name: "sdk_events_cache_byte_total",
                    value: e.sizeInBytes,
                    labels: {}
                }),
                this.metrics.track({
                    name: "sdk_events_cache_size_total",
                    value: e.events.length,
                    labels: {}
                })),
                e.events)), o.UI(Y.k), t)))
            }
            async reset(e) {
                return (0,
                r.zG)(T.tD(( () => this.logDebug("Resetting Events Cache"))), T.tS(( () => this.eventStore.deleteStore())), c.tS(( () => this.makeEventsStore())), c.Zl((t => (this.eventStore = t,
                "historical" === e ? q.gz(c.Ij)(this.eventsCache.reset, this.eventsForPage.flush) : q.gz(c.Ij)(this.eventsCache.reset, this.eventsForPage.reset)))), c.wE(( () => () => this.all())), c.fS(( () => T.of(X()))), (e => e()))
            }
            getStateSizeInBytes() {
                return this.eventsForPage.sizeInBytes + this.eventsCache.sizeInBytes
            }
            makeEventsRepository(e) {
                const t = ( () => {
                    let e = Promise.resolve(f.F2((0,
                    r.Q1)()));
                    return t => e = e.then(t)
                }
                )()
                  , n = e => (0,
                r.zG)(T.tD(( () => this.logDebug(`Writing ${e.length} events to ${g.key}`))), T.tS(( () => this.eventStore.put(e.map(Y.X), g.key))), c.UI(r.Q1))
                  , s = (0,
                r.zG)(T.tD(( () => this.logDebug(`Deleting events for ${g.key}`))), T.tS(( () => this.eventStore.delete(g.key))), c.Vn(L.w))
                  , i = (0,
                r.ls)(T.of, T.At((e => () => this.logError(`Events cache failed to put ${g.key}. Got ${e}`))), T.tS((0,
                a.lo)([[e => K(e) && g.retryAttempts < 9, () => (0,
                r.zG)(T.tD(( () => {
                    g.retryAttempts += 1,
                    this.logDebug(`Attempt #${g.retryAttempts} to write ${g.key} to EventsStore`)
                }
                )), T.tS(( () => p)), T.tS(( () => u)))], [e => K(e), e => (0,
                r.zG)(T.tD(( () => this.logDebug(`Attempted ${g.retryAttempts} rewrite attempts and reached limit of 9 max writes.`, "Reporting QuotaExceededError to API"))), T.tS(( () => () => this.debouncedReportError({
                    errorMessage: `Events cache failed to put ${g.key}. Got ${e}`,
                    userId: this.userId.current
                }))), T.tS(( () => c.t$(e))))], c.t$])))
                  , o = e => c.tD(( () => {
                    this.logDebug(`Successfully wrote events for ${g.key} after ${g.retryAttempts} attempts`),
                    g.retryAttempts = 0,
                    g.sizeInBytes = 2 * JSON.stringify(e).length,
                    g.sizeInBytesLastSuccessfulWrite = g.sizeInBytes
                }
                ))
                  , u = (0,
                r.zG)(( () => g.events()), T.tS((e => (0,
                r.zG)(n(e), T.mU(f.EQ(i, ( () => o(e))))))))
                  , l = (e, t) => (0,
                r.zG)(e.events, T.UI((n => {
                    const r = 2 * JSON.stringify(n).length
                      , s = this.pruneEventsToSizeLimit(n, r, t);
                    return e.events = T.of(s.events),
                    e.sizeInBytes = s.sizeInBytes,
                    t - e.sizeInBytes
                }
                )))
                  , d = (e, t) => {
                    let[n,...s] = e;
                    return n && 0 !== t ? (0,
                    r.zG)(l(n, t), T.tS((e => (this.logDebug(`${e} left after pruning ${n.key}`),
                    d(s, e))))) : T.of((0,
                    r.Q1)())
                }
                  , p = (0,
                r.zG)(c.tD(( () => this.eventsForPage.sizeInBytes - this.eventsForPage.sizeInBytesLastSuccessfulWrite)), c.fX(f.DT((e => e > 0), (e => new Error(`${this.eventsForPage.key} failed to write the same or smaller events cache of size ${e}`)))), c.tS((e => {
                    const t = 1.2 * e
                      , n = [this.eventsCache, this.eventsForPage];
                    return this.logDebug(`Pruning ${t} bytes from`, n),
                    (0,
                    r.zG)(d(n, t), c.fF)
                }
                )))
                  , g = {
                    key: e,
                    events: T.of([]),
                    sizeInBytes: 0,
                    sizeInBytesLastSuccessfulWrite: 0,
                    retryAttempts: 0,
                    flush: () => (0,
                    r.zG)(T.tD(( () => this.trace.startSpan(`write_${g.key}`))), T.tS((e => (0,
                    r.zG)(u, T.At(( () => () => e.finish()))))), t),
                    reset: () => (0,
                    r.zG)(T.tD(( () => {
                        g.events = T.of([]),
                        g.sizeInBytes = 0,
                        g.sizeInBytesLastSuccessfulWrite = 0
                    }
                    )), T.tS(( () => s)), t)
                };
                return g
            }
            logDebug() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.debug(H, ...t)
            }
            logWarn() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.warn(H, ...t)
            }
            logError() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.error(H, ...t)
            }
            logLog() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.log(H, ...t)
            }
        }
        const X = () => []
          , J = `permutive.${self.document ? "main" : "worker"}.`;
        class W {
            config;
            shouldUsePerformanceMark = !1;
            constructor(e) {
                var t;
                this.config = e,
                this.shouldUsePerformanceMark = ((null === (t = self.performance) || void 0 === t ? void 0 : t.mark) && this.config.tracingEnabled) ?? !1
            }
            startSpan(e) {
                const t = this.generateSpan(e);
                return t.start(),
                {
                    spanId: t.spanId,
                    finish: t.finish
                }
            }
            measureSinceInit(t) {
                const n = this.generateSpan(`${t}_since_init`);
                return n.start({
                    startTime: e.NC
                }),
                {
                    spanId: n.spanId,
                    finish: n.finish
                }
            }
            traceTask(e) {
                return t => async () => {
                    const n = this.startSpan(e)
                      , r = await t();
                    return n.finish(),
                    r
                }
            }
            measureBetween(e, t, n) {
                const r = this.generateSpan(e);
                r.start({
                    startTime: t
                }),
                r.finish({
                    startTime: n
                })
            }
            generateSpan(e) {
                if (!this.shouldUsePerformanceMark)
                    return {
                        spanId: null,
                        start: () => {}
                        ,
                        finish: () => {}
                    };
                const {spanName: t, startMarkerName: n, endMarkerName: r} = W.generateUniqueMarkerNames(e);
                return {
                    spanId: n,
                    start: e => {
                        var t;
                        return null === (t = self.performance) || void 0 === t ? void 0 : t.mark(n, e)
                    }
                    ,
                    finish: e => {
                        var s, i, o;
                        null === (s = self.performance) || void 0 === s || s.mark(r, {
                            startTime: (null == e ? void 0 : e.startTime) ?? performance.now()
                        }),
                        null === (i = self.performance) || void 0 === i || null === (o = i.measure) || void 0 === o || o.call(i, t, n, r)
                    }
                }
            }
            static generateUniqueMarkerNames(e) {
                const t = `${J}${e}`
                  , n = `${t}${W.generateId()}`;
                return {
                    spanName: t,
                    startMarkerName: `${n}_start`,
                    endMarkerName: `${n}_end`
                }
            }
            static generateId() {
                return "_" + Math.random().toString(36).substr(2, 9)
            }
        }
        class Z {
            db;
            static version = 3;
            static connect(t, s, i, o, a, u, l, f, d, p) {
                return (0,
                r.zG)(c.Y3(( () => Promise.resolve().then(n.bind(n, 991))), String), e.N1, c.tS((e => e.make(t, s, i, o, a, u, l, Z.version, f, d, p))), c.UI((e => new Z(Promise.resolve(e)))))
            }
            constructor(e) {
                this.db = e
            }
            shouldThrowStoreClosingError(e) {
                return "NotFoundError" === e.name || "InvalidStateError" === e.name
            }
            makeStoreClosingDuringOpertationError(e) {
                return new Q(`Attempted ${e} when the current store is closing.`)
            }
            put(e, t) {
                return (0,
                c.Y3)(( () => this.db.then((n => n.put(e, t)))), (e => {
                    const t = (0,
                    L.w)(e);
                    return this.shouldThrowStoreClosingError(t) ? this.makeStoreClosingDuringOpertationError("put") : t
                }
                ))
            }
            get(e) {
                return (0,
                c.Y3)(( () => this.db.then((t => t.get(e))).then(i.ij)), (e => {
                    const t = (0,
                    L.w)(e);
                    return this.shouldThrowStoreClosingError(t) ? this.makeStoreClosingDuringOpertationError("get") : t
                }
                ))
            }
            delete(e) {
                return (0,
                c.Y3)(( () => this.db.then((t => t.delete(e)))), (e => String(e)))
            }
            deleteStore() {
                return (0,
                c.Y3)(( () => this.db.then((e => e.deleteStore()))), (e => String(e)))
            }
        }
        const ee = e => {
            if (!e)
                return "";
            return (0,
            r.zG)(e, (e => {
                const t = e.length - 1;
                return "/" === e[t] ? e.slice(0, t) : e
            }
            ))
        }
        ;
        class te {
            urls;
            config;
            network;
            metricsCollector;
            logger;
            webClient;
            prefix = "[API]";
            constructor(e, t, n, r, s) {
                let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : () => i.YP;
                this.urls = e,
                this.config = t,
                this.network = n,
                this.metricsCollector = r,
                this.logger = s,
                this.webClient = o
            }
            async reportError(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Date;
                const s = (0,
                L.w)(e);
                if (this.logError("Reporting error:\n", s),
                !this.config.sendClientErrors)
                    return void this.logDebug("Send errors not enabled. Skipping");
                const a = (0,
                r.zG)(this.webClient, j.UI(i.fS(( () => {
                    var e, t, n, r;
                    return {
                        domain: (null === (e = self.location) || void 0 === e ? void 0 : e.hostname) ?? "",
                        referrer: "document"in self ? null === (t = self.document) || void 0 === t ? void 0 : t.referrer : "",
                        url: (null === (n = self.location) || void 0 === n ? void 0 : n.href) ?? "",
                        user_agent: (null === (r = navigator) || void 0 === r ? void 0 : r.userAgent) ?? ""
                    }
                }
                ))), j.UI((e => {
                    var r, i;
                    const o = {
                        error_message: (null == s || null === (r = s.message) || void 0 === r ? void 0 : r.toString()) ?? "",
                        stack_trace: null == s || null === (i = s.stack) || void 0 === i ? void 0 : i.split("\n")
                    }
                      , a = t ? {
                        user_id: t
                    } : {};
                    return {
                        platform: "web",
                        sdk_version: "v20.37.6",
                        ql_runtime_version: "v14.1.0",
                        timestamp: n,
                        domain: e.domain,
                        url: ee(e.url),
                        referrer: ee(e.referrer),
                        user_agent: e.user_agent,
                        error_message: o.error_message ?? String(s),
                        stack_trace: o.stack_trace,
                        ...a
                    }
                }
                )))
                  , c = e => this.network.req({
                    url: this.urls.getSdkErrorsUrl("/errors", i.G(this.config.sdkErrorsApiVersion)),
                    method: "POST",
                    payload: [e],
                    contentType: "text/plain",
                    dataType: "text",
                    withCredentials: !1
                })
                  , u = e => {
                    this.metricsCollector.trackCounter({
                        name: "sdk_http_generic_network_request_fail_count_total",
                        value: 1,
                        labels: {
                            network_error_type: e
                        }
                    })
                }
                ;
                await (0,
                r.zG)([d, p], o.Ew((e => s.name === e.errorName || s.message.indexOf(e.errorName) >= 0 || s.message.indexOf(e.defaultMessage) >= 0)), i.g_(( () => {
                    const e = a();
                    return c(e).catch((0,
                    r.ls)(L.w, (e => this.logError(e))))
                }
                ), (async e => u(e.errorName))))
            }
            logDebug() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.debug(this.prefix, ...t)
            }
            logError() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                this.logger.error(this.prefix, ...t)
            }
        }
        const ne = e => {
            const {provideEnvironment: t, ...n} = function(e) {
                let t, n = !1, r = [];
                return {
                    onReady: e => {
                        n ? e(t) : r.push(e)
                    }
                    ,
                    provideEnvironment: s => {
                        t = {
                            events: e.eventsLookup(s),
                            literals: e.literalsLookup(s),
                            properties: e.propertiesLookup(s),
                            ahoCorasick: e.ahoCorasickLookup(s),
                            subexpressions: e.subexpressionsLookup(s),
                            rootCompression: e.rootCompressionLookup(s)
                        },
                        r.forEach((e => e(t))),
                        r = [],
                        n = !0
                    }
                }
            }(e.runtimeInput)
              , r = function(e) {
                const t = e => () => {
                    throw new Error(`${e} lookup has not been provided`)
                }
                ;
                let n = t("events")
                  , r = t("literals")
                  , s = t("properties")
                  , i = t("ahoCorasick")
                  , o = t("subexpressions")
                  , a = t("rootCompression");
                function c(e) {
                    return u(e) && !l(e)
                }
                function u(e) {
                    return Boolean(e && "object" == typeof e && !Array.isArray(e))
                }
                function l(e) {
                    for (const t in e)
                        return !1;
                    return !0
                }
                function f(e) {
                    return (t, n) => {
                        const r = null != t && null != n ? e(t, n) : t || n;
                        return null == r || u(r) && l(r) ? null : r
                    }
                }
                function d(e) {
                    const t = (t, n) => ({
                        result: e.r(t, n)
                    });
                    return {
                        lift: (t, n) => e.d.l(t, n),
                        append: f(e.d.a),
                        interpret: (n, r) => t(r, e.d.i(n, r)),
                        compact: e.d.c,
                        migrate: m,
                        m: e.a.m,
                        z: e.a.z,
                        r: e.r,
                        i: e.d.i
                    }
                }
                function p(e) {
                    return {
                        interpret: (t, n) => ({
                            result: e.d.i(t, n)
                        }),
                        compact: e.d.c
                    }
                }
                function g(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
                    function r(e, t) {
                        return e && null != e[t] ? e[t] : null
                    }
                    const i = s(t).reduce(r, e);
                    return null === i ? null : n(i)
                }
                function h(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
                    return e.properties ? g(e.properties, t, n) : null
                }
                function _(e) {
                    const t = Object.keys(e);
                    let n = t.length
                      , r = new Array(n);
                    for (; n--; )
                        r[n] = [t[n], e[t[n]]];
                    return r
                }
                e.lookups.onReady((e => {
                    const {ahoCorasick: t, events: c, literals: u, properties: l, subexpressions: f, rootCompression: d} = e;
                    n = e => "number" == typeof e ? c[e] : e,
                    r = e => "number" == typeof e ? u[e] : e,
                    s = e => "number" == typeof e ? l[e] : e,
                    i = e => t[e],
                    o = e => f[e],
                    a = e => d[e]
                }
                ));
                let m = e => e
                  , b = e => !0;
                function v(e, t) {
                    function n(n) {
                        for (let r = 0; r < e.length; r++) {
                            if ((e[r](n) || !1) === t)
                                return t
                        }
                        return !t
                    }
                    return n
                }
                function w(e) {
                    return v(e, !0)
                }
                function y(e) {
                    return v(e, !1)
                }
                let k = e => t => !e(t)
                  , S = e => t => t === e
                  , I = e => t => t !== e
                  , G = e => t => t > e
                  , z = e => t => t >= e
                  , q = e => t => t < e
                  , U = e => t => t <= e
                  , E = (e, t) => n => n >= e && n <= t
                  , x = e => t => t === r(e)
                  , P = e => t => t !== r(e)
                  , C = e => new Date(e).getTime()
                  , O = (e, t, n) => r => {
                    const s = h(r, t)
                      , i = n.length;
                    let o = !0;
                    for (let t = 0; t < i; t++) {
                        const r = n[t];
                        if (o = e(r)(s),
                        !o)
                            break
                    }
                    return o
                }
                  , D = (e, t, n) => r => {
                    const s = h(r, t)
                      , i = n.length;
                    let o = !1;
                    for (let t = 0; t < i; t++) {
                        const r = n[t];
                        if (o = e(r)(s),
                        o)
                            break
                    }
                    return o
                }
                  , A = (e, t) => n => g(n, e) === t
                  , T = (e, t) => n => g(n, e) !== t
                  , j = (e, t) => n => g(n, e) > t
                  , M = (e, t) => n => g(n, e) >= t
                  , R = (e, t) => n => {
                    const r = g(n, e);
                    return null !== r && r < t
                }
                  , F = (e, t) => n => {
                    const r = g(n, e);
                    return null !== r && r <= t
                }
                  , L = (e, t) => n => Ut(t, g(n, e))
                  , Y = (e, t) => n => Ee(t)(g(n, e))
                  , N = (e, t) => n => g(n, e) === r(t)
                  , Q = (e, t) => n => g(n, e) !== r(t)
                  , B = (e, t) => n => h(n, e) === t
                  , $ = (e, t) => n => h(n, e) !== t
                  , H = (e, t) => n => h(n, e) > t
                  , K = (e, t) => n => h(n, e) >= t
                  , V = (e, t) => n => {
                    let r = h(n, e);
                    return null !== r && r < t
                }
                  , X = (e, t) => n => {
                    let r = h(n, e);
                    return null !== r && r <= t
                }
                  , J = (e, t, n) => r => E(t, n)(h(r, e))
                  , W = (e, t) => n => Ee(t)(h(n, e))
                  , Z = (e, t) => n => Ut(t, h(n, e))
                  , ee = (e, t) => n => h(n, e) === r(t)
                  , te = (e, t) => n => h(n, e) !== r(t)
                  , ne = (e, t) => n => {
                    const r = h(n, e);
                    return null != r && Array.isArray(r) && r.indexOf(t) >= 0
                }
                  , re = (e, t) => n => {
                    const s = h(n, e)
                      , i = r(t);
                    return null != s && Array.isArray(s) && s.indexOf(i) >= 0
                }
                  , se = e => g(e, ["time"], C)
                  , ie = (e, t) => g(t, e, C)
                  , oe = e => t => se(t) === e
                  , ae = e => t => se(t) !== e
                  , ce = e => t => se(t) > e
                  , ue = e => t => se(t) >= e
                  , le = e => t => se(t) < e
                  , fe = e => t => se(t) < e
                  , de = (e, t) => n => E(e, t)(se(n))
                  , pe = (e, t) => n => ie(e, n) === t
                  , ge = (e, t) => n => ie(e, n) !== t
                  , he = (e, t) => n => ie(e, n) > t
                  , _e = (e, t) => n => ie(e, n) >= t
                  , me = (e, t) => n => ie(e, n) < t
                  , be = (e, t) => n => ie(e, n) < t
                  , ve = (e, t, n, r, s, i) => o => {
                    const a = g(o, e, (e => e.filter(r).map((e => g(e, t))).reduce(s, i)));
                    return n(null === a ? i : a)
                }
                  , we = function(e, t, n) {
                    return ve(e, t, n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b, ( (e, t) => e + t), 0)
                }
                  , ye = function(e, t, n) {
                    return ve(e, t, n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b, ( (e, t) => e * t), 1)
                }
                  , ke = function(e, t, n) {
                    return ve(e, t, n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b, ( (e, t) => Math.min(e, t)), Number.POSITIVE_INFINITY)
                }
                  , Se = function(e, t, n) {
                    return ve(e, t, n, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b, ( (e, t) => Math.max(e, t)), Number.NEGATIVE_INFINITY)
                }
                  , Ie = function(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : b;
                    return s => {
                        const i = g(s, e, (e => e.filter(r)));
                        return null === i || 0 === i.length ? n(0) : n(i.map((e => g(e, t))).reduce(( (e, t) => e + t), 0) / i.length)
                    }
                };
                function Ge(e, t, n, r) {
                    for (const s of e)
                        if (n(s) && t(s) === r)
                            return r;
                    return !r
                }
                let ze = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                    return r => g(r, e, (e => Ge(e, t, n, !0))) || !1
                }
                  , qe = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                    return r => g(r, e, (e => Ge(e, t, n, !1))) && !0
                }
                  , Ue = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b;
                    return r => {
                        const s = g(r, e, (e => e.filter(n).length));
                        return t(null === s ? 0 : s)
                    }
                }
                  , Ee = e => t => ("string" == typeof e || "number" == typeof e) && "string" == typeof t && t.toLowerCase().indexOf(r(e).toLowerCase()) > -1
                  , xe = e => t => null != t && Array.isArray(t) && t.indexOf(e) >= 0
                  , Pe = (e, t) => n => xe(t)(g(n, e))
                  , Ce = (e, t) => n => xe(r(t))(g(n, e))
                  , Oe = e => t => xe(r(e))(t);
                const De = (e, t) => ({
                    l: r => g(r, ["name"]) === n(e) && t(r) ? ["p", 1] : null,
                    a: (e, t) => ["p", e[1] + t[1]],
                    i: e => e ? Array.isArray(e) ? e.slice(-1)[0] : e : 0,
                    c: e => Array.isArray(e) && e[1] ? e : null
                });
                function Ae(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
                    return {
                        a: {
                            m: (e, t) => e + t,
                            z: 0
                        },
                        r: (e, t) => n(t),
                        d: De(e, t)
                    }
                }
                function Te(e, t, r, s) {
                    return {
                        a: {
                            m: (e, t) => Math.min(e + t, s),
                            z: 0
                        },
                        r: (e, t) => r(t),
                        d: {
                            l: r => g(r, ["name"]) === n(e) && t(r) ? [`b${s}p`, 1] : null,
                            a: (e, t) => [`b${s}p`, Math.min(e[1] + t[1], s)],
                            i: e => e ? Array.isArray(e) ? e.slice(-1)[0] : e : 0,
                            c: e => Array.isArray(e) && e[1] ? e : null
                        }
                    }
                }
                function je(e) {
                    return {
                        d: {
                            i: t => {
                                let n = t ? Array.isArray(t) ? t.slice(-1)[0] : t : 0;
                                return e(n)
                            }
                            ,
                            c: e => Array.isArray(e) && e[1] ? e : null
                        }
                    }
                }
                function Me(e, t, r) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m;
                    const i = Number.NEGATIVE_INFINITY;
                    return {
                        a: {
                            m: (e, t) => e > t ? e : t,
                            z: i
                        },
                        r: (e, t) => s(t),
                        d: {
                            l: s => g(s, ["name"]) === n(e) && t(s) ? ["v", g(s, r)] : null,
                            a: (e, t) => e[1] > t[1] ? e : t,
                            i: e => e ? Array.isArray(e) ? e.slice(-1)[0] : e : i,
                            c: e => Array.isArray(e) && e[1] !== i ? e : null
                        }
                    }
                }
                function Re(e, t, r) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m;
                    const i = Number.POSITIVE_INFINITY;
                    return {
                        a: {
                            m: (e, t) => e < t ? e : t,
                            z: i
                        },
                        r: (e, t) => s(t),
                        d: {
                            a: (e, t) => e[1] < t[1] ? e : t,
                            l: s => g(s, ["name"]) === n(e) && t(s) ? ["n", g(s, r)] : null,
                            i: e => e ? Array.isArray(e) ? e.slice(-1)[0] : e : i,
                            c: e => Array.isArray(e) && e[1] !== i ? e : null
                        }
                    }
                }
                function Fe(e, t, r) {
                    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m;
                    const i = 0;
                    let o = e => e < 0 ? ["p2", null, -e] : ["p2", e]
                      , a = e => (e[0] || 0) - (e[1] || 0)
                      , c = r => g(r, ["name"]) === n(e) && t(r);
                    return {
                        a: {
                            m: (e, t) => e + t,
                            z: i
                        },
                        r: (e, t) => s(t),
                        d: {
                            a: (e, t) => {
                                const n = new Array(Math.max(e.length, t.length));
                                n[0] = "p2";
                                for (let r = 1; r < n.length; r++)
                                    n[r] = (e[r] ?? 0) + (t[r] ?? 0);
                                return n
                            }
                            ,
                            l: e => c(e) ? o(g(e, r)) : null,
                            i: e => e ? Array.isArray(e) ? a("p2" === e[0] ? e.slice(1) : e) : e : i,
                            c: e => Array.isArray(e) && (e[1] || e[2]) ? e : null
                        }
                    }
                }
                function Le(e, t, n, r, s) {
                    const i = g(e.getSegments(), [t, n]) || !1;
                    return s && (r || i) && e.setSegmentActivation(t, n, s),
                    i
                }
                function Ye(e, t, n) {
                    return g(e.getSegments(), [t, n]) || !1
                }
                const Ne = () => null
                  , Qe = e => ({
                    a: {
                        m: Ne,
                        z: null
                    },
                    r: t => e(t),
                    d: {
                        a: Ne,
                        l: Ne,
                        i: Ne,
                        c: Ne
                    }
                })
                  , Be = (e, t, n, r) => Qe((s => Le(s, e, t, n, r)))
                  , $e = Be
                  , He = e => Qe((t => Ye(t, "1p", e)));
                function Ke(e, t, n) {
                    if (void 0 === t[n])
                        return NaN;
                    const r = e || {};
                    if (0 == (r["1p"] || []).length)
                        return NaN;
                    const s = e => 1 / (1 + Math.pow(Math.E, -e))
                      , i = t[n] || {};
                    let o = (i["1p"] || {}).const || 0;
                    return Object.keys(r).forEach((e => {
                        r[e].forEach((t => {
                            const n = (i[e] || {})[t] || 0;
                            o += n
                        }
                        ))
                    }
                    )),
                    s(o)
                }
                const Ve = (e, t) => {
                    let n = t => Ke(t.getSegmentsArray(), t.getLookalikeModels(), e);
                    return Qe((e => t(n(e))))
                }
                ;
                function Xe(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 18e5;
                    return r => {
                        function s(e, t, n) {
                            if (c(t)) {
                                if (c(n)) {
                                    const r = {
                                        ...t,
                                        ...n
                                    };
                                    for (const s in n)
                                        if (t[s]) {
                                            const o = i(e, t[s], n[s]);
                                            null != o && (r[s] = o)
                                        }
                                    return r
                                }
                                return t
                            }
                            return n
                        }
                        function i(e, t, n) {
                            if (c(t)) {
                                if (c(n)) {
                                    const s = {
                                        ...t,
                                        ...n
                                    };
                                    for (const i in n)
                                        if (t[i]) {
                                            const o = Array.isArray(t[i]) ? [e, ...t[i]] : [e, t[i]]
                                              , a = Array.isArray(n[i]) ? [e, ...n[i]] : [e, n[i]]
                                              , c = r.d.a(o, a);
                                            if (null != c) {
                                                const [e,...t] = c;
                                                s[i] = t
                                            }
                                        }
                                    return s
                                }
                                return t
                            }
                            return n
                        }
                        const o = e => Array.isArray(e) && "object" == typeof e[3];
                        return {
                            a: {
                                m: (e, t) => [t[0], r.a.m(null != e[0] && e[0][0] === t[0][0] ? e[1] : r.a.z, t[1])],
                                z: [[], r.a.z]
                            },
                            r: (t, n) => r.r(t, 0 !== n[0].length && n[0][0] === e(t) ? n[1] : r.a.z),
                            d: r.d.sq || {
                                a: (e, t) => {
                                    if (!o(e))
                                        return o(t) ? t : null;
                                    if (!o(t))
                                        return o(e) ? e : null;
                                    const [n,,,r] = e;
                                    return [n, "u", null, s(n, r, t[3])]
                                }
                                ,
                                l: (s, i) => {
                                    let o = g(s, t)
                                      , a = e(i);
                                    if (o !== a)
                                        return null;
                                    let c = r.d.l(s, i);
                                    if (!(Array.isArray(c) && c.length > 1))
                                        return null;
                                    let[u,...l] = c
                                      , f = +(se(s) || i.getCurrentTime())
                                      , d = Math.floor(f / n)
                                      , p = {};
                                    return p[d] = {},
                                    p[d][a] = 1 === l.length ? l[0] : l,
                                    [u, "u", null, p]
                                }
                                ,
                                i: (t, n) => {
                                    if (!o(t))
                                        return [[], r.a.z];
                                    let s = e(n)
                                      , i = t[3];
                                    return [[s], Object.keys(i).map((e => {
                                        var t;
                                        return null === (t = i[e]) || void 0 === t ? void 0 : t[s]
                                    }
                                    )).filter(Ze).map((e => r.d.i([t[0]].concat(e), n))).reduce(r.a.m, r.a.z)]
                                }
                                ,
                                c: m
                            }
                        }
                    }
                }
                let Je = Xe((e => e.getCurrentSession()), ["session_id"], 18e5)
                  , We = Xe((e => e.getCurrentView()), ["view_id"], 3e5);
                const Ze = e => !!e;
                function et(e) {
                    return function(t) {
                        return {
                            d: {
                                i: (n, r) => {
                                    const s = e(r)
                                      , i = (Array.isArray(n) ? n : [])[3] || {}
                                      , o = Object.keys(i).map((e => {
                                        var t;
                                        const n = null === (t = i[e]) || void 0 === t ? void 0 : t[s];
                                        return Array.isArray(n) ? n[0] : n
                                    }
                                    )).filter(Ze).reduce(( (e, t) => e + t), 0);
                                    return t.d.i(["p", o], r)
                                }
                                ,
                                c: m
                            }
                        }
                    }
                }
                let tt = et((e => e.getCurrentSession()))
                  , nt = et((e => e.getCurrentView()));
                function rt(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    return {
                        a: {
                            m: (e, t) => e.concat(t).slice(-n),
                            z: []
                        },
                        r: (t, n) => e.r(t, n.reduce(( (t, n) => e.a.m(t, n)), e.a.z)),
                        d: e.d.ftn || {
                            a: (e, t) => {
                                const r = Object.entries({
                                    ...e[3],
                                    ...t[3]
                                }).sort(( (e, t) => {
                                    let[n] = e
                                      , [r] = t;
                                    return Number(n) - Number(r)
                                }
                                )).slice(-n);
                                return [e[0], e[1], null, Object.fromEntries(r)]
                            }
                            ,
                            l: (t, s) => {
                                const i = e.d.l(t, s)
                                  , o = g(t, ["time"], C) * r;
                                return i && [i[0], "x" + n, null, {
                                    [o]: 2 == i.length ? i[1] : i.slice(1)
                                }]
                            }
                            ,
                            i: (t, n) => t ? Object.keys(t[3] || {}).sort().reverse().map((e => Array.isArray(e) ? [t[0], ...t[3][e]] : [t[0], t[3][e]])).map((t => e.d.i(t, n))) : [],
                            c: m
                        }
                    }
                }
                function st(e, t) {
                    return {
                        d: {
                            i: (t, n) => {
                                const r = Array.isArray(t) ? t : []
                                  , s = Object.keys(r[3] || {}).reduce(( (e, t) => r[3][t] + e), 0);
                                return e.d.i(["p", s], n)
                            }
                            ,
                            c: m
                        }
                    }
                }
                const it = st
                  , ot = st;
                function at(e, t, n) {
                    return {
                        a: {
                            m: (e, t) => e.concat(t.slice(0, n - e.length)),
                            z: []
                        },
                        r: (t, n) => e.r(t, n.reduce(( (t, n) => e.a.m(t, n)), e.a.z)),
                        d: rt(e, t, n, -1).d
                    }
                }
                function ct(e, t, n) {
                    const r = n || 100
                      , s = Math.ceil(t / r)
                      , i = e => Math.floor(e / s)
                      , o = (e, n, r) => [i(e.getTime() - t), {
                        [i(n)]: r
                    }]
                      , a = (t, n) => {
                        const r = Math.max(t[0], n[0])
                          , s = Object.keys(t[1]).filter((e => e >= r)).concat(Object.keys(n[1]).filter((e => e >= r))).filter(( (e, t, n) => n.indexOf(e) === t)).reduce(( (r, s) => {
                            const i = e.a.m(t[1][s] || e.a.z, n[1][s] || e.a.z);
                            return i !== e.a.z && (r[s] = i),
                            r
                        }
                        ), {});
                        return [r, s]
                    }
                      , c = [Number.NEGATIVE_INFINITY, {}]
                      , u = e => {
                        const t = t => t.map((t => {
                            let[n,r,s] = t;
                            return o(e.t, s, n)
                        }
                        )).reduce(a, c);
                        return a(t(e.in), t(e.out))
                    }
                    ;
                    return {
                        a: {
                            m: (e, t) => {
                                const n = e.w ? u(e) : e;
                                return a(n, t)
                            }
                            ,
                            z: c
                        },
                        r: (t, n) => {
                            const r = (n.w ? u(n) : n)[1];
                            return e.r(t, Object.keys(r).reduce(( (t, n) => e.a.m(t, r[n])), e.a.z))
                        }
                        ,
                        d: e.d.tw || {
                            a: (e, t) => {
                                let[n,,...r] = e
                                  , [,,...s] = t;
                                return [n, "w", ...a(r, s)]
                            }
                            ,
                            l: (t, n) => {
                                const r = e.d.l(t, n)
                                  , s = e.d.i(r, n);
                                return r && [r[0], "w", ...o(n.getCurrentTime(), g(t, ["time"], C), s)]
                            }
                            ,
                            i: (e, n) => {
                                const r = Array.isArray(e) ? e : []
                                  , s = n.getCurrentTime()
                                  , o = i(s.getTime() - t);
                                return [r[2] || null, Object.keys(r[3] || {}).map((e => ({
                                    [e]: r[3][e]
                                }))).reduce(( (e, t) => (Object.keys(t).filter((e => parseInt(e) >= o)).forEach((n => e[n] = t[n])),
                                e)), {})]
                            }
                            ,
                            c: m
                        }
                    }
                }
                function ut(e, t, n) {
                    const r = n || 100
                      , s = Math.ceil(t / r)
                      , i = e => Math.floor(e / s);
                    return {
                        d: {
                            i: (n, r) => {
                                const s = Array.isArray(n) ? n : []
                                  , o = r.getCurrentTime()
                                  , a = i(o.getTime() - t)
                                  , c = Object.keys(s[3] || {}).reduce(( (e, t) => parseInt(t) >= a ? s[3][t] + e : e), 0);
                                return e.d.i(["p", c], r)
                            }
                            ,
                            c: m
                        }
                    }
                }
                function lt(e, t) {
                    return {
                        r: (n, r) => e(t.r(n, r)),
                        a: t.a,
                        d: t.d
                    }
                }
                let ft = (e, t) => null == e ? null == t ? null : {
                    b: t
                } : null == t ? {
                    a: e
                } : {
                    a: e,
                    b: t
                };
                function dt(e, t) {
                    return n => {
                        if (!n || null == n.a && null == n.b)
                            return null;
                        const r = null == n.a ? void 0 : e.d.c(n.a) ?? void 0
                          , s = null == n.b ? void 0 : t.d.c(n.b) ?? void 0;
                        return r === n.a && s === n.b ? n : ft(r, s)
                    }
                }
                function pt(e, t) {
                    return {
                        a: (n, r) => {
                            const s = null != n.a && null != r.a ? e.d.a(n.a, r.a) : n.a || r.a
                              , i = null != n.b && null != r.b ? t.d.a(n.b, r.b) : n.b || r.b;
                            return ft(s, i)
                        }
                        ,
                        l: (n, r) => ft(e.d.l(n, r), t.d.l(n, r)),
                        i: (n, r) => n ? [e.d.i(n.a || null, r), t.d.i(n.b || null, r)] : [e.a.z, t.a.z],
                        c: dt(e, t)
                    }
                }
                function gt(e, t) {
                    return {
                        r: (n, r) => e.r(n, r[0]) && t.r(n, r[1]),
                        a: {
                            z: [e.a.z, t.a.z],
                            m: (n, r) => [e.a.m(n[0], r[0]), t.a.m(n[1], r[1])]
                        },
                        d: pt(e, t)
                    }
                }
                function ht(e, t) {
                    return {
                        r: (n, r) => e.r(n, r[0]) || t.r(n, r[1]),
                        a: {
                            z: [e.a.z, t.a.z],
                            m: (n, r) => [e.a.m(n[0], r[0]), t.a.m(n[1], r[1])]
                        },
                        d: pt(e, t)
                    }
                }
                function _t(e, t, n, r) {
                    let s = e
                      , i = t.map(n)
                      , o = (e, n) => r(t[e])(n);
                    for (let e = t.length - 1; e > 0 && s; e--)
                        s.b && (i[e] = o(e, s.b)),
                        s.a && 1 === e && (i[0] = o(0, s.a)),
                        s = s.a;
                    return i
                }
                const mt = e => function(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.length - 1;
                    if (!t || null == t.a && null == t.b)
                        return null;
                    const r = e[n];
                    if (!r)
                        return null;
                    if (1 === n)
                        return dt(e[0], r)(t);
                    const s = null == t.a ? void 0 : mt(e)(t.a, n - 1) ?? void 0
                      , i = null == t.b ? void 0 : r.d.c(t.b) ?? void 0;
                    return s === t.a && i === t.b ? t : ft(s, i)
                }
                ;
                let bt = e => t => {
                    function n(e) {
                        let t = e[0];
                        for (let n = 1; n < e.length; n++)
                            t = [t, e[n]];
                        return t
                    }
                    function r(e) {
                        let n = e
                          , r = Array(t.length);
                        for (let e = t.length - 1; e > 0; e--)
                            r[e] = n[1],
                            n = n[0];
                        return r[0] = n,
                        r
                    }
                    let s = (e, r) => n(_t(e, t, (e => e.a.z), (e => t => e.d.i(t, r))));
                    function i(e) {
                        let t = e[0];
                        for (let n = 1; n < e.length; n++)
                            t = ft(t, e[n]);
                        return t
                    }
                    function o(e, n) {
                        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t.length - 1;
                        if (0 == r)
                            throw new Error("subquery index out of bounds.");
                        const s = (1 == r ? f(t[0].d.a)(null == e ? void 0 : e.a, null == n ? void 0 : n.a) : o(null == e ? void 0 : e.a, null == n ? void 0 : n.a, r - 1)) || void 0
                          , i = f(t[r].d.a)(null == e ? void 0 : e.b, null == n ? void 0 : n.b) || void 0;
                        return ft(s, i)
                    }
                    return {
                        r: (n, s) => {
                            const i = r(s);
                            return e(t.map(( (e, t) => () => e.r(n, i[t]))))({})
                        }
                        ,
                        a: {
                            z: n(t.map((e => e.a.z))),
                            m: (e, s) => {
                                const i = r(e)
                                  , o = r(s);
                                function a(e, t, n) {
                                    return null === t ? n : null === n ? t : e.a.m(t, n)
                                }
                                return n(t.map(( (e, t) => a(e, i[t], o[t]))))
                            }
                        },
                        d: {
                            a: (e, n) => 1 == t.length ? f(t[0].d.a)(e, n) : o(e, n),
                            l: (e, n) => i(t.map((t => t.d.l(e, n)))),
                            i: (e, t) => s(e, t),
                            c: mt(t)
                        }
                    }
                }
                  , vt = bt(w)
                  , wt = bt(y);
                function yt(e) {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) {
                        let r = e[n];
                        "number" == typeof r ? (t += r,
                        n += 1) : t += 1
                    }
                    let n = Array(t)
                      , r = 0;
                    for (let t = 0; t < e.length; t++) {
                        let s = e[t];
                        "number" == typeof s ? (n.fill(e[t + 1], r, r + s),
                        t += 1,
                        r += s) : (n[r] = s,
                        r++)
                    }
                    return n
                }
                let kt = e => t => ({
                    d: {
                        i: (n, r) => e(_t(n, t, (e => e.d.i(null, r)), (e => t => e.d.i(t, r))).map((e => t => e)))({}),
                        c: mt(t)
                    }
                })
                  , St = kt(y)
                  , It = kt(w);
                function Gt(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m;
                    return {
                        r: (r, s) => n(e.r(r, s[0]) + t.r(r, s[1])),
                        a: {
                            z: [e.a.z, t.a.z],
                            m: (n, r) => [e.a.m(n[0], r[0]), t.a.m(n[1], r[1])]
                        },
                        d: pt(e, t)
                    }
                }
                function zt(e, t, r, s) {
                    const i = "p"
                      , o = `x${s}`
                      , a = ""
                      , c = e => e ? 2 === e.length ? [i, o, a, e[1]] : e : null
                      , u = e => g(e, ["session_id"])
                      , l = r => {
                        const s = u(r);
                        return s && g(r, ["name"]) === n(e) && t(r) ? [i, o, a, {
                            [s]: 1
                        }] : null
                    }
                      , d = (e, t) => {
                        const n = c(e)
                          , r = c(t);
                        return n ? r ? [i, o, a, {
                            ...n[3],
                            ...r[3]
                        }] : n : r
                    }
                    ;
                    return {
                        a: {
                            m: d,
                            z: null
                        },
                        r: (e, t) => {
                            const n = t && t[3] && "object" == typeof t[3] ? Object.keys(t[3]).length : 0;
                            return r(n)
                        }
                        ,
                        d: {
                            a: f(d),
                            l: (e, t) => l(e),
                            i: (e, t) => c(e),
                            c: m
                        }
                    }
                }
                let qt = e => {
                    let t = [];
                    for (let n = 0; n < e.length; ++n) {
                        let r = e.charCodeAt(n);
                        if (r >= 55296 && r <= 56319) {
                            let r = e.charCodeAt(n + 1);
                            if (r >= 56320 && r <= 57343) {
                                t.push(e.slice(n, n + 2)),
                                ++n;
                                continue
                            }
                        }
                        t.push(e.charAt(n))
                    }
                    return t
                }
                ;
                function Ut(e, t) {
                    let n = i(e);
                    if (!t || !n)
                        return !1;
                    if (!n.length)
                        return !0;
                    let r = 0
                      , s = !1
                      , o = qt(t.toLowerCase());
                    for (let e = 0; e < o.length; e++) {
                        let t = o[e];
                        for (; r > 0 && !n[r][t]; )
                            r = n[r].su ? n[r].su : 0;
                        if (n[r][t] && (r = n[r][t],
                        s = !!n[r].te,
                        s))
                            break
                    }
                    return s
                }
                let Et = (t, n) => {
                    let r, s, i = e.hash(t);
                    if (0 === n.length)
                        return !1;
                    if (n[0] === i)
                        return !0;
                    let o = 0
                      , a = n.length
                      , c = !1;
                    for (; (c = (r = n[s = o + (a - o >> 1)]) !== i) && (r < i ? o = s : a = s,
                    !(o >= a - 1)); )
                        ;
                    return !c
                }
                  , xt = (e, t) => n => Et(g(n, e), t)
                  , Pt = (e, t) => n => Et(h(n, e), t)
                  , Ct = (e, t) => k(xt(e, t))
                  , Ot = (e, t) => k(Pt(e, t));
                function Dt(e) {
                    return t => o(e)(t)
                }
                function At(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    return a(e)(...n)
                }
                function Tt(e) {
                    const t = e.split("\t");
                    if (0 === t.length)
                        return [];
                    var n = t[0]
                      , r = new Array(Math.ceil(t.length / 2));
                    r[0] = t[0];
                    for (var s = 1; s < t.length / 2; s += 1) {
                        const e = t[2 * s - 1]
                          , i = t[2 * s];
                        if ("" === e)
                            n = i;
                        else {
                            const t = parseInt(e);
                            n = n.slice(0, t) + i
                        }
                        r[s] = n
                    }
                    return r
                }
                return {
                    q: d,
                    i_q: p,
                    a: y,
                    acq: gt,
                    acqs: wt,
                    acs: Ut,
                    acs_: L,
                    af_i: qe,
                    af_l: Ue,
                    af_m: Ie,
                    af_n: ke,
                    af_p: ye,
                    af_s: we,
                    af_u: ze,
                    af_x: Se,
                    as: O,
                    c: xe,
                    c_: Pe,
                    cl_: Ce,
                    cx: Oe,
                    cw: Ae,
                    cb: Te,
                    e: S,
                    e_: A,
                    fm: lt,
                    frontDecode: Tt,
                    ftn: at,
                    g: G,
                    g_: j,
                    ge: z,
                    ge_: M,
                    bse: (t, n) => r => {
                        let s = g(r, t);
                        return e.hash(s) === n
                    }
                    ,
                    bsne: (t, n) => r => {
                        let s = g(r, t);
                        return e.hash(s) !== n
                    }
                    ,
                    bsc: xt,
                    bsnc: Ct,
                    bsc_: Pt,
                    bsnc_: Ot,
                    i_: m,
                    ifp: He,
                    isp: $e,
                    itp: Be,
                    i_cw: je,
                    i_acqs: St,
                    i_ocqs: It,
                    i_tw: ut,
                    i_ltn: it,
                    i_ftn: ot,
                    i_sq: tt,
                    i_vq: nt,
                    k: g,
                    l: q,
                    l_: R,
                    le: U,
                    le_: F,
                    lm: Ve,
                    ltn: rt,
                    mnw: Re,
                    mxw: Me,
                    n0: k(m),
                    n: I,
                    nt: k,
                    n_: T,
                    o: w,
                    ocq: ht,
                    ocqs: vt,
                    oe: _,
                    os: D,
                    pacs: Z,
                    pb: J,
                    pc: ne,
                    pc_: re,
                    pe: B,
                    pg: H,
                    pge: K,
                    pl: V,
                    ple: X,
                    pn: $,
                    ps: W,
                    r: At,
                    ref: Dt,
                    rle: yt,
                    s: Ee,
                    s_: Y,
                    scq: Gt,
                    sq: Je,
                    dscq: zt,
                    sw: Fe,
                    t: b,
                    tb: de,
                    te: oe,
                    te_: pe,
                    tg: ce,
                    tg_: he,
                    tge: ue,
                    tge_: _e,
                    ti: C,
                    tl: le,
                    tl_: me,
                    tle: fe,
                    tle_: be,
                    tn: ae,
                    tn_: ge,
                    tw: ct,
                    vq: We,
                    w: x,
                    x: P,
                    y: ee,
                    y_: N,
                    z: te,
                    z_: Q
                }
            }({
                lookups: n,
                hash: e.hash
            });
            return t(r),
            {
                env: r,
                locallyLiftedQueries: e.runtimeInput.queries(r) || {},
                cloudLiftedQueries: "function" == typeof e.runtimeInput.interpretOnlyQueries ? e.runtimeInput.interpretOnlyQueries(r) : {},
                queriesByEvent: e.runtimeInput.eventSegments(r) || {},
                createCloudLiftQueries: e => (null === eval || void 0 === eval ? void 0 : (0,
                eval)(`"use strict";${e}`))(r)
            }
        }
        ;
        const re = e => {
            const t = se(e.javaScriptInput)
              , {env: n, ...r} = ne({
                hash: e.hash,
                runtimeInput: t
            });
            return r
        }
          , se = e => {
            if (e && "object" == typeof e)
                return e;
            throw new Error("Invalid runtime input specified.")
        }
        ;
        var ie, oe, ae, ce, ue, le;
        const fe = (null === (ie = "undefined" != typeof globalThis ? globalThis : void 0) || void 0 === ie ? void 0 : ie.crypto) || (null === (oe = "undefined" != typeof global ? global : void 0) || void 0 === oe ? void 0 : oe.crypto) || (null === (ae = "undefined" != typeof window ? window : void 0) || void 0 === ae ? void 0 : ae.crypto) || (null === (ce = "undefined" != typeof self ? self : void 0) || void 0 === ce ? void 0 : ce.crypto) || (null === (ue = "undefined" != typeof frames ? frames : void 0) || void 0 === ue || null === (le = ue[0]) || void 0 === le ? void 0 : le.crypto);
        let de;
        de = fe ? e => {
            const t = [];
            for (let n = 0; n < e; n += 4)
                t.push(fe.getRandomValues(new Uint32Array(1))[0]);
            return new ge(t,e)
        }
        : e => {
            const t = []
              , n = e => {
                let t = e
                  , n = 987654321;
                const r = 4294967295;
                return () => {
                    n = 36969 * (65535 & n) + (n >> 16) & r,
                    t = 18e3 * (65535 & t) + (t >> 16) & r;
                    let e = (n << 16) + t & r;
                    return e /= 4294967296,
                    e += .5,
                    e * (Math.random() > .5 ? 1 : -1)
                }
            }
            ;
            for (let r, s = 0; s < e; s += 4) {
                const e = n(4294967296 * (r || Math.random()));
                r = 987654071 * e(),
                t.push(4294967296 * e() | 0)
            }
            return new ge(t,e)
        }
        ;
        class pe {
            static create() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return new this(...t)
            }
            mixIn(e) {
                return Object.assign(this, e)
            }
            clone() {
                const e = new this.constructor;
                return Object.assign(e, this),
                e
            }
        }
        class ge extends pe {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4 * e.length;
                super();
                let n = e;
                if (n instanceof ArrayBuffer && (n = new Uint8Array(n)),
                (n instanceof Int8Array || n instanceof Uint8ClampedArray || n instanceof Int16Array || n instanceof Uint16Array || n instanceof Int32Array || n instanceof Uint32Array || n instanceof Float32Array || n instanceof Float64Array) && (n = new Uint8Array(n.buffer,n.byteOffset,n.byteLength)),
                n instanceof Uint8Array) {
                    const e = n.byteLength
                      , t = [];
                    for (let r = 0; r < e; r += 1)
                        t[r >>> 2] |= n[r] << 24 - r % 4 * 8;
                    this.words = t,
                    this.sigBytes = e
                } else
                    this.words = e,
                    this.sigBytes = t
            }
            static random = de;
            toString() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : he).stringify(this)
            }
            concat(e) {
                const t = this.words
                  , n = e.words
                  , r = this.sigBytes
                  , s = e.sigBytes;
                if (this.clamp(),
                r % 4)
                    for (let e = 0; e < s; e += 1) {
                        const s = n[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                        t[r + e >>> 2] |= s << 24 - (r + e) % 4 * 8
                    }
                else
                    for (let e = 0; e < s; e += 4)
                        t[r + e >>> 2] = n[e >>> 2];
                return this.sigBytes += s,
                this
            }
            clamp() {
                const {words: e, sigBytes: t} = this;
                e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8,
                e.length = Math.ceil(t / 4)
            }
            clone() {
                const e = super.clone.call(this);
                return e.words = this.words.slice(0),
                e
            }
        }
        const he = {
            stringify(e) {
                const {words: t, sigBytes: n} = e
                  , r = [];
                for (let e = 0; e < n; e += 1) {
                    const n = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    r.push((n >>> 4).toString(16)),
                    r.push((15 & n).toString(16))
                }
                return r.join("")
            },
            parse(e) {
                const t = e.length
                  , n = [];
                for (let r = 0; r < t; r += 2)
                    n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                return new ge(n,t / 2)
            }
        }
          , _e = {
            stringify(e) {
                const {words: t, sigBytes: n} = e
                  , r = [];
                for (let e = 0; e < n; e += 1) {
                    const n = t[e >>> 2] >>> 24 - e % 4 * 8 & 255;
                    r.push(String.fromCharCode(n))
                }
                return r.join("")
            },
            parse(e) {
                const t = e.length
                  , n = [];
                for (let r = 0; r < t; r += 1)
                    n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                return new ge(n,t)
            }
        }
          , me = {
            stringify(e) {
                try {
                    return decodeURIComponent(escape(_e.stringify(e)))
                } catch (e) {
                    throw new Error("Malformed UTF-8 data")
                }
            },
            parse: e => _e.parse(unescape(encodeURIComponent(e)))
        };
        class be extends pe {
            constructor() {
                super(),
                this._minBufferSize = 0
            }
            reset() {
                this._data = new ge,
                this._nDataBytes = 0
            }
            _append(e) {
                let t = e;
                "string" == typeof t && (t = me.parse(t)),
                this._data.concat(t),
                this._nDataBytes += t.sigBytes
            }
            _process(e) {
                let t;
                const {_data: n, blockSize: r} = this
                  , s = n.words
                  , i = n.sigBytes;
                let o = i / (4 * r);
                o = e ? Math.ceil(o) : Math.max((0 | o) - this._minBufferSize, 0);
                const a = o * r
                  , c = Math.min(4 * a, i);
                if (a) {
                    for (let e = 0; e < a; e += r)
                        this._doProcessBlock(s, e);
                    t = s.splice(0, a),
                    n.sigBytes -= c
                }
                return new ge(t,c)
            }
            clone() {
                const e = super.clone.call(this);
                return e._data = this._data.clone(),
                e
            }
        }
        class ve extends be {
            constructor(e) {
                super(),
                this.blockSize = 16,
                this.cfg = Object.assign(new pe, e),
                this.reset()
            }
            static _createHelper(e) {
                return (t, n) => new e(n).finalize(t)
            }
            static _createHmacHelper(e) {
                return (t, n) => new we(e,n).finalize(t)
            }
            reset() {
                super.reset.call(this),
                this._doReset()
            }
            update(e) {
                return this._append(e),
                this._process(),
                this
            }
            finalize(e) {
                e && this._append(e);
                return this._doFinalize()
            }
        }
        class we extends pe {
            constructor(e, t) {
                super();
                const n = new e;
                this._hasher = n;
                let r = t;
                "string" == typeof r && (r = me.parse(r));
                const s = n.blockSize
                  , i = 4 * s;
                r.sigBytes > i && (r = n.finalize(t)),
                r.clamp();
                const o = r.clone();
                this._oKey = o;
                const a = r.clone();
                this._iKey = a;
                const c = o.words
                  , u = a.words;
                for (let e = 0; e < s; e += 1)
                    c[e] ^= 1549556828,
                    u[e] ^= 909522486;
                o.sigBytes = i,
                a.sigBytes = i,
                this.reset()
            }
            reset() {
                const e = this._hasher;
                e.reset(),
                e.update(this._iKey)
            }
            update(e) {
                return this._hasher.update(e),
                this
            }
            finalize(e) {
                const t = this._hasher
                  , n = t.finalize(e);
                t.reset();
                return t.finalize(this._oKey.clone().concat(n))
            }
        }
        const ye = [];
        class ke extends ve {
            _doReset() {
                this._hash = new ge([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            }
            _doProcessBlock(e, t) {
                const n = this._hash.words;
                let r = n[0]
                  , s = n[1]
                  , i = n[2]
                  , o = n[3]
                  , a = n[4];
                for (let n = 0; n < 80; n += 1) {
                    if (n < 16)
                        ye[n] = 0 | e[t + n];
                    else {
                        const e = ye[n - 3] ^ ye[n - 8] ^ ye[n - 14] ^ ye[n - 16];
                        ye[n] = e << 1 | e >>> 31
                    }
                    let c = (r << 5 | r >>> 27) + a + ye[n];
                    c += n < 20 ? 1518500249 + (s & i | ~s & o) : n < 40 ? 1859775393 + (s ^ i ^ o) : n < 60 ? (s & i | s & o | i & o) - 1894007588 : (s ^ i ^ o) - 899497514,
                    a = o,
                    o = i,
                    i = s << 30 | s >>> 2,
                    s = r,
                    r = c
                }
                n[0] = n[0] + r | 0,
                n[1] = n[1] + s | 0,
                n[2] = n[2] + i | 0,
                n[3] = n[3] + o | 0,
                n[4] = n[4] + a | 0
            }
            _doFinalize() {
                const e = this._data
                  , t = e.words
                  , n = 8 * this._nDataBytes
                  , r = 8 * e.sigBytes;
                return t[r >>> 5] |= 128 << 24 - r % 32,
                t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296),
                t[15 + (r + 64 >>> 9 << 4)] = n,
                e.sigBytes = 4 * t.length,
                this._process(),
                this._hash
            }
            clone() {
                const e = super.clone.call(this);
                return e._hash = this._hash.clone(),
                e
            }
        }
        const Se = ve._createHelper(ke)
          , Ie = (ve._createHmacHelper(ke),
        {
            stringify(e) {
                const {words: t, sigBytes: n} = e
                  , r = this._map;
                e.clamp();
                const s = [];
                for (let e = 0; e < n; e += 3) {
                    const i = (t[e >>> 2] >>> 24 - e % 4 * 8 & 255) << 16 | (t[e + 1 >>> 2] >>> 24 - (e + 1) % 4 * 8 & 255) << 8 | t[e + 2 >>> 2] >>> 24 - (e + 2) % 4 * 8 & 255;
                    for (let t = 0; t < 4 && e + .75 * t < n; t += 1)
                        s.push(r.charAt(i >>> 6 * (3 - t) & 63))
                }
                const i = r.charAt(64);
                if (i)
                    for (; s.length % 4; )
                        s.push(i);
                return s.join("")
            },
            parse(e) {
                let t = e.length;
                const n = this._map;
                let r = this._reverseMap;
                if (!r) {
                    this._reverseMap = [],
                    r = this._reverseMap;
                    for (let e = 0; e < n.length; e += 1)
                        r[n.charCodeAt(e)] = e
                }
                const s = n.charAt(64);
                if (s) {
                    const n = e.indexOf(s);
                    -1 !== n && (t = n)
                }
                return ( (e, t, n) => {
                    const r = [];
                    let s = 0;
                    for (let i = 0; i < t; i += 1)
                        if (i % 4) {
                            const t = n[e.charCodeAt(i - 1)] << i % 4 * 2 | n[e.charCodeAt(i)] >>> 6 - i % 4 * 2;
                            r[s >>> 2] |= t << 24 - s % 4 * 8,
                            s += 1
                        }
                    return ge.create(r, s)
                }
                )(e, t, r)
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        });
        const Ge = function(e) {
            let t = i.YP;
            const n = i.fS(( () => {
                const n = e();
                return t = i.G(n),
                n
            }
            ));
            return () => n(t)
        }(( () => ({
            metadata: {
                39204: "0c8b70cdb7",
                41376: "4bd77cc3a7",
                41414: "d2f664deef",
                56344: "917d5f981b",
                56634: "608d95acf4",
                56691: "44cde31524",
                58133: "612652e2be",
                70302: "b5306aafc5",
                73331: "a0b1e4511f",
                73342: "b976303717",
                74314: "5399a8daa1",
                75548: "d7dba2dabf",
                77811: "b76e75e1c0",
                81843: "14fd905353",
                88504: "7ffc9f0336",
                88505: "bafbd2a52b",
                88624: "e7b8b1b22e",
                88766: "9924f53742",
                89492: "1d7afecc14",
                89493: "47ab3e71ab",
                89494: "dec2b24bd8",
                89495: "b277e0e4be",
                89496: "a2afadd8b5",
                89497: "f2f5b7a9ee",
                89747: "ad1877712f",
                89780: "3fbe77a018",
                89781: "00cbefc3f4",
                89782: "62b5c3a54c",
                89783: "ca819548b2",
                89784: "b7b2df1aab",
                89786: "8ddf82084c",
                90032: "2fcf32a703",
                90033: "eb060da10b",
                90034: "e8caedcdd8",
                90449: "ab84fb4ca6",
                91149: "2cc579a35f",
                91654: "f652bf0988",
                92886: "621489374c",
                92946: "55bc4f648b",
                92947: "f45f0546bb",
                92956: "7c5797abac",
                92957: "6beeb11182",
                93845: "51ea81c1ed",
                93846: "2408111945",
                93847: "bc206503f5",
                94752: "f5d7aee65e",
                94903: "b6dc6b56a2",
                94908: "022c534e9d",
                95077: "6022bedc62",
                95078: "c3352031cf",
                95079: "d22dbd9dfc",
                95080: "3963c4f90f",
                95081: "504c6efc80",
                95201: "b72366f7a0",
                96020: "6b2c325eaf",
                98239: "5ffc72a768",
                100580: "37966acb43",
                100803: "7930ecd078",
                100882: "836a18e528",
                100886: "204dbba2d2",
                104004: "30907d6f33",
                105314: "fd862ca0f2",
                105315: "a7c48413d3",
                105316: "68c7ba78cf",
                105318: "7ed6c01d50",
                105320: "1ae90e5bdd",
                105321: "3a793e11a7",
                105526: "09af6fb4a0",
                105717: "6314b9bf3e",
                105718: "4677d0eb1b",
                105719: "85b1a80152",
                105851: "e58e154f7c",
                106050: "b556f00eb6",
                106248: "f9f5b8c466",
                106249: "a618d45e2a",
                106370: "260a6674c9",
                106906: "868ef83416",
                107324: "050974bd6e",
                107326: "cd899aa4b1",
                109402: "76a9090faa",
                109408: "b526a9df8b",
                109585: "19e9efb9a1",
                109586: "3c68c4e48a",
                113994: "0439f28c8a",
                114028: "bccc3df53d",
                114096: "655d96843b",
                114097: "76f91cf60f",
                114192: "796726b92f",
                114701: "6519efae75",
                114702: "47703aa2ae",
                114973: "3f8013b701",
                115754: "8a1871a342",
                115801: "f980cc9b22",
                116152: "c72ffc765b",
                116153: "46773104ad",
                116930: "c2ce12ea90",
                117410: "b1416ee46d",
                117411: "79b38fa35e",
                120510: "f7c401379d",
                120744: "7366a7ce0c",
                120787: "65efbf4f32",
                122439: "45535ad59b",
                122601: "1adb06e001",
                122872: "a04a28cce3",
                123650: "cb9759d224",
                124030: "3a26880714",
                124278: "7322d89ac8",
                124457: "8c75cc6e82",
                124656: "c21ec407fe",
                125148: "326f4fe3aa",
                125544: "3e48ba3f3e",
                127898: "97077fc000",
                131874: "f35dd04a37",
                132239: "e0da94f266",
                132347: "2ab2c51e9a",
                132352: "4c7670b035",
                133758: "eff39c9091",
                133789: "9907cbc853",
                133840: "3e4c334057",
                134038: "bbda45aaaa",
                134592: "0324989dc7",
                136107: "7b1f4e112e",
                137537: "073cd0438a",
                139769: "9a4953c686",
                139919: "d86ff134de",
                139922: "4fa7fb24dd",
                139926: "7ae7993409",
                139930: "56ab7fed2c",
                139943: "0c44f4a259",
                139946: "b39a4e4bbe",
                139950: "1a66689bfe",
                139957: "2f506fce5b",
                140685: "431a01ca9d",
                143330: "f6e885e9bf",
                144127: "dc16c1baa1",
                144128: "3320013a0e",
                144132: "bac1ffa3a9",
                144149: "f6802aba30",
                146705: "0029f4c0c5",
                146734: "b206d7800f",
                146736: "292057a4a6",
                149125: "22737ee52b",
                153381: "a080d58deb",
                157232: "78d9caa6c7",
                157446: "54bb4acf9c",
                157502: "c6e0e10354",
                158629: "24ec19f3c1",
                162087: "5f84d87b99",
                162553: "39b0c1032c",
                164201: "e681b02e5d",
                166283: "33d64e18e7",
                167455: "37cac2e1d3",
                167456: "2027db35d8",
                167457: "ff23f6a472",
                167458: "569b0c5262",
                167459: "8f4a795789",
                167460: "5c2467d5d0",
                167461: "ac9f9ef83d",
                167462: "dd055fade8",
                167463: "8042549f07",
                167464: "4679f5ccd1",
                167466: "2f0c86351e",
                167467: "1f33963ccc",
                167468: "f0cda18071",
                167471: "66fae3bad1",
                167472: "c2f5642b64",
                167473: "fceae0e2bf",
                167474: "73b03dbb17",
                167475: "42ee0c65a1",
                167476: "84b4769a46",
                167477: "901f0150e7",
                168072: "108b4b08d9",
                168172: "ec50dec834",
                171207: "1b39caaf9b",
                172214: "15b838e3c1",
                172215: "63a3261c38",
                172216: "199c3457b1",
                172218: "f7dc299a4c",
                172219: "653b85f7da",
                172220: "1ff50eaf28",
                172221: "e1527b3f4e",
                172225: "62a1197b29",
                172275: "f2c98f27b8",
                172884: "707b06b800",
                172948: "4fdc2db5ff",
                173664: "d266308f55",
                173876: "51ebe5bc18",
                173877: "92b06116db",
                173878: "2d2acb9e64",
                173879: "a22c340191",
                173880: "8c23f51c28",
                173881: "179243fb79",
                173883: "f2eb3fdbd7",
                173884: "4b9b66ea7f",
                173888: "c9a154f19d",
                173889: "da6c0b3df3",
                173890: "3356df03c6",
                173891: "fb58ac2d0d",
                173895: "ec91bf1151",
                173896: "7b2619c887",
                173897: "a18a6bc286",
                173898: "e5c208af9e",
                173900: "f4f845569c",
                173901: "0a98d2e8a8",
                173902: "bf9d58c2cc",
                173906: "2a0244ccbf",
                173907: "0128fb97cc",
                173908: "056c7d10d4",
                173909: "47dc5fdc40",
                173910: "bbe7011c14",
                173911: "02ec350cc9",
                173913: "1f0633a193",
                173916: "f1d15fb3dc",
                173917: "f364b298b7",
                173918: "9e000f34b6",
                173919: "aece6ff07b",
                173920: "250555097f",
                173922: "4985ad62f6",
                173924: "303e5193f2",
                173925: "304ddf4ce9",
                173926: "6b3dea9a6f",
                173927: "606f405c2b",
                173929: "94f711fd47",
                173931: "ba10ef9dac",
                173932: "68c4d6e862",
                173936: "8e9b2b6a12",
                174344: "76e9d5125c",
                174345: "4840114fc5",
                174346: "22fe75e789",
                175038: "f99966c4db",
                175448: "a70bdaf56a",
                175451: "07af591b0e",
                175454: "3d16f4fd7c",
                175456: "e5e751f24d",
                175458: "06ee2c7e96",
                175459: "4b6dbf3ad9",
                175461: "d10a514c45",
                175555: "3b4b996e7c",
                175557: "b189051be3",
                175798: "6b41c2fbc8",
                175800: "09d9c8c86d",
                175801: "8862b5a287",
                175804: "5608eb1c5d",
                175806: "7f92f890a4",
                175810: "6b187e41ad",
                175812: "bce8c91c38",
                175814: "b09859d513",
                175818: "589955f34d",
                175820: "dec36f7661",
                175822: "ced4c9e1eb",
                175824: "70d0738e4c",
                175826: "7c7daba99e",
                175830: "017644d01d",
                175832: "1edbb85d18",
                175835: "b0f92a30be",
                175837: "eeded9bca7",
                175840: "16583b5baf",
                175842: "9cbb245278",
                175844: "883786eb8e",
                176884: "1fb982c9d7",
                176887: "74b56053bb",
                176888: "a4e0de2e69",
                176889: "4c388b54eb",
                176890: "21986b2243",
                176891: "7888b5dbf6",
                176892: "c00234f2fb",
                176893: "113a76ea49",
                176894: "fecc406969",
                176895: "b9fd4673a9",
                176897: "a49be9584b",
                176898: "75f9fd2dc9",
                176899: "d3446842c6",
                176902: "abb26f8a30",
                176903: "8d165c25fc",
                176904: "ded3d6893b",
                176905: "db849031eb",
                176908: "df52b8ed30",
                176910: "81c0325678",
                176911: "c58b8e55cb",
                176913: "eeb8de91d5",
                176914: "32e99573f1",
                176916: "be3c281611",
                176918: "2020da1a3b",
                176919: "66a878e3d9",
                176920: "419c850c8e",
                176921: "fb063d7e2f",
                176923: "338c1f5896",
                176924: "1259fb7f7c",
                176953: "7f2022501a",
                176955: "833e4ede63",
                176957: "a58aac4797",
                176967: "8676872361",
                176968: "294a036ca5",
                177226: "e8e7ddb6f4",
                177658: "fb5d5efc11",
                178814: "0f63b34664",
                179682: "ba6fec6314",
                179771: "e53b33568f",
                180784: "527191f0c0",
                180785: "3d5f44907c",
                180951: "fa98e2bbcb",
                180952: "ad86061065",
                180953: "efc9abb28e",
                180956: "11092331e1",
                180957: "47c87f1108",
                180959: "38ae09af88",
                181008: "9b07e47b33",
                184006: "389ab93df5",
                184577: "7422eb8805",
                184706: "fa1afe4aa1",
                185040: "51efa42815",
                185107: "96a2ac8553",
                185405: "1c0c08c331",
                186327: "9cd4cf2596",
                186328: "9cd4cf2596",
                186897: "1d99c00bb6",
                187063: "9be48a81e8",
                187218: "2080ed6722",
                187251: "21f2378300",
                188096: "8acea7dc2d",
                188160: "a4dcf457fd",
                188161: "f4eb9bdfc6",
                188217: "8120232561",
                188255: "500defc835",
                188393: "f81258f163",
                188919: "72996875a1",
                188920: "119d56badb",
                188921: "99cece4d3a",
                188922: "89ae3e2ee4",
                189307: "b03a0bf64c",
                189330: "55b5711ac4",
                189338: "24c7585ca2",
                189339: "4a5dfdd7fe",
                189340: "a8739db261",
                189341: "45331bd742",
                189342: "3ae7a8ceba",
                189949: "284dd4a862",
                192091: "bc09eec15c",
                192184: "6f1be58436",
                193201: "16577f5f07",
                194111: "3753c4fd8e",
                194112: "da844a967c",
                194113: "d27233bfcc",
                194541: "f407355e20",
                194542: "203efdf419",
                194543: "5fadf10810",
                195124: "dc987d01e7",
                195230: "c8ad5892d4",
                196328: "87888c701c",
                196454: "a346b7e4fa",
                196455: "d96340f20a",
                196843: "5ad9d0f25b",
                196939: "6a80406721",
                197769: "c109ddc2a2",
                203327: "2ef9edecc3",
                205e3: "19837b16a2",
                206653: "5fb2867f18",
                206662: "3a2d2c6378",
                207465: "b3fec59d81",
                207689: "b4847ffc0c",
                208648: "b4f1ddc29e",
                209017: "3cecef70c9",
                210889: "930fe3d1d0",
                211065: "95398f5d08",
                211857: "2f3bd285ea",
                212119: "093ec8f2ba",
                213030: "1e5f4ae3bd",
                213800: "66bb9ad125",
                213933: "3f233ddba9",
                214072: "9920c7580d",
                214073: "a2a1b5b306",
                214075: "0610f1e907",
                214076: "564e1d23f1",
                214227: "3a45367a84",
                214317: "2f9b3246f0",
                214856: "dbfe700154",
                214857: "2919833ac1",
                214924: "19b93513a7",
                214925: "ab8fc32825",
                214926: "bdaadfbac7",
                215152: "50a08bd124",
                216183: "f12f772129",
                216215: "316c00aa18",
                216262: "aad5fa1b18",
                217787: "ab1f49fd44",
                217822: "75d3673384",
                218446: "bd5030e11d",
                219231: "5b7b38ecd3",
                219249: "96d904b52e",
                219642: "4928278fbe",
                219739: "5692c47595",
                220222: "0d1ab649b2",
                221e3: "5ea82f3fad",
                221912: "7446b7c734",
                222250: "ac7d02c828",
                223395: "a94a37d45a",
                223396: "3493baa4df",
                223397: "ce5250c673",
                223398: "2dbe25cfdd",
                223399: "cb4d90cada",
                223400: "60d35e1bb4",
                223401: "49a999316e",
                223402: "c165ea766b",
                223404: "1cde8537a9",
                223405: "c0af04d39f",
                223406: "87bd4cbae1",
                225088: "668329efd9",
                226837: "0cf0227c39",
                226928: "74ac4ebe19",
                227134: "df75eef171",
                229655: "b877cde84b",
                230962: "977414901d",
                231667: "bada180fc8",
                231785: "276f777e53",
                232022: "6b4a477d10",
                1e7: "14dcdbd1b8",
                10000001: "85e2135ebf",
                10000002: "6f0530b847",
                10000003: "9aebeaabdc",
                10000004: "ec30be261c",
                10000005: "42e269ebcb",
                10000006: "fe46ec1a7c",
                10000007: "c7c5b41643",
                10000008: "e017e3296e",
                10000010: "c8a4da1342",
                10000011: "d0033013c8",
                10000012: "c920a1872b",
                10000013: "5cb1560e95",
                10000014: "945d12984c",
                10000015: "3f0af1c616",
                10000016: "e9cff35b9e",
                10000017: "809a140d15",
                10000018: "a3f294e223",
                10000019: "26c5369243",
                10000020: "2895ae0549",
                10000021: "7e463b1f7b",
                10000022: "3ac8066b24",
                10000023: "05688314fe",
                10000024: "2b9b203f0f",
                10000025: "d8c2189403",
                10000026: "abaa9c1f9a",
                10000035: "a41083a929",
                10000036: "8e74dd4bab",
                10000037: "cafae725da",
                10000038: "a121dfa9da",
                10000039: "ff48cf981d",
                10000040: "254b287491",
                10000041: "95cf182700",
                10000042: "7c449193e6",
                10000043: "7cf4199d2c",
                10000044: "7d70b943e5",
                10000045: "d6ebb8fae4",
                10000046: "6ec2e4a903",
                10000047: "6b9d9c6b43",
                10000048: "c697613553",
                10000049: "154b668a0c",
                10000050: "06c11d3a67",
                10000051: "79b306f4fb",
                10000052: "4ddf4d4f00",
                10000053: "d4f3f248fb",
                10000054: "5f1da0f4d3",
                10000055: "a258c98d13",
                10000056: "46ae6a0b78",
                10000057: "484950e70c",
                10000058: "b0f2c06862",
                10000059: "81c7d9a013",
                10000060: "b2774f9b84",
                10000061: "8d357982ec",
                10000062: "f17475be77",
                10000063: "2e17bf9dba",
                10000064: "5ab5b328ac",
                10000065: "746301201f",
                10000066: "74a3fa3235",
                10000067: "445aec4c58",
                10000068: "166c8e0df7",
                10000069: "3c1d1ce2d1",
                10000070: "41b1a04aca",
                10000071: "8f48e4fe18",
                10000072: "ce3f903a4a",
                10000073: "facdeec66b",
                10000074: "5bdce48fc9",
                10000075: "4263c32baa",
                10000076: "da12137035",
                10000077: "befae0dd8d",
                10000078: "3789f175c4",
                10000079: "8f0ede6d58",
                10000080: "2c8374dc79",
                10000081: "939ab96a5d",
                10000082: "65edb8587b",
                10000083: "5d51ce9468",
                10000084: "31758176d8",
                10000085: "3f06c3645c",
                10000086: "570293b21e",
                10000087: "c8ca3f3a91",
                10000088: "3f8c611719",
                10000089: "ec5bacbf42",
                10000090: "b1a46cb9ba",
                10000324: "7b7e80f204",
                10000325: "dbc6c5bd69",
                10000327: "ac86d06eda",
                10000328: "29283373d0",
                10000329: "e1abc69b32",
                10000330: "c319f17ac6",
                10000687: "559415b345",
                10000688: "59bcb90348",
                10000689: "3d5058c75a",
                10000690: "02beff69b3",
                10000691: "ef2d717c50",
                10000692: "ed824f7075",
                10000693: "855e7d694d",
                10000694: "3d35d48a1e",
                10000695: "76f5459105",
                10000696: "836eb3c3a8",
                10000697: "f6898d79aa",
                10000698: "034cb96ed7",
                10000699: "2ab0be4b8e",
                10000700: "f9ff676abf",
                10000701: "b1198dc297",
                10000702: "9aa495d2d0",
                10000703: "94466aef62",
                10000704: "bbe993efa8",
                10000705: "08e87b19e5",
                10000706: "30af89e371",
                10000707: "c615bda81b",
                10000708: "3439a7f2c6",
                10000709: "fe2a0450ee",
                10000710: "d3b1c6970b",
                10000711: "e8e7936872",
                10000712: "62ade9a5d9",
                10000713: "cd2d7202ce",
                10000714: "f5f5c0c726",
                10000715: "c8940defa7",
                10000716: "d4c3511f1c",
                10000717: "c0b33b2707",
                10000718: "b7898a96a4",
                10000719: "0afe21c711",
                10000720: "15bc4cd75c",
                10000721: "236acfc33e",
                10000722: "4252e4f621",
                10000723: "5532721500",
                10000724: "cf7ee7c557",
                10000725: "8e10bb4c62",
                10000726: "8f9461820c",
                10000727: "ab5e6c0d6e",
                10000728: "b0f2c06862",
                10000729: "a6aa48da2f",
                10000730: "81fed62109",
                10000731: "60450684ad",
                10000732: "91ada79e5f",
                10000733: "d7bc2d75d2",
                10000734: "96023b30a9",
                10000735: "d1f5fdd3ee",
                10000736: "d1f5fdd3ee",
                10000737: "4626475287",
                10000738: "9140be25d5",
                10000739: "6d7e163aeb",
                10000740: "9c25789148",
                10000741: "b9c34da79c",
                10000742: "4051b7098a",
                10000743: "b1b7157e01",
                10000744: "a09ed2c549",
                10000745: "a058ff2a49",
                10000746: "a0c8d3019b",
                10000747: "ac3fdffff0",
                10000748: "3dd97e8055",
                10000749: "b754ebaa69",
                10000750: "51d3b9564c",
                10000751: "96023b30a9",
                10000752: "96a9c2bea3",
                10000753: "0a09c2d0cf",
                10000754: "38685c8612",
                10000755: "f8e27f95ef",
                10000756: "c3e7efdce7",
                10000757: "b5a29565a3",
                10000758: "45d836f255",
                10000759: "1a2a833310",
                10000760: "c1b09c8fc2",
                10000761: "5c53c1c7b6",
                10000762: "76f62be96f",
                10000763: "34f8564abc",
                10000764: "d1cf01d5ca",
                10000765: "dd3bd8d139",
                10000766: "153a809ae6",
                10000767: "937f54123d",
                10000768: "428ccdd665",
                10000769: "6cd7b24a28",
                10000770: "f29ba8726d",
                10000771: "919f452aa2",
                10000772: "fe2b83f925",
                10000773: "e1451f31f3",
                10000774: "7cc13def5b",
                10000775: "838dd6be01",
                10000776: "5f08966e98",
                10000777: "77eae04846",
                10000778: "84a83ac33b",
                10000779: "4c0a1b312e",
                10000780: "36cb533b06",
                10000781: "eda27d241c",
                10000782: "bf47ef634c",
                10000783: "0e5b38bf4e",
                10000784: "575b94fc50",
                10000785: "b2bf9497c0",
                10000786: "3b9d152ebb",
                10000787: "2573f87eeb",
                10000788: "6a97ae4ea8",
                10000789: "50a9a213be",
                10000790: "b184d9ab96",
                10000791: "e7684adb8a",
                10000792: "ebf99bd12f",
                10000793: "3f7d61c4a9",
                10000794: "0f02072bd7",
                10000795: "11e00f9535",
                10000796: "dcfaea9c78",
                10000797: "63427e14ff",
                10000798: "0045fe2ae5",
                10000799: "e2d6b5bc78",
                10000800: "96257b0908",
                10000801: "4b1efa07d3",
                10000802: "f7c7d3a0ac",
                10000803: "bb1889cd06"
            },
            runtime: re({
                hash: function(e) {
                    return Se(e).toString(Ie).slice(0, 8)
                },
                javaScriptInput: {
                    ahoCorasickLookup: e => [],
                    eventSegments: e => ({
                        "!UpdateLookalikeModels": ["109585", "109586", "114096", "114973", "89780", "89781", "89782", "89783", "89784", "89786", "90032", "90033", "90034", "91149"],
                        "!UpdateSecondPartyData": ["95201"],
                        "!UpdateThirdPartyData": ["93845", "93846", "93847"],
                        DeclaredData: ["116152", "116153", "180953", "89492", "89493", "89494", "89495", "89496", "89497"],
                        FormSubmission: ["176904"],
                        Grapeshot: ["100580", "100882", "100886", "104004", "106050", "116930", "120744", "124278", "125148", "132347", "132352", "136107", "140685", "162553", "173898", "187251", "75548", "91654"],
                        LinkClick: ["106050", "115801", "120744", "124278", "125544", "132347", "140685", "153381", "167455", "167456", "167459", "167461", "167462", "167463", "167466", "167467", "167468", "167471", "167472", "167474", "167475", "167476", "167477", "172214", "172215", "172216", "172218", "172219", "172221", "172948", "173876", "173877", "173878", "173879", "173880", "173881", "173883", "173884", "173888", "173889", "173890", "173891", "173896", "173897", "173898", "173900", "173906", "173907", "173908", "173909", "173910", "173911", "173913", "173918", "173919", "173924", "173925", "173926", "173932", "174344", "174345", "174346", "175448", "175454", "175800", "175810", "175812", "175814", "175818", "175820", "175822", "175830", "175832", "175835", "175837", "175842", "175844", "176892", "176895", "176897", "176898", "176899", "176904", "176911", "176913", "176924", "176968", "185107", "189338", "189339", "189340", "189341", "209017", "75548", "98239"],
                        Pageview: ["10000000", "10000001", "10000002", "10000003", "10000004", "10000005", "10000006", "10000007", "10000008", "10000010", "10000011", "10000012", "10000013", "10000014", "10000015", "10000016", "10000017", "10000018", "10000019", "10000020", "10000021", "10000022", "10000023", "10000024", "10000025", "10000026", "10000035", "10000036", "10000037", "10000038", "10000039", "10000040", "10000041", "10000042", "10000043", "10000044", "10000045", "10000046", "10000047", "10000048", "10000049", "10000050", "10000051", "10000052", "10000053", "10000054", "10000055", "10000056", "10000057", "10000058", "10000059", "10000060", "10000061", "10000062", "10000063", "10000064", "10000065", "10000066", "10000067", "10000068", "10000069", "10000070", "10000071", "10000072", "10000073", "10000074", "10000075", "10000076", "10000077", "10000078", "10000079", "10000080", "10000081", "10000082", "10000083", "10000084", "10000085", "10000086", "10000087", "10000088", "10000089", "10000090", "10000324", "10000325", "10000327", "10000328", "10000329", "10000330", "10000687", "10000688", "10000689", "10000690", "10000691", "10000692", "10000693", "10000694", "10000695", "10000696", "10000697", "10000698", "10000699", "10000700", "10000701", "10000702", "10000703", "10000704", "10000705", "10000706", "10000707", "10000708", "10000709", "10000710", "10000711", "10000712", "10000713", "10000714", "10000715", "10000716", "10000717", "10000718", "10000719", "10000720", "10000721", "10000722", "10000723", "10000724", "10000725", "10000726", "10000727", "10000728", "10000729", "10000730", "10000731", "10000732", "10000733", "10000734", "10000735", "10000736", "10000737", "10000738", "10000739", "10000740", "10000741", "10000742", "10000743", "10000744", "10000745", "10000746", "10000747", "10000748", "10000749", "10000750", "10000751", "10000752", "10000753", "10000754", "10000755", "10000756", "10000757", "10000758", "10000759", "10000760", "10000761", "10000762", "10000763", "10000764", "10000765", "10000766", "10000767", "10000768", "10000769", "10000770", "10000771", "10000772", "10000773", "10000774", "10000775", "10000776", "10000777", "10000778", "10000779", "10000780", "10000781", "10000782", "10000783", "10000784", "10000785", "10000786", "10000787", "10000788", "10000789", "10000790", "10000791", "10000792", "10000793", "10000794", "10000795", "10000796", "10000797", "10000798", "10000799", "10000800", "10000801", "10000802", "10000803", "100580", "100882", "100886", "104004", "105314", "105315", "105316", "105318", "105320", "105321", "105526", "105717", "105718", "105719", "106906", "109402", "109408", "113994", "114097", "114702", "115754", "115801", "116930", "120744", "120787", "122872", "124030", "124278", "125544", "127898", "132239", "132352", "133840", "134038", "139919", "139922", "139926", "139930", "139943", "139946", "139950", "139957", "140685", "143330", "144127", "144128", "144132", "144149", "146705", "146734", "146736", "153381", "158629", "162087", "162553", "166283", "167455", "167456", "167457", "167458", "167459", "167460", "167461", "167462", "167463", "167464", "167466", "167467", "167468", "167471", "167472", "167473", "167474", "167475", "167476", "167477", "168072", "172214", "172215", "172216", "172218", "172219", "172220", "172221", "172225", "172884", "172948", "173876", "173877", "173878", "173879", "173880", "173881", "173883", "173884", "173888", "173889", "173890", "173891", "173895", "173896", "173897", "173898", "173900", "173901", "173902", "173906", "173907", "173908", "173909", "173910", "173911", "173913", "173916", "173917", "173918", "173919", "173920", "173922", "173924", "173925", "173926", "173927", "173929", "173931", "173932", "173936", "174344", "174345", "174346", "175038", "175448", "175451", "175454", "175456", "175458", "175459", "175461", "175555", "175557", "175798", "175800", "175801", "175804", "175806", "175810", "175812", "175814", "175818", "175820", "175822", "175824", "175826", "175830", "175832", "175835", "175837", "175840", "175842", "175844", "176884", "176887", "176888", "176889", "176890", "176891", "176892", "176893", "176894", "176895", "176897", "176898", "176899", "176902", "176903", "176904", "176905", "176908", "176910", "176911", "176913", "176914", "176916", "176918", "176919", "176920", "176921", "176923", "176924", "176953", "176955", "176957", "176967", "176968", "177226", "177658", "178814", "179682", "179771", "180784", "180785", "180951", "180952", "180953", "184006", "185107", "185405", "187218", "188096", "188160", "188161", "189330", "189338", "189339", "189340", "189341", "189342", "189949", "192091", "194541", "194542", "194543", "195230", "196454", "196455", "196843", "196939", "206653", "208648", "209017", "211065", "211857", "212119", "213030", "213800", "213933", "214072", "214073", "214075", "214076", "214227", "214317", "214926", "215152", "216183", "216215", "216262", "217787", "217822", "218446", "219249", "219642", "220222", "221000", "221912", "222250", "223395", "223396", "223397", "223398", "223399", "223400", "223401", "223402", "223404", "223405", "223406", "225088", "226837", "226928", "229655", "230962", "231667", "232022", "39204", "41376", "56634", "56691", "74314", "92886", "94908", "95077", "95078", "95079", "95080", "95081", "98239"],
                        PageviewComplete: ["100882", "132347", "136107", "149125", "167458", "176893", "176916", "180951", "180952", "180953", "73342", "92886"],
                        PageviewEngagement: ["100882", "149125", "176893", "73342"],
                        SegmentEntry: ["132347", "136107", "167458", "176916", "180951", "180952", "180953", "92886"],
                        SegmentExit: [],
                        SlotClicked: ["100803", "105851", "106248", "114701", "117411", "120510", "122439", "123650", "124457", "124656", "131874", "132347", "133758", "133789", "134592", "137537", "139769", "157232", "157446", "157502", "164201", "168172", "172275", "173664", "176905", "180956", "180957", "180959", "181008", "184577", "184706", "185040", "186327", "186328", "186897", "187063", "188217", "188255", "188393", "188919", "189307", "193201", "195124", "203327", "205000", "207689", "214856", "214857", "214924", "214925", "219231", "227134", "231785", "41414", "58133", "73331", "88504", "88505", "88624", "90449", "92946", "92957", "94903"],
                        SlotViewable: ["100803", "106249", "106370", "107324", "107326", "114028", "114192", "114701", "117410", "117411", "120510", "122439", "122601", "123650", "124457", "124656", "133758", "133789", "134592", "137537", "139769", "157232", "157446", "157502", "164201", "171207", "172275", "173664", "180956", "180957", "180959", "184577", "184706", "186897", "188919", "188920", "188921", "188922", "193201", "194111", "194112", "194113", "195124", "196328", "196454", "196455", "197769", "203327", "206662", "207465", "210889", "211065", "214924", "216183", "219231", "56344", "70302", "77811", "81843", "88766", "89747", "92947", "92956", "94752", "96020"],
                        SocialShare: ["106050", "109402", "109408"],
                        VideoAdClick: ["192184"],
                        VideoPlay: ["219739"]
                    }),
                    eventsLookup: e => ["Pageview", "LinkClick", "SlotClicked", "SlotViewable", "PageviewComplete", "SegmentEntry", "Grapeshot", "DeclaredData", "PageviewEngagement", "SocialShare"],
                    interpretOnlyQueries: e => ({}),
                    literalsLookup: e => e.frontDecode("\t\t/art and entertainment/books and literature\t43\t/poetry\t23\tcomics and animation\t23\tdance\t28\t/ballet\t23\tmovies and tv\t36\t/animated\t37\tchildren's\t38\tomedies\t37\tdocumentaries\t37\treality\t38\tomantic comedies\t37\ttelevision\t24\tusic\t28\t/music genres/classical music\t42\topera\t42\tpop music\t42\tsoundtracks\t23\tshows and events/classical concert\t23\ttheatre\t2\tutomotive\t11\t and vehicles/cars/hybrid\t30\tluxury\t30\tsedan\t25\telectric vehicles\t25\tmotorcycles\t11\t/auto type/green vehicles\t22\tluxury cars\t1\tbooks and literature\t2\tusiness and finance/business/business banking & finance\t31\tgreen solutions\t22\tindustries/civil engineering industry\t33\tlogistics and transportation industry\t33\tmechanical and industrial engineering industry\t33\tpharmaceutical industry\t34\tower and energy industry\t14\tindustrial\t24\t/business news\t34\toperations\t25\tconstruction\t25\tenergy\t25\tfashion industry\t25\tgreen solutions\t25\tpharmaceutical industry\t1\teducation\t10\t/adult education\t11\tcollege education/postgraduate education\t11\tgraduate school\t11\tlanguage learning\t1\tfamily and parenting\t12\trelationships/parenting\t2\tinance\t8\t/accounting and auditing/tax preparation and planning\t9\tbank\t9\tfinancial news\t9\tinvesting\t9\tpersonal finance\t25\t/debt management\t4\te art/theater\t2\tood and drink\t15\t/beverages/alcoholic beverages\t16\tdining out\t16\tfood/fruits and vegetables\t21\tsalads\t16\thealthy eating\t16\tvegan\t19\tetarian\t1\thealth and fitness\t7\ty living/fitness and exercise\t2\tobbies and interests/arts and crafts/photography\t23\tbirdwatching\t23\tgames/video and computer games\t3\tme and garden\t16\t/gardening and landscaping\t17\thome improvement and repair\t1\tlaw, govt and politics/politics\t1\tmovies\t2\tusic and audio\t1\tnews/national news\t1\tpersonal finance/personal investing\t3\tts\t5\t/birds\t6\tlarge animals\t1\treal estate\t12\t/apartments\t14\trchitects\t13\tbuying and selling homes\t1\tscience\t8\t/computer science/artificial intelligence\t9\tecology/pollution\t10\tngineering\t11\tvironment\t9\tsocial science\t9\tweather\t2\tociety/crime\t9\tdating\t2\tports\t7\t/auto racing\t8\tbasketball\t8\tcricket\t8\tdiving\t8\tgolf\t8\thorse racing\t13\ts\t8\tolympics/paralympic games\t8\trugby\t8\tskiing\t9\toccer\t8\ttennis\t8\tvolleyball/beach volleyball\t2\ttyle & fashion\t16\t/high fashion\t7\tand fashion\t18\t/accessories\t19\tbeauty/cosmetics\t19\tclothing\t19\tfashion designers\t19\tjewelry\t19\tluxury goods\t19\tmen 's fashion\t1\ttechnology & computing\t23\t/consumer electronics\t12\tand computing\t25\t/consumer electronics\t46\t/tv and video equipment\t26\ttech news\t3\tlevision\t11\t/drama tv\t2\travel\t7\t/business travel\t8\tspecialty travel/adventure travel\t8\ttourist destinations/europe\t29\tfrance\t29\tgreece\t29\titaly\t16\tfacilities\t9\transports\t11\tveling with kids\t\t2\t\t3\t\t401k\t\tA&W\t1\tI\t1\tfrica\t1\trmenia\t2\ttificial intelligence\t1\tustralia\t1\tzerbaijan\t\tBurger King\t\tCyprus\t\tFrance\t\tGeorgia\t\tIndia\t\tKFC\t1\tazakhstan\t1\tyrgyzstan\t\tPakistan\t1\tizza Hut\t\tQSR\t\tRussia\t\tSubway\t\tTajikistan\t1\television\t1\turkey\t4\tmenistan\t\tUnited Kingdom\t7\tStates\t1\tzbekistan\t\tWendy's\t\t_energy_&_industrial_strategy\t\taberdeen asset management\t1\tcademic degree\t2\tcor.com\t2\ter\t1\tdventure\t9\t sport\t1\tffordable housing\t2\trica\t1\tgoda\t1\ti system\t3\ttools\t2\t_v_the_mind\t2\tr base\t3\t_travel\t3\talo.com\t3\tfarewatchdog.com\t3\tline\t3\tpaz.com\t1\tlcohol\t2\tgorithm\t2\tlianz\t1\tmd\t2\ttrak\t1\tpple\t1\trchitecture\t2\tgentina\t2\tmani\t3\ty\t2\tt\t3\t_galleries\t4\thistory\t5\touse_cinema\t3\tificial intelligence\t10\t_intelligence\t1\tsia\t4\t_business\t2\tking price\t2\tset management\t2\tton martin\t3\trazeneca\t3\tute\t2\tus\t1\tthletics\t2\tuomobile\t1\tudi\t2\tstralia\t2\tto\t4\tmobiles\t4\ts\t1\tverage\t2\tiva\t1\tware\t1\txa\t\tballet\t2\tndb\t3\tk\t4\t of america\t4\ting\t4\tman-fried's crypto trading firm alameda research\t2\trclays\t2\tseball\t4\ts\t3\tketball\t1\tbcapp\t3\tcom\t6\t.live.site.future\t1\teach\t5\tes\t2\ter\t2\tntley\t2\trlin_film_festival\t1\tiking\t2\tnance\t3\tnance\t2\to tech\t3\tfuel\t3\ttech\t2\ttcoin\t3\ttrex\t1\tlackrock\t2\tock chain\t5\t_chain\t5\tchain\t5\tfi\t1\tmw\t1\tnb\t1\tofa\t2\toking.com\t4\ts\t3\tze\t2\tttega venetta\t2\turbon\t3\ttique\t2\txing\t1\trazil\t2\tight sparks\t3\ttish_fashion\t1\ttc\t1\tudget\t2\tgatti\t2\tilder\t2\tlgari\t2\tsiness\t8\t guru\t9\tleader\t9\tschool\t10\tize\t8\t_size\t8\tperson\t2\tyer\t3\ting\t\tcadillac\t2\tmping\t2\tnada\t3\tnes_film_festival\t2\tr\t3\t industry\t3\tdano\t3\tgo\t3\ts\t1\telebrity lifestyle\t9\t_style\t2\tntral bank\t2\to\t1\tfo\t1\thampagne\t3\tnel\t3\ttgpt\t2\teapair.com\t5\toair\t2\tief adviser\t6\teconomist\t7\txecution officer\t13\tve\t15\t of the company\t18\tficer\t6\ttechnical officer\t5\t_executive\t3\tld_health\t5\tren\t8\t's_television\t4\te\t3\tna\t2\tristian loubutin\t3\tome\t1\tinema\t2\to\t2\tvilian\t1\tlimate\t7\t change\t7\t_solutions\t4\tber\t5\ting\t3\tnical trial\t2\tothing\t3\tud computing\t6\tservice\t1\toal\t3\tts\t2\tcktail\t2\tde\t2\tin hako\t4\tbase\t4\tdesk\t4\tmama\t2\tllege\t3\tombia\t2\tmmercial bank\t11\tcorporations\t3\tpany\t7\t size\t4\tuter\t2\tnglomerate\t3\tscious\t4\ttitution\t2\to\t3\tking\t2\trporate governance\t8\tion\t3\tvette\t2\turt order\t1\treator\t3\tdit\t6\t suisse\t7\tunion\t2\ticket\t2\to\t3\tss over\t5\t-over\t5\tover\t2\tuisedirect.com\t2\typto\t6\tcurrency\t14\t exchange ftx\t1\tto\t1\tultural-experiences\t6\te\t1\tycling\t\tdai\t2\tta\t2\tytrip\t1\tebt\t2\tcision maker\t3\tor\t2\tepfakes\t2\tfence\t2\tll\t2\tsign\t2\tv\t3\teloper\t1\tirector\t2\tversity\t3\ting\t1\tna\t1\to kwon\t2\tctor\t6\tate\t3\tumentaries\t10\ty_film\t2\tdgecoin\t2\tge\t1\tress\t2\tink\t3\tve\t4\ting\t1\tusit.com\t\te-commerce\t1\tarth\t1\tco-conscious\t4\tfriendly\t4\ttourism\t3\ttourism\t1\tducation\t1\tlderly care\t2\tectric cars\t9\tvehicles\t8\tity\t2\ti lilly\t1\tmerging technology\t2\tployee number\t15\ts\t2\tt\t1\tndowment fund\t2\tergy\t6\t industry\t7\tsector\t6\t_industry\t7\tservice_companies\t2\tgineering\t2\tormous\t2\ttertainment-arts\t13\t_and_arts\t3\trepreneur\t12\tship\t1\tstate\t1\tth\t2\toro\t2\tx\t1\turope\t6\tan commission\t9\tparliament\t9\tunion\t1\txchanges\t2\tecutive\t9\t compensation\t10\tdirector\t10\tofficer\t10\tvice-president of strategy\t9\ts\t2\tpedia\t4\trimental drug\t2\ttreme sport\t\tfacebook\t2\tmily\t6\t car\t7\toffice\t7\ttravel\t7\tvehicle\t6\t_&_education\t7\ttree\t2\tshion\t7\t_design\t2\tther\t1\tda\t2\tic\t1\tedex\t2\tndi\t2\trrari\t1\tidelity\t2\tfa\t2\tlm\t4\t-tv\t4\ts\t2\tnance\t7\t_and_economy\t7\ts\t6\tial adviser\t10\tdecisions\t10\tinsurance\t10\tmanagement\t16\tr\t10\tservice\t17\ts\t2\trst class\t5\t-class\t2\tshing\t1\tlight\t2\tying\t1\tood\t3\ttball\t2\trces\t3\teign exchange\t3\tmula 1\t7\t1\t2\tunder\t1\treight\t1\ttx\t1\tuture\t6\t of transport - bbc reel\t6\t-planet\t\tgaming\t2\ts\t3\toline\t2\tza strip\t1\temini marketplace\t2\tne\t4\trals\t6\ttion_project\t8\tve ai\t4\tsis\t3\tome\t5\tics\t1\tin\t1\tlobal markets\t1\tm\t1\tocity.com\t2\tldman\t7\t sachs\t3\tf\t2\togle flights\t2\tvernment\t10\t investment\t11\tlinked companies\t20\trporation\t1\tphc\t1\traduate school\t3\tf\t2\te\t3\ten\t5\t_living\t6\ttech\t5\thouse_gas_emissions\t1\tucci\t\thackers\t2\tndbag\t2\trdware\t1\tealth\t6\t_gap\t6\tcare worker\t10\t_in_the_us\t2\tdge fund\t1\tigh end\t5\tlevel\t6\tife\t7\tving\t5\tstreet\t4\t-end\t8\t shopping\t5\tspending quarter\t4\t_lift\t4\ter education\t6\t_education\t5\tst mountain\t8\tpeak\t2\tkers\t3\ting\t2\tlton.com\t2\tstory\t1\tockey\t2\tme\t4\t buyer\t8\ting\t4\t-and-garden\t5\timprovement\t2\tnda\t2\tpper\t2\trse-racing\t2\tt springs\t3\tel\t5\tplanner.com\t5\ts.com\t3\twire\t2\tusing costs\t1\tttp://instagram.com\t7\tm.facebook.com\t4\ts://l.facebook.com\t9\tm.facebook.com\t8\tmobile.facebook.com\t8\twww.bbc.com/culture/tags/documentaries\t20\tfuture/\t20\tnews/business\t25\tworld/africa\t12\tfacebook.com\t12\tinstagram.com\t1\tunting\t1\tybrid\t2\tundai\t\tibm\t1\thg.com\t1\tn-market\t2\tdia\t4\te_film\t4\tgenous\t3\tustrialist\t2\tfiniti\t3\tormation technology\t11\t_technology\t3\trastructure\t2\tnovation\t2\tsight\t3\ttagram\t3\turance\t5\ter\t2\ttel\t4\tnder\t4\trest rate\t3\tuitive\t2\tvesment advisor\t5\tt\t6\t in government\t6\ting\t6\tment\t10\t advisor\t11\ttrust\t10\ts\t6\tor\t1\tos\t1\tran\t3\tq\t2\teland\t1\tsp\t2\trael\t1\tt\t2\top\t\tjaguar\t1\teep\t2\twellery\t6\try\t1\tohnson & johnson\t1\tp morgan\t1\tudiciary\t2\tstice department\t\tkayak.com\t5\ting\t1\tellogg school of management\t1\tia\t2\twi.com\t1\tlook\t1\tnowledgeable\t1\toenigsegg\t1\tucoin\t2\tga\t\tlakeside shopping centre\t2\tmborghini\t2\tnd rover\t4\trover\t4\tscape\t2\tptop\t2\trge\t5\t business\t2\ttin america\t2\tw\t1\teader\t6\ts\t2\tgal challenge\t3\tislation\t2\tnovo\t2\tss than 50\t2\txus\t1\tinkedin\t2\tquor\t2\tterature\t1\toan\t2\tgistics\t2\tndon+fashion_week\t6\t_film_festival\t2\ttus car\t2\tuis vuitton\t5\t-vuitton\t1\tuna\t2\txury\t6\t goods\t7\tlife\t7\tretail\t6\tescapes.com\t1\tvmh\t\tm&a\t1\tacro\t2\tnagement\t6\tr\t2\trket\t6\t (economics)\t7\tvalue\t6\ting\t6\twatch\t2\tserati\t3\tters\t1\tba\t1\tclaren\t1\tedical school\t7\t_myths\t5\tine\t4\tum\t2\tn's_health\t3\ttal-health\t6\t_health\t2\trcedes\t7\tz\t3\tger\t2\ttamask\t4\tverse\t2\txico\t1\ticro\t2\td-size\t3\tdle east\t2\tlitary\t2\tning\t4\tvan\t3\tuscule\t1\tlb\t1\tma\t1\toderna\t2\tm car\t3\tondo\t2\tney\t2\trgan stanley\t3\ttgage\t2\ttel\t3\ther\t2\tuntain biking\t8\teers\t2\tvie theater\t1\ttv_video_music_awards\t1\tuseum\t6\ts\t3\tic\t2\ttual fund\t11\ts\t\tnanotechnology\t2\tscar\t3\tdaq\t2\ttural_gas\t1\tba\t1\tet worth\t2\tw medication\t3\ts\t4\t_business_content\t5\teurope_content\t5\tlive_content\t5\tuscanada_content\t5\tworld_content\t1\tft\t3\ts\t1\ton-fungible token\t2\trth america\t2\tvartis\t1\tpa\t1\tuclear disaster\t8\tfuel\t7\t_power\t2\tmber of employees\t2\trse\t5\try\t1\tvidia\t1\tyse\t\toil\t3\t reserves\t3\t_&_gas_industry\t1\tlympics\t1\tmega\t1\tnline shopping\t6\t_shopping\t1\tpera\t5\tting system\t2\ttions\t2\tulence\t1\trbitz\t1\tutdoor\t7\t adventure\t1\twner\t\tpagani\t2\tnama\t3\tts\t2\tralympics\t3\tent\t6\ting\t6\ts\t1\telago.co\t2\tnsion\t7\t fund\t8\tscheme\t2\trceptive\t3\tseco\t4\tonal finance\t8\t_finance\t1\tfizer\t1\tharma\t6\tceutical drug\t15\tindustry\t2\td\t2\totography\t2\tysician\t1\tinterest\t1\tlanet\t4\tner\t3\tystation\t2\tug-in hybrid\t1\tolicy\t4\ttics\t2\tp_culture\t3\tular_culture\t2\trsche\t2\ts_bbc_ukrainewar\t3\titive\t2\ttential buyers\t1\tre-owned\t3\tmier league\t5\tum_family_tree\t2\ticeline\t3\tmary school\t3\tvate banking\t8\tjet\t8\tplacement\t8\tshopping\t2\tocurement\t3\tfessional\t3\tof of stake\t9\twork\t3\tperties\t7\ty\t2\tudential\t1\tublic_health\t5\tshing\t2\trchase\t\tracing\t2\til\t4\t_travel\t4\tway technology\t3\tse capital\t2\tnge rover\t2\tv4\t1\teal estate\t4\t_estate\t2\tcycling\t2\tddit\t2\tfinance\t2\tgulation\t10\t of the crypto market\t2\tit\t2\tmodel\t2\tnewable\t9\t energy\t10\tresource\t10\tsources\t9\t_energy\t2\tstaurant\t1\tich\t1\toad trip\t4\t_trips\t2\tlex\t3\tls royce\t2\tth ira\t1\tugby\t2\tm\t2\tssia\t\tsafari\t2\tlesforce\t2\tudi arabia\t5\t-arabia\t2\tvvy\t1\tchool\t6\ts\t3\troders\t2\tience\t7\t_&_environment\t8\tand_environment\t2\tottscheapflights.com\t1\tedan\t2\tlf-employed\t2\tmiconductors\t2\tnior executive\t7\tmanagement\t2\txual_health\t1\thipping\t3\trt\t2\toes\t3\tp\t4\tper\t5\ting\t3\trts\t1\tize\t4\t of company\t1\tkiing\t3\tplagged.com\t3\trt\t2\tyscanner\t1\tmall\t5\t businesses\t5\t_businesses\t3\trt\t5\tbook\t1\tnapchat\t2\tow_&_skiing\t1\toccer\t3\tial security\t2\tftware\t2\tlar energy\t6\tpanels\t7\tower\t5\t_energy\t6\tpower\t3\tdier\t2\tngs_that_made_history\t2\tuth america\t2\tvereign wealth fund\t1\tpa\t2\tort\t5\t_football_content\t1\ttablecoin\t3\tte street\t4\tistical\t2\tock\t5\t market\t5\ts\t2\tudent_finance\t2\tyle\t5\ts of contemporary stars\t1\tummer-olympics\t2\tstainabiliity\t12\tty\t9\tle\t11\t development\t13\triving\t7\tbility\t8\tle\t2\tv\t2\tzuki\t1\tweater\t2\timming\t1\tyria\t\tt rowe price\t1\tablet\t2\tx\t1\tech\t4\t companies\t11\ty\t5\tfirms\t5\tgiant\t4\tnologies\t9\ty\t10\t-of-business\t10\t_of_business\t2\tlevision\t2\tnnis\t2\tquila\t2\trra\t1\the_specialist\t3\tatre\t2\treadneedle\t1\tiffany\t2\tktok\t2\tmepiece\t2\tny\t2\tqets.com\t1\top gear\t3\tgear\t2\tronto_film_festival\t2\tte bag\t2\turist\t2\tyota\t1\trade\t4\ting\t3\tils\t4\tn\t5\ts\t3\tnsport\t3\tvel\t6\t_destinations-asia\t6\tocity\t7\tka\t6\tzoo.com\t2\tends\t2\tip.com\t4\tadvisor.com\t2\toops\t2\tuck\t1\twitter\t\tuae\t1\tk\t2\t_high_streets\t1\tnit trust\t4\ted states\t3\tversity\t1\tps\t1\truguay\t1\ts\t2\t federal reserve\t2\t-canada\t2\t_culture\t2\tdc\t3\tt\t1\ttilities\t6\ty\t\tvacation\t3\tcination\t6\te\t1\tehicle\t2\tnice_film_festival\t1\tia rail\t3\ttor.com\t2\tce president\t3\ttoria station\t1\toice-activated_technology\t2\tlkswagon\t1\tp\t\twales\t2\ttches\t1\tearable_technology\t8\ts\t2\tll-being\t4\tness\t1\tharton\t2\tiskey\t1\tilderness\t2\tnd energy\t5\tfarm\t5\tpower\t4\t_farms\t5\tpower\t3\te\t2\tse\t1\tomen's_health\t2\trkforce\t3\tld cup\t5\t's biggest cryptocurrency exchanges\t7\t_table\t5\t_of_wonder\t1\trist-watch\t\txrp\t\tyemen\t1\toutube"),
                    propertiesLookup: e => [["classifications_watson", "taxonomy_labels"], ["client", "url"], ["text"], ["prod"], ["campaign_id"], ["top_tags"], ["label"], ["sect"], ["dfp_adUnit2"], ["dest_url"], ["pillar"], ["coll"], ["geo_info", "country"], ["section"], ["segment_number"], ["classifications_watson", "sentiment", "label"], ["client", "title"], ["dfp_adUnit1"], ["channel"], ["jKmNjKmN"], ["article", "name"], ["grapeshot"], ["topics"], ["column"], ["client", "referrer"], ["tags"], ["client", "user_agent"], ["geo_info", "continent"], ["subsection"], ["advertiser_id"], ["aggregations", "PageviewEngagement", "engaged_time"], ["article", "keyword"], ["client", "domain"], ["geo_info", "city"], ["isp_info", "organization"], ["slot", "slot_element_id"]],
                    queries: e => ({
                        1e7: e.r(91, 48, 88),
                        10000001: e.r(102, 0, 1, 1, 0, "/automotive and vehicles"),
                        10000002: e.r(98, 3),
                        10000003: e.r(91, 37, 52),
                        10000004: e.r(91, "/careers", 46),
                        10000005: e.r(102, 0, 1, 1, 0, 45),
                        10000006: e.r(92, 50, 96, "/society/social institution/marriage"),
                        10000007: e.r(97, 2, 4, 15, 16, 19, 20, "/art and entertainment/visual art and design/art museums and galleries", "/art and entertainment/visual art and design/arts education", "/art and entertainment/visual art and design/performance art", "/art and entertainment/visual art and design/restoration", "/art and entertainment/visual art and design/sculpture", "/education/art history", 70),
                        10000008: e.r(92, "/business and industrial/food industry", 60, "/food and drink/food and grocery retailers"),
                        10000010: e.r(91, 65, 68),
                        10000011: e.r(102, 0, 1, 1, 0, "/hobbies and interests"),
                        10000012: e.r(102, 0, 1, 1, 0, 73),
                        10000013: e.r(91, "/art and entertainment/movies", 6),
                        10000014: e.r(102, 0, 1, 1, 0, 14),
                        10000015: e.r(95, 38, 55, "/law, govt and politics", "/news", 95, "/sports/sports news", 126),
                        10000016: e.r(92, 54, 55, 57),
                        10000017: e.r(102, 0, 1, 1, 0, 81),
                        10000018: e.r(93, "/art and entertainment/celebrity fan and gossip", 11, 13, 17),
                        10000019: e.r(102, 0, 1, 1, 0, 84),
                        10000020: e.r(102, 0, 1, 1, 0, "/shopping"),
                        10000021: e.r(91, 68, 97),
                        10000022: e.r(91, 42, 113),
                        10000023: e.r(92, "/business and industrial/automation", "/science/computer science", 123),
                        10000024: e.r(93, "/art and entertainment/movies and tv/movies/reviews", 13, "/art and entertainment/tv", 125),
                        10000025: e.r(102, 0, 1, 1, 0, 129),
                        10000026: e.r(91, 72, "/technology and computing/consumer electronics/game systems and consoles"),
                        10000035: e.r(91, 91, "/science/physics"),
                        10000036: e.r(102, 0, 1, 1, 0, "/automotive and vehicles/buying and selling cars"),
                        10000037: e.r(102, 0, 1, 1, 0, "/automotive and vehicles/motor shows"),
                        10000038: e.r(91, 22, 25),
                        10000039: e.r(102, 0, 1, 1, 0, 26),
                        10000040: e.r(102, 0, 1, 1, 0, "/automotive and vehicles/cars/performance vehicles"),
                        10000041: e.r(91, 3, "/art and entertainment/comics and animation/comics"),
                        10000042: e.r(102, 0, 1, 1, 0, 39),
                        10000043: e.r(102, 0, 1, 1, 0, 96),
                        10000044: e.r(102, 0, 1, 1, 0, 50),
                        10000045: e.r(102, 0, 1, 1, 0, 4),
                        10000046: e.r(102, 0, 1, 1, 0, "/art and entertainment/visual art and design"),
                        10000047: e.r(102, 0, 1, 1, 0, 61),
                        10000048: e.r(102, 0, 1, 1, 0, "/food and drink/barbecues and grilling"),
                        10000049: e.r(91, "/food and drink/desserts and baking", "/food and drink/food and grocery retailers/bakeries"),
                        10000050: e.r(91, 62, "/food and drink/food/fast food"),
                        10000051: e.r(102, 0, 1, 1, 0, "/food and drink/food allergies"),
                        10000052: e.r(93, 63, 64, "/food and drink/health and lowfat cooking", 65),
                        10000053: e.r(102, 0, 1, 1, 0, 67),
                        10000054: e.r(91, "/health and fitness/exercise", "/health and fitness/sports medicine"),
                        10000055: e.r(102, 0, 1, 1, 0, "/health and fitness/men's health"),
                        10000056: e.r(102, 0, 1, 1, 0, "/health and fitness/nutrition"),
                        10000057: e.r(102, 0, 1, 1, 0, "/health and fitness/women's health"),
                        10000058: e.r(108),
                        10000059: e.r(102, 0, 1, 1, 0, "/art and entertainment/movies and tv/action"),
                        10000060: e.r(102, 0, 1, 1, 0, 7),
                        10000061: e.r(102, 0, 1, 1, 0, 8),
                        10000062: e.r(102, 0, 1, 1, 0, "/art and entertainment/movies and tv/horror"),
                        10000063: e.r(102, 0, 1, 1, 0, 95),
                        10000064: e.r(91, "/law, govt and politics/law enforcement", "/law, govt and politics/legal issues"),
                        10000065: e.r(102, 0, 1, 1, 0, 79),
                        10000066: e.r(91, "/law, govt and politics/government", 76),
                        10000067: e.r(102, 0, 1, 1, 0, 94),
                        10000068: e.r(102, 0, 1, 1, 0, 82),
                        10000069: e.r(102, 0, 1, 1, 0, "/pets/cats"),
                        10000070: e.r(102, 0, 1, 1, 0, "/pets/dogs"),
                        10000071: e.r(102, 0, 1, 1, 0, 83),
                        10000072: e.r(102, 0, 1, 1, 0, "/pets/reptiles"),
                        10000073: e.r(102, 0, 1, 1, 0, "/sports/football"),
                        10000074: e.r(102, 0, 1, 1, 0, "/sports/baseball"),
                        10000075: e.r(102, 0, 1, 1, 0, 99),
                        10000076: e.r(102, 0, 1, 1, 0, "/sports/bodybuilding"),
                        10000077: e.r(102, 0, 1, 1, 0, "/sports/bowling"),
                        10000078: e.r(102, 0, 1, 1, 0, "/sports/boxing"),
                        10000079: e.r(102, 0, 1, 1, 0, "/sports/bicycling"),
                        10000080: e.r(102, 0, 1, 1, 0, "/sports/fishing"),
                        10000081: e.r(102, 0, 1, 1, 0, 102),
                        10000082: e.r(102, 0, 1, 1, 0, "/sports/hunting and shooting"),
                        10000083: e.r(102, 0, 1, 1, 0, 106),
                        10000084: e.r(102, 0, 1, 1, 0, 107),
                        10000085: e.r(102, 0, 1, 1, 0, 109),
                        10000086: e.r(102, 0, 1, 1, 0, "/sports/walking"),
                        10000087: e.r(93, "/business and industrial/tanning", "/style and fashion/beauty", 115, "/style and fashion/beauty/cosmetology and beauty professionals"),
                        10000088: e.r(91, "/style and fashion/beauty/tattoos", "/style and fashion/body art"),
                        10000089: e.r(102, 0, 1, 1, 0, 120),
                        10000090: e.r(102, 0, 1, 1, 0, 124),
                        10000324: e.r(102, 0, 1, 1, 0, 37),
                        10000325: e.r(94, "/business and industrial/company/annual report", "/business and industrial/company/bankruptcy", "/business and industrial/company/earnings", "/business and industrial/company/joint venture", "/business and industrial/company/merger and acquisition"),
                        10000327: e.r(102, 0, 1, 1, 0, 58),
                        10000328: e.r(102, 0, 1, 1, 0, "/finance/personal finance/insurance"),
                        10000329: e.r(92, "/finance/accounting and auditing/billing and invoicing", "/finance/accounting and auditing/bookkeeping", 53),
                        10000330: e.r(102, 0, 1, 1, 0, 56),
                        10000687: e.r(102, 0, 1, 1, 0, 93),
                        10000688: e.r(102, 0, 1, 1, 0, 49),
                        10000689: e.r(91, 26, "/automotive and vehicles/scooters and mopeds"),
                        10000690: e.r(96, "/automotive and vehicles/vehicle brands/fiat", "/automotive and vehicles/vehicle brands/ford", "/automotive and vehicles/vehicle brands/honda", "/automotive and vehicles/vehicle brands/hyundai", "/automotive and vehicles/vehicle brands/nissan", "/automotive and vehicles/vehicle brands/peugeot", "/automotive and vehicles/vehicle brands/subaru", "/automotive and vehicles/vehicle brands/suzuki"),
                        10000691: e.r(97, 23, "/automotive and vehicles/vehicle brands/audi", "/automotive and vehicles/vehicle brands/bentley", "/automotive and vehicles/vehicle brands/ferrari", "/automotive and vehicles/vehicle brands/lamborghini", "/automotive and vehicles/vehicle brands/land rover", "/automotive and vehicles/vehicle brands/maserati", "/automotive and vehicles/vehicle brands/mercedes-benz", "/automotive and vehicles/vehicle brands/porsche", "/automotive and vehicles/vehicle brands/rolls-royce", "/automotive and vehicles/vehicle brands/toyota", "/automotive and vehicles/vehicle brands/volkswagen", "/automotive and vehicles/vehicle brands/volvo"),
                        10000692: e.r(102, 0, 1, 1, 0, "/automotive and vehicles/cars/coupe"),
                        10000693: e.r(91, "/automotive and vehicles/auto parts", "/automotive and vehicles/auto repair"),
                        10000694: e.r(102, 0, 1, 1, 0, "/automotive and vehicles/cars"),
                        10000695: e.r(102, 0, 1, 1, 0, 24),
                        10000696: e.r(102, 0, 1, 1, 0, "/art and entertainment/books and literature/children's books"),
                        10000697: e.r(102, 0, 1, 1, 0, 2),
                        10000698: e.r(91, "/careers/career advice", "/careers/resume writing and advice"),
                        10000699: e.r(102, 0, 1, 1, 0, "/careers/telecommuting"),
                        10000700: e.r(102, 0, 1, 1, 0, "/careers/career planning"),
                        10000701: e.r(91, "/careers/job fairs", "/careers/job search"),
                        10000702: e.r(102, 0, 1, 1, 0, 46),
                        10000703: e.r(102, 0, 1, 1, 0, "/education/distance learning"),
                        10000704: e.r(102, 0, 1, 1, 0, "/education/special education"),
                        10000705: e.r(98, 49),
                        10000706: e.r(92, "/education/homework and study tips", "/education/teaching and classroom resources/lesson plans", "/education/teaching and classroom resources/school supplies"),
                        10000707: e.r(102, 0, 1, 1, 0, 70),
                        10000708: e.r(102, 0, 1, 1, 0, 20),
                        10000709: e.r(102, 0, 1, 1, 0, 16),
                        10000710: e.r(93, 65, 66, 67, "/pets/animal welfare"),
                        10000711: e.r(102, 0, 1, 1, 0, "/food and drink/beverages/non alcoholic beverages"),
                        10000712: e.r(92, "/food and drink/kosher food", 66, 67),
                        10000713: e.r(102, 0, 1, 1, 0, "/food and drink/cuisines"),
                        10000714: e.r(96, "/food and drink/food/condiments and dressings", "/food and drink/food/frozen food", 63, "/food and drink/food/grains and pasta", "/food and drink/food/herbs and spices", 64, "/food and drink/food/snack foods", "/food and drink/gastronomy/slow food"),
                        10000715: e.r(102, 0, 1, 1, 0, "/health and fitness/aging"),
                        10000716: e.r(102, 0, 1, 1, 0, "/health and fitness/weight loss"),
                        10000717: e.r(102, 0, 1, 1, 0, "/hobbies and interests/arts and crafts"),
                        10000718: e.r(91, "/hobbies and interests/collecting", "/hobbies and interests/collecting/stamps and coins"),
                        10000719: e.r(102, 0, 1, 1, 0, "/hobbies and interests/games/board games and puzzles"),
                        10000720: e.r(102, 0, 1, 1, 0, "/hobbies and interests/magic and illusion"),
                        10000721: e.r(102, 0, 1, 1, 0, "/art and entertainment/music/musical instruments"),
                        10000722: e.r(91, 71, 82),
                        10000723: e.r(91, "/art and entertainment/radio", "/technology and computing/consumer electronics/radios"),
                        10000724: e.r(91, "/art and entertainment/books and literature/fan fiction", "/art and entertainment/books and literature/science fiction"),
                        10000725: e.r(102, 0, 1, 1, 0, "/home and garden/appliances"),
                        10000726: e.r(102, 0, 1, 1, 0, 75),
                        10000727: e.r(71, e.tw(e.cb(0, e.pc_(0, "/art and entertainment/visual art and design/design/interior design"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/art and entertainment/visual art and design/drawing"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/art and entertainment/visual art and design/painting"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/hobbies and interests/arts and crafts/woodworking"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, 75), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/home and garden/remodeling and construction"), e.ge(1), 1), 2592e6)),
                        10000728: e.r(108),
                        10000729: e.r(94, "/home and garden/bed and bath/bathroom", "/home and garden/bed and bath/bedroom", "/home and garden/home furnishings", "/home and garden/home furnishings/lamps and lighting", "/home and garden/interior decorating"),
                        10000730: e.r(102, 0, 1, 1, 0, "/art and entertainment/movies and tv/independent"),
                        10000731: e.r(102, 0, 1, 1, 0, 10),
                        10000732: e.r(102, 0, 1, 1, 0, "/art and entertainment/movies and tv/dramas"),
                        10000733: e.r(102, 0, 1, 1, 0, 12),
                        10000734: e.r(99, 12),
                        10000735: e.r(107),
                        10000736: e.r(107),
                        10000737: e.r(102, 0, 1, 1, 0, "/art and entertainment/music/music genres/jazz"),
                        10000738: e.r(102, 0, 1, 1, 0, 15),
                        10000739: e.r(102, 0, 1, 1, 0, "/art and entertainment/music/music genres/blues"),
                        10000740: e.r(102, 0, 1, 1, 0, "/art and entertainment/music/music genres/country music"),
                        10000741: e.r(102, 0, 1, 1, 0, "/art and entertainment/music/music genres/hip hop"),
                        10000742: e.r(102, 0, 1, 1, 0, 17),
                        10000743: e.r(91, "/art and entertainment/music/music genres/electronic music", 17),
                        10000744: e.r(92, 15, 16, 19),
                        10000745: e.r(102, 0, 1, 1, 0, "/news/local news"),
                        10000746: e.r(102, 0, 1, 1, 0, "/news/international news"),
                        10000747: e.r(102, 0, 1, 1, 0, "/finance/personal finance/financial planning/retirement and pension"),
                        10000748: e.r(91, 53, "/finance/personal finance/financial planning"),
                        10000749: e.r(91, 103, 104),
                        10000750: e.r(102, 0, 1, 1, 0, "/pets/aquariums"),
                        10000751: e.r(99, 12),
                        10000752: e.r(102, 0, 1, 1, 0, 86),
                        10000753: e.r(102, 0, 1, 1, 0, 85),
                        10000754: e.r(93, "/business and industrial/agriculture and forestry", "/business and industrial/agriculture and forestry/organic farming", 71, 83),
                        10000755: e.r(102, 0, 1, 1, 0, 87),
                        10000756: e.r(102, 0, 1, 1, 0, 110),
                        10000757: e.r(102, 0, 1, 1, 0, "/sports/water polo"),
                        10000758: e.r(102, 0, 1, 1, 0, "/sports/table tennis and ping-pong"),
                        10000759: e.r(102, 0, 1, 1, 0, "/sports/softball"),
                        10000760: e.r(91, "/sports/volleyball", 110),
                        10000761: e.r(102, 0, 1, 1, 0, 105),
                        10000762: e.r(102, 0, 1, 1, 0, "/sports/rowing"),
                        10000763: e.r(102, 0, 1, 1, 0, "/sports/badminton"),
                        10000764: e.r(102, 0, 1, 1, 0, "/sports/sailing"),
                        10000765: e.r(92, 103, 104, "/sports/polo"),
                        10000766: e.r(102, 0, 1, 1, 0, "/sports/skating/figure skating"),
                        10000767: e.r(102, 0, 1, 1, 0, "/sports/cheerleading"),
                        10000768: e.r(102, 0, 1, 1, 0, 98),
                        10000769: e.r(102, 0, 1, 1, 0, "/sports/weightlifting"),
                        10000770: e.r(102, 0, 1, 1, 0, "/sports/gymnastics"),
                        10000771: e.r(102, 0, 1, 1, 0, "/sports/swimming"),
                        10000772: e.r(102, 0, 1, 1, 0, "/sports/running and jogging"),
                        10000773: e.r(91, "/sports/hockey", "/sports/hockey/field hockey"),
                        10000774: e.r(102, 0, 1, 1, 0, 101),
                        10000775: e.r(72, e.tw(e.cb(0, e.pc_(0, "/sports/bicycling/mountain biking"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/climbing"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, 101), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/go kart"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/parachuting"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/scuba diving"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/skating"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, 107), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/skiing/waterskiing"), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, "/sports/snowboarding"), e.ge(1), 1), 2592e6), 0, 1, 0, e.pc_(0, "/sports/surfing and bodyboarding"), 1, 0, "/sports/canoeing and kayaking", 1, 1),
                        10000776: e.r(102, 0, 1, 1, 0, "/sports/wrestling"),
                        10000777: e.r(91, "/sports/olympics", 105),
                        10000778: e.r(102, 0, 1, 1, 0, "/sports/martial arts"),
                        10000779: e.r(102, 0, 1, 1, 0, 100),
                        10000780: e.r(102, 0, 1, 1, 0, 108),
                        10000781: e.r(95, "/art and entertainment/shows and events", 23, 42, 62, "/home and garden/luxury homes", 117, 119),
                        10000782: e.r(102, 0, 1, 1, 0, "/style and fashion/beauty/hair care"),
                        10000783: e.r(92, 114, 115, 118),
                        10000784: e.r(102, 0, 1, 1, 0, 116),
                        10000785: e.r(102, 0, 1, 1, 0, "/business and industrial/automation/robotics"),
                        10000786: e.r(102, 0, 1, 1, 0, 89),
                        10000787: e.r(91, 10, 125),
                        10000788: e.r(91, 11, 125),
                        10000789: e.r(99, 125),
                        10000790: e.r(91, 6, 125),
                        10000791: e.r(91, 7, 125),
                        10000792: e.r(91, 8, 125),
                        10000793: e.r(102, 0, 1, 1, 0, "/travel/tourist destinations/seaside resort"),
                        10000794: e.r(102, 0, 1, 1, 0, "/travel/tourist destinations/africa"),
                        10000795: e.r(102, 0, 1, 1, 0, "/travel/tourist facilities/camping"),
                        10000796: e.r(102, 0, 1, 1, 0, "/travel/tourist destinations/south america"),
                        10000797: e.r(102, 0, 1, 1, 0, "/travel/transports/road travel/road accident"),
                        10000798: e.r(102, 0, 1, 1, 0, "/travel/tourist destinations/japan"),
                        10000799: e.r(102, 0, 1, 1, 0, "/travel/tourist destinations/australia and new zealand"),
                        10000800: e.r(94, "/travel/tourist destinations/eastern europe", 132, 133, 134, 135),
                        10000801: e.r(102, 0, 1, 1, 0, 131),
                        10000802: e.r(102, 0, 1, 1, 0, 130),
                        10000803: e.r(102, 0, 1, 1, 0, 138),
                        100580: e.r(84, 0, e.a([e.y(8, 729), e.ref(36)]), e.ge(1), 1, 6, e.pc_(21, 793), e.ge(1), 1, 0, e.ref(34), e.ge(1), 1),
                        100803: e.r(77, 3, 2, 2988317492, 2988317492),
                        100882: e.q(e.ocqs([e.tw(e.cb(0, e.a([e.y(8, 729), e.ref(36)]), e.ge(1), 1), 2592e6), e.tw(e.cb(6, e.pc_(21, 793), e.ge(1), 1), 2592e6), e.scq(e.cw(4, e.pg(30, 60)), e.vq(e.sw(8, e.t, ["properties", "engaged_time"], e.g(60))), e.ge(1))])),
                        100886: e.r(85, 0, e.a([e.y(8, 729), e.ref(36)]), 6, e.pc_(21, 793)),
                        104004: e.r(84, 0, e.ref(36), e.ge(1), 1, 6, e.pc_(21, 793), e.ge(1), 1, 0, e.ref(34), e.ge(1), 1),
                        105314: e.r(58, ["sCwlyZOv"]),
                        105315: e.r(58, ["c8MiLko9"]),
                        105316: e.r(53, e.y(18, 897)),
                        105318: e.r(78, e.bsc_(23, ["83ANvqox"]), "culture_thecollection_content", "the-collec"),
                        105320: e.r(80, ["Ad3RGDqp"], 798),
                        105321: e.r(78, e.ps(23, 798), "future_familytree_content", "Family Tree"),
                        105526: e.r(80, ["JQOLNTzy"], "premium_worlds_table"),
                        105717: e.r(59, ["QGoY+hGX", "UJt9L8vT", "tQCORZi0", "zYCjOr7G"]),
                        105718: e.r(59, ["QGoY+hGX", "zYCjOr7G"]),
                        105719: e.r(59, ["UJt9L8vT", "tQCORZi0"]),
                        105851: e.r(62, [324503031, 3245598396, 3240445614, 3244276515, 3242649245, 3161682140, 3161522125, 3173182237, 3172264779, 3154429412, 3055937714, 3019042483, 3019752402, 2841568772, 2682282610, 2999259803, 2834193989, 2770890848, 2799185480, 3008409510, 2998594294]),
                        106050: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.ref(14), e.ge(2), 2), 5184e6), e.tw(e.cb(6, e.af_u(["properties", "grapeshot"], e.bsc([], ["WU2ACUzj", "xT825yNr"])), e.ge(2), 2), 5184e6)]), e.ocqs([e.cb(9, e.os(e.cx, ["article", "destinations"], [941, 882, 847, 1021, 783, 591, 825, 650, 967, 443]), e.ge(2), 2), e.cb(9, e.os(e.s, ["platform"], [443, 591, 650, 783, 825, 847, 882, 941, 967, 1021]), e.ge(2), 2)])])),
                        106248: e.r(64, 2156579277),
                        106249: e.r(66, 2156579277),
                        106370: e.r(66, 3018925106),
                        106906: e.r(61, "https://www.bbc.com/storyworks/be-it-building-on-excellence"),
                        107324: e.r(66, 3023028146),
                        107326: e.r(65, [3022411165, 3022606940]),
                        109402: e.r(0, e.ref(43), 957),
                        109408: e.r(0, e.bsc_(8, ["2KmJ+CJc", "GLoai4Us", "oyY5gTNy", "pFi3CyVJ", "s5Rl7av5"]), 897),
                        109585: e.r(81, "416134c4-057e-4254-bee6-870dff0f3f81", "109402", .7381523),
                        109586: e.r(81, "7d505c3c-29c7-4f64-a47f-a520a5a13d78", "109408", .6895669),
                        113994: e.r(41, 1, 1, 39, e.af_u(["properties", "tags"], e.bsc([], ["38zAbxRB", "3ngWN6la", "4wHdYGL3", "5ZyKG4hm", "6MYekcYY", "8NGKETk/", "9xAIwS8o", "Drrn6XXj", "F0+GLNdW", "F3gBHXar", "FIYnCIkV", "GMNFIFk9", "GNO4qAx5", "HcBDu461", "NikyADlk", "PYSovclG", "PqR69Tde", "Qe6XbCOi", "SW6UOKtl", "Wwc5e+Tz", "c56nv2kV", "dgIqAKFr", "dmJQYSsA", "gtnJmjhP", "hGuQJmyr", "idoAIaqd", "inVMYcLO", "lnzjZ9id", "ny/rDx70", "pFhyvOqU", "sE1Yxp3F", "sLq8+X8F", "xmDy8y2v", "zYwt8mxZ"])), 1, 1),
                        114028: e.r(66, 3042182312),
                        114096: e.r(82, .7369714),
                        114097: e.r(61, "storyworks/travel/time-to-escape/"),
                        114192: e.r(66, 2989138504),
                        114701: e.r(77, 3, 2, 3043169964, 3043169964),
                        114702: e.r(61, "storyworks/advertiser-content/go-beyond/"),
                        114973: e.r(82, .66708475),
                        115754: e.r(104, 6048e5, 0, e.o([e.y(18, 897), e.ps(8, 897)]), 1, 1),
                        115801: e.r(85, 1, e.os(e.s, 9, [273, 294, "co-working", "commerce", 346, 644, "profit", "revenue", "sme", "startup"]), 0, e.y(8, 727)),
                        116152: e.q(e.cb(7, e.as(e.x, ["ctry"], [null, 0]), e.ge(1), 1)),
                        116153: e.q(e.sq(e.cb(7, e.as(e.x, 19, [null, 0]), e.ge(1), 1))),
                        116930: e.r(87, e.a([e.pc_(22, 163), e.bsc_(8, ["FFuxT0z/", "hDe4Oq6q"])]), 2, 2, 6, e.af_u(["properties", "grapeshot"], e.bsc([], ["n4E23mml", "siG4tIgb"])), 2, 2),
                        117410: e.r(66, 3065098272),
                        117411: e.r(73, 2, e.pe(4, 3067388564), 3, e.pe(4, 3067388564), 2, e.pe(4, 3067388114), 3067388114),
                        120510: e.r(77, 3, 2, 3059224949, 3059224949),
                        120744: e.q(e.ocqs([e.tw(e.cb(1, e.a([e.ps(1, 571), e.ref(53)]), e.ge(2), 2), 7776e6), e.tw(e.cb(6, e.af_u(["properties", "grapeshot"], e.bsc([], ["0bCJCHdP", "iEkycEFC"])), e.ge(2), 2), 7776e6), e.tw(e.cb(0, e.a([e.ps(1, 571), e.ref(51)]), e.ge(2), 2), 7776e6), e.tw(e.cb(0, e.a([e.os(e.cx, 22, ["Pensions", "Banking", "Investment-management"]), e.os(e.cx, 25, ["Money", "Business"]), e.os(e.s, 28, [273, 294, 599, "private bank", "trust fund", 971])]), e.ge(2), 2), 7776e6)])),
                        120787: e.r(56, 1, ["https://www.bbc.com/culture/article/20220825-longshots-2022-the-directors-behind-the-shortlisted-films", "https://www.bbc.com/culture/article/20220825-longshots-festival-six-films-that-take-us-on-a-journey", "https://www.bbc.com/culture/article/20220826-longshots-2022-meet-the-esteemed-film-festival-jury", "https://www.bbc.com/culture/article/20220830-longshots-2022-six-outstanding-short-films-to-stream", "https://www.bbc.com/reel/longshots"]),
                        122439: e.r(77, 3, 2, 3084542392, 3084542392),
                        122601: e.r(66, 3084542392),
                        122872: e.r(61, "https://www.bbc.com/storyworks/thailand-gateway-to-asia/easing-the-expat-experience-new-visa-makes-thailand-more-business-friendly"),
                        123650: e.r(77, 3, 2, 3091748046, 3091748046),
                        124030: e.r(56, 1, ["https://www.bbc.co.uk/news/av/business-63304623", "https://www.bbc.co.uk/news/business-62894499", "https://www.bbc.co.uk/news/business-63260648", "https://www.bbc.com/news/av/business-63459642", "https://www.bbc.com/news/business-44813754", "https://www.bbc.com/news/business-63460919"]),
                        124278: e.q(e.ocqs([e.tw(e.cb(1, e.os(e.s, 16, [274, 373, 381, 434, 643, 669, 670, 991, 995]), e.ge(2), 2), 7776e6), e.tw(e.cb(6, e.af_u(["properties", "grapeshot"], e.bsc([], ["rao7jCdv", "uACAcNLB"])), e.ge(2), 2), 7776e6), e.tw(e.cb(0, e.a([e.os(e.s, 17, ["bbccom.live.site.news", "bbccom.live.site.worklife"]), e.os(e.s, 8, [727, "news_technology_content"]), e.os(e.s, 1, [273, 373, 381, "evp", 434, 643, 669, 670, "svp", 991])]), e.ge(2), 2), 7776e6)])),
                        124457: e.r(77, 3, 2, 3097249439, 3097249439),
                        124656: e.r(77, 3, 2, 3093551512, 3093551512),
                        125148: e.r(102, 6, 3, 3, 21, "pr_bbc_tradeevent"),
                        125544: e.q(e.ocqs([e.cb(0, e.af_u(["properties", "topics"], e.bsc([], ["nwMEGAcn", "qmgmiyHV"])), e.ge(1), 1), e.cb(1, e.bsc_(1, ["R0vQ4ArI"]), e.ge(1), 1)])),
                        127898: e.r(56, 1, ["storyworks/advertiser-content/ngk-innovators-of-tomorrow", "storyworks/future/ngk-innovators-of-tomorrow"]),
                        131874: e.r(104, 864e5, 2, e.pe(4, 2850054406), 1, 1),
                        132239: e.r(61, "https://www.bbc.com/storyworks/transforming-cities/"),
                        132347: e.r(72, e.cb(2, e.os(e.e, 4, [3135720647, 3128365881, 3126381090, 157696578, 3029418957, 147517218, 3019030689, 3085514596, 2828085084, 380042178, 3039727134, 3094157412, 3095799304, 3095665084, 3080268137, 3107783189, 3101434967, 3117529182]), e.ge(1), 1), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 92185)), e.cw(5, e.pe(14, 92185)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 91050)), e.cw(5, e.pe(14, 91050)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 91049)), e.cw(5, e.pe(14, 91049)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 75270)), e.cw(5, e.pe(14, 75270)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 71816)), e.cw(5, e.pe(14, 71816)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 55747)), e.cw(5, e.pe(14, 55747)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 88505)), e.cw(5, e.pe(14, 88505)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 88504)), e.cw(5, e.pe(14, 88504)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 77811)), e.cw(5, e.pe(14, 77811)), e.ge(1)), 6, 3, 1, e.os(e.s, 9, [173, 179, 185, 186, 188, 258, 299, 300, 361, 396, 440, 506, 510, 547, 556, 560, 561, 562, 579, 623, 627, "kkday", 628, 665, 704, 757, 768, 799, 857, 874, 876, 944, 959, 960, 961, 963, 964, 990]), 3, 21, "gs_travel", 3, 3),
                        132352: e.r(88, e.os(e.s, 31, ["action sports", 176, "alpine ski racing", "backpacking", "bodyboard", "bungee jumping", 283, "canyoning", 383, "extreme pogo", "extreme skiing", 442, 476, "flowriding", "freeride", "freerunning", "freeskiing", 546, 575, "ice climbing", "ironman triathlon", 624, "motocross", 710, "mountian climbing", 759, "paragliding", "parkour", "power boating", "rock climbing", "rowing", "slacklining", "surfing", "trekking", "wakeboard", "waterski", "wildlife safari"]), 6, e.af_u(["properties", "grapeshot"], e.bsc([], ["+5qA5Lwh", "/Wel74AD", "8ZcTHyct", "9xZGTzV7", "BLRKrso0", "DMB5V3nP", "DlJLkOzB", "IlzOyKRX", "QJxR83a9", "QnfHzNBI", "VH4zrrUC", "i0rUsWaO", "m9CQJ6UT", "nH31/Qhf", "rtjtt4iO", "sR3HCZpw"]))),
                        133758: e.r(77, 2, 3, 3067488692, 3067488692),
                        133789: e.r(77, 2, 3, 3109367699, 3109367699),
                        133840: e.r(106, 1, 1, e.ref(50), 25, ["Public Transport", "Transport", "Train", "Electric car"], e.cx, 22, ["Aviation-safety", "Rail-travel", "Air-travel", "Bus-travel", "Electric-bikes-and-scooters", "Motoring", "Driverless-cars", "Electric-cars"], 20, [287, "department for transport - bbc news", 489]),
                        134038: e.r(56, 1, ["https://www.bbc.com/storyworks/travel/a-new-way-to-explore-japan/from-kintsugi-to-tsuiki-lessons-from-japanese-craft-masters", "https://www.bbc.com/storyworks/travel/a-new-way-to-explore-japan/lessons-on-mindfulness-and-self-discovery-from-japans-mountains"]),
                        134592: e.r(77, 3, 2, 3129366900, 3129366900),
                        136107: e.q(e.acqs([e.tw(e.cb(6, e.af_u(["properties", "grapeshot"], e.bsc([], ["EBEQCKRW", "SCenZrl1", "x81EAh8/", "xaIcs02s"])), e.ge(3), 3), 2592e6), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 63713)), e.cw(5, e.pe(14, 63713)), e.ge(1))])),
                        137537: e.r(77, 3, 2, 3110897439, 3110897439),
                        139769: e.r(77, 3, 2, 3099250060, 3099250060),
                        139919: e.r(58, ["2KmJ+CJc"]),
                        139922: e.r(58, ["s5Rl7av5"]),
                        139926: e.r(58, ["oyY5gTNy"]),
                        139930: e.r(58, ["W+3Kn65Q"]),
                        139943: e.r(58, ["a2CvlEfd"]),
                        139946: e.r(58, ["IrZutmFB"]),
                        139950: e.r(58, ["uNo162Jz"]),
                        139957: e.r(58, ["ITfSvpTP"]),
                        140685: e.r(84, 0, e.o([e.y(8, 898), e.ps(13, "sportfootballwomensworldcup")]), e.ge(3), 3, 1, e.os(e.s, 1, [460, "women's world cup", "womens world cup"]), e.ge(3), 3, 6, e.pc_(21, "bbc_womens_football"), e.ge(3), 3),
                        143330: e.q(e.acqs([e.cb(0, e.os(e.s, 24, [565, 566, 567, 568, 573]), e.ge(1), 1), e.cb(0, e.os(e.s, 1, ["https://www.bbc.com/news/av/stories-62325802", "https://www.bbc.com/news/av/world-62519493", "https://www.bbc.com/news/av/world-asia-china-59906706", "https://www.bbc.com/news/av/world-europe-62637627", "https://www.bbc.com/news/av/world-latin-america-62392233", "https://www.bbc.com/news/av/world-middle-east-60350876", "https://www.bbc.com/news/av/world-us-canada-62696077", "https://www.bbc.com/reel/video/p0816p3b/the-secret-lives-of-yakuza-women", "https://www.bbc.com/reel/video/p0ckfxtn/the-earthquake-that-changed-the-course-of-history", "https://www.bbc.com/reel/video/p0cpl9nf/why-the-mysterious-scottish-broch-is-making-a-return", "https://www.bbc.com/reel/video/p0cqglhs/the-complicated-legacy-of-spain-s-super-rich-indianos-", "https://www.bbc.com/reel/video/p0cqnfbv/the-japanese-man-who-gets-paid-to-do-nothing-", "https://www.bbc.com/reel/video/p0cr5jrj/the-world-s-first-long-distance-car-journey", "https://www.bbc.com/reel/video/p0crc7bb/china-s-huge-and-mysterious-xiaozhai-tiankeng-sinkhole", "https://www.bbc.com/reel/video/p0cry99y/joseph-boulogne-the-musical-genius-you-ve-never-heard-of", "https://www.bbc.com/reel/video/p0ctd635/the-monster-that-terrified-georgian-london"]), e.ge(1), 1)])),
                        144127: e.q(e.ocqs([e.cb(0, e.ref(28), e.ge(1), 1), e.cb(0, e.os(e.s, 1, ["https://www.bbc.co.uk/news/extra/z8i55dsu8w/spain-morocco-border?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/health-63602501?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/health-63749586?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/uk-64125531?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/uk-64223264?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/world-63297797?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/world-africa-64032268?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/world-asia-63830490?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/world-asia-china-63386954?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/world-europe-62799246?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]", "https://www.bbc.com/news/world-us-canada-64034588?xtor=cs3-32-[news_c__gnl_q4_22-23]-[facebook]-[{{campaign.id}}]-[{{creative.id}}]"]), e.ge(1), 1)])),
                        144128: e.r(79, ["+LEyrbDh", "ERbY09gH", "LJEpwrBu", "UIt5/ce/", "WKmnKzM9", "cX2IbZeF", "mk8+F6QM", "nsUBDbRE", "tOPUm0g5", "zRg8CMyS"]),
                        144132: e.r(79, ["9zL65NXW", "CI+DhuAz", "EHPdbCrX", "M/9aS+KT", "V6YK8yD2", "VMzeqv8B", "Yp1v6dTA", "tPzZ3JMX", "v44XRsTg", "yX/HvQVw"]),
                        144149: e.r(74, 0, 0, e.bsc_(1, ["+IbAIwgt", "/3YYpz1w", "3v9tUGTx", "6/T0y1Ll", "7NQqZBXb", "IJsd2EJ9", "JiXMYsBW", "LlvJAl42", "OvggfaKa", "Z0cqSlym"]), e.s, 24, ["http://www.google.com/search", "https://google.com", "https://googleads.g.doubleclick.net"]),
                        146705: e.r(56, 1, ["https://www.bbc.com/storyworks/travel/selamat-kembali-to-malaysia"]),
                        146734: e.r(55, e.bsc_(8, ["9Tl6LLsg", "mgS9bl1s"]), 23, "discovery"),
                        146736: e.r(55, e.os(e.s, 23, [178, "antarctica", 205, "australia_and_pacific", "caribbean", "central_america", 429, "middle_east", "north_america", "south_america"]), 13, "destinations"),
                        149125: e.q(e.scq(e.sw(4, e.y(18, 726), ["properties", "aggregations", "PageviewEngagement", "engaged_time"]), e.vq(e.sw(8, e.y(18, 726), ["properties", "engaged_time"])), e.g(60))),
                        153381: e.r(90, 1, e.ps(1, "https://www.bbc.com/sport/olympics"), [e.y(7, 749), e.y(13, 749), e.os(e.cx, 5, ["Olympics", "Paris 2024 Olympics", "paris_2024_olympics", "Olympic Games", 749]), e.os(e.cx, 22, [908, "winter-olympics", "olympcis", "olympic"]), e.os(e.s, 13, [749])]),
                        157232: e.r(77, 2, 3, 3221701105, 3221701105),
                        157446: e.r(77, 2, 3, 3223951663, 3223951663),
                        157502: e.r(76, 3, 2, 12, 12),
                        158629: e.r(56, 1, ["http://www.bbc.com/storyworks/advertiser-content/the-endangered-generation/monash-university-addressing-challenges-facing-future-generations", "https://www.bbc.com/reel/playlist/future-planet"]),
                        162087: e.r(36, e.cb(0, e.y(27, 144), e.ge(1), 1), e.y(8, 898), 3, 3, e.os(e.w, ["client", "type"], [607, "android"]), e.ge(1), 1),
                        162553: e.r(90, 6, e.af_u(["properties", "grapeshot"], e.bsc([], ["C5BCNHCM", "RMzsPHFl"])), [e.y(13, 749), e.os(e.cx, 5, ["summer_olympics", "summer_olympic"]), e.pc_(22, 908)]),
                        164201: e.r(77, 2, 3, 3232098901, 3232098901),
                        166283: e.r(56, 1, ["https://www.bbc.com/storyworks/travel/a-portrait-of-macao/a-feast-for-the-senses", "https://www.bbc.com/storyworks/travel/a-portrait-of-macao/macao-through-the-eyes-of-artists", "https://www.bbc.com/storyworks/travel/a-portrait-of-macao/macaos-melting-pot-where-history-meets-modernity", "https://www.bbc.com/storyworks/travel/specials/a-portrait-of-macao/"]),
                        167455: e.r(9, 0, 1, e.ref(0), 37, 26),
                        167456: e.r(84, 1, e.os(e.s, 9, [173, 179, 185, 186, 188, 258, 299, 300, 361, 396, 440, 506, 510, 547, 556, 560, 561, 562, 579, 623, 627, 628, 665, 704, 757, 768, 799, 857, 874, 876, 944, 959, 960, 961, 963, 964, 990]), e.ge(3), 3, 0, e.os(e.s, 1, [237, "hilton", "hyatt", "tourism", 949, 984]), e.ge(3), 3, 0, e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "beach vacation"), e.s_(2, "most popular tourism destinations"), e.s_(2, 873), e.s_(2, "summer vacations"), e.s_(2, 949), e.s_(2, 957), e.s_(2, "vacation days")])), e.ge(3), 3),
                        167457: e.r(19, ["academic", 336, "dean", "educator", "faculty", "harvard", "ivy league", "mentor", "oxford", "princeton", "professor", "teacher", "teaching", "tenure", 973, "yale"], [e.s_(6, 45), e.s_(6, 93)]),
                        167458: e.q(e.acqs([e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 89780)), e.cw(5, e.pe(14, 89780)), e.ge(1)), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167459: e.r(9, 1, 0, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 30), e.s_(6, 37), e.s_(6, 56), e.s_(6, 80)])), 51, 53),
                        167460: e.r(19, ["f1", 483, "sport/formula1"], [e.s_(6, 98)]),
                        167461: e.r(8, 1, 9, [226, 280, 550, 707, 760, 822, 826, "taxes"], e.o([e.s_(6, 84)]), [e.s_(2, "apartment buildings"), e.s_(2, 551), e.s_(2, "home owner"), e.s_(2, "homeowner"), e.s_(2, "homes"), e.s_(2, 707), e.s_(2, 822), e.s_(2, 826)]),
                        167462: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.a([e.ref(14), e.os(e.s, 1, [273, 643, 850, 924])]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance/business\tbusiness i.t."), e.s_(6, "/business and finance/business/business operations"), e.s_(6, "/business and finance/industries/technology industry"), e.s_(6, 38), e.s_(6, 39), e.s_(6, "/business and industrial/business software"), e.s_(6, "/technology & computing/computing/computer networking"), e.s_(6, "/technology & computing/computing/data storage and warehousing"), e.s_(6, "/technology & computing/computing/information and network security"), e.s_(6, "/technology & computing/computing/internet/cloud computing"), e.s_(6, "/technology and computing/hardware"), e.s_(6, 126)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "business technology"), e.s_(2, "tech savvy"), e.s_(2, "technology savvy")]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167463: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, ["celebirty", 297, 474, 475, 523, 532, 535, 537, "luxurious", 661, 756, "opulent", 837, 869, "vogue"]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [261, "celebrity", 297, 457, 523, 535, 658, 661, 666, "opening night", 756, 837, 869, 957]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 23), e.s_(6, 28), e.s_(6, "/shopping/retail/department stores"), e.s_(6, 112), e.s_(6, 119), e.s_(6, "/travel/specialty travel")])), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167464: e.r(8, 0, 1, [581], e.s_(6, 581), [e.s_(2, 581)]),
                        167466: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.bsc_(1, ["LSXfbeJH", "LcBSECIb", "LoCtW/pZ", "ep/sYBlU", "iNEp/2Gl", "sl9Zh0TS", "tc8R+sxE"]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [273, 861, 862]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance/business"), e.s_(6, 39), e.s_(6, "/business and industrial/company")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 279), e.s_(2, 306), e.s_(2, "leadership"), e.s_(2, 862)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 294), e.s_(2, 365), e.s_(2, 373), e.s_(2, 643), e.s_(2, 861)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167467: e.r(21, ["central-america", "latin", "south-america"], [196, "bolivia", 265, "central america", 312, 337, "costa-rica", "economy", "ecuador", 692, 726, 762, "paraguay", 789, 894, 975], ["properties", "classifications_watson", "entities"], [e.s_(2, 196), e.s_(2, 265), e.s_(2, 312), e.s_(2, 337), e.s_(2, 641), e.s_(2, 692), e.s_(2, 762), e.s_(2, 894), e.s_(2, 975)], [e.s_(2, 196), e.s_(2, 265), e.s_(2, 312), e.s_(2, 337), e.s_(2, "costa rica"), e.s_(2, 641), e.s_(2, 692), e.s_(2, 762), e.s_(2, 894)]),
                        167468: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, [643, 930]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 9, [203, 298, 930, 999]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.ref(3), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 643), e.s_(2, 862), e.s_(2, "technical director"), e.s_(2, 930)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167471: e.r(30, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 22), e.s_(6, 25), e.s_(6, 27), e.s_(6, 90), e.s_(6, 92), e.s_(6, 93), e.s_(6, "/travel/specialty travel/ecotourism")])), [319, "eco conscious", "eco friendly", 399, 400, 402, 406, "esg", "hybrid-cars", 784, 910, 911], [319, 399, 400, 402, 406, 576, 910, 911], [e.s_(2, 319), e.s_(2, "electric car"), e.s_(2, "electric vehicle"), e.s_(2, "pollution"), e.s_(2, 910), e.s_(2, 912), e.s_(2, "sustainable tourism"), e.s_(2, "sustainable transport")]),
                        167472: e.r(21, [374, 378, "diy", "hardscape", 553, 554, "home-interior", 637, 830], [374, 378, "home and garden", 553, 554, 637, 830], ["properties", "classifications_watson", "categories"], [e.s_(6, "/home & garden"), e.s_(6, 73)], [e.s_(2, 374), e.s_(2, "garden design"), e.s_(2, "home improvement"), e.s_(2, "interior design")]),
                        167473: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, [313, "communist-party", 726, 789]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 313), e.s_(2, "chinese military")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 313)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167474: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, [494, 608, 609, 612, 849, 920, 968, "united-aram-emeirates", 1020]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, ["ifaq", 608, "isael", 849, 920, 968, "unite-arab-emirates", 1020]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 494), e.s_(2, 608), e.s_(2, 609), e.s_(2, "island"), e.s_(2, 612), e.s_(2, 695), e.s_(2, 848), e.s_(2, 920), e.s_(2, "yemeni revolution")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 608), e.s_(2, 609), e.s_(2, "islamabad"), e.s_(2, 612), e.s_(2, 695), e.s_(2, 848), e.s_(2, "saudi pro league"), e.s_(2, 920), e.s_(2, 968), e.s_(2, "united arab emirates"), e.s_(2, 1020)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        167475: e.r(18, 9, [824, 832, 887, 889, 911, "waste management", 1005, 1007], [e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 31), e.s_(6, 36), e.s_(6, 41), e.s_(6, 90), e.s_(6, "/science/ecology/waste management")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 824), e.s_(2, 832), e.s_(2, 889), e.s_(2, 910), e.s_(2, 1007)])), e.os(e.s, 7, [856, 909, "sustainable-business"]), e.af_u(["properties", "coll"], e.bsc([], ["B6rZH0h0", "HqYKNRXv", "dbczXONU", "sdIRmwho", "yyXgJpo+"]))], e.s, 1, [824, 832, 887, 889, "sustainable energy", 1005, 1007]),
                        167476: e.r(6, 0, 1, 9, [317, 365, 373, 414, 493, 611, 831, "senior leader", 889, 982, 983], [e.ref(52), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 832), e.s_(2, 833), e.s_(2, 862), e.s_(2, 889), e.s_(2, "solar wind"), e.s_(2, 910), e.s_(2, 912), e.s_(2, 1007)]))], [e.y(10, 589), e.y(7, 930), e.os(e.s, 1, [317, "ctio", 365, 373, 407, 414, 493, 611, 643, "oil & gas", 831, 862, 911]), e.af_u(["properties", "coll"], e.bsc([], ["HqYKNRXv", "MPehbFGj"]))]),
                        167477: e.r(18, 1, [491, 930], [e.y(10, 589), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 122), e.s_(6, 124), e.s_(6, 126)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "educational technology"), e.s_(2, 409), e.s_(2, "gadgets"), e.s_(2, 719), e.s_(2, "wearable technology")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 409), e.s_(2, "games"), e.s_(2, 786), e.s_(2, 929)])), e.ref(46), e.af_u(["properties", "coll"], e.bsc([], ["3vSJFyc7", "HqYKNRXv", "MPehbFGj"]))], e.s, 1, ["fin-tech", "gadget", 491, 786, "ps3", 930, "wearable"]),
                        168072: e.r(57, ["0yi1fr5R", "qmCo5gHQ"]),
                        168172: e.r(64, 3252779700),
                        171207: e.r(66, 3244639384),
                        172214: e.r(20, [290, 399], e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 22), e.s_(6, 25), e.s_(6, 27)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "hybrid vehicle"), e.s_(2, "plug-in electric vehicle"), e.s_(2, 787), e.s_(2, "tesla motors"), e.s_(2, "toyota prius")])), [218, 219, 576, 914, 915], ["automobile", 219, 576, 913], ["properties", "classifications_watson", "keywords"], [e.s_(2, 399), e.s_(2, 405), e.s_(2, 576), e.s_(2, 913)]),
                        172215: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.a([e.os(e.s, 9, [215, 217, 255, 282, 286, 394, 395, 484, 555, 576, 577, 585, 616, 626, 632, 636, 649, 687, 792, 796, 815, 820, 858, 916, 917, 945, 946, 950, 994]), e.os(e.s, 1, [214, 215, 217, 255, 282, 286, 358, 360, 394, 395, 484, 500, 555, 576, 577, 585, 626, 632, 635, 649, 687, 792, 796, 820, 858, 916, 917, 950, 994])]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.pc_(25, "Automobile"), e.os(e.s, 1, [215, 217, 255, 282, 286, 394, 395, 484, 555, 576, 577, 585, 616, 626, 632, 636, 649, 687, 792, 796, 815, 821, 858, 916, 917, 946, 950]), e.af_u(["properties", "topics"], e.bsc([], ["+1nu55GA", "36Nol9DX", "O08REuJ9", "Ua7Csgaq", "UzlQdEoj", "dB+GTO9M", "s98mizJ0"]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 290), e.s_(2, 987)])), e.ref(15), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 286), e.s_(2, 787), e.s_(2, 987)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        172216: e.r(31, [215, 217, 255, 282, 286, 360, 394, 395, 484, 555, 576, 577, 585, 616, 626, 632, 636, 649, 687, 698, 792, 796, 815, 821, 858, 916, 917, 945, 946, 950], e.ref(15), [215, 217, 255, 282, 286, 394, 395, 484, 555, 576, 577, 585, 616, 626, 632, 636, 649, 687, 792, 796, 815, 858, 916, 917, 945, 946, 950, 994], [215, 217, 255, 282, 350, 359, 360, "fiat", 500, 555, 576, 577, 585, 615, 626, 632, 635, 636, 649, 676, 687, 698, 792, 796, 820, 858, 916, 917, 945, 946, 950, 994], ["properties", "classifications_watson", "keywords"], ["properties", "classifications_watson", "concepts"], [e.s_(2, 286), e.s_(2, 576), e.s_(2, 987)], [e.s_(2, 286), e.s_(2, 987)]),
                        172218: e.r(20, [290, 359, 360, 399, 445, 505, "large car", 698, 703, "soccer mom", 916, 966, 987], e.ref(23), e.ref(23), [218, 219, 286, 359, 360, "ford", 505, 576, 698, 914, 915, 916, 966, 987], [217, 358, 360, 698, 703, 916, 966, 987], ["properties", "classifications_watson", "categories"], [e.s_(6, "/automotive and vehicles/cars/crossover"), e.s_(6, 24), e.s_(6, "/automotive and vehicles/cars/wagon"), e.s_(6, "/automotive and vehicles/minivan"), e.s_(6, "/automotive/auto body styles/crossover"), e.s_(6, "/automotive/auto body styles/sedan"), e.s_(6, "/automotive/auto body styles/station wagon"), e.s_(6, "/automotive/auto body styles/van")]),
                        172219: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.a([e.os(e.s, 9, [215, 217, 255, 281, 282, 286, 394, 395, 555, 576, 577, 580, 585, 595, 616, 626, 632, 636, 649, 687, 792, 796, 858, 869, 916, 917, 945, 946, 950, 994]), e.os(e.s, 1, [214, 215, 217, 255, 281, 282, 286, 358, 360, "dealership", 394, 395, 500, 555, 576, 577, 580, 585, 595, 626, 632, 635, 649, 792, 796, 858, 869, 916, 917, 950, 994])]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.os(e.s, 1, [215, 217, 255, 281, 282, 286, 394, 395, 555, 576, 577, 580, 585, 616, 626, 632, 636, 649, 687, 792, 796, 814, 821, 858, 916, 917, 946, 950]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.ps(15, 794), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 286), e.s_(2, "purchasing"), e.s_(2, 987)])), e.ref(15), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 405), e.s_(2, 987)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        172220: e.r(14, 0, 1, [592], e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 592)])), e.af_u(["properties", "classifications_watson", "concepts"], e.ref(19)), ["properties", "classifications_watson", "keywords"], e.ref(19)),
                        172221: e.r(31, ["acura", 209, 215, 240, 255, 270, 282, "grand cherokee", 585, 630, 634, 636, 649, 657, 679, 687, 761, 792, 841, "volvo"], e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 23), e.s_(6, 28)])), [209, 215, 240, 255, 270, 282, 350, 458, 500, 576, 585, 615, 630, 632, 634, 636, 649, 657, 676, 679, 687, 761, 792, 820, 841, 946], [209, 215, 240, 255, 270, 282, 350, 500, 585, 615, 630, 632, 634, 635, 649, 657, 676, 679, 687, 761, 792, 820, 841, 946], ["properties", "classifications_watson", "concepts"], ["properties", "classifications_watson", "keywords"], [e.s_(2, 209), e.s_(2, 215), e.s_(2, 240), e.s_(2, 255), e.s_(2, 282), e.s_(2, "jaguar land rover"), e.s_(2, 649), e.s_(2, "luxury vehicle"), e.s_(2, "mercedes-amg"), e.s_(2, 792), e.s_(2, 841)], [e.s_(2, 215), e.s_(2, 255), e.s_(2, "luxury cars"), e.s_(2, 792), e.s_(2, "team mercedes")]),
                        172225: e.r(43, e.pc_(11, "rail_journeys"), e.ref(50), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/automotive and vehicles/cars/diesel"), e.s_(6, "/automotive and vehicles/vehicle rental"), e.s_(6, "/automotive/auto rentals"), e.s_(6, 33), e.s_(6, "/business and industrial/business operations/management/supply chain management"), e.s_(6, 137), e.s_(6, "/travel/travel type")])), ["properties", "classifications_watson", "concepts"], [e.s_(2, "bus"), e.s_(2, "lyft"), e.s_(2, "planes"), e.s_(2, "taxi"), e.s_(2, 955), e.s_(2, 956), e.s_(2, "uber")], 2, 956),
                        172275: e.r(77, 2, 3, 3238350457, 3238350457),
                        172884: e.r(56, 1, ["https://www.bbc.com/storyworks/generating-dreams/how-generative-ai-can-work-for-everyone-from-hobbyists-to-holiday-photo-perfectionists", "https://www.bbc.com/storyworks/generating-dreams/the-new-realm-of-creativity"]),
                        172948: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.y(10, 273), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 141), e.s_(2, 226), e.s_(2, 467), e.s_(2, "international markets"), e.s_(2, 675), e.s_(2, 721), e.s_(2, "s&p 500"), e.s_(2, 904), e.s_(2, "the dow")])), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 30), e.s_(6, 54), e.s_(6, 56), e.s_(6, 80)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 467), e.s_(2, "financial literacy"), e.s_(2, 473), e.s_(2, 721), e.s_(2, 903)]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [141, "advisor", 226, 464, 606, 675]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173664: e.r(77, 2, 3, 3260671082, 3260671082),
                        173876: e.r(23, [226, 248, 273, 353, 362, 372, 464, 596, 601, 653, 705, 745, 755, 902, 923], [e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance"), e.s_(6, 37)])), e.af_u(["properties", "classifications_watson", "concepts"], e.ref(49)), e.af_u(["properties", "classifications_watson", "keywords"], e.ref(49))], [e.y(10, 273), e.os(e.cx, 5, ["department_for_business", 932, "business_in_africa", 206, "business_trip", 879, 273, "fraud"]), e.os(e.s, 7, [273])]),
                        173877: e.r(23, [277, 341, 411, 648, 668, 693, 699, 741, 872, 877, 943], [e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, "Small business")), e.af_u(["properties", "classifications_watson", "keywords"], e.s_(2, 878))], [e.pc_(5, 879), e.os(e.s, 1, [277, 340, 410, 648, 668, 693, 699, "minute", 741, 877, 943, 1013])]),
                        173878: e.r(25, 1, ["big", 277, 341, 343, 411, 420, "grand", 639, 668, 741, 872, "vast"], e.pc_(5, "company-size"), e.os(e.s, 1, ["big company", 277, 341, 343, 410, 420, "grand size", "huge", 639, 741, "sizable", 872, 1013]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 341), e.s_(2, 349), e.s_(2, 640)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 339), e.s_(2, 343), e.s_(2, 640)]))),
                        173879: e.r(26, [411, 639, 668, 683, 693, 741, "scale", 871, 877], [349, "large_business", 278, "business-size", "medium-business", 879], [277, 340, 410, 639, 668, 683, 693, 741, 877], ["properties", "classifications_watson", "keywords"], [e.s_(2, "businesses"), e.s_(2, 339), e.s_(2, 640)]),
                        173880: e.r(28, 1, [263, 273, 341, "individual owner", "individual proprietor", "limited liability company", 671, 867, 872], e.os(e.s, 1, [263, 273, 340, 671, 693, 760, 867, 877, "sole proprietor"]), [879, "business_owner"], [e.s_(2, 279), e.s_(2, "ownership"), e.s_(2, "small business")], [e.s_(2, "business owners"), e.s_(2, 878)]),
                        173881: e.r(26, [220, 411, 683, 741, 871], ["mid_size", "medium_size", 278], [220, 277, 341, 410, 683, 694, "midsize", 741, 872], ["properties", "classifications_watson", "concepts"], [e.s_(2, "medium-size business"), e.s_(2, 694)]),
                        173883: e.r(13, 1, ["administrator", 273, 423, 434, 485, 584, 606, 859, "self-employment"], e.os(e.s, 1, ["angel investor", 423, 485, 584, 859, "vc"]), e.os(e.cx, 5, [584, "self_employed", "venture_capital", "VC", 485, 424]), ["properties", "classifications_watson", "keywords"], ["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 424), e.s_(2, 485), e.s_(2, 859)]), [e.s_(2, "exit of its co-founder"), e.s_(2, "incorporate business ventures"), e.s_(2, 859), e.s_(2, "tech entrepreneur")]),
                        173884: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.a([e.ref(22), e.ref(30)]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.ref(33), e.ref(4), e.ref(20)]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173888: e.r(7, 1, 0, 0, e.af_u(["properties", "top_tags"], e.bsc([], ["7QIJuoCy", "n/ptSq92"])), [e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 58), e.s_(6, "/personal finance/personal debt")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "accreditation"), e.s_(2, 269), e.s_(2, "credit card"), e.s_(2, "credit management"), e.s_(2, "debt limit"), e.s_(2, "debt management"), e.s_(2, "personal credit"), e.s_(2, "wealth management")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 269), e.s_(2, 353), e.s_(2, 372)]))], e.s, 24, ["bankrupt", 353, "https://www.clearscore.com/", "https://www.equifax.com/", "https://www.experianplc.com/", "https://www.moneysupermarket.com/", "https://www.paysafe.com/", "insolvency"]),
                        173889: e.r(13, 9, [246, 493, "nuclear energy", 982, 983], e.os(e.cx, 5, [835, 407, 328, 740, 246, "gaoline", 722, 983, 418, 170, 417]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 36), e.s_(6, 41), e.s_(6, "/business and industrial/mining industry")])), ["properties", "classifications_watson", "concepts"], ["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "clean energy"), e.s_(2, "diesel generators"), e.s_(2, 416), e.s_(2, 492), e.s_(2, 738), e.s_(2, 746), e.s_(2, 832)]), [e.s_(2, 328), e.s_(2, "diesel engine"), e.s_(2, 414), e.s_(2, 492), e.s_(2, 739), e.s_(2, "nuclear power"), e.s_(2, 747), e.s_(2, "refinery"), e.s_(2, 983)]),
                        173890: e.r(11, 1, 3, 3, [e.os(e.cx, 5, [835, 722, 748, "nuclear_fusion_", 740, "wind_turbines", 1008, 1009, 170, 418, 417, "energy_storage", 414, 891, 890]), e.ref(52), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 415), e.s_(2, 493), e.s_(2, 739), e.s_(2, 747), e.s_(2, 832), e.s_(2, 833), e.s_(2, 889), e.s_(2, 1006)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 414), e.s_(2, 492), e.s_(2, 738), e.s_(2, 746), e.s_(2, 834), e.s_(2, 888)])), e.ref(7), e.os(e.s, 7, ["climate-change", "science-environment", 856]), e.af_u(["properties", "coll"], e.bsc([], ["B6rZH0h0", "HS+AJ1Xr", "HqYKNRXv", "dbczXONU", "sdIRmwho", "uZrCymVi", "ymknErO7", "yyXgJpo+"]))], 9, [414, 493, 611, 889, 982, 983]),
                        173891: e.r(4, 0, 1, e.os(e.s, 9, [887, 889, 982]), 235, [e.ps(7, 856), e.os(e.cx, 5, [740, 522, 722, 748, 890, 1008, 1009, 835, 891]), e.ref(52), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 328), e.s_(2, 415), e.s_(2, 493), e.s_(2, 739), e.s_(2, 832), e.s_(2, 833), e.s_(2, 889), e.s_(2, 1006)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 416), e.s_(2, 492), e.s_(2, 832), e.s_(2, 834), e.s_(2, 888), e.s_(2, 1006)])), e.ref(7), e.af_u(["properties", "coll"], e.bsc([], ["B6rZH0h0", "HqYKNRXv", "Xb6bH3On"]))]),
                        173895: e.q(e.acqs([e.tw(e.cb(0, e.a([e.pc_(11, 450), e.ps(7, 444), e.os(e.s, 16, ["baby", "first-time mom", "newborn", 743, 800, "toddler"]), e.os(e.cx, 5, [444, 766]), e.ref(8), e.ref(1), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 765)]))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173896: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 16, [310, "family holidays", 743, 765, 851, "special-needs-child", "teens"]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.os(e.cx, 5, ["family_planning", 449, 444, "parenthood", 766]), e.ref(8), e.ref(1), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "families"), e.s_(2, 444), e.s_(2, 765)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173897: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 46), e.s_(6, 47), e.s_(6, 48)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 172), e.s_(2, 276), e.s_(2, 387), e.s_(2, 541), e.s_(2, 677), e.s_(2, 780)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "academic circles"), e.s_(2, 172), e.s_(2, 276), e.s_(2, 387), e.s_(2, 541), e.s_(2, "masters degree"), e.s_(2, 678), e.s_(2, 780)]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, ["booth school of business", 276, "dental school", "doctoral", 387, 516, 518, "haas school of business", "intend", "intention", "juris", 625, "law school", 677, 678, 680, "nyu stern", 780, "post grad", "postgrad", 1002]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173898: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 9, [280, "buying property", "customer", 550, 595, 707, 814]), e.ge(3), 3), 2592e6), e.tw(e.cb(6, e.af_u(["properties", "grapeshot"], e.bsc([], ["9pleslnz", "z/uNxxGp"])), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.os(e.s, 7, [550, 823]), e.os(e.cx, 11, [823, "home_buying"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 85), e.s_(6, 87), e.s_(6, "/real estate/houses"), e.s_(6, "/real estate/low income housing"), e.s_(6, "/real estate/real estate buying and selling")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 177), e.s_(2, 551), e.s_(2, 552), e.s_(2, "mortgage loan"), e.s_(2, "real estate appraisal")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 552), e.s_(2, "issue of second homes"), e.s_(2, 707), e.s_(2, "new homes"), e.s_(2, 822)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173900: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.os(e.cx, 5, ["business_school", 518, "graduate_degree", 542, 678, 677, 852]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 47), e.s_(6, 48)])), e.af_u(["properties", "classifications_watson", "concepts"], e.ref(24)), e.af_u(["properties", "classifications_watson", "keywords"], e.ref(24))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [276, 336, 403, 516, 518, 625, 678, "school of business", "stern", "studies", "study", 973, 1002]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173901: e.r(11, 0, 3, 3, [e.ps(7, 444), e.os(e.cx, 11, [310, 765, "child", 450]), e.os(e.cx, 5, ["the_100_greatest_children's_books", 311, "children's_books", "child_grooming", 766, 309, 310, 450, 444, 449]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 50), e.s_(6, 51), e.s_(6, "/society")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "child care"), e.s_(2, "child education"), e.s_(2, "child grooming"), e.s_(2, "childhood education"), e.s_(2, "children's online privacy protection act"), e.s_(2, "children's rights"), e.s_(2, "educational stage"), e.s_(2, "elder care"), e.s_(2, 444), e.s_(2, 765)])), e.af_i(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "child's imagination"), e.s_(2, 310), e.s_(2, 403), e.s_(2, 404), e.s_(2, 444), e.s_(2, "parental guidance"), e.s_(2, 767), e.s_(2, 851)]))], 1, [310, 404, 444, "gandma", "gandpa", "grandfather", "grandmother", 766, 767, "school age", "school decisions"]),
                        173902: e.r(48, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 45)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 276), e.s_(2, 336), e.s_(2, 403), e.s_(2, "grammar school"), e.s_(2, "high school"), e.s_(2, 680), e.s_(2, "preschool"), e.s_(2, 800), e.s_(2, "school shooting"), e.s_(2, "school uniform"), e.s_(2, "secondary school"), e.s_(2, 973)])), 5, ["national_education_union_", 449, 542, "early_education", 403, "university_college_london", "us_college_admissions_scandal", "university_and_college_union", "universities", 852], 7, 403),
                        173906: e.r(7, 1, 0, 1, e.os(e.s, 1, [248, 251, 253, 362, 391, 691, 732, 734]), [e.os(e.s, 1, [571, "https://www.bbc.com/news/technology"]), e.os(e.s, 1, [244, 248, 249, 251, 253, 362, "cryto currency", 390, 391, 602, "investors", "metverse", 732, 734]), e.os(e.cx, 5, [243, 733, "dodge_coin", 248, 363, 252, 691]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 248), e.s_(2, 251), e.s_(2, 333), e.s_(2, 363), e.s_(2, 691), e.s_(2, 733)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 229), e.s_(2, "behalf of ftx customers"), e.s_(2, 248), e.s_(2, 249), e.s_(2, 364), e.s_(2, "ftx collapse"), e.s_(2, 691), e.s_(2, 732), e.s_(2, 828), e.s_(2, 1015)]))], e.s, 1, [244, 248, 249, 251, 253, 254, 273, 333, 335, 362, "cryto exchange", 390, 391, "etf", 427, 428, 433, 495, 601, 605, 606, 930]),
                        173907: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 1, ["airdrop", 243, 248, 249, 251, 253, 254, 256, 268, 288, 332, 333, 334, 335, 362, 369, 385, 390, 391, 426, 427, 428, 487, "gas fee", 495, 631, 660, 690, 807, 808, "shitcoin", "solana", 899, 936, 980, 981, 1019]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.os(e.s, 1, [243, 248, 249, 251, 253, 256, 268, 288, 332, 333, 334, "cold wallet", 362, 369, 385, 390, 391, 426, 428, 433, 487, 495, 631, 660, 690, 807, 808, 899, 936, 980, 981, 1019]), e.os(e.cx, 5, [252, "ethereum", 733, 248, 363]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 248), e.s_(2, 333), e.s_(2, "crypto waller"), e.s_(2, 363), e.s_(2, 487)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 229), e.s_(2, 248), e.s_(2, 364), e.s_(2, 828), e.s_(2, 1015)]))]), e.ge(3), 3), 3456e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173908: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([e.y(7, 273), e.os(e.cx, 5, [601, 705, "tax_haven", 465]), e.ref(45), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 464), e.s_(2, 467), e.s_(2, "financial institution"), e.s_(2, "financial market"), e.s_(2, 473), e.s_(2, "financial transaction"), e.s_(2, 596), e.s_(2, 705), e.s_(2, 769), e.s_(2, 801), e.s_(2, 903), e.s_(2, "tax rate")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 228), e.s_(2, 466), e.s_(2, 602), e.s_(2, 653), e.s_(2, 721), e.s_(2, 745), e.s_(2, 903)]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [141, 226, 248, 353, 362, 372, 455, 464, 470, 471, 472, 596, 601, "ira", 653, 705, 707, 745, 755, 769, 885, 902, 923]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173909: e.r(27, [226, 248, 353, 362, 372, 464, 472, 596, 601, 653, 705, 707, 745, 755, 902, 923], e.ps(7, 705), ["personal_investment", "personal_debt", 775], [e.s_(6, "/finance/bank/bank account"), e.s_(6, "/finance/bank/checks"), e.s_(6, 56), e.s_(6, 57), e.s_(6, 80)], [e.s_(2, "deposit account"), e.s_(2, "financial transaction tax"), e.s_(2, 602), e.s_(2, 774), e.s_(2, "savings account"), e.s_(2, "tax planning")], [e.s_(2, 228), e.s_(2, "checks"), e.s_(2, 605), e.s_(2, "personal account"), e.s_(2, 774)]),
                        173910: e.r(27, [141, 248, 353, 362, 372, 455, 464, 469, "institutional banking", 596, 601, 653, "mobile banking", 707, 745, "online banking", 769, 842, 885, 902, 923], e.ref(40), [775, 465], [e.s_(6, 30), e.s_(6, 54), e.s_(6, 56), e.s_(6, 57), e.s_(6, "/personal finance/personal debt/personal loans"), e.s_(6, 80)], [e.s_(2, "choice"), e.s_(2, 468), e.s_(2, "money decisions"), e.s_(2, 774)], [e.s_(2, 228), e.s_(2, 294), e.s_(2, 304), e.s_(2, "choices"), e.s_(2, 468), e.s_(2, 774)]),
                        173911: e.r(24, 54, e.ref(6), e.ref(45), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 226), e.s_(2, 363), e.s_(2, 464), e.s_(2, 653), e.s_(2, 672), e.s_(2, 769), e.s_(2, 902)])), e.ref(21)),
                        173913: e.r(34, 1, [211, 222, 273, "discerning", 590, 597, 601, 605, 606, 629, "observant", 772, 850, 880, 930, "thoughtful", 1011], e.os(e.cx, 5, ["mutual_funds", "ETF", "personal_investments", 705, "stock_market", 601, 606, 599]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance/business/business banking & finance/angel investment"), e.s_(6, "/business and finance/business/business banking & finance/venture capital"), e.s_(6, 56), e.s_(6, 80)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 464), e.s_(2, 602), e.s_(2, 718), e.s_(2, 904), e.s_(2, 952)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 466), e.s_(2, 605), e.s_(2, 705), e.s_(2, 718), e.s_(2, 952)])), [211, 222, 273, 590, 597, 602, 606, 772, 850, 880, 930, 1011]),
                        173916: e.r(28, 0, ["cardiologist", 386, "emergency accident", "general practice", 529, "hospital administrator", "midwife", 742], e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance/industries/healthcare industry"), e.s_(6, "/careers/nursing"), e.s_(6, "/science/medicine"), e.s_(6, "/society/welfare/healthcare")])), [782, "british_medical_association_(bma)", "medical_research", "medical-professional", 742, "nhs_scotland", "nhs_england", "nhs", "royal_college_of_nursing", "doctors"], [e.s_(2, 386), e.s_(2, 412), e.s_(2, "medical career"), e.s_(2, 680), e.s_(2, "nursing"), e.s_(2, 782), e.s_(2, "scottish ambulance service")], [e.s_(2, "ambulances"), e.s_(2, 386), e.s_(2, "emergency services"), e.s_(2, 412), e.s_(2, 529), e.s_(2, "medical professional"), e.s_(2, "nurses"), e.s_(2, 782)]),
                        173917: e.q(e.acqs([e.tw(e.cb(0, e.o([e.os(e.w, 7, [1001, 685, 527]), e.os(e.cx, 11, ["personology", 681, 528, 527]), e.os(e.cx, 5, [684, "wellbeing", 1001, 1012, 812, 863, 686, "ni_health", "world_health_organization_(who)", 309, 530, 527]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 68), e.s_(6, 69), e.s_(6, 93)])), e.af_u(["properties", "classifications_watson", "concepts"], e.ref(29)), e.af_u(["properties", "classifications_watson", "keywords"], e.ref(29))]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.ref(5), e.ge(3), 3), 2592e6)])),
                        173918: e.r(22, 1, [e.os(e.w, 7, [685, 527]), e.os(e.cx, 11, [528, 527]), e.os(e.cx, 5, [1001, 1012, 684, 812, 863, 686, 309, 530, 527]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 68), e.s_(6, 69), e.s_(6, "/healthy living/nutrition"), e.s_(6, "/healthy living/wellness")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 527)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 527), e.s_(2, 1001)]))], 1, ["healthy living", "https://www.bbc.com/news/health", "pilates", "training", "weights", "yoga"]),
                        173919: e.r(10, e.o([e.y(7, 682), e.os(e.cx, 11, [528, 681]), e.os(e.cx, 5, ["clinical_trials", "drug_trials", "drugs_trade", "pharmaceutical_industry", "prescription_drugs"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 35), e.s_(6, 44), e.s_(6, "/health and fitness/alternative medicine/herbs for health"), e.s_(6, "/healthy living/wellness\talternative medicine/herbs and supplements"), e.s_(6, "/medical health/pharmaceutical drugs")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "drug trials"), e.s_(2, 778), e.s_(2, "pharmacology"), e.s_(2, "prescription drug")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "pharmacy"), e.s_(2, "prescription painkillers"), e.s_(2, "tentative estimate of clinical hppd patients")]))]), 0, 1, [324, 441, "medical trial", 682, 725], 9, [324, "drug trial", 441, 725, "new medicine", "new prescription", "prescriptions"]),
                        173920: e.q(e.acqs([e.tw(e.cb(0, e.o([e.pc_(11, 498), e.os(e.cx, 5, ["genetic_research", "genetic_engineering", 501, "DNA", "genetics"]), e.os(e.s, 20, [384, 496, 501, 502]), e.os(e.s, 16, [384, 496, 501, 502]), e.os(e.s, 1, [384, 496, 501, 502]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/science/genetics"), e.s_(6, "/science/medicine/genetics")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 384), e.s_(2, 496), e.s_(2, 501), e.s_(2, "genomic imprinting")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "dna test"), e.s_(2, 496)]))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173922: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.os(e.s, 1, [210, 245, 324, 408, 454, 515, 619, 702, 736, 737, 776, 777]), e.os(e.s, 1, [210, 245, 247, "cdc", 324, 408, 454, 515, "j&j", 619, 702, 736, 737, 776, 777]), e.af_u(["properties", "top_tags"], e.bsc([], ["17kkXngQ", "FLgrDyKv", "KPROlDRO", "NMbZ5GzN", "Nr1q2iZM", "SAatNwQP", "TMa3v22H", "bjy124o0", "fSV5y8AJ", "fm7VXl0J", "g0X/bunn", "js80HaN3", "sVuepq31", "zTldy1YX"]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 779), e.s_(2, 985), e.s_(2, 986)])), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "antibiotics"), e.s_(2, "bio-tech"), e.s_(2, 247), e.s_(2, 702), e.s_(2, 776), e.s_(2, 778), e.s_(2, 779), e.s_(2, 985), e.s_(2, 986), e.s_(2, "world health organization")])), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance/industries/biotech and biomedical industry"), e.s_(6, 35), e.s_(6, 44)])), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173924: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 9, ["a.lange & söhne", "alange-soehne", "alpina", 197, "arnold & son", "audemars", "bamford", "baume & mercier", "bell & ross", "blancpain", "bovet fleurier", "breitling", "bremont", 272, "bulova", "cartier", "chopard", "f.p.journe", "girard-perregaux", "glashütte", 523, "hamilton", "hublot", "iwc", "jaeger-lecoultre", "jaquet droz", "junghans", "laurent ferrier", "liv watches", "longines", 658, "maurice de mauriac", "maurice lacroix", "mont blanc", "montblanc", "nordgreen", 750, "oris", "panerai", "parmigiani fleurier", "patek", "piaget", "rado", "ressence", "roger dubuis", 840, "seiko", "tag heuer", 940, "tissot", "tudor", "ulysse nardin", "vacheron", "van cleef", "vincero", "weiss", "zenith"]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.pc_(5, 997), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 112), e.s_(6, "/style & fashion/men's fashion/men's accessories/men's jewelry and watches"), e.s_(6, "/style & fashion/women's fashion/women's accessories/women's jewelry and watches"), e.s_(6, 119), e.s_(6, "fashion/watches")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 661), e.s_(2, 942), e.s_(2, 997), e.s_(2, 1018)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 661), e.s_(2, 750), e.s_(2, "patek philippe"), e.s_(2, 840), e.s_(2, 942), e.s_(2, 997), e.s_(2, 1018)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173925: e.r(34, 9, [272, 281, 297, "christian louboutin", 314, 378, 451, 517, 523, 534, 618, 658, 663, 666, 802, 814, 837, 868, 940, 962], e.ref(32), e.ref(27), e.ref(35), e.ref(47), [272, 291, 517, 523, 534, 617, 618, 666, 814, 837, 869, 940]),
                        173926: e.r(33, 9, ["3.1 phillip lim", "alaïa", "alexander mcqueen", "amina muaddi", "apc", 197, "balenciaga", "balmain", "bottega veneta", "brother vellies", "burberry", 297, "chloé", "coach", "céline", "d&g", "dior", "dolce & gabbana", 457, "givenchy", 523, "hermes", "hermés", "hilde palladino", "hspalladino", "jill sander", "jw anderson", "karl", "kate spade", "loewe", 658, "lv", "marc jacobs", "michael kors", "mulberry", "off---white", "off-white", "prada", "proenza schouler", "staud", "stella mccartney", "tom ford", "valentino", "versace", "ysl", "yves saint laurent"], e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 112), e.s_(6, "/style & fashion/women's fashion/women's accessories/women's handbags and wallets"), e.s_(6, 114), e.s_(6, 119)])), e.cx, 22, ["work_tote", "handbags", "Shopping", "Luxury-retail"], ["properties", "classifications_watson", "concepts"], ["properties", "classifications_watson", "keywords"], [e.s_(2, 525), e.s_(2, 662), e.s_(2, 664), e.s_(2, 948)], [e.s_(2, "bucket bag"), e.s_(2, "designers"), e.s_(2, 525), e.s_(2, "high fashion"), e.s_(2, 662), e.s_(2, 664), e.s_(2, "renowned designer"), e.s_(2, 948), e.s_(2, "work bag")]),
                        173927: e.r(41, 3, 3, 9, e.ref(5), 3, 3),
                        173929: e.r(44, e.os(e.cx, 11, ["custom_made", 906]), e.ps(7, 906), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/style & fashion/designer clothing"), e.s_(6, "/style & fashion/fashion trends"), e.s_(6, 112), e.s_(6, "/style & fashion/men's fashion"), e.s_(6, "/style & fashion/street style"), e.s_(6, "/style & fashion/women's fashion"), e.s_(6, 116), e.s_(6, 117), e.s_(6, "/style and fashion/footwear"), e.s_(6, 118), e.s_(6, 120), e.s_(6, "/style and fashion/swimwear")])), 5, ["men's_fashion", "women's_fashion", 866, 329, "sweaters", "skirts", "shirts", 763, "dresses", "clothes", "clothing_industry", "designer_fashion", "haute couture", 962, "lifestyle", 452, 451], ["properties", "classifications_watson", "concepts"], ["properties", "classifications_watson", "keywords"], [e.s_(2, 325), e.s_(2, 329), e.s_(2, 392), e.s_(2, 451), e.s_(2, 865), e.s_(2, "shoe"), e.s_(2, 870), e.s_(2, 875), e.s_(2, "slim-fit pants"), e.s_(2, 906), e.s_(2, 918)], [e.s_(2, 325), e.s_(2, 329), e.s_(2, 392), e.s_(2, 451), e.s_(2, 763), e.s_(2, 865), e.s_(2, 866), e.s_(2, 870), e.s_(2, 875), e.s_(2, 918)]),
                        173931: e.r(44, e.ref(11), e.os(e.cx, 5, ["severe_weather", "sustainable_agriculture", "sustainable_living", 910, 522, "green_economy", 520, "paris_climate_agreement", "uk_climate_change_protests", "climate_guardians", 321, "climate_change", 319]), e.os(e.s, 7, [488, 909]), 11, ["frozen_continent", "future_planet", "green_getaways", 520, 521, 321, "sustainability_on_a_shoestring", "sustainable_business"], ["properties", "classifications_watson", "categories"], ["properties", "classifications_watson", "concepts"], [e.s_(6, 31), e.s_(6, 43), e.s_(6, "/news and politics/weather"), e.s_(6, "/science/ecology"), e.s_(6, 92), e.s_(6, 94)], [e.s_(2, "bbc earth"), e.s_(2, 320), e.s_(2, 399), e.s_(2, "green livng"), e.s_(2, 910), e.s_(2, "sustainable agriculture"), e.s_(2, 912), e.s_(2, "temperate climate")]),
                        173932: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.os(e.s, 1, [266, 273, 344, 398, "eco living", 488, 519, 599, 784, 910, 911]), e.ref(11), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/business and finance/business/business utilities"), e.s_(6, 31), e.s_(6, 36), e.s_(6, 41), e.s_(6, 43)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "business and technology education council"), e.s_(2, "business ethics"), e.s_(2, 306), e.s_(2, 320), e.s_(2, "climate solutions")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "business sustainability"), e.s_(2, 304), e.s_(2, "climate challenge"), e.s_(2, 320), e.s_(2, 381), e.s_(2, "environmental sustainability"), e.s_(2, "greener practices"), e.s_(2, "sustainable solutions"), e.s_(2, "various sustainability initiatives")]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [266, 344, 398, 488, 519, 599, 784, 910, 911]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        173936: e.r(56, 1, ["https://www.bbc.com/storyworks/travel/tokyo-for-the-soul/tasting-satoyama-a-guide-to-eating-mindfully-in-tokyo", "https://www.bbc.com/storyworks/travel/tokyo-for-the-soul/the-tokyo-you-nearly-missed-a-writers-personal-guide-for-soul-searchers"]),
                        174344: e.r(6, 0, 1, 1, [205, 845, "sightsee", 957, "trip", "visit"], [e.ps(7, 958), e.os(e.w, 12, ["Taiwan", "Macao", "Yemen", "Vietnam", 168, "United Arab Emirates", 165, 164, "Timor-Leste", 162, "South Korea", "Saudi Arabia", 160, "Qatar", "Philippines", 157, "Oman", "Nepal", "Myanmar", "Mongolia", "Maldives", "Lebanon", "Laos", 156, 155, "Kuwait", "Jordan", "Israel", "Iraq", "Indonesia", 152, "Egypt", 150, "Cocos Islands", "Christmas Island", "Cambodia", "Brunei", "Bhutan", "Banglasdesh", "Bahrain", 148, 145, "Sri Lanka", "China", "Japan", "Thailand", "Malaysia", "Hong Kong", "Singapore", 153])], [e.y(10, 957), e.pc_(11, "japan-untold-stories"), e.ps(7, 958), e.af_u(["properties", "classifications_watson", "categories"], e.s_(6, "travel/asia")), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "central asia"), e.s_(2, "great wall of china"), e.s_(2, 957)]))]),
                        174345: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.y(10, 957), e.os(e.cx, 5, [444, 765, 839, "cruise_ships", 883, 238]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 136), e.s_(6, "/travel/travel type/family travel"), e.s_(6, 138), e.s_(6, "/travel/vacation rentals")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 444), e.s_(2, "seaside resort"), e.s_(2, "ski resort"), e.s_(2, 984)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 237), e.s_(2, "car trip"), e.s_(2, 447), e.s_(2, "family vacation"), e.s_(2, 838), e.s_(2, 873)]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, ["american airlines", 237, 447, 838, "roadtrip", 873, "travel for holidays", "united", 984]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        174346: e.r(10, e.a([e.y(10, 957), e.y(7, 978), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 130), e.s_(6, "/travel/tourist destinations"), e.s_(6, 136), e.s_(6, "/travel/travel locations/north america travel"), e.s_(6, "/travel/travel type/business travel")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 284), e.s_(2, 444), e.s_(2, 453), e.s_(2, 692), e.s_(2, 709), e.s_(2, 735), e.s_(2, 765), e.s_(2, "ski"), e.s_(2, 957), e.s_(2, 972)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "beach areas"), e.s_(2, 284), e.s_(2, "family trip"), e.s_(2, 453), e.s_(2, 692), e.s_(2, 709), e.s_(2, 735), e.s_(2, 873), e.s_(2, 957), e.s_(2, 972)]))]), 1, 0, ["alaska", "america", 284, "hawaii", 957, 972, "usa"], 1, [284, 692, 972, 976]),
                        175038: e.r(56, 1, ["https://www.bbc.com/storyworks/hong-kong-the-worlds-stage/breaking-boundaries-cueing-destiny", "https://www.bbc.com/storyworks/hong-kong-the-worlds-stage/breaking-boundaries-sinking-shots", "https://www.bbc.com/storyworks/hong-kong-the-worlds-stage/from-the-trapeze-to-blockchain-tech-why-i-made-hong-kong-my-home"]),
                        175448: e.r(14, 1, 9, [572, "https://www.bbc.com/sport/africa"], e.os(e.w, 7, ["africa-live", 178]), e.os(e.cx, 5, ["african-american_civil_rights_movement", "central_african_republic", "african_national_congress", "africa_economy", 178]), ["properties", "classifications_watson", "concepts"], e.s_(2, 144)),
                        175451: e.q(e.acqs([e.tw(e.cb(0, e.o([e.y(7, 216), e.pc_(5, 216), e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, 147))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175454: e.r(13, 1, ["ecb", "euro", "the eu"], e.y(7, 429), e.os(e.cx, 5, ["european_union", 429]), ["properties", "classifications_watson", "entities"], ["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 430), e.s_(2, "european council"), e.s_(2, 431), e.s_(2, 432)]), [e.s_(2, 430), e.s_(2, "european convention on human rights"), e.s_(2, "european court of human rights"), e.s_(2, 431), e.s_(2, 432)]),
                        175456: e.q(e.acqs([e.tw(e.cb(0, e.a([e.pc_(5, "ghana"), e.af_u(["properties", "classifications_watson", "keywords"], e.s_(2, "Ghana"))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175458: e.q(e.acqs([e.tw(e.cb(0, e.a([e.os(e.w, 7, ["travel_destinations-africa", 178]), e.os(e.cx, 5, [846, 178]), e.os(e.s, 1, [846, "tour operator"]), e.af_u(["properties", "classifications_watson", "categories"], e.s_(6, "travel/africa"))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175459: e.q(e.acqs([e.tw(e.cb(0, e.a([e.y(7, 178), e.pc_(5, "nigeria"), e.af_u(["properties", "classifications_watson", "keywords"], e.s_(2, "Nigeria"))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175461: e.q(e.acqs([e.tw(e.cb(0, e.o([e.y(7, 789), e.pc_(5, 789), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 76), e.s_(6, "/news and politics/politics")])), e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, "Politics"))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175555: e.r(40, e.ref(44), 5, ["the_100_greatest_american_films", "the_100_greatest_films_of_the_21st_century", "the_100_greatest_films_directed_by_women", 241, "the_100_greatest_foreign-language_films", 285, 947, 389, 988, 656, "film_industry", 582, "cult_films", "film_reviews", "film_history", "talking_movies", 316, 461], 11, ["the_women_who_changed_cinema", "films_that_were_never_made"]),
                        175557: e.r(40, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 127)])), 22, ["Reality-TV", "TV-drama", 163], 5, [933, 311, "the_100_greatest_tv_series_of_the_21st_century", 713, "reality_tv", "tv_review", "tv_drama"]),
                        175798: e.r(37, e.pc_(5, 996), e.ps(7, 996), e.af_u(["properties", "classifications_watson", "entities"], e.o([e.s_(2, 996)])), e.af_u(["properties", "classifications_watson", "keywords"], e.s_(2, "Wales"))),
                        175800: e.r(25, 1, [735, "north-america", "us-congress", "us-economy"], e.y(7, 978), e.os(e.cx, 5, ["us_election_2024", "us_supreme_court", "us_armed_forces", "us_gun_laws", "us_immigration", "us_&_canada", "us_congress", "us_politics", 979, "us_economy", "united_states"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/news and politics/national news"), e.s_(6, 79)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 284), e.s_(2, 735), e.s_(2, 972)]))),
                        175801: e.r(38, ["b2b", "social_media_influencers", 397, 752], [e.s_(2, 397), e.s_(2, 751)]),
                        175804: e.r(49, e.ref(25), 5, ["uk_supreme_court", "uk_legislation", "uk_royal_family", "uk_immigration", "uk_newspapers", "uk_government", "uk_parliament", "uk_finance", "uk_farming", "uk_banking", "uk_economy", "uk_visas", "uk_taxes", "uk_aid"], 969, e.s, 1, ["news/england", "news/live/uk-england", "news/uk-england"]),
                        175806: e.r(39, 7, 205, ["north_korea", "south_korea", 845, "vietnam", "philippines", "japan", "asia_migrant_crisis", 206, 205], ["properties", "classifications_watson", "concepts"], [e.s_(2, 205), e.s_(2, "in the news")]),
                        175810: e.r(15, 1, 3, 3, 1, [175, 242, 283, 323, "free-climb", 546, 957], e.os(e.w, 7, ["adventures", 175]), e.os(e.cx, 11, ["travel_well", 1017, "adventure_&_experience", "travel_journeys"]), e.os(e.cx, 5, [175, 383, "paragliding_and_paramotors", 283, "scuba_diving", "free_climbing", 546]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 131), e.s_(6, "/travel/travel type/adventure travel")]))),
                        175812: e.r(29, e.ref(17), e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, "Travel")), [1017, 1016, 937], [883, 238, 817, 184, 708, "hotels", 401, 957], [193, 225, 237, 371, 401, 477, 478, 559, 708, 873, 896, 957]),
                        175814: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 9, ["air travel", 187, 477, "fly", "travel by air"]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.os(e.cx, 5, ["Virgin-airlines", "qatar_airways", "ethiopian_airlines_crash", "southwest_airlines", "british_airways", "american_airlines", "united_airlines", "japan-airlines", "delta_airlines", 184]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 137), e.s_(6, "/travel/travel type/air travel")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "air-travel"), e.s_(2, 187)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175818: e.r(12, [193, "train travel", 989, 992], e.os(e.s, 1, [193, 954, 989, 992]), [e.s_(6, "/travel/transports/train travel"), e.s_(6, "/travel/travel type/rail travel")], [193, "great_western_railway", "chiltern_railways", 817, 954]),
                        175820: e.r(29, e.os(e.s, 1, ["50 reasons", 175, 187, 225, 237, "bed and breakfast", "destination", "discover", 401, 479, 558, 559, "lodgings", 708, "railway", 873, 955, 957, "untold america"]), e.ref(17), ["the_world_of_tomorrow", "world-changing_ideas", 1017, 1016, 937, "50_reasons_to_love_the_world"], [817, 184, 839, "disabled_travel", "smart_travel", "travellers", "travelodge", "travel_insurance", "getaways", 559, "travel_&_leisure_industry"], [193, 225, 237, 242, 371, 401, 477, 478, 546, 559, 708, 873, 896, 957]),
                        175822: e.r(12, ["agean", 429, 610, "mediterranean", "scotland", 957, 969, "united kingdom", 996], e.pe(7, "travel_destinations-europe"), [e.s_(6, 132), e.s_(6, 133), e.s_(6, 134), e.s_(6, 135), e.s_(6, "/travel/travel locations/europe travel")], ["travel-europe", "eurostar"]),
                        175824: e.r(46, e.ps(16, "Engineering"), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 32), e.s_(6, "/business and finance/industries/construction industry"), e.s_(6, 34), e.s_(6, 40), e.s_(6, 91)])), 5, ["construction_industry", "steel_industry", 378, "materials_science", "aerospace", "physics", 588, "engineering_marvels", 419], e.cx, 11, ["sunken_civilisation", "future_thinking"]),
                        175826: e.q(e.acqs([e.tw(e.cb(0, e.a([e.os(e.s, 1, [195, 271, "business owner", "contractors", "electrician", "painters", "plumber", "property developer", 830, "renovation", "renovator", "repairer", "tradesperson"]), e.os(e.cx, 5, ["nationwide_building_society", "trades_union_congress", 419, "arts_&_architecture", 195, "trade_unions"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 32), e.s_(6, 34), e.s_(6, 40), e.s_(6, "/home & garden/home improvement"), e.s_(6, "/home & garden/remodeling & construction"), e.s_(6, 86), e.s_(6, 91)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "architect"), e.s_(2, "construction"), e.s_(2, "electrical engineering"), e.s_(2, "trades union congress")]))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175830: e.r(32, 9, [271, "carbon footprint", 352, 380, "envionment", "global warming", 785, "sea level", 910, 924], e.y(7, 930), ["humanity", "good_cause", 998, 993, 587, "the_charity_commission", 930], [e.s_(2, "charity (practice)"), e.s_(2, "humanitarianism"), e.s_(2, 930)]),
                        175832: e.r(30, e.y(7, 930), [271, 352, 379, 785, 924], ["content builder", 352, 379, 924], [e.s_(2, 586), e.s_(2, "source code")]),
                        175835: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 9, ["enthusiast", 850, 854, 930]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.y(15, 794), e.os(e.s, 7, [854, 930]), e.os(e.cx, 11, [855, 521, "matter_of_life_&_tech"]), e.os(e.cx, 5, [855, 998, 930, "women_in_technology"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 88), e.s_(6, 122), e.s_(6, 126)]))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        175837: e.r(17, 9, [203, 298, 320, 930, 999], ["properties", "classifications_watson", "keywords"], [e.s_(6, 89), e.s_(6, "/science/computer science/software engineering"), e.s_(6, 121), e.s_(6, 123)], 7, 930, [204, 930], [e.s_(2, "chat gpt"), e.s_(2, 929), e.s_(2, 930)]),
                        175840: e.r(15, 0, 2, 2, 1, [174, 194, "car lover", 342, "early adopter", "first adopter", "google pixel", "influence", "ipad", 613, 629, 647, "microsoft", 806, 881, 922, 924], e.y(7, 930), e.os(e.cx, 5, ["consumer_behaviour", "influencers", "medical_technology", "military_technology", 993, "financial_technology", 587, 204, "3d_technology", 998, 719, 930]), e.ref(3), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "business reading"), e.s_(2, 437), e.s_(2, "knowledge"), e.s_(2, 930)]))),
                        175842: e.r(32, 1, [174, 194, 212, 317, 326, 327, 342, 365, "data scientist", 377, 526, 613, 638, "leica", 647, 805, 814, 881, "smartphone", 886, 922, 924, "thinkpad"], e.ref(46), ["telecommunication", 526, 886, "cloud services", "it service", 805, 930, 932, "information_commissioner's_office", 587], [e.s_(2, "accumulator (computing)"), e.s_(2, "business computing"), e.s_(2, "business system"), e.s_(2, 436), e.s_(2, 437), e.s_(2, 586), e.s_(2, 886), e.s_(2, "user (computing)")]),
                        175844: e.r(33, 1, [289, "energy utility", "ericsson", "fdi", 456, 486, "internet", 654, "manufacturing", "maritime", 697, "network computing", "ports", "raillway", 818, 864, 951, "transportation", 974], e.os(e.cx, 5, ["trucking", 697, "Fedex", "UPS", "freight_transport", "shipping_industry"]), e.s, 1, [289, "exports", 456, 486, "imports", 654, 697, 818, 864, 951, "trucking industry", 974], ["properties", "classifications_watson", "categories"], ["properties", "classifications_watson", "concepts"], [e.s_(6, "/business and finance/business/logistics"), e.s_(6, 33), e.s_(6, "/business and industrial/logistics")], [e.s_(2, 654), e.s_(2, "mail"), e.s_(2, 956)]),
                        176884: e.r(43, e.os(e.cx, 5, ["long_reads", "kindlle", "e-book", 259, "reading"]), e.ps(1, "https://www.bbc.com/culture/books"), e.ps(7, 259), ["properties", "classifications_watson", "categories"], [e.s_(2, 259), e.s_(2, "readers")], 6, 29),
                        176887: e.r(45, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 72), e.s_(6, "/video gaming")])), e.cx, 5, ["video-game", "nintendo", "games_workshop", 786, "xbox", 491], ["properties", "classifications_watson", "concepts"], e.s_(2, "Video game")),
                        176888: e.r(46, e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "art-history"), e.s_(2, 781), e.s_(2, "picture book")])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, "photographer"), e.s_(2, 781)])), 5, [201, 781], e.w, 7, ["in_pictures", 781]),
                        176889: e.r(35, e.os(e.s, 12, ["albania", "andorra", "armenia", "austria", "azerbaijan", "belarus", "belgium", "bosnia and herzegovina", "bulgaria", "croatia", "cyprus", "czechia", "denmark", "estonia", "faroe islands", "finland", "france", "georgia", "germany", "gibraltar", "greece", "greenland", "hungary", "iceland", 610, "italy", "kazakhstan", "kosovo", "kyrgyzstan", "latvia", "liechtenstein", "lithuania", "luxembourg", "macedonia", "malta", "moldova", "monaco", "montenegro", "netherlands", "norway", "poland", "portugal", "romania", 845, "san marino", "serbia", "slovakia", "slovenia", "spain", "sweden", "switzerland", "tajikistan", "turkey", "turkmenistan", "ukraine", "uzbekistan", "vatican city"]), 1, 1, e.ge(1), 1, 5, e.cb(0, e.as(e.x, 12, ["Kosovo", "Greenland", "Gibraltar", "Faroe Islands", "Vatican City", 168, "Ukraine", 165, 164, 162, "Switzerland", "Sweden", "Spain", "Slovakia", "Serbia", "San Marino", 160, "Romania", "Portugal", "Poland", "Norway", "Netherlands", "Montenegro", "Monaco", "Moldova", "Malta", "Macedonia", "Luxembourg", "Lithuania", "Liechtenstein", "Latvia", 156, 155, "Italy", "Ireland", "Iceland", "Hungary", "Greece", "Germany", 152, 151, "Finland", "Estonia", "Denmark", "Czechia", 150, "Croatia", "Bulgaria", "Bosnia and Herzegovina", "Belgium", "Belarus", 148, "Austria", 145, "Andorra", "Albania", "Slovenia"]), e.ge(1), 1), 1728e5),
                        176890: e.r(38, ["holiday shopping", 869, "ebay", "black_friday", 752], [e.s_(2, "black friday"), e.s_(2, "christmas and holiday season"), e.s_(2, 751)]),
                        176891: e.r(35, e.y(12, 153), 1, 1, e.ge(1), 1, 5, e.cb(0, e.z(12, 153), e.ge(1), 1), 864e5),
                        176892: e.r(22, 1, [e.os(e.cx, 5, [583, 382]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "diversity training"), e.s_(2, "indigenous peoples")]))], 9, ["bipoc", "black and brown people", "black lives matter", "blm", 382, 583]),
                        176893: e.q(e.acqs([e.ocqs([e.scq(e.tw(e.sw(4, e.t, ["properties", "aggregations", "PageviewEngagement", "engaged_time"]), 12096e5), e.vq(e.sw(8, e.t, ["properties", "engaged_time"])), e.ge(120)), e.scq(e.tw(e.cw(4, e.pge(30, 90)), 2592e6), e.vq(e.sw(8, e.t, ["properties", "engaged_time"], e.ge(90))), e.ge(3))]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176894: e.r(47, e.ref(44), 5, [582, 389, "oscars", 316, "movies", 461], [388, "longshots", 462], e.s, 1, ["bbc.com/reel/longshots", 569]),
                        176895: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.os(e.cx, 5, [330, 262, 651, 296, 503, "scotch_whisky", "alcohol_industry", 189, 1010, 239]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/food & drink/alcoholic beverages"), e.s_(6, 61), e.s_(6, "/health and fitness/addiction/alcoholism")])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 189), e.s_(2, 239), e.s_(2, "drinking"), e.s_(2, 651), e.s_(2, "whisky"), e.s_(2, 1010)]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.a([e.os(e.s, 1, [189, 239, 260, 262, 296, 393, 503, 651, 773, 844, "rye", 935, "vodka", 1003, 1010]), e.os(e.s, 9, [189, 239, 260, 262, 296, 330, 503, 651, "mocktail", 773, 844, 935, 1003, 1010])]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176897: e.r(2, 1, e.pe(1, "https://www.bbc.com/news/uk"), 0, e.a([e.ps(7, 969), e.os(e.cx, 5, ["united_kingdom", 969]), e.ref(25)]), 3, 3),
                        176898: e.r(16, ["anchor", "broadcasting", "disc jockey", "dj", "editor", "employer", "employment", "host", "industry", "information services", "journalist", 670, "mixed media", 726, "occupation", 806, 813, "radio", "reporter", "worker", "writer"], e.os(e.cx, 5, ["careers", 813, 674, "media"]), [931, "social-media"], 11, ["grand_ideas", "missed_genius", "future_inc", "imagineering"], ["properties", "classifications_watson", "categories"], ["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 674), e.s_(2, "radio host"), e.s_(2, "social media"), e.s_(2, 1013)]), [e.s_(6, "/business and finance/business/marketing and advertising"), e.s_(6, "/business and finance/industries/advertising industry"), e.s_(6, "/business and industrial/advertising and marketing")]),
                        176899: e.r(5, 0, 1, e.ps(1, 572), 3, 3, [e.z(27, 144), e.pc_(5, 178), e.os(e.w, 7, ["worldafrica", 178]), e.af_u(["properties", "classifications_watson", "entities"], e.s_(2, 144))]),
                        176902: e.r(47, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/art and entertainment"), e.s_(6, "/events and attractions"), e.s_(6, "/fine art"), e.s_(6, 77), e.s_(6, 78), e.s_(6, "/pop culture"), e.s_(6, 127)])), 11, ["design_icons", "heroes_of_design", 716, 199], [716, "art-design", 259, 906, 421, "entertainment-news"], e.cx, 5, [933, "itv", 367, "streaming", 259, 461, 316, 938, 714, 224, 378, 906, 716, 753, "entertainment_news", 199]),
                        176903: e.r(51, 151, 151),
                        176904: e.q(e.acqs([e.ocqs([e.cb(1, e.bsc_(9, ["kvUl5pmh"]), e.ge(1), 1), e.cb("FormSubmission", e.a([e.ps(["form", "action"], "search"), e.af_u(["properties", "form", "properties"], e.o([e.s_(["value"], 284), e.s_(["value"], 972), e.s_(["value"], 976)]))]), e.ge(1), 1), e.tw(e.cb(0, e.a([e.ps(7, 978), e.af_u(["properties", "top_tags"], e.bsc([], ["Qr2exbZB", "q2XYuWEf"]))]), e.ge(1), 1), 2592e6)]), e.tw(e.cb(0, e.as(e.x, 12, [284, 167]), e.ge(1), 1), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176905: e.q(e.acqs([e.tw(e.cb(2, e.t, e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176908: e.r(51, 167, 167),
                        176910: e.r(49, e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 14), e.s_(6, 78)])), 11, [893, 716], 716, e.cx, 5, ["greatest_hip-hop_songs_of_all_time", "official_uk_music_charts", 713, "glastonbury_festival", 716]),
                        176911: e.r(17, 1, [199, 224, "consume", 367, 714, "musical theater", 753, 781, "reader"], ["properties", "classifications_watson", "concepts"], [e.s_(6, 5), e.s_(6, "/art and entertainment/dance/modern dance"), e.s_(6, 14), e.s_(6, 20), e.s_(6, 29), e.s_(6, "/fine art/dance"), e.s_(6, "/fine art/opera"), e.s_(6, 59), e.s_(6, 78)], 10, 367, [582, 378, "culture_in_quarantine", 716, 199, 201, "galleries", 781, 938, 753, 714, 224, 790, 367], [e.s_(2, 224), e.s_(2, "book"), e.s_(2, 367), e.s_(2, "film festival"), e.s_(2, 714), e.s_(2, "music festival"), e.s_(2, 753), e.s_(2, 781), e.s_(2, 938)]),
                        176913: e.r(16, [347, "cuisine", "dining", 479, "organic"], e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/food & drink"), e.s_(6, 60)])), ["worlds-table", "food-hospitality"], 5, ["hospitality", "just_eat_takeaway", "takeaway_food", "cooking_shows", 836, 479], ["properties", "classifications_watson", "concepts"], ["properties", "coll"], e.bsc([], ["CQkils/8", "DLhPXKek", "JZmpwP9/", "O7LHmz+f", "S9RxN5Oe", "UvVY6ZSi", "Yj1/qjVL", "e6R/w4HD", "iU0F8Vv9", "xv3+OWMA"]), [e.s_(2, "baking"), e.s_(2, 347), e.s_(2, 393), e.s_(2, 479), e.s_(2, 836), e.s_(2, "veganism"), e.s_(2, "vegetarianism")]),
                        176914: e.r(2, 0, e.af_u(["properties", "top_tags"], e.bsc([], ["0saAHRTU", "POxRwnNS", "SgwWF7Kd", "UmWbRWf9", "ZvedimMn", "b0rQnrDK", "o5uiZZ5A", "oUnlk0Bg"])), 0, e.a([e.os(e.s, 1, ["annals", "chronicle", "cronology", "diary", "historical", 548, "legend", "medival", "rennaiscance"]), e.os(e.cx, 11, ["ancient_engineering_marvels", 498, "homo_spaciens", 893, "hidden_histories", "in_history"]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, "ancient greece"), e.s_(2, "ancient rome"), e.s_(2, "genealogy"), e.s_(2, 548)]))]), 3, 3),
                        176916: e.q(e.acqs([e.ocqs([e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 89493)), e.cw(5, e.pe(14, 89493)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 89494)), e.cw(5, e.pe(14, 89494)), e.ge(1)), e.tw(e.cb(0, e.a([e.os(e.cx, 5, ["millennials", "millennial_bosses", "millennial"]), e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, "Millennials"))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176918: e.r(50, e.os(e.w, 13, ["livecnncricket", 356]), "sport_cricket_content", ["bat", "bowler", 356, "wicket"], ["properties", "classifications_watson", "categories"], [e.s_(6, 100)]),
                        176919: e.r(36, e.cb(0, e.ref(5), e.ge(1), 1), e.o([e.pe(8, "sport_golf_content"), e.y(13, 509), e.os(e.s, 1, [509, "pga", "ryder cup", "the masters"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 102)]))]), 3, 3, e.y(15, 794), e.ge(1), 1),
                        176920: e.q(e.acqs([e.tw(e.cb(0, e.o([e.pe(8, "sport_tennis_content"), e.y(13, 934), e.pc_(5, "wimbledon"), e.ps(1, "sport/tennis"), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 109)]))]), e.ge(3), 3), 2592e6), e.cb(0, e.a([e.y(15, 794), e.ref(5)]), e.ge(1), 1)])),
                        176921: e.r(37, e.y(15, 794), e.y(8, 898), e.os(e.s, 1, [480, 797, 884, 1014]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 108)]))),
                        176923: e.r(50, e.y(13, 368), "sport_cycling_content", ["sport/cycling"], ["properties", "classifications_watson", "concepts"], [e.s_(2, 242), e.s_(2, 368), e.s_(2, "tour de france")]),
                        176924: e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([e.y(18, 897), e.os(e.s, 1, [213, 231, 233, 264, 356, 368, "extreme sports", 480, 483, 509, 549, 700, 701, 720, 723, 749, 764, 843, 919, 934]), e.ps(8, 897), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 97)]))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, [213, 231, 233, 264, 356, 368, 442, 480, 483, 509, 549, "https://www.bbc.com/sport", "mixed martial arts", 700, 701, 720, 723, "nhl", 749, 764, 843, 919, 934]), e.ge(3), 3), 2592e6)]), e.cb(0, e.a([e.y(15, 794), e.ref(5)]), e.ge(1), 1)])),
                        176953: e.q(e.acqs([e.tw(e.cb(0, e.a([e.pe(28, "premier-league"), e.os(e.s, 1, ["arsenal", "aston villa", "brighton", "chelsea", "crystal palace", "everton", "fulham", "liverpool", "man city", "man utd", "manchester united", "new castle", 797, "tottenham"]), e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, "Premier League"))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176955: e.r(39, 15, 794, ["domestic_animal", "pets", "animal_rights", "animal_welfare", "animal"], ["properties", "classifications_watson", "categories"], [e.s_(6, 81)]),
                        176957: e.r(45, e.pc_(5, 843), e.w, 8, ["sport_rugby_content", "sport_rugbyunion_content"], ["properties", "classifications_watson", "categories"], e.o([e.s_(6, 106)])),
                        176967: e.q(e.acqs([e.tw(e.cb(0, e.o([e.pe(8, "sport_horseracing_content"), e.y(13, 557), e.pc_(5, 557), e.os(e.s, 1, ["sport/horse-racing", "sport/live/horse-racing"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, "/sports/equine sports/horse racing"), e.s_(6, 104)]))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        176968: e.r(24, 18, e.y(13, 233), e.os(e.cx, 5, [233, 723]), e.ref(18), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 99)]))),
                        177226: e.r(57, ["0gfcFMc6", "4F9PYg0m", "KpejbBYj", "VdLfydzn"]),
                        177658: e.r(61, "http://www.bbc.com/storyworks/reimagining-applications/why-increasing-it-complexity-requires-a-new-approach"),
                        178814: e.r(51, 166, 166),
                        179682: e.r(56, 3, [234]),
                        179771: e.r(56, 1, ["https://www.bbc.com/storyworks/a-new-way-to-see-the-world/crafting-the-perfect-cruise-experience", "https://www.bbc.com/storyworks/a-new-way-to-see-the-world/cultured-cruising-the-thinking-persons-cruise-line"]),
                        180784: e.r(60, "influential_with_katty_kay"),
                        180785: e.r(60, "executive_lounge"),
                        180951: e.q(e.acqs([e.tw(e.cb(0, e.ref(55), e.ge(3), 3), 2592e6), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 173884)), e.cw(5, e.pe(14, 173884)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 173878)), e.cw(5, e.pe(14, 173878)), e.ge(1))])),
                        180952: e.r(42, e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 175828)), e.cw(5, e.pe(14, 175828)), e.ge(1)), 89781, 89781, 89782, 89782),
                        180953: e.r(42, e.cb(7, e.os(e.s, 19, [139, 140]), e.ge(1), 1), 141471, 141471, 175828, 175828),
                        180956: e.r(77, 2, 3, 3216005034, 3216005034),
                        180957: e.r(77, 2, 3, 3257084782, 3257084782),
                        180959: e.r(77, 2, 3, 3272418419, 3272418419),
                        181008: e.r(62, [3237583671, 3282525080]),
                        184006: e.r(48, e.ps(1, 569), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 10), e.s_(6, "/art and entertainment/movies/film festivals and awards"), e.s_(6, "/movies/documentary movies"), e.s_(6, "/movies/indie and arthouse movies")])), 5, [947, "sundance_film_festival", 656, 241, 285, 988, 582, 389], 7, 388),
                        184577: e.r(77, 2, 3, 3278371131, 3278371131),
                        184706: e.r(77, 3, 2, 3521649267, 3521649267),
                        185040: e.r(64, 3453290619),
                        185107: e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, 9, ["civil servant", "congressman", "congresswoman", "councillor", 511, "mp", "senator"]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.ps(34, ".gov"), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        185405: e.r(61, "https://www.bbc.com/storyworks/advertiser-content/workplaces-of-the-future/bridging-the-finance-hr-gap-delivers-positive-business-outcomes"),
                        186327: e.r(63, 48),
                        186328: e.r(63, 48),
                        186897: e.r(77, 2, 3, 3529069837, 3529069837),
                        187063: e.r(62, [3529069837, 3320350791, 3452745026, 3531651257, 3287547250]),
                        187218: e.r(38, ["exoplanets", "planets", 784, "nasa_perseverance_mars_rover", "Nasa", "space_launch_system_(sls)", "space_exploration", "space_debris", "Space debris", "space_tourism", "Aerospace", "space"], [e.s_(2, "outer space"), e.s_(2, "space exploration"), e.s_(2, "space race"), e.s_(2, "space station"), e.s_(2, "spaceflight")]),
                        187251: e.r(100, 6, e.as(e.cx, 21, ["gt_positive", "gs_news"]), 3, 3),
                        188096: e.r(105, e.ps(15, 794), e.os(e.w, 10, [490, "video", 957, 273, 589, 367, 726])),
                        188160: e.r(74, 0, 0, e.pc_(11, "watch_list"), e.s, 1, ["https://www.bbc.com/culture/article/20240221-dune-part-two-review-denis-villeneuves-science-fiction-sequel-is-jaw-droppingly-weird", "https://www.bbc.com/culture/article/20240223-20-days-in-mariupol-the-ukraine-doc-set-to-follow-navalny-oscar-win", "https://www.bbc.com/culture/article/20240301-10-of-the-best-tv-shows-to-watch-this-march", "https://www.bbc.com/culture/article/20240321-road-house-review-a-less-pleasurable-guilty-pleasure-than-the-original", "https://www.bbc.com/culture/article/20240412-challengers-review-a-lot-of-sport-a-lot-of-wigs-and-a-lot-of-sexual-tension-in-luca-guadagninos-menage-tennis", "https://www.bbc.com/culture/article/20240425-11-best-films-to-watch-in-may"]),
                        188161: e.r(74, 0, 0, e.a([e.pc_(11, 182), e.pc_(5, 182)]), e.s, 1, ["https://www.bbc.com/future/article/20240501-how-ai-is-testing-the-boundaries-of-human-intelligence", "https://www.bbc.com/reel/video/p06qyg6f/can-artificial-intelligence-predict-the-future-of-fashion-", "https://www.bbc.com/reel/video/p079x98n/the-tech-keeping-planes-in-the-sky", "https://www.bbc.com/reel/video/p07n0fz6/what-happens-to-our-digital-lives-when-we-die-", "https://www.bbc.com/reel/video/p093h7hr/what-happens-when-ai-has-an-overactive-imagination-", "https://www.bbc.com/reel/video/p0hkflt4/how-ai-and-deepfakes-are-changing-politics", "https://www.bbc.com/reel/video/p0hv591s/ai-v-the-mind-who-has-the-edge-"]),
                        188217: e.r(64, 3543257935),
                        188255: e.r(64, 3337376784),
                        188393: e.r(64, 3544281243),
                        188919: e.r(77, 2, 3, 3531230354, 3531230354),
                        188920: e.r(66, 3288620554),
                        188921: e.r(66, 3289907741),
                        188922: e.r(66, 3288781133),
                        189307: e.r(64, 3535221986),
                        189330: e.r(56, 1, ["https://www.bbc.com/storyworks/mastery-at-sea/mastery-at-sea", "https://www.bbc.com/storyworks/mastery-at-sea/queen-of-the-ocean-a-new-era-of-mastery-at-sea", "https://www.bbc.com/storyworks/travel/a-way-to-get-away/only-at-sea", "https://www.bbc.com/storyworks/travel/a-way-to-get-away/solo-serenity-the-appeal-of-travelling-on-your-own"]),
                        189338: e.r(4, 1, 0, e.o([e.ref(33), e.ref(4), e.ref(20)]), 234, [e.ref(22), e.ref(30)]),
                        189339: e.r(3, 0, e.o([e.ref(6), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 30), e.s_(6, "/business and finance/economy/financial crisis"), e.s_(6, "/business and finance/economy/financial reform"), e.s_(6, "/business and finance/economy/financial regulation"), e.s_(6, "/business and finance/industries/financial industry"), e.s_(6, 52)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 226), e.s_(2, 363), e.s_(2, 464), e.s_(2, 653), e.s_(2, 672), e.s_(2, "online and offline"), e.s_(2, 769), e.s_(2, 902)])), e.ref(21)]), 1, e.ref(54), 3, 3, 3, 234),
                        189340: e.r(3, 1, e.os(e.s, 9, [272, 281, 297, 314, 378, 451, 517, 523, 534, 618, 658, 663, 666, 802, 814, 837, 868, 940, 962]), 0, e.o([e.ref(32), e.os(e.s, 1, [272, 291, 517, 523, 534, 618, 666, 814, 837, 869, 940]), e.ref(27), e.ref(35), e.ref(47)]), 3, 3, 3, 234),
                        189341: e.r(1, e.y(3, 234), e.tw(e.cb(0, e.ref(26), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.ref(37), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.ref(0), e.ge(3), 3), 2592e6)),
                        189342: e.r(41, 3, 3, 9, e.y(3, 234), 3, 3),
                        189949: e.r(56, 1, ["storyworks/a-wellness-ecosystem/creating-a-wellness-ecosystem", "storyworks/a-wellness-ecosystem/from-sports-to-space-nutrition"]),
                        192091: e.r(61, "https://www.bbc.com/storyworks/messages-home-from-paradise/western-australia-a-land-of-abundance"),
                        192184: e.r(52, "VideoAdClick", e.os(e.e, ["ad", "creative_id"], [6733981401, 6733981374, 6733979505])),
                        193201: e.r(75, 3, [3560806460, 3067488692, 3232098901, 3260671082], 4, [3560806460, 3067488692, 3260671082, 3232098901]),
                        194111: e.r(66, 3563398503),
                        194112: e.r(66, 3560423515),
                        194113: e.r(66, 3562716135),
                        194541: e.r(56, 26, ["galaxy", "samsung"]),
                        194542: e.r(56, 26, [194, "iphone"]),
                        194543: e.r(56, 26, [315, "google"]),
                        195124: e.r(76, 2, 3, 13, 13),
                        195230: e.q(e.acqs([e.tw(e.cb(0, e.os(e.w, 12, [157, 153]), e.ge(3), 3), 145152e5), e.tw(e.cb(0, e.as(e.x, 12, [153, 157]), e.ge(1), 1), 1728e5), e.cb(0, e.ref(5), e.ge(1), 1)])),
                        196328: e.r(66, 3555615773),
                        196454: e.r(70, e.cb(3, e.pe(4, 3568444718), e.ge(1), 1), e.cb(0, e.bsc_(1, ["BVW4/Na/"]), e.ge(1), 1), e.cb(0, e.bsc_(1, ["2KT8+HjB"]), e.ge(1), 1)),
                        196455: e.q(e.ocqs([e.cb(0, e.bsc_(1, ["m9rwCXWn"]), e.ge(1), 1), e.cb(3, e.pe(4, 3566551155), e.ge(1), 1)])),
                        196843: e.r(104, 2592e5, 0, e.a([e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.y_(2, 159), e.y_(2, 142), e.y_(2, 158), e.y_(2, 161), e.e_(2, "Tim Hortons"), e.y_(2, 169), e.e_(2, "Fast food"), e.e_(2, "Fast food restaurant"), e.y_(2, 154), e.y_(2, 149)])), e.af_i(["properties", "classifications_watson", "keywords"], e.o([e.e_(2, "Cheeseburger"), e.e_(2, "Burgers"), e.e_(2, "Big Mac"), e.e_(2, "Breakfast"), e.e_(2, "Burger"), e.e_(2, "Fries"), e.e_(2, "Restaurant"), e.e_(2, "Fast Food"), e.y_(2, 159), e.y_(2, 142), e.e_(2, "Shake Shack"), e.e_(2, "Mary Browns"), e.e_(2, "Popeyes"), e.e_(2, "Dominoes"), e.y_(2, 158), e.y_(2, 161), e.e_(2, "Tim Horton's"), e.y_(2, 169), e.y_(2, 154), e.y_(2, 149)]))]), 3, 3),
                        196939: e.r(105, e.pe(1, "https://www.bbc.com/watch-live-news"), e.y(12, 147)),
                        197769: e.r(103, 3, 4, 3571470381),
                        203327: e.r(77, 3, 2, 3593700237, 3593700237),
                        205e3: e.r(103, 2, 4, 3577664125),
                        206653: e.r(103, 0, 32, "https://www.bbc.com/storyworks/advertiser-content/babbel/language-learning-that-works-"),
                        206662: e.r(103, 3, 4, 3609288169),
                        207465: e.r(66, 3607951185),
                        207689: e.r(103, 2, 4, 3607951185),
                        208648: e.r(54, e.y(12, 167), e.af_u(["properties", "classifications_watson", "keywords"], e.e_(2, "prostate cancer"))),
                        209017: e.q(e.ocqs([e.tw(e.cb(1, e.os(e.s, 1, [212, 317, 327, 342, 365, "data centres", 377, 526, 613, 638, 647, 744, 805, 886, 922, 924]), e.ge(3), 3), 2592e6), e.cb(0, e.o([e.os(e.cx, 5, [860, 192, 578, 744, 594]), e.os(e.s, 20, [180, 181, 192, 326, 499, 578, 594, 744, 754, 860, 926]), e.os(e.s, 16, [180, 181, 192, 326, 499, 578, 594, 744, 754, 860, 926]), e.os(e.s, 28, [594, 860])]), e.ge(1), 1), e.tw(e.cb(0, e.bsc_(7, ["/rexpqws", "MPehbFGj"]), e.ge(30), 30), 2592e6)])),
                        210889: e.r(103, 3, 4, 3590980494),
                        211065: e.r(1, e.pn(33, "Boston"), e.tw(e.cb(3, e.pe(4, 3623978636), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.pe(1, "https://www.bbc.com/weather/4930956"), e.ge(30), 30), 2592e6), e.cb(0, e.af_i(["properties", "classifications_watson", "keywords"], e.e_(2, "'red sox'")), e.ge(1), 1)),
                        211857: e.r(5, 0, 0, e.o([e.os(e.cx, 5, [886, 375, 204]), e.os(e.s, 16, ["ai", 190, 203, 375, "digital economy", 886, 924]), e.af_u(["properties", "classifications_watson", "concepts"], e.y_(2, 146))]), 3, 3, [e.os(e.cx, 22, [204, 181, 499, "Grammarly", "ChatGPT", "Artificial Intelligence", 143]), e.os(e.cx, 25, [204, 143, "Chatgpt", 146]), e.bsc_(31, ["SVJlJg9b", "VgBAxUo7", "rkwjZ6oV"])]),
                        212119: e.r(53, e.af_u(["properties", "classifications_watson", "keywords"], e.a([e.n_(2, "yellow movement"), e.n_(2, "weil's"), e.n_(2, "ubs_kwbl"), e.n_(2, "train crash"), e.n_(2, "trail"), e.n_(2, "testified"), e.n_(2, "tear gas"), e.n_(2, "tax probe"), e.n_(2, "tax evasion"), e.n_(2, "tax case"), e.n_(2, "suicide"), e.n_(2, "stealing"), e.n_(2, "spoilt"), e.n_(2, "scandal"), e.n_(2, "russian_ukrainian_war_kwbl"), e.n_(2, "russian"), e.z_(2, 845), e.n_(2, "raoul weil"), e.n_(2, "prosecution"), e.n_(2, "prison"), e.n_(2, "political_kwbl"), e.n_(2, "plane crash"), e.n_(2, "penalties"), e.z_(2, 762), e.n_(2, "offshore haven"), e.n_(2, "mossack"), e.n_(2, "money laundering"), e.n_(2, "middleman"), e.n_(2, "malaysia scandal"), e.n_(2, "legal case"), e.n_(2, "laundering"), e.n_(2, "launder money"), e.n_(2, "jail"), e.n_(2, "imprisonment"), e.n_(2, "illegal banking"), e.n_(2, "i portici"), e.n_(2, "human trafficking"), e.n_(2, "french tax case"), e.n_(2, "french court"), e.n_(2, "fraudster"), e.n_(2, "financial scandal"), e.n_(2, "financial crime"), e.n_(2, "failed"), e.n_(2, "discharged"), e.n_(2, "detained"), e.n_(2, "criminals"), e.n_(2, "court case"), e.n_(2, "corrupt"), e.n_(2, "conspiring"), e.n_(2, "bribery"), e.n_(2, "banker trail"), e.n_(2, "bank fraud"), e.n_(2, "arrogant"), e.n_(2, "abrasive"), e.n_(2, "Yeo Jiawei"), e.n_(2, "UBS scandal"), e.n_(2, "UBS investigated"), e.n_(2, "UBS fine"), e.n_(2, "Tom Naratil"), e.n_(2, "Suni Harford"), e.n_(2, "Suissesecrets"), e.n_(2, "Suisse-Secret"), e.n_(2, "Suisse Secrets"), e.n_(2, "Sergio Ermotti"), e.n_(2, "Secret Credit Suisse Account"), e.n_(2, "Sabine Keller-Busse"), e.n_(2, "Robert Karofsky"), e.n_(2, "Ralph Hamers"), e.n_(2, "Piero Novelli"), e.n_(2, "Panama Paper"), e.n_(2, "Naureen Hassan"), e.n_(2, "Mossack Fonseca"), e.n_(2, "Mike Dargan"), e.n_(2, "Markus Ronner"), e.n_(2, "Markus Diethelm"), e.n_(2, "Malaysian Official 1"), e.n_(2, "Malaysia Development Berhad"), e.n_(2, "MAS"), e.n_(2, "Luca Sirotti"), e.n_(2, "Low Taek Jho"), e.n_(2, "Kirt Gardner"), e.n_(2, "Jose Renato Carvalho"), e.n_(2, "Jho Low"), e.n_(2, "Iqbal Khan"), e.n_(2, "French penalty"), e.n_(2, "Falcon Bank"), e.n_(2, "Ex-BSI banker"), e.n_(2, "Edmund Koh"), e.n_(2, "Dena Iverson"), e.n_(2, "DBS fined"), e.n_(2, "Colm Kelleher"), e.n_(2, "Christian Bluhm"), e.n_(2, "Barbara Levi"), e.n_(2, "Axel Weber"), e.n_(2, "Axel Lehmann"), e.n_(2, "Archegos"), e.n_(2, "Amicorp"), e.n_(2, "1Malaysia Development Berhad"), e.n_(2, "13 violations"), e.n_(2, "1 mdb")]))),
                        213030: e.r(57, ["1WL3JD0c"]),
                        213800: e.r(89, ["properties", "classifications_watson", "keywords"], [e.os(e.cx, 5, [175, 283, 546]), e.os(e.s, 20, [175, 283, 322, 323, 543, 544, 545, 546, 710, 711, 758, 953, 1004]), e.os(e.s, 16, [175, 283, 322, 323, 543, 544, 545, 546, 710, 711, 758, 953, 1004]), e.ps(7, 175), e.ps(13, 323)], [e.e_(2, "scuba diving"), e.e_(2, "free running"), e.e_(2, "iron man"), e.e_(2, "triatholon"), e.e_(2, "bungee jump"), e.y_(2, 575), e.e_(2, "Alpine skiing"), e.y_(2, 759), e.y_(2, 283), e.y_(2, 476), e.y_(2, 176), e.e_(2, "mountain climbing"), e.y_(2, 624), e.y_(2, 442)]),
                        213933: e.r(57, ["I0JQigB8"]),
                        214072: e.r(57, ["tuura7kg", "zAxocXD8"]),
                        214073: e.r(57, ["7GaoGO9z"]),
                        214075: e.r(57, ["UG0vMwJz"]),
                        214076: e.r(57, ["A42m9rBG", "EZaYOYP1", "FORgbiSH", "Hbp+r1q0", "JwyO8ILk", "KoDbRCvZ", "RchWFRKh", "fx0qXw+F", "lmxNKvgI", "yGdQgBnC"]),
                        214227: e.r(57, ["lyF5G9Lo"]),
                        214317: e.r(57, ["6VaaSL7x", "jyGLUO1C"]),
                        214856: e.r(64, 3662458524),
                        214857: e.r(64, 3668776926),
                        214924: e.r(76, 3, 2, 31, 31),
                        214925: e.r(63, 31),
                        214926: e.r(89, ["properties", "classifications_watson", "categories"], [e.os(e.s, 20, [207, 795, 809, 810]), e.os(e.s, 16, [207, "guide price", 795, 809, 810])], [e.y_(6, 85), e.y_(6, 87), e.y_(6, 84)]),
                        215152: e.r(53, e.o([e.os(e.s, 20, [177, 207, 208, 425, 563, 673, 707, 724, 795, 810, 977]), e.os(e.s, 16, [177, 207, 208, 425, 563, 673, 707, 724, 795, 810, 977])])),
                        216183: e.r(73, 0, e.bsc_(1, ["7ST/oQBq"]), 0, e.bsc_(1, ["YCsTfQoX"]), 0, e.bsc_(1, ["afwWCdV1"]), 3683694623),
                        216215: e.r(57, ["49tQ5fl8", "A42m9rBG", "EZaYOYP1", "EsYqY4XB", "JwyO8ILk", "NoysZFab", "Qz/Vf8/M", "RchWFRKh", "dPOiBR12", "jwfhezfX", "kZR/cFnX", "lmxNKvgI", "puNXXHDb"]),
                        216262: e.r(100, 0, e.bsc_(1, ["GjN7qtY1", "f1rjTANX"]), 3, 3),
                        217787: e.r(57, ["48ZCpKws", "6Ftk2EK+", "7Q7KmV/H", "CM8FCd1O", "NG/L+k0w", "OnlOFn/A", "YgDPWPBr", "s5Sb7ffI", "sX7pkESK", "x9byoPJX"]),
                        217822: e.r(87, e.ps(34, ".mil"), 1, 1, 0, e.o([e.pc_(5, 696), e.os(e.s, 20, [183, 198, 232, 318, 376, 481, 497, 696, 892, 965]), e.os(e.s, 16, [183, 198, 232, 318, 376, 481, 497, 696, 892, 965])]), 3, 3),
                        218446: e.r(100, 0, e.af_i(["properties", "classifications_watson", "keywords"], e.o([e.e_(2, "Heart"), e.e_(2, "ECG"), e.e_(2, "Respiratory"), e.e_(2, "Cardio"), e.e_(2, "Cardiologist"), e.e_(2, "Cardiology"), e.e_(2, "Heart-Health")])), 3, 3),
                        219231: e.r(76, 3, 2, 42, 42),
                        219249: e.r(57, ["5SRhzUXx", "Lm/ysCSR", "aralvVC8", "phJSHbNb"]),
                        219642: e.q(e.ocqs([e.tw(e.cb(0, e.t, e.ge(3), 3), 2592e6), e.cb(0, e.o([e.pc_(5, 370), e.os(e.s, 20, [190, 370, 499, 524, 901, 925, 927, 928]), e.os(e.s, 16, [190, "authentication", 370, 499, 524, 901, 925, 927, 928])]), e.ge(1), 1)])),
                        219739: e.r(52, "VideoPlay", e.t),
                        220222: e.r(100, 0, e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.y_(2, 509), e.y_(2, 934), e.y_(2, 480), e.y_(2, 884)])), 3, 3),
                        221e3: e.r(106, 3, 3, e.af_i(["properties", "classifications_watson", "keywords"], e.y_(2, 642)), 5, [331, 642], e.s, 20, [331, 345, 351, 511, 621, 622, 642, 645, 646, 788, 827], 16, [331, 345, 351, 511, 621, 622, 642, 645, 646, 788, 827]),
                        221912: e.r(57, ["oShYC3vD"]),
                        222250: e.r(57, ["7nlRVcVK"]),
                        223395: e.r(57, ["pw9oZDrJ"]),
                        223396: e.r(57, ["K1UvKauz"]),
                        223397: e.r(57, ["WNs25jpa"]),
                        223398: e.r(57, ["gSEnTA83"]),
                        223399: e.r(57, ["ToqbBg0/"]),
                        223400: e.r(57, ["NCoWL36y"]),
                        223401: e.r(57, ["AVJR2paB"]),
                        223402: e.r(57, ["5gh7aItS"]),
                        223404: e.r(57, ["lkw9v/kD"]),
                        223405: e.r(57, ["2sp6nmV2"]),
                        223406: e.r(57, ["1fFquxAG"]),
                        225088: e.r(57, ["BCID3Fbz", "CBOpTyBX", "ldHGlcGd", "t8eyNoKR"]),
                        226837: e.r(57, ["y8tnUEKw"]),
                        226928: e.r(57, ["KPqQOWdj", "cxrrSnag"]),
                        227134: e.r(64, 3729232533),
                        229655: e.r(57, ["rodFyBhz"]),
                        230962: e.r(57, ["HAsQX+6g", "ap7aVlDs", "xY5rYwNk"]),
                        231667: e.r(57, ["I7eGMf2p"]),
                        231785: e.r(64, 3707763071),
                        232022: e.q(e.cb(0, e.bsc_(["isp_info", "isp"], ["gdTSRrjJ", "o9VvuvRL", "r4ACMPdS", "syePn5Sc"]), e.ge(1), 1)),
                        39204: e.r(53, e.t),
                        41376: e.r(54, e.nt(e.ps(26, 315)), e.os(e.s, 26, [607, 846])),
                        41414: e.q(e.cb(2, e.t, e.ge(1), 1)),
                        56344: e.r(66, 2725338666),
                        56634: e.r(101, 0, e.pe(17, "bbccom.live.site.reel"), e.ps(1, "bbc.com/reel")),
                        56691: e.r(61, "the-new-normal"),
                        58133: e.r(101, 2, e.os(e.w, 35, ["bbccom_native_pwa_1", "bbccom_native_slice_l", "bbccom_native"]), e.os(e.s, 35, ["native_pwa", "native_slice"])),
                        70302: e.r(66, 2841341756),
                        73331: e.r(100, 2, e.t, 1, 1),
                        73342: e.r(69, e.scq(e.tw(e.sw(4, e.t, ["properties", "aggregations", "PageviewEngagement", "engaged_time"]), 12096e5), e.vq(e.sw(8, e.t, ["properties", "engaged_time"])), e.ge(120)), e.scq(e.tw(e.cw(4, e.pge(30, 90)), 2592e6), e.vq(e.sw(8, e.t, ["properties", "engaged_time"], e.ge(90))), e.ge(3))),
                        74314: e.r(100, 0, e.ref(39), 1, 1),
                        75548: e.r(86, 5184e6, 1, e.os(e.s, 9, ["app development", 380, "enterprise", 464, "http://www.bbc.com/news/business/", 588, 613, "operations", 805, "product engineer", 924, "user experience"]), 2, 2, 5184e6, 6, e.af_u(["properties", "grapeshot"], e.bsc([], ["FfGrNN7Z", "xT825yNr"])), 2, 2),
                        77811: e.r(65, [3665306132, 2872219128]),
                        81843: e.r(66, 2871051266),
                        88504: e.r(86, 15552e6, 2, e.os(e.e, 29, [5076836393, 5072904230, 5058138122, 5047638231, 4990176602, 4970895254, 4970460956, 4891280791, 4886488532, 4881151403, 4827617267, 4754380283, 4740987040, 4572069502, 4567219608, 4524357727, 4444499458, 4436930813, 217117098, 216122538, 208575258, 56834418, 53072298, 48515898, 28476858, 28415658, 28376778, 28324098, 28314858, 28250898, 28238898, 28025658, 27972378, 27941658, 27910938]), 1, 1, 15552e6, 2, e.os(e.e, 4, [2925485275, 2925485179, 2925484969]), 1, 1),
                        88505: e.r(62, [3061668446, 3057993263, 3057993350, 3057993554, 3032144578, 3034332908, 3034333679, 3035283801, 3002574154, 3002451566, 3002592370, 3003077498, 2972262958, 2972277497, 2972368522, 2972942581, 2945987886, 2944444006, 2945021217, 2945021718, 2926126212, 2925485275, 2925485179, 2925484969]),
                        88624: e.r(75, 2, [2816998798, 2816889836, 2802835618, 2379689675, 2579030840, 2802679106, 2824815990, 2842871468, 2878850083, 2805509243, 2816999176, 2824116142, 2824116643, 2479899798, 2830003663, 2805509699, 2781633095, 2824117675, 2905467317, 2827721208, 2782639197, 2827288533, 2824026197, 2479410394, 2843114320, 2829987512, 2479900473, 2866239556, 2702669221, 2716878473, 2716878719, 2789220893, 2879351968, 2893866387, 2856436692, 2766183250, 2688501075, 2890603810, 2653579816, 2494154289, 2806266660, 2462984099, 2759981987, 2397342179, 2900945649, 2692028848, 2497378544, 2917386217, 2387473326, 2362258689, 2396730683, 2424940266, 2581973887, 2763833695, 2862249823, 2355707960, 2517688288, 2439532019, 2399604909, 2489668016, 2918744365, 2644337966, 2918744296, 2415392044, 2887071256, 2620857003, 2835469430, 2588885924, 2637663767, 2856522192, 2714727082, 2483038024, 2746945426, 2493023210, 2775972662, 2691753531, 2529264699, 2658143995, 2634099747, 2841981797, 2727170613, 2800037997, 2765628436, 2657897666, 2760226076, 2752754385, 2513855473, 2522980294, 2752752651, 2657896271, 2790148042, 2542921866, 2830973757, 2753361060, 2529595383, 2550101925, 2667600469, 2773395779, 2402039968, 2675836703, 2414159482, 2702716490, 2682058722, 2881934598, 2730649189, 2754580224, 2882624071, 2773785973, 2773785739, 2846384777, 2754112213, 2847225060, 2706955394, 2707850634, 2871718251, 2870994419, 2728210473, 2774367801, 2774333691, 2727127373, 2820110791, 2820110608, 2707486021, 2871228166, 2870995421, 2782205234, 2783205105, 2908955452, 2753607014, 2783204616, 2783203623, 2820111298, 2819976845, 2846635915, 2846381243, 2706945062, 2736728777, 2726764484, 2833619745, 2896195864, 2768599578, 2685396937, 2733899666, 2744153175, 2721854099, 2720130435, 2719758223, 2654217089, 2690442127, 2707453091, 2816773094, 2706235893, 2691195332, 2730347511, 2767845013, 2803161014, 2738924335, 2769629653, 2708590491, 2708215657, 2708217565, 2708217805, 2740337444, 2697276402, 2740916609, 2885774604, 2770166620, 2740338620, 2718729100, 2910915985, 2681420800, 2913948704, 2914188859, 2743979201, 2769094974, 2749623355, 2769629656, 2885262181, 2878005510, 2899804276, 2718729325, 2805814923, 2813009204, 2676358962, 2813056938, 2732689569, 2773748563, 2719519638, 2651734682, 2838466006, 2778339259, 2647004099, 2732690838, 2696908505, 2914944452, 2841126125, 2841121349, 2675856878, 2866304866, 2869354212, 2854055194, 2884833819, 2857412139, 2676138407, 2745180693, 2743322353, 2676138668, 2721174425, 2775143467, 2690691589, 2615596762, 2847564940, 2754442686, 2905543616, 2775836315, 2838371930, 2615473602, 2907965163, 2879370622, 2897288797, 2851553710, 2874288867, 2868765507, 2804427579, 2904043399, 2823094496, 2640831318, 2843093261, 2773055897, 2793335478, 2744062291, 2700822141, 2753805575, 2749270799, 2798880386, 2685963815, 2783860281, 2793646927, 2901019903, 2903811060, 2799132955, 2736542307, 2725437484, 2790285502, 2789973077, 2743941249, 2622589647, 2832889810, 2878008882, 2688181107, 2790440547, 2810536246, 2920698427, 2661634253, 2793266593, 2904280474, 2886376991, 2790228626, 2844755207, 2894649967, 2907605503, 2751411279, 2824476860, 2740856799, 2845010314, 2896847404, 2882033950, 2774034712, 2908020843, 2808163860, 2889065925, 2757151148, 2732488977, 2740811662, 2757283130, 2769862701], 29, [5068371990, 5005294506, 5005104362, 4940695334, 4926838965, 4924694773, 4913131816, 4863619382, 4791750912, 4692647973, 4677041403, 4644763394, 4632121188, 4628308522, 4601206509, 4572069502, 4484577481, 218579418, 215886618, 212663538, 198611178, 101741778, 91522578, 84667098, 39726018, 36644538, 28442058, 28375818, 28346538, 28325538, 28317378, 28287618, 28229058, 28225578, 28209978, 28201938, 28191618, 28185738, 28125378, 28116258, 28108818, 28073658, 28045338, 28041618, 28029018, 28005618, 27948018, 27938658, 27930138, 27927378]),
                        88766: e.r(65, [2816889836, 2802835618, 2379689675, 2579030840, 2802679106, 2824815990, 2842871468, 2878850083, 2805509243, 2816999176, 2824116142, 2824116643, 2830003663, 2805509699, 2781633095, 2824117675, 2905467317, 2827721208, 2782639197, 2827288533, 2824026197, 2843114320, 2829987512, 2479900473, 2866239556, 2702669221, 2716878473, 2716878719, 2789220893, 2879351968, 2893866387, 2856436692, 2766183250, 2688501075, 2890603810, 2653579816, 2494154289, 2806266660, 2462984099, 2759981987, 2900945649, 2692028848, 2497378544, 2917386217, 2362258689, 2396730683, 2424940266, 2581973887, 2763833695, 2862249823, 2355707960, 2517688288, 2489668016, 2918744365, 2644337966, 2918744296, 2415392044, 2887071256, 2835469430, 2588885924, 2637663767, 2856522192, 2714727082, 2746945426, 2775972662, 2691753531, 2529264699, 2658143995, 2634099747, 2841981797, 2727170613, 2800037997, 2765628436, 2657897666, 2760226076, 2752754385, 2513855473, 2522980294, 2752752651, 2657896271, 2790148042, 2542921866, 2830973757, 2753361060, 2529595383, 2550101925, 2667600469, 2773395779, 2402039968, 2675836703, 2414159482, 2702716490, 2682058722, 2881934598, 2730649189, 2754580224, 2882624071, 2773785973, 2773785739, 2846384777, 2754112213, 2847225060, 2706955394, 2707850634, 2871718251, 2870994419, 2728210473, 2774367801, 2774333691, 2727127373, 2820110791, 2820110608, 2707486021, 2871228166, 2870995421, 2782205234, 2783205105, 2908955452, 2753607014, 2783204616, 2783203623, 2820111298, 2819976845, 2846635915, 2846381243, 2706945062, 2736728777, 2726764484, 2833619745, 2896195864, 2685396937, 2733899666, 2744153175, 2721854099, 2720130435, 2719758223, 2654217089, 2690442127, 2707453091, 2816773094, 2706235893, 2691195332, 2767845013, 2738924335, 2769629653, 2708590491, 2708215657, 2708217565, 2708217805, 2740337444, 2697276402, 2740916609, 2885774604, 2770166620, 2740338620, 2718729100, 2910915985, 2681420800, 2914188859, 2913948704, 2743979201, 2769094974, 2749623355, 2769629656, 2885262181, 2878005510, 2899804276, 2718729325, 2805814923, 2813009204, 2676358962, 2813056938, 2732689569, 2773748563, 2719519638, 2651734682, 2838466006, 2778339259, 2647004099, 2732690838, 2696908505, 2914944452, 2841126125, 2841121349, 2675856878, 2866304866, 2869354212, 2854055194, 2884833819, 2857412139, 2676138407, 2745180693, 2743322353, 2676138668, 2721174425, 2775143467, 2690691589, 2615596762, 2847564940, 2754442686, 2905543616, 2775836315, 2838371930, 2615473602, 2907965163, 2879370622, 2897288797, 2851553710, 2874288867, 2868765507, 2804427579, 2904043399, 2823094496, 2640831318, 2843093261, 2773055897, 2793335478, 2744062291, 2700822141, 2753805575, 2749270799, 2798880386, 2685963815, 2783860281, 2793646927, 2901019903, 2903811060, 2799132955, 2736542307, 2725437484, 2790285502, 2789973077, 2743941249, 2746141827, 2622589647, 2832889810, 2878008882, 2688181107, 2790440547, 2810536246, 2920698427, 2661634253, 2793266593, 2904280474, 2886376991, 2790228626, 2844755207, 2894649967, 2907605503, 2751411279, 2824476860, 2740856799, 2845010314, 2896847404, 2882033950, 2774034712, 2908020843, 2808163860, 2889065925, 2757151148, 2732488977, 2740811662, 2757283130, 2769862701]),
                        89492: e.r(68, "1"),
                        89493: e.r(67, 139),
                        89494: e.r(67, 140),
                        89495: e.r(68, "4"),
                        89496: e.r(68, "5"),
                        89497: e.r(68, "6"),
                        89747: e.r(66, 2930747743),
                        89780: e.r(81, "99a76b81-e95a-4414-bda7-fee2c836b6ac", "89492", .68464655),
                        89781: e.r(81, "0f87b626-b6bd-494b-b4c1-959ac9648408", "89493", .7061623),
                        89782: e.r(81, "b7df4daf-d41e-4b1e-b59b-0de486d002f2", "89494", .69690907),
                        89783: e.r(81, "f38f49ef-3896-4718-8d8c-b154cc5bb4b5", "89495", .7215554),
                        89784: e.r(81, "fbb35975-7003-4e29-9f26-edd82857979d", "89496", .7068782),
                        89786: e.r(81, "4284a398-9bd4-4cef-ba13-d2079de2573f", "89497", .725531),
                        90032: e.r(83, .7235995),
                        90033: e.r(83, .87724257),
                        90034: e.r(83, .8201423),
                        90449: e.r(104, 15552e6, 2, e.os(e.e, 29, [5067056375, 5045316233, 4943102608, 4411210969, 222089058, 217566858, 194235738, 80478498, 78819258, 73132818, 73108458, 47436738, 28472538, 28386378, 28346178, 28322058, 28263378, 28209378, 28156818, 28156458, 28050498, 28049898, 27967098, 27929898]), 1, 1),
                        91149: e.r(81, "df2d4c11-12b5-4676-9f37-ded17d0728e2", "90449", .74556607),
                        91654: e.q(e.tw(e.cb(6, e.af_u(["properties", "grapeshot"], e.bsc([], ["DdYf0pjs", "w2PqEhn4"])), e.ge(2), 2), 7776e6)),
                        92886: e.q(e.acqs([e.tw(e.cb(0, e.t, e.ge(3), 3), 7776e6), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], 89780)), e.cw(5, e.pe(14, 89780)), e.ge(1))])),
                        92946: e.r(62, [2686060527, 2711211814, 2725427477, 2769245666, 2597489220, 2805509243, 2878850083, 2805509699, 2890291613, 2703570477, 2711572794, 2707782206, 2703926315, 2885455891, 2599020445, 2714852637, 2884981855, 2699688611, 2472635035, 2731641572, 2802188767, 2746325700, 2351652932, 2805894141, 2587316565, 2671063808, 2662401822, 2579678303, 2671000210, 2671268044, 2671000792, 2918744296, 2804027977, 2898341979, 2639500789, 2863061483, 2637663767, 2752753581, 2756913501, 2849841304, 2679937908, 2826760283, 2683160768, 2750066595, 2687617825, 2768986732, 2869027574, 2685818078, 2679909028, 2750408116, 2726561686, 2687470250, 2815475267, 2805762442, 2521120723, 2537302486, 2724520481, 2626308212, 2675317081, 2552410218, 2748496208, 2772262796, 2411527887, 2903043355, 2897800263, 2736266588, 2882508906, 2906821320, 2727532775, 2699546624, 2871782065, 2769826231, 2862992102, 2869234936, 2872135164, 2865301348, 2779704363, 2885749578, 2792309248, 2859608362, 2820835639, 2792897037, 2819849417, 2734452865, 2910358504, 2722305593, 2779774242, 2900464950, 2706993293, 2890806647, 2787737202, 2892620786, 2746692935, 2674055497, 2651218771, 2823840854, 2879213654, 2901153531, 2900729979, 2884874622, 2824012269, 2780095560, 2823840638, 2697724316, 2722106763, 2869792497, 2750436628, 2815518628, 2684839427, 2683236201, 2715113919, 2801798822, 2837265505, 2804070160, 2872516789, 2872970076, 2872969575, 2871595585, 2765473844, 2682054158, 2834842247, 2783627950, 2688404307, 2822770686, 2764528984, 2757413933, 2883115375, 2659892041, 2722756932, 2860113593, 2847649907, 2891032075, 2868140865, 2881118308, 2733834416, 2779811166, 2749519613, 2783685966, 2671974693, 2693493022, 2711741955, 2741556646, 2854540952, 2682114387, 2735545176, 2853510714, 2918278446, 2790228224, 2776948781, 2911077797, 2890371736, 2810459886, 2801352717, 2854091205, 2632886152, 2884567661, 2821519851, 2881557003, 2867675201, 2720615691, 2689918282, 2687935601, 2913453753, 2764139032, 2859417559, 2917552763, 2881069171, 2875019003, 2757222892, 2806004542, 2757030159, 2881069156, 2839088305, 2753043296, 2725557599]),
                        92947: e.r(65, [2686060527, 2711211814, 2725427477, 2769245666, 2601321818, 2816999176, 2597489220, 2579030840, 2805509243, 2878850083, 2708262641, 2805509699, 2890291613, 2696048525, 2700309249, 2703926315, 2707782206, 2711572794, 2703570477, 2885455891, 2599020445, 2397342179, 2806266660, 2362667981, 2493528196, 2805489980, 2523811330, 2362665755, 2714852637, 2884981855, 2699688611, 2387473326, 2379984694, 2472635035, 2731641572, 2802188767, 2746325700, 2351652932, 2805894141, 2741383135, 2671063808, 2662401822, 2579678303, 2671000210, 2671268044, 2671000792, 2385085188, 2918744365, 2918744296, 2859999066, 2400909281, 2804027977, 2863061483, 2639500789, 2637663767, 2752753581, 2756913501, 2849841304, 2679937908, 2826760283, 2683160768, 2750066595, 2687617825, 2768986732, 2869027574, 2685818078, 2679909028, 2750408116, 2726561686, 2687470250, 2815475267, 2805762442, 2521120723, 2537302486, 2724520481, 2626308212, 2641238577, 2675317081, 2761711169, 2552410218, 2748496208, 2772262796, 2411527887, 2903043355, 2897800263, 2736266588, 2882508906, 2906821320, 2727532775, 2699546624, 2871782065, 2769826231, 2862992102, 2869234936, 2872135164, 2865301348, 2779704363, 2781972931, 2885749578, 2792309248, 2859608362, 2820835639, 2792897037, 2792325748, 2819849417, 2734452865, 2910358504, 2722305593, 2779774242, 2900464950, 2706993293, 2700080057, 2890806647, 2787737202, 2892620786, 2746692935, 2674055497, 2651218771, 2823840854, 2879213654, 2901153531, 2900729979, 2884874622, 2824012269, 2780095560, 2769281469, 2652291322, 2823840638, 2697724316, 2722106763, 2869792497, 2750436628, 2815518628, 2684839427, 2683236201, 2715113919, 2801798822, 2837265505, 2804070160, 2872516789, 2872970076, 2872969575, 2871595585, 2682054158, 2834842247, 2783627950, 2688404307, 2822770686, 2764528984, 2757413933, 2883115375, 2659892041, 2810213004, 2722756932, 2860113593, 2746577167, 2847649907, 2891032075, 2868140865, 2766033820, 2881118308, 2790996924, 2733834416, 2779811166, 2749519613, 2783685966, 2671974693, 2693493022, 2711741955, 2741556646, 2854540952, 2682114387, 2735545176, 2853510714, 2918278446, 2790228224, 2911077797, 2890371736, 2810459886, 2801352717, 2854091205, 2632886152, 2884567661, 2821519851, 2881557003, 2867675201, 2720615691, 2687935601, 2851946041, 2913453753, 2859417559, 2917552763, 2881069171, 2875019003, 2757222892, 2806004542, 2757030159, 2881069156, 2839088305, 2753043296, 2725557599]),
                        92956: e.q(e.cb(3, e.ref(38), e.ge(1), 1)),
                        92957: e.r(63, 38),
                        93845: e.r(70, e.itp("liveramp_DunandBradstreet", "1001640136", !1, "93845"), e.itp("liveramp_DunandBradstreet", "1001640156", !1, "93845"), e.itp("liveramp_DunandBradstreet", "1001640126", !1, "93845")),
                        93846: e.r(69, e.itp("liveramp_DunandBradstreet", "1001640146", !1, "93846"), e.itp("liveramp_DunandBradstreet", "1001640116", !1, "93846")),
                        93847: e.r(71, e.itp("liveramp_DunandBradstreet", "1003342619", !1, "93847"), e.itp("liveramp_DunandBradstreet", "1000311026", !1, "93847"), e.itp("liveramp_DunandBradstreet", "1003342629", !1, "93847"), e.itp("liveramp_DunandBradstreet", "1000311006", !1, "93847"), e.itp("liveramp_DunandBradstreet", "1000311016", !1, "93847"), e.itp("liveramp_DunandBradstreet", "1000310996", !1, "93847")),
                        94752: e.r(66, 2961520316),
                        94903: e.r(64, 2935408077),
                        94908: e.r(61, "storyworks/advertiser-content/spectra"),
                        95077: e.r(59, ["xF7RVVdO"]),
                        95078: e.r(59, ["X45IhsDS"]),
                        95079: e.r(53, e.ref(43)),
                        95080: e.r(59, ["bkZvoaw5"]),
                        95081: e.r(59, ["cQg52F3q"]),
                        95201: e.q(e.isp("liveramp_Citi_bbc_e488cdb0e7cb4d91964860d437d8e491", "276976950", !1, "95201")),
                        96020: e.r(66, 2970152092),
                        98239: e.r(88, e.o([e.y(8, 898), e.pe(13, "Worldcup")]), 1, e.os(e.s, 1, [460, 1014]))
                    }),
                    rootCompressionLookup: e => [ (t, n) => e.q(e.acqs([e.cb(0, t, e.ge(1), 1), e.cb(9, e.y(18, n), e.ge(1), 1)])), (t, n, r, s) => e.q(e.acqs([e.ocqs([n, r, s]), e.cb(0, t, e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, n, e.ge(3), 3), 2592e6), e.tw(e.cb(r, s, e.ge(o), i), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, n, e.ge(3), 3), 2592e6), e.tw(e.cb(r, s, e.ge(o), i), 2592e6)]), e.cb(0, e.y(a, c), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, e.a(i), e.ge(3), 3), 2592e6), e.tw(e.cb(n, r, e.ge(3), 3), 2592e6)]), e.cb(0, e.y(3, s), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, e.a(o), e.ge(3), 3), 2592e6), e.tw(e.cb(n, r, e.ge(i), s), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, e.a(o), e.ge(3), 3), 2592e6), e.tw(e.cb(n, e.os(e.s, r, s), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a(i), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, e.os(o, a, c), e.ge(3), 3), 2592e6), e.tw(e.cb(n, e.a(i), e.ge(3), 3), 2592e6), e.tw(e.cb(r, s, e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, e.os(e.s, n, r), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(["properties", "classifications_watson", "keywords"], e.o(i)), e.af_u(["properties", "classifications_watson", "categories"], s)]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(t, e.ref(i), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.ref(s), e.ge(3), 3), 2592e6), e.tw(e.cb(n, r, e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, t, e.ge(3), 3), 2592e6), e.tw(e.cb(n, e.os(e.s, 1, s), e.ge(3), 3), 2592e6), e.tw(e.cb(r, e.os(e.s, i, o), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a(s), e.ge(3), 3), 2592e6), e.tw(e.cb(t, e.os(e.s, i, o), e.ge(r), n), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([n, e.os(e.cx, 5, s), e.af_u(["properties", "classifications_watson", "categories"], e.o(r))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, t), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([r, s, e.af_u(i, e.o(c)), e.af_u(o, a)]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, t, n), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([s, i, e.af_u(o, a)]), e.ge(3), 3), 2592e6), e.tw(e.cb(t, e.os(e.s, n, r), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c, u) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([o, a, c, u]), e.ge(3), 3), 2592e6), e.tw(e.cb(t, e.os(e.s, s, i), e.ge(r), n), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c, u) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.os(e.w, 7, r), e.os(e.cx, s, i), n, e.af_u(o, e.o(u)), e.af_u(a, c)]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, t), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.a([e.y(i, o), e.os(e.cx, 5, a), e.af_u(["properties", "classifications_watson", "categories"], e.o(s)), e.af_u(r, e.o(c))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, t, n), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(s, i, o), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, t, n), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a(r), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, t), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.af_u(["properties", "classifications_watson", "categories"], e.o(n)), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, t), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.a([e.os(e.s, 1, s), e.os(e.s, 9, i)]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(o, e.o(a)), n, r]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.os(e.s, 1, n), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, t), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.af_u(r, e.o(s)), e.af_u(["properties", "classifications_watson", "concepts"], e.o(i))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o(n), e.ge(3), 3), 2592e6), e.tw(e.cb(t, e.os(e.s, r, s), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o(r), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, t), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a(n), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([n, r, s, i]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.ref(t), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([r, s, i, o]), e.ge(3), 3), 2592e6), e.tw(e.cb(t, e.os(e.s, 1, n), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([e.os(e.cx, 5, n), e.os(e.s, 1, r), e.af_u(s, e.o(i))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, t), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([e.os(e.cx, 5, r), n, e.af_u(["properties", "classifications_watson", "categories"], e.o(s)), e.af_u(["properties", "classifications_watson", "concepts"], e.o(i)), e.af_u(["properties", "classifications_watson", "keywords"], e.o(o))]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.os(e.s, 1, t), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([e.os(e.cx, 5, s), r, e.af_u(["properties", "classifications_watson", "concepts"], e.o(i)), e.af_u(["properties", "classifications_watson", "keywords"], e.o(o))]), e.ge(3), 3), 2592e6), e.tw(e.cb(t, e.os(e.s, 1, n), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(0, e.o([e.y(10, 957), e.os(e.cx, 11, r), e.os(e.cx, 5, s), t, n]), e.ge(3), 3), 2592e6), e.tw(e.cb(1, e.a([e.ref(16), e.os(e.s, 1, i)]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s) => e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.a([e.os(e.s, 9, n), e.os(e.s, 1, r)]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([t, e.af_u(["properties", "classifications_watson", "concepts"], e.o(s))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c) => e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.a([e.os(e.s, 9, r), e.os(e.s, 1, s)]), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.os(e.s, 1, t), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([n, e.af_u(i, e.o(a)), e.af_u(o, e.o(c))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, t, n), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([r, e.os(e.cx, 5, s), e.af_u(["properties", "classifications_watson", "concepts"], e.o(i))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c, u, l) => e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, t, n), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.os(s, i, o), r, e.af_u(a, e.o(u)), e.af_u(c, e.o(l))]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.ocqs([e.tw(e.cb(1, e.os(e.s, t, n), e.ge(3), 3), 2592e6), e.tw(e.cb(0, e.a([e.os(e.s, 1, a), r, s, i, o]), e.ge(3), 3), 2592e6)]), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c) => e.q(e.acqs([e.tw(e.cb(0, t, e.ge(r), n), 2592e6), e.tw(a, c), e.cb(0, e.ref(o), s, i)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.tw(e.cb(0, n, e.ge(s), r), 2592e6), t, e.cb(0, i, o, a)])), (t, n, r, s) => e.q(e.acqs([e.tw(e.cb(0, e.a([t, n, r, s]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n) => e.q(e.acqs([e.tw(e.cb(0, e.a([e.os(e.cx, 5, t), e.af_u(["properties", "classifications_watson", "concepts"], e.o(n))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.tw(e.cb(0, e.a([e.y(t, n), e.os(e.cx, 5, r), e.af_u(s, e.o(i))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.tw(e.cb(0, e.a([e.y(7, 462), e.os(e.cx, n, r), e.os(e.cx, s, i), t]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.tw(e.cb(0, e.ref(r), e.ge(n), t), 2592e6), e.tw(e.cb(0, s, e.ge(o), i), 2592e6)])), (t, n, r, s, i) => e.q(e.acqs([e.tw(e.cb(0, e.ref(55), e.ge(3), 3), 2592e6), t, e.ocqs([e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], n)), e.cw(5, e.pe(14, r)), e.ge(1)), e.scq(e.cw(4, e.pc(["aggregations", "SegmentEntry"], s)), e.cw(5, e.pe(14, i)), e.ge(1))])])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.tw(e.cb(0, e.o([t, n, r, e.af_u(s, e.o([e.s_(o, a)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o(i))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a, c, u) => e.q(e.acqs([e.tw(e.cb(0, e.o([t, e.os(e.cx, s, i), n, r, e.af_u(o, e.o(c)), e.af_u(a, e.o(u))]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.tw(e.cb(0, e.o([e.os(n, r, s), t, e.af_u(i, o)]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.tw(e.cb(0, e.o([e.os(i, o, a), e.os(e.cx, r, s), t, n]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.tw(e.cb(0, e.o([e.os(e.w, 7, s), e.os(e.cx, n, r), e.os(i, o, a), t]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.acqs([e.tw(e.cb(0, e.o([e.y(i, o), e.os(e.cx, r, s), t, n]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i, o, a) => e.q(e.acqs([e.tw(e.cb(0, e.o([e.y(7, s), e.os(e.cx, n, r), e.os(i, o, a), t]), e.ge(3), 3), 2592e6), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n, r, s, i) => e.q(e.acqs([e.tw(e.cb(0, e.o([e.pe(8, n), t, e.os(e.s, 1, r), e.af_u(s, e.o(i))]), e.ge(3), 3), 2592e6), e.cb(0, e.a([e.y(15, 794), e.ref(5)]), e.ge(1), 1)])), (t, n) => e.q(e.acqs([e.tw(e.cb(0, e.ps(12, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.z(12, n), e.ge(1), 1), 864e5), e.cb(0, e.ref(5), e.ge(1), 1)])), (t, n) => e.q(e.cb(t, n, e.ge(1), 1)), t => e.q(e.cb(0, t, e.ge(1), 1)), (t, n) => e.q(e.cb(0, e.a([t, n]), e.ge(1), 1)), (t, n, r) => e.q(e.cb(0, e.a([e.pe(n, r), t]), e.ge(1), 1)), (t, n) => e.q(e.cb(0, e.os(e.s, t, n), e.ge(1), 1)), t => e.q(e.cb(0, e.bsc_(1, t), e.ge(1), 1)), t => e.q(e.cb(0, e.bsc_(8, t), e.ge(1), 1)), t => e.q(e.cb(0, e.bsc_(17, t), e.ge(1), 1)), t => e.q(e.cb(0, e.pc_(5, t), e.ge(1), 1)), t => e.q(e.cb(0, e.ps(1, t), e.ge(1), 1)), t => e.q(e.cb(2, e.os(e.e, 4, t), e.ge(1), 1)), t => e.q(e.cb(2, e.ref(t), e.ge(1), 1)), t => e.q(e.cb(2, e.pe(4, t), e.ge(1), 1)), t => e.q(e.cb(3, e.os(e.e, 4, t), e.ge(1), 1)), t => e.q(e.cb(3, e.pe(4, t), e.ge(1), 1)), t => e.q(e.cb(7, e.y(19, t), e.ge(1), 1)), t => e.q(e.cb(7, e.pe(19, t), e.ge(1), 1)), (t, n) => e.q(e.ocqs([t, n])), (t, n, r) => e.q(e.ocqs([t, n, r])), (t, n, r, s, i, o) => e.q(e.ocqs([t, n, r, s, i, o])), (t, n, r, s, i, o, a, c, u, l, f, d, p, g, h, _, m, b, v) => e.q(e.ocqs([t, e.tw(e.cb(f, e.pc_(_, m), e.ge(b), d), 2592e6), n, r, s, i, o, a, c, u, l, e.tw(e.cb(p, g, e.ge(v), h), 2592e6)])), (t, n, r, s, i, o, a) => e.q(e.ocqs([e.cb(t, n, e.ge(1), 1), e.cb(r, s, e.ge(1), 1), e.cb(i, o, e.ge(1), 1), e.cb(3, e.pe(4, a), e.ge(1), 1)])), (t, n, r, s, i, o) => e.q(e.ocqs([e.cb(t, e.os(s, i, o), e.ge(1), 1), e.cb(n, r, e.ge(1), 1)])), (t, n, r, s) => e.q(e.ocqs([e.cb(t, e.os(e.e, 4, n), e.ge(1), 1), e.cb(2, e.os(e.e, r, s), e.ge(1), 1)])), (t, n, r, s) => e.q(e.ocqs([e.cb(t, e.ref(r), e.ge(1), 1), e.cb(n, e.ref(s), e.ge(1), 1)])), (t, n, r, s) => e.q(e.ocqs([e.cb(t, e.pe(4, r), e.ge(1), 1), e.cb(n, e.pe(4, s), e.ge(1), 1)])), (t, n, r) => e.q(e.ocqs([e.cb(0, e.a([e.pe(8, n), e.pc_(25, r)]), e.ge(1), 1), e.cb(0, t, e.ge(1), 1)])), t => e.q(e.ocqs([e.cb(0, e.ref(28), e.ge(1), 1), e.cb(0, e.bsc_(1, t), e.ge(1), 1)])), (t, n) => e.q(e.ocqs([e.cb(0, e.bsc_(8, t), e.ge(1), 1), e.cb(0, e.ps(23, n), e.ge(1), 1)])), (t, n, r) => e.q(e.ocqs([e.lm(t, e.ge(r)), e.ifp(n)])), t => e.q(e.ocqs([e.lm("4faff316-9043-402f-bcca-8e50dbf0b34c", e.ge(t)), e.ifp("112089")])), t => e.q(e.ocqs([e.lm("9be767a9-d9f4-41e0-b5f0-295c0e143145", e.ge(t)), e.ifp("88504")])), (t, n, r, s, i, o, a, c, u, l, f, d) => e.q(e.ocqs([e.tw(e.cb(t, n, r, s), 2592e6), e.tw(e.cb(i, o, a, c), 2592e6), e.tw(e.cb(u, l, f, d), 2592e6)])), (t, n, r, s) => e.q(e.ocqs([e.tw(e.cb(t, n, e.ge(1), 1), 6048e5), e.tw(e.cb(r, s, e.ge(1), 1), 6048e5)])), (t, n, r, s, i, o, a, c, u, l) => e.q(e.ocqs([e.tw(e.cb(n, r, e.ge(i), s), t), e.tw(e.cb(a, c, e.ge(l), u), o)])), (t, n, r, s, i, o, a) => e.q(e.ocqs([e.tw(e.cb(0, t, e.ge(r), n), 2592e6), e.tw(e.cb(s, i, e.ge(a), o), 2592e6)])), (t, n, r) => e.q(e.ocqs([e.tw(e.cb(0, t, e.ge(2), 2), 7776e6), e.tw(e.cb(n, r, e.ge(2), 2), 7776e6)])), (t, n, r) => e.q(e.ocqs([e.tw(e.cb(0, e.af_u(t, e.o(r)), e.ge(3), 3), 2592e6), e.cb(0, e.o(n), e.ge(1), 1)])), (t, n, r) => e.q(e.ocqs([e.tw(e.cb(0, e.o(r), e.ge(3), 3), 2592e6), e.tw(e.cb(t, n, e.ge(3), 3), 2592e6)])), (t, n) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6)])), (t, n, r) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, r), e.ge(1), 1), 2592e6)])), (t, n, r, s) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, r), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, s), e.ge(1), 1), 2592e6)])), (t, n, r, s, i) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, r), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, s), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, i), e.ge(1), 1), 2592e6)])), (t, n, r, s, i, o, a) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, r), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, s), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, i), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, o), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, a), e.ge(1), 1), 2592e6)])), (t, n, r, s, i, o, a, c) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, r), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, s), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, i), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, o), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, a), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, c), e.ge(1), 1), 2592e6)])), (t, n, r, s, i, o, a, c, u, l, f, d, p) => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, n), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, r), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, s), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, i), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, o), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, a), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, c), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, u), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, l), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, f), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, d), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, p), e.ge(1), 1), 2592e6)])), t => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, 1), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6)])), t => e.q(e.ocqs([e.tw(e.cb(0, e.pc_(0, 9), e.ge(1), 1), 2592e6), e.tw(e.cb(0, e.pc_(0, t), e.ge(1), 1), 2592e6)])), (t, n, r, s) => e.q(e.tw(e.cb(t, n, e.ge(s), r), 2592e6)), (t, n, r) => e.q(e.tw(e.cb(t, e.o([n, r]), e.ge(1), 1), 7776e6)), (t, n, r, s, i) => e.q(e.tw(e.cb(t, e.pc_(s, i), e.ge(r), n), 2592e6)), (t, n, r) => e.q(e.tw(e.cb(t, e.pe(n, r), e.ge(3), 3), 2592e6)), (t, n, r, s, i) => e.q(e.tw(e.cb(n, r, e.ge(i), s), t)), (t, n) => e.q(e.tw(e.cb(0, e.a([t, n]), e.ge(3), 3), 2592e6)), (t, n, r, s, i, o, a, c, u, l) => e.q(e.tw(e.cb(0, e.o([e.os(e.cx, s, i), e.os(o, a, c), e.os(e.s, u, l), r]), e.ge(n), t), 2592e6)), () => e.q(e.tw(e.cb(0, e.pc_(0, 18), e.ge(1), 1), 2592e6)), () => e.q(e.tw(e.cb(0, e.pc_(0, 74), e.ge(1), 1), 2592e6))],
                    stateSyncReplays: e => [],
                    subexpressionsLookup: e => [e.os(e.s, 1, [215, 224, 255, 261, 297, 457, 458, 474, 475, 523, 532, 537, 658, 661, 666, 688, 753, 820, 869, 957]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 444), e.s_(2, 765)])), e.o([e.s_(6, 36), e.s_(6, 41)]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 121), e.s_(6, 123)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 301), e.s_(2, 302), e.s_(2, 435), e.s_(2, 436), e.s_(2, 437), e.s_(2, 669), e.s_(2, 991)])), e.os(e.w, 3, [234, 235]), e.o([e.os(e.cx, 5, [775, 905, 465]), e.ref(40)]), e.os(e.s, 10, [488]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 50), e.s_(6, 51)])), e.o([e.y(10, 367), e.os(e.cx, 11, [716, 199]), e.os(e.cx, 5, [652, 753, 224, 715, 202, 200, 716, 938, 791, 790, 979]), e.os(e.s, 7, [366, 367, 421, 422, 716]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 5), e.s_(6, 20), e.s_(6, 29), e.s_(6, 59), e.s_(6, 77), e.s_(6, 128)])), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 199), e.s_(2, 224), e.s_(2, 367), e.s_(2, 652), e.s_(2, 712), e.s_(2, 714), e.s_(2, 753), e.s_(2, 938)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 199), e.s_(2, 224), e.s_(2, 367), e.s_(2, 463), e.s_(2, 652), e.s_(2, 714), e.s_(2, 753)]))]), e.o([e.s_(6, 21)]), e.os(e.w, 10, [490, 488]), e.os(e.e, 4, [3224726350, 3224725894]), e.os(e.e, 4, [3319232792, 3542769731]), e.os(e.s, 9, [273, 644, 850, 930]), e.af_u(["properties", "classifications_watson", "categories"], e.ref(10)), e.os(e.s, 9, [193, 225, 237, 371, 401, 477, 478, 558, 559, 708, 816, 873, 896, 957]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 129)])), e.os(e.s, 1, [233, 723]), e.o([e.s_(2, 592)]), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 294), e.s_(2, 305), e.s_(2, 307), e.s_(2, 438), e.s_(2, 439)])), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 466), e.s_(2, 504), e.s_(2, 653), e.s_(2, 705), e.s_(2, 774), e.s_(2, 801), e.s_(2, 1015)])), e.os(e.s, 16, [274, 294, 295, 317, 346, 357, 365, 373, 434, 614, 643, 669, 670, 991, 995]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 360), e.s_(2, 445), e.s_(2, 448), e.s_(2, 698)])), e.o([e.s_(2, 276), e.s_(2, 516), e.s_(2, 541), e.s_(2, 678)]), e.af_u(["properties", "classifications_watson", "concepts"], e.s_(2, 166)), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 367), e.s_(2, 474), e.s_(2, 533), e.s_(2, 536), e.s_(2, 539), e.s_(2, 661), e.s_(2, 869)])), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 111), e.s_(6, 113)])), e.os(e.s, 24, [564, 565, 566, 567, 568, 573, 574]), e.o([e.s_(2, 527), e.s_(2, 1e3), e.s_(2, 1001)]), e.os(e.s, 1, [275, 294, 295, 303, 317, 357, 365, 373, 434, 991, 995]), e.os(e.e, 4, [3665195468, 3662303490]), e.os(e.cx, 5, [655, 837, 970, 540, 661, 292, 869, 659, 267, 452, 451, 617]), e.os(e.cx, 5, [669, 308]), e.os(e.s, 8, [728, 730, 731]), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 451), e.s_(2, 617), e.s_(2, 661), e.s_(2, 804)])), e.af_u(["properties", "topics"], e.ref(41)), e.af_u(["properties", "classifications_watson", "concepts"], e.o([e.s_(2, 538), e.s_(2, 633), e.s_(2, 661)])), e.os(e.e, 4, [2806266660, 2397342179, 2478223133, 2523811330, 2400909281, 2739119193, 2620857003, 2918744365, 2918744296, 2483038024, 2800026204, 2722157430, 2686060527, 2878850083, 2689806380, 2696048525, 2700309249, 2742930446, 2813285508, 2772044079, 2687845410, 2743529464, 2839288200, 2777054344, 2882901340, 2868590860, 2741491890, 2809739667, 2707480994, 2747111193, 2680657581, 2903250888, 2821967247, 2645745084, 2770635248, 2914918264, 2774578556, 2725792010, 2871241565, 2791592795, 2867789276, 2898891050, 2818618287, 2867788700, 2902964575]), e.o([e.y(17, 236), e.ps(1, 570)]), e.os(e.s, 7, [464, 705]), e.bsc([], ["14aUDqnZ", "AJhaeIyo", "QIwF82mX", "Z1T+PNgx", "h5Hklnm5", "sIwaEH0O", "uQHwpOsf", "yVHsAPEj"]), e.os(e.e, 4, [3593700237, 3709795896]), e.bsc_(17, ["5RqQkdCe"]), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 77)])), e.af_u(["properties", "classifications_watson", "categories"], e.o([e.s_(6, 30), e.s_(6, 52)])), e.os(e.w, 7, [931, 930]), e.af_u(["properties", "classifications_watson", "keywords"], e.o([e.s_(2, 451), e.s_(2, 538), e.s_(2, 661), e.s_(2, 907), e.s_(2, 962)])), e.os(e.e, 4, [3533895591, 3532072684]), e.o([e.s_(2, 273)]), e.os(e.s, 16, [287, 489]), e.os(e.s, 1, [171, 191, 221, 223, 227, 230, 250, 257, 273, 293, 338, 348, 354, 355, 413, 446, 459, 482, 507, 513, 514, 531, 593, 598, 600, 602, 606, 620, 667, 689, 706, 717, 770, 771, 803, 811, 829, 853, 895, 900, 921, 939, 971]), e.af_u(["properties", "classifications_watson", "categories"], e.ref(2)), e.os(e.s, 1, [171, 191, 221, 223, 227, 230, 250, 257, 273, 293, 338, 348, 354, 355, 413, 446, 459, 482, 508, 512, 513, 514, 531, 593, 600, 601, 603, 604, 605, 606, 620, 667, 689, 706, 717, 770, 771, 803, 811, 819, 829, 853, 895, 900, 921, 939, 971]), e.os(e.s, 1, [141, 226, 248, 353, 362, 372, 455, 464, 469, 470, 471, 472, 596, 601, 653, 705, 707, 745, 755, 769, 842, 885, 902, 923]), e.os(e.s, 3, [234, 235])]
                }
            })
        })));
        var ze = n(729)
          , qe = n(229);
        async function Ue(d) {
            let {contextsInitTimestampPerformance: p, master: g} = d;
            const h = await g.next()
              , _ = performance.now();
            Object.entries(h.globals ?? {}).forEach((e => {
                let[t,n] = e;
                Object.defineProperty(self, t, {
                    value: n
                })
            }
            ));
            const m = new W(h.permutiveConfig);
            m.measureBetween("waiting_worker_high_priority_config", p, _);
            const b = function(t) {
                var n;
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.RP;
                return t.loggingEnabled && void 0 !== (null === (n = self.console) || void 0 === n ? void 0 : n.log) ? new C(r) : new O
            }(h.permutiveConfig, h.sdkInitTimestampDate)
              , v = h.metricsEnabled ? new U(h.sdkInitTimestampPerformance,h.timeOriginMainContext,b) : new E;
            v.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                timestamp_name: "worker_evaluated",
                time_origin: "sdk_init"
            }, p),
            v.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                timestamp_name: "worker_received_high_priority_config",
                time_origin: "sdk_init"
            }, _);
            const w = (0,
            r.zG)(g.next, m.traceTask("waiting_worker_low_priority_config"))();
            w.then(( () => v.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                timestamp_name: "worker_received_low_priority_config",
                time_origin: "sdk_init"
            })));
            const y = (0,
            r.zG)(( () => g.read()), function(e, n) {
                const s = e => (0,
                r.zG)(e, M.Hd((e => e in n)), (e => {
                    let {left: t, right: n} = e;
                    return {
                        buffers: n,
                        nonBuffers: t
                    }
                }
                ));
                return i => {
                    const {buffers: o, nonBuffers: a} = s(e)
                      , [c,u] = t.Ue({
                        ...a,
                        ...(0,
                        r.zG)(o, M.Su((e => () => {
                            const t = o[e];
                            return o[e] = n[e].empty,
                            t
                        }
                        )))
                    });
                    return (async () => {
                        for (; ; ) {
                            const e = (0,
                            r.zG)(await i(), F.UI(s), F.ur({
                                concat: (e, t) => ({
                                    nonBuffers: {
                                        ...e.nonBuffers,
                                        ...t.nonBuffers
                                    },
                                    buffers: ( () => {
                                        const r = {
                                            ...e.buffers
                                        };
                                        for (const e in t.buffers)
                                            r[e] = e in r ? n[e].concat(r[e], t.buffers[e]) : t.buffers[e];
                                        return r
                                    }
                                    )()
                                })
                            }))
                              , t = (0,
                            r.zG)(e.buffers, M.Su(( (e, t) => (o[e] = n[e].concat(o[e], t),
                            () => {
                                const t = o[e];
                                return o[e] = n[e].empty,
                                t
                            }
                            ))));
                            u({
                                ...c.current,
                                ...e.nonBuffers,
                                ...t
                            })
                        }
                    }
                    )(),
                    (0,
                    r.zG)(e, M.Su((e => (0,
                    r.zG)(c, t.UI((t => t[e]))))))
                }
            }({
                contextualCohorts: i.YP,
                consent: h.consent,
                enrichmentReplacementMap: i.YP,
                eventSourceId: h.eventSourceId,
                identities: i.YP,
                newEvents: o.cS,
                pageviewState: h.pageviewState,
                priorCachedEventsResponses: o.cS,
                sessionId: h.sessionId,
                userId: h.userId,
                userIdIsNewlyGenerated: h.userIdIsNewlyGenerated,
                viewId: h.pageviewState.viewId,
                webClient: i.G(h.webClient)
            }, {
                newEvents: o.uZ(),
                priorCachedEventsResponses: o.uZ()
            }), (0,
            a.rO)({
                newEvents: (0,
                ze.F)(v, "pageview_received_by_worker")
            }), (e => ({
                ...e,
                currentTimestampSecs: Ee((0,
                r.zG)(h.initialTimestampSecs, i.EQ(( () => 0), (e => e - Date.now() / 1e3))))
            })))
              , {eventsCachedInWorker: k, coreService: S} = await function(a, d, p, g, h, _) {
                g.debug("SDK core started", a);
                const m = 500
                  , b = new I(_)
                  , v = new G(a.permutiveConfig)
                  , w = new te(v,a.permutiveConfig,b,_,g,( () => p.webClient.current))
                  , y = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    w.reportError(e, null == t ? void 0 : t.userId, null == t ? void 0 : t.timestamp)
                }
                  , k = (0,
                r.zG)(c.Y3(( () => Promise.resolve().then(n.bind(n, 5)).then((e => e.watson))), ( () => "Failed to import watson.")), c.UI((e => (0,
                r.zG)(p.webClient, t.UI(i.UI((e => e.url))), t.D8(i.Eh(qe.Eq)), (n => e({
                    config: a.permutiveConfig,
                    metrics: _,
                    permutiveApi: b,
                    permutiveUrls: v,
                    pageUrl: n,
                    trace: h,
                    watsonEnabled: (0,
                    r.zG)(p.pageviewState, t.UI((e => e.watsonEnabled)))
                }))))))
                  , S = (0,
                r.zG)(V.initialise(a.permutiveConfig, g, y, h, _, p.userId, ( () => (0,
                r.zG)(Z.connect(new A(a.permutiveConfig), _, new D, a.organizationId, `events_${p.userId.current}`, `keys_${p.userId.current}`, "events", g, p.consent, a.isSecureContext), h.traceTask("connect_idb_events_cache")))), h.traceTask("initialise_events_cache"), c.At(( () => () => _.trackTimeSinceInit("sdk_lifecycle_timestamps", {
                    timestamp_name: "events_cache_initialised",
                    time_origin: "sdk_init"
                }, performance.now()))), c.EQ((e => {
                    g.error(`Worker failed to initialise IndexedDB event cache: ${e}`);
                    const n = {}
                      , [s,i] = t.gS(o.uZ())
                      , a = () => new Promise((e => {
                        const t = String(Math.random());
                        n[t] = r => {
                            delete n[t],
                            e(r)
                        }
                        ,
                        i([[t, void 0]])
                    }
                    ));
                    return (0,
                    r.zG)(p.priorCachedEventsResponses, t.UI((e => (0,
                    r.zG)(e(), o.UI((e => {
                        var t;
                        let[r,s] = e;
                        return null === (t = n[r]) || void 0 === t ? void 0 : t.call(n, s)
                    }
                    )))))),
                    {
                        eventsCachedInWorker: !1,
                        coreOutput: {
                            priorCachedEventsRequests: s
                        },
                        coreConfig: {
                            eventsCache: f.t$(a)
                        }
                    }
                }
                ), (e => ({
                    eventsCachedInWorker: !0,
                    coreOutput: {
                        priorCachedEventsRequests: t.a9(j.of(o.bM()))
                    },
                    coreConfig: {
                        eventsCache: f.F2(e)
                    }
                }))))
                  , U = (0,
                r.zG)(!0, c.DT(r.yR, ( () => "IndexedDB disabled.")), c.tS(( () => (0,
                r.zG)(z.K.initialise(new A(a.permutiveConfig), _, g, new D, `worker_${a.organizationId}`, "core_service_state", "keys", "core_service_state", 4, a.isSecureContext), h.traceTask("initialise-core-idb")))), c.tS((e => (0,
                q.Yt)(c.Hi)({
                    persistCoreState: u(e, "core"),
                    persistLalState: u(e, "lal")
                }))))
                  , E = () => new Promise((e => (0,
                r.zG)(p.consent, t.YP((t => {
                    t && e()
                }
                )))))
                  , x = o => (0,
                r.zG)(c.fF(U), c.YO("servicePersistence"), c.Qt("eventsCache", c.fF(( () => o))), c.Qt("coreService", (0,
                r.zG)(c.Y3(( () => Promise.resolve().then(n.bind(n, 525)).then((e => e.service))), (e => `Failed to import core service: ${e}`)), h.traceTask("import-core-service"))), c.Qt("lookalikeModelsService", c.Y3(( () => Promise.resolve().then(n.bind(n, 709)).then((e => e.lookalikeModelsService))), ( () => "Failed to import lookalike models."))), c.Qt("optimisedActivationsConfig", c.Y3(( () => Promise.resolve().then(n.bind(n, 234)).then((e => e.optimisedActivationsConfig))), ( () => "Failed to import lookalike models."))), c.Qt("watson", k), T.mU(( () => E)), c.UI((n => {
                    let {coreService: o, eventsCache: c, lookalikeModelsService: u, optimisedActivationsConfig: w, servicePersistence: k, watson: S} = n;
                    const I = {
                        config: a.permutiveConfig,
                        customQueries: Ge(),
                        logger: g,
                        metrics: _,
                        optimisedActivationsConfig: w,
                        permutiveApi: b,
                        permutiveUrls: v,
                        reportError: y,
                        trackPageviewComplete: a.trackPageviewComplete,
                        migratedStateMaps: (0,
                        r.zG)(i.lo(!a.isFirstPageview), i.EQ(( () => T.of({
                            external: i.bM(),
                            internal: i.bM()
                        })), ( () => j.of(d.then((e => e.migratedStateMaps)))))),
                        trace: h,
                        watson: i.G(S)
                    };
                    return (0,
                    r.zG)(k, f.UI((n => {
                        let {persistCoreState: a, persistLalState: f} = n;
                        return (0,
                        r.zG)(u({
                            ...I,
                            ...p
                        }), f, s.VS((n => {
                            let[u,f] = n;
                            return (0,
                            r.zG)(p, o({
                                ...I,
                                ...c.coreConfig,
                                lookalikeModels: i.G(f)
                            }), (d = m,
                            g = t.a9(!1),
                            n => s => {
                                const {value: i, state: o} = n(s)
                                  , [a,c] = t.Ue(o.current)
                                  , u = (0,
                                e.UM)(( () => c(o.current)), d)
                                  , l = (0,
                                r.zG)(t.vP(o, a), t.UI((e => {
                                    let[t,n] = e;
                                    return t === n
                                }
                                )));
                                return (0,
                                r.zG)(g, t.bw((e => e && u()))),
                                {
                                    value: (0,
                                    r.bc)(l, i),
                                    state: (0,
                                    r.zG)(t.vP(g, o, a), t.UI((e => {
                                        let[t,n,r] = e;
                                        return t ? n : r
                                    }
                                    )))
                                }
                            }
                            ), l(p.consent), a, s.UI((e => {
                                let[n,[s,i]] = e;
                                return {
                                    ...i,
                                    stateFlushed: (0,
                                    r.zG)(t.vP(u, n, s), t.UI((e => {
                                        let[t,n,r] = e;
                                        return t && n && r
                                    }
                                    )))
                                }
                            }
                            )));
                            var d, g
                        }
                        )), (e => {
                            const {value: n} = e({
                                stopped: t.a9(!1),
                                previousState: {}
                            });
                            return e => ({
                                value: n,
                                state: t.a9(void 0)
                            })
                        }
                        ))
                    }
                    )), f.fS((e => (g.warn("Worker running in non-persistent mode.", e),
                    (0,
                    r.zG)(p, o({
                        ...I,
                        ...c.coreConfig,
                        lookalikeModels: i.YP
                    }), s.Hr("stateFlushed", ( () => t.a9(!0))), l(p.consent))))), s.UI((e => ({
                        ...e,
                        ...c.coreOutput
                    }))))
                }
                )));
                return async () => {
                    const e = S()
                      , t = x(e)()
                      , {eventsCachedInWorker: n} = await e;
                    return {
                        eventsCachedInWorker: n,
                        coreService: t
                    }
                }
            }(h, w, y, b, m, v)();
            g.send({
                eventsCachedInWorker: k
            });
            const x = await S;
            var P, L;
            if (f.nM(x))
                return b.error(`Failed to start worker: ${x.left}`),
                void (null === (P = (L = self).close) || void 0 === P || P.call(L));
            const Y = x.right
              , N = await w
              , Q = (await Y)({
                stopped: t.a9(!1),
                previousState: N.previousState
            })
              , [B,$] = t.Ue(v.getNoMetricsTracked());
            (0,
            e.UM)(( () => $(v.getNoMetricsTracked())), 100),
            function(e, n, s) {
                const o = (0,
                r.zG)(t.vP(n), t.UI((0,
                r.ls)(M.UI((e => "function" == typeof e ? e : j.of(e))), (0,
                q.Yt)(j.G5))));
                let a = o.current();
                e(a),
                (0,
                r.zG)(o, t.YP((t => {
                    const n = t()
                      , o = (0,
                    r.zG)(n, M.z7(( (e, t) => {
                        var n;
                        return t !== a[e] && (null === (n = s[e]) || void 0 === n || !n.isEmpty(t))
                    }
                    )), i.DT((0,
                    R.ff)(M.xb)));
                    i.pC(o) && (a = {
                        ...a,
                        ...o.value
                    },
                    e(o.value))
                }
                )))
            }(g.send, {
                activations: t.vP(Q.value.activations),
                cohorts: t.vP(Q.value.cohorts),
                context: Q.value.context,
                eventsToPublish: Q.value.eventsToPublish,
                eventsToPublishOnPageUnload: Q.value.eventsToPublishOnPageUnload,
                externalData: Q.value.externalData,
                geoIP: Q.value.geoIP,
                metrics: (0,
                r.zG)(B, t.UI(( () => () => v.consume()))),
                priorCachedEventsRequests: Q.value.priorCachedEventsRequests,
                realtime: Q.value.realtime,
                state: Q.state,
                transitionsSinceInit: Q.value.transitionsSinceInit,
                workerStateFlushed: Q.value.stateFlushed,
                stateMigratedThisInitialisation: Q.value.stateMigratedThisInitialisation,
                secureSignal: Q.value.secureSignal
            }, {
                eventsToPublish: {
                    isEmpty: o.xb
                },
                metrics: {
                    isEmpty: o.xb
                }
            })
        }
        function Ee(n) {
            const r = () => Math.floor(Date.now() / 1e3) + n
              , [s,i] = t.Ue(r());
            return (0,
            e.UM)(( () => i(r())), 1e3),
            s
        }
        const xe = t => {
            const n = []
              , r = []
              , s = () => {
                for (; n.length > 0 && r.length > 0; )
                    r.shift()()
            }
              , i = t => new Promise((n => {
                r.push(( () => n(t()))),
                (0,
                e.HJ)(s)
            }
            ));
            return t.addEventListener("message", (0,
            e.GL)((t => {
                null !== t.data && (n.push(t.data),
                (0,
                e.HJ)(s))
            }
            ))),
            {
                next: () => i(( () => n.shift())),
                read: () => i(( () => n.splice(0)))
            }
        }
        ;
        !async function() {
            const t = self;
            Ue({
                contextsInitTimestampPerformance: e.NC,
                master: {
                    ...xe(t),
                    send: e => t.postMessage(e)
                }
            })
        }()
    }
    )()
}
)();
