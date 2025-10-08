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
            function u() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : s;
            } catch (e) {
              t = s;
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : u;
            } catch (e) {
              r = u;
            }
            function i(e) {
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
            var l = [],
              c = !1,
              a = -1;
            function f() {
              c &&
                n &&
                ((c = !1),
                n.length ? (l = n.concat(l)) : (a = -1),
                l.length && d());
            }
            function d() {
              if (!c) {
                var e = i(f);
                c = !0;
                for (var t = l.length; t; ) {
                  for (n = l, l = []; ++a < t; ) n && n[a].run();
                  ((a = -1), (t = l.length));
                }
                ((n = null),
                  (c = !1),
                  (function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === u || !r) && clearTimeout)
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
              (l.push(new p(e, t)), 1 !== l.length || c || i(d));
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
        var s = (r[t] = { exports: {} }),
          u = !0;
        try {
          (e[t](s, s.exports, n), (u = !1));
        } finally {
          u && delete r[t];
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
      u = Symbol.for('react.fragment'),
      i = Symbol.for('react.strict_mode'),
      l = Symbol.for('react.profiler'),
      c = Symbol.for('react.consumer'),
      a = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      h = Symbol.for('react.lazy'),
      m = Symbol.for('react.activity'),
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
    function j(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || x));
    }
    function b() {}
    function _(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || x));
    }
    ((j.prototype.isReactComponent = {}),
      (j.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (j.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (b.prototype = j.prototype));
    var w = (_.prototype = new b());
    ((w.constructor = _), v(w, j.prototype), (w.isPureReactComponent = !0));
    var N = Array.isArray;
    function E() {}
    var S = { H: null, A: null, T: null, S: null },
      T = Object.prototype.hasOwnProperty;
    function P(e, t, r) {
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
    var O = /\/+/g;
    function C(e, t) {
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
    function R(e, t, r) {
      if (null == e) return e;
      var n = [],
        u = 0;
      return (
        !(function e(t, r, n, u, i) {
          var l,
            c,
            a,
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
                  case h:
                    return e((d = t._init)(t._payload), r, n, u, i);
                }
            }
          if (d)
            return (
              (i = i(t)),
              (d = '' === u ? '.' + C(t, 0) : u),
              N(i)
                ? ((n = ''),
                  null != d && (n = d.replace(O, '$&/') + '/'),
                  e(i, r, n, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (k(i) &&
                    ((l = i),
                    (c =
                      n +
                      (null == i.key || (t && t.key === i.key)
                        ? ''
                        : ('' + i.key).replace(O, '$&/') + '/') +
                      d),
                    (i = P(l.type, c, l.props))),
                  r.push(i)),
              1
            );
          d = 0;
          var p = '' === u ? '.' : u + ':';
          if (N(t))
            for (var m = 0; m < t.length; m++)
              ((f = p + C((u = t[m]), m)), (d += e(u, r, n, f, i)));
          else if (
            'function' ==
            typeof (m =
              null === (a = t) || 'object' != typeof a
                ? null
                : 'function' == typeof (a = (y && a[y]) || a['@@iterator'])
                  ? a
                  : null)
          )
            for (t = m.call(t), m = 0; !(u = t.next()).done; )
              ((f = p + C((u = u.value), m++)), (d += e(u, r, n, f, i)));
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
                u,
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
          return t.call(r, e, u++);
        }),
        n
      );
    }
    function H(e) {
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
    var A =
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
    ((r.Activity = m),
      (r.Children = {
        map: R,
        forEach: function (e, t, r) {
          R(
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
            R(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            R(e, function (e) {
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
      (r.Component = j),
      (r.Fragment = u),
      (r.Profiler = l),
      (r.PureComponent = _),
      (r.StrictMode = i),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e);
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
            T.call(t, s) &&
              'key' !== s &&
              '__self' !== s &&
              '__source' !== s &&
              ('ref' !== s || void 0 !== t.ref) &&
              (n[s] = t[s]);
        var s = arguments.length - 2;
        if (1 === s) n.children = r;
        else if (1 < s) {
          for (var u = Array(s), i = 0; i < s; i++) u[i] = arguments[i + 2];
          n.children = u;
        }
        return P(e.type, o, n);
      }),
      (r.createContext = function (e) {
        return (
          ((e = {
            $$typeof: a,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: c, _context: e }),
          e
        );
      }),
      (r.createElement = function (e, t, r) {
        var n,
          o = {},
          s = null;
        if (null != t)
          for (n in (void 0 !== t.key && (s = '' + t.key), t))
            T.call(t, n) &&
              'key' !== n &&
              '__self' !== n &&
              '__source' !== n &&
              (o[n] = t[n]);
        var u = arguments.length - 2;
        if (1 === u) o.children = r;
        else if (1 < u) {
          for (var i = Array(u), l = 0; l < u; l++) i[l] = arguments[l + 2];
          o.children = i;
        }
        if (e && e.defaultProps)
          for (n in (u = e.defaultProps)) void 0 === o[n] && (o[n] = u[n]);
        return P(e, s, o);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = k),
      (r.lazy = function (e) {
        return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: H };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (r.startTransition = function (e) {
        var t = S.T,
          r = {};
        S.T = r;
        try {
          var n = e(),
            o = S.S;
          (null !== o && o(r, n),
            'object' == typeof n &&
              null !== n &&
              'function' == typeof n.then &&
              n.then(E, A));
        } catch (e) {
          A(e);
        } finally {
          (null !== t && null !== r.types && (t.types = r.types), (S.T = t));
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh();
      }),
      (r.use = function (e) {
        return S.H.use(e);
      }),
      (r.useActionState = function (e, t, r) {
        return S.H.useActionState(e, t, r);
      }),
      (r.useCallback = function (e, t) {
        return S.H.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return S.H.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t);
      }),
      (r.useEffect = function (e, t) {
        return S.H.useEffect(e, t);
      }),
      (r.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e);
      }),
      (r.useId = function () {
        return S.H.useId();
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return S.H.useImperativeHandle(e, t, r);
      }),
      (r.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return S.H.useMemo(e, t);
      }),
      (r.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t);
      }),
      (r.useReducer = function (e, t, r) {
        return S.H.useReducer(e, t, r);
      }),
      (r.useRef = function (e) {
        return S.H.useRef(e);
      }),
      (r.useState = function (e) {
        return S.H.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return S.H.useSyncExternalStore(e, t, r);
      }),
      (r.useTransition = function () {
        return S.H.useTransition();
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
      for (var u in e)
        if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
          var i = s ? Object.getOwnPropertyDescriptor(e, u) : null;
          i && (i.get || i.set)
            ? Object.defineProperty(o, u, i)
            : (o[u] = e[u]);
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
          return m;
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
          return h;
        },
        WEB_VITALS: function () {
          return n;
        },
        execOnce: function () {
          return o;
        },
        getDisplayName: function () {
          return c;
        },
        getLocationOrigin: function () {
          return i;
        },
        getURL: function () {
          return l;
        },
        isAbsoluteUrl: function () {
          return u;
        },
        isResSent: function () {
          return a;
        },
        loadGetInitialProps: function () {
          return d;
        },
        normalizeRepeatedSlashes: function () {
          return f;
        },
        stringifyError: function () {
          return j;
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
      u = (e) => s.test(e);
    function i() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + '//' + t + (r ? ':' + r : '');
    }
    function l() {
      let { href: e } = window.location,
        t = i();
      return e.substring(t.length);
    }
    function c(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function a(e) {
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
      if (r && a(r)) return n;
      if (!n)
        throw Object.defineProperty(
          Error(
            '"' +
              c(e) +
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
    class m extends Error {}
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
    function j(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  98925,
  16381,
  (e) => {
    'use strict';
    e.s(['WidgetMusicApps', () => n], 98925);
    var t = e.i(94601),
      r = e.i(66709);
    let n = () => {
      let e = [
        (0, t.jsx)(r.FaApple, {}, 'apple-music'),
        (0, t.jsx)(r.FaSpotify, {}, 'spotify'),
        (0, t.jsx)(r.FaSoundcloud, {}, 'soundcloud'),
        (0, t.jsx)(r.FaYoutube, {}, 'youtube-music'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-6',
          children: [
            (0, t.jsxs)('div', {
              className: 'grid grid-cols-2 items-center pb-2',
              children: [
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('h1', {
                    className: 'text-center font-black',
                    children: 'Music',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('p', {
                    className: 'text-center text-sm',
                    children: 'Default',
                  }),
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2',
              children: e.map((e, r) =>
                (0, t.jsx)(
                  'div',
                  {
                    className: 'col-span-1',
                    children: (0, t.jsx)('div', {
                      className:
                        'flex h-full w-full items-center justify-center',
                      children: (0, t.jsx)('div', {
                        className:
                          'flex aspect-square w-[75%] items-center justify-center rounded-full bg-white text-4xl text-black hover:bg-red-500 hover:text-neutral-100',
                        children: e,
                      }),
                    }),
                  },
                  'item' + r
                )
              ),
            }),
          ],
        }),
      });
    };
    e.s(['WidgetMusicPlayer', () => s], 16381);
    var o = e.i(36960);
    let s = () => {
      let [e, n] = (0, o.useState)(!1);
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col p-8',
          children: [
            (0, t.jsx)('div', {
              className: 'mb-2 text-center',
              children: (0, t.jsxs)('p', {
                className: 'truncate text-xl',
                children: [
                  (0, t.jsx)('span', {
                    className: 'text-neutral-300',
                    children: 'Eminem',
                  }),
                  ' -',
                  ' ',
                  (0, t.jsx)('span', {
                    className: 'font-black',
                    children: 'Lose Yourself',
                  }),
                ],
              }),
            }),
            (0, t.jsxs)('div', {
              className: 'flex items-center gap-x-2',
              children: [
                (0, t.jsx)('p', { className: 'text-xs', children: '0:00' }),
                (0, t.jsx)('div', {
                  className: 'flex grow flex-col items-center gap-y-2',
                  children: (0, t.jsx)('div', {
                    className: 'h-2 w-full rounded-full border border-white',
                    children: (0, t.jsx)('div', {
                      className: 'h-full bg-white',
                      style: { width: '50%' },
                    }),
                  }),
                }),
                (0, t.jsx)('p', { className: 'text-xs', children: '5:26' }),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'grow',
              children: (0, t.jsxs)('div', {
                className: 'grid h-full grid-cols-3',
                children: [
                  (0, t.jsx)('div', {
                    className: 'col-span-1',
                    children: (0, t.jsx)('div', {
                      className: 'flex h-full items-center justify-start',
                      children: (0, t.jsx)(r.FaBackward, {
                        className: 'text-2xl',
                      }),
                    }),
                  }),
                  (0, t.jsx)('div', {
                    className: 'col-span-1',
                    children: (0, t.jsx)('button', {
                      type: 'button',
                      onClick: () => n(!e),
                      className:
                        'flex h-full w-full items-center justify-center',
                      children: e
                        ? (0, t.jsx)(r.FaPlay, { className: 'text-4xl' })
                        : (0, t.jsx)(r.FaPause, { className: 'text-4xl' }),
                    }),
                  }),
                  (0, t.jsx)('div', {
                    className: 'col-span-1',
                    children: (0, t.jsx)('div', {
                      className: 'flex h-full items-center justify-end',
                      children: (0, t.jsx)(r.FaForward, {
                        className: 'text-2xl',
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, t.jsxs)('div', {
              className: 'flex items-center gap-x-2',
              children: [
                (0, t.jsx)(r.FaVolumeOff, {}),
                (0, t.jsx)('div', {
                  className: 'flex grow flex-col items-center gap-y-2',
                  children: (0, t.jsx)('div', {
                    className: 'h-2 w-full rounded-full border border-white',
                    children: (0, t.jsx)('div', {
                      className: 'h-full bg-white',
                      style: { width: '50%' },
                    }),
                  }),
                }),
                (0, t.jsx)(r.FaVolumeHigh, {}),
              ],
            }),
          ],
        }),
      });
    };
  },
  19378,
  (e) => {
    'use strict';
    e.s(['default', () => o]);
    var t = e.i(94601),
      r = e.i(98925),
      n = e.i(16381);
    let o = () =>
      (0, t.jsx)('div', {
        className: 'h-screen w-screen overflow-hidden bg-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'grid h-full grid-cols-1 md:grid-cols-2',
          children: [
            (0, t.jsx)('div', {
              className: 'col-span-1',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(n.WidgetMusicPlayer, {}),
              }),
            }),
            (0, t.jsx)('div', {
              className: 'col-span-1',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(r.WidgetMusicApps, {}),
              }),
            }),
          ],
        }),
      });
  },
  93979,
  (e, t, r) => {
    let n = '/music';
    ((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(19378)]),
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
