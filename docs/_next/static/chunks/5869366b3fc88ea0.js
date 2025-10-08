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
              o = (e.exports = {});
            function i() {
              throw Error('setTimeout has not been defined');
            }
            function a() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : i;
            } catch (e) {
              t = i;
            }
            try {
              n = 'function' == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              n = a;
            }
            function c(e) {
              if (t === setTimeout) return setTimeout(e, 0);
              if ((t === i || !t) && setTimeout)
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
            var u = [],
              s = !1,
              l = -1;
            function f() {
              s &&
                r &&
                ((s = !1),
                r.length ? (u = r.concat(u)) : (l = -1),
                u.length && d());
            }
            function d() {
              if (!s) {
                var e = c(f);
                s = !0;
                for (var t = u.length; t; ) {
                  for (r = u, u = []; ++l < t; ) r && r[l].run();
                  ((l = -1), (t = u.length));
                }
                ((r = null),
                  (s = !1),
                  (function (e) {
                    if (n === clearTimeout) return clearTimeout(e);
                    if ((n === a || !n) && clearTimeout)
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
            function p(e, t) {
              ((this.fun = e), (this.array = t));
            }
            function h() {}
            ((o.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                  t[n - 1] = arguments[n];
              (u.push(new p(e, t)), 1 !== u.length || s || c(d));
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
        n = {};
      function r(t) {
        var o = n[t];
        if (void 0 !== o) return o.exports;
        var i = (n[t] = { exports: {} }),
          a = !0;
        try {
          (e[t](i, i.exports, r), (a = !1));
        } finally {
          a && delete n[t];
        }
        return i.exports;
      }
      ((r.ab =
        '/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
        (t.exports = r(229)));
    })();
  },
  97244,
  (e, t, n) => {
    'use strict';
    var r, o;
    t.exports =
      (null == (r = e.g.process) ? void 0 : r.env) &&
      'object' == typeof (null == (o = e.g.process) ? void 0 : o.env)
        ? e.g.process
        : e.r(26388);
  },
  86234,
  (e, t, n) => {
    'use strict';
    var r = Symbol.for('react.transitional.element');
    function o(e, t, n) {
      var o = null;
      if (
        (void 0 !== n && (o = '' + n),
        void 0 !== t.key && (o = '' + t.key),
        'key' in t)
      )
        for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
      else n = t;
      return {
        $$typeof: r,
        type: e,
        key: o,
        ref: void 0 !== (t = n.ref) ? t : null,
        props: n,
      };
    }
    ((n.Fragment = Symbol.for('react.fragment')), (n.jsx = o), (n.jsxs = o));
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
      o = Symbol.for('react.transitional.element'),
      i = Symbol.for('react.portal'),
      a = Symbol.for('react.fragment'),
      c = Symbol.for('react.strict_mode'),
      u = Symbol.for('react.profiler'),
      s = Symbol.for('react.consumer'),
      l = Symbol.for('react.context'),
      f = Symbol.for('react.forward_ref'),
      d = Symbol.for('react.suspense'),
      p = Symbol.for('react.memo'),
      h = Symbol.for('react.lazy'),
      g = Symbol.for('react.activity'),
      m = Symbol.iterator,
      y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      _ = {};
    function b(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || y));
    }
    function x() {}
    function j(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = _),
        (this.updater = n || y));
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
      (x.prototype = b.prototype));
    var E = (j.prototype = new x());
    ((E.constructor = j), v(E, b.prototype), (E.isPureReactComponent = !0));
    var w = Array.isArray;
    function S() {}
    var T = { H: null, A: null, T: null, S: null },
      O = Object.prototype.hasOwnProperty;
    function P(e, t, n) {
      var r = n.ref;
      return {
        $$typeof: o,
        type: e,
        key: t,
        ref: void 0 !== r ? r : null,
        props: n,
      };
    }
    function k(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === o;
    }
    var N = /\/+/g;
    function C(e, t) {
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
    function R(e, t, n) {
      if (null == e) return e;
      var r = [],
        a = 0;
      return (
        !(function e(t, n, r, a, c) {
          var u,
            s,
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
                  case i:
                    d = !0;
                    break;
                  case h:
                    return e((d = t._init)(t._payload), n, r, a, c);
                }
            }
          if (d)
            return (
              (c = c(t)),
              (d = '' === a ? '.' + C(t, 0) : a),
              w(c)
                ? ((r = ''),
                  null != d && (r = d.replace(N, '$&/') + '/'),
                  e(c, n, r, '', function (e) {
                    return e;
                  }))
                : null != c &&
                  (k(c) &&
                    ((u = c),
                    (s =
                      r +
                      (null == c.key || (t && t.key === c.key)
                        ? ''
                        : ('' + c.key).replace(N, '$&/') + '/') +
                      d),
                    (c = P(u.type, s, u.props))),
                  n.push(c)),
              1
            );
          d = 0;
          var p = '' === a ? '.' : a + ':';
          if (w(t))
            for (var g = 0; g < t.length; g++)
              ((f = p + C((a = t[g]), g)), (d += e(a, n, r, f, c)));
          else if (
            'function' ==
            typeof (g =
              null === (l = t) || 'object' != typeof l
                ? null
                : 'function' == typeof (l = (m && l[m]) || l['@@iterator'])
                  ? l
                  : null)
          )
            for (t = g.call(t), g = 0; !(a = t.next()).done; )
              ((f = p + C((a = a.value), g++)), (d += e(a, n, r, f, c)));
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
                n,
                r,
                a,
                c
              );
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (n = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : n) +
                '). If you meant to render a collection of children, use an array instead.'
            );
          }
          return d;
        })(e, r, '', '', function (e) {
          return t.call(n, e, a++);
        }),
        r
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
              'object' == typeof r.default &&
              'function' == typeof r.default.emit
            )
              return void r.default.emit('uncaughtException', e);
            console.error(e);
          };
    ((n.Activity = g),
      (n.Children = {
        map: R,
        forEach: function (e, t, n) {
          R(
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
      (n.Component = b),
      (n.Fragment = a),
      (n.Profiler = u),
      (n.PureComponent = j),
      (n.StrictMode = c),
      (n.Suspense = d),
      (n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
      (n.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return T.H.useMemoCache(e);
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
        var r = v({}, e.props),
          o = e.key;
        if (null != t)
          for (i in (void 0 !== t.key && (o = '' + t.key), t))
            O.call(t, i) &&
              'key' !== i &&
              '__self' !== i &&
              '__source' !== i &&
              ('ref' !== i || void 0 !== t.ref) &&
              (r[i] = t[i]);
        var i = arguments.length - 2;
        if (1 === i) r.children = n;
        else if (1 < i) {
          for (var a = Array(i), c = 0; c < i; c++) a[c] = arguments[c + 2];
          r.children = a;
        }
        return P(e.type, o, r);
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
          (e.Consumer = { $$typeof: s, _context: e }),
          e
        );
      }),
      (n.createElement = function (e, t, n) {
        var r,
          o = {},
          i = null;
        if (null != t)
          for (r in (void 0 !== t.key && (i = '' + t.key), t))
            O.call(t, r) &&
              'key' !== r &&
              '__self' !== r &&
              '__source' !== r &&
              (o[r] = t[r]);
        var a = arguments.length - 2;
        if (1 === a) o.children = n;
        else if (1 < a) {
          for (var c = Array(a), u = 0; u < a; u++) c[u] = arguments[u + 2];
          o.children = c;
        }
        if (e && e.defaultProps)
          for (r in (a = e.defaultProps)) void 0 === o[r] && (o[r] = a[r]);
        return P(e, i, o);
      }),
      (n.createRef = function () {
        return { current: null };
      }),
      (n.forwardRef = function (e) {
        return { $$typeof: f, render: e };
      }),
      (n.isValidElement = k),
      (n.lazy = function (e) {
        return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: M };
      }),
      (n.memo = function (e, t) {
        return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
      }),
      (n.startTransition = function (e) {
        var t = T.T,
          n = {};
        T.T = n;
        try {
          var r = e(),
            o = T.S;
          (null !== o && o(n, r),
            'object' == typeof r &&
              null !== r &&
              'function' == typeof r.then &&
              r.then(S, A));
        } catch (e) {
          A(e);
        } finally {
          (null !== t && null !== n.types && (t.types = n.types), (T.T = t));
        }
      }),
      (n.unstable_useCacheRefresh = function () {
        return T.H.useCacheRefresh();
      }),
      (n.use = function (e) {
        return T.H.use(e);
      }),
      (n.useActionState = function (e, t, n) {
        return T.H.useActionState(e, t, n);
      }),
      (n.useCallback = function (e, t) {
        return T.H.useCallback(e, t);
      }),
      (n.useContext = function (e) {
        return T.H.useContext(e);
      }),
      (n.useDebugValue = function () {}),
      (n.useDeferredValue = function (e, t) {
        return T.H.useDeferredValue(e, t);
      }),
      (n.useEffect = function (e, t) {
        return T.H.useEffect(e, t);
      }),
      (n.useEffectEvent = function (e) {
        return T.H.useEffectEvent(e);
      }),
      (n.useId = function () {
        return T.H.useId();
      }),
      (n.useImperativeHandle = function (e, t, n) {
        return T.H.useImperativeHandle(e, t, n);
      }),
      (n.useInsertionEffect = function (e, t) {
        return T.H.useInsertionEffect(e, t);
      }),
      (n.useLayoutEffect = function (e, t) {
        return T.H.useLayoutEffect(e, t);
      }),
      (n.useMemo = function (e, t) {
        return T.H.useMemo(e, t);
      }),
      (n.useOptimistic = function (e, t) {
        return T.H.useOptimistic(e, t);
      }),
      (n.useReducer = function (e, t, n) {
        return T.H.useReducer(e, t, n);
      }),
      (n.useRef = function (e) {
        return T.H.useRef(e);
      }),
      (n.useState = function (e) {
        return T.H.useState(e);
      }),
      (n.useSyncExternalStore = function (e, t, n) {
        return T.H.useSyncExternalStore(e, t, n);
      }),
      (n.useTransition = function () {
        return T.H.useTransition();
      }),
      (n.version = '19.2.0'));
  },
  36960,
  (e, t, n) => {
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
        () => c,
        'getNumberOfDaysPerMonth',
        () => a,
        'getOrdinalSuffix',
        () => i,
        'months',
        () => n,
        'shortMonths',
        () => r,
        'weekdays',
        () => o,
      ],
      1143
    ),
      e.s(['addZero', () => t], 98387));
    let t = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          n = e.toString().length;
        return ''.concat('0'.repeat(t >= n ? t - n : 0)).concat(e);
      },
      n = [
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
      r = [
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
      i = (e) => {
        let t = e % 10,
          n = e % 100;
        return 1 === t && 11 !== n
          ? 'st'
          : 2 === t && 12 !== n
            ? 'nd'
            : 3 === t && 13 !== n
              ? 'rd'
              : 'th';
      },
      a = (e) => [
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
      c = 1e3;
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
      var o = { __proto__: null },
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
        if ('default' !== a && Object.prototype.hasOwnProperty.call(e, a)) {
          var c = i ? Object.getOwnPropertyDescriptor(e, a) : null;
          c && (c.get || c.set)
            ? Object.defineProperty(o, a, c)
            : (o[a] = e[a]);
        }
      return ((o.default = e), n && n.set(e, o), o);
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
  52085,
  (e) => {
    e.v('/nothing.tech/_next/static/media/01.c3232bdd.jpg');
  },
  76917,
  (e) => {
    e.v('/nothing.tech/_next/static/media/02.89b61f5c.jpg');
  },
  44113,
  (e) => {
    e.v('/nothing.tech/_next/static/media/03.efab88fc.jpg');
  },
  50709,
  (e) => {
    e.v('/nothing.tech/_next/static/media/04.1beeba2e.jpg');
  },
  84305,
  (e) => {
    e.v('/nothing.tech/_next/static/media/05.2c8f6927.jpg');
  },
  93863,
  (e) => {
    e.v('/nothing.tech/_next/static/media/06.062ba8c1.jpg');
  },
  97275,
  (e) => {
    e.v('/nothing.tech/_next/static/media/07.d9a1c3ec.jpg');
  },
  23438,
  (e) => {
    e.v('/nothing.tech/_next/static/media/01.41084b0a.jpg');
  },
  22805,
  (e) => {
    e.v('/nothing.tech/_next/static/media/02.44835119.jpg');
  },
  56701,
  (e) => {
    e.v('/nothing.tech/_next/static/media/03.9e956462.jpg');
  },
  96751,
  (e) => {
    e.v('/nothing.tech/_next/static/media/04.a556c457.jpg');
  },
  95816,
  (e) => {
    e.v('/nothing.tech/_next/static/media/05.9ddbf7a8.jpg');
  },
  89489,
  (e) => {
    e.v('/nothing.tech/_next/static/media/06.352d4844.jpg');
  },
  3971,
  (e) => {
    e.v('/nothing.tech/_next/static/media/01.7a16aae6.png');
  },
  18816,
  (e) => {
    e.v('/nothing.tech/_next/static/media/01.0b8729de.jpg');
  },
  53681,
  (e) => {
    e.v('/nothing.tech/_next/static/media/02.4d8b92a9.jpg');
  },
  43969,
  (e) => {
    e.v('/nothing.tech/_next/static/media/03.59eb7e36.jpg');
  },
  3032,
  (e) => {
    e.v('/nothing.tech/_next/static/media/04.ec371f12.jpg');
  },
  84850,
  (e) => {
    e.v('/nothing.tech/_next/static/media/05.33a5adb6.jpg');
  },
  78680,
  (e) => {
    e.v('/nothing.tech/_next/static/media/06.4850bbd9.jpg');
  },
  9135,
  (e) => {
    e.v('/nothing.tech/_next/static/media/07.3cfa73b8.jpg');
  },
  50479,
  (e) => {
    e.v('/nothing.tech/_next/static/media/01.c15aaead.jpg');
  },
  58809,
  (e) => {
    e.v('/nothing.tech/_next/static/media/02.3ab9edc1.jpg');
  },
  75319,
  (e) => {
    e.v('/nothing.tech/_next/static/media/03.05747e37.jpg');
  },
  15805,
  (e) => {
    e.v('/nothing.tech/_next/static/media/04.41da664a.jpg');
  },
  10553,
  (e) => {
    e.v('/nothing.tech/_next/static/media/05.563e5337.jpg');
  },
  87922,
  (e) => {
    e.v('/nothing.tech/_next/static/media/06.1a183c35.jpg');
  },
  93154,
  (e) => {
    e.v('/nothing.tech/_next/static/media/07.4c199ad5.jpg');
  },
  57644,
  (e) => {
    e.v('/nothing.tech/_next/static/media/08.e1a360e1.jpg');
  },
  50536,
  (e) => {
    e.v('/nothing.tech/_next/static/media/09.48162ece.jpg');
  },
  65750,
  (e) => {
    e.v('/nothing.tech/_next/static/media/01.1e824ef4.jpg');
  },
  86663,
  (e) => {
    e.v('/nothing.tech/_next/static/media/02.f5a43d6c.jpg');
  },
  82446,
  (e) => {
    e.v('/nothing.tech/_next/static/media/03.a9348b7d.jpg');
  },
  63708,
  (e) => {
    e.v('/nothing.tech/_next/static/media/04.cb595215.jpg');
  },
  63375,
  (e) => {
    e.v('/nothing.tech/_next/static/media/05.7ee37507.jpg');
  },
  99216,
  (e) => {
    e.v('/nothing.tech/_next/static/media/06.708899ea.jpg');
  },
  62584,
  (e) => {
    e.v('/nothing.tech/_next/static/media/07.392b78ad.jpg');
  },
  54066,
  (e) => {
    e.v('/nothing.tech/_next/static/media/08.ba893c53.jpg');
  },
  27642,
  (e) => {
    e.v('/nothing.tech/_next/static/media/09.b59b7973.jpg');
  },
  75087,
  (e) => {
    e.v('/nothing.tech/_next/static/media/10.0bcd968a.jpg');
  },
  76460,
  (e) => {
    e.v('/nothing.tech/_next/static/media/11.8489ad4f.jpg');
  },
  8115,
  (e) => {
    e.v('/nothing.tech/_next/static/media/12.f9c2e231.jpg');
  },
  95790,
  (e) => {
    e.v('/nothing.tech/_next/static/media/13.105ebfa5.jpg');
  },
  63556,
  (e) => {
    e.v('/nothing.tech/_next/static/media/14.b1cfb155.jpg');
  },
  30569,
  (e) => {
    e.v('/nothing.tech/_next/static/media/15.f59f4a4a.jpg');
  },
  90989,
  (e) => {
    e.v('/nothing.tech/_next/static/media/16.40f1a4aa.jpg');
  },
  4454,
  (e) => {
    e.v('/nothing.tech/_next/static/media/17.0b16a175.jpg');
  },
  4675,
  (e) => {
    e.v('/nothing.tech/_next/static/media/18.88f304a8.jpg');
  },
  55479,
  (e) => {
    e.v('/nothing.tech/_next/static/media/19.e9f120ea.jpg');
  },
  13695,
  (e) => {
    e.v('/nothing.tech/_next/static/media/20.5991d8c0.jpg');
  },
  51926,
  (e) => {
    e.v('/nothing.tech/_next/static/media/21.78413447.jpg');
  },
  19058,
  (e) => {
    e.v('/nothing.tech/_next/static/media/22.41f8dc78.jpg');
  },
  99039,
  (e) => {
    e.v('/nothing.tech/_next/static/media/23.c9b24448.jpg');
  },
  37048,
  (e) => {
    e.v('/nothing.tech/_next/static/media/24.74300152.jpg');
  },
  83281,
  (e) => {
    e.v('/nothing.tech/_next/static/media/25.c7b4c95d.jpg');
  },
  3974,
  (e) => {
    e.v('/nothing.tech/_next/static/media/26.ee5ace6a.jpg');
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
          return g;
        },
        MiddlewareNotFoundError: function () {
          return _;
        },
        MissingStaticPage: function () {
          return v;
        },
        NormalizeError: function () {
          return m;
        },
        PageNotFoundError: function () {
          return y;
        },
        SP: function () {
          return p;
        },
        ST: function () {
          return h;
        },
        WEB_VITALS: function () {
          return r;
        },
        execOnce: function () {
          return o;
        },
        getDisplayName: function () {
          return s;
        },
        getLocationOrigin: function () {
          return c;
        },
        getURL: function () {
          return u;
        },
        isAbsoluteUrl: function () {
          return a;
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
    let r = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function o(e) {
      let t,
        n = !1;
      return function () {
        for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
          o[i] = arguments[i];
        return (n || ((n = !0), (t = e(...o))), t);
      };
    }
    let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      a = (e) => i.test(e);
    function c() {
      let { protocol: e, hostname: t, port: n } = window.location;
      return e + '//' + t + (n ? ':' + n : '');
    }
    function u() {
      let { href: e } = window.location,
        t = c();
      return e.substring(t.length);
    }
    function s(e) {
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
      let n = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await d(t.Component, t.ctx) }
          : {};
      let r = await e.getInitialProps(t);
      if (n && l(n)) return r;
      if (!r)
        throw Object.defineProperty(
          Error(
            '"' +
              s(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 }
        );
      return r;
    }
    let p = 'undefined' != typeof performance,
      h =
        p &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class g extends Error {}
    class m extends Error {}
    class y extends Error {
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
    class _ extends Error {
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
  33495,
  (e) => {
    'use strict';
    e.s(['default', () => a]);
    var t = e.i(94601),
      n = e.i(9869),
      r = e.i(17026),
      o = e.i(36960),
      i = e.i(66709);
    let a = () => {
      let [{ full: e }, a] = (0, o.useState)({ full: !1 });
      return (0, t.jsxs)(t.Fragment, {
        children: [
          !e &&
            (0, t.jsx)('div', {
              className:
                'fixed top-0 right-0 bottom-0 left-0 z-10 h-full w-full overflow-hidden bg-neutral-100',
              children: (0, t.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, t.jsx)('button', {
                  type: 'button',
                  className: 'w-full max-w-60 cursor-pointer',
                  onClick: () => {
                    a({ full: !0 });
                  },
                  children: (0, t.jsx)(r.WidgetPhotos, {}),
                }),
              }),
            }),
          e &&
            (0, t.jsx)('button', {
              className:
                'fixed top-4 right-4 z-10 cursor-pointer rounded-full bg-neutral-900 p-4',
              onClick: () => {
                a({ full: !1 });
              },
              children: (0, t.jsx)(i.FaMinimize, {}),
            }),
          (0, t.jsx)('div', {
            className:
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-12',
            children: n.images.map((e, n) =>
              (0, t.jsx)(
                'div',
                {
                  className: 'col-span-1',
                  children: (0, t.jsx)('div', {
                    className:
                      'aspect-square w-full bg-cover bg-center bg-no-repeat grayscale transition-all duration-300 hover:grayscale-0',
                    style: { backgroundImage: 'url('.concat(e.src, ')') },
                  }),
                },
                'image'.concat(n.toString())
              )
            ),
          }),
        ],
      });
    };
  },
  34457,
  (e, t, n) => {
    let r = '/photos';
    ((window.__NEXT_P = window.__NEXT_P || []).push([r, () => e.r(33495)]),
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
