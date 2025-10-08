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
            function i() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : u;
            } catch (e) {
              t = u;
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
              r = i;
            }
            function a(e) {
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
            var c = [],
              l = !1,
              s = -1;
            function f() {
              l &&
                n &&
                ((l = !1),
                n.length ? (c = n.concat(c)) : (s = -1),
                c.length && d());
            }
            function d() {
              if (!l) {
                var e = a(f);
                l = !0;
                for (var t = c.length; t; ) {
                  for (n = c, c = []; ++s < t; ) n && n[s].run();
                  ((s = -1), (t = c.length));
                }
                ((n = null),
                  (l = !1),
                  (function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === i || !r) && clearTimeout)
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
            function g() {}
            ((o.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              (c.push(new p(e, t)), 1 !== c.length || l || a(d));
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
              (o.on = g),
              (o.addListener = g),
              (o.once = g),
              (o.off = g),
              (o.removeListener = g),
              (o.removeAllListeners = g),
              (o.emit = g),
              (o.prependListener = g),
              (o.prependOnceListener = g),
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
          i = !0;
        try {
          (e[t](u, u.exports, n), (i = !1));
        } finally {
          i && delete r[t];
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
      i = Symbol.for('react.fragment'),
      a = Symbol.for('react.strict_mode'),
      c = Symbol.for('react.profiler'),
      l = Symbol.for('react.consumer'),
      s = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      g = Symbol.for('react.lazy'),
      h = Symbol.for('react.activity'),
      y = Symbol.iterator,
      b = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      m = Object.assign,
      v = {};
    function _(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = r || b));
    }
    function w() {}
    function E(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = r || b));
    }
    ((_.prototype.isReactComponent = {}),
      (_.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'takes an object of state variables to update or a function which returns an object of state variables.'
          );
        this.updater.enqueueSetState(this, e, t, 'setState');
      }),
      (_.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
      }),
      (w.prototype = _.prototype));
    var S = (E.prototype = new w());
    ((S.constructor = E), m(S, _.prototype), (S.isPureReactComponent = !0));
    var j = Array.isArray;
    function x() {}
    var T = { H: null, A: null, T: null, S: null },
      P = Object.prototype.hasOwnProperty;
    function k(e, t, r) {
      var n = r.ref;
      return {
        $$typeof: o,
        type: e,
        key: t,
        ref: void 0 !== n ? n : null,
        props: r,
      };
    }
    function O(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var C = /\/+/g;
    function N(e, t) {
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
        i = 0;
      return (
        !(function e(t, r, n, i, a) {
          var c,
            l,
            s,
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
                  case g:
                    return e((d = t._init)(t._payload), r, n, i, a);
                }
            }
          if (d)
            return (
              (a = a(t)),
              (d = '' === i ? '.' + N(t, 0) : i),
              j(a)
                ? ((n = ''),
                  null != d && (n = d.replace(C, '$&/') + '/'),
                  e(a, r, n, '', function (e) {
                    return e;
                  }))
                : null != a &&
                  (O(a) &&
                    ((c = a),
                    (l =
                      n +
                      (null == a.key || (t && t.key === a.key)
                        ? ''
                        : ('' + a.key).replace(C, '$&/') + '/') +
                      d),
                    (a = k(c.type, l, c.props))),
                  r.push(a)),
              1
            );
          d = 0;
          var p = '' === i ? '.' : i + ':';
          if (j(t))
            for (var h = 0; h < t.length; h++)
              ((f = p + N((i = t[h]), h)), (d += e(i, r, n, f, a)));
          else if (
            'function' ==
            typeof (h =
              null === (s = t) || 'object' != typeof s
                ? null
                : 'function' == typeof (s = (y && s[y]) || s['@@iterator'])
                  ? s
                  : null)
          )
            for (t = h.call(t), h = 0; !(i = t.next()).done; )
              ((f = p + N((i = i.value), h++)), (d += e(i, r, n, f, a)));
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
                          ? e.then(x, x)
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
                i,
                a
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
          return t.call(r, e, i++);
        }),
        n
      );
    }
    function M(e) {
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
    var H =
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
          if (!O(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      }),
      (r.Component = _),
      (r.Fragment = i),
      (r.Profiler = c),
      (r.PureComponent = E),
      (r.StrictMode = a),
      (r.Suspense = d),
      (r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
      (r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return T.H.useMemoCache(e);
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
        var n = m({}, e.props),
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
          for (var i = Array(u), a = 0; a < u; a++) i[a] = arguments[a + 2];
          n.children = i;
        }
        return k(e.type, o, n);
      }),
      (r.createContext = function (e) {
        return (
          ((e = {
            $$typeof: s,
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
            P.call(t, n) &&
              'key' !== n &&
              '__self' !== n &&
              '__source' !== n &&
              (o[n] = t[n]);
        var i = arguments.length - 2;
        if (1 === i) o.children = r;
        else if (1 < i) {
          for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
          o.children = a;
        }
        if (e && e.defaultProps)
          for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
        return k(e, u, o);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = O),
      (r.lazy = function (e) {
        return { $$typeof: g, _payload: { _status: -1, _result: e }, _init: M };
      }),
      (r.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (r.startTransition = function (e) {
        var t = T.T,
          r = {};
        T.T = r;
        try {
          var n = e(),
            o = T.S;
          (null !== o && o(r, n),
            'object' == typeof n &&
              null !== n &&
              'function' == typeof n.then &&
              n.then(x, H));
        } catch (e) {
          H(e);
        } finally {
          (null !== t && null !== r.types && (t.types = r.types), (T.T = t));
        }
      }),
      (r.unstable_useCacheRefresh = function () {
        return T.H.useCacheRefresh();
      }),
      (r.use = function (e) {
        return T.H.use(e);
      }),
      (r.useActionState = function (e, t, r) {
        return T.H.useActionState(e, t, r);
      }),
      (r.useCallback = function (e, t) {
        return T.H.useCallback(e, t);
      }),
      (r.useContext = function (e) {
        return T.H.useContext(e);
      }),
      (r.useDebugValue = function () {}),
      (r.useDeferredValue = function (e, t) {
        return T.H.useDeferredValue(e, t);
      }),
      (r.useEffect = function (e, t) {
        return T.H.useEffect(e, t);
      }),
      (r.useEffectEvent = function (e) {
        return T.H.useEffectEvent(e);
      }),
      (r.useId = function () {
        return T.H.useId();
      }),
      (r.useImperativeHandle = function (e, t, r) {
        return T.H.useImperativeHandle(e, t, r);
      }),
      (r.useInsertionEffect = function (e, t) {
        return T.H.useInsertionEffect(e, t);
      }),
      (r.useLayoutEffect = function (e, t) {
        return T.H.useLayoutEffect(e, t);
      }),
      (r.useMemo = function (e, t) {
        return T.H.useMemo(e, t);
      }),
      (r.useOptimistic = function (e, t) {
        return T.H.useOptimistic(e, t);
      }),
      (r.useReducer = function (e, t, r) {
        return T.H.useReducer(e, t, r);
      }),
      (r.useRef = function (e) {
        return T.H.useRef(e);
      }),
      (r.useState = function (e) {
        return T.H.useState(e);
      }),
      (r.useSyncExternalStore = function (e, t, r) {
        return T.H.useSyncExternalStore(e, t, r);
      }),
      (r.useTransition = function () {
        return T.H.useTransition();
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
      for (var i in e)
        if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = u ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(o, i, a)
            : (o[i] = e[i]);
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
          return v;
        },
        MissingStaticPage: function () {
          return m;
        },
        NormalizeError: function () {
          return y;
        },
        PageNotFoundError: function () {
          return b;
        },
        SP: function () {
          return p;
        },
        ST: function () {
          return g;
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
          return a;
        },
        getURL: function () {
          return c;
        },
        isAbsoluteUrl: function () {
          return i;
        },
        isResSent: function () {
          return s;
        },
        loadGetInitialProps: function () {
          return d;
        },
        normalizeRepeatedSlashes: function () {
          return f;
        },
        stringifyError: function () {
          return _;
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
      i = (e) => u.test(e);
    function a() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + '//' + t + (r ? ':' + r : '');
    }
    function c() {
      let { href: e } = window.location,
        t = a();
      return e.substring(t.length);
    }
    function l(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function s(e) {
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
      if (r && s(r)) return n;
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
      g =
        p &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class h extends Error {}
    class y extends Error {}
    class b extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = 'Cannot find module for page: ' + e));
      }
    }
    class m extends Error {
      constructor(e, t) {
        (super(),
          (this.message =
            'Failed to load static file for page: ' + e + ' ' + t));
      }
    }
    class v extends Error {
      constructor() {
        (super(),
          (this.code = 'ENOENT'),
          (this.message = 'Cannot find the middleware module'));
      }
    }
    function _(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  28749,
  72351,
  (e) => {
    'use strict';
    (e.s([], 28749), e.s(['WidgetColorsPicker', () => u], 72351));
    var t = e.i(94601);
    let r = (e) => {
        let t = e.toString(16);
        return 1 === t.length ? ''.concat(t).concat(t) : t;
      },
      n = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        (e > 255 && (e = 255),
          t > 255 && (t = 255),
          n > 255 && (n = 255),
          e < 0 && (e = 0),
          t < 0 && (t = 0),
          n < 0 && (n = 0));
        let o = r(e),
          u = r(t),
          i = r(n);
        return '#'.concat(o).concat(u).concat(i);
      };
    var o = e.i(36960);
    let u = () => {
      let [{ color: e }, r] = (0, o.useState)({ color: '#fb2c36' }),
        u = [
          { r: 228, g: 63, b: 0 },
          { r: 250, g: 228, b: 16 },
          { r: 85, g: 204, b: 59 },
          { r: 9, g: 173, b: 255 },
          { r: 107, g: 14, b: 253 },
          { r: 231, g: 13, b: 134 },
          { r: 228, g: 63, b: 0 },
        ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl aspect-square w-full max-w-60 overflow-hidden rounded-full border border-black bg-neutral-900',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-2',
          children: (0, t.jsx)('div', {
            className: 'h-full w-full rounded-full bg-white p-2 transition-all',
            style: {
              background: 'linear-gradient(#111111, '.concat(e, ', #eeeeee)'),
            },
            children: (0, t.jsx)('div', {
              className: 'h-full w-full rounded-full bg-neutral-900 p-2',
              children: (0, t.jsx)('button', {
                className: 'relative h-full w-full rounded-full',
                style: {
                  background:
                    'radial-gradient(circle at 50% 0,red,rgba(242,13,13,.8) 10%,rgba(230,26,26,.6) 20%,rgba(204,51,51,.4) 30%,rgba(166,89,89,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 85.35533905932738% 14.644660940672622%,#ffbf00,rgba(242,185,13,.8) 10%,rgba(230,179,26,.6) 20%,rgba(204,166,51,.4) 30%,rgba(166,147,89,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 100% 50%,#80ff00,rgba(128,242,13,.8) 10%,rgba(128,230,26,.6) 20%,rgba(128,204,51,.4) 30%,rgba(128,166,89,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 85.35533905932738% 85.35533905932738%,#00ff40,rgba(13,242,70,.8) 10%,rgba(26,230,77,.6) 20%,rgba(51,204,89,.4) 30%,rgba(89,166,108,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 50.00000000000001% 100%,#0ff,rgba(13,242,242,.8) 10%,rgba(26,230,230,.6) 20%,rgba(51,204,204,.4) 30%,rgba(89,166,166,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 14.64466094067263% 85.35533905932738%,#0040ff,rgba(13,70,242,.8) 10%,rgba(26,77,230,.6) 20%,rgba(51,89,204,.4) 30%,rgba(89,108,166,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 0 50.00000000000001%,#8000ff,rgba(128,13,242,.8) 10%,rgba(128,26,230,.6) 20%,rgba(128,51,204,.4) 30%,rgba(128,89,166,.2) 40%,hsla(0,0%,50%,0) 50%),radial-gradient(circle at 14.644660940672615% 14.64466094067263%,#ff00bf,rgba(242,13,185,.8) 10%,rgba(230,26,179,.6) 20%,rgba(204,51,166,.4) 30%,rgba(166,89,147,.2) 40%,hsla(0,0%,50%,0) 50%)',
                },
                onMouseMove: (e) => {
                  let t = e.target.getBoundingClientRect(),
                    o = (2 * (e.clientX - t.left)) / (t.right - t.left) - 1,
                    i = 1 - (2 * (e.clientY - t.top)) / (t.bottom - t.top),
                    a = ((Math.PI / 2 - Math.atan2(i, o)) / Math.PI) * 180;
                  a < 0 && (a += 360);
                  let c =
                      Math.floor((a = (a / 360) * (u.length - 1))) % u.length,
                    l = (c + 1) % u.length,
                    s = u[c],
                    f = u[l],
                    d = a - Math.floor(a),
                    p = 1 - d,
                    g = {
                      r: s.r * p + f.r * d,
                      g: s.g * p + f.g * d,
                      b: s.b * p + f.b * d,
                    },
                    h = Math.sqrt(o * o + i * i);
                  h > 1 && (h = 1);
                  let y = h < 0.8 ? h / 0.8 : 1,
                    b = 1 - y;
                  ((g.r = Math.round(g.r * y + 255 * b)),
                    (g.g = Math.round(g.g * y + 255 * b)),
                    (g.b = Math.round(g.b * y + 255 * b)));
                  let m = n(g.r, g.g, g.b);
                  r((e) => ({ ...e, color: m }));
                },
                onClick: () =>
                  ((e) => {
                    var t;
                    if (!(null == (t = navigator) ? void 0 : t.clipboard))
                      return alert('Incompatible');
                    (navigator.clipboard.writeText(e),
                      alert('Copy "'.concat(e, '" to Clipboard')));
                  })(e),
              }),
            }),
          }),
        }),
      });
    };
  },
  16624,
  (e) => {
    'use strict';
    e.s(['default', () => n]);
    var t = e.i(94601);
    e.i(28749);
    var r = e.i(72351);
    let n = () =>
      (0, t.jsx)('div', {
        className: 'h-screen w-screen overflow-hidden bg-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'flex h-full w-full items-center justify-center',
          children: (0, t.jsx)(r.WidgetColorsPicker, {}),
        }),
      });
  },
  25834,
  (e, t, r) => {
    let n = '/colors';
    ((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(16624)]),
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
