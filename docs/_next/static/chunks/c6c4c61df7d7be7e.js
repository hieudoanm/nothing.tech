(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  'object' == typeof document ? document.currentScript : void 0,
  26388,
  (e, t, s) => {
    !(function () {
      var e = {
          229: function (e) {
            var t,
              s,
              l,
              r = (e.exports = {});
            function a() {
              throw Error('setTimeout has not been defined');
            }
            function i() {
              throw Error('clearTimeout has not been defined');
            }
            try {
              t = 'function' == typeof setTimeout ? setTimeout : a;
            } catch (e) {
              t = a;
            }
            try {
              s = 'function' == typeof clearTimeout ? clearTimeout : i;
            } catch (e) {
              s = i;
            }
            function n(e) {
              if (t === setTimeout) return setTimeout(e, 0);
              if ((t === a || !t) && setTimeout)
                return ((t = setTimeout), setTimeout(e, 0));
              try {
                return t(e, 0);
              } catch (s) {
                try {
                  return t.call(null, e, 0);
                } catch (s) {
                  return t.call(this, e, 0);
                }
              }
            }
            var c = [],
              o = !1,
              d = -1;
            function u() {
              o &&
                l &&
                ((o = !1),
                l.length ? (c = l.concat(c)) : (d = -1),
                c.length && f());
            }
            function f() {
              if (!o) {
                var e = n(u);
                o = !0;
                for (var t = c.length; t; ) {
                  for (l = c, c = []; ++d < t; ) l && l[d].run();
                  ((d = -1), (t = c.length));
                }
                ((l = null),
                  (o = !1),
                  (function (e) {
                    if (s === clearTimeout) return clearTimeout(e);
                    if ((s === i || !s) && clearTimeout)
                      return ((s = clearTimeout), clearTimeout(e));
                    try {
                      s(e);
                    } catch (t) {
                      try {
                        return s.call(null, e);
                      } catch (t) {
                        return s.call(this, e);
                      }
                    }
                  })(e));
              }
            }
            function x(e, t) {
              ((this.fun = e), (this.array = t));
            }
            function h() {}
            ((r.nextTick = function (e) {
              var t = Array(arguments.length - 1);
              if (arguments.length > 1)
                for (var s = 1; s < arguments.length; s++)
                  t[s - 1] = arguments[s];
              (c.push(new x(e, t)), 1 !== c.length || o || n(f));
            }),
              (x.prototype.run = function () {
                this.fun.apply(null, this.array);
              }),
              (r.title = 'browser'),
              (r.browser = !0),
              (r.env = {}),
              (r.argv = []),
              (r.version = ''),
              (r.versions = {}),
              (r.on = h),
              (r.addListener = h),
              (r.once = h),
              (r.off = h),
              (r.removeListener = h),
              (r.removeAllListeners = h),
              (r.emit = h),
              (r.prependListener = h),
              (r.prependOnceListener = h),
              (r.listeners = function (e) {
                return [];
              }),
              (r.binding = function (e) {
                throw Error('process.binding is not supported');
              }),
              (r.cwd = function () {
                return '/';
              }),
              (r.chdir = function (e) {
                throw Error('process.chdir is not supported');
              }),
              (r.umask = function () {
                return 0;
              }));
          },
        },
        s = {};
      function l(t) {
        var r = s[t];
        if (void 0 !== r) return r.exports;
        var a = (s[t] = { exports: {} }),
          i = !0;
        try {
          (e[t](a, a.exports, l), (i = !1));
        } finally {
          i && delete s[t];
        }
        return a.exports;
      }
      ((l.ab =
        '/ROOT/node_modules/.pnpm/next@15.5.4_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/process/'),
        (t.exports = l(229)));
    })();
  },
  97244,
  (e, t, s) => {
    'use strict';
    var l, r;
    t.exports =
      (null == (l = e.g.process) ? void 0 : l.env) &&
      'object' == typeof (null == (r = e.g.process) ? void 0 : r.env)
        ? e.g.process
        : e.r(26388);
  },
  86234,
  (e, t, s) => {
    'use strict';
    var l = Symbol.for('react.transitional.element');
    function r(e, t, s) {
      var r = null;
      if (
        (void 0 !== s && (r = '' + s),
        void 0 !== t.key && (r = '' + t.key),
        'key' in t)
      )
        for (var a in ((s = {}), t)) 'key' !== a && (s[a] = t[a]);
      else s = t;
      return {
        $$typeof: l,
        type: e,
        key: r,
        ref: void 0 !== (t = s.ref) ? t : null,
        props: s,
      };
    }
    ((s.Fragment = Symbol.for('react.fragment')), (s.jsx = r), (s.jsxs = r));
  },
  94601,
  (e, t, s) => {
    'use strict';
    t.exports = e.r(86234);
  },
  14513,
  (e, t, s) => {
    'use strict';
    var l = e.i(97244),
      r = Symbol.for('react.transitional.element'),
      a = Symbol.for('react.portal'),
      i = Symbol.for('react.fragment'),
      n = Symbol.for('react.strict_mode'),
      c = Symbol.for('react.profiler'),
      o = Symbol.for('react.consumer'),
      d = Symbol.for('react.context'),
      u = Symbol.for('react.forward_ref'),
      f = Symbol.for('react.suspense'),
      x = Symbol.for('react.memo'),
      h = Symbol.for('react.lazy'),
      m = Symbol.for('react.activity'),
      g = Symbol.iterator,
      p = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = Object.assign,
      j = {};
    function w(e, t, s) {
      ((this.props = e),
        (this.context = t),
        (this.refs = j),
        (this.updater = s || p));
    }
    function b() {}
    function N(e, t, s) {
      ((this.props = e),
        (this.context = t),
        (this.refs = j),
        (this.updater = s || p));
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
      (b.prototype = w.prototype));
    var y = (N.prototype = new b());
    ((y.constructor = N), v(y, w.prototype), (y.isPureReactComponent = !0));
    var k = Array.isArray;
    function _() {}
    var S = { H: null, A: null, T: null, S: null },
      F = Object.prototype.hasOwnProperty;
    function E(e, t, s) {
      var l = s.ref;
      return {
        $$typeof: r,
        type: e,
        key: t,
        ref: void 0 !== l ? l : null,
        props: s,
      };
    }
    function T(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === r;
    }
    var C = /\/+/g;
    function O(e, t) {
      var s, l;
      return 'object' == typeof e && null !== e && null != e.key
        ? ((s = '' + e.key),
          (l = { '=': '=0', ':': '=2' }),
          '$' +
            s.replace(/[=:]/g, function (e) {
              return l[e];
            }))
        : t.toString(36);
    }
    function P(e, t, s) {
      if (null == e) return e;
      var l = [],
        i = 0;
      return (
        !(function e(t, s, l, i, n) {
          var c,
            o,
            d,
            u = typeof t;
          ('undefined' === u || 'boolean' === u) && (t = null);
          var f = !1;
          if (null === t) f = !0;
          else
            switch (u) {
              case 'bigint':
              case 'string':
              case 'number':
                f = !0;
                break;
              case 'object':
                switch (t.$$typeof) {
                  case r:
                  case a:
                    f = !0;
                    break;
                  case h:
                    return e((f = t._init)(t._payload), s, l, i, n);
                }
            }
          if (f)
            return (
              (n = n(t)),
              (f = '' === i ? '.' + O(t, 0) : i),
              k(n)
                ? ((l = ''),
                  null != f && (l = f.replace(C, '$&/') + '/'),
                  e(n, s, l, '', function (e) {
                    return e;
                  }))
                : null != n &&
                  (T(n) &&
                    ((c = n),
                    (o =
                      l +
                      (null == n.key || (t && t.key === n.key)
                        ? ''
                        : ('' + n.key).replace(C, '$&/') + '/') +
                      f),
                    (n = E(c.type, o, c.props))),
                  s.push(n)),
              1
            );
          f = 0;
          var x = '' === i ? '.' : i + ':';
          if (k(t))
            for (var m = 0; m < t.length; m++)
              ((u = x + O((i = t[m]), m)), (f += e(i, s, l, u, n)));
          else if (
            'function' ==
            typeof (m =
              null === (d = t) || 'object' != typeof d
                ? null
                : 'function' == typeof (d = (g && d[g]) || d['@@iterator'])
                  ? d
                  : null)
          )
            for (t = m.call(t), m = 0; !(i = t.next()).done; )
              ((u = x + O((i = i.value), m++)), (f += e(i, s, l, u, n)));
          else if ('object' === u) {
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
                          ? e.then(_, _)
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
                s,
                l,
                i,
                n
              );
            throw Error(
              'Objects are not valid as a React child (found: ' +
                ('[object Object]' === (s = String(t))
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : s) +
                '). If you meant to render a collection of children, use an array instead.'
            );
          }
          return f;
        })(e, l, '', '', function (e) {
          return t.call(s, e, i++);
        }),
        l
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
    var W =
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
              'object' == typeof l.default &&
              'function' == typeof l.default.emit
            )
              return void l.default.emit('uncaughtException', e);
            console.error(e);
          };
    ((s.Activity = m),
      (s.Children = {
        map: P,
        forEach: function (e, t, s) {
          P(
            e,
            function () {
              t.apply(this, arguments);
            },
            s
          );
        },
        count: function (e) {
          var t = 0;
          return (
            P(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            P(e, function (e) {
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
      (s.Component = w),
      (s.Fragment = i),
      (s.Profiler = c),
      (s.PureComponent = N),
      (s.StrictMode = n),
      (s.Suspense = f),
      (s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = S),
      (s.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (e) {
          return S.H.useMemoCache(e);
        },
      }),
      (s.cache = function (e) {
        return function () {
          return e.apply(null, arguments);
        };
      }),
      (s.cacheSignal = function () {
        return null;
      }),
      (s.cloneElement = function (e, t, s) {
        if (null == e)
          throw Error(
            'The argument must be a React element, but you passed ' + e + '.'
          );
        var l = v({}, e.props),
          r = e.key;
        if (null != t)
          for (a in (void 0 !== t.key && (r = '' + t.key), t))
            F.call(t, a) &&
              'key' !== a &&
              '__self' !== a &&
              '__source' !== a &&
              ('ref' !== a || void 0 !== t.ref) &&
              (l[a] = t[a]);
        var a = arguments.length - 2;
        if (1 === a) l.children = s;
        else if (1 < a) {
          for (var i = Array(a), n = 0; n < a; n++) i[n] = arguments[n + 2];
          l.children = i;
        }
        return E(e.type, r, l);
      }),
      (s.createContext = function (e) {
        return (
          ((e = {
            $$typeof: d,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = e),
          (e.Consumer = { $$typeof: o, _context: e }),
          e
        );
      }),
      (s.createElement = function (e, t, s) {
        var l,
          r = {},
          a = null;
        if (null != t)
          for (l in (void 0 !== t.key && (a = '' + t.key), t))
            F.call(t, l) &&
              'key' !== l &&
              '__self' !== l &&
              '__source' !== l &&
              (r[l] = t[l]);
        var i = arguments.length - 2;
        if (1 === i) r.children = s;
        else if (1 < i) {
          for (var n = Array(i), c = 0; c < i; c++) n[c] = arguments[c + 2];
          r.children = n;
        }
        if (e && e.defaultProps)
          for (l in (i = e.defaultProps)) void 0 === r[l] && (r[l] = i[l]);
        return E(e, a, r);
      }),
      (s.createRef = function () {
        return { current: null };
      }),
      (s.forwardRef = function (e) {
        return { $$typeof: u, render: e };
      }),
      (s.isValidElement = T),
      (s.lazy = function (e) {
        return { $$typeof: h, _payload: { _status: -1, _result: e }, _init: M };
      }),
      (s.memo = function (e, t) {
        return { $$typeof: x, type: e, compare: void 0 === t ? null : t };
      }),
      (s.startTransition = function (e) {
        var t = S.T,
          s = {};
        S.T = s;
        try {
          var l = e(),
            r = S.S;
          (null !== r && r(s, l),
            'object' == typeof l &&
              null !== l &&
              'function' == typeof l.then &&
              l.then(_, W));
        } catch (e) {
          W(e);
        } finally {
          (null !== t && null !== s.types && (t.types = s.types), (S.T = t));
        }
      }),
      (s.unstable_useCacheRefresh = function () {
        return S.H.useCacheRefresh();
      }),
      (s.use = function (e) {
        return S.H.use(e);
      }),
      (s.useActionState = function (e, t, s) {
        return S.H.useActionState(e, t, s);
      }),
      (s.useCallback = function (e, t) {
        return S.H.useCallback(e, t);
      }),
      (s.useContext = function (e) {
        return S.H.useContext(e);
      }),
      (s.useDebugValue = function () {}),
      (s.useDeferredValue = function (e, t) {
        return S.H.useDeferredValue(e, t);
      }),
      (s.useEffect = function (e, t) {
        return S.H.useEffect(e, t);
      }),
      (s.useEffectEvent = function (e) {
        return S.H.useEffectEvent(e);
      }),
      (s.useId = function () {
        return S.H.useId();
      }),
      (s.useImperativeHandle = function (e, t, s) {
        return S.H.useImperativeHandle(e, t, s);
      }),
      (s.useInsertionEffect = function (e, t) {
        return S.H.useInsertionEffect(e, t);
      }),
      (s.useLayoutEffect = function (e, t) {
        return S.H.useLayoutEffect(e, t);
      }),
      (s.useMemo = function (e, t) {
        return S.H.useMemo(e, t);
      }),
      (s.useOptimistic = function (e, t) {
        return S.H.useOptimistic(e, t);
      }),
      (s.useReducer = function (e, t, s) {
        return S.H.useReducer(e, t, s);
      }),
      (s.useRef = function (e) {
        return S.H.useRef(e);
      }),
      (s.useState = function (e) {
        return S.H.useState(e);
      }),
      (s.useSyncExternalStore = function (e, t, s) {
        return S.H.useSyncExternalStore(e, t, s);
      }),
      (s.useTransition = function () {
        return S.H.useTransition();
      }),
      (s.version = '19.2.0'));
  },
  36960,
  (e, t, s) => {
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
        () => n,
        'getNumberOfDaysPerMonth',
        () => i,
        'getOrdinalSuffix',
        () => a,
        'months',
        () => s,
        'shortMonths',
        () => l,
        'weekdays',
        () => r,
      ],
      1143
    ),
      e.s(['addZero', () => t], 98387));
    let t = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          s = e.toString().length;
        return ''.concat('0'.repeat(t >= s ? t - s : 0)).concat(e);
      },
      s = [
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
      l = [
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
      r = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      a = (e) => {
        let t = e % 10,
          s = e % 100;
        return 1 === t && 11 !== s
          ? 'st'
          : 2 === t && 12 !== s
            ? 'nd'
            : 3 === t && 13 !== s
              ? 'rd'
              : 'th';
      },
      i = (e) => [
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
      n = 1e3;
  },
  2879,
  (e, t, s) => {
    'use strict';
    s._ = function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  },
  87602,
  (e, t, s) => {
    'use strict';
    function l(e) {
      if ('function' != typeof WeakMap) return null;
      var t = new WeakMap(),
        s = new WeakMap();
      return (l = function (e) {
        return e ? s : t;
      })(e);
    }
    s._ = function (e, t) {
      if (!t && e && e.__esModule) return e;
      if (null === e || ('object' != typeof e && 'function' != typeof e))
        return { default: e };
      var s = l(t);
      if (s && s.has(e)) return s.get(e);
      var r = { __proto__: null },
        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var i in e)
        if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
          var n = a ? Object.getOwnPropertyDescriptor(e, i) : null;
          n && (n.get || n.set)
            ? Object.defineProperty(r, i, n)
            : (r[i] = e[i]);
        }
      return ((r.default = e), s && s.set(e, r), r);
    };
  },
  79438,
  (e, t, s) => {
    'use strict';
    (Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'HeadManagerContext', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let l = e.r(2879)._(e.r(36960)).default.createContext({});
  },
  56220,
  (e, t, s) => {
    'use strict';
    (Object.defineProperty(s, '__esModule', { value: !0 }),
      Object.defineProperty(s, 'warnOnce', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    let l = (e) => {};
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
  (e, t, s) => {
    'use strict';
    (Object.defineProperty(s, '__esModule', { value: !0 }),
      !(function (e, t) {
        for (var s in t)
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
      })(s, {
        DecodeError: function () {
          return m;
        },
        MiddlewareNotFoundError: function () {
          return j;
        },
        MissingStaticPage: function () {
          return v;
        },
        NormalizeError: function () {
          return g;
        },
        PageNotFoundError: function () {
          return p;
        },
        SP: function () {
          return x;
        },
        ST: function () {
          return h;
        },
        WEB_VITALS: function () {
          return l;
        },
        execOnce: function () {
          return r;
        },
        getDisplayName: function () {
          return o;
        },
        getLocationOrigin: function () {
          return n;
        },
        getURL: function () {
          return c;
        },
        isAbsoluteUrl: function () {
          return i;
        },
        isResSent: function () {
          return d;
        },
        loadGetInitialProps: function () {
          return f;
        },
        normalizeRepeatedSlashes: function () {
          return u;
        },
        stringifyError: function () {
          return w;
        },
      }));
    let l = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
    function r(e) {
      let t,
        s = !1;
      return function () {
        for (var l = arguments.length, r = Array(l), a = 0; a < l; a++)
          r[a] = arguments[a];
        return (s || ((s = !0), (t = e(...r))), t);
      };
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
      i = (e) => a.test(e);
    function n() {
      let { protocol: e, hostname: t, port: s } = window.location;
      return e + '//' + t + (s ? ':' + s : '');
    }
    function c() {
      let { href: e } = window.location,
        t = n();
      return e.substring(t.length);
    }
    function o(e) {
      return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
    }
    function d(e) {
      return e.finished || e.headersSent;
    }
    function u(e) {
      let t = e.split('?');
      return (
        t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') +
        (t[1] ? '?' + t.slice(1).join('?') : '')
      );
    }
    async function f(e, t) {
      let s = t.res || (t.ctx && t.ctx.res);
      if (!e.getInitialProps)
        return t.ctx && t.Component
          ? { pageProps: await f(t.Component, t.ctx) }
          : {};
      let l = await e.getInitialProps(t);
      if (s && d(s)) return l;
      if (!l)
        throw Object.defineProperty(
          Error(
            '"' +
              o(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              l +
              '" instead.'
          ),
          '__NEXT_ERROR_CODE',
          { value: 'E394', enumerable: !1, configurable: !0 }
        );
      return l;
    }
    let x = 'undefined' != typeof performance,
      h =
        x &&
        ['mark', 'measure', 'getEntriesByName'].every(
          (e) => 'function' == typeof performance[e]
        );
    class m extends Error {}
    class g extends Error {}
    class p extends Error {
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
    class j extends Error {
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
  81215,
  (e) => {
    'use strict';
    e.s(['WidgetCalculatorBasic', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        1,
        2,
        3,
        (0, t.jsx)(s.FaDivide, {}, 'voice-mail'),
        4,
        5,
        6,
        (0, t.jsx)(s.FaX, {}, 'star'),
        7,
        8,
        9,
        (0, t.jsx)(s.FaMinus, {}, 'contacts'),
        (0, t.jsx)(s.FaEquals, {}, 'equals'),
        0,
        ',',
        (0, t.jsx)(s.FaPlus, {}, 'phone'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsx)('div', {
            className: 'grid h-full grid-cols-4',
            children: e.map((e, s) =>
              (0, t.jsx)(
                'div',
                {
                  className:
                    'col-span-1 flex h-full items-center justify-center',
                  children: (0, t.jsx)('div', {
                    className:
                      'flex aspect-square w-10 items-center justify-center rounded-full bg-white font-black text-black hover:bg-red-500 hover:text-neutral-100',
                    children: e,
                  }),
                },
                'item-' + s
              )
            ),
          }),
        }),
      });
    };
  },
  21436,
  (e) => {
    'use strict';
    e.s(['WidgetTranslate', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(
          'p',
          { className: 'font-semibold', children: 'English to Korean' },
          'languages'
        ),
        (0, t.jsx)(s.FaCamera, { className: 'text-3xl' }, 'security'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-8',
          children: [
            (0, t.jsx)('div', {
              className: 'pb-8',
              children: (0, t.jsx)('p', {
                className: 'text-center font-black',
                children: 'Translate',
              }),
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2 gap-y-8',
              children: e.map((e, s) =>
                (0, t.jsx)(
                  'div',
                  {
                    className: 'col-span-2',
                    children: (0, t.jsx)('div', {
                      className:
                        'flex h-full w-full items-center justify-center',
                      children: (0, t.jsx)('div', {
                        className:
                          'flex h-full w-full items-center justify-center rounded-full bg-white text-black hover:bg-red-500 hover:text-neutral-100',
                        children: e,
                      }),
                    }),
                  },
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  27742,
  (e) => {
    'use strict';
    e.s(['WidgetVideos', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaMagnifyingGlass, {}, 'search'),
        (0, t.jsx)(s.FaRectangleList, {}, 'subscriptions'),
        (0, t.jsx)(s.FaTiktok, {}, 'shorts'),
        (0, t.jsx)(s.FaPlus, {}, 'add'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-6',
          children: [
            (0, t.jsxs)('div', {
              className: 'grid grid-cols-2 pb-2',
              children: [
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('h1', {
                    className: 'text-center font-black',
                    children: 'Videos',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('p', {
                    className: 'text-center text-sm',
                    children: 'YouTube',
                  }),
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2',
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  67310,
  (e) => {
    'use strict';
    e.s(['WidgetTransportation', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaBus, {}, 'bus'),
        (0, t.jsx)(s.FaTrain, {}, 'train'),
        (0, t.jsx)(s.FaTrainSubway, {}, 'subway'),
        (0, t.jsx)(s.FaTrainTram, {}, 'tram'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-6',
          children: [
            (0, t.jsx)('div', {
              className: 'pb-2 text-center',
              children: (0, t.jsx)('h1', {
                className: 'text-center font-black',
                children: 'Public Transportation',
              }),
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2',
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  83062,
  (e) => {
    'use strict';
    e.s(['WidgetNotes', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'flex h-full flex-col',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between pb-2',
                children: [
                  (0, t.jsx)('p', {
                    className: 'text-xl font-black',
                    children: 'Notes',
                  }),
                  (0, t.jsx)('p', {
                    children: (0, t.jsx)(s.FaPenToSquare, {}),
                  }),
                ],
              }),
              [
                {
                  title: 'Lorem ipsum',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                },
                {
                  title: 'Lorem ipsum',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                },
                {
                  title: 'Lorem ipsum',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                },
              ].map((e) => {
                let { title: s, content: l, dateTime: r } = e;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'grow border-t border-neutral-700',
                    children: (0, t.jsx)('div', {
                      className: 'flex h-full w-full items-center',
                      children: (0, t.jsxs)('div', {
                        className: 'w-full',
                        children: [
                          (0, t.jsxs)('div', {
                            className:
                              'flex w-full items-center justify-between',
                            children: [
                              (0, t.jsx)('p', {
                                className: 'text-sm font-bold',
                                children: s,
                              }),
                              (0, t.jsx)('p', {
                                className: 'text-xs',
                                children: r,
                              }),
                            ],
                          }),
                          (0, t.jsx)('p', {
                            className: 'w-44 truncate text-sm text-neutral-500',
                            children: l,
                          }),
                        ],
                      }),
                    }),
                  },
                  s
                );
              }),
            ],
          }),
        }),
      });
  },
  4886,
  (e) => {
    'use strict';
    e.s(['WidgetNews', () => l]);
    var t = e.i(94601),
      s = e.i(1143);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'flex h-full flex-col',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between pb-2',
                children: [
                  (0, t.jsx)('p', {
                    className: 'text-xl font-black text-red-500',
                    children: 'News',
                  }),
                  (0, t.jsxs)('p', {
                    children: [
                      s.shortMonths[new Date().getMonth() + 1],
                      ' ',
                      new Date().getDate(),
                    ],
                  }),
                ],
              }),
              [
                {
                  title: 'Lorem ipsum',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  source: 'CNN',
                },
                {
                  title: 'Lorem ipsum',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  source: 'CNBC',
                },
                {
                  title: 'Lorem ipsum',
                  content:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  source: 'BBC',
                },
              ].map((e) => {
                let { title: s, content: l, source: r } = e;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'grow border-t border-neutral-700',
                    children: (0, t.jsx)('div', {
                      className: 'flex h-full w-full items-center',
                      children: (0, t.jsxs)('div', {
                        className: 'w-full',
                        children: [
                          (0, t.jsxs)('div', {
                            className:
                              'flex w-full items-center justify-between',
                            children: [
                              (0, t.jsx)('p', {
                                className: 'text-sm font-bold',
                                children: s,
                              }),
                              (0, t.jsx)('p', {
                                className: 'text-xs',
                                children: r,
                              }),
                            ],
                          }),
                          (0, t.jsx)('p', {
                            className: 'w-44 truncate text-sm text-neutral-500',
                            children: l,
                          }),
                        ],
                      }),
                    }),
                  },
                  s
                );
              }),
            ],
          }),
        }),
      });
  },
  5685,
  (e) => {
    'use strict';
    e.s(['WidgetTasks', () => l]);
    var t = e.i(94601),
      s = e.i(36960);
    let l = () => {
      let [e, l] = (0, s.useState)([
        { title: 'Health Check', completed: !1 },
        { title: 'Complete NAB Tasks', completed: !0 },
        { title: 'Complete RMIT Tasks', completed: !1 },
        { title: 'Play Chess', completed: !0 },
        { title: 'Learn Korean', completed: !1 },
      ]);
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'grid h-full grid-rows-6',
            children: [
              (0, t.jsx)('div', {
                className: 'col-span-1',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsx)('h1', {
                      className: 'text-xl font-black',
                      children: 'to(day)do',
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-xl',
                      children: e.filter((e) => {
                        let { completed: t } = e;
                        return !t;
                      }).length,
                    }),
                  ],
                }),
              }),
              e.map((s, r) => {
                let { title: a, completed: i } = s;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'col-span-1',
                    children: (0, t.jsxs)('button', {
                      type: 'button',
                      className: 'flex h-full items-center gap-x-2',
                      onClick: () => {
                        ((e[r].completed = !i), l([...e]));
                      },
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'flex aspect-square w-4 items-center justify-center rounded-full border-2 border-white',
                          children: i
                            ? (0, t.jsx)('div', {
                                className:
                                  'aspect-square w-2 rounded-full bg-white',
                              })
                            : (0, t.jsx)(t.Fragment, {}),
                        }),
                        (0, t.jsx)('p', {
                          className:
                            'truncate whitespace-nowrap capitalize '.concat(
                              i ? 'text-neutral-500 line-through' : ''
                            ),
                          children: a,
                        }),
                      ],
                    }),
                  },
                  a
                );
              }),
            ],
          }),
        }),
      });
    };
  },
  8167,
  60164,
  (e) => {
    'use strict';
    (e.s([], 8167), e.s(['WidgetMessages', () => l], 60164));
    var t = e.i(94601),
      s = e.i(66709);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'flex h-full flex-col',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between pb-2',
                children: [
                  (0, t.jsx)('p', {
                    className: 'text-xl font-black',
                    children: 'Messages',
                  }),
                  (0, t.jsx)('p', {
                    children: (0, t.jsx)(s.FaPenToSquare, {}),
                  }),
                ],
              }),
              [
                {
                  contact: 'Lorem ipsum',
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                  unread: !0,
                },
                {
                  contact: 'Lorem ipsum',
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                  unread: !0,
                },
                {
                  contact: 'Lorem ipsum',
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '24/12',
                  unread: !1,
                },
              ].map((e) => {
                let { contact: s, message: l, dateTime: r, unread: a } = e;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'grow border-t border-neutral-700',
                    children: (0, t.jsxs)('div', {
                      className:
                        'flex h-full w-full items-center gap-x-2 overflow-hidden',
                      children: [
                        a &&
                          (0, t.jsx)('div', {
                            children: (0, t.jsx)('div', {
                              className: 'h-2 w-2 rounded-full bg-white',
                            }),
                          }),
                        (0, t.jsxs)('div', {
                          className: 'grow '.concat(a ? 'font-bold' : ''),
                          children: [
                            (0, t.jsxs)('div', {
                              className:
                                'flex items-center justify-between truncate',
                              children: [
                                (0, t.jsx)('p', {
                                  className: 'text-sm',
                                  children: s,
                                }),
                                (0, t.jsx)('p', {
                                  className: 'text-xs',
                                  children: r,
                                }),
                              ],
                            }),
                            (0, t.jsx)('p', {
                              className:
                                'w-44 truncate text-sm text-neutral-500',
                              children: l,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  s
                );
              }),
            ],
          }),
        }),
      });
  },
  58749,
  (e) => {
    'use strict';
    e.s(['WidgetDevices', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaRing, {}, 'ring'),
        (0, t.jsx)(s.FaClock, {}, 'watch'),
        (0, t.jsx)(s.FaHeadphonesSimple, {}, 'headphones'),
        (0, t.jsx)(s.FaLaptop, {}, 'laptop'),
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
                    children: 'Devices',
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
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  7993,
  (e) => {
    'use strict';
    e.s(['WidgetMail', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'flex h-full flex-col',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between pb-2',
                children: [
                  (0, t.jsx)('p', {
                    className: 'text-xl font-black',
                    children: 'Mail',
                  }),
                  (0, t.jsx)('p', {
                    children: (0, t.jsx)(s.FaPenToSquare, {}),
                  }),
                ],
              }),
              [
                {
                  contact: 'Lorem ipsum',
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                  unread: !0,
                },
                {
                  contact: 'Lorem ipsum',
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '25/12',
                  unread: !0,
                },
                {
                  contact: 'Lorem ipsum',
                  message:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '24/12',
                  unread: !1,
                },
              ].map((e) => {
                let { contact: s, message: l, dateTime: r, unread: a } = e;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'grow border-t border-neutral-700',
                    children: (0, t.jsxs)('div', {
                      className:
                        'flex h-full w-full items-center gap-x-2 overflow-hidden',
                      children: [
                        a &&
                          (0, t.jsx)('div', {
                            children: (0, t.jsx)('div', {
                              className: 'h-2 w-2 rounded-full bg-white',
                            }),
                          }),
                        (0, t.jsxs)('div', {
                          className: 'grow '.concat(a ? 'font-bold' : ''),
                          children: [
                            (0, t.jsxs)('div', {
                              className:
                                'flex items-center justify-between truncate',
                              children: [
                                (0, t.jsx)('p', {
                                  className: 'text-sm font-bold',
                                  children: s,
                                }),
                                (0, t.jsx)('p', {
                                  className: 'text-xs',
                                  children: r,
                                }),
                              ],
                            }),
                            (0, t.jsx)('p', {
                              className:
                                'w-40 truncate text-sm text-neutral-500',
                              children: l,
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  s
                );
              }),
            ],
          }),
        }),
      });
  },
  15368,
  (e) => {
    'use strict';
    e.s(['WidgetSports', () => s]);
    var t = e.i(94601);
    let s = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'grid h-full grid-rows-5',
            children: [
              (0, t.jsx)('div', {
                className: 'row-span-1',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsxs)('p', {
                      children: [
                        'March 5',
                        (0, t.jsx)('sup', { children: 'th' }),
                        ', 2023',
                      ],
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-right text-red-500',
                      children: "90'",
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-1',
                children: (0, t.jsxs)('div', {
                  className: 'grid h-full grid-cols-2 items-center gap-x-2',
                  children: [
                    (0, t.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, t.jsx)('p', {
                        className: 'truncate font-black',
                        children: 'Liverpool',
                      }),
                    }),
                    (0, t.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, t.jsx)('p', {
                        className: 'truncate text-right font-black',
                        children: 'Man United',
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-3',
                children: (0, t.jsxs)('div', {
                  className: 'grid h-full grid-cols-2 items-center gap-x-2',
                  children: [
                    (0, t.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, t.jsx)('p', {
                        className: 'text-center text-8xl text-red-500',
                        children: '7',
                      }),
                    }),
                    (0, t.jsx)('div', {
                      className: 'col-span-1',
                      children: (0, t.jsx)('p', {
                        className: 'text-center text-8xl text-red-500',
                        children: '0',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
  },
  34084,
  (e) => {
    'use strict';
    e.s(['WidgetFiles', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        { icon: (0, t.jsx)(s.FaFileWord, {}, 'word'), name: 'docs' },
        {
          icon: (0, t.jsx)(s.FaFilePowerpoint, {}, 'power-point'),
          name: 'slides',
        },
        { icon: (0, t.jsx)(s.FaFileVideo, {}, 'video'), name: 'video' },
        { icon: (0, t.jsx)(s.FaFileImage, {}, 'image'), name: 'image' },
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-6',
          children: [
            (0, t.jsxs)('div', {
              className: 'grid grid-cols-2 pb-2',
              children: [
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('h1', {
                    className: 'text-center font-black',
                    children: 'Files',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('p', {
                    className: 'text-center text-sm',
                    children: 'Recent',
                  }),
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2',
              children: e.map((e, s) => {
                let { icon: l, name: r } = e;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'col-span-1',
                    children: (0, t.jsx)('div', {
                      className:
                        'flex h-full w-full items-center justify-center',
                      children: (0, t.jsxs)('div', {
                        className: 'flex flex-col gap-y-1',
                        children: [
                          (0, t.jsx)('p', {
                            className: 'text-5xl',
                            children: l,
                          }),
                          (0, t.jsx)('p', {
                            className: 'text-center',
                            children: r,
                          }),
                        ],
                      }),
                    }),
                  },
                  'item' + s
                );
              }),
            }),
          ],
        }),
      });
    };
  },
  85133,
  (e) => {
    'use strict';
    e.s(['WidgetHome', () => l]);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaLightbulb, {}, 'light'),
        (0, t.jsx)(s.FaLock, {}, 'security'),
        (0, t.jsx)(s.FaBolt, {}, 'energy'),
        (0, t.jsx)(s.FaCamera, {}, 'camera'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-6',
          children: [
            (0, t.jsx)('div', {
              className: 'pb-2',
              children: (0, t.jsx)('p', {
                className: 'text-center font-black',
                children: 'Home',
              }),
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2',
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  54294,
  64915,
  (e) => {
    'use strict';
    e.s(['WidgetMapsCoordinates', () => a], 54294);
    var t = e.i(94601),
      s = e.i(36960);
    let l = () => {
      let [e, t] = (0, s.useState)({
        latitude: 0,
        longitude: 0,
        accuracy: 0,
        altitude: 0,
        altitudeAccuracy: 0,
        heading: 0,
        speed: 0,
        error: null,
      });
      return (
        (0, s.useEffect)(() => {
          if (!navigator.geolocation)
            return void t((e) => ({
              ...e,
              error: 'Geolocation is not supported by this browser.',
            }));
          'function' ==
            typeof window.navigator.geolocation.getCurrentPosition &&
            window.navigator.geolocation.getCurrentPosition((e) => {
              let { coords: s } = e;
              t({ ...s.toJSON(), error: null });
            });
        }, []),
        e
      );
    };
    var r = e.i(66709);
    let a = () => {
      let { latitude: e = 0, longitude: s = 0 } = l();
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-full bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'flex h-full w-full items-center justify-center',
          children: (0, t.jsxs)('div', {
            className: 'flex flex-col items-center gap-y-4',
            children: [
              (0, t.jsx)(r.FaLocationDot, {
                className: 'text-6xl text-red-500',
              }),
              (0, t.jsxs)('div', {
                className: 'text-center font-black',
                children: [
                  (0, t.jsxs)('p', {
                    children: [null == e ? void 0 : e.toFixed(2), '°'],
                  }),
                  (0, t.jsxs)('p', {
                    children: [null == s ? void 0 : s.toFixed(2), '°'],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    };
    e.s(['WidgetMapsEmbedded', () => i], 64915);
    let i = () => {
      let { latitude: e = 0, longitude: s = 0 } = l(),
        r = parseFloat((null != s ? s : 0).toFixed(1)) - 0.1,
        a = parseFloat((null != s ? s : 0).toFixed(1)) + 0.1,
        i = parseFloat((null != e ? e : 0).toFixed(1)) + 0.1,
        n = parseFloat((null != e ? e : 0).toFixed(1)) - 0.1;
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-2',
          children: (0, t.jsx)('div', {
            className: 'h-full w-full overflow-hidden rounded-2xl',
            children: (0, t.jsx)('iframe', {
              title: 'open-street-map',
              src: 'https://www.openstreetmap.org/export/embed.html?bbox='
                .concat(r, '%2C')
                .concat(n, '%2C')
                .concat(a, '%2C')
                .concat(i, '&amp;layer=mapnik'),
              className: 'h-full w-full grayscale',
            }),
          }),
        }),
      });
    };
  },
  94027,
  70402,
  (e) => {
    'use strict';
    e.s(['WidgetPhoneContacts', () => s], 94027);
    var t = e.i(94601);
    let s = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-8',
          children: (0, t.jsx)('div', {
            className: 'grid h-full grid-cols-2 gap-y-2',
            children: [
              { shortName: 'CP', name: 'Carl Pei' },
              { shortName: 'TC', name: 'Tim Cook' },
              { shortName: 'LJ', name: 'Lei Jun' },
              { shortName: 'MB', name: 'Marques Brownlee' },
            ].map((e, s) => {
              let { shortName: l, name: r } = e;
              return (0, t.jsx)(
                'div',
                {
                  className: 'col-span-1',
                  children: (0, t.jsx)('div', {
                    className: 'flex h-full w-full items-center justify-center',
                    children: (0, t.jsxs)('div', {
                      className: 'flex flex-col gap-y-1',
                      children: [
                        (0, t.jsx)('div', {
                          className:
                            'mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-black text-black',
                          children: (0, t.jsx)('p', { children: l }),
                        }),
                        (0, t.jsx)('p', {
                          className: 'w-20 truncate text-center text-xs',
                          children: r,
                        }),
                      ],
                    }),
                  }),
                },
                'item' + s
              );
            }),
          }),
        }),
      });
    e.s(['WidgetPhoneDialer', () => r], 70402);
    var l = e.i(66709);
    let r = () => {
      let e = [
        1,
        2,
        3,
        (0, t.jsx)(l.FaVoicemail, {}, 'voice-mail'),
        4,
        5,
        6,
        (0, t.jsx)(l.FaStar, {}, 'star'),
        7,
        8,
        9,
        (0, t.jsx)(l.FaPlus, {}, 'contacts'),
        '*',
        0,
        '#',
        (0, t.jsx)(l.FaPhone, {}, 'phone'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsx)('div', {
            className: 'grid h-full grid-cols-4',
            children: e.map((e, s) =>
              (0, t.jsx)(
                'div',
                {
                  className:
                    'col-span-1 flex h-full items-center justify-center',
                  children: (0, t.jsx)('div', {
                    className:
                      'flex aspect-square w-10 items-center justify-center rounded-full bg-white font-black text-black hover:bg-red-500 hover:text-neutral-100',
                    children: e,
                  }),
                },
                'item-' + s
              )
            ),
          }),
        }),
      });
    };
  },
  28958,
  (e) => {
    'use strict';
    e.s(['WidgetHealthBloodPressure', () => s]);
    var t = e.i(94601);
    let s = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-8',
          children: (0, t.jsxs)('div', {
            className: 'grid h-full grid-rows-10',
            children: [
              (0, t.jsx)('div', {
                className: 'row-span-1',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-xl font-black',
                      children: 'Health',
                    }),
                    (0, t.jsx)('p', {
                      className: 'truncate text-sm',
                      children: 'Blood Pressure',
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-3',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-end justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '120',
                    }),
                    (0, t.jsx)('p', {
                      className: 'truncate text-sm',
                      children: 'SYS (mmHg)',
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-3',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-end justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '80',
                    }),
                    (0, t.jsx)('p', {
                      className: 'text-sm',
                      children: 'DIA (mmHg)',
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-3',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-end justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '80',
                    }),
                    (0, t.jsx)('p', { className: 'text-sm', children: 'BPM' }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
  },
  1139,
  (e) => {
    'use strict';
    e.s(['WidgetHealthBodyTemperature', () => l], 1139);
    var t = e.i(94601),
      s = e.i(36960);
    let l = () => {
      let [e, l] = (0, s.useState)(0),
        r = ['c', 'f', 'k'][e];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-full bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('button', {
          type: 'button',
          className: 'flex h-full w-full items-center justify-center',
          onClick: () => {
            l((e) => (2 === e ? 0 : e + 1));
          },
          children: (0, t.jsxs)('div', {
            className: 'flex flex-col items-center gap-y-2',
            children: [
              (0, t.jsx)('p', {
                className: 'text-sm',
                children: 'Body Temperature',
              }),
              (0, t.jsxs)('p', {
                className: 'text-6xl text-red-500',
                children: [
                  Math.round(
                    ((e) => {
                      let { degree: t, from: s, to: l } = e;
                      return s === l
                        ? t
                        : 'c' === s && 'f' === l
                          ? 1.8 * t + 32
                          : 'f' === s && 'c' === l
                            ? (t - 32) / 1.8
                            : 'c' === s && 'k' === l
                              ? t + 273.15
                              : 'k' === s && 'c' === l
                                ? t - 273.15
                                : 'f' === s && 'k' === l
                                  ? (t - 32) / 1.8 + 273.15
                                  : 'k' === s && 'f' === l
                                    ? 1.8 * (t - 273.15) + 32
                                    : t;
                    })({ from: 'c', to: r, degree: 37 })
                  ),
                  '°',
                  r.toUpperCase(),
                ],
              }),
              (0, t.jsx)('p', {
                className: 'text-lg font-bold',
                children: 'Healthy',
              }),
            ],
          }),
        }),
      });
    };
  },
  66459,
  79072,
  (e) => {
    'use strict';
    e.s(['WidgetBrowser', () => l], 66459);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaPlus, {}, 'new'),
        (0, t.jsx)(s.FaMask, {}, 'icognito'),
        (0, t.jsx)(s.FaBookmark, {}, 'bookmark'),
        (0, t.jsx)(s.FaClockRotateLeft, {}, 'history'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full w-full flex-col px-8 py-6',
          children: [
            (0, t.jsxs)('div', {
              className: 'grid grid-cols-2 pb-2',
              children: [
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('h1', {
                    className: 'text-center font-black',
                    children: 'Browser',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'col-span-1',
                  children: (0, t.jsx)('p', {
                    className: 'text-center text-sm',
                    children: 'Firefox',
                  }),
                }),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'grid grow grid-cols-2',
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
    e.s(['WidgetBrowsers', () => r], 79072);
    let r = () => {
      let e = [
        (0, t.jsx)(s.FaBrave, {}, 'brave'),
        (0, t.jsx)(s.FaFirefox, {}, 'firefox'),
        (0, t.jsx)(s.FaGoogle, {}, 'google'),
        (0, t.jsx)(s.FaSafari, {}, 'safari'),
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
                    children: 'Browsers',
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
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  45805,
  16728,
  (e) => {
    'use strict';
    e.s(['WidgetFitnessRun', () => s], 45805);
    var t = e.i(94601);
    let s = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-8',
          children: (0, t.jsxs)('div', {
            className: 'grid h-full grid-rows-5',
            children: [
              (0, t.jsx)('div', {
                className: 'row-span-1',
                children: (0, t.jsx)('div', {
                  className: 'flex h-full items-center',
                  children: (0, t.jsx)('p', {
                    className: 'text-2xl font-bold',
                    children: 'Run',
                  }),
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-2',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '10',
                    }),
                    (0, t.jsx)('div', {
                      className: 'flex h-full items-end',
                      children: (0, t.jsx)('p', {
                        className: 'text-sm',
                        children: 'distance (km)',
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-2',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '5',
                    }),
                    (0, t.jsx)('div', {
                      className: 'flex h-full items-end',
                      children: (0, t.jsx)('p', {
                        className: 'text-sm',
                        children: 'pace (minutes/km)',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
    e.s(['WidgetFitnessStepCount', () => l], 16728);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-8',
          children: (0, t.jsxs)('div', {
            className: 'grid h-full grid-rows-5',
            children: [
              (0, t.jsx)('div', {
                className: 'row-span-1',
                children: (0, t.jsx)('div', {
                  className: 'flex h-full items-center',
                  children: (0, t.jsx)('p', {
                    className: 'text-2xl font-bold',
                    children: 'Step Count',
                  }),
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-2',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '10,000',
                    }),
                    (0, t.jsx)('div', {
                      className: 'flex h-full items-end',
                      children: (0, t.jsx)('p', {
                        className: 'text-sm',
                        children: 'steps',
                      }),
                    }),
                  ],
                }),
              }),
              (0, t.jsx)('div', {
                className: 'row-span-2',
                children: (0, t.jsxs)('div', {
                  className: 'flex h-full items-center justify-between',
                  children: [
                    (0, t.jsx)('p', {
                      className: 'text-4xl font-black text-red-500',
                      children: '2,500',
                    }),
                    (0, t.jsx)('div', {
                      className: 'flex h-full items-end',
                      children: (0, t.jsx)('p', {
                        className: 'text-sm',
                        children: 'calories',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      });
  },
  76342,
  56489,
  (e) => {
    'use strict';
    e.s(['WidgetStocksIndexes', () => s], 76342);
    var t = e.i(94601);
    let s = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsx)('div', {
            className: 'grid h-full grid-rows-3',
            children: [
              { index: 'VNI', point: 1200, change: 10 },
              { index: 'HNX', point: 200, change: 0 },
              { index: 'UPCOM', point: 100, change: -10 },
            ].map((e, s, l) => {
              let { index: r, point: a, change: i } = e,
                n = l.length - 1 === s;
              return (0, t.jsx)(
                'div',
                {
                  className: 'col-span-1 '.concat(
                    n ? '' : 'border-b border-neutral-700'
                  ),
                  children: (0, t.jsxs)('div', {
                    className: 'flex h-full items-center justify-between',
                    children: [
                      (0, t.jsxs)('div', {
                        className:
                          'flex grow flex-col items-start justify-center',
                        children: [
                          (0, t.jsx)('p', { children: r }),
                          (0, t.jsxs)('p', {
                            className: ''.concat(
                              0 === i
                                ? 'text-neutral-500'
                                : i > 0
                                  ? 'text-green-500'
                                  : 'text-red-500'
                            ),
                            children: [
                              0 === i ? '=' : i > 0 ? '+' : '-',
                              ' ',
                              Math.abs(i).toFixed(2),
                              '%',
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsx)('p', {
                        className: 'text-2xl font-black',
                        children: a.toLocaleString(),
                      }),
                    ],
                  }),
                },
                r
              );
            }),
          }),
        }),
      });
    e.s(['WidgetStocksSymbols', () => l], 56489);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsx)('div', {
            className: 'grid h-full grid-rows-3',
            children: [
              { symbol: 'TCB', price: 3e4, change: 10 },
              { symbol: 'MSN', price: 1e5, change: 0 },
              { symbol: 'VIC', price: 5e4, change: -10 },
            ].map((e, s, l) => {
              let { symbol: r, price: a, change: i } = e,
                n = l.length - 1 === s;
              return (0, t.jsx)(
                'div',
                {
                  className: 'col-span-1 '.concat(
                    n ? '' : 'border-b border-neutral-700'
                  ),
                  children: (0, t.jsx)('div', {
                    className: 'flex h-full items-center',
                    children: (0, t.jsxs)('div', {
                      className: 'w-full',
                      children: [
                        (0, t.jsxs)('p', {
                          children: [
                            (0, t.jsx)('span', {
                              className: 'font-black',
                              children: r,
                            }),
                            ' / VND',
                          ],
                        }),
                        (0, t.jsxs)('div', {
                          className: 'flex w-full items-center justify-between',
                          children: [
                            (0, t.jsxs)('p', {
                              className: ''.concat(
                                0 === i
                                  ? 'text-neutral-500'
                                  : i > 0
                                    ? 'text-green-500'
                                    : 'text-red-500'
                              ),
                              children: [
                                0 === i ? '=' : i > 0 ? '+' : '-',
                                ' ',
                                Math.abs(i).toFixed(2),
                                '%',
                              ],
                            }),
                            (0, t.jsxs)('p', {
                              className: 'font-black',
                              children: [
                                a.toLocaleString(),
                                ' ',
                                (0, t.jsx)('sup', { children: 'đ' }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                },
                r
              );
            }),
          }),
        }),
      });
  },
  10865,
  74124,
  (e) => {
    'use strict';
    e.s(['WidgetWalletBank', () => l], 10865);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaWallet, {}, 'accounts'),
        (0, t.jsx)(s.FaMoneyBillTransfer, {}, 'transfer'),
        (0, t.jsx)(s.FaQrcode, {}, 'qrcode'),
        (0, t.jsx)(s.FaMoneyBill, {}, 'cash'),
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
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
    e.s(['WidgetWalletPay', () => r], 74124);
    let r = () => {
      let e = [
        (0, t.jsx)(s.FaPaypal, {}, 'paypal'),
        (0, t.jsx)(s.FaApplePay, {}, 'apple-pay'),
        (0, t.jsx)(s.FaAmazonPay, {}, 'amazon-pay'),
        (0, t.jsx)(s.FaGooglePay, {}, 'laptop'),
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
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
  },
  18710,
  31758,
  (e) => {
    'use strict';
    e.s(['WidgetClockAnalog', () => l], 18710);
    var t = e.i(94601),
      s = e.i(36960);
    let l = () => {
      let e = new Date(),
        [l, r] = (0, s.useState)({
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
      (0, s.useEffect)(() => {
        let e = setInterval(() => {
          let e = new Date();
          r({
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
      let a = (l.seconds < 60 ? (l.seconds / 60) * 360 : 0) + 90,
        i = (l.minutes < 60 ? (l.minutes / 60) * 360 : 0) + 90,
        n = (l.hours / 12) * 360 + 90;
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
                  let s = 30 * e,
                    r = (e + 9) % 12 == l.hours % 12,
                    a =
                      s % 90 == 0
                        ? (0, t.jsx)('div', {
                            title: ((e + 9) % 12).toString(),
                            className: 'aspect-square w-4 rounded-full '.concat(
                              r ? 'bg-red-500' : 'bg-white'
                            ),
                          })
                        : (0, t.jsx)('div', {
                            title: ((e + 9) % 12).toString(),
                            className: 'aspect-square w-2 rounded-full '.concat(
                              r ? 'bg-red-500' : 'bg-neutral-500'
                            ),
                          });
                  return (0, t.jsx)(
                    'div',
                    {
                      className: 'absolute h-full w-full origin-center',
                      style: { rotate: ''.concat(s, 'deg') },
                      children: (0, t.jsx)('div', {
                        className:
                          'absolute top-0 right-2 bottom-0 my-auto flex h-4 w-24 items-center justify-start bg-transparent',
                        children: a,
                      }),
                    },
                    s
                  );
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute z-10 h-full w-full transition-all ease-linear',
                  style: { rotate: ''.concat(a, 'deg') },
                  children: (0, t.jsx)('div', {
                    className:
                      'absolute top-0 right-2 bottom-0 my-auto h-1 w-20 rounded-full bg-red-700',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'absolute h-full w-full transition-all',
                  style: { rotate: ''.concat(i, 'deg') },
                  children: (0, t.jsx)('div', {
                    className:
                      'absolute top-0 right-2 bottom-0 my-auto h-2 w-16 rounded-full bg-white',
                  }),
                }),
                (0, t.jsx)('div', {
                  className: 'absolute h-full w-full transition-all',
                  style: { rotate: ''.concat(n, 'deg') },
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
    e.s(['WidgetClockDigital', () => i], 31758);
    var r = e.i(98387),
      a = e.i(1143);
    let i = () => {
      let e = new Date(),
        [l, i] = (0, s.useState)({
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
        (0, s.useEffect)(() => {
          let e = setInterval(() => {
            let e = new Date();
            i({
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
                      children: a.months[l.month],
                    }),
                    ' ',
                    l.date,
                    (0, t.jsx)('sup', {
                      children: (0, a.getOrdinalSuffix)(l.date),
                    }),
                    ', ',
                    l.year,
                  ],
                }),
                (0, t.jsxs)('p', {
                  className: 'text-5xl uppercase',
                  children: [
                    (0, r.addZero)(l.hours),
                    ':',
                    (0, r.addZero)(l.minutes),
                    ':',
                    (0, r.addZero)(l.seconds),
                  ],
                }),
                (0, t.jsx)('p', {
                  className: 'text-sm uppercase',
                  children: a.weekdays[l.weekday],
                }),
              ],
            }),
          }),
        })
      );
    };
  },
  86636,
  47162,
  73905,
  (e) => {
    'use strict';
    e.s(['WidgetGamesFlipism', () => l], 86636);
    var t = e.i(94601),
      s = e.i(36960);
    let l = () => {
      let [e, l] = (0, s.useState)(!1),
        [r, a] = (0, s.useState)('Heads or Tails');
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-full bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-4',
          children: (0, t.jsx)('button', {
            className:
              'flex h-full w-full items-center justify-center rounded-full border-4 border-red-700 bg-red-500 text-xl font-bold transition-transform duration-500 '.concat(
                e ? 'animate-flip' : ''
              ),
            onAnimationEnd: () => !e && a(''),
            disabled: e,
            onClick: () => {
              if (e) return;
              l(!0);
              let t = ['Heads', 'Tails'],
                s = t[Math.floor(Math.random() * t.length)];
              setTimeout(() => {
                (a(s), l(!1));
              }, 2e3);
            },
            children: e ? 'Spinning' : r,
          }),
        }),
      });
    };
    e.s(['WidgetGamesRockPaperScissors', () => a], 47162);
    var r = e.i(66709);
    let a = () => {
      let [e, l] = (0, s.useState)(0),
        [a, i] = (0, s.useState)(0);
      (0, s.useEffect)(() => {
        if (e <= 0) return void i(Math.floor(2 * Math.random()));
        let t = setInterval(() => {
          l((e) => e - 1);
        }, 1e3);
        return () => clearInterval(t);
      }, [e]);
      let n = [
        (0, t.jsx)(r.FaHandFist, { className: 'text-9xl' }, 'rock'),
        (0, t.jsx)(r.FaHand, { className: 'text-9xl' }, 'paper'),
        (0, t.jsx)(r.FaHandPeace, { className: 'text-9xl' }, 'scissors'),
      ];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-full bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('button', {
          type: 'button',
          className:
            'flex h-full w-full items-center justify-center text-9xl text-red-500',
          disabled: 0 !== e,
          onClick: () => {
            l(2);
          },
          children: 0 === e ? n[a] : e,
        }),
      });
    };
    e.s(['WidgetGamesWheelOfFortune', () => i], 73905);
    let i = () => {
      let [e, l] = (0, s.useState)(0),
        [r, a] = (0, s.useState)(!1);
      return (
        (0, s.useEffect)(() => {
          if (!r) return;
          let e = setInterval(() => {
            l((e) => e + 100);
          }, 100);
          return () => clearInterval(e);
        }, [e, r]),
        (0, t.jsx)('div', {
          className:
            'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-full bg-neutral-900 text-neutral-100',
          children: (0, t.jsx)('div', {
            className: 'relative h-full w-full p-4',
            children: (0, t.jsxs)('div', {
              className: 'relative h-full w-full',
              children: [
                (0, t.jsx)('div', {
                  style: { clipPath: 'polygon(0 0, 50% 100%, 100% 0)' },
                  className:
                    'absolute top-0 right-0 left-0 z-20 mx-auto h-8 w-4 bg-neutral-900',
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-20 m-auto flex items-center justify-center',
                  children: (0, t.jsx)('button', {
                    type: 'button',
                    className:
                      'h-16 w-16 rounded-full bg-neutral-900 text-neutral-100',
                    onClick: () => {
                      a((e) => (l((t) => (e ? t : t + 1)), !e));
                    },
                    children: r ? 'Pause' : 'Spin',
                  }),
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto h-full w-full origin-center rounded-full transition-all',
                  style: {
                    rotate: ''.concat(0 + e, 'deg'),
                    background:
                      'conic-gradient(from var(--start, 0deg), #fb2c36 var(--angle, 60deg), #0000 0%',
                  },
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto h-full w-full origin-center rounded-full transition-all',
                  style: {
                    rotate: ''.concat(60 + e, 'deg'),
                    background:
                      'conic-gradient(from var(--start, 0deg), #fb2c36 var(--angle, 60deg), #0000 0%',
                  },
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto h-full w-full origin-center rounded-full transition-all',
                  style: {
                    rotate: ''.concat(120 + e, 'deg'),
                    background:
                      'conic-gradient(from var(--start, 0deg), #fb2c36 var(--angle, 60deg), #0000 0%',
                  },
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto h-full w-full origin-center rounded-full transition-all',
                  style: {
                    rotate: ''.concat(180 + e, 'deg'),
                    background:
                      'conic-gradient(from var(--start, 0deg), #fb2c36 var(--angle, 60deg), #0000 0%',
                  },
                }),
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto h-full w-full origin-center rounded-full transition-all',
                  style: {
                    rotate: ''.concat(240 + e, 'deg'),
                    background:
                      'conic-gradient(from var(--start, 0deg), #fb2c36 var(--angle, 60deg), #0000 0%',
                  },
                }),
                ' ',
                (0, t.jsx)('div', {
                  className:
                    'absolute top-0 right-0 bottom-0 left-0 z-10 m-auto h-full w-full origin-center rounded-full transition-all',
                  style: {
                    rotate: ''.concat(300 + e, 'deg'),
                    background:
                      'conic-gradient(from var(--start, 0deg), #fb2c36 var(--angle, 60deg), #0000 0%',
                  },
                }),
              ],
            }),
          }),
        })
      );
    };
  },
  98925,
  16381,
  (e) => {
    'use strict';
    e.s(['WidgetMusicApps', () => l], 98925);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () => {
      let e = [
        (0, t.jsx)(s.FaApple, {}, 'apple-music'),
        (0, t.jsx)(s.FaSpotify, {}, 'spotify'),
        (0, t.jsx)(s.FaSoundcloud, {}, 'soundcloud'),
        (0, t.jsx)(s.FaYoutube, {}, 'youtube-music'),
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
              children: e.map((e, s) =>
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
                  'item' + s
                )
              ),
            }),
          ],
        }),
      });
    };
    e.s(['WidgetMusicPlayer', () => a], 16381);
    var r = e.i(36960);
    let a = () => {
      let [e, l] = (0, r.useState)(!1);
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
                      children: (0, t.jsx)(s.FaBackward, {
                        className: 'text-2xl',
                      }),
                    }),
                  }),
                  (0, t.jsx)('div', {
                    className: 'col-span-1',
                    children: (0, t.jsx)('button', {
                      type: 'button',
                      onClick: () => l(!e),
                      className:
                        'flex h-full w-full items-center justify-center',
                      children: e
                        ? (0, t.jsx)(s.FaPlay, { className: 'text-4xl' })
                        : (0, t.jsx)(s.FaPause, { className: 'text-4xl' }),
                    }),
                  }),
                  (0, t.jsx)('div', {
                    className: 'col-span-1',
                    children: (0, t.jsx)('div', {
                      className: 'flex h-full items-center justify-end',
                      children: (0, t.jsx)(s.FaForward, {
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
                (0, t.jsx)(s.FaVolumeOff, {}),
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
                (0, t.jsx)(s.FaVolumeHigh, {}),
              ],
            }),
          ],
        }),
      });
    };
  },
  28749,
  72351,
  (e) => {
    'use strict';
    (e.s([], 28749), e.s(['WidgetColorsPicker', () => a], 72351));
    var t = e.i(94601);
    let s = (e) => {
        let t = e.toString(16);
        return 1 === t.length ? ''.concat(t).concat(t) : t;
      },
      l = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          l =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        (e > 255 && (e = 255),
          t > 255 && (t = 255),
          l > 255 && (l = 255),
          e < 0 && (e = 0),
          t < 0 && (t = 0),
          l < 0 && (l = 0));
        let r = s(e),
          a = s(t),
          i = s(l);
        return '#'.concat(r).concat(a).concat(i);
      };
    var r = e.i(36960);
    let a = () => {
      let [{ color: e }, s] = (0, r.useState)({ color: '#fb2c36' }),
        a = [
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
                    r = (2 * (e.clientX - t.left)) / (t.right - t.left) - 1,
                    i = 1 - (2 * (e.clientY - t.top)) / (t.bottom - t.top),
                    n = ((Math.PI / 2 - Math.atan2(i, r)) / Math.PI) * 180;
                  n < 0 && (n += 360);
                  let c =
                      Math.floor((n = (n / 360) * (a.length - 1))) % a.length,
                    o = (c + 1) % a.length,
                    d = a[c],
                    u = a[o],
                    f = n - Math.floor(n),
                    x = 1 - f,
                    h = {
                      r: d.r * x + u.r * f,
                      g: d.g * x + u.g * f,
                      b: d.b * x + u.b * f,
                    },
                    m = Math.sqrt(r * r + i * i);
                  m > 1 && (m = 1);
                  let g = m < 0.8 ? m / 0.8 : 1,
                    p = 1 - g;
                  ((h.r = Math.round(h.r * g + 255 * p)),
                    (h.g = Math.round(h.g * g + 255 * p)),
                    (h.b = Math.round(h.b * g + 255 * p)));
                  let v = l(h.r, h.g, h.b);
                  s((e) => ({ ...e, color: v }));
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
  20176,
  9181,
  (e) => {
    'use strict';
    e.s(['WidgetCompassCompact', () => r], 20176);
    var t = e.i(94601),
      s = e.i(11626),
      l = e.i(36960);
    let r = () => {
      let [{ alpha: e = 0, error: r = '' }, a] = (0, l.useState)({
        alpha: 0,
        error: '',
      });
      return (
        (0, l.useEffect)(() => {
          let e = (e) => {
            (s.logger.info('event='.concat(e)),
              null !== e.alpha
                ? a((t) => {
                    var s, l;
                    return {
                      ...t,
                      alpha: parseFloat(
                        null !=
                          (l = null == (s = e.alpha) ? void 0 : s.toFixed(2))
                          ? l
                          : '0'
                      ),
                    };
                  })
                : a((e) => ({ ...e, error: 'Compass data not available' })));
          };
          return (
            (async () => {
              if (
                'function' == typeof DeviceOrientationEvent.requestPermission
              ) {
                s.logger.info('requestPermission with permission');
                try {
                  let t = await DeviceOrientationEvent.requestPermission();
                  'granted' === t
                    ? window.addEventListener('deviceorientation', e, !0)
                    : a((e) => ({
                        ...e,
                        error:
                          'Permission to access device orientation denied.',
                      }));
                } catch (e) {
                  (s.logger.error(e),
                    a((e) => ({
                      ...e,
                      error: 'Error requesting device orientation permission.',
                    })));
                }
              } else
                (s.logger.info('requestPermission without permission'),
                  window.addEventListener('deviceorientation', e, !0));
            })(),
            () => {
              window.removeEventListener('deviceorientation', e);
            }
          );
        }, []),
        r && s.logger.error('error='.concat(r)),
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
    e.s(['WidgetCompassFull', () => a], 9181);
    let a = () => {
      let [{ alpha: e = 0, error: r = '' }, a] = (0, l.useState)({
        alpha: 0,
        error: '',
      });
      return (
        (0, l.useEffect)(() => {
          let e = (e) => {
            (s.logger.info('event='.concat(e)),
              null !== e.alpha
                ? a((t) => {
                    var s, l;
                    return {
                      ...t,
                      alpha: parseFloat(
                        null !=
                          (l = null == (s = e.alpha) ? void 0 : s.toFixed(2))
                          ? l
                          : '0'
                      ),
                    };
                  })
                : a((e) => ({ ...e, error: 'Compass data not available' })));
          };
          return (
            (async () => {
              if (
                'function' == typeof DeviceOrientationEvent.requestPermission
              ) {
                s.logger.info('requestPermission with permission');
                try {
                  let t = await DeviceOrientationEvent.requestPermission();
                  'granted' === t
                    ? window.addEventListener('deviceorientation', e, !0)
                    : a((e) => ({
                        ...e,
                        error:
                          'Permission to access device orientation denied.',
                      }));
                } catch (e) {
                  (s.logger.error(e),
                    a((e) => ({
                      ...e,
                      error: 'Error requesting device orientation permission.',
                    })));
                }
              } else
                (s.logger.info('requestPermission without permission'),
                  window.addEventListener('deviceorientation', e, !0));
            })(),
            () => {
              window.removeEventListener('deviceorientation', e);
            }
          );
        }, []),
        r && s.logger.error('error='.concat(r)),
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
  55607,
  (e, t, s) => {
    'use strict';
    function l(e) {
      try {
        return JSON.stringify(e);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    t.exports = function (e, t, s) {
      var r = (s && s.stringify) || l;
      if ('object' == typeof e && null !== e) {
        var a = t.length + 1;
        if (1 === a) return e;
        var i = Array(a);
        i[0] = r(e);
        for (var n = 1; n < a; n++) i[n] = r(t[n]);
        return i.join(' ');
      }
      if ('string' != typeof e) return e;
      var c = t.length;
      if (0 === c) return e;
      for (
        var o = '', d = 0, u = -1, f = (e && e.length) || 0, x = 0;
        x < f;

      ) {
        if (37 === e.charCodeAt(x) && x + 1 < f) {
          switch (((u = u > -1 ? u : 0), e.charCodeAt(x + 1))) {
            case 100:
            case 102:
              if (d >= c || null == t[d]) break;
              (u < x && (o += e.slice(u, x)),
                (o += Number(t[d])),
                (u = x + 2),
                x++);
              break;
            case 105:
              if (d >= c || null == t[d]) break;
              (u < x && (o += e.slice(u, x)),
                (o += Math.floor(Number(t[d]))),
                (u = x + 2),
                x++);
              break;
            case 79:
            case 111:
            case 106:
              if (d >= c || void 0 === t[d]) break;
              u < x && (o += e.slice(u, x));
              var h = typeof t[d];
              if ('string' === h) {
                ((o += "'" + t[d] + "'"), (u = x + 2), x++);
                break;
              }
              if ('function' === h) {
                ((o += t[d].name || '<anonymous>'), (u = x + 2), x++);
                break;
              }
              ((o += r(t[d])), (u = x + 2), x++);
              break;
            case 115:
              if (d >= c) break;
              (u < x && (o += e.slice(u, x)),
                (o += String(t[d])),
                (u = x + 2),
                x++);
              break;
            case 37:
              (u < x && (o += e.slice(u, x)),
                (o += '%'),
                (u = x + 2),
                x++,
                d--);
          }
          ++d;
        }
        ++x;
      }
      return -1 === u ? e : (u < f && (o += e.slice(u)), o);
    };
  },
  69214,
  (e, t, s) => {
    'use strict';
    let l = e.r(55607);
    t.exports = d;
    let r =
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
    function a(e, t) {
      return 'silent' === e ? 1 / 0 : t.levels.values[e];
    }
    let i = Symbol('pino.logFuncs'),
      n = Symbol('pino.hierarchy'),
      c = {
        error: 'log',
        fatal: 'error',
        warn: 'error',
        info: 'log',
        debug: 'log',
        trace: 'log',
      };
    function o(e, t) {
      let s = { logger: t, parent: e[n] };
      t[n] = s;
    }
    function d(e) {
      var t, s;
      (e = e || {}).browser = e.browser || {};
      let l = e.browser.transmit;
      if (l && 'function' != typeof l.send)
        throw Error('pino: transmit option must have a send function');
      let n = e.browser.write || r;
      e.browser.write && (e.browser.asObject = !0);
      let h = e.serializers || {},
        m =
          ((t = e.browser.serialize),
          Array.isArray(t)
            ? t.filter(function (e) {
                return '!stdSerializers.err' !== e;
              })
            : !0 === t && Object.keys(h)),
        g = e.browser.serialize;
      Array.isArray(e.browser.serialize) &&
        e.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
        (g = !1);
      let w = Object.keys(e.customLevels || {}),
        b = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'].concat(w);
      ('function' == typeof n &&
        b.forEach(function (e) {
          n[e] = n;
        }),
        (!1 === e.enabled || e.browser.disabled) && (e.level = 'silent'));
      let N = e.level || 'info',
        y = Object.create(n);
      y.log || (y.log = p);
      let k = {};
      (b.forEach((e) => {
        k[e] = n[e] ? n[e] : r[e] || r[c[e] || 'log'] || p;
      }),
        (y[i] = k),
        o({}, y),
        Object.defineProperty(y, 'levelVal', {
          get: function () {
            return a(this.level, this);
          },
        }),
        Object.defineProperty(y, 'level', {
          get: function () {
            return this._level;
          },
          set: function (e) {
            if ('silent' !== e && !this.levels.values[e])
              throw Error('unknown level ' + e);
            ((this._level = e),
              u(this, _, y, 'error'),
              u(this, _, y, 'fatal'),
              u(this, _, y, 'warn'),
              u(this, _, y, 'info'),
              u(this, _, y, 'debug'),
              u(this, _, y, 'trace'),
              w.forEach((e) => {
                u(this, _, y, e);
              }));
          },
        }));
      let _ = {
        transmit: l,
        serialize: m,
        asObject: e.browser.asObject,
        asObjectBindingsOnly: e.browser.asObjectBindingsOnly,
        formatters: e.browser.formatters,
        levels: b,
        timestamp:
          'function' == typeof (s = e).timestamp
            ? s.timestamp
            : !1 === s.timestamp
              ? v
              : j,
        messageKey: e.messageKey || 'msg',
        onChild: e.onChild || p,
      };
      function S(t, s, r) {
        if (!s) throw Error('missing bindings for child Pino');
        ((r = r || {}), m && s.serializers && (r.serializers = s.serializers));
        let a = r.serializers;
        if (m && a) {
          var i = Object.assign({}, h, a),
            n = !0 === e.browser.serialize ? Object.keys(i) : m;
          (delete s.serializers, f([s], n, i, this._stdErrSerialize));
        }
        function c(e) {
          ((this._childLevel = (0 | e._childLevel) + 1),
            (this.bindings = s),
            i && ((this.serializers = i), (this._serialize = n)),
            l && (this._logEvent = x([].concat(e._logEvent.bindings, s))));
        }
        c.prototype = this;
        let d = new c(this);
        return (
          o(this, d),
          (d.child = function () {
            for (var e = arguments.length, s = Array(e), l = 0; l < e; l++)
              s[l] = arguments[l];
            return S.call(this, t, ...s);
          }),
          (d.level = r.level || this.level),
          t.onChild(d),
          d
        );
      }
      return (
        (y.levels = (function (e) {
          let t = e.customLevels || {};
          return {
            values: Object.assign({}, d.levels.values, t),
            labels: Object.assign(
              {},
              d.levels.labels,
              (function (e) {
                let t = {};
                return (
                  Object.keys(e).forEach(function (s) {
                    t[e[s]] = s;
                  }),
                  t
                );
              })(t)
            ),
          };
        })(e)),
        (y.level = N),
        (y.isLevelEnabled = function (e) {
          return (
            !!this.levels.values[e] &&
            this.levels.values[e] >= this.levels.values[this.level]
          );
        }),
        (y.setMaxListeners =
          y.getMaxListeners =
          y.emit =
          y.addListener =
          y.on =
          y.prependListener =
          y.once =
          y.prependOnceListener =
          y.removeListener =
          y.removeAllListeners =
          y.listeners =
          y.listenerCount =
          y.eventNames =
          y.write =
          y.flush =
            p),
        (y.serializers = h),
        (y._serialize = m),
        (y._stdErrSerialize = g),
        (y.child = function () {
          for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
            t[s] = arguments[s];
          return S.call(this, _, ...t);
        }),
        l && (y._logEvent = x()),
        y
      );
    }
    function u(e, t, s, c) {
      var o, d, u, h, m, g, v;
      if (
        (Object.defineProperty(e, c, {
          value: a(e.level, s) > a(c, s) ? p : s[i][c],
          writable: !0,
          enumerable: !0,
          configurable: !0,
        }),
        e[c] === p)
      ) {
        if (!t.transmit) return;
        let l = a(t.transmit.level || e.level, s);
        if (a(c, s) < l) return;
      }
      e[c] =
        ((o = e),
        (d = t),
        (u = s),
        (h = c),
        (m = o[i][h]),
        function () {
          let e = d.timestamp(),
            t = Array(arguments.length),
            s =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === r
                ? r
                : this;
          for (var i = 0; i < t.length; i++) t[i] = arguments[i];
          var n = !1;
          if (
            (d.serialize &&
              (f(t, this._serialize, this.serializers, this._stdErrSerialize),
              (n = !0)),
            d.asObject || d.formatters
              ? m.call(
                  s,
                  ...(function (e, t, s, r, a) {
                    let { level: i, log: n = (e) => e } = a.formatters || {},
                      c = s.slice(),
                      o = c[0],
                      d = {},
                      u = (0 | e._childLevel) + 1;
                    if (
                      (u < 1 && (u = 1),
                      r && (d.time = r),
                      i
                        ? Object.assign(d, i(t, e.levels.values[t]))
                        : (d.level = e.levels.values[t]),
                      a.asObjectBindingsOnly)
                    ) {
                      if (null !== o && 'object' == typeof o)
                        for (; u-- && 'object' == typeof c[0]; )
                          Object.assign(d, c.shift());
                      return [n(d), ...c];
                    }
                    if (null !== o && 'object' == typeof o) {
                      for (; u-- && 'object' == typeof c[0]; )
                        Object.assign(d, c.shift());
                      o = c.length ? l(c.shift(), c) : void 0;
                    } else 'string' == typeof o && (o = l(c.shift(), c));
                    return (void 0 !== o && (d[a.messageKey] = o), [n(d)]);
                  })(this, h, t, e, d)
                )
              : m.apply(s, t),
            d.transmit)
          ) {
            let s = d.transmit.level || o._level,
              l = a(s, u),
              r = a(h, u);
            if (r < l) return;
            !(function (e, t, s) {
              let l =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                r = t.send,
                a = t.ts,
                i = t.methodLevel,
                n = t.methodValue,
                c = t.val,
                o = e._logEvent.bindings;
              (l ||
                f(
                  s,
                  e._serialize || Object.keys(e.serializers),
                  e.serializers,
                  void 0 === e._stdErrSerialize || e._stdErrSerialize
                ),
                (e._logEvent.ts = a),
                (e._logEvent.messages = s.filter(function (e) {
                  return -1 === o.indexOf(e);
                })),
                (e._logEvent.level.label = i),
                (e._logEvent.level.value = n),
                r(i, e._logEvent, c),
                (e._logEvent = x(o)));
            })(
              this,
              {
                ts: e,
                methodLevel: h,
                methodValue: r,
                transmitLevel: s,
                transmitValue: u.levels.values[d.transmit.level || o._level],
                send: d.transmit.send,
                val: a(o._level, u),
              },
              t,
              n
            );
          }
        });
      let j = (function (e) {
        let t = [];
        e.bindings && t.push(e.bindings);
        let s = e[n];
        for (; s.parent; )
          (s = s.parent).logger.bindings && t.push(s.logger.bindings);
        return t.reverse();
      })(e);
      0 !== j.length &&
        (e[c] =
          ((g = j),
          (v = e[c]),
          function () {
            return v.apply(this, [...g, ...arguments]);
          }));
    }
    function f(e, t, s, l) {
      for (let r in e)
        if (l && e[r] instanceof Error) e[r] = d.stdSerializers.err(e[r]);
        else if ('object' == typeof e[r] && !Array.isArray(e[r]) && t)
          for (let l in e[r])
            t.indexOf(l) > -1 && l in s && (e[r][l] = s[l](e[r][l]));
    }
    function x(e) {
      return {
        ts: 0,
        messages: [],
        bindings: e || [],
        level: { label: '', value: 0 },
      };
    }
    function h(e) {
      let t = { type: e.constructor.name, msg: e.message, stack: e.stack };
      for (let s in e) void 0 === t[s] && (t[s] = e[s]);
      return t;
    }
    function m() {
      return {};
    }
    function g(e) {
      return e;
    }
    function p() {}
    function v() {
      return !1;
    }
    function j() {
      return Date.now();
    }
    ((d.levels = {
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
      (d.stdSerializers = {
        mapHttpRequest: m,
        mapHttpResponse: m,
        wrapRequestSerializer: g,
        wrapResponseSerializer: g,
        wrapErrorSerializer: g,
        req: m,
        res: m,
        err: h,
        errWithCause: h,
      }),
      (d.stdTimeFunctions = Object.assign(
        {},
        {
          nullTime: v,
          epochTime: j,
          unixTime: function () {
            return Math.round(Date.now() / 1e3);
          },
          isoTime: function () {
            return new Date(Date.now()).toISOString();
          },
        }
      )),
      (t.exports.default = d),
      (t.exports.pino = d));
  },
  11626,
  (e) => {
    'use strict';
    e.s(['logger', () => t]);
    let t = (0, e.i(69214).default)();
  },
  33469,
  96933,
  37193,
  (e) => {
    'use strict';
    e.s(['WidgetCalendarEvents', () => l], 33469);
    var t = e.i(94601),
      s = e.i(66709);
    let l = () =>
      (0, t.jsx)('div', {
        className:
          'shadow-3xl relative aspect-square w-full max-w-60 overflow-hidden rounded-3xl bg-neutral-900 text-neutral-100',
        children: (0, t.jsx)('div', {
          className: 'h-full w-full p-6',
          children: (0, t.jsxs)('div', {
            className: 'flex h-full flex-col',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between pb-2',
                children: [
                  (0, t.jsx)('p', {
                    className: 'text-lg font-black',
                    children: 'Events',
                  }),
                  (0, t.jsx)('button', {
                    type: 'button',
                    children: (0, t.jsx)(s.FaPlus, {}),
                  }),
                ],
              }),
              [
                {
                  title: 'Daily Standup',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '09:30',
                },
                {
                  title: 'Sprint Planning',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '10:30',
                },
                {
                  title: 'Sprint Retrospective',
                  description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut. ',
                  dateTime: '17:30',
                },
              ].map((e) => {
                let { title: s, description: l, dateTime: r } = e;
                return (0, t.jsx)(
                  'div',
                  {
                    className: 'grow border-t border-neutral-700',
                    children: (0, t.jsx)('div', {
                      className:
                        'flex h-full w-full items-center gap-x-2 overflow-hidden',
                      children: (0, t.jsxs)('div', {
                        className: 'w-full',
                        children: [
                          (0, t.jsxs)('div', {
                            className:
                              'flex items-center justify-between truncate',
                            children: [
                              (0, t.jsx)('p', {
                                className: 'text-sm font-bold',
                                children: s,
                              }),
                              (0, t.jsx)('p', {
                                className: 'text-xs',
                                children: r,
                              }),
                            ],
                          }),
                          (0, t.jsx)('p', {
                            className: 'w-48 truncate text-sm text-neutral-500',
                            children: l,
                          }),
                        ],
                      }),
                    }),
                  },
                  s
                );
              }),
            ],
          }),
        }),
      });
    e.s(['WidgetCalendarMonthly', () => n], 96933);
    var r = e.i(11626),
      a = e.i(1143),
      i = e.i(36960);
    let n = () => {
      let e = new Date(),
        [s, l] = (0, i.useState)({
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
      (0, i.useEffect)(() => {
        let e = setInterval(() => {
          let e = new Date();
          l({
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
      let n = a.months[s.month],
        c = new Date(s.year, a.months.indexOf(n), 1).getDay(),
        o = (0, a.getNumberOfDaysPerMonth)(s.year)[a.months.indexOf(n)],
        d = ((e, t) => {
          if (t <= 0) throw Error('Chunk size must be greater than 0');
          let s = [];
          for (let l = 0; l < e.length; l += t) s.push(e.slice(l, l + t));
          return s;
        })(
          Array.from({ length: 35 }, (e, t) => t - c + 1),
          7
        );
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl aspect-square w-full max-w-60 rounded-3xl bg-neutral-900 p-6 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full flex-col items-center justify-center gap-y-2',
          children: [
            (0, t.jsxs)('div', {
              className: 'flex w-full items-center justify-between',
              children: [
                (0, t.jsxs)('p', {
                  className: 'text-red-500',
                  children: [n, ' ', s.year],
                }),
                (0, t.jsxs)('p', {
                  children: [
                    s.date,
                    (0, t.jsx)('sup', {
                      children: (0, a.getOrdinalSuffix)(s.date),
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)('div', {
              className: 'w-full grow',
              children: [
                (0, t.jsxs)('div', {
                  className: 'flex w-full items-center justify-between',
                  children: [
                    (0, t.jsx)('div', { children: 'S' }),
                    (0, t.jsx)('div', { children: 'M' }),
                    (0, t.jsx)('div', { children: 'T' }),
                    (0, t.jsx)('div', { children: 'W' }),
                    (0, t.jsx)('div', { children: 'T' }),
                    (0, t.jsx)('div', { children: 'F' }),
                    (0, t.jsx)('div', { children: 'S' }),
                  ],
                }),
                d.map((e) =>
                  (0, t.jsx)(
                    'div',
                    {
                      className: 'flex w-full items-center justify-between',
                      children: e.map((l) =>
                        (0, t.jsx)(
                          'div',
                          {
                            className: 'flex items-center justify-center py-2',
                            children: (0, t.jsx)('button', {
                              type: 'button',
                              onClick: () => {
                                r.logger.info({
                                  weekday: e[s.weekday],
                                  month: n,
                                  date: l,
                                  year: s.year,
                                });
                              },
                              children:
                                l === s.date
                                  ? (0, t.jsx)('div', {
                                      className:
                                        'aspect-square w-2 rounded-full bg-red-500',
                                    })
                                  : (0, t.jsx)(t.Fragment, {
                                      children:
                                        l <= 0 || l > o
                                          ? (0, t.jsx)('div', {
                                              className:
                                                'aspect-square w-2 rounded-full bg-neutral-700',
                                            })
                                          : (0, t.jsx)('div', {
                                              className:
                                                'aspect-square w-2 rounded-full bg-white',
                                            }),
                                    }),
                            }),
                          },
                          'date-'.concat(l)
                        )
                      ),
                    },
                    'week-'.concat(e)
                  )
                ),
              ],
            }),
            (0, t.jsx)('div', {
              className: 'flex items-center justify-center',
              children: (0, t.jsx)('p', { children: 'Nothing to Do' }),
            }),
          ],
        }),
      });
    };
    e.s(['WidgetCalendarToday', () => c], 37193);
    let c = () => {
      let e = new Date(),
        [s, l] = (0, i.useState)({
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
      (0, i.useEffect)(() => {
        let e = setInterval(() => {
          let e = new Date();
          l({
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
      let r = a.months[s.month],
        n = a.weekdays[s.weekday];
      return (0, t.jsx)('div', {
        className:
          'shadow-3xl aspect-square w-full max-w-60 rounded-3xl bg-neutral-900 p-4 text-neutral-100',
        children: (0, t.jsxs)('div', {
          className: 'flex h-full flex-col items-center justify-center',
          children: [
            (0, t.jsx)('p', { className: 'w-full text-left', children: r }),
            (0, t.jsx)('div', {
              className: 'flex grow items-center justify-center',
              children: (0, t.jsx)('p', {
                className: 'text-9xl text-red-500',
                children: s.date,
              }),
            }),
            (0, t.jsx)('p', { className: 'text-xl', children: n }),
          ],
        }),
      });
    };
  },
  7251,
  (e) => {
    'use strict';
    e.s(['default', () => $], 7251);
    var t = e.i(94601),
      s = e.i(66459),
      l = e.i(79072),
      r = e.i(81215),
      a = e.i(33469),
      i = e.i(96933),
      n = e.i(37193),
      c = e.i(18710),
      o = e.i(31758);
    e.i(28749);
    var d = e.i(20176),
      u = e.i(9181),
      f = e.i(58749),
      x = e.i(34084),
      h = e.i(45805),
      m = e.i(16728),
      g = e.i(86636),
      p = e.i(47162),
      v = e.i(73905),
      j = e.i(28958),
      w = e.i(1139),
      b = e.i(85133),
      N = e.i(7993),
      y = e.i(54294),
      k = e.i(64915);
    e.i(8167);
    var _ = e.i(98925),
      S = e.i(16381),
      F = e.i(4886),
      E = e.i(83062),
      T = e.i(94027),
      C = e.i(70402),
      O = e.i(17026),
      P = e.i(15368),
      M = e.i(76342),
      W = e.i(56489),
      q = e.i(5685),
      D = e.i(21436),
      L = e.i(67310),
      z = e.i(27742),
      H = e.i(10865),
      A = e.i(74124),
      R = e.i(72351),
      B = e.i(60164),
      I = e.i(11626);
    let $ = () => {
      let e = [
        { id: 'browser', widget: (0, t.jsx)(s.WidgetBrowser, {}) },
        { id: 'browsers', widget: (0, t.jsx)(l.WidgetBrowsers, {}) },
        {
          id: 'calculator-basic',
          widget: (0, t.jsx)(r.WidgetCalculatorBasic, {}),
        },
        { id: 'calendar-today', widget: (0, t.jsx)(n.WidgetCalendarToday, {}) },
        {
          id: 'calendar-monthly',
          widget: (0, t.jsx)(i.WidgetCalendarMonthly, {}),
        },
        {
          id: 'calendar-events',
          widget: (0, t.jsx)(a.WidgetCalendarEvents, {}),
        },
        { id: 'clock-analog', widget: (0, t.jsx)(c.WidgetClockAnalog, {}) },
        { id: 'clock-digital', widget: (0, t.jsx)(o.WidgetClockDigital, {}) },
        {
          id: 'compass-compact',
          widget: (0, t.jsx)(d.WidgetCompassCompact, {}),
        },
        { id: 'compass-full', widget: (0, t.jsx)(u.WidgetCompassFull, {}) },
        { id: 'colors-picker', widget: (0, t.jsx)(R.WidgetColorsPicker, {}) },
        { id: 'devices', widget: (0, t.jsx)(f.WidgetDevices, {}) },
        { id: 'files', widget: (0, t.jsx)(x.WidgetFiles, {}) },
        { id: 'fitness-run', widget: (0, t.jsx)(h.WidgetFitnessRun, {}) },
        {
          id: 'fitness-step-count',
          widget: (0, t.jsx)(m.WidgetFitnessStepCount, {}),
        },
        { id: 'games-flipism', widget: (0, t.jsx)(g.WidgetGamesFlipism, {}) },
        {
          id: 'games-rock-paper-scissors',
          widget: (0, t.jsx)(p.WidgetGamesRockPaperScissors, {}),
        },
        {
          id: 'games-wheel-of-fortune',
          widget: (0, t.jsx)(v.WidgetGamesWheelOfFortune, {}),
        },
        {
          id: 'health-body-temperature',
          widget: (0, t.jsx)(w.WidgetHealthBodyTemperature, {}),
        },
        {
          id: 'health-blood-pressure',
          widget: (0, t.jsx)(j.WidgetHealthBloodPressure, {}),
        },
        { id: 'home', widget: (0, t.jsx)(b.WidgetHome, {}) },
        { id: 'mail', widget: (0, t.jsx)(N.WidgetMail, {}) },
        {
          id: 'maps-coordinates',
          widget: (0, t.jsx)(y.WidgetMapsCoordinates, {}),
        },
        { id: 'maps-embedded', widget: (0, t.jsx)(k.WidgetMapsEmbedded, {}) },
        { id: 'messages', widget: (0, t.jsx)(B.WidgetMessages, {}) },
        { id: 'music-apps', widget: (0, t.jsx)(_.WidgetMusicApps, {}) },
        { id: 'music-player', widget: (0, t.jsx)(S.WidgetMusicPlayer, {}) },
        { id: 'news', widget: (0, t.jsx)(F.WidgetNews, {}) },
        { id: 'notes', widget: (0, t.jsx)(E.WidgetNotes, {}) },
        { id: 'phone-contacts', widget: (0, t.jsx)(T.WidgetPhoneContacts, {}) },
        { id: 'phone-dialer', widget: (0, t.jsx)(C.WidgetPhoneDialer, {}) },
        { id: 'photos', widget: (0, t.jsx)(O.WidgetPhotos, {}) },
        { id: 'sports', widget: (0, t.jsx)(P.WidgetSports, {}) },
        { id: 'stocks-indexes', widget: (0, t.jsx)(M.WidgetStocksIndexes, {}) },
        { id: 'stocks-symbols', widget: (0, t.jsx)(W.WidgetStocksSymbols, {}) },
        { id: 'tasks', widget: (0, t.jsx)(q.WidgetTasks, {}) },
        { id: 'translate', widget: (0, t.jsx)(D.WidgetTranslate, {}) },
        {
          id: 'transportation',
          widget: (0, t.jsx)(L.WidgetTransportation, {}),
        },
        { id: 'videos', widget: (0, t.jsx)(z.WidgetVideos, {}) },
        { id: 'wallet-bank', widget: (0, t.jsx)(H.WidgetWalletBank, {}) },
        { id: 'wallet-pay', widget: (0, t.jsx)(A.WidgetWalletPay, {}) },
      ];
      return (
        I.logger.info(e.length),
        (0, t.jsx)('div', {
          className:
            'h-[1300vh] w-screen overflow-hidden bg-neutral-100 lg:h-[550vh]',
          children: (0, t.jsx)('div', {
            className: 'grid h-full grid-cols-2 lg:grid-cols-5',
            children: e.map((e) => {
              let { id: s, widget: l } = e;
              return (0, t.jsx)(
                'div',
                {
                  className: 'col-span-1',
                  children: (0, t.jsx)('div', {
                    className: 'flex h-full w-full items-center justify-center',
                    children: l,
                  }),
                },
                s
              );
            }),
          }),
        })
      );
    };
  },
  65693,
  (e, t, s) => {
    let l = '/all';
    ((window.__NEXT_P = window.__NEXT_P || []).push([l, () => e.r(7251)]),
      t.hot &&
        t.hot.dispose(function () {
          window.__NEXT_P.push([l]);
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
