"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [814],
  {
    60814: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return _
        },
      })
      var r = n(61706),
        o = n(35025),
        s = n(9135),
        a = n(31501),
        i = n(61079),
        c = n(45813),
        h = n(48879),
        u = n(44928)
      n(138)
      var d = n(34388),
        l = n(22832),
        p = n(25829),
        f = n(19818),
        g = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, f.Z)(n)
          function n(e, r, s, a) {
            var i
            return (
              (0, o.Z)(this, n),
              ((i = t.call(this, e)).name = "UserError"),
              (i.userMessage = e),
              (i.status = r || 400),
              (i.code = s || null),
              (i.type = a || null),
              i
            )
          }
          return n
        })((0, p.Z)(Error)),
        m = (function (e) {
          ;(0, l.Z)(n, e)
          var t = (0, f.Z)(n)
          function n() {
            var e,
              r,
              s =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "An error occurred. If this issue persists please contact us through our help center at help.openai.com.",
              a = arguments.length > 1 ? arguments[1] : void 0
            return (
              (0, o.Z)(this, n),
              ((e = t.call(
                this,
                ((r = s),
                r &&
                (r.startsWith("Rate limit reached for") ||
                  r.startsWith("End-user exceeded rate-limit"))
                  ? "We're sorry, but we limit the number of requests one user can make in a certain timeframe. Please hang tight and try again in a little while."
                  : r)
              )).name = "FatalError"),
              (e.type = a || null),
              e
            )
          }
          return n
        })((0, p.Z)(Error)),
        y = n(24638),
        v = "https://chat.openai.com/backend-api",
        T = (function () {
          function e() {
            ;(0, o.Z)(this, e)
          }
          return (
            (e.setAccessToken = function (e) {
              this.accessToken = e
            }),
            (e.getAuthHeader = function (e) {
              return { Authorization: "Bearer ".concat(e || this.accessToken) }
            }),
            (e.refreshApiKey = function () {
              var e = this
              if (this.apiKeyRefreshing) return this.apiKeyRefreshing
              var t = this
              return (
                (this.apiKeyRefreshing = (0, r.Z)(function () {
                  var e
                  return (0, c.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, (0, u.getSession)()]
                      case 1:
                        return (
                          (e = n.sent()) && t.setAccessToken(e.accessToken), [2]
                        )
                      case 2:
                        throw Error(
                          "Cannot refresh access token outside of browser"
                        )
                      case 3:
                        return [2]
                    }
                  })
                })()),
                setTimeout(function () {
                  e.apiKeyRefreshing = null
                }, 6e4),
                this.apiKeyRefreshing
              )
            }),
            (e.fetch = function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                o = this
              return (0, r.Z)(function () {
                var r, s, h, u, d, l
                return (0, c.__generator)(this, function (c) {
                  switch (c.label) {
                    case 0:
                      return [
                        4,
                        fetch(e, (r = (0, a.Z)({ credentials: "include" }, t))),
                      ]
                    case 1:
                      if ((s = c.sent()).status >= 500) throw new m()
                      if (!(s.status >= 400)) return [3, 12]
                      c.label = 2
                    case 2:
                      return c.trys.push([2, 4, , 5]), [4, s.json()]
                    case 3:
                      return (
                        (h =
                          (null == (u = c.sent()) ? void 0 : u.detail) ||
                          (null == u ? void 0 : u.error)),
                        [3, 5]
                      )
                    case 4:
                      return (
                        (d = c.sent()),
                        console.error("Failed to parse error response", d),
                        [3, 5]
                      )
                    case 5:
                      if (
                        (console.error("API error", e, h),
                        !(
                          (null == h ? void 0 : h.code) ===
                            "expired_session_key" ||
                          (null == h ? void 0 : h.code) === "token_expired"
                        ))
                      )
                        return [3, 11]
                      c.label = 6
                    case 6:
                      if ((c.trys.push([6, 9, , 10]), n.isRetry)) return [3, 8]
                      return [4, o.refreshApiKey()]
                    case 7:
                      return (
                        c.sent(),
                        [
                          2,
                          o.fetch(
                            e,
                            r,
                            (0, i.Z)((0, a.Z)({}, n), { isRetry: !0 })
                          ),
                        ]
                      )
                    case 8:
                      return [3, 10]
                    case 9:
                      return (
                        (l = c.sent()),
                        console.error(
                          "Failed to refresh expired access token: ".concat(l)
                        ),
                        [3, 10]
                      )
                    case 10:
                      console.error(
                        "Refresh access token failed when retrieving",
                        e,
                        h
                      ),
                        window._oaiHandleSessionExpired(
                          "fetch",
                          JSON.stringify(h)
                        ),
                        (c.label = 11)
                    case 11:
                      if (null == h ? void 0 : h.type)
                        throw new g(
                          (null == h ? void 0 : h.message) || h,
                          s.status,
                          null == h ? void 0 : h.code,
                          null == h ? void 0 : h.type
                        )
                      throw new m()
                    case 12:
                      if (204 === s.status) return [2, {}]
                      return [2, s.json()]
                  }
                })
              })()
            }),
            (e.getArtifacts = function () {
              return this.fetch("".concat(v, "/artifacts"), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader()
                ),
              })
            }),
            (e.createArtifact = function (e) {
              return this.fetch("".concat(v, "/artifacts"), {
                method: "POST",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader()
                ),
                body: JSON.stringify({ url: e, contents: "\n" }),
              })
            }),
            (e.sendDocument = function () {
              return this.fetch("".concat(v, "/private"), {
                method: "GET",
                headers: { "Content-Type": "application/json" },
              })
            }),
            (e.getRetrievalResults = function (e) {
              return this.fetch("".concat(v, "/retrieval/public_data"), {
                method: "POST",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader()
                ),
                body: JSON.stringify({ query: e }),
              })
            }),
            (e.getModels = function (e) {
              return this.fetch("".concat(v, "/models"), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(e)
                ),
              })
            }),
            (e.getConversations = function (e, t, n) {
              var r = new URLSearchParams({
                offset: e.toString(),
                limit: t.toString(),
              })
              return this.fetch("".concat(v, "/conversations?").concat(r), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(n)
                ),
              })
            }),
            (e.getConversation = function (e, t, n) {
              var r = n ? "".concat(y.env.INTERNAL_API_URL, "/api") : v
              return this.fetch("".concat(r, "/conversation/").concat(e), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(t)
                ),
              })
            }),
            (e.generateTitle = function (e, t, n) {
              return this.fetch(
                "".concat(v, "/conversation/gen_title/").concat(e),
                {
                  method: "POST",
                  headers: (0, a.Z)(
                    { "Content-Type": "application/json" },
                    this.getAuthHeader()
                  ),
                  body: JSON.stringify({ message_id: t, model: n }),
                }
              )
            }),
            (e.patchConversation = function (e, t) {
              return this.fetch("".concat(v, "/conversation/").concat(e), {
                method: "PATCH",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader()
                ),
                body: JSON.stringify(t),
              })
            }),
            (e.deleteConversations = function () {
              return this.fetch("".concat(v, "/conversations"), {
                method: "PATCH",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader()
                ),
                body: JSON.stringify({ is_visible: !1 }),
              })
            }),
            (e.getLoginLink = function (e) {
              return this.fetch("".concat(v, "/bypass/link"), {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: e }),
              })
            }),
            (e.publicApiCompletionStream = function (e, t, n) {
              var o = this
              return (0, r.Z)(function () {
                var i, u, l
                return (0, c.__generator)(this, function (l) {
                  return (
                    (i = new AbortController()),
                    (u = {
                      action: t.completionType,
                      messages: t.messages.length > 0 ? t.messages : void 0,
                      conversation_id: t.threadId,
                      parent_message_id: t.parentMessageId,
                      model: e.model,
                    }),
                    (0, h.L)(
                      "".concat(
                        "https://chat.openai.com/backend-api",
                        "/conversation"
                      ),
                      {
                        method: "POST",
                        credentials: "include",
                        headers: (0, a.Z)(
                          {
                            "Content-Type": "application/json",
                            "X-OpenAI-Assistant-App-Id": e.appId || "",
                          },
                          o.getAuthHeader()
                        ),
                        body: JSON.stringify(u),
                        signal: i.signal,
                        openWhenHidden: !0,
                        onopen: function (e) {
                          return (0, r.Z)(function () {
                            var t, n, r
                            return (0, c.__generator)(this, function (o) {
                              switch (o.label) {
                                case 0:
                                  if (
                                    ((t = e.headers.get("content-type") || ""),
                                    e.ok && t.includes("text/event-stream"))
                                  )
                                    return [2]
                                  if (!t.includes("application/json"))
                                    return [3, 2]
                                  return [4, e.json()]
                                case 1:
                                  if (
                                    ((n = o.sent()),
                                    console.error(n),
                                    (r =
                                      (null == n ? void 0 : n.error) ||
                                      (null == n ? void 0 : n.detail)))
                                  ) {
                                    if (e.status >= 500)
                                      throw new m(
                                        (null == r ? void 0 : r.message) || r
                                      )
                                    throw (
                                      (((null == r ? void 0 : r.code) ===
                                        "expired_session_key" ||
                                        (null == r ? void 0 : r.code) ===
                                          "invalid_api_key" ||
                                        (null == r ? void 0 : r.code) ===
                                          "token_expired") &&
                                        window._oaiHandleSessionExpired(
                                          "stream",
                                          JSON.stringify(r)
                                        ),
                                      new g(
                                        (null == r ? void 0 : r.message) || r,
                                        e.status,
                                        null == r ? void 0 : r.code,
                                        null == r ? void 0 : r.type
                                      ))
                                    )
                                  }
                                  o.label = 2
                                case 2:
                                  throw new m()
                              }
                            })
                          })()
                        },
                        onmessage: function (e) {
                          if ("[DONE]" === e.data)
                            i.abort(), n({ finish_reason: "stop" })
                          else if ("ping" === e.event);
                          else
                            try {
                              var t = JSON.parse(e.data)
                              if (t.error) throw new m(t.error.message)
                              n({
                                message: t.message,
                                threadId: t.conversation_id,
                              })
                            } catch (r) {
                              if ((0, d.TV)(r)) throw new m(r.message)
                            }
                        },
                        onerror: function (e) {
                          throw (
                            ("Failed to fetch" === e.message &&
                              (e = new m(
                                "An error occurred. Either the engine you requested does not exist or there was another issue processing your request. If this issue persists please contact us through our help center at help.openai.com."
                              )),
                            n({ err: e }),
                            e)
                          )
                        },
                      }
                    ).catch(function (e) {
                      ;(0, s.Z)(e, g) || (0, s.Z)(e, m) || console.error(e)
                    }),
                    [2, i]
                  )
                })
              })()
            }),
            (e.runModerationApi = function (e, t, n) {
              return this.fetch(
                "".concat(
                  "https://chat.openai.com/backend-api",
                  "/moderations"
                ),
                {
                  method: "POST",
                  headers: (0, a.Z)(
                    { "Content-Type": "application/json" },
                    this.getAuthHeader()
                  ),
                  body: JSON.stringify({
                    input: e,
                    model: "text-moderation-playground",
                    conversation_id: t,
                    message_id: n,
                  }),
                }
              )
            }),
            (e.submitMessageFeedback = function (e) {
              return this.fetch(
                "".concat(v, "/conversation/message_feedback"),
                {
                  method: "POST",
                  headers: (0, a.Z)(
                    { "Content-Type": "application/json" },
                    this.getAuthHeader()
                  ),
                  body: JSON.stringify(e),
                }
              )
            }),
            (e.getRateLimitCaptchaId = function (e) {
              var t = this
              return (0, r.Z)(function () {
                return (0, c.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        t.fetch("".concat(v, "/check_data_captcha"), {
                          method: "GET",
                          headers: (0, a.Z)(
                            { "Content-Type": "application/json" },
                            t.getAuthHeader(e)
                          ),
                        }),
                      ]
                    case 1:
                      return [2, n.sent()]
                  }
                })
              })()
            }),
            (e.getRateLimitCaptchaItem = function (e, t) {
              return this.fetch("".concat(v, "/data_captcha/").concat(e), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(t)
                ),
              })
            }),
            (e.getCaptchaDisplayStatus = function (e) {
              return this.fetch("".concat(v, "/crosswalk"), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(e)
                ),
              })
            }),
            (e.submitRateLimitCaptchaResponse = function (e, t) {
              return this.fetch(
                "".concat(v, "/data_captcha/").concat(e.captchaId),
                {
                  method: "POST",
                  headers: (0, a.Z)(
                    { "Content-Type": "application/json" },
                    this.getAuthHeader(t)
                  ),
                  body: JSON.stringify({
                    payload: e.payload,
                    metadata: e.metadata,
                  }),
                }
              )
            }),
            (e.submitCheckoutForm = function () {
              return this.fetch("".concat(v, "/payments/checkout"), {
                method: "POST",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader()
                ),
              })
            }),
            (e.fetchCustomerPortalUrl = function (e) {
              return this.fetch("".concat(v, "/payments/customer_portal"), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(e)
                ),
              })
            }),
            (e.getAccountStatus = function (e, t) {
              var n = t ? "".concat(y.env.INTERNAL_API_URL, "/api") : v
              return this.fetch("".concat(n, "/accounts/check"), {
                method: "GET",
                headers: (0, a.Z)(
                  { "Content-Type": "application/json" },
                  this.getAuthHeader(e)
                ),
              })
            }),
            (e.postAccountStatusWithCustomerSessionId = function (e, t) {
              return this.fetch(
                "".concat(
                  y.env.INTERNAL_API_URL,
                  "/api/payments/checkout_session"
                ),
                {
                  method: "POST",
                  headers: (0, a.Z)(
                    { "Content-Type": "application/json" },
                    this.getAuthHeader(t)
                  ),
                  body: JSON.stringify({ stripe_checkout_session_id: e }),
                }
              )
            }),
            e
          )
        })()
      T.auth0Client = null
      var _ = T
    },
  },
])
