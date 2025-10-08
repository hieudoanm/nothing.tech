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
              c = !1,
              l = -1;
            function f() {
              c &&
                n &&
                ((c = !1),
                n.length ? (a = n.concat(a)) : (l = -1),
                a.length && d());
            }
            function d() {
              if (!c) {
                var e = i(f);
                c = !0;
                for (var t = a.length; t; ) {
                  for (n = a, a = []; ++l < t; ) n && n[l].run();
                  ((l = -1), (t = a.length));
                }
                ((n = null),
                  (c = !1),
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
              (a.push(new p(e, t)), 1 !== a.length || c || i(d));
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
      c = Symbol.for('react.consumer'),
      l = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      h = Symbol.for('react.lazy'),
      y = Symbol.for('react.activity'),
      m = Symbol.iterator,
      v = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      x = Object.assign,
      g = {};
    function b(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || v));
    }
    function _() {}
    function j(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = g),
        (this.updater = r || v));
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
    var w = (j.prototype = new _());
    ((w.constructor = j), x(w, b.prototype), (w.isPureReactComponent = !0));
    var E = Array.isArray;
    function N() {}
    var S = { H: null, A: null, T: null, S: null },
      P = Object.prototype.hasOwnProperty;
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
        s = 0;
      return (
        !(function e(t, r, n, s, i) {
          var a,
            c,
            l,
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
              (d = '' === s ? '.' + C(t, 0) : s),
              E(i)
                ? ((n = ''),
                  null != d && (n = d.replace(O, '$&/') + '/'),
                  e(i, r, n, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (k(i) &&
                    ((a = i),
                    (c =
                      n +
                      (null == i.key || (t && t.key === i.key)
                        ? ''
                        : ('' + i.key).replace(O, '$&/') + '/') +
                      d),
                    (i = T(a.type, c, a.props))),
                  r.push(i)),
              1
            );
          d = 0;
          var p = '' === s ? '.' : s + ':';
          if (E(t))
            for (var y = 0; y < t.length; y++)
              ((f = p + C((s = t[y]), y)), (d += e(s, r, n, f, i)));
          else if (
            'function' ==
            typeof (y =
              null === (l = t) || 'object' != typeof l
                ? null
                : 'function' == typeof (l = (m && l[m]) || l['@@iterator'])
                  ? l
                  : null)
          )
            for (t = y.call(t), y = 0; !(s = t.next()).done; )
              ((f = p + C((s = s.value), y++)), (d += e(s, r, n, f, i)));
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
                          ? e.then(N, N)
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
    ((r.Activity = y),
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
      (r.Component = b),
      (r.Fragment = s),
      (r.Profiler = a),
      (r.PureComponent = j),
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
        var n = x({}, e.props),
          o = e.key;
        if (null != t)
          for (u in (void 0 !== t.key && (o = '' + t.key), t))
            P.call(t, u) &&
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
            $$typeof: l,
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
          u = null;
        if (null != t)
          for (n in (void 0 !== t.key && (u = '' + t.key), t))
            P.call(t, n) &&
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
              n.then(N, A));
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
          return g;
        },
        MissingStaticPage: function () {
          return x;
        },
        NormalizeError: function () {
          return m;
        },
        PageNotFoundError: function () {
          return v;
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
          return a;
        },
        isAbsoluteUrl: function () {
          return s;
        },
        isResSent: function () {
          return l;
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
    function c(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function l(e) {
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
      if (r && l(r)) return n;
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
    class y extends Error {}
    class m extends Error {}
    class v extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = 'Cannot find module for page: ' + e));
      }
    }
    class x extends Error {
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
  10865,
  74124,
  (e) => {
    'use strict';
    e.s(['WidgetWalletBank', () => n], 10865);
    var t = e.i(94601),
      r = e.i(66709);
    let n = () => {
      let e = [
        (0, t.jsx)(r.FaWallet, {}, 'accounts'),
        (0, t.jsx)(r.FaMoneyBillTransfer, {}, 'transfer'),
        (0, t.jsx)(r.FaQrcode, {}, 'qrcode'),
        (0, t.jsx)(r.FaMoneyBill, {}, 'cash'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col p-6',
          children: [
            (0, t.jsxs)('div', {
              className: 'grid grid-cols-2 pb-2',
              children: [
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('h1', {
                    className: 'text-center font-black',
                    children: 'Wallet',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('p', {
                    className: 'text-center text-sm',
                    children: 'Techcombank',
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
    e.s(['WidgetWalletPay', () => o], 74124);
    let o = () => {
      let e = [
        (0, t.jsx)(r.FaPaypal, {}, 'paypal'),
        (0, t.jsx)(r.FaApplePay, {}, 'apple-pay'),
        (0, t.jsx)(r.FaAmazonPay, {}, 'amazon-pay'),
        (0, t.jsx)(r.FaGooglePay, {}, 'laptop'),
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
                    children: 'Pay',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('p', {
                    className: 'text-center text-sm',
                    children: 'Connected',
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
  },
  24554,
  (e) => {
    'use strict';
    e.s(['default', () => o]);
    var t = e.i(94601),
      r = e.i(10865),
      n = e.i(74124);
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
                children: (0, t.jsx)(r.WidgetWalletBank, {}),
              }),
            }),
            (0, t.jsx)('div', {
              className: 'col-span-1',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(n.WidgetWalletPay, {}),
              }),
            }),
          ],
        }),
      });
  },
  55796,
  (e, t, r) => {
    let n = '/wallet';
    ((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(24554)]),
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
