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
            function s() {
              throw Error('setTimeout has not been defined');
            }
            function a() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : s;
            } catch (e) {
              t = s;
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              r = a;
            }
            function u(e) {
              if (t === setTimeout) return setTimeout(e, 0);
              if ((t === s || !t) && setTimeout)
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
            var i = [],
              l = !1,
              c = -1;
            function f() {
              l &&
                n &&
                ((l = !1),
                n.length ? (i = n.concat(i)) : (c = -1),
                i.length && d());
            }
            function d() {
              if (!l) {
                var e = u(f);
                l = !0;
                for (var t = i.length; t; ) {
                  for (n = i, i = []; ++c < t; ) n && n[c].run();
                  ((c = -1), (t = i.length));
                }
                ((n = null),
                  (l = !1),
                  (function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout)
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
            function m() {}
            ((o.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              (i.push(new p(e, t)), 1 !== i.length || l || u(d));
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
              (o.on = m),
              (o.addListener = m),
              (o.once = m),
              (o.off = m),
              (o.removeListener = m),
              (o.removeAllListeners = m),
              (o.emit = m),
              (o.prependListener = m),
              (o.prependOnceListener = m),
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
        var s = (r[t] = { exports: {} }),
          a = !0;
        try {
          (e[t](s, s.exports, n), (a = !1));
        } finally {
          a && delete r[t];
        }
        return s.exports;
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
        for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
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
      s = Symbol.for('react.portal'),
      a = Symbol.for('react.fragment'),
      u = Symbol.for('react.strict_mode'),
      i = Symbol.for('react.profiler'),
      l = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      m = Symbol.for('react.lazy'),
      h = Symbol.for('react.activity'),
      y = Symbol.iterator,
      x = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      g = {};
    function b(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || x));
    }
    function _() {}
    function j(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || x));
    }
    ((b.prototype.isReactComponent = {}),
      (b.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (b.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (_.prototype = b.prototype));
    var N = (j.prototype = new _());
    ((N.constructor = j), v(N, b.prototype), (N.isPureReactComponent = !0));
    var w = Array.isArray;
    function E() {}
    var k = { H: null, A: null, T: null, S: null },
      P = Object.prototype.hasOwnProperty;
    function O(e, t, r) {
      var n = r.ref;
      return {
        $$typeof: o,
        type: e,
        key: t,
        ref: void 0 !== n ? n : null,
        props: r,
      };
    }
    function S(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var C = /\/+/g;
    function T(e, t) {
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
    function M(e, t, r) {
      if (null == e) return e;
      var n = [],
        a = 0;
      return (
        !(function e(t, r, n, a, u) {
          var i,
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
                  case s:
                    d = !0;
                    break;
                  case m:
                    return e((d = t._init)(t._payload), r, n, a, u);
                }
            }
          if (d)
            return (
              (u = u(t)),
              (d = '' === a ? '.' + T(t, 0) : a),
              w(u)
                ? ((n = ''),
                  null != d && (n = d.replace(C, '$&/') + '/'),
                  e(u, r, n, '', function (e) {
                    return e;
                  }))
                : null != u &&
                  (S(u) &&
                    ((i = u),
                    (l =
                      n +
                      (null == u.key || (t && t.key === u.key)
                        ? ''
                        : ('' + u.key).replace(C, '$&/') + '/') +
                      d),
                    (u = O(i.type, l, i.props))),
                  r.push(u)),
              1
            );
          d = 0;
          var p = '' === a ? '.' : a + ':';
          if (w(t))
            for (var h = 0; h < t.length; h++)
              ((f = p + T((a = t[h]), h)), (d += e(a, r, n, f, u)));
          else if (
            'function' ==
            typeof (h =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (y && c[y]) || c['@@iterator'])
                  ? c
                  : null)
          )
            for (t = h.call(t), h = 0; !(a = t.next()).done; )
              ((f = p + T((a = a.value), h++)), (d += e(a, r, n, f, u)));
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
                          ? e.then(E, E)
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
                a,
                u
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
          return t.call(r, e, a++);
        }),
        n
      );
    }
    function F(e) {
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
    var R =
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
    ((r.Activity = h),
      (r.Children = {
        map: M,
        forEach: function (e, t, r) {
          M(
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
            M(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            M(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      }),
      (r.Component = b),
      (r.Fragment = a),
      (r.Profiler = i),
      (r.PureComponent = j),
      (r.StrictMode = u),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return k.H.useMemoCache(e);
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
          for (s in (void 0 !== t.key && (o = '' + t.key), t))
            P.call(t, s) &&
              'key' !== s &&
              '__self' !== s &&
              '__source' !== s &&
              ('ref' !== s || void 0 !== t.ref) &&
              (n[s] = t[s]);
        var s = arguments.length - 2;
        if (1 === s) n.children = r;
        else if (1 < s) {
          for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
          n.children = a;
        }
        return O(e.type, o, n);
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
          s = null;
        if (null != t)
          for (n in (void 0 !== t.key && (s = '' + t.key), t))
            P.call(t, n) &&
              'key' !== n &&
              '__self' !== n &&
              '__source' !== n &&
              (o[n] = t[n]);
        var a = arguments.length - 2;
        if (1 === a) o.children = r;
        else if (1 < a) {
          for (var u = Array(a), i = 0; i < a; i++) u[i] = arguments[i + 2];
          o.children = u;
        }
        if (e && e.defaultProps)
          for (n in (a = e.defaultProps)) void 0 === o[n] && (o[n] = a[n]);
        return O(e, s, o);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = S),
      (r.lazy = function (e) {
        return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: F };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (r.startTransition = function (e) {
        var t = k.T,
          r = {};
        k.T = r;
        try {
          var n = e(),
            o = k.S;
          (null !== o && o(r, n),
            'object' == typeof n &&
              null !== n &&
              'function' == typeof n.then &&
              n.then(E, R));
        } catch (e) {
          R(e);
        } finally {
          (null !== t && null !== r.types && (t.types = r.types), (k.T = t));
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return k.H.useCacheRefresh();
      }),
      (r.use = function (e) {
        return k.H.use(e);
      }),
      (r.useActionState = function (e, t, r) {
        return k.H.useActionState(e, t, r);
      }),
      (r.useCallback = function (e, t) {
        return k.H.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return k.H.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return k.H.useDeferredValue(e, t);
      }),
      (r.useEffect = function (e, t) {
        return k.H.useEffect(e, t);
      }),
      (r.useEffectEvent = function (e) {
        return k.H.useEffectEvent(e);
      }),
      (r.useId = function () {
        return k.H.useId();
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return k.H.useImperativeHandle(e, t, r);
      }),
      (r.useInsertionEffect = function (e, t) {
        return k.H.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return k.H.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return k.H.useMemo(e, t);
      }),
      (r.useOptimistic = function (e, t) {
        return k.H.useOptimistic(e, t);
      }),
      (r.useReducer = function (e, t, r) {
        return k.H.useReducer(e, t, r);
      }),
      (r.useRef = function (e) {
        return k.H.useRef(e);
      }),
      (r.useState = function (e) {
        return k.H.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return k.H.useSyncExternalStore(e, t, r);
      }),
      (r.useTransition = function () {
        return k.H.useTransition();
      }),
      (r.version = '19.2.0'));
  },
  36960,
  (e, t, r) => {
    'use strict';
    t.exports = e.r(14513);
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
        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
          var u = s ? Object.getOwnPropertyDescriptor(e, a) : null;
          u && (u.get || u.set)
            ? Object.defineProperty(o, a, u)
            : (o[a] = e[a]);
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
          return h;
        },
        MiddlewareNotFoundError: function () {
          return g;
        },
        MissingStaticPage: function () {
          return v;
        },
        NormalizeError: function () {
          return y;
        },
        PageNotFoundError: function () {
          return x;
        },
        SP: function () {
          return p;
        },
        ST: function () {
          return m;
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
          return u;
        },
        getURL: function () {
          return i;
        },
        isAbsoluteUrl: function () {
          return a;
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
          return b;
        },
      }));
    let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function o(e) {
      let t,
        r = !1;
      return function () {
        for (var n = arguments.length, o = Array(n), s = 0; s < n; s++)
          o[s] = arguments[s];
        return (r || ((r = !0), (t = e(...o))), t);
      };
    }
    let s = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      a = (e) => s.test(e);
    function u() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + '//' + t + (r ? ':' + r : '');
    }
    function i() {
      let { href: e } = window.location,
        t = u();
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
      m =
        p &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class h extends Error {}
    class y extends Error {}
    class x extends Error {
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
    class g extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function b(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  8271,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useIntersection', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    let n = e.r(36960),
      o = e.r(56926),
      s = 'function' == typeof IntersectionObserver,
      a = new Map(),
      u = [];
    function i(e) {
      let { rootRef: t, rootMargin: r, disabled: i } = e,
        l = i || !s,
        [c, f] = (0, n.useState)(!1),
        d = (0, n.useRef)(null),
        p = (0, n.useCallback)((e) => {
          d.current = e;
        }, []);
      return (
        (0, n.useEffect)(() => {
          if (s) {
            if (l || c) return;
            let e = d.current;
            if (e && e.tagName)
              return (function (e, t, r) {
                let {
                  id: n,
                  observer: o,
                  elements: s,
                } = (function (e) {
                  let t,
                    r = { root: e.root || null, margin: e.rootMargin || '' },
                    n = u.find(
                      (e) => e.root === r.root && e.margin === r.margin
                    );
                  if (n && (t = a.get(n))) return t;
                  let o = new Map();
                  return (
                    (t = {
                      id: r,
                      observer: new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            r = e.isIntersecting || e.intersectionRatio > 0;
                          t && r && t(r);
                        });
                      }, e),
                      elements: o,
                    }),
                    u.push(r),
                    a.set(r, t),
                    t
                  );
                })(r);
                return (
                  s.set(e, t),
                  o.observe(e),
                  function () {
                    if ((s.delete(e), o.unobserve(e), 0 === s.size)) {
                      (o.disconnect(), a.delete(n));
                      let e = u.findIndex(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                      e > -1 && u.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && f(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: r,
              });
          } else if (!c) {
            let e = (0, o.requestIdleCallback)(() => f(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [l, r, t, c, d.current]),
        [
          p,
          c,
          (0, n.useCallback)(() => {
            f(!1);
          }, []),
        ]
      );
    }
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  54e3,
  (e, t, r) => {
    'use strict';
    function n(e, t, r, n) {
      return !1;
    }
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'getDomainLocale', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      e.r(59214),
      ('function' == typeof r.default ||
        ('object' == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, '__esModule', { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default)));
  },
  9244,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'useMergedRef', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    let n = e.r(36960);
    function o(e, t) {
      let r = (0, n.useRef)(null),
        o = (0, n.useRef)(null);
      return (0, n.useCallback)(
        (n) => {
          if (null === n) {
            let e = r.current;
            e && ((r.current = null), e());
            let t = o.current;
            t && ((o.current = null), t());
          } else (e && (r.current = s(e, n)), t && (o.current = s(t, n)));
        },
        [e, t]
      );
    }
    function s(e, t) {
      if ('function' != typeof e)
        return (
          (e.current = t),
          () => {
            e.current = null;
          }
        );
      {
        let r = e(t);
        return 'function' == typeof r ? r : () => e(null);
      }
    }
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  942,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      Object.defineProperty(r, 'errorOnce', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let n = (e) => {};
  },
  60694,
  (e, t, r) => {
    'use strict';
    (Object.defineProperty(r, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var r in t)
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      })(r, {
        default: function () {
          return j;
        },
        useLinkStatus: function () {
          return _;
        },
      }));
    let n = e.r(87602),
      o = e.r(94601),
      s = n._(e.r(36960)),
      a = e.r(30356),
      u = e.r(57138),
      i = e.r(87215),
      l = e.r(75288),
      c = e.r(32958),
      f = e.r(1379),
      d = e.r(8271),
      p = e.r(54e3),
      m = e.r(94243),
      h = e.r(9244);
    e.r(942);
    let y = new Set();
    function x(e, t, r, n) {
      if ('undefined' != typeof window && (0, u.isLocalURL)(t)) {
        if (!n.bypassPrefetchedCheck) {
          let o =
            t +
            '%' +
            r +
            '%' +
            (void 0 !== n.locale
              ? n.locale
              : 'locale' in e
                ? e.locale
                : void 0);
          if (y.has(o)) return;
          y.add(o);
        }
        e.prefetch(t, r, n).catch((e) => {});
      }
    }
    function v(e) {
      return 'string' == typeof e ? e : (0, i.formatUrl)(e);
    }
    let g = s.default.forwardRef(function (e, t) {
        let r,
          n,
          {
            href: i,
            as: y,
            children: g,
            prefetch: b = null,
            passHref: _,
            replace: j,
            shallow: N,
            scroll: w,
            locale: E,
            onClick: k,
            onNavigate: P,
            onMouseEnter: O,
            onTouchStart: S,
            legacyBehavior: C = !1,
            ...T
          } = e;
        ((r = g),
          C &&
            ('string' == typeof r || 'number' == typeof r) &&
            (r = (0, o.jsx)('a', { children: r })));
        let M = s.default.useContext(f.RouterContext),
          F = !1 !== b,
          { href: R, as: L } = s.default.useMemo(() => {
            if (!M) {
              let e = v(i);
              return { href: e, as: y ? v(y) : e };
            }
            let [e, t] = (0, a.resolveHref)(M, i, !0);
            return { href: e, as: y ? (0, a.resolveHref)(M, y) : t || e };
          }, [M, i, y]),
          H = s.default.useRef(R),
          I = s.default.useRef(L);
        C && (n = s.default.Children.only(r));
        let A = C ? n && 'object' == typeof n && n.ref : t,
          [$, D, U] = (0, d.useIntersection)({ rootMargin: '200px' }),
          B = s.default.useCallback(
            (e) => {
              ((I.current !== L || H.current !== R) &&
                (U(), (I.current = L), (H.current = R)),
                $(e));
            },
            [L, R, U, $]
          ),
          q = (0, h.useMergedRef)(B, A);
        s.default.useEffect(() => {
          M && D && F && x(M, R, L, { locale: E });
        }, [L, R, D, E, F, null == M ? void 0 : M.locale, M]);
        let z = {
          ref: q,
          onClick(e) {
            (C || 'function' != typeof k || k(e),
              C &&
                n.props &&
                'function' == typeof n.props.onClick &&
                n.props.onClick(e),
              M &&
                (e.defaultPrevented ||
                  (function (e, t, r, n, o, s, a, i, l) {
                    let { nodeName: c } = e.currentTarget;
                    if (
                      !(
                        ('A' === c.toUpperCase() &&
                          (function (e) {
                            let t = e.currentTarget.getAttribute('target');
                            return (
                              (t && '_self' !== t) ||
                              e.metaKey ||
                              e.ctrlKey ||
                              e.shiftKey ||
                              e.altKey ||
                              (e.nativeEvent && 2 === e.nativeEvent.which)
                            );
                          })(e)) ||
                        e.currentTarget.hasAttribute('download')
                      )
                    ) {
                      if (!(0, u.isLocalURL)(r)) {
                        o && (e.preventDefault(), location.replace(r));
                        return;
                      }
                      (e.preventDefault(),
                        (() => {
                          if (l) {
                            let e = !1;
                            if (
                              (l({
                                preventDefault: () => {
                                  e = !0;
                                },
                              }),
                              e)
                            )
                              return;
                          }
                          let e = null == a || a;
                          'beforePopState' in t
                            ? t[o ? 'replace' : 'push'](r, n, {
                                shallow: s,
                                locale: i,
                                scroll: e,
                              })
                            : t[o ? 'replace' : 'push'](n || r, { scroll: e });
                        })());
                    }
                  })(e, M, R, L, j, N, w, E, P)));
          },
          onMouseEnter(e) {
            (C || 'function' != typeof O || O(e),
              C &&
                n.props &&
                'function' == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              M &&
                x(M, R, L, {
                  locale: E,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                }));
          },
          onTouchStart: function (e) {
            (C || 'function' != typeof S || S(e),
              C &&
                n.props &&
                'function' == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              M &&
                x(M, R, L, {
                  locale: E,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                }));
          },
        };
        if ((0, l.isAbsoluteUrl)(L)) z.href = L;
        else if (!C || _ || ('a' === n.type && !('href' in n.props))) {
          let e = void 0 !== E ? E : null == M ? void 0 : M.locale;
          z.href =
            ((null == M ? void 0 : M.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                L,
                e,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              )) ||
            (0, m.addBasePath)(
              (0, c.addLocale)(L, e, null == M ? void 0 : M.defaultLocale)
            );
        }
        return C
          ? s.default.cloneElement(n, z)
          : (0, o.jsx)('a', { ...T, ...z, children: r });
      }),
      b = (0, s.createContext)({ pending: !1 }),
      _ = () => (0, s.useContext)(b),
      j = g;
    ('function' == typeof r.default ||
      ('object' == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, '__esModule', { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  41594,
  (e, t, r) => {
    t.exports = e.r(60694);
  },
  87856,
  (e) => {
    'use strict';
    e.s(['default', () => o]);
    var t = e.i(94601),
      r = e.i(41594),
      n = e.i(66709);
    let o = () => {
      let e = [
        {
          id: 'browser',
          href: 'browser',
          name: 'browser',
          shortName: 'browser',
          icon: (0, t.jsx)(n.FaFirefoxBrowser, { className: 'text-2xl' }),
        },
        {
          id: 'calendar',
          href: 'calendar',
          name: 'calendar',
          shortName: 'calendar',
          icon: (0, t.jsx)(n.FaCalendarDays, { className: 'text-2xl' }),
        },
        {
          id: 'calculator',
          href: 'calculator',
          name: 'calculator',
          shortName: 'calculator',
          icon: (0, t.jsx)(n.FaCalculator, { className: 'text-2xl' }),
        },
        {
          id: 'clock',
          href: 'clock',
          name: 'clock',
          shortName: 'clock',
          icon: (0, t.jsx)(n.FaClock, { className: 'text-2xl' }),
        },
        {
          id: 'colors',
          href: 'colors',
          name: 'colors',
          shortName: 'colors',
          icon: (0, t.jsx)(n.FaPalette, { className: 'text-2xl' }),
        },
        {
          id: 'compass',
          href: 'compass',
          name: 'compass',
          shortName: 'compass',
          icon: (0, t.jsx)(n.FaCompass, { className: 'text-2xl' }),
        },
        {
          id: 'devices',
          href: 'devices',
          name: 'devices',
          shortName: 'devices',
          icon: (0, t.jsx)(n.FaMobile, { className: 'text-2xl' }),
        },
        {
          id: 'files',
          href: 'files',
          name: 'files',
          shortName: 'files',
          icon: (0, t.jsx)(n.FaFileZipper, { className: 'text-2xl' }),
        },
        {
          id: 'fitness',
          href: 'fitness',
          name: 'fitness',
          shortName: 'fitness',
          icon: (0, t.jsx)(n.FaHeart, { className: 'text-2xl' }),
        },
        {
          id: 'games',
          href: 'games',
          name: 'games',
          shortName: 'games',
          icon: (0, t.jsx)(n.FaGamepad, { className: 'text-2xl' }),
        },
        {
          id: 'health',
          href: 'health',
          name: 'health',
          shortName: 'health',
          icon: (0, t.jsx)(n.FaTemperatureFull, { className: 'text-2xl' }),
        },
        {
          id: 'home',
          href: 'home',
          name: 'home',
          shortName: 'home',
          icon: (0, t.jsx)(n.FaHouseChimney, { className: 'text-2xl' }),
        },
        {
          id: 'mail',
          href: 'mail',
          name: 'mail',
          shortName: 'mail',
          icon: (0, t.jsx)(n.FaEnvelopesBulk, { className: 'text-2xl' }),
        },
        {
          id: 'maps',
          href: 'maps',
          name: 'maps',
          shortName: 'maps',
          icon: (0, t.jsx)(n.FaMapLocationDot, { className: 'text-2xl' }),
        },
        {
          id: 'messages',
          href: 'messages',
          name: 'messages',
          shortName: 'messages',
          icon: (0, t.jsx)(n.FaMessage, { className: 'text-2xl' }),
        },
        {
          id: 'music',
          href: 'music',
          name: 'music',
          shortName: 'music',
          icon: (0, t.jsx)(n.FaMusic, { className: 'text-2xl' }),
        },
        {
          id: 'news',
          href: 'news',
          name: 'news',
          shortName: 'news',
          icon: (0, t.jsx)(n.FaNewspaper, { className: 'text-2xl' }),
        },
        {
          id: 'notes',
          href: 'notes',
          name: 'notes',
          shortName: 'notes',
          icon: (0, t.jsx)(n.FaFileLines, { className: 'text-2xl' }),
        },
        {
          id: 'phone',
          href: 'phone',
          name: 'phone',
          shortName: 'phone',
          icon: (0, t.jsx)(n.FaPhone, { className: 'text-2xl' }),
        },
        {
          id: 'photos',
          href: 'photos',
          name: 'photos',
          shortName: 'photos',
          icon: (0, t.jsx)(n.FaImages, { className: 'mx-auto text-2xl' }),
        },
        {
          id: 'settings',
          href: 'settings',
          name: 'settings',
          shortName: 'settings',
          icon: (0, t.jsx)(n.FaGear, { className: 'text-2xl' }),
        },
        {
          id: 'sports',
          href: 'sports',
          name: 'sports',
          shortName: 'sports',
          icon: (0, t.jsx)(n.FaFutbol, { className: 'text-2xl' }),
        },
        {
          id: 'stock',
          href: 'stock',
          name: 'stock',
          shortName: 'stock',
          icon: (0, t.jsx)(n.FaChartLine, { className: 'text-2xl' }),
        },
        {
          id: 'tasks',
          href: 'tasks',
          name: 'tasks',
          shortName: 'tasks',
          icon: (0, t.jsx)(n.FaRectangleList, { className: 'text-2xl' }),
        },
        {
          id: 'translate',
          href: 'translate',
          name: 'translate',
          shortName: 'translate',
          icon: (0, t.jsx)(n.FaLanguage, { className: 'text-2xl' }),
        },
        {
          id: 'transportation',
          href: 'transportation',
          name: 'transportation',
          shortName: 'transportation',
          icon: (0, t.jsx)(n.FaBus, { className: 'text-2xl' }),
        },
        {
          id: 'videos',
          href: 'videos',
          name: 'videos',
          shortName: 'videos',
          icon: (0, t.jsx)(n.FaYoutube, { className: 'text-2xl' }),
        },
        {
          id: 'wallet',
          href: 'wallet',
          name: 'wallet',
          shortName: 'wallet',
          icon: (0, t.jsx)(n.FaWallet, { className: 'text-2xl' }),
        },
      ];
      return (0, t.jsx)('div', {
        className: 'h-screen w-screen overflow-hidden md:h-screen',
        children: (0, t.jsx)('div', {
          className:
            'container mx-auto flex h-full flex-col gap-y-4 p-4 md:gap-y-8 md:p-8',
          children: (0, t.jsx)('div', {
            className:
              'grid h-full grid-cols-4 grid-rows-7 gap-4 md:grid-cols-7 md:grid-rows-4 md:gap-8',
            children: e.map((e) => {
              let {
                id: n = '',
                href: o = '',
                name: s = '',
                shortName: a = '',
                icon: u = (0, t.jsx)(t.Fragment, {}),
              } = e;
              return (0, t.jsx)(
                'div',
                {
                  className: 'col-span-1 row-span-1',
                  children: (0, t.jsx)('div', {
                    className: 'flex h-full items-center justify-center',
                    children: (0, t.jsxs)(r.default, {
                      href: '/'.concat(o),
                      className:
                        'flex flex-col items-center gap-y-1 md:gap-y-2',
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'flex aspect-square w-12 items-center justify-center overflow-hidden rounded-full border border-neutral-800 md:w-16',
                          children: u,
                        }),
                        (0, t.jsxs)('p', {
                          className:
                            'w-full truncate text-center text-xs font-semibold md:text-sm',
                          children: [
                            (0, t.jsx)('span', {
                              className: 'inline lowercase md:hidden',
                              children: a,
                            }),
                            (0, t.jsx)('span', {
                              className: 'hidden md:inline',
                              children: s,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                n
              );
            }),
          }),
        }),
      });
    };
  },
  55075,
  (e, t, r) => {
    ((window.__NEXT_P = window.__NEXT_P || []).push(['/', () => e.r(87856)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push(['/']);
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
