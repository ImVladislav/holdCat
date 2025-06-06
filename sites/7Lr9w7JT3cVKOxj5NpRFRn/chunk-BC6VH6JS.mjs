import {
  a as dn,
  b as pg,
  c as dr,
  d as E,
  e as de,
  f as Qt,
  g as Du,
  h as Nt,
} from "./chunk-JR5VT52U.mjs";
import { a as Au, b as Re, c as F } from "./chunk-RIUMFBNJ.mjs";
var kt = {};
Au(kt, {
  Children: () => hn,
  Component: () => xe,
  Fragment: () => pn,
  Profiler: () => UT,
  PureComponent: () => GT,
  StrictMode: () => qT,
  Suspense: () => hr,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => XT,
  cloneElement: () => pr,
  createContext: () => ge,
  createElement: () => Ki,
  createFactory: () => YT,
  createRef: () => Tg,
  default: () => x,
  forwardRef: () => Ae,
  isValidElement: () => Lt,
  lazy: () => KT,
  memo: () => Ia,
  startTransition: () => St,
  unstable_act: () => QT,
  useCallback: () => G,
  useContext: () => A,
  useDebugValue: () => ZT,
  useDeferredValue: () => JT,
  useEffect: () => B,
  useId: () => gi,
  useImperativeHandle: () => eR,
  useInsertionEffect: () => Qe,
  useLayoutEffect: () => De,
  useMemo: () => re,
  useReducer: () => tR,
  useRef: () => V,
  useState: () => Fe,
  useSyncExternalStore: () => Rg,
  useTransition: () => nR,
  version: () => rR,
});
var x = {},
  ts = Symbol.for("react.element"),
  _T = Symbol.for("react.portal"),
  OT = Symbol.for("react.fragment"),
  IT = Symbol.for("react.strict_mode"),
  MT = Symbol.for("react.profiler"),
  LT = Symbol.for("react.provider"),
  VT = Symbol.for("react.context"),
  AT = Symbol.for("react.forward_ref"),
  DT = Symbol.for("react.suspense"),
  zT = Symbol.for("react.memo"),
  BT = Symbol.for("react.lazy"),
  mg = Symbol.iterator;
function $T(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mg && e[mg]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bg = Object.assign,
  xg = {};
function Yi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xg),
    (this.updater = n || yg);
}
Yi.prototype.isReactComponent = {};
Yi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Yi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wg() {}
wg.prototype = Yi.prototype;
function Bu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xg),
    (this.updater = n || yg);
}
var $u = (Bu.prototype = new wg());
$u.constructor = Bu;
bg($u, Yi.prototype);
$u.isPureReactComponent = !0;
var gg = Array.isArray,
  Sg = Object.prototype.hasOwnProperty,
  Nu = { current: null },
  kg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Sg.call(t, r) && !kg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ts,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Nu.current,
  };
}
function NT(e, t) {
  return {
    $$typeof: ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ju(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ts;
}
function jT(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vg = /\/+/g;
function zu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? jT("" + e.key)
    : t.toString(36);
}
function _a(e, t, n, r, i) {
  var o = typeof e;
  (o !== "undefined" && o !== "boolean") || (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ts:
          case _T:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + zu(s, 0) : r),
      gg(i)
        ? ((n = ""),
          e != null && (n = e.replace(vg, "$&/") + "/"),
          _a(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (ju(i) &&
            (i = NT(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(vg, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), gg(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + zu(o, a);
      s += _a(o, t, n, l, i);
    }
  else if (((l = $T(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + zu(o, a++)), (s += _a(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Pa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    _a(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function HT(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Mt = { current: null },
  Oa = { transition: null },
  WT = {
    ReactCurrentDispatcher: Mt,
    ReactCurrentBatchConfig: Oa,
    ReactCurrentOwner: Nu,
  };
x.Children = {
  map: Pa,
  forEach: function (e, t, n) {
    Pa(
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
      Pa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ju(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
x.Component = Yi;
x.Fragment = OT;
x.Profiler = MT;
x.PureComponent = Bu;
x.StrictMode = IT;
x.Suspense = DT;
x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = WT;
x.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = bg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Nu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Sg.call(t, l) &&
        !kg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ts, type: e.type, key: i, ref: o, props: r, _owner: s };
};
x.createContext = function (e) {
  return (
    (e = {
      $$typeof: VT,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: LT, _context: e }),
    (e.Consumer = e)
  );
};
x.createElement = Cg;
x.createFactory = function (e) {
  var t = Cg.bind(null, e);
  return (t.type = e), t;
};
x.createRef = function () {
  return { current: null };
};
x.forwardRef = function (e) {
  return { $$typeof: AT, render: e };
};
x.isValidElement = ju;
x.lazy = function (e) {
  return { $$typeof: BT, _payload: { _status: -1, _result: e }, _init: HT };
};
x.memo = function (e, t) {
  return { $$typeof: zT, type: e, compare: t === void 0 ? null : t };
};
x.startTransition = function (e) {
  var t = Oa.transition;
  Oa.transition = {};
  try {
    e();
  } finally {
    Oa.transition = t;
  }
};
x.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
x.useCallback = function (e, t) {
  return Mt.current.useCallback(e, t);
};
x.useContext = function (e) {
  return Mt.current.useContext(e);
};
x.useDebugValue = function () {};
x.useDeferredValue = function (e) {
  return Mt.current.useDeferredValue(e);
};
x.useEffect = function (e, t) {
  return Mt.current.useEffect(e, t);
};
x.useId = function () {
  return Mt.current.useId();
};
x.useImperativeHandle = function (e, t, n) {
  return Mt.current.useImperativeHandle(e, t, n);
};
x.useInsertionEffect = function (e, t) {
  return Mt.current.useInsertionEffect(e, t);
};
x.useLayoutEffect = function (e, t) {
  return Mt.current.useLayoutEffect(e, t);
};
x.useMemo = function (e, t) {
  return Mt.current.useMemo(e, t);
};
x.useReducer = function (e, t, n) {
  return Mt.current.useReducer(e, t, n);
};
x.useRef = function (e) {
  return Mt.current.useRef(e);
};
x.useState = function (e) {
  return Mt.current.useState(e);
};
x.useSyncExternalStore = function (e, t, n) {
  return Mt.current.useSyncExternalStore(e, t, n);
};
x.useTransition = function () {
  return Mt.current.useTransition();
};
x.version = "18.2.0";
var hn = x.Children,
  xe = x.Component,
  pn = x.Fragment,
  UT = x.Profiler,
  GT = x.PureComponent,
  qT = x.StrictMode,
  hr = x.Suspense,
  XT = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  pr = x.cloneElement,
  ge = x.createContext,
  Ki = x.createElement,
  YT = x.createFactory,
  Tg = x.createRef,
  Ae = x.forwardRef,
  Lt = x.isValidElement,
  KT = x.lazy,
  Ia = x.memo,
  St = x.startTransition,
  QT = x.unstable_act,
  G = x.useCallback,
  A = x.useContext,
  ZT = x.useDebugValue,
  JT = x.useDeferredValue,
  B = x.useEffect,
  gi = x.useId,
  eR = x.useImperativeHandle,
  Qe = x.useInsertionEffect,
  De = x.useLayoutEffect,
  re = x.useMemo,
  tR = x.useReducer,
  V = x.useRef,
  Fe = x.useState,
  Rg = x.useSyncExternalStore,
  nR = x.useTransition,
  rR = x.version;
var iR = "default" in kt ? x : kt,
  Qi = {},
  oR = iR,
  sR = Symbol.for("react.element"),
  aR = Symbol.for("react.fragment"),
  lR = Object.prototype.hasOwnProperty,
  cR = oR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  uR = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) lR.call(t, r) && !uR.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: sR,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: cR.current,
  };
}
Qi.Fragment = aR;
Qi.jsx = Eg;
Qi.jsxs = Eg;
var ct = Qi.Fragment,
  C = Qi.jsx,
  me = Qi.jsxs;
var fR = dn({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  dR = dn({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(fR()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  Xa = { skipAnimations: !1, useManualTiming: !1 },
  gt = (e) => e;
function hR(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    o = new WeakSet(),
    s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    o.has(c) && (l.schedule(c), e()), c(s);
  }
  let l = {
    schedule: (c, u = !1, f = !1) => {
      let p = f && r ? t : n;
      return u && o.add(c), p.has(c) || p.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), o.delete(c);
    },
    process: (c) => {
      if (((s = c), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(c));
    },
  };
  return l;
}
var is = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  pR = 40;
function Zv(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = is.reduce((h, m) => ((h[m] = hR(o)), h), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: f,
      postRender: d,
    } = s,
    p = () => {
      let h = Xa.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, pR), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(p);
    };
  return {
    schedule: is.reduce((h, m) => {
      let v = s[m];
      return (h[m] = (S, k = !1, w = !1) => (n || y(), v.schedule(S, k, w))), h;
    }, {}),
    cancel: (h) => {
      for (let m = 0; m < is.length; m++) s[is[m]].cancel(h);
    },
    state: i,
    steps: s,
  };
}
var {
    schedule: q,
    cancel: Tt,
    state: Ue,
    steps: Aa,
  } = Zv(typeof requestAnimationFrame < "u" ? requestAnimationFrame : gt, !0),
  Jv = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  mR = 1e-7,
  gR = 12;
function vR(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Jv(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > mR && ++a < gR);
  return s;
}
function so(e, t, n, r) {
  if (e === t && n === r) return gt;
  let i = (o) => vR(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Jv(i(o), t, r));
}
var Cf = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Tf = (e) => (t) => 1 - e(1 - t),
  Rf = so(0.33, 1.53, 0.69, 0.99),
  Ya = Tf(Rf),
  Ef = Cf(Ya),
  Ff = (e) =>
    (e *= 2) < 1 ? 0.5 * Ya(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ka = (e) => 1 - Math.sin(Math.acos(e)),
  Pf = Tf(Ka),
  _f = Cf(Ka),
  ao = gt,
  Zt = gt,
  gr = (e, t, n) => (n > t ? t : n < e ? e : n),
  ys = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ar = ys("deg"),
  jn = ys("%"),
  X = ys("px"),
  yR = ys("vh"),
  bR = ys("vw"),
  Fg = {
    ...jn,
    parse: (e) => jn.parse(e) / 100,
    transform: (e) => jn.transform(e * 100),
  },
  lo = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ds = { ...lo, transform: (e) => gr(0, 1, e) },
  Ma = { ...lo, default: 1 },
  as = (e) => Math.round(e * 1e5) / 1e5,
  Of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function xR(e) {
  return e == null;
}
var wR =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  If = (e, t) => (n) =>
    !!(
      (typeof n == "string" && wR.test(n) && n.startsWith(e)) ||
      (t && !xR(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  ey = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    let [i, o, s, a] = r.match(Of);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  SR = (e) => gr(0, 255, e),
  Hu = { ...lo, transform: (e) => Math.round(SR(e)) },
  xi = {
    test: If("rgb", "red"),
    parse: ey("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Hu.transform(e) +
      ", " +
      Hu.transform(t) +
      ", " +
      Hu.transform(n) +
      ", " +
      as(ds.transform(r)) +
      ")",
  };
function kR(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var nf = { test: If("#"), parse: kR, transform: xi.transform },
  Zi = {
    test: If("hsl", "hue"),
    parse: ey("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      jn.transform(as(t)) +
      ", " +
      jn.transform(as(n)) +
      ", " +
      as(ds.transform(r)) +
      ")",
  },
  mt = {
    test: (e) => xi.test(e) || nf.test(e) || Zi.test(e),
    parse: (e) =>
      xi.test(e) ? xi.parse(e) : Zi.test(e) ? Zi.parse(e) : nf.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? xi.transform(e)
        : Zi.transform(e),
  },
  CR =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function TR(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Of)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(CR)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var ty = "number",
  ny = "color",
  RR = "var",
  ER = "var(",
  Pg = "${}",
  FR =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function hs(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        FR,
        (l) => (
          mt.test(l)
            ? (r.color.push(o), i.push(ny), n.push(mt.parse(l)))
            : l.startsWith(ER)
            ? (r.var.push(o), i.push(RR), n.push(l))
            : (r.number.push(o), i.push(ty), n.push(parseFloat(l))),
          ++o,
          Pg
        )
      )
      .split(Pg);
  return { values: n, split: a, indexes: r, types: i };
}
function ry(e) {
  return hs(e).values;
}
function iy(e) {
  let { split: t, types: n } = hs(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === ty
          ? (o += as(i[s]))
          : a === ny
          ? (o += mt.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var PR = (e) => (typeof e == "number" ? 0 : e);
function _R(e) {
  let t = ry(e);
  return iy(e)(t.map(PR));
}
var vr = { test: TR, parse: ry, createTransformer: iy, getAnimatableNone: _R },
  Pn = (e) => e * 1e3,
  Hn = (e) => e / 1e3,
  Wu = 0.001,
  OR = 0.01,
  _g = 10,
  IR = 0.05,
  MR = 1;
function oy({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  ao(e <= Pn(_g), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  (s = gr(IR, MR, s)),
    (e = gr(OR, _g, Hn(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            p = rf(c, s),
            y = Math.exp(-f);
          return Wu - (d / p) * y;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            p = Math.pow(s, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-f),
            g = rf(Math.pow(c, 2), s);
          return ((-i(c) + Wu > 0 ? -1 : 1) * ((d - p) * y)) / g;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Wu + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = VR(i, o, a);
  if (((e = Pn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var LR = 12;
function VR(e, t, n) {
  let r = n;
  for (let i = 1; i < LR; i++) r = r - e(r) / t(r);
  return r;
}
function rf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
function Mf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var AR = 5;
function sy(e, t, n) {
  let r = Math.max(t - AR, 0);
  return Mf(n - e(r), t - r);
}
var DR = ["duration", "bounce"],
  zR = ["stiffness", "damping", "mass"];
function Og(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function BR(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Og(e, zR) && Og(e, DR)) {
    let n = oy(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function bs({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = BR({ ...r, velocity: -Hn(r.velocity || 0) }),
    p = f || 0,
    y = l / (2 * Math.sqrt(a * c)),
    g = o - i,
    b = Hn(Math.sqrt(a / c)),
    h = Math.abs(g) < 5;
  n || (n = h ? 0.01 : 2), t || (t = h ? 0.005 : 0.5);
  let m;
  if (y < 1) {
    let v = rf(b, y);
    m = (S) => {
      let k = Math.exp(-y * b * S);
      return (
        o - k * (((p + y * b * g) / v) * Math.sin(v * S) + g * Math.cos(v * S))
      );
    };
  } else if (y === 1) m = (v) => o - Math.exp(-b * v) * (g + (p + b * g) * v);
  else {
    let v = b * Math.sqrt(y * y - 1);
    m = (S) => {
      let k = Math.exp(-y * b * S),
        w = Math.min(v * S, 300);
      return (
        o - (k * ((p + y * b * g) * Math.sinh(w) + v * g * Math.cosh(w))) / v
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (v) => {
      let S = m(v);
      if (d) s.done = v >= u;
      else {
        let k = 0;
        y < 1 && (k = v === 0 ? Pn(p) : sy(m, v, S));
        let w = Math.abs(k) <= n,
          T = Math.abs(o - S) <= t;
        s.done = w && T;
      }
      return (s.value = s.done ? o : S), s;
    },
  };
}
function of({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    p = (R) => (a !== void 0 && R < a) || (l !== void 0 && R > l),
    y = (R) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - R) < Math.abs(l - R)
        ? a
        : l,
    g = n * t,
    b = f + g,
    h = s === void 0 ? b : s(b);
  h !== b && (g = h - f);
  let m = (R) => -g * Math.exp(-R / r),
    v = (R) => h + m(R),
    S = (R) => {
      let O = m(R),
        I = v(R);
      (d.done = Math.abs(O) <= c), (d.value = d.done ? h : I);
    },
    k,
    w,
    T = (R) => {
      p(d.value) &&
        ((k = R),
        (w = bs({
          keyframes: [d.value, y(d.value)],
          velocity: sy(v, R, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (R) => {
        let O = !1;
        return (
          !w && k === void 0 && ((O = !0), S(R), T(R)),
          k !== void 0 && R >= k ? w.next(R - k) : (!O && S(R), d)
        );
      },
    }
  );
}
var ay = so(0.42, 0, 1, 1),
  ly = so(0, 0, 0.58, 1),
  Lf = so(0.42, 0, 0.58, 1),
  $R = (e, t) => (n) => t(e(n)),
  Wn = (...e) => e.reduce($R),
  yr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Me = (e, t, n) => e + (t - e) * n;
function Uu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function NR({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Uu(l, a, e + 1 / 3)), (o = Uu(l, a, e)), (s = Uu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Na(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Gu = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  jR = [nf, xi, Zi],
  HR = (e) => jR.find((t) => t.test(e));
function Ig(e) {
  let t = HR(e);
  if (
    (ao(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === Zi && (n = NR(n)), n;
}
var Mg = (e, t) => {
    let n = Ig(e),
      r = Ig(t);
    if (!n || !r) return Na(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = Gu(n.red, r.red, o)),
      (i.green = Gu(n.green, r.green, o)),
      (i.blue = Gu(n.blue, r.blue, o)),
      (i.alpha = Me(n.alpha, r.alpha, o)),
      xi.transform(i)
    );
  },
  cy = (e) => (t) => typeof t == "string" && t.startsWith(e),
  uy = cy("--"),
  WR = cy("var(--"),
  Vf = (e) => (WR(e) ? UR.test(e.split("/*")[0].trim()) : !1),
  UR =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  sf = new Set(["none", "hidden"]);
function GR(e, t) {
  return sf.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function qR(e, t) {
  return (n) => Me(e, t, n);
}
function Af(e) {
  return typeof e == "number"
    ? qR
    : typeof e == "string"
    ? Vf(e)
      ? Na
      : mt.test(e)
      ? Mg
      : KR
    : Array.isArray(e)
    ? fy
    : typeof e == "object"
    ? mt.test(e)
      ? Mg
      : XR
    : Na;
}
function fy(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => Af(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function XR(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Af(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function YR(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var KR = (e, t) => {
  let n = vr.createTransformer(t),
    r = hs(e),
    i = hs(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (sf.has(e) && !i.values.length) || (sf.has(t) && !r.values.length)
      ? GR(e, t)
      : Wn(fy(YR(r, i), i.values), n)
    : (ao(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      Na(e, t));
};
function Df(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Me(e, t, n)
    : Af(e)(e, t);
}
function QR(e, t, n) {
  let r = [],
    i = n || Df,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || gt : t;
      a = Wn(l, a);
    }
    r.push(a);
  }
  return r;
}
function xs(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Zt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = QR(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = yr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(gr(e[0], e[o - 1], c)) : l;
}
var dy = (e) => Array.isArray(e) && typeof e[0] != "number",
  zf = (e) => Array.isArray(e) && typeof e[0] == "number",
  Lg = {
    linear: gt,
    easeIn: ay,
    easeInOut: Lf,
    easeOut: ly,
    circIn: Ka,
    circInOut: _f,
    circOut: Pf,
    backIn: Ya,
    backInOut: Ef,
    backOut: Rf,
    anticipate: Ff,
  },
  af = (e) => {
    if (zf(e)) {
      Zt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return so(t, n, r, i);
    } else if (typeof e == "string")
      return Zt(Lg[e] !== void 0, `Invalid easing type '${e}'`), Lg[e];
    return e;
  };
function hy(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = yr(0, t, r);
    e.push(Me(n, 1, i));
  }
}
function Bf(e) {
  let t = [0];
  return hy(t, e.length - 1), t;
}
function ZR(e, t) {
  return e.map((n) => n * t);
}
function JR(e, t) {
  return e.map(() => t || Lf).splice(0, e.length - 1);
}
function ps({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = dy(r) ? r.map(af) : af(r),
    o = { done: !1, value: t[0] },
    s = ZR(n && n.length === t.length ? n : Bf(t), e),
    a = xs(s, t, { ease: Array.isArray(i) ? i : JR(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var ws = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  zr = new Set(ws),
  eE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Vg = (e) => e === lo || e === X,
  Ag = (e, t) => parseFloat(e.split(", ")[t]),
  Dg =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Ag(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? Ag(o[1], e) : 0;
      }
    },
  tE = new Set(["x", "y", "z"]),
  nE = ws.filter((e) => !tE.has(e));
function rE(e) {
  let t = [];
  return (
    nE.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var ro = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Dg(4, 13),
  y: Dg(5, 14),
};
ro.translateX = ro.x;
ro.translateY = ro.y;
var wi = new Set(),
  lf = !1,
  cf = !1;
function py() {
  if (cf) {
    let e = Array.from(wi).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      let i = rE(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && F.scrollTo(0, r.suspendedScrollY);
      });
  }
  (cf = !1), (lf = !1), wi.forEach((e) => e.complete()), wi.clear();
}
function my() {
  wi.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (cf = !0);
  });
}
function iE() {
  my(), py();
}
var $f = class {
    constructor(e, t, n, r, i, o = !1) {
      (this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = o);
    }
    scheduleResolve() {
      (this.isScheduled = !0),
        this.isAsync
          ? (wi.add(this),
            lf || ((lf = !0), q.read(my), q.resolveKeyframes(py)))
          : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null)
          if (i === 0) {
            let o = r?.get(),
              s = e[e.length - 1];
            if (o !== void 0) e[0] = o;
            else if (n && t) {
              let a = n.readValue(t, s);
              a != null && (e[0] = a);
            }
            e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
          } else e[i] = e[i - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      (this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        wi.delete(this);
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), wi.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  Da;
function oE() {
  Da = void 0;
}
var Un = {
    now: () => (
      Da === void 0 &&
        Un.set(
          Ue.isProcessing || Xa.useManualTiming
            ? Ue.timestamp
            : performance.now()
        ),
      Da
    ),
    set: (e) => {
      (Da = e), queueMicrotask(oE);
    },
  },
  ja = { current: !1 };
function Qa(e) {
  return typeof e == "function";
}
var zg = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (vr.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function sE(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function aE(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let o = e[e.length - 1],
    s = zg(i, t),
    a = zg(o, t);
  return (
    ao(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
    ),
    !s || !a ? !1 : sE(e) || ((n === "spring" || Qa(n)) && r)
  );
}
var lE = (e) => e !== null;
function Za(e, { repeat: t, repeatType: n = "loop" }, r) {
  let i = e.filter(lE),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var cE = 40,
  gy = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...s
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = Un.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    calcStartTime() {
      return this.resolvedAt
        ? this.resolvedAt - this.createdAt > cE
          ? this.resolvedAt
          : this.createdAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && iE(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      (this.resolvedAt = Un.now()), (this.hasAttemptedResolve = !0);
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !aE(e, n, r, i))
        if (ja.current || !o) {
          a?.(Za(e, this.options, t)), s?.(), this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  uf = 2e4;
function vy(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < uf; ) (t += n), (r = e.next(t));
  return t >= uf ? 1 / 0 : t;
}
var uE = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => q.update(t, !0),
      stop: () => Tt(t),
      now: () => (Ue.isProcessing ? Ue.timestamp : Un.now()),
    };
  },
  fE = { decay: of, inertia: of, tween: ps, keyframes: ps, spring: bs },
  dE = (e) => e / 100,
  Ja = class extends gy {
    constructor(e) {
      super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.startTime = null),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: a } = this.options;
          a && a();
        });
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        o = r?.KeyframeResolver || $f,
        s = (a, l) => this.onKeyframesResolved(a, l);
      (this.resolver = new o(i, s, t, n, r)), this.resolver.scheduleResolve();
    }
    initPlayback(e) {
      let {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = Qa(t) ? t : fE[t] || ps,
        a,
        l;
      s !== ps &&
        typeof e[0] != "number" &&
        ((a = Wn(dE, Df(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      i === "mirror" &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = vy(c));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: T } = this.options;
        return { done: !0, value: T[T.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: p,
        repeatDelay: y,
        onUpdate: g,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      let b = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        h = this.speed >= 0 ? b < 0 : b > c;
      (this.currentTime = Math.max(b, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let m = this.currentTime,
        v = i;
      if (d) {
        let T = Math.min(this.currentTime, c) / u,
          R = Math.floor(T),
          O = T % 1;
        !O && T >= 1 && (O = 1),
          O === 1 && R--,
          (R = Math.min(R, d + 1)),
          !!(R % 2) &&
            (p === "reverse"
              ? ((O = 1 - O), y && (O -= y / u))
              : p === "mirror" && (v = o)),
          (m = gr(0, 1, O) * u);
      }
      let S = h ? { done: !1, value: a[0] } : v.next(m);
      s && (S.value = s(S.value));
      let { done: k } = S;
      !h &&
        l !== null &&
        (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let w =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && k));
      return (
        w && r !== void 0 && (S.value = Za(a, this.options, r)),
        g && g(S.value),
        w && this.finish(),
        S
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Hn(e.calculatedDuration) : 0;
    }
    get time() {
      return Hn(this.currentTime);
    }
    set time(e) {
      (e = Pn(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = Hn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: e = uE, onPlay: t, startTime: n } = this.options;
      this.driver || (this.driver = e((i) => this.tick(i))), t && t();
      let r = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = r - this.holdTime)
        : this.startTime
        ? this.state === "finished" && (this.startTime = r)
        : (this.startTime = n ?? this.calcStartTime()),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  };
function Nf(e) {
  return new Ja(e);
}
var yy = (e) => /^0[^.\s]+$/u.test(e);
function hE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || yy(e)
    : !0;
}
var by = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  pE = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mE(e) {
  let t = pE.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var gE = 4;
function xy(e, t, n = 1) {
  Zt(
    n <= gE,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = mE(e);
  if (!r) return;
  let o = F.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return by(s) ? parseFloat(s) : s;
  }
  return Vf(i) ? xy(i, t, n + 1) : i;
}
var wy = (e) => (t) => t.test(e),
  vE = { test: (e) => e === "auto", parse: (e) => e },
  Sy = [lo, X, jn, Ar, bR, yR, vE],
  Bg = (e) => Sy.find(wy(e)),
  yE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bE(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(Of) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = yE.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var xE = /\b([a-z-]*)\(.*?\)/gu,
  ff = {
    ...vr,
    getAnimatableNone: (e) => {
      let t = e.match(xE);
      return t ? t.map(bE).join(" ") : e;
    },
  },
  wE = {
    borderWidth: X,
    borderTopWidth: X,
    borderRightWidth: X,
    borderBottomWidth: X,
    borderLeftWidth: X,
    borderRadius: X,
    radius: X,
    borderTopLeftRadius: X,
    borderTopRightRadius: X,
    borderBottomRightRadius: X,
    borderBottomLeftRadius: X,
    width: X,
    maxWidth: X,
    height: X,
    maxHeight: X,
    top: X,
    right: X,
    bottom: X,
    left: X,
    padding: X,
    paddingTop: X,
    paddingRight: X,
    paddingBottom: X,
    paddingLeft: X,
    margin: X,
    marginTop: X,
    marginRight: X,
    marginBottom: X,
    marginLeft: X,
    backgroundPositionX: X,
    backgroundPositionY: X,
  },
  SE = {
    rotate: Ar,
    rotateX: Ar,
    rotateY: Ar,
    rotateZ: Ar,
    scale: Ma,
    scaleX: Ma,
    scaleY: Ma,
    scaleZ: Ma,
    skew: Ar,
    skewX: Ar,
    skewY: Ar,
    distance: X,
    translateX: X,
    translateY: X,
    translateZ: X,
    x: X,
    y: X,
    z: X,
    perspective: X,
    transformPerspective: X,
    opacity: ds,
    originX: Fg,
    originY: Fg,
    originZ: X,
  },
  $g = { ...lo, transform: Math.round },
  jf = {
    ...wE,
    ...SE,
    zIndex: $g,
    size: X,
    fillOpacity: ds,
    strokeOpacity: ds,
    numOctaves: $g,
  },
  kE = {
    ...jf,
    color: mt,
    backgroundColor: mt,
    outlineColor: mt,
    fill: mt,
    stroke: mt,
    borderColor: mt,
    borderTopColor: mt,
    borderRightColor: mt,
    borderBottomColor: mt,
    borderLeftColor: mt,
    filter: ff,
    WebkitFilter: ff,
  },
  Hf = (e) => kE[e];
function ky(e, t) {
  let n = Hf(e);
  return (
    n !== ff && (n = vr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var CE = new Set(["auto", "none", "0"]);
function TE(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    typeof o == "string" && !CE.has(o) && hs(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let o of t) e[o] = ky(n, i);
}
var Cy = class extends $f {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let a = 0; a < e.length; a++) {
        let l = e[a];
        if (typeof l == "string" && ((l = l.trim()), Vf(l))) {
          let c = xy(l, t.current);
          c !== void 0 && (e[a] = c),
            a === e.length - 1 && (this.finalKeyframe = l);
        }
      }
      if ((this.resolveNoneKeyframes(), !eE.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        o = Bg(r),
        s = Bg(i);
      if (o !== s)
        if (Vg(o) && Vg(s))
          for (let a = 0; a < e.length; a++) {
            let l = e[a];
            typeof l == "string" && (e[a] = parseFloat(l));
          }
        else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let r = 0; r < e.length; r++) hE(e[r]) && n.push(r);
      n.length && TE(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      n === "height" && (this.suspendedScrollY = F.pageYOffset),
        (this.measuredOrigin = ro[n](
          e.measureViewportBox(),
          F.getComputedStyle(e.current)
        )),
        (t[0] = this.measuredOrigin);
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      var e;
      let { element: t, name: n, unresolvedKeyframes: r } = this;
      if (!t || !t.current) return;
      let i = t.getValue(n);
      i && i.jump(this.measuredOrigin, !1);
      let o = r.length - 1,
        s = r[o];
      (r[o] = ro[n](t.measureViewportBox(), F.getComputedStyle(t.current))),
        s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
        !((e = this.removedTransforms) === null || e === void 0) &&
          e.length &&
          this.removedTransforms.forEach(([a, l]) => {
            t.getValue(a).set(l);
          }),
        this.resolveNoneKeyframes();
    }
  },
  Ty = new Set(["opacity", "clipPath", "filter", "transform"]),
  RE = 10,
  EE = (e, t) => {
    let n = "",
      r = Math.max(Math.round(t / RE), 2);
    for (let i = 0; i < r; i++) n += e(yr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function Wf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var FE = { linearEasing: void 0 };
function PE(e, t) {
  let n = Wf(e);
  return () => {
    var r;
    return (r = FE[t]) !== null && r !== void 0 ? r : n();
  };
}
var Ha = PE(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function Ry(e) {
  return !!(
    (typeof e == "function" && Ha()) ||
    !e ||
    (typeof e == "string" && (e in df || Ha())) ||
    zf(e) ||
    (Array.isArray(e) && e.every(Ry))
  );
}
var os = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  df = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: os([0, 0.65, 0.55, 1]),
    circOut: os([0.55, 0, 1, 0.45]),
    backIn: os([0.31, 0.01, 0.66, -0.59]),
    backOut: os([0.33, 1.53, 0.69, 0.99]),
  };
function Ey(e, t) {
  if (e)
    return typeof e == "function" && Ha()
      ? EE(e, t)
      : zf(e)
      ? os(e)
      : Array.isArray(e)
      ? e.map((n) => Ey(n, t) || df.easeOut)
      : df[e];
}
function _E(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = Ey(a, i);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Ng(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
var OE = Wf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Wa = 10,
  IE = 2e4;
function ME(e) {
  return Qa(e.type) || e.type === "spring" || !Ry(e.ease);
}
function LE(e, t) {
  let n = new Ja({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < IE; ) (r = n.sample(o)), i.push(r.value), (o += Wa);
  return { times: void 0, keyframes: i, duration: o - Wa, ease: "linear" };
}
var Fy = { anticipate: Ff, backInOut: Ef, circInOut: _f };
function VE(e) {
  return e in Fy;
}
var hf = class extends gy {
  constructor(e) {
    super(e);
    let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
    (this.resolver = new Cy(
      i,
      (o, s) => this.onKeyframesResolved(o, s),
      t,
      n,
      r
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, t) {
    var n;
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
      startTime: c,
    } = this.options;
    if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
    if (
      (typeof o == "string" && Ha() && VE(o) && (o = Fy[o]), ME(this.options))
    ) {
      let {
          onComplete: f,
          onUpdate: d,
          motionValue: p,
          element: y,
          ...g
        } = this.options,
        b = LE(e, g);
      (e = b.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = b.duration),
        (i = b.times),
        (o = b.ease),
        (s = "keyframes");
    }
    let u = _E(a.owner.current, l, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (u.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ng(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            let { onComplete: f } = this.options;
            a.set(Za(e, this.options, t)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: r, times: i, type: s, ease: o, keyframes: e }
    );
  }
  get duration() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { duration: t } = e;
    return Hn(t);
  }
  get time() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { animation: t } = e;
    return Hn(t.currentTime || 0);
  }
  set time(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.currentTime = Pn(e);
  }
  get speed() {
    let { resolved: e } = this;
    if (!e) return 1;
    let { animation: t } = e;
    return t.playbackRate;
  }
  set speed(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.playbackRate = e;
  }
  get state() {
    let { resolved: e } = this;
    if (!e) return "idle";
    let { animation: t } = e;
    return t.playState;
  }
  get startTime() {
    let { resolved: e } = this;
    if (!e) return null;
    let { animation: t } = e;
    return t.startTime;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      let { resolved: t } = this;
      if (!t) return gt;
      let { animation: n } = t;
      Ng(n, e);
    }
    return gt;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.playState === "finished" && this.updateFinishedPromise(), t.play();
  }
  pause() {
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    let { resolved: e } = this;
    if (!e) return;
    let {
      animation: t,
      keyframes: n,
      duration: r,
      type: i,
      ease: o,
      times: s,
    } = e;
    if (t.playState === "idle" || t.playState === "finished") return;
    if (this.time) {
      let {
          motionValue: l,
          onUpdate: c,
          onComplete: u,
          element: f,
          ...d
        } = this.options,
        p = new Ja({
          ...d,
          keyframes: n,
          duration: r,
          type: i,
          ease: o,
          times: s,
          isGenerator: !0,
        }),
        y = Pn(this.time);
      l.setWithVelocity(p.sample(y - Wa).value, p.sample(y).value, Wa);
    }
    let { onStop: a } = this.options;
    a && a(), this.cancel();
  }
  complete() {
    let { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    let { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: o,
      type: s,
    } = e;
    return (
      OE() &&
      n &&
      Ty.has(n) &&
      t &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate &&
      !r &&
      i !== "mirror" &&
      o !== 0 &&
      s !== "inertia"
    );
  }
};
function Uf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function el(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function AE([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var Gf = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Uf(this.subscriptions, e), () => el(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  jg = 30,
  DE = (e) => !isNaN(parseFloat(e)),
  ls = { current: void 0 },
  tl = class {
    constructor(e, t = {}) {
      (this.version = "11.11.7"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = Un.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = Un.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = DE(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Gf());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              q.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return ls.current && ls.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = Un.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > jg
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, jg);
      return Mf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Ge(e, t) {
  return new tl(e, t);
}
var nl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  zE = "framerAppearId",
  rl = "data-" + nl(zE),
  ze = (e) => !!(e && e.getVelocity);
function Hg(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function qf(e, t, n, r) {
  if (typeof t == "function") {
    let [i, o] = Hg(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [i, o] = Hg(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function il(e, t, n) {
  let r = e.getProps();
  return qf(r, t, n !== void 0 ? n : r.custom, e);
}
var BE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  $E = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  NE = { type: "keyframes", duration: 0.8 },
  jE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  HE = (e, { keyframes: t }) =>
    t.length > 2
      ? NE
      : zr.has(e)
      ? e.startsWith("scale")
        ? $E(t[1])
        : BE
      : jE;
function Xf(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var Py = Wf(() => F.ScrollTimeline !== void 0),
  _y = class {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((r) =>
        Py() && r.attachTimeline ? r.attachTimeline(e) : t(r)
      );
      return () => {
        n.forEach((r, i) => {
          r && r(), this.animations[i].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get startTime() {
      return this.getAll("startTime");
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  };
function WE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
var Yf =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      let a = Xf(r, e) || {},
        l = a.delay || r.delay || 0,
        { elapsed: c = 0 } = r;
      c = c - Pn(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      WE(a) || (u = { ...u, ...HE(e, u) }),
        u.duration && (u.duration = Pn(u.duration)),
        u.repeatDelay && (u.repeatDelay = Pn(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let f = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (f = !0)),
        (ja.current || Xa.skipAnimations) &&
          ((f = !0), (u.duration = 0), (u.delay = 0)),
        f && !o && t.get() !== void 0)
      ) {
        let d = Za(u.keyframes, a);
        if (d !== void 0)
          return (
            q.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new _y([])
          );
      }
      return !o && hf.supports(u) ? new hf(u) : new Ja(u);
    },
  pf = (e) => Array.isArray(e),
  UE = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  GE = (e) => (pf(e) ? e[e.length - 1] || 0 : e);
function qE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ge(n));
}
function Kf(e, t) {
  let n = il(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = GE(o[s]);
    qE(e, s, a);
  }
}
function Oy(e) {
  return e.props[rl];
}
function XE(e) {
  return !!(ze(e) && e.add);
}
function Iy(e) {
  if (zr.has(e)) return "transform";
  if (Ty.has(e)) return nl(e);
}
function mf(e, t) {
  var n;
  if (!e.applyWillChange) return;
  let r = e.getValue("willChange");
  if (XE(r)) return r.add(t);
  !(!((n = e.props.style) === null || n === void 0) && n.willChange) &&
    Iy(t) &&
    e.setStaticValue("willChange", "transform");
}
function YE({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Qf(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  let c = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (let f in l) {
    let d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      p = l[f];
    if (p === void 0 || (u && YE(u, f))) continue;
    let y = { delay: n, ...Xf(s || {}, f) },
      g = !1;
    if (F.MotionHandoffAnimation) {
      let h = Oy(e);
      if (h) {
        let m = F.MotionHandoffAnimation(h, f, q);
        m !== null && ((y.startTime = m), (g = !0));
      }
    }
    mf(e, f),
      d.start(
        Yf(f, d, p, e.shouldReduceMotion && zr.has(f) ? { type: !1 } : y, e, g)
      );
    let b = d.animation;
    b && c.push(b);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        q.update(() => {
          a && Kf(e, a);
        });
      }),
    c
  );
}
function gf(e, t, n = {}) {
  var r;
  let i = il(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all(Qf(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return KE(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function KE(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(QE)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          s.push(
            gf(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function QE(e, t) {
  return e.sortNodePosition(t);
}
function Zf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => gf(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = gf(e, t, n);
  else {
    let i = typeof t == "function" ? il(e, t, n.custom) : t;
    r = Promise.all(Qf(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function ms(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function My(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function gs(e) {
  return typeof e == "string" || Array.isArray(e);
}
var Jf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  ed = ["initial", ...Jf],
  ZE = ed.length;
function Ly(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let n = e.parent ? Ly(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  let t = {};
  for (let n = 0; n < ZE; n++) {
    let r = ed[n],
      i = e.props[r];
    (gs(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var JE = [...Jf].reverse(),
  eF = Jf.length;
function tF(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Zf(e, n, r)));
}
function nF(e) {
  let t = tF(e),
    n = Wg(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = il(
        e,
        u,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        let { transition: p, transitionEnd: y, ...g } = d;
        c = { ...c, ...g, ...y };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let { props: c } = e,
      u = Ly(e.parent) || {},
      f = [],
      d = new Set(),
      p = {},
      y = 1 / 0;
    for (let b = 0; b < eF; b++) {
      let h = JE[b],
        m = n[h],
        v = c[h] !== void 0 ? c[h] : u[h],
        S = gs(v),
        k = h === l ? m.isActive : null;
      k === !1 && (y = b);
      let w = v === u[h] && v !== c[h] && S;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (m.protectedKeys = { ...p }),
        (!m.isActive && k === null) ||
          (!v && !m.prevProp) ||
          ms(v) ||
          typeof v == "boolean")
      )
        continue;
      let T = rF(m.prevProp, v),
        R = T || (h === l && m.isActive && !w && S) || (b > y && S),
        O = !1,
        I = Array.isArray(v) ? v : [v],
        N = I.reduce(i(h), {});
      k === !1 && (N = {});
      let { prevResolvedValues: z = {} } = m,
        j = { ...z, ...N },
        Y = (ne) => {
          (R = !0),
            d.has(ne) && ((O = !0), d.delete(ne)),
            (m.needsAnimating[ne] = !0);
          let fe = e.getValue(ne);
          fe && (fe.liveStyle = !1);
        };
      for (let ne in j) {
        let fe = N[ne],
          Q = z[ne];
        if (p.hasOwnProperty(ne)) continue;
        let se = !1;
        pf(fe) && pf(Q) ? (se = !My(fe, Q)) : (se = fe !== Q),
          se
            ? fe != null
              ? Y(ne)
              : d.add(ne)
            : fe !== void 0 && d.has(ne)
            ? Y(ne)
            : (m.protectedKeys[ne] = !0);
      }
      (m.prevProp = v),
        (m.prevResolvedValues = N),
        m.isActive && (p = { ...p, ...N }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!(w && T) || O) &&
          f.push(...I.map((ne) => ({ animation: ne, options: { type: h } })));
    }
    if (d.size) {
      let b = {};
      d.forEach((h) => {
        let m = e.getBaseTarget(h),
          v = e.getValue(h);
        v && (v.liveStyle = !0), (b[h] = m ?? null);
      }),
        f.push({ animation: b });
    }
    let g = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var p;
        return (p = d.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = Wg()), (r = !0);
    },
  };
}
function rF(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !My(t, e) : !1;
}
function vi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Wg() {
  return {
    animate: vi(!0),
    whileInView: vi(),
    whileHover: vi(),
    whileTap: vi(),
    whileDrag: vi(),
    whileFocus: vi(),
    exit: vi(),
  };
}
var Br = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  iF = class extends Br {
    constructor(e) {
      super(e), e.animationState || (e.animationState = nF(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      ms(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      this.node.animationState.reset(),
        (e = this.unmountControls) === null || e === void 0 || e.call(this);
    }
  },
  oF = 0,
  sF = class extends Br {
    constructor() {
      super(...arguments), (this.id = oF++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive("exit", !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  ol = { animation: { Feature: iF }, exit: { Feature: sF } },
  Vy = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function sl(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var Ay = (e) => (t) => Vy(t) && e(t, sl(t));
function mr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Gn(e, t, n, r) {
  return mr(e, t, Ay(n), r);
}
var vf = (e, t) => Math.abs(e - t);
function Dy(e, t) {
  let n = vf(e.x, t.x),
    r = vf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function zy(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Ug = zy("dragHorizontal"),
  Gg = zy("dragVertical");
function By(e) {
  let t = !1;
  if (e === "y") t = Gg();
  else if (e === "x") t = Ug();
  else {
    let n = Ug(),
      r = Gg();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function td() {
  let e = By(!0);
  return e ? (e(), !1) : !0;
}
var $y = 1e-4,
  aF = 1 - $y,
  lF = 1 + $y,
  Ny = 0.01,
  cF = 0 - Ny,
  uF = 0 + Ny;
function jt(e) {
  return e.max - e.min;
}
function fF(e, t, n) {
  return Math.abs(e - t) <= n;
}
function qg(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = Me(t.min, t.max, e.origin)),
    (e.scale = jt(n) / jt(t)),
    (e.translate = Me(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= aF && e.scale <= lF) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= cF && e.translate <= uF) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function cs(e, t, n, r) {
  qg(e.x, t.x, n.x, r ? r.originX : void 0),
    qg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Xg(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + jt(t));
}
function dF(e, t, n) {
  Xg(e.x, t.x, n.x), Xg(e.y, t.y, n.y);
}
function Yg(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + jt(t));
}
function us(e, t, n) {
  Yg(e.x, t.x, n.x), Yg(e.y, t.y, n.y);
}
var Kg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Ji = () => ({ x: Kg(), y: Kg() }),
  Qg = () => ({ min: 0, max: 0 }),
  $e = () => ({ x: Qg(), y: Qg() }),
  co = ge(null);
function nd() {
  let e = A(co);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = gi();
  B(() => r(i), []);
  let o = G(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
var vs = ge({}),
  al = ge({}),
  Ua = {};
function rd(e) {
  Object.assign(Ua, e);
}
var hF = (e, t) => e.depth - t.depth,
  jy = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      Uf(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      el(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(hF),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function Ct(e) {
  let t = ze(e) ? e.get() : e;
  return UE(t) ? t.toValue() : t;
}
function Hy(e, t) {
  let n = Un.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (Tt(r), e(o - t));
    };
  return q.read(r, !0), () => Tt(r);
}
var qn = ge({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ss = ge({}),
  ll = typeof F < "u",
  $r = ll ? De : B,
  Wy = ge({ strict: !1 }),
  { schedule: id, cancel: b$ } = Zv(queueMicrotask, !1);
function eo(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function pF(e, t, n, r, i) {
  var o, s;
  let { visualElement: a } = A(Ss),
    l = A(Wy),
    c = A(co),
    u = A(qn).reducedMotion,
    f = V();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  let d = f.current,
    p = A(al);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    mF(f.current, n, i, p),
    Qe(() => {
      d && d.update(n, c);
    });
  let y = n[rl],
    g = V(
      !!y &&
        !(
          !((o = F.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(F, y)
        ) &&
        ((s = F.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(F, y))
    );
  return (
    $r(() => {
      d &&
        ((F.MotionIsMounted = !0),
        d.updateFeatures(),
        id.render(d.render),
        g.current && d.animationState && d.animationState.animateChanges());
    }),
    B(() => {
      d &&
        (!g.current && d.animationState && d.animationState.animateChanges(),
        g.current &&
          (queueMicrotask(() => {
            var b;
            (b = F.MotionHandoffMarkAsComplete) === null ||
              b === void 0 ||
              b.call(F, y);
          }),
          (g.current = !1)));
    }),
    d
  );
}
function mF(e, t, n, r) {
  let {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Uy(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && eo(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function Uy(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Uy(e.parent);
}
function gF(e, t, n) {
  return G(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : eo(n) && (n.current = r));
    },
    [t]
  );
}
function cl(e) {
  return ms(e.animate) || ed.some((t) => gs(e[t]));
}
function Gy(e) {
  return !!(cl(e) || e.variants);
}
function vF(e, t) {
  if (cl(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || gs(n) ? n : void 0,
      animate: gs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function yF(e) {
  let { initial: t, animate: n } = vF(e, A(Ss));
  return re(() => ({ initial: t, animate: n }), [Zg(t), Zg(n)]);
}
function Zg(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var Jg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  io = {};
for (let e in Jg) io[e] = { isEnabled: (t) => Jg[e].some((n) => !!t[n]) };
function bF(e) {
  for (let t in e) io[t] = { ...io[t], ...e[t] };
}
var od = Symbol.for("motionComponentSymbol");
function qy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && bF(e);
  function o(a, l) {
    let c,
      u = { ...A(qn), ...a, layoutId: xF(a) },
      { isStatic: f } = u,
      d = yF(a),
      p = r(a, f);
    if (!f && ll) {
      wF(u, e);
      let y = SF(u);
      (c = y.MeasureLayout),
        (d.visualElement = pF(i, p, u, t, y.ProjectionNode));
    }
    return me(Ss.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? C(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, gF(p, d.visualElement, l), p, f, d.visualElement),
      ],
    });
  }
  let s = Ae(o);
  return (s[od] = i), s;
}
function xF({ layoutId: e }) {
  let t = A(vs).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function wF(e, t) {
  let n = A(Wy).strict;
}
function SF(e) {
  let { drag: t, layout: n } = io;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function Yn(e) {
  let t = V(null);
  return t.current === null && (t.current = e()), t.current;
}
function kF(
  {
    applyWillChange: e = !1,
    scrapeMotionValuesFromProps: t,
    createRenderState: n,
    onMount: r,
  },
  i,
  o,
  s,
  a
) {
  let l = { latestValues: CF(i, o, s, a ? !1 : e, t), renderState: n() };
  return r && (l.mount = (c) => r(i, c, l)), l;
}
var ul = (e) => (t, n) => {
  let r = A(Ss),
    i = A(co),
    o = () => kF(e, t, r, i, n);
  return n ? o() : Yn(o);
};
function ev(e, t, n) {
  let r = Array.isArray(t) ? t : [t];
  for (let i = 0; i < r.length; i++) {
    let o = qf(e, r[i]);
    if (o) {
      let { transitionEnd: s, transition: a, ...l } = o;
      n(l, s);
    }
  }
}
function CF(e, t, n, r, i) {
  var o;
  let s = {},
    a =
      r &&
      ((o = e.style) === null || o === void 0 ? void 0 : o.willChange) ===
        void 0,
    l = i(e, {});
  for (let g in l) s[g] = Ct(l[g]);
  let { initial: c, animate: u } = e,
    f = cl(e),
    d = Gy(e);
  t &&
    d &&
    !f &&
    e.inherit !== !1 &&
    (c === void 0 && (c = t.initial), u === void 0 && (u = t.animate));
  let p = n ? n.initial === !1 : !1;
  p = p || c === !1;
  let y = p ? u : c;
  return (
    y &&
      typeof y != "boolean" &&
      !ms(y) &&
      ev(e, y, (g, b) => {
        for (let h in g) {
          let m = g[h];
          if (Array.isArray(m)) {
            let v = p ? m.length - 1 : 0;
            m = m[v];
          }
          m !== null && (s[h] = m);
        }
        for (let h in b) s[h] = b[h];
      }),
    a &&
      u &&
      c !== !1 &&
      !ms(u) &&
      ev(e, u, (g) => {
        for (let b in g)
          if (Iy(b)) {
            s.willChange = "transform";
            return;
          }
      }),
    s
  );
}
var Xy = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  TF = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  RF = ws.length;
function Yy(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < RF; o++) {
    let s = ws[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      let c = Xy(a, jf[s]);
      if (!l) {
        i = !1;
        let u = TF[s] || s;
        r += `${u}(${c}) `;
      }
      n && (t[s] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
var EF = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function oo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    EF.has(e)
  );
}
var Ky = (e) => !oo(e);
function Qy(e) {
  e && (Ky = (t) => (t.startsWith("on") ? !oo(t) : e(t)));
}
try {
  Qy(dR().default);
} catch {}
function Zy(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Ky(i) ||
        (n === !0 && oo(i)) ||
        (!t && !oo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var Xn = new WeakMap(),
  Ga = { current: null },
  sd = { current: !1 };
function Jy() {
  if (((sd.current = !0), !!ll))
    if (F.matchMedia) {
      let e = F.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ga.current = e.matches);
      e.addListener(t), t();
    } else Ga.current = !1;
}
function FF(e, t, n) {
  for (let r in t) {
    let i = t[r],
      o = n[r];
    if (ze(i)) e.addValue(r, i);
    else if (ze(o)) e.addValue(r, Ge(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        let s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        let s = e.getStaticValue(r);
        e.addValue(r, Ge(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var PF = [...Sy, mt, vr],
  _F = (e) => PF.find(wy(e)),
  tv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  ad = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: o,
      },
      s = {}
    ) {
      (this.applyWillChange = !1),
        (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = $f),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let f = Un.now();
          this.renderScheduledAt < f &&
            ((this.renderScheduledAt = f), q.render(this.render, !1, !0));
        });
      let { latestValues: a, renderState: l } = o;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = t.initial ? { ...a } : {}),
        (this.renderState = l),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = s),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = cl(t)),
        (this.isVariantNode = Gy(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current));
      let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this
      );
      for (let f in u) {
        let d = u[f];
        a[f] !== void 0 && ze(d) && d.set(a[f], !1);
      }
    }
    mount(e) {
      (this.current = e),
        Xn.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
        sd.current || Jy(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : Ga.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      Xn.delete(this.current),
        this.projection && this.projection.unmount(),
        Tt(this.notifyUpdate),
        Tt(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = zr.has(e),
        r = t.on("change", (s) => {
          (this.latestValues[e] = s),
            this.props.onUpdate && q.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0);
        }),
        i = t.on("renderRequest", this.scheduleRender),
        o;
      F.MotionCheckAppearSync && (o = F.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          r(), i(), o && o(), t.owner && t.stop();
        });
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = "animation";
      for (e in io) {
        let t = io[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let i = this.features[e];
          i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : $e();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      (e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t);
      for (let n = 0; n < tv.length; n++) {
        let r = tv[n];
        this.propEventSubscriptions[r] &&
          (this.propEventSubscriptions[r](),
          delete this.propEventSubscriptions[r]);
        let i = "on" + r,
          o = e[i];
        o && (this.propEventSubscriptions[r] = this.on(r, o));
      }
      (this.prevMotionValues = FF(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState);
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = Ge(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      var n;
      let r =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
            n !== void 0
          ? n
          : this.readValueFromInstance(this.current, e, this.options);
      return (
        r != null &&
          (typeof r == "string" && (by(r) || yy(r))
            ? (r = parseFloat(r))
            : !_F(r) && vr.test(t) && (r = ky(e, t)),
          this.setBaseTarget(e, ze(r) ? r.get() : r)),
        ze(r) ? r.get() : r
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      var t;
      let { initial: n } = this.props,
        r;
      if (typeof n == "string" || typeof n == "object") {
        let o = qf(
          this.props,
          n,
          (t = this.presenceContext) === null || t === void 0
            ? void 0
            : t.custom
        );
        o && (r = o[e]);
      }
      if (n && r !== void 0) return r;
      let i = this.getBaseTargetFromProps(this.props, e);
      return i !== void 0 && !ze(i)
        ? i
        : this.initialValues[e] !== void 0 && r === void 0
        ? void 0
        : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new Gf()), this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  };
function OF(e) {
  if (typeof Proxy > "u") return e;
  let t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
var e0 = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = F),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let u = Xu(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          d = Dy(u.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !d) return;
        let { point: p } = u,
          { timestamp: y } = Ue;
        this.history.push({ ...p, timestamp: y });
        let { onStart: g, onMove: b } = this.handlers;
        f ||
          (g && g(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, f) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = qu(f, this.transformPagePoint)),
          q.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, f) => {
        this.end();
        let { onEnd: d, onSessionEnd: p, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let g = Xu(
          u.type === "pointercancel"
            ? this.lastMoveEventInfo
            : qu(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && d && d(u, g), p && p(u, g);
      }),
      !Vy(e))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || F);
    let o = sl(e),
      s = qu(o, this.transformPagePoint),
      { point: a } = s,
      { timestamp: l } = Ue;
    this.history = [{ ...a, timestamp: l }];
    let { onSessionStart: c } = t;
    c && c(e, Xu(s, this.history)),
      (this.removeListeners = Wn(
        Gn(this.contextWindow, "pointermove", this.handlePointerMove),
        Gn(this.contextWindow, "pointerup", this.handlePointerUp),
        Gn(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners && this.removeListeners(), Tt(this.updatePoint);
  }
};
function qu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function nv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Xu({ point: e }, t) {
  return {
    point: e,
    delta: nv(e, t0(t)),
    offset: nv(e, IF(t)),
    velocity: MF(t, 0.1),
  };
}
function IF(e) {
  return e[0];
}
function t0(e) {
  return e[e.length - 1];
}
function MF(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = t0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Pn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Hn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function LF(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Me(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Me(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function rv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function VF(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: rv(e.x, n, i), y: rv(e.y, t, r) };
}
function iv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function AF(e, t) {
  return { x: iv(e.x, t.x), y: iv(e.y, t.y) };
}
function DF(e, t) {
  let n = 0.5,
    r = jt(e),
    i = jt(t);
  return (
    i > r
      ? (n = yr(t.min, t.max - r, e.min))
      : r > i && (n = yr(e.min, e.max - i, t.min)),
    gr(0, 1, n)
  );
}
function zF(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var yf = 0.35;
function BF(e = yf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = yf),
    { x: ov(e, "left", "right"), y: ov(e, "top", "bottom") }
  );
}
function ov(e, t, n) {
  return { min: sv(e, t), max: sv(e, n) };
}
function sv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function gn(e) {
  return [e("x"), e("y")];
}
function n0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function $F({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function NF(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Yu(e) {
  return e === void 0 || e === 1;
}
function bf({ scale: e, scaleX: t, scaleY: n }) {
  return !Yu(e) || !Yu(t) || !Yu(n);
}
function yi(e) {
  return (
    bf(e) ||
    r0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function r0(e) {
  return av(e.x) || av(e.y);
}
function av(e) {
  return e && e !== "0%";
}
function qa(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function lv(e, t, n, r, i) {
  return i !== void 0 && (e = qa(e, i, r)), qa(e, n, r) + t;
}
function xf(e, t = 0, n = 1, r, i) {
  (e.min = lv(e.min, t, n, r, i)), (e.max = lv(e.max, t, n, r, i));
}
function i0(e, { x: t, y: n }) {
  xf(e.x, t.translate, t.scale, t.originPoint),
    xf(e.y, n.translate, n.scale, n.originPoint);
}
var cv = 0.999999999999,
  uv = 1.0000000000001;
function jF(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        no(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), i0(e, s)),
      r && yi(o.latestValues) && no(e, o.latestValues));
  }
  t.x < uv && t.x > cv && (t.x = 1), t.y < uv && t.y > cv && (t.y = 1);
}
function to(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function fv(e, t, n, r, i = 0.5) {
  let o = Me(e.min, e.max, i);
  xf(e, t, n, o, r);
}
function no(e, t) {
  fv(e.x, t.x, t.scaleX, t.scale, t.originX),
    fv(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function o0(e, t) {
  return n0(NF(e.getBoundingClientRect(), t));
}
function HF(e, t, n) {
  let r = o0(e, n),
    { scroll: i } = t;
  return i && (to(r.x, i.offset.x), to(r.y, i.offset.y)), r;
}
var s0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  WF = new WeakMap(),
  UF = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = $e()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(sl(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = By(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            gn((g) => {
              let b = this.getAxisMotionValue(g).get() || 0;
              if (jn.test(b)) {
                let { projection: h } = this.visualElement;
                if (h && h.layout) {
                  let m = h.layout.layoutBox[g];
                  m && (b = jt(m) * (parseFloat(b) / 100));
                }
              }
              this.originPoint[g] = b;
            }),
            p && q.postRender(() => p(c, u)),
            mf(this.visualElement, "transform");
          let { animationState: y } = this.visualElement;
          y && y.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: p,
            onDrag: y,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: g } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = GF(g)),
              this.currentDirection !== null && p && p(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, g),
            this.updateAxis("y", u.point, g),
            this.visualElement.render(),
            y && y(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          gn((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new e0(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: s0(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && q.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !La(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = LF(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && eo(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = VF(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = BF(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          gn((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = zF(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !eo(e)) return !1;
      let n = e.current;
      Zt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = HF(n, r.root, this.visualElement.getTransformPagePoint()),
        o = AF(r.layout.layoutBox, i);
      if (t) {
        let s = t($F(o));
        (this.hasMutatedConstraints = !!s), s && (o = n0(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = gn((c) => {
          if (!La(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            p = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, p);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        mf(this.visualElement, e),
        n.start(Yf(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      gn((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      gn((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      gn((t) => {
        let { drag: n } = this.getProps();
        if (!La(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - Me(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!eo(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      gn((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = DF({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        gn((o) => {
          if (!La(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(Me(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      WF.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Gn(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          eo(a) &&
            a.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        q.read(n);
      let o = mr(F, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (gn((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = yf,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function La(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function GF(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var qF = class extends Br {
    constructor(e) {
      super(e),
        (this.removeGroupControls = gt),
        (this.removeListeners = gt),
        (this.controls = new UF(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || gt);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  dv = (e) => (t, n) => {
    e && q.postRender(() => e(t, n));
  },
  XF = class extends Br {
    constructor() {
      super(...arguments), (this.removePointerDownListener = gt);
    }
    onPointerDown(e) {
      this.session = new e0(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: s0(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: dv(e),
        onStart: dv(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && q.postRender(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Gn(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  za = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function hv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var ns = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (X.test(e)) e = parseFloat(e);
        else return e;
      let n = hv(e, t.target.x),
        r = hv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  YF = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = vr.parse(e);
      if (i.length > 5) return r;
      let o = vr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = Me(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  KF = class extends xe {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      rd(QF),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (za.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                q.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        id.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function a0(e) {
  let [t, n] = nd(),
    r = A(vs);
  return C(KF, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: A(al),
    isPresent: t,
    safeToRemove: n,
  });
}
var QF = {
    borderRadius: {
      ...ns,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ns,
    borderTopRightRadius: ns,
    borderBottomLeftRadius: ns,
    borderBottomRightRadius: ns,
    boxShadow: YF,
  },
  l0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  ZF = l0.length,
  pv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  mv = (e) => typeof e == "number" || X.test(e);
function JF(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Me(0, n.opacity !== void 0 ? n.opacity : 1, eP(r))),
      (e.opacityExit = Me(t.opacity !== void 0 ? t.opacity : 1, 0, tP(r))))
    : o &&
      (e.opacity = Me(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < ZF; s++) {
    let a = `border${l0[s]}Radius`,
      l = gv(t, a),
      c = gv(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || mv(l) === mv(c)
        ? ((e[a] = Math.max(Me(pv(l), pv(c), r), 0)),
          (jn.test(c) || jn.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = Me(t.rotate || 0, n.rotate || 0, r));
}
function gv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var eP = c0(0, 0.5, Pf),
  tP = c0(0.5, 0.95, gt);
function c0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(yr(e, t, r)));
}
function vv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function mn(e, t) {
  vv(e.x, t.x), vv(e.y, t.y);
}
function yv(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function bv(e, t, n, r, i) {
  return (
    (e -= t), (e = qa(e, 1 / n, r)), i !== void 0 && (e = qa(e, 1 / i, r)), e
  );
}
function nP(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (jn.test(t) &&
      ((t = parseFloat(t)), (t = Me(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Me(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = bv(e.min, t, n, a, i)),
    (e.max = bv(e.max, t, n, a, i));
}
function xv(e, t, [n, r, i], o, s) {
  nP(e, t[n], t[r], t[i], t.scale, o, s);
}
var rP = ["x", "scaleX", "originX"],
  iP = ["y", "scaleY", "originY"];
function wv(e, t, n, r) {
  xv(e.x, t, rP, n ? n.x : void 0, r ? r.x : void 0),
    xv(e.y, t, iP, n ? n.y : void 0, r ? r.y : void 0);
}
function Sv(e) {
  return e.translate === 0 && e.scale === 1;
}
function u0(e) {
  return Sv(e.x) && Sv(e.y);
}
function kv(e, t) {
  return e.min === t.min && e.max === t.max;
}
function oP(e, t) {
  return kv(e.x, t.x) && kv(e.y, t.y);
}
function Cv(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function f0(e, t) {
  return Cv(e.x, t.x) && Cv(e.y, t.y);
}
function Tv(e) {
  return jt(e.x) / jt(e.y);
}
function Rv(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var sP = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Uf(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (el(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function aP(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: p,
      skewY: y,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      p && (r += `skewX(${p}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
function d0(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function h0(e, t, n) {
  let r = ze(e) ? e : Ge(e);
  return r.start(Yf("", r, t, n)), r.animation;
}
var bi = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ss = typeof F < "u" && F.MotionDebug !== void 0,
  Ku = ["", "X", "Y", "Z"],
  lP = { visibility: "hidden" },
  Ev = 1e3,
  cP = 0;
function Qu(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function p0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = Oy(t);
  if (F.MotionHasOptimisedAnimation(n, "transform")) {
    let { layout: i, layoutId: o } = e.options;
    F.MotionCancelOptimisedAnimation(n, "transform", q, !(i || o));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && p0(r);
}
function m0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = cP++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            ss &&
              (bi.totalNodes =
                bi.resolvedTargetDeltas =
                bi.recalculatedProjection =
                  0),
            this.nodes.forEach(dP),
            this.nodes.forEach(vP),
            this.nodes.forEach(yP),
            this.nodes.forEach(hP),
            ss && F.MotionDebug.record(bi);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new jy());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Gf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = d0(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = Hy(d, 250)),
            za.hasAnimatedSinceResize &&
              ((za.hasAnimatedSinceResize = !1), this.nodes.forEach(Pv));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let g = this.options.transition || u.getDefaultTransition() || kP,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: h } =
                  u.getProps(),
                m = !this.targetLayout || !f0(this.targetLayout, y) || p,
                v = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                v ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, v);
                let S = { ...Xf(g, "layout"), onPlay: b, onComplete: h };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || Pv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Tt(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(bP),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (F.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          p0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Fv);
        return;
      }
      this.isUpdating || this.nodes.forEach(mP),
        (this.isUpdating = !1),
        this.nodes.forEach(gP),
        this.nodes.forEach(uP),
        this.nodes.forEach(fP),
        this.clearAllSnapshots();
      let a = Un.now();
      (Ue.delta = gr(0, 1e3 / 60, a - Ue.timestamp)),
        (Ue.timestamp = a),
        (Ue.isProcessing = !0),
        Aa.update.process(Ue),
        Aa.preRender.process(Ue),
        Aa.render.process(Ue),
        (Ue.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), id.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(pP), this.sharedNodes.forEach(xP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = $e()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        let l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !u0(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || yi(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        CP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      let { visualElement: a } = this.options;
      if (!a) return $e();
      let l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(TP)
        )
      ) {
        let { scroll: u } = this.root;
        u && (to(l.x, u.offset.x), to(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      let l = $e();
      if (
        (mn(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c],
          { scroll: f, options: d } = u;
        u !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && mn(l, s), to(l.x, f.offset.x), to(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      let l = $e();
      mn(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          no(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          yi(u.latestValues) && no(l, u.latestValues);
      }
      return yi(this.latestValues) && no(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = $e();
      mn(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !yi(c.latestValues)) continue;
        bf(c.latestValues) && c.updateSnapshot();
        let u = $e(),
          f = c.measurePageBox();
        mn(u, f),
          wv(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return yi(this.latestValues) && wv(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ue.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ue.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = $e()),
              (this.relativeTargetOrigin = $e()),
              us(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              mn(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = $e()), (this.targetWithTransforms = $e())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                dF(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : mn(this.target, this.layout.layoutBox),
                i0(this.target, this.targetDelta))
              : mn(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = $e()),
                (this.relativeTargetOrigin = $e()),
                us(this.relativeTargetOrigin, this.target, p.target),
                mn(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ss && bi.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          bf(this.parent.latestValues) ||
          r0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ue.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      mn(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        p = this.treeScale.y;
      jF(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = $e()));
      let { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (yv(this.prevProjectionDelta.x, this.projectionDelta.x),
          yv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        cs(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== p ||
          !Rv(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Rv(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        ss && bi.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        let l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Ji()),
        (this.projectionDelta = Ji()),
        (this.projectionDeltaWithTransform = Ji());
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = Ji();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = $e(),
        p = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        g = p !== y,
        b = this.getStack(),
        h = !b || b.members.length <= 1,
        m = !!(g && !h && this.options.crossfade === !0 && !this.path.some(SP));
      this.animationProgress = 0;
      let v;
      (this.mixTargetDelta = (S) => {
        let k = S / 1e3;
        _v(f.x, s.x, k),
          _v(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (us(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            wP(this.relativeTarget, this.relativeTargetOrigin, d, k),
            v && oP(this.relativeTarget, v) && (this.isProjectionDirty = !1),
            v || (v = $e()),
            mn(v, this.relativeTarget)),
          g &&
            ((this.animationValues = u), JF(u, c, this.latestValues, k, m, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Tt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = q.update(() => {
          (za.hasAnimatedSinceResize = !0),
            (this.currentAnimation = h0(0, Ev, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Ev),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          g0(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || $e();
          let f = jt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = jt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        mn(a, l),
          no(a, u),
          cs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new sP()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && Qu("z", s, c, this.animationValues);
      for (let u = 0; u < Ku.length; u++)
        Qu(`rotate${Ku[u]}`, s, c, this.animationValues),
          Qu(`skew${Ku[u]}`, s, c, this.animationValues);
      s.render();
      for (let u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return lP;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ct(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let g = {};
        return (
          this.options.layoutId &&
            ((g.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (g.pointerEvents = Ct(s?.pointerEvents) || "")),
          this.hasProjected &&
            !yi(this.latestValues) &&
            ((g.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          g
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = aP(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: p, y } = this.projectionDelta;
      (c.transformOrigin = `${p.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let g in Ua) {
        if (d[g] === void 0) continue;
        let { correct: b, applyTo: h } = Ua[g],
          m = c.transform === "none" ? d[g] : b(d[g], f);
        if (h) {
          let v = h.length;
          for (let S = 0; S < v; S++) c[h[S]] = m;
        } else c[g] = m;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? Ct(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Fv),
        this.root.sharedNodes.clear();
    }
  };
}
function uP(e) {
  e.updateLayout();
}
function fP(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? gn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = jt(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : g0(o, n.layoutBox, r) &&
        gn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = jt(r[f]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    let a = Ji();
    cs(a, r, n.layoutBox);
    let l = Ji();
    s ? cs(l, e.applyTransform(i, !0), n.measuredBox) : cs(l, r, n.layoutBox);
    let c = !u0(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: p } = f;
        if (d && p) {
          let y = $e();
          us(y, n.layoutBox, d.layoutBox);
          let g = $e();
          us(g, r, p.layoutBox),
            f0(y, g) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function dP(e) {
  ss && bi.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function hP(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function pP(e) {
  e.clearSnapshot();
}
function Fv(e) {
  e.clearMeasurements();
}
function mP(e) {
  e.isLayoutDirty = !1;
}
function gP(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Pv(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function vP(e) {
  e.resolveTargetDelta();
}
function yP(e) {
  e.calcProjection();
}
function bP(e) {
  e.resetSkewAndRotation();
}
function xP(e) {
  e.removeLeadSnapshot();
}
function _v(e, t, n) {
  (e.translate = Me(t.translate, 0, n)),
    (e.scale = Me(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Ov(e, t, n, r) {
  (e.min = Me(t.min, n.min, r)), (e.max = Me(t.max, n.max, r));
}
function wP(e, t, n, r) {
  Ov(e.x, t.x, n.x, r), Ov(e.y, t.y, n.y, r);
}
function SP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var kP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Iv = (e) =>
    typeof Re < "u" && Re.userAgent && Re.userAgent.toLowerCase().includes(e),
  Mv = Iv("applewebkit/") && !Iv("chrome/") ? Math.round : gt;
function Lv(e) {
  (e.min = Mv(e.min)), (e.max = Mv(e.max));
}
function CP(e) {
  Lv(e.x), Lv(e.y);
}
function g0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !fF(Tv(t), Tv(n), 0.2))
  );
}
function TP(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
var RP = m0({
    attachResizeListener: (e, t) => mr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Si = { current: void 0 },
  v0 = m0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Si.current) {
        let e = new RP({});
        e.mount(F), e.setOptions({ layoutScroll: !0 }), (Si.current = e);
      }
      return Si.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => F.getComputedStyle(e).position === "fixed",
  }),
  y0 = {
    pan: { Feature: XF },
    drag: { Feature: qF, ProjectionNode: v0, MeasureLayout: a0 },
  };
function Vv(e, t) {
  let n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || td()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      let l = a[r];
      l && q.postRender(() => l(o, s));
    };
  return Gn(e.current, n, i, { passive: !e.getProps()[r] });
}
var EP = class extends Br {
    mount() {
      this.unmount = Wn(Vv(this.node, !0), Vv(this.node, !1));
    }
    unmount() {}
  },
  FP = class extends Br {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Wn(
        mr(this.node.current, "focus", () => this.onFocus()),
        mr(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  b0 = (e, t) => (t ? (e === t ? !0 : b0(e, t.parentElement)) : !1);
function Zu(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, sl(n));
}
var PP = class extends Br {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = gt),
        (this.removeEndListeners = gt),
        (this.removeAccessibleListeners = gt),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Gn(
              F,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !b0(this.node.current, s.target) ? c : l;
                f && q.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = Gn(F, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = Wn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  Zu("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && q.postRender(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = mr(this.node.current, "keyup", o)),
                Zu("down", (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = mr(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && Zu("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = mr(this.node.current, "blur", n);
          this.removeAccessibleListeners = Wn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && q.postRender(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !td()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && q.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Gn(
          e.globalTapTarget ? F : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = mr(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Wn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  wf = new WeakMap(),
  Ju = new WeakMap(),
  _P = (e) => {
    let t = wf.get(e.target);
    t && t(e);
  },
  OP = (e) => {
    e.forEach(_P);
  };
function IP({ root: e, ...t }) {
  let n = e || document;
  Ju.has(n) || Ju.set(n, {});
  let r = Ju.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(OP, { root: e, ...t })), r[i];
}
function MP(e, t, n) {
  let r = IP(t);
  return (
    wf.set(e, n),
    r.observe(e),
    () => {
      wf.delete(e), r.unobserve(e);
    }
  );
}
var LP = { some: 0, all: 1 },
  VP = class extends Br {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : LP[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return MP(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(AP(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function AP({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var x0 = {
    inView: { Feature: VP },
    tap: { Feature: PP },
    focus: { Feature: FP },
    hover: { Feature: EP },
  },
  w0 = { layout: { ProjectionNode: v0, MeasureLayout: a0 } },
  DP = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
function ld(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(DP.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function S0(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var k0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function C0(e, t, n, r) {
  S0(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(k0.has(i) ? i : nl(i), t.attrs[i]);
}
function T0(e, { layout: t, layoutId: n }) {
  return (
    zr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ua[e] || e === "opacity"))
  );
}
function cd(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (ze(i[s]) ||
      (t.style && ze(t.style[s])) ||
      T0(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return (
    n && i && typeof i.willChange == "string" && (n.applyWillChange = !1), o
  );
}
function R0(e, t, n) {
  let r = cd(e, t, n);
  for (let i in e)
    if (ze(e[i]) || ze(t[i])) {
      let o =
        ws.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var ud = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  E0 = () => ({ ...ud(), attrs: {} });
function fd(e, t, n) {
  let { style: r, vars: i, transformOrigin: o } = e,
    s = !1,
    a = !1;
  for (let l in t) {
    let c = t[l];
    if (zr.has(l)) {
      s = !0;
      continue;
    } else if (uy(l)) {
      i[l] = c;
      continue;
    } else {
      let u = Xy(c, jf[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = Yy(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    let { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = o;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
function Av(e, t, n) {
  return typeof e == "string" ? e : X.transform(t + n * e);
}
function zP(e, t, n) {
  let r = Av(t, e.x, e.width),
    i = Av(n, e.y, e.height);
  return `${r} ${i}`;
}
var BP = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  $P = { offset: "strokeDashoffset", array: "strokeDasharray" };
function NP(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? BP : $P;
  e[o.offset] = X.transform(-r);
  let s = X.transform(t),
    a = X.transform(n);
  e[o.array] = `${s} ${a}`;
}
function dd(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f
) {
  if ((fd(e, c, f), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: d, style: p, dimensions: y } = e;
  d.transform && (y && (p.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || p.transform) &&
      (p.transformOrigin = zP(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && NP(d, s, a, l, !1);
}
var hd = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  jP = {
    useVisualState: ul({
      scrapeMotionValuesFromProps: R0,
      createRenderState: E0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        q.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          q.render(() => {
            dd(n, r, hd(t.tagName), e.transformTemplate), C0(t, n);
          });
      },
    }),
  },
  HP = {
    useVisualState: ul({
      applyWillChange: !0,
      scrapeMotionValuesFromProps: cd,
      createRenderState: ud,
    }),
  };
function F0(e, t, n) {
  for (let r in t) !ze(t[r]) && !T0(r, n) && (e[r] = t[r]);
}
function WP({ transformTemplate: e }, t) {
  return re(() => {
    let n = ud();
    return fd(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function UP(e, t) {
  let n = e.style || {},
    r = {};
  return F0(r, n, e), Object.assign(r, WP(e, t)), r;
}
function GP(e, t) {
  let n = {},
    r = UP(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function qP(e, t, n, r) {
  let i = re(() => {
    let o = E0();
    return (
      dd(o, t, hd(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    F0(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function XP(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (ld(n) ? qP : GP)(r, o, s, n),
      c = Zy(r, typeof n == "string", e),
      u = n !== pn ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = re(() => (ze(f) ? f.get() : f), [f]);
    return Ki(n, { ...u, children: d });
  };
}
function YP(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    let s = {
      ...(ld(r) ? jP : HP),
      preloadedFeatures: e,
      useRender: XP(i),
      createVisualElement: t,
      Component: r,
    };
    return qy(s);
  };
}
var P0 = class extends ad {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Cy);
  }
  sortInstanceNodePosition(e, t) {
    return e.compareDocumentPosition(t) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(e, t) {
    return e.style ? e.style[t] : void 0;
  }
  removeValueFromRenderState(e, { vars: t, style: n }) {
    delete t[e], delete n[e];
  }
};
function KP(e) {
  return F.getComputedStyle(e);
}
var _0 = class extends P0 {
    constructor() {
      super(...arguments),
        (this.type = "html"),
        (this.applyWillChange = !0),
        (this.renderInstance = S0);
    }
    readValueFromInstance(e, t) {
      if (zr.has(t)) {
        let n = Hf(t);
        return (n && n.default) || 0;
      } else {
        let n = KP(e),
          r = (uy(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return o0(e, t);
    }
    build(e, t, n) {
      fd(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return cd(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      ze(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
  },
  O0 = class extends P0 {
    constructor() {
      super(...arguments),
        (this.type = "svg"),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = $e);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (zr.has(t)) {
        let n = Hf(t);
        return (n && n.default) || 0;
      }
      return (t = k0.has(t) ? t : nl(t)), e.getAttribute(t);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return R0(e, t, n);
    }
    build(e, t, n) {
      dd(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      C0(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = hd(e.tagName)), super.mount(e);
    }
  },
  pd = (e, t) => (ld(e) ? new O0(t) : new _0(t, { allowProjection: e !== pn })),
  QP = YP({ ...ol, ...x0, ...y0, ...w0 }, pd),
  Jt = OF(QP);
var ZP = class extends xe {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function JP({ children: e, isPresent: t }) {
  let n = gi(),
    r = V(null),
    i = V({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = A(qn);
  return (
    Qe(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    C(ZP, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: pr(e, { ref: r }),
    })
  );
}
var e_ = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = Yn(t_),
    l = gi(),
    c = G(
      (f) => {
        a.set(f, !0);
        for (let d of a.values()) if (!d) return;
        r && r();
      },
      [a, r]
    ),
    u = re(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      o ? [Math.random(), c] : [n, c]
    );
  return (
    re(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    B(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = C(JP, { isPresent: n, children: e })),
    C(co.Provider, { value: u, children: e })
  );
};
function t_() {
  return new Map();
}
var Va = (e) => e.key || "";
function Dv(e) {
  let t = [];
  return (
    hn.forEach(e, (n) => {
      Lt(n) && t.push(n);
    }),
    t
  );
}
var md = ({
  children: e,
  exitBeforeEnter: t,
  custom: n,
  initial: r = !0,
  onExitComplete: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  Zt(!t, "Replace exitBeforeEnter with mode='wait'");
  let a = re(() => Dv(e), [e]),
    l = a.map(Va),
    c = V(!0),
    u = V(a),
    f = Yn(() => new Map()),
    [d, p] = Fe(a),
    [y, g] = Fe(a);
  $r(() => {
    (c.current = !1), (u.current = a);
    for (let m = 0; m < y.length; m++) {
      let v = Va(y[m]);
      l.includes(v) ? f.delete(v) : f.get(v) !== !0 && f.set(v, !1);
    }
  }, [y, l.length, l.join("-")]);
  let b = [];
  if (a !== d) {
    let m = [...a];
    for (let v = 0; v < y.length; v++) {
      let S = y[v],
        k = Va(S);
      l.includes(k) || (m.splice(v, 0, S), b.push(S));
    }
    s === "wait" && b.length && (m = b), g(Dv(m)), p(a);
    return;
  }
  let { forceRender: h } = A(vs);
  return C(ct, {
    children: y.map((m) => {
      let v = Va(m),
        S = a === y || l.includes(v),
        k = () => {
          if (f.has(v)) f.set(v, !0);
          else return;
          let w = !0;
          f.forEach((T) => {
            T || (w = !1);
          }),
            w && (h?.(), g(u.current), i && i());
        };
      return C(
        e_,
        {
          isPresent: S,
          initial: !c.current || r ? void 0 : !1,
          custom: S ? void 0 : n,
          presenceAffectsLayout: o,
          mode: s,
          onExitComplete: S ? void 0 : k,
          children: m,
        },
        v
      );
    }),
  });
};
function I0({ children: e, isValidProp: t, ...n }) {
  t && Qy(t), (n = { ...A(qn), ...n }), (n.isStatic = Yn(() => n.isStatic));
  let r = re(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return C(qn.Provider, { value: r, children: e });
}
var M0 = ge(null);
function n_() {
  let e = V(!1);
  return (
    $r(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function gd() {
  let e = n_(),
    [t, n] = Fe(0),
    r = G(() => {
      e.current && n(t + 1);
    }, [t]);
  return [G(() => q.postRender(r), [r]), t];
}
var r_ = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function zv() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(r_);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var L0 = (e) => e === !0,
  i_ = (e) => L0(e === !0) || e === "id",
  V0 = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = A(vs),
      i = A(M0),
      [o, s] = gd(),
      a = V(null),
      l = r.id || i;
    a.current === null &&
      (i_(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (L0(n) && r.group) || zv() }));
    let c = re(() => ({ ...a.current, forceRender: o }), [s]);
    return C(vs.Provider, { value: c, children: e });
  },
  o_ = { renderer: pd, ...ol },
  A0 = { renderer: pd, ...ol, ...x0 },
  s_ = { ...A0, ...y0, ...w0 };
function Kn(e) {
  let t = Yn(() => Ge(e)),
    { isStatic: n } = A(qn);
  if (n) {
    let [, r] = Fe(e);
    B(() => t.on("change", r), []);
  }
  return t;
}
function D0(e, t) {
  let n = Kn(t()),
    r = () => n.set(t());
  return (
    r(),
    $r(() => {
      let i = () => q.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), Tt(r);
      };
    }),
    n
  );
}
var a_ = (e) => e && typeof e == "object" && e.mix,
  l_ = (e) => (a_(e) ? e.mix : void 0);
function ks(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = xs(i, o, { mixer: l_(o[0]), ...s });
  return t ? a(r) : a;
}
function c_(e) {
  (ls.current = []), e();
  let t = D0(ls.current, e);
  return (ls.current = void 0), t;
}
function Vt(e, t, n, r) {
  if (typeof e == "function") return c_(e);
  let i = typeof t == "function" ? t : ks(t, n, r);
  return Array.isArray(e) ? Bv(e, i) : Bv([e], ([o]) => i(o));
}
function Bv(e, t) {
  let n = Yn(() => []);
  return D0(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function $v(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function vd(e, t = {}) {
  let { isStatic: n } = A(qn),
    r = V(null),
    i = Kn(ze(e) ? $v(e.get()) : e),
    o = V(i.get()),
    s = V(() => {}),
    a = () => {
      let c = r.current;
      c && c.time === 0 && c.sample(Ue.delta),
        l(),
        (r.current = Nf({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    Qe(
      () =>
        i.attach(
          (c, u) =>
            n ? u(c) : ((o.current = c), (s.current = u), q.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    $r(() => {
      if (ze(e)) return e.on("change", (c) => i.set($v(c)));
    }, [i]),
    i
  );
}
function u_(e, t, n) {
  Qe(() => e.on(t, n), [e, t, n]);
}
function yd(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (Zt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var Ba = new WeakMap(),
  Dr;
function f_(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function d_({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ba.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return f_(e, n);
        },
      });
    });
}
function h_(e) {
  e.forEach(d_);
}
function p_() {
  typeof ResizeObserver > "u" || (Dr = new ResizeObserver(h_));
}
function m_(e, t) {
  Dr || p_();
  let n = yd(e);
  return (
    n.forEach((r) => {
      let i = Ba.get(r);
      i || ((i = new Set()), Ba.set(r, i)), i.add(t), Dr?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = Ba.get(r);
        i?.delete(t), i?.size || Dr?.unobserve(r);
      });
    }
  );
}
var $a = new Set(),
  fs;
function g_() {
  (fs = () => {
    let e = { width: F.innerWidth, height: F.innerHeight },
      t = { target: F, size: e, contentSize: e };
    $a.forEach((n) => n(t));
  }),
    F.addEventListener("resize", fs);
}
function v_(e) {
  return (
    $a.add(e),
    fs || g_(),
    () => {
      $a.delete(e), !$a.size && fs && (fs = void 0);
    }
  );
}
function y_(e, t) {
  return typeof e == "function" ? v_(e) : m_(e, t);
}
var b_ = 50,
  Nv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  x_ = () => ({ time: 0, x: Nv(), y: Nv() }),
  w_ = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function jv(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = w_[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = yr(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > b_ ? 0 : Mf(i.current - a, c);
}
function S_(e, t, n) {
  jv(e, "x", t, n), jv(e, "y", t, n), (t.time = n);
}
function k_(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === "svg" && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
var C_ = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  Sf = { start: 0, center: 0.5, end: 1 };
function Hv(e, t, n = 0) {
  let r = 0;
  if ((e in Sf && (e = Sf[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
var T_ = [0, 0];
function R_(e, t, n, r) {
  let i = Array.isArray(e) ? e : T_,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, Sf[e] ? e : "0"])),
    (o = Hv(i[0], n, r)),
    (s = Hv(i[1], t)),
    o - s
  );
}
var E_ = { x: 0, y: 0 };
function F_(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function P_(e, t, n) {
  let { offset: r = C_.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? k_(i, e) : E_,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : F_(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let p = R_(r[d], c[s], l[s], a[o]);
    !u && p !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = p);
  }
  u &&
    ((t[o].interpolate = xs(t[o].offset, Bf(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function __(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function O_(e, t, n, r = {}) {
  return {
    measure: () => __(e, r.target, n),
    update: (i) => {
      S_(e, n, i), (r.offset || r.target) && P_(e, n, r);
    },
    notify: () => t(n),
  };
}
var rs = new WeakMap(),
  Wv = new WeakMap(),
  ef = new WeakMap(),
  Uv = (e) => (e === document.documentElement ? F : e);
function Nr(e, { container: t = document.documentElement, ...n } = {}) {
  let r = ef.get(t);
  r || ((r = new Set()), ef.set(t, r));
  let i = x_(),
    o = O_(t, e, i, n);
  if ((r.add(o), !rs.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Ue.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        q.read(a, !1, !0), q.read(l, !1, !0), q.update(c, !1, !0);
      };
    rs.set(t, u);
    let f = Uv(t);
    F.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && Wv.set(t, y_(t, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  let s = rs.get(t);
  return (
    q.read(s, !1, !0),
    () => {
      var a;
      Tt(s);
      let l = ef.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = rs.get(t);
      rs.delete(t),
        c &&
          (Uv(t).removeEventListener("scroll", c),
          (a = Wv.get(t)) === null || a === void 0 || a(),
          F.removeEventListener("resize", c));
    }
  );
}
function z0(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      n !== s && e(s), (n = s);
    };
  return q.update(r, !0), () => Tt(r);
}
function I_({ source: e, container: t, axis: n = "y" }) {
  e && (t = e);
  let r = { value: 0 },
    i = Nr(
      (o) => {
        r.value = o[n].progress * 100;
      },
      { container: t, axis: n }
    );
  return { currentTime: r, cancel: i };
}
var tf = new Map();
function B0({
  source: e,
  container: t = document.documentElement,
  axis: n = "y",
} = {}) {
  e && (t = e), tf.has(t) || tf.set(t, {});
  let r = tf.get(t);
  return (
    r[n] ||
      (r[n] = Py()
        ? new ScrollTimeline({ source: t, axis: n })
        : I_({ source: t, axis: n })),
    r[n]
  );
}
function M_(e) {
  return e.length === 2;
}
function $0(e) {
  return e && (e.target || e.offset);
}
function L_(e, t) {
  return M_(e) || $0(t)
    ? Nr((n) => {
        e(n[t.axis].progress, n);
      }, t)
    : z0(e, B0(t));
}
function V_(e, t) {
  if ($0(t))
    return (
      e.pause(),
      Nr((n) => {
        e.time = e.duration * n[t.axis].progress;
      }, t)
    );
  {
    let n = B0(t);
    return e.attachTimeline(
      n,
      (r) => (
        r.pause(),
        z0((i) => {
          r.time = r.duration * i;
        }, n)
      )
    );
  }
}
function N0(e, { axis: t = "y", ...n } = {}) {
  let r = { axis: t, ...n };
  return typeof e == "function" ? L_(e, r) : V_(e, r);
}
function Gv(e, t) {
  ao(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var A_ = () => ({
  scrollX: Ge(0),
  scrollY: Ge(0),
  scrollXProgress: Ge(0),
  scrollYProgress: Ge(0),
});
function j0({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = Yn(A_);
  return (
    (n ? $r : B)(
      () => (
        Gv("target", t),
        Gv("container", e),
        N0(
          (s, { x: a, y: l }) => {
            i.scrollX.set(a.current),
              i.scrollXProgress.set(a.progress),
              i.scrollY.set(l.current),
              i.scrollYProgress.set(l.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function D_(e) {
  let t = V(0),
    { isStatic: n } = A(qn);
  B(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      t.current || (t.current = i), e(i - t.current, o);
    };
    return q.update(r, !0), () => Tt(r);
  }, [e]);
}
function H0() {
  !sd.current && Jy();
  let [e] = Fe(Ga.current);
  return e;
}
function ki() {
  let e = H0(),
    { reducedMotion: t } = A(qn);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function z_(e) {
  e.values.forEach((t) => t.stop());
}
function kf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && Kf(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          kf(o, t);
        });
  });
}
function B_(e, t) {
  if (Array.isArray(t)) return kf(e, t);
  if (typeof t == "string") return kf(e, [t]);
  Kf(e, t);
}
function W0() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Zt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(Zf(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Zt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            B_(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          z_(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var U0 = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function $_(e, t = 100, n) {
  let r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(vy(r), uf);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: Hn(i),
  };
}
function bd(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function G0(e, t, n, r) {
  return typeof e == "string" && bd(t)
    ? yd(e, n, r)
    : e instanceof NodeList
    ? Array.from(e)
    : Array.isArray(e)
    ? e
    : [e];
}
function qv(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function N_(e, t) {
  return dy(e) ? e[U0(0, e.length, t)] : e;
}
function j_(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (el(e, i), r--);
  }
}
function H_(e, t, n, r, i, o) {
  j_(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: Me(i, o, r[s]), easing: N_(n, s) });
}
function W_(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var U_ = "easeInOut";
function G_(e, { defaultTransition: t = {}, ...n } = {}, r, i) {
  let o = t.duration || 0.3,
    s = new Map(),
    a = new Map(),
    l = {},
    c = new Map(),
    u = 0,
    f = 0,
    d = 0;
  for (let p = 0; p < e.length; p++) {
    let y = e[p];
    if (typeof y == "string") {
      c.set(y, f);
      continue;
    } else if (!Array.isArray(y)) {
      c.set(y.name, qv(f, y.at, u, c));
      continue;
    }
    let [g, b, h = {}] = y;
    h.at !== void 0 && (f = qv(f, h.at, u, c));
    let m = 0,
      v = (S, k, w, T = 0, R = 0) => {
        let O = q_(S),
          { delay: I = 0, times: N = Bf(O), type: z = "keyframes", ...j } = k,
          { ease: Y = t.ease || "easeOut", duration: H } = k,
          le = typeof I == "function" ? I(T, R) : I,
          ne = O.length,
          fe = Qa(z) ? z : i?.[z];
        if (ne <= 2 && fe) {
          let Se = 100;
          if (ne === 2 && K_(O)) {
            let Oe = O[1] - O[0];
            Se = Math.abs(Oe);
          }
          let he = { ...j };
          H !== void 0 && (he.duration = Pn(H));
          let J = $_(he, Se, fe);
          (Y = J.ease), (H = J.duration);
        }
        H ?? (H = o);
        let Q = f + le,
          se = Q + H;
        N.length === 1 && N[0] === 0 && (N[1] = 1);
        let we = N.length - O.length;
        we > 0 && hy(N, we),
          O.length === 1 && O.unshift(null),
          H_(w, O, Y, N, Q, se),
          (m = Math.max(le + H, m)),
          (d = Math.max(se, d));
      };
    if (ze(g)) {
      let S = Xv(g, a);
      v(b, h, Yv("default", S));
    } else {
      let S = G0(g, b, r, l),
        k = S.length;
      for (let w = 0; w < k; w++) {
        (b = b), (h = h);
        let T = S[w],
          R = Xv(T, a);
        for (let O in b) v(b[O], X_(h, O), Yv(O, R), w, k);
      }
    }
    (u = f), (f += m);
  }
  return (
    a.forEach((p, y) => {
      for (let g in p) {
        let b = p[g];
        b.sort(W_);
        let h = [],
          m = [],
          v = [];
        for (let k = 0; k < b.length; k++) {
          let { at: w, value: T, easing: R } = b[k];
          h.push(T), m.push(yr(0, d, w)), v.push(R || "easeOut");
        }
        m[0] !== 0 && (m.unshift(0), h.unshift(h[0]), v.unshift(U_)),
          m[m.length - 1] !== 1 && (m.push(1), h.push(null)),
          s.has(y) || s.set(y, { keyframes: {}, transition: {} });
        let S = s.get(y);
        (S.keyframes[g] = h),
          (S.transition[g] = { ...t, duration: d, ease: v, times: m, ...n });
      }
    }),
    s
  );
}
function Xv(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Yv(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function q_(e) {
  return Array.isArray(e) ? e : [e];
}
function X_(e, t) {
  return e && e[t] ? { ...e, ...e[t] } : { ...e };
}
var Y_ = (e) => typeof e == "number",
  K_ = (e) => e.every(Y_);
function Q_(e, t) {
  return e in t;
}
var Z_ = class extends ad {
  constructor() {
    super(...arguments), (this.type = "object");
  }
  readValueFromInstance(e, t) {
    if (Q_(t, e)) {
      let n = e[t];
      if (typeof n == "string" || typeof n == "number") return n;
    }
  }
  getBaseTargetFromProps() {}
  removeValueFromRenderState(e, t) {
    delete t.output[e];
  }
  measureInstanceViewportBox() {
    return $e();
  }
  build(e, t) {
    Object.assign(e.output, t);
  }
  renderInstance(e, { output: t }) {
    Object.assign(e, t);
  }
  sortInstanceNodePosition() {
    return 0;
  }
};
function J_(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = d0(e) ? new O0(t) : new _0(t);
  n.mount(e), Xn.set(e, n);
}
function eO(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: { renderState: { output: {} }, latestValues: {} },
    },
    n = new Z_(t);
  n.mount(e), Xn.set(e, n);
}
function tO(e, t) {
  return ze(e) || typeof e == "number" || (typeof e == "string" && !bd(t));
}
function q0(e, t, n, r) {
  let i = [];
  if (tO(e, t)) i.push(h0(e, (bd(t) && t.default) || t, n && (n.default || n)));
  else {
    let o = G0(e, t, r),
      s = o.length;
    Zt(!!s, "No valid elements provided.");
    for (let a = 0; a < s; a++) {
      let l = o[a],
        c = l instanceof Element ? J_ : eO;
      Xn.has(l) || c(l);
      let u = Xn.get(l),
        f = { ...n };
      "delay" in f && typeof f.delay == "function" && (f.delay = f.delay(a, s)),
        i.push(...Qf(u, { ...t, transition: f }, {}));
    }
  }
  return i;
}
function nO(e, t, n) {
  let r = [];
  return (
    G_(e, t, n, { spring: bs }).forEach(
      ({ keyframes: o, transition: s }, a) => {
        r.push(...q0(a, o, s));
      }
    ),
    r
  );
}
function rO(e) {
  return Array.isArray(e) && Array.isArray(e[0]);
}
function X0(e) {
  function t(n, r, i) {
    let o = [];
    rO(n) ? (o = nO(n, r, e)) : (o = q0(n, r, i, e));
    let s = new _y(o);
    return e && e.animations.push(s), s;
  }
  return t;
}
var Qn = X0();
function Y0() {
  let e = Yn(W0);
  return $r(e.mount, []), e;
}
var K0 = Y0;
var iO = { some: 0, all: 1 };
function fl(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  let o = yd(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : iO[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function oO(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = Fe(!1);
  return (
    B(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return fl(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function dl(e) {
  return e !== null && typeof e == "object" && od in e;
}
function xd(e) {
  if (dl(e)) return e[od];
}
function wd() {
  return sO;
}
function sO(e) {
  Si.current &&
    ((Si.current.isUpdating = !1), Si.current.blockUpdate(), e && e());
}
function Q0() {
  let [e, t] = gd(),
    n = wd(),
    r = V();
  return (
    B(() => {
      q.postRender(() =>
        q.postRender(() => {
          t === r.current && (ja.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (ja.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function Z0() {
  return G(() => {
    let t = Si.current;
    t && t.resetTree();
  }, []);
}
var Kv = () => ({});
var aN = ul({ scrapeMotionValuesFromProps: Kv, createRenderState: Kv });
var J0 = {};
pg(J0, { Group: () => cO, Item: () => hO });
var eb = ge(null);
function aO(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = Me(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? AE(e, i, i + o)
    : e;
}
function lO(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  let a = Yn(() => Jt[t]),
    l = [],
    c = V(!1);
  Zt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let p = l.findIndex((y) => f === y.value);
      p !== -1 ? (l[p].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(fO);
    },
    updateOrder: (f, d, p) => {
      if (c.current) return;
      let y = aO(l, f, d, p);
      l !== y &&
        ((c.current = !0), r(y.map(uO).filter((g) => i.indexOf(g) !== -1)));
    },
  };
  return (
    B(() => {
      c.current = !1;
    }),
    C(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: C(eb.Provider, { value: u, children: e }),
    })
  );
}
var cO = Ae(lO);
function uO(e) {
  return e.value;
}
function fO(e, t) {
  return e.layout.min - t.layout.min;
}
function Qv(e, t = 0) {
  return ze(e) ? e : Kn(t);
}
function dO(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = Yn(() => Jt[r]),
    c = A(eb),
    u = { x: Qv(t.x), y: Qv(t.y) },
    f = Vt([u.x, u.y], ([g, b]) => (g || b ? 1 : "unset"));
  Zt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: p, updateOrder: y } = c;
  return C(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (g, b) => {
      let { velocity: h } = b;
      h[d] && y(n, u[d].get(), h[d]), i && i(g, b);
    },
    onLayoutMeasure: (g) => p(n, g),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var hO = Ae(dO);
function pO(e, t) {
  if (e === "first") return 0;
  {
    let n = t - 1;
    return e === "last" ? n : n / 2;
  }
}
function Sd(e = 0.1, { startDelay: t = 0, from: n = 0, ease: r } = {}) {
  return (i, o) => {
    let s = typeof n == "number" ? n : pO(n, o),
      a = Math.abs(s - i),
      l = e * a;
    if (r) {
      let c = o * e;
      l = af(r)(l / c) * c;
    }
    return t + l;
  };
}
var mO = is.reduce((e, t) => ((e[t] = (n) => Tt(n)), e), {});
var K2 = {};
Au(K2, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => z2,
  createPortal: () => B2,
  createRoot: () => $2,
  default: () => vS,
  findDOMNode: () => N2,
  flushSync: () => j2,
  hydrate: () => H2,
  hydrateRoot: () => W2,
  render: () => U2,
  unmountComponentAtNode: () => G2,
  unstable_batchedUpdates: () => q2,
  unstable_renderSubtreeIntoContainer: () => X2,
  version: () => Y2,
});
var yl = {};
Au(yl, {
  default: () => Z,
  unstable_IdlePriority: () => yO,
  unstable_ImmediatePriority: () => bO,
  unstable_LowPriority: () => xO,
  unstable_NormalPriority: () => wO,
  unstable_Profiling: () => SO,
  unstable_UserBlockingPriority: () => kO,
  unstable_cancelCallback: () => CO,
  unstable_continueExecution: () => TO,
  unstable_forceFrameRate: () => RO,
  unstable_getCurrentPriorityLevel: () => EO,
  unstable_getFirstCallbackNode: () => FO,
  unstable_next: () => PO,
  unstable_now: () => vO,
  unstable_pauseExecution: () => _O,
  unstable_requestPaint: () => OO,
  unstable_runWithPriority: () => IO,
  unstable_scheduleCallback: () => MO,
  unstable_shouldYield: () => LO,
  unstable_wrapCallback: () => VO,
});
var Z = {};
function Rd(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < hl(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function _n(e) {
  return e.length === 0 ? null : e[0];
}
function ml(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > hl(a, n))
        l < i && 0 > hl(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > hl(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function hl(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((tb = performance),
    (Z.unstable_now = function () {
      return tb.now();
    }))
  : ((kd = Date),
    (nb = kd.now()),
    (Z.unstable_now = function () {
      return kd.now() - nb;
    }));
var tb,
  kd,
  nb,
  Zn = [],
  jr = [],
  gO = 1,
  vn = null,
  Rt = 3,
  gl = !1,
  Ci = !1,
  Ts = !1,
  ob = typeof setTimeout == "function" ? setTimeout : null,
  sb = typeof clearTimeout == "function" ? clearTimeout : null,
  rb = typeof setImmediate < "u" ? setImmediate : null;
typeof Re < "u" &&
  Re.scheduling !== void 0 &&
  Re.scheduling.isInputPending !== void 0 &&
  Re.scheduling.isInputPending.bind(Re.scheduling);
function Ed(e) {
  for (var t = _n(jr); t !== null; ) {
    if (t.callback === null) ml(jr);
    else {
      if (!(t.startTime <= e)) break;
      ml(jr), (t.sortIndex = t.expirationTime), Rd(Zn, t);
    }
    t = _n(jr);
  }
}
function Fd(e) {
  if (((Ts = !1), Ed(e), !Ci))
    if (_n(Zn) !== null) (Ci = !0), _d(Pd);
    else {
      var t = _n(jr);
      t !== null && Od(Fd, t.startTime - e);
    }
}
function Pd(e, t) {
  (Ci = !1), Ts && ((Ts = !1), sb(Rs), (Rs = -1)), (gl = !0);
  var n = Rt;
  try {
    for (
      Ed(t), vn = _n(Zn);
      vn !== null && (!(vn.expirationTime > t) || (e && !cb()));

    ) {
      var r = vn.callback;
      if (typeof r == "function") {
        (vn.callback = null), (Rt = vn.priorityLevel);
        var i = r(vn.expirationTime <= t);
        (t = Z.unstable_now()),
          typeof i == "function" ? (vn.callback = i) : vn === _n(Zn) && ml(Zn),
          Ed(t);
      } else ml(Zn);
      vn = _n(Zn);
    }
    if (vn !== null) var o = !0;
    else {
      var s = _n(jr);
      s !== null && Od(Fd, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (vn = null), (Rt = n), (gl = !1);
  }
}
var vl = !1,
  pl = null,
  Rs = -1,
  ab = 5,
  lb = -1;
function cb() {
  return !(Z.unstable_now() - lb < ab);
}
function Cd() {
  if (pl !== null) {
    var e = Z.unstable_now();
    lb = e;
    var t = !0;
    try {
      t = pl(!0, e);
    } finally {
      t ? Cs() : ((vl = !1), (pl = null));
    }
  } else vl = !1;
}
var Cs;
typeof rb == "function"
  ? (Cs = function () {
      rb(Cd);
    })
  : typeof MessageChannel < "u"
  ? ((Td = new MessageChannel()),
    (ib = Td.port2),
    (Td.port1.onmessage = Cd),
    (Cs = function () {
      ib.postMessage(null);
    }))
  : (Cs = function () {
      ob(Cd, 0);
    });
var Td, ib;
function _d(e) {
  (pl = e), vl || ((vl = !0), Cs());
}
function Od(e, t) {
  Rs = ob(function () {
    e(Z.unstable_now());
  }, t);
}
Z.unstable_IdlePriority = 5;
Z.unstable_ImmediatePriority = 1;
Z.unstable_LowPriority = 4;
Z.unstable_NormalPriority = 3;
Z.unstable_Profiling = null;
Z.unstable_UserBlockingPriority = 2;
Z.unstable_cancelCallback = function (e) {
  e.callback = null;
};
Z.unstable_continueExecution = function () {
  Ci || gl || ((Ci = !0), _d(Pd));
};
Z.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (ab = 0 < e ? Math.floor(1e3 / e) : 5);
};
Z.unstable_getCurrentPriorityLevel = function () {
  return Rt;
};
Z.unstable_getFirstCallbackNode = function () {
  return _n(Zn);
};
Z.unstable_next = function (e) {
  switch (Rt) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = Rt;
  }
  var n = Rt;
  Rt = t;
  try {
    return e();
  } finally {
    Rt = n;
  }
};
Z.unstable_pauseExecution = function () {};
Z.unstable_requestPaint = function () {};
Z.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = Rt;
  Rt = e;
  try {
    return t();
  } finally {
    Rt = n;
  }
};
Z.unstable_scheduleCallback = function (e, t, n) {
  var r = Z.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: gO++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        Rd(jr, e),
        _n(Zn) === null &&
          e === _n(jr) &&
          (Ts ? (sb(Rs), (Rs = -1)) : (Ts = !0), Od(Fd, n - r)))
      : ((e.sortIndex = i), Rd(Zn, e), Ci || gl || ((Ci = !0), _d(Pd))),
    e
  );
};
Z.unstable_shouldYield = cb;
Z.unstable_wrapCallback = function (e) {
  var t = Rt;
  return function () {
    var n = Rt;
    Rt = t;
    try {
      return e.apply(this, arguments);
    } finally {
      Rt = n;
    }
  };
};
var vO = Z.unstable_now,
  yO = Z.unstable_IdlePriority,
  bO = Z.unstable_ImmediatePriority,
  xO = Z.unstable_LowPriority,
  wO = Z.unstable_NormalPriority,
  SO = Z.unstable_Profiling,
  kO = Z.unstable_UserBlockingPriority,
  CO = Z.unstable_cancelCallback,
  TO = Z.unstable_continueExecution,
  RO = Z.unstable_forceFrameRate,
  EO = Z.unstable_getCurrentPriorityLevel,
  FO = Z.unstable_getFirstCallbackNode,
  PO = Z.unstable_next,
  _O = Z.unstable_pauseExecution,
  OO = Z.unstable_requestPaint,
  IO = Z.unstable_runWithPriority,
  MO = Z.unstable_scheduleCallback,
  LO = Z.unstable_shouldYield,
  VO = Z.unstable_wrapCallback;
var AO = "default" in kt ? x : kt,
  DO = "default" in yl ? Z : yl,
  on = {},
  gx = AO,
  rn = DO;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var vx = new Set(),
  Xs = {};
function Di(e, t) {
  Oo(e, t), Oo(e + "Capture", t);
}
function Oo(e, t) {
  for (Xs[e] = t, e = 0; e < t.length; e++) vx.add(t[e]);
}
var Cr = !(
    typeof F > "u" ||
    typeof F.document > "u" ||
    typeof F.document.createElement > "u"
  ),
  eh = Object.prototype.hasOwnProperty,
  zO =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ub = {},
  fb = {};
function BO(e) {
  return eh.call(fb, e)
    ? !0
    : eh.call(ub, e)
    ? !1
    : zO.test(e)
    ? (fb[e] = !0)
    : ((ub[e] = !0), !1);
}
function $O(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function NO(e, t, n, r) {
  if (t === null || typeof t > "u" || $O(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function zt(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var bt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new zt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  bt[t] = new zt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  bt[e] = new zt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  bt[e] = new zt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    bt[e] = new zt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  bt[e] = new zt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  bt[e] = new zt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  bt[e] = new zt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  bt[e] = new zt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uh = /[\-:]([a-z])/g;
function Gh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uh, Gh);
    bt[t] = new zt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uh, Gh);
    bt[t] = new zt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uh, Gh);
  bt[t] = new zt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  bt[e] = new zt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
bt.xlinkHref = new zt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  bt[e] = new zt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qh(e, t, n, r) {
  var i = bt.hasOwnProperty(t) ? bt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (NO(t, n, i, r) && (n = null),
    r || i === null
      ? BO(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fr = gx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bl = Symbol.for("react.element"),
  ho = Symbol.for("react.portal"),
  po = Symbol.for("react.fragment"),
  Xh = Symbol.for("react.strict_mode"),
  th = Symbol.for("react.profiler"),
  yx = Symbol.for("react.provider"),
  bx = Symbol.for("react.context"),
  Yh = Symbol.for("react.forward_ref"),
  nh = Symbol.for("react.suspense"),
  rh = Symbol.for("react.suspense_list"),
  Kh = Symbol.for("react.memo"),
  Wr = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var xx = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var db = Symbol.iterator;
function Es(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (db && e[db]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Id,
  He = Object.assign;
function Vs(e) {
  if (Id === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Id = (t && t[1]) || "";
    }
  return (
    `
` +
    Id +
    e
  );
}
var Md = !1;
function Ld(e, t) {
  if (!e || Md) return "";
  Md = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Md = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vs(e) : "";
}
function jO(e) {
  switch (e.tag) {
    case 5:
      return Vs(e.type);
    case 16:
      return Vs("Lazy");
    case 13:
      return Vs("Suspense");
    case 19:
      return Vs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ld(e.type, !1)), e;
    case 11:
      return (e = Ld(e.type.render, !1)), e;
    case 1:
      return (e = Ld(e.type, !0)), e;
    default:
      return "";
  }
}
function ih(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case po:
      return "Fragment";
    case ho:
      return "Portal";
    case th:
      return "Profiler";
    case Xh:
      return "StrictMode";
    case nh:
      return "Suspense";
    case rh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bx:
        return (e.displayName || "Context") + ".Consumer";
      case yx:
        return (e._context.displayName || "Context") + ".Provider";
      case Yh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kh:
        return (
          (t = e.displayName || null), t !== null ? t : ih(e.type) || "Memo"
        );
      case Wr:
        (t = e._payload), (e = e._init);
        try {
          return ih(e(t));
        } catch {}
    }
  return null;
}
function HO(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ih(t);
    case 8:
      return t === Xh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ii(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function wx(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function WO(e) {
  var t = wx(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function xl(e) {
  e._valueTracker || (e._valueTracker = WO(e));
}
function Sx(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = wx(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function Xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oh(e, t) {
  var n = t.checked;
  return He({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function hb(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ii(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function kx(e, t) {
  (t = t.checked), t != null && qh(e, "checked", t, !1);
}
function sh(e, t) {
  kx(e, t);
  var n = ii(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ah(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ah(e, t.type, ii(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pb(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ah(e, t, n) {
  (t === "number" && Xl(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var As = Array.isArray;
function To(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ii(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function lh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return He({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mb(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (As(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ii(n) };
}
function Cx(e, t) {
  var n = ii(t.value),
    r = ii(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gb(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Tx(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ch(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Tx(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var wl,
  Rx = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        wl = wl || document.createElement("div"),
          wl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = wl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ys(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  UO = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bs).forEach(function (e) {
  UO.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bs[t] = Bs[e]);
  });
});
function Ex(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Bs.hasOwnProperty(e) && Bs[e])
    ? ("" + t).trim()
    : t + "px";
}
function Fx(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ex(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var GO = He(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uh(e, t) {
  if (t) {
    if (GO[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function fh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var dh = null;
function Qh(e) {
  return (
    (e = e.target || e.srcElement || F),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var hh = null,
  Ro = null,
  Eo = null;
function vb(e) {
  if ((e = ha(e))) {
    if (typeof hh != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Sc(t)), hh(e.stateNode, e.type, t));
  }
}
function Px(e) {
  Ro ? (Eo ? Eo.push(e) : (Eo = [e])) : (Ro = e);
}
function _x() {
  if (Ro) {
    var e = Ro,
      t = Eo;
    if (((Eo = Ro = null), vb(e), t)) for (e = 0; e < t.length; e++) vb(t[e]);
  }
}
function Ox(e, t) {
  return e(t);
}
function Ix() {}
var Vd = !1;
function Mx(e, t, n) {
  if (Vd) return e(t, n);
  Vd = !0;
  try {
    return Ox(e, t, n);
  } finally {
    (Vd = !1), (Ro !== null || Eo !== null) && (Ix(), _x());
  }
}
function Ks(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Sc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var ph = !1;
if (Cr)
  try {
    (uo = {}),
      Object.defineProperty(uo, "passive", {
        get: function () {
          ph = !0;
        },
      }),
      F.addEventListener("test", uo, uo),
      F.removeEventListener("test", uo, uo);
  } catch {
    ph = !1;
  }
var uo;
function qO(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var $s = !1,
  Yl = null,
  Kl = !1,
  mh = null,
  XO = {
    onError: function (e) {
      ($s = !0), (Yl = e);
    },
  };
function YO(e, t, n, r, i, o, s, a, l) {
  ($s = !1), (Yl = null), qO.apply(XO, arguments);
}
function KO(e, t, n, r, i, o, s, a, l) {
  if ((YO.apply(this, arguments), $s)) {
    if (!$s) throw Error(M(198));
    var c = Yl;
    ($s = !1), (Yl = null), Kl || ((Kl = !0), (mh = c));
  }
}
function zi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Lx(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function yb(e) {
  if (zi(e) !== e) throw Error(M(188));
}
function QO(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zi(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return yb(i), e;
        if (o === r) return yb(i), t;
        o = o.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Vx(e) {
  return (e = QO(e)), e !== null ? Ax(e) : null;
}
function Ax(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ax(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Dx = rn.unstable_scheduleCallback,
  bb = rn.unstable_cancelCallback,
  ZO = rn.unstable_shouldYield,
  JO = rn.unstable_requestPaint,
  Ze = rn.unstable_now,
  eI = rn.unstable_getCurrentPriorityLevel,
  Zh = rn.unstable_ImmediatePriority,
  zx = rn.unstable_UserBlockingPriority,
  Ql = rn.unstable_NormalPriority,
  tI = rn.unstable_LowPriority,
  Bx = rn.unstable_IdlePriority,
  yc = null,
  nr = null;
function nI(e) {
  if (nr && typeof nr.onCommitFiberRoot == "function")
    try {
      nr.onCommitFiberRoot(yc, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Vn = Math.clz32 ? Math.clz32 : oI,
  rI = Math.log,
  iI = Math.LN2;
function oI(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rI(e) / iI) | 0)) | 0;
}
var Sl = 64,
  kl = 4194304;
function Ds(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Zl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Ds(a)) : ((o &= s), o !== 0 && (r = Ds(o)));
  } else (s = n & ~i), s !== 0 ? (r = Ds(s)) : o !== 0 && (r = Ds(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Vn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function sI(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function aI(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Vn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = sI(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function gh(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function $x() {
  var e = Sl;
  return (Sl <<= 1), !(4194240 & Sl) && (Sl = 64), e;
}
function Ad(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function fa(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Vn(t)),
    (e[t] = n);
}
function lI(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Vn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Jh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Vn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ke = 0;
function Nx(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var jx,
  ep,
  Hx,
  Wx,
  Ux,
  vh = !1,
  Cl = [],
  Kr = null,
  Qr = null,
  Zr = null,
  Qs = new Map(),
  Zs = new Map(),
  Gr = [],
  cI =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function xb(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kr = null;
      break;
    case "dragenter":
    case "dragleave":
      Qr = null;
      break;
    case "mouseover":
    case "mouseout":
      Zr = null;
      break;
    case "pointerover":
    case "pointerout":
      Qs.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zs.delete(t.pointerId);
  }
}
function Fs(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ha(t)), t !== null && ep(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function uI(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Kr = Fs(Kr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Qr = Fs(Qr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Zr = Fs(Zr, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Qs.set(o, Fs(Qs.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Zs.set(o, Fs(Zs.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Gx(e) {
  var t = Ei(e.target);
  if (t !== null) {
    var n = zi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Lx(n)), t !== null)) {
          (e.blockedOn = t),
            Ux(e.priority, function () {
              Hx(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = yh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = ha(n)), t !== null && ep(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (dh = r), n.target.dispatchEvent(r), (dh = null), t.shift();
  }
  return !0;
}
function wb(e, t, n) {
  zl(e) && n.delete(t);
}
function fI() {
  (vh = !1),
    Kr !== null && zl(Kr) && (Kr = null),
    Qr !== null && zl(Qr) && (Qr = null),
    Zr !== null && zl(Zr) && (Zr = null),
    Qs.forEach(wb),
    Zs.forEach(wb);
}
function Ps(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vh ||
      ((vh = !0),
      rn.unstable_scheduleCallback(rn.unstable_NormalPriority, fI)));
}
function Js(e) {
  function t(i) {
    return Ps(i, e);
  }
  if (0 < Cl.length) {
    Ps(Cl[0], e);
    for (var n = 1; n < Cl.length; n++) {
      var r = Cl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kr !== null && Ps(Kr, e),
      Qr !== null && Ps(Qr, e),
      Zr !== null && Ps(Zr, e),
      Qs.forEach(t),
      Zs.forEach(t),
      n = 0;
    n < Gr.length;
    n++
  )
    (r = Gr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gr.length && ((n = Gr[0]), n.blockedOn === null); )
    Gx(n), n.blockedOn === null && Gr.shift();
}
var Fo = Fr.ReactCurrentBatchConfig,
  Jl = !0;
function dI(e, t, n, r) {
  var i = ke,
    o = Fo.transition;
  Fo.transition = null;
  try {
    (ke = 1), tp(e, t, n, r);
  } finally {
    (ke = i), (Fo.transition = o);
  }
}
function hI(e, t, n, r) {
  var i = ke,
    o = Fo.transition;
  Fo.transition = null;
  try {
    (ke = 4), tp(e, t, n, r);
  } finally {
    (ke = i), (Fo.transition = o);
  }
}
function tp(e, t, n, r) {
  if (Jl) {
    var i = yh(e, t, n, r);
    if (i === null) Hd(e, t, r, ec, n), xb(e, r);
    else if (uI(i, e, t, n, r)) r.stopPropagation();
    else if ((xb(e, r), 4 & t && -1 < cI.indexOf(e))) {
      for (; i !== null; ) {
        var o = ha(i);
        if (
          (o !== null && jx(o),
          (o = yh(e, t, n, r)),
          o === null && Hd(e, t, r, ec, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Hd(e, t, r, null, n);
  }
}
var ec = null;
function yh(e, t, n, r) {
  if (((ec = null), (e = Qh(r)), (e = Ei(e)), e !== null))
    if (((t = zi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Lx(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ec = e), null;
}
function qx(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (eI()) {
        case Zh:
          return 1;
        case zx:
          return 4;
        case Ql:
        case tI:
          return 16;
        case Bx:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xr = null,
  np = null,
  Bl = null;
function Xx() {
  if (Bl) return Bl;
  var e,
    t,
    n = np,
    r = n.length,
    i = "value" in Xr ? Xr.value : Xr.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (Bl = i.slice(e, 1 < t ? 1 - t : void 0));
}
function $l(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Tl() {
  return !0;
}
function Sb() {
  return !1;
}
function sn(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Tl
        : Sb),
      (this.isPropagationStopped = Sb),
      this
    );
  }
  return (
    He(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Tl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Tl));
      },
      persist: function () {},
      isPersistent: Tl,
    }),
    t
  );
}
var Dd,
  zd,
  _s,
  zo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  rp = sn(zo),
  da = He({}, zo, { view: 0, detail: 0 }),
  pI = sn(da),
  bc = He({}, da, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ip,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== _s &&
            (_s && e.type === "mousemove"
              ? ((Dd = e.screenX - _s.screenX), (zd = e.screenY - _s.screenY))
              : (zd = Dd = 0),
            (_s = e)),
          Dd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zd;
    },
  }),
  kb = sn(bc),
  mI = He({}, bc, { dataTransfer: 0 }),
  gI = sn(mI),
  vI = He({}, da, { relatedTarget: 0 }),
  Bd = sn(vI),
  yI = He({}, zo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  bI = sn(yI),
  xI = He({}, zo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : F.clipboardData;
    },
  }),
  wI = sn(xI),
  SI = He({}, zo, { data: 0 }),
  Cb = sn(SI),
  kI = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  CI = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  TI = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function RI(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = TI[e]) && !!t[e];
}
function ip() {
  return RI;
}
var EI = He({}, da, {
    key: function (e) {
      if (e.key) {
        var t = kI[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = $l(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? CI[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ip,
    charCode: function (e) {
      return e.type === "keypress" ? $l(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? $l(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  FI = sn(EI),
  PI = He({}, bc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Tb = sn(PI),
  _I = He({}, da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ip,
  }),
  OI = sn(_I),
  II = He({}, zo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  MI = sn(II),
  LI = He({}, bc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  VI = sn(LI),
  AI = [9, 13, 27, 32],
  op = Cr && "CompositionEvent" in F,
  Ns = null;
Cr && "documentMode" in document && (Ns = document.documentMode);
var DI = Cr && "TextEvent" in F && !Ns,
  Yx = Cr && (!op || (Ns && 8 < Ns && 11 >= Ns)),
  Rb = String.fromCharCode(32),
  Eb = !1;
function Kx(e, t) {
  switch (e) {
    case "keyup":
      return AI.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Qx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var mo = !1;
function zI(e, t) {
  switch (e) {
    case "compositionend":
      return Qx(t);
    case "keypress":
      return t.which !== 32 ? null : ((Eb = !0), Rb);
    case "textInput":
      return (e = t.data), e === Rb && Eb ? null : e;
    default:
      return null;
  }
}
function BI(e, t) {
  if (mo)
    return e === "compositionend" || (!op && Kx(e, t))
      ? ((e = Xx()), (Bl = np = Xr = null), (mo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Yx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var $I = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Fb(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!$I[e.type] : t === "textarea";
}
function Zx(e, t, n, r) {
  Px(r),
    (t = tc(t, "onChange")),
    0 < t.length &&
      ((n = new rp("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var js = null,
  ea = null;
function NI(e) {
  cw(e, 0);
}
function xc(e) {
  var t = yo(e);
  if (Sx(t)) return e;
}
function jI(e, t) {
  if (e === "change") return t;
}
var Jx = !1;
Cr &&
  (Cr
    ? ((El = "oninput" in document),
      El ||
        (($d = document.createElement("div")),
        $d.setAttribute("oninput", "return;"),
        (El = typeof $d.oninput == "function")),
      (Rl = El))
    : (Rl = !1),
  (Jx = Rl && (!document.documentMode || 9 < document.documentMode)));
var Rl, El, $d;
function Pb() {
  js && (js.detachEvent("onpropertychange", ew), (ea = js = null));
}
function ew(e) {
  if (e.propertyName === "value" && xc(ea)) {
    var t = [];
    Zx(t, ea, e, Qh(e)), Mx(NI, t);
  }
}
function HI(e, t, n) {
  e === "focusin"
    ? (Pb(), (js = t), (ea = n), js.attachEvent("onpropertychange", ew))
    : e === "focusout" && Pb();
}
function WI(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xc(ea);
}
function UI(e, t) {
  if (e === "click") return xc(t);
}
function GI(e, t) {
  if (e === "input" || e === "change") return xc(t);
}
function qI(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dn = typeof Object.is == "function" ? Object.is : qI;
function ta(e, t) {
  if (Dn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!eh.call(t, i) || !Dn(e[i], t[i])) return !1;
  }
  return !0;
}
function _b(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ob(e, t) {
  var n = _b(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _b(n);
  }
}
function tw(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? tw(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function nw() {
  for (var e = F, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = Xl(e.document));
  }
  return t;
}
function sp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function XI(e) {
  var t = nw(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    tw(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && sp(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || F),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ob(n, o));
        var s = Ob(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var YI = Cr && "documentMode" in document && 11 >= document.documentMode,
  go = null,
  bh = null,
  Hs = null,
  xh = !1;
function Ib(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xh ||
    go == null ||
    go !== Xl(r) ||
    ((r = go),
    "selectionStart" in r && sp(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          F
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Hs && ta(Hs, r)) ||
      ((Hs = r),
      (r = tc(bh, "onSelect")),
      0 < r.length &&
        ((t = new rp("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = go))));
}
function Fl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var vo = {
    animationend: Fl("Animation", "AnimationEnd"),
    animationiteration: Fl("Animation", "AnimationIteration"),
    animationstart: Fl("Animation", "AnimationStart"),
    transitionend: Fl("Transition", "TransitionEnd"),
  },
  Nd = {},
  rw = {};
Cr &&
  ((rw = document.createElement("div").style),
  "AnimationEvent" in F ||
    (delete vo.animationend.animation,
    delete vo.animationiteration.animation,
    delete vo.animationstart.animation),
  "TransitionEvent" in F || delete vo.transitionend.transition);
function wc(e) {
  if (Nd[e]) return Nd[e];
  if (!vo[e]) return e;
  var t,
    n = vo[e];
  for (t in n) if (n.hasOwnProperty(t) && t in rw) return (Nd[e] = n[t]);
  return e;
}
var iw = wc("animationend"),
  ow = wc("animationiteration"),
  sw = wc("animationstart"),
  aw = wc("transitionend"),
  lw = new Map(),
  Mb =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function si(e, t) {
  lw.set(e, t), Di(t, [e]);
}
for (Pl = 0; Pl < Mb.length; Pl++)
  (_l = Mb[Pl]),
    (Lb = _l.toLowerCase()),
    (Vb = _l[0].toUpperCase() + _l.slice(1)),
    si(Lb, "on" + Vb);
var _l, Lb, Vb, Pl;
si(iw, "onAnimationEnd");
si(ow, "onAnimationIteration");
si(sw, "onAnimationStart");
si("dblclick", "onDoubleClick");
si("focusin", "onFocus");
si("focusout", "onBlur");
si(aw, "onTransitionEnd");
Oo("onMouseEnter", ["mouseout", "mouseover"]);
Oo("onMouseLeave", ["mouseout", "mouseover"]);
Oo("onPointerEnter", ["pointerout", "pointerover"]);
Oo("onPointerLeave", ["pointerout", "pointerover"]);
Di(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Di(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Di("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Di(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Di(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Di(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var zs =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  KI = new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));
function Ab(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), KO(r, t, void 0, e), (e.currentTarget = null);
}
function cw(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Ab(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Ab(i, a, c), (o = l);
        }
    }
  }
  if (Kl) throw ((e = mh), (Kl = !1), (mh = null), e);
}
function Le(e, t) {
  var n = t[Th];
  n === void 0 && (n = t[Th] = new Set());
  var r = e + "__bubble";
  n.has(r) || (uw(t, e, 2, !1), n.add(r));
}
function jd(e, t, n) {
  var r = 0;
  t && (r |= 4), uw(n, e, r, t);
}
var Ol = "_reactListening" + Math.random().toString(36).slice(2);
function na(e) {
  if (!e[Ol]) {
    (e[Ol] = !0),
      vx.forEach(function (n) {
        n !== "selectionchange" && (KI.has(n) || jd(n, !1, e), jd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ol] || ((t[Ol] = !0), jd("selectionchange", !1, t));
  }
}
function uw(e, t, n, r) {
  switch (qx(t)) {
    case 1:
      var i = dI;
      break;
    case 4:
      i = hI;
      break;
    default:
      i = tp;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ph ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Hd(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Ei(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Mx(function () {
    var c = o,
      u = Qh(n),
      f = [];
    e: {
      var d = lw.get(e);
      if (d !== void 0) {
        var p = rp,
          y = e;
        switch (e) {
          case "keypress":
            if ($l(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = FI;
            break;
          case "focusin":
            (y = "focus"), (p = Bd);
            break;
          case "focusout":
            (y = "blur"), (p = Bd);
            break;
          case "beforeblur":
          case "afterblur":
            p = Bd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = kb;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = gI;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = OI;
            break;
          case iw:
          case ow:
          case sw:
            p = bI;
            break;
          case aw:
            p = MI;
            break;
          case "scroll":
            p = pI;
            break;
          case "wheel":
            p = VI;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = wI;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = Tb;
        }
        var g = (4 & t) !== 0,
          b = !g && e === "scroll",
          h = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var m, v = c; v !== null; ) {
          m = v;
          var S = m.stateNode;
          if (
            (m.tag === 5 &&
              S !== null &&
              ((m = S),
              h !== null && ((S = Ks(v, h)), S != null && g.push(ra(v, S, m)))),
            b)
          )
            break;
          v = v.return;
        }
        0 < g.length &&
          ((d = new p(d, y, null, n, u)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (p = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === dh ||
          !(y = n.relatedTarget || n.fromElement) ||
          (!Ei(y) && !y[Tr])) &&
          (p || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : F),
          p
            ? ((y = n.relatedTarget || n.toElement),
              (p = c),
              (y = y ? Ei(y) : null),
              y !== null &&
                ((b = zi(y)), y !== b || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((p = null), (y = c)),
          p !== y))
      ) {
        if (
          ((g = kb),
          (S = "onMouseLeave"),
          (h = "onMouseEnter"),
          (v = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((g = Tb),
            (S = "onPointerLeave"),
            (h = "onPointerEnter"),
            (v = "pointer")),
          (b = p == null ? d : yo(p)),
          (m = y == null ? d : yo(y)),
          (d = new g(S, v + "leave", p, n, u)),
          (d.target = b),
          (d.relatedTarget = m),
          (S = null),
          Ei(u) === c &&
            ((g = new g(h, v + "enter", y, n, u)),
            (g.target = m),
            (g.relatedTarget = b),
            (S = g)),
          (b = S),
          p && y)
        )
          e: {
            for (g = p, h = y, v = 0, m = g; m; m = fo(m)) v++;
            for (m = 0, S = h; S; S = fo(S)) m++;
            for (; 0 < v - m; ) (g = fo(g)), v--;
            for (; 0 < m - v; ) (h = fo(h)), m--;
            for (; v--; ) {
              if (g === h || (h !== null && g === h.alternate)) break e;
              (g = fo(g)), (h = fo(h));
            }
            g = null;
          }
        else g = null;
        p !== null && Db(f, d, p, g, !1),
          y !== null && b !== null && Db(f, b, y, g, !0);
      }
      if (
        ((d = c ? yo(c) : F),
        (p = d.nodeName && d.nodeName.toLowerCase()),
        p === "select" || (p === "input" && d.type === "file"))
      )
        var k = jI;
      else if (Fb(d))
        if (Jx) k = GI;
        else {
          k = WI;
          var w = HI;
        }
      else
        (p = d.nodeName) &&
          p.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (k = UI);
      switch (
        (k && (k = k(e, c))
          ? Zx(f, k, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              ah(d, "number", d.value)),
        (w = c ? yo(c) : F),
        e)
      ) {
        case "focusin":
          (Fb(w) || w.contentEditable === "true") &&
            ((go = w), (bh = c), (Hs = null));
          break;
        case "focusout":
          Hs = bh = go = null;
          break;
        case "mousedown":
          xh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (xh = !1), Ib(f, n, u);
          break;
        case "selectionchange":
          if (YI) break;
        case "keydown":
        case "keyup":
          Ib(f, n, u);
      }
      var T;
      if (op)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        mo
          ? Kx(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Yx &&
          n.locale !== "ko" &&
          (mo || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && mo && (T = Xx())
            : ((Xr = u),
              (np = "value" in Xr ? Xr.value : Xr.textContent),
              (mo = !0))),
        (w = tc(c, R)),
        0 < w.length &&
          ((R = new Cb(R, e, null, n, u)),
          f.push({ event: R, listeners: w }),
          T ? (R.data = T) : ((T = Qx(n)), T !== null && (R.data = T)))),
        (T = DI ? zI(e, n) : BI(e, n)) &&
          ((c = tc(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Cb("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = T)));
    }
    cw(f, t);
  });
}
function ra(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function tc(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ks(e, n)),
      o != null && r.unshift(ra(e, o, i)),
      (o = Ks(e, t)),
      o != null && r.push(ra(e, o, i))),
      (e = e.return);
  }
  return r;
}
function fo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Db(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Ks(n, o)), l != null && s.unshift(ra(n, l, a)))
        : i || ((l = Ks(n, o)), l != null && s.push(ra(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var QI = /\r\n?/g,
  ZI = /\u0000|\uFFFD/g;
function zb(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      QI,
      `
`
    )
    .replace(ZI, "");
}
function Il(e, t, n) {
  if (((t = zb(t)), zb(e) !== t && n)) throw Error(M(425));
}
function nc() {}
var wh = null,
  Sh = null;
function kh(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ch = typeof setTimeout == "function" ? setTimeout : void 0,
  JI = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bb = typeof Promise == "function" ? Promise : void 0,
  e2 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bb < "u"
      ? function (e) {
          return Bb.resolve(null).then(e).catch(t2);
        }
      : Ch;
function t2(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wd(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Js(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Js(t);
}
function Jr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function $b(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Bo = Math.random().toString(36).slice(2),
  tr = "__reactFiber$" + Bo,
  ia = "__reactProps$" + Bo,
  Tr = "__reactContainer$" + Bo,
  Th = "__reactEvents$" + Bo,
  n2 = "__reactListeners$" + Bo,
  r2 = "__reactHandles$" + Bo;
function Ei(e) {
  var t = e[tr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tr] || n[tr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = $b(e); e !== null; ) {
          if ((n = e[tr])) return n;
          e = $b(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ha(e) {
  return (
    (e = e[tr] || e[Tr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function yo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Sc(e) {
  return e[ia] || null;
}
var Rh = [],
  bo = -1;
function ai(e) {
  return { current: e };
}
function Ve(e) {
  0 > bo || ((e.current = Rh[bo]), (Rh[bo] = null), bo--);
}
function Pe(e, t) {
  bo++, (Rh[bo] = e.current), (e.current = t);
}
var oi = {},
  _t = ai(oi),
  Ut = ai(!1),
  Ii = oi;
function Io(e, t) {
  var n = e.type.contextTypes;
  if (!n) return oi;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Gt(e) {
  return (e = e.childContextTypes), e != null;
}
function rc() {
  Ve(Ut), Ve(_t);
}
function Nb(e, t, n) {
  if (_t.current !== oi) throw Error(M(168));
  Pe(_t, t), Pe(Ut, n);
}
function fw(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, HO(e) || "Unknown", i));
  return He({}, n, r);
}
function ic(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || oi),
    (Ii = _t.current),
    Pe(_t, e),
    Pe(Ut, Ut.current),
    !0
  );
}
function jb(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = fw(e, t, Ii)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ve(Ut),
      Ve(_t),
      Pe(_t, e))
    : Ve(Ut),
    Pe(Ut, n);
}
var xr = null,
  kc = !1,
  Ud = !1;
function dw(e) {
  xr === null ? (xr = [e]) : xr.push(e);
}
function i2(e) {
  (kc = !0), dw(e);
}
function li() {
  if (!Ud && xr !== null) {
    Ud = !0;
    var e = 0,
      t = ke;
    try {
      var n = xr;
      for (ke = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xr = null), (kc = !1);
    } catch (i) {
      throw (xr !== null && (xr = xr.slice(e + 1)), Dx(Zh, li), i);
    } finally {
      (ke = t), (Ud = !1);
    }
  }
  return null;
}
var xo = [],
  wo = 0,
  oc = null,
  sc = 0,
  yn = [],
  bn = 0,
  Mi = null,
  wr = 1,
  Sr = "";
function Ti(e, t) {
  (xo[wo++] = sc), (xo[wo++] = oc), (oc = e), (sc = t);
}
function hw(e, t, n) {
  (yn[bn++] = wr), (yn[bn++] = Sr), (yn[bn++] = Mi), (Mi = e);
  var r = wr;
  e = Sr;
  var i = 32 - Vn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Vn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (wr = (1 << (32 - Vn(t) + i)) | (n << i) | r),
      (Sr = o + e);
  } else (wr = (1 << o) | (n << i) | r), (Sr = e);
}
function ap(e) {
  e.return !== null && (Ti(e, 1), hw(e, 1, 0));
}
function lp(e) {
  for (; e === oc; )
    (oc = xo[--wo]), (xo[wo] = null), (sc = xo[--wo]), (xo[wo] = null);
  for (; e === Mi; )
    (Mi = yn[--bn]),
      (yn[bn] = null),
      (Sr = yn[--bn]),
      (yn[bn] = null),
      (wr = yn[--bn]),
      (yn[bn] = null);
}
var nn = null,
  tn = null,
  Be = !1,
  Ln = null;
function pw(e, t) {
  var n = xn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Hb(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (nn = e), (tn = Jr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (nn = e), (tn = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = Mi !== null ? { id: wr, overflow: Sr } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = xn(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (nn = e),
          (tn = null),
          !0)
      );
    default:
      return !1;
  }
}
function Eh(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function Fh(e) {
  if (Be) {
    var t = tn;
    if (t) {
      var n = t;
      if (!Hb(e, t)) {
        if (Eh(e)) throw Error(M(418));
        t = Jr(n.nextSibling);
        var r = nn;
        t && Hb(e, t)
          ? pw(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Be = !1), (nn = e));
      }
    } else {
      if (Eh(e)) throw Error(M(418));
      (e.flags = (-4097 & e.flags) | 2), (Be = !1), (nn = e);
    }
  }
}
function Wb(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  nn = e;
}
function Ml(e) {
  if (e !== nn) return !1;
  if (!Be) return Wb(e), (Be = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !kh(e.type, e.memoizedProps))),
    t && (t = tn))
  ) {
    if (Eh(e)) throw (mw(), Error(M(418)));
    for (; t; ) pw(e, t), (t = Jr(t.nextSibling));
  }
  if ((Wb(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              tn = Jr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      tn = null;
    }
  } else tn = nn ? Jr(e.stateNode.nextSibling) : null;
  return !0;
}
function mw() {
  for (var e = tn; e; ) e = Jr(e.nextSibling);
}
function Mo() {
  (tn = nn = null), (Be = !1);
}
function cp(e) {
  Ln === null ? (Ln = [e]) : Ln.push(e);
}
var o2 = Fr.ReactCurrentBatchConfig;
function In(e, t) {
  if (e && e.defaultProps) {
    (t = He({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ac = ai(null),
  lc = null,
  So = null,
  up = null;
function fp() {
  up = So = lc = null;
}
function dp(e) {
  var t = ac.current;
  Ve(ac), (e._currentValue = t);
}
function Ph(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Po(e, t) {
  (lc = e),
    (up = So = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Wt = !0), (e.firstContext = null));
}
function Sn(e) {
  var t = e._currentValue;
  if (up !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), So === null)) {
      if (lc === null) throw Error(M(308));
      (So = e), (lc.dependencies = { lanes: 0, firstContext: e });
    } else So = So.next = e;
  return t;
}
var Fi = null;
function hp(e) {
  Fi === null ? (Fi = [e]) : Fi.push(e);
}
function gw(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), hp(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Rr(e, r)
  );
}
function Rr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ur = !1;
function pp(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function vw(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function kr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ei(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & ve)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Rr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), hp(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Rr(e, n)
  );
}
function Nl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jh(e, n);
  }
}
function Ub(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function cc(e, t, n, r) {
  var i = e.updateQueue;
  Ur = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            g = a;
          switch (((d = t), (p = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                f = y.call(p, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (-65537 & y.flags) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(p, f, d) : y),
                d == null)
              )
                break e;
              f = He({}, f, d);
              break e;
            case 2:
              Ur = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = f)) : (u = u.next = p),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Vi |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Gb(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var yw = new gx.Component().refs;
function _h(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : He({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Cc = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && zi(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Dt(),
      i = ni(e),
      o = kr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ei(e, o, i)),
      t !== null && (An(t, e, i, r), Nl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Dt(),
      i = ni(e),
      o = kr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ei(e, o, i)),
      t !== null && (An(t, e, i, r), Nl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Dt(),
      r = ni(e),
      i = kr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = ei(e, i, r)),
      t !== null && (An(t, e, r, n), Nl(t, e, r));
  },
};
function qb(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !ta(n, r) ||
        !ta(i, o)
  );
}
function bw(e, t, n) {
  var r = !1,
    i = oi,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Sn(o))
      : ((i = Gt(t) ? Ii : _t.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Io(e, i) : oi)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Cc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Xb(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Cc.enqueueReplaceState(t, t.state, null);
}
function Oh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = yw), pp(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Sn(o))
    : ((o = Gt(t) ? Ii : _t.current), (i.context = Io(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (_h(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Cc.enqueueReplaceState(i, i.state, null),
      cc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Os(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === yw && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function Ll(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Yb(e) {
  var t = e._init;
  return t(e._payload);
}
function xw(e) {
  function t(h, m) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [m]), (h.flags |= 16)) : v.push(m);
    }
  }
  function n(h, m) {
    if (!e) return null;
    for (; m !== null; ) t(h, m), (m = m.sibling);
    return null;
  }
  function r(h, m) {
    for (h = new Map(); m !== null; )
      m.key !== null ? h.set(m.key, m) : h.set(m.index, m), (m = m.sibling);
    return h;
  }
  function i(h, m) {
    return (h = ri(h, m)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, m, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate),
          v !== null
            ? ((v = v.index), v < m ? ((h.flags |= 2), m) : v)
            : ((h.flags |= 2), m))
        : ((h.flags |= 1048576), m)
    );
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, m, v, S) {
    return m === null || m.tag !== 6
      ? ((m = Zd(v, h.mode, S)), (m.return = h), m)
      : ((m = i(m, v)), (m.return = h), m);
  }
  function l(h, m, v, S) {
    var k = v.type;
    return k === po
      ? u(h, m, v.props.children, S, v.key)
      : m !== null &&
        (m.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Wr &&
            Yb(k) === m.type))
      ? ((S = i(m, v.props)), (S.ref = Os(h, m, v)), (S.return = h), S)
      : ((S = ql(v.type, v.key, v.props, null, h.mode, S)),
        (S.ref = Os(h, m, v)),
        (S.return = h),
        S);
  }
  function c(h, m, v, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = Jd(v, h.mode, S)), (m.return = h), m)
      : ((m = i(m, v.children || [])), (m.return = h), m);
  }
  function u(h, m, v, S, k) {
    return m === null || m.tag !== 7
      ? ((m = Oi(v, h.mode, S, k)), (m.return = h), m)
      : ((m = i(m, v)), (m.return = h), m);
  }
  function f(h, m, v) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Zd("" + m, h.mode, v)), (m.return = h), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case bl:
          return (
            (v = ql(m.type, m.key, m.props, null, h.mode, v)),
            (v.ref = Os(h, null, m)),
            (v.return = h),
            v
          );
        case ho:
          return (m = Jd(m, h.mode, v)), (m.return = h), m;
        case Wr:
          var S = m._init;
          return f(h, S(m._payload), v);
      }
      if (As(m) || Es(m))
        return (m = Oi(m, h.mode, v, null)), (m.return = h), m;
      Ll(h, m);
    }
    return null;
  }
  function d(h, m, v, S) {
    var k = m !== null ? m.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : a(h, m, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case bl:
          return v.key === k ? l(h, m, v, S) : null;
        case ho:
          return v.key === k ? c(h, m, v, S) : null;
        case Wr:
          return (k = v._init), d(h, m, k(v._payload), S);
      }
      if (As(v) || Es(v)) return k !== null ? null : u(h, m, v, S, null);
      Ll(h, v);
    }
    return null;
  }
  function p(h, m, v, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (h = h.get(v) || null), a(m, h, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case bl:
          return (h = h.get(S.key === null ? v : S.key) || null), l(m, h, S, k);
        case ho:
          return (h = h.get(S.key === null ? v : S.key) || null), c(m, h, S, k);
        case Wr:
          var w = S._init;
          return p(h, m, v, w(S._payload), k);
      }
      if (As(S) || Es(S)) return (h = h.get(v) || null), u(m, h, S, k, null);
      Ll(m, S);
    }
    return null;
  }
  function y(h, m, v, S) {
    for (
      var k = null, w = null, T = m, R = (m = 0), O = null;
      T !== null && R < v.length;
      R++
    ) {
      T.index > R ? ((O = T), (T = null)) : (O = T.sibling);
      var I = d(h, T, v[R], S);
      if (I === null) {
        T === null && (T = O);
        break;
      }
      e && T && I.alternate === null && t(h, T),
        (m = o(I, m, R)),
        w === null ? (k = I) : (w.sibling = I),
        (w = I),
        (T = O);
    }
    if (R === v.length) return n(h, T), Be && Ti(h, R), k;
    if (T === null) {
      for (; R < v.length; R++)
        (T = f(h, v[R], S)),
          T !== null &&
            ((m = o(T, m, R)), w === null ? (k = T) : (w.sibling = T), (w = T));
      return Be && Ti(h, R), k;
    }
    for (T = r(h, T); R < v.length; R++)
      (O = p(T, h, R, v[R], S)),
        O !== null &&
          (e && O.alternate !== null && T.delete(O.key === null ? R : O.key),
          (m = o(O, m, R)),
          w === null ? (k = O) : (w.sibling = O),
          (w = O));
    return (
      e &&
        T.forEach(function (N) {
          return t(h, N);
        }),
      Be && Ti(h, R),
      k
    );
  }
  function g(h, m, v, S) {
    var k = Es(v);
    if (typeof k != "function") throw Error(M(150));
    if (((v = k.call(v)), v == null)) throw Error(M(151));
    for (
      var w = (k = null), T = m, R = (m = 0), O = null, I = v.next();
      T !== null && !I.done;
      R++, I = v.next()
    ) {
      T.index > R ? ((O = T), (T = null)) : (O = T.sibling);
      var N = d(h, T, I.value, S);
      if (N === null) {
        T === null && (T = O);
        break;
      }
      e && T && N.alternate === null && t(h, T),
        (m = o(N, m, R)),
        w === null ? (k = N) : (w.sibling = N),
        (w = N),
        (T = O);
    }
    if (I.done) return n(h, T), Be && Ti(h, R), k;
    if (T === null) {
      for (; !I.done; R++, I = v.next())
        (I = f(h, I.value, S)),
          I !== null &&
            ((m = o(I, m, R)), w === null ? (k = I) : (w.sibling = I), (w = I));
      return Be && Ti(h, R), k;
    }
    for (T = r(h, T); !I.done; R++, I = v.next())
      (I = p(T, h, R, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? R : I.key),
          (m = o(I, m, R)),
          w === null ? (k = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        T.forEach(function (z) {
          return t(h, z);
        }),
      Be && Ti(h, R),
      k
    );
  }
  function b(h, m, v, S) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === po &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case bl:
          e: {
            for (var k = v.key, w = m; w !== null; ) {
              if (w.key === k) {
                if (((k = v.type), k === po)) {
                  if (w.tag === 7) {
                    n(h, w.sibling),
                      (m = i(w, v.props.children)),
                      (m.return = h),
                      (h = m);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Wr &&
                    Yb(k) === w.type)
                ) {
                  n(h, w.sibling),
                    (m = i(w, v.props)),
                    (m.ref = Os(h, w, v)),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, w);
                break;
              }
              t(h, w), (w = w.sibling);
            }
            v.type === po
              ? ((m = Oi(v.props.children, h.mode, S, v.key)),
                (m.return = h),
                (h = m))
              : ((S = ql(v.type, v.key, v.props, null, h.mode, S)),
                (S.ref = Os(h, m, v)),
                (S.return = h),
                (h = S));
          }
          return s(h);
        case ho:
          e: {
            for (w = v.key; m !== null; ) {
              if (m.key === w) {
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(h, m.sibling),
                    (m = i(m, v.children || [])),
                    (m.return = h),
                    (h = m);
                  break e;
                }
                n(h, m);
                break;
              }
              t(h, m), (m = m.sibling);
            }
            (m = Jd(v, h.mode, S)), (m.return = h), (h = m);
          }
          return s(h);
        case Wr:
          return (w = v._init), b(h, m, w(v._payload), S);
      }
      if (As(v)) return y(h, m, v, S);
      if (Es(v)) return g(h, m, v, S);
      Ll(h, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        m !== null && m.tag === 6
          ? (n(h, m.sibling), (m = i(m, v)), (m.return = h), (h = m))
          : (n(h, m), (m = Zd(v, h.mode, S)), (m.return = h), (h = m)),
        s(h))
      : n(h, m);
  }
  return b;
}
var Lo = xw(!0),
  ww = xw(!1),
  pa = {},
  rr = ai(pa),
  oa = ai(pa),
  sa = ai(pa);
function Pi(e) {
  if (e === pa) throw Error(M(174));
  return e;
}
function mp(e, t) {
  switch ((Pe(sa, t), Pe(oa, e), Pe(rr, pa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ch(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ch(t, e));
  }
  Ve(rr), Pe(rr, t);
}
function Vo() {
  Ve(rr), Ve(oa), Ve(sa);
}
function Sw(e) {
  Pi(sa.current);
  var t = Pi(rr.current),
    n = ch(t, e.type);
  t !== n && (Pe(oa, e), Pe(rr, n));
}
function gp(e) {
  oa.current === e && (Ve(rr), Ve(oa));
}
var Ne = ai(0);
function uc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gd = [];
function vp() {
  for (var e = 0; e < Gd.length; e++)
    Gd[e]._workInProgressVersionPrimary = null;
  Gd.length = 0;
}
var jl = Fr.ReactCurrentDispatcher,
  qd = Fr.ReactCurrentBatchConfig,
  Li = 0,
  je = null,
  it = null,
  ut = null,
  fc = !1,
  Ws = !1,
  aa = 0,
  s2 = 0;
function Et() {
  throw Error(M(321));
}
function yp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Dn(e[n], t[n])) return !1;
  return !0;
}
function bp(e, t, n, r, i, o) {
  if (
    ((Li = o),
    (je = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (jl.current = e === null || e.memoizedState === null ? u2 : f2),
    (e = n(r, i)),
    Ws)
  ) {
    o = 0;
    do {
      if (((Ws = !1), (aa = 0), 25 <= o)) throw Error(M(301));
      (o += 1),
        (ut = it = null),
        (t.updateQueue = null),
        (jl.current = d2),
        (e = n(r, i));
    } while (Ws);
  }
  if (
    ((jl.current = dc),
    (t = it !== null && it.next !== null),
    (Li = 0),
    (ut = it = je = null),
    (fc = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function xp() {
  var e = aa !== 0;
  return (aa = 0), e;
}
function er() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ut === null ? (je.memoizedState = ut = e) : (ut = ut.next = e), ut;
}
function kn() {
  if (it === null) {
    var e = je.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = it.next;
  var t = ut === null ? je.memoizedState : ut.next;
  if (t !== null) (ut = t), (it = e);
  else {
    if (e === null) throw Error(M(310));
    (it = e),
      (e = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null,
      }),
      ut === null ? (je.memoizedState = ut = e) : (ut = ut.next = e);
  }
  return ut;
}
function la(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Xd(e) {
  var t = kn(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = it,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((Li & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (je.lanes |= u),
          (Vi |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      Dn(r, t.memoizedState) || (Wt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (je.lanes |= o), (Vi |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yd(e) {
  var t = kn(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Dn(o, t.memoizedState) || (Wt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function kw() {}
function Cw(e, t) {
  var n = je,
    r = kn(),
    i = t(),
    o = !Dn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Wt = !0)),
    (r = r.queue),
    wp(Ew.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ut !== null && 1 & ut.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      ca(9, Rw.bind(null, n, r, i, t), void 0, null),
      ft === null)
    )
      throw Error(M(349));
    30 & Li || Tw(n, t, i);
  }
  return i;
}
function Tw(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (je.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Rw(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fw(t) && Pw(e);
}
function Ew(e, t, n) {
  return n(function () {
    Fw(t) && Pw(e);
  });
}
function Fw(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dn(e, n);
  } catch {
    return !0;
  }
}
function Pw(e) {
  var t = Rr(e, 1);
  t !== null && An(t, e, 1, -1);
}
function Kb(e) {
  var t = er();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: la,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = c2.bind(null, je, e)),
    [t.memoizedState, e]
  );
}
function ca(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = je.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (je.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function _w() {
  return kn().memoizedState;
}
function Hl(e, t, n, r) {
  var i = er();
  (je.flags |= e),
    (i.memoizedState = ca(1 | t, n, void 0, r === void 0 ? null : r));
}
function Tc(e, t, n, r) {
  var i = kn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (it !== null) {
    var s = it.memoizedState;
    if (((o = s.destroy), r !== null && yp(r, s.deps))) {
      i.memoizedState = ca(t, n, o, r);
      return;
    }
  }
  (je.flags |= e), (i.memoizedState = ca(1 | t, n, o, r));
}
function Qb(e, t) {
  return Hl(8390656, 8, e, t);
}
function wp(e, t) {
  return Tc(2048, 8, e, t);
}
function Ow(e, t) {
  return Tc(4, 2, e, t);
}
function Iw(e, t) {
  return Tc(4, 4, e, t);
}
function Mw(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function Lw(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Tc(4, 4, Mw.bind(null, t, e), n)
  );
}
function Sp() {}
function Vw(e, t) {
  var n = kn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Aw(e, t) {
  var n = kn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Dw(e, t, n) {
  return 21 & Li
    ? (Dn(n, t) || ((n = $x()), (je.lanes |= n), (Vi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Wt = !0)), (e.memoizedState = n));
}
function a2(e, t) {
  var n = ke;
  (ke = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = qd.transition;
  qd.transition = {};
  try {
    e(!1), t();
  } finally {
    (ke = n), (qd.transition = r);
  }
}
function zw() {
  return kn().memoizedState;
}
function l2(e, t, n) {
  var r = ni(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Bw(e))
  )
    $w(t, n);
  else if (((n = gw(e, t, n, r)), n !== null)) {
    var i = Dt();
    An(n, e, r, i), Nw(n, t, r);
  }
}
function c2(e, t, n) {
  var r = ni(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Bw(e)) $w(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Dn(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), hp(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = gw(e, t, i, r)),
      n !== null && ((i = Dt()), An(n, e, r, i), Nw(n, t, r));
  }
}
function Bw(e) {
  var t = e.alternate;
  return e === je || (t !== null && t === je);
}
function $w(e, t) {
  Ws = fc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Nw(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jh(e, n);
  }
}
var dc = {
    readContext: Sn,
    useCallback: Et,
    useContext: Et,
    useEffect: Et,
    useImperativeHandle: Et,
    useInsertionEffect: Et,
    useLayoutEffect: Et,
    useMemo: Et,
    useReducer: Et,
    useRef: Et,
    useState: Et,
    useDebugValue: Et,
    useDeferredValue: Et,
    useTransition: Et,
    useMutableSource: Et,
    useSyncExternalStore: Et,
    useId: Et,
    unstable_isNewReconciler: !1,
  },
  u2 = {
    readContext: Sn,
    useCallback: function (e, t) {
      return (er().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Sn,
    useEffect: Qb,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hl(4194308, 4, Mw.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = er();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = er();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = l2.bind(null, je, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = er();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Kb,
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      return (er().memoizedState = e);
    },
    useTransition: function () {
      var e = Kb(!1),
        t = e[0];
      return (e = a2.bind(null, e[1])), (er().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = je,
        i = er();
      if (Be) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), ft === null)) throw Error(M(349));
        30 & Li || Tw(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Qb(Ew.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ca(9, Rw.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = er(),
        t = ft.identifierPrefix;
      if (Be) {
        var n = Sr,
          r = wr;
        (n = (r & ~(1 << (32 - Vn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = aa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = s2++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  f2 = {
    readContext: Sn,
    useCallback: Vw,
    useContext: Sn,
    useEffect: wp,
    useImperativeHandle: Lw,
    useInsertionEffect: Ow,
    useLayoutEffect: Iw,
    useMemo: Aw,
    useReducer: Xd,
    useRef: _w,
    useState: function () {
      return Xd(la);
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = kn();
      return Dw(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = Xd(la)[0],
        t = kn().memoizedState;
      return [e, t];
    },
    useMutableSource: kw,
    useSyncExternalStore: Cw,
    useId: zw,
    unstable_isNewReconciler: !1,
  },
  d2 = {
    readContext: Sn,
    useCallback: Vw,
    useContext: Sn,
    useEffect: wp,
    useImperativeHandle: Lw,
    useInsertionEffect: Ow,
    useLayoutEffect: Iw,
    useMemo: Aw,
    useReducer: Yd,
    useRef: _w,
    useState: function () {
      return Yd(la);
    },
    useDebugValue: Sp,
    useDeferredValue: function (e) {
      var t = kn();
      return it === null ? (t.memoizedState = e) : Dw(t, it.memoizedState, e);
    },
    useTransition: function () {
      var e = Yd(la)[0],
        t = kn().memoizedState;
      return [e, t];
    },
    useMutableSource: kw,
    useSyncExternalStore: Cw,
    useId: zw,
    unstable_isNewReconciler: !1,
  };
function Ao(e, t) {
  try {
    var n = "",
      r = t;
    do (n += jO(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Kd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ih(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var h2 = typeof WeakMap == "function" ? WeakMap : Map;
function jw(e, t, n) {
  (n = kr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      pc || ((pc = !0), (Nh = r)), Ih(e, t);
    }),
    n
  );
}


//delete from here

// function Hw(e, t, n) {
//   (n = kr(-1, n)), (n.tag = 3);
//   var r = e.type.getDerivedStateFromError;
//   if (typeof r == "function") {
//     var i = t.value;
//     (n.payload = function () {
//       return r(i);
//     }),
//       (n.callback = function () {
//         Ih(e, t);
//       });
//   }
//   var o = e.stateNode;
//   return (
//     o !== null &&
//       typeof o.componentDidCatch == "function" &&
//       (n.callback = function () {
//         Ih(e, t),
//           typeof r != "function" &&
//             (ti === null ? (ti = new Set([this])) : ti.add(this));
//         var s = t.stack;
//         this.componentDidCatch(t.value, {
//           componentStack: s !== null ? s : "",
//         });
//       }),
//     n
//   );
// }

// to here



function Zb(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new h2();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = E2.bind(null, e, t, n)), t.then(e, e));
}
function Jb(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ex(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = kr(-1, 1)), (t.tag = 2), ei(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var p2 = Fr.ReactCurrentOwner,
  Wt = !1;
function At(e, t, n, r) {
  t.child = e === null ? ww(t, null, n, r) : Lo(t, e.child, n, r);
}
function tx(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Po(t, i),
    (r = bp(e, t, n, r, o, i)),
    (n = xp()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Er(e, t, i))
      : (Be && n && ap(t), (t.flags |= 1), At(e, t, r, i), t.child)
  );
}
function nx(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !_p(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ww(e, t, o, r, i))
      : ((e = ql(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ta), n(s, r) && e.ref === t.ref)
    )
      return Er(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ri(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ww(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ta(o, r) && e.ref === t.ref) {
      if (((Wt = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), Er(e, t, i);
      131072 & e.flags && (Wt = !0);
    }
  }
  return Mh(e, t, n, r, i);
}
function Uw(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Pe(Co, en),
        (en |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Pe(Co, en),
          (en |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        Pe(Co, en),
        (en |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Pe(Co, en),
      (en |= r);
  return At(e, t, i, n), t.child;
}
function Gw(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mh(e, t, n, r, i) {
  var o = Gt(n) ? Ii : _t.current;
  return (
    (o = Io(t, o)),
    Po(t, i),
    (n = bp(e, t, n, r, o, i)),
    (r = xp()),
    e !== null && !Wt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Er(e, t, i))
      : (Be && r && ap(t), (t.flags |= 1), At(e, t, n, i), t.child)
  );
}
function rx(e, t, n, r, i) {
  if (Gt(n)) {
    var o = !0;
    ic(t);
  } else o = !1;
  if ((Po(t, i), t.stateNode === null))
    Wl(e, t), bw(t, n, r), Oh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Sn(c))
      : ((c = Gt(n) ? Ii : _t.current), (c = Io(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Xb(t, s, r, c)),
      (Ur = !1);
    var d = t.memoizedState;
    (s.state = d),
      cc(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ut.current || Ur
        ? (typeof u == "function" && (_h(t, n, u, r), (l = t.memoizedState)),
          (a = Ur || qb(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      vw(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : In(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = Sn(l))
        : ((l = Gt(n) ? Ii : _t.current), (l = Io(t, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Xb(t, s, r, l)),
      (Ur = !1),
      (d = t.memoizedState),
      (s.state = d),
      cc(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || Ut.current || Ur
      ? (typeof p == "function" && (_h(t, n, p, r), (y = t.memoizedState)),
        (c = Ur || qb(t, n, c, r, d, y, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Lh(e, t, n, r, o, i);
}
function Lh(e, t, n, r, i, o) {
  Gw(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && jb(t, n, !1), Er(e, t, o);
  (r = t.stateNode), (p2.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Lo(t, e.child, null, o)), (t.child = Lo(t, null, a, o)))
      : At(e, t, a, o),
    (t.memoizedState = r.state),
    i && jb(t, n, !0),
    t.child
  );
}
function qw(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Nb(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Nb(e, t.context, !1),
    mp(e, t.containerInfo);
}
function ix(e, t, n, r, i) {
  return Mo(), cp(i), (t.flags |= 256), At(e, t, n, r), t.child;
}
var Vh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ah(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Xw(e, t, n) {
  var r,
    i = t.pendingProps,
    o = Ne.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    Pe(Ne, 1 & o),
    e === null)
  )
    return (
      Fh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Fc(a, i, 0, null)),
              (e = Oi(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ah(n)),
              (t.memoizedState = Vh),
              e)
            : kp(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return m2(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = ri(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = ri(r, s)) : ((s = Oi(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Ah(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vh),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = ri(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function kp(e, t) {
  return (
    (t = Fc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vl(e, t, n, r) {
  return (
    r !== null && cp(r),
    Lo(t, e.child, null, n),
    (e = kp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function m2(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Kd(Error(M(422)))), Vl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Fc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Oi(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && Lo(t, e.child, null, s),
        (t.child.memoizedState = Ah(s)),
        (t.memoizedState = Vh),
        o);
  if (!(1 & t.mode)) return Vl(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(M(419))), (r = Kd(o, r, void 0)), Vl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Wt || a)) {
    if (((r = ft), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Rr(e, i), An(r, e, i, -1));
    }
    return Pp(), (r = Kd(Error(M(421)))), Vl(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = F2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (tn = Jr(i.nextSibling)),
      (nn = t),
      (Be = !0),
      (Ln = null),
      e !== null &&
        ((yn[bn++] = wr),
        (yn[bn++] = Sr),
        (yn[bn++] = Mi),
        (wr = e.id),
        (Sr = e.overflow),
        (Mi = t)),
      (t = kp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ox(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ph(e.return, t, n);
}
function Qd(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Yw(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((At(e, t, r.children, n), (r = Ne.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ox(e, n, t);
        else if (e.tag === 19) ox(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Pe(Ne, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && uc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Qd(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && uc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Qd(t, !0, n, null, o);
        break;
      case "together":
        Qd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Er(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ri(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ri(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function g2(e, t, n) {
  switch (t.tag) {
    case 3:
      qw(t), Mo();
      break;
    case 5:
      Sw(t);
      break;
    case 1:
      Gt(t.type) && ic(t);
      break;
    case 4:
      mp(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      Pe(ac, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Pe(Ne, 1 & Ne.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Xw(e, t, n)
          : (Pe(Ne, 1 & Ne.current),
            (e = Er(e, t, n)),
            e !== null ? e.sibling : null);
      Pe(Ne, 1 & Ne.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return Yw(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Pe(Ne, Ne.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Uw(e, t, n);
  }
  return Er(e, t, n);
}
var Kw, Dh, Qw, Zw;
Kw = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Dh = function () {};
Qw = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pi(rr.current);
    var o = null;
    switch (n) {
      case "input":
        (i = oh(e, i)), (r = oh(e, r)), (o = []);
        break;
      case "select":
        (i = He({}, i, { value: void 0 })),
          (r = He({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = lh(e, i)), (r = lh(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = nc);
    }
    uh(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Xs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Xs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && Le("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Zw = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Is(e, t) {
  if (!Be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ft(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function v2(e, t, n) {
  var r = t.pendingProps;
  switch ((lp(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ft(t), null;
    case 1:
      return Gt(t.type) && rc(), Ft(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vo(),
        Ve(Ut),
        Ve(_t),
        vp(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          (Ml(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), Ln !== null && (Wh(Ln), (Ln = null)))),
        Dh(e, t),
        Ft(t),
        null
      );
    case 5:
      gp(t);
      var i = Pi(sa.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Qw(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Ft(t), null;
        }
        if (((e = Pi(rr.current)), Ml(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[tr] = t), (r[ia] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              Le("cancel", r), Le("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < zs.length; i++) Le(zs[i], r);
              break;
            case "source":
              Le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Le("error", r), Le("load", r);
              break;
            case "details":
              Le("toggle", r);
              break;
            case "input":
              hb(r, o), Le("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Le("invalid", r);
              break;
            case "textarea":
              mb(r, o), Le("invalid", r);
          }
          uh(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Il(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Il(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Xs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Le("scroll", r);
            }
          switch (n) {
            case "input":
              xl(r), pb(r, o, !0);
              break;
            case "textarea":
              xl(r), gb(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = nc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Tx(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[tr] = t),
            (e[ia] = r),
            Kw(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = fh(n, r)), n)) {
              case "dialog":
                Le("cancel", e), Le("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < zs.length; i++) Le(zs[i], e);
                i = r;
                break;
              case "source":
                Le("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Le("error", e), Le("load", e), (i = r);
                break;
              case "details":
                Le("toggle", e), (i = r);
                break;
              case "input":
                hb(e, r), (i = oh(e, r)), Le("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = He({}, r, { value: void 0 })),
                  Le("invalid", e);
                break;
              case "textarea":
                mb(e, r), (i = lh(e, r)), Le("invalid", e);
                break;
              default:
                i = r;
            }
            uh(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Fx(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Rx(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ys(e, l)
                    : typeof l == "number" && Ys(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Xs.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Le("scroll", e)
                      : l != null && qh(e, o, l, s));
              }
            switch (n) {
              case "input":
                xl(e), pb(e, r, !1);
                break;
              case "textarea":
                xl(e), gb(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ii(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? To(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      To(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = nc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ft(t), null;
    case 6:
      if (e && t.stateNode != null) Zw(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Pi(sa.current)), Pi(rr.current), Ml(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[tr] = t),
            (o = r.nodeValue !== n) && ((e = nn), e !== null))
          )
            switch (e.tag) {
              case 3:
                Il(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Il(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[tr] = t),
            (t.stateNode = r);
      }
      return Ft(t), null;
    case 13:
      if (
        (Ve(Ne),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Be && tn !== null && 1 & t.mode && !(128 & t.flags))
          mw(), Mo(), (t.flags |= 98560), (o = !1);
        else if (((o = Ml(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(M(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(M(317));
            o[tr] = t;
          } else
            Mo(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          Ft(t), (o = !1);
        } else Ln !== null && (Wh(Ln), (Ln = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & Ne.current ? ot === 0 && (ot = 3) : Pp())),
          t.updateQueue !== null && (t.flags |= 4),
          Ft(t),
          null);
    case 4:
      return (
        Vo(), Dh(e, t), e === null && na(t.stateNode.containerInfo), Ft(t), null
      );
    case 10:
      return dp(t.type._context), Ft(t), null;
    case 17:
      return Gt(t.type) && rc(), Ft(t), null;
    case 19:
      if ((Ve(Ne), (o = t.memoizedState), o === null)) return Ft(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) Is(o, !1);
        else {
          if (ot !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = uc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Is(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Pe(Ne, (1 & Ne.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ze() > Do &&
            ((t.flags |= 128), (r = !0), Is(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = uc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Is(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Be)
            )
              return Ft(t), null;
          } else
            2 * Ze() - o.renderingStartTime > Do &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Is(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ze()),
          (t.sibling = null),
          (n = Ne.current),
          Pe(Ne, r ? (1 & n) | 2 : 1 & n),
          t)
        : (Ft(t), null);
    case 22:
    case 23:
      return (
        Fp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & en && (Ft(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : Ft(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function y2(e, t) {
  switch ((lp(t), t.tag)) {
    case 1:
      return (
        Gt(t.type) && rc(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Vo(),
        Ve(Ut),
        Ve(_t),
        vp(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return gp(t), null;
    case 13:
      if (
        (Ve(Ne), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Mo();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return Ve(Ne), null;
    case 4:
      return Vo(), null;
    case 10:
      return dp(t.type._context), null;
    case 22:
    case 23:
      return Fp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Al = !1,
  Pt = !1,
  b2 = typeof WeakSet == "function" ? WeakSet : Set,
  $ = null;
function ko(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        qe(e, t, r);
      }
    else n.current = null;
}
function Jw(e, t, n) {
  try {
    n();
  } catch (r) {
    qe(e, t, r);
  }
}
var sx = !1;
function x2(e, t) {
  if (((wh = Jl), (e = nw()), sp(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || F;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Sh = { focusedElem: e, selectionRange: n }, Jl = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var y = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    b = y.memoizedState,
                    h = t.stateNode,
                    m = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : In(t.type, g),
                      b
                    );
                  h.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (S) {
          qe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (y = sx), (sx = !1), y;
}
function Us(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Jw(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Rc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function zh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function eS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), eS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[tr], delete t[ia], delete t[Th], delete t[n2], delete t[r2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function tS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ax(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || tS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Bh(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = nc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bh(e, t, n), e = e.sibling; e !== null; ) Bh(e, t, n), (e = e.sibling);
}
function $h(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($h(e, t, n), e = e.sibling; e !== null; ) $h(e, t, n), (e = e.sibling);
}
var vt = null,
  Mn = !1;
function Hr(e, t, n) {
  for (n = n.child; n !== null; ) nS(e, t, n), (n = n.sibling);
}
function nS(e, t, n) {
  if (nr && typeof nr.onCommitFiberUnmount == "function")
    try {
      nr.onCommitFiberUnmount(yc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pt || ko(n, t);
    case 6:
      var r = vt,
        i = Mn;
      (vt = null),
        Hr(e, t, n),
        (vt = r),
        (Mn = i),
        vt !== null &&
          (Mn
            ? ((e = vt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : vt.removeChild(n.stateNode));
      break;
    case 18:
      vt !== null &&
        (Mn
          ? ((e = vt),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wd(e.parentNode, n)
              : e.nodeType === 1 && Wd(e, n),
            Js(e))
          : Wd(vt, n.stateNode));
      break;
    case 4:
      (r = vt),
        (i = Mn),
        (vt = n.stateNode.containerInfo),
        (Mn = !0),
        Hr(e, t, n),
        (vt = r),
        (Mn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && Jw(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Hr(e, t, n);
      break;
    case 1:
      if (
        !Pt &&
        (ko(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          qe(n, t, a);
        }
      Hr(e, t, n);
      break;
    case 21:
      Hr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((Pt = (r = Pt) || n.memoizedState !== null), Hr(e, t, n), (Pt = r))
        : Hr(e, t, n);
      break;
    default:
      Hr(e, t, n);
  }
}
function lx(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new b2()),
      t.forEach(function (r) {
        var i = P2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function On(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (vt = a.stateNode), (Mn = !1);
              break e;
            case 3:
              (vt = a.stateNode.containerInfo), (Mn = !0);
              break e;
            case 4:
              (vt = a.stateNode.containerInfo), (Mn = !0);
              break e;
          }
          a = a.return;
        }
        if (vt === null) throw Error(M(160));
        nS(o, s, i), (vt = null), (Mn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        qe(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) rS(t, e), (t = t.sibling);
}
function rS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((On(t, e), Jn(e), 4 & r)) {
        try {
          Us(3, e, e.return), Rc(3, e);
        } catch (g) {
          qe(e, e.return, g);
        }
        try {
          Us(5, e, e.return);
        } catch (g) {
          qe(e, e.return, g);
        }
      }
      break;
    case 1:
      On(t, e), Jn(e), 512 & r && n !== null && ko(n, n.return);
      break;
    case 5:
      if (
        (On(t, e),
        Jn(e),
        512 & r && n !== null && ko(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Ys(i, "");
        } catch (g) {
          qe(e, e.return, g);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && kx(i, o),
              fh(a, s);
            var c = fh(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Fx(i, f)
                : u === "dangerouslySetInnerHTML"
                ? Rx(i, f)
                : u === "children"
                ? Ys(i, f)
                : qh(i, u, f, c);
            }
            switch (a) {
              case "input":
                sh(i, o);
                break;
              case "textarea":
                Cx(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? To(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? To(i, !!o.multiple, o.defaultValue, !0)
                      : To(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ia] = o;
          } catch (g) {
            qe(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((On(t, e), Jn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          qe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (On(t, e), Jn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Js(t.containerInfo);
        } catch (g) {
          qe(e, e.return, g);
        }
      break;
    case 4:
      On(t, e), Jn(e);
      break;
    case 13:
      On(t, e),
        Jn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Rp = Ze())),
        4 & r && lx(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((Pt = (c = Pt) || u), On(t, e), (Pt = c)) : On(t, e),
        Jn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for ($ = e, u = e.child; u !== null; ) {
            for (f = $ = u; $ !== null; ) {
              switch (((d = $), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Us(4, d, d.return);
                  break;
                case 1:
                  ko(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      qe(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ko(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ux(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), ($ = p)) : ux(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Ex("display", s)));
              } catch (g) {
                qe(e, e.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (g) {
                qe(e, e.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      On(t, e), Jn(e), 4 & r && lx(e);
      break;
    case 21:
      break;
    default:
      On(t, e), Jn(e);
  }
}
function Jn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (tS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Ys(i, ""), (r.flags &= -33));
          var o = ax(e);
          $h(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = ax(e);
          Bh(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      qe(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function w2(e, t, n) {
  ($ = e), iS(e, t, n);
}
function iS(e, t, n) {
  for (var r = (1 & e.mode) !== 0; $ !== null; ) {
    var i = $,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Al;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Pt;
        a = Al;
        var c = Pt;
        if (((Al = s), (Pt = l) && !c))
          for ($ = i; $ !== null; )
            (s = $),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? fx(i)
                : l !== null
                ? ((l.return = s), ($ = l))
                : fx(i);
        for (; o !== null; ) ($ = o), iS(o, t, n), (o = o.sibling);
        ($ = i), (Al = a), (Pt = c);
      }
      cx(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), ($ = o))
        : cx(e, t, n);
  }
}
function cx(e) {
  for (; $ !== null; ) {
    var t = $;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pt || Rc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !Pt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : In(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Gb(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gb(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && Js(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        Pt || (512 & t.flags && zh(t));
      } catch (d) {
        qe(t, t.return, d);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function ux(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function fx(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Rc(4, t);
          } catch (l) {
            qe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              qe(t, i, l);
            }
          }
          var o = t.return;
          try {
            zh(t);
          } catch (l) {
            qe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            zh(t);
          } catch (l) {
            qe(t, s, l);
          }
      }
    } catch (l) {
      qe(t, t.return, l);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), ($ = a);
      break;
    }
    $ = t.return;
  }
}
var S2 = Math.ceil,
  hc = Fr.ReactCurrentDispatcher,
  Cp = Fr.ReactCurrentOwner,
  wn = Fr.ReactCurrentBatchConfig,
  ve = 0,
  ft = null,
  nt = null,
  yt = 0,
  en = 0,
  Co = ai(0),
  ot = 0,
  ua = null,
  Vi = 0,
  Ec = 0,
  Tp = 0,
  Gs = null,
  Ht = null,
  Rp = 0,
  Do = 1 / 0,
  br = null,
  pc = !1,
  Nh = null,
  ti = null,
  Dl = !1,
  Yr = null,
  mc = 0,
  qs = 0,
  jh = null,
  Ul = -1,
  Gl = 0;
function Dt() {
  return 6 & ve ? Ze() : Ul !== -1 ? Ul : (Ul = Ze());
}
function ni(e) {
  return 1 & e.mode
    ? 2 & ve && yt !== 0
      ? yt & -yt
      : o2.transition !== null
      ? (Gl === 0 && (Gl = $x()), Gl)
      : ((e = ke),
        e !== 0 || ((e = F.event), (e = e === void 0 ? 16 : qx(e.type))),
        e)
    : 1;
}
function An(e, t, n, r) {
  if (50 < qs) throw ((qs = 0), (jh = null), Error(M(185)));
  fa(e, n, r),
    (2 & ve && e === ft) ||
      (e === ft && (!(2 & ve) && (Ec |= n), ot === 4 && qr(e, yt)),
      qt(e, r),
      n === 1 && ve === 0 && !(1 & t.mode) && ((Do = Ze() + 500), kc && li()));
}
function qt(e, t) {
  var n = e.callbackNode;
  aI(e, t);
  var r = Zl(e, e === ft ? yt : 0);
  if (r === 0)
    n !== null && bb(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && bb(n), t === 1))
      e.tag === 0 ? i2(dx.bind(null, e)) : dw(dx.bind(null, e)),
        e2(function () {
          !(6 & ve) && li();
        }),
        (n = null);
    else {
      switch (Nx(r)) {
        case 1:
          n = Zh;
          break;
        case 4:
          n = zx;
          break;
        case 16:
          n = Ql;
          break;
        case 536870912:
          n = Bx;
          break;
        default:
          n = Ql;
      }
      n = dS(n, oS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function oS(e, t) {
  if (((Ul = -1), (Gl = 0), 6 & ve)) throw Error(M(327));
  var n = e.callbackNode;
  if (_o() && e.callbackNode !== n) return null;
  var r = Zl(e, e === ft ? yt : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = gc(e, r);
  else {
    t = r;
    var i = ve;
    ve |= 2;
    var o = aS();
    (ft === e && yt === t) || ((br = null), (Do = Ze() + 500), _i(e, t));
    do
      try {
        T2();
        break;
      } catch (a) {
        sS(e, a);
      }
    while (1);
    fp(),
      (hc.current = o),
      (ve = i),
      nt !== null ? (t = 0) : ((ft = null), (yt = 0), (t = ot));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = gh(e)), i !== 0 && ((r = i), (t = Hh(e, i)))), t === 1)
    )
      throw ((n = ua), _i(e, 0), qr(e, r), qt(e, Ze()), n);
    if (t === 6) qr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !k2(i) &&
          ((t = gc(e, r)),
          t === 2 && ((o = gh(e)), o !== 0 && ((r = o), (t = Hh(e, o)))),
          t === 1))
      )
        throw ((n = ua), _i(e, 0), qr(e, r), qt(e, Ze()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Ri(e, Ht, br);
          break;
        case 3:
          if (
            (qr(e, r), (130023424 & r) === r && ((t = Rp + 500 - Ze()), 10 < t))
          ) {
            if (Zl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Dt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ch(Ri.bind(null, e, Ht, br), t);
            break;
          }
          Ri(e, Ht, br);
          break;
        case 4:
          if ((qr(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Vn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ze() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * S2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ch(Ri.bind(null, e, Ht, br), r);
            break;
          }
          Ri(e, Ht, br);
          break;
        case 5:
          Ri(e, Ht, br);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return qt(e, Ze()), e.callbackNode === n ? oS.bind(null, e) : null;
}
function Hh(e, t) {
  var n = Gs;
  return (
    e.current.memoizedState.isDehydrated && (_i(e, t).flags |= 256),
    (e = gc(e, t)),
    e !== 2 && ((t = Ht), (Ht = n), t !== null && Wh(t)),
    e
  );
}
function Wh(e) {
  Ht === null ? (Ht = e) : Ht.push.apply(Ht, e);
}
function k2(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Dn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function qr(e, t) {
  for (
    t &= ~Tp,
      t &= ~Ec,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Vn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function dx(e) {
  if (6 & ve) throw Error(M(327));
  _o();
  var t = Zl(e, 0);
  if (!(1 & t)) return qt(e, Ze()), null;
  var n = gc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gh(e);
    r !== 0 && ((t = r), (n = Hh(e, r)));
  }
  if (n === 1) throw ((n = ua), _i(e, 0), qr(e, t), qt(e, Ze()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ri(e, Ht, br),
    qt(e, Ze()),
    null
  );
}
function Ep(e, t) {
  var n = ve;
  ve |= 1;
  try {
    return e(t);
  } finally {
    (ve = n), ve === 0 && ((Do = Ze() + 500), kc && li());
  }
}
function Ai(e) {
  Yr !== null && Yr.tag === 0 && !(6 & ve) && _o();
  var t = ve;
  ve |= 1;
  var n = wn.transition,
    r = ke;
  try {
    if (((wn.transition = null), (ke = 1), e)) return e();
  } finally {
    (ke = r), (wn.transition = n), (ve = t), !(6 & ve) && li();
  }
}
function Fp() {
  (en = Co.current), Ve(Co);
}
function _i(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), JI(n)), nt !== null))
    for (n = nt.return; n !== null; ) {
      var r = n;
      switch ((lp(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rc();
          break;
        case 3:
          Vo(), Ve(Ut), Ve(_t), vp();
          break;
        case 5:
          gp(r);
          break;
        case 4:
          Vo();
          break;
        case 13:
          Ve(Ne);
          break;
        case 19:
          Ve(Ne);
          break;
        case 10:
          dp(r.type._context);
          break;
        case 22:
        case 23:
          Fp();
      }
      n = n.return;
    }
  if (
    ((ft = e),
    (nt = e = ri(e.current, null)),
    (yt = en = t),
    (ot = 0),
    (ua = null),
    (Tp = Ec = Vi = 0),
    (Ht = Gs = null),
    Fi !== null)
  ) {
    for (t = 0; t < Fi.length; t++)
      if (((n = Fi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Fi = null;
  }
  return e;
}
function sS(e, t) {
  do {
    var n = nt;
    try {
      if ((fp(), (jl.current = dc), fc)) {
        for (var r = je.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        fc = !1;
      }
      if (
        ((Li = 0),
        (ut = it = je = null),
        (Ws = !1),
        (aa = 0),
        (Cp.current = null),
        n === null || n.return === null)
      ) {
        (ot = 1), (ua = t), (nt = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = yt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = Jb(s);
          if (p !== null) {
            (p.flags &= -257),
              ex(p, s, a, o, t),
              1 & p.mode && Zb(o, c, t),
              (t = p),
              (l = c);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else y.add(l);
            break e;
          }
          if (!(1 & t)) {
            Zb(o, c, t), Pp();
            break e;
          }
          l = Error(M(426));
        } else if (Be && 1 & a.mode) {
          var b = Jb(s);
          if (b !== null) {
            !(65536 & b.flags) && (b.flags |= 256),
              ex(b, s, a, o, t),
              cp(Ao(l, a));
            break e;
          }
        }
        (o = l = Ao(l, a)),
          ot !== 4 && (ot = 2),
          Gs === null ? (Gs = [o]) : Gs.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = jw(o, l, t);
              Ub(o, h);
              break e;
            case 1:
              a = l;
              var m = o.type,
                v = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (ti === null || !ti.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Hw(o, a, t);
                Ub(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      cS(n);
    } catch (k) {
      (t = k), nt === n && n !== null && (nt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function aS() {
  var e = hc.current;
  return (hc.current = dc), e === null ? dc : e;
}
function Pp() {
  (ot !== 0 && ot !== 3 && ot !== 2) || (ot = 4),
    ft === null || (!(268435455 & Vi) && !(268435455 & Ec)) || qr(ft, yt);
}
function gc(e, t) {
  var n = ve;
  ve |= 2;
  var r = aS();
  (ft === e && yt === t) || ((br = null), _i(e, t));
  do
    try {
      C2();
      break;
    } catch (i) {
      sS(e, i);
    }
  while (1);
  if ((fp(), (ve = n), (hc.current = r), nt !== null)) throw Error(M(261));
  return (ft = null), (yt = 0), ot;
}
function C2() {
  for (; nt !== null; ) lS(nt);
}
function T2() {
  for (; nt !== null && !ZO(); ) lS(nt);
}
function lS(e) {
  var t = fS(e.alternate, e, en);
  (e.memoizedProps = e.pendingProps),
    t === null ? cS(e) : (nt = t),
    (Cp.current = null);
}
function cS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = y2(n, t)), n !== null)) {
        (n.flags &= 32767), (nt = n);
        return;
      }
      if (e === null) {
        (ot = 6), (nt = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = v2(n, t, en)), n !== null)) {
      nt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      nt = t;
      return;
    }
    nt = t = e;
  } while (t !== null);
  ot === 0 && (ot = 5);
}
function Ri(e, t, n) {
  var r = ke,
    i = wn.transition;
  try {
    (wn.transition = null), (ke = 1), R2(e, t, n, r);
  } finally {
    (wn.transition = i), (ke = r);
  }
  return null;
}
function R2(e, t, n, r) {
  do _o();
  while (Yr !== null);
  if (6 & ve) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (lI(e, o),
    e === ft && ((nt = ft = null), (yt = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      Dl ||
      ((Dl = !0),
      dS(Ql, function () {
        return _o(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = wn.transition), (wn.transition = null);
    var s = ke;
    ke = 1;
    var a = ve;
    (ve |= 4),
      (Cp.current = null),
      x2(e, n),
      rS(n, e),
      XI(Sh),
      (Jl = !!wh),
      (Sh = wh = null),
      (e.current = n),
      w2(n, e, i),
      JO(),
      (ve = a),
      (ke = s),
      (wn.transition = o);
  } else e.current = n;
  if (
    (Dl && ((Dl = !1), (Yr = e), (mc = i)),
    (o = e.pendingLanes),
    o === 0 && (ti = null),
    nI(n.stateNode, r),
    qt(e, Ze()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (pc) throw ((pc = !1), (e = Nh), (Nh = null), e);
  return (
    1 & mc && e.tag !== 0 && _o(),
    (o = e.pendingLanes),
    1 & o ? (e === jh ? qs++ : ((qs = 0), (jh = e))) : (qs = 0),
    li(),
    null
  );
}
function _o() {
  if (Yr !== null) {
    var e = Nx(mc),
      t = wn.transition,
      n = ke;
    try {
      if (((wn.transition = null), (ke = 16 > e ? 16 : e), Yr === null))
        var r = !1;
      else {
        if (((e = Yr), (Yr = null), (mc = 0), 6 & ve)) throw Error(M(331));
        var i = ve;
        for (ve |= 4, $ = e.current; $ !== null; ) {
          var o = $,
            s = o.child;
          if (16 & $.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for ($ = c; $ !== null; ) {
                  var u = $;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Us(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), ($ = f);
                  else
                    for (; $ !== null; ) {
                      u = $;
                      var d = u.sibling,
                        p = u.return;
                      if ((eS(u), u === c)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), ($ = d);
                        break;
                      }
                      $ = p;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var b = g.sibling;
                    (g.sibling = null), (g = b);
                  } while (g !== null);
                }
              }
              $ = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), ($ = s);
          else
            e: for (; $ !== null; ) {
              if (((o = $), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Us(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), ($ = h);
                break e;
              }
              $ = o.return;
            }
        }
        var m = e.current;
        for ($ = m; $ !== null; ) {
          s = $;
          var v = s.child;
          if (2064 & s.subtreeFlags && v !== null) (v.return = s), ($ = v);
          else
            e: for (s = m; $ !== null; ) {
              if (((a = $), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rc(9, a);
                  }
                } catch (k) {
                  qe(a, a.return, k);
                }
              if (a === s) {
                $ = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), ($ = S);
                break e;
              }
              $ = a.return;
            }
        }
        if (
          ((ve = i), li(), nr && typeof nr.onPostCommitFiberRoot == "function")
        )
          try {
            nr.onPostCommitFiberRoot(yc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ke = n), (wn.transition = t);
    }
  }
  return !1;
}
function hx(e, t, n) {
  (t = Ao(n, t)),
    (t = jw(e, t, 1)),
    (e = ei(e, t, 1)),
    (t = Dt()),
    e !== null && (fa(e, 1, t), qt(e, t));
}
function qe(e, t, n) {
  if (e.tag === 3) hx(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hx(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ti === null || !ti.has(r)))
        ) {
          (e = Ao(n, e)),
            (e = Hw(t, e, 1)),
            (t = ei(t, e, 1)),
            (e = Dt()),
            t !== null && (fa(t, 1, e), qt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function E2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ft === e &&
      (yt & n) === n &&
      (ot === 4 || (ot === 3 && (130023424 & yt) === yt && 500 > Ze() - Rp)
        ? _i(e, 0)
        : (Tp |= n)),
    qt(e, t);
}
function uS(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = kl), (kl <<= 1), !(130023424 & kl) && (kl = 4194304))
      : (t = 1));
  var n = Dt();
  (e = Rr(e, t)), e !== null && (fa(e, t, n), qt(e, n));
}
function F2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), uS(e, n);
}
function P2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), uS(e, n);
}
var fS;
fS = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ut.current) Wt = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return (Wt = !1), g2(e, t, n);
      Wt = (131072 & e.flags) !== 0;
    }
  else (Wt = !1), Be && 1048576 & t.flags && hw(t, sc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wl(e, t), (e = t.pendingProps);
      var i = Io(t, _t.current);
      Po(t, n), (i = bp(null, t, r, e, i, n));
      var o = xp();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Gt(r) ? ((o = !0), ic(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            pp(t),
            (i.updater = Cc),
            (t.stateNode = i),
            (i._reactInternals = t),
            Oh(t, r, e, n),
            (t = Lh(null, t, r, !0, o, n)))
          : ((t.tag = 0), Be && o && ap(t), At(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = O2(r)),
          (e = In(r, e)),
          i)
        ) {
          case 0:
            t = Mh(null, t, r, e, n);
            break e;
          case 1:
            t = rx(null, t, r, e, n);
            break e;
          case 11:
            t = tx(null, t, r, e, n);
            break e;
          case 14:
            t = nx(null, t, r, In(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        Mh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        rx(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((qw(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          vw(e, t),
          cc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = Ao(Error(M(423)), t)), (t = ix(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = Ao(Error(M(424)), t)), (t = ix(e, t, r, n, i));
            break e;
          }
          for (
            tn = Jr(t.stateNode.containerInfo.firstChild),
              nn = t,
              Be = !0,
              Ln = null,
              n = ww(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Mo(), r === i)) {
            t = Er(e, t, n);
            break e;
          }
          At(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Sw(t),
        e === null && Fh(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        kh(r, i) ? (s = null) : o !== null && kh(r, o) && (t.flags |= 32),
        Gw(e, t),
        At(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Fh(t), null;
    case 13:
      return Xw(e, t, n);
    case 4:
      return (
        mp(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Lo(t, null, r, n)) : At(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        tx(e, t, r, i, n)
      );
    case 7:
      return At(e, t, t.pendingProps, n), t.child;
    case 8:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return At(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          Pe(ac, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Dn(o.value, s)) {
            if (o.children === i.children && !Ut.current) {
              t = Er(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = kr(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Ph(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Ph(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        At(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Po(t, n),
        (i = Sn(i)),
        (r = r(i)),
        (t.flags |= 1),
        At(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = In(r, t.pendingProps)),
        (i = In(r.type, i)),
        nx(e, t, r, i, n)
      );
    case 15:
      return Ww(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : In(r, i)),
        Wl(e, t),
        (t.tag = 1),
        Gt(r) ? ((e = !0), ic(t)) : (e = !1),
        Po(t, n),
        bw(t, r, i),
        Oh(t, r, i, n),
        Lh(null, t, r, !0, e, n)
      );
    case 19:
      return Yw(e, t, n);
    case 22:
      return Uw(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function dS(e, t) {
  return Dx(e, t);
}
function _2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function xn(e, t, n, r) {
  return new _2(e, t, n, r);
}
function _p(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function O2(e) {
  if (typeof e == "function") return _p(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yh)) return 11;
    if (e === Kh) return 14;
  }
  return 2;
}
function ri(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = xn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ql(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) _p(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case po:
        return Oi(n.children, i, o, t);
      case Xh:
        (s = 8), (i |= 8);
        break;
      case th:
        return (
          (e = xn(12, n, t, 2 | i)), (e.elementType = th), (e.lanes = o), e
        );
      case nh:
        return (e = xn(13, n, t, i)), (e.elementType = nh), (e.lanes = o), e;
      case rh:
        return (e = xn(19, n, t, i)), (e.elementType = rh), (e.lanes = o), e;
      case xx:
        return Fc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case yx:
              s = 10;
              break e;
            case bx:
              s = 9;
              break e;
            case Yh:
              s = 11;
              break e;
            case Kh:
              s = 14;
              break e;
            case Wr:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = xn(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Oi(e, t, n, r) {
  return (e = xn(7, e, r, t)), (e.lanes = n), e;
}
function Fc(e, t, n, r) {
  return (
    (e = xn(22, e, r, t)),
    (e.elementType = xx),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zd(e, t, n) {
  return (e = xn(6, e, null, t)), (e.lanes = n), e;
}
function Jd(e, t, n) {
  return (
    (t = xn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function I2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ad(0)),
    (this.expirationTimes = Ad(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ad(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Op(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new I2(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = xn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pp(o),
    e
  );
}
function M2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function hS(e) {
  if (!e) return oi;
  e = e._reactInternals;
  e: {
    if (zi(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Gt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Gt(n)) return fw(e, n, t);
  }
  return t;
}
function pS(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Op(n, r, !0, e, i, o, s, a, l)),
    (e.context = hS(null)),
    (n = e.current),
    (r = Dt()),
    (i = ni(n)),
    (o = kr(r, i)),
    (o.callback = t ?? null),
    ei(n, o, i),
    (e.current.lanes = i),
    fa(e, i, r),
    qt(e, r),
    e
  );
}
function Pc(e, t, n, r) {
  var i = t.current,
    o = Dt(),
    s = ni(i);
  return (
    (n = hS(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = kr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ei(i, t, s)),
    e !== null && (An(e, i, s, o), Nl(e, i, s)),
    s
  );
}
function vc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function px(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ip(e, t) {
  px(e, t), (e = e.alternate) && px(e, t);
}
function L2() {
  return null;
}
var mS =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Mp(e) {
  this._internalRoot = e;
}
_c.prototype.render = Mp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Pc(e, t, null, null);
};
_c.prototype.unmount = Mp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ai(function () {
      Pc(null, e, null, null);
    }),
      (t[Tr] = null);
  }
};
function _c(e) {
  this._internalRoot = e;
}
_c.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Wx();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gr.length && t !== 0 && t < Gr[n].priority; n++);
    Gr.splice(n, 0, e), n === 0 && Gx(e);
  }
};
function Lp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Oc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function mx() {}
function V2(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = vc(s);
        o.call(c);
      };
    }
    var s = pS(t, r, e, 0, null, !1, !1, "", mx);
    return (
      (e._reactRootContainer = s),
      (e[Tr] = s.current),
      na(e.nodeType === 8 ? e.parentNode : e),
      Ai(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = vc(l);
      a.call(c);
    };
  }
  var l = Op(e, 0, !1, null, null, !1, !1, "", mx);
  return (
    (e._reactRootContainer = l),
    (e[Tr] = l.current),
    na(e.nodeType === 8 ? e.parentNode : e),
    Ai(function () {
      Pc(t, l, n, r);
    }),
    l
  );
}
function Ic(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = vc(s);
        a.call(l);
      };
    }
    Pc(t, s, e, i);
  } else s = V2(n, t, e, i, r);
  return vc(s);
}
jx = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ds(t.pendingLanes);
        n !== 0 &&
          (Jh(t, 1 | n), qt(t, Ze()), !(6 & ve) && ((Do = Ze() + 500), li()));
      }
      break;
    case 13:
      Ai(function () {
        var r = Rr(e, 1);
        if (r !== null) {
          var i = Dt();
          An(r, e, 1, i);
        }
      }),
        Ip(e, 1);
  }
};
ep = function (e) {
  if (e.tag === 13) {
    var t = Rr(e, 134217728);
    if (t !== null) {
      var n = Dt();
      An(t, e, 134217728, n);
    }
    Ip(e, 134217728);
  }
};
Hx = function (e) {
  if (e.tag === 13) {
    var t = ni(e),
      n = Rr(e, t);
    if (n !== null) {
      var r = Dt();
      An(n, e, t, r);
    }
    Ip(e, t);
  }
};
Wx = function () {
  return ke;
};
Ux = function (e, t) {
  var n = ke;
  try {
    return (ke = e), t();
  } finally {
    ke = n;
  }
};
hh = function (e, t, n) {
  switch (t) {
    case "input":
      if ((sh(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Sc(r);
            if (!i) throw Error(M(90));
            Sx(r), sh(r, i);
          }
        }
      }
      break;
    case "textarea":
      Cx(e, n);
      break;
    case "select":
      (t = n.value), t != null && To(e, !!n.multiple, t, !1);
  }
};
Ox = Ep;
Ix = Ai;
var A2 = { usingClientEntryPoint: !1, Events: [ha, yo, Sc, Px, _x, Ep] },
  Ms = {
    findFiberByHostInstance: Ei,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  D2 = {
    bundleType: Ms.bundleType,
    version: Ms.version,
    rendererPackageName: Ms.rendererPackageName,
    rendererConfig: Ms.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vx(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ms.findFiberByHostInstance || L2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((Ls = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Ls.isDisabled && Ls.supportsFiber)
)
  try {
    (yc = Ls.inject(D2)), (nr = Ls);
  } catch {}
var Ls;
on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A2;
on.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Lp(t)) throw Error(M(200));
  return M2(e, t, null, n);
};
on.createRoot = function (e, t) {
  if (!Lp(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = mS;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Op(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tr] = t.current),
    na(e.nodeType === 8 ? e.parentNode : e),
    new Mp(t)
  );
};
on.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Vx(t)), (e = e === null ? null : e.stateNode), e;
};
on.flushSync = function (e) {
  return Ai(e);
};
on.hydrate = function (e, t, n) {
  if (!Oc(t)) throw Error(M(200));
  return Ic(null, e, t, !0, n);
};
on.hydrateRoot = function (e, t, n) {
  if (!Lp(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = mS;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = pS(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Tr] = t.current),
    na(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new _c(t);
};
on.render = function (e, t, n) {
  if (!Oc(t)) throw Error(M(200));
  return Ic(null, e, t, !1, n);
};
on.unmountComponentAtNode = function (e) {
  if (!Oc(e)) throw Error(M(40));
  return (
    !!e._reactRootContainer &&
    (Ai(function () {
      Ic(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[Tr] = null);
      });
    }),
    !0)
  );
};
on.unstable_batchedUpdates = Ep;
on.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Oc(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Ic(e, t, n, !1, r);
};
on.version = "18.2.0-next-9e3b772b8-20220608";
function gS() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gS);
    } catch (e) {
      console.error(e);
    }
}
gS();
var an = on,
  vS = an,
  z2 = an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  B2 = an.createPortal,
  $2 = an.createRoot,
  N2 = an.findDOMNode,
  j2 = an.flushSync,
  H2 = an.hydrate,
  W2 = an.hydrateRoot,
  U2 = an.render,
  G2 = an.unmountComponentAtNode,
  q2 = an.unstable_batchedUpdates,
  X2 = an.unstable_renderSubtreeIntoContainer,
  Y2 = an.version;
var Q2 = dn({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0);
      var t = class {
        constructor() {
          (this.hex = "#000000"),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0);
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a))))
          );
        }
        rgbToHex() {
          (this.hex = "#"),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b));
        }
        hexToRgb() {
          (this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5));
        }
        xyzToRgb() {
          (this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z
            ));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          (this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i);
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV)));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          (this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            (this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          (this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c);
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            p = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          (this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / p),
            (this.b0i = (d * n) / p),
            (this.b1s = f / (p + 126452)),
            (this.b1i = ((d - 769860) * n) / (p + 126452));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l);
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) (this.hsluv_s = 0), (this.hsluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hsluv_s = 0), (this.hsluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            (this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l);
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l);
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) (this.hpluv_p = 0), (this.hpluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hpluv_p = 0), (this.hpluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            (this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l);
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hpluvToRgb() {
          this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hsluvToHex() {
          this.hsluvToRgb(), this.rgbToHex();
        }
        hpluvToHex() {
          this.hpluvToRgb(), this.rgbToHex();
        }
        rgbToHsluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv();
        }
        rgbToHpluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv();
        }
        hexToHsluv() {
          this.hexToRgb(), this.rgbToHsluv();
        }
        hexToHpluv() {
          this.hexToRgb(), this.rgbToHpluv();
        }
      };
      (e.Hsluv = t),
        (t.hexChars = "0123456789abcdef"),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878);
    },
  }),
  Z2 = dn({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, p) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var y = new o(f, d || c, p),
          g = r ? r + u : u;
        return (
          c._events[g]
            ? c._events[g].fn
              ? (c._events[g] = [c._events[g], y])
              : c._events[g].push(y)
            : ((c._events[g] = y), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var p = 0, y = d.length, g = new Array(y); p < y; p++)
            g[p] = d[p].fn;
          return g;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, p, y, g) {
          var b = r ? r + u : u;
          if (!this._events[b]) return !1;
          var h = this._events[b],
            m = arguments.length,
            v,
            S;
          if (h.fn) {
            switch ((h.once && this.removeListener(u, h.fn, void 0, !0), m)) {
              case 1:
                return h.fn.call(h.context), !0;
              case 2:
                return h.fn.call(h.context, f), !0;
              case 3:
                return h.fn.call(h.context, f, d), !0;
              case 4:
                return h.fn.call(h.context, f, d, p), !0;
              case 5:
                return h.fn.call(h.context, f, d, p, y), !0;
              case 6:
                return h.fn.call(h.context, f, d, p, y, g), !0;
            }
            for (S = 1, v = new Array(m - 1); S < m; S++)
              v[S - 1] = arguments[S];
            h.fn.apply(h.context, v);
          } else {
            var k = h.length,
              w;
            for (S = 0; S < k; S++)
              switch (
                (h[S].once && this.removeListener(u, h[S].fn, void 0, !0), m)
              ) {
                case 1:
                  h[S].fn.call(h[S].context);
                  break;
                case 2:
                  h[S].fn.call(h[S].context, f);
                  break;
                case 3:
                  h[S].fn.call(h[S].context, f, d);
                  break;
                case 4:
                  h[S].fn.call(h[S].context, f, d, p);
                  break;
                default:
                  if (!v)
                    for (w = 1, v = new Array(m - 1); w < m; w++)
                      v[w - 1] = arguments[w];
                  h[S].fn.apply(h[S].context, v);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, p) {
          var y = r ? r + u : u;
          if (!this._events[y]) return this;
          if (!f) return a(this, y), this;
          var g = this._events[y];
          if (g.fn)
            g.fn === f &&
              (!p || g.once) &&
              (!d || g.context === d) &&
              a(this, y);
          else {
            for (var b = 0, h = [], m = g.length; b < m; b++)
              (g[b].fn !== f ||
                (p && !g[b].once) ||
                (d && g[b].context !== d)) &&
                h.push(g[b]);
            h.length
              ? (this._events[y] = h.length === 1 ? h[0] : h)
              : a(this, y);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  Tm = dn({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(h) {
        if (r === setTimeout) return setTimeout(h, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(h, 0);
        try {
          return r(h, 0);
        } catch {
          try {
            return r.call(null, h, 0);
          } catch {
            return r.call(this, h, 0);
          }
        }
      }
      function l(h) {
        if (i === clearTimeout) return clearTimeout(h);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(h);
        try {
          return i(h);
        } catch {
          try {
            return i.call(null, h);
          } catch {
            return i.call(this, h);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function p() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && y());
      }
      function y() {
        if (!u) {
          var h = a(p);
          u = !0;
          for (var m = c.length; m; ) {
            for (f = c, c = []; ++d < m; ) f && f[d].run();
            (d = -1), (m = c.length);
          }
          (f = null), (u = !1), l(h);
        }
      }
      n.nextTick = function (h) {
        var m = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var v = 1; v < arguments.length; v++) m[v - 1] = arguments[v];
        c.push(new g(h, m)), c.length === 1 && !u && a(y);
      };
      function g(h, m) {
        (this.fun = h), (this.array = m);
      }
      (g.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function b() {}
      (n.on = b),
        (n.addListener = b),
        (n.once = b),
        (n.off = b),
        (n.removeListener = b),
        (n.removeAllListeners = b),
        (n.emit = b),
        (n.prependListener = b),
        (n.prependOnceListener = b),
        (n.listeners = function (h) {
          return [];
        }),
        (n.binding = function (h) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (h) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  J2 = dn({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(
      e,
      t
    ) {
      (function (n, r) {
        typeof e == "object" && typeof t < "u"
          ? r(e)
          : typeof define == "function" && define.amd
          ? define(["exports"], r)
          : ((n = typeof globalThis < "u" ? globalThis : n || self),
            r((n.ResizeObserver = {})));
      })(e, function (n) {
        "use strict";
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = "ResizeObserver loop completed with undelivered notifications.",
          a = function () {
            var P;
            typeof ErrorEvent == "function"
              ? (P = new ErrorEvent("error", { message: s }))
              : ((P = document.createEvent("Event")),
                P.initEvent("error", !1, !1),
                (P.message = s)),
              F.dispatchEvent(P);
          },
          l;
        (function (P) {
          (P.BORDER_BOX = "border-box"),
            (P.CONTENT_BOX = "content-box"),
            (P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(_, L) {
              (this.inlineSize = _), (this.blockSize = L), c(this);
            }
            return P;
          })(),
          f = (function () {
            function P(_, L, U, pe) {
              return (
                (this.x = _),
                (this.y = L),
                (this.width = U),
                (this.height = pe),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var _ = this,
                  L = _.x,
                  U = _.y,
                  pe = _.top,
                  It = _.right,
                  pt = _.bottom,
                  Ke = _.left,
                  fr = _.width,
                  Kt = _.height;
                return {
                  x: L,
                  y: U,
                  top: pe,
                  right: It,
                  bottom: pt,
                  left: Ke,
                  width: fr,
                  height: Kt,
                };
              }),
              (P.fromRect = function (_) {
                return new P(_.x, _.y, _.width, _.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && "getBBox" in P;
          },
          p = function (P) {
            if (d(P)) {
              var _ = P.getBBox(),
                L = _.width,
                U = _.height;
              return !L && !U;
            }
            var pe = P,
              It = pe.offsetWidth,
              pt = pe.offsetHeight;
            return !(It || pt || P.getClientRects().length);
          },
          y = function (P) {
            var _, L;
            if (P instanceof Element) return !0;
            var U =
              (L =
                (_ = P) === null || _ === void 0 ? void 0 : _.ownerDocument) ===
                null || L === void 0
                ? void 0
                : L.defaultView;
            return !!(U && P instanceof U.Element);
          },
          g = function (P) {
            switch (P.tagName) {
              case "INPUT":
                if (P.type !== "image") break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return !0;
            }
            return !1;
          },
          b = typeof F < "u" ? F : {},
          h = new WeakMap(),
          m = /auto|scroll/,
          v = /^tb|vertical/,
          S = /msie|trident/i.test(b.navigator && b.navigator.userAgent),
          k = function (P) {
            return parseFloat(P || "0");
          },
          w = function (P, _, L) {
            return (
              P === void 0 && (P = 0),
              _ === void 0 && (_ = 0),
              L === void 0 && (L = !1),
              new u((L ? _ : P) || 0, (L ? P : _) || 0)
            );
          },
          T = c({
            devicePixelContentBoxSize: w(),
            borderBoxSize: w(),
            contentBoxSize: w(),
            contentRect: new f(0, 0, 0, 0),
          }),
          R = function (P, _) {
            if ((_ === void 0 && (_ = !1), h.has(P) && !_)) return h.get(P);
            if (p(P)) return h.set(P, T), T;
            var L = getComputedStyle(P),
              U = d(P) && P.ownerSVGElement && P.getBBox(),
              pe = !S && L.boxSizing === "border-box",
              It = v.test(L.writingMode || ""),
              pt = !U && m.test(L.overflowY || ""),
              Ke = !U && m.test(L.overflowX || ""),
              fr = U ? 0 : k(L.paddingTop),
              Kt = U ? 0 : k(L.paddingRight),
              mi = U ? 0 : k(L.paddingBottom),
              Xi = U ? 0 : k(L.paddingLeft),
              ST = U ? 0 : k(L.borderTopWidth),
              kT = U ? 0 : k(L.borderRightWidth),
              CT = U ? 0 : k(L.borderBottomWidth),
              TT = U ? 0 : k(L.borderLeftWidth),
              cg = Xi + Kt,
              ug = fr + mi,
              Lu = TT + kT,
              Vu = ST + CT,
              fg = Ke ? P.offsetHeight - Vu - P.clientHeight : 0,
              dg = pt ? P.offsetWidth - Lu - P.clientWidth : 0,
              RT = pe ? cg + Lu : 0,
              ET = pe ? ug + Vu : 0,
              Ea = U ? U.width : k(L.width) - RT - dg,
              Fa = U ? U.height : k(L.height) - ET - fg,
              FT = Ea + cg + dg + Lu,
              PT = Fa + ug + fg + Vu,
              hg = c({
                devicePixelContentBoxSize: w(
                  Math.round(Ea * devicePixelRatio),
                  Math.round(Fa * devicePixelRatio),
                  It
                ),
                borderBoxSize: w(FT, PT, It),
                contentBoxSize: w(Ea, Fa, It),
                contentRect: new f(Xi, fr, Ea, Fa),
              });
            return h.set(P, hg), hg;
          },
          O = function (P, _, L) {
            var U = R(P, L),
              pe = U.borderBoxSize,
              It = U.contentBoxSize,
              pt = U.devicePixelContentBoxSize;
            switch (_) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return pt;
              case l.BORDER_BOX:
                return pe;
              default:
                return It;
            }
          },
          I = (function () {
            function P(_) {
              var L = R(_);
              (this.target = _),
                (this.contentRect = L.contentRect),
                (this.borderBoxSize = c([L.borderBoxSize])),
                (this.contentBoxSize = c([L.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  L.devicePixelContentBoxSize,
                ]));
            }
            return P;
          })(),
          N = function (P) {
            if (p(P)) return 1 / 0;
            for (var _ = 0, L = P.parentNode; L; ) (_ += 1), (L = L.parentNode);
            return _;
          },
          z = function () {
            var P = 1 / 0,
              _ = [];
            r.forEach(function (pt) {
              if (pt.activeTargets.length !== 0) {
                var Ke = [];
                pt.activeTargets.forEach(function (Kt) {
                  var mi = new I(Kt.target),
                    Xi = N(Kt.target);
                  Ke.push(mi),
                    (Kt.lastReportedSize = O(Kt.target, Kt.observedBox)),
                    Xi < P && (P = Xi);
                }),
                  _.push(function () {
                    pt.callback.call(pt.observer, Ke, pt.observer);
                  }),
                  pt.activeTargets.splice(0, pt.activeTargets.length);
              }
            });
            for (var L = 0, U = _; L < U.length; L++) {
              var pe = U[L];
              pe();
            }
            return P;
          },
          j = function (P) {
            r.forEach(function (L) {
              L.activeTargets.splice(0, L.activeTargets.length),
                L.skippedTargets.splice(0, L.skippedTargets.length),
                L.observationTargets.forEach(function (pe) {
                  pe.isActive() &&
                    (N(pe.target) > P
                      ? L.activeTargets.push(pe)
                      : L.skippedTargets.push(pe));
                });
            });
          },
          Y = function () {
            var P = 0;
            for (j(P); i(); ) (P = z()), j(P);
            return o() && a(), P > 0;
          },
          H,
          le = [],
          ne = function () {
            return le.splice(0).forEach(function (P) {
              return P();
            });
          },
          fe = function (P) {
            if (!H) {
              var _ = 0,
                L = document.createTextNode(""),
                U = { characterData: !0 };
              new MutationObserver(function () {
                return ne();
              }).observe(L, U),
                (H = function () {
                  L.textContent = "" + (_ ? _-- : _++);
                });
            }
            le.push(P), H();
          },
          Q = function (P) {
            fe(function () {
              requestAnimationFrame(P);
            });
          },
          se = 0,
          we = function () {
            return !!se;
          },
          Se = 250,
          he = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          J = [
            "resize",
            "load",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
            "keyup",
            "keydown",
            "mouseup",
            "mousedown",
            "mouseover",
            "mouseout",
            "blur",
            "focus",
          ],
          Oe = function (P) {
            return P === void 0 && (P = 0), Date.now() + P;
          },
          Ee = !1,
          tt = (function () {
            function P() {
              var _ = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return _.schedule();
                });
            }
            return (
              (P.prototype.run = function (_) {
                var L = this;
                if ((_ === void 0 && (_ = Se), !Ee)) {
                  Ee = !0;
                  var U = Oe(_);
                  Q(function () {
                    var pe = !1;
                    try {
                      pe = Y();
                    } finally {
                      if (((Ee = !1), (_ = U - Oe()), !we())) return;
                      pe ? L.run(1e3) : _ > 0 ? L.run(_) : L.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (P.prototype.observe = function () {
                var _ = this,
                  L = function () {
                    return _.observer && _.observer.observe(document.body, he);
                  };
                document.body ? L() : b.addEventListener("DOMContentLoaded", L);
              }),
              (P.prototype.start = function () {
                var _ = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  J.forEach(function (L) {
                    return b.addEventListener(L, _.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var _ = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  J.forEach(function (L) {
                    return b.removeEventListener(L, _.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          Ie = new tt(),
          Fn = function (P) {
            !se && P > 0 && Ie.start(), (se += P), !se && Ie.stop();
          },
          at = function (P) {
            return !d(P) && !g(P) && getComputedStyle(P).display === "inline";
          },
          Nn = (function () {
            function P(_, L) {
              (this.target = _),
                (this.observedBox = L || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (P.prototype.isActive = function () {
                var _ = O(this.target, this.observedBox, !0);
                return (
                  at(this.target) && (this.lastReportedSize = _),
                  this.lastReportedSize.inlineSize !== _.inlineSize ||
                    this.lastReportedSize.blockSize !== _.blockSize
                );
              }),
              P
            );
          })(),
          ce = (function () {
            function P(_, L) {
              (this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = _),
                (this.callback = L);
            }
            return P;
          })(),
          Yt = new WeakMap(),
          lt = function (P, _) {
            for (var L = 0; L < P.length; L += 1)
              if (P[L].target === _) return L;
            return -1;
          },
          fn = (function () {
            function P() {}
            return (
              (P.connect = function (_, L) {
                var U = new ce(_, L);
                Yt.set(_, U);
              }),
              (P.observe = function (_, L, U) {
                var pe = Yt.get(_),
                  It = pe.observationTargets.length === 0;
                lt(pe.observationTargets, L) < 0 &&
                  (It && r.push(pe),
                  pe.observationTargets.push(new Nn(L, U && U.box)),
                  Fn(1),
                  Ie.schedule());
              }),
              (P.unobserve = function (_, L) {
                var U = Yt.get(_),
                  pe = lt(U.observationTargets, L),
                  It = U.observationTargets.length === 1;
                pe >= 0 &&
                  (It && r.splice(r.indexOf(U), 1),
                  U.observationTargets.splice(pe, 1),
                  Fn(-1));
              }),
              (P.disconnect = function (_) {
                var L = this,
                  U = Yt.get(_);
                U.observationTargets.slice().forEach(function (pe) {
                  return L.unobserve(_, pe.target);
                }),
                  U.activeTargets.splice(0, U.activeTargets.length);
              }),
              P
            );
          })(),
          Ra = (function () {
            function P(_) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (typeof _ != "function")
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              fn.connect(this, _);
            }
            return (
              (P.prototype.observe = function (_, L) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                fn.observe(this, _, L);
              }),
              (P.prototype.unobserve = function (_) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!y(_))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                fn.unobserve(this, _);
              }),
              (P.prototype.disconnect = function () {
                fn.disconnect(this);
              }),
              (P.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
              }),
              P
            );
          })();
        (n.ResizeObserver = Ra),
          (n.ResizeObserverEntry = I),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, "__esModule", { value: !0 });
      });
    },
  }),
  eM = dn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        p = t ? Symbol.for("react.suspense_list") : 60120,
        y = t ? Symbol.for("react.memo") : 60115,
        g = t ? Symbol.for("react.lazy") : 60116,
        b = t ? Symbol.for("react.block") : 60121,
        h = t ? Symbol.for("react.fundamental") : 60117,
        m = t ? Symbol.for("react.responder") : 60118,
        v = t ? Symbol.for("react.scope") : 60119;
      function S(w) {
        if (typeof w == "object" && w !== null) {
          var T = w.$$typeof;
          switch (T) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case g:
                    case y:
                    case a:
                      return w;
                    default:
                      return T;
                  }
              }
            case r:
              return T;
          }
        }
      }
      function k(w) {
        return S(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = g),
        (e.Memo = y),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return k(w) || S(w) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (w) {
          return S(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return S(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return S(w) === f;
        }),
        (e.isFragment = function (w) {
          return S(w) === i;
        }),
        (e.isLazy = function (w) {
          return S(w) === g;
        }),
        (e.isMemo = function (w) {
          return S(w) === y;
        }),
        (e.isPortal = function (w) {
          return S(w) === r;
        }),
        (e.isProfiler = function (w) {
          return S(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return S(w) === o;
        }),
        (e.isSuspense = function (w) {
          return S(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === p ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === g ||
                w.$$typeof === y ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === h ||
                w.$$typeof === m ||
                w.$$typeof === v ||
                w.$$typeof === b))
          );
        }),
        (e.typeOf = S);
    },
  }),
  tM = dn({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t
    ) {
      "use strict";
      t.exports = eM();
    },
  }),
  ku = dn({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = tM(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(b) {
        return n.isMemo(b) ? s : a[b.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        y = Object.prototype;
      function g(b, h, m) {
        if (typeof h != "string") {
          if (y) {
            var v = p(h);
            v && v !== y && g(b, v, m);
          }
          var S = u(h);
          f && (S = S.concat(f(h)));
          for (var k = l(b), w = l(h), T = 0; T < S.length; ++T) {
            var R = S[T];
            if (!i[R] && !(m && m[R]) && !(w && w[R]) && !(k && k[R])) {
              var O = d(h, R);
              try {
                c(b, R, O);
              } catch {}
            }
          }
        }
        return b;
      }
      t.exports = g;
    },
  }),
  nM = dn({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(h, m) {
          document.addEventListener
            ? h.addEventListener("scroll", m, !1)
            : h.attachEvent("scroll", m);
        }
        function r(h) {
          document.body
            ? h()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function m() {
                document.removeEventListener("DOMContentLoaded", m), h();
              })
            : document.attachEvent("onreadystatechange", function m() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", m), h());
              });
        }
        function i(h) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(h)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(h, m) {
          h.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            m +
            ";";
        }
        function s(h) {
          var m = h.a.offsetWidth,
            v = m + 100;
          return (
            (h.f.style.width = v + "px"),
            (h.c.scrollLeft = v),
            (h.b.scrollLeft = h.b.scrollWidth + 100),
            h.g !== m ? ((h.g = m), !0) : !1
          );
        }
        function a(h, m) {
          function v() {
            var k = S;
            s(k) && k.a.parentNode && m(k.g);
          }
          var S = h;
          n(h.b, v), n(h.c, v), s(h);
        }
        function l(h, m) {
          var v = m || {};
          (this.family = h),
            (this.style = v.style || "normal"),
            (this.weight = v.weight || "normal"),
            (this.stretch = v.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function p() {
          if (u === null)
            if (y() && /Apple/.test(F.navigator.vendor)) {
              var h = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                F.navigator.userAgent
              );
              u = !!h && 603 > parseInt(h[1], 10);
            } else u = !1;
          return u;
        }
        function y() {
          return d === null && (d = !!document.fonts), d;
        }
        function g() {
          if (f === null) {
            var h = document.createElement("div");
            try {
              h.style.font = "condensed 100px sans-serif";
            } catch {}
            f = h.style.font !== "";
          }
          return f;
        }
        function b(h, m) {
          return [h.style, h.weight, g() ? h.stretch : "", "100px", m].join(
            " "
          );
        }
        (l.prototype.load = function (h, m) {
          var v = this,
            S = h || "BESbswy",
            k = 0,
            w = m || 3e3,
            T = new Date().getTime();
          return new Promise(function (R, O) {
            if (y() && !p()) {
              var I = new Promise(function (z, j) {
                  function Y() {
                    new Date().getTime() - T >= w
                      ? j(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(b(v, '"' + v.family + '"'), S)
                          .then(function (H) {
                            1 <= H.length ? z() : setTimeout(Y, 25);
                          }, j);
                  }
                  Y();
                }),
                N = new Promise(function (z, j) {
                  k = setTimeout(function () {
                    j(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([N, I]).then(function () {
                clearTimeout(k), R(v);
              }, O);
            } else
              r(function () {
                function z() {
                  var J;
                  (J =
                    (ne != -1 && fe != -1) ||
                    (ne != -1 && Q != -1) ||
                    (fe != -1 && Q != -1)) &&
                    ((J = ne != fe && ne != Q && fe != Q) ||
                      (c === null &&
                        ((J = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          F.navigator.userAgent
                        )),
                        (c =
                          !!J &&
                          (536 > parseInt(J[1], 10) ||
                            (parseInt(J[1], 10) === 536 &&
                              11 >= parseInt(J[2], 10))))),
                      (J =
                        c &&
                        ((ne == se && fe == se && Q == se) ||
                          (ne == we && fe == we && Q == we) ||
                          (ne == Se && fe == Se && Q == Se)))),
                    (J = !J)),
                    J &&
                      (he.parentNode && he.parentNode.removeChild(he),
                      clearTimeout(k),
                      R(v));
                }
                function j() {
                  if (new Date().getTime() - T >= w)
                    he.parentNode && he.parentNode.removeChild(he),
                      O(Error("" + w + "ms timeout exceeded"));
                  else {
                    var J = document.hidden;
                    (J === !0 || J === void 0) &&
                      ((ne = Y.a.offsetWidth),
                      (fe = H.a.offsetWidth),
                      (Q = le.a.offsetWidth),
                      z()),
                      (k = setTimeout(j, 50));
                  }
                }
                var Y = new i(S),
                  H = new i(S),
                  le = new i(S),
                  ne = -1,
                  fe = -1,
                  Q = -1,
                  se = -1,
                  we = -1,
                  Se = -1,
                  he = document.createElement("div");
                (he.dir = "ltr"),
                  o(Y, b(v, "sans-serif")),
                  o(H, b(v, "serif")),
                  o(le, b(v, "monospace")),
                  he.appendChild(Y.a),
                  he.appendChild(H.a),
                  he.appendChild(le.a),
                  document.body.appendChild(he),
                  (se = Y.a.offsetWidth),
                  (we = H.a.offsetWidth),
                  (Se = le.a.offsetWidth),
                  j(),
                  a(Y, function (J) {
                    (ne = J), z();
                  }),
                  o(Y, b(v, '"' + v.family + '",sans-serif')),
                  a(H, function (J) {
                    (fe = J), z();
                  }),
                  o(H, b(v, '"' + v.family + '",serif')),
                  a(le, function (J) {
                    (Q = J), z();
                  }),
                  o(le, b(v, '"' + v.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((F.FontFaceObserver = l),
              (F.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  }),
  rM = "preload";
function ik(e) {
  return typeof e == "object" && e !== null && !x.isValidElement(e) && rM in e;
}
function b6(e) {
  let t = x.lazy(e),
    n,
    r,
    i = x.forwardRef(function (s, a) {
      return x.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function Cu(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function ok(e) {
  if ("scheduler" in F) {
    if ("yield" in scheduler) return scheduler.yield(e);
    if ("postTask" in scheduler) return scheduler.postTask(() => {}, e);
  }
  return e?.priority === "user-blocking"
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t);
      });
}
async function sk(e, t) {
  return await ok(t), e();
}
function Tu(e) {
  return new Promise((t) => {
    setTimeout(t, 100),
      requestAnimationFrame(() => {
        sk(t, e);
      });
  });
}
function iM(e, t, n, r = De) {
  r(() => {
    let i = async (s) => (await Tu(n), s()),
      o = i(e);
    return () => {
      (async () => {
        let s = await o;
        s && i(s);
      })();
    };
  }, t);
}
var Rm = () => {},
  oM = [],
  ak = (() =>
    typeof F < "u" ? F.requestIdleCallback || F.setTimeout : setTimeout)();
function lk(e) {
  return x.useCallback((t) => e[t], [e]);
}
var Em = (() => x.createContext({}))();
function sM({ api: e, children: t }) {
  return C(Em.Provider, { value: e, children: t });
}
function Ko() {
  return x.useContext(Em);
}
function aM({ routes: e, children: t }) {
  let n = lk(e);
  return C(Em.Provider, { value: { getRoute: n }, children: t });
}
var lM = (() => x.createContext(void 0))();
function Ca() {
  var e;
  let t = Ko(),
    n = A(lM),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) == null ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function cM(e) {
  var t;
  let n = Ko();
  if (e) return (t = n.getRoute) == null ? void 0 : t.call(n, e);
}
function E6(e, t) {
  let n = Ca(),
    r = cM(t) ?? n;
  return x.useMemo(() => (r ? Cu(r, e) : e), [e, r]);
}
function $n(e) {
  return typeof e == "function";
}
function Fm(e) {
  return typeof e == "boolean";
}
function ue(e) {
  return typeof e == "string";
}
function et(e) {
  return Number.isFinite(e);
}
function Ru(e) {
  return Array.isArray(e);
}
function be(e) {
  return e !== null && typeof e == "object" && !Ru(e);
}
function Xe(e) {
  return typeof e > "u";
}
function sr(e) {
  return e === null;
}
function uM(e) {
  return e == null;
}
function ck(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function uk(e) {
  return be(e) && $n(e.return);
}
function fk(e) {
  return /bot|-google|google-|yandex|ia_archiver/iu.test(e);
}
var Pm = (() => typeof F < "u" && !fk(Re.userAgent))();
function fM(e, t = !0) {
  let { getRoute: n } = Ko();
  B(() => {
    if (!(!n || !t || !Pm)) for (let r of e) dk(n(r));
  }, [e, n, t]);
}
async function dk(e) {
  if (!Pm || !e) return;
  let t = e.page;
  if (!(!t || !ik(t))) {
    await ok();
    try {
      await t.preload();
    } catch {}
  }
}
function hk(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = yS(e),
    [r, i] = yS(t),
    o = dM(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function yS(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var Vp = 46,
  Ho = 47,
  hi = (e, t) => e.charCodeAt(t),
  bS = (e, t) => e.lastIndexOf(t),
  Uo = (e, t, n) => e.slice(t, n);
function dM(e, t) {
  if (e === t || ((e = "/" + wS(e)), (t = "/" + wS(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = hi(e, n + c);
    if (f !== hi(t, o + c)) break;
    f === Ho && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (hi(t, o + c) === Ho) return Uo(t, o + c + 1);
      if (c === 0) return Uo(t, o + c);
    } else i > a && (hi(e, n + c) === Ho ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || hi(e, c) === Ho) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${Uo(t, o + l)}`;
}
var hM = !1,
  Mc = "/",
  xS = (e) => e === Ho;
function wS(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = hi(e, s);
    else {
      if (xS(o)) break;
      o = Ho;
    }
    if (xS(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            hi(t, t.length - 1) !== Vp ||
            hi(t, t.length - 2) !== Vp
          ) {
            if (t.length > 2) {
              let a = bS(t, Mc);
              a === -1
                ? ((t = ""), (n = 0))
                : ((t = Uo(t, 0, a)), (n = t.length - 1 - bS(t, Mc))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          hM && ((t += t.length > 0 ? `${Mc}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${Mc}${Uo(e, r + 1, s)}`)
            : (t = Uo(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === Vp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
var pM = ":([a-z]\\w*)",
  Wi = new RegExp(pM, "gi");
function pk(e, t) {
  return e.replace(Wi, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function mk(e) {
  let t = typeof F < "u" ? F.location.search : "";
  return t ? mM(t, e) : e;
}
function mM(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
async function gM(e, t, n, r, i, o, s) {
  var a;
  let l = e,
    c = !1,
    u = { ...o },
    f = Array.from(l.matchAll(Wi)),
    d = await Promise.all(
      f.map(async (b) => {
        var h;
        let m = b?.[0],
          v = b?.[1];
        if (!m || !v)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let S = o[v];
        if (!S || !ue(S))
          throw new Error(`No slug found for path variable ${v}`);
        let k = await ((h = s?.[i]) == null ? void 0 : h.call(s));
        if (!k || !t) return S;
        let w = await k.getRecordIdBySlug(S, t);
        if (!w) return S;
        let T = await k.getSlugByRecordId(w, n);
        if (!T) {
          c = !0;
          let R = await k.getSlugByRecordId(w, r);
          return R && (u[v] = R), R ?? S;
        }
        return (u[v] = T), T;
      })
    ),
    p = 0,
    y = "",
    g = !1;
  for (let b = 0; b < f.length; b++) {
    let h = f[b],
      m = d[b];
    !h ||
      !m ||
      ((y += l.substring(p, h.index)),
      (p = (h.index ?? 0) + (((a = h[0]) == null ? void 0 : a.length) ?? 0)),
      (y += d[b]),
      (g = !0));
  }
  return g && (l = y), { path: l, pathVariables: u, isMissingInLocale: c };
}
async function vM({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await gM(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = mk(l.path)),
    l
  );
}
var yM = { global: void 0, routes: {} },
  gk = x.createContext(yM);
function L6({ children: e, value: t }) {
  return C(gk.Provider, { value: t, children: e });
}
function bM() {
  return x.useContext(gk);
}
function xM(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) == null ? void 0 : i[t]) || n;
}
var Ap = 10,
  wM = 1e4;
function SM(e) {
  let t = Ap,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < wM; ) (n = e.next(t)), r.push(n.value), (t += Ap);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - Ap }
  );
}
var Mr = (e) => `--view-transition-${e}`;
function am(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function vk(e) {
  let { innerWidth: t, innerHeight: n } = F,
    [r, i] = am(e.x),
    [o, s] = am(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var kM = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${Mr("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${Mr("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${Mr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  CM = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = vk(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, F.innerWidth - n),
            Math.max(r, F.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  TM = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = vk(e),
        i = F.innerHeight - r,
        o = F.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  RM = {
    makeKeyframe: (e, t, n) => {
      let [, r] = am(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${Mr("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${Mr("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${Mr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  EM = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${Mr("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${Mr("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${Mr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  FM = { circle: CM, conic: kM, inset: TM, blinds: RM, wipe: EM },
  PM = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function SS(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) == null ? void 0 : i.call(r, e.mask, t, n)) ||
        ""),
    o
  );
}
function _M(e) {
  return e ? FM[e] : void 0;
}
function kS(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (OM(t)) {
    let { easing: c, duration: u } = SM(
      bs({ keyframes: [0, 1], ...IM(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let s = _M((r = n?.mask) == null ? void 0 : r.type),
    a = SS(n, "start", e, s),
    l = SS({ ...PM, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
function OM(e) {
  return e.type === "spring";
}
function IM(e) {
  return e.durationBasedSpring
    ? { duration: e.duration, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var yk = "view-transition-styles",
  MM = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function LM({ exit: e = MM, enter: t }) {
  let n = document.createElement("style");
  n.id = yk;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += kS("exit", e)),
    (r += kS("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function VM() {
  ak(() => {
    q.render(() => {
      performance.mark("framer-vt-remove");
      let e = document.getElementById(yk);
      e && document.head.removeChild(e);
    });
  });
}
var CS = () => {};
function AM() {
  return !!document.startViewTransition;
}
function DM(e) {
  return new Promise((t) => {
    q.render(() => {
      performance.mark("framer-vt-style"), LM(e), t();
    });
  });
}
async function TS(e, t, n) {
  if (!AM()) {
    e();
    return;
  }
  if ((await DM(t), n?.aborted)) return;
  performance.mark("framer-vt");
  let r = document.startViewTransition(async () => {
    performance.mark("framer-vt-freeze"),
      !n?.aborted &&
        (n?.addEventListener("abort", () => r.skipTransition()), await e());
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark("framer-vt-unfreeze");
      })
      .catch(CS),
    Promise.all([r.ready, r.finished])
      .then(() => {
        performance.mark("framer-vt-finished"), VM();
      })
      .catch(CS),
    r
  );
}
function bk() {
  let e = bM(),
    t = V(void 0);
  return (
    B(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    G(
      (n, r, i, o, s) => {
        let a = xM(n, r, e);
        if (a) {
          let l = new Promise((f) => {
              t.current = f;
            }),
            c = async () => {
              i(), await l;
            },
            u = async () => (
              await Tu({ priority: "user-blocking", signal: s }).catch(Rm),
              TS(c, a, s)
            );
          return o ? u() : TS(c, a);
        }
        i();
      },
      [e]
    )
  );
}
function xk(e) {
  let t = `${e}-start`,
    n = `${e}-end`,
    r = V(void 0);
  return (
    iM(
      () => {
        r.current && (r.current(), (r.current = void 0));
      },
      void 0,
      { priority: "user-blocking" }
    ),
    G(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      return (
        performance.mark(t),
        i
          .finally(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch((o) => {
            console.error(o);
          })
      );
    }, [e, t, n])
  );
}
async function RS(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  },
  l = !1,
  c = !1
) {
  let { path: u } = t;
  if (!u) return;
  let f = _m(t, {
      currentRoutePath: n,
      currentPathVariables: r,
      hash: i,
      pathVariables: o,
      preserveQueryParams: a,
    }),
    d = F.location.href;
  try {
    return await Sk(
      { routeId: e, hash: i, pathVariables: o, localeId: s },
      f,
      l,
      c
    );
  } catch {}
}
function wk(e, t) {
  ak(() => {
    let n = document.querySelector("link[rel='canonical']");
    if (!n) return;
    let r = new URL(e, t);
    (r.search = ""), n.setAttribute("href", r.toString());
  });
}
function zM(e) {
  let t = "routeId";
  return be(e) && ue(e[t]);
}
function BM(e, t, n = !1) {
  performance.mark("framer-history-replace"),
    (n ? F.history.__proto__.replaceState : F.history.replaceState).call(
      F.history,
      e,
      "",
      t
    );
}
var Lc = !0,
  ES = (() => {
    if (typeof Re > "u") return !1;
    let e = Re.userAgent,
      t = e.indexOf("Chrome/"),
      n = +e.slice(t + 7, e.indexOf(".", t));
    return n > 101 && n < 128;
  })();
async function Sk(e, t, n = !1, r = !1) {
  if (
    (n && (await Tu({ priority: "user-blocking" })),
    performance.mark("framer-history-push"),
    wk(t, F.location.href),
    !r)
  ) {
    F.history.pushState(e, "", t);
    return;
  }
  let i = !1,
    o;
  Lc &&
    ((o = () => {
      var s;
      if (((i = !0), ES)) return;
      let a =
        "Popstate called after intercept(). Please report this to the Framer team.";
      console.error(a),
        (s = F.__framer_events) == null ||
          s.push([
            "published_site_load_recoverable_error",
            { message: a, userAgent: Re.userAgent },
          ]);
    }),
    F.addEventListener("popstate", o, { once: !0 })),
    ES && Lc
      ? F.history.__proto__.pushState.call(F.history, e, "", t)
      : F.history.pushState(e, "", t),
    Lc &&
      queueMicrotask(() => {
        i || ((Lc = !1), F.removeEventListener("popstate", o));
      });
}
function $M({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  De(() => {
    e ||
      (performance.mark("framer-history-set-initial-state"),
      BM({ routeId: t, pathVariables: n, localeId: r }, void 0, !0));
  }, []);
}
function NM(e, t) {
  let n = bk(),
    r = xk("framer-route-change-popstate"),
    i = V(void 0),
    o = G(
      async ({ state: a }) => {
        var l, c, u, f, d, p;
        if (
          ((l = F.navigation) != null &&
            l.transition &&
            ((u = (c = F.navigation) == null ? void 0 : c.transition) == null
              ? void 0
              : u.navigationType) !== "traverse") ||
          !be(a)
        )
          return;
        let { routeId: y, hash: g, pathVariables: b, localeId: h } = a;
        if (!ue(y)) return;
        r();
        let m = () => {
          t(
            y,
            ue(h) ? h : void 0,
            ue(g) ? g : void 0,
            be(b) ? b : void 0,
            !0,
            !1
          );
        };
        wk(F.location.href);
        let v = await n(e.current, y, m, !1);
        v
          ? v.updateCallbackDone
              .then((f = i.current) == null ? void 0 : f.resolve)
              .catch((d = i.current) == null ? void 0 : d.reject)
          : (p = i.current) == null || p.resolve();
      },
      [e, r, t, n]
    ),
    s = G((a) => {
      a.navigationType === "traverse" &&
        a.intercept({
          async handler() {
            await new Promise((l, c) => {
              i.current = { resolve: l, reject: c };
            }),
              (i.current = void 0);
          },
          scroll: "after-transition",
        });
    }, []);
  B(() => {
    var a;
    return (
      F.addEventListener("popstate", o),
      (a = F.navigation) == null || a.addEventListener("navigate", s),
      () => {
        var l;
        F.removeEventListener("popstate", o),
          (l = F.navigation) == null || l.removeEventListener("navigate", s);
      }
    );
  }, [o, s]);
}
function jM(e, t, n) {
  let r = Cu(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Wi, (o, s) => String(i[s] ?? o));
}
function _m(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  let l = t ?? "/";
  n && (l = l.replace(Wi, (p, y) => String(n[y] || p)));
  let u = e?.path ?? "/";
  i && (u = u.replace(Wi, (p, y) => String(i[y] || p)));
  let f = jM(r, e, o),
    d = l === u && f;
  return (
    s && (u = hk(l, u)), (a || d) && (u = mk(u)), f && (u = `${u}#${f}`), u
  );
}
async function HM(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${pk(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((F.location.href = F.location.origin + i), !0)
    : !1;
}
async function WM(e) {
  let t = await vM(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (!ue(t.path)) throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await HM(e.route, t.pathVariables, e.nextLocale))
      )
        return;
    } catch {}
    return t;
  }
}
function UM() {
  let e = V(Promise.resolve()),
    t = V(),
    n = G((r) => {
      if (r.navigationType === "traverse") return;
      let i = t.current;
      i?.signal.addEventListener("abort", () => {
        i.abort("user aborted");
      }),
        r.intercept({ handler: () => e.current });
    }, []);
  return G(
    (r, i, o) => {
      if (!F.navigation) {
        i();
        return;
      }
      (e.current = r),
        (t.current = o),
        F.navigation.addEventListener("navigate", n),
        i(!0),
        r.catch(Rm).finally(() => {
          F.navigation.removeEventListener("navigate", n);
        });
    },
    [n]
  );
}
var GM = async () => {},
  qM = { activeLocale: null, locales: [], setLocale: GM },
  kk = x.createContext(qM);
function XM() {
  return x.useContext(kk);
}
var Sa = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
  ],
  Ck = (e) => {
    var t, n;
    (n = (t = e.target) == null ? void 0 : t.closest) != null &&
      n.call(t, "#main") &&
      (e.stopPropagation(),
      performance.mark("framer-react-event-handling-prevented"));
  },
  Tk = !1;
function B6() {
  if (!Sa) return;
  (Tk = !0), performance.mark("framer-react-event-handling-start");
  let e = { capture: !0 };
  Sa.forEach((t) => document.body.addEventListener(t, Ck, e));
}
function YM() {
  return (
    B(() => {
      if (!Tk || !Sa) return;
      let e = { capture: !0 };
      Sa.forEach((t) => document.body.removeEventListener(t, Ck, e)),
        (Sa = void 0),
        performance.mark("framer-react-event-handling-end");
    }, []),
    null
  );
}
var Om = !1;
function N6() {
  Om = !0;
}
function KM() {
  Om = !1;
}
function QM() {
  let e = V(typeof F > "u" || Om);
  return (
    B(() => {
      e.current = !1;
    }, []),
    e
  );
}
function Or(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var lr = !1;
function H6() {
  (lr = !0), performance.mark("framer-hydration-start");
}
var FS = !1,
  PS = !1,
  _S = !1;
function ZM() {
  let e = "framer-hydration-router";
  Qe(() => {
    FS || !lr || ((FS = !0), performance.mark(`${e}-insertion-effect`));
  }, []),
    De(() => {
      PS || !lr || ((PS = !0), performance.mark(`${e}-layout-effect`));
    }, []),
    B(() => {
      _S || !lr || ((_S = !0), performance.mark(`${e}-effect`));
    }, []);
}
var OS = !1,
  IS = !1,
  MS = !1,
  Rk = !1;
function JM() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}render-end`;
  return (
    Qe(() => {
      OS ||
        !lr ||
        ((OS = !0),
        performance.mark(i),
        Or(`${e}render`, `${e}start`, i),
        performance.mark(`${e}insertion-effects-start`));
    }, []),
    De(() => {
      if (!(IS || !lr)) {
        if (
          ((IS = !0),
          performance.mark(`${e}layout-effects-start`),
          document.visibilityState !== "visible")
        ) {
          Rk = !0;
          return;
        }
        requestAnimationFrame(() => {
          var o, s;
          performance.mark(r),
            Or(
              `${e}uho`,
              ((o = performance.getEntriesByName(n)[0]) == null
                ? void 0
                : o.name) ??
                ((s = performance.getEntriesByName(t)[0]) == null
                  ? void 0
                  : s.name),
              r
            );
        });
      }
    }, []),
    B(() => {
      var o;
      if (MS || !lr) return;
      MS = !0;
      let s = `${e}effects-start`;
      performance.mark(s),
        ((o = performance.getEntriesByName(r)[0]) == null ? void 0 : o.name) ||
          (Or(`${e}commit`, t, s), performance.mark(`${e}effects-sync`));
    }, []),
    null
  );
}
var LS = !1,
  VS = !1,
  AS = !1;
function eL() {
  let e = "framer-hydration-",
    t = `${e}layout-effects-end`,
    n = `${e}effects-end`,
    r = `${e}browser-render-start`,
    i = `${e}start`,
    o = `${e}insertion-effects-end`,
    s = `${e}first-paint`,
    a = `${e}browser-raf-end`;
  return (
    Qe(() => {
      LS ||
        !lr ||
        ((LS = !0),
        performance.mark(o),
        Or(`${e}insertion-effects`, `${e}insertion-effects-start`, o));
    }, []),
    De(() => {
      VS ||
        !lr ||
        ((VS = !0),
        performance.mark(t),
        Or(`${e}layout-effects`, `${e}layout-effects-start`, t),
        !(Rk || document.visibilityState !== "visible") &&
          requestAnimationFrame(() => {
            performance.mark(a),
              Or(`${e}raf`, r, a),
              sk(() => {
                performance.mark(s),
                  Or(`${e}time-to-first-paint`, i, s),
                  Or(`${e}browser-render`, a, s);
              });
          }));
    }, []),
    B(() => {
      var l, c;
      AS ||
        !lr ||
        ((AS = !0),
        performance.mark(n),
        Or(
          `${e}effects`,
          ((l = performance.getEntriesByName(s)[0]) == null
            ? void 0
            : l.name) ??
            ((c = performance.getEntriesByName(`${e}effects-start`)[0]) == null
              ? void 0
              : c.name),
          n
        ));
    }, []),
    null
  );
}
function tL() {
  return JM(), null;
}
function nL() {
  return eL(), null;
}
var DS = { Start: tL, End: nL };
function lm(e, t) {
  let n = { style: t };
  return x.isValidElement(e) ? x.cloneElement(e, n) : x.createElement(e, n);
}
var rL = class extends Error {},
  Gc = class extends Error {
    constructor() {
      super(...arguments), E(this, "cause");
    }
  },
  iL = class extends xe {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof rL)) {
        let n = new Gc();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return lm(e, t);
    }
  },
  Vc,
  Dp,
  zS;
function oL(e) {
  if (zS !== e) {
    Vc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (Vc[n] = { path: n, depth: sL(n), routeId: t });
    (Dp = Object.values(Vc)),
      Dp.sort(({ depth: t }, { depth: n }) => n - t),
      (zS = e);
  }
  return [Vc, Dp];
}
function Ek(e, t, n = !0, r = []) {
  let [i, o] = oL(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: p }) => p === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let p = r.find(({ slug: y }) => y === "");
      p && (a = p.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = BS(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: p } of o) {
    let y = BS(l, d);
    if (y.isMatch)
      return { routeId: p, localeId: a, pathVariables: y.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function sL(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function BS(e, t) {
  let n = [],
    i = aL(t).replace(Wi, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function aL(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var $S = new Set();
function ka(e, ...t) {
  $S.has(e) || ($S.add(e), console.warn(e, ...t));
}
function lL(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  ka(i);
}
var Fk = class {
    constructor() {
      E(this, "observers", new Set()), E(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Ot = (() => {
    function e(t) {
      return (
        lL(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Bn(t) ? t : new uL(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Bn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Bn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  NS = "onUpdate",
  jS = "finishTransaction";
function Bn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    NS in e &&
    e[NS] instanceof Function &&
    jS in e &&
    e[jS] instanceof Function
  );
}
function cL(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = Ot(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var uL = class {
  constructor(e) {
    (this.value = e), E(this, "observers", new Fk());
  }
  static interpolationFor(e, t) {
    if (Bn(e)) return cL(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    Bn(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Ac(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function HS(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function pi(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: HS(i.x, o.x),
      y: HS(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      (o += c.x), (s += c.y);
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(pi || (pi = {}));
var cm = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function ci(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function Go(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ui(e) {
  let t = um(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function um(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var fL = (() => Q2().Hsluv)(),
  Xt = new fL();
function dL(e, t, n) {
  return (
    (Xt.rgb_r = e / 255),
    (Xt.rgb_g = t / 255),
    (Xt.rgb_b = n / 255),
    Xt.rgbToHsluv(),
    { h: Xt.hsluv_h, s: Xt.hsluv_s, l: Xt.hsluv_l }
  );
}
function hL(e, t, n, r = 1) {
  return (
    (Xt.hsluv_h = e),
    (Xt.hsluv_s = t),
    (Xt.hsluv_l = n),
    Xt.hsluvToRgb(),
    { r: Xt.rgb_r * 255, g: Xt.rgb_g * 255, b: Xt.rgb_b * 255, a: r }
  );
}
function Dc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function pL(e, t, n) {
  return {
    r: Go(e) ? $t(e, 255) * 255 : 0,
    g: Go(t) ? $t(t, 255) * 255 : 0,
    b: Go(n) ? $t(n, 255) * 255 : 0,
  };
}
function WS(e, t, n, r) {
  let i = [
    Bp(Math.round(e).toString(16)),
    Bp(Math.round(t).toString(16)),
    Bp(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function Im(e, t, n) {
  let r,
    i,
    o = $t(e, 255),
    s = $t(t, 255),
    a = $t(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function zp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function mL(e, t, n) {
  let r, i, o;
  if (
    ((e = $t(e, 360)), (t = $t(t * 100, 100)), (n = $t(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = zp(a, s, e + 1 / 3)), (i = zp(a, s, e)), (o = zp(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function US(e, t, n) {
  (e = $t(e, 255)), (t = $t(t, 255)), (n = $t(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function gL(e, t, n) {
  (e = $t(e, 360) * 6), (t = $t(t * 100, 100)), (n = $t(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function $t(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    vL(e) && (e = "100%");
    let i = yL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function vL(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function yL(e) {
  return typeof e == "string" && e.includes("%");
}
function Bp(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var ir = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function Mm(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = cm[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = ir.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = ir.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb",
      }
    : (i = ir.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        l: ui(i[3] ?? ""),
        a: 1,
        format: "hsl",
      }
    : (i = ir.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        l: ui(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl",
      }
    : (i = ir.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        v: ui(i[3] ?? ""),
        a: 1,
        format: "hsv",
      }
    : (i = ir.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: ui(i[2] ?? ""),
        v: ui(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv",
      }
    : (i = ir.hex8.exec(n))
    ? {
        r: cn(i[1] ?? ""),
        g: cn(i[2] ?? ""),
        b: cn(i[3] ?? ""),
        a: GS(i[4] ?? ""),
        format: r ? "name" : "hex",
      }
    : (i = ir.hex6.exec(n))
    ? {
        r: cn(i[1] ?? ""),
        g: cn(i[2] ?? ""),
        b: cn(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex",
      }
    : (i = ir.hex4.exec(n))
    ? {
        r: cn(`${i[1]}${i[1]}`),
        g: cn(`${i[2]}${i[2]}`),
        b: cn(`${i[3]}${i[3]}`),
        a: GS(i[4] + "" + i[4]),
        format: r ? "name" : "hex",
      }
    : (i = ir.hex3.exec(n))
    ? {
        r: cn(`${i[1]}${i[1]}`),
        g: cn(`${i[2]}${i[2]}`),
        b: cn(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex",
      }
    : !1;
}
function cn(e) {
  return parseInt(e, 16);
}
function GS(e) {
  return cn(e) / 255;
}
var qS = new Map(),
  K = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = qS.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (qS.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = bL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? Mm(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => WS(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...dL(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = US(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = US(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = WS(o.r, o.g, o.b, !0);
        for (let a of Object.keys(cm)) if (cm[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: ci(a, [0, 1], [o.r, s.r], l),
            g: ci(a, [0, 1], [o.g, s.g], l),
            b: ci(a, [0, 1], [o.b, s.b], l),
            a: ci(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let p = f.h,
            y = d.h,
            g = y - p;
          g > 180 ? (g = y - 360 - p) : g < -180 && (g = y + 360 - p);
          let b = {
            h: ci(a, [0, 1], [p, p + g], l),
            s: ci(a, [0, 1], [f.s, d.s], l),
            l: ci(a, [0, 1], [f.l, d.l], l),
            a: ci(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(b)) : (u = e(hL(b.h, b.s, b.l, b.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => Im(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          p = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * p + (a * (f - p)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = xs([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function bL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = fm({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = xL(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = fm(e))
          : (i = Pk(e))),
    i
  );
}
function xL(e) {
  let t = Mm(e);
  if (t) return t.format === "hsl" ? Pk(t) : t.format === "hsv" ? wL(t) : fm(t);
}
function wL(e) {
  let t = gL(e.h, e.s, e.v);
  return {
    ...Im(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? _k(e.a) : 1,
  };
}
function fm(e) {
  let t = pL(e.r, e.g, e.b);
  return {
    ...Im(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? _k(e.a) : 1,
  };
}
function Pk(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = Go(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Go(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = um(e.s)),
    (r = Go(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = um(e.l)),
    (i = mL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function _k(e) {
  return (
    (e = parseFloat(e)),
    e < 0 && (e = 0),
    (Number.isNaN(e) || e > 1) && (e = 1),
    e
  );
}
var XS = (e) => e instanceof tl;
var SL = (() => Z2().EventEmitter)(),
  kL = class {
    constructor() {
      E(this, "_emitter", new SL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  CL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "", pathname: "" },
    document: { cookie: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    requestIdleCallback: () => 0,
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
    __framer_events: [],
  },
  st = typeof F > "u" ? CL : F,
  TL = (e) => {
    setTimeout(e, 1 / 60);
  },
  RL = (() => st.requestAnimationFrame || TL)(),
  YS = (e) => RL(e),
  ma = (() => 1 / 60)(),
  EL = class extends kL {
    constructor(e = !1) {
      super(),
        E(this, "_started", !1),
        E(this, "_frame", 0),
        E(this, "_frameTasks", []),
        E(this, "tick", () => {
          this._started &&
            (YS(this.tick),
            this.emit("update", this._frame, ma),
            this.emit("render", this._frame, ma),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      ma = e;
    }
    static get TimeStep() {
      return ma;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), YS(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * ma;
    }
  },
  Ok = new EL(),
  KS = { target: "PREVIEW", zoom: 1 };
var ae = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => KS.target,
  hasRestrictions: () => {
    let e = KS.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
var zc = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
rd({
  borderTopWidth: zc("y"),
  borderLeftWidth: zc("x"),
  borderRightWidth: zc("x"),
  borderBottomWidth: zc("y"),
});
function D(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function Ce(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var qo = x.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function FL({ children: e }) {
  if (A(qo).top) return C(ct, { children: e });
  let n = V({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = V({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = V(new Set()).current,
    o = G(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let p = c || l;
      if (
        !u &&
        !i.has(p) &&
        (!n.current.byLayoutId[p] || n.current.byLayoutId[p] === p)
      )
        return (
          n.current.count[f][p] === void 0 &&
            ((n.current.count[f][p] = 0),
            (n.current.byLayoutId[p] = p),
            (r.current[f][l] = p)),
          i.add(p),
          p
        );
      let y;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let T = u[w];
          D(!!T, "duplicatedId must be defined");
          let R = n.current[f][T],
            O = n.current.byLastId[T];
          if (O && !y) {
            let z = n.current.byLayoutId[O],
              j = !z || z === c;
            O && !i.has(O) && (!c || j) && (y = [O, T]);
          }
          let I = R ? n.current.byLayoutId[R] : void 0,
            N = !I || I === c;
          if (R && !i.has(R) && (!c || N))
            return (
              (r.current[f][l] = R), (r.current.byLastId[T] = R), i.add(R), R
            );
        }
      let g = n.current.byLastId[l];
      if (g && !i.has(g)) return i.add(g), (r.current.byId[l] = g), g;
      if (y) {
        let [w, T] = y;
        return (r.current[f][l] = w), (r.current.byLastId[T] = w), i.add(w), w;
      }
      let b = n.current.byPossibleId[l];
      if (b && !i.has(b)) return i.add(b), (r.current.byId[l] = b), b;
      let h = u?.[0],
        m = c || h || l,
        v = (n.current.count[f][m] ?? -1) + 1,
        { layoutId: S, value: k } = PL(m, v, i);
      if (
        ((n.current.count[f][m] = k), (r.current[f][l] = S), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = S), u.length > 1))
          for (let T = 0; T < u.length - 1; T++) {
            let R = u[T];
            R !== void 0 &&
              (r.current.byPossibleId[R] || (r.current.byPossibleId[R] = S));
          }
      }
      return (r.current.byLayoutId[S] = p), i.add(S), S;
    }, []),
    s = G(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = V({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return C(qo.Provider, { value: a, children: e });
}
function PL(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function _L({ enabled: e = !0, ...t }) {
  let n = A(qo),
    r = re(() => ({ ...n, enabled: e }), [e]);
  return C(qo.Provider, { ...t, value: r });
}
function wt(e) {
  let t = V(null);
  return t.current === null && (t.current = e()), t.current;
}
var OL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  IL = (() => ({
    ...OL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  }))(),
  Ik = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  ML = (() => ({ ...Ik, fontWeight: 500 }))(),
  LL = (() => ({
    ...Ik,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }))();
function Z6(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${VL(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return me("div", {
    style: IL,
    children: [
      C("div", { className: "text", style: ML, children: r }),
      i && C("div", { className: "text", style: LL, children: i }),
    ],
  });
}
function VL(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
function te(e) {
  return Number.isFinite(e);
}
function AL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function qc(e) {
  return typeof e != "string" && typeof e != "number";
}
function Xc(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !AL(e);
}
function DL(e) {
  return e * (Math.PI / 180);
}
var Bc = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = pi.angleFromX(t.a, t.b),
          i = DL(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s }
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          p = (u - l) * (a - o) - (f - c) * (s - i),
          y = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && p === 0) || p === 0) return null;
        let g = d / p,
          b = y / p;
        return r && (g < 0 || g > 1 || b < 0 || b > 1)
          ? null
          : { x: i + g * (s - i), y: o + g * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = pi(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => pi.distance(t.a, t.b)),
      e
    );
  })(),
  ee = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => ee.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = Ac(e.x, t),
        r = Ac(e.y, t),
        i = Ac(e.width, t),
        o = Ac(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: ee.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: ee.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        (t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = pi.distance(t, n),
        l = pi.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = {
          x: Math.min(...e.map(ee.minX)),
          y: Math.min(...e.map(ee.minY)),
        },
        n = { x: Math.max(...e.map(ee.maxX)), y: Math.max(...e.map(ee.maxY)) };
      return ee.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: ee.minX(e), y: ee.minY(e) },
      { x: ee.minX(e), y: ee.maxY(e) },
      { x: ee.maxX(e), y: ee.minY(e) },
      { x: ee.maxX(e), y: ee.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        p = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: p };
    },
    containsPoint: (e, t) =>
      !(
        t.x < ee.minX(e) ||
        t.x > ee.maxX(e) ||
        t.y < ee.minY(e) ||
        t.y > ee.maxY(e) ||
        Number.isNaN(e.x) ||
        Number.isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of ee.points(t)) if (!ee.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= ee.maxX(e) ||
        ee.maxX(t) <= e.x ||
        t.y >= ee.maxY(e) ||
        ee.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = ee.maxX(e),
        r = ee.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = ee.maxY(e),
        r = ee.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => ee.intersects(n, e)) === void 0,
    isEqual: (e, t) => ee.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x
          ? (n = e.x - t.x)
          : t.x > ee.maxX(e) && (n = t.x - ee.maxX(e)),
        t.y < e.y
          ? (r = e.y - t.y)
          : t.y > ee.maxY(e) && (r = t.y - ee.maxY(e)),
        pi.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: ee.minX(e), y: ee.minY(e) },
        r = { x: ee.minX(t), y: ee.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = ee.minX(e),
        r = ee.minY(e),
        i = ee.maxX(e),
        o = ee.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = ee.cornerPoints(e);
      return [Bc(t, n), Bc(n, r), Bc(r, i), Bc(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              i.x = t.x;
              break;
            case "center":
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              i.x = t.x + t.width - e.width;
              break;
            default:
              Ce(r);
          }
          break;
        case "left":
          i.x = t.x - e.width;
          break;
        case "right":
          i.x = t.x + t.width;
          break;
        default:
          Ce(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              i.y = t.y;
              break;
            case "center":
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              i.y = t.y + t.height - e.height;
              break;
            default:
              Ce(r);
          }
          break;
        case "top":
          i.y = t.y - e.height;
          break;
        case "bottom":
          i.y = t.y + t.height;
          break;
        default:
          Ce(n);
      }
      return i;
    },
  };
var Mk = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    te(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || te(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || te(e.maxHeight)) &&
        (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function tu(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var Lk = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = Mk.quickfix({
          left: te(t) || Bn(t),
          right: te(n) || Bn(n),
          top: te(r) || Bn(r),
          bottom: te(i) || Bn(i),
          widthType: tu(o),
          heightType: tu(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        p = null,
        y = 0,
        g = 0;
      if (f.widthType !== 0 && typeof o == "string") {
        let m = parseFloat(o);
        o.endsWith("fr")
          ? ((y = 3), (d = m))
          : o === "auto"
          ? (y = 2)
          : ((y = 1), (d = m / 100));
      } else o !== void 0 && typeof o != "string" && (d = Ot.getNumber(o));
      if (f.heightType !== 0 && typeof s == "string") {
        let m = parseFloat(s);
        s.endsWith("fr")
          ? ((g = 3), (p = m))
          : s === "auto"
          ? (g = 2)
          : ((g = 1), (p = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != "string" && (p = Ot.getNumber(s));
      let b = 0.5,
        h = 0.5;
      return (
        a && (b = parseFloat(a) / 100),
        l && (h = parseFloat(l) / 100),
        {
          left: f.left ? Ot.getNumber(t) : null,
          right: f.right ? Ot.getNumber(n) : null,
          top: f.top ? Ot.getNumber(r) : null,
          bottom: f.bottom ? Ot.getNumber(i) : null,
          widthType: y,
          heightType: g,
          width: d,
          height: p,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: b,
          centerAnchorY: h,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? Ot.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? Ot.getNumber(t?.sizing.height) : null,
        l = QS(e.left, e.right);
      if (s && te(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (te(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            Ce(e.widthType);
        }
      let c = QS(e.top, e.bottom);
      if (a && te(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (te(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            Ce(e.heightType);
        }
      return HL(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = Lk.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? Ot.getNumber(c.width) : null,
        f = c ? Ot.getNumber(c.height) : null;
      e.left !== null
        ? (o = e.left)
        : u && e.right !== null
        ? (o = u - e.right - a)
        : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
          ? (s = f - e.bottom - l)
          : f && (s = e.centerAnchorY * f - l / 2);
      let d = { x: o, y: s, width: a, height: l };
      return r ? ee.pixelAligned(d) : d;
    },
  },
  zL = 200,
  BL = 200;
function nu(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh")) {
      if (!r) return $L(e);
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function $L(e) {
  switch (e) {
    case "minWidth":
    case "minHeight":
      return Number.NEGATIVE_INFINITY;
    case "maxWidth":
    case "maxHeight":
      return Number.POSITIVE_INFINITY;
    default:
      Ce(e, "unknown constraint key");
  }
}
function NL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(nu("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(nu("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function jL(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(nu("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(nu("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function HL(e, t, n, r, i) {
  let o = jL(te(e) ? e : zL, n, r, i),
    s = NL(te(t) ? t : BL, n, r, i);
  return (
    te(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (te(n.left) && te(n.right)
        ? (s = o / n.aspectRatio)
        : te(n.top) && te(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function QS(e, t) {
  return !te(e) || !te(t) ? null : e + t;
}
function WL(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Lm(e) {
  return !e._constraints || WL(e) ? !1 : e._constraints.enabled;
}
function UL(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    te(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    te(n) && te(r) ? { width: n, height: r } : null
  );
}
function GL(e) {
  let t = UL(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return te(n) && te(r) ? { x: n, y: r, ...t } : null;
}
function Vm(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Lm(e) || r) return GL(e);
  let i = qL(e),
    o = XL(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return Lk.toRect(i, s, null, n, null);
}
function qL(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = Mk.quickfix({
      left: te(t),
      right: te(n),
      top: te(r),
      bottom: te(i),
      widthType: tu(l),
      heightType: tu(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    p = null,
    y = null,
    g = 0,
    b = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let v = parseFloat(l);
    l.endsWith("fr")
      ? ((g = 3), (p = v))
      : l === "auto"
      ? (g = 2)
      : ((g = 1), (p = v / 100));
  } else l !== void 0 && typeof l != "string" && (p = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let v = parseFloat(c);
    c.endsWith("fr")
      ? ((b = 3), (y = v))
      : c === "auto"
      ? (b = 2)
      : ((b = 1), (y = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (y = c);
  let h = 0.5,
    m = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (h = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (m = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: g,
      heightType: b,
      width: p,
      height: y,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: h,
      centerAnchorY: m,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var Vk = x.createContext({ parentSize: 0 });
function XL(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Eu() {
  return x.useContext(Vk).parentSize;
}
function Ak(e) {
  return typeof e == "object";
}
var YL = (e) => {
  let t = Eu(),
    { parentSize: n, children: r } = e,
    i = x.useMemo(() => ({ parentSize: n }), [KL(n), QL(n)]);
  return t === 1
    ? r
      ? C(ct, { children: r })
      : null
    : C(Vk.Provider, { value: i, children: r });
};
function KL(e) {
  return Ak(e) ? e.width : e;
}
function QL(e) {
  return Ak(e) ? e.height : e;
}
function ZL(e, t) {
  return C(YL, { parentSize: t, children: e });
}
function JL(e) {
  let t = Eu();
  return Vm(e, t, !0);
}
function Dk({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var eV = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    (e.Padding = "padding"),
    (e.BorderRadius = "borderradius"),
    (e.CollectionReference = "collectionreference"),
    (e.MultiCollectionReference = "multicollectionreference"),
    e
  ))(eV || {}),
  $p;
function tV() {
  if ($p !== void 0) return $p;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), ($p = t), t;
}
var Ui = "flexbox-gap-not-supported",
  ZS = !1;
function rj() {
  ZS || ((ZS = !0), !tV() && document.body.classList.add(Ui));
}
var nV = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  rV = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  iV = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  oV = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  sV = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  aV = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  lV = `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  cV = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  uV = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  fV = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  dV = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  hV = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
  pV = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  mV = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  gV = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  vV = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  yV = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    hV,
    dV,
    nV,
    rV,
    iV,
    oV,
    sV,
    aV,
    lV,
    cV,
    uV,
    fV,
    pV,
    mV,
    gV,
    vV,
  ],
  bV = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes, normal);
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link]:hover,
        code.framer-text span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  xV = new Set(),
  Np;
function zk(e, t, n = xV) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!Np) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) Np = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = Np;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var wV = ["[data-framer-component-type] { position: absolute; }"],
  SV = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  kV = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  CV = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  TV = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  RV = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  EV = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  FV = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  PV = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  _V = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    SV,
    kV,
    CV,
    TV,
    RV,
    EV,
    FV,
    PV,
  ],
  OV = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  IV = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${Ui} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  MV = (() => `
.${Ui} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  LV = (() => `
.${Ui}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Ui}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  VV = (() => `
.${Ui}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Ui}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  AV = (() => [OV, MV, ...IV, LV, VV])(),
  DV = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  zV = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  BV = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  $V = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  NV = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  jV = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  HV = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  WV = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  UV = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  GV = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  jp = "--framer-will-change-override",
  qV = "(background: -webkit-named-image(i))",
  XV = "(grid-template-rows: subgrid)",
  YV = (e) =>
    e
      ? [
          `body { ${jp}: none; }`,
          `@supports ${qV} and (not ${XV}) { body { ${jp}: transform; } }`,
        ]
      : [`body { ${jp}: none; }`],
  KV = (e) => (e ? WV : []),
  QV = [".svgContainer svg { display: block; }"],
  Bk = (e) => [
    ...YV(e),
    ...wV,
    ..._V,
    ...bV,
    ...yV,
    ...AV,
    ...DV,
    ...zV,
    ...BV,
    ...NV,
    ...$V,
    ...jV,
    ...HV,
    ...KV(e),
    ...QV,
    ...UV,
    ...GV,
  ],
  ZV = Bk(!1),
  JV = Bk(!0),
  JS = !1;
function Fu() {
  if (JS) return;
  JS = !0;
  let e = ae.current() === ae.preview ? JV : ZV;
  for (let t of e) zk(t, void 0, void 0);
}
function eA(e) {
  return be(e) || $n(e);
}
var e1 = "optional";
function tA(e) {
  return !!e && e1 in e && e[e1] === !0;
}
function nA(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "multicollectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
        return ue(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return Fm(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Xe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return be(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return be(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return be(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = be(e.defaultValue) ? e.defaultValue : {};
        return be(e.controls) && $k(t, e.controls), t;
      }
      case "array":
        return Ru(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function $k(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Xe(i) || tA(r)) continue;
    let o = nA(r);
    Xe(o) || (e[n] = o);
  }
}
function rA(e) {
  if (be(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function iA(e, t) {
  if (!eA(e)) return;
  let n = rA(e);
  $k(n, t);
}
function ij(e, t) {
  Object.assign(e, { propertyControls: t }), iA(e, t);
}
function oA(e) {
  return e.propertyControls;
}
var rt = (e) => e;
function sA(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var aA =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  lA = sA(
    (e) =>
      aA.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  t1 = (e) => () => {
    ka(e);
  },
  cA = () => () => {},
  uA = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = xt.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  fA = !1,
  dA = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
        ? cA()
        : t1(
            fA
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  xt = new Proxy(uA, dA);
var n1 = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  hA = {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "126px auto",
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI2IiBoZWlnaHQ9IjEyNiI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0xMjYgMHYyMS41ODRMMjEuNTg0IDEyNkgwdi0xNy41ODVMMTA4LjQxNSAwSDEyNlptMCAxMDguNDE0VjEyNmgtMTcuNTg2TDEyNiAxMDguNDE0Wm0wLTg0djM5LjE3MUw2My41ODUgMTI2SDI0LjQxNEwxMjYgMjQuNDE0Wm0wIDQydjM5LjE3TDEwNS41ODQgMTI2aC0zOS4xN0wxMjYgNjYuNDE0Wk0xMDUuNTg2IDAgMCAxMDUuNTg2VjY2LjQxNUw2Ni40MTUgMGgzOS4xNzFabS00MiAwTDAgNjMuNTg2VjI0LjQxNUwyNC40MTUgMGgzOS4xNzFabS00MiAwTDAgMjEuNTg2VjBoMjEuNTg2WiIvPjwvZGVmcz48dXNlIHhsaW5rOmhyZWY9IiNhIiBmaWxsPSIjODg4IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)",
    opacity: 0.2,
  };
function pA(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Nk(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function Am(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: Nk(e.positionX, e.positionY),
    objectFit: pA(e.fit),
  };
}
function mA({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  syncDecoding: o,
}) {
  let s = xt.useImageSource(e, t, n),
    a = Am(e),
    l = x.useRef(null);
  return C("img", {
    ref: l,
    decoding: o ? "sync" : "async",
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    sizes: e.sizes,
    srcSet: e.srcSet,
    src: s,
    alt: r ?? e.alt ?? "",
    style: a,
    draggable: i,
  });
}
function gA({ image: e, containerSize: t, nodeId: n }) {
  let r = x.useRef(null),
    i = xt.useImageElement(e, t, n),
    o = Am(e);
  return (
    x.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function vA({ nodeId: e, image: t, containerSize: n }) {
  let r = x.useRef(null),
    i = xt.useImageSource(t, n, e);
  return (
    x.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = Am(t);
      xt.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i]),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function jk({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...n1, ...hA },
    i = null;
  if (ue(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = et(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = xt.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = Nk(t.positionX, t.positionY)),
        (r.opacity = void 0),
        (r.border = 0),
        (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (i = null);
    } else
      ae.current() !== ae.canvas
        ? (i = C(mA, {
            image: t,
            syncDecoding: ae.current() === ae.export,
            ...n,
          }))
        : xt.canRenderOptimizedCanvasImage(xt.useImageSource(t))
        ? (i = C(vA, { image: t, ...n }))
        : (i = C(gA, { image: t, ...n }));
  return C(Jt.div, {
    layoutId: e,
    style: i ? n1 : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
function yA(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function bA(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), C(Jt.div, { style: n }))
    : (yA(e, n, !1),
      C(Jt.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
var xA = "src",
  r1 = {
    isImageObject: function (e) {
      return !e || typeof e == "string" ? !1 : xA in e;
    },
  };
function wA(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == "string" && (e = { ...e, src: s }), e;
}
function SA(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !r1.isImageObject(t)) return;
  let r = null;
  if (
    (ue(n) ? (r = { alt: "", src: n }) : (r = Ot.get(t, null)),
    !!r1.isImageObject(r))
  )
    return wA(r, e);
}
function Pu(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? Jt[e]
    : Jt.div;
}
var kA = dr(Tm(), 1),
  Rn = typeof Re < "u" ? Re : void 0,
  Lr = () => typeof document == "object";
var CA = () =>
    Rn &&
    /Chrome/u.test(Rn.userAgent) &&
    /Google Inc/u.test(Rn.vendor) &&
    !FA(),
  TA = () =>
    Rn && /Safari/u.test(Rn.userAgent) && /Apple Computer/u.test(Rn.vendor),
  RA = () => Rn && /Firefox\/\d+\.\d+$/u.test(Rn.userAgent),
  EA = () => Rn && /FramerX/u.test(Rn.userAgent),
  FA = () => Rn && /Edg\//u.test(Rn.userAgent);
var PA = () => kA.default.env.NODE_ENV === "test";
var _A = CA();
function OA(e, t) {
  (e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] =
      t === !0 || t === "y" ? !0 : void 0);
}
function IA(e) {
  let t = {};
  return !e || !_A || ae.current() !== ae.canvas || OA(t, e), t;
}
function Dm(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function MA(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = x.Children.map(t, (r) =>
        x.isValidElement(r) ? x.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function zm(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function _u(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = A(qo);
  return re(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var dm = typeof document < "u" ? De : B,
  Qo = x.createContext(!1);
function Ou() {
  let [e, t] = x.useState(0);
  return x.useCallback(() => t((n) => n + 1), []);
}
var LA = (() => J2().ResizeObserver)();
var VA = class {
    constructor() {
      E(this, "sharedResizeObserver"), E(this, "callbacks", new WeakMap());
      let e = st.ResizeObserver ?? LA;
      this.sharedResizeObserver = new e(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = this.callbacks.get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedResizeObserver.observe(e), this.callbacks.set(e, t);
    }
    unobserve(e) {
      this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e);
    }
  },
  $c = (() => (Lr() ? new VA() : void 0))();
function AA(e) {
  let t = Ou();
  B(() => {
    let n = e?.current;
    if (n)
      return (
        $c?.observeElementWithCallback(e.current, t),
        () => {
          $c?.unobserve(n);
        }
      );
  }, [e, t]);
}
var DA = "data-framer-size-compatibility-wrapper";
function zA(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(DA)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Hk)
    .map(Wk);
}
function Hk(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Wk(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(Hk);
  return t ? Wk(t) : e;
}
function Bm(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!A(Qo),
    c = ae.current() === ae.canvas;
  dm(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        xt.queueMeasureRequest(Dm(i), t.current, n(t.current)));
  });
}
function BA(e) {
  let t = e.closest("[data-framer-component-container]");
  t && xt.queueMeasureRequest(Dm(t.id), t, zA(t));
}
var Gi = Object.keys;
function ru(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
var $A = "equals";
function i1(e) {
  return e === null || !($A in e) ? !1 : typeof e.equals == "function";
}
function $m(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function NA(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!$m(e[r], t[r])) return !1;
  return !0;
}
function jA(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!Iu(e[r], t[r], !0)) return !1;
  return !0;
}
function HA(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!$m(r, t.get(n))) return !1;
  return !0;
}
function WA(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Iu(r, t.get(n), !0)) return !1;
  return !0;
}
function UA(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function GA(e, t) {
  let n = Gi(e);
  if (n.length !== Gi(t).length) return !1;
  for (let r of n) {
    if (!ru(t, r)) return !1;
    if (!(r === "_owner" && ru(e, "$$typeof") && e.$$typeof) && !$m(e[r], t[r]))
      return !1;
  }
  return !0;
}
function qA(e, t) {
  let n = Gi(e);
  if (n.length !== Gi(t).length) return !1;
  for (let r of n) {
    if (!ru(t, r)) return !1;
    if (
      !(r === "_owner" && ru(e, "$$typeof") && e.$$typeof) &&
      !Iu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function Iu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? jA(e, t) : NA(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? WA(e, t) : HA(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return UA(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let p = e instanceof RegExp,
    y = t instanceof RegExp;
  return p && y
    ? e.toString() === t.toString()
    : p !== y
    ? !1
    : i1(e) && i1(t)
    ? e.equals(t)
    : n
    ? qA(e, t)
    : GA(e, t);
}
function Nm(e, t, n = !0) {
  try {
    return Iu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var Uk = "0.000001px",
  Hp = (() => ` translateZ(${Uk})`)(),
  Gk = (() => EA() || TA() || PA())();
function XA(e) {
  e.willChange = "transform";
  let t = ae.current() === ae.canvas;
  Gk && t && (e.translateZ = Uk);
}
function jm(e) {
  (e.willChange = "transform"), YA(e, !0);
}
function YA(e, t) {
  let n = ae.current() === ae.canvas;
  if (!Gk || !n) return;
  let r = (ue(e.transform) && e.transform) || "";
  t
    ? r.includes(Hp) || (e.transform = r + Hp)
    : (e.transform = r.replace(Hp, ""));
}
function KA(e, t, n, r = !0) {
  if (!e) return;
  let i = rt(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var QA = (() => {
  class e extends xe {
    constructor() {
      super(...arguments),
        E(this, "layerElement", null),
        E(this, "setLayerElement", (n) => {
          this.layerElement = n;
        });
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? XA(r) : jm(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !Nm(this.props, n);
    }
    componentDidUpdate(n) {
      rt(this.props).clip &&
        rt(this.props).radius === 0 &&
        rt(n).radius !== 0 &&
        KA(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return E(e, "defaultProps", {}), e;
})();
function ZA(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function JA(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  ZA(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var qk = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  eD = {
    hueRotate: (e, t) => K.toHslString(K.hueRotate(K(e), t)),
    setAlpha: (e, t) => K.toRgbString(K.alpha(K(e), t)),
    getAlpha: (e) => {
      let t = Mm(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => K.toRgbString(K.multiplyAlpha(K(e), t)),
    toHex: (e) => K.toHexString(K(e)).toUpperCase(),
    toRgb: (e) => K.toRgb(K(e)),
    toRgbString: (e) => K.toRgbString(K(e)),
    toHSV: (e) => K.toHsv(K(e)),
    toHSL: (e) => K.toHsl(K(e)),
    toHslString: (e) => K.toHslString(K(e)),
    toHsvString: (e) => K.toHsvString(K(e)),
    hsvToHSLString: (e) => K.toHslString(K(Dc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => K.toHexString(K(Dc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => K.toRgbString(K(Dc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Dc(e.h, e.s, e.v),
    rgbaToString: (e) => K.toRgbString(K(e)),
    rgbToHexString: (e) => K.toHexString(K(e)),
    hslToString: (e) => K.toHslString(K(e)),
    hslToRgbString: (e) => K.toRgbString(K(e)),
    toColorPickerSquare: (e) => K.toRgbString(K({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => K(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = K(e)),
      typeof t == "string" && (t = K(t)),
      K.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = K(e);
      return t.a !== 1 ? K.toRgbString(t) : K.toHexString(t);
    },
  },
  tD = /var\(.+\)/u,
  nD = new Map();
function rD(e, t) {
  let n = [e, t];
  return tD.test(e) ? e : JA(1e3, nD, n, () => eD.multiplyAlpha(e, t));
}
function Hm(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: rD(r.value, t) }))
  );
}
function Xk(e, t) {
  let n = 0;
  return (
    Hm(e, t).forEach((r) => {
      n ^= qk(r.value) ^ r.position;
    }),
    n
  );
}
var iD = ["stops"];
function Yk(e) {
  return e && iD.every((t) => t in e);
}
var oD = ["start", "end"];
function Kk(e) {
  return e && oD.every((t) => t in e);
}
var sD = ["angle", "alpha"],
  o1 = {
    isLinearGradient: (e) => e && sD.every((t) => t in e) && (Kk(e) || Yk(e)),
    hash: (e) => e.angle ^ Xk(e, e.alpha),
    toCSS: (e, t) => {
      let n = Hm(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  aD = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  s1 = {
    isRadialGradient: (e) => e && aD.every((t) => t in e) && (Kk(e) || Yk(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      Xk(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Hm(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(", ")})`;
    },
  };
function lD({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || XS(t)
      ? (n.backgroundColor = t)
      : K.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || K.toRgbString(e))
    : e &&
      ((e = Ot.get(e, null)),
      typeof e == "string" || XS(e)
        ? (n.background = e)
        : o1.isLinearGradient(e)
        ? (n.background = o1.toCSS(e))
        : s1.isRadialGradient(e)
        ? (n.background = s1.toCSS(e))
        : K.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || K.toRgbString(e)));
}
function ye(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function cD(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function uD(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function fD(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    ye(e, "size", t),
    ye(e, "width", t),
    ye(e, "height", t),
    ye(e, "minWidth", t),
    ye(e, "minHeight", t),
    ye(e, "top", t),
    ye(e, "right", t),
    ye(e, "bottom", t),
    ye(e, "left", t),
    ye(e, "position", t),
    ye(e, "overflow", t),
    ye(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && ye(e, "border", t),
    ye(e, "borderRadius", t),
    ye(e, "radius", t, "borderRadius"),
    ye(e, "color", t),
    ye(e, "shadow", t, "boxShadow"),
    ye(e, "x", t),
    ye(e, "y", t),
    ye(e, "z", t),
    ye(e, "rotate", t),
    ye(e, "rotateX", t),
    ye(e, "rotateY", t),
    ye(e, "rotateZ", t),
    ye(e, "scale", t),
    ye(e, "scaleX", t),
    ye(e, "scaleY", t),
    ye(e, "skew", t),
    ye(e, "skewX", t),
    ye(e, "skewY", t),
    ye(e, "originX", t),
    ye(e, "originY", t),
    ye(e, "originZ", t),
    lD(e, t),
    t
  );
}
function dD(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof rt(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var a1 = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  hD = (() => new Set([...a1, ...a1.map((e) => `${e}Capture`)]))();
function pD(e) {
  if (e.drag) return "grab";
  for (let t in e) if (hD.has(t)) return "pointer";
}
var Wp = "overflow";
function mD(e) {
  return l1(e) ? !0 : e.style ? !!l1(e.style) : !1;
}
function l1(e) {
  return Wp in e && (e[Wp] === "scroll" || e[Wp] === "auto");
}
function Qk(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: p,
    } = e,
    y = Ct(e.minWidth),
    g = Ct(e.minHeight),
    b = Ct(e.maxWidth),
    h = Ct(e.maxHeight);
  return {
    top: Ct(n),
    left: Ct(t),
    bottom: Ct(r),
    right: Ct(i),
    width: Ct(o),
    height: Ct(s),
    size: Ct(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: p,
    minWidth: y,
    minHeight: g,
    maxWidth: b,
    maxHeight: h,
  };
}
var c1 = { x: 0, y: 0, width: 200, height: 200 };
function gD(e) {
  x.useInsertionEffect(() => {
    Fu();
  }, []);
  let t = !!A(Qo),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = Qk(e),
    a = JL(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: ae.current() !== ae.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !dD(e) && !e.__fromCanvasComponent && !mD(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = x.Children.count(e.children) > 0 &&
      x.Children.toArray(e.children).every(
        (h) => typeof h == "string" || typeof h == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    p = fD(e);
  o === void 0 &&
    !i &&
    (cD(p) || (l.width = c1.width), uD(p) || (l.height = c1.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let y = {};
  Lm(s) &&
    a &&
    !Dk(e) &&
    (y = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, p, y, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    QA.applyWillChange(e, l, !0);
  let g = l;
  l.transform || (g = { x: 0, y: 0, ...l });
  let b = ae.current() === ae.canvas;
  return (
    e.positionSticky
      ? (!b || t) &&
        ((g.position = "sticky"),
        (g.willChange = "transform"),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : b &&
        (e.positionFixed || e.positionAbsolute) &&
        (g.position = "absolute"),
    "rotate" in g && g.rotate === void 0 && delete g.rotate,
    [g, a]
  );
}
var vD = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function yD(e) {
  let t = {};
  for (let n in e)
    (oo(n) || lA(n)) && !vD.has(n)
      ? (t[n] = rt(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof rt(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = rt(e)[n]));
  return t;
}
function bD(e) {
  return "data-framer-name" in e;
}
var xD = Ae(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = MA(t),
      u = yD(l),
      f = _u(t),
      d = pD(t),
      p = V(null),
      y = n ?? p,
      g = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": rt(t)["data-framer-offset-parent-id"],
      };
    !bD(t) && r && (rt(g)["data-framer-name"] = r);
    let [b, h] = gD(l),
      m = Qk(l),
      v = Dk(m);
    i && !(h && !v && Lm(m))
      ? (u.transformTemplate || (u.transformTemplate = zm(i)),
        Object.assign(g, IA(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      Bm(t, y);
    let S = SA(t),
      k = !!A(Qo),
      w = wD(l, m, h, k),
      T = ZL(
        me(ct, {
          children: [
            S
              ? C(jk, {
                  alt: t.alt ?? "",
                  image: S,
                  containerSize: h ?? void 0,
                  nodeId: t.id && Dm(t.id),
                  layoutId: f,
                })
              : null,
            c,
            C(bA, { ...s, border: o, layoutId: f }),
          ],
        }),
        w
      ),
      R = Pu(t.as),
      { size: O, radius: I, shadow: N } = b;
    return (
      O !== void 0 &&
        (delete b.size,
        b.height === void 0 && (b.height = O),
        b.width === void 0 && (b.width = O)),
      I !== void 0 && (delete b.radius, (b.borderRadius = I)),
      N !== void 0 && (delete b.shadow, (b.boxShadow = N)),
      me(R, { ...g, ...u, layoutId: f, style: b, ref: y, children: [T, a] })
    );
  }),
  Yc = Ae(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? C(xD, { ...t, ref: n }) : null;
  });
function wD(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
var Wm = "__LAYOUT_TREE_ROOT",
  Zk = x.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  SD = class extends xe {
    constructor() {
      super(...arguments),
        E(this, "shouldAnimate", !1),
        E(this, "transition"),
        E(this, "lead"),
        E(this, "follow"),
        E(this, "scheduledPromotion", !1),
        E(this, "scheduledDidUpdate", !1),
        E(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        E(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        E(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        E(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === Wm &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return C(Zk.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  kD = { width: "100%", height: "100%", backgroundColor: "none" };
function CD(e) {
  return C(Jt.div, { layoutId: Wm, style: kD, children: e.children });
}
function u1(e, t) {
  $n(e) ? e(t) : Jk(e) && (e.current = t);
}
function Jk(e) {
  return be(e) && "current" in e;
}
function TD() {
  let e = wt(() => new Set()),
    t = wt(() => new Map());
  return wt(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      r && r(i), (n.current = i);
      let o = i === null;
      e.forEach((s) => {
        if (o && t.has(s)) return;
        let a = s(i);
        a && t.set(s, a);
      }),
        o && (t.forEach((s) => s()), t.clear());
    },
    observe(i, o = !1) {
      e.has(i) || (e.add(i), !o && n.current && i(n.current));
    },
    unobserve(i) {
      i && e.delete(i);
    },
    cleanup(i) {
      var o;
      return !i || !t.has(i) ? !1 : ((o = t.get(i)) == null || o(), !0);
    },
  }));
}
function eC(e) {
  let t = V(null),
    n = TD();
  return wt(() => (Jk(e) ? n(e) : $n(e) ? n(t, e) : n(t)));
}
function qi(e, t, n) {
  var r;
  let i = V(),
    o = V();
  if (
    (re(() => {
      o.current !== void 0 && (o.current = !0);
    }, [n]),
    !e)
  )
    return;
  let s = o.current;
  if (s) {
    (o.current = !1),
      e.cleanup(i.current) || (r = i.current) == null || r.call(i, null);
    let a = e.current;
    a && t?.(a);
  }
  i.current !== t &&
    (e.unobserve(i.current),
    (i.current = t),
    e.observe(t, s),
    o.current === void 0 && (o.current = !1));
}
var RD = class {
    constructor(e) {
      E(this, "sharedIntersectionObserver"),
        E(this, "callbacks", new WeakMap()),
        document &&
          (this.sharedIntersectionObserver = new IntersectionObserver(
            this.resizeObserverCallback.bind(this),
            e
          ));
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = this.callbacks.get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(e),
        this.callbacks.delete(e));
    }
    get root() {
      var e;
      return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root;
    }
  },
  ED = ge(new Map());
function FD(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = wt(() => `${n.rootMargin}`),
    i = A(ED),
    { enabled: o } = n;
  qi(
    e,
    (s) => {
      var a;
      if (!o || s === null) return;
      let l = i.get(r);
      if (!l || l.root !== ((a = n.root) == null ? void 0 : a.current)) {
        let { root: c, ...u } = n;
        (l = new RD({ ...u, root: c?.current })), i.set(r, l);
      }
      return (
        l.observeElementWithCallback(s, t),
        () => {
          l?.unobserve(s);
        }
      );
    },
    [o]
  );
}
var PD = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  _D = x.createContext(null);
function OD(e, t, n) {
  let r = x.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = "0px 0px 0px 0px",
    } = n,
    l = x.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = MD(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    );
  FD(e, l, { threshold: PD, rootMargin: a, enabled: i ?? !0 });
}
function ID(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, st.innerHeight);
}
function MD(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && ID(t, e) >= r;
}
var Vj = dr(ku(), 1);
var Dj = dr(ku(), 1);
var f1 = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  Ir = Symbol("private"),
  Up = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [Ir]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new Fk(),
            reset() {
              for (let s in o)
                if (f1(o, s)) {
                  let a = f1(t, s) ? rt(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, VD);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[Ir].reset()),
      (e.addObserver = (t, n) => t[Ir].observers.add(n)),
      e
    );
  })(),
  LD = class {
    constructor() {
      E(this, "set", (e, t, n, r) => {
        if (t === Ir) return !1;
        let i = e[Ir],
          o,
          s;
        if (
          (Bn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = Ot(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = rt(e)[t];
        if (c !== void 0) {
          Bn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (rt(e)[t] = s));
          let u = s !== null && typeof s == "object";
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        E(this, "get", (e, t, n) => {
          if (t === Ir) return rt(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[Ir].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(Ir);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== Ir) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  VD = new LD();
function AD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function tC(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function DD(e, t) {
  let n = [];
  te(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    te(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    te(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    te(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    te(e.invert) && n.push(`invert(${e.invert / 100})`),
    te(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    te(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    te(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...AD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function zD(e, t) {
  te(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function nC(e, t) {
  zD(e, t), DD(e, t);
}
var BD = class extends xe {
    constructor() {
      super(...arguments),
        E(this, "layoutMaybeMutated"),
        E(this, "projectionNodes", new Map()),
        E(this, "rootProjectionNode"),
        E(this, "isExiting"),
        E(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === Wm && !this.props.isExiting
        ),
        E(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return C(al.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  $D = (e) => {
    let t = x.useContext(Zk);
    return C(BD, { ...e, sharedLayoutContext: t });
  },
  rC = x.createContext(!0);
function Xj() {
  return A(rC);
}
function ND() {
  return new Map();
}
function jD() {
  return wt(ND);
}
var HD = ge({ register: () => {}, deregister: () => {} }),
  WD = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = jD(),
      i = G(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = G(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = V({ register: i, deregister: o }).current;
    return (
      B(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, $n(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      C(HD.Provider, { value: s, children: n })
    );
  };
var Gp = x.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: p,
  instant: y,
  initialProps: g,
  exitProps: b,
  position: h = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: m,
  index: v,
  areMagicMotionLayersPresent: S,
  id: k,
  isInitial: w,
}) {
  let T = K0(),
    R = A(co),
    { persistLayoutIdCache: O } = A(qo),
    I = V({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: d1({}, g, s),
    }),
    N = V(null),
    z = R !== null && !R.isPresent;
  n && I.current.wasCurrent === void 0 && O(),
    B(() => {
      if (t || !T) return;
      if (z) {
        I.current = { ...I.current, wasBeingRemoved: z };
        return;
      }
      let { wasPrevious: he, wasCurrent: J } = I.current,
        Oe = (n && !J) || (!z && I.current.wasBeingRemoved && n),
        Ee = r && !he,
        tt = d1(I.current.origins, g, s),
        Ie = I.current.wasReset;
      Oe || Ee
        ? (T.stop(), T.start({ zIndex: v, ...tt, ...s }), (Ie = !1))
        : Ie === !1 &&
          (T.stop(), T.set({ zIndex: v, ...Hi, opacity: 0 }), (Ie = !0)),
        (I.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: Ie,
          origins: tt,
        });
    }, [n, r, z]);
  let j = y ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    Y = y ? { type: !1 } : p || d,
    H = { ...h };
  (H.left === void 0 || H.right === void 0) && (H.width = "auto"),
    (H.top === void 0 || H.bottom === void 0) && (H.height = "auto");
  let ne = (h1(s) || h1(g)) && (t || n || r) ? 1200 : void 0,
    fe = { ...Hi, ...I.current.origins },
    Q = t
      ? {
          initial: { ...fe, ...g },
          animate: { ...fe, ...s, transition: j },
          exit: { ...fe, ...b, transition: d },
        }
      : { animate: T, exit: { ...fe, ...b, transition: Y } },
    se = !(z || S === !1),
    we = !!n && se;
  return me(Yc, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || z || (n && m) ? v : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: ne,
    },
    children: [
      t &&
        C(Yc, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: y && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: z ? void 0 : c,
        }),
      C(Yc, {
        ...H,
        ...Q,
        transition: {
          default: j,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: z ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && m) ? 1 : 0,
        },
        "data-is-present": se ? void 0 : !1,
        ref: N,
        children: C(_D.Provider, {
          value: N,
          children: C(rC.Provider, {
            value: we,
            children: C(WD, {
              isCurrent: we,
              isOverlayed: i,
              children: C($D, {
                isLead: n,
                animatesLayout: !!m,
                transition: j,
                isExiting: !se,
                isOverlayed: i,
                id: k,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
UD);
function UD(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function d1(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (te(t.originX) && (r.originX = t.originX),
      te(t.originY) && (r.originY = t.originY),
      te(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (te(n.originX) && (r.originX = n.originX),
      te(n.originY) && (r.originY = n.originY),
      te(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function h1(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var Hi = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  GD = class {
    constructor() {
      E(this, "warning", () => {
        ka(
          "The Navigator API is only available inside of Framer: https://www.framer.com/"
        );
      }),
        E(this, "goBack", () => this.warning()),
        E(this, "instant", () => this.warning()),
        E(this, "fade", () => this.warning()),
        E(this, "push", () => this.warning()),
        E(this, "modal", () => this.warning()),
        E(this, "overlay", () => this.warning()),
        E(this, "flip", () => this.warning()),
        E(this, "customTransition", () => this.warning()),
        E(this, "magicMotion", () => this.warning());
    }
  },
  qD = new GD(),
  XD = ge(qD),
  ht = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function YD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return ht.PushLeft;
    case "left":
      return ht.PushRight;
    case "bottom":
      return ht.PushUp;
    case "top":
      return ht.PushDown;
  }
}
function KD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return ht.OverlayLeft;
    case "left":
      return ht.OverlayRight;
    case "bottom":
      return ht.OverlayUp;
    case "top":
      return ht.OverlayDown;
  }
}
function QD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return ht.FlipLeft;
    case "left":
      return ht.FlipRight;
    case "bottom":
      return ht.FlipUp;
    case "top":
      return ht.FlipDown;
  }
}
var ZD = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function p1(e, t) {
  switch (t.type) {
    case "addOverlay":
      return e3(e, t.transition, t.component);
    case "removeOverlay":
      return t3(e);
    case "add":
      return iC(e, t.key, t.transition, t.component);
    case "remove":
      return oC(e);
    case "update":
      return JD(e, t.key, t.component);
    case "back":
      return n3(e);
    case "forward":
      return r3(e);
    default:
      return;
  }
}
function JD(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function e3(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function t3(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function iC(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? a3(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let y in e.containerIndex)
    e.containerIndex[y] === c && (e.containerIndex[y] = s3(y, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = i3(e, t, l),
    p = sC(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function n3(e) {
  let t = { ...e.containers },
    n = oC(e);
  if (n) return (n.containers = t), n;
}
function r3(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = iC(e, n, r, i);
  if (s) return (s.history = o), s;
}
function oC(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  D(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = o3(e, r, n),
    f = sC(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function i3(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function o3(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function s3(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function sC(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = l3(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function a3(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function l3(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return Nc("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return Nc("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return Nc("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return Nc("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var c3 = Gi(Hi);
function Nc(e, t, n) {
  let r = {},
    i = {};
  return (
    c3.forEach((o) => {
      (r[o] = Hi[o]), (i[o] = { ...n, from: Hi[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${rt(Hi)[o]}%` : rt(Hi)[o];
        (rt(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var u3 = x.createContext(void 0);
var aC = x.createContext(void 0),
  f3 = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends xe {
        constructor(c) {
          var u;
          super(c),
            Qt(this, n),
            Qt(this, i),
            Qt(this, a),
            Qt(this, e, null),
            E(this, "state", ZD()),
            Qt(this, s, (b) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let h = p1(this.state, b);
              if (!h) return;
              let { skipLayoutAnimation: m } = this.props,
                v = h.history[h.current],
                S =
                  (b.type === "add" && b.transition.withMagicMotion) ||
                  (b.type === "forward" && v?.transition.withMagicMotion) ||
                  (b.type === "remove" && !!h.previousTransition),
                k = () => {
                  var w;
                  this.setState(h),
                    v?.key &&
                      ((w = this.context) == null || w.call(this, v.key));
                };
              m && !S ? m(k) : k();
            }),
            E(this, "goBack", () => {
              var b;
              if (!Nt(this, i, o).call(this))
                return (
                  Du(
                    this,
                    e,
                    ((b = globalThis.event) == null ? void 0 : b.timeStamp) ||
                      null
                  ),
                  this.state.currentOverlay !== -1
                    ? de(this, s).call(this, { type: "removeOverlay" })
                    : de(this, s).call(this, { type: "remove" })
                );
            });
          let f = this.props.children;
          if (!f || !Xc(f) || !qc(f)) return;
          let d = { ...ht.Instant },
            y = {
              type: "add",
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            g = p1(this.state, y);
          g && (this.state = g);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!Xc(f) || !qc(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? Nt(this, a, l).call(this, f, ht.Instant)
              : de(this, s).call(this, {
                  type: "update",
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          Nt(this, a, l).call(this, c, ht.Instant, void 0);
        }
        fade(c, u) {
          Nt(this, a, l).call(this, c, ht.Fade, u);
        }
        push(c, u) {
          Nt(this, a, l).call(this, c, YD(u), u);
        }
        modal(c, u) {
          Nt(this, a, l).call(this, c, ht.Modal, u);
        }
        overlay(c, u) {
          Nt(this, a, l).call(this, c, KD(u), u);
        }
        flip(c, u) {
          Nt(this, a, l).call(this, c, QD(u), u);
        }
        magicMotion(c, u) {
          Nt(this, a, l).call(this, c, ht.MagicMotion, u);
        }
        customTransition(c, u) {
          Nt(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, p;
          let y = Nt(this, n, r).call(this, { overCurrentContext: !1 }),
            g = Nt(this, n, r).call(this, { overCurrentContext: !0 }),
            b = d3(g),
            h = g.current > -1,
            m = this.state.history.length === 1,
            v = [];
          for (let [k, w] of Object.entries(this.state.containers)) {
            let T = this.state.containerIndex[k];
            D(T !== void 0, "Container's index must be registered");
            let R = this.state.containerVisualIndex[k];
            D(R !== void 0, "Container's visual index must be registered");
            let O = this.state.containerIsRemoved[k],
              I = this.state.history[T],
              N = this.state.transitionForContainer[k],
              z = T === this.state.current,
              j = T === this.state.previous,
              Y = z ? !1 : O,
              H =
                ((c = I?.transition) == null ? void 0 : c.withMagicMotion) ||
                (z && !!this.state.previousTransition);
            v.push(
              C(
                Gp,
                {
                  id: k,
                  index: R,
                  isInitial: m,
                  isCurrent: z,
                  isPrevious: j,
                  isOverlayed: h,
                  visible: z || j,
                  position: (u = I?.transition) == null ? void 0 : u.position,
                  instant: g1(T, y),
                  transitionProps: N,
                  animation: m1(T, y),
                  backfaceVisible: b3(T, y),
                  exitAnimation:
                    (f = I?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = I?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (p = I?.transition) == null ? void 0 : p.enter,
                  withMagicMotion: H,
                  areMagicMotionLayersPresent: Y ? !1 : void 0,
                  children: C(CD, {
                    children: v1({ component: w, transition: I?.transition }),
                  }),
                },
                k
              )
            );
          }
          let S = this.state.overlayStack.map((k, w) =>
            C(
              Gp,
              {
                isLayeredContainer: !0,
                isCurrent: w === this.state.currentOverlay,
                position: k.transition.position,
                initialProps: y3(w, g),
                transitionProps: x3(w, g),
                instant: g1(w, g, !0),
                animation: m1(w, g),
                exitProps: k.transition.enter,
                visible: w3(w, g),
                backdropColor: g3(k.transition),
                backfaceVisible: v3(w, g),
                onTapBackdrop: S3(k.transition, this.goBack),
                index: this.state.current + 1 + w,
                children: v1({
                  component: k.component,
                  transition: k.transition,
                }),
              },
              k.key
            )
          );
          return C(Yc, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
              overflow: "hidden",
              backgroundColor: "unset",
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: C(XD.Provider, {
              value: this,
              children: me(aC.Provider, {
                value: m,
                children: [
                  C(Gp, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: h3(b),
                    animation: p3(b),
                    backfaceVisible: m3(b),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: C(FL, {
                      children: C(SD, {
                        children: C(md, {
                          presenceAffectsLayout: !1,
                          children: v,
                        }),
                      }),
                    }),
                  }),
                  C(md, { children: S }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: p,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: p, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? de(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, p;
        if (
          Nt(this, i, o).call(this) ||
          (Du(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null
          ),
          !c || !Xc(c) || !qc(c))
        )
          return;
        let y = { ...u, ...f };
        if (!!y.overCurrentContext)
          return de(this, s).call(this, {
            type: "addOverlay",
            transition: y,
            component: c,
          });
        let b =
          ((p = c.key) == null ? void 0 : p.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        de(this, s).call(this, {
          type: "add",
          key: b,
          transition: y,
          component: c,
        });
      }),
      E(t, "defaultProps", { enabled: !0 }),
      E(t, "contextType", u3),
      t
    );
  })(),
  lC = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function d3(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function h3({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function p3({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : lC;
}
function m3({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function g3(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function v3(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function y3(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function b3(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function x3(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function m1(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return lC;
}
function g1(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function w3(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function v1(e) {
  return x.Children.map(e.component, (n) => {
    var r;
    if (!Xc(n) || !qc(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? be(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      x.cloneElement(n, i)
    );
  });
}
function S3(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function k3(e) {
  let t = Z0(),
    n = wd();
  return (
    x.useInsertionEffect(() => {
      Fu();
    }, []),
    C(f3, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var eH = dr(ku(), 1);
var oH = dr(Tm(), 1);
function C3(e, t) {
  let n,
    r = (...o) => {
      st.clearTimeout(n), (n = st.setTimeout(e, t, ...o));
    },
    i = () => {
      st.clearTimeout(n);
    };
  return (r.cancel = i), r;
}
function iu(...e) {
  return e.filter(Boolean).join(" ");
}
var T3 = (() => {
    function e(t = {}) {
      let n = Up(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => Up.resetObject(t));
      }),
      (e.addObserver = (t, n) => Up.addObserver(t, n)),
      e
    );
  })(),
  qp = T3;
var R3 = { update: 0 },
  E3 = x.createContext({ update: NaN });
var F3 = class extends xe {
    constructor() {
      super(...arguments),
        E(this, "observers", []),
        E(this, "state", R3),
        E(this, "taskAdded", !1),
        E(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        E(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), Ok.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), qp.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        qp._stores.forEach((t) => {
          let n = qp.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        C(E3.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  OH = dr(ku(), 1);
var cC = "__framer__",
  P3 = (() => cC.length)();
function _3(e) {
  if (e.startsWith(cC)) return e.substr(P3);
}
var cr = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "skewX",
    "skewY",
    "transformPerspective",
  ],
  ou = (e) => ({
    x: Ge(e?.x ?? 0),
    y: Ge(e?.y ?? 0),
    opacity: Ge(e?.opacity ?? 1),
    scale: Ge(e?.scale ?? 1),
    rotate: Ge(e?.rotate ?? 0),
    rotateX: Ge(e?.rotateX ?? 0),
    rotateY: Ge(e?.rotateY ?? 0),
    skewX: Ge(e?.skewX ?? 0),
    skewY: Ge(e?.skewY ?? 0),
    transformPerspective: Ge(e?.transformPerspective ?? 0),
  }),
  Je = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function uC(e) {
  return e in Je;
}
function fC(e, t) {
  let n = wt(() => ({ values: ou(t ? e : void 0) }));
  return (
    x.useEffect(() => {
      if (!t)
        for (let r of cr) {
          let i = Je[r];
          Xe(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var O3 = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  I3 = () => {
    let e = V();
    return (
      B(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function M3({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = ki(),
    s = wt(ou),
    a = x.useRef(!1),
    l = I3(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        p = a.current && r === "mirror",
        y = p ? Je : i,
        g = p ? i : Je;
      return (
        (a.current = !a.current),
        Promise.all(
          cr.map((b) => {
            if (!(o && b !== "opacity"))
              return (
                s[b].set(g[b] ?? Je[b]),
                new Promise((h) => {
                  let m = { ...d, onComplete: () => h() },
                    v = y[b] ?? g[b];
                  typeof v == "number" && Qn(s[b], v, m);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = G(() => {
      cr.forEach((d) => {
        s[d].stop();
      }),
        cr.forEach((d) => {
          s[d].set(Je[d]);
        }),
        (a.current = !1);
    }, [s]);
  return (
    x.useEffect(() => (e && i ? u() : f(), () => f()), [e]),
    x.useMemo(
      () => ({ values: s, style: e ? { willChange: "transform" } : {} }),
      [s, e]
    )
  );
}
function L3(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var V3 = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function A3(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = x.useRef(null),
    l = ki(),
    c = x.useCallback(
      (y) => (a.current === null || r === 100 ? 0 : L3(y, a.current, r, i, o)),
      [a, r, i, o]
    ),
    { scrollY: u } = j0(),
    f = Vt(u, c),
    d = Kn(o && a.current === null ? "hidden" : n),
    p = Kn(0);
  return (
    qi(
      t,
      (y) => {
        y !== null &&
          (q.read(() => {
            var g;
            a.current =
              ((g = y.getBoundingClientRect()) == null ? void 0 : g.top) ?? 0;
          }),
          q.update(() => {
            f.set(c(u.get())), o && d.set(n ?? "initial");
          }));
      },
      [o]
    ),
    {
      values: { y: l || !s ? p : f },
      style: s ? { visibility: d, willChange: "transform" } : void 0,
    }
  );
}
function D3(e) {
  if (!(ue(e) || !be(e))) return e?.transition;
}
function Xp(e, t, n, r, i, o) {
  let s = D3(e);
  return Promise.all(
    cr.map(
      (a) =>
        new Promise((l) => {
          if (n && a !== "opacity") return l();
          let c = t.values[a];
          c.stop();
          let u = be(e) ? e?.[a] ?? Je[a] : Je[a];
          if ((ze(u) && (u = u.get()), !et(u))) return l();
          let f = Xn.get(r.current);
          f && f.setBaseTarget(a, u);
          let d;
          if (ue(i) && !c?.hasAnimated && st.MotionHandoffAnimation) {
            let p = st.MotionHandoffAnimation(i, a, q);
            p && (d = p);
          }
          o
            ? c.set(u)
            : Qn(c, u, {
                ...s,
                velocity: 0,
                startTime: d,
                onComplete: () => l(),
              });
        })
    )
  );
}
var z3 = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function B3(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l,
  c
) {
  let u = r ?? e,
    f = i ?? t,
    d = o ?? n,
    [p, y] = nd(),
    g = V({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    b = wt(() => {
      let m = u ?? l;
      if (!be(m)) return { values: ou() };
      let v = {};
      for (let S in m) {
        let k = be(m) ? m[S] : void 0;
        et(k) && (v[S] = k);
      }
      return { values: ou(v) };
    });
  qi(
    s,
    (m) => {
      let { hasMounted: v } = g.current;
      if (v && f) return;
      let S = Xn.get(m);
      if (S) {
        Object.assign(g.current, { hasMounted: !0 });
        for (let k in b.values) {
          if (!uC(k)) continue;
          let w = l?.[k];
          S.setBaseTarget(k, et(w) ? w : Je[k]);
        }
      }
    },
    [f]
  );
  let h = ki();
  return (
    qi(s, (m) => {
      if (!a) {
        y?.();
        return;
      }
      if (m === null) return;
      if (p !== g.current.lastPresence) {
        Object.assign(g.current, { lastPresence: p }),
          p
            ? u &&
              f &&
              (Object.assign(g.current, { running: !0 }),
              Xp(f, b, h, s, c).then(() =>
                Object.assign(g.current, { running: !1 })
              ))
            : d
            ? (Object.assign(g.current, { running: !0 }),
              Xp(d, b, h, s, c)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => y()))
            : y();
        return;
      }
      let { lastAnimate: v, running: S } = g.current;
      Nm(f, v) ||
        !f ||
        (Object.assign(g.current, { lastAnimate: f }),
        Xp(f, b, h, s, c, !S).then(() =>
          Object.assign(g.current, { running: !1 })
        ));
    }),
    b
  );
}
function $3(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var N3 = 1;
function dC(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = $3(a.current, document.documentElement) - N3 - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      p = Math.max(u + f, 0);
    i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? p : Math.min(p, Math.max(d - 1, 0))
      ),
      n?.(s);
  }
  return o;
}
function j3(e, t = 0) {
  return e < t ? "up" : "down";
}
var H3 = 4;
function W3(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  x.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return Nr(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = j3(f.current, a);
      a = f.current;
      let p = d !== c;
      if (((c = d), p)) l = f.current;
      else {
        if (Math.abs(f.current - l) < H3) return;
        let g = d === r ? i : void 0;
        g !== u && t(g), (u = g);
      }
    });
  }, [r, o, i, s, t]);
}
var U3 = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  G3 = ["animate", "animate"],
  y1 = { inputRange: [], outputRange: [] };
function q3(e, t, n) {
  let r = dC(e, t),
    i = [...G3],
    o = r[0];
  if (!et(o)) return y1;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!et(a)) return y1;
    r.push(a + 1), i.push("exit");
  }
  return { inputRange: r, outputRange: i };
}
function Yp(e) {
  return {
    x: e?.x ?? Je.x,
    y: e?.y ?? Je.y,
    scale: e?.scale ?? Je.scale,
    opacity: e?.opacity ?? Je.opacity,
    transformPerspective: e?.transformPerspective ?? Je.transformPerspective,
    rotate: e?.rotate ?? Je.rotate,
    rotateX: e?.rotateX ?? Je.rotateX,
    rotateY: e?.rotateY ?? Je.rotateY,
    skewX: e?.skewX ?? Je.skewX,
    skewY: e?.skewY ?? Je.skewY,
    transition: e?.transition ?? void 0,
  };
}
function X3({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return x.useMemo(
    () => ({
      initial: r ?? Yp({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? Yp({ opacity: t }),
      exit: i ?? Yp(),
    }),
    [o, s, r, i, e, t, n]
  );
}
function Y3(e, t) {
  let n = ki(),
    r = X3(e),
    i = e.styleAppearEffectEnabled,
    o = fC(i ? r.initial : r.animate, i),
    s = x.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = x.useRef(),
    l = x.useCallback(async ({ transition: d, ...p }, y) => {
      let g = d ?? r.animate.transition ?? e.transition;
      await a.current,
        (a.current = Promise.all(
          cr.map((b) => {
            y && o.values[b].set(r.initial[b] ?? Je[b]);
            let h = p[b] ?? Je[b],
              m = Xn.get(t.current);
            return (
              m && typeof h != "object" && m.setBaseTarget(b, h),
              new Promise((v) => {
                if (n && b !== "opacity") et(h) && o.values[b].set(h), v();
                else {
                  let S = {
                    restDelta: b === "scale" ? 0.001 : void 0,
                    ...g,
                    onComplete: () => v(),
                  };
                  typeof h == "number" && Qn(o.values[b], h, S);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  OD(
    t,
    (d) => {
      let { isPlaying: p, lastAppearState: y } = s.current;
      if (p) {
        s.current.scheduledAppearState = d;
        return;
      }
      (s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        y !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    x.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        p = "initial";
      return Nr(({ y }) => {
        let { targets: g } = e;
        if (!g || !g[0] || (g[0].ref && !g[0].ref.current)) return;
        let { inputRange: b, outputRange: h } = q3(
          g,
          (e.threshold ?? 0) * y.containerLength,
          !!e.exit
        );
        if (b.length === 0 || b.length !== h.length) return;
        let m = ks(y.current, b, h);
        if ((e.animateOnce && d[m]) || ((d[m] = !0), p === m)) return;
        p = m;
        let v = rt(r)[m];
        v && l(v);
      });
    }, [f]),
    W3(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var K3 = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  Q3 = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  hC = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function Z3(e, t) {
  let n = x.useRef({});
  x.useEffect(() => {
    if (t !== void 0)
      for (let r of Gi(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = Nf({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Ue.isProcessing)
          ) {
            let l = performance.now() - Ue.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function J3(e, t) {
  let n = hC();
  return {
    inputRange: dC(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of cr)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function ez(e) {
  var t;
  let n = hC();
  for (let { target: r } of e)
    for (let i of cr) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var b1 = [0, 1];
function tz(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let s = ki(),
    a = fC(Q3(n, s), t),
    l = !t || !n,
    c = e === "onScrollTarget";
  return (
    De(() => {
      if (!(l || !c))
        return Nr(({ y: u }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: f, effectKeyOutputRange: d } = J3(
            n,
            i * u.containerLength
          );
          if (f.length !== 0)
            for (let p of cr)
              (s && p !== "opacity") ||
                (f.length === d[p].length &&
                  d[p][0] !== void 0 &&
                  a.values[p].set(ks(u.current, f, d[p])));
        });
    }, [s, c, i, a, n, l]),
    qi(
      o,
      (u) => {
        if (l || c || u === null) return;
        let f = ez(n);
        return Nr(
          ({ y: d }) => {
            for (let p of cr)
              (s && p !== "opacity") ||
                (b1.length === f[p].length &&
                  f[p][0] !== void 0 &&
                  a.values[p].set(ks(d.progress, b1, f[p])));
          },
          e === "onInView"
            ? { target: u ?? void 0, offset: ["start end", "end end"] }
            : void 0
        );
      },
      [s, e, c, a, n, l]
    ),
    Z3(a.values, r),
    x.useMemo(
      () => ({ values: a.values, style: t ? { willChange: "transform" } : {} }),
      [a, t]
    )
  );
}
var pC = {
    parallax: V3,
    styleAppear: U3,
    styleTransform: K3,
    loop: O3,
    presence: z3,
  },
  nz = Gi(pC);
function x1(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function rz(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = _3(n);
    if (r)
      for (let i of nz) {
        let o = pC[i];
        if (o?.has(r)) {
          t[i][r] = rt(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = rt(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = x1(
      "parallaxTransformEnabled",
      "speed",
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = x1(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear
    )),
    t
  );
}
var fi = (e) => e.reduce((t, n) => (t += n), 0),
  w1 = (e) => e.reduce((t, n) => (t = t * n), 1),
  iz = "current";
function oz(e) {
  return be(e) && iz in e;
}
function sz(e, t) {
  if (!e || !be(e)) return t;
  for (let n in e) {
    let r = e[n];
    !ze(r) || !uC(n) || (et(r.get()) && t[n].push(r));
  }
}
function ga(e) {
  return ue(e) || Array.isArray(e);
}
var HH = (e) =>
  x.forwardRef((t, n) => {
    var r;
    if (t.__withFX)
      return C(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    let i = ae.current();
    if (i === ae.canvas || i === ae.export) {
      let Ee = ga(t.animate) ? t.animate : void 0,
        tt = ga(t.initial) ? t.initial : void 0;
      return C(e, { ...t, animate: Ee, initial: tt, exit: void 0, ref: n });
    }
    let {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = rz(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: p = !1,
      } = t,
      y = Kn(f ?? 1),
      g = eC(n),
      { values: b } = B3(l, g, p, t.style, t[rl]),
      { values: h, style: m } = A3(
        o,
        g,
        (r = t.style) == null ? void 0 : r.visibility
      ),
      { values: v, style: S } = tz(a, g),
      { values: k } = Y3(s, g),
      { values: w, style: T } = M3(c),
      R = x.useMemo(
        () => ({
          scale: [k.scale, w.scale, b.scale, v.scale],
          opacity: [k.opacity, w.opacity, b.opacity, y, v.opacity],
          x: [k.x, w.x, b.x, v.x],
          y: [k.y, w.y, h.y, b.y, v.y],
          rotate: [k.rotate, w.rotate, b.rotate, v.rotate],
          rotateX: [k.rotateX, w.rotateX, b.rotateX, v.rotateX],
          rotateY: [k.rotateY, w.rotateY, b.rotateY, v.rotateY],
          skewX: [k.skewX, w.skewX, b.skewX, v.skewX],
          skewY: [k.skewY, w.skewY, b.skewY, v.skewY],
          transformPerspective: [
            v.transformPerspective,
            k.transformPerspective,
          ],
        }),
        [y, v, h, k, w, b]
      );
    sz(t.style, R);
    let O = Vt(R.scale, w1),
      I = Vt(R.opacity, w1),
      N = Vt(R.x, fi),
      z = Vt(R.y, fi),
      j = Vt(R.rotate, fi),
      Y = Vt(R.rotateX, fi),
      H = Vt(R.rotateY, fi),
      le = Vt(R.skewX, fi),
      ne = Vt(R.skewY, fi),
      fe = Vt(R.transformPerspective, fi),
      { drag: Q, dragConstraints: se } = u;
    AA(Q && oz(se) ? se : void 0);
    let we = {
      opacity: I,
      scale: O,
      x: N,
      y: z,
      rotate: j,
      rotateX: Y,
      rotateY: H,
      skewX: le,
      skewY: ne,
    };
    Xe(d) && (we.transformPerspective = fe);
    let Se = ga(t.animate) ? t.animate : void 0,
      he = ga(t.initial) ? t.initial : void 0,
      J = ga(t.exit) ? t.exit : void 0,
      Oe = p && !l.presenceInitial ? { initial: he, animate: Se, exit: J } : {};
    return C(e, {
      ...u,
      ...Oe,
      __withFX: !0,
      style: { ...t.style, ...m, ...S, ...T, ...we },
      values: b,
      ref: g,
    });
  });
function Um(e) {
  let t = wt(() => az(e));
  return t.useSetup(e), t.cloneAsElement;
}
function az(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = S1(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = S1(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle."
      );
    return (
      (r = !0),
      hn.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      hn.map(s, (l) => {
        if (Lt(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return pr(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return C(ct, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function S1(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    u1(n, r), u1(t, r);
  };
}
var mC = x.createContext({});
function YH() {
  return x.useContext(mC);
}
var KH = x.forwardRef(function (
    { width: t, height: n, y: r, children: i, ...o },
    s
  ) {
    let a = x.useMemo(() => ({ width: t, height: n, y: r }), [t, n, r]),
      l = Um(s);
    return C(mC.Provider, { value: a, children: l(i, o) });
  }),
  lz = (e) =>
    x.forwardRef((t, n) => {
      let r = _u(t);
      return C(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  cz = class extends xe {
    constructor() {
      super(...arguments), E(this, "state", { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        e instanceof Gc ||
          console.error(
            `Derived error in SuspenseErrorBoundary:
`,
            e
          ),
        { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      if (e instanceof Gc) return;
      let r = t?.componentStack;
      console.error(
        `Caught error in SuspenseErrorBoundary:
`,
        e,
        r
      );
      let i = e instanceof Error && typeof e.stack == "string" ? e.stack : null;
      (n = F.__framer_events) == null ||
        n.push([
          "published_site_load_recoverable_error",
          { message: String(e), stack: i, componentStack: i ? void 0 : r },
        ]);
    }
    render() {
      let e = this.state.error;
      if (e === void 0) return this.props.children;
      if (e instanceof Gc) throw e.cause;
      return (
        (F.__framer_STPD_OPT_OUT__ = !0),
        C(hr, { children: this.props.fallbackChildren })
      );
    }
  },
  uz = (() => (typeof F < "u" ? new Promise(() => {}) : null))();
function fz() {
  if (typeof F > "u" || F.__framer_STPD_OPT_OUT__) return null;
  throw uz;
}
function Gm({ children: e }) {
  return C(cz, {
    fallbackChildren: e,
    children: C(hr, { fallback: C(fz, {}), children: e }),
  });
}
function gC(e, t) {
  var n;
  if (typeof F > "u" || Math.random() > 0.01) return;
  let r = e instanceof Error && typeof e.stack == "string" ? e.stack : null,
    i = t?.componentStack;
  (n = st.__framer_events) == null ||
    n.push([
      "published_site_load_recoverable_error",
      { message: String(e), stack: r, componentStack: r ? void 0 : i },
    ]);
}
function dz(...e) {
  console.error(...e);
}
function hz() {
  return ae.current() !== ae.canvas;
}
function pz({ errorMessage: e, fallback: t, children: n }) {
  return hz()
    ? C(mz, {
        fallback: t,
        errorMessage: e,
        children: C(gz, { fallback: t, children: n }),
      })
    : n;
}
var mz = class extends xe {
  constructor() {
    super(...arguments), E(this, "state", { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e, t) {
    dz(this.props.errorMessage, t?.componentStack), gC(e, t);
  }
  render() {
    let { children: e, fallback: t = null } = this.props,
      { hasError: n } = this.state;
    return n ? t : e;
  }
};
function gz({ children: e, fallback: t = null }) {
  return typeof F > "u"
    ? C(hr, { fallback: t, children: e })
    : C(Gm, { children: e });
}
var vz = class extends xe {
    constructor() {
      super(...arguments), E(this, "state", { hasError: !1 });
    }
    componentDidCatch(e, t) {
      let n = t?.componentStack;
      console.error(
        "Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.",
        n
      ),
        this.setState({ hasError: !0 }),
        gC(e, t);
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  hm = (() => x.createContext(0))();
function yz() {
  return x.useContext(hm);
}
function bz({ children: e }) {
  let t = x.useContext(hm);
  return C(hm.Provider, { value: t + 1, children: e });
}
var xz = "code-crash:";
function wz(e, t) {
  return `${xz}${e}:${t}`;
}
function Sz(e, t) {
  return kz("component", e, t);
}
function kz(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${wz(
    t,
    n
  )} \u2192 click \u201CShow Layer\u201D.`;
}
function Cz(e, t, n, r) {
  return (t || n) && (e === 0 || (e === 1 && r));
}
var Tz = x.forwardRef(
    (
      {
        children: e,
        layoutId: t,
        as: n,
        scopeId: r,
        nodeId: i,
        isAuthoredByUser: o,
        isModuleExternal: s,
        inComponentSlot: a,
        ...l
      },
      c
    ) => {
      let u = wt(() => (t ? `${t}-container` : void 0)),
        f = Pu(n),
        d = x.Children.map(e, (y) =>
          x.isValidElement(y) ? x.cloneElement(y, { layoutId: t }) : y
        ),
        p = Rz(d, r, i, o, s, a);
      return C(f, {
        layoutId: u,
        ...l,
        ref: c,
        children: C(Qo.Provider, {
          value: !0,
          children: C(_L, {
            enabled: !1,
            children: C(V0, { id: t ?? "", inherit: "id", children: p }),
          }),
        }),
      });
    }
  ),
  u8 = lz(Tz);
function Rz(e, t, n, r, i, o) {
  let s = yz();
  return Xe(t) || Xe(n)
    ? C(vz, { children: e })
    : (Cz(s, r ?? !1, i ?? !1, o ?? !1) &&
        (e = C(pz, { errorMessage: Sz(t, n), fallback: null, children: e })),
      i && (e = C(bz, { children: e })),
      e);
}
var Ez = x.createContext(void 0),
  Fz = "style[data-framer-css-ssr-minified]",
  Pz = (() => {
    var e;
    if (!Lr()) return new Set();
    let t =
      (e = document.querySelector(Fz)) == null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  _z = "data-framer-css-ssr",
  vC = (e, t, n) =>
    x.forwardRef((r, i) => {
      let { sheet: o, cache: s } = x.useContext(Ez) ?? {},
        a = n;
      if (!Lr()) {
        $n(t) && (t = t(ae.current()));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return me(ct, {
          children: [
            C("style", {
              [_z]: !0,
              "data-framer-component": a,
              dangerouslySetInnerHTML: { __html: l },
            }),
            C(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        Qe(() => {
          if (a && Pz.has(a)) return;
          ($n(t)
            ? t(ae.current())
            : Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((c) => c && zk(c, o, s));
        }, []),
        C(e, { ...r, ref: i })
      );
    }),
  qm = ge({ onRegisterCursors: () => () => {}, registerCursors: () => {} }),
  su = "framer-cursor-none",
  pm = "framer-pointer-events-none",
  Oz = Ia(function ({ children: t }) {
    let n = wt(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = ki();
    return me(qm.Provider, { value: n, children: [t, !r && C(Az, {})] });
  }),
  Iz = (() =>
    vC(
      Oz,
      [
        `.${su}, .${su} * { cursor: none !important; }`,
        `.${pm}, .${pm} * { pointer-events: none !important; }`,
      ],
      "framer-lib-cursors-host"
    ))(),
  Mz = (() => ({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  }))();
function Lz(e) {
  return !(!e || e.placement || e.alignment);
}
function jc(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      Ce(e);
  }
}
function Vz(e, t = "center") {
  switch (e) {
    case "top":
      return `${jc(t)}, -100%`;
    case "right":
      return `0%, ${jc(t)}`;
    case "bottom":
      return `${jc(t)}, 0%`;
    case "left":
      return `-100%, ${jc(t)}`;
    default:
      return "-50%, -50%";
  }
}
var k1 = "data-framer-portal-id";
function C1(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(k1)) {
      let i = n.getAttribute(k1);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function T1(e) {
  for (let t in e) return !1;
  return !0;
}
var Az = Ia(function () {
  let { onRegisterCursors: t } = A(qm),
    [n, r] = Fe(!1),
    i = Kn(0),
    o = Kn(0),
    s = Kn(0),
    a = V(null),
    l = V({ cursors: {}, cursorHash: void 0 }),
    c = Ou();
  De(() => {
    let T = st.matchMedia("(any-hover: none)");
    function R(O) {
      O.matches ? St(() => r(!1)) : r(!0);
    }
    return (
      T.addEventListener("change", R),
      T.matches || r(!0),
      () => {
        T.removeEventListener("change", R);
      }
    );
  }, []),
    B(() => {
      if (!n) return;
      let T = 0,
        R = 0;
      function O() {
        i.set(T), o.set(R), Qn(s, 1, { type: "tween", duration: 0.2 });
      }
      let I = () => {
        if (T1(l.current.cursors)) return;
        let j = C1(T, R);
        j !== l.current.cursorHash &&
          ((l.current.cursorHash = j), q.update(() => c()));
      };
      function N(j) {
        if (j.pointerType === "touch") {
          Tt(I);
          return;
        }
        q.read(I, !0), (T = j.clientX), (R = j.clientY), q.update(O);
      }
      function z(j) {
        if (j.target === a.current || !a.current) return;
        let Y = new PointerEvent(j.type, {
          bubbles: !0,
          cancelable: j.cancelable,
          pointerType: j.pointerType,
          pointerId: j.pointerId,
          composed: j.composed,
          isPrimary: j.isPrimary,
          buttons: j.buttons,
          button: j.button,
        });
        q.update(() => {
          var H;
          (H = a.current) == null || H.dispatchEvent(Y);
        });
      }
      return (
        st.addEventListener("pointermove", N),
        document.addEventListener("pointerdown", z),
        document.addEventListener("pointerup", z),
        q.read(I, !0),
        () => {
          st.removeEventListener("pointermove", N),
            document.removeEventListener("pointerdown", z),
            document.removeEventListener("pointerup", z),
            Tt(I);
        }
      );
    }, [s, i, o, c, n]),
    B(() => {
      if (!n) return;
      function T() {
        Qn(s, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", T),
        st.addEventListener("blur", T),
        () => {
          document.removeEventListener("mouseleave", T),
            st.removeEventListener("blur", T);
        }
      );
    }, [s, n]),
    De(() => {
      function T(O) {
        (l.current.cursors = O),
          (l.current.cursorHash = T1(O) ? null : C1(i.get(), o.get())),
          c();
      }
      let R = t(T);
      return () => {
        R(), document.body.classList.toggle(su, !1);
      };
    }, [i, o, t, c]);
  let { cursors: u, cursorHash: f } = l.current,
    d = f ? u[f] : null,
    p = Lz(d);
  De(() => {
    n && document.body.classList.toggle(su, p);
  }, [p, n]);
  let y = d?.component,
    g = d?.transition ?? { duration: 0 },
    b = vd(i, g),
    h = vd(o, g),
    m = Vt(() => {
      var T;
      return b.get() + (((T = d?.offset) == null ? void 0 : T.x) ?? 0);
    }),
    v = Vt(() => {
      var T;
      return h.get() + (((T = d?.offset) == null ? void 0 : T.y) ?? 0);
    }),
    S = d?.alignment,
    k = d?.placement,
    w = G((T, R) => `translate(${Vz(k, S)}) ${R}`, [S, k]);
  return !n || !d || !y
    ? null
    : C(y, {
        transformTemplate: w,
        style: { ...Mz, x: m, y: v, opacity: s },
        globalTapTarget: !0,
        variant: d?.variant,
        ref: a,
        className: pm,
      });
});
function g8(e) {
  let { registerCursors: t } = A(qm),
    n = wt(() => e);
  De(() => {
    t(n);
  }, [t]);
}
var yC = x.createContext(void 0),
  Xm = class {
    constructor(e) {
      (this.resolver = e), E(this, "status");
    }
    static is(e) {
      return e instanceof Xm;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    waitFor() {
      return this.resolver();
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          Ce(e);
      }
    }
  },
  Ym = x.createContext(void 0),
  S8 = (() => Ym.Provider)(),
  Ta = () => x.useContext(Ym) ?? {};
function Km(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : Km(e.parentElement, t)
    : null;
}
function Dz({ children: e }) {
  let { useGranularSuspense: t } = Ta();
  return t ? C(Gm, { children: e }) : e;
}
function zz(e) {
  return Ae(function (n, r) {
    return C(Dz, { children: C(e, { ...n, ref: r }) });
  });
}
var Bz = class {
    constructor() {
      E(this, "links", new Map());
    }
    clear() {
      this.links.clear();
    }
    getLinks() {
      return this.links;
    }
    addLink(e, t) {
      if (typeof F < "u" || !e || !t) return;
      this.links.has(e) || this.links.set(e, new Set()),
        this.links.get(e).add(t);
    }
  },
  $z = new Bz(),
  R1 = "element",
  Nz = "collection",
  jz = "collectionItemId",
  Hz = "pathVariables",
  bC = "framer/page-link,";
function xC(e) {
  return ue(e) && e.startsWith(`data:${bC}`);
}
function Qm(e) {
  if (xC(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(bC.length),
        r = t.searchParams,
        i = r.has(R1) ? r.get(R1) : void 0,
        o,
        s = r.get(Nz),
        a = r.get(jz),
        l = r.get(Hz);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function Wz(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = Qm(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var Uz = 500,
  Gz = 0.9,
  qz = 1.7,
  Xz = 4,
  Yz = 1 / 0,
  $o = new WeakMap(),
  Hc = new Set(),
  No = new Map();
function Kz() {
  var e;
  let t = Re.connection || Re.mozConnection || Re.webkitConnection || {},
    n = Re.deviceMemory && Re.deviceMemory > qz,
    r,
    i,
    o;
  function s() {
    (r = t.effectiveType || ""),
      (i = t.saveData || r.includes("2g")),
      (o = r === "3g" || n ? Xz : Yz);
  }
  (e = t.addEventListener) == null || e.call(t, "change", s), s();
  let a = new IntersectionObserver(u, { threshold: Gz }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let p = No.get(f);
    if (!p?.size || Hc.has(f)) return;
    ++l, Hc.add(f);
    let y = dk(f).catch(() => {});
    a.unobserve(d), $o.delete(d);
    for (let g of p) a.unobserve(g), $o.delete(g);
    p.clear(), No.delete(f), await y, --l;
  }
  function u(f) {
    var d;
    for (let p of f) {
      let y = p.target,
        g = $o.get(y);
      if (!g || Hc.has(g)) {
        a.unobserve(y), $o.delete(y);
        continue;
      }
      let b = No.get(g),
        h = ((d = No.get(g)) == null ? void 0 : d.size) ?? 0;
      if (p.isIntersecting) {
        if (l >= o) continue;
        b ? b.add(y) : No.set(g, new Set([y])),
          setTimeout(c.bind(void 0, g, y), Uz);
      } else b && b.delete(y), h <= 1 && No.delete(g);
    }
  }
  return (f, d) => {
    if (!Hc.has(f))
      return (
        $o.set(d, f),
        a.observe(d),
        () => {
          $o.delete(d), a.unobserve(d);
        }
      );
  };
}
var Qz = !Pm || typeof IntersectionObserver > "u" ? null : Kz(),
  Kp = Symbol("noLocale"),
  Wc = new Map();
function Zz(e, t, n) {
  var r, i;
  let o =
    (i = (r = Wc?.get(n?.id ?? Kp)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = Wc.get(n?.id ?? Kp) ?? new Map();
  Wc.set(n?.id ?? Kp, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new Xm(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
function Zo() {
  return ae.current() === ae.canvas;
}
var Jz = "webPageId";
function mm(e) {
  return !!(e && typeof e == "object" && Jz in e);
}
function e5(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function au(e) {
  if (!xC(e)) return e;
  let t = Qm(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: e5(i) };
}
var wC = /:([a-z]\w*)/gi,
  t5 = ge(void 0);
function SC() {
  var e;
  let t = A(t5),
    n = (e = Ca()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function kC(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(wC))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function Zm(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function n5(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Jm(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function Qp(e, t = void 0) {
  let n = Zm(e),
    r = Jm(t, n);
  return {
    href: e === "" || n5(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function eg(e, t, n, r, i) {
  var o, s;
  let a = (o = e.getRoute) == null ? void 0 : o.call(e, t);
  a && ik(a?.page) && a.page.preload(),
    (s = e.navigate) == null || s.call(e, t, n, r, i);
}
function CC(e, t, n, r, i) {
  return async (o) => {
    if (o.metaKey) return;
    let s = Km(o.target);
    !s ||
      s.getAttribute("target") === "_blank" ||
      (o.preventDefault(), eg(e, t, n, r, i));
  };
}
function Uc(e, t, n) {
  let r = document.createElement("a");
  (r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove();
}
function r5(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      D(u, "unresolvedSlug should be defined");
      let f = Zz(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let p = f.read();
        p && (l[c] = p);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function i5(e, t, n, r, i, o, s, a) {
  var l;
  let c = { ...i, ...o, ...a?.path },
    u = { ...i, ...s, ...a?.hash },
    f = (l = e.getRoute) == null ? void 0 : l.call(e, n),
    d = _m(f, {
      currentRoutePath: t?.path,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: c,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
    }),
    p = d.split("#", 2)[1];
  return { routeId: n, route: f, href: d, elementId: p, pathVariables: c };
}
function o5(e, t, n) {
  if (!(!e.routes || !e.getRoute || !Zm(t)))
    try {
      let [i, o] = t.split("#", 2);
      D(i !== void 0, "A href must have a defined pathname.");
      let [s] = i.split("?", 2);
      D(s !== void 0, "A href must have a defined pathname.");
      let { routeId: a, pathVariables: l } = Ek(e.routes, s),
        c = e.getRoute(a);
      if (c) {
        let u = Object.assign({}, n, l);
        return {
          routeId: a,
          route: c,
          href: t,
          elementId: o,
          pathVariables: u,
        };
      }
    } catch {}
}
function s5(e, t, n, r, i) {
  let {
      webPageId: o,
      hash: s,
      pathVariables: a,
      hashVariables: l,
      unresolvedHashSlugs: c,
      unresolvedPathSlugs: u,
    } = n,
    f = r5(u, c, e.collectionUtils, r);
  return i5(e, t, o, s, i, a, l, f);
}
function a5(e, t, n, r, i, o) {
  if (!r) return Qp(e, t);
  let s = o5(n, e, i);
  if (!s) return Qp(e, t);
  let { routeId: a, route: l, elementId: c, pathVariables: u } = s;
  if (!l) return Qp(e, t);
  let f = _m(l, {
      currentRoutePath: r.path,
      currentPathVariables: r.pathVariables,
      hash: c,
      pathVariables: u,
      preserveQueryParams: n.preserveQueryParams,
    }),
    d = Jm(t, !0);
  return {
    href: f,
    target: d,
    onClick: CC(n, a, c, u, o),
    navigate: () => eg(n, a, c, u, o),
    "data-framer-page-link-current": (!c && r.id === a) || void 0,
  };
}
function TC(e, t, n) {
  var r;
  if (ue(e)) {
    let o = Zm(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split("#", 2);
    if (s === void 0) return;
    let [a] = s.split("?", 2);
    if (a === void 0) return;
    let { routeId: l } = Ek(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var E8 = zz(
    Ae(function (
      {
        children: t,
        href: n,
        openInNewTab: r,
        smoothScroll: i,
        nodeId: o,
        ...s
      },
      a
    ) {
      let l = Ko(),
        c = Ca(),
        u = SC(),
        { activeLocale: f } = XM(),
        d = Um(a),
        p = re(() => {
          if (!n) return {};
          let w = mm(n) ? n : au(n);
          if (!w) return {};
          if (ue(w)) return a5(w, r, l, c, u, i);
          let {
              routeId: T,
              href: R,
              elementId: O,
              pathVariables: I,
            } = s5(l, c, w, f, u),
            N = Jm(r, !0);
          return {
            href: R,
            target: N,
            onClick: CC(l, T, O, I, i),
            navigate: () => eg(l, T, O, I, i),
            "data-framer-page-link-current": (c && kC(c, w, u)) || void 0,
          };
        }, [n, l, f, u, r, c, i]),
        [y, g] = l5(o, n, p),
        b = G(
          (w) => {
            var T;
            let R = mm(n) ? n : au(n);
            if (!R) return;
            let O = TC(R, l, c);
            if (O) return (T = Qz) == null ? void 0 : T(O, w);
          },
          [c, n, l]
        ),
        h = Lt(t) && "ref" in t,
        m = eC(h ? t.ref : void 0);
      qi(
        m,
        (w) => {
          w !== null && g(w);
        },
        [g]
      ),
        qi(
          m,
          (w) => {
            if (w !== null) return b(w);
          },
          [b]
        );
      let { navigate: v, ...S } = p,
        k = d.cloneAsArray(t, { ...s, ...S, ref: m });
      return y(k);
    })
  ),
  E1 = ge(void 0);
function l5(e, t, n) {
  let r = A(E1),
    i = Zo(),
    o = Ko(),
    s = Ca(),
    { replaceNestedLinks: a } = Ta(),
    l = re(() => {
      let b = mm(t) ? t : au(t);
      if (b) return TC(b, o, s);
    }, [s, t, o]),
    c = Object.keys(n).length > 0,
    u = !!(a && !i && (r || !c)),
    f = G(
      (b) => {
        var h;
        if (!n.href) return;
        if (
          (b.preventDefault(),
          b.stopPropagation(),
          /Mac|iPod|iPhone|iPad/u.test(Re.userAgent) ? b.metaKey : b.ctrlKey)
        ) {
          Uc(n.href, "", "_blank");
          return;
        }
        l ? (h = n.navigate) == null || h.call(n) : Uc(n.href, n.rel, n.target);
      },
      [n, l]
    ),
    d = G(
      (b) => {
        n.href &&
          (b.preventDefault(), b.stopPropagation(), Uc(n.href, "", "_blank"));
      },
      [n]
    ),
    p = G(
      (b) => {
        var h;
        n.href &&
          b.key === "Enter" &&
          (b.preventDefault(),
          b.stopPropagation(),
          l
            ? (h = n.navigate) == null || h.call(n)
            : Uc(n.href, n.rel, n.target));
      },
      [n, l]
    ),
    y = G(
      (b) => {
        let h = {
            "data-nested-link": !0,
            role: "link",
            tabIndex: 0,
            onClick: f,
            onAuxClick: d,
            onKeyDown: p,
          },
          m = u
            ? hn.map(b, (v) => {
                if (!c5(v)) return v;
                $z.addLink(r, e);
                let S = lu(v.type),
                  { children: k, ...w } = v.props,
                  T = c ? { ...w, ...h, as: w.as && lu(w.as) } : w,
                  R = "ref" in v ? v.ref : void 0;
                return Ki(S, { ...T, ref: R }, k);
              })
            : b;
        return C(E1.Provider, { value: e, children: m });
      },
      [c, e, d, f, p, u, r]
    ),
    g = G(
      (b) => {
        i || !u || !c || (b.dataset.hydrated = "true");
      },
      [i, c, u]
    );
  return [y, g];
}
function c5(e) {
  return Lt(e) && (lu(e.type) !== e.type || lu(e.props.as) !== e.props.as);
}
function lu(e) {
  return e === "a" ? "span" : dl(e) && xd(e) === "a" ? Jt.span : e;
}
var u5 = class extends xe {
  constructor() {
    super(...arguments), E(this, "state", { error: void 0 });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  render() {
    return this.state.error ? null : this.props.children;
  }
};
var RC = x.createContext(void 0);
function f5(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
var F1 = "default";
function d5() {
  let [e, t] = x.useState(0);
  return [e, x.useCallback(() => t((n) => n + 1), [])];
}
function P1(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    v5(r, t);
    return;
  }
  n || F.scrollTo(0, 0);
}
function h5(e) {
  let t = V([]);
  return (
    De(() => {
      var n;
      (n = t.current) != null &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    G((n) => {
      t.current.push(n);
    }, [])
  );
}
function p5(e) {
  let t = UM(),
    n = xk("framer-route-change"),
    r = V(void 0);
  return G(
    async (i, o, s = !0) => {
      var a;
      KM();
      let l = o !== void 0;
      if (!e)
        return (
          l && (await o()),
          i(),
          n(),
          new Promise((y) => {
            y();
          })
        );
      (a = r.current) == null || a.abort();
      let c = s ? new AbortController() : void 0;
      r.current = c;
      let u = c?.signal,
        f = n();
      if (!l) return (r.current = void 0), i(u), f;
      let d,
        p = new Promise((y, g) => {
          (d = y), u?.aborted ? g() : u?.addEventListener("abort", g);
        });
      return (
        await Tu({ priority: "user-blocking", signal: u }).catch(Rm),
        i(u),
        t(p, o, c),
        f.then(() => {
          d();
        })
      );
    },
    [e, n, t]
  );
}
function m5({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = oM,
  preserveQueryParams: c = !1,
  enableAsyncURLUpdates: u = !1,
  LayoutTemplate: f,
  editorBar: d,
}) {
  ZM(),
    $M({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: a,
    });
  let p = bk(),
    [y, g] = d5(),
    b = h5(y),
    h = p5(u),
    m = V(r),
    v = V(n),
    S = V(a),
    k = S.current,
    w = re(
      () => l.find(({ id: Q }) => (k ? Q === k : Q === F1)) ?? null,
      [k, l]
    ),
    T = re(
      () => ({
        activeLocale: w,
        locales: l,
        setLocale: async (Q) => {
          let se;
          ue(Q) ? (se = Q) : be(Q) && (se = Q.id);
          let we = l.find(({ id: Oe }) => Oe === F1),
            Se = l.find(({ id: Oe }) => Oe === se);
          if (!Se) return;
          let he = m.current,
            J = s[he];
          if (J)
            try {
              let Oe = await WM({
                currentLocale: w,
                nextLocale: Se,
                route: J,
                routeId: he,
                defaultLocale: we,
                pathVariables: v.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!Oe) return;
              let Ee = v.current,
                tt = zM(F.history.state)
                  ? F.history.state.paginationInfo
                  : void 0,
                Ie = Oe.path;
              (v.current = Oe.pathVariables),
                (S.current = Se.id),
                h(
                  () => {
                    p(he, he, () => St(g), u);
                  },
                  async (at = !1) => {
                    if (Ie)
                      return Sk(
                        {
                          routeId: he,
                          pathVariables: Ee,
                          localeId: Se.id,
                          paginationInfo: tt,
                        },
                        Ie,
                        !1,
                        at
                      );
                  },
                  !1
                );
            } catch {}
        },
      }),
      [w, o, u, g, l, c, s, h, p]
    ),
    R = G(
      (Q, se, we, Se, he, J = !1, Oe) => {
        let Ee = m.current;
        if (
          ((m.current = Q),
          (v.current = Se),
          (S.current = se),
          b(() => {
            P1(we, J, he);
          }),
          he)
        ) {
          St(g);
          return;
        }
        h((tt) => {
          p(Ee, Q, () => St(g), u, tt);
        }, Oe);
      },
      [u, g, b, h, p]
    );
  NM(m, R);
  let O = G(
      async (Q, se, we, Se) => {
        var he;
        let J = s[Q];
        if (we) {
          let at = new Set(),
            Nn = J?.path ?? "/";
          for (let ce of Nn.matchAll(Wi)) {
            let Yt = ce[1];
            if (Yt === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            at.add(Yt);
          }
          we = Object.fromEntries(
            Object.entries(we).filter(([ce]) => at.has(ce))
          );
        }
        let Oe = Cu(J, se),
          Ee = v.current,
          tt = S.current;
        if (
          f5(
            { routeId: m.current, pathVariables: Ee },
            { routeId: Q, pathVariables: we }
          )
        ) {
          let at = s[Q];
          ((he = F.history.state) == null ? void 0 : he.hash) !== se &&
            !t &&
            at &&
            (await RS(
              Q,
              at,
              {
                currentRoutePath: at.path,
                currentPathVariables: Ee,
                pathVariables: we,
                hash: se,
                localeId: tt,
                preserveQueryParams: c,
              },
              u
            )),
            P1(Oe, Se, !1);
          return;
        }
        if (!J) return;
        let Ie = s[m.current];
        R(
          Q,
          tt,
          Oe,
          we,
          !1,
          Se,
          t
            ? void 0
            : async (at = !1) =>
                RS(
                  Q,
                  J,
                  {
                    currentRoutePath: Ie?.path,
                    currentPathVariables: Ee,
                    hash: se,
                    pathVariables: we,
                    localeId: tt,
                    preserveQueryParams: c,
                  },
                  !1,
                  at
                )
        );
      },
      [s, R, t, c, u]
    ),
    I = lk(s),
    N = m.current,
    z = v.current,
    j = re(
      () => ({
        navigate: O,
        getRoute: I,
        currentRouteId: N,
        currentPathVariables: z,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [O, I, N, z, s, o, c]
    ),
    Y = s[m.current];
  if (!Y) throw new Error(`Router cannot find route for ${m.current}`);
  let H = !w || !Y.includedLocales || Y.includedLocales.includes(w.id),
    le = Y.path && z ? pk(Y.path, z) : Y.path,
    ne = String(k) + le,
    fe = wt(() => ({ ...e, display: "contents" }));
  return C(sM, {
    api: j,
    children: C(kk.Provider, {
      value: T,
      children: me(Gm, {
        children: [
          C(iL, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: y,
            children: C(g5, {
              LayoutTemplate: f,
              routeId: N,
              children: (Q) =>
                me(
                  pn,
                  {
                    children: [
                      C(DS.Start, {}),
                      H ? lm(Y.page, Q ? fe : e) : i && lm(i, e),
                    ],
                  },
                  ne
                ),
            }),
          }),
          C(YM, {}),
          C(DS.End, {}),
          d,
        ],
      }),
    }),
  });
}
function g5({ LayoutTemplate: e, routeId: t, children: n }) {
  return e ? C(e, { routeId: t, children: n }) : n(!1);
}
function v5(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
function y5(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      (r.onload = () => t()), (r.onerror = n), (r.src = e);
    } catch (r) {
      n(r);
    }
  });
}
function b5(e) {
  return typeof e == "object" && e !== null;
}
function x5(e, t) {
  if (t === "") return e;
  let n = t.split(/[.[\]]+/u).filter((i) => i.length > 0),
    r = e;
  for (let i of n) {
    if (!b5(r)) return;
    r = r[i];
  }
  return r;
}
function va(e) {
  return `${e.credentials}:${e.url}`;
}
var w5 = { status: "loading", data: void 0 };
function S5(e) {
  return ue(e) && !Number.isNaN(Number(e));
}
function k5(e, t) {
  switch (e) {
    case "string":
      return ue(t) || et(t);
    case "color":
      return ue(t);
    case "boolean":
      return Fm(t);
    case "number":
      return et(t) || S5(t);
    case "link":
    case "image":
      return ue(t) && gm(t);
    default: {
      let n = e;
      return !1;
    }
  }
}
function C5(e, t) {
  if (e.status === "loading") return t.fallbackValue;
  if (e.status === "error") throw e.error;
  let n = x5(e.data, t.resultKeyPath);
  if (Xe(n)) throw new Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!k5(t.resultOutputType, n))
    throw new Error(
      `Resolved value '${n}' is not valid for type '${t.resultOutputType}'`
    );
  return n;
}
function gm(e) {
  try {
    return !!new URL(e).protocol;
  } catch {}
}
function Zp(e, t) {
  if (ae.current() === ae.canvas) return !1;
  let n = t === 0 ? 500 : t * 1e3,
    r = Date.now(),
    i = e + n;
  return r >= i;
}
var _1 = () => {},
  Pr,
  Kc,
  Bi,
  $i,
  ya,
  di,
  Qc = class {
    constructor() {
      E(this, "responseValues", new Map()),
        Qt(this, Pr, new Map()),
        Qt(this, Kc, new Set()),
        Qt(this, Bi, new Map()),
        Qt(this, $i, new Map()),
        Qt(this, ya, new Map()),
        Qt(this, di, new Map()),
        E(
          this,
          "persistCache",
          C3(() => {
            let e = {};
            for (let [t, n] of this.responseValues) {
              if (!n || n.status !== "success") continue;
              let r = de(this, Bi).get(t);
              if (!r || r === 0) continue;
              let i = de(this, $i).get(t);
              i && ((i && Zp(i, r)) || (e[t] = [i, r, n.data]));
            }
            try {
              localStorage.setItem(Qc.cacheKey, JSON.stringify(e));
            } catch {}
          }, 500)
        );
    }
    unmount() {
      for (let [e, t] of de(this, di)) clearInterval(t), de(this, di).delete(e);
    }
    stopQueryRefetching(e) {
      let t = va(e),
        n = de(this, di).get(t);
      n && (clearInterval(n), de(this, di).delete(t));
    }
    startQueryRefetching(e) {
      let t = va(e),
        n = de(this, di).get(t),
        r = de(this, Bi).get(t);
      if (n || !r) return;
      let i = st.setInterval(() => {
        if (document.visibilityState === "hidden") return;
        let o = de(this, $i).get(t);
        !r || !o || this.fetchWithCache({ ...e, cacheDuration: r });
      }, r);
      de(this, di).set(t, i);
    }
    hydrateCache() {
      try {
        let e = localStorage.getItem(Qc.cacheKey);
        if (!e) return;
        let t = JSON.parse(e);
        if (typeof t != "object") throw new Error("Invalid cache data");
        for (let n in t) {
          let r = t[n];
          if (!Array.isArray(r) || r.length !== 3)
            throw new Error("Invalid cache data");
          let [i, o, s] = r;
          Zp(i, o) ||
            (de(this, $i).set(n, i),
            de(this, Bi).set(n, o),
            this.responseValues.set(n, { status: "success", data: s }));
        }
      } catch {
        try {
          localStorage.removeItem(Qc.cacheKey);
        } catch {}
      }
    }
    setResponseValue(e, t) {
      this.responseValues.set(e, t), this.persistCache();
      let n = de(this, Pr).get(e);
      if (n) for (let r of n) r();
    }
    async prefetch(e) {
      if (!Lr() || !gm(e.url)) return;
      let t = va(e);
      de(this, Kc).add(t), await this.fetchWithCache(e);
      let n = this.getValue(t);
      if (!n || n.status === "loading")
        throw new Error("Unexpected result status for prefetch");
      let r = de(this, Pr).get(t);
      for (let o of r ?? []) o();
      let i = C5(n, e);
      return (
        e.resultOutputType === "image" && ue(i) && (await y5(i).catch(_1)), i
      );
    }
    async fetchWithCache(e) {
      if (!Lr()) return;
      let t = va(e),
        n = de(this, ya).get(t);
      if (n) return n;
      let r = de(this, $i).get(t),
        i = r && Zp(r, e.cacheDuration);
      if (this.responseValues.has(t) && !i) return;
      this.responseValues.get(t) || this.setResponseValue(t, w5);
      let a = (async () => {
        try {
          let l = await fetch(e.url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: e.credentials,
          });
          if (!l.ok) {
            this.setResponseValue(t, {
              status: "error",
              error: new Error("Invalid Response Status"),
              data: void 0,
            });
            return;
          }
          let c = await l.json();
          this.setResponseValue(t, { status: "success", data: c }),
            de(this, $i).set(t, Date.now());
        } catch (l) {
          this.setResponseValue(t, { status: "error", error: l, data: void 0 });
        }
      })();
      return (
        de(this, ya).set(t, a),
        a.finally(() => {
          de(this, ya).delete(t);
        }),
        a
      );
    }
    getValue(e, t = !1) {
      if (!(t && !de(this, Kc).has(e))) return this.responseValues.get(e);
    }
    subscribe(e, t, n = !1) {
      let { url: r, cacheDuration: i } = e;
      if (!gm(r)) return _1;
      let o = va(e),
        s = de(this, Bi).get(o);
      (!s || i < s) && de(this, Bi).set(o, i),
        n || (this.startQueryRefetching(e), this.fetchWithCache(e));
      let a = de(this, Pr).get(o) ?? new Set();
      return (
        a.add(t),
        de(this, Pr).set(o, a),
        () => {
          let l = de(this, Pr).get(o);
          l &&
            (l.delete(t),
            l.size === 0 && de(this, Pr).delete(o),
            de(this, Pr).size === 0 && this.stopQueryRefetching(e));
        }
      );
    }
  },
  EC = Qc;
Pr = new WeakMap();
Kc = new WeakMap();
Bi = new WeakMap();
$i = new WeakMap();
ya = new WeakMap();
di = new WeakMap();
E(EC, "cacheKey", "framer-fetch-client-cache");
var T5 = ge(void 0),
  R5 = ge(!0),
  E5 = ({ children: e, client: t }) => {
    let [n] = Fe(() => t ?? new EC()),
      [r, i] = Fe(!0);
    return (
      B(
        () => (
          n.hydrateCache(),
          St(() => {
            i(!1);
          }),
          () => n.unmount()
        ),
        [n]
      ),
      C(R5.Provider, {
        value: r,
        children: C(T5.Provider, { value: n, children: e }),
      })
    );
  },
  F5,
  P5,
  _5,
  O5,
  I5;
F5 = new WeakMap();
P5 = new WeakMap();
_5 = new WeakMap();
O5 = new WeakMap();
I5 = new WeakMap();
var FC = class extends xe {
  constructor() {
    super(...arguments),
      E(this, "state", { error: void 0 }),
      E(this, "message", "Made UI non-interactive due to an error"),
      E(
        this,
        "messageReport",
        "If you are the author of this website, please report this issue to the Framer team via https://www.framer.community/"
      );
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  componentDidCatch(e) {
    var t, n;
    (F.__framer_hadFatalError = !0),
      "cause" in e && (e = e.cause),
      console.error(`${this.message} (see above). ${this.messageReport}.`);
    let r = Math.random();
    if (
      (!((t = this.context) != null && t.codeBoundaries) && r > 0.01) ||
      r > 0.25
    )
      return;
    let i = e instanceof Error && typeof e.stack == "string" ? e.stack : null;
    (n = F.__framer_events) == null ||
      n.push(["published_site_load_error", { message: String(e), stack: i }]);
  }
  render() {
    var e, t;
    let n = this.state.error;
    if (!n) return this.props.children;
    let r = "cause" in n ? n.cause : n,
      i = /-->/gu,
      o = "--!>",
      s =
        (fk(Re.userAgent) &&
          ((e = document.getElementById("main")) == null
            ? void 0
            : e.innerHTML)) ||
        "";
    return C("div", {
      style: { display: "contents" },
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html:
          `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${r.message.replace(
            i,
            o
          )}". ${this.messageReport}: --><!-- Stack: ${
            (t = n.stack) == null ? void 0 : t.replace(i, "--!>")
          } -->` + s,
      },
    });
  }
};
E(FC, "contextType", Ym);
function B8({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: o,
  collectionUtils: s,
  notFoundPage: a,
  isReducedMotion: l = !1,
  includeDataObserver: c = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: d,
  EditorBar: p,
  LayoutTemplate: y,
}) {
  let { enableAsyncURLUpdates: g } = Ta();
  if (
    (x.useEffect(() => {
      t || Ok.start();
    }, []),
    t)
  )
    return C(FC, {
      children: C(I0, {
        reducedMotion: l ? "user" : "never",
        children: C(E5, {
          children: C(Iz, {
            children: C(RC.Provider, {
              value: r,
              children: C(m5, {
                initialRoute: n,
                initialPathVariables: i,
                initialLocaleId: u,
                routes: o,
                collectionUtils: s,
                notFoundPage: a,
                locales: f,
                defaultPageStyle: { minHeight: "100vh", width: "auto" },
                preserveQueryParams: d,
                enableAsyncURLUpdates: g,
                editorBar: C(M5, { EditorBar: p }),
                LayoutTemplate: y,
              }),
            }),
          }),
        }),
      }),
    });
  {
    let b = c ? F3 : x.Fragment;
    return C(b, {
      children: C(aM, {
        routes: o,
        children: C(k3, {
          children: x.isValidElement(e) ? e : x.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function M5({ EditorBar: e }) {
  let t = Ta(),
    [n, r] = Fe(!1),
    i = A(RC),
    o = re(() => {
      let s = {},
        a;
      for (a in t)
        t.hasOwnProperty(a) && a.startsWith("editorBar") && (s[a] = t[a]);
      return s;
    }, [t]);
  return (
    B(() => {
      St(() => {
        r(!0);
      });
    }, []),
    !e || !i || !n
      ? null
      : C(u5, {
          children: C(hr, { children: C(e, { framerSiteId: i, features: o }) }),
        })
  );
}
function L5(e, t, n) {
  let r = hn.map(e, (i) => (Lt(i) ? pr(i, t) : i));
  return n ? r : C(ct, { children: r });
}
var tg = x.createContext(void 0),
  PC = "ssr-variant";
function O1(e, t, n, r, i, o, s, a) {
  let l = x.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !x.isValidElement(c))
    return (
      console.warn(
        "PropertyOverrides: expected exactly one React element for a child",
        t
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [g] of Object.entries(r)) {
    if (g === i) continue;
    let b = e[g];
    if (!b || !A5(c.props, b)) {
      f.push(g);
      continue;
    }
    let h = I1([g], o);
    h.length && u.push({ variants: h, propOverrides: b });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    p = I1(d, o);
  p.length && u.unshift({ variants: p });
  let y = [];
  for (let { variants: g, propOverrides: b } of u) {
    if (a && !g.includes(a)) continue;
    let h = g.join("+"),
      m = C(
        tg.Provider,
        { value: new Set(g), children: s(c, b ? { ...n, ...b } : n) },
        h
      ),
      v = V5(g, o, r);
    v.length
      ? (D(u.length > 1, "Must branch out when there are hiddenClassNames"),
        (m = C("div", { className: `${PC} ${v.join(" ")}`, children: m }, h)))
      : D(u.length === 1, "Cannot branch out when hiddenClassNames is empty"),
      y.push(m);
  }
  return (
    D(
      !a || y.length === 1,
      "Must render exactly one branch when activeVariantId is given"
    ),
    y
  );
}
function _C(e) {
  return e.split("-")[2];
}
function V5(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    e.includes(i) || s || r.push(`hidden-${_C(o)}`);
  }
  return r;
}
function I1(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function A5(e, t) {
  for (let n of Object.keys(t)) if (!Nm(e[n], t[n], !0)) return !0;
  return !1;
}
function D5(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var z5 = x.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = Um(o),
      a = x.useContext(tg),
      l = QM(),
      c = wt(() => (l.current ? (Lr() ? 1 : 2) : 0)),
      u = x.useContext(yC);
    if (!u)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, D5(t, i, n));
      case 1:
        return O1(n, r, i, d, f, a, s, t);
      case 2:
        return O1(n, r, i, d, f, a, L5, void 0);
      default:
        Ce(c);
    }
  }),
  H8 = (() => vC(z5, `.${PC} { display: contents }`, "PropertyOverrides"))();
function B5(e) {
  return {
    trace(...t) {
      var n;
      return (n = xt.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = xt.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = xt.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = xt.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = xt.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function $5(e) {
  return Ru(e) && e.every(be);
}
function OC(e) {
  return be(e) && $n(e.read) && $n(e.preload);
}
function N5(e) {
  return $5(e) || OC(e);
}
function IC(e) {
  return be(e) && be(e.schema);
}
function j5(e) {
  return be(e) && be(e.collectionByLocaleId);
}
async function M1(e, t) {
  return OC(e) ? (await e.preload(t), e.read(t)) : e;
}
var H5 = class {
  constructor(e, t) {
    (this.collection = e),
      (this.locale = t),
      E(this, "schema"),
      E(this, "indexes", []);
    let n = oA(e);
    D(n, "Collection does not have properties");
    let r = { id: { type: "string", isNullable: !1 } },
      i = Object.entries(n);
    for (let [o, s] of i) {
      if (!s) continue;
      let a = s.type;
      D(a !== "array", "Array properties are not supported"),
        D(a !== "object", "Object properties are not supported"),
        (r[o] = { type: a, isNullable: !0 });
    }
    this.schema = r;
  }
  getDatabaseItem(e, t) {
    let n = {};
    for (let r in this.schema) {
      let i = e[r];
      if (uM(i)) continue;
      let o = this.schema[r];
      Xe(o) ||
        (D(o.type !== "unknown", "Invalid definition type"),
        (n[r] = { type: o.type, value: i }));
    }
    return { pointer: t, data: n };
  }
  async resolveRichText(e) {
    if (Xm.is(e)) {
      let t = e.preload();
      return t && (await t), e.read();
    }
    return e;
  }
  async scanItems() {
    return (await M1(this.collection, this.locale)).map((t, n) => {
      let r = String(n);
      return this.getDatabaseItem(t, r);
    });
  }
  async resolveItems(e) {
    let t = await M1(this.collection, this.locale);
    return e.map((n) => {
      let r = Number(n),
        i = t[r];
      return D(i, "Can't find collection item"), this.getDatabaseItem(i, n);
    });
  }
  compareItems(e, t) {
    return Number(e.pointer) - Number(t.pointer);
  }
};
function W5(e, t) {
  switch (e?.type) {
    case "array":
      return {
        type: "array",
        value: e.value.map((r) => _e.cast(r, t.definition)),
      };
  }
  return null;
}
function MC(e) {
  switch (e?.type) {
    case "boolean":
      return e;
    case "number":
    case "string":
      return { type: "boolean", value: !!e.value };
  }
  return null;
}
function Vr(e) {
  let t = MC(e);
  return t?.value ?? !1;
}
function U5(e) {
  switch (e?.type) {
    case "color":
      return e;
  }
  return null;
}
function G5(e) {
  switch (e?.type) {
    case "date":
      return e;
    case "number":
    case "string": {
      let t = new Date(e.value);
      return ck(t) ? { type: "date", value: t.toISOString() } : null;
    }
  }
  return null;
}
function q5(e) {
  switch (e?.type) {
    case "enum":
      return e;
    case "string":
      return { type: "enum", value: e.value };
  }
  return null;
}
function X5(e) {
  switch (e?.type) {
    case "file":
      return e;
  }
  return null;
}
function Y5(e) {
  switch (e?.type) {
    case "link":
      return e;
    case "string":
      try {
        let { protocol: t } = new URL(e.value);
        return t === "http:" || t === "https:"
          ? { type: "link", value: e.value }
          : null;
      } catch {
        return null;
      }
  }
  return null;
}
function LC(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: "number", value: t } : null;
    }
  }
  return null;
}
function VC(e) {
  let t = LC(e);
  return t?.value ?? null;
}
function K5(e, t) {
  switch (e?.type) {
    case "object": {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [i, o] of r) {
        let s = e.value[i] ?? null;
        n[i] = _e.cast(s, o);
      }
      return { type: "object", value: n };
    }
  }
  return null;
}
function Q5(e) {
  switch (e?.type) {
    case "responsiveimage":
      return e;
  }
  return null;
}
function Z5(e) {
  switch (e?.type) {
    case "richtext":
      return e;
  }
  return null;
}
function AC(e) {
  switch (e?.type) {
    case "string":
      return e;
    case "number":
      return { type: "string", value: String(e.value) };
  }
  return null;
}
function jo(e) {
  let t = AC(e);
  return t?.value ?? null;
}
var _e = {
  cast(e, t) {
    switch (t.type) {
      case "array":
        return W5(e, t);
      case "boolean":
        return MC(e);
      case "color":
        return U5(e);
      case "date":
        return G5(e);
      case "enum":
        return q5(e);
      case "file":
        return X5(e);
      case "link":
        return Y5(e);
      case "number":
        return LC(e);
      case "object":
        return K5(e, t);
      case "responsiveimage":
        return Q5(e);
      case "richtext":
        return Z5(e);
      case "string":
        return AC(e);
      case "unknown":
        return e;
      default:
        Ce(t, "Unsupported cast");
    }
  },
  parse(e) {
    return Fm(e)
      ? { type: "boolean", value: e }
      : ck(e)
      ? { type: "date", value: e.toISOString() }
      : et(e)
      ? { type: "number", value: e }
      : ue(e)
      ? { type: "string", value: e }
      : Ru(e)
      ? { type: "array", value: e.map(_e.parse) }
      : null;
  },
  equal(e, t, n) {
    return e?.type !== t?.type ? !1 : Ni(e, t, n) === 0;
  },
  lessThan(e, t, n) {
    return e?.type !== t?.type ? !1 : Ni(e, t, n) < 0;
  },
  lessThanOrEqual(e, t, n) {
    return e?.type !== t?.type ? !1 : Ni(e, t, n) <= 0;
  },
  greaterThan(e, t, n) {
    return e?.type !== t?.type ? !1 : Ni(e, t, n) > 0;
  },
  greaterThanOrEqual(e, t, n) {
    return e?.type !== t?.type ? !1 : Ni(e, t, n) >= 0;
  },
  in(e, t, n) {
    return t?.type !== "array" ? !1 : t.value.some((r) => _e.equal(r, e, n));
  },
  indexOf(e, t, n) {
    return e?.type !== "array"
      ? -1
      : e.value.findIndex((r) => _e.equal(r, t, n));
  },
  contains(e, t, n) {
    let r = jo(e),
      i = jo(t);
    return sr(r) || sr(i)
      ? !1
      : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
        r.includes(i));
  },
  startsWith(e, t, n) {
    let r = jo(e),
      i = jo(t);
    return sr(r) || sr(i)
      ? !1
      : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
        r.startsWith(i));
  },
  endsWith(e, t, n) {
    let r = jo(e),
      i = jo(t);
    return sr(r) || sr(i)
      ? !1
      : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())),
        r.endsWith(i));
  },
  length(e) {
    switch (e?.type) {
      case "array":
        return e.value.length;
    }
    return 0;
  },
  stringify(e) {
    if (e === null) return "null";
    switch (e.type) {
      case "array":
        return `[${e.value.map(_e.stringify).join(", ")}]`;
      case "boolean":
      case "number":
        return String(e.value);
      case "string":
        return `'${e.value}'`;
      case "enum":
        return `'${e.value}' /* Enum */`;
      case "color":
        return `'${e.value}' /* Color */`;
      case "date":
        return `'${e.value}' /* Date */`;
      case "richtext":
        return "RichText";
      case "responsiveimage":
        return "ResponsiveImage";
      case "file":
        return "File";
      case "link":
        return ue(e.value) ? `'${e.value}' /* Link */` : "Link";
      case "object":
        return "Object";
      default:
        Ce(e);
    }
  },
};
function Ni(e, t, n) {
  if (sr(e) || sr(t)) return D(e === t), 0;
  switch (e.type) {
    case "array": {
      D(e.type === t.type);
      let r = e.value.length,
        i = t.value.length;
      if (r < i) return -1;
      if (r > i) return 1;
      for (let o = 0; o < r; o++) {
        let s = e.value[o],
          a = t.value[o];
        D(!Xe(s), "Left item must exist"), D(!Xe(a), "Right item must exist");
        let l = Ni(s, a, n);
        if (l !== 0) return l;
      }
      return 0;
    }
    case "boolean":
      return (
        D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      D(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "link": {
      D(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        D(e.type === t.type), e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "object": {
      D(e.type === t.type);
      let r = Object.keys(e.value).sort(),
        i = Object.keys(t.value).sort();
      if (r.length < i.length) return -1;
      if (r.length > i.length) return 1;
      for (let o = 0; o < r.length; o++) {
        let s = r[o],
          a = i[o];
        if (
          (D(!Xe(s), "Left key must exist"),
          D(!Xe(a), "Left key must exist"),
          s < a)
        )
          return -1;
        if (s > a) return 1;
        let l = e.value[s],
          c = t.value[a];
        D(!Xe(l), "Left value must exist"), D(!Xe(c), "Right value must exist");
        let u = Ni(l, c, n);
        if (u !== 0) return u;
      }
      return 0;
    }
    case "responsiveimage": {
      D(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "richtext": {
      D(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      D(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      Ce(e);
  }
}
var L1 = { type: "unknown", isNullable: !0 };
function J5() {
  return 25;
}
function e4() {
  return 100 * 125;
}
var cu = 1e3,
  ie = class {
    constructor(e) {
      this.network = e;
    }
    static estimate(e, t) {
      let n = J5(),
        r = e4(),
        i = e * n + t / r;
      return new ie(i);
    }
    static max(e, t) {
      let n = Math.max(e.network, t.network);
      return new ie(n);
    }
    static compare(e, t) {
      return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
    }
    add(e) {
      return (this.network += e.network), this;
    }
    toString() {
      return `${this.network}ms`;
    }
  };
var DC = class {
    constructor(e, t) {
      (this.id = e),
        (this.relational = t),
        E(this, "nodes", []),
        E(this, "winners", new Map());
    }
    addNode(e) {
      this.nodes.push(e), e.setGroup(this);
    }
    getWinner(e) {
      let t = e.getHash(),
        n = this.winners.get(t);
      if (n) return n;
      let r = new t4();
      return this.winners.set(t, r), r;
    }
    getOptimized(e) {
      let t = this.getWinner(e);
      D(t.node, "Group not optimized");
      let n = t.node.getOptimized(e);
      return n.setGroup(this), n;
    }
  },
  t4 = class {
    constructor() {
      E(this, "node"), E(this, "cost", new ie(1 / 0)), E(this, "nodes", []);
    }
    update(e, t) {
      this.nodes.push(e),
        ie.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t));
    }
  };
function zC(e) {
  let t = e.next();
  return D(t.done, "Generator must not yield"), t.value;
}
async function Mu(e, t = e.next()) {
  for (; !t.done; ) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function* We(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let o = e[i];
    if (uk(o)) {
      let s = o.next();
      s.done
        ? (t[i] = s.value)
        : r.push(
            Mu(o, s).then((a) => {
              t[i] = a;
            })
          );
    } else t[i] = o;
  }
  return r.length > 0 && (yield Promise.all(r)), t;
}
function* uu(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let o = e[i];
    if (uk(o)) {
      let s = o.next();
      s.done
        ? (t[i] = s.value)
        : r.push(
            Mu(o, s).then((a) => {
              t[i] = a;
            })
          );
    } else t[i] = o;
  }
  return r.length > 0 && (yield Promise.all(r)), t;
}
var BC = class {
    constructor(e) {
      this.isSynchronous = e;
    }
  },
  En = class extends BC {
    constructor() {
      super(...arguments), E(this, "group");
    }
    getGroup() {
      return D(this.group, "Node must be in a group"), this.group;
    }
    setGroup(e) {
      D(!this.group, "Node is already in a group"), (this.group = e);
    }
    evaluateSync() {
      let e = this.evaluate(void 0);
      return zC(e);
    }
    evaluateAsync() {
      let e = this.evaluate(void 0);
      return Mu(e);
    }
  };
function n4(e) {
  return be(e) && $n(e.getHash);
}
function oe(e, ...t) {
  let n = t.map((r) => {
    let i = r instanceof NC;
    D(!i, "Pass CollectionMetadata.id instead");
    let o = r instanceof ba;
    D(!o, "Pass FieldMetadata.id instead");
    let s = r instanceof jC;
    D(!s, "Pass IndexMetadata.id instead");
    let a = r instanceof En;
    D(!a, "Pass RelationalNode.group.id instead");
    let l = r instanceof DC;
    return (
      D(!l, "Pass Group.id instead"), n4(r) ? r.getHash() : JSON.stringify(r)
    );
  });
  return `${e}(${n.join(", ")})`;
}
var ng = class {
    constructor(e, t) {
      (this.data = e), (this.pointer = t), E(this, "cached");
    }
    resolve() {
      return (
        this.cached ?? (this.cached = this.data.resolveRichText(this.pointer)),
        this.cached
      );
    }
  },
  Xo = "index",
  $C = class extends Set {
    merge(e) {
      for (let t of e) this.add(t);
    }
    equals(e) {
      if (this === e) return !0;
      if (this.size !== e.size) return !1;
      for (let t of this) if (!e.has(t)) return !1;
      return !0;
    }
    subsetOf(e) {
      if (this === e) return !0;
      if (this.size > e.size) return !1;
      for (let t of this) if (!e.has(t)) return !1;
      return !0;
    }
    getHash() {
      let e = [];
      for (let t of this) e.push(t.id);
      return e.sort((t, n) => t - n), oe(this.name, ...e);
    }
  };
var NC = class {
  constructor(e, t, n) {
    (this.id = e),
      (this.name = t),
      (this.data = n),
      E(this, "indexes", new r4()),
      E(this, "fields", new W());
  }
};
var jC = class {
    constructor(e, t, n, r, i, o) {
      (this.id = e),
        (this.data = t),
        (this.collection = n),
        (this.lookupNodes = r),
        (this.constraint = i),
        (this.ordering = o),
        E(this, "resolvedFields", new W());
      for (let s in t.schema)
        for (let a of n.fields) a.name === s && this.resolvedFields.add(a);
    }
  },
  r4 = class extends $C {
    constructor() {
      super(...arguments), E(this, "name", "Indexes");
    }
  };
var ba = class {
    constructor(e, t, n, r) {
      (this.id = e),
        (this.name = t),
        (this.definition = n),
        (this.collection = r);
    }
    getValue(e) {
      D(this.name, "Can only get value of field with a name");
      let t = e.data[this.name];
      return t?.type === "richtext"
        ? (D(this.collection, "Rich text field must have a collection"),
          { type: "richtext", value: new ng(this.collection.data, t.value) })
        : t ?? null;
    }
  },
  W = class extends $C {
    constructor() {
      super(...arguments), E(this, "name", "Fields");
    }
  },
  Jp = class {
    constructor(e, t = "asc") {
      (this.field = e), (this.direction = t);
    }
    getHash() {
      return oe("OrderingField", this.field.id, this.direction);
    }
  },
  ar = class {
    constructor(e) {
      E(this, "fields", []), e && this.merge(e);
    }
    get length() {
      return this.fields.length;
    }
    getHash() {
      return oe("Ordering", ...this.fields);
    }
    push(e) {
      this.fields.push(e);
    }
    merge(e) {
      this.fields.push(...e.fields);
    }
    equals(e) {
      return this === e
        ? !0
        : this.length !== e.length
        ? !1
        : this.getHash() === e.getHash();
    }
    providedByFields(e) {
      for (let { field: t } of this.fields)
        if (!e.has(t) && t.name !== Xo) return !1;
      return !0;
    }
  },
  un = class {
    constructor(e, t) {
      (this.ordering = e), (this.resolvedFields = t);
    }
    getHash() {
      return oe("RequiredProps", this.ordering, this.resolvedFields);
    }
    get isMinimal() {
      return this.ordering.length === 0 && this.resolvedFields.size === 0;
    }
    canProvide(e) {
      return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
    }
    canProvideOrdering(e) {
      return this.ordering.length === 0
        ? !0
        : e.canProvideOrdering(this.ordering);
    }
    canProvideResolvedFields(e) {
      return this.resolvedFields.size === 0
        ? !0
        : e.canProvideResolvedFields(this.resolvedFields);
    }
  },
  vm = class {
    constructor(e) {
      (this.parent = e),
        E(this, "node"),
        E(this, "ordering"),
        E(this, "fields", []);
    }
    takeNode() {
      let e = this.node;
      return D(e, "Node is missing"), (this.node = void 0), e;
    }
    setNode(e) {
      D(!this.node, "Node already set"), (this.node = e);
    }
    setOrdering(e) {
      this.ordering = e;
    }
    push() {
      return new vm(this);
    }
    replace() {
      return new vm(this.parent);
    }
    addField(e) {
      this.fields.push(e);
    }
    addFieldsFromScope(e) {
      for (let t of e.fields) this.addField(t);
    }
    resolveField(e, t) {
      var n;
      let r = [];
      for (let i of this.fields)
        i.name === e && ((t && i.collectionName !== t) || r.push(i));
      if (r.length === 1) return r[0];
      if (r.length > 1) throw new Error("Ambiguous fields");
      return (n = this.parent) == null ? void 0 : n.resolveField(e, t);
    }
    has(e) {
      var t;
      return this.fields.includes(e)
        ? !0
        : ((t = this.parent) == null ? void 0 : t.has(e)) ?? !1;
    }
    getRequiredOrdering() {
      return this.ordering ?? new ar();
    }
    getRequiredResolvedFields() {
      let e = new W();
      for (let { field: t } of this.fields) t.collection && e.add(t);
      return e;
    }
    getRequiredProps() {
      let e = this.getRequiredOrdering(),
        t = this.getRequiredResolvedFields();
      return new un(e, t);
    }
    getNamedFields() {
      let e = {};
      for (let { name: t, field: n } of this.fields) e[t] = n;
      return e;
    }
    getSingleField() {
      D(this.fields.length === 1, "Scope must contain exactly one field");
      let e = this.fields[0];
      return D(e, "Field must exist"), e.field;
    }
  },
  ur = class {
    constructor() {
      E(this, "pointers", new Map()), E(this, "values", new Map());
    }
    getKey() {
      let e = [];
      for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
      return e.sort().join("-");
    }
    addValue(e, t) {
      this.values.set(e, t);
    }
    getValue(e) {
      return this.values.get(e) ?? null;
    }
    mergeValues(e) {
      for (let [t, n] of e.values) this.addValue(t, n);
    }
    addPointer(e, t) {
      this.pointers.set(e, t);
    }
    getPointer(e) {
      return this.pointers.get(e);
    }
    mergePointers(e) {
      for (let [t, n] of e.pointers) this.addPointer(t, n);
    }
    merge(e) {
      this.mergeValues(e), this.mergePointers(e);
    }
  },
  Tn = class {
    constructor(e, t = []) {
      (this.fields = e), (this.tuples = t);
    }
    push(e) {
      this.tuples.push(e);
    }
    filter(e) {
      let t = this.tuples.filter(e);
      return new Tn(this.fields, t);
    }
    map(e, t) {
      let n = this.tuples.map(t);
      return new Tn(e, n);
    }
    sort(e) {
      let t = Array.from(this.tuples).sort(e);
      return new Tn(this.fields, t);
    }
    slice(e, t) {
      let n = this.tuples.slice(e, t);
      return new Tn(this.fields, n);
    }
    union(e) {
      let t = new W();
      for (let i of this.fields) e.fields.has(i) && t.add(i);
      let n = new Set(),
        r = new Tn(t);
      for (let i of this.tuples) {
        let o = i.getKey();
        n.add(o), r.push(i);
      }
      for (let i of e.tuples) {
        let o = i.getKey();
        n.has(o) || r.push(i);
      }
      return r;
    }
    intersection(e) {
      let t = new W();
      for (let i of this.fields) e.fields.has(i) && t.add(i);
      let n = new Set(),
        r = new Tn(t);
      for (let i of this.tuples) {
        let o = i.getKey();
        n.add(o);
      }
      for (let i of e.tuples) {
        let o = i.getKey();
        n.has(o) && r.push(i);
      }
      return r;
    }
  },
  ym = class {
    constructor(e, t) {
      (this.input = e), (this.field = t);
    }
    getHash() {
      return oe("ProjectionField", this.input, this.field.id);
    }
  },
  bm = class extends En {
    constructor(e, t, n) {
      let r = e.isSynchronous;
      for (let i of t) r && (r = i.input.isSynchronous);
      super(r),
        (this.input = e),
        (this.projections = t),
        (this.passthrough = n),
        E(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe(
        "RelationalProject",
        this.inputGroup.id,
        ...this.projections,
        this.passthrough
      );
    }
    getOutputFields() {
      let e = new W();
      e.merge(this.passthrough);
      for (let t of this.projections) e.add(t.field);
      return e;
    }
    canProvideOrdering(e) {
      let t = new W();
      for (let n of this.projections) t.add(n.field);
      for (let { field: n } of e.fields) if (t.has(n)) return !1;
      return !0;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new W(e.resolvedFields);
      for (let n of this.projections)
        t.merge(n.input.referencedFields), t.delete(n.field);
      return new un(e.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = new ie(0);
      for (let o of this.projections) {
        let s = o.input.optimize(e);
        i = ie.max(i, s);
      }
      return new ie(0).add(ie.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.projections.map((i) => {
          let o = i.input.getOptimized();
          return new ym(o, i.field);
        });
      return new bm(n, r, this.passthrough);
    }
    *evaluate(e) {
      let t = this.getOutputFields(),
        n = yield* this.input.evaluate(e),
        r = yield* uu(
          n.tuples.map((i) =>
            uu(
              this.projections.map((o) =>
                We({ field: o.field, value: o.input.evaluate(e, i) })
              )
            )
          )
        );
      return n.map(t, (i, o) => {
        let s = new ur();
        s.mergePointers(i);
        for (let l of this.passthrough) {
          let c = i.getValue(l);
          s.addValue(l, c);
        }
        let a = r[o];
        D(a, "Projections must exist");
        for (let { field: l, value: c } of a) s.addValue(l, c);
        return s;
      });
    }
  },
  Jo = { type: 0 },
  Ye = class extends BC {
    constructor(e, t, n) {
      super(n),
        (this.referencedFields = e),
        (this.referencedOuterFields = t),
        (this.isSynchronous = n);
    }
    evaluateSync() {
      let e = this.evaluate(void 0, void 0);
      return zC(e);
    }
    evaluateAsync() {
      let e = this.evaluate(void 0, void 0);
      return Mu(e);
    }
  },
  i4 = { type: 0 },
  rg = class {
    constructor(e, t) {
      (this.when = e), (this.then = t);
    }
    getHash() {
      return oe("CaseCondition", this.when, this.then);
    }
  },
  HC = class extends Ye {
    constructor(e, t, n) {
      let r = new W(),
        i = new W(),
        o = !0;
      e &&
        (r.merge(e.referencedFields),
        i.merge(e.referencedOuterFields),
        o && (o = e.isSynchronous));
      for (let { when: s, then: a } of t)
        r.merge(s.referencedFields),
          i.merge(s.referencedOuterFields),
          o && (o = s.isSynchronous),
          r.merge(a.referencedFields),
          i.merge(a.referencedOuterFields),
          o && (o = a.isSynchronous);
      n &&
        (r.merge(n.referencedFields),
        i.merge(n.referencedOuterFields),
        o && (o = n.isSynchronous)),
        super(r, i, o),
        (this.input = e),
        (this.conditions = t),
        (this.otherwise = n),
        E(this, "definition", { type: "unknown", isNullable: !0 });
    }
    getHash() {
      return oe("ScalarCase", this.input, ...this.conditions, this.otherwise);
    }
    toString() {
      let e = "CASE";
      this.input && (e = `${e} ${this.input}`);
      for (let { when: t, then: n } of this.conditions)
        e = `${e} WHEN ${t} THEN ${n}`;
      return this.otherwise && (e = `${e} ELSE ${this.otherwise}`), `${e} END`;
    }
    optimize(e) {
      var t, n;
      (t = this.input) == null || t.optimize(e);
      for (let r of this.conditions) r.when.optimize(e), r.then.optimize(e);
      return (n = this.otherwise) == null || n.optimize(e), new ie(0);
    }
    getOptimized() {
      var e, t;
      let n = (e = this.input) == null ? void 0 : e.getOptimized(),
        r = this.conditions.map((o) => {
          let s = o.when.getOptimized(),
            a = o.then.getOptimized();
          return new rg(s, a);
        }),
        i = (t = this.otherwise) == null ? void 0 : t.getOptimized();
      return new HC(n, r, i);
    }
    *evaluate(e, t) {
      var n, r;
      let {
        input: i,
        conditions: o,
        otherwise: s,
      } = yield* We({
        input: ((n = this.input) == null ? void 0 : n.evaluate(e, t)) ?? null,
        conditions: uu(
          this.conditions.map((a) =>
            We({ when: a.when.evaluate(e, t), then: a.then.evaluate(e, t) })
          )
        ),
        otherwise:
          ((r = this.otherwise) == null ? void 0 : r.evaluate(e, t)) ?? null,
      });
      if (this.input) {
        for (let { when: a, then: l } of o) if (_e.equal(i, a, i4)) return l;
      } else for (let { when: a, then: l } of o) if (Vr(a)) return l;
      return s;
    }
  },
  o4 = class {
    constructor(e, t, n) {
      (this.normalizer = e),
        (this.query = t),
        (this.locale = n),
        E(this, "collectionId", 0),
        E(this, "indexId", 0),
        E(this, "fieldId", 0),
        E(this, "subqueries", []);
    }
    build() {
      let e = new vm();
      return this.buildQuery(e, this.query);
    }
    buildQuery(e, t) {
      let n = { type: "Select", ...t };
      return this.buildSelect(e, n);
    }
    buildSelect(e, t) {
      let n = this.buildFrom(e, t.from),
        r = n.getRequiredOrdering();
      if (t.where) {
        let l = n.takeNode(),
          c = this.buildExpression(n, t.where),
          u = this.normalizer.newRelationalFilter(l, c);
        n.setNode(u);
      }
      let i = [],
        o = new W(),
        s;
      if (t.orderBy) {
        s = new ar();
        for (let l of t.orderBy)
          if (l.type === "Identifier") {
            let c = n.resolveField(l.name, l.collection);
            if (Xe(c)) continue;
            o.add(c.field);
            let u = new Jp(c.field, l.direction);
            s.push(u);
          } else {
            let c = this.buildExpression(n, l),
              u = this.fieldId++,
              f = new ba(u, void 0, c.definition, void 0),
              d = new ym(c, f);
            i.push(d);
            let p = new Jp(f, l.direction);
            s.push(p);
          }
        s.merge(r);
      } else s = r;
      let a = this.buildSelectList(n, t.select, o, i);
      if ((a.setOrdering(s), t.offset)) {
        let l = a.takeNode(),
          c = this.buildExpression(e, t.offset),
          u = this.normalizer.newRelationalOffset(l, c, s);
        a.setNode(u);
      }
      if (t.limit) {
        let l = a.takeNode(),
          c = this.buildExpression(e, t.limit),
          u = this.normalizer.newRelationalLimit(l, c, s);
        a.setNode(u);
      }
      return a;
    }
    buildSelectList(e, t, n, r) {
      let i = e.push(),
        o = new W(n),
        s = [...r];
      for (let c of t)
        if (c.type === "Identifier") {
          let u = e.resolveField(c.name, c.collection);
          if (Xe(u)) continue;
          o.add(u.field), i.addField({ ...u, name: c.alias ?? u.name });
        } else {
          let u = this.buildExpression(e, c);
          D(c.alias, "Subqueries should have an alias");
          let f = this.fieldId++,
            d = c.alias,
            p = new ba(f, d, u.definition, void 0),
            y = new ym(u, p);
          s.push(y), i.addField({ field: p, name: d });
        }
      let a = e.takeNode(),
        l = this.normalizer.newRelationalProject(a, s, o);
      return i.setNode(l), i;
    }
    buildFrom(e, t) {
      switch (t.type) {
        case "Collection":
          return this.buildCollection(e, t);
        case "LeftJoin":
          return this.buildJoin(e, t);
        default:
          Ce(t, "Unsupported from type");
      }
    }
    buildCollection(e, t) {
      let n = e.push(),
        r = s4(t.data, this.locale),
        i = t.alias,
        o = this.collectionId++,
        s = new NC(o, i, r);
      for (let [l, c] of Object.entries(r.schema)) {
        let u = this.fieldId++,
          f = new ba(u, l, c, s);
        n.addField({ field: f, name: l, collectionName: i }), s.fields.add(f);
      }
      {
        let l = { type: "number", isNullable: !1 },
          c = this.fieldId++,
          u = new ba(c, Xo, l, s);
        n.addField({ field: u, name: Xo, collectionName: i });
        let f = new ar(),
          d = new Jp(u);
        f.push(d), n.setOrdering(f);
      }
      for (let l of r.indexes) {
        let c = [];
        for (let y of l.fields) {
          let g = this.buildExpression(n, y);
          c.push(g);
        }
        let u;
        l.where && (u = this.buildExpression(n, l.where));
        let f = new ar(),
          d = this.indexId++,
          p = new jC(d, l, s, c, u, f);
        s.indexes.add(p);
      }
      let a = this.normalizer.newRelationalScan(s);
      return n.setNode(a), n;
    }
    buildJoin(e, t) {
      let n = this.buildFrom(e, t.left),
        r = this.buildFrom(e, t.right),
        i = new ar(),
        o = n.getRequiredOrdering();
      i.merge(o);
      let s = r.getRequiredOrdering();
      i.merge(s);
      let a = e.push();
      a.addFieldsFromScope(n), a.addFieldsFromScope(r), a.setOrdering(i);
      let l = this.buildExpression(a, t.constraint),
        c = n.takeNode(),
        u = r.takeNode(),
        f;
      switch (t.type) {
        case "LeftJoin":
          f = this.normalizer.newRelationalLeftJoin(c, u, l);
          break;
        default:
          Ce(t.type, "Unsupported join type");
      }
      return a.setNode(f), a;
    }
    buildExpression(e, t) {
      switch (t.type) {
        case "Identifier":
          return this.buildIdentifier(e, t);
        case "LiteralValue":
          return this.buildLiteralValue(t);
        case "FunctionCall":
          return this.buildFunctionCall(e, t);
        case "Case":
          return this.buildCase(e, t);
        case "UnaryOperation":
          return this.buildUnaryOperation(e, t);
        case "BinaryOperation":
          return this.buildBinaryOperation(e, t);
        case "TypeCast":
          return this.buildTypeCast(e, t);
        case "Select":
          throw new Error(
            "Subqueries are only supported inside subquery function calls"
          );
        default:
          Ce(t, "Unsupported expression");
      }
    }
    buildIdentifier(e, t) {
      let n = e.resolveField(t.name, t.collection);
      if (n) {
        let r = !1;
        for (let i of this.subqueries)
          r
            ? i.referencedOuterFields.add(n.field)
            : ((r = i.inScope.has(n)), r && i.referencedFields.add(n.field));
        return this.normalizer.newScalarVariable(n.field, r);
      }
      return this.normalizer.newScalarConstant(L1, null);
    }
    buildLiteralValue(e) {
      let t = _e.parse(e.value);
      return this.normalizer.newScalarConstant(L1, t);
    }
    buildFunctionCall(e, t) {
      let n = (r) => {
        let i = t.arguments[r];
        return D(i, "Missing argument"), this.buildExpression(e, i);
      };
      switch (t.functionName) {
        case "CONTAINS": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarContains(r, i);
        }
        case "STARTS_WITH": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarStartsWith(r, i);
        }
        case "ENDS_WITH": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarEndsWith(r, i);
        }
        case "LENGTH": {
          let r = n(0);
          return this.normalizer.newScalarLength(r);
        }
        case "INDEX_OF": {
          let r = n(0),
            i = n(1);
          return this.normalizer.newScalarIndexOf(r, i);
        }
        case "ARRAY": {
          let r = t.arguments[0];
          return (
            D(r, "Missing argument"),
            D(r.type === "Select", "Subqueries require a select expression"),
            this.buildSubqueryArray(e, r)
          );
        }
        case "FLAT_ARRAY": {
          let r = t.arguments[0];
          return (
            D(r, "Missing argument"),
            D(r.type === "Select", "Subqueries require a select expression"),
            this.buildSubqueryFlatArray(e, r)
          );
        }
        default:
          throw new Error("Unsupported function name");
      }
    }
    buildSubqueryArray(e, t) {
      try {
        let n = new V1(e);
        this.subqueries.push(n);
        let r = this.buildSelect(e, t),
          i = r.takeNode(),
          o = r.getNamedFields(),
          s = r.getRequiredOrdering(),
          a = n.referencedFields,
          l = n.referencedOuterFields;
        return this.normalizer.newScalarArray(i, o, s, a, l);
      } finally {
        this.subqueries.pop();
      }
    }
    buildSubqueryFlatArray(e, t) {
      try {
        let n = new V1(e);
        this.subqueries.push(n);
        let r = this.buildSelect(e, t),
          i = r.takeNode(),
          o = r.getSingleField(),
          s = r.getRequiredOrdering(),
          a = n.referencedFields,
          l = n.referencedOuterFields;
        return this.normalizer.newScalarFlatArray(i, o, s, a, l);
      } finally {
        this.subqueries.pop();
      }
    }
    buildCase(e, t) {
      let n;
      t.value && (n = this.buildExpression(e, t.value));
      let r = t.conditions.map((o) => {
          let s = this.buildExpression(e, o.when),
            a = this.buildExpression(e, o.then);
          return new rg(s, a);
        }),
        i;
      return (
        t.else && (i = this.buildExpression(e, t.else)),
        this.normalizer.newScalarCase(n, r, i)
      );
    }
    buildUnaryOperation(e, t) {
      let n = this.buildExpression(e, t.value);
      switch (t.operator) {
        case "not":
          return this.normalizer.newScalarNot(n);
        default:
          Ce(t.operator, "Unsupported unary operator");
      }
    }
    buildBinaryOperation(e, t) {
      let n = this.buildExpression(e, t.left),
        r = this.buildExpression(e, t.right);
      switch (t.operator) {
        case "and":
          return this.normalizer.newScalarAnd(n, r);
        case "or":
          return this.normalizer.newScalarOr(n, r);
        case "==":
          return this.normalizer.newScalarEquals(n, r);
        case "!=":
          return this.normalizer.newScalarNotEquals(n, r);
        case "<":
          return this.normalizer.newScalarLessThan(n, r);
        case "<=":
          return this.normalizer.newScalarLessThanOrEqual(n, r);
        case ">":
          return this.normalizer.newScalarGreaterThan(n, r);
        case ">=":
          return this.normalizer.newScalarGreaterThanOrEqual(n, r);
        case "in":
          return this.normalizer.newScalarIn(n, r);
        default:
          Ce(t.operator, "Unsupported binary operator");
      }
    }
    buildTypeCast(e, t) {
      let n = this.buildExpression(e, t.value);
      switch (t.dataType) {
        case "BOOLEAN": {
          let r = { type: "boolean", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        case "DATE": {
          let r = { type: "date", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        case "NUMBER": {
          let r = { type: "number", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        case "STRING": {
          let r = { type: "string", isNullable: !0 };
          return this.normalizer.newScalarCast(n, r);
        }
        default:
          throw new Error("Unsupported data type");
      }
    }
  };
function s4(e, t) {
  if (N5(e)) return new H5(e, t);
  if (IC(e)) return e;
  if (j5(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  Ce(e, "Unsupported collection type");
}
var V1 = class {
    constructor(e) {
      (this.inScope = e),
        E(this, "referencedFields", new W()),
        E(this, "referencedOuterFields", new W());
    }
  },
  fu = class extends En {
    constructor(e, t) {
      super(e.isSynchronous && t.isSynchronous),
        (this.input = e),
        (this.predicate = t),
        E(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("RelationalFilter", this.inputGroup.id, this.predicate);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering() {
      return !0;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new W(e.resolvedFields);
      return t.merge(this.predicate.referencedFields), new un(e.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = this.predicate.optimize(e);
      return new ie(0).add(ie.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.predicate.getOptimized();
      return new fu(n, r);
    }
    *evaluate(e) {
      let t = yield* this.input.evaluate(e),
        n = yield* uu(t.tuples.map((r) => this.predicate.evaluate(e, r)));
      return t.filter((r, i) => {
        let o = n[i] ?? null;
        return Vr(o);
      });
    }
  },
  Cn = class extends En {
    constructor(e, t) {
      super(!1), (this.index = e), (this.query = t);
    }
    getHash() {
      return oe("RelationalIndexLookup", this.index.id, ...this.query);
    }
    getOutputFields() {
      return this.index.collection.fields;
    }
    canProvideOrdering(e) {
      return e.equals(this.index.ordering);
    }
    canProvideResolvedFields(e) {
      return e.subsetOf(this.index.resolvedFields);
    }
    optimize() {
      let e = this.query.every((t) => t.type === "All");
      return ie.estimate(1, e ? 100 * cu : 50 * cu);
    }
    getOptimized() {
      return new Cn(this.index, this.query);
    }
    *evaluate() {
      let e = this.index,
        t = e.collection,
        n = this.getOutputFields(),
        i = (yield e.data.lookupItems(this.query)).map((o) => {
          let s = new ur();
          for (let a of e.resolvedFields) {
            let l = a.getValue(o);
            s.addPointer(t, o.pointer), s.addValue(a, l);
          }
          return s;
        });
      return new Tn(n, i);
    }
  },
  WC = class extends En {
    constructor(e, t) {
      super(e.isSynchronous && t.isSynchronous),
        (this.left = e),
        (this.right = t),
        E(this, "leftGroup", this.left.getGroup()),
        E(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe(
        "RelationalIntersection",
        this.leftGroup.id,
        this.rightGroup.id
      );
    }
    getOutputFields() {
      let e = new W(),
        t = this.leftGroup.relational.outputFields,
        n = this.rightGroup.relational.outputFields;
      for (let r of t) n.has(r) && e.add(r);
      return e;
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e) {
      let t = new ar();
      return new un(t, e.resolvedFields);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(t),
        o = e.optimizeGroup(this.rightGroup, i);
      return ie.max(r, o);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(e),
        i = this.rightGroup.getOptimized(r);
      return new WC(n, i);
    }
    *evaluate(e) {
      let { left: t, right: n } = yield* We({
        left: this.left.evaluate(e),
        right: this.right.evaluate(e),
      });
      return t.intersection(n);
    }
  },
  Yo = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarEquals", this.left, this.right);
    }
    toString() {
      return `${this.left} == ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new Yo(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: _e.equal(n, r, Jo) };
    }
  },
  du = class extends En {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
        (this.left = e),
        (this.right = t),
        (this.constraint = n),
        E(this, "leftGroup", this.left.getGroup()),
        E(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe(
        "RelationalLeftJoin",
        this.leftGroup.id,
        this.rightGroup.id,
        this.constraint
      );
    }
    getOutputFields() {
      let e = new W();
      return (
        e.merge(this.leftGroup.relational.outputFields),
        e.merge(this.rightGroup.relational.outputFields),
        e
      );
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e, t) {
      let n = new W(),
        r = e.relational.outputFields;
      for (let o of t.resolvedFields) r.has(o) && n.add(o);
      for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
      let i = new ar();
      return new un(i, n);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(this.leftGroup, t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(this.rightGroup, t),
        o = e.optimizeGroup(this.rightGroup, i),
        s = this.constraint.optimize(e);
      return ie.max(ie.max(r, o), s);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(this.leftGroup, e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(this.rightGroup, e),
        i = this.rightGroup.getOptimized(r),
        o = this.constraint.getOptimized();
      return new du(n, i, o);
    }
    *evaluateScalarEquals(e, t, n, r, i) {
      let o = new Map();
      for (let l of t.tuples) {
        let c = yield* r.evaluate(i, l),
          u = JSON.stringify(c?.value ?? null),
          f = o.get(u) ?? [];
        f.push(l), o.set(u, f);
      }
      let s = this.getOutputFields(),
        a = new Tn(s);
      for (let l of e.tuples) {
        let c = yield* n.evaluate(i, l),
          u = JSON.stringify(c?.value ?? null),
          f = o.get(u) ?? [];
        if (f.length === 0) a.push(l);
        else
          for (let d of f) {
            let p = new ur();
            p.merge(l), p.merge(d), a.push(p);
          }
      }
      return a;
    }
    *evaluate(e) {
      let { left: t, right: n } = yield* We({
        left: this.left.evaluate(e),
        right: this.right.evaluate(e),
      });
      if (this.constraint instanceof Yo) {
        if (
          this.constraint.left.referencedFields.subsetOf(
            this.leftGroup.relational.outputFields
          ) &&
          this.constraint.right.referencedFields.subsetOf(
            this.rightGroup.relational.outputFields
          )
        )
          return yield* this.evaluateScalarEquals(
            t,
            n,
            this.constraint.left,
            this.constraint.right,
            e
          );
        if (
          this.constraint.right.referencedFields.subsetOf(
            this.leftGroup.relational.outputFields
          ) &&
          this.constraint.left.referencedFields.subsetOf(
            this.rightGroup.relational.outputFields
          )
        )
          return yield* this.evaluateScalarEquals(
            t,
            n,
            this.constraint.right,
            this.constraint.left,
            e
          );
      }
      let r = this.getOutputFields(),
        i = new Tn(r);
      for (let o of t.tuples) {
        let s = !1;
        for (let a of n.tuples) {
          let l = new ur();
          l.merge(o), l.merge(a);
          let c = yield* this.constraint.evaluate(e, l);
          Vr(c) && (i.push(l), (s = !0));
        }
        s || i.push(o);
      }
      return i;
    }
  },
  ig = class extends En {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
        (this.left = e),
        (this.right = t),
        (this.constraint = n),
        E(this, "leftGroup", this.left.getGroup()),
        E(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe(
        "RelationalRightJoin",
        this.leftGroup.id,
        this.rightGroup.id,
        this.constraint
      );
    }
    getOutputFields() {
      let e = new W();
      return (
        e.merge(this.leftGroup.relational.outputFields),
        e.merge(this.rightGroup.relational.outputFields),
        e
      );
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e, t) {
      let n = new W(),
        r = e.relational.outputFields;
      for (let o of t.resolvedFields) r.has(o) && n.add(o);
      for (let o of this.constraint.referencedFields) r.has(o) && n.add(o);
      let i = new ar();
      return new un(i, n);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(this.leftGroup, t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(this.rightGroup, t),
        o = e.optimizeGroup(this.rightGroup, i),
        s = this.constraint.optimize(e);
      return ie.max(ie.max(r, o), s);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(this.leftGroup, e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(this.rightGroup, e),
        i = this.rightGroup.getOptimized(r),
        o = this.constraint.getOptimized();
      return new ig(n, i, o);
    }
    *evaluateScalarEquals(e, t, n, r, i) {
      let o = new Map();
      for (let l of e.tuples) {
        let c = yield* n.evaluate(i, l),
          u = JSON.stringify(c?.value ?? null),
          f = o.get(u) ?? [];
        f.push(l), o.set(u, f);
      }
      let s = this.getOutputFields(),
        a = new Tn(s);
      for (let l of t.tuples) {
        let c = yield* r.evaluate(i, l),
          u = JSON.stringify(c?.value ?? null),
          f = o.get(u) ?? [];
        if (f.length === 0) a.push(l);
        else
          for (let d of f) {
            let p = new ur();
            p.merge(l), p.merge(d), a.push(p);
          }
      }
      return a;
    }
    *evaluate(e) {
      let { left: t, right: n } = yield* We({
        left: this.left.evaluate(e),
        right: this.right.evaluate(e),
      });
      if (this.constraint instanceof Yo) {
        if (
          this.constraint.left.referencedFields.subsetOf(
            this.leftGroup.relational.outputFields
          ) &&
          this.constraint.right.referencedFields.subsetOf(
            this.rightGroup.relational.outputFields
          )
        )
          return yield* this.evaluateScalarEquals(
            t,
            n,
            this.constraint.left,
            this.constraint.right,
            e
          );
        if (
          this.constraint.right.referencedFields.subsetOf(
            this.leftGroup.relational.outputFields
          ) &&
          this.constraint.left.referencedFields.subsetOf(
            this.rightGroup.relational.outputFields
          )
        )
          return yield* this.evaluateScalarEquals(
            t,
            n,
            this.constraint.right,
            this.constraint.left,
            e
          );
      }
      let r = this.getOutputFields(),
        i = new Tn(r);
      for (let o of n.tuples) {
        let s = !1;
        for (let a of t.tuples) {
          let l = new ur();
          l.merge(o), l.merge(a);
          let c = yield* this.constraint.evaluate(e, l);
          Vr(c) && (i.push(l), (s = !0));
        }
        s || i.push(o);
      }
      return i;
    }
  },
  hu = class extends En {
    constructor(e) {
      super(!1), (this.collection = e);
    }
    getHash() {
      return oe("RelationalScan", this.collection.id);
    }
    getOutputFields() {
      return this.collection.fields;
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields(e) {
      return e.subsetOf(this.collection.fields);
    }
    optimize() {
      return ie.estimate(1, 200 * cu);
    }
    getOptimized() {
      return new hu(this.collection);
    }
    *evaluate() {
      let e = this.collection,
        t = this.getOutputFields(),
        r = (yield e.data.scanItems()).map((i) => {
          let o = new ur();
          for (let s of t) {
            let a = s.getValue(i);
            o.addPointer(e, i.pointer), o.addValue(s, a);
          }
          return o;
        });
      return new Tn(t, r);
    }
  },
  UC = class extends En {
    constructor(e, t) {
      super(e.isSynchronous && t.isSynchronous),
        (this.left = e),
        (this.right = t),
        E(this, "leftGroup", this.left.getGroup()),
        E(this, "rightGroup", this.right.getGroup());
    }
    getHash() {
      return oe("RelationalUnion", this.leftGroup.id, this.rightGroup.id);
    }
    getOutputFields() {
      let e = new W(),
        t = this.leftGroup.relational.outputFields,
        n = this.rightGroup.relational.outputFields;
      for (let r of t) n.has(r) && e.add(r);
      return e;
    }
    canProvideOrdering() {
      return !1;
    }
    canProvideResolvedFields() {
      return !0;
    }
    getChildRequiredProps(e) {
      let t = new ar();
      return new un(t, e.resolvedFields);
    }
    optimize(e, t) {
      let n = this.getChildRequiredProps(t),
        r = e.optimizeGroup(this.leftGroup, n),
        i = this.getChildRequiredProps(t),
        o = e.optimizeGroup(this.rightGroup, i);
      return ie.max(r, o);
    }
    getOptimized(e) {
      let t = this.getChildRequiredProps(e),
        n = this.leftGroup.getOptimized(t),
        r = this.getChildRequiredProps(e),
        i = this.rightGroup.getOptimized(r);
      return new UC(n, i);
    }
    *evaluate(e) {
      let { left: t, right: n } = yield* We({
        left: this.left.evaluate(e),
        right: this.right.evaluate(e),
      });
      return t.union(n);
    }
  },
  pu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarAnd", this.left, this.right);
    }
    toString() {
      return `${this.left} && ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new pu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: Vr(n) && Vr(r) };
    }
  },
  zn = class extends Ye {
    constructor(e, t) {
      let n = new W(),
        r = new W();
      super(n, r, !0), (this.definition = e), (this.value = t);
    }
    getHash() {
      return oe("ScalarConstant", this.definition, this.value);
    }
    toString() {
      return _e.stringify(this.value);
    }
    optimize() {
      return new ie(0);
    }
    getOptimized() {
      return this;
    }
    *evaluate() {
      return this.value;
    }
  },
  a4 = { type: 0 },
  og = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarContains", this.source, this.target);
    }
    toString() {
      return `CONTAINS(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new og(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* We({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "boolean", value: _e.contains(n, r, a4) };
    }
  },
  l4 = { type: 0 },
  sg = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarEndsWith", this.source, this.target);
    }
    toString() {
      return `ENDS_WITH(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new sg(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* We({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "boolean", value: _e.endsWith(n, r, l4) };
    }
  },
  mu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarGreaterThan", this.left, this.right);
    }
    toString() {
      return `${this.left} > ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new mu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: _e.greaterThan(n, r, Jo) };
    }
  },
  gu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarGreaterThanOrEqual", this.left, this.right);
    }
    toString() {
      return `${this.left} >= ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new gu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: _e.greaterThanOrEqual(n, r, Jo) };
    }
  },
  vu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarLessThan", this.left, this.right);
    }
    toString() {
      return `${this.left} < ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new vu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: _e.lessThan(n, r, Jo) };
    }
  },
  yu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarLessThanOrEqual", this.left, this.right);
    }
    toString() {
      return `${this.left} <= ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new yu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: _e.lessThanOrEqual(n, r, Jo) };
    }
  },
  bu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarNotEquals", this.left, this.right);
    }
    toString() {
      return `${this.left} != ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new bu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: !_e.equal(n, r, Jo) };
    }
  },
  xu = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarOr", this.left, this.right);
    }
    toString() {
      return `${this.left} || ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new xu(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: Vr(n) || Vr(r) };
    }
  },
  c4 = { type: 0 },
  ag = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarStartsWith", this.source, this.target);
    }
    toString() {
      return `STARTS_WITH(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new ag(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* We({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "boolean", value: _e.startsWith(n, r, c4) };
    }
  },
  u4 = class {
    constructor(e) {
      (this.normalizer = e), E(this, "memo", this.normalizer.memo);
    }
    explore(e) {
      let t = e.getGroup();
      if (e instanceof du) {
        let n = new ig(e.right, e.left, e.constraint);
        this.memo.addRelational(n, t);
      }
      if (e instanceof fu) {
        if (e.predicate instanceof pu) {
          let n = this.normalizer.newRelationalFilter(
              e.input,
              e.predicate.left
            ),
            r = this.normalizer.newRelationalFilter(e.input, e.predicate.right),
            i = new WC(n, r);
          this.memo.addRelational(i, t);
        }
        if (e.predicate instanceof xu) {
          let n = this.normalizer.newRelationalFilter(
              e.input,
              e.predicate.left
            ),
            r = this.normalizer.newRelationalFilter(e.input, e.predicate.right),
            i = new UC(n, r);
          this.memo.addRelational(i, t);
        }
      }
      if (e instanceof hu)
        for (let n of e.collection.indexes) {
          if (n.constraint) continue;
          let r = or(n.lookupNodes.length),
            i = new Cn(n, r);
          this.memo.addRelational(i, t);
        }
      if (e instanceof fu) {
        for (let n of e.inputGroup.nodes)
          if (n instanceof hu)
            for (let r of n.collection.indexes) {
              if (
                e.predicate instanceof Yo &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof zn &&
                r.data.supportedLookupTypes.includes("Equals")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = { type: "Equals", value: e.predicate.right.value };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof bu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof zn &&
                r.data.supportedLookupTypes.includes("NotEquals")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = { type: "NotEquals", value: e.predicate.right.value };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof vu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof zn &&
                r.data.supportedLookupTypes.includes("LessThan")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = {
                  type: "LessThan",
                  value: e.predicate.right.value,
                  inclusive: !1,
                };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof yu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof zn &&
                r.data.supportedLookupTypes.includes("LessThan")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = {
                  type: "LessThan",
                  value: e.predicate.right.value,
                  inclusive: !0,
                };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof mu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof zn &&
                r.data.supportedLookupTypes.includes("GreaterThan")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = {
                  type: "GreaterThan",
                  value: e.predicate.right.value,
                  inclusive: !1,
                };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof gu &&
                e.predicate.left === r.lookupNodes[0] &&
                e.predicate.right instanceof zn &&
                r.data.supportedLookupTypes.includes("GreaterThan")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = {
                  type: "GreaterThan",
                  value: e.predicate.right.value,
                  inclusive: !0,
                };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof og &&
                e.predicate.source === r.lookupNodes[0] &&
                e.predicate.target instanceof zn &&
                r.data.supportedLookupTypes.includes("Contains")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = { type: "Contains", value: e.predicate.target.value };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof ag &&
                e.predicate.source === r.lookupNodes[0] &&
                e.predicate.target instanceof zn &&
                r.data.supportedLookupTypes.includes("StartsWith")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = { type: "StartsWith", value: e.predicate.target.value };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
              if (
                e.predicate instanceof sg &&
                e.predicate.source === r.lookupNodes[0] &&
                e.predicate.target instanceof zn &&
                r.data.supportedLookupTypes.includes("EndsWith")
              ) {
                let i = or(r.lookupNodes.length);
                i[0] = { type: "EndsWith", value: e.predicate.target.value };
                let o = new Cn(r, i);
                this.memo.addRelational(o, t);
              }
            }
      }
    }
  };
function or(e) {
  let t = { type: "All" };
  return new Array(e).fill(t);
}
var f4 = class {
    constructor(e) {
      this.outputFields = e;
    }
    isCompatible(e) {
      return this.outputFields.equals(e.outputFields);
    }
  },
  d4 = class {
    constructor() {
      E(this, "nodes", new Map()), E(this, "groups", []);
    }
    addGroup(e) {
      let t = this.groups.length,
        n = new DC(t, e);
      return this.groups.push(n), n;
    }
    addRelational(e, t) {
      let n = e.getHash(),
        r = this.nodes.get(n);
      if (r) return r;
      this.nodes.set(n, e);
      let i = e.getOutputFields(),
        o = new f4(i);
      return (
        t ?? (t = this.addGroup(o)),
        t.addNode(e),
        D(
          o.isCompatible(t.relational),
          "Group has inconsistent relational props"
        ),
        e
      );
    }
    addScalar(e) {
      let t = e.getHash(),
        n = this.nodes.get(t);
      return n || (this.nodes.set(t, e), e);
    }
  },
  GC = class extends En {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous),
        (this.input = e),
        (this.limit = t),
        (this.ordering = n),
        E(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("RelationalLimit", this.inputGroup.id, this.limit);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e) {
      return e.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new W(e.resolvedFields);
      return t.merge(this.limit.referencedFields), new un(this.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = this.limit.optimize(e);
      return new ie(0).add(ie.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.limit.getOptimized();
      return new GC(n, r, this.ordering);
    }
    *evaluate(e) {
      let { input: t, limit: n } = yield* We({
          input: this.input.evaluate(e),
          limit: this.limit.evaluate(e, void 0),
        }),
        r = VC(n) ?? 1 / 0;
      return r === 1 / 0 ? t : t.slice(0, r);
    }
  },
  qC = class extends En {
    constructor(e, t, n) {
      super(e.isSynchronous && t.isSynchronous),
        (this.input = e),
        (this.offset = t),
        (this.ordering = n),
        E(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("RelationalOffset", this.inputGroup.id, this.offset);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e) {
      return e.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new W(e.resolvedFields);
      return t.merge(this.offset.referencedFields), new un(this.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n),
        i = this.offset.optimize(e);
      return new ie(0).add(ie.max(r, i));
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t),
        r = this.offset.getOptimized();
      return new qC(n, r, this.ordering);
    }
    *evaluate(e) {
      let { input: t, offset: n } = yield* We({
          input: this.input.evaluate(e),
          offset: this.offset.evaluate(e, void 0),
        }),
        r = VC(n) ?? 0;
      return r === 0 ? t : t.slice(r);
    }
  },
  XC = class extends Ye {
    constructor(e, t, n, r, i) {
      super(r, i, e.isSynchronous),
        (this.input = e),
        (this.namedFields = t),
        (this.ordering = n),
        (this.referencedFields = r),
        (this.referencedOuterFields = i),
        E(this, "inputGroup", this.input.getGroup()),
        E(this, "definition");
      let o = {},
        s = Object.entries(t);
      for (let [a, l] of s) o[a] = l.definition;
      this.definition = {
        type: "array",
        isNullable: !1,
        definition: { type: "object", isNullable: !1, definitions: o },
      };
    }
    getHash() {
      let e = {},
        t = Object.entries(this.namedFields);
      for (let [n, r] of t) e[n] = r.id;
      return oe(
        "ScalarArray",
        this.inputGroup.id,
        e,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    toString() {
      return `ARRAY(${this.inputGroup.id})`;
    }
    getInputRequiredProps() {
      let e = new W(),
        t = Object.values(this.namedFields);
      for (let n of t) Xe(n.collection) || e.add(n);
      return new un(this.ordering, e);
    }
    optimize(e) {
      let t = this.getInputRequiredProps(),
        n = e.optimizeGroup(this.inputGroup, t);
      return new ie(0).add(n);
    }
    getOptimized() {
      let e = this.getInputRequiredProps(),
        t = this.inputGroup.getOptimized(e);
      return new XC(
        t,
        this.namedFields,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    *evaluate(e, t) {
      let n = new ur();
      e && n.merge(e), t && n.merge(t);
      let r = yield* this.input.evaluate(n),
        i = Object.entries(this.namedFields);
      return {
        type: "array",
        value: r.tuples.map((o) => {
          let s = {};
          for (let [a, l] of i) s[a] = o.getValue(l);
          return { type: "object", value: s };
        }),
      };
    }
  },
  YC = class extends Ye {
    constructor(e, t) {
      super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
        (this.input = e),
        (this.definition = t),
        D(t.isNullable, "Unsupported non-nullable cast");
    }
    getHash() {
      return oe("ScalarCast", this.input, this.definition);
    }
    toString() {
      return `CAST(${this.input} AS ${this.definition.type.toUpperCase()})`;
    }
    optimize(e) {
      return this.input.optimize(e);
    }
    getOptimized() {
      let e = this.input.getOptimized();
      return new YC(e, this.definition);
    }
    *evaluate(e, t) {
      let n = yield* this.input.evaluate(e, t);
      return _e.cast(n, this.definition);
    }
  },
  KC = class extends Ye {
    constructor(e, t, n, r, i) {
      super(r, i, e.isSynchronous),
        (this.input = e),
        (this.field = t),
        (this.ordering = n),
        (this.referencedFields = r),
        (this.referencedOuterFields = i),
        E(this, "inputGroup", this.input.getGroup()),
        E(this, "definition"),
        (this.definition = {
          type: "array",
          isNullable: !1,
          definition: this.field.definition,
        });
    }
    getHash() {
      return oe(
        "ScalarFlatArray",
        this.inputGroup.id,
        this.field.id,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    toString() {
      return `FLAT_ARRAY(${this.inputGroup.id})`;
    }
    getInputRequiredProps() {
      let e = new W();
      return (
        Xe(this.field.collection) || e.add(this.field), new un(this.ordering, e)
      );
    }
    optimize(e) {
      let t = this.getInputRequiredProps(),
        n = e.optimizeGroup(this.inputGroup, t);
      return new ie(0).add(n);
    }
    getOptimized() {
      let e = this.getInputRequiredProps(),
        t = this.inputGroup.getOptimized(e);
      return new KC(
        t,
        this.field,
        this.ordering,
        this.referencedFields,
        this.referencedOuterFields
      );
    }
    *evaluate(e, t) {
      let n = new ur();
      return (
        e && n.merge(e),
        t && n.merge(t),
        {
          type: "array",
          value: (yield* this.input.evaluate(n)).tuples.map((i) =>
            i.getValue(this.field)
          ),
        }
      );
    }
  },
  h4 = { type: 0 },
  QC = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarIn", this.left, this.right);
    }
    toString() {
      return `${this.left} IN ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new QC(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: _e.in(n, r, h4) };
    }
  },
  p4 = { type: 1 },
  ZC = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.source = e),
        (this.target = t),
        E(this, "definition", { type: "number", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarIndexOf", this.source, this.target);
    }
    toString() {
      return `INDEX_OF(${this.source}, ${this.target})`;
    }
    optimize(e) {
      let t = this.source.optimize(e),
        n = this.target.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.source.getOptimized(),
        t = this.target.getOptimized();
      return new ZC(e, t);
    }
    *evaluate(e, t) {
      let { source: n, target: r } = yield* We({
        source: this.source.evaluate(e, t),
        target: this.target.evaluate(e, t),
      });
      return { type: "number", value: _e.indexOf(n, r, p4) };
    }
  },
  JC = class extends Ye {
    constructor(e) {
      super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
        (this.input = e),
        E(this, "definition", { type: "number", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarLength", this.input);
    }
    toString() {
      return `LENGTH(${this.input})`;
    }
    optimize(e) {
      return this.input.optimize(e);
    }
    getOptimized() {
      let e = this.input.getOptimized();
      return new JC(e);
    }
    *evaluate(e, t) {
      let n = yield* this.input.evaluate(e, t);
      return { type: "number", value: _e.length(n) };
    }
  },
  xm = class extends Ye {
    constructor(e) {
      super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
        (this.input = e),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarNot", this.input);
    }
    toString() {
      return `NOT ${this.input}`;
    }
    optimize(e) {
      return this.input.optimize(e);
    }
    getOptimized() {
      let e = this.input.getOptimized();
      return new xm(e);
    }
    *evaluate(e, t) {
      let n = yield* this.input.evaluate(e, t);
      return { type: "boolean", value: !Vr(n) };
    }
  },
  m4 = { type: 0 },
  eT = class extends Ye {
    constructor(e, t) {
      let n = new W();
      n.merge(e.referencedFields), n.merge(t.referencedFields);
      let r = new W();
      r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields);
      let i = e.isSynchronous && t.isSynchronous;
      super(n, r, i),
        (this.left = e),
        (this.right = t),
        E(this, "definition", { type: "boolean", isNullable: !1 });
    }
    getHash() {
      return oe("ScalarNotIn", this.left, this.right);
    }
    toString() {
      return `${this.left} NOT IN ${this.right}`;
    }
    optimize(e) {
      let t = this.left.optimize(e),
        n = this.right.optimize(e);
      return ie.max(t, n);
    }
    getOptimized() {
      let e = this.left.getOptimized(),
        t = this.right.getOptimized();
      return new eT(e, t);
    }
    *evaluate(e, t) {
      let { left: n, right: r } = yield* We({
        left: this.left.evaluate(e, t),
        right: this.right.evaluate(e, t),
      });
      return { type: "boolean", value: !_e.in(n, r, m4) };
    }
  },
  ln = class extends Ye {
    constructor(e, t) {
      D(e.name !== Xo, "Invalid field name");
      let n = new W(),
        r = new W();
      t ? r.add(e) : n.add(e),
        super(n, r, !0),
        (this.field = e),
        (this.isOuterField = t),
        E(this, "definition", this.field.definition);
    }
    getHash() {
      return oe("ScalarVariable", this.field.id, this.isOuterField);
    }
    toString() {
      return `"${this.field.name}" /* ${this.field.id} */`;
    }
    optimize() {
      return new ie(0);
    }
    getOptimized() {
      return this;
    }
    *evaluate(e, t) {
      return this.isOuterField
        ? (D(e, "Context must exist"), e.getValue(this.field))
        : (D(t, "Tuple must exist"), t.getValue(this.field));
    }
  },
  g4 = class {
    constructor(e) {
      this.memo = e;
    }
    finishRelational(e) {
      return this.memo.addRelational(e);
    }
    newRelationalScan(e) {
      let t = new hu(e);
      return this.finishRelational(t);
    }
    newRelationalIndexLookup(e, t) {
      let n = new Cn(e, t);
      return this.finishRelational(n);
    }
    newRelationalLeftJoin(e, t, n) {
      let r = new du(e, t, n);
      return this.finishRelational(r);
    }
    newRelationalRightJoin(e, t, n) {
      return this.newRelationalLeftJoin(t, e, n);
    }
    newRelationalFilter(e, t) {
      if (
        e instanceof du &&
        t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)
      ) {
        let r = this.newRelationalFilter(e.left, t);
        return this.newRelationalLeftJoin(r, e.right, e.constraint);
      }
      if (
        e instanceof ig &&
        t.referencedFields.subsetOf(e.rightGroup.relational.outputFields)
      ) {
        let r = this.newRelationalFilter(e.right, t);
        return this.newRelationalLeftJoin(e.left, r, e.constraint);
      }
      let n = new fu(e, t);
      return this.finishRelational(n);
    }
    newRelationalProject(e, t, n) {
      let r = new bm(e, t, n);
      return this.finishRelational(r);
    }
    newRelationalLimit(e, t, n) {
      if (
        e instanceof bm &&
        t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
        n.providedByFields(e.inputGroup.relational.outputFields)
      ) {
        let i = this.newRelationalLimit(e.input, t, n);
        return this.newRelationalProject(i, e.projections, e.passthrough);
      }
      let r = new GC(e, t, n);
      return this.finishRelational(r);
    }
    newRelationalOffset(e, t, n) {
      let r = new qC(e, t, n);
      return this.finishRelational(r);
    }
    finishScalar(e) {
      if (
        !(e instanceof zn) &&
        e.isSynchronous &&
        e.referencedFields.size === 0 &&
        e.referencedOuterFields.size === 0
      ) {
        let n = e.evaluateSync();
        return this.newScalarConstant(e.definition, n);
      }
      return this.memo.addScalar(e);
    }
    removeUnknown(e, t) {
      if (e.definition.type !== "unknown" || t.type === "unknown") return e;
      let n = { ...t, isNullable: !0 };
      return this.newScalarCast(e, n);
    }
    newScalarVariable(e, t) {
      let n = new ln(e, t);
      return this.finishScalar(n);
    }
    newScalarConstant(e, t) {
      let n = new zn(e, t);
      return this.finishScalar(n);
    }
    newScalarNot(e) {
      if (e instanceof xm) {
        if (e.input.definition.type === "boolean") return e.input;
        let n = { type: "boolean", isNullable: !0 };
        return this.newScalarCast(e.input, n);
      }
      if (e instanceof Yo) return this.newScalarNotEquals(e.left, e.right);
      if (e instanceof bu) return this.newScalarEquals(e.left, e.right);
      if (e instanceof vu)
        return this.newScalarGreaterThanOrEqual(e.left, e.right);
      if (e instanceof yu) return this.newScalarGreaterThan(e.left, e.right);
      if (e instanceof mu)
        return this.newScalarLessThanOrEqual(e.left, e.right);
      if (e instanceof gu) return this.newScalarLessThan(e.left, e.right);
      if (e instanceof pu) {
        let n = this.newScalarNot(e.left),
          r = this.newScalarNot(e.right);
        return this.newScalarOr(n, r);
      }
      if (e instanceof xu) {
        let n = this.newScalarNot(e.left),
          r = this.newScalarNot(e.right);
        return this.newScalarAnd(n, r);
      }
      let t = new xm(e);
      return this.finishScalar(t);
    }
    newScalarAnd(e, t) {
      let n = new pu(e, t);
      return this.finishScalar(n);
    }
    newScalarOr(e, t) {
      let n = new xu(e, t);
      return this.finishScalar(n);
    }
    newScalarEquals(e, t) {
      let n = e instanceof ln;
      if (t instanceof ln && !n) return this.newScalarEquals(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new Yo(e, t);
      return this.finishScalar(i);
    }
    newScalarNotEquals(e, t) {
      let n = e instanceof ln;
      if (t instanceof ln && !n) return this.newScalarNotEquals(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new bu(e, t);
      return this.finishScalar(i);
    }
    newScalarLessThan(e, t) {
      let n = e instanceof ln;
      if (t instanceof ln && !n) return this.newScalarGreaterThan(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new vu(e, t);
      return this.finishScalar(i);
    }
    newScalarLessThanOrEqual(e, t) {
      let n = e instanceof ln;
      if (t instanceof ln && !n) return this.newScalarGreaterThanOrEqual(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new yu(e, t);
      return this.finishScalar(i);
    }
    newScalarGreaterThan(e, t) {
      let n = e instanceof ln;
      if (t instanceof ln && !n) return this.newScalarLessThan(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new mu(e, t);
      return this.finishScalar(i);
    }
    newScalarGreaterThanOrEqual(e, t) {
      let n = e instanceof ln;
      if (t instanceof ln && !n) return this.newScalarLessThanOrEqual(t, e);
      (e = this.removeUnknown(e, t.definition)),
        (t = this.removeUnknown(t, e.definition));
      let i = new gu(e, t);
      return this.finishScalar(i);
    }
    newScalarIn(e, t) {
      t.definition.type === "array" &&
        (e = this.removeUnknown(e, t.definition.definition));
      let n = { type: "array", isNullable: !0, definition: e.definition };
      t = this.removeUnknown(t, n);
      let r = new QC(e, t);
      return this.finishScalar(r);
    }
    newScalarNotIn(e, t) {
      t.definition.type === "array" &&
        (e = this.removeUnknown(e, t.definition.definition));
      let n = { type: "array", isNullable: !0, definition: e.definition };
      t = this.removeUnknown(t, n);
      let r = new eT(e, t);
      return this.finishScalar(r);
    }
    newScalarCase(e, t, n) {
      if (e) {
        let i = [];
        for (let { when: o, then: s } of t) {
          let a = this.removeUnknown(o, e.definition),
            l = new rg(a, s);
          i.push(l);
        }
        t = i;
      }
      let r = new HC(e, t, n);
      return this.finishScalar(r);
    }
    newScalarContains(e, t) {
      let n = new og(e, t);
      return this.finishScalar(n);
    }
    newScalarStartsWith(e, t) {
      let n = new ag(e, t);
      return this.finishScalar(n);
    }
    newScalarEndsWith(e, t) {
      let n = new sg(e, t);
      return this.finishScalar(n);
    }
    newScalarLength(e) {
      let t = new JC(e);
      return this.finishScalar(t);
    }
    newScalarIndexOf(e, t) {
      let n = new ZC(e, t);
      return this.finishScalar(n);
    }
    newScalarArray(e, t, n, r, i) {
      let o = new XC(e, t, n, r, i);
      return this.finishScalar(o);
    }
    newScalarFlatArray(e, t, n, r, i) {
      let o = new KC(e, t, n, r, i);
      return this.finishScalar(o);
    }
    newScalarCast(e, t) {
      if (e.definition.type === t.type) return e;
      let n = new YC(e, t);
      return this.finishScalar(n);
    }
  },
  tT = class extends En {},
  nT = class extends tT {
    constructor(e, t) {
      super(!1),
        (this.input = e),
        (this.fields = t),
        E(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("EnforcerResolve", this.inputGroup.id, this.fields);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering() {
      return !0;
    }
    canProvideResolvedFields(e) {
      return e.subsetOf(this.fields);
    }
    getInputRequiredProps(e) {
      let t = new W();
      return new un(e.ordering, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n);
      return ie.estimate(0, 100 * cu).add(r);
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t);
      return new nT(n, this.fields);
    }
    *evaluate(e) {
      let t = yield* this.input.evaluate(e);
      D(this.fields.subsetOf(t.fields), "Fields can't be resolved");
      let n = new Set();
      for (let i of this.fields)
        D(i.collection, "Collection required to resolve field"),
          n.add(i.collection);
      for (let i of t.tuples)
        for (let o of this.fields) {
          let s = i.getValue(o);
          s?.type === "richtext" &&
            (D(s.value instanceof ng, "Pointer must be wrapped"),
            s.value.resolve());
        }
      let r = yield Promise.all(
        Array.from(n).map(async (i) => {
          let o = [];
          for (let a of t.tuples) {
            let l = a.getPointer(i);
            l && o.push(l);
          }
          let s = await i.data.resolveItems(o);
          return D(s.length === o.length, "Invalid number of items"), [i, s];
        })
      );
      return t.map(t.fields, (i) => {
        let o = new ur();
        o.merge(i);
        for (let [s, a] of r) {
          let l = i.getPointer(s);
          if (!l) continue;
          let c = a.shift();
          D(c, "Item not found"), D(c.pointer === l, "Pointer mismatch");
          for (let u of s.fields) {
            let f = u.getValue(c);
            o.addValue(u, f);
          }
        }
        return o;
      });
    }
  },
  em = { type: 0 },
  rT = class extends tT {
    constructor(e, t) {
      super(e.isSynchronous),
        (this.input = e),
        (this.ordering = t),
        E(this, "inputGroup", this.input.getGroup());
    }
    getHash() {
      return oe("EnforcerSort", this.inputGroup.id, this.ordering);
    }
    getOutputFields() {
      return this.inputGroup.relational.outputFields;
    }
    canProvideOrdering(e) {
      return e.equals(this.ordering);
    }
    canProvideResolvedFields() {
      return !0;
    }
    getInputRequiredProps(e) {
      let t = new W(e.resolvedFields);
      for (let { field: r } of this.ordering.fields)
        r.name !== Xo && (Xe(r.collection) || t.add(r));
      let n = new ar();
      return new un(n, t);
    }
    optimize(e, t) {
      let n = this.getInputRequiredProps(t),
        r = e.optimizeGroup(this.inputGroup, n);
      return new ie(0).add(r);
    }
    getOptimized(e) {
      let t = this.getInputRequiredProps(e),
        n = this.inputGroup.getOptimized(t);
      return new rT(n, this.ordering);
    }
    *evaluate(e) {
      return (yield* this.input.evaluate(e)).sort((n, r) => {
        for (let { field: i, direction: o } of this.ordering.fields) {
          let s = o === "asc";
          if (i.name === Xo) {
            let c = i.collection;
            D(c, "Collection required for sorting");
            let u = n.getPointer(c);
            D(u, "Pointer required for sorting");
            let f = { pointer: u, data: {} },
              d = r.getPointer(c);
            D(d, "Pointer required for sorting");
            let p = { pointer: d, data: {} },
              y = c.data.compareItems(f, p);
            return s ? y : -y;
          }
          let a = n.getValue(i),
            l = r.getValue(i);
          if (!_e.equal(a, l, em)) {
            if (sr(a) || _e.lessThan(a, l, em)) return s ? -1 : 1;
            if (sr(l) || _e.greaterThan(a, l, em)) return s ? 1 : -1;
            throw new Error("Invalid comparison");
          }
        }
        return 0;
      });
    }
  };
var v4 = class {
  constructor(e, t) {
    (this.query = e),
      (this.locale = t),
      E(this, "memo", new d4()),
      E(this, "normalizer", new g4(this.memo)),
      E(this, "explorer", new u4(this.normalizer));
  }
  optimize() {
    let t = new o4(this.normalizer, this.query, this.locale).build(),
      r = t.takeNode().getGroup(),
      i = t.getRequiredProps();
    this.optimizeGroup(r, i);
    let o = r.getOptimized(i),
      s = t.getNamedFields();
    return [o, s];
  }
  optimizeGroup(e, t) {
    let n = e.getWinner(t);
    if (n.node) return n.cost;
    let r = e.nodes[0];
    D(r, "Normalized node not found"), this.createEnforcer(n, r, t);
    for (let i of e.nodes) {
      if (t.canProvide(i)) {
        let o = i.optimize(this, t);
        n.update(i, o);
      }
      t.isMinimal && this.explorer.explore(i);
    }
    return n.cost;
  }
  createEnforcer(e, t, n) {
    if (n.resolvedFields.size > 0) {
      let r = new nT(t, n.resolvedFields),
        i = r.optimize(this, n);
      e.update(r, i);
    }
    if (n.ordering.length > 0) {
      let r = new rT(t, n.ordering),
        i = r.optimize(this, n);
      e.update(r, i);
    }
  }
};
function y4(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function b4(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function x4(e) {
  return `${e.functionName}(${e.arguments.map((t) => Bt(t)).join(", ")})`;
}
function w4(e) {
  let t = "CASE";
  e.value && (t += ` ${Bt(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Bt(n.when)} THEN ${Bt(n.then)}`;
  return e.else && (t += ` ELSE ${Bt(e.else)}`), (t += " END"), t;
}
function S4(e) {
  let t = Bt(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function k4(e) {
  let t = Bt(e.left),
    n = Bt(e.right),
    r = e.operator.toUpperCase();
  return `${t} ${r} ${n}`;
}
function C4(e) {
  return `CAST(${Bt(e.value)} as ${e.dataType})`;
}
function Bt(e) {
  switch (e.type) {
    case "Identifier":
      return y4(e);
    case "LiteralValue":
      return b4(e);
    case "FunctionCall":
      return x4(e);
    case "Case":
      return w4(e);
    case "UnaryOperation":
      return S4(e);
    case "BinaryOperation":
      return k4(e);
    case "TypeCast":
      return C4(e);
    case "Select":
      return `${iT(e)}`;
    default:
      Ce(e);
  }
}
function T4(e) {
  return IC(e.data)
    ? "Collection"
    : e.alias
    ? `"${e.data.displayName}" AS "${e.alias}"`
    : `"${e.data.displayName}"`;
}
function R4(e) {
  let t = `${wm(e.left)} LEFT JOIN ${wm(e.right)}`;
  return e.constraint && (t += ` ON ${Bt(e.constraint)}`), t;
}
function wm(e) {
  switch (e.type) {
    case "Collection":
      return T4(e);
    case "LeftJoin":
      return R4(e);
    default:
      Ce(e);
  }
}
function E4(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function iT(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = Bt(n);
        return n.alias ? `${r} AS "${n.alias}"` : r;
      })
      .join(", ")}`),
    (t += ` FROM ${wm(e.from)}`),
    e.where && (t += ` WHERE ${Bt(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${Bt(n)} ${n.direction ?? "asc"}`)
        .join(", ")}`),
    e.limit && (t += ` LIMIT ${Bt(e.limit)}`),
    e.offset && (t += ` OFFSET ${Bt(e.offset)}`),
    E4(t)
  );
}
var F4 = B5("query-engine"),
  U8 = class {
    async query(e, t) {
      F4.debug(`Query:
${iT(e)}`);
      let n = new v4(e, t),
        [r, i] = n.optimize(),
        o = await r.evaluateAsync(),
        s = Object.entries(i);
      return await Promise.all(
        o.tuples.map(async (l) => {
          let c = await Promise.all(
            s.map(async ([u, f]) => {
              let d = l.getValue(f),
                p = await this.resolveValue(d);
              return [u, p];
            })
          );
          return Object.fromEntries(c);
        })
      );
    }
    async resolveValue(e) {
      if (e?.type === "richtext")
        return (
          D(e.value instanceof ng, "Pointer must be wrapped"), e.value.resolve()
        );
      if (e?.type === "array")
        return Promise.all(e.value.map(async (t) => this.resolveValue(t)));
      if (e?.type === "object") {
        let t = Object.entries(e.value),
          n = await Promise.all(
            t.map(async ([r, i]) => {
              let o = await this.resolveValue(i);
              return [r, o];
            })
          );
        return Object.fromEntries(n);
      }
      return e?.value ?? null;
    }
  },
  Zc = "default",
  P4 = new Set([Zc]),
  Jc,
  _4 = class {
    constructor() {
      E(this, "entries", new Map()), Qt(this, Jc, {});
    }
    set(e, t, n, r) {
      switch (t) {
        case "transformTemplate": {
          D(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            this.setHash(e, r, { transformTemplate: n, legacy: !0 });
          break;
        }
        case "initial":
        case "animate": {
          D(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            this.setHash(e, r, { [t]: n, legacy: !0 });
          break;
        }
        default:
          break;
      }
    }
    setHash(e, t = Zc, n) {
      let r = this.entries.get(e) ?? {},
        i = r[t] ?? {};
      (r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r);
    }
    variantHash(e, t) {
      if (e === t?.primaryVariantId) return Zc;
      let n = de(this, Jc)[e];
      if (n) return n;
      let r = t?.variantClassNames[e];
      return r ? (de(this, Jc)[e] = _C(r)) : Zc;
    }
    setAll(e, t = P4, n, r) {
      var i;
      if (n === null) {
        for (let c of t) this.setHash(e, this.variantHash(c, r), null);
        return;
      }
      let o = $n(n.transformTemplate)
          ? (i = n.transformTemplate) == null
            ? void 0
            : i.call(n, {}, I4)
          : void 0,
        s = n.__framer__presenceInitial ?? n.initial,
        a = n.__framer__presenceAnimate ?? n.animate,
        l = {
          initial: be(s) ? s : void 0,
          animate: be(a) ? a : void 0,
          transformTemplate: ue(o) ? o : void 0,
        };
      for (let c of t) this.setHash(e, this.variantHash(c, r), l);
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  };
Jc = new WeakMap();
var O4 = new _4();
function X8(e) {
  return x.forwardRef(({ optimized: t, ...n }, r) => {
    let i = x.useContext(yC),
      o = x.useContext(tg),
      s = n[M4];
    return (
      s && !Lr() && O4.setAll(s, o, t ? n : null, i), C(e, { ref: r, ...n })
    );
  });
}
var I4 = "__Appear_Animation_Transform__";
var M4 = "data-framer-appear-id",
  Y8 = "data-framer-appear-animation";
function L4(e, t, n) {
  return x.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function V4(e) {
  for (let [t, n] of Object.entries(e)) if (st.matchMedia(n).matches) return t;
}
function A4(e) {
  var t;
  let n = [];
  for (let { hash: i, mediaQuery: o } of e) {
    if (!o) continue;
    st.matchMedia(o).matches && n.push(i);
  }
  if (n.length > 0) return n;
  let r = (t = e[0]) == null ? void 0 : t.hash;
  if (r) return [r];
}
function J8(e, t, n = !0) {
  let r = A(aC),
    i = Zo(),
    o = !i && Lr(),
    s = V(o ? V4(t) ?? e : e),
    a = V(n && r ? e : s.current),
    l = Ou(),
    c = Q0(),
    u = G(
      (f) => {
        if (f !== s.current || f !== a.current) {
          let p = function () {
            (s.current = a.current = f),
              St(() => {
                l();
              });
          };
          var d = p;
          i
            ? p()
            : c(() => {
                p();
              });
        }
      },
      [c, l, i]
    );
  return (
    dm(() => {
      i && u(e);
    }, [i, e, u]),
    dm(() => {
      !n || r !== !0 || u(s.current);
    }, []),
    B(() => {
      let f = [];
      for (let [d, p] of Object.entries(t)) {
        let y = st.matchMedia(p),
          g = (b) => {
            b.matches && u(d);
          };
        D4(y, g), f.push([y, g]);
      }
      return () => f.forEach(([d, p]) => z4(d, p));
    }, [t, u]),
    [s.current, a.current]
  );
}
function D4(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function z4(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
var B4 = "style[data-framer-breakpoint-css]";
function $4(e) {
  setTimeout(e, 1);
}
function eW(e) {
  var t, n, r, i;
  let o = new Set(),
    s = A4(e);
  if (s)
    for (let l of s)
      for (let c of document.querySelectorAll(".hidden-" + l))
        A1(c.previousSibling) && o.add(c.previousSibling),
          (t = c.parentNode) == null || t.removeChild(c);
  (st.requestIdleCallback ?? $4)(() => {
    var l;
    (l = document.querySelector(B4)) == null || l.remove();
  });
  for (let l of document.querySelectorAll(".ssr-variant:empty"))
    A1(l.previousSibling) && o.add(l.previousSibling),
      (n = l.parentNode) == null || n.removeChild(l);
  for (let l of o)
    N4(l.nextSibling) &&
      ((r = l.parentNode) == null || r.removeChild(l.nextSibling),
      (i = l.parentNode) == null || i.removeChild(l));
}
function A1(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === "$";
}
function N4(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === "/$";
}
var j4 = "page";
function D1(e) {
  return be(e) && j4 in e && e.page !== void 0;
}
function z1(e, t) {
  return `${e}-${t}`;
}
function H4(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return D(i !== void 0, "nextVariant should be defined"), i;
}
function W4(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function B1(e, t, n, r, i) {
  let { hover: o, pressed: s, loading: a, error: l } = e || {};
  if (l && i) return "error";
  if (a && r) return "loading";
  if (s && n) return "pressed";
  if (o && t) return "hover";
}
function U4(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function $1(e, t, n) {
  return e && n.has(e) ? e : t;
}
var G4 = Symbol("cycle");
function dW({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = Ou(),
    l = Zo(),
    c = wt(() => new Set(i)),
    { wrapUpdatesInTransitions: u } = Ta(),
    f = x.useRef({
      isHovered: !1,
      isPressed: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: $1(e, t, c),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    d = x.useCallback(
      (O) => {
        let {
            isHovered: I,
            isPressed: N,
            isError: z,
            enabledGestures: j,
            defaultVariant: Y,
          } = f.current,
          H = $1(O, Y, c),
          le = B1(j?.[H], I, N, !1, z),
          ne = le ? z1(H, le) : void 0;
        return [H, ne];
      },
      [c]
    ),
    p = x.useCallback(
      ({ isHovered: O, isPressed: I, isError: N }) => {
        O !== void 0 && (f.current.isHovered = O),
          I !== void 0 && (f.current.isPressed = I),
          N !== void 0 && (f.current.isError = N);
        let {
            baseVariant: z,
            gestureVariant: j,
            defaultVariant: Y,
          } = f.current,
          [H, le] = d(z);
        (H !== z || le !== j) &&
          ((f.current.baseVariant = H || Y),
          (f.current.gestureVariant = le),
          N || u
            ? x.startTransition(() => {
                a();
              })
            : a());
      },
      [d, a, u]
    ),
    y = x.useCallback(
      (O) => {
        let {
            defaultVariant: I,
            cycleOrder: N,
            baseVariant: z,
            gestureVariant: j,
          } = f.current,
          Y = O === G4 ? H4(N || [], z || I) : O,
          [H, le] = d(Y);
        (H !== z || le !== j) &&
          ((f.current.isError = !1),
          (f.current.baseVariant = H || I),
          (f.current.gestureVariant = le),
          u
            ? x.startTransition(() => {
                a();
              })
            : a());
      },
      [d, u, a]
    ),
    g = x.useCallback(() => {
      let { baseVariant: O } = f.current;
      (f.current.loadedBaseVariant[O] = !0),
        x.startTransition(() => {
          a();
        });
    }, [a]);
  if (e !== f.current.lastVariant) {
    let [O, I] = d(e);
    (f.current.lastVariant = O),
      (O !== f.current.baseVariant || I !== f.current.gestureVariant) &&
        ((f.current.baseVariant = O), (f.current.gestureVariant = I));
  }
  let {
      baseVariant: b,
      gestureVariant: h,
      defaultVariant: m,
      enabledGestures: v,
      isHovered: S,
      isPressed: k,
      isError: w,
      loadedBaseVariant: T,
    } = f.current,
    R = L4(f.current.baseVariant, f.current.gestureVariant, o);
  return x.useMemo(() => {
    var O;
    let I = [];
    b !== m && I.push(b);
    let N = (O = v?.[b]) == null ? void 0 : O.loading,
      z = !w && !l && !!N && !T[b],
      j = z ? z1(b, "loading") : h;
    j && I.push(j);
    let Y = v?.[b],
      H = {
        onMouseEnter: () => p({ isHovered: !0 }),
        onMouseLeave: () => p({ isHovered: !1 }),
      };
    return (
      Y?.pressed &&
        Object.assign(H, {
          onTapStart: () => p({ isPressed: !0 }),
          onTapCancel: () => p({ isPressed: !1 }),
          onTap: () => p({ isPressed: !1 }),
        }),
      {
        variants: I,
        baseVariant: b,
        gestureVariant: j,
        isLoading: z,
        transition: W4(f.current.transitions, b),
        setVariant: y,
        setGestureState: p,
        clearLoadingGesture: g,
        addVariantProps: R,
        gestureHandlers: H,
        classNames: iu(U4(b, s), B1(Y, S, k, z, w)),
      }
    );
  }, [b, h, S, k, T, R, y, m, v, p, g, s]);
}
var q4 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  X4 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  N1 = q4;
function wu(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
var Y4 = "System Default",
  K4 = class {
    constructor() {
      E(this, "name", "local"),
        E(this, "fontFamilies", []),
        E(this, "byFamilyName", new Map()),
        E(this, "fontAliasBySelector", new Map()),
        E(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(N1)) {
        let i = N1[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(X4)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: Y4, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = Q4(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  j1 = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function Q4(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${j1[e]} ${n}` : `${j1[e]}`;
}
var Z4 = dr(Tm(), 1);
function oT(e) {
  return !!e.variationAxes;
}
function tm(e) {
  return oT(e) && e.family.source !== "custom"
    ? Sm(e.family.name)
    : e.family.name;
}
function Sm(e) {
  return `${e} Variable`;
}
var Wo = "CUSTOM;";
function J4(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let { font: n } = t,
    r = n.preferredFamily || n.fontFamily,
    i = Array.isArray(n.variationAxes);
  if (i && r.toLowerCase().includes("variable")) return r;
  let o = i ? "Variable" : n.preferredSubFamily || n.fontSubFamily;
  return `${r} ${o}`;
}
var eB = class {
  constructor() {
    E(this, "name", "custom"),
      E(this, "fontFamilies", []),
      E(this, "byFamilyName", new Map()),
      E(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    var t, n, r;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let i = [];
    for (let o of e) {
      if (!this.isValidCustomFontAsset(o)) continue;
      let s = (t = o.properties) == null ? void 0 : t.font.variationAxes,
        a = Array.isArray(s),
        l = J4(o.name, o.properties),
        c = this.createFontFamily(l),
        u = (n = o.properties) == null ? void 0 : n.font.openTypeData,
        f = a ? "variable" : this.inferVariantName(l),
        d = {
          family: c,
          selector: `${Wo}${l}`,
          variant: f,
          postscriptName:
            (r = o.properties) == null ? void 0 : r.font.postscriptName,
          file: o.url,
          hasOpenTypeFeatures: this.supportsOpenType(u),
          variationAxes: this.validateVariationAxes(s),
        };
      c.fonts.push(d),
        (c.owner = o.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(l, o),
        i.push(...c.fonts);
    }
    return i;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  supportsOpenType(e) {
    return !!(e && Array.isArray(e));
  }
  validateVariationAxes(e) {
    if (!e || !Array.isArray(e)) return;
    let t = [];
    for (let n of e)
      this.isVariationAxis(n) &&
        t.push({
          tag: n.tag,
          name: n.name,
          minValue: n.minValue,
          maxValue: n.maxValue,
          defaultValue: n.defaultValue,
        });
    return t;
  }
  getOpenTypeFeatures(e) {
    var t, n;
    let r = this.assetsByFamily.get(e),
      i =
        (n = (t = r?.properties) == null ? void 0 : t.font) == null
          ? void 0
          : n.openTypeData;
    return this.supportsOpenType(i)
      ? i?.map((o) => {
          if (this.isOpenTypeFeature(o))
            return { tag: o.tag, coverage: o.coverage };
        })
      : [];
  }
  isOpenTypeFeature(e) {
    return !(
      typeof e != "object" ||
      e === null ||
      !("tag" in e) ||
      typeof e.tag != "string" ||
      ("coverage" in e && typeof e.coverage < "u" && !Array.isArray(e.coverage))
    );
  }
  isVariationAxis(e) {
    return !(
      typeof e != "object" ||
      e === null ||
      !("tag" in e) ||
      typeof e.tag != "string" ||
      !("name" in e) ||
      typeof e.name != "string" ||
      !("minValue" in e) ||
      typeof e.minValue != "number" ||
      !("maxValue" in e) ||
      typeof e.maxValue != "number" ||
      !("defaultValue" in e) ||
      typeof e.defaultValue != "number"
    );
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/gu, "")));
    return o ? o.replace(/^\w|\s\w/gu, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(Wo)) return null;
    let t = e.split(Wo);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${Wo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function sT(e, t) {
  return { ...tB(e, t), ...nB(e, t) };
}
function tB(e, t) {
  if (t.length === 0)
    return {
      variantBold: void 0,
      variantBoldItalic: void 0,
      variantItalic: void 0,
    };
  let { weight: n, style: r } = e,
    i = new Map(),
    o = new Map();
  for (let u of t)
    u.isVariable === e.isVariable &&
      (i.set(`${u.weight}-${u.style}`, u),
      !(u.weight <= n) && (o.has(u.style) || o.set(u.style, u)));
  let s = o.get(r),
    a = o.get("italic"),
    l = e.weight;
  l <= 300
    ? ((s = i.get(`400-${r}`) ?? s), (a = i.get("400-italic") ?? a))
    : l <= 500
    ? ((s = i.get(`700-${r}`) ?? s), (a = i.get("700-italic") ?? a))
    : ((s = i.get(`900-${r}`) ?? s), (a = i.get("900-italic") ?? a));
  let c = i.get(`${n}-italic`);
  return { variantBold: s, variantItalic: c, variantBoldItalic: a };
}
function nB(e, t) {
  if (t.length === 0)
    return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n = new Map();
  for (let r of t) r.isVariable && n.set(`${r.weight}-${r.style}`, r);
  return {
    variantVariable:
      n.get(`${e.weight}-normal`) ?? n.get("400-normal") ?? void 0,
    variantVariableItalic:
      n.get(`${e.weight}-italic`) ?? n.get("400-italic") ?? void 0,
  };
}
async function aT(e) {
  switch (e) {
    case "google": {
      let t = await import("./google-AYKKG2SQ-YSZHILXF.mjs");
      return t?.default;
    }
    case "fontshare": {
      let t = await import("./fontshare-26R7ZKFH-CFACY4KM.mjs");
      return t?.default;
    }
    default:
      throw new Error(`Unknown font source: ${e}`);
  }
}
async function lg(e) {
  switch (e) {
    case "google": {
      let t = await import("./google-SWLQ2TQI-OFTTZGHQ.mjs");
      return t?.default;
    }
    case "fontshare": {
      let t = await import("./fontshare-TJDTFQF5-FHUHZIID.mjs");
      return t?.default;
    }
    case "framer": {
      let t = await import("./framer-font-O4FG2JPU-OQGDZ5WL.mjs");
      return t?.default;
    }
    default:
      throw new Error(`Unknown font source: ${e}`);
  }
}
var rB = ["display", "sans", "serif", "slab", "handwritten", "script"];
function iB(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(oB);
}
function oB(e) {
  return rB.includes(e);
}
var xa = "FS;",
  lT = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  cT = Object.keys(lT),
  sB = (() =>
    new RegExp(`^(?:${[...cT, "italic", "variable"].join("|")})`, "u"))(),
  ji = class {
    constructor() {
      E(this, "name", "fontshare"),
        E(this, "fontFamilies", []),
        E(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.toLowerCase().split(" "),
        n = cT.find((s) => t.includes(s)),
        r = e.toLowerCase().includes("italic") ? "italic" : "normal";
      return {
        weight: (n && lT[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(xa)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : {
            name: n.replace(xa, ""),
            variant: r,
            source: this.name,
            isVariable: r.toLowerCase().includes("variable"),
          };
    }
    static createSelector(e, t) {
      return `${xa}${e}-${t.toLowerCase()}`;
    }
    static createMetadataSelector(e) {
      return `${xa}${e}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    async importFonts(e, t) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let n = await aT("fontshare"),
        r = [];
      for (let i of e) {
        let s = i.font_styles
            .filter((p) => {
              let y = p.name.toLowerCase();
              return !(!sB.exec(y) || y.split(" ").includes("wide"));
            })
            .map((p) => ({
              ...ji.parseVariant(p.name),
              selector: ji.createSelector(i.name, p.name),
              isVariable: p.is_variable,
              fontshareVariantName: p.name,
              file: p.file,
            })),
          a = ji.createMetadataSelector(i.name),
          l = t?.[a],
          c = i.name,
          u = this.getFontFamilyByName(c);
        u ||
          ((u = { name: c, fonts: [], source: this.name }),
          this.addFontFamily(u));
        let f = ji.createMetadataSelector(i.name),
          d = n[f];
        for (let p of s) {
          let {
              variantBold: y,
              variantBoldItalic: g,
              variantItalic: b,
              variantVariable: h,
              variantVariableItalic: m,
            } = sT(p, s),
            v = {
              family: u,
              variant: p.fontshareVariantName.toLowerCase(),
              selector: p.selector,
              selectorBold: y?.selector,
              selectorBoldItalic: g?.selector,
              selectorItalic: b?.selector,
              selectorVariable: h?.selector,
              selectorVariableItalic: m?.selector,
              weight: p.weight,
              style: p.style,
              file: p.file,
              category: aB(i.category),
              hasOpenTypeFeatures: d,
              variationAxes: p.isVariable ? l : void 0,
            };
          u.fonts.push(v), r.push(v);
        }
      }
      return r;
    }
    async getOpenTypeFeatures(e) {
      let t = await lg("fontshare"),
        n = ji.createMetadataSelector(e);
      return t[n];
    }
  };
function aB(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = iB(e)[0];
  return n && t[n];
}
var lB = "Inter",
  H1 = "FR;",
  cB = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  Su = class {
    constructor() {
      E(this, "name", "framer"),
        E(this, "fontFamilies", []),
        E(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(H1) && !e.startsWith(lB)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && cB[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    static createMetadataSelector(e) {
      return `${H1}${e}`;
    }
    importFonts(e, t) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let n = [];
      return (
        e.forEach((r) => {
          let { familyName: i, ...o } = r,
            s = Su.createMetadataSelector(r.familyName),
            a = t?.[s],
            l = this.getFontFamilyByName(i);
          l || (l = this.addFontFamily(i));
          let c =
              r.selector === r.selectorVariable ||
              r.selector === r.selectorVariableItalic,
            u = { ...o, family: l, variationAxes: c ? a : void 0 };
          l.fonts.push(u), n.push(u);
        }),
        n
      );
    }
    async getOpenTypeFeatures(e) {
      let t = await lg("framer"),
        n = Su.createMetadataSelector(e);
      return t[n];
    }
  },
  wa = "GF;",
  _r = class {
    constructor() {
      E(this, "name", "google"),
        E(this, "fontFamilies", []),
        E(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/u.exec(e);
      if (!t) return {};
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(wa)) return null;
      let t = e.includes("-variable-"),
        n = t ? e.split("-variable-") : e.split("-");
      if (n.length !== 2) return null;
      let [r, i] = n;
      return !r || !i
        ? null
        : {
            name: r.replace(wa, ""),
            variant: i,
            source: this.name,
            isVariable: t,
          };
    }
    static createSelector(e, t, n) {
      return `${wa}${e}-${n ? "variable-" : ""}${t}`;
    }
    static createMetadataSelector(e) {
      return `${wa}${e}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    async importFonts(e, t, n) {
      var r;
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let i = await aT("google"),
        o = [],
        s = W1(e, (l) => l.family),
        a = W1(t, (l) => l.family);
      for (let l in s) {
        let c = s[l];
        if (!c) continue;
        let u = this.getFontFamilyByName(c.family);
        u || (u = this.addFontFamily(c.family));
        let d = c.variants.map((k) => ({
            ..._r.parseVariant(k),
            googleFontsVariantName: k,
            selector: _r.createSelector(l, k, !1),
            isVariable: !1,
            file: c.files[k],
          })),
          p = a[l],
          y = p?.axes
            ? p.variants.map((k) => ({
                ..._r.parseVariant(k),
                googleFontsVariantName: k,
                selector: _r.createSelector(l, k, !0),
                isVariable: !0,
                file: p.files[k],
              }))
            : [],
          g = _r.createMetadataSelector(c.family),
          b = n?.[g],
          h = [...d, ...y],
          m = h.filter(wu),
          v = _r.createMetadataSelector(l),
          S = i[v];
        for (let k of h) {
          let {
              weight: w,
              style: T,
              selector: R,
              googleFontsVariantName: O,
            } = k,
            I = wu(k) ? sT(k, m) : void 0,
            {
              variantBold: N,
              variantItalic: z,
              variantBoldItalic: j,
              variantVariable: Y,
              variantVariableItalic: H,
            } = I ?? {},
            le = {
              family: u,
              variant: O,
              selector: R,
              selectorBold: N?.selector,
              selectorBoldItalic: j?.selector,
              selectorItalic: z?.selector,
              selectorVariable: Y?.selector,
              selectorVariableItalic: H?.selector,
              weight: w,
              style: T,
              category: uB(c.category),
              file:
                (r = k.file) == null
                  ? void 0
                  : r.replace("http://", "https://"),
              variationAxes: k.isVariable ? b : void 0,
              hasOpenTypeFeatures: S,
            };
          u.fonts.push(le), o.push(le);
        }
      }
      return o;
    }
    async getOpenTypeFeatures(e) {
      let t = await lg("google"),
        n = _r.createMetadataSelector(e);
      return t[n];
    }
  };
function uB(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
function W1(e, t) {
  return e.reduce((n, r) => ((n[t(r)] = r), n), {});
}
var fB = dr(nM(), 1),
  U1 = 5e3,
  dB = 3,
  uT = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  nm = new Map(),
  rm = new Map(),
  G1 = (e, t) => fT(e, t);
async function fT(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s, isVariableFont: a } = e,
    l = a ? e.weight : e.weight || 500,
    c = e.style || "normal",
    u = `${r}-${c}-${l}-${i}`;
  if (!nm.has(u) || n > 0) {
    let f = new FontFace(r, `url(${i})`, {
        weight: ue(l) ? l : l?.toString(),
        style: c,
        stretch: o,
        unicodeRange: s,
      }),
      d = f
        .load()
        .then(() => (t.fonts.add(f), dT(r, c, l)))
        .catch((p) => {
          if (p.name !== "NetworkError") throw p;
          if (n < dB) return fT(e, t, n + 1);
          throw new uT(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: c,
                weight: l,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    nm.set(u, d);
  }
  await nm.get(u);
}
async function dT(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!rm.has(r)) {
    let o = new fB.default(e, { style: t, weight: n }).load(null, U1);
    rm.set(r, o);
  }
  try {
    await rm.get(r);
  } catch {
    throw new uT(
      `Failed to check if font is ready (${U1}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var q1 = {
  "FR;Inter": [
    {
      tag: "opsz",
      minValue: 14,
      maxValue: 32,
      defaultValue: 14,
      name: "Optical size",
    },
    {
      tag: "wght",
      minValue: 100,
      maxValue: 900,
      defaultValue: 400,
      name: "Weight",
    },
  ],
};
function im(e) {
  try {
    if (e === "framer") return X1(q1) ? q1 : void 0;
    {
      let t = (async () => {
        switch (e) {
          case "google":
            return (await import("./google-UJB733SC-K27EZNUT.mjs")).default;
          case "fontshare":
            return (await import("./fontshare-5ADQGVKG-ZKF65O56.mjs")).default;
          default:
            Ce(e);
        }
      })();
      return X1(t) ? t : void 0;
    }
  } catch (t) {
    console.error(t);
    return;
  }
}
function X1(e) {
  return be(e) && Object.values(e).every(pB);
}
function hB(e) {
  return be(e) && ue(e.tag);
}
function pB(e) {
  return Array.isArray(e) && e.every(hB);
}
var mB = class {
    constructor() {
      E(this, "enabled", !1),
        E(this, "bySelector", new Map()),
        E(this, "getGoogleFontsListPromise"),
        E(this, "getFontshareFontsListPromise"),
        E(this, "loadedSelectors", new Set()),
        E(this, "local"),
        E(this, "google"),
        E(this, "fontshare"),
        E(this, "framer"),
        E(this, "custom"),
        (this.local = new K4()),
        (this.google = new _r()),
        (this.fontshare = new ji()),
        (this.framer = new Su()),
        (this.custom = new eB()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      return (
        this.getGoogleFontsListPromise ||
          (this.getGoogleFontsListPromise = Promise.resolve().then(async () => {
            let { staticFonts: e, variableFonts: t } =
                await xt.fetchGoogleFontsList(),
              n = await im("google");
            for (let r of await this.google.importFonts(e, t, n))
              this.addFont(r);
            return { staticFonts: e, variableFonts: t };
          })),
        this.getGoogleFontsListPromise
      );
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = xt.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise,
          t = await im("fontshare");
        for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      let t = im("framer");
      this.framer.importFonts(e, t).forEach((n) => {
        this.addFont(n);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(Wo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      if (e)
        return e.startsWith(Wo)
          ? this.custom.getFontBySelector(e, t)
          : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: tm(t),
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = _r.parseVariant(n.variant);
        if (wu(o)) {
          let s = n.isVariable ? Sm(n.name) : n.name;
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: s,
            source: "google",
            category: void 0,
          };
        }
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = ji.parseVariant(r.variant);
        if (wu(o)) {
          let s = r.isVariable ? Sm(r.name) : r.name;
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: s,
            source: "fontshare",
            category: void 0,
          };
        }
      }
      let i = Su.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source,
        n = oT(e);
      switch (t) {
        case "local":
          return this.loadedSelectors.add(e.selector), 1;
        case "framer":
          if (
            (Z4.default.env.NODE_ENV !== "test" &&
              (await dT(e.family.name, e.style, e.weight)),
            n)
          ) {
            if (!e.file)
              return Promise.reject(`Unable to load font: ${e.selector}`);
            await G1(
              {
                family: tm(e),
                url: e.file,
                weight: e.weight,
                style: e.style,
                isVariableFont: n,
              },
              document
            );
          }
          return this.loadedSelectors.add(e.selector), 1;
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await G1(
                {
                  family: tm(e),
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                  isVariableFont: n,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          Ce(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(wa)),
        n = e.some((i) => i.startsWith(xa));
      if (t || n) {
        try {
          await this.importFontshareFonts();
        } catch (i) {
          ka("Failed to load Fontshare fonts:", i);
        }
        try {
          await this.importGoogleFonts();
        } catch (i) {
          ka("Failed to load Google fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !eu.isSelectorLoaded(i));
      if (n.length === 0) return;
      await eu.loadWebFontsFromSelectors(n),
        n.every((i) => eu.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return D(e, "Can\u2019t find Inter font"), e;
    }
  },
  eu = new mB();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
var hT = ((e) => (
    (e.Padding = "--framer-input-padding"),
    (e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
    (e.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
    (e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
    (e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
    (e.BorderColor = "--framer-input-border-color"),
    (e.BorderTopWidth = "--framer-input-border-top-width"),
    (e.BorderRightWidth = "--framer-input-border-right-width"),
    (e.BorderBottomWidth = "--framer-input-border-bottom-width"),
    (e.BorderLeftWidth = "--framer-input-border-left-width"),
    (e.BorderStyle = "--framer-input-border-style"),
    (e.Background = "--framer-input-background"),
    (e.FontFamily = "--framer-input-font-family"),
    (e.FontWeight = "--framer-input-font-weight"),
    (e.FontSize = "--framer-input-font-size"),
    (e.FontColor = "--framer-input-font-color"),
    (e.FontStyle = "--framer-input-font-style"),
    (e.FontLetterSpacing = "--framer-input-font-letter-spacing"),
    (e.FontTextAlignment = "--framer-input-font-text-alignment"),
    (e.FontLineHeight = "--framer-input-font-line-height"),
    (e.FontOpenType = "--framer-input-font-open-type-features"),
    (e.PlaceholderColor = "--framer-input-placeholder-color"),
    (e.BoxShadow = "--framer-input-box-shadow"),
    (e.FocusedBorderColor = "--framer-input-focused-border-color"),
    (e.FocusedBorderWidth = "--framer-input-focused-border-width"),
    (e.FocusedBorderStyle = "--framer-input-focused-border-style"),
    (e.FocusedBackground = "--framer-input-focused-background"),
    (e.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
    (e.FocusedTransition = "--framer-input-focused-transition"),
    (e.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
    (e.BooleanCheckedBorderColor =
      "--framer-input-boolean-checked-border-color"),
    (e.BooleanCheckedBorderWidth =
      "--framer-input-boolean-checked-border-width"),
    (e.BooleanCheckedBorderStyle =
      "--framer-input-boolean-checked-border-style"),
    (e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
    (e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
    (e.InvalidTextColor = "--framer-input-invalid-text-color"),
    (e.IconBackgroundImage = "--framer-input-icon-image"),
    (e.IconMaskImage = "--framer-input-icon-mask-image"),
    (e.IconColor = "--framer-input-icon-color"),
    (e.WrapperHeight = "--framer-input-wrapper-height"),
    e
  ))(hT || {}),
  Te = hT,
  Y1 = "framer-form-input",
  gB = "framer-form-input-wrapper";
function vB(e) {
  return typeof e == "number"
    ? e
    : e.startsWith("--")
    ? dt.variable(e)
    : e === ""
    ? '""'
    : e;
}
function dt(e, t) {
  let n = " ";
  for (let r in t) {
    let i = t[r];
    n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${vB(i)}; `;
  }
  return e + " {" + n + "}";
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith("--") ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(dt || (dt = {}));
var RW = [
  dt(`.${Y1}`, {
    padding: dt.variable(Te.Padding),
    background: "transparent",
    fontFamily: dt.variable(Te.FontFamily),
    fontWeight: dt.variable(Te.FontWeight),
    fontSize: dt.variable(Te.FontSize),
    fontStyle: dt.variable(Te.FontStyle),
    color: dt.variable(Te.FontColor),
    fontFeatureSettings: dt.variable(Te.FontOpenType),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: dt.variable(Te.WrapperHeight, "100%"),
    letterSpacing: dt.variable(Te.FontLetterSpacing),
    textAlign: dt.variable(Te.FontTextAlignment),
    lineHeight: dt.variable(Te.FontLineHeight),
  }),
  dt(`.${Y1}:focus-visible`, { outline: "none" }),
];
var EW = `var(${Te.BorderTopWidth}) var(${Te.BorderRightWidth}) var(${Te.BorderBottomWidth}) var(${Te.BorderLeftWidth})`,
  FW = [
    `.${gB}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Te.BorderRadiusTopLeft});
        border-top-right-radius: var(${Te.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Te.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Te.BorderRadiusBottomLeft});
        border-color: var(${Te.BorderColor});
        border-top-width: var(${Te.BorderTopWidth});
        border-right-width: var(${Te.BorderRightWidth});
        border-bottom-width: var(${Te.BorderBottomWidth});
        border-left-width: var(${Te.BorderLeftWidth});
        border-style: var(${Te.BorderStyle});
        transition: var(${Te.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ];
var om = 16,
  PW = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${om}px`,
    boxSizing: "content-box",
    padding: dt.variable(Te.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${om}px`,
    maskRepeat: "no-repeat",
    maskSize: `${om}px`,
    backgroundColor: dt.variable(Te.IconColor),
  };
var zW = x.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, draggable: s, ...a } = t,
    l = { ...a.style };
  r && delete l.background;
  let c = Pu(t.as);
  return me(c, {
    ...a,
    style: l,
    ref: n,
    children: [r && C(jk, { image: r, alt: o, draggable: s }), i],
  });
});
function yB(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var bB = /[^\p{Letter}\p{Number}()]+/gu,
  xB = /^-+|-+$/gu;
function wB(e) {
  return e.toLowerCase().replace(bB, "-").replace(xB, "");
}
var SB = /[&<>'"]/gu,
  kB = (e) =>
    e.replace(
      SB,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  CB =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function TB(e, t, n, r) {
  return e.replace(CB, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let p = l || c,
      y = Qm(p.replace(/&amp;/gu, "&"));
    if (!y || !y.target) return i;
    let g = t(y.target);
    if (!D1(g) || !D1(n)) return i;
    let b = g.path,
      h = n.path;
    if (!b || !h) return i;
    let m = ` data-framer-page-link-target="${y.target}"`,
      v = Cu(g, y.element ?? void 0);
    v && (m += ` data-framer-page-link-element="${y.element}"`);
    let S = au(p);
    if (!S || ue(S)) return i;
    kC(n, S, r) && (m += " data-framer-page-link-current");
    let k = b,
      w = Object.assign(
        {},
        r,
        (f = y.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(w).length > 0 && (k = k.replace(wC, (T, R) => "" + w[R])),
      (d = y.collectionItem) != null && d.pathVariables)
    ) {
      let T = new URLSearchParams(y.collectionItem.pathVariables);
      m += ` data-framer-page-link-path-variables="${T}"`;
    }
    return (k = hk(h, k)), o + a + `"${kB(k + (v ? `#${v}` : ""))}"` + m + u;
  });
}
var RB = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  pT = /[&<>"']/gu,
  EB = (() => new RegExp(pT.source))();
function K1(e) {
  return e && EB.test(e) ? e.replace(pT, (t) => RB[t] ?? "") : e || "";
}
var Q1 = "{{ text-placeholder }}",
  FB = "rich-text-wrapper",
  PB = Ae(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: p,
        top: y,
        bottom: g,
        center: b,
        className: h,
        stylesPresetsClassName: m,
        visible: v = !0,
        opacity: S,
        rotation: k = 0,
        verticalAlignment: w = "top",
        isEditable: T = !1,
        willChangeTransform: R,
        environment: O = ae.current,
        withExternalLayout: I = !1,
        positionSticky: N,
        positionStickyTop: z,
        positionStickyRight: j,
        positionStickyBottom: Y,
        positionStickyLeft: H,
        __htmlStructure: le,
        __fromCanvasComponent: ne = !1,
        _forwardedOverrideId: fe,
        _forwardedOverrides: Q,
        _usesDOMRect: se,
        children: we,
        ...Se
      } = t,
      he = Eu(),
      J = _u(t),
      Oe = V(null),
      Ee = n ?? Oe,
      { navigate: tt, getRoute: Ie } = Ko(),
      Fn = Ca();
    fM(t.preload ?? []), Bm(t, Ee);
    let at = A(Qo),
      Nn = Zo(),
      ce = a,
      Yt = fe ?? r;
    if (Yt && Q) {
      let Ke = Q[Yt];
      typeof Ke == "string" && (ce = Ke);
    }
    let lt = "";
    if (ce) {
      let Ke = K1(ce);
      lt = le ? le.replace(Q1, Ke) : `<p>${Ke}</p>`;
    } else if (o) lt = o;
    else if (l) {
      let Ke = K1(l);
      lt = le ? le.replace(Q1, Ke) : `<p>${Ke}</p>`;
    } else s && (lt = s);
    let fn = SC(),
      Ra = re(
        () => (Nn || !Ie || !Fn ? lt : TB(lt, Ie, Fn, fn)),
        [Nn, lt, Ie, Fn, fn]
      );
    if (
      (B(() => {
        let Ke = Ee.current;
        if (Ke === null) return;
        function fr(Kt) {
          let mi = Km(Kt.target, Ee.current);
          if (
            Kt.metaKey ||
            !tt ||
            !mi ||
            mi.getAttribute("target") === "_blank"
          )
            return;
          Wz(tt, mi, fn) && Kt.preventDefault();
        }
        return (
          Ke.addEventListener("click", fr),
          () => {
            Ke.removeEventListener("click", fr);
          }
        );
      }, [tt, fn]),
      gT(c, ne, Ee),
      Qe(() => {
        Fu();
      }, []),
      !v)
    )
      return null;
    let P = T && O() === ae.canvas,
      _ = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: mT(w),
        opacity: P ? 0 : S,
        flexShrink: 0,
      },
      L = ae.hasRestrictions(),
      U = Vm(t, he || 0, !1),
      pe = se && (u === "auto" || f === "auto"),
      pt =
        !!t.transformTemplate || !U || !L || ne || pe
          ? t.transformTemplate ?? zm(b)
          : void 0;
    if (!I) {
      if (U && L && !pe) {
        let Ke = Ot.getNumber(k).toFixed(4);
        (_.transform = `translate(${U.x}px, ${U.y}px) rotate(${Ke}deg)`),
          (_.width = U.width),
          (_.minWidth = U.width),
          (_.height = U.height);
      } else
        (_.left = d),
          (_.right = p),
          (_.top = y),
          (_.bottom = g),
          (_.width = u),
          (_.height = f),
          (_.rotate = k);
      N
        ? (!Nn || at) &&
          ((_.position = "sticky"),
          (_.willChange = "transform"),
          (_.zIndex = 1),
          (_.top = z),
          (_.right = j),
          (_.bottom = Y),
          (_.left = H))
        : Nn &&
          (t.positionFixed || t.positionAbsolute) &&
          (_.position = "absolute");
    }
    return (
      nC(t, _),
      tC(t, _),
      R && jm(_),
      Object.assign(_, t.style),
      C(Jt.div, {
        id: r,
        ref: Ee,
        ...Se,
        style: _,
        layoutId: J,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": b,
        className: iu(h, m, FB),
        transformTemplate: pt,
        dangerouslySetInnerHTML: { __html: Ra },
      })
    );
  });
function mT(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function gT(e, t, n) {
  let r = V([]);
  yB(r.current, e) ||
    ((r.current = e),
    eu.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t ||
        !n.current ||
        ae.current() !== ae.canvas ||
        (i > 0 && BA(n.current));
    }));
}
function km() {
  return { current: null };
}
async function vT(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((o, s) => {
      (r = o), t.signal.addEventListener("abort", () => s());
    });
  return (
    Object.defineProperty(e, "current", {
      get() {
        return n;
      },
      set(o) {
        if (((n = o), o === null)) {
          t.abort();
          return;
        }
        r(o);
      },
      configurable: !0,
    }),
    i
  );
}
var yT = {
  opacity: 1,
  y: 0,
  x: 0,
  scale: 1,
  rotate: 0,
  rotateX: 0,
  rotateY: 0,
  skewX: 0,
  skewY: 0,
  filter: "none",
};
function _B(e) {
  return e in yT;
}
function OB(e) {
  let t = {};
  for (let n in e) {
    if (!_B(n)) continue;
    let r = e[n],
      i = yT[n];
    Xe(r) || Xe(i) || (t[n] = [r, i]);
  }
  return t;
}
var IB =
  /\p{Regional_Indicator}{2}|\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?(?:\u{200d}\p{Emoji}\p{Emoji_Modifier}?\p{Variation_Selector}?)*|./gu;
function MB(e, t = "character", n, r) {
  switch (t) {
    case "character":
    case "line": {
      let i = e.split(" "),
        o = i.length - 1;
      return i.map((s, a) => {
        var l;
        let c = a === o,
          u = s.length <= 12;
        return me(
          pn,
          {
            children: [
              C("span", {
                style: { whiteSpace: u ? "nowrap" : "unset" },
                children:
                  (l = s.match(IB)) == null
                    ? void 0
                    : l.map((f, d) => {
                        let p = km();
                        return (
                          n.add(p),
                          C("span", { ref: p, style: r, children: f }, f + d)
                        );
                      }),
              }),
              c ? null : " ",
            ],
          },
          s + a + c
        );
      });
    }
    case "word": {
      let i = e.split(" "),
        o = i.length - 1;
      return i.map((s, a) => {
        let l = a === o,
          c = km();
        return (
          n.add(c),
          me(
            pn,
            {
              children: [
                C("span", { ref: c, style: r, children: s }),
                l ? null : " ",
              ],
            },
            s + a + l
          )
        );
      });
    }
    case "element":
    default:
      return e;
  }
}
function LB(e) {
  let t = e.type;
  switch (t) {
    case "appear":
      return e.tokenization ?? "character";
    default:
      Ce(t);
  }
}
function Z1(e) {
  let t = [];
  return (
    et(e.x) && t.push(`translateX(${e.x}px)`),
    et(e.y) && t.push(`translateY(${e.y}px)`),
    et(e.scale) && t.push(`scale(${e.scale})`),
    et(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    et(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    et(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    et(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    et(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(" ")
  );
}
function VB(e, t, n) {
  if (!n || !n.effect) return;
  let r = n.type;
  switch (r) {
    case "appear":
      switch (n.tokenization) {
        case "element":
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: Z1(n.effect),
              };
        case "line":
        case "word":
        case "character":
        default:
          return !e || !t
            ? { display: "inline-block" }
            : {
                display: "inline-block",
                opacity: n.effect.opacity,
                filter: n.effect.filter,
                transform: Z1(n.effect),
              };
      }
    default:
      Ce(r);
  }
}
function AB(e, t, n) {
  let r = wt(() => new Set()),
    i = Zo(),
    o = ae.current() === ae.export,
    a = n || !(i || o),
    l = V({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  l.current.effect = e;
  let c = e?.trigger ?? "onMount",
    u = e?.target,
    f = e?.threshold;
  B(() => {
    if (!a || n) return;
    l.current.hasMounted = !0;
    function y() {
      let { effect: g } = l.current;
      if (
        !a ||
        !g ||
        (g?.repeat !== !0 && l.current.hasAnimatedOnce) ||
        (g?.type === "appear" && l.current.isAnimating)
      )
        return;
      Object.assign(l.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let b = g.type;
      switch (b) {
        case "appear": {
          let { transition: h, startDelay: m, repeat: v, tokenization: S } = g,
            k = { current: void 0 };
          return (
            J1(
              S,
              g.effect,
              r,
              h,
              m,
              v,
              () => {
                Object.assign(l.current, { isAnimating: !1 });
              },
              k
            ),
            () => {
              var w;
              return (w = k.current) == null ? void 0 : w.call(k);
            }
          );
        }
        default:
          Ce(b);
      }
    }
    switch (c) {
      case "onMount":
        y();
        return;
      case "onInView": {
        let g = t?.current;
        return g ? fl(g, y, { amount: f ?? 0 }) : void 0;
      }
      case "onScrollTarget": {
        let g = u?.ref.current;
        return g
          ? fl(g, y, {
              amount: f ?? 0,
              root: document,
              margin: u?.offset ? `${u.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        Ce(c);
    }
  }, [a, r, n, t, u, f, c]);
  let d = !!e,
    p = e ? LB(e) : void 0;
  return re(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !d)) return;
        let { hasMounted: y, hasAnimatedOnce: g, effect: b } = l.current,
          h = VB(a, n || DB(y, g, b), l.current.effect);
        return {
          text: (m) => MB(m, p, r, h),
          props: (m) => {
            if (b?.tokenization !== "element") return;
            let v = km();
            return r.add(v), { ref: v, style: { ...m, ...h } };
          },
        };
      },
      play: () => {
        let { effect: y } = l.current;
        if (!y) return;
        let g = y.type;
        switch (g) {
          case "appear": {
            let { transition: b, startDelay: h } = y;
            J1(p, y.effect, r, b, h);
            break;
          }
          default:
            Ce(g);
        }
      },
    }),
    [a, d, r, n, p]
  );
}
function DB(e, t, n) {
  return !(
    (e && n?.trigger === "onMount") ||
    (t &&
      !n?.repeat &&
      (n?.trigger === "onInView" || n?.trigger === "onScrollTarget"))
  );
}
async function J1(e = "character", t, n, r, i = 0, o = !1, s, a) {
  let l = OB(t),
    c = new AbortController();
  switch ((a && (a.current = () => c.abort()), e)) {
    case "character":
    case "element":
    case "word": {
      let u = await zB(n, c);
      if (
        u === null ||
        (Qn(u, l, {
          ...r,
          restDelta: 0.001,
          delay: Sd(r?.delay ?? 0, { startDelay: i }),
        }).then(() => s?.()),
        !o || !a)
      )
        return;
      a.current = () =>
        void Qn(u, t, {
          ...r,
          restDelta: 0.001,
          delay: Sd(r?.delay ?? 0, { startDelay: i }),
        });
      return;
    }
    case "line": {
      try {
        for (let f of n) await vT(f, c);
      } catch {
        return;
      }
      let u;
      if (
        (q.read(() => {
          (u = BB(n)),
            u.length !== 0 &&
              q.update(() => {
                let f = u.map((d, p) =>
                  Qn(d, l, {
                    ...r,
                    restDelta: 0.001,
                    delay: i + p * (r?.delay ?? 0),
                  })
                );
                Promise.all(f).then(() => s?.());
              });
        }),
        !o || !a)
      )
        return;
      a.current = () => {
        u.length !== 0 &&
          u.forEach((f, d) => {
            Qn(f, t, {
              ...r,
              restDelta: 0.001,
              delay: i + d * (r?.delay ?? 0),
            });
          });
      };
      return;
    }
    default:
      Ce(e);
  }
}
async function zB(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let i = await vT(r, t);
      i && n.push(i);
    } catch {
      return null;
    }
  return n;
}
function BB(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let o = i.current.offsetTop,
      s = i.current.offsetHeight;
    !s || r === null || o === r
      ? n.push(i.current)
      : (t.push(n), (n = [i.current])),
      s && (r = o);
  }
  return t.push(n), t;
}
var ek = Ae(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    C(Jt.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: C(Jt.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    })
  ),
  $B = Ae((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = ae.current,
        fonts: d = [],
        height: p,
        isEditable: y = !1,
        left: g,
        name: b,
        opacity: h,
        positionSticky: m,
        positionStickyBottom: v,
        positionStickyLeft: S,
        positionStickyRight: k,
        positionStickyTop: w,
        right: T,
        rotation: R = 0,
        style: O,
        _initialStyle: I,
        stylesPresetsClassNames: N,
        text: z,
        top: j,
        verticalAlignment: Y = "top",
        visible: H = !0,
        width: le,
        willChangeTransform: ne,
        withExternalLayout: fe = !1,
        viewBox: Q,
        viewBoxScale: se = 1,
        effect: we,
        ...Se
      } = e,
      he = Eu(),
      J = Zo(),
      Oe = A(Qo),
      Ee = _u(e),
      tt = V(null),
      Ie = t ?? tt;
    Bm(e, Ie),
      gT(d, n, Ie),
      Qe(() => {
        Fu();
      }, []);
    let Fn = AB(we, Ie),
      at = re(() => {
        if (u) return bT(u, N, z, s, void 0, Fn.getTokenizer());
      }, [u, N, z, s, Fn]);
    if (!H) return null;
    let Nn = y && f() === ae.canvas,
      ce = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: mT(Y),
        opacity: Nn ? 0 : h,
        flexShrink: 0,
      },
      Yt = ae.hasRestrictions(),
      lt = Vm(e, he || 0, !1),
      fn = o && (le === "auto" || p === "auto"),
      P =
        !!e.transformTemplate || !lt || !Yt || n || fn
          ? e.transformTemplate ?? zm(c)
          : void 0;
    fe ||
      (lt && Yt && !fn
        ? ((ce.x = lt.x),
          (ce.y = lt.y),
          (ce.rotate = Ot.getNumber(R)),
          (ce.width = lt.width),
          (ce.minWidth = lt.width),
          (ce.height = lt.height))
        : ((ce.left = g),
          (ce.right = T),
          (ce.top = j),
          (ce.bottom = l),
          (ce.width = le),
          (ce.height = p),
          (ce.rotate = R)),
      m
        ? (!J || Oe) &&
          ((ce.position = "sticky"),
          (ce.willChange = "transform"),
          (ce.zIndex = 1),
          (ce.top = w),
          (ce.right = k),
          (ce.bottom = v),
          (ce.left = S))
        : J &&
          (e.positionFixed || e.positionAbsolute) &&
          (ce.position = "absolute")),
      nC(e, ce),
      tC(e, ce),
      ne && jm(ce),
      Object.assign(ce, I, O),
      Ee && (Se.layout = "preserve-aspect");
    let _ = Pu(e.as);
    return ue(e.viewBox)
      ? e.as !== void 0
        ? C(_, {
            ...Se,
            ref: Ie,
            style: ce,
            layoutId: Ee,
            transformTemplate: P,
            "data-framer-name": b,
            "data-framer-component-type": "RichTextContainer",
            children: C(ek, {
              viewBox: Q,
              viewBoxScale: se,
              style: { width: "100%", height: "100%" },
              children: at,
            }),
          })
        : C(ek, {
            ...Se,
            ref: Ie,
            style: ce,
            layoutId: Ee,
            viewBox: Q,
            viewBoxScale: se,
            transformTemplate: P,
            "data-framer-name": b,
            "data-framer-component-type": "RichTextContainer",
            children: at,
          })
      : C(_, {
          ...Se,
          ref: Ie,
          style: ce,
          layoutId: Ee,
          transformTemplate: P,
          "data-framer-name": b,
          "data-framer-component-type": "RichTextContainer",
          children: at,
        });
  });
function NB(e) {
  return e.type === pn;
}
function jB(e) {
  return e.type === "br";
}
function bT(e, t, n, r, i = {}, o, s = NB(e) ? -1 : 0) {
  let a = hn.toArray(e.props.children);
  ue(n) && (a = a.slice(0, 1));
  let l = !0;
  a = a.map((f) => {
    if (((!Lt(f) || !jB(f)) && (l = !1), Lt(f)))
      return bT(f, t, n, r, i, o, s + 1);
    let d = ue(n) ? n : f;
    return ue(d) && o ? o.text(d) : d;
  });
  let { ["data-preset-tag"]: c, ...u } = e.props;
  if (ue(e.type) || dl(e.type)) {
    let f = xd(e.type) || e.type,
      d = c || f,
      p = ue(d) ? t?.[d] : void 0;
    (u.className = iu("framer-text", u.className, p)),
      o && s === 0 && !l && Object.assign(u, o.props(u.style));
    let y =
        f === "h1" ||
        f === "h2" ||
        f === "h3" ||
        f === "h4" ||
        f === "h5" ||
        f === "h6",
      g = t?.anchor;
    if (y && g) {
      let b = HB(a, i);
      u.id = b;
      let h = iu("framer-text", g),
        m = C("a", { href: `#${b}`, className: h, children: a });
      (u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (a = [m]);
    }
  }
  return pr(e, u, ...a);
}
function HB(e, t) {
  let n = e.map(Cm).join(""),
    r = wB(n),
    i = t[r] ?? 0;
  return i > 0 && (r += `-${i}`), (t[r] = i + 1), r;
}
function Cm(e) {
  return ue(e) || et(e)
    ? e.toString()
    : Lt(e)
    ? Cm(e.props.children)
    : Array.isArray(e)
    ? e.map(Cm).join("")
    : "";
}
var WW = Ae(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (ue(o)) {
    !r.stylesPresetsClassName &&
      be(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let s = { [ue(t) ? "html" : "htmlFromDesign"]: o };
    return C(PB, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && ue(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return C($B, { ...r, ref: i, children: Lt(o) ? o : void 0 });
});
var sm,
  WB = (() =>
    !RA() &&
    typeof Document < "u" &&
    typeof Document.parseHTMLUnsafe == "function")();
function UB(e, t) {
  return WB && !t
    ? Document.parseHTMLUnsafe(e)
    : (sm ?? (sm = new DOMParser()), sm.parseFromString(e, t ?? "text/html"));
}
var tk = Lr(),
  GB = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  nk =
    "position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict",
  qB = class {
    constructor() {
      E(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = `svg${String(qk(e))}_${String(e.length)}`);
        let i = e,
          o,
          s = XB(e);
        s &&
          (t && YB(s, n),
          (s.id = n),
          (o = JB(s)),
          s.removeAttribute("xmlns"),
          s.removeAttribute("xlink"),
          s.removeAttribute("xmlns:xlink"),
          (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      if (tk) {
        let t = document?.getElementById(e.id);
        t?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      if (tk) {
        let s = document.getElementById("svg-templates");
        if (
          (s ||
            ((s = document.createElement("div")),
            (s.id = "svg-templates"),
            (s.ariaHidden = "true"),
            (s.style.cssText = nk),
            document.body.appendChild(s)),
          !document.getElementById(t))
        ) {
          let a = document.createElement("div");
          a.innerHTML = e;
          let l = a.firstElementChild;
          l && ((l.id = t), s.appendChild(l));
        }
      }
      let r = n ? `0 0 ${n.width} ${n.height}` : void 0,
        o = `<svg style="width:100%;height:100%"${
          r ? ` viewBox="${r}"` : ""
        }><use href="#${t}"/></svg>`;
      return new GB(t, e, o, r);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [];
      return (
        e.push(`<div id="svg-templates" style="${nk}" aria-hidden="true">`),
        this.entries.forEach((t) => e.push(t.svg)),
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  qW = new qB();
function XB(e) {
  try {
    let n = UB(e).getElementsByTagName("svg")[0];
    if (!n) throw Error("no svg element found");
    return n;
  } catch {
    return;
  }
}
function YB(e, t) {
  let n = KB(t);
  xT(e, n);
}
function KB(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function xT(e, t) {
  QB(e, t),
    Array.from(e.children).forEach((r) => {
      xT(r, t);
    });
}
function QB(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var ZB = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function rk(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (ZB[n[2]] || 1));
}
function JB(e) {
  let t = rk(e.getAttribute("width")),
    n = rk(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
var e$ = 1e3;
function iU(e) {
  return e > e$ ? "lazy" : void 0;
}
function oU(e, t, n) {
  let r = wT(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function sU(e) {
  return e.fonts ?? [];
}
function aU(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : wT(e);
}
function wT(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) n$(r) ? n.push(r) : t.fonts.push(r$(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var t$ = "explicitInter";
function n$(e) {
  return t$ in e;
}
function r$(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith(
          "https://framerusercontent.com/third-party-assets/fontshare/"
        )
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
function lU(e, t) {
  let n = `${e}-start`;
  performance.mark(n), t();
  let r = `${e}-end`;
  performance.mark(r), performance.measure(e, n, r);
}
tl.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = Ge(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  x as a,
  hn as b,
  pn as c,
  pr as d,
  Ki as e,
  Tg as f,
  Ae as g,
  Ia as h,
  St as i,
  G as j,
  A as k,
  B as l,
  gi as m,
  Qe as n,
  re as o,
  V as p,
  Fe as q,
  kt as r,
  ct as s,
  C as t,
  me as u,
  q as v,
  ze as w,
  qn as x,
  Jt as y,
  V0 as z,
  Kn as A,
  Vt as B,
  u_ as C,
  j0 as D,
  D_ as E,
  H0 as F,
  U0 as G,
  oO as H,
  vS as I,
  K2 as J,
  b6 as K,
  E6 as L,
  L6 as M,
  XM as N,
  B6 as O,
  N6 as P,
  H6 as Q,
  Ek as R,
  ae as S,
  Z6 as T,
  eV as U,
  rj as V,
  JV as W,
  ij as X,
  Xj as Y,
  iu as Z,
  HH as _,
  YH as $,
  KH as aa,
  u8 as ba,
  _z as ca,
  vC as da,
  g8 as ea,
  yC as fa,
  S8 as ga,
  $z as ha,
  E8 as ia,
  B8 as ja,
  H8 as ka,
  U8 as la,
  O4 as ma,
  X8 as na,
  I4 as oa,
  M4 as pa,
  Y8 as qa,
  J8 as ra,
  eW as sa,
  dW as ta,
  eu as ua,
  zW as va,
  WW as wa,
  qW as xa,
  iU as ya,
  oU as za,
  sU as Aa,
  aU as Ba,
  lU as Ca,
};
//# sourceMappingURL=chunk-BC6VH6JS.mjs.map
