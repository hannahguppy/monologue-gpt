"use strict"
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [762],
  {
    10538: function (t, e, r) {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var s = r(70079),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                )
              },
        n = s.useState,
        u = s.useEffect,
        o = s.useLayoutEffect,
        l = s.useDebugValue
      function c(t) {
        var e = t.getSnapshot
        t = t.value
        try {
          var r = e()
          return !i(t, r)
        } catch (s) {
          return !0
        }
      }
      function a(t, e) {
        return e()
      }
      var h =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? a
          : function (t, e) {
              var r = e(),
                s = n({ inst: { value: r, getSnapshot: e } }),
                i = s[0].inst,
                a = s[1]
              return (
                o(
                  function () {
                    ;(i.value = r), (i.getSnapshot = e), c(i) && a({ inst: i })
                  },
                  [t, r, e]
                ),
                u(
                  function () {
                    return (
                      c(i) && a({ inst: i }),
                      t(function () {
                        c(i) && a({ inst: i })
                      })
                    )
                  },
                  [t]
                ),
                l(r),
                r
              )
            }
      e.useSyncExternalStore =
        void 0 !== s.useSyncExternalStore ? s.useSyncExternalStore : h
    },
    31178: function (t, e, r) {
      t.exports = r(10538)
    },
    89335: function (t, e, r) {
      r.d(e, {
        z: function () {
          return l
        },
      })
      var s = r(49043),
        i = r(42422),
        n = r(31406),
        u = r(94521),
        o = r(99695)
      class l extends u.l {
        constructor(t, e) {
          super(),
            (this.client = t),
            (this.options = e),
            (this.trackedProps = new Set()),
            (this.selectError = null),
            this.bindMethods(),
            this.setOptions(e)
        }
        bindMethods() {
          ;(this.remove = this.remove.bind(this)),
            (this.refetch = this.refetch.bind(this))
        }
        onSubscribe() {
          1 === this.listeners.length &&
            (this.currentQuery.addObserver(this),
            c(this.currentQuery, this.options) && this.executeFetch(),
            this.updateTimers())
        }
        onUnsubscribe() {
          this.listeners.length || this.destroy()
        }
        shouldFetchOnReconnect() {
          return a(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect
          )
        }
        shouldFetchOnWindowFocus() {
          return a(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus
          )
        }
        destroy() {
          ;(this.listeners = []),
            this.clearStaleTimeout(),
            this.clearRefetchInterval(),
            this.currentQuery.removeObserver(this)
        }
        setOptions(t, e) {
          let r = this.options,
            i = this.currentQuery
          if (
            ((this.options = this.client.defaultQueryOptions(t)),
            (0, s.VS)(r, this.options) ||
              this.client
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.currentQuery,
                  observer: this,
                }),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled)
          )
            throw Error("Expected enabled to be a boolean")
          this.options.queryKey || (this.options.queryKey = r.queryKey),
            this.updateQuery()
          let n = this.hasListeners()
          n && h(this.currentQuery, i, this.options, r) && this.executeFetch(),
            this.updateResult(e),
            n &&
              (this.currentQuery !== i ||
                this.options.enabled !== r.enabled ||
                this.options.staleTime !== r.staleTime) &&
              this.updateStaleTimeout()
          let u = this.computeRefetchInterval()
          n &&
            (this.currentQuery !== i ||
              this.options.enabled !== r.enabled ||
              u !== this.currentRefetchInterval) &&
            this.updateRefetchInterval(u)
        }
        getOptimisticResult(t) {
          let e = this.client.getQueryCache().build(this.client, t)
          return this.createResult(e, t)
        }
        getCurrentResult() {
          return this.currentResult
        }
        trackResult(t) {
          let e = {}
          return (
            Object.keys(t).forEach((r) => {
              Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r), t[r]),
              })
            }),
            e
          )
        }
        getCurrentQuery() {
          return this.currentQuery
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery)
        }
        refetch({ refetchPage: t, ...e } = {}) {
          return this.fetch({ ...e, meta: { refetchPage: t } })
        }
        fetchOptimistic(t) {
          let e = this.client.defaultQueryOptions(t),
            r = this.client.getQueryCache().build(this.client, e)
          return (
            (r.isFetchingOptimistic = !0),
            r.fetch().then(() => this.createResult(r, e))
          )
        }
        fetch(t) {
          var e
          return this.executeFetch({
            ...t,
            cancelRefetch: null == (e = t.cancelRefetch) || e,
          }).then(() => (this.updateResult(), this.currentResult))
        }
        executeFetch(t) {
          this.updateQuery()
          let e = this.currentQuery.fetch(this.options, t)
          return (null != t && t.throwOnError) || (e = e.catch(s.ZT)), e
        }
        updateStaleTimeout() {
          if (
            (this.clearStaleTimeout(),
            s.sk ||
              this.currentResult.isStale ||
              !(0, s.PN)(this.options.staleTime))
          )
            return
          let t = (0, s.Kp)(
            this.currentResult.dataUpdatedAt,
            this.options.staleTime
          )
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult()
          }, t + 1)
        }
        computeRefetchInterval() {
          var t
          return "function" == typeof this.options.refetchInterval
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery
              )
            : null != (t = this.options.refetchInterval) && t
        }
        updateRefetchInterval(t) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = t),
            !s.sk &&
              !1 !== this.options.enabled &&
              (0, s.PN)(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                ;(this.options.refetchIntervalInBackground ||
                  n.j.isFocused()) &&
                  this.executeFetch()
              }, this.currentRefetchInterval))
        }
        updateTimers() {
          this.updateStaleTimeout(),
            this.updateRefetchInterval(this.computeRefetchInterval())
        }
        clearStaleTimeout() {
          this.staleTimeoutId &&
            (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0))
        }
        clearRefetchInterval() {
          this.refetchIntervalId &&
            (clearInterval(this.refetchIntervalId),
            (this.refetchIntervalId = void 0))
        }
        createResult(t, e) {
          let r = this.currentQuery,
            i = this.options,
            n = this.currentResult,
            u = this.currentResultState,
            l = this.currentResultOptions,
            a = t !== r,
            p = a ? t.state : this.currentQueryInitialState,
            f = a ? this.currentResult : this.previousQueryResult,
            { state: y } = t,
            {
              dataUpdatedAt: v,
              error: R,
              errorUpdatedAt: b,
              fetchStatus: m,
              status: S,
            } = y,
            E = !1,
            Q = !1,
            g
          if (e._optimisticResults) {
            let I = this.hasListeners(),
              C = !I && c(t, e),
              O = I && h(t, r, e, i)
            ;(C || O) &&
              ((m = (0, o.Kw)(t.options.networkMode) ? "fetching" : "paused"),
              v || (S = "loading")),
              "isRestoring" === e._optimisticResults && (m = "idle")
          }
          if (
            e.keepPreviousData &&
            !y.dataUpdatedAt &&
            null != f &&
            f.isSuccess &&
            "error" !== S
          )
            (g = f.data), (v = f.dataUpdatedAt), (S = f.status), (E = !0)
          else if (e.select && void 0 !== y.data) {
            if (
              n &&
              y.data === (null == u ? void 0 : u.data) &&
              e.select === this.selectFn
            )
              g = this.selectResult
            else
              try {
                ;(this.selectFn = e.select),
                  (g = e.select(y.data)),
                  (g = (0, s.oE)(null == n ? void 0 : n.data, g, e)),
                  (this.selectResult = g),
                  (this.selectError = null)
              } catch (T) {
                this.selectError = T
              }
          } else g = y.data
          if (void 0 !== e.placeholderData && void 0 === g && "loading" === S) {
            let w
            if (
              null != n &&
              n.isPlaceholderData &&
              e.placeholderData === (null == l ? void 0 : l.placeholderData)
            )
              w = n.data
            else if (
              ((w =
                "function" == typeof e.placeholderData
                  ? e.placeholderData()
                  : e.placeholderData),
              e.select && void 0 !== w)
            )
              try {
                ;(w = e.select(w)), (this.selectError = null)
              } catch (F) {
                this.selectError = F
              }
            void 0 !== w &&
              ((S = "success"),
              (g = (0, s.oE)(null == n ? void 0 : n.data, w, e)),
              (Q = !0))
          }
          this.selectError &&
            ((R = this.selectError),
            (g = this.selectResult),
            (b = Date.now()),
            (S = "error"))
          let U = "fetching" === m,
            k = "loading" === S,
            x = "error" === S,
            P = {
              status: S,
              fetchStatus: m,
              isLoading: k,
              isSuccess: "success" === S,
              isError: x,
              isInitialLoading: k && U,
              data: g,
              dataUpdatedAt: v,
              error: R,
              errorUpdatedAt: b,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: y.dataUpdateCount > 0 || y.errorUpdateCount > 0,
              isFetchedAfterMount:
                y.dataUpdateCount > p.dataUpdateCount ||
                y.errorUpdateCount > p.errorUpdateCount,
              isFetching: U,
              isRefetching: U && !k,
              isLoadingError: x && 0 === y.dataUpdatedAt,
              isPaused: "paused" === m,
              isPlaceholderData: Q,
              isPreviousData: E,
              isRefetchError: x && 0 !== y.dataUpdatedAt,
              isStale: d(t, e),
              refetch: this.refetch,
              remove: this.remove,
            }
          return P
        }
        updateResult(t) {
          let e = this.currentResult,
            r = this.createResult(this.currentQuery, this.options)
          if (
            ((this.currentResultState = this.currentQuery.state),
            (this.currentResultOptions = this.options),
            (0, s.VS)(r, e))
          )
            return
          this.currentResult = r
          let i = { cache: !0 }
          ;(null == t ? void 0 : t.listeners) !== !1 &&
            (() => {
              if (!e) return !0
              let { notifyOnChangeProps: t } = this.options
              if ("all" === t || (!t && !this.trackedProps.size)) return !0
              let r = new Set(null != t ? t : this.trackedProps)
              return (
                this.options.useErrorBoundary && r.add("error"),
                Object.keys(this.currentResult).some((t) => {
                  let s = this.currentResult[t] !== e[t]
                  return s && r.has(t)
                })
              )
            })() &&
            (i.listeners = !0),
            this.notify({ ...i, ...t })
        }
        updateQuery() {
          let t = this.client.getQueryCache().build(this.client, this.options)
          if (t === this.currentQuery) return
          let e = this.currentQuery
          ;(this.currentQuery = t),
            (this.currentQueryInitialState = t.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (null == e || e.removeObserver(this), t.addObserver(this))
        }
        onQueryUpdate(t) {
          let e = {}
          "success" === t.type
            ? (e.onSuccess = !t.manual)
            : "error" !== t.type || (0, o.DV)(t.error) || (e.onError = !0),
            this.updateResult(e),
            this.hasListeners() && this.updateTimers()
        }
        notify(t) {
          i.V.batch(() => {
            var e, r, s, i, n, u, o, l
            t.onSuccess
              ? (null == (e = (r = this.options).onSuccess) ||
                  e.call(r, this.currentResult.data),
                null == (s = (i = this.options).onSettled) ||
                  s.call(i, this.currentResult.data, null))
              : t.onError &&
                (null == (n = (u = this.options).onError) ||
                  n.call(u, this.currentResult.error),
                null == (o = (l = this.options).onSettled) ||
                  o.call(l, void 0, this.currentResult.error)),
              t.listeners &&
                this.listeners.forEach((t) => {
                  t(this.currentResult)
                }),
              t.cache &&
                this.client
                  .getQueryCache()
                  .notify({
                    query: this.currentQuery,
                    type: "observerResultsUpdated",
                  })
          })
        }
      }
      function c(t, e) {
        var r, s
        return (
          (!1 !== e.enabled &&
            !t.state.dataUpdatedAt &&
            !("error" === t.state.status && !1 === e.retryOnMount)) ||
          (t.state.dataUpdatedAt > 0 && a(t, e, e.refetchOnMount))
        )
      }
      function a(t, e, r) {
        if (!1 !== e.enabled) {
          let s = "function" == typeof r ? r(t) : r
          return "always" === s || (!1 !== s && d(t, e))
        }
        return !1
      }
      function h(t, e, r, s) {
        return (
          !1 !== r.enabled &&
          (t !== e || !1 === s.enabled) &&
          (!r.suspense || "error" !== t.state.status) &&
          d(t, r)
        )
      }
      function d(t, e) {
        return t.isStaleByTime(e.staleTime)
      }
    },
    56137: function (t, e, r) {
      r.d(e, {
        r: function () {
          return S
        },
      })
      var s = r(70079),
        i = r(39858),
        n = r(42422)
      let u,
        o = s.createContext(
          ((u = !1),
          {
            clearReset() {
              u = !1
            },
            reset() {
              u = !0
            },
            isReset: () => u,
          })
        ),
        l = () => s.useContext(o)
      var c = r(62906)
      let a = s.createContext(!1),
        h = () => s.useContext(a)
      a.Provider
      var d = r(83793)
      let p = (t, e) => {
          ;(t.suspense || t.useErrorBoundary) &&
            !e.isReset() &&
            (t.retryOnMount = !1)
        },
        f = (t) => {
          s.useEffect(() => {
            t.clearReset()
          }, [t])
        },
        y = ({
          result: t,
          errorResetBoundary: e,
          useErrorBoundary: r,
          query: s,
        }) =>
          t.isError &&
          !e.isReset() &&
          !t.isFetching &&
          (0, d.L)(r, [t.error, s]),
        v = (t) => {
          t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
        },
        R = (t, e) => t.isLoading && t.isFetching && !e,
        b = (t, e, r) => (null == t ? void 0 : t.suspense) && R(e, r),
        m = (t, e, r) =>
          e
            .fetchOptimistic(t)
            .then(({ data: e }) => {
              null == t.onSuccess || t.onSuccess(e),
                null == t.onSettled || t.onSettled(e, null)
            })
            .catch((e) => {
              r.clearReset(),
                null == t.onError || t.onError(e),
                null == t.onSettled || t.onSettled(void 0, e)
            })
      function S(t, e) {
        let r = (0, c.NL)({ context: t.context }),
          u = h(),
          o = l(),
          a = r.defaultQueryOptions(t)
        ;(a._optimisticResults = u ? "isRestoring" : "optimistic"),
          a.onError && (a.onError = n.V.batchCalls(a.onError)),
          a.onSuccess && (a.onSuccess = n.V.batchCalls(a.onSuccess)),
          a.onSettled && (a.onSettled = n.V.batchCalls(a.onSettled)),
          v(a),
          p(a, o),
          f(o)
        let [d] = s.useState(() => new e(r, a)),
          R = d.getOptimisticResult(a)
        if (
          ((0, i.$)(
            s.useCallback(
              (t) => (u ? () => void 0 : d.subscribe(n.V.batchCalls(t))),
              [d, u]
            ),
            () => d.getCurrentResult(),
            () => d.getCurrentResult()
          ),
          s.useEffect(() => {
            d.setOptions(a, { listeners: !1 })
          }, [a, d]),
          b(a, R, u))
        )
          throw m(a, d, o)
        if (
          y({
            result: R,
            errorResetBoundary: o,
            useErrorBoundary: a.useErrorBoundary,
            query: d.getCurrentQuery(),
          })
        )
          throw R.error
        return a.notifyOnChangeProps ? R : d.trackResult(R)
      }
    },
    87762: function (t, e, r) {
      r.d(e, {
        a: function () {
          return u
        },
      })
      var s = r(49043),
        i = r(89335),
        n = r(56137)
      function u(t, e, r) {
        let u = (0, s._v)(t, e, r)
        return (0, n.r)(u, i.z)
      }
    },
    39858: function (t, e, r) {
      r.d(e, {
        $: function () {
          return i
        },
      })
      var s = r(31178)
      let i = s.useSyncExternalStore
    },
    83793: function (t, e, r) {
      r.d(e, {
        L: function () {
          return s
        },
      })
      function s(t, e) {
        return "function" == typeof t ? t(...e) : !!t
      }
    },
  },
])
