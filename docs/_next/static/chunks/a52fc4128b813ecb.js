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
              i = (e.exports = {});
            function o() {
              throw Error('setTimeout has not been defined');
            }
            function s() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : o;
            } catch (e) {
              t = o;
            }
            try {
              r = 'function' == typeof clearTimeout ? clearTimeout : s;
            } catch (e) {
              r = s;
            }
            function l(e) {
              if (t === setTimeout) return setTimeout(e, 0);
              if ((t === o || !t) && setTimeout)
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
              u = !1,
              c = -1;
            function f() {
              u &&
                n &&
                ((u = !1),
                n.length ? (a = n.concat(a)) : (c = -1),
                a.length && d());
            }
            function d() {
              if (!u) {
                var e = l(f);
                u = !0;
                for (var t = a.length; t; ) {
                  for (n = a, a = []; ++c < t; ) n && n[c].run();
                  ((c = -1), (t = a.length));
                }
                ((n = null),
                  (u = !1),
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
            ((i.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var r = 1; r < arguments.length; r++)
                  t[r - 1] = arguments[r];
              (a.push(new p(e, t)), 1 !== a.length || u || l(d));
            }),
              (p.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (i.title = 'browser'),
              (i.browser = !0),
              (i.env = {}),
              (i.argv = []),
              (i.version = ''),
              (i.versions = {}),
              (i.on = h),
              (i.addListener = h),
              (i.once = h),
              (i.off = h),
              (i.removeListener = h),
              (i.removeAllListeners = h),
              (i.emit = h),
              (i.prependListener = h),
              (i.prependOnceListener = h),
              (i.listeners = function (e) {
                return [];
              }),
              (i.binding = function (e) {
                throw Error('process.binding is not supported');
              }),
              (i.cwd = function () {
                return '/';
              }),
              (i.chdir = function (e) {
                throw Error('process.chdir is not supported');
              }),
              (i.umask = function () {
                return 0;
              }));
          },
        },
        r = {};
      function n(t) {
        var i = r[t];
        if (void 0 !== i) return i.exports;
        var o = (r[t] = { exports: {} }),
          s = !0;
        try {
          (e[t](o, o.exports, n), (s = !1));
        } finally {
          s && delete r[t];
        }
        return o.exports;
      }
      ((n.ab =
        '/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
        (t.exports = n(229)));
    })();
  },
  97244,
  (e, t, r) => {
    'use strict';
    var n, i;
    t.exports =
      (null == (n = e.g.process) ? void 0 : n.env) &&
      'object' == typeof (null == (i = e.g.process) ? void 0 : i.env)
        ? e.g.process
        : e.r(26388);
  },
  86234,
  (e, t, r) => {
    'use strict';
    var n = Symbol.for('react.transitional.element');
    function i(e, t, r) {
      var i = null;
      if (
        (void 0 !== r && (i = '' + r),
        void 0 !== t.key && (i = '' + t.key),
        'key' in t)
      )
        for (var o in ((r = {}), t)) 'key' !== o && (r[o] = t[o]);
      else r = t;
      return {
        $$typeof: n,
        type: e,
        key: i,
        ref: void 0 !== (t = r.ref) ? t : null,
        props: r,
      };
    }
    ((r.Fragment = Symbol.for('react.fragment')), (r.jsx = i), (r.jsxs = i));
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
      i = Symbol.for('react.transitional.element'),
      o = Symbol.for('react.portal'),
      s = Symbol.for('react.fragment'),
      l = Symbol.for('react.strict_mode'),
      a = Symbol.for('react.profiler'),
      u = Symbol.for('react.consumer'),
      c = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      h = Symbol.for('react.lazy'),
      v = Symbol.for('react.activity'),
      m = Symbol.iterator,
      g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      y = Object.assign,
      b = {};
    function w(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = b),
        (this.updater = r || g));
    }
    function _() {}
    function j(e, t, r) {
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
    var x = (j.prototype = new _());
    ((x.constructor = j), y(x, w.prototype), (x.isPureReactComponent = !0));
    var E = Array.isArray;
    function O() {}
    var S = { H: null, A: null, T: null, S: null },
      k = Object.prototype.hasOwnProperty;
    function N(e, t, r) {
      var n = r.ref;
      return {
        $$typeof: i,
        type: e,
        key: t,
        ref: void 0 !== n ? n : null,
        props: r,
      };
    }
    function P(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === i;
    }
    var T = /\/+/g;
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
    function z(e, t, r) {
      if (null == e) return e;
      var n = [],
        s = 0;
      return (
        !(function e(t, r, n, s, l) {
          var a,
            u,
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
                  case i:
                  case o:
                    d = !0;
                    break;
                  case h:
                    return e((d = t._init)(t._payload), r, n, s, l);
                }
            }
          if (d)
            return (
              (l = l(t)),
              (d = '' === s ? '.' + C(t, 0) : s),
              E(l)
                ? ((n = ''),
                  null != d && (n = d.replace(T, '$&/') + '/'),
                  e(l, r, n, '', function (e) {
                    return e;
                  }))
                : null != l &&
                  (P(l) &&
                    ((a = l),
                    (u =
                      n +
                      (null == l.key || (t && t.key === l.key)
                        ? ''
                        : ('' + l.key).replace(T, '$&/') + '/') +
                      d),
                    (l = N(a.type, u, a.props))),
                  r.push(l)),
              1
            );
          d = 0;
          var p = '' === s ? '.' : s + ':';
          if (E(t))
            for (var v = 0; v < t.length; v++)
              ((f = p + C((s = t[v]), v)), (d += e(s, r, n, f, l)));
          else if (
            'function' ==
            typeof (v =
              null === (c = t) || 'object' != typeof c
                ? null
                : 'function' == typeof (c = (m && c[m]) || c['@@iterator'])
                  ? c
                  : null)
          )
            for (t = v.call(t), v = 0; !(s = t.next()).done; )
              ((f = p + C((s = s.value), v++)), (d += e(s, r, n, f, l)));
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
                          ? e.then(O, O)
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
                l
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
    function L(e) {
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
    ((r.Activity = v),
      (r.Children = {
        map: z,
        forEach: function (e, t, r) {
          z(
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
            z(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            z(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!P(e))
            throw Error(
              'React.Children.only expected to receive a single React element child.'
            );
          return e;
        },
      }),
      (r.Component = w),
      (r.Fragment = s),
      (r.Profiler = a),
      (r.PureComponent = j),
      (r.StrictMode = l),
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
        var n = y({}, e.props),
          i = e.key;
        if (null != t)
          for (o in (void 0 !== t.key && (i = '' + t.key), t))
            k.call(t, o) &&
              'key' !== o &&
              '__self' !== o &&
              '__source' !== o &&
              ('ref' !== o || void 0 !== t.ref) &&
              (n[o] = t[o]);
        var o = arguments.length - 2;
        if (1 === o) n.children = r;
        else if (1 < o) {
          for (var s = Array(o), l = 0; l < o; l++) s[l] = arguments[l + 2];
          n.children = s;
        }
        return N(e.type, i, n);
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
          (e.Consumer = { $$typeof: u, _context: e }),
          e
        );
      }),
      (r.createElement = function (e, t, r) {
        var n,
          i = {},
          o = null;
        if (null != t)
          for (n in (void 0 !== t.key && (o = '' + t.key), t))
            k.call(t, n) &&
              'key' !== n &&
              '__self' !== n &&
              '__source' !== n &&
              (i[n] = t[n]);
        var s = arguments.length - 2;
        if (1 === s) i.children = r;
        else if (1 < s) {
          for (var l = Array(s), a = 0; a < s; a++) l[a] = arguments[a + 2];
          i.children = l;
        }
        if (e && e.defaultProps)
          for (n in (s = e.defaultProps)) void 0 === i[n] && (i[n] = s[n]);
        return N(e, o, i);
      }),
      (r.createRef = function () {
        return { current: null };
      }),
      (r.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (r.isValidElement = P),
      (r.lazy = function (e) {
        return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: L };
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
            i = S.S;
          (null !== i && i(r, n),
            'object' == typeof n &&
              null !== n &&
              'function' == typeof n.then &&
              n.then(O, A));
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
      var i = { __proto__: null },
        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var s in e)
        if ('default' !== s && Object.prototype.hasOwnProperty.call(e, s)) {
          var l = o ? Object.getOwnPropertyDescriptor(e, s) : null;
          l && (l.get || l.set)
            ? Object.defineProperty(i, s, l)
            : (i[s] = e[s]);
        }
      return ((i.default = e), r && r.set(e, i), i);
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
          return v;
        },
        MiddlewareNotFoundError: function () {
          return b;
        },
        MissingStaticPage: function () {
          return y;
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
          return i;
        },
        getDisplayName: function () {
          return u;
        },
        getLocationOrigin: function () {
          return l;
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
    function i(e) {
      let t,
        r = !1;
      return function () {
        for (var n = arguments.length, i = Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        return (r || ((r = !0), (t = e(...i))), t);
      };
    }
    let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      s = (e) => o.test(e);
    function l() {
      let { protocol: e, hostname: t, port: r } = window.location;
      return e + '//' + t + (r ? ':' + r : '');
    }
    function a() {
      let { href: e } = window.location,
        t = l();
      return e.substring(t.length);
    }
    function u(e) {
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
              u(e) +
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
    class v extends Error {}
    class m extends Error {}
    class g extends Error {
      constructor(e) {
        (super(),
          (this.code = 'ENOENT'),
          (this.name = 'PageNotFoundError'),
          (this.message = 'Cannot find module for page: ' + e));
      }
    }
    class y extends Error {
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
  55607,
  (e, t, r) => {
    'use strict';
    function n(e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    t.exports = function (e, t, r) {
      var i = (r && r.stringify) || n;
      if ('object' == typeof e && null !== e) {
        var o = t.length + 1;
        if (1 === o) return e;
        var s = Array(o);
        s[0] = i(e);
        for (var l = 1; l < o; l++) s[l] = i(t[l]);
        return s.join(' ');
      }
      if ('string' != typeof e) return e;
      var a = t.length;
      if (0 === a) return e;
      for (
        var u = '', c = 0, f = -1, d = (e && e.length) || 0, p = 0;
        p < d;

      ) {
        if (37 === e.charCodeAt(p) && p + 1 < d) {
          switch (((f = f > -1 ? f : 0), e.charCodeAt(p + 1))) {
            case 100:
            case 102:
              if (c >= a || null == t[c]) break;
              (f < p && (u += e.slice(f, p)),
                (u += Number(t[c])),
                (f = p + 2),
                p++);
              break;
            case 105:
              if (c >= a || null == t[c]) break;
              (f < p && (u += e.slice(f, p)),
                (u += Math.floor(Number(t[c]))),
                (f = p + 2),
                p++);
              break;
            case 79:
            case 111:
            case 106:
              if (c >= a || void 0 === t[c]) break;
              f < p && (u += e.slice(f, p));
              var h = typeof t[c];
              if ('string' === h) {
                ((u += "'" + t[c] + "'"), (f = p + 2), p++);
                break;
              }
              if ('function' === h) {
                ((u += t[c].name || '<anonymous>'), (f = p + 2), p++);
                break;
              }
              ((u += i(t[c])), (f = p + 2), p++);
              break;
            case 115:
              if (c >= a) break;
              (f < p && (u += e.slice(f, p)),
                (u += String(t[c])),
                (f = p + 2),
                p++);
              break;
            case 37:
              (f < p && (u += e.slice(f, p)),
                (u += '%'),
                (f = p + 2),
                p++,
                c--);
          }
          ++c;
        }
        ++p;
      }
      return -1 === f ? e : (f < d && (u += e.slice(f)), u);
    };
  },
  69214,
  (e, t, r) => {
    'use strict';
    let n = e.r(55607);
    t.exports = c;
    let i =
      (function () {
        function e(e) {
          return void 0 !== e && e;
        }
        try {
          if ('undefined' != typeof globalThis) return globalThis;
          return (
            Object.defineProperty(Object.prototype, 'globalThis', {
              get: function () {
                return (
                  delete Object.prototype.globalThis,
                  (this.globalThis = this)
                );
              },
              configurable: !0,
            }),
            globalThis
          );
        } catch (t) {
          return e(self) || e(window) || e(this) || {};
        }
      })().console || {};
    function o(e, t) {
      return 'silent' === e ? 1 / 0 : t.levels.values[e];
    }
    let s = Symbol('pino.logFuncs'),
      l = Symbol('pino.hierarchy'),
      a = {
        error: 'log',
        fatal: 'error',
        warn: 'error',
        info: 'log',
        debug: 'log',
        trace: 'log',
      };
    function u(e, t) {
      let r = { logger: t, parent: e[l] };
      t[l] = r;
    }
    function c(e) {
      var t, r;
      (e = e || {}).browser = e.browser || {};
      let n = e.browser.transmit;
      if (n && 'function' != typeof n.send)
        throw Error('pino: transmit option must have a send function');
      let l = e.browser.write || i;
      e.browser.write && (e.browser.asObject = !0);
      let h = e.serializers || {},
        v =
          ((t = e.browser.serialize),
          Array.isArray(t)
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(h)),
        m = e.browser.serialize;
      Array.isArray(e.browser.serialize) &&
        e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
        (m = !1);
      let w = Object.keys(e.customLevels || {}),
        _ = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'].concat(w);
      ('function' == typeof l &&
        _.forEach(function (e) {
          l[e] = l;
        }),
        (!1 === e.enabled || e.browser.disabled) && (e.level = 'silent'));
      let j = e.level || 'info',
        x = Object.create(l);
      x.log || (x.log = g);
      let E = {};
      (_.forEach((e) => {
        E[e] = l[e] ? l[e] : i[e] || i[a[e] || 'log'] || g;
      }),
        (x[s] = E),
        u({}, x),
        Object.defineProperty(x, 'levelVal', {
          get: function () {
            return o(this.level, this);
          },
        }),
        Object.defineProperty(x, 'level', {
          get: function () {
            return this._level;
          },
          set: function (e) {
            if ('silent' !== e && !this.levels.values[e])
              throw Error('unknown level ' + e);
            ((this._level = e),
              f(this, O, x, 'error'),
              f(this, O, x, 'fatal'),
              f(this, O, x, 'warn'),
              f(this, O, x, 'info'),
              f(this, O, x, 'debug'),
              f(this, O, x, 'trace'),
              w.forEach((e) => {
                f(this, O, x, e);
              }));
          },
        }));
      let O = {
        transmit: n,
        serialize: v,
        asObject: e.browser.asObject,
        asObjectBindingsOnly: e.browser.asObjectBindingsOnly,
        formatters: e.browser.formatters,
        levels: _,
        timestamp:
          'function' == typeof (r = e).timestamp
            ? r.timestamp
            : !1 === r.timestamp
              ? y
              : b,
        messageKey: e.messageKey || 'msg',
        onChild: e.onChild || g,
      };
      function S(t, r, i) {
        if (!r) throw Error('missing bindings for child Pino');
        ((i = i || {}), v && r.serializers && (i.serializers = r.serializers));
        let o = i.serializers;
        if (v && o) {
          var s = Object.assign({}, h, o),
            l = !0 === e.browser.serialize ? Object.keys(s) : v;
          (delete r.serializers, d([r], l, s, this._stdErrSerialize));
        }
        function a(e) {
          ((this._childLevel = (0 | e._childLevel) + 1),
            (this.bindings = r),
            s && ((this.serializers = s), (this._serialize = l)),
            n && (this._logEvent = p([].concat(e._logEvent.bindings, r))));
        }
        a.prototype = this;
        let c = new a(this);
        return (
          u(this, c),
          (c.child = function () {
            for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
              r[n] = arguments[n];
            return S.call(this, t, ...r);
          }),
          (c.level = i.level || this.level),
          t.onChild(c),
          c
        );
      }
      return (
        (x.levels = (function (e) {
          let t = e.customLevels || {};
          return {
            values: Object.assign({}, c.levels.values, t),
            labels: Object.assign(
              {},
              c.levels.labels,
              (function (e) {
                let t = {};
                return (
                  Object.keys(e).forEach(function (r) {
                    t[e[r]] = r;
                  }),
                  t
                );
              })(t)
            ),
          };
        })(e)),
        (x.level = j),
        (x.isLevelEnabled = function (e) {
          return (
            !!this.levels.values[e] &&
            this.levels.values[e] >= this.levels.values[this.level]
          );
        }),
        (x.setMaxListeners =
          x.getMaxListeners =
          x.emit =
          x.addListener =
          x.on =
          x.prependListener =
          x.once =
          x.prependOnceListener =
          x.removeListener =
          x.removeAllListeners =
          x.listeners =
          x.listenerCount =
          x.eventNames =
          x.write =
          x.flush =
            g),
        (x.serializers = h),
        (x._serialize = v),
        (x._stdErrSerialize = m),
        (x.child = function () {
          for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          return S.call(this, O, ...t);
        }),
        n && (x._logEvent = p()),
        x
      );
    }
    function f(e, t, r, a) {
      var u, c, f, h, v, m, y;
      if (
        (Object.defineProperty(e, a, {
          value: o(e.level, r) > o(a, r) ? g : r[s][a],
          writable: !0,
          enumerable: !0,
          configurable: !0,
        }),
        e[a] === g)
      ) {
        if (!t.transmit) return;
        let n = o(t.transmit.level || e.level, r);
        if (o(a, r) < n) return;
      }
      e[a] =
        ((u = e),
        (c = t),
        (f = r),
        (h = a),
        (v = u[s][h]),
        function () {
          let e = c.timestamp(),
            t = Array(arguments.length),
            r =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                ? i
                : this;
          for (var s = 0; s < t.length; s++) t[s] = arguments[s];
          var l = !1;
          if (
            (c.serialize &&
              (d(t, this._serialize, this.serializers, this._stdErrSerialize),
              (l = !0)),
            c.asObject || c.formatters
              ? v.call(
                  r,
                  ...(function (e, t, r, i, o) {
                    let { level: s, log: l = (e) => e } = o.formatters || {},
                      a = r.slice(),
                      u = a[0],
                      c = {},
                      f = (0 | e._childLevel) + 1;
                    if (
                      (f < 1 && (f = 1),
                      i && (c.time = i),
                      s
                        ? Object.assign(c, s(t, e.levels.values[t]))
                        : (c.level = e.levels.values[t]),
                      o.asObjectBindingsOnly)
                    ) {
                      if (null !== u && 'object' == typeof u)
                        for (; f-- && 'object' == typeof a[0]; )
                          Object.assign(c, a.shift());
                      return [l(c), ...a];
                    }
                    if (null !== u && 'object' == typeof u) {
                      for (; f-- && 'object' == typeof a[0]; )
                        Object.assign(c, a.shift());
                      u = a.length ? n(a.shift(), a) : void 0;
                    } else 'string' == typeof u && (u = n(a.shift(), a));
                    return (void 0 !== u && (c[o.messageKey] = u), [l(c)]);
                  })(this, h, t, e, c)
                )
              : v.apply(r, t),
            c.transmit)
          ) {
            let r = c.transmit.level || u._level,
              n = o(r, f),
              i = o(h, f);
            if (i < n) return;
            !(function (e, t, r) {
              let n =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                i = t.send,
                o = t.ts,
                s = t.methodLevel,
                l = t.methodValue,
                a = t.val,
                u = e._logEvent.bindings;
              (n ||
                d(
                  r,
                  e._serialize || Object.keys(e.serializers),
                  e.serializers,
                  void 0 === e._stdErrSerialize || e._stdErrSerialize
                ),
                (e._logEvent.ts = o),
                (e._logEvent.messages = r.filter(function (e) {
                  return -1 === u.indexOf(e);
                })),
                (e._logEvent.level.label = s),
                (e._logEvent.level.value = l),
                i(s, e._logEvent, a),
                (e._logEvent = p(u)));
            })(
              this,
              {
                ts: e,
                methodLevel: h,
                methodValue: i,
                transmitLevel: r,
                transmitValue: f.levels.values[c.transmit.level || u._level],
                send: c.transmit.send,
                val: o(u._level, f),
              },
              t,
              l
            );
          }
        });
      let b = (function (e) {
        let t = [];
        e.bindings && t.push(e.bindings);
        let r = e[l];
        for (; r.parent; )
          (r = r.parent).logger.bindings && t.push(r.logger.bindings);
        return t.reverse();
      })(e);
      0 !== b.length &&
        (e[a] =
          ((m = b),
          (y = e[a]),
          function () {
            return y.apply(this, [...m, ...arguments]);
          }));
    }
    function d(e, t, r, n) {
      for (let i in e)
        if (n && e[i] instanceof Error) e[i] = c.stdSerializers.err(e[i]);
        else if ('object' == typeof e[i] && !Array.isArray(e[i]) && t)
          for (let n in e[i])
            t.indexOf(n) > -1 && n in r && (e[i][n] = r[n](e[i][n]));
    }
    function p(e) {
      return {
        ts: 0,
        messages: [],
        bindings: e || [],
        level: { label: '', value: 0 },
      };
    }
    function h(e) {
      let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
      for (let r in e) void 0 === t[r] && (t[r] = e[r]);
      return t;
    }
    function v() {
      return {};
    }
    function m(e) {
      return e;
    }
    function g() {}
    function y() {
      return !1;
    }
    function b() {
      return Date.now();
    }
    ((c.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10,
      },
      labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal',
      },
    }),
      (c.stdSerializers = {
        mapHttpRequest: v,
        mapHttpResponse: v,
        wrapRequestSerializer: m,
        wrapResponseSerializer: m,
        wrapErrorSerializer: m,
        req: v,
        res: v,
        err: h,
        errWithCause: h,
      }),
      (c.stdTimeFunctions = Object.assign(
        {},
        {
          nullTime: y,
          epochTime: b,
          unixTime: function () {
            return Math.round(Date.now() / 1e3);
          },
          isoTime: function () {
            return new Date(Date.now()).toISOString();
          },
        }
      )),
      (t.exports.default = c),
      (t.exports.pino = c));
  },
  11626,
  (e) => {
    'use strict';
    e.s(['logger', () => t]);
    let t = (0, e.i(69214).default)();
  },
  20176,
  9181,
  (e) => {
    'use strict';
    e.s(['WidgetCompassCompact', () => i], 20176);
    var t = e.i(94601),
      r = e.i(11626),
      n = e.i(36960);
    let i = () => {
      let [{ alpha: e = 0, error: i = '' }, o] = (0, n.useState)({
        alpha: 0,
        error: '',
      });
      return (
        (0, n.useEffect)(() => {
          let e = (e) => {
            (r.logger.info('event='.concat(e)),
              null !== e.alpha
                ? o((t) => {
                    var r, n;
                    return {
                      ...t,
                      alpha: parseFloat(
                        null !=
                          (n = null == (r = e.alpha) ? void 0 : r.toFixed(2))
                          ? n
                          : '0'
                      ),
                    };
                  })
                : o((e) => ({ ...e, error: 'Compass data not available' })));
          };
          return (
            (async () => {
              if (
                'function' == typeof DeviceOrientationEvent.requestPermission
              ) {
                r.logger.info('requestPermission with permission');
                try {
                  let t = await DeviceOrientationEvent.requestPermission();
                  'granted' === t
                    ? window.addEventListener('deviceorientation', e, !0)
                    : o((e) => ({
                        ...e,
                        error:
                          'Permission to access device orientation denied.',
                      }));
                } catch (e) {
                  (r.logger.error(e),
                    o((e) => ({
                      ...e,
                      error: 'Error requesting device orientation permission.',
                    })));
                }
              } else
                (r.logger.info('requestPermission without permission'),
                  window.addEventListener('deviceorientation', e, !0));
            })(),
            () => {
              window.removeEventListener('deviceorientation', e);
            }
          );
        }, []),
        i && r.logger.error('error='.concat(i)),
        (0, t.jsx)('div', {
          className:
            'shadow-3xl relative aspect-square w-full max-w-60 rounded-full bg-neutral-900 text-neutral-100',
          children: (0, t.jsxs)('div', {
            className:
              'relative flex h-full items-center justify-center text-5xl',
            children: [
              (0, t.jsxs)('p', {
                children: [
                  e,
                  '° ',
                  ((e) =>
                    (e >= 0 && e < 30) || e >= 330
                      ? 'N'
                      : e >= 30 && e < 60
                        ? 'NE'
                        : e >= 60 && e < 120
                          ? 'E'
                          : e >= 120 && e < 150
                            ? 'SE'
                            : e >= 150 && e < 210
                              ? 'S'
                              : e >= 210 && e < 240
                                ? 'SW'
                                : e >= 240 && e < 300
                                  ? 'W'
                                  : e >= 300 && e < 330
                                    ? 'NW'
                                    : '')(e),
                ],
              }),
              (0, t.jsx)('div', {
                className:
                  'absolute top-0 right-0 left-0 mx-auto flex justify-center py-4',
                children: (0, t.jsx)('div', {
                  className: 'aspect-square w-4 rounded-full bg-red-500',
                }),
              }),
            ],
          }),
        })
      );
    };
    e.s(['WidgetCompassFull', () => o], 9181);
    let o = () => {
      let [{ alpha: e = 0, error: i = '' }, o] = (0, n.useState)({
        alpha: 0,
        error: '',
      });
      return (
        (0, n.useEffect)(() => {
          let e = (e) => {
            (r.logger.info('event='.concat(e)),
              null !== e.alpha
                ? o((t) => {
                    var r, n;
                    return {
                      ...t,
                      alpha: parseFloat(
                        null !=
                          (n = null == (r = e.alpha) ? void 0 : r.toFixed(2))
                          ? n
                          : '0'
                      ),
                    };
                  })
                : o((e) => ({ ...e, error: 'Compass data not available' })));
          };
          return (
            (async () => {
              if (
                'function' == typeof DeviceOrientationEvent.requestPermission
              ) {
                r.logger.info('requestPermission with permission');
                try {
                  let t = await DeviceOrientationEvent.requestPermission();
                  'granted' === t
                    ? window.addEventListener('deviceorientation', e, !0)
                    : o((e) => ({
                        ...e,
                        error:
                          'Permission to access device orientation denied.',
                      }));
                } catch (e) {
                  (r.logger.error(e),
                    o((e) => ({
                      ...e,
                      error: 'Error requesting device orientation permission.',
                    })));
                }
              } else
                (r.logger.info('requestPermission without permission'),
                  window.addEventListener('deviceorientation', e, !0));
            })(),
            () => {
              window.removeEventListener('deviceorientation', e);
            }
          );
        }, []),
        i && r.logger.error('error='.concat(i)),
        (0, t.jsxs)('div', {
          className:
            'shadow-3xl relative aspect-square w-full max-w-60 rounded-full bg-neutral-900',
          children: [
            (0, t.jsx)('div', {
              className:
                'absolute top-0 right-0 left-0 mx-auto flex justify-center py-4',
              children: (0, t.jsx)('span', {
                className: 'font-black text-red-500',
                children: 'N',
              }),
            }),
            (0, t.jsx)('div', {
              className:
                'absolute top-0 bottom-0 left-0 mx-auto flex items-center px-4',
              children: (0, t.jsx)('span', {
                className: 'font-black text-neutral-100',
                children: 'W',
              }),
            }),
            (0, t.jsx)('div', {
              className:
                'absolute right-0 bottom-0 left-0 mx-auto flex justify-center py-4',
              children: (0, t.jsx)('span', {
                className: 'font-black text-neutral-100',
                children: 'S',
              }),
            }),
            (0, t.jsx)('div', {
              className:
                'absolute top-0 right-0 bottom-0 mx-auto flex items-center px-4',
              children: (0, t.jsx)('span', {
                className: 'font-black text-neutral-100',
                children: 'E',
              }),
            }),
            (0, t.jsx)('div', {
              className:
                'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto aspect-square w-4 rounded-full bg-neutral-900',
            }),
            (0, t.jsx)('div', {
              className:
                'absolute top-0 right-0 bottom-0 left-0 m-auto aspect-square w-6',
              style: { transform: 'rotate('.concat(e, 'deg)') },
              children: (0, t.jsx)('div', {
                className: 'relative h-full w-full',
                children: (0, t.jsxs)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 -left-1 m-auto flex h-36 w-8 flex-col gap-y-0',
                  children: [
                    (0, t.jsxs)('div', {
                      className: 'h-[50%] w-8',
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'clip-triangle inline-block h-full w-[50%] rotate-y-180 bg-white',
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'clip-triangle inline-block h-full w-[50%] bg-white',
                        }),
                      ],
                    }),
                    (0, t.jsxs)('div', {
                      className: 'h-[25%] w-8',
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'clip-triangle inline-block h-full w-[50%] rotate-y-180 bg-white',
                          style: {
                            transform: 'rotateX(180deg) rotateY(180deg)',
                          },
                        }),
                        (0, t.jsx)('div', {
                          className:
                            'clip-triangle inline-block h-full w-[50%] rotate-y-180 bg-white',
                          style: { transform: 'rotateX(180deg)' },
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        })
      );
    };
  },
  14288,
  (e) => {
    'use strict';
    e.s(['default', () => i]);
    var t = e.i(94601),
      r = e.i(20176),
      n = e.i(9181);
    let i = () =>
      (0, t.jsx)('div', {
        className:
          'h-[100vh] w-screen overflow-hidden bg-neutral-100 md:h-screen',
        children: (0, t.jsxs)('div', {
          className: 'grid h-full grid-cols-1 md:grid-cols-2',
          children: [
            (0, t.jsx)('div', {
              className: 'col-span-1',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(r.WidgetCompassCompact, {}),
              }),
            }),
            (0, t.jsx)('div', {
              className: 'col-span-1',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)(n.WidgetCompassFull, {}),
              }),
            }),
          ],
        }),
      });
  },
  80402,
  (e, t, r) => {
    let n = '/compass';
    ((window.__NEXT_P = window.__NEXT_P || []).push([n, () => e.r(14288)]),
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
