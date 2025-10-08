(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  26388,
  (e, t, n) => {
    !(function () {
      var e = {
          229: function (e) {
            var t,
              n,
              r,
              s = (e.exports = {});
            function o() {
              throw Error('setTimeout has not been defined');
            }
            function i() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : o;
            } catch (e) {
              t = o;
            }
            try {
              n = 'function' == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
              n = i;
            }
            function a(e) {
              if (t === setTimeout) return setTimeout(e, 0);
              if ((t === o || !t) && setTimeout)
                return ((t = setTimeout), setTimeout(e, 0));
              try {
                return t(e, 0);
              } catch (n) {
                try {
                  return t.call(null, e, 0);
                } catch (n) {
                  return t.call(this, e, 0);
                }
              }
            }
            var c = [],
              u = !1,
              l = -1;
            function f() {
              u &&
                r &&
                ((u = !1),
                r.length ? (c = r.concat(c)) : (l = -1),
                c.length && p());
            }
            function p() {
              if (!u) {
                var e = a(f);
                u = !0;
                for (var t = c.length; t; ) {
                  for (r = c, c = []; ++l < t; ) r && r[l].run();
                  ((l = -1), (t = c.length));
                }
                ((r = null),
                  (u = !1),
                  (function (e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === i || !n) && clearTimeout)
                      return ((n = clearTimeout), clearTimeout(e));
                    try {
                      n(e);
                    } catch (t) {
                      try {
                        return n.call(null, e);
                      } catch (t) {
                        return n.call(this, e);
                      }
                    }
                  })(e));
              }
            }
            function d(e, t) {
              ((this.fun = e), (this.array = t));
            }
            function m() {}
            ((s.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
              (c.push(new d(e, t)), 1 !== c.length || u || a(p));
            }),
              (d.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (s.title = 'browser'),
              (s.browser = !0),
              (s.env = {}),
              (s.argv = []),
              (s.version = ''),
              (s.versions = {}),
              (s.on = m),
              (s.addListener = m),
              (s.once = m),
              (s.off = m),
              (s.removeListener = m),
              (s.removeAllListeners = m),
              (s.emit = m),
              (s.prependListener = m),
              (s.prependOnceListener = m),
              (s.listeners = function (e) {
                return [];
              }),
              (s.binding = function (e) {
                throw Error('process.binding is not supported');
              }),
              (s.cwd = function () {
                return '/';
              }),
              (s.chdir = function (e) {
                throw Error('process.chdir is not supported');
              }),
              (s.umask = function () {
                return 0;
              }));
          },
        },
        n = {};
      function r(t) {
        var s = n[t];
        if (void 0 !== s) return s.exports;
        var o = (n[t] = { exports: {} }),
          i = !0;
        try {
          (e[t](o, o.exports, r), (i = !1));
        } finally {
          i && delete n[t];
        }
        return o.exports;
      }
      ((r.ab =
        '/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
        (t.exports = r(229)));
    })();
  },
  97244,
  (e, t, n) => {
    'use strict';
    var r, s;
    t.exports =
      (null == (r = e.g.process) ? void 0 : r.env) &&
      'object' == typeof (null == (s = e.g.process) ? void 0 : s.env)
        ? e.g.process
        : e.r(26388);
  },
  86234,
  (e, t, n) => {
    'use strict';
    var r = Symbol.for('react.transitional.element');
    function s(e, t, n) {
      var s = null;
      if (
        (void 0 !== n && (s = '' + n),
        void 0 !== t.key && (s = '' + t.key),
        'key' in t)
      )
        for (var o in ((n = {}), t)) 'key' !== o && (n[o] = t[o]);
      else n = t;
      return {
        $$typeof: r,
        type: e,
        key: s,
        ref: void 0 !== (t = n.ref) ? t : null,
        props: n,
      };
    }
    ((n.Fragment = Symbol.for('react.fragment')), (n.jsx = s), (n.jsxs = s));
  },
  94601,
  (e, t, n) => {
    'use strict';
    t.exports = e.r(86234);
  },
  14513,
  (e, t, n) => {
    'use strict';
    var r = e.i(97244),
      s = Symbol.for('react.transitional.element'),
      o = Symbol.for('react.portal'),
      i = Symbol.for('react.fragment'),
      a = Symbol.for('react.strict_mode'),
      c = Symbol.for('react.profiler'),
      u = Symbol.for('react.consumer'),
      l = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      p = Symbol.for('react.suspense'),
      d = Symbol.for('react.memo'),
      m = Symbol.for('react.lazy'),
      h = Symbol.for('react.activity'),
      x = Symbol.iterator,
      y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      g = Object.assign,
      v = {};
    function j(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || y));
    }
    function b() {}
    function _(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = n || y));
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
    var S = (_.prototype = new b());
    ((S.constructor = _), g(S, j.prototype), (S.isPureReactComponent = !0));
    var N = Array.isArray;
    function E() {}
    var w = { H: null, A: null, T: null, S: null },
      P = Object.prototype.hasOwnProperty;
    function I(e, t, n) {
      var r = n.ref;
      return {
        $$typeof: s,
        type: e,
        key: t,
        ref: void 0 !== r ? r : null,
        props: n,
      };
    }
    function T(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === s;
    }
    var k = /\/+/g;
    function F(e, t) {
      var n, r;
      return 'object' == typeof e && null !== e && null != e.key
        ? ((n = '' + e.key),
          (r = { '=': '=0', ':': '=2' }),
          '$' +
            n.replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
    }
    function O(e, t, n) {
      if (null == e) return e;
      var r = [],
        i = 0;
      return (
        !(function e(t, n, r, i, a) {
          var c,
            u,
            l,
            f = typeof t;
          ('undefined' === f || 'boolean' === f) && (t = null);
          var p = !1;
          if (null === t) p = !0;
          else
            switch (f) {
              case 'bigint':
              case 'string':
              case 'number':
                p = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case s:
                  case o:
                    p = !0;
                    break;
                  case m:
                    return e((p = t._init)(t._payload), n, r, i, a);
                }
            }
          if (p)
            return (
              (a = a(t)),
              (p = '' === i ? '.' + F(t, 0) : i),
              N(a)
                ? ((r = ''),
                  null != p && (r = p.replace(k, '$&/') + '/'),
                  e(a, n, r, '', function (e) {
                    return e;
                  }))
                : null != a &&
                  (T(a) &&
                    ((c = a),
                    (u =
                      r +
                      (null == a.key || (t && t.key === a.key)
                        ? ''
                        : ('' + a.key).replace(k, '$&/') + '/') +
                      p),
                    (a = I(c.type, u, c.props))),
                  n.push(a)),
              1
            );
          p = 0;
          var d = '' === i ? '.' : i + ':';
          if (N(t))
            for (var h = 0; h < t.length; h++)
              ((f = d + F((i = t[h]), h)), (p += e(i, n, r, f, a)));
          else if (
            'function' ==
            typeof (h =
              null === (l = t) || 'object' != typeof l
                ? null
                : 'function' == typeof (l = (x && l[x]) || l['@@iterator'])
                  ? l
                  : null)
          )
            for (t = h.call(t), h = 0; !(i = t.next()).done; )
              ((f = d + F((i = i.value), h++)), (p += e(i, n, r, f, a)));
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
                n,
                r,
                i,
                a
              );
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (n = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : n) +
                '). If you meant to render a collection of children, use an array instead.'
            );
          }
          return p;
        })(e, r, '', '', function (e) {
          return t.call(n, e, i++);
        }),
        r
      );
    }
    function C(e) {
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
              'object' == typeof r.default &&
              'function' == typeof r.default.emit
            )
              return void r.default.emit('uncaughtException', e);
            console.error(e);
          };
    ((n.Activity = h),
      (n.Children = {
        map: O,
        forEach: function (e, t, n) {
          O(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            O(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            O(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!T(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      }),
      (n.Component = j),
      (n.Fragment = i),
      (n.Profiler = c),
      (n.PureComponent = _),
      (n.StrictMode = a),
      (n.Suspense = p),
      (n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
      (n.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return w.H.useMemoCache(e);
        },
      }),
      (n.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (n.cacheSignal = function () {
        return null;
      }),
      (n.cloneElement = function (e, t, n) {
        if (null == e)
          throw Error(
            'The argument must be a React element, but you passed ' + e + '.'
          );
        var r = g({}, e.props),
          s = e.key;
        if (null != t)
          for (o in (void 0 !== t.key && (s = '' + t.key), t))
            P.call(t, o) &&
              'key' !== o &&
              '__self' !== o &&
              '__source' !== o &&
              ('ref' !== o || void 0 !== t.ref) &&
              (r[o] = t[o]);
        var o = arguments.length - 2;
        if (1 === o) r.children = n;
        else if (1 < o) {
          for (var i = Array(o), a = 0; a < o; a++) i[a] = arguments[a + 2];
          r.children = i;
        }
        return I(e.type, s, r);
      }),
      (n.createContext = function (e) {
        return (
          ((e = {
            $$typeof: l,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: u, _context: e }),
          e
        );
      }),
      (n.createElement = function (e, t, n) {
        var r,
          s = {},
          o = null;
        if (null != t)
          for (r in (void 0 !== t.key && (o = '' + t.key), t))
            P.call(t, r) &&
              'key' !== r &&
              '__self' !== r &&
              '__source' !== r &&
              (s[r] = t[r]);
        var i = arguments.length - 2;
        if (1 === i) s.children = n;
        else if (1 < i) {
          for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
          s.children = a;
        }
        if (e && e.defaultProps)
          for (r in (i = e.defaultProps)) void 0 === s[r] && (s[r] = i[r]);
        return I(e, o, s);
      }),
      (n.createRef = function () {
        return { current: null };
      }),
      (n.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (n.isValidElement = T),
      (n.lazy = function (e) {
        return { $$typeof: m, _payload: { _status: -1, _result: e }, _init: C };
      }),
      (n.memo = function (e, t) {
        return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
      }),
      (n.startTransition = function (e) {
        var t = w.T,
          n = {};
        w.T = n;
        try {
          var r = e(),
            s = w.S;
          (null !== s && s(n, r),
            'object' == typeof r &&
              null !== r &&
              'function' == typeof r.then &&
              r.then(E, R));
        } catch (e) {
          R(e);
        } finally {
          (null !== t && null !== n.types && (t.types = n.types), (w.T = t));
        }
      }),
      (n.unstable_useCacheRefresh = function () {
        return w.H.useCacheRefresh();
      }),
      (n.use = function (e) {
        return w.H.use(e);
      }),
      (n.useActionState = function (e, t, n) {
        return w.H.useActionState(e, t, n);
      }),
      (n.useCallback = function (e, t) {
        return w.H.useCallback(e, t);
      }),
      (n.useContext = function (e) {
        return w.H.useContext(e);
      }),
      (n.useDebugValue = function () {}),
      (n.useDeferredValue = function (e, t) {
        return w.H.useDeferredValue(e, t);
      }),
      (n.useEffect = function (e, t) {
        return w.H.useEffect(e, t);
      }),
      (n.useEffectEvent = function (e) {
        return w.H.useEffectEvent(e);
      }),
      (n.useId = function () {
        return w.H.useId();
      }),
      (n.useImperativeHandle = function (e, t, n) {
        return w.H.useImperativeHandle(e, t, n);
      }),
      (n.useInsertionEffect = function (e, t) {
        return w.H.useInsertionEffect(e, t);
      }),
      (n.useLayoutEffect = function (e, t) {
        return w.H.useLayoutEffect(e, t);
      }),
      (n.useMemo = function (e, t) {
        return w.H.useMemo(e, t);
      }),
      (n.useOptimistic = function (e, t) {
        return w.H.useOptimistic(e, t);
      }),
      (n.useReducer = function (e, t, n) {
        return w.H.useReducer(e, t, n);
      }),
      (n.useRef = function (e) {
        return w.H.useRef(e);
      }),
      (n.useState = function (e) {
        return w.H.useState(e);
      }),
      (n.useSyncExternalStore = function (e, t, n) {
        return w.H.useSyncExternalStore(e, t, n);
      }),
      (n.useTransition = function () {
        return w.H.useTransition();
      }),
      (n.version = '19.2.0'));
  },
  36960,
  (e, t, n) => {
    'use strict';
    t.exports = e.r(14513);
  },
  2879,
  (e, t, n) => {
    'use strict';
    n._ = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  87602,
  (e, t, n) => {
    'use strict';
    function r(e) {
      if ('function' != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (r = function (e) {
        return e ? n : t;
      })(e);
    }
    n._ = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || ('object' != typeof e && 'function' != typeof e))
        return { default: e };
      var n = r(t);
      if (n && n.has(e)) return n.get(e);
      var s = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(s, i, a)
            : (s[i] = e[i]);
        }
      return ((s.default = e), n && n.set(e, s), s);
    };
  },
  79438,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'HeadManagerContext', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = e.r(2879)._(e.r(36960)).default.createContext({});
  },
  56220,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'warnOnce', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }));
    let r = (e) => {};
  },
  75288,
  (e, t, n) => {
    'use strict';
    (Object.defineProperty(n, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var n in t)
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      })(n, {
        DecodeError: function () {
          return h;
        },
        MiddlewareNotFoundError: function () {
          return v;
        },
        MissingStaticPage: function () {
          return g;
        },
        NormalizeError: function () {
          return x;
        },
        PageNotFoundError: function () {
          return y;
        },
        SP: function () {
          return d;
        },
        ST: function () {
          return m;
        },
        WEB_VITALS: function () {
          return r;
        },
        execOnce: function () {
          return s;
        },
        getDisplayName: function () {
          return u;
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
          return l;
        },
        loadGetInitialProps: function () {
          return p;
        },
        normalizeRepeatedSlashes: function () {
          return f;
        },
        stringifyError: function () {
          return j;
        },
      }));
    let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function s(e) {
      let t,
        n = !1;
      return function () {
        for (var r = arguments.length, s = Array(r), o = 0; o < r; o++)
          s[o] = arguments[o];
        return (n || ((n = !0), (t = e(...s))), t);
      };
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      i = (e) => o.test(e);
    function a() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return e + '//' + t + (n ? ':' + n : '');
    }
    function c() {
      let { href: e } = window.location,
        t = a();
      return e.substring(t.length);
    }
    function u(e) {
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
    async function p(e, t) {
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await p(t.Component, t.ctx) }
          : {};
      let r = await e.getInitialProps(t);
      if (n && l(n)) return r;
      if (!r)
        throw Object.defineProperty(
          Error(
            '"' +
              u(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 }
        );
      return r;
    }
    let d = 'undefined' != typeof performance,
      m =
        d &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class h extends Error {}
    class x extends Error {}
    class y extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = 'Cannot find module for page: ' + e));
      }
    }
    class g extends Error {
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
    function j(e) {
      return JSON.stringify({ message: e.message, stack: e.stack });
    }
  },
  49619,
  (e) => {
    'use strict';
    e.s(['default', () => o]);
    var t = e.i(94601),
      n = e.i(36960),
      r = e.i(66709);
    let s = (e) => {
        let {
          setting: n,
          settings: r,
          setSettings: s,
          activeIcon: o = (0, t.jsx)(t.Fragment, {}),
          inactiveIcon: i = (0, t.jsx)(t.Fragment, {}),
        } = e;
        return (0, t.jsx)('button', {
          onClick: () => s((e) => ({ ...e, [n]: !e[n] })),
          children: (0, t.jsx)('div', {
            className:
              'flex aspect-square w-16 items-center justify-center rounded-full '.concat(
                r[n] ? 'bg-red-700' : 'bg-neutral-900',
                ' text-neutral-100'
              ),
            children: r[n] ? o : i,
          }),
        });
      },
      o = () => {
        let [e, o] = (0, n.useState)({
          airplane: !1,
          hotspot: !1,
          wifi: !1,
          bluetooth: !1,
          cellular: !1,
          flashlight: !1,
          battery: !1,
          notification: !1,
          microphone: !1,
          phone: !1,
          screen: !1,
          recording: !1,
          nfc: !1,
          focus: !1,
        });
        return (0, t.jsx)('div', {
          className: 'h-screen w-screen overflow-hidden bg-neutral-100',
          children: (0, t.jsx)('div', {
            className: 'flex h-full items-center justify-center',
            children: (0, t.jsxs)('div', {
              className:
                'grid grid-cols-3 gap-4 md:grid-cols-4 md:gap-8 lg:grid-cols-7',
              children: [
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'cellular',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaSignal, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaSignal, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'airplane',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaPlane, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaPlaneSlash, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'wifi',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaWifi, { className: 'text-3xl' }),
                    inactiveIcon: (0, t.jsx)(r.FaWifi, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'hotspot',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaLink, { className: 'text-3xl' }),
                    inactiveIcon: (0, t.jsx)(r.FaLinkSlash, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'bluetooth',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaBluetooth, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaBluetoothB, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'flashlight',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaLightbulb, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaRegLightbulb, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'battery',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaBatteryQuarter, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaBatteryFull, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'notification',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaBell, { className: 'text-3xl' }),
                    inactiveIcon: (0, t.jsx)(r.FaBellSlash, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'microphone',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaMicrophoneLines, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaMicrophoneLinesSlash, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'phone',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaPhone, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaPhoneSlash, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'screen',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaUnlock, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaLock, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'recording',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaCirclePlay, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaRegCirclePlay, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'nfc',
                    settings: e,
                    setSettings: o,
                    activeIcon: (0, t.jsx)(r.FaNfcDirectional, {
                      className: 'text-3xl',
                    }),
                    inactiveIcon: (0, t.jsx)(r.FaNfcSymbol, {
                      className: 'text-3xl',
                    }),
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)(s, {
                    setting: 'focus',
                    settings: e,
                    setSettings: o,
                    inactiveIcon: (0, t.jsx)(r.FaSun, {
                      className: 'text-3xl',
                    }),
                    activeIcon: (0, t.jsx)(r.FaMoon, { className: 'text-3xl' }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
  },
  44410,
  (e, t, n) => {
    let r = '/settings';
    ((window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(49619)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([r]);
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
