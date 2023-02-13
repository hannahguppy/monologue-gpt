"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [962],
  {
    46275: function (e, n, t) {
      t.d(n, {
        bG: function () {
          return v
        },
        ZP: function () {
          return y
        },
        Vq: function () {
          return b
        },
      })
      var r = t(14806),
        a = t(35250),
        o = t(87093),
        s = t(40638),
        i = t(19841),
        l = t(70079),
        u = t(34303),
        c = t(62676),
        d = t(39690),
        m = t(6004)
      function f(e) {
        var n = e.onChange,
          t = e.enabled,
          r = e.size,
          o = e.Icon,
          s = (0, l.useCallback)(
            function () {
              n(!t)
            },
            [t, n]
          ),
          u = !t && "translate-x-0"
        return (0, a.jsxs)(m.r, {
          checked: t,
          onChange: s,
          className: (0, i.Z)(
            t ? "!bg-indigo-600" : "!bg-gray-200",
            "relative inline-flex flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0",
            "large" === r ? "h-6 w-11" : "h-4 w-8"
          ),
          children: [
            (0, a.jsx)("span", {
              className: "sr-only",
              children: "Use setting",
            }),
            (0, a.jsxs)("span", {
              className: (0, i.Z)(
                "pointer-events-none relative inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                t && "large" === r ? "translate-x-5" : u,
                t && "small" === r ? "translate-x-4" : u,
                "large" === r ? "h-5 w-5" : "h-3 w-3"
              ),
              children: [
                (0, a.jsx)("span", {
                  className: (0, i.Z)(
                    t
                      ? "opacity-0 duration-100 ease-out"
                      : "opacity-100 duration-200 ease-in",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                }),
                (0, a.jsx)("span", {
                  className: (0, i.Z)(
                    t
                      ? "opacity-100 duration-200 ease-in"
                      : "opacity-0 duration-100 ease-out",
                    "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  ),
                  "aria-hidden": "true",
                  children:
                    o &&
                    (0, a.jsx)(o, { className: "h-3 w-3 text-indigo-600" }),
                }),
              ],
            }),
          ],
        })
      }
      var h = t(44819)
      function x() {
        var e = (0, r.Z)([
          "block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 outline-none border-none",
        ])
        return (
          (x = function () {
            return e
          }),
          e
        )
      }
      function g() {
        var e = (0, r.Z)(["mt-1 outline-none border-0"])
        return (
          (g = function () {
            return e
          }),
          e
        )
      }
      function p() {
        var e = (0, r.Z)(["text-right"])
        return (
          (p = function () {
            return e
          }),
          e
        )
      }
      var v = "oai/apps/autoexpandCode"
      function b(e) {
        return e && (e.startsWith("http") || "custom" === e)
      }
      function y(e) {
        var n = e.children,
          t = e.temperature,
          r = e.onRestoreDefaults,
          u = e.onChangeModelSetting,
          m = e.position,
          x = e.modelSettings,
          g = e.features,
          p = (0, l.useState)(Boolean(c.m.getItem(v))),
          b = p[0],
          y = p[1],
          k = (0, l.useCallback)(
            function (e) {
              u(h.G3.Temperature, e.target.value)
            },
            [u]
          ),
          Z = (0, l.useCallback)(function (e) {
            y(e), c.m.setItem(v, e)
          }, [])
        return (0, a.jsxs)(o.J, {
          className: "relative",
          children: [
            n,
            (0, a.jsx)(s.u, {
              as: l.Fragment,
              enter: "transition ease-out duration-200",
              enterFrom: (0, i.Z)(
                "opacity-0",
                "top-right" === m ? "translate-x-1" : "translate-y-1"
              ),
              enterTo: (0, i.Z)(
                "opacity-100",
                "top-right" === m ? "translate-x-0" : "translate-y-0"
              ),
              leave: "transition ease-in duration-150",
              leaveFrom: (0, i.Z)(
                "opacity-100",
                "top-right" === m ? "translate-x-0" : "translate-y-0"
              ),
              leaveTo: (0, i.Z)(
                "opacity-0",
                "top-right" === m ? "translate-x-1" : "translate-y-1"
              ),
              children: (0, a.jsx)(o.J.Panel, {
                className: (0, i.Z)(
                  "absolute z-20 mt-3 w-screen max-w-xs px-2 sm:px-0",
                  "bottom-center" === m && "right-0 top-6",
                  "bottom-right" === m && "left-2 top-8",
                  "top-right" === m &&
                    "left-full top-1/2 ml-6 -translate-y-full"
                ),
                children: (0, a.jsx)("div", {
                  className:
                    "overflow-hidden rounded-lg text-left text-sm shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600",
                  children: (0, a.jsxs)("div", {
                    className:
                      "relative grid gap-6 bg-white px-2 py-1 dark:bg-gray-800 sm:gap-4 sm:p-4",
                    children: [
                      x.has(h.G3.Temperature) &&
                        (0, a.jsxs)("div", {
                          className:
                            "rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600",
                          children: [
                            (0, a.jsx)("label", {
                              htmlFor: "temperature",
                              className:
                                "block text-xs font-medium text-gray-800",
                              children: "Temperature",
                            }),
                            (0, a.jsxs)("div", {
                              className: "mt-1",
                              children: [
                                (0, a.jsx)(j, {
                                  type: "number",
                                  name: "temperature",
                                  id: "temperature",
                                  onChange: k,
                                  value: t,
                                  className: "form-input",
                                }),
                                (0, a.jsx)(w, {
                                  name: "temperature",
                                  type: "range",
                                  min: "0",
                                  max: "1",
                                  value: t,
                                  className: "range w-full",
                                  step: "0.05",
                                  onChange: k,
                                }),
                              ],
                            }),
                          ],
                        }),
                      g.has("tools2") &&
                        (0, a.jsxs)("div", {
                          className: "flex items-center gap-2 text-white",
                          children: [
                            (0, a.jsx)("div", { children: "Auto-expand code" }),
                            (0, a.jsx)(f, {
                              size: "small",
                              enabled: b,
                              onChange: Z,
                            }),
                          ],
                        }),
                      (0, a.jsx)(C, {
                        children: (0, a.jsx)(d.z, {
                          as: "button",
                          color: "neutral",
                          onClick: r,
                          children: "Restore defaults",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        })
      }
      var j = u.Z.input(x()),
        w = u.Z.input(g()),
        C = u.Z.div(p())
    },
    1744: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u
        },
      })
      var r = t(14806),
        a = t(35250),
        o = t(1454),
        s = t(34303)
      function i() {
        var e = (0, r.Z)(["animate-spin text-center"])
        return (
          (i = function () {
            return e
          }),
          e
        )
      }
      var l = (0, s.Z)(o.dAq)(i())
      function u(e) {
        var n = e.className
        return (0, a.jsx)(l, { className: n })
      }
    },
    91592: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return rt
        },
      })
      var r,
        a = t(61706),
        o = t(33861),
        s = t(31501),
        i = t(61079),
        l = t(89874),
        u = t(14806),
        c = t(64705),
        d = t(25769),
        m = t(45813),
        f = t(35250),
        h = t(87093),
        x = t(6128),
        g = t(19841),
        p = t(91530),
        v = t.n(p),
        b = t(26649),
        y = t.n(b),
        j = t(61432),
        w = t(11253),
        C = t.n(w),
        k = t(70079),
        Z = t(2827),
        N = t(1454),
        P = t(34303),
        I = t(12762),
        S = t(98943),
        T = t(82018),
        M = t(62676),
        D = t(36613),
        R = t(68619),
        F = t(60814),
        A = t(66285),
        E = t(27252),
        L = t(500),
        O = t(11699),
        U = t(80836)
      function z(e) {
        var n = e.id,
          t = e.label
        return (0, f.jsxs)("div", {
          className: "form-check",
          children: [
            (0, f.jsx)("input", {
              className:
                "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",
              type: "checkbox",
              value: "",
              id: n,
            }),
            (0, f.jsx)("label", {
              className:
                "form-check-label inline-block text-gray-800 dark:text-gray-100",
              htmlFor: n,
              children: t,
            }),
          ],
        })
      }
      var B = t(35025),
        q = t(42928),
        _ = t(60612)
      function H(e) {
        var n = e.text,
          t = e.onDone,
          r = (0, _.Z)(),
          a = (0, k.useState)(!0),
          o = a[0],
          s = a[1],
          i = (0, k.useState)(0),
          l = i[0],
          u = i[1],
          c = (0, k.useMemo)(
            function () {
              return new $().humanTypingDelaysQuertyDistance(n)
            },
            [n]
          )
        return (
          (0, k.useEffect)(
            function () {
              n &&
                o &&
                (s(!0),
                c.forEach(function (e, n) {
                  setTimeout(function () {
                    r() &&
                      (u(n), n === c.length - 1 && (s(!1), null == t || t()))
                  }, e)
                }))
            },
            [c, r, o, t, n]
          ),
          (0, f.jsxs)(f.Fragment, {
            children: [n.substring(0, l + 1), o && "▋"],
          })
        )
      }
      var $ = (function () {
          function e() {
            ;(0, B.Z)(this, e)
          }
          var n = e.prototype
          return (
            (n.qwertyDistance = function (e, n) {
              var t,
                r,
                a,
                o = {
                  q: [0, 0],
                  w: [1, 0],
                  e: [2, 0],
                  r: [3, 0],
                  t: [4, 0],
                  y: [5, 0],
                  u: [6, 0],
                  i: [7, 0],
                  o: [8, 0],
                  p: [9, 0],
                  a: [0, 1],
                  s: [1, 1],
                  d: [2, 1],
                  f: [3, 1],
                  g: [4, 1],
                  h: [5, 1],
                  j: [6, 1],
                  k: [7, 1],
                  l: [8, 1],
                  z: [0, 2],
                  x: [1, 2],
                  c: [2, 2],
                  v: [3, 2],
                  b: [4, 2],
                  n: [5, 2],
                  m: [6, 2],
                },
                s = (0, q.Z)(
                  null !== (t = o[e.toLowerCase()]) && void 0 !== t
                    ? t
                    : [0, 0],
                  2
                ),
                i = s[0],
                l = s[1],
                u = (0, q.Z)(
                  null !== (r = o[n.toLowerCase()]) && void 0 !== r
                    ? r
                    : [0, 0],
                  2
                )
              return Math.abs(i - u[0]) + Math.abs(l - u[1])
            }),
            (n.humanTypingDelaysQuertyDistance = function (e) {
              for (
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 10,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 100,
                  r = 0,
                  a = [],
                  o = 0;
                o < e.length;
                ++o
              ) {
                var s = void 0
                if (o > 0) {
                  var i = this.qwertyDistance(e[o - 1], e[o])
                  s =
                    0 === i
                      ? this.getRandomInt(n, Math.floor(t / 2))
                      : 1 === i
                      ? this.getRandomInt(n, Math.floor((2 * t) / 3))
                      : this.getRandomInt(n, t)
                } else s = this.getRandomInt(n, t)
                a.push(s + r), (r += s)
              }
              return a
            }),
            (n.getRandomInt = function (e, n) {
              return Math.floor(Math.random() * (n - e + 1)) + e
            }),
            e
          )
        })(),
        W = t(39690),
        G = t(79876),
        V = t(1744)
      function J() {
        var e = (0, u.Z)(["flex flex-col gap-2 text-gray-100 text-sm\n", ""])
        return (
          (J = function () {
            return e
          }),
          e
        )
      }
      function Y() {
        var e = (0, u.Z)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer break-all\n",
          "\n",
        ])
        return (
          (Y = function () {
            return e
          }),
          e
        )
      }
      function X() {
        var e = (0, u.Z)([
          "flex py-3 px-3 items-center gap-3 relative rounded-md hover:bg-[#2A2B32] cursor-pointer hover:pr-14 break-all\n",
          "\n",
        ])
        return (
          (X = function () {
            return e
          }),
          e
        )
      }
      function K() {
        var e = (0, u.Z)(["text-sm border-none bg-transparent p-0 m-0 w-full"])
        return (
          (K = function () {
            return e
          }),
          e
        )
      }
      function Q() {
        var e = (0, u.Z)([
          "flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative ",
        ])
        return (
          (Q = function () {
            return e
          }),
          e
        )
      }
      function ee() {
        var e = (0, u.Z)([
          "absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l\n",
          "",
        ])
        return (
          (ee = function () {
            return e
          }),
          e
        )
      }
      function en() {
        var e = (0, u.Z)(["absolute flex right-1 z-10 text-gray-300\n", ""])
        return (
          (en = function () {
            return e
          }),
          e
        )
      }
      function et() {
        var e = (0, u.Z)(["p-1 hover:text-white"])
        return (
          (et = function () {
            return e
          }),
          e
        )
      }
      function er(e) {
        var n = e.items,
          t = e.activeId,
          r = e.onNextPage,
          a = e.hasNextPage,
          o = e.onNewThread,
          s = e.onRefetchHistory,
          i = e.onUpdateUserModifiedTitle,
          l = e.userModifiedTitle,
          u = e.newChatName,
          c = e.isLoading,
          d = e.isError,
          m = (0, k.useRef)(null),
          h = (0, k.useState)(!1),
          x = h[0],
          g = h[1],
          p = (0, k.useCallback)(
            function () {
              g(!0), s()
            },
            [s]
          )
        ;(0, k.useEffect)(function () {
          m.current && m.current.scrollIntoView()
        }, [])
        var v = 0 === n.length
        return (0, f.jsxs)(ea, {
          $centered: c || (d && v),
          children: [
            v && c && (0, f.jsx)(V.Z, { className: "m-auto" }),
            v &&
              d &&
              (0, f.jsxs)("div", {
                className: "p-3 italic text-gray-500",
                children: [
                  "Unable to load history",
                  !x &&
                    (0, f.jsx)(W.z, {
                      as: "button",
                      color: "dark",
                      size: "small",
                      className: "m-auto mt-2",
                      onClick: p,
                      children: "Retry",
                    }),
                ],
              }),
            n.map(function (e) {
              var n = t === e.id
              return (0,
              f.jsx)(eo, { id: e.id, title: e.title, newChatName: n ? u : void 0, userModifiedTitle: n ? l : "", onUpdateUserModifiedTitle: i, active: n, forwardRef: n ? m : void 0, onNewThread: o, onRefetchHistory: s }, "Entry-".concat(e.id))
            }),
            a &&
              (0, f.jsx)(W.z, {
                as: "button",
                onClick: r,
                color: "dark",
                className: "m-auto mb-2",
                size: "small",
                children: "Show more",
              }),
          ],
        })
      }
      var ea = P.Z.div(J(), function (e) {
        return e.$centered && "h-full justify-center items-center"
      })
      function eo(e) {
        var n = e.id,
          t = e.title,
          r = e.active,
          a = e.onNewThread,
          o = e.onRefetchHistory,
          s = e.onUpdateUserModifiedTitle,
          i = e.newChatName,
          l = e.userModifiedTitle,
          u = e.forwardRef,
          c = (0, O.dD)(),
          d = (0, I.WS)(),
          m = (0, j.useRouter)(),
          h = (0, k.useState)(!1),
          x = h[0],
          p = h[1],
          b = (0, k.useRef)(null),
          y = (0, k.useState)(!1),
          w = y[0],
          C = y[1],
          Z = (0, k.useContext)(L.yP).href,
          P = (0, k.useState)(),
          T = P[0],
          M = P[1],
          D = (0, k.useCallback)(
            function (e) {
              var r, a
              if (
                (null == e || e.preventDefault(),
                p(!1),
                (null === (r = b.current) || void 0 === r ? void 0 : r.value) &&
                  (null === (a = b.current) || void 0 === a
                    ? void 0
                    : a.value) !== t)
              ) {
                var i = b.current.value
                F.ZP.patchConversation(n, { title: i }),
                  s(i),
                  d(S.s6.renameThread, { threadId: n, content: i }),
                  o()
              }
            },
            [d, n, o, s, t]
          ),
          R = (0, k.useCallback)(
            function (e) {
              "Enter" === e.key && D()
            },
            [D]
          ),
          A = (0, k.useCallback)(
            function () {
              F.ZP.patchConversation(n, { is_visible: !1 }).then(function () {
                o()
              }),
                m.asPath === Z ? a() : m.replace({ pathname: Z })
            },
            [Z, n, a, o, m]
          ),
          E = (0, k.useCallback)(
            function (e) {
              e.preventDefault(),
                d(S.s6.loadThread, { threadId: n }),
                m.push({ pathname: m.pathname, query: { chatId: n } }, void 0, {
                  shallow: !0,
                })
            },
            [d, n, m]
          ),
          U = l || (r && i) || t
        if (
          ((0, k.useEffect)(
            function () {
              r && i && i !== T && M(i)
            },
            [r, i, U, T, l]
          ),
          x)
        )
          return (0, f.jsxs)(ei, {
            $active: r,
            children: [
              (0, f.jsx)(G.ZP, { icon: N.IC0, className: "flex-shrink-0" }),
              (0, f.jsx)(el, {
                ref: b,
                type: "text",
                defaultValue: U,
                autoFocus: !0,
                onKeyDown: R,
                className: "mr-0",
                onBlur: D,
              }),
              (0, f.jsxs)(ed, {
                $active: !0,
                children: [
                  (0, f.jsx)(em, {
                    onClick: D,
                    children: (0, f.jsx)(G.ZP, { icon: N.UgA }),
                  }),
                  (0, f.jsx)(em, {
                    onClick: function (e) {
                      e.preventDefault(), p(!1)
                    },
                    children: (0, f.jsx)(G.ZP, { icon: N.q5L }),
                  }),
                ],
              }),
            ],
          })
        var z = T && r && !c && !l,
          B = 'Delete "'.concat(U, '"?')
        return (0, f.jsxs)(es, {
          onClick: r ? v() : E,
          $active: r,
          className: (0, g.Z)("group", z && "animate-flash"),
          ref: u,
          children: [
            (0, f.jsx)(G.ZP, { icon: w ? N.Ybf : N.IC0 }),
            (0, f.jsxs)(eu, {
              children: [
                z ? (0, f.jsx)(H, { text: U, onDone: o }) : w ? B : U,
                (!T || !r) && (0, f.jsx)(ec, { $active: r }),
              ],
            }),
            w &&
              (0, f.jsxs)(ed, {
                $active: !0,
                children: [
                  (0, f.jsx)(em, {
                    onClick: A,
                    children: (0, f.jsx)(G.ZP, { icon: N.UgA }),
                  }),
                  (0, f.jsx)(em, {
                    onClick: function () {
                      C(!1)
                    },
                    children: (0, f.jsx)(G.ZP, { icon: N.q5L }),
                  }),
                ],
              }),
            r &&
              !w &&
              (0, f.jsxs)(ed, {
                $active: r,
                children: [
                  (0, f.jsx)(em, {
                    onClick: function (e) {
                      e.preventDefault(), p(!0)
                    },
                    children: (0, f.jsx)(G.ZP, { icon: N.Nte }),
                  }),
                  (0, f.jsx)(em, {
                    onClick: function () {
                      return C(!0)
                    },
                    children: (0, f.jsx)(G.ZP, { icon: N.Ybf }),
                  }),
                ],
              }),
          ],
        })
      }
      var es = P.Z.a(Y(), function (e) {
          return e.$active
            ? "pr-14 bg-gray-800 hover:bg-gray-800"
            : "hover:pr-4"
        }),
        ei = P.Z.div(X(), function (e) {
          return e.$active && "pr-14 bg-gray-800 hover:bg-gray-800"
        }),
        el = P.Z.input(K()),
        eu = P.Z.div(Q()),
        ec = P.Z.div(ee(), function (e) {
          return e.$active
            ? "from-gray-800"
            : "from-gray-900 group-hover:from-[#2A2B32]"
        }),
        ed = P.Z.div(en(), function (e) {
          return e.$active ? "visible" : "invisible group-hover:visible"
        }),
        em = P.Z.button(et()),
        ef = t(73925),
        eh = t(40638),
        ex = t(29634),
        eg = t(15762),
        ep = t(54721),
        ev = t.n(ep),
        eb = t(7137)
      function ey() {
        var e = (0, u.Z)([
          "flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm",
        ])
        return (
          (ey = function () {
            return e
          }),
          e
        )
      }
      function ej() {
        var e = (0, u.Z)([
          "flex-col flex-1 overflow-y-auto border-b border-white/20\n",
          "",
        ])
        return (
          (ej = function () {
            return e
          }),
          e
        )
      }
      var ew = P.Z.a(ey()),
        eC = P.Z.div(ej(), function (e) {
          return e.$offsetScrollbar && "-mr-2"
        })
      function ek(e) {
        var n = e.onClickAccountPayment,
          t = e.showAccountPaymentMenuItem,
          r = e.onClickCustomerPortal,
          a = e.showCustomerPortalMenuItem,
          s = e.onDeleteHistory,
          i = e.showDeleteHistory,
          l = e.onNewThread,
          u = e.onOpenDebugPanel,
          c = e.pages,
          d = e.settings,
          m = e.children,
          h = (0, I.WS)(),
          x = (0, eg.F)(),
          p = x.theme,
          v = x.setTheme,
          b = (0, _.Z)(),
          y = (0, A.hz)(),
          w = (0, j.useRouter)(),
          C = w.pathname,
          Z = (0, k.useContext)(L.yP),
          P = Z.id,
          M = Z.href,
          D = (0, k.useRef)(null),
          R = (0, k.useState)(!1),
          F = R[0],
          O = R[1],
          U = (0, k.useState)(!1),
          z = U[0],
          B = U[1],
          q = (0, k.useMemo)(
            function () {
              var e
              return (
                null === (e = w.query.chatId) || void 0 === e ? void 0 : e[0]
              )
                ? (0, f.jsx)(
                    ev(),
                    {
                      href: M,
                      children: (0, f.jsxs)(ew, {
                        className: "mb-2 flex-shrink-0 border border-white/20",
                        children: [
                          (0, f.jsx)(G.ZP, { icon: N.OvN }),
                          "New chat",
                        ],
                      }),
                    },
                    "Page-reset"
                  )
                : (0, f.jsxs)(ew, {
                    onClick: l,
                    className: "mb-2 flex-shrink-0 border border-white/20",
                    children: [(0, f.jsx)(G.ZP, { icon: N.OvN }), "New chat"],
                  })
            },
            [M, l, w.query.chatId]
          ),
          H = c.filter(function (e) {
            return C.indexOf(e.href)
          }),
          $ = (0, k.useCallback)(
            function () {
              h(S.s6.clickDiscordLink)
            },
            [h]
          ),
          W = (0, k.useCallback)(
            function () {
              h(S.s6.clickFaqLink)
            },
            [h]
          )
        ;(0, k.useEffect)(
          function () {
            if (D.current) {
              var e
              O(
                (e = D.current).scrollHeight > e.clientHeight ||
                  e.scrollWidth > e.clientWidth
              )
            }
          },
          [m]
        )
        var V = (0, E.g)(function (e) {
          return e.flags.highlightPlusUpgrade
        })
        return (0, f.jsx)("div", {
          className:
            "scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20",
          children: (0, f.jsxs)("nav", {
            className: "flex h-full flex-1 flex-col space-y-1 p-2",
            children: [
              q,
              (0, f.jsx)(eC, { ref: D, $offsetScrollbar: F, children: m }),
              i &&
                (0, f.jsxs)(ew, {
                  onClick: function () {
                    return z ? s() : B(!0)
                  },
                  children: [
                    (0, f.jsx)(G.ZP, { icon: z ? N.UgA : N.Ybf }),
                    z ? "Confirm clear conversations" : "Clear conversations",
                  ],
                }),
              y.has("debug") &&
                (0, f.jsxs)(ew, {
                  onClick: function () {
                    return u(!0)
                  },
                  children: [(0, f.jsx)(G.ZP, { icon: N.cDN }), "Debug"],
                }),
              "chat" === P &&
                t &&
                n &&
                (0, f.jsxs)(ew, {
                  className: (0, g.Z)(
                    (0, o.Z)(
                      {},
                      "!bg-yellow-400 !text-gray-900 font-medium border-b-2 shim-yellow !border-yellow-600 hover:!bg-yellow-400/90",
                      V
                    )
                  ),
                  onClick: n,
                  children: [(0, f.jsx)(G.ZP, { icon: N.fzv }), "Upgrade plan"],
                }),
              b() &&
                (0, f.jsxs)(ew, {
                  onClick: function () {
                    return v("dark" === p ? "light" : "dark")
                  },
                  children: [
                    (0, f.jsx)(G.ZP, { icon: "dark" === p ? N.kXG : N.wOW }),
                    "dark" === p ? "Light" : "Dark",
                    " mode",
                  ],
                }),
              "chat" === P &&
                (0, f.jsxs)(ew, {
                  href: "https://discord.gg/openai",
                  target: "_blank",
                  onClick: $,
                  children: [
                    (0, f.jsx)(G.ZP, { icon: eb.j2d }),
                    "OpenAI Discord",
                  ],
                }),
              "chat" === P &&
                a &&
                r &&
                (0, f.jsxs)(ew, {
                  onClick: r,
                  children: [(0, f.jsx)(G.ZP, { icon: N.fzv }), "My account"],
                }),
              "chat" === P &&
                (0, f.jsxs)(ew, {
                  href: "https://help.openai.com/en/collections/3742473-chatgpt",
                  target: "_blank",
                  onClick: W,
                  children: [
                    (0, f.jsx)(G.ZP, { icon: N.AlO }),
                    "Updates & FAQ",
                  ],
                }),
              d,
              H.length > 1 &&
                (0, f.jsx)(
                  ev(),
                  {
                    href: "/",
                    children: (0, f.jsxs)(ew, {
                      children: [(0, f.jsx)(G.ZP, { icon: N.m6D }), "Home"],
                    }),
                  },
                  "Page-home"
                ),
              (0, f.jsxs)(ew, {
                onClick: function () {
                  h(S.s6.clickLogOut, { eventSource: "mouse" }), (0, T.w7)()
                },
                children: [(0, f.jsx)(G.ZP, { icon: N.xqh }), "Log out"],
              }),
            ],
          }),
        })
      }
      var eZ = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            o = e.onDeleteHistory,
            s = e.showDeleteHistory,
            i = e.onNewThread,
            l = e.onOpenDebugPanel,
            u = e.pages,
            c = e.settings,
            d = e.children
          return (0, f.jsx)("div", {
            className:
              "dark hidden bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col",
            children: (0, f.jsx)("div", {
              className: "flex h-full min-h-0 flex-col ",
              children: (0, f.jsx)(ek, {
                onClickAccountPayment: n,
                showAccountPaymentMenuItem: t,
                onClickCustomerPortal: r,
                showCustomerPortalMenuItem: a,
                onDeleteHistory: o,
                showDeleteHistory: s,
                onNewThread: i,
                onOpenDebugPanel: l,
                pages: u,
                settings: c,
                children: d,
              }),
            }),
          })
        },
        eN = function (e) {
          var n = e.onClickAccountPayment,
            t = e.showAccountPaymentMenuItem,
            r = e.onClickCustomerPortal,
            a = e.showCustomerPortalMenuItem,
            o = e.onDeleteHistory,
            s = e.onSidebarOpen,
            i = e.sidebarOpen,
            l = e.showDeleteHistory,
            u = e.onNewThread,
            c = e.onOpenDebugPanel,
            d = e.pages,
            m = e.children,
            h = e.settings
          return (0, f.jsx)(eh.u.Root, {
            show: i,
            as: k.Fragment,
            children: (0, f.jsxs)(ex.V, {
              as: "div",
              className: "relative z-40 md:hidden",
              onClose: s,
              children: [
                (0, f.jsx)(eh.u.Child, {
                  as: k.Fragment,
                  enter: "transition-opacity ease-linear duration-300",
                  enterFrom: "opacity-0",
                  enterTo: "opacity-100",
                  leave: "transition-opacity ease-linear duration-300",
                  leaveFrom: "opacity-100",
                  leaveTo: "opacity-0",
                  children: (0, f.jsx)("div", {
                    className: "fixed inset-0 bg-gray-600 bg-opacity-75",
                  }),
                }),
                (0, f.jsxs)("div", {
                  className: "fixed inset-0 z-40 flex",
                  children: [
                    (0, f.jsx)(eh.u.Child, {
                      as: k.Fragment,
                      enter: "transition ease-in-out duration-300 transform",
                      enterFrom: "-translate-x-full",
                      enterTo: "translate-x-0",
                      leave: "transition ease-in-out duration-300 transform",
                      leaveFrom: "translate-x-0",
                      leaveTo: "-translate-x-full",
                      children: (0, f.jsxs)(ex.V.Panel, {
                        className:
                          "relative flex w-full max-w-xs flex-1 flex-col bg-gray-900",
                        children: [
                          (0, f.jsx)(eh.u.Child, {
                            as: k.Fragment,
                            enter: "ease-in-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-300",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0, f.jsx)("div", {
                              className: "absolute top-0 right-0 -mr-12 pt-2",
                              children: (0, f.jsxs)("button", {
                                type: "button",
                                className:
                                  "ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                onClick: function () {
                                  return s(!1)
                                },
                                children: [
                                  (0, f.jsx)("span", {
                                    className: "sr-only",
                                    children: "Close sidebar",
                                  }),
                                  (0, f.jsx)(G.ZP, {
                                    icon: N.q5L,
                                    size: "medium",
                                    className: "text-white",
                                    "aria-hidden": "true",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, f.jsx)(ek, {
                            onClickAccountPayment: n,
                            showAccountPaymentMenuItem: t,
                            onClickCustomerPortal: r,
                            showCustomerPortalMenuItem: a,
                            onDeleteHistory: o,
                            showDeleteHistory: l,
                            onNewThread: u,
                            onOpenDebugPanel: c,
                            pages: d,
                            settings: h,
                            children: m,
                          }),
                        ],
                      }),
                    }),
                    (0, f.jsx)("div", { className: "w-14 flex-shrink-0" }),
                  ],
                }),
              ],
            }),
          })
        },
        eP = function (e) {
          var n = e.onSidebarOpen,
            t = e.onNewThread,
            r = e.title,
            a = e.newChatName,
            o = (0, k.useState)(),
            s = o[0],
            i = o[1],
            l = (0, j.useRouter)(),
            u = (0, k.useContext)(L.yP).href,
            c = (0, k.useMemo)(
              function () {
                var e
                return (
                  null === (e = l.query.chatId) || void 0 === e ? void 0 : e[0]
                )
                  ? (0, f.jsx)(
                      ev(),
                      {
                        href: u,
                        children: (0, f.jsx)("button", {
                          type: "button",
                          className: "px-3",
                          children: (0, f.jsx)(G.ZP, {
                            icon: N.OvN,
                            size: "medium",
                          }),
                        }),
                      },
                      "Page-reset"
                    )
                  : (0, f.jsx)("button", {
                      type: "button",
                      className: "px-3",
                      onClick: t,
                      children: (0, f.jsx)(G.ZP, {
                        icon: N.OvN,
                        size: "medium",
                      }),
                    })
              },
              [u, t, l.query.chatId]
            )
          return (
            (0, k.useEffect)(
              function () {
                a !== s && i(a)
              },
              [a, s]
            ),
            (0, f.jsxs)("div", {
              className:
                "sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",
              children: [
                (0, f.jsxs)("button", {
                  type: "button",
                  className:
                    "-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",
                  onClick: function () {
                    return n(!0)
                  },
                  children: [
                    (0, f.jsx)("span", {
                      className: "sr-only",
                      children: "Open sidebar",
                    }),
                    (0, f.jsx)(G.ZP, {
                      icon: N.cur,
                      "aria-hidden": "true",
                      size: "medium",
                    }),
                  ],
                }),
                (0, f.jsx)("h1", {
                  className: "flex-1 text-center text-base font-normal",
                  children:
                    s && a ? (0, f.jsx)(H, { text: a }) : r || "New chat",
                }),
                c,
              ],
            })
          )
        }
      function eI() {
        var e = (0, u.Z)(["flex flex-row gap-2 mb-4"])
        return (
          (eI = function () {
            return e
          }),
          e
        )
      }
      function eS() {
        var e = (0, u.Z)([
          "bg-gray-200 rounded-md text-gray-500 text-xs flex flex-row items-center gap-1 px-2 py-1",
        ])
        return (
          (eS = function () {
            return e
          }),
          e
        )
      }
      function eT() {
        var e = (0, u.Z)(["flex items-center gap-1"])
        return (
          (eT = function () {
            return e
          }),
          e
        )
      }
      function eM() {
        var e = (0, u.Z)([""])
        return (
          (eM = function () {
            return e
          }),
          e
        )
      }
      var eD = function (e) {
          var n = e.urls,
            t = e.onRemoveUrl,
            r = e.clickable,
            a = e.className
          return 0 === n.size
            ? null
            : (0, f.jsx)(eR, {
                className: a,
                children: Array.from(n).map(function (e) {
                  return (0, f.jsxs)(
                    eF,
                    {
                      children: [
                        (0, f.jsx)(N.XKb, {}),
                        (0, f.jsxs)(
                          eA,
                          (0, i.Z)(
                            (0, s.Z)(
                              {},
                              r
                                ? { href: e, target: "_blank", disabled: !1 }
                                : { disabled: !0 }
                            ),
                            {
                              children: [
                                new URL(e).hostname,
                                r && (0, f.jsx)(N.AlO, {}),
                              ],
                            }
                          )
                        ),
                        t &&
                          (0, f.jsx)(eE, {
                            onClick: function () {
                              return t(e)
                            },
                            children: (0, f.jsx)(N.q5L, {}),
                          }),
                      ],
                    },
                    e
                  )
                }),
              })
        },
        eR = P.Z.div(eI()),
        eF = P.Z.div(eS()),
        eA = P.Z.a(eT()),
        eE = P.Z.button(eM()),
        eL = k.memo(eD)
      function eO() {
        var e = (0, u.Z)([
          "\nflex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]\n",
          "\n",
        ])
        return (
          (eO = function () {
            return e
          }),
          e
        )
      }
      function eU() {
        var e = (0, u.Z)([
          "\nabsolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent\n",
          "",
        ])
        return (
          (eU = function () {
            return e
          }),
          e
        )
      }
      function ez() {
        var e = (0, u.Z)([
          "flex ml-1 mt-1.5 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center",
        ])
        return (
          (ez = function () {
            return e
          }),
          e
        )
      }
      function eB(e) {
        var n = e.onAbortCompletion,
          t = e.onCreateNewCompletion,
          r = e.onUpdateArtifactStatus,
          o = e.onRequestMoreCompletions,
          l = e.onContinueGenerating,
          u = e.artifact,
          c = e.currentLeafId,
          d = e.currentRequestId,
          h = e.threadId,
          x = e.isCompletionInProgress,
          p = e.className,
          v = e.placeholder,
          b = e.currentPrompt,
          y = e.onChangeCurrentPrompt,
          j = e.clearOnSubmit,
          w = void 0 === j || j,
          C = e.disabled,
          P = void 0 !== C && C,
          T = e.shouldRetry,
          M = e.canPause,
          D = void 0 !== M && M,
          R = e.canContinue,
          F = void 0 !== R && R,
          A = "root" === c,
          E = (0, O.dD)(),
          U = (0, I.WS)(),
          z = (0, k.useContext)(L.gt).serviceStatus,
          B = (0, k.useMemo)(function () {
            return new Set([])
          }, []),
          q = (0, k.useRef)(null),
          _ = (0, k.useState)(""),
          H = _[0],
          $ = _[1],
          V = (0, k.useCallback)(
            function (e) {
              r({ state: "pasted", url: e, id: e, contents: "" }), $("")
            },
            [r]
          ),
          J = (0, k.useCallback)(
            function (e) {
              y(e.currentTarget.value)
            },
            [y]
          ),
          Y = (0, k.useCallback)(
            function (e) {
              if ((null == e || e.preventDefault(), !P)) {
                var n,
                  a,
                  o =
                    null === (n = q.current) || void 0 === n ? void 0 : n.value,
                  l = "".concat(
                    null === (a = q.current) || void 0 === a
                      ? void 0
                      : a.dataset.id,
                    "-nextPrompt"
                  )
                if (o || (null == u ? void 0 : u.url)) {
                  var c = (null == u ? void 0 : u.url) || ""
                  ;(null == u ? void 0 : u.state) === "pasted" &&
                    r(function (e) {
                      return (0, i.Z)((0, s.Z)({}, e), { state: "static" })
                    })
                  var d =
                    (null == u ? void 0 : u.state) === "pasted"
                      ? { artifacts: [null == u ? void 0 : u.url] }
                      : {}
                  t(
                    l,
                    (0, s.Z)({ value: o || "" }, d),
                    { eventSource: e ? "mouse" : "keyboard" },
                    c
                  ),
                    w && y(""),
                    $(""),
                    (0, Z.SI)(1, q.current)
                }
              }
            },
            [
              null == u ? void 0 : u.state,
              null == u ? void 0 : u.url,
              w,
              P,
              t,
              r,
              y,
            ]
          ),
          X = (0, k.useCallback)(
            (0, a.Z)(function () {
              var e, n, t, r
              return (0, m.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    if (!B.has("link") || "root" !== c) return [2]
                    return [4, navigator.clipboard.readText()]
                  case 1:
                    return (
                      (n = a.sent()),
                      (t = /^https?:\/\/[^\s]+/g),
                      (r =
                        null === (e = n.match(t)) || void 0 === e
                          ? void 0
                          : e[0]) && $(r),
                      [2]
                    )
                }
              })
            }),
            [B, c]
          ),
          K = (0, k.useCallback)(
            function () {
              r(null)
            },
            [r]
          ),
          Q = (0, k.useCallback)(
            function () {
              n("", d), o(c, { eventSource: "mouse" })
            },
            [c, d, n, o]
          ),
          ee = (0, k.useCallback)(
            function () {
              n("", d),
                U(S.s6.pauseCompletion, { threadId: h, eventSource: "mouse" })
            },
            [d, h, U, n]
          ),
          en = (0, k.useMemo)(
            function () {
              return {
                Enter: {
                  validator: function () {
                    return !P
                  },
                  handler: function (e) {
                    E ||
                      e.shiftKey ||
                      e.isComposing ||
                      (e.preventDefault(), x || Y())
                  },
                },
                Escape: {
                  validator: function () {
                    return D && x
                  },
                  handler: function () {
                    n("", d),
                      U(S.s6.pauseCompletion, {
                        threadId: h,
                        eventSource: "keyboard",
                      })
                  },
                },
              }
            },
            [P, E, x, Y, D, n, d, U, h]
          )
        ;(0, k.useEffect)(
          function () {
            var e = q.current,
              n = function (e) {
                var n
                ;(null === (n = en[e.key]) || void 0 === n
                  ? void 0
                  : n.validator(e)) && en[e.key].handler(e)
              }
            return (
              e && e.addEventListener("keydown", n),
              function () {
                e && e.removeEventListener("keydown", n)
              }
            )
          },
          [en]
        ),
          (0, k.useEffect)(
            function () {
              var e = q.current,
                n = function (n) {
                  !(null == e ? void 0 : e.value) &&
                    H &&
                    A &&
                    (n.preventDefault(), V(H))
                }
              return (
                B.has("link") && e && A && e.addEventListener("paste", n),
                function () {
                  e && e.removeEventListener("paste", n)
                }
              )
            },
            [V, c, A, r, H, B]
          ),
          (0, k.useEffect)(
            function () {
              return (
                window.addEventListener("focus", X),
                function () {
                  window.removeEventListener("focus", X)
                }
              )
            },
            [X]
          ),
          (0, k.useEffect)(function () {
            var e
            null === (e = q.current) || void 0 === e || e.focus()
          }, [])
        var et = !A && !x && !(null == z ? void 0 : z.oof),
          er = (0, k.useCallback)(
            function () {
              l(c)
            },
            [c, l]
          ),
          ea = (0, k.useMemo)(
            function () {
              return (0, f.jsxs)(e$, {
                className: (0, g.Z)(T && "m-auto flex-col items-center"),
                children: [
                  T &&
                    (0, f.jsx)("span", {
                      className: "mb-3 block text-xs md:mb-auto",
                      children: "There was an error generating a response",
                    }),
                  et &&
                    (0, f.jsxs)(W.z, {
                      as: "button",
                      color: T ? "primary" : "neutral",
                      onClick: Q,
                      className: (0, g.Z)(T ? "m-auto" : "border-0 md:border"),
                      children: [
                        (0, f.jsx)(G.ZP, {
                          icon: N.Qxo,
                          size: E ? "small" : "xsmall",
                        }),
                        (!E || T) && "Regenerate response",
                      ],
                    }),
                  F &&
                    (0, f.jsxs)(W.z, {
                      as: "button",
                      color: "neutral",
                      onClick: er,
                      className: "border-0 md:border",
                      children: [
                        (0, f.jsx)(G.ZP, {
                          icon: N.lV_,
                          className: "-rotate-180",
                          size: E ? "small" : "xsmall",
                        }),
                        !E && "Continue generating",
                      ],
                    }),
                  D &&
                    x &&
                    (0, f.jsxs)(W.z, {
                      as: "button",
                      color: "neutral",
                      onClick: ee,
                      className: "border-0 md:border",
                      children: [
                        (0, f.jsx)(G.ZP, {
                          icon: N.jxP,
                          size: E ? "small" : "xsmall",
                        }),
                        !E && "Stop generating",
                      ],
                    }),
                ],
              })
            },
            [F, D, et, ee, Q, er, x, E, T]
          )
        return (0, f.jsx)("form", {
          className: p,
          onSubmit: Y,
          children: (0, f.jsxs)("div", {
            className: "relative flex h-full flex-1 md:flex-col",
            children: [
              !E && ea,
              !T &&
                (0, f.jsxs)(e_, {
                  $disabled: T,
                  children: [
                    (null == u ? void 0 : u.state) === "pasted" &&
                      (0, f.jsx)(eL, {
                        urls: new Set([u.url]),
                        onRemoveUrl: K,
                        className: "ml-2",
                      }),
                    (0, f.jsx)(Z.ZP, {
                      tabIndex: 0,
                      onFocus: X,
                      value: b,
                      "data-id": c,
                      ref: q,
                      style: { maxHeight: "200px" },
                      rows: 1,
                      onChange: J,
                      placeholder: v,
                      className:
                        "m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0",
                      disabled: T,
                    }),
                    (0, f.jsx)(eH, {
                      disabled: x || T || P,
                      $nudgeBottom: x,
                      children: x
                        ? (0, f.jsx)("div", {
                            className: "text-2xl",
                            children: (0, f.jsx)(eq, {}),
                          })
                        : (0, f.jsx)(G.ZP, {
                            icon: N.LbG,
                            size: "small",
                            className: "mr-1",
                          }),
                    }),
                  ],
                }),
              E && ea,
            ],
          }),
        })
      }
      function eq() {
        var e = (0, k.useState)(0),
          n = e[0],
          t = e[1]
        ;(0, k.useEffect)(function () {
          var e = setInterval(function () {
            t(function (e) {
              return (e + 1) % 3
            })
          }, 350)
          return function () {
            return clearInterval(e)
          }
        }, [])
        for (var r = [], a = 0; a < 3; a++)
          r.push(
            (0, f.jsx)(
              "span",
              { className: a <= n ? "" : "invisible", children: "\xb7" },
              a
            )
          )
        return (0, f.jsx)(f.Fragment, { children: r })
      }
      var e_ = P.Z.div(eO(), function (e) {
          return e.$disabled && "bg-gray-100"
        }),
        eH = P.Z.button(eU(), function (e) {
          return e.$nudgeBottom && "disabled:bottom-0.5 md:disabled:bottom-1"
        }),
        e$ = P.Z.div(ez()),
        eW = t(46275)
      function eG(e) {
        var n = e.children,
          t = e.title,
          r = e.icon,
          a = e.sidebarOpen,
          o = e.onSidebarOpen
        return (0, f.jsx)(eh.u.Root, {
          show: a,
          as: k.Fragment,
          children: (0, f.jsxs)(ex.V, {
            as: "div",
            className: "relative z-10",
            onClose: o,
            children: [
              (0, f.jsx)("div", { className: "fixed inset-0" }),
              (0, f.jsx)("div", {
                className: "fixed inset-0 overflow-hidden",
                children: (0, f.jsx)("div", {
                  className: "absolute inset-0 overflow-hidden",
                  children: (0, f.jsx)("div", {
                    className:
                      "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",
                    children: (0, f.jsx)(eh.u.Child, {
                      as: k.Fragment,
                      enter:
                        "transform transition ease-in-out duration-100 sm:duration-300",
                      enterFrom: "translate-x-full",
                      enterTo: "translate-x-0",
                      leave:
                        "transform transition ease-in-out duration-300 sm:duration-500",
                      leaveFrom: "translate-x-0",
                      leaveTo: "translate-x-full",
                      children: (0, f.jsx)(ex.V.Panel, {
                        className:
                          "pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",
                        children: (0, f.jsxs)("div", {
                          className:
                            "flex h-full flex-col overflow-y-auto bg-white shadow-xl dark:bg-gray-800",
                          children: [
                            (0, f.jsx)("div", {
                              className: "",
                              children: (0, f.jsxs)("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  (0, f.jsxs)(ex.V.Title, {
                                    className:
                                      "flex items-center gap-2 px-4 py-2 text-lg font-medium text-gray-900 dark:text-white",
                                    children: [
                                      (0, f.jsx)(G.ZP, { icon: r }),
                                      t,
                                    ],
                                  }),
                                  (0, f.jsx)("div", {
                                    className:
                                      "mr-2 mt-2 flex h-7 items-center",
                                    children: (0, f.jsxs)("button", {
                                      type: "button",
                                      className:
                                        "rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                                      onClick: function () {
                                        return o(!1)
                                      },
                                      children: [
                                        (0, f.jsx)("span", {
                                          className: "sr-only",
                                          children: "Close panel",
                                        }),
                                        (0, f.jsx)(G.ZP, {
                                          icon: N.q5L,
                                          size: "medium",
                                          "aria-hidden": "true",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            (0, f.jsx)("div", {
                              className: "relative flex-1",
                              children: n,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            ],
          }),
        })
      }
      var eV = t(1215)
      function eJ() {
        var e = (0, u.Z)([
          "bg-yellow-300 text-yellow-800 py-0.5 px-1.5 text-xs md:text-sm rounded-md uppercase",
        ])
        return (
          (eJ = function () {
            return e
          }),
          e
        )
      }
      var eY = P.Z.span(eJ()),
        eX = t(97374),
        eK = t.n(eX),
        eQ = t(23119),
        e0 = t(95182),
        e1 = t.n(e0)
      function e2() {
        var e = (0, u.Z)(["text-xs flex items-center justify-center gap-1"])
        return (
          (e2 = function () {
            return e
          }),
          e
        )
      }
      function e3() {
        var e = (0, u.Z)([
          "dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400",
        ])
        return (
          (e3 = function () {
            return e
          }),
          e
        )
      }
      function e6() {
        var e = (0, u.Z)(["flex-grow flex-shrink-0"])
        return (
          (e6 = function () {
            return e
          }),
          e
        )
      }
      function e4(e) {
        var n = e.currentPage,
          t = e.onChangeIndex,
          r = e.length,
          a = e.className,
          o = function (e) {
            t(e1()(n + e, 0, r - 1))
          }
        return (0, f.jsxs)(e5, {
          className: a,
          children: [
            (0, f.jsx)(e7, {
              onClick: function () {
                return o(-1)
              },
              disabled: 0 === n,
              children: (0, f.jsx)(G.ZP, { size: "xsmall", icon: N.YFh }),
            }),
            (0, f.jsx)(e8, { children: "".concat(n + 1, " / ").concat(r) }),
            (0, f.jsx)(e7, {
              onClick: function () {
                return o(1)
              },
              disabled: n === r - 1,
              children: (0, f.jsx)(G.ZP, { size: "xsmall", icon: N.Tfp }),
            }),
          ],
        })
      }
      var e5 = P.Z.div(e2()),
        e7 = P.Z.button(e3()),
        e8 = P.Z.span(e6()),
        e9 = t(38886)
      function ne(e) {
        var n = e.messages,
          t = e.isCompletionInProgress,
          r = n.reduce(function (e, n) {
            return n.err ? e : e + U.Cv.getTextFromMessage(n.message)
          }, ""),
          a = n.filter(function (e) {
            return e.errCode === D.Dd
          }),
          o = a.some(function (e) {
            return "danger" === e.errType
          })
        return (0, f.jsx)(e9.C, {
          text: r,
          format: !0,
          flag: a.length > 0 && (o ? "danger" : "warning"),
          isCompletionInProgress: t,
          showContentPolicyViolation: a.length > 0,
        })
      }
      function nn() {
        var e = (0, u.Z)([
          "w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100",
        ])
        return (
          (nn = function () {
            return e
          }),
          e
        )
      }
      function nt() {
        var e = (0, u.Z)(["flex flex-grow flex-col gap-3"])
        return (
          (nt = function () {
            return e
          }),
          e
        )
      }
      function nr() {
        var e = (0, u.Z)([
          "text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0",
        ])
        return (
          (nr = function () {
            return e
          }),
          e
        )
      }
      function na() {
        var e = (0, u.Z)(["w-[30px] flex flex-col relative items-end"])
        return (
          (na = function () {
            return e
          }),
          e
        )
      }
      function no() {
        var e = (0, u.Z)([
          "p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400",
        ])
        return (
          (no = function () {
            return e
          }),
          e
        )
      }
      function ns() {
        var e = (0, u.Z)([
          "text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2\n",
          "",
        ])
        return (
          (ns = function () {
            return e
          }),
          e
        )
      }
      var ni,
        nl = eK()(
          function () {
            return t.e(328).then(t.bind(t, 63328))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [63328]
              },
            },
            ssr: !1,
          }
        ),
        nu = eK()(
          function () {
            return t.e(736).then(t.bind(t, 98736))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [98736]
              },
            },
            ssr: !1,
          }
        ),
        nc = eK()(
          function () {
            return t.e(24).then(t.bind(t, 6024))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [6024]
              },
            },
            ssr: !1,
          }
        ),
        nd = eK()(
          function () {
            return t.e(672).then(t.bind(t, 37672))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [37672]
              },
            },
            ssr: !1,
          }
        )
      function nm(e) {
        var n
        return (
          (null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.slice(2, 3)) === "n"
        )
      }
      function nf(e) {
        var n, t
        return (
          (null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.slice(2, 3)) === "o" ||
          (null === (t = e.message.recipient) || void 0 === t
            ? void 0
            : t.slice(2, 3)) === "s"
        )
      }
      function nh(e) {
        var n
        return (
          "o" === e.message.content.content_type.slice(1, 2) ||
          ((null === (n = e.message.recipient) || void 0 === n
            ? void 0
            : n.slice(2, 3)) === "t" &&
            "text" === e.message.content.content_type)
        )
      }
      function nx(e) {
        return "e" === e.message.content.content_type.slice(2, 3)
      }
      function ng(e) {
        var n, t, r
        return (
          (null === (n = e.message.user) || void 0 === n
            ? void 0
            : n.name.slice(2, 3)) === "n" ||
          (null === (t = e.message.user) || void 0 === t
            ? void 0
            : t.name.slice(2, 3)) === "o" ||
          (null === (r = e.message.user) || void 0 === r
            ? void 0
            : r.name.slice(2, 3)) === "s"
        )
      }
      ;((ni = r || (r = {}))[(ni.Text = 0)] = "Text"),
        (ni[(ni.MultiText = 1)] = "MultiText"),
        (ni[(ni.SimpleBrowsing = 2)] = "SimpleBrowsing"),
        (ni[(ni.Browsing = 3)] = "Browsing"),
        (ni[(ni.Code = 4)] = "Code"),
        (ni[(ni.CodeExecutionOutput = 5)] = "CodeExecutionOutput")
      var np = k.memo(function (e) {
          var n = e.turn,
            t = e.threadId,
            a = e.treeRef,
            o = e.onChangeItemInView,
            i = e.onChangeRating,
            l = e.onCreateNewNode,
            u = e.onDeleteNode,
            c = e.onRequestCompletion,
            d = e.onUpdateNode,
            m = e.activeRequests,
            h = n.role,
            x = n.messages,
            p = n.variantIds,
            v = (0, k.useState)(x),
            b = v[0],
            y = v[1],
            j = (0, k.useContext)(L.yP).theme,
            w = j.color,
            C = j.icon,
            Z = (0, T.kP)().session,
            P = (0, O.Ui)(),
            M = (0, I.WS)(),
            D = (0, k.useState)(!1),
            F = D[0],
            E = D[1],
            z = (0, k.useMemo)(
              function () {
                return p.findIndex(function (e) {
                  return e === b[0].nodeId
                })
              },
              [p, b]
            ),
            B = b[b.length - 1],
            q = (0, k.useState)(B.rating),
            _ = q[0],
            H = q[1],
            $ = (0, A.hz)(),
            W = (0, k.useCallback)(
              function () {
                1 === b.length &&
                  (M(h === R.uU.User ? S.s6.editPrompt : S.s6.editCompletion, {
                    id: b[0].message.id,
                    threadId: t,
                  }),
                  E(!0))
              },
              [b, M, h, t]
            ),
            V = (0, k.useCallback)(function () {
              E(!1)
            }, []),
            J = (0, k.useCallback)(
              function (e) {
                i(B.nodeId, B.message.id, e), H(e)
              },
              [B, i]
            )
          ;(0, k.useEffect)(
            function () {
              H(B.rating)
            },
            [B]
          ),
            (0, k.useEffect)(
              function () {
                y(x)
              },
              [x]
            )
          var Y = (0, k.useMemo)(
              function () {
                return U.Cv.getRequestIdFromConversationTurn(n)
              },
              [n]
            ),
            X = "CompletionUpdated:".concat(b[b.length - 1].nodeId),
            K = (0, k.useCallback)(
              function (e, n) {
                var t = n.nodeId
                y(function (e) {
                  var n = [],
                    r = !0,
                    o = !1,
                    i = void 0
                  try {
                    for (
                      var l, u = e[Symbol.iterator]();
                      !(r = (l = u.next()).done);
                      r = !0
                    ) {
                      var c = l.value
                      if (c.nodeId === t) {
                        var d = a.current.getNode(t)
                        n.push(
                          (0, s.Z)(
                            {
                              nodeId: t,
                              parentId: d.parentId,
                              message: d.message,
                            },
                            d.metadata
                          )
                        )
                      } else n.push(c)
                    }
                  } catch (m) {
                    ;(o = !0), (i = m)
                  } finally {
                    try {
                      r || null == u.return || u.return()
                    } finally {
                      if (o) throw i
                    }
                  }
                  return n
                })
              },
              [a]
            )
          ;(0, k.useEffect)(
            function () {
              return (
                PubSub.subscribe(X, K),
                function () {
                  PubSub.unsubscribe(X)
                }
              )
            },
            [K, X]
          )
          var Q = (0, k.useMemo)(
              function () {
                return m.has(Y)
              },
              [m, Y]
            ),
            ee = (0, k.useMemo)(
              function () {
                var e = !0,
                  n = !1,
                  t = void 0
                try {
                  for (
                    var r, a = b[Symbol.iterator]();
                    !(e = (r = a.next()).done);
                    e = !0
                  ) {
                    var o = r.value
                    if (o.errType) return o.errType
                  }
                } catch (s) {
                  ;(n = !0), (t = s)
                } finally {
                  try {
                    e || null == a.return || a.return()
                  } finally {
                    if (n) throw t
                  }
                }
                return !1
              },
              [b]
            ),
            en = (0, k.useMemo)(
              function () {
                if (!$.has("tools") && !$.has("tools2")) return [C, w]
                if (Q && b.length > 0) {
                  var e,
                    n = b[b.length - 1]
                  if (nm(n) || nf(n) || ng(n)) return ["s", L.JX]
                  if (nh(n) || nx(n)) return ["c", L.JX]
                  if (
                    "text" === (e = n).message.content.content_type &&
                    (U.Cv.getTextFromMessage(n.message).length > 0 ||
                      b.length > 1)
                  )
                    return ["t", L.JX]
                }
                return [C, w]
              },
              [Q, C, w, b, $]
            ),
            et = en[0],
            er = en[1],
            ea = h !== R.uU.User,
            eo = (0, k.useMemo)(
              function () {
                var e = []
                return (
                  b.forEach(function (n, t) {
                    var a = null == b ? void 0 : b[t - 1],
                      o =
                        a &&
                        (U.Cv.getIsIncompleteFromMessage(a.message) ||
                          U.Cv.getIsContinuedFromMessage(a.message)),
                      s = U.Cv.getIsContinuedFromMessage(n.message),
                      i =
                        U.Cv.getIsTextTypeFromMessage(n.message) &&
                        U.Cv.getTextFromMessage(n.message)
                    if (o && s && i) {
                      var l = e.pop()
                      ;(null == l ? void 0 : l.type) === r.MultiText
                        ? (l.messages.push(n), e.push(l))
                        : (null == l ? void 0 : l.type) === r.Text &&
                          e.push({
                            type: r.MultiText,
                            messages: [l.message, n],
                          })
                    } else if (nm(n) || nf(n) || ng(n)) {
                      var u = e[e.length - 1]
                      ;(null == u ? void 0 : u.type) === r.SimpleBrowsing ||
                      (null == u ? void 0 : u.type) === r.Browsing
                        ? u.messages.push(n)
                        : e.push({
                            type: nm(n) ? r.SimpleBrowsing : r.Browsing,
                            messages: [n],
                          })
                    } else {
                      var c = r.Text
                      nh(n)
                        ? (c = r.Code)
                        : nx(n) && (c = r.CodeExecutionOutput),
                        e.push({ type: c, message: n })
                    }
                  }),
                  e.map(function (n, a) {
                    var s = a === e.length - 1
                    switch (n.type) {
                      case r.Text:
                        return (0,
                        f.jsx)(e9.Z, { className: "min-h-[20px]", message: n.message, isEditing: F, format: ea, isCompletionInProgress: s && Q, onCreateNewNode: l, threadId: t, onUpdateNode: d, onDeleteNode: u, onChangeItemInView: o, onRequestCompletion: c, onExitEdit: V, disabled: 0 !== m.size }, n.message.nodeId)
                      case r.MultiText:
                        return (0,
                        f.jsx)(ne, { messages: n.messages, isCompletionInProgress: s && Q }, a)
                      case r.SimpleBrowsing:
                        return (0,
                        f.jsx)(nl, { messages: n.messages }, n.messages[0].nodeId)
                      case r.Browsing:
                        return (0,
                        f.jsx)(nu, { messages: n.messages, isComplete: !s }, n.messages[0].nodeId)
                      case r.Code:
                        var i = e[a + 1],
                          h =
                            i && i.type === r.CodeExecutionOutput
                              ? i.message
                              : void 0
                        return (0,
                        f.jsx)(nc, { message: n.message, outputMessage: h }, n.message.nodeId)
                      case r.CodeExecutionOutput:
                        return (0,
                        f.jsx)(nd, { message: n.message, isCollapsed: !1 }, n.message.nodeId)
                      default:
                        return null
                    }
                  })
                )
              },
              [m.size, V, ea, F, Q, b, o, l, u, c, d, t]
            )
          return (0, f.jsx)(nv, {
            className: (0, g.Z)(
              "group",
              ea ? "bg-gray-50 dark:bg-[#444654]" : "dark:bg-gray-800"
            ),
            children: (0, f.jsxs)(ny, {
              children: [
                (0, f.jsxs)(nj, {
                  children: [
                    ea
                      ? (0, f.jsx)(eQ.k, {
                          background: er,
                          iconName: et,
                          notice: ee || void 0,
                        })
                      : (0, f.jsx)(eQ.Y, {
                          user: null == Z ? void 0 : Z.user,
                          notice: ee || void 0,
                        }),
                    p.length > 1 &&
                      !P &&
                      (0, f.jsx)(e4, {
                        currentPage: z,
                        onChangeIndex: function (e) {
                          return o(p[e])
                        },
                        length: p.length,
                        className:
                          "invisible absolute left-0 top-2 -ml-4 -translate-x-full group-hover:visible",
                      }),
                  ],
                }),
                (0, f.jsxs)("div", {
                  className:
                    "relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]",
                  children: [
                    (0, f.jsx)(nb, { children: eo }),
                    !ea &&
                      1 === b.length &&
                      !F &&
                      (0, f.jsx)(nC, {
                        $hidden: 0 !== m.size,
                        children: (0, f.jsx)(nw, {
                          onClick: W,
                          className: "md:invisible md:group-hover:visible",
                          children: (0, f.jsx)(G.ZP, { icon: N.vPQ }),
                        }),
                      }),
                    (0, f.jsxs)("div", {
                      className: "flex justify-between",
                      children: [
                        p.length > 1 &&
                          P &&
                          (0, f.jsx)(e4, {
                            currentPage: z,
                            onChangeIndex: function (e) {
                              return o(p[e])
                            },
                            length: p.length,
                            className: "self-center pt-2",
                          }),
                        ea &&
                          (0, f.jsxs)(nC, {
                            $hidden: Q,
                            children: [
                              "thumbsDown" !== _ &&
                                (0, f.jsx)(
                                  nw,
                                  {
                                    onClick: function () {
                                      return J("thumbsUp")
                                    },
                                    disabled: "thumbsUp" === _,
                                    className: (0, g.Z)(
                                      "thumbsUp" === _ &&
                                        "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                                    ),
                                    children: (0, f.jsx)(G.ZP, { icon: N.fmn }),
                                  },
                                  "thumbsUp:".concat(B.nodeId)
                                ),
                              "thumbsUp" !== _ &&
                                (0, f.jsx)(
                                  nw,
                                  {
                                    onClick: function () {
                                      return J("thumbsDown")
                                    },
                                    disabled: "thumbsDown" === _,
                                    className: (0, g.Z)(
                                      "thumbsDown" === _ &&
                                        "!dark:text-gray-200 bg-gray-100 text-gray-700 dark:bg-gray-700"
                                    ),
                                    children: (0, f.jsx)(G.ZP, { icon: N.oLd }),
                                  },
                                  "thumbsDown:".concat(B.nodeId)
                                ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        }),
        nv = P.Z.div(nn()),
        nb = P.Z.div(nt()),
        ny = P.Z.div(nr()),
        nj = P.Z.div(na()),
        nw = P.Z.button(no()),
        nC = P.Z.div(ns(), function (e) {
          return e.$hidden ? "invisible" : "visible"
        }),
        nk = t(35888),
        nZ = t(44819),
        nN = ["confidential", "plus"]
      function nP(e) {
        var n = e.onChangeModelSetting,
          t = e.availableModels,
          r = (0, nZ.ZP)(t).modelBackend,
          a = (0, k.useCallback)(
            function (e) {
              n(nZ.G3.Model, e.id)
            },
            [n]
          ),
          o =
            t.find(function (e) {
              return e.id === r
            }) || t[0]
        return (0, f.jsx)(nk.R, {
          value: o,
          onChange: a,
          children: function (e) {
            var n,
              r = e.open
            return (0, f.jsx)(f.Fragment, {
              children: (0, f.jsxs)("div", {
                className:
                  "relative w-full md:m-auto md:w-1/2 lg:w-1/3 xl:w-1/4",
                children: [
                  (0, f.jsxs)(nk.R.Button, {
                    className:
                      "relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm",
                    children: [
                      (0, f.jsx)(nk.R.Label, {
                        className:
                          "block text-xs text-gray-700 dark:text-gray-500",
                        children: "Model",
                      }),
                      (0, f.jsx)("span", {
                        className: "inline-flex w-full truncate",
                        children: (0, f.jsxs)("span", {
                          className: "flex h-6 items-center gap-1 truncate",
                          children: [
                            null == o ? void 0 : o.title,
                            null == o
                              ? void 0
                              : null === (n = o.tags) || void 0 === n
                              ? void 0
                              : n.map(function (e) {
                                  return nI(e)
                                }),
                          ],
                        }),
                      }),
                      (0, f.jsx)("span", {
                        className:
                          "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                        children: (0, f.jsx)(G.ZP, {
                          icon: N.bTu,
                          className: " text-gray-400",
                          "aria-hidden": "true",
                        }),
                      }),
                    ],
                  }),
                  (0, f.jsx)(eh.u, {
                    show: r,
                    as: k.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: (0, f.jsx)(nk.R.Options, {
                      className:
                        "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:ring-white/20 dark:last:border-0 sm:text-sm md:w-[200%] md:-translate-x-1/4",
                      children: t.map(function (e) {
                        return (0, f.jsx)(
                          nk.R.Option,
                          {
                            className: function (e) {
                              var n = e.active
                              return (0, g.Z)(
                                n
                                  ? "bg-gray-100 dark:bg-gray-700"
                                  : "text-gray-900",
                                "relative cursor-pointer select-none border-b border-gray-100 py-2 pl-3 pr-9 last:border-0 dark:border-white/20"
                              )
                            },
                            value: e,
                            children: function (n) {
                              var t = n.selected,
                                r = n.active
                              return (0, f.jsxs)(f.Fragment, {
                                children: [
                                  (0, f.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, f.jsxs)("span", {
                                        className: (0, g.Z)(
                                          "font-semibold",
                                          "flex h-6 items-center gap-1 truncate text-gray-800 dark:text-gray-100"
                                        ),
                                        children: [
                                          e.title,
                                          e.tags.map(function (e) {
                                            return nI(e)
                                          }),
                                        ],
                                      }),
                                      (0, f.jsx)("span", {
                                        className: (0, g.Z)(
                                          r ? "" : "text-gray-500",
                                          "text-xs"
                                        ),
                                        children: e.description,
                                      }),
                                    ],
                                  }),
                                  t
                                    ? (0, f.jsx)("span", {
                                        className: (0, g.Z)(
                                          "absolute inset-y-0 right-0 flex items-center pr-4 text-gray-800 dark:text-gray-100"
                                        ),
                                        children: (0, f.jsx)(G.ZP, {
                                          icon: N.UgA,
                                          className: "h-5 w-5",
                                          "aria-hidden": "true",
                                        }),
                                      })
                                    : null,
                                ],
                              })
                            },
                          },
                          e.id
                        )
                      }),
                    }),
                  }),
                ],
              }),
            })
          },
        })
      }
      var nI = function (e) {
          return (
            nN.includes(e) &&
            (0, f.jsx)(
              "span",
              {
                className: (0, g.Z)(
                  "rounded-md px-1 py-0.5 text-xs font-semibold uppercase",
                  "confidential" === e && "bg-red-200 text-red-800",
                  "plus" === e && "bg-yellow-300 text-yellow-800"
                ),
                children: e,
              },
              e
            )
          )
        },
        nS = t(75318)
      function nT() {
        var e = (0, u.Z)([
          "text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100",
        ])
        return (
          (nT = function () {
            return e
          }),
          e
        )
      }
      function nM() {
        var e = (0, u.Z)([
          "text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center",
        ])
        return (
          (nM = function () {
            return e
          }),
          e
        )
      }
      function nD() {
        var e = (0, u.Z)(["md:flex items-start text-center gap-3.5"])
        return (
          (nD = function () {
            return e
          }),
          e
        )
      }
      function nR() {
        var e = (0, u.Z)(["flex flex-col mb-8 md:mb-auto gap-3.5 flex-1"])
        return (
          (nR = function () {
            return e
          }),
          e
        )
      }
      function nF() {
        var e = (0, u.Z)([
          "flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2",
        ])
        return (
          (nF = function () {
            return e
          }),
          e
        )
      }
      function nA() {
        var e = (0, u.Z)(["flex flex-col gap-3.5 w-full sm:max-w-md m-auto"])
        return (
          (nA = function () {
            return e
          }),
          e
        )
      }
      function nE() {
        var e = (0, u.Z)(["w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md"])
        return (
          (nE = function () {
            return e
          }),
          e
        )
      }
      function nL() {
        var e = (0, u.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md after:content-['\"'] before:content-['\"']",
        ])
        return (
          (nL = function () {
            return e
          }),
          e
        )
      }
      function nO() {
        var e = (0, u.Z)([
          "w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900",
        ])
        return (
          (nO = function () {
            return e
          }),
          e
        )
      }
      var nU = P.Z.div(nT()),
        nz = P.Z.h1(nM()),
        nB = P.Z.div(nD()),
        nq = P.Z.div(nR()),
        n_ = P.Z.h2(nF()),
        nH = P.Z.ul(nA()),
        n$ = P.Z.li(nE()),
        nW = P.Z.li(nL()),
        nG = P.Z.button(nO())
      function nV(e) {
        var n = e.text,
          t = e.onChangeCurrentPrompt,
          r = (0, k.useCallback)(
            function () {
              t(n)
            },
            [n, t]
          )
        return (0, f.jsxs)(nG, { onClick: r, children: ['"', n, '" →'] })
      }
      function nJ(e) {
        var n = e.onChangeCurrentPrompt,
          t = (0, A.nR)()
        return (0, f.jsxs)(nU, {
          children: [
            (0, f.jsxs)(nz, {
              children: ["ChatGPT", t && (0, f.jsx)(eY, { children: "Plus" })],
            }),
            (0, f.jsxs)(nB, {
              children: [
                (0, f.jsxs)(nq, {
                  children: [
                    (0, f.jsxs)(n_, {
                      children: [
                        (0, f.jsx)(G.ZP, { icon: N.kXG, size: "medium" }),
                        "Examples",
                      ],
                    }),
                    (0, f.jsxs)(nH, {
                      children: [
                        (0, f.jsx)(nV, {
                          text: "Explain quantum computing in simple terms",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, f.jsx)(nV, {
                          text: "Got any creative ideas for a 10 year old’s birthday?",
                          onChangeCurrentPrompt: n,
                        }),
                        (0, f.jsx)(nV, {
                          text: "How do I make an HTTP request in Javascript?",
                          onChangeCurrentPrompt: n,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(nq, {
                  children: [
                    (0, f.jsxs)(n_, {
                      children: [
                        (0, f.jsx)(G.ZP, { icon: nS.Z, size: "medium" }),
                        "Capabilities",
                      ],
                    }),
                    (0, f.jsxs)(nH, {
                      children: [
                        (0, f.jsx)(n$, {
                          children:
                            "Remembers what user said earlier in the conversation",
                        }),
                        (0, f.jsx)(n$, {
                          children:
                            "Allows user to provide follow-up corrections",
                        }),
                        (0, f.jsx)(n$, {
                          children: "Trained to decline inappropriate requests",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(nq, {
                  children: [
                    (0, f.jsxs)(n_, {
                      children: [
                        (0, f.jsx)(G.ZP, { icon: N.BJv, size: "medium" }),
                        "Limitations",
                      ],
                    }),
                    (0, f.jsxs)(nH, {
                      children: [
                        (0, f.jsx)(n$, {
                          children:
                            "May occasionally generate incorrect information",
                        }),
                        (0, f.jsx)(n$, {
                          children:
                            "May occasionally produce harmful instructions or biased content",
                        }),
                        (0, f.jsx)(n$, {
                          children:
                            "Limited knowledge of world and events after 2021",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var nY = t(40053)
      function nX() {
        return (0, f.jsxs)(nU, {
          children: [
            (0, f.jsx)(nz, { children: "Workspace" }),
            (0, f.jsxs)(nB, {
              children: [
                (0, f.jsxs)(nq, {
                  children: [
                    (0, f.jsx)(G.ZP, {
                      icon: N.kXG,
                      size: "medium",
                      className: "m-auto",
                    }),
                    (0, f.jsx)(n_, { children: "Learn about anything" }),
                    (0, f.jsxs)(nH, {
                      children: [
                        (0, f.jsx)(nW, {
                          children:
                            "Explain quantum computing, in layman's terms",
                        }),
                        (0, f.jsx)(nW, {
                          children: "What the heck is a Kubernetes cluster?",
                        }),
                        (0, f.jsx)(nW, {
                          children: "Quiz me on the Boston Tea Party",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(nq, {
                  children: [
                    (0, f.jsx)(G.ZP, {
                      icon: nS.Z,
                      size: "medium",
                      className: "m-auto",
                    }),
                    (0, f.jsx)(n_, { children: "Synthesize information" }),
                    (0, f.jsxs)(nH, {
                      children: [
                        (0, f.jsx)(nW, {
                          children:
                            "Pull out memorable quotes from this blog post",
                        }),
                        (0, f.jsx)(nW, {
                          children:
                            "Summarize this meeting transcript as a poem",
                        }),
                        (0, f.jsx)(nW, {
                          children: "Compare and contrast these two articles",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, f.jsxs)(nq, {
                  children: [
                    (0, f.jsx)(G.ZP, {
                      icon: nY.Z,
                      size: "medium",
                      className: "m-auto",
                    }),
                    (0, f.jsx)(n_, { children: "Create things together" }),
                    (0, f.jsxs)(nH, {
                      children: [
                        (0, f.jsx)(nW, {
                          children:
                            "Plan an itinerary for a weekend trip to Big Sur",
                        }),
                        (0, f.jsx)(nW, {
                          children:
                            "Create an alien-themed browser game, full code",
                        }),
                        (0, f.jsx)(nW, {
                          children:
                            "Write a critical analysis on the current state of AI",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var nK = t(24066)
      function nQ() {
        var e = (0, u.Z)([
          "w-full px-6 md:px-0 md:max-w-2xl lg:max-w-3xl md:h-full md:flex text-gray-600 dark:text-white gap-10 items-center justify-between",
        ])
        return (
          (nQ = function () {
            return e
          }),
          e
        )
      }
      function n0() {
        var e = (0, u.Z)([
          "font-mono font-normal text-6xl flex gap-6 flex-col items-center py-10 border-b-2 border-gray-700 md:items-start md:border-0 md:py-0",
        ])
        return (
          (n0 = function () {
            return e
          }),
          e
        )
      }
      function n1() {
        var e = (0, u.Z)(["flex flex-col items-center justify-evenly h-full"])
        return (
          (n1 = function () {
            return e
          }),
          e
        )
      }
      function n2() {
        var e = (0, u.Z)(["flex flex-col items-center gap-2"])
        return (
          (n2 = function () {
            return e
          }),
          e
        )
      }
      function n3() {
        var e = (0, u.Z)(["text-xl font-normal"])
        return (
          (n3 = function () {
            return e
          }),
          e
        )
      }
      function n6() {
        var e = (0, u.Z)(["text-base dark:text-gray-300"])
        return (
          (n6 = function () {
            return e
          }),
          e
        )
      }
      function n4() {
        return (0, f.jsxs)(n5, {
          children: [
            (0, f.jsx)(n7, { children: "Codespace" }),
            (0, f.jsxs)(n8, {
              children: [
                (0, f.jsxs)(n9, {
                  children: [
                    (0, f.jsx)(G.ZP, {
                      className: "text-gray-400",
                      icon: nK.Z,
                      size: "medium",
                    }),
                    (0, f.jsx)(te, { children: "Ask anything" }),
                    (0, f.jsx)(tn, {
                      children: "No matter how simple or complex",
                    }),
                  ],
                }),
                (0, f.jsxs)(n9, {
                  children: [
                    (0, f.jsx)(G.ZP, {
                      className: "text-gray-400",
                      icon: N.cDN,
                      size: "medium",
                    }),
                    (0, f.jsx)(te, { children: "Write code" }),
                    (0, f.jsx)(tn, {
                      children: "From one line of code to full-fledged apps",
                    }),
                  ],
                }),
                (0, f.jsxs)(n9, {
                  children: [
                    (0, f.jsx)(G.ZP, {
                      className: "text-gray-400",
                      icon: N.U0j,
                      size: "medium",
                    }),
                    (0, f.jsx)(te, { children: "Debug faster" }),
                    (0, f.jsx)(tn, {
                      children: "Paste in a code of just an error statement",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      }
      var n5 = P.Z.div(nQ()),
        n7 = P.Z.h1(n0()),
        n8 = P.Z.div(n1()),
        n9 = P.Z.div(n2()),
        te = P.Z.h2(n3()),
        tn = P.Z.p(n6())
      function tt() {
        var e = (0, u.Z)([
          "flex flex-col items-center text-sm  dark:bg-gray-800\n",
          "",
        ])
        return (
          (tt = function () {
            return e
          }),
          e
        )
      }
      function tr() {
        var e = (0, u.Z)(["w-full h-32 md:h-48 flex-shrink-0"])
        return (
          (tr = function () {
            return e
          }),
          e
        )
      }
      function ta() {
        var e = (0, u.Z)([
          "cursor-pointer absolute right-6 bottom-[124px] md:bottom-[120px] z-10 rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200",
        ])
        return (
          (ta = function () {
            return e
          }),
          e
        )
      }
      function to() {
        var e = (0, u.Z)(["px-2 py-10 relative w-full flex flex-col h-full"])
        return (
          (to = function () {
            return e
          }),
          e
        )
      }
      function ts() {
        var e = (0, u.Z)([
          "text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow",
        ])
        return (
          (ts = function () {
            return e
          }),
          e
        )
      }
      function ti(e) {
        var n = e.conversationTurns,
          t = e.onChangeItemInView,
          r = e.onCreateNewNode,
          a = e.onUpdateNode,
          o = e.onChangeRating,
          s = e.onDeleteNode,
          i = e.onRequestCompletion,
          l = e.onChangeCurrentPrompt,
          u = e.threadId,
          c = e.treeRef,
          d = e.activeRequests,
          m = e.isProcessingArtifact,
          h = e.isLoading,
          x = e.onChangeModelSetting,
          g = e.availableModels,
          p = e.canShowThreadSettings,
          v = (0, k.useContext)(L.yP).id,
          b = (0, eV.useScrollToBottom)(),
          y = (0, q.Z)((0, eV.useSticky)(), 1)[0],
          j = (0, _.Z)(),
          w = n.length < 2,
          C = w && !h && !p,
          Z = p && w && !h,
          P = (0, A.nR)(),
          I = (0, k.useState)(!1),
          S = I[0],
          T = I[1]
        ;(0, k.useEffect)(
          function () {
            h
              ? setTimeout(function () {
                  j() && T(!0)
                }, 1e3)
              : T(!1)
          },
          [h, j]
        )
        var M = (0, k.useMemo)(
          function () {
            switch (v) {
              case "chat":
                return "ChatGPT"
              case "programming":
                return "Codespace"
              case "default":
                return "Workspace"
            }
          },
          [v]
        )
        return (0, f.jsxs)(f.Fragment, {
          children: [
            Z &&
              (0, f.jsxs)(td, {
                children: [
                  (0, f.jsx)(nP, {
                    onChangeModelSetting: x,
                    availableModels: g,
                  }),
                  (0, f.jsxs)(tm, {
                    children: [M, P && (0, f.jsx)(eY, { children: "Plus" })],
                  }),
                ],
              }),
            (0, f.jsxs)(tl, {
              $fullHeight: "programming" === v && C,
              children: [
                "programming" === v && C && (0, f.jsx)(n4, {}),
                "chat" === v &&
                  C &&
                  (0, f.jsx)(nJ, { onChangeCurrentPrompt: l }),
                "default" === v && C && (0, f.jsx)(nX, {}),
                S && h && (0, f.jsx)(V.Z, { className: "mx-auto mt-4" }),
                n.map(function (e, n) {
                  return e.role === R.uU.Unknown
                    ? null
                    : (0, f.jsx)(
                        np,
                        {
                          turn: e,
                          threadId: u,
                          treeRef: c,
                          onChangeItemInView: t,
                          onChangeRating: o,
                          onCreateNewNode: r,
                          onDeleteNode: s,
                          onRequestCompletion: i,
                          onUpdateNode: a,
                          activeRequests: d,
                        },
                        n
                      )
                }),
                !Z && (0, f.jsx)(tu, {}),
              ],
            }),
            m && (0, f.jsx)(V.Z, { className: "mx-auto mt-4" }),
            !y &&
              (0, f.jsx)(tc, {
                onClick: b,
                children: (0, f.jsx)(G.ZP, { icon: N.tv1, className: "m-1" }),
              }),
          ],
        })
      }
      var tl = P.Z.div(tt(), function (e) {
          return e.$fullHeight && "h-full"
        }),
        tu = P.Z.div(tr()),
        tc = P.Z.button(ta()),
        td = P.Z.div(to()),
        tm = P.Z.h1(ts()),
        tf = eK()(
          function () {
            return Promise.resolve().then(t.bind(t, 1215))
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [1215]
              },
            },
            ssr: !1,
          }
        )
      function th(e) {
        var n = e.children
        return e.wrap
          ? (0, f.jsx)(tf, {
              className: (0, g.Z)("h-full dark:bg-gray-800"),
              followButtonClassName: "scroll-convo",
              initialScrollBehavior: "auto",
              children: n,
            })
          : (0, f.jsx)("div", {
              className: "h-full overflow-y-auto",
              children: n,
            })
      }
      var tx = t(44513),
        tg = t(74516)
      function tp() {
        var e = (0, u.Z)([
          "flex grow items-center justify-center bg-white dark:bg-gray-900 rounded-md flex flex-col items-start overflow-hidden border shadow-md dark:border-gray-700",
        ])
        return (
          (tp = function () {
            return e
          }),
          e
        )
      }
      var tv = function (e) {
          var n = e.children,
            t = e.isOpen,
            r = e.onClose,
            a = e.focusRef
          return (0, f.jsx)(ef.Z, {
            size: "fullscreen",
            isOpen: t,
            onModalClose: r,
            type: "success",
            title: "",
            className: "bg-transparent dark:bg-transparent",
            initialFocusRef: a,
            children: (0, f.jsx)("div", {
              className: "flex h-full flex-col items-center justify-start",
              children: (0, f.jsx)("div", {
                className: "relative",
                children: (0, f.jsx)(tb, { children: n }),
              }),
            }),
          })
        },
        tb = P.Z.div(tp())
      function ty() {
        var e = (0, u.Z)([
          "p-4 flex flex-col gap-3 bg-white z-20 relative dark:bg-gray-900",
        ])
        return (
          (ty = function () {
            return e
          }),
          e
        )
      }
      function tj() {
        var e = (0, u.Z)([
          "gap-2 flex flex-row justify-start items-center text-sm",
        ])
        return (
          (tj = function () {
            return e
          }),
          e
        )
      }
      function tw() {
        var e = (0, u.Z)([
          "text-xl font-semibold justify-between items-center flex",
        ])
        return (
          (tw = function () {
            return e
          }),
          e
        )
      }
      var tC = function (e) {
          var n = e.rowElements
          return (0, f.jsx)(tS, {
            children: n.map(function (e) {
              return e
            }),
          })
        },
        tk = function (e) {
          var n = e.className,
            t = e.text,
            r = e.children
          return (0, f.jsxs)(tM, {
            className: n,
            children: [(0, f.jsx)("span", { children: t }), r],
          })
        },
        tZ = {
          "primary-disabled":
            "border-none bg-gray-200 py-3 font-semibold hover:bg-gray-200",
          primary: "border-none py-3 font-semibold",
          disabled:
            "dark:text-gray-white border-none bg-gray-300 py-3 font-semibold text-gray-800 hover:bg-gray-300 dark:bg-gray-500 dark:opacity-100",
        },
        tN = function (e) {
          var n = e.isLoading,
            t = e.disabled,
            r = e.onClick,
            a = (e.className, e.variant),
            o = void 0 === a ? "primary" : a,
            s = e.text,
            i = e.ref
          return (0, f.jsxs)(W.z, {
            disabled: void 0 !== t && t,
            onClick: r,
            openNewTab: !0,
            ref: i,
            as: "button",
            className: (0, g.Z)(tZ[o]),
            children: [
              (0, f.jsx)("span", {
                className: (0, g.Z)({
                  "text-gray-700": "primary-disabled" === o,
                  "text-white": "primary" === o,
                }),
                children: s,
              }),
              void 0 !== n &&
                n &&
                (0, f.jsx)(G.ZP, { className: "animate-spin", icon: N.dAq }),
            ],
          })
        },
        tP = function (e) {
          var n = e.variant,
            t = void 0 === n ? "primary" : n,
            r = e.className,
            a = e.text
          return (0, f.jsxs)(tT, {
            className: r,
            children: [
              (0, f.jsx)(G.ZP, {
                icon: N._rq,
                className: (0, g.Z)("h-5 w-5", {
                  "text-green-700": "primary" == t,
                  "text-gray-400": "secondary" == t,
                }),
              }),
              (0, f.jsx)("span", { children: a }),
            ],
          })
        },
        tI = function (e) {
          var n = e.className,
            t = e.text,
            r = e.isLoading,
            a = e.onClick
          return (0, f.jsx)(tT, {
            className: n,
            children: (0, f.jsxs)("button", {
              onClick: a,
              className: "flex flex-row items-center space-x-1 underline",
              children: [
                (0, f.jsx)("span", { children: t }),
                r &&
                  (0, f.jsx)(G.ZP, { className: "animate-spin", icon: N.dAq }),
              ],
            }),
          })
        },
        tS = P.Z.div(ty()),
        tT = P.Z.div(tj()),
        tM = P.Z.div(tw()),
        tD = {
          free: {
            name: "Free Plan",
            callToAction: {
              active: "Your Current Plan",
              inactive: "Your Current Plan",
            },
            costInDollars: "",
            demandAccess: "Available when demand is low",
            responseSpeed: "Standard response speed",
            modelFeatures: "Regular model updates",
          },
          plus: {
            name: "ChatGPT Plus",
            callToAction: {
              active: "Your current plan",
              inactive: "I'm Interested",
              inactivePayment: "Upgrade plan",
            },
            costInDollars: "$20/mo",
            demandAccess: "Available even when demand is high",
            responseSpeed: "Faster response speed",
            modelFeatures: "Priority access to new features",
          },
          manageSubscription: { callToAction: "Manage my subscription" },
        }
      function tR(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, k.useRef)(null),
          o = (0, I.WS)(),
          s = (0, k.useState)(!1),
          i = s[0],
          l = s[1],
          u = (0, j.useRouter)(),
          c = (0, k.useCallback)(
            function () {
              o(S.s6.closeAccountPaymentModal), t()
            },
            [t, o]
          ),
          d = (0, k.useCallback)(
            (0, a.Z)(function () {
              var e
              return (0, m.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    l(!0), o(S.s6.clickAccountCustomerPortal), (n.label = 1)
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]),
                      [4, F.ZP.fetchCustomerPortalUrl()]
                    )
                  case 2:
                    return (e = n.sent()), u.push(e.url), [3, 5]
                  case 3:
                    return (
                      n.sent(),
                      tg.m.warning(
                        "The account management page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    )
                  case 4:
                    return l(!1), [7]
                  case 5:
                    return [2]
                }
              })
            }),
            [u, o, l]
          )
        return (0, f.jsxs)(tv, {
          isOpen: n,
          onClose: t,
          focusRef: r,
          children: [
            (0, f.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
              children: [
                (0, f.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your Account",
                }),
                (0, f.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: c,
                  children: (0, f.jsx)(N.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, f.jsx)("div", {
              className: "grid",
              children: (0, f.jsx)("div", {
                className: "relative order-1 col-span-1 sm:order-2",
                children: (0, f.jsx)(tC, {
                  rowElements: [
                    (0, f.jsx)(
                      tk,
                      {
                        text: tD.plus.name,
                        children: (0, f.jsx)("span", {
                          className: "font-semibold text-gray-500",
                          children: tD.plus.costInDollars,
                        }),
                      },
                      "row-plus-plan-name"
                    ),
                    (0, f.jsx)(
                      tN,
                      {
                        disabled: !0,
                        variant: "primary-disabled",
                        ref: r,
                        text: tD.plus.callToAction.active,
                      },
                      "row-plus-plan-button"
                    ),
                    (0, f.jsx)(
                      tP,
                      { text: tD.plus.demandAccess },
                      "row-plus-plan-demand"
                    ),
                    (0, f.jsx)(
                      tP,
                      { text: tD.plus.responseSpeed },
                      "row-plus-plan-speed"
                    ),
                    (0, f.jsx)(
                      tP,
                      { className: "sm:pb-1", text: tD.plus.modelFeatures },
                      "row-plus-plan-feathers"
                    ),
                    (0, f.jsx)(
                      tI,
                      {
                        className: "sm:pb-1",
                        isLoading: i,
                        text: tD.manageSubscription.callToAction,
                        onClick: d,
                      },
                      "row-plus-plan-manage"
                    ),
                  ],
                }),
              }),
            }),
          ],
        })
      }
      function tF(e) {
        var n = e.isOpen,
          t = e.onClose,
          r = (0, k.useRef)(null),
          o = (0, I.WS)(),
          s = (0, k.useState)(!1),
          i = s[0],
          l = s[1],
          u = (0, j.useRouter)(),
          c = (0, k.useCallback)(
            function () {
              o(S.s6.closeAccountPaymentModal), t()
            },
            [t, o]
          ),
          d = (0, k.useCallback)(
            (0, a.Z)(function () {
              var e
              return (0, m.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    l(!0), o(S.s6.clickAccountPaymentCheckout), (n.label = 1)
                  case 1:
                    return (
                      n.trys.push([1, 3, 4, 5]), [4, F.ZP.submitCheckoutForm()]
                    )
                  case 2:
                    return (e = n.sent()), u.push(e.url), [3, 5]
                  case 3:
                    return (
                      n.sent(),
                      tg.m.warning(
                        "The payments page encountered an error. Please try again. If the problem continues, please email support@openai.com.",
                        { hasCloseButton: !0 }
                      ),
                      [3, 5]
                    )
                  case 4:
                    return l(!1), [7]
                  case 5:
                    return [2]
                }
              })
            }),
            [u, o, l]
          )
        return (0, f.jsxs)(tv, {
          isOpen: n,
          onClose: t,
          focusRef: r,
          children: [
            (0, f.jsxs)("div", {
              className:
                "flex w-full flex-row items-center justify-between border-b py-3 px-4 dark:border-gray-700",
              children: [
                (0, f.jsx)("span", {
                  className: "text-base font-semibold sm:text-base",
                  children: "Your Account",
                }),
                (0, f.jsx)("button", {
                  className:
                    "text-gray-700 opacity-50 transition hover:opacity-75 dark:text-white",
                  onClick: c,
                  children: (0, f.jsx)(N.q5L, { className: "h-6 w-6" }),
                }),
              ],
            }),
            (0, f.jsxs)("div", {
              className: "grid sm:grid-cols-2",
              children: [
                (0, f.jsx)("div", {
                  className:
                    "relative order-2 col-span-1 border-t border-r-0 dark:border-gray-700 sm:order-1 sm:border-t-0 sm:border-r",
                  children: (0, f.jsx)(tC, {
                    rowElements: [
                      (0, f.jsx)(
                        tk,
                        { text: "Free Plan" },
                        "row-free-plan-name"
                      ),
                      (0, f.jsx)(
                        tN,
                        {
                          variant: "disabled",
                          disabled: !0,
                          text: tD.free.callToAction.active,
                        },
                        "row-free-plan-button"
                      ),
                      (0, f.jsx)(
                        tP,
                        { variant: "secondary", text: tD.free.demandAccess },
                        "row-free-plan-demand"
                      ),
                      (0, f.jsx)(
                        tP,
                        { variant: "secondary", text: tD.free.responseSpeed },
                        "row-free-plan-speed"
                      ),
                      (0, f.jsx)(
                        tP,
                        {
                          className: "sm:pb-2",
                          variant: "secondary",
                          text: tD.free.modelFeatures,
                        },
                        "row-free-plan-updates"
                      ),
                    ],
                  }),
                }),
                (0, f.jsx)("div", {
                  className: "relative order-1 col-span-1 sm:order-2",
                  children: (0, f.jsx)(tC, {
                    rowElements: [
                      (0, f.jsx)(
                        tk,
                        {
                          text: tD.plus.name,
                          children: (0, f.jsx)("span", {
                            className: "font-semibold text-gray-500",
                            children: tD.plus.costInDollars,
                          }),
                        },
                        "row-plus-plan-title"
                      ),
                      (0, f.jsx)(
                        tN,
                        {
                          variant: "primary",
                          disabled: i,
                          isLoading: i,
                          ref: r,
                          onClick: d,
                          text: tD.plus.callToAction.inactivePayment,
                        },
                        "row-plus-plan-button"
                      ),
                      (0, f.jsx)(
                        tP,
                        { variant: "primary", text: tD.plus.demandAccess },
                        "row-plus-plan-demand"
                      ),
                      (0, f.jsx)(
                        tP,
                        { variant: "primary", text: tD.plus.responseSpeed },
                        "row-plus-plan-speed"
                      ),
                      (0, f.jsx)(
                        tP,
                        {
                          className: "sm:pb-2",
                          variant: "primary",
                          text: tD.plus.modelFeatures,
                        },
                        "row-plus-plan-updates"
                      ),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      }
      var tA = t(35873),
        tE = t(77064)
      function tL() {
        var e = (0, u.Z)([
          "h-[37px] py-2.5 px-6 text-xs uppercase text-gray-700 font-medium border-y relative",
        ])
        return (
          (tL = function () {
            return e
          }),
          e
        )
      }
      function tO() {
        var e = (0, u.Z)([
          "relative py-1 px-6 text-xs uppercase text-gray-700 font-medium bg-gray-100 border-y",
        ])
        return (
          (tO = function () {
            return e
          }),
          e
        )
      }
      P.Z.h3(tL())
      var tU = P.Z.h3(tO())
      function tz() {
        var e = (0, u.Z)(["overflow-y-auto h-full"])
        return (
          (tz = function () {
            return e
          }),
          e
        )
      }
      function tB() {
        var e = (0, u.Z)(["whitespace-pre-wrap text-sm"])
        return (
          (tB = function () {
            return e
          }),
          e
        )
      }
      function tq() {
        var e = (0, u.Z)([
          "px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer",
        ])
        return (
          (tq = function () {
            return e
          }),
          e
        )
      }
      function t_() {
        var e = (0, u.Z)(["absolute top-1/2 -translate-y-1/2 right-6"])
        return (
          (t_ = function () {
            return e
          }),
          e
        )
      }
      function tH(e) {
        var n = e.treeRef,
          t = e.currentLeafId,
          r = (0, k.useState)(),
          a = r[0],
          o = r[1],
          s = (0, k.useMemo)(
            function () {
              return n.current
                .getBranchFromLeaf(t)
                .filter(function (e) {
                  return e.type !== R.Jq.Root && e.type !== R.Jq.System
                })
                .map(function (e) {
                  return e.message
                })
            },
            [n, t]
          ),
          i = (0, k.useCallback)(function () {
            o(void 0)
          }, []),
          l = (0, k.useCallback)(
            function () {
              navigator.clipboard.writeText(n.current.getTextFromThread(t))
            },
            [n, t]
          ),
          u = s.map(function (e, n) {
            return (0, f.jsxs)(
              tG,
              {
                role: "button",
                onClick: function () {
                  return o(n)
                },
                children: [
                  (0, f.jsx)("div", {
                    className: "text-xs font-medium uppercase text-gray-400",
                    children: e.role,
                  }),
                  (0, f.jsx)("div", { children: U.Cv.getTextFromMessage(e) }),
                ],
              },
              e.id
            )
          })
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsxs)(t$, {
              children: [
                (0, f.jsxs)(tU, {
                  children: [
                    "Conversation messages",
                    (0, f.jsx)(tV, {
                      children: (0, f.jsx)(tE.$, {
                        label: (0, f.jsx)(tE.u, {
                          text: "Copy conversation text to clipboard",
                        }),
                        children: (0, f.jsx)(tA.Z, { onCopy: l }),
                      }),
                    }),
                  ],
                }),
                (0, f.jsx)(tW, { children: u }),
              ],
            }),
            void 0 !== a &&
              (0, f.jsx)(
                ef.Z,
                {
                  isOpen: !0,
                  onModalClose: i,
                  type: "success",
                  children: (0, f.jsx)("pre", {
                    className:
                      "max-h-[80vh] overflow-auto whitespace-pre-wrap text-xs",
                    children: JSON.stringify(s[a], null, 2),
                  }),
                },
                "DebugMessageModal-".concat(a)
              ),
          ],
        })
      }
      var t$ = P.Z.div(tz()),
        tW = P.Z.pre(tB()),
        tG = P.Z.div(tq()),
        tV = P.Z.div(t_()),
        tJ = t(30331),
        tY = t(87762),
        tX = t(32329),
        tK = t(89678),
        tQ = t.n(tK),
        t0 = t(39400),
        t1 = [
          /\bnigger\w*/i,
          /\bfaggot\w*/i,
          /\bkike\w*/i,
          /\bdykes?\b/i,
          /\bwetbacks?\b/i,
          /\bchinks?\b/i,
          /\bgooks?\b/i,
          /\bpakis?\b/i,
          /\binjuns?\b/i,
          /\btrannys?\b/i,
          /\btrannies\b/i,
          /\bspicks?\b/i,
          /\bshemales?\b/i,
        ]
      function t2() {
        var e = (0, u.Z)(["overflow-hidden w-full h-full relative"])
        return (
          (t2 = function () {
            return e
          }),
          e
        )
      }
      function t3() {
        var e = (0, u.Z)([
          "relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch",
        ])
        return (
          (t3 = function () {
            return e
          }),
          e
        )
      }
      function t6() {
        var e = (0, u.Z)(["grow flex-1 overflow-hidden"])
        return (
          (t6 = function () {
            return e
          }),
          e
        )
      }
      function t4() {
        var e = (0, u.Z)([
          "absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient",
        ])
        return (
          (t4 = function () {
            return e
          }),
          e
        )
      }
      var t5 = "oai/apps/hasSeenHistoryRestored",
        t7 = function (e) {
          var n,
            t,
            r,
            u,
            p,
            b,
            w,
            P,
            B,
            q,
            _,
            H,
            $,
            W,
            V,
            J,
            Y,
            X,
            K,
            Q,
            ee,
            en,
            et,
            ea,
            eo,
            es,
            ei,
            el,
            eu,
            ec,
            ed,
            em,
            eh,
            ex,
            eg,
            ep,
            ev,
            eb,
            ey = e.initialData,
            ej = e.features,
            eC = e.pages,
            ek = e.isLoading,
            eI = (0, j.useRouter)(),
            eS = (0, O.dD)(),
            eT = (0, k.useContext)(L.yP),
            eM = eT.id,
            eD = eT.href,
            eR = (0, I.WS)(),
            eF = (0, tX.n)(),
            eA = (0, k.useState)(),
            eE = eA[0],
            eL = eA[1],
            eO = (0, k.useState)(),
            eU = eO[0],
            ez = eO[1],
            eq = (0, k.useRef)(null),
            e_ = (0, k.useRef)(ey.threadId || ""),
            eH = (0, k.useState)(!ey.threadId),
            e$ = eH[0],
            eV = eH[1],
            eJ = (0, A.nR)(),
            eY = (0, E.g)(function (e) {
              return e.flags.isUserInCanPayGroup
            }),
            eX = (0, T.kP)().session,
            eK = null == eX ? void 0 : eX.accessToken,
            eQ =
              ((t = (n = {
                enabled: "chat" === eM && Boolean(F.ZP.accessToken || eK),
                accessToken: F.ZP.accessToken || eK,
              }).enabled),
              (r = n.accessToken),
              (u = (0, k.useContext)(L.yP).id),
              (w = (b = (0, t0.N)({
                queryKey: ["conversations", u],
                queryFn: function (e) {
                  var n = e.pageParam
                  return F.ZP.getConversations(
                    n || 0,
                    20,
                    F.ZP.accessToken || r
                  )
                },
                getNextPageParam: function (e) {
                  var n = e.offset + e.limit
                  return n < e.total ? n : void 0
                },
                enabled: t,
              })).data),
              (P = b.fetchNextPage),
              (B = b.hasNextPage),
              (q = b.refetch),
              (_ = b.isInitialLoading),
              (H = b.isError),
              (0, k.useMemo)(
                function () {
                  return {
                    conversations:
                      null == w
                        ? void 0
                        : w.pages.reduce(function (e, n) {
                            if (n) {
                              var t = n.items
                              e.push.apply(e, (0, c.Z)(void 0 === t ? [] : t))
                            }
                            return e
                          }, []),
                    hasNextPage: B,
                    fetchNextPage: P,
                    refetch: function () {
                      return t && q()
                    },
                    isLoading: _,
                    isError: t && H,
                  }
                },
                [null == w ? void 0 : w.pages, t, P, B, H, _, q]
              )),
            e0 = eQ.conversations,
            e1 = eQ.hasNextPage,
            e2 = eQ.fetchNextPage,
            e3 = eQ.refetch,
            e6 = eQ.isLoading,
            e4 = eQ.isError,
            e5 = (0, k.useState)(!1),
            e7 = e5[0],
            e8 = e5[1],
            e9 =
              ((W = ($ = {
                exempt: !1,
                onRestrictedTermFound: (0, k.useCallback)(
                  function (e) {
                    e8(!0),
                      eR(S.s6.promptUsedRestrictedWords, {
                        threadId: e_.current,
                        content: e,
                      })
                  },
                  [eR]
                ),
              }).exempt),
              (V = $.onRestrictedTermFound),
              (Y = (J = (0, k.useState)(!1))[0]),
              (X = J[1]),
              {
                hasRestrictedTerms: Y,
                checkRestrictedTerms: (0, k.useCallback)(
                  function (e) {
                    var n
                    return (t1.some(function (t) {
                      var r = t.exec(e)
                      return r && (n = r[0]), r
                    }),
                    !W && n)
                      ? (X(!0), null == V || V(n), !0)
                      : (X(!1), !1)
                  },
                  [W, V]
                ),
              }),
            ne = e9.hasRestrictedTerms,
            nn = e9.checkRestrictedTerms,
            nt = (0, k.useState)(!0),
            nr = nt[0],
            na = nt[1],
            no = (0, k.useState)(!1),
            ns = no[0],
            ni = no[1],
            nl = (0, k.useState)(!1),
            nu = nl[0],
            nc = nl[1],
            nd = (0, k.useState)(!1),
            nm = nd[0],
            nf = nd[1],
            nh = (0, k.useState)(!1),
            nx = nh[0],
            ng = nh[1],
            np = ((K = (0, T.kP)().session),
            (Q = (0, tY.a)(
              ["models"],
              function () {
                return F.ZP.getModels(null == K ? void 0 : K.accessToken)
              },
              {
                enabled: !!(null == K ? void 0 : K.accessToken),
                placeholderData: {
                  models: [
                    {
                      slug: "text-davinci-002-render",
                      max_tokens: 4097,
                      title: "Default",
                      description: "",
                      tags: [],
                    },
                  ],
                },
                onError: function (e) {
                  try {
                    tJ.Tb(e)
                  } catch (n) {}
                },
              }
            ).data),
            (0, k.useMemo)(
              function () {
                var e
                return {
                  availableModels: Q
                    ? (e = Q.models).map(function (e) {
                        return {
                          id: e.slug,
                          maxTokens: e.max_tokens,
                          title: e.title,
                          description: e.description,
                          tags: e.tags,
                        }
                      })
                    : [],
                }
              },
              [Q]
            )).availableModels,
            nv = (0, nZ.ZP)(np),
            nb = nv.temperature,
            ny = nv.modelBackend,
            nj = nv.onChangeModelSetting,
            nw = (0, k.useRef)(new U.Cv(ey.thread)),
            nC = (0, k.useState)(ey.currentLeafId),
            nk = nC[0],
            nN = nC[1],
            nP = (0, k.useState)(!1),
            nI = nP[0],
            nS = nP[1],
            nT = (0, k.useMemo)(
              function () {
                return {
                  appId: "programming" === eM ? "codeqa" : "",
                  model: ny,
                }
              },
              [eM, ny]
            ),
            nM = (0, k.useState)(null),
            nD = nM[0],
            nR = nM[1],
            nF = (0, k.useState)({}),
            nA = nF[0],
            nE = nF[1],
            nL = (0, k.useState)(new Set()),
            nO = nL[0],
            nU = nL[1],
            nz = (0, k.useCallback)(function (e) {
              nE(function (n) {
                return n[e], (0, l.Z)(n, [e].map(d.Z))
              })
            }, []),
            nB = (0, k.useCallback)(
              function () {
                "chat" === eM && (e3(), nH(""), nS(!1)), eR(S.s6.newThread)
              },
              [eM, eR, e3]
            ),
            nq = (0, k.useState)(""),
            n_ = nq[0],
            nH = nq[1],
            n$ = (0, k.useState)(""),
            nW = n$[0],
            nG = n$[1],
            nV = nW || n_ || ey.title,
            nJ = (0, k.useCallback)(
              function (e) {
                "chat" === eM &&
                  F.ZP.generateTitle(e_.current, e, ny)
                    .then(function (e) {
                      var n = e.title
                      nH(n),
                        eR(S.s6.renameThread, {
                          threadId: e_.current,
                          content: n,
                          model: ny,
                        })
                    })
                    .catch(function (e) {
                      console.error(e)
                    })
              },
              [eM, eR, ny]
            ),
            nY =
              ((ee = e_),
              (eu = (0, k.useId)()),
              (ec = (0, I.WS)()),
              (ed = (0, nZ.ZP)(np).modelBackend),
              (eh = (em = (0, k.useState)(0))[0]),
              (ex = em[1]),
              (eg = (0, k.useRef)({})),
              (ep = (0, k.useCallback)(
                function (e, n, t) {
                  var r,
                    o = t.eventSource,
                    s = function () {
                      setTimeout(function () {
                        nz(n),
                          nU(function (e) {
                            var t = new Set(e)
                            return t.delete(n), t
                          }),
                          delete eg.current[n]
                      }, 0)
                    },
                    i = nw.current,
                    l = n,
                    u = i.getParentId(l),
                    c = "CompletionUpdated:".concat(n),
                    d = "CompletionUpdated:".concat(u),
                    f = e === R.Os.Continue,
                    h = !0,
                    x = i.getMessage(l),
                    g = i.getIsBlockedFromNode(u),
                    p = !1,
                    v = !1,
                    b = tQ()(
                      function () {
                        g ||
                          p ||
                          (i.updateNodeMessage(l, x),
                          C().publish(c, { nodeId: l }))
                      },
                      50,
                      { leading: !0, maxWait: 50 }
                    )
                  function y(e, n, t) {
                    return j.apply(this, arguments)
                  }
                  function j() {
                    return (j = (0, a.Z)(function (e, n, t) {
                      var r,
                        a,
                        o,
                        s,
                        l,
                        u = arguments
                      return (0, m.__generator)(this, function (m) {
                        switch (m.label) {
                          case 0:
                            ;(r = u.length > 3 && void 0 !== u[3] && u[3]),
                              (m.label = 1)
                          case 1:
                            return (
                              m.trys.push([1, 3, , 4]),
                              [
                                4,
                                (0, D._I)(t, !1, ee.current, i.getMessageId(n)),
                              ]
                            )
                          case 2:
                            return (
                              (o = (a = m.sent()).isBlocked),
                              (s = a.isFlagged),
                              (o || s) && (v = !0),
                              o
                                ? ((p = !0),
                                  r || (g = !0),
                                  i.updateNode(n, {
                                    message: {
                                      content: { parts: { $set: [""] } },
                                    },
                                    metadata: { $set: D.sK },
                                  }),
                                  C().publish(r ? c : d, { nodeId: n }),
                                  ec(
                                    r
                                      ? S.s6.completionBlockedByModeration
                                      : S.s6.promptBlockedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : s
                                ? (i.updateNode(n, {
                                    metadata: { $set: D.Mf },
                                  }),
                                  C().publish(r ? c : d, { nodeId: n }),
                                  ec(
                                    r
                                      ? S.s6.completionFlaggedByModeration
                                      : S.s6.promptFlaggedByModeration,
                                    { threadId: e, id: n }
                                  ))
                                : r &&
                                  g &&
                                  (i.updateNodeMessage(n, x),
                                  C().publish(c, { nodeId: n })),
                              [3, 4]
                            )
                          case 3:
                            return (
                              (l = m.sent()),
                              (p = !0),
                              i.updateNode(n, {
                                metadata: {
                                  $set: {
                                    err: "An error occured",
                                    errType: "danger",
                                  },
                                },
                              }),
                              ec(S.s6.moderationError, {
                                threadId: e,
                                content: JSON.stringify(l || ""),
                              }),
                              C().publish(r ? c : d, { nodeId: n }),
                              C().publish("UnrecoverableError"),
                              [3, 4]
                            )
                          case 4:
                            return [2]
                        }
                      })
                    })).apply(this, arguments)
                  }
                  return (
                    (r = (0, a.Z)(function (t) {
                      var r, a, d, j, w, k, Z
                      return (0, m.__generator)(this, function (m) {
                        return ((r = t.err),
                        (a = t.finish_reason),
                        (d = t.message),
                        (j = t.threadId),
                        (!r && d) || a)
                          ? (d && (x = d),
                            h
                              ? ((h = !1),
                                j && (ee.current = j),
                                i.updateNodeMessage(l, d),
                                i.isFirstCompletion && nB(),
                                f ||
                                  y(
                                    ee.current,
                                    u,
                                    i.getTextFromLastNMessages(u, 1),
                                    !1
                                  ),
                                ec(S.s6.generateCompletion, {
                                  id: n,
                                  threadId: j,
                                  completionType: e,
                                  eventSource: o,
                                }),
                                C().publish("PublishAborter", {
                                  id: n,
                                  aborter: eg.current[n],
                                }))
                              : d &&
                                !f &&
                                d.id !== i.getMessageId(l) &&
                                (i.addNode(d.id, d, l, R.Jq.Completion),
                                nN((l = d.id)),
                                (c = "CompletionUpdated:".concat(l))),
                            b(),
                            "stop" === a &&
                              (g ||
                                p ||
                                (b.flush(),
                                !v &&
                                  i.isFirstCompletion &&
                                  nJ(i.getMessageId(l))),
                              (k = U.Cv.getTextFromMessage(x)),
                              (Z =
                                i.getTextFromLastNMessages(u, 3) + "\n\n" + k),
                              y(ee.current, l, Z, !0),
                              p ||
                                (C().publish(c, { nodeId: l }),
                                ec(S.s6.completionFinished, {
                                  id: n,
                                  threadId: ee.current,
                                  completionType: e,
                                  eventSource: o,
                                  containsCodeBlock: k.includes("```"),
                                })),
                              s()),
                            [2])
                          : (r && console.error(r),
                            (w =
                              (null == r ? void 0 : r.message) ||
                              "Something went wrong"),
                            i.updateNode(l, {
                              message: { $set: x },
                              metadata: { $set: { err: w, errType: "danger" } },
                            }),
                            C().publish(c, { nodeId: l }),
                            s(),
                            [2])
                      })
                    })),
                    function (e) {
                      return r.apply(this, arguments)
                    }
                  )
                },
                [ec, nB, nJ, nz, nU, nN, ee, nw]
              )),
              (0, k.useCallback)(
                ((ev = (0, a.Z)(function (e, n, t, r) {
                  var a, o, s, i, l, u, c, d
                  return (0, m.__generator)(this, function (m) {
                    switch (m.label) {
                      case 0:
                        return (
                          (a = nw.current),
                          ex(function (e) {
                            return e + 1
                          }),
                          (o = "request-".concat(eu, "-").concat(eh)),
                          nU(function (e) {
                            var n = new Set(e)
                            return n.add(o), n
                          }),
                          a.addNode(o, "", n, R.Jq.Completion),
                          nN(o),
                          (i = []),
                          (l = a.getNode(n)),
                          e === R.Os.Next || e === R.Os.Variant
                            ? ((s =
                                (null ===
                                  (u = (c = a.getNode(l.parentId)).message) ||
                                void 0 === u
                                  ? void 0
                                  : u.id) || c.id),
                              i.push(l.message))
                            : (s = l.message.id),
                          [
                            4,
                            F.ZP.publicApiCompletionStream(
                              { model: ed, appId: t.appId },
                              {
                                completionType: e,
                                threadId: ee.current || void 0,
                                parentMessageId: s,
                                messages: i,
                              },
                              ep(e, o, r)
                            ),
                          ]
                        )
                      case 1:
                        return (d = m.sent()), (eg.current[o] = d), [2]
                    }
                  })
                })),
                function (e, n, t, r) {
                  return ev.apply(this, arguments)
                }),
                [nw, eu, eh, nU, nN, ed, ee, ep]
              )),
            nX = (0, k.useCallback)(
              function () {
                eI.replace({ pathname: eI.basePath, query: {} }, void 0, {
                  shallow: !0,
                })
              },
              [eI]
            ),
            nK = (0, k.useCallback)(
              function () {
                if (nk) {
                  var e = nw.current.getBranchFromLeaf(nk)
                  nE(function (n) {
                    var t = (0, s.Z)({}, n)
                    return (
                      e.forEach(function (e) {
                        e.id in t && (t[e.id].abort(), delete t[e.id])
                      }),
                      t
                    )
                  }),
                    nU(function (n) {
                      var t = new Set(n)
                      return (
                        e.forEach(function (e) {
                          t.delete(e.id)
                        }),
                        t
                      )
                    })
                }
              },
              [nk]
            ),
            nQ = (0, k.useCallback)(
              ((eb = (0, a.Z)(function (e, n, t, r) {
                return (0, m.__generator)(this, function (a) {
                  return (
                    r && nK(),
                    eV(!0),
                    (e !== R.Os.Continue &&
                      nn(nw.current.getTextFromNode(n))) ||
                      (eF(e_.current), nY(e, n, nT, t)),
                    [2]
                  )
                })
              })),
              function (e, n, t, r) {
                return eb.apply(this, arguments)
              }),
              [nn, eF, nY, nT, nK]
            ),
            n0 = (0, k.useCallback)(function (e, n, t, r) {
              nw.current.addNode(e, r, n, R.Jq.Prompt)
            }, []),
            n1 = (0, k.useCallback)(
              function (e, n, t) {
                var r = n.value
                n0(e, nk, R.Jq.Prompt, r), nQ(R.Os.Next, e, t, !0)
              },
              [nk, n0, nQ]
            ),
            n2 = (0, k.useMemo)(
              function () {
                var e,
                  n,
                  t = nw.current.getNode(nk),
                  r = t.type === R.Jq.Prompt,
                  a =
                    (null === (e = t.metadata) || void 0 === e
                      ? void 0
                      : e.err) &&
                    (null === (n = t.metadata) || void 0 === n
                      ? void 0
                      : n.errCode) !== D.Dd
                return Boolean(r || a) && 0 === nO.size
              },
              [nO.size, nk]
            ),
            n3 = (0, k.useCallback)(
              function (e) {
                var n = nw.current.getParentPromptNode(e).id
                n2 && (n = e), nQ(R.Os.Variant, n, { eventSource: "mouse" }, !1)
              },
              [nQ, n2]
            ),
            n6 = (0, k.useCallback)(
              function (e) {
                nQ(R.Os.Continue, e, { eventSource: "mouse" }, !1)
              },
              [nQ]
            ),
            n4 = (0, k.useCallback)(
              function (e) {
                nN(nw.current.getLeafFromNode(e).id), eR(S.s6.changeNode)
              },
              [eR, nN]
            ),
            n5 = (0, k.useCallback)(function (e, n) {
              nw.current.updateNodeText(e, n)
            }, []),
            n7 = (0, k.useCallback)(
              function (e, n, t) {
                eR(S.s6.thumbRating, {
                  id: n,
                  threadId: e_.current,
                  rating: t,
                  model: ny,
                }),
                  e_.current &&
                    F.ZP.submitMessageFeedback({
                      message_id: n,
                      conversation_id: e_.current,
                      rating: t,
                    }),
                  eL(t),
                  ez(n)
                var r = nw.current.getMetadata(e)
                nw.current.updateNode(e, {
                  metadata: { $set: (0, i.Z)((0, s.Z)({}, r), { rating: t }) },
                })
              },
              [eR, ny]
            ),
            n8 = (0, k.useCallback)(
              function () {
                var e,
                  n =
                    null === (e = eq.current) || void 0 === e
                      ? void 0
                      : e.elements,
                  t = (0, c.Z)(n || [])
                    .filter(function (e) {
                      return e.checked
                    })
                    .map(function (e) {
                      return e.id
                    }),
                  r = (null == n ? void 0 : n["feedback-other"].value) || ""
                eE &&
                  eU &&
                  (r || t.length > 0) &&
                  (eR(S.s6.reportResult, {
                    id: eU,
                    threadId: e_.current,
                    content: r,
                    model: ny,
                    rating: eE,
                    tags: t,
                  }),
                  e_.current &&
                    F.ZP.submitMessageFeedback({
                      message_id: eU,
                      conversation_id: e_.current,
                      rating: eE,
                      text: r,
                      tags: t.map(function (e) {
                        return e.replace("feedback-", "")
                      }),
                    })),
                  eL(void 0)
              },
              [eR, ny, eU, eE]
            ),
            n9 = (0, k.useCallback)(function (e) {
              nw.current.deleteNode(e)
            }, []),
            te = (0, k.useCallback)(
              function (e) {
                switch (null == e ? void 0 : e.state) {
                  case "pending":
                    n0("artifact", "root", R.Jq.Prompt, e.url),
                      n0(
                        "artifact-summary",
                        "artifact",
                        R.Jq.Completion,
                        "loading..."
                      ),
                      nN("artifact"),
                      nR(e)
                    break
                  case "success":
                    n5("artifact-summary", e.contents),
                      nN("artifact-summary"),
                      nR(e)
                    break
                  default:
                    nR(e)
                }
              },
              [n0, n5, nN]
            ),
            tn = (0, k.useCallback)(function () {
              ng(function (e) {
                return "debug" !== e && "debug"
              })
            }, []),
            tt = (0, k.useCallback)(
              function () {
                eR(S.s6.clickSidebarAccountPortalMenuItem), nf(!0)
              },
              [eR, nf]
            ),
            tr = (0, k.useCallback)(
              function () {
                nf(!1)
              },
              [nf]
            ),
            ta = (0, k.useCallback)(
              function () {
                eR(S.s6.clickSidebarAccountPaymentMenuItem), nc(!0)
              },
              [eR, nc]
            ),
            to = (0, k.useCallback)(
              function () {
                nc(!1)
              },
              [nc]
            ),
            ts = (0, k.useCallback)(function () {
              ng(function (e) {
                return "navigation" !== e && "navigation"
              })
            }, []),
            tl = (0, k.useCallback)(
              function (e, n) {
                if (nw.current.isFirstCompletion) {
                  var t,
                    r = nw.current.getParent(n)
                  ;(null === (t = r.metadata) || void 0 === t
                    ? void 0
                    : t.errCode) !== D.Dd &&
                    setTimeout(function () {
                      nJ(r.message.id)
                    }, 500)
                }
                nE(function (e) {
                  var t = e[n],
                    r = (0, l.Z)(e, [n].map(d.Z))
                  return null == t || t.abort(), r
                }),
                  nU(function (e) {
                    var t = new Set(e)
                    return t.delete(n), t
                  })
              },
              [nJ]
            ),
            tu = (0, k.useCallback)(function (e, n) {
              var t = n.id,
                r = n.aborter
              r &&
                nE(function (e) {
                  return (0, i.Z)((0, s.Z)({}, e), (0, o.Z)({}, t, r))
                })
            }, []),
            tc = (0, k.useCallback)(
              function () {
                nE(function (e) {
                  return (
                    Object.values(e).forEach(function (e) {
                      return e.abort()
                    }),
                    {}
                  )
                }),
                  nU(new Set()),
                  nN("root"),
                  nR(null),
                  (nw.current = new U.Cv()),
                  (e_.current = ""),
                  nS(!0),
                  e3()
              },
              [e3]
            ),
            td = (0, k.useCallback)(
              function () {
                F.ZP.deleteConversations().then(function () {
                  e3()
                }),
                  eI.asPath !== eD ? eI.replace({ pathname: eD }) : tc()
              },
              [tc, eD, e3, eI]
            ),
            tm = (0, k.useCallback)(function () {
              ni(!0)
            }, [])
          ;(0, k.useEffect)(
            function () {
              return (
                C().subscribe("AbortCompletion", tl),
                C().subscribe("PublishAborter", tu),
                C().subscribe("UnrecoverableError", tm),
                function () {
                  C().unsubscribe("AbortCompletion"),
                    C().unsubscribe("PublishAborter"),
                    C().unsubscribe("UnrecoverableError")
                }
              )
            },
            [tl, tu, tm]
          )
          var tf = (0, k.useMemo)(
              function () {
                return nw.current.getConversationTurns(nk || "root")
              },
              [nk]
            ),
            tp = (0, k.useMemo)(
              function () {
                return 0 === tf.length
                  ? nk
                  : U.Cv.getRequestIdFromConversationTurn(tf[tf.length - 1])
              },
              [tf, nk]
            ),
            tv = (0, k.useState)(""),
            tb = tv[0],
            ty = tv[1],
            tj = (0, k.useCallback)(function () {
              na(!0), M.m.setItem("oai/librarian/hasSeenWarning", "true")
            }, []),
            tw = (0, k.useCallback)(function () {
              e8(!1)
            }, []),
            tC = (0, k.useMemo)(
              function () {
                return ej.has("debug") ? new Set([nZ.G3.Model]) : new Set()
              },
              [ej]
            ),
            tk = (0, k.useMemo)(
              function () {
                return (
                  !!ej.has("can_continue") &&
                  !nA[nk] &&
                  nw.current.isMessageIncomplete(nk)
                )
              },
              [nA, nk, ej]
            ),
            tZ = void 0 !== eJ && eJ,
            tN = (0, (0, tx.PV)(eM).getHasSeenOnboardingDate)(),
            tP =
              "chat" === eM &&
              tN &&
              new Date("2023-01-11") > tN &&
              !localStorage.getItem(t5)
          ;(0, k.useEffect)(
            function () {
              tP &&
                (tg.m.success(
                  "Your previously unavailable conversation history has been restored! Your previous conversations can now be viewed and continued as normal. We apologize for any inconvenience caused by the recent outage. Thank you for your patience and understanding.",
                  { hasCloseButton: !0, duration: 0 }
                ),
                localStorage.setItem(t5, "true"))
            },
            [tP]
          )
          var tI = (0, k.useMemo)(
            function () {
              return (0, f.jsx)(er, {
                items: e0 || [],
                activeId: nI ? "" : e_.current,
                hasNextPage: Boolean(e1),
                onNextPage: e2,
                onNewThread: tc,
                onRefetchHistory: e3,
                onUpdateUserModifiedTitle: nG,
                userModifiedTitle: nW,
                newChatName: n_,
                isLoading: e6,
                isError: e4,
              })
            },
            [e0, nI, e1, e2, tc, e3, nW, n_, e6, e4]
          )
          return (0, f.jsxs)(t8, {
            children: [
              (0, f.jsx)(y(), {
                children: (0, f.jsx)("title", { children: nV }),
              }),
              !nr &&
                (0, f.jsx)(
                  ef.Z,
                  {
                    isOpen: !0,
                    onModalClose: tj,
                    icon: x.Z,
                    title:
                      "Do not share sensitive materials with this application",
                    primaryButton: (0, f.jsx)(ef.m, {
                      onClick: tj,
                      title: "Acknowledge",
                    }),
                    type: "danger",
                  },
                  "OnboardingModal"
                ),
              ne &&
                e7 &&
                (0, f.jsx)(
                  ef.Z,
                  {
                    isOpen: !0,
                    onModalClose: tw,
                    icon: N.U0j,
                    title: "This prompt may violate our content policy.",
                    primaryButton: (0, f.jsx)(ef.m, {
                      onClick: tw,
                      title: "Acknowledge",
                    }),
                    type: "danger",
                  },
                  "RestrictedTerms"
                ),
              Boolean(eE) &&
                (0, f.jsx)(
                  ef.Z,
                  {
                    isOpen: !0,
                    onModalClose: function () {
                      return eL(void 0)
                    },
                    type: "thumbsUp" === eE ? "success" : "danger",
                    icon: "thumbsUp" === eE ? N.fmn : N.oLd,
                    title: "Provide additional feedback",
                    primaryButton: (0, f.jsx)(ef.m, {
                      title: "Submit feedback",
                      onClick: n8,
                    }),
                    children: (0, f.jsxs)("form", {
                      ref: eq,
                      children: [
                        (0, f.jsx)(Z.ZP, {
                          id: "feedback-other",
                          placeholder: "What would the ideal answer have been?",
                          rows: 3,
                          className:
                            "mt-4 mb-1 w-full rounded-md dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white",
                        }),
                        "thumbsDown" === eE &&
                          (0, f.jsxs)(f.Fragment, {
                            children: [
                              (0, f.jsx)(z, {
                                id: "feedback-harmful",
                                label: "This is harmful / unsafe",
                              }),
                              (0, f.jsx)(z, {
                                id: "feedback-false",
                                label: "This isn't true",
                              }),
                              (0, f.jsx)(z, {
                                id: "feedback-not-helpful",
                                label: "This isn't helpful",
                              }),
                            ],
                          }),
                      ],
                    }),
                  },
                  "RatingModal-".concat(eU)
                ),
              (0, f.jsxs)("div", {
                className: "flex h-full flex-1 flex-col md:pl-[260px]",
                children: [
                  eS &&
                    (0, f.jsx)(eP, {
                      onNewThread: tc,
                      onSidebarOpen: ts,
                      title: ey.title,
                      newChatName: n_,
                    }),
                  (0, f.jsxs)(t9, {
                    className: "flex-1 ",
                    children: [
                      (0, f.jsx)(re, {
                        children: (0, f.jsx)(th, {
                          wrap: e$,
                          children: (0, f.jsx)(ti, {
                            isLoading: ek,
                            onChangeItemInView: n4,
                            onCreateNewNode: n0,
                            onUpdateNode: n5,
                            onChangeRating: n7,
                            onDeleteNode: n9,
                            onRequestCompletion: nQ,
                            onChangeCurrentPrompt: ty,
                            threadId: e_.current,
                            treeRef: nw,
                            conversationTurns: tf,
                            activeRequests: nO,
                            isProcessingArtifact:
                              (null == nD ? void 0 : nD.state) === "pending",
                            onChangeModelSetting: nj,
                            availableModels: np,
                            canShowThreadSettings:
                              ej.has("model_switcher") && np.length > 1,
                          }),
                        }),
                      }),
                      (0, f.jsxs)(rn, {
                        children: [
                          (0, f.jsx)(eB, {
                            currentLeafId: nk,
                            currentRequestId: tp,
                            threadId: e_.current,
                            currentPrompt: tb,
                            onChangeCurrentPrompt: ty,
                            onRequestMoreCompletions: n3,
                            onCreateNewCompletion: n1,
                            onAbortCompletion: tl,
                            onContinueGenerating: n6,
                            isCompletionInProgress: nO.has(tp),
                            onUpdateArtifactStatus: te,
                            artifact: nD,
                            className: (0, g.Z)(
                              "stretch mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
                            ),
                            placeholder:
                              "programming" === eM ? "How do I..." : "",
                            shouldRetry: n2,
                            canContinue: tk,
                            disabled: !np.length,
                            canPause: Boolean(nA[tp]),
                          }),
                          "chat" === eM &&
                            (0, f.jsxs)("div", {
                              className:
                                "px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6",
                              children: [
                                (0, f.jsx)("a", {
                                  href: "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: "underline",
                                  children: "ChatGPT Jan 30 Version",
                                }),
                                !eJ &&
                                  ". Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.",
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              eS &&
                (0, f.jsx)(eN, {
                  onSidebarOpen: ts,
                  sidebarOpen: "navigation" === nx,
                  onClickAccountPayment: ta,
                  showAccountPaymentMenuItem: !tZ && eY,
                  onClickCustomerPortal: tt,
                  showCustomerPortalMenuItem: tZ,
                  onDeleteHistory: td,
                  showDeleteHistory: Boolean(null == e0 ? void 0 : e0.length),
                  onNewThread: tc,
                  onOpenDebugPanel: tn,
                  pages: eC,
                  children: tI,
                }),
              !eS &&
                (0, f.jsx)(eZ, {
                  onClickAccountPayment: ta,
                  showAccountPaymentMenuItem: !tZ && eY,
                  onClickCustomerPortal: tt,
                  showCustomerPortalMenuItem: tZ,
                  onDeleteHistory: td,
                  showDeleteHistory: Boolean(null == e0 ? void 0 : e0.length),
                  onNewThread: tc,
                  onOpenDebugPanel: tn,
                  pages: eC,
                  settings:
                    tC.size > 0 &&
                    (0, f.jsx)(eW.ZP, {
                      temperature: nb,
                      onRestoreDefaults: nX,
                      onChangeModelSetting: nj,
                      position: "top-right",
                      modelSettings: tC,
                      features: ej,
                      children: (0, f.jsxs)(h.J.Button, {
                        as: ew,
                        children: [
                          (0, f.jsx)(G.ZP, { icon: N.nbt }),
                          "Settings",
                        ],
                      }),
                    }),
                  children: tI,
                }),
              (0, f.jsx)(eG, {
                icon: N.cDN,
                title: "Debug",
                sidebarOpen: "debug" === nx,
                onSidebarOpen: ts,
                children: (0, f.jsx)(tH, { treeRef: nw, currentLeafId: nk }),
              }),
              eY && (0, f.jsx)(tF, { isOpen: nu, onClose: to }),
              tZ && (0, f.jsx)(tR, { isOpen: nm, onClose: tr }),
              ns &&
                (0, f.jsx)(
                  ef.Z,
                  {
                    onModalClose: v(),
                    isOpen: !0,
                    icon: x.Z,
                    title: "Something went wrong",
                    description:
                      "We're sorry, but something went wrong. Please try again later.",
                    primaryButton: (0, f.jsx)(ef.m, {
                      onClick: function () {
                        tc(), ni(!1)
                      },
                      title: "Reset thread",
                    }),
                    type: "danger",
                  },
                  "UnrecoverableErrorModal"
                ),
            ],
          })
        },
        t8 = P.Z.div(t2()),
        t9 = P.Z.main(t3()),
        re = P.Z.div(t6()),
        rn = P.Z.div(t4()),
        rt = t7
    },
    44513: function (e, n, t) {
      t.d(n, {
        ZP: function () {
          return I
        },
        PV: function () {
          return P
        },
      })
      var r = t(14806),
        a = t(35250),
        o = t(70079),
        s = t(34303),
        i = t(62676),
        l = t(500),
        u = t(39690)
      function c() {
        var e = (0, r.Z)([
          "flex p-4 bg-gray-50 dark:bg-white/5 rounded-md items-center gap-4 min-h-[71px]",
        ])
        return (
          (c = function () {
            return e
          }),
          e
        )
      }
      function d() {
        var e = (0, r.Z)(["w-10 text-2xl text-center"])
        return (
          (d = function () {
            return e
          }),
          e
        )
      }
      function m() {
        var e = (0, r.Z)(["flex-1 leading-5"])
        return (
          (m = function () {
            return e
          }),
          e
        )
      }
      function f() {
        var e = (0, r.Z)(["flex gap-4 mt-6"])
        return (
          (f = function () {
            return e
          }),
          e
        )
      }
      function h(e) {
        var n = e.icon,
          t = e.children
        return (0, a.jsxs)(x, {
          children: [
            (0, a.jsx)(g, { children: n }),
            (0, a.jsx)(p, { children: t }),
          ],
        })
      }
      var x = s.Z.div(c()),
        g = s.Z.div(d()),
        p = s.Z.div(m())
      function v(e) {
        var n = e.onBack,
          t = e.onNext,
          r = e.onSubmit
        return (0, a.jsxs)(b, {
          children: [
            n &&
              (0, a.jsx)(u.z, {
                as: "button",
                color: "neutral",
                onClick: n,
                children: "Back",
              }),
            t &&
              (0, a.jsx)(u.z, {
                as: "button",
                onClick: t,
                color: "neutral",
                className: "ml-auto",
                children: "Next",
              }),
            r &&
              (0, a.jsx)(u.z, {
                as: "button",
                onClick: r,
                color: "primary",
                className: "ml-auto",
                children: "Done",
              }),
          ],
        })
      }
      var b = s.Z.div(f())
      function y() {
        var e = (0, r.Z)(["prose dark:prose-invert"])
        return (
          (y = function () {
            return e
          }),
          e
        )
      }
      function j() {
        var e = (0, r.Z)(["!mt-4 font-normal !mb-2"])
        return (
          (j = function () {
            return e
          }),
          e
        )
      }
      function w() {
        var e = (0, r.Z)(["mb-4"])
        return (
          (w = function () {
            return e
          }),
          e
        )
      }
      function C() {
        var e = (0, r.Z)(["w-full h-[1px] bg-gray-300 opacity-20"])
        return (
          (C = function () {
            return e
          }),
          e
        )
      }
      function k() {
        var e = (0, r.Z)(["flex gap-4 flex-col text-sm"])
        return (
          (k = function () {
            return e
          }),
          e
        )
      }
      function Z() {
        var e = (0, r.Z)(["text-xs leading-5 mt-4 flex items-center"])
        return (
          (Z = function () {
            return e
          }),
          e
        )
      }
      var N = "oai/apps/hasSeenOnboarding",
        P = function (e) {
          var n = (0, o.useCallback)(
              function () {
                i.m.setItem(
                  "".concat(N, "/").concat(e),
                  new Date().toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                )
              },
              [e]
            ),
            t = (0, o.useState)(null),
            r = t[0],
            a = t[1]
          ;(0, o.useEffect)(
            function () {
              a(i.m.getItem("".concat(N, "/").concat(e)))
            },
            [a, e]
          )
          var s = (0, o.useCallback)(
            function () {
              return r ? new Date(!0 === r ? "2022-12-14" : r) : r
            },
            [r]
          )
          return (0, o.useMemo)(
            function () {
              return { setHasSeenOnboarding: n, getHasSeenOnboardingDate: s }
            },
            [s, n]
          )
        }
      function I(e) {
        var n = e.onClose,
          t = P((0, o.useContext)(l.yP).id).setHasSeenOnboarding,
          r = (0, o.useState)(0),
          s = r[0],
          i = r[1],
          u = (0, o.useCallback)(
            function () {
              n(!0), t()
            },
            [n, t]
          )
        return (0, a.jsxs)(R, {
          children: [
            0 === s && (0, a.jsx)(T, { onChangePage: i }),
            1 === s && (0, a.jsx)(M, { onChangePage: i }),
            2 === s && (0, a.jsx)(D, { onChangePage: i, onSubmit: u }),
          ],
        })
      }
      var S = function () {
          var e = (0, o.useContext)(l.yP),
            n = e.id,
            t = e.name
          return "chat" === n
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-5",
                    children: (0, a.jsx)(F, {
                      children: (0, a.jsx)("b", { children: t }),
                    }),
                  }),
                  (0, a.jsx)(E, {}),
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(F, {
                    children: ["Welcome to ", (0, a.jsx)("b", { children: t })],
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Here are a few things to keep in mind before we get started:",
                  }),
                  (0, a.jsx)(E, {}),
                ],
              })
        },
        T = function (e) {
          var n = e.onChangePage
          return "chat" === (0, o.useContext)(l.yP).id
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(S, {}),
                  (0, a.jsx)(A, {
                    children: "This is a free research preview.",
                  }),
                  (0, a.jsxs)(L, {
                    children: [
                      (0, a.jsx)(h, {
                        icon: "\uD83D\uDD2C",
                        children:
                          "Our goal is to get external feedback in order to improve our systems and make them safer.",
                      }),
                      (0, a.jsx)(h, {
                        icon: "\uD83D\uDEA8",
                        children:
                          "While we have safeguards in place, the system may occasionally generate incorrect or misleading information and produce offensive or biased content. It is not intended to give advice.",
                      }),
                    ],
                  }),
                  (0, a.jsx)(v, {
                    onNext: function () {
                      return n(1)
                    },
                  }),
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(S, {}),
                  (0, a.jsx)(A, { children: "Confidentiality" }),
                  (0, a.jsxs)(L, {
                    children: [
                      (0, a.jsx)(h, {
                        icon: "\uD83E\uDD2B",
                        children:
                          "This private preview is strictly for testing purposes only",
                      }),
                      (0, a.jsxs)(h, {
                        icon: "\uD83D\uDCC3",
                        children: [
                          "Please do not share info about this product with anyone. Use of this product is subject to our",
                          " ",
                          (0, a.jsx)("a", {
                            href: "https://openai.com/api/policies/terms/",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Terms of Service",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(v, {
                    onNext: function () {
                      return n(1)
                    },
                  }),
                ],
              })
        },
        M = function (e) {
          var n = e.onChangePage,
            t = (0, o.useContext)(l.yP).id
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(S, {}),
              (0, a.jsx)(A, { children: "How we collect data" }),
              (0, a.jsxs)(L, {
                children: [
                  (0, a.jsx)(h, {
                    icon: "\uD83E\uDDBE",
                    children:
                      "Conversations may be reviewed by our AI trainers to improve our systems.",
                  }),
                  (0, a.jsx)(h, {
                    icon: "\uD83D\uDD10",
                    children:
                      "Please don't share any sensitive information in your conversations.",
                  }),
                ],
              }),
              "chat" !== t &&
                (0, a.jsx)(O, {
                  children:
                    "If you think you've mentioned sensitive information, please reach out to chat@openai.com",
                }),
              (0, a.jsx)(v, {
                onBack: function () {
                  return n(0)
                },
                onNext: function () {
                  return n(2)
                },
              }),
            ],
          })
        },
        D = function (e) {
          var n = e.onChangePage,
            t = e.onSubmit,
            r = (0, o.useContext)(l.yP).id,
            s = (0, o.useRef)(null)
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(S, {}),
              (0, a.jsx)(A, { children: "We'd love your feedback!" }),
              (0, a.jsxs)(L, {
                children: [
                  (0, a.jsx)(h, {
                    icon: "\uD83D\uDC4D",
                    children:
                      "This system is optimized for dialogue. Let us know if a particular response was good or unhelpful.",
                  }),
                  (0, a.jsx)(h, {
                    icon: "\uD83D\uDCAC",
                    children:
                      "chat" === r
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              "Share your feedback in our",
                              " ",
                              (0, a.jsx)("a", {
                                href: "https://discord.gg/openai",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Discord server",
                              }),
                              ".",
                            ],
                          })
                        : "Share your ideas and feedback with us directly",
                  }),
                ],
              }),
              (0, a.jsx)(v, {
                onBack: function () {
                  return n(1)
                },
                onSubmit: function () {
                  return null == t ? void 0 : t(s)
                },
              }),
            ],
          })
        },
        R = s.Z.div(y()),
        F = s.Z.h2(j()),
        A = s.Z.h4(w()),
        E = s.Z.div(C()),
        L = s.Z.div(k()),
        O = s.Z.div(Z())
    },
    32329: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return h
        },
        n: function () {
          return x
        },
      })
      var r = t(87762),
        a = t(62906),
        o = t(61432),
        s = t(70079),
        i = t(31501),
        l = t(61079),
        u = t(89874),
        c = t(60814),
        d = t(80836),
        m = t(36613)
      t(24638)
      var f = t(74516)
      function h(e) {
        var n = e.threadId,
          t = e.accessToken,
          a = (0, o.useRouter)(),
          h = (0, r.a)(
            ["conversation", n],
            function () {
              return c.ZP.getConversation(n, t, !1)
            },
            {
              enabled: Boolean(n),
              onError: function () {
                a.replace("/chat"),
                  f.m.danger("Unable to load conversation ".concat(n))
              },
            }
          ),
          x = h.data,
          g = h.isLoading,
          p = (0, s.useMemo)(
            function () {
              if (!x)
                return {
                  thread: d.Cv.createTree(),
                  currentLeafId: "root",
                  threadId: null,
                  title: "New chat",
                }
              var e,
                n,
                t,
                r,
                o,
                s,
                c =
                  ((t =
                    null ===
                      (n = Object.values(x.mapping).find(function (e) {
                        return null === e.parent
                      })) || void 0 === n
                      ? void 0
                      : n.id),
                  (r = new Set()),
                  (o = new Set()),
                  (x.moderation_results || []).forEach(function (e) {
                    e.blocked
                      ? o.add(e.message_id)
                      : e.flagged && r.add(e.message_id)
                  }),
                  {
                    rootId: t,
                    mapping: Object.keys(x.mapping).reduce(function (e, n) {
                      var t,
                        a = x.mapping[n],
                        s = a.parent,
                        c = a.children,
                        f = (0, u.Z)(a, ["parent", "children"]),
                        h = x.mapping[n].message || d.Cv.createRootMessage()
                      return (
                        o.has(h.id) ? (t = m.sK) : r.has(h.id) && (t = m.Mf),
                        (e[n] = (0, i.Z)(
                          (0, l.Z)((0, i.Z)({}, f), {
                            message: h,
                            children: c || [],
                            parentId: s || "",
                            type: d.uV[h.role],
                          }),
                          t && { metadata: t }
                        )),
                        e
                      )
                    }, {}),
                    currentLeafId: x.current_node,
                  })
              return {
                thread: c.mapping || d.Cv.createTree(),
                currentLeafId: c.currentLeafId || c.rootId || "root",
                threadId:
                  null === (s = a.query.chatId) || void 0 === s ? void 0 : s[0],
                title: x.title || null,
              }
            },
            [x, a.query.chatId]
          )
        return (0, s.useMemo)(
          function () {
            return { threadData: p, isLoading: Boolean(n && g) }
          },
          [g, p, n]
        )
      }
      function x() {
        var e = (0, a.NL)()
        return (0, s.useCallback)(
          function (n) {
            e.removeQueries(["conversation", n])
          },
          [e]
        )
      }
    },
    44819: function (e, n, t) {
      t.d(n, {
        G3: function () {
          return r
        },
        ZP: function () {
          return f
        },
      })
      var r,
        a,
        o = t(33861),
        s = t(31501),
        i = t(61079),
        l = t(61432),
        u = t(70079),
        c = t(500),
        d = t(46275)
      function m(e) {
        return e.includes("text-davinci")
      }
      function f(e) {
        var n,
          t,
          a = (0, u.useContext)(c.yP).id,
          f = (0, l.useRouter)(),
          h = f.query,
          x = decodeURIComponent(h[r.Model] || ""),
          g = (0, u.useMemo)(
            function () {
              if (x || e.length) {
                var n,
                  t =
                    x ||
                    (null ===
                      (n = e.find(function (e) {
                        return "chat" === a ? m(e.id) : !m(e.id)
                      })) || void 0 === n
                      ? void 0
                      : n.id) ||
                    e[0].id,
                  r = (0, d.Vq)(x) ? "custom" : t
                return e.find(function (e) {
                  return e.id === r
                })
              }
            },
            [e, a, x]
          ),
          p = parseFloat(h[r.Temperature] || "1"),
          v = (0, u.useCallback)(
            function (e, n) {
              f.replace(
                {
                  pathname: f.basePath,
                  query: (0, i.Z)(
                    (0, s.Z)({}, h),
                    (0, o.Z)({}, e, encodeURIComponent(n))
                  ),
                },
                void 0,
                { shallow: !0 }
              )
            },
            [h, f]
          )
        return (0, u.useMemo)(
          function () {
            return {
              temperature: p,
              modelBackend: (null == g ? void 0 : g.id) || "",
              onChangeModelSetting: v,
            }
          },
          [v, null == g ? void 0 : g.id, p]
        )
      }
      ;((a = r || (r = {})).Model = "model"),
        (a.Temperature = "temperature"),
        (a.Context = "context")
    },
    49690: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l
        },
      })
      var r = t(70079),
        a = t(12762),
        o = t(98943),
        s = t(82018),
        i = t(60814)
      function l(e, n, t, l, u) {
        var c = (0, s.kP)().session,
          d = (0, a.WS)(l)
        ;(0, r.useEffect)(function () {
          i.ZP.setAccessToken(t), a.ZP.setUser(n, u), d(o.s6.pageLoad)
        }, []),
          (0, r.useEffect)(
            function () {
              ;(null == c ? void 0 : c.accessToken) &&
                i.ZP.setAccessToken(c.accessToken),
                (null == c ? void 0 : c.error) === "RefreshAccessTokenError" &&
                  (console.error(c.error),
                  window._oaiHandleSessionExpired("page load", c.error))
            },
            [c]
          ),
          (0, r.useEffect)(
            function () {
              document.title = e
            },
            [e]
          )
      }
    },
    66285: function (e, n, t) {
      t.d(n, {
        hz: function () {
          return c
        },
        mA: function () {
          return l
        },
        nR: function () {
          return u
        },
      })
      var r = t(31501),
        a = t(61079),
        o = t(70079),
        s = t(59268),
        i = { lastUpdated: Date.now() },
        l = (0, s.ZP)()(function (e) {
          return (0, a.Z)((0, r.Z)({}, i), {
            resetAccount: function () {
              e(i)
            },
            updateAccountPlanWithResponse: function (n) {
              var t, r, a
              e({
                accountPlan: {
                  hasPaidSubscription:
                    (null == n
                      ? void 0
                      : null === (t = n.account_plan) || void 0 === t
                      ? void 0
                      : t.is_paid_subscription_active) || !1,
                  subscriptionPlan:
                    (null == n
                      ? void 0
                      : null === (r = n.account_plan) || void 0 === r
                      ? void 0
                      : r.subscription_plan) || "chatgptplusfreeplan",
                  accountUserRole:
                    (null == n
                      ? void 0
                      : null === (a = n.account_plan) || void 0 === a
                      ? void 0
                      : a.account_user_role) || "account-owner",
                },
                features: (null == n ? void 0 : n.features) || [],
              })
            },
          })
        }),
        u = function () {
          return l(function (e) {
            var n
            return null === (n = e.accountPlan) || void 0 === n
              ? void 0
              : n.hasPaidSubscription
          })
        },
        c = function () {
          var e = l(function (e) {
            return e.features
          })
          return (0, o.useMemo)(
            function () {
              return new Set(e)
            },
            [e]
          )
        }
    },
    27252: function (e, n, t) {
      t.d(n, {
        g: function () {
          return l
        },
      })
      var r = t(33861),
        a = t(31501),
        o = t(61079),
        s = t(59268),
        i = {
          flags: {
            isUserInCanPayGroup: !1,
            projectWish: !1,
            highlightPlusUpgrade: !1,
            failwhaleBypassEnabled: !1,
          },
        },
        l = (0, s.ZP)()(function (e, n) {
          return (0, o.Z)((0, a.Z)({}, i), {
            updateFlagValue: function (t, s) {
              var i = n().flags
              e({ flags: (0, o.Z)((0, a.Z)({}, i), (0, r.Z)({}, t, s)) })
            },
          })
        })
    },
    11699: function (e, n, t) {
      t.d(n, {
        Ui: function () {
          return d
        },
        dD: function () {
          return c
        },
      })
      var r,
        a,
        o,
        s = t(33861),
        i = t(70079)
      ;((o = r || (r = {})).Small = "small"),
        (o.Medium = "medium"),
        (o.Large = "large"),
        (o.XLarge = "xlarge"),
        (o.Full = "full")
      var l =
        ((a = {}),
        (0, s.Z)(a, r.Small, 640),
        (0, s.Z)(a, r.Medium, 768),
        (0, s.Z)(a, r.Large, 1024),
        (0, s.Z)(a, r.XLarge, 1280),
        (0, s.Z)(a, r.Full, 1536),
        a)
      function u(e) {
        var n = function () {
            o(t(e))
          },
          t = function (e) {
            return window.matchMedia(e).matches
          },
          r = (0, i.useState)(t(e)),
          a = r[0],
          o = r[1]
        return (
          (0, i.useEffect)(
            function () {
              var t = window.matchMedia(e)
              return (
                n(),
                t.addListener
                  ? t.addListener(n)
                  : t.addEventListener("change", n),
                function () {
                  t.removeListener
                    ? t.removeListener(n)
                    : t.removeEventListener("change", n)
                }
              )
            },
            [e]
          ),
          a
        )
      }
      function c() {
        return u("(max-width: ".concat(l[r.Medium], "px)"))
      }
      function d() {
        return u("(max-width: ".concat(l[r.Large], "px)"))
      }
    },
    62676: function (e, n, t) {
      t.d(n, {
        m: function () {
          return o
        },
      })
      var r = t(35025)
      t(70079)
      var a = window.localStorage,
        o = (function () {
          function e() {
            ;(0, r.Z)(this, e)
          }
          return (
            (e.setItem = function (e, n) {
              if (!a) throw Error("You cannot set localStorage server-side")
              a.setItem(e, JSON.stringify(n))
            }),
            (e.getItem = function (e) {
              if (a) {
                var n = a.getItem(e)
                return "string" == typeof n ? JSON.parse(n) : n
              }
              return null
            }),
            (e.removeItem = function (e) {
              if (a) return a.removeItem(e)
            }),
            e
          )
        })()
    },
  },
])
