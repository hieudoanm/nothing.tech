(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  26388,
  (e, t, r) => {
    !(function () {
      var e = {
          229: function (e) {
            var t,
              r,
              n,
              o = (e.exports = {});
            function u() {
              throw Error('setTimeout has not been defined');
            }
            function s() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : u;
            } catch (e) {
              t = u;
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
              r = s;
            }
            function i(e) {
              if (t === setTimeout) return setTimeout(e, 0);
              if ((t === u || !t) && setTimeout)
                return ((t = setTimeout), setTimeout(e, 0));
              try {
                return t(e, 0);
              } catch (r) {
                try {
                  return t.call(null, e, 0);
                } catch (r) {
                  return t.call(this, e, 0);
                }
              }
            }
            var a = [],
              l = !1,
              c = -1;
            function f() {
              l &&
                n &&
                ((l = !1),
                n.length ? (a = n.concat(a)) : (c = -1),
                a.length && d());
            }
            function d() {
              if (!l) {
                var e = i(f);
                l = !0;
                for (var t = a.length; t; ) {
                  for (n = a, a = []; ++c < t; ) n && n[c].run();
                  ((c = -1), (t = a.length));
                }
                ((n = null),
                  (l = !1),
                  (function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === s || !r) && clearTimeout)
                      return ((r = clearTimeout), clearTimeout(e));
                    try {
                      r(e);
                    } catch (t) {
                      try {
                        return r.call(null, e);
                      } catch (t) {
                        return r.call(this, e);
                      }
                    }
                  })(e));
              }
            }
            function p(e, t) {
              ((this.fun = e), (this.array = t));
            }
            function h() {}
            ((o.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              (a.push(new p(e, t)), 1 !== a.length || l || i(d));
            }),
              (p.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (o.title = 'browser'),
              (o.browser = !0),
              (o.env = {}),
              (o.argv = []),
              (o.version = ''),
              (o.versions = {}),
              (o.on = h),
              (o.addListener = h),
              (o.once = h),
              (o.off = h),
              (o.removeListener = h),
              (o.removeAllListeners = h),
              (o.emit = h),
              (o.prependListener = h),
              (o.prependOnceListener = h),
              (o.listeners = function (e) {
                return [];
              }),
              (o.binding = function (e) {
                throw Error('process.binding is not supported');
              }),
              (o.cwd = function () {
                return '/';
              }),
              (o.chdir = function (e) {
                throw Error('process.chdir is not supported');
              }),
              (o.umask = function () {
                return 0;
              }));
          },
        },
        r = {};
      function n(t) {
        var o = r[t];
        if (void 0 !== o) return o.exports;
        var u = (r[t] = { exports: {} }),
          s = !0;
        try {
          (e[t](u, u.exports, n), (s = !1));
        } finally {
          s && delete r[t];
        }
        return u.exports;
      }
      ((n.ab =
        '/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
        (t.exports = n(229)));
    })();
  },
  97244,
  (e, t, r) => {
    'use strict';
    var n, o;
    t.exports =
      (null == (n = e.g.process) ? void 0 : n.env) &&
      'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
        ? e.g.process
        : e.r(26388);
  },
  86234,
  (e, t, r) => {
    'use strict';
    var n = Symbol.for('react.transitional.element');
    function o(e, t, r) {
      var o = null;
      if (
        (void 0 !== r && (o = '' + r),
        void 0 !== t.key && (o = '' + t.key),
        'key' in t)
      )
        for (var u in ((r = {}), t)) 'key' !== u && (r[u] = t[u]);
      else r = t;
      return {
        $$typeof: n,
        type: e,
        key: o,
        ref: void 0 !== (t = r.ref) ? t : null,
        props: r,
      };
    }
    ((r.Fragment = Symbol.for('react.fragment')), (r.jsx = o), (r.jsxs = o));
  },
  94601,
  (e, t, r) => {
    'use strict';
    t.exports = e.r(86234);
  },
  14513,
  (e, t, r) => {
    'use strict';
    var n = e.i(97244),
      o = Symbol.for('react.transitional.element'),
      u = Symbol.for('react.portal'),
      s = Symbol.for('react.fragment'),
      i = Symbol.for('react.strict_mode'),
      a = Symbol.for('react.profiler'),
      l = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      h = Symbol.for('react.lazy'),
      y = Symbol.for('react.activity'),
      m = Symbol.iterator,
      g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      b = {};
    function w(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = r || g));
    }
    function _() {}
    function x(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = r || g));
    }
    ((w.prototype.isReactComponent = {}),
      (w.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (_.prototype = w.prototype));
    var j = (x.prototype = new _());
    ((j.constructor = x), v(j, w.prototype), (j.isPureReactComponent = !0));
    var E = Array.isArray;
    function S() {}
    var N = { H: null, A: null, T: null, S: null },
      O = Object.prototype.hasOwnProperty;
    function T(e, t, r) {
      var n = r.ref;
      return {
        $$typeof: o,
        type: e,
        key: t,
        ref: void 0 !== n ? n : null,
        props: r,
      };
    }
    function k(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var P = /\/+/g;
    function M(e, t) {
      var r, n;
      return 'object' == typeof e && null !== e && null != e.key
        ? ((r = '' + e.key),
          (n = { '=': '=0', ':': '=2' }),
          '$' +
            r.replace(/[=:]/g, function (e) {
              return n[e];
            }))
        : t.toString(36);
    }
    function C(e, t, r) {
      if (null == e) return e;
      var n = [],
        s = 0;
      return (
        !(function e(t, r, n, s, i) {
          var a,
            l,
            c,
            f = typeof t;
          ('undefined' === f || 'boolean' === f) && (t = null);
          var d = !1;
          if (null === t) d = !0;
          else
            switch (f) {
              case 'bigint':
              case 'string':
              case 'number':
                d = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case o:
                  case u:
                    d = !0;
                    break;
                  case h:
                    return e((d = t._init)(t._payload), r, n, s, i);
                }
            }
          if (d)
            return (
              (i = i(t)),
              (d = '' === s ? '.' + M(t, 0) : s),
              E(i)
                ? ((n = ''),
                  null != d && (n = d.replace(P, '$&/') + '/'),
                  e(i, r, n, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (k(i) &&
                    ((a = i),
                    (l =
                      n +
                      (null == i.key || (t && t.key === i.key)
                        ? ''
                        : ('' + i.key).replace(P, '$&/') + '/') +
                      d),
                    (i = T(a.type, l, a.props))),
                  r.push(i)),
              1
            );
          d = 0;
          var p = '' === s ? '.' : s + ':';
          if (E(t))
            for (var y = 0; y < t.length; y++)
              ((f = p + M((s = t[y]), y)), (d += e(s, r, n, f, i)));
          else if (
            'function' ==
            typeof (y =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (m && c[m]) || c['@@iterator'])
                  ? c
                  : null)
          )
            for (t = y.call(t), y = 0; !(s = t.next()).done; )
              ((f = p + M((s = s.value), y++)), (d += e(s, r, n, f, i)));
          else if ('object' === f) {
            if ('function' == typeof t.then)
              return e(
                (function (e) {
                  switch (e.status) {
                    case 'fulfilled':
                      return e.value;
                    case 'rejected':
                      throw e.reason;
                    default:
                      switch (
                        ('string' == typeof e.status
                          ? e.then(S, S)
                          : ((e.status = 'pending'),
                            e.then(
                              function (t) {
                                'pending' === e.status &&
                                  ((e.status = 'fulfilled'), (e.value = t));
                              },
                              function (t) {
                                'pending' === e.status &&
                                  ((e.status = 'rejected'), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case 'fulfilled':
                          return e.value;
                        case 'rejected':
                          throw e.reason;
                      }
                  }
                  throw e;
                })(t),
                r,
                n,
                s,
                i
              );
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (r = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : r) +
                '). If you meant to render a collection of children, use an array instead.'
            );
          }
          return d;
        })(e, n, '', '', function (e) {
          return t.call(r, e, s++);
        }),
        n
      );
    }
    function R(e) {
      if (-1 === e._status) {
        var t = e._result;
        ((t = t()).then(
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 1), (e._result = t));
          },
          function (t) {
            (0 === e._status || -1 === e._status) &&
              ((e._status = 2), (e._result = t));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t)));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var D =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            if (
              'object' == typeof window &&
              'function' == typeof window.ErrorEvent
            ) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  'object' == typeof e &&
                  null !== e &&
                  'string' == typeof e.message
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              'object' == typeof n.default &&
              'function' == typeof n.default.emit
            )
              return void n.default.emit('uncaughtException', e);
            console.error(e);
          };
    ((r.Activity = y),
      (r.Children = {
        map: C,
        forEach: function (e, t, r) {
          C(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          return (
            C(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            C(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!k(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      }),
      (r.Component = w),
      (r.Fragment = s),
      (r.Profiler = a),
      (r.PureComponent = x),
      (r.StrictMode = i),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return N.H.useMemoCache(e);
        },
      }),
      (r.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (r.cacheSignal = function () {
        return null;
      }),
      (r.cloneElement = function (e, t, r) {
        if (null == e)
          throw Error(
            'The argument must be a React element, but you passed ' + e + '.'
          );
        var n = v({}, e.props),
          o = e.key;
        if (null != t)
          for (u in (void 0 !== t.key && (o = '' + t.key), t))
            O.call(t, u) &&
              'key' !== u &&
              '__self' !== u &&
              '__source' !== u &&
              ('ref' !== u || void 0 !== t.ref) &&
              (n[u] = t[u]);
        var u = arguments.length - 2;
        if (1 === u) n.children = r;
        else if (1 < u) {
          for (var s = Array(u), i = 0; i < u; i++) s[i] = arguments[i + 2];
          n.children = s;
        }
        return T(e.type, o, n);
      }),
      (r.createContext = function (e) {
        return (
          ((e = {
            $$typeof: c,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: l, _context: e }),
          e
        );
      }),
      (r.createElement = function (e, t, r) {
        var n,
          o = {},
          u = null;
        if (null != t)
          for (n in (void 0 !== t.key && (u = '' + t.key), t))
            O.call(t, n) &&
              'key' !== n &&
              '__self' !== n &&
              '__source' !== n &&
              (o[n] = t[n]);
        var s = arguments.length - 2;
        if (1 === s) o.children = r;
        else if (1 < s) {
          for (var i = Array(s), a = 0; a < s; a++) i[a] = arguments[a + 2];
          o.children = i;
        }
        if (e && e.defaultProps)
          for (n in (s = e.defaultProps)) void 0 === o[n] && (o[n] = s[n]);
        return T(e, u, o);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = k),
      (r.lazy = function (e) {
        return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: R };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (r.startTransition = function (e) {
        var t = N.T,
          r = {};
        N.T = r;
        try {
          var n = e(),
            o = N.S;
          (null !== o && o(r, n),
            'object' == typeof n &&
              null !== n &&
              'function' == typeof n.then &&
              n.then(S, D));
        } catch (e) {
          D(e);
        } finally {
          (null !== t && null !== r.types && (t.types = r.types), (N.T = t));
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return N.H.useCacheRefresh();
      }),
      (r.use = function (e) {
        return N.H.use(e);
      }),
      (r.useActionState = function (e, t, r) {
        return N.H.useActionState(e, t, r);
      }),
      (r.useCallback = function (e, t) {
        return N.H.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return N.H.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return N.H.useDeferredValue(e, t);
      }),
      (r.useEffect = function (e, t) {
        return N.H.useEffect(e, t);
      }),
      (r.useEffectEvent = function (e) {
        return N.H.useEffectEvent(e);
      }),
      (r.useId = function () {
        return N.H.useId();
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return N.H.useImperativeHandle(e, t, r);
      }),
      (r.useInsertionEffect = function (e, t) {
        return N.H.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return N.H.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return N.H.useMemo(e, t);
      }),
      (r.useOptimistic = function (e, t) {
        return N.H.useOptimistic(e, t);
      }),
      (r.useReducer = function (e, t, r) {
        return N.H.useReducer(e, t, r);
      }),
      (r.useRef = function (e) {
        return N.H.useRef(e);
      }),
      (r.useState = function (e) {
        return N.H.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return N.H.useSyncExternalStore(e, t, r);
      }),
      (r.useTransition = function () {
        return N.H.useTransition();
      }),
      (r.version = '19.2.0'));
  },
  36960,
  (e, t, r) => {
    'use strict';
    t.exports = e.r(14513);
  },
  1143,
  98387,
  (e) => {
    'use strict';
    (e.s(
      [
        'ONE_SECOND',
        () => i,
        'getNumberOfDaysPerMonth',
        () => s,
        'getOrdinalSuffix',
        () => u,
        'months',
        () => r,
        'shortMonths',
        () => n,
        'weekdays',
        () => o,
      ],
      1143
    ),
      e.s(['addZero', () => t], 98387));
    let t = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          r = e.toString().length;
        return ''.concat('0'.repeat(t >= r ? t - r : 0)).concat(e);
      },
      r = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      n = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      o = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      u = (e) => {
        let t = e % 10,
          r = e % 100;
        return 1 === t && 11 !== r
          ? 'st'
          : 2 === t && 12 !== r
            ? 'nd'
            : 3 === t && 13 !== r
              ? 'rd'
              : 'th';
      },
      s = (e) => [
        31,
        1 === new Date(e, 1, 29).getMonth() ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ],
      i = 1e3;
  },
  2879,
  (e, t, r) => {
    'use strict';
    r._ = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  87602,
  (e, t, r) => {
    'use strict';
    function n(e) {
      if ('function' != typeof WeakMap) return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (n = function (e) {
        return e ? r : t;
      })(e);
    }
    r._ = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || ('object' != typeof e && 'function' != typeof e))
        return { default: e };
      var r = n(t);
      if (r && r.has(e)) return r.get(e);
      var o = { __proto__: null },
        u = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in e)
        if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
          var i = u ? Object.getOwnPropertyDescriptor(e, s) : null;
          i && (i.get || i.set)
            ? Object.defineProperty(o, s, i)
            : (o[s] = e[s]);
        }
      return ((o.default = e), r && r.set(e, o), o);
    };
  },
  79438,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'HeadManagerContext', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = e.r(2879)._(e.r(36960)).default.createContext({});
  },
  56220,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'warnOnce', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  75288,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        DecodeError: function () {
          return y;
        },
        MiddlewareNotFoundError: function () {
          return b;
        },
        MissingStaticPage: function () {
          return v;
        },
        NormalizeError: function () {
          return m;
        },
        PageNotFoundError: function () {
          return g;
        },
        SP: function () {
          return p;
        },
        ST: function () {
          return h;
        },
        WEB_VITALS: function () {
          return n;
        },
        execOnce: function () {
          return o;
        },
        getDisplayName: function () {
          return l;
        },
        getLocationOrigin: function () {
          return i;
        },
        getURL: function () {
          return a;
        },
        isAbsoluteUrl: function () {
          return s;
        },
        isResSent: function () {
          return c;
        },
        loadGetInitialProps: function () {
          return d;
        },
        normalizeRepeatedSlashes: function () {
          return f;
        },
        stringifyError: function () {
          return w;
        },
      }));
    let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function o(e) {
      let t,
        r = !1;
      return function () {
        for (var n = arguments.length, o = Array(n), u = 0; u < n; u++)
          o[u] = arguments[u];
        return (r || ((r = !0), (t = e(...o))), t);
      };
    }
    let u = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => u.test(e);
    function i() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + '//' + t + (r ? ':' + r : '');
    }
    function a() {
      let { href: e } = window.location,
        t = i();
      return e.substring(t.length);
    }
    function l(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function c(e) {
      return e.finished || e.headersSent;
    }
    function f(e) {
      let t = e.split('?');
      return (
        t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
        (t[1] ? '?' + t.slice(1).join('?') : '')
      );
    }
    async function d(e, t) {
      let r = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await d(t.Component, t.ctx) }
          : {};
      let n = await e.getInitialProps(t);
      if (r && c(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 }
        );
      return n;
    }
    let p = 'undefined' != typeof performance,
      h =
        p &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class y extends Error {}
    class m extends Error {}
    class g extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = 'Cannot find module for page: ' + e));
      }
    }
    class v extends Error {
      constructor(e, t) {
        (super(),
          (this.message =
            'Failed to load static file for page: ' + e + ' ' + t));
      }
    }
    class b extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function w(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  18710,
  31758,
  (e) => {
    'use strict';
    e.s(['WidgetClockAnalog', () => n], 18710);
    var t = e.i(94601),
      r = e.i(36960);
    let n = () => {
      let e = new Date(),
        [n, o] = (0, r.useState)({
          year: e.getFullYear(),
          month: e.getMonth(),
          date: e.getDate(),
          weekday: e.getDay(),
          hours: e.getHours(),
          minutes: e.getMinutes(),
          seconds: e.getSeconds(),
          milliseconds: e.getMilliseconds(),
          timezone: -(e.getTimezoneOffset() / 60),
        });
      (0, r.useEffect)(() => {
        let e = setInterval(() => {
          let e = new Date();
          o({
            year: e.getFullYear(),
            month: e.getMonth(),
            date: e.getDate(),
            weekday: e.getDay(),
            hours: e.getHours(),
            minutes: e.getMinutes(),
            seconds: e.getSeconds(),
            milliseconds: e.getMilliseconds(),
            timezone: -(e.getTimezoneOffset() / 60),
          });
        }, 1);
        return () => clearInterval(e);
      });
      let u = (n.seconds < 60 ? (n.seconds / 60) * 360 : 0) + 90,
        s = (n.minutes < 60 ? (n.minutes / 60) * 360 : 0) + 90,
        i = (n.hours / 12) * 360 + 90;
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl aspect-square w-full max-w-60 rounded-full border border-white bg-neutral-900',
        children: (0, t.jsx)('div', {
          className: 'relative h-full w-full rounded-full',
          children: (0, t.jsx)('div', {
            className:
              'absolute top-0 right-0 bottom-0 left-0 m-auto aspect-square w-4 rounded-full bg-white',
            children: (0, t.jsxs)('div', {
              className: 'relative h-full w-full',
              children: [
                [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((e) => {
                  let r = 30 * e,
                    o = (e + 9) % 12 == n.hours % 12,
                    u =
                      r % 90 == 0
                        ? (0, t.jsx)('div', {
                            title: ((e + 9) % 12).toString(),
                            className: 'aspect-square w-4 rounded-full '.concat(
                              o ? 'bg-red-500' : 'bg-white'
                            ),
                          })
                        : (0, t.jsx)('div', {
                            title: ((e + 9) % 12).toString(),
                            className: 'aspect-square w-2 rounded-full '.concat(
                              o ? 'bg-red-500' : 'bg-neutral-500'
                            ),
                          });
                  return (0, t.jsx)(
                    'div',
                    {
                      className: 'absolute h-full w-full origin-center',
                      style: { rotate: ''.concat(r, 'deg') },
                      children: (0, t.jsx)('div', {
                        className:
                          'absolute top-0 right-2 bottom-0 my-auto flex h-4 w-24 items-center justify-start bg-transparent',
                        children: u,
                      }),
                    },
                    r
                  );
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute z-10 h-full w-full transition-all ease-linear',
                  style: { rotate: ''.concat(u, 'deg') },
                  children: (0, t.jsx)('div', {
                    className:
                      'absolute top-0 right-2 bottom-0 my-auto h-1 w-20 rounded-full bg-red-700',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'absolute h-full w-full transition-all',
                  style: { rotate: ''.concat(s, 'deg') },
                  children: (0, t.jsx)('div', {
                    className:
                      'absolute top-0 right-2 bottom-0 my-auto h-2 w-16 rounded-full bg-white',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'absolute h-full w-full transition-all',
                  style: { rotate: ''.concat(i, 'deg') },
                  children: (0, t.jsx)('div', {
                    className:
                      'absolute top-0 right-2 bottom-0 my-auto h-2 w-12 rounded-full bg-white',
                  }),
                }),
              ],
            }),
          }),
        }),
      });
    };
    e.s(['WidgetClockDigital', () => s], 31758);
    var o = e.i(98387),
      u = e.i(1143);
    let s = () => {
      let e = new Date(),
        [n, s] = (0, r.useState)({
          year: e.getFullYear(),
          month: e.getMonth(),
          date: e.getDate(),
          weekday: e.getDay(),
          hours: e.getHours(),
          minutes: e.getMinutes(),
          seconds: e.getSeconds(),
          milliseconds: e.getMilliseconds(),
          timezone: -(e.getTimezoneOffset() / 60),
        });
      return (
        (0, r.useEffect)(() => {
          let e = setInterval(() => {
            let e = new Date();
            s({
              year: e.getFullYear(),
              month: e.getMonth(),
              date: e.getDate(),
              weekday: e.getDay(),
              hours: e.getHours(),
              minutes: e.getMinutes(),
              seconds: e.getSeconds(),
              milliseconds: e.getMilliseconds(),
              timezone: -(e.getTimezoneOffset() / 60),
            });
          }, 1);
          return () => clearInterval(e);
        }),
        (0, t.jsx)('div', {
          className:
            'shadow-3xl aspect-square w-full max-w-60 rounded-3xl border border-white bg-neutral-900 p-8',
          children: (0, t.jsx)('div', {
            className: 'flex h-full w-full items-center justify-center',
            children: (0, t.jsxs)('div', {
              className:
                'flex flex-col items-center justify-center gap-y-2 text-neutral-100',
              children: [
                (0, t.jsxs)('p', {
                  className: 'text-sm',
                  children: [
                    (0, t.jsx)('span', {
                      className: 'uppercase',
                      children: u.months[n.month],
                    }),
                    ' ',
                    n.date,
                    (0, t.jsx)('sup', {
                      children: (0, u.getOrdinalSuffix)(n.date),
                    }),
                    ', ',
                    n.year,
                  ],
                }),
                (0, t.jsxs)('p', {
                  className: 'text-5xl uppercase',
                  children: [
                    (0, o.addZero)(n.hours),
                    ':',
                    (0, o.addZero)(n.minutes),
                    ':',
                    (0, o.addZero)(n.seconds),
                  ],
                }),
                (0, t.jsx)('p', {
                  className: 'text-sm uppercase',
                  children: u.weekdays[n.weekday],
                }),
              ],
            }),
          }),
        })
      );
    };
  },
  40441,
  (e) => {
    'use strict';
    e.s(['default', () => o]);
    var t = e.i(94601),
      r = e.i(18710),
      n = e.i(31758);
    let o = () =>
      (0, t.jsx)('div', {
        className: 'h-screen w-screen overflow-hidden bg-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'grid h-full grid-cols-1 md:grid-cols-2',
          children: [
            (0, t.jsx)('div', {
              className: 'col-span-1 h-full',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(r.WidgetClockAnalog, {}),
              }),
            }),
            (0, t.jsx)('div', {
              className: 'col-span-1 h-full',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(n.WidgetClockDigital, {}),
              }),
            }),
          ],
        }),
      });
  },
  33686,
  (e, t, r) => {
    let n = '/clock';
    ((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(40441)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([n]);
        }));
  },
  48858,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/c6efdcf8f23c5a6e.js'].map((t) => e.l(t))
      ).then(() => t(25894))
    );
  },
  73489,
  (e) => {
    e.v((t) =>
      Promise.all(
        ['static/chunks/8c29f6271705ff56.js'].map((t) => e.l(t))
      ).then(() => t(73672))
    );
  },
]);
